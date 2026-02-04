#!/usr/bin/env python3
"""
Complete expansion of Actors and Actresses levels 3-10.
This script adds 60 questions to each level file.
"""

import os
import re

BASE_PATH = r"c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Actors and Actresses"

def format_question(q_data):
    """Format a single question into JavaScript object notation"""
    return f"""      {{
        question: {{
          en: "{q_data['question']['en']}",
          es: "{q_data['question']['es']}",
          de: "{q_data['question']['de']}",
          nl: "{q_data['question']['nl']}"
        }},
        options: [
          {{ en: "{q_data['options'][0]['en']}", es: "{q_data['options'][0]['es']}", de: "{q_data['options'][0]['de']}", nl: "{q_data['options'][0]['nl']}" }},
          {{ en: "{q_data['options'][1]['en']}", es: "{q_data['options'][1]['es']}", de: "{q_data['options'][1]['de']}", nl: "{q_data['options'][1]['nl']}" }},
          {{ en: "{q_data['options'][2]['en']}", es: "{q_data['options'][2]['es']}", de: "{q_data['options'][2]['de']}", nl: "{q_data['options'][2]['nl']}" }},
          {{ en: "{q_data['options'][3]['en']}", es: "{q_data['options'][3]['es']}", de: "{q_data['options'][3]['de']}", nl: "{q_data['options'][3]['nl']}" }}
        ],
        correct: {q_data['correct']},
        explanation: {{
          en: "{q_data['explanation']['en']}",
          es: "{q_data['explanation']['es']}",
          de: "{q_data['explanation']['de']}",
          nl: "{q_data['explanation']['nl']}"
        }}
      }}"""

def read_file(filepath):
    """Read file content"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    """Write content to file"""
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def find_last_real_question_end(content):
    """Find where the last real question ends (before placeholders)"""
    # Look for the pattern of a complete question followed by either closing or placeholder
    # We'll find all question blocks and identify the 40th one

    # Pattern to match a complete question block
    pattern = r'      \{\s*question:\s*\{'
    matches = list(re.finditer(pattern, content))

    if len(matches) >= 40:
        # Find the end of the 40th question
        # Look for the closing brace and explanation end after the 40th question start
        pos = matches[39].start()  # 40th question (0-indexed)

        # Find the end of this question (look for next question start or array close)
        if len(matches) > 40:
            # There's a 41st question (placeholder), so end is just before it
            end_pos = matches[40].start()
            # Back up to find the closing brace of question 40
            temp = content[pos:end_pos]
            # Find last occurrence of "      }"
            last_brace = temp.rfind('\n      }')
            if last_brace != -1:
                return pos + last_brace + len('\n      }')
        else:
            # No 41st question, find the array closing
            remaining = content[pos:]
            # Find the end of this question
            # Look for pattern: explanation block end + closing brace
            match = re.search(r'explanation:\s*\{[^}]+\}\s*\}', remaining)
            if match:
                return pos + match.end()

    # Fallback: find "    ]\n  };" pattern
    match = re.search(r'\n    \]\s*\};\s*\n\s*if \(typeof module', content)
    if match:
        return match.start() + 1

    return len(content) - 200  # Conservative fallback

def clean_and_add_questions(filepath, new_questions):
    """Remove placeholders and add new questions to a level file"""
    print(f"\nProcessing: {os.path.basename(filepath)}")

    content = read_file(filepath)

    # Count current questions
    current_count = len(re.findall(r'question:\s*\{', content))
    print(f"  Current questions: {current_count}")

    if current_count < 40:
        print(f"  ERROR: File has less than 40 questions!")
        return False

    # Find where to insert (after question 40)
    insertion_point = find_last_real_question_end(content)

    # Build the new questions string
    questions_text = ""
    for i, q_data in enumerate(new_questions, start=41):
        if i > 41:  # Add comma before all but the first new question
            questions_text = "," + questions_text
        questions_text += "\n" + format_question(q_data)

    # Find the closing pattern
    closing_match = re.search(r'\n    \]\s*\};\s*\n\s*if \(typeof module', content)
    if not closing_match:
        print(f"  ERROR: Could not find closing pattern!")
        return False

    closing_start = closing_match.start()

    # Construct new content
    new_content = (
        content[:insertion_point] +
        "," +
        questions_text +
        content[closing_start:]
    )

    # Verify question count
    new_count = len(re.findall(r'question:\s*\{', new_content))
    print(f"  New question count: {new_count}")

    if new_count != current_count + len(new_questions):
        print(f"  WARNING: Expected {current_count + len(new_questions)} questions, got {new_count}")

    # Write the file
    write_file(filepath, new_content)
    print(f"  ✓ Successfully updated {os.path.basename(filepath)}")

    return True

# Sample questions to test with (we'll expand these)
SAMPLE_QUESTIONS = [
    {
        "question": {
            "en": "Who played Walter White in Breaking Bad?",
            "es": "¿Quién interpretó a Walter White en Breaking Bad?",
            "de": "Wer spielte Walter White in Breaking Bad?",
            "nl": "Wie speelde Walter White in Breaking Bad?"
        },
        "options": [
            {"en": "Bryan Cranston", "es": "Bryan Cranston", "de": "Bryan Cranston", "nl": "Bryan Cranston"},
            {"en": "Aaron Paul", "es": "Aaron Paul", "de": "Aaron Paul", "nl": "Aaron Paul"},
            {"en": "Dean Norris", "es": "Dean Norris", "de": "Dean Norris", "nl": "Dean Norris"},
            {"en": "Bob Odenkirk", "es": "Bob Odenkirk", "de": "Bob Odenkirk", "nl": "Bob Odenkirk"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Bryan Cranston won four Emmy Awards for his role as chemistry teacher turned drug lord.",
            "es": "Bryan Cranston ganó cuatro Premios Emmy por su papel de profesor de química convertido en narcotraficante.",
            "de": "Bryan Cranston gewann vier Emmy Awards für seine Rolle als Chemielehrer, der zum Drogenboss wurde.",
            "nl": "Bryan Cranston won vier Emmy Awards voor zijn rol als scheikundeleraar die drugsbaas werd."
        }
    }
]

def main():
    """Test the expansion on level 3"""
    filepath = os.path.join(BASE_PATH, "level3.js")

    # For testing, just use one question
    test_questions = SAMPLE_QUESTIONS * 2  # Just 2 questions for testing

    success = clean_and_add_questions(filepath, test_questions)

    if success:
        print("\n✓ Test successful!")
    else:
        print("\n✗ Test failed!")

if __name__ == "__main__":
    main()
