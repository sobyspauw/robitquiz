#!/usr/bin/env python3
"""
Batch expansion script for famous-people quiz questions.
Expands files from 40 to 100 questions efficiently.
"""

import os
import json
import re
from pathlib import Path

def get_files_to_expand():
    """Get all famous-people files that need expansion."""
    base_path = Path("src/questions/data/subjects/famous-people")
    files_to_expand = []

    categories = [
        ("Actors and Actresses", list(range(3, 11))),  # level3-10 need expansion
        ("Artists", [9, 10]),  # level9 needs 2 more, level10 needs many
        ("Authors and Writers", list(range(1, 11))),  # all need expansion
        ("Entrepreneurs", list(range(3, 11))),  # level3-10 need expansion
        ("Historical Figures", list(range(2, 11))),  # level2-10 need expansion
        ("Musicians", list(range(4, 11))),  # level4-10 need expansion
        ("Political Leaders", list(range(2, 11))),  # level2-10 need expansion
        ("Scientists", list(range(3, 11))),  # level3-10 need expansion
        ("Social Media Influencers", list(range(1, 11))),  # all need expansion
        ("Sports Icons", list(range(1, 11))),  # all need expansion
    ]

    for category, levels in categories:
        for level in levels:
            file_path = base_path / category / f"level{level}.js"
            if file_path.exists():
                files_to_expand.append({
                    'path': str(file_path),
                    'category': category,
                    'level': level
                })

    return files_to_expand

def count_questions(file_path):
    """Count the number of questions in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            return len(re.findall(r'question:\s*{', content))
    except:
        return 0

def main():
    files = get_files_to_expand()

    print(f"Found {len(files)} files that need expansion\n")
    print("Files to expand (sorted by category and level):")
    print("=" * 60)

    current_category = None
    total_questions_needed = 0

    for file_info in files:
        if current_category != file_info['category']:
            if current_category:
                print()
            current_category = file_info['category']
            print(f"\n{current_category}:")

        current_count = count_questions(file_info['path'])
        questions_needed = max(0, 100 - current_count)
        total_questions_needed += questions_needed

        status = "✓" if current_count >= 100 else f"needs {questions_needed} more"
        print(f"  Level {file_info['level']:2}: {current_count:3} questions - {status}")

    print("\n" + "=" * 60)
    print(f"Total files to expand: {len(files)}")
    print(f"Total questions needed: {total_questions_needed}")
    print(f"Average per file: {total_questions_needed / len(files) if files else 0:.1f}")

    # Priority order
    print("\n" + "=" * 60)
    print("RECOMMENDED EXPANSION ORDER:")
    print("1. Authors and Writers (all levels) - Full category needs work")
    print("2. Social Media Influencers (all levels) - Full category needs work")
    print("3. Sports Icons (all levels) - Full category needs work")
    print("4. Complete partial categories:")
    print("   - Actors and Actresses (level 3-10)")
    print("   - Historical Figures (level 2-10)")
    print("   - Political Leaders (level 2-10)")
    print("5. Finish remaining files")

if __name__ == "__main__":
    main()