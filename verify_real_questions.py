import os
import re
import random

def check_file_quality(filepath):
    """Check if a file contains real questions meeting quality standards"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract level number from filename
        level = int(re.search(r'level(\d+)', filepath).group(1))

        # Check for template patterns that would indicate fake questions
        template_patterns = [
            r'sample question',
            r'placeholder',
            r'Question \d+ for level',
            r'Question \d+ about',
            r'Option [A-D] for Q\d+',
            r'Lorem ipsum',
            r'Example question',
            r'Test question \d+'
        ]

        has_templates = False
        for pattern in template_patterns:
            if re.search(pattern, content, re.IGNORECASE):
                has_templates = True
                break

        # Check for real content indicators
        has_real_content = False
        real_indicators = [
            # Subject-specific terms
            r'Tiramisu|Cheesecake|Black Forest|Victoria Sponge|Cake',  # Desserts
            r'Pyramid|Sphinx|Pharaoh|Hieroglyphics|Nile|Egypt',  # Egypt
            r'Bitcoin|Ethereum|Dollar|Euro|Exchange|Currency',  # Currencies
            r'Hamilton|Verstappen|Ferrari|Monaco|Championship|Racing',  # F1
            r'Einstein|Newton|Shakespeare|Mozart|Leonardo|Scientists',  # Famous People
            r'Tyrannosaurus|Velociraptor|Jurassic|Cretaceous|Rex|dinosaur',  # Dinosaurs
            r'Machine Learning|Neural Network|Algorithm|Data|Supervised',  # AI
            r'Chess|Monopoly|Scrabble|Risk|Catan|board game|pawns|checkmate',  # Board Games
            r'Eiffel Tower|Taj Mahal|Colosseum|Great Wall|Gustave',  # Famous Buildings
            r'Pizza|Sushi|Pasta|Barbecue|Salad|Texas BBQ|Korean BBQ|Brisket',  # Food
            r'Coffee|Wine|Beer|Tea|Juice|Cabernet|Pilsner|IPA',  # Drinks
            r'Harry Potter|Shakespeare|Tolkien|Sherlock|Pride and Prejudice|Jane Austen|Dickens'  # Books
        ]

        for indicator in real_indicators:
            if re.search(indicator, content, re.IGNORECASE):
                has_real_content = True
                break

        # Check for 4-language translations (look for language keys without quotes)
        has_all_languages = all(lang in content for lang in ['en:', 'es:', 'de:', 'nl:'])

        # Check for explanations (look for explanation key)
        has_explanations = 'explanation:' in content

        # Count questions (look for question key)
        question_count = content.count('question:')

        # Check character limits based on level
        if level <= 5:
            max_chars = 140
        else:
            max_chars = 160

        # Sample check for question length (check first few questions)
        questions_ok = True
        matches = re.finditer(r'"en": "([^"]+)"', content[:5000])  # Check first part
        for match in matches:
            text = match.group(1)
            if 'question' in content[max(0, match.start()-100):match.start()]:
                if len(text) > max_chars:
                    questions_ok = False
                    break

        return {
            'has_templates': has_templates,
            'has_real_content': has_real_content,
            'has_all_languages': has_all_languages,
            'has_explanations': has_explanations,
            'question_count': question_count,
            'respects_char_limit': questions_ok,
            'level': level
        }
    except Exception as e:
        return {
            'error': str(e),
            'has_templates': True,
            'has_real_content': False
        }

# Categories to check
categories = [
    'desserts/Cakes',
    'egypt/Pyramids',
    'f1/Teams',
    'currencies/Euro',
    'dinosaurs/Theropods',
    'ai/Machine Learning',
    'board-games/Chess',
    'famous-buildings/Eiffel Tower',
    'famous-people/Scientists',
    'food/Barbecue',
    'drinks/Wine',
    'books/Classic Literature'
]

print("=" * 80)
print("ROBITQUIZ QUALITY VERIFICATION REPORT")
print("=" * 80)

total_files_checked = 0
files_with_templates = 0
files_without_content = 0
files_missing_languages = 0
files_missing_explanations = 0
files_char_limit_exceeded = 0

for category in categories:
    print(f"\n{category.upper()}")
    print("-" * 40)

    # Check 3 random levels for this category
    levels_to_check = random.sample(range(1, 11), 3)

    for level in sorted(levels_to_check):
        filepath = f"src/questions/data/subjects/{category}/level{level}.js"

        if os.path.exists(filepath):
            result = check_file_quality(filepath)
            total_files_checked += 1

            status = "OK" if not result['has_templates'] and result['has_real_content'] else "FAIL"

            print(f"  Level {level}: {status}")

            if result['has_templates']:
                print(f"    [WARNING] Contains template patterns!")
                files_with_templates += 1

            if not result['has_real_content']:
                print(f"    [WARNING] No real content detected!")
                files_without_content += 1

            if not result.get('has_all_languages', False):
                print(f"    [WARNING] Missing language translations!")
                files_missing_languages += 1

            if not result.get('has_explanations', False):
                print(f"    [WARNING] Missing explanations!")
                files_missing_explanations += 1

            if not result.get('respects_char_limit', True):
                print(f"    [WARNING] Character limit exceeded!")
                files_char_limit_exceeded += 1

            if result.get('question_count', 0) > 0:
                print(f"    Questions: {result['question_count']}")

            if not result['has_templates'] and result['has_real_content']:
                print(f"    [OK] Real content confirmed")
                print(f"    [OK] All 4 languages: {result.get('has_all_languages', False)}")
                print(f"    [OK] Has explanations: {result.get('has_explanations', False)}")
                print(f"    [OK] Char limit OK: {result.get('respects_char_limit', True)}")

print("\n" + "=" * 80)
print("SUMMARY")
print("=" * 80)
print(f"Total files checked: {total_files_checked}")
print(f"Files with templates: {files_with_templates}")
print(f"Files without real content: {files_without_content}")
print(f"Files missing translations: {files_missing_languages}")
print(f"Files missing explanations: {files_missing_explanations}")
print(f"Files exceeding char limits: {files_char_limit_exceeded}")

if files_with_templates == 0 and files_without_content == 0:
    print("\n[PASS] ALL CHECKED FILES CONTAIN REAL QUESTIONS!")
    print("[PASS] NO TEMPLATES DETECTED!")
else:
    print(f"\n[WARNING] {files_with_templates} files still contain templates")
    print(f"[WARNING] {files_without_content} files lack real content")

quality_score = ((total_files_checked - files_with_templates - files_without_content) / total_files_checked) * 100 if total_files_checked > 0 else 0
print(f"\nQuality Score: {quality_score:.1f}%")