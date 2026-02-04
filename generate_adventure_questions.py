#!/usr/bin/env python3
"""
Script to generate the remaining Adventure Books questions (47-100)
"""

questions = [
    # Question 47
    {
        "question": {
            "en": "What is the main character's name in 'The Adventures of Tom Sawyer'?",
            "es": "¿Cómo se llama el personaje principal en 'Las Aventuras de Tom Sawyer'?",
            "de": "Wie heißt die Hauptfigur in 'Die Abenteuer von Tom Sawyer'?",
            "nl": "Hoe heet het hoofdpersonage in 'De Avonturen van Tom Sawyer'?"
        },
        "options": [
            {"en": "Tom Sawyer", "es": "Tom Sawyer", "de": "Tom Sawyer", "nl": "Tom Sawyer"},
            {"en": "Huckleberry Finn", "es": "Huckleberry Finn", "de": "Huckleberry Finn", "nl": "Huckleberry Finn"},
            {"en": "Jim Hawkins", "es": "Jim Hawkins", "de": "Jim Hawkins", "nl": "Jim Hawkins"},
            {"en": "Oliver Twist", "es": "Oliver Twist", "de": "Oliver Twist", "nl": "Oliver Twist"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Tom Sawyer is the mischievous young boy in Mark Twain's classic adventure novel.",
            "es": "Tom Sawyer es el joven travieso en la novela de aventuras clásica de Mark Twain.",
            "de": "Tom Sawyer ist der schelmische junge Junge in Mark Twains klassischem Abenteuerroman.",
            "nl": "Tom Sawyer is de ondeugende jongen in Mark Twain's klassieke avonturenroman."
        }
    },
    # Question 48
    {
        "question": {
            "en": "In which book does the character travel in a hot air balloon?",
            "es": "¿En qué libro el personaje viaja en un globo aerostático?",
            "de": "In welchem Buch reist der Charakter in einem Heißluftballon?",
            "nl": "In welk boek reist het personage in een luchtballon?"
        },
        "options": [
            {"en": "Around the World in Eighty Days", "es": "La vuelta al mundo en ochenta días", "de": "In 80 Tagen um die Welt", "nl": "De reis om de wereld in tachtig dagen"},
            {"en": "Treasure Island", "es": "La Isla del Tesoro", "de": "Die Schatzinsel", "nl": "Schateiland"},
            {"en": "Robinson Crusoe", "es": "Robinson Crusoe", "de": "Robinson Crusoe", "nl": "Robinson Crusoe"},
            {"en": "Moby Dick", "es": "Moby Dick", "de": "Moby Dick", "nl": "Moby Dick"}
        ],
        "correct": 0,
        "explanation": {
            "en": "In Jules Verne's story, Phileas Fogg uses various transport including a hot air balloon.",
            "es": "En la historia de Jules Verne, Phileas Fogg usa varios transportes incluyendo un globo aerostático.",
            "de": "In Jules Vernes Geschichte nutzt Phileas Fogg verschiedene Transportmittel einschließlich eines Heißluftballons.",
            "nl": "In het verhaal van Jules Verne gebruikt Phileas Fogg verschillende vervoermiddelen waaronder een luchtballon."
        }
    },
]

# Generate JavaScript output
def format_question(q, index):
    return f"""      {{
        question: {{
          en: "{q['question']['en']}",
          es: "{q['question']['es']}",
          de: "{q['question']['de']}",
          nl: "{q['question']['nl']}"
        }},
        options: [
          {{ en: "{q['options'][0]['en']}", es: "{q['options'][0]['es']}", de: "{q['options'][0]['de']}", nl: "{q['options'][0]['nl']}" }},
          {{ en: "{q['options'][1]['en']}", es: "{q['options'][1]['es']}", de: "{q['options'][1]['de']}", nl: "{q['options'][1]['nl']}" }},
          {{ en: "{q['options'][2]['en']}", es: "{q['options'][2]['es']}", de: "{q['options'][2]['de']}", nl: "{q['options'][2]['nl']}" }},
          {{ en: "{q['options'][3]['en']}", es: "{q['options'][3]['es']}", de: "{q['options'][3]['de']}", nl: "{q['options'][3]['nl']}" }}
        ],
        correct: {q['correct']},
        explanation: {{
          en: "{q['explanation']['en']}",
          es: "{q['explanation']['es']}",
          de: "{q['explanation']['de']}",
          nl: "{q['explanation']['nl']}"
        }}
      }}"""

for i, q in enumerate(questions, 47):
    print(format_question(q, i))
    if i < 100:
        print(",")
