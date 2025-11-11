// Quiz Template - Level 3: Bord spelletjes - Schaken
(function() {
  const level3 = {
    name: {
      en: "Chess",
      es: "Ajedrez",
      de: "Schach",
      nl: "Schaken"
    },
    questions: [
      {
        question: {
          en: "What is a 'discovered attack' in chess?",
          es: "¿Qué es un 'ataque descubierto' en ajedrez?",
          de: "Was ist ein 'Abzugsangriff' im Schach?",
          nl: "Wat is een 'ontdekte aanval' in schaken?"
        },
        options: [
          { en: "Moving a piece reveals attack from another", es: "Mover una pieza revela ataque de otra", de: "Eine Figur ziehen enthüllt Angriff von einer anderen", nl: "Een stuk verplaatsen onthult aanval van een ander" },
          { en: "Finding a hidden piece", es: "Encontrar una pieza oculta", de: "Eine versteckte Figur finden", nl: "Een verborgen stuk vinden" },
          { en: "Attacking without warning", es: "Atacar sin advertencia", de: "Angreifen ohne Warnung", nl: "Aanvallen zonder waarschuwing" },
          { en: "Double checking the king", es: "Doble jaque al rey", de: "Doppelschach dem König", nl: "Dubbel schaak de koning" }
        ],
        correct: 0,
        explanation: {
          en: "A discovered attack occurs when moving one piece reveals an attack from another piece behind it, creating a powerful tactical threat.",
          es: "Un ataque descubierto ocurre cuando mover una pieza revela un ataque de otra pieza detrás de ella, creando una amenaza táctica poderosa.",
          de: "Ein Abzugsangriff erfolgt, wenn das Ziehen einer Figur einen Angriff von einer anderen Figur dahinter enthüllt und eine mächtige taktische Bedrohung erzeugt.",
          nl: "Een ontdekte aanval vindt plaats wanneer het verplaatsen van een stuk een aanval van een ander stuk erachter onthult, wat een krachtige tactische dreiging creëert."
        }
      },
      {
        question: {
          en: "What is the 'center' of the chess board?",
          es: "¿Cuál es el 'centro' del tablero de ajedrez?",
          de: "Was ist das 'Zentrum' des Schachbretts?",
          nl: "Wat is het 'centrum' van het schaakbord?"
        },
        options: [
          { en: "The four central squares (d4, d5, e4, e5)", es: "Los cuatro cuadrados centrales (d4, d5, e4, e5)", de: "Die vier zentralen Felder (d4, d5, e4, e5)", nl: "De vier centrale vakjes (d4, d5, e4, e5)" },
          { en: "The exact middle square", es: "El cuadrado exactamente en el medio", de: "Das genaue mittlere Feld", nl: "Het exacte middenvakje" },
          { en: "The king's starting position", es: "La posición inicial del rey", de: "Die Startposition des Königs", nl: "De startpositie van de koning" },
          { en: "Any square in rows 4-5", es: "Cualquier cuadrado en las filas 4-5", de: "Jedes Feld in Reihen 4-5", nl: "Elk vakje in rijen 4-5" }
        ],
        correct: 0,
        explanation: {
          en: "The center consists of the four squares d4, d5, e4, and e5. Controlling these squares is a fundamental principle of chess strategy.",
          es: "El centro consiste en los cuatro cuadrados d4, d5, e4 y e5. Controlar estos cuadrados es un principio fundamental de la estrategia de ajedrez.",
          de: "Das Zentrum besteht aus den vier Feldern d4, d5, e4 und e5. Die Kontrolle dieser Felder ist ein grundlegendes Prinzip der Schachstrategie.",
          nl: "Het centrum bestaat uit de vier vakjes d4, d5, e4 en e5. Deze vakjes controleren is een fundamenteel principe van schaakstrategie."
        }
      },
      {
        question: {
          en: "What is a 'pin' in chess tactics?",
          es: "¿Qué es un 'clavo' en tácticas de ajedrez?",
          de: "Was ist eine 'Fesselung' in Schachtaktiken?",
          nl: "Wat is een 'penning' in schaaktactiek?"
        },
        options: [
          { en: "Piece can't move without exposing valuable piece", es: "Pieza no puede moverse sin exponer pieza valiosa", de: "Figur kann sich nicht bewegen ohne wertvolle Figur preiszugeben", nl: "Stuk kan niet bewegen zonder waardevol stuk bloot te stellen" },
          { en: "Trapping a piece in corner", es: "Atrapar una pieza en la esquina", de: "Eine Figur in der Ecke einfangen", nl: "Een stuk in de hoek vastzetten" },
          { en: "Attacking the king directly", es: "Atacar al rey directamente", de: "Den König direkt angreifen", nl: "De koning direct aanvallen" },
          { en: "Protecting your own piece", es: "Proteger tu propia pieza", de: "Deine eigene Figur schützen", nl: "Je eigen stuk beschermen" }
        ],
        correct: 0,
        explanation: {
          en: "A pin is when a piece cannot legally move (or shouldn't move) because doing so would expose a more valuable piece behind it to attack.",
          es: "Un clavo es cuando una pieza no puede moverse legalmente (o no debería moverse) porque hacerlo expondría una pieza más valiosa detrás de ella al ataque.",
          de: "Eine Fesselung liegt vor, wenn eine Figur sich nicht legal bewegen kann (oder nicht sollte), weil dies eine wertvollere Figur dahinter dem Angriff aussetzen würde.",
          nl: "Een penning is wanneer een stuk niet legaal kan bewegen (of niet zou moeten bewegen) omdat dit een waardevol stuk erachter zou blootstellen aan een aanval."
        }
      },
      {
        question: {
          en: "How many knights does each player have at the start?",
          es: "¿Cuántos caballos tiene cada jugador al comienzo?",
          de: "Wie viele Springer hat jeder Spieler zu Beginn?",
          nl: "Hoeveel paarden heeft elke speler aan het begin?"
        },
        options: [
          { en: "2 knights", es: "2 caballos", de: "2 Springer", nl: "2 paarden" },
          { en: "1 knight", es: "1 caballo", de: "1 Springer", nl: "1 paard" },
          { en: "3 knights", es: "3 caballos", de: "3 Springer", nl: "3 paarden" },
          { en: "4 knights", es: "4 caballos", de: "4 Springer", nl: "4 paarden" }
        ],
        correct: 0,
        explanation: {
          en: "Each player starts with 2 knights, positioned on b1 and g1 for white, and b8 and g8 for black.",
          es: "Cada jugador comienza con 2 caballos, posicionados en b1 y g1 para blanco, y b8 y g8 para negro.",
          de: "Jeder Spieler beginnt mit 2 Springern, positioniert auf b1 und g1 für Weiß, und b8 und g8 für Schwarz.",
          nl: "Elke speler begint met 2 paarden, gepositioneerd op b1 en g1 voor wit, en b8 en g8 voor zwart."
        }
      },
      {
        question: {
          en: "What is 'castling kingside' also called?",
          es: "¿Cómo se llama también el 'enroque corto'?",
          de: "Wie wird die 'kurze Rochade' auch genannt?",
          nl: "Hoe wordt 'korte rokade' ook genoemd?"
        },
        options: [
          { en: "Short castling or O-O", es: "Enroque corto o O-O", de: "Kurze Rochade oder O-O", nl: "Korte rokade of O-O" },
          { en: "Long castling or O-O-O", es: "Enroque largo o O-O-O", de: "Lange Rochade oder O-O-O", nl: "Lange rokade of O-O-O" },
          { en: "Queen's castling", es: "Enroque de la reina", de: "Damen-Rochade", nl: "Koningin rokade" },
          { en: "Double move", es: "Movimiento doble", de: "Doppelzug", nl: "Dubbele zet" }
        ],
        correct: 0,
        explanation: {
          en: "Castling kingside is also called 'short castling' and is notated as O-O. The king moves toward the h-file rook.",
          es: "El enroque corto también se llama 'enroque corto' y se anota como O-O. El rey se mueve hacia la torre del archivo h.",
          de: "Kurze Rochade wird auch 'kurze Rochade' genannt und als O-O notiert. Der König zieht in Richtung des h-Reihen-Turms.",
          nl: "Korte rokade wordt ook 'korte rokade' genoemd en wordt genoteerd als O-O. De koning beweegt naar de h-lijn toren."
        }
      },
      {
        question: {
          en: "Who is considered the greatest chess player of all time?",
          es: "¿Quién es considerado el mejor jugador de ajedrez de todos los tiempos?",
          de: "Wer gilt als der größte Schachspieler aller Zeiten?",
          nl: "Wie wordt beschouwd als de grootste schaker aller tijden?"
        },
        options: [
          { en: "Garry Kasparov", es: "Garry Kasparov", de: "Garry Kasparow", nl: "Garry Kasparov" },
          { en: "Bobby Fischer", es: "Bobby Fischer", de: "Bobby Fischer", nl: "Bobby Fischer" },
          { en: "Magnus Carlsen", es: "Magnus Carlsen", de: "Magnus Carlsen", nl: "Magnus Carlsen" },
          { en: "All are legendary", es: "Todos son legendarios", de: "Alle sind legendär", nl: "Allen zijn legendarisch" }
        ],
        correct: 3,
        explanation: {
          en: "While many consider Kasparov the greatest, Fischer and Carlsen are also legendary. Each dominated their era uniquely.",
          es: "Aunque muchos consideran a Kasparov el mejor, Fischer y Carlsen también son legendarios. Cada uno dominó su era de forma única.",
          de: "Während viele Kasparow für den Größten halten, sind auch Fischer und Carlsen legendär. Jeder dominierte seine Ära einzigartig.",
          nl: "Hoewel velen Kasparov de grootste vinden, zijn Fischer en Carlsen ook legendarisch. Elk domineerde hun era op unieke wijze."
        }
      },
      {
        question: {
          en: "What is a 'fork' in chess?",
          es: "¿Qué es un 'tenedor' en ajedrez?",
          de: "Was ist eine 'Gabel' im Schach?",
          nl: "Wat is een 'vork' in schaken?"
        },
        options: [
          { en: "Attacking two pieces at once", es: "Atacar dos piezas a la vez", de: "Zwei Figuren gleichzeitig angreifen", nl: "Twee stukken tegelijk aanvallen" },
          { en: "A special opening move", es: "Un movimiento de apertura especial", de: "Ein spezieller Eröffnungszug", nl: "Een speciale openingszet" },
          { en: "Trading pieces equally", es: "Intercambiar piezas por igual", de: "Figuren gleichwertig tauschen", nl: "Stukken gelijk ruilen" },
          { en: "Splitting the board", es: "Dividir el tablero", de: "Das Brett teilen", nl: "Het bord splitsen" }
        ],
        correct: 0,
        explanation: {
          en: "A fork is a tactical move where one piece attacks two or more enemy pieces simultaneously.",
          es: "Un tenedor es un movimiento táctico donde una pieza ataca dos o más piezas enemigas simultáneamente.",
          de: "Eine Gabel ist ein taktischer Zug, bei dem eine Figur zwei oder mehr gegnerische Figuren gleichzeitig angreift.",
          nl: "Een vork is een tactische zet waarbij één stuk twee of meer vijandelijke stukken tegelijk aanvalt."
        }
      },
      {
        question: {
          en: "What is the 'Italian Game' opening?",
          es: "¿Qué es la apertura 'Juego Italiano'?",
          de: "Was ist die 'Italienische Partie' Eröffnung?",
          nl: "Wat is de 'Italiaanse Partij' opening?"
        },
        options: [
          { en: "1.e4 e5 2.Nf3 Nc6 3.Bc4", es: "1.e4 e5 2.Cf3 Cc6 3.Ac4", de: "1.e4 e5 2.Sf3 Sc6 3.Lc4", nl: "1.e4 e5 2.Pf3 Pc6 3.Lc4" },
          { en: "1.d4 d5 2.c4", es: "1.d4 d5 2.c4", de: "1.d4 d5 2.c4", nl: "1.d4 d5 2.c4" },
          { en: "1.e4 c5", es: "1.e4 c5", de: "1.e4 c5", nl: "1.e4 c5" },
          { en: "1.c4 e5", es: "1.c4 e5", de: "1.c4 e5", nl: "1.c4 e5" }
        ],
        correct: 0,
        explanation: {
          en: "The Italian Game is one of the oldest openings, starting with 1.e4 e5 2.Nf3 Nc6 3.Bc4, aiming to control the center.",
          es: "El Juego Italiano es una de las aperturas más antiguas, comenzando con 1.e4 e5 2.Cf3 Cc6 3.Ac4, con el objetivo de controlar el centro.",
          de: "Die Italienische Partie ist eine der ältesten Eröffnungen, beginnend mit 1.e4 e5 2.Sf3 Sc6 3.Lc4, mit dem Ziel, das Zentrum zu kontrollieren.",
          nl: "De Italiaanse Partij is een van de oudste openingen, beginnend met 1.e4 e5 2.Pf3 Pc6 3.Lc4, gericht op het controleren van het centrum."
        }
      },
      {
        question: {
          en: "What is a 'pin' in chess tactics?",
          es: "¿Qué es un 'clavo' en tácticas de ajedrez?",
          de: "Was ist eine 'Fesselung' in Schachtaktiken?",
          nl: "Wat is een 'pin' in schaaktactieken?"
        },
        options: [
          { en: "Pinning a piece", es: "Inmovilizar una pieza que protege una pieza más valiosa", de: "Eine Figur festsetzen, die eine wertvollere Figur schützt", nl: "Een stuk immobiliseren dat een waardevoller stuk beschermt" },
          { en: "Trapping the king", es: "Atrapar al rey", de: "Den König einsperren", nl: "De koning vastzitten" },
          { en: "Forcing a draw", es: "Forzar un empate", de: "Ein Unentschieden erzwingen", nl: "Remise afdwingen" },
          { en: "Blocking a file", es: "Bloquear una columna", de: "Eine Linie blockieren", nl: "Een lijn blokkeren" }
        ],
        correct: 0,
        explanation: {
          en: "A pin occurs when a piece cannot move without exposing a more valuable piece behind it to capture.",
          es: "Un clavo ocurre cuando una pieza no puede moverse sin exponer una pieza más valiosa detrás de ella a captura.",
          de: "Eine Fesselung tritt auf, wenn eine Figur sich nicht bewegen kann, ohne eine wertvollere Figur dahinter der Eroberung auszusetzen.",
          nl: "Een pin treedt op wanneer een stuk niet kan bewegen zonder een waardevoller stuk erachter bloot te stellen aan slag."
        }
      },
      {
        question: {
          en: "What does 'fianchetto' mean in chess?",
          es: "¿Qué significa 'fianchetto' en ajedrez?",
          de: "Was bedeutet 'Fianchetto' im Schach?",
          nl: "Wat betekent 'fianchetto' in schaken?"
        },
        options: [
          { en: "Bishop on long diagonal", es: "Desarrollar un alfil a la diagonal larga", de: "Einen Läufer auf die lange Diagonale entwickeln", nl: "Een loper naar de lange diagonaal ontwikkelen" },
          { en: "A pawn sacrifice", es: "Un sacrificio de peón", de: "Ein Bauernopfer", nl: "Een pionoffer" },
          { en: "Moving the queen early", es: "Mover la reina temprano", de: "Die Dame früh ziehen", nl: "De koningin vroeg spelen" },
          { en: "Castling queenside", es: "Enroque largo", de: "Lange Rochade", nl: "Lange rokade" }
        ],
        correct: 0,
        explanation: {
          en: "Fianchetto is the development of a bishop to b2 or g2 (b7/g7 for Black), controlling the long diagonal.",
          es: "Fianchetto es el desarrollo de un alfil a b2 o g2 (b7/g7 para las negras), controlando la diagonal larga.",
          de: "Fianchetto ist die Entwicklung eines Läufers nach b2 oder g2 (b7/g7 für Schwarz), wodurch die lange Diagonale kontrolliert wird.",
          nl: "Fianchetto is de ontwikkeling van een loper naar b2 of g2 (b7/g7 voor zwart), waarmee de lange diagonaal wordt gecontroleerd."
        }
      },
      {
        question: {
          en: "How many total possible moves are there for White in the starting position?",
          es: "¿Cuántos movimientos totales posibles hay para las blancas en la posición inicial?",
          de: "Wie viele mögliche Züge gibt es insgesamt für Weiß in der Startposition?",
          nl: "Hoeveel totale mogelijke zetten zijn er voor wit in de startpositie?"
        },
        options: [
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "32", es: "32", de: "32", nl: "32" }
        ],
        correct: 0,
        explanation: {
          en: "White has 20 possible moves at the start: 16 pawn moves (each of 8 pawns can move 1 or 2 squares) and 4 knight moves.",
          es: "Las blancas tienen 20 movimientos posibles al inicio: 16 movimientos de peón (cada uno de 8 peones puede moverse 1 o 2 casillas) y 4 movimientos de caballo.",
          de: "Weiß hat 20 mögliche Züge am Anfang: 16 Bauernzüge (jeder der 8 Bauern kann 1 oder 2 Felder ziehen) und 4 Springerzüge.",
          nl: "Wit heeft 20 mogelijke zetten aan het begin: 16 pionzetten (elk van 8 pionnen kan 1 of 2 vakjes) en 4 paardzetten."
        }
      },
      {
        question: {
          en: "What is the Elo rating system?",
          es: "¿Qué es el sistema de calificación Elo?",
          de: "Was ist das Elo-Bewertungssystem?",
          nl: "Wat is het Elo-ratingsysteem?"
        },
        options: [
          { en: "ELO rating", es: "Un método para calcular la fuerza del jugador", de: "Eine Methode zur Berechnung der Spielerstärke", nl: "Een methode om speelsterkte te berekenen" },
          { en: "A tournament format", es: "Un formato de torneo", de: "Ein Turnierformat", nl: "Een toernooiformaat" },
          { en: "A chess opening", es: "Una apertura de ajedrez", de: "Eine Schacheröffnung", nl: "Een schaakopening" },
          { en: "A time control", es: "Un control de tiempo", de: "Eine Bedenkzeit", nl: "Een tijdcontrole" }
        ],
        correct: 0,
        explanation: {
          en: "The Elo rating system calculates the relative skill levels of players. Higher numbers indicate stronger players.",
          es: "El sistema de calificación Elo calcula los niveles de habilidad relativos de los jugadores. Números más altos indican jugadores más fuertes.",
          de: "Das Elo-Bewertungssystem berechnet die relativen Fähigkeitsstufen der Spieler. Höhere Zahlen zeigen stärkere Spieler an.",
          nl: "Het Elo-ratingsysteem berekent de relatieve vaardigheidsniveaus van spelers. Hogere getallen duiden op sterkere spelers."
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
          { en: "Zugzwang", es: "Verse obligado a hacer un movimiento desventajoso", de: "Gezwungen sein, einen nachteiligen Zug zu machen", nl: "Gedwongen zijn een nadelige zet te doen" },
          { en: "A type of checkmate", es: "Un tipo de jaque mate", de: "Eine Art Schachmatt", nl: "Een soort schaakmat" },
          { en: "A German opening", es: "Una apertura alemana", de: "Eine deutsche Eröffnung", nl: "Een Duitse opening" },
          { en: "A draw position", es: "Una posición de empate", de: "Eine Remisstellung", nl: "Een remisepositie" }
        ],
        correct: 0,
        explanation: {
          en: "Zugzwang is a situation where any move worsens the position, but a player must move. It's particularly important in endgames.",
          es: "Zugzwang es una situación donde cualquier movimiento empeora la posición, pero un jugador debe moverse. Es particularmente importante en finales.",
          de: "Zugzwang ist eine Situation, in der jeder Zug die Position verschlechtert, aber ein Spieler ziehen muss. Es ist besonders wichtig in Endspielen.",
          nl: "Zugzwang is een situatie waarin elke zet de positie verslechtert, maar een speler moet zetten. Het is bijzonder belangrijk in eindspelen."
        }
      },
      {
        question: {
          en: "What is a 'perpetual check'?",
          es: "¿Qué es un 'jaque perpetuo'?",
          de: "Was ist ein 'Dauerschach'?",
          nl: "Wat is een 'eeuwig schaak'?"
        },
        options: [
          { en: "Repeated checks forcing a draw", es: "Jaques repetidos que fuerzan un empate", de: "Wiederholte Schachs, die ein Remis erzwingen", nl: "Herhaalde schaken die remise afdwingen" },
          { en: "Checking with all pieces", es: "Dar jaque con todas las piezas", de: "Mit allen Figuren Schach bieten", nl: "Schaak geven met alle stukken" },
          { en: "A guaranteed win", es: "Una victoria garantizada", de: "Ein garantierter Sieg", nl: "Een gegarandeerde winst" },
          { en: "Continuous piece pressure", es: "Presión continua de piezas", de: "Kontinuierlicher Figurendruck", nl: "Continue druk met stukken" }
        ],
        correct: 0,
        explanation: {
          en: "Perpetual check occurs when one player can continuously check the opponent's king, forcing a draw by repetition.",
          es: "El jaque perpetuo ocurre cuando un jugador puede dar jaque continuamente al rey del oponente, forzando un empate por repetición.",
          de: "Dauerschach tritt auf, wenn ein Spieler dem gegnerischen König kontinuierlich Schach bieten kann und so ein Remis durch Wiederholung erzwingt.",
          nl: "Eeuwig schaak treedt op wanneer een speler continu schaak kan geven aan de koning van de tegenstander, waardoor remise door herhaling wordt afgedwongen."
        }
      },
      {
        question: {
          en: "What is the 'Sicilian Defense'?",
          es: "¿Qué es la 'Defensa Siciliana'?",
          de: "Was ist die 'Sizilianische Verteidigung'?",
          nl: "Wat is de 'Siciliaanse Verdediging'?"
        },
        options: [
          { en: "1.e4 c5", es: "1.e4 c5", de: "1.e4 c5", nl: "1.e4 c5" },
          { en: "1.e4 e5", es: "1.e4 e5", de: "1.e4 e5", nl: "1.e4 e5" },
          { en: "1.d4 d5", es: "1.d4 d5", de: "1.d4 d5", nl: "1.d4 d5" },
          { en: "1.c4 c6", es: "1.c4 c6", de: "1.c4 c6", nl: "1.c4 c6" }
        ],
        correct: 0,
        explanation: {
          en: "The Sicilian Defense (1.e4 c5) is the most popular response to 1.e4, favored by aggressive players seeking winning chances with Black.",
          es: "La Defensa Siciliana (1.e4 c5) es la respuesta más popular a 1.e4, favorecida por jugadores agresivos que buscan oportunidades de ganar con negras.",
          de: "Die Sizilianische Verteidigung (1.e4 c5) ist die beliebteste Antwort auf 1.e4, bevorzugt von aggressiven Spielern, die mit Schwarz Gewinnchancen suchen.",
          nl: "De Siciliaanse Verdediging (1.e4 c5) is de populairste reactie op 1.e4, favoriet bij agressieve spelers die met zwart winst zoeken."
        }
      },
      {
        question: {
          en: "What is a 'discovered attack'?",
          es: "¿Qué es un 'ataque descubierto'?",
          de: "Was ist ein 'Abzugsangriff'?",
          nl: "Wat is een 'ontdekte aanval'?"
        },
        options: [
          { en: "Moving piece reveals attack", es: "Mover una pieza para revelar un ataque de otra pieza", de: "Eine Figur bewegen, um einen Angriff einer anderen Figur freizulegen", nl: "Een stuk bewegen om een aanval van een ander stuk te onthullen" },
          { en: "Finding a hidden tactic", es: "Encontrar una táctica oculta", de: "Eine versteckte Taktik finden", nl: "Een verborgen tactiek vinden" },
          { en: "Attacking two pieces", es: "Atacar dos piezas", de: "Zwei Figuren angreifen", nl: "Twee stukken aanvallen" },
          { en: "A surprise opening", es: "Una apertura sorpresa", de: "Eine Überraschungseröffnung", nl: "Een verrassingsopening" }
        ],
        correct: 0,
        explanation: {
          en: "A discovered attack occurs when moving one piece uncovers an attack by another piece behind it.",
          es: "Un ataque descubierto ocurre cuando mover una pieza descubre un ataque de otra pieza detrás de ella.",
          de: "Ein Abzugsangriff tritt auf, wenn das Bewegen einer Figur einen Angriff einer anderen Figur dahinter freilegt.",
          nl: "Een ontdekte aanval treedt op wanneer het bewegen van een stuk een aanval van een ander stuk erachter ontdekt."
        }
      },
      {
        question: {
          en: "What is 'tempo' in chess?",
          es: "¿Qué es el 'tempo' en ajedrez?",
          de: "Was ist 'Tempo' im Schach?",
          nl: "Wat is 'tempo' in schaken?"
        },
        options: [
          { en: "Time/move advantage unit", es: "Una unidad de ventaja de tiempo/movimiento", de: "Eine Einheit von Zeit-/Zugvorteil", nl: "Een eenheid van tijd-/zetvoordeel" },
          { en: "The speed of play", es: "La velocidad de juego", de: "Die Spielgeschwindigkeit", nl: "De speelsnelheid" },
          { en: "A time control format", es: "Un formato de control de tiempo", de: "Ein Zeitkontrollformat", nl: "Een tijdcontroleformaat" },
          { en: "The rhythm of the game", es: "El ritmo del juego", de: "Der Rhythmus des Spiels", nl: "Het ritme van het spel" }
        ],
        correct: 0,
        explanation: {
          en: "Tempo refers to having an advantage in development or time. Gaining a tempo means making your opponent waste a move.",
          es: "Tempo se refiere a tener una ventaja en desarrollo o tiempo. Ganar un tempo significa hacer que tu oponente pierda un movimiento.",
          de: "Tempo bezieht sich auf einen Vorteil in der Entwicklung oder Zeit. Ein Tempo gewinnen bedeutet, den Gegner einen Zug verschwenden zu lassen.",
          nl: "Tempo verwijst naar een voordeel in ontwikkeling of tijd. Een tempo winnen betekent dat je tegenstander een zet verspilt."
        }
      },
      {
        question: {
          en: "What is a 'skewer' in chess?",
          es: "¿Qué es un 'pincho' en ajedrez?",
          de: "Was ist ein 'Spieß' im Schach?",
          nl: "Wat is een 'spies' in schaken?"
        },
        options: [
          { en: "Attack valuable piece, expose behind", es: "Atacar una pieza valiosa obligándola a moverse y exponiendo una pieza detrás", de: "Eine wertvolle Figur angreifen und sie zwingen sich zu bewegen, wodurch eine Figur dahinter freigelegt wird", nl: "Een waardevol stuk aanvallen en dwingen te bewegen, waardoor een stuk erachter wordt blootgesteld" },
          { en: "Capturing pieces in sequence", es: "Capturar piezas en secuencia", de: "Figuren nacheinander schlagen", nl: "Stukken achtereenvolgens slaan" },
          { en: "Pinning multiple pieces", es: "Clavando múltiples piezas", de: "Mehrere Figuren fesseln", nl: "Meerdere stukken vastzetten" },
          { en: "A special endgame technique", es: "Una técnica especial de final", de: "Eine spezielle Endspiel-Technik", nl: "Een speciale eindspeltechniek" }
        ],
        correct: 0,
        explanation: {
          en: "A skewer is the reverse of a pin: a valuable piece is attacked and must move, exposing a less valuable piece behind it.",
          es: "Un pincho es lo contrario de un clavo: una pieza valiosa es atacada y debe moverse, exponiendo una pieza menos valiosa detrás.",
          de: "Ein Spieß ist das Gegenteil einer Fesselung: Eine wertvolle Figur wird angegriffen und muss sich bewegen, wodurch eine weniger wertvolle Figur dahinter freigelegt wird.",
          nl: "Een spies is het tegenovergestelde van een pin: een waardevol stuk wordt aangevallen en moet bewegen, waardoor een minder waardevol stuk erachter wordt blootgesteld."
        }
      },
      {
        question: {
          en: "What is 'doubled pawns'?",
          es: "¿Qué son 'peones doblados'?",
          de: "Was sind 'Doppelbauern'?",
          nl: "Wat zijn 'dubbele pionnen'?"
        },
        options: [
          { en: "Two pawns, same file", es: "Dos peones del mismo color en la misma columna", de: "Zwei Bauern derselben Farbe auf derselben Linie", nl: "Twee pionnen van dezelfde kleur op dezelfde lijn" },
          { en: "Pawns moving two squares", es: "Peones moviéndose dos casillas", de: "Bauern, die zwei Felder ziehen", nl: "Pionnen die twee vakjes bewegen" },
          { en: "Two pawns defending each other", es: "Dos peones defendiéndose mutuamente", de: "Zwei Bauern, die sich gegenseitig verteidigen", nl: "Twee pionnen die elkaar verdedigen" },
          { en: "Promoted pawns", es: "Peones promovidos", de: "Umgewandelte Bauern", nl: "Gepromoveerde pionnen" }
        ],
        correct: 0,
        explanation: {
          en: "Doubled pawns are two pawns of the same color stacked on the same file, usually considered a weakness because they can't defend each other.",
          es: "Los peones doblados son dos peones del mismo color apilados en la misma columna, generalmente considerados una debilidad porque no pueden defenderse mutuamente.",
          de: "Doppelbauern sind zwei Bauern derselben Farbe auf derselben Linie, normalerweise als Schwäche betrachtet, da sie sich nicht gegenseitig verteidigen können.",
          nl: "Dubbele pionnen zijn twee pionnen van dezelfde kleur op dezelfde lijn, meestal beschouwd als zwakte omdat ze elkaar niet kunnen verdedigen."
        }
      },
      {
        question: {
          en: "What does it mean to 'control the center' in chess?",
          es: "¿Qué significa 'controlar el centro' en ajedrez?",
          de: "Was bedeutet es, 'das Zentrum zu kontrollieren' im Schach?",
          nl: "Wat betekent het om 'het centrum te controleren' in schaken?"
        },
        options: [
          { en: "Dominating central squares", es: "Dominar las casillas centrales (d4, e4, d5, e5)", de: "Die zentralen Felder dominieren (d4, e4, d5, e5)", nl: "De centrale vakjes domineren (d4, e4, d5, e5)" },
          { en: "Moving all pieces to the middle", es: "Mover todas las piezas al medio", de: "Alle Figuren in die Mitte bewegen", nl: "Alle stukken naar het midden verplaatsen" },
          { en: "Protecting the king in the center", es: "Proteger al rey en el centro", de: "Den König in der Mitte schützen", nl: "De koning in het centrum beschermen" },
          { en: "Having more pieces than opponent", es: "Tener más piezas que el oponente", de: "Mehr Figuren als der Gegner haben", nl: "Meer stukken hebben dan de tegenstander" }
        ],
        correct: 0,
        explanation: {
          en: "Controlling the center means dominating the four central squares (d4, e4, d5, e5), which provides greater mobility and attacking chances.",
          es: "Controlar el centro significa dominar las cuatro casillas centrales (d4, e4, d5, e5), lo que proporciona mayor movilidad y oportunidades de ataque.",
          de: "Das Zentrum kontrollieren bedeutet, die vier zentralen Felder (d4, e4, d5, e5) zu dominieren, was größere Mobilität und Angriffschancen bietet.",
          nl: "Het centrum controleren betekent de vier centrale vakjes (d4, e4, d5, e5) domineren, wat grotere mobiliteit en aanvalskansen biedt."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
