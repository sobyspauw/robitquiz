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
      },
      {
        question: {
          en: "What color is the bottom-right square of a properly set chess board?",
          es: "¿De qué color es la casilla inferior derecha de un tablero de ajedrez bien colocado?",
          de: "Welche Farbe hat das rechte untere Feld eines richtig aufgestellten Schachbretts?",
          nl: "Welke kleur heeft het rechter onderste vakje van een correct opgesteld schaakbord?"
        },
        options: [
          { en: "Light/White", es: "Claro/Blanco", de: "Hell/Weiß", nl: "Licht/Wit" },
          { en: "Dark/Black", es: "Oscuro/Negro", de: "Dunkel/Schwarz", nl: "Donker/Zwart" },
          { en: "Either color", es: "Cualquier color", de: "Beliebige Farbe", nl: "Elke kleur" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" }
        ],
        correct: 0,
        explanation: {
          en: "The board must be set up with a light square in the bottom-right corner for both players. This is remembered by 'light on right.'",
          es: "El tablero debe colocarse con una casilla clara en la esquina inferior derecha para ambos jugadores. Esto se recuerda como 'claro a la derecha.'",
          de: "Das Brett muss mit einem hellen Feld in der rechten unteren Ecke für beide Spieler aufgestellt werden. Man merkt es sich als 'hell rechts.'",
          nl: "Het bord moet worden opgesteld met een licht vakje in de rechter onderhoek voor beide spelers. Dit wordt onthouden als 'licht rechts.'"
        }
      },
      {
        question: {
          en: "How many squares can a rook control from the center of an empty board?",
          es: "¿Cuántas casillas puede controlar una torre desde el centro de un tablero vacío?",
          de: "Wie viele Felder kann ein Turm von der Mitte eines leeren Bretts aus kontrollieren?",
          nl: "Hoeveel vakjes kan een toren controleren vanuit het midden van een leeg bord?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "16", es: "16", de: "16", nl: "16" }
        ],
        correct: 2,
        explanation: {
          en: "A rook in the center controls 14 squares: 7 horizontally and 7 vertically (not counting the square it stands on).",
          es: "Una torre en el centro controla 14 casillas: 7 horizontalmente y 7 verticalmente (sin contar la casilla en la que está).",
          de: "Ein Turm in der Mitte kontrolliert 14 Felder: 7 horizontal und 7 vertikal (ohne das Feld auf dem er steht).",
          nl: "Een toren in het midden controleert 14 vakjes: 7 horizontaal en 7 verticaal (zonder het vakje waarop hij staat)."
        }
      },
      {
        question: {
          en: "Can a pawn move backwards?",
          es: "¿Puede un peón moverse hacia atrás?",
          de: "Kann ein Bauer rückwärts ziehen?",
          nl: "Kan een pion achteruit bewegen?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" },
          { en: "Yes, but only after promotion", es: "Sí, pero solo después de promoción", de: "Ja, aber nur nach Beförderung", nl: "Ja, maar alleen na promotie" },
          { en: "Yes, but only when capturing", es: "Sí, pero solo al capturar", de: "Ja, aber nur beim Schlagen", nl: "Ja, maar alleen bij het slaan" }
        ],
        correct: 1,
        explanation: {
          en: "Pawns can never move backwards. They can only move forward one square (or two from start) and capture diagonally forward.",
          es: "Los peones nunca pueden moverse hacia atrás. Solo pueden moverse una casilla hacia adelante (o dos desde el inicio) y capturar diagonalmente hacia adelante.",
          de: "Bauern können niemals rückwärts ziehen. Sie können nur ein Feld vorwärts ziehen (oder zwei vom Start) und diagonal vorwärts schlagen.",
          nl: "Pionnen kunnen nooit achteruit bewegen. Ze kunnen alleen voorwaarts bewegen één vakje (of twee vanaf start) en diagonaal voorwaarts slaan."
        }
      },
      {
        question: {
          en: "What happens if a player touches a piece during their turn?",
          es: "¿Qué pasa si un jugador toca una pieza durante su turno?",
          de: "Was passiert, wenn ein Spieler eine Figur während seines Zuges berührt?",
          nl: "Wat gebeurt er als een speler een stuk aanraakt tijdens hun beurt?"
        },
        options: [
          { en: "Nothing, they can choose any piece", es: "Nada, pueden elegir cualquier pieza", de: "Nichts, sie können jede Figur wählen", nl: "Niets, ze kunnen elk stuk kiezen" },
          { en: "They must move that piece (touch-move rule)", es: "Deben mover esa pieza (regla de pieza tocada)", de: "Sie müssen diese Figur ziehen (Berührt-geführt-Regel)", nl: "Ze moeten dat stuk bewegen (aangeraakt-verplaatst regel)" },
          { en: "They lose their turn", es: "Pierden su turno", de: "Sie verlieren ihren Zug", nl: "Ze verliezen hun beurt" },
          { en: "The piece is removed from the board", es: "La pieza se retira del tablero", de: "Die Figur wird vom Brett entfernt", nl: "Het stuk wordt van het bord verwijderd" }
        ],
        correct: 1,
        explanation: {
          en: "The touch-move rule states that if you touch a piece during your turn, you must move it if legal. Say 'I adjust' before touching to adjust position.",
          es: "La regla de pieza tocada establece que si tocas una pieza durante tu turno, debes moverla si es legal. Di 'ajusto' antes de tocar para ajustar la posición.",
          de: "Die Berührt-geführt-Regel besagt, dass wenn Sie eine Figur während Ihres Zuges berühren, Sie sie ziehen müssen, wenn legal. Sagen Sie 'Ich richte' vor dem Berühren zum Ausrichten.",
          nl: "De aangeraakt-verplaatst regel stelt dat als je een stuk aanraakt tijdens je beurt, je het moet bewegen als het legaal is. Zeg 'ik pas aan' voor het aanraken om de positie aan te passen."
        }
      },
      {
        question: {
          en: "How many bishops does each player start with?",
          es: "¿Con cuántos alfiles comienza cada jugador?",
          de: "Mit wie vielen Läufern beginnt jeder Spieler?",
          nl: "Met hoeveel lopers begint elke speler?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 1,
        explanation: {
          en: "Each player starts with 2 bishops: one on a light square and one on a dark square. Each bishop stays on its color throughout the game.",
          es: "Cada jugador comienza con 2 alfiles: uno en una casilla clara y uno en una casilla oscura. Cada alfil permanece en su color durante todo el juego.",
          de: "Jeder Spieler beginnt mit 2 Läufern: einer auf einem hellen Feld und einer auf einem dunklen Feld. Jeder Läufer bleibt während des gesamten Spiels auf seiner Farbe.",
          nl: "Elke speler begint met 2 lopers: één op een licht vakje en één op een donker vakje. Elke loper blijft op zijn kleur gedurende het hele spel."
        }
      },
      {
        question: {
          en: "What is 'discovered check'?",
          es: "¿Qué es 'jaque descubierto'?",
          de: "Was ist 'Abzugsschach'?",
          nl: "Wat is 'ontdekte schaak'?"
        },
        options: [
          { en: "Finding the king in hiding", es: "Encontrar al rey escondido", de: "Den König im Versteck finden", nl: "De koning in het verborgene vinden" },
          { en: "Check revealed by moving another piece", es: "Jaque revelado al mover otra pieza", de: "Schach aufgedeckt durch Ziehen einer anderen Figur", nl: "Schaak onthuld door een ander stuk te bewegen" },
          { en: "Checking with two pieces at once", es: "Dar jaque con dos piezas a la vez", de: "Schach geben mit zwei Figuren gleichzeitig", nl: "Schaak geven met twee stukken tegelijk" },
          { en: "A check that wins the game", es: "Un jaque que gana el juego", de: "Ein Schach das das Spiel gewinnt", nl: "Een schaak die het spel wint" }
        ],
        correct: 1,
        explanation: {
          en: "Discovered check occurs when you move one piece, revealing a check from another piece behind it that was previously blocked.",
          es: "El jaque descubierto ocurre cuando mueves una pieza, revelando un jaque de otra pieza detrás de ella que estaba previamente bloqueada.",
          de: "Abzugsschach tritt auf, wenn Sie eine Figur ziehen und damit ein Schach von einer anderen Figur dahinter aufdecken, die zuvor blockiert war.",
          nl: "Ontdekte schaak treedt op wanneer je een stuk beweegt, waardoor een schaak van een ander stuk erachter wordt onthuld dat eerder geblokkeerd was."
        }
      },
      {
        question: {
          en: "How does a pawn capture?",
          es: "¿Cómo captura un peón?",
          de: "Wie schlägt ein Bauer?",
          nl: "Hoe slaat een pion?"
        },
        options: [
          { en: "One square forward", es: "Una casilla hacia adelante", de: "Ein Feld vorwärts", nl: "Één vakje voorwaarts" },
          { en: "One square diagonally forward", es: "Una casilla diagonalmente hacia adelante", de: "Ein Feld diagonal vorwärts", nl: "Één vakje diagonaal voorwaarts" },
          { en: "Two squares forward", es: "Dos casillas hacia adelante", de: "Zwei Felder vorwärts", nl: "Twee vakjes voorwaarts" },
          { en: "Horizontally to either side", es: "Horizontalmente a cualquier lado", de: "Horizontal zu beiden Seiten", nl: "Horizontaal naar beide kanten" }
        ],
        correct: 1,
        explanation: {
          en: "Pawns capture differently than they move. They capture one square diagonally forward, but move straight forward without capturing.",
          es: "Los peones capturan de manera diferente a como se mueven. Capturan una casilla diagonalmente hacia adelante, pero se mueven recto hacia adelante sin capturar.",
          de: "Bauern schlagen anders als sie ziehen. Sie schlagen ein Feld diagonal vorwärts, ziehen aber gerade vorwärts ohne zu schlagen.",
          nl: "Pionnen slaan anders dan ze bewegen. Ze slaan één vakje diagonaal voorwaarts, maar bewegen recht voorwaarts zonder te slaan."
        }
      },
      {
        question: {
          en: "What is the value of a knight in points?",
          es: "¿Cuál es el valor de un caballo en puntos?",
          de: "Wie viele Punkte ist ein Springer wert?",
          nl: "Wat is de waarde van een paard in punten?"
        },
        options: [
          { en: "1 point", es: "1 punto", de: "1 Punkt", nl: "1 punt" },
          { en: "2 points", es: "2 puntos", de: "2 Punkte", nl: "2 punten" },
          { en: "3 points", es: "3 puntos", de: "3 Punkte", nl: "3 punten" },
          { en: "5 points", es: "5 puntos", de: "5 Punkte", nl: "5 punten" }
        ],
        correct: 2,
        explanation: {
          en: "A knight is worth 3 points, the same as a bishop. It's more valuable than a pawn (1) but less than a rook (5) or queen (9).",
          es: "Un caballo vale 3 puntos, igual que un alfil. Es más valioso que un peón (1) pero menos que una torre (5) o reina (9).",
          de: "Ein Springer ist 3 Punkte wert, genau wie ein Läufer. Er ist wertvoller als ein Bauer (1), aber weniger als ein Turm (5) oder Dame (9).",
          nl: "Een paard is 3 punten waard, hetzelfde als een loper. Het is waardevoller dan een pion (1) maar minder dan een toren (5) of koningin (9)."
        }
      },
      {
        question: {
          en: "Can you castle if your king has been in check?",
          es: "¿Puedes enrocar si tu rey ha estado en jaque?",
          de: "Können Sie rochieren, wenn Ihr König im Schach stand?",
          nl: "Kun je rokeren als je koning schaak heeft gestaan?"
        },
        options: [
          { en: "No, never after being in check", es: "No, nunca después de haber estado en jaque", de: "Nein, nie nach Schach", nl: "Nee, nooit na schaak te hebben gestaan" },
          { en: "Yes, if the king is no longer in check", es: "Sí, si el rey ya no está en jaque", de: "Ja, wenn der König nicht mehr im Schach steht", nl: "Ja, als de koning niet meer schaak staat" },
          { en: "Only on the queenside", es: "Solo en el lado de la reina", de: "Nur auf der Damenseite", nl: "Alleen aan de koninginzijde" },
          { en: "Only on the kingside", es: "Solo en el lado del rey", de: "Nur auf der Königsseite", nl: "Alleen aan de koningszijde" }
        ],
        correct: 1,
        explanation: {
          en: "You can castle after being in check, as long as the king hasn't moved and isn't currently in check or moving through/into check.",
          es: "Puedes enrocar después de haber estado en jaque, siempre que el rey no se haya movido y no esté actualmente en jaque o moviéndose a través/hacia jaque.",
          de: "Sie können rochieren nachdem Sie im Schach standen, solange der König nicht gezogen hat und derzeit nicht im Schach steht oder durch/ins Schach zieht.",
          nl: "Je kunt rokeren na schaak te hebben gestaan, zolang de koning niet heeft bewogen en momenteel niet schaak staat of door/naar schaak beweegt."
        }
      },
      {
        question: {
          en: "What is a 'pin' in chess?",
          es: "¿Qué es una 'clavada' en ajedrez?",
          de: "Was ist eine 'Fesselung' beim Schach?",
          nl: "Wat is een 'penning' bij schaken?"
        },
        options: [
          { en: "When a piece cannot move without exposing a more valuable piece", es: "Cuando una pieza no puede moverse sin exponer una pieza más valiosa", de: "Wenn eine Figur sich nicht bewegen kann ohne eine wertvollere Figur freizugeben", nl: "Wanneer een stuk niet kan bewegen zonder een waardevoller stuk bloot te stellen" },
          { en: "Marking a square with a pin", es: "Marcar una casilla con un alfiler", de: "Ein Feld mit einer Nadel markieren", nl: "Een vakje markeren met een speld" },
          { en: "A special opening move", es: "Un movimiento de apertura especial", de: "Ein spezieller Eröffnungszug", nl: "Een speciale openingszet" },
          { en: "When pieces are stuck together", es: "Cuando las piezas están pegadas", de: "Wenn Figuren zusammenkleben", nl: "Wanneer stukken aan elkaar vast zitten" }
        ],
        correct: 0,
        explanation: {
          en: "A pin occurs when a piece cannot legally move (absolute pin) or shouldn't move (relative pin) because it would expose a more valuable piece behind it.",
          es: "Una clavada ocurre cuando una pieza no puede moverse legalmente (clavada absoluta) o no debería moverse (clavada relativa) porque expondría una pieza más valiosa detrás de ella.",
          de: "Eine Fesselung tritt auf, wenn eine Figur sich nicht legal bewegen kann (absolute Fesselung) oder nicht bewegen sollte (relative Fesselung), weil sie eine wertvollere Figur dahinter freigeben würde.",
          nl: "Een penning treedt op wanneer een stuk niet legaal kan bewegen (absolute penning) of niet zou moeten bewegen (relatieve penning) omdat het een waardevoller stuk erachter zou blootstellen."
        }
      },
      {
        question: {
          en: "How many times can you castle in a single game?",
          es: "¿Cuántas veces puedes enrocar en una sola partida?",
          de: "Wie oft können Sie in einer einzelnen Partie rochieren?",
          nl: "Hoe vaak kun je rokeren in één partij?"
        },
        options: [
          { en: "Once per game", es: "Una vez por partida", de: "Einmal pro Partie", nl: "Eén keer per partij" },
          { en: "Twice per game", es: "Dos veces por partida", de: "Zweimal pro Partie", nl: "Twee keer per partij" },
          { en: "As many times as you want", es: "Tantas veces como quieras", de: "So oft Sie wollen", nl: "Zo vaak als je wilt" },
          { en: "Once per side of the board", es: "Una vez por lado del tablero", de: "Einmal pro Brettseite", nl: "Eén keer per kant van het bord" }
        ],
        correct: 0,
        explanation: {
          en: "Each player can only castle once per game. After castling, the king and rook have moved, so the conditions for castling can never be met again.",
          es: "Cada jugador solo puede enrocar una vez por partida. Después de enrocar, el rey y la torre se han movido, por lo que las condiciones para enrocar nunca se pueden cumplir de nuevo.",
          de: "Jeder Spieler kann nur einmal pro Partie rochieren. Nach der Rochade haben sich König und Turm bewegt, sodass die Bedingungen für die Rochade nie wieder erfüllt werden können.",
          nl: "Elke speler kan slechts één keer per partij rokeren. Na het rokeren hebben de koning en toren bewogen, dus de voorwaarden voor rokeren kunnen nooit meer worden vervuld."
        }
      },
      {
        question: {
          en: "What is the minimum number of moves needed to checkmate?",
          es: "¿Cuál es el número mínimo de movimientos necesarios para dar jaque mate?",
          de: "Was ist die Mindestanzahl von Zügen für ein Schachmatt?",
          nl: "Wat is het minimum aantal zetten nodig voor schaakmat?"
        },
        options: [
          { en: "1 move", es: "1 movimiento", de: "1 Zug", nl: "1 zet" },
          { en: "2 moves", es: "2 movimientos", de: "2 Züge", nl: "2 zetten" },
          { en: "3 moves", es: "3 movimientos", de: "3 Züge", nl: "3 zetten" },
          { en: "4 moves", es: "4 movimientos", de: "4 Züge", nl: "4 zetten" }
        },
        correct: 1,
        explanation: {
          en: "The fastest checkmate is 2 moves (4 half-moves or plies), known as Fool's Mate. This requires very poor play by Black.",
          es: "El jaque mate más rápido es de 2 movimientos (4 medios movimientos), conocido como Mate del Loco. Esto requiere un juego muy pobre por parte de las negras.",
          de: "Das schnellste Schachmatt ist in 2 Zügen (4 Halbzügen), bekannt als Narrenmatt. Dies erfordert sehr schlechtes Spiel von Schwarz.",
          nl: "Het snelste schaakmat is 2 zetten (4 halve zetten), bekend als Schaakmat van de Dwaas. Dit vereist zeer slecht spel door Zwart."
        }
      },
      {
        question: {
          en: "Which piece can jump over other pieces?",
          es: "¿Qué pieza puede saltar sobre otras piezas?",
          de: "Welche Figur kann über andere Figuren springen?",
          nl: "Welk stuk kan over andere stukken springen?"
        },
        options: [
          { en: "Bishop", es: "Alfil", de: "Läufer", nl: "Loper" },
          { en: "Rook", es: "Torre", de: "Turm", nl: "Toren" },
          { en: "Knight", es: "Caballo", de: "Springer", nl: "Paard" },
          { en: "Queen", es: "Reina", de: "Dame", nl: "Koningin" }
        ],
        correct: 2,
        explanation: {
          en: "The knight is the only piece that can jump over other pieces. All other pieces are blocked by pieces in their path.",
          es: "El caballo es la única pieza que puede saltar sobre otras piezas. Todas las demás piezas están bloqueadas por piezas en su camino.",
          de: "Der Springer ist die einzige Figur, die über andere Figuren springen kann. Alle anderen Figuren werden durch Figuren in ihrem Weg blockiert.",
          nl: "Het paard is het enige stuk dat over andere stukken kan springen. Alle andere stukken worden geblokkeerd door stukken in hun pad."
        }
      },
      {
        question: {
          en: "What does 'fianchetto' mean?",
          es: "¿Qué significa 'fianchetto'?",
          de: "Was bedeutet 'Fianchetto'?",
          nl: "Wat betekent 'fianchetto'?"
        },
        options: [
          { en: "Moving the queen early", es: "Mover la reina temprano", de: "Die Dame früh ziehen", nl: "De koningin vroeg bewegen" },
          { en: "Developing a bishop to the long diagonal", es: "Desarrollar un alfil a la diagonal larga", de: "Einen Läufer auf die lange Diagonale entwickeln", nl: "Een loper naar de lange diagonaal ontwikkelen" },
          { en: "A type of checkmate", es: "Un tipo de jaque mate", de: "Eine Art Schachmatt", nl: "Een soort schaakmat" },
          { en: "Castling queenside", es: "Enrocar en el lado de la reina", de: "Damenseitige Rochade", nl: "Rokeren aan de koninginzijde" }
        ],
        correct: 1,
        explanation: {
          en: "Fianchetto is placing a bishop on the long diagonal by first moving the knight's pawn (b3 or g3 for white, b6 or g6 for black).",
          es: "Fianchetto es colocar un alfil en la diagonal larga moviendo primero el peón del caballo (b3 o g3 para blancas, b6 o g6 para negras).",
          de: "Fianchetto ist das Platzieren eines Läufers auf der langen Diagonale durch zuerst Ziehen des Springerbauern (b3 oder g3 für Weiß, b6 oder g6 für Schwarz).",
          nl: "Fianchetto is het plaatsen van een loper op de lange diagonaal door eerst de pion van het paard te bewegen (b3 of g3 voor wit, b6 of g6 voor zwart)."
        }
      },
      {
        question: {
          en: "Can a promoted pawn become any piece?",
          es: "¿Puede un peón promovido convertirse en cualquier pieza?",
          de: "Kann ein beförderter Bauer zu jeder Figur werden?",
          nl: "Kan een gepromoveerde pion elk stuk worden?"
        },
        options: [
          { en: "Yes, including a king", es: "Sí, incluyendo un rey", de: "Ja, einschließlich König", nl: "Ja, inclusief een koning" },
          { en: "Yes, but not a king", es: "Sí, pero no un rey", de: "Ja, aber kein König", nl: "Ja, maar geen koning" },
          { en: "Only a queen", es: "Solo una reina", de: "Nur eine Dame", nl: "Alleen een koningin" },
          { en: "Only a queen or rook", es: "Solo una reina o torre", de: "Nur Dame oder Turm", nl: "Alleen een koningin of toren" }
        ],
        correct: 1,
        explanation: {
          en: "A pawn can be promoted to any piece except a king: queen, rook, bishop, or knight. Most players choose a queen, but 'underpromotion' to other pieces is legal.",
          es: "Un peón puede ser promovido a cualquier pieza excepto un rey: reina, torre, alfil o caballo. La mayoría elige reina, pero la 'subpromoción' a otras piezas es legal.",
          de: "Ein Bauer kann zu jeder Figur außer König befördert werden: Dame, Turm, Läufer oder Springer. Die meisten wählen Dame, aber 'Unterbeförderung' zu anderen Figuren ist legal.",
          nl: "Een pion kan worden gepromoveerd tot elk stuk behalve een koning: koningin, toren, loper of paard. De meeste kiezen koningin, maar 'onderpromotie' naar andere stukken is legaal."
        }
      },
      {
        question: {
          en: "What happens if both players have insufficient material to checkmate?",
          es: "¿Qué pasa si ambos jugadores tienen material insuficiente para dar jaque mate?",
          de: "Was passiert, wenn beide Spieler unzureichendes Material für Schachmatt haben?",
          nl: "Wat gebeurt er als beide spelers onvoldoende materiaal hebben voor schaakmat?"
        },
        options: [
          { en: "White wins", es: "Blanco gana", de: "Weiß gewinnt", nl: "Wit wint" },
          { en: "Black wins", es: "Negro gana", de: "Schwarz gewinnt", nl: "Zwart wint" },
          { en: "The game is a draw", es: "El juego es empate", de: "Das Spiel ist unentschieden", nl: "Het spel is remise" },
          { en: "The game continues indefinitely", es: "El juego continúa indefinidamente", de: "Das Spiel geht unendlich weiter", nl: "Het spel gaat oneindig door" }
        ],
        correct: 2,
        explanation: {
          en: "If neither player has enough pieces to force checkmate (e.g., only kings, or king + bishop vs king), the game is automatically a draw.",
          es: "Si ningún jugador tiene suficientes piezas para forzar jaque mate (ej., solo reyes, o rey + alfil vs rey), el juego es automáticamente empate.",
          de: "Wenn keiner der Spieler genug Figuren hat, um Schachmatt zu erzwingen (z.B. nur Könige, oder König + Läufer vs König), ist das Spiel automatisch unentschieden.",
          nl: "Als geen van beide spelers genoeg stukken heeft om schaakmat te forceren (bijv. alleen koningen, of koning + loper vs koning), is het spel automatisch remise."
        }
      },
      {
        question: {
          en: "How many different opening moves does White have?",
          es: "¿Cuántos movimientos de apertura diferentes tiene Blanco?",
          de: "Wie viele verschiedene Eröffnungszüge hat Weiß?",
          nl: "Hoeveel verschillende openingszetten heeft Wit?"
        },
        options: [
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "32", es: "32", de: "32", nl: "32" }
        ],
        correct: 1,
        explanation: {
          en: "White has 20 possible opening moves: each of the 8 pawns can move 1 or 2 squares (16 moves), and each of the 2 knights can move to 2 squares (4 moves).",
          es: "Blanco tiene 20 movimientos de apertura posibles: cada uno de los 8 peones puede moverse 1 o 2 casillas (16 movimientos), y cada uno de los 2 caballos puede moverse a 2 casillas (4 movimientos).",
          de: "Weiß hat 20 mögliche Eröffnungszüge: jeder der 8 Bauern kann 1 oder 2 Felder ziehen (16 Züge), und jeder der 2 Springer kann auf 2 Felder ziehen (4 Züge).",
          nl: "Wit heeft 20 mogelijke openingszetten: elk van de 8 pionnen kan 1 of 2 vakjes bewegen (16 zetten), en elk van de 2 paarden kan naar 2 vakjes bewegen (4 zetten)."
        }
      },
      {
        question: {
          en: "What is 'zugzwang'?",
          es: "¿Qué es 'zugzwang'?",
          de: "Was ist 'Zugzwang'?",
          nl: "Wat is 'zugzwang'?"
        },
        options: [
          { en: "A winning position", es: "Una posición ganadora", de: "Eine Gewinnstellung", nl: "Een winnende positie" },
          { en: "Having to move when any move worsens your position", es: "Tener que mover cuando cualquier movimiento empeora tu posición", de: "Ziehen müssen, wenn jeder Zug die Position verschlechtert", nl: "Moeten bewegen wanneer elke zet je positie verslechtert" },
          { en: "A type of opening", es: "Un tipo de apertura", de: "Eine Art Eröffnung", nl: "Een soort opening" },
          { en: "Checkmate with a queen", es: "Jaque mate con reina", de: "Schachmatt mit Dame", nl: "Schaakmat met koningin" }
        ],
        correct: 1,
        explanation: {
          en: "Zugzwang is a situation where a player must make a move, but any legal move will worsen their position. It's German for 'compulsion to move.'",
          es: "Zugzwang es una situación donde un jugador debe hacer un movimiento, pero cualquier movimiento legal empeorará su posición. Es alemán para 'compulsión de mover.'",
          de: "Zugzwang ist eine Situation, in der ein Spieler ziehen muss, aber jeder legale Zug seine Position verschlechtert. Es bedeutet 'Zwang zu ziehen.'",
          nl: "Zugzwang is een situatie waar een speler moet bewegen, maar elke legale zet hun positie verslechtert. Het is Duits voor 'dwang om te bewegen.'"
        }
      },
      {
        question: {
          en: "What is the center of the chess board?",
          es: "¿Cuál es el centro del tablero de ajedrez?",
          de: "Was ist das Zentrum des Schachbretts?",
          nl: "Wat is het centrum van het schaakbord?"
        },
        options: [
          { en: "The four central squares: d4, d5, e4, e5", es: "Las cuatro casillas centrales: d4, d5, e4, e5", de: "Die vier zentralen Felder: d4, d5, e4, e5", nl: "De vier centrale vakjes: d4, d5, e4, e5" },
          { en: "The square where the queens start", es: "La casilla donde comienzan las reinas", de: "Das Feld wo die Damen starten", nl: "Het vakje waar de koninginnen starten" },
          { en: "Any square in the middle rows", es: "Cualquier casilla en las filas del medio", de: "Jedes Feld in den mittleren Reihen", nl: "Elk vakje in de middelste rijen" },
          { en: "The d1 and e1 squares", es: "Las casillas d1 y e1", de: "Die Felder d1 und e1", nl: "De vakjes d1 en e1" }
        ],
        correct: 0,
        explanation: {
          en: "The center consists of the four squares d4, d5, e4, and e5. Controlling the center is a fundamental chess strategy that allows greater piece mobility.",
          es: "El centro consiste en las cuatro casillas d4, d5, e4 y e5. Controlar el centro es una estrategia fundamental de ajedrez que permite mayor movilidad de piezas.",
          de: "Das Zentrum besteht aus den vier Feldern d4, d5, e4 und e5. Die Kontrolle des Zentrums ist eine grundlegende Schachstrategie, die größere Figurenmobilität ermöglicht.",
          nl: "Het centrum bestaat uit de vier vakjes d4, d5, e4 en e5. Het controleren van het centrum is een fundamentele schaakstrategie die grotere stuk mobiliteit mogelijk maakt."
        }
      },
      {
        question: {
          en: "What happens when a king is in check?",
          es: "¿Qué pasa cuando un rey está en jaque?",
          de: "Was passiert, wenn ein König im Schach steht?",
          nl: "Wat gebeurt er wanneer een koning schaak staat?"
        },
        options: [
          { en: "The player loses immediately", es: "El jugador pierde inmediatamente", de: "Der Spieler verliert sofort", nl: "De speler verliest onmiddellijk" },
          { en: "The player must get out of check on next move", es: "El jugador debe salir del jaque en el siguiente movimiento", de: "Der Spieler muss im nächsten Zug aus dem Schach", nl: "De speler moet uit schaak komen in de volgende zet" },
          { en: "The game is a draw", es: "El juego es empate", de: "Das Spiel ist unentschieden", nl: "Het spel is remise" },
          { en: "The attacking piece is removed", es: "La pieza atacante se retira", de: "Die angreifende Figur wird entfernt", nl: "Het aanvallende stuk wordt verwijderd" }
        ],
        correct: 1,
        explanation: {
          en: "When in check, the player must escape on their next move by moving the king, blocking the attack, or capturing the attacking piece.",
          es: "Cuando está en jaque, el jugador debe escapar en su siguiente movimiento moviendo el rey, bloqueando el ataque o capturando la pieza atacante.",
          de: "Wenn im Schach, muss der Spieler im nächsten Zug entkommen, indem er den König bewegt, den Angriff blockiert oder die angreifende Figur schlägt.",
          nl: "Wanneer schaak staat, moet de speler in hun volgende zet ontsnappen door de koning te bewegen, de aanval te blokkeren, of het aanvallende stuk te slaan."
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