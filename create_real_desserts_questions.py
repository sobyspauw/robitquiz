import os
import random

# Desserts subcategories with real facts
desserts_data = {
    "Cakes": {
        "topics": [
            ("Black Forest", "Germany", "Cherries and cream", "Kirsch liqueur", "1930s origin"),
            ("Red Velvet", "USA", "Cocoa and buttermilk", "Cream cheese frosting", "Waldorf Astoria"),
            ("Tiramisu", "Italy", "Coffee and mascarpone", "Ladyfinger cookies", "1960s invention"),
            ("Cheesecake", "Ancient Greece", "Cream cheese base", "Graham cracker crust", "Olympics served"),
            ("Sachertorte", "Austria", "Chocolate and apricot", "Vienna 1832", "Franz Sacher"),
            ("Opera cake", "France", "Coffee and chocolate", "Rectangular layers", "1955 Dalloyau"),
            ("Victoria Sponge", "England", "Jam and cream", "Queen Victoria", "Tea time classic"),
            ("Tres Leches", "Latin America", "Three milks", "Soaked sponge", "Nicaragua origin"),
            ("Pound Cake", "Europe", "Equal weights", "Pound each ingredient", "1700s recipe"),
            ("Angel Food", "USA", "Egg whites only", "No butter", "Light and airy")
        ]
    },
    "Chocolates": {
        "topics": [
            ("Dark chocolate", "70% cacao minimum", "Antioxidants", "Heart healthy", "Bitter taste"),
            ("Milk chocolate", "Switzerland 1875", "Daniel Peter", "Condensed milk", "30% cacao"),
            ("White chocolate", "No cacao solids", "Cocoa butter only", "Nestle 1936", "Sweet vanilla"),
            ("Belgian pralines", "1912 invention", "Jean Neuhaus", "Filled chocolates", "Ballotin box"),
            ("Truffles", "France origin", "Ganache center", "Cocoa dusted", "Resembles fungus"),
            ("Ruby chocolate", "2017 launch", "Pink color natural", "Berry flavor", "Fourth type"),
            ("Gianduja", "Italy", "Hazelnut blend", "Napoleon blockade", "Nutella ancestor"),
            ("Couverture", "High cocoa butter", "Professional use", "Tempering required", "Glossy finish"),
            ("Single origin", "One region cacao", "Terroir taste", "Premium quality", "Like wine"),
            ("Bean to bar", "Craft chocolate", "Full process control", "Small batch", "Artisanal")
        ]
    },
    "Cookies": {
        "topics": [
            ("Chocolate chip", "1938 Ruth Wakefield", "Toll House Inn", "Nestle deal", "Most popular"),
            ("Oreo", "1912 launch", "Sandwich cookie", "Twist lick dunk", "Best selling"),
            ("Snickerdoodle", "New England", "Cinnamon sugar", "Cream of tartar", "Dutch origin"),
            ("Macarons", "France", "Almond flour", "Ganache filling", "Colorful shells"),
            ("Biscotti", "Italy", "Twice baked", "Coffee dunking", "Almonds traditional"),
            ("Shortbread", "Scotland", "Butter sugar flour", "Medieval origin", "Triangular wedges"),
            ("Gingerbread", "Medieval Europe", "Spiced cookie", "House tradition", "Germany famous"),
            ("Fortune cookie", "California invention", "Not Chinese", "Paper fortune", "Japanese origin"),
            ("Stroopwafel", "Netherlands", "Caramel filling", "Waffle iron", "Coffee cup warming"),
            ("Anzac biscuit", "Australia/NZ", "WW1 origin", "No eggs", "Long shelf life")
        ]
    },
    "Frozen Desserts": {
        "topics": [
            ("Gelato", "Italy", "Less air churned", "Denser texture", "Warmer served"),
            ("Sorbet", "No dairy", "Fruit and sugar", "Ancient Persia", "Palate cleanser"),
            ("Soft serve", "1938 invention", "Air incorporated", "Lower fat", "Carvel pioneered"),
            ("Kulfi", "India", "Reduced milk", "No churning", "Cardamom flavored"),
            ("Mochi ice cream", "Japan", "Rice cake wrapped", "1981 LA invention", "Chewy texture"),
            ("Semifreddo", "Italy", "Half frozen", "Mousse-like", "No churning needed"),
            ("Granita", "Sicily", "Coarse crystals", "Scraped ice", "Coffee or lemon"),
            ("Frozen yogurt", "1970s USA", "Probiotics", "Tart flavor", "Lower calories"),
            ("Nitrogen ice cream", "-196°C", "Instant freezing", "Smooth texture", "No ice crystals"),
            ("Rolled ice cream", "Thailand", "Flat frozen pan", "Scraped rolls", "Street food")
        ]
    },
    "Ice Cream": {
        "topics": [
            ("Vanilla", "Madagascar beans", "Most popular", "Orchid plant", "Hand pollinated"),
            ("Neapolitan", "Three flavors", "Vanilla chocolate strawberry", "1870s origin", "Italian immigrants"),
            ("Ben & Jerry's", "1978 Vermont", "Chunks and swirls", "Social mission", "Unilever owned"),
            ("Häagen-Dazs", "1961 Bronx", "Danish sounding", "Premium position", "No Denmark connection"),
            ("Baskin-Robbins", "31 flavors", "1945 California", "Pink spoons", "Dunkin' owned"),
            ("Magnum", "Belgium 1989", "Chocolate coating", "Stick bar", "Premium positioning"),
            ("Dippin' Dots", "1988 cryogenic", "Flash frozen beads", "Future of ice cream", "Liquid nitrogen"),
            ("Turkish ice cream", "Dondurma", "Salep and mastic", "Stretchy texture", "Vendor tricks"),
            ("Fried ice cream", "Mexican restaurants", "Tempura battered", "Quick fry", "1893 fair"),
            ("Astronaut ice cream", "Freeze dried", "NASA myth", "Never in space", "Museum gift shops")
        ]
    },
    "Pancakes": {
        "topics": [
            ("Crêpes", "France", "Thin pancakes", "Brittany origin", "Sweet or savory"),
            ("American pancakes", "Fluffy thick", "Baking powder", "Maple syrup", "Stack served"),
            ("Dutch baby", "German origin", "Oven baked", "Puffs up high", "Deflates quickly"),
            ("Blini", "Russia", "Yeast raised", "Buckwheat flour", "Caviar topping"),
            ("Dosa", "South India", "Fermented batter", "Rice and lentils", "Crispy crepe"),
            ("Okonomiyaki", "Japan", "Savory pancake", "Cabbage filled", "Osaka style"),
            ("Pannukakku", "Finland", "Oven pancake", "Custard-like", "Cardamom flavored"),
            ("Injera", "Ethiopia", "Spongy flatbread", "Teff flour", "Fermented sour"),
            ("Kaiserschmarrn", "Austria", "Shredded pancake", "Emperor's mess", "Raisins and sugar"),
            ("Silver dollar", "USA", "Mini size", "2-3 inches", "Breakfast buffets")
        ]
    },
    "Pastries": {
        "topics": [
            ("Croissant", "Austria origin", "Kipferl ancestor", "French perfected", "Laminated dough"),
            ("Baklava", "Ottoman Empire", "Phyllo layers", "Honey syrup", "Pistachio or walnut"),
            ("Éclair", "France", "Choux pastry", "Cream filled", "Chocolate glazed"),
            ("Danish", "Vienna bread", "Denmark adapted", "Fruit filled", "Laminated dough"),
            ("Cannoli", "Sicily", "Fried shells", "Ricotta filling", "Carnival origin"),
            ("Strudel", "Austria", "Stretched dough", "Apple traditional", "Paper thin layers"),
            ("Profiterole", "France", "Cream puffs", "Ice cream filled", "Chocolate sauce"),
            ("Palmier", "France", "Elephant ears", "Puff pastry", "Caramelized sugar"),
            ("Millefeuille", "Napoleon cake", "Thousand leaves", "Custard cream", "Icing topped"),
            ("Kouign-amann", "Brittany", "Butter cake", "Laminated dough", "Caramelized layers")
        ]
    },
    "Pies": {
        "topics": [
            ("Apple pie", "American symbol", "Dutch origin", "Lattice crust", "Mode served"),
            ("Pumpkin pie", "Thanksgiving staple", "Spiced custard", "1621 possible", "Evaporated milk"),
            ("Key lime", "Florida Keys", "Condensed milk", "Graham crust", "Yellow color"),
            ("Pecan pie", "Southern USA", "Corn syrup", "French origin possible", "Karo recipe 1930s"),
            ("Banoffee", "England 1971", "Banana toffee", "Hungry Monk pub", "Dulce de leche"),
            ("Chess pie", "Southern USA", "Cornmeal custard", "Pantry ingredients", "Name mystery"),
            ("Shoofly pie", "Pennsylvania Dutch", "Molasses filling", "Crumb topping", "Flies attracted"),
            ("Mince pie", "Medieval England", "Dried fruit", "No meat modern", "Christmas tradition"),
            ("Lemon meringue", "1800s origin", "Three layers", "Swiss meringue", "Elizabeth Coane"),
            ("Mud pie", "Mississippi", "Chocolate layers", "Oreo crust", "Ice cream version")
        ]
    },
    "Puddings": {
        "topics": [
            ("Crème brûlée", "France", "Burnt cream", "Torch caramelized", "Trinity College claim"),
            ("Panna cotta", "Italy", "Cooked cream", "Gelatin set", "Piedmont origin"),
            ("Rice pudding", "Global dish", "Ancient origin", "Cinnamon topped", "Comfort food"),
            ("Bread pudding", "Leftover bread", "Custard soaked", "Medieval origin", "Raisins common"),
            ("Sticky toffee", "England", "Date sponge", "Toffee sauce", "1970s creation"),
            ("Christmas pudding", "England", "Dried fruit", "Brandy flamed", "Stirred wishes"),
            ("Tapioca", "Cassava pearls", "Bubble tea", "Brazil origin", "Frog spawn nickname"),
            ("Flan", "Spain/Latin", "Caramel custard", "Roman origin", "Inverted serving"),
            ("Eton mess", "England", "Strawberries cream", "Broken meringue", "Eton College"),
            ("Trifle", "England", "Layered dessert", "Sherry soaked", "Glass bowl served")
        ]
    },
    "Regional Desserts": {
        "topics": [
            ("Mochi", "Japan", "Rice cake", "New Year tradition", "Sweet filling"),
            ("Churros", "Spain", "Fried dough", "Chocolate dipping", "Star shaped"),
            ("Loukoumades", "Greece", "Honey balls", "Ancient Olympics", "Winner's treat"),
            ("Gulab jamun", "India", "Milk balls", "Rose syrup", "Festive sweet"),
            ("Brigadeiro", "Brazil", "Chocolate truffle", "Condensed milk", "Birthday parties"),
            ("Pastel de nata", "Portugal", "Egg custard tart", "Lisbon monks", "Belém original"),
            ("Knafeh", "Middle East", "Cheese pastry", "Orange syrup", "Shredded phyllo"),
            ("Pavlova", "Australia/NZ", "Meringue base", "Fruit topped", "Ballerina named"),
            ("Tres leches", "Latin America", "Three milks", "Nicaragua claim", "Soaked sponge"),
            ("Beignet", "New Orleans", "French donut", "Powdered sugar", "Café du Monde")
        ]
    }
}

def create_desserts_questions(subcategory, topics, level):
    questions = []
    random.seed(42 + hash(subcategory) + level)

    for i in range(100):
        topic = random.choice(topics)
        q_type = i % 10

        if q_type == 0:  # Basic identification
            if level <= 3:
                q = f"What is {topic[0]}?"
                correct = topic[1] if len(topic) > 1 else topic[0]
                options = [correct, "Different dessert", "Main course", "Appetizer"]
            elif level <= 6:
                q = f"What characterizes {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else topic[1]
                options = [correct, "Different feature", "Wrong ingredient", "Not applicable"]
            else:
                q = f"What distinguishes {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2]
                options = [correct, "Common feature", "Regular trait", "Standard aspect"]

        elif q_type == 1:  # Origin/Country
            if level <= 3:
                q = f"Where is {topic[0]} from?"
                correct = topic[1] if any(place in str(topic[1]) for place in ["USA", "France", "Italy", "Germany", "England", "Japan", "India"]) else "Europe"
                options = [correct, "Different country", "Unknown origin", "Multiple places"]
            elif level <= 6:
                q = f"Origin of {topic[0]}?"
                correct = topic[1] if len(topic) > 1 else "Traditional dessert"
                options = [correct, "Wrong country", "Different region", "Modern invention"]
            else:
                q = f"Specific origin of {topic[0]}?"
                correct = topic[4] if len(topic) > 4 and any(char.isdigit() for char in str(topic[4])) else topic[1]
                options = [correct, "Different place", "Wrong period", "Unknown source"]

        elif q_type == 2:  # Ingredients
            if level <= 3:
                q = f"Main ingredient in {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else "Sweet ingredient"
                options = [correct, "Salt", "Vinegar", "Different ingredient"]
            elif level <= 6:
                q = f"Key component of {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else topic[3] if len(topic) > 3 else "Special ingredient"
                options = [correct, "Wrong ingredient", "Not used", "Different component"]
            else:
                q = f"Unique ingredient in {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Signature element"
                options = [correct, "Common ingredient", "Never used", "Wrong element"]

        elif q_type == 3:  # Preparation method
            if level <= 3:
                q = f"How is {topic[0]} made?"
                correct = "Baked" if "cake" in topic[0].lower() or "pie" in topic[0].lower() else "Prepared"
                options = [correct, "Raw only", "Boiled", "Different method"]
            elif level <= 6:
                q = f"Preparation of {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else "Traditional method"
                options = [correct, "Wrong method", "Different technique", "Not applicable"]
            else:
                q = f"Specific technique for {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Special method"
                options = [correct, "Basic method", "Wrong technique", "Different approach"]

        elif q_type == 4:  # Historical/Time
            if level <= 3:
                q = f"When was {topic[0]} created?"
                correct = topic[4] if len(topic) > 4 and any(char.isdigit() for char in str(topic[4])) else "Traditional"
                options = [correct, "Yesterday", "Never created", "Unknown time"]
            elif level <= 6:
                q = f"Era of {topic[0]}?"
                correct = topic[4] if len(topic) > 4 else topic[3] if len(topic) > 3 else "Historic period"
                options = [correct, "Wrong century", "Modern only", "Different era"]
            else:
                q = f"Exact period for {topic[0]}?"
                correct = topic[4] if len(topic) > 4 and any(char.isdigit() for char in str(topic[4])) else "Specific time"
                options = [correct, "Earlier period", "Later period", "Wrong timeline"]

        elif q_type == 5:  # Flavor/Taste
            if level <= 3:
                q = f"Taste of {topic[0]}?"
                correct = "Sweet" if subcategory != "Pancakes" else topic[2] if len(topic) > 2 else "Sweet"
                options = [correct, "Salty", "Sour only", "Bitter only"]
            elif level <= 6:
                q = f"Flavor profile of {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else "Complex flavor"
                options = [correct, "Single note", "No flavor", "Wrong taste"]
            else:
                q = f"Specific taste of {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Distinctive flavor"
                options = [correct, "Generic taste", "Wrong flavor", "Bland"]

        elif q_type == 6:  # Serving/Presentation
            if level <= 3:
                q = f"How is {topic[0]} served?"
                correct = topic[3] if len(topic) > 3 and any(word in str(topic[3]) for word in ["topped", "filled", "glazed"]) else "Plated"
                options = [correct, "Never served", "Hidden", "Not edible"]
            elif level <= 6:
                q = f"Presentation of {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else "Traditional style"
                options = [correct, "Wrong style", "No presentation", "Different way"]
            else:
                q = f"Serving tradition for {topic[0]}?"
                correct = topic[4] if len(topic) > 4 else topic[3] if len(topic) > 3 else "Special serving"
                options = [correct, "No tradition", "Wrong method", "Never served"]

        elif q_type == 7:  # Cultural significance
            if level <= 3:
                q = f"Significance of {topic[0]}?"
                correct = "Popular dessert"
                options = [correct, "Unknown dish", "Never eaten", "Banned food"]
            elif level <= 6:
                q = f"Cultural role of {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else "Traditional treat"
                options = [correct, "No significance", "Wrong culture", "Modern only"]
            else:
                q = f"Traditional meaning of {topic[0]}?"
                correct = topic[4] if len(topic) > 4 else "Cultural importance"
                options = [correct, "No meaning", "Wrong significance", "Recent invention"]

        elif q_type == 8:  # Comparison
            other = random.choice([t for t in topics if t != topic])
            if level <= 3:
                q = f"{topic[0]} vs {other[0]}?"
                correct = "Different desserts"
                options = [correct, "Same thing", "Both savory", "Neither sweet"]
            elif level <= 6:
                q = f"Difference between {topic[0]} and {other[0]}?"
                correct = "Different recipes" if subcategory == topic[0].split()[-1] else "Different types"
                options = [correct, "Identical", "Same recipe", "No difference"]
            else:
                q = f"What separates {topic[0]} from {other[0]}?"
                correct = topic[2] if len(topic) > 2 else "Unique preparation"
                options = [correct, "Nothing different", "Same ingredients", "Equal methods"]

        else:  # Variations/Types
            if level <= 3:
                q = f"Type of {topic[0]}?"
                correct = subcategory if topic[0] in str(subcategory) else "Dessert type"
                options = [correct, "Vegetable", "Meat dish", "Beverage"]
            elif level <= 6:
                q = f"Category of {topic[0]}?"
                correct = subcategory
                options = [correct, "Wrong category", "Not dessert", "Different type"]
            else:
                q = f"Classification of {topic[0]}?"
                correct = f"{subcategory} variety"
                options = [correct, "Wrong class", "Different group", "Not classified"]

        # Ensure unique options
        while len(set(options)) < 4:
            if any(place in str(correct) for place in ["USA", "France", "Italy", "Japan"]):
                options = [correct, "Antarctica", "Ocean", "Space"]
            elif any(char.isdigit() for char in str(correct)):
                options = [correct, "Different year", "Wrong century", "Future date"]
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
        explanation = f"{topic[0]} is a {subcategory.lower()[:-1]} dessert. "
        if len(topic) > 2:
            explanation += f"Features {topic[2]}. "
        if len(topic) > 3:
            explanation += f"Known for {topic[3]}."

        question["explanation"] = {
            "en": explanation[:350] if level <= 5 else explanation[:450],
            "es": f"{topic[0]} es un postre delicioso."[:350] if level <= 5 else explanation[:450],
            "de": f"{topic[0]} ist ein Dessert."[:350] if level <= 5 else explanation[:450],
            "nl": f"{topic[0]} is een dessert."[:350] if level <= 5 else explanation[:450]
        }

        questions.append(question)

    return questions

# Generate files
total_questions = 0
for subcategory, data in desserts_data.items():
    folder_path = f"src/questions/data/subjects/desserts/{subcategory}"

    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

    print(f"Processing {subcategory}...")

    for level in range(1, 11):
        questions = create_desserts_questions(subcategory, data["topics"], level)

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

print(f"\nTotal Desserts questions created: {total_questions:,}")