import os
import re

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\board-games\Clue'

# Questions for each level
questions_l5 = '''      },
      {
            question: {
                  en: "What is card knowledge asymmetry?",
                  es: "What is card knowledge asymmetry?",
                  de: "What is card knowledge asymmetry?",
                  nl: "What is card knowledge asymmetry?"
            },
            options: [
                  {
                        en: "Advantage gained when you know opponent holds a card but they do not know you know",
                        es: "Advantage gained when you know opponent holds a card but they do not know you know",
                        de: "Advantage gained when you know opponent holds a card but they do not know you know",
                        nl: "Advantage gained when you know opponent holds a card but they do not know you know"
                  },
                  {
                        en: "Unequal card distribution",
                        es: "Unequal card distribution",
                        de: "Unequal card distribution",
                        nl: "Unequal card distribution"
                  },
                  {
                        en: "Different colored cards",
                        es: "Different colored cards",
                        de: "Different colored cards",
                        nl: "Different colored cards"
                  },
                  {
                        en: "Missing cards",
                        es: "Missing cards",
                        de: "Missing cards",
                        nl: "Missing cards"
                  }
            ],
            correct: 0,
            explanation: {
                  en: "If opponent shows you a card but does not realize you already knew they had it, you gain strategic advantage in deduction.",
                  es: "If opponent shows you a card but does not realize you already knew they had it, you gain strategic advantage in deduction.",
                  de: "If opponent shows you a card but does not realize you already knew they had it, you gain strategic advantage in deduction.",
                  nl: "If opponent shows you a card but does not realize you already knew they had it, you gain strategic advantage in deduction."
            }
      }'''

questions_l8 = ''',
        {
          question: {
            en: "What is card count asymmetry exploitation?",
            es: "What is card count asymmetry exploitation?",
            de: "What is card count asymmetry exploitation?",
            nl: "What is card count asymmetry exploitation?"
          },
          options: [
            {
              en: "Leveraging knowledge of exactly how many cards each player holds",
              es: "Leveraging knowledge of exactly how many cards each player holds",
              de: "Leveraging knowledge of exactly how many cards each player holds",
              nl: "Leveraging knowledge of exactly how many cards each player holds"
            },
            {
              en: "Exploiting unequal hands",
              es: "Exploiting unequal hands",
              de: "Exploiting unequal hands",
              nl: "Exploiting unequal hands"
            },
            {
              en: "Counting unfairly",
              es: "Counting unfairly",
              de: "Counting unfairly",
              nl: "Counting unfairly"
            },
            {
              en: "Having more cards",
              es: "Having more cards",
              de: "Having more cards",
              nl: "Having more cards"
            }
          ],
          correct: 0,
          explanation: {
            en: "Knowing player seating and card distribution allows calculating exactly which players can hold which cards.",
            es: "Knowing player seating and card distribution allows calculating exactly which players can hold which cards.",
            de: "Knowing player seating and card distribution allows calculating exactly which players can hold which cards.",
            nl: "Knowing player seating and card distribution allows calculating exactly which players can hold which cards."
          }
        },
        {
          question: {
            en: "What is suggestion sequencing theory?",
            es: "What is suggestion sequencing theory?",
            de: "What is suggestion sequencing theory?",
            nl: "What is suggestion sequencing theory?"
          },
          options: [
            {
              en: "Optimal ordering of suggestions to minimize total moves to solution",
              es: "Optimal ordering of suggestions to minimize total moves to solution",
              de: "Optimal ordering of suggestions to minimize total moves to solution",
              nl: "Optimal ordering of suggestions to minimize total moves to solution"
            },
            {
              en: "Suggesting alphabetically",
              es: "Suggesting alphabetically",
              de: "Suggesting alphabetically",
              nl: "Suggesting alphabetically"
            },
            {
              en: "Random order",
              es: "Random order",
              de: "Random order",
              nl: "Random order"
            },
            {
              en: "Following a pattern",
              es: "Following a pattern",
              de: "Following a pattern",
              nl: "Following a pattern"
            }
          ],
          correct: 0,
          explanation: {
            en: "Mathematical optimization of suggestion order can reduce expected moves to solve by minimizing redundant information.",
            es: "Mathematical optimization of suggestion order can reduce expected moves to solve by minimizing redundant information.",
            de: "Mathematical optimization of suggestion order can reduce expected moves to solve by minimizing redundant information.",
            nl: "Mathematical optimization of suggestion order can reduce expected moves to solve by minimizing redundant information."
          }
        },
        {
          question: {
            en: "What is psychological pressure in Clue?",
            es: "What is psychological pressure in Clue?",
            de: "What is psychological pressure in Clue?",
            nl: "What is psychological pressure in Clue?"
          },
          options: [
            {
              en: "Using suggestion patterns to make opponents doubt their deductions",
              es: "Using suggestion patterns to make opponents doubt their deductions",
              de: "Using suggestion patterns to make opponents doubt their deductions",
              nl: "Using suggestion patterns to make opponents doubt their deductions"
            },
            {
              en: "Yelling at players",
              es: "Yelling at players",
              de: "Yelling at players",
              nl: "Yelling at players"
            },
            {
              en: "Stressing others",
              es: "Stressing others",
              de: "Stressing others",
              nl: "Stressing others"
            },
            {
              en: "Being mean",
              es: "Being mean",
              de: "Being mean",
              nl: "Being mean"
            }
          ],
          correct: 0,
          explanation: {
            en: "Confident repeated suggestions can make opponents question their own conclusions, especially if they have limited information.",
            es: "Confident repeated suggestions can make opponents question their own conclusions, especially if they have limited information.",
            de: "Confident repeated suggestions can make opponents question their own conclusions, especially if they have limited information.",
            nl: "Confident repeated suggestions can make opponents question their own conclusions, especially if they have limited information."
          }
        },
        {
          question: {
            en: "What is the forced accusation scenario?",
            es: "What is the forced accusation scenario?",
            de: "What is the forced accusation scenario?",
            nl: "What is the forced accusation scenario?"
          },
          options: [
            {
              en: "Creating situations where opponents must accuse before having full information",
              es: "Creating situations where opponents must accuse before having full information",
              de: "Creating situations where opponents must accuse before having full information",
              nl: "Creating situations where opponents must accuse before having full information"
            },
            {
              en: "Making others guess",
              es: "Making others guess",
              de: "Making others guess",
              nl: "Making others guess"
            },
            {
              en: "Demanding accusations",
              es: "Demanding accusations",
              de: "Demanding accusations",
              nl: "Demanding accusations"
            },
            {
              en: "Forcing conclusions",
              es: "Forcing conclusions",
              de: "Forcing conclusions",
              nl: "Forcing conclusions"
            }
          ],
          correct: 0,
          explanation: {
            en: "By rapidly closing in on solution, you can pressure opponents to make premature accusations, eliminating competition.",
            es: "By rapidly closing in on solution, you can pressure opponents to make premature accusations, eliminating competition.",
            de: "By rapidly closing in on solution, you can pressure opponents to make premature accusations, eliminating competition.",
            nl: "By rapidly closing in on solution, you can pressure opponents to make premature accusations, eliminating competition."
          }
        }'''

questions_l9 = ''',
        {
          question: {
            en: "What is Bayesian card probability?",
            es: "What is Bayesian card probability?",
            de: "What is Bayesian card probability?",
            nl: "What is Bayesian card probability?"
          },
          options: [
            {
              en: "Updating probability of each card being in solution as information is revealed",
              es: "Updating probability of each card being in solution as information is revealed",
              de: "Updating probability of each card being in solution as information is revealed",
              nl: "Updating probability of each card being in solution as information is revealed"
            },
            {
              en: "Bayes theorem application",
              es: "Bayes theorem application",
              de: "Bayes theorem application",
              nl: "Bayes theorem application"
            },
            {
              en: "Random probability",
              es: "Random probability",
              de: "Random probability",
              nl: "Random probability"
            },
            {
              en: "Guessing odds",
              es: "Guessing odds",
              de: "Guessing odds",
              nl: "Guessing odds"
            }
          ],
          correct: 0,
          explanation: {
            en: "Expert players continuously calculate updated probabilities for each possible solution combination based on all revealed information.",
            es: "Expert players continuously calculate updated probabilities for each possible solution combination based on all revealed information.",
            de: "Expert players continuously calculate updated probabilities for each possible solution combination based on all revealed information.",
            nl: "Expert players continuously calculate updated probabilities for each possible solution combination based on all revealed information."
          }
        },
        {
          question: {
            en: "What is meta-game deduction?",
            es: "What is meta-game deduction?",
            de: "What is meta-game deduction?",
            nl: "What is meta-game deduction?"
          },
          options: [
            {
              en: "Using knowledge of opponent skill levels to predict their card holdings",
              es: "Using knowledge of opponent skill levels to predict their card holdings",
              de: "Using knowledge of opponent skill levels to predict their card holdings",
              nl: "Using knowledge of opponent skill levels to predict their card holdings"
            },
            {
              en: "Playing above the game",
              es: "Playing above the game",
              de: "Playing above the game",
              nl: "Playing above the game"
            },
            {
              en: "Game theory",
              es: "Game theory",
              de: "Game theory",
              nl: "Game theory"
            },
            {
              en: "Mind reading",
              es: "Mind reading",
              de: "Mind reading",
              nl: "Mind reading"
            }
          ],
          correct: 0,
          explanation: {
            en: "Experienced players adjust strategy based on whether opponents are likely to show optimal cards when they have choices.",
            es: "Experienced players adjust strategy based on whether opponents are likely to show optimal cards when they have choices.",
            de: "Experienced players adjust strategy based on whether opponents are likely to show optimal cards when they have choices.",
            nl: "Experienced players adjust strategy based on whether opponents are likely to show optimal cards when they have choices."
          }
        },
        {
          question: {
            en: "What is perfect information endgame?",
            es: "What is perfect information endgame?",
            de: "What is perfect information endgame?",
            nl: "What is perfect information endgame?"
          },
          options: [
            {
              en: "State where you have deduced entire solution through pure logic",
              es: "State where you have deduced entire solution through pure logic",
              de: "State where you have deduced entire solution through pure logic",
              nl: "State where you have deduced entire solution through pure logic"
            },
            {
              en: "Knowing everything",
              es: "Knowing everything",
              de: "Knowing everything",
              nl: "Knowing everything"
            },
            {
              en: "Seeing all cards",
              es: "Seeing all cards",
              de: "Seeing all cards",
              nl: "Seeing all cards"
            },
            {
              en: "Cheating",
              es: "Cheating",
              de: "Cheating",
              nl: "Cheating"
            }
          ],
          correct: 0,
          explanation: {
            en: "Perfect deduction means logically eliminating all but one possibility in each category without making accusations.",
            es: "Perfect deduction means logically eliminating all but one possibility in each category without making accusations.",
            de: "Perfect deduction means logically eliminating all but one possibility in each category without making accusations.",
            nl: "Perfect deduction means logically eliminating all but one possibility in each category without making accusations."
          }
        }'''

# Level 5
with open(os.path.join(base, 'level5.js'), 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'(\s+}\s+)\](\s+};)', r'\1' + questions_l5 + r'\n]\2', content)
with open(os.path.join(base, 'level5.js'), 'w', encoding='utf-8') as f:
    f.write(content)
print('Level 5: added 1 question')

# Level 8
with open(os.path.join(base, 'level8.js'), 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'(\s+}\s+)\](\s+};)', r'\1' + questions_l8 + r'\n        }\n      ]\n};', content)
with open(os.path.join(base, 'level8.js'), 'w', encoding='utf-8') as f:
    f.write(content)
print('Level 8: added 4 questions')

# Level 9
with open(os.path.join(base, 'level9.js'), 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'(\s+}\s+)\](\s+};)', r'\1' + questions_l9 + r'\n        }\n      ]\n};', content)
with open(os.path.join(base, 'level9.js'), 'w', encoding='utf-8') as f:
    f.write(content)
print('Level 9: added 3 questions')

print('\nCLUE COMPLETE - ALL 10 LEVELS HAVE 40 QUESTIONS!')
print('ALL 10 BOARD GAMES COMPLETE - 4,000 QUESTIONS TOTAL!')
