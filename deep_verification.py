import os
import re
import random
import json

def deep_check_file(filepath):
    """Perform deep quality check on a single file"""
    issues = []

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check 1: Template patterns
        template_patterns = [
            r'placeholder',
            r'sample question',
            r'Question \d+ about',
            r'Option [A-D] for Q\d+',
            r'Lorem ipsum',
            r'Example question',
            r'Test question',
            r'Incorrect answer',
            r'Different concept',
            r'Not related'
        ]

        for pattern in template_patterns:
            if re.search(pattern, content, re.IGNORECASE):
                issues.append(f"Template pattern found: {pattern}")

        # Check 2: Generic answers that repeat too much
        generic_count = 0
        generic_count += content.count('"Incorrect answer"')
        generic_count += content.count('"Different concept"')
        generic_count += content.count('"Not related"')

        if generic_count > 50:  # More than 50 generic answers is suspicious
            issues.append(f"Too many generic answers: {generic_count}")

        # Check 3: Question count
        question_count = content.count('question:')
        if question_count < 100:
            issues.append(f"Only {question_count} questions (need 100)")

        # Check 4: Language translations
        has_all_langs = all(lang in content for lang in ['en:', 'es:', 'de:', 'nl:'])
        if not has_all_langs:
            missing = [lang for lang in ['en:', 'es:', 'de:', 'nl:'] if lang not in content]
            issues.append(f"Missing languages: {missing}")

        # Check 5: Explanations
        if 'explanation:' not in content:
            issues.append("No explanations found")

        # Check 6: Proper structure
        if 'module.exports' not in content:
            issues.append("Missing module.exports")

        # Check 7: Real educational content
        # Extract a sample question to check quality
        first_q_match = re.search(r'"en": "([^"]+)"', content)
        if first_q_match:
            first_q = first_q_match.group(1)
            if len(first_q) < 10:
                issues.append(f"Question too short: {first_q}")

            # Check if question has substance
            if not any(word in first_q.lower() for word in ['what', 'when', 'how', 'why', 'where', 'who', 'which']):
                issues.append(f"Question lacks interrogative: {first_q}")

        # Check 8: Look for repetitive content
        lines = content.split('\n')
        duplicates = {}
        for line in lines:
            if '"en":' in line:
                if line in duplicates:
                    duplicates[line] = duplicates.get(line, 0) + 1
                else:
                    duplicates[line] = 1

        high_duplicates = [k for k, v in duplicates.items() if v > 5]
        if high_duplicates:
            issues.append(f"Duplicate content found: {len(high_duplicates)} repeated items")

        return {
            'filepath': filepath,
            'issues': issues,
            'question_count': question_count,
            'has_issues': len(issues) > 0
        }

    except Exception as e:
        return {
            'filepath': filepath,
            'issues': [f"Error reading file: {str(e)}"],
            'question_count': 0,
            'has_issues': True
        }

def check_category(category_path, max_files=5):
    """Check a sample of files from a category"""
    results = []

    for subcat in os.listdir(category_path):
        subcat_path = os.path.join(category_path, subcat)
        if not os.path.isdir(subcat_path):
            continue

        # Check random levels
        levels_to_check = random.sample(range(1, 11), min(3, max_files))

        for level in levels_to_check:
            filepath = os.path.join(subcat_path, f"level{level}.js")
            if os.path.exists(filepath):
                result = deep_check_file(filepath)
                results.append(result)

    return results

# Main verification
print("DEEP VERIFICATION OF ROBITQUIZ QUESTIONS")
print("=" * 80)
print("Checking for:")
print("- Template patterns")
print("- Generic repetitive answers")
print("- Question count (100 required)")
print("- All 4 language translations")
print("- Educational explanations")
print("- Proper question structure")
print("- Real educational content")
print("=" * 80)

base_path = "src/questions/data/subjects"
categories = ['ai', 'dinosaurs', 'egypt', 'currencies', 'desserts', 'f1', 'food', 'drinks', 'books', 'board-games', 'famous-buildings', 'famous-people']

total_files_checked = 0
files_with_issues = 0
all_issues = []

for category in categories:
    cat_path = os.path.join(base_path, category)
    if not os.path.exists(cat_path):
        continue

    print(f"\n{category.upper()}")
    print("-" * 40)

    results = check_category(cat_path, max_files=3)

    for result in results:
        total_files_checked += 1

        # Get just the relative path for display
        rel_path = result['filepath'].replace(base_path + os.sep, '')

        if result['has_issues']:
            files_with_issues += 1
            print(f"  [FAIL] {rel_path}")
            for issue in result['issues'][:3]:  # Show first 3 issues
                print(f"     - {issue}")
            all_issues.extend(result['issues'])
        else:
            print(f"  [OK] {rel_path} - {result['question_count']} questions, ALL GOOD")

print("\n" + "=" * 80)
print("VERIFICATION SUMMARY")
print("=" * 80)
print(f"Files checked: {total_files_checked}")
print(f"Files with issues: {files_with_issues}")
print(f"Files passed: {total_files_checked - files_with_issues}")

if files_with_issues == 0:
    print("\n[PERFECT] All checked files contain high-quality educational questions!")
else:
    print(f"\n[WARNING] Found issues in {files_with_issues} files")

    # Analyze issue types
    issue_types = {}
    for issue in all_issues:
        issue_type = issue.split(':')[0]
        issue_types[issue_type] = issue_types.get(issue_type, 0) + 1

    print("\nMost common issues:")
    for issue_type, count in sorted(issue_types.items(), key=lambda x: x[1], reverse=True)[:5]:
        print(f"  - {issue_type}: {count} occurrences")

success_rate = ((total_files_checked - files_with_issues) / total_files_checked * 100) if total_files_checked > 0 else 0
print(f"\nQuality Score: {success_rate:.1f}%")