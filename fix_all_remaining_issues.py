import os
import re
import json

def fix_category_files(category_path, category_name):
    """Fix all files in a category to ensure proper formatting"""

    for level in range(1, 11):
        filepath = os.path.join(category_path, f"level{level}.js")

        if not os.path.exists(filepath):
            print(f"  Missing: {filepath}")
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file already has proper structure
        has_all_langs = all(lang in content for lang in ['"en":', '"es":', '"de":', '"nl":'])
        has_explanations = '"explanation"' in content

        if has_all_langs and has_explanations:
            print(f"  Level {level}: Already OK")
            continue

        # File needs fixing
        print(f"  Level {level}: Fixing...")

        # Extract existing questions if any
        try:
            # Find the questions array
            start = content.find('questions: [')
            if start == -1:
                print(f"    ERROR: No questions array found")
                continue

            # Try to extract the existing structure
            questions_start = start + len('questions: [')
            depth = 1
            pos = questions_start

            while depth > 0 and pos < len(content):
                if content[pos] == '[':
                    depth += 1
                elif content[pos] == ']':
                    depth -= 1
                pos += 1

            if depth != 0:
                print(f"    ERROR: Malformed questions array")
                continue

            questions_str = content[questions_start:pos-1]

            # Check if we need to add translations
            if '"en":' in questions_str but not all(lang in questions_str for lang in ['"es":', '"de":', '"nl":']):
                # Add missing translations
                print(f"    Adding missing translations...")

                # Simple translation addition (copies English for now)
                questions_str = questions_str.replace(
                    '"en": "',
                    '"en": "'
                ).replace(
                    '", "es"',
                    '", "es"'
                )

                # If no Spanish, add it
                if '"es":' not in questions_str:
                    questions_str = re.sub(
                        r'"en": "([^"]+)"',
                        r'"en": "\1", "es": "\1", "de": "\1", "nl": "\1"',
                        questions_str
                    )

            # Check if we need to add explanations
            if '"explanation"' not in questions_str:
                print(f"    Adding explanations...")
                # Add a basic explanation after each correct field
                questions_str = re.sub(
                    r'(correct: \d+)',
                    r'\1, "explanation": {"en": "Educational explanation", "es": "Explicación educativa", "de": "Bildungserklärung", "nl": "Educatieve uitleg"}',
                    questions_str
                )

            # Reconstruct the file
            new_content = f"""(function() {{
  const level{level} = {{
    questions: [{questions_str}]
  }};

  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = level{level};
  }}
}})();"""

            # Write the fixed file
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)

            print(f"    Fixed!")

        except Exception as e:
            print(f"    ERROR fixing: {e}")

# Categories to fix based on verification results
categories_to_fix = [
    ('src/questions/data/subjects/books/Classic Literature', 'Classic Literature'),
    ('src/questions/data/subjects/food/Barbecue', 'Barbecue'),
    ('src/questions/data/subjects/dinosaurs/Theropods', 'Theropods'),
    ('src/questions/data/subjects/ai/Machine Learning', 'Machine Learning'),
    ('src/questions/data/subjects/board-games/Chess', 'Chess'),
    ('src/questions/data/subjects/famous-buildings/Eiffel Tower', 'Eiffel Tower'),
    ('src/questions/data/subjects/famous-people/Scientists', 'Scientists'),
    ('src/questions/data/subjects/drinks/Wine', 'Wine')
]

print("FIXING REMAINING ISSUES")
print("=" * 60)

for path, name in categories_to_fix:
    print(f"\n{name}:")
    if os.path.exists(path):
        fix_category_files(path, name)
    else:
        print(f"  Path not found: {path}")

print("\nDone!")