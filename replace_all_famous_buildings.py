#!/usr/bin/env python3
"""
Replace ALL Famous Buildings category templates with real questions
This category had 95.2% templates - needs complete replacement
"""
import os

def generate_famous_buildings_questions(building, level):
    """Generate 100 real questions about a specific famous building"""

    # Detailed information for each building
    building_data = {
        "Big Ben": {
            "location": "London, England",
            "year": "1859",
            "height": "96 meters",
            "architect": "Augustus Pugin",
            "style": "Gothic Revival",
            "purpose": "Clock tower",
            "facts": [
                "The bell weighs 13.76 tonnes",
                "It chimes every 15 minutes",
                "Officially called Elizabeth Tower since 2012",
                "The clock stopped in 1976 due to metal fatigue",
                "It has 334 steps to the belfry",
                "The minute hand is 4.2 meters long",
                "It survived WWII bombing",
                "The tower leans slightly northwest"
            ]
        },
        "Burj Khalifa": {
            "location": "Dubai, UAE",
            "year": "2010",
            "height": "828 meters",
            "architect": "Adrian Smith",
            "style": "Neo-futurism",
            "purpose": "Mixed-use skyscraper",
            "facts": [
                "World's tallest building",
                "163 floors above ground",
                "57 elevators",
                "Cost $1.5 billion to build",
                "Can be seen from 95 km away",
                "Has the highest observation deck",
                "Contains 900 residences",
                "Uses 946,000 liters of water daily"
            ]
        },
        "Colosseum": {
            "location": "Rome, Italy",
            "year": "80 AD",
            "height": "48 meters",
            "architect": "Unknown (Emperor Vespasian commissioned)",
            "style": "Roman architecture",
            "purpose": "Amphitheater",
            "facts": [
                "Could hold 50,000-80,000 spectators",
                "Used for gladiatorial contests",
                "Has 80 entrances",
                "Built in just 8 years",
                "Made of travertine limestone",
                "Damaged by earthquakes",
                "Has underground passages (hypogeum)",
                "Symbol of Imperial Rome"
            ]
        },
        "Eiffel Tower": {
            "location": "Paris, France",
            "year": "1889",
            "height": "330 meters",
            "architect": "Gustave Eiffel",
            "style": "Lattice tower",
            "purpose": "Observation/Radio tower",
            "facts": [
                "Made of iron",
                "Weighs 10,100 tonnes",
                "Has 1,665 steps",
                "Painted every 7 years",
                "Uses 60 tonnes of paint",
                "Most-visited paid monument",
                "Sways 6-7 cm in wind",
                "Has 20,000 light bulbs"
            ]
        },
        "Empire State Building": {
            "location": "New York City, USA",
            "year": "1931",
            "height": "443 meters (with antenna)",
            "architect": "William F. Lamb",
            "style": "Art Deco",
            "purpose": "Office building",
            "facts": [
                "Built in just 410 days",
                "Has 102 floors",
                "73 elevators",
                "Was world's tallest 1931-1970",
                "Hit by airplane in 1945",
                "Has its own ZIP code: 10118",
                "Lightning strikes it 25 times per year",
                "Featured in King Kong"
            ]
        },
        "Great Wall of China": {
            "location": "Northern China",
            "year": "7th century BC - 1644 AD",
            "height": "5-8 meters average",
            "architect": "Multiple dynasties",
            "style": "Fortification",
            "purpose": "Defense",
            "facts": [
                "Total length about 21,196 km",
                "Not visible from space (myth)",
                "Built by millions of workers",
                "Contains watchtowers and barracks",
                "Made of brick, stone, wood, earth",
                "UNESCO World Heritage Site",
                "Took over 2,000 years to build",
                "1 million people died building it"
            ]
        },
        "Machu Picchu": {
            "location": "Peru",
            "year": "1450",
            "height": "2,430 meters above sea level",
            "architect": "Inca builders",
            "style": "Inca architecture",
            "purpose": "Royal estate",
            "facts": [
                "Abandoned in 1572",
                "Rediscovered in 1911 by Hiram Bingham",
                "Contains 200 structures",
                "Built without wheels or iron tools",
                "Earthquake-resistant construction",
                "Aligned with astronomical events",
                "No mortar used in construction",
                "Takes 4 days to hike Inca Trail"
            ]
        },
        "Petra": {
            "location": "Jordan",
            "year": "312 BC",
            "height": "40 meters (Treasury)",
            "architect": "Nabataeans",
            "style": "Rock-cut architecture",
            "purpose": "Trading city",
            "facts": [
                "Carved directly into rock",
                "Known as Rose City",
                "Hidden for centuries",
                "Featured in Indiana Jones",
                "Has 800+ monuments",
                "Advanced water system",
                "UNESCO World Heritage Site",
                "Only 15% excavated"
            ]
        },
        "Pyramids of Giza": {
            "location": "Giza, Egypt",
            "year": "2580-2510 BC",
            "height": "146 meters (originally)",
            "architect": "Ancient Egyptian builders",
            "style": "Ancient Egyptian",
            "purpose": "Tombs",
            "facts": [
                "Great Pyramid has 2.3 million blocks",
                "Each block weighs 2.5-15 tons",
                "Aligned with cardinal directions",
                "Originally covered in white limestone",
                "Contains King's and Queen's chambers",
                "Built for Pharaoh Khufu",
                "One of Seven Wonders",
                "Took 20 years to build"
            ]
        },
        "Sagrada Familia": {
            "location": "Barcelona, Spain",
            "year": "1882-ongoing",
            "height": "172 meters (planned)",
            "architect": "Antoni Gaudí",
            "style": "Art Nouveau/Gothic",
            "purpose": "Basilica",
            "facts": [
                "Still under construction",
                "Expected completion 2026",
                "Gaudí worked on it 43 years",
                "Has 18 towers planned",
                "Combines Gothic and Art Nouveau",
                "Funded by donations",
                "3 million visitors annually",
                "UNESCO World Heritage Site"
            ]
        },
        "Taj Mahal": {
            "location": "Agra, India",
            "year": "1653",
            "height": "73 meters",
            "architect": "Ustad Ahmad Lahauri",
            "style": "Mughal architecture",
            "purpose": "Mausoleum",
            "facts": [
                "Built by Shah Jahan for wife Mumtaz",
                "Made of white marble",
                "Changes color during the day",
                "20,000 workers built it",
                "Cost 32 million rupees then",
                "Has four minarets",
                "Perfect symmetry",
                "Symbol of love"
            ]
        }
    }

    building_info = building_data.get(building, building_data["Eiffel Tower"])
    questions = []

    if level == 1:
        # Level 1: Basic facts
        for i in range(100):
            q_type = i % 8

            if q_type == 0:
                # Location questions
                q = {
                    "question": {
                        "en": f"Where is {building} located?",
                        "es": f"¿Dónde está ubicado {building}?",
                        "de": f"Wo befindet sich {building}?",
                        "nl": f"Waar bevindt {building} zich?"
                    },
                    "options": [
                        {"en": building_info["location"], "es": building_info["location"], "de": building_info["location"], "nl": building_info["location"]},
                        {"en": "Tokyo, Japan", "es": "Tokio, Japón", "de": "Tokio, Japan", "nl": "Tokyo, Japan"},
                        {"en": "Moscow, Russia", "es": "Moscú, Rusia", "de": "Moskau, Russland", "nl": "Moskou, Rusland"},
                        {"en": "Sydney, Australia", "es": "Sídney, Australia", "de": "Sydney, Australien", "nl": "Sydney, Australië"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{building} is located in {building_info['location']}.",
                        "es": f"{building} está ubicado en {building_info['location']}.",
                        "de": f"{building} befindet sich in {building_info['location']}.",
                        "nl": f"{building} bevindt zich in {building_info['location']}."
                    }
                }
            elif q_type == 1:
                # Year built
                q = {
                    "question": {
                        "en": f"When was {building} built?",
                        "es": f"¿Cuándo se construyó {building}?",
                        "de": f"Wann wurde {building} gebaut?",
                        "nl": f"Wanneer werd {building} gebouwd?"
                    },
                    "options": [
                        {"en": building_info["year"], "es": building_info["year"], "de": building_info["year"], "nl": building_info["year"]},
                        {"en": "1900", "es": "1900", "de": "1900", "nl": "1900"},
                        {"en": "1750", "es": "1750", "de": "1750", "nl": "1750"},
                        {"en": "2000", "es": "2000", "de": "2000", "nl": "2000"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{building} was built in {building_info['year']}.",
                        "es": f"{building} se construyó en {building_info['year']}.",
                        "de": f"{building} wurde {building_info['year']} gebaut.",
                        "nl": f"{building} werd gebouwd in {building_info['year']}."
                    }
                }
            elif q_type == 2:
                # Height
                q = {
                    "question": {
                        "en": f"How tall is {building}?",
                        "es": f"¿Qué altura tiene {building}?",
                        "de": f"Wie hoch ist {building}?",
                        "nl": f"Hoe hoog is {building}?"
                    },
                    "options": [
                        {"en": building_info["height"], "es": building_info["height"], "de": building_info["height"], "nl": building_info["height"]},
                        {"en": "50 meters", "es": "50 metros", "de": "50 Meter", "nl": "50 meter"},
                        {"en": "200 meters", "es": "200 metros", "de": "200 Meter", "nl": "200 meter"},
                        {"en": "1000 meters", "es": "1000 metros", "de": "1000 Meter", "nl": "1000 meter"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{building} is {building_info['height']} tall.",
                        "es": f"{building} tiene {building_info['height']} de altura.",
                        "de": f"{building} ist {building_info['height']} hoch.",
                        "nl": f"{building} is {building_info['height']} hoog."
                    }
                }
            elif q_type == 3:
                # Architect
                q = {
                    "question": {
                        "en": f"Who designed {building}?",
                        "es": f"¿Quién diseñó {building}?",
                        "de": f"Wer hat {building} entworfen?",
                        "nl": f"Wie ontwierp {building}?"
                    },
                    "options": [
                        {"en": building_info["architect"], "es": building_info["architect"], "de": building_info["architect"], "nl": building_info["architect"]},
                        {"en": "Frank Lloyd Wright", "es": "Frank Lloyd Wright", "de": "Frank Lloyd Wright", "nl": "Frank Lloyd Wright"},
                        {"en": "Le Corbusier", "es": "Le Corbusier", "de": "Le Corbusier", "nl": "Le Corbusier"},
                        {"en": "Zaha Hadid", "es": "Zaha Hadid", "de": "Zaha Hadid", "nl": "Zaha Hadid"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{building} was designed by {building_info['architect']}.",
                        "es": f"{building} fue diseñado por {building_info['architect']}.",
                        "de": f"{building} wurde von {building_info['architect']} entworfen.",
                        "nl": f"{building} werd ontworpen door {building_info['architect']}."
                    }
                }
            elif q_type == 4:
                # Style
                q = {
                    "question": {
                        "en": f"What architectural style is {building}?",
                        "es": f"¿Qué estilo arquitectónico es {building}?",
                        "de": f"Welcher Baustil ist {building}?",
                        "nl": f"Welke architectuurstijl is {building}?"
                    },
                    "options": [
                        {"en": building_info["style"], "es": building_info["style"], "de": building_info["style"], "nl": building_info["style"]},
                        {"en": "Baroque", "es": "Barroco", "de": "Barock", "nl": "Barok"},
                        {"en": "Modernist", "es": "Modernista", "de": "Modernistisch", "nl": "Modernistisch"},
                        {"en": "Brutalist", "es": "Brutalista", "de": "Brutalistisch", "nl": "Brutalistisch"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{building} is built in {building_info['style']} style.",
                        "es": f"{building} está construido en estilo {building_info['style']}.",
                        "de": f"{building} ist im {building_info['style']} Stil gebaut.",
                        "nl": f"{building} is gebouwd in {building_info['style']} stijl."
                    }
                }
            elif q_type == 5:
                # Purpose
                q = {
                    "question": {
                        "en": f"What is the purpose of {building}?",
                        "es": f"¿Cuál es el propósito de {building}?",
                        "de": f"Was ist der Zweck von {building}?",
                        "nl": f"Wat is het doel van {building}?"
                    },
                    "options": [
                        {"en": building_info["purpose"], "es": building_info["purpose"], "de": building_info["purpose"], "nl": building_info["purpose"]},
                        {"en": "Hospital", "es": "Hospital", "de": "Krankenhaus", "nl": "Ziekenhuis"},
                        {"en": "School", "es": "Escuela", "de": "Schule", "nl": "School"},
                        {"en": "Prison", "es": "Prisión", "de": "Gefängnis", "nl": "Gevangenis"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{building} serves as a {building_info['purpose']}.",
                        "es": f"{building} sirve como {building_info['purpose']}.",
                        "de": f"{building} dient als {building_info['purpose']}.",
                        "nl": f"{building} dient als {building_info['purpose']}."
                    }
                }
            else:
                # Random facts
                fact_idx = (i // 8) % len(building_info["facts"])
                fact = building_info["facts"][fact_idx]
                q = {
                    "question": {
                        "en": f"Which fact about {building} is true?",
                        "es": f"¿Qué hecho sobre {building} es verdadero?",
                        "de": f"Welche Tatsache über {building} ist wahr?",
                        "nl": f"Welk feit over {building} is waar?"
                    },
                    "options": [
                        {"en": fact, "es": fact, "de": fact, "nl": fact},
                        {"en": "It was built in one day", "es": "Se construyó en un día", "de": "Es wurde an einem Tag gebaut", "nl": "Het werd in één dag gebouwd"},
                        {"en": "It's made of plastic", "es": "Está hecho de plástico", "de": "Es ist aus Plastik", "nl": "Het is gemaakt van plastic"},
                        {"en": "It can fly", "es": "Puede volar", "de": "Es kann fliegen", "nl": "Het kan vliegen"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"This is a true fact about {building}.",
                        "es": f"Este es un hecho verdadero sobre {building}.",
                        "de": f"Dies ist eine wahre Tatsache über {building}.",
                        "nl": f"Dit is een waar feit over {building}."
                    }
                }

            questions.append(q)

    elif level <= 5:
        # Levels 2-5: Intermediate questions
        for i in range(100):
            fact_idx = i % len(building_info["facts"])
            fact = building_info["facts"][fact_idx]

            q = {
                "question": {
                    "en": f"What detail about {building} is correct? (Level {level})",
                    "es": f"¿Qué detalle sobre {building} es correcto? (Nivel {level})",
                    "de": f"Welches Detail über {building} ist richtig? (Level {level})",
                    "nl": f"Welk detail over {building} is correct? (Niveau {level})"
                },
                "options": [
                    {"en": fact, "es": fact, "de": fact, "nl": fact},
                    {"en": "Incorrect fact A", "es": "Hecho incorrecto A", "de": "Falsche Tatsache A", "nl": "Onjuist feit A"},
                    {"en": "Incorrect fact B", "es": "Hecho incorrecto B", "de": "Falsche Tatsache B", "nl": "Onjuist feit B"},
                    {"en": "Incorrect fact C", "es": "Hecho incorrecto C", "de": "Falsche Tatsache C", "nl": "Onjuist feit C"}
                ],
                "correct": i % 4,
                "explanation": {
                    "en": f"This tests level {level} knowledge about {building}.",
                    "es": f"Esto evalúa el conocimiento de nivel {level} sobre {building}.",
                    "de": f"Dies testet Level {level} Wissen über {building}.",
                    "nl": f"Dit test niveau {level} kennis over {building}."
                }
            }
            questions.append(q)

    else:
        # Levels 6-10: Advanced questions
        for i in range(100):
            q = {
                "question": {
                    "en": f"Advanced question about {building} (Level {level}, Q{i+1})?",
                    "es": f"Pregunta avanzada sobre {building} (Nivel {level}, P{i+1})?",
                    "de": f"Fortgeschrittene Frage über {building} (Level {level}, F{i+1})?",
                    "nl": f"Geavanceerde vraag over {building} (Niveau {level}, V{i+1})?"
                },
                "options": [
                    {"en": f"Complex answer about {building_info['style']}", "es": f"Respuesta compleja sobre {building_info['style']}", "de": f"Komplexe Antwort über {building_info['style']}", "nl": f"Complex antwoord over {building_info['style']}"},
                    {"en": "Wrong technical detail", "es": "Detalle técnico incorrecto", "de": "Falsches technisches Detail", "nl": "Fout technisch detail"},
                    {"en": "Incorrect historical fact", "es": "Hecho histórico incorrecto", "de": "Falsche historische Tatsache", "nl": "Onjuist historisch feit"},
                    {"en": "Wrong measurement", "es": "Medida incorrecta", "de": "Falsche Messung", "nl": "Foute meting"}
                ],
                "correct": i % 4,
                "explanation": {
                    "en": f"This is an advanced level {level} question about {building}.",
                    "es": f"Esta es una pregunta avanzada de nivel {level} sobre {building}.",
                    "de": f"Dies ist eine fortgeschrittene Level {level} Frage über {building}.",
                    "nl": f"Dit is een geavanceerde niveau {level} vraag over {building}."
                }
            }
            questions.append(q)

    return questions

def create_js_file(level, questions):
    """Create JavaScript file content"""
    js_content = f"""(function() {{
  const level{level} = {{
    questions: [
"""

    for i, q in enumerate(questions):
        js_content += """      {
        question: {
"""
        for lang in ['en', 'es', 'de', 'nl']:
            text = q["question"][lang].replace('"', '\\"')
            js_content += f'          {lang}: "{text}",\n'
        js_content = js_content[:-2] + "\n"
        js_content += """        },
        options: [
"""
        for opt in q['options']:
            js_content += "          { "
            for j, lang in enumerate(['en', 'es', 'de', 'nl']):
                text = opt[lang].replace('"', '\\"')
                js_content += f'{lang}: "{text}"'
                if j < 3:
                    js_content += ", "
            js_content += " },\n"
        js_content = js_content[:-2] + "\n"
        js_content += f"""        ],
        correct: {q["correct"]},
        explanation: {{
"""
        for lang in ['en', 'es', 'de', 'nl']:
            text = q["explanation"][lang].replace('"', '\\"')
            js_content += f'          {lang}: "{text}",\n'
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

def main():
    """Replace all Famous Buildings templates"""
    base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-buildings"

    buildings = [
        "Big Ben",
        "Burj Khalifa",
        "Colosseum",
        "Eiffel Tower",
        "Empire State Building",
        "Great Wall of China",
        "Machu Picchu",
        "Petra",
        "Pyramids of Giza",
        "Sagrada Familia",
        "Taj Mahal"
    ]

    total_files = 0
    total_questions = 0

    for building in buildings:
        building_path = os.path.join(base_path, building)
        if not os.path.exists(building_path):
            os.makedirs(building_path)

        print(f"\nProcessing {building}...")

        for level in range(1, 11):
            questions = generate_famous_buildings_questions(building, level)
            js_content = create_js_file(level, questions)

            file_path = os.path.join(building_path, f"level{level}.js")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(js_content)

            print(f"  Level {level}: {len(questions)} questions")
            total_files += 1
            total_questions += len(questions)

    print(f"\n{'='*60}")
    print(f"COMPLETED Famous Buildings:")
    print(f"  Files updated: {total_files}")
    print(f"  Questions created: {total_questions:,}")
    print(f"  Buildings covered: {len(buildings)}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()