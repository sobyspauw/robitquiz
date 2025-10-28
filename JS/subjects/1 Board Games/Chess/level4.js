// Quiz Template - Level 4: Bord spelletjes - Schaken
(function() {
  const level4 = {
    name: {
      en: "Chess",
      es: "Ajedrez",
      de: "Schach",
      nl: "Schaken"
    },
    questions: [
      {
        question: {
          en: "What is a 'fork' in chess?",
          es: "¿Qué es una 'horquilla' en ajedrez?",
          de: "Was ist eine 'Gabel' im Schach?",
          nl: "Wat is een 'vork' in schaken?"
        },
        options: [
          { en: "A piece attacks two or more enemy pieces simultaneously", es: "Una pieza ataca dos o más piezas enemigas simultáneamente", de: "Eine Figur greift zwei oder mehr gegnerische Figuren gleichzeitig an", nl: "Een stuk valt twee of meer vijandelijke stukken tegelijk aan" },
          { en: "Splitting the board in half", es: "Dividir el tablero por la mitad", de: "Das Brett in der Mitte teilen", nl: "Het bord in tweeën splitsen" },
          { en: "A type of opening", es: "Un tipo de apertura", de: "Eine Art Eröffnung", nl: "Een soort opening" },
          { en: "Choosing between two moves", es: "Elegir entre dos movimientos", de: "Zwischen zwei Zügen wählen", nl: "Kiezen tussen twee zetten" }
        ],
        correct: 0,
        explanation: {
          en: "A fork is a tactic where one piece attacks two or more enemy pieces at the same time. Knights are especially effective at forks due to their unique movement pattern.",
          es: "Una horquilla es una táctica donde una pieza ataca dos o más piezas enemigas al mismo tiempo. Los caballos son especialmente efectivos en horquillas debido a su patrón de movimiento único.",
          de: "Eine Gabel ist eine Taktik, bei der eine Figur zwei oder mehr gegnerische Figuren gleichzeitig angreift. Springer sind aufgrund ihres einzigartigen Bewegungsmusters besonders effektiv bei Gabeln.",
          nl: "Een vork is een tactiek waarbij één stuk twee of meer vijandelijke stukken tegelijk aanvalt. Paarden zijn bijzonder effectief bij vorken vanwege hun unieke bewegingspatroon."
        }
      },
      {
        question: {
          en: "What is a 'pin' in chess?",
          es: "¿Qué es una 'clavada' en ajedrez?",
          de: "Was ist eine 'Fesselung' im Schach?",
          nl: "Wat is een 'pin' in schaken?"
        },
        options: [
          { en: "A piece cannot move without exposing a more valuable piece behind it", es: "Una pieza no puede moverse sin exponer una pieza más valiosa detrás", de: "Eine Figur kann sich nicht bewegen, ohne eine wertvollere Figur dahinter freizulegen", nl: "Een stuk kan niet bewegen zonder een waardevoller stuk erachter bloot te stellen" },
          { en: "Trapping a piece in a corner", es: "Atrapar una pieza en una esquina", de: "Eine Figur in einer Ecke einfangen", nl: "Een stuk in een hoek vangen" },
          { en: "Blocking a pawn from advancing", es: "Bloquear un peón para que no avance", de: "Einen Bauern am Vorrücken hindern", nl: "Een pion tegenhouden van opschuiven" },
          { en: "Attacking with a rook", es: "Atacar con una torre", de: "Mit einem Turm angreifen", nl: "Aanvallen met een toren" }
        ],
        correct: 0,
        explanation: {
          en: "A pin occurs when a piece is attacked and cannot move because doing so would expose a more valuable piece (often the king or queen) to capture. Pins are powerful tactical weapons.",
          es: "Una clavada ocurre cuando una pieza es atacada y no puede moverse porque hacerlo expondría una pieza más valiosa (a menudo el rey o la dama) a captura. Las clavadas son armas tácticas poderosas.",
          de: "Eine Fesselung tritt auf, wenn eine Figur angegriffen wird und sich nicht bewegen kann, weil dies eine wertvollere Figur (oft den König oder die Dame) freigeben würde. Fesselungen sind mächtige taktische Waffen.",
          nl: "Een pin vindt plaats wanneer een stuk wordt aangevallen en niet kan bewegen omdat dit een waardevoller stuk (vaak de koning of dame) zou blootstellen. Pins zijn krachtige tactische wapens."
        }
      },
      {
        question: {
          en: "What is 'castling' in chess?",
          es: "¿Qué es el 'enroque' en ajedrez?",
          de: "Was ist 'Rochade' im Schach?",
          nl: "Wat is 'rokeren' in schaken?"
        },
        options: [
          { en: "A special move involving the king and rook to protect the king", es: "Un movimiento especial que involucra al rey y la torre para proteger al rey", de: "Ein besonderer Zug mit König und Turm zum Schutz des Königs", nl: "Een speciale zet met de koning en toren om de koning te beschermen" },
          { en: "Building a fortress with pawns", es: "Construir una fortaleza con peones", de: "Eine Festung mit Bauern bauen", nl: "Een fort bouwen met pionnen" },
          { en: "Moving the king to safety", es: "Mover el rey a un lugar seguro", de: "Den König in Sicherheit bringen", nl: "De koning in veiligheid brengen" },
          { en: "Trading pieces in the opening", es: "Intercambiar piezas en la apertura", de: "Figuren in der Eröffnung tauschen", nl: "Stukken ruilen in de opening" }
        ],
        correct: 0,
        explanation: {
          en: "Castling is a special move where the king moves two squares toward a rook, and the rook jumps to the other side of the king. It can only be done once per game and helps protect the king while activating the rook.",
          es: "El enroque es un movimiento especial donde el rey se mueve dos casillas hacia una torre, y la torre salta al otro lado del rey. Solo se puede hacer una vez por partida y ayuda a proteger al rey mientras activa la torre.",
          de: "Die Rochade ist ein besonderer Zug, bei dem der König zwei Felder in Richtung eines Turms zieht und der Turm auf die andere Seite des Königs springt. Sie kann nur einmal pro Partie ausgeführt werden und hilft, den König zu schützen und den Turm zu aktivieren.",
          nl: "Rokeren is een speciale zet waarbij de koning twee velden richting een toren beweegt en de toren naar de andere kant van de koning springt. Het kan maar één keer per partij worden gedaan en helpt de koning te beschermen terwijl de toren wordt geactiveerd."
        }
      },
      {
        question: {
          en: "What is 'en passant' in chess?",
          es: "¿Qué es 'en passant' en ajedrez?",
          de: "Was ist 'en passant' im Schach?",
          nl: "Wat is 'en passant' in schaken?"
        },
        options: [
          { en: "A special pawn capture when an enemy pawn moves two squares forward", es: "Una captura especial de peón cuando un peón enemigo avanza dos casillas", de: "Ein spezieller Bauernschlag, wenn ein gegnerischer Bauer zwei Felder vorzieht", nl: "Een speciale pionslag wanneer een vijandelijke pion twee velden vooruit gaat" },
          { en: "Passing through enemy lines", es: "Pasar a través de líneas enemigas", de: "Durch feindliche Linien ziehen", nl: "Door vijandelijke linies gaan" },
          { en: "Moving a piece backwards", es: "Mover una pieza hacia atrás", de: "Eine Figur rückwärts bewegen", nl: "Een stuk achteruit bewegen" },
          { en: "Capturing with the king", es: "Capturar con el rey", de: "Mit dem König schlagen", nl: "Slaan met de koning" }
        ],
        correct: 0,
        explanation: {
          en: "En passant is a special pawn capture that can occur when an opponent's pawn moves two squares forward from its starting position and lands beside your pawn. You can capture it as if it had only moved one square, but only immediately on the next move.",
          es: "En passant es una captura especial de peón que puede ocurrir cuando el peón de un oponente avanza dos casillas desde su posición inicial y aterriza al lado de tu peón. Puedes capturarlo como si solo hubiera movido una casilla, pero solo inmediatamente en el siguiente movimiento.",
          de: "En passant ist ein spezieller Bauernschlag, der auftreten kann, wenn der Bauer eines Gegners zwei Felder von seiner Startposition vorzieht und neben Ihrem Bauern landet. Sie können ihn schlagen, als hätte er nur ein Feld gezogen, aber nur sofort im nächsten Zug.",
          nl: "En passant is een speciale pionslag die kan plaatsvinden wanneer de pion van een tegenstander twee velden vooruit gaat vanaf zijn startpositie en naast je pion terechtkomt. Je kunt hem slaan alsof hij maar één veld heeft bewogen, maar alleen onmiddellijk in de volgende zet."
        }
      },
      {
        question: {
          en: "What is a 'skewer' in chess?",
          es: "¿Qué es un 'ensartado' en ajedrez?",
          de: "Was ist ein 'Spieß' im Schach?",
          nl: "Wat is een 'spies' in schaken?"
        },
        options: [
          { en: "Attacking a valuable piece, forcing it to move and exposing a piece behind it", es: "Atacar una pieza valiosa, forzándola a moverse y exponiendo una pieza detrás", de: "Eine wertvolle Figur angreifen, die sich bewegen muss und eine Figur dahinter freilegt", nl: "Een waardevol stuk aanvallen, waardoor het moet bewegen en een stuk erachter blootstelt" },
          { en: "Putting food on a stick", es: "Poner comida en un palillo", de: "Essen auf einen Spieß stecken", nl: "Voedsel op een spies doen" },
          { en: "A type of checkmate", es: "Un tipo de jaque mate", de: "Eine Art Schachmatt", nl: "Een soort schaakmat" },
          { en: "Moving through pieces", es: "Moverse a través de piezas", de: "Durch Figuren ziehen", nl: "Door stukken bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "A skewer is similar to a pin but reversed - a valuable piece is attacked and must move, exposing a less valuable piece behind it to capture. It's essentially a 'reverse pin' and is a powerful tactical weapon.",
          es: "Un ensartado es similar a una clavada pero al revés: una pieza valiosa es atacada y debe moverse, exponiendo una pieza menos valiosa detrás para captura. Es esencialmente una 'clavada inversa' y es un arma táctica poderosa.",
          de: "Ein Spieß ist ähnlich wie eine Fesselung, aber umgekehrt - eine wertvolle Figur wird angegriffen und muss sich bewegen, wodurch eine weniger wertvolle Figur dahinter zum Schlagen freigegeben wird. Es ist im Wesentlichen eine 'umgekehrte Fesselung' und eine mächtige taktische Waffe.",
          nl: "Een spies is vergelijkbaar met een pin maar omgekeerd - een waardevol stuk wordt aangevallen en moet bewegen, waardoor een minder waardevol stuk erachter wordt blootgesteld. Het is in wezen een 'omgekeerde pin' en is een krachtig tactisch wapen."
        }
      },
      {
        question: {
          en: "In which year did Garry Kasparov defeat Anatoly Karpov to become World Champion?",
          es: "¿En qué año derrotó Garry Kasparov a Anatoly Karpov para convertirse en Campeón Mundial?",
          de: "In welchem Jahr besiegte Garry Kasparow Anatoly Karpow und wurde Weltmeister?",
          nl: "In welk jaar versloeg Garry Kasparov Anatoly Karpov om wereldkampioen te worden?"
        },
        options: [
          { en: "1985", es: "1985", de: "1985", nl: "1985" },
          { en: "1980", es: "1980", de: "1980", nl: "1980" },
          { en: "1990", es: "1990", de: "1990", nl: "1990" },
          { en: "1995", es: "1995", de: "1995", nl: "1995" }
        ],
        correct: 0,
        explanation: {
          en: "Kasparov became World Champion in 1985 after defeating Karpov in one of the most famous championship matches in chess history.",
          es: "Kasparov se convirtió en Campeón Mundial en 1985 después de derrotar a Karpov en uno de los partidos de campeonato más famosos de la historia del ajedrez.",
          de: "Kasparow wurde 1985 Weltmeister, nachdem er Karpow in einem der berühmtesten Weltmeisterschaftskämpfe der Schachgeschichte besiegte.",
          nl: "Kasparov werd in 1985 wereldkampioen na het verslaan van Karpov in een van de beroemdste kampioenschapswedstrijden in de schaakgeschiedenis."
        }
      },
      {
        question: {
          en: "What is the 'Queen's Gambit'?",
          es: "¿Qué es el 'Gambito de Dama'?",
          de: "Was ist das 'Damengambit'?",
          nl: "Wat is het 'Damegambiet'?"
        },
        options: [
          { en: "1.d4 d5 2.c4", es: "1.d4 d5 2.c4", de: "1.d4 d5 2.c4", nl: "1.d4 d5 2.c4" },
          { en: "1.e4 e5 2.Qh5", es: "1.e4 e5 2.Dh5", de: "1.e4 e5 2.Dh5", nl: "1.e4 e5 2.Dh5" },
          { en: "1.d4 Nf6 2.c4", es: "1.d4 Cf6 2.c4", de: "1.d4 Sf6 2.c4", nl: "1.d4 Pf6 2.c4" },
          { en: "1.e4 d5", es: "1.e4 d5", de: "1.e4 d5", nl: "1.e4 d5" }
        ],
        correct: 0,
        explanation: {
          en: "The Queen's Gambit (1.d4 d5 2.c4) is one of the oldest and most popular openings, offering White control of the center.",
          es: "El Gambito de Dama (1.d4 d5 2.c4) es una de las aperturas más antiguas y populares, ofreciendo a las blancas control del centro.",
          de: "Das Damengambit (1.d4 d5 2.c4) ist eine der ältesten und beliebtesten Eröffnungen und bietet Weiß die Kontrolle über das Zentrum.",
          nl: "Het Damegambiet (1.d4 d5 2.c4) is een van de oudste en populairste openingen, die wit controle over het centrum biedt."
        }
      },
      {
        question: {
          en: "What is 'opposition' in chess endgames?",
          es: "¿Qué es la 'oposición' en finales de ajedrez?",
          de: "Was ist 'Opposition' in Schachendspielen?",
          nl: "Wat is 'oppositie' in schaakeindspelen?"
        },
        options: [
          { en: "Kings facing with one square between", es: "Cuando los reyes se enfrentan con una casilla entre ellos", de: "Wenn Könige sich mit einem Feld dazwischen gegenüberstehen", nl: "Wanneer koningen elkaar met één vakje ertussen onder ogen zien" },
          { en: "When pieces oppose each other", es: "Cuando las piezas se oponen entre sí", de: "Wenn Figuren sich gegenüberstehen", nl: "Wanneer stukken elkaar tegenover staan" },
          { en: "A disagreement between players", es: "Un desacuerdo entre jugadores", de: "Eine Meinungsverschiedenheit zwischen Spielern", nl: "Een meningsverschil tussen spelers" },
          { en: "Fighting for the center", es: "Luchando por el centro", de: "Kampf um das Zentrum", nl: "Vechten om het centrum" }
        ],
        correct: 0,
        explanation: {
          en: "Opposition occurs when kings face each other with an odd number of squares between them, typically one. It's crucial in king and pawn endgames.",
          es: "La oposición ocurre cuando los reyes se enfrentan con un número impar de casillas entre ellos, típicamente una. Es crucial en finales de rey y peón.",
          de: "Opposition tritt auf, wenn Könige sich mit einer ungeraden Anzahl von Feldern zwischen ihnen gegenüberstehen, typischerweise einem. Es ist entscheidend in König-Bauern-Endspielen.",
          nl: "Oppositie treedt op wanneer koningen elkaar met een oneven aantal vakjes ertussen onder ogen zien, meestal één. Het is cruciaal in koning- en pionneindspelen."
        }
      },
      {
        question: {
          en: "What is a 'smothered mate'?",
          es: "¿Qué es un 'mate ahogado'?",
          de: "Was ist ein 'ersticktes Matt'?",
          nl: "Wat is een 'verstikkingsmat'?"
        },
        options: [
          { en: "Knight mate with trapped king", es: "Jaque mate por un caballo cuando el rey está atrapado por sus propias piezas", de: "Schachmatt durch einen Springer, wenn der König von seinen eigenen Figuren eingeschlossen ist", nl: "Schaakmat door een paard wanneer de koning gevangen zit door zijn eigen stukken" },
          { en: "Checkmate with queen and rook", es: "Jaque mate con reina y torre", de: "Schachmatt mit Dame und Turm", nl: "Schaakmat met koningin en toren" },
          { en: "Suffocating the opponent's position", es: "Sofocando la posición del oponente", de: "Die Position des Gegners ersticken", nl: "De positie van de tegenstander verstikken" },
          { en: "A slow positional squeeze", es: "Un apretón posicional lento", de: "Eine langsame Positionspressung", nl: "Een langzame positionele druk" }
        ],
        correct: 0,
        explanation: {
          en: "A smothered mate is a checkmate delivered by a knight where the mated king is unable to move because it is surrounded by its own pieces.",
          es: "Un mate ahogado es un jaque mate dado por un caballo donde el rey no puede moverse porque está rodeado por sus propias piezas.",
          de: "Ein ersticktes Matt ist ein Schachmatt durch einen Springer, bei dem der mattgesetzte König sich nicht bewegen kann, weil er von seinen eigenen Figuren umgeben ist.",
          nl: "Een verstikkingsmat is een schaakmat gegeven door een paard waarbij de schaakmat gezette koning niet kan bewegen omdat hij omringd is door zijn eigen stukken."
        }
      },
      {
        question: {
          en: "Who was the first official World Chess Champion?",
          es: "¿Quién fue el primer Campeón Mundial de Ajedrez oficial?",
          de: "Wer war der erste offizielle Schachweltmeister?",
          nl: "Wie was de eerste officiële schaakwereldkampioen?"
        },
        options: [
          { en: "Wilhelm Steinitz", es: "Wilhelm Steinitz", de: "Wilhelm Steinitz", nl: "Wilhelm Steinitz" },
          { en: "Paul Morphy", es: "Paul Morphy", de: "Paul Morphy", nl: "Paul Morphy" },
          { en: "Emanuel Lasker", es: "Emanuel Lasker", de: "Emanuel Lasker", nl: "Emanuel Lasker" },
          { en: "José Raúl Capablanca", es: "José Raúl Capablanca", de: "José Raúl Capablanca", nl: "José Raúl Capablanca" }
        ],
        correct: 0,
        explanation: {
          en: "Wilhelm Steinitz became the first official World Chess Champion in 1886 after defeating Johannes Zukertort.",
          es: "Wilhelm Steinitz se convirtió en el primer Campeón Mundial de Ajedrez oficial en 1886 después de derrotar a Johannes Zukertort.",
          de: "Wilhelm Steinitz wurde 1886 der erste offizielle Schachweltmeister, nachdem er Johannes Zukertort besiegte.",
          nl: "Wilhelm Steinitz werd in 1886 de eerste officiële schaakwereldkampioen na het verslaan van Johannes Zukertort."
        }
      },
      {
        question: {
          en: "What is the 'Ruy Lopez' opening also known as?",
          es: "¿Cómo se conoce también la apertura 'Ruy López'?",
          de: "Wie wird die 'Ruy-Lopez'-Eröffnung auch genannt?",
          nl: "Hoe wordt de 'Ruy Lopez' opening ook wel genoemd?"
        },
        options: [
          { en: "Spanish Opening", es: "Apertura Española", de: "Spanische Eröffnung", nl: "Spaanse Opening" },
          { en: "Italian Opening", es: "Apertura Italiana", de: "Italienische Eröffnung", nl: "Italiaanse Opening" },
          { en: "French Opening", es: "Apertura Francesa", de: "Französische Eröffnung", nl: "Franse Opening" },
          { en: "English Opening", es: "Apertura Inglesa", de: "Englische Eröffnung", nl: "Engelse Opening" }
        ],
        correct: 0,
        explanation: {
          en: "The Ruy Lopez is also known as the Spanish Opening, named after Spanish priest Ruy López de Segura who analyzed it in the 16th century.",
          es: "La Ruy López también se conoce como Apertura Española, nombrada en honor al sacerdote español Ruy López de Segura quien la analizó en el siglo XVI.",
          de: "Die Ruy Lopez ist auch als Spanische Eröffnung bekannt, benannt nach dem spanischen Priester Ruy López de Segura, der sie im 16. Jahrhundert analysierte.",
          nl: "De Ruy Lopez wordt ook wel de Spaanse Opening genoemd, genoemd naar de Spaanse priester Ruy López de Segura die het in de 16e eeuw analyseerde."
        }
      },
      {
        question: {
          en: "What is a 'Greek gift sacrifice'?",
          es: "¿Qué es un 'sacrificio del regalo griego'?",
          de: "Was ist ein 'Griechisches Geschenkopfer'?",
          nl: "Wat is een 'Grieks geschenkoffer'?"
        },
        options: [
          { en: "Bishop sacrifice on h7/h2", es: "Sacrificar un alfil en h7 o h2", de: "Einen Läufer auf h7 oder h2 opfern", nl: "Een loper offeren op h7 of h2" },
          { en: "Giving away the queen", es: "Regalar la reina", de: "Die Dame weggeben", nl: "De koningin weggeven" },
          { en: "Trading pieces equally", es: "Intercambiar piezas por igual", de: "Figuren gleichwertig tauschen", nl: "Stukken gelijk ruilen" },
          { en: "Offering a draw", es: "Ofrecer tablas", de: "Ein Remis anbieten", nl: "Remise aanbieden" }
        ],
        correct: 0,
        explanation: {
          en: "The Greek gift sacrifice involves sacrificing a bishop on h7 (or h2) to expose the enemy king, often followed by a devastating attack.",
          es: "El sacrificio del regalo griego implica sacrificar un alfil en h7 (o h2) para exponer al rey enemigo, a menudo seguido de un ataque devastador.",
          de: "Das Griechische Geschenkopfer beinhaltet das Opfern eines Läufers auf h7 (oder h2), um den gegnerischen König freizulegen, oft gefolgt von einem verheerenden Angriff.",
          nl: "Het Grieks geschenkoffer houdt in dat een loper wordt geofferd op h7 (of h2) om de vijandelijke koning bloot te leggen, vaak gevolgd door een verwoestende aanval."
        }
      },
      {
        question: {
          en: "What is 'blindfold chess'?",
          es: "¿Qué es el 'ajedrez a ciegas'?",
          de: "Was ist 'Blindschach'?",
          nl: "Wat is 'blindschaak'?"
        },
        options: [
          { en: "Playing without seeing the board", es: "Jugar sin ver el tablero", de: "Spielen ohne das Brett zu sehen", nl: "Spelen zonder het bord te zien" },
          { en: "Playing in the dark", es: "Jugar en la oscuridad", de: "Im Dunkeln spielen", nl: "Spelen in het donker" },
          { en: "Playing with covered pieces", es: "Jugar con piezas cubiertas", de: "Spielen mit verdeckten Figuren", nl: "Spelen met bedekte stukken" },
          { en: "Random piece placement", es: "Colocación aleatoria de piezas", de: "Zufällige Figurenplatzierung", nl: "Willekeurige stukplaatsing" }
        ],
        correct: 0,
        explanation: {
          en: "Blindfold chess is played without sight of the board, relying entirely on memory and visualization. Many strong players can play multiple simultaneous blindfold games.",
          es: "El ajedrez a ciegas se juega sin ver el tablero, confiando completamente en la memoria y la visualización. Muchos jugadores fuertes pueden jugar múltiples partidas simultáneas a ciegas.",
          de: "Blindschach wird ohne Sicht auf das Brett gespielt und verlässt sich völlig auf Gedächtnis und Visualisierung. Viele starke Spieler können mehrere simultane Blindpartien spielen.",
          nl: "Blindschaak wordt gespeeld zonder zicht op het bord, volledig vertrouwend op geheugen en visualisatie. Veel sterke spelers kunnen meerdere simultane blindpartijen spelen."
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
          { en: "Rook and pawn endgame technique", es: "Una técnica ganadora de final con torre y peón", de: "Eine gewinnende Endspiel-Technik mit Turm und Bauer", nl: "Een winnende eindspeltechniek met toren en pion" },
          { en: "A famous opening trap", es: "Una trampa de apertura famosa", de: "Eine berühmte Eröffnungsfalle", nl: "Een beroemde openingsval" },
          { en: "A middlegame strategy", es: "Una estrategia de medio juego", de: "Eine Mittelspielstrategie", nl: "Een middenspelstrategie" },
          { en: "A checkmate pattern", es: "Un patrón de jaque mate", de: "Ein Schachmattmuster", nl: "Een schaakmatpatroon" }
        ],
        correct: 0,
        explanation: {
          en: "The Lucena position is a fundamental winning position in rook and pawn endgames, teaching how to promote a pawn despite the opponent's rook.",
          es: "La posición de Lucena es una posición ganadora fundamental en finales de torre y peón, enseñando cómo promover un peón a pesar de la torre del oponente.",
          de: "Die Lucena-Stellung ist eine grundlegende Gewinnstellung in Turm-Bauern-Endspielen und lehrt, wie man einen Bauern trotz des gegnerischen Turms umwandelt.",
          nl: "De Lucena-positie is een fundamentele winnende positie in toren- en pionneindspelen, die leert hoe een pion te promoveren ondanks de toren van de tegenstander."
        }
      },
      {
        question: {
          en: "What is 'correspondence chess'?",
          es: "¿Qué es el 'ajedrez por correspondencia'?",
          de: "Was ist 'Fernschach'?",
          nl: "Wat is 'correspondentieschaak'?"
        },
        options: [
          { en: "Chess by mail or online", es: "Ajedrez jugado por correo o en línea con días por movimiento", de: "Schach gespielt per Post oder online mit Tagen pro Zug", nl: "Schaak gespeeld per post of online met dagen per zet" },
          { en: "Writing chess notation", es: "Escribir notación de ajedrez", de: "Schachnotation schreiben", nl: "Schaaknotatie schrijven" },
          { en: "Analyzing with chess friends", es: "Analizar con amigos del ajedrez", de: "Mit Schachfreunden analysieren", nl: "Analyseren met schaakv rienden" },
          { en: "Teaching chess by letter", es: "Enseñar ajedrez por carta", de: "Schach per Brief lehren", nl: "Schaak lesgeven per brief" }
        ],
        correct: 0,
        explanation: {
          en: "Correspondence chess is a form of long-distance chess where players have days or weeks to make each move, traditionally played by mail but now mostly online.",
          es: "El ajedrez por correspondencia es una forma de ajedrez a distancia donde los jugadores tienen días o semanas para hacer cada movimiento, tradicionalmente jugado por correo pero ahora principalmente en línea.",
          de: "Fernschach ist eine Form des Fernschachs, bei der Spieler Tage oder Wochen für jeden Zug haben, traditionell per Post gespielt, aber jetzt hauptsächlich online.",
          nl: "Correspondentieschaak is een vorm van schaak op afstand waarbij spelers dagen of weken hebben om elke zet te doen, traditioneel per post gespeeld maar nu voornamelijk online."
        }
      },
      {
        question: {
          en: "What does 'IQP' stand for in chess?",
          es: "¿Qué significa 'IQP' en ajedrez?",
          de: "Was bedeutet 'IQP' im Schach?",
          nl: "Wat betekent 'IQP' in schaken?"
        },
        options: [
          { en: "Isolated Queen's Pawn", es: "Peón de Dama Aislado", de: "Isolierter Damenbauer", nl: "Geïsoleerde Damepion" },
          { en: "International Queen Position", es: "Posición Internacional de Dama", de: "Internationale Damenposition", nl: "Internationale Koninginnepositie" },
          { en: "Immediate Queen Play", es: "Juego Inmediato de Dama", de: "Sofortiges Damenspiel", nl: "Onmiddellijk Koninginnenspel" },
          { en: "Initial Queen Protection", es: "Protección Inicial de Dama", de: "Anfänglicher Damenschutz", nl: "Initiële Koninginnenbescherming" }
        ],
        correct: 0,
        explanation: {
          en: "IQP stands for Isolated Queen's Pawn, a pawn on the d-file with no pawns on adjacent files. It offers dynamic play but can be a long-term weakness.",
          es: "IQP significa Peón de Dama Aislado, un peón en la columna d sin peones en columnas adyacentes. Ofrece juego dinámico pero puede ser una debilidad a largo plazo.",
          de: "IQP steht für Isolierter Damenbauer, ein Bauer auf der d-Linie ohne Bauern auf benachbarten Linien. Es bietet dynamisches Spiel, kann aber eine langfristige Schwäche sein.",
          nl: "IQP staat voor Geïsoleerde Damepion, een pion op de d-lijn zonder pionnen op aangrenzende lijnen. Het biedt dynamisch spel maar kan een langetermijnzwakte zijn."
        }
      },
      {
        question: {
          en: "What is a 'desperado' move in chess?",
          es: "¿Qué es un movimiento 'desesperado' en ajedrez?",
          de: "Was ist ein 'Verzweiflungszug' im Schach?",
          nl: "Wat is een 'desperado' zet in schaken?"
        },
        options: [
          { en: "Piece does max damage before capture", es: "Una pieza a punto de ser capturada hace el máximo daño primero", de: "Eine Figur, die geschlagen werden wird, richtet zuerst maximalen Schaden an", nl: "Een stuk dat geslagen zal worden, richt eerst maximale schade aan" },
          { en: "A risky sacrifice", es: "Un sacrificio arriesgado", de: "Ein riskantes Opfer", nl: "Een riskant offer" },
          { en: "An aggressive attack", es: "Un ataque agresivo", de: "Ein aggressiver Angriff", nl: "Een agressieve aanval" },
          { en: "A last-ditch defense", es: "Una defensa de última hora", de: "Eine letzte Verteidigung", nl: "Een laatste verdediging" }
        ],
        correct: 0,
        explanation: {
          en: "A desperado is a piece that is about to be captured and uses its last move to inflict maximum damage, often by capturing an opponent's piece or giving check.",
          es: "Un desesperado es una pieza que está a punto de ser capturada y usa su último movimiento para infligir el máximo daño, a menudo capturando una pieza del oponente o dando jaque.",
          de: "Ein Verzweiflungszug ist eine Figur, die geschlagen werden wird und ihren letzten Zug nutzt, um maximalen Schaden anzurichten, oft durch Schlagen einer gegnerischen Figur oder Schachbieten.",
          nl: "Een desperado is een stuk dat geslagen zal worden en zijn laatste zet gebruikt om maximale schade aan te richten, vaak door een stuk van de tegenstander te slaan of schaak te geven."
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
          { en: "Prevent opponent plans first", es: "Prevenir los planes del oponente antes de ejecutar los propios", de: "Die Pläne des Gegners verhindern, bevor man eigene ausführt", nl: "De plannen van de tegenstander voorkomen voordat je je eigen uitvoert" },
          { en: "Protecting pieces", es: "Proteger piezas", de: "Figuren schützen", nl: "Stukken beschermen" },
          { en: "Moving prophetic pieces", es: "Mover piezas proféticas", de: "Prophetische Figuren bewegen", nl: "Profetische stukken bewegen" },
          { en: "Planning ahead", es: "Planificar con anticipación", de: "Vorausplanen", nl: "Vooruit plannen" }
        ],
        correct: 0,
        explanation: {
          en: "Prophylaxis means preventing or hindering the opponent's plans. Developed by Aron Nimzowitsch, it's about controlling what your opponent wants to do.",
          es: "Profilaxis significa prevenir o obstaculizar los planes del oponente. Desarrollado por Aron Nimzowitsch, se trata de controlar lo que tu oponente quiere hacer.",
          de: "Prophylaxe bedeutet, die Pläne des Gegners zu verhindern oder zu behindern. Von Aron Nimzowitsch entwickelt, geht es darum zu kontrollieren, was der Gegner tun möchte.",
          nl: "Profylaxe betekent het voorkomen of belemmeren van de plannen van de tegenstander. Ontwikkeld door Aron Nimzowitsch, gaat het om controle over wat je tegenstander wil doen."
        }
      },
      {
        question: {
          en: "What is the 'Marshall Attack' in the Ruy Lopez?",
          es: "¿Qué es el 'Ataque Marshall' en la Ruy López?",
          de: "Was ist der 'Marshall-Angriff' in der Ruy Lopez?",
          nl: "Wat is de 'Marshall Aanval' in de Ruy Lopez?"
        },
        options: [
          { en: "Black pawn sacrifice for attack", es: "Un sacrificio agudo de peón por las negras para atacar", de: "Ein scharfes Bauernopfer von Schwarz für Angriff", nl: "Een scherp pionoffer door zwart voor aanval" },
          { en: "A defensive formation", es: "Una formación defensiva", de: "Eine Verteidigungsformation", nl: "Een defensieve formatie" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" },
          { en: "A queen sacrifice", es: "Un sacrificio de reina", de: "Ein Damenopfer", nl: "Een koninginnenoffer" }
        ],
        correct: 0,
        explanation: {
          en: "The Marshall Attack is a sharp gambit in the Ruy Lopez where Black sacrifices a pawn with 8...d5 to obtain a strong attacking position.",
          es: "El Ataque Marshall es un gambito agudo en la Ruy López donde las negras sacrifican un peón con 8...d5 para obtener una posición de ataque fuerte.",
          de: "Der Marshall-Angriff ist ein scharfes Gambit in der Ruy Lopez, bei dem Schwarz mit 8...d5 einen Bauern opfert, um eine starke Angriffsposition zu erhalten.",
          nl: "De Marshall Aanval is een scherp gambiet in de Ruy Lopez waarbij zwart een pion offert met 8...d5 om een sterke aanvalspositie te krijgen."
        }
      },
      {
        question: {
          en: "What does 'tabiya' mean in chess?",
          es: "¿Qué significa 'tabiya' en ajedrez?",
          de: "Was bedeutet 'Tabiya' im Schach?",
          nl: "Wat betekent 'tabiya' in schaken?"
        },
        options: [
          { en: "Well-known opening position", es: "Una posición bien conocida en una apertura", de: "Eine bekannte Stellung in einer Eröffnung", nl: "Een bekende positie in een opening" },
          { en: "An endgame tablebase", es: "Una base de datos de finales", de: "Eine Endspiel-Datenbank", nl: "Een eindspeldatabase" },
          { en: "A chess variant", es: "Una variante de ajedrez", de: "Eine Schachvariante", nl: "Een schaakvariant" },
          { en: "A tournament format", es: "Un formato de torneo", de: "Ein Turnierformat", nl: "Een toernooiformaat" }
        ],
        correct: 0,
        explanation: {
          en: "Tabiya is an Arabic term meaning a well-known position in a chess opening where theory diverges into multiple variations.",
          es: "Tabiya es un término árabe que significa una posición bien conocida en una apertura de ajedrez donde la teoría se divide en múltiples variaciones.",
          de: "Tabiya ist ein arabischer Begriff für eine bekannte Stellung in einer Schacheröffnung, wo sich die Theorie in mehrere Varianten verzweigt.",
          nl: "Tabiya is een Arabische term die een bekende positie in een schaakopening betekent waar de theorie uiteen loopt in meerdere variaties."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
