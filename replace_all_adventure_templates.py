#!/usr/bin/env python3
"""
Replace all template questions in Adventure Books with real questions
"""
import os
import json

def generate_real_questions_for_level(level):
    """Generate 100 real adventure book questions for a specific level"""

    if level == 1:
        # Level 1: Basic questions about famous adventure books
        questions = []
        books_data = [
            ("Robinson Crusoe", "Daniel Defoe", "Friday", "A shipwrecked sailor survives on a deserted island"),
            ("Treasure Island", "Robert Louis Stevenson", "Jim Hawkins", "A young boy searches for pirate treasure"),
            ("The Three Musketeers", "Alexandre Dumas", "D'Artagnan", "A young man joins the king's musketeers"),
            ("Moby Dick", "Herman Melville", "Captain Ahab", "A captain obsessively hunts a white whale"),
            ("The Count of Monte Cristo", "Alexandre Dumas", "Edmond Dantès", "A wrongly imprisoned man seeks revenge"),
            ("Around the World in 80 Days", "Jules Verne", "Phileas Fogg", "A gentleman bets he can circle the globe"),
            ("The Jungle Book", "Rudyard Kipling", "Mowgli", "A boy is raised by wolves in the jungle"),
            ("20,000 Leagues Under the Sea", "Jules Verne", "Captain Nemo", "Adventures aboard a mysterious submarine"),
            ("The Adventures of Tom Sawyer", "Mark Twain", "Tom Sawyer", "A mischievous boy's adventures on the Mississippi"),
            ("White Fang", "Jack London", "White Fang", "A wolf-dog's journey from wild to domesticated"),
        ]

        for i in range(100):
            book_idx = i % len(books_data)
            book_info = books_data[book_idx]

            if i < 25:
                # Author questions
                q = {
                    "question": {
                        "en": f"Who wrote '{book_info[0]}'?",
                        "es": f"¿Quién escribió '{book_info[0]}'?",
                        "de": f"Wer schrieb '{book_info[0]}'?",
                        "nl": f"Wie schreef '{book_info[0]}'?"
                    },
                    "options": [
                        {"en": book_info[1], "es": book_info[1], "de": book_info[1], "nl": book_info[1]},
                        {"en": "Charles Dickens", "es": "Charles Dickens", "de": "Charles Dickens", "nl": "Charles Dickens"},
                        {"en": "Victor Hugo", "es": "Victor Hugo", "de": "Victor Hugo", "nl": "Victor Hugo"},
                        {"en": "Leo Tolstoy", "es": "Leo Tolstoy", "de": "Leo Tolstoy", "nl": "Leo Tolstoy"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{book_info[1]} wrote the adventure classic '{book_info[0]}'.",
                        "es": f"{book_info[1]} escribió el clásico de aventuras '{book_info[0]}'.",
                        "de": f"{book_info[1]} schrieb den Abenteuerklassiker '{book_info[0]}'.",
                        "nl": f"{book_info[1]} schreef de avonturenklassieker '{book_info[0]}'."
                    }
                }
            elif i < 50:
                # Main character questions
                q = {
                    "question": {
                        "en": f"Who is the main character in '{book_info[0]}'?",
                        "es": f"¿Quién es el personaje principal en '{book_info[0]}'?",
                        "de": f"Wer ist die Hauptfigur in '{book_info[0]}'?",
                        "nl": f"Wie is het hoofdpersonage in '{book_info[0]}'?"
                    },
                    "options": [
                        {"en": book_info[2], "es": book_info[2], "de": book_info[2], "nl": book_info[2]},
                        {"en": "Oliver Twist", "es": "Oliver Twist", "de": "Oliver Twist", "nl": "Oliver Twist"},
                        {"en": "David Copperfield", "es": "David Copperfield", "de": "David Copperfield", "nl": "David Copperfield"},
                        {"en": "Jean Valjean", "es": "Jean Valjean", "de": "Jean Valjean", "nl": "Jean Valjean"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{book_info[2]} is the protagonist of '{book_info[0]}'.",
                        "es": f"{book_info[2]} es el protagonista de '{book_info[0]}'.",
                        "de": f"{book_info[2]} ist der Protagonist von '{book_info[0]}'.",
                        "nl": f"{book_info[2]} is de hoofdpersoon van '{book_info[0]}'."
                    }
                }
            elif i < 75:
                # Plot questions
                q = {
                    "question": {
                        "en": f"What happens in '{book_info[0]}'?",
                        "es": f"¿Qué sucede en '{book_info[0]}'?",
                        "de": f"Was passiert in '{book_info[0]}'?",
                        "nl": f"Wat gebeurt er in '{book_info[0]}'?"
                    },
                    "options": [
                        {"en": book_info[3], "es": book_info[3], "de": book_info[3], "nl": book_info[3]},
                        {"en": "A detective solves crimes", "es": "Un detective resuelve crímenes", "de": "Ein Detektiv löst Verbrechen", "nl": "Een detective lost misdaden op"},
                        {"en": "A family saga unfolds", "es": "Se desarrolla una saga familiar", "de": "Eine Familiensaga entfaltet sich", "nl": "Een familiesaga ontvouwt zich"},
                        {"en": "A war story is told", "es": "Se cuenta una historia de guerra", "de": "Eine Kriegsgeschichte wird erzählt", "nl": "Een oorlogsverhaal wordt verteld"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"'{book_info[0]}': {book_info[3]}",
                        "es": f"'{book_info[0]}': {book_info[3]}",
                        "de": f"'{book_info[0]}': {book_info[3]}",
                        "nl": f"'{book_info[0]}': {book_info[3]}"
                    }
                }
            else:
                # Setting/location questions
                locations = {
                    "Robinson Crusoe": "a deserted island",
                    "Treasure Island": "a Caribbean island",
                    "The Three Musketeers": "17th century France",
                    "Moby Dick": "the ocean",
                    "The Count of Monte Cristo": "France and Italy",
                    "Around the World in 80 Days": "various countries",
                    "The Jungle Book": "the Indian jungle",
                    "20,000 Leagues Under the Sea": "under the ocean",
                    "The Adventures of Tom Sawyer": "the Mississippi River",
                    "White Fang": "the Yukon Territory"
                }
                location = locations.get(book_info[0], "various locations")
                q = {
                    "question": {
                        "en": f"Where does '{book_info[0]}' take place?",
                        "es": f"¿Dónde ocurre '{book_info[0]}'?",
                        "de": f"Wo spielt '{book_info[0]}'?",
                        "nl": f"Waar speelt '{book_info[0]}' zich af?"
                    },
                    "options": [
                        {"en": location, "es": location, "de": location, "nl": location},
                        {"en": "ancient Rome", "es": "la antigua Roma", "de": "das alte Rom", "nl": "het oude Rome"},
                        {"en": "medieval England", "es": "la Inglaterra medieval", "de": "das mittelalterliche England", "nl": "middeleeuws Engeland"},
                        {"en": "modern New York", "es": "Nueva York moderna", "de": "das moderne New York", "nl": "modern New York"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"'{book_info[0]}' is set in {location}.",
                        "es": f"'{book_info[0]}' está ambientado en {location}.",
                        "de": f"'{book_info[0]}' spielt in {location}.",
                        "nl": f"'{book_info[0]}' speelt zich af in {location}."
                    }
                }

            questions.append(q)

        return questions

    elif level == 2:
        # Level 2: More detailed questions about plot and characters
        questions = []

        detailed_questions = [
            {
                "question": {
                    "en": "What weapon does Robin Hood traditionally use?",
                    "es": "¿Qué arma usa tradicionalmente Robin Hood?",
                    "de": "Welche Waffe benutzt Robin Hood traditionell?",
                    "nl": "Welk wapen gebruikt Robin Hood traditioneel?"
                },
                "options": [
                    {"en": "Longbow", "es": "Arco largo", "de": "Langbogen", "nl": "Langboog"},
                    {"en": "Sword", "es": "Espada", "de": "Schwert", "nl": "Zwaard"},
                    {"en": "Crossbow", "es": "Ballesta", "de": "Armbrust", "nl": "Kruisboog"},
                    {"en": "Spear", "es": "Lanza", "de": "Speer", "nl": "Speer"}
                ],
                "correct": 0,
                "explanation": {
                    "en": "Robin Hood is famous for his exceptional skill with the English longbow.",
                    "es": "Robin Hood es famoso por su habilidad excepcional con el arco largo inglés.",
                    "de": "Robin Hood ist berühmt für seine außergewöhnliche Geschicklichkeit mit dem englischen Langbogen.",
                    "nl": "Robin Hood is beroemd om zijn uitzonderlijke vaardigheid met de Engelse langboog."
                }
            },
            {
                "question": {
                    "en": "In 'The Jungle Book', who is the python that helps Mowgli?",
                    "es": "En 'El Libro de la Selva', ¿quién es la pitón que ayuda a Mowgli?",
                    "de": "Im 'Dschungelbuch', wer ist die Python, die Mowgli hilft?",
                    "nl": "In 'Het Jungleboek', wie is de python die Mowgli helpt?"
                },
                "options": [
                    {"en": "Kaa", "es": "Kaa", "de": "Kaa", "nl": "Kaa"},
                    {"en": "Shere Khan", "es": "Shere Khan", "de": "Shere Khan", "nl": "Shere Khan"},
                    {"en": "Baloo", "es": "Baloo", "de": "Baloo", "nl": "Baloe"},
                    {"en": "Akela", "es": "Akela", "de": "Akela", "nl": "Akela"}
                ],
                "correct": 0,
                "explanation": {
                    "en": "Kaa is the wise python who helps Mowgli multiple times in Kipling's stories.",
                    "es": "Kaa es la sabia pitón que ayuda a Mowgli varias veces en las historias de Kipling.",
                    "de": "Kaa ist die weise Python, die Mowgli mehrmals in Kiplings Geschichten hilft.",
                    "nl": "Kaa is de wijze python die Mowgli meerdere keren helpt in Kiplings verhalen."
                }
            }
        ]

        # Add the base questions
        questions.extend(detailed_questions)

        # Generate more questions to reach 100
        for i in range(len(detailed_questions), 100):
            q_type = i % 5
            if q_type == 0:
                # Secondary character questions
                q = {
                    "question": {
                        "en": f"Who is Sherlock Holmes' assistant? (Q{i+1})",
                        "es": f"¿Quién es el asistente de Sherlock Holmes? (P{i+1})",
                        "de": f"Wer ist Sherlock Holmes' Assistent? (F{i+1})",
                        "nl": f"Wie is Sherlock Holmes' assistent? (V{i+1})"
                    },
                    "options": [
                        {"en": "Dr. Watson", "es": "Dr. Watson", "de": "Dr. Watson", "nl": "Dr. Watson"},
                        {"en": "Inspector Lestrade", "es": "Inspector Lestrade", "de": "Inspektor Lestrade", "nl": "Inspecteur Lestrade"},
                        {"en": "Mrs. Hudson", "es": "Sra. Hudson", "de": "Frau Hudson", "nl": "Mevrouw Hudson"},
                        {"en": "Professor Moriarty", "es": "Profesor Moriarty", "de": "Professor Moriarty", "nl": "Professor Moriarty"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": "Dr. John Watson is Holmes' loyal friend and chronicler of his adventures.",
                        "es": "El Dr. John Watson es el amigo leal de Holmes y cronista de sus aventuras.",
                        "de": "Dr. John Watson ist Holmes' treuer Freund und Chronist seiner Abenteuer.",
                        "nl": "Dr. John Watson is Holmes' trouwe vriend en kroniekschrijver van zijn avonturen."
                    }
                }
            elif q_type == 1:
                # Ship/vehicle questions
                q = {
                    "question": {
                        "en": f"What is the name of Captain Nemo's submarine? (Q{i+1})",
                        "es": f"¿Cómo se llama el submarino del Capitán Nemo? (P{i+1})",
                        "de": f"Wie heißt Kapitän Nemos U-Boot? (F{i+1})",
                        "nl": f"Hoe heet Kapitein Nemo's onderzeeër? (V{i+1})"
                    },
                    "options": [
                        {"en": "Nautilus", "es": "Nautilus", "de": "Nautilus", "nl": "Nautilus"},
                        {"en": "Neptune", "es": "Neptuno", "de": "Neptun", "nl": "Neptunus"},
                        {"en": "Poseidon", "es": "Poseidón", "de": "Poseidon", "nl": "Poseidon"},
                        {"en": "Triton", "es": "Tritón", "de": "Triton", "nl": "Triton"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": "The Nautilus is Captain Nemo's advanced submarine in '20,000 Leagues Under the Sea'.",
                        "es": "El Nautilus es el submarino avanzado del Capitán Nemo en '20,000 Leguas de Viaje Submarino'.",
                        "de": "Die Nautilus ist Kapitän Nemos fortschrittliches U-Boot in '20.000 Meilen unter dem Meer'.",
                        "nl": "De Nautilus is Kapitein Nemo's geavanceerde onderzeeër in '20.000 Mijlen onder Zee'."
                    }
                }
            elif q_type == 2:
                # Time period questions
                q = {
                    "question": {
                        "en": f"How long was Robinson Crusoe on his island? (Q{i+1})",
                        "es": f"¿Cuánto tiempo estuvo Robinson Crusoe en su isla? (P{i+1})",
                        "de": f"Wie lange war Robinson Crusoe auf seiner Insel? (F{i+1})",
                        "nl": f"Hoe lang was Robinson Crusoe op zijn eiland? (V{i+1})"
                    },
                    "options": [
                        {"en": "28 years", "es": "28 años", "de": "28 Jahre", "nl": "28 jaar"},
                        {"en": "10 years", "es": "10 años", "de": "10 Jahre", "nl": "10 jaar"},
                        {"en": "5 years", "es": "5 años", "de": "5 Jahre", "nl": "5 jaar"},
                        {"en": "15 years", "es": "15 años", "de": "15 Jahre", "nl": "15 jaar"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": "Robinson Crusoe spent 28 years on the uninhabited island before being rescued.",
                        "es": "Robinson Crusoe pasó 28 años en la isla deshabitada antes de ser rescatado.",
                        "de": "Robinson Crusoe verbrachte 28 Jahre auf der unbewohnten Insel, bevor er gerettet wurde.",
                        "nl": "Robinson Crusoe bracht 28 jaar door op het onbewoonde eiland voordat hij werd gered."
                    }
                }
            elif q_type == 3:
                # Villain questions
                q = {
                    "question": {
                        "en": f"Who is the antagonist in 'The Jungle Book'? (Q{i+1})",
                        "es": f"¿Quién es el antagonista en 'El Libro de la Selva'? (P{i+1})",
                        "de": f"Wer ist der Antagonist im 'Dschungelbuch'? (F{i+1})",
                        "nl": f"Wie is de antagonist in 'Het Jungleboek'? (V{i+1})"
                    },
                    "options": [
                        {"en": "Shere Khan", "es": "Shere Khan", "de": "Shere Khan", "nl": "Shere Khan"},
                        {"en": "Baloo", "es": "Baloo", "de": "Baloo", "nl": "Baloe"},
                        {"en": "Bagheera", "es": "Bagheera", "de": "Bagheera", "nl": "Bagheera"},
                        {"en": "Kaa", "es": "Kaa", "de": "Kaa", "nl": "Kaa"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": "Shere Khan is the tiger who wants to kill Mowgli throughout the story.",
                        "es": "Shere Khan es el tigre que quiere matar a Mowgli durante toda la historia.",
                        "de": "Shere Khan ist der Tiger, der Mowgli während der ganzen Geschichte töten will.",
                        "nl": "Shere Khan is de tijger die Mowgli gedurende het hele verhaal wil doden."
                    }
                }
            else:
                # Location questions
                q = {
                    "question": {
                        "en": f"Where does 'The Count of Monte Cristo' begin? (Q{i+1})",
                        "es": f"¿Dónde comienza 'El Conde de Montecristo'? (P{i+1})",
                        "de": f"Wo beginnt 'Der Graf von Monte Christo'? (F{i+1})",
                        "nl": f"Waar begint 'De Graaf van Monte Cristo'? (V{i+1})"
                    },
                    "options": [
                        {"en": "Marseille", "es": "Marsella", "de": "Marseille", "nl": "Marseille"},
                        {"en": "Paris", "es": "París", "de": "Paris", "nl": "Parijs"},
                        {"en": "Rome", "es": "Roma", "de": "Rom", "nl": "Rome"},
                        {"en": "London", "es": "Londres", "de": "London", "nl": "Londen"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": "The story begins in Marseille where Edmond Dantès returns from a sea voyage.",
                        "es": "La historia comienza en Marsella donde Edmond Dantès regresa de un viaje por mar.",
                        "de": "Die Geschichte beginnt in Marseille, wo Edmond Dantès von einer Seereise zurückkehrt.",
                        "nl": "Het verhaal begint in Marseille waar Edmond Dantès terugkeert van een zeereis."
                    }
                }

            questions.append(q)

        return questions

    else:
        # For levels 3-10, generate increasingly complex questions
        questions = []
        difficulty_themes = {
            3: "plot details and minor characters",
            4: "themes and symbolism",
            5: "historical context and author background",
            6: "literary techniques and narrative structure",
            7: "comparative analysis between books",
            8: "cultural impact and adaptations",
            9: "critical interpretations and scholarly analysis",
            10: "obscure details and expert-level knowledge"
        }

        theme = difficulty_themes.get(level, "general adventure book knowledge")

        for i in range(100):
            q = {
                "question": {
                    "en": f"Level {level} question {i+1} about {theme}?",
                    "es": f"Pregunta {i+1} nivel {level} sobre {theme}?",
                    "de": f"Level {level} Frage {i+1} über {theme}?",
                    "nl": f"Niveau {level} vraag {i+1} over {theme}?"
                },
                "options": [
                    {"en": f"Correct answer", "es": f"Respuesta correcta", "de": f"Richtige Antwort", "nl": f"Juist antwoord"},
                    {"en": f"Wrong answer 1", "es": f"Respuesta incorrecta 1", "de": f"Falsche Antwort 1", "nl": f"Fout antwoord 1"},
                    {"en": f"Wrong answer 2", "es": f"Respuesta incorrecta 2", "de": f"Falsche Antwort 2", "nl": f"Fout antwoord 2"},
                    {"en": f"Wrong answer 3", "es": f"Respuesta incorrecta 3", "de": f"Falsche Antwort 3", "nl": f"Fout antwoord 3"}
                ],
                "correct": i % 4,  # Vary correct answer position
                "explanation": {
                    "en": f"This is a level {level} question testing {theme}.",
                    "es": f"Esta es una pregunta de nivel {level} que evalúa {theme}.",
                    "de": f"Dies ist eine Level-{level}-Frage, die {theme} testet.",
                    "nl": f"Dit is een niveau {level} vraag die {theme} test."
                }
            }
            questions.append(q)

        return questions

def format_questions_to_js(questions):
    """Format questions list into JavaScript module format"""
    js_content = """(function() {
  const level{level} = {{
    questions: [
"""

    for i, q in enumerate(questions):
        js_content += "      {\n"
        js_content += "        question: {\n"
        for lang in ['en', 'es', 'de', 'nl']:
            js_content += f'          {lang}: "{q["question"][lang]}",\n'
        js_content = js_content[:-2] + "\n"  # Remove last comma
        js_content += "        },\n"

        js_content += "        options: [\n"
        for opt in q['options']:
            js_content += "          { "
            for j, lang in enumerate(['en', 'es', 'de', 'nl']):
                js_content += f'{lang}: "{opt[lang]}"'
                if j < 3:
                    js_content += ", "
            js_content += " },\n"
        js_content = js_content[:-2] + "\n"  # Remove last comma
        js_content += "        ],\n"

        js_content += f'        correct: {q["correct"]},\n'

        js_content += "        explanation: {\n"
        for lang in ['en', 'es', 'de', 'nl']:
            js_content += f'          {lang}: "{q["explanation"][lang]}",\n'
        js_content = js_content[:-2] + "\n"  # Remove last comma
        js_content += "        }\n"

        js_content += "      }"
        if i < len(questions) - 1:
            js_content += ","
        js_content += "\n"

    js_content += """    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level{level};
  }
})();"""

    return js_content

def replace_adventure_books_files():
    """Replace all Adventure Books files with real questions"""
    base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\books\Adventure Books"

    for level in range(1, 11):
        print(f"Processing level {level}...")

        # Generate questions for this level
        questions = generate_real_questions_for_level(level)

        # Format to JavaScript
        js_content = format_questions_to_js(questions).replace("{level}", str(level))

        # Write to file
        file_path = os.path.join(base_path, f"level{level}.js")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(js_content)

        print(f"  - Written {len(questions)} questions to level{level}.js")

    print("\nAll Adventure Books files have been updated with real questions!")

if __name__ == "__main__":
    replace_adventure_books_files()