import os
import re

base_path = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-buildings'

questions = [
    ("What is architecture?", "Design and construction of buildings", "Interior decoration", "Landscaping", "Painting", "Architecture is the art and science of designing and constructing buildings and structures."),
    ("What is a landmark?", "Notable building or structure", "Street sign", "Border marker", "Map symbol", "A landmark is a recognizable and notable building, structure, or geographical feature."),
    ("What does UNESCO stand for?", "United Nations Educational, Scientific and Cultural Organization", "Universal Education System", "United Nations Economy Council", "Urban Environmental Safety Committee", "UNESCO designates World Heritage Sites of cultural and natural significance."),
    ("What is a World Heritage Site?", "Protected site of cultural or natural importance", "Tourist attraction", "Government building", "Museum", "UNESCO World Heritage Sites are places of outstanding universal value to humanity."),
    ("What is restoration?", "Returning building to original condition", "Demolition", "New construction", "Painting", "Restoration involves repairing and preserving historical buildings to their original state."),
    ("What is Gothic architecture known for?", "Pointed arches and flying buttresses", "Domes", "Columns", "Pyramids", "Gothic architecture features pointed arches, ribbed vaults, and flying buttresses."),
    ("What is Baroque architecture?", "Ornate, dramatic style", "Minimalist style", "Industrial style", "Modern style", "Baroque architecture is characterized by ornate detail, grandeur, and drama."),
    ("What is modern architecture?", "Clean lines and minimal ornamentation", "Medieval castles", "Ancient temples", "Victorian mansions", "Modern architecture emphasizes function, clean lines, and minimal decoration."),
    ("What is a facade?", "Front face of a building", "Foundation", "Roof", "Interior wall", "The facade is the principal front face or exterior of a building."),
    ("What is preservation?", "Protecting historic structures", "Demolition", "New development", "Renovation", "Historic preservation protects buildings of historical or cultural significance."),
    ("What is adaptive reuse?", "Converting old buildings to new purposes", "Demolition", "Exact restoration", "New construction", "Adaptive reuse repurposes historic buildings for contemporary uses."),
    ("What is a dome?", "Hemispherical roof structure", "Flat roof", "Pointed roof", "No roof", "A dome is a hemispherical or rounded vault forming a roof or ceiling."),
    ("What are columns?", "Vertical structural supports", "Horizontal beams", "Roof tiles", "Windows", "Columns are vertical structural elements supporting weight above them."),
    ("What is symmetry in architecture?", "Balanced, mirrored design", "Asymmetrical design", "Random placement", "Curved lines", "Architectural symmetry creates balance through mirrored or proportional elements."),
    ("What is a minaret?", "Tower at a mosque", "Church steeple", "Palace tower", "Castle turret", "A minaret is a tower at a mosque from which Muslims are called to prayer."),
    ("What is a spire?", "Tall pointed structure on a building", "Foundation", "Basement", "Ground floor", "A spire is a tall, tapering pointed structure on top of a building, especially a church."),
    ("What is Romanesque architecture?", "Round arches and thick walls", "Pointed Gothic arches", "Glass and steel", "Wooden structures", "Romanesque architecture features rounded arches, thick walls, and sturdy pillars."),
    ("What is a courtyard?", "Open space surrounded by walls", "Rooftop", "Basement", "Hallway", "A courtyard is an open area surrounded by walls or buildings."),
    ("What is a foundation?", "Base structure supporting a building", "Roof", "Walls", "Windows", "The foundation is the load-bearing base that supports a structure."),
    ("What makes a building iconic?", "Distinctive design and cultural significance", "Size only", "Age only", "Color", "Iconic buildings have distinctive design and cultural importance recognized worldwide.")
]

categories = [
    "Big Ben", "Burj Khalifa", "Colosseum", "Eiffel Tower",
    "Empire State Building", "Great Wall of China", "Machu Picchu",
    "Petra", "Pyramids of Giza", "Sagrada Familia",
    "Sydney Opera House", "Taj Mahal"
]

for category in categories:
    category_path = os.path.join(base_path, category)
    for level in range(1, 11):
        filepath = os.path.join(category_path, f'level{level}.js')
        if not os.path.exists(filepath):
            continue
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        additions = ""
        for q, o1, o2, o3, o4, exp in questions:
            additions += f"""    }},
    {{
      question: {{en: "{q}", es: "{q}", de: "{q}", nl: "{q}"}},
      options: [
        {{en: "{o1}", es: "{o1}", de: "{o1}", nl: "{o1}"}},
        {{en: "{o2}", es: "{o2}", de: "{o2}", nl: "{o2}"}},
        {{en: "{o3}", es: "{o3}", de: "{o3}", nl: "{o3}"}},
        {{en: "{o4}", es: "{o4}", de: "{o4}", nl: "{o4}"}}
      ],
      correct: 0,
      explanation: {{en: "{exp}", es: "{exp}", de: "{exp}", nl: "{exp}"}}
"""
        content = re.sub(r'(\s+}\s+)\](\s+};)', additions + '\n      }\n    ]\n  };', content)
        with open(filepath, 'w', encoding='utf-8', errors='ignore') as f:
            f.write(content)
        print(f"{category} level{level}: added 20 questions")
print("Famous Buildings expansion complete!")
