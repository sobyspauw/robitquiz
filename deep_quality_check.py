#!/usr/bin/env python3
"""
Deep quality check - check for template questions and quality issues.
"""

import os
import re
from pathlib import Path
import random

class QualityChecker:
    def __init__(self):
        self.base_path = Path("src/questions/data/subjects")
        self.template_patterns = [
            r'question \d+\?',  # "question 41?"
            r'Question \d+ about',  # "Question 42 about..."
            r'pregunta \d+',  # Spanish template
            r'Frage \d+',  # German template
            r'vraag \d+',  # Dutch template
            r'Answer [A-D]\d+',  # "Answer A45"
            r'Option [A-D]\d+',  # "Option B46"
            r'Q\d+\.',  # "Q51."
            r'P\d+\.',  # "P51." Spanish
            r'F\d+\.',  # "F51." German
            r'V\d+\.',  # "V51." Dutch
            r'Option [A-D] for Q\d+',  # "Option A for Q41"
            r'technical question \d+',
            r'advanced .* question \d+',
            r'F1 .* question \d+'
        ]

        self.files_with_templates = []
        self.files_checked = 0
        self.total_template_questions = 0
        self.character_violations = []

    def check_file(self, filepath, subject, subcategory, level):
        """Check a single file for quality issues."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Count total questions
            total_questions = len(re.findall(r'question:\s*{', content))

            # Check for template patterns
            template_count = 0
            for pattern in self.template_patterns:
                matches = len(re.findall(pattern, content, re.IGNORECASE))
                template_count += matches

            # Check character limits based on level
            # Level 1-5: ~120 chars, Level 6-8: ~140 chars, Level 9-10: ~160 chars
            if level <= 5:
                max_chars = 120
            elif level <= 8:
                max_chars = 140
            else:
                max_chars = 160

            # Find questions that are too long
            en_questions = re.findall(r'en:\s*"([^"]+)"', content)
            long_questions = []
            for q in en_questions[:10]:  # Check first 10 questions
                if len(q) > max_chars + 20:  # Allow some margin
                    long_questions.append((q[:50] + "...", len(q)))

            # Check for real content vs templates
            real_content_indicators = [
                'Hamilton', 'Verstappen', 'Ferrari', 'Mercedes',  # F1
                'chocolate', 'vanilla', 'cake', 'cookie',  # Desserts
                'coffee', 'wine', 'beer', 'tea',  # Drinks
                'pyramid', 'pharaoh', 'hieroglyph',  # Egypt
                'chess', 'poker', 'monopoly',  # Board games
                'Einstein', 'Shakespeare', 'Napoleon',  # Famous people
                'Eiffel', 'Colosseum', 'Taj Mahal',  # Buildings
                'dollar', 'euro', 'bitcoin',  # Currencies
                'T-Rex', 'Jurassic', 'fossil',  # Dinosaurs
                'pasta', 'salad', 'barbecue',  # Food
                'Harry Potter', 'Lord of the Rings',  # Books
                'neural', 'algorithm', 'machine learning'  # AI
            ]

            has_real_content = any(indicator.lower() in content.lower() for indicator in real_content_indicators)

            # Report findings
            if template_count > 10:  # More than 10 template patterns found
                self.files_with_templates.append({
                    'file': f"{subject}/{subcategory}/level{level}.js",
                    'total_questions': total_questions,
                    'template_count': template_count,
                    'percentage': (template_count / max(total_questions * 4, 1)) * 100,  # *4 for all languages
                    'has_real_content': has_real_content
                })
                self.total_template_questions += template_count

            if long_questions:
                self.character_violations.append({
                    'file': f"{subject}/{subcategory}/level{level}.js",
                    'level': level,
                    'max_chars': max_chars,
                    'violations': long_questions[:3]  # Show first 3
                })

            self.files_checked += 1
            return total_questions, template_count, has_real_content

        except Exception as e:
            print(f"Error checking {filepath}: {e}")
            return 0, 0, False

    def check_all_subjects(self):
        """Check all subjects for quality issues."""
        subjects = [
            'ai', 'board-games', 'books', 'currencies', 'desserts',
            'dinosaurs', 'drinks', 'egypt', 'f1', 'famous-buildings',
            'famous-people', 'food'
        ]

        print("=" * 80)
        print("DEEP QUALITY CHECK - SEARCHING FOR TEMPLATE QUESTIONS")
        print("=" * 80)

        for subject in subjects:
            subject_path = self.base_path / subject
            if not subject_path.exists():
                continue

            subcategories = [d.name for d in subject_path.iterdir() if d.is_dir()]

            for subcategory in subcategories:
                for level in range(1, 11):
                    filepath = subject_path / subcategory / f"level{level}.js"
                    if filepath.exists():
                        self.check_file(filepath, subject, subcategory, level)

        # Print detailed report
        print(f"\n{'=' * 80}")
        print("QUALITY CHECK RESULTS:")
        print(f"{'=' * 80}")

        print(f"\nFiles checked: {self.files_checked}")
        print(f"Files with template questions: {len(self.files_with_templates)}")
        print(f"Total template patterns found: {self.total_template_questions}")

        if self.files_with_templates:
            print(f"\n{'=' * 80}")
            print("FILES WITH TEMPLATE QUESTIONS (Top 20 worst):")
            print(f"{'=' * 80}")

            # Sort by percentage of templates
            sorted_files = sorted(self.files_with_templates, key=lambda x: x['percentage'], reverse=True)

            for file_info in sorted_files[:20]:
                real_marker = "[REAL]" if file_info['has_real_content'] else "[TEMPLATE]"
                print(f"\n{file_info['file']}:")
                print(f"  Total questions: {file_info['total_questions']}")
                print(f"  Template patterns: {file_info['template_count']}")
                print(f"  Template percentage: {file_info['percentage']:.1f}%")
                print(f"  Has real content: {real_marker}")

        if self.character_violations:
            print(f"\n{'=' * 80}")
            print("CHARACTER LIMIT VIOLATIONS (First 10):")
            print(f"{'=' * 80}")

            for violation in self.character_violations[:10]:
                print(f"\n{violation['file']} (Level {violation['level']}, max {violation['max_chars']} chars):")
                for q, length in violation['violations']:
                    print(f"  - {q} ({length} chars)")

        # Sample random files to show actual content
        print(f"\n{'=' * 80}")
        print("RANDOM SAMPLE OF ACTUAL QUESTIONS:")
        print(f"{'=' * 80}")

        sample_files = random.sample(list(self.files_with_templates), min(5, len(self.files_with_templates)))
        for file_info in sample_files:
            parts = file_info['file'].split('/')
            filepath = self.base_path / parts[0] / parts[1] / parts[2]

            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Find a question
            question_match = re.search(r'question:\s*{\s*en:\s*"([^"]+)"', content)
            if question_match:
                print(f"\n{file_info['file']}:")
                print(f"  Sample: \"{question_match.group(1)}\"")

        # Final verdict
        print(f"\n{'=' * 80}")
        print("FINAL VERDICT:")
        print(f"{'=' * 80}")

        template_percentage = (len(self.files_with_templates) / self.files_checked) * 100
        print(f"\n{template_percentage:.1f}% of files contain template questions")

        if template_percentage > 50:
            print("\n[WARNING] More than half the files contain template questions!")
            print("These need to be replaced with real quiz content.")
        elif template_percentage > 20:
            print("\n[CAUTION] Significant number of template questions found.")
            print("Consider replacing templates with real content.")
        else:
            print("\n[OK] Most files appear to have real content.")

def main():
    checker = QualityChecker()
    checker.check_all_subjects()

if __name__ == "__main__":
    main()