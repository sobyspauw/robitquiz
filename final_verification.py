import os
import re

base_path = "src/questions/data/subjects"

print("FINAL ROBITQUIZ VERIFICATION")
print("=" * 80)

categories_stats = {}
total_real_questions = 0
total_template_questions = 0
total_files = 0
perfect_files = 0

# Template patterns
template_patterns = [
    r'sample question',
    r'placeholder',
    r'Question \d+ for level',
    r'Question \d+ about',
    r'Option [A-D] for Q\d+',
    r'Lorem ipsum',
    r'Example question'
]

for category in os.listdir(base_path):
    cat_path = os.path.join(base_path, category)
    if not os.path.isdir(cat_path):
        continue

    categories_stats[category] = {
        'subcategories': 0,
        'real_files': 0,
        'template_files': 0,
        'total_questions': 0
    }

    for subcat in os.listdir(cat_path):
        subcat_path = os.path.join(cat_path, subcat)
        if not os.path.isdir(subcat_path):
            continue

        categories_stats[category]['subcategories'] += 1

        for level in range(1, 11):
            filepath = os.path.join(subcat_path, f"level{level}.js")

            if os.path.exists(filepath):
                total_files += 1

                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Check for templates
                has_template = False
                for pattern in template_patterns:
                    if re.search(pattern, content, re.IGNORECASE):
                        has_template = True
                        break

                # Count questions
                question_count = content.count('question:')
                categories_stats[category]['total_questions'] += question_count

                # Check for all requirements
                has_all_langs = all(lang in content for lang in ['en:', 'es:', 'de:', 'nl:'])
                has_explanation = 'explanation:' in content

                if has_template:
                    categories_stats[category]['template_files'] += 1
                    total_template_questions += question_count
                else:
                    categories_stats[category]['real_files'] += 1
                    total_real_questions += question_count

                    if has_all_langs and has_explanation and question_count >= 100:
                        perfect_files += 1

# Print results
print("\nCATEGORY BREAKDOWN:")
print("-" * 80)

for category, stats in sorted(categories_stats.items()):
    total_files_cat = stats['subcategories'] * 10
    real_pct = (stats['real_files'] / total_files_cat * 100) if total_files_cat > 0 else 0

    status = "OK COMPLETE" if stats['template_files'] == 0 else f"WARN {stats['template_files']} templates"

    print(f"{category:20} {stats['subcategories']:3} subcats | "
          f"{stats['real_files']:4}/{total_files_cat:4} real | "
          f"{stats['total_questions']:6} questions | "
          f"{real_pct:6.1f}% | {status}")

print("\n" + "=" * 80)
print("FINAL SUMMARY")
print("=" * 80)

template_pct = (total_template_questions / (total_real_questions + total_template_questions) * 100) if (total_real_questions + total_template_questions) > 0 else 0
real_pct = 100 - template_pct

print(f"Total files checked:     {total_files:,}")
print(f"Perfect files (100q+):   {perfect_files:,}")
print(f"Total real questions:    {total_real_questions:,}")
print(f"Total templates:         {total_template_questions:,}")
print(f"Real question rate:      {real_pct:.1f}%")
print(f"Template rate:           {template_pct:.1f}%")

if template_pct == 0:
    print("\n[SUCCESS] PERFECT! ALL QUESTIONS ARE REAL!")
    print("[PASS] NO TEMPLATES DETECTED!")
    print("[PASS] 100% REAL EDUCATIONAL CONTENT!")
else:
    print(f"\n[WARNING] Still {template_pct:.1f}% templates remaining")
    print(f"[INFO] {total_real_questions:,} real questions created so far")