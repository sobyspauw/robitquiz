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
      },
      {
        question: {
          en: "What is a 'gambit' in chess?",
          es: "¿Qué es un 'gambito' en ajedrez?",
          de: "Was ist ein 'Gambit' im Schach?",
          nl: "Wat is een 'gambiet' in schaken?"
        },
        options: [
          { en: "Sacrificing material for positional advantage", es: "Sacrificar material por ventaja posicional", de: "Material opfern für positionellen Vorteil", nl: "Materiaal opofferen voor positioneel voordeel" },
          { en: "A defensive strategy", es: "Una estrategia defensiva", de: "Eine Verteidigungsstrategie", nl: "Een verdedigingsstrategie" },
          { en: "Trading pieces equally", es: "Intercambiar piezas equitativamente", de: "Figuren gleichwertig tauschen", nl: "Stukken gelijkwaardig ruilen" },
          { en: "A type of checkmate", es: "Un tipo de jaque mate", de: "Eine Art Schachmatt", nl: "Een soort schaakmat" }
        ],
        correct: 0,
        explanation: {
          en: "A gambit is an opening where one player sacrifices material (usually a pawn) early to gain tempo, development, or attacking chances.",
          es: "Un gambito es una apertura donde un jugador sacrifica material (usualmente un peón) temprano para ganar tempo, desarrollo u oportunidades de ataque.",
          de: "Ein Gambit ist eine Eröffnung, bei der ein Spieler früh Material (meist einen Bauern) opfert, um Tempo, Entwicklung oder Angriffschancen zu gewinnen.",
          nl: "Een gambiet is een opening waarbij een speler vroeg materiaal (meestal een pion) opoffert om tempo, ontwikkeling of aanvalskansen te winnen."
        }
      },
      {
        question: {
          en: "What is the 'Lucena position'?",
          es: "¿Qué es la 'posición de Lucena'?",
          de: "Was ist die 'Lucena-Stellung'?",
          nl: "Wat is de 'Lucena-positie'?"
        },
        options: [
          { en: "Famous rook endgame winning technique", es: "Técnica ganadora famosa en finales de torres", de: "Berühmte Gewinn-Technik im Turmendspiel", nl: "Beroemde wintechniek in toreneindspel" },
          { en: "An opening trap", es: "Una trampa de apertura", de: "Eine Eröffnungsfalle", nl: "Een openingsval" },
          { en: "A pawn structure", es: "Una estructura de peones", de: "Eine Bauernstruktur", nl: "Een pionstructuur" },
          { en: "A checkmate pattern", es: "Un patrón de jaque mate", de: "Ein Schachmattmuster", nl: "Een schaakmatpatroon" }
        ],
        correct: 0,
        explanation: {
          en: "The Lucena position is one of the most important techniques in rook endgames, showing how to promote a pawn when your rook and king are better placed.",
          es: "La posición de Lucena es una de las técnicas más importantes en finales de torres, mostrando cómo promover un peón cuando tu torre y rey están mejor ubicados.",
          de: "Die Lucena-Stellung ist eine der wichtigsten Techniken im Turmendspiel und zeigt, wie man einen Bauern umwandelt, wenn Turm und König besser platziert sind.",
          nl: "De Lucena-positie is een van de belangrijkste technieken in toreneindspelen, die laat zien hoe een pion te promoveren wanneer je toren en koning beter geplaatst zijn."
        }
      },
      {
        question: {
          en: "What is 'underpromotion'?",
          es: "¿Qué es la 'subpromoción'?",
          de: "Was ist 'Unterumwandlung'?",
          nl: "Wat is 'onderpromotie'?"
        },
        options: [
          { en: "Promoting pawn to piece other than queen", es: "Promover un peón a una pieza que no sea reina", de: "Einen Bauern zu einer anderen Figur als Dame umwandeln", nl: "Een pion promoveren tot een ander stuk dan koningin" },
          { en: "Promoting a pawn too early", es: "Promover un peón demasiado pronto", de: "Einen Bauern zu früh umwandeln", nl: "Een pion te vroeg promoveren" },
          { en: "Failed pawn promotion", es: "Promoción de peón fallida", de: "Gescheiterte Bauernumwandlung", nl: "Mislukte pionpromotie" },
          { en: "Promoting on wrong square", es: "Promover en la casilla equivocada", de: "Auf dem falschen Feld umwandeln", nl: "Promoveren op het verkeerde vakje" }
        ],
        correct: 0,
        explanation: {
          en: "Underpromotion means promoting a pawn to a rook, bishop, or knight instead of a queen. This is rare but sometimes necessary to avoid stalemate or achieve a specific tactical goal.",
          es: "La subpromoción significa promover un peón a torre, alfil o caballo en lugar de reina. Esto es raro pero a veces necesario para evitar ahogado o lograr un objetivo táctico específico.",
          de: "Unterumwandlung bedeutet, einen Bauern zu Turm, Läufer oder Springer statt zu Dame umzuwandeln. Dies ist selten, aber manchmal nötig, um Patt zu vermeiden oder ein spezifisches taktisches Ziel zu erreichen.",
          nl: "Onderpromotie betekent een pion promoveren tot toren, loper of paard in plaats van koningin. Dit is zeldzaam maar soms nodig om pat te vermijden of een specifiek tactisch doel te bereiken."
        }
      },
      {
        question: {
          en: "What is 'algebraic notation'?",
          es: "¿Qué es la 'notación algebraica'?",
          de: "Was ist 'algebraische Notation'?",
          nl: "Wat is 'algebraïsche notatie'?"
        },
        options: [
          { en: "Standard system for recording chess moves", es: "Sistema estándar para registrar movimientos de ajedrez", de: "Standardsystem zur Aufzeichnung von Schachzügen", nl: "Standaardsysteem voor het noteren van schaakzetten" },
          { en: "Mathematical chess analysis", es: "Análisis matemático del ajedrez", de: "Mathematische Schachanalyse", nl: "Wiskundige schaakanalyse" },
          { en: "A type of chess opening", es: "Un tipo de apertura de ajedrez", de: "Eine Art Schacheröffnung", nl: "Een soort schaakopening" },
          { en: "Computer chess programming", es: "Programación de ajedrez por computadora", de: "Computer-Schachprogrammierung", nl: "Computerschaakprogrammering" }
        ],
        correct: 0,
        explanation: {
          en: "Algebraic notation uses letters a-h for files and numbers 1-8 for ranks to record moves (e.g., e4, Nf3). It's the standard way to write down chess games.",
          es: "La notación algebraica usa letras a-h para columnas y números 1-8 para filas para registrar movimientos (ej., e4, Nf3). Es la forma estándar de escribir partidas de ajedrez.",
          de: "Die algebraische Notation verwendet Buchstaben a-h für Linien und Zahlen 1-8 für Reihen zur Aufzeichnung von Zügen (z.B. e4, Sf3). Sie ist die Standardmethode zum Notieren von Schachpartien.",
          nl: "Algebraïsche notatie gebruikt letters a-h voor lijnen en nummers 1-8 voor rijen om zetten te noteren (bijv. e4, Pf3). Het is de standaardmanier om schaakpartijen op te schrijven."
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
          { en: "Moving piece reveals attack from piece behind", es: "Mover una pieza revela un ataque de una pieza detrás", de: "Eine Figur bewegen enthüllt Angriff von Figur dahinter", nl: "Een stuk bewegen onthult aanval van stuk erachter" },
          { en: "Finding a hidden tactical shot", es: "Encontrar un golpe táctico oculto", de: "Einen versteckten taktischen Schlag finden", nl: "Een verborgen tactische slag vinden" },
          { en: "Attacking with multiple pieces", es: "Atacar con múltiples piezas", de: "Mit mehreren Figuren angreifen", nl: "Aanvallen met meerdere stukken" },
          { en: "Surprise opening move", es: "Movimiento de apertura sorpresa", de: "Überraschender Eröffnungszug", nl: "Verrassing openingszet" }
        ],
        correct: 0,
        explanation: {
          en: "A discovered attack occurs when moving one piece unveils an attack from another piece that was blocked. The moving piece can also attack simultaneously.",
          es: "Un ataque descubierto ocurre cuando mover una pieza revela un ataque de otra pieza que estaba bloqueada. La pieza en movimiento también puede atacar simultáneamente.",
          de: "Ein Abzugsangriff tritt auf, wenn das Bewegen einer Figur einen Angriff von einer anderen, zuvor blockierten Figur enthüllt. Die bewegte Figur kann gleichzeitig auch angreifen.",
          nl: "Een ontdekte aanval treedt op wanneer het bewegen van een stuk een aanval van een ander stuk dat geblokkeerd was onthult. Het bewegende stuk kan ook tegelijkertijd aanvallen."
        }
      },
      {
        question: {
          en: "What is the 'initiative' in chess?",
          es: "¿Qué es la 'iniciativa' en ajedrez?",
          de: "Was ist die 'Initiative' im Schach?",
          nl: "Wat is het 'initiatief' in schaken?"
        },
        options: [
          { en: "Ability to make threats and control tempo", es: "Capacidad de hacer amenazas y controlar el tempo", de: "Fähigkeit, Drohungen zu machen und Tempo zu kontrollieren", nl: "Vermogen om dreigingen te maken en tempo te controleren" },
          { en: "Making the first move", es: "Hacer el primer movimiento", de: "Den ersten Zug machen", nl: "De eerste zet doen" },
          { en: "Having more pieces", es: "Tener más piezas", de: "Mehr Figuren haben", nl: "Meer stukken hebben" },
          { en: "Attacking the king first", es: "Atacar al rey primero", de: "Den König zuerst angreifen", nl: "De koning eerst aanvallen" }
        ],
        correct: 0,
        explanation: {
          en: "Having the initiative means your moves create threats that force your opponent to respond defensively rather than pursuing their own plans.",
          es: "Tener la iniciativa significa que tus movimientos crean amenazas que obligan a tu oponente a responder defensivamente en lugar de perseguir sus propios planes.",
          de: "Die Initiative zu haben bedeutet, dass Ihre Züge Drohungen schaffen, die Ihren Gegner zwingen, defensiv zu reagieren, anstatt eigene Pläne zu verfolgen.",
          nl: "Het initiatief hebben betekent dat je zetten dreigingen creëren die je tegenstander dwingen defensief te reageren in plaats van hun eigen plannen na te streven."
        }
      },
      {
        question: {
          en: "What are 'hanging pawns'?",
          es: "¿Qué son 'peones colgantes'?",
          de: "Was sind 'hängende Bauern'?",
          nl: "Wat zijn 'hangende pionnen'?"
        },
        options: [
          { en: "Two pawns side-by-side on 4th rank without pawn support", es: "Dos peones lado a lado en la 4ª fila sin apoyo de otros peones", de: "Zwei Bauern nebeneinander auf der 4. Reihe ohne Bauernunterstützung", nl: "Twee pionnen naast elkaar op de 4e rij zonder pionsteun" },
          { en: "Pawns about to be captured", es: "Peones a punto de ser capturados", de: "Bauern kurz vor dem Geschlagenwerden", nl: "Pionnen op het punt om geslagen te worden" },
          { en: "Undefended pawns", es: "Peones sin defensa", de: "Unverteidigte Bauern", nl: "Onverdedigde pionnen" },
          { en: "Pawns on the edge files", es: "Peones en las columnas laterales", de: "Bauern auf den Randlinien", nl: "Pionnen op de randlijnen" }
        ],
        correct: 0,
        explanation: {
          en: "Hanging pawns are typically two pawns side-by-side on the c and d files (or d and e) on the 4th rank, isolated from other pawns. They can be strong or weak depending on the position.",
          es: "Los peones colgantes son típicamente dos peones lado a lado en las columnas c y d (o d y e) en la 4ª fila, aislados de otros peones. Pueden ser fuertes o débiles dependiendo de la posición.",
          de: "Hängende Bauern sind typischerweise zwei Bauern nebeneinander auf den c- und d-Linien (oder d und e) auf der 4. Reihe, isoliert von anderen Bauern. Sie können stark oder schwach sein, je nach Stellung.",
          nl: "Hangende pionnen zijn meestal twee pionnen naast elkaar op de c en d lijnen (of d en e) op de 4e rij, geïsoleerd van andere pionnen. Ze kunnen sterk of zwak zijn afhankelijk van de positie."
        }
      },
      {
        question: {
          en: "What is a 'perpetual check'?",
          es: "¿Qué es un 'jaque perpetuo'?",
          de: "Was ist ein 'Dauerschach'?",
          nl: "Wat is 'eeuwig schaak'?"
        },
        options: [
          { en: "Endless series of checks forcing a draw", es: "Serie interminable de jaques que fuerza empate", de: "Endlose Serie von Schachs, die Remis erzwingt", nl: "Eindeloze reeks schaken die remise afdwingt" },
          { en: "Checking every move", es: "Dar jaque en cada movimiento", de: "Jeden Zug Schach geben", nl: "Elke zet schaak geven" },
          { en: "Permanent check position", es: "Posición de jaque permanente", de: "Permanente Schachstellung", nl: "Permanente schaakpositie" },
          { en: "Checking until mate", es: "Dar jaque hasta el mate", de: "Schach geben bis Matt", nl: "Schaak geven tot mat" }
        ],
        correct: 0,
        explanation: {
          en: "Perpetual check is a drawing technique where one player can check the opponent's king endlessly. The game is drawn by threefold repetition or mutual agreement.",
          es: "El jaque perpetuo es una técnica de empate donde un jugador puede dar jaque al rey del oponente infinitamente. El juego termina en empate por triple repetición o acuerdo mutuo.",
          de: "Dauerschach ist eine Remis-Technik, bei der ein Spieler den gegnerischen König endlos schach setzen kann. Das Spiel endet durch dreifache Wiederholung oder gegenseitige Vereinbarung remis.",
          nl: "Eeuwig schaak is een remisetechniek waarbij een speler de koning van de tegenstander eindeloos schaak kan zetten. Het spel eindigt remise door drievoudige herhaling of wederzijdse overeenkomst."
        }
      },
      {
        question: {
          en: "What is the 'Philidor position'?",
          es: "¿Qué es la 'posición de Philidor'?",
          de: "Was ist die 'Philidor-Stellung'?",
          nl: "Wat is de 'Philidor-positie'?"
        },
        options: [
          { en: "Defensive rook endgame holding technique", es: "Técnica defensiva para aguantar en finales de torres", de: "Defensive Haltetechnik im Turmendspiel", nl: "Defensieve houdtechniek in toreneindspel" },
          { en: "An opening strategy", es: "Una estrategia de apertura", de: "Eine Eröffnungsstrategie", nl: "Een openingsstrategie" },
          { en: "A pawn breakthrough", es: "Un avance de peón", de: "Ein Bauerndurchbruch", nl: "Een piondoorbraak" },
          { en: "A mating pattern", es: "Un patrón de mate", de: "Ein Mattmuster", nl: "Een matpatroon" }
        ],
        correct: 0,
        explanation: {
          en: "The Philidor position shows how the defending side in a rook and pawn endgame can hold a draw by keeping the rook on the third rank and preventing the attacking king from advancing.",
          es: "La posición de Philidor muestra cómo el lado defensor en un final de torre y peón puede mantener empate manteniendo la torre en la tercera fila y evitando que el rey atacante avance.",
          de: "Die Philidor-Stellung zeigt, wie die verteidigende Seite in einem Turm-und-Bauer-Endspiel ein Remis halten kann, indem der Turm auf der dritten Reihe bleibt und der angreifende König am Vorrücken gehindert wird.",
          nl: "De Philidor-positie toont hoe de verdedigende kant in een toren-en-pion-eindspel remise kan houden door de toren op de derde rij te houden en te voorkomen dat de aanvallende koning voortkomt."
        }
      },
      {
        question: {
          en: "What is 'queenside castling'?",
          es: "¿Qué es el 'enroque largo'?",
          de: "Was ist 'lange Rochade'?",
          nl: "Wat is 'lange rokade'?"
        },
        options: [
          { en: "Castling with the a-rook (O-O-O)", es: "Enrocar con la torre del lado de la reina (O-O-O)", de: "Rochade mit dem a-Turm (O-O-O)", nl: "Rokeren met de a-toren (O-O-O)" },
          { en: "Moving queen early", es: "Mover la reina temprano", de: "Die Dame früh ziehen", nl: "De koningin vroeg bewegen" },
          { en: "Castling toward the queen", es: "Enrocar hacia la reina", de: "Zur Dame rochieren", nl: "Naar de koningin rokeren" },
          { en: "Special queen move", es: "Movimiento especial de reina", de: "Spezieller Damenzug", nl: "Speciale koninginzet" }
        ],
        correct: 0,
        explanation: {
          en: "Queenside castling (O-O-O or 0-0-0) involves castling with the rook on the a-file. The king moves two squares toward the rook, and the rook jumps over to the d-file.",
          es: "El enroque largo (O-O-O o 0-0-0) implica enrocar con la torre en la columna a. El rey se mueve dos casillas hacia la torre, y la torre salta a la columna d.",
          de: "Lange Rochade (O-O-O oder 0-0-0) bedeutet Rochade mit dem Turm auf der a-Linie. Der König zieht zwei Felder zum Turm, und der Turm springt auf die d-Linie.",
          nl: "Lange rokade (O-O-O of 0-0-0) betekent rokeren met de toren op de a-lijn. De koning beweegt twee vakjes naar de toren, en de toren springt naar de d-lijn."
        }
      },
      {
        question: {
          en: "What is a 'zwischenzug'?",
          es: "¿Qué es un 'zwischenzug'?",
          de: "Was ist ein 'Zwischenzug'?",
          nl: "Wat is een 'zwischenzug'?"
        },
        options: [
          { en: "In-between move before expected recapture", es: "Movimiento intermedio antes de la recaptura esperada", de: "Zwischenzug vor dem erwarteten Rückschlag", nl: "Tussenzet voor de verwachte terugslag" },
          { en: "German opening move", es: "Movimiento de apertura alemán", de: "Deutscher Eröffnungszug", nl: "Duitse openingszet" },
          { en: "Endgame technique", es: "Técnica de final", de: "Endspiel-Technik", nl: "Eindspeltechniek" },
          { en: "Pawn promotion move", es: "Movimiento de promoción de peón", de: "Bauernumwandlungszug", nl: "Pionpromotiezet" }
        ],
        correct: 0,
        explanation: {
          en: "Zwischenzug (German for 'in-between move') is an unexpected intermediate move played before the expected reply, often turning the tables tactically.",
          es: "Zwischenzug (alemán para 'movimiento intermedio') es un movimiento intermedio inesperado jugado antes de la respuesta esperada, a menudo cambiando las tornas tácticamente.",
          de: "Zwischenzug ist ein unerwarteter Zwischenzug, der vor der erwarteten Antwort gespielt wird und oft die Lage taktisch wendet.",
          nl: "Zwischenzug (Duits voor 'tussenzet') is een onverwachte tussenzet gespeeld voor de verwachte reactie, vaak de zaak tactisch omdraaiend."
        }
      },
      {
        question: {
          en: "What is 'compensation' in chess?",
          es: "¿Qué es 'compensación' en ajedrez?",
          de: "Was ist 'Kompensation' im Schach?",
          nl: "Wat is 'compensatie' in schaken?"
        },
        options: [
          { en: "Positional advantages offsetting material deficit", es: "Ventajas posicionales que compensan déficit material", de: "Positionelle Vorteile, die Materialdefizit ausgleichen", nl: "Positionele voordelen die materiaaldeficit compenseren" },
          { en: "Equal material trade", es: "Intercambio de material igual", de: "Gleichwertiger Materialtausch", nl: "Gelijkwaardige materiaalruil" },
          { en: "Getting pieces back", es: "Recuperar piezas", de: "Figuren zurückbekommen", nl: "Stukken terugkrijgen" },
          { en: "Time bonus in endgame", es: "Bonificación de tiempo en el final", de: "Zeitbonus im Endspiel", nl: "Tijdbonus in eindspel" }
        ],
        correct: 0,
        explanation: {
          en: "Compensation refers to positional factors (like piece activity, king safety, or pawn structure) that make up for being down material. For example, sacrificing a pawn for strong development.",
          es: "La compensación se refiere a factores posicionales (como actividad de piezas, seguridad del rey o estructura de peones) que compensan estar abajo en material. Por ejemplo, sacrificar un peón por fuerte desarrollo.",
          de: "Kompensation bezieht sich auf positionelle Faktoren (wie Figurenaktivität, Königssicherheit oder Bauernstruktur), die einen Materialrückstand ausgleichen. Zum Beispiel einen Bauern für starke Entwicklung opfern.",
          nl: "Compensatie verwijst naar positionele factoren (zoals stukactiviteit, koningsveiligheid of pionstructuur) die materiaalachtterstand goedmaken. Bijvoorbeeld een pion opofferen voor sterke ontwikkeling."
        }
      },
      {
        question: {
          en: "What is a 'breakthrough' in chess?",
          es: "¿Qué es un 'avance' en ajedrez?",
          de: "Was ist ein 'Durchbruch' im Schach?",
          nl: "Wat is een 'doorbraak' in schaken?"
        },
        options: [
          { en: "Pawn sacrifice creating passed pawn", es: "Sacrificio de peón creando un peón pasado", de: "Bauernopfer, das Freibauern schafft", nl: "Pionoffer dat vrijpion creëert" },
          { en: "Breaking opponent's defense", es: "Romper la defensa del oponente", de: "Die Verteidigung des Gegners brechen", nl: "De verdediging van de tegenstander doorbreken" },
          { en: "Advancing to promotion", es: "Avanzar a la promoción", de: "Zur Umwandlung vorstoßen", nl: "Naar promotie vooruitkomen" },
          { en: "First win in tournament", es: "Primera victoria en torneo", de: "Erster Turniersieg", nl: "Eerste overwinning in toernooi" }
        ],
        correct: 0,
        explanation: {
          en: "A breakthrough is a pawn sacrifice (often in the endgame) where one or more pawns are sacrificed to create an unstoppable passed pawn.",
          es: "Un avance es un sacrificio de peón (a menudo en el final) donde uno o más peones se sacrifican para crear un peón pasado imparable.",
          de: "Ein Durchbruch ist ein Bauernopfer (oft im Endspiel), bei dem ein oder mehrere Bauern geopfert werden, um einen unaufhaltsamen Freibauern zu schaffen.",
          nl: "Een doorbraak is een pionoffer (vaak in het eindspel) waarbij een of meer pionnen worden opgeofferd om een onstuitbare vrijpion te creëren."
        }
      },
      {
        question: {
          en: "What is the 'exchange' in chess terminology?",
          es: "¿Qué es el 'cambio' en terminología de ajedrez?",
          de: "Was ist der 'Abtausch' in der Schachterminologie?",
          nl: "Wat is de 'ruil' in schaakterminologie?"
        },
        options: [
          { en: "Rook for bishop or knight", es: "Torre por alfil o caballo", de: "Turm gegen Läufer oder Springer", nl: "Toren voor loper of paard" },
          { en: "Any piece trade", es: "Cualquier intercambio de piezas", de: "Jeder Figurentausch", nl: "Elke stukruil" },
          { en: "Queen for two rooks", es: "Reina por dos torres", de: "Dame gegen zwei Türme", nl: "Koningin voor twee torens" },
          { en: "Trading pawns", es: "Intercambiar peones", de: "Bauern tauschen", nl: "Pionnen ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "The exchange specifically means a rook for a bishop or knight. Winning the exchange means getting a rook for a minor piece (about 2 points advantage).",
          es: "El cambio específicamente significa una torre por un alfil o caballo. Ganar el cambio significa obtener una torre por una pieza menor (aproximadamente 2 puntos de ventaja).",
          de: "Der Abtausch bedeutet speziell ein Turm gegen Läufer oder Springer. Den Abtausch gewinnen bedeutet, einen Turm für eine Leichtfigur zu erhalten (etwa 2 Punkte Vorteil).",
          nl: "De ruil betekent specifiek een toren voor een loper of paard. De ruil winnen betekent een toren krijgen voor een licht stuk (ongeveer 2 punten voordeel)."
        }
      },
      {
        question: {
          en: "What is a 'windmill' in chess?",
          es: "¿Qué es un 'molino' en ajedrez?",
          de: "Was ist eine 'Mühle' im Schach?",
          nl: "Wat is een 'molen' in schaken?"
        },
        options: [
          { en: "Repeated discovered checks winning material", es: "Jaques descubiertos repetidos ganando material", de: "Wiederholte Abzugsschachs, die Material gewinnen", nl: "Herhaalde ontdekte schaken die materiaal winnen" },
          { en: "Circular pawn movement", es: "Movimiento circular de peones", de: "Kreisförmige Bauernbewegung", nl: "Cirkelvormige pionbeweging" },
          { en: "Rotating piece positions", es: "Rotar posiciones de piezas", de: "Rotierende Figurenpositionen", nl: "Roterende stukposities" },
          { en: "Spinning knight maneuver", es: "Maniobra de caballo giratorio", de: "Drehende Springermanöver", nl: "Draaiende paardmanoeuvre" }
        ],
        correct: 0,
        explanation: {
          en: "A windmill is a tactic using repeated discovered checks where a piece moves back and forth giving discovered check while capturing enemy pieces each time.",
          es: "Un molino es una táctica usando jaques descubiertos repetidos donde una pieza se mueve de ida y vuelta dando jaque descubierto mientras captura piezas enemigas cada vez.",
          de: "Eine Mühle ist eine Taktik mit wiederholten Abzugsschachs, bei der eine Figur hin und her zieht und dabei Abzugsschach gibt, während sie jedes Mal gegnerische Figuren schlägt.",
          nl: "Een molen is een tactiek met herhaalde ontdekte schaken waarbij een stuk heen en weer beweegt en ontdekt schaak geeft terwijl het elke keer vijandelijke stukken slaat."
        }
      },
      {
        question: {
          en: "What does 'consolidation' mean in chess?",
          es: "¿Qué significa 'consolidación' en ajedrez?",
          de: "Was bedeutet 'Konsolidierung' im Schach?",
          nl: "Wat betekent 'consolidatie' in schaken?"
        },
        options: [
          { en: "Securing gained advantage and defending position", es: "Asegurar ventaja ganada y defender posición", de: "Gewonnenen Vorteil sichern und Stellung verteidigen", nl: "Behaald voordeel veiligstellen en positie verdedigen" },
          { en: "Combining pieces together", es: "Combinar piezas juntas", de: "Figuren zusammenbringen", nl: "Stukken samenbrengen" },
          { en: "Simplifying the position", es: "Simplificar la posición", de: "Die Stellung vereinfachen", nl: "De positie vereenvoudigen" },
          { en: "Building pawn chains", es: "Construir cadenas de peones", de: "Bauernketten bauen", nl: "Pionketens bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Consolidation means securing and defending an advantage you've gained. After winning material or achieving a better position, you consolidate by improving piece placement and preventing counterplay.",
          es: "La consolidación significa asegurar y defender una ventaja que has ganado. Después de ganar material o lograr una mejor posición, consolidas mejorando la colocación de piezas y previniendo contraataque.",
          de: "Konsolidierung bedeutet, einen gewonnenen Vorteil zu sichern und zu verteidigen. Nach Materialgewinn oder Erreichen einer besseren Stellung konsolidieren Sie durch Verbesserung der Figurenplatzierung und Verhinderung von Gegenspiel.",
          nl: "Consolidatie betekent het veiligstellen en verdedigen van een behaald voordeel. Na het winnen van materiaal of het bereiken van een betere positie, consolideer je door stukplaatsing te verbeteren en tegenaanval te voorkomen."
        }
      },
      {
        question: {
          en: "What is 'opposite-colored bishops' endgame?",
          es: "¿Qué es un final de 'alfiles de colores opuestos'?",
          de: "Was ist ein 'gegenfarbige Läufer'-Endspiel?",
          nl: "Wat is een 'ongelijkkleurige lopers'-eindspel?"
        },
        options: [
          { en: "Bishops on different colors, often drawish", es: "Alfiles en colores diferentes, a menudo tablas", de: "Läufer auf verschiedenen Farben, oft remis", nl: "Lopers op verschillende kleuren, vaak remise" },
          { en: "One white, one black bishop", es: "Un alfil blanco, un alfil negro", de: "Ein weißer, ein schwarzer Läufer", nl: "Eén witte, één zwarte loper" },
          { en: "Bishops facing opposite directions", es: "Alfiles mirando direcciones opuestas", de: "Läufer in entgegengesetzte Richtungen", nl: "Lopers in tegenovergestelde richtingen" },
          { en: "Trading bishops", es: "Intercambiar alfiles", de: "Läufer tauschen", nl: "Lopers ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "Opposite-colored bishops means each side has a bishop that operates on different colored squares. These endgames are notoriously drawish because bishops can't attack squares of the opposite color.",
          es: "Alfiles de colores opuestos significa que cada lado tiene un alfil que opera en casillas de diferentes colores. Estos finales son notoriamente tablas porque los alfiles no pueden atacar casillas del color opuesto.",
          de: "Gegenfarbige Läufer bedeutet, dass jede Seite einen Läufer hat, der auf verschiedenfarbigen Feldern operiert. Diese Endspiele sind berüchtigt remis, weil Läufer keine Felder der Gegenfarbe angreifen können.",
          nl: "Ongelijkkleurige lopers betekent dat elke kant een loper heeft die op verschillende gekleurde vakjes opereert. Deze eindspelen zijn berucht remise omdat lopers geen vakjes van de tegengestelde kleur kunnen aanvallen."
        }
      },
      {
        question: {
          en: "What is a 'deflection' in chess tactics?",
          es: "¿Qué es una 'desviación' en tácticas de ajedrez?",
          de: "Was ist eine 'Ablenkung' in Schachtaktiken?",
          nl: "Wat is een 'afleiding' in schaaktactieken?"
        },
        options: [
          { en: "Forcing piece away from defending crucial square", es: "Forzar pieza lejos de defender casilla crucial", de: "Figur von der Verteidigung eines wichtigen Feldes wegzwingen", nl: "Stuk wegdwingen van verdedigen van cruciaal vakje" },
          { en: "Moving pieces to side of board", es: "Mover piezas al lado del tablero", de: "Figuren zur Brettseite bewegen", nl: "Stukken naar kant van bord bewegen" },
          { en: "Changing opening plan", es: "Cambiar plan de apertura", de: "Eröffnungsplan ändern", nl: "Openingsplan wijzigen" },
          { en: "Distracting opponent", es: "Distraer al oponente", de: "Gegner ablenken", nl: "Tegenstander afleiden" }
        },
        correct: 0,
        explanation: {
          en: "Deflection is a tactic where you force an opponent's piece to leave a square it's defending, typically by offering an attractive capture that the piece can't refuse.",
          es: "La desviación es una táctica donde fuerzas a una pieza del oponente a dejar una casilla que está defendiendo, típicamente ofreciendo una captura atractiva que la pieza no puede rechazar.",
          de: "Ablenkung ist eine Taktik, bei der Sie eine gegnerische Figur zwingen, ein Feld zu verlassen, das sie verteidigt, typischerweise durch Anbieten einer attraktiven Eroberung, die die Figur nicht ablehnen kann.",
          nl: "Afleiding is een tactiek waarbij je een stuk van de tegenstander dwingt een vakje te verlaten dat het verdedigt, typisch door een aantrekkelijke slag aan te bieden die het stuk niet kan weigeren."
        }
      },
      {
        question: {
          en: "What is 'prophylaxis' in chess?",
          es: "¿Qué es la 'profilaxis' en ajedrez?",
          de: "Was ist 'Prophylaxe' im Schach?",
          nl: "Wat is 'profylaxe' in schaken?"
        },
        options: [
          { en: "Preventing opponent's plans before they occur", es: "Prevenir los planes del oponente antes de que ocurran", de: "Gegnerpläne verhindern bevor sie geschehen", nl: "Plannen van tegenstander voorkomen voordat ze gebeuren" },
          { en: "Medical treatment for players", es: "Tratamiento médico para jugadores", de: "Medizinische Behandlung für Spieler", nl: "Medische behandeling voor spelers" },
          { en: "Defensive opening preparation", es: "Preparación defensiva de apertura", de: "Defensive Eröffnungsvorbereitung", nl: "Defensieve openingsvoorbereiding" },
          { en: "Protecting the king", es: "Proteger al rey", de: "Den König schützen", nl: "De koning beschermen" }
        ],
        correct: 0,
        explanation: {
          en: "Prophylaxis (prophylactic thinking) means anticipating and preventing your opponent's plans before they can execute them. This concept was popularized by Nimzowitsch.",
          es: "La profilaxis (pensamiento profiláctico) significa anticipar y prevenir los planes de tu oponente antes de que puedan ejecutarlos. Este concepto fue popularizado por Nimzowitsch.",
          de: "Prophylaxe (prophylaktisches Denken) bedeutet, die Pläne des Gegners vorherzusehen und zu verhindern, bevor er sie ausführen kann. Dieses Konzept wurde von Nimzowitsch populär gemacht.",
          nl: "Profylaxe (profylactisch denken) betekent de plannen van je tegenstander anticiperen en voorkomen voordat ze kunnen worden uitgevoerd. Dit concept werd gepopulariseerd door Nimzowitsch."
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
