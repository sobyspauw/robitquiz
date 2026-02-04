#!/usr/bin/env python3
"""
Replace template questions with real book questions.
"""

import json
from pathlib import Path

def generate_adventure_book_questions():
    """Generate real adventure book questions for levels 1-10."""

    # Real adventure book questions for different difficulty levels
    questions_by_level = {
        1: [  # Beginner - Basic facts about famous adventure books
            {
                "num": 48,
                "en": "In which book does Jim Hawkins search for pirate treasure?",
                "es": "¿En qué libro Jim Hawkins busca un tesoro pirata?",
                "de": "In welchem Buch sucht Jim Hawkins nach Piratenschatz?",
                "nl": "In welk boek zoekt Jim Hawkins naar piratenschat?",
                "options": [
                    ["Treasure Island", "La isla del tesoro", "Die Schatzinsel", "Schateiland"],
                    ["Peter Pan", "Peter Pan", "Peter Pan", "Peter Pan"],
                    ["Robinson Crusoe", "Robinson Crusoe", "Robinson Crusoe", "Robinson Crusoe"],
                    ["The Sea Wolf", "El lobo de mar", "Der Seewolf", "De zeewolf"]
                ],
                "correct": 0,
                "explanation": {
                    "en": "Jim Hawkins is the young protagonist of Robert Louis Stevenson's 'Treasure Island'.",
                    "es": "Jim Hawkins es el joven protagonista de 'La isla del tesoro' de Robert Louis Stevenson.",
                    "de": "Jim Hawkins ist der junge Protagonist von Robert Louis Stevensons 'Die Schatzinsel'.",
                    "nl": "Jim Hawkins is de jonge hoofdpersoon van Robert Louis Stevenson's 'Schateiland'."
                }
            },
            {
                "num": 49,
                "en": "Who wrote 'The Adventures of Huckleberry Finn'?",
                "es": "¿Quién escribió 'Las aventuras de Huckleberry Finn'?",
                "de": "Wer schrieb 'Die Abenteuer des Huckleberry Finn'?",
                "nl": "Wie schreef 'De avonturen van Huckleberry Finn'?",
                "options": [
                    ["Mark Twain", "Mark Twain", "Mark Twain", "Mark Twain"],
                    ["Charles Dickens", "Charles Dickens", "Charles Dickens", "Charles Dickens"],
                    ["Jules Verne", "Jules Verne", "Jules Verne", "Jules Verne"],
                    ["Daniel Defoe", "Daniel Defoe", "Daniel Defoe", "Daniel Defoe"]
                ],
                "correct": 0,
                "explanation": {
                    "en": "Mark Twain (Samuel Clemens) wrote this classic American adventure novel in 1884.",
                    "es": "Mark Twain (Samuel Clemens) escribió esta clásica novela de aventuras americana en 1884.",
                    "de": "Mark Twain (Samuel Clemens) schrieb diesen klassischen amerikanischen Abenteuerroman 1884.",
                    "nl": "Mark Twain (Samuel Clemens) schreef deze klassieke Amerikaanse avonturenroman in 1884."
                }
            },
            {
                "num": 50,
                "en": "What is the name of the submarine in '20,000 Leagues Under the Sea'?",
                "es": "¿Cómo se llama el submarino en '20.000 leguas de viaje submarino'?",
                "de": "Wie heißt das U-Boot in '20.000 Meilen unter dem Meer'?",
                "nl": "Hoe heet de onderzeeër in '20.000 mijlen onder zee'?",
                "options": [
                    ["Nautilus", "Nautilus", "Nautilus", "Nautilus"],
                    ["Neptune", "Neptuno", "Neptun", "Neptunus"],
                    ["Poseidon", "Poseidón", "Poseidon", "Poseidon"],
                    ["Triton", "Tritón", "Triton", "Triton"]
                ],
                "correct": 0,
                "explanation": {
                    "en": "The Nautilus is Captain Nemo's submarine in Jules Verne's classic adventure novel.",
                    "es": "El Nautilus es el submarino del Capitán Nemo en la novela clásica de aventuras de Jules Verne.",
                    "de": "Die Nautilus ist Kapitän Nemos U-Boot in Jules Vernes klassischem Abenteuerroman.",
                    "nl": "De Nautilus is Kapitein Nemo's onderzeeër in Jules Verne's klassieke avonturenroman."
                }
            },
            {
                "num": 51,
                "en": "In 'The Swiss Family Robinson', where is the family shipwrecked?",
                "es": "En 'El Robinson suizo', ¿dónde naufraga la familia?",
                "de": "In 'Der Schweizerische Robinson', wo strandet die Familie?",
                "nl": "In 'De Zwitserse Robinson', waar lijdt het gezin schipbreuk?",
                "options": [
                    ["A tropical island", "Una isla tropical", "Eine tropische Insel", "Een tropisch eiland"],
                    ["Arctic ice", "Hielo ártico", "Arktisches Eis", "Arctisch ijs"],
                    ["African coast", "Costa africana", "Afrikanische Küste", "Afrikaanse kust"],
                    ["Australian shore", "Costa australiana", "Australische Küste", "Australische kust"]
                ],
                "correct": 0,
                "explanation": {
                    "en": "The Robinson family is shipwrecked on an uninhabited tropical island in the East Indies.",
                    "es": "La familia Robinson naufraga en una isla tropical deshabitada en las Indias Orientales.",
                    "de": "Die Familie Robinson strandet auf einer unbewohnten tropischen Insel in Ostindien.",
                    "nl": "De familie Robinson lijdt schipbreuk op een onbewoond tropisch eiland in Oost-Indië."
                }
            },
            {
                "num": 52,
                "en": "Who is d'Artagnan's servant in 'The Three Musketeers'?",
                "es": "¿Quién es el sirviente de d'Artagnan en 'Los tres mosqueteros'?",
                "de": "Wer ist d'Artagnans Diener in 'Die drei Musketiere'?",
                "nl": "Wie is d'Artagnan's dienaar in 'De drie musketiers'?",
                "options": [
                    ["Planchet", "Planchet", "Planchet", "Planchet"],
                    ["Grimaud", "Grimaud", "Grimaud", "Grimaud"],
                    ["Bazin", "Bazin", "Bazin", "Bazin"],
                    ["Mousqueton", "Mosquetón", "Mousqueton", "Mousqueton"]
                ],
                "correct": 0,
                "explanation": {
                    "en": "Planchet is d'Artagnan's loyal and resourceful servant throughout the novel.",
                    "es": "Planchet es el leal e ingenioso sirviente de d'Artagnan a lo largo de la novela.",
                    "de": "Planchet ist d'Artagnans treuer und einfallsreicher Diener im ganzen Roman.",
                    "nl": "Planchet is d'Artagnan's trouwe en vindingrijke dienaar gedurende de roman."
                }
            }
        ]
    }

    return questions_by_level

def create_question_js(q):
    """Format a question for JavaScript file."""
    return f"""      {{
        question: {{
          en: "{q['en']}",
          es: "{q['es']}",
          de: "{q['de']}",
          nl: "{q['nl']}"
        }},
        options: [
          {{ en: "{q['options'][0][0]}", es: "{q['options'][0][1]}", de: "{q['options'][0][2]}", nl: "{q['options'][0][3]}" }},
          {{ en: "{q['options'][1][0]}", es: "{q['options'][1][1]}", de: "{q['options'][1][2]}", nl: "{q['options'][1][3]}" }},
          {{ en: "{q['options'][2][0]}", es: "{q['options'][2][1]}", de: "{q['options'][2][2]}", nl: "{q['options'][2][3]}" }},
          {{ en: "{q['options'][3][0]}", es: "{q['options'][3][1]}", de: "{q['options'][3][2]}", nl: "{q['options'][3][3]}" }}
        ],
        correct: {q['correct']},
        explanation: {{
          en: "{q['explanation']['en']}",
          es: "{q['explanation']['es']}",
          de: "{q['explanation']['de']}",
          nl: "{q['explanation']['nl']}"
        }}
      }}"""

def replace_templates_in_file(filepath, new_questions):
    """Replace template questions with real questions in a file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # For each new question, replace the corresponding template
    for q in new_questions:
        q_num = q['num']

        # Find and replace question {q_num}
        # This is a simplified approach - in reality we'd need more robust pattern matching
        pattern = f"question {q_num}\\?"
        if pattern in content:
            # Find the complete question block and replace it
            # This would need more sophisticated parsing
            pass

    return content

def main():
    """Main function to replace template questions."""
    print("Generating real adventure book questions...")

    questions = generate_adventure_book_questions()

    print(f"Generated {len(questions[1])} real questions for level 1")

    # Show sample questions
    for q in questions[1][:3]:
        print(f"\nQuestion {q['num']}:")
        print(f"  EN: {q['en']}")
        print(f"  Correct: {q['options'][q['correct']][0]}")

if __name__ == "__main__":
    main()