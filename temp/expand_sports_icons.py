#!/usr/bin/env python3
"""
Script to expand Sports Icons quiz files from 40 to 100 questions each.
Adds 60 new questions to level1.js through level5.js.
"""

import json
import re

# New questions to add (60 questions covering various sports)
# These will be added to level1.js

new_questions_level1 = """
      {
        question: {
          en: "Which athlete won 9 Olympic gold medals in track and field?",
          es: "¿Qué atleta ganó 9 medallas de oro olímpicas en atletismo?",
          de: "Welcher Athlet gewann 9 olympische Goldmedaillen in der Leichtathletik?",
          nl: "Welke atleet won 9 olympische gouden medailles in de atletiek?"
        },
        options: [
          { en: "Carl Lewis", es: "Carl Lewis", de: "Carl Lewis", nl: "Carl Lewis" },
          { en: "Jesse Owens", es: "Jesse Owens", de: "Jesse Owens", nl: "Jesse Owens" },
          { en: "Usain Bolt", es: "Usain Bolt", de: "Usain Bolt", nl: "Usain Bolt" },
          { en: "Edwin Moses", es: "Edwin Moses", de: "Edwin Moses", nl: "Edwin Moses" }
        ],
        correct: 0,
        explanation: {
          en: "Carl Lewis won 9 Olympic gold medals in sprinting and long jump across four Olympics (1984-1996), making him one of track and field's greatest athletes.",
          es: "Carl Lewis ganó 9 medallas de oro olímpicas en velocidad y salto de longitud en cuatro Juegos Olímpicos (1984-1996), convirtiéndolo en uno de los mejores atletas del atletismo.",
          de: "Carl Lewis gewann 9 olympische Goldmedaillen im Sprint und Weitsprung bei vier Olympischen Spielen (1984-1996) und ist einer der größten Leichtathleten.",
          nl: "Carl Lewis won 9 olympische gouden medailles in sprint en verspringen over vier Olympische Spelen (1984-1996), waardoor hij een van de grootste atletiekatleten is."
        }
      }
"""

def main():
    print("This is a template script.")
    print("Due to the file size and complexity, manual editing with the Edit tool will be used instead.")
    print("Please use the Read and Edit tools to carefully add questions to each level file.")

if __name__ == "__main__":
    main()
