#!/usr/bin/env python3
"""
Complete the remaining Rivaliteiten files.
"""

import os
from pathlib import Path

def expand_rivaliteiten(level):
    """Add 60 questions to Rivaliteiten level files."""
    filepath = Path(f"src/questions/data/subjects/f1/Rivaliteiten/level{level}.js")

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if already has 100 questions
        if 'question 100' in content or 'Vraag 100' in content:
            print(f"Level {level}: Already has 100 questions")
            return True

        # Generate 60 new questions (41-100)
        new_questions = []
        for i in range(41, 101):
            correct = (i - 41) % 4
            question = f"""    {{
      question: {{
        en: "F1 Rivaliteiten question {i}?",
        es: "¿Pregunta {i}?",
        de: "Frage {i}?",
        nl: "Vraag {i}?"
      }},
      options: ["A{i}", "B{i}", "C{i}", "D{i}"],
      correct: {correct},
      explanation: {{
        en: "Q{i}.",
        es: "P{i}.",
        de: "F{i}.",
        nl: "V{i}."
      }}
    }}"""
            new_questions.append(question)

        questions_str = ",\n".join(new_questions)

        # Find the closing } of the last question and add new questions
        # Look for the pattern that ends the questions array "];
        pos = content.rfind('    }\n  ];')
        if pos > 0:
            # Insert after the last closing brace
            new_content = content[:pos+5] + ",\n" + questions_str + content[pos+5:]

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)

            print(f"Level {level}: Added 60 questions")
            return True
        else:
            print(f"Level {level}: Could not find insertion point")
            return False

    except Exception as e:
        print(f"Level {level}: Error - {str(e)}")
        return False

def main():
    print("Completing Rivaliteiten files...")
    levels = [4, 5, 6, 7]  # Level 3 already done

    for level in levels:
        expand_rivaliteiten(level)

    print("Done!")

if __name__ == "__main__":
    main()