// Quiz Template - Level 2: Board Games - Checkers
(function() {
  const level2 = {
    name: {
      en: "Checkers/Draughts - Intermediate",
      es: "Damas - Intermedio",
      de: "Dame - Fortgeschritten",
      nl: "Dammen - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What is the 'sacrifice' tactic in checkers?",
          es: "¿Qué es la táctica de 'sacrificio' en las damas?",
          de: "Was ist die 'Opfer'-Taktik beim Dame-Spiel?",
          nl: "Wat is de 'offer'-tactiek bij dammen?"
        },
        options: [
          { en: "Moving backward voluntarily", es: "Moverse hacia atrás voluntariamente", de: "Freiwillig rückwärts bewegen", nl: "Vrijwillig achteruit bewegen" },
          { en: "Giving up a piece to gain advantage", es: "Renunciar a una pieza para obtener ventaja", de: "Einen Stein aufgeben, um einen Vorteil zu erlangen", nl: "Een steen opgeven om voordeel te krijgen" },
          { en: "Skipping your turn", es: "Saltarse tu turno", de: "Deinen Zug überspringen", nl: "Je beurt overslaan" },
          { en: "Trading pieces equally", es: "Intercambiar piezas por igual", de: "Steine gleichwertig tauschen", nl: "Stenen gelijkwaardig ruilen" }
        ],
        correct: 1,
        explanation: {
          en: "A sacrifice involves deliberately allowing an opponent to capture your piece in order to gain a positional advantage or set up a winning combination.",
          es: "Un sacrificio implica permitir deliberadamente que un oponente capture tu pieza para obtener una ventaja posicional o preparar una combinación ganadora.",
          de: "Ein Opfer bedeutet, absichtlich zuzulassen, dass ein Gegner deinen Stein schlägt, um einen Positionsvorteil zu erlangen oder eine gewinnbringende Kombination vorzubereiten.",
          nl: "Een offer houdt in dat je opzettelijk toestaat dat een tegenstander je steen slaat om een positievoordeel te krijgen of een winnende combinatie op te zetten."
        }
      },
      {
        question: {
          en: "In American checkers, can a king jump over multiple pieces in one turn?",
          es: "En las damas americanas, ¿puede un rey saltar sobre múltiples piezas en un turno?",
          de: "Kann eine Dame beim amerikanischen Dame über mehrere Steine in einem Zug springen?",
          nl: "Kan een dam in Amerikaans dammen over meerdere stenen in één beurt springen?"
        },
        options: [
          { en: "No, only one piece per turn", es: "No, solo una pieza por turno", de: "Nein, nur ein Stein pro Zug", nl: "Nee, slechts één steen per beurt" },
          { en: "Yes, if they are adjacent", es: "Sí, si son adyacentes", de: "Ja, wenn sie benachbart sind", nl: "Ja, als ze aangrenzend zijn" },
          { en: "Yes, as long as captures are available", es: "Sí, siempre que haya capturas disponibles", de: "Ja, solange Schläge verfügbar sind", nl: "Ja, zolang er slagen beschikbaar zijn" },
          { en: "Only on the final row", es: "Solo en la última fila", de: "Nur in der letzten Reihe", nl: "Alleen op de laatste rij" }
        ],
        correct: 2,
        explanation: {
          en: "Kings can make multiple jumps in one turn, continuing to capture as long as legal jumps are available from the landing square.",
          es: "Los reyes pueden hacer múltiples saltos en un turno, continuando capturando mientras haya saltos legales disponibles desde la casilla de aterrizaje.",
          de: "Damen können mehrere Sprünge in einem Zug machen und weiter schlagen, solange legale Sprünge vom Landefeld verfügbar sind.",
          nl: "Dammen kunnen meerdere sprongen in één beurt maken, doorgaand met slaan zolang er legale sprongen beschikbaar zijn vanaf het landingsvakje."
        }
      },
      {
        question: {
          en: "What is 'opposition' in checkers?",
          es: "¿Qué es la 'oposición' en las damas?",
          de: "Was ist 'Opposition' beim Dame-Spiel?",
          nl: "Wat is 'oppositie' bij dammen?"
        },
        options: [
          { en: "When two pieces face each other diagonally", es: "Cuando dos piezas se enfrentan diagonalmente", de: "Wenn zwei Steine sich diagonal gegenüberstehen", nl: "Wanneer twee stenen elkaar diagonaal tegenoverstaan" },
          { en: "Blocking all opponent moves", es: "Bloquear todos los movimientos del oponente", de: "Alle gegnerischen Züge blockieren", nl: "Alle bewegingen van de tegenstander blokkeren" },
          { en: "Playing against the rules", es: "Jugar contra las reglas", de: "Gegen die Regeln spielen", nl: "Tegen de regels spelen" },
          { en: "Having more kings than opponent", es: "Tener más reyes que el oponente", de: "Mehr Damen haben als der Gegner", nl: "Meer dammen hebben dan de tegenstander" }
        ],
        correct: 0,
        explanation: {
          en: "Opposition occurs when two pieces face each other on adjacent diagonal squares with no possibility to advance without being captured, creating a standoff.",
          es: "La oposición ocurre cuando dos piezas se enfrentan en casillas diagonales adyacentes sin posibilidad de avanzar sin ser capturadas, creando un punto muerto.",
          de: "Opposition tritt auf, wenn zwei Steine sich auf benachbarten diagonalen Feldern gegenüberstehen, ohne vorwärts zu kommen ohne geschlagen zu werden, was eine Pattsituation schafft.",
          nl: "Oppositie treedt op wanneer twee stenen elkaar op aangrenzende diagonale vakjes tegenoverstaan zonder mogelijkheid om te bewegen zonder geslagen te worden, wat een impasse creëert."
        }
      },
      {
        question: {
          en: "What is the 'bridge' formation in checkers?",
          es: "¿Qué es la formación de 'puente' en las damas?",
          de: "Was ist die 'Brücken'-Formation beim Dame-Spiel?",
          nl: "Wat is de 'brug'-formatie bij dammen?"
        },
        options: [
          { en: "Two pieces protecting each other", es: "Dos piezas protegiéndose mutuamente", de: "Zwei Steine, die sich gegenseitig schützen", nl: "Twee stenen die elkaar beschermen" },
          { en: "Pieces arranged in a line", es: "Piezas dispuestas en línea", de: "Steine in einer Linie angeordnet", nl: "Stenen in een lijn gerangschikt" },
          { en: "A path to promotion", es: "Un camino hacia la promoción", de: "Ein Weg zur Beförderung", nl: "Een pad naar promotie" },
          { en: "Connecting both sides of the board", es: "Conectando ambos lados del tablero", de: "Beide Seiten des Bretts verbinden", nl: "Beide zijden van het bord verbinden" }
        ],
        correct: 0,
        explanation: {
          en: "A bridge is a defensive formation where two pieces are positioned to protect each other, making it difficult for the opponent to break through.",
          es: "Un puente es una formación defensiva donde dos piezas están posicionadas para protegerse mutuamente, dificultando que el oponente las atraviese.",
          de: "Eine Brücke ist eine defensive Formation, bei der zwei Steine so positioniert sind, dass sie sich gegenseitig schützen, was es dem Gegner schwer macht, durchzubrechen.",
          nl: "Een brug is een defensieve formatie waarbij twee stenen zo gepositioneerd zijn dat ze elkaar beschermen, wat het moeilijk maakt voor de tegenstander om door te breken."
        }
      },
      {
        question: {
          en: "What does 'tempo' mean in checkers strategy?",
          es: "¿Qué significa 'tempo' en la estrategia de damas?",
          de: "Was bedeutet 'Tempo' in der Dame-Strategie?",
          nl: "Wat betekent 'tempo' in damstrategie?"
        },
        options: [
          { en: "Speed of moving pieces", es: "Velocidad de mover piezas", de: "Geschwindigkeit beim Bewegen von Steinen", nl: "Snelheid van het verplaatsen van stenen" },
          { en: "Gaining a move advantage", es: "Obtener una ventaja de movimiento", de: "Einen Zugvorteil erlangen", nl: "Een zetvoordeel krijgen" },
          { en: "Time limit per move", es: "Límite de tiempo por movimiento", de: "Zeitlimit pro Zug", nl: "Tijdslimiet per zet" },
          { en: "Rhythm of the game", es: "Ritmo del juego", de: "Rhythmus des Spiels", nl: "Ritme van het spel" }
        ],
        correct: 1,
        explanation: {
          en: "Tempo refers to gaining an extra move or time advantage over your opponent, often achieved by forcing them to make defensive moves while you advance your position.",
          es: "Tempo se refiere a obtener un movimiento extra o ventaja de tiempo sobre tu oponente, a menudo logrado obligándolos a hacer movimientos defensivos mientras avanzas tu posición.",
          de: "Tempo bezieht sich darauf, einen zusätzlichen Zug oder Zeitvorteil gegenüber dem Gegner zu erlangen, oft durch Zwingen zu defensiven Zügen während du deine Position verbesserst.",
          nl: "Tempo verwijst naar het krijgen van een extra zet of tijdvoordeel ten opzichte van je tegenstander, vaak bereikt door hen te dwingen defensieve zetten te doen terwijl jij je positie verbetert."
        }
      },
      {
        question: {
          en: "What is a 'shot' in checkers terminology?",
          es: "¿Qué es un 'disparo' en la terminología de damas?",
          de: "Was ist ein 'Schuss' in der Dame-Terminologie?",
          nl: "Wat is een 'shot' in damterminologie?"
        },
        options: [
          { en: "A single jump capture", es: "Una captura de un solo salto", de: "Ein einzelner Sprung-Schlag", nl: "Een enkele sprong-slag" },
          { en: "A combination resulting in multiple captures", es: "Una combinación que resulta en múltiples capturas", de: "Eine Kombination, die zu mehreren Schlägen führt", nl: "Een combinatie die resulteert in meerdere slagen" },
          { en: "A move toward promotion", es: "Un movimiento hacia la promoción", de: "Ein Zug zur Beförderung", nl: "Een zet richting promotie" },
          { en: "A long-distance king move", es: "Un movimiento de rey a larga distancia", de: "Ein Langstrecken-Damenzug", nl: "Een lange-afstands damzet" }
        ],
        correct: 1,
        explanation: {
          en: "A shot is a tactical combination where multiple pieces are captured in a sequence, often involving a sacrifice to set up the winning captures.",
          es: "Un disparo es una combinación táctica donde se capturan múltiples piezas en una secuencia, a menudo involucrando un sacrificio para preparar las capturas ganadoras.",
          de: "Ein Schuss ist eine taktische Kombination, bei der mehrere Steine in einer Sequenz geschlagen werden, oft unter Einbeziehung eines Opfers zur Vorbereitung der gewinnenden Schläge.",
          nl: "Een shot is een tactische combinatie waarbij meerdere stenen in een reeks worden geslagen, vaak met een offer om de winnende slagen op te zetten."
        }
      },
      {
        question: {
          en: "When does a piece become crowned as a king?",
          es: "¿Cuándo se corona una pieza como rey?",
          de: "Wann wird ein Stein zur Dame gekrönt?",
          nl: "Wanneer wordt een steen gekroond tot dam?"
        },
        options: [
          { en: "Immediately when reaching the back row", es: "Inmediatamente al llegar a la última fila", de: "Sofort beim Erreichen der letzten Reihe", nl: "Onmiddellijk bij het bereiken van de achterste rij" },
          { en: "At the start of the next turn", es: "Al inicio del siguiente turno", de: "Zu Beginn des nächsten Zuges", nl: "Aan het begin van de volgende beurt" },
          { en: "After capturing a piece", es: "Después de capturar una pieza", de: "Nach dem Schlagen eines Steins", nl: "Na het slaan van een steen" },
          { en: "At the end of the current turn", es: "Al final del turno actual", de: "Am Ende des aktuellen Zuges", nl: "Aan het einde van de huidige beurt" }
        ],
        correct: 3,
        explanation: {
          en: "A piece is crowned at the end of the turn on which it reaches the king row. If it makes a jump to the king row and can continue jumping backward, it must do so as a regular piece first.",
          es: "Una pieza se corona al final del turno en el que alcanza la fila del rey. Si hace un salto a la fila del rey y puede continuar saltando hacia atrás, debe hacerlo primero como pieza regular.",
          de: "Ein Stein wird am Ende des Zuges gekrönt, in dem er die Damenreihe erreicht. Wenn er zur Damenreihe springt und weiter rückwärts springen kann, muss er dies zuerst als normaler Stein tun.",
          nl: "Een steen wordt gekroond aan het einde van de beurt waarin hij de damrij bereikt. Als hij naar de damrij springt en verder achteruit kan springen, moet hij dit eerst als gewone steen doen."
        }
      },
      {
        question: {
          en: "What is the 'first position' principle in checkers?",
          es: "¿Qué es el principio de 'primera posición' en las damas?",
          de: "Was ist das 'Erste Position'-Prinzip beim Dame-Spiel?",
          nl: "Wat is het 'eerste positie'-principe bij dammen?"
        },
        options: [
          { en: "The starting setup of the game", es: "La configuración inicial del juego", de: "Die Startaufstellung des Spiels", nl: "De startopstelling van het spel" },
          { en: "Controlling the center squares", es: "Controlar las casillas centrales", de: "Kontrolle der zentralen Felder", nl: "De centrale vakjes beheersen" },
          { en: "Whoever moves first has advantage", es: "Quien mueve primero tiene ventaja", de: "Wer zuerst zieht, hat einen Vorteil", nl: "Wie als eerste zet heeft voordeel" },
          { en: "Having pieces on the edge", es: "Tener piezas en el borde", de: "Steine am Rand haben", nl: "Stenen aan de rand hebben" }
        ],
        correct: 1,
        explanation: {
          en: "The first position principle emphasizes controlling the center squares of the board, which provides greater mobility and tactical opportunities for your pieces.",
          es: "El principio de primera posición enfatiza controlar las casillas centrales del tablero, lo que proporciona mayor movilidad y oportunidades tácticas para tus piezas.",
          de: "Das Erste Position-Prinzip betont die Kontrolle der zentralen Felder des Bretts, was größere Mobilität und taktische Möglichkeiten für deine Steine bietet.",
          nl: "Het eerste positie-principe benadrukt het beheersen van de centrale vakjes van het bord, wat grotere mobiliteit en tactische mogelijkheden voor je stenen biedt."
        }
      },
      {
        question: {
          en: "What is a 'fork' tactic in checkers?",
          es: "¿Qué es una táctica de 'tenedor' en las damas?",
          de: "Was ist eine 'Gabel'-Taktik beim Dame-Spiel?",
          nl: "Wat is een 'vork'-tactiek bij dammen?"
        },
        options: [
          { en: "Attacking two pieces simultaneously", es: "Atacar dos piezas simultáneamente", de: "Zwei Steine gleichzeitig angreifen", nl: "Twee stenen tegelijkertijd aanvallen" },
          { en: "Splitting your pieces into two groups", es: "Dividir tus piezas en dos grupos", de: "Deine Steine in zwei Gruppen aufteilen", nl: "Je stenen in twee groepen splitsen" },
          { en: "Making a Y-shaped formation", es: "Hacer una formación en forma de Y", de: "Eine Y-förmige Formation bilden", nl: "Een Y-vormige formatie maken" },
          { en: "Choosing between two captures", es: "Elegir entre dos capturas", de: "Zwischen zwei Schlägen wählen", nl: "Kiezen tussen twee slagen" }
        ],
        correct: 0,
        explanation: {
          en: "A fork is when you position a piece to threaten two or more opponent pieces at once, forcing them to lose at least one piece since they can only defend one.",
          es: "Un tenedor es cuando posicionas una pieza para amenazar dos o más piezas del oponente a la vez, forzándolo a perder al menos una pieza ya que solo puede defender una.",
          de: "Eine Gabel liegt vor, wenn du einen Stein so positionierst, dass er zwei oder mehr gegnerische Steine gleichzeitig bedroht und sie mindestens einen verlieren müssen, da sie nur einen verteidigen können.",
          nl: "Een vork is wanneer je een steen zo positioneert dat hij twee of meer stenen van de tegenstander tegelijk bedreigt, waardoor ze minstens één steen moeten verliezen omdat ze er maar één kunnen verdedigen."
        }
      },
      {
        question: {
          en: "What is the 'Dyke formation' in checkers?",
          es: "¿Qué es la formación 'Dyke' en las damas?",
          de: "Was ist die 'Dyke-Formation' beim Dame-Spiel?",
          nl: "Wat is de 'Dyke-formatie' bij dammen?"
        },
        options: [
          { en: "Pieces along one side of the board", es: "Piezas a lo largo de un lado del tablero", de: "Steine entlang einer Seite des Bretts", nl: "Stenen langs één kant van het bord" },
          { en: "A diagonal line of pieces blocking advancement", es: "Una línea diagonal de piezas bloqueando el avance", de: "Eine diagonale Linie von Steinen, die den Vormarsch blockiert", nl: "Een diagonale lijn van stenen die vooruitgang blokkeert" },
          { en: "All pieces in the back rows", es: "Todas las piezas en las filas traseras", de: "Alle Steine in den hinteren Reihen", nl: "Alle stenen in de achterste rijen" },
          { en: "Pieces forming a square pattern", es: "Piezas formando un patrón cuadrado", de: "Steine, die ein quadratisches Muster bilden", nl: "Stenen die een vierkant patroon vormen" }
        ],
        correct: 1,
        explanation: {
          en: "The Dyke formation is a defensive setup where pieces form a diagonal barrier across the board, making it difficult for the opponent to advance or break through.",
          es: "La formación Dyke es una configuración defensiva donde las piezas forman una barrera diagonal a través del tablero, dificultando que el oponente avance o atraviese.",
          de: "Die Dyke-Formation ist eine defensive Aufstellung, bei der Steine eine diagonale Barriere über das Brett bilden, was es dem Gegner schwer macht, vorzurücken oder durchzubrechen.",
          nl: "De Dyke-formatie is een defensieve opstelling waarbij stenen een diagonale barrière over het bord vormen, waardoor het moeilijk is voor de tegenstander om vooruit te komen of door te breken."
        }
      },
      {
        question: {
          en: "What is the advantage of having the 'move' in checkers?",
          es: "¿Cuál es la ventaja de tener el 'movimiento' en las damas?",
          de: "Was ist der Vorteil, den 'Zug' beim Dame-Spiel zu haben?",
          nl: "Wat is het voordeel van de 'zet' hebben bij dammen?"
        },
        options: [
          { en: "You can capture more pieces", es: "Puedes capturar más piezas", de: "Du kannst mehr Steine schlagen", nl: "Je kunt meer stenen slaan" },
          { en: "You control the tempo and initiative", es: "Controlas el tempo y la iniciativa", de: "Du kontrollierst das Tempo und die Initiative", nl: "Je controleert het tempo en het initiatief" },
          { en: "Your pieces move faster", es: "Tus piezas se mueven más rápido", de: "Deine Steine bewegen sich schneller", nl: "Je stenen bewegen sneller" },
          { en: "You get an extra turn", es: "Obtienes un turno extra", de: "Du bekommst einen Extra-Zug", nl: "Je krijgt een extra beurt" }
        ],
        correct: 1,
        explanation: {
          en: "Having the move means it's your turn to play, giving you the initiative to control the game's direction and force your opponent to react to your threats.",
          es: "Tener el movimiento significa que es tu turno de jugar, dándote la iniciativa para controlar la dirección del juego y forzar a tu oponente a reaccionar a tus amenazas.",
          de: "Den Zug zu haben bedeutet, dass du am Zug bist, was dir die Initiative gibt, die Spielrichtung zu kontrollieren und den Gegner zu zwingen, auf deine Bedrohungen zu reagieren.",
          nl: "De zet hebben betekent dat het jouw beurt is om te spelen, wat je het initiatief geeft om de richting van het spel te controleren en je tegenstander te dwingen te reageren op je bedreigingen."
        }
      },
      {
        question: {
          en: "What is a 'two-for-one' exchange in checkers?",
          es: "¿Qué es un intercambio 'dos por uno' en las damas?",
          de: "Was ist ein 'Zwei-für-Eins'-Tausch beim Dame-Spiel?",
          nl: "Wat is een 'twee-voor-één'-ruil bij dammen?"
        },
        options: [
          { en: "Capturing two pieces in one jump", es: "Capturar dos piezas en un salto", de: "Zwei Steine in einem Sprung schlagen", nl: "Twee stenen in één sprong slaan" },
          { en: "Trading one piece to capture two", es: "Intercambiar una pieza para capturar dos", de: "Einen Stein tauschen, um zwei zu schlagen", nl: "Eén steen ruilen om twee te slaan" },
          { en: "Promoting two pieces at once", es: "Promocionar dos piezas a la vez", de: "Zwei Steine auf einmal befördern", nl: "Twee stenen tegelijk promoveren" },
          { en: "Moving twice in one turn", es: "Moverse dos veces en un turno", de: "Zweimal in einem Zug bewegen", nl: "Twee keer bewegen in één beurt" }
        ],
        correct: 1,
        explanation: {
          en: "A two-for-one exchange is a favorable trade where you sacrifice one of your pieces but capture two of your opponent's pieces, gaining a material advantage.",
          es: "Un intercambio dos por uno es un comercio favorable donde sacrificas una de tus piezas pero capturas dos piezas de tu oponente, ganando una ventaja material.",
          de: "Ein Zwei-für-Eins-Tausch ist ein günstiger Handel, bei dem du einen deiner Steine opferst, aber zwei gegnerische Steine schlägst und einen materiellen Vorteil erlangst.",
          nl: "Een twee-voor-één-ruil is een gunstige ruil waarbij je één van je stenen opoffert maar twee stenen van je tegenstander slaat, waardoor je een materieel voordeel krijgt."
        }
      },
      {
        question: {
          en: "Why is controlling the 'double corner' important in checkers?",
          es: "¿Por qué es importante controlar la 'esquina doble' en las damas?",
          de: "Warum ist die Kontrolle der 'Doppelecke' beim Dame-Spiel wichtig?",
          nl: "Waarom is het belangrijk de 'dubbele hoek' te beheersen bij dammen?"
        },
        options: [
          { en: "It protects two pieces at once", es: "Protege dos piezas a la vez", de: "Es schützt zwei Steine gleichzeitig", nl: "Het beschermt twee stenen tegelijk" },
          { en: "It's the promotion square on the back row", es: "Es la casilla de promoción en la última fila", de: "Es ist das Beförderungsfeld in der letzten Reihe", nl: "Het is het promotievakje op de achterste rij" },
          { en: "It gives more mobility", es: "Da más movilidad", de: "Es gibt mehr Mobilität", nl: "Het geeft meer mobiliteit" },
          { en: "It's worth double points", es: "Vale puntos dobles", de: "Es ist doppelte Punkte wert", nl: "Het is dubbele punten waard" }
        ],
        correct: 1,
        explanation: {
          en: "The double corner is the corner square on your opponent's back row. Controlling it is important because it's where pieces become kings and can provide strategic advantages.",
          es: "La esquina doble es la casilla de esquina en la última fila de tu oponente. Controlarla es importante porque es donde las piezas se convierten en reyes y puede proporcionar ventajas estratégicas.",
          de: "Die Doppelecke ist das Eckfeld in der letzten Reihe deines Gegners. Sie zu kontrollieren ist wichtig, weil dort Steine zu Damen werden und strategische Vorteile bieten können.",
          nl: "De dubbele hoek is het hoekvakje op de achterste rij van je tegenstander. Het beheersen ervan is belangrijk omdat het de plek is waar stenen dammen worden en strategische voordelen kan bieden."
        }
      },
      {
        question: {
          en: "What is 'pinning' in checkers?",
          es: "¿Qué es 'clavar' en las damas?",
          de: "Was ist 'Fesseln' beim Dame-Spiel?",
          nl: "Wat is 'vastzetten' bij dammen?"
        },
        options: [
          { en: "Placing a piece against the edge", es: "Colocar una pieza contra el borde", de: "Einen Stein an den Rand setzen", nl: "Een steen tegen de rand plaatsen" },
          { en: "Immobilizing an opponent's piece", es: "Inmovilizar una pieza del oponente", de: "Einen gegnerischen Stein bewegungsunfähig machen", nl: "Een steen van de tegenstander immobiliseren" },
          { en: "Capturing a king", es: "Capturar un rey", de: "Eine Dame schlagen", nl: "Een dam slaan" },
          { en: "Stacking pieces together", es: "Apilar piezas juntas", de: "Steine zusammenstapeln", nl: "Stenen samen stapelen" }
        ],
        correct: 1,
        explanation: {
          en: "Pinning occurs when you position your pieces so that an opponent's piece cannot move without exposing a more valuable piece or allowing a capture.",
          es: "Clavar ocurre cuando posicionas tus piezas de modo que una pieza del oponente no puede moverse sin exponer una pieza más valiosa o permitir una captura.",
          de: "Fesseln tritt auf, wenn du deine Steine so positionierst, dass ein gegnerischer Stein sich nicht bewegen kann, ohne einen wertvolleren Stein preiszugeben oder einen Schlag zu erlauben.",
          nl: "Vastzetten treedt op wanneer je je stenen zo positioneert dat een steen van de tegenstander niet kan bewegen zonder een waardevoller stuk bloot te stellen of een slag toe te staan."
        }
      },
      {
        question: {
          en: "What is the 'pivot' move in checkers?",
          es: "¿Qué es el movimiento de 'pivote' en las damas?",
          de: "Was ist der 'Drehpunkt'-Zug beim Dame-Spiel?",
          nl: "Wat is de 'draaipunt'-zet bij dammen?"
        },
        options: [
          { en: "Rotating the board 180 degrees", es: "Rotar el tablero 180 grados", de: "Das Brett um 180 Grad drehen", nl: "Het bord 180 graden draaien" },
          { en: "A king changing direction during multiple jumps", es: "Un rey cambiando de dirección durante saltos múltiples", de: "Eine Dame, die während mehrerer Sprünge die Richtung ändert", nl: "Een dam die van richting verandert tijdens meerdere sprongen" },
          { en: "Swapping positions with another piece", es: "Intercambiar posiciones con otra pieza", de: "Positionen mit einem anderen Stein tauschen", nl: "Posities wisselen met een andere steen" },
          { en: "Moving from one side to the other", es: "Moverse de un lado al otro", de: "Von einer Seite zur anderen bewegen", nl: "Van de ene kant naar de andere bewegen" }
        ],
        correct: 1,
        explanation: {
          en: "A pivot move occurs when a king changes direction during a sequence of multiple jumps, allowing it to capture pieces in different diagonal directions.",
          es: "Un movimiento de pivote ocurre cuando un rey cambia de dirección durante una secuencia de saltos múltiples, permitiéndole capturar piezas en diferentes direcciones diagonales.",
          de: "Ein Drehpunkt-Zug tritt auf, wenn eine Dame während einer Sequenz mehrerer Sprünge die Richtung ändert und so Steine in verschiedenen diagonalen Richtungen schlagen kann.",
          nl: "Een draaipunt-zet vindt plaats wanneer een dam van richting verandert tijdens een reeks van meerdere sprongen, waardoor hij stenen in verschillende diagonale richtingen kan slaan."
        }
      },
      {
        question: {
          en: "What is the general rule about piece exchanges when ahead in material?",
          es: "¿Cuál es la regla general sobre intercambios de piezas cuando tienes ventaja material?",
          de: "Was ist die allgemeine Regel über Steintausch, wenn man materiell vorne liegt?",
          nl: "Wat is de algemene regel over steenruilen wanneer je materieel voor staat?"
        },
        options: [
          { en: "Avoid all exchanges", es: "Evitar todos los intercambios", de: "Alle Tausche vermeiden", nl: "Alle ruilen vermijden" },
          { en: "Exchange pieces freely", es: "Intercambiar piezas libremente", de: "Steine frei tauschen", nl: "Stenen vrijelijk ruilen" },
          { en: "Only exchange kings", es: "Solo intercambiar reyes", de: "Nur Damen tauschen", nl: "Alleen dammen ruilen" },
          { en: "Exchange only when forced", es: "Intercambiar solo cuando sea forzado", de: "Nur tauschen, wenn gezwungen", nl: "Alleen ruilen wanneer gedwongen" }
        ],
        correct: 1,
        explanation: {
          en: "When ahead in material, it's generally good to exchange pieces because it increases your relative advantage and simplifies the position toward a winning endgame.",
          es: "Cuando tienes ventaja material, generalmente es bueno intercambiar piezas porque aumenta tu ventaja relativa y simplifica la posición hacia un final ganador.",
          de: "Wenn man materiell vorne liegt, ist es im Allgemeinen gut, Steine zu tauschen, weil es den relativen Vorteil erhöht und die Position zu einem gewinnenden Endspiel vereinfacht.",
          nl: "Wanneer je materieel voor staat, is het over het algemeen goed om stenen te ruilen omdat het je relatieve voordeel vergroot en de positie vereenvoudigt naar een winnend eindspel."
        }
      },
      {
        question: {
          en: "What is a 'combination' in checkers?",
          es: "¿Qué es una 'combinación' en las damas?",
          de: "Was ist eine 'Kombination' beim Dame-Spiel?",
          nl: "Wat is een 'combinatie' bij dammen?"
        },
        options: [
          { en: "Playing with different colored pieces", es: "Jugar con piezas de diferentes colores", de: "Mit verschiedenfarbigen Steinen spielen", nl: "Spelen met stenen van verschillende kleuren" },
          { en: "A sequence of forced moves leading to advantage", es: "Una secuencia de movimientos forzados que llevan a una ventaja", de: "Eine Sequenz erzwungener Züge, die zu einem Vorteil führt", nl: "Een reeks gedwongen zetten die tot voordeel leiden" },
          { en: "Using both regular pieces and kings", es: "Usar tanto piezas regulares como reyes", de: "Sowohl normale Steine als auch Damen verwenden", nl: "Zowel gewone stenen als dammen gebruiken" },
          { en: "Mixing offensive and defensive strategies", es: "Mezclar estrategias ofensivas y defensivas", de: "Offensive und defensive Strategien mischen", nl: "Offensieve en defensieve strategieën mengen" }
        ],
        correct: 1,
        explanation: {
          en: "A combination is a calculated sequence of moves, often involving sacrifices and forced captures, that leads to a significant advantage or winning position.",
          es: "Una combinación es una secuencia calculada de movimientos, a menudo involucrando sacrificios y capturas forzadas, que lleva a una ventaja significativa o posición ganadora.",
          de: "Eine Kombination ist eine berechnete Zugfolge, oft unter Einbeziehung von Opfern und erzwungenen Schlägen, die zu einem bedeutenden Vorteil oder einer gewinnenden Position führt.",
          nl: "Een combinatie is een berekende reeks zetten, vaak met offers en gedwongen slagen, die leidt tot een significant voordeel of winnende positie."
        }
      },
      {
        question: {
          en: "What does 'breakthrough' mean in checkers?",
          es: "¿Qué significa 'avance' en las damas?",
          de: "Was bedeutet 'Durchbruch' beim Dame-Spiel?",
          nl: "Wat betekent 'doorbraak' bij dammen?"
        },
        options: [
          { en: "Breaking through opponent's defensive formation", es: "Romper la formación defensiva del oponente", de: "Durchbrechen der gegnerischen Defensivformation", nl: "Doorbreken van de defensieve formatie van de tegenstander" },
          { en: "Discovering a new strategy", es: "Descubrir una nueva estrategia", de: "Eine neue Strategie entdecken", nl: "Een nieuwe strategie ontdekken" },
          { en: "Winning the game quickly", es: "Ganar el juego rápidamente", de: "Das Spiel schnell gewinnen", nl: "Het spel snel winnen" },
          { en: "Creating a king", es: "Crear un rey", de: "Eine Dame erschaffen", nl: "Een dam maken" }
        ],
        correct: 0,
        explanation: {
          en: "A breakthrough is a tactical maneuver where you force your way through your opponent's defensive lines, often leading to creating a king or gaining a decisive advantage.",
          es: "Un avance es una maniobra táctica donde te abres paso a través de las líneas defensivas de tu oponente, a menudo llevando a crear un rey u obtener una ventaja decisiva.",
          de: "Ein Durchbruch ist ein taktisches Manöver, bei dem du dich durch die Verteidigungslinien deines Gegners zwingst, was oft zur Erschaffung einer Dame oder einem entscheidenden Vorteil führt.",
          nl: "Een doorbraak is een tactisch manoeuvre waarbij je je door de verdedigingslinies van je tegenstander dwingt, vaak leidend tot het maken van een dam of het verkrijgen van een beslissend voordeel."
        }
      },
      {
        question: {
          en: "What is the 'dog hole' position in checkers?",
          es: "¿Qué es la posición del 'agujero de perro' en las damas?",
          de: "Was ist die 'Hundsloch'-Position beim Dame-Spiel?",
          nl: "Wat is de 'hondengat'-positie bij dammen?"
        },
        options: [
          { en: "A trapped piece in the corner", es: "Una pieza atrapada en la esquina", de: "Ein gefangener Stein in der Ecke", nl: "Een gevangen steen in de hoek" },
          { en: "The weakest square on the board", es: "La casilla más débil del tablero", de: "Das schwächste Feld auf dem Brett", nl: "Het zwakste vakje op het bord" },
          { en: "An opening in the defense", es: "Una apertura en la defensa", de: "Eine Öffnung in der Verteidigung", nl: "Een opening in de verdediging" },
          { en: "The center square", es: "La casilla central", de: "Das zentrale Feld", nl: "Het centrale vakje" }
        ],
        correct: 0,
        explanation: {
          en: "The dog hole refers to when a piece becomes trapped in a corner square with no escape, making it vulnerable to capture or simply blocking it from useful play.",
          es: "El agujero de perro se refiere a cuando una pieza queda atrapada en una casilla de esquina sin escape, haciéndola vulnerable a captura o simplemente bloqueándola del juego útil.",
          de: "Das Hundsloch bezieht sich darauf, wenn ein Stein in einem Eckfeld ohne Fluchtmöglichkeit gefangen wird, was ihn anfällig für Schläge macht oder ihn vom nützlichen Spiel blockiert.",
          nl: "Het hondengat verwijst naar wanneer een steen gevangen raakt in een hoekvakje zonder ontsnapping, waardoor hij kwetsbaar is voor slaan of simpelweg geblokkeerd wordt van nuttig spel."
        }
      },
      {
        question: {
          en: "Why is it often advantageous to keep pieces on the back row in the opening?",
          es: "¿Por qué suele ser ventajoso mantener piezas en la última fila en la apertura?",
          de: "Warum ist es oft vorteilhaft, Steine in der Eröffnung auf der letzten Reihe zu halten?",
          nl: "Waarom is het vaak voordelig om stenen op de achterste rij te houden in de opening?"
        },
        options: [
          { en: "They move faster from there", es: "Se mueven más rápido desde allí", de: "Sie bewegen sich von dort schneller", nl: "Ze bewegen sneller vanaf daar" },
          { en: "They prevent opponent from making kings easily", es: "Evitan que el oponente cree reyes fácilmente", de: "Sie verhindern, dass der Gegner leicht Damen macht", nl: "Ze voorkomen dat de tegenstander gemakkelijk dammen maakt" },
          { en: "They are protected by the board edge", es: "Están protegidas por el borde del tablero", de: "Sie sind durch den Brettrand geschützt", nl: "Ze zijn beschermd door de bordrand" },
          { en: "They control more squares", es: "Controlan más casillas", de: "Sie kontrollieren mehr Felder", nl: "Ze beheersen meer vakjes" }
        ],
        correct: 1,
        explanation: {
          en: "Keeping pieces on your back row ('guarding the king row') prevents your opponent from easily promoting their pieces to kings, which is a crucial defensive principle.",
          es: "Mantener piezas en tu última fila ('guardando la fila del rey') evita que tu oponente promocione fácilmente sus piezas a reyes, lo cual es un principio defensivo crucial.",
          de: "Steine auf der letzten Reihe zu halten ('die Damenreihe bewachen') verhindert, dass der Gegner seine Steine leicht zu Damen befördert, was ein entscheidendes defensives Prinzip ist.",
          nl: "Stenen op je achterste rij houden ('de damrij bewaken') voorkomt dat je tegenstander gemakkelijk zijn stenen promoveert tot dammen, wat een cruciaal defensief principe is."
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
