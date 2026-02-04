#!/usr/bin/env python3
import os
import re
import json

base_dir = r'C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects'

# First, let's identify all files that need fixing
def count_real_questions(filepath):
    """Count actual question objects, not 'question:' in text"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # Look for question object starts
            matches = re.findall(r'^\s+\{\s*\n\s+question:\s*\{', content, re.MULTILINE)
            return len(matches)
    except:
        return -1

# Collect all files that need fixing
files_to_fix = []
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.js'):
            filepath = os.path.join(root, file)
            count = count_real_questions(filepath)
            if count != 40 and count >= 0:
                rel_path = os.path.relpath(filepath, base_dir)
                subject = rel_path.split(os.sep)[0]
                category = rel_path.split(os.sep)[1] if len(rel_path.split(os.sep)) > 1 else ""
                level = file.replace('.js', '')

                files_to_fix.append({
                    'path': filepath,
                    'rel_path': rel_path,
                    'subject': subject,
                    'category': category,
                    'level': level,
                    'current_count': count,
                    'needed': 40 - count
                })

# Sort by priority - empty files first, then by how many questions needed
files_to_fix.sort(key=lambda x: (x['current_count'] > 0, -x['needed']))

print(f"Total files to fix: {len(files_to_fix)}")
print("\nBreakdown by current question count:")
count_groups = {}
for f in files_to_fix:
    count = f['current_count']
    if count not in count_groups:
        count_groups[count] = 0
    count_groups[count] += 1

for count in sorted(count_groups.keys()):
    print(f"  {count} questions: {count_groups[count]} files")

# Save the list for processing
with open('files_to_fix.json', 'w') as f:
    json.dump(files_to_fix, f, indent=2)

print(f"\nList saved to files_to_fix.json")
print("\nFirst 10 files to fix:")
for i, file_info in enumerate(files_to_fix[:10]):
    print(f"{i+1}. {file_info['rel_path']}: {file_info['current_count']} questions (needs +{file_info['needed']})")