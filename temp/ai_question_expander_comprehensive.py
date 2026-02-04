#!/usr/bin/env python3
"""
Comprehensive AI Quiz Question Expander
Expands all AI quiz files from 40 to 100 questions per file
"""

import os
import re
import json

# Base path
BASE_PATH = r"c:/Users/rbosch/OneDrive - A.S. Watson Europe/prive/RobitQuiz/src/questions/data/subjects/ai"

# AI geschiedenis Level 1 - Additional 60 questions (questions 41-100)
AI_GESCHIEDENIS_L1_QUESTIONS = [
    {
        "question": {
            "en": "What was the name of the first chess program developed in the 1950s?",
            "es": "¿Cuál fue el nombre del primer programa de ajedrez desarrollado en los años 1950?",
            "de": "Wie hieß das erste Schachprogramm, das in den 1950er Jahren entwickelt wurde?",
            "nl": "Wat was de naam van het eerste schaakprogramma dat in de jaren 1950 werd ontwikkeld?"
        },
        "options": [
            {
                "en": "ChessBot",
                "es": "ChessBot",
                "de": "ChessBot",
                "nl": "ChessBot"
            },
            {
                "en": "Turochamp",
                "es": "Turochamp",
                "de": "Turochamp",
                "nl": "Turochamp"
            },
            {
                "en": "Deep Thought",
                "es": "Deep Thought",
                "de": "Deep Thought",
                "nl": "Deep Thought"
            },
            {
                "en": "Kasparov AI",
                "es": "Kasparov AI",
                "de": "Kasparov AI",
                "nl": "Kasparov AI"
            }
        ],
        "correct": 1,
        "explanation": {
            "en": "Turochamp was one of the first chess programs, developed by Alan Turing and David Champernowne in 1948, though it was never fully implemented on a computer.",
            "es": "Turochamp fue uno de los primeros programas de ajedrez, desarrollado por Alan Turing y David Champernowne en 1948, aunque nunca se implementó completamente en una computadora.",
            "de": "Turochamp war eines der ersten Schachprogramme, entwickelt von Alan Turing und David Champernowne im Jahr 1948, obwohl es nie vollständig auf einem Computer implementiert wurde.",
            "nl": "Turochamp was een van de eerste schaakprogramma's, ontwikkeld door Alan Turing en David Champernowne in 1948, hoewel het nooit volledig op een computer werd geïmplementeerd."
        }
    },
    # Add 59 more questions here - this is just a template
    # The actual implementation would need all 60 questions
]

def format_question(q, indent="      "):
    """Format a question dict as JavaScript code"""
    result = f"{indent}{{\n"
    result += f"{indent}  question: {{\n"
    for lang, text in q["question"].items():
        result += f'{indent}            "{lang}": "{text}",\n'
    result = result.rstrip(",\n") + "\n"
    result += f"{indent}  }},\n"

    result += f"{indent}  options: [\n"
    for opt in q["options"]:
        result += f"{indent}  {{\n"
        for lang, text in opt.items():
            result += f'{indent}            "{lang}": "{text}",\n'
        result = result.rstrip(",\n") + "\n"
        result += f"{indent}  }},\n"
    result = result.rstrip(",\n") + "\n"
    result += f"{indent}  ],\n"

    result += f"{indent}  correct: {q['correct']},\n"

    result += f"{indent}  explanation: {{\n"
    for lang, text in q["explanation"].items():
        result += f'{indent}            "{lang}": "{text}",\n'
    result = result.rstrip(",\n") + "\n"
    result += f"{indent}  }}\n"

    result += f"{indent}}}"
    return result

def count_questions(file_path):
    """Count the number of questions in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        return content.count('correct:')
    except Exception as e:
        print(f"Error counting questions in {file_path}: {e}")
        return 0

def expand_file(file_path, new_questions):
    """Expand a quiz file with new questions"""
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find the last question closing brace before the array closes
        # Look for the pattern: "    }\n    ]\n  };"
        pattern = r'(      }\n    )\]\n  \};'

        # Format all new questions
        questions_str = ""
        for q in new_questions:
            questions_str += ",\n" + format_question(q)

        # Replace
        new_content = re.sub(pattern, r'\1' + questions_str + '\n    ]\n  };', content)

        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        return True
    except Exception as e:
        print(f"Error expanding {file_path}: {e}")
        return False

def main():
    """Main function"""
    # Example: Expand AI geschiedenis level 1
    level1_path = os.path.join(BASE_PATH, "AI geschiedenis", "level1.js")

    current_count = count_questions(level1_path)
    print(f"Current question count in level1.js: {current_count}")

    if current_count == 40:
        print("File has 40 questions. Ready to expand to 100.")
        print("NOTE: This script template needs 60 complete questions added to AI_GESCHIEDENIS_L1_QUESTIONS")
        print("The current implementation only has 1 sample question.")
    elif current_count == 100:
        print("File already has 100 questions!")
    else:
        print(f"Unexpected question count: {current_count}")

if __name__ == "__main__":
    main()
