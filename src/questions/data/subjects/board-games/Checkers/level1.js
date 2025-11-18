// Quiz Template - Level 1: Bord spelletjes - Dammen
(function() {
  const level1 = {
    name: {
      en: "Checkers/Draughts - Beginner",
      es: "Damas - Principiante",
      de: "Dame - Anfänger",
      nl: "Dammen - Beginner"
    },
    questions: [
      {
        question: {
          en: "How many pieces does each player start with in checkers/draughts?",
          es: "¿Con cuántas piezas comienza cada jugador en las damas?",
          de: "Mit wie vielen Steinen beginnt jeder Spieler beim Dame-Spiel?",
          nl: "Met hoeveel stenen begint elke speler bij dammen?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "16", es: "16", de: "16", nl: "16" }
        ],
        correct: 2,
        explanation: {
          en: "Each player starts with 12 pieces in checkers/draughts, placed on the dark squares of the first three rows closest to them.",
          es: "Cada jugador comienza con 12 piezas en las damas, colocadas en las casillas oscuras de las primeras tres filas más cercanas a ellos.",
          de: "Jeder Spieler beginnt mit 12 Steinen beim Dame-Spiel, die auf den dunklen Feldern der ersten drei Reihen nahe ihnen platziert werden.",
          nl: "Elke speler begint met 12 stenen bij dammen, geplaatst op de donkere vakjes van de eerste drie rijen het dichtst bij hen."
        }
      },
      {
        question: {
          en: "On which colored squares are checkers/draughts pieces placed?",
          es: "¿En qué casillas de color se colocan las piezas de damas?",
          de: "Auf welchen farbigen Feldern werden die Dame-Steine platziert?",
          nl: "Op welke gekleurde vakjes worden damstenen geplaatst?"
        },
        options: [
          { en: "White squares only", es: "Solo casillas blancas", de: "Nur weiße Felder", nl: "Alleen witte vakjes" },
          { en: "Dark squares only", es: "Solo casillas oscuras", de: "Nur dunkle Felder", nl: "Alleen donkere vakjes" },
          { en: "Both white and dark squares", es: "Casillas blancas y oscuras", de: "Sowohl weiße als auch dunkle Felder", nl: "Zowel witte als donkere vakjes" },
          { en: "It depends on the variant", es: "Depende de la variante", de: "Es hängt von der Variante ab", nl: "Het hangt af van de variant" }
        ],
        correct: 1,
        explanation: {
          en: "Pieces are only placed and moved on the dark squares of the checkerboard. The white squares are never used during play.",
          es: "Las piezas solo se colocan y mueven en las casillas oscuras del tablero. Las casillas blancas nunca se usan durante el juego.",
          de: "Steine werden nur auf den dunklen Feldern des Bretts platziert und bewegt. Die weißen Felder werden niemals im Spiel verwendet.",
          nl: "Stenen worden alleen geplaatst en bewogen op de donkere vakjes van het dambord. De witte vakjes worden nooit gebruikt tijdens het spel."
        }
      },
      {
        question: {
          en: "How do regular pieces move in checkers/draughts?",
          es: "¿Cómo se mueven las piezas regulares en las damas?",
          de: "Wie bewegen sich normale Steine beim Dame-Spiel?",
          nl: "Hoe bewegen gewone stenen bij dammen?"
        },
        options: [
          { en: "Forward and backward diagonal", es: "Diagonalmente hacia adelante y atrás", de: "Diagonal vorwärts und rückwärts", nl: "Diagonaal vooruit en achteruit" },
          { en: "Only forward diagonally", es: "Solo diagonalmente hacia adelante", de: "Nur diagonal vorwärts", nl: "Alleen diagonaal vooruit" },
          { en: "Horizontally and vertically", es: "Horizontal y verticalmente", de: "Horizontal und vertikal", nl: "Horizontaal en verticaal" },
          { en: "In any direction", es: "En cualquier dirección", de: "In jede Richtung", nl: "In elke richting" }
        ],
        correct: 1,
        explanation: {
          en: "Regular pieces can only move forward diagonally, one square at a time, until they become kings by reaching the opposite end of the board.",
          es: "Las piezas regulares solo pueden moverse diagonalmente hacia adelante, una casilla a la vez, hasta convertirse en reyes al llegar al extremo opuesto del tablero.",
          de: "Normale Steine können sich nur diagonal vorwärts bewegen, ein Feld nach dem anderen, bis sie zu Damen werden, indem sie das gegenüberliegende Ende des Bretts erreichen.",
          nl: "Gewone stenen kunnen alleen diagonaal vooruit bewegen, één vakje tegelijk, totdat ze dammen worden door de andere kant van het bord te bereiken."
        }
      },
      {
        question: {
          en: "What happens when a piece reaches the opposite end of the board?",
          es: "¿Qué pasa cuando una pieza llega al extremo opuesto del tablero?",
          de: "Was passiert, wenn ein Stein das gegenüberliegende Ende des Bretts erreicht?",
          nl: "Wat gebeurt er als een steen de andere kant van het bord bereikt?"
        },
        options: [
          { en: "It is removed from the board", es: "Se retira del tablero", de: "Er wird vom Brett entfernt", nl: "Hij wordt van het bord weggenomen" },
          { en: "It becomes a king/queen", es: "Se convierte en rey/reina", de: "Er wird zur Dame", nl: "Hij wordt een dam" },
          { en: "It can move twice", es: "Puede moverse dos veces", de: "Er kann sich zweimal bewegen", nl: "Hij kan twee keer bewegen" },
          { en: "Nothing special happens", es: "No pasa nada especial", de: "Nichts Besonderes passiert", nl: "Er gebeurt niets speciaals" }
        ],
        correct: 1,
        explanation: {
          en: "When a piece reaches the opposite end of the board, it becomes a king (or queen) and gains the ability to move backward as well as forward.",
          es: "Cuando una pieza llega al extremo opuesto del tablero, se convierte en rey (o reina) y gana la habilidad de moverse hacia atrás así como hacia adelante.",
          de: "Wenn ein Stein das gegenüberliegende Ende des Bretts erreicht, wird er zur Dame und erhält die Fähigkeit, sich sowohl rückwärts als auch vorwärts zu bewegen.",
          nl: "Wanneer een steen de andere kant van het bord bereikt, wordt hij een dam en krijgt hij de mogelijkheid om zowel achteruit als vooruit te bewegen."
        }
      },
      {
        question: {
          en: "How do you capture an opponent's piece in checkers/draughts?",
          es: "¿Cómo capturas la pieza de un oponente en las damas?",
          de: "Wie erobert man einen gegnerischen Stein beim Dame-Spiel?",
          nl: "Hoe sla je een steen van de tegenstander bij dammen?"
        },
        options: [
          { en: "Move next to it", es: "Muévete junto a ella", de: "Bewege dich daneben", nl: "Beweeg ernaast" },
          { en: "Jump over it diagonally", es: "Salta sobre ella diagonalmente", de: "Springe diagonal darüber", nl: "Spring er diagonaal overheen" },
          { en: "Push it off the board", es: "Empújala fuera del tablero", de: "Schiebe ihn vom Brett", nl: "Duw hem van het bord" },
          { en: "Surround it completely", es: "Rodéala completamente", de: "Umzingele ihn vollständig", nl: "Omsingel hem volledig" }
        ],
        correct: 1,
        explanation: {
          en: "You capture an opponent's piece by jumping over it diagonally to an empty square behind it. The captured piece is then removed from the board.",
          es: "Capturas la pieza de un oponente saltando sobre ella diagonalmente a una casilla vacía detrás de ella. La pieza capturada se retira del tablero.",
          de: "Du eroberst einen gegnerischen Stein, indem du diagonal darüber zu einem leeren Feld dahinter springst. Der eroberte Stein wird dann vom Brett entfernt.",
          nl: "Je slaat een steen van de tegenstander door er diagonaal overheen te springen naar een leeg vakje erachter. De geslagen steen wordt dan van het bord weggenomen."
        }
      },
      {
        question: {
          en: "What is a 'forced capture' rule in checkers/draughts?",
          es: "¿Qué es la regla de 'captura forzada' en las damas?",
          de: "Was ist die 'Schlagzwang'-Regel beim Dame-Spiel?",
          nl: "Wat is de 'verplichte slag'-regel bij dammen?"
        },
        options: [
          { en: "You can choose whether to capture", es: "Puedes elegir si capturar", de: "Du kannst wählen, ob du schlägst", nl: "Je kunt kiezen of je slaat" },
          { en: "You must capture if possible", es: "Debes capturar si es posible", de: "Du musst schlagen, wenn möglich", nl: "Je moet slaan als het mogelijk is" },
          { en: "Only kings must capture", es: "Solo los reyes deben capturar", de: "Nur Damen müssen schlagen", nl: "Alleen dammen moeten slaan" },
          { en: "Captures are not allowed", es: "Las capturas no están permitidas", de: "Schlagen ist nicht erlaubt", nl: "Slaan is niet toegestaan" }
        ],
        correct: 1,
        explanation: {
          en: "In most variants of checkers/draughts, if you have a legal capture available, you must make it. You cannot choose to make a non-capturing move instead.",
          es: "En la mayoría de variantes de las damas, si tienes una captura legal disponible, debes hacerla. No puedes elegir hacer un movimiento sin captura en su lugar.",
          de: "In den meisten Varianten des Dame-Spiels musst du schlagen, wenn ein legaler Schlag verfügbar ist. Du kannst nicht stattdessen einen Zug ohne Schlag wählen.",
          nl: "In de meeste varianten van dammen moet je slaan als er een legale slag beschikbaar is. Je kunt niet kiezen om in plaats daarvan een zet zonder slag te doen."
        }
      },
      {
        question: {
          en: "How many squares is a standard checkers/draughts board?",
          es: "¿De cuántas casillas es un tablero estándar de damas?",
          de: "Wie viele Felder hat ein Standard-Dame-Brett?",
          nl: "Hoeveel vakjes heeft een standaard dambord?"
        },
        options: [
          { en: "8x8 (64 squares)", es: "8x8 (64 casillas)", de: "8x8 (64 Felder)", nl: "8x8 (64 vakjes)" },
          { en: "10x10 (100 squares)", es: "10x10 (100 casillas)", de: "10x10 (100 Felder)", nl: "10x10 (100 vakjes)" },
          { en: "12x12 (144 squares)", es: "12x12 (144 casillas)", de: "12x12 (144 Felder)", nl: "12x12 (144 vakjes)" },
          { en: "It varies by country", es: "Varía según el país", de: "Es variiert je nach Land", nl: "Het varieert per land" }
        ],
        correct: 3,
        explanation: {
          en: "The board size varies by country: English/American checkers uses 8x8, International draughts uses 10x10, and some variants use 12x12 boards.",
          es: "El tamaño del tablero varía según el país: las damas inglesas/americanas usan 8x8, las damas internacionales usan 10x10, y algunas variantes usan tableros 12x12.",
          de: "Die Brettgröße variiert je nach Land: Englisches/Amerikanisches Dame verwendet 8x8, Internationales Dame verwendet 10x10, und einige Varianten verwenden 12x12 Bretter.",
          nl: "De bordgrootte varieert per land: Engels/Amerikaans dammen gebruikt 8x8, Internationaal dammen gebruikt 10x10, en sommige varianten gebruiken 12x12 borden."
        }
      },
      {
        question: {
          en: "What is a 'multiple capture' or 'multiple jump'?",
          es: "¿Qué es una 'captura múltiple' o 'salto múltiple'?",
          de: "Was ist ein 'Mehrfachschlag' oder 'Mehrfachsprung'?",
          nl: "Wat is een 'meervoudige slag' of 'meervoudige sprong'?"
        },
        options: [
          { en: "Capturing two pieces at once", es: "Capturar dos piezas a la vez", de: "Zwei Steine auf einmal schlagen", nl: "Twee stenen tegelijk slaan" },
          { en: "Multiple jumps in one turn", es: "Saltar sobre múltiples piezas en un turno", de: "Über mehrere Steine in einem Zug springen", nl: "Over meerdere stenen springen in één beurt" },
          { en: "Moving the same piece twice", es: "Mover la misma pieza dos veces", de: "Denselben Stein zweimal bewegen", nl: "Dezelfde steen twee keer bewegen" },
          { en: "Using two pieces together", es: "Usar dos piezas juntas", de: "Zwei Steine zusammen verwenden", nl: "Twee stenen samen gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "A multiple capture occurs when you can jump over several opponent pieces in a single turn, continuing to jump as long as captures are available.",
          es: "Una captura múltiple ocurre cuando puedes saltar sobre varias piezas del oponente en un solo turno, continuando saltando mientras haya capturas disponibles.",
          de: "Ein Mehrfachschlag tritt auf, wenn du über mehrere gegnerische Steine in einem Zug springen kannst und weiter springst, solange Schläge verfügbar sind.",
          nl: "Een meervoudige slag vindt plaats wanneer je over verschillende stenen van de tegenstander kunt springen in één beurt, en blijft springen zolang er slagen beschikbaar zijn."
        }
      },
      {
        question: {
          en: "How does a king/queen move differently from a regular piece?",
          es: "¿Cómo se mueve un rey/reina diferente de una pieza regular?",
          de: "Wie bewegt sich eine Dame anders als ein normaler Stein?",
          nl: "Hoe beweegt een dam anders dan een gewone steen?"
        },
        options: [
          { en: "It can move in straight lines", es: "Puede moverse en líneas rectas", de: "Sie kann sich in geraden Linien bewegen", nl: "Hij kan in rechte lijnen bewegen" },
          { en: "It can move backward as well as forward", es: "Puede moverse hacia atrás así como hacia adelante", de: "Sie kann sich rückwärts und vorwärts bewegen", nl: "Hij kan achteruit en vooruit bewegen" },
          { en: "It can jump over friendly pieces", es: "Puede saltar sobre piezas amigas", de: "Sie kann über eigene Steine springen", nl: "Hij kan over eigen stenen springen" },
          { en: "It moves twice as far", es: "Se mueve el doble de lejos", de: "Sie bewegt sich doppelt so weit", nl: "Hij beweegt twee keer zo ver" }
        ],
        correct: 1,
        explanation: {
          en: "A king/queen can move both forward and backward diagonally, while regular pieces can only move forward until they become kings.",
          es: "Un rey/reina puede moverse tanto hacia adelante como hacia atrás diagonalmente, mientras que las piezas regulares solo pueden moverse hacia adelante hasta convertirse en reyes.",
          de: "Eine Dame kann sich sowohl vorwärts als auch rückwärts diagonal bewegen, während normale Steine sich nur vorwärts bewegen können, bis sie zu Damen werden.",
          nl: "Een dam kan zowel vooruit als achteruit diagonaal bewegen, terwijl gewone stenen alleen vooruit kunnen bewegen totdat ze dammen worden."
        }
      },
      {
        question: {
          en: "What is the main objective in checkers/draughts?",
          es: "¿Cuál es el objetivo principal en las damas?",
          de: "Was ist das Hauptziel beim Dame-Spiel?",
          nl: "Wat is het hoofddoel bij dammen?"
        },
        options: [
          { en: "Capture all opponent pieces", es: "Capturar todas las piezas del oponente", de: "Alle gegnerischen Steine erobern", nl: "Alle stenen van de tegenstander slaan" },
          { en: "Get all pieces to the other side", es: "Llevar todas las piezas al otro lado", de: "Alle Steine zur anderen Seite bringen", nl: "Alle stenen naar de andere kant krijgen" },
          { en: "Capture all pieces or block all moves", es: "Capturar todas las piezas o bloquear todos los movimientos", de: "Alle Steine erobern oder alle Züge blockieren", nl: "Alle stenen slaan of alle zetten blokkeren" },
          { en: "Create the most kings", es: "Crear la mayoría de reyes", de: "Die meisten Damen erschaffen", nl: "De meeste dammen maken" }
        ],
        correct: 2,
        explanation: {
          en: "You win by either capturing all opponent pieces or blocking all their pieces so they cannot make any legal moves.",
          es: "Ganas capturando todas las piezas del oponente o bloqueando todas sus piezas para que no puedan hacer movimientos legales.",
          de: "Du gewinnst, indem du entweder alle gegnerischen Steine eroberst oder alle ihre Steine blockierst, sodass sie keine legalen Züge machen können.",
          nl: "Je wint door alle stenen van de tegenstander te slaan of al hun stenen te blokkeren zodat ze geen legale zetten kunnen doen."
        }
      },
      {
        question: {
          en: "In which direction can a regular piece capture?",
          es: "¿En qué dirección puede capturar una pieza regular?",
          de: "In welche Richtung kann ein normaler Stein schlagen?",
          nl: "In welke richting kan een gewone steen slaan?"
        },
        options: [
          { en: "Only forward diagonally", es: "Solo diagonalmente hacia adelante", de: "Nur diagonal vorwärts", nl: "Alleen diagonaal vooruit" },
          { en: "Forward and backward diagonal", es: "Diagonalmente hacia adelante y atrás", de: "Diagonal vorwärts und rückwärts", nl: "Diagonaal vooruit en achteruit" },
          { en: "In any diagonal direction", es: "En cualquier dirección diagonal", de: "In jede diagonale Richtung", nl: "In elke diagonale richting" },
          { en: "Only sideways", es: "Solo hacia los lados", de: "Nur seitlich", nl: "Alleen zijwaarts" }
        ],
        correct: 1,
        explanation: {
          en: "Regular pieces can capture in both forward diagonal directions, even though they can only move forward when not capturing.",
          es: "Las piezas regulares pueden capturar en ambas direcciones diagonales hacia adelante, aunque solo pueden moverse hacia adelante cuando no están capturando.",
          de: "Normale Steine können in beide diagonale Vorwärtsrichtungen schlagen, obwohl sie sich nur vorwärts bewegen können, wenn sie nicht schlagen.",
          nl: "Gewone stenen kunnen in beide diagonale voorwaartse richtingen slaan, hoewel ze alleen vooruit kunnen bewegen wanneer ze niet slaan."
        }
      },
      {
        question: {
          en: "What happens if you don't capture when you must?",
          es: "¿Qué pasa si no capturas cuando debes?",
          de: "Was passiert, wenn du nicht schlägst, obwohl du musst?",
          nl: "Wat gebeurt er als je niet slaat terwijl je moet?"
        },
        options: [
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" },
          { en: "You lose your turn", es: "Pierdes tu turno", de: "Du verlierst deinen Zug", nl: "Je verliest je beurt" },
          { en: "Piece removed (huffing)", es: "Tu pieza es removida (soplado)", de: "Dein Stein wird entfernt (Blasen)", nl: "Je steen wordt weggenomen (blazen)" },
          { en: "The game ends", es: "El juego termina", de: "Das Spiel endet", nl: "Het spel eindigt" }
        ],
        correct: 2,
        explanation: {
          en: "In traditional rules, if you fail to capture when required, your opponent can 'huff' your piece by removing it from the board as penalty.",
          es: "En las reglas tradicionales, si fallas en capturar cuando es requerido, tu oponente puede 'soplar' tu pieza removiéndola del tablero como penalización.",
          de: "In traditionellen Regeln kann dein Gegner deinen Stein 'blasen', indem er ihn als Strafe vom Brett entfernt, wenn du nicht schlägst, obwohl du musst.",
          nl: "In traditionele regels kan je tegenstander je steen 'blazen' door hem van het bord te verwijderen als straf als je niet slaat terwijl je moet."
        }
      },
      {
        question: {
          en: "How is a king/queen usually marked on the board?",
          es: "¿Cómo se marca usualmente un rey/reina en el tablero?",
          de: "Wie wird eine Dame normalerweise auf dem Brett markiert?",
          nl: "Hoe wordt een dam meestal gemarkeerd op het bord?"
        },
        options: [
          { en: "With a crown symbol", es: "Con un símbolo de corona", de: "Mit einem Kronensymbol", nl: "Met een kroonsymbool" },
          { en: "By stacking two pieces", es: "Apilando dos piezas", de: "Durch Stapeln zweier Steine", nl: "Door twee stenen op elkaar te stapelen" },
          { en: "With a different colored piece", es: "Con una pieza de color diferente", de: "Mit einem andersfarbigen Stein", nl: "Met een steen van een andere kleur" },
          { en: "Any of the above", es: "Cualquiera de las anteriores", de: "Jede der oben genannten", nl: "Elk van de bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "Kings can be marked in various ways: with a crown symbol, by stacking pieces, using special crowned pieces, or with different colored pieces depending on the set.",
          es: "Los reyes pueden marcarse de varias maneras: con un símbolo de corona, apilando piezas, usando piezas especiales con corona, o con piezas de colores diferentes según el conjunto.",
          de: "Damen können auf verschiedene Weise markiert werden: mit einem Kronensymbol, durch Stapeln von Steinen, mit speziellen gekrönten Steinen oder mit andersfarbigen Steinen je nach Set.",
          nl: "Dammen kunnen op verschillende manieren worden gemarkeerd: met een kroonsymbool, door stenen te stapelen, met speciale gekroonde stenen, of met verschillende gekleurde stenen afhankelijk van de set."
        }
      },
      {
        question: {
          en: "What is 'International Draughts' also known as?",
          es: "¿Cómo se conoce también las 'Damas Internacionales'?",
          de: "Wie ist 'Internationales Dame' auch bekannt?",
          nl: "Hoe staat 'Internationaal Dammen' ook bekend?"
        },
        options: [
          { en: "Polish Draughts", es: "Damas Polacas", de: "Polnisches Dame", nl: "Poolse Dam" },
          { en: "Russian Draughts", es: "Damas Rusas", de: "Russisches Dame", nl: "Russische Dam" },
          { en: "Brazilian Draughts", es: "Damas Brasileñas", de: "Brasilianisches Dame", nl: "Braziliaanse Dam" },
          { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 0,
        explanation: {
          en: "International Draughts is also known as Polish Draughts and is played on a 10x10 board with 20 pieces per player.",
          es: "Las Damas Internacionales también se conocen como Damas Polacas y se juegan en un tablero 10x10 con 20 piezas por jugador.",
          de: "Internationales Dame ist auch als Polnisches Dame bekannt und wird auf einem 10x10-Brett mit 20 Steinen pro Spieler gespielt.",
          nl: "Internationaal Dammen staat ook bekend als Poolse Dam en wordt gespeeld op een 10x10 bord met 20 stenen per speler."
        }
      },
      {
        question: {
          en: "When was the first known reference to checkers/draughts?",
          es: "¿Cuándo fue la primera referencia conocida a las damas?",
          de: "Wann war der erste bekannte Verweis auf Dame?",
          nl: "Wanneer was de eerste bekende verwijzing naar dammen?"
        },
        options: [
          { en: "Ancient Egypt (3000 BCE)", es: "Antiguo Egipto (3000 a.C.)", de: "Altes Ägypten (3000 v.Chr.)", nl: "Oude Egypte (3000 v.Chr.)" },
          { en: "Ancient Greece (500 BCE)", es: "Antigua Grecia (500 a.C.)", de: "Antikes Griechenland (500 v.Chr.)", nl: "Oude Griekenland (500 v.Chr.)" },
          { en: "Medieval Europe (1100 CE)", es: "Europa Medieval (1100 d.C.)", de: "Mittelalterliches Europa (1100 n.Chr.)", nl: "Middeleeuws Europa (1100 n.Chr.)" },
          { en: "Renaissance (1500 CE)", es: "Renacimiento (1500 d.C.)", de: "Renaissance (1500 n.Chr.)", nl: "Renaissance (1500 n.Chr.)" }
        ],
        correct: 0,
        explanation: {
          en: "The earliest known reference to a draughts-like game dates back to around 3000 BCE in ancient Egypt, where a similar game called Alquerque was played.",
          es: "La referencia más antigua conocida a un juego similar a las damas se remonta a alrededor del 3000 a.C. en el antiguo Egipto, donde se jugaba un juego similar llamado Alquerque.",
          de: "Der früheste bekannte Verweis auf ein Dame-ähnliches Spiel geht auf etwa 3000 v.Chr. im alten Ägypten zurück, wo ein ähnliches Spiel namens Alquerque gespielt wurde.",
          nl: "De vroegste bekende verwijzing naar een damachtig spel dateert van rond 3000 v.Chr. in het oude Egypte, waar een soortgelijk spel genaamd Alquerque werd gespeeld."
        }
      },
      {
        question: {
          en: "What is a 'flying king' in some draughts variants?",
          es: "¿Qué es un 'rey volador' en algunas variantes de damas?",
          de: "Was ist eine 'fliegende Dame' in einigen Dame-Varianten?",
          nl: "Wat is een 'vliegende dam' in sommige damvarianten?"
        },
        options: [
          { en: "A king that can jump over empty squares", es: "Un rey que puede saltar sobre casillas vacías", de: "Eine Dame, die über leere Felder springen kann", nl: "Een dam die over lege vakjes kan springen" },
          { en: "A king that moves multiple squares diagonally", es: "Un rey que se mueve múltiples casillas diagonalmente", de: "Eine Dame, die sich mehrere Felder diagonal bewegt", nl: "Een dam die meerdere vakjes diagonaal beweegt" },
          { en: "A king that can capture at long range", es: "Un rey que puede capturar a larga distancia", de: "Eine Dame, die auf große Entfernung schlagen kann", nl: "Een dam die op lange afstand kan slaan" },
          { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "A flying king can move any number of squares diagonally along unobstructed lines and can capture pieces at long range, landing anywhere behind the captured piece.",
          es: "Un rey volador puede moverse cualquier número de casillas diagonalmente a lo largo de líneas sin obstrucciones y puede capturar piezas a larga distancia, aterrizando en cualquier lugar detrás de la pieza capturada.",
          de: "Eine fliegende Dame kann sich beliebig viele Felder diagonal entlang unbehinderter Linien bewegen und kann Steine auf große Entfernung schlagen, wobei sie überall hinter dem geschlagenen Stein landen kann.",
          nl: "Een vliegende dam kan elk aantal vakjes diagonaal bewegen langs onbelemmerde lijnen en kan stenen op lange afstand slaan, landend overal achter de geslagen steen."
        }
      },
      {
        question: {
          en: "Which country is most associated with checkers/draughts championships?",
          es: "¿Qué país está más asociado con los campeonatos de damas?",
          de: "Welches Land ist am meisten mit Dame-Meisterschaften verbunden?",
          nl: "Welk land wordt het meest geassocieerd met damkampioenschappen?"
        },
        options: [
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "Netherlands", es: "Países Bajos", de: "Niederlande", nl: "Nederland" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "Poland", es: "Polonia", de: "Polen", nl: "Polen" }
        ],
        correct: 1,
        explanation: {
          en: "The Netherlands has a very strong draughts tradition and has produced many world champions. The World Draughts Federation is based there.",
          es: "Los Países Bajos tienen una tradición muy fuerte en damas y han producido muchos campeones mundiales. La Federación Mundial de Damas tiene su sede allí.",
          de: "Die Niederlande haben eine sehr starke Dame-Tradition und haben viele Weltmeister hervorgebracht. Der Welt-Dame-Verband hat dort seinen Sitz.",
          nl: "Nederland heeft een zeer sterke damtraditie en heeft veel wereldkampioenen voortgebracht. De Wereld Dam Federatie is daar gevestigd."
        }
      },
      {
        question: {
          en: "What is the term for a position where no legal moves are available?",
          es: "¿Cuál es el término para una posición donde no hay movimientos legales disponibles?",
          de: "Wie nennt man eine Position, in der keine legalen Züge verfügbar sind?",
          nl: "Wat is de term voor een positie waar geen legale zetten beschikbaar zijn?"
        },
        options: [
          { en: "Checkmate", es: "Jaque mate", de: "Schachmatt", nl: "Schaakmat" },
          { en: "Stalemate", es: "Tablas por ahogado", de: "Patt", nl: "Pat" },
          { en: "Deadlock", es: "Punto muerto", de: "Blockade", nl: "Blokkade" },
          { en: "Draw", es: "Empate", de: "Unentschieden", nl: "Remise" }
        ],
        correct: 1,
        explanation: {
          en: "A stalemate occurs when a player has no legal moves available. In checkers/draughts, this typically means the player loses the game.",
          es: "Un empate por ahogado ocurre cuando un jugador no tiene movimientos legales disponibles. En las damas, esto típicamente significa que el jugador pierde el juego.",
          de: "Ein Patt tritt auf, wenn ein Spieler keine legalen Züge zur Verfügung hat. Beim Dame-Spiel bedeutet dies typischerweise, dass der Spieler das Spiel verliert.",
          nl: "Een pat treedt op wanneer een speler geen legale zetten beschikbaar heeft. Bij dammen betekent dit meestal dat de speler het spel verliest."
        }
      },
      {
        question: {
          en: "What is the maximum number of pieces that can be captured in a single turn?",
          es: "¿Cuál es el número máximo de piezas que se pueden capturar en un solo turno?",
          de: "Wie viele Steine können maximal in einem Zug geschlagen werden?",
          nl: "Wat is het maximum aantal stenen dat in één beurt kan worden geslagen?"
        },
        options: [
          { en: "3 pieces", es: "3 piezas", de: "3 Steine", nl: "3 stenen" },
          { en: "5 pieces", es: "5 piezas", de: "5 Steine", nl: "5 stenen" },
          { en: "8 pieces", es: "8 piezas", de: "8 Steine", nl: "8 stenen" },
          { en: "Depends on board position", es: "Depende de la posición del tablero", de: "Es hängt von der Brettposition ab", nl: "Het hangt af van de bordpositie" }
        ],
        correct: 3,
        explanation: {
          en: "The maximum number of captures in one turn depends on the board position and variant. Theoretically, it could be quite high if pieces are arranged in the right pattern.",
          es: "El número máximo de capturas en un turno depende de la posición del tablero y la variante. Teóricamente, podría ser bastante alto si las piezas están dispuestas en el patrón correcto.",
          de: "Die maximale Anzahl von Schlägen in einem Zug hängt von der Brettposition und Variante ab. Theoretisch könnte sie ziemlich hoch sein, wenn die Steine im richtigen Muster angeordnet sind.",
          nl: "Het maximum aantal slagen in één beurt hangt af van de bordpositie en variant. Theoretisch zou het vrij hoog kunnen zijn als de stenen in het juiste patroon zijn gerangschikt."
        }
      },
      {
        question: {
          en: "What is a 'huffing' or 'blowing' rule in draughts?",
          es: "¿Qué es la regla de 'huffing' o 'soplado' en las damas?",
          de: "Was ist die 'Huffing'- oder 'Blasen'-Regel beim Dame-Spiel?",
          nl: "Wat is een 'huffing' of 'blazen' regel in het damspel?"
        },
        options: [
          { en: "Remove piece that missed capture", es: "Quitar una pieza que no capturó cuando podía", de: "Entfernen eines Steins, der nicht geschlagen hat, obwohl er konnte", nl: "Het wegnemeen van een steen die faalde te slaan toen het kon" },
          { en: "Blowing dust off the board", es: "Soplar el polvo del tablero", de: "Staub vom Brett blasen", nl: "Stof van het bord blazen" },
          { en: "Making a sound when moving pieces", es: "Hacer un sonido al mover piezas", de: "Ein Geräusch beim Bewegen von Steinen machen", nl: "Geluid maken bij het verplaatsen van stenen" },
          { en: "Breathing on pieces to claim them", es: "Respirar sobre las piezas para reclamarlas", de: "Auf Steine atmen, um sie zu beanspruchen", nl: "Op stenen ademeen om ze op te eisen" }
        ],
        correct: 0,
        explanation: {
          en: "Huffing or blowing is a traditional rule where if a player fails to capture an opponent's piece when they could, that piece can be removed from the board as penalty. This rule is rarely used in modern play.",
          es: "Huffing o soplado es una regla tradicional donde si un jugador no logra capturar una pieza del oponente cuando podía, esa pieza puede ser removida del tablero como penalización. Esta regla rara vez se usa en el juego moderno.",
          de: "Huffing oder Blasen ist eine traditionelle Regel, bei der ein Stein entfernt werden kann, wenn ein Spieler versäumt hat, einen gegnerischen Stein zu schlagen, obwohl er konnte. Diese Regel wird im modernen Spiel selten verwendet.",
          nl: "Huffing of blazen is een traditionele regel waarbij als een speler faalt om een tegenstanders steen te slaan wanneer hij kon, die steen van het bord kan worden weggenomen als straf. Deze regel wordt zelden gebruikt in modern spel."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();