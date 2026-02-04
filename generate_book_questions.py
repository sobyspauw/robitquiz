#!/usr/bin/env python3
"""
Book Quiz Question Generator

Generates real quiz questions about books to replace template questions.
Covers all book categories with proper 4-language translations.

Usage:
    python generate_book_questions.py
"""

import json
import os
import re
from typing import List, Dict, Any

# Book knowledge base organized by category
ADVENTURE_BOOKS_KNOWLEDGE = {
    "level1": [
        {
            "question": {
                "en": "What island is Robinson Crusoe stranded on?",
                "es": "¿En qué isla naufraga Robinson Crusoe?",
                "de": "Auf welcher Insel ist Robinson Crusoe gestrandet?",
                "nl": "Op welk eiland strandt Robinson Crusoe?"
            },
            "options": [
                {"en": "Caribbean island", "es": "Isla caribeña", "de": "Karibische Insel", "nl": "Caribisch eiland"},
                {"en": "Pacific island", "es": "Isla del Pacífico", "de": "Pazifische Insel", "nl": "Pacifisch eiland"},
                {"en": "Atlantic island", "es": "Isla del Atlántico", "de": "Atlantische Insel", "nl": "Atlantisch eiland"},
                {"en": "Indian Ocean island", "es": "Isla del Océano Índico", "de": "Insel im Indischen Ozean", "nl": "Indische Oceaan eiland"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Robinson Crusoe was stranded on a Caribbean island off the coast of Venezuela for 28 years.",
                "es": "Robinson Crusoe naufragó en una isla caribeña frente a la costa de Venezuela durante 28 años.",
                "de": "Robinson Crusoe war 28 Jahre lang auf einer karibischen Insel vor der Küste Venezuelas gestrandet.",
                "nl": "Robinson Crusoe was 28 jaar gestrand op een Caribisch eiland voor de kust van Venezuela."
            }
        },
        {
            "question": {
                "en": "Who is Jim Hawkins' pirate enemy in 'Treasure Island'?",
                "es": "¿Quién es el enemigo pirata de Jim Hawkins en 'La Isla del Tesoro'?",
                "de": "Wer ist Jim Hawkins' Piratenfeind in 'Die Schatzinsel'?",
                "nl": "Wie is Jim Hawkins' piraten vijand in 'Schateiland'?"
            },
            "options": [
                {"en": "Long John Silver", "es": "Long John Silver", "de": "Long John Silver", "nl": "Long John Silver"},
                {"en": "Captain Hook", "es": "Capitán Garfio", "de": "Kapitän Hook", "nl": "Kapitein Haak"},
                {"en": "Blackbeard", "es": "Barbanegra", "de": "Blackbeard", "nl": "Blauwbaard"},
                {"en": "Captain Morgan", "es": "Capitán Morgan", "de": "Kapitän Morgan", "nl": "Kapitein Morgan"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Long John Silver is the cunning one-legged pirate who befriends Jim Hawkins while secretly plotting to steal the treasure.",
                "es": "Long John Silver es el astuto pirata cojo que se hace amigo de Jim Hawkins mientras planea secretamente robar el tesoro.",
                "de": "Long John Silver ist der gerissene einbeinige Pirat, der sich mit Jim Hawkins anfreundet, während er heimlich plant, den Schatz zu stehlen.",
                "nl": "Long John Silver is de slimme eenbenige piraat die bevriend raakt met Jim Hawkins terwijl hij heimelijk plant de schat te stelen."
            }
        },
        {
            "question": {
                "en": "What ship does Phileas Fogg travel on in 'Around the World in 80 Days'?",
                "es": "¿En qué barco viaja Phileas Fogg en 'La vuelta al mundo en 80 días'?",
                "de": "Mit welchem Schiff reist Phileas Fogg in '80 Tage um die Welt'?",
                "nl": "Met welk schip reist Phileas Fogg in 'De reis om de wereld in 80 dagen'?"
            },
            "options": [
                {"en": "Various ships", "es": "Varios barcos", "de": "Verschiedene Schiffe", "nl": "Verschillende schepen"},
                {"en": "The Nautilus", "es": "El Nautilus", "de": "Die Nautilus", "nl": "De Nautilus"},
                {"en": "The Hispaniola", "es": "La Hispaniola", "de": "Die Hispaniola", "nl": "De Hispaniola"},
                {"en": "The Pequod", "es": "El Pequod", "de": "Die Pequod", "nl": "De Pequod"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Phileas Fogg uses multiple forms of transport including trains, ships, and even an elephant during his journey.",
                "es": "Phileas Fogg utiliza múltiples formas de transporte, incluidos trenes, barcos e incluso un elefante durante su viaje.",
                "de": "Phileas Fogg nutzt mehrere Transportmittel, darunter Züge, Schiffe und sogar einen Elefanten während seiner Reise.",
                "nl": "Phileas Fogg gebruikt meerdere vormen van vervoer, waaronder treinen, schepen en zelfs een olifant tijdens zijn reis."
            }
        },
        {
            "question": {
                "en": "Who is Huckleberry Finn's best friend?",
                "es": "¿Quién es el mejor amigo de Huckleberry Finn?",
                "de": "Wer ist Huckleberry Finns bester Freund?",
                "nl": "Wie is de beste vriend van Huckleberry Finn?"
            },
            "options": [
                {"en": "Tom Sawyer", "es": "Tom Sawyer", "de": "Tom Sawyer", "nl": "Tom Sawyer"},
                {"en": "Jim Hawkins", "es": "Jim Hawkins", "de": "Jim Hawkins", "nl": "Jim Hawkins"},
                {"en": "Peter Pan", "es": "Peter Pan", "de": "Peter Pan", "nl": "Peter Pan"},
                {"en": "Oliver Twist", "es": "Oliver Twist", "de": "Oliver Twist", "nl": "Oliver Twist"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Tom Sawyer is Huckleberry Finn's close friend, and both characters appear in Mark Twain's adventure novels.",
                "es": "Tom Sawyer es el amigo cercano de Huckleberry Finn, y ambos personajes aparecen en las novelas de aventuras de Mark Twain.",
                "de": "Tom Sawyer ist Huckleberry Finns enger Freund, und beide Charaktere erscheinen in Mark Twains Abenteuerromanen.",
                "nl": "Tom Sawyer is Huckleberry Finn's goede vriend, en beide personages verschijnen in Mark Twains avonturenromans."
            }
        },
        {
            "question": {
                "en": "What creature attacks the Nautilus in '20,000 Leagues Under the Sea'?",
                "es": "¿Qué criatura ataca al Nautilus en '20,000 leguas de viaje submarino'?",
                "de": "Welche Kreatur greift die Nautilus in '20.000 Meilen unter dem Meer' an?",
                "nl": "Welk wezen valt de Nautilus aan in '20.000 mijlen onder zee'?"
            },
            "options": [
                {"en": "Giant squid", "es": "Calamar gigante", "de": "Riesenkalmar", "nl": "Reuzeninktvis"},
                {"en": "Shark", "es": "Tiburón", "de": "Hai", "nl": "Haai"},
                {"en": "Whale", "es": "Ballena", "de": "Wal", "nl": "Walvis"},
                {"en": "Octopus", "es": "Pulpo", "de": "Oktopus", "nl": "Octopus"}
            ],
            "correct": 0,
            "explanation": {
                "en": "A giant squid attacks the Nautilus submarine in one of the novel's most famous scenes.",
                "es": "Un calamar gigante ataca el submarino Nautilus en una de las escenas más famosas de la novela.",
                "de": "Ein Riesenkalmar greift das U-Boot Nautilus in einer der berühmtesten Szenen des Romans an.",
                "nl": "Een reuzeninktvis valt de Nautilus onderzeeër aan in een van de beroemdste scènes van de roman."
            }
        },
        {
            "question": {
                "en": "Who wrote 'The Call of the Wild'?",
                "es": "¿Quién escribió 'La llamada de lo salvaje'?",
                "de": "Wer schrieb 'Ruf der Wildnis'?",
                "nl": "Wie schreef 'De roep van de wildernis'?"
            },
            "options": [
                {"en": "Jack London", "es": "Jack London", "de": "Jack London", "nl": "Jack London"},
                {"en": "Mark Twain", "es": "Mark Twain", "de": "Mark Twain", "nl": "Mark Twain"},
                {"en": "Jules Verne", "es": "Jules Verne", "de": "Jules Verne", "nl": "Jules Verne"},
                {"en": "Herman Melville", "es": "Herman Melville", "de": "Herman Melville", "nl": "Herman Melville"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Jack London wrote 'The Call of the Wild' in 1903, a story about a dog named Buck in the Yukon.",
                "es": "Jack London escribió 'La llamada de lo salvaje' en 1903, una historia sobre un perro llamado Buck en el Yukón.",
                "de": "Jack London schrieb 'Ruf der Wildnis' 1903, eine Geschichte über einen Hund namens Buck im Yukon.",
                "nl": "Jack London schreef 'De roep van de wildernis' in 1903, een verhaal over een hond genaamd Buck in de Yukon."
            }
        },
        {
            "question": {
                "en": "Where does 'The Jungle Book' take place?",
                "es": "¿Dónde tiene lugar 'El Libro de la Selva'?",
                "de": "Wo spielt 'Das Dschungelbuch'?",
                "nl": "Waar speelt 'Het Jungleboek'?"
            },
            "options": [
                {"en": "India", "es": "India", "de": "Indien", "nl": "India"},
                {"en": "Africa", "es": "África", "de": "Afrika", "nl": "Afrika"},
                {"en": "South America", "es": "Sudamérica", "de": "Südamerika", "nl": "Zuid-Amerika"},
                {"en": "Southeast Asia", "es": "Sudeste Asiático", "de": "Südostasien", "nl": "Zuidoost-Azië"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Jungle Book is set in the jungles of India where Mowgli is raised by wolves.",
                "es": "El Libro de la Selva tiene lugar en las selvas de India donde Mowgli es criado por lobos.",
                "de": "Das Dschungelbuch spielt in den Dschungeln Indiens, wo Mowgli von Wölfen aufgezogen wird.",
                "nl": "Het Jungleboek speelt in de jungles van India waar Mowgli door wolven wordt grootgebracht."
            }
        },
        {
            "question": {
                "en": "What is the main character's name in 'The Swiss Family Robinson'?",
                "es": "¿Cuál es el nombre del personaje principal en 'El Robinson Suizo'?",
                "de": "Wie heißt die Hauptfigur in 'Der Schweizerische Robinson'?",
                "nl": "Hoe heet het hoofdpersonage in 'De Zwitserse Robinson'?"
            },
            "options": [
                {"en": "Father Robinson", "es": "Padre Robinson", "de": "Vater Robinson", "nl": "Vader Robinson"},
                {"en": "Fritz Robinson", "es": "Fritz Robinson", "de": "Fritz Robinson", "nl": "Fritz Robinson"},
                {"en": "Ernst Robinson", "es": "Ernst Robinson", "de": "Ernst Robinson", "nl": "Ernst Robinson"},
                {"en": "William Robinson", "es": "William Robinson", "de": "William Robinson", "nl": "William Robinson"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The story is narrated by the father, who leads his family's survival on a deserted island.",
                "es": "La historia es narrada por el padre, quien lidera la supervivencia de su familia en una isla desierta.",
                "de": "Die Geschichte wird vom Vater erzählt, der das Überleben seiner Familie auf einer einsamen Insel leitet.",
                "nl": "Het verhaal wordt verteld door de vader, die het overleven van zijn familie op een onbewoond eiland leidt."
            }
        },
        {
            "question": {
                "en": "Who is the villain in 'The Count of Monte Cristo'?",
                "es": "¿Quién es el villano en 'El Conde de Montecristo'?",
                "de": "Wer ist der Bösewicht in 'Der Graf von Monte Cristo'?",
                "nl": "Wie is de schurk in 'De Graaf van Monte Cristo'?"
            },
            "options": [
                {"en": "Fernand Mondego", "es": "Fernand Mondego", "de": "Fernand Mondego", "nl": "Fernand Mondego"},
                {"en": "Edmond Dantes", "es": "Edmond Dantes", "de": "Edmond Dantes", "nl": "Edmond Dantes"},
                {"en": "Abbe Faria", "es": "Abate Faria", "de": "Abbé Faria", "nl": "Abbé Faria"},
                {"en": "Albert de Morcerf", "es": "Albert de Morcerf", "de": "Albert de Morcerf", "nl": "Albert de Morcerf"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Fernand Mondego betrayed Edmond Dantes, leading to his imprisonment and setting the revenge plot in motion.",
                "es": "Fernand Mondego traicionó a Edmond Dantes, lo que llevó a su encarcelamiento y puso en marcha la trama de venganza.",
                "de": "Fernand Mondego verriet Edmond Dantes, was zu seiner Inhaftierung führte und die Rachehandlung in Gang setzte.",
                "nl": "Fernand Mondego verraadde Edmond Dantes, wat leidde tot zijn gevangenzetting en de wraakplot in gang zette."
            }
        },
        {
            "question": {
                "en": "What animal is Mowgli raised by in 'The Jungle Book'?",
                "es": "¿Qué animal cría a Mowgli en 'El Libro de la Selva'?",
                "de": "Von welchem Tier wird Mowgli im 'Dschungelbuch' aufgezogen?",
                "nl": "Door welk dier wordt Mowgli grootgebracht in 'Het Jungleboek'?"
            },
            "options": [
                {"en": "Wolves", "es": "Lobos", "de": "Wölfe", "nl": "Wolven"},
                {"en": "Bears", "es": "Osos", "de": "Bären", "nl": "Beren"},
                {"en": "Panthers", "es": "Panteras", "de": "Panther", "nl": "Panters"},
                {"en": "Tigers", "es": "Tigres", "de": "Tiger", "nl": "Tijgers"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Mowgli is adopted and raised by a wolf pack in the Indian jungle.",
                "es": "Mowgli es adoptado y criado por una manada de lobos en la selva india.",
                "de": "Mowgli wird von einem Wolfsrudel im indischen Dschungel adoptiert und aufgezogen.",
                "nl": "Mowgli wordt geadopteerd en grootgebracht door een wolvenroedel in de Indiase jungle."
            }
        },
        {
            "question": {
                "en": "In which war is 'The Red Badge of Courage' set?",
                "es": "¿En qué guerra está ambientado 'La Roja Insignia del Valor'?",
                "de": "In welchem Krieg spielt 'Das rote Tapferkeitsabzeichen'?",
                "nl": "In welke oorlog speelt 'Het Rode Vaandel van Moed'?"
            },
            "options": [
                {"en": "American Civil War", "es": "Guerra Civil Americana", "de": "Amerikanischer Bürgerkrieg", "nl": "Amerikaanse Burgeroorlog"},
                {"en": "World War I", "es": "Primera Guerra Mundial", "de": "Erster Weltkrieg", "nl": "Eerste Wereldoorlog"},
                {"en": "Revolutionary War", "es": "Guerra Revolucionaria", "de": "Revolutionskrieg", "nl": "Revolutionaire Oorlog"},
                {"en": "War of 1812", "es": "Guerra de 1812", "de": "Krieg von 1812", "nl": "Oorlog van 1812"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Stephen Crane's novel depicts a young Union soldier's experiences during the American Civil War.",
                "es": "La novela de Stephen Crane representa las experiencias de un joven soldado de la Unión durante la Guerra Civil Americana.",
                "de": "Stephen Cranes Roman schildert die Erlebnisse eines jungen Unionssoldaten während des Amerikanischen Bürgerkriegs.",
                "nl": "Stephen Crane's roman beschrijft de ervaringen van een jonge Unie-soldaat tijdens de Amerikaanse Burgeroorlog."
            }
        },
        {
            "question": {
                "en": "Who is the bear in 'The Jungle Book'?",
                "es": "¿Quién es el oso en 'El Libro de la Selva'?",
                "de": "Wer ist der Bär im 'Dschungelbuch'?",
                "nl": "Wie is de beer in 'Het Jungleboek'?"
            },
            "options": [
                {"en": "Baloo", "es": "Baloo", "de": "Balu", "nl": "Baloo"},
                {"en": "Bagheera", "es": "Bagheera", "de": "Baghira", "nl": "Bagheera"},
                {"en": "Shere Khan", "es": "Shere Khan", "de": "Shir Khan", "nl": "Shere Khan"},
                {"en": "Kaa", "es": "Kaa", "de": "Kaa", "nl": "Kaa"}
            ],
            "correct": 0,
            "explanation": {
                "en": "Baloo is the friendly bear who teaches Mowgli the Law of the Jungle.",
                "es": "Baloo es el oso amigable que enseña a Mowgli la Ley de la Selva.",
                "de": "Balu ist der freundliche Bär, der Mowgli das Gesetz des Dschungels lehrt.",
                "nl": "Baloo is de vriendelijke beer die Mowgli de Wet van de Jungle leert."
            }
        },
        {
            "question": {
                "en": "What is Captain Nemo's submarine called?",
                "es": "¿Cómo se llama el submarino del Capitán Nemo?",
                "de": "Wie heißt Kapitän Nemos U-Boot?",
                "nl": "Hoe heet het onderzeeër van Kapitein Nemo?"
            },
            "options": [
                {"en": "Nautilus", "es": "Nautilus", "de": "Nautilus", "nl": "Nautilus"},
                {"en": "Hispaniola", "es": "Hispaniola", "de": "Hispaniola", "nl": "Hispaniola"},
                {"en": "Pequod", "es": "Pequod", "de": "Pequod", "nl": "Pequod"},
                {"en": "Argo", "es": "Argo", "de": "Argo", "nl": "Argo"}
            ],
            "correct": 0,
            "explanation": {
                "en": "The Nautilus is Captain Nemo's advanced submarine in Jules Verne's novel.",
                "es": "El Nautilus es el submarino avanzado del Capitán Nemo en la novela de Jules Verne.",
                "de": "Die Nautilus ist Kapitän Nemos fortgeschrittenes U-Boot in Jules Vernes Roman.",
                "nl": "De Nautilus is Kapitein Nemo's geavanceerde onderzeeër in Jules Verne's roman."
            }
        }
    ]
}


def get_character_limit(level: int, element_type: str) -> int:
    """Get character limit based on level and element type."""
    if element_type == "question":
        if level <= 5:
            return 120
        elif level <= 8:
            return 140
        else:
            return 160
    elif element_type == "option":
        return 100
    elif element_type == "explanation":
        if level <= 5:
            return 350
        elif level <= 8:
            return 400
        else:
            return 450
    return 200


def read_js_file(file_path: str) -> str:
    """Read a JavaScript question file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()


def write_js_file(file_path: str, content: str):
    """Write content to a JavaScript file."""
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)


def count_real_questions(file_path: str) -> tuple:
    """Count real vs template questions in a file."""
    content = read_js_file(file_path)

    # Count questions starting with "Question "
    template_pattern = r'question:\s*{\s*en:\s*"Question\s+\d+'
    template_matches = re.findall(template_pattern, content)

    # Count total questions
    total_pattern = r'{\s*question:\s*{'
    total_matches = re.findall(total_pattern, content)

    template_count = len(template_matches)
    total_count = len(total_matches)
    real_count = total_count - template_count

    return real_count, template_count, total_count


def generate_question_js(question_data: Dict[str, Any], index: int, indent: int = 6) -> str:
    """Generate JavaScript code for a single question."""
    spaces = " " * indent

    js_code = f"{spaces}{{\n"

    # Question
    js_code += f"{spaces}  question: {{\n"
    js_code += f'{spaces}    en: "{question_data["question"]["en"]}",\n'
    js_code += f'{spaces}    es: "{question_data["question"]["es"]}",\n'
    js_code += f'{spaces}    de: "{question_data["question"]["de"]}",\n'
    js_code += f'{spaces}    nl: "{question_data["question"]["nl"]}"\n'
    js_code += f"{spaces}  }},\n"

    # Options
    js_code += f"{spaces}  options: [\n"
    for opt in question_data["options"]:
        js_code += f'{spaces}    {{ en: "{opt["en"]}", es: "{opt["es"]}", de: "{opt["de"]}", nl: "{opt["nl"]}" }},\n'
    js_code += f"{spaces}  ],\n"

    # Correct answer (convert to 0-based index, add 3 for options array format)
    js_code += f'{spaces}  correct: {question_data["correct"] + 3},\n'

    # Explanation
    js_code += f"{spaces}  explanation: {{\n"
    js_code += f'{spaces}    en: "{question_data["explanation"]["en"]}",\n'
    js_code += f'{spaces}    es: "{question_data["explanation"]["es"]}",\n'
    js_code += f'{spaces}    de: "{question_data["explanation"]["de"]}",\n'
    js_code += f'{spaces}    nl: "{question_data["explanation"]["nl"]}"\n'
    js_code += f"{spaces}  }}\n"
    js_code += f"{spaces}}}"

    return js_code


def replace_template_questions(file_path: str, new_questions: List[Dict[str, Any]], start_index: int = 48):
    """Replace template questions in a file with real questions."""
    content = read_js_file(file_path)

    # Find the start of template questions
    # Look for the first "Question XX" pattern after question 40-47
    pattern = f'question:\\s*{{\\s*en:\\s*"Question\\s+{start_index}'
    match = re.search(pattern, content)

    if not match:
        print(f"Warning: Could not find Question {start_index} in {file_path}")
        return False

    # Find the position to start replacing
    start_pos = match.start()

    # Go back to find the opening brace of this question object
    brace_pos = content.rfind('{', 0, start_pos)

    # Find the end of the questions array (last closing bracket before module.exports)
    end_pattern = r'\]\s*};\s*if\s*\(typeof\s+module'
    end_match = re.search(end_pattern, content)

    if not end_match:
        print(f"Warning: Could not find end of questions array in {file_path}")
        return False

    # Generate new questions JavaScript code
    new_questions_js = []
    for i, q in enumerate(new_questions):
        question_js = generate_question_js(q, start_index + i)
        new_questions_js.append(question_js)

    # Join with commas and newlines
    new_section = ",\n".join(new_questions_js)

    # Build the new content
    # Keep everything before the first template question
    new_content = content[:brace_pos]

    # Add new questions
    new_content += new_section + "\n\n"

    # Add the closing of questions array and module.exports
    new_content += "    ]\n  };\n\n"
    new_content += "  if (typeof module !== 'undefined' && module.exports) {\n"
    new_content += "    module.exports = level1;\n"
    new_content += "  }\n"
    new_content += "})();\n"

    # Write back to file
    write_js_file(file_path, new_content)

    return True


def generate_questions_for_category(category: str, level: int, count: int = 53) -> List[Dict[str, Any]]:
    """Generate questions for a specific category and level."""
    knowledge_base = ADVENTURE_BOOKS_KNOWLEDGE.get(f"level{level}", [])

    if not knowledge_base:
        print(f"Warning: No knowledge base for {category} level {level}")
        return []

    # Return available questions (up to count)
    return knowledge_base[:count]


def main():
    """Main function to generate and replace book questions."""
    print("=== Book Quiz Question Generator ===\n")

    # Base path
    base_path = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\books"

    # Adventure Books Level 1 as example
    category = "Adventure Books"
    level = 1

    file_path = os.path.join(base_path, category, f"level{level}.js")

    print(f"Processing: {category} - Level {level}")
    print(f"File: {file_path}\n")

    # Count existing questions
    real_count, template_count, total_count = count_real_questions(file_path)
    print(f"Current status:")
    print(f"  Real questions: {real_count}")
    print(f"  Template questions: {template_count}")
    print(f"  Total: {total_count}\n")

    # Generate new questions
    start_index = real_count + 1
    questions_needed = 100 - real_count

    print(f"Generating {questions_needed} new questions (starting from #{start_index})...\n")

    new_questions = generate_questions_for_category(category, level, questions_needed)

    if len(new_questions) < questions_needed:
        print(f"Warning: Only {len(new_questions)} questions available in knowledge base")
        print(f"         Need to expand knowledge base for complete replacement\n")

    print(f"Generated {len(new_questions)} questions")
    print("\nExample question:")
    if new_questions:
        q = new_questions[0]
        print(f"  Q: {q['question']['en']}")
        print(f"  A: {q['options'][q['correct']]['en']}")
        print(f"  Explanation: {q['explanation']['en'][:80]}...")

    print("\n" + "="*60)
    print("Script ready! To replace questions, uncomment the replace_template_questions call.")
    print("="*60)

    # Uncomment below to actually replace questions
    # if new_questions:
    #     success = replace_template_questions(file_path, new_questions, start_index)
    #     if success:
    #         print(f"\n✓ Successfully replaced questions in {file_path}")
    #         new_real, new_template, new_total = count_real_questions(file_path)
    #         print(f"\nNew status:")
    #         print(f"  Real questions: {new_real}")
    #         print(f"  Template questions: {new_template}")
    #         print(f"  Total: {new_total}")
    #     else:
    #         print(f"\n✗ Failed to replace questions")


if __name__ == "__main__":
    main()
