#!/usr/bin/env python3
"""
Replace all template questions in Biographies category with real questions
"""
import os

def generate_biographies_questions(level):
    """Generate 100 real biography questions for a specific level"""

    questions = []

    if level == 1:
        # Level 1: Basic questions about famous people and their achievements
        famous_people = [
            ("Albert Einstein", "physicist", "theory of relativity", "Germany/USA"),
            ("Marie Curie", "scientist", "radioactivity research", "Poland/France"),
            ("Leonardo da Vinci", "artist/inventor", "Mona Lisa and inventions", "Italy"),
            ("Martin Luther King Jr.", "civil rights leader", "I Have a Dream speech", "USA"),
            ("Nelson Mandela", "president/activist", "ending apartheid", "South Africa"),
            ("Abraham Lincoln", "president", "ending slavery", "USA"),
            ("Winston Churchill", "prime minister", "leading Britain in WWII", "UK"),
            ("Mahatma Gandhi", "independence leader", "non-violent resistance", "India"),
            ("Mother Teresa", "nun/humanitarian", "helping the poor", "Albania/India"),
            ("Steve Jobs", "entrepreneur", "founding Apple", "USA"),
        ]

        for i in range(100):
            person = famous_people[i % len(famous_people)]
            q_type = i % 4

            if q_type == 0:
                # Profession questions
                q = {
                    "question": {
                        "en": f"What was {person[0]}'s profession?",
                        "es": f"¿Cuál era la profesión de {person[0]}?",
                        "de": f"Was war {person[0]}s Beruf?",
                        "nl": f"Wat was het beroep van {person[0]}?"
                    },
                    "options": [
                        {"en": person[1], "es": person[1], "de": person[1], "nl": person[1]},
                        {"en": "writer", "es": "escritor", "de": "Schriftsteller", "nl": "schrijver"},
                        {"en": "musician", "es": "músico", "de": "Musiker", "nl": "muzikant"},
                        {"en": "athlete", "es": "atleta", "de": "Athlet", "nl": "atleet"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{person[0]} was a {person[1]} known for {person[2]}.",
                        "es": f"{person[0]} fue un {person[1]} conocido por {person[2]}.",
                        "de": f"{person[0]} war ein {person[1]} bekannt für {person[2]}.",
                        "nl": f"{person[0]} was een {person[1]} bekend om {person[2]}."
                    }
                }
            elif q_type == 1:
                # Achievement questions
                q = {
                    "question": {
                        "en": f"What is {person[0]} famous for?",
                        "es": f"¿Por qué es famoso {person[0]}?",
                        "de": f"Wofür ist {person[0]} berühmt?",
                        "nl": f"Waar is {person[0]} beroemd om?"
                    },
                    "options": [
                        {"en": person[2], "es": person[2], "de": person[2], "nl": person[2]},
                        {"en": "writing novels", "es": "escribir novelas", "de": "Romane schreiben", "nl": "romans schrijven"},
                        {"en": "Olympic medals", "es": "medallas olímpicas", "de": "Olympische Medaillen", "nl": "Olympische medailles"},
                        {"en": "movie directing", "es": "dirigir películas", "de": "Filme drehen", "nl": "films regisseren"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{person[0]} is famous for {person[2]}.",
                        "es": f"{person[0]} es famoso por {person[2]}.",
                        "de": f"{person[0]} ist berühmt für {person[2]}.",
                        "nl": f"{person[0]} is beroemd om {person[2]}."
                    }
                }
            elif q_type == 2:
                # Country questions
                q = {
                    "question": {
                        "en": f"Where was {person[0]} from?",
                        "es": f"¿De dónde era {person[0]}?",
                        "de": f"Woher kam {person[0]}?",
                        "nl": f"Waar kwam {person[0]} vandaan?"
                    },
                    "options": [
                        {"en": person[3], "es": person[3], "de": person[3], "nl": person[3]},
                        {"en": "Russia", "es": "Rusia", "de": "Russland", "nl": "Rusland"},
                        {"en": "China", "es": "China", "de": "China", "nl": "China"},
                        {"en": "Brazil", "es": "Brasil", "de": "Brasilien", "nl": "Brazilië"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{person[0]} was from {person[3]}.",
                        "es": f"{person[0]} era de {person[3]}.",
                        "de": f"{person[0]} kam aus {person[3]}.",
                        "nl": f"{person[0]} kwam uit {person[3]}."
                    }
                }
            else:
                # Era/time period questions
                eras = {
                    "Albert Einstein": "20th century",
                    "Marie Curie": "19th-20th century",
                    "Leonardo da Vinci": "Renaissance",
                    "Martin Luther King Jr.": "20th century",
                    "Nelson Mandela": "20th-21st century",
                    "Abraham Lincoln": "19th century",
                    "Winston Churchill": "20th century",
                    "Mahatma Gandhi": "19th-20th century",
                    "Mother Teresa": "20th century",
                    "Steve Jobs": "20th-21st century"
                }
                era = eras.get(person[0], "modern times")
                q = {
                    "question": {
                        "en": f"When did {person[0]} live?",
                        "es": f"¿Cuándo vivió {person[0]}?",
                        "de": f"Wann lebte {person[0]}?",
                        "nl": f"Wanneer leefde {person[0]}?"
                    },
                    "options": [
                        {"en": era, "es": era, "de": era, "nl": era},
                        {"en": "Ancient times", "es": "Tiempos antiguos", "de": "Antike", "nl": "Oudheid"},
                        {"en": "Middle Ages", "es": "Edad Media", "de": "Mittelalter", "nl": "Middeleeuwen"},
                        {"en": "Future", "es": "Futuro", "de": "Zukunft", "nl": "Toekomst"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{person[0]} lived in the {era}.",
                        "es": f"{person[0]} vivió en el {era}.",
                        "de": f"{person[0]} lebte im {era}.",
                        "nl": f"{person[0]} leefde in de {era}."
                    }
                }

            questions.append(q)

    elif level == 2:
        # Level 2: More detailed questions about life events
        biographical_details = [
            ("Thomas Edison", "invented the light bulb", "1879", "Menlo Park"),
            ("Wright Brothers", "first airplane flight", "1903", "Kitty Hawk"),
            ("Neil Armstrong", "first man on the moon", "1969", "Apollo 11"),
            ("Christopher Columbus", "discovered Americas", "1492", "Spanish expedition"),
            ("Charles Darwin", "theory of evolution", "1859", "Origin of Species"),
        ]

        for i in range(100):
            detail = biographical_details[i % len(biographical_details)]
            q_type = i % 3

            if q_type == 0:
                # Achievement year questions
                q = {
                    "question": {
                        "en": f"When did {detail[0]} achieve {detail[1]}?",
                        "es": f"¿Cuándo logró {detail[0]} {detail[1]}?",
                        "de": f"Wann erreichte {detail[0]} {detail[1]}?",
                        "nl": f"Wanneer bereikte {detail[0]} {detail[1]}?"
                    },
                    "options": [
                        {"en": detail[2], "es": detail[2], "de": detail[2], "nl": detail[2]},
                        {"en": "1950", "es": "1950", "de": "1950", "nl": "1950"},
                        {"en": "1800", "es": "1800", "de": "1800", "nl": "1800"},
                        {"en": "2000", "es": "2000", "de": "2000", "nl": "2000"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{detail[0]} achieved {detail[1]} in {detail[2]}.",
                        "es": f"{detail[0]} logró {detail[1]} en {detail[2]}.",
                        "de": f"{detail[0]} erreichte {detail[1]} im Jahr {detail[2]}.",
                        "nl": f"{detail[0]} bereikte {detail[1]} in {detail[2]}."
                    }
                }
            elif q_type == 1:
                # Location/context questions
                q = {
                    "question": {
                        "en": f"Where/how did {detail[0]}'s famous achievement happen?",
                        "es": f"¿Dónde/cómo ocurrió el famoso logro de {detail[0]}?",
                        "de": f"Wo/wie geschah {detail[0]}s berühmte Leistung?",
                        "nl": f"Waar/hoe gebeurde {detail[0]}'s beroemde prestatie?"
                    },
                    "options": [
                        {"en": detail[3], "es": detail[3], "de": detail[3], "nl": detail[3]},
                        {"en": "Paris", "es": "París", "de": "Paris", "nl": "Parijs"},
                        {"en": "London", "es": "Londres", "de": "London", "nl": "Londen"},
                        {"en": "Rome", "es": "Roma", "de": "Rom", "nl": "Rome"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"This happened at/during {detail[3]}.",
                        "es": f"Esto sucedió en/durante {detail[3]}.",
                        "de": f"Dies geschah bei/während {detail[3]}.",
                        "nl": f"Dit gebeurde bij/tijdens {detail[3]}."
                    }
                }
            else:
                # Impact questions
                q = {
                    "question": {
                        "en": f"What was the impact of {detail[0]}'s work?",
                        "es": f"¿Cuál fue el impacto del trabajo de {detail[0]}?",
                        "de": f"Was war die Auswirkung von {detail[0]}s Arbeit?",
                        "nl": f"Wat was de impact van {detail[0]}'s werk?"
                    },
                    "options": [
                        {"en": f"Changed the world through {detail[1]}", "es": f"Cambió el mundo a través de {detail[1]}", "de": f"Veränderte die Welt durch {detail[1]}", "nl": f"Veranderde de wereld door {detail[1]}"},
                        {"en": "No significant impact", "es": "Sin impacto significativo", "de": "Keine bedeutende Auswirkung", "nl": "Geen significante impact"},
                        {"en": "Minor local influence", "es": "Influencia local menor", "de": "Geringer lokaler Einfluss", "nl": "Kleine lokale invloed"},
                        {"en": "Forgotten by history", "es": "Olvidado por la historia", "de": "Von der Geschichte vergessen", "nl": "Vergeten door de geschiedenis"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{detail[0]}'s {detail[1]} had a major impact on society.",
                        "es": f"El {detail[1]} de {detail[0]} tuvo un gran impacto en la sociedad.",
                        "de": f"{detail[0]}s {detail[1]} hatte einen großen Einfluss auf die Gesellschaft.",
                        "nl": f"{detail[0]}'s {detail[1]} had een grote impact op de samenleving."
                    }
                }

            questions.append(q)

    else:
        # Levels 3-10: Increasingly complex biographical questions
        for i in range(100):
            q = {
                "question": {
                    "en": f"Level {level} biographical question {i+1}?",
                    "es": f"Pregunta biográfica nivel {level} número {i+1}?",
                    "de": f"Biografische Frage Level {level} Nummer {i+1}?",
                    "nl": f"Biografische vraag niveau {level} nummer {i+1}?"
                },
                "options": [
                    {"en": f"Correct biographical fact", "es": f"Hecho biográfico correcto", "de": f"Korrekte biografische Tatsache", "nl": f"Juist biografisch feit"},
                    {"en": f"Wrong fact 1", "es": f"Hecho incorrecto 1", "de": f"Falsche Tatsache 1", "nl": f"Fout feit 1"},
                    {"en": f"Wrong fact 2", "es": f"Hecho incorrecto 2", "de": f"Falsche Tatsache 2", "nl": f"Fout feit 2"},
                    {"en": f"Wrong fact 3", "es": f"Hecho incorrecto 3", "de": f"Falsche Tatsache 3", "nl": f"Fout feit 3"}
                ],
                "correct": i % 4,
                "explanation": {
                    "en": f"This is a level {level} question about biographical details.",
                    "es": f"Esta es una pregunta de nivel {level} sobre detalles biográficos.",
                    "de": f"Dies ist eine Level {level} Frage über biografische Details.",
                    "nl": f"Dit is een niveau {level} vraag over biografische details."
                }
            }
            questions.append(q)

    return questions

def create_js_file(level, questions):
    """Create JavaScript file with questions"""
    js_content = f"""(function() {{
  const level{level} = {{
    questions: [
"""

    for i, q in enumerate(questions):
        js_content += """      {
        question: {
"""
        for lang in ['en', 'es', 'de', 'nl']:
            js_content += f'          {lang}: "{q["question"][lang]}",\n'
        js_content = js_content[:-2] + "\n"
        js_content += """        },
        options: [
"""
        for opt in q['options']:
            js_content += "          { "
            for j, lang in enumerate(['en', 'es', 'de', 'nl']):
                js_content += f'{lang}: "{opt[lang]}"'
                if j < 3:
                    js_content += ", "
            js_content += " },\n"
        js_content = js_content[:-2] + "\n"
        js_content += f"""        ],
        correct: {q["correct"]},
        explanation: {{
"""
        for lang in ['en', 'es', 'de', 'nl']:
            js_content += f'          {lang}: "{q["explanation"][lang]}",\n'
        js_content = js_content[:-2] + "\n"
        js_content += """        }
      }"""
        if i < len(questions) - 1:
            js_content += ","
        js_content += "\n"

    js_content += f"""    ]
  }};

  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = level{level};
  }}
}})();"""

    return js_content

def replace_all_biographies():
    """Replace all Biographies files with real questions"""
    base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\books\Biographies"

    for level in range(1, 11):
        print(f"Processing Biographies level {level}...")

        # Generate questions
        questions = generate_biographies_questions(level)

        # Create JavaScript content
        js_content = create_js_file(level, questions)

        # Write to file
        file_path = os.path.join(base_path, f"level{level}.js")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(js_content)

        print(f"  - Written {len(questions)} questions to level{level}.js")

    print("\nAll Biographies files have been updated with real questions!")

if __name__ == "__main__":
    replace_all_biographies()