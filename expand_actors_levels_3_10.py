#!/usr/bin/env python3
"""
Expand Actors and Actresses levels 3-10 from 40 to 100 questions each.
"""

import json
import re

# Question data for each level
LEVEL_3_QUESTIONS = [
    # Questions 41-100 for Level 3: Well-known actors, blockbuster movies, famous roles
    {
        "question": {
            "en": "Who played Walter White in Breaking Bad?",
            "es": "¿Quién interpretó a Walter White en Breaking Bad?",
            "de": "Wer spielte Walter White in Breaking Bad?",
            "nl": "Wie speelde Walter White in Breaking Bad?"
        },
        "options": [
            {"en": "Bryan Cranston", "es": "Bryan Cranston", "de": "Bryan Cranston", "nl": "Bryan Cranston"},
            {"en": "Aaron Paul", "es": "Aaron Paul", "de": "Aaron Paul", "nl": "Aaron Paul"},
            {"en": "Dean Norris", "es": "Dean Norris", "de": "Dean Norris", "nl": "Dean Norris"},
            {"en": "Bob Odenkirk", "es": "Bob Odenkirk", "de": "Bob Odenkirk", "nl": "Bob Odenkirk"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Bryan Cranston won four Emmy Awards for his transformative role as chemistry teacher turned drug lord Walter White.",
            "es": "Bryan Cranston ganó cuatro Premios Emmy por su transformador papel como el profesor de química convertido en narcotraficante Walter White.",
            "de": "Bryan Cranston gewann vier Emmy Awards für seine transformative Rolle als Chemielehrer Walter White, der zum Drogenboss wurde.",
            "nl": "Bryan Cranston won vier Emmy Awards voor zijn transformerende rol als scheikundeleraar Walter White die drugsbaas werd."
        }
    },
    {
        "question": {
            "en": "Which actress played Eleven in Stranger Things?",
            "es": "¿Qué actriz interpretó a Eleven en Stranger Things?",
            "de": "Welche Schauspielerin spielte Eleven in Stranger Things?",
            "nl": "Welke actrice speelde Eleven in Stranger Things?"
        },
        "options": [
            {"en": "Millie Bobby Brown", "es": "Millie Bobby Brown", "de": "Millie Bobby Brown", "nl": "Millie Bobby Brown"},
            {"en": "Sadie Sink", "es": "Sadie Sink", "de": "Sadie Sink", "nl": "Sadie Sink"},
            {"en": "Natalia Dyer", "es": "Natalia Dyer", "de": "Natalia Dyer", "nl": "Natalia Dyer"},
            {"en": "Winona Ryder", "es": "Winona Ryder", "de": "Winona Ryder", "nl": "Winona Ryder"}
        ],
        "correct": 0,
        "explanation": {
            "en": "Millie Bobby Brown became a breakout star with her role as Eleven, a young girl with psychokinetic abilities.",
            "es": "Millie Bobby Brown se convirtió en una estrella revelación con su papel de Eleven, una joven con habilidades psicocinéticas.",
            "de": "Millie Bobby Brown wurde mit ihrer Rolle als Eleven, einem jungen Mädchen mit psychokinetischen Fähigkeiten, zum Durchbruchsstar.",
            "nl": "Millie Bobby Brown werd een breakout-ster met haar rol als Eleven, een jong meisje met psychokinetische vaardigheden."
        }
    },
    {
        "question": {
            "en": "Who played Tony Soprano in The Sopranos?",
            "es": "¿Quién interpretó a Tony Soprano en The Sopranos?",
            "de": "Wer spielte Tony Soprano in The Sopranos?",
            "nl": "Wie speelde Tony Soprano in The Sopranos?"
        },
        "options": [
            {"en": "James Gandolfini", "es": "James Gandolfini", "de": "James Gandolfini", "nl": "James Gandolfini"},
            {"en": "Michael Imperioli", "es": "Michael Imperioli", "de": "Michael Imperioli", "nl": "Michael Imperioli"},
            {"en": "Steve Buscemi", "es": "Steve Buscemi", "de": "Steve Buscemi", "nl": "Steve Buscemi"},
            {"en": "Tony Sirico", "es": "Tony Sirico", "de": "Tony Sirico", "nl": "Tony Sirico"}
        ],
        "correct": 0,
        "explanation": {
            "en": "James Gandolfini's portrayal of mob boss Tony Soprano is considered one of the greatest TV performances of all time.",
            "es": "La interpretación de James Gandolfini del jefe de la mafia Tony Soprano es considerada una de las mejores actuaciones de televisión.",
            "de": "James Gandolfinis Darstellung des Mafia-Bosses Tony Soprano gilt als eine der größten TV-Leistungen aller Zeiten.",
            "nl": "James Gandolfini's vertolking van maffiaboss Tony Soprano wordt beschouwd als een van de beste tv-prestaties ooit."
        }
    }
]

def read_file(filepath):
    """Read the entire file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    """Write content to file"""
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def count_questions_in_file(content):
    """Count the number of question objects in the file"""
    # Count instances of 'question: {' pattern
    count = len(re.findall(r'question:\s*{', content))
    return count

def expand_level(level_num):
    """Expand a single level file"""
    base_path = r"c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Actors and Actresses"
    filepath = f"{base_path}\\level{level_num}.js"

    print(f"\n=== Processing Level {level_num} ===")

    try:
        content = read_file(filepath)
        count = count_questions_in_file(content)
        print(f"Current question count: {count}")

        if count >= 100:
            print(f"Level {level_num} already has {count} questions. Skipping.")
            return count

        # For now, just report status
        print(f"Level {level_num} needs expansion from {count} to 100 questions")

        return count

    except Exception as e:
        print(f"Error processing level {level_num}: {e}")
        return 0

def main():
    """Main function to expand all levels"""
    print("=" * 60)
    print("Actors and Actresses Expansion - Levels 3-10")
    print("=" * 60)

    for level in range(3, 11):
        count = expand_level(level)

    print("\n" + "=" * 60)
    print("Analysis complete")
    print("=" * 60)

if __name__ == "__main__":
    main()
