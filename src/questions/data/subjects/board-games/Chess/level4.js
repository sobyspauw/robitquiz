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
      },
      {
        question: {
          en: "What is the 'minority attack'?",
          es: "¿Qué es el 'ataque minoritario'?",
          de: "Was ist der 'Minderheitsangriff'?",
          nl: "Wat is de 'minderheidsaanval'?"
        },
        options: [
          { en: "Advancing fewer pawns against more enemy pawns", es: "Avanzar menos peones contra más peones enemigos", de: "Weniger Bauern gegen mehr gegnerische Bauern vorstoßen", nl: "Minder pionnen vooruit tegen meer vijandelijke pionnen" },
          { en: "Attack with fewer pieces", es: "Atacar con menos piezas", de: "Mit weniger Figuren angreifen", nl: "Aanvallen met minder stukken" },
          { en: "Undermining pawn chain", es: "Socavar cadena de peones", de: "Bauernkette unterminieren", nl: "Pionketen ondermijnen" },
          { en: "Strategy for losing positions", es: "Estrategia para posiciones perdidas", de: "Strategie für verlorene Stellungen", nl: "Strategie voor verloren posities" }
        ],
        correct: 0,
        explanation: {
          en: "A minority attack involves advancing a smaller group of pawns (usually 2) against a larger group (usually 3) to create weaknesses in the opponent's pawn structure.",
          es: "Un ataque minoritario implica avanzar un grupo más pequeño de peones (usualmente 2) contra un grupo más grande (usualmente 3) para crear debilidades en la estructura de peones del oponente.",
          de: "Ein Minderheitsangriff beinhaltet das Vorstoßen einer kleineren Gruppe von Bauern (meist 2) gegen eine größere Gruppe (meist 3), um Schwächen in der gegnerischen Bauernstruktur zu schaffen.",
          nl: "Een minderheidsaanval houdt in dat een kleinere groep pionnen (meestal 2) wordt vooruitgeschoven tegen een grotere groep (meestal 3) om zwaktes in de pionstructuur van de tegenstander te creëren."
        }
      },
      {
        question: {
          en: "What is 'positional compensation'?",
          es: "¿Qué es 'compensación posicional'?",
          de: "Was ist 'positionelle Kompensation'?",
          nl: "Wat is 'positionele compensatie'?"
        },
        options: [
          { en: "Non-material advantages offsetting material loss", es: "Ventajas no materiales que compensan pérdida material", de: "Nicht-materielle Vorteile, die Materialverlust ausgleichen", nl: "Niet-materiële voordelen die materiaalverlies compenseren" },
          { en: "Trading pieces equally", es: "Intercambiar piezas equitativamente", de: "Figuren gleichwertig tauschen", nl: "Stukken gelijkwaardig ruilen" },
          { en: "Adjusting piece positions", es: "Ajustar posiciones de piezas", de: "Figurenpositionen anpassen", nl: "Stukposities aanpassen" },
          { en: "Getting material back", es: "Recuperar material", de: "Material zurückgewinnen", nl: "Materiaal terugwinnen" }
        ],
        correct: 0,
        explanation: {
          en: "Positional compensation refers to advantages like piece activity, king safety, pawn structure, or control of key squares that make up for being down in material.",
          es: "La compensación posicional se refiere a ventajas como actividad de piezas, seguridad del rey, estructura de peones o control de casillas clave que compensan estar abajo en material.",
          de: "Positionelle Kompensation bezieht sich auf Vorteile wie Figurenaktivität, Königssicherheit, Bauernstruktur oder Kontrolle wichtiger Felder, die einen Materialrückstand ausgleichen.",
          nl: "Positionele compensatie verwijst naar voordelen zoals stukactiviteit, koningsveiligheid, pionstructuur of controle van sleutelvakjes die materiaalachtterstand compenseren."
        }
      },
      {
        question: {
          en: "What is the 'isolated queen's pawn' (IQP)?",
          es: "¿Qué es el 'peón de dama aislado' (IQP)?",
          de: "Was ist der 'isolierte Damenbauer' (IQP)?",
          nl: "Wat is de 'geïsoleerde koninginpion' (IQP)?"
        },
        options: [
          { en: "Isolated d-pawn, dynamic but weak", es: "Peón d aislado, dinámico pero débil", de: "Isolierter d-Bauer, dynamisch aber schwach", nl: "Geïsoleerde d-pion, dynamisch maar zwak" },
          { en: "Queen-side isolated pawn", es: "Peón aislado del lado de la reina", de: "Bauerseitig isolierter Bauer", nl: "Koninginzijde geïsoleerde pion" },
          { en: "Any isolated pawn", es: "Cualquier peón aislado", de: "Jeder isolierte Bauer", nl: "Elke geïsoleerde pion" },
          { en: "Pawn protecting queen", es: "Peón protegiendo la reina", de: "Bauer, der die Dame schützt", nl: "Pion die koningin beschermt" }
        ],
        correct: 0,
        explanation: {
          en: "The IQP is an isolated pawn on the d-file. It provides space and piece activity but becomes a target in the endgame. It's a classic positional imbalance.",
          es: "El IQP es un peón aislado en la columna d. Proporciona espacio y actividad de piezas pero se convierte en objetivo en el final. Es un desequilibrio posicional clásico.",
          de: "Der IQP ist ein isolierter Bauer auf der d-Linie. Er bietet Raum und Figurenaktivität, wird aber im Endspiel zum Ziel. Es ist ein klassisches positionelles Ungleichgewicht.",
          nl: "De IQP is een geïsoleerde pion op de d-lijn. Het biedt ruimte en stukactiviteit maar wordt een doelwit in het eindspel. Het is een klassiek positioneel onevenwicht."
        }
      },
      {
        question: {
          en: "What is a 'Greek gift sacrifice'?",
          es: "¿Qué es el 'sacrificio del regalo griego'?",
          de: "Was ist das 'Griechisches Geschenk'-Opfer?",
          nl: "Wat is het 'Griekse geschenk'-offer?"
        },
        options: [
          { en: "Bishop sacrifice on h7/h2 for king attack", es: "Sacrificio de alfil en h7/h2 para atacar al rey", de: "Läuferopfer auf h7/h2 für Königsangriff", nl: "Lopersoffer op h7/h2 voor koningsaanval" },
          { en: "Gift of a piece", es: "Regalo de una pieza", de: "Geschenk einer Figur", nl: "Geschenk van een stuk" },
          { en: "Pawn sacrifice in opening", es: "Sacrificio de peón en apertura", de: "Bauernopfer in Eröffnung", nl: "Pionoffer in opening" },
          { en: "Queen sacrifice", es: "Sacrificio de reina", de: "Damenopfer", nl: "Koninginnenoffer" }
        ],
        correct: 0,
        explanation: {
          en: "The Greek gift is a classic tactical pattern involving Bxh7+ (or Bxh2+), forcing the king out and launching a devastating attack with the queen and knight.",
          es: "El regalo griego es un patrón táctico clásico que involucra Axh7+ (o Axh2+), forzando al rey a salir y lanzando un ataque devastador con la reina y el caballo.",
          de: "Das Griechische Geschenk ist ein klassisches taktisches Muster mit Lxh7+ (oder Lxh2+), das den König zum Heraustreten zwingt und einen vernichtenden Angriff mit Dame und Springer startet.",
          nl: "Het Griekse geschenk is een klassiek tactisch patroon met Lxh7+ (of Lxh2+), die de koning dwingt uit te komen en een verwoestende aanval start met koningin en paard."
        }
      },
      {
        question: {
          en: "What is 'overloading' in chess tactics?",
          es: "¿Qué es 'sobrecarga' en tácticas de ajedrez?",
          de: "Was ist 'Überlastung' in Schachtaktiken?",
          nl: "Wat is 'overbelasting' in schaaktactieken?"
        },
        options: [
          { en: "Piece defending too many things at once", es: "Pieza defendiendo demasiadas cosas a la vez", de: "Figur verteidigt zu viele Dinge gleichzeitig", nl: "Stuk verdedigt te veel dingen tegelijk" },
          { en: "Having too many pieces", es: "Tener demasiadas piezas", de: "Zu viele Figuren haben", nl: "Te veel stukken hebben" },
          { en: "Moving pieces too much", es: "Mover piezas demasiado", de: "Figuren zu viel bewegen", nl: "Stukken te veel bewegen" },
          { en: "Attacking with all pieces", es: "Atacar con todas las piezas", de: "Mit allen Figuren angreifen", nl: "Aanvallen met alle stukken" }
        ],
        correct: 0,
        explanation: {
          en: "Overloading occurs when a piece has multiple defensive duties and cannot fulfill them all. You can exploit this by attacking one target, forcing the defender to abandon another.",
          es: "La sobrecarga ocurre cuando una pieza tiene múltiples deberes defensivos y no puede cumplirlos todos. Puedes explotar esto atacando un objetivo, forzando al defensor a abandonar otro.",
          de: "Überlastung tritt auf, wenn eine Figur mehrere Verteidigungsaufgaben hat und nicht alle erfüllen kann. Man kann dies ausnutzen, indem man ein Ziel angreift und den Verteidiger zwingt, ein anderes aufzugeben.",
          nl: "Overbelasting treedt op wanneer een stuk meerdere verdedigingstaken heeft en niet alle kan vervullen. Je kunt dit uitbuiten door één doel aan te vallen, waardoor de verdediger een ander moet opgeven."
        }
      },
      {
        question: {
          en: "What is the 'Maroczy Bind'?",
          es: "¿Qué es la 'Atadura Maroczy'?",
          de: "Was ist die 'Maroczy-Bindung'?",
          nl: "Wat is de 'Maroczy Bind'?"
        },
        options: [
          { en: "Pawn structure on c4 and e4 restricting Black", es: "Estructura de peones en c4 y e4 restringiendo a negras", de: "Bauernstruktur auf c4 und e4, die Schwarz einschränkt", nl: "Pionstructuur op c4 en e4 die zwart beperkt" },
          { en: "A tactical combination", es: "Una combinación táctica", de: "Eine taktische Kombination", nl: "Een tactische combinatie" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" },
          { en: "A checkmate pattern", es: "Un patrón de jaque mate", de: "Ein Schachmattmuster", nl: "Een schaakmatpatroon" }
        ],
        correct: 0,
        explanation: {
          en: "The Maroczy Bind is a pawn formation with pawns on c4 and e4 that restricts Black's central counterplay, especially in Sicilian structures. It gives White space advantage.",
          es: "La Atadura Maroczy es una formación de peones con peones en c4 y e4 que restringe el contrajuego central de negras, especialmente en estructuras sicilianas. Da ventaja de espacio a blancas.",
          de: "Die Maroczy-Bindung ist eine Bauernformation mit Bauern auf c4 und e4, die Schwarzs zentrales Gegenspiel einschränkt, besonders in sizilianischen Strukturen. Sie gibt Weiß Raumvorteil.",
          nl: "De Maroczy Bind is een pionformatie met pionnen op c4 en e4 die zwarts centrale tegenaanval beperkt, vooral in Siciliaanse structuren. Het geeft wit ruimtevoordeel."
        }
      },
      {
        question: {
          en: "What is 'piece activity' in positional chess?",
          es: "¿Qué es 'actividad de piezas' en ajedrez posicional?",
          de: "Was ist 'Figurenaktivität' im Positionsspiel?",
          nl: "Wat is 'stukactiviteit' in positioneel schaken?"
        },
        options: [
          { en: "How well pieces control squares and create threats", es: "Qué tan bien las piezas controlan casillas y crean amenazas", de: "Wie gut Figuren Felder kontrollieren und Drohungen schaffen", nl: "Hoe goed stukken vakjes controleren en dreigingen creëren" },
          { en: "Number of pieces moved", es: "Número de piezas movidas", de: "Anzahl bewegter Figuren", nl: "Aantal bewogen stukken" },
          { en: "Speed of development", es: "Velocidad de desarrollo", de: "Entwicklungsgeschwindigkeit", nl: "Ontwikkelingssnelheid" },
          { en: "Pieces attacking king", es: "Piezas atacando al rey", de: "Figuren, die den König angreifen", nl: "Stukken die koning aanvallen" }
        ],
        correct: 0,
        explanation: {
          en: "Piece activity measures how effectively your pieces are placed - controlling important squares, coordinating with each other, and creating threats. Active pieces are worth more than passive ones.",
          es: "La actividad de piezas mide qué tan efectivamente están colocadas tus piezas - controlando casillas importantes, coordinándose entre sí y creando amenazas. Las piezas activas valen más que las pasivas.",
          de: "Figurenaktivität misst, wie effektiv Ihre Figuren platziert sind - wichtige Felder kontrollieren, miteinander koordinieren und Drohungen schaffen. Aktive Figuren sind mehr wert als passive.",
          nl: "Stukactiviteit meet hoe effectief je stukken zijn geplaatst - belangrijke vakjes controleren, met elkaar coördineren en dreigingen creëren. Actieve stukken zijn meer waard dan passieve."
        }
      },
      {
        question: {
          en: "What is the 'Nimzo-Indian Defense'?",
          es: "¿Qué es la 'Defensa Nimzo-India'?",
          de: "Was ist die 'Nimzo-Indische Verteidigung'?",
          nl: "Wat is de 'Nimzo-Indiase Verdediging'?"
        },
        options: [
          { en: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4", es: "1.d4 Cf6 2.c4 e6 3.Cc3 Ab4", de: "1.d4 Sf6 2.c4 e6 3.Sc3 Lb4", nl: "1.d4 Pf6 2.c4 e6 3.Pc3 Lb4" },
          { en: "King's Indian setup", es: "Configuración India de Rey", de: "Königsindisches Aufbau", nl: "Koningsindische opstelling" },
          { en: "Sicilian variation", es: "Variación siciliana", de: "Sizilianische Variante", nl: "Siciliaanse variatie" },
          { en: "French Defense line", es: "Línea de Defensa Francesa", de: "Französische Verteidigungslinie", nl: "Franse Verdedigingslijn" }
        ],
        correct: 0,
        explanation: {
          en: "The Nimzo-Indian is a hypermodern opening where Black pins White's knight with Bb4, fighting for central control with pieces rather than pawns. It's named after Aron Nimzowitsch.",
          es: "La Nimzo-India es una apertura hipermoderna donde negras clava el caballo blanco con Ab4, luchando por el control central con piezas en lugar de peones. Lleva el nombre de Aron Nimzowitsch.",
          de: "Die Nimzo-Indische ist eine hypermoderne Eröffnung, bei der Schwarz den weißen Springer mit Lb4 fesselt und um zentrale Kontrolle mit Figuren statt Bauern kämpft. Sie ist nach Aron Nimzowitsch benannt.",
          nl: "De Nimzo-Indiase is een hypermoderne opening waarbij zwart het witte paard pent met Lb4, vechtend voor centrale controle met stukken in plaats van pionnen. Het is genoemd naar Aron Nimzowitsch."
        }
      },
      {
        question: {
          en: "What is 'zugzwang' and when is it most common?",
          es: "¿Qué es 'zugzwang' y cuándo es más común?",
          de: "Was ist 'Zugzwang' und wann tritt er am häufigsten auf?",
          nl: "Wat is 'zugzwang' en wanneer komt het het meest voor?"
        },
        options: [
          { en: "Having to move worsens position; common in endgames", es: "Tener que mover empeora la posición; común en finales", de: "Ziehen müssen verschlechtert Stellung; häufig in Endspielen", nl: "Moeten bewegen verslechtert positie; gebruikelijk in eindspelen" },
          { en: "Forced to capture", es: "Obligado a capturar", de: "Gezwungen zu schlagen", nl: "Gedwongen te slaan" },
          { en: "Out of legal moves", es: "Sin movimientos legales", de: "Ohne legale Züge", nl: "Zonder legale zetten" },
          { en: "Time pressure situation", es: "Situación de presión de tiempo", de: "Zeitdrucksituation", nl: "Tijddruksituatie" }
        ],
        correct: 0,
        explanation: {
          en: "Zugzwang occurs when any legal move worsens your position. It's most common in endgames, especially king and pawn endings, where every move matters critically.",
          es: "Zugzwang ocurre cuando cualquier movimiento legal empeora tu posición. Es más común en finales, especialmente finales de rey y peón, donde cada movimiento importa críticamente.",
          de: "Zugzwang tritt auf, wenn jeder legale Zug die Stellung verschlechtert. Er ist am häufigsten in Endspielen, besonders König-und-Bauer-Endspielen, wo jeder Zug kritisch ist.",
          nl: "Zugzwang treedt op wanneer elke legale zet je positie verslechtert. Het komt het meest voor in eindspelen, vooral koning-en-pion-eindspelen, waar elke zet kritiek is."
        }
      },
      {
        question: {
          en: "What is an 'artificial castle'?",
          es: "¿Qué es un 'enroque artificial'?",
          de: "Was ist eine 'künstliche Rochade'?",
          nl: "Wat is een 'kunstmatige rokade'?"
        },
        options: [
          { en: "Manually moving king to safety after losing castling rights", es: "Mover manualmente el rey a seguridad tras perder derechos de enroque", de: "König manuell in Sicherheit bringen nach Verlust des Rochaderechts", nl: "Handmatig koning naar veiligheid bewegen na verlies rokaderecht" },
          { en: "Castling with promoted rook", es: "Enrocar con torre promovida", de: "Mit umgewandeltem Turm rochieren", nl: "Rokeren met gepromoveerde toren" },
          { en: "Queenside castling", es: "Enroque largo", de: "Lange Rochade", nl: "Lange rokade" },
          { en: "Illegal castling attempt", es: "Intento de enroque ilegal", de: "Illegaler Rochadeversuch", nl: "Illegale rokadepoging" }
        ],
        correct: 0,
        explanation: {
          en: "An artificial castle is when you've lost castling rights (by moving king or rook) but manually recreate a castled position by moving Kg1, Rf1, etc.",
          es: "Un enroque artificial es cuando has perdido los derechos de enroque (moviendo rey o torre) pero recreas manualmente una posición enrocada moviendo Rg1, Tf1, etc.",
          de: "Eine künstliche Rochade ist, wenn Sie das Rochaderecht verloren haben (durch Ziehen von König oder Turm) aber manuell eine rochierte Stellung durch Züge wie Kg1, Tf1 usw. nachbilden.",
          nl: "Een kunstmatige rokade is wanneer je het rokaderecht hebt verloren (door koning of toren te bewegen) maar handmatig een gerokeerde positie nabootst door Kg1, Tf1, etc. te spelen."
        }
      },
      {
        question: {
          en: "What is 'space advantage' in chess?",
          es: "¿Qué es 'ventaja de espacio' en ajedrez?",
          de: "Was ist 'Raumvorteil' im Schach?",
          nl: "Wat is 'ruimtevoordeel' in schaken?"
        },
        options: [
          { en: "Controlling more squares, especially in center", es: "Controlar más casillas, especialmente en el centro", de: "Mehr Felder kontrollieren, besonders im Zentrum", nl: "Meer vakjes controleren, vooral in centrum" },
          { en: "Having larger pieces", es: "Tener piezas más grandes", de: "Größere Figuren haben", nl: "Grotere stukken hebben" },
          { en: "More room on clock", es: "Más tiempo en el reloj", de: "Mehr Zeit auf der Uhr", nl: "Meer tijd op klok" },
          { en: "Physical board size", es: "Tamaño físico del tablero", de: "Physische Brettgröße", nl: "Fysieke bordgrootte" }
        ],
        correct: 0,
        explanation: {
          en: "Space advantage means your pawns are further advanced, giving your pieces more room to maneuver while restricting opponent's pieces. It's a key positional element.",
          es: "Ventaja de espacio significa que tus peones están más avanzados, dando a tus piezas más espacio para maniobrar mientras restringes las piezas del oponente. Es un elemento posicional clave.",
          de: "Raumvorteil bedeutet, dass Ihre Bauern weiter vorgerückt sind, was Ihren Figuren mehr Bewegungsraum gibt, während gegnerische Figuren eingeschränkt werden. Es ist ein wichtiges positionelles Element.",
          nl: "Ruimtevoordeel betekent dat je pionnen verder vooruit staan, waardoor je stukken meer ruimte hebben om te manoeuvreren terwijl de stukken van de tegenstander worden beperkt. Het is een belangrijk positioneel element."
        }
      },
      {
        question: {
          en: "What is the 'Dragon Variation' of the Sicilian?",
          es: "¿Qué es la 'Variación del Dragón' de la Siciliana?",
          de: "Was ist die 'Drachen-Variante' der Sizilianischen?",
          nl: "Wat is de 'Draak Variatie' van de Siciliaanse?"
        },
        options: [
          { en: "Sharp line with fianchettoed kingside bishop", es: "Línea aguda con alfil en fianchetto del lado del rey", de: "Scharfe Linie mit fianchettierten Königsläufer", nl: "Scherpe lijn met gefianchetteerde koningsloper" },
          { en: "Aggressive pawn storm", es: "Tormenta de peones agresiva", de: "Aggressiver Bauernsturm", nl: "Agressieve pionstorm" },
          { en: "Early queen attack", es: "Ataque temprano de reina", de: "Früher Damenangriff", nl: "Vroege koninginnenaanval" },
          { en: "Defensive formation", es: "Formación defensiva", de: "Defensive Formation", nl: "Defensieve formatie" }
        ],
        correct: 0,
        explanation: {
          en: "The Dragon Variation (1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6) features Black fianchettoing the kingside bishop. The pawn structure supposedly resembles a dragon.",
          es: "La Variación del Dragón (1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 g6) presenta a negras con fianchetto del alfil del lado del rey. La estructura de peones supuestamente se asemeja a un dragón.",
          de: "Die Drachen-Variante (1.e4 c5 2.Sf3 d6 3.d4 cxd4 4.Sxd4 Sf6 5.Sc3 g6) zeigt Schwarz mit fianchettierten Königsläufer. Die Bauernstruktur ähnelt angeblich einem Drachen.",
          nl: "De Draak Variatie (1.e4 c5 2.Pf3 d6 3.d4 cxd4 4.Pxd4 Pf6 5.Pc3 g6) kenmerkt zich door zwart die de koningsloper fianchetteerd. De pionstructuur lijkt naar verluidt op een draak."
        }
      },
      {
        question: {
          en: "What is an 'outpost' for a piece?",
          es: "¿Qué es un 'puesto avanzado' para una pieza?",
          de: "Was ist ein 'Außenposten' für eine Figur?",
          nl: "Wat is een 'buitenpost' voor een stuk?"
        },
        options: [
          { en: "Protected square that enemy pawns can't attack", es: "Casilla protegida que peones enemigos no pueden atacar", de: "Geschütztes Feld, das gegnerische Bauern nicht angreifen können", nl: "Beschermd vakje dat vijandelijke pionnen niet kunnen aanvallen" },
          { en: "Corner of the board", es: "Esquina del tablero", de: "Brettecke", nl: "Hoek van het bord" },
          { en: "Any advanced square", es: "Cualquier casilla avanzada", de: "Jedes vorgerückte Feld", nl: "Elk gevorderd vakje" },
          { en: "Square near enemy king", es: "Casilla cerca del rey enemigo", de: "Feld nahe dem gegnerischen König", nl: "Vakje nabij vijandelijke koning" }
        ],
        correct: 0,
        explanation: {
          en: "An outpost is a square in or near the opponent's territory that's protected by your pawn and can't be attacked by enemy pawns. Knights love outposts on the 5th or 6th rank.",
          es: "Un puesto avanzado es una casilla en o cerca del territorio del oponente que está protegida por tu peón y no puede ser atacada por peones enemigos. Los caballos aman puestos avanzados en la 5ª o 6ª fila.",
          de: "Ein Außenposten ist ein Feld im oder nahe dem gegnerischen Territorium, das von Ihrem Bauern geschützt ist und nicht von gegnerischen Bauern angegriffen werden kann. Springer lieben Außenposten auf der 5. oder 6. Reihe.",
          nl: "Een buitenpost is een vakje in of nabij het territorium van de tegenstander dat beschermd is door je pion en niet kan worden aangevallen door vijandelijke pionnen. Paarden houden van buitenposten op de 5e of 6e rij."
        }
      },
      {
        question: {
          en: "What is 'correspondence chess'?",
          es: "¿Qué es el 'ajedrez por correspondencia'?",
          de: "Was ist 'Fernschach'?",
          nl: "Wat is 'correspondentieschaken'?"
        },
        options: [
          { en: "Chess played via mail or internet with days per move", es: "Ajedrez jugado por correo o internet con días por movimiento", de: "Schach per Post oder Internet mit Tagen pro Zug", nl: "Schaken gespeeld via post of internet met dagen per zet" },
          { en: "Tournament chess format", es: "Formato de ajedrez de torneo", de: "Turnierschachformat", nl: "Toernooischaakformaat" },
          { en: "Chess notation system", es: "Sistema de notación de ajedrez", de: "Schachnotationssystem", nl: "Schaaknotatiesysteem" },
          { en: "Online rapid chess", es: "Ajedrez rápido en línea", de: "Online-Schnellschach", nl: "Online snelschaak" }
        ],
        correct: 0,
        explanation: {
          en: "Correspondence chess is played remotely (historically by postal mail, now mostly online) with each player having days to make a move. It allows deep analysis and consultation of resources.",
          es: "El ajedrez por correspondencia se juega remotamente (históricamente por correo postal, ahora principalmente en línea) con cada jugador teniendo días para hacer un movimiento. Permite análisis profundo y consulta de recursos.",
          de: "Fernschach wird aus der Ferne gespielt (historisch per Post, jetzt meist online) mit Tagen pro Zug für jeden Spieler. Es erlaubt tiefe Analyse und Konsultation von Ressourcen.",
          nl: "Correspondentieschaken wordt op afstand gespeeld (historisch per post, nu meestal online) met elke speler dagen om een zet te doen. Het maakt diepe analyse en raadpleging van bronnen mogelijk."
        }
      },
      {
        question: {
          en: "What is the 'Lucena position' technique called?",
          es: "¿Cómo se llama la técnica de la 'posición de Lucena'?",
          de: "Wie heißt die 'Lucena-Stellungs'-Technik?",
          nl: "Hoe heet de 'Lucena-positie'-techniek?"
        },
        options: [
          { en: "Building a bridge", es: "Construir un puente", de: "Eine Brücke bauen", nl: "Een brug bouwen" },
          { en: "Cutting off the king", es: "Cortar al rey", de: "Den König abschneiden", nl: "De koning afsnijden" },
          { en: "Creating a fortress", es: "Crear una fortaleza", de: "Eine Festung errichten", nl: "Een fort creëren" },
          { en: "Advancing the pawn", es: "Avanzar el peón", de: "Den Bauern vorschieben", nl: "De pion vooruitschuiven" }
        ],
        correct: 0,
        explanation: {
          en: "In the Lucena position, 'building a bridge' refers to using your rook to shield your king from checks, allowing the pawn to promote. The rook creates a 'bridge' at the 4th rank.",
          es: "En la posición de Lucena, 'construir un puente' se refiere a usar tu torre para proteger tu rey de jaques, permitiendo que el peón promueva. La torre crea un 'puente' en la 4ª fila.",
          de: "In der Lucena-Stellung bedeutet 'eine Brücke bauen', Ihren Turm zu benutzen, um Ihren König vor Schachs zu schützen und die Bauernumwandlung zu ermöglichen. Der Turm schafft eine 'Brücke' auf der 4. Reihe.",
          nl: "In de Lucena-positie verwijst 'een brug bouwen' naar het gebruik van je toren om je koning tegen schaken te beschermen, waardoor de pion kan promoveren. De toren creëert een 'brug' op de 4e rij."
        }
      },
      {
        question: {
          en: "What is a 'retrograde analysis' in chess?",
          es: "¿Qué es un 'análisis retrógrado' en ajedrez?",
          de: "Was ist eine 'Retroanalyse' im Schach?",
          nl: "Wat is een 'retrograde analyse' in schaken?"
        },
        options: [
          { en: "Working backwards from position to determine what happened", es: "Trabajar hacia atrás desde una posición para determinar qué sucedió", de: "Von einer Stellung rückwärts arbeiten um zu bestimmen, was geschah", nl: "Terugwerken vanaf een positie om te bepalen wat er gebeurde" },
          { en: "Analyzing past games", es: "Analizar juegos pasados", de: "Vergangene Partien analysieren", nl: "Oude partijen analyseren" },
          { en: "Computer analysis", es: "Análisis por computadora", de: "Computeranalyse", nl: "Computeranalyse" },
          { en: "Endgame tablebase", es: "Base de datos de finales", de: "Endspiel-Tablebase", nl: "Eindspeldatabase" }
        ],
        correct: 0,
        explanation: {
          en: "Retrograde analysis involves working backwards from a position to deduce what moves led to it. It's used in chess problems and to prove certain positions are impossible.",
          es: "El análisis retrógrado implica trabajar hacia atrás desde una posición para deducir qué movimientos la condujeron. Se usa en problemas de ajedrez y para probar que ciertas posiciones son imposibles.",
          de: "Retroanalyse bedeutet, von einer Stellung rückwärts zu arbeiten, um zu deduzieren, welche Züge dazu führten. Sie wird in Schachproblemen verwendet und um zu beweisen, dass bestimmte Stellungen unmöglich sind.",
          nl: "Retrograde analyse houdt in terugwerken vanaf een positie om te deduceren welke zetten daartoe leidden. Het wordt gebruikt in schaakproblemen en om te bewijzen dat bepaalde posities onmogelijk zijn."
        }
      },
      {
        question: {
          en: "What is the 'Ruy Lopez' also known as?",
          es: "¿Cómo se conoce también la 'Ruy López'?",
          de: "Wie wird die 'Ruy Lopez' auch genannt?",
          nl: "Hoe wordt de 'Ruy Lopez' ook wel genoemd?"
        },
        options: [
          { en: "Spanish Opening", es: "Apertura Española", de: "Spanische Eröffnung", nl: "Spaanse Opening" },
          { en: "Italian Opening", es: "Apertura Italiana", de: "Italienische Eröffnung", nl: "Italiaanse Opening" },
          { en: "French Opening", es: "Apertura Francesa", de: "Französische Eröffnung", nl: "Franse Opening" },
          { en: "English Opening", es: "Apertura Inglesa", de: "Englische Eröffnung", nl: "Engelse Opening" }
        ],
        correct: 0,
        explanation: {
          en: "The Ruy Lopez (1.e4 e5 2.Nf3 Nc6 3.Bb5) is also called the Spanish Opening. It's named after 16th-century Spanish bishop Ruy López de Segura.",
          es: "La Ruy López (1.e4 e5 2.Cf3 Cc6 3.Ab5) también se llama Apertura Española. Lleva el nombre del obispo español del siglo XVI Ruy López de Segura.",
          de: "Die Ruy Lopez (1.e4 e5 2.Sf3 Sc6 3.Lb5) wird auch Spanische Eröffnung genannt. Sie ist nach dem spanischen Bischof Ruy López de Segura aus dem 16. Jahrhundert benannt.",
          nl: "De Ruy Lopez (1.e4 e5 2.Pf3 Pc6 3.Lb5) wordt ook de Spaanse Opening genoemd. Het is vernoemd naar de 16e-eeuwse Spaanse bisschop Ruy López de Segura."
        }
      },
      {
        question: {
          en: "What is a 'quiet move'?",
          es: "¿Qué es un 'movimiento tranquilo'?",
          de: "Was ist ein 'ruhiger Zug'?",
          nl: "Wat is een 'stille zet'?"
        },
        options: [
          { en: "Move that doesn't capture, check, or threaten", es: "Movimiento que no captura, da jaque ni amenaza", de: "Zug, der nicht schlägt, Schach gibt oder droht", nl: "Zet die niet slaat, schaak geeft of dreigt" },
          { en: "Slow, careful move", es: "Movimiento lento y cuidadoso", de: "Langsamer, vorsichtiger Zug", nl: "Langzame, voorzichtige zet" },
          { en: "Defensive move", es: "Movimiento defensivo", de: "Defensiver Zug", nl: "Defensieve zet" },
          { en: "Pawn move", es: "Movimiento de peón", de: "Bauernzug", nl: "Pionzet" }
        ],
        correct: 0,
        explanation: {
          en: "A quiet move is one that doesn't capture, give check, or make an immediate threat. Paradoxically, quiet moves are often the strongest, improving position subtly.",
          es: "Un movimiento tranquilo es uno que no captura, da jaque ni hace una amenaza inmediata. Paradójicamente, los movimientos tranquilos son a menudo los más fuertes, mejorando la posición sutilmente.",
          de: "Ein ruhiger Zug ist einer, der nicht schlägt, Schach gibt oder eine sofortige Drohung macht. Paradoxerweise sind ruhige Züge oft die stärksten und verbessern die Stellung subtil.",
          nl: "Een stille zet is er een die niet slaat, schaak geeft of een onmiddellijke dreiging maakt. Paradoxaal genoeg zijn stille zetten vaak de sterkste, die de positie subtiel verbeteren."
        }
      },
      {
        question: {
          en: "What does 'intermediate move' mean?",
          es: "¿Qué significa 'movimiento intermedio'?",
          de: "Was bedeutet 'Zwischenzug'?",
          nl: "Wat betekent 'tussenzet'?"
        },
        options: [
          { en: "Unexpected move before obvious continuation", es: "Movimiento inesperado antes de la continuación obvia", de: "Unerwarteter Zug vor offensichtlicher Fortsetzung", nl: "Onverwachte zet voor voor de hand liggende voortzetting" },
          { en: "Medium difficulty move", es: "Movimiento de dificultad media", de: "Mittelschwerer Zug", nl: "Gemiddeld moeilijke zet" },
          { en: "Move in middlegame", es: "Movimiento en medio juego", de: "Zug im Mittelspiel", nl: "Zet in middenspel" },
          { en: "Second-best move", es: "Segundo mejor movimiento", de: "Zweitbester Zug", nl: "Op één na beste zet" }
        ],
        correct: 0,
        explanation: {
          en: "An intermediate move (or zwischenzug) is an in-between move played before an expected reply, often a check or threat that changes the evaluation of the position.",
          es: "Un movimiento intermedio (o zwischenzug) es un movimiento intermedio jugado antes de una respuesta esperada, a menudo un jaque o amenaza que cambia la evaluación de la posición.",
          de: "Ein Zwischenzug ist ein dazwischen gespielter Zug vor einer erwarteten Antwort, oft ein Schach oder eine Drohung, die die Bewertung der Stellung ändert.",
          nl: "Een tussenzet (of zwischenzug) is een tussenliggende zet gespeeld voor een verwachte reactie, vaak een schaak of dreiging die de evaluatie van de positie verandert."
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
