// Quiz Template - Level 2: Bord spelletjes - Schaken
(function() {
  const level2 = {
    name: {
      en: "Chess",
      es: "Ajedrez",
      de: "Schach",
      nl: "Schaken"
    },
    questions: [
      {
        question: {
          en: "What is it called when the king is under attack?",
          es: "¿Cómo se llama cuando el rey está bajo ataque?",
          de: "Wie nennt man es, wenn der König angegriffen wird?",
          nl: "Hoe heet het als de koning wordt aangevallen?"
        },
        options: [
          { en: "Check", es: "Jaque", de: "Schach", nl: "Schaak" },
          { en: "Checkmate", es: "Jaque mate", de: "Schachmatt", nl: "Schaakmat" },
          { en: "Capture", es: "Captura", de: "Schlagen", nl: "Slaan" },
          { en: "Threat", es: "Amenaza", de: "Bedrohung", nl: "Bedreiging" }
        ],
        correct: 0,
        explanation: {
          en: "When the king is under attack but can escape, it's called 'check'. The player must move their king to safety.",
          es: "Cuando el rey está bajo ataque pero puede escapar, se llama 'jaque'. El jugador debe mover su rey a un lugar seguro.",
          de: "Wenn der König angegriffen wird aber entkommen kann, nennt man es 'Schach'. Der Spieler muss seinen König in Sicherheit bringen.",
          nl: "Wanneer de koning wordt aangevallen maar kan ontsnappen, heet het 'schaak'. De speler moet zijn koning in veiligheid brengen."
        }
      },
      {
        question: {
          en: "How many pawns does each player start with?",
          es: "¿Con cuántos peones comienza cada jugador?",
          de: "Mit wie vielen Bauern beginnt jeder Spieler?",
          nl: "Met hoeveel pionnen begint elke speler?"
        },
        options: [
          { en: "8 pawns", es: "8 peones", de: "8 Bauern", nl: "8 pionnen" },
          { en: "6 pawns", es: "6 peones", de: "6 Bauern", nl: "6 pionnen" },
          { en: "10 pawns", es: "10 peones", de: "10 Bauern", nl: "10 pionnen" },
          { en: "4 pawns", es: "4 peones", de: "4 Bauern", nl: "4 pionnen" }
        ],
        correct: 0,
        explanation: {
          en: "Each player starts with 8 pawns, placed on the second rank at the beginning of the game.",
          es: "Cada jugador comienza con 8 peones, colocados en la segunda fila al comienzo del juego.",
          de: "Jeder Spieler beginnt mit 8 Bauern, die zu Beginn des Spiels in der zweiten Reihe platziert werden.",
          nl: "Elke speler begint met 8 pionnen, geplaatst op de tweede rij aan het begin van het spel."
        }
      },
      {
        question: {
          en: "What is the value of a rook in terms of pawns?",
          es: "¿Cuál es el valor de una torre en términos de peones?",
          de: "Was ist der Wert eines Turms in Bezug auf Bauern?",
          nl: "Wat is de waarde van een toren in termen van pionnen?"
        },
        options: [
          { en: "5 pawns", es: "5 peones", de: "5 Bauern", nl: "5 pionnen" },
          { en: "3 pawns", es: "3 peones", de: "3 Bauern", nl: "3 pionnen" },
          { en: "4 pawns", es: "4 peones", de: "4 Bauern", nl: "4 pionnen" },
          { en: "9 pawns", es: "9 peones", de: "9 Bauern", nl: "9 pionnen" }
        ],
        correct: 0,
        explanation: {
          en: "A rook is generally valued at 5 pawns (or 5 points), making it one of the most valuable pieces after the queen.",
          es: "Una torre generalmente se valora en 5 peones (o 5 puntos), lo que la convierte en una de las piezas más valiosas después de la reina.",
          de: "Ein Turm wird im Allgemeinen mit 5 Bauern (oder 5 Punkten) bewertet, was ihn nach der Dame zu einer der wertvollsten Figuren macht.",
          nl: "Een toren wordt over het algemeen gewaardeerd op 5 pionnen (of 5 punten), waardoor het een van de meest waardevolle stukken is na de koningin."
        }
      },
      {
        question: {
          en: "Can a pawn move backward?",
          es: "¿Puede un peón moverse hacia atrás?",
          de: "Kann ein Bauer rückwärts ziehen?",
          nl: "Kan een pion achteruit bewegen?"
        },
        options: [
          { en: "No, only forward", es: "No, solo hacia adelante", de: "Nein, nur vorwärts", nl: "Nee, alleen vooruit" },
          { en: "Yes, one square", es: "Sí, una casilla", de: "Ja, ein Feld", nl: "Ja, één vakje" },
          { en: "Yes, when capturing", es: "Sí, al capturar", de: "Ja, beim Schlagen", nl: "Ja, bij het slaan" },
          { en: "Only after promotion", es: "Solo después de la promoción", de: "Nur nach Umwandlung", nl: "Alleen na promotie" }
        ],
        correct: 0,
        explanation: {
          en: "Pawns can only move forward, never backward. This makes them unique and strategic pieces in the game.",
          es: "Los peones solo pueden moverse hacia adelante, nunca hacia atrás. Esto los convierte en piezas únicas y estratégicas en el juego.",
          de: "Bauern können nur vorwärts ziehen, niemals rückwärts. Dies macht sie zu einzigartigen und strategischen Figuren im Spiel.",
          nl: "Pionnen kunnen alleen vooruit bewegen, nooit achteruit. Dit maakt ze unieke en strategische stukken in het spel."
        }
      },
      {
        question: {
          en: "What happens when a king has no legal moves but is not in check?",
          es: "¿Qué sucede cuando un rey no tiene movimientos legales pero no está en jaque?",
          de: "Was passiert, wenn ein König keine legalen Züge hat, aber nicht im Schach steht?",
          nl: "Wat gebeurt er als een koning geen legale zetten heeft maar niet schaak staat?"
        },
        options: [
          { en: "Stalemate (draw)", es: "Ahogado (empate)", de: "Patt (Unentschieden)", nl: "Pat (remise)" },
          { en: "Player loses", es: "El jugador pierde", de: "Spieler verliert", nl: "Speler verliest" },
          { en: "Game continues", es: "El juego continúa", de: "Spiel geht weiter", nl: "Spel gaat door" },
          { en: "Checkmate", es: "Jaque mate", de: "Schachmatt", nl: "Schaakmat" }
        ],
        correct: 0,
        explanation: {
          en: "Stalemate occurs when a player has no legal moves and their king is not in check. This results in a draw rather than a loss.",
          es: "El ahogado ocurre cuando un jugador no tiene movimientos legales y su rey no está en jaque. Esto resulta en empate en lugar de derrota.",
          de: "Patt tritt ein, wenn ein Spieler keine legalen Züge hat und sein König nicht im Schach steht. Dies führt zu einem Unentschieden statt zu einer Niederlage.",
          nl: "Pat treedt op wanneer een speler geen legale zetten heeft en zijn koning niet schaak staat. Dit resulteert in remise in plaats van verlies."
        }
      },
      {
        question: {
          en: "How many squares are on a standard chess board?",
          es: "¿Cuántos cuadrados hay en un tablero de ajedrez estándar?",
          de: "Wie viele Felder hat ein Standard-Schachbrett?",
          nl: "Hoeveel vakjes heeft een standaard schaakbord?"
        },
        options: [
          { en: "64", es: "64", de: "64", nl: "64" },
          { en: "81", es: "81", de: "81", nl: "81" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "49", es: "49", de: "49", nl: "49" }
        ],
        correct: 0,
        explanation: {
          en: "A standard chess board has 64 squares arranged in an 8x8 grid.",
          es: "Un tablero de ajedrez estándar tiene 64 cuadrados dispuestos en una cuadrícula de 8x8.",
          de: "Ein Standard-Schachbrett hat 64 Felder in einem 8x8-Gitter angeordnet.",
          nl: "Een standaard schaakbord heeft 64 vakjes gerangschikt in een 8x8 raster."
        }
      },
      {
        question: {
          en: "Which piece can move in an L-shape?",
          es: "¿Qué pieza se puede mover en forma de L?",
          de: "Welche Figur kann sich L-förmig bewegen?",
          nl: "Welk stuk kan in een L-vorm bewegen?"
        },
        options: [
          { en: "Knight", es: "Caballo", de: "Springer", nl: "Paard" },
          { en: "Bishop", es: "Alfil", de: "Läufer", nl: "Loper" },
          { en: "Rook", es: "Torre", de: "Turm", nl: "Toren" },
          { en: "Queen", es: "Reina", de: "Dame", nl: "Koningin" }
        ],
        correct: 0,
        explanation: {
          en: "The knight is the only chess piece that moves in an L-shape: two squares in one direction and one square perpendicular.",
          es: "El caballo es la única pieza de ajedrez que se mueve en forma de L: dos casillas en una dirección y una casilla perpendicular.",
          de: "Der Springer ist die einzige Schachfigur, die sich L-förmig bewegt: zwei Felder in eine Richtung und ein Feld senkrecht.",
          nl: "Het paard is het enige schaakstuk dat in een L-vorm beweegt: twee vakjes in één richting en één vakje loodrecht."
        }
      },
      {
        question: {
          en: "What is the most powerful piece in chess?",
          es: "¿Cuál es la pieza más poderosa en el ajedrez?",
          de: "Was ist die mächtigste Figur im Schach?",
          nl: "Wat is het krachtigste stuk in schaken?"
        },
        options: [
          { en: "Queen", es: "Reina", de: "Dame", nl: "Koningin" },
          { en: "King", es: "Rey", de: "König", nl: "Koning" },
          { en: "Rook", es: "Torre", de: "Turm", nl: "Toren" },
          { en: "Knight", es: "Caballo", de: "Springer", nl: "Paard" }
        ],
        correct: 0,
        explanation: {
          en: "The queen is the most powerful piece as it can move any number of squares horizontally, vertically, or diagonally.",
          es: "La reina es la pieza más poderosa ya que puede moverse cualquier número de casillas horizontal, vertical o diagonalmente.",
          de: "Die Dame ist die mächtigste Figur, da sie beliebig viele Felder horizontal, vertikal oder diagonal ziehen kann.",
          nl: "De koningin is het krachtigste stuk omdat het elk aantal vakjes horizontaal, verticaal of diagonaal kan bewegen."
        }
      },
      {
        question: {
          en: "What is it called when a pawn reaches the opposite end of the board?",
          es: "¿Cómo se llama cuando un peón llega al extremo opuesto del tablero?",
          de: "Wie nennt man es, wenn ein Bauer das gegenüberliegende Ende des Brettes erreicht?",
          nl: "Hoe heet het als een pion de andere kant van het bord bereikt?"
        },
        options: [
          { en: "Promotion", es: "Promoción", de: "Umwandlung", nl: "Promotie" },
          { en: "Elevation", es: "Elevación", de: "Erhebung", nl: "Verheffing" },
          { en: "Advancement", es: "Avance", de: "Aufstieg", nl: "Bevordering" },
          { en: "Coronation", es: "Coronación", de: "Krönung", nl: "Kroning" }
        ],
        correct: 0,
        explanation: {
          en: "Promotion occurs when a pawn reaches the eighth rank and must be converted to a queen, rook, bishop, or knight.",
          es: "La promoción ocurre cuando un peón llega a la octava fila y debe convertirse en reina, torre, alfil o caballo.",
          de: "Umwandlung erfolgt, wenn ein Bauer die achte Reihe erreicht und in eine Dame, Turm, Läufer oder Springer umgewandelt werden muss.",
          nl: "Promotie vindt plaats wanneer een pion de achtste rij bereikt en moet worden omgezet in een koningin, toren, loper of paard."
        }
      },
      {
        question: {
          en: "What is the objective of the game of chess?",
          es: "¿Cuál es el objetivo del juego de ajedrez?",
          de: "Was ist das Ziel des Schachspiels?",
          nl: "Wat is het doel van het schaakspel?"
        },
        options: [
          { en: "Checkmate the opponent's king", es: "Dar jaque mate al rey del oponente", de: "Den gegnerischen König schachmatt setzen", nl: "De koning van de tegenstander schaakmat zetten" },
          { en: "Capture all opponent's pieces", es: "Capturar todas las piezas del oponente", de: "Alle gegnerischen Figuren schlagen", nl: "Alle stukken van de tegenstander slaan" },
          { en: "Control the center", es: "Controlar el centro", de: "Das Zentrum kontrollieren", nl: "Het centrum controleren" },
          { en: "Reach the other side", es: "Llegar al otro lado", de: "Die andere Seite erreichen", nl: "De andere kant bereiken" }
        ],
        correct: 0,
        explanation: {
          en: "The objective is to checkmate the opponent's king, which means placing it under attack with no legal move to escape.",
          es: "El objetivo es dar jaque mate al rey del oponente, lo que significa colocarlo bajo ataque sin ningún movimiento legal para escapar.",
          de: "Das Ziel ist es, den gegnerischen König schachmatt zu setzen, was bedeutet, ihn unter Angriff zu setzen ohne legalen Zug zur Flucht.",
          nl: "Het doel is om de koning van de tegenstander schaakmat te zetten, wat betekent dat hij onder aanval staat zonder legale zet om te ontsnappen."
        }
      },
      {
        question: {
          en: "Which piece can only move diagonally?",
          es: "¿Qué pieza solo puede moverse en diagonal?",
          de: "Welche Figur kann sich nur diagonal bewegen?",
          nl: "Welk stuk kan alleen diagonaal bewegen?"
        },
        options: [
          { en: "Bishop", es: "Alfil", de: "Läufer", nl: "Loper" },
          { en: "Pawn", es: "Peón", de: "Bauer", nl: "Pion" },
          { en: "Knight", es: "Caballo", de: "Springer", nl: "Paard" },
          { en: "Rook", es: "Torre", de: "Turm", nl: "Toren" }
        ],
        correct: 0,
        explanation: {
          en: "The bishop can only move diagonally any number of squares along the diagonal lines.",
          es: "El alfil solo puede moverse en diagonal cualquier número de casillas a lo largo de las líneas diagonales.",
          de: "Der Läufer kann sich nur diagonal beliebig viele Felder entlang der Diagonalen bewegen.",
          nl: "De loper kan alleen diagonaal elk aantal vakjes langs de diagonale lijnen bewegen."
        }
      },
      {
        question: {
          en: "What special move allows the king and rook to move simultaneously?",
          es: "¿Qué movimiento especial permite que el rey y la torre se muevan simultáneamente?",
          de: "Welcher Spezialzug erlaubt es dem König und Turm, sich gleichzeitig zu bewegen?",
          nl: "Welke speciale zet stelt de koning en toren in staat om tegelijk te bewegen?"
        },
        options: [
          { en: "Castling", es: "Enroque", de: "Rochade", nl: "Rokade" },
          { en: "En passant", es: "Al paso", de: "En passant", nl: "En passant" },
          { en: "Double move", es: "Movimiento doble", de: "Doppelzug", nl: "Dubbele zet" },
          { en: "King's leap", es: "Salto del rey", de: "Königssprung", nl: "Koningssprong" }
        ],
        correct: 0,
        explanation: {
          en: "Castling is a special move where the king moves two squares toward a rook and the rook moves to the square the king crossed.",
          es: "El enroque es un movimiento especial donde el rey se mueve dos casillas hacia una torre y la torre se mueve a la casilla que el rey cruzó.",
          de: "Rochade ist ein Spezialzug, bei dem der König zwei Felder in Richtung eines Turms zieht und der Turm auf das überquerte Feld zieht.",
          nl: "Rokade is een speciale zet waarbij de koning twee vakjes naar een toren beweegt en de toren naar het vakje beweegt dat de koning overstak."
        }
      },
      {
        question: {
          en: "How many pieces does each player start with in chess?",
          es: "¿Con cuántas piezas comienza cada jugador en el ajedrez?",
          de: "Mit wie vielen Figuren beginnt jeder Spieler im Schach?",
          nl: "Met hoeveel stukken begint elke speler in schaken?"
        },
        options: [
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 0,
        explanation: {
          en: "Each player starts with 16 pieces: 1 king, 1 queen, 2 rooks, 2 bishops, 2 knights, and 8 pawns.",
          es: "Cada jugador comienza con 16 piezas: 1 rey, 1 reina, 2 torres, 2 alfiles, 2 caballos y 8 peones.",
          de: "Jeder Spieler beginnt mit 16 Figuren: 1 König, 1 Dame, 2 Türme, 2 Läufer, 2 Springer und 8 Bauern.",
          nl: "Elke speler begint met 16 stukken: 1 koning, 1 koningin, 2 torens, 2 lopers, 2 paarden en 8 pionnen."
        }
      },
      {
        question: {
          en: "What is the term for a draw where neither player can checkmate?",
          es: "¿Cuál es el término para un empate donde ningún jugador puede dar jaque mate?",
          de: "Was ist der Begriff für ein Unentschieden, bei dem kein Spieler schachmatt setzen kann?",
          nl: "Wat is de term voor remise waarbij geen speler schaakmat kan zetten?"
        },
        options: [
          { en: "Stalemate", es: "Ahogado", de: "Patt", nl: "Pat" },
          { en: "Deadlock", es: "Punto muerto", de: "Stillstand", nl: "Impasse" },
          { en: "Blockade", es: "Bloqueo", de: "Blockade", nl: "Blokkade" },
          { en: "Standoff", es: "Impasse", de: "Stillstand", nl: "Patstelling" }
        ],
        correct: 0,
        explanation: {
          en: "A stalemate occurs when a player has no legal moves and their king is not in check, resulting in a draw.",
          es: "Un ahogado ocurre cuando un jugador no tiene movimientos legales y su rey no está en jaque, resultando en empate.",
          de: "Ein Patt tritt ein, wenn ein Spieler keine legalen Züge hat und sein König nicht im Schach steht, was zu einem Unentschieden führt.",
          nl: "Pat treedt op wanneer een speler geen legale zetten heeft en zijn koning niet schaak staat, wat resulteert in remise."
        }
      },
      {
        question: {
          en: "Which chess piece can jump over other pieces?",
          es: "¿Qué pieza de ajedrez puede saltar sobre otras piezas?",
          de: "Welche Schachfigur kann über andere Figuren springen?",
          nl: "Welk schaakstuk kan over andere stukken springen?"
        },
        options: [
          { en: "Knight", es: "Caballo", de: "Springer", nl: "Paard" },
          { en: "Queen", es: "Reina", de: "Dame", nl: "Koningin" },
          { en: "Bishop", es: "Alfil", de: "Läufer", nl: "Loper" },
          { en: "Pawn", es: "Peón", de: "Bauer", nl: "Pion" }
        ],
        correct: 0,
        explanation: {
          en: "The knight is the only piece that can jump over other pieces during its L-shaped movement.",
          es: "El caballo es la única pieza que puede saltar sobre otras piezas durante su movimiento en forma de L.",
          de: "Der Springer ist die einzige Figur, die während ihrer L-förmigen Bewegung über andere Figuren springen kann.",
          nl: "Het paard is het enige stuk dat over andere stukken kan springen tijdens zijn L-vormige beweging."
        }
      },
      {
        question: {
          en: "What is the starting position of the queen in chess?",
          es: "¿Cuál es la posición inicial de la reina en el ajedrez?",
          de: "Was ist die Startposition der Dame im Schach?",
          nl: "Wat is de startpositie van de koningin in schaken?"
        },
        options: [
          { en: "On its own color", es: "En su propio color", de: "Auf ihrer eigenen Farbe", nl: "Op haar eigen kleur" },
          { en: "Next to the king", es: "Junto al rey", de: "Neben dem König", nl: "Naast de koning" },
          { en: "On any square", es: "En cualquier casilla", de: "Auf einem beliebigen Feld", nl: "Op elk vakje" },
          { en: "In the corner", es: "En la esquina", de: "In der Ecke", nl: "In de hoek" }
        ],
        correct: 0,
        explanation: {
          en: "The queen starts on its own color: the white queen on a light square (d1) and the black queen on a dark square (d8).",
          es: "La reina comienza en su propio color: la reina blanca en una casilla clara (d1) y la reina negra en una casilla oscura (d8).",
          de: "Die Dame beginnt auf ihrer eigenen Farbe: die weiße Dame auf einem hellen Feld (d1) und die schwarze Dame auf einem dunklen Feld (d8).",
          nl: "De koningin begint op haar eigen kleur: de witte koningin op een licht vakje (d1) en de zwarte koningin op een donker vakje (d8)."
        }
      },
      {
        question: {
          en: "What is the minimum number of moves to checkmate in chess?",
          es: "¿Cuál es el número mínimo de movimientos para dar jaque mate en ajedrez?",
          de: "Was ist die minimale Anzahl von Zügen für ein Schachmatt?",
          nl: "Wat is het minimale aantal zetten om schaakmat te zetten?"
        },
        options: [
          { en: "2 moves (Fool's Mate)", es: "2 movimientos (Mate del Pastor)", de: "2 Züge (Narrenmatt)", nl: "2 zetten (Schaakmat van de Dwaas)" },
          { en: "1 move", es: "1 movimiento", de: "1 Zug", nl: "1 zet" },
          { en: "3 moves", es: "3 movimientos", de: "3 Züge", nl: "3 zetten" },
          { en: "4 moves", es: "4 movimientos", de: "4 Züge", nl: "4 zetten" }
        ],
        correct: 0,
        explanation: {
          en: "The quickest possible checkmate is Fool's Mate, which can occur after just 2 moves by each player.",
          es: "El jaque mate más rápido posible es el Mate del Pastor, que puede ocurrir después de solo 2 movimientos por cada jugador.",
          de: "Das schnellstmögliche Schachmatt ist das Narrenmatt, das nach nur 2 Zügen von jedem Spieler eintreten kann.",
          nl: "De snelst mogelijke schaakmat is het Schaakmat van de Dwaas, dat kan plaatsvinden na slechts 2 zetten per speler."
        }
      },
      {
        question: {
          en: "How does a pawn capture other pieces?",
          es: "¿Cómo captura un peón otras piezas?",
          de: "Wie schlägt ein Bauer andere Figuren?",
          nl: "Hoe slaat een pion andere stukken?"
        },
        options: [
          { en: "Diagonally one square", es: "Diagonalmente una casilla", de: "Diagonal ein Feld", nl: "Diagonaal één vakje" },
          { en: "Forward one square", es: "Adelante una casilla", de: "Vorwärts ein Feld", nl: "Vooruit één vakje" },
          { en: "Sideways one square", es: "Lateralmente una casilla", de: "Seitwärts ein Feld", nl: "Zijwaarts één vakje" },
          { en: "Backward one square", es: "Hacia atrás una casilla", de: "Rückwärts ein Feld", nl: "Achteruit één vakje" }
        ],
        correct: 0,
        explanation: {
          en: "Pawns capture diagonally one square forward, although they normally move straight ahead without capturing.",
          es: "Los peones capturan diagonalmente una casilla hacia adelante, aunque normalmente se mueven hacia adelante sin capturar.",
          de: "Bauern schlagen diagonal ein Feld vorwärts, obwohl sie normalerweise gerade vorwärts ziehen ohne zu schlagen.",
          nl: "Pionnen slaan diagonaal één vakje vooruit, hoewel ze normaal gesproken rechtdoor bewegen zonder te slaan."
        }
      },
      {
        question: {
          en: "What is the special pawn capture move called 'en passant'?",
          es: "¿Qué es el movimiento especial de captura de peón llamado 'al paso'?",
          de: "Was ist der spezielle Bauernschlag namens 'en passant'?",
          nl: "Wat is de speciale pionslag genaamd 'en passant'?"
        },
        options: [
          { en: "Capturing pawn moved two squares", es: "Capturar un peón que se movió dos casillas", de: "Schlagen eines Bauern, der zwei Felder gezogen ist", nl: "Het slaan van een pion die twee vakjes bewoog" },
          { en: "Capturing while moving forward", es: "Capturar mientras se mueve hacia adelante", de: "Schlagen beim Vorwärtsbewegen", nl: "Slaan tijdens vooruitbewegen" },
          { en: "Capturing two pieces at once", es: "Capturar dos piezas a la vez", de: "Zwei Figuren auf einmal schlagen", nl: "Twee stukken tegelijk slaan" },
          { en: "Capturing backward", es: "Capturar hacia atrás", de: "Rückwärts schlagen", nl: "Achteruit slaan" }
        ],
        correct: 0,
        explanation: {
          en: "En passant allows a pawn to capture an opponent's pawn that has just moved two squares forward from its starting position, as if it had only moved one square.",
          es: "Al paso permite a un peón capturar un peón oponente que acaba de moverse dos casillas hacia adelante desde su posición inicial, como si solo se hubiera movido una casilla.",
          de: "En passant erlaubt es einem Bauern, einen gegnerischen Bauern zu schlagen, der gerade zwei Felder von seiner Startposition vorwärts gezogen ist, als ob er nur ein Feld gezogen wäre.",
          nl: "En passant stelt een pion in staat om een tegenstanders pion te slaan die zojuist twee vakjes vooruit is gegaan vanaf zijn startpositie, alsof hij maar één vakje had bewogen."
        }
      },
      {
        question: {
          en: "How many different types of pieces are in chess?",
          es: "¿Cuántos tipos diferentes de piezas hay en el ajedrez?",
          de: "Wie viele verschillende Figurentypen gibt es im Schach?",
          nl: "Hoeveel verschillende soorten stukken zijn er in schaken?"
        },
        options: [
          { en: "6 piece types", es: "6 (Rey, Reina, Torre, Alfil, Caballo, Peón)", de: "6 (König, Dame, Turm, Läufer, Springer, Bauer)", nl: "6 (Koning, Koningin, Toren, Loper, Paard, Pion)" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 0,
        explanation: {
          en: "There are 6 different types of chess pieces: king, queen, rook, bishop, knight, and pawn, each with unique movement patterns.",
          es: "Hay 6 tipos diferentes de piezas de ajedrez: rey, reina, torre, alfil, caballo y peón, cada uno con patrones de movimiento únicos.",
          de: "Es gibt 6 verschiedene Arten von Schachfiguren: König, Dame, Turm, Läufer, Springer und Bauer, jede mit einzigartigen Bewegungsmustern.",
          nl: "Er zijn 6 verschillende soorten schaakstukken: koning, koningin, toren, loper, paard en pion, elk met unieke bewegingspatronen."
        }
      },
      {
        question: {
          en: "What does it mean to 'develop' a piece in chess?",
          es: "¿Qué significa 'desarrollar' una pieza en ajedrez?",
          de: "Was bedeutet es, eine Figur zu 'entwickeln'?",
          nl: "Wat betekent het om een stuk te 'ontwikkelen'?"
        },
        options: [
          { en: "Move it from starting position to active square", es: "Moverla desde su posición inicial a una casilla activa", de: "Sie von der Startposition auf ein aktives Feld ziehen", nl: "Het bewegen van startpositie naar actief vakje" },
          { en: "Promote it to a queen", es: "Promoverla a reina", de: "Sie zur Dame befördern", nl: "Het promoveren tot koningin" },
          { en: "Capture an opponent's piece", es: "Capturar una pieza del oponente", de: "Eine gegnerische Figur schlagen", nl: "Een stuk van de tegenstander slaan" },
          { en: "Move it to the opponent's side", es: "Moverla al lado del oponente", de: "Sie auf die Gegnerseite ziehen", nl: "Het naar de kant van de tegenstander bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Developing a piece means moving it from its starting position to a more active square where it can control important parts of the board.",
          es: "Desarrollar una pieza significa moverla desde su posición inicial a una casilla más activa donde puede controlar partes importantes del tablero.",
          de: "Eine Figur entwickeln bedeutet, sie von ihrer Startposition auf ein aktiveres Feld zu ziehen, wo sie wichtige Teile des Bretts kontrollieren kann.",
          nl: "Een stuk ontwikkelen betekent het bewegen van zijn startpositie naar een actiever vakje waar het belangrijke delen van het bord kan controleren."
        }
      },
      {
        question: {
          en: "Which opening move is most common for White?",
          es: "¿Cuál es el movimiento de apertura más común para las Blancas?",
          de: "Welcher Eröffnungszug ist für Weiß am häufigsten?",
          nl: "Welke openingszet is het meest gebruikelijk voor Wit?"
        },
        options: [
          { en: "e4 (moving king's pawn two squares)", es: "e4 (mover el peón del rey dos casillas)", de: "e4 (Königsbauer zwei Felder)", nl: "e4 (koningspion twee vakjes)" },
          { en: "a4 (moving rook's pawn)", es: "a4 (mover el peón de la torre)", de: "a4 (Turmbauer)", nl: "a4 (torenpion)" },
          { en: "Nf3 (moving knight)", es: "Nf3 (mover el caballo)", de: "Nf3 (Springer)", nl: "Nf3 (paard)" },
          { en: "Qh5 (moving queen)", es: "Qh5 (mover la reina)", de: "Qh5 (Dame)", nl: "Qh5 (koningin)" }
        ],
        correct: 0,
        explanation: {
          en: "1.e4 is one of the most popular opening moves, immediately claiming central space and freeing both the queen and bishop for development.",
          es: "1.e4 es uno de los movimientos de apertura más populares, reclamando inmediatamente espacio central y liberando tanto la reina como el alfil para su desarrollo.",
          de: "1.e4 ist einer der beliebtesten Eröffnungszüge, beansprucht sofort zentralen Raum und gibt Dame und Läufer frei zur Entwicklung.",
          nl: "1.e4 is een van de populairste openingszetten, claimt onmiddellijk centraal ruimte en maakt zowel de koningin als loper vrij voor ontwikkeling."
        }
      },
      {
        question: {
          en: "What is a 'fork' in chess?",
          es: "¿Qué es un 'tenedor' en ajedrez?",
          de: "Was ist eine 'Gabel' im Schach?",
          nl: "Wat is een 'vork' bij schaken?"
        },
        options: [
          { en: "Attacking two pieces simultaneously", es: "Atacar dos piezas simultáneamente", de: "Zwei Figuren gleichzeitig angreifen", nl: "Twee stukken tegelijk aanvallen" },
          { en: "Choosing between two moves", es: "Elegir entre dos movimientos", de: "Zwischen zwei Zügen wählen", nl: "Kiezen tussen twee zetten" },
          { en: "Splitting pawns on both sides", es: "Dividir peones en ambos lados", de: "Bauern auf beiden Seiten aufteilen", nl: "Pionnen aan beide kanten splitsen" },
          { en: "A two-move checkmate", es: "Un jaque mate en dos movimientos", de: "Ein Schachmatt in zwei Zügen", nl: "Een schaakmat in twee zetten" }
        ],
        correct: 0,
        explanation: {
          en: "A fork is a tactic where one piece attacks two or more enemy pieces at the same time, forcing the opponent to lose material.",
          es: "Un tenedor es una táctica donde una pieza ataca dos o más piezas enemigas al mismo tiempo, forzando al oponente a perder material.",
          de: "Eine Gabel ist eine Taktik, bei der eine Figur zwei oder mehr feindliche Figuren gleichzeitig angreift und den Gegner zwingt, Material zu verlieren.",
          nl: "Een vork is een tactiek waarbij één stuk twee of meer vijandelijke stukken tegelijk aanvalt, waardoor de tegenstander materiaal verliest."
        }
      },
      {
        question: {
          en: "How many knights can you have on the board at once?",
          es: "¿Cuántos caballos puedes tener en el tablero a la vez?",
          de: "Wie viele Springer können Sie gleichzeitig auf dem Brett haben?",
          nl: "Hoeveel paarden kun je tegelijk op het bord hebben?"
        },
        options: [
          { en: "Up to 10 (via pawn promotion)", es: "Hasta 10 (mediante promoción de peones)", de: "Bis zu 10 (durch Bauernumwandlung)", nl: "Tot 10 (via pionpromotie)" },
          { en: "Only 2 (the starting knights)", es: "Solo 2 (los caballos iniciales)", de: "Nur 2 (die Startspringer)", nl: "Slechts 2 (de startpaarden)" },
          { en: "4 maximum", es: "Máximo 4", de: "Maximal 4", nl: "Maximaal 4" },
          { en: "6 maximum", es: "Máximo 6", de: "Maximal 6", nl: "Maximaal 6" }
        ],
        correct: 0,
        explanation: {
          en: "You can have up to 10 knights: the 2 starting knights plus 8 more from pawn promotions (though this is extremely rare in practice).",
          es: "Puedes tener hasta 10 caballos: los 2 caballos iniciales más 8 adicionales de promociones de peones (aunque esto es extremadamente raro en la práctica).",
          de: "Sie können bis zu 10 Springer haben: die 2 Startspringer plus 8 weitere durch Bauernumwandlungen (obwohl dies in der Praxis äußerst selten ist).",
          nl: "Je kunt tot 10 paarden hebben: de 2 startpaarden plus 8 extra via pionpromoties (hoewel dit in de praktijk extreem zeldzaam is)."
        }
      },
      {
        question: {
          en: "What is the threefold repetition rule?",
          es: "¿Qué es la regla de la repetición triple?",
          de: "Was ist die Dreifache-Wiederholung-Regel?",
          nl: "Wat is de drievoudige herhaling regel?"
        },
        options: [
          { en: "Same position 3 times = draw can be claimed", es: "Misma posición 3 veces = se puede reclamar empate", de: "Gleiche Stellung 3-mal = Remis kann beansprucht werden", nl: "Zelfde positie 3 keer = remise kan worden geclaimd" },
          { en: "Move same piece 3 times = automatic loss", es: "Mover la misma pieza 3 veces = pérdida automática", de: "Gleiche Figur 3-mal ziehen = automatischer Verlust", nl: "Zelfde stuk 3 keer bewegen = automatisch verlies" },
          { en: "Check 3 times = checkmate", es: "Jaque 3 veces = jaque mate", de: "3-mal Schach = Schachmatt", nl: "3 keer schaak = schaakmat" },
          { en: "Capture 3 pieces = bonus move", es: "Capturar 3 piezas = movimiento extra", de: "3 Figuren schlagen = Bonuszug", nl: "3 stukken slaan = bonuszet" }
        ],
        correct: 0,
        explanation: {
          en: "If the same board position occurs three times with the same player to move, that player can claim a draw through threefold repetition.",
          es: "Si la misma posición del tablero ocurre tres veces con el mismo jugador por mover, ese jugador puede reclamar empate mediante repetición triple.",
          de: "Wenn dieselbe Brettstellung dreimal mit demselben Spieler am Zug auftritt, kann dieser Spieler durch dreifache Wiederholung Remis beanspruchen.",
          nl: "Als dezelfde bordpositie drie keer voorkomt met dezelfde speler aan zet, kan die speler remise claimen via drievoudige herhaling."
        }
      },
      {
        question: {
          en: "What are 'doubled pawns'?",
          es: "¿Qué son 'peones doblados'?",
          de: "Was sind 'Doppelbauern'?",
          nl: "Wat zijn 'dubbele pionnen'?"
        },
        options: [
          { en: "Two pawns of same color on same file", es: "Dos peones del mismo color en la misma columna", de: "Zwei Bauern der gleichen Farbe auf derselben Linie", nl: "Twee pionnen van dezelfde kleur op dezelfde lijn" },
          { en: "Two pawns next to each other", es: "Dos peones uno al lado del otro", de: "Zwei Bauern nebeneinander", nl: "Twee pionnen naast elkaar" },
          { en: "Pawns that moved twice", es: "Peones que se movieron dos veces", de: "Bauern, die zweimal gezogen sind", nl: "Pionnen die twee keer bewogen" },
          { en: "Pawns worth double points", es: "Peones que valen doble puntos", de: "Bauern, die doppelte Punkte wert sind", nl: "Pionnen die dubbele punten waard zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Doubled pawns are two pawns of the same color on the same file (column). This is usually a weakness as they can't defend each other.",
          es: "Los peones doblados son dos peones del mismo color en la misma columna. Esto suele ser una debilidad ya que no pueden defenderse entre sí.",
          de: "Doppelbauern sind zwei Bauern der gleichen Farbe auf derselben Linie. Dies ist meist eine Schwäche, da sie sich nicht gegenseitig verteidigen können.",
          nl: "Dubbele pionnen zijn twee pionnen van dezelfde kleur op dezelfde lijn. Dit is meestal een zwakte omdat ze elkaar niet kunnen verdedigen."
        }
      },
      {
        question: {
          en: "Can you castle if the rook has already moved?",
          es: "¿Puedes enrocar si la torre ya se ha movido?",
          de: "Können Sie rochieren, wenn der Turm sich bereits bewegt hat?",
          nl: "Kun je rokeren als de toren al bewogen heeft?"
        },
        options: [
          { en: "No, both king and rook must not have moved", es: "No, ni el rey ni la torre deben haberse movido", de: "Nein, weder König noch Turm dürfen gezogen haben", nl: "Nee, zowel koning als toren mogen niet bewogen hebben" },
          { en: "Yes, only the king must not have moved", es: "Sí, solo el rey no debe haberse movido", de: "Ja, nur der König darf nicht gezogen haben", nl: "Ja, alleen de koning mag niet bewogen hebben" },
          { en: "Yes, you can castle at any time", es: "Sí, puedes enrocar en cualquier momento", de: "Ja, Sie können jederzeit rochieren", nl: "Ja, je kunt altijd rokeren" },
          { en: "Only if both pieces return to start", es: "Solo si ambas piezas vuelven al inicio", de: "Nur wenn beide Figuren zurückkehren", nl: "Alleen als beide stukken terugkeren" }
        ],
        correct: 0,
        explanation: {
          en: "To castle, neither the king nor the rook involved can have moved previously. Once either piece moves, castling on that side is permanently unavailable.",
          es: "Para enrocar, ni el rey ni la torre involucrada pueden haberse movido previamente. Una vez que cualquiera de las piezas se mueve, el enroque en ese lado ya no está disponible permanentemente.",
          de: "Zum Rochieren dürfen weder König noch der beteiligte Turm zuvor gezogen haben. Sobald eine Figur zieht, ist die Rochade auf dieser Seite dauerhaft nicht mehr möglich.",
          nl: "Om te rokeren mogen noch de koning noch de betrokken toren eerder bewogen hebben. Zodra een van beide stukken beweegt, is rokeren aan die kant permanent niet meer mogelijk."
        }
      },
      {
        question: {
          en: "What is 'controlling the center' in chess?",
          es: "¿Qué es 'controlar el centro' en ajedrez?",
          de: "Was bedeutet 'das Zentrum kontrollieren' im Schach?",
          nl: "Wat is 'het centrum controleren' bij schaken?"
        },
        options: [
          { en: "Occupying or influencing d4, d5, e4, e5 squares", es: "Ocupar o influenciar las casillas d4, d5, e4, e5", de: "Die Felder d4, d5, e4, e5 besetzen oder beeinflussen", nl: "De vakjes d4, d5, e4, e5 bezetten of beïnvloeden" },
          { en: "Keeping your king in the middle", es: "Mantener tu rey en el medio", de: "Ihren König in der Mitte halten", nl: "Je koning in het midden houden" },
          { en: "Having more pieces than opponent", es: "Tener más piezas que el oponente", de: "Mehr Figuren als der Gegner haben", nl: "Meer stukken hebben dan de tegenstander" },
          { en: "Moving pieces to row 4 and 5", es: "Mover piezas a las filas 4 y 5", de: "Figuren auf Reihe 4 und 5 ziehen", nl: "Stukken naar rij 4 en 5 bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Controlling the center means occupying or influencing the four central squares (d4, d5, e4, e5), which gives your pieces greater mobility and influence.",
          es: "Controlar el centro significa ocupar o influenciar las cuatro casillas centrales (d4, d5, e4, e5), lo que da a tus piezas mayor movilidad e influencia.",
          de: "Das Zentrum kontrollieren bedeutet, die vier zentralen Felder (d4, d5, e4, e5) zu besetzen oder zu beeinflussen, was Ihren Figuren größere Mobilität und Einfluss gibt.",
          nl: "Het centrum controleren betekent de vier centrale vakjes (d4, d5, e4, e5) bezetten of beïnvloeden, wat je stukken grotere mobiliteit en invloed geeft."
        }
      },
      {
        question: {
          en: "What is a 'passed pawn'?",
          es: "¿Qué es un 'peón pasado'?",
          de: "Was ist ein 'Freibauer'?",
          nl: "Wat is een 'vrijpion'?"
        },
        options: [
          { en: "Pawn with no opposing pawns blocking its path", es: "Peón sin peones opuestos bloqueando su camino", de: "Bauer ohne gegnerische Bauern auf seinem Weg", nl: "Pion zonder tegenliggende pionnen die zijn pad blokkeren" },
          { en: "Pawn that already promoted", es: "Peón que ya fue promovido", de: "Bauer, der bereits umgewandelt wurde", nl: "Pion die al is gepromoveerd" },
          { en: "Pawn that moved past center", es: "Peón que pasó el centro", de: "Bauer, der das Zentrum überschritten hat", nl: "Pion die voorbij het centrum bewoog" },
          { en: "Pawn that skipped a square", es: "Peón que saltó una casilla", de: "Bauer, der ein Feld übersprungen hat", nl: "Pion die een vakje oversloeg" }
        ],
        correct: 0,
        explanation: {
          en: "A passed pawn has no enemy pawns in front of it or on adjacent files that can stop it from promoting. Passed pawns are very powerful.",
          es: "Un peón pasado no tiene peones enemigos frente a él o en columnas adyacentes que puedan evitar su promoción. Los peones pasados son muy poderosos.",
          de: "Ein Freibauer hat keine gegnerischen Bauern vor sich oder auf benachbarten Linien, die ihn an der Umwandlung hindern können. Freibauern sind sehr mächtig.",
          nl: "Een vrijpion heeft geen vijandelijke pionnen voor zich of op aangrenzende lijnen die hem kunnen stoppen bij promotie. Vrijpionnen zijn zeer krachtig."
        }
      },
      {
        question: {
          en: "What is Scholar's Mate?",
          es: "¿Qué es el Mate del Pastor?",
          de: "Was ist das Schäfermatt?",
          nl: "Wat is het Herdersschaakmat?"
        },
        options: [
          { en: "A 4-move checkmate targeting f7/f2", es: "Un jaque mate en 4 movimientos dirigido a f7/f2", de: "Ein Schachmatt in 4 Zügen gegen f7/f2", nl: "Een schaakmat in 4 zetten gericht op f7/f2" },
          { en: "Checkmate by a promoted pawn", es: "Jaque mate por un peón promovido", de: "Schachmatt durch einen umgewandelten Bauern", nl: "Schaakmat door een gepromoveerde pion" },
          { en: "Checkmate in an endgame", es: "Jaque mate en el final", de: "Schachmatt im Endspiel", nl: "Schaakmat in het eindspel" },
          { en: "Stalemate trick", es: "Truco de ahogado", de: "Patt-Trick", nl: "Pat-truc" }
        },
        correct: 0,
        explanation: {
          en: "Scholar's Mate is a 4-move checkmate where White (or Black) uses the queen and bishop to attack the weak f7 (or f2) square early in the game.",
          es: "El Mate del Pastor es un jaque mate en 4 movimientos donde las Blancas (o Negras) usan la reina y el alfil para atacar la débil casilla f7 (o f2) temprano en el juego.",
          de: "Das Schäfermatt ist ein Schachmatt in 4 Zügen, bei dem Weiß (oder Schwarz) Dame und Läufer benutzt, um das schwache f7- (oder f2-)Feld früh im Spiel anzugreifen.",
          nl: "Het Herdersschaakmat is een schaakmat in 4 zetten waarbij Wit (of Zwart) de koningin en loper gebruikt om het zwakke f7 (of f2) vakje vroeg in het spel aan te vallen."
        }
      },
      {
        question: {
          en: "What does 'tempo' mean in chess?",
          es: "¿Qué significa 'tempo' en ajedrez?",
          de: "Was bedeutet 'Tempo' im Schach?",
          nl: "Wat betekent 'tempo' bij schaken?"
        },
        options: [
          { en: "A unit of time or move advantage", es: "Una unidad de tiempo o ventaja de movimiento", de: "Eine Zeiteinheit oder Zugvorteil", nl: "Een tijdseenheid of zetvoordeel" },
          { en: "The speed of play", es: "La velocidad de juego", de: "Die Spielgeschwindigkeit", nl: "De speelsnelheid" },
          { en: "A timed game mode", es: "Un modo de juego cronometrado", de: "Ein Spiel mit Zeitlimit", nl: "Een getimede spelmodus" },
          { en: "Moving pieces quickly", es: "Mover piezas rápidamente", de: "Figuren schnell ziehen", nl: "Stukken snel bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Tempo refers to time or initiative in chess. Gaining a tempo means making a useful move while forcing your opponent to waste time. Losing tempo is the opposite.",
          es: "Tempo se refiere al tiempo o iniciativa en ajedrez. Ganar un tempo significa hacer un movimiento útil mientras fuerzas a tu oponente a perder tiempo. Perder tempo es lo opuesto.",
          de: "Tempo bezieht sich auf Zeit oder Initiative im Schach. Ein Tempo gewinnen bedeutet, einen nützlichen Zug zu machen, während man den Gegner zwingt, Zeit zu verschwenden. Ein Tempo verlieren ist das Gegenteil.",
          nl: "Tempo verwijst naar tijd of initiatief bij schaken. Een tempo winnen betekent een nuttige zet doen terwijl je je tegenstander dwingt tijd te verspillen. Tempo verliezen is het tegenovergestelde."
        }
      },
      {
        question: {
          en: "Can both players castle on the same move?",
          es: "¿Pueden ambos jugadores enrocar en el mismo movimiento?",
          de: "Können beide Spieler im gleichen Zug rochieren?",
          nl: "Kunnen beide spelers op dezelfde zet rokeren?"
        },
        options: [
          { en: "No, only one player moves at a time", es: "No, solo un jugador mueve a la vez", de: "Nein, nur ein Spieler zieht zur Zeit", nl: "Nee, slechts één speler beweegt tegelijk" },
          { en: "Yes, if both agree", es: "Sí, si ambos están de acuerdo", de: "Ja, wenn beide zustimmen", nl: "Ja, als beiden het eens zijn" },
          { en: "Yes, in the opening phase", es: "Sí, en la fase de apertura", de: "Ja, in der Eröffnungsphase", nl: "Ja, in de openingsfase" },
          { en: "Only in blitz chess", es: "Solo en ajedrez relámpago", de: "Nur beim Blitzschach", nl: "Alleen bij blitzschaken" }
        ],
        correct: 0,
        explanation: {
          en: "Players alternate turns in chess, so only one player can make a move (including castling) at a time. Both can castle in the same game, but not simultaneously.",
          es: "Los jugadores alternan turnos en ajedrez, por lo que solo un jugador puede hacer un movimiento (incluido el enroque) a la vez. Ambos pueden enrocar en el mismo juego, pero no simultáneamente.",
          de: "Spieler wechseln sich im Schach ab, sodass nur ein Spieler zu einer Zeit einen Zug (einschließlich Rochade) machen kann. Beide können im selben Spiel rochieren, aber nicht gleichzeitig.",
          nl: "Spelers wisselen beurten af bij schaken, dus slechts één speler kan een zet (inclusief rokeren) tegelijk maken. Beiden kunnen rokeren in hetzelfde spel, maar niet tegelijkertijd."
        }
      },
      {
        question: {
          en: "What is an 'isolated pawn'?",
          es: "¿Qué es un 'peón aislado'?",
          de: "Was ist ein 'isolierter Bauer'?",
          nl: "Wat is een 'geïsoleerde pion'?"
        },
        options: [
          { en: "Pawn with no friendly pawns on adjacent files", es: "Peón sin peones amigos en columnas adyacentes", de: "Bauer ohne eigene Bauern auf benachbarten Linien", nl: "Pion zonder eigen pionnen op aangrenzende lijnen" },
          { en: "Pawn that's alone on a file", es: "Peón que está solo en una columna", de: "Bauer, der allein auf einer Linie steht", nl: "Pion die alleen op een lijn staat" },
          { en: "Pawn far from the king", es: "Peón lejos del rey", de: "Bauer weit vom König entfernt", nl: "Pion ver van de koning" },
          { en: "Pawn without support", es: "Peón sin apoyo", de: "Bauer ohne Unterstützung", nl: "Pion zonder steun" }
        ],
        correct: 0,
        explanation: {
          en: "An isolated pawn has no friendly pawns on the files immediately to its left or right. This can be a weakness as it can't be defended by pawns.",
          es: "Un peón aislado no tiene peones amigos en las columnas inmediatamente a su izquierda o derecha. Esto puede ser una debilidad ya que no puede ser defendido por peones.",
          de: "Ein isolierter Bauer hat keine eigenen Bauern auf den Linien unmittelbar links oder rechts davon. Dies kann eine Schwäche sein, da er nicht von Bauern verteidigt werden kann.",
          nl: "Een geïsoleerde pion heeft geen eigen pionnen op de lijnen onmiddellijk links of rechts ervan. Dit kan een zwakte zijn omdat het niet kan worden verdedigd door pionnen."
        }
      },
      {
        question: {
          en: "What is back rank mate?",
          es: "¿Qué es el mate de la última fila?",
          de: "Was ist ein Grundreihenmatt?",
          nl: "Wat is grondlijnschaakmat?"
        },
        options: [
          { en: "Checkmate on king's starting rank, trapped by own pieces", es: "Jaque mate en la fila inicial del rey, atrapado por sus propias piezas", de: "Schachmatt auf der Grundreihe des Königs, gefangen durch eigene Figuren", nl: "Schaakmat op de startrij van de koning, vast door eigen stukken" },
          { en: "Checkmate from behind", es: "Jaque mate desde atrás", de: "Schachmatt von hinten", nl: "Schaakmat van achteren" },
          { en: "Mate with the last remaining piece", es: "Mate con la última pieza restante", de: "Matt mit der letzten verbliebenen Figur", nl: "Mat met het laatste resterende stuk" },
          { en: "Mate at the end of the game", es: "Mate al final del juego", de: "Matt am Ende des Spiels", nl: "Mat aan het eind van het spel" }
        ],
        correct: 0,
        explanation: {
          en: "Back rank mate occurs when a king is checkmated on its starting rank (1st or 8th), usually trapped by its own pawns with no escape squares.",
          es: "El mate de la última fila ocurre cuando un rey recibe jaque mate en su fila inicial (1ª u 8ª), generalmente atrapado por sus propios peones sin casillas de escape.",
          de: "Grundreihenmatt tritt auf, wenn ein König auf seiner Grundreihe (1. oder 8.) schachmatt gesetzt wird, meist gefangen durch seine eigenen Bauern ohne Fluchtfelder.",
          nl: "Grondlijnschaakmat treedt op wanneer een koning schaakmat wordt gezet op zijn startrij (1e of 8e), meestal vast door zijn eigen pionnen zonder ontsnappingsvakjes."
        }
      },
      {
        question: {
          en: "What is 'opposition' in chess?",
          es: "¿Qué es la 'oposición' en ajedrez?",
          de: "Was ist 'Opposition' im Schach?",
          nl: "Wat is 'oppositie' bij schaken?"
        },
        options: [
          { en: "Kings facing each other with odd squares between", es: "Reyes enfrentados con casillas impares entre ellos", de: "Könige, die sich mit ungerader Felderanzahl gegenüberstehen", nl: "Koningen tegenover elkaar met oneven vakjes ertussen" },
          { en: "Playing against someone", es: "Jugar contra alguien", de: "Gegen jemanden spielen", nl: "Tegen iemand spelen" },
          { en: "Opposite colored bishops", es: "Alfiles de colores opuestos", de: "Gegenfarbige Läufer", nl: "Tegengestelde gekleurde lopers" },
          { en: "Disagreeing with a move", es: "No estar de acuerdo con un movimiento", de: "Mit einem Zug nicht einverstanden sein", nl: "Het niet eens zijn met een zet" }
        ],
        correct: 0,
        explanation: {
          en: "Opposition occurs when two kings face each other with an odd number of squares between them (usually one). The player not to move has the opposition and holds an advantage.",
          es: "La oposición ocurre cuando dos reyes se enfrentan con un número impar de casillas entre ellos (generalmente una). El jugador que no mueve tiene la oposición y mantiene ventaja.",
          de: "Opposition tritt auf, wenn sich zwei Könige mit einer ungeraden Anzahl von Feldern (meist einem) gegenüberstehen. Der Spieler, der nicht am Zug ist, hat die Opposition und einen Vorteil.",
          nl: "Oppositie treedt op wanneer twee koningen elkaar aanstaren met een oneven aantal vakjes ertussen (meestal één). De speler die niet aan zet is heeft de oppositie en een voordeel."
        }
      },
      {
        question: {
          en: "Can you promote a pawn to a second queen?",
          es: "¿Puedes promover un peón a una segunda reina?",
          de: "Können Sie einen Bauern zu einer zweiten Dame umwandeln?",
          nl: "Kun je een pion promoveren tot een tweede koningin?"
        },
        options: [
          { en: "Yes, you can have multiple queens", es: "Sí, puedes tener múltiples reinas", de: "Ja, Sie können mehrere Damen haben", nl: "Ja, je kunt meerdere koninginnen hebben" },
          { en: "No, only one queen allowed per player", es: "No, solo se permite una reina por jugador", de: "Nein, nur eine Dame pro Spieler erlaubt", nl: "Nee, slechts één koningin toegestaan per speler" },
          { en: "Only if the first queen is captured", es: "Solo si la primera reina es capturada", de: "Nur wenn die erste Dame geschlagen wurde", nl: "Alleen als de eerste koningin is geslagen" },
          { en: "Only in tournament play", es: "Solo en juego de torneo", de: "Nur im Turniers piel", nl: "Alleen in toernooispel" }
        ],
        correct: 0,
        explanation: {
          en: "You can promote pawns to queens even if you still have your original queen. It's possible (though rare) to have 9 queens at once!",
          es: "Puedes promover peones a reinas incluso si aún tienes tu reina original. ¡Es posible (aunque raro) tener 9 reinas a la vez!",
          de: "Sie können Bauern zu Damen umwandeln, auch wenn Sie noch Ihre ursprüngliche Dame haben. Es ist möglich (wenn auch selten), 9 Damen gleichzeitig zu haben!",
          nl: "Je kunt pionnen promoveren tot koninginnen zelfs als je nog je originele koningin hebt. Het is mogelijk (hoewel zeldzaam) om 9 koninginnen tegelijk te hebben!"
        }
      },
      {
        question: {
          en: "What is a 'skewer' in chess?",
          es: "¿Qué es un 'pincho' en ajedrez?",
          de: "Was ist ein 'Spieß' im Schach?",
          nl: "Wat is een 'spies' bij schaken?"
        },
        options: [
          { en: "Attacking valuable piece, forcing it to move and exposing piece behind", es: "Atacar pieza valiosa, forzándola a moverse y exponiendo la pieza detrás", de: "Wertvolle Figur angreifen und dadurch Figur dahinter freigeben", nl: "Waardevol stuk aanvallen, het dwingend te bewegen en stuk erachter blootstellend" },
          { en: "Moving through multiple pieces", es: "Moverse a través de múltiples piezas", de: "Durch mehrere Figuren ziehen", nl: "Door meerdere stukken bewegen" },
          { en: "Capturing with a knight", es: "Capturar con un caballo", de: "Mit einem Springer schlagen", nl: "Slaan met een paard" },
          { en: "A type of pawn formation", es: "Un tipo de formación de peones", de: "Eine Art Bauernformation", nl: "Een soort pionformatie" }
        ],
        correct: 0,
        explanation: {
          en: "A skewer is the reverse of a pin: a valuable piece is attacked and must move, exposing a less valuable piece behind it to capture.",
          es: "Un pincho es el reverso de una clavada: una pieza valiosa es atacada y debe moverse, exponiendo una pieza menos valiosa detrás de ella para captura.",
          de: "Ein Spieß ist das Gegenteil einer Fesselung: Eine wertvolle Figur wird angegriffen und muss ziehen, wodurch eine weniger wertvolle Figur dahinter zum Schlagen freigegeben wird.",
          nl: "Een spies is het omgekeerde van een penning: een waardevol stuk wordt aangevallen en moet bewegen, waardoor een minder waardevol stuk erachter wordt blootgesteld om te slaan."
        }
      },
      {
        question: {
          en: "What is the 'opening' phase of a chess game?",
          es: "¿Qué es la fase de 'apertura' de una partida de ajedrez?",
          de: "Was ist die 'Eröffnungsphase' einer Schachpartie?",
          nl: "Wat is de 'openingsfase' van een schaakpartij?"
        },
        options: [
          { en: "First 10-15 moves focused on development", es: "Primeros 10-15 movimientos enfocados en desarrollo", de: "Erste 10-15 Züge mit Fokus auf Entwicklung", nl: "Eerste 10-15 zetten gericht op ontwikkeling" },
          { en: "The first move only", es: "Solo el primer movimiento", de: "Nur der erste Zug", nl: "Alleen de eerste zet" },
          { en: "Until first capture occurs", es: "Hasta que ocurre la primera captura", de: "Bis die erste Figur geschlagen wird", nl: "Tot de eerste slag plaatsvindt" },
          { en: "Before castling", es: "Antes del enroque", de: "Vor der Rochade", nl: "Voor het rokeren" }
        ],
        correct: 0,
        explanation: {
          en: "The opening is roughly the first 10-15 moves where players develop their pieces, control the center, and usually castle for king safety.",
          es: "La apertura es aproximadamente los primeros 10-15 movimientos donde los jugadores desarrollan sus piezas, controlan el centro y usualmente enrocan para la seguridad del rey.",
          de: "Die Eröffnung umfasst etwa die ersten 10-15 Züge, in denen Spieler ihre Figuren entwickeln, das Zentrum kontrollieren und meist rochieren für Königssicherheit.",
          nl: "De opening is ongeveer de eerste 10-15 zetten waarin spelers hun stukken ontwikkelen, het centrum controleren en meestal rokeren voor koningsveiligheid."
        }
      },
      {
        question: {
          en: "What does 'fianchetto' mean in chess?",
          es: "¿Qué significa 'fianchetto' en ajedrez?",
          de: "Was bedeutet 'Fianchetto' im Schach?",
          nl: "Wat betekent 'fianchetto' bij schaken?"
        },
        options: [
          { en: "Developing bishop to long diagonal (b2/g2 or b7/g7)", es: "Desarrollar alfil a diagonal larga (b2/g2 o b7/g7)", de: "Läufer auf lange Diagonale entwickeln (b2/g2 oder b7/g7)", nl: "Loper ontwikkelen naar lange diagonaal (b2/g2 of b7/g7)" },
          { en: "Italian for 'little flank'", es: "Italiano para 'pequeño flanco'", de: "Italienisch für 'kleine Flanke'", nl: "Italiaans voor 'kleine flank'" },
          { en: "A pawn sacrifice", es: "Un sacrificio de peón", de: "Ein Bauernopfer", nl: "Een pionoffer" },
          { en: "Double castling", es: "Enroque doble", de: "Doppelte Rochade", nl: "Dubbel rokeren" }
        ],
        correct: 0,
        explanation: {
          en: "Fianchetto means developing a bishop to the long diagonal by moving the knight's pawn one square (e.g., g3 then Bg2 for White).",
          es: "Fianchetto significa desarrollar un alfil a la diagonal larga moviendo el peón del caballo una casilla (ej., g3 luego Ag2 para Blancas).",
          de: "Fianchetto bedeutet, einen Läufer auf die lange Diagonale zu entwickeln, indem der Springerbauer ein Feld gezogen wird (z.B. g3 dann Lg2 für Weiß).",
          nl: "Fianchetto betekent een loper ontwikkelen naar de lange diagonaal door de paardpion één vakje te bewegen (bijv. g3 dan Lg2 voor Wit)."
        }
      },
      {
        question: {
          en: "Who moves first in a standard chess game?",
          es: "¿Quién mueve primero en una partida estándar de ajedrez?",
          de: "Wer zieht in einer Standard-Schachpartie zuerst?",
          nl: "Wie zet eerst in een standaard schaakpartij?"
        },
        options: [
          { en: "White always moves first", es: "Blanco siempre mueve primero", de: "Weiß zieht immer zuerst", nl: "Wit zet altijd eerst" },
          { en: "Black always moves first", es: "Negro siempre mueve primero", de: "Schwarz zieht immer zuerst", nl: "Zwart zet altijd eerst" },
          { en: "Players decide with coin toss", es: "Los jugadores deciden con un sorteo", de: "Spieler entscheiden per Münzwurf", nl: "Spelers beslissen met muntworp" },
          { en: "The older player moves first", es: "El jugador mayor mueve primero", de: "Der ältere Spieler zieht zuerst", nl: "De oudere speler zet eerst" }
        ],
        correct: 0,
        explanation: {
          en: "White always moves first in chess. This is a fundamental rule that gives White a slight initiative advantage known as 'first-move advantage.'",
          es: "Blanco siempre mueve primero en ajedrez. Esta es una regla fundamental que le da a Blanco una ligera ventaja de iniciativa conocida como 'ventaja del primer movimiento.'",
          de: "Weiß zieht im Schach immer zuerst. Dies ist eine grundlegende Regel, die Weiß einen leichten Initiativvorteil gibt, bekannt als 'Anzugsvorteil.'",
          nl: "Wit zet altijd eerst bij schaken. Dit is een fundamentele regel die Wit een klein initiatief voordeel geeft bekend als 'eerste-zet-voordeel.'"
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
