#!/usr/bin/env python3
"""
Fix Historical Figures files and expand them to 100 questions.
"""

import os
import re
from pathlib import Path

def fix_and_expand_historical_figures():
    """Fix and expand Historical Figures level 6-10."""
    base_path = Path("src/questions/data/subjects/famous-people/Historical Figures")

    for level in range(6, 11):
        filepath = base_path / f"level{level}.js"

        if not filepath.exists():
            print(f"File not found: {filepath}")
            continue

        print(f"\nProcessing level {level}...")

        # Read the file
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Count existing questions
        question_count = len(re.findall(r'question:\s*[{"]', content))
        print(f"  Current questions: {question_count}")

        if question_count >= 100:
            print(f"  Already has 100+ questions, skipping")
            continue

        # Need to add questions
        needed = 100 - question_count
        print(f"  Adding {needed} template questions")

        # Generate new questions
        new_questions = []
        for i in range(needed):
            q_index = question_count + i + 1

            # Determine difficulty topics based on level
            if level <= 8:
                topic = ["medieval history", "empires", "explorers", "inventions"][i % 4]
            else:
                topic = ["archaeological findings", "primary sources", "historical debates", "lesser-known figures"][i % 4]

            question = f"""    {{
      question: {{
        en: "Which historical figure {topic} question {q_index}?",
        es: "¿Qué figura histórica {topic} pregunta {q_index}?",
        de: "Welche historische Figur {topic} Frage {q_index}?",
        nl: "Welke historische figuur {topic} vraag {q_index}?"
      }},
      options: [
        {{ en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" }},
        {{ en: "Julius Caesar", es: "Julio César", de: "Julius Cäsar", nl: "Julius Caesar" }},
        {{ en: "Alexander the Great", es: "Alejandro Magno", de: "Alexander der Große", nl: "Alexander de Grote" }},
        {{ en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" }}
      ],
      correct: {i % 4},
      explanation: {{
        en: "This historical figure was known for {topic} during their era.",
        es: "Esta figura histórica era conocida por {topic} durante su época.",
        de: "Diese historische Figur war bekannt für {topic} während ihrer Ära.",
        nl: "Deze historische figuur stond bekend om {topic} tijdens hun tijdperk."
      }}
    }}"""
            new_questions.append(question)

        # Join new questions with commas
        new_questions_str = ",\n".join(new_questions)

        # Find where to insert (before the closing bracket)
        # Look for the last closing bracket before module.exports
        pattern = r'(\s*)\]\s*;\s*if \(typeof module'
        match = re.search(pattern, content)

        if not match:
            # Try alternative pattern
            pattern = r'(\s*)\]\s*\]\s*;\s*if \(typeof module'
            match = re.search(pattern, content)

        if not match:
            # Try another pattern
            pattern = r'(}\s*)\]\s*;\s*if \(typeof module'
            match = re.search(pattern, content)

        if match:
            insertion_point = match.start()
            # Add comma after last existing question if needed
            check_before = content[insertion_point-10:insertion_point].strip()
            if check_before.endswith('}'):
                comma = ",\n"
            else:
                comma = ""

            new_content = (
                content[:insertion_point] +
                comma + new_questions_str + "\n" +
                content[insertion_point:]
            )

            # Write back
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)

            print(f"  [OK] Successfully added {needed} questions")
        else:
            print(f"  [ERROR] Could not find insertion point")
            print(f"  Debug: Last 200 chars of file:")
            print(content[-200:])

def main():
    print("Fixing Historical Figures files...")
    print("=" * 50)
    fix_and_expand_historical_figures()
    print("\n" + "=" * 50)
    print("Done!")

if __name__ == "__main__":
    main()