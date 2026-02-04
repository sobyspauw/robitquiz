import os
import random

# Currencies subcategories with real facts
currencies_data = {
    "Cryptocurrency": {
        "topics": [
            ("Bitcoin", "2009", "Satoshi Nakamoto", "21 million limit", "First cryptocurrency"),
            ("Ethereum", "2015", "Vitalik Buterin", "Smart contracts", "Second largest"),
            ("Dogecoin", "2013", "Meme coin", "Unlimited supply", "Shiba Inu logo"),
            ("Ripple XRP", "2012", "Bank transfers", "100 billion supply", "Pre-mined"),
            ("Litecoin", "2011", "Silver to Bitcoin's gold", "84 million limit", "Faster blocks"),
            ("Cardano", "2017", "Proof of stake", "Academic approach", "ADA token"),
            ("Polkadot", "2020", "Interoperability", "Parachain auctions", "DOT token"),
            ("Chainlink", "2017", "Oracle network", "Smart contract data", "LINK token"),
            ("Binance Coin", "2017", "Exchange token", "Burn mechanism", "BNB"),
            ("Solana", "2020", "High speed", "65,000 TPS", "Proof of history")
        ]
    },
    "Digital Payments": {
        "topics": [
            ("PayPal", "1998", "Online payments", "200+ countries", "eBay origin"),
            ("Venmo", "2009", "Social payments", "US focused", "PayPal owned"),
            ("Apple Pay", "2014", "NFC payments", "Touch ID/Face ID", "iPhone integration"),
            ("Google Pay", "2018", "Android payments", "Merged services", "Tap to pay"),
            ("WeChat Pay", "2013", "China dominant", "1 billion users", "QR codes"),
            ("Alipay", "2004", "Alibaba", "China leader", "Ant Group"),
            ("Square/Block", "2009", "Card reader", "Small business", "Jack Dorsey"),
            ("Stripe", "2010", "Developer API", "Online business", "Invisible payments"),
            ("Revolut", "2015", "Multi-currency", "Digital banking", "Crypto support"),
            ("Wise", "2011", "TransferWise rebrand", "Low fees", "Real exchange rate")
        ]
    },
    "Euro": {
        "topics": [
            ("Launch date", "1999 virtual", "2002 physical", "19 countries", "340 million users"),
            ("ECB", "Frankfurt", "Central bank", "Christine Lagarde", "Monetary policy"),
            ("Maastricht Treaty", "1992", "Euro creation", "Convergence criteria", "EU foundation"),
            ("Euro coins", "8 denominations", "National sides", "Common side", "1 cent to 2 euro"),
            ("Euro notes", "7 denominations", "5 to 500 euro", "Bridges and arches", "Security features"),
            ("Eurozone", "19 members", "Croatia newest", "2023 joined", "Common currency"),
            ("Exchange rate", "Floating", "USD/EUR major pair", "Reserve currency", "Second most traded"),
            ("Euro crisis", "2010-2012", "Debt crisis", "Greece bailout", "Austerity measures"),
            ("Euro symbol", "€", "Greek epsilon", "1996 design", "Stability lines"),
            ("Non-euro EU", "7 countries", "Denmark opt-out", "Sweden referendum", "Poland zloty")
        ]
    },
    "Exchange Rates": {
        "topics": [
            ("Forex market", "$7.5 trillion daily", "Largest market", "24/5 trading", "Decentralized"),
            ("Currency pairs", "Base/quote", "EUR/USD", "Major pairs", "Pip movement"),
            ("Floating rate", "Market forces", "Supply demand", "Most currencies", "Daily changes"),
            ("Fixed rate", "Pegged currency", "Government set", "Hong Kong dollar", "Currency board"),
            ("Bretton Woods", "1944-1971", "Gold standard", "Fixed USD", "Nixon ended"),
            ("Purchasing power", "PPP theory", "Big Mac Index", "Real value", "Cost comparison"),
            ("Carry trade", "Interest differential", "Borrow low", "Invest high", "Risk strategy"),
            ("Currency crisis", "Rapid devaluation", "Capital flight", "1997 Asian", "Speculation"),
            ("Reserve currency", "USD dominant", "60% reserves", "Euro second", "Trade settlement"),
            ("SDR", "IMF basket", "5 currencies", "International reserve", "USD EUR CNY JPY GBP")
        ]
    },
    "Gold Standard": {
        "topics": [
            ("Classical period", "1870-1914", "Fixed gold price", "Convertibility", "Trade balance"),
            ("Britain first", "1821", "Post-Napoleonic", "Pound sterling", "Global spread"),
            ("US adoption", "1873", "Coinage Act", "Crime of '73", "Silver demonetized"),
            ("Gold price", "$20.67/oz", "1834-1933", "Roosevelt change", "$35/oz until 1971"),
            ("Fort Knox", "1936", "US depository", "147 million oz", "Half US gold"),
            ("Nixon shock", "1971", "Ended convertibility", "Fiat currency", "Floating rates"),
            ("Gold reserves", "US largest", "8,133 tonnes", "Germany second", "IMF third"),
            ("Gold backing", "Switzerland last", "2000 referendum", "40% backing ended", "Full fiat"),
            ("Digital gold", "Bitcoin comparison", "Store of value", "Limited supply", "Mining analogy"),
            ("Gold ETFs", "2003 first", "GLD largest", "Paper gold", "Price tracking")
        ]
    },
    "Historical Currencies": {
        "topics": [
            ("Roman denarius", "211 BC", "Silver coin", "Debasement", "Inflation cause"),
            ("Spanish dollar", "Pieces of eight", "First global", "US dollar origin", "Peso name"),
            ("Dutch guilder", "1680-2002", "Golden age", "Euro replaced", "Florin origin"),
            ("German mark", "1871-2002", "Deutschmark", "Strong currency", "Euro replaced"),
            ("French franc", "1360-2002", "Livre replacement", "Euro replaced", "Centime subdivision"),
            ("Italian lira", "1861-2002", "Unification currency", "High denomination", "Euro replaced"),
            ("Byzantine solidus", "312-1453", "Gold standard", "1000 years stable", "Medieval trade"),
            ("Chinese tael", "Silver weight", "Not coin", "Trade unit", "Regional variations"),
            ("Venetian ducat", "1284", "Gold coin", "Trade standard", "Stable 500 years"),
            ("British pound", "1158 origin", "Oldest active", "Sterling silver", "World reserve past")
        ]
    },
    "Hyperinflation": {
        "topics": [
            ("Zimbabwe", "2008", "89.7 sextillion %", "100 trillion note", "Currency abandoned"),
            ("Weimar Germany", "1923", "Wheelbarrow money", "4.2 trillion marks = $1", "Rentenmark solution"),
            ("Hungary", "1946", "Worst ever", "Pengo", "Daily doubling", "Forint replacement"),
            ("Venezuela", "2018", "1 million %", "Bolivar", "Multiple redenominations", "Dollar adoption"),
            ("Yugoslavia", "1994", "313 million %", "Dinar", "Daily price changes", "Currency reform"),
            ("Argentina", "1989", "5000%", "Austral", "Multiple currencies", "Peso cycles"),
            ("Peru", "1990", "7,481%", "Inti currency", "Fujimori reforms", "New sol"),
            ("Brazil", "1994", "2,477%", "Cruzeiro", "Real Plan", "Currency peg"),
            ("Turkey", "2001", "6 zeros removed", "Lira", "2005 redenomination", "New lira"),
            ("Greece", "1944", "13,800%", "Drachma", "Nazi occupation", "British gold")
        ]
    },
    "Pound Sterling": {
        "topics": [
            ("Origin", "775 AD", "Silver pennies", "240 pence = pound", "Weight measure"),
            ("Bank of England", "1694", "Central bank", "Old Lady", "Threadneedle Street"),
            ("Gold standard", "1821-1931", "Churchill return 1925", "Overvalued", "Depression factor"),
            ("Decimal Day", "1971", "100 pence", "Shilling abolished", "Public confusion"),
            ("Black Wednesday", "1992", "ERM exit", "Soros bet", "£1 billion profit"),
            ("Scottish notes", "3 banks issue", "Not legal tender", "Accepted widely", "Own designs"),
            ("Polymer notes", "2016", "£5 first", "Churchill portrait", "Cleaner longer lasting"),
            ("Cable", "GBP/USD nickname", "Transatlantic cable", "Telegraph rates", "1.50 historic"),
            ("Sterling area", "Commonwealth", "Post-war", "Dollar shortage", "1970s ended"),
            ("Brexit impact", "2016 drop", "1.50 to 1.20", "Volatility", "Trade uncertainty")
        ]
    },
    "US Dollar": {
        "topics": [
            ("Continental", "1775", "First US currency", "Hyperinflation", "Not worth a Continental"),
            ("Coinage Act", "1792", "Decimal system", "Spanish dollar based", "Eagle gold coin"),
            ("Greenback", "1861", "Civil War", "First paper", "Green ink back"),
            ("Federal Reserve", "1913", "Central bank", "12 districts", "Dollar management"),
            ("Gold standard end", "1971", "Nixon shock", "Fiat currency", "Petrodollar system"),
            ("In God We Trust", "1956", "Official motto", "Cold War addition", "All bills 1957"),
            ("Dollar dominance", "60% reserves", "Oil pricing", "SWIFT system", "Sanctions tool"),
            ("Dollar bills", "7 denominations", "$1 most common", "Cotton paper", "2.8 year life"),
            ("Dollarization", "Foreign adoption", "Ecuador", "El Salvador", "Zimbabwe 2009"),
            ("Digital dollar", "CBDC research", "FedNow 2023", "China competition", "Privacy concerns")
        ]
    },
    "World Currencies": {
        "topics": [
            ("Japanese yen", "1871", "¥ symbol", "Safe haven", "Zero interest rates"),
            ("Chinese yuan", "Renminbi", "People's currency", "Managed float", "SDR basket 2016"),
            ("Swiss franc", "CHF", "Safe haven", "Negative rates", "SNB intervention"),
            ("Canadian dollar", "Loonie", "Oil correlation", "Polymer notes", "Commonwealth"),
            ("Australian dollar", "AUD", "Commodity currency", "Carry trade", "Pacific peso"),
            ("Indian rupee", "₹ symbol", "2010 design", "Managed float", "Capital controls"),
            ("Russian ruble", "₽ symbol", "2013 design", "Sanctions impact", "Oil price link"),
            ("Brazilian real", "R$", "1994 created", "Inflation fighter", "BRICS member"),
            ("Mexican peso", "MXN", "Oldest Americas", "Free floating", "Emerging market"),
            ("South African rand", "ZAR", "1961", "Gold correlation", "Volatile", "BRICS")
        ]
    }
}

def create_currencies_questions(subcategory, topics, level):
    questions = []
    random.seed(42 + hash(subcategory) + level)

    for i in range(100):
        topic = random.choice(topics)
        q_type = i % 10

        if q_type == 0:  # Basic identification
            if level <= 3:
                q = f"What is {topic[0]}?"
                correct = topic[1] if len(topic) > 1 else topic[0]
                options = [correct, "Different currency", "Stock market", "Banking system"]
            elif level <= 6:
                q = f"What defines {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else topic[1]
                options = [correct, "Different feature", "Unrelated aspect", "Common trait"]
            else:
                q = f"What distinguishes {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2]
                options = [correct, "Regular feature", "Standard aspect", "Common element"]

        elif q_type == 1:  # Time period/Date
            if level <= 3:
                q = f"When was {topic[0]} created?"
                correct = topic[1] if any(char.isdigit() for char in str(topic[1])) else "Historic period"
                options = [correct, "Different era", "Recent only", "Never created"]
            elif level <= 6:
                q = f"What period for {topic[0]}?"
                correct = topic[1] if len(topic) > 1 and any(char.isdigit() for char in str(topic[1])) else "Key period"
                options = [correct, "Wrong decade", "Different period", "Not applicable"]
            else:
                q = f"Exact timeline for {topic[0]}?"
                correct = topic[1] if "-" in str(topic[1]) or any(char.isdigit() for char in str(topic[1])) else "Specific period"
                options = [correct, "Earlier period", "Later period", "Different timeline"]

        elif q_type == 2:  # Value/Statistics
            if level <= 3:
                q = f"Value aspect of {topic[0]}?"
                correct = topic[3] if len(topic) > 3 and any(char.isdigit() for char in str(topic[3])) else "Significant value"
                options = [correct, "No value", "Different amount", "Unknown"]
            elif level <= 6:
                q = f"What statistic for {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Key metric"
                options = [correct, "Wrong number", "Different stat", "Not measured"]
            else:
                q = f"Precise figure for {topic[0]}?"
                correct = topic[4] if len(topic) > 4 and any(char.isdigit() for char in str(topic[4])) else topic[3] if len(topic) > 3 else "Exact amount"
                options = [correct, "Lower amount", "Higher amount", "Different figure"]

        elif q_type == 3:  # Creator/Origin
            if level <= 3:
                q = f"Who created {topic[0]}?"
                correct = topic[2] if len(topic) > 2 and not any(char.isdigit() for char in str(topic[2])) else "Creator"
                options = [correct, "Different person", "Government", "Unknown"]
            elif level <= 6:
                q = f"Origin of {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else topic[1] if len(topic) > 1 else "Specific origin"
                options = [correct, "Different source", "Other origin", "Unknown source"]
            else:
                q = f"Founding details of {topic[0]}?"
                correct = topic[2] if len(topic) > 2 else "Founding information"
                options = [correct, "Wrong details", "Different founder", "Incorrect origin"]

        elif q_type == 4:  # Technology/Feature
            if subcategory in ["Cryptocurrency", "Digital Payments"]:
                q = f"Technology in {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Key technology"
                options = [correct, "Old technology", "Different system", "No technology"]
            else:
                q = f"Feature of {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else topic[2] if len(topic) > 2 else "Key feature"
                options = [correct, "Missing feature", "Different aspect", "Not applicable"]

        elif q_type == 5:  # Geographic/Location
            if level <= 3:
                q = f"Where is {topic[0]} used?"
                correct = topic[3] if len(topic) > 3 and any(place in str(topic[3]) for place in ["countries", "US", "China", "Europe"]) else "Global"
                options = [correct, "Different region", "Nowhere", "Limited area"]
            elif level <= 6:
                q = f"Geographic reach of {topic[0]}?"
                correct = topic[3] if len(topic) > 3 else "Wide adoption"
                options = [correct, "Local only", "Different area", "No adoption"]
            else:
                q = f"Specific region for {topic[0]}?"
                correct = topic[4] if len(topic) > 4 else topic[3] if len(topic) > 3 else "Key region"
                options = [correct, "Wrong region", "Different area", "Not used there"]

        elif q_type == 6:  # Impact/Crisis
            if subcategory == "Hyperinflation":
                q = f"Impact of {topic[0]} crisis?"
                correct = topic[2] if len(topic) > 2 else "Severe impact"
                options = [correct, "No impact", "Minor effect", "Positive outcome"]
            else:
                q = f"Effect of {topic[0]}?"
                correct = topic[4] if len(topic) > 4 else topic[3] if len(topic) > 3 else "Significant effect"
                options = [correct, "No effect", "Opposite effect", "Unknown impact"]

        elif q_type == 7:  # Comparison
            other = random.choice([t for t in topics if t != topic])
            if level <= 3:
                q = f"{topic[0]} vs {other[0]}?"
                correct = "Different systems"
                options = [correct, "Same thing", "Identical", "Both defunct"]
            elif level <= 6:
                q = f"Difference between {topic[0]} and {other[0]}?"
                correct = "Different purposes" if subcategory == "Digital Payments" else "Different values"
                options = [correct, "No difference", "Same system", "Both equal"]
            else:
                q = f"What separates {topic[0]} from {other[0]}?"
                correct = topic[3] if len(topic) > 3 else "Unique feature"
                options = [correct, "Nothing different", "Same features", "Equal status"]

        elif q_type == 8:  # Current status
            if level <= 3:
                q = f"Status of {topic[0]}?"
                correct = "Active" if not any(year in str(topic) for year in ["abandoned", "ended", "replaced"]) else "Historical"
                options = [correct, "Unknown", "Never existed", "Future only"]
            elif level <= 6:
                q = f"Current state of {topic[0]}?"
                correct = topic[4] if len(topic) > 4 else "Current status"
                options = [correct, "Different status", "Defunct", "Not applicable"]
            else:
                q = f"Modern relevance of {topic[0]}?"
                correct = "Still relevant" if subcategory != "Historical Currencies" else "Historical importance"
                options = [correct, "Irrelevant", "Never important", "Future only"]

        else:  # Symbol/Representation
            if level <= 3:
                q = f"Symbol for {topic[0]}?"
                correct = topic[2] if any(symbol in str(topic[2]) for symbol in ["$", "€", "£", "¥", "₹", "₽"]) else "Currency symbol"
                options = [correct, "Different symbol", "No symbol", "Letter only"]
            elif level <= 6:
                q = f"How is {topic[0]} represented?"
                correct = topic[2] if len(topic) > 2 else "Standard format"
                options = [correct, "Different format", "No standard", "Variable representation"]
            else:
                q = f"Official designation of {topic[0]}?"
                correct = topic[0] if "/" in topic[0] or any(c.isupper() for c in topic[0]) else "Official name"
                options = [correct, "Unofficial name", "Wrong designation", "Nickname only"]

        # Ensure unique options
        while len(set(options)) < 4:
            if any(char.isdigit() for char in str(correct)):
                options = [correct, "Different number", "Higher value", "Lower value"]
            elif "$" in str(correct) or "€" in str(correct) or "trillion" in str(correct):
                options = [correct, "Different amount", "Wrong currency", "Other value"]
            else:
                options = [correct, f"Alternative {i}", f"Different {i}", f"Other {i}"]

        random.shuffle(options)
        correct_index = options.index(correct)

        # Create translations
        question = {
            "question": {
                "en": q[:140] if level <= 5 else q[:160],
                "es": f"¿{q[:-1]}?"[:140] if level <= 5 else f"¿{q[:-1]}?"[:160],
                "de": q.replace("What", "Was").replace("Who", "Wer")[:140] if level <= 5 else q.replace("What", "Was")[:160],
                "nl": q.replace("What", "Wat").replace("Who", "Wie")[:140] if level <= 5 else q.replace("What", "Wat")[:160]
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
        explanation = f"{topic[0]} is important in finance. "
        if len(topic) > 2:
            explanation += f"Key aspect: {topic[2]}. "
        if len(topic) > 3:
            explanation += f"Notable for {topic[3]}."

        question["explanation"] = {
            "en": explanation[:350] if level <= 5 else explanation[:450],
            "es": f"{topic[0]} es importante en finanzas."[:350] if level <= 5 else explanation[:450],
            "de": f"{topic[0]} ist wichtig in Finanzen."[:350] if level <= 5 else explanation[:450],
            "nl": f"{topic[0]} is belangrijk in financiën."[:350] if level <= 5 else explanation[:450]
        }

        questions.append(question)

    return questions

# Generate files
total_questions = 0
for subcategory, data in currencies_data.items():
    subcat_folder = subcategory.replace(" ", " ")
    folder_path = f"src/questions/data/subjects/currencies/{subcat_folder}"

    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

    print(f"Processing {subcategory}...")

    for level in range(1, 11):
        questions = create_currencies_questions(subcategory, data["topics"], level)

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

print(f"\nTotal Currencies questions created: {total_questions:,}")