import os

# Scrabble level 9 questions (9 needed)
level9_questions = [
    ('What is parallel play strategy?', 'Playing words parallel to existing words to score multiple times', 'Playing two words at once', 'Playing alongside opponent', 'Matching opponent plays', 'Parallel plays score on multiple premium squares and create multiple words simultaneously, often yielding 30-50+ points.'),
    ('What is the leave value concept?', 'Value of tiles remaining on rack after playing a word', 'Tiles left in bag', 'Opponent rack quality', 'Final score difference', 'Leave value measures rack quality after your play. High-value leaves like AEINRT enable better future plays than poor leaves like UUVWX.'),
    ('What is fishing in Scrabble?', 'Playing weak words hoping to draw specific tiles for bingo next turn', 'Looking for words in dictionary', 'Searching for premium squares', 'Trying to catch opponent mistakes', 'Fishing sacrifices points now to improve rack for potential bingo. Only strategic when bingo probability justifies point sacrifice.'),
    ('What is blocking strategy?', 'Placing tiles to prevent opponent from using premium squares or hooks', 'Blocking opponent view', 'Preventing challenges', 'Stopping the game', 'Strategic blocking denies opponent high-scoring opportunities, especially near Triple Word Scores or valuable hook spaces.'),
    ('What is a hotspot on the board?', 'Area with multiple premium squares and scoring opportunities', 'Center square', 'Corner positions', 'Tile bag location', 'Hotspots combine premium squares with open lanes, enabling high-scoring plays. Controlling hotspots is key to winning.'),
    ('What is rack balance optimization?', 'Maintaining ideal vowel-consonant ratio around 3:4', 'Equal point distribution', 'Same number of each letter', 'Balanced scoring', 'Optimal rack balance is roughly 3 vowels to 4 consonants, maximizing bingo potential and playability.'),
    ('What is equity in Scrabble?', 'Expected long-term point value of a play considering rack leave', 'Point total', 'Winning probability', 'Tile value', 'Fair play', 'Equity combines immediate points with leave quality. A 30-point play leaving AEINRT may have higher equity than 35 points leaving UUVW.'),
    ('What is the Q-dump strategy?', 'Playing Q without U to avoid getting stuck at endgame', 'Discarding Q tiles', 'Trading Q away', 'Avoiding Q words', 'Q without U words like QI, QAT, QOPH prevent endgame disaster of holding unplayable Q worth -10 points.'),
    ('What is open board vs closed board strategy?', 'Open boards favor bingos; closed boards favor tactical scoring', 'Board availability', 'Game progression', 'Player positions', 'Playing style', 'On open boards with bingo lanes, fish for seven-letter plays. On closed boards, maximize points tactically with available spaces.')
]

# Scrabble level 10 questions (8 needed)
level10_questions = [
    ('What is simulation depth in computer analysis?', 'Number of future moves computer simulates to evaluate current play', 'Board analysis complexity', 'Dictionary search depth', 'Tile counting accuracy', 'Simulation depth typically 2-4 plies measures how many turns ahead engine calculates, balancing accuracy with computation time.'),
    ('What is pre-endgame phase?', 'When ~7 tiles remain in bag and strategy shifts to endgame calculation', 'Before game starts', 'First half of game', 'Setup phase', 'Tutorial period', 'Pre-endgame begins with ~7 tiles left. Strategy transitions from probabilistic to deterministic as tile uncertainty reduces.'),
    ('What is tile tracking?', 'Mentally tracking played tiles to deduce bag and opponent rack contents', 'Counting your own tiles', 'Organizing tile rack', 'Following game rules', 'Recording scores', 'Expert tile tracking monitors all 100 tiles, calculating probabilities of drawing specific tiles and inferring opponent holdings.'),
    ('What is challenge equity?', 'Expected value calculation of challenging vs accepting suspicious word', 'Challenge rules', 'Word validity', 'Point penalties', 'Fair play standards', 'Challenge when probability_phoney times word_cost exceeds one minus probability times challenge_penalty. Math determines optimal challenge threshold.'),
    ('What is positional sacrifice?', 'Accepting fewer points to control board and guarantee winning position', 'Giving up tiles', 'Trading points for time', 'Sacrificing letters', 'Losing intentionally', 'Taking 25 points while blocking opponent 40-point setup can be optimal if it secures endgame control or last play.'),
    ('What is volatility management?', 'Adjusting risk based on score: minimize variance when ahead, increase when behind', 'Controlling emotions', 'Managing tile changes', 'Board stability', 'Score fluctuations', 'When ahead, choose safe high-equity plays. When behind, increase variance through risky plays to create comeback opportunities.'),
    ('What is the unseens calculation?', 'Tracking unseen tiles to compute draw probabilities and rack inference', 'Hidden tiles count', 'Bag randomness', 'Opponent secrets', 'Unknown words', 'Unseens equals 100 tiles minus played minus your rack. Experts use this to calculate exact probabilities for decision-making.'),
    ('What is perfect endgame play?', 'Calculating exact optimal sequence when all tiles are known', 'Finishing the game', 'Final turn strategy', 'Winning position', 'Game conclusion', 'With known tiles typically last 10-15, perfect play solves exact move sequences through exhaustive calculation, guaranteeing optimal result.')
]

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\board-games\Scrabble'

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

# Process level 9
filepath9 = os.path.join(base, 'level9.js')
with open(filepath9, 'r', encoding='utf-8') as f:
    content9 = f.read()

for q_tuple in level9_questions:
    question_block = create_question(q_tuple)
    content9 = content9.replace('    }\n  ]\n};', ',\n' + question_block + '\n    }\n  ]\n};')

with open(filepath9, 'w', encoding='utf-8') as f:
    f.write(content9)
print(f'Scrabble level 9: added 9 questions')

# Process level 10
filepath10 = os.path.join(base, 'level10.js')
with open(filepath10, 'r', encoding='utf-8') as f:
    content10 = f.read()

for q_tuple in level10_questions:
    question_block = create_question(q_tuple)
    content10 = content10.replace('    }\n  ];\n', ',\n' + question_block + '\n    }\n  ];\n')

with open(filepath10, 'w', encoding='utf-8') as f:
    f.write(content10)
print(f'Scrabble level 10: added 8 questions')

print('Scrabble complete: all levels now have 40 questions')
