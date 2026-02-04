#!/usr/bin/env python3
"""
Validation script to check if expanded files are properly formatted.
"""

import os
import re
import json
import sys

def count_questions(file_path):
    """Count the number of questions in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        matches = re.findall(r'question:\s*\{', content)
        return len(matches)
    except Exception as e:
        print(f"Error counting questions: {e}")
        return -1

def validate_file_structure(file_path):
    """Validate that the file has proper JavaScript structure."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        issues = []

        # Check for IIFE wrapper
        if not content.strip().startswith('(function()'):
            issues.append("Missing IIFE wrapper: (function() {")

        # Check for questions array
        if 'questions: [' not in content:
            issues.append("Missing questions array declaration")

        # Check for module exports
        if 'module.exports' not in content and 'window.level' not in content:
            issues.append("Missing module.exports or window assignment")

        # Check for proper closing
        if not content.strip().endswith('();'):
            issues.append("Missing IIFE closing: )();")

        # Count braces - they should be balanced
        open_braces = content.count('{')
        close_braces = content.count('}')
        if open_braces != close_braces:
            issues.append(f"Unbalanced braces: {open_braces} open, {close_braces} close")

        # Count brackets - they should be balanced
        open_brackets = content.count('[')
        close_brackets = content.count(']')
        if open_brackets != close_brackets:
            issues.append(f"Unbalanced brackets: {open_brackets} open, {close_brackets} close")

        # Check for common syntax errors
        if ',,' in content:
            issues.append("Double comma found")

        if ',]' in content:
            issues.append("Trailing comma before bracket found")

        if ',}' in content:
            # Count occurrences - some might be valid in certain contexts
            count = content.count(',}')
            if count > 0:
                issues.append(f"Trailing comma before brace found ({count} occurrences)")

        # Check that each question has required fields
        question_blocks = re.findall(
            r'\{\s*question:\s*\{.*?\}\s*,\s*options:\s*\[.*?\]\s*,\s*correct:\s*\d+\s*,\s*explanation:\s*\{.*?\}\s*\}',
            content,
            re.DOTALL
        )

        questions_count = count_questions(file_path)
        if len(question_blocks) != questions_count:
            issues.append(f"Question structure mismatch: found {len(question_blocks)} complete blocks but {questions_count} question markers")

        return issues

    except Exception as e:
        return [f"Error validating file: {e}"]

def validate_question_content(file_path, sample_size=5):
    """Validate the content of questions (check for proper translations, etc.)."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        issues = []

        # Extract all question objects
        questions = re.findall(
            r'\{\s*question:\s*\{(.*?)\}\s*,\s*options:\s*\[(.*?)\]\s*,\s*correct:\s*(\d+)\s*,\s*explanation:\s*\{(.*?)\}\s*\}',
            content,
            re.DOTALL
        )

        for i, (question_text, options_text, correct, explanation_text) in enumerate(questions[:sample_size]):
            # Check that each language is present
            required_langs = ['en', 'es', 'de', 'nl']

            for lang in required_langs:
                if f'"{lang}":' not in question_text and f"'{lang}':" not in question_text:
                    issues.append(f"Question {i+1}: Missing language '{lang}' in question text")

                if f'"{lang}":' not in explanation_text and f"'{lang}':" not in explanation_text:
                    issues.append(f"Question {i+1}: Missing language '{lang}' in explanation")

            # Check that correct answer index is valid (0-3)
            try:
                correct_idx = int(correct)
                if correct_idx < 0 or correct_idx > 3:
                    issues.append(f"Question {i+1}: Invalid correct answer index: {correct_idx}")
            except ValueError:
                issues.append(f"Question {i+1}: Invalid correct answer format: {correct}")

        return issues

    except Exception as e:
        return [f"Error validating question content: {e}"]

def main():
    """Main validation function."""
    if len(sys.argv) < 2:
        print("Usage: python validate_expansion.py <file_path>")
        sys.exit(1)

    file_path = sys.argv[1]

    if not os.path.exists(file_path):
        print(f"Error: File not found: {file_path}")
        sys.exit(1)

    print("=" * 80)
    print("VALIDATING EXPANDED QUIZ FILE")
    print("=" * 80)
    print(f"File: {file_path}")
    print()

    # Count questions
    question_count = count_questions(file_path)
    print(f"Question count: {question_count}")

    if question_count < 100:
        print(f"⚠ Warning: File has fewer than 100 questions")
    elif question_count >= 100:
        print(f"✓ File has {question_count} questions (target met)")

    print()

    # Validate structure
    print("Validating file structure...")
    structure_issues = validate_file_structure(file_path)

    if structure_issues:
        print("✗ Structure issues found:")
        for issue in structure_issues:
            print(f"  - {issue}")
    else:
        print("✓ File structure is valid")

    print()

    # Validate content
    print("Validating question content (sample)...")
    content_issues = validate_question_content(file_path)

    if content_issues:
        print("✗ Content issues found:")
        for issue in content_issues:
            print(f"  - {issue}")
    else:
        print("✓ Question content is valid")

    print()

    # Overall result
    total_issues = len(structure_issues) + len(content_issues)
    if total_issues == 0 and question_count >= 100:
        print("=" * 80)
        print("✓ VALIDATION PASSED")
        print("=" * 80)
        sys.exit(0)
    else:
        print("=" * 80)
        print(f"✗ VALIDATION FAILED ({total_issues} issues found)")
        print("=" * 80)
        sys.exit(1)

if __name__ == "__main__":
    main()
