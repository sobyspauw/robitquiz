import os

# Simplified Risk questions - compact format
questions = {
    2: [('"What is card trading strategy?"', '"Exchange sets of cards for armies at optimal timing"', '"Trading cards randomly"', '"Avoiding card trades"', '"Trading every turn"', 'Holding 3+ card sets allows strategic timing of turn-ins when you need armies most.')],
    3: [('"What is the Australia strategy?"', '"Hold Australia continent (2 armies/turn) with only 1 border to defend"', '"Invading from Australia"', '"Avoiding Australia"', '"Attacking Australia first"', 'Australia gives steady +2 armies with minimal 1-border defense (Siam), ideal early game hold.')],
    4: [('"What is breaking a bonus?"', '"Conquering one territory to deny opponent continent bonus"', '"Breaking alliances"', '"Breaking cards"', '"Destroying armies"', 'Denying opponent their continent bonus (e.g., taking 1 territory in their South America) is often better than expanding elsewhere.')],
    5: [('"What is the Ukraine position strategy?"', '"Central position connecting Europe, Asia enables flexible attacks"', '"Defending only Ukraine"', '"Avoiding Ukraine"', '"Starting in Ukraine"', 'Ukraine borders 4 regions providing strategic flexibility but requires strong defense due to multiple attack vectors.')],
    6: [('"What is turtling strategy?"', '"Defensive play holding small continent waiting for opportunity"', '"Attacking aggressively"', '"Constant expansion"', '"Random attacks"', 'Turtling in defensible continent building armies conservatively until opponents weaken each other.')],
    7: [('"What is stack positioning?"', '"Concentrating large army stacks on key border territories"', '"Spreading armies evenly"', '"Putting all armies inland"', '"Moving armies constantly"', 'Stack positioning places most armies on active borders for offense/defense while keeping minimal garrisons inland.')],
    10: [('"What is the kamikaze attack?"', '"Sacrificing position to eliminate player and take their cards"', '"Suicidal attacks"', '"Aggressive opening"', '"Attacking randomly"', 'When trailing, eliminating another player for cards (often 3-card bonus) can swing game even if it weakens your position.')]
}

# Add extra questions for levels needing more
questions[2].extend([
    ('"What is the South America strategy?"', '"Hold SA (2 armies) with 2-border defense as stepping stone"', '"Avoiding South America"', '"Attacking from SA only"', '"Ignoring SA bonus"', 'SA gives +2 with only 2 borders (Brazil,Venezuela) balancing income vs defense needs.'),
    ('"What is border fortification?"', '"Placing armies on territories adjacent to enemies"', '"Random army placement"', '"All armies in capital"', '"Spreading armies equally"', 'Border fortification concentrates forces where combat occurs, not inland territories.'),
    ('"What is the early aggression mistake?"', '"Overextending before securing continent bonus"', '"Being too defensive"', '"Turtling early"', '"Making alliances"', 'Early overexpansion without continent bonus spreads armies thin, leaving vulnerable to counter-attacks.'),
    ('"What is tactical retreat value?"', '"Abandoning indefensible positions to consolidate elsewhere"', '"Never retreating"', '"Retreating always"', '"Running away"', 'Strategic retreat from untenable territories consolidates strength in defensible continents.')
])

questions[3].append(('"What is the Asia-Europe connection?"', '"Ukraine and Middle East link the two largest continents"', '"No connection exists"', '"Only through Asia"', '"Through Africa only"', 'Ukraine and Middle East are strategic chokepoints between Asia and Europe.'))

questions[5].append(('"What is the North America endgame?"', '"NA (5 armies) becomes dominant in late game with 3-border defense"', '"Weakest continent"', '"Early game only"', '"Impossible to hold"', 'NA provides highest army bonus (5) sustainable with 3 borders (Alaska,Greenland,Central America) in endgame.'))

questions[10].append(('"What is perfect dice calculation?"', '"Understanding attacker wins 60% with equal armies on average"', '"Dice are random"', '"Attacker always wins"', '"Defender has advantage"', 'On average with equal armies attacker wins ~60% due to 3-dice advantage, informing attack/defend decisions.'))

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\board-games\Risk'

for level, q_list in questions.items():
    filepath = os.path.join(base, f'level{level}.js')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for q, opt1, opt2, opt3, opt4, exp in q_list:
        question_block = f'''    }},
    {{
      question: {{
        en: {q},
        es: {q},
        de: {q},
        nl: {q}
      }},
      options: [
        {{
          en: {opt1},
          es: {opt1},
          de: {opt1},
          nl: {opt1}
        }},
        {{
          en: {opt2},
          es: {opt2},
          de: {opt2},
          nl: {opt2}
        }},
        {{
          en: {opt3},
          es: {opt3},
          de: {opt3},
          nl: {opt3}
        }},
        {{
          en: {opt4},
          es: {opt4},
          de: {opt4},
          nl: {opt4}
        }}
      ],
      correct: 0,
      explanation: {{
        en: "{exp}",
        es: "{exp}",
        de: "{exp}",
        nl: "{exp}"
      }}'''
        content = content.replace('    }\n  ]\n};', question_block + '\n    }\n  ]\n};')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Risk level {level} done ({len(q_list)} questions)')

print('All Risk levels completed!')
