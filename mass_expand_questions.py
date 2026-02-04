#!/usr/bin/env python3
"""
Mass expansion script for RobitQuiz questions.
Generates and adds questions efficiently to multiple files.
"""

import os
import re
import json
from pathlib import Path
from datetime import datetime

class MassExpander:
    def __init__(self):
        self.base_path = Path("src/questions/data/subjects")
        self.questions_added = 0
        self.files_processed = 0

    def get_priority_files(self):
        """Get all files that need expansion, sorted by priority."""
        files = []

        # Famous people categories
        famous_people_cats = [
            "Social Media Influencers",
            "Sports Icons",
            "Authors and Writers",
            "Actors and Actresses",
            "Historical Figures",
            "Political Leaders",
            "Scientists",
            "Entrepreneurs",
            "Musicians",
            "Artists"
        ]

        for category in famous_people_cats:
            for level in range(1, 11):
                path = self.base_path / "famous-people" / category / f"level{level}.js"
                if path.exists():
                    count = self.count_questions(str(path))
                    if count < 100:
                        files.append({
                            'path': str(path),
                            'category': category,
                            'level': level,
                            'current': count,
                            'needed': 100 - count
                        })

        # Famous buildings
        buildings = [
            "Big Ben", "Burj Khalifa", "Colosseum", "Eiffel Tower",
            "Empire State Building", "Great Wall of China", "Machu Picchu",
            "Petra", "Pyramids of Giza", "Sagrada Familia", "Taj Mahal"
        ]

        for building in buildings:
            for level in range(1, 11):
                path = self.base_path / "famous-buildings" / building / f"level{level}.js"
                if path.exists():
                    count = self.count_questions(str(path))
                    if count < 100:
                        files.append({
                            'path': str(path),
                            'category': f"Buildings-{building}",
                            'level': level,
                            'current': count,
                            'needed': 100 - count
                        })

        return files

    def count_questions(self, filepath):
        """Count existing questions in a file."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                return len(re.findall(r'question:\s*{', content))
        except:
            return 0

    def generate_question_template(self, category, level, index):
        """Generate a question template based on category and level."""

        if category == "Social Media Influencers":
            if level <= 3:
                topics = ["YouTube channels", "TikTok trends", "Instagram features", "Twitch streaming"]
            elif level <= 6:
                topics = ["monetization", "algorithms", "brand deals", "content strategies"]
            else:
                topics = ["platform APIs", "analytics tools", "industry regulations", "market trends"]

        elif category == "Sports Icons":
            if level <= 3:
                topics = ["famous athletes", "major championships", "Olympic records", "World Cup winners"]
            elif level <= 6:
                topics = ["career statistics", "transfer records", "coaching changes", "team rivalries"]
            else:
                topics = ["training methods", "sports science", "contract details", "retirement transitions"]

        elif category == "Authors and Writers":
            if level <= 3:
                topics = ["famous books", "bestselling authors", "Harry Potter", "classic literature"]
            elif level <= 6:
                topics = ["literary awards", "writing styles", "book adaptations", "publishing history"]
            else:
                topics = ["manuscripts", "first editions", "literary criticism", "author correspondence"]

        elif category == "Actors and Actresses":
            if level <= 3:
                topics = ["Hollywood stars", "blockbuster movies", "Oscar winners", "famous roles"]
            elif level <= 6:
                topics = ["indie films", "method acting", "film festivals", "box office records"]
            else:
                topics = ["acting techniques", "theater history", "early cinema", "director collaborations"]

        elif category == "Historical Figures":
            if level <= 3:
                topics = ["famous leaders", "ancient history", "world wars", "revolutions"]
            elif level <= 6:
                topics = ["medieval history", "empires", "explorers", "inventions"]
            else:
                topics = ["archaeological findings", "primary sources", "historical debates", "lesser-known figures"]

        elif category == "Political Leaders":
            if level <= 3:
                topics = ["presidents", "prime ministers", "world leaders", "famous speeches"]
            elif level <= 6:
                topics = ["political movements", "elections", "policies", "international relations"]
            else:
                topics = ["cabinet members", "political theory", "diplomatic history", "succession crises"]

        elif category == "Scientists":
            if level <= 3:
                topics = ["Einstein", "Newton", "Darwin", "famous discoveries"]
            elif level <= 6:
                topics = ["Nobel prizes", "scientific theories", "experiments", "research methods"]
            else:
                topics = ["peer review", "scientific controversies", "research funding", "collaboration networks"]

        elif category == "Entrepreneurs":
            if level <= 3:
                topics = ["tech founders", "famous companies", "startups", "business success"]
            elif level <= 6:
                topics = ["IPOs", "mergers", "business models", "venture capital"]
            else:
                topics = ["bankruptcy cases", "corporate governance", "antitrust", "market disruption"]

        elif category == "Musicians":
            if level <= 3:
                topics = ["pop stars", "rock bands", "hit songs", "music awards"]
            elif level <= 6:
                topics = ["music genres", "album sales", "concert tours", "collaborations"]
            else:
                topics = ["music theory", "studio techniques", "record labels", "music rights"]

        elif category == "Artists":
            if level <= 3:
                topics = ["famous painters", "masterpieces", "art museums", "art movements"]
            elif level <= 6:
                topics = ["art techniques", "exhibitions", "art critics", "commissions"]
            else:
                topics = ["restoration", "provenance", "forgeries", "auction records"]

        elif "Buildings-" in category:
            building = category.replace("Buildings-", "")
            if level <= 3:
                topics = [f"{building} history", f"{building} architecture", f"{building} visitors", f"{building} facts"]
            elif level <= 6:
                topics = [f"{building} construction", f"{building} renovations", f"{building} significance", f"{building} culture"]
            else:
                topics = [f"{building} engineering", f"{building} archaeology", f"{building} preservation", f"{building} mysteries"]

        else:
            topics = ["general knowledge"]

        topic = topics[index % len(topics)]

        return {
            "question": {
                "en": f"Question about {topic} for {category} level {level}",
                "es": f"Pregunta sobre {topic} para {category} nivel {level}",
                "de": f"Frage über {topic} für {category} Stufe {level}",
                "nl": f"Vraag over {topic} voor {category} level {level}"
            },
            "options": [
                {"en": "Correct answer", "es": "Respuesta correcta", "de": "Richtige Antwort", "nl": "Correct antwoord"},
                {"en": "Wrong answer 1", "es": "Respuesta incorrecta 1", "de": "Falsche Antwort 1", "nl": "Fout antwoord 1"},
                {"en": "Wrong answer 2", "es": "Respuesta incorrecta 2", "de": "Falsche Antwort 2", "nl": "Fout antwoord 2"},
                {"en": "Wrong answer 3", "es": "Respuesta incorrecta 3", "de": "Falsche Antwort 3", "nl": "Fout antwoord 3"}
            ],
            "correct": index % 4,
            "explanation": {
                "en": f"This is the correct answer for {category} level {level}.",
                "es": f"Esta es la respuesta correcta para {category} nivel {level}.",
                "de": f"Dies ist die richtige Antwort für {category} Stufe {level}.",
                "nl": f"Dit is het juiste antwoord voor {category} level {level}."
            }
        }

    def format_questions_for_js(self, questions):
        """Format questions as JavaScript code."""
        js_code = []
        for q in questions:
            js_code.append("      {")
            js_code.append("        question: {")
            for lang in ['en', 'es', 'de', 'nl']:
                js_code.append(f'          {lang}: "{q["question"][lang]}",')
            js_code[-1] = js_code[-1][:-1]  # Remove last comma
            js_code.append("        },")

            js_code.append("        options: [")
            for opt in q["options"]:
                js_code.append("          {")
                for lang in ['en', 'es', 'de', 'nl']:
                    js_code.append(f'            {lang}: "{opt[lang]}",')
                js_code[-1] = js_code[-1][:-1]
                js_code.append("          },")
            js_code[-1] = js_code[-1][:-1]
            js_code.append("        ],")

            js_code.append(f'        correct: {q["correct"]},')

            js_code.append("        explanation: {")
            for lang in ['en', 'es', 'de', 'nl']:
                js_code.append(f'          {lang}: "{q["explanation"][lang]}",')
            js_code[-1] = js_code[-1][:-1]
            js_code.append("        }")
            js_code.append("      },")

        return "\n".join(js_code)

    def expand_file(self, file_info):
        """Expand a single file with new questions."""
        print(f"\nProcessing: {file_info['category']} level {file_info['level']}")
        print(f"  Current: {file_info['current']} questions")
        print(f"  Adding: {file_info['needed']} questions")

        # Generate new questions
        new_questions = []
        for i in range(file_info['needed']):
            question = self.generate_question_template(
                file_info['category'],
                file_info['level'],
                i
            )
            new_questions.append(question)

        # Format as JavaScript
        js_code = self.format_questions_for_js(new_questions)

        # Read existing file
        with open(file_info['path'], 'r', encoding='utf-8') as f:
            content = f.read()

        # Find insertion point (before the closing bracket)
        pattern = r'(\s*)\]\s*};\s*if \(typeof module'
        match = re.search(pattern, content)

        if match:
            # Insert new questions
            insertion_point = match.start()
            new_content = (
                content[:insertion_point] +
                ",\n" + js_code + "\n" +
                content[insertion_point:]
            )

            # Write back
            with open(file_info['path'], 'w', encoding='utf-8') as f:
                f.write(new_content)

            self.questions_added += file_info['needed']
            self.files_processed += 1
            print(f"  [OK] Successfully added {file_info['needed']} questions")
            return True
        else:
            print(f"  [ERROR] Could not find insertion point")
            return False

    def run(self, limit=50):
        """Run the expansion on priority files."""
        print("=" * 60)
        print("MASS QUESTION EXPANSION")
        print("=" * 60)
        print(f"Starting at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

        files = self.get_priority_files()
        print(f"Found {len(files)} files that need expansion")

        # Process limited number of files
        for i, file_info in enumerate(files[:limit], 1):
            self.expand_file(file_info)

        print("\n" + "=" * 60)
        print(f"SUMMARY:")
        print(f"  Files processed: {self.files_processed}")
        print(f"  Questions added: {self.questions_added}")
        print("=" * 60)
        print("\nNOTE: These are template questions!")
        print("You need to replace them with real content using AI assistance.")

def main():
    expander = MassExpander()

    print("This will add TEMPLATE questions to files.")
    print("Choose how many files to process:")
    print("1. Test mode (1 file)")
    print("2. Small batch (5 files)")
    print("3. Medium batch (10 files)")
    print("4. Large batch (20 files)")

    choice = input("\nEnter choice (1-4): ").strip()

    limits = {'1': 1, '2': 5, '3': 10, '4': 20}
    limit = limits.get(choice, 5)

    expander.run(limit)

if __name__ == "__main__":
    main()