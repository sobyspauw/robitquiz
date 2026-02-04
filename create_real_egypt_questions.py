import os
import random

# Egypt subcategories with real facts
egypt_data = {
    "Ancient Rulers": {
        "topics": [
            ("Tutankhamun", "1332-1323 BCE", "Boy king", "Tomb discovered 1922", "Died at 19"),
            ("Cleopatra VII", "69-30 BCE", "Last pharaoh", "Spoke 9 languages", "Ptolemaic dynasty"),
            ("Ramesses II", "1279-1213 BCE", "The Great", "13 sons, 23 daughters", "Abu Simbel builder"),
            ("Hatshepsut", "1479-1458 BCE", "Female pharaoh", "Wore false beard", "Peaceful reign"),
            ("Akhenaten", "1353-1336 BCE", "Monotheist pharaoh", "Aten worship", "Father of Tutankhamun"),
            ("Nefertiti", "1370-1330 BCE", "Queen", "Famous bust", "Wife of Akhenaten"),
            ("Khufu", "2589-2566 BCE", "Great Pyramid builder", "4th dynasty", "Ruled 23 years"),
            ("Thutmose III", "1479-1425 BCE", "Napoleon of Egypt", "17 military campaigns", "Expanded empire"),
            ("Amenhotep III", "1391-1353 BCE", "The Magnificent", "Peaceful prosperity", "Father of Akhenaten"),
            ("Seti I", "1290-1279 BCE", "Father of Ramesses II", "Military leader", "Temple builder")
        ]
    },
    "Gods and Mythology": {
        "topics": [
            ("Ra", "Sun god", "Falcon head", "Creator deity", "Sailed sky boat"),
            ("Anubis", "Death god", "Jackal head", "Mummification", "Weighs hearts"),
            ("Isis", "Magic goddess", "Mother figure", "Throne headdress", "Protector"),
            ("Osiris", "Afterlife god", "Green skin", "Murdered by Set", "Judge of dead"),
            ("Horus", "Sky god", "Falcon form", "Eye of Horus", "Pharaoh protector"),
            ("Thoth", "Wisdom god", "Ibis head", "Invented writing", "Moon deity"),
            ("Set", "Chaos god", "Unknown animal", "Desert ruler", "Killed Osiris"),
            ("Bastet", "Cat goddess", "Protector", "Joy and music", "Bubastis city"),
            ("Sobek", "Crocodile god", "Nile deity", "Military power", "Fertility"),
            ("Ptah", "Creator god", "Memphis patron", "Craftsmen protector", "Mummified form")
        ]
    },
    "Daily Life": {
        "topics": [
            ("Bread and beer", "Staple foods", "Worker wages", "Daily consumption", "Fermented drinks"),
            ("Papyrus", "Writing material", "Nile plant", "Scroll making", "Export product"),
            ("Makeup", "Both genders", "Kohl eyeliner", "Lead-based", "Sun protection"),
            ("Board games", "Senet popular", "Afterlife connection", "30 squares", "Strategy game"),
            ("Clothing", "Linen fabric", "White color", "Social status", "Minimal coverage"),
            ("Housing", "Mud brick", "Flat roofs", "Sleeping on roofs", "Small windows"),
            ("Medicine", "Advanced surgery", "Honey antiseptic", "Brain surgery", "Medical papyri"),
            ("Education", "Scribe schools", "Hieroglyphics", "Elite only", "Temple learning"),
            ("Marriage", "Love poems", "Brother-sister terms", "Property rights", "Divorce allowed"),
            ("Work", "Farmers majority", "Seasonal labor", "Pyramid builders", "Paid workers")
        ]
    },
    "Hieroglyphics": {
        "topics": [
            ("Rosetta Stone", "196 BCE", "Decipherment key", "Three scripts", "Found 1799"),
            ("Champollion", "Deciphered 1822", "French scholar", "Coptic knowledge", "23 years work"),
            ("Cartouche", "Royal names", "Oval shape", "Protection symbol", "Rope meaning"),
            ("Hieratic", "Cursive script", "Faster writing", "Priests used", "Papyrus suited"),
            ("Demotic", "People's script", "Later period", "Business use", "Simplified form"),
            ("Determinatives", "Meaning clarifiers", "No vowels", "Context clues", "3000+ signs"),
            ("Direction", "Read any way", "Face direction", "Right to left common", "Artistic choice"),
            ("Phonograms", "Sound symbols", "Consonants only", "24 main signs", "Alphabet base"),
            ("Ideograms", "Idea symbols", "Picture meaning", "Direct representation", "Common words"),
            ("Sacred writing", "God's words", "Temple use", "Magical power", "Eternal life")
        ]
    },
    "Mummies": {
        "topics": [
            ("Mummification", "70 days process", "Natron salt", "Organ removal", "Preservation"),
            ("Canopic jars", "Four jars", "Organ storage", "God protectors", "Limestone/alabaster"),
            ("Brain removal", "Through nose", "Metal hook", "Discarded organ", "Not preserved"),
            ("Heart left", "Weighing ceremony", "Afterlife judgment", "Truth feather", "Only organ kept"),
            ("Resin coating", "Tree sap", "Waterproofing", "Antibacterial", "Black color"),
            ("Linen wrapping", "Hundreds meters", "Multiple layers", "Amulets inserted", "Prayers written"),
            ("Animal mummies", "Cats sacred", "Crocodiles", "Birds", "Pet afterlife"),
            ("Natural mummies", "Desert dried", "Pre-dynasty", "Sand burial", "No chemicals"),
            ("Royal mummies", "Valley Kings", "Gold masks", "Multiple coffins", "Elaborate tombs"),
            ("Modern study", "CT scans", "DNA analysis", "Disease evidence", "Diet information")
        ]
    },
    "Nile River": {
        "topics": [
            ("Annual flood", "Inundation", "July-October", "Fertile soil", "Agriculture base"),
            ("Nilometer", "Flood measure", "Tax calculation", "Stone gauges", "Prediction tool"),
            ("Transport", "Boat travel", "Trade route", "Stone moving", "North current"),
            ("Irrigation", "Canal system", "Shaduf device", "Basin method", "Year-round farming"),
            ("Delta region", "Lower Egypt", "Marshlands", "Papyrus growth", "Mediterranean coast"),
            ("Blue Nile", "Ethiopia source", "80% water", "Summer floods", "Joins White Nile"),
            ("Aswan Dam", "Modern control", "Lake Nasser", "Flood prevention", "Year-round irrigation"),
            ("Crocodiles", "Sacred animals", "Sobek worship", "Dangerous presence", "Mummified"),
            ("Fish", "Dietary staple", "Preservation methods", "Religious taboos", "Trade goods"),
            ("Lotus flower", "Sacred plant", "Blue and white", "Perfume source", "Art symbol")
        ]
    },
    "Pyramids": {
        "topics": [
            ("Great Pyramid", "Giza", "146.5m original", "2.3 million blocks", "Khufu's tomb"),
            ("Bent Pyramid", "Dahshur", "Angle change", "Sneferu built", "First attempt"),
            ("Step Pyramid", "Djoser's", "First pyramid", "Imhotep designed", "2667 BCE"),
            ("Pyramid texts", "Oldest religious", "Afterlife spells", "5th dynasty", "Star maps"),
            ("Construction", "Ramp theories", "Copper tools", "20 years build", "100,000 workers"),
            ("Alignment", "True north", "Star observation", "2-3 minute accuracy", "Ancient astronomy"),
            ("Chambers", "King's chamber", "Queen's chamber", "Grand gallery", "Air shafts"),
            ("Casing stones", "White limestone", "Smooth surface", "Earthquakes removed", "Originally gleaming"),
            ("Sphinx", "Guardian statue", "Khafre's face", "Lion body", "4,500 years old"),
            ("Pyramid complex", "Mortuary temple", "Causeway", "Valley temple", "Satellite pyramids")
        ]
    },
    "Technology": {
        "topics": [
            ("Calendar", "365 days", "Three seasons", "Star observation", "Leap year missing"),
            ("Surgery tools", "Bronze scalpels", "Forceps", "Bone saws", "Surgical papyri"),
            ("Glass making", "1500 BCE start", "Colored beads", "Core forming", "Trade valuable"),
            ("Metallurgy", "Bronze working", "Gold refining", "Electrum alloy", "Lost wax casting"),
            ("Ships", "Papyrus boats", "Cedar wood", "Sail invention", "Khufu ship"),
            ("Lighthouse", "Pharos Alexandria", "Seven wonders", "138 meters", "Mirror system"),
            ("Water clock", "Time keeping", "Shadow clocks", "Star charts", "Hour division"),
            ("Cosmetics", "Chemistry knowledge", "Mineral grinding", "Oil extraction", "Perfume making"),
            ("Architecture", "Post and lintel", "Corbelled vaults", "Column types", "Obelisk raising"),
            ("Agriculture", "Ox-drawn plow", "Sickle design", "Grain storage", "Winnowing methods")
        ]
    },
    "Trade": {
        "topics": [
            ("Gold", "Nubian mines", "Currency form", "Temple decoration", "Royal monopoly"),
            ("Incense", "Punt expeditions", "Myrrh trees", "Religious use", "Valuable commodity"),
            ("Papyrus", "Export monopoly", "Mediterranean trade", "Writing material", "Rope making"),
            ("Grain", "Export surplus", "Roman supply", "Storage systems", "Famine prevention"),
            ("Stone", "Granite quarries", "Limestone", "Alabaster", "Building materials"),
            ("Cedar wood", "Lebanon import", "Ship building", "Coffin making", "Roofing beams"),
            ("Ivory", "Elephant tusks", "Nubian trade", "Luxury items", "Furniture inlays"),
            ("Linen", "Flax cultivation", "Export fabric", "Mummy wrapping", "Quality grades"),
            ("Natron", "Salt export", "Mummification", "Glass making", "Cleaning agent"),
            ("Wine", "Delta production", "Amphora storage", "Elite drink", "Temple offerings")
        ]
    },
    "Warfare": {
        "topics": [
            ("Chariot", "Hyksos introduction", "Battle tactic", "Two horses", "Archer platform"),
            ("Composite bow", "Increased range", "Laminated wood", "Horn and sinew", "Elite weapon"),
            ("Battle of Kadesh", "1274 BCE", "Ramesses II", "Hittites", "Largest chariot battle"),
            ("Bronze weapons", "Swords", "Spears", "Daggers", "Armor limited"),
            ("Fortifications", "Mud brick walls", "Desert forts", "Garrison towns", "Nubian border"),
            ("Navy", "Nile fleet", "Sea Peoples battle", "Ram ships", "Marine soldiers"),
            ("Mercenaries", "Nubian archers", "Sherden warriors", "Libyan troops", "Greek soldiers"),
            ("Siege warfare", "Battering rams", "Scaling ladders", "Undermining", "Psychological warfare"),
            ("Military ranks", "Professional army", "Officer class", "Veteran rewards", "Land grants"),
            ("Victory records", "Temple reliefs", "Propaganda art", "Enemy counting", "Hand collection")
        ]
    }
}

def create_egypt_questions(subcategory, topics, level):
    questions = []
    random.seed(42 + hash(subcategory) + level)

    for i in range(100):
        topic = random.choice(topics)
        q_type = i % 10

        if q_type == 0:  # Basic identification
            if level <= 3:
                q = f"What is {topic[0]}?"
                correct = topic[1] if len(topic) > 1 else topic[0]
                options = [correct, "Something else", "Unknown", "Not related"]
            elif level <= 6:
                q = f"What role did {topic[0]} play?"
                correct = topic[2] if len(topic) > 2 else topic[1]
                options = [correct, "Different role", "Minor role", "No role"]
            else:
                q = f"What significance did {topic[0]} have?"
                correct = topic[3] if len(topic) > 3 else topic[2]
                options = [correct, "Different significance", "Minor importance", "Unknown"]

        elif q_type == 1:  # Time period
            if level <= 3:
                q = f"When was {topic[0]} important?"
                correct = topic[1] if "BCE" in str(topic[1]) or "dynasty" in str(topic[1]) else "Ancient times"
                options = [correct, "Modern times", "Medieval period", "Unknown"]
            elif level <= 6:
                q = f"What era is {topic[0]} from?"
                correct = topic[1] if len(topic) > 1 else "Ancient Egypt"
                options = [correct, "Greek period", "Roman period", "Modern era"]
            else:
                q = f"What specific period for {topic[0]}?"
                correct = topic[1] if len(topic) > 1 else "Dynastic period"
                options = [correct, "Pre-dynastic", "Late period", "Ptolemaic"]

        elif q_type == 2:  # Characteristics
            if level <= 3:
                q = f"What characterized {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else "Important feature"
                options = [correct, "Different trait", "Minor aspect", "Not applicable"]
            elif level <= 6:
                q = f"What was unique about {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Special feature"
                options = [correct, "Common feature", "Shared trait", "Regular aspect"]
            else:
                q = f"What distinguished {topic[0]}?"
                correct = topic[4] if len(topic) > 4 else topic[3] if len(topic) > 3 else "Unique aspect"
                options = [correct, "Standard feature", "Typical trait", "Common element"]

        elif q_type == 3:  # Purpose/Function
            if level <= 3:
                q = f"What was {topic[0]} used for?"
                correct = topic[2] if len(topic) > 2 else "Important use"
                options = [correct, "Different purpose", "Minor use", "Not used"]
            elif level <= 6:
                q = f"What function did {topic[0]} serve?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Key function"
                options = [correct, "Secondary role", "Different function", "No function"]
            else:
                q = f"What role did {topic[0]} fulfill?"
                correct = topic[4] if len(topic) > 4 else topic[3] if len(topic) > 3 else "Critical role"
                options = [correct, "Minor role", "Different purpose", "Unrelated function"]

        elif q_type == 4:  # Association
            if level <= 3:
                q = f"What relates to {topic[0]}?"
                correct = topic[1] if len(topic) > 1 else "Related item"
                options = [correct, "Unrelated", "Different thing", "Not connected"]
            elif level <= 6:
                q = f"What connects with {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else topic[1]
                options = [correct, "Different link", "Weak connection", "No relation"]
            else:
                q = f"What association exists with {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Strong link"
                options = [correct, "Indirect link", "Weak tie", "No connection"]

        elif q_type == 5:  # Location
            if subcategory == "Pyramids":
                q = f"Where is {topic[0]} located?"
                correct = topic[1] if len(topic) > 1 else "Egypt"
                options = [correct, "Sudan", "Libya", "Israel"]
            elif subcategory == "Nile River":
                q = f"Where does {topic[0]} occur?"
                correct = "Nile Valley" if level <= 5 else topic[1] if len(topic) > 1 else "River region"
                options = [correct, "Desert", "Mediterranean", "Red Sea"]
            else:
                q = f"Where was {topic[0]} important?"
                correct = "Ancient Egypt"
                options = [correct, "Mesopotamia", "Greece", "Rome"]

        elif q_type == 6:  # Method/Process
            if level <= 3:
                q = f"How was {topic[0]} done?"
                correct = topic[2] if len(topic) > 2 else "Traditional method"
                options = [correct, "Modern way", "Different method", "Not done"]
            elif level <= 6:
                q = f"What process involved {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Complex process"
                options = [correct, "Simple method", "Different process", "No process"]
            else:
                q = f"What technique used {topic[0]}?"
                correct = topic[4] if len(topic) > 4 else topic[3] if len(topic) > 3 else "Advanced technique"
                options = [correct, "Basic method", "Alternative way", "Different technique"]

        elif q_type == 7:  # Cultural significance
            if level <= 3:
                q = f"Why was {topic[0]} important?"
                correct = topic[2] if len(topic) > 2 else "Cultural value"
                options = [correct, "Not important", "Minor value", "Unknown"]
            elif level <= 6:
                q = f"What meaning did {topic[0]} have?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Deep meaning"
                options = [correct, "Surface meaning", "No meaning", "Different meaning"]
            else:
                q = f"What symbolized {topic[0]}?"
                correct = topic[4] if len(topic) > 4 else topic[3] if len(topic) > 3 else "Sacred symbol"
                options = [correct, "Common symbol", "No symbolism", "Different symbol"]

        elif q_type == 8:  # Comparison
            other = random.choice([t for t in topics if t != topic])
            if level <= 3:
                q = f"How does {topic[0]} compare to {other[0]}?"
                correct = "Different purpose"
                options = [correct, "Same thing", "Identical", "Unrelated"]
            elif level <= 6:
                q = f"What distinguishes {topic[0]} from {other[0]}?"
                correct = topic[2] if len(topic) > 2 else "Unique feature"
                options = [correct, "Nothing different", "Minor difference", "Same category"]
            else:
                q = f"What separates {topic[0]} from others?"
                correct = topic[3] if len(topic) > 3 else "Special quality"
                options = [correct, "Common trait", "Shared feature", "Nothing special"]

        else:  # Impact/Legacy
            if level <= 3:
                q = f"What did {topic[0]} influence?"
                correct = "Egyptian culture"
                options = [correct, "No influence", "Modern only", "Unknown impact"]
            elif level <= 6:
                q = f"What legacy did {topic[0]} leave?"
                correct = topic[3] if len(topic) > 3 else "Lasting impact"
                options = [correct, "No legacy", "Minor impact", "Forgotten"]
            else:
                q = f"How did {topic[0]} shape history?"
                correct = topic[4] if len(topic) > 4 else "Major influence"
                options = [correct, "Minor role", "No effect", "Negative impact"]

        # Ensure unique options
        while len(set(options)) < 4:
            if "BCE" in correct or "dynasty" in correct:
                options = [correct, "500 BCE", "1000 CE", "Modern era"]
            elif any(word in correct.lower() for word in ["god", "deity", "goddess"]):
                options = [correct, "Mortal ruler", "Foreign deity", "Modern concept"]
            else:
                options = [correct, f"Alternative {i}", f"Different {i}", f"Other {i}"]

        random.shuffle(options)
        correct_index = options.index(correct)

        # Create translations
        question = {
            "question": {
                "en": q[:140] if level <= 5 else q[:160],
                "es": f"¿{q[:-1]}?"[:140] if level <= 5 else f"¿{q[:-1]}?"[:160],
                "de": q.replace("What", "Was").replace("?", "?")[:140] if level <= 5 else q.replace("What", "Was")[:160],
                "nl": q.replace("What", "Wat").replace("?", "?")[:140] if level <= 5 else q.replace("What", "Wat")[:160]
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
        explanation = f"{topic[0]} was important in ancient Egypt. "
        if len(topic) > 2:
            explanation += f"Known for {topic[2]}. "
        if len(topic) > 3:
            explanation += f"Significant for {topic[3]}."

        question["explanation"] = {
            "en": explanation[:350] if level <= 5 else explanation[:450],
            "es": f"{topic[0]} fue importante en el antiguo Egipto."[:350] if level <= 5 else f"{topic[0]} fue importante."[:450],
            "de": f"{topic[0]} war im alten Ägypten wichtig."[:350] if level <= 5 else f"{topic[0]} war wichtig."[:450],
            "nl": f"{topic[0]} was belangrijk in het oude Egypte."[:350] if level <= 5 else f"{topic[0]} was belangrijk."[:450]
        }

        questions.append(question)

    return questions

# Generate files
total_questions = 0
for subcategory, data in egypt_data.items():
    subcat_folder = subcategory.replace(" ", " ")
    folder_path = f"src/questions/data/subjects/egypt/{subcat_folder}"

    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

    print(f"Processing {subcategory}...")

    for level in range(1, 11):
        questions = create_egypt_questions(subcategory, data["topics"], level)

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

print(f"\nTotal Egypt questions created: {total_questions:,}")