// Quiz Template - Level 5: Bord spelletjes - Checkers
(function() {
  const level5 = {
    name: {
      en: "Checkers/Draughts - Advanced Tactics",
      es: "Damas - Tácticas Avanzadas",
      de: "Dame - Fortgeschrittene Taktiken",
      nl: "Dammen - Geavanceerde Tactieken"
    },
    questions: [
      {
        question: {
          en: "Who is considered the 'Father of Modern Checkers' for developing systematic opening theory?",
          es: "¿Quién es considerado el 'Padre de las Damas Modernas' por desarrollar la teoría sistemática de aperturas?",
          de: "Wer gilt als der 'Vater des modernen Dame-Spiels' für die Entwicklung systematischer Eröffnungstheorie?",
          nl: "Wie wordt beschouwd als de 'Vader van het Moderne Dammen' voor het ontwikkelen van systematische openingstheorie?"
        },
        options: [
          {
            en: "William Ryan",
            es: "William Ryan",
            de: "William Ryan",
            nl: "William Ryan"
          },
          {
            en: "Marion Tinsley",
            es: "Marion Tinsley",
            de: "Marion Tinsley",
            nl: "Marion Tinsley"
          },
          {
            en: "Asa Long",
            es: "Asa Long",
            de: "Asa Long",
            nl: "Asa Long"
          },
          {
            en: "Andrew Anderson",
            es: "Andrew Anderson",
            de: "Andrew Anderson",
            nl: "Andrew Anderson"
          }
        ],
        correct: 3,
        explanation: {
          en: "Andrew Anderson is credited as the Father of Modern Checkers for his pioneering work in systematically cataloging and analyzing opening variations, publishing groundbreaking books that transformed checkers from intuition-based play to a scientific study.",
          es: "Andrew Anderson es acreditado como el Padre de las Damas Modernas por su trabajo pionero en catalogar y analizar sistemáticamente variaciones de apertura, publicando libros innovadores que transformaron las damas de un juego basado en intuición a un estudio científico.",
          de: "Andrew Anderson wird als Vater des modernen Dame-Spiels anerkannt für seine Pionierarbeit bei der systematischen Katalogisierung und Analyse von Eröffnungsvarianten, wobei er bahnbrechende Bücher veröffentlichte, die Dame von intuitionsbasiertem Spiel zu einem wissenschaftlichen Studium transformierten.",
          nl: "Andrew Anderson wordt erkend als de Vader van het Moderne Dammen voor zijn baanbrekend werk in het systematisch catalogiseren en analyseren van openingsvariaties, waarbij hij baanbrekende boeken publiceerde die dammen transformeerden van intuïtief gebaseerd spel naar een wetenschappelijke studie."
        }
      },
      {
        question: {
          en: "What is the 'Trident' tactical pattern in checkers?",
          es: "¿Qué es el patrón táctico del 'Tridente' en damas?",
          de: "Was ist das 'Dreizack'-Taktik-Muster beim Dame?",
          nl: "Wat is het 'Drietand' tactisch patroon in dammen?"
        },
        options: [
          {
            en: "Three pieces creating three simultaneous threats",
            es: "Tres piezas creando tres amenazas simultáneas",
            de: "Drei Steine, die drei gleichzeitige Drohungen schaffen",
            nl: "Drie stukken die drie gelijktijdige dreigingen creëren"
          },
          {
            en: "A three-move combination",
            es: "Una combinación de tres movimientos",
            de: "Eine Drei-Züge-Kombination",
            nl: "Een drie-zetten combinatie"
          },
          {
            en: "Controlling three diagonals",
            es: "Controlar tres diagonales",
            de: "Drei Diagonalen kontrollieren",
            nl: "Drie diagonalen controleren"
          },
          {
            en: "Having three kings on the board",
            es: "Tener tres damas en el tablero",
            de: "Drei Damen auf dem Brett haben",
            nl: "Drie dammen op het bord hebben"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Trident is an advanced tactical pattern where three pieces are coordinated to create three different threats simultaneously, forcing the opponent into zugzwang where any response leads to material loss or positional collapse.",
          es: "El Tridente es un patrón táctico avanzado donde tres piezas se coordinan para crear tres amenazas diferentes simultáneamente, forzando al oponente a zugzwang donde cualquier respuesta conduce a pérdida material o colapso posicional.",
          de: "Der Dreizack ist ein fortgeschrittenes Taktik-Muster, bei dem drei Steine koordiniert werden, um drei verschiedene Drohungen gleichzeitig zu schaffen, wodurch der Gegner in Zugzwang gebracht wird, wo jede Antwort zu materiellem Verlust oder positionellem Zusammenbruch führt.",
          nl: "De Drietand is een geavanceerd tactisch patroon waarbij drie stukken gecoördineerd worden om drie verschillende dreigingen tegelijkertijd te creëren, waarbij de tegenstander gedwongen wordt in zugzwang waarbij elke reactie leidt tot materiaal verlies of positionele ineenstorting."
        }
      },
      {
        question: {
          en: "In the 'Souter' opening system, what is the primary positional goal?",
          es: "En el sistema de apertura 'Souter', ¿cuál es el objetivo posicional principal?",
          de: "Was ist das primäre positionelle Ziel im 'Souter'-Eröffnungssystem?",
          nl: "Wat is het primaire positionele doel in het 'Souter' openingssysteem?"
        },
        options: [
          {
            en: "Establish a strong central barricade while maintaining wing flexibility",
            es: "Establecer una fuerte barricada central mientras se mantiene flexibilidad en las alas",
            de: "Eine starke zentrale Barrikade aufbauen und gleichzeitig Flügelflexibilität bewahren",
            nl: "Een sterke centrale barricade vestigen terwijl vleugel flexibiliteit behouden blijft"
          },
          {
            en: "Quick piece exchanges",
            es: "Intercambios rápidos de piezas",
            de: "Schnelle Steintausche",
            nl: "Snelle stukruilen"
          },
          {
            en: "Early king promotion",
            es: "Promoción temprana de damas",
            de: "Frühe Damenbeförderung",
            nl: "Vroege dam promotie"
          },
          {
            en: "Sacrificial attacks",
            es: "Ataques de sacrificio",
            de: "Opferangriffe",
            nl: "Opofferings aanvallen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Souter system emphasizes creating a solid central structure that acts as a barricade against opponent penetration, while keeping wing pieces flexible enough to exploit weaknesses on either flank, balancing solidity with tactical opportunity.",
          es: "El sistema Souter enfatiza la creación de una estructura central sólida que actúa como barricada contra la penetración del oponente, mientras mantiene piezas de ala lo suficientemente flexibles para explotar debilidades en cualquier flanco, equilibrando solidez con oportunidad táctica.",
          de: "Das Souter-System betont die Schaffung einer soliden zentralen Struktur, die als Barrikade gegen feindliche Penetration wirkt, während die Flügelsteine flexibel genug bleiben, um Schwächen auf beiden Flanken auszunutzen, wobei Solidität mit taktischer Gelegenheit ausbalanciert wird.",
          nl: "Het Souter systeem benadrukt het creëren van een solide centrale structuur die fungeert als barricade tegen tegenstander penetratie, terwijl vleugel stukken flexibel genoeg blijven om zwaktes op beide flanken uit te buiten, waarbij soliditeit gebalanceerd wordt met tactische kansen."
        }
      },
      {
        question: {
          en: "What defines a 'bridge position' in checkers endgames?",
          es: "¿Qué define una 'posición de puente' en finales de damas?",
          de: "Was definiert eine 'Brückenposition' in Dame-Endspielen?",
          nl: "Wat definieert een 'brug positie' in dammen eindspelen?"
        },
        options: [
          {
            en: "Two pieces supporting each other across a diagonal gap",
            es: "Dos piezas apoyándose mutuamente a través de una brecha diagonal",
            de: "Zwei Steine, die sich über eine diagonale Lücke gegenseitig unterstützen",
            nl: "Twee stukken die elkaar ondersteunen over een diagonale opening"
          },
          {
            en: "Connecting two king rows",
            es: "Conectar dos filas de damas",
            de: "Zwei Damenreihen verbinden",
            nl: "Twee damrijen verbinden"
          },
          {
            en: "A formation blocking the center",
            es: "Una formación bloqueando el centro",
            de: "Eine Formation, die das Zentrum blockiert",
            nl: "Een formatie die het centrum blokkeert"
          },
          {
            en: "Crossing pieces diagonally",
            es: "Cruzar piezas diagonalmente",
            de: "Steine diagonal kreuzen",
            nl: "Stukken diagonaal kruisen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A bridge position occurs when two pieces are positioned to mutually defend each other across a diagonal gap, creating a stable structure that's difficult for the opponent to break through, often serving as a critical defensive or strategic anchor.",
          es: "Una posición de puente ocurre cuando dos piezas están posicionadas para defenderse mutuamente a través de una brecha diagonal, creando una estructura estable que es difícil de atravesar para el oponente, a menudo sirviendo como un ancla defensiva o estratégica crítica.",
          de: "Eine Brückenposition entsteht, wenn zwei Steine so positioniert sind, dass sie sich gegenseitig über eine diagonale Lücke verteidigen, wodurch eine stabile Struktur entsteht, die für den Gegner schwer zu durchbrechen ist und oft als kritischer defensiver oder strategischer Anker dient.",
          nl: "Een brug positie ontstaat wanneer twee stukken zo gepositioneerd zijn dat ze elkaar wederzijds verdedigen over een diagonale opening, waarbij een stabiele structuur wordt gecreëerd die moeilijk te doorbreken is voor de tegenstander, vaak dienend als kritiek defensief of strategisch ankerpunt."
        }
      },
      {
        question: {
          en: "What is the 'Two-for-One' strategic principle in advanced play?",
          es: "¿Qué es el principio estratégico 'Dos por Uno' en juego avanzado?",
          de: "Was ist das 'Zwei-für-Eins'-Strategieprinzip im fortgeschrittenen Spiel?",
          nl: "Wat is het 'Twee-voor-Een' strategisch principe in gevorderd spel?"
        },
        options: [
          {
            en: "Trading two men for one enemy king to gain material advantage",
            es: "Intercambiar dos piezas por una dama enemiga para ganar ventaja material",
            de: "Zwei Steine gegen eine feindliche Dame tauschen, um materiellen Vorteil zu gewinnen",
            nl: "Twee stukken ruilen voor één vijandelijke dam om materiaal voordeel te verkrijgen"
          },
          {
            en: "Making two captures with one move",
            es: "Hacer dos capturas con un movimiento",
            de: "Zwei Schläge mit einem Zug machen",
            nl: "Twee slagen maken met één zet"
          },
          {
            en: "Having two threats for each move",
            es: "Tener dos amenazas por cada movimiento",
            de: "Zwei Drohungen pro Zug haben",
            nl: "Twee dreigingen hebben voor elke zet"
          },
          {
            en: "Doubling opponent's pieces",
            es: "Doblar las piezas del oponente",
            de: "Gegnersteine verdoppeln",
            nl: "Tegenstander stukken verdubbelen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Two-for-One principle involves sacrificing two men to capture one enemy king, which is often strategically favorable because kings have greater value due to their mobility and positional flexibility, making this exchange materially and positionally advantageous.",
          es: "El principio Dos por Uno implica sacrificar dos piezas para capturar una dama enemiga, lo cual a menudo es estratégicamente favorable porque las damas tienen mayor valor debido a su movilidad y flexibilidad posicional, haciendo este intercambio ventajoso material y posicionalmente.",
          de: "Das Zwei-für-Eins-Prinzip beinhaltet das Opfern von zwei Steinen, um eine feindliche Dame zu schlagen, was oft strategisch günstig ist, weil Damen aufgrund ihrer Mobilität und positionellen Flexibilität größeren Wert haben, wodurch dieser Tausch materiell und positionell vorteilhaft wird.",
          nl: "Het Twee-voor-Een principe houdt in dat twee stukken worden opgeofferd om één vijandelijke dam te slaan, wat vaak strategisch gunstig is omdat dammen grotere waarde hebben door hun mobiliteit en positionele flexibiliteit, waardoor deze ruil materieel en positioneel voordelig wordt."
        }
      },
      {
        question: {
          en: "Who won the most World Checkers Championships in history?",
          es: "¿Quién ganó la mayoría de los Campeonatos Mundiales de Damas en la historia?",
          de: "Wer gewann die meisten Dame-Weltmeisterschaften in der Geschichte?",
          nl: "Wie won de meeste Wereld Dammen Kampioenschappen in de geschiedenis?"
        },
        options: [
          {
            en: "Marion Tinsley with 8 world titles",
            es: "Marion Tinsley con 8 títulos mundiales",
            de: "Marion Tinsley mit 8 Weltmeistertiteln",
            nl: "Marion Tinsley met 8 wereldtitels"
          },
          {
            en: "Asa Long with 5 titles",
            es: "Asa Long con 5 títulos",
            de: "Asa Long mit 5 Titeln",
            nl: "Asa Long met 5 titels"
          },
          {
            en: "Robert Stewart with 6 titles",
            es: "Robert Stewart con 6 títulos",
            de: "Robert Stewart mit 6 Titeln",
            nl: "Robert Stewart met 6 titels"
          },
          {
            en: "Walter Hellman with 9 titles",
            es: "Walter Hellman con 9 títulos",
            de: "Walter Hellman mit 9 Titeln",
            nl: "Walter Hellman met 9 titels"
          }
        ],
        correct: 0,
        explanation: {
          en: "Marion Tinsley is the most dominant player in checkers history, winning 8 World Championships and losing only 7 games in his 45-year career. His mastery of both opening theory and endgame technique remains unmatched in the history of competitive checkers.",
          es: "Marion Tinsley es el jugador más dominante en la historia de las damas, ganando 8 Campeonatos Mundiales y perdiendo solo 7 juegos en su carrera de 45 años. Su dominio de la teoría de aperturas y técnica de finales permanece inigualado en la historia de las damas competitivas.",
          de: "Marion Tinsley ist der dominanteste Spieler in der Dame-Geschichte, der 8 Weltmeisterschaften gewann und nur 7 Spiele in seiner 45-jährigen Karriere verlor. Seine Beherrschung sowohl der Eröffnungstheorie als auch der Endspieltechnik bleibt in der Geschichte des Wettkampf-Dame unübertroffen.",
          nl: "Marion Tinsley is de meest dominante speler in de dammen geschiedenis, met 8 Wereldkampioenschappen en slechts 7 verloren games in zijn 45-jarige carrière. Zijn meesterschap van zowel openingstheorie als eindspeltechniek blijft ongeëvenaard in de geschiedenis van competitief dammen."
        }
      },
      {
        question: {
          en: "What is a 'dyke' formation in checkers strategy?",
          es: "¿Qué es una formación de 'dique' en la estrategia de damas?",
          de: "Was ist eine 'Deich'-Formation in der Dame-Strategie?",
          nl: "Wat is een 'dijk' formatie in dammen strategie?"
        },
        options: [
          {
            en: "A defensive wall preventing opponent's advance along a diagonal",
            es: "Un muro defensivo que previene el avance del oponente a lo largo de una diagonal",
            de: "Eine Verteidigungsmauer, die den Vormarsch des Gegners entlang einer Diagonalen verhindert",
            nl: "Een verdedigingsmuur die de vooruitgang van de tegenstander langs een diagonaal voorkomt"
          },
          {
            en: "Two pieces side by side",
            es: "Dos piezas lado a lado",
            de: "Zwei Steine nebeneinander",
            nl: "Twee stukken naast elkaar"
          },
          {
            en: "A blockade near the king row",
            es: "Un bloqueo cerca de la fila de damas",
            de: "Eine Blockade nahe der Damenreihe",
            nl: "Een blokkade nabij de damrij"
          },
          {
            en: "Stacking pieces vertically",
            es: "Apilar piezas verticalmente",
            de: "Steine vertikal stapeln",
            nl: "Stukken verticaal stapelen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A dyke is a defensive formation where pieces are arranged to block key diagonals, preventing the opponent from advancing or breaking through, similar to how a dyke holds back water. This structure requires careful maintenance to avoid weaknesses.",
          es: "Un dique es una formación defensiva donde las piezas se organizan para bloquear diagonales clave, previniendo que el oponente avance o atraviese, similar a cómo un dique retiene agua. Esta estructura requiere mantenimiento cuidadoso para evitar debilidades.",
          de: "Ein Deich ist eine defensive Formation, bei der Steine angeordnet werden, um Schlüsseldiagonalen zu blockieren und den Gegner am Vorrücken oder Durchbrechen zu hindern, ähnlich wie ein Deich Wasser zurückhält. Diese Struktur erfordert sorgfältige Wartung, um Schwächen zu vermeiden.",
          nl: "Een dijk is een defensieve formatie waarbij stukken worden gerangschikt om sleutel diagonalen te blokkeren, waarbij voorkomen wordt dat de tegenstander oprukt of doorbreekt, vergelijkbaar met hoe een dijk water tegenhoudt. Deze structuur vereist zorgvuldig onderhoud om zwaktes te vermijden."
        }
      },
      {
        question: {
          en: "What is the 'opposition' concept in king endgames?",
          es: "¿Qué es el concepto de 'oposición' en finales de damas?",
          de: "Was ist das 'Oppositions'-Konzept in Damen-Endspielen?",
          nl: "Wat is het 'oppositie' concept in dam eindspelen?"
        },
        options: [
          {
            en: "Kings facing each other with odd number of squares between them",
            es: "Damas enfrentándose con un número impar de casillas entre ellas",
            de: "Damen stehen sich mit ungerader Anzahl von Feldern zwischen ihnen gegenüber",
            nl: "Dammen die elkaar confronteren met oneven aantal velden ertussen"
          },
          {
            en: "Playing opposite sides of the board",
            es: "Jugar lados opuestos del tablero",
            de: "Auf gegenüberliegenden Seiten des Bretts spielen",
            nl: "Tegenovergestelde kanten van het bord spelen"
          },
          {
            en: "Moving in opposite directions",
            es: "Moverse en direcciones opuestas",
            de: "In entgegengesetzte Richtungen bewegen",
            nl: "In tegengestelde richtingen bewegen"
          },
          {
            en: "Blocking opponent's king",
            es: "Bloquear la dama del oponente",
            de: "Die gegnerische Dame blockieren",
            nl: "Tegenstander dam blokkeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Opposition is a critical endgame concept where kings face each other with an odd number of squares separating them along the same diagonal. Having opposition means the opponent must move first, often resulting in a disadvantageous position, making it a key drawing or winning technique.",
          es: "La oposición es un concepto de final crítico donde las damas se enfrentan con un número impar de casillas separándolas a lo largo de la misma diagonal. Tener oposición significa que el oponente debe mover primero, a menudo resultando en una posición desventajosa, haciéndola una técnica clave de tablas o victoria.",
          de: "Opposition ist ein kritisches Endspielkonzept, bei dem sich Damen mit einer ungeraden Anzahl von Feldern entlang derselben Diagonalen gegenüberstehen. Opposition zu haben bedeutet, dass der Gegner zuerst ziehen muss, was oft zu einer nachteiligen Position führt, was es zu einer Schlüsseltechnik für Remis oder Gewinn macht.",
          nl: "Oppositie is een kritiek eindspel concept waarbij dammen elkaar confronteren met een oneven aantal velden die hen scheiden langs dezelfde diagonaal. Oppositie hebben betekent dat de tegenstander eerst moet zetten, wat vaak resulteert in een nadelige positie, waardoor het een sleutel remise of winst techniek wordt."
        }
      },
      {
        question: {
          en: "What is the 'Dog Hole' weakness in checkers positions?",
          es: "¿Qué es la debilidad del 'Agujero de Perro' en posiciones de damas?",
          de: "Was ist die 'Hundeloch'-Schwäche in Dame-Positionen?",
          nl: "Wat is de 'Hondengat' zwakte in dammen posities?"
        },
        options: [
          {
            en: "A vulnerable square created by poor piece placement",
            es: "Una casilla vulnerable creada por mala colocación de piezas",
            de: "Ein verwundbares Feld, das durch schlechte Steinplatzierung entsteht",
            nl: "Een kwetsbaar veld gecreëerd door slechte stukplaatsing"
          },
          {
            en: "The corner square",
            es: "La casilla de la esquina",
            de: "Das Eckfeld",
            nl: "Het hoekveld"
          },
          {
            en: "An empty center square",
            es: "Una casilla central vacía",
            de: "Ein leeres Zentrumsfeld",
            nl: "Een leeg centrum veld"
          },
          {
            en: "A trapped piece position",
            es: "Una posición de pieza atrapada",
            de: "Eine gefangene Steinposition",
            nl: "Een gevangen stuk positie"
          }
        ],
        correct: 0,
        explanation: {
          en: "A Dog Hole is a critical square weakness that arises when pieces are poorly coordinated, leaving a key diagonal square vulnerable to enemy occupation. Once the opponent controls this square, it often leads to devastating tactical consequences or strategic collapse.",
          es: "Un Agujero de Perro es una debilidad crítica de casilla que surge cuando las piezas están mal coordinadas, dejando una casilla diagonal clave vulnerable a la ocupación enemiga. Una vez que el oponente controla esta casilla, a menudo conduce a consecuencias tácticas devastadoras o colapso estratégico.",
          de: "Ein Hundeloch ist eine kritische Feldschwäche, die entsteht, wenn Steine schlecht koordiniert sind und ein wichtiges Diagonalfeld verwundbar für feindliche Besetzung wird. Sobald der Gegner dieses Feld kontrolliert, führt es oft zu verheerenden taktischen Konsequenzen oder strategischem Zusammenbruch.",
          nl: "Een Hondengat is een kritieke veld zwakte die ontstaat wanneer stukken slecht gecoördineerd zijn, waarbij een sleutel diagonaal veld kwetsbaar wordt voor vijandelijke bezetting. Zodra de tegenstander dit veld controleert, leidt het vaak tot verwoestende tactische gevolgen of strategische ineenstorting."
        }
      },
      {
        question: {
          en: "What is a 'tempo move' in advanced checkers?",
          es: "¿Qué es un 'movimiento de tempo' en damas avanzadas?",
          de: "Was ist ein 'Tempo-Zug' im fortgeschrittenen Dame?",
          nl: "Wat is een 'tempo zet' in gevorderd dammen?"
        },
        options: [
          {
            en: "A move gaining time advantage by forcing opponent response",
            es: "Un movimiento ganando ventaja de tiempo forzando respuesta del oponente",
            de: "Ein Zug, der Zeitvorteil gewinnt, indem er eine Gegnerantwort erzwingt",
            nl: "Een zet die tijdvoordeel wint door tegenstander reactie af te dwingen"
          },
          {
            en: "Making a quick move",
            es: "Hacer un movimiento rápido",
            de: "Einen schnellen Zug machen",
            nl: "Een snelle zet maken"
          },
          {
            en: "Moving at the right pace",
            es: "Moverse al ritmo correcto",
            de: "Im richtigen Tempo bewegen",
            nl: "Op het juiste tempo bewegen"
          },
          {
            en: "Timing a capture correctly",
            es: "Temporizar una captura correctamente",
            de: "Einen Schlag richtig timen",
            nl: "Een slag correct timen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A tempo move is one that gains a crucial time advantage by forcing the opponent to respond in a specific way, allowing you to achieve your strategic goals while the opponent is constrained to defensive or reactive play, often deciding the outcome in finely balanced positions.",
          es: "Un movimiento de tempo es uno que gana una ventaja de tiempo crucial forzando al oponente a responder de una manera específica, permitiéndote lograr tus objetivos estratégicos mientras el oponente está constreñido a juego defensivo o reactivo, a menudo decidiendo el resultado en posiciones finamente equilibradas.",
          de: "Ein Tempo-Zug ist einer, der einen entscheidenden Zeitvorteil gewinnt, indem er den Gegner zwingt, auf eine bestimmte Weise zu reagieren, wodurch Sie Ihre strategischen Ziele erreichen können, während der Gegner auf defensives oder reaktives Spiel beschränkt ist, was oft das Ergebnis in fein ausbalancierten Positionen entscheidet.",
          nl: "Een tempo zet is een zet die een cruciaal tijdvoordeel wint door de tegenstander te dwingen op een specifieke manier te reageren, waardoor je je strategische doelen kunt bereiken terwijl de tegenstander beperkt is tot defensief of reactief spel, wat vaak de uitkomst bepaalt in fijn gebalanceerde posities."
        }
      },
      {
        question: {
          en: "What is the '3-3-2 balance' principle in piece distribution?",
          es: "¿Qué es el principio de 'equilibrio 3-3-2' en la distribución de piezas?",
          de: "Was ist das '3-3-2-Gleichgewichts'-Prinzip bei der Steinverteilung?",
          nl: "Wat is het '3-3-2 balans' principe in stuk verdeling?"
        },
        options: [
          {
            en: "Ideal distribution of 3 pieces left wing, 3 right wing, 2 center",
            es: "Distribución ideal de 3 piezas ala izquierda, 3 ala derecha, 2 centro",
            de: "Ideale Verteilung von 3 Steinen linker Flügel, 3 rechter Flügel, 2 Zentrum",
            nl: "Ideale verdeling van 3 stukken linkervleugel, 3 rechtervleugel, 2 centrum"
          },
          {
            en: "Number of moves to make per phase",
            es: "Número de movimientos por fase",
            de: "Anzahl der Züge pro Phase",
            nl: "Aantal zetten per fase"
          },
          {
            en: "Piece value calculation",
            es: "Cálculo de valor de piezas",
            de: "Steinwert-Berechnung",
            nl: "Stuk waarde berekening"
          },
          {
            en: "Formation depth layers",
            es: "Capas de profundidad de formación",
            de: "Formationstiefenschichten",
            nl: "Formatie diepte lagen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The 3-3-2 balance is a strategic guideline suggesting optimal piece distribution should maintain roughly 3 pieces on each wing and 2 flexible central pieces, providing both flank strength and central control while avoiding overconcentration that creates exploitable weaknesses.",
          es: "El equilibrio 3-3-2 es una guía estratégica sugiriendo que la distribución óptima de piezas debe mantener aproximadamente 3 piezas en cada ala y 2 piezas centrales flexibles, proporcionando tanto fuerza de flanco como control central mientras se evita sobreconcentración que crea debilidades explotables.",
          de: "Das 3-3-2-Gleichgewicht ist eine strategische Richtlinie, die vorschlägt, dass die optimale Steinverteilung etwa 3 Steine auf jedem Flügel und 2 flexible zentrale Steine beibehalten sollte, um sowohl Flügelstärke als auch Zentrumskontrolle zu bieten, während Überkonzentration vermieden wird, die ausnutzbare Schwächen schafft.",
          nl: "De 3-3-2 balans is een strategische richtlijn die suggereert dat optimale stuk verdeling ongeveer 3 stukken op elke vleugel en 2 flexibele centrale stukken moet behouden, waarbij zowel flank sterkte als centrum controle geboden wordt terwijl overconcentratie vermeden wordt die uitbuitbare zwaktes creëert."
        }
      },
      {
        question: {
          en: "Who defeated the computer program Chinook in their famous 1994 match?",
          es: "¿Quién derrotó al programa de computadora Chinook en su famoso match de 1994?",
          de: "Wer besiegte das Computerprogramm Chinook in ihrem berühmten Match von 1994?",
          nl: "Wie versloeg het computerprogramma Chinook in hun beroemde wedstrijd van 1994?"
        },
        options: [
          {
            en: "Marion Tinsley",
            es: "Marion Tinsley",
            de: "Marion Tinsley",
            nl: "Marion Tinsley"
          },
          {
            en: "Asa Long",
            es: "Asa Long",
            de: "Asa Long",
            nl: "Asa Long"
          },
          {
            en: "Don Lafferty",
            es: "Don Lafferty",
            de: "Don Lafferty",
            nl: "Don Lafferty"
          },
          {
            en: "Ron King",
            es: "Ron King",
            de: "Ron King",
            nl: "Ron King"
          }
        ],
        correct: 0,
        explanation: {
          en: "Marion Tinsley, widely considered the greatest checkers player ever, defeated Chinook 4-2 with 33 draws in their 1992 match. Although he was forced to resign their 1994 rematch due to illness, he never lost a match to the computer, demonstrating human intuition and creativity could still surpass computational power.",
          es: "Marion Tinsley, ampliamente considerado el mejor jugador de damas de la historia, derrotó a Chinook 4-2 con 33 empates en su match de 1992. Aunque fue forzado a renunciar a su revancha de 1994 debido a enfermedad, nunca perdió un match contra la computadora, demostrando que la intuición y creatividad humana aún podían superar el poder computacional.",
          de: "Marion Tinsley, weithin als der größte Dame-Spieler aller Zeiten angesehen, besiegte Chinook 4-2 mit 33 Remis in ihrem Match von 1992. Obwohl er gezwungen war, ihr Rematch von 1994 aufgrund von Krankheit aufzugeben, verlor er nie ein Match gegen den Computer, was demonstrierte, dass menschliche Intuition und Kreativität immer noch Rechenleistung übertreffen konnten.",
          nl: "Marion Tinsley, algemeen beschouwd als de grootste damspeler ooit, versloeg Chinook 4-2 met 33 remises in hun wedstrijd van 1992. Hoewel hij gedwongen werd hun rematch van 1994 op te geven wegens ziekte, verloor hij nooit een wedstrijd tegen de computer, wat aantoonde dat menselijke intuïtie en creativiteit nog steeds rekenkracht konden overtreffen."
        }
      },
      {
        question: {
          en: "What is a 'First Position' in checkers endgame theory?",
          es: "¿Qué es una 'Primera Posición' en la teoría del final de damas?",
          de: "Was ist eine 'Erste Position' in der Dame-Endspieltheorie?",
          nl: "Wat is een 'Eerste Positie' in de dammen eindspeltheorie?"
        },
        options: [
          {
            en: "A winning position with correct play despite material equality",
            es: "Una posición ganadora con juego correcto a pesar de igualdad material",
            de: "Eine gewinnende Position bei korrektem Spiel trotz materieller Gleichheit",
            nl: "Een winnende positie met correct spel ondanks materiaal gelijkheid"
          },
          {
            en: "The opening position of the game",
            es: "La posición de apertura del juego",
            de: "Die Eröffnungsposition des Spiels",
            nl: "De openingspositie van het spel"
          },
          {
            en: "Having one king versus men",
            es: "Tener una dama contra piezas",
            de: "Eine Dame gegen Steine haben",
            nl: "Eén dam tegen stukken hebben"
          },
          {
            en: "Being first to move",
            es: "Ser primero en mover",
            de: "Als Erster ziehen",
            nl: "Als eerste zetten"
          }
        ],
        correct: 0,
        explanation: {
          en: "First Position is a fundamental endgame concept referring to a theoretically winning position despite equal material, achieved through superior piece placement, better king activity, or controlling critical squares. Mastering these positions is essential for converting advantages into wins.",
          es: "La Primera Posición es un concepto de final fundamental que se refiere a una posición teóricamente ganadora a pesar del material igual, lograda a través de una colocación superior de piezas, mejor actividad de damas o control de casillas críticas. Dominar estas posiciones es esencial para convertir ventajas en victorias.",
          de: "Erste Position ist ein fundamentales Endspielkonzept, das sich auf eine theoretisch gewinnende Position trotz gleichen Materials bezieht, erreicht durch überlegene Steinplatzierung, bessere Damenaktivität oder Kontrolle kritischer Felder. Die Beherrschung dieser Positionen ist wesentlich für die Umwandlung von Vorteilen in Siege.",
          nl: "Eerste Positie is een fundamenteel eindspel concept dat verwijst naar een theoretisch winnende positie ondanks gelijk materiaal, bereikt door superieure stukplaatsing, betere dam activiteit of controle van kritieke velden. Het beheersen van deze posities is essentieel voor het omzetten van voordelen in winsten."
        }
      },
      {
        question: {
          en: "What is the 'shot' in checkers tactics?",
          es: "¿Qué es el 'disparo' en las tácticas de damas?",
          de: "Was ist der 'Schuss' in der Dame-Taktik?",
          nl: "Wat is de 'schot' in dammen tactieken?"
        },
        options: [
          {
            en: "A surprising tactical blow winning material or forcing advantage",
            es: "Un golpe táctico sorprendente ganando material o forzando ventaja",
            de: "Ein überraschender taktischer Schlag, der Material gewinnt oder Vorteil erzwingt",
            nl: "Een verrassende tactische slag die materiaal wint of voordeel afdwingt"
          },
          {
            en: "A long-range king move",
            es: "Un movimiento de dama de largo alcance",
            de: "Ein Langstrecken-Damenzug",
            nl: "Een lange afstand dam zet"
          },
          {
            en: "A rapid series of moves",
            es: "Una serie rápida de movimientos",
            de: "Eine schnelle Reihe von Zügen",
            nl: "Een snelle reeks zetten"
          },
          {
            en: "An aggressive opening move",
            es: "Un movimiento de apertura agresivo",
            de: "Ein aggressiver Eröffnungszug",
            nl: "Een agressieve opening zet"
          }
        ],
        correct: 0,
        explanation: {
          en: "A shot is a sudden, often unexpected tactical blow that wins material, forces a decisive advantage, or turns a seemingly equal position into a winning one. Recognizing shot opportunities requires sharp calculation and pattern recognition, hallmarks of expert play.",
          es: "Un disparo es un golpe táctico repentino, a menudo inesperado, que gana material, fuerza una ventaja decisiva o convierte una posición aparentemente igual en una ganadora. Reconocer oportunidades de disparo requiere cálculo agudo y reconocimiento de patrones, sellos distintivos del juego experto.",
          de: "Ein Schuss ist ein plötzlicher, oft unerwarteter taktischer Schlag, der Material gewinnt, einen entscheidenden Vorteil erzwingt oder eine scheinbar ausgeglichene Position in eine gewinnende verwandelt. Das Erkennen von Schussmöglichkeiten erfordert scharfe Berechnung und Mustererkennung, Kennzeichen des Expertenspiels.",
          nl: "Een schot is een plotselinge, vaak onverwachte tactische slag die materiaal wint, een beslissend voordeel afdwingt of een ogenschijnlijk gelijke positie in een winnende verandert. Het herkennen van schot kansen vereist scherpe berekening en patroonherkenning, kenmerken van expert spel."
        }
      },
      {
        question: {
          en: "What is 'developing the center' in opening strategy?",
          es: "¿Qué es 'desarrollar el centro' en la estrategia de apertura?",
          de: "Was bedeutet 'das Zentrum entwickeln' in der Eröffnungsstrategie?",
          nl: "Wat is 'het centrum ontwikkelen' in opening strategie?"
        },
        options: [
          {
            en: "Controlling central squares with pieces to maximize influence",
            es: "Controlar casillas centrales con piezas para maximizar influencia",
            de: "Zentrale Felder mit Steinen kontrollieren, um Einfluss zu maximieren",
            nl: "Centrale velden controleren met stukken om invloed te maximaliseren"
          },
          {
            en: "Moving only center pieces",
            es: "Mover solo piezas centrales",
            de: "Nur Zentrumssteine bewegen",
            nl: "Alleen centrum stukken verplaatsen"
          },
          {
            en: "Creating an empty center",
            es: "Crear un centro vacío",
            de: "Ein leeres Zentrum schaffen",
            nl: "Een leeg centrum creëren"
          },
          {
            en: "Avoiding the edges",
            es: "Evitar los bordes",
            de: "Die Ränder vermeiden",
            nl: "De randen vermijden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Developing the center means establishing piece control over central squares early in the game, which provides greater mobility, flexibility for both attack and defense, and the ability to shift focus between flanks as the position demands, a fundamental opening principle.",
          es: "Desarrollar el centro significa establecer control de piezas sobre casillas centrales temprano en el juego, lo que proporciona mayor movilidad, flexibilidad tanto para ataque como defensa, y la capacidad de cambiar el foco entre flancos según la posición demande, un principio de apertura fundamental.",
          de: "Das Zentrum entwickeln bedeutet, früh im Spiel Steinkontrolle über zentrale Felder zu etablieren, was größere Mobilität, Flexibilität für Angriff und Verteidigung und die Fähigkeit bietet, den Fokus zwischen Flügeln zu verlagern, wie es die Position erfordert, ein grundlegendes Eröffnungsprinzip.",
          nl: "Het centrum ontwikkelen betekent vroeg in het spel stuk controle over centrale velden vestigen, wat grotere mobiliteit biedt, flexibiliteit voor zowel aanval als verdediging, en het vermogen om de focus tussen flanken te verschuiven zoals de positie vereist, een fundamenteel opening principe."
        }
      },
      {
        question: {
          en: "What is a 'backwards move' in advanced positional play?",
          es: "¿Qué es un 'movimiento hacia atrás' en juego posicional avanzado?",
          de: "Was ist ein 'Rückwärtszug' im fortgeschrittenen Positionsspiel?",
          nl: "Wat is een 'achterwaartse zet' in gevorderd positioneel spel?"
        },
        options: [
          {
            en: "A retreat that improves position despite losing ground",
            es: "Una retirada que mejora la posición a pesar de perder terreno",
            de: "Ein Rückzug, der die Position verbessert, obwohl Boden verloren wird",
            nl: "Een terugtocht die de positie verbetert ondanks terrein verlies"
          },
          {
            en: "An illegal move",
            es: "Un movimiento ilegal",
            de: "Ein illegaler Zug",
            nl: "Een illegale zet"
          },
          {
            en: "Moving a king backward",
            es: "Mover una dama hacia atrás",
            de: "Eine Dame rückwärts bewegen",
            nl: "Een dam achteruit verplaatsen"
          },
          {
            en: "Undoing a previous move",
            es: "Deshacer un movimiento previo",
            de: "Einen vorherigen Zug rückgängig machen",
            nl: "Een vorige zet ongedaan maken"
          }
        ],
        correct: 0,
        explanation: {
          en: "A backwards move is a strategic retreat where a piece moves away from advancement toward the king row, but does so to improve overall position, piece coordination, or to avoid tactical traps. This counter-intuitive concept demonstrates that progress isn't always linear in checkers.",
          es: "Un movimiento hacia atrás es una retirada estratégica donde una pieza se aleja del avance hacia la fila de damas, pero lo hace para mejorar la posición general, coordinación de piezas o evitar trampas tácticas. Este concepto contraintuitivo demuestra que el progreso no siempre es lineal en damas.",
          de: "Ein Rückwärtszug ist ein strategischer Rückzug, bei dem ein Stein sich vom Vormarsch zur Damenreihe entfernt, dies aber tut, um die Gesamtposition, Steinkoordination zu verbessern oder taktische Fallen zu vermeiden. Dieses kontraintuitive Konzept zeigt, dass Fortschritt beim Dame nicht immer linear ist.",
          nl: "Een achterwaartse zet is een strategische terugtocht waarbij een stuk zich verwijdert van vooruitgang naar de damrij, maar dit doet om de algehele positie, stuk coördinatie te verbeteren of tactische vallen te vermijden. Dit contra-intuïtieve concept toont aan dat vooruitgang niet altijd lineair is in dammen."
        }
      },
      {
        question: {
          en: "What is the 'exchange value' principle in material trades?",
          es: "¿Qué es el principio del 'valor de intercambio' en intercambios de material?",
          de: "Was ist das 'Tauschwert'-Prinzip bei materiellen Tauschen?",
          nl: "Wat is het 'ruil waarde' principe in materiaal ruilen?"
        },
        options: [
          {
            en: "Evaluating whether a trade improves position beyond pure piece count",
            es: "Evaluar si un intercambio mejora la posición más allá del simple conteo de piezas",
            de: "Bewerten, ob ein Tausch die Position über die reine Steinzahl hinaus verbessert",
            nl: "Evalueren of een ruil de positie verbetert buiten puur stuk aantal"
          },
          {
            en: "Trading equal numbers of pieces",
            es: "Intercambiar números iguales de piezas",
            de: "Gleiche Anzahl von Steinen tauschen",
            nl: "Gelijk aantal stukken ruilen"
          },
          {
            en: "Never trading pieces",
            es: "Nunca intercambiar piezas",
            de: "Nie Steine tauschen",
            nl: "Nooit stukken ruilen"
          },
          {
            en: "Only trading when winning",
            es: "Solo intercambiar cuando se gana",
            de: "Nur tauschen, wenn man gewinnt",
            nl: "Alleen ruilen wanneer je wint"
          }
        ],
        correct: 0,
        explanation: {
          en: "Exchange value considers not just the numerical count of pieces traded, but the positional consequences: does the trade improve piece activity, king mobility, control of key squares, or transition favorably to an endgame? Understanding exchange value separates strong players from average ones.",
          es: "El valor de intercambio considera no solo el conteo numérico de piezas intercambiadas, sino las consecuencias posicionales: ¿mejora el intercambio la actividad de piezas, movilidad de damas, control de casillas clave o transición favorable a un final? Entender el valor de intercambio separa a jugadores fuertes de los promedio.",
          de: "Der Tauschwert berücksichtigt nicht nur die numerische Anzahl getauschter Steine, sondern die positionellen Konsequenzen: Verbessert der Tausch Steinaktivität, Damenmobilität, Kontrolle von Schlüsselfeldern oder günstigen Übergang zum Endspiel? Das Verständnis des Tauschwerts trennt starke Spieler von durchschnittlichen.",
          nl: "Ruil waarde overweegt niet alleen het numerieke aantal geruilerde stukken, maar de positionele gevolgen: verbetert de ruil stuk activiteit, dam mobiliteit, controle van sleutelvelden of gunstige overgang naar eindspel? Het begrijpen van ruil waarde scheidt sterke spelers van gemiddelde."
        }
      },
      {
        question: {
          en: "What is a 'forced win' in checkers terminology?",
          es: "¿Qué es una 'victoria forzada' en la terminología de damas?",
          de: "Was ist ein 'erzwungener Gewinn' in der Dame-Terminologie?",
          nl: "Wat is een 'gedwongen winst' in dammen terminologie?"
        },
        options: [
          {
            en: "A position where perfect play guarantees victory",
            es: "Una posición donde el juego perfecto garantiza victoria",
            de: "Eine Position, bei der perfektes Spiel den Sieg garantiert",
            nl: "Een positie waarbij perfect spel de overwinning garandeert"
          },
          {
            en: "Winning by capturing all opponent pieces",
            es: "Ganar capturando todas las piezas del oponente",
            de: "Gewinnen durch Schlagen aller Gegnersteine",
            nl: "Winnen door alle tegenstander stukken te slaan"
          },
          {
            en: "A mandatory capture",
            es: "Una captura obligatoria",
            de: "Ein Pflichtzug",
            nl: "Een verplichte slag"
          },
          {
            en: "Winning on time",
            es: "Ganar por tiempo",
            de: "Auf Zeit gewinnen",
            nl: "Op tijd winnen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A forced win is a position where, with best play from both sides, one player can guarantee victory regardless of opponent's defensive efforts. These positions are often proven through exhaustive analysis or computer databases, representing absolute positional superiority.",
          es: "Una victoria forzada es una posición donde, con el mejor juego de ambos bandos, un jugador puede garantizar la victoria independientemente de los esfuerzos defensivos del oponente. Estas posiciones a menudo se prueban a través de análisis exhaustivo o bases de datos de computadora, representando superioridad posicional absoluta.",
          de: "Ein erzwungener Gewinn ist eine Position, bei der ein Spieler mit bestem Spiel beider Seiten den Sieg garantieren kann, unabhängig von den Verteidigungsbemühungen des Gegners. Diese Positionen werden oft durch erschöpfende Analyse oder Computerdatenbanken bewiesen und repräsentieren absolute positionelle Überlegenheit.",
          nl: "Een gedwongen winst is een positie waarbij, met het beste spel van beide kanten, één speler de overwinning kan garanderen ongeacht de defensieve inspanningen van de tegenstander. Deze posities worden vaak bewezen door uitputtende analyse of computer databases, wat absolute positionele superioriteit vertegenwoordigt."
        }
      },
      {
        question: {
          en: "What is the 'seven-man barricade' defensive formation?",
          es: "¿Qué es la formación defensiva de 'barricada de siete piezas'?",
          de: "Was ist die 'Sieben-Stein-Barrikade'-Verteidigungsformation?",
          nl: "Wat is de 'zeven-stuk barricade' defensieve formatie?"
        },
        options: [
          {
            en: "Seven pieces forming an impenetrable defensive wall",
            es: "Siete piezas formando un muro defensivo impenetrable",
            de: "Sieben Steine, die eine undurchdringliche Verteidigungsmauer bilden",
            nl: "Zeven stukken die een ondoordringbare defensieve muur vormen"
          },
          {
            en: "Seven pieces in a line",
            es: "Siete piezas en una línea",
            de: "Sieben Steine in einer Reihe",
            nl: "Zeven stukken in een lijn"
          },
          {
            en: "Seven moves to build defense",
            es: "Siete movimientos para construir defensa",
            de: "Sieben Züge zum Aufbau der Verteidigung",
            nl: "Zeven zetten om verdediging op te bouwen"
          },
          {
            en: "A specific opening variation",
            es: "Una variación de apertura específica",
            de: "Eine spezifische Eröffnungsvariante",
            nl: "Een specifieke opening variatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The seven-man barricade is a defensive structure where seven pieces are coordinated to create a nearly impenetrable wall, blocking all opponent advancement paths. This formation requires precise piece placement and is often used to force draws in otherwise losing positions.",
          es: "La barricada de siete piezas es una estructura defensiva donde siete piezas se coordinan para crear un muro casi impenetrable, bloqueando todos los caminos de avance del oponente. Esta formación requiere colocación precisa de piezas y a menudo se usa para forzar tablas en posiciones que de otro modo serían perdedoras.",
          de: "Die Sieben-Stein-Barrikade ist eine Verteidigungsstruktur, bei der sieben Steine koordiniert werden, um eine nahezu undurchdringliche Mauer zu schaffen und alle Vorrückungswege des Gegners zu blockieren. Diese Formation erfordert präzise Steinplatzierung und wird oft verwendet, um in sonst verlorenen Positionen Remis zu erzwingen.",
          nl: "De zeven-stuk barricade is een defensieve structuur waarbij zeven stukken gecoördineerd worden om een bijna ondoordringbare muur te creëren, waarbij alle tegenstander vooruitgangspaden geblokkeerd worden. Deze formatie vereist nauwkeurige stuk plaatsing en wordt vaak gebruikt om remises af te dwingen in anders verliezende posities."
        }
      },
      {
        question: {
          en: "What is 'king leverage' in endgames?",
          es: "¿Qué es el 'apalancamiento de dama' en finales?",
          de: "Was ist 'Damen-Hebelwirkung' in Endspielen?",
          nl: "Wat is 'dam hefboomwerking' in eindspelen?"
        },
        options: [
          {
            en: "Using king mobility to create multiple threats simultaneously",
            es: "Usar movilidad de dama para crear múltiples amenazas simultáneamente",
            de: "Damenmobilität nutzen, um mehrere Drohungen gleichzeitig zu schaffen",
            nl: "Dam mobiliteit gebruiken om meerdere dreigingen tegelijkertijd te creëren"
          },
          {
            en: "Moving a king forcefully",
            es: "Mover una dama con fuerza",
            de: "Eine Dame kraftvoll bewegen",
            nl: "Een dam krachtig verplaatsen"
          },
          {
            en: "Trading kings",
            es: "Intercambiar damas",
            de: "Damen tauschen",
            nl: "Dammen ruilen"
          },
          {
            en: "Promoting to a king",
            es: "Promover a dama",
            de: "Zur Dame befördern",
            nl: "Tot dam promoveren"
          }
        ],
        correct: 0,
        explanation: {
          en: "King leverage exploits the superior mobility of kings to create multiple simultaneous threats that the opponent cannot adequately address, forcing material gain or positional concessions. This principle is fundamental to converting king advantages in endgames.",
          es: "El apalancamiento de dama explota la movilidad superior de las damas para crear múltiples amenazas simultáneas que el oponente no puede abordar adecuadamente, forzando ganancia material o concesiones posicionales. Este principio es fundamental para convertir ventajas de dama en finales.",
          de: "Damen-Hebelwirkung nutzt die überlegene Mobilität von Damen aus, um mehrere gleichzeitige Drohungen zu schaffen, die der Gegner nicht angemessen begegnen kann, wodurch materieller Gewinn oder positionelle Zugeständnisse erzwungen werden. Dieses Prinzip ist grundlegend für die Umwandlung von Damenvorteilen in Endspielen.",
          nl: "Dam hefboomwerking benut de superieure mobiliteit van dammen om meerdere gelijktijdige dreigingen te creëren die de tegenstander niet adequaat kan aanpakken, waarbij materiaal winst of positionele concessies afgedwongen worden. Dit principe is fundamenteel voor het omzetten van dam voordelen in eindspelen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
