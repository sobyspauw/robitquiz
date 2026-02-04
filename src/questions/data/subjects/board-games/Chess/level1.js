module.exports = {
  questions: [
    {
      "question": {
        "en": "How many squares are on a standard chessboard?",
        "es": "¿Cuántos cuadrados hay en un tablero de ajedrez estándar?",
        "de": "Wie viele Felder hat ein Standard-Schachbrett?",
        "nl": "Hoeveel velden zijn er op een standaard schaakbord?"
      },
      "options": [
        {"en": "64", "es": "64", "de": "64", "nl": "64"},
        {"en": "32", "es": "32", "de": "32", "nl": "32"},
        {"en": "81", "es": "81", "de": "81", "nl": "81"},
        {"en": "100", "es": "100", "de": "100", "nl": "100"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A standard chessboard has 64 squares arranged in an 8x8 grid.",
        "es": "Un tablero de ajedrez estándar tiene 64 cuadrados en una cuadrícula de 8x8.",
        "de": "Ein Standard-Schachbrett hat 64 Felder in einem 8x8-Gitter.",
        "nl": "Een standaard schaakbord heeft 64 velden in een 8x8 raster."
      }
    },
    {
      "question": {
        "en": "How many pieces does each player start with in chess?",
        "es": "¿Con cuántas piezas comienza cada jugador en el ajedrez?",
        "de": "Mit wie vielen Figuren beginnt jeder Spieler im Schach?",
        "nl": "Met hoeveel stukken begint elke speler bij schaken?"
      },
      "options": [
        {"en": "16", "es": "16", "de": "16", "nl": "16"},
        {"en": "12", "es": "12", "de": "12", "nl": "12"},
        {"en": "20", "es": "20", "de": "20", "nl": "20"},
        {"en": "8", "es": "8", "de": "8", "nl": "8"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Each player starts with 16 pieces: 1 king, 1 queen, 2 rooks, 2 bishops, 2 knights, and 8 pawns.",
        "es": "Cada jugador comienza con 16 piezas: 1 rey, 1 reina, 2 torres, 2 alfiles, 2 caballos y 8 peones.",
        "de": "Jeder Spieler beginnt mit 16 Figuren: 1 König, 1 Dame, 2 Türme, 2 Läufer, 2 Springer und 8 Bauern.",
        "nl": "Elke speler begint met 16 stukken: 1 koning, 1 dame, 2 torens, 2 lopers, 2 paarden en 8 pionnen."
      }
    },
    {
      "question": {
        "en": "Which piece can only move diagonally?",
        "es": "¿Qué pieza solo puede moverse en diagonal?",
        "de": "Welche Figur kann sich nur diagonal bewegen?",
        "nl": "Welk stuk kan alleen diagonaal bewegen?"
      },
      "options": [
        {"en": "Bishop", "es": "Alfil", "de": "Läufer", "nl": "Loper"},
        {"en": "Knight", "es": "Caballo", "de": "Springer", "nl": "Paard"},
        {"en": "Rook", "es": "Torre", "de": "Turm", "nl": "Toren"},
        {"en": "Pawn", "es": "Peón", "de": "Bauer", "nl": "Pion"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The bishop can only move diagonally across the board, any number of squares.",
        "es": "El alfil solo puede moverse diagonalmente por el tablero, cualquier número de cuadrados.",
        "de": "Der Läufer kann sich nur diagonal über das Brett bewegen, beliebig viele Felder.",
        "nl": "De loper kan alleen diagonaal over het bord bewegen, een willekeurig aantal velden."
      }
    },
    {
      "question": {
        "en": "What is the most powerful piece in chess?",
        "es": "¿Cuál es la pieza más poderosa en el ajedrez?",
        "de": "Was ist die mächtigste Figur im Schach?",
        "nl": "Wat is het krachtigste stuk bij schaken?"
      },
      "options": [
        {"en": "Queen", "es": "Reina", "de": "Dame", "nl": "Dame"},
        {"en": "King", "es": "Rey", "de": "König", "nl": "Koning"},
        {"en": "Rook", "es": "Torre", "de": "Turm", "nl": "Toren"},
        {"en": "Knight", "es": "Caballo", "de": "Springer", "nl": "Paard"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The queen is the most powerful piece as it can move any number of squares horizontally, vertically, or diagonally.",
        "es": "La reina es la pieza más poderosa ya que puede moverse cualquier número de cuadrados horizontal, vertical o diagonalmente.",
        "de": "Die Dame ist die mächtigste Figur, da sie beliebig viele Felder horizontal, vertikal oder diagonal ziehen kann.",
        "nl": "De dame is het krachtigste stuk omdat ze een willekeurig aantal velden horizontaal, verticaal of diagonaal kan bewegen."
      }
    },
    {
      "question": {
        "en": "Which piece moves in an L-shape?",
        "es": "¿Qué pieza se mueve en forma de L?",
        "de": "Welche Figur bewegt sich in L-Form?",
        "nl": "Welk stuk beweegt in een L-vorm?"
      },
      "options": [
        {"en": "Knight", "es": "Caballo", "de": "Springer", "nl": "Paard"},
        {"en": "Bishop", "es": "Alfil", "de": "Läufer", "nl": "Loper"},
        {"en": "Pawn", "es": "Peón", "de": "Bauer", "nl": "Pion"},
        {"en": "Queen", "es": "Reina", "de": "Dame", "nl": "Dame"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The knight is unique in chess as it moves in an L-shape: two squares in one direction and one square perpendicular.",
        "es": "El caballo es único en el ajedrez ya que se mueve en forma de L: dos cuadrados en una dirección y uno perpendicular.",
        "de": "Der Springer ist einzigartig im Schach, da er sich in L-Form bewegt: zwei Felder in eine Richtung und ein Feld senkrecht.",
        "nl": "Het paard is uniek in het schaken omdat het in een L-vorm beweegt: twee velden in één richting en één veld loodrecht."
      }
    },
    {
      "question": {
        "en": "What is it called when the king is under direct attack?",
        "es": "¿Cómo se llama cuando el rey está bajo ataque directo?",
        "de": "Wie nennt man es, wenn der König direkt angegriffen wird?",
        "nl": "Hoe heet het wanneer de koning onder directe aanval staat?"
      },
      "options": [
        {"en": "Check", "es": "Jaque", "de": "Schach", "nl": "Schaak"},
        {"en": "Checkmate", "es": "Jaque mate", "de": "Schachmatt", "nl": "Schaakmat"},
        {"en": "Stalemate", "es": "Tablas", "de": "Patt", "nl": "Pat"},
        {"en": "Capture", "es": "Captura", "de": "Schlagen", "nl": "Slaan"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Check is when the king is under direct attack but can still escape. The player must immediately get out of check.",
        "es": "Jaque es cuando el rey está bajo ataque directo pero aún puede escapar. El jugador debe salir inmediatamente del jaque.",
        "de": "Schach ist, wenn der König direkt angegriffen wird, aber noch entkommen kann. Der Spieler muss sofort das Schach abwehren.",
        "nl": "Schaak is wanneer de koning onder directe aanval staat maar nog kan ontsnappen. De speler moet onmiddellijk uit schaak komen."
      }
    },
    {
      "question": {
        "en": "How many pawns does each player have at the start?",
        "es": "¿Cuántos peones tiene cada jugador al inicio?",
        "de": "Wie viele Bauern hat jeder Spieler zu Beginn?",
        "nl": "Hoeveel pionnen heeft elke speler bij het begin?"
      },
      "options": [
        {"en": "8", "es": "8", "de": "8", "nl": "8"},
        {"en": "6", "es": "6", "de": "6", "nl": "6"},
        {"en": "10", "es": "10", "de": "10", "nl": "10"},
        {"en": "4", "es": "4", "de": "4", "nl": "4"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Each player starts with 8 pawns, placed on the second rank (row) of their side of the board.",
        "es": "Cada jugador comienza con 8 peones, colocados en la segunda fila de su lado del tablero.",
        "de": "Jeder Spieler beginnt mit 8 Bauern, die auf der zweiten Reihe seiner Seite des Bretts platziert sind.",
        "nl": "Elke speler begint met 8 pionnen, geplaatst op de tweede rij van hun kant van het bord."
      }
    },
    {
      "question": {
        "en": "Which piece can't move backwards?",
        "es": "¿Qué pieza no puede moverse hacia atrás?",
        "de": "Welche Figur kann sich nicht rückwärts bewegen?",
        "nl": "Welk stuk kan niet achteruit bewegen?"
      },
      "options": [
        {"en": "Pawn", "es": "Peón", "de": "Bauer", "nl": "Pion"},
        {"en": "Knight", "es": "Caballo", "de": "Springer", "nl": "Paard"},
        {"en": "Bishop", "es": "Alfil", "de": "Läufer", "nl": "Loper"},
        {"en": "Rook", "es": "Torre", "de": "Turm", "nl": "Toren"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Pawns are the only pieces that cannot move backwards. They can only move forward.",
        "es": "Los peones son las únicas piezas que no pueden moverse hacia atrás. Solo pueden avanzar.",
        "de": "Bauern sind die einzigen Figuren, die sich nicht rückwärts bewegen können. Sie können nur vorwärts ziehen.",
        "nl": "Pionnen zijn de enige stukken die niet achteruit kunnen bewegen. Ze kunnen alleen vooruit."
      }
    },
    {
      "question": {
        "en": "What color always moves first in chess?",
        "es": "¿Qué color siempre mueve primero en el ajedrez?",
        "de": "Welche Farbe zieht im Schach immer zuerst?",
        "nl": "Welke kleur zet altijd eerst bij schaken?"
      },
      "options": [
        {"en": "White", "es": "Blanco", "de": "Weiß", "nl": "Wit"},
        {"en": "Black", "es": "Negro", "de": "Schwarz", "nl": "Zwart"},
        {"en": "Random choice", "es": "Elección aleatoria", "de": "Zufällige Wahl", "nl": "Willekeurige keuze"},
        {"en": "Winner of last game", "es": "Ganador del último juego", "de": "Gewinner des letzten Spiels", "nl": "Winnaar van vorige partij"}
      ],
      "correct": 0,
      "explanation": {
        "en": "White always moves first in chess. This is a standard rule in all official chess games.",
        "es": "El blanco siempre mueve primero en el ajedrez. Esta es una regla estándar en todos los juegos oficiales.",
        "de": "Weiß zieht im Schach immer zuerst. Dies ist eine Standardregel in allen offiziellen Schachspielen.",
        "nl": "Wit zet altijd eerst bij schaken. Dit is een standaardregel in alle officiële schaakpartijen."
      }
    },
    {
      "question": {
        "en": "What happens when a pawn reaches the opposite end of the board?",
        "es": "¿Qué sucede cuando un peón llega al extremo opuesto del tablero?",
        "de": "Was passiert, wenn ein Bauer das gegenüberliegende Ende des Bretts erreicht?",
        "nl": "Wat gebeurt er als een pion de overkant van het bord bereikt?"
      },
      "options": [
        {"en": "It can be promoted to any piece except a king", "es": "Puede ser promovido a cualquier pieza excepto un rey", "de": "Er kann in jede Figur außer dem König umgewandelt werden", "nl": "Hij kan gepromoveerd worden tot elk stuk behalve een koning"},
        {"en": "It wins the game", "es": "Gana el juego", "de": "Es gewinnt das Spiel", "nl": "Het wint het spel"},
        {"en": "It must stay there", "es": "Debe quedarse allí", "de": "Er muss dort bleiben", "nl": "Hij moet daar blijven"},
        {"en": "It is removed from the board", "es": "Se retira del tablero", "de": "Er wird vom Brett entfernt", "nl": "Hij wordt van het bord verwijderd"}
      ],
      "correct": 0,
      "explanation": {
        "en": "When a pawn reaches the opposite end, it must be promoted to a queen, rook, bishop, or knight. Most players choose a queen.",
        "es": "Cuando un peón llega al extremo opuesto, debe ser promovido a reina, torre, alfil o caballo. La mayoría elige reina.",
        "de": "Wenn ein Bauer das gegenüberliegende Ende erreicht, muss er in Dame, Turm, Läufer oder Springer umgewandelt werden.",
        "nl": "Als een pion de overkant bereikt, moet hij gepromoveerd worden tot dame, toren, loper of paard. De meeste spelers kiezen dame."
      }
    },
    {
      "question": {
        "en": "What is the term for when neither player can win?",
        "es": "¿Cuál es el término cuando ningún jugador puede ganar?",
        "de": "Wie nennt man es, wenn keiner gewinnen kann?",
        "nl": "Wat is de term als geen van beide spelers kan winnen?"
      },
      "options": [
        {"en": "Draw", "es": "Tablas", "de": "Remis", "nl": "Remise"},
        {"en": "Check", "es": "Jaque", "de": "Schach", "nl": "Schaak"},
        {"en": "Forfeit", "es": "Abandono", "de": "Aufgabe", "nl": "Opgave"},
        {"en": "Time out", "es": "Tiempo agotado", "de": "Zeitüberschreitung", "nl": "Tijd op"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A draw occurs when the game ends without a winner, such as by stalemate, insufficient material, or agreement.",
        "es": "Las tablas ocurren cuando el juego termina sin ganador, como por ahogado, material insuficiente o acuerdo.",
        "de": "Ein Remis tritt auf, wenn das Spiel ohne Sieger endet, z.B. durch Patt, unzureichendes Material oder Vereinbarung.",
        "nl": "Remise treedt op als het spel eindigt zonder winnaar, zoals door pat, onvoldoende materiaal of overeenstemming."
      }
    },
    {
      "question": {
        "en": "How many rooks does each player start with?",
        "es": "¿Con cuántas torres comienza cada jugador?",
        "de": "Mit wie vielen Türmen beginnt jeder Spieler?",
        "nl": "Met hoeveel torens begint elke speler?"
      },
      "options": [
        {"en": "2", "es": "2", "de": "2", "nl": "2"},
        {"en": "1", "es": "1", "de": "1", "nl": "1"},
        {"en": "4", "es": "4", "de": "4", "nl": "4"},
        {"en": "3", "es": "3", "de": "3", "nl": "3"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Each player starts with 2 rooks, positioned in the corners of their first rank.",
        "es": "Cada jugador comienza con 2 torres, ubicadas en las esquinas de su primera fila.",
        "de": "Jeder Spieler beginnt mit 2 Türmen, die in den Ecken der ersten Reihe stehen.",
        "nl": "Elke speler begint met 2 torens, geplaatst in de hoeken van hun eerste rij."
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
        {"en": "A special move involving the king and rook", "es": "Un movimiento especial con el rey y la torre", "de": "Ein Sonderzug mit König und Turm", "nl": "Een speciale zet met koning en toren"},
        {"en": "Promoting a pawn", "es": "Promover un peón", "de": "Einen Bauern umwandeln", "nl": "Een pion promoveren"},
        {"en": "Capturing en passant", "es": "Captura al paso", "de": "En passant schlagen", "nl": "En passant slaan"},
        {"en": "Moving the queen", "es": "Mover la reina", "de": "Die Dame ziehen", "nl": "De dame verplaatsen"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Castling is a special move where the king moves two squares toward a rook, and the rook moves to the other side of the king.",
        "es": "El enroque es un movimiento especial donde el rey se mueve dos casillas hacia una torre, y la torre se mueve al otro lado del rey.",
        "de": "Die Rochade ist ein Sonderzug, bei dem der König zwei Felder auf einen Turm zu zieht und der Turm auf die andere Seite des Königs.",
        "nl": "Rokeren is een speciale zet waarbij de koning twee velden richting een toren beweegt en de toren naar de andere kant van de koning."
      }
    },
    {
      "question": {
        "en": "Which piece is worth approximately 3 points in chess?",
        "es": "¿Qué pieza vale aproximadamente 3 puntos en ajedrez?",
        "de": "Welche Figur ist im Schach etwa 3 Punkte wert?",
        "nl": "Welk stuk is ongeveer 3 punten waard bij schaken?"
      },
      "options": [
        {"en": "Bishop or Knight", "es": "Alfil o Caballo", "de": "Läufer oder Springer", "nl": "Loper of Paard"},
        {"en": "Pawn", "es": "Peón", "de": "Bauer", "nl": "Pion"},
        {"en": "Rook", "es": "Torre", "de": "Turm", "nl": "Toren"},
        {"en": "Queen", "es": "Reina", "de": "Dame", "nl": "Dame"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Bishops and knights are each worth approximately 3 points. Pawns are 1 point, rooks 5 points, and the queen 9 points.",
        "es": "Los alfiles y caballos valen aproximadamente 3 puntos cada uno. Los peones valen 1, las torres 5 y la reina 9 puntos.",
        "de": "Läufer und Springer sind jeweils etwa 3 Punkte wert. Bauern 1 Punkt, Türme 5 Punkte und die Dame 9 Punkte.",
        "nl": "Lopers en paarden zijn elk ongeveer 3 punten waard. Pionnen zijn 1 punt, torens 5 punten en de dame 9 punten."
      }
    },
    {
      "question": {
        "en": "What is checkmate?",
        "es": "¿Qué es jaque mate?",
        "de": "Was ist Schachmatt?",
        "nl": "Wat is schaakmat?"
      },
      "options": [
        {"en": "When the king is in check and cannot escape", "es": "Cuando el rey está en jaque y no puede escapar", "de": "Wenn der König im Schach steht und nicht entkommen kann", "nl": "Als de koning schaak staat en niet kan ontsnappen"},
        {"en": "When you capture the opponent's queen", "es": "Cuando capturas la reina del oponente", "de": "Wenn man die gegnerische Dame schlägt", "nl": "Als je de dame van de tegenstander slaat"},
        {"en": "When time runs out", "es": "Cuando se acaba el tiempo", "de": "Wenn die Zeit abläuft", "nl": "Als de tijd op is"},
        {"en": "When all pawns are promoted", "es": "Cuando todos los peones son promovidos", "de": "Wenn alle Bauern umgewandelt sind", "nl": "Als alle pionnen gepromoveerd zijn"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Checkmate occurs when a king is in check and has no legal move to escape capture. This ends the game immediately.",
        "es": "El jaque mate ocurre cuando un rey está en jaque y no tiene movimiento legal para escapar. Esto termina el juego inmediatamente.",
        "de": "Schachmatt tritt auf, wenn ein König im Schach steht und keinen legalen Zug hat, um der Gefangennahme zu entkommen.",
        "nl": "Schaakmat treedt op als een koning schaak staat en geen legale zet heeft om te ontsnappen. Dit beëindigt het spel onmiddellijk."
      }
    },
    {
      "question": {
        "en": "How does a rook move?",
        "es": "¿Cómo se mueve una torre?",
        "de": "Wie zieht ein Turm?",
        "nl": "Hoe beweegt een toren?"
      },
      "options": [
        {"en": "Horizontally or vertically any number of squares", "es": "Horizontal o verticalmente cualquier número de casillas", "de": "Horizontal oder vertikal beliebig viele Felder", "nl": "Horizontaal of verticaal een willekeurig aantal velden"},
        {"en": "Diagonally any number of squares", "es": "Diagonalmente cualquier número de casillas", "de": "Diagonal beliebig viele Felder", "nl": "Diagonaal een willekeurig aantal velden"},
        {"en": "In an L-shape", "es": "En forma de L", "de": "In L-Form", "nl": "In een L-vorm"},
        {"en": "One square in any direction", "es": "Una casilla en cualquier dirección", "de": "Ein Feld in jede Richtung", "nl": "Één veld in elke richting"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Rooks move in straight lines horizontally or vertically across any number of unoccupied squares.",
        "es": "Las torres se mueven en líneas rectas horizontal o verticalmente a través de cualquier número de casillas desocupadas.",
        "de": "Türme ziehen in geraden Linien horizontal oder vertikal über beliebig viele unbesetzte Felder.",
        "nl": "Torens bewegen in rechte lijnen horizontaal of verticaal over een willekeurig aantal onbezette velden."
      }
    },
    {
      "question": {
        "en": "What is the starting position of the white king?",
        "es": "¿Cuál es la posición inicial del rey blanco?",
        "de": "Was ist die Anfangsposition des weißen Königs?",
        "nl": "Wat is de startpositie van de witte koning?"
      },
      "options": [
        {"en": "e1", "es": "e1", "de": "e1", "nl": "e1"},
        {"en": "d1", "es": "d1", "de": "d1", "nl": "d1"},
        {"en": "e8", "es": "e8", "de": "e8", "nl": "e8"},
        {"en": "d8", "es": "d8", "de": "d8", "nl": "d8"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The white king starts on e1, while the white queen starts on d1. Remember: queen on her color!",
        "es": "El rey blanco comienza en e1, mientras que la reina blanca comienza en d1. Recuerda: ¡la reina en su color!",
        "de": "Der weiße König startet auf e1, während die weiße Dame auf d1 startet. Merke: Dame auf ihrer Farbe!",
        "nl": "De witte koning start op e1, terwijl de witte dame op d1 start. Onthoud: dame op haar kleur!"
      }
    },
    {
      "question": {
        "en": "What is en passant?",
        "es": "¿Qué es al paso?",
        "de": "Was ist en passant?",
        "nl": "Wat is en passant?"
      },
      "options": [
        {"en": "A special pawn capture move", "es": "Un movimiento especial de captura de peón", "de": "Ein spezieller Bauernschlagzug", "nl": "Een speciale pion slagzet"},
        {"en": "A type of checkmate", "es": "Un tipo de jaque mate", "de": "Eine Art Schachmatt", "nl": "Een soort schaakmat"},
        {"en": "A draw condition", "es": "Una condición de tablas", "de": "Eine Remisbedingung", "nl": "Een remise conditie"},
        {"en": "A knight move", "es": "Un movimiento de caballo", "de": "Ein Springerzug", "nl": "Een paardenzet"}
      ],
      "correct": 0,
      "explanation": {
        "en": "En passant is a special pawn capture that can occur when an enemy pawn moves two squares forward from its starting position.",
        "es": "Al paso es una captura especial de peón que puede ocurrir cuando un peón enemigo avanza dos casillas desde su posición inicial.",
        "de": "En passant ist ein spezieller Bauernschlag, der erfolgen kann, wenn ein gegnerischer Bauer zwei Felder von seiner Startposition vorrückt.",
        "nl": "En passant is een speciale pion slag die kan gebeuren als een vijandelijke pion twee velden vooruit gaat vanaf zijn startpositie."
      }
    },
    {
      "question": {
        "en": "How many bishops does each player start with?",
        "es": "¿Con cuántos alfiles comienza cada jugador?",
        "de": "Mit wie vielen Läufern beginnt jeder Spieler?",
        "nl": "Met hoeveel lopers begint elke speler?"
      },
      "options": [
        {"en": "2", "es": "2", "de": "2", "nl": "2"},
        {"en": "1", "es": "1", "de": "1", "nl": "1"},
        {"en": "3", "es": "3", "de": "3", "nl": "3"},
        {"en": "4", "es": "4", "de": "4", "nl": "4"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Each player starts with 2 bishops: one on a light square and one on a dark square.",
        "es": "Cada jugador comienza con 2 alfiles: uno en una casilla clara y uno en una casilla oscura.",
        "de": "Jeder Spieler beginnt mit 2 Läufern: einer auf einem hellen und einer auf einem dunklen Feld.",
        "nl": "Elke speler begint met 2 lopers: één op een licht veld en één op een donker veld."
      }
    },
    {
      "question": {
        "en": "What is a fork in chess?",
        "es": "¿Qué es una horquilla en ajedrez?",
        "de": "Was ist eine Gabel im Schach?",
        "nl": "Wat is een vork bij schaken?"
      },
      "options": [
        {"en": "Attacking two pieces at once", "es": "Atacar dos piezas a la vez", "de": "Zwei Figuren gleichzeitig angreifen", "nl": "Twee stukken tegelijk aanvallen"},
        {"en": "Promoting a pawn", "es": "Promover un peón", "de": "Einen Bauern umwandeln", "nl": "Een pion promoveren"},
        {"en": "A type of opening", "es": "Un tipo de apertura", "de": "Eine Art Eröffnung", "nl": "Een soort opening"},
        {"en": "Castling queenside", "es": "Enroque largo", "de": "Lange Rochade", "nl": "Lange rokade"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A fork is a tactic where one piece attacks two or more enemy pieces simultaneously.",
        "es": "Una horquilla es una táctica donde una pieza ataca dos o más piezas enemigas simultáneamente.",
        "de": "Eine Gabel ist eine Taktik, bei der eine Figur zwei oder mehr gegnerische Figuren gleichzeitig angreift.",
        "nl": "Een vork is een tactiek waarbij één stuk twee of meer vijandelijke stukken tegelijk aanvalt."
      }
    },
    {
      "question": {
        "en": "What is stalemate?",
        "es": "¿Qué es el ahogado?",
        "de": "Was ist Patt?",
        "nl": "Wat is pat?"
      },
      "options": [
        {"en": "When a player has no legal moves but isn't in check", "es": "Cuando un jugador no tiene movimientos legales pero no está en jaque", "de": "Wenn ein Spieler keine legalen Züge hat, aber nicht im Schach steht", "nl": "Als een speler geen legale zetten heeft maar niet schaak staat"},
        {"en": "When the king is in check", "es": "Cuando el rey está en jaque", "de": "Wenn der König im Schach steht", "nl": "Als de koning schaak staat"},
        {"en": "When you win the game", "es": "Cuando ganas el juego", "de": "Wenn man das Spiel gewinnt", "nl": "Als je het spel wint"},
        {"en": "When time runs out", "es": "Cuando se acaba el tiempo", "de": "Wenn die Zeit abläuft", "nl": "Als de tijd op is"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Stalemate is a draw that occurs when the player whose turn it is has no legal moves and their king is not in check.",
        "es": "El ahogado es un empate que ocurre cuando el jugador al que le toca no tiene movimientos legales y su rey no está en jaque.",
        "de": "Patt ist ein Remis, das eintritt, wenn der Spieler am Zug keine legalen Züge hat und sein König nicht im Schach steht.",
        "nl": "Pat is remise dat optreedt als de speler aan zet geen legale zetten heeft en zijn koning niet schaak staat."
      }
    },
    {
      "question": {
        "en": "How many knights does each player start with?",
        "es": "¿Con cuántos caballos comienza cada jugador?",
        "de": "Mit wie vielen Springern beginnt jeder Spieler?",
        "nl": "Met hoeveel paarden begint elke speler?"
      },
      "options": [
        {"en": "2", "es": "2", "de": "2", "nl": "2"},
        {"en": "1", "es": "1", "de": "1", "nl": "1"},
        {"en": "3", "es": "3", "de": "3", "nl": "3"},
        {"en": "4", "es": "4", "de": "4", "nl": "4"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Each player starts with 2 knights, positioned next to the rooks at the beginning of the game.",
        "es": "Cada jugador comienza con 2 caballos, ubicados junto a las torres al principio del juego.",
        "de": "Jeder Spieler beginnt mit 2 Springern, die zu Beginn des Spiels neben den Türmen stehen.",
        "nl": "Elke speler begint met 2 paarden, geplaatst naast de torens aan het begin van het spel."
      }
    },
    {
      "question": {
        "en": "What is the only piece that can jump over other pieces?",
        "es": "¿Cuál es la única pieza que puede saltar sobre otras piezas?",
        "de": "Welche ist die einzige Figur, die über andere Figuren springen kann?",
        "nl": "Wat is het enige stuk dat over andere stukken kan springen?"
      },
      "options": [
        {"en": "Knight", "es": "Caballo", "de": "Springer", "nl": "Paard"},
        {"en": "Queen", "es": "Reina", "de": "Dame", "nl": "Dame"},
        {"en": "Bishop", "es": "Alfil", "de": "Läufer", "nl": "Loper"},
        {"en": "Rook", "es": "Torre", "de": "Turm", "nl": "Toren"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The knight is the only piece that can jump over other pieces, moving in its characteristic L-shape.",
        "es": "El caballo es la única pieza que puede saltar sobre otras piezas, moviéndose en su característica forma de L.",
        "de": "Der Springer ist die einzige Figur, die über andere Figuren springen kann und sich in seiner charakteristischen L-Form bewegt.",
        "nl": "Het paard is het enige stuk dat over andere stukken kan springen, bewegend in zijn kenmerkende L-vorm."
      }
    },
    {
      "question": {
        "en": "How many queens does each player start with?",
        "es": "¿Con cuántas reinas comienza cada jugador?",
        "de": "Mit wie vielen Damen beginnt jeder Spieler?",
        "nl": "Met hoeveel dames begint elke speler?"
      },
      "options": [
        {"en": "1", "es": "1", "de": "1", "nl": "1"},
        {"en": "2", "es": "2", "de": "2", "nl": "2"},
        {"en": "0", "es": "0", "de": "0", "nl": "0"},
        {"en": "3", "es": "3", "de": "3", "nl": "3"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Each player starts with only 1 queen, the most powerful piece on the board.",
        "es": "Cada jugador comienza con solo 1 reina, la pieza más poderosa del tablero.",
        "de": "Jeder Spieler beginnt mit nur 1 Dame, der mächtigsten Figur auf dem Brett.",
        "nl": "Elke speler begint met slechts 1 dame, het krachtigste stuk op het bord."
      }
    },
    {
      "question": {
        "en": "What is a pin in chess?",
        "es": "¿Qué es una clavada en ajedrez?",
        "de": "Was ist eine Fesselung im Schach?",
        "nl": "Wat is een penning bij schaken?"
      },
      "options": [
        {"en": "When a piece can't move without exposing a more valuable piece", "es": "Cuando una pieza no puede moverse sin exponer una pieza más valiosa", "de": "Wenn eine Figur sich nicht bewegen kann, ohne eine wertvollere Figur preiszugeben", "nl": "Als een stuk niet kan bewegen zonder een waardevoller stuk bloot te geven"},
        {"en": "Capturing two pieces at once", "es": "Capturar dos piezas a la vez", "de": "Zwei Figuren gleichzeitig schlagen", "nl": "Twee stukken tegelijk slaan"},
        {"en": "A type of opening", "es": "Un tipo de apertura", "de": "Eine Art Eröffnung", "nl": "Een soort opening"},
        {"en": "Promoting a pawn", "es": "Promover un peón", "de": "Einen Bauern umwandeln", "nl": "Een pion promoveren"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A pin occurs when a piece cannot move without exposing a more valuable piece (often the king) to attack.",
        "es": "Una clavada ocurre cuando una pieza no puede moverse sin exponer una pieza más valiosa (a menudo el rey) al ataque.",
        "de": "Eine Fesselung tritt auf, wenn eine Figur sich nicht bewegen kann, ohne eine wertvollere Figur (oft den König) einem Angriff auszusetzen.",
        "nl": "Een penning treedt op als een stuk niet kan bewegen zonder een waardevoller stuk (vaak de koning) aan aanval bloot te stellen."
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
        {"en": "A draw can be claimed after 50 moves with no pawn moves or captures", "es": "Se pueden reclamar tablas después de 50 movimientos sin mover peones o capturas", "de": "Remis kann nach 50 Zügen ohne Bauernzüge oder Schlagzüge beansprucht werden", "nl": "Remise kan geclaimd worden na 50 zetten zonder pionzetten of slagen"},
        {"en": "The game ends after 50 moves", "es": "El juego termina después de 50 movimientos", "de": "Das Spiel endet nach 50 Zügen", "nl": "Het spel eindigt na 50 zetten"},
        {"en": "You must move within 50 seconds", "es": "Debes mover dentro de 50 segundos", "de": "Man muss innerhalb von 50 Sekunden ziehen", "nl": "Je moet binnen 50 seconden zetten"},
        {"en": "Each player gets 50 moves total", "es": "Cada jugador tiene 50 movimientos en total", "de": "Jeder Spieler hat insgesamt 50 Züge", "nl": "Elke speler krijgt 50 zetten totaal"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The 50-move rule allows a player to claim a draw if 50 moves have been made by each player with no pawn moves or captures.",
        "es": "La regla de los 50 movimientos permite reclamar tablas si se han hecho 50 movimientos por cada jugador sin mover peones o capturas.",
        "de": "Die 50-Züge-Regel erlaubt es, Remis zu beanspruchen, wenn 50 Züge ohne Bauernzüge oder Schlagzüge gemacht wurden.",
        "nl": "De 50-zetten regel staat toe remise te claimen als 50 zetten zijn gedaan door elke speler zonder pionzetten of slagen."
      }
    },
    {
      "question": {
        "en": "What does 'zugzwang' mean?",
        "es": "¿Qué significa 'zugzwang'?",
        "de": "Was bedeutet 'Zugzwang'?",
        "nl": "Wat betekent 'zugzwang'?"
      },
      "options": [
        {"en": "Being forced to move when any move weakens your position", "es": "Estar obligado a mover cuando cualquier movimiento debilita tu posición", "de": "Gezwungen sein zu ziehen, wenn jeder Zug die Position verschlechtert", "nl": "Gedwongen zijn te zetten terwijl elke zet je positie verzwakt"},
        {"en": "A winning position", "es": "Una posición ganadora", "de": "Eine Gewinnstellung", "nl": "Een winnende positie"},
        {"en": "A type of checkmate", "es": "Un tipo de jaque mate", "de": "Eine Art Schachmatt", "nl": "Een soort schaakmat"},
        {"en": "An opening move", "es": "Un movimiento de apertura", "de": "Ein Eröffnungszug", "nl": "Een openingszet"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Zugzwang is a situation where a player must move but any move will worsen their position.",
        "es": "Zugzwang es una situación donde un jugador debe mover pero cualquier movimiento empeorará su posición.",
        "de": "Zugzwang ist eine Situation, in der ein Spieler ziehen muss, aber jeder Zug seine Position verschlechtert.",
        "nl": "Zugzwang is een situatie waarin een speler moet zetten maar elke zet zijn positie verslechtert."
      }
    },
    {
      "question": {
        "en": "What is the Scholar's Mate?",
        "es": "¿Qué es el mate del pastor?",
        "de": "Was ist das Schäfermatt?",
        "nl": "Wat is het herdersmat?"
      },
      "options": [
        {"en": "A checkmate in 4 moves", "es": "Un jaque mate en 4 movimientos", "de": "Ein Schachmatt in 4 Zügen", "nl": "Een schaakmat in 4 zetten"},
        {"en": "A type of draw", "es": "Un tipo de tablas", "de": "Eine Art Remis", "nl": "Een soort remise"},
        {"en": "An opening system", "es": "Un sistema de apertura", "de": "Ein Eröffnungssystem", "nl": "Een openingssysteem"},
        {"en": "A endgame technique", "es": "Una técnica de final", "de": "Eine Endspiel-Technik", "nl": "Een eindspeltechniek"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Scholar's Mate is a four-move checkmate that targets the weak f7 square early in the game.",
        "es": "El mate del pastor es un jaque mate en cuatro movimientos que ataca el débil cuadrado f7 temprano en el juego.",
        "de": "Das Schäfermatt ist ein Schachmatt in vier Zügen, das früh im Spiel das schwache Feld f7 angreift.",
        "nl": "Herdersmat is een schaakmat in vier zetten die het zwakke f7-veld vroeg in het spel aanvalt."
      }
    },
    {
      "question": {
        "en": "What is the value of a rook in points?",
        "es": "¿Cuál es el valor de una torre en puntos?",
        "de": "Was ist der Wert eines Turms in Punkten?",
        "nl": "Wat is de waarde van een toren in punten?"
      },
      "options": [
        {"en": "5 points", "es": "5 puntos", "de": "5 Punkte", "nl": "5 punten"},
        {"en": "3 points", "es": "3 puntos", "de": "3 Punkte", "nl": "3 punten"},
        {"en": "9 points", "es": "9 puntos", "de": "9 Punkte", "nl": "9 punten"},
        {"en": "1 point", "es": "1 punto", "de": "1 Punkt", "nl": "1 punt"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A rook is valued at 5 points, making it more valuable than bishops or knights but less than the queen.",
        "es": "Una torre vale 5 puntos, haciéndola más valiosa que alfiles o caballos pero menos que la reina.",
        "de": "Ein Turm wird mit 5 Punkten bewertet, was ihn wertvoller als Läufer oder Springer, aber weniger wertvoll als die Dame macht.",
        "nl": "Een toren is 5 punten waard, waardoor hij waardevoller is dan lopers of paarden maar minder dan de dame."
      }
    },
    {
      "question": {
        "en": "How can a game end in a draw?",
        "es": "¿Cómo puede terminar un juego en tablas?",
        "de": "Wie kann ein Spiel mit Remis enden?",
        "nl": "Hoe kan een spel in remise eindigen?"
      },
      "options": [
        {"en": "Stalemate, agreement, repetition, or insufficient material", "es": "Ahogado, acuerdo, repetición o material insuficiente", "de": "Patt, Vereinbarung, Wiederholung oder unzureichendes Material", "nl": "Pat, overeenstemming, herhaling of onvoldoende materiaal"},
        {"en": "Only by agreement", "es": "Solo por acuerdo", "de": "Nur durch Vereinbarung", "nl": "Alleen door overeenstemming"},
        {"en": "Only when time runs out", "es": "Solo cuando se acaba el tiempo", "de": "Nur wenn die Zeit abläuft", "nl": "Alleen als de tijd op is"},
        {"en": "Only in stalemate", "es": "Solo en ahogado", "de": "Nur bei Patt", "nl": "Alleen bij pat"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A draw can occur through stalemate, mutual agreement, threefold repetition, the 50-move rule, or insufficient material to checkmate.",
        "es": "Las tablas pueden ocurrir por ahogado, acuerdo mutuo, triple repetición, la regla de 50 movimientos o material insuficiente para dar mate.",
        "de": "Remis kann durch Patt, gegenseitige Vereinbarung, dreifache Wiederholung, die 50-Züge-Regel oder unzureichendes Material zum Matt entstehen.",
        "nl": "Remise kan optreden door pat, wederzijdse overeenstemming, drievoudige herhaling, de 50-zetten regel of onvoldoende materiaal voor mat."
      }
    },
    {
      "question": {
        "en": "What is the Ruy Lopez opening?",
        "es": "¿Qué es la apertura Ruy López?",
        "de": "Was ist die Spanische Eröffnung?",
        "nl": "Wat is de Spaanse opening?"
      },
      "options": [
        {"en": "1.e4 e5 2.Nf3 Nc6 3.Bb5", "es": "1.e4 e5 2.Cf3 Cc6 3.Ab5", "de": "1.e4 e5 2.Sf3 Sc6 3.Lb5", "nl": "1.e4 e5 2.Pf3 Pc6 3.Lb5"},
        {"en": "1.d4 d5 2.c4", "es": "1.d4 d5 2.c4", "de": "1.d4 d5 2.c4", "nl": "1.d4 d5 2.c4"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.e4 e6", "es": "1.e4 e6", "de": "1.e4 e6", "nl": "1.e4 e6"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Ruy Lopez or Spanish Opening begins with 1.e4 e5 2.Nf3 Nc6 3.Bb5, one of the oldest and most classic openings.",
        "es": "La Ruy López o Apertura Española comienza con 1.e4 e5 2.Cf3 Cc6 3.Ab5, una de las aperturas más antiguas y clásicas.",
        "de": "Die Spanische Eröffnung beginnt mit 1.e4 e5 2.Sf3 Sc6 3.Lb5, eine der ältesten und klassischsten Eröffnungen.",
        "nl": "De Spaanse opening begint met 1.e4 e5 2.Pf3 Pc6 3.Lb5, een van de oudste en meest klassieke openingen."
      }
    },
    {
      "question": {
        "en": "What is a fianchetto?",
        "es": "¿Qué es un fianchetto?",
        "de": "Was ist ein Fianchetto?",
        "nl": "Wat is een fianchetto?"
      },
      "options": [
        {"en": "Developing a bishop on the long diagonal", "es": "Desarrollar un alfil en la diagonal larga", "de": "Einen Läufer auf der langen Diagonale entwickeln", "nl": "Een loper ontwikkelen op de lange diagonaal"},
        {"en": "A type of checkmate", "es": "Un tipo de jaque mate", "de": "Eine Art Schachmatt", "nl": "Een soort schaakmat"},
        {"en": "Castling", "es": "Enroque", "de": "Rochade", "nl": "Rokade"},
        {"en": "A pawn promotion", "es": "Una promoción de peón", "de": "Eine Bauernumwandlung", "nl": "Een pionpromotie"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A fianchetto is when a bishop is developed to g2/b2 or g7/b7, controlling the long diagonal after moving the g or b pawn.",
        "es": "Un fianchetto es cuando un alfil se desarrolla a g2/b2 o g7/b7, controlando la diagonal larga después de mover el peón g o b.",
        "de": "Ein Fianchetto ist, wenn ein Läufer nach g2/b2 oder g7/b7 entwickelt wird und die lange Diagonale kontrolliert.",
        "nl": "Een fianchetto is wanneer een loper wordt ontwikkeld naar g2/b2 of g7/b7, controlerend over de lange diagonaal."
      }
    },
    {
      "question": {
        "en": "What is the back rank?",
        "es": "¿Qué es la última fila?",
        "de": "Was ist die Grundreihe?",
        "nl": "Wat is de achterste rij?"
      },
      "options": [
        {"en": "The first and eighth ranks where pieces start", "es": "Las filas primera y octava donde comienzan las piezas", "de": "Die erste und achte Reihe, wo die Figuren starten", "nl": "De eerste en achtste rij waar de stukken starten"},
        {"en": "The middle of the board", "es": "El centro del tablero", "de": "Die Mitte des Bretts", "nl": "Het midden van het bord"},
        {"en": "The pawn rows", "es": "Las filas de peones", "de": "Die Bauernreihen", "nl": "De pionrijen"},
        {"en": "The side files", "es": "Las columnas laterales", "de": "Die Seitenlinien", "nl": "De zijlijnen"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The back rank refers to the first rank for White and eighth rank for Black, where the major pieces initially stand.",
        "es": "La última fila se refiere a la primera fila para las blancas y octava para las negras, donde están las piezas mayores inicialmente.",
        "de": "Die Grundreihe bezeichnet die erste Reihe für Weiß und achte Reihe für Schwarz, wo die Schwerfiguren anfangs stehen.",
        "nl": "De achterste rij verwijst naar de eerste rij voor wit en achtste rij voor zwart, waar de zware stukken initieel staan."
      }
    },
    {
      "question": {
        "en": "What is a passed pawn?",
        "es": "¿Qué es un peón pasado?",
        "de": "Was ist ein Freibauer?",
        "nl": "Wat is een vrijpion?"
      },
      "options": [
        {"en": "A pawn with no enemy pawns blocking its advance", "es": "Un peón sin peones enemigos bloqueando su avance", "de": "Ein Bauer ohne gegnerische Bauern, die seinen Vormarsch blockieren", "nl": "Een pion zonder vijandelijke pionnen die zijn opmars blokkeren"},
        {"en": "A pawn that has been captured", "es": "Un peón que ha sido capturado", "de": "Ein geschlagener Bauer", "nl": "Een geslagen pion"},
        {"en": "A pawn on its starting square", "es": "Un peón en su casilla inicial", "de": "Ein Bauer auf seinem Startfeld", "nl": "Een pion op zijn startveld"},
        {"en": "A promoted pawn", "es": "Un peón promovido", "de": "Ein umgewandelter Bauer", "nl": "Een gepromoveerde pion"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A passed pawn is a pawn with no opposing pawns to prevent it from advancing to promotion.",
        "es": "Un peón pasado es un peón sin peones contrarios que impidan su avance hacia la promoción.",
        "de": "Ein Freibauer ist ein Bauer ohne gegnerische Bauern, die seine Umwandlung verhindern können.",
        "nl": "Een vrijpion is een pion zonder tegengestelde pionnen die kunnen voorkomen dat hij promoveert."
      }
    },
    {
      "question": {
        "en": "What is the center of the board?",
        "es": "¿Qué es el centro del tablero?",
        "de": "Was ist das Zentrum des Bretts?",
        "nl": "Wat is het centrum van het bord?"
      },
      "options": [
        {"en": "The squares e4, e5, d4, d5", "es": "Las casillas e4, e5, d4, d5", "de": "Die Felder e4, e5, d4, d5", "nl": "De velden e4, e5, d4, d5"},
        {"en": "The entire fourth and fifth ranks", "es": "Todas las filas cuarta y quinta", "de": "Die gesamten vierten und fünften Reihen", "nl": "De hele vierde en vijfde rijen"},
        {"en": "The corners", "es": "Las esquinas", "de": "Die Ecken", "nl": "De hoeken"},
        {"en": "The king's position", "es": "La posición del rey", "de": "Die Position des Königs", "nl": "De positie van de koning"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The center consists of the four squares e4, e5, d4, and d5. Control of the center is crucial in chess strategy.",
        "es": "El centro consiste en las cuatro casillas e4, e5, d4 y d5. El control del centro es crucial en la estrategia del ajedrez.",
        "de": "Das Zentrum besteht aus den vier Feldern e4, e5, d4 und d5. Die Kontrolle des Zentrums ist entscheidend in der Schachstrategie.",
        "nl": "Het centrum bestaat uit de vier velden e4, e5, d4 en d5. Controle over het centrum is cruciaal in de schaakstrategie."
      }
    },
    {
      "question": {
        "en": "What is opposition in king and pawn endgames?",
        "es": "¿Qué es la oposición en finales de rey y peón?",
        "de": "Was ist Opposition in König-und-Bauer-Endspielen?",
        "nl": "Wat is oppositie in koning-en-pion eindspelen?"
      },
      "options": [
        {"en": "When kings face each other with one square between them", "es": "Cuando los reyes se enfrentan con una casilla entre ellos", "de": "Wenn sich Könige mit einem Feld dazwischen gegenüberstehen", "nl": "Wanneer koningen tegenover elkaar staan met één veld ertussen"},
        {"en": "When pawns block each other", "es": "Cuando los peones se bloquean", "de": "Wenn Bauern sich blockieren", "nl": "Wanneer pionnen elkaar blokkeren"},
        {"en": "A type of draw", "es": "Un tipo de tablas", "de": "Eine Art Remis", "nl": "Een soort remise"},
        {"en": "When the game ends", "es": "Cuando termina el juego", "de": "Wenn das Spiel endet", "nl": "Wanneer het spel eindigt"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Opposition is when two kings face each other with one square between them. The player not to move has the opposition.",
        "es": "La oposición es cuando dos reyes se enfrentan con una casilla entre ellos. El jugador que no mueve tiene la oposición.",
        "de": "Opposition ist, wenn sich zwei Könige mit einem Feld dazwischen gegenüberstehen. Der Spieler, der nicht am Zug ist, hat die Opposition.",
        "nl": "Oppositie is wanneer twee koningen tegenover elkaar staan met één veld ertussen. De speler die niet aan zet is heeft de oppositie."
      }
    },
    {
      "question": {
        "en": "What is a battery in chess?",
        "es": "¿Qué es una batería en ajedrez?",
        "de": "Was ist eine Batterie im Schach?",
        "nl": "Wat is een batterij bij schaken?"
      },
      "options": [
        {"en": "Two pieces of the same type lined up on the same file, rank, or diagonal", "es": "Dos piezas del mismo tipo alineadas en la misma columna, fila o diagonal", "de": "Zwei gleichartige Figuren auf derselben Linie, Reihe oder Diagonale", "nl": "Twee stukken van hetzelfde type op dezelfde lijn, rij of diagonaal"},
        {"en": "The chess clock", "es": "El reloj de ajedrez", "de": "Die Schachuhr", "nl": "De schaakklok"},
        {"en": "A type of opening", "es": "Un tipo de apertura", "de": "Eine Art Eröffnung", "nl": "Een soort opening"},
        {"en": "Castling", "es": "Enroque", "de": "Rochade", "nl": "Rokade"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A battery is formed when two rooks are on the same file, or a queen and bishop/rook are aligned on the same line.",
        "es": "Una batería se forma cuando dos torres están en la misma columna, o una reina y alfil/torre están alineados en la misma línea.",
        "de": "Eine Batterie entsteht, wenn zwei Türme auf derselben Linie stehen oder Dame und Läufer/Turm auf derselben Linie ausgerichtet sind.",
        "nl": "Een batterij wordt gevormd wanneer twee torens op dezelfde lijn staan, of een dame en loper/toren op dezelfde lijn zijn uitgelijnd."
      }
    },
    {
      "question": {
        "en": "How many different ways can a knight move from its starting position?",
        "es": "¿De cuántas formas diferentes puede moverse un caballo desde su posición inicial?",
        "de": "Auf wie viele verschiedene Arten kann ein Springer von seiner Startposition ziehen?",
        "nl": "Op hoeveel verschillende manieren kan een paard vanaf zijn startpositie bewegen?"
      },
      "options": [
        {"en": "2 or 3 depending on position", "es": "2 o 3 dependiendo de la posición", "de": "2 oder 3 je nach Position", "nl": "2 of 3 afhankelijk van positie"},
        {"en": "4", "es": "4", "de": "4", "nl": "4"},
        {"en": "8", "es": "8", "de": "8", "nl": "8"},
        {"en": "1", "es": "1", "de": "1", "nl": "1"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A knight on b1/g1 (or b8/g8) has 3 possible moves, while a knight in the corner has only 2 possible moves.",
        "es": "Un caballo en b1/g1 (o b8/g8) tiene 3 movimientos posibles, mientras que un caballo en la esquina tiene solo 2.",
        "de": "Ein Springer auf b1/g1 (oder b8/g8) hat 3 mögliche Züge, während ein Springer in der Ecke nur 2 hat.",
        "nl": "Een paard op b1/g1 (of b8/g8) heeft 3 mogelijke zetten, terwijl een paard in de hoek slechts 2 heeft."
      }
    },
    {
      "question": {
        "en": "What is a blunder?",
        "es": "¿Qué es un error grave?",
        "de": "Was ist ein grober Fehler?",
        "nl": "Wat is een blunder?"
      },
      "options": [
        {"en": "A very bad move that loses material or the game", "es": "Un movimiento muy malo que pierde material o el juego", "de": "Ein sehr schlechter Zug, der Material oder das Spiel verliert", "nl": "Een zeer slechte zet die materiaal of het spel verliest"},
        {"en": "A brilliant move", "es": "Un movimiento brillante", "de": "Ein brillanter Zug", "nl": "Een briljante zet"},
        {"en": "An opening", "es": "Una apertura", "de": "Eine Eröffnung", "nl": "Een opening"},
        {"en": "A draw", "es": "Tablas", "de": "Remis", "nl": "Remise"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A blunder is a very bad move that drastically worsens your position, often losing material or the game.",
        "es": "Un error grave es un movimiento muy malo que empeora drásticamente tu posición, a menudo perdiendo material o el juego.",
        "de": "Ein grober Fehler ist ein sehr schlechter Zug, der die Position drastisch verschlechtert, oft mit Materialverlust oder Niederlage.",
        "nl": "Een blunder is een zeer slechte zet die je positie drastisch verslechtert, vaak met materiaalverlies of verlies van het spel."
      }
    },
    {
      "question": {
        "en": "What is the Queen's Gambit?",
        "es": "¿Qué es el Gambito de Dama?",
        "de": "Was ist das Damengambit?",
        "nl": "Wat is het Damegambiet?"
      },
      "options": [
        {"en": "1.d4 d5 2.c4", "es": "1.d4 d5 2.c4", "de": "1.d4 d5 2.c4", "nl": "1.d4 d5 2.c4"},
        {"en": "1.e4 e5 2.f4", "es": "1.e4 e5 2.f4", "de": "1.e4 e5 2.f4", "nl": "1.e4 e5 2.f4"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.Nf3 Nf6", "es": "1.Cf3 Cf6", "de": "1.Sf3 Sf6", "nl": "1.Pf3 Pf6"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Queen's Gambit begins with 1.d4 d5 2.c4, offering the c-pawn to gain central control.",
        "es": "El Gambito de Dama comienza con 1.d4 d5 2.c4, ofreciendo el peón c para ganar control central.",
        "de": "Das Damengambit beginnt mit 1.d4 d5 2.c4 und bietet den c-Bauern für zentrale Kontrolle.",
        "nl": "Het Damegambiet begint met 1.d4 d5 2.c4, waarbij de c-pion wordt geofferd voor centrale controle."
      }
    },
    {
      "question": {
        "en": "What is an isolated pawn?",
        "es": "¿Qué es un peón aislado?",
        "de": "Was ist ein isolierter Bauer?",
        "nl": "Wat is een geïsoleerde pion?"
      },
      "options": [
        {"en": "A pawn with no friendly pawns on adjacent files", "es": "Un peón sin peones amigos en columnas adyacentes", "de": "Ein Bauer ohne eigene Bauern auf benachbarten Linien", "nl": "Een pion zonder eigen pionnen op aangrenzende lijnen"},
        {"en": "A pawn on the edge of the board", "es": "Un peón en el borde del tablero", "de": "Ein Bauer am Rand des Bretts", "nl": "Een pion aan de rand van het bord"},
        {"en": "A promoted pawn", "es": "Un peón promovido", "de": "Ein umgewandelter Bauer", "nl": "Een gepromoveerde pion"},
        {"en": "The last pawn", "es": "El último peón", "de": "Der letzte Bauer", "nl": "De laatste pion"}
      ],
      "correct": 0,
      "explanation": {
        "en": "An isolated pawn has no friendly pawns on adjacent files and can be a weakness as it cannot be defended by other pawns.",
        "es": "Un peón aislado no tiene peones amigos en columnas adyacentes y puede ser una debilidad ya que no puede ser defendido por otros peones.",
        "de": "Ein isolierter Bauer hat keine eigenen Bauern auf benachbarten Linien und kann eine Schwäche sein, da er nicht von anderen Bauern verteidigt werden kann.",
        "nl": "Een geïsoleerde pion heeft geen eigen pionnen op aangrenzende lijnen en kan een zwakte zijn omdat hij niet door andere pionnen verdedigd kan worden."
      }
    },
    {
      "question": {
        "en": "What is the English Opening?",
        "es": "¿Qué es la Apertura Inglesa?",
        "de": "Was ist die Englische Eröffnung?",
        "nl": "Wat is de Engelse opening?"
      },
      "options": [
        {"en": "1.c4", "es": "1.c4", "de": "1.c4", "nl": "1.c4"},
        {"en": "1.e4", "es": "1.e4", "de": "1.e4", "nl": "1.e4"},
        {"en": "1.d4", "es": "1.d4", "de": "1.d4", "nl": "1.d4"},
        {"en": "1.Nf3", "es": "1.Cf3", "de": "1.Sf3", "nl": "1.Pf3"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The English Opening starts with 1.c4, controlling the center from the side and often leading to positional play.",
        "es": "La Apertura Inglesa comienza con 1.c4, controlando el centro desde el lado y a menudo llevando a un juego posicional.",
        "de": "Die Englische Eröffnung beginnt mit 1.c4, kontrolliert das Zentrum von der Seite und führt oft zu positionellem Spiel.",
        "nl": "De Engelse opening begint met 1.c4, controleert het centrum vanaf de zijkant en leidt vaak tot positioneel spel."
      }
    },
    {
      "question": {
        "en": "What is a backward pawn?",
        "es": "¿Qué es un peón retrasado?",
        "de": "Was ist ein rückständiger Bauer?",
        "nl": "Wat is een achtergebleven pion?"
      },
      "options": [
        {"en": "A pawn that cannot advance without being captured", "es": "Un peón que no puede avanzar sin ser capturado", "de": "Ein Bauer, der nicht vorrücken kann ohne geschlagen zu werden", "nl": "Een pion die niet kan oprukken zonder geslagen te worden"},
        {"en": "A pawn on the first rank", "es": "Un peón en la primera fila", "de": "Ein Bauer auf der ersten Reihe", "nl": "Een pion op de eerste rij"},
        {"en": "A pawn moving backwards", "es": "Un peón moviéndose hacia atrás", "de": "Ein rückwärts ziehender Bauer", "nl": "Een pion die achteruit beweegt"},
        {"en": "The last pawn", "es": "El último peón", "de": "Der letzte Bauer", "nl": "De laatste pion"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A backward pawn is behind pawns on adjacent files and cannot safely advance, often becoming a weakness.",
        "es": "Un peón retrasado está detrás de peones en columnas adyacentes y no puede avanzar con seguridad, a menudo convirtiéndose en una debilidad.",
        "de": "Ein rückständiger Bauer steht hinter Bauern auf benachbarten Linien und kann nicht sicher vorrücken, wird oft zur Schwäche.",
        "nl": "Een achtergebleven pion staat achter pionnen op aangrenzende lijnen en kan niet veilig oprukken, wordt vaak een zwakte."
      }
    },
    {
      "question": {
        "en": "What is the f7 square often called for Black?",
        "es": "¿Cómo se llama a menudo la casilla f7 para las negras?",
        "de": "Wie wird das Feld f7 für Schwarz oft genannt?",
        "nl": "Hoe wordt het f7-veld voor zwart vaak genoemd?"
      },
      "options": [
        {"en": "The weakest square", "es": "La casilla más débil", "de": "Das schwächste Feld", "nl": "Het zwakste veld"},
        {"en": "The strongest square", "es": "La casilla más fuerte", "de": "Das stärkste Feld", "nl": "Het sterkste veld"},
        {"en": "The center", "es": "El centro", "de": "Das Zentrum", "nl": "Het centrum"},
        {"en": "The corner", "es": "La esquina", "de": "Die Ecke", "nl": "De hoek"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The f7 square is often Black's weakest point in the opening, defended only by the king before castling.",
        "es": "La casilla f7 es a menudo el punto más débil de las negras en la apertura, defendida solo por el rey antes del enroque.",
        "de": "Das Feld f7 ist oft Schwarzs schwächster Punkt in der Eröffnung, nur vom König verteidigt vor der Rochade.",
        "nl": "Het f7-veld is vaak zwarts zwakste punt in de opening, alleen verdedigd door de koning voor het rokeren."
      }
    },
    {
      "question": {
        "en": "What is a pawn chain?",
        "es": "¿Qué es una cadena de peones?",
        "de": "Was ist eine Bauernkette?",
        "nl": "Wat is een pionnenketen?"
      },
      "options": [
        {"en": "Diagonal line of pawns protecting each other", "es": "Línea diagonal de peones protegiéndose mutuamente", "de": "Diagonale Linie von Bauern, die sich gegenseitig schützen", "nl": "Diagonale lijn van pionnen die elkaar beschermen"},
        {"en": "All pawns in a row", "es": "Todos los peones en fila", "de": "Alle Bauern in einer Reihe", "nl": "Alle pionnen op een rij"},
        {"en": "Doubled pawns", "es": "Peones doblados", "de": "Doppelbauern", "nl": "Dubbele pionnen"},
        {"en": "Passed pawns", "es": "Peones pasados", "de": "Freibauern", "nl": "Vrijpionnen"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A pawn chain is a diagonal line of pawns protecting each other. The base of the chain is often the weakest point.",
        "es": "Una cadena de peones es una línea diagonal de peones protegiéndose mutuamente. La base de la cadena es a menudo el punto más débil.",
        "de": "Eine Bauernkette ist eine diagonale Linie von Bauern, die sich gegenseitig schützen. Die Basis der Kette ist oft der schwächste Punkt.",
        "nl": "Een pionnenketen is een diagonale lijn van pionnen die elkaar beschermen. De basis van de keten is vaak het zwakste punt."
      }
    },
    {
      "question": {
        "en": "What is the Caro-Kann Defense?",
        "es": "¿Qué es la Defensa Caro-Kann?",
        "de": "Was ist die Caro-Kann-Verteidigung?",
        "nl": "Wat is de Caro-Kann verdediging?"
      },
      "options": [
        {"en": "1.e4 c6", "es": "1.e4 c6", "de": "1.e4 c6", "nl": "1.e4 c6"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.e4 e6", "es": "1.e4 e6", "de": "1.e4 e6", "nl": "1.e4 e6"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Caro-Kann Defense starts with 1.e4 c6, preparing to play d5 and create a solid pawn structure.",
        "es": "La Defensa Caro-Kann comienza con 1.e4 c6, preparando jugar d5 y crear una estructura de peones sólida.",
        "de": "Die Caro-Kann-Verteidigung beginnt mit 1.e4 c6, bereitet d5 vor und schafft eine solide Bauernstruktur.",
        "nl": "De Caro-Kann verdediging begint met 1.e4 c6, voorbereidend om d5 te spelen en een solide pionnenstructuur te creëren."
      }
    },
    {
      "question": {
        "en": "What is a doubled pawn?",
        "es": "¿Qué es un peón doblado?",
        "de": "Was ist ein Doppelbauer?",
        "nl": "Wat is een dubbele pion?"
      },
      "options": [
        {"en": "Two pawns of the same color on the same file", "es": "Dos peones del mismo color en la misma columna", "de": "Zwei Bauern derselben Farbe auf derselben Linie", "nl": "Twee pionnen van dezelfde kleur op dezelfde lijn"},
        {"en": "A pawn worth two points", "es": "Un peón que vale dos puntos", "de": "Ein Bauer der zwei Punkte wert ist", "nl": "Een pion die twee punten waard is"},
        {"en": "A pawn that moved twice", "es": "Un peón que se movió dos veces", "de": "Ein Bauer der zweimal gezogen hat", "nl": "Een pion die twee keer heeft bewogen"},
        {"en": "Two pawns side by side", "es": "Dos peones lado a lado", "de": "Zwei Bauern nebeneinander", "nl": "Twee pionnen naast elkaar"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Doubled pawns are two pawns of the same color on the same file, usually considered a weakness.",
        "es": "Los peones doblados son dos peones del mismo color en la misma columna, generalmente considerados una debilidad.",
        "de": "Doppelbauern sind zwei Bauern derselben Farbe auf derselben Linie, gelten meist als Schwäche.",
        "nl": "Dubbele pionnen zijn twee pionnen van dezelfde kleur op dezelfde lijn, meestal beschouwd als een zwakte."
      }
    },
    {
      "question": {
        "en": "What is the Alekhine Defense?",
        "es": "¿Qué es la Defensa Alekhine?",
        "de": "Was ist die Aljechin-Verteidigung?",
        "nl": "Wat is de Aljechin verdediging?"
      },
      "options": [
        {"en": "1.e4 Nf6", "es": "1.e4 Cf6", "de": "1.e4 Sf6", "nl": "1.e4 Pf6"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.e4 d5", "es": "1.e4 d5", "de": "1.e4 d5", "nl": "1.e4 d5"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Alekhine Defense begins with 1.e4 Nf6, inviting White to advance pawns which Black later undermines.",
        "es": "La Defensa Alekhine comienza con 1.e4 Cf6, invitando a las blancas a avanzar peones que las negras luego socavan.",
        "de": "Die Aljechin-Verteidigung beginnt mit 1.e4 Sf6 und lädt Weiß ein, Bauern vorzurücken, die Schwarz später untergräbt.",
        "nl": "De Aljechin verdediging begint met 1.e4 Pf6, wit uitnodigend pionnen op te rukken die zwart later ondermijnt."
      }
    },
    {
      "question": {
        "en": "What is a sacrifice in chess?",
        "es": "¿Qué es un sacrificio en ajedrez?",
        "de": "Was ist ein Opfer im Schach?",
        "nl": "Wat is een offer bij schaken?"
      },
      "options": [
        {"en": "Deliberately giving up material for positional or tactical advantage", "es": "Entregar material deliberadamente por ventaja posicional o táctica", "de": "Bewusst Material für positionellen oder taktischen Vorteil aufgeben", "nl": "Bewust materiaal opgeven voor positioneel of tactisch voordeel"},
        {"en": "Losing a piece by mistake", "es": "Perder una pieza por error", "de": "Eine Figur aus Versehen verlieren", "nl": "Een stuk per ongeluk verliezen"},
        {"en": "Trading pieces", "es": "Intercambiar piezas", "de": "Figuren tauschen", "nl": "Stukken ruilen"},
        {"en": "Promoting a pawn", "es": "Promover un peón", "de": "Einen Bauern umwandeln", "nl": "Een pion promoveren"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A sacrifice is deliberately giving up material to gain a positional, tactical, or attacking advantage.",
        "es": "Un sacrificio es entregar material deliberadamente para obtener una ventaja posicional, táctica o de ataque.",
        "de": "Ein Opfer ist das bewusste Aufgeben von Material für positionellen, taktischen oder Angriffsvorteil.",
        "nl": "Een offer is het bewust opgeven van materiaal voor positioneel, tactisch of aanvalsvoordeel."
      }
    },
    {
      "question": {
        "en": "What is the minimum number of moves for checkmate?",
        "es": "¿Cuál es el número mínimo de movimientos para jaque mate?",
        "de": "Was ist die Mindestanzahl von Zügen für Schachmatt?",
        "nl": "Wat is het minimum aantal zetten voor schaakmat?"
      },
      "options": [
        {"en": "2 moves (Fool's Mate)", "es": "2 movimientos (Mate del Loco)", "de": "2 Züge (Narrenmatt)", "nl": "2 zetten (Dwaasmat)"},
        {"en": "3 moves", "es": "3 movimientos", "de": "3 Züge", "nl": "3 zetten"},
        {"en": "4 moves", "es": "4 movimientos", "de": "4 Züge", "nl": "4 zetten"},
        {"en": "5 moves", "es": "5 movimientos", "de": "5 Züge", "nl": "5 zetten"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Fool's Mate is the fastest checkmate possible, occurring after just 2 moves: 1.f3 e5 2.g4 Qh4#",
        "es": "El Mate del Loco es el jaque mate más rápido posible, ocurriendo después de solo 2 movimientos: 1.f3 e5 2.g4 Dh4#",
        "de": "Das Narrenmatt ist das schnellste mögliche Schachmatt, nach nur 2 Zügen: 1.f3 e5 2.g4 Dh4#",
        "nl": "Dwaasmat is het snelste mogelijke schaakmat, na slechts 2 zetten: 1.f3 e5 2.g4 Dh4#"
      }
    },
    {
      "question": {
        "en": "What is the London System?",
        "es": "¿Qué es el Sistema Londres?",
        "de": "Was ist das Londoner System?",
        "nl": "Wat is het Londense Systeem?"
      },
      "options": [
        {"en": "A solid opening system with d4, Nf3, Bf4", "es": "Un sistema de apertura sólido con d4, Cf3, Af4", "de": "Ein solides Eröffnungssystem mit d4, Sf3, Lf4", "nl": "Een solide openingssysteem met d4, Pf3, Lf4"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "A type of endgame", "es": "Un tipo de final", "de": "Eine Art Endspiel", "nl": "Een soort eindspel"},
        {"en": "A chess tournament", "es": "Un torneo de ajedrez", "de": "Ein Schachturnier", "nl": "Een schaaktoernooi"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The London System is a solid chess opening where White plays d4, Nf3, Bf4, e3, Nbd2, and often c3.",
        "es": "El Sistema Londres es una apertura sólida donde las blancas juegan d4, Cf3, Af4, e3, Cbd2, y a menudo c3.",
        "de": "Das Londoner System ist eine solide Eröffnung mit d4, Sf3, Lf4, e3, Sbd2 und oft c3.",
        "nl": "Het Londense Systeem is een solide opening waarbij wit d4, Pf3, Lf4, e3, Pbd2, en vaak c3 speelt."
      }
    },
    {
      "question": {
        "en": "What is a windmill in chess?",
        "es": "¿Qué es un molino en ajedrez?",
        "de": "Was ist eine Windmühle im Schach?",
        "nl": "Wat is een molen bij schaken?"
      },
      "options": [
        {"en": "A tactic using discovered check repeatedly", "es": "Una táctica usando jaque descubierto repetidamente", "de": "Eine Taktik mit wiederholtem Abzugsschach", "nl": "Een tactiek met herhaalde aftrekschaak"},
        {"en": "A type of opening", "es": "Un tipo de apertura", "de": "Eine Art Eröffnung", "nl": "Een soort opening"},
        {"en": "A pawn structure", "es": "Una estructura de peones", "de": "Eine Bauernstruktur", "nl": "Een pionnenstructuur"},
        {"en": "Castling", "es": "Enroque", "de": "Rochade", "nl": "Rokade"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A windmill is a tactic where discovered checks are used repeatedly to win material.",
        "es": "Un molino es una táctica donde se usan jaques descubiertos repetidamente para ganar material.",
        "de": "Eine Windmühle ist eine Taktik, bei der wiederholt Abzugsschachs verwendet werden, um Material zu gewinnen.",
        "nl": "Een molen is een tactiek waarbij aftrekschaak herhaaldelijk wordt gebruikt om materiaal te winnen."
      }
    },
    {
      "question": {
        "en": "What is a hanging piece?",
        "es": "¿Qué es una pieza colgante?",
        "de": "Was ist eine hängende Figur?",
        "nl": "Wat is een hangende stuk?"
      },
      "options": [
        {"en": "An undefended piece that can be captured", "es": "Una pieza sin defensa que puede ser capturada", "de": "Eine unverteidigte Figur, die geschlagen werden kann", "nl": "Een onverdedigd stuk dat geslagen kan worden"},
        {"en": "A piece in the air", "es": "Una pieza en el aire", "de": "Eine Figur in der Luft", "nl": "Een stuk in de lucht"},
        {"en": "A promoted pawn", "es": "Un peón promovido", "de": "Ein umgewandelter Bauer", "nl": "Een gepromoveerde pion"},
        {"en": "The king", "es": "El rey", "de": "Der König", "nl": "De koning"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A hanging piece is one that is undefended and can be captured for free.",
        "es": "Una pieza colgante es una que no está defendida y puede ser capturada gratis.",
        "de": "Eine hängende Figur ist unverteidigt und kann kostenlos geschlagen werden.",
        "nl": "Een hangend stuk is onverdedigd en kan gratis geslagen worden."
      }
    },
    {
      "question": {
        "en": "What is the Nimzo-Indian Defense?",
        "es": "¿Qué es la Defensa Nimzoindia?",
        "de": "Was ist die Nimzoindische Verteidigung?",
        "nl": "Wat is de Nimzo-Indische verdediging?"
      },
      "options": [
        {"en": "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4", "es": "1.d4 Cf6 2.c4 e6 3.Cc3 Ab4", "de": "1.d4 Sf6 2.c4 e6 3.Sc3 Lb4", "nl": "1.d4 Pf6 2.c4 e6 3.Pc3 Lb4"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "1.Nf3", "es": "1.Cf3", "de": "1.Sf3", "nl": "1.Pf3"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Nimzo-Indian Defense features Black pinning White's knight on c3 with ...Bb4.",
        "es": "La Defensa Nimzoindia presenta al negro clavando el caballo blanco en c3 con ...Ab4.",
        "de": "Die Nimzoindische Verteidigung zeichnet sich durch die Fesselung des weißen Springers auf c3 mit ...Lb4 aus.",
        "nl": "De Nimzo-Indische verdediging kenmerkt zich door zwart die wits paard op c3 pent met ...Lb4."
      }
    },
    {
      "question": {
        "en": "What is a clearance in chess?",
        "es": "¿Qué es un despeje en ajedrez?",
        "de": "Was ist eine Räumung im Schach?",
        "nl": "Wat is een ruiming bij schaken?"
      },
      "options": [
        {"en": "Moving a piece to clear a line for another piece", "es": "Mover una pieza para despejar una línea para otra", "de": "Eine Figur ziehen, um eine Linie für eine andere zu räumen", "nl": "Een stuk verplaatsen om een lijn vrij te maken voor een ander stuk"},
        {"en": "Capturing all pieces", "es": "Capturar todas las piezas", "de": "Alle Figuren schlagen", "nl": "Alle stukken slaan"},
        {"en": "Promoting a pawn", "es": "Promover un peón", "de": "Einen Bauern umwandeln", "nl": "Een pion promoveren"},
        {"en": "Castling", "es": "Enroque", "de": "Rochade", "nl": "Rokade"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Clearance is a tactic where a piece moves to clear a file, rank, or diagonal for another piece to use.",
        "es": "El despeje es una táctica donde una pieza se mueve para despejar una columna, fila o diagonal para que otra pieza la use.",
        "de": "Räumung ist eine Taktik, bei der eine Figur zieht, um eine Linie, Reihe oder Diagonale für eine andere Figur freizumachen.",
        "nl": "Ruiming is een tactiek waarbij een stuk beweegt om een lijn, rij of diagonaal vrij te maken voor een ander stuk."
      }
    },
    {
      "question": {
        "en": "What is a weak square?",
        "es": "¿Qué es una casilla débil?",
        "de": "Was ist ein schwaches Feld?",
        "nl": "Wat is een zwak veld?"
      },
      "options": [
        {"en": "A square that cannot be defended by pawns", "es": "Una casilla que no puede ser defendida por peones", "de": "Ein Feld, das nicht von Bauern verteidigt werden kann", "nl": "Een veld dat niet door pionnen verdedigd kan worden"},
        {"en": "Any corner square", "es": "Cualquier casilla de esquina", "de": "Jedes Eckfeld", "nl": "Elk hoekveld"},
        {"en": "The king's position", "es": "La posición del rey", "de": "Die Position des Königs", "nl": "De positie van de koning"},
        {"en": "A captured square", "es": "Una casilla capturada", "de": "Ein geschlagenes Feld", "nl": "Een geslagen veld"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A weak square is one that cannot be defended by pawns and can be occupied by enemy pieces.",
        "es": "Una casilla débil es una que no puede ser defendida por peones y puede ser ocupada por piezas enemigas.",
        "de": "Ein schwaches Feld kann nicht von Bauern verteidigt werden und kann von gegnerischen Figuren besetzt werden.",
        "nl": "Een zwak veld kan niet door pionnen verdedigd worden en kan door vijandelijke stukken bezet worden."
      }
    },
    {
      "question": {
        "en": "What is the Scandinavian Defense?",
        "es": "¿Qué es la Defensa Escandinava?",
        "de": "Was ist die Skandinavische Verteidigung?",
        "nl": "Wat is de Scandinavische verdediging?"
      },
      "options": [
        {"en": "1.e4 d5", "es": "1.e4 d5", "de": "1.e4 d5", "nl": "1.e4 d5"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.d4 d5", "es": "1.d4 d5", "de": "1.d4 d5", "nl": "1.d4 d5"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Scandinavian Defense begins with 1.e4 d5, immediately challenging White's center pawn.",
        "es": "La Defensa Escandinava comienza con 1.e4 d5, desafiando inmediatamente el peón central de las blancas.",
        "de": "Die Skandinavische Verteidigung beginnt mit 1.e4 d5 und fordert sofort Weiß' Zentrumsbauern heraus.",
        "nl": "De Scandinavische verdediging begint met 1.e4 d5, waarbij direct wits centrale pion wordt aangevallen."
      }
    },
    {
      "question": {
        "en": "What is a decoy in chess?",
        "es": "¿Qué es un señuelo en ajedrez?",
        "de": "Was ist ein Köder im Schach?",
        "nl": "Wat is een lokvogel bij schaken?"
      },
      "options": [
        {"en": "Luring an enemy piece to a bad square", "es": "Atraer una pieza enemiga a una casilla mala", "de": "Eine gegnerische Figur auf ein schlechtes Feld locken", "nl": "Een vijandelijk stuk naar een slecht veld lokken"},
        {"en": "A fake move", "es": "Un movimiento falso", "de": "Ein falscher Zug", "nl": "Een valse zet"},
        {"en": "Castling", "es": "Enroque", "de": "Rochade", "nl": "Rokade"},
        {"en": "A draw offer", "es": "Una oferta de tablas", "de": "Ein Remisangebot", "nl": "Een remise aanbod"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A decoy is a tactic that forces an enemy piece to move to a square where it can be exploited.",
        "es": "Un señuelo es una táctica que fuerza a una pieza enemiga a moverse a una casilla donde puede ser explotada.",
        "de": "Ein Köder ist eine Taktik, die eine gegnerische Figur zwingt, auf ein Feld zu ziehen, wo sie ausgenutzt werden kann.",
        "nl": "Een lokvogel is een tactiek die een vijandelijk stuk dwingt naar een veld te gaan waar het uitgebuit kan worden."
      }
    },
    {
      "question": {
        "en": "What is overloading in chess?",
        "es": "¿Qué es la sobrecarga en ajedrez?",
        "de": "Was ist Überlastung im Schach?",
        "nl": "Wat is overbelasting bij schaken?"
      },
      "options": [
        {"en": "When a piece defends too many things at once", "es": "Cuando una pieza defiende demasiadas cosas a la vez", "de": "Wenn eine Figur zu viele Dinge gleichzeitig verteidigt", "nl": "Wanneer een stuk te veel dingen tegelijk verdedigt"},
        {"en": "Having too many pieces", "es": "Tener demasiadas piezas", "de": "Zu viele Figuren haben", "nl": "Te veel stukken hebben"},
        {"en": "A type of opening", "es": "Un tipo de apertura", "de": "Eine Art Eröffnung", "nl": "Een soort opening"},
        {"en": "Promoting all pawns", "es": "Promover todos los peones", "de": "Alle Bauern umwandeln", "nl": "Alle pionnen promoveren"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Overloading occurs when a piece has too many defensive duties and cannot fulfill them all.",
        "es": "La sobrecarga ocurre cuando una pieza tiene demasiadas tareas defensivas y no puede cumplirlas todas.",
        "de": "Überlastung tritt auf, wenn eine Figur zu viele Verteidigungsaufgaben hat und nicht alle erfüllen kann.",
        "nl": "Overbelasting treedt op wanneer een stuk te veel verdedigingstaken heeft en ze niet allemaal kan vervullen."
      }
    },
    {
      "question": {
        "en": "What is the King's Gambit?",
        "es": "¿Qué es el Gambito de Rey?",
        "de": "Was ist das Königsgambit?",
        "nl": "Wat is het Koningsgambiet?"
      },
      "options": [
        {"en": "1.e4 e5 2.f4", "es": "1.e4 e5 2.f4", "de": "1.e4 e5 2.f4", "nl": "1.e4 e5 2.f4"},
        {"en": "1.d4 d5 2.c4", "es": "1.d4 d5 2.c4", "de": "1.d4 d5 2.c4", "nl": "1.d4 d5 2.c4"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.Nf3", "es": "1.Cf3", "de": "1.Sf3", "nl": "1.Pf3"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The King's Gambit is an aggressive opening where White sacrifices the f-pawn with 1.e4 e5 2.f4.",
        "es": "El Gambito de Rey es una apertura agresiva donde las blancas sacrifican el peón f con 1.e4 e5 2.f4.",
        "de": "Das Königsgambit ist eine aggressive Eröffnung, bei der Weiß den f-Bauern mit 1.e4 e5 2.f4 opfert.",
        "nl": "Het Koningsgambiet is een agressieve opening waarbij wit de f-pion offert met 1.e4 e5 2.f4."
      }
    },
    {
      "question": {
        "en": "What is the Benoni Defense?",
        "es": "¿Qué es la Defensa Benoni?",
        "de": "Was ist die Benoni-Verteidigung?",
        "nl": "Wat is de Benoni verdediging?"
      },
      "options": [
        {"en": "1.d4 Nf6 2.c4 c5", "es": "1.d4 Cf6 2.c4 c5", "de": "1.d4 Sf6 2.c4 c5", "nl": "1.d4 Pf6 2.c4 c5"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.Nf3", "es": "1.Cf3", "de": "1.Sf3", "nl": "1.Pf3"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Benoni Defense features an early ...c5 to challenge White's center and create imbalanced positions.",
        "es": "La Defensa Benoni presenta un temprano ...c5 para desafiar el centro de las blancas y crear posiciones desequilibradas.",
        "de": "Die Benoni-Verteidigung zeichnet sich durch ein frühes ...c5 aus, um Weiß' Zentrum herauszufordern.",
        "nl": "De Benoni verdediging kenmerkt zich door een vroege ...c5 om wits centrum uit te dagen."
      }
    },
    {
      "question": {
        "en": "What is a Zwischenzug?",
        "es": "¿Qué es un Zwischenzug?",
        "de": "Was ist ein Zwischenzug?",
        "nl": "Wat is een Zwischenzug?"
      },
      "options": [
        {"en": "An intermediate move before an expected recapture", "es": "Un movimiento intermedio antes de una recaptura esperada", "de": "Ein Zwischenzug vor einem erwarteten Rückschlag", "nl": "Een tussenzet voor een verwachte terugslag"},
        {"en": "A German opening", "es": "Una apertura alemana", "de": "Eine deutsche Eröffnung", "nl": "Een Duitse opening"},
        {"en": "Castling", "es": "Enroque", "de": "Rochade", "nl": "Rokade"},
        {"en": "A draw", "es": "Tablas", "de": "Remis", "nl": "Remise"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Zwischenzug (intermediate move) is a move played before an expected recapture to gain an advantage.",
        "es": "Zwischenzug (movimiento intermedio) es un movimiento jugado antes de una recaptura esperada para ganar ventaja.",
        "de": "Ein Zwischenzug ist ein Zug vor einem erwarteten Rückschlag, um einen Vorteil zu erlangen.",
        "nl": "Zwischenzug (tussenzet) is een zet gespeeld voor een verwachte terugslag om voordeel te behalen."
      }
    },
    {
      "question": {
        "en": "What is the Dragon Variation?",
        "es": "¿Qué es la Variante del Dragón?",
        "de": "Was ist die Drachenvariante?",
        "nl": "Wat is de Drakenvariant?"
      },
      "options": [
        {"en": "A sharp line in the Sicilian Defense with ...g6", "es": "Una línea aguda en la Defensa Siciliana con ...g6", "de": "Eine scharfe Variante in der Sizilianischen Verteidigung mit ...g6", "nl": "Een scherpe lijn in de Siciliaanse verdediging met ...g6"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "A type of endgame", "es": "Un tipo de final", "de": "Eine Art Endspiel", "nl": "Een soort eindspel"},
        {"en": "Castling queenside", "es": "Enroque largo", "de": "Lange Rochade", "nl": "Lange rokade"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Dragon Variation is a sharp line in the Sicilian where Black fianchettoes the kingside bishop.",
        "es": "La Variante del Dragón es una línea aguda en la Siciliana donde las negras hacen fianchetto del alfil del flanco de rey.",
        "de": "Die Drachenvariante ist eine scharfe Variante in der Sizilianischen, wo Schwarz den Königsläufer fianchettiert.",
        "nl": "De Drakenvariant is een scherpe lijn in de Siciliaanse waar zwart de koningsloper fianchetteert."
      }
    },
    {
      "question": {
        "en": "What is a pawn break?",
        "es": "¿Qué es una ruptura de peones?",
        "de": "Was ist ein Bauernbruch?",
        "nl": "Wat is een pionnenbreuk?"
      },
      "options": [
        {"en": "A pawn advance that opens lines and changes the pawn structure", "es": "Un avance de peón que abre líneas y cambia la estructura de peones", "de": "Ein Bauernvorstoß der Linien öffnet und die Bauernstruktur ändert", "nl": "Een pionopmars die lijnen opent en de pionnenstructuur verandert"},
        {"en": "A broken pawn", "es": "Un peón roto", "de": "Ein gebrochener Bauer", "nl": "Een gebroken pion"},
        {"en": "Promoting a pawn", "es": "Promover un peón", "de": "Einen Bauern umwandeln", "nl": "Een pion promoveren"},
        {"en": "Losing a pawn", "es": "Perder un peón", "de": "Einen Bauern verlieren", "nl": "Een pion verliezen"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A pawn break is a pawn advance that challenges the opponent's pawn structure and opens lines.",
        "es": "Una ruptura de peones es un avance de peón que desafía la estructura de peones del oponente y abre líneas.",
        "de": "Ein Bauernbruch ist ein Bauernvorstoß, der die gegnerische Bauernstruktur herausfordert und Linien öffnet.",
        "nl": "Een pionnenbreuk is een pionopmars die de pionnenstructuur van de tegenstander uitdaagt en lijnen opent."
      }
    },
    {
      "question": {
        "en": "What is the Bird's Opening?",
        "es": "¿Qué es la Apertura Bird?",
        "de": "Was ist die Bird-Eröffnung?",
        "nl": "Wat is de Bird opening?"
      },
      "options": [
        {"en": "1.f4", "es": "1.f4", "de": "1.f4", "nl": "1.f4"},
        {"en": "1.e4", "es": "1.e4", "de": "1.e4", "nl": "1.e4"},
        {"en": "1.d4", "es": "1.d4", "de": "1.d4", "nl": "1.d4"},
        {"en": "1.c4", "es": "1.c4", "de": "1.c4", "nl": "1.c4"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Bird's Opening starts with 1.f4, controlling e5 and often leading to Dutch Defense reversed positions.",
        "es": "La Apertura Bird comienza con 1.f4, controlando e5 y a menudo llevando a posiciones de Defensa Holandesa invertida.",
        "de": "Die Bird-Eröffnung beginnt mit 1.f4, kontrolliert e5 und führt oft zu umgekehrten Holländisch-Stellungen.",
        "nl": "De Bird opening begint met 1.f4, controleert e5 en leidt vaak tot omgekeerde Nederlandse posities."
      }
    },
    {
      "question": {
        "en": "What is perpetual check?",
        "es": "¿Qué es el jaque perpetuo?",
        "de": "Was ist Dauerschach?",
        "nl": "Wat is eeuwig schaak?"
      },
      "options": [
        {"en": "Continuous checks that force a draw", "es": "Jaques continuos que fuerzan tablas", "de": "Fortgesetzte Schachs die ein Remis erzwingen", "nl": "Voortdurende schaakjes die remise forceren"},
        {"en": "A type of checkmate", "es": "Un tipo de jaque mate", "de": "Eine Art Schachmatt", "nl": "Een soort schaakmat"},
        {"en": "The first check", "es": "El primer jaque", "de": "Das erste Schach", "nl": "Het eerste schaak"},
        {"en": "Checking with a pawn", "es": "Jaque con un peón", "de": "Schach mit einem Bauern", "nl": "Schaak met een pion"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Perpetual check is a drawing mechanism where one player gives continuous checks that cannot be escaped.",
        "es": "El jaque perpetuo es un mecanismo de tablas donde un jugador da jaques continuos que no pueden ser evitados.",
        "de": "Dauerschach ist ein Remismechanismus, bei dem ein Spieler fortgesetzte Schachs gibt, die nicht verhindert werden können.",
        "nl": "Eeuwig schaak is een remisemechanisme waarbij één speler voortdurende schaakjes geeft die niet kunnen worden voorkomen."
      }
    },
    {
      "question": {
        "en": "What is the Catalan Opening?",
        "es": "¿Qué es la Apertura Catalana?",
        "de": "Was ist die Katalanische Eröffnung?",
        "nl": "Wat is de Catalaanse opening?"
      },
      "options": [
        {"en": "1.d4 Nf6 2.c4 e6 3.g3", "es": "1.d4 Cf6 2.c4 e6 3.g3", "de": "1.d4 Sf6 2.c4 e6 3.g3", "nl": "1.d4 Pf6 2.c4 e6 3.g3"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.Nf3", "es": "1.Cf3", "de": "1.Sf3", "nl": "1.Pf3"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Catalan Opening combines d4 and c4 with a fianchettoed kingside bishop.",
        "es": "La Apertura Catalana combina d4 y c4 con un alfil del flanco de rey en fianchetto.",
        "de": "Die Katalanische Eröffnung kombiniert d4 und c4 mit einem fianchettierten Königsläufer.",
        "nl": "De Catalaanse opening combineert d4 en c4 met een gefianchetteerde koningsloper."
      }
    },
    {
      "question": {
        "en": "What is a backward move in chess?",
        "es": "¿Qué es un movimiento hacia atrás en ajedrez?",
        "de": "Was ist ein Rückwärtszug im Schach?",
        "nl": "Wat is een achterwaartse zet bij schaken?"
      },
      "options": [
        {"en": "Only pawns cannot move backwards", "es": "Solo los peones no pueden moverse hacia atrás", "de": "Nur Bauern können nicht rückwärts ziehen", "nl": "Alleen pionnen kunnen niet achteruit"},
        {"en": "All pieces can move backwards", "es": "Todas las piezas pueden moverse hacia atrás", "de": "Alle Figuren können rückwärts ziehen", "nl": "Alle stukken kunnen achteruit"},
        {"en": "No pieces can move backwards", "es": "Ninguna pieza puede moverse hacia atrás", "de": "Keine Figur kann rückwärts ziehen", "nl": "Geen stukken kunnen achteruit"},
        {"en": "Only the king moves backwards", "es": "Solo el rey se mueve hacia atrás", "de": "Nur der König zieht rückwärts", "nl": "Alleen de koning beweegt achteruit"}
      ],
      "correct": 0,
      "explanation": {
        "en": "In chess, all pieces except pawns can move backwards. Pawns can only move forward.",
        "es": "En ajedrez, todas las piezas excepto los peones pueden moverse hacia atrás. Los peones solo pueden avanzar.",
        "de": "Im Schach können alle Figuren außer Bauern rückwärts ziehen. Bauern können nur vorwärts ziehen.",
        "nl": "Bij schaken kunnen alle stukken behalve pionnen achteruit bewegen. Pionnen kunnen alleen vooruit."
      }
    },
    {
      "question": {
        "en": "What is the Evans Gambit?",
        "es": "¿Qué es el Gambito Evans?",
        "de": "Was ist das Evans-Gambit?",
        "nl": "Wat is het Evans Gambiet?"
      },
      "options": [
        {"en": "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4", "es": "1.e4 e5 2.Cf3 Cc6 3.Ac4 Ac5 4.b4", "de": "1.e4 e5 2.Sf3 Sc6 3.Lc4 Lc5 4.b4", "nl": "1.e4 e5 2.Pf3 Pc6 3.Lc4 Lc5 4.b4"},
        {"en": "1.d4 d5 2.c4", "es": "1.d4 d5 2.c4", "de": "1.d4 d5 2.c4", "nl": "1.d4 d5 2.c4"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.Nf3", "es": "1.Cf3", "de": "1.Sf3", "nl": "1.Pf3"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Evans Gambit is an aggressive line in the Italian Game where White sacrifices the b4 pawn for rapid development.",
        "es": "El Gambito Evans es una línea agresiva en el Juego Italiano donde las blancas sacrifican el peón b4 por desarrollo rápido.",
        "de": "Das Evans-Gambit ist eine aggressive Variante der Italienischen Partie, wo Weiß den b4-Bauern für schnelle Entwicklung opfert.",
        "nl": "Het Evans Gambiet is een agressieve lijn in het Italiaans waar wit de b4-pion offert voor snelle ontwikkeling."
      }
    },
    {
      "question": {
        "en": "What is a pawn island?",
        "es": "¿Qué es una isla de peones?",
        "de": "Was ist eine Bauerninsel?",
        "nl": "Wat is een pionneneiland?"
      },
      "options": [
        {"en": "A group of connected pawns separated from other pawns", "es": "Un grupo de peones conectados separados de otros peones", "de": "Eine Gruppe verbundener Bauern getrennt von anderen Bauern", "nl": "Een groep verbonden pionnen gescheiden van andere pionnen"},
        {"en": "A single pawn", "es": "Un solo peón", "de": "Ein einzelner Bauer", "nl": "Een enkele pion"},
        {"en": "Pawns on the edge", "es": "Peones en el borde", "de": "Bauern am Rand", "nl": "Pionnen aan de rand"},
        {"en": "All pawns together", "es": "Todos los peones juntos", "de": "Alle Bauern zusammen", "nl": "Alle pionnen samen"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A pawn island is a group of connected pawns separated from other pawns. Fewer islands usually means better pawn structure.",
        "es": "Una isla de peones es un grupo de peones conectados separados de otros peones. Menos islas generalmente significa mejor estructura.",
        "de": "Eine Bauerninsel ist eine Gruppe verbundener Bauern getrennt von anderen. Weniger Inseln bedeuten meist eine bessere Struktur.",
        "nl": "Een pionneneiland is een groep verbonden pionnen gescheiden van anderen. Minder eilanden betekent meestal een betere structuur."
      }
    },
    {
      "question": {
        "en": "What is the Petroff Defense?",
        "es": "¿Qué es la Defensa Petrov?",
        "de": "Was ist die Russische Verteidigung?",
        "nl": "Wat is de Russische verdediging?"
      },
      "options": [
        {"en": "1.e4 e5 2.Nf3 Nf6", "es": "1.e4 e5 2.Cf3 Cf6", "de": "1.e4 e5 2.Sf3 Sf6", "nl": "1.e4 e5 2.Pf3 Pf6"},
        {"en": "1.d4 d5", "es": "1.d4 d5", "de": "1.d4 d5", "nl": "1.d4 d5"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.e4 e6", "es": "1.e4 e6", "de": "1.e4 e6", "nl": "1.e4 e6"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Petroff Defense (Russian Defense) is 1.e4 e5 2.Nf3 Nf6, counterattacking White's e4 pawn.",
        "es": "La Defensa Petrov (Defensa Rusa) es 1.e4 e5 2.Cf3 Cf6, contraatacando el peón e4 de las blancas.",
        "de": "Die Russische Verteidigung ist 1.e4 e5 2.Sf3 Sf6 und greift Weiß' e4-Bauern an.",
        "nl": "De Russische verdediging is 1.e4 e5 2.Pf3 Pf6, een tegenaanval op wits e4-pion."
      }
    },
    {
      "question": {
        "en": "What is the rule of the square?",
        "es": "¿Qué es la regla del cuadrado?",
        "de": "Was ist die Quadratregel?",
        "nl": "Wat is de regel van het vierkant?"
      },
      "options": [
        {"en": "A method to determine if a king can catch a passed pawn", "es": "Un método para determinar si un rey puede alcanzar un peón pasado", "de": "Eine Methode um zu bestimmen ob ein König einen Freibauern fangen kann", "nl": "Een methode om te bepalen of een koning een vrijpion kan vangen"},
        {"en": "The center squares", "es": "Las casillas centrales", "de": "Die Zentrumsfelder", "nl": "De centrale velden"},
        {"en": "A type of opening", "es": "Un tipo de apertura", "de": "Eine Art Eröffnung", "nl": "Een soort opening"},
        {"en": "Castling rules", "es": "Reglas del enroque", "de": "Rochaderegeln", "nl": "Rokaderegels"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The rule of the square helps determine if a king can catch a passed pawn by imagining a square from the pawn to the promotion rank.",
        "es": "La regla del cuadrado ayuda a determinar si un rey puede alcanzar un peón pasado imaginando un cuadrado desde el peón hasta la fila de promoción.",
        "de": "Die Quadratregel hilft zu bestimmen, ob ein König einen Freibauern fangen kann, indem man sich ein Quadrat vom Bauern zur Umwandlungsreihe vorstellt.",
        "nl": "De regel van het vierkant helpt bepalen of een koning een vrijpion kan vangen door een vierkant voor te stellen van de pion tot de promotierij."
      }
    },
    {
      "question": {
        "en": "What is the Two Knights Defense?",
        "es": "¿Qué es la Defensa de los Dos Caballos?",
        "de": "Was ist die Zweispringerspiel-Verteidigung?",
        "nl": "Wat is de Tweepaardenspel verdediging?"
      },
      "options": [
        {"en": "1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6", "es": "1.e4 e5 2.Cf3 Cc6 3.Ac4 Cf6", "de": "1.e4 e5 2.Sf3 Sc6 3.Lc4 Sf6", "nl": "1.e4 e5 2.Pf3 Pc6 3.Lc4 Pf6"},
        {"en": "1.d4 d5 2.c4", "es": "1.d4 d5 2.c4", "de": "1.d4 d5 2.c4", "nl": "1.d4 d5 2.c4"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.Nf3 Nf6", "es": "1.Cf3 Cf6", "de": "1.Sf3 Sf6", "nl": "1.Pf3 Pf6"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Two Knights Defense arises after 1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6, developing both knights before bishops.",
        "es": "La Defensa de los Dos Caballos surge después de 1.e4 e5 2.Cf3 Cc6 3.Ac4 Cf6, desarrollando ambos caballos antes que los alfiles.",
        "de": "Die Zweispringerspiel-Verteidigung entsteht nach 1.e4 e5 2.Sf3 Sc6 3.Lc4 Sf6, beide Springer werden vor den Läufern entwickelt.",
        "nl": "De Tweepaardenspel verdediging ontstaat na 1.e4 e5 2.Pf3 Pc6 3.Lc4 Pf6, beide paarden worden voor de lopers ontwikkeld."
      }
    },
    {
      "question": {
        "en": "What is a smothered mate?",
        "es": "¿Qué es un mate ahogado?",
        "de": "Was ist ein ersticktes Matt?",
        "nl": "Wat is een verstikkingsmat?"
      },
      "options": [
        {"en": "Checkmate where the king is blocked by its own pieces", "es": "Jaque mate donde el rey está bloqueado por sus propias piezas", "de": "Schachmatt wo der König von eigenen Figuren blockiert ist", "nl": "Schaakmat waarbij de koning geblokkeerd is door eigen stukken"},
        {"en": "Any quick checkmate", "es": "Cualquier jaque mate rápido", "de": "Jedes schnelle Schachmatt", "nl": "Elke snelle schaakmat"},
        {"en": "Checkmate with a pawn", "es": "Jaque mate con un peón", "de": "Schachmatt mit einem Bauern", "nl": "Schaakmat met een pion"},
        {"en": "Stalemate", "es": "Ahogado", "de": "Patt", "nl": "Pat"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A smothered mate is a checkmate delivered by a knight where the enemy king is surrounded by its own pieces.",
        "es": "Un mate ahogado es un jaque mate dado por un caballo donde el rey enemigo está rodeado por sus propias piezas.",
        "de": "Ein ersticktes Matt ist ein Schachmatt durch einen Springer, wo der gegnerische König von eigenen Figuren umgeben ist.",
        "nl": "Een verstikkingsmat is een schaakmat gegeven door een paard waarbij de vijandelijke koning omringd is door eigen stukken."
      }
    },
    {
      "question": {
        "en": "What is the Philidor Defense?",
        "es": "¿Qué es la Defensa Philidor?",
        "de": "Was ist die Philidor-Verteidigung?",
        "nl": "Wat is de Philidor verdediging?"
      },
      "options": [
        {"en": "1.e4 e5 2.Nf3 d6", "es": "1.e4 e5 2.Cf3 d6", "de": "1.e4 e5 2.Sf3 d6", "nl": "1.e4 e5 2.Pf3 d6"},
        {"en": "1.d4 d5", "es": "1.d4 d5", "de": "1.d4 d5", "nl": "1.d4 d5"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.e4 e6", "es": "1.e4 e6", "de": "1.e4 e6", "nl": "1.e4 e6"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Philidor Defense is 1.e4 e5 2.Nf3 d6, creating a solid but somewhat passive position.",
        "es": "La Defensa Philidor es 1.e4 e5 2.Cf3 d6, creando una posición sólida pero algo pasiva.",
        "de": "Die Philidor-Verteidigung ist 1.e4 e5 2.Sf3 d6 und schafft eine solide aber etwas passive Position.",
        "nl": "De Philidor verdediging is 1.e4 e5 2.Pf3 d6, wat een solide maar wat passieve positie creëert."
      }
    },
    {
      "question": {
        "en": "What is a connected passed pawn?",
        "es": "¿Qué es un peón pasado conectado?",
        "de": "Was sind verbundene Freibauern?",
        "nl": "Wat zijn verbonden vrijpionnen?"
      },
      "options": [
        {"en": "Passed pawns on adjacent files that protect each other", "es": "Peones pasados en columnas adyacentes que se protegen mutuamente", "de": "Freibauern auf benachbarten Linien die sich gegenseitig schützen", "nl": "Vrijpionnen op aangrenzende lijnen die elkaar beschermen"},
        {"en": "A single passed pawn", "es": "Un solo peón pasado", "de": "Ein einzelner Freibauer", "nl": "Een enkele vrijpion"},
        {"en": "Doubled pawns", "es": "Peones doblados", "de": "Doppelbauern", "nl": "Dubbele pionnen"},
        {"en": "Isolated pawns", "es": "Peones aislados", "de": "Isolierte Bauern", "nl": "Geïsoleerde pionnen"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Connected passed pawns are passed pawns on adjacent files that can protect each other, very powerful in endgames.",
        "es": "Los peones pasados conectados son peones pasados en columnas adyacentes que pueden protegerse mutuamente, muy poderosos en finales.",
        "de": "Verbundene Freibauern sind Freibauern auf benachbarten Linien die sich gegenseitig schützen können, sehr stark im Endspiel.",
        "nl": "Verbonden vrijpionnen zijn vrijpionnen op aangrenzende lijnen die elkaar kunnen beschermen, zeer krachtig in eindspelen."
      }
    },
    {
      "question": {
        "en": "What is the Blackmar-Diemer Gambit?",
        "es": "¿Qué es el Gambito Blackmar-Diemer?",
        "de": "Was ist das Blackmar-Diemer-Gambit?",
        "nl": "Wat is het Blackmar-Diemer Gambiet?"
      },
      "options": [
        {"en": "1.d4 d5 2.e4", "es": "1.d4 d5 2.e4", "de": "1.d4 d5 2.e4", "nl": "1.d4 d5 2.e4"},
        {"en": "1.e4 e5 2.f4", "es": "1.e4 e5 2.f4", "de": "1.e4 e5 2.f4", "nl": "1.e4 e5 2.f4"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.Nf3", "es": "1.Cf3", "de": "1.Sf3", "nl": "1.Pf3"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Blackmar-Diemer Gambit starts with 1.d4 d5 2.e4, sacrificing a pawn for rapid development and attack.",
        "es": "El Gambito Blackmar-Diemer comienza con 1.d4 d5 2.e4, sacrificando un peón por desarrollo rápido y ataque.",
        "de": "Das Blackmar-Diemer-Gambit beginnt mit 1.d4 d5 2.e4 und opfert einen Bauern für schnelle Entwicklung und Angriff.",
        "nl": "Het Blackmar-Diemer Gambiet begint met 1.d4 d5 2.e4, offert een pion voor snelle ontwikkeling en aanval."
      }
    },
    {
      "question": {
        "en": "What is the triangulation technique?",
        "es": "¿Qué es la técnica de triangulación?",
        "de": "Was ist die Dreiecks-Technik?",
        "nl": "Wat is de driehoekstechniek?"
      },
      "options": [
        {"en": "King maneuver to lose a tempo and gain opposition", "es": "Maniobra del rey para perder un tiempo y ganar oposición", "de": "Königsmanöver um ein Tempo zu verlieren und Opposition zu erlangen", "nl": "Koningsmanoeuvre om een tempo te verliezen en oppositie te krijgen"},
        {"en": "Three pieces attacking", "es": "Tres piezas atacando", "de": "Drei angreifende Figuren", "nl": "Drie aanvallende stukken"},
        {"en": "A pawn formation", "es": "Una formación de peones", "de": "Eine Bauernformation", "nl": "Een pionnenformatie"},
        {"en": "A type of opening", "es": "Un tipo de apertura", "de": "Eine Art Eröffnung", "nl": "Een soort opening"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Triangulation is a king maneuver in endgames to lose a tempo and force the opponent into zugzwang.",
        "es": "La triangulación es una maniobra del rey en finales para perder un tiempo y forzar al oponente al zugzwang.",
        "de": "Triangulation ist ein Königsmanöver im Endspiel um ein Tempo zu verlieren und den Gegner in Zugzwang zu bringen.",
        "nl": "Driehoek is een koningsmanoeuvre in eindspelen om een tempo te verliezen en de tegenstander in zugzwang te dwingen."
      }
    },
    {
      "question": {
        "en": "What is the Budapest Gambit?",
        "es": "¿Qué es el Gambito Budapest?",
        "de": "Was ist das Budapester Gambit?",
        "nl": "Wat is het Boedapest Gambiet?"
      },
      "options": [
        {"en": "1.d4 Nf6 2.c4 e5", "es": "1.d4 Cf6 2.c4 e5", "de": "1.d4 Sf6 2.c4 e5", "nl": "1.d4 Pf6 2.c4 e5"},
        {"en": "1.e4 e5 2.f4", "es": "1.e4 e5 2.f4", "de": "1.e4 e5 2.f4", "nl": "1.e4 e5 2.f4"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.Nf3", "es": "1.Cf3", "de": "1.Sf3", "nl": "1.Pf3"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Budapest Gambit is 1.d4 Nf6 2.c4 e5, sacrificing a pawn for quick development and piece activity.",
        "es": "El Gambito Budapest es 1.d4 Cf6 2.c4 e5, sacrificando un peón por desarrollo rápido y actividad de piezas.",
        "de": "Das Budapester Gambit ist 1.d4 Sf6 2.c4 e5 und opfert einen Bauern für schnelle Entwicklung und Figurenaktivität.",
        "nl": "Het Boedapest Gambiet is 1.d4 Pf6 2.c4 e5, offert een pion voor snelle ontwikkeling en stukactiviteit."
      }
    },
    {
      "question": {
        "en": "What is the maximum number of queens possible in a legal position?",
        "es": "¿Cuál es el número máximo de reinas posible en una posición legal?",
        "de": "Was ist die maximale Anzahl von Damen in einer legalen Position?",
        "nl": "Wat is het maximum aantal dames mogelijk in een legale positie?"
      },
      "options": [
        {"en": "18 (9 per side through promotion)", "es": "18 (9 por lado mediante promoción)", "de": "18 (9 pro Seite durch Umwandlung)", "nl": "18 (9 per kant door promotie)"},
        {"en": "2 (one per side)", "es": "2 (una por lado)", "de": "2 (eine pro Seite)", "nl": "2 (één per kant)"},
        {"en": "8", "es": "8", "de": "8", "nl": "8"},
        {"en": "16", "es": "16", "de": "16", "nl": "16"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Theoretically, each side can have 9 queens (1 original + 8 promoted pawns), totaling 18 queens maximum.",
        "es": "Teóricamente, cada lado puede tener 9 reinas (1 original + 8 peones promovidos), totalizando 18 reinas máximo.",
        "de": "Theoretisch kann jede Seite 9 Damen haben (1 Original + 8 umgewandelte Bauern), insgesamt maximal 18 Damen.",
        "nl": "Theoretisch kan elke kant 9 dames hebben (1 origineel + 8 gepromoveerde pionnen), totaal maximaal 18 dames."
      }
    },
    {
      "question": {
        "en": "What is the Scotch Game?",
        "es": "¿Qué es el Juego Escocés?",
        "de": "Was ist die Schottische Partie?",
        "nl": "Wat is het Schots spel?"
      },
      "options": [
        {"en": "1.e4 e5 2.Nf3 Nc6 3.d4", "es": "1.e4 e5 2.Cf3 Cc6 3.d4", "de": "1.e4 e5 2.Sf3 Sc6 3.d4", "nl": "1.e4 e5 2.Pf3 Pc6 3.d4"},
        {"en": "1.d4 d5 2.c4", "es": "1.d4 d5 2.c4", "de": "1.d4 d5 2.c4", "nl": "1.d4 d5 2.c4"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.c4", "es": "1.c4", "de": "1.c4", "nl": "1.c4"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Scotch Game is 1.e4 e5 2.Nf3 Nc6 3.d4, opening the center immediately.",
        "es": "El Juego Escocés es 1.e4 e5 2.Cf3 Cc6 3.d4, abriendo el centro inmediatamente.",
        "de": "Die Schottische Partie ist 1.e4 e5 2.Sf3 Sc6 3.d4 und öffnet sofort das Zentrum.",
        "nl": "Het Schots spel is 1.e4 e5 2.Pf3 Pc6 3.d4, opent het centrum onmiddellijk."
      }
    },
    {
      "question": {
        "en": "What is the French Defense?",
        "es": "¿Qué es la Defensa Francesa?",
        "de": "Was ist die Französische Verteidigung?",
        "nl": "Wat is de Franse verdediging?"
      },
      "options": [
        {"en": "1.e4 e6", "es": "1.e4 e6", "de": "1.e4 e6", "nl": "1.e4 e6"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.e4 d5", "es": "1.e4 d5", "de": "1.e4 d5", "nl": "1.e4 d5"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The French Defense starts with 1.e4 e6, preparing to challenge White's center with d5.",
        "es": "La Defensa Francesa comienza con 1.e4 e6, preparando desafiar el centro blanco con d5.",
        "de": "Die Französische Verteidigung beginnt mit 1.e4 e6 und bereitet d5 vor.",
        "nl": "De Franse verdediging begint met 1.e4 e6, voorbereidend om het witte centrum met d5 uit te dagen."
      }
    },
    {
      "question": {
        "en": "What is a discovered attack?",
        "es": "¿Qué es un ataque descubierto?",
        "de": "Was ist ein Abzugsangriff?",
        "nl": "Wat is een afgedekte aanval?"
      },
      "options": [
        {"en": "Moving a piece to reveal an attack from another piece", "es": "Mover una pieza para revelar un ataque de otra pieza", "de": "Eine Figur bewegen um einen Angriff einer anderen Figur aufzudecken", "nl": "Een stuk verplaatsen om een aanval van een ander stuk te onthullen"},
        {"en": "Finding a new move", "es": "Encontrar un nuevo movimiento", "de": "Einen neuen Zug finden", "nl": "Een nieuwe zet vinden"},
        {"en": "Attacking the king", "es": "Atacar al rey", "de": "Den König angreifen", "nl": "De koning aanvallen"},
        {"en": "Promoting a pawn", "es": "Promover un peón", "de": "Einen Bauern umwandeln", "nl": "Een pion promoveren"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A discovered attack occurs when moving one piece reveals an attack from another piece behind it.",
        "es": "Un ataque descubierto ocurre cuando mover una pieza revela un ataque de otra pieza detrás.",
        "de": "Ein Abzugsangriff entsteht, wenn das Bewegen einer Figur einen Angriff einer dahinter stehenden Figur aufdeckt.",
        "nl": "Een afgedekte aanval ontstaat wanneer het verplaatsen van een stuk een aanval van een ander stuk erachter onthult."
      }
    },
    {
      "question": {
        "en": "What is the Slav Defense?",
        "es": "¿Qué es la Defensa Eslava?",
        "de": "Was ist die Slawische Verteidigung?",
        "nl": "Wat is de Slavische verdediging?"
      },
      "options": [
        {"en": "1.d4 d5 2.c4 c6", "es": "1.d4 d5 2.c4 c6", "de": "1.d4 d5 2.c4 c6", "nl": "1.d4 d5 2.c4 c6"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.d4 Nf6", "es": "1.d4 Cf6", "de": "1.d4 Sf6", "nl": "1.d4 Pf6"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Slav Defense is 1.d4 d5 2.c4 c6, supporting the d5 pawn solidly.",
        "es": "La Defensa Eslava es 1.d4 d5 2.c4 c6, apoyando sólidamente el peón d5.",
        "de": "Die Slawische Verteidigung ist 1.d4 d5 2.c4 c6 und unterstützt den d5-Bauern solide.",
        "nl": "De Slavische verdediging is 1.d4 d5 2.c4 c6, ondersteunt de d5-pion stevig."
      }
    },
    {
      "question": {
        "en": "What is an X-ray in chess?",
        "es": "¿Qué es un rayo X en ajedrez?",
        "de": "Was ist ein Röntgenangriff im Schach?",
        "nl": "Wat is een röntgenaanval bij schaken?"
      },
      "options": [
        {"en": "Attacking through an enemy piece to a target behind it", "es": "Atacar a través de una pieza enemiga a un objetivo detrás", "de": "Durch eine gegnerische Figur auf ein Ziel dahinter angreifen", "nl": "Aanvallen door een vijandelijk stuk naar een doel erachter"},
        {"en": "A medical check", "es": "Un chequeo médico", "de": "Eine medizinische Untersuchung", "nl": "Een medische controle"},
        {"en": "Looking at the board", "es": "Mirar el tablero", "de": "Das Brett anschauen", "nl": "Naar het bord kijken"},
        {"en": "A draw offer", "es": "Una oferta de tablas", "de": "Ein Remisangebot", "nl": "Een remise aanbod"}
      ],
      "correct": 0,
      "explanation": {
        "en": "An X-ray is when a piece attacks or defends through an enemy piece, as if seeing through it.",
        "es": "Un rayo X es cuando una pieza ataca o defiende a través de una pieza enemiga, como si viera a través de ella.",
        "de": "Ein Röntgenangriff ist, wenn eine Figur durch eine gegnerische Figur hindurch angreift oder verteidigt.",
        "nl": "Een röntgenaanval is wanneer een stuk aanvalt of verdedigt door een vijandelijk stuk heen."
      }
    },
    {
      "question": {
        "en": "What is the Queen's Indian Defense?",
        "es": "¿Qué es la Defensa India de Dama?",
        "de": "Was ist die Damenindische Verteidigung?",
        "nl": "Wat is de Dame-Indische verdediging?"
      },
      "options": [
        {"en": "1.d4 Nf6 2.c4 e6 3.Nf3 b6", "es": "1.d4 Cf6 2.c4 e6 3.Cf3 b6", "de": "1.d4 Sf6 2.c4 e6 3.Sf3 b6", "nl": "1.d4 Pf6 2.c4 e6 3.Pf3 b6"},
        {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
        {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
        {"en": "1.d4 d5", "es": "1.d4 d5", "de": "1.d4 d5", "nl": "1.d4 d5"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Queen's Indian Defense features fianchettoing the queenside bishop to control e4.",
        "es": "La Defensa India de Dama presenta el fianchetto del alfil de dama para controlar e4.",
        "de": "Die Damenindische Verteidigung fianchettiert den Damenläufer zur Kontrolle von e4.",
        "nl": "De Dame-Indische verdediging fianchetteert de dameloper om e4 te controleren."
      }
    },
    {
      "question": {
        "en": "What is interference in chess?",
        "es": "¿Qué es la interferencia en ajedrez?",
        "de": "Was ist Interferenz im Schach?",
        "nl": "Wat is interferentie bij schaken?"
      },
      "options": [
        {"en": "Blocking communication between enemy pieces", "es": "Bloquear la comunicación entre piezas enemigas", "de": "Die Verbindung zwischen gegnerischen Figuren blockieren", "nl": "Communicatie tussen vijandelijke stukken blokkeren"},
        {"en": "Radio noise", "es": "Ruido de radio", "de": "Funkstörung", "nl": "Radio storing"},
        {"en": "Talking during play", "es": "Hablar durante el juego", "de": "Während des Spiels sprechen", "nl": "Praten tijdens het spel"},
        {"en": "Moving too fast", "es": "Mover demasiado rápido", "de": "Zu schnell ziehen", "nl": "Te snel zetten"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Interference occurs when a piece is placed to block the connection between enemy pieces.",
        "es": "La interferencia ocurre cuando se coloca una pieza para bloquear la conexión entre piezas enemigas.",
        "de": "Interferenz tritt auf, wenn eine Figur platziert wird, um die Verbindung zwischen gegnerischen Figuren zu blockieren.",
        "nl": "Interferentie treedt op wanneer een stuk wordt geplaatst om de verbinding tussen vijandelijke stukken te blokkeren."
      }
    },
    {
      "question": {
        "en": "What is the Lucena position?",
        "es": "¿Qué es la posición de Lucena?",
        "de": "Was ist die Lucena-Position?",
        "nl": "Wat is de Lucena positie?"
      },
      "options": [
        {"en": "A winning rook and pawn endgame technique", "es": "Una técnica ganadora de final de torre y peón", "de": "Eine gewinnende Turm- und Bauernendspiel-Technik", "nl": "Een winnende toren en pion eindspeltechniek"},
        {"en": "An opening", "es": "Una apertura", "de": "Eine Eröffnung", "nl": "Een opening"},
        {"en": "A draw", "es": "Tablas", "de": "Remis", "nl": "Remise"},
        {"en": "A stalemate", "es": "Ahogado", "de": "Patt", "nl": "Pat"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Lucena position is a fundamental winning technique in rook and pawn endgames, building a bridge.",
        "es": "La posición de Lucena es una técnica fundamental ganadora en finales de torre y peón, construyendo un puente.",
        "de": "Die Lucena-Position ist eine fundamentale Gewinntechnik in Turm- und Bauernendspielen mit Brückenbau.",
        "nl": "De Lucena positie is een fundamentele winnende techniek in toren- en pioneindspelen, met brugbouw."
      }
    },
    {
      "question": {
        "en": "What is a desperado piece?",
        "es": "¿Qué es una pieza desesperada?",
        "de": "Was ist eine Desperado-Figur?",
        "nl": "Wat is een desperado stuk?"
      },
      "options": [
        {"en": "A doomed piece that captures as much as possible before being taken", "es": "Una pieza condenada que captura lo máximo posible antes de ser tomada", "de": "Eine verlorene Figur die soviel wie möglich schlägt bevor sie genommen wird", "nl": "Een gedoemd stuk dat zoveel mogelijk slaat voordat het genomen wordt"},
        {"en": "A cowboy piece", "es": "Una pieza vaquera", "de": "Eine Cowboy-Figur", "nl": "Een cowboy stuk"},
        {"en": "A promoted pawn", "es": "Un peón promovido", "de": "Ein umgewandelter Bauer", "nl": "Een gepromoveerde pion"},
        {"en": "The king", "es": "El rey", "de": "Der König", "nl": "De koning"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A desperado is a piece that's going to be captured anyway, so it takes as much material as possible first.",
        "es": "Un desesperado es una pieza que será capturada de todos modos, así que toma tanto material como sea posible primero.",
        "de": "Ein Desperado ist eine Figur die sowieso geschlagen wird und daher vorher soviel Material wie möglich schlägt.",
        "nl": "Een desperado is een stuk dat toch geslagen wordt, dus slaat eerst zoveel mogelijk materiaal."
      }
    },
    {
      "question": {
        "en": "What is the Philidor position?",
        "es": "¿Qué es la posición de Philidor?",
        "de": "Was ist die Philidor-Position?",
        "nl": "Wat is de Philidor positie?"
      },
      "options": [
        {"en": "A defensive drawing technique in rook endgames", "es": "Una técnica defensiva de tablas en finales de torre", "de": "Eine defensive Remistechnik in Turmendspielen", "nl": "Een verdedigende remise techniek in toreneindspelen"},
        {"en": "An attacking formation", "es": "Una formación de ataque", "de": "Eine Angriffsformation", "nl": "Een aanvalsformatie"},
        {"en": "A chess opening", "es": "Una apertura de ajedrez", "de": "Eine Schacheröffnung", "nl": "Een schaakopening"},
        {"en": "A checkmate pattern", "es": "Un patrón de jaque mate", "de": "Ein Schachmattmuster", "nl": "Een schaakmat patroon"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Philidor position is a key defensive drawing technique in rook and pawn endgames.",
        "es": "La posición de Philidor es una técnica defensiva clave de tablas en finales de torre y peón.",
        "de": "Die Philidor-Position ist eine wichtige defensive Remistechnik in Turm- und Bauernendspielen.",
        "nl": "De Philidor positie is een belangrijke verdedigende remise techniek in toren- en pioneindspelen."
      }
    },
    {
      "question": {
        "en": "What does it mean to have the move?",
        "es": "¿Qué significa tener el turno?",
        "de": "Was bedeutet es, am Zug zu sein?",
        "nl": "Wat betekent het om aan zet te zijn?"
      },
      "options": [
        {"en": "It's your turn to play", "es": "Es tu turno de jugar", "de": "Du bist am Zug", "nl": "Het is jouw beurt om te zetten"},
        {"en": "You can castle", "es": "Puedes enrocar", "de": "Du kannst rochieren", "nl": "Je kunt rokeren"},
        {"en": "You have more pieces", "es": "Tienes más piezas", "de": "Du hast mehr Figuren", "nl": "Je hebt meer stukken"},
        {"en": "You are winning", "es": "Estás ganando", "de": "Du gewinnst", "nl": "Je staat voor"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Having the move simply means it's your turn to make a move on the board.",
        "es": "Tener el turno simplemente significa que es tu turno de hacer un movimiento en el tablero.",
        "de": "Am Zug zu sein bedeutet einfach, dass du an der Reihe bist, einen Zug zu machen.",
        "nl": "Aan zet zijn betekent simpelweg dat het jouw beurt is om een zet te doen."
      }
    },
    {
      "question": {
        "en": "What is a Greek gift sacrifice?",
        "es": "¿Qué es el sacrificio del regalo griego?",
        "de": "Was ist das griechische Geschenk?",
        "nl": "Wat is het Griekse geschenkoffer?"
      },
      "options": [
        {"en": "Bxh7+ sacrifice to attack the king", "es": "Sacrificio Axh7+ para atacar al rey", "de": "Lxh7+ Opfer zum Königsangriff", "nl": "Lxh7+ offer om de koning aan te vallen"},
        {"en": "A present from Greece", "es": "Un regalo de Grecia", "de": "Ein Geschenk aus Griechenland", "nl": "Een cadeau uit Griekenland"},
        {"en": "Trading queens", "es": "Intercambiar damas", "de": "Damen tauschen", "nl": "Dames ruilen"},
        {"en": "A pawn promotion", "es": "Una promoción de peón", "de": "Eine Bauernumwandlung", "nl": "Een pionpromotie"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Greek gift is a classic bishop sacrifice on h7 (or h2) to expose the enemy king to attack.",
        "es": "El regalo griego es un sacrificio clásico de alfil en h7 (o h2) para exponer al rey enemigo al ataque.",
        "de": "Das griechische Geschenk ist ein klassisches Läuferopfer auf h7 (oder h2) um den König anzugreifen.",
        "nl": "Het Griekse geschenk is een klassiek loperoffer op h7 (of h2) om de koning aan te vallen."
      }
    },
    {
      "question": {
        "en": "What are hanging pawns?",
        "es": "¿Qué son los peones colgantes?",
        "de": "Was sind hängende Bauern?",
        "nl": "Wat zijn hangende pionnen?"
      },
      "options": [
        {"en": "Two adjacent pawns without pawn support", "es": "Dos peones adyacentes sin apoyo de peones", "de": "Zwei benachbarte Bauern ohne Bauernunterstützung", "nl": "Twee aangrenzende pionnen zonder pionsteun"},
        {"en": "Pawns on ropes", "es": "Peones en cuerdas", "de": "Bauern an Seilen", "nl": "Pionnen aan touwen"},
        {"en": "Promoted pawns", "es": "Peones promovidos", "de": "Umgewandelte Bauern", "nl": "Gepromoveerde pionnen"},
        {"en": "Pawns in the center", "es": "Peones en el centro", "de": "Bauern im Zentrum", "nl": "Pionnen in het centrum"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Hanging pawns are two adjacent pawns on the same rank without pawn support, often on c4 and d4.",
        "es": "Los peones colgantes son dos peones adyacentes en la misma fila sin apoyo de peones, a menudo en c4 y d4.",
        "de": "Hängende Bauern sind zwei benachbarte Bauern auf derselben Reihe ohne Bauernunterstützung, oft auf c4 und d4.",
        "nl": "Hangende pionnen zijn twee aangrenzende pionnen op dezelfde rij zonder pionsteun, vaak op c4 en d4."
      }
    },
    {
      "question": {
        "en": "What is the Maroczy Bind?",
        "es": "¿Qué es la Atadura Maroczy?",
        "de": "Was ist die Maroczy-Fesselung?",
        "nl": "Wat is de Maroczy Bind?"
      },
      "options": [
        {"en": "Pawns on c4 and e4 restricting Black's play", "es": "Peones en c4 y e4 restringiendo el juego negro", "de": "Bauern auf c4 und e4 die Schwarz einschränken", "nl": "Pionnen op c4 en e4 die zwart beperken"},
        {"en": "A rope technique", "es": "Una técnica de cuerda", "de": "Eine Seiltechnik", "nl": "Een touwtechniek"},
        {"en": "A chess clock", "es": "Un reloj de ajedrez", "de": "Eine Schachuhr", "nl": "Een schaakklok"},
        {"en": "A tournament", "es": "Un torneo", "de": "Ein Turnier", "nl": "Een toernooi"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The Maroczy Bind is a pawn structure with white pawns on c4 and e4, restricting Black's pawn breaks.",
        "es": "La Atadura Maroczy es una estructura de peones con peones blancos en c4 y e4, restringiendo las rupturas negras.",
        "de": "Die Maroczy-Fesselung ist eine Bauernstruktur mit weißen Bauern auf c4 und e4, die schwarze Durchbrüche einschränkt.",
        "nl": "De Maroczy Bind is een pionnenstructuur met witte pionnen op c4 en e4, die zwarte doorbraken beperkt."
      }
    },
    {
      "question": {
        "en": "What is a fortress in chess?",
        "es": "¿Qué es una fortaleza en ajedrez?",
        "de": "Was ist eine Festung im Schach?",
        "nl": "Wat is een vesting bij schaken?"
      },
      "options": [
        {"en": "A defensive position that cannot be breached despite material disadvantage", "es": "Una posición defensiva que no puede ser penetrada a pesar de desventaja material", "de": "Eine defensive Position die trotz Materialnachteil nicht durchbrochen werden kann", "nl": "Een verdedigende positie die ondanks materiaal nadeel niet doorbroken kan worden"},
        {"en": "A castle", "es": "Un castillo", "de": "Eine Burg", "nl": "Een kasteel"},
        {"en": "The starting position", "es": "La posición inicial", "de": "Die Ausgangsstellung", "nl": "De startpositie"},
        {"en": "A chess club", "es": "Un club de ajedrez", "de": "Ein Schachclub", "nl": "Een schaakclub"}
      ],
      "correct": 0,
      "explanation": {
        "en": "A fortress is a defensive setup where the weaker side creates an impregnable position to hold a draw.",
        "es": "Una fortaleza es una configuración defensiva donde el lado más débil crea una posición impenetrable para mantener tablas.",
        "de": "Eine Festung ist eine defensive Aufstellung, in der die schwächere Seite eine uneinnehmbare Position zum Remis schafft.",
        "nl": "Een vesting is een verdedigende opstelling waar de zwakkere kant een onneembare positie creëert voor remise."
      }
    },
    {
      "question": {
        "en": "What is tempo in chess?",
        "es": "¿Qué es el tempo en ajedrez?",
        "de": "Was ist Tempo im Schach?",
        "nl": "Wat is tempo bij schaken?"
      },
      "options": [
        {"en": "A unit of time representing one move", "es": "Una unidad de tiempo que representa un movimiento", "de": "Eine Zeiteinheit die einen Zug darstellt", "nl": "Een tijdseenheid die één zet voorstelt"},
        {"en": "Music rhythm", "es": "Ritmo musical", "de": "Musikrhythmus", "nl": "Muziek ritme"},
        {"en": "Speed of play", "es": "Velocidad de juego", "de": "Spielgeschwindigkeit", "nl": "Speelsnelheid"},
        {"en": "Temperature", "es": "Temperatura", "de": "Temperatur", "nl": "Temperatuur"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Tempo is a turn or single move, gaining a tempo means making progress while forcing the opponent to respond.",
        "es": "El tempo es un turno o movimiento único, ganar un tempo significa progresar mientras se fuerza al oponente a responder.",
        "de": "Tempo ist ein Zug, ein Tempo gewinnen bedeutet Fortschritt machen während der Gegner reagieren muss.",
        "nl": "Tempo is een beurt of enkele zet, een tempo winnen betekent vooruitgang boeken terwijl de tegenstander moet reageren."
      }
    },
    {
      "question": {
        "en": "What is the algebraic notation for castling kingside?",
        "es": "¿Cuál es la notación algebraica para el enroque corto?",
        "de": "Was ist die algebraische Notation für die kurze Rochade?",
        "nl": "Wat is de algebraïsche notatie voor korte rokade?"
      },
      "options": [
        {"en": "0-0", "es": "0-0", "de": "0-0", "nl": "0-0"},
        {"en": "0-0-0", "es": "0-0-0", "de": "0-0-0", "nl": "0-0-0"},
        {"en": "K-R", "es": "R-T", "de": "K-T", "nl": "K-T"},
        {"en": "Kg1", "es": "Rg1", "de": "Kg1", "nl": "Kg1"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Kingside castling is written as 0-0 in algebraic notation, while queenside is 0-0-0.",
        "es": "El enroque corto se escribe como 0-0 en notación algebraica, mientras que el largo es 0-0-0.",
        "de": "Die kurze Rochade wird als 0-0 in algebraischer Notation geschrieben, die lange als 0-0-0.",
        "nl": "Korte rokade wordt geschreven als 0-0 in algebraïsche notatie, lange rokade als 0-0-0."
      }
    },
    {
      "question": {
        "en": "What is a blitz game?",
        "es": "¿Qué es una partida relámpago?",
        "de": "Was ist eine Blitzpartie?",
        "nl": "Wat is een blitzpartij?"
      },
      "options": [
        {"en": "A game with 3-5 minutes per player", "es": "Una partida con 3-5 minutos por jugador", "de": "Ein Spiel mit 3-5 Minuten pro Spieler", "nl": "Een partij met 3-5 minuten per speler"},
        {"en": "A very long game", "es": "Una partida muy larga", "de": "Ein sehr langes Spiel", "nl": "Een zeer lange partij"},
        {"en": "A drawn game", "es": "Una partida tablas", "de": "Eine Remispartie", "nl": "Een remise partij"},
        {"en": "A perfect game", "es": "Una partida perfecta", "de": "Ein perfektes Spiel", "nl": "Een perfecte partij"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Blitz chess typically gives each player 3 to 5 minutes for the entire game.",
        "es": "El ajedrez relámpago típicamente da a cada jugador 3 a 5 minutos para toda la partida.",
        "de": "Blitzschach gibt jedem Spieler typischerweise 3 bis 5 Minuten für die gesamte Partie.",
        "nl": "Blitzschaak geeft elke speler typisch 3 tot 5 minuten voor de hele partij."
      }
    },
    {
      "question": {
        "en": "What is the touch-move rule?",
        "es": "¿Qué es la regla de pieza tocada?",
        "de": "Was ist die Berührung-Zug-Regel?",
        "nl": "Wat is de aangeraakt-gezet regel?"
      },
      "options": [
        {"en": "If you touch a piece, you must move it", "es": "Si tocas una pieza, debes moverla", "de": "Wenn du eine Figur berührst, musst du sie ziehen", "nl": "Als je een stuk aanraakt, moet je het zetten"},
        {"en": "You can touch any piece", "es": "Puedes tocar cualquier pieza", "de": "Du kannst jede Figur berühren", "nl": "Je kunt elk stuk aanraken"},
        {"en": "Moving quickly", "es": "Mover rápidamente", "de": "Schnell ziehen", "nl": "Snel zetten"},
        {"en": "A type of opening", "es": "Un tipo de apertura", "de": "Eine Art Eröffnung", "nl": "Een soort opening"}
      ],
      "correct": 0,
      "explanation": {
        "en": "The touch-move rule states that if you deliberately touch a piece, you must move it if it has a legal move.",
        "es": "La regla de pieza tocada establece que si tocas deliberadamente una pieza, debes moverla si tiene un movimiento legal.",
        "de": "Die Berührung-Zug-Regel besagt, dass wenn du eine Figur absichtlich berührst, du sie ziehen musst wenn sie einen legalen Zug hat.",
        "nl": "De aangeraakt-gezet regel stelt dat als je opzettelijk een stuk aanraakt, je het moet zetten als het een legale zet heeft."
      }
    },
    {
      "question": {
        "en": "Who was the first official World Chess Champion?",
        "es": "¿Quién fue el primer Campeón Mundial oficial de Ajedrez?",
        "de": "Wer war der erste offizielle Schachweltmeister?",
        "nl": "Wie was de eerste officiële Wereldkampioen Schaken?"
      },
      "options": [
        {"en": "Wilhelm Steinitz", "es": "Wilhelm Steinitz", "de": "Wilhelm Steinitz", "nl": "Wilhelm Steinitz"},
        {"en": "Bobby Fischer", "es": "Bobby Fischer", "de": "Bobby Fischer", "nl": "Bobby Fischer"},
        {"en": "Garry Kasparov", "es": "Garry Kasparov", "de": "Garry Kasparov", "nl": "Garry Kasparov"},
        {"en": "Magnus Carlsen", "es": "Magnus Carlsen", "de": "Magnus Carlsen", "nl": "Magnus Carlsen"}
      ],
      "correct": 0,
      "explanation": {
        "en": "Wilhelm Steinitz became the first official World Chess Champion in 1886.",
        "es": "Wilhelm Steinitz se convirtió en el primer Campeón Mundial oficial de Ajedrez en 1886.",
        "de": "Wilhelm Steinitz wurde 1886 der erste offizielle Schachweltmeister.",
        "nl": "Wilhelm Steinitz werd in 1886 de eerste officiële Wereldkampioen Schaken."
      }
    },
    {
      "question": {
        "en": "What is an isolated pawn?",
        "es": "¿Qué es un peón aislado?",
        "de": "Was ist ein isolierter Bauer?",
        "nl": "Wat is een geïsoleerde pion?"
      },
      "options": [
        {"en": "A pawn with no friendly pawns on adjacent files", "es": "Un peón sin peones amigos en columnas adyacentes", "de": "Ein Bauer ohne eigene Bauern auf benachbarten Linien", "nl": "Een pion zonder vriendelijke pionnen op aangrenzende lijnen"},
        {"en": "A lonely pawn", "es": "Un peón solitario", "de": "Ein einsamer Bauer", "nl": "Een eenzame pion"},
        {"en": "A pawn on an island", "es": "Un peón en una isla", "de": "Ein Bauer auf einer Insel", "nl": "Een pion op een eiland"},
        {"en": "The last pawn", "es": "El último peón", "de": "Der letzte Bauer", "nl": "De laatste pion"}
      ],
      "correct": 0,
      "explanation": {
        "en": "An isolated pawn has no friendly pawns on adjacent files and cannot be defended by other pawns.",
        "es": "Un peón aislado no tiene peones amigos en columnas adyacentes y no puede ser defendido por otros peones.",
        "de": "Ein isolierter Bauer hat keine eigenen Bauern auf benachbarten Linien und kann nicht von anderen Bauern verteidigt werden.",
        "nl": "Een geïsoleerde pion heeft geen vriendelijke pionnen op aangrenzende lijnen en kan niet door andere pionnen verdedigd worden."
      }
    }
  ]
};