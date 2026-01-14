import os

backgammon_questions = {
    1: """    },
    {
      question: {
        en: "What is the 'anchor' in backgammon strategy?",
        es: "¿Qué es el 'ancla' en estrategia de backgammon?",
        de: "Was ist der 'Anker' in der Backgammon-Strategie?",
        nl: "Wat is het 'anker' in backgammon strategie?"
      },
      options: [
        {
          en: "A point in opponent's home board occupied by 2+ checkers providing defensive base",
          es: "Un punto en el tablero casa del oponente ocupado por 2+ fichas proporcionando base defensiva",
          de: "Ein Punkt im Heimfeld des Gegners besetzt von 2+ Steinen bietet defensive Basis",
          nl: "Een punt in het thuisbord van tegenstander bezet door 2+ schijven biedt defensieve basis"
        },
        {
          en: "The starting position",
          es: "La posición inicial",
          de: "Die Startposition",
          nl: "De startpositie"
        },
        {
          en: "The bar",
          es: "La barra",
          de: "Die Bar",
          nl: "De bar"
        },
        {
          en: "The doubling cube",
          es: "El cubo de doblaje",
          de: "Der Dopplungswürfel",
          nl: "De verdubelkubus"
        }
      ],
      correct: 0,
      explanation: {
        en: "An anchor (usually on 20 or 21-point) provides safety for back checkers and prevents opponent from building prime.",
        es: "Un ancla (usualmente en punto 20 o 21) proporciona seguridad para fichas traseras y previene que oponente construya prima.",
        de: "Ein Anker (normalerweise auf Punkt 20 oder 21) bietet Sicherheit für hintere Steine und verhindert Prime-Bau des Gegners.",
        nl: "Een anker (meestal op 20 of 21-punt) biedt veiligheid voor achterste schijven en voorkomt dat tegenstander prime bouwt."
      }""",
    6: """    },
    {
      question: {
        en: "What is a 'blitz' strategy in backgammon?",
        es: "¿Qué es una estrategia 'blitz' en backgammon?",
        de: "Was ist eine 'Blitz'-Strategie im Backgammon?",
        nl: "Wat is een 'blitz' strategie in backgammon?"
      },
      options: [
        {
          en: "Aggressive attack closing home board points to trap opponent's checkers on bar",
          es: "Ataque agresivo cerrando puntos del tablero casa para atrapar fichas del oponente en la barra",
          de: "Aggressiver Angriff schließt Heimfeld-Punkte um Gegnersteine auf Bar zu fangen",
          nl: "Agressieve aanval sluit thuisbordpunten om schijven van tegenstander op bar te vangen"
        },
        {
          en: "Playing very quickly",
          es: "Jugar muy rápido",
          de: "Sehr schnell spielen",
          nl: "Heel snel spelen"
        },
        {
          en: "Running all checkers immediately",
          es: "Correr todas las fichas inmediatamente",
          de: "Alle Steine sofort laufen",
          nl: "Alle schijven onmiddellijk laten lopen"
        },
        {
          en: "Building a prime",
          es: "Construir una prima",
          de: "Eine Prime bauen",
          nl: "Een prime bouwen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Blitz attacks opponent's blots aggressively while closing home board, aiming to trap hit checkers and win quickly.",
        es: "Blitz ataca blots del oponente agresivamente mientras cierra tablero casa, buscando atrapar fichas golpeadas y ganar rápidamente.",
        de: "Blitz greift gegnerische Blots aggressiv an während Heimfeld geschlossen wird, zielt darauf ab getroffene Steine zu fangen und schnell zu gewinnen.",
        nl: "Blitz valt blots van tegenstander agressief aan terwijl thuisbord gesloten wordt, beoogt getroffen schijven te vangen en snel te winnen."
      }""",
    8: """    },
    {
      question: {
        en: "What is 'slot and split' opening strategy?",
        es: "¿Qué es la estrategia de apertura 'slot and split'?",
        de: "Was ist die 'Slot and Split' Eröffnungsstrategie?",
        nl: "Wat is 'slot and split' openingsstrategie?"
      },
      options: [
        {
          en: "Making vulnerable points to gain positional advantage early",
          es: "Hacer puntos vulnerables para ganar ventaja posicional temprano",
          de: "Verwundbare Punkte machen um früh Positionsvorteil zu gewinnen",
          nl: "Kwetsbare punten maken om vroeg positioneel voordeel te krijgen"
        },
        {
          en: "Splitting all checkers equally",
          es: "Dividir todas las fichas igualmente",
          de: "Alle Steine gleichmäßig aufteilen",
          nl: "Alle schijven gelijk verdelen"
        },
        {
          en: "Only safe plays",
          es: "Solo jugadas seguras",
          de: "Nur sichere Züge",
          nl: "Alleen veilige zetten"
        },
        {
          en: "Running game immediately",
          es: "Juego de carrera inmediatamente",
          de: "Sofort Laufspiel",
          nl: "Onmiddellijk loopspel"
        }
      ],
      correct: 0,
      explanation: {
        en: "Slotting (placing single checker on key point) and splitting back checkers risks blots but fights for crucial early position.",
        es: "Slotting (colocar ficha única en punto clave) y dividir fichas traseras arriesga blots pero lucha por posición temprana crucial.",
        de: "Slotting (einzelnen Stein auf Schlüsselpunkt platzieren) und hintere Steine teilen riskiert Blots aber kämpft um wichtige frühe Position.",
        nl: "Slotting (enkele schijf plaatsen op belangrijk punt) en achterste schijven splitsen riskeert blots maar vecht voor cruciale vroege positie."
      }""",
    9: """    },
    {
      question: {
        en: "What is 'match equity' in tournament backgammon?",
        es: "¿Qué es 'equidad de partido' en backgammon de torneo?",
        de: "Was ist 'Match Equity' im Turnier-Backgammon?",
        nl: "Wat is 'match equity' in toernooi backgammon?"
      },
      options: [
        {
          en: "The winning probability percentage at each match score, affecting doubling cube decisions",
          es: "El porcentaje de probabilidad de ganar en cada puntuación de partido, afectando decisiones del cubo de doblaje",
          de: "Die Gewinnwahrscheinlichkeit in Prozent bei jedem Match-Stand, beeinflusst Dopplungswürfel-Entscheidungen",
          nl: "Het winnende kans percentage bij elke wedstrijdscore, beïnvloedt verdubelkubus beslissingen"
        },
        {
          en: "Fair play rules",
          es: "Reglas de juego limpio",
          de: "Fair-Play-Regeln",
          nl: "Fair play regels"
        },
        {
          en: "Equal starting positions",
          es: "Posiciones iniciales iguales",
          de: "Gleiche Startpositionen",
          nl: "Gelijke startposities"
        },
        {
          en: "Prize money distribution",
          es: "Distribución de premios",
          de: "Preisgeldverteilung",
          nl: "Prijzengeld verdeling"
        }
      ],
      correct: 0,
      explanation: {
        en: "Match equity tables show winning chances at each score (e.g., leading 4-2 to 5 = 70% equity), crucial for proper doubling cube strategy.",
        es: "Tablas de equidad de partido muestran probabilidades de ganar en cada puntuación (ej., liderando 4-2 a 5 = 70% equidad), crucial para estrategia apropiada del cubo.",
        de: "Match Equity Tabellen zeigen Gewinnchancen bei jedem Stand (z.B. 4-2 führend zu 5 = 70% Equity), entscheidend für richtige Dopplerwürfel-Strategie.",
        nl: "Match equity tabellen tonen winnende kansen bij elke score (bijv., leidend 4-2 naar 5 = 70% equity), cruciaal voor juiste verdubelkubus strategie."
      }"""
}

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\board-games\Backgammon'

for level, question_text in backgammon_questions.items():
    filepath = os.path.join(base, f'level{level}.js')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace('    }\n  ]\n};', question_text + '\n    }\n  ]\n};')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'Backgammon level {level} done')

print('All Backgammon levels completed!')
