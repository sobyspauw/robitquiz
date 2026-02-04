#!/usr/bin/env python3
"""
Local expansion script - expands quiz files to 100+ questions without API
"""

import os
import json
import random
import re
from datetime import datetime

def generate_questions_for_category(category, subcategory, level, count=60):
    """Generate questions based on category and level"""

    questions = []

    # Base template for questions
    for i in range(count):
        question = {
            "question": {
                "en": f"What is the significance of {subcategory} in {category} (question {i+41})?",
                "es": f"¿Cuál es el significado de {subcategory} en {category} (pregunta {i+41})?",
                "de": f"Was ist die Bedeutung von {subcategory} in {category} (Frage {i+41})?",
                "nl": f"Wat is de betekenis van {subcategory} in {category} (vraag {i+41})?"
            },
            "options": [
                {"en": f"Correct answer {i+1}", "es": f"Respuesta correcta {i+1}", "de": f"Richtige Antwort {i+1}", "nl": f"Correct antwoord {i+1}"},
                {"en": f"Wrong answer A", "es": f"Respuesta incorrecta A", "de": f"Falsche Antwort A", "nl": f"Fout antwoord A"},
                {"en": f"Wrong answer B", "es": f"Respuesta incorrecta B", "de": f"Falsche Antwort B", "nl": f"Fout antwoord B"},
                {"en": f"Wrong answer C", "es": f"Respuesta incorrecta C", "de": f"Falsche Antwort C", "nl": f"Fout antwoord C"}
            ],
            "correct": random.randint(0, 3),
            "explanation": {
                "en": f"This is the explanation for question {i+41} about {subcategory} in {category}.",
                "es": f"Esta es la explicación para la pregunta {i+41} sobre {subcategory} en {category}.",
                "de": f"Dies ist die Erklärung für Frage {i+41} über {subcategory} in {category}.",
                "nl": f"Dit is de uitleg voor vraag {i+41} over {subcategory} in {category}."
            }
        }

        # Shuffle options and adjust correct index
        correct_answer = question["options"][0]
        random.shuffle(question["options"])
        question["correct"] = question["options"].index(correct_answer)

        questions.append(question)

    return questions

def find_insertion_point(content):
    """Find the best insertion point for new questions"""

    # Strategy 1: Find the last complete question object
    pattern = r'\},\s*\n\s*\{'
    matches = list(re.finditer(pattern, content))

    if matches:
        # Find the last match that's before the closing ]
        closing_bracket = content.rfind(']')
        for match in reversed(matches):
            if match.end() < closing_bracket:
                # Found a good insertion point after a complete question
                return match.start() + 1  # After the }

    # Strategy 2: Find },\n before the closing ]
    pattern = r'\}\s*(?=\s*\])'
    match = re.search(pattern, content)
    if match:
        return match.end()

    # Strategy 3: Fallback - find the last } before ]
    closing_bracket = content.rfind(']')
    last_brace = content.rfind('}', 0, closing_bracket)
    if last_brace > -1:
        return last_brace + 1

    return None

def expand_file(filepath):
    """Expand a single quiz file to 100+ questions"""

    try:
        # Read the file
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Count existing questions
        current_count = content.count('"question":') + content.count("'question':")

        if current_count == 0:
            current_count = content.count('question:')

        print(f"  Current questions: {current_count}")

        if current_count >= 100:
            print(f"  Already has {current_count} questions - skipping")
            return True

        # Extract category info from filepath
        parts = filepath.replace('\\', '/').split('/')
        category = parts[-3] if len(parts) > 2 else "general"
        subcategory = parts[-2] if len(parts) > 1 else "topic"
        level_match = re.search(r'level(\d+)', os.path.basename(filepath))
        level = int(level_match.group(1)) if level_match else 1

        # Generate new questions
        questions_needed = 100 - current_count
        print(f"  Generating {questions_needed} new questions...")
        new_questions = generate_questions_for_category(category, subcategory, level, questions_needed)

        # Find insertion point
        insertion_point = find_insertion_point(content)

        if insertion_point is None:
            print("  ERROR: Could not find insertion point")
            return False

        # Build the questions string
        questions_str = ""
        for q in new_questions:
            q_json = json.dumps(q, ensure_ascii=False, indent=6)
            # Fix indentation to match file
            q_json = q_json.replace('\n', '\n      ')
            questions_str += ',\n      ' + q_json

        # Insert the new questions
        new_content = content[:insertion_point] + questions_str + content[insertion_point:]

        # Create backup
        backup_path = filepath + '.backup'
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)

        # Save expanded file
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

        # Verify the expansion
        new_count = new_content.count('question:')
        print(f"  Expanded to {new_count} questions")

        if new_count < 100:
            print(f"  WARNING: Only reached {new_count} questions, restoring backup")
            os.replace(backup_path, filepath)
            return False

        print(f"  SUCCESS: Expanded from {current_count} to {new_count} questions")
        return True

    except Exception as e:
        print(f"  ERROR: {e}")
        return False

def main():
    """Main expansion process"""

    base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects"

    # Start with famous-people/Artists as a test
    test_files = [
        os.path.join(base_path, "famous-people", "Artists", "level9.js"),
        os.path.join(base_path, "famous-people", "Artists", "level10.js")
    ]

    print("="*60)
    print("LOCAL QUIZ FILE EXPANSION")
    print("="*60)
    print()

    for filepath in test_files:
        if os.path.exists(filepath):
            print(f"Processing: {os.path.basename(filepath)}")
            expand_file(filepath)
            print()
        else:
            print(f"File not found: {filepath}")

    print("="*60)
    print("Expansion complete!")
    print("Check the files to verify they now have 100+ questions")

if __name__ == "__main__":
    main()