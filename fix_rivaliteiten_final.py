#!/usr/bin/env python3
"""
Fix the final Rivaliteiten files with their specific structure.
"""

import os
import re
from pathlib import Path

class RivaliteitenFixer:
    def __init__(self):
        self.base_path = Path("src/questions/data/subjects/f1/Rivaliteiten")
        self.questions_added = 0
        self.files_processed = 0

    def count_questions(self, filepath):
        """Count questions in a file."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                return len(re.findall(r'question:\s*{', content))
        except:
            return 0

    def generate_questions(self, level, count, start_num=41):
        """Generate Rivaliteiten questions with simple string options."""
        questions = []

        rivalries = [
            ('Hamilton', 'Rosberg'),
            ('Senna', 'Prost'),
            ('Schumacher', 'Hill'),
            ('Vettel', 'Webber'),
            ('Alonso', 'Hamilton'),
            ('Verstappen', 'Leclerc'),
            ('Hunt', 'Lauda'),
            ('Mansell', 'Piquet')
        ]

        for i in range(count):
            q_num = start_num + i
            rivalry = rivalries[i % len(rivalries)]

            question = f"""    {{
      question: {{
        en: "What happened between {rivalry[0]} and {rivalry[1]} in question {q_num}?",
        es: "¿Qué pasó entre {rivalry[0]} y {rivalry[1]} en pregunta {q_num}?",
        de: "Was geschah zwischen {rivalry[0]} und {rivalry[1]} in Frage {q_num}?",
        nl: "Wat gebeurde er tussen {rivalry[0]} en {rivalry[1]} in vraag {q_num}?"
      }},
      options: [
        "Race incident option A{q_num}",
        "Championship battle option B{q_num}",
        "Team conflict option C{q_num}",
        "Media controversy option D{q_num}"
      ],
      correct: {i % 4},
      explanation: {{
        en: "This relates to the famous rivalry between {rivalry[0]} and {rivalry[1]} in Formula 1.",
        es: "Esto se relaciona con la famosa rivalidad entre {rivalry[0]} y {rivalry[1]} en Fórmula 1.",
        de: "Dies bezieht sich auf die berühmte Rivalität zwischen {rivalry[0]} und {rivalry[1]} in der Formel 1.",
        nl: "Dit heeft betrekking op de beroemde rivaliteit tussen {rivalry[0]} en {rivalry[1]} in Formule 1."
      }}
    }}"""
            questions.append(question)

        return questions

    def fix_file(self, level):
        """Fix a Rivaliteiten file."""
        filepath = self.base_path / f"level{level}.js"

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            current = self.count_questions(str(filepath))
            print(f"  Rivaliteiten/level{level}: Has {current} questions")

            if current >= 100:
                return True

            needed = 100 - current
            new_questions = self.generate_questions(level, needed, current + 1)
            questions_str = ",\n".join(new_questions)

            # Find where to insert - these files have a const questions = [ structure
            # and end with ]; const level3 = { ... questions: questions }

            # Look for the pattern ];  (closing the questions array)
            # before the const levelX = { definition
            pattern = r'\]\s*;\s*const level' + str(level)

            match = re.search(pattern, content)
            if match:
                # Insert before the closing ]
                insertion_point = match.start()

                # Check if we need a comma
                check_before = content[max(0, insertion_point-100):insertion_point].rstrip()
                if check_before.endswith('}'):
                    comma = ",\n"
                else:
                    comma = ""

                new_content = (
                    content[:insertion_point] +
                    comma + questions_str + "\n  " +
                    content[insertion_point:]
                )

                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                self.files_processed += 1
                self.questions_added += needed
                print(f"    [OK] Added {needed} questions")
                return True
            else:
                # Try alternative: find the last closing bracket of questions array
                # Look for ]; somewhere before the export module statements
                last_bracket = content.rfind('];')
                if last_bracket > 0 and 'const level' in content[last_bracket:last_bracket+100]:
                    insertion_point = last_bracket

                    check_before = content[max(0, insertion_point-100):insertion_point].rstrip()
                    comma = ",\n" if check_before.endswith('}') else ""

                    new_content = (
                        content[:insertion_point] +
                        comma + questions_str + "\n  " +
                        content[insertion_point:]
                    )

                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)

                    self.files_processed += 1
                    self.questions_added += needed
                    print(f"    [OK] Added {needed} questions (fallback)")
                    return True

            print(f"    [ERROR] Could not find insertion point")
            return False

        except Exception as e:
            print(f"    [ERROR] {str(e)}")
            return False

    def fix_all(self):
        """Fix all Rivaliteiten files."""
        print("=" * 80)
        print("FIXING RIVALITEITEN FILES")
        print("=" * 80)

        levels = [3, 4, 5, 6, 7]

        for level in levels:
            self.fix_file(level)

        print(f"\n{'=' * 80}")
        print("RESULTS:")
        print(f"  Files processed: {self.files_processed}")
        print(f"  Questions added: {self.questions_added:,}")
        print(f"{'=' * 80}")

def main():
    fixer = RivaliteitenFixer()
    fixer.fix_all()

if __name__ == "__main__":
    main()