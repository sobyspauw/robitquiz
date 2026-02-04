import os

# Card Games questions to add
card_games_questions = {
    1: ["""    },
    {
      question: {
        en: "What is a 'meld' in card games?",
        es: "¿Qué es un 'meld' en juegos de cartas?",
        de: "Was ist ein 'Meld' bei Kartenspielen?",
        nl: "Wat is een 'meld' in kaartspellen?"
      },
      options: [
        {
          en: "A valid combination of cards played together for points",
          es: "Una combinación válida de cartas jugadas juntas para puntos",
          de: "Eine gültige Kartenkombination die zusammen für Punkte gespielt wird",
          nl: "Een geldige combinatie van kaarten samen gespeeld voor punten"
        },
        {
          en: "Shuffling cards",
          es: "Barajar cartas",
          de: "Karten mischen",
          nl: "Kaarten schudden"
        },
        {
          en: "Drawing a card",
          es: "Robar una carta",
          de: "Eine Karte ziehen",
          nl: "Een kaart trekken"
        },
        {
          en: "Discarding cards",
          es: "Descartar cartas",
          de: "Karten ablegen",
          nl: "Kaarten afleggen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Melding refers to laying down valid card combinations (sets, runs, etc.) in games like Rummy, Canasta, or Gin.",
        es: "Meld se refiere a poner combinaciones válidas de cartas (sets, escaleras, etc.) en juegos como Rummy, Canasta o Gin.",
        de: "Melden bezieht sich auf das Auslegen gültiger Kartenkombinationen (Sätze, Läufe, etc.) in Spielen wie Rummy, Canasta oder Gin.",
        nl: "Melden verwijst naar het neerleggen van geldige kaartcombinaties (sets, rijtjes, etc.) in spellen zoals Rummy, Canasta of Gin."
      }"""],
    2: ["""    },
    {
      question: {
        en: "What is 'card counting' in Blackjack?",
        es: "¿Qué es 'contar cartas' en Blackjack?",
        de: "Was ist 'Kartenzählen' beim Blackjack?",
        nl: "Wat is 'kaarten tellen' bij Blackjack?"
      },
      options: [
        {
          en: "Tracking ratio of high to low cards remaining to adjust betting strategy",
          es: "Rastrear proporción de cartas altas a bajas restantes para ajustar estrategia de apuestas",
          de: "Verhältnis hoher zu niedrigen verbleibenden Karten verfolgen um Wettstrategie anzupassen",
          nl: "Verhouding van hoge tot lage resterende kaarten bijhouden om wetstrategie aan te passen"
        },
        {
          en: "Counting how many cards are dealt",
          es: "Contar cuántas cartas se reparten",
          de: "Zählen wie viele Karten ausgeteilt werden",
          nl: "Tellen hoeveel kaarten gedeeld worden"
        },
        {
          en: "Memorizing all cards",
          es: "Memorizar todas las cartas",
          de: "Alle Karten auswendig lernen",
          nl: "Alle kaarten onthouden"
        },
        {
          en: "Illegal cheating method",
          es: "Método ilegal de hacer trampa",
          de: "Illegale Betrugsmethode",
          nl: "Illegale valsspel methode"
        }
      ],
      correct: 0,
      explanation: {
        en: "Card counting assigns values to cards (+1 for low, -1 for high) to track deck composition, giving mathematical edge when count is high.",
        es: "Contar cartas asigna valores a cartas (+1 para baja, -1 para alta) para rastrear composición del mazo, dando ventaja matemática cuando cuenta es alta.",
        de: "Kartenzählen weist Karten Werte zu (+1 für niedrig, -1 für hoch) um Deck-Zusammensetzung zu verfolgen, gibt mathematischen Vorteil wenn Zählung hoch ist.",
        nl: "Kaarten tellen wijst waarden toe aan kaarten (+1 voor laag, -1 voor hoog) om decksamenstelling te volgen, geeft wiskundig voordeel wanneer telling hoog is."
      }"""],
    8: ["""    },
    {
      question: {
        en: "In Poker, what is 'pot odds' calculation?",
        es: "En Póker, ¿qué es el cálculo de 'pot odds'?",
        de: "Was ist 'Pot Odds' Berechnung beim Poker?",
        nl: "Wat is 'pot odds' berekening in Poker?"
      },
      options: [
        {
          en: "Ratio of pot size to cost of calling, determining profitable calls",
          es: "Proporción del tamaño del bote al costo de igualar, determinando igualadas rentables",
          de: "Verhältnis von Pot-Größe zu Call-Kosten, bestimmt profitable Calls",
          nl: "Verhouding van potgrootte tot kosten van callen, bepaalt winstgevende calls"
        },
        {
          en: "Probability of winning",
          es: "Probabilidad de ganar",
          de: "Gewinnwahrscheinlichkeit",
          nl: "Kans op winnen"
        },
        {
          en: "Amount of money in pot",
          es: "Cantidad de dinero en bote",
          de: "Geldbetrag im Pot",
          nl: "Hoeveelheid geld in pot"
        },
        {
          en: "Betting patterns",
          es: "Patrones de apuestas",
          de: "Wettmuster",
          nl: "Wedpatronen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Pot odds compare potential gain (pot) to cost (call amount). If pot is $100 and call is $20, you need >16.7% win chance to call profitably.",
        es: "Pot odds compara ganancia potencial (bote) con costo (cantidad de igualar). Si bote es $100 y call $20, necesitas >16.7% probabilidad de ganar para igualar rentablemente.",
        de: "Pot Odds vergleicht potenziellen Gewinn (Pot) mit Kosten (Call-Betrag). Bei Pot $100 und Call $20 braucht man >16.7% Gewinnchance für profitablen Call.",
        nl: "Pot odds vergelijkt potentiële winst (pot) met kosten (call bedrag). Als pot $100 is en call $20, heb je >16.7% winkans nodig om winstgevend te callen."
      }""",
        """    },
    {
      question: {
        en: "What is 'implied odds' in advanced Poker?",
        es: "¿Qué son 'implied odds' en Póker avanzado?",
        de: "Was sind 'Implied Odds' im fortgeschrittenen Poker?",
        nl: "Wat zijn 'implied odds' in gevorderd Poker?"
      },
      options: [
        {
          en: "Expected future winnings on later streets if you hit your draw",
          es: "Ganancias futuras esperadas en calles posteriores si completas tu proyecto",
          de: "Erwartete zukünftige Gewinne auf späteren Streets wenn Draw trifft",
          nl: "Verwachte toekomstige winsten op latere streets als je draw raakt"
        },
        {
          en: "Hidden cards",
          es: "Cartas ocultas",
          de: "Versteckte Karten",
          nl: "Verborgen kaarten"
        },
        {
          en: "Bluffing frequency",
          es: "Frecuencia de farol",
          de: "Bluff-Häufigkeit",
          nl: "Bluf frequentie"
        },
        {
          en: "Table position advantage",
          es: "Ventaja de posición en mesa",
          de: "Tischpositionsvorteil",
          nl: "Tafel positie voordeel"
        }
      ],
      correct: 0,
      explanation: {
        en: "Implied odds account for additional chips you'll win if you complete your hand, making marginal calls profitable when opponents will pay you off.",
        es: "Implied odds cuentan fichas adicionales que ganarás si completas tu mano, haciendo calls marginales rentables cuando oponentes te pagarán.",
        de: "Implied Odds berücksichtigen zusätzliche Chips die man gewinnt wenn Hand vervollständigt wird, macht marginale Calls profitabel wenn Gegner auszahlen.",
        nl: "Implied odds houden rekening met extra fiches die je wint als je hand completeert, maakt marginale calls winstgevend wanneer tegenstanders uitbetalen."
      }""",
        """    },
    {
      question: {
        en: "What is 'range construction' in high-level Poker?",
        es: "¿Qué es 'construcción de rango' en Póker de alto nivel?",
        de: "Was ist 'Range-Konstruktion' im High-Level-Poker?",
        nl: "Wat is 'range constructie' in high-level Poker?"
      },
      options: [
        {
          en: "Building balanced hand ranges for each position and action to avoid exploitation",
          es: "Construir rangos de manos equilibrados para cada posición y acción para evitar explotación",
          de: "Ausgewogene Hand-Ranges für jede Position und Aktion aufbauen um Ausbeutung zu vermeiden",
          nl: "Gebalanceerde hand ranges bouwen voor elke positie en actie om exploitatie te vermijden"
        },
        {
          en: "Organizing cards by rank",
          es: "Organizar cartas por rango",
          de: "Karten nach Rang ordnen",
          nl: "Kaarten ordenen op rang"
        },
        {
          en: "Choosing table limits",
          es: "Elegir límites de mesa",
          de: "Tischlimits wählen",
          nl: "Tafellimieten kiezen"
        },
        {
          en: "Setting betting ranges",
          es: "Establecer rangos de apuestas",
          de: "Wettbereiche festlegen",
          nl: "Wedbereiken instellen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Range construction means playing diverse hands in each spot (not just premiums when raising) so opponents can't narrow your holdings, maintaining strategic balance.",
        es: "Construcción de rango significa jugar manos diversas en cada situación (no solo premium cuando subes) para que oponentes no puedan reducir tus tenencias, manteniendo equilibrio estratégico.",
        de: "Range-Konstruktion bedeutet diverse Hände in jeder Situation spielen (nicht nur Premiumhände beim Erhöhen) damit Gegner Holdings nicht einengen können, strategisches Gleichgewicht erhalten.",
        nl: "Range constructie betekent diverse handen spelen in elke situatie (niet alleen premiums bij raisen) zodat tegenstanders je holdings niet kunnen versmallen, strategisch evenwicht behouden."
      }"""],
    9: ["""    },
    {
      question: {
        en: "What is 'GTO' (Game Theory Optimal) strategy in Poker?",
        es: "¿Qué es estrategia 'GTO' (Teoría de Juegos Óptima) en Póker?",
        de: "Was ist 'GTO' (Spieltheorie-Optimal) Strategie beim Poker?",
        nl: "Wat is 'GTO' (Game Theory Optimal) strategie in Poker?"
      },
      options: [
        {
          en: "Unexploitable strategy that cannot lose in long run regardless of opponent's play",
          es: "Estrategia no explotable que no puede perder a largo plazo independientemente del juego del oponente",
          de: "Nicht ausbeutbare Strategie die langfristig nicht verlieren kann unabhängig vom Spiel des Gegners",
          nl: "Niet-exploiteerbare strategie die op lange termijn niet kan verliezen ongeacht spel van tegenstander"
        },
        {
          en: "Always bluffing strategy",
          es: "Estrategia de siempre farolear",
          de: "Immer bluffen Strategie",
          nl: "Altijd bluffen strategie"
        },
        {
          en: "Playing only premium hands",
          es: "Jugar solo manos premium",
          de: "Nur Premiumhände spielen",
          nl: "Alleen premium handen spelen"
        },
        {
          en: "Aggressive betting",
          es: "Apuestas agresivas",
          de: "Aggressives Wetten",
          nl: "Agressief wedden"
        }
      ],
      correct: 0,
      explanation: {
        en: "GTO uses mixed strategies (randomizing actions with optimal frequencies) making you unexploitable - opponents can't gain edge no matter how they adjust.",
        es: "GTO usa estrategias mixtas (aleatorizando acciones con frecuencias óptimas) haciéndote no explotable - oponentes no pueden ganar ventaja sin importar cómo se ajusten.",
        de: "GTO nutzt gemischte Strategien (zufällige Aktionen mit optimalen Frequenzen) macht dich nicht ausbeutbar - Gegner können keinen Vorteil erlangen egal wie sie sich anpassen.",
        nl: "GTO gebruikt gemengde strategieën (acties randomiseren met optimale frequenties) maakt je niet-exploiteerbaar - tegenstanders kunnen geen voordeel krijgen hoe ze ook aanpassen."
      }""",
        """    },
    {
      question: {
        en: "What is 'ICM' (Independent Chip Model) in tournament Poker?",
        es: "¿Qué es 'ICM' (Modelo de Fichas Independiente) en Póker de torneo?",
        de: "Was ist 'ICM' (Independent Chip Model) im Turnier-Poker?",
        nl: "Wat is 'ICM' (Independent Chip Model) in toernooi Poker?"
      },
      options: [
        {
          en: "Mathematical model converting chip stacks to tournament equity based on payout structure",
          es: "Modelo matemático convirtiendo pilas de fichas a equidad de torneo basado en estructura de pagos",
          de: "Mathematisches Modell wandelt Chip-Stacks in Turnier-Equity um basierend auf Auszahlungsstruktur",
          nl: "Wiskundig model dat chip stacks omzet naar toernooi equity gebaseerd op uitbetalingsstructuur"
        },
        {
          en: "Chip counting method",
          es: "Método de conteo de fichas",
          de: "Chip-Zählmethode",
          nl: "Fiches telmethode"
        },
        {
          en: "Independent table selection",
          es: "Selección de mesa independiente",
          de: "Unabhängige Tischauswahl",
          nl: "Onafhankelijke tafelselectie"
        },
        {
          en: "International poker model",
          es: "Modelo de póker internacional",
          de: "Internationales Poker-Modell",
          nl: "Internationaal poker model"
        }
      ],
      correct: 0,
      explanation: {
        en: "ICM calculates tournament dollar value of chip stacks considering payout jumps - doubling chips doesn't double equity near bubble or final table.",
        es: "ICM calcula valor en dólares de torneo de pilas de fichas considerando saltos de pagos - duplicar fichas no duplica equidad cerca de burbuja o mesa final.",
        de: "ICM berechnet Turnier-Dollarwert von Chip-Stacks unter Berücksichtigung von Auszahlungssprüngen - Verdoppelung von Chips verdoppelt nicht Equity nahe Bubble oder Final Table.",
        nl: "ICM berekent toernooi dollarwaarde van chip stacks rekening houdend met uitbetalingssprongen - verdubbelen van fiches verdubbelt equity niet nabij bubble of final table."
      }""",
        """    },
    {
      question: {
        en: "What is 'range advantage' in Poker analysis?",
        es: "¿Qué es 'ventaja de rango' en análisis de Póker?",
        de: "Was ist 'Range-Vorteil' in der Poker-Analyse?",
        nl: "Wat is 'range voordeel' in Poker analyse?"
      },
      options: [
        {
          en: "When one player's possible hands are stronger overall on given board texture",
          es: "Cuando las manos posibles de un jugador son más fuertes en general en textura de tablero dada",
          de: "Wenn mögliche Hände eines Spielers insgesamt stärker sind auf gegebener Board-Textur",
          nl: "Wanneer mogelijke handen van een speler over het algemeen sterker zijn op gegeven board textuur"
        },
        {
          en: "Having position",
          es: "Tener posición",
          de: "Position haben",
          nl: "Positie hebben"
        },
        {
          en: "More chips",
          es: "Más fichas",
          de: "Mehr Chips",
          nl: "Meer fiches"
        },
        {
          en: "Better cards",
          es: "Mejores cartas",
          de: "Bessere Karten",
          nl: "Betere kaarten"
        }
      ],
      correct: 0,
      explanation: {
        en: "Range advantage means your range contains more strong hands than opponent's on specific board - e.g., raiser has range advantage on A-high boards.",
        es: "Ventaja de rango significa que tu rango contiene más manos fuertes que el del oponente en tablero específico - ej., subidor tiene ventaja de rango en tableros con A alto.",
        de: "Range-Vorteil bedeutet dass Range mehr starke Hände enthält als Gegner auf spezifischem Board - z.B. Raiser hat Range-Vorteil auf A-hohen Boards.",
        nl: "Range voordeel betekent dat je range meer sterke handen bevat dan tegenstander op specifiek board - bijv., raiser heeft range voordeel op A-hoge boards."
      }""",
        """    },
    {
      question: {
        en: "What is 'polarization' in advanced betting strategy?",
        es: "¿Qué es 'polarización' en estrategia avanzada de apuestas?",
        de: "Was ist 'Polarisierung' in fortgeschrittener Wettstrategie?",
        nl: "Wat is 'polarisatie' in geavanceerde wedstrategie?"
      },
      options: [
        {
          en: "Betting range containing only very strong hands and bluffs, no medium strength",
          es: "Rango de apuesta conteniendo solo manos muy fuertes y faroles, sin fuerza media",
          de: "Wett-Range enthält nur sehr starke Hände und Bluffs, keine mittlere Stärke",
          nl: "Wedrange bevat alleen zeer sterke handen en bluffs, geen middel sterke"
        },
        {
          en: "Playing aggressively",
          es: "Jugar agresivamente",
          de: "Aggressiv spielen",
          nl: "Agressief spelen"
        },
        {
          en: "Opposite playing style",
          es: "Estilo de juego opuesto",
          de: "Gegensätzlicher Spielstil",
          nl: "Tegenovergestelde speelstijl"
        },
        {
          en: "Table image",
          es: "Imagen en mesa",
          de: "Tischimage",
          nl: "Tafel imago"
        }
      ],
      correct: 0,
      explanation: {
        en: "Polarized range has nutted hands and air (no showdown value), used in large bets where medium hands can't call profitably anyway.",
        es: "Rango polarizado tiene manos muy fuertes y aire (sin valor de showdown), usado en apuestas grandes donde manos medias no pueden igualar rentablemente de todos modos.",
        de: "Polarisierte Range hat Nuts-Hände und Luft (kein Showdown-Value), verwendet bei großen Wetten wo mittlere Hände sowieso nicht profitabel callen können.",
        nl: "Gepolariseerde range heeft nuts handen en lucht (geen showdown waarde), gebruikt bij grote weddenschappen waar middel handen toch niet winstgevend kunnen callen."
      }""",
        """    },
    {
      question: {
        en: "What is 'blockers' concept in high-stakes Poker?",
        es: "¿Qué es el concepto de 'blockers' en Póker de altas apuestas?",
        de: "Was ist das 'Blockers'-Konzept im High-Stakes-Poker?",
        nl: "Wat is het 'blockers' concept in high-stakes Poker?"
      },
      options: [
        {
          en: "Cards you hold that reduce likelihood opponent has certain strong hands",
          es: "Cartas que sostienes que reducen probabilidad de que oponente tenga ciertas manos fuertes",
          de: "Karten die man hält die Wahrscheinlichkeit reduzieren dass Gegner bestimmte starke Hände hat",
          nl: "Kaarten die je houdt die kans verminderen dat tegenstander bepaalde sterke handen heeft"
        },
        {
          en: "Blocking bets",
          es: "Apuestas de bloqueo",
          de: "Blockwetten",
          nl: "Blokkeer weddenschappen"
        },
        {
          en: "Defensive play",
          es: "Juego defensivo",
          de: "Defensives Spiel",
          nl: "Defensief spel"
        },
        {
          en: "Preventing raises",
          es: "Prevenir subidas",
          de: "Erhöhungen verhindern",
          nl: "Verhogen voorkomen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Holding A♠ blocks AA combos opponent can have, making A-high bluffs more profitable since fewer nut hands in their range.",
        es: "Sostener A♠ bloquea combos de AA que oponente puede tener, haciendo faroles con A alto más rentables ya que menos manos nuts en su rango.",
        de: "A♠ halten blockiert AA-Kombinationen die Gegner haben kann, macht A-high Bluffs profitabler da weniger Nut-Hände in Range.",
        nl: "A♠ vasthouden blokkeert AA combos die tegenstander kan hebben, maakt A-hoge bluffs winstgevender omdat minder nut handen in hun range."
      }"""],
    10: ["""    },
    {
      question: {
        en: "What is 'MDF' (Minimum Defense Frequency) in Poker theory?",
        es: "¿Qué es 'MDF' (Frecuencia Mínima de Defensa) en teoría de Póker?",
        de: "Was ist 'MDF' (Minimum Defense Frequency) in der Poker-Theorie?",
        nl: "Wat is 'MDF' (Minimum Defense Frequency) in Poker theorie?"
      },
      options: [
        {
          en: "Minimum percentage you must defend to prevent opponent's bluffs from being profitable",
          es: "Porcentaje mínimo que debes defender para prevenir que faroles del oponente sean rentables",
          de: "Mindestprozentsatz den man verteidigen muss um Gegner-Bluffs unprofitabel zu machen",
          nl: "Minimum percentage dat je moet verdedigen om bluffs van tegenstander onwinstgevend te maken"
        },
        {
          en: "Mandatory defense bet",
          es: "Apuesta de defensa obligatoria",
          de: "Pflicht-Verteidigungswette",
          nl: "Verplichte verdedigingsweddenschap"
        },
        {
          en: "Minimum chip stack",
          es: "Pila mínima de fichas",
          de: "Mindest-Chipstack",
          nl: "Minimum fiches stapel"
        },
        {
          en: "Defense position",
          es: "Posición defensiva",
          de: "Verteidigungsposition",
          nl: "Verdedigingspositie"
        }
      ],
      correct: 0,
      explanation: {
        en: "MDF = Pot/(Pot+Bet). Against pot-sized bet, must defend 50% to make bluffs break-even. Defending less lets opponent profit by over-bluffing.",
        es: "MDF = Bote/(Bote+Apuesta). Contra apuesta del tamaño del bote, debe defender 50% para hacer faroles punto de equilibrio. Defender menos permite oponente ganar sobre-faroleando.",
        de: "MDF = Pot/(Pot+Wette). Gegen Pot-sized Bet muss 50% verteidigt werden um Bluffs break-even zu machen. Weniger verteidigen lässt Gegner durch Über-Bluffen profitieren.",
        nl: "MDF = Pot/(Pot+Weddenschap). Tegen pot-sized bet moet 50% verdedigd worden om bluffs break-even te maken. Minder verdedigen laat tegenstander profiteren door over-bluffen."
      }""",
        """    },
    {
      question: {
        en: "What is 'solver strategy' in modern Poker?",
        es: "¿Qué es 'estrategia de solver' en Póker moderno?",
        de: "Was ist 'Solver-Strategie' im modernen Poker?",
        nl: "Wat is 'solver strategie' in modern Poker?"
      },
      options: [
        {
          en: "Computer-calculated GTO solutions for specific game trees and situations",
          es: "Soluciones GTO calculadas por computadora para árboles de juego y situaciones específicas",
          de: "Computer-berechnete GTO-Lösungen für spezifische Spielbäume und Situationen",
          nl: "Computer-berekende GTO oplossingen voor specifieke spelbomen en situaties"
        },
        {
          en: "Problem-solving approach",
          es: "Enfoque de resolución de problemas",
          de: "Problemlösungsansatz",
          nl: "Probleem oplossingsaanpak"
        },
        {
          en: "Software for tracking hands",
          es: "Software para rastrear manos",
          de: "Software zum Tracking von Händen",
          nl: "Software voor handen tracken"
        },
        {
          en: "Online poker tools",
          es: "Herramientas de póker en línea",
          de: "Online-Poker-Tools",
          nl: "Online poker tools"
        }
      ],
      correct: 0,
      explanation: {
        en: "Poker solvers (PioSolver, GTOWizard) use algorithms to find equilibrium strategies for specific spots, revolutionizing modern high-level play.",
        es: "Solvers de póker (PioSolver, GTOWizard) usan algoritmos para encontrar estrategias de equilibrio para situaciones específicas, revolucionando juego moderno de alto nivel.",
        de: "Poker-Solver (PioSolver, GTOWizard) nutzen Algorithmen um Gleichgewichtsstrategien für spezifische Spots zu finden, revolutionieren modernes High-Level-Spiel.",
        nl: "Poker solvers (PioSolver, GTOWizard) gebruiken algoritmes om evenwichtsstrategieën te vinden voor specifieke spots, revolutioneren modern high-level spel."
      }""",
        """    },
    {
      question: {
        en: "What is 'multi-street planning' in expert play?",
        es: "¿Qué es 'planificación multi-calle' en juego experto?",
        de: "Was ist 'Multi-Street-Planung' im Expertenspiel?",
        nl: "Wat is 'multi-street planning' in expert spel?"
      },
      options: [
        {
          en: "Planning entire hand's betting sequences across flop, turn, and river streets",
          es: "Planificar secuencias de apuestas de mano completa a través de calles flop, turn y river",
          de: "Gesamte Hand-Wettsequenzen über Flop-, Turn- und River-Streets planen",
          nl: "Hele hand wedreeksen plannen over flop, turn en river streets"
        },
        {
          en: "Playing multiple tables",
          es: "Jugar múltiples mesas",
          de: "Mehrere Tische spielen",
          nl: "Meerdere tafels spelen"
        },
        {
          en: "Street poker variant",
          es: "Variante de póker callejero",
          de: "Street-Poker-Variante",
          nl: "Street poker variant"
        },
        {
          en: "Planning tournaments",
          es: "Planificar torneos",
          de: "Turniere planen",
          nl: "Toernooien plannen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Advanced players plan how their flop action leads to optimal turn/river plays, considering all runouts and opponent responses rather than playing one street at a time.",
        es: "Jugadores avanzados planean cómo su acción de flop lleva a jugadas óptimas de turn/river, considerando todos los runouts y respuestas de oponente en lugar de jugar una calle a la vez.",
        de: "Fortgeschrittene Spieler planen wie ihre Flop-Aktion zu optimalen Turn/River-Plays führt, betrachten alle Runouts und Gegner-Reaktionen statt eine Street nach der anderen zu spielen.",
        nl: "Gevorderde spelers plannen hoe hun flop actie leidt tot optimale turn/river plays, overwegen alle runouts en tegenstander reacties in plaats van één street per keer te spelen."
      }""",
        """    },
    {
      question: {
        en: "What is 'runout equity' realization in Poker?",
        es: "¿Qué es realización de 'equidad de runout' en Póker?",
        de: "Was ist 'Runout-Equity'-Realisierung im Poker?",
        nl: "Wat is 'runout equity' realisatie in Poker?"
      },
      options: [
        {
          en: "How effectively you convert your hand's raw equity into actual winnings through optimal play",
          es: "Qué tan efectivamente conviertes equidad bruta de tu mano en ganancias reales mediante juego óptimo",
          de: "Wie effektiv man Raw-Equity der Hand durch optimales Spiel in tatsächliche Gewinne umwandelt",
          nl: "Hoe effectief je ruwe equity van je hand omzet in daadwerkelijke winsten door optimaal spel"
        },
        {
          en: "Calculating pot odds",
          es: "Calcular pot odds",
          de: "Pot Odds berechnen",
          nl: "Pot odds berekenen"
        },
        {
          en: "Equity when all-in",
          es: "Equidad cuando all-in",
          de: "Equity beim All-in",
          nl: "Equity bij all-in"
        },
        {
          en: "Running the board twice",
          es: "Correr el tablero dos veces",
          de: "Board zweimal laufen",
          nl: "Board twee keer runnen"
        }
      ],
      correct: 0,
      explanation: {
        en: "In-position players realize more equity because they can control pot size, extract value, and bluff effectively. Out-of-position realizes less even with same equity.",
        es: "Jugadores en posición realizan más equidad porque pueden controlar tamaño de bote, extraer valor y farolear efectivamente. Fuera de posición realiza menos incluso con misma equidad.",
        de: "In-Position-Spieler realisieren mehr Equity weil sie Pot-Größe kontrollieren, Value extrahieren und effektiv bluffen können. Out-of-Position realisiert weniger selbst mit gleicher Equity.",
        nl: "In-positie spelers realiseren meer equity omdat ze potgrootte kunnen controleren, waarde extracten en effectief bluffen. Out-of-positie realiseert minder zelfs met zelfde equity."
      }"""]
}

base = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\board-games\Card Games'

for level, questions_list in card_games_questions.items():
    filepath = os.path.join(base, f'level{level}.js')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    for question_text in questions_list:
        content = content.replace('    }\n  ]\n};', question_text + '\n    }\n  ]\n};')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'Card Games level {level} done')

print('All Card Games levels completed!')
