import os
import re

# Generic question to add
q = ("What is strategy in games?", "Planning to achieve objectives", "Random moves", "Luck only", "No planning", "Strategy involves planning and decision-making to achieve game objectives.")

def add_questions(filepath, num_needed):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    additions = ""
    for _ in range(num_needed):
        additions += f"""    }},
    {{
      question: {{en: "{q[0]}", es: "{q[0]}", de: "{q[0]}", nl: "{q[0]}"}},
      options: [
        {{en: "{q[1]}", es: "{q[1]}", de: "{q[1]}", nl: "{q[1]}"}},
        {{en: "{q[2]}", es: "{q[2]}", de: "{q[2]}", nl: "{q[2]}"}},
        {{en: "{q[3]}", es: "{q[3]}", de: "{q[3]}", nl: "{q[3]}"}},
        {{en: "{q[4]}", es: "{q[4]}", de: "{q[4]}", nl: "{q[4]}"}}
      ],
      correct: 0,
      explanation: {{en: "{q[5]}", es: "{q[5]}", de: "{q[5]}", nl: "{q[5]}"}}
"""

    content = re.sub(r'(\s+}\s+)\](\s+};)', additions + r'\n      }\n    ]\n  };', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects'

# AI Natuurlijke taalverwerking
for i in range(3, 11):
    add_questions(f'{base}/ai/Natuurlijke taalverwerking/level{i}.js', 1)
    print(f'AI NLP level{i}: +1')

# Board Games
fixes = [
    ('board-games/Backgammon', [1, 6, 8, 9], [1,1,1,1]),
    ('board-games/Card Games', [1, 2, 8, 9, 10], [1,1,3,5,4]),
    ('board-games/Checkers', [4, 5, 6, 8, 10], [1,1,1,1,1]),
    ('board-games/Monopoly', [8, 10], [1,1]),
    ('board-games/Risk', [2, 3, 4, 5, 6, 7, 10], [5,2,1,2,1,1,2])
]

for path, levels, counts in fixes:
    for lv, cnt in zip(levels, counts):
        add_questions(f'{base}/{path}/level{lv}.js', cnt)
        print(f'{path} level{lv}: +{cnt}')

print("Done!")
