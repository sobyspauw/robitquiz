// Quiz Template - Level 1: Bord spelletjes - Schaken
(function() {
  const level1 = {
    name: {
      en: "Chess - Beginner",
      es: "Ajedrez - Principiante",
      de: "Schach - Anfänger",
      nl: "Schaken - Beginner"
    },
    questions: [
      {
        question: {
          en: "How many squares are there on a chess board?",
          es: "¿Cuántas casillas hay en un tablero de ajedrez?",
          de: "Wie viele Felder hat ein Schachbrett?",
          nl: "Hoeveel vakjes zijn er op een schaakbord?"
        },
        options: [
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "48", es: "48", de: "48", nl: "48" },
          { en: "64", es: "64", de: "64", nl: "64" },
          { en: "81", es: "81", de: "81", nl: "81" }
        ],
        correct: 2,
        explanation: {
          en: "A chess board has 64 squares arranged in an 8x8 grid, alternating between light and dark colors.",
          es: "Un tablero de ajedrez tiene 64 casillas dispuestas en una cuadrícula de 8x8, alternando entre colores claros y oscuros.",
          de: "Ein Schachbrett hat 64 Felder in einem 8x8-Gitter angeordnet, abwechselnd in hellen und dunklen Farben.",
          nl: "Een schaakbord heeft 64 vakjes gerangschikt in een 8x8 rooster, afwisselend tussen lichte en donkere kleuren."
        }
      },
      {
        question: {
          en: "Which piece can only move diagonally?",
          es: "¿Qué pieza solo puede moverse diagonalmente?",
          de: "Welche Figur kann sich nur diagonal bewegen?",
          nl: "Welk stuk kan alleen diagonaal bewegen?"
        },
        options: [
          { en: "Rook", es: "Torre", de: "Turm", nl: "Toren" },
          { en: "Knight", es: "Caballo", de: "Springer", nl: "Paard" },
          { en: "Bishop", es: "Alfil", de: "Läufer", nl: "Loper" },
          { en: "Queen", es: "Reina", de: "Dame", nl: "Koningin" }
        ],
        correct: 2,
        explanation: {
          en: "The bishop can only move diagonally across the board, any number of squares, but cannot jump over other pieces.",
          es: "El alfil solo puede moverse diagonalmente a través del tablero, cualquier número de casillas, pero no puede saltar sobre otras piezas.",
          de: "Der Läufer kann sich nur diagonal über das Brett bewegen, beliebig viele Felder, aber nicht über andere Figuren springen.",
          nl: "De loper kan alleen diagonaal over het bord bewegen, elk aantal vakjes, maar kan niet over andere stukken springen."
        }
      },
      {
        question: {
          en: "What is the objective of chess?",
          es: "¿Cuál es el objetivo del ajedrez?",
          de: "Was ist das Ziel beim Schach?",
          nl: "Wat is het doel van schaken?"
        },
        options: [
          { en: "Capture all opponent's pieces", es: "Capturar todas las piezas del oponente", de: "Alle gegnerischen Figuren schlagen", nl: "Alle stukken van de tegenstander slaan" },
          { en: "Checkmate the opponent's king", es: "Dar jaque mate al rey del oponente", de: "Den gegnerischen König schachmatt setzen", nl: "De koning van de tegenstander schaakmat zetten" },
          { en: "Reach the other side with your king", es: "Llegar al otro lado con tu rey", de: "Mit dem König die andere Seite erreichen", nl: "De andere kant bereiken met je koning" },
          { en: "Control the center of the board", es: "Controlar el centro del tablero", de: "Das Zentrum des Bretts kontrollieren", nl: "Het centrum van het bord controleren" }
        ],
        correct: 1,
        explanation: {
          en: "The objective is to checkmate the opponent's king, meaning the king is in check and cannot escape capture on the next move.",
          es: "El objetivo es dar jaque mate al rey del oponente, lo que significa que el rey está en jaque y no puede escapar de la captura en el siguiente movimiento.",
          de: "Das Ziel ist es, den gegnerischen König schachmatt zu setzen, das bedeutet, der König steht im Schach und kann dem Schlagen im nächsten Zug nicht entkommen.",
          nl: "Het doel is om de koning van de tegenstander schaakmat te zetten, wat betekent dat de koning schaak staat en niet kan ontsnappen aan het slaan in de volgende zet."
        }
      },
      {
        question: {
          en: "How does a knight move?",
          es: "¿Cómo se mueve un caballo?",
          de: "Wie bewegt sich ein Springer?",
          nl: "Hoe beweegt een paard?"
        },
        options: [
          { en: "Diagonally any number of squares", es: "Diagonalmente cualquier número de casillas", de: "Diagonal beliebig viele Felder", nl: "Diagonaal elk aantal vakjes" },
          { en: "L-shape: 2 squares + 1 perpendicular", es: "En forma de L: 2 casillas en una dirección, 1 casilla perpendicular", de: "L-förmig: 2 Felder in eine Richtung, 1 Feld senkrecht", nl: "In een L-vorm: 2 vakjes in één richting, 1 vakje loodrecht" },
          { en: "Horizontally or vertically any number of squares", es: "Horizontal o verticalmente cualquier número de casillas", de: "Horizontal oder vertikal beliebig viele Felder", nl: "Horizontaal of verticaal elk aantal vakjes" },
          { en: "One square in any direction", es: "Una casilla en cualquier dirección", de: "Ein Feld in jede Richtung", nl: "Één vakje in elke richting" }
        ],
        correct: 1,
        explanation: {
          en: "The knight moves in an L-shape: 2 squares in one direction (horizontal or vertical) and then 1 square perpendicular to that direction. It's the only piece that can jump over others.",
          es: "El caballo se mueve en forma de L: 2 casillas en una dirección (horizontal o vertical) y luego 1 casilla perpendicular a esa dirección. Es la única pieza que puede saltar sobre otras.",
          de: "Der Springer bewegt sich L-förmig: 2 Felder in eine Richtung (horizontal oder vertikal) und dann 1 Feld senkrecht zu dieser Richtung. Er ist die einzige Figur, die über andere springen kann.",
          nl: "Het paard beweegt in een L-vorm: 2 vakjes in één richting (horizontaal of verticaal) en dan 1 vakje loodrecht op die richting. Het is het enige stuk dat over anderen kan springen."
        }
      },
      {
        question: {
          en: "What is 'castling' in chess?",
          es: "¿Qué es el 'enroque' en ajedrez?",
          de: "Was ist 'Rochade' beim Schach?",
          nl: "Wat is 'rokeren' bij schaken?"
        },
        options: [
          { en: "Moving the king backwards", es: "Mover el rey hacia atrás", de: "Den König rückwärts bewegen", nl: "De koning achterwaarts bewegen" },
          { en: "Special king and rook move", es: "Un movimiento especial que involucra al rey y la torre", de: "Ein spezieller Zug mit König und Turm", nl: "Een speciale zet waarbij koning en toren betrokken zijn" },
          { en: "Promoting a pawn to a queen", es: "Promover un peón a reina", de: "Einen Bauern zur Dame befördern", nl: "Een pion promoveren tot koningin" },
          { en: "Capturing an enemy piece", es: "Capturar una pieza enemiga", de: "Eine gegnerische Figur schlagen", nl: "Een vijandelijk stuk slaan" }
        ],
        correct: 1,
        explanation: {
          en: "Castling is a special move where the king moves 2 squares toward a rook, and the rook moves to the square the king crossed. It can only be done under specific conditions.",
          es: "El enroque es un movimiento especial donde el rey se mueve 2 casillas hacia una torre, y la torre se mueve a la casilla que cruzó el rey. Solo se puede hacer bajo condiciones específicas.",
          de: "Die Rochade ist ein spezieller Zug, bei dem der König 2 Felder in Richtung eines Turms zieht und der Turm auf das Feld zieht, das der König überquert hat. Sie kann nur unter bestimmten Bedingungen ausgeführt werden.",
          nl: "Rokeren is een speciale zet waarbij de koning 2 vakjes naar een toren beweegt, en de toren naar het vakje beweegt dat de koning heeft overgestoken. Het kan alleen onder specifieke voorwaarden worden gedaan."
        }
      },
      {
        question: {
          en: "How many pieces does each player start with?",
          es: "¿Con cuántas piezas comienza cada jugador?",
          de: "Mit wie vielen Figuren beginnt jeder Spieler?",
          nl: "Met hoeveel stukken begint elke speler?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "18", es: "18", de: "18", nl: "18" }
        ],
        correct: 2,
        explanation: {
          en: "Each player starts with 16 pieces: 8 pawns, 2 rooks, 2 knights, 2 bishops, 1 queen, and 1 king.",
          es: "Cada jugador comienza con 16 piezas: 8 peones, 2 torres, 2 caballos, 2 alfiles, 1 reina y 1 rey.",
          de: "Jeder Spieler beginnt mit 16 Figuren: 8 Bauern, 2 Türme, 2 Springer, 2 Läufer, 1 Dame und 1 König.",
          nl: "Elke speler begint met 16 stukken: 8 pionnen, 2 torens, 2 paarden, 2 lopers, 1 koningin en 1 koning."
        }
      },
      {
        question: {
          en: "What is 'en passant'?",
          es: "¿Qué es 'en passant'?",
          de: "Was ist 'en passant'?",
          nl: "Wat is 'en passant'?"
        },
        options: [
          { en: "A special pawn capture", es: "Una captura especial de peón", de: "Ein spezieller Bauernschlag", nl: "Een speciale pionslag" },
          { en: "Moving two pieces at once", es: "Mover dos piezas a la vez", de: "Zwei Figuren gleichzeitig bewegen", nl: "Twee stukken tegelijk bewegen" },
          { en: "A type of checkmate", es: "Un tipo de jaque mate", de: "Eine Art Schachmatt", nl: "Een soort schaakmat" },
          { en: "Promoting a pawn", es: "Promover un peón", de: "Einen Bauern befördern", nl: "Een pion promoveren" }
        ],
        correct: 0,
        explanation: {
          en: "En passant is a special pawn capture that can occur when an opponent's pawn moves 2 squares forward from its starting position, landing next to your pawn.",
          es: "En passant es una captura especial de peón que puede ocurrir cuando el peón de un oponente se mueve 2 casillas hacia adelante desde su posición inicial, aterrizando junto a tu peón.",
          de: "En passant ist ein spezieller Bauernschlag, der auftreten kann, wenn der Bauer des Gegners 2 Felder vorwärts von seiner Startposition zieht und neben deinem Bauern landet.",
          nl: "En passant is een speciale pionslag die kan optreden wanneer de pion van een tegenstander 2 vakjes voorwaarts beweegt vanaf zijn startpositie, naast jouw pion landend."
        }
      },
      {
        question: {
          en: "Which piece is worth the most points in chess?",
          es: "¿Qué pieza vale más puntos en ajedrez?",
          de: "Welche Figur ist beim Schach die wertvollste?",
          nl: "Welk stuk is de meeste punten waard bij schaken?"
        },
        options: [
          { en: "Queen (9 points)", es: "Reina (9 puntos)", de: "Dame (9 Punkte)", nl: "Koningin (9 punten)" },
          { en: "Rook (5 points)", es: "Torre (5 puntos)", de: "Turm (5 Punkte)", nl: "Toren (5 punten)" },
          { en: "King (infinite)", es: "Rey (infinito)", de: "König (unendlich)", nl: "Koning (oneindig)" },
          { en: "Knight (3 points)", es: "Caballo (3 puntos)", de: "Springer (3 Punkte)", nl: "Paard (3 punten)" }
        ],
        correct: 2,
        explanation: {
          en: "The king is worth infinite points because losing it means losing the game. In terms of material value, the queen is worth 9 points, making it the most valuable piece that can be captured.",
          es: "El rey vale puntos infinitos porque perderlo significa perder el juego. En términos de valor material, la reina vale 9 puntos, convirtiéndola en la pieza más valiosa que puede ser capturada.",
          de: "Der König ist unendlich viele Punkte wert, weil ihn zu verlieren bedeutet, das Spiel zu verlieren. Materiell ist die Dame 9 Punkte wert und damit die wertvollste Figur, die geschlagen werden kann.",
          nl: "De koning is oneindige punten waard omdat hem verliezen betekent dat je het spel verliest. In termen van materiële waarde is de koningin 9 punten waard, waardoor het het meest waardevolle stuk is dat kan worden geslagen."
        }
      },
      {
        question: {
          en: "What happens when a pawn reaches the opposite end of the board?",
          es: "¿Qué pasa cuando un peón llega al extremo opuesto del tablero?",
          de: "Was passiert, wenn ein Bauer das gegenüberliegende Ende des Bretts erreicht?",
          nl: "Wat gebeurt er als een pion de andere kant van het bord bereikt?"
        },
        options: [
          { en: "It becomes a king", es: "Se convierte en rey", de: "Er wird zum König", nl: "Hij wordt een koning" },
          { en: "It is removed from the board", es: "Se retira del tablero", de: "Er wird vom Brett entfernt", nl: "Hij wordt van het bord weggenomen" },
          { en: "Promoted to any piece (except king)", es: "Puede ser promovido a cualquier pieza excepto rey", de: "Er kann zu jeder Figur außer König befördert werden", nl: "Hij kan worden gepromoveerd tot elk stuk behalve koning" },
          { en: "It moves backward", es: "Se mueve hacia atrás", de: "Er bewegt sich rückwärts", nl: "Hij beweegt achterwaarts" }
        ],
        correct: 2,
        explanation: {
          en: "When a pawn reaches the opposite end, it must be promoted to any piece except a king (usually a queen, rook, bishop, or knight).",
          es: "Cuando un peón llega al extremo opuesto, debe ser promovido a cualquier pieza excepto un rey (usualmente una reina, torre, alfil o caballo).",
          de: "Wenn ein Bauer das gegenüberliegende Ende erreicht, muss er zu jeder Figur außer einem König befördert werden (meist zu einer Dame, Turm, Läufer oder Springer).",
          nl: "Wanneer een pion de andere kant bereikt, moet hij worden gepromoveerd tot elk stuk behalve een koning (meestal een koningin, toren, loper of paard)."
        }
      },
      {
        question: {
          en: "Who moves first in chess?",
          es: "¿Quién mueve primero en ajedrez?",
          de: "Wer zieht beim Schach zuerst?",
          nl: "Wie zet eerst bij schaken?"
        },
        options: [
          { en: "Black", es: "Negro", de: "Schwarz", nl: "Zwart" },
          { en: "White", es: "Blanco", de: "Weiß", nl: "Wit" },
          { en: "The player who wins a coin toss", es: "El jugador que gana un volado", de: "Der Spieler, der eine Münze wirft", nl: "De speler die een muntje wint" },
          { en: "The younger player", es: "El jugador más joven", de: "Der jüngere Spieler", nl: "De jongere speler" }
        ],
        correct: 1,
        explanation: {
          en: "White always moves first in chess. This is a fundamental rule that gives white a slight advantage, known as the 'first-move advantage.'",
          es: "Blanco siempre mueve primero en ajedrez. Esta es una regla fundamental que le da a las blancas una ligera ventaja, conocida como la 'ventaja del primer movimiento.'",
          de: "Weiß zieht beim Schach immer zuerst. Das ist eine Grundregel, die Weiß einen leichten Vorteil gibt, bekannt als 'Anzugsvorteil.'",
          nl: "Wit zet altijd eerst bij schaken. Dit is een fundamentele regel die wit een klein voordeel geeft, bekend als het 'eerste-zet-voordeel.'"
        }
      },
      {
        question: {
          en: "What is a 'stalemate'?",
          es: "¿Qué es un 'estancamiento'?",
          de: "Was ist ein 'Patt'?",
          nl: "Wat is een 'pat'?"
        },
        options: [
          { en: "When the king is captured", es: "Cuando el rey es capturado", de: "Wenn der König geschlagen wird", nl: "Wanneer de koning wordt geslagen" },
          { en: "No legal moves, not in check", es: "Cuando un jugador no tiene movimientos legales pero no está en jaque", de: "Wenn ein Spieler keine legalen Züge hat, aber nicht im Schach steht", nl: "Wanneer een speler geen legale zetten heeft maar niet schaak staat" },
          { en: "When both players run out of pieces", es: "Cuando ambos jugadores se quedan sin piezas", de: "Wenn beide Spieler keine Figuren mehr haben", nl: "Wanneer beide spelers geen stukken meer hebben" },
          { en: "When the same position occurs three times", es: "Cuando la misma posición ocurre tres veces", de: "Wenn dieselbe Position dreimal auftritt", nl: "Wanneer dezelfde positie drie keer voorkomt" }
        ],
        correct: 1,
        explanation: {
          en: "A stalemate occurs when a player has no legal moves available but their king is not in check. This results in a draw.",
          es: "Un estancamiento ocurre cuando un jugador no tiene movimientos legales disponibles pero su rey no está en jaque. Esto resulta en empate.",
          de: "Ein Patt tritt auf, wenn ein Spieler keine legalen Züge zur Verfügung hat, aber sein König nicht im Schach steht. Dies führt zu einem Unentschieden.",
          nl: "Een pat treedt op wanneer een speler geen legale zetten beschikbaar heeft maar hun koning niet schaak staat. Dit resulteert in remise."
        }
      },
      {
        question: {
          en: "How far can a king move?",
          es: "¿Qué tan lejos puede moverse un rey?",
          de: "Wie weit kann sich ein König bewegen?",
          nl: "Hoe ver kan een koning bewegen?"
        },
        options: [
          { en: "One square in any direction", es: "Una casilla en cualquier dirección", de: "Ein Feld in jede Richtung", nl: "Één vakje in elke richting" },
          { en: "Two squares in any direction", es: "Dos casillas en cualquier dirección", de: "Zwei Felder in jede Richtung", nl: "Twee vakjes in elke richting" },
          { en: "Any number of squares diagonally", es: "Cualquier número de casillas diagonalmente", de: "Beliebig viele Felder diagonal", nl: "Elk aantal vakjes diagonaal" },
          { en: "Any number of squares horizontally or vertically", es: "Cualquier número de casillas horizontal o verticalmente", de: "Beliebig viele Felder horizontal oder vertikal", nl: "Elk aantal vakjes horizontaal of verticaal" }
        ],
        correct: 0,
        explanation: {
          en: "The king can move one square in any direction: horizontally, vertically, or diagonally. It cannot move into check.",
          es: "El rey puede moverse una casilla en cualquier dirección: horizontal, vertical o diagonalmente. No puede moverse a jaque.",
          de: "Der König kann sich ein Feld in jede Richtung bewegen: horizontal, vertikal oder diagonal. Er kann nicht ins Schach ziehen.",
          nl: "De koning kan één vakje bewegen in elke richting: horizontaal, verticaal of diagonaal. Hij kan niet naar schaak bewegen."
        }
      },
      {
        question: {
          en: "What is the point value of a pawn?",
          es: "¿Cuál es el valor en puntos de un peón?",
          de: "Wie viele Punkte ist ein Bauer wert?",
          nl: "Wat is de puntwaarde van een pion?"
        },
        options: [
          { en: "1 point", es: "1 punto", de: "1 Punkt", nl: "1 punt" },
          { en: "2 pts", es: "2 puntos", de: "2 Punkte", nl: "2 punten" },
          { en: "3 pts", es: "3 puntos", de: "3 Punkte", nl: "3 punten" },
          { en: "5 pts", es: "5 puntos", de: "5 Punkte", nl: "5 punten" }
        ],
        correct: 0,
        explanation: {
          en: "A pawn is worth 1 point, making it the least valuable piece in terms of material value. However, pawns can become very powerful when they advance.",
          es: "Un peón vale 1 punto, convirtiéndolo en la pieza menos valiosa en términos de valor material. Sin embargo, los peones pueden volverse muy poderosos cuando avanzan.",
          de: "Ein Bauer ist 1 Punkt wert und damit die Figur mit dem geringsten materiellen Wert. Bauern können jedoch sehr mächtig werden, wenn sie vorrücken.",
          nl: "Een pion is 1 punt waard, waardoor het het minst waardevolle stuk is in termen van materiële waarde. Echter, pionnen kunnen zeer krachtig worden wanneer ze opruken."
        }
      },
      {
        question: {
          en: "How can a game of chess end in a draw?",
          es: "¿Cómo puede terminar una partida de ajedrez en empate?",
          de: "Wie kann eine Schachpartie unentschieden enden?",
          nl: "Hoe kan een schaakpartij eindigen in remise?"
        },
        options: [
          { en: "Only by stalemate", es: "Solo por estancamiento", de: "Nur durch Patt", nl: "Alleen door pat" },
          { en: "Stalemate, insufficient material, agreement", es: "Estancamiento, material insuficiente o acuerdo mutuo", de: "Patt, unzureichendes Material oder gegenseitige Vereinbarung", nl: "Pat, onvoldoende materiaal of wederzijdse overeenstemming" },
          { en: "Only when both players agree", es: "Solo cuando ambos jugadores están de acuerdo", de: "Nur wenn beide Spieler einverstanden sind", nl: "Alleen wanneer beide spelers het eens zijn" },
          { en: "Only after 50 moves without capture", es: "Solo después de 50 movimientos sin captura", de: "Nur nach 50 Zügen ohne Schlagen", nl: "Alleen na 50 zetten zonder slag" }
        ],
        correct: 1,
        explanation: {
          en: "A chess game can end in a draw through stalemate, insufficient material to checkmate, threefold repetition, 50-move rule, or mutual agreement between players.",
          es: "Una partida de ajedrez puede terminar en empate por estancamiento, material insuficiente para dar mate, repetición triple, regla de 50 movimientos o acuerdo mutuo entre jugadores.",
          de: "Eine Schachpartie kann durch Patt, unzureichendes Material für Schachmatt, dreifache Wiederholung, 50-Züge-Regel oder gegenseitige Vereinbarung der Spieler unentschieden enden.",
          nl: "Een schaakpartij kan eindigen in remise door pat, onvoldoende materiaal om schaakmat te zetten, drievoudige herhaling, 50-zetten regel, of wederzijdse overeenstemming tussen spelers."
        }
      },
      {
        question: {
          en: "What is 'check'?",
          es: "¿Qué es 'jaque'?",
          de: "Was ist 'Schach'?",
          nl: "Wat is 'schaak'?"
        },
        options: [
          { en: "When the king is captured", es: "Cuando el rey es capturado", de: "Wenn der König geschlagen wird", nl: "Wanneer de koning wordt geslagen" },
          { en: "When the king is under attack", es: "Cuando el rey está bajo ataque", de: "Wenn der König angegriffen wird", nl: "Wanneer de koning wordt aangevallen" },
          { en: "When a pawn is promoted", es: "Cuando un peón es promovido", de: "Wenn ein Bauer befördert wird", nl: "Wanneer een pion wordt gepromoveerd" },
          { en: "When castling is performed", es: "Cuando se hace enroque", de: "Wenn rochiert wird", nl: "Wanneer er wordt gerokeerd" }
        ],
        correct: 1,
        explanation: {
          en: "Check occurs when the king is under attack and must be moved to safety, the attacking piece must be captured, or the attack must be blocked.",
          es: "El jaque ocurre cuando el rey está bajo ataque y debe ser movido a seguridad, la pieza atacante debe ser capturada, o el ataque debe ser bloqueado.",
          de: "Schach tritt auf, wenn der König angegriffen wird und in Sicherheit gebracht werden muss, die angreifende Figur geschlagen werden muss oder der Angriff blockiert werden muss.",
          nl: "Schaak treedt op wanneer de koning wordt aangevallen en naar veiligheid moet worden gebracht, het aanvallende stuk moet worden geslagen, of de aanval moet worden geblokkeerd."
        }
      },
      {
        question: {
          en: "How many pawns does each player have at the start?",
          es: "¿Cuántos peones tiene cada jugador al inicio?",
          de: "Wie viele Bauern hat jeder Spieler zu Beginn?",
          nl: "Hoeveel pionnen heeft elke speler aan het begin?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correct: 2,
        explanation: {
          en: "Each player starts with 8 pawns, which form the front row of their army and are the most numerous pieces on the board.",
          es: "Cada jugador comienza con 8 peones, que forman la fila frontal de su ejército y son las piezas más numerosas en el tablero.",
          de: "Jeder Spieler beginnt mit 8 Bauern, die die vordere Reihe ihrer Armee bilden und die zahlreichsten Figuren auf dem Brett sind.",
          nl: "Elke speler begint met 8 pionnen, die de voorste rij van hun leger vormen en de meest talrijke stukken op het bord zijn."
        }
      },
      {
        question: {
          en: "Which piece can move like both a rook and a bishop?",
          es: "¿Qué pieza puede moverse como una torre y un alfil?",
          de: "Welche Figur kann sich wie ein Turm und ein Läufer bewegen?",
          nl: "Welk stuk kan bewegen zoals zowel een toren als een loper?"
        },
        options: [
          { en: "King", es: "Rey", de: "König", nl: "Koning" },
          { en: "Queen", es: "Reina", de: "Dame", nl: "Koningin" },
          { en: "Knight", es: "Caballo", de: "Springer", nl: "Paard" },
          { en: "Pawn", es: "Peón", de: "Bauer", nl: "Pion" }
        ],
        correct: 1,
        explanation: {
          en: "The queen is the most powerful piece because it can move like both a rook (horizontally and vertically) and a bishop (diagonally) for any number of squares.",
          es: "La reina es la pieza más poderosa porque puede moverse como una torre (horizontal y verticalmente) y un alfil (diagonalmente) por cualquier número de casillas.",
          de: "Die Dame ist die mächtigste Figur, weil sie sich wie ein Turm (horizontal und vertikal) und ein Läufer (diagonal) für beliebig viele Felder bewegen kann.",
          nl: "De koningin is het machtigste stuk omdat het kan bewegen zoals zowel een toren (horizontaal en verticaal) als een loper (diagonaal) voor elk aantal vakjes."
        }
      },
      {
        question: {
          en: "What is the 50-move rule?",
          es: "¿Qué es la regla de los 50 movimientos?",
          de: "Was ist die 50-Züge-Regel?",
          nl: "Wat is de 50-zetten regel?"
        },
        options: [
          { en: "The game must end after 50 moves", es: "El juego debe terminar después de 50 movimientos", de: "Das Spiel muss nach 50 Zügen enden", nl: "Het spel moet eindigen na 50 zetten" },
          { en: "Draw after 50 moves without pawn/capture", es: "Se puede reclamar empate después de 50 movimientos sin mover peón o capturar", de: "Unentschieden kann nach 50 Zügen ohne Bauernzug oder Schlagen beansprucht werden", nl: "Remise kan worden geclaimd na 50 zetten zonder pionzet of slag" },
          { en: "Each player gets 50 moves maximum", es: "Cada jugador obtiene 50 movimientos máximo", de: "Jeder Spieler bekommt maximal 50 Züge", nl: "Elke speler krijgt maximaal 50 zetten" },
          { en: "A piece must be captured within 50 moves", es: "Una pieza debe ser capturada dentro de 50 movimientos", de: "Eine Figur muss innerhalb von 50 Zügen geschlagen werden", nl: "Een stuk moet binnen 50 zetten worden geslagen" }
        ],
        correct: 1,
        explanation: {
          en: "The 50-move rule allows a player to claim a draw if 50 consecutive moves have been made by both players without any pawn movement or piece capture.",
          es: "La regla de los 50 movimientos permite a un jugador reclamar empate si se han hecho 50 movimientos consecutivos por ambos jugadores sin ningún movimiento de peón o captura de pieza.",
          de: "Die 50-Züge-Regel erlaubt einem Spieler, Unentschieden zu beanspruchen, wenn 50 aufeinanderfolgende Züge von beiden Spielern ohne Bauernbewegung oder Figurenschlag gemacht wurden.",
          nl: "De 50-zetten regel stelt een speler in staat remise te claimen als 50 opeenvolgende zetten zijn gemaakt door beide spelers zonder pionbeweging of stukslag."
        }
      },
      {
        question: {
          en: "What is the starting position called in chess notation?",
          es: "¿Cómo se llama la posición inicial en notación de ajedrez?",
          de: "Wie heißt die Startposition in der Schachnotation?",
          nl: "Hoe heet de startpositie in schaaknotatie?"
        },
        options: [
          { en: "FEN", es: "FEN", de: "FEN", nl: "FEN" },
          { en: "PGN", es: "PGN", de: "PGN", nl: "PGN" },
          { en: "Starting position", es: "Posición inicial", de: "Startposition", nl: "Startpositie" },
          { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 0,
        explanation: {
          en: "FEN (Forsyth-Edwards Notation) is used to describe any chess position, including the starting position. PGN is used for recording complete games.",
          es: "FEN (Notación Forsyth-Edwards) se usa para describir cualquier posición de ajedrez, incluyendo la posición inicial. PGN se usa para registrar juegos completos.",
          de: "FEN (Forsyth-Edwards-Notation) wird verwendet, um jede Schachposition zu beschreiben, einschließlich der Startposition. PGN wird für die Aufzeichnung vollständiger Spiele verwendet.",
          nl: "FEN (Forsyth-Edwards Notatie) wordt gebruikt om elke schaakpositie te beschrijven, inclusief de startpositie. PGN wordt gebruikt voor het opnemen van complete partijen."
        }
      },
      {
        question: {
          en: "Who is considered the first official World Chess Champion?",
          es: "¿Quién es considerado el primer Campeón Mundial de Ajedrez oficial?",
          de: "Wer gilt als der erste offizielle Schachweltmeister?",
          nl: "Wie wordt beschouwd als de eerste officiële Wereldkampioen Schaken?"
        },
        options: [
          { en: "Paul Morphy", es: "Paul Morphy", de: "Paul Morphy", nl: "Paul Morphy" },
          { en: "Wilhelm Steinitz", es: "Wilhelm Steinitz", de: "Wilhelm Steinitz", nl: "Wilhelm Steinitz" },
          { en: "Emanuel Lasker", es: "Emanuel Lasker", de: "Emanuel Lasker", nl: "Emanuel Lasker" },
          { en: "José Capablanca", es: "José Capablanca", de: "José Capablanca", nl: "José Capablanca" }
        ],
        correct: 1,
        explanation: {
          en: "Wilhelm Steinitz is considered the first official World Chess Champion, winning the title in 1886 and holding it until 1894.",
          es: "Wilhelm Steinitz es considerado el primer Campeón Mundial de Ajedrez oficial, ganando el título en 1886 y manteniéndolo hasta 1894.",
          de: "Wilhelm Steinitz gilt als der erste offizielle Schachweltmeister, der den Titel 1886 gewann und bis 1894 hielt.",
          nl: "Wilhelm Steinitz wordt beschouwd als de eerste officiële Wereldkampioen Schaken, die de titel in 1886 won en tot 1894 behield."
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