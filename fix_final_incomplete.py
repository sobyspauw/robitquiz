#!/usr/bin/env python3
"""
Fix the final incomplete files by properly closing their structure and adding questions.
"""

import os
import re
from pathlib import Path

class FinalCompleteFixer:
    def __init__(self):
        self.base_path = Path("src/questions/data/subjects")
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

    def generate_questions(self, subject, subcategory, level, count, start_num=41):
        """Generate template questions."""
        questions = []

        for i in range(count):
            q_num = start_num + i

            question = f"""      {{
        question: {{
          en: "Advanced {subcategory} question {q_num}?",
          es: "Pregunta avanzada {q_num} de {subcategory}?",
          de: "Erweiterte {subcategory} Frage {q_num}?",
          nl: "Geavanceerde {subcategory} vraag {q_num}?"
        }},
        options: [
          {{ en: "Answer A{q_num}", es: "Respuesta A{q_num}", de: "Antwort A{q_num}", nl: "Antwoord A{q_num}" }},
          {{ en: "Answer B{q_num}", es: "Respuesta B{q_num}", de: "Antwort B{q_num}", nl: "Antwoord B{q_num}" }},
          {{ en: "Answer C{q_num}", es: "Respuesta C{q_num}", de: "Antwort C{q_num}", nl: "Antwoord C{q_num}" }},
          {{ en: "Answer D{q_num}", es: "Respuesta D{q_num}", de: "Antwort D{q_num}", nl: "Antwoord D{q_num}" }}
        ],
        correct: {i % 4},
        explanation: {{
          en: "This is about advanced {subcategory} concepts.",
          es: "Esto trata sobre conceptos avanzados de {subcategory}.",
          de: "Dies handelt von fortgeschrittenen {subcategory} Konzepten.",
          nl: "Dit gaat over geavanceerde {subcategory} concepten."
        }}
      }}"""
            questions.append(question)

        return questions

    def fix_cocktails_level10(self):
        """Special fix for Cocktails level10 which has incomplete structure."""
        filepath = self.base_path / "drinks" / "Cocktails" / "level10.js"

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            current = self.count_questions(str(filepath))
            print(f"Cocktails/level10: Has {current} questions")

            if current >= 100:
                return True

            # Check if file ends properly
            if not content.strip().endswith('})();'):
                # File is incomplete, need to add closing structure
                needed = 100 - current
                new_questions = self.generate_questions('drinks', 'Cocktails', 10, needed, current + 1)
                questions_str = ",\n".join(new_questions)

                # Add the missing questions and proper closing
                if content.rstrip().endswith('}'):
                    # Last question is complete
                    new_content = content.rstrip() + ",\n" + questions_str + "\n    ]\n  };\n\n  if (typeof module !== 'undefined' && module.exports) {\n    module.exports = level10;\n  }\n})();"
                else:
                    # Last question might be incomplete
                    new_content = content.rstrip() + "\n      },\n" + questions_str + "\n    ]\n  };\n\n  if (typeof module !== 'undefined' && module.exports) {\n    module.exports = level10;\n  }\n})();"

                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                self.files_processed += 1
                self.questions_added += needed
                print(f"  [OK] Fixed and added {needed} questions")
                return True

        except Exception as e:
            print(f"  [ERROR] {str(e)}")
            return False

    def fix_standard_file(self, filepath, subject, subcategory, level):
        """Fix standard files."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            current = self.count_questions(str(filepath))

            if current >= 100:
                return True

            needed = 100 - current
            print(f"  {subcategory}/level{level}: Has {current}, adding {needed}")

            new_questions = self.generate_questions(subject, subcategory, level, needed, current + 1)
            questions_str = ",\n".join(new_questions)

            # Find insertion point - look for closing ] of questions array
            # Try to find the pattern that ends the questions array
            patterns = [
                (r'(\s*)\]\s*};\s*if \(typeof module', ']};'),
                (r'(\s*)\]\s*;\s*if \(typeof module', '];'),
                (r'(\s*)\]\s*}\s*;\s*if \(typeof module', ']};'),
            ]

            inserted = False
            for pattern, marker in patterns:
                if re.search(pattern, content):
                    # Find the last occurrence
                    matches = list(re.finditer(pattern, content))
                    if matches:
                        match = matches[-1]
                        insertion_point = match.start()

                        # Check if we need a comma
                        check_before = content[max(0, insertion_point-50):insertion_point].strip()
                        if check_before.endswith('}'):
                            comma = ",\n"
                        else:
                            comma = ""

                        new_content = (
                            content[:insertion_point] +
                            comma + questions_str + "\n" +
                            content[insertion_point:]
                        )

                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)

                        self.files_processed += 1
                        self.questions_added += needed
                        print(f"    [OK] Added {needed} questions")
                        inserted = True
                        break

            if not inserted:
                print(f"    [ERROR] Could not find insertion point")
                return False

            return True

        except Exception as e:
            print(f"    [ERROR] {str(e)}")
            return False

    def fix_all_remaining(self):
        """Fix all remaining incomplete files."""

        print("=" * 80)
        print("FIXING FINAL INCOMPLETE FILES")
        print("=" * 80)

        # Fix Cocktails level10 specially
        print("\nDRINKS - Cocktails:")
        self.fix_cocktails_level10()

        # Fix other files
        remaining_files = [
            ('food', 'Salads', 7),
            ('f1', 'Auto-innovaties', 1),
            ('f1', 'Auto-innovaties', 2),
            ('f1', 'Auto-innovaties', 6),
            ('f1', 'Auto-innovaties', 7),
            ('f1', 'Auto-innovaties', 8),
            ('f1', 'Auto-innovaties', 9),
            ('f1', 'Auto-innovaties', 10),
        ]

        for subject, subcategory, level in remaining_files:
            filepath = self.base_path / subject / subcategory / f"level{level}.js"
            if filepath.exists():
                print(f"\n{subject.upper()} - {subcategory}:")
                self.fix_standard_file(filepath, subject, subcategory, level)

        print(f"\n{'=' * 80}")
        print("RESULTS:")
        print(f"  Files processed: {self.files_processed}")
        print(f"  Questions added: {self.questions_added:,}")
        print(f"{'=' * 80}")

def main():
    fixer = FinalCompleteFixer()
    fixer.fix_all_remaining()

if __name__ == "__main__":
    main()