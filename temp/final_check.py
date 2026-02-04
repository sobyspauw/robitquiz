import os
import re
from pathlib import Path

def count_questions(filepath):
    """Count question: patterns in file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            return len(re.findall(r'question:', content))
    except:
        return 0

base_path = Path(r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects")

issues = []
all_files = []

for subject_dir in base_path.iterdir():
    if subject_dir.is_dir():
        for category_dir in subject_dir.iterdir():
            if category_dir.is_dir():
                for file in category_dir.glob("level*.js"):
                    # Skip backup and temp files
                    if '.backup' in str(file) or '.tmp' in str(file):
                        continue

                    count = count_questions(file)
                    all_files.append((file, count))

                    if count < 40:
                        issues.append((file.relative_to(base_path), count))

print(f"Total quiz files checked: {len(all_files)}")
print(f"Files with 40+ questions: {len([f for f in all_files if f[1] >= 40])}")
print(f"Files with <40 questions: {len(issues)}")

if issues:
    print("\nFiles needing attention:")
    for file, count in issues:
        print(f"  {file}: {count} questions (needs {40-count} more)")
else:
    print("\nSUCCESS! All quiz files have at least 40 questions!")

# Show distribution
print("\nQuestion count distribution:")
counts = {}
for _, count in all_files:
    counts[count] = counts.get(count, 0) + 1

for count in sorted(counts.keys()):
    print(f"  {count} questions: {counts[count]} files")