#!/usr/bin/env python3
"""
Analyze how many questions are real vs templates in detail.
"""

import os
import re
from pathlib import Path

def analyze_questions():
    base_path = Path("src/questions/data/subjects")

    # Statistics
    total_files = 0
    files_with_40_real = 0
    files_with_100_real = 0
    files_with_mixed = 0
    total_real_questions = 0
    total_template_questions = 0

    # Template patterns
    template_patterns = [
        r'question \d+\?',
        r'Question \d+ about',
        r'pregunta \d+',
        r'Frage \d+',
        r'vraag \d+',
        r'Answer [A-D]\d+',
        r'Option [A-D]\d+',
        r'Q\d+\.',
        r'Option [A-D] for Q\d+',
        r'technical question \d+',
        r'advanced .* question \d+',
        r'What about .* \(Q\d+\)\?'
    ]

    subjects = [
        'ai', 'board-games', 'books', 'currencies', 'desserts',
        'dinosaurs', 'drinks', 'egypt', 'f1', 'famous-buildings',
        'famous-people', 'food'
    ]

    subject_stats = {}

    for subject in subjects:
        subject_path = base_path / subject
        if not subject_path.exists():
            continue

        subject_real = 0
        subject_template = 0
        subject_files = 0

        subcategories = [d.name for d in subject_path.iterdir() if d.is_dir()]

        for subcategory in subcategories:
            for level in range(1, 11):
                filepath = subject_path / subcategory / f"level{level}.js"
                if filepath.exists():
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()

                    # Count total questions
                    total_q = len(re.findall(r'question:\s*{', content))

                    # Check for templates
                    is_template = False
                    for pattern in template_patterns:
                        if re.search(pattern, content, re.IGNORECASE):
                            is_template = True
                            break

                    # Estimate based on patterns
                    # If has "question 41" through "question 100", likely added 60 templates
                    has_q41 = 'question 41' in content.lower() or 'vraag 41' in content.lower()
                    has_q100 = 'question 100' in content.lower() or 'vraag 100' in content.lower()

                    if has_q41 and has_q100:
                        # Likely has 40 real + 60 template
                        real_count = 40
                        template_count = 60
                        files_with_mixed += 1
                    elif total_q == 100 and is_template:
                        # Check if ALL questions are templates
                        if content.count('Option A') > 90:  # Likely all template
                            real_count = 0
                            template_count = 100
                        else:
                            # Mixed content
                            real_count = 40
                            template_count = 60
                            files_with_mixed += 1
                    elif total_q == 40:
                        # Only original questions
                        real_count = 40
                        template_count = 0
                        files_with_40_real += 1
                    elif total_q == 100 and not is_template:
                        # Full real questions
                        real_count = 100
                        template_count = 0
                        files_with_100_real += 1
                    else:
                        # Default assumption
                        real_count = min(40, total_q)
                        template_count = max(0, total_q - 40)

                    subject_real += real_count
                    subject_template += template_count
                    subject_files += 1
                    total_real_questions += real_count
                    total_template_questions += template_count
                    total_files += 1

        subject_stats[subject] = {
            'files': subject_files,
            'real': subject_real,
            'template': subject_template,
            'percentage_real': (subject_real / max(subject_real + subject_template, 1)) * 100
        }

    # Print report
    print("=" * 80)
    print("REAL vs TEMPLATE QUESTIONS ANALYSIS")
    print("=" * 80)

    print("\n BY SUBJECT:")
    print("-" * 80)
    print(f"{'Subject':<20} {'Files':<10} {'Real Q':<15} {'Template Q':<15} {'% Real':<10}")
    print("-" * 80)

    for subject, stats in sorted(subject_stats.items(), key=lambda x: x[1]['percentage_real']):
        print(f"{subject:<20} {stats['files']:<10} {stats['real']:<15,} {stats['template']:<15,} {stats['percentage_real']:<10.1f}%")

    print("\n" + "=" * 80)
    print("OVERALL STATISTICS:")
    print("=" * 80)

    print(f"\nTotal files analyzed: {total_files}")
    print(f"Files with 40 real questions only: {files_with_40_real}")
    print(f"Files with 100 real questions: {files_with_100_real}")
    print(f"Files with mixed (40 real + 60 template): {files_with_mixed}")

    print(f"\nTotal real questions: {total_real_questions:,}")
    print(f"Total template questions: {total_template_questions:,}")
    print(f"Overall percentage real: {(total_real_questions / max(total_real_questions + total_template_questions, 1)) * 100:.1f}%")

    print("\n" + "=" * 80)
    print("CONCLUSION:")
    print("=" * 80)

    if total_template_questions > total_real_questions:
        print("\n[CRITICAL] More template questions than real questions!")
        print(f"Need to replace {total_template_questions:,} template questions with real content.")
        print("\nThe expansion added mostly placeholder content that needs to be replaced.")
    else:
        print("\n[GOOD] More real questions than templates.")

    # Show sample of template question
    print("\n" + "=" * 80)
    print("SAMPLE TEMPLATE QUESTIONS FOUND:")
    print("=" * 80)

    sample_file = base_path / "f1" / "Rivaliteiten" / "level5.js"
    if sample_file.exists():
        with open(sample_file, 'r', encoding='utf-8') as f:
            content = f.read()

        matches = re.findall(r'en:\s*"(.*question \d+.*?)"', content)
        if matches:
            print(f"\nFrom f1/Rivaliteiten/level5.js:")
            for match in matches[:3]:
                print(f'  - "{match}"')

analyze_questions()