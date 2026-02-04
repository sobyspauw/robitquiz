import os
import random
import re

base_path = "src/questions/data/subjects"

# Select random files to check
all_files = []
for subject in os.listdir(base_path):
    subject_path = os.path.join(base_path, subject)
    if not os.path.isdir(subject_path):
        continue

    for subcat in os.listdir(subject_path):
        subcat_path = os.path.join(subject_path, subcat)
        if not os.path.isdir(subcat_path):
            continue

        for file in os.listdir(subcat_path):
            if file.endswith('.js') and 'level' in file:
                filepath = os.path.join(subcat_path, file)
                all_files.append((subject, subcat, file, filepath))

# Randomly sample files to check
random.shuffle(all_files)
files_to_check = all_files[:20]  # Check 20 random files

print("DEEP VERIFICATION - CHECKING 20 RANDOM FILES")
print("=" * 70)

total_checked = 0
files_with_real_questions = 0
files_with_templates = 0
template_examples = []
real_examples = []

for subject, subcat, filename, filepath in files_to_check:
    total_checked += 1
    print(f"\nChecking: {subject}/{subcat}/{filename}")

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Count questions
        question_count = content.count('question:')
        print(f"  Questions found: {question_count}")

        # Check for template patterns
        has_templates = False
        template_patterns_found = []

        if "Incorrect answer" in content:
            count = content.count("Incorrect answer")
            if count > 10:  # If appears more than 10 times, it's a template
                has_templates = True
                template_patterns_found.append(f"'Incorrect answer' appears {count} times")

        if "Different concept" in content:
            count = content.count("Different concept")
            if count > 10:
                has_templates = True
                template_patterns_found.append(f"'Different concept' appears {count} times")

        if "Not related" in content:
            count = content.count("Not related")
            if count > 10:
                has_templates = True
                template_patterns_found.append(f"'Not related' appears {count} times")

        # Extract a sample question to show
        question_match = re.search(r'question:\s*\{[^}]+\}', content)
        if question_match:
            sample_q = question_match.group()[:200]

            # Extract first few options
            options_match = re.search(r'options:\s*\[[^\]]{0,500}', content)
            if options_match:
                sample_opts = options_match.group()[:300]

                if has_templates:
                    print(f"  STATUS: TEMPLATE CONTENT FOUND!")
                    print(f"  Issues: {', '.join(template_patterns_found)}")
                    template_examples.append(f"{subject}/{subcat}/{filename}")
                    files_with_templates += 1
                else:
                    print(f"  STATUS: REAL QUESTIONS")
                    print(f"  Sample question: {sample_q[:100]}...")
                    print(f"  Sample options: {sample_opts[:150]}...")
                    real_examples.append(f"{subject}/{subcat}/{filename}")
                    files_with_real_questions += 1

        if question_count < 100:
            print(f"  WARNING: Only {question_count} questions (need 100)")
            if not has_templates:
                files_with_templates += 1
                template_examples.append(f"{subject}/{subcat}/{filename} - insufficient questions")

    except Exception as e:
        print(f"  ERROR reading file: {e}")
        files_with_templates += 1

print("\n" + "=" * 70)
print("SUMMARY OF RANDOM SAMPLE")
print("=" * 70)
print(f"Files checked: {total_checked}")
print(f"Files with REAL questions: {files_with_real_questions}")
print(f"Files with TEMPLATE issues: {files_with_templates}")
print(f"Success rate in sample: {(files_with_real_questions/total_checked*100):.1f}%")

if template_examples:
    print("\nFiles with template issues found:")
    for f in template_examples[:5]:
        print(f"  - {f}")

if real_examples:
    print("\nFiles with real questions:")
    for f in real_examples[:5]:
        print(f"  - {f}")

# Now do a FULL scan to count ALL files
print("\n" + "=" * 70)
print("FULL SYSTEM SCAN")
print("=" * 70)

total_files = 0
files_with_issues = 0
categories_with_issues = {}

for subject in os.listdir(base_path):
    subject_path = os.path.join(base_path, subject)
    if not os.path.isdir(subject_path):
        continue

    issues_in_subject = 0

    for subcat in os.listdir(subject_path):
        subcat_path = os.path.join(subject_path, subcat)
        if not os.path.isdir(subcat_path):
            continue

        for file in os.listdir(subcat_path):
            if file.endswith('.js') and 'level' in file and '_expanded' not in file:
                total_files += 1
                filepath = os.path.join(subcat_path, file)

                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()

                    # Check for issues
                    has_issue = False

                    # Check for generic answers
                    if content.count("Incorrect answer") > 50:
                        has_issue = True
                    if content.count("Different concept") > 50:
                        has_issue = True
                    if content.count("Not related") > 50:
                        has_issue = True

                    # Check question count
                    if content.count('question:') < 100:
                        has_issue = True

                    if has_issue:
                        files_with_issues += 1
                        issues_in_subject += 1

                except:
                    files_with_issues += 1
                    issues_in_subject += 1

    if issues_in_subject > 0:
        categories_with_issues[subject] = issues_in_subject

success_rate = ((total_files - files_with_issues) / total_files * 100) if total_files > 0 else 0

print(f"Total files in system: {total_files}")
print(f"Files with issues: {files_with_issues}")
print(f"Files with real questions: {total_files - files_with_issues}")
print(f"Overall success rate: {success_rate:.1f}%")

if categories_with_issues:
    print("\nCategories with remaining issues:")
    for cat, count in sorted(categories_with_issues.items(), key=lambda x: x[1], reverse=True)[:10]:
        print(f"  {cat}: {count} files with issues")

print("\n" + "=" * 70)
if success_rate < 50:
    print("VERDICT: Many files still have template content!")
    print("The claims of 99.9% success are FALSE.")
elif success_rate < 90:
    print("VERDICT: Significant progress made, but still work to do.")
    print("The claims of 99.9% success are exaggerated.")
else:
    print("VERDICT: Most files have been successfully fixed with real content.")
    print(f"Actual success rate: {success_rate:.1f}%")