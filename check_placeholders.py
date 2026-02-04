import os
import json
import re

# Base path
base_path = r"src\questions\data\subjects"

# Placeholder patterns
placeholder_patterns = [
    r'Question \d+ about',
    r'Answer [A-D]$',
    r'This is the explanation for question \d+',
    r'sample question',
    r'placeholder',
    r'Option [A-D] for Q\d+',
    r'Respuesta [A-D]$',
    r'Antwort [A-D]$',
    r'Antwoord [A-D]$'
]

# Get all subjects
subjects = [d for d in os.listdir(base_path) if os.path.isdir(os.path.join(base_path, d))]

print("=== Placeholder Check Report ===\n")

files_with_placeholders = []
files_with_real_content = []
total_files = 0

for subject in sorted(subjects):
    subject_path = os.path.join(base_path, subject)
    categories = [d for d in os.listdir(subject_path) if os.path.isdir(os.path.join(subject_path, d))]

    subject_placeholders = 0
    subject_real = 0

    for category in sorted(categories):
        category_path = os.path.join(subject_path, category)

        for level in range(1, 11):
            file_path = os.path.join(category_path, f"level{level}.js")
            total_files += 1

            if os.path.exists(file_path):
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                    # Check for placeholder patterns
                    has_placeholder = False
                    for pattern in placeholder_patterns:
                        if re.search(pattern, content):
                            has_placeholder = True
                            break

                    if has_placeholder:
                        files_with_placeholders.append(f"{subject}/{category}/level{level}")
                        subject_placeholders += 1
                    else:
                        files_with_real_content.append(f"{subject}/{category}/level{level}")
                        subject_real += 1

    if subject_placeholders > 0 or subject_real > 0:
        print(f"{subject.upper()}:")
        print(f"  - Real content: {subject_real} files")
        print(f"  - Placeholders: {subject_placeholders} files")
        if subject_placeholders > 0:
            print(f"  - NEEDS WORK: {subject_placeholders} files need real questions")
        print()

print(f"\n=== SUMMARY ===")
print(f"Total files: {total_files}")
print(f"Files with real content: {len(files_with_real_content)} ({len(files_with_real_content)*100/total_files:.1f}%)")
print(f"Files with placeholders: {len(files_with_placeholders)} ({len(files_with_placeholders)*100/total_files:.1f}%)")

if files_with_placeholders:
    print(f"\n=== FILES NEEDING REAL QUESTIONS ({len(files_with_placeholders)}) ===")
    print(f"Total work needed: {len(files_with_placeholders)} files × 100 questions = {len(files_with_placeholders)*100:,} questions")

    # Group by subject
    by_subject = {}
    for file in files_with_placeholders:
        subject = file.split('/')[0]
        if subject not in by_subject:
            by_subject[subject] = []
        by_subject[subject].append(file)

    print("\nBy subject:")
    for subject, files in sorted(by_subject.items()):
        print(f"\n{subject}: {len(files)} files")
        if len(files) <= 5:
            for f in files[:5]:
                print(f"  - {f}")
        else:
            for f in files[:3]:
                print(f"  - {f}")
            print(f"  ... and {len(files)-3} more")