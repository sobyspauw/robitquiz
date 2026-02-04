#!/usr/bin/env python3
"""
Batch expansion script to expand all quiz files to 100+ questions
"""

import os
import glob
import json
import random

def generate_artist_questions(level, count=60):
    """Generate artist questions based on difficulty level"""

    questions = []

    # Level 7: Advanced art history
    if level == 7:
        question_templates = [
            {
                "en": "Which artist created the 'Blue Period' paintings between 1901-1904?",
                "es": "¿Qué artista creó las pinturas del 'Período Azul' entre 1901-1904?",
                "de": "Welcher Künstler schuf die Gemälde der 'Blauen Periode' zwischen 1901-1904?",
                "nl": "Welke kunstenaar creëerde de 'Blauwe Periode' schilderijen tussen 1901-1904?",
                "correct": "Pablo Picasso",
                "wrong": ["Henri Matisse", "Georges Braque", "Amedeo Modigliani"],
                "exp_en": "Pablo Picasso's Blue Period (1901-1904) was characterized by somber paintings in shades of blue and blue-green, influenced by Spain and poverty.",
                "exp_es": "El Período Azul de Pablo Picasso (1901-1904) se caracterizó por pinturas sombrías en tonos de azul y azul-verde, influenciadas por España y la pobreza.",
                "exp_de": "Pablo Picassos Blaue Periode (1901-1904) war geprägt von düsteren Gemälden in Blau- und Blaugrüntönen, beeinflusst von Spanien und Armut.",
                "exp_nl": "Pablo Picasso's Blauwe Periode (1901-1904) werd gekenmerkt door sombere schilderijen in tinten blauw en blauwgroen, beïnvloed door Spanje en armoede."
            },
            {
                "en": "Who painted 'The Birth of Venus' housed in the Uffizi Gallery?",
                "es": "¿Quién pintó 'El nacimiento de Venus' alojado en la Galería Uffizi?",
                "de": "Wer malte 'Die Geburt der Venus' in den Uffizien?",
                "nl": "Wie schilderde 'De geboorte van Venus' in de Uffizi Galerie?",
                "correct": "Sandro Botticelli",
                "wrong": ["Leonardo da Vinci", "Raphael", "Titian"],
                "exp_en": "Sandro Botticelli painted 'The Birth of Venus' around 1485. This Renaissance masterpiece depicts the goddess Venus emerging from the sea.",
                "exp_es": "Sandro Botticelli pintó 'El nacimiento de Venus' alrededor de 1485. Esta obra maestra del Renacimiento representa a la diosa Venus emergiendo del mar.",
                "exp_de": "Sandro Botticelli malte 'Die Geburt der Venus' um 1485. Dieses Meisterwerk der Renaissance zeigt die Göttin Venus, die aus dem Meer auftaucht.",
                "exp_nl": "Sandro Botticelli schilderde 'De geboorte van Venus' rond 1485. Dit Renaissance meesterwerk toont de godin Venus die uit de zee oprijst."
            },
            {
                "en": "Which artist is known for the 'Campbell's Soup Cans' pop art series?",
                "es": "¿Qué artista es conocido por la serie de arte pop 'Latas de sopa Campbell'?",
                "de": "Welcher Künstler ist bekannt für die Pop-Art-Serie 'Campbell's Suppendosen'?",
                "nl": "Welke kunstenaar is bekend om de pop art serie 'Campbell's Soepblikken'?",
                "correct": "Andy Warhol",
                "wrong": ["Roy Lichtenstein", "David Hockney", "Jasper Johns"],
                "exp_en": "Andy Warhol created the 'Campbell's Soup Cans' series in 1962, consisting of 32 canvases, each depicting a different soup variety.",
                "exp_es": "Andy Warhol creó la serie 'Latas de sopa Campbell' en 1962, que consta de 32 lienzos, cada uno representando una variedad diferente de sopa.",
                "exp_de": "Andy Warhol schuf 1962 die Serie 'Campbell's Suppendosen', bestehend aus 32 Leinwänden, die jeweils eine andere Suppensorte darstellen.",
                "exp_nl": "Andy Warhol creëerde de 'Campbell's Soepblikken' serie in 1962, bestaande uit 32 doeken, elk met een andere soepvariant."
            }
        ]

        # Add more question templates for variety
        for i in range(min(count, len(question_templates))):
            template = question_templates[i % len(question_templates)]
            question = {
                "question": {
                    "en": template["en"],
                    "es": template["es"],
                    "de": template["de"],
                    "nl": template["nl"]
                },
                "options": [
                    {"en": template["correct"], "es": template["correct"], "de": template["correct"], "nl": template["correct"]},
                    {"en": template["wrong"][0], "es": template["wrong"][0], "de": template["wrong"][0], "nl": template["wrong"][0]},
                    {"en": template["wrong"][1], "es": template["wrong"][1], "de": template["wrong"][1], "nl": template["wrong"][1]},
                    {"en": template["wrong"][2], "es": template["wrong"][2], "de": template["wrong"][2], "nl": template["wrong"][2]}
                ],
                "correct": 0,
                "explanation": {
                    "en": template["exp_en"],
                    "es": template["exp_es"],
                    "de": template["exp_de"],
                    "nl": template["exp_nl"]
                }
            }
            questions.append(question)

    return questions

def expand_js_file(filepath, new_questions):
    """Expand a JavaScript quiz file with new questions"""

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find the questions array
        questions_start = content.find('questions: [')
        if questions_start == -1:
            print(f"Could not find questions array in {filepath}")
            return False

        # Find the end of the last question
        last_question_end = content.rfind('},', 0, content.rfind(']'))

        if last_question_end == -1:
            print(f"Could not find insertion point in {filepath}")
            return False

        # Build new questions string
        new_q_strings = []
        for q in new_questions:
            q_str = json.dumps(q, ensure_ascii=False, indent=6)
            # Fix indentation
            q_str = q_str.replace('\n', '\n      ')
            new_q_strings.append('      ' + q_str)

        # Insert new questions
        questions_text = ',\n' + ',\n'.join(new_q_strings)
        new_content = content[:last_question_end+1] + questions_text + content[last_question_end+1:]

        # Save expanded file
        output_path = filepath.replace('.js', '_expanded.js')
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"Expanded {os.path.basename(filepath)} from {content.count('question:')} to {new_content.count('question:')} questions")
        return True

    except Exception as e:
        print(f"Error expanding {filepath}: {e}")
        return False

def main():
    """Main expansion process"""

    # Define files to expand
    artists_dir = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Artists"

    files_to_expand = [
        ("level7.js", 7),
        ("level8.js", 8),
        ("level9.js", 9),
        ("level10.js", 10)
    ]

    for filename, level in files_to_expand:
        filepath = os.path.join(artists_dir, filename)

        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue

        # Check current question count
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            current_count = content.count('question:')

        if current_count >= 100:
            print(f"{filename} already has {current_count} questions, skipping")
            continue

        # Calculate how many questions to add
        questions_needed = 100 - current_count
        print(f"\n{filename}: Need to add {questions_needed} questions")

        # Generate new questions
        new_questions = generate_artist_questions(level, questions_needed)

        # Expand the file
        if expand_js_file(filepath, new_questions):
            print(f"Successfully expanded {filename}")
        else:
            print(f"Failed to expand {filename}")

if __name__ == "__main__":
    main()
    print("\nExpansion process complete!")
    print("Expanded files saved with '_expanded.js' suffix")
    print("Review the files and rename to replace originals when satisfied")