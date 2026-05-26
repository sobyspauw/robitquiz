// Checkers - level1
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "How many squares are on a checkers board?",
                "es": "¿Cuántas casillas hay en un tablero de damas?",
                "de": "Wie viele Felder hat ein Damebrett?",
                "nl": "Hoeveel vakjes heeft een dambord?"
            },
            "options": [
                {
                    "en": "64",
                    "es": "64",
                    "de": "64",
                    "nl": "64"
                },
                {
                    "en": "32",
                    "es": "32",
                    "de": "32",
                    "nl": "32"
                },
                {
                    "en": "48",
                    "es": "48",
                    "de": "48",
                    "nl": "48"
                },
                {
                    "en": "100",
                    "es": "100",
                    "de": "100",
                    "nl": "100"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A standard checkers board has 64 squares arranged in an 8x8 grid, with alternating dark and light colors.",
                "es": "Un tablero de damas estándar tiene 64 casillas en una cuadrícula de 8x8, con colores oscuros y claros alternados.",
                "de": "Ein Standard-Damebrett hat 64 Felder in einem 8x8-Raster mit abwechselnd dunklen und hellen Farben.",
                "nl": "Een standaard dambord heeft 64 vakjes in een 8x8-raster, met afwisselend donkere en lichte kleuren."
            }
        },
        {
            "question": {
                "en": "How many pieces does each player start with in checkers?",
                "es": "¿Con cuántas fichas empieza cada jugador en damas?",
                "de": "Mit wie vielen Steinen beginnt jeder Spieler beim Damespiel?",
                "nl": "Met hoeveel stukken begint elke speler bij dammen?"
            },
            "options": [
                {
                    "en": "10",
                    "es": "10",
                    "de": "10",
                    "nl": "10"
                },
                {
                    "en": "12",
                    "es": "12",
                    "de": "12",
                    "nl": "12"
                },
                {
                    "en": "8",
                    "es": "8",
                    "de": "8",
                    "nl": "8"
                },
                {
                    "en": "16",
                    "es": "16",
                    "de": "16",
                    "nl": "16"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Each player starts with 12 pieces placed on the dark squares of the three rows closest to them.",
                "es": "Cada jugador comienza con 12 fichas colocadas en las casillas oscuras de las tres filas más cercanas.",
                "de": "Jeder Spieler beginnt mit 12 Steinen auf den dunklen Feldern der drei nächsten Reihen.",
                "nl": "Elke speler begint met 12 stukken op de donkere vakjes van de drie dichtstbijzijnde rijen."
            }
        },
        {
            "question": {
                "en": "In which direction can regular pieces move in checkers?",
                "es": "¿En qué dirección pueden moverse las fichas normales en damas?",
                "de": "In welche Richtung können normale Steine beim Damespiel ziehen?",
                "nl": "In welke richting kunnen gewone stukken bewegen bij dammen?"
            },
            "options": [
                {
                    "en": "Backward only",
                    "es": "Solo hacia atrás",
                    "de": "Nur rückwärts",
                    "nl": "Alleen achteruit"
                },
                {
                    "en": "Sideways only",
                    "es": "Solo hacia los lados",
                    "de": "Nur seitwärts",
                    "nl": "Alleen zijwaarts"
                },
                {
                    "en": "Forward diagonally",
                    "es": "En diagonal hacia adelante",
                    "de": "Diagonal vorwärts",
                    "nl": "Diagonaal vooruit"
                },
                {
                    "en": "In any direction",
                    "es": "En cualquier dirección",
                    "de": "In jede Richtung",
                    "nl": "In elke richting"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Regular pieces in checkers can only move forward diagonally, one square at a time on dark squares.",
                "es": "Las fichas normales en damas solo pueden moverse en diagonal hacia adelante, una casilla a la vez.",
                "de": "Normale Steine beim Damespiel können nur diagonal vorwärts ziehen, ein Feld auf einmal.",
                "nl": "Gewone stukken bij dammen kunnen alleen diagonaal vooruit bewegen, één vakje per keer."
            }
        },
        {
            "question": {
                "en": "What happens when a piece reaches the other side of the board?",
                "es": "¿Qué pasa cuando una ficha llega al otro lado del tablero?",
                "de": "Was passiert, wenn ein Stein die andere Seite erreicht?",
                "nl": "Wat gebeurt er als een stuk de andere kant van het bord bereikt?"
            },
            "options": [
                {
                    "en": "It is removed",
                    "es": "Se retira",
                    "de": "Es wird entfernt",
                    "nl": "Het wordt verwijderd"
                },
                {
                    "en": "Nothing happens",
                    "es": "No pasa nada",
                    "de": "Nichts passiert",
                    "nl": "Er gebeurt niets"
                },
                {
                    "en": "It stays there forever",
                    "es": "Se queda ahí para siempre",
                    "de": "Es bleibt dort für immer",
                    "nl": "Het blijft daar voor altijd"
                },
                {
                    "en": "It becomes a king",
                    "es": "Se convierte en dama",
                    "de": "Es wird zur Dame",
                    "nl": "Het wordt een dam"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "When a piece reaches the opposite end of the board, it is crowned and becomes a king, gaining new abilities.",
                "es": "Cuando una ficha llega al extremo opuesto del tablero, se corona y se convierte en dama.",
                "de": "Wenn ein Stein die gegenüberliegende Seite erreicht, wird er zur Dame gekrönt.",
                "nl": "Wanneer een stuk de overkant bereikt, wordt het gekroond en wordt het een dam."
            }
        },
        {
            "question": {
                "en": "On which color squares do pieces move in checkers?",
                "es": "¿En qué color de casillas se mueven las fichas en damas?",
                "de": "Auf welcher Farbe ziehen die Steine beim Damespiel?",
                "nl": "Op welke kleur vakjes bewegen de stukken bij dammen?"
            },
            "options": [
                {
                    "en": "Dark squares only",
                    "es": "Solo en casillas oscuras",
                    "de": "Nur auf dunklen Feldern",
                    "nl": "Alleen op donkere vakjes"
                },
                {
                    "en": "Light squares only",
                    "es": "Solo en casillas claras",
                    "de": "Nur auf hellen Feldern",
                    "nl": "Alleen op lichte vakjes"
                },
                {
                    "en": "Both colors",
                    "es": "Ambos colores",
                    "de": "Beide Farben",
                    "nl": "Beide kleuren"
                },
                {
                    "en": "Red squares only",
                    "es": "Solo en casillas rojas",
                    "de": "Nur auf roten Feldern",
                    "nl": "Alleen op rode vakjes"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In checkers, pieces are placed and moved only on the dark-colored squares of the board.",
                "es": "En damas, las fichas se colocan y mueven solo en las casillas de color oscuro del tablero.",
                "de": "Beim Damespiel werden Steine nur auf den dunklen Feldern des Bretts platziert und bewegt.",
                "nl": "Bij dammen worden stukken alleen op de donkere vakjes van het bord geplaatst en bewogen."
            }
        },
        {
            "question": {
                "en": "How do you capture an opponent's piece in checkers?",
                "es": "¿Cómo capturas una ficha del oponente en damas?",
                "de": "Wie schlägt man einen gegnerischen Stein beim Damespiel?",
                "nl": "Hoe sla je een stuk van de tegenstander bij dammen?"
            },
            "options": [
                {
                    "en": "Land on it",
                    "es": "Aterrizar sobre ella",
                    "de": "Darauf landen",
                    "nl": "Erop landen"
                },
                {
                    "en": "Jump over it diagonally",
                    "es": "Saltar sobre ella en diagonal",
                    "de": "Diagonal darüber springen",
                    "nl": "Er diagonaal overheen springen"
                },
                {
                    "en": "Push it off the board",
                    "es": "Empujarla fuera del tablero",
                    "de": "Es vom Brett schieben",
                    "nl": "Het van het bord duwen"
                },
                {
                    "en": "Move next to it",
                    "es": "Moverse al lado de ella",
                    "de": "Daneben ziehen",
                    "nl": "Ernaast bewegen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "You capture an opponent's piece by jumping over it diagonally to an empty square on the other side.",
                "es": "Capturas una ficha del oponente saltando sobre ella en diagonal a una casilla vacía al otro lado.",
                "de": "Man schlägt einen gegnerischen Stein, indem man diagonal darüber auf ein leeres Feld springt.",
                "nl": "Je slaat een stuk van de tegenstander door er diagonaal overheen te springen naar een leeg vakje."
            }
        },
        {
            "question": {
                "en": "What special ability does a king have in checkers?",
                "es": "¿Qué habilidad especial tiene una dama en damas?",
                "de": "Welche besondere Fähigkeit hat eine Dame beim Damespiel?",
                "nl": "Welke speciale vaardigheid heeft een dam bij dammen?"
            },
            "options": [
                {
                    "en": "It can jump two pieces at once",
                    "es": "Puede saltar dos fichas a la vez",
                    "de": "Es kann zwei Steine gleichzeitig schlagen",
                    "nl": "Het kan twee stukken tegelijk slaan"
                },
                {
                    "en": "It can move sideways",
                    "es": "Puede moverse hacia los lados",
                    "de": "Es kann seitwärts ziehen",
                    "nl": "Het kan zijwaarts bewegen"
                },
                {
                    "en": "It can move forward and backward",
                    "es": "Puede moverse hacia adelante y atrás",
                    "de": "Es kann vorwärts und rückwärts ziehen",
                    "nl": "Het kan vooruit en achteruit bewegen"
                },
                {
                    "en": "It cannot be captured",
                    "es": "No puede ser capturada",
                    "de": "Es kann nicht geschlagen werden",
                    "nl": "Het kan niet geslagen worden"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A king can move both forward and backward diagonally, unlike regular pieces that can only move forward.",
                "es": "Una dama puede moverse en diagonal tanto hacia adelante como hacia atrás, a diferencia de las fichas normales.",
                "de": "Eine Dame kann sowohl vorwärts als auch rückwärts diagonal ziehen, im Gegensatz zu normalen Steinen.",
                "nl": "Een dam kan zowel vooruit als achteruit diagonaal bewegen, in tegenstelling tot gewone stukken."
            }
        },
        {
            "question": {
                "en": "How many players play a game of checkers?",
                "es": "¿Cuántos jugadores juegan una partida de damas?",
                "de": "Wie viele Spieler spielen eine Partie Dame?",
                "nl": "Hoeveel spelers spelen een potje dammen?"
            },
            "options": [
                {
                    "en": "4",
                    "es": "4",
                    "de": "4",
                    "nl": "4"
                },
                {
                    "en": "3",
                    "es": "3",
                    "de": "3",
                    "nl": "3"
                },
                {
                    "en": "1",
                    "es": "1",
                    "de": "1",
                    "nl": "1"
                },
                {
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "Checkers is a two-player board game where opponents face each other across the board.",
                "es": "Las damas es un juego de mesa para dos jugadores que se enfrentan a través del tablero.",
                "de": "Dame ist ein Brettspiel für zwei Spieler, die sich über das Brett gegenübersitzen.",
                "nl": "Dammen is een bordspel voor twee spelers die tegenover elkaar aan het bord zitten."
            }
        },
        {
            "question": {
                "en": "What is the goal of checkers?",
                "es": "¿Cuál es el objetivo de las damas?",
                "de": "Was ist das Ziel beim Damespiel?",
                "nl": "Wat is het doel van dammen?"
            },
            "options": [
                {
                    "en": "Capture all opponent's pieces or block them",
                    "es": "Capturar todas las fichas del oponente o bloquearlas",
                    "de": "Alle gegnerischen Steine schlagen oder blockieren",
                    "nl": "Alle stukken van de tegenstander slaan of blokkeren"
                },
                {
                    "en": "Get all your pieces to the other side",
                    "es": "Llevar todas tus fichas al otro lado",
                    "de": "Alle Steine auf die andere Seite bringen",
                    "nl": "Al je stukken naar de andere kant brengen"
                },
                {
                    "en": "Collect the most points",
                    "es": "Recoger la mayor cantidad de puntos",
                    "de": "Die meisten Punkte sammeln",
                    "nl": "De meeste punten verzamelen"
                },
                {
                    "en": "Fill up the board with your pieces",
                    "es": "Llenar el tablero con tus fichas",
                    "de": "Das Brett mit eigenen Steinen füllen",
                    "nl": "Het bord vullen met je stukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The goal is to capture all of your opponent's pieces or block them so they cannot make any more moves.",
                "es": "El objetivo es capturar todas las fichas del oponente o bloquearlas para que no puedan moverse.",
                "de": "Das Ziel ist, alle gegnerischen Steine zu schlagen oder zu blockieren, damit sie nicht mehr ziehen können.",
                "nl": "Het doel is alle stukken van de tegenstander te slaan of te blokkeren zodat ze niet meer kunnen bewegen."
            }
        },
        {
            "question": {
                "en": "Is capturing mandatory in standard checkers rules?",
                "es": "¿Es obligatorio capturar en las reglas estándar de damas?",
                "de": "Ist das Schlagen bei den Standardregeln Pflicht?",
                "nl": "Is slaan verplicht bij de standaard damregels?"
            },
            "options": [
                {
                    "en": "No, it is optional",
                    "es": "No, es opcional",
                    "de": "Nein, es ist optional",
                    "nl": "Nee, het is optioneel"
                },
                {
                    "en": "Yes, you must capture if possible",
                    "es": "Sí, debes capturar si es posible",
                    "de": "Ja, man muss schlagen wenn möglich",
                    "nl": "Ja, je moet slaan als het kan"
                },
                {
                    "en": "Only with kings",
                    "es": "Solo con damas",
                    "de": "Nur mit Damen",
                    "nl": "Alleen met dammen"
                },
                {
                    "en": "Only on the first move",
                    "es": "Solo en el primer movimiento",
                    "de": "Nur beim ersten Zug",
                    "nl": "Alleen bij de eerste zet"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "In standard checkers rules, if a capture is available, the player must take it. This is a mandatory move.",
                "es": "En las reglas estándar de damas, si hay una captura disponible, el jugador debe realizarla.",
                "de": "Bei den Standardregeln muss ein Spieler schlagen, wenn eine Schlagmöglichkeit besteht.",
                "nl": "Bij de standaard damregels moet een speler slaan als er een slagmogelijkheid is."
            }
        },
        {
            "question": {
                "en": "What is a double jump in checkers?",
                "es": "¿Qué es un salto doble en damas?",
                "de": "Was ist ein Doppelsprung beim Damespiel?",
                "nl": "Wat is een dubbelsprong bij dammen?"
            },
            "options": [
                {
                    "en": "Moving two squares forward",
                    "es": "Mover dos casillas hacia adelante",
                    "de": "Zwei Felder vorwärts ziehen",
                    "nl": "Twee vakjes vooruit bewegen"
                },
                {
                    "en": "Jumping with two pieces at once",
                    "es": "Saltar con dos fichas a la vez",
                    "de": "Mit zwei Steinen gleichzeitig springen",
                    "nl": "Met twee stukken tegelijk springen"
                },
                {
                    "en": "Capturing two pieces in one turn",
                    "es": "Capturar dos fichas en un turno",
                    "de": "Zwei Steine in einem Zug schlagen",
                    "nl": "Twee stukken slaan in één beurt"
                },
                {
                    "en": "Jumping over a king",
                    "es": "Saltar sobre una dama",
                    "de": "Über eine Dame springen",
                    "nl": "Over een dam springen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A double jump means capturing two opponent pieces in a single turn by making consecutive jumps.",
                "es": "Un salto doble significa capturar dos fichas del oponente en un solo turno con saltos consecutivos.",
                "de": "Ein Doppelsprung bedeutet, zwei gegnerische Steine in einem Zug durch aufeinanderfolgende Sprünge zu schlagen.",
                "nl": "Een dubbelsprong betekent twee stukken van de tegenstander slaan in één beurt door opeenvolgende sprongen."
            }
        },
        {
            "question": {
                "en": "What shape is a checkers board?",
                "es": "¿Qué forma tiene un tablero de damas?",
                "de": "Welche Form hat ein Damebrett?",
                "nl": "Welke vorm heeft een dambord?"
            },
            "options": [
                {
                    "en": "Circular",
                    "es": "Circular",
                    "de": "Kreisförmig",
                    "nl": "Rond"
                },
                {
                    "en": "Triangular",
                    "es": "Triangular",
                    "de": "Dreieckig",
                    "nl": "Driehoekig"
                },
                {
                    "en": "Hexagonal",
                    "es": "Hexagonal",
                    "de": "Sechseckig",
                    "nl": "Zeshoekig"
                },
                {
                    "en": "Square",
                    "es": "Cuadrado",
                    "de": "Quadratisch",
                    "nl": "Vierkant"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "A checkers board is square-shaped, consisting of 8 rows and 8 columns of alternating colored squares.",
                "es": "Un tablero de damas tiene forma cuadrada, con 8 filas y 8 columnas de casillas de colores alternados.",
                "de": "Ein Damebrett ist quadratisch und besteht aus 8 Reihen und 8 Spalten abwechselnd gefärbter Felder.",
                "nl": "Een dambord is vierkant en bestaat uit 8 rijen en 8 kolommen met afwisselend gekleurde vakjes."
            }
        },
        {
            "question": {
                "en": "Which color piece usually moves first in checkers?",
                "es": "¿Qué color de ficha suele mover primero en damas?",
                "de": "Welche Farbe zieht beim Damespiel normalerweise zuerst?",
                "nl": "Welke kleur stuk beweegt meestal eerst bij dammen?"
            },
            "options": [
                {
                    "en": "White",
                    "es": "Blanco",
                    "de": "Weiß",
                    "nl": "Wit"
                },
                {
                    "en": "Red or black (darker color)",
                    "es": "Rojo o negro (color más oscuro)",
                    "de": "Rot oder schwarz (dunklere Farbe)",
                    "nl": "Rood of zwart (donkerdere kleur)"
                },
                {
                    "en": "The player who is older",
                    "es": "El jugador que es mayor",
                    "de": "Der ältere Spieler",
                    "nl": "De speler die ouder is"
                },
                {
                    "en": "Decided by coin flip",
                    "es": "Decidido por lanzamiento de moneda",
                    "de": "Durch Münzwurf entschieden",
                    "nl": "Beslist door muntworp"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "In standard American checkers, the player with the darker colored pieces (usually black or red) moves first.",
                "es": "En las damas americanas estándar, el jugador con las fichas de color más oscuro mueve primero.",
                "de": "Beim amerikanischen Damespiel zieht der Spieler mit den dunkleren Steinen zuerst.",
                "nl": "Bij het Amerikaanse damspel beweegt de speler met de donkerdere stukken eerst."
            }
        },
        {
            "question": {
                "en": "How many dark squares are used for play in checkers?",
                "es": "¿Cuántas casillas oscuras se usan para jugar damas?",
                "de": "Wie viele dunkle Felder werden beim Damespiel benutzt?",
                "nl": "Hoeveel donkere vakjes worden gebruikt bij dammen?"
            },
            "options": [
                {
                    "en": "64",
                    "es": "64",
                    "de": "64",
                    "nl": "64"
                },
                {
                    "en": "24",
                    "es": "24",
                    "de": "24",
                    "nl": "24"
                },
                {
                    "en": "32",
                    "es": "32",
                    "de": "32",
                    "nl": "32"
                },
                {
                    "en": "16",
                    "es": "16",
                    "de": "16",
                    "nl": "16"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Of the 64 squares on the board, only 32 dark squares are used for placing and moving pieces in checkers.",
                "es": "De las 64 casillas del tablero, solo las 32 casillas oscuras se usan para colocar y mover fichas.",
                "de": "Von den 64 Feldern auf dem Brett werden nur 32 dunkle Felder zum Setzen und Bewegen der Steine benutzt.",
                "nl": "Van de 64 vakjes op het bord worden alleen de 32 donkere vakjes gebruikt voor het plaatsen en bewegen."
            }
        },
        {
            "question": {
                "en": "What happens if you cannot move any piece on your turn?",
                "es": "¿Qué pasa si no puedes mover ninguna ficha en tu turno?",
                "de": "Was passiert, wenn man keinen Stein ziehen kann?",
                "nl": "Wat gebeurt er als je geen stuk kunt bewegen?"
            },
            "options": [
                {
                    "en": "You skip your turn",
                    "es": "Saltas tu turno",
                    "de": "Du überspringst deinen Zug",
                    "nl": "Je slaat je beurt over"
                },
                {
                    "en": "You roll a dice",
                    "es": "Tiras un dado",
                    "de": "Du würfelst",
                    "nl": "Je gooit een dobbelsteen"
                },
                {
                    "en": "You lose the game",
                    "es": "Pierdes el juego",
                    "de": "Du verlierst das Spiel",
                    "nl": "Je verliest het spel"
                },
                {
                    "en": "You get an extra piece",
                    "es": "Obtienes una ficha extra",
                    "de": "Du bekommst einen extra Stein",
                    "nl": "Je krijgt een extra stuk"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "If a player cannot make any legal move on their turn, they lose the game. This includes being blocked.",
                "es": "Si un jugador no puede hacer ningún movimiento legal en su turno, pierde el juego.",
                "de": "Wenn ein Spieler keinen legalen Zug machen kann, verliert er das Spiel.",
                "nl": "Als een speler geen legale zet kan doen, verliest die het spel."
            }
        },
        {
            "question": {
                "en": "How many rows does each player occupy at the start?",
                "es": "¿Cuántas filas ocupa cada jugador al inicio?",
                "de": "Wie viele Reihen belegt jeder Spieler am Anfang?",
                "nl": "Hoeveel rijen bezet elke speler aan het begin?"
            },
            "options": [
                {
                    "en": "2 rows",
                    "es": "2 filas",
                    "de": "2 Reihen",
                    "nl": "2 rijen"
                },
                {
                    "en": "4 rows",
                    "es": "4 filas",
                    "de": "4 Reihen",
                    "nl": "4 rijen"
                },
                {
                    "en": "3 rows",
                    "es": "3 filas",
                    "de": "3 Reihen",
                    "nl": "3 rijen"
                },
                {
                    "en": "1 row",
                    "es": "1 fila",
                    "de": "1 Reihe",
                    "nl": "1 rij"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Each player places their 12 pieces on the dark squares of the 3 rows closest to their side of the board.",
                "es": "Cada jugador coloca sus 12 fichas en las casillas oscuras de las 3 filas más cercanas a su lado.",
                "de": "Jeder Spieler platziert seine 12 Steine auf den dunklen Feldern der 3 nächsten Reihen.",
                "nl": "Elke speler plaatst zijn 12 stukken op de donkere vakjes van de 3 dichtstbijzijnde rijen."
            }
        },
        {
            "question": {
                "en": "Can a regular piece move backward in standard checkers?",
                "es": "¿Puede una ficha normal moverse hacia atrás en damas estándar?",
                "de": "Kann ein normaler Stein beim Standarddamespiel rückwärts ziehen?",
                "nl": "Kan een gewoon stuk achteruit bewegen bij standaard dammen?"
            },
            "options": [
                {
                    "en": "Yes, always",
                    "es": "Sí, siempre",
                    "de": "Ja, immer",
                    "nl": "Ja, altijd"
                },
                {
                    "en": "Only when capturing",
                    "es": "Solo al capturar",
                    "de": "Nur beim Schlagen",
                    "nl": "Alleen bij het slaan"
                },
                {
                    "en": "No, only forward",
                    "es": "No, solo hacia adelante",
                    "de": "Nein, nur vorwärts",
                    "nl": "Nee, alleen vooruit"
                },
                {
                    "en": "Only at the start",
                    "es": "Solo al inicio",
                    "de": "Nur am Anfang",
                    "nl": "Alleen aan het begin"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "In standard American checkers, regular pieces can only move forward diagonally. Only kings can move backward.",
                "es": "En las damas americanas estándar, las fichas normales solo pueden moverse en diagonal hacia adelante.",
                "de": "Beim amerikanischen Standarddamespiel können normale Steine nur diagonal vorwärts ziehen.",
                "nl": "Bij standaard Amerikaans dammen kunnen gewone stukken alleen diagonaal vooruit bewegen."
            }
        },
        {
            "question": {
                "en": "How is a king marked in checkers?",
                "es": "¿Cómo se marca una dama en damas?",
                "de": "Wie wird eine Dame beim Damespiel markiert?",
                "nl": "Hoe wordt een dam gemarkeerd bij dammen?"
            },
            "options": [
                {
                    "en": "By placing another piece on top",
                    "es": "Colocando otra ficha encima",
                    "de": "Indem man einen weiteren Stein darauf legt",
                    "nl": "Door een ander stuk erop te plaatsen"
                },
                {
                    "en": "By flipping it over",
                    "es": "Dándole la vuelta",
                    "de": "Durch Umdrehen",
                    "nl": "Door het om te draaien"
                },
                {
                    "en": "By painting it gold",
                    "es": "Pintándola de dorado",
                    "de": "Durch goldenes Anmalen",
                    "nl": "Door het goud te verven"
                },
                {
                    "en": "By moving it to the center",
                    "es": "Moviéndola al centro",
                    "de": "Durch Bewegen zur Mitte",
                    "nl": "Door het naar het midden te verplaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A king is traditionally marked by stacking a captured piece on top of it, creating a double-height piece.",
                "es": "Una dama se marca tradicionalmente colocando una ficha capturada encima, creando una pieza de doble altura.",
                "de": "Eine Dame wird traditionell durch Stapeln eines geschlagenen Steins darauf markiert.",
                "nl": "Een dam wordt traditioneel gemarkeerd door er een geslagen stuk bovenop te stapelen."
            }
        },
        {
            "question": {
                "en": "What are the two most common piece colors in checkers?",
                "es": "¿Cuáles son los dos colores de fichas más comunes en damas?",
                "de": "Was sind die zwei häufigsten Steinfarben beim Damespiel?",
                "nl": "Wat zijn de twee meest voorkomende kleuren bij dammen?"
            },
            "options": [
                {
                    "en": "Blue and green",
                    "es": "Azul y verde",
                    "de": "Blau und grün",
                    "nl": "Blauw en groen"
                },
                {
                    "en": "Red and black",
                    "es": "Rojo y negro",
                    "de": "Rot und schwarz",
                    "nl": "Rood en zwart"
                },
                {
                    "en": "Yellow and purple",
                    "es": "Amarillo y púrpura",
                    "de": "Gelb und lila",
                    "nl": "Geel en paars"
                },
                {
                    "en": "Orange and white",
                    "es": "Naranja y blanco",
                    "de": "Orange und weiß",
                    "nl": "Oranje en wit"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The most common piece colors in American checkers are red and black, though white and black are also used.",
                "es": "Los colores de fichas más comunes en las damas americanas son rojo y negro.",
                "de": "Die häufigsten Steinfarben beim amerikanischen Damespiel sind rot und schwarz.",
                "nl": "De meest voorkomende kleuren bij Amerikaans dammen zijn rood en zwart."
            }
        },
        {
            "question": {
                "en": "How many empty rows are between the two players at the start?",
                "es": "¿Cuántas filas vacías hay entre los jugadores al inicio?",
                "de": "Wie viele leere Reihen sind am Anfang zwischen den Spielern?",
                "nl": "Hoeveel lege rijen zijn er tussen de spelers aan het begin?"
            },
            "options": [
                {
                    "en": "1",
                    "es": "1",
                    "de": "1",
                    "nl": "1"
                },
                {
                    "en": "3",
                    "es": "3",
                    "de": "3",
                    "nl": "3"
                },
                {
                    "en": "4",
                    "es": "4",
                    "de": "4",
                    "nl": "4"
                },
                {
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "At the start, each player occupies 3 rows, leaving 2 empty rows in the middle of the 8-row board.",
                "es": "Al inicio, cada jugador ocupa 3 filas, dejando 2 filas vacías en el medio del tablero de 8 filas.",
                "de": "Am Anfang belegt jeder Spieler 3 Reihen, sodass 2 leere Reihen in der Mitte bleiben.",
                "nl": "Aan het begin bezet elke speler 3 rijen, waardoor er 2 lege rijen in het midden overblijven."
            }
        },
        {
            "question": {
                "en": "What is checkers called in the United Kingdom?",
                "es": "¿Cómo se llama el juego de damas en el Reino Unido?",
                "de": "Wie heißt Dame im Vereinigten Königreich?",
                "nl": "Hoe heet dammen in het Verenigd Koninkrijk?"
            },
            "options": [
                {
                    "en": "Draughts",
                    "es": "Draughts",
                    "de": "Draughts",
                    "nl": "Draughts"
                },
                {
                    "en": "Pawns",
                    "es": "Pawns",
                    "de": "Pawns",
                    "nl": "Pawns"
                },
                {
                    "en": "Tokens",
                    "es": "Tokens",
                    "de": "Tokens",
                    "nl": "Tokens"
                },
                {
                    "en": "Pieces",
                    "es": "Pieces",
                    "de": "Pieces",
                    "nl": "Pieces"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In the UK and many other countries, checkers is called draughts. The game rules are essentially the same.",
                "es": "En el Reino Unido y muchos otros países, las damas se llama draughts.",
                "de": "Im Vereinigten Königreich und vielen anderen Ländern heißt Dame 'Draughts'.",
                "nl": "In het VK en veel andere landen heet dammen 'draughts'."
            }
        },
        {
            "question": {
                "en": "Can you make multiple jumps in one turn in checkers?",
                "es": "¿Puedes hacer múltiples saltos en un turno en damas?",
                "de": "Kann man beim Damespiel mehrere Sprünge in einem Zug machen?",
                "nl": "Kun je meerdere sprongen maken in één beurt bij dammen?"
            },
            "options": [
                {
                    "en": "No, only one jump per turn",
                    "es": "No, solo un salto por turno",
                    "de": "Nein, nur ein Sprung pro Zug",
                    "nl": "Nee, slechts één sprong per beurt"
                },
                {
                    "en": "Only with a king",
                    "es": "Solo con una dama",
                    "de": "Nur mit einer Dame",
                    "nl": "Alleen met een dam"
                },
                {
                    "en": "Yes, if jumps are available",
                    "es": "Sí, si hay saltos disponibles",
                    "de": "Ja, wenn Sprünge verfügbar sind",
                    "nl": "Ja, als er sprongen beschikbaar zijn"
                },
                {
                    "en": "Only on the last move",
                    "es": "Solo en el último movimiento",
                    "de": "Nur beim letzten Zug",
                    "nl": "Alleen bij de laatste zet"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Yes, if after a jump another jump is available, the player must continue jumping in the same turn.",
                "es": "Sí, si después de un salto hay otro salto disponible, el jugador debe continuar saltando.",
                "de": "Ja, wenn nach einem Sprung ein weiterer möglich ist, muss der Spieler im selben Zug weiterspringen.",
                "nl": "Ja, als er na een sprong nog een sprong beschikbaar is, moet de speler door blijven springen."
            }
        },
        {
            "question": {
                "en": "What is the total number of pieces on the board at the start?",
                "es": "¿Cuál es el número total de fichas en el tablero al inicio?",
                "de": "Wie viele Steine sind am Anfang auf dem Brett?",
                "nl": "Hoeveel stukken staan er aan het begin op het bord?"
            },
            "options": [
                {
                    "en": "20",
                    "es": "20",
                    "de": "20",
                    "nl": "20"
                },
                {
                    "en": "32",
                    "es": "32",
                    "de": "32",
                    "nl": "32"
                },
                {
                    "en": "24",
                    "es": "24",
                    "de": "24",
                    "nl": "24"
                },
                {
                    "en": "16",
                    "es": "16",
                    "de": "16",
                    "nl": "16"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "There are 24 pieces total at the start: 12 for each player placed on the dark squares.",
                "es": "Hay 24 fichas en total al inicio: 12 para cada jugador colocadas en las casillas oscuras.",
                "de": "Es gibt am Anfang insgesamt 24 Steine: 12 für jeden Spieler auf den dunklen Feldern.",
                "nl": "Er zijn 24 stukken totaal aan het begin: 12 voor elke speler op de donkere vakjes."
            }
        },
        {
            "question": {
                "en": "What type of game is checkers classified as?",
                "es": "¿Qué tipo de juego se clasifica las damas?",
                "de": "Als was für ein Spiel wird Dame klassifiziert?",
                "nl": "Wat voor soort spel is dammen?"
            },
            "options": [
                {
                    "en": "Card game",
                    "es": "Juego de cartas",
                    "de": "Kartenspiel",
                    "nl": "Kaartspel"
                },
                {
                    "en": "Strategy board game",
                    "es": "Juego de mesa de estrategia",
                    "de": "Strategie-Brettspiel",
                    "nl": "Strategisch bordspel"
                },
                {
                    "en": "Dice game",
                    "es": "Juego de dados",
                    "de": "Würfelspiel",
                    "nl": "Dobbelspel"
                },
                {
                    "en": "Role-playing game",
                    "es": "Juego de rol",
                    "de": "Rollenspiel",
                    "nl": "Rollenspel"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Checkers is a strategy board game. There is no luck involved, only skill and strategic thinking.",
                "es": "Las damas es un juego de mesa de estrategia. No hay suerte involucrada, solo habilidad y pensamiento estratégico.",
                "de": "Dame ist ein Strategie-Brettspiel. Es gibt kein Glück, nur Können und strategisches Denken.",
                "nl": "Dammen is een strategisch bordspel. Er is geen geluk bij betrokken, alleen vaardigheid en strategisch denken."
            }
        },
        {
            "question": {
                "en": "Are dice used in checkers?",
                "es": "¿Se usan dados en damas?",
                "de": "Werden beim Damespiel Würfel benutzt?",
                "nl": "Worden er dobbelstenen gebruikt bij dammen?"
            },
            "options": [
                {
                    "en": "Yes, to decide moves",
                    "es": "Sí, para decidir movimientos",
                    "de": "Ja, um Züge zu bestimmen",
                    "nl": "Ja, om zetten te bepalen"
                },
                {
                    "en": "Only at the beginning",
                    "es": "Solo al principio",
                    "de": "Nur am Anfang",
                    "nl": "Alleen aan het begin"
                },
                {
                    "en": "No, checkers uses no dice",
                    "es": "No, las damas no usan dados",
                    "de": "Nein, Dame benutzt keine Würfel",
                    "nl": "Nee, dammen gebruikt geen dobbelstenen"
                },
                {
                    "en": "Only in tournament play",
                    "es": "Solo en torneos",
                    "de": "Nur bei Turnieren",
                    "nl": "Alleen bij toernooien"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Checkers does not use dice. It is a pure strategy game where players choose their own moves.",
                "es": "Las damas no usan dados. Es un juego de estrategia pura donde los jugadores eligen sus movimientos.",
                "de": "Dame benutzt keine Würfel. Es ist ein reines Strategiespiel, bei dem Spieler ihre Züge selbst wählen.",
                "nl": "Dammen gebruikt geen dobbelstenen. Het is een puur strategisch spel waar spelers zelf hun zetten kiezen."
            }
        },
        {
            "question": {
                "en": "What is the simplest way to win at checkers?",
                "es": "¿Cuál es la forma más simple de ganar en damas?",
                "de": "Was ist der einfachste Weg beim Damespiel zu gewinnen?",
                "nl": "Wat is de simpelste manier om te winnen bij dammen?"
            },
            "options": [
                {
                    "en": "Have the most kings",
                    "es": "Tener la mayoría de damas",
                    "de": "Die meisten Damen haben",
                    "nl": "De meeste dammen hebben"
                },
                {
                    "en": "Reach the other side first",
                    "es": "Llegar al otro lado primero",
                    "de": "Zuerst die andere Seite erreichen",
                    "nl": "Als eerste de andere kant bereiken"
                },
                {
                    "en": "Capture all opponent's pieces",
                    "es": "Capturar todas las fichas del oponente",
                    "de": "Alle gegnerischen Steine schlagen",
                    "nl": "Alle stukken van de tegenstander slaan"
                },
                {
                    "en": "Score 100 points",
                    "es": "Anotar 100 puntos",
                    "de": "100 Punkte erzielen",
                    "nl": "100 punten scoren"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "The most straightforward way to win is to capture all of your opponent's pieces so they have none left.",
                "es": "La forma más directa de ganar es capturar todas las fichas del oponente.",
                "de": "Der einfachste Weg zu gewinnen ist, alle gegnerischen Steine zu schlagen.",
                "nl": "De meest directe manier om te winnen is alle stukken van de tegenstander te slaan."
            }
        },
        {
            "question": {
                "en": "How old is the game of checkers approximately?",
                "es": "¿Cuántos años tiene aproximadamente el juego de damas?",
                "de": "Wie alt ist das Damespiel ungefähr?",
                "nl": "Hoe oud is het damspel ongeveer?"
            },
            "options": [
                {
                    "en": "About 100 years",
                    "es": "Unos 100 años",
                    "de": "Etwa 100 Jahre",
                    "nl": "Ongeveer 100 jaar"
                },
                {
                    "en": "About 500 years",
                    "es": "Unos 500 años",
                    "de": "Etwa 500 Jahre",
                    "nl": "Ongeveer 500 jaar"
                },
                {
                    "en": "About 5000 years",
                    "es": "Unos 5000 años",
                    "de": "Etwa 5000 Jahre",
                    "nl": "Ongeveer 5000 jaar"
                },
                {
                    "en": "About 50 years",
                    "es": "Unos 50 años",
                    "de": "Etwa 50 Jahre",
                    "nl": "Ongeveer 50 jaar"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Checkers is one of the oldest games, dating back about 5000 years to ancient Mesopotamia and Egypt.",
                "es": "Las damas es uno de los juegos más antiguos, con unos 5000 años desde Mesopotamia y Egipto.",
                "de": "Dame ist eines der ältesten Spiele und reicht etwa 5000 Jahre bis ins alte Mesopotamien und Ägypten zurück.",
                "nl": "Dammen is een van de oudste spellen, ongeveer 5000 jaar oud uit Mesopotamië en Egypte."
            }
        },
        {
            "question": {
                "en": "What happens in a draw in checkers?",
                "es": "¿Qué pasa en un empate en damas?",
                "de": "Was passiert bei einem Unentschieden beim Damespiel?",
                "nl": "Wat gebeurt er bij een gelijkspel bij dammen?"
            },
            "options": [
                {
                    "en": "The player with more pieces wins",
                    "es": "El jugador con más fichas gana",
                    "de": "Der Spieler mit mehr Steinen gewinnt",
                    "nl": "De speler met meer stukken wint"
                },
                {
                    "en": "Neither player wins",
                    "es": "Ningún jugador gana",
                    "de": "Kein Spieler gewinnt",
                    "nl": "Geen enkele speler wint"
                },
                {
                    "en": "They play again immediately",
                    "es": "Juegan de nuevo inmediatamente",
                    "de": "Sie spielen sofort nochmal",
                    "nl": "Ze spelen meteen opnieuw"
                },
                {
                    "en": "The darker pieces win",
                    "es": "Las fichas oscuras ganan",
                    "de": "Die dunklen Steine gewinnen",
                    "nl": "De donkere stukken winnen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "In a draw, neither player wins. This can happen when neither player can force a win or after repeated moves.",
                "es": "En un empate, ningún jugador gana. Esto puede pasar cuando ningún jugador puede forzar una victoria.",
                "de": "Bei einem Unentschieden gewinnt kein Spieler. Das kann passieren, wenn keiner einen Sieg erzwingen kann.",
                "nl": "Bij een gelijkspel wint geen enkele speler. Dit kan gebeuren als geen speler een overwinning kan afdwingen."
            }
        },
        {
            "question": {
                "en": "Can a king be captured in checkers?",
                "es": "¿Se puede capturar una dama en damas?",
                "de": "Kann eine Dame beim Damespiel geschlagen werden?",
                "nl": "Kan een dam geslagen worden bij dammen?"
            },
            "options": [
                {
                    "en": "No, kings are protected",
                    "es": "No, las damas están protegidas",
                    "de": "Nein, Damen sind geschützt",
                    "nl": "Nee, dammen zijn beschermd"
                },
                {
                    "en": "Only by another king",
                    "es": "Solo por otra dama",
                    "de": "Nur von einer anderen Dame",
                    "nl": "Alleen door een andere dam"
                },
                {
                    "en": "Yes, just like any other piece",
                    "es": "Sí, como cualquier otra ficha",
                    "de": "Ja, genau wie jeder andere Stein",
                    "nl": "Ja, net als elk ander stuk"
                },
                {
                    "en": "Only at the end of the game",
                    "es": "Solo al final del juego",
                    "de": "Nur am Ende des Spiels",
                    "nl": "Alleen aan het eind van het spel"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Yes, a king can be captured by any piece, regular or king, by jumping over it diagonally.",
                "es": "Sí, una dama puede ser capturada por cualquier ficha, normal o dama, saltando sobre ella en diagonal.",
                "de": "Ja, eine Dame kann von jedem Stein, normal oder Dame, durch diagonales Überspringen geschlagen werden.",
                "nl": "Ja, een dam kan door elk stuk geslagen worden, gewoon of dam, door er diagonaal overheen te springen."
            }
        },
        {
            "question": {
                "en": "How many squares can a regular piece move at a time?",
                "es": "¿Cuántas casillas puede mover una ficha normal a la vez?",
                "de": "Wie viele Felder kann ein normaler Stein auf einmal ziehen?",
                "nl": "Hoeveel vakjes kan een gewoon stuk tegelijk bewegen?"
            },
            "options": [
                {
                    "en": "3",
                    "es": "3",
                    "de": "3",
                    "nl": "3"
                },
                {
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
                },
                {
                    "en": "As many as desired",
                    "es": "Tantas como se desee",
                    "de": "So viele wie gewünscht",
                    "nl": "Zoveel als gewenst"
                },
                {
                    "en": "1",
                    "es": "1",
                    "de": "1",
                    "nl": "1"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "A regular piece moves one square diagonally forward per turn, unless it is making a capture jump.",
                "es": "Una ficha normal mueve una casilla en diagonal hacia adelante por turno, a menos que esté capturando.",
                "de": "Ein normaler Stein zieht ein Feld diagonal vorwärts pro Zug, es sei denn, er schlägt.",
                "nl": "Een gewoon stuk beweegt één vakje diagonaal vooruit per beurt, tenzij het een stuk slaat."
            }
        },
        {
            "question": {
                "en": "What is the shape of checkers pieces?",
                "es": "¿Cuál es la forma de las fichas de damas?",
                "de": "Welche Form haben Damesteine?",
                "nl": "Wat is de vorm van damstukken?"
            },
            "options": [
                {
                    "en": "Square",
                    "es": "Cuadrada",
                    "de": "Quadratisch",
                    "nl": "Vierkant"
                },
                {
                    "en": "Round and flat",
                    "es": "Redonda y plana",
                    "de": "Rund und flach",
                    "nl": "Rond en plat"
                },
                {
                    "en": "Triangular",
                    "es": "Triangular",
                    "de": "Dreieckig",
                    "nl": "Driehoekig"
                },
                {
                    "en": "Tall like chess pieces",
                    "es": "Altas como piezas de ajedrez",
                    "de": "Hoch wie Schachfiguren",
                    "nl": "Hoog zoals schaakstukken"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Checkers pieces are round, flat discs, making them easy to stack when creating kings.",
                "es": "Las fichas de damas son discos redondos y planos, fáciles de apilar para crear damas.",
                "de": "Damesteine sind runde, flache Scheiben, die sich leicht stapeln lassen, um Damen zu bilden.",
                "nl": "Damstukken zijn ronde, platte schijven, waardoor ze makkelijk te stapelen zijn voor dammen."
            }
        },
        {
            "question": {
                "en": "Is checkers a game of luck or skill?",
                "es": "¿Las damas es un juego de suerte o habilidad?",
                "de": "Ist Dame ein Glücks- oder Geschicklichkeitsspiel?",
                "nl": "Is dammen een geluksspel of een vaardigheidsspel?"
            },
            "options": [
                {
                    "en": "Mostly luck",
                    "es": "Principalmente suerte",
                    "de": "Hauptsächlich Glück",
                    "nl": "Vooral geluk"
                },
                {
                    "en": "Half luck, half skill",
                    "es": "Mitad suerte, mitad habilidad",
                    "de": "Halb Glück, halb Können",
                    "nl": "Half geluk, half vaardigheid"
                },
                {
                    "en": "Pure skill",
                    "es": "Pura habilidad",
                    "de": "Reines Können",
                    "nl": "Puur vaardigheid"
                },
                {
                    "en": "Pure luck",
                    "es": "Pura suerte",
                    "de": "Reines Glück",
                    "nl": "Puur geluk"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Checkers is a game of pure skill with no random elements. The better player will win more often.",
                "es": "Las damas es un juego de pura habilidad sin elementos aleatorios. El mejor jugador ganará más seguido.",
                "de": "Dame ist ein reines Geschicklichkeitsspiel ohne Zufallselemente.",
                "nl": "Dammen is een spel van puur vaardigheid zonder willekeurige elementen."
            }
        },
        {
            "question": {
                "en": "What is the row at the far end called where pieces become kings?",
                "es": "¿Cómo se llama la fila al final donde las fichas se convierten en damas?",
                "de": "Wie heißt die Reihe am Ende, wo Steine zu Damen werden?",
                "nl": "Hoe heet de rij aan het einde waar stukken dam worden?"
            },
            "options": [
                {
                    "en": "The finish line",
                    "es": "La línea de meta",
                    "de": "Die Ziellinie",
                    "nl": "De finishlijn"
                },
                {
                    "en": "The goal row",
                    "es": "La fila de gol",
                    "de": "Die Tor-Reihe",
                    "nl": "De doelrij"
                },
                {
                    "en": "The king row",
                    "es": "La fila de coronación",
                    "de": "Die Damereihe",
                    "nl": "De damrij"
                },
                {
                    "en": "The end zone",
                    "es": "La zona final",
                    "de": "Die Endzone",
                    "nl": "De eindzone"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "The last row on the opponent's side is called the king row. Reaching it promotes your piece to a king.",
                "es": "La última fila del lado del oponente se llama fila de coronación. Alcanzarla promueve tu ficha a dama.",
                "de": "Die letzte Reihe auf der Gegnerseite heißt Damereihe. Wenn man sie erreicht, wird der Stein zur Dame.",
                "nl": "De laatste rij aan de kant van de tegenstander heet de damrij. Als je die bereikt, wordt je stuk een dam."
            }
        },
        {
            "question": {
                "en": "Can two pieces occupy the same square in checkers?",
                "es": "¿Pueden dos fichas ocupar la misma casilla en damas?",
                "de": "Können zwei Steine beim Damespiel dasselbe Feld besetzen?",
                "nl": "Kunnen twee stukken hetzelfde vakje bezetten bij dammen?"
            },
            "options": [
                {
                    "en": "Yes, if they are the same color",
                    "es": "Sí, si son del mismo color",
                    "de": "Ja, wenn sie die gleiche Farbe haben",
                    "nl": "Ja, als ze dezelfde kleur hebben"
                },
                {
                    "en": "No, except for kings",
                    "es": "No, excepto para damas",
                    "de": "Nein, außer für Damen",
                    "nl": "Nee, behalve voor dammen"
                },
                {
                    "en": "No, never",
                    "es": "No, nunca",
                    "de": "Nein, niemals",
                    "nl": "Nee, nooit"
                },
                {
                    "en": "Only during a jump",
                    "es": "Solo durante un salto",
                    "de": "Nur während eines Sprungs",
                    "nl": "Alleen tijdens een sprong"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "No two pieces can occupy the same square in checkers. Each square can hold at most one piece.",
                "es": "Dos fichas no pueden ocupar la misma casilla en damas. Cada casilla puede tener máximo una ficha.",
                "de": "Zwei Steine können beim Damespiel nicht dasselbe Feld besetzen. Jedes Feld kann nur einen Stein haben.",
                "nl": "Twee stukken kunnen niet hetzelfde vakje bezetten bij dammen. Elk vakje kan maximaal één stuk hebben."
            }
        },
        {
            "question": {
                "en": "What is the board pattern in checkers?",
                "es": "¿Cuál es el patrón del tablero en damas?",
                "de": "Was ist das Muster des Damebretts?",
                "nl": "Wat is het patroon van het dambord?"
            },
            "options": [
                {
                    "en": "All one color",
                    "es": "Todo de un color",
                    "de": "Alles eine Farbe",
                    "nl": "Allemaal één kleur"
                },
                {
                    "en": "Stripes",
                    "es": "Rayas",
                    "de": "Streifen",
                    "nl": "Strepen"
                },
                {
                    "en": "Alternating dark and light squares",
                    "es": "Casillas oscuras y claras alternadas",
                    "de": "Abwechselnd dunkle und helle Felder",
                    "nl": "Afwisselend donkere en lichte vakjes"
                },
                {
                    "en": "Dots and circles",
                    "es": "Puntos y círculos",
                    "de": "Punkte und Kreise",
                    "nl": "Stippen en cirkels"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "The checkers board has a checkered pattern of alternating dark and light squares, 8 rows by 8 columns.",
                "es": "El tablero de damas tiene un patrón de cuadros con casillas oscuras y claras alternadas, 8 filas por 8 columnas.",
                "de": "Das Damebrett hat ein Schachbrettmuster aus abwechselnd dunklen und hellen Feldern, 8x8.",
                "nl": "Het dambord heeft een geruit patroon van afwisselend donkere en lichte vakjes, 8 rijen bij 8 kolommen."
            }
        },
        {
            "question": {
                "en": "What happens to a captured piece in checkers?",
                "es": "¿Qué pasa con una ficha capturada en damas?",
                "de": "Was passiert mit einem geschlagenen Stein beim Damespiel?",
                "nl": "Wat gebeurt er met een geslagen stuk bij dammen?"
            },
            "options": [
                {
                    "en": "It moves to the side",
                    "es": "Se mueve al lado",
                    "de": "Es bewegt sich zur Seite",
                    "nl": "Het gaat naar de zijkant"
                },
                {
                    "en": "It is removed from the board",
                    "es": "Se retira del tablero",
                    "de": "Es wird vom Brett entfernt",
                    "nl": "Het wordt van het bord verwijderd"
                },
                {
                    "en": "It changes color",
                    "es": "Cambia de color",
                    "de": "Es wechselt die Farbe",
                    "nl": "Het verandert van kleur"
                },
                {
                    "en": "It flips upside down",
                    "es": "Se da vuelta",
                    "de": "Es wird umgedreht",
                    "nl": "Het wordt omgedraaid"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A captured piece is removed from the board entirely and cannot return to play.",
                "es": "Una ficha capturada se retira completamente del tablero y no puede volver al juego.",
                "de": "Ein geschlagener Stein wird vollständig vom Brett entfernt und kann nicht zurückkehren.",
                "nl": "Een geslagen stuk wordt volledig van het bord verwijderd en kan niet terugkeren."
            }
        },
        {
            "question": {
                "en": "Can pieces move straight forward in checkers?",
                "es": "¿Pueden las fichas moverse recto hacia adelante en damas?",
                "de": "Können Steine beim Damespiel geradeaus vorwärts ziehen?",
                "nl": "Kunnen stukken recht vooruit bewegen bij dammen?"
            },
            "options": [
                {
                    "en": "Yes, always",
                    "es": "Sí, siempre",
                    "de": "Ja, immer",
                    "nl": "Ja, altijd"
                },
                {
                    "en": "Only kings can",
                    "es": "Solo las damas pueden",
                    "de": "Nur Damen können das",
                    "nl": "Alleen dammen kunnen dat"
                },
                {
                    "en": "No, only diagonally",
                    "es": "No, solo en diagonal",
                    "de": "Nein, nur diagonal",
                    "nl": "Nee, alleen diagonaal"
                },
                {
                    "en": "Only when capturing",
                    "es": "Solo al capturar",
                    "de": "Nur beim Schlagen",
                    "nl": "Alleen bij het slaan"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Pieces in checkers can only move diagonally, never straight forward, backward, or sideways.",
                "es": "Las fichas en damas solo pueden moverse en diagonal, nunca recto hacia adelante, atrás o a los lados.",
                "de": "Steine beim Damespiel können nur diagonal ziehen, niemals geradeaus, rückwärts oder seitwärts.",
                "nl": "Stukken bij dammen kunnen alleen diagonaal bewegen, nooit recht vooruit, achteruit of zijwaarts."
            }
        },
        {
            "question": {
                "en": "What material are traditional checkers pieces made of?",
                "es": "¿De qué material están hechas las fichas tradicionales de damas?",
                "de": "Aus welchem Material sind traditionelle Damesteine?",
                "nl": "Van welk materiaal zijn traditionele damstukken gemaakt?"
            },
            "options": [
                {
                    "en": "Metal",
                    "es": "Metal",
                    "de": "Metall",
                    "nl": "Metaal"
                },
                {
                    "en": "Glass",
                    "es": "Vidrio",
                    "de": "Glas",
                    "nl": "Glas"
                },
                {
                    "en": "Wood or plastic",
                    "es": "Madera o plástico",
                    "de": "Holz oder Kunststoff",
                    "nl": "Hout of plastic"
                },
                {
                    "en": "Stone",
                    "es": "Piedra",
                    "de": "Stein",
                    "nl": "Steen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Traditional checkers pieces are typically made of wood or plastic, making them affordable and durable.",
                "es": "Las fichas de damas tradicionales suelen ser de madera o plástico, haciéndolas económicas y duraderas.",
                "de": "Traditionelle Damesteine sind meist aus Holz oder Kunststoff, was sie erschwinglich und haltbar macht.",
                "nl": "Traditionele damstukken zijn meestal gemaakt van hout of plastic, waardoor ze betaalbaar en duurzaam zijn."
            }
        },
        {
            "question": {
                "en": "In which direction do pieces capture in checkers?",
                "es": "¿En qué dirección capturan las fichas en damas?",
                "de": "In welche Richtung schlagen Steine beim Damespiel?",
                "nl": "In welke richting slaan stukken bij dammen?"
            },
            "options": [
                {
                    "en": "Straight ahead",
                    "es": "Recto hacia adelante",
                    "de": "Geradeaus",
                    "nl": "Recht vooruit"
                },
                {
                    "en": "Diagonally",
                    "es": "En diagonal",
                    "de": "Diagonal",
                    "nl": "Diagonaal"
                },
                {
                    "en": "Sideways",
                    "es": "Hacia los lados",
                    "de": "Seitwärts",
                    "nl": "Zijwaarts"
                },
                {
                    "en": "In any direction",
                    "es": "En cualquier dirección",
                    "de": "In jede Richtung",
                    "nl": "In elke richting"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Pieces capture diagonally by jumping over an opponent's piece to an empty square beyond it.",
                "es": "Las fichas capturan en diagonal saltando sobre una ficha del oponente a una casilla vacía.",
                "de": "Steine schlagen diagonal, indem sie über einen gegnerischen Stein auf ein leeres Feld dahinter springen.",
                "nl": "Stukken slaan diagonaal door over een stuk van de tegenstander te springen naar een leeg vakje erachter."
            }
        },
        {
            "question": {
                "en": "What do you call the grid pattern on a checkers board?",
                "es": "¿Cómo se llama el patrón de cuadrícula en un tablero de damas?",
                "de": "Wie nennt man das Gittermuster auf einem Damebrett?",
                "nl": "Hoe noem je het rasterpatroon op een dambord?"
            },
            "options": [
                {
                    "en": "Checkered or checkerboard pattern",
                    "es": "Patrón de cuadros o tablero de damas",
                    "de": "Schachbrettmuster",
                    "nl": "Geruit of dambordpatroon"
                },
                {
                    "en": "Striped pattern",
                    "es": "Patrón de rayas",
                    "de": "Streifenmuster",
                    "nl": "Streeppatroon"
                },
                {
                    "en": "Polka dot pattern",
                    "es": "Patrón de lunares",
                    "de": "Punktmuster",
                    "nl": "Stippenpatroon"
                },
                {
                    "en": "Diamond pattern",
                    "es": "Patrón de diamantes",
                    "de": "Rautenmuster",
                    "nl": "Ruitpatroon"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The alternating pattern of light and dark squares is called a checkered or checkerboard pattern.",
                "es": "El patrón alternado de casillas claras y oscuras se llama patrón de cuadros o tablero de damas.",
                "de": "Das abwechselnde Muster aus hellen und dunklen Feldern heißt Schachbrettmuster.",
                "nl": "Het afwisselende patroon van lichte en donkere vakjes heet een geruit of dambordpatroon."
            }
        },
        {
            "question": {
                "en": "Where should a dark square be placed when setting up?",
                "es": "¿Dónde debe colocarse una casilla oscura al preparar?",
                "de": "Wo sollte ein dunkles Feld beim Aufbau sein?",
                "nl": "Waar moet een donker vakje zijn bij het opstellen?"
            },
            "options": [
                {
                    "en": "In the top right corner",
                    "es": "En la esquina superior derecha",
                    "de": "In der oberen rechten Ecke",
                    "nl": "In de rechter bovenhoek"
                },
                {
                    "en": "In the lower left corner of each player",
                    "es": "En la esquina inferior izquierda de cada jugador",
                    "de": "In der unteren linken Ecke jedes Spielers",
                    "nl": "In de linker benedenhoek van elke speler"
                },
                {
                    "en": "In the center",
                    "es": "En el centro",
                    "de": "In der Mitte",
                    "nl": "In het midden"
                },
                {
                    "en": "It does not matter",
                    "es": "No importa",
                    "de": "Es ist egal",
                    "nl": "Het maakt niet uit"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The board should be set up so each player has a dark square in their lower left corner.",
                "es": "El tablero debe colocarse de modo que cada jugador tenga una casilla oscura en su esquina inferior izquierda.",
                "de": "Das Brett sollte so aufgebaut werden, dass jeder Spieler ein dunkles Feld in der unteren linken Ecke hat.",
                "nl": "Het bord moet zo worden opgesteld dat elke speler een donker vakje in de linker benedenhoek heeft."
            }
        },
        {
            "question": {
                "en": "How many squares wide is a checkers board?",
                "es": "¿Cuántas casillas de ancho tiene un tablero de damas?",
                "de": "Wie viele Felder breit ist ein Damebrett?",
                "nl": "Hoeveel vakjes breed is een dambord?"
            },
            "options": [
                {
                    "en": "6",
                    "es": "6",
                    "de": "6",
                    "nl": "6"
                },
                {
                    "en": "10",
                    "es": "10",
                    "de": "10",
                    "nl": "10"
                },
                {
                    "en": "12",
                    "es": "12",
                    "de": "12",
                    "nl": "12"
                },
                {
                    "en": "8",
                    "es": "8",
                    "de": "8",
                    "nl": "8"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "A standard checkers board is 8 squares wide and 8 squares tall, making it an 8x8 grid.",
                "es": "Un tablero de damas estándar tiene 8 casillas de ancho y 8 de alto, formando una cuadrícula de 8x8.",
                "de": "Ein Standard-Damebrett ist 8 Felder breit und 8 Felder hoch, ein 8x8-Raster.",
                "nl": "Een standaard dambord is 8 vakjes breed en 8 vakjes hoog, een 8x8-raster."
            }
        },
        {
            "question": {
                "en": "What is a single jump in checkers?",
                "es": "¿Qué es un salto simple en damas?",
                "de": "Was ist ein einfacher Sprung beim Damespiel?",
                "nl": "Wat is een enkele sprong bij dammen?"
            },
            "options": [
                {
                    "en": "Moving forward without capturing",
                    "es": "Moverse hacia adelante sin capturar",
                    "de": "Vorwärts ziehen ohne zu schlagen",
                    "nl": "Vooruit bewegen zonder te slaan"
                },
                {
                    "en": "Jumping over one opponent piece",
                    "es": "Saltar sobre una ficha del oponente",
                    "de": "Über einen gegnerischen Stein springen",
                    "nl": "Over één stuk van de tegenstander springen"
                },
                {
                    "en": "Moving two squares at once",
                    "es": "Mover dos casillas a la vez",
                    "de": "Zwei Felder auf einmal ziehen",
                    "nl": "Twee vakjes tegelijk bewegen"
                },
                {
                    "en": "Skipping your turn",
                    "es": "Saltar tu turno",
                    "de": "Deinen Zug überspringen",
                    "nl": "Je beurt overslaan"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A single jump means jumping over one opponent's piece to capture it, landing on the empty square beyond.",
                "es": "Un salto simple significa saltar sobre una ficha del oponente para capturarla, aterrizando en la casilla vacía.",
                "de": "Ein einfacher Sprung bedeutet, über einen gegnerischen Stein zu springen, um ihn zu schlagen.",
                "nl": "Een enkele sprong betekent over één stuk van de tegenstander springen om het te slaan."
            }
        },
        {
            "question": {
                "en": "What must be empty for a jump to be legal?",
                "es": "¿Qué debe estar vacío para que un salto sea legal?",
                "de": "Was muss für einen legalen Sprung leer sein?",
                "nl": "Wat moet leeg zijn voor een legale sprong?"
            },
            "options": [
                {
                    "en": "The square you jump from",
                    "es": "La casilla desde la que saltas",
                    "de": "Das Feld, von dem du springst",
                    "nl": "Het vakje waar je vanaf springt"
                },
                {
                    "en": "The entire row",
                    "es": "La fila entera",
                    "de": "Die ganze Reihe",
                    "nl": "De hele rij"
                },
                {
                    "en": "The landing square behind the opponent",
                    "es": "La casilla de aterrizaje detrás del oponente",
                    "de": "Das Landefeld hinter dem Gegner",
                    "nl": "Het landingsvakje achter de tegenstander"
                },
                {
                    "en": "Both adjacent squares",
                    "es": "Ambas casillas adyacentes",
                    "de": "Beide benachbarten Felder",
                    "nl": "Beide aangrenzende vakjes"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "For a jump to be legal, the square directly beyond the opponent's piece must be empty for landing.",
                "es": "Para que un salto sea legal, la casilla directamente detrás de la ficha del oponente debe estar vacía.",
                "de": "Für einen legalen Sprung muss das Feld direkt hinter dem gegnerischen Stein leer sein.",
                "nl": "Voor een legale sprong moet het vakje direct achter het stuk van de tegenstander leeg zijn."
            }
        },
        {
            "question": {
                "en": "Can you play checkers on a chess board?",
                "es": "¿Se puede jugar damas en un tablero de ajedrez?",
                "de": "Kann man Dame auf einem Schachbrett spielen?",
                "nl": "Kun je dammen op een schaakbord?"
            },
            "options": [
                {
                    "en": "No, they are different sizes",
                    "es": "No, son de diferentes tamaños",
                    "de": "Nein, sie sind unterschiedlich groß",
                    "nl": "Nee, ze zijn verschillende formaten"
                },
                {
                    "en": "Yes, they are the same 8x8 board",
                    "es": "Sí, son el mismo tablero 8x8",
                    "de": "Ja, es ist das gleiche 8x8-Brett",
                    "nl": "Ja, het is hetzelfde 8x8-bord"
                },
                {
                    "en": "Only if you rotate it",
                    "es": "Solo si lo giras",
                    "de": "Nur wenn man es dreht",
                    "nl": "Alleen als je het draait"
                },
                {
                    "en": "Only for beginners",
                    "es": "Solo para principiantes",
                    "de": "Nur für Anfänger",
                    "nl": "Alleen voor beginners"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Yes, both checkers and chess use the same 8x8 board with alternating dark and light squares.",
                "es": "Sí, tanto las damas como el ajedrez usan el mismo tablero 8x8 con casillas alternadas.",
                "de": "Ja, sowohl Dame als auch Schach verwenden das gleiche 8x8-Brett mit abwechselnden Feldern.",
                "nl": "Ja, zowel dammen als schaken gebruiken hetzelfde 8x8-bord met afwisselende vakjes."
            }
        },
        {
            "question": {
                "en": "What does it mean to be blocked in checkers?",
                "es": "¿Qué significa estar bloqueado en damas?",
                "de": "Was bedeutet es, beim Damespiel blockiert zu sein?",
                "nl": "Wat betekent het om geblokkeerd te zijn bij dammen?"
            },
            "options": [
                {
                    "en": "Having no legal moves available",
                    "es": "No tener movimientos legales disponibles",
                    "de": "Keine legalen Züge verfügbar haben",
                    "nl": "Geen legale zetten beschikbaar hebben"
                },
                {
                    "en": "Having all kings",
                    "es": "Tener todas damas",
                    "de": "Alle Damen haben",
                    "nl": "Alle dammen hebben"
                },
                {
                    "en": "Being in the corner",
                    "es": "Estar en la esquina",
                    "de": "In der Ecke sein",
                    "nl": "In de hoek zitten"
                },
                {
                    "en": "Having only one piece left",
                    "es": "Tener solo una ficha",
                    "de": "Nur noch einen Stein haben",
                    "nl": "Slechts één stuk over hebben"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Being blocked means none of your remaining pieces can make a legal move. This results in losing the game.",
                "es": "Estar bloqueado significa que ninguna de tus fichas restantes puede hacer un movimiento legal.",
                "de": "Blockiert zu sein bedeutet, dass keiner deiner verbleibenden Steine einen legalen Zug machen kann.",
                "nl": "Geblokkeerd zijn betekent dat geen van je overgebleven stukken een legale zet kan doen."
            }
        },
        {
            "question": {
                "en": "Which edge of the board is the king row for each player?",
                "es": "¿Qué borde del tablero es la fila de coronación para cada jugador?",
                "de": "Welcher Rand ist die Damereihe für jeden Spieler?",
                "nl": "Welke rand van het bord is de damrij voor elke speler?"
            },
            "options": [
                {
                    "en": "The left edge",
                    "es": "El borde izquierdo",
                    "de": "Der linke Rand",
                    "nl": "De linkerrand"
                },
                {
                    "en": "The nearest edge",
                    "es": "El borde más cercano",
                    "de": "Der nächste Rand",
                    "nl": "De dichtstbijzijnde rand"
                },
                {
                    "en": "The farthest edge from the player",
                    "es": "El borde más lejano del jugador",
                    "de": "Der am weitesten entfernte Rand des Spielers",
                    "nl": "De verste rand van de speler"
                },
                {
                    "en": "The right edge",
                    "es": "El borde derecho",
                    "de": "Der rechte Rand",
                    "nl": "De rechterrand"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Each player's king row is the row farthest from them, on the opponent's side of the board.",
                "es": "La fila de coronación de cada jugador es la fila más alejada de ellos, en el lado del oponente.",
                "de": "Die Damereihe jedes Spielers ist die am weitesten entfernte Reihe auf der Gegnerseite.",
                "nl": "De damrij van elke speler is de rij het verst van hen, aan de kant van de tegenstander."
            }
        },
        {
            "question": {
                "en": "How many diagonals can a regular piece see from its position?",
                "es": "¿Cuántas diagonales puede ver una ficha normal desde su posición?",
                "de": "Wie viele Diagonalen kann ein normaler Stein von seiner Position sehen?",
                "nl": "Hoeveel diagonalen kan een gewoon stuk zien vanaf zijn positie?"
            },
            "options": [
                {
                    "en": "4",
                    "es": "4",
                    "de": "4",
                    "nl": "4"
                },
                {
                    "en": "2 forward diagonals",
                    "es": "2 diagonales hacia adelante",
                    "de": "2 vorwärts Diagonalen",
                    "nl": "2 voorwaartse diagonalen"
                },
                {
                    "en": "1",
                    "es": "1",
                    "de": "1",
                    "nl": "1"
                },
                {
                    "en": "6",
                    "es": "6",
                    "de": "6",
                    "nl": "6"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A regular piece can move to 2 forward diagonal squares (left-forward and right-forward).",
                "es": "Una ficha normal puede moverse a 2 casillas diagonales hacia adelante (izquierda y derecha).",
                "de": "Ein normaler Stein kann auf 2 vorwärts diagonale Felder ziehen (links-vorwärts und rechts-vorwärts).",
                "nl": "Een gewoon stuk kan naar 2 voorwaartse diagonale vakjes bewegen (links-vooruit en rechts-vooruit)."
            }
        },
        {
            "question": {
                "en": "How many diagonals can a king see from its position?",
                "es": "¿Cuántas diagonales puede ver una dama desde su posición?",
                "de": "Wie viele Diagonalen kann eine Dame von ihrer Position sehen?",
                "nl": "Hoeveel diagonalen kan een dam zien vanaf zijn positie?"
            },
            "options": [
                {
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
                },
                {
                    "en": "1",
                    "es": "1",
                    "de": "1",
                    "nl": "1"
                },
                {
                    "en": "4 diagonal directions",
                    "es": "4 direcciones diagonales",
                    "de": "4 diagonale Richtungen",
                    "nl": "4 diagonale richtingen"
                },
                {
                    "en": "8",
                    "es": "8",
                    "de": "8",
                    "nl": "8"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A king can move in all 4 diagonal directions: forward-left, forward-right, backward-left, backward-right.",
                "es": "Una dama puede moverse en las 4 direcciones diagonales: adelante-izquierda, adelante-derecha, atrás-izquierda, atrás-derecha.",
                "de": "Eine Dame kann in alle 4 diagonalen Richtungen ziehen: vorne-links, vorne-rechts, hinten-links, hinten-rechts.",
                "nl": "Een dam kan in alle 4 diagonale richtingen bewegen: vooruit-links, vooruit-rechts, achteruit-links, achteruit-rechts."
            }
        },
        {
            "question": {
                "en": "Is checkers played worldwide?",
                "es": "¿Se juega damas en todo el mundo?",
                "de": "Wird Dame weltweit gespielt?",
                "nl": "Wordt dammen wereldwijd gespeeld?"
            },
            "options": [
                {
                    "en": "Only in the USA",
                    "es": "Solo en EE.UU.",
                    "de": "Nur in den USA",
                    "nl": "Alleen in de VS"
                },
                {
                    "en": "Only in Europe",
                    "es": "Solo en Europa",
                    "de": "Nur in Europa",
                    "nl": "Alleen in Europa"
                },
                {
                    "en": "Only in Asia",
                    "es": "Solo en Asia",
                    "de": "Nur in Asien",
                    "nl": "Alleen in Azië"
                },
                {
                    "en": "Yes, in many countries around the world",
                    "es": "Sí, en muchos países del mundo",
                    "de": "Ja, in vielen Ländern weltweit",
                    "nl": "Ja, in veel landen over de hele wereld"
                }
            ],
            "correct": 3,
            "explanation": {
                "en": "Checkers is played worldwide with different variations in different countries and regions.",
                "es": "Las damas se juega en todo el mundo con diferentes variaciones en distintos países y regiones.",
                "de": "Dame wird weltweit mit verschiedenen Varianten in verschiedenen Ländern und Regionen gespielt.",
                "nl": "Dammen wordt wereldwijd gespeeld met verschillende variaties in verschillende landen en regio's."
            }
        },
        {
            "question": {
                "en": "What is the smallest number of moves to win a game of checkers?",
                "es": "¿Cuál es el menor número de movimientos para ganar en damas?",
                "de": "Was ist die kleinste Zugzahl zum Gewinnen beim Damespiel?",
                "nl": "Wat is het kleinste aantal zetten om te winnen bij dammen?"
            },
            "options": [
                {
                    "en": "1 move",
                    "es": "1 movimiento",
                    "de": "1 Zug",
                    "nl": "1 zet"
                },
                {
                    "en": "5 moves",
                    "es": "5 movimientos",
                    "de": "5 Züge",
                    "nl": "5 zetten"
                },
                {
                    "en": "About 20 moves",
                    "es": "Unos 20 movimientos",
                    "de": "Etwa 20 Züge",
                    "nl": "Ongeveer 20 zetten"
                },
                {
                    "en": "About 50 moves",
                    "es": "Unos 50 movimientos",
                    "de": "Etwa 50 Züge",
                    "nl": "Ongeveer 50 zetten"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The shortest possible game can end in about 5 moves if one player makes very poor moves allowing quick captures.",
                "es": "La partida más corta posible puede terminar en unos 5 movimientos con movimientos muy pobres.",
                "de": "Das kürzeste mögliche Spiel kann in etwa 5 Zügen enden bei sehr schlechten Zügen eines Spielers.",
                "nl": "Het kortst mogelijke spel kan in ongeveer 5 zetten eindigen bij zeer slechte zetten van een speler."
            }
        },
        {
            "question": {
                "en": "What is the name for a piece that is not a king?",
                "es": "¿Cómo se llama una ficha que no es dama?",
                "de": "Wie nennt man einen Stein, der keine Dame ist?",
                "nl": "Hoe noem je een stuk dat geen dam is?"
            },
            "options": [
                {
                    "en": "A pawn",
                    "es": "Un peón",
                    "de": "Ein Bauer",
                    "nl": "Een pion"
                },
                {
                    "en": "A man or regular piece",
                    "es": "Un hombre o ficha regular",
                    "de": "Ein Mann oder normaler Stein",
                    "nl": "Een man of gewoon stuk"
                },
                {
                    "en": "A soldier",
                    "es": "Un soldado",
                    "de": "Ein Soldat",
                    "nl": "Een soldaat"
                },
                {
                    "en": "A knight",
                    "es": "Un caballero",
                    "de": "Ein Ritter",
                    "nl": "Een ridder"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A non-king piece in checkers is called a man or regular piece. It can only move forward diagonally.",
                "es": "Una ficha que no es dama se llama hombre o ficha regular. Solo puede moverse en diagonal hacia adelante.",
                "de": "Ein Nicht-Dame-Stein wird Mann oder normaler Stein genannt. Er kann nur diagonal vorwärts ziehen.",
                "nl": "Een niet-dam stuk wordt een man of gewoon stuk genoemd. Het kan alleen diagonaal vooruit bewegen."
            }
        },
        {
            "question": {
                "en": "Can a piece become a king and continue jumping in the same turn?",
                "es": "¿Puede una ficha convertirse en dama y seguir saltando en el mismo turno?",
                "de": "Kann ein Stein zur Dame werden und im selben Zug weiterspringen?",
                "nl": "Kan een stuk dam worden en doorspringen in dezelfde beurt?"
            },
            "options": [
                {
                    "en": "Yes, always",
                    "es": "Sí, siempre",
                    "de": "Ja, immer",
                    "nl": "Ja, altijd"
                },
                {
                    "en": "No, the turn ends when it becomes a king",
                    "es": "No, el turno termina cuando se convierte en dama",
                    "de": "Nein, der Zug endet wenn es zur Dame wird",
                    "nl": "Nee, de beurt eindigt wanneer het dam wordt"
                },
                {
                    "en": "Only if it captures 3 pieces",
                    "es": "Solo si captura 3 fichas",
                    "de": "Nur wenn es 3 Steine schlägt",
                    "nl": "Alleen als het 3 stukken slaat"
                },
                {
                    "en": "Only on weekends",
                    "es": "Solo los fines de semana",
                    "de": "Nur am Wochenende",
                    "nl": "Alleen in het weekend"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "In standard American checkers, when a piece reaches the king row, the turn ends. It must wait until the next turn.",
                "es": "En las damas americanas estándar, cuando una ficha llega a la fila de coronación, el turno termina.",
                "de": "Beim amerikanischen Standarddamespiel endet der Zug, wenn ein Stein die Damereihe erreicht.",
                "nl": "Bij standaard Amerikaans dammen eindigt de beurt wanneer een stuk de damrij bereikt."
            }
        },
        {
            "question": {
                "en": "What is the term for moving a piece without capturing?",
                "es": "¿Cuál es el término para mover una ficha sin capturar?",
                "de": "Wie nennt man das Ziehen eines Steins ohne Schlagen?",
                "nl": "Hoe noem je het bewegen van een stuk zonder te slaan?"
            },
            "options": [
                {
                    "en": "A jump",
                    "es": "Un salto",
                    "de": "Ein Sprung",
                    "nl": "Een sprong"
                },
                {
                    "en": "A capture",
                    "es": "Una captura",
                    "de": "Ein Schlag",
                    "nl": "Een slag"
                },
                {
                    "en": "A simple move",
                    "es": "Un movimiento simple",
                    "de": "Ein einfacher Zug",
                    "nl": "Een simpele zet"
                },
                {
                    "en": "A pass",
                    "es": "Un pase",
                    "de": "Ein Pass",
                    "nl": "Een pas"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Moving a piece one square diagonally without capturing is called a simple move, as opposed to a jump.",
                "es": "Mover una ficha una casilla en diagonal sin capturar se llama movimiento simple, en contraste con un salto.",
                "de": "Das Ziehen eines Steins ein Feld diagonal ohne Schlagen heißt einfacher Zug, im Gegensatz zum Sprung.",
                "nl": "Een stuk één vakje diagonaal bewegen zonder te slaan heet een simpele zet, in tegenstelling tot een sprong."
            }
        },
        {
            "question": {
                "en": "What color are the playable squares in most checkers sets?",
                "es": "¿De qué color son las casillas jugables en la mayoría de sets de damas?",
                "de": "Welche Farbe haben die bespielbaren Felder bei den meisten Damespielen?",
                "nl": "Welke kleur hebben de bespeelbare vakjes bij de meeste damspellen?"
            },
            "options": [
                {
                    "en": "White or light",
                    "es": "Blanco o claro",
                    "de": "Weiß oder hell",
                    "nl": "Wit of licht"
                },
                {
                    "en": "Blue",
                    "es": "Azul",
                    "de": "Blau",
                    "nl": "Blauw"
                },
                {
                    "en": "Dark or black",
                    "es": "Oscuro o negro",
                    "de": "Dunkel oder schwarz",
                    "nl": "Donker of zwart"
                },
                {
                    "en": "Green",
                    "es": "Verde",
                    "de": "Grün",
                    "nl": "Groen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "In most checkers sets, pieces are placed and moved on the dark or black colored squares of the board.",
                "es": "En la mayoría de sets de damas, las fichas se colocan y mueven en las casillas de color oscuro o negro.",
                "de": "Bei den meisten Damespielen werden Steine auf den dunklen oder schwarzen Feldern platziert und bewegt.",
                "nl": "Bij de meeste damspellen worden stukken op de donkere of zwarte vakjes geplaatst en bewogen."
            }
        },
        {
            "question": {
                "en": "How many pieces per dark square at the start of the game?",
                "es": "¿Cuántas fichas por casilla oscura al inicio del juego?",
                "de": "Wie viele Steine pro dunklem Feld am Anfang des Spiels?",
                "nl": "Hoeveel stukken per donker vakje aan het begin van het spel?"
            },
            "options": [
                {
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
                },
                {
                    "en": "0 or 1",
                    "es": "0 o 1",
                    "de": "0 oder 1",
                    "nl": "0 of 1"
                },
                {
                    "en": "3",
                    "es": "3",
                    "de": "3",
                    "nl": "3"
                },
                {
                    "en": "4",
                    "es": "4",
                    "de": "4",
                    "nl": "4"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "At the start, each dark square has either 0 or 1 piece. The middle rows are empty, and the other rows have one each.",
                "es": "Al inicio, cada casilla oscura tiene 0 o 1 ficha. Las filas del medio están vacías, las otras tienen una.",
                "de": "Am Anfang hat jedes dunkle Feld 0 oder 1 Stein. Die mittleren Reihen sind leer, die anderen haben je einen.",
                "nl": "Aan het begin heeft elk donker vakje 0 of 1 stuk. De middelste rijen zijn leeg, de andere hebben er één."
            }
        },
        {
            "question": {
                "en": "What happens if both players agree the game cannot be won?",
                "es": "¿Qué pasa si ambos jugadores acuerdan que no se puede ganar?",
                "de": "Was passiert, wenn beide Spieler zustimmen, dass nicht gewonnen werden kann?",
                "nl": "Wat gebeurt er als beide spelers het eens zijn dat het spel niet gewonnen kan worden?"
            },
            "options": [
                {
                    "en": "They play again",
                    "es": "Juegan de nuevo",
                    "de": "Sie spielen nochmal",
                    "nl": "Ze spelen opnieuw"
                },
                {
                    "en": "The game is declared a draw",
                    "es": "El juego se declara empate",
                    "de": "Das Spiel wird als Unentschieden erklärt",
                    "nl": "Het spel wordt gelijkspel verklaard"
                },
                {
                    "en": "The player with more pieces wins",
                    "es": "El jugador con más fichas gana",
                    "de": "Der Spieler mit mehr Steinen gewinnt",
                    "nl": "De speler met meer stukken wint"
                },
                {
                    "en": "A coin is flipped",
                    "es": "Se lanza una moneda",
                    "de": "Eine Münze wird geworfen",
                    "nl": "Er wordt een munt opgegooid"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "If both players agree that neither can win, the game is declared a draw and neither player wins.",
                "es": "Si ambos jugadores acuerdan que ninguno puede ganar, el juego se declara empate.",
                "de": "Wenn beide Spieler zustimmen, dass keiner gewinnen kann, wird das Spiel als Unentschieden erklärt.",
                "nl": "Als beide spelers het eens zijn dat niemand kan winnen, wordt het spel gelijkspel verklaard."
            }
        },
        {
            "question": {
                "en": "Which is bigger: a checkers board or a tic-tac-toe board?",
                "es": "¿Cuál es más grande: un tablero de damas o de tres en raya?",
                "de": "Was ist größer: ein Damebrett oder ein Tic-Tac-Toe-Brett?",
                "nl": "Wat is groter: een dambord of een boter-kaas-en-eieren bord?"
            },
            "options": [
                {
                    "en": "Tic-tac-toe board",
                    "es": "Tablero de tres en raya",
                    "de": "Tic-Tac-Toe-Brett",
                    "nl": "Boter-kaas-en-eieren bord"
                },
                {
                    "en": "They are the same size",
                    "es": "Son del mismo tamaño",
                    "de": "Sie sind gleich groß",
                    "nl": "Ze zijn even groot"
                },
                {
                    "en": "Checkers board",
                    "es": "Tablero de damas",
                    "de": "Damebrett",
                    "nl": "Dambord"
                },
                {
                    "en": "It depends on the version",
                    "es": "Depende de la versión",
                    "de": "Es kommt auf die Version an",
                    "nl": "Het hangt af van de versie"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A checkers board (8x8 = 64 squares) is much bigger than a tic-tac-toe board (3x3 = 9 squares).",
                "es": "Un tablero de damas (8x8 = 64 casillas) es mucho más grande que uno de tres en raya (3x3 = 9).",
                "de": "Ein Damebrett (8x8 = 64 Felder) ist viel größer als ein Tic-Tac-Toe-Brett (3x3 = 9 Felder).",
                "nl": "Een dambord (8x8 = 64 vakjes) is veel groter dan een boter-kaas-en-eieren bord (3x3 = 9 vakjes)."
            }
        },
        {
            "question": {
                "en": "What do players take turns doing in checkers?",
                "es": "¿Qué hacen los jugadores por turnos en damas?",
                "de": "Was machen Spieler abwechselnd beim Damespiel?",
                "nl": "Wat doen spelers om de beurt bij dammen?"
            },
            "options": [
                {
                    "en": "Rolling dice",
                    "es": "Tirando dados",
                    "de": "Würfeln",
                    "nl": "Dobbelen"
                },
                {
                    "en": "Drawing cards",
                    "es": "Sacando cartas",
                    "de": "Karten ziehen",
                    "nl": "Kaarten trekken"
                },
                {
                    "en": "Moving one of their pieces",
                    "es": "Moviendo una de sus fichas",
                    "de": "Einen ihrer Steine bewegen",
                    "nl": "Een van hun stukken bewegen"
                },
                {
                    "en": "Spinning a wheel",
                    "es": "Girando una rueda",
                    "de": "Ein Rad drehen",
                    "nl": "Een wiel draaien"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Players take turns moving one of their pieces diagonally, either a simple move or a capture jump.",
                "es": "Los jugadores se turnan para mover una de sus fichas en diagonal, ya sea un movimiento simple o un salto.",
                "de": "Spieler ziehen abwechselnd einen ihrer Steine diagonal, entweder ein einfacher Zug oder ein Sprung.",
                "nl": "Spelers bewegen om de beurt een van hun stukken diagonaal, een simpele zet of een sprong."
            }
        },
        {
            "question": {
                "en": "Can you skip your turn in checkers?",
                "es": "¿Puedes saltar tu turno en damas?",
                "de": "Kann man beim Damespiel seinen Zug überspringen?",
                "nl": "Kun je je beurt overslaan bij dammen?"
            },
            "options": [
                {
                    "en": "Yes, once per game",
                    "es": "Sí, una vez por juego",
                    "de": "Ja, einmal pro Spiel",
                    "nl": "Ja, één keer per spel"
                },
                {
                    "en": "No, you must always move",
                    "es": "No, siempre debes mover",
                    "de": "Nein, man muss immer ziehen",
                    "nl": "Nee, je moet altijd bewegen"
                },
                {
                    "en": "Yes, if you have a king",
                    "es": "Sí, si tienes una dama",
                    "de": "Ja, wenn man eine Dame hat",
                    "nl": "Ja, als je een dam hebt"
                },
                {
                    "en": "Only in tournament play",
                    "es": "Solo en torneos",
                    "de": "Nur bei Turnieren",
                    "nl": "Alleen bij toernooien"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "You cannot skip your turn in checkers. You must always make a move. If you cannot, you lose the game.",
                "es": "No puedes saltar tu turno en damas. Siempre debes hacer un movimiento. Si no puedes, pierdes.",
                "de": "Man kann beim Damespiel seinen Zug nicht überspringen. Man muss immer ziehen. Wenn nicht, verliert man.",
                "nl": "Je kunt je beurt niet overslaan bij dammen. Je moet altijd een zet doen. Kun je dat niet, dan verlies je."
            }
        },
        {
            "question": {
                "en": "What is another name for checkers pieces?",
                "es": "¿Cuál es otro nombre para las fichas de damas?",
                "de": "Was ist ein anderer Name für Damesteine?",
                "nl": "Wat is een andere naam voor damstukken?"
            },
            "options": [
                {
                    "en": "Tokens",
                    "es": "Fichas",
                    "de": "Marken",
                    "nl": "Fiches"
                },
                {
                    "en": "Checkers or draughts men",
                    "es": "Hombres de damas",
                    "de": "Damesteine oder Männer",
                    "nl": "Damschijven of mannen"
                },
                {
                    "en": "Pawns",
                    "es": "Peones",
                    "de": "Bauern",
                    "nl": "Pionnen"
                },
                {
                    "en": "Chips",
                    "es": "Chips",
                    "de": "Chips",
                    "nl": "Chips"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Checkers pieces are also called men or draughts men. When crowned, they become kings or dames.",
                "es": "Las fichas de damas también se llaman hombres. Cuando se coronan, se convierten en damas.",
                "de": "Damesteine werden auch Männer genannt. Wenn sie gekrönt werden, werden sie zu Damen.",
                "nl": "Damstukken worden ook mannen of schijven genoemd. Wanneer ze gekroond worden, worden ze dammen."
            }
        },
        {
            "question": {
                "en": "Is there a time limit in casual checkers?",
                "es": "¿Hay un límite de tiempo en damas casual?",
                "de": "Gibt es ein Zeitlimit beim lockeren Damespiel?",
                "nl": "Is er een tijdslimiet bij informeel dammen?"
            },
            "options": [
                {
                    "en": "Yes, 30 seconds per move",
                    "es": "Sí, 30 segundos por movimiento",
                    "de": "Ja, 30 Sekunden pro Zug",
                    "nl": "Ja, 30 seconden per zet"
                },
                {
                    "en": "Yes, 1 minute per move",
                    "es": "Sí, 1 minuto por movimiento",
                    "de": "Ja, 1 Minute pro Zug",
                    "nl": "Ja, 1 minuut per zet"
                },
                {
                    "en": "Usually no set time limit",
                    "es": "Generalmente no hay límite de tiempo",
                    "de": "Normalerweise kein festes Zeitlimit",
                    "nl": "Meestal geen vaste tijdslimiet"
                },
                {
                    "en": "Yes, 5 minutes per game",
                    "es": "Sí, 5 minutos por juego",
                    "de": "Ja, 5 Minuten pro Spiel",
                    "nl": "Ja, 5 minuten per spel"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "In casual play, there is usually no set time limit. Tournament play may use chess clocks for timing.",
                "es": "En el juego casual, generalmente no hay límite de tiempo. Los torneos pueden usar relojes de ajedrez.",
                "de": "Beim lockeren Spiel gibt es normalerweise kein Zeitlimit. Bei Turnieren können Schachuhren verwendet werden.",
                "nl": "Bij informeel spelen is er meestal geen tijdslimiet. Toernooien kunnen schaakklokken gebruiken."
            }
        },
        {
            "question": {
                "en": "What is the best starting strategy tip for beginners?",
                "es": "¿Cuál es el mejor consejo de estrategia inicial para principiantes?",
                "de": "Was ist der beste Strategietipp für Anfänger?",
                "nl": "Wat is de beste strategietip voor beginners?"
            },
            "options": [
                {
                    "en": "Move all pieces to the center immediately",
                    "es": "Mover todas las fichas al centro inmediatamente",
                    "de": "Alle Steine sofort zur Mitte bewegen",
                    "nl": "Alle stukken meteen naar het midden bewegen"
                },
                {
                    "en": "Keep your back row as long as possible",
                    "es": "Mantener la fila trasera el mayor tiempo posible",
                    "de": "Die hintere Reihe so lange wie möglich halten",
                    "nl": "Je achterste rij zo lang mogelijk houden"
                },
                {
                    "en": "Only move kings",
                    "es": "Solo mover damas",
                    "de": "Nur Damen bewegen",
                    "nl": "Alleen dammen bewegen"
                },
                {
                    "en": "Always move the same piece",
                    "es": "Siempre mover la misma ficha",
                    "de": "Immer denselben Stein bewegen",
                    "nl": "Altijd hetzelfde stuk bewegen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Keeping your back row protects against opponent's pieces reaching the king row and becoming kings.",
                "es": "Mantener la fila trasera protege contra las fichas del oponente que llegan a la fila de coronación.",
                "de": "Die hintere Reihe zu halten schützt davor, dass gegnerische Steine die Damereihe erreichen.",
                "nl": "Je achterste rij houden beschermt tegen stukken van de tegenstander die de damrij bereiken."
            }
        },
        {
            "question": {
                "en": "How does a game of checkers typically end?",
                "es": "¿Cómo termina típicamente una partida de damas?",
                "de": "Wie endet ein Damespiel typischerweise?",
                "nl": "Hoe eindigt een potje dammen doorgaans?"
            },
            "options": [
                {
                    "en": "After a set number of rounds",
                    "es": "Después de un número fijo de rondas",
                    "de": "Nach einer festen Anzahl von Runden",
                    "nl": "Na een vast aantal rondes"
                },
                {
                    "en": "When time runs out",
                    "es": "Cuando se acaba el tiempo",
                    "de": "Wenn die Zeit abläuft",
                    "nl": "Als de tijd op is"
                },
                {
                    "en": "When one player has no pieces or moves left",
                    "es": "Cuando un jugador no tiene fichas o movimientos",
                    "de": "Wenn ein Spieler keine Steine oder Züge mehr hat",
                    "nl": "Wanneer een speler geen stukken of zetten meer heeft"
                },
                {
                    "en": "When both players agree to stop",
                    "es": "Cuando ambos jugadores acuerdan parar",
                    "de": "Wenn beide Spieler sich einigen aufzuhören",
                    "nl": "Wanneer beide spelers het eens zijn om te stoppen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A game typically ends when one player loses all pieces or cannot make any legal moves.",
                "es": "Un juego típicamente termina cuando un jugador pierde todas las fichas o no puede hacer movimientos legales.",
                "de": "Ein Spiel endet typischerweise, wenn ein Spieler alle Steine verliert oder keine legalen Züge mehr hat.",
                "nl": "Een spel eindigt doorgaans wanneer een speler alle stukken verliest of geen legale zetten meer kan doen."
            }
        },
        {
            "question": {
                "en": "Do all checkers pieces start on the board?",
                "es": "¿Todas las fichas de damas empiezan en el tablero?",
                "de": "Starten alle Damesteine auf dem Brett?",
                "nl": "Starten alle damstukken op het bord?"
            },
            "options": [
                {
                    "en": "No, some are kept aside",
                    "es": "No, algunas se guardan aparte",
                    "de": "Nein, einige werden beiseite gelegt",
                    "nl": "Nee, sommige worden apart gehouden"
                },
                {
                    "en": "Only the kings start on the board",
                    "es": "Solo las damas empiezan en el tablero",
                    "de": "Nur die Damen starten auf dem Brett",
                    "nl": "Alleen de dammen starten op het bord"
                },
                {
                    "en": "Yes, all 24 pieces start on the board",
                    "es": "Sí, las 24 fichas empiezan en el tablero",
                    "de": "Ja, alle 24 Steine starten auf dem Brett",
                    "nl": "Ja, alle 24 stukken starten op het bord"
                },
                {
                    "en": "Pieces are added during the game",
                    "es": "Las fichas se añaden durante el juego",
                    "de": "Steine werden während des Spiels hinzugefügt",
                    "nl": "Stukken worden tijdens het spel toegevoegd"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Yes, all 24 pieces (12 per player) start on the board at the beginning of the game.",
                "es": "Sí, las 24 fichas (12 por jugador) empiezan en el tablero al inicio del juego.",
                "de": "Ja, alle 24 Steine (12 pro Spieler) starten am Anfang des Spiels auf dem Brett.",
                "nl": "Ja, alle 24 stukken (12 per speler) starten aan het begin van het spel op het bord."
            }
        },
        {
            "question": {
                "en": "What age group is checkers suitable for?",
                "es": "¿Para qué grupo de edad es adecuado las damas?",
                "de": "Für welche Altersgruppe ist Dame geeignet?",
                "nl": "Voor welke leeftijdsgroep is dammen geschikt?"
            },
            "options": [
                {
                    "en": "Only adults",
                    "es": "Solo adultos",
                    "de": "Nur Erwachsene",
                    "nl": "Alleen volwassenen"
                },
                {
                    "en": "Children and adults of all ages",
                    "es": "Niños y adultos de todas las edades",
                    "de": "Kinder und Erwachsene aller Altersgruppen",
                    "nl": "Kinderen en volwassenen van alle leeftijden"
                },
                {
                    "en": "Only teenagers",
                    "es": "Solo adolescentes",
                    "de": "Nur Teenager",
                    "nl": "Alleen tieners"
                },
                {
                    "en": "Only children under 10",
                    "es": "Solo niños menores de 10 años",
                    "de": "Nur Kinder unter 10",
                    "nl": "Alleen kinderen onder de 10"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Checkers is suitable for all ages. Children can learn the basic rules easily, and adults enjoy the strategic depth.",
                "es": "Las damas es adecuado para todas las edades. Los niños aprenden las reglas fácilmente y los adultos disfrutan la estrategia.",
                "de": "Dame ist für alle Altersgruppen geeignet. Kinder lernen die Regeln leicht, Erwachsene genießen die Strategie.",
                "nl": "Dammen is geschikt voor alle leeftijden. Kinderen leren de regels makkelijk en volwassenen genieten van de strategie."
            }
        },
        {
            "question": {
                "en": "Is checkers considered a solved game?",
                "es": "¿Se considera las damas un juego resuelto?",
                "de": "Gilt Dame als gelöstes Spiel?",
                "nl": "Wordt dammen beschouwd als een opgelost spel?"
            },
            "options": [
                {
                    "en": "No, it is unsolvable",
                    "es": "No, es irresoluble",
                    "de": "Nein, es ist unlösbar",
                    "nl": "Nee, het is onoplosbaar"
                },
                {
                    "en": "Only partially",
                    "es": "Solo parcialmente",
                    "de": "Nur teilweise",
                    "nl": "Slechts gedeeltelijk"
                },
                {
                    "en": "Yes, it was solved by computers",
                    "es": "Sí, fue resuelto por computadoras",
                    "de": "Ja, es wurde von Computern gelöst",
                    "nl": "Ja, het is opgelost door computers"
                },
                {
                    "en": "Nobody has tried",
                    "es": "Nadie lo ha intentado",
                    "de": "Niemand hat es versucht",
                    "nl": "Niemand heeft het geprobeerd"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Yes, in 2007, standard checkers was solved by the Chinook program. Perfect play leads to a draw.",
                "es": "Sí, en 2007, las damas estándar fue resuelta por el programa Chinook. El juego perfecto lleva a empate.",
                "de": "Ja, 2007 wurde Standard-Dame vom Chinook-Programm gelöst. Perfektes Spiel führt zu einem Unentschieden.",
                "nl": "Ja, in 2007 werd standaard dammen opgelost door het Chinook-programma. Perfect spel leidt tot gelijkspel."
            }
        },
        {
            "question": {
                "en": "Can you move a piece to a light-colored square in checkers?",
                "es": "¿Puedes mover una ficha a una casilla de color claro en damas?",
                "de": "Kann man einen Stein auf ein helles Feld beim Damespiel ziehen?",
                "nl": "Kun je een stuk naar een lichtgekleurd vakje bewegen bij dammen?"
            },
            "options": [
                {
                    "en": "Yes, if it is empty",
                    "es": "Sí, si está vacía",
                    "de": "Ja, wenn es leer ist",
                    "nl": "Ja, als het leeg is"
                },
                {
                    "en": "Only kings can",
                    "es": "Solo las damas pueden",
                    "de": "Nur Damen können",
                    "nl": "Alleen dammen kunnen"
                },
                {
                    "en": "No, pieces only use dark squares",
                    "es": "No, las fichas solo usan casillas oscuras",
                    "de": "Nein, Steine benutzen nur dunkle Felder",
                    "nl": "Nee, stukken gebruiken alleen donkere vakjes"
                },
                {
                    "en": "Only when capturing",
                    "es": "Solo al capturar",
                    "de": "Nur beim Schlagen",
                    "nl": "Alleen bij het slaan"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "No, pieces in checkers never move to light-colored squares. They always stay on the dark squares.",
                "es": "No, las fichas en damas nunca se mueven a casillas de color claro. Siempre se quedan en las oscuras.",
                "de": "Nein, Steine beim Damespiel bewegen sich nie auf helle Felder. Sie bleiben immer auf dunklen Feldern.",
                "nl": "Nee, stukken bij dammen bewegen nooit naar lichtgekleurde vakjes. Ze blijven altijd op donkere vakjes."
            }
        },
        {
            "question": {
                "en": "What is an exchange in checkers?",
                "es": "¿Qué es un intercambio en damas?",
                "de": "Was ist ein Tausch beim Damespiel?",
                "nl": "Wat is een ruil bij dammen?"
            },
            "options": [
                {
                    "en": "Trading pieces with your opponent",
                    "es": "Intercambiar fichas con tu oponente",
                    "de": "Steine mit dem Gegner tauschen",
                    "nl": "Stukken ruilen met je tegenstander"
                },
                {
                    "en": "When both players lose a piece in consecutive turns",
                    "es": "Cuando ambos jugadores pierden una ficha en turnos consecutivos",
                    "de": "Wenn beide Spieler in aufeinanderfolgenden Zügen einen Stein verlieren",
                    "nl": "Wanneer beide spelers een stuk verliezen in opeenvolgende beurten"
                },
                {
                    "en": "Swapping sides on the board",
                    "es": "Intercambiar lados del tablero",
                    "de": "Die Seiten auf dem Brett tauschen",
                    "nl": "Van kant wisselen op het bord"
                },
                {
                    "en": "Replacing a piece with a king",
                    "es": "Reemplazar una ficha por una dama",
                    "de": "Einen Stein durch eine Dame ersetzen",
                    "nl": "Een stuk vervangen door een dam"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "An exchange is when both players capture a piece in consecutive turns, resulting in an equal trade.",
                "es": "Un intercambio es cuando ambos jugadores capturan una ficha en turnos consecutivos, un intercambio igual.",
                "de": "Ein Tausch ist, wenn beide Spieler in aufeinanderfolgenden Zügen einen Stein schlagen, ein gleichwertiger Tausch.",
                "nl": "Een ruil is wanneer beide spelers een stuk slaan in opeenvolgende beurten, een gelijke ruil."
            }
        },
        {
            "question": {
                "en": "What board game uses the same board as checkers?",
                "es": "¿Qué juego de mesa usa el mismo tablero que las damas?",
                "de": "Welches Brettspiel benutzt das gleiche Brett wie Dame?",
                "nl": "Welk bordspel gebruikt hetzelfde bord als dammen?"
            },
            "options": [
                {
                    "en": "Monopoly",
                    "es": "Monopoly",
                    "de": "Monopoly",
                    "nl": "Monopoly"
                },
                {
                    "en": "Scrabble",
                    "es": "Scrabble",
                    "de": "Scrabble",
                    "nl": "Scrabble"
                },
                {
                    "en": "Chess",
                    "es": "Ajedrez",
                    "de": "Schach",
                    "nl": "Schaken"
                },
                {
                    "en": "Backgammon",
                    "es": "Backgammon",
                    "de": "Backgammon",
                    "nl": "Backgammon"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Chess uses the same 8x8 board with alternating dark and light squares as checkers.",
                "es": "El ajedrez usa el mismo tablero 8x8 con casillas oscuras y claras alternadas que las damas.",
                "de": "Schach benutzt das gleiche 8x8-Brett mit abwechselnd dunklen und hellen Feldern wie Dame.",
                "nl": "Schaken gebruikt hetzelfde 8x8-bord met afwisselend donkere en lichte vakjes als dammen."
            }
        },
        {
            "question": {
                "en": "How many total squares does a standard checkers board have?",
                "es": "¿Cuántas casillas totales tiene un tablero de damas estándar?",
                "de": "Wie viele Felder hat ein Standard-Damebrett insgesamt?",
                "nl": "Hoeveel vakjes heeft een standaard dambord in totaal?"
            },
            "options": [
                {
                    "en": "32",
                    "es": "32",
                    "de": "32",
                    "nl": "32"
                },
                {
                    "en": "64",
                    "es": "64",
                    "de": "64",
                    "nl": "64"
                },
                {
                    "en": "100",
                    "es": "100",
                    "de": "100",
                    "nl": "100"
                },
                {
                    "en": "48",
                    "es": "48",
                    "de": "48",
                    "nl": "48"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A standard 8x8 checkers board has 64 total squares: 32 dark and 32 light squares.",
                "es": "Un tablero de damas estándar 8x8 tiene 64 casillas en total: 32 oscuras y 32 claras.",
                "de": "Ein Standard-8x8-Damebrett hat insgesamt 64 Felder: 32 dunkle und 32 helle.",
                "nl": "Een standaard 8x8-dambord heeft 64 vakjes in totaal: 32 donkere en 32 lichte."
            }
        },
        {
            "question": {
                "en": "Is checkers harder than tic-tac-toe?",
                "es": "¿Es más difícil las damas que tres en raya?",
                "de": "Ist Dame schwieriger als Tic-Tac-Toe?",
                "nl": "Is dammen moeilijker dan boter-kaas-en-eieren?"
            },
            "options": [
                {
                    "en": "No, tic-tac-toe is harder",
                    "es": "No, tres en raya es más difícil",
                    "de": "Nein, Tic-Tac-Toe ist schwieriger",
                    "nl": "Nee, boter-kaas-en-eieren is moeilijker"
                },
                {
                    "en": "They are equal",
                    "es": "Son iguales",
                    "de": "Sie sind gleich",
                    "nl": "Ze zijn gelijk"
                },
                {
                    "en": "Yes, checkers is much more complex",
                    "es": "Sí, las damas es mucho más complejo",
                    "de": "Ja, Dame ist viel komplexer",
                    "nl": "Ja, dammen is veel complexer"
                },
                {
                    "en": "It depends on the player",
                    "es": "Depende del jugador",
                    "de": "Es kommt auf den Spieler an",
                    "nl": "Het hangt af van de speler"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Yes, checkers is much more complex than tic-tac-toe, with millions of possible positions versus a few thousand.",
                "es": "Sí, las damas es mucho más complejo que tres en raya, con millones de posiciones posibles.",
                "de": "Ja, Dame ist viel komplexer als Tic-Tac-Toe, mit Millionen möglicher Positionen.",
                "nl": "Ja, dammen is veel complexer dan boter-kaas-en-eieren, met miljoenen mogelijke posities."
            }
        },
        {
            "question": {
                "en": "What makes checkers easy to learn?",
                "es": "¿Qué hace que las damas sea fácil de aprender?",
                "de": "Was macht Dame leicht zu lernen?",
                "nl": "Wat maakt dammen makkelijk om te leren?"
            },
            "options": [
                {
                    "en": "It has many different piece types",
                    "es": "Tiene muchos tipos de fichas diferentes",
                    "de": "Es hat viele verschiedene Steinarten",
                    "nl": "Het heeft veel verschillende stuksoorten"
                },
                {
                    "en": "Simple rules with few piece types",
                    "es": "Reglas simples con pocos tipos de fichas",
                    "de": "Einfache Regeln mit wenigen Steinarten",
                    "nl": "Simpele regels met weinig stuksoorten"
                },
                {
                    "en": "You need special training",
                    "es": "Necesitas entrenamiento especial",
                    "de": "Man braucht spezielles Training",
                    "nl": "Je hebt speciale training nodig"
                },
                {
                    "en": "It uses complex scoring",
                    "es": "Usa puntuación compleja",
                    "de": "Es verwendet komplexe Punktzählung",
                    "nl": "Het gebruikt complexe scoring"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Checkers is easy to learn because it has simple rules and only two types of pieces: men and kings.",
                "es": "Las damas es fácil de aprender porque tiene reglas simples y solo dos tipos de fichas: hombres y damas.",
                "de": "Dame ist leicht zu lernen wegen einfacher Regeln und nur zwei Steinarten: Männer und Damen.",
                "nl": "Dammen is makkelijk om te leren vanwege simpele regels en slechts twee stuksoorten: mannen en dammen."
            }
        },
        {
            "question": {
                "en": "What type of piece movement is used in checkers?",
                "es": "¿Qué tipo de movimiento de fichas se usa en damas?",
                "de": "Welche Art der Steinbewegung wird beim Damespiel verwendet?",
                "nl": "Welk type stukbeweging wordt gebruikt bij dammen?"
            },
            "options": [
                {
                    "en": "Horizontal movement",
                    "es": "Movimiento horizontal",
                    "de": "Horizontale Bewegung",
                    "nl": "Horizontale beweging"
                },
                {
                    "en": "Vertical movement",
                    "es": "Movimiento vertical",
                    "de": "Vertikale Bewegung",
                    "nl": "Verticale beweging"
                },
                {
                    "en": "Diagonal movement",
                    "es": "Movimiento diagonal",
                    "de": "Diagonale Bewegung",
                    "nl": "Diagonale beweging"
                },
                {
                    "en": "L-shaped movement",
                    "es": "Movimiento en forma de L",
                    "de": "L-förmige Bewegung",
                    "nl": "L-vormige beweging"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "All pieces in checkers move diagonally. No piece can move horizontally, vertically, or in any other pattern.",
                "es": "Todas las fichas en damas se mueven en diagonal. Ninguna ficha puede moverse horizontal o verticalmente.",
                "de": "Alle Steine beim Damespiel bewegen sich diagonal. Kein Stein kann horizontal oder vertikal ziehen.",
                "nl": "Alle stukken bij dammen bewegen diagonaal. Geen stuk kan horizontaal of verticaal bewegen."
            }
        },
        {
            "question": {
                "en": "How many light-colored squares are on a checkers board?",
                "es": "¿Cuántas casillas de color claro hay en un tablero de damas?",
                "de": "Wie viele helle Felder hat ein Damebrett?",
                "nl": "Hoeveel lichtgekleurde vakjes zijn er op een dambord?"
            },
            "options": [
                {
                    "en": "32",
                    "es": "32",
                    "de": "32",
                    "nl": "32"
                },
                {
                    "en": "24",
                    "es": "24",
                    "de": "24",
                    "nl": "24"
                },
                {
                    "en": "16",
                    "es": "16",
                    "de": "16",
                    "nl": "16"
                },
                {
                    "en": "64",
                    "es": "64",
                    "de": "64",
                    "nl": "64"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "There are 32 light-colored squares on a checkers board. These squares are not used during gameplay.",
                "es": "Hay 32 casillas de color claro en un tablero de damas. Estas casillas no se usan durante el juego.",
                "de": "Es gibt 32 helle Felder auf einem Damebrett. Diese Felder werden im Spiel nicht benutzt.",
                "nl": "Er zijn 32 lichtgekleurde vakjes op een dambord. Deze vakjes worden niet gebruikt tijdens het spel."
            }
        },
        {
            "question": {
                "en": "What category of game is checkers?",
                "es": "¿En qué categoría de juego está las damas?",
                "de": "In welche Spielkategorie gehört Dame?",
                "nl": "In welke spelcategorie valt dammen?"
            },
            "options": [
                {
                    "en": "Abstract strategy game",
                    "es": "Juego de estrategia abstracta",
                    "de": "Abstraktes Strategiespiel",
                    "nl": "Abstract strategiespel"
                },
                {
                    "en": "Party game",
                    "es": "Juego de fiesta",
                    "de": "Partyspiel",
                    "nl": "Partyspel"
                },
                {
                    "en": "Trivia game",
                    "es": "Juego de trivia",
                    "de": "Quizspiel",
                    "nl": "Triviaspel"
                },
                {
                    "en": "Sports game",
                    "es": "Juego deportivo",
                    "de": "Sportspiel",
                    "nl": "Sportspel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Checkers is an abstract strategy game, meaning it has no theme or story, just pure strategic gameplay.",
                "es": "Las damas es un juego de estrategia abstracta, sin tema o historia, solo juego estratégico puro.",
                "de": "Dame ist ein abstraktes Strategiespiel, ohne Thema oder Geschichte, nur reines strategisches Spielen.",
                "nl": "Dammen is een abstract strategiespel, zonder thema of verhaal, alleen puur strategisch spelen."
            }
        },
        {
            "question": {
                "en": "What is the first move a player can make in checkers?",
                "es": "¿Cuál es el primer movimiento que puede hacer un jugador en damas?",
                "de": "Was ist der erste Zug, den ein Spieler beim Damespiel machen kann?",
                "nl": "Wat is de eerste zet die een speler kan doen bij dammen?"
            },
            "options": [
                {
                    "en": "Jump over an opponent piece",
                    "es": "Saltar sobre una ficha del oponente",
                    "de": "Über einen gegnerischen Stein springen",
                    "nl": "Over een stuk van de tegenstander springen"
                },
                {
                    "en": "Move a front row piece one square diagonally forward",
                    "es": "Mover una ficha de la primera fila una casilla en diagonal",
                    "de": "Einen Stein der vorderen Reihe ein Feld diagonal vorwärts ziehen",
                    "nl": "Een stuk uit de voorste rij één vakje diagonaal vooruit bewegen"
                },
                {
                    "en": "Place a new piece on the board",
                    "es": "Colocar una nueva ficha en el tablero",
                    "de": "Einen neuen Stein auf das Brett setzen",
                    "nl": "Een nieuw stuk op het bord plaatsen"
                },
                {
                    "en": "Crown a piece as king",
                    "es": "Coronar una ficha como dama",
                    "de": "Einen Stein zur Dame krönen",
                    "nl": "Een stuk kronen tot dam"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The first move is always moving a front row piece one square diagonally forward to an empty dark square.",
                "es": "El primer movimiento siempre es mover una ficha de la primera fila una casilla en diagonal hacia adelante.",
                "de": "Der erste Zug ist immer, einen Stein der vorderen Reihe ein Feld diagonal vorwärts zu ziehen.",
                "nl": "De eerste zet is altijd een stuk uit de voorste rij één vakje diagonaal vooruit bewegen."
            }
        },
        {
            "question": {
                "en": "Is checkers a competitive game?",
                "es": "¿Es las damas un juego competitivo?",
                "de": "Ist Dame ein Wettbewerbsspiel?",
                "nl": "Is dammen een competitief spel?"
            },
            "options": [
                {
                    "en": "No, it is cooperative",
                    "es": "No, es cooperativo",
                    "de": "Nein, es ist kooperativ",
                    "nl": "Nee, het is coöperatief"
                },
                {
                    "en": "Only in tournaments",
                    "es": "Solo en torneos",
                    "de": "Nur bei Turnieren",
                    "nl": "Alleen bij toernooien"
                },
                {
                    "en": "Yes, two players compete against each other",
                    "es": "Sí, dos jugadores compiten entre sí",
                    "de": "Ja, zwei Spieler treten gegeneinander an",
                    "nl": "Ja, twee spelers spelen tegen elkaar"
                },
                {
                    "en": "It depends on the rules",
                    "es": "Depende de las reglas",
                    "de": "Es kommt auf die Regeln an",
                    "nl": "Het hangt af van de regels"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Yes, checkers is a competitive game where two players try to beat each other by capturing pieces.",
                "es": "Sí, las damas es un juego competitivo donde dos jugadores intentan vencer al otro capturando fichas.",
                "de": "Ja, Dame ist ein Wettbewerbsspiel, bei dem zwei Spieler versuchen, sich gegenseitig durch Schlagen zu besiegen.",
                "nl": "Ja, dammen is een competitief spel waarbij twee spelers proberen elkaar te verslaan door stukken te slaan."
            }
        },
        {
            "question": {
                "en": "What equipment do you need to play checkers?",
                "es": "¿Qué equipo necesitas para jugar damas?",
                "de": "Was braucht man zum Damespielen?",
                "nl": "Wat heb je nodig om te dammen?"
            },
            "options": [
                {
                    "en": "A board, pieces, and dice",
                    "es": "Un tablero, fichas y dados",
                    "de": "Ein Brett, Steine und Würfel",
                    "nl": "Een bord, stukken en dobbelstenen"
                },
                {
                    "en": "A board and 24 pieces in two colors",
                    "es": "Un tablero y 24 fichas en dos colores",
                    "de": "Ein Brett und 24 Steine in zwei Farben",
                    "nl": "Een bord en 24 stukken in twee kleuren"
                },
                {
                    "en": "Cards and a board",
                    "es": "Cartas y un tablero",
                    "de": "Karten und ein Brett",
                    "nl": "Kaarten en een bord"
                },
                {
                    "en": "A spinner and tokens",
                    "es": "Una ruleta y fichas",
                    "de": "Ein Drehrad und Marken",
                    "nl": "Een draaischijf en fiches"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "You only need a checkers board and 24 pieces (12 each in two different colors) to play checkers.",
                "es": "Solo necesitas un tablero de damas y 24 fichas (12 de cada color) para jugar damas.",
                "de": "Man braucht nur ein Damebrett und 24 Steine (12 in jeder von zwei Farben) zum Damespielen.",
                "nl": "Je hebt alleen een dambord en 24 stukken (12 in elk van twee kleuren) nodig om te dammen."
            }
        },
        {
            "question": {
                "en": "What happens when a piece reaches the king row mid-jump?",
                "es": "¿Qué pasa cuando una ficha llega a la fila de coronación en medio de un salto?",
                "de": "Was passiert, wenn ein Stein die Damereihe während eines Sprungs erreicht?",
                "nl": "Wat gebeurt er als een stuk de damrij bereikt midden in een sprong?"
            },
            "options": [
                {
                    "en": "It continues jumping as a king",
                    "es": "Continúa saltando como dama",
                    "de": "Es springt als Dame weiter",
                    "nl": "Het gaat door met springen als dam"
                },
                {
                    "en": "It stops and becomes a king (in American rules)",
                    "es": "Se detiene y se convierte en dama (reglas americanas)",
                    "de": "Es stoppt und wird zur Dame (amerikanische Regeln)",
                    "nl": "Het stopt en wordt dam (Amerikaanse regels)"
                },
                {
                    "en": "It goes back to the start",
                    "es": "Vuelve al inicio",
                    "de": "Es geht zurück zum Start",
                    "nl": "Het gaat terug naar het begin"
                },
                {
                    "en": "The player loses a turn",
                    "es": "El jugador pierde un turno",
                    "de": "Der Spieler verliert einen Zug",
                    "nl": "De speler verliest een beurt"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "In American checkers, when a piece reaches the king row during a multi-jump, it stops and is crowned. The turn ends.",
                "es": "En las damas americanas, cuando una ficha llega a la fila de coronación durante un multi-salto, se detiene y corona.",
                "de": "Beim amerikanischen Damespiel stoppt ein Stein, der die Damereihe bei einem Mehrfachsprung erreicht, und wird gekrönt.",
                "nl": "Bij Amerikaans dammen stopt een stuk dat de damrij bereikt tijdens een meervoudige sprong en wordt gekroond."
            }
        },
        {
            "question": {
                "en": "Can you move two pieces in one turn in checkers?",
                "es": "¿Puedes mover dos fichas en un turno en damas?",
                "de": "Kann man beim Damespiel zwei Steine in einem Zug bewegen?",
                "nl": "Kun je twee stukken in één beurt bewegen bij dammen?"
            },
            "options": [
                {
                    "en": "Yes, if both can capture",
                    "es": "Sí, si ambas pueden capturar",
                    "de": "Ja, wenn beide schlagen können",
                    "nl": "Ja, als beide kunnen slaan"
                },
                {
                    "en": "No, only one piece per turn",
                    "es": "No, solo una ficha por turno",
                    "de": "Nein, nur ein Stein pro Zug",
                    "nl": "Nee, slechts één stuk per beurt"
                },
                {
                    "en": "Only kings can do this",
                    "es": "Solo las damas pueden hacer esto",
                    "de": "Nur Damen können das",
                    "nl": "Alleen dammen kunnen dit"
                },
                {
                    "en": "Yes, in the first move",
                    "es": "Sí, en el primer movimiento",
                    "de": "Ja, beim ersten Zug",
                    "nl": "Ja, bij de eerste zet"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "You can only move one piece per turn in checkers. That piece may make multiple jumps, but it is still one piece.",
                "es": "Solo puedes mover una ficha por turno en damas. Esa ficha puede hacer múltiples saltos, pero es una sola.",
                "de": "Man kann beim Damespiel nur einen Stein pro Zug bewegen. Dieser kann mehrere Sprünge machen.",
                "nl": "Je kunt maar één stuk per beurt bewegen bij dammen. Dat stuk mag meerdere sprongen maken."
            }
        },
        {
            "question": {
                "en": "What color are the squares used for play in checkers?",
                "es": "¿De qué color son las casillas usadas para jugar damas?",
                "de": "Welche Farbe haben die Spielfelder beim Damespiel?",
                "nl": "Welke kleur hebben de speelvelden bij dammen?"
            },
            "options": [
                {
                    "en": "Dark squares",
                    "es": "Casillas oscuras",
                    "de": "Dunkle Felder",
                    "nl": "Donkere vakjes"
                },
                {
                    "en": "Light squares",
                    "es": "Casillas claras",
                    "de": "Helle Felder",
                    "nl": "Lichte vakjes"
                },
                {
                    "en": "Both colors",
                    "es": "Ambos colores",
                    "de": "Beide Farben",
                    "nl": "Beide kleuren"
                },
                {
                    "en": "Any color",
                    "es": "Cualquier color",
                    "de": "Jede Farbe",
                    "nl": "Elke kleur"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In checkers, pieces are placed and moved only on the dark squares of the board.",
                "es": "En damas, las fichas se colocan y mueven solo en las casillas oscuras del tablero.",
                "de": "Beim Damespiel werden Steine nur auf den dunklen Feldern platziert und bewegt.",
                "nl": "Bij dammen worden stukken alleen op de donkere vakjes geplaatst en bewogen."
            }
        },
        {
            "question": {
                "en": "Can a regular piece in checkers move backward?",
                "es": "¿Puede una ficha normal en damas moverse hacia atrás?",
                "de": "Kann ein normaler Stein beim Damespiel rückwärts ziehen?",
                "nl": "Kan een gewoon stuk bij dammen achteruit bewegen?"
            },
            "options": [
                {
                    "en": "No, only forward",
                    "es": "No, solo hacia adelante",
                    "de": "Nein, nur vorwärts",
                    "nl": "Nee, alleen vooruit"
                },
                {
                    "en": "Yes, always",
                    "es": "Sí, siempre",
                    "de": "Ja, immer",
                    "nl": "Ja, altijd"
                },
                {
                    "en": "Only after a capture",
                    "es": "Solo después de capturar",
                    "de": "Nur nach einem Schlag",
                    "nl": "Alleen na een slag"
                },
                {
                    "en": "Only on the edges",
                    "es": "Solo en los bordes",
                    "de": "Nur am Rand",
                    "nl": "Alleen aan de randen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In standard checkers, regular pieces can only move forward diagonally. Only kings can move backward.",
                "es": "En damas estándar, las fichas normales solo pueden moverse en diagonal hacia adelante. Solo las damas pueden retroceder.",
                "de": "Beim Standard-Damespiel können normale Steine nur vorwärts diagonal ziehen. Nur Damen können rückwärts ziehen.",
                "nl": "Bij standaard dammen kunnen gewone stukken alleen diagonaal vooruit bewegen. Alleen dammen kunnen achteruit."
            }
        },
        {
            "question": {
                "en": "What shape is a standard checkers piece?",
                "es": "¿Qué forma tiene una ficha de damas estándar?",
                "de": "Welche Form hat ein Standard-Damestein?",
                "nl": "Welke vorm heeft een standaard damstuk?"
            },
            "options": [
                {
                    "en": "Round and flat",
                    "es": "Redonda y plana",
                    "de": "Rund und flach",
                    "nl": "Rond en plat"
                },
                {
                    "en": "Square",
                    "es": "Cuadrada",
                    "de": "Quadratisch",
                    "nl": "Vierkant"
                },
                {
                    "en": "Tall like chess pieces",
                    "es": "Alta como piezas de ajedrez",
                    "de": "Hoch wie Schachfiguren",
                    "nl": "Hoog zoals schaakstukken"
                },
                {
                    "en": "Triangular",
                    "es": "Triangular",
                    "de": "Dreieckig",
                    "nl": "Driehoekig"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Standard checkers pieces are round, flat discs that can be stacked when a piece becomes a king.",
                "es": "Las fichas de damas estándar son discos redondos y planos que se apilan cuando se coronan.",
                "de": "Standard-Damesteine sind runde, flache Scheiben, die gestapelt werden wenn sie Damen werden.",
                "nl": "Standaard damstukken zijn ronde, platte schijven die gestapeld worden bij het kronen."
            }
        },
        {
            "question": {
                "en": "How many rows of pieces does each player set up?",
                "es": "¿Cuántas filas de fichas coloca cada jugador?",
                "de": "Wie viele Reihen Steine stellt jeder Spieler auf?",
                "nl": "Hoeveel rijen stukken plaatst elke speler?"
            },
            "options": [
                {
                    "en": "3 rows",
                    "es": "3 filas",
                    "de": "3 Reihen",
                    "nl": "3 rijen"
                },
                {
                    "en": "2 rows",
                    "es": "2 filas",
                    "de": "2 Reihen",
                    "nl": "2 rijen"
                },
                {
                    "en": "4 rows",
                    "es": "4 filas",
                    "de": "4 Reihen",
                    "nl": "4 rijen"
                },
                {
                    "en": "1 row",
                    "es": "1 fila",
                    "de": "1 Reihe",
                    "nl": "1 rij"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player sets up their 12 pieces on the dark squares of the three rows closest to them.",
                "es": "Cada jugador coloca sus 12 fichas en las casillas oscuras de las tres filas más cercanas.",
                "de": "Jeder Spieler stellt seine 12 Steine auf die dunklen Felder der drei nächsten Reihen.",
                "nl": "Elke speler plaatst 12 stukken op de donkere vakjes van de drie dichtstbijzijnde rijen."
            }
        },
        {
            "question": {
                "en": "What happens when you reach the opponent's back row?",
                "es": "¿Qué pasa cuando llegas a la última fila del oponente?",
                "de": "Was passiert wenn man die letzte Reihe erreicht?",
                "nl": "Wat gebeurt er als je de achterste rij bereikt?"
            },
            "options": [
                {
                    "en": "Your piece becomes a king",
                    "es": "Tu ficha se convierte en dama",
                    "de": "Dein Stein wird zur Dame",
                    "nl": "Je stuk wordt een dam"
                },
                {
                    "en": "You win the game",
                    "es": "Ganas el juego",
                    "de": "Du gewinnst das Spiel",
                    "nl": "Je wint het spel"
                },
                {
                    "en": "The piece is removed",
                    "es": "La ficha se retira",
                    "de": "Der Stein wird entfernt",
                    "nl": "Het stuk wordt verwijderd"
                },
                {
                    "en": "Nothing special",
                    "es": "Nada especial",
                    "de": "Nichts Besonderes",
                    "nl": "Niets bijzonders"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When a piece reaches the opponent's back row, it becomes a king and is crowned by stacking another piece on top.",
                "es": "Cuando una ficha llega a la última fila del oponente, se convierte en dama y se corona apilando otra ficha.",
                "de": "Wenn ein Stein die letzte Reihe erreicht, wird er zur Dame und wird gekrönt.",
                "nl": "Wanneer een stuk de achterste rij bereikt, wordt het een dam en wordt het gekroond."
            }
        },
        {
            "question": {
                "en": "Which direction do pieces move in checkers?",
                "es": "¿En qué dirección se mueven las fichas en damas?",
                "de": "In welche Richtung bewegen sich Steine beim Damespiel?",
                "nl": "In welke richting bewegen stukken bij dammen?"
            },
            "options": [
                {
                    "en": "Diagonally",
                    "es": "En diagonal",
                    "de": "Diagonal",
                    "nl": "Diagonaal"
                },
                {
                    "en": "Straight ahead",
                    "es": "Recto hacia adelante",
                    "de": "Gerade nach vorne",
                    "nl": "Recht vooruit"
                },
                {
                    "en": "In any direction",
                    "es": "En cualquier dirección",
                    "de": "In jede Richtung",
                    "nl": "In elke richting"
                },
                {
                    "en": "Sideways",
                    "es": "De lado",
                    "de": "Seitwärts",
                    "nl": "Zijwaarts"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Checkers pieces always move diagonally, one square at a time for regular pieces.",
                "es": "Las fichas de damas siempre se mueven en diagonal, una casilla a la vez para fichas normales.",
                "de": "Damesteine bewegen sich immer diagonal, ein Feld pro Zug für normale Steine.",
                "nl": "Damstukken bewegen altijd diagonaal, één vakje per keer voor gewone stukken."
            }
        },
        {
            "question": {
                "en": "How do you capture a piece in checkers?",
                "es": "¿Cómo capturas una ficha en damas?",
                "de": "Wie schlägt man einen Stein beim Damespiel?",
                "nl": "Hoe sla je een stuk bij dammen?"
            },
            "options": [
                {
                    "en": "Jump over it diagonally",
                    "es": "Saltando sobre ella en diagonal",
                    "de": "Diagonal darüber springen",
                    "nl": "Er diagonaal overheen springen"
                },
                {
                    "en": "Land on it",
                    "es": "Aterrizar sobre ella",
                    "de": "Darauf landen",
                    "nl": "Erop landen"
                },
                {
                    "en": "Move next to it",
                    "es": "Moverse al lado",
                    "de": "Daneben ziehen",
                    "nl": "Ernaast gaan staan"
                },
                {
                    "en": "Push it off the board",
                    "es": "Empujarla fuera del tablero",
                    "de": "Vom Brett schieben",
                    "nl": "Van het bord duwen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You capture an opponent's piece by jumping over it diagonally to an empty square on the other side.",
                "es": "Capturas una ficha del oponente saltando sobre ella diagonalmente a una casilla vacía al otro lado.",
                "de": "Man schlägt einen gegnerischen Stein indem man diagonal darüber auf ein leeres Feld springt.",
                "nl": "Je slaat een stuk door er diagonaal overheen te springen naar een leeg vakje aan de andere kant."
            }
        },
        {
            "question": {
                "en": "How many dark squares are on a checkers board?",
                "es": "¿Cuántas casillas oscuras hay en un tablero de damas?",
                "de": "Wie viele dunkle Felder hat ein Damebrett?",
                "nl": "Hoeveel donkere vakjes heeft een dambord?"
            },
            "options": [
                {
                    "en": "32",
                    "es": "32",
                    "de": "32",
                    "nl": "32"
                },
                {
                    "en": "64",
                    "es": "64",
                    "de": "64",
                    "nl": "64"
                },
                {
                    "en": "24",
                    "es": "24",
                    "de": "24",
                    "nl": "24"
                },
                {
                    "en": "48",
                    "es": "48",
                    "de": "48",
                    "nl": "48"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A checkers board has 32 dark squares and 32 light squares, arranged in an alternating pattern.",
                "es": "Un tablero de damas tiene 32 casillas oscuras y 32 claras en un patrón alternado.",
                "de": "Ein Damebrett hat 32 dunkle und 32 helle Felder in einem abwechselnden Muster.",
                "nl": "Een dambord heeft 32 donkere en 32 lichte vakjes in een afwisselend patroon."
            }
        },
        {
            "question": {
                "en": "Is checkers played by two or four players?",
                "es": "¿Se juega a damas con dos o cuatro jugadores?",
                "de": "Wird Dame mit zwei oder vier Spielern gespielt?",
                "nl": "Wordt dammen met twee of vier spelers gespeeld?"
            },
            "options": [
                {
                    "en": "Two players",
                    "es": "Dos jugadores",
                    "de": "Zwei Spieler",
                    "nl": "Twee spelers"
                },
                {
                    "en": "Four players",
                    "es": "Cuatro jugadores",
                    "de": "Vier Spieler",
                    "nl": "Vier spelers"
                },
                {
                    "en": "Three players",
                    "es": "Tres jugadores",
                    "de": "Drei Spieler",
                    "nl": "Drie spelers"
                },
                {
                    "en": "One player",
                    "es": "Un jugador",
                    "de": "Ein Spieler",
                    "nl": "Eén speler"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Checkers is a two-player game where each player controls pieces of one color.",
                "es": "Damas es un juego para dos jugadores donde cada uno controla fichas de un color.",
                "de": "Dame ist ein Zwei-Spieler-Spiel, bei dem jeder Spieler Steine einer Farbe kontrolliert.",
                "nl": "Dammen is een tweepersoonsspel waarbij elke speler stukken van één kleur bestuurt."
            }
        },
        {
            "question": {
                "en": "What are the two colors of pieces in checkers?",
                "es": "¿Cuáles son los dos colores de fichas en damas?",
                "de": "Welche zwei Farben haben die Steine beim Damespiel?",
                "nl": "Welke twee kleuren stukken zijn er bij dammen?"
            },
            "options": [
                {
                    "en": "Black and red (or white)",
                    "es": "Negro y rojo (o blanco)",
                    "de": "Schwarz und rot (oder weiß)",
                    "nl": "Zwart en rood (of wit)"
                },
                {
                    "en": "Blue and green",
                    "es": "Azul y verde",
                    "de": "Blau und grün",
                    "nl": "Blauw en groen"
                },
                {
                    "en": "Yellow and purple",
                    "es": "Amarillo y morado",
                    "de": "Gelb und lila",
                    "nl": "Geel en paars"
                },
                {
                    "en": "Orange and pink",
                    "es": "Naranja y rosa",
                    "de": "Orange und rosa",
                    "nl": "Oranje en roze"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Traditional checkers uses black and red pieces, though some sets use black and white instead.",
                "es": "Las damas tradicionales usan fichas negras y rojas, aunque algunos juegos usan blanco y negro.",
                "de": "Traditionelles Dame verwendet schwarze und rote Steine, manche Sets schwarz und weiß.",
                "nl": "Traditioneel dammen gebruikt zwarte en rode stukken, sommige sets gebruiken zwart en wit."
            }
        },
        {
            "question": {
                "en": "Who makes the first move in checkers?",
                "es": "¿Quién hace el primer movimiento en damas?",
                "de": "Wer macht den ersten Zug beim Damespiel?",
                "nl": "Wie doet de eerste zet bij dammen?"
            },
            "options": [
                {
                    "en": "The player with dark pieces",
                    "es": "El jugador con fichas oscuras",
                    "de": "Der Spieler mit dunklen Steinen",
                    "nl": "De speler met donkere stukken"
                },
                {
                    "en": "The player with light pieces",
                    "es": "El jugador con fichas claras",
                    "de": "Der Spieler mit hellen Steinen",
                    "nl": "De speler met lichte stukken"
                },
                {
                    "en": "The youngest player",
                    "es": "El jugador más joven",
                    "de": "Der jüngste Spieler",
                    "nl": "De jongste speler"
                },
                {
                    "en": "A coin toss decides",
                    "es": "Se decide con moneda",
                    "de": "Ein Münzwurf entscheidet",
                    "nl": "Een munt bepaalt het"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In standard checkers, the player with the darker colored pieces moves first.",
                "es": "En damas estándar, el jugador con las fichas más oscuras mueve primero.",
                "de": "Beim Standard-Damespiel zieht der Spieler mit den dunkleren Steinen zuerst.",
                "nl": "Bij standaard dammen begint de speler met de donkere stukken."
            }
        },
        {
            "question": {
                "en": "Can you move a piece to a light-colored square?",
                "es": "¿Puedes mover una ficha a una casilla clara?",
                "de": "Kann man einen Stein auf ein helles Feld ziehen?",
                "nl": "Kun je een stuk op een licht vakje plaatsen?"
            },
            "options": [
                {
                    "en": "No, only dark squares",
                    "es": "No, solo casillas oscuras",
                    "de": "Nein, nur dunkle Felder",
                    "nl": "Nee, alleen donkere vakjes"
                },
                {
                    "en": "Yes, anytime",
                    "es": "Sí, en cualquier momento",
                    "de": "Ja, jederzeit",
                    "nl": "Ja, altijd"
                },
                {
                    "en": "Only with a king",
                    "es": "Solo con una dama",
                    "de": "Nur mit einer Dame",
                    "nl": "Alleen met een dam"
                },
                {
                    "en": "Only when capturing",
                    "es": "Solo al capturar",
                    "de": "Nur beim Schlagen",
                    "nl": "Alleen bij het slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Checkers is played entirely on the dark squares. Pieces never occupy light-colored squares.",
                "es": "Las damas se juegan solo en casillas oscuras. Las fichas nunca ocupan casillas claras.",
                "de": "Dame wird nur auf dunklen Feldern gespielt. Steine stehen nie auf hellen Feldern.",
                "nl": "Dammen wordt alleen op donkere vakjes gespeeld. Stukken staan nooit op lichte vakjes."
            }
        },
        {
            "question": {
                "en": "How many squares can a regular piece move at once?",
                "es": "¿Cuántas casillas puede mover una ficha normal a la vez?",
                "de": "Wie viele Felder kann ein normaler Stein auf einmal ziehen?",
                "nl": "Hoeveel vakjes kan een gewoon stuk per keer bewegen?"
            },
            "options": [
                {
                    "en": "One square",
                    "es": "Una casilla",
                    "de": "Ein Feld",
                    "nl": "Eén vakje"
                },
                {
                    "en": "Two squares",
                    "es": "Dos casillas",
                    "de": "Zwei Felder",
                    "nl": "Twee vakjes"
                },
                {
                    "en": "Three squares",
                    "es": "Tres casillas",
                    "de": "Drei Felder",
                    "nl": "Drie vakjes"
                },
                {
                    "en": "Unlimited squares",
                    "es": "Casillas ilimitadas",
                    "de": "Unbegrenzte Felder",
                    "nl": "Onbeperkt vakjes"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A regular checkers piece moves one square diagonally forward per turn, unless capturing.",
                "es": "Una ficha normal se mueve una casilla en diagonal hacia adelante por turno, salvo al capturar.",
                "de": "Ein normaler Stein zieht ein Feld diagonal vorwärts pro Zug, außer beim Schlagen.",
                "nl": "Een gewoon stuk beweegt één vakje diagonaal vooruit per beurt, behalve bij het slaan."
            }
        },
        {
            "question": {
                "en": "What is the goal of checkers?",
                "es": "¿Cuál es el objetivo de las damas?",
                "de": "Was ist das Ziel beim Damespiel?",
                "nl": "Wat is het doel van dammen?"
            },
            "options": [
                {
                    "en": "Capture all opponent's pieces or block them",
                    "es": "Capturar todas las fichas del oponente o bloquearlas",
                    "de": "Alle gegnerischen Steine schlagen oder blockieren",
                    "nl": "Alle stukken van de tegenstander slaan of blokkeren"
                },
                {
                    "en": "Get one piece to the other side",
                    "es": "Llevar una ficha al otro lado",
                    "de": "Einen Stein zur anderen Seite bringen",
                    "nl": "Eén stuk naar de andere kant brengen"
                },
                {
                    "en": "Collect the most squares",
                    "es": "Recoger la mayor cantidad de casillas",
                    "de": "Die meisten Felder sammeln",
                    "nl": "De meeste vakjes verzamelen"
                },
                {
                    "en": "Build a wall of pieces",
                    "es": "Construir un muro de fichas",
                    "de": "Eine Mauer aus Steinen bauen",
                    "nl": "Een muur van stukken bouwen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "You win by capturing all opponent's pieces or blocking them so they cannot make any legal move.",
                "es": "Ganas capturando todas las fichas del oponente o bloqueándolas para que no puedan moverse.",
                "de": "Man gewinnt indem man alle Steine schlägt oder blockiert, sodass kein Zug möglich ist.",
                "nl": "Je wint door alle stukken te slaan of te blokkeren zodat de tegenstander geen zet kan doen."
            }
        },
        {
            "question": {
                "en": "What is another name for checkers?",
                "es": "¿Cuál es otro nombre para las damas?",
                "de": "Wie wird Dame noch genannt?",
                "nl": "Hoe wordt dammen ook wel genoemd?"
            },
            "options": [
                {
                    "en": "Draughts",
                    "es": "Draughts",
                    "de": "Draughts",
                    "nl": "Draughts"
                },
                {
                    "en": "Pawns",
                    "es": "Peones",
                    "de": "Bauern",
                    "nl": "Pionnen"
                },
                {
                    "en": "Squares",
                    "es": "Cuadros",
                    "de": "Quadrate",
                    "nl": "Vierkanten"
                },
                {
                    "en": "Crosses",
                    "es": "Cruces",
                    "de": "Kreuze",
                    "nl": "Kruisen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Checkers is also known as draughts, especially in British English and many other countries.",
                "es": "Las damas también se conocen como draughts, especialmente en inglés británico.",
                "de": "Dame wird auch Draughts genannt, besonders im britischen Englisch.",
                "nl": "Dammen wordt ook wel draughts genoemd, vooral in het Brits Engels."
            }
        },
        {
            "question": {
                "en": "Are kings marked by stacking pieces in checkers?",
                "es": "¿Se marcan las damas apilando fichas?",
                "de": "Werden Damen durch Stapeln von Steinen markiert?",
                "nl": "Worden dammen gemarkeerd door stukken te stapelen?"
            },
            "options": [
                {
                    "en": "Yes, by placing a second piece on top",
                    "es": "Sí, colocando una segunda ficha encima",
                    "de": "Ja, indem man einen zweiten Stein drauflegt",
                    "nl": "Ja, door een tweede stuk erop te plaatsen"
                },
                {
                    "en": "No, they use a different piece",
                    "es": "No, usan una ficha diferente",
                    "de": "Nein, man benutzt ein anderes Stück",
                    "nl": "Nee, er wordt een ander stuk gebruikt"
                },
                {
                    "en": "They are flipped upside down",
                    "es": "Se voltean boca abajo",
                    "de": "Sie werden umgedreht",
                    "nl": "Ze worden omgedraaid"
                },
                {
                    "en": "They stay the same",
                    "es": "Se quedan igual",
                    "de": "Sie bleiben gleich",
                    "nl": "Ze blijven hetzelfde"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When a piece is kinged, a captured piece of the same color is placed on top to show it is now a king.",
                "es": "Cuando se corona una ficha, se coloca otra ficha del mismo color encima para indicar que es dama.",
                "de": "Wenn ein Stein gekrönt wird, wird ein Stein gleicher Farbe darauf gelegt um die Dame zu zeigen.",
                "nl": "Wanneer een stuk gekroond wordt, wordt een tweede stuk erop geplaatst om aan te geven dat het een dam is."
            }
        },
        {
            "question": {
                "en": "How many total pieces are in a checkers game?",
                "es": "¿Cuántas fichas hay en total en un juego de damas?",
                "de": "Wie viele Steine gibt es insgesamt beim Damespiel?",
                "nl": "Hoeveel stukken zijn er in totaal bij een damspel?"
            },
            "options": [
                {
                    "en": "24",
                    "es": "24",
                    "de": "24",
                    "nl": "24"
                },
                {
                    "en": "32",
                    "es": "32",
                    "de": "32",
                    "nl": "32"
                },
                {
                    "en": "20",
                    "es": "20",
                    "de": "20",
                    "nl": "20"
                },
                {
                    "en": "16",
                    "es": "16",
                    "de": "16",
                    "nl": "16"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A checkers game starts with 24 pieces total: 12 for each player.",
                "es": "Un juego de damas comienza con 24 fichas en total: 12 para cada jugador.",
                "de": "Ein Damespiel beginnt mit 24 Steinen: 12 für jeden Spieler.",
                "nl": "Een damspel begint met 24 stukken in totaal: 12 voor elke speler."
            }
        },
        {
            "question": {
                "en": "Can two pieces occupy the same square?",
                "es": "¿Pueden dos fichas ocupar la misma casilla?",
                "de": "Können zwei Steine auf dem gleichen Feld stehen?",
                "nl": "Kunnen twee stukken op hetzelfde vakje staan?"
            },
            "options": [
                {
                    "en": "No, each square holds one piece",
                    "es": "No, cada casilla tiene una ficha",
                    "de": "Nein, jedes Feld hat nur einen Stein",
                    "nl": "Nee, elk vakje heeft één stuk"
                },
                {
                    "en": "Yes, always",
                    "es": "Sí, siempre",
                    "de": "Ja, immer",
                    "nl": "Ja, altijd"
                },
                {
                    "en": "Only during captures",
                    "es": "Solo durante capturas",
                    "de": "Nur beim Schlagen",
                    "nl": "Alleen bij het slaan"
                },
                {
                    "en": "Only for kings",
                    "es": "Solo para damas",
                    "de": "Nur für Damen",
                    "nl": "Alleen voor dammen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Only one piece can occupy a square at any time in checkers. Kings are stacked but count as one piece.",
                "es": "Solo una ficha puede ocupar una casilla en damas. Las damas se apilan pero cuentan como una.",
                "de": "Nur ein Stein kann ein Feld belegen. Damen werden gestapelt, zählen aber als ein Stein.",
                "nl": "Slechts één stuk kan een vakje bezetten. Dammen worden gestapeld maar tellen als één stuk."
            }
        },
        {
            "question": {
                "en": "Is checkers one of the oldest board games?",
                "es": "¿Es las damas uno de los juegos de mesa más antiguos?",
                "de": "Ist Dame eines der ältesten Brettspiele?",
                "nl": "Is dammen een van de oudste bordspellen?"
            },
            "options": [
                {
                    "en": "Yes, it dates back thousands of years",
                    "es": "Sí, data de miles de años",
                    "de": "Ja, es ist Tausende von Jahren alt",
                    "nl": "Ja, het is duizenden jaren oud"
                },
                {
                    "en": "No, it was invented in the 1900s",
                    "es": "No, se inventó en los 1900",
                    "de": "Nein, es wurde in den 1900ern erfunden",
                    "nl": "Nee, het is in de jaren 1900 uitgevonden"
                },
                {
                    "en": "It is about 100 years old",
                    "es": "Tiene unos 100 años",
                    "de": "Es ist etwa 100 Jahre alt",
                    "nl": "Het is ongeveer 100 jaar oud"
                },
                {
                    "en": "Nobody knows its age",
                    "es": "Nadie conoce su edad",
                    "de": "Niemand kennt sein Alter",
                    "nl": "Niemand weet hoe oud het is"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Checkers is one of the world's oldest games. A similar game was played in ancient Egypt around 3000 BC.",
                "es": "Las damas es uno de los juegos más antiguos. Un juego similar se jugaba en el antiguo Egipto hacia 3000 a.C.",
                "de": "Dame ist eines der ältesten Spiele. Ein ähnliches Spiel wurde im alten Ägypten um 3000 v. Chr. gespielt.",
                "nl": "Dammen is een van de oudste spellen. Een vergelijkbaar spel werd gespeeld in het oude Egypte rond 3000 v.Chr."
            }
        }
    ]
};
