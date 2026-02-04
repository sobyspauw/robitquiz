#!/usr/bin/env python3
"""
Script to expand quiz files from 40 to 100 questions
"""
import os
import re
import sys

def generate_artist_questions_level7():
    """Generate 60 new artist questions for level 7 (advanced)"""
    questions = []

    # Question templates for level 7 (advanced art history)
    artist_data = [
        {
            "q": "Which artist painted 'The Garden of Earthly Delights' triptych?",
            "q_es": "¿Qué artista pintó el tríptico 'El jardín de las delicias'?",
            "q_de": "Welcher Künstler malte das Triptychon 'Der Garten der Lüste'?",
            "q_nl": "Welke kunstenaar schilderde het drieluik 'De tuin der lusten'?",
            "correct": "Hieronymus Bosch",
            "wrong": ["Pieter Bruegel", "Jan van Eyck", "Rogier van der Weyden"],
            "exp": "Hieronymus Bosch painted 'The Garden of Earthly Delights' around 1490-1510. This enigmatic triptych is filled with fantastical imagery and is housed in the Prado Museum.",
            "exp_es": "Hieronymus Bosch pintó 'El jardín de las delicias' alrededor de 1490-1510. Este enigmático tríptico está lleno de imágenes fantásticas y se encuentra en el Museo del Prado.",
            "exp_de": "Hieronymus Bosch malte 'Der Garten der Lüste' um 1490-1510. Dieses rätselhafte Triptychon ist voller fantastischer Bilder und befindet sich im Prado-Museum.",
            "exp_nl": "Hieronymus Bosch schilderde 'De tuin der lusten' rond 1490-1510. Dit raadselachtige drieluik is gevuld met fantastische beelden en bevindt zich in het Prado Museum."
        },
        {
            "q": "Who created the bronze sculpture 'The Thinker'?",
            "q_es": "¿Quién creó la escultura de bronce 'El Pensador'?",
            "q_de": "Wer schuf die Bronzeskulptur 'Der Denker'?",
            "q_nl": "Wie creëerde het bronzen beeld 'De Denker'?",
            "correct": "Auguste Rodin",
            "wrong": ["Alberto Giacometti", "Constantin Brâncuși", "Henry Moore"],
            "exp": "Auguste Rodin created 'The Thinker' in 1902. Originally part of 'The Gates of Hell', it became an independent work and one of the most recognizable sculptures worldwide.",
            "exp_es": "Auguste Rodin creó 'El Pensador' en 1902. Originalmente parte de 'Las Puertas del Infierno', se convirtió en una obra independiente y una de las esculturas más reconocibles del mundo.",
            "exp_de": "Auguste Rodin schuf 'Der Denker' 1902. Ursprünglich Teil der 'Höllenpforte', wurde es zu einem eigenständigen Werk und einer der bekanntesten Skulpturen weltweit.",
            "exp_nl": "Auguste Rodin creëerde 'De Denker' in 1902. Oorspronkelijk onderdeel van 'De Poorten van de Hel', werd het een zelfstandig werk en een van de meest herkenbare sculpturen wereldwijd."
        },
        {
            "q": "Which artist painted 'Las Meninas' in 1656?",
            "q_es": "¿Qué artista pintó 'Las Meninas' en 1656?",
            "q_de": "Welcher Künstler malte 'Las Meninas' 1656?",
            "q_nl": "Welke kunstenaar schilderde 'Las Meninas' in 1656?",
            "correct": "Diego Velázquez",
            "wrong": ["Francisco Goya", "El Greco", "Bartolomé Esteban Murillo"],
            "exp": "Diego Velázquez painted 'Las Meninas' in 1656. This complex composition showing the Infanta Margarita Teresa and her entourage is considered one of the most analyzed paintings in Western art.",
            "exp_es": "Diego Velázquez pintó 'Las Meninas' en 1656. Esta compleja composición que muestra a la Infanta Margarita Teresa y su séquito se considera una de las pinturas más analizadas del arte occidental.",
            "exp_de": "Diego Velázquez malte 'Las Meninas' 1656. Diese komplexe Komposition mit der Infantin Margarita Teresa und ihrem Gefolge gilt als eines der am meisten analysierten Gemälde der westlichen Kunst.",
            "exp_nl": "Diego Velázquez schilderde 'Las Meninas' in 1656. Deze complexe compositie met de Infanta Margarita Teresa en haar gevolg wordt beschouwd als een van de meest geanalyseerde schilderijen in de westerse kunst."
        }
    ]

    for data in artist_data:
        question = f"""      {{
        question: {{
          en: "{data['q']}",
          es: "{data['q_es']}",
          de: "{data['q_de']}",
          nl: "{data['q_nl']}"
        }},
        options: [
          {{ en: "{data['correct']}", es: "{data['correct']}", de: "{data['correct']}", nl: "{data['correct']}" }},
          {{ en: "{data['wrong'][0]}", es: "{data['wrong'][0]}", de: "{data['wrong'][0]}", nl: "{data['wrong'][0]}" }},
          {{ en: "{data['wrong'][1]}", es: "{data['wrong'][1]}", de: "{data['wrong'][1]}", nl: "{data['wrong'][1]}" }},
          {{ en: "{data['wrong'][2]}", es: "{data['wrong'][2]}", de: "{data['wrong'][2]}", nl: "{data['wrong'][2]}" }}
        ],
        correct: 0,
        explanation: {{
          en: "{data['exp']}",
          es: "{data['exp_es']}",
          de: "{data['exp_de']}",
          nl: "{data['exp_nl']}"
        }}
      }}"""
        questions.append(question)

    return questions

def expand_file(filepath, new_questions):
    """Read a file, keep first 40 questions, add new ones to make 100"""

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the questions array
    questions_start = content.find('questions: [')
    if questions_start == -1:
        print(f"Could not find questions array in {filepath}")
        return False

    # Count existing questions
    existing_count = content.count('question:')
    print(f"File has {existing_count} questions currently")

    if existing_count >= 100:
        print(f"File already has {existing_count} questions, skipping")
        return True

    # Find where to insert new questions (before the closing of questions array)
    # Look for the last complete question
    last_question_end = content.rfind('},', 0, content.rfind(']'))

    if last_question_end == -1:
        print("Could not find insertion point")
        return False

    # Insert new questions
    new_content = content[:last_question_end+1] + ',\n' + ',\n'.join(new_questions) + content[last_question_end+1:]

    # Save to a test file first
    test_path = filepath.replace('.js', '_expanded.js')
    with open(test_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"Expanded file saved to {test_path}")
    print(f"New file will have {new_content.count('question:')} questions")
    return True

if __name__ == "__main__":
    # Generate questions for Artists level 7
    level7_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Artists\level7.js"

    print("Generating new questions for Artists level 7...")
    new_questions = generate_artist_questions_level7()
    print(f"Generated {len(new_questions)} new questions")

    # For now, just save the new questions to a separate file
    with open('temp/new_artist_questions.js', 'w', encoding='utf-8') as f:
        f.write("// New questions for Artists level 7\n")
        f.write("const newQuestions = [\n")
        f.write(',\n'.join(new_questions))
        f.write("\n];\n")

    print("New questions saved to temp/new_artist_questions.js")
    print("These can be manually added to the Artists level 7 file")