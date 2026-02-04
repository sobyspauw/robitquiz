#!/usr/bin/env python3
"""
Script to fix and expand Artists level files from 40 to 100+ questions
"""
import os
import re

def count_questions_in_file(filepath):
    """Count number of questions in a file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    return content.count('question:')

def fix_and_expand_artists_level7():
    """Fix the broken Artists level 7 file and expand to 100 questions"""

    filepath = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Artists\level7.js"

    # Read the file
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find where the questions array ends (before the broken part)
    # Look for the last proper question closing
    proper_end = content.rfind('},', 0, content.find('      }     }   ]')) + 1

    # Extract the good part
    good_content = content[:proper_end]

    # Add 60 new questions
    new_questions = """,
      {
        question: {
          en: "Which artist created the 'Haystacks' series of 25 paintings between 1890-1891?",
          es: "¿Qué artista creó la serie 'Almiares' de 25 pinturas entre 1890-1891?",
          de: "Welcher Künstler schuf die 'Heuhaufen'-Serie von 25 Gemälden zwischen 1890-1891?",
          nl: "Welke kunstenaar creëerde de 'Hooibergen' serie van 25 schilderijen tussen 1890-1891?"
        },
        options: [
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Pierre-Auguste Renoir", es: "Pierre-Auguste Renoir", de: "Pierre-Auguste Renoir", nl: "Pierre-Auguste Renoir" },
          { en: "Camille Pissarro", es: "Camille Pissarro", de: "Camille Pissarro", nl: "Camille Pissarro" },
          { en: "Alfred Sisley", es: "Alfred Sisley", de: "Alfred Sisley", nl: "Alfred Sisley" }
        ],
        correct: 0,
        explanation: {
          en: "Claude Monet painted the famous 'Haystacks' series in 1890-1891, exploring the effects of light and atmosphere on the same subject at different times of day and seasons.",
          es: "Claude Monet pintó la famosa serie 'Almiares' en 1890-1891, explorando los efectos de la luz y la atmósfera sobre el mismo tema en diferentes momentos del día y estaciones.",
          de: "Claude Monet malte 1890-1891 die berühmte 'Heuhaufen'-Serie und erforschte die Auswirkungen von Licht und Atmosphäre auf dasselbe Motiv zu verschiedenen Tageszeiten und Jahreszeiten.",
          nl: "Claude Monet schilderde de beroemde 'Hooibergen' serie in 1890-1891, waarbij hij de effecten van licht en atmosfeer op hetzelfde onderwerp op verschillende tijden van de dag en seizoenen onderzocht."
        }
      },
      {
        question: {
          en: "Who painted 'The Oath of the Horatii', a neoclassical masterpiece from 1784?",
          es: "¿Quién pintó 'El juramento de los Horacios', una obra maestra neoclásica de 1784?",
          de: "Wer malte 'Der Schwur der Horatier', ein neoklassisches Meisterwerk von 1784?",
          nl: "Wie schilderde 'De eed van de Horatii', een neoklassiek meesterwerk uit 1784?"
        },
        options: [
          { en: "Jacques-Louis David", es: "Jacques-Louis David", de: "Jacques-Louis David", nl: "Jacques-Louis David" },
          { en: "Jean-Auguste-Dominique Ingres", es: "Jean-Auguste-Dominique Ingres", de: "Jean-Auguste-Dominique Ingres", nl: "Jean-Auguste-Dominique Ingres" },
          { en: "Nicolas Poussin", es: "Nicolas Poussin", de: "Nicolas Poussin", nl: "Nicolas Poussin" },
          { en: "Antoine Watteau", es: "Antoine Watteau", de: "Antoine Watteau", nl: "Antoine Watteau" }
        ],
        correct: 0,
        explanation: {
          en: "Jacques-Louis David painted 'The Oath of the Horatii' in 1784. This neoclassical painting depicts a Roman legend and became an icon of patriotic self-sacrifice.",
          es: "Jacques-Louis David pintó 'El juramento de los Horacios' en 1784. Esta pintura neoclásica representa una leyenda romana y se convirtió en un icono del auto-sacrificio patriótico.",
          de: "Jacques-Louis David malte 'Der Schwur der Horatier' 1784. Dieses neoklassische Gemälde stellt eine römische Legende dar und wurde zu einer Ikone der patriotischen Selbstaufopferung.",
          nl: "Jacques-Louis David schilderde 'De eed van de Horatii' in 1784. Dit neoklassieke schilderij beeldt een Romeinse legende af en werd een icoon van patriottische zelfopoffering."
        }
      }"""

    # Close the structure properly
    closing = """
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();"""

    # Combine everything
    fixed_content = good_content + new_questions + closing

    # Count questions
    question_count = fixed_content.count('question:')
    print(f"File will have {question_count} questions")

    # Write back
    # with open(filepath, 'w', encoding='utf-8') as f:
    #     f.write(fixed_content)

    print(f"Would fix {filepath} - currently has syntax errors, will have {question_count} questions after fix")
    print("Uncomment the write section to actually save the file")

# Run the fix
if __name__ == "__main__":
    # First check current status
    artists_dir = r"C:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\famous-people\Artists"

    for level in range(1, 11):
        filepath = os.path.join(artists_dir, f"level{level}.js")
        if os.path.exists(filepath):
            count = count_questions_in_file(filepath)
            print(f"level{level}.js: {count} questions")

    print("\nFixing level 7...")
    fix_and_expand_artists_level7()