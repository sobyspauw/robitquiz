#!/usr/bin/env python3
"""
Check final status of all quiz files - how many have 100 questions.
"""

import os
import re
from pathlib import Path

def count_questions(filepath):
    """Count questions in a file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            return len(re.findall(r'question:\s*{', content))
    except:
        return 0

def check_all_subjects():
    base_path = Path("src/questions/data/subjects")

    subjects = [
        'ai', 'board-games', 'books', 'currencies', 'desserts',
        'dinosaurs', 'drinks', 'egypt', 'f1', 'famous-buildings',
        'famous-people', 'food'
    ]

    total_files = 0
    files_complete = 0
    files_incomplete = 0

    print("=" * 80)
    print("FINAL STATUS REPORT - All Quiz Files")
    print("=" * 80)

    for subject in subjects:
        subject_path = base_path / subject
        if not subject_path.exists():
            print(f"\n[MISSING] {subject}")
            continue

        subject_total = 0
        subject_complete = 0
        subject_incomplete = 0
        incomplete_details = []

        subcategories = [d.name for d in subject_path.iterdir() if d.is_dir()]

        for subcategory in subcategories:
            for level in range(1, 11):
                filepath = subject_path / subcategory / f"level{level}.js"
                if filepath.exists():
                    count = count_questions(str(filepath))
                    subject_total += 1
                    total_files += 1

                    if count >= 100:
                        subject_complete += 1
                        files_complete += 1
                    else:
                        subject_incomplete += 1
                        files_incomplete += 1
                        if count < 100:  # Only show if actually incomplete
                            incomplete_details.append(f"  - {subcategory}/level{level}: {count} questions")

        # Calculate percentage
        if subject_total > 0:
            percent = (subject_complete / subject_total) * 100
        else:
            percent = 0

        print(f"\n{subject.upper()}:")
        print(f"  Total files: {subject_total}")
        print(f"  Complete (100+ questions): {subject_complete}")
        print(f"  Incomplete: {subject_incomplete}")
        print(f"  Progress: {percent:.1f}%")

        if incomplete_details and len(incomplete_details) <= 10:
            print("  Incomplete files:")
            for detail in incomplete_details[:10]:
                print(detail)
            if len(incomplete_details) > 10:
                print(f"  ... and {len(incomplete_details) - 10} more")

    print("\n" + "=" * 80)
    print("OVERALL SUMMARY:")
    print(f"  Total files: {total_files}")
    print(f"  Complete (100+ questions): {files_complete}")
    print(f"  Incomplete: {files_incomplete}")
    if total_files > 0:
        overall_percent = (files_complete / total_files) * 100
        print(f"  Overall progress: {overall_percent:.1f}%")
    print("=" * 80)

    # Calculate total questions
    total_questions = files_complete * 100 + (files_incomplete * 40)  # Assuming incomplete have 40
    print(f"\nEstimated total questions: {total_questions:,}")
    print(f"Questions added in expansion: {(files_complete * 60):,}")

if __name__ == "__main__":
    check_all_subjects()