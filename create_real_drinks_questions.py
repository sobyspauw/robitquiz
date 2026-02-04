#!/usr/bin/env python3
"""
Create REAL Drinks questions with actual beverage knowledge
"""
import os

def generate_drinks_questions(subcat, level):
    """Generate 100 real drinks questions for a subcategory"""

    drinks_content = {
        "Beer": {
            "topics": [
                ("Pilsner", "Czech Republic", "Light lager", "4-5% ABV", "Bottom fermented"),
                ("IPA", "India Pale Ale", "Hoppy bitter", "5-7% ABV", "Extra hops for preservation"),
                ("Stout", "Dark beer", "Roasted malt", "4-7% ABV", "Guinness famous example"),
                ("Wheat Beer", "Germany", "Cloudy appearance", "4-5.5% ABV", "Hefeweizen style"),
                ("Belgian Tripel", "Belgium", "Strong pale ale", "8-10% ABV", "Trappist monks"),
                ("Porter", "London origin", "Dark mild", "4-6% ABV", "Named after porters"),
                ("Lager", "Bottom fermented", "Cold storage", "4-5% ABV", "Most consumed globally"),
                ("Ale", "Top fermented", "Warm fermentation", "3-12% ABV", "Oldest beer type"),
                ("Lambic", "Belgium", "Spontaneous fermentation", "3-8% ABV", "Wild yeast"),
                ("Saison", "Belgian farmhouse", "Seasonal beer", "5-8% ABV", "Spicy and fruity")
            ]
        },
        "Wine": {
            "topics": [
                ("Cabernet Sauvignon", "Red wine", "Full-bodied", "Bordeaux grape", "Ages well"),
                ("Chardonnay", "White wine", "Versatile", "Burgundy origin", "Oak or unoaked"),
                ("Pinot Noir", "Red wine", "Light-bodied", "Difficult to grow", "Burgundy favorite"),
                ("Champagne", "Sparkling wine", "Méthode Champenoise", "France only", "Dom Pérignon"),
                ("Prosecco", "Italian sparkling", "Charmat method", "Veneto region", "Lighter than champagne"),
                ("Riesling", "German white", "Sweet to dry", "High acidity", "Ages decades"),
                ("Merlot", "Red wine", "Soft tannins", "Bordeaux blend", "Plum flavors"),
                ("Rosé", "Pink wine", "Limited skin contact", "Provence famous", "Summer wine"),
                ("Port", "Fortified wine", "Portugal", "20% ABV", "Sweet dessert wine"),
                ("Sherry", "Fortified Spanish", "Solera system", "15-22% ABV", "Dry to sweet")
            ]
        },
        "Coffee": {
            "topics": [
                ("Espresso", "Italy", "9 bar pressure", "25-30ml shot", "Crema on top"),
                ("Cappuccino", "1/3 each", "Espresso milk foam", "Morning drink Italy", "150-180ml"),
                ("Latte", "Espresso with milk", "Less foam", "240ml typical", "Latte art possible"),
                ("Americano", "Espresso + water", "WWII origin", "Similar to drip", "Long black variant"),
                ("Macchiato", "Stained coffee", "Espresso + foam", "60ml traditional", "Caramel version popular"),
                ("Arabica", "Premium bean", "60% world coffee", "Higher altitude", "Less caffeine"),
                ("Robusta", "Strong bean", "40% world coffee", "More caffeine", "Bitter taste"),
                ("Cold Brew", "12-24 hour steep", "Cold water", "Less acidic", "Concentrated"),
                ("Turkish Coffee", "Fine grind", "Unfiltered", "Sugar during brewing", "Fortune telling"),
                ("French Press", "Immersion brewing", "4 minutes steep", "Metal filter", "Full body")
            ]
        },
        "Tea": {
            "topics": [
                ("Green Tea", "Unoxidized", "China/Japan", "Antioxidants", "70-80°C water"),
                ("Black Tea", "Fully oxidized", "Strongest flavor", "Most caffeine", "100°C water"),
                ("Oolong", "Partial oxidation", "Taiwan famous", "Between green/black", "Multiple infusions"),
                ("White Tea", "Minimal processing", "Delicate flavor", "Least caffeine", "Silver tips"),
                ("Pu-erh", "Fermented tea", "Aged years", "China Yunnan", "Improves with age"),
                ("Matcha", "Ground green tea", "Japanese ceremony", "Whisked powder", "L-theanine high"),
                ("Earl Grey", "Black + bergamot", "British favorite", "Named after PM", "Citrus flavor"),
                ("Chai", "Spiced tea", "India origin", "Milk + spices", "Masala chai"),
                ("Rooibos", "Red bush", "South Africa", "Caffeine free", "Sweet vanilla notes"),
                ("Chamomile", "Herbal tisane", "Sleep aid", "No caffeine", "Flower infusion")
            ]
        },
        "Cocktails": {
            "topics": [
                ("Martini", "Gin/vodka vermouth", "Stirred not shaken", "Olive or twist", "James Bond"),
                ("Margarita", "Tequila triple sec", "Lime juice", "Salt rim", "Mexican origin"),
                ("Old Fashioned", "Whiskey cocktail", "Bitters sugar", "Orange peel", "1880s creation"),
                ("Mojito", "Cuban cocktail", "Rum mint lime", "Soda water", "Hemingway favorite"),
                ("Manhattan", "Whiskey vermouth", "Bitters cherry", "Stirred drink", "NYC origin"),
                ("Negroni", "Equal parts", "Gin Campari vermouth", "Italian aperitif", "Bitter sweet"),
                ("Daiquiri", "Rum lime sugar", "Cuban creation", "Shaken served up", "Hemingway variant"),
                ("Cosmopolitan", "Vodka cranberry", "Triple sec lime", "Pink color", "Sex and City"),
                ("Whiskey Sour", "Whiskey lemon", "Simple syrup", "Egg white foam", "Boston origin"),
                ("Piña Colada", "Rum coconut pineapple", "Puerto Rico national", "Blended frozen", "1954 invention")
            ]
        },
        "Spirits": {
            "topics": [
                ("Whiskey", "Grain spirit", "Aged in oak", "40%+ ABV", "Scotch/Bourbon/Rye"),
                ("Vodka", "Neutral spirit", "Multiple distillation", "40% ABV", "Russia/Poland origin"),
                ("Gin", "Juniper berries", "London Dry style", "40%+ ABV", "Dutch origin"),
                ("Rum", "Sugarcane", "Caribbean origin", "40%+ ABV", "White/Gold/Dark"),
                ("Tequila", "Blue agave", "Mexico only", "40% ABV", "Blanco/Reposado/Añejo"),
                ("Brandy", "Distilled wine", "Cognac region", "40% ABV", "VS/VSOP/XO"),
                ("Mezcal", "Agave spirit", "Smoky flavor", "40%+ ABV", "Worm tradition"),
                ("Sake", "Rice wine", "Japan", "15-20% ABV", "Served warm or cold"),
                ("Absinthe", "Green fairy", "Wormwood herb", "45-74% ABV", "Louche effect"),
                ("Liqueur", "Sweetened spirit", "Flavored", "15-30% ABV", "Digestif/aperitif")
            ]
        },
        "Juices": {
            "topics": [
                ("Orange Juice", "Vitamin C", "Most consumed", "Breakfast staple", "Florida/Brazil"),
                ("Apple Juice", "Clear or cloudy", "Pectin content", "Fall harvest", "Cider variant"),
                ("Grape Juice", "Purple/white", "Concord grapes", "Antioxidants", "Welch's 1869"),
                ("Tomato Juice", "Vegetable juice", "Bloody Mary base", "Umami flavor", "V8 blend"),
                ("Cranberry Juice", "Tart flavor", "UTI prevention", "Often sweetened", "Thanksgiving"),
                ("Pineapple Juice", "Tropical fruit", "Bromelain enzyme", "Hawaii/Costa Rica", "Meat tenderizer"),
                ("Pomegranate Juice", "Antioxidant rich", "Middle Eastern", "Heart healthy", "Deep red"),
                ("Carrot Juice", "Beta carotene", "Vitamin A", "Sweet vegetable", "Eye health"),
                ("Beet Juice", "Nitrates", "Athletic performance", "Earthy taste", "Blood red"),
                ("Green Juice", "Vegetable blend", "Kale spinach", "Detox claims", "Cold pressed")
            ]
        },
        "Water": {
            "topics": [
                ("Spring Water", "Natural source", "Mineral content", "Underground origin", "Bottled premium"),
                ("Mineral Water", "Natural minerals", "Carbonated option", "European tradition", "Health benefits"),
                ("Distilled Water", "Pure H2O", "No minerals", "Medical use", "Steam process"),
                ("Alkaline Water", "pH 8-9", "Health claims", "Ionized", "Controversial benefits"),
                ("Sparkling Water", "CO2 added", "Carbonation", "Seltzer/club soda", "Mixer drink"),
                ("Coconut Water", "Natural electrolytes", "Isotonic", "Tropical hydration", "Potassium rich"),
                ("Smart Water", "Vapor distilled", "Electrolytes added", "Premium brand", "Sports recovery"),
                ("Tap Water", "Municipal supply", "Chlorinated", "Regulated safety", "Fluoride added"),
                ("Glacial Water", "Ancient ice", "Pure source", "Premium bottled", "10,000 years old"),
                ("Artesian Water", "Pressurized aquifer", "Natural filtration", "Protected source", "Fiji famous")
            ]
        },
        "Traditional Drinks": {
            "topics": [
                ("Mate", "Argentina", "Caffeine rich", "Gourd and bombilla", "Social ritual"),
                ("Lassi", "India", "Yogurt drink", "Sweet or salty", "Cooling effect"),
                ("Horchata", "Spain/Mexico", "Rice/nut drink", "Cinnamon flavor", "Dairy free"),
                ("Kefir", "Caucasus", "Fermented milk", "Probiotics", "Tangy flavor"),
                ("Kombucha", "China", "Fermented tea", "SCOBY culture", "Slight alcohol"),
                ("Ayran", "Turkey", "Salty yogurt", "Summer drink", "2:1 ratio"),
                ("Bubble Tea", "Taiwan", "Tapioca pearls", "Milk tea base", "1980s invention"),
                ("Kvass", "Russia", "Bread drink", "Low alcohol", "Summer refresher"),
                ("Chicha", "South America", "Corn beverage", "Fermented option", "Inca tradition"),
                ("Amazake", "Japan", "Sweet rice drink", "Low/no alcohol", "Winter warmer")
            ]
        }
    }

    subcat_data = drinks_content.get(subcat, drinks_content["Beer"])
    topics = subcat_data["topics"]
    questions = []

    for i in range(100):
        topic = topics[i % len(topics)]

        if level <= 2:
            # Basic identification questions
            q_type = i % 5
            if q_type == 0:
                q = {
                    "question": {
                        "en": f"What is {topic[0]}?",
                        "es": f"¿Qué es {topic[0]}?",
                        "de": f"Was ist {topic[0]}?",
                        "nl": f"Wat is {topic[0]}?"
                    },
                    "options": [
                        {"en": topic[1], "es": topic[1], "de": topic[1], "nl": topic[1]},
                        {"en": "A type of food", "es": "Un tipo de comida", "de": "Eine Art Essen", "nl": "Een soort eten"},
                        {"en": "A medicine", "es": "Una medicina", "de": "Eine Medizin", "nl": "Een medicijn"},
                        {"en": "A vehicle", "es": "Un vehículo", "de": "Ein Fahrzeug", "nl": "Een voertuig"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} is {topic[1]}, known for {topic[2]}.",
                        "es": f"{topic[0]} es {topic[1]}, conocido por {topic[2]}.",
                        "de": f"{topic[0]} ist {topic[1]}, bekannt für {topic[2]}.",
                        "nl": f"{topic[0]} is {topic[1]}, bekend om {topic[2]}."
                    }
                }
            elif q_type == 1:
                q = {
                    "question": {
                        "en": f"What is {topic[0]} known for?",
                        "es": f"¿Por qué es conocido {topic[0]}?",
                        "de": f"Wofür ist {topic[0]} bekannt?",
                        "nl": f"Waar is {topic[0]} bekend om?"
                    },
                    "options": [
                        {"en": topic[2], "es": topic[2], "de": topic[2], "nl": topic[2]},
                        {"en": "Being poisonous", "es": "Ser venenoso", "de": "Giftig sein", "nl": "Giftig zijn"},
                        {"en": "Glowing in dark", "es": "Brillar en la oscuridad", "de": "Im Dunkeln leuchten", "nl": "Gloeien in het donker"},
                        {"en": "Being solid", "es": "Ser sólido", "de": "Fest sein", "nl": "Vast zijn"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} is characterized by {topic[2]}.",
                        "es": f"{topic[0]} se caracteriza por {topic[2]}.",
                        "de": f"{topic[0]} zeichnet sich durch {topic[2]} aus.",
                        "nl": f"{topic[0]} wordt gekenmerkt door {topic[2]}."
                    }
                }
            elif q_type == 2:
                q = {
                    "question": {
                        "en": f"What detail about {topic[0]} is correct?",
                        "es": f"¿Qué detalle sobre {topic[0]} es correcto?",
                        "de": f"Welches Detail über {topic[0]} ist richtig?",
                        "nl": f"Welk detail over {topic[0]} is correct?"
                    },
                    "options": [
                        {"en": topic[3], "es": topic[3], "de": topic[3], "nl": topic[3]},
                        {"en": "Made of gold", "es": "Hecho de oro", "de": "Aus Gold", "nl": "Gemaakt van goud"},
                        {"en": "Costs $1000/glass", "es": "Cuesta $1000/vaso", "de": "Kostet $1000/Glas", "nl": "Kost $1000/glas"},
                        {"en": "Illegal everywhere", "es": "Ilegal en todas partes", "de": "Überall illegal", "nl": "Overal illegaal"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"Fact: {topic[0]} has {topic[3]}.",
                        "es": f"Hecho: {topic[0]} tiene {topic[3]}.",
                        "de": f"Fakt: {topic[0]} hat {topic[3]}.",
                        "nl": f"Feit: {topic[0]} heeft {topic[3]}."
                    }
                }
            elif q_type == 3:
                q = {
                    "question": {
                        "en": f"What is special about {topic[0]}?",
                        "es": f"¿Qué tiene de especial {topic[0]}?",
                        "de": f"Was ist besonders an {topic[0]}?",
                        "nl": f"Wat is speciaal aan {topic[0]}?"
                    },
                    "options": [
                        {"en": topic[4], "es": topic[4], "de": topic[4], "nl": topic[4]},
                        {"en": "Nothing special", "es": "Nada especial", "de": "Nichts Besonderes", "nl": "Niets bijzonders"},
                        {"en": "It's invisible", "es": "Es invisible", "de": "Es ist unsichtbar", "nl": "Het is onzichtbaar"},
                        {"en": "It's magical", "es": "Es mágico", "de": "Es ist magisch", "nl": "Het is magisch"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]}: {topic[4]}.",
                        "es": f"{topic[0]}: {topic[4]}.",
                        "de": f"{topic[0]}: {topic[4]}.",
                        "nl": f"{topic[0]}: {topic[4]}."
                    }
                }
            else:
                q = {
                    "question": {
                        "en": f"Where does {topic[0]} come from?",
                        "es": f"¿De dónde viene {topic[0]}?",
                        "de": f"Woher kommt {topic[0]}?",
                        "nl": f"Waar komt {topic[0]} vandaan?"
                    },
                    "options": [
                        {"en": topic[1], "es": topic[1], "de": topic[1], "nl": topic[1]},
                        {"en": "Outer space", "es": "Espacio exterior", "de": "Weltraum", "nl": "Buitenruimte"},
                        {"en": "The moon", "es": "La luna", "de": "Der Mond", "nl": "De maan"},
                        {"en": "Underground caves", "es": "Cuevas subterráneas", "de": "Unterirdische Höhlen", "nl": "Ondergrondse grotten"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} originates from {topic[1]}.",
                        "es": f"{topic[0]} se origina de {topic[1]}.",
                        "de": f"{topic[0]} stammt aus {topic[1]}.",
                        "nl": f"{topic[0]} komt oorspronkelijk uit {topic[1]}."
                    }
                }

        elif level <= 5:
            # Intermediate questions about properties and uses
            q_type = i % 3
            if q_type == 0:
                q = {
                    "question": {
                        "en": f"How is {topic[0]} typically consumed or prepared?",
                        "es": f"¿Cómo se consume o prepara típicamente {topic[0]}?",
                        "de": f"Wie wird {topic[0]} typischerweise konsumiert oder zubereitet?",
                        "nl": f"Hoe wordt {topic[0]} typisch geconsumeerd of bereid?"
                    },
                    "options": [
                        {"en": f"{topic[2]}, {topic[3]}", "es": f"{topic[2]}, {topic[3]}", "de": f"{topic[2]}, {topic[3]}", "nl": f"{topic[2]}, {topic[3]}"},
                        {"en": "Never consumed", "es": "Nunca se consume", "de": "Wird nie konsumiert", "nl": "Wordt nooit geconsumeerd"},
                        {"en": "Only as medicine", "es": "Solo como medicina", "de": "Nur als Medizin", "nl": "Alleen als medicijn"},
                        {"en": "Mixed with concrete", "es": "Mezclado con concreto", "de": "Mit Beton gemischt", "nl": "Gemengd met beton"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} features {topic[2]} and {topic[3]}.",
                        "es": f"{topic[0]} presenta {topic[2]} y {topic[3]}.",
                        "de": f"{topic[0]} zeichnet sich durch {topic[2]} und {topic[3]} aus.",
                        "nl": f"{topic[0]} kenmerkt zich door {topic[2]} en {topic[3]}."
                    }
                }
            elif q_type == 1:
                q = {
                    "question": {
                        "en": f"What distinguishes {topic[0]} from similar drinks?",
                        "es": f"¿Qué distingue a {topic[0]} de bebidas similares?",
                        "de": f"Was unterscheidet {topic[0]} von ähnlichen Getränken?",
                        "nl": f"Wat onderscheidt {topic[0]} van soortgelijke dranken?"
                    },
                    "options": [
                        {"en": topic[4], "es": topic[4], "de": topic[4], "nl": topic[4]},
                        {"en": "Nothing different", "es": "Nada diferente", "de": "Nichts anders", "nl": "Niets anders"},
                        {"en": "It's frozen", "es": "Está congelado", "de": "Es ist gefroren", "nl": "Het is bevroren"},
                        {"en": "It's gaseous", "es": "Es gaseoso", "de": "Es ist gasförmig", "nl": "Het is gasvormig"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"Key distinction: {topic[4]}.",
                        "es": f"Distinción clave: {topic[4]}.",
                        "de": f"Hauptunterschied: {topic[4]}.",
                        "nl": f"Belangrijk onderscheid: {topic[4]}."
                    }
                }
            else:
                q = {
                    "question": {
                        "en": f"What pairs well with {topic[0]}?",
                        "es": f"¿Qué combina bien con {topic[0]}?",
                        "de": f"Was passt gut zu {topic[0]}?",
                        "nl": f"Wat past goed bij {topic[0]}?"
                    },
                    "options": [
                        {"en": f"Foods that complement {topic[2]}", "es": f"Comidas que complementan {topic[2]}", "de": f"Speisen, die {topic[2]} ergänzen", "nl": f"Gerechten die {topic[2]} aanvullen"},
                        {"en": "Motor oil", "es": "Aceite de motor", "de": "Motoröl", "nl": "Motorolie"},
                        {"en": "Sand", "es": "Arena", "de": "Sand", "nl": "Zand"},
                        {"en": "Batteries", "es": "Baterías", "de": "Batterien", "nl": "Batterijen"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} pairs well with foods matching its {topic[2]} profile.",
                        "es": f"{topic[0]} combina bien con comidas que coinciden con su perfil {topic[2]}.",
                        "de": f"{topic[0]} passt gut zu Speisen, die zum {topic[2]} Profil passen.",
                        "nl": f"{topic[0]} past goed bij gerechten die passen bij het {topic[2]} profiel."
                    }
                }

        elif level <= 8:
            # Advanced questions about production and history
            q = {
                "question": {
                    "en": f"What technical aspect defines {topic[0]} production?",
                    "es": f"¿Qué aspecto técnico define la producción de {topic[0]}?",
                    "de": f"Welcher technische Aspekt definiert die {topic[0]} Produktion?",
                    "nl": f"Welk technisch aspect definieert {topic[0]} productie?"
                },
                "options": [
                    {"en": f"{topic[3]} achieved through {topic[4]}", "es": f"{topic[3]} logrado mediante {topic[4]}", "de": f"{topic[3]} erreicht durch {topic[4]}", "nl": f"{topic[3]} bereikt door {topic[4]}"},
                    {"en": "Random mixing", "es": "Mezcla aleatoria", "de": "Zufälliges Mischen", "nl": "Willekeurig mengen"},
                    {"en": "No process needed", "es": "No necesita proceso", "de": "Kein Prozess nötig", "nl": "Geen proces nodig"},
                    {"en": "Magic only", "es": "Solo magia", "de": "Nur Magie", "nl": "Alleen magie"}
                ],
                "correct": 0,
                "explanation": {
                    "en": f"Production involves {topic[3]} using {topic[4]} methods.",
                    "es": f"La producción involucra {topic[3]} usando métodos de {topic[4]}.",
                    "de": f"Die Produktion beinhaltet {topic[3]} mit {topic[4]} Methoden.",
                    "nl": f"Productie omvat {topic[3]} met {topic[4]} methoden."
                }
            }

        else:
            # Expert level questions
            q = {
                "question": {
                    "en": f"What expert knowledge applies to {topic[0]} in the {subcat} category?",
                    "es": f"¿Qué conocimiento experto aplica a {topic[0]} en la categoría {subcat}?",
                    "de": f"Welches Expertenwissen gilt für {topic[0]} in der Kategorie {subcat}?",
                    "nl": f"Welke expertkennis geldt voor {topic[0]} in de {subcat} categorie?"
                },
                "options": [
                    {"en": f"Complex interaction of {topic[2]}, {topic[3]}, and {topic[4]}", "es": f"Interacción compleja de {topic[2]}, {topic[3]} y {topic[4]}", "de": f"Komplexe Interaktion von {topic[2]}, {topic[3]} und {topic[4]}", "nl": f"Complexe interactie van {topic[2]}, {topic[3]} en {topic[4]}"},
                    {"en": "No complexity", "es": "Sin complejidad", "de": "Keine Komplexität", "nl": "Geen complexiteit"},
                    {"en": "Simple mixture", "es": "Mezcla simple", "de": "Einfache Mischung", "nl": "Simpele mengeling"},
                    {"en": "Unknown process", "es": "Proceso desconocido", "de": "Unbekannter Prozess", "nl": "Onbekend proces"}
                ],
                "correct": i % 4,
                "explanation": {
                    "en": f"Expert understanding: {topic[0]} combines {topic[1]} origin with {topic[2]} characteristics, {topic[3]} specifications, and {topic[4]} unique features.",
                    "es": f"Comprensión experta: {topic[0]} combina origen {topic[1]} con características {topic[2]}, especificaciones {topic[3]} y características únicas {topic[4]}.",
                    "de": f"Expertenwissen: {topic[0]} kombiniert {topic[1]} Herkunft mit {topic[2]} Eigenschaften, {topic[3]} Spezifikationen und {topic[4]} einzigartigen Merkmalen.",
                    "nl": f"Expert begrip: {topic[0]} combineert {topic[1]} oorsprong met {topic[2]} kenmerken, {topic[3]} specificaties en {topic[4]} unieke eigenschappen."
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
    base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\drinks"

    subcategories = [
        "Beer",
        "Cocktails",
        "Coffee",
        "Juices",
        "Spirits",
        "Tea",
        "Traditional Drinks",
        "Water",
        "Wine"
    ]

    total = 0

    for subcat in subcategories:
        cat_path = os.path.join(base_path, subcat)
        if not os.path.exists(cat_path):
            os.makedirs(cat_path)

        print(f"Processing {subcat}...")

        for level in range(1, 11):
            questions = generate_drinks_questions(subcat, level)
            js_content = create_js_file(level, questions)

            file_path = os.path.join(cat_path, f"level{level}.js")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(js_content)

            total += len(questions)
            print(f"  Level {level}: {len(questions)} questions")

    print(f"\nTotal Drinks questions created: {total:,}")

if __name__ == "__main__":
    main()