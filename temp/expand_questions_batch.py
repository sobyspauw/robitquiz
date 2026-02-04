#!/usr/bin/env python3
"""
Batch expansion script for RobitQuiz question files
Expands files from 40 to 100 questions systematically
"""

import os
import json
import re
from pathlib import Path

def count_questions_in_file(filepath):
    """Count the number of questions in a JS file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # Count occurrences of "question:" pattern
            return len(re.findall(r'question:\s*{', content))
    except:
        return -1

def get_files_needing_expansion(base_path):
    """Find all files that need expansion from 40 to 100 questions"""
    files_to_expand = []

    subjects = ['famous-people', 'famous-buildings']

    for subject in subjects:
        subject_path = os.path.join(base_path, subject)
        if not os.path.exists(subject_path):
            continue

        # Walk through all subdirectories
        for root, dirs, files in os.walk(subject_path):
            for file in files:
                if file.endswith('.js') and file.startswith('level'):
                    filepath = os.path.join(root, file)
                    question_count = count_questions_in_file(filepath)

                    if question_count > 0 and question_count < 100:
                        relative_path = os.path.relpath(filepath, base_path)
                        files_to_expand.append({
                            'path': filepath,
                            'relative': relative_path,
                            'current_count': question_count,
                            'needed': 100 - question_count
                        })

    return files_to_expand

def main():
    base_path = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects'

    print("=== RobitQuiz Question File Status ===\n")

    files = get_files_needing_expansion(base_path)

    # Group by subject and category
    by_subject = {}
    for file_info in files:
        parts = file_info['relative'].split(os.sep)
        subject = parts[0]
        category = parts[1] if len(parts) > 2 else 'root'

        if subject not in by_subject:
            by_subject[subject] = {}
        if category not in by_subject[subject]:
            by_subject[subject][category] = []

        by_subject[subject][category].append(file_info)

    # Print summary
    total_files = len(files)
    total_questions_needed = sum(f['needed'] for f in files)

    print(f"Total files needing expansion: {total_files}")
    print(f"Total questions needed: {total_questions_needed}\n")

    # Print detailed breakdown
    for subject in sorted(by_subject.keys()):
        print(f"\n{'='*50}")
        print(f"SUBJECT: {subject}")
        print(f"{'='*50}")

        for category in sorted(by_subject[subject].keys()):
            files_in_cat = by_subject[subject][category]
            print(f"\n  {category}:")
            print(f"  Files to expand: {len(files_in_cat)}")

            for file_info in sorted(files_in_cat, key=lambda x: x['relative']):
                filename = os.path.basename(file_info['path'])
                print(f"    - {filename}: {file_info['current_count']} -> 100 (needs {file_info['needed']} more)")

    # Create a priority list
    print(f"\n{'='*50}")
    print("PRIORITY ORDER (by questions needed):")
    print(f"{'='*50}\n")

    sorted_files = sorted(files, key=lambda x: x['current_count'], reverse=True)

    for i, file_info in enumerate(sorted_files[:20], 1):
        print(f"{i:2}. {file_info['relative']}")
        print(f"    Current: {file_info['current_count']}, Needs: {file_info['needed']} more")

    if len(sorted_files) > 20:
        print(f"\n... and {len(sorted_files) - 20} more files")

    # Save to JSON for processing
    output_file = 'files_to_expand.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(files, f, indent=2)
    print(f"\nFile list saved to: {output_file}")

if __name__ == "__main__":
    main()