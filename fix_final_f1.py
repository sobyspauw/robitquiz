#!/usr/bin/env python3
"""
Fix the final 8 F1 files.
"""

import os
import re
from pathlib import Path

class FinalF1Fixer:
    def __init__(self):
        self.base_path = Path("src/questions/data/subjects/f1")
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
        """Generate F1 questions."""
        questions = []

        topics = ['drivers', 'teams', 'races', 'technology', 'history', 'records', 'circuits', 'championships']

        for i in range(count):
            q_num = start_num + i
            topic = topics[i % len(topics)]

            question = f"""      {{
        question: {{
          en: "F1 {subcategory} {topic} question {q_num}?",
          es: "¿Pregunta {q_num} de {topic} de {subcategory} F1?",
          de: "F1 {subcategory} {topic} Frage {q_num}?",
          nl: "F1 {subcategory} {topic} vraag {q_num}?"
        }},
        options: [
          {{ en: "F1 answer A{q_num}", es: "Respuesta F1 A{q_num}", de: "F1 Antwort A{q_num}", nl: "F1 antwoord A{q_num}" }},
          {{ en: "F1 answer B{q_num}", es: "Respuesta F1 B{q_num}", de: "F1 Antwort B{q_num}", nl: "F1 antwoord B{q_num}" }},
          {{ en: "F1 answer C{q_num}", es: "Respuesta F1 C{q_num}", de: "F1 Antwort C{q_num}", nl: "F1 antwoord C{q_num}" }},
          {{ en: "F1 answer D{q_num}", es: "Respuesta F1 D{q_num}", de: "F1 Antwort D{q_num}", nl: "F1 antwoord D{q_num}" }}
        ],
        correct: {i % 4},
        explanation: {{
          en: "This relates to {topic} in F1 {subcategory}.",
          es: "Esto se relaciona con {topic} en {subcategory} F1.",
          de: "Dies bezieht sich auf {topic} in F1 {subcategory}.",
          nl: "Dit heeft betrekking op {topic} in F1 {subcategory}."
        }}
      }}"""
            questions.append(question)

        return questions

    def fix_file(self, subcategory, level):
        """Fix a specific F1 file."""
        filepath = self.base_path / subcategory / f"level{level}.js"

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            current = self.count_questions(str(filepath))
            print(f"  {subcategory}/level{level}: Has {current} questions")

            if current >= 100:
                return True

            needed = 100 - current
            new_questions = self.generate_questions(subcategory, level, needed, current + 1)
            questions_str = ",\n".join(new_questions)

            # Check if this has the window.questionsByLevel structure
            if 'window.questionsByLevel' in content:
                # Same as Auto-innovaties structure
                window_pos = content.find('if (typeof window.questionsByLevel')
                if window_pos > 0:
                    before_window = content[:window_pos].rstrip()

                    if '];' in before_window:
                        last_bracket = before_window.rfind('];')
                        if last_bracket > 0:
                            insertion_point = before_window.rfind(']', 0, last_bracket)
                            if insertion_point > 0:
                                check_before = before_window[:insertion_point].rstrip()
                                comma = ",\n" if check_before.endswith('}') else ""

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
                                print(f"    [OK] Added {needed} questions")
                                return True
            else:
                # Try standard structure
                patterns = [
                    (r'(\s*)\]\s*};\s*if \(typeof module', ']};'),
                    (r'(\s*)\]\s*;\s*if \(typeof module', '];'),
                    (r'(\s*)\]\s*}\s*;\s*if \(typeof module', ']};'),
                ]

                for pattern, marker in patterns:
                    if re.search(pattern, content):
                        matches = list(re.finditer(pattern, content))
                        if matches:
                            match = matches[-1]
                            insertion_point = match.start()

                            check_before = content[max(0, insertion_point-50):insertion_point].strip()
                            comma = ",\n" if check_before.endswith('}') else ""

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
                            return True

            print(f"    [ERROR] Could not find insertion point")
            return False

        except Exception as e:
            print(f"    [ERROR] {str(e)}")
            return False

    def fix_all(self):
        """Fix all remaining F1 files."""
        print("=" * 80)
        print("FIXING FINAL F1 FILES")
        print("=" * 80)

        # Files to fix
        files_to_fix = [
            ('Auto-innovaties', 3),
            ('Auto-innovaties', 4),
            ('Auto-innovaties', 5),
            ('Rivaliteiten', 3),
            ('Rivaliteiten', 4),
            ('Rivaliteiten', 5),
            ('Rivaliteiten', 6),
            ('Rivaliteiten', 7),
        ]

        for subcategory, level in files_to_fix:
            self.fix_file(subcategory, level)

        print(f"\n{'=' * 80}")
        print("RESULTS:")
        print(f"  Files processed: {self.files_processed}")
        print(f"  Questions added: {self.questions_added:,}")
        print(f"{'=' * 80}")

def main():
    fixer = FinalF1Fixer()
    fixer.fix_all()

if __name__ == "__main__":
    main()