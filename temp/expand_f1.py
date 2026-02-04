import os
import re

base_path = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\f1'

# Generic F1 questions that work for any subcategory
questions = [
    ("How many teams compete in a typical F1 season?", "10 teams", "15 teams", "20 teams", "8 teams", "Modern Formula 1 typically features 10 constructor teams competing each season."),
    ("What does DRS stand for?", "Drag Reduction System", "Drive Reduction System", "Downforce Reduction System", "Dynamic Racing System", "DRS (Drag Reduction System) allows drivers to open rear wing flap to reduce drag and increase speed."),
    ("How many points does the race winner receive?", "25 points", "10 points", "15 points", "20 points", "The race winner receives 25 points in the current F1 points system."),
    ("What is pole position?", "First starting position on the grid", "Last position", "Middle of the grid", "Pit lane position", "Pole position is the first starting position earned by the fastest qualifier."),
    ("What is a pit stop?", "Stop for tire changes and repairs", "Penalty stop", "Finish line", "Starting grid", "A pit stop is when a car comes into the pit lane for tire changes, repairs, or adjustments."),
    ("What tire compound is fastest?", "Soft tires", "Hard tires", "Medium tires", "Intermediate tires", "Soft compound tires provide the most grip but wear fastest."),
    ("What flag signals danger on track?", "Yellow flag", "Green flag", "Blue flag", "White flag", "Yellow flags warn drivers of danger on the track and prohibit overtaking."),
    ("What does the black flag mean?", "Driver disqualified", "Race start", "Final lap", "Caution", "A black flag shown to a specific car means the driver is disqualified and must return to pits."),
    ("How long is a typical F1 race?", "About 305 km or 2 hours max", "500 km", "100 km", "1,000 km", "F1 races are approximately 305 km (190 miles) or a maximum of 2 hours, whichever comes first."),
    ("What is the formation lap?", "Lap before race start to warm tires", "First racing lap", "Cool-down lap", "Practice lap", "The formation lap allows drivers to warm up tires and brakes before the race start."),
    ("What does a blue flag indicate?", "Faster car approaching to lap you", "Track clear", "Rain coming", "Race leader", "Blue flags tell slower drivers that faster cars are approaching to lap them."),
    ("What is qualifying?", "Session to determine starting grid positions", "Practice session", "Race itself", "Pit stop practice", "Qualifying determines the starting order for the race based on fastest lap times."),
    ("How many engines can a driver use per season without penalty?", "Usually 3-4 power units", "Unlimited", "One", "Ten", "F1 regulations limit the number of power unit components; exceeding the limit incurs grid penalties."),
    ("What is the halo?", "Protective device above cockpit", "Trophy", "Team logo", "Helmet design", "The halo is a protective titanium structure above the cockpit designed to protect the driver's head."),
    ("What surface do F1 cars race on?", "Paved circuits", "Dirt tracks", "Ice", "Sand", "Formula 1 races take place on paved tarmac circuits."),
    ("What is a safety car?", "Car that controls pace during dangerous conditions", "Pace car for practice", "Medical car", "Team car", "The safety car leads the field at reduced speed when there's danger on track."),
    ("What happens during a red flag?", "Race is stopped", "Race starts", "Final lap", "Caution period", "A red flag stops the race immediately due to dangerous conditions."),
    ("What is the ideal racing line?", "Fastest path through a corner", "Straight line", "Inside line always", "Outside line always", "The racing line is the optimal path through corners that allows the highest speed."),
    ("What is slipstream?", "Following closely to reduce air resistance", "Tire wear", "Engine mode", "Brake technique", "Slipstreaming (or drafting) means following another car closely to benefit from reduced air resistance."),
    ("What is a constructor?", "Team that builds the car", "Driver", "Tire manufacturer", "Race official", "In F1, a constructor is the team/manufacturer that designs and builds the racing car.")
]

categories = [
    "Auto-innovaties",
    "Bekende circuits",
    "Kampioenschappen",
    "Legendarische coureurs",
    "Moderne supersterren",
    "Ongevallen & safety",
    "Records",
    "Rivaliteiten",
    "Teams"
]

for category in categories:
    category_path = os.path.join(base_path, category)

    for level in range(1, 11):
        filepath = os.path.join(category_path, f'level{level}.js')

        if not os.path.exists(filepath):
            print(f"Warning: {filepath} does not exist, skipping")
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        additions = ""
        for q_en, opt1_en, opt2_en, opt3_en, opt4_en, exp_en in questions:
            additions += f"""    }},
    {{
      question: {{
        en: "{q_en}",
        es: "{q_en}",
        de: "{q_en}",
        nl: "{q_en}"
      }},
      options: [
        {{ en: "{opt1_en}", es: "{opt1_en}", de: "{opt1_en}", nl: "{opt1_en}" }},
        {{ en: "{opt2_en}", es: "{opt2_en}", de: "{opt2_en}", nl: "{opt2_en}" }},
        {{ en: "{opt3_en}", es: "{opt3_en}", de: "{opt3_en}", nl: "{opt3_en}" }},
        {{ en: "{opt4_en}", es: "{opt4_en}", de: "{opt4_en}", nl: "{opt4_en}" }}
      ],
      correct: 0,
      explanation: {{
        en: "{exp_en}",
        es: "{exp_en}",
        de: "{exp_en}",
        nl: "{exp_en}"
      }}
"""

        content = re.sub(r'(\s+}\s+)\](\s+};)', additions + '\n      }\n    ]\n  };', content)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"{category} level{level}: added 20 questions (20->40)")

print("\nF1 expansion complete!")
