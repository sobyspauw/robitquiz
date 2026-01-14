#!/usr/bin/env python3
"""
Script to find all famous-people files with only 20 questions
and list them for expansion.
"""

import os
import glob

base_path = "src/questions/data/subjects/famous-people"

# Find all .js files with 20 questions
files_to_expand = []

for root, dirs, files in os.walk(base_path):
    for file in files:
        if file.endswith('.js'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    count = content.count('question:')
                    if count == 20:
                        # Get category and level
                        parts = filepath.replace('\\', '/').split('/')
                        category = parts[-2]
                        level = parts[-1].replace('.js', '')
                        files_to_expand.append({
                            'path': filepath,
                            'category': category,
                            'level': level
                        })
            except Exception as e:
                print(f"Error reading {filepath}: {e}")

# Group by category
from collections import defaultdict
by_category = defaultdict(list)
for item in files_to_expand:
    by_category[item['category']].append(item)

# Print summary
print("=" * 70)
print("FAMOUS-PEOPLE FILES NEEDING EXPANSION (20 to 40 questions)")
print("=" * 70)
print()

total = 0
for category in sorted(by_category.keys()):
    items = by_category[category]
    print(f"{category}: {len(items)} files")
    for item in sorted(items, key=lambda x: x['level']):
        print(f"  - {item['level']}")
    total += len(items)
    print()

print("=" * 70)
print(f"TOTAL: {total} files need expansion")
print("=" * 70)
