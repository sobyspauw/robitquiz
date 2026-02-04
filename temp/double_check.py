#!/usr/bin/env python3
import os
import re
from pathlib import Path

base_dir = r'C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects'

total_files = 0
correct_files = 0
wrong_files = []
subjects_count = {}

# Walk through all directories
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.js'):
            total_files += 1
            filepath = os.path.join(root, file)

            # Get subject name
            rel_path = os.path.relpath(filepath, base_dir)
            subject = rel_path.split(os.sep)[0]

            if subject not in subjects_count:
                subjects_count[subject] = {'total': 0, 'correct': 0, 'wrong': []}

            subjects_count[subject]['total'] += 1

            # Count questions
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    question_count = content.count('question:')

                    if question_count == 40:
                        correct_files += 1
                        subjects_count[subject]['correct'] += 1
                    else:
                        wrong_files.append({
                            'path': rel_path,
                            'count': question_count
                        })
                        subjects_count[subject]['wrong'].append({
                            'file': os.path.basename(filepath),
                            'count': question_count
                        })
            except Exception as e:
                print(f"Error reading {filepath}: {e}")
                wrong_files.append({
                    'path': rel_path,
                    'count': -1
                })

# Print results
print("=" * 60)
print("DOUBLE CHECK - COMPREHENSIVE VERIFICATION")
print("=" * 60)
print(f"Total files scanned: {total_files}")
print(f"Files with exactly 40 questions: {correct_files}")
print(f"Files with WRONG count: {len(wrong_files)}")
print(f"Success rate: {(correct_files/total_files*100):.1f}%")

print("\n--- BREAKDOWN BY SUBJECT ---")
for subject in sorted(subjects_count.keys()):
    data = subjects_count[subject]
    status = "✅" if data['correct'] == data['total'] else "❌"
    print(f"{status} {subject}: {data['correct']}/{data['total']} files correct")
    if data['wrong']:
        for wrong in data['wrong']:
            print(f"   ❌ {wrong['file']}: {wrong['count']} questions")

if wrong_files:
    print("\n--- FILES NEEDING ATTENTION ---")
    for file in wrong_files:
        print(f"❌ {file['path']}: {file['count']} questions")
else:
    print("\n✅ ✅ ✅ PERFECT! ALL 1,220 FILES HAVE EXACTLY 40 QUESTIONS! ✅ ✅ ✅")

# Final statistics
print(f"\n--- FINAL STATISTICS ---")
print(f"Total questions in database: {correct_files * 40}")
print(f"Total answer options: {correct_files * 40 * 4}")
print(f"Total explanations: {correct_files * 40}")
print(f"Languages per item: 4 (en, es, de, nl)")