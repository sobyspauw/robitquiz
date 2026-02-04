import os
import json
import random

# Get all subject directories
base_path = "src/questions/data/subjects"
all_categories = {}

# Scan all directories
for category in os.listdir(base_path):
    cat_path = os.path.join(base_path, category)
    if os.path.isdir(cat_path):
        all_categories[category] = []
        for subcat in os.listdir(cat_path):
            subcat_path = os.path.join(cat_path, subcat)
            if os.path.isdir(subcat_path):
                all_categories[category].append(subcat)

print("SCANNING ALL CATEGORIES")
print("=" * 60)

total_categories = 0
total_subcategories = 0
categories_needing_questions = []

for category, subcats in all_categories.items():
    total_categories += 1
    total_subcategories += len(subcats)
    print(f"\n{category}: {len(subcats)} subcategories")

    # Check if any files need real questions
    for subcat in subcats[:3]:  # Sample check
        filepath = os.path.join(base_path, category, subcat, "level1.js")
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                # Quick check for template patterns
                if 'placeholder' in content.lower() or 'sample question' in content.lower() or 'Question 1 about' in content:
                    categories_needing_questions.append(f"{category}/{subcat}")
                    print(f"  ⚠ {subcat} - NEEDS REAL QUESTIONS")
                    break

print(f"\n{'=' * 60}")
print(f"Total categories: {total_categories}")
print(f"Total subcategories: {total_subcategories}")
print(f"Total question files: {total_subcategories * 10} (10 levels each)")
print(f"Total questions needed: {total_subcategories * 10 * 100:,} (100 per file)")

if categories_needing_questions:
    print(f"\nCategories still needing real questions: {len(categories_needing_questions)}")
    for cat in categories_needing_questions[:10]:
        print(f"  - {cat}")

print("\nGenerating completion script...")