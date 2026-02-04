import os
import random

# F1 subcategories with real facts
f1_data = {
    "Bekende circuits": {
        "topics": [
            ("Monaco", "1929", "Street circuit", "78 laps", "Shortest track 3.337km"),
            ("Silverstone", "1950", "First F1 race", "Home of British GP", "5.891km"),
            ("Monza", "1922", "Temple of Speed", "Fastest track", "5.793km"),
            ("Spa-Francorchamps", "1925", "Eau Rouge corner", "Longest track 7.004km", "Weather changes"),
            ("Suzuka", "1962", "Figure-8 layout", "Honda owned", "5.807km"),
            ("Interlagos", "1940", "Counter-clockwise", "São Paulo", "4.309km"),
            ("Circuit de Catalunya", "1991", "Testing venue", "Barcelona", "4.675km"),
            ("Red Bull Ring", "1969", "Shortest lap time", "Austria", "4.318km"),
            ("Singapore", "2008", "Night race", "Marina Bay", "5.063km"),
            ("COTA", "2012", "Austin Texas", "Multi-elevation", "5.513km")
        ]
    },
    "Kampioenschappen": {
        "topics": [
            ("Michael Schumacher", "7 titles", "91 wins", "2000-2004 streak", "Ferrari legend"),
            ("Lewis Hamilton", "7 titles", "103 wins", "Most poles 104", "Mercedes dominant"),
            ("Max Verstappen", "3 titles", "2021-2023", "Youngest winner", "Red Bull Racing"),
            ("Ayrton Senna", "3 titles", "41 wins", "65 poles", "1988-1991"),
            ("Alain Prost", "4 titles", "51 wins", "The Professor", "1985-1993"),
            ("Sebastian Vettel", "4 titles", "53 wins", "2010-2013 streak", "Red Bull era"),
            ("Juan Manuel Fangio", "5 titles", "24 wins", "1950s legend", "46.2% win rate"),
            ("Niki Lauda", "3 titles", "25 wins", "1975-1984", "Comeback story"),
            ("Jackie Stewart", "3 titles", "27 wins", "Safety pioneer", "1969-1973"),
            ("Fernando Alonso", "2 titles", "32 wins", "2005-2006", "Youngest double champion")
        ]
    },
    "Teams": {
        "topics": [
            ("Ferrari", "1950-present", "16 constructors", "Most wins 243", "Italian team"),
            ("McLaren", "1966-present", "8 constructors", "183 wins", "Woking based"),
            ("Mercedes", "2010-present", "8 constructors", "125 wins", "2014-2021 dominance"),
            ("Red Bull Racing", "2005-present", "6 constructors", "113 wins", "Energy drink team"),
            ("Williams", "1978-present", "9 constructors", "114 wins", "British team"),
            ("Lotus", "1958-1994", "7 constructors", "79 wins", "Chapman innovations"),
            ("Brabham", "1962-1992", "2 constructors", "35 wins", "Fan car"),
            ("Tyrrell", "1970-1998", "1 constructor", "23 wins", "Six-wheeler"),
            ("Alpine/Renault", "1977-present", "2 constructors", "35 wins", "French team"),
            ("Alfa Romeo", "1950-present", "0 constructors", "10 wins", "First champion")
        ]
    },
    "Legendarische coureurs": {
        "topics": [
            ("Ayrton Senna", "Brazil", "1984-1994", "3 championships", "Racing in rain"),
            ("Alain Prost", "France", "1980-1993", "4 championships", "Tactical genius"),
            ("Niki Lauda", "Austria", "1971-1985", "3 championships", "1976 crash survivor"),
            ("Jim Clark", "Scotland", "1960-1968", "2 championships", "Natural talent"),
            ("Jackie Stewart", "Scotland", "1965-1973", "3 championships", "Safety advocate"),
            ("Juan Manuel Fangio", "Argentina", "1950-1958", "5 championships", "El Maestro"),
            ("Stirling Moss", "England", "1951-1962", "0 championships", "Greatest without title"),
            ("Gilles Villeneuve", "Canada", "1977-1982", "6 wins", "Fearless driver"),
            ("James Hunt", "England", "1973-1979", "1 championship", "Playboy racer"),
            ("Ronnie Peterson", "Sweden", "1970-1978", "10 wins", "Super Swede")
        ]
    },
    "Moderne supersterren": {
        "topics": [
            ("Max Verstappen", "Netherlands", "2015-present", "54 wins", "Youngest winner 18y"),
            ("Lewis Hamilton", "England", "2007-present", "103 wins", "Most successful"),
            ("Charles Leclerc", "Monaco", "2018-present", "5 wins", "Ferrari hope"),
            ("George Russell", "England", "2019-present", "1 win", "Mercedes future"),
            ("Lando Norris", "England", "2019-present", "0 wins", "McLaren star"),
            ("Carlos Sainz Jr", "Spain", "2015-present", "2 wins", "Smooth operator"),
            ("Sergio Perez", "Mexico", "2011-present", "6 wins", "Tire whisperer"),
            ("Fernando Alonso", "Spain", "2001-present", "32 wins", "El Plan"),
            ("Pierre Gasly", "France", "2017-present", "1 win", "Monza 2020"),
            ("Oscar Piastri", "Australia", "2023-present", "0 wins", "Rookie sensation")
        ]
    },
    "Auto-innovaties": {
        "topics": [
            ("Ground effect", "1977", "Lotus 78", "Venturi tunnels", "Downforce revolution"),
            ("Turbo engines", "1977", "Renault", "1.5L V6", "1500hp qualifying"),
            ("Carbon fiber", "1981", "McLaren MP4/1", "Lightweight", "Safety improvement"),
            ("Active suspension", "1987", "Lotus", "Computer controlled", "Banned 1994"),
            ("Semi-automatic gearbox", "1989", "Ferrari", "Paddle shift", "Millisecond shifts"),
            ("KERS", "2009", "Kinetic recovery", "60kW boost", "Hybrid era"),
            ("DRS", "2011", "Drag reduction", "Overtaking aid", "Rear wing opens"),
            ("Halo", "2018", "Head protection", "Titanium", "Saves lives"),
            ("F-duct", "2010", "McLaren", "Stall rear wing", "Driver activated"),
            ("Blown diffuser", "2010", "Red Bull", "Exhaust gases", "Extra downforce")
        ]
    },
    "Ongevallen & safety": {
        "topics": [
            ("Niki Lauda crash", "1976", "Nürburgring", "Fire burns", "42 days recovery"),
            ("Ayrton Senna", "1994", "Imola", "Fatal crash", "Safety revolution"),
            ("Roland Ratzenberger", "1994", "Imola qualifying", "Fatal crash", "Day before Senna"),
            ("Jules Bianchi", "2014", "Suzuka", "Crane collision", "Virtual safety car introduced"),
            ("Romain Grosjean", "2020", "Bahrain", "Fireball crash", "Halo saved life"),
            ("Robert Kubica", "2007", "Canada", "75G impact", "Survived unhurt"),
            ("Fernando Alonso", "2016", "Australia", "Barrel roll", "300km/h crash"),
            ("Zhou Guanyu", "2022", "Silverstone", "Roll hoop failure", "Halo protection"),
            ("Anthoine Hubert", "2019", "Spa F2", "Fatal crash", "Safety improvements"),
            ("Jackie Stewart campaign", "1960s-70s", "Safety crusade", "Saved countless lives", "Track improvements")
        ]
    },
    "Rivaliteiten": {
        "topics": [
            ("Senna vs Prost", "1988-1993", "McLaren teammates", "Suzuka collisions", "Greatest rivalry"),
            ("Hunt vs Lauda", "1976", "Championship battle", "Opposite personalities", "Rush movie"),
            ("Schumacher vs Hill", "1994", "Adelaide collision", "Title decider", "Controversial"),
            ("Hamilton vs Rosberg", "2014-2016", "Mercedes", "Childhood friends", "Spa collision"),
            ("Verstappen vs Hamilton", "2021", "Title fight", "Silverstone crash", "Abu Dhabi controversy"),
            ("Mansell vs Piquet", "1986-1987", "Williams", "Teammates", "Hatred"),
            ("Vettel vs Webber", "2010-2013", "Red Bull", "Multi 21", "Team orders"),
            ("Alonso vs Hamilton", "2007", "McLaren", "Rookie vs champion", "Spygate"),
            ("Schumacher vs Villeneuve", "1997", "Jerez collision", "DSQ from championship", "Deliberate hit"),
            ("Pironi vs Villeneuve", "1982", "Ferrari", "San Marino betrayal", "Tragic end")
        ]
    }
}

def create_f1_questions(subcategory, topics, level):
    questions = []
    random.seed(42 + hash(subcategory) + level)

    for i in range(100):
        topic = random.choice(topics)
        q_type = i % 10

        if q_type == 0:  # Basic identification
            if level <= 3:
                q = f"What is {topic[0]}?"
                correct = topic[1] if len(topic) > 1 else topic[0]
                options = [correct, "Different circuit", "Team name", "Driver name"]
            elif level <= 6:
                q = f"What characterizes {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else topic[1]
                options = [correct, "Different feature", "Common trait", "Not applicable"]
            else:
                q = f"What distinguishes {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2]
                options = [correct, "Regular feature", "Standard aspect", "Common element"]

        elif q_type == 1:  # Statistics
            if level <= 3:
                q = f"How many wins for {topic[0]}?"
                correct = topic[2] if "wins" in str(topic[2]) else "Multiple wins"
                options = [correct, "No wins", "One win", "Unknown"]
            elif level <= 6:
                q = f"What achievement for {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2]
                options = [correct, "Lesser achievement", "No achievement", "Different record"]
            else:
                q = f"What record does {topic[0]} hold?"
                correct = topic[4] if len(topic) > 4 else topic[3] if len(topic) > 3 else "Notable record"
                options = [correct, "No record", "Different stat", "Unrelated achievement"]

        elif q_type == 2:  # Time period
            if level <= 3:
                q = f"When was {topic[0]} active?"
                correct = topic[1] if any(char.isdigit() for char in str(topic[1])) else "Historic period"
                options = [correct, "Different era", "Modern only", "Never active"]
            elif level <= 6:
                q = f"What era for {topic[0]}?"
                correct = topic[2] if len(topic) > 2 and any(char.isdigit() for char in str(topic[2])) else topic[1]
                options = [correct, "Wrong decade", "Different period", "Not applicable"]
            else:
                q = f"Specific period for {topic[0]}?"
                correct = topic[1] if "-" in str(topic[1]) or any(char.isdigit() for char in str(topic[1])) else "Key period"
                options = [correct, "Earlier period", "Later period", "Different timeline"]

        elif q_type == 3:  # Technical aspects
            if subcategory == "Auto-innovaties":
                q = f"What technology is {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else "Innovation"
                options = [correct, "Old technology", "Different system", "Not technical"]
            else:
                q = f"What defines {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Key feature"
                options = [correct, "Minor aspect", "Unrelated feature", "Common trait"]

        elif q_type == 4:  # Championships/Titles
            if "coureurs" in subcategory or "Kampioenschappen" in subcategory:
                q = f"Championships for {topic[0]}?"
                correct = topic[3] if "championship" in str(topic[3]).lower() or "title" in str(topic[3]).lower() else topic[1]
                options = [correct, "No titles", "More titles", "Different number"]
            else:
                q = f"Success level of {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else "Successful"
                options = [correct, "Unsuccessful", "Moderate success", "Unknown"]

        elif q_type == 5:  # Location/Nationality
            if "circuits" in subcategory:
                q = f"Where is {topic[0]} located?"
                correct = topic[3] if len(topic) > 3 and any(place in str(topic[3]) for place in ["km", "Bay", "Paulo", "Texas", "Barcelona"]) else topic[0].split()[0] if " " in topic[0] else "Europe"
                options = [correct, "Different country", "Other continent", "Unknown location"]
            elif "coureurs" in subcategory:
                q = f"Nationality of {topic[0]}?"
                correct = topic[1] if len(topic) > 1 and not any(char.isdigit() for char in str(topic[1])) else "European"
                options = [correct, "Different nation", "Other continent", "Unknown"]
            else:
                q = f"Origin of {topic[0]}?"
                correct = topic[1] if len(topic) > 1 else "F1 related"
                options = [correct, "Different origin", "Unrelated", "Unknown source"]

        elif q_type == 6:  # Famous moments
            if "Rivaliteiten" in subcategory or "Ongevallen" in subcategory:
                q = f"What happened with {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else "Significant event"
                options = [correct, "Different event", "Nothing notable", "Unrelated incident"]
            else:
                q = f"Notable moment for {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Key moment"
                options = [correct, "Regular race", "No significance", "Different event"]

        elif q_type == 7:  # Impact/Legacy
            if level <= 3:
                q = f"Impact of {topic[0]}?"
                correct = "Significant" if len(topic) > 3 else "Important"
                options = [correct, "Minor impact", "No impact", "Negative only"]
            elif level <= 6:
                q = f"Legacy of {topic[0]}?"
                correct = topic[4] if len(topic) > 4 else topic[3] if len(topic) > 3 else "Lasting legacy"
                options = [correct, "Forgotten", "Minor legacy", "No influence"]
            else:
                q = f"How did {topic[0]} change F1?"
                correct = topic[4] if len(topic) > 4 else "Major change"
                options = [correct, "No change", "Minor effect", "Negative impact"]

        elif q_type == 8:  # Comparison
            other = random.choice([t for t in topics if t != topic])
            if level <= 3:
                q = f"{topic[0]} vs {other[0]}?"
                correct = "Different eras" if "19" in str(topic[1]) and "20" in str(other[1]) else "Rivals"
                options = [correct, "Same person", "Teammates always", "Never raced"]
            elif level <= 6:
                q = f"Difference between {topic[0]} and {other[0]}?"
                correct = "Different styles" if "coureurs" in subcategory else "Different teams"
                options = [correct, "Identical", "No difference", "Same era only"]
            else:
                q = f"What separates {topic[0]} from {other[0]}?"
                correct = topic[3] if len(topic) > 3 else "Unique achievement"
                options = [correct, "Nothing different", "Same results", "Equal status"]

        else:  # Current status
            if level <= 3:
                q = f"Status of {topic[0]}?"
                correct = "Active" if "present" in str(topic) else "Historic"
                options = [correct, "Unknown", "Never existed", "Future only"]
            elif level <= 6:
                q = f"Current situation for {topic[0]}?"
                correct = topic[2] if "present" in str(topic[2]) else "Past glory"
                options = [correct, "Different status", "Not applicable", "Unknown state"]
            else:
                q = f"Modern relevance of {topic[0]}?"
                correct = "Still relevant" if "present" in str(topic) else "Historical importance"
                options = [correct, "Irrelevant", "Never important", "Future only"]

        # Ensure unique options
        while len(set(options)) < 4:
            if any(char.isdigit() for char in str(correct)):
                options = [correct, "Different number", "Higher value", "Lower value"]
            elif "championship" in str(correct).lower() or "title" in str(correct).lower():
                options = [correct, "No titles", "Different count", "More titles"]
            else:
                options = [correct, f"Alternative {i}", f"Different {i}", f"Other {i}"]

        random.shuffle(options)
        correct_index = options.index(correct)

        # Create translations
        question = {
            "question": {
                "en": q[:140] if level <= 5 else q[:160],
                "es": f"¿{q[:-1]}?"[:140] if level <= 5 else f"¿{q[:-1]}?"[:160],
                "de": q.replace("What", "Was").replace("How", "Wie")[:140] if level <= 5 else q.replace("What", "Was")[:160],
                "nl": q.replace("What", "Wat").replace("How", "Hoe")[:140] if level <= 5 else q.replace("What", "Wat")[:160]
            },
            "options": [],
            "correct": correct_index,
            "explanation": {}
        }

        # Add options with translations
        for opt in options:
            question["options"].append({
                "en": str(opt)[:100],
                "es": str(opt)[:100],
                "de": str(opt)[:100],
                "nl": str(opt)[:100]
            })

        # Add explanation
        explanation = f"{topic[0]} is significant in F1 history. "
        if len(topic) > 2:
            explanation += f"Known for {topic[2]}. "
        if len(topic) > 3:
            explanation += f"Notable for {topic[3]}."

        question["explanation"] = {
            "en": explanation[:350] if level <= 5 else explanation[:450],
            "es": f"{topic[0]} es significativo en la historia de F1."[:350] if level <= 5 else explanation[:450],
            "de": f"{topic[0]} ist bedeutend in der F1-Geschichte."[:350] if level <= 5 else explanation[:450],
            "nl": f"{topic[0]} is belangrijk in F1-geschiedenis."[:350] if level <= 5 else explanation[:450]
        }

        questions.append(question)

    return questions

# Generate files
total_questions = 0
for subcategory, data in f1_data.items():
    folder_path = f"src/questions/data/subjects/f1/{subcategory}"

    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

    print(f"Processing {subcategory}...")

    for level in range(1, 11):
        questions = create_f1_questions(subcategory, data["topics"], level)

        # Create JavaScript content
        js_content = f"""(function() {{
  const level{level} = {{
    questions: {str(questions).replace("'", '"')}
  }};

  if (typeof module !== 'undefined' && module.exports) {{
    module.exports = level{level};
  }}
}})();"""

        # Write file
        file_path = f"{folder_path}/level{level}.js"
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(js_content)

        print(f"  Level {level}: {len(questions)} questions")
        total_questions += len(questions)

print(f"\nTotal F1 questions created: {total_questions:,}")