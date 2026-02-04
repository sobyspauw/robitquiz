import os

checkers_questions = {
    4: """    },
    {
      question: {
        en: "What is the 'bridge' formation in advanced checkers?",
        es: "¿Qué es la formación 'puente' en damas avanzadas?",
        de: "Was ist die 'Brücken'-Formation im fortgeschrittenen Dame-Spiel?",
        nl: "Wat is de 'brug' formatie in gevorderd dammen?"
      },
      options: [
        {
          en: "Two pieces positioned diagonally that support each other's advancement",
          es: "Dos piezas posicionadas diagonalmente que apoyan el avance mutuo",
          de: "Zwei diagonal positionierte Steine die sich gegenseitig beim Vorrücken unterstützen",
          nl: "Twee stukken diagonaal gepositioneerd die elkaars opmars ondersteunen"
        },
        {
          en: "Pieces forming a straight line",
          es: "Piezas formando línea recta",
          de: "Steine bilden gerade Linie",
          nl: "Stukken vormen rechte lijn"
        },
        {
          en: "King pieces only",
          es: "Solo piezas reinas",
          de: "Nur Damesteine",
          nl: "Alleen damstukken"
        },
        {
          en: "Blocking opponent's back row",
          es: "Bloqueando fila trasera del oponente",
          de: "Hinterreihe des Gegners blockieren",
          nl: "Achterste rij van tegenstander blokkeren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Bridge formation creates mutual protection allowing safe forward progress while maintaining defensive support.",
        es: "Formación puente crea protección mutua permitiendo progreso adelante seguro mientras mantiene soporte defensivo.",
        de: "Brückenformation schafft gegenseitigen Schutz ermöglicht sicheren Fortschritt nach vorne während defensive Unterstützung erhalten bleibt.",
        nl: "Brugformatie creëert wederzijdse bescherming waardoor veilige voorwaartse vooruitgang mogelijk is terwijl defensieve steun behouden blijft."
      }""",
    5: """    },
    {
      question: {
        en: "What is 'tempo' in checkers strategy?",
        es: "¿Qué es 'tempo' en estrategia de damas?",
        de: "Was ist 'Tempo' in der Dame-Strategie?",
        nl: "Wat is 'tempo' in damstrategie?"
      },
      options: [
        {
          en: "The timing advantage of having the move at critical moments",
          es: "La ventaja de tiempo de tener el movimiento en momentos críticos",
          de: "Der Zeitvorteil den Zug in kritischen Momenten zu haben",
          nl: "Het timing voordeel van de zet hebben op kritieke momenten"
        },
        {
          en: "Speed of piece movement",
          es: "Velocidad de movimiento de piezas",
          de: "Geschwindigkeit der Steinbewegung",
          nl: "Snelheid van stukbeweging"
        },
        {
          en: "Number of kings",
          es: "Número de reinas",
          de: "Anzahl der Damesteine",
          nl: "Aantal damstukken"
        },
        {
          en: "Game duration",
          es: "Duración del juego",
          de: "Spieldauer",
          nl: "Spelduur"
        }
      ],
      correct: 0,
      explanation: {
        en: "Tempo refers to whose turn it is to move - having tempo at key positions can force opponent into zugzwang (disadvantageous move).",
        es: "Tempo se refiere a de quién es el turno de mover - tener tempo en posiciones clave puede forzar oponente a zugzwang (movimiento desventajoso).",
        de: "Tempo bezieht sich auf wessen Zug es ist - Tempo in Schlüsselpositionen haben kann Gegner zu Zugzwang zwingen (nachteiliger Zug).",
        nl: "Tempo verwijst naar wiens beurt het is om te zetten - tempo hebben bij sleutelposities kan tegenstander dwingen tot zugzwang (nadelige zet)."
      }""",
    6: """    },
    {
      question: {
        en: "What is the 'dyke' formation defense?",
        es: "¿Qué es la defensa de formación 'dique'?",
        de: "Was ist die 'Deich'-Formationsverteidigung?",
        nl: "Wat is de 'dijk' formatie verdediging?"
      },
      options: [
        {
          en: "Diagonal wall of pieces blocking opponent's advancement on one side",
          es: "Muro diagonal de piezas bloqueando avance del oponente en un lado",
          de: "Diagonale Mauer aus Steinen blockiert Vorrücken des Gegners auf einer Seite",
          nl: "Diagonale muur van stukken blokkeert opmars van tegenstander aan één kant"
        },
        {
          en: "Horizontal line of pieces",
          es: "Línea horizontal de piezas",
          de: "Horizontale Steinlinie",
          nl: "Horizontale lijn stukken"
        },
        {
          en: "Single piece blocking",
          es: "Bloqueo de pieza única",
          de: "Einzelstein-Block",
          nl: "Enkel stuk blokkeren"
        },
        {
          en: "King-only defense",
          es: "Defensa solo de reinas",
          de: "Nur-Dame-Verteidigung",
          nl: "Alleen-dam verdediging"
        }
      ],
      correct: 0,
      explanation: {
        en: "Dyke formation creates strong diagonal barrier forcing opponent to the weaker flank, controlling board flow.",
        es: "Formación dique crea fuerte barrera diagonal forzando oponente al flanco más débil, controlando flujo del tablero.",
        de: "Deichformation schafft starke diagonale Barriere zwingt Gegner zur schwächeren Flanke, kontrolliert Brettfluss.",
        nl: "Dijkformatie creëert sterke diagonale barrière dwingt tegenstander naar zwakkere flank, controleert bord stroom."
      }""",
    8: """    },
    {
      question: {
        en: "What is 'shot' strategy in expert checkers?",
        es: "¿Qué es la estrategia 'tiro' en damas expertas?",
        de: "Was ist 'Schuss'-Strategie im Experten-Dame?",
        nl: "Wat is 'schot' strategie in expert dammen?"
      },
      options: [
        {
          en: "Sacrificing piece to create forcing sequence leading to advantage",
          es: "Sacrificar pieza para crear secuencia forzante que lleva a ventaja",
          de: "Stein opfern um zwingende Sequenz zu schaffen die zu Vorteil führt",
          nl: "Stuk opofferen om dwingende reeks te creëren die tot voordeel leidt"
        },
        {
          en: "Quick random moves",
          es: "Movimientos rápidos aleatorios",
          de: "Schnelle Zufallszüge",
          nl: "Snelle willekeurige zetten"
        },
        {
          en: "Defensive positioning",
          es: "Posicionamiento defensivo",
          de: "Defensive Positionierung",
          nl: "Defensieve positionering"
        },
        {
          en: "Waiting for opponent's mistake",
          es: "Esperar error del oponente",
          de: "Auf Gegnerfehler warten",
          nl: "Wachten op fout van tegenstander"
        }
      ],
      correct: 0,
      explanation: {
        en: "Taking a 'shot' means accepting tactical sacrifice for long-term positional or material gain through calculated combinations.",
        es: "Tomar un 'tiro' significa aceptar sacrificio táctico para ganancia posicional o material a largo plazo mediante combinaciones calculadas.",
        de: "Einen 'Schuss' nehmen bedeutet taktisches Opfer für langfristigen Positions- oder Materialgewinn durch kalkulierte Kombinationen akzeptieren.",
        nl: "Een 'schot' nemen betekent tactisch offer accepteren voor langetermijn positionele of materiële winst door berekende combinaties."
      }""",
    10: """    },
    {
      question: {
        en: "What is the 'Payne's draw' endgame database?",
        es: "¿Qué es la base de datos de final 'empate de Payne'?",
        de: "Was ist die 'Payne's Remis' Endspiel-Datenbank?",
        nl: "Wat is de 'Payne's remise' eindspel database?"
      },
      options: [
        {
          en: "Computer-solved positions showing all theoretical draws with perfect play",
          es: "Posiciones resueltas por computadora mostrando todos los empates teóricos con juego perfecto",
          de: "Computergelöste Positionen zeigen alle theoretischen Remis mit perfektem Spiel",
          nl: "Computer-opgeloste posities tonen alle theoretische remises met perfect spel"
        },
        {
          en: "Drawing techniques tutorial",
          es: "Tutorial de técnicas de dibujo",
          de: "Zeichentechniken-Tutorial",
          nl: "Tekentechnieken tutorial"
        },
        {
          en: "Stalemate positions only",
          es: "Solo posiciones de empate",
          de: "Nur Patt-Positionen",
          nl: "Alleen patstelling posities"
        },
        {
          en: "Opening move database",
          es: "Base de datos de movimientos de apertura",
          de: "Eröffnungszug-Datenbank",
          nl: "Openingszet database"
        }
      ],
      correct: 0,
      explanation: {
        en: "Payne's database catalogues all 2-piece vs 2-piece endgames showing which are theoretical draws, crucial for endgame mastery.",
        es: "Base de datos de Payne cataloga todos los finales de 2 piezas vs 2 piezas mostrando cuáles son empates teóricos, crucial para dominio de finales.",
        de: "Paynes Datenbank katalogisiert alle 2-Stein vs 2-Stein Endspiele zeigt welche theoretische Remis sind, entscheidend für Endspiel-Meisterschaft.",
        nl: "Payne's database catalogiseert alle 2-stuk vs 2-stuk eindspelen toont welke theoretische remises zijn, cruciaal voor eindspel meesterschap."
      }"""
}

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\board-games\Checkers'

for level, question_text in checkers_questions.items():
    filepath = os.path.join(base, f'level{level}.js')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace('    }\n  ]\n};', question_text + '\n    }\n  ]\n};')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'Checkers level {level} done')

print('All Checkers levels completed!')
