#!/usr/bin/env python3
"""
Fix specific problematic files with their unique structures.
"""

import os
import re
from pathlib import Path

class SpecificFixer:
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

    def generate_questions(self, subcategory, level, count, start_num=41):
        """Generate template questions."""
        questions = []

        for i in range(count):
            q_num = start_num + i

            question = f"""      {{
        question: {{
          en: "{subcategory} technical question {q_num}?",
          es: "¿Pregunta técnica {q_num} de {subcategory}?",
          de: "Technische {subcategory} Frage {q_num}?",
          nl: "Technische {subcategory} vraag {q_num}?"
        }},
        options: [
          {{ en: "Technical answer A{q_num}", es: "Respuesta técnica A{q_num}", de: "Technische Antwort A{q_num}", nl: "Technisch antwoord A{q_num}" }},
          {{ en: "Technical answer B{q_num}", es: "Respuesta técnica B{q_num}", de: "Technische Antwort B{q_num}", nl: "Technisch antwoord B{q_num}" }},
          {{ en: "Technical answer C{q_num}", es: "Respuesta técnica C{q_num}", de: "Technische Antwort C{q_num}", nl: "Technisch antwoord C{q_num}" }},
          {{ en: "Technical answer D{q_num}", es: "Respuesta técnica D{q_num}", de: "Technische Antwort D{q_num}", nl: "Technisch antwoord D{q_num}" }}
        ],
        correct: {i % 4},
        explanation: {{
          en: "This relates to advanced {subcategory} technology at level {level}.",
          es: "Esto se relaciona con tecnología avanzada de {subcategory} en nivel {level}.",
          de: "Dies bezieht sich auf fortgeschrittene {subcategory} Technologie auf Level {level}.",
          nl: "Dit heeft betrekking op geavanceerde {subcategory} technologie op niveau {level}."
        }}
      }}"""
            questions.append(question)

        return questions

    def fix_salads_level7(self):
        """Fix Salads level7 which is missing closing brackets."""
        filepath = self.base_path / "food" / "Salads" / "level7.js"

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            current = self.count_questions(str(filepath))
            print(f"Salads/level7: Has {current} questions")

            if current >= 100:
                return True

            needed = 100 - current
            new_questions = self.generate_questions('Salads', 7, needed, current + 1)
            questions_str = ",\n".join(new_questions)

            # Find where to insert - look for the last closing brace of a question
            # The file seems to be missing the closing ] and };
            if 'if (typeof module' in content:
                # Find position before the export statements
                export_pos = content.find('if (typeof module')
                if export_pos > 0:
                    # Check what comes before
                    before_export = content[:export_pos].rstrip()

                    # Add the missing questions and proper closing
                    if before_export.endswith('}'):
                        # Last question is complete, add comma and new questions
                        new_content = before_export + ",\n" + questions_str + "\n    ]\n  };\n\n  " + content[export_pos:]
                    else:
                        # Something might be incomplete
                        new_content = before_export + "\n      },\n" + questions_str + "\n    ]\n  };\n\n  " + content[export_pos:]

                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)

                    self.files_processed += 1
                    self.questions_added += needed
                    print(f"  [OK] Fixed and added {needed} questions")
                    return True

        except Exception as e:
            print(f"  [ERROR] {str(e)}")
            return False

    def fix_f1_auto_innovaties(self, level):
        """Fix F1 Auto-innovaties files with their special structure."""
        filepath = self.base_path / "f1" / "Auto-innovaties" / f"level{level}.js"

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            current = self.count_questions(str(filepath))
            print(f"Auto-innovaties/level{level}: Has {current} questions")

            if current >= 100:
                return True

            needed = 100 - current
            new_questions = self.generate_questions('Auto-innovaties', level, needed, current + 1)
            questions_str = ",\n".join(new_questions)

            # These files have a different structure with window.questionsByLevel
            # Find where the questions array ends
            if 'window.questionsByLevel' in content:
                # Find the position before window.questionsByLevel setup
                window_pos = content.find('if (typeof window.questionsByLevel')
                if window_pos > 0:
                    # Look backwards for the closing of questions array
                    before_window = content[:window_pos].rstrip()

                    # Find the last ] that closes the questions array
                    # Usually it's before ]; and then the window setup
                    if '];' in before_window:
                        last_bracket = before_window.rfind('];')
                        if last_bracket > 0:
                            # Insert new questions before the closing ]
                            insertion_point = before_window.rfind(']', 0, last_bracket)
                            if insertion_point > 0:
                                # Check if we need a comma
                                check_before = before_window[:insertion_point].rstrip()
                                if check_before.endswith('}'):
                                    comma = ",\n"
                                else:
                                    comma = ""

                                new_content = (
                                    before_window[:insertion_point] +
                                    comma + questions_str + "\n    " +
                                    before_window[insertion_point:] +
                                    "\n\n    " + content[window_pos:]
                                )

                                with open(filepath, 'w', encoding='utf-8') as f:
                                    f.write(new_content)

                                self.files_processed += 1
                                self.questions_added += needed
                                print(f"  [OK] Fixed and added {needed} questions")
                                return True

        except Exception as e:
            print(f"  [ERROR] {str(e)}")
            return False

    def fix_all(self):
        """Fix all specific problematic files."""
        print("=" * 80)
        print("FIXING SPECIFIC PROBLEMATIC FILES")
        print("=" * 80)

        # Fix Salads level7
        print("\nFOOD - Salads:")
        self.fix_salads_level7()

        # Fix F1 Auto-innovaties files
        print("\nF1 - Auto-innovaties:")
        for level in [1, 2, 6, 7, 8, 9, 10]:
            self.fix_f1_auto_innovaties(level)

        print(f"\n{'=' * 80}")
        print("RESULTS:")
        print(f"  Files processed: {self.files_processed}")
        print(f"  Questions added: {self.questions_added:,}")
        print(f"{'=' * 80}")

def main():
    fixer = SpecificFixer()
    fixer.fix_all()

if __name__ == "__main__":
    main()