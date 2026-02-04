import os
import re
import json

# Load the files to fix
with open('files_to_fix.json', 'r') as f:
    files_info = json.load(f)

def count_questions(filepath):
    """Count actual question objects in file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            matches = re.findall(r'^\s+\{\s*\n\s+question:\s*\{', content, re.MULTILINE)
            return len(matches)
    except:
        return 0

def generate_pasta_questions():
    """Generate 3 expert-level pasta questions"""
    return [
        {
            "question": {
                "en": "What is the traditional thickness specification for authentic bigoli pasta from Veneto?",
                "es": "¿Cuál es la especificación tradicional de grosor para la pasta bigoli auténtica del Véneto?",
                "de": "Welche traditionelle Dickenspezifikation hat authentische Bigoli-Pasta aus Venetien?",
                "nl": "Wat is de traditionele dikte specificatie voor authentieke bigoli pasta uit Veneto?"
            },
            "options": ["3-4mm diameter", "1-2mm diameter", "5-6mm diameter", "7-8mm diameter"],
            "correct": 0,
            "explanation": {
                "en": "Authentic bigoli from Veneto must be 3-4mm in diameter, made with whole wheat flour and extruded through a special bronze torchio press. This thickness allows the rough texture to hold duck ragù or anchovy sauces perfectly. The pasta was traditionally made for feast days.",
                "es": "Los bigoli auténticos del Véneto deben tener 3-4mm de diámetro, hechos con harina integral y extruidos a través de una prensa torchio de bronce especial. Este grosor permite que la textura rugosa retenga perfectamente ragù de pato o salsas de anchoas. La pasta se hacía tradicionalmente para días festivos.",
                "de": "Authentische Bigoli aus Venetien müssen 3-4mm im Durchmesser sein, mit Vollkornmehl hergestellt und durch eine spezielle Bronze-Torchio-Presse extrudiert. Diese Dicke ermöglicht der rauen Textur perfekt Entenragù oder Sardellensaucen zu halten. Die Pasta wurde traditionell für Festtage hergestellt.",
                "nl": "Authentieke bigoli uit Veneto moet 3-4mm in diameter zijn, gemaakt met volkorenmeel en geëxtrudeerd door een speciale bronzen torchio pers. Deze dikte laat de ruwe textuur perfect eenden ragù of ansjovis sauzen vasthouden. De pasta werd traditioneel voor feestdagen gemaakt."
            }
        },
        {
            "question": {
                "en": "Which pasta shape from Puglia requires 'turning three times on the ferro' during traditional production?",
                "es": "¿Qué forma de pasta de Puglia requiere 'dar tres vueltas en el ferro' durante la producción tradicional?",
                "de": "Welche Pastaform aus Apulien erfordert 'dreimaliges Drehen auf dem Ferro' während der traditionellen Herstellung?",
                "nl": "Welke pastavorm uit Puglia vereist 'drie keer draaien op de ferro' tijdens traditionele productie?"
            },
            "options": ["Busiate", "Orecchiette", "Cavatelli", "Strozzapreti"],
            "correct": 0,
            "explanation": {
                "en": "Busiate from Trapani (though popular in Puglia) requires precisely three turns around a ferro (knitting needle) to create its characteristic spiral. Each turn must be 5mm apart for proper cooking. The technique dates to Arab influence in Sicily, where it was made for important guests.",
                "es": "Los busiate de Trapani (aunque populares en Puglia) requieren precisamente tres vueltas alrededor de un ferro (aguja de tejer) para crear su espiral característica. Cada vuelta debe estar a 5mm de distancia para cocción adecuada. La técnica data de influencia árabe en Sicilia, donde se hacía para invitados importantes.",
                "de": "Busiate aus Trapani (obwohl in Apulien beliebt) erfordert genau drei Drehungen um einen Ferro (Stricknadel) um ihre charakteristische Spirale zu erzeugen. Jede Drehung muss 5mm Abstand haben für richtiges Kochen. Die Technik stammt aus arabischem Einfluss in Sizilien, wo sie für wichtige Gäste gemacht wurde.",
                "nl": "Busiate uit Trapani (hoewel populair in Puglia) vereist precies drie draaien rond een ferro (breinaald) om zijn karakteristieke spiraal te creëren. Elke draai moet 5mm uit elkaar zijn voor juiste kooktijd. De techniek dateert uit Arabische invloed in Sicilië, waar het voor belangrijke gasten werd gemaakt."
            }
        },
        {
            "question": {
                "en": "What is the precise egg-to-flour ratio for competition-grade tortellini in Bologna?",
                "es": "¿Cuál es la proporción precisa de huevo a harina para tortellini de grado de competición en Bolonia?",
                "de": "Was ist das genaue Ei-zu-Mehl-Verhältnis für Wettbewerbs-Tortellini in Bologna?",
                "nl": "Wat is de precieze ei-tot-meel verhouding voor competitie-niveau tortellini in Bologna?"
            },
            "options": ["1 egg per 100g tipo 00 flour", "2 eggs per 100g flour", "1 egg per 150g flour", "3 eggs per 200g flour"],
            "correct": 0,
            "explanation": {
                "en": "Bologna's Dotta Confraternita del Tortellino specifies exactly 1 egg per 100g tipo 00 flour for competition tortellini. The dough must rest 30 minutes, be rolled to 0.6mm thickness, cut into 3cm squares, and contain precisely 5g filling. Each tortellino should have exactly 7 folds when properly closed.",
                "es": "La Dotta Confraternita del Tortellino de Bolonia especifica exactamente 1 huevo por 100g de harina tipo 00 para tortellini de competición. La masa debe reposar 30 minutos, enrollarse a 0.6mm de grosor, cortarse en cuadrados de 3cm y contener precisamente 5g de relleno. Cada tortellino debe tener exactamente 7 pliegues cuando está bien cerrado.",
                "de": "Bolognas Dotta Confraternita del Tortellino spezifiziert genau 1 Ei pro 100g Tipo 00 Mehl für Wettbewerbs-Tortellini. Der Teig muss 30 Minuten ruhen, auf 0,6mm Dicke gerollt, in 3cm Quadrate geschnitten werden und genau 5g Füllung enthalten. Jeder Tortellino sollte genau 7 Falten haben wenn richtig geschlossen.",
                "nl": "Bologna's Dotta Confraternita del Tortellino specificeert exact 1 ei per 100g tipo 00 meel voor competitie tortellini. Het deeg moet 30 minuten rusten, uitgerold tot 0,6mm dikte, gesneden in 3cm vierkanten en precies 5g vulling bevatten. Elke tortellino moet exact 7 vouwen hebben als correct gesloten."
            }
        }
    ]

def generate_seafood_questions():
    """Generate 3 expert-level seafood questions"""
    return [
        {
            "question": {
                "en": "What is the optimal internal temperature for perfectly cooked monkfish loin using sous vide?",
                "es": "¿Cuál es la temperatura interna óptima para lomo de rape perfectamente cocido usando sous vide?",
                "de": "Was ist die optimale Kerntemperatur für perfekt gegarten Seeteufel-Rücken mit Sous Vide?",
                "nl": "Wat is de optimale kerntemperatuur voor perfect gegaarde zeeduivel lende met sous vide?"
            },
            "options": ["48°C for 20 minutes", "55°C for 15 minutes", "42°C for 30 minutes", "60°C for 10 minutes"],
            "correct": 0,
            "explanation": {
                "en": "Monkfish requires 48°C for 20 minutes in sous vide to achieve the perfect texture - firm but not rubbery. Its unique collagen structure breaks down differently than other fish. At 48°C, the proteins denature slowly while maintaining moisture. Professional chefs often add kombu to enhance umami.",
                "es": "El rape requiere 48°C por 20 minutos en sous vide para lograr la textura perfecta - firme pero no gomosa. Su estructura de colágeno única se descompone diferente que otros pescados. A 48°C, las proteínas se desnaturalizan lentamente manteniendo humedad. Chefs profesionales a menudo añaden kombu para mejorar umami.",
                "de": "Seeteufel benötigt 48°C für 20 Minuten im Sous Vide für die perfekte Textur - fest aber nicht gummiartig. Seine einzigartige Kollagenstruktur bricht anders auf als andere Fische. Bei 48°C denaturieren die Proteine langsam während Feuchtigkeit erhalten bleibt. Profiköche fügen oft Kombu für Umami hinzu.",
                "nl": "Zeeduivel vereist 48°C voor 20 minuten in sous vide voor de perfecte textuur - stevig maar niet rubberachtig. Zijn unieke collageen structuur breekt anders af dan andere vis. Bij 48°C denatureren de eiwitten langzaam terwijl vocht behouden blijft. Professionele chefs voegen vaak kombu toe voor umami."
            }
        },
        {
            "question": {
                "en": "Which Japanese technique uses rice bran fermentation for preserving mackerel?",
                "es": "¿Qué técnica japonesa usa fermentación de salvado de arroz para preservar caballa?",
                "de": "Welche japanische Technik verwendet Reiskleie-Fermentation zur Konservierung von Makrele?",
                "nl": "Welke Japanse techniek gebruikt rijstzemelen fermentatie voor het conserveren van makreel?"
            },
            "options": ["Heshiko", "Shiokara", "Kusaya", "Funazushi"],
            "correct": 0,
            "explanation": {
                "en": "Heshiko is the traditional technique of fermenting mackerel in rice bran (nuka) for 6-12 months. The fish is first salted for weeks, then packed in nuka with koji mold. This creates intense umami through lactic acid fermentation. The result has 5 times the glutamate of fresh mackerel.",
                "es": "Heshiko es la técnica tradicional de fermentar caballa en salvado de arroz (nuka) por 6-12 meses. El pescado primero se sala por semanas, luego se empaca en nuka con moho koji. Esto crea umami intenso a través de fermentación de ácido láctico. El resultado tiene 5 veces el glutamato de caballa fresca.",
                "de": "Heshiko ist die traditionelle Technik Makrele in Reiskleie (Nuka) für 6-12 Monate zu fermentieren. Der Fisch wird erst wochenlang gesalzen, dann in Nuka mit Koji-Schimmel verpackt. Dies erzeugt intensives Umami durch Milchsäure-Fermentation. Das Ergebnis hat 5-mal das Glutamat frischer Makrele.",
                "nl": "Heshiko is de traditionele techniek van makreel fermenteren in rijstzemelen (nuka) voor 6-12 maanden. De vis wordt eerst weken gezouten, dan verpakt in nuka met koji schimmel. Dit creëert intense umami door melkzuur fermentatie. Het resultaat heeft 5 keer het glutamaat van verse makreel."
            }
        },
        {
            "question": {
                "en": "What is the Tsukiji grading system's highest classification for bluefin tuna belly?",
                "es": "¿Cuál es la clasificación más alta del sistema de clasificación Tsukiji para vientre de atún rojo?",
                "de": "Was ist die höchste Klassifizierung des Tsukiji-Bewertungssystems für Blauflossen-Thunfischbauch?",
                "nl": "Wat is de hoogste classificatie van het Tsukiji beoordelingssysteem voor blauwvintonijn buik?"
            },
            "options": ["Kami-Shimofuri O-toro", "Special O-toro", "Premium Chu-toro", "Grade A Akami"],
            "correct": 0,
            "explanation": {
                "en": "Kami-Shimofuri O-toro (God-marbled great belly) is the highest grade, found only in winter bluefin over 200kg. It requires perfect shimofuri (frost-like) marbling with 40%+ intramuscular fat evenly distributed. Less than 1% of tuna achieve this grade, selling for $500+/kg at auction.",
                "es": "Kami-Shimofuri O-toro (gran vientre marmoleado de dios) es el grado más alto, encontrado solo en atún rojo de invierno sobre 200kg. Requiere marmoleado shimofuri perfecto (como escarcha) con 40%+ grasa intramuscular distribuida uniformemente. Menos del 1% del atún logra este grado, vendiéndose por $500+/kg en subasta.",
                "de": "Kami-Shimofuri O-toro (Gott-marmorierter großer Bauch) ist die höchste Stufe, nur in Winter-Blauflossen über 200kg gefunden. Es erfordert perfekte Shimofuri (reifähnliche) Marmorierung mit 40%+ intramuskulärem Fett gleichmäßig verteilt. Weniger als 1% des Thunfischs erreicht diese Stufe, verkauft für $500+/kg bei Auktion.",
                "nl": "Kami-Shimofuri O-toro (God-gemarmerde grote buik) is de hoogste graad, alleen gevonden in winter blauwvin boven 200kg. Het vereist perfecte shimofuri (rijp-achtige) marmering met 40%+ intramusculair vet gelijkmatig verdeeld. Minder dan 1% van tonijn bereikt deze graad, verkoopt voor $500+/kg op veiling."
            }
        }
    ]

def add_questions_to_file(filepath, questions_to_add, category_path):
    """Add questions to a quiz file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find the last question's closing brace
        pattern = r'(\s+}\s*\n)(\s+\]\s*\n\s+};\s*\n)'

        # Format new questions
        new_questions_str = ""
        for q in questions_to_add:
            new_questions_str += ",\n  {\n"
            new_questions_str += f'    question:{json.dumps(q["question"], ensure_ascii=False)},\n'
            new_questions_str += f'    options:{json.dumps(q["options"], ensure_ascii=False)},\n'
            new_questions_str += f'    correct:{q["correct"]},\n'
            new_questions_str += f'    explanation:{json.dumps(q["explanation"], ensure_ascii=False)}\n'
            new_questions_str += "  }"

        # Replace the pattern
        replacement = r'\1' + new_questions_str + r'\n\2'
        new_content = re.sub(pattern, replacement, content)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

        return True
    except Exception as e:
        print(f"Error fixing {filepath}: {e}")
        return False

# Fix Pasta Types level10
pasta_file = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\food\Pasta Types\level10.js"
current = count_questions(pasta_file)
if current == 37:
    print("Fixing Pasta Types level10...")
    if add_questions_to_file(pasta_file, generate_pasta_questions(), "food/Pasta Types"):
        print("[OK] Pasta Types level10 fixed")

# Fix Seafood level10
seafood_file = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\food\Seafood\level10.js"
current = count_questions(seafood_file)
if current == 37:
    print("Fixing Seafood level10...")
    if add_questions_to_file(seafood_file, generate_seafood_questions(), "food/Seafood"):
        print("[OK] Seafood level10 fixed")

print("\nDone! Run fix_all_questions.py to verify all files now have 40 questions.")