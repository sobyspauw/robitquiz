#!/usr/bin/env python3
# Script to add 60 new questions to Artists level4.js

new_questions = [
    {
        "question": {
            "en": "Which Renaissance artist painted 'The Wedding at Cana'?",
            "es": "¿Qué artista renacentista pintó 'Las Bodas de Caná'?",
            "de": "Welcher Renaissance-Künstler malte 'Die Hochzeit zu Kana'?",
            "nl": "Welke Renaissance-kunstenaar schilderde 'De Bruiloft te Kana'?"
        },
        "options": [
            {"en": "Paolo Veronese", "es": "Paolo Veronese", "de": "Paolo Veronese", "nl": "Paolo Veronese"},
            {"en": "Tintoretto", "es": "Tintoretto", "de": "Tintoretto", "nl": "Tintoretto"},
            {"en": "Titian", "es": "Tiziano", "de": "Tizian", "nl": "Titiaan"},
            {"en": "Giorgione", "es": "Giorgione", "de": "Giorgione", "nl": "Giorgione"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Paolo Veronese painted 'The Wedding at Cana' (1562-1563), an enormous canvas featuring over 130 figures including musicians and contemporary Venetian nobility.",
            "es": "Paolo Veronese pintó 'Las Bodas de Caná' (1562-1563), un enorme lienzo con más de 130 figuras incluyendo músicos y nobleza veneciana contemporánea.",
            "de": "Paolo Veronese malte 'Die Hochzeit zu Kana' (1562-1563), eine riesige Leinwand mit über 130 Figuren, darunter Musiker und zeitgenössische venezianische Adlige.",
            "nl": "Paolo Veronese schilderde 'De Bruiloft te Kana' (1562-1563), een enorm doek met meer dan 130 figuren waaronder musici en hedendaagse Venetiaanse adel."
        }
    },
    {
        "question": {
            "en": "Who painted the controversial 'Judith Beheading Holofernes'?",
            "es": "¿Quién pintó la controvertida 'Judith Decapitando a Holofernes'?",
            "de": "Wer malte das kontroverse 'Judith enthauptet Holofernes'?",
            "nl": "Wie schilderde het controversiële 'Judith Onthoofdt Holofernes'?"
        },
        "options": [
            {"en": "Artemisia Gentileschi", "es": "Artemisia Gentileschi", "de": "Artemisia Gentileschi", "nl": "Artemisia Gentileschi"},
            {"en": "Caravaggio", "es": "Caravaggio", "de": "Caravaggio", "nl": "Caravaggio"},
            {"en": "Sofonisba Anguissola", "es": "Sofonisba Anguissola", "de": "Sofonisba Anguissola", "nl": "Sofonisba Anguissola"},
            {"en": "Lavinia Fontana", "es": "Lavinia Fontana", "de": "Lavinia Fontana", "nl": "Lavinia Fontana"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Artemisia Gentileschi painted this powerful work around 1620. As one of the first female painters to achieve recognition, her dramatic interpretation reflected personal experiences.",
            "es": "Artemisia Gentileschi pintó esta poderosa obra alrededor de 1620. Como una de las primeras pintoras en alcanzar reconocimiento, su interpretación dramática reflejaba experiencias personales.",
            "de": "Artemisia Gentileschi malte dieses kraftvolle Werk um 1620. Als eine der ersten weiblichen Malerinnen, die Anerkennung erlangten, spiegelte ihre dramatische Interpretation persönliche Erfahrungen wider.",
            "nl": "Artemisia Gentileschi schilderde dit krachtige werk rond 1620. Als een van de eerste vrouwelijke schilders die erkenning verwierf, weerspiegelde haar dramatische interpretatie persoonlijke ervaringen."
        }
    },
    {
        "question": {
            "en": "Which Dutch master painted 'The Anatomy Lesson of Dr. Nicolaes Tulp'?",
            "es": "¿Qué maestro holandés pintó 'La Lección de Anatomía del Dr. Nicolaes Tulp'?",
            "de": "Welcher niederländische Meister malte 'Die Anatomie des Dr. Tulp'?",
            "nl": "Welke Nederlandse meester schilderde 'De Anatomische Les van Dr. Nicolaes Tulp'?"
        },
        "options": [
            {"en": "Rembrandt van Rijn", "es": "Rembrandt van Rijn", "de": "Rembrandt van Rijn", "nl": "Rembrandt van Rijn"},
            {"en": "Frans Hals", "es": "Frans Hals", "de": "Frans Hals", "nl": "Frans Hals"},
            {"en": "Johannes Vermeer", "es": "Johannes Vermeer", "de": "Johannes Vermeer", "nl": "Johannes Vermeer"},
            {"en": "Jacob van Ruisdael", "es": "Jacob van Ruisdael", "de": "Jacob van Ruisdael", "nl": "Jacob van Ruisdael"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Rembrandt painted this groundbreaking group portrait in 1632 at age 26. It revolutionized medical painting by depicting an actual dissection with scientific accuracy.",
            "es": "Rembrandt pintó este revolucionario retrato de grupo en 1632 a la edad de 26 años. Revolucionó la pintura médica al representar una disección real con precisión científica.",
            "de": "Rembrandt malte dieses bahnbrechende Gruppenporträt 1632 im Alter von 26 Jahren. Es revolutionierte die medizinische Malerei durch die Darstellung einer tatsächlichen Sektion mit wissenschaftlicher Genauigkeit.",
            "nl": "Rembrandt schilderde dit baanbrekende groepsportret in 1632 op 26-jarige leeftijd. Het revolutioneerde de medische schilderkunst door een daadwerkelijke dissectie met wetenschappelijke nauwkeurigheid af te beelden."
        }
    }
]

# Read the file
file_path = r"c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Artists\level4.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the closing of the questions array
insert_pos = content.rfind('    ];')

if insert_pos == -1:
    print("Error: Could not find insertion point")
    exit(1)

# Build the new questions text
new_text = ""
for q in new_questions:
    new_text += "        ,\n        {\n"
    new_text += "            question: {\n"
    for lang in ['en', 'es', 'de', 'nl']:
        new_text += f"                {lang}: \"{q['question'][lang]}\",\n"
    new_text = new_text.rstrip(',\n') + '\n'
    new_text += "            },\n"
    new_text += "            options: [\n"
    for opt in q['options']:
        new_text += "                {"
        for lang in ['en', 'es', 'de', 'nl']:
            new_text += f"{lang}: \"{opt[lang]}\", "
        new_text = new_text.rstrip(', ') + '},\n'
    new_text += "            ],\n"
    new_text += f"            correct: {q['correct']},\n"
    new_text += "            explanation: {\n"
    for lang in ['en', 'es', 'de', 'nl']:
        new_text += f"                {lang}: \"{q['explanation'][lang]}\",\n"
    new_text = new_text.rstrip(',\n') + '\n'
    new_text += "            }\n"
    new_text += "        }\n"

# Insert the new questions
new_content = content[:insert_pos] + new_text + content[insert_pos:]

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Added {len(new_questions)} questions to level4.js")
