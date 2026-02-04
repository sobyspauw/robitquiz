#!/usr/bin/env python3
"""
Automated question expander using OpenAI/Claude API or local generation.
Expands quiz files from 40 to 100 questions with proper formatting.
"""

import os
import re
import json
from pathlib import Path
from typing import Dict, List

class QuestionGenerator:
    def __init__(self):
        self.templates = self.load_templates()

    def load_templates(self):
        """Load question templates based on category and level."""
        return {
            "Actors and Actresses": {
                "level3": {
                    "topics": [
                        "Tom Hanks films", "Julia Roberts movies", "Brad Pitt roles",
                        "Meryl Streep performances", "Leonardo DiCaprio movies",
                        "Oscar winners", "Box office hits", "Famous movie quotes"
                    ],
                    "sample_questions": [
                        "Which movie earned Tom Hanks his first Oscar?",
                        "In which film did Julia Roberts play Erin Brockovich?",
                        "Who directed Brad Pitt in 'Fight Club'?",
                        "How many Oscar nominations does Meryl Streep have?",
                        "Which Leonardo DiCaprio film won Best Picture?"
                    ]
                },
                "level10": {
                    "topics": [
                        "Silent film stars", "Method acting pioneers", "Stanislavski technique",
                        "Early Hollywood scandals", "Lost films", "Uncredited performances",
                        "Acting school founders", "Theater to film transitions"
                    ],
                    "sample_questions": [
                        "Who developed the Meisner acting technique?",
                        "Which actor was blacklisted during the McCarthy era?",
                        "What was Greta Garbo's last film before retirement?",
                        "Who founded the Actors Studio in 1947?",
                        "Which silent film star's career ended with talkies?"
                    ]
                }
            }
        }

    def generate_question_batch(self, category: str, level: int, count: int) -> List[Dict]:
        """Generate a batch of questions for a specific category and level."""
        questions = []

        # Base structure for each question
        for i in range(count):
            question = {
                "question": {
                    "en": f"Question {i+41} for {category} level {level}",
                    "es": f"Pregunta {i+41} para {category} nivel {level}",
                    "de": f"Frage {i+41} für {category} Stufe {level}",
                    "nl": f"Vraag {i+41} voor {category} level {level}"
                },
                "options": [
                    {"en": f"Option A", "es": f"Opción A", "de": f"Option A", "nl": f"Optie A"},
                    {"en": f"Option B", "es": f"Opción B", "de": f"Option B", "nl": f"Optie B"},
                    {"en": f"Option C", "es": f"Opción C", "de": f"Option C", "nl": f"Optie C"},
                    {"en": f"Option D", "es": f"Opción D", "de": f"Option D", "nl": f"Optie D"}
                ],
                "correct": i % 4,  # Vary the correct answer
                "explanation": {
                    "en": f"Explanation for question {i+41} about {category}.",
                    "es": f"Explicación para la pregunta {i+41} sobre {category}.",
                    "de": f"Erklärung für Frage {i+41} über {category}.",
                    "nl": f"Uitleg voor vraag {i+41} over {category}."
                }
            }
            questions.append(question)

        return questions

    def format_questions_js(self, questions: List[Dict]) -> str:
        """Format questions as JavaScript array elements."""
        output = []
        for q in questions:
            output.append("      {")
            output.append("        question: {")
            for lang in ['en', 'es', 'de', 'nl']:
                output.append(f'          {lang}: "{q["question"][lang]}",')
            output[-1] = output[-1][:-1]  # Remove last comma
            output.append("        },")

            output.append("        options: [")
            for opt in q["options"]:
                output.append("          {")
                for lang in ['en', 'es', 'de', 'nl']:
                    output.append(f'            {lang}: "{opt[lang]}",')
                output[-1] = output[-1][:-1]
                output.append("          },")
            output[-1] = output[-1][:-1]
            output.append("        ],")

            output.append(f'        correct: {q["correct"]},')

            output.append("        explanation: {")
            for lang in ['en', 'es', 'de', 'nl']:
                output.append(f'          {lang}: "{q["explanation"][lang]}",')
            output[-1] = output[-1][:-1]
            output.append("        }")
            output.append("      },")

        return "\n".join(output)

def expand_file(file_path: str, generator: QuestionGenerator):
    """Expand a single file from 40 to 100 questions."""
    print(f"Processing: {file_path}")

    # Read current file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Count existing questions
    current_count = len(re.findall(r'question:\s*{', content))
    if current_count >= 100:
        print(f"  Already has {current_count} questions, skipping")
        return

    needed = 100 - current_count
    print(f"  Current: {current_count}, Need: {needed} more")

    # Extract category and level from path
    parts = Path(file_path).parts
    category = parts[-2]
    level = int(re.search(r'level(\d+)', parts[-1]).group(1))

    # Generate new questions
    new_questions = generator.generate_question_batch(category, level, needed)

    # Format as JavaScript
    js_questions = generator.format_questions_js(new_questions)

    # Find insertion point (before the closing bracket of questions array)
    pattern = r'(\s*)\]\s*};\s*if \(typeof module'
    match = re.search(pattern, content)

    if match:
        # Insert new questions
        insertion_point = match.start()
        new_content = (
            content[:insertion_point] +
            ",\n" + js_questions + "\n" +
            content[insertion_point:]
        )

        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"  ✓ Added {needed} questions")
    else:
        print(f"  ✗ Could not find insertion point")

def main():
    generator = QuestionGenerator()

    # Priority files to expand
    priority_paths = [
        "src/questions/data/subjects/famous-people/Actors and Actresses/level3.js",
        "src/questions/data/subjects/famous-people/Actors and Actresses/level4.js",
        "src/questions/data/subjects/famous-people/Social Media Influencers/level1.js",
        "src/questions/data/subjects/famous-people/Sports Icons/level1.js",
    ]

    print("Starting automated expansion...")
    print("=" * 60)

    for path in priority_paths:
        if os.path.exists(path):
            expand_file(path, generator)
        else:
            print(f"File not found: {path}")

    print("=" * 60)
    print("Note: This creates placeholder questions.")
    print("You'll need to replace them with real content using AI assistance.")

if __name__ == "__main__":
    main()