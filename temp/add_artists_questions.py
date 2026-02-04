#!/usr/bin/env python3
"""
Script to add 60 new questions each to Artists level4.js and level5.js
"""

# Level 4 questions (60 new questions) - these are more challenging but still moderate difficulty
level4_questions = """        {
            question: {
                en: "Which Renaissance artist painted 'The Wedding at Cana'?",
                es: "¿Qué artista renacentista pintó 'Las Bodas de Caná'?",
                de: "Welcher Renaissance-Künstler malte 'Die Hochzeit zu Kana'?",
                nl: "Welke Renaissance-kunstenaar schilderde 'De Bruiloft te Kana'?"
            },
            options: [
                {en: "Paolo Veronese", es: "Paolo Veronese", de: "Paolo Veronese", nl: "Paolo Veronese"},
                {en: "Tintoretto", es: "Tintoretto", de: "Tintoretto", nl: "Tintoretto"},
                {en: "Titian", es: "Tiziano", de: "Tizian", nl: "Titiaan"},
                {en: "Giorgione", es: "Giorgione", de: "Giorgione", nl: "Giorgione"}
            ],
            correct: 0,
            explanation: {
                en: "Paolo Veronese painted 'The Wedding at Cana' (1562-1563), featuring over 130 figures including musicians and contemporary Venetian nobility.",
                es: "Paolo Veronese pintó 'Las Bodas de Caná' (1562-1563), con más de 130 figuras incluyendo músicos y nobleza veneciana contemporánea.",
                de: "Paolo Veronese malte 'Die Hochzeit zu Kana' (1562-1563) mit über 130 Figuren, darunter Musiker und zeitgenössische venezianische Adlige.",
                nl: "Paolo Veronese schilderde 'De Bruiloft te Kana' (1562-1563), met meer dan 130 figuren waaronder musici en hedendaagse Venetiaanse adel."
            }
        }"""

# Read level4.js
level4_path = r"c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Artists\level4.js"

with open(level4_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the trailing comma issue
content = content.replace("        },\n    ];\n\n    if (typeof module \\!== 'undefined'", "        }\n    ];\n\n    if (typeof module !== 'undefined'")
content = content.replace("    } else if (typeof window \\!== 'undefined'", "    } else if (typeof window !== 'undefined'")

# Find insertion point
insert_pos = content.rfind("        }\n    ];")

if insert_pos == -1:
    print("Error: Could not find insertion point in level4.js")
    exit(1)

# Insert single question as a test (will add full 60 later)
new_content = content[:insert_pos] + "        },\n" + level4_questions + "\n" + content[insert_pos:]

with open(level4_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Added question to level4.js successfully")
print(f"Total size: {len(new_content)} characters")
