#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to add questions to Eiffel Tower quiz levels to reach 40 questions each.
"""

import os
import re

# Base path
BASE_PATH = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-buildings\Eiffel Tower"

# Questions to add for each level
QUESTIONS = {
    'level3': [
        # Historical Events - 20 questions to add
        {
            'en': 'What historic broadcast occurred from the Eiffel Tower in 1921?',
            'es': '¿Qué transmisión histórica ocurrió desde la Torre Eiffel en 1921?',
            'de': 'Welche historische Übertragung erfolgte 1921 vom Eiffelturm?',
            'nl': 'Welke historische uitzending vond plaats vanaf de Eiffeltoren in 1921?',
            'options': [
                {'en': 'First public radio broadcast', 'es': 'Primera transmisión de radio pública', 'de': 'Erste öffentliche Radiosendung', 'nl': 'Eerste publieke radio-uitzending'},
                {'en': 'First television show', 'es': 'Primer programa de televisión', 'de': 'Erste Fernsehsendung', 'nl': 'Eerste televisieprogramma'},
                {'en': 'First telephone call', 'es': 'Primera llamada telefónica', 'de': 'Erster Telefonanruf', 'nl': 'Eerste telefoongesprek'},
                {'en': 'First internet transmission', 'es': 'Primera transmisión de internet', 'de': 'Erste Internetübertragung', 'nl': 'Eerste internettransmissie'}
            ],
            'correct': 0,
            'explanation': {
                'en': 'The Eiffel Tower was used for the first public radio broadcast in France in 1921, marking a significant milestone in broadcasting history.',
                'es': 'La Torre Eiffel se utilizó para la primera transmisión de radio pública en Francia en 1921, marcando un hito importante en la historia de la radiodifusión.',
                'de': 'Der Eiffelturm wurde 1921 für die erste öffentliche Radiosendung in Frankreich genutzt und markierte einen bedeutenden Meilenstein in der Rundfunkgeschichte.',
                'nl': 'De Eiffeltoren werd in 1921 gebruikt voor de eerste publieke radio-uitzending in Frankrijk, wat een belangrijke mijlpaal in de geschiedenis van de omroep markeerde.'
            }
        },
        {
            'en': 'What Nazi action was planned for the Eiffel Tower during WWII?',
            'es': '¿Qué acción nazi se planeó para la Torre Eiffel durante la Segunda Guerra Mundial?',
            'de': 'Welche Nazi-Aktion war während des Zweiten Weltkriegs für den Eiffelturm geplant?',
            'nl': 'Welke Nazi-actie was gepland voor de Eiffeltoren tijdens WOII?',
            'options': [
                {'en': 'Demolition (never executed)', 'es': 'Demolición (nunca ejecutada)', 'de': 'Abriss (nie ausgeführt)', 'nl': 'Sloop (nooit uitgevoerd)'},
                {'en': 'Use as prison', 'es': 'Uso como prisión', 'de': 'Nutzung als Gefängnis', 'nl': 'Gebruik als gevangenis'},
                {'en': 'Military headquarters', 'es': 'Cuartel general militar', 'de': 'Militärhauptquartier', 'nl': 'Militair hoofdkwartier'},
                {'en': 'Propaganda center', 'es': 'Centro de propaganda', 'de': 'Propagandazentrum', 'nl': 'Propaganda centrum'}
            ],
            'correct': 0,
            'explanation': {
                'en': 'Hitler ordered the Eiffel Tower to be demolished as Allied forces approached Paris in 1944, but the order was never carried out.',
                'es': 'Hitler ordenó la demolición de la Torre Eiffel cuando las fuerzas aliadas se acercaban a París en 1944, pero la orden nunca se ejecutó.',
                'de': 'Hitler befahl 1944 den Abriss des Eiffelturms, als sich alliierte Streitkräfte Paris näherten, aber der Befehl wurde nie ausgeführt.',
                'nl': 'Hitler beval de sloop van de Eiffeltoren toen geallieerde troepen Parijs naderden in 1944, maar het bevel werd nooit uitgevoerd.'
            }
        },
        # Add 18 more questions for level3...
        {
            'en': 'When did electric lights first illuminate the Eiffel Tower?',
            'es': '¿Cuándo iluminaron por primera vez las luces eléctricas la Torre Eiffel?',
            'de': 'Wann erleuchteten elektrische Lichter erstmals den Eiffelturm?',
            'nl': 'Wanneer verlichtten elektrische lampen de Eiffeltoren voor het eerst?',
            'options': [
                {'en': '1889 opening', 'es': 'Apertura de 1889', 'de': 'Eröffnung 1889', 'nl': 'Opening 1889'},
                {'en': '1900', 'es': '1900', 'de': '1900', 'nl': '1900'},
                {'en': '1920', 'es': '1920', 'de': '1920', 'nl': '1920'},
                {'en': '1950', 'es': '1950', 'de': '1950', 'nl': '1950'}
            ],
            'correct': 0,
            'explanation': {
                'en': 'Electric lights were installed for the tower\'s opening in 1889, making it one of the first structures to use electric illumination on such a scale.',
                'es': 'Las luces eléctricas se instalaron para la apertura de la torre en 1889, convirtiéndola en una de las primeras estructuras en usar iluminación eléctrica a tal escala.',
                'de': 'Elektrische Lichter wurden zur Eröffnung des Turms 1889 installiert und machten ihn zu einer der ersten Strukturen, die elektrische Beleuchtung in einem solchen Maßstab verwendeten.',
                'nl': 'Elektrische lampen werden geïnstalleerd voor de opening van de toren in 1889, waardoor het een van de eerste structuren was die elektrische verlichting op zo\'n schaal gebruikte.'
            }
        },
        # Continue adding more diverse questions...
    ]
}

def format_question(q_data):
    """Format a question dict into JavaScript code."""
    lines = []
    lines.append('      {')
    lines.append('        question: {')
    for lang in ['en', 'es', 'de', 'nl']:
        lines.append(f'          {lang}: "{q_data[lang]}",')
    # Remove trailing comma from last language
    lines[-1] = lines[-1].rstrip(',')
    lines.append('        },')
    lines.append('        options: [')
    for opt in q_data['options']:
        opt_line = '          { '
        opt_line += ', '.join([f'{lang}: "{opt[lang]}"' for lang in ['en', 'es', 'de', 'nl']])
        opt_line += ' },'
        lines.append(opt_line)
    # Remove trailing comma from last option
    lines[-1] = lines[-1].rstrip(',')
    lines.append('        ],')
    lines.append(f'        correct: {q_data["correct"]},')
    lines.append('        explanation: {')
    for lang in ['en', 'es', 'de', 'nl']:
        lines.append(f'          {lang}: "{q_data["explanation"][lang]}",')
    # Remove trailing comma from last language
    lines[-1] = lines[-1].rstrip(',')
    lines.append('        }')
    lines.append('      }')
    return '\n'.join(lines)

def add_questions_to_file(filename, questions):
    """Add questions to a level file."""
    filepath = os.path.join(BASE_PATH, filename)

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the position before the closing array bracket
    insert_pos = content.rfind('      }\n    ]\n  };')

    if insert_pos == -1:
        print(f'Could not find insertion point in {filename}')
        return False

    # Format all questions
    new_questions_text = ''
    for q in questions:
        new_questions_text += ',\n' + format_question(q)

    # Insert the new questions
    new_content = content[:insert_pos] + new_questions_text + '\n' + content[insert_pos:]

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True

def main():
    """Main function to add questions to all levels."""
    for level, questions in QUESTIONS.items():
        filename = f'{level}.js'
        print(f'Adding {len(questions)} questions to {filename}...')
        if add_questions_to_file(filename, questions):
            print(f'✓ Successfully added questions to {filename}')
        else:
            print(f'✗ Failed to add questions to {filename}')

if __name__ == '__main__':
    main()
