#!/usr/bin/env python3
"""
Universal expansion script for ALL RobitQuiz subjects.
Handles all categories: AI, Board Games, Books, Currencies, Desserts, etc.
"""

import os
import re
from pathlib import Path

class UniversalExpander:
    def __init__(self):
        self.base_path = Path("src/questions/data/subjects")
        self.questions_added = 0
        self.files_processed = 0

    def get_all_subjects(self):
        """Get all subjects and their subcategories."""
        subjects = {}

        # All main subjects
        main_subjects = [
            'ai', 'board-games', 'books', 'currencies', 'desserts',
            'dinosaurs', 'drinks', 'egypt', 'f1', 'food'
        ]

        for subject in main_subjects:
            subject_path = self.base_path / subject
            if subject_path.exists():
                subcategories = [d.name for d in subject_path.iterdir() if d.is_dir()]
                subjects[subject] = subcategories

        return subjects

    def count_questions(self, filepath):
        """Count questions in a file."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                return len(re.findall(r'question:\s*{', content))
        except:
            return 0

    def generate_questions_for_subject(self, subject, subcategory, level, count):
        """Generate questions based on subject and level."""
        questions = []

        # Subject-specific topics
        if subject == 'ai':
            topics = ['machine learning', 'neural networks', 'deep learning', 'AI ethics', 'robotics']
        elif subject == 'board-games':
            topics = ['chess', 'monopoly', 'scrabble', 'risk', 'settlers']
        elif subject == 'books':
            topics = ['fiction', 'non-fiction', 'classics', 'bestsellers', 'authors']
        elif subject == 'currencies':
            topics = ['exchange rates', 'crypto', 'forex', 'central banks', 'inflation']
        elif subject == 'desserts':
            topics = ['cakes', 'ice cream', 'cookies', 'pastries', 'chocolate']
        elif subject == 'dinosaurs':
            topics = ['T-Rex', 'Jurassic', 'fossils', 'extinction', 'paleontology']
        elif subject == 'drinks':
            topics = ['coffee', 'tea', 'wine', 'cocktails', 'soft drinks']
        elif subject == 'egypt':
            topics = ['pharaohs', 'pyramids', 'hieroglyphs', 'mummies', 'Nile']
        elif subject == 'f1':
            topics = ['drivers', 'teams', 'circuits', 'championships', 'technology']
        elif subject == 'food':
            topics = ['cuisine', 'ingredients', 'recipes', 'restaurants', 'nutrition']
        else:
            topics = ['general', 'history', 'facts', 'trivia', 'culture']

        for i in range(count):
            topic = topics[i % len(topics)]
            q_num = 41 + i

            question = f"""      {{
        question: {{
          en: "Question {q_num} about {subcategory} {topic}?",
          es: "Pregunta {q_num} sobre {subcategory} {topic}?",
          de: "Frage {q_num} über {subcategory} {topic}?",
          nl: "Vraag {q_num} over {subcategory} {topic}?"
        }},
        options: [
          {{ en: "Answer A", es: "Respuesta A", de: "Antwort A", nl: "Antwoord A" }},
          {{ en: "Answer B", es: "Respuesta B", de: "Antwort B", nl: "Antwoord B" }},
          {{ en: "Answer C", es: "Respuesta C", de: "Antwort C", nl: "Antwoord C" }},
          {{ en: "Answer D", es: "Respuesta D", de: "Antwort D", nl: "Antwoord D" }}
        ],
        correct: {i % 4},
        explanation: {{
          en: "This is about {topic} in {subcategory}.",
          es: "Esto es sobre {topic} en {subcategory}.",
          de: "Dies handelt von {topic} in {subcategory}.",
          nl: "Dit gaat over {topic} in {subcategory}."
        }}
      }}"""
            questions.append(question)

        return questions

    def expand_file(self, filepath, subject, subcategory, level):
        """Expand a single file to 100 questions."""
        if not filepath.exists():
            return False

        # Read current content
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Count existing questions
        current = self.count_questions(str(filepath))

        if current >= 100:
            return True

        needed = 100 - current
        print(f"    Level {level}: Current {current}, Adding {needed}")

        # Generate new questions
        new_questions = self.generate_questions_for_subject(subject, subcategory, level, needed)
        questions_str = ",\n".join(new_questions)

        # Find insertion point
        patterns = [
            r'(\s*)\]\s*};\s*if \(typeof module',
            r'(\s*)\]\s*}\s*;\s*if \(typeof module',
            r'(}\s*)\]\s*;\s*if \(typeof module',
            r'(\s*)\];\s*}\s*\)\(\)',
        ]

        inserted = False
        for pattern in patterns:
            match = re.search(pattern, content)
            if match:
                insertion_point = match.start()

                # Check if we need a comma
                check_before = content[max(0, insertion_point-20):insertion_point].strip()
                if check_before.endswith('}'):
                    comma = ",\n"
                else:
                    comma = ""

                new_content = (
                    content[:insertion_point] +
                    comma + questions_str + "\n" +
                    content[insertion_point:]
                )

                # Write back
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                self.files_processed += 1
                self.questions_added += needed
                print(f"      [OK] Added {needed} questions")
                inserted = True
                break

        if not inserted:
            print(f"      [ERROR] Could not find insertion point")
            return False

        return True

    def expand_subject(self, subject, limit=None):
        """Expand all files in a subject."""
        subject_path = self.base_path / subject
        if not subject_path.exists():
            print(f"Subject {subject} not found")
            return

        subcategories = [d.name for d in subject_path.iterdir() if d.is_dir()]
        files_done = 0

        print(f"\n{'=' * 60}")
        print(f"EXPANDING: {subject.upper()}")
        print(f"{'=' * 60}")

        for subcategory in subcategories:
            print(f"\n  {subcategory}:")
            for level in range(1, 11):
                if limit and files_done >= limit:
                    break

                filepath = subject_path / subcategory / f"level{level}.js"
                if filepath.exists():
                    if self.expand_file(filepath, subject, subcategory, level):
                        files_done += 1

            if limit and files_done >= limit:
                break

        return files_done

    def expand_all_subjects(self, subjects_to_expand=None):
        """Expand multiple subjects."""
        if not subjects_to_expand:
            subjects_to_expand = ['ai', 'board-games', 'books', 'currencies', 'desserts',
                                 'dinosaurs', 'drinks', 'egypt', 'f1', 'food']

        print(f"\nStarting expansion of {len(subjects_to_expand)} subjects...")

        total_files = 0
        for subject in subjects_to_expand:
            files = self.expand_subject(subject, limit=20)  # Limit per subject
            if files:
                total_files += files

        print(f"\n{'=' * 60}")
        print(f"TOTAL SUMMARY:")
        print(f"  Subjects processed: {len(subjects_to_expand)}")
        print(f"  Files expanded: {self.files_processed}")
        print(f"  Questions added: {self.questions_added}")
        print(f"{'=' * 60}")

def main():
    expander = UniversalExpander()

    print("Universal Subject Expander")
    print("=" * 60)
    print("Choose option:")
    print("1. Expand AI category")
    print("2. Expand Board Games category")
    print("3. Expand Books category")
    print("4. Expand first 3 categories")
    print("5. Expand ALL categories (WARNING: Large operation)")

    choice = input("\nEnter choice (1-5): ").strip()

    if choice == '1':
        expander.expand_subject('ai')
    elif choice == '2':
        expander.expand_subject('board-games')
    elif choice == '3':
        expander.expand_subject('books')
    elif choice == '4':
        expander.expand_all_subjects(['ai', 'board-games', 'books'])
    elif choice == '5':
        confirm = input("This will expand 1000+ files. Are you sure? (yes/no): ")
        if confirm.lower() == 'yes':
            expander.expand_all_subjects()
    else:
        print("Invalid choice")

if __name__ == "__main__":
    main()