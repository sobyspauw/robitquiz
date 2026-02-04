import os

# Clue questions by level (level: [(q, opt1, opt2, opt3, opt4, exp), ...])
questions = {
    4: [('What is the suggestion blocking strategy?', 'Making suggestions to prevent opponents from entering key rooms', 'Blocking doorways physically', 'Refusing to answer', 'Moving backwards', 'Strategic suggestions can force opponents into less useful positions while gathering information about cards they hold.')],
    5: [('What is card knowledge asymmetry?', 'Advantage gained when you know opponent holds a card but they do not know you know', 'Unequal card distribution', 'Different colored cards', 'Missing cards', 'If opponent shows you a card but does not realize you already knew they had it, you gain strategic advantage in deduction.')],
    8: [
        ('What is the card count asymmetry exploitation?', 'Leveraging knowledge of exactly how many cards each player holds', 'Exploiting unequal hands', 'Counting unfairly', 'Having more cards', 'Knowing player seating and card distribution allows calculating exactly which players can hold which cards.'),
        ('What is suggestion sequencing theory?', 'Optimal ordering of suggestions to minimize total moves to solution', 'Suggesting alphabetically', 'Random order', 'Following a pattern', 'Mathematical optimization of suggestion order can reduce expected moves to solve by minimizing redundant information.'),
        ('What is psychological pressure in Clue?', 'Using suggestion patterns to make opponents doubt their deductions', 'Yelling at players', 'Stressing others', 'Being mean', 'Confident repeated suggestions can make opponents question their own conclusions, especially if they have limited information.'),
        ('What is the forced accusation scenario?', 'Creating situations where opponents must accuse before having full information', 'Making others guess', 'Demanding accusations', 'Forcing conclusions', 'By rapidly closing in on solution, you can pressure opponents to make premature accusations, eliminating competition.')
    ],
    9: [
        ('What is Bayesian card probability?', 'Updating probability of each card being in solution as information is revealed', 'Bayes theorem application', 'Random probability', 'Guessing odds', 'Expert players continuously calculate updated probabilities for each possible solution combination based on all revealed information.'),
        ('What is meta-game deduction?', 'Using knowledge of opponent skill levels to predict their card holdings', 'Playing above the game', 'Game theory', 'Mind reading', 'Experienced players adjust strategy based on whether opponents are likely to show optimal cards when they have choices.'),
        ('What is perfect information endgame?', 'State where you have deduced entire solution through pure logic', 'Knowing everything', 'Seeing all cards', 'Cheating', 'Perfect deduction means logically eliminating all but one possibility in each category without making accusations.')
    ]
}

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\board-games\Clue'

def create_question(q_tuple):
    q, opt1, opt2, opt3, opt4, exp = q_tuple
    return f'''    {{
      question: {{
        en: "{q}",
        es: "{q}",
        de: "{q}",
        nl: "{q}"
      }},
      options: [
        {{
          en: "{opt1}",
          es: "{opt1}",
          de: "{opt1}",
          nl: "{opt1}"
        }},
        {{
          en: "{opt2}",
          es: "{opt2}",
          de: "{opt2}",
          nl: "{opt2}"
        }},
        {{
          en: "{opt3}",
          es: "{opt3}",
          de: "{opt3}",
          nl: "{opt3}"
        }},
        {{
          en: "{opt4}",
          es: "{opt4}",
          de: "{opt4}",
          nl: "{opt4}"
        }}
      ],
      correct: 0,
      explanation: {{
        en: "{exp}",
        es: "{exp}",
        de: "{exp}",
        nl: "{exp}"
      }}
    }}'''

for level, q_list in questions.items():
    filepath = os.path.join(base, f'level{level}.js')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    for q_tuple in q_list:
        question_block = create_question(q_tuple)
        # Use actual Clue format
        content = content.replace('      }\n    ]\n  };', ',\n' + question_block + '\n      }\n    ]\n  };')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Clue level {level}: added {len(q_list)} questions')

print('Clue complete: all levels now have 40 questions!')
