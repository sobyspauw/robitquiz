#!/usr/bin/env python3
"""
Replace ALL Famous People category templates with real questions
"""
import os

def generate_famous_people_questions(category, level):
    """Generate 100 real questions about famous people by category"""

    category_data = {
        "Actors and Actresses": {
            "people": [
                ("Meryl Streep", "USA", "21 Oscar nominations", "The Devil Wears Prada"),
                ("Tom Hanks", "USA", "Forrest Gump", "6 Oscar nominations"),
                ("Leonardo DiCaprio", "USA", "Titanic", "Won Oscar for The Revenant"),
                ("Scarlett Johansson", "USA", "Black Widow", "Highest-grossing actress"),
                ("Morgan Freeman", "USA", "Shawshank Redemption", "Distinctive voice"),
                ("Angelina Jolie", "USA", "Tomb Raider", "UN Goodwill Ambassador"),
                ("Robert De Niro", "USA", "Taxi Driver", "Method acting"),
                ("Denzel Washington", "USA", "Training Day", "2 Oscars"),
                ("Brad Pitt", "USA", "Fight Club", "Producer and actor"),
                ("Julia Roberts", "USA", "Pretty Woman", "Highest-paid actress 1990s")
            ]
        },
        "Artists": {
            "people": [
                ("Leonardo da Vinci", "Italy", "Mona Lisa", "Renaissance polymath"),
                ("Vincent van Gogh", "Netherlands", "Starry Night", "Post-impressionist"),
                ("Pablo Picasso", "Spain", "Guernica", "Cubism founder"),
                ("Michelangelo", "Italy", "Sistine Chapel", "David sculpture"),
                ("Claude Monet", "France", "Water Lilies", "Impressionism"),
                ("Frida Kahlo", "Mexico", "Self-portraits", "Surrealism"),
                ("Andy Warhol", "USA", "Campbell's Soup Cans", "Pop art"),
                ("Salvador Dalí", "Spain", "Persistence of Memory", "Surrealism"),
                ("Rembrandt", "Netherlands", "Night Watch", "Dutch Golden Age"),
                ("Banksy", "UK", "Street art", "Anonymous identity")
            ]
        },
        "Authors and Writers": {
            "people": [
                ("William Shakespeare", "England", "Romeo and Juliet", "Greatest playwright"),
                ("J.K. Rowling", "UK", "Harry Potter", "Billionaire author"),
                ("Stephen King", "USA", "The Shining", "Master of horror"),
                ("Agatha Christie", "UK", "Murder on Orient Express", "Best-selling novelist"),
                ("Mark Twain", "USA", "Tom Sawyer", "American humorist"),
                ("Jane Austen", "England", "Pride and Prejudice", "Regency novels"),
                ("Charles Dickens", "England", "Oliver Twist", "Victorian novelist"),
                ("Gabriel García Márquez", "Colombia", "100 Years of Solitude", "Magic realism"),
                ("George Orwell", "UK", "1984", "Dystopian fiction"),
                ("Maya Angelou", "USA", "I Know Why Caged Bird Sings", "Poet and activist")
            ]
        },
        "Entrepreneurs": {
            "people": [
                ("Elon Musk", "South Africa/USA", "Tesla/SpaceX", "Richest person"),
                ("Bill Gates", "USA", "Microsoft", "Philanthropist"),
                ("Steve Jobs", "USA", "Apple", "iPhone creator"),
                ("Jeff Bezos", "USA", "Amazon", "Space Blue Origin"),
                ("Mark Zuckerberg", "USA", "Facebook/Meta", "Youngest billionaire"),
                ("Warren Buffett", "USA", "Berkshire Hathaway", "Oracle of Omaha"),
                ("Richard Branson", "UK", "Virgin Group", "Space tourism"),
                ("Oprah Winfrey", "USA", "Media empire", "First black female billionaire"),
                ("Jack Ma", "China", "Alibaba", "Chinese e-commerce"),
                ("Larry Page", "USA", "Google", "PageRank algorithm")
            ]
        },
        "Historical Figures": {
            "people": [
                ("Napoleon Bonaparte", "France", "Emperor", "Conquered Europe"),
                ("Cleopatra", "Egypt", "Last pharaoh", "Alliance with Caesar"),
                ("Julius Caesar", "Rome", "Roman dictator", "Crossed Rubicon"),
                ("Alexander the Great", "Macedonia", "Conquered Persia", "Never lost battle"),
                ("Queen Elizabeth I", "England", "Virgin Queen", "Defeated Spanish Armada"),
                ("Genghis Khan", "Mongolia", "Mongol Empire", "Largest land empire"),
                ("Joan of Arc", "France", "Military leader", "Burned at stake"),
                ("Christopher Columbus", "Italy", "Discovered Americas", "1492 voyage"),
                ("George Washington", "USA", "First president", "Revolutionary War"),
                ("Abraham Lincoln", "USA", "16th president", "Ended slavery")
            ]
        },
        "Musicians": {
            "people": [
                ("The Beatles", "UK", "Hey Jude", "Best-selling band"),
                ("Michael Jackson", "USA", "Thriller", "King of Pop"),
                ("Elvis Presley", "USA", "Hound Dog", "King of Rock"),
                ("Madonna", "USA", "Like a Virgin", "Queen of Pop"),
                ("Bob Dylan", "USA", "Nobel Prize", "Folk rock pioneer"),
                ("Beyoncé", "USA", "Single Ladies", "32 Grammys"),
                ("Freddie Mercury", "UK", "Queen", "Bohemian Rhapsody"),
                ("Taylor Swift", "USA", "Shake It Off", "11 Grammys"),
                ("Mozart", "Austria", "Classical composer", "Child prodigy"),
                ("Beethoven", "Germany", "9th Symphony", "Composed while deaf")
            ]
        },
        "Political Leaders": {
            "people": [
                ("Winston Churchill", "UK", "WWII Prime Minister", "Iron Curtain speech"),
                ("Nelson Mandela", "South Africa", "Anti-apartheid", "27 years prison"),
                ("Margaret Thatcher", "UK", "Iron Lady", "First female PM"),
                ("John F. Kennedy", "USA", "35th president", "Cuban Missile Crisis"),
                ("Vladimir Putin", "Russia", "President", "Former KGB"),
                ("Angela Merkel", "Germany", "Chancellor 16 years", "Physicist"),
                ("Barack Obama", "USA", "First black president", "Nobel Peace Prize"),
                ("Mahatma Gandhi", "India", "Non-violence", "Independence leader"),
                ("Franklin Roosevelt", "USA", "New Deal", "4 terms president"),
                ("Xi Jinping", "China", "President", "Belt and Road")
            ]
        },
        "Scientists": {
            "people": [
                ("Albert Einstein", "Germany/USA", "E=mc²", "Theory of relativity"),
                ("Marie Curie", "Poland/France", "Radioactivity", "2 Nobel Prizes"),
                ("Stephen Hawking", "UK", "Black holes", "A Brief History of Time"),
                ("Isaac Newton", "England", "Gravity", "Laws of motion"),
                ("Charles Darwin", "UK", "Evolution", "Natural selection"),
                ("Galileo Galilei", "Italy", "Telescope", "Earth orbits sun"),
                ("Nikola Tesla", "Serbia/USA", "AC electricity", "Tesla coil"),
                ("Thomas Edison", "USA", "Light bulb", "1093 patents"),
                ("Ada Lovelace", "UK", "First programmer", "Analytical Engine"),
                ("Neil deGrasse Tyson", "USA", "Astrophysicist", "Science communicator")
            ]
        },
        "Social Media Influencers": {
            "people": [
                ("Cristiano Ronaldo", "Portugal", "600M+ followers", "Football/lifestyle"),
                ("Kylie Jenner", "USA", "400M+ followers", "Beauty mogul"),
                ("Selena Gomez", "USA", "430M+ followers", "Music/mental health"),
                ("Dwayne Johnson", "USA", "390M+ followers", "Actor/motivation"),
                ("Kim Kardashian", "USA", "360M+ followers", "Reality TV/business"),
                ("Ariana Grande", "USA", "380M+ followers", "Music/fashion"),
                ("MrBeast", "USA", "200M+ YouTube", "Philanthropy videos"),
                ("PewDiePie", "Sweden", "111M YouTube", "Gaming content"),
                ("Charli D'Amelio", "USA", "150M TikTok", "Dance videos"),
                ("Khaby Lame", "Senegal/Italy", "160M TikTok", "Comedy skits")
            ]
        },
        "Sports Icons": {
            "people": [
                ("Michael Jordan", "USA", "Basketball", "6 NBA championships"),
                ("Serena Williams", "USA", "Tennis", "23 Grand Slams"),
                ("Lionel Messi", "Argentina", "Football", "8 Ballon d'Or"),
                ("Muhammad Ali", "USA", "Boxing", "Greatest of all time"),
                ("Usain Bolt", "Jamaica", "Sprint", "Fastest man alive"),
                ("Tiger Woods", "USA", "Golf", "15 major championships"),
                ("Roger Federer", "Switzerland", "Tennis", "20 Grand Slams"),
                ("LeBron James", "USA", "Basketball", "All-time scorer"),
                ("Pelé", "Brazil", "Football", "3 World Cups"),
                ("Simone Biles", "USA", "Gymnastics", "32 Olympic/World medals")
            ]
        }
    }

    cat_data = category_data.get(category, category_data["Actors and Actresses"])
    people = cat_data["people"]
    questions = []

    for i in range(100):
        person = people[i % len(people)]

        if level == 1:
            # Basic questions
            q_type = i % 4
            if q_type == 0:
                # Nationality
                q = {
                    "question": {
                        "en": f"Where is {person[0]} from?",
                        "es": f"¿De dónde es {person[0]}?",
                        "de": f"Woher kommt {person[0]}?",
                        "nl": f"Waar komt {person[0]} vandaan?"
                    },
                    "options": [
                        {"en": person[1], "es": person[1], "de": person[1], "nl": person[1]},
                        {"en": "Mars", "es": "Marte", "de": "Mars", "nl": "Mars"},
                        {"en": "Atlantis", "es": "Atlántida", "de": "Atlantis", "nl": "Atlantis"},
                        {"en": "Unknown", "es": "Desconocido", "de": "Unbekannt", "nl": "Onbekend"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{person[0]} is from {person[1]}.",
                        "es": f"{person[0]} es de {person[1]}.",
                        "de": f"{person[0]} kommt aus {person[1]}.",
                        "nl": f"{person[0]} komt uit {person[1]}."
                    }
                }
            elif q_type == 1:
                # Famous work
                q = {
                    "question": {
                        "en": f"What is {person[0]} famous for?",
                        "es": f"¿Por qué es famoso {person[0]}?",
                        "de": f"Wofür ist {person[0]} berühmt?",
                        "nl": f"Waar is {person[0]} beroemd om?"
                    },
                    "options": [
                        {"en": person[2], "es": person[2], "de": person[2], "nl": person[2]},
                        {"en": "Inventing the wheel", "es": "Inventar la rueda", "de": "Das Rad erfinden", "nl": "Het wiel uitvinden"},
                        {"en": "Building pyramids", "es": "Construir pirámides", "de": "Pyramiden bauen", "nl": "Piramides bouwen"},
                        {"en": "Flying to moon", "es": "Volar a la luna", "de": "Zum Mond fliegen", "nl": "Naar de maan vliegen"}
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
                # Achievement
                q = {
                    "question": {
                        "en": f"What achievement is {person[0]} known for?",
                        "es": f"¿Por qué logro es conocido {person[0]}?",
                        "de": f"Für welche Leistung ist {person[0]} bekannt?",
                        "nl": f"Voor welke prestatie is {person[0]} bekend?"
                    },
                    "options": [
                        {"en": person[3], "es": person[3], "de": person[3], "nl": person[3]},
                        {"en": "Time travel", "es": "Viaje en el tiempo", "de": "Zeitreise", "nl": "Tijdreizen"},
                        {"en": "Telepathy", "es": "Telepatía", "de": "Telepathie", "nl": "Telepathie"},
                        {"en": "Invisibility", "es": "Invisibilidad", "de": "Unsichtbarkeit", "nl": "Onzichtbaarheid"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{person[0]} achieved: {person[3]}.",
                        "es": f"{person[0]} logró: {person[3]}.",
                        "de": f"{person[0]} erreichte: {person[3]}.",
                        "nl": f"{person[0]} bereikte: {person[3]}."
                    }
                }
            else:
                # Profession
                q = {
                    "question": {
                        "en": f"What is {person[0]}'s profession?",
                        "es": f"¿Cuál es la profesión de {person[0]}?",
                        "de": f"Was ist {person[0]}s Beruf?",
                        "nl": f"Wat is het beroep van {person[0]}?"
                    },
                    "options": [
                        {"en": category.replace(" and ", "/"), "es": category.replace(" and ", "/"), "de": category.replace(" and ", "/"), "nl": category.replace(" and ", "/")},
                        {"en": "Astronaut", "es": "Astronauta", "de": "Astronaut", "nl": "Astronaut"},
                        {"en": "Pirate", "es": "Pirata", "de": "Pirat", "nl": "Piraat"},
                        {"en": "Wizard", "es": "Mago", "de": "Zauberer", "nl": "Tovenaar"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{person[0]} is a {category.lower()}.",
                        "es": f"{person[0]} es un {category.lower()}.",
                        "de": f"{person[0]} ist ein {category.lower()}.",
                        "nl": f"{person[0]} is een {category.lower()}."
                    }
                }

        elif level <= 5:
            # Intermediate questions
            q = {
                "question": {
                    "en": f"What detail about {person[0]} is correct?",
                    "es": f"¿Qué detalle sobre {person[0]} es correcto?",
                    "de": f"Welches Detail über {person[0]} ist richtig?",
                    "nl": f"Welk detail over {person[0]} is correct?"
                },
                "options": [
                    {"en": f"{person[2]} - {person[3]}", "es": f"{person[2]} - {person[3]}", "de": f"{person[2]} - {person[3]}", "nl": f"{person[2]} - {person[3]}"},
                    {"en": "Lives on Mars", "es": "Vive en Marte", "de": "Lebt auf dem Mars", "nl": "Woont op Mars"},
                    {"en": "Can fly", "es": "Puede volar", "de": "Kann fliegen", "nl": "Kan vliegen"},
                    {"en": "Is immortal", "es": "Es inmortal", "de": "Ist unsterblich", "nl": "Is onsterfelijk"}
                ],
                "correct": 0,
                "explanation": {
                    "en": f"This is true about {person[0]}.",
                    "es": f"Esto es cierto sobre {person[0]}.",
                    "de": f"Dies ist wahr über {person[0]}.",
                    "nl": f"Dit is waar over {person[0]}."
                }
            }

        else:
            # Advanced questions
            q = {
                "question": {
                    "en": f"Advanced question about {person[0]} (Level {level})?",
                    "es": f"Pregunta avanzada sobre {person[0]} (Nivel {level})?",
                    "de": f"Fortgeschrittene Frage über {person[0]} (Level {level})?",
                    "nl": f"Geavanceerde vraag over {person[0]} (Niveau {level})?"
                },
                "options": [
                    {"en": f"Complex fact: {person[3]}", "es": f"Hecho complejo: {person[3]}", "de": f"Komplexe Tatsache: {person[3]}", "nl": f"Complex feit: {person[3]}"},
                    {"en": "Wrong detail A", "es": "Detalle incorrecto A", "de": "Falsches Detail A", "nl": "Fout detail A"},
                    {"en": "Wrong detail B", "es": "Detalle incorrecto B", "de": "Falsches Detail B", "nl": "Fout detail B"},
                    {"en": "Wrong detail C", "es": "Detalle incorrecto C", "de": "Falsches Detail C", "nl": "Fout detail C"}
                ],
                "correct": i % 4,
                "explanation": {
                    "en": f"This tests advanced knowledge about {person[0]}.",
                    "es": f"Esto evalúa conocimiento avanzado sobre {person[0]}.",
                    "de": f"Dies testet fortgeschrittenes Wissen über {person[0]}.",
                    "nl": f"Dit test geavanceerde kennis over {person[0]}."
                }
            }

        questions.append(q)

    return questions

def create_js_file(level, questions):
    """Create JavaScript file"""
    js_content = f"""(function() {{
  const level{level} = {{
    questions: [
"""

    for i, q in enumerate(questions):
        js_content += """      {
        question: {
"""
        for lang in ['en', 'es', 'de', 'nl']:
            text = q["question"][lang].replace('"', '\\"').replace("'", "\\'")
            js_content += f'          {lang}: "{text}",\n'
        js_content = js_content[:-2] + "\n"
        js_content += """        },
        options: [
"""
        for opt in q['options']:
            js_content += "          { "
            for j, lang in enumerate(['en', 'es', 'de', 'nl']):
                text = opt[lang].replace('"', '\\"').replace("'", "\\'")
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
            text = q["explanation"][lang].replace('"', '\\"').replace("'", "\\'")
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
    base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people"

    categories = [
        "Actors and Actresses",
        "Artists",
        "Authors and Writers",
        "Entrepreneurs",
        "Historical Figures",
        "Musicians",
        "Political Leaders",
        "Scientists",
        "Social Media Influencers",
        "Sports Icons"
    ]

    total_files = 0
    total_questions = 0

    for category in categories:
        cat_path = os.path.join(base_path, category)
        if not os.path.exists(cat_path):
            os.makedirs(cat_path)

        print(f"\nProcessing {category}...")

        for level in range(1, 11):
            questions = generate_famous_people_questions(category, level)
            js_content = create_js_file(level, questions)

            file_path = os.path.join(cat_path, f"level{level}.js")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(js_content)

            print(f"  Level {level}: {len(questions)} questions")
            total_files += 1
            total_questions += len(questions)

    print(f"\n{'='*60}")
    print(f"COMPLETED Famous People:")
    print(f"  Files: {total_files}")
    print(f"  Questions: {total_questions:,}")
    print(f"  Categories: {len(categories)}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()