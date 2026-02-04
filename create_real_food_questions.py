#!/usr/bin/env python3
"""
Create REAL Food questions with actual culinary content
"""
import os

def generate_food_questions(subcat, level):
    """Generate 100 real food questions for a subcategory"""

    food_content = {
        "Barbecue": {
            "topics": [
                ("Texas BBQ", "Brisket", "Low and slow", "Oak wood smoke"),
                ("Carolina BBQ", "Pulled pork", "Vinegar-based sauce", "Whole hog"),
                ("Kansas City BBQ", "Ribs", "Sweet sauce", "Burnt ends"),
                ("Memphis BBQ", "Dry rub ribs", "No sauce while cooking", "Pork shoulder"),
                ("Korean BBQ", "Bulgogi", "Marinated meat", "Tabletop grilling"),
                ("Argentine Asado", "Beef ribs", "Wood fire", "Chimichurri"),
                ("Australian BBQ", "Shrimp on barbie", "Outdoor cooking", "Lamb chops"),
                ("Smoking", "225°F", "6-12 hours", "Smoke ring"),
                ("Grilling", "High heat", "Direct cooking", "Sear marks"),
                ("BBQ Tools", "Smoker", "Thermometer", "Wood chips")
            ]
        },
        "Breakfast Foods": {
            "topics": [
                ("Eggs Benedict", "Poached eggs", "Hollandaise", "English muffin"),
                ("Pancakes", "Flour batter", "Maple syrup", "Stack of three"),
                ("French Toast", "Egg-soaked bread", "Cinnamon", "Powdered sugar"),
                ("Full English", "Bacon and eggs", "Baked beans", "Black pudding"),
                ("Continental", "Pastries", "Cold cuts", "European style"),
                ("Omelette", "Beaten eggs", "Folded", "Various fillings"),
                ("Cereal", "Grain-based", "With milk", "Quick breakfast"),
                ("Smoothie Bowl", "Blended fruits", "Toppings", "Health trend"),
                ("Avocado Toast", "Mashed avocado", "Sourdough", "Millennial favorite"),
                ("Bagel", "Jewish origin", "Cream cheese", "New York style")
            ]
        },
        "Cheeses": {
            "topics": [
                ("Cheddar", "England", "Aged 3-24 months", "Sharp flavor"),
                ("Brie", "France", "Soft cheese", "White rind"),
                ("Parmesan", "Italy", "Hard cheese", "Aged 12+ months"),
                ("Gouda", "Netherlands", "Semi-hard", "Wax coating"),
                ("Blue Cheese", "Penicillium", "Veined", "Strong taste"),
                ("Mozzarella", "Italy", "Fresh cheese", "Pizza topping"),
                ("Swiss", "Switzerland", "Holes (eyes)", "Nutty flavor"),
                ("Feta", "Greece", "Sheep/goat milk", "Brined"),
                ("Camembert", "France", "Similar to Brie", "Normandy region"),
                ("Manchego", "Spain", "Sheep milk", "La Mancha")
            ]
        },
        "Pasta Types": {
            "topics": [
                ("Spaghetti", "Long thin", "Most popular", "Carbonara/Bolognese"),
                ("Penne", "Tube shape", "Ridged", "Arrabbiata sauce"),
                ("Fusilli", "Corkscrew", "Holds sauce", "Pasta salad"),
                ("Ravioli", "Stuffed squares", "Filled pasta", "Cheese or meat"),
                ("Lasagne", "Flat sheets", "Layered dish", "Baked pasta"),
                ("Fettuccine", "Flat ribbons", "Alfredo sauce", "Wider than linguine"),
                ("Rigatoni", "Large tubes", "Ridged exterior", "Baked dishes"),
                ("Farfalle", "Bow-tie shape", "Butterfly pasta", "Light sauces"),
                ("Macaroni", "Elbow shape", "Mac and cheese", "Short pasta"),
                ("Linguine", "Flat and narrow", "Seafood dishes", "Means 'little tongues'")
            ]
        },
        "Seafood": {
            "topics": [
                ("Salmon", "Pink fish", "Omega-3", "Pacific/Atlantic"),
                ("Tuna", "Large fish", "Sushi grade", "Bluefin most prized"),
                ("Shrimp", "Crustacean", "Most consumed", "Cocktail/Grilled"),
                ("Lobster", "Luxury seafood", "Maine lobster", "Boiled/Steamed"),
                ("Oysters", "Mollusk", "Raw bar", "Aphrodisiac myth"),
                ("Crab", "Crustacean", "Soft/hard shell", "Crab cakes"),
                ("Scallops", "Bivalve", "Sweet taste", "Seared"),
                ("Mussels", "Black shells", "Steamed", "White wine sauce"),
                ("Cod", "White fish", "Fish and chips", "Mild flavor"),
                ("Sushi", "Japanese", "Raw fish", "With rice")
            ]
        },
        "Street Food": {
            "topics": [
                ("Tacos", "Mexico", "Corn tortilla", "Al pastor"),
                ("Hot Dogs", "USA", "Frankfurter", "Baseball games"),
                ("Kebab", "Middle East", "Grilled meat", "Pita bread"),
                ("Pad Thai", "Thailand", "Stir-fried noodles", "Tamarind"),
                ("Falafel", "Middle East", "Chickpea balls", "Deep fried"),
                ("Pizza Slice", "New York", "Fold to eat", "Dollar slice"),
                ("Crepes", "France", "Thin pancake", "Sweet or savory"),
                ("Empanadas", "Latin America", "Stuffed pastry", "Fried or baked"),
                ("Banh Mi", "Vietnam", "Sandwich", "French bread"),
                ("Churros", "Spain", "Fried dough", "Cinnamon sugar")
            ]
        },
        "Vegetarian Dishes": {
            "topics": [
                ("Ratatouille", "French", "Vegetable stew", "Provence dish"),
                ("Falafel", "Middle Eastern", "Chickpea", "Protein-rich"),
                ("Caprese Salad", "Italian", "Tomato mozzarella", "Basil"),
                ("Vegetable Curry", "Indian", "Spiced vegetables", "Coconut milk"),
                ("Quinoa Bowl", "South American", "Complete protein", "Superfood"),
                ("Mushroom Risotto", "Italian", "Creamy rice", "Arborio"),
                ("Greek Salad", "Greece", "Feta cheese", "Olive oil"),
                ("Veggie Burger", "Plant-based", "Meat substitute", "Black bean"),
                ("Shakshuka", "Middle Eastern", "Eggs in tomato", "One-pan"),
                ("Buddha Bowl", "Mixed vegetables", "Grain base", "Nutritious")
            ]
        },
        "Salads": {
            "topics": [
                ("Caesar Salad", "Romaine lettuce", "Anchovies", "Parmesan"),
                ("Greek Salad", "Feta cheese", "Olives", "No lettuce traditionally"),
                ("Cobb Salad", "Chopped salad", "Bacon and egg", "Blue cheese"),
                ("Waldorf Salad", "Apples and walnuts", "Mayonnaise", "Celery"),
                ("Niçoise Salad", "French", "Tuna and eggs", "Anchovies"),
                ("Caprese", "Italian", "Tomato mozzarella", "Basil"),
                ("Coleslaw", "Shredded cabbage", "Creamy or vinegar", "BBQ side"),
                ("Tabbouleh", "Middle Eastern", "Bulgur wheat", "Parsley"),
                ("Garden Salad", "Mixed greens", "Basic salad", "Various vegetables"),
                ("Potato Salad", "Boiled potatoes", "Mayo or vinegar", "Picnic food")
            ]
        },
        "Cooking Methods": {
            "topics": [
                ("Sautéing", "High heat", "Small amount of fat", "Quick cooking"),
                ("Braising", "Slow cooking", "Liquid", "Tough cuts tender"),
                ("Grilling", "Direct heat", "Char marks", "Outdoor cooking"),
                ("Roasting", "Dry heat oven", "Browning", "Vegetables/meat"),
                ("Steaming", "Moist heat", "Preserves nutrients", "No added fat"),
                ("Deep Frying", "Submerged in oil", "350-375°F", "Crispy exterior"),
                ("Poaching", "Gentle simmer", "In liquid", "Eggs/fish"),
                ("Blanching", "Boil then ice", "Preserve color", "Vegetables"),
                ("Sous Vide", "Vacuum sealed", "Water bath", "Precise temperature"),
                ("Stir-frying", "Wok cooking", "High heat fast", "Asian technique")
            ]
        },
        "Fusion Cuisine": {
            "topics": [
                ("Tex-Mex", "Texas-Mexican", "Fajitas", "Cheese heavy"),
                ("California Roll", "Japanese-American", "Avocado", "Inside-out sushi"),
                ("Chicken Tikka Masala", "British-Indian", "Creamy curry", "UK invention"),
                ("Korean Tacos", "Korean-Mexican", "Kimchi", "Roy Choi"),
                ("Sushi Pizza", "Japanese-Italian", "Crispy rice", "Fusion creation"),
                ("Ramen Burger", "Japanese-American", "Noodle bun", "NYC creation"),
                ("Cronut", "Croissant-donut", "Hybrid pastry", "Dominique Ansel"),
                ("Banh Mi Burger", "Vietnamese-American", "Pickled vegetables", "Fusion sandwich"),
                ("Jerk Chicken Pizza", "Jamaican-Italian", "Spicy fusion", "Caribbean heat"),
                ("Pad Thai Pizza", "Thai-Italian", "Peanut sauce", "Asian fusion")
            ]
        }
    }

    subcat_data = food_content.get(subcat, food_content["Barbecue"])
    topics = subcat_data["topics"]
    questions = []

    for i in range(100):
        topic = topics[i % len(topics)]

        if level <= 3:
            # Basic questions
            q_type = i % 4
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
                        {"en": "A type of car", "es": "Un tipo de coche", "de": "Ein Autotyp", "nl": "Een type auto"},
                        {"en": "A dance", "es": "Un baile", "de": "Ein Tanz", "nl": "Een dans"},
                        {"en": "A planet", "es": "Un planeta", "de": "Ein Planet", "nl": "Een planeet"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} is {topic[1]}: {topic[2]}",
                        "es": f"{topic[0]} es {topic[1]}: {topic[2]}",
                        "de": f"{topic[0]} ist {topic[1]}: {topic[2]}",
                        "nl": f"{topic[0]} is {topic[1]}: {topic[2]}"
                    }
                }
            elif q_type == 1:
                q = {
                    "question": {
                        "en": f"What characterizes {topic[0]}?",
                        "es": f"¿Qué caracteriza a {topic[0]}?",
                        "de": f"Was charakterisiert {topic[0]}?",
                        "nl": f"Wat kenmerkt {topic[0]}?"
                    },
                    "options": [
                        {"en": topic[2], "es": topic[2], "de": topic[2], "nl": topic[2]},
                        {"en": "Nothing special", "es": "Nada especial", "de": "Nichts Besonderes", "nl": "Niets bijzonders"},
                        {"en": "It glows in dark", "es": "Brilla en la oscuridad", "de": "Leuchtet im Dunkeln", "nl": "Gloeit in het donker"},
                        {"en": "It can fly", "es": "Puede volar", "de": "Es kann fliegen", "nl": "Het kan vliegen"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} is characterized by {topic[2]}",
                        "es": f"{topic[0]} se caracteriza por {topic[2]}",
                        "de": f"{topic[0]} ist gekennzeichnet durch {topic[2]}",
                        "nl": f"{topic[0]} wordt gekenmerkt door {topic[2]}"
                    }
                }
            elif q_type == 2:
                q = {
                    "question": {
                        "en": f"What goes with {topic[0]}?",
                        "es": f"¿Qué va con {topic[0]}?",
                        "de": f"Was passt zu {topic[0]}?",
                        "nl": f"Wat past bij {topic[0]}?"
                    },
                    "options": [
                        {"en": topic[3], "es": topic[3], "de": topic[3], "nl": topic[3]},
                        {"en": "Rocket fuel", "es": "Combustible de cohete", "de": "Raketentreibstoff", "nl": "Raketbrandstof"},
                        {"en": "Diamonds", "es": "Diamantes", "de": "Diamanten", "nl": "Diamanten"},
                        {"en": "Unicorns", "es": "Unicornios", "de": "Einhörner", "nl": "Eenhoorns"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"{topic[0]} typically includes {topic[3]}",
                        "es": f"{topic[0]} típicamente incluye {topic[3]}",
                        "de": f"{topic[0]} beinhaltet typischerweise {topic[3]}",
                        "nl": f"{topic[0]} bevat typisch {topic[3]}"
                    }
                }
            else:
                q = {
                    "question": {
                        "en": f"Which fact about {topic[0]} is true?",
                        "es": f"¿Qué hecho sobre {topic[0]} es verdadero?",
                        "de": f"Welche Tatsache über {topic[0]} ist wahr?",
                        "nl": f"Welk feit over {topic[0]} is waar?"
                    },
                    "options": [
                        {"en": f"It involves {topic[1]}", "es": f"Involucra {topic[1]}", "de": f"Es beinhaltet {topic[1]}", "nl": f"Het betreft {topic[1]}"},
                        {"en": "It's imaginary", "es": "Es imaginario", "de": "Es ist imaginär", "nl": "Het is denkbeeldig"},
                        {"en": "It's from Mars", "es": "Es de Marte", "de": "Es ist vom Mars", "nl": "Het komt van Mars"},
                        {"en": "It's invisible", "es": "Es invisible", "de": "Es ist unsichtbar", "nl": "Het is onzichtbaar"}
                    ],
                    "correct": 0,
                    "explanation": {
                        "en": f"True: {topic[0]} involves {topic[1]}",
                        "es": f"Verdadero: {topic[0]} involucra {topic[1]}",
                        "de": f"Wahr: {topic[0]} beinhaltet {topic[1]}",
                        "nl": f"Waar: {topic[0]} betreft {topic[1]}"
                    }
                }

        elif level <= 6:
            # Intermediate questions
            q = {
                "question": {
                    "en": f"How is {topic[0]} prepared or served?",
                    "es": f"¿Cómo se prepara o sirve {topic[0]}?",
                    "de": f"Wie wird {topic[0]} zubereitet oder serviert?",
                    "nl": f"Hoe wordt {topic[0]} bereid of geserveerd?"
                },
                "options": [
                    {"en": f"{topic[2]} with {topic[3]}", "es": f"{topic[2]} con {topic[3]}", "de": f"{topic[2]} mit {topic[3]}", "nl": f"{topic[2]} met {topic[3]}"},
                    {"en": "Frozen solid", "es": "Congelado sólido", "de": "Gefroren", "nl": "Bevroren"},
                    {"en": "Raw only", "es": "Solo crudo", "de": "Nur roh", "nl": "Alleen rauw"},
                    {"en": "Never prepared", "es": "Nunca preparado", "de": "Nie zubereitet", "nl": "Nooit bereid"}
                ],
                "correct": 0,
                "explanation": {
                    "en": f"{topic[0]}: {topic[2]} with {topic[3]}",
                    "es": f"{topic[0]}: {topic[2]} con {topic[3]}",
                    "de": f"{topic[0]}: {topic[2]} mit {topic[3]}",
                    "nl": f"{topic[0]}: {topic[2]} met {topic[3]}"
                }
            }

        else:
            # Advanced questions
            q = {
                "question": {
                    "en": f"What culinary technique applies to {topic[0]}?",
                    "es": f"¿Qué técnica culinaria aplica a {topic[0]}?",
                    "de": f"Welche kulinarische Technik gilt für {topic[0]}?",
                    "nl": f"Welke culinaire techniek past bij {topic[0]}?"
                },
                "options": [
                    {"en": f"Advanced: {topic[2]} for {topic[3]}", "es": f"Avanzado: {topic[2]} para {topic[3]}", "de": f"Fortgeschritten: {topic[2]} für {topic[3]}", "nl": f"Geavanceerd: {topic[2]} voor {topic[3]}"},
                    {"en": "No technique", "es": "Sin técnica", "de": "Keine Technik", "nl": "Geen techniek"},
                    {"en": "Magic required", "es": "Requiere magia", "de": "Magie erforderlich", "nl": "Magie vereist"},
                    {"en": "Impossible", "es": "Imposible", "de": "Unmöglich", "nl": "Onmogelijk"}
                ],
                "correct": i % 4,
                "explanation": {
                    "en": f"Expert: {topic[0]} requires {topic[2]} technique",
                    "es": f"Experto: {topic[0]} requiere técnica {topic[2]}",
                    "de": f"Experte: {topic[0]} erfordert {topic[2]} Technik",
                    "nl": f"Expert: {topic[0]} vereist {topic[2]} techniek"
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
    base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\food"

    subcategories = [
        "Barbecue",
        "Breakfast Foods",
        "Cheeses",
        "Cooking Methods",
        "Fusion Cuisine",
        "Pasta Types",
        "Salads",
        "Seafood",
        "Street Food",
        "Vegetarian Dishes"
    ]

    total = 0

    for subcat in subcategories:
        cat_path = os.path.join(base_path, subcat)
        if not os.path.exists(cat_path):
            os.makedirs(cat_path)

        print(f"Processing {subcat}...")

        for level in range(1, 11):
            questions = generate_food_questions(subcat, level)
            js_content = create_js_file(level, questions)

            file_path = os.path.join(cat_path, f"level{level}.js")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(js_content)

            total += len(questions)
            print(f"  Level {level}: {len(questions)} questions")

    print(f"\nTotal Food questions created: {total:,}")

if __name__ == "__main__":
    main()