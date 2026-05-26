// Chess - Level 1
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "How many squares are on a chess board?",
                "es": "¿Cuántas casillas hay en un tablero de ajedrez?",
                "de": "Wie viele Felder hat ein Schachbrett?",
                "nl": "Hoeveel velden zijn er op een schaakbord?"
            },
            "options": [
                {
                    "en": "64 squares",
                    "es": "64 casillas",
                    "de": "64 Felder",
                    "nl": "64 velden"
                },
                {
                    "en": "32 squares",
                    "es": "32 casillas",
                    "de": "32 Felder",
                    "nl": "32 velden"
                },
                {
                    "en": "48 squares",
                    "es": "48 casillas",
                    "de": "48 Felder",
                    "nl": "48 velden"
                },
                {
                    "en": "100 squares",
                    "es": "100 casillas",
                    "de": "100 Felder",
                    "nl": "100 velden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A chess board has 64 squares arranged in an 8x8 grid, alternating between light and dark colors.",
                "es": "Un tablero de ajedrez tiene 64 casillas dispuestas en una cuadrícula de 8x8, alternando entre colores claros y oscuros.",
                "de": "Ein Schachbrett hat 64 Felder in einem 8x8-Gitter angeordnet, abwechselnd in hellen und dunklen Farben.",
                "nl": "Een schaakbord heeft 64 velden gerangschikt in een 8x8 raster, afwisselend in lichte en donkere kleuren."
            }
        },
        {
            "question": {
                "en": "Which piece can only move diagonally?",
                "es": "¿Qué pieza solo puede moverse diagonalmente?",
                "de": "Welche Figur kann sich nur diagonal bewegen?",
                "nl": "Welk stuk kan alleen diagonaal bewegen?"
            },
            "options": [
                {
                    "en": "Bishop",
                    "es": "Alfil",
                    "de": "Läufer",
                    "nl": "Loper"
                },
                {
                    "en": "Rook",
                    "es": "Torre",
                    "de": "Turm",
                    "nl": "Toren"
                },
                {
                    "en": "Knight",
                    "es": "Caballo",
                    "de": "Springer",
                    "nl": "Paard"
                },
                {
                    "en": "Queen",
                    "es": "Reina",
                    "de": "Dame",
                    "nl": "Dame"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The bishop can only move diagonally, any number of squares, but cannot jump over other pieces.",
                "es": "El alfil solo puede moverse diagonalmente, cualquier número de casillas, pero no puede saltar sobre otras piezas.",
                "de": "Der Läufer kann sich nur diagonal bewegen, beliebig viele Felder, kann aber nicht über andere Figuren springen.",
                "nl": "De loper kan alleen diagonaal bewegen, een willekeurig aantal velden, maar kan niet over andere stukken springen."
            }
        },
        {
            "question": {
                "en": "How does the knight move?",
                "es": "¿Cómo se mueve el caballo?",
                "de": "Wie bewegt sich der Springer?",
                "nl": "Hoe beweegt het paard?"
            },
            "options": [
                {
                    "en": "In an L-shape: 2 squares in one direction, then 1 perpendicular",
                    "es": "En forma de L: 2 casillas en una dirección, luego 1 perpendicular",
                    "de": "in L-Form: 2 Felder in eine Richtung, dann 1 senkrecht",
                    "nl": "in een L-vorm: 2 velden in één richting, dan 1 loodrecht"
                },
                {
                    "en": "Only diagonally",
                    "es": "Solo diagonalmente",
                    "de": "Nur diagonal",
                    "nl": "Alleen diagonaal"
                },
                {
                    "en": "Only straight lines",
                    "es": "Solo en líneas rectas",
                    "de": "Nur gerade Linien",
                    "nl": "Alleen rechte lijnen"
                },
                {
                    "en": "One square in any direction",
                    "es": "Una casilla en cualquier dirección",
                    "de": "Ein Feld in jede Richtung",
                    "nl": "Één veld in elke richting"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The knight moves in an L-shape: 2 squares vertically or horizontally, then 1 square perpendicular. It's the only piece that can jump over others.",
                "es": "El caballo se mueve en forma de L: 2 casillas vertical u horizontalmente, luego 1 casilla perpendicular. Es la única pieza que puede saltar sobre otras.",
                "de": "Der Springer bewegt sich in L-Form: 2 Felder vertikal oder horizontal, dann 1 Feld senkrecht. Er ist die einzige Figur, die über andere springen kann.",
                "nl": "Het paard beweegt in een L-vorm: 2 velden verticaal of horizontaal, dan 1 veld loodrecht. Het is het enige stuk dat over anderen kan springen."
            }
        },
        {
            "question": {
                "en": "What is the objective of chess?",
                "es": "¿Cuál es el objetivo del ajedrez?",
                "de": "Was ist das Ziel des Schachs?",
                "nl": "Wat is het doel van schaken?"
            },
            "options": [
                {
                    "en": "To checkmate the opponent's king",
                    "es": "Dar jaque mate al rey del oponente",
                    "de": "Den gegnerischen König schachmatt setzen",
                    "nl": "De koning van de tegenstander schaakmat zetten"
                },
                {
                    "en": "To capture all opponent's pieces",
                    "es": "Capturar todas las piezas del oponente",
                    "de": "Alle gegnerischen Figuren schlagen",
                    "nl": "Alle stukken van de tegenstander slaan"
                },
                {
                    "en": "To reach the other side",
                    "es": "Llegar al otro lado",
                    "de": "Die andere Seite erreichen",
                    "nl": "De andere kant bereiken"
                },
                {
                    "en": "To control the center",
                    "es": "Controlar el centro",
                    "de": "Das Zentrum kontrollieren",
                    "nl": "Het centrum controleren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The objective of chess is to checkmate the opponent's king - placing it under attack with no legal move to escape capture.",
                "es": "El objetivo del ajedrez es dar jaque mate al rey del oponente - colocándolo bajo ataque sin movimiento legal para escapar de la captura.",
                "de": "Das Ziel des Schachs ist es, den gegnerischen König schachmatt zu setzen - ihn unter Angriff zu stellen ohne legalen Zug zur Flucht.",
                "nl": "Het doel van schaken is de koning van de tegenstander schaakmat te zetten - hem onder aanval plaatsen zonder legale zet om te ontsnappen."
            }
        },
        {
            "question": {
                "en": "How many pawns does each player start with?",
                "es": "¿Con cuántos peones empieza cada jugador?",
                "de": "Mit wie vielen Bauern startet jeder Spieler?",
                "nl": "Met hoeveel pionnen begint elke speler?"
            },
            "options": [
                {
                    "en": "8 pawns",
                    "es": "8 peones",
                    "de": "8 Bauern",
                    "nl": "8 pionnen"
                },
                {
                    "en": "6 pawns",
                    "es": "6 peones",
                    "de": "6 Bauern",
                    "nl": "6 pionnen"
                },
                {
                    "en": "10 pawns",
                    "es": "10 peones",
                    "de": "10 Bauern",
                    "nl": "10 pionnen"
                },
                {
                    "en": "12 pawns",
                    "es": "12 peones",
                    "de": "12 Bauern",
                    "nl": "12 pionnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 8 pawns, placed on the second rank (row) from their perspective at the beginning of the game.",
                "es": "Cada jugador comienza con 8 peones, colocados en la segunda fila desde su perspectiva al inicio del juego.",
                "de": "Jeder Spieler beginnt mit 8 Bauern, die auf der zweiten Reihe aus seiner Sicht zu Beginn des Spiels platziert sind.",
                "nl": "Elke speler begint met 8 pionnen, geplaatst op de tweede rij vanuit hun perspectief aan het begin van het spel."
            }
        },
        {
            "question": {
                "en": "Which piece is the most powerful?",
                "es": "¿Cuál es la pieza más poderosa?",
                "de": "Welche Figur ist die mächtigste?",
                "nl": "Welk stuk is het krachtigst?"
            },
            "options": [
                {
                    "en": "Queen",
                    "es": "Reina",
                    "de": "Dame",
                    "nl": "Dame"
                },
                {
                    "en": "King",
                    "es": "Rey",
                    "de": "König",
                    "nl": "Koning"
                },
                {
                    "en": "Rook",
                    "es": "Torre",
                    "de": "Turm",
                    "nl": "Toren"
                },
                {
                    "en": "Knight",
                    "es": "Caballo",
                    "de": "Springer",
                    "nl": "Paard"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The queen is the most powerful piece, able to move any number of squares horizontally, vertically, or diagonally.",
                "es": "La reina es la pieza más poderosa, capaz de moverse cualquier número de casillas horizontal, vertical o diagonalmente.",
                "de": "Die Dame ist die mächtigste Figur, sie kann beliebig viele Felder horizontal, vertikal oder diagonal ziehen.",
                "nl": "De dame is het krachtigste stuk, ze kan een willekeurig aantal velden horizontaal, verticaal of diagonaal bewegen."
            }
        },
        {
            "question": {
                "en": "What is castling?",
                "es": "¿Qué es el enroque?",
                "de": "Was ist die Rochade?",
                "nl": "Wat is rokeren?"
            },
            "options": [
                {
                    "en": "A special move involving the king and a rook",
                    "es": "Un movimiento especial que involucra al rey y una torre",
                    "de": "Ein Spezialzug mit König und Turm",
                    "nl": "Een speciale zet met de koning en een toren"
                },
                {
                    "en": "Promoting a pawn",
                    "es": "Promocionar un peón",
                    "de": "Einen Bauern umwandeln",
                    "nl": "Een pion promoveren"
                },
                {
                    "en": "Capturing en passant",
                    "es": "Captura al paso",
                    "de": "En passant schlagen",
                    "nl": "En passant slaan"
                },
                {
                    "en": "Moving the queen",
                    "es": "Mover la reina",
                    "de": "Die Dame bewegen",
                    "nl": "De dame bewegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Castling is a special move where the king moves two squares toward a rook, and the rook moves to the square the king crossed over.",
                "es": "El enroque es un movimiento especial donde el rey se mueve dos casillas hacia una torre, y la torre se mueve a la casilla que el rey cruzó.",
                "de": "Die Rochade ist ein Spezialzug, bei dem der König zwei Felder auf einen Turm zu zieht und der Turm auf das Feld zieht, das der König überquert hat.",
                "nl": "Rokeren is een speciale zet waarbij de koning twee velden naar een toren beweegt, en de toren naar het veld beweegt dat de koning heeft overgestoken."
            }
        },
        {
            "question": {
                "en": "How can a pawn capture?",
                "es": "¿Cómo puede capturar un peón?",
                "de": "Wie kann ein Bauer schlagen?",
                "nl": "Hoe kan een pion slaan?"
            },
            "options": [
                {
                    "en": "Diagonally forward one square",
                    "es": "Diagonalmente hacia adelante una casilla",
                    "de": "Diagonal vorwärts ein Feld",
                    "nl": "Diagonaal vooruit één veld"
                },
                {
                    "en": "Straight forward",
                    "es": "Recto hacia adelante",
                    "de": "Gerade vorwärts",
                    "nl": "Recht vooruit"
                },
                {
                    "en": "Sideways",
                    "es": "Hacia los lados",
                    "de": "Seitwärts",
                    "nl": "Zijwaarts"
                },
                {
                    "en": "Backwards",
                    "es": "Hacia atrás",
                    "de": "Rückwärts",
                    "nl": "Achteruit"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Pawns capture differently from how they move - they capture diagonally forward one square to either side.",
                "es": "Los peones capturan de manera diferente a como se mueven - capturan diagonalmente hacia adelante una casilla a cada lado.",
                "de": "Bauern schlagen anders als sie ziehen - sie schlagen diagonal vorwärts ein Feld zu beiden Seiten.",
                "nl": "Pionnen slaan anders dan ze bewegen - ze slaan diagonaal vooruit één veld naar beide zijden."
            }
        },
        {
            "question": {
                "en": "What happens when a pawn reaches the opposite end of the board?",
                "es": "¿Qué sucede cuando un peón llega al extremo opuesto del tablero?",
                "de": "Was passiert, wenn ein Bauer das andere Ende des Bretts erreicht?",
                "nl": "Wat gebeurt er als een pion de overkant van het bord bereikt?"
            },
            "options": [
                {
                    "en": "It must be promoted to a queen, rook, bishop, or knight",
                    "es": "Debe ser promocionado a reina, torre, alfil o caballo",
                    "de": "Er muss in Dame, Turm, Läufer oder Springer umgewandelt werden",
                    "nl": "Hij moet gepromoveerd worden tot dame, toren, loper of paard"
                },
                {
                    "en": "It wins the game",
                    "es": "Gana el juego",
                    "de": "Es gewinnt das Spiel",
                    "nl": "Het wint het spel"
                },
                {
                    "en": "It stays as a pawn",
                    "es": "Permanece como peón",
                    "de": "Er bleibt ein Bauer",
                    "nl": "Het blijft een pion"
                },
                {
                    "en": "It is removed from the board",
                    "es": "Se retira del tablero",
                    "de": "Er wird vom Brett entfernt",
                    "nl": "Het wordt van het bord verwijderd"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When a pawn reaches the eighth rank (the opposite end), it must be promoted to a queen, rook, bishop, or knight of the same color.",
                "es": "Cuando un peón alcanza la octava fila (el extremo opuesto), debe ser promocionado a reina, torre, alfil o caballo del mismo color.",
                "de": "Wenn ein Bauer die achte Reihe (das andere Ende) erreicht, muss er in Dame, Turm, Läufer oder Springer derselben Farbe umgewandelt werden.",
                "nl": "Wanneer een pion de achtste rij (de overkant) bereikt, moet hij gepromoveerd worden tot dame, toren, loper of paard van dezelfde kleur."
            }
        },
        {
            "question": {
                "en": "Which color moves first in chess?",
                "es": "¿Qué color mueve primero en ajedrez?",
                "de": "Welche Farbe zieht zuerst im Schach?",
                "nl": "Welke kleur zet eerst in schaken?"
            },
            "options": [
                {
                    "en": "White",
                    "es": "Blancas",
                    "de": "Weiß",
                    "nl": "Wit"
                },
                {
                    "en": "Black",
                    "es": "Negras",
                    "de": "Schwarz",
                    "nl": "Zwart"
                },
                {
                    "en": "Random choice",
                    "es": "Elección aleatoria",
                    "de": "Zufällige Wahl",
                    "nl": "Willekeurige keuze"
                },
                {
                    "en": "Winner of last game",
                    "es": "Ganador del último juego",
                    "de": "Gewinner des letzten Spiels",
                    "nl": "Winnaar van het laatste spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "White always moves first in chess. This is a fundamental rule that has been standard for centuries.",
                "es": "Las blancas siempre mueven primero en ajedrez. Esta es una regla fundamental que ha sido estándar durante siglos.",
                "de": "Weiß zieht im Schach immer zuerst. Dies ist eine grundlegende Regel, die seit Jahrhunderten Standard ist.",
                "nl": "Wit zet altijd eerst in schaken. Dit is een fundamentele regel die al eeuwenlang standaard is."
            }
        },
        {
            "question": {
                "en": "How does the rook move?",
                "es": "¿Cómo se mueve la torre?",
                "de": "Wie bewegt sich der Turm?",
                "nl": "Hoe beweegt de toren?"
            },
            "options": [
                {
                    "en": "Horizontally or vertically, any number of squares",
                    "es": "Horizontal o verticalmente, cualquier número de casillas",
                    "de": "Horizontal oder vertikal, beliebig viele Felder",
                    "nl": "Horizontaal of verticaal, een willekeurig aantal velden"
                },
                {
                    "en": "Only diagonally",
                    "es": "Solo diagonalmente",
                    "de": "Nur diagonal",
                    "nl": "Alleen diagonaal"
                },
                {
                    "en": "In an L-shape",
                    "es": "En forma de L",
                    "de": "in L-Form",
                    "nl": "in een L-vorm"
                },
                {
                    "en": "One square in any direction",
                    "es": "Una casilla en cualquier dirección",
                    "de": "Ein Feld in jede Richtung",
                    "nl": "Één veld in elke richting"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The rook moves horizontally or vertically across any number of unoccupied squares. It cannot jump over pieces.",
                "es": "La torre se mueve horizontal o verticalmente a través de cualquier número de casillas desocupadas. No puede saltar sobre piezas.",
                "de": "Der Turm bewegt sich horizontal oder vertikal über beliebig viele freie Felder. Er kann nicht über Figuren springen.",
                "nl": "De toren beweegt horizontaal of verticaal over een willekeurig aantal vrije velden. Hij kan niet over stukken springen."
            }
        },
        {
            "question": {
                "en": "What is 'check' in chess?",
                "es": "¿Qué es 'jaque' en ajedrez?",
                "de": "Was ist 'Schach' im Schachspiel?",
                "nl": "Wat is 'schaak' bij schaken?"
            },
            "options": [
                {
                    "en": "When the king is under direct attack",
                    "es": "Cuando el rey está bajo ataque directo",
                    "de": "Wenn der König direkt angegriffen wird",
                    "nl": "Wanneer de koning direct wordt aangevallen"
                },
                {
                    "en": "When you capture a piece",
                    "es": "Cuando capturas una pieza",
                    "de": "Wenn man eine Figur schlägt",
                    "nl": "Wanneer je een stuk slaat"
                },
                {
                    "en": "The end of the game",
                    "es": "El final del juego",
                    "de": "Das Ende des Spiels",
                    "nl": "Het einde van het spel"
                },
                {
                    "en": "A special move",
                    "es": "Un movimiento especial",
                    "de": "Ein Spezialzug",
                    "nl": "Een speciale zet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Check occurs when the king is under direct attack by an opponent's piece. The player must immediately get out of check.",
                "es": "El jaque ocurre cuando el rey está bajo ataque directo de una pieza del oponente. El jugador debe salir inmediatamente del jaque.",
                "de": "Schach tritt auf, wenn der König direkt von einer gegnerischen Figur angegriffen wird. Der Spieler muss sofort das Schach abwehren.",
                "nl": "Schaak treedt op wanneer de koning direct wordt aangevallen door een stuk van de tegenstander. De speler moet direct uit schaak komen."
            }
        },
        {
            "question": {
                "en": "How many pieces does each player start with?",
                "es": "¿Con cuántas piezas empieza cada jugador?",
                "de": "Mit wie vielen Figuren startet jeder Spieler?",
                "nl": "Met hoeveel stukken begint elke speler?"
            },
            "options": [
                {
                    "en": "16 pieces",
                    "es": "16 piezas",
                    "de": "16 Figuren",
                    "nl": "16 stukken"
                },
                {
                    "en": "32 pieces",
                    "es": "32 piezas",
                    "de": "32 Figuren",
                    "nl": "32 stukken"
                },
                {
                    "en": "8 pieces",
                    "es": "8 piezas",
                    "de": "8 Figuren",
                    "nl": "8 stukken"
                },
                {
                    "en": "12 pieces",
                    "es": "12 piezas",
                    "de": "12 Figuren",
                    "nl": "12 stukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 16 pieces: 8 pawns, 2 rooks, 2 knights, 2 bishops, 1 queen, and 1 king.",
                "es": "Cada jugador comienza con 16 piezas: 8 peones, 2 torres, 2 caballos, 2 alfiles, 1 reina y 1 rey.",
                "de": "Jeder Spieler beginnt mit 16 Figuren: 8 Bauern, 2 Türme, 2 Springer, 2 Läufer, 1 Dame und 1 König.",
                "nl": "Elke speler begint met 16 stukken: 8 pionnen, 2 torens, 2 paarden, 2 lopers, 1 dame en 1 koning."
            }
        },
        {
            "question": {
                "en": "What is a stalemate?",
                "es": "¿Qué es un ahogado?",
                "de": "Was ist ein Patt?",
                "nl": "Wat is een pat?"
            },
            "options": [
                {
                    "en": "When a player has no legal moves and their king is not in check",
                    "es": "Cuando un jugador no tiene movimientos legales y su rey no está en jaque",
                    "de": "Wenn ein Spieler keine legalen Züge hat und sein König nicht im Schach steht",
                    "nl": "Wanneer een speler geen legale zetten heeft en zijn koning niet schaak staat"
                },
                {
                    "en": "When the king is captured",
                    "es": "Cuando el rey es capturado",
                    "de": "Wenn der König geschlagen wird",
                    "nl": "Wanneer de koning wordt geslagen"
                },
                {
                    "en": "When both players agree to draw",
                    "es": "Cuando ambos jugadores acuerdan tablas",
                    "de": "Wenn beide Spieler Remis vereinbaren",
                    "nl": "Wanneer beide spelers remise overeenkomen"
                },
                {
                    "en": "When time runs out",
                    "es": "Cuando se acaba el tiempo",
                    "de": "Wenn die Zeit abläuft",
                    "nl": "Wanneer de tijd op is"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A stalemate occurs when a player has no legal moves available and their king is not in check. The game ends in a draw.",
                "es": "Un ahogado ocurre cuando un jugador no tiene movimientos legales disponibles y su rey no está en jaque. El juego termina en tablas.",
                "de": "Ein Patt tritt auf, wenn ein Spieler keine legalen Züge hat und sein König nicht im Schach steht. Das Spiel endet remis.",
                "nl": "Een pat treedt op wanneer een speler geen legale zetten heeft en zijn koning niet schaak staat. Het spel eindigt in remise."
            }
        },
        {
            "question": {
                "en": "Where is the white king placed at the start?",
                "es": "¿Dónde se coloca el rey blanco al inicio?",
                "de": "Wo steht der weiße König zu Beginn?",
                "nl": "Waar staat de witte koning aan het begin?"
            },
            "options": [
                {
                    "en": "On the e1 square",
                    "es": "En la casilla e1",
                    "de": "Auf dem Feld e1",
                    "nl": "Op het veld e1"
                },
                {
                    "en": "On the d1 square",
                    "es": "En la casilla d1",
                    "de": "Auf dem Feld d1",
                    "nl": "Op het veld d1"
                },
                {
                    "en": "On the f1 square",
                    "es": "En la casilla f1",
                    "de": "Auf dem Feld f1",
                    "nl": "Op het veld f1"
                },
                {
                    "en": "On the c1 square",
                    "es": "En la casilla c1",
                    "de": "Auf dem Feld c1",
                    "nl": "Op het veld c1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The white king starts on square e1, while the white queen starts on d1. Remember: 'Queen on her color' - white queen on light square.",
                "es": "El rey blanco comienza en la casilla e1, mientras que la reina blanca comienza en d1. Recuerda: 'Reina en su color' - reina blanca en casilla clara.",
                "de": "Der weiße König beginnt auf Feld e1, während die weiße Dame auf d1 startet. Merke: 'Dame auf ihrer Farbe' - weiße Dame auf hellem Feld.",
                "nl": "De witte koning begint op veld e1, terwijl de witte dame op d1 begint. Onthoud: 'Dame op haar kleur' - witte dame op licht veld."
            }
        },
        {
            "question": {
                "en": "What is 'en passant'?",
                "es": "¿Qué es 'al paso'?",
                "de": "Was ist 'en passant'?",
                "nl": "Wat is 'en passant'?"
            },
            "options": [
                {
                    "en": "A special pawn capture when an enemy pawn moves two squares forward",
                    "es": "Una captura especial de peón cuando un peón enemigo avanza dos casillas",
                    "de": "Ein spezieller Bauernschlag wenn ein feindlicher Bauer zwei Felder vorrückt",
                    "nl": "Een speciale pion slag wanneer een vijandelijke pion twee velden vooruit gaat"
                },
                {
                    "en": "Moving the king two squares",
                    "es": "Mover el rey dos casillas",
                    "de": "Den König zwei Felder bewegen",
                    "nl": "De koning twee velden bewegen"
                },
                {
                    "en": "Promoting a pawn",
                    "es": "Promocionar un peón",
                    "de": "Einen Bauern umwandeln",
                    "nl": "Een pion promoveren"
                },
                {
                    "en": "Capturing the queen",
                    "es": "Capturar la reina",
                    "de": "Die Dame schlagen",
                    "nl": "De dame slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "En passant is a special pawn capture that can occur when an enemy pawn moves two squares forward from its starting position, passing an opposing pawn.",
                "es": "Al paso es una captura especial de peón que puede ocurrir cuando un peón enemigo avanza dos casillas desde su posición inicial, pasando un peón contrario.",
                "de": "En passant ist ein spezieller Bauernschlag, der erfolgen kann, wenn ein feindlicher Bauer zwei Felder aus seiner Grundstellung vorrückt und dabei einen gegnerischen Bauern passiert.",
                "nl": "En passant is een speciale pion slag die kan plaatsvinden wanneer een vijandelijke pion twee velden vooruit gaat vanuit zijn startpositie, langs een tegengestelde pion."
            }
        },
        {
            "question": {
                "en": "Can a king capture other pieces?",
                "es": "¿Puede un rey capturar otras piezas?",
                "de": "Kann ein König andere Figuren schlagen?",
                "nl": "Kan een koning andere stukken slaan?"
            },
            "options": [
                {
                    "en": "Yes, if the piece is not defended",
                    "es": "Sí, si la pieza no está defendida",
                    "de": "Ja, wenn die Figur nicht verteidigt ist",
                    "nl": "Ja, als het stuk niet verdedigd wordt"
                },
                {
                    "en": "No, the king cannot capture",
                    "es": "No, el rey no puede capturar",
                    "de": "Nein, der König kann nicht schlagen",
                    "nl": "Nee, de koning kan niet slaan"
                },
                {
                    "en": "Only pawns",
                    "es": "Solo peones",
                    "de": "Nur Bauern",
                    "nl": "Alleen pionnen"
                },
                {
                    "en": "Only in endgames",
                    "es": "Solo en finales",
                    "de": "Nur im Endspiel",
                    "nl": "Alleen in het eindspel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The king can capture any undefended enemy piece that is one square away. However, the king cannot move into check.",
                "es": "El rey puede capturar cualquier pieza enemiga no defendida que esté a una casilla de distancia. Sin embargo, el rey no puede moverse a jaque.",
                "de": "Der König kann jede unverteidigte gegnerische Figur schlagen, die ein Feld entfernt ist. Der König darf sich jedoch nicht ins Schach bewegen.",
                "nl": "De koning kan elk onverdedigd vijandelijk stuk slaan dat één veld verwijderd is. De koning mag zich echter niet in schaak bewegen."
            }
        },
        {
            "question": {
                "en": "How does the king move?",
                "es": "¿Cómo se mueve el rey?",
                "de": "Wie bewegt sich der König?",
                "nl": "Hoe beweegt de koning?"
            },
            "options": [
                {
                    "en": "One square in any direction",
                    "es": "Una casilla en cualquier dirección",
                    "de": "Ein Feld in jede Richtung",
                    "nl": "Één veld in elke richting"
                },
                {
                    "en": "Two squares in any direction",
                    "es": "Dos casillas en cualquier dirección",
                    "de": "Zwei Felder in jede Richtung",
                    "nl": "Twee velden in elke richting"
                },
                {
                    "en": "Like a knight",
                    "es": "Como un caballo",
                    "de": "Wie ein Springer",
                    "nl": "Als een paard"
                },
                {
                    "en": "Only forward",
                    "es": "Solo hacia adelante",
                    "de": "Nur vorwärts",
                    "nl": "Alleen vooruit"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The king moves exactly one square in any direction: horizontally, vertically, or diagonally, as long as the square is not under attack.",
                "es": "El rey se mueve exactamente una casilla en cualquier dirección: horizontal, vertical o diagonal, siempre que la casilla no esté bajo ataque.",
                "de": "Der König bewegt sich genau ein Feld in jede Richtung: horizontal, vertikal oder diagonal, solange das Feld nicht angegriffen wird.",
                "nl": "De koning beweegt precies één veld in elke richting: horizontaal, verticaal of diagonaal, zolang het veld niet wordt aangevallen."
            }
        },
        {
            "question": {
                "en": "What is a draw in chess?",
                "es": "¿Qué son las tablas en ajedrez?",
                "de": "Was ist ein Remis im Schach?",
                "nl": "Wat is remise bij schaken?"
            },
            "options": [
                {
                    "en": "When neither player wins and the game ends in a tie",
                    "es": "Cuando ningún jugador gana y el juego termina en empate",
                    "de": "Wenn kein Spieler gewinnt und das Spiel unentschieden endet",
                    "nl": "Wanneer geen speler wint en het spel in gelijkspel eindigt"
                },
                {
                    "en": "When both kings are captured",
                    "es": "Cuando ambos reyes son capturados",
                    "de": "Wenn beide Könige geschlagen werden",
                    "nl": "Wanneer beide koningen worden geslagen"
                },
                {
                    "en": "When time runs out",
                    "es": "Cuando se acaba el tiempo",
                    "de": "Wenn die Zeit abläuft",
                    "nl": "Wanneer de tijd op is"
                },
                {
                    "en": "When a player gives up",
                    "es": "Cuando un jugador se rinde",
                    "de": "Wenn ein Spieler aufgibt",
                    "nl": "Wanneer een speler opgeeft"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A draw is when the game ends without a winner. This can happen through stalemate, insufficient material, threefold repetition, or mutual agreement.",
                "es": "Las tablas ocurren cuando el juego termina sin ganador. Esto puede suceder por ahogado, material insuficiente, repetición triple o acuerdo mutuo.",
                "de": "Ein Remis ist, wenn das Spiel ohne Sieger endet. Dies kann durch Patt, unzureichendes Material, dreifache Stellungswiederholung oder gegenseitige Vereinbarung geschehen.",
                "nl": "Remise is wanneer het spel zonder winnaar eindigt. Dit kan gebeuren door pat, onvoldoende materiaal, drievoudige herhaling of wederzijdse overeenstemming."
            }
        },
        {
            "question": {
                "en": "Which pieces start in the corners of the board?",
                "es": "¿Qué piezas comienzan en las esquinas del tablero?",
                "de": "Welche Figuren stehen zu Beginn in den Ecken des Bretts?",
                "nl": "Welke stukken beginnen in de hoeken van het bord?"
            },
            "options": [
                {
                    "en": "Rooks",
                    "es": "Torres",
                    "de": "Türme",
                    "nl": "Torens"
                },
                {
                    "en": "Knights",
                    "es": "Caballos",
                    "de": "Springer",
                    "nl": "Paarden"
                },
                {
                    "en": "Bishops",
                    "es": "Alfiles",
                    "de": "Läufer",
                    "nl": "Lopers"
                },
                {
                    "en": "Pawns",
                    "es": "Peones",
                    "de": "Bauern",
                    "nl": "Pionnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Rooks start in the corners of the board (a1, h1 for white and a8, h8 for black). They are major pieces worth about 5 pawns each.",
                "es": "Las torres comienzan en las esquinas del tablero (a1, h1 para blancas y a8, h8 para negras). Son piezas mayores que valen unos 5 peones cada una.",
                "de": "Türme stehen zu Beginn in den Ecken des Bretts (a1, h1 für Weiß und a8, h8 für Schwarz). Sie sind Schwerfiguren im Wert von etwa 5 Bauern.",
                "nl": "Torens beginnen in de hoeken van het bord (a1, h1 voor wit en a8, h8 voor zwart). Het zijn zware stukken met een waarde van ongeveer 5 pionnen."
            }
        },
        {
            "question": {
                "en": "What is the starting position of the board called?",
                "es": "¿Cómo se llama la posición inicial del tablero?",
                "de": "Wie nennt man die Anfangsstellung des Bretts?",
                "nl": "Hoe heet de startpositie van het bord?"
            },
            "options": [
                {
                    "en": "The initial position or starting position",
                    "es": "La posición inicial o posición de inicio",
                    "de": "Die Anfangsstellung oder Grundstellung",
                    "nl": "De beginopstelling of startpositie"
                },
                {
                    "en": "The opening",
                    "es": "La apertura",
                    "de": "Die Eröffnung",
                    "nl": "De opening"
                },
                {
                    "en": "The setup",
                    "es": "La configuración",
                    "de": "Die Aufstellung",
                    "nl": "De opstelling"
                },
                {
                    "en": "The beginning",
                    "es": "El comienzo",
                    "de": "Der Anfang",
                    "nl": "Het begin"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The starting arrangement of pieces is called the initial position or starting position, with all pieces placed in their designated squares.",
                "es": "La disposición inicial de las piezas se llama posición inicial o posición de inicio, con todas las piezas colocadas en sus casillas designadas.",
                "de": "Die Startaufstellung der Figuren nennt man Anfangsstellung oder Grundstellung, wobei alle Figuren auf ihren festgelegten Feldern stehen.",
                "nl": "De startopstelling van de stukken heet de beginopstelling of startpositie, met alle stukken op hun aangewezen velden."
            }
        },
        {
            "question": {
                "en": "Which file (column) is labeled 'a' on the chess board?",
                "es": "¿Qué columna está etiquetada como 'a' en el tablero de ajedrez?",
                "de": "Welche Linie (Spalte) ist auf dem Schachbrett mit 'a' bezeichnet?",
                "nl": "Welke lijn (kolom) is gelabeld als 'a' op het schaakbord?"
            },
            "options": [
                {
                    "en": "The leftmost file from white's perspective",
                    "es": "La columna más a la izquierda desde la perspectiva de las blancas",
                    "de": "Die Linie ganz links aus Sicht von Weiß",
                    "nl": "De meest linkse lijn vanuit het perspectief van wit"
                },
                {
                    "en": "The rightmost file",
                    "es": "La columna más a la derecha",
                    "de": "Die Linie ganz rechts",
                    "nl": "De meest rechtse lijn"
                },
                {
                    "en": "The center file",
                    "es": "La columna central",
                    "de": "Die mittlere Linie",
                    "nl": "De middelste lijn"
                },
                {
                    "en": "The second file from left",
                    "es": "La segunda columna desde la izquierda",
                    "de": "Die zweite Linie von links",
                    "nl": "De tweede lijn van links"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Files are labeled a-h from left to right when viewed from white's perspective. The 'a' file is on white's left side.",
                "es": "Las columnas se etiquetan de a-h de izquierda a derecha vistas desde la perspectiva de las blancas. La columna 'a' está en el lado izquierdo de las blancas.",
                "de": "Linien werden von a-h von links nach rechts aus Sicht von Weiß bezeichnet. Die 'a'-Linie ist auf der linken Seite von Weiß.",
                "nl": "Lijnen worden gelabeld van a-h van links naar rechts gezien vanuit het perspectief van wit. De 'a'-lijn is aan de linkerkant van wit."
            }
        },
        {
            "question": {
                "en": "What is the value of a queen in terms of pawns?",
                "es": "¿Cuál es el valor de una reina en términos de peones?",
                "de": "Was ist der Wert einer Dame in Bauerneinheiten?",
                "nl": "Wat is de waarde van een dame in termen van pionnen?"
            },
            "options": [
                {
                    "en": "About 9 pawns",
                    "es": "Aproximadamente 9 peones",
                    "de": "Etwa 9 Bauern",
                    "nl": "Ongeveer 9 pionnen"
                },
                {
                    "en": "About 5 pawns",
                    "es": "Aproximadamente 5 peones",
                    "de": "Etwa 5 Bauern",
                    "nl": "Ongeveer 5 pionnen"
                },
                {
                    "en": "About 3 pawns",
                    "es": "Aproximadamente 3 peones",
                    "de": "Etwa 3 Bauern",
                    "nl": "Ongeveer 3 pionnen"
                },
                {
                    "en": "About 15 pawns",
                    "es": "Aproximadamente 15 peones",
                    "de": "Etwa 15 Bauern",
                    "nl": "Ongeveer 15 pionnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The queen is valued at approximately 9 pawns, making it the most powerful piece. Rooks are worth 5, bishops and knights 3 each.",
                "es": "La reina vale aproximadamente 9 peones, lo que la convierte en la pieza más poderosa. Las torres valen 5, alfiles y caballos 3 cada uno.",
                "de": "Die Dame hat einen Wert von etwa 9 Bauern und ist damit die stärkste Figur. Türme sind 5 wert, Läufer und Springer je 3.",
                "nl": "De dame is ongeveer 9 pionnen waard, wat haar het krachtigste stuk maakt. Torens zijn 5 waard, lopers en paarden elk 3."
            }
        },
        {
            "question": {
                "en": "What is the term for the rows on a chess board?",
                "es": "¿Cuál es el término para las filas en un tablero de ajedrez?",
                "de": "Wie nennt man die Reihen auf einem Schachbrett?",
                "nl": "Wat is de term voor de rijen op een schaakbord?"
            },
            "options": [
                {
                    "en": "Ranks",
                    "es": "Filas",
                    "de": "Reihen",
                    "nl": "Rijen"
                },
                {
                    "en": "Files",
                    "es": "Columnas",
                    "de": "Linien",
                    "nl": "Lijnen"
                },
                {
                    "en": "Diagonals",
                    "es": "Diagonales",
                    "de": "Diagonalen",
                    "nl": "Diagonalen"
                },
                {
                    "en": "Lines",
                    "es": "Líneas",
                    "de": "Linien",
                    "nl": "Lijnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The horizontal rows are called ranks (numbered 1-8), while the vertical columns are called files (labeled a-h).",
                "es": "Las filas horizontales se llaman filas (numeradas 1-8), mientras que las columnas verticales se llaman columnas (etiquetadas a-h).",
                "de": "Die horizontalen Reihen heißen Reihen (nummeriert 1-8), während die vertikalen Spalten Linien (bezeichnet a-h) genannt werden.",
                "nl": "De horizontale rijen heten rijen (genummerd 1-8), terwijl de verticale kolommen lijnen (gelabeld a-h) worden genoemd."
            }
        },
        {
            "question": {
                "en": "Can pawns move backwards?",
                "es": "¿Pueden los peones moverse hacia atrás?",
                "de": "Können Bauern rückwärts ziehen?",
                "nl": "Kunnen pionnen achteruit bewegen?"
            },
            "options": [
                {
                    "en": "No, pawns can only move forward",
                    "es": "No, los peones solo pueden avanzar",
                    "de": "Nein, Bauern können nur vorwärts ziehen",
                    "nl": "Nee, pionnen kunnen alleen vooruit"
                },
                {
                    "en": "Yes, one square backwards",
                    "es": "Sí, una casilla hacia atrás",
                    "de": "Ja, ein Feld rückwärts",
                    "nl": "Ja, één veld achteruit"
                },
                {
                    "en": "Only when capturing",
                    "es": "Solo al capturar",
                    "de": "Nur beim Schlagen",
                    "nl": "Alleen bij slaan"
                },
                {
                    "en": "Only in the endgame",
                    "es": "Solo en el final",
                    "de": "Nur im Endspiel",
                    "nl": "Alleen in het eindspel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Pawns are the only pieces that cannot move backwards. They can only move forward, making pawn moves irreversible decisions.",
                "es": "Los peones son las únicas piezas que no pueden retroceder. Solo pueden avanzar, haciendo los movimientos de peón decisiones irreversibles.",
                "de": "Bauern sind die einzigen Figuren, die nicht rückwärts ziehen können. Sie können nur vorwärts ziehen, was Bauernzüge zu unwiderruflichen Entscheidungen macht.",
                "nl": "Pionnen zijn de enige stukken die niet achteruit kunnen bewegen. Ze kunnen alleen vooruit, waardoor pionzetten onomkeerbare beslissingen zijn."
            }
        },
        {
            "question": {
                "en": "What is the 50-move rule?",
                "es": "¿Qué es la regla de los 50 movimientos?",
                "de": "Was ist die 50-Züge-Regel?",
                "nl": "Wat is de 50-zetten regel?"
            },
            "options": [
                {
                    "en": "A draw can be claimed after 50 moves without a pawn move or capture",
                    "es": "Se puede reclamar tablas después de 50 movimientos sin mover un peón o captura",
                    "de": "Remis kann nach 50 Zügen ohne Bauernzug oder Schlag beansprucht werden",
                    "nl": "Remise kan worden geclaimd na 50 zetten zonder pionzet of slag"
                },
                {
                    "en": "The game ends after 50 moves",
                    "es": "El juego termina después de 50 movimientos",
                    "de": "Das Spiel endet nach 50 Zügen",
                    "nl": "Het spel eindigt na 50 zetten"
                },
                {
                    "en": "You must move within 50 seconds",
                    "es": "Debes mover en 50 segundos",
                    "de": "Man muss innerhalb von 50 Sekunden ziehen",
                    "nl": "Je moet binnen 50 seconden zetten"
                },
                {
                    "en": "Each player gets 50 moves total",
                    "es": "Cada jugador tiene 50 movimientos en total",
                    "de": "Jeder Spieler hat insgesamt 50 Züge",
                    "nl": "Elke speler krijgt 50 zetten totaal"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The 50-move rule allows a player to claim a draw if 50 moves have been made by both players without any pawn moves or captures.",
                "es": "La regla de los 50 movimientos permite a un jugador reclamar tablas si ambos jugadores han hecho 50 movimientos sin mover peones o capturas.",
                "de": "Die 50-Züge-Regel erlaubt es einem Spieler, Remis zu beanspruchen, wenn beide Spieler 50 Züge ohne Bauernzüge oder Schläge gemacht haben.",
                "nl": "De 50-zetten regel staat een speler toe remise te claimen als beide spelers 50 zetten hebben gedaan zonder pionzetten of slagen."
            }
        },
        {
            "question": {
                "en": "What does 'resignation' mean in chess?",
                "es": "¿Qué significa 'rendirse' en ajedrez?",
                "de": "Was bedeutet 'Aufgabe' im Schach?",
                "nl": "Wat betekent 'opgeven' bij schaken?"
            },
            "options": [
                {
                    "en": "A player voluntarily gives up and loses the game",
                    "es": "Un jugador se rinde voluntariamente y pierde el juego",
                    "de": "Ein Spieler gibt freiwillig auf und verliert das Spiel",
                    "nl": "Een speler geeft vrijwillig op en verliest het spel"
                },
                {
                    "en": "The game is paused",
                    "es": "El juego se pausa",
                    "de": "Das Spiel wird pausiert",
                    "nl": "Het spel wordt gepauzeerd"
                },
                {
                    "en": "The game restarts",
                    "es": "El juego se reinicia",
                    "de": "Das Spiel startet neu",
                    "nl": "Het spel herstart"
                },
                {
                    "en": "A draw is agreed",
                    "es": "Se acuerdan tablas",
                    "de": "Remis wird vereinbart",
                    "nl": "Remise wordt overeengekomen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Resignation occurs when a player voluntarily gives up the game, typically by tipping over their king or saying 'I resign'. This results in a loss.",
                "es": "La rendición ocurre cuando un jugador abandona voluntariamente el juego, típicamente volteando su rey o diciendo 'Me rindo'. Esto resulta en una derrota.",
                "de": "Aufgabe erfolgt, wenn ein Spieler das Spiel freiwillig aufgibt, typischerweise durch Umlegen des Königs oder mit den Worten 'Ich gebe auf'. Dies führt zu einer Niederlage.",
                "nl": "Opgeven gebeurt wanneer een speler vrijwillig het spel opgeeft, meestal door de koning om te leggen of 'Ik geef op' te zeggen. Dit resulteert in verlies."
            }
        },
        {
            "question": {
                "en": "Which piece is worth approximately 3 pawns?",
                "es": "¿Qué pieza vale aproximadamente 3 peones?",
                "de": "Welche Figur ist etwa 3 Bauern wert?",
                "nl": "Welk stuk is ongeveer 3 pionnen waard?"
            },
            "options": [
                {
                    "en": "Bishop or Knight",
                    "es": "Alfil o Caballo",
                    "de": "Läufer oder Springer",
                    "nl": "Loper of Paard"
                },
                {
                    "en": "Rook",
                    "es": "Torre",
                    "de": "Turm",
                    "nl": "Toren"
                },
                {
                    "en": "Queen",
                    "es": "Reina",
                    "de": "Dame",
                    "nl": "Dame"
                },
                {
                    "en": "King",
                    "es": "Rey",
                    "de": "König",
                    "nl": "Koning"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Both bishops and knights are valued at approximately 3 pawns each. They are considered minor pieces of roughly equal value.",
                "es": "Tanto los alfiles como los caballos valen aproximadamente 3 peones cada uno. Se consideran piezas menores de valor aproximadamente igual.",
                "de": "Sowohl Läufer als auch Springer haben einen Wert von etwa 3 Bauern. Sie gelten als Leichtfiguren von ungefähr gleichem Wert.",
                "nl": "Zowel lopers als paarden zijn ongeveer 3 pionnen waard. Ze worden beschouwd als lichte stukken van ongeveer gelijke waarde."
            }
        },
        {
            "question": {
                "en": "What is the center of the chess board?",
                "es": "¿Cuál es el centro del tablero de ajedrez?",
                "de": "Was ist das Zentrum des Schachbretts?",
                "nl": "Wat is het centrum van het schaakbord?"
            },
            "options": [
                {
                    "en": "The four central squares: e4, e5, d4, d5",
                    "es": "Las cuatro casillas centrales: e4, e5, d4, d5",
                    "de": "Die vier zentralen Felder: e4, e5, d4, d5",
                    "nl": "De vier centrale velden: e4, e5, d4, d5"
                },
                {
                    "en": "The entire middle area",
                    "es": "Toda el área central",
                    "de": "Der gesamte mittlere Bereich",
                    "nl": "Het hele middengebied"
                },
                {
                    "en": "Squares c3 to f6",
                    "es": "Casillas c3 a f6",
                    "de": "Felder c3 bis f6",
                    "nl": "Velden c3 tot f6"
                },
                {
                    "en": "The 4th and 5th ranks",
                    "es": "Las filas 4 y 5",
                    "de": "Die 4. und 5. Reihe",
                    "nl": "De 4e en 5e rijen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The center consists of the four squares e4, e5, d4, and d5. Controlling the center is a fundamental strategic principle in chess.",
                "es": "El centro consiste en las cuatro casillas e4, e5, d4 y d5. Controlar el centro es un principio estratégico fundamental en ajedrez.",
                "de": "Das Zentrum besteht aus den vier Feldern e4, e5, d4 und d5. Die Kontrolle des Zentrums ist ein grundlegendes strategisches Prinzip im Schach.",
                "nl": "Het centrum bestaat uit de vier velden e4, e5, d4 en d5. Het controleren van het centrum is een fundamenteel strategisch principe in schaken."
            }
        },
        {
            "question": {
                "en": "What color square is a1?",
                "es": "¿De qué color es la casilla a1?",
                "de": "Welche Farbe hat das Feld a1?",
                "nl": "Welke kleur heeft veld a1?"
            },
            "options": [
                {
                    "en": "Dark square",
                    "es": "Casilla oscura",
                    "de": "Dunkles Feld",
                    "nl": "Donker veld"
                },
                {
                    "en": "Light square",
                    "es": "Casilla clara",
                    "de": "Helles Feld",
                    "nl": "Licht veld"
                },
                {
                    "en": "It varies",
                    "es": "Varía",
                    "de": "Es variiert",
                    "nl": "Het varieert"
                },
                {
                    "en": "Always white",
                    "es": "Siempre blanca",
                    "de": "Immer weiß",
                    "nl": "Altijd wit"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The a1 square is always a dark square. The board is oriented so that each player has a light square on their right corner.",
                "es": "La casilla a1 siempre es una casilla oscura. El tablero se orienta para que cada jugador tenga una casilla clara en su esquina derecha.",
                "de": "Das Feld a1 ist immer ein dunkles Feld. Das Brett wird so ausgerichtet, dass jeder Spieler ein helles Feld in seiner rechten Ecke hat.",
                "nl": "Het veld a1 is altijd een donker veld. Het bord wordt zo georiënteerd dat elke speler een licht veld in zijn rechterhoek heeft."
            }
        },
        {
            "question": {
                "en": "What is a 'fork' in chess?",
                "es": "¿Qué es un 'tenedor' en ajedrez?",
                "de": "Was ist eine 'Gabel' im Schach?",
                "nl": "Wat is een 'vork' bij schaken?"
            },
            "options": [
                {
                    "en": "When one piece attacks two or more enemy pieces at once",
                    "es": "Cuando una pieza ataca dos o más piezas enemigas a la vez",
                    "de": "Wenn eine Figur zwei oder mehr gegnerische Figuren gleichzeitig angreift",
                    "nl": "Wanneer één stuk twee of meer vijandelijke stukken tegelijk aanvalt"
                },
                {
                    "en": "A type of opening",
                    "es": "Un tipo de apertura",
                    "de": "Eine Art von Eröffnung",
                    "nl": "Een type opening"
                },
                {
                    "en": "A defensive move",
                    "es": "Un movimiento defensivo",
                    "de": "Ein Verteidigungszug",
                    "nl": "Een verdedigende zet"
                },
                {
                    "en": "An endgame position",
                    "es": "Una posición de final",
                    "de": "Eine Endspielstellung",
                    "nl": "Een eindspelpositie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A fork occurs when a single piece attacks two or more of the opponent's pieces simultaneously, forcing them to save only one.",
                "es": "Un tenedor ocurre cuando una sola pieza ataca dos o más piezas del oponente simultáneamente, forzándolo a salvar solo una.",
                "de": "Eine Gabel entsteht, wenn eine einzelne Figur zwei oder mehr gegnerische Figuren gleichzeitig angreift und der Gegner nur eine retten kann.",
                "nl": "Een vork ontstaat wanneer een enkel stuk twee of meer stukken van de tegenstander tegelijkertijd aanvalt, waardoor hij er maar één kan redden."
            }
        },
        {
            "question": {
                "en": "How many bishops does each player start with?",
                "es": "¿Con cuántos alfiles comienza cada jugador?",
                "de": "Mit wie vielen Läufern startet jeder Spieler?",
                "nl": "Met hoeveel lopers begint elke speler?"
            },
            "options": [
                {
                    "en": "2 bishops",
                    "es": "2 alfiles",
                    "de": "2 Läufer",
                    "nl": "2 lopers"
                },
                {
                    "en": "1 bishop",
                    "es": "1 alfil",
                    "de": "1 Läufer",
                    "nl": "1 loper"
                },
                {
                    "en": "3 bishops",
                    "es": "3 alfiles",
                    "de": "3 Läufer",
                    "nl": "3 lopers"
                },
                {
                    "en": "4 bishops",
                    "es": "4 alfiles",
                    "de": "4 Läufer",
                    "nl": "4 lopers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 2 bishops - one on a light square (c1/f1 for white) and one on a dark square.",
                "es": "Cada jugador comienza con 2 alfiles - uno en casilla clara (c1/f1 para blancas) y uno en casilla oscura.",
                "de": "Jeder Spieler startet mit 2 Läufern - einer auf einem hellen Feld (c1/f1 für Weiß) und einer auf einem dunklen Feld.",
                "nl": "Elke speler begint met 2 lopers - één op een licht veld (c1/f1 voor wit) en één op een donker veld."
            }
        },
        {
            "question": {
                "en": "What is a 'pin' in chess?",
                "es": "¿Qué es una 'clavada' en ajedrez?",
                "de": "Was ist eine 'Fesselung' im Schach?",
                "nl": "Wat is een 'penning' bij schaken?"
            },
            "options": [
                {
                    "en": "When a piece cannot move without exposing a more valuable piece to attack",
                    "es": "Cuando una pieza no puede moverse sin exponer una pieza más valiosa al ataque",
                    "de": "Wenn eine Figur nicht ziehen kann, ohne eine wertvollere Figur einem Angriff auszusetzen",
                    "nl": "Wanneer een stuk niet kan bewegen zonder een waardevoller stuk bloot te stellen aan aanval"
                },
                {
                    "en": "A special pawn move",
                    "es": "Un movimiento especial de peón",
                    "de": "Ein spezieller Bauernzug",
                    "nl": "Een speciale pionzet"
                },
                {
                    "en": "The final move of a game",
                    "es": "El movimiento final del juego",
                    "de": "Der letzte Zug des Spiels",
                    "nl": "De laatste zet van het spel"
                },
                {
                    "en": "A type of draw",
                    "es": "Un tipo de tablas",
                    "de": "Eine Art von Remis",
                    "nl": "Een type remise"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pin occurs when a piece cannot or should not move because it would expose a more valuable piece (often the king) behind it to attack.",
                "es": "Una clavada ocurre cuando una pieza no puede o no debe moverse porque expondría una pieza más valiosa (a menudo el rey) detrás de ella al ataque.",
                "de": "Eine Fesselung tritt auf, wenn eine Figur nicht ziehen kann oder sollte, weil sie eine wertvollere Figur (oft den König) dahinter einem Angriff aussetzen würde.",
                "nl": "Een penning treedt op wanneer een stuk niet kan of niet zou moeten bewegen omdat het een waardevoller stuk (vaak de koning) erachter bloot zou stellen aan aanval."
            }
        },
        {
            "question": {
                "en": "Can a pawn move two squares on its first move?",
                "es": "¿Puede un peón moverse dos casillas en su primer movimiento?",
                "de": "Kann ein Bauer bei seinem ersten Zug zwei Felder ziehen?",
                "nl": "Kan een pion twee velden bewegen bij zijn eerste zet?"
            },
            "options": [
                {
                    "en": "Yes, from its starting position",
                    "es": "Sí, desde su posición inicial",
                    "de": "Ja, aus seiner Grundstellung",
                    "nl": "Ja, vanuit zijn startpositie"
                },
                {
                    "en": "No, only one square",
                    "es": "No, solo una casilla",
                    "de": "Nein, nur ein Feld",
                    "nl": "Nee, alleen één veld"
                },
                {
                    "en": "Only when capturing",
                    "es": "Solo al capturar",
                    "de": "Nur beim Schlagen",
                    "nl": "Alleen bij slaan"
                },
                {
                    "en": "Only in the endgame",
                    "es": "Solo en el final",
                    "de": "Nur im Endspiel",
                    "nl": "Alleen in het eindspel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pawn can move two squares forward on its first move from its starting position. After that, it can only move one square at a time.",
                "es": "Un peón puede avanzar dos casillas en su primer movimiento desde su posición inicial. Después, solo puede moverse una casilla a la vez.",
                "de": "Ein Bauer kann bei seinem ersten Zug aus der Grundstellung zwei Felder vorwärts ziehen. Danach kann er nur noch ein Feld ziehen.",
                "nl": "Een pion kan twee velden vooruit bij zijn eerste zet vanuit zijn startpositie. Daarna kan hij slechts één veld per keer bewegen."
            }
        },
        {
            "question": {
                "en": "What happens if you touch a piece during your turn?",
                "es": "¿Qué pasa si tocas una pieza durante tu turno?",
                "de": "Was passiert, wenn man eine Figur während seines Zuges berührt?",
                "nl": "Wat gebeurt er als je een stuk aanraakt tijdens je beurt?"
            },
            "options": [
                {
                    "en": "You must move it if it has a legal move (touch-move rule)",
                    "es": "Debes moverla si tiene un movimiento legal (regla de pieza tocada)",
                    "de": "Man muss sie ziehen, wenn sie einen legalen Zug hat (Berührt-Geführt-Regel)",
                    "nl": "Je moet het verzetten als het een legale zet heeft (aangeraakt-verzet regel)"
                },
                {
                    "en": "Nothing happens",
                    "es": "No pasa nada",
                    "de": "Nichts passiert",
                    "nl": "Er gebeurt niets"
                },
                {
                    "en": "You lose your turn",
                    "es": "Pierdes tu turno",
                    "de": "Man verliert seinen Zug",
                    "nl": "Je verliest je beurt"
                },
                {
                    "en": "You get a warning",
                    "es": "Recibes una advertencia",
                    "de": "Man bekommt eine Verwarnung",
                    "nl": "Je krijgt een waarschuwing"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The touch-move rule states that if you touch a piece that has a legal move, you must move it. Say 'J'adoube' (I adjust) to adjust pieces without moving.",
                "es": "La regla de pieza tocada establece que si tocas una pieza que tiene un movimiento legal, debes moverla. Di 'Compongo' para ajustar piezas sin mover.",
                "de": "Die Berührt-Geführt-Regel besagt, dass man eine berührte Figur ziehen muss, wenn sie einen legalen Zug hat. Sagt man 'J'adoube', kann man Figuren zurechtrücken.",
                "nl": "De aangeraakt-verzet regel stelt dat als je een stuk aanraakt dat een legale zet heeft, je het moet verzetten. Zeg 'J'adoube' om stukken recht te zetten."
            }
        },
        {
            "question": {
                "en": "What is the quickest possible checkmate in chess?",
                "es": "¿Cuál es el jaque mate más rápido posible en ajedrez?",
                "de": "Was ist das schnellstmögliche Schachmatt?",
                "nl": "Wat is het snelst mogelijke schaakmat?"
            },
            "options": [
                {
                    "en": "2 moves (Fool's Mate)",
                    "es": "2 movimientos (Mate del Loco)",
                    "de": "2 Züge (Narrenmatt)",
                    "nl": "2 zetten (Narrenmat)"
                },
                {
                    "en": "4 moves",
                    "es": "4 movimientos",
                    "de": "4 Züge",
                    "nl": "4 zetten"
                },
                {
                    "en": "6 moves",
                    "es": "6 movimientos",
                    "de": "6 Züge",
                    "nl": "6 zetten"
                },
                {
                    "en": "10 moves",
                    "es": "10 movimientos",
                    "de": "10 Züge",
                    "nl": "10 zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Fool's Mate is the fastest checkmate possible, occurring after just 2 moves by each player when one side makes terrible opening moves.",
                "es": "El Mate del Loco es el jaque mate más rápido posible, ocurriendo después de solo 2 movimientos de cada jugador cuando un lado hace movimientos de apertura terribles.",
                "de": "Das Narrenmatt ist das schnellstmögliche Schachmatt, das nach nur 2 Zügen jedes Spielers eintritt, wenn eine Seite schreckliche Eröffnungszüge macht.",
                "nl": "Narrenmat is het snelst mogelijke schaakmat, dat optreedt na slechts 2 zetten van elke speler wanneer één kant vreselijke openingszetten doet."
            }
        },
        {
            "question": {
                "en": "What is the name for the phase after the opening?",
                "es": "¿Cómo se llama la fase después de la apertura?",
                "de": "Wie nennt man die Phase nach der Eröffnung?",
                "nl": "Hoe heet de fase na de opening?"
            },
            "options": [
                {
                    "en": "Middlegame",
                    "es": "Medio juego",
                    "de": "Mittelspiel",
                    "nl": "Middenspel"
                },
                {
                    "en": "Endgame",
                    "es": "Final",
                    "de": "Endspiel",
                    "nl": "Eindspel"
                },
                {
                    "en": "Development",
                    "es": "Desarrollo",
                    "de": "Entwicklung",
                    "nl": "Ontwikkeling"
                },
                {
                    "en": "Transition",
                    "es": "Transición",
                    "de": "Übergang",
                    "nl": "Overgang"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The middlegame is the phase that follows the opening, where most pieces are developed and players execute their strategic plans.",
                "es": "El medio juego es la fase que sigue a la apertura, donde la mayoría de las piezas están desarrolladas y los jugadores ejecutan sus planes estratégicos.",
                "de": "Das Mittelspiel ist die Phase nach der Eröffnung, in der die meisten Figuren entwickelt sind und die Spieler ihre strategischen Pläne umsetzen.",
                "nl": "Het middenspel is de fase die volgt op de opening, waar de meeste stukken ontwikkeld zijn en spelers hun strategische plannen uitvoeren."
            }
        },
        {
            "question": {
                "en": "How many knights does each player start with?",
                "es": "¿Con cuántos caballos comienza cada jugador?",
                "de": "Mit wie vielen Springern startet jeder Spieler?",
                "nl": "Met hoeveel paarden begint elke speler?"
            },
            "options": [
                {
                    "en": "2 knights",
                    "es": "2 caballos",
                    "de": "2 Springer",
                    "nl": "2 paarden"
                },
                {
                    "en": "1 knight",
                    "es": "1 caballo",
                    "de": "1 Springer",
                    "nl": "1 paard"
                },
                {
                    "en": "3 knights",
                    "es": "3 caballos",
                    "de": "3 Springer",
                    "nl": "3 paarden"
                },
                {
                    "en": "4 knights",
                    "es": "4 caballos",
                    "de": "4 Springer",
                    "nl": "4 paarden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 2 knights, positioned on b1 and g1 for white, and b8 and g8 for black.",
                "es": "Cada jugador comienza con 2 caballos, posicionados en b1 y g1 para las blancas, y b8 y g8 para las negras.",
                "de": "Jeder Spieler startet mit 2 Springern, positioniert auf b1 und g1 für Weiß, und b8 und g8 für Schwarz.",
                "nl": "Elke speler begint met 2 paarden, gepositioneerd op b1 en g1 voor wit, en b8 en g8 voor zwart."
            }
        },
        {
            "question": {
                "en": "What is 'development' in chess?",
                "es": "¿Qué es el 'desarrollo' en ajedrez?",
                "de": "Was ist 'Entwicklung' im Schach?",
                "nl": "Wat is 'ontwikkeling' bij schaken?"
            },
            "options": [
                {
                    "en": "Moving pieces from their starting positions to more active squares",
                    "es": "Mover piezas desde sus posiciones iniciales a casillas más activas",
                    "de": "Figuren von ihren Ausgangsstellungen auf aktivere Felder ziehen",
                    "nl": "Stukken van hun startposities naar actievere velden verplaatsen"
                },
                {
                    "en": "Promoting pawns",
                    "es": "Promocionar peones",
                    "de": "Bauern umwandeln",
                    "nl": "Pionnen promoveren"
                },
                {
                    "en": "Capturing pieces",
                    "es": "Capturar piezas",
                    "de": "Figuren schlagen",
                    "nl": "Stukken slaan"
                },
                {
                    "en": "Studying chess",
                    "es": "Estudiar ajedrez",
                    "de": "Schach studieren",
                    "nl": "Schaken studeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Development refers to bringing your pieces (especially knights and bishops) from their starting positions into the game where they can be more effective.",
                "es": "El desarrollo se refiere a llevar tus piezas (especialmente caballos y alfiles) desde sus posiciones iniciales al juego donde pueden ser más efectivas.",
                "de": "Entwicklung bezieht sich darauf, die Figuren (besonders Springer und Läufer) von ihren Ausgangsstellungen ins Spiel zu bringen, wo sie effektiver sind.",
                "nl": "Ontwikkeling verwijst naar het brengen van je stukken (vooral paarden en lopers) van hun startposities in het spel waar ze effectiever kunnen zijn."
            }
        },
        {
            "question": {
                "en": "What is 'tempo' in chess?",
                "es": "¿Qué es el 'tempo' en ajedrez?",
                "de": "Was ist ein 'Tempo' im Schach?",
                "nl": "Wat is 'tempo' bij schaken?"
            },
            "options": [
                {
                    "en": "A unit of time in the game, essentially one move",
                    "es": "Una unidad de tiempo en el juego, esencialmente un movimiento",
                    "de": "Eine Zeiteinheit im Spiel, im Wesentlichen ein Zug",
                    "nl": "Een tijdseenheid in het spel, in wezen één zet"
                },
                {
                    "en": "The speed of play",
                    "es": "La velocidad de juego",
                    "de": "Die Spielgeschwindigkeit",
                    "nl": "De speelsnelheid"
                },
                {
                    "en": "A type of opening",
                    "es": "Un tipo de apertura",
                    "de": "Eine Art von Eröffnung",
                    "nl": "Een type opening"
                },
                {
                    "en": "The endgame phase",
                    "es": "La fase final",
                    "de": "Die Endspielphase",
                    "nl": "De eindspeelfase"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tempo refers to a turn or move in chess. Gaining a tempo means making a move that forces your opponent to respond, effectively gaining time.",
                "es": "El tempo se refiere a un turno o movimiento en ajedrez. Ganar un tempo significa hacer un movimiento que obliga al oponente a responder, ganando tiempo efectivamente.",
                "de": "Tempo bezieht sich auf einen Zug im Schach. Ein Tempo gewinnen bedeutet, einen Zug zu machen, der den Gegner zu einer Antwort zwingt und so Zeit gewinnt.",
                "nl": "Tempo verwijst naar een beurt of zet in schaken. Een tempo winnen betekent een zet doen die je tegenstander dwingt te reageren, waardoor je effectief tijd wint."
            }
        },
        {
            "question": {
                "en": "Can you castle if your king has moved before?",
                "es": "¿Puedes enrocar si tu rey se ha movido antes?",
                "de": "Kann man rochieren, wenn der König sich schon bewegt hat?",
                "nl": "Kun je rokeren als je koning al heeft bewogen?"
            },
            "options": [
                {
                    "en": "No, the king must not have moved",
                    "es": "No, el rey no debe haberse movido",
                    "de": "Nein, der König darf sich nicht bewegt haben",
                    "nl": "Nee, de koning mag niet bewogen hebben"
                },
                {
                    "en": "Yes, always",
                    "es": "Sí, siempre",
                    "de": "Ja, immer",
                    "nl": "Ja, altijd"
                },
                {
                    "en": "Only in the endgame",
                    "es": "Solo en el final",
                    "de": "Nur im Endspiel",
                    "nl": "Alleen in het eindspel"
                },
                {
                    "en": "Only once per game",
                    "es": "Solo una vez por juego",
                    "de": "Nur einmal pro Spiel",
                    "nl": "Slechts één keer per spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Castling is only allowed if neither the king nor the rook involved has moved during the game. Once the king moves, castling is no longer possible.",
                "es": "El enroque solo está permitido si ni el rey ni la torre involucrada se han movido durante el juego. Una vez que el rey se mueve, el enroque ya no es posible.",
                "de": "Die Rochade ist nur erlaubt, wenn weder der König noch der beteiligte Turm sich während des Spiels bewegt haben. Sobald der König zieht, ist keine Rochade mehr möglich.",
                "nl": "Rokeren is alleen toegestaan als noch de koning noch de betrokken toren tijdens het spel heeft bewogen. Zodra de koning beweegt, is rokeren niet meer mogelijk."
            }
        },
        {
            "question": {
                "en": "What is the value of a rook in terms of pawns?",
                "es": "¿Cuál es el valor de una torre en términos de peones?",
                "de": "Was ist der Wert eines Turms in Bauerneinheiten?",
                "nl": "Wat is de waarde van een toren in termen van pionnen?"
            },
            "options": [
                {
                    "en": "About 5 pawns",
                    "es": "Aproximadamente 5 peones",
                    "de": "Etwa 5 Bauern",
                    "nl": "Ongeveer 5 pionnen"
                },
                {
                    "en": "About 3 pawns",
                    "es": "Aproximadamente 3 peones",
                    "de": "Etwa 3 Bauern",
                    "nl": "Ongeveer 3 pionnen"
                },
                {
                    "en": "About 9 pawns",
                    "es": "Aproximadamente 9 peones",
                    "de": "Etwa 9 Bauern",
                    "nl": "Ongeveer 9 pionnen"
                },
                {
                    "en": "About 2 pawns",
                    "es": "Aproximadamente 2 peones",
                    "de": "Etwa 2 Bauern",
                    "nl": "Ongeveer 2 pionnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A rook is valued at approximately 5 pawns. This makes it a major piece, more valuable than bishops or knights but less than the queen.",
                "es": "Una torre vale aproximadamente 5 peones. Esto la convierte en una pieza mayor, más valiosa que alfiles o caballos pero menos que la reina.",
                "de": "Ein Turm hat einen Wert von etwa 5 Bauern. Dies macht ihn zu einer Schwerfigur, wertvoller als Läufer oder Springer, aber weniger als die Dame.",
                "nl": "Een toren is ongeveer 5 pionnen waard. Dit maakt het een zwaar stuk, waardevoller dan lopers of paarden maar minder dan de dame."
            }
        },
        {
            "question": {
                "en": "What is 'opposition' in chess?",
                "es": "¿Qué es la 'oposición' en ajedrez?",
                "de": "Was ist 'Opposition' im Schach?",
                "nl": "Wat is 'oppositie' bij schaken?"
            },
            "options": [
                {
                    "en": "When two kings face each other with one square between them",
                    "es": "Cuando dos reyes se enfrentan con una casilla entre ellos",
                    "de": "Wenn zwei Könige sich mit einem Feld dazwischen gegenüberstehen",
                    "nl": "Wanneer twee koningen tegenover elkaar staan met één veld ertussen"
                },
                {
                    "en": "When pieces are attacking each other",
                    "es": "Cuando las piezas se atacan entre sí",
                    "de": "Wenn Figuren sich gegenseitig angreifen",
                    "nl": "Wanneer stukken elkaar aanvallen"
                },
                {
                    "en": "The opening phase",
                    "es": "La fase de apertura",
                    "de": "Die Eröffnungsphase",
                    "nl": "De openingsfase"
                },
                {
                    "en": "A type of defense",
                    "es": "Un tipo de defensa",
                    "de": "Eine Art der Verteidigung",
                    "nl": "Een type verdediging"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Opposition is a key endgame concept where two kings face each other with one square between them. The player not to move has the opposition advantage.",
                "es": "La oposición es un concepto clave del final donde dos reyes se enfrentan con una casilla entre ellos. El jugador que no mueve tiene la ventaja de la oposición.",
                "de": "Opposition ist ein wichtiges Endspielkonzept, bei dem zwei Könige sich mit einem Feld dazwischen gegenüberstehen. Der Spieler, der nicht am Zug ist, hat die Opposition.",
                "nl": "Oppositie is een belangrijk eindspelconcept waarbij twee koningen tegenover elkaar staan met één veld ertussen. De speler die niet aan zet is heeft het oppositievoordeel."
            }
        },
        {
            "question": {
                "en": "What is a 'discovered attack'?",
                "es": "¿Qué es un 'ataque descubierto'?",
                "de": "Was ist ein 'Abzugsangriff'?",
                "nl": "Wat is een 'ontdekte aanval'?"
            },
            "options": [
                {
                    "en": "When moving one piece reveals an attack from another piece behind it",
                    "es": "Cuando mover una pieza revela un ataque de otra pieza detrás de ella",
                    "de": "Wenn das Ziehen einer Figur einen Angriff einer dahinter stehenden Figur aufdeckt",
                    "nl": "Wanneer het bewegen van één stuk een aanval van een ander stuk erachter onthult"
                },
                {
                    "en": "Finding a new move",
                    "es": "Encontrar un nuevo movimiento",
                    "de": "Einen neuen Zug finden",
                    "nl": "Een nieuwe zet vinden"
                },
                {
                    "en": "An opening trap",
                    "es": "Una trampa de apertura",
                    "de": "Eine Eröffnungsfalle",
                    "nl": "Een openingsval"
                },
                {
                    "en": "A defensive formation",
                    "es": "Una formación defensiva",
                    "de": "Eine Verteidigungsformation",
                    "nl": "Een verdedigingsformatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A discovered attack occurs when moving one piece uncovers an attack from another piece that was behind it, creating two threats simultaneously.",
                "es": "Un ataque descubierto ocurre cuando mover una pieza descubre un ataque de otra pieza que estaba detrás, creando dos amenazas simultáneamente.",
                "de": "Ein Abzugsangriff entsteht, wenn das Ziehen einer Figur einen Angriff einer dahinter stehenden Figur aufdeckt und so zwei Drohungen gleichzeitig entstehen.",
                "nl": "Een ontdekte aanval treedt op wanneer het bewegen van één stuk een aanval van een ander stuk dat erachter stond onthult, waardoor twee bedreigingen tegelijk ontstaan."
            }
        },
        {
            "question": {
                "en": "How many rooks does each player start with?",
                "es": "¿Con cuántas torres comienza cada jugador?",
                "de": "Mit wie vielen Türmen startet jeder Spieler?",
                "nl": "Met hoeveel torens begint elke speler?"
            },
            "options": [
                {
                    "en": "2 rooks",
                    "es": "2 torres",
                    "de": "2 Türme",
                    "nl": "2 torens"
                },
                {
                    "en": "1 rook",
                    "es": "1 torre",
                    "de": "1 Turm",
                    "nl": "1 toren"
                },
                {
                    "en": "3 rooks",
                    "es": "3 torres",
                    "de": "3 Türme",
                    "nl": "3 torens"
                },
                {
                    "en": "4 rooks",
                    "es": "4 torres",
                    "de": "4 Türme",
                    "nl": "4 torens"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 2 rooks, placed in the corners of their first rank (a1 and h1 for white, a8 and h8 for black).",
                "es": "Cada jugador comienza con 2 torres, colocadas en las esquinas de su primera fila (a1 y h1 para blancas, a8 y h8 para negras).",
                "de": "Jeder Spieler startet mit 2 Türmen, die in den Ecken der ersten Reihe stehen (a1 und h1 für Weiß, a8 und h8 für Schwarz).",
                "nl": "Elke speler begint met 2 torens, geplaatst in de hoeken van hun eerste rij (a1 en h1 voor wit, a8 en h8 voor zwart)."
            }
        },
        {
            "question": {
                "en": "What is a 'fianchetto'?",
                "es": "¿Qué es un 'fianchetto'?",
                "de": "Was ist ein 'Fianchetto'?",
                "nl": "Wat is een 'fianchetto'?"
            },
            "options": [
                {
                    "en": "Developing a bishop to the long diagonal by moving it to b2, g2, b7, or g7",
                    "es": "Desarrollar un alfil en la diagonal larga moviéndolo a b2, g2, b7 o g7",
                    "de": "Einen Läufer auf die lange Diagonale entwickeln (b2, g2, b7 oder g7)",
                    "nl": "Een loper ontwikkelen naar de lange diagonaal door hem naar b2, g2, b7 of g7 te bewegen"
                },
                {
                    "en": "A special pawn move",
                    "es": "Un movimiento especial de peón",
                    "de": "Ein spezieller Bauernzug",
                    "nl": "Een speciale pionzet"
                },
                {
                    "en": "A type of checkmate",
                    "es": "Un tipo de jaque mate",
                    "de": "Eine Art von Schachmatt",
                    "nl": "Een type schaakmat"
                },
                {
                    "en": "An endgame technique",
                    "es": "Una técnica de final",
                    "de": "Eine Endspiel-Technik",
                    "nl": "Een eindspeltechniek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Fianchetto is a development pattern where a bishop is placed on the long diagonal (b2, g2, b7, or g7) after moving the b or g pawn one square.",
                "es": "El fianchetto es un patrón de desarrollo donde un alfil se coloca en la diagonal larga (b2, g2, b7 o g7) después de mover el peón b o g una casilla.",
                "de": "Fianchetto ist ein Entwicklungsmuster, bei dem ein Läufer auf die lange Diagonale (b2, g2, b7 oder g7) gestellt wird, nachdem der b- oder g-Bauer ein Feld vorgezogen wurde.",
                "nl": "Fianchetto is een ontwikkelingspatroon waarbij een loper op de lange diagonaal (b2, g2, b7 of g7) wordt geplaatst na het bewegen van de b- of g-pion één veld."
            }
        },
        {
            "question": {
                "en": "What is threefold repetition?",
                "es": "¿Qué es la repetición triple?",
                "de": "Was ist die dreifache Stellungswiederholung?",
                "nl": "Wat is drievoudige herhaling?"
            },
            "options": [
                {
                    "en": "When the same position occurs three times, a draw can be claimed",
                    "es": "Cuando la misma posición ocurre tres veces, se pueden reclamar tablas",
                    "de": "Wenn dieselbe Stellung dreimal auftritt, kann Remis beansprucht werden",
                    "nl": "Wanneer dezelfde stelling drie keer voorkomt, kan remise worden geclaimd"
                },
                {
                    "en": "Moving the same piece three times",
                    "es": "Mover la misma pieza tres veces",
                    "de": "Dieselbe Figur dreimal ziehen",
                    "nl": "Hetzelfde stuk drie keer bewegen"
                },
                {
                    "en": "Three checks in a row",
                    "es": "Tres jaques seguidos",
                    "de": "Drei Schachs hintereinander",
                    "nl": "Drie schaaks op rij"
                },
                {
                    "en": "Capturing three pieces",
                    "es": "Capturar tres piezas",
                    "de": "Drei Figuren schlagen",
                    "nl": "Drie stukken slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Threefold repetition occurs when the same position appears three times during the game. A player can then claim a draw.",
                "es": "La repetición triple ocurre cuando la misma posición aparece tres veces durante el juego. Un jugador puede entonces reclamar tablas.",
                "de": "Dreifache Stellungswiederholung tritt auf, wenn dieselbe Stellung dreimal während des Spiels erscheint. Ein Spieler kann dann Remis beanspruchen.",
                "nl": "Drievoudige herhaling treedt op wanneer dezelfde stelling drie keer tijdens het spel verschijnt. Een speler kan dan remise claimen."
            }
        },
        {
            "question": {
                "en": "Which piece can jump over other pieces?",
                "es": "¿Qué pieza puede saltar sobre otras piezas?",
                "de": "Welche Figur kann über andere Figuren springen?",
                "nl": "Welk stuk kan over andere stukken springen?"
            },
            "options": [
                {
                    "en": "Only the knight",
                    "es": "Solo el caballo",
                    "de": "Nur der Springer",
                    "nl": "Alleen het paard"
                },
                {
                    "en": "Knight and bishop",
                    "es": "Caballo y alfil",
                    "de": "Springer und Läufer",
                    "nl": "Paard en loper"
                },
                {
                    "en": "All pieces",
                    "es": "Todas las piezas",
                    "de": "Alle Figuren",
                    "nl": "Alle stukken"
                },
                {
                    "en": "Queen and rook",
                    "es": "Reina y torre",
                    "de": "Dame und Turm",
                    "nl": "Dame en toren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The knight is the only piece that can jump over other pieces. It moves in an L-shape and can leap over any pieces in its path.",
                "es": "El caballo es la única pieza que puede saltar sobre otras piezas. Se mueve en forma de L y puede saltar sobre cualquier pieza en su camino.",
                "de": "Der Springer ist die einzige Figur, die über andere Figuren springen kann. Er zieht in L-Form und kann über alle Figuren auf seinem Weg springen.",
                "nl": "Het paard is het enige stuk dat over andere stukken kan springen. Het beweegt in een L-vorm en kan over alle stukken in zijn pad springen."
            }
        },
        {
            "question": {
                "en": "What is the Scholar's Mate?",
                "es": "¿Qué es el Mate del Pastor?",
                "de": "Was ist das Schäfermatt?",
                "nl": "Wat is het Herdersmat?"
            },
            "options": [
                {
                    "en": "A 4-move checkmate targeting the weak f7/f2 square",
                    "es": "Un jaque mate en 4 movimientos que ataca la casilla débil f7/f2",
                    "de": "Ein 4-Züge-Matt, das das schwache Feld f7/f2 angreift",
                    "nl": "Een 4-zetten schaakmat gericht op het zwakke f7/f2 veld"
                },
                {
                    "en": "An opening system",
                    "es": "Un sistema de apertura",
                    "de": "Ein Eröffnungssystem",
                    "nl": "Een openingssysteem"
                },
                {
                    "en": "An endgame pattern",
                    "es": "Un patrón de final",
                    "de": "Ein Endspiel-Muster",
                    "nl": "Een eindspelpatroon"
                },
                {
                    "en": "A drawing technique",
                    "es": "Una técnica de tablas",
                    "de": "Eine Remis-Technik",
                    "nl": "Een remisetechniek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Scholar's Mate is a 4-move checkmate where the queen and bishop cooperate to attack the weak f7 square (f2 for black). It only works against beginners.",
                "es": "El Mate del Pastor es un jaque mate en 4 movimientos donde la reina y el alfil cooperan para atacar la casilla débil f7 (f2 para negras). Solo funciona contra principiantes.",
                "de": "Das Schäfermatt ist ein 4-Züge-Matt, bei dem Dame und Läufer zusammenarbeiten, um das schwache Feld f7 (f2 für Schwarz) anzugreifen. Es funktioniert nur gegen Anfänger.",
                "nl": "Herdersmat is een 4-zetten schaakmat waarbij de dame en loper samenwerken om het zwakke f7 veld (f2 voor zwart) aan te vallen. Het werkt alleen tegen beginners."
            }
        },
        {
            "question": {
                "en": "What is the 'back rank'?",
                "es": "¿Qué es la 'última fila'?",
                "de": "Was ist die 'Grundreihe'?",
                "nl": "Wat is de 'achterste rij'?"
            },
            "options": [
                {
                    "en": "The first and eighth ranks where pieces start",
                    "es": "Las filas primera y octava donde comienzan las piezas",
                    "de": "Die erste und achte Reihe, wo die Figuren starten",
                    "nl": "De eerste en achtste rij waar de stukken beginnen"
                },
                {
                    "en": "The middle of the board",
                    "es": "El centro del tablero",
                    "de": "Die Mitte des Bretts",
                    "nl": "Het midden van het bord"
                },
                {
                    "en": "The pawn rows",
                    "es": "Las filas de peones",
                    "de": "Die Bauernreihen",
                    "nl": "De pionrijen"
                },
                {
                    "en": "The side files",
                    "es": "Las columnas laterales",
                    "de": "Die Randlinien",
                    "nl": "De zijlijnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The back rank refers to the first rank for white (rank 1) and the eighth rank for black (rank 8), where the major pieces start the game.",
                "es": "La última fila se refiere a la primera fila para las blancas (fila 1) y la octava fila para las negras (fila 8), donde las piezas mayores comienzan el juego.",
                "de": "Die Grundreihe bezeichnet die erste Reihe für Weiß (Reihe 1) und die achte Reihe für Schwarz (Reihe 8), wo die Schwerfiguren das Spiel beginnen.",
                "nl": "De achterste rij verwijst naar de eerste rij voor wit (rij 1) en de achtste rij voor zwart (rij 8), waar de zware stukken het spel beginnen."
            }
        },
        {
            "question": {
                "en": "What is 'zugzwang'?",
                "es": "¿Qué es 'zugzwang'?",
                "de": "Was ist 'Zugzwang'?",
                "nl": "Wat is 'zugzwang'?"
            },
            "options": [
                {
                    "en": "When any move you make worsens your position",
                    "es": "Cuando cualquier movimiento que hagas empeora tu posición",
                    "de": "Wenn jeder Zug die eigene Stellung verschlechtert",
                    "nl": "Wanneer elke zet die je doet je positie verslechtert"
                },
                {
                    "en": "A type of opening",
                    "es": "Un tipo de apertura",
                    "de": "Eine Art von Eröffnung",
                    "nl": "Een type opening"
                },
                {
                    "en": "A checkmate pattern",
                    "es": "Un patrón de jaque mate",
                    "de": "Ein Schachmatt-Muster",
                    "nl": "Een schaakmatpatroon"
                },
                {
                    "en": "A drawing technique",
                    "es": "Una técnica de tablas",
                    "de": "Eine Remis-Technik",
                    "nl": "Een remisetechniek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Zugzwang is a situation where a player is forced to move but any move they make will worsen their position. It's more common in endgames.",
                "es": "Zugzwang es una situación donde un jugador está obligado a mover pero cualquier movimiento empeorará su posición. Es más común en finales.",
                "de": "Zugzwang ist eine Situation, in der ein Spieler ziehen muss, aber jeder Zug seine Stellung verschlechtert. Es kommt häufiger in Endspielen vor.",
                "nl": "Zugzwang is een situatie waarin een speler gedwongen is te zetten maar elke zet zijn positie verslechtert. Het komt vaker voor in eindspelen."
            }
        },
        {
            "question": {
                "en": "How many light squares are on a chess board?",
                "es": "¿Cuántas casillas claras hay en un tablero de ajedrez?",
                "de": "Wie viele helle Felder hat ein Schachbrett?",
                "nl": "Hoeveel lichte velden zijn er op een schaakbord?"
            },
            "options": [
                {
                    "en": "32 light squares",
                    "es": "32 casillas claras",
                    "de": "32 helle Felder",
                    "nl": "32 lichte velden"
                },
                {
                    "en": "64 light squares",
                    "es": "64 casillas claras",
                    "de": "64 helle Felder",
                    "nl": "64 lichte velden"
                },
                {
                    "en": "16 light squares",
                    "es": "16 casillas claras",
                    "de": "16 helle Felder",
                    "nl": "16 lichte velden"
                },
                {
                    "en": "48 light squares",
                    "es": "48 casillas claras",
                    "de": "48 helle Felder",
                    "nl": "48 lichte velden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A chess board has 32 light squares and 32 dark squares, alternating in a checkered pattern for a total of 64 squares.",
                "es": "Un tablero de ajedrez tiene 32 casillas claras y 32 oscuras, alternando en un patrón de tablero para un total de 64 casillas.",
                "de": "Ein Schachbrett hat 32 helle und 32 dunkle Felder, die sich in einem Schachbrettmuster abwechseln, insgesamt 64 Felder.",
                "nl": "Een schaakbord heeft 32 lichte en 32 donkere velden, afwisselend in een dambordpatroon voor een totaal van 64 velden."
            }
        },
        {
            "question": {
                "en": "What is a 'sacrifice' in chess?",
                "es": "¿Qué es un 'sacrificio' en ajedrez?",
                "de": "Was ist ein 'Opfer' im Schach?",
                "nl": "Wat is een 'offer' bij schaken?"
            },
            "options": [
                {
                    "en": "Deliberately giving up material for positional or tactical advantage",
                    "es": "Entregar deliberadamente material por ventaja posicional o táctica",
                    "de": "Bewusst Material für positionellen oder taktischen Vorteil aufgeben",
                    "nl": "Bewust materiaal opgeven voor positioneel of tactisch voordeel"
                },
                {
                    "en": "Losing a piece by mistake",
                    "es": "Perder una pieza por error",
                    "de": "Eine Figur aus Versehen verlieren",
                    "nl": "Een stuk per ongeluk verliezen"
                },
                {
                    "en": "Trading pieces",
                    "es": "Intercambiar piezas",
                    "de": "Figuren tauschen",
                    "nl": "Stukken ruilen"
                },
                {
                    "en": "Promoting a pawn",
                    "es": "Promocionar un peón",
                    "de": "Einen Bauern umwandeln",
                    "nl": "Een pion promoveren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A sacrifice is when you deliberately give up material (pieces) to gain a positional, tactical, or strategic advantage, often leading to checkmate.",
                "es": "Un sacrificio es cuando entregas deliberadamente material (piezas) para obtener una ventaja posicional, táctica o estratégica, a menudo llevando al jaque mate.",
                "de": "Ein Opfer ist, wenn man bewusst Material (Figuren) aufgibt, um einen positionellen, taktischen oder strategischen Vorteil zu erlangen, oft führt es zum Schachmatt.",
                "nl": "Een offer is wanneer je bewust materiaal (stukken) opgeeft om een positioneel, tactisch of strategisch voordeel te krijgen, vaak leidend tot schaakmat."
            }
        },
        {
            "question": {
                "en": "What does 'J'adoube' mean?",
                "es": "¿Qué significa 'Compongo'?",
                "de": "Was bedeutet 'J'adoube'?",
                "nl": "Wat betekent 'J'adoube'?"
            },
            "options": [
                {
                    "en": "I adjust - said when touching a piece without intending to move it",
                    "es": "Compongo - se dice al tocar una pieza sin intención de moverla",
                    "de": "Ich rücke zurecht - gesagt beim Berühren einer Figur ohne Zugabsicht",
                    "nl": "Ik zet recht - gezegd bij het aanraken van een stuk zonder de intentie het te verzetten"
                },
                {
                    "en": "I resign",
                    "es": "Me rindo",
                    "de": "Ich gebe auf",
                    "nl": "Ik geef op"
                },
                {
                    "en": "Check",
                    "es": "Jaque",
                    "de": "Schach",
                    "nl": "Schaak"
                },
                {
                    "en": "Draw offer",
                    "es": "Oferta de tablas",
                    "de": "Remisangebot",
                    "nl": "Remiseaanbod"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "J'adoube (French for 'I adjust') is said before touching a piece to adjust its position on the square without being obligated to move it.",
                "es": "Compongo (J'adoube en francés) se dice antes de tocar una pieza para ajustar su posición en la casilla sin estar obligado a moverla.",
                "de": "J'adoube (französisch für 'Ich rücke zurecht') wird gesagt, bevor man eine Figur berührt, um ihre Position auf dem Feld zu korrigieren, ohne sie ziehen zu müssen.",
                "nl": "J'adoube (Frans voor 'Ik zet recht') wordt gezegd voordat je een stuk aanraakt om zijn positie op het veld aan te passen zonder verplicht te zijn het te verzetten."
            }
        },
        {
            "question": {
                "en": "What is an 'isolated pawn'?",
                "es": "¿Qué es un 'peón aislado'?",
                "de": "Was ist ein 'isolierter Bauer'?",
                "nl": "Wat is een 'geïsoleerde pion'?"
            },
            "options": [
                {
                    "en": "A pawn with no friendly pawns on adjacent files",
                    "es": "Un peón sin peones amigos en columnas adyacentes",
                    "de": "Ein Bauer ohne eigene Bauern auf benachbarten Linien",
                    "nl": "Een pion zonder vriendelijke pionnen op aangrenzende lijnen"
                },
                {
                    "en": "A pawn on the edge of the board",
                    "es": "Un peón en el borde del tablero",
                    "de": "Ein Bauer am Rand des Bretts",
                    "nl": "Een pion aan de rand van het bord"
                },
                {
                    "en": "A passed pawn",
                    "es": "Un peón pasado",
                    "de": "Ein Freibauer",
                    "nl": "Een vrijpion"
                },
                {
                    "en": "A backward pawn",
                    "es": "Un peón retrasado",
                    "de": "Ein rückständiger Bauer",
                    "nl": "Een achtergebleven pion"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An isolated pawn is a pawn that has no friendly pawns on the files immediately to its left or right, making it potentially weak.",
                "es": "Un peón aislado es un peón que no tiene peones amigos en las columnas inmediatamente a su izquierda o derecha, haciéndolo potencialmente débil.",
                "de": "Ein isolierter Bauer ist ein Bauer, der keine eigenen Bauern auf den unmittelbar benachbarten Linien hat, was ihn potenziell schwach macht.",
                "nl": "Een geïsoleerde pion is een pion die geen vriendelijke pionnen heeft op de lijnen direct links of rechts, wat hem potentieel zwak maakt."
            }
        },
        {
            "question": {
                "en": "What is the 'Italian Game' opening?",
                "es": "¿Qué es la apertura 'Italiana'?",
                "de": "Was ist die 'Italienische Eröffnung'?",
                "nl": "Wat is de 'Italiaanse opening'?"
            },
            "options": [
                {
                    "en": "1.e4 e5 2.Nf3 Nc6 3.Bc4",
                    "es": "1.e4 e5 2.Cf3 Cc6 3.Ac4",
                    "de": "1.e4 e5 2.Sf3 Sc6 3.Lc4",
                    "nl": "1.e4 e5 2.Pf3 Pc6 3.Lc4"
                },
                {
                    "en": "1.d4 d5",
                    "es": "1.d4 d5",
                    "de": "1.d4 d5",
                    "nl": "1.d4 d5"
                },
                {
                    "en": "1.e4 c5",
                    "es": "1.e4 c5",
                    "de": "1.e4 c5",
                    "nl": "1.e4 c5"
                },
                {
                    "en": "1.Nf3",
                    "es": "1.Cf3",
                    "de": "1.Sf3",
                    "nl": "1.Pf3"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Italian Game starts with 1.e4 e5 2.Nf3 Nc6 3.Bc4, where white develops the bishop to c4, targeting the f7 square.",
                "es": "La Italiana comienza con 1.e4 e5 2.Cf3 Cc6 3.Ac4, donde las blancas desarrollan el alfil a c4, apuntando a la casilla f7.",
                "de": "Die Italienische Eröffnung beginnt mit 1.e4 e5 2.Sf3 Sc6 3.Lc4, wobei Weiß den Läufer nach c4 entwickelt und auf das Feld f7 zielt.",
                "nl": "De Italiaanse opening begint met 1.e4 e5 2.Pf3 Pc6 3.Lc4, waarbij wit de loper naar c4 ontwikkelt, gericht op het f7 veld."
            }
        },
        {
            "question": {
                "en": "How many queens does each player start with?",
                "es": "¿Con cuántas reinas comienza cada jugador?",
                "de": "Mit wie vielen Damen startet jeder Spieler?",
                "nl": "Met hoeveel dames begint elke speler?"
            },
            "options": [
                {
                    "en": "1 queen",
                    "es": "1 reina",
                    "de": "1 Dame",
                    "nl": "1 dame"
                },
                {
                    "en": "2 queens",
                    "es": "2 reinas",
                    "de": "2 Damen",
                    "nl": "2 dames"
                },
                {
                    "en": "0 queens",
                    "es": "0 reinas",
                    "de": "0 Damen",
                    "nl": "0 dames"
                },
                {
                    "en": "3 queens",
                    "es": "3 reinas",
                    "de": "3 Damen",
                    "nl": "3 dames"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with exactly 1 queen, placed on their own color (white queen on d1, black queen on d8).",
                "es": "Cada jugador comienza con exactamente 1 reina, colocada en su propio color (reina blanca en d1, reina negra en d8).",
                "de": "Jeder Spieler startet mit genau 1 Dame, die auf ihrer eigenen Farbe steht (weiße Dame auf d1, schwarze Dame auf d8).",
                "nl": "Elke speler begint met precies 1 dame, geplaatst op hun eigen kleur (witte dame op d1, zwarte dame op d8)."
            }
        },
        {
            "question": {
                "en": "What is 'castling long'?",
                "es": "¿Qué es el 'enroque largo'?",
                "de": "Was ist die 'lange Rochade'?",
                "nl": "Wat is 'lange rokade'?"
            },
            "options": [
                {
                    "en": "Castling queenside (O-O-O)",
                    "es": "Enroque del lado de la dama (O-O-O)",
                    "de": "Rochade zur Damenseite (O-O-O)",
                    "nl": "Rokade naar de damevleugel (O-O-O)"
                },
                {
                    "en": "Castling kingside (O-O)",
                    "es": "Enroque del lado del rey (O-O)",
                    "de": "Rochade zur Königsseite (O-O)",
                    "nl": "Rokade naar de koningsvleugel (O-O)"
                },
                {
                    "en": "Moving the king three squares",
                    "es": "Mover el rey tres casillas",
                    "de": "Den König drei Felder bewegen",
                    "nl": "De koning drie velden bewegen"
                },
                {
                    "en": "A special endgame move",
                    "es": "Un movimiento especial de final",
                    "de": "Ein spezieller Endspielzug",
                    "nl": "Een speciale eindspelzet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Castling long (queenside castling or O-O-O) involves moving the king two squares toward the queenside rook, which then moves to the other side of the king.",
                "es": "El enroque largo (enroque del lado de la dama u O-O-O) implica mover el rey dos casillas hacia la torre del lado de la dama, que luego se mueve al otro lado del rey.",
                "de": "Die lange Rochade (Damenrochade oder O-O-O) bedeutet, den König zwei Felder zum Damenturm zu bewegen, der dann auf die andere Seite des Königs zieht.",
                "nl": "Lange rokade (damevleugel rokade of O-O-O) houdt in dat de koning twee velden naar de damevleugel toren beweegt, die dan naar de andere kant van de koning gaat."
            }
        },
        {
            "question": {
                "en": "What is a 'blunder' in chess?",
                "es": "¿Qué es un 'error grave' en ajedrez?",
                "de": "Was ist ein 'grober Fehler' im Schach?",
                "nl": "Wat is een 'blunder' bij schaken?"
            },
            "options": [
                {
                    "en": "A very bad move that loses material or the game",
                    "es": "Un movimiento muy malo que pierde material o el juego",
                    "de": "Ein sehr schlechter Zug, der Material oder das Spiel verliert",
                    "nl": "Een zeer slechte zet die materiaal of het spel verliest"
                },
                {
                    "en": "A brilliant move",
                    "es": "Un movimiento brillante",
                    "de": "Ein brillanter Zug",
                    "nl": "Een briljante zet"
                },
                {
                    "en": "An average move",
                    "es": "Un movimiento promedio",
                    "de": "Ein durchschnittlicher Zug",
                    "nl": "Een gemiddelde zet"
                },
                {
                    "en": "An opening move",
                    "es": "Un movimiento de apertura",
                    "de": "Ein Eröffnungszug",
                    "nl": "Een openingszet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A blunder is a very bad move that significantly worsens your position, often losing material or even the game immediately.",
                "es": "Un error grave es un movimiento muy malo que empeora significativamente tu posición, a menudo perdiendo material o incluso el juego inmediatamente.",
                "de": "Ein grober Fehler ist ein sehr schlechter Zug, der die eigene Stellung erheblich verschlechtert, oft mit Materialverlust oder sogar sofortigem Partieverlust.",
                "nl": "Een blunder is een zeer slechte zet die je positie aanzienlijk verslechtert, vaak met verlies van materiaal of zelfs onmiddellijk verlies van het spel."
            }
        },
        {
            "question": {
                "en": "What is a 'passed pawn'?",
                "es": "¿Qué es un 'peón pasado'?",
                "de": "Was ist ein 'Freibauer'?",
                "nl": "Wat is een 'vrijpion'?"
            },
            "options": [
                {
                    "en": "A pawn with no enemy pawns blocking its path to promotion",
                    "es": "Un peón sin peones enemigos bloqueando su camino a la promoción",
                    "de": "Ein Bauer ohne gegnerische Bauern, die seinen Weg zur Umwandlung blockieren",
                    "nl": "Een pion zonder vijandelijke pionnen die zijn pad naar promotie blokkeren"
                },
                {
                    "en": "A pawn that has moved two squares",
                    "es": "Un peón que ha movido dos casillas",
                    "de": "Ein Bauer, der zwei Felder gezogen ist",
                    "nl": "Een pion die twee velden heeft bewogen"
                },
                {
                    "en": "An isolated pawn",
                    "es": "Un peón aislado",
                    "de": "Ein isolierter Bauer",
                    "nl": "Een geïsoleerde pion"
                },
                {
                    "en": "A backward pawn",
                    "es": "Un peón retrasado",
                    "de": "Ein rückständiger Bauer",
                    "nl": "Een achtergebleven pion"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A passed pawn is a pawn that has no opposing pawns to prevent it from advancing to promotion. It's often a strong advantage.",
                "es": "Un peón pasado es un peón que no tiene peones opuestos para evitar que avance a la promoción. A menudo es una fuerte ventaja.",
                "de": "Ein Freibauer ist ein Bauer, der keine gegnerischen Bauern hat, die ihn am Vorrücken zur Umwandlung hindern. Er ist oft ein starker Vorteil.",
                "nl": "Een vrijpion is een pion die geen tegengestelde pionnen heeft om te voorkomen dat hij naar promotie opruk. Het is vaak een sterk voordeel."
            }
        },
        {
            "question": {
                "en": "What is 'material' in chess?",
                "es": "¿Qué es el 'material' en ajedrez?",
                "de": "Was ist 'Material' im Schach?",
                "nl": "Wat is 'materiaal' bij schaken?"
            },
            "options": [
                {
                    "en": "The pieces and their combined value",
                    "es": "Las piezas y su valor combinado",
                    "de": "Die Figuren und ihr kombinierter Wert",
                    "nl": "De stukken en hun gecombineerde waarde"
                },
                {
                    "en": "The chess board",
                    "es": "El tablero de ajedrez",
                    "de": "Das Schachbrett",
                    "nl": "Het schaakbord"
                },
                {
                    "en": "The chess clock",
                    "es": "El reloj de ajedrez",
                    "de": "Die Schachuhr",
                    "nl": "De schaakklok"
                },
                {
                    "en": "The rules of chess",
                    "es": "Las reglas del ajedrez",
                    "de": "Die Schachregeln",
                    "nl": "De schaakregels"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Material refers to the pieces on the board and their relative values. Having more material (higher total piece value) is usually an advantage.",
                "es": "El material se refiere a las piezas en el tablero y sus valores relativos. Tener más material (mayor valor total de piezas) suele ser una ventaja.",
                "de": "Material bezieht sich auf die Figuren auf dem Brett und ihre relativen Werte. Mehr Material (höherer Gesamtwert der Figuren) zu haben ist meist ein Vorteil.",
                "nl": "Materiaal verwijst naar de stukken op het bord en hun relatieve waarden. Meer materiaal hebben (hogere totale stukwaarde) is meestal een voordeel."
            }
        },
        {
            "question": {
                "en": "Which square does the white queen start on?",
                "es": "¿En qué casilla comienza la reina blanca?",
                "de": "Auf welchem Feld startet die weiße Dame?",
                "nl": "Op welk veld begint de witte dame?"
            },
            "options": [
                {
                    "en": "d1",
                    "es": "d1",
                    "de": "d1",
                    "nl": "d1"
                },
                {
                    "en": "e1",
                    "es": "e1",
                    "de": "e1",
                    "nl": "e1"
                },
                {
                    "en": "d8",
                    "es": "d8",
                    "de": "d8",
                    "nl": "d8"
                },
                {
                    "en": "e8",
                    "es": "e8",
                    "de": "e8",
                    "nl": "e8"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The white queen starts on d1, which is a light square. Remember: 'Queen on her color' - white queen on white square.",
                "es": "La reina blanca comienza en d1, que es una casilla clara. Recuerda: 'Reina en su color' - reina blanca en casilla blanca.",
                "de": "Die weiße Dame startet auf d1, einem hellen Feld. Merke: 'Dame auf ihrer Farbe' - weiße Dame auf weißem Feld.",
                "nl": "De witte dame begint op d1, wat een licht veld is. Onthoud: 'Dame op haar kleur' - witte dame op wit veld."
            }
        },
        {
            "question": {
                "en": "What is the 'Sicilian Defense'?",
                "es": "¿Qué es la 'Defensa Siciliana'?",
                "de": "Was ist die 'Sizilianische Verteidigung'?",
                "nl": "Wat is de 'Siciliaanse verdediging'?"
            },
            "options": [
                {
                    "en": "1.e4 c5 - Black's most popular defense",
                    "es": "1.e4 c5 - La defensa más popular de las negras",
                    "de": "1.e4 c5 - Schwarz' populärste Verteidigung",
                    "nl": "1.e4 c5 - Zwarts meest populaire verdediging"
                },
                {
                    "en": "1.d4 Nf6",
                    "es": "1.d4 Cf6",
                    "de": "1.d4 Sf6",
                    "nl": "1.d4 Pf6"
                },
                {
                    "en": "1.e4 e5",
                    "es": "1.e4 e5",
                    "de": "1.e4 e5",
                    "nl": "1.e4 e5"
                },
                {
                    "en": "1.Nf3 d5",
                    "es": "1.Cf3 d5",
                    "de": "1.Sf3 d5",
                    "nl": "1.Pf3 d5"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Sicilian Defense (1.e4 c5) is Black's most popular and successful response to 1.e4, leading to complex and fighting games.",
                "es": "La Defensa Siciliana (1.e4 c5) es la respuesta más popular y exitosa de las negras a 1.e4, llevando a juegos complejos y de lucha.",
                "de": "Die Sizilianische Verteidigung (1.e4 c5) ist Schwarz' populärste und erfolgreichste Antwort auf 1.e4, sie führt zu komplexen Kampfpartien.",
                "nl": "De Siciliaanse verdediging (1.e4 c5) is zwarts meest populaire en succesvolle antwoord op 1.e4, leidend tot complexe en strijdlustige partijen."
            }
        },
        {
            "question": {
                "en": "What is a 'skewer' in chess?",
                "es": "¿Qué es un 'pincho' en ajedrez?",
                "de": "Was ist ein 'Spieß' im Schach?",
                "nl": "Wat is een 'spies' bij schaken?"
            },
            "options": [
                {
                    "en": "An attack on a valuable piece that forces it to move and expose a less valuable piece behind",
                    "es": "Un ataque a una pieza valiosa que la obliga a moverse y exponer una pieza menos valiosa detrás",
                    "de": "Angriff auf eine wertvolle Figur die sich bewegen muss und eine weniger wertvolle dahinter freigibt",
                    "nl": "Een aanval op een waardevol stuk dat moet bewegen en een minder waardevol stuk erachter blootstelt"
                },
                {
                    "en": "A fork attack",
                    "es": "Un ataque de tenedor",
                    "de": "Ein Gabelangriff",
                    "nl": "Een vorkaanval"
                },
                {
                    "en": "A pin attack",
                    "es": "Un ataque de clavada",
                    "de": "Eine Fesselung",
                    "nl": "Een penning"
                },
                {
                    "en": "A checkmate pattern",
                    "es": "Un patrón de jaque mate",
                    "de": "Ein Schachmatt-Muster",
                    "nl": "Een schaakmatpatroon"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A skewer is like a reverse pin - it attacks a valuable piece that must move, exposing a less valuable piece behind it to capture.",
                "es": "Un pincho es como una clavada inversa - ataca una pieza valiosa que debe moverse, exponiendo una pieza menos valiosa detrás para capturar.",
                "de": "Ein Spieß ist wie eine umgekehrte Fesselung - er greift eine wertvolle Figur an, die ziehen muss und eine weniger wertvolle Figur dahinter zum Schlagen freigibt.",
                "nl": "Een spies is als een omgekeerde penning - het valt een waardevol stuk aan dat moet bewegen, waardoor een minder waardevol stuk erachter kan worden geslagen."
            }
        },
        {
            "question": {
                "en": "Can you castle through check?",
                "es": "¿Puedes enrocar a través del jaque?",
                "de": "Kann man durch ein Schach rochieren?",
                "nl": "Kun je rokeren door schaak?"
            },
            "options": [
                {
                    "en": "No, you cannot castle through check",
                    "es": "No, no puedes enrocar a través del jaque",
                    "de": "Nein, man kann nicht durch ein Schach rochieren",
                    "nl": "Nee, je kunt niet door schaak rokeren"
                },
                {
                    "en": "Yes, always",
                    "es": "Sí, siempre",
                    "de": "Ja, immer",
                    "nl": "Ja, altijd"
                },
                {
                    "en": "Only on queenside",
                    "es": "Solo en el lado de la dama",
                    "de": "Nur auf der Damenseite",
                    "nl": "Alleen aan de damevleugel"
                },
                {
                    "en": "Only on kingside",
                    "es": "Solo en el lado del rey",
                    "de": "Nur auf der Königsseite",
                    "nl": "Alleen aan de koningsvleugel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You cannot castle if your king is in check, moves through check, or ends up in check. The king must be safe throughout the castling move.",
                "es": "No puedes enrocar si tu rey está en jaque, pasa por jaque o termina en jaque. El rey debe estar seguro durante todo el movimiento de enroque.",
                "de": "Man kann nicht rochieren, wenn der König im Schach steht, durch ein Schach zieht oder im Schach landet. Der König muss während der gesamten Rochade sicher sein.",
                "nl": "Je kunt niet rokeren als je koning schaak staat, door schaak beweegt, of in schaak eindigt. De koning moet veilig zijn tijdens de hele rokade."
            }
        },
        {
            "question": {
                "en": "What is the 'endgame'?",
                "es": "¿Qué es el 'final'?",
                "de": "Was ist das 'Endspiel'?",
                "nl": "Wat is het 'eindspel'?"
            },
            "options": [
                {
                    "en": "The final phase of the game with few pieces remaining",
                    "es": "La fase final del juego con pocas piezas restantes",
                    "de": "Die Endphase des Spiels mit wenigen verbleibenden Figuren",
                    "nl": "De laatste fase van het spel met weinig stukken over"
                },
                {
                    "en": "The opening moves",
                    "es": "Los movimientos de apertura",
                    "de": "Die Eröffnungszüge",
                    "nl": "De openingszetten"
                },
                {
                    "en": "The middle game",
                    "es": "El medio juego",
                    "de": "Das Mittelspiel",
                    "nl": "Het middenspel"
                },
                {
                    "en": "Checkmate",
                    "es": "Jaque mate",
                    "de": "Schachmatt",
                    "nl": "Schaakmat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The endgame is the final phase of chess when most pieces have been exchanged and kings become active pieces. Different principles apply than in the opening or middlegame.",
                "es": "El final es la fase final del ajedrez cuando la mayoría de las piezas han sido intercambiadas y los reyes se vuelven piezas activas. Se aplican principios diferentes que en la apertura o medio juego.",
                "de": "Das Endspiel ist die Endphase des Schachs, wenn die meisten Figuren getauscht wurden und Könige zu aktiven Figuren werden. Es gelten andere Prinzipien als in Eröffnung oder Mittelspiel.",
                "nl": "Het eindspel is de laatste fase van het schaken wanneer de meeste stukken zijn geruild en koningen actieve stukken worden. Er gelden andere principes dan in de opening of het middenspel."
            }
        },
        {
            "question": {
                "en": "What is 'notation' in chess?",
                "es": "¿Qué es la 'notación' en ajedrez?",
                "de": "Was ist 'Notation' im Schach?",
                "nl": "Wat is 'notatie' bij schaken?"
            },
            "options": [
                {
                    "en": "The system for recording chess moves",
                    "es": "El sistema para registrar movimientos de ajedrez",
                    "de": "Das System zur Aufzeichnung von Schachzügen",
                    "nl": "Het systeem voor het noteren van schaakzetten"
                },
                {
                    "en": "The chess board layout",
                    "es": "El diseño del tablero",
                    "de": "Die Schachbrettanordnung",
                    "nl": "De schaakbordindeling"
                },
                {
                    "en": "The piece values",
                    "es": "Los valores de las piezas",
                    "de": "Die Figurenwerte",
                    "nl": "De stukwaarden"
                },
                {
                    "en": "The time control",
                    "es": "El control de tiempo",
                    "de": "Die Zeitkontrolle",
                    "nl": "De tijdscontrole"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Chess notation is the system for recording moves in a game. The most common is algebraic notation, using letters for files and numbers for ranks.",
                "es": "La notación de ajedrez es el sistema para registrar movimientos en un juego. La más común es la notación algebraica, usando letras para columnas y números para filas.",
                "de": "Schachnotation ist das System zur Aufzeichnung von Zügen in einer Partie. Am häufigsten ist die algebraische Notation mit Buchstaben für Linien und Zahlen für Reihen.",
                "nl": "Schaaknotatie is het systeem voor het noteren van zetten in een partij. De meest gebruikte is algebraïsche notatie, met letters voor lijnen en cijfers voor rijen."
            }
        },
        {
            "question": {
                "en": "What is a 'double attack'?",
                "es": "¿Qué es un 'doble ataque'?",
                "de": "Was ist ein 'Doppelangriff'?",
                "nl": "Wat is een 'dubbele aanval'?"
            },
            "options": [
                {
                    "en": "When one piece attacks two enemy pieces at the same time",
                    "es": "Cuando una pieza ataca dos piezas enemigas al mismo tiempo",
                    "de": "Wenn eine Figur zwei gegnerische Figuren gleichzeitig angreift",
                    "nl": "Wanneer één stuk twee vijandelijke stukken tegelijk aanvalt"
                },
                {
                    "en": "Two pieces attacking one square",
                    "es": "Dos piezas atacando una casilla",
                    "de": "Zwei Figuren greifen ein Feld an",
                    "nl": "Twee stukken vallen één veld aan"
                },
                {
                    "en": "Moving twice in a row",
                    "es": "Mover dos veces seguidas",
                    "de": "Zweimal hintereinander ziehen",
                    "nl": "Twee keer achter elkaar zetten"
                },
                {
                    "en": "Capturing two pieces",
                    "es": "Capturar dos piezas",
                    "de": "Zwei Figuren schlagen",
                    "nl": "Twee stukken slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A double attack (or fork) occurs when a single piece attacks two or more enemy pieces simultaneously, forcing the opponent to save only one.",
                "es": "Un doble ataque (o tenedor) ocurre cuando una sola pieza ataca dos o más piezas enemigas simultáneamente, forzando al oponente a salvar solo una.",
                "de": "Ein Doppelangriff (oder Gabel) entsteht, wenn eine einzelne Figur zwei oder mehr gegnerische Figuren gleichzeitig angreift und der Gegner nur eine retten kann.",
                "nl": "Een dubbele aanval (of vork) treedt op wanneer één stuk twee of meer vijandelijke stukken tegelijk aanvalt, waardoor de tegenstander er maar één kan redden."
            }
        },
        {
            "question": {
                "en": "What does 'hanging' mean in chess?",
                "es": "¿Qué significa 'colgada' en ajedrez?",
                "de": "Was bedeutet 'hängen' im Schach?",
                "nl": "Wat betekent 'hangen' bij schaken?"
            },
            "options": [
                {
                    "en": "A piece that is undefended and can be captured for free",
                    "es": "Una pieza que no está defendida y puede ser capturada gratis",
                    "de": "Eine Figur, die unverteidigt ist und kostenlos geschlagen werden kann",
                    "nl": "Een stuk dat onverdedigd is en gratis kan worden geslagen"
                },
                {
                    "en": "A piece in the center",
                    "es": "Una pieza en el centro",
                    "de": "Eine Figur im Zentrum",
                    "nl": "Een stuk in het centrum"
                },
                {
                    "en": "A promoted pawn",
                    "es": "Un peón promocionado",
                    "de": "Ein umgewandelter Bauer",
                    "nl": "Een gepromoveerde pion"
                },
                {
                    "en": "A pinned piece",
                    "es": "Una pieza clavada",
                    "de": "Eine gefesselte Figur",
                    "nl": "Een gepend stuk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A hanging piece is one that is undefended and can be captured without any compensation. It's also called an 'en prise' piece.",
                "es": "Una pieza colgada es aquella que no está defendida y puede ser capturada sin compensación. También se llama pieza 'en prise'.",
                "de": "Eine hängende Figur ist unverteidigt und kann ohne Kompensation geschlagen werden. Sie wird auch 'en prise' Figur genannt.",
                "nl": "Een hangend stuk is onverdedigd en kan zonder compensatie worden geslagen. Het wordt ook een 'en prise' stuk genoemd."
            }
        },
        {
            "question": {
                "en": "What is a 'gambit' in chess?",
                "es": "¿Qué es un 'gambito' en ajedrez?",
                "de": "Was ist ein 'Gambit' im Schach?",
                "nl": "Wat is een 'gambiet' bij schaken?"
            },
            "options": [
                {
                    "en": "An opening where material is sacrificed for position or development",
                    "es": "Una apertura donde se sacrifica material por posición o desarrollo",
                    "de": "Eine Eröffnung, bei der Material für Position oder Entwicklung geopfert wird",
                    "nl": "Een opening waarbij materiaal wordt geofferd voor positie of ontwikkeling"
                },
                {
                    "en": "A type of endgame",
                    "es": "Un tipo de final",
                    "de": "Eine Art von Endspiel",
                    "nl": "Een type eindspel"
                },
                {
                    "en": "A checkmate pattern",
                    "es": "Un patrón de jaque mate",
                    "de": "Ein Schachmatt-Muster",
                    "nl": "Een schaakmatpatroon"
                },
                {
                    "en": "A defensive strategy",
                    "es": "Una estrategia defensiva",
                    "de": "Eine Verteidigungsstrategie",
                    "nl": "Een verdedigingsstrategie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A gambit is an opening where a player sacrifices material (usually a pawn) to gain advantages in development, position, or attacking chances.",
                "es": "Un gambito es una apertura donde un jugador sacrifica material (generalmente un peón) para obtener ventajas en desarrollo, posición o oportunidades de ataque.",
                "de": "Ein Gambit ist eine Eröffnung, bei der ein Spieler Material (meist einen Bauern) opfert, um Vorteile in Entwicklung, Position oder Angriffschancen zu erlangen.",
                "nl": "Een gambiet is een opening waarbij een speler materiaal (meestal een pion) offert om voordelen in ontwikkeling, positie of aanvalskansen te krijgen."
            }
        },
        {
            "question": {
                "en": "What does 'x' mean in chess notation?",
                "es": "¿Qué significa 'x' en notación de ajedrez?",
                "de": "Was bedeutet 'x' in der Schachnotation?",
                "nl": "Wat betekent 'x' in schaaknotatie?"
            },
            "options": [
                {
                    "en": "Captures",
                    "es": "Captura",
                    "de": "Schlägt",
                    "nl": "Slaat"
                },
                {
                    "en": "Check",
                    "es": "Jaque",
                    "de": "Schach",
                    "nl": "Schaak"
                },
                {
                    "en": "Checkmate",
                    "es": "Jaque mate",
                    "de": "Schachmatt",
                    "nl": "Schaakmat"
                },
                {
                    "en": "Castling",
                    "es": "Enroque",
                    "de": "Rochade",
                    "nl": "Rokade"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In chess notation, 'x' indicates a capture. For example, Bxe5 means bishop captures on e5.",
                "es": "En notación de ajedrez, 'x' indica una captura. Por ejemplo, Axe5 significa alfil captura en e5.",
                "de": "in der Schachnotation zeigt 'x' einen Schlag an. Zum Beispiel bedeutet Lxe5 Läufer schlägt auf e5.",
                "nl": "in schaaknotatie geeft 'x' een slag aan. Bijvoorbeeld, Lxe5 betekent loper slaat op e5."
            }
        },
        {
            "question": {
                "en": "What is 'castling short'?",
                "es": "¿Qué es el 'enroque corto'?",
                "de": "Was ist die 'kurze Rochade'?",
                "nl": "Wat is 'korte rokade'?"
            },
            "options": [
                {
                    "en": "Castling kingside (O-O)",
                    "es": "Enroque del lado del rey (O-O)",
                    "de": "Rochade zur Königsseite (O-O)",
                    "nl": "Rokade naar de koningsvleugel (O-O)"
                },
                {
                    "en": "Castling queenside (O-O-O)",
                    "es": "Enroque del lado de la dama (O-O-O)",
                    "de": "Rochade zur Damenseite (O-O-O)",
                    "nl": "Rokade naar de damevleugel (O-O-O)"
                },
                {
                    "en": "Moving the king one square",
                    "es": "Mover el rey una casilla",
                    "de": "Den König ein Feld bewegen",
                    "nl": "De koning één veld bewegen"
                },
                {
                    "en": "A quick checkmate",
                    "es": "Un jaque mate rápido",
                    "de": "Ein schnelles Schachmatt",
                    "nl": "Een snel schaakmat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Castling short (kingside castling or O-O) involves moving the king two squares toward the kingside rook, which then moves to the other side of the king.",
                "es": "El enroque corto (enroque del lado del rey u O-O) implica mover el rey dos casillas hacia la torre del lado del rey, que luego se mueve al otro lado del rey.",
                "de": "Die kurze Rochade (Königsrochade oder O-O) bedeutet, den König zwei Felder zum Königsturm zu bewegen, der dann auf die andere Seite des Königs zieht.",
                "nl": "Korte rokade (koningsvleugel rokade of O-O) houdt in dat de koning twee velden naar de koningsvleugel toren beweegt, die dan naar de andere kant van de koning gaat."
            }
        },
        {
            "question": {
                "en": "What is a 'backward pawn'?",
                "es": "¿Qué es un 'peón retrasado'?",
                "de": "Was ist ein 'rückständiger Bauer'?",
                "nl": "Wat is een 'achtergebleven pion'?"
            },
            "options": [
                {
                    "en": "A pawn that cannot advance because the square in front is controlled by enemy pawns",
                    "es": "Un peón que no puede avanzar porque la casilla delante está controlada por peones enemigos",
                    "de": "Ein Bauer, der nicht vorrücken kann, weil das Feld davor von gegnerischen Bauern kontrolliert wird",
                    "nl": "Een pion die niet kan opruken omdat het veld ervoor wordt gecontroleerd door vijandelijke pionnen"
                },
                {
                    "en": "A pawn moving backwards",
                    "es": "Un peón moviéndose hacia atrás",
                    "de": "Ein Bauer, der rückwärts zieht",
                    "nl": "Een pion die achteruit beweegt"
                },
                {
                    "en": "A passed pawn",
                    "es": "Un peón pasado",
                    "de": "Ein Freibauer",
                    "nl": "Een vrijpion"
                },
                {
                    "en": "An isolated pawn",
                    "es": "Un peón aislado",
                    "de": "Ein isolierter Bauer",
                    "nl": "Een geïsoleerde pion"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A backward pawn is one that lags behind its neighboring pawns and cannot safely advance because enemy pawns control the square in front of it.",
                "es": "Un peón retrasado es uno que queda rezagado detrás de sus peones vecinos y no puede avanzar de forma segura porque los peones enemigos controlan la casilla delante.",
                "de": "Ein rückständiger Bauer ist einer, der hinter seinen Nachbarbauern zurückbleibt und nicht sicher vorrücken kann, weil gegnerische Bauern das Feld davor kontrollieren.",
                "nl": "Een achtergebleven pion is er één die achterloopt op zijn buurpionnen en niet veilig kan opruken omdat vijandelijke pionnen het veld ervoor controleren."
            }
        },
        {
            "question": {
                "en": "What does '+' mean in chess notation?",
                "es": "¿Qué significa '+' en notación de ajedrez?",
                "de": "Was bedeutet '+' in der Schachnotation?",
                "nl": "Wat betekent '+' in schaaknotatie?"
            },
            "options": [
                {
                    "en": "Check",
                    "es": "Jaque",
                    "de": "Schach",
                    "nl": "Schaak"
                },
                {
                    "en": "Checkmate",
                    "es": "Jaque mate",
                    "de": "Schachmatt",
                    "nl": "Schaakmat"
                },
                {
                    "en": "Good move",
                    "es": "Buen movimiento",
                    "de": "Guter Zug",
                    "nl": "Goede zet"
                },
                {
                    "en": "Capture",
                    "es": "Captura",
                    "de": "Schlag",
                    "nl": "Slag"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In chess notation, '+' indicates check. For example, Qd8+ means queen to d8 with check.",
                "es": "En notación de ajedrez, '+' indica jaque. Por ejemplo, Dd8+ significa reina a d8 con jaque.",
                "de": "in der Schachnotation zeigt '+' Schach an. Zum Beispiel bedeutet Dd8+ Dame nach d8 mit Schach.",
                "nl": "in schaaknotatie geeft '+' schaak aan. Bijvoorbeeld, Dd8+ betekent dame naar d8 met schaak."
            }
        },
        {
            "question": {
                "en": "What is a 'pawn chain'?",
                "es": "¿Qué es una 'cadena de peones'?",
                "de": "Was ist eine 'Bauernkette'?",
                "nl": "Wat is een 'pionnenketen'?"
            },
            "options": [
                {
                    "en": "A diagonal line of pawns protecting each other",
                    "es": "Una línea diagonal de peones protegiéndose mutuamente",
                    "de": "Eine diagonale Linie von Bauern, die sich gegenseitig schützen",
                    "nl": "Een diagonale lijn van pionnen die elkaar beschermen"
                },
                {
                    "en": "Pawns in a horizontal row",
                    "es": "Peones en una fila horizontal",
                    "de": "Bauern in einer horizontalen Reihe",
                    "nl": "Pionnen in een horizontale rij"
                },
                {
                    "en": "Doubled pawns",
                    "es": "Peones doblados",
                    "de": "Doppelbauern",
                    "nl": "Dubbelpionnen"
                },
                {
                    "en": "Isolated pawns",
                    "es": "Peones aislados",
                    "de": "Isolierte Bauern",
                    "nl": "Geïsoleerde pionnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pawn chain is a diagonal line of pawns where each pawn protects the one in front of it, creating a strong defensive structure.",
                "es": "Una cadena de peones es una línea diagonal de peones donde cada peón protege al que está delante, creando una estructura defensiva fuerte.",
                "de": "Eine Bauernkette ist eine diagonale Linie von Bauern, bei der jeder Bauer den vor ihm schützt und eine starke Verteidigungsstruktur bildet.",
                "nl": "Een pionnenketen is een diagonale lijn van pionnen waarbij elke pion degene ervoor beschermt, wat een sterke verdedigingsstructuur creëert."
            }
        },
        {
            "question": {
                "en": "What is the 'French Defense'?",
                "es": "¿Qué es la 'Defensa Francesa'?",
                "de": "Was ist die 'Französische Verteidigung'?",
                "nl": "Wat is de 'Franse verdediging'?"
            },
            "options": [
                {
                    "en": "1.e4 e6 - A solid defense for Black",
                    "es": "1.e4 e6 - Una defensa sólida para las negras",
                    "de": "1.e4 e6 - Eine solide Verteidigung für Schwarz",
                    "nl": "1.e4 e6 - Een solide verdediging voor zwart"
                },
                {
                    "en": "1.d4 d5",
                    "es": "1.d4 d5",
                    "de": "1.d4 d5",
                    "nl": "1.d4 d5"
                },
                {
                    "en": "1.e4 c5",
                    "es": "1.e4 c5",
                    "de": "1.e4 c5",
                    "nl": "1.e4 c5"
                },
                {
                    "en": "1.Nf3",
                    "es": "1.Cf3",
                    "de": "1.Sf3",
                    "nl": "1.Pf3"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The French Defense (1.e4 e6) is a solid opening for Black that often leads to strategic, positional games with a strong pawn center.",
                "es": "La Defensa Francesa (1.e4 e6) es una apertura sólida para las negras que a menudo lleva a juegos estratégicos y posicionales con un centro de peones fuerte.",
                "de": "Die Französische Verteidigung (1.e4 e6) ist eine solide Eröffnung für Schwarz, die oft zu strategischen, positionellen Partien mit starkem Bauernzentrum führt.",
                "nl": "De Franse verdediging (1.e4 e6) is een solide opening voor zwart die vaak leidt tot strategische, positionele partijen met een sterk pionnencentrum."
            }
        },
        {
            "question": {
                "en": "What does '#' mean in chess notation?",
                "es": "¿Qué significa '#' en notación de ajedrez?",
                "de": "Was bedeutet '#' in der Schachnotation?",
                "nl": "Wat betekent '#' in schaaknotatie?"
            },
            "options": [
                {
                    "en": "Checkmate",
                    "es": "Jaque mate",
                    "de": "Schachmatt",
                    "nl": "Schaakmat"
                },
                {
                    "en": "Check",
                    "es": "Jaque",
                    "de": "Schach",
                    "nl": "Schaak"
                },
                {
                    "en": "Draw",
                    "es": "Tablas",
                    "de": "Remis",
                    "nl": "Remise"
                },
                {
                    "en": "Stalemate",
                    "es": "Ahogado",
                    "de": "Patt",
                    "nl": "Pat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In chess notation, '#' indicates checkmate. For example, Qg7# means queen to g7, checkmate.",
                "es": "En notación de ajedrez, '#' indica jaque mate. Por ejemplo, Dg7# significa reina a g7, jaque mate.",
                "de": "in der Schachnotation zeigt '#' Schachmatt an. Zum Beispiel bedeutet Dg7# Dame nach g7, Schachmatt.",
                "nl": "in schaaknotatie geeft '#' schaakmat aan. Bijvoorbeeld, Dg7# betekent dame naar g7, schaakmat."
            }
        },
        {
            "question": {
                "en": "What is an 'exchange' in chess?",
                "es": "¿Qué es un 'cambio' en ajedrez?",
                "de": "Was ist ein 'Tausch' im Schach?",
                "nl": "Wat is een 'ruil' bij schaken?"
            },
            "options": [
                {
                    "en": "Trading pieces of equal value, or specifically rook for bishop/knight",
                    "es": "Intercambiar piezas de igual valor, o específicamente torre por alfil/caballo",
                    "de": "Figuren gleichen Wertes tauschen, oder speziell Turm für Läufer/Springer",
                    "nl": "Stukken van gelijke waarde ruilen, of specifiek toren voor loper/paard"
                },
                {
                    "en": "Moving twice",
                    "es": "Mover dos veces",
                    "de": "Zweimal ziehen",
                    "nl": "Twee keer zetten"
                },
                {
                    "en": "Castling",
                    "es": "Enroque",
                    "de": "Rochade",
                    "nl": "Rokade"
                },
                {
                    "en": "Pawn promotion",
                    "es": "Promoción de peón",
                    "de": "Bauernumwandlung",
                    "nl": "Pionpromotie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An exchange refers to trading pieces of equal value. 'Winning the exchange' specifically means gaining a rook for a bishop or knight.",
                "es": "Un cambio se refiere a intercambiar piezas de igual valor. 'Ganar el cambio' específicamente significa obtener una torre por un alfil o caballo.",
                "de": "Ein Tausch bezieht sich auf den Austausch von Figuren gleichen Wertes. 'Die Qualität gewinnen' bedeutet speziell, einen Turm für Läufer oder Springer zu bekommen.",
                "nl": "Een ruil verwijst naar het ruilen van stukken van gelijke waarde. 'De kwaliteit winnen' betekent specifiek een toren krijgen voor een loper of paard."
            }
        },
        {
            "question": {
                "en": "What is the starting position of Black's king?",
                "es": "¿Cuál es la posición inicial del rey negro?",
                "de": "Was ist die Ausgangsstellung des schwarzen Königs?",
                "nl": "Wat is de startpositie van de zwarte koning?"
            },
            "options": [
                {
                    "en": "e8",
                    "es": "e8",
                    "de": "e8",
                    "nl": "e8"
                },
                {
                    "en": "d8",
                    "es": "d8",
                    "de": "d8",
                    "nl": "d8"
                },
                {
                    "en": "e1",
                    "es": "e1",
                    "de": "e1",
                    "nl": "e1"
                },
                {
                    "en": "d1",
                    "es": "d1",
                    "de": "d1",
                    "nl": "d1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Black king starts on e8, directly opposite the White king on e1. Kings always face each other at the start.",
                "es": "El rey negro comienza en e8, directamente opuesto al rey blanco en e1. Los reyes siempre se enfrentan al inicio.",
                "de": "Der schwarze König startet auf e8, direkt gegenüber dem weißen König auf e1. Könige stehen sich zu Beginn immer gegenüber.",
                "nl": "De zwarte koning begint op e8, direct tegenover de witte koning op e1. Koningen staan altijd tegenover elkaar aan het begin."
            }
        },
        {
            "question": {
                "en": "What is 'insufficient material' for checkmate?",
                "es": "¿Qué es 'material insuficiente' para jaque mate?",
                "de": "Was ist 'unzureichendes Material' für Schachmatt?",
                "nl": "Wat is 'onvoldoende materiaal' voor schaakmat?"
            },
            "options": [
                {
                    "en": "When neither side has enough pieces to force checkmate",
                    "es": "Cuando ningún lado tiene piezas suficientes para forzar jaque mate",
                    "de": "Wenn keine Seite genug Figuren hat, um Schachmatt zu erzwingen",
                    "nl": "Wanneer geen van beide kanten genoeg stukken heeft om schaakmat te forceren"
                },
                {
                    "en": "Not having a queen",
                    "es": "No tener una reina",
                    "de": "Keine Dame haben",
                    "nl": "Geen dame hebben"
                },
                {
                    "en": "Having only pawns",
                    "es": "Tener solo peones",
                    "de": "Nur Bauern haben",
                    "nl": "Alleen pionnen hebben"
                },
                {
                    "en": "Being down material",
                    "es": "Estar abajo en material",
                    "de": "Weniger Material haben",
                    "nl": "Minder materiaal hebben"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Insufficient material means neither player has enough pieces to force checkmate (e.g., King vs King, or King and Bishop vs King). The game is drawn.",
                "es": "Material insuficiente significa que ningún jugador tiene piezas suficientes para forzar jaque mate (ej., Rey vs Rey, o Rey y Alfil vs Rey). El juego es tablas.",
                "de": "Unzureichendes Material bedeutet, dass kein Spieler genug Figuren hat, um Schachmatt zu erzwingen (z.B. König gegen König, oder König und Läufer gegen König). Die Partie ist remis.",
                "nl": "Onvoldoende materiaal betekent dat geen speler genoeg stukken heeft om schaakmat te forceren (bijv. Koning vs Koning, van Koning en Loper vs Koning). Het spel is remise."
            }
        },
        {
            "question": {
                "en": "What is the 'Caro-Kann Defense'?",
                "es": "¿Qué es la 'Defensa Caro-Kann'?",
                "de": "Was ist die 'Caro-Kann Verteidigung'?",
                "nl": "Wat is de 'Caro-Kann verdediging'?"
            },
            "options": [
                {
                    "en": "1.e4 c6 - A solid defense for Black",
                    "es": "1.e4 c6 - Una defensa sólida para las negras",
                    "de": "1.e4 c6 - Eine solide Verteidigung für Schwarz",
                    "nl": "1.e4 c6 - Een solide verdediging voor zwart"
                },
                {
                    "en": "1.d4 d5",
                    "es": "1.d4 d5",
                    "de": "1.d4 d5",
                    "nl": "1.d4 d5"
                },
                {
                    "en": "1.e4 e5",
                    "es": "1.e4 e5",
                    "de": "1.e4 e5",
                    "nl": "1.e4 e5"
                },
                {
                    "en": "1.Nf3 Nf6",
                    "es": "1.Cf3 Cf6",
                    "de": "1.Sf3 Sf6",
                    "nl": "1.Pf3 Pf6"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Caro-Kann Defense (1.e4 c6) is a solid opening for Black that prepares ...d5, creating a strong pawn structure while avoiding early complications.",
                "es": "La Defensa Caro-Kann (1.e4 c6) es una apertura sólida para las negras que prepara ...d5, creando una estructura de peones fuerte mientras evita complicaciones tempranas.",
                "de": "Die Caro-Kann Verteidigung (1.e4 c6) ist eine solide Eröffnung für Schwarz, die ...d5 vorbereitet und eine starke Bauernstruktur schafft, während frühe Komplikationen vermieden werden.",
                "nl": "De Caro-Kann verdediging (1.e4 c6) is een solide opening voor zwart die ...d5 voorbereidt, een sterke pionnenstructuur creëert en vroege complicaties vermijdt."
            }
        },
        {
            "question": {
                "en": "What is a 'doubled pawn'?",
                "es": "¿Qué es un 'peón doblado'?",
                "de": "Was ist ein 'Doppelbauer'?",
                "nl": "Wat is een 'dubbelpion'?"
            },
            "options": [
                {
                    "en": "Two pawns of the same color on the same file",
                    "es": "Dos peones del mismo color en la misma columna",
                    "de": "Zwei Bauern derselben Farbe auf derselben Linie",
                    "nl": "Twee pionnen van dezelfde kleur op dezelfde lijn"
                },
                {
                    "en": "A pawn that has moved twice",
                    "es": "Un peón que se ha movido dos veces",
                    "de": "Ein Bauer, der zweimal gezogen ist",
                    "nl": "Een pion die twee keer heeft bewogen"
                },
                {
                    "en": "Connected pawns",
                    "es": "Peones conectados",
                    "de": "Verbundene Bauern",
                    "nl": "Verbonden pionnen"
                },
                {
                    "en": "A promoted pawn",
                    "es": "Un peón promocionado",
                    "de": "Ein umgewandelter Bauer",
                    "nl": "Een gepromoveerde pion"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Doubled pawns are two pawns of the same color on the same file, usually resulting from a capture. They are often considered weak.",
                "es": "Los peones doblados son dos peones del mismo color en la misma columna, generalmente resultado de una captura. A menudo se consideran débiles.",
                "de": "Doppelbauern sind zwei Bauern derselben Farbe auf derselben Linie, meist als Ergebnis eines Schlags. Sie gelten oft als schwach.",
                "nl": "Dubbelpionnen zijn twee pionnen van dezelfde kleur op dezelfde lijn, meestal het resultaat van een slag. Ze worden vaak als zwak beschouwd."
            }
        },
        {
            "question": {
                "en": "What is the 'King's Indian Defense'?",
                "es": "¿Qué es la 'Defensa India de Rey'?",
                "de": "Was ist die 'Königsindische Verteidigung'?",
                "nl": "Wat is de 'Konings-Indische verdediging'?"
            },
            "options": [
                {
                    "en": "1.d4 Nf6 2.c4 g6 - A counterattacking defense",
                    "es": "1.d4 Cf6 2.c4 g6 - Una defensa de contraataque",
                    "de": "1.d4 Sf6 2.c4 g6 - Eine Gegenangriffs-Verteidigung",
                    "nl": "1.d4 Pf6 2.c4 g6 - Een tegenaanval verdediging"
                },
                {
                    "en": "1.e4 e5",
                    "es": "1.e4 e5",
                    "de": "1.e4 e5",
                    "nl": "1.e4 e5"
                },
                {
                    "en": "1.e4 c5",
                    "es": "1.e4 c5",
                    "de": "1.e4 c5",
                    "nl": "1.e4 c5"
                },
                {
                    "en": "1.Nf3 d5",
                    "es": "1.Cf3 d5",
                    "de": "1.Sf3 d5",
                    "nl": "1.Pf3 d5"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The King's Indian Defense is a dynamic opening where Black fianchettoes the king's bishop and often launches a kingside attack later.",
                "es": "La Defensa India de Rey es una apertura dinámica donde las negras hacen fianchetto con el alfil del rey y a menudo lanzan un ataque al flanco del rey más tarde.",
                "de": "Die Königsindische Verteidigung ist eine dynamische Eröffnung, bei der Schwarz den Königsläufer fianchettiert und später oft einen Königsangriff startet.",
                "nl": "De Konings-Indische verdediging is een dynamische opening waarbij zwart de koningsloper fianchettoot en later vaak een koningsvleugelaanval lanceert."
            }
        },
        {
            "question": {
                "en": "What is the purpose of 'prophylaxis' in chess?",
                "es": "¿Cuál es el propósito de la 'profilaxis' en ajedrez?",
                "de": "Was ist der Zweck der 'Prophylaxe' im Schach?",
                "nl": "Wat is het doel van 'profylaxe' bij schaken?"
            },
            "options": [
                {
                    "en": "Preventing your opponent's plans before they happen",
                    "es": "Prevenir los planes del oponente antes de que sucedan",
                    "de": "Die Pläne des Gegners verhindern, bevor sie geschehen",
                    "nl": "De plannen van je tegenstander voorkomen voordat ze gebeuren"
                },
                {
                    "en": "Attacking the king",
                    "es": "Atacar al rey",
                    "de": "Den König angreifen",
                    "nl": "De koning aanvallen"
                },
                {
                    "en": "Promoting pawns",
                    "es": "Promocionar peones",
                    "de": "Bauern umwandeln",
                    "nl": "Pionnen promoveren"
                },
                {
                    "en": "Trading pieces",
                    "es": "Intercambiar piezas",
                    "de": "Figuren tauschen",
                    "nl": "Stukken ruilen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Prophylaxis is the practice of preventing your opponent's threats and plans before they can be executed, a key defensive concept.",
                "es": "La profilaxis es la práctica de prevenir las amenazas y planes del oponente antes de que puedan ejecutarse, un concepto defensivo clave.",
                "de": "Prophylaxe ist die Praxis, die Drohungen und Pläne des Gegners zu verhindern, bevor sie ausgeführt werden können - ein wichtiges Verteidigungskonzept.",
                "nl": "Profylaxe is het voorkomen van de dreigingen en plannen van je tegenstander voordat ze kunnen worden uitgevoerd, een belangrijk verdedigingsconcept."
            }
        },
        {
            "question": {
                "en": "What is a 'desperado' piece?",
                "es": "¿Qué es una pieza 'desesperada'?",
                "de": "Was ist eine 'Desperado' Figur?",
                "nl": "Wat is een 'desperado' stuk?"
            },
            "options": [
                {
                    "en": "A piece that's doomed but can do damage before being captured",
                    "es": "Una pieza condenada pero que puede hacer daño antes de ser capturada",
                    "de": "Eine verlorene Figur, die vor ihrer Eroberung noch Schaden anrichten kann",
                    "nl": "Een gedoemd stuk dat schade kan aanrichten voordat het wordt geslagen"
                },
                {
                    "en": "A very powerful piece",
                    "es": "Una pieza muy poderosa",
                    "de": "Eine sehr mächtige Figur",
                    "nl": "Een zeer krachtig stuk"
                },
                {
                    "en": "A promoted pawn",
                    "es": "Un peón promocionado",
                    "de": "Ein umgewandelter Bauer",
                    "nl": "Een gepromoveerde pion"
                },
                {
                    "en": "An isolated piece",
                    "es": "Una pieza aislada",
                    "de": "Eine isolierte Figur",
                    "nl": "Een geïsoleerd stuk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A desperado is a piece that is going to be captured anyway, so it tries to capture or do maximum damage before it's taken.",
                "es": "Un desesperado es una pieza que va a ser capturada de todos modos, así que intenta capturar o hacer el máximo daño antes de ser tomada.",
                "de": "Ein Desperado ist eine Figur, die sowieso geschlagen wird, also versucht sie vorher noch zu schlagen oder maximalen Schaden anzurichten.",
                "nl": "Een desperado is een stuk dat toch geslagen gaat worden, dus het probeert te slaan of maximale schade aan te richten voordat het wordt genomen."
            }
        },
        {
            "question": {
                "en": "What is 'time control' in chess?",
                "es": "¿Qué es el 'control de tiempo' en ajedrez?",
                "de": "Was ist 'Zeitkontrolle' im Schach?",
                "nl": "Wat is 'tijdcontrole' bij schaken?"
            },
            "options": [
                {
                    "en": "The amount of time each player has to make their moves",
                    "es": "La cantidad de tiempo que cada jugador tiene para hacer sus movimientos",
                    "de": "Die Zeit, die jeder Spieler für seine Züge hat",
                    "nl": "De hoeveelheid tijd die elke speler heeft om zijn zetten te doen"
                },
                {
                    "en": "Controlling the center early",
                    "es": "Controlar el centro temprano",
                    "de": "Das Zentrum früh kontrollieren",
                    "nl": "Het centrum vroeg controleren"
                },
                {
                    "en": "Managing your pieces",
                    "es": "Gestionar tus piezas",
                    "de": "Die eigenen Figuren verwalten",
                    "nl": "Je stukken beheren"
                },
                {
                    "en": "The opening phase",
                    "es": "La fase de apertura",
                    "de": "Die Eröffnungsphase",
                    "nl": "De openingsfase"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Time control refers to the time limits in chess games, such as rapid (15-25 minutes), blitz (3-5 minutes), or classical (90+ minutes).",
                "es": "El control de tiempo se refiere a los límites de tiempo en partidas de ajedrez, como rápidas (15-25 minutos), blitz (3-5 minutos) o clásicas (90+ minutos).",
                "de": "Zeitkontrolle bezieht sich auf die Zeitlimits in Schachpartien, wie Schnellschach (15-25 Minuten), Blitz (3-5 Minuten) oder klassisch (90+ Minuten).",
                "nl": "Tijdcontrole verwijst naar de tijdslimieten in schaakpartijen, zoals rapid (15-25 minuten), blitz (3-5 minuten) of klassiek (90+ minuten)."
            }
        },
        {
            "question": {
                "en": "What is a 'windmill' in chess?",
                "es": "¿Qué es un 'molino' en ajedrez?",
                "de": "Was ist eine 'Windmühle' im Schach?",
                "nl": "Wat is een 'molen' bij schaken?"
            },
            "options": [
                {
                    "en": "A series of discovered checks that win material",
                    "es": "Una serie de jaques descubiertos que ganan material",
                    "de": "Eine Serie von Abzugsschachs, die Material gewinnen",
                    "nl": "Een reeks ontdekte schaaks die materiaal winnen"
                },
                {
                    "en": "A pawn formation",
                    "es": "Una formación de peones",
                    "de": "Eine Bauernformation",
                    "nl": "Een pionnenformatie"
                },
                {
                    "en": "An opening trap",
                    "es": "Una trampa de apertura",
                    "de": "Eine Eröffnungsfalle",
                    "nl": "Een openingsval"
                },
                {
                    "en": "A type of draw",
                    "es": "Un tipo de tablas",
                    "de": "Eine Art von Remis",
                    "nl": "Een type remise"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A windmill is a tactical pattern where a piece moves back and forth, giving discovered check each time while the other piece captures material.",
                "es": "Un molino es un patrón táctico donde una pieza se mueve hacia adelante y atrás, dando jaque descubierto cada vez mientras la otra pieza captura material.",
                "de": "Eine Windmühle ist ein taktisches Muster, bei dem eine Figur hin und her zieht, jedes Mal Abzugsschach gibt, während die andere Figur Material schlägt.",
                "nl": "Een molen is een tactisch patroon waarbij een stuk heen en weer beweegt, telkens ontdekt schaak geeft terwijl het andere stuk materiaal slaat."
            }
        },
        {
            "question": {
                "en": "What is 'overloading' in chess tactics?",
                "es": "¿Qué es la 'sobrecarga' en tácticas de ajedrez?",
                "de": "Was ist 'Überlastung' in Schachtaktiken?",
                "nl": "Wat is 'overbelasting' in schaaktactiek?"
            },
            "options": [
                {
                    "en": "When a piece has too many defensive duties to handle",
                    "es": "Cuando una pieza tiene demasiadas tareas defensivas que manejar",
                    "de": "Wenn eine Figur zu viele Verteidigungsaufgaben hat",
                    "nl": "Wanneer een stuk te veel verdedigingstaken heeft"
                },
                {
                    "en": "Having too many pieces",
                    "es": "Tener demasiadas piezas",
                    "de": "Zu viele Figuren haben",
                    "nl": "Te veel stukken hebben"
                },
                {
                    "en": "Playing too fast",
                    "es": "Jugar demasiado rápido",
                    "de": "Zu schnell spielen",
                    "nl": "Te snel spelen"
                },
                {
                    "en": "A heavy position",
                    "es": "Una posición pesada",
                    "de": "Eine schwere Stellung",
                    "nl": "Een zware positie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Overloading occurs when a piece is defending multiple important squares or pieces and cannot fulfill all its defensive duties at once.",
                "es": "La sobrecarga ocurre cuando una pieza está defendiendo múltiples casillas o piezas importantes y no puede cumplir todas sus tareas defensivas a la vez.",
                "de": "Überlastung tritt auf, wenn eine Figur mehrere wichtige Felder oder Figuren verteidigt und nicht alle Verteidigungsaufgaben gleichzeitig erfüllen kann.",
                "nl": "Overbelasting treedt op wanneer een stuk meerdere belangrijke velden of stukken verdedigt en niet al zijn verdedigingstaken tegelijk kan vervullen."
            }
        },
        {
            "question": {
                "en": "What is the 'London System'?",
                "es": "¿Qué es el 'Sistema Londres'?",
                "de": "Was ist das 'Londoner System'?",
                "nl": "Wat is het 'Londen Systeem'?"
            },
            "options": [
                {
                    "en": "A solid opening system with 1.d4, 2.Nf3, 3.Bf4",
                    "es": "Un sistema de apertura sólido con 1.d4, 2.Cf3, 3.Af4",
                    "de": "Ein solides Eröffnungssystem mit 1.d4, 2.Sf3, 3.Lf4",
                    "nl": "Een solide openingssysteem met 1.d4, 2.Pf3, 3.Lf4"
                },
                {
                    "en": "1.e4 e5",
                    "es": "1.e4 e5",
                    "de": "1.e4 e5",
                    "nl": "1.e4 e5"
                },
                {
                    "en": "A chess tournament",
                    "es": "Un torneo de ajedrez",
                    "de": "Ein Schachturnier",
                    "nl": "Een schaaktoernooi"
                },
                {
                    "en": "An endgame technique",
                    "es": "Una técnica de final",
                    "de": "Eine Endspiel-Technik",
                    "nl": "Een eindspeltechniek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The London System is a solid opening system for White starting with 1.d4, 2.Nf3, and 3.Bf4, creating a stable pawn structure.",
                "es": "El Sistema Londres es un sistema de apertura sólido para las blancas que comienza con 1.d4, 2.Cf3 y 3.Af4, creando una estructura de peones estable.",
                "de": "Das Londoner System ist ein solides Eröffnungssystem für Weiß, das mit 1.d4, 2.Sf3 und 3.Lf4 beginnt und eine stabile Bauernstruktur schafft.",
                "nl": "Het Londen Systeem is een solide openingssysteem voor wit dat begint met 1.d4, 2.Pf3 en 3.Lf4, wat een stabiele pionnenstructuur creëert."
            }
        },
        {
            "question": {
                "en": "What is 'under promotion'?",
                "es": "¿Qué es la 'subpromoción'?",
                "de": "Was ist eine 'Unterverwandlung'?",
                "nl": "Wat is 'onderpromotie'?"
            },
            "options": [
                {
                    "en": "Promoting a pawn to a piece other than a queen",
                    "es": "Promocionar un peón a una pieza que no sea reina",
                    "de": "Einen Bauern in eine andere Figur als die Dame umwandeln",
                    "nl": "Een pion promoveren tot een ander stuk dan een dame"
                },
                {
                    "en": "Promoting too early",
                    "es": "Promocionar demasiado temprano",
                    "de": "Zu früh umwandeln",
                    "nl": "Te vroeg promoveren"
                },
                {
                    "en": "Not promoting a pawn",
                    "es": "No promocionar un peón",
                    "de": "Einen Bauern nicht umwandeln",
                    "nl": "Een pion niet promoveren"
                },
                {
                    "en": "Promoting slowly",
                    "es": "Promocionar lentamente",
                    "de": "Langsam umwandeln",
                    "nl": "Langzaam promoveren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Under promotion is when a pawn is promoted to a knight, bishop, or rook instead of a queen, usually for tactical reasons.",
                "es": "La subpromoción es cuando un peón se promociona a caballo, alfil o torre en lugar de reina, generalmente por razones tácticas.",
                "de": "Unterverwandlung ist, wenn ein Bauer in Springer, Läufer oder Turm statt in eine Dame umgewandelt wird, meist aus taktischen Gründen.",
                "nl": "Onderpromotie is wanneer een pion wordt gepromoveerd tot paard, loper van toren in plaats van dame, meestal om tactische redenen."
            }
        },
        {
            "question": {
                "en": "What is 'blitz chess'?",
                "es": "¿Qué es el 'ajedrez blitz'?",
                "de": "Was ist 'Blitzschach'?",
                "nl": "Wat is 'blitz schaken'?"
            },
            "options": [
                {
                    "en": "Chess games with 3-5 minutes per player",
                    "es": "Partidas de ajedrez con 3-5 minutos por jugador",
                    "de": "Schachpartien mit 3-5 Minuten pro Spieler",
                    "nl": "Schaakpartijen met 3-5 minuten per speler"
                },
                {
                    "en": "Very slow chess",
                    "es": "Ajedrez muy lento",
                    "de": "Sehr langsames Schach",
                    "nl": "Zeer langzaam schaken"
                },
                {
                    "en": "Chess without a clock",
                    "es": "Ajedrez sin reloj",
                    "de": "Schach ohne Uhr",
                    "nl": "Schaken zonder klok"
                },
                {
                    "en": "Team chess",
                    "es": "Ajedrez en equipo",
                    "de": "Mannschaftsschach",
                    "nl": "Teamschaak"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Blitz chess is a fast time control where each player has 3-5 minutes for the entire game, requiring quick thinking and fast moves.",
                "es": "El ajedrez blitz es un control de tiempo rápido donde cada jugador tiene 3-5 minutos para toda la partida, requiriendo pensamiento rápido y movimientos veloces.",
                "de": "Blitzschach ist eine schnelle Zeitkontrolle, bei der jeder Spieler 3-5 Minuten für die gesamte Partie hat, was schnelles Denken und schnelle Züge erfordert.",
                "nl": "Blitz schaken is een snelle tijdcontrole waarbij elke speler 3-5 minuten heeft voor de hele partij, wat snel denken en snelle zetten vereist."
            }
        },
        {
            "question": {
                "en": "What is a 'battery' in chess?",
                "es": "¿Qué es una 'batería' en ajedrez?",
                "de": "Was ist eine 'Batterie' im Schach?",
                "nl": "Wat is een 'batterij' bij schaken?"
            },
            "options": [
                {
                    "en": "Two or more pieces of the same color on the same line attacking together",
                    "es": "Dos o más piezas del mismo color en la misma línea atacando juntas",
                    "de": "Zwei oder mehr Figuren derselben Farbe auf derselben Linie, die zusammen angreifen",
                    "nl": "Twee of meer stukken van dezelfde kleur op dezelfde lijn die samen aanvallen"
                },
                {
                    "en": "The chess clock",
                    "es": "El reloj de ajedrez",
                    "de": "Die Schachuhr",
                    "nl": "De schaakklok"
                },
                {
                    "en": "A pawn formation",
                    "es": "Una formación de peones",
                    "de": "Eine Bauernformation",
                    "nl": "Een pionnenformatie"
                },
                {
                    "en": "An opening system",
                    "es": "Un sistema de apertura",
                    "de": "Ein Eröffnungssystem",
                    "nl": "Een openingssysteem"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A battery is formed when two pieces (often queen and rook, or two rooks) are lined up on the same file, rank, or diagonal to create a powerful attack.",
                "es": "Una batería se forma cuando dos piezas (a menudo reina y torre, o dos torres) se alinean en la misma columna, fila o diagonal para crear un ataque poderoso.",
                "de": "Eine Batterie entsteht, wenn zwei Figuren (oft Dame und Turm, oder zwei Türme) auf derselben Linie, Reihe oder Diagonale aufgestellt sind, um einen kraftvollen Angriff zu schaffen.",
                "nl": "Een batterij wordt gevormd wanneer twee stukken (vaak dame en toren, of twee torens) op dezelfde lijn, rij of diagonaal staan om een krachtige aanval te creëren."
            }
        },
        {
            "question": {
                "en": "What is 'Elo rating'?",
                "es": "¿Qué es el 'rating Elo'?",
                "de": "Was ist die 'Elo-Zahl'?",
                "nl": "Wat is 'Elo rating'?"
            },
            "options": [
                {
                    "en": "A system to calculate the relative skill levels of players",
                    "es": "Un sistema para calcular los niveles de habilidad relativos de los jugadores",
                    "de": "Ein System zur Berechnung der relativen Spielstärke von Spielern",
                    "nl": "Een systeem om de relatieve vaardigheidsniveaus van spelers te berekenen"
                },
                {
                    "en": "The number of games played",
                    "es": "El número de partidas jugadas",
                    "de": "Die Anzahl gespielter Partien",
                    "nl": "Het aantal gespeelde partijen"
                },
                {
                    "en": "Tournament points",
                    "es": "Puntos de torneo",
                    "de": "Turnierpunkte",
                    "nl": "Toernooipunten"
                },
                {
                    "en": "Chess piece values",
                    "es": "Valores de piezas de ajedrez",
                    "de": "Schachfigurenwerte",
                    "nl": "Schaakstukwaarden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Elo rating system is a method for calculating the relative skill levels of players. Higher ratings indicate stronger players.",
                "es": "El sistema de rating Elo es un método para calcular los niveles de habilidad relativos de los jugadores. Ratings más altos indican jugadores más fuertes.",
                "de": "Das Elo-System ist eine Methode zur Berechnung der relativen Spielstärke von Spielern. Höhere Zahlen zeigen stärkere Spieler an.",
                "nl": "Het Elo rating systeem is een methode om de relatieve vaardigheidsniveaus van spelers te berekenen. Hogere ratings duiden op sterkere spelers."
            }
        },
        {
            "question": {
                "en": "What is 'correspondence chess'?",
                "es": "¿Qué es el 'ajedrez por correspondencia'?",
                "de": "Was ist 'Fernschach'?",
                "nl": "Wat is 'correspondentieschaak'?"
            },
            "options": [
                {
                    "en": "Chess played over long periods with days per move",
                    "es": "Ajedrez jugado durante largos períodos con días por movimiento",
                    "de": "Schach über lange Zeiträume mit Tagen pro Zug",
                    "nl": "Schaak gespeeld over lange periodes met dagen per zet"
                },
                {
                    "en": "Chess played face to face",
                    "es": "Ajedrez jugado cara a cara",
                    "de": "Schach von Angesicht zu Angesicht",
                    "nl": "Schaak face-to-face gespeeld"
                },
                {
                    "en": "Speed chess",
                    "es": "Ajedrez rápido",
                    "de": "Schnellschach",
                    "nl": "Snelschaak"
                },
                {
                    "en": "Tournament chess",
                    "es": "Ajedrez de torneo",
                    "de": "Turnierschach",
                    "nl": "Toernooischaak"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Correspondence chess is played over long time periods (days or weeks per move), traditionally by mail, now often online.",
                "es": "El ajedrez por correspondencia se juega durante largos períodos (días o semanas por movimiento), tradicionalmente por correo, ahora a menudo en línea.",
                "de": "Fernschach wird über lange Zeiträume gespielt (Tage oder Wochen pro Zug), traditionell per Post, heute oft online.",
                "nl": "Correspondentieschaak wordt gespeeld over lange tijdsperiodes (dagen of weken per zet), traditioneel per post, nu vaak online."
            }
        },
        {
            "question": {
                "en": "What is 'Swiss system' in tournaments?",
                "es": "¿Qué es el 'sistema suizo' en torneos?",
                "de": "Was ist das 'Schweizer System' in Turnieren?",
                "nl": "Wat is het 'Zwitsers systeem' in toernooien?"
            },
            "options": [
                {
                    "en": "A tournament format where players are paired based on similar scores",
                    "es": "Un formato de torneo donde los jugadores se emparejan según puntuaciones similares",
                    "de": "Ein Turnierformat, bei dem Spieler nach ähnlichen Punktzahlen gepaart werden",
                    "nl": "Een toernooiformaat waarbij spelers worden gekoppeld op basis van vergelijkbare scores"
                },
                {
                    "en": "Round-robin format",
                    "es": "Formato todos contra todos",
                    "de": "Rundenturnier-Format",
                    "nl": "Round-robin formaat"
                },
                {
                    "en": "Knockout tournament",
                    "es": "Torneo eliminatorio",
                    "de": "K.o.-Turnier",
                    "nl": "Knock-out toernooi"
                },
                {
                    "en": "Team tournament",
                    "es": "Torneo por equipos",
                    "de": "Mannschaftsturnier",
                    "nl": "Teamtoernooi"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Swiss system pairs players with similar scores in each round without requiring everyone to play everyone else, allowing large tournaments.",
                "es": "El sistema suizo empareja jugadores con puntuaciones similares en cada ronda sin requerir que todos jueguen contra todos, permitiendo torneos grandes.",
                "de": "Das Schweizer System paart Spieler mit ähnlichen Punktzahlen in jeder Runde, ohne dass jeder gegen jeden spielen muss, was große Turniere ermöglicht.",
                "nl": "Het Zwitsers systeem koppelt spelers met vergelijkbare scores in elke ronde zonder dat iedereen tegen iedereen hoeft te spelen, wat grote toernooien mogelijk maakt."
            }
        },
        {
            "question": {
                "en": "What is 'perpetual check'?",
                "es": "¿Qué es el 'jaque perpetuo'?",
                "de": "Was ist 'Dauerschach'?",
                "nl": "Wat is 'eeuwig schaak'?"
            },
            "options": [
                {
                    "en": "A series of checks that forces a draw",
                    "es": "Una serie de jaques que fuerza tablas",
                    "de": "Eine Serie von Schachs, die ein Remis erzwingt",
                    "nl": "Een reeks schaaks die remise afdwingt"
                },
                {
                    "en": "Checkmate",
                    "es": "Jaque mate",
                    "de": "Schachmatt",
                    "nl": "Schaakmat"
                },
                {
                    "en": "A single check",
                    "es": "Un solo jaque",
                    "de": "Ein einzelnes Schach",
                    "nl": "Een enkele schaak"
                },
                {
                    "en": "Double check",
                    "es": "Jaque doble",
                    "de": "Doppelschach",
                    "nl": "Dubbelschaak"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Perpetual check is a situation where one player can give endless checks, forcing a draw as the position repeats or the defending player accepts the draw.",
                "es": "El jaque perpetuo es una situación donde un jugador puede dar jaques infinitos, forzando tablas cuando la posición se repite o el defensor acepta las tablas.",
                "de": "Dauerschach ist eine Situation, in der ein Spieler endlose Schachs geben kann, was ein Remis erzwingt, da sich die Stellung wiederholt oder der Verteidiger das Remis annimmt.",
                "nl": "Eeuwig schaak is een situatie waarin een speler eindeloos schaak kan geven, wat remise afdwingt doordat de stelling zich herhaalt of de verdediger remise accepteert."
            }
        },
        {
            "question": {
                "en": "What is 'chess blindness'?",
                "es": "¿Qué es la 'ceguera ajedrecística'?",
                "de": "Was ist 'Schachblindheit'?",
                "nl": "Wat is 'schaakblindheid'?"
            },
            "options": [
                {
                    "en": "Missing an obvious move or threat during a game",
                    "es": "Perder un movimiento o amenaza obvia durante una partida",
                    "de": "Einen offensichtlichen Zug oder eine Drohung während einer Partie übersehen",
                    "nl": "Een voor de hand liggende zet of dreiging missen tijdens een partij"
                },
                {
                    "en": "Playing without seeing the board",
                    "es": "Jugar sin ver el tablero",
                    "de": "Spielen ohne das Brett zu sehen",
                    "nl": "Spelen zonder het bord te zien"
                },
                {
                    "en": "Bad eyesight",
                    "es": "Mala vista",
                    "de": "Schlechtes Sehvermögen",
                    "nl": "Slecht zicht"
                },
                {
                    "en": "Playing too fast",
                    "es": "Jugar demasiado rápido",
                    "de": "Zu schnell spielen",
                    "nl": "Te snel spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Chess blindness is when a player fails to see an obvious move, capture, or threat, often due to fatigue or focus on other aspects of the position.",
                "es": "La ceguera ajedrecística es cuando un jugador no ve un movimiento, captura o amenaza obvia, a menudo debido a fatiga o enfoque en otros aspectos de la posición.",
                "de": "Schachblindheit ist, wenn ein Spieler einen offensichtlichen Zug, Schlag oder eine Drohung nicht sieht, oft aufgrund von Müdigkeit oder Fokus auf andere Aspekte der Stellung.",
                "nl": "Schaakblindheid is wanneer een speler een voor de hand liggende zet, slag of dreiging niet ziet, vaak door vermoeidheid of focus op andere aspecten van de stelling."
            }
        },
        {
            "question": {
                "en": "What is 'book' in chess?",
                "es": "¿Qué es el 'libro' en ajedrez?",
                "de": "Was ist 'Theorie' im Schach?",
                "nl": "Wat is 'boek' bij schaken?"
            },
            "options": [
                {
                    "en": "Known opening theory and established moves",
                    "es": "Teoría de aperturas conocida y movimientos establecidos",
                    "de": "Bekannte Eröffnungstheorie und etablierte Züge",
                    "nl": "Bekende openingstheorie en gevestigde zetten"
                },
                {
                    "en": "A chess manual",
                    "es": "Un manual de ajedrez",
                    "de": "Ein Schachhandbuch",
                    "nl": "Een schaakhandboek"
                },
                {
                    "en": "The rules of chess",
                    "es": "Las reglas del ajedrez",
                    "de": "Die Schachregeln",
                    "nl": "De schaakregels"
                },
                {
                    "en": "A chess database",
                    "es": "Una base de datos de ajedrez",
                    "de": "Eine Schachdatenbank",
                    "nl": "Een schaakdatabase"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Being 'in book' means playing moves that are part of established opening theory. 'Out of book' means entering unknown or less explored positions.",
                "es": "Estar 'en el libro' significa jugar movimientos que son parte de la teoría de aperturas establecida. 'Fuera del libro' significa entrar en posiciones desconocidas o menos exploradas.",
                "de": "in der 'Theorie' zu sein bedeutet, Züge zu spielen, die Teil der etablierten Eröffnungstheorie sind. 'Aus der Theorie' bedeutet, unbekannte oder weniger erforschte Stellungen zu betreten.",
                "nl": "in het 'boek' zijn betekent zetten spelen die deel uitmaken van gevestigde openingstheorie. 'Uit het boek' betekent onbekende van minder verkende stellingen ingaan."
            }
        },
        {
            "question": {
                "en": "What is the 'initiative' in chess?",
                "es": "¿Qué es la 'iniciativa' en ajedrez?",
                "de": "Was ist die 'Initiative' im Schach?",
                "nl": "Wat is het 'initiatief' bij schaken?"
            },
            "options": [
                {
                    "en": "The ability to make threats and dictate the flow of the game",
                    "es": "La capacidad de hacer amenazas y dictar el flujo del juego",
                    "de": "Die Fähigkeit, Drohungen aufzustellen und den Spielfluss zu bestimmen",
                    "nl": "Het vermogen om dreigingen te maken en de stroom van het spel te dicteren"
                },
                {
                    "en": "Moving first",
                    "es": "Mover primero",
                    "de": "Zuerst ziehen",
                    "nl": "Als eerste zetten"
                },
                {
                    "en": "Having more pieces",
                    "es": "Tener más piezas",
                    "de": "Mehr Figuren haben",
                    "nl": "Meer stukken hebben"
                },
                {
                    "en": "The opening move",
                    "es": "El movimiento de apertura",
                    "de": "Der Eröffnungszug",
                    "nl": "De openingszet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Initiative means having the ability to create threats and force your opponent to respond to your plans rather than pursuing their own.",
                "es": "La iniciativa significa tener la capacidad de crear amenazas y forzar a tu oponente a responder a tus planes en lugar de seguir los suyos.",
                "de": "Initiative bedeutet, die Fähigkeit zu haben, Drohungen zu schaffen und den Gegner zu zwingen, auf die eigenen Pläne zu reagieren, anstatt seine eigenen zu verfolgen.",
                "nl": "Initiatief betekent het vermogen hebben om dreigingen te creëren en je tegenstander te dwingen op jouw plannen te reageren in plaats van hun eigen plannen na te streven."
            }
        },
        {
            "question": {
                "en": "What is a 'blunder' in chess?",
                "es": "¿Qué es un 'error grave' en ajedrez?",
                "de": "Was ist ein 'Patzer' im Schach?",
                "nl": "Wat is een 'blunder' bij schaken?"
            },
            "options": [
                {
                    "en": "A very bad move that loses material or the game",
                    "es": "Una jugada muy mala que pierde material o la partida",
                    "de": "Ein sehr schlechter Zug, der Material oder das Spiel verliert",
                    "nl": "Een zeer slechte zet die materiaal of de partij verliest"
                },
                {
                    "en": "A brilliant sacrifice",
                    "es": "Un sacrificio brillante",
                    "de": "Ein brillantes Opfer",
                    "nl": "Een briljant offer"
                },
                {
                    "en": "A draw offer",
                    "es": "Una oferta de tablas",
                    "de": "Ein Remisangebot",
                    "nl": "Een remise-aanbod"
                },
                {
                    "en": "A quick opening move",
                    "es": "Una jugada de apertura rápida",
                    "de": "Ein schneller Eröffnungszug",
                    "nl": "Een snelle openingszet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A blunder is a very bad move that significantly worsens the player's position, often losing material or the game entirely.",
                "es": "Un error grave es una jugada muy mala que empeora significativamente la posición del jugador, a menudo perdiendo material o la partida.",
                "de": "Ein Patzer ist ein sehr schlechter Zug, der die Stellung des Spielers erheblich verschlechtert, oft Material oder das Spiel verliert.",
                "nl": "Een blunder is een zeer slechte zet die de positie van de speler aanzienlijk verslechtert, vaak materiaal of de partij verliest."
            }
        }
    ]
};
