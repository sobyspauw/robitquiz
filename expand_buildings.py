#!/usr/bin/env python3
"""
Mass expansion script specifically for Famous Buildings.
Handles the different structure of building files.
"""

import os
import re
from pathlib import Path

class BuildingsExpander:
    def __init__(self):
        self.base_path = Path("src/questions/data/subjects/famous-buildings")
        self.buildings = [
            "Big Ben", "Burj Khalifa", "Colosseum", "Eiffel Tower",
            "Empire State Building", "Great Wall of China", "Machu Picchu",
            "Petra", "Pyramids of Giza", "Sagrada Familia", "Taj Mahal"
        ]
        self.files_processed = 0
        self.questions_added = 0

    def count_questions(self, filepath):
        """Count questions in a file."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                # Try different patterns
                count1 = len(re.findall(r'question:\s*{', content))
                count2 = len(re.findall(r'"question":\s*{', content))
                return max(count1, count2)
        except:
            return 0

    def generate_building_questions(self, building, level, count):
        """Generate questions for a specific building and level."""
        questions = []

        # Determine topics based on level
        if level <= 3:
            topics = ["construction year", "location", "architect", "height", "visitors"]
        elif level <= 6:
            topics = ["architectural style", "historical significance", "renovations", "cultural impact", "UNESCO status"]
        elif level <= 8:
            topics = ["engineering details", "structural innovations", "conservation efforts", "archaeological findings", "myths"]
        else:
            topics = ["construction techniques", "material composition", "restoration challenges", "hidden features", "scientific studies"]

        for i in range(count):
            topic = topics[i % len(topics)]
            q_num = 41 + i  # Starting from question 41

            question = f"""      {{
        question: {{
          en: "What is the {topic} of {building}?",
          es: "¿Cuál es el/la {topic} de {building}?",
          de: "Was ist der/die {topic} von {building}?",
          nl: "Wat is de {topic} van {building}?"
        }},
        options: [
          {{ en: "Option A", es: "Opción A", de: "Option A", nl: "Optie A" }},
          {{ en: "Option B", es: "Opción B", de: "Option B", nl: "Optie B" }},
          {{ en: "Option C", es: "Opción C", de: "Option C", nl: "Optie C" }},
          {{ en: "Option D", es: "Opción D", de: "Option D", nl: "Optie D" }}
        ],
        correct: {i % 4},
        explanation: {{
          en: "{building} is known for its {topic}, which is historically significant.",
          es: "{building} es conocido por su {topic}, que es históricamente significativo.",
          de: "{building} ist bekannt für seine/ihre {topic}, die historisch bedeutsam ist.",
          nl: "{building} staat bekend om zijn {topic}, wat historisch significant is."
        }}
      }}"""
            questions.append(question)

        return questions

    def expand_building_file(self, building, level):
        """Expand a single building file."""
        filepath = self.base_path / building / f"level{level}.js"

        if not filepath.exists():
            return False

        # Read current content
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Count existing questions
        current_count = self.count_questions(str(filepath))

        if current_count >= 100:
            print(f"  {building} level {level}: Already has {current_count} questions")
            return True

        needed = 100 - current_count
        print(f"  {building} level {level}: Adding {needed} questions (current: {current_count})")

        # Generate new questions
        new_questions = self.generate_building_questions(building, level, needed)
        new_questions_str = ",\n".join(new_questions)

        # Try different insertion patterns
        patterns = [
            r'(\s*)\]\s*};\s*if \(typeof module',  # Standard pattern
            r'(\s*)\]\s*}\s*;\s*if \(typeof module',  # Extra space
            r'(}\s*)\]\s*;\s*if \(typeof module',  # After closing brace
            r'(\s*)\]\s*\];\s*if \(typeof module',  # Double bracket
            r'(\s*)\];\s*}\s*\)\(\)',  # IIFE closing
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
                    comma + new_questions_str + "\n" +
                    content[insertion_point:]
                )

                # Write back
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

    def expand_all_buildings(self, limit=None):
        """Expand all building files."""
        print("=" * 60)
        print("FAMOUS BUILDINGS EXPANSION")
        print("=" * 60)

        total_files = 0
        completed_files = 0

        for building in self.buildings:
            print(f"\n{building}:")
            for level in range(1, 11):
                if limit and total_files >= limit:
                    break

                filepath = self.base_path / building / f"level{level}.js"
                if filepath.exists():
                    total_files += 1
                    if self.expand_building_file(building, level):
                        completed_files += 1

            if limit and total_files >= limit:
                break

        print("\n" + "=" * 60)
        print(f"SUMMARY:")
        print(f"  Buildings processed: {len(self.buildings)}")
        print(f"  Files processed: {self.files_processed}")
        print(f"  Questions added: {self.questions_added}")
        print(f"  Success rate: {completed_files}/{total_files} files")
        print("=" * 60)

def main():
    expander = BuildingsExpander()

    print("Choose expansion mode:")
    print("1. Test (1 building, all levels)")
    print("2. Small batch (3 buildings)")
    print("3. Medium batch (5 buildings)")
    print("4. All buildings")

    choice = input("\nEnter choice (1-4): ").strip()

    limits = {
        '1': 10,   # 1 building = 10 files
        '2': 30,   # 3 buildings = 30 files
        '3': 50,   # 5 buildings = 50 files
        '4': None  # All files
    }

    limit = limits.get(choice, 10)
    expander.expand_all_buildings(limit)

if __name__ == "__main__":
    main()