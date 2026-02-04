import os
import re

base_path = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\food'

questions = [
    ("What is cuisine?", "Style of cooking from a region", "Kitchen tool", "Recipe book", "Restaurant", "Cuisine refers to a style or method of cooking, especially characteristic of a particular country or region."),
    ("What is a recipe?", "Set of cooking instructions", "Restaurant menu", "Kitchen appliance", "Food storage", "A recipe is a set of instructions for preparing a particular dish."),
    ("What does 'al dente' mean?", "Cooked to be firm to bite", "Overcooked", "Raw", "Burnt", "Al dente means cooked so as to be still firm when bitten, typically for pasta."),
    ("What is seasoning?", "Adding salt, herbs, or spices", "Cooking method", "Storage technique", "Serving style", "Seasoning is the process of adding salt, herbs, or spices to enhance flavor."),
    ("What is marinating?", "Soaking food in flavored liquid", "Grilling", "Boiling", "Freezing", "Marinating involves soaking food in a seasoned liquid before cooking."),
    ("What is sautéing?", "Cooking quickly in little fat", "Boiling in water", "Baking in oven", "Freezing", "Sautéing is cooking food quickly in a small amount of fat over high heat."),
    ("What is blanching?", "Brief boiling then ice water", "Long slow cooking", "Deep frying", "Grilling", "Blanching involves briefly boiling food then plunging it into ice water."),
    ("What is garnish?", "Decorative food accompaniment", "Main ingredient", "Cooking method", "Kitchen tool", "A garnish is a decoration or embellishment added to food for visual appeal."),
    ("What is umami?", "Savory taste", "Sweet taste", "Sour taste", "Bitter taste", "Umami is the fifth basic taste, characterized by a savory, meaty flavor."),
    ("What is a staple food?", "Regularly consumed basic food", "Exotic ingredient", "Dessert", "Spice", "A staple food is a food that is eaten regularly and forms the basis of a diet."),
    ("What is fermentation?", "Breakdown by bacteria or yeast", "Cooking with fire", "Freezing", "Drying", "Fermentation is the chemical breakdown of food by bacteria, yeasts, or other microorganisms."),
    ("What is a condiment?", "Substance to enhance flavor", "Main dish", "Cooking pot", "Eating utensil", "A condiment is a substance such as sauce used to add flavor to food."),
    ("What is caramelization?", "Browning of sugar", "Melting butter", "Boiling water", "Freezing ice", "Caramelization is the browning of sugar through heat, creating complex flavors."),
    ("What is gluten?", "Protein in wheat", "Type of sugar", "Vitamin", "Fat", "Gluten is a protein found in wheat, barley, and rye that gives dough its elastic texture."),
    ("What is organic food?", "Grown without synthetic chemicals", "Any natural food", "Expensive food", "Imported food", "Organic food is produced without synthetic pesticides, fertilizers, or GMOs."),
    ("What is a vegan?", "Someone who eats no animal products", "Someone who eats only meat", "Someone who eats fish", "Someone who eats dairy", "A vegan does not consume any animal products including meat, dairy, or eggs."),
    ("What is a vegetarian?", "Someone who doesn't eat meat", "Someone who only eats vegetables", "Someone who eats only fruit", "Someone who eats everything", "A vegetarian does not eat meat but may consume dairy and eggs."),
    ("What is preservation?", "Preventing food spoilage", "Cooking method", "Serving style", "Shopping", "Food preservation prevents spoilage and extends shelf life."),
    ("What is pasteurization?", "Heat treatment to kill bacteria", "Freezing", "Drying", "Salting", "Pasteurization is heat treatment that kills harmful bacteria in food and drinks."),
    ("What is a delicacy?", "Rare or expensive food item", "Common food", "Cooking tool", "Recipe book", "A delicacy is a rare, expensive, or especially desirable food item.")
]

categories = ["Barbecue", "Bread Types", "National Dishes", "Pasta Types", "Rice Dishes",
              "Salads", "Seafood", "Soups", "Street Food", "Vegetarian Dishes"]

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
print("Food expansion complete!")
