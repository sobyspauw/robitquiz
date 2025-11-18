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
          de: "Wie viele verschiedene Figurentypen gibt es im Schach?",
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
