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
      },
      {
        question: {
          en: "What is 'the exchange' in checkers strategy?",
          es: "¿Qué es 'el intercambio' en estrategia de damas?",
          de: "Was ist 'der Tausch' in der Dame-Strategie?",
          nl: "Wat is 'de ruil' in damstrategie?"
        },
        options: [
          { en: "Trading equal pieces", es: "Intercambiar piezas iguales", de: "Gleichwertige Steine tauschen", nl: "Gelijke stenen ruilen" },
          { en: "Swapping board positions", es: "Intercambiar posiciones del tablero", de: "Brettpositionen tauschen", nl: "Bordposities wisselen" },
          { en: "Changing game variants", es: "Cambiar variantes del juego", de: "Spielvarianten wechseln", nl: "Spelvarianten veranderen" },
          { en: "Rotating the board", es: "Rotar el tablero", de: "Das Brett drehen", nl: "Het bord draaien" }
        ],
        correct: 0,
        explanation: {
          en: "The exchange refers to trading pieces with your opponent, typically capturing one of their pieces while allowing them to capture one of yours. Strategic players consider whether exchanges benefit their position.",
          es: "El intercambio se refiere a intercambiar piezas con tu oponente, típicamente capturando una de sus piezas mientras permites que capture una tuya. Los jugadores estratégicos consideran si los intercambios benefician su posición.",
          de: "Der Tausch bezieht sich auf das Handeln von Steinen mit dem Gegner, typischerweise das Schlagen eines seiner Steine, während man ihm erlaubt, einen eigenen zu schlagen. Strategische Spieler überlegen, ob Tausche ihrer Position nützen.",
          nl: "De ruil verwijst naar het ruilen van stenen met je tegenstander, typisch het slaan van één van hun stenen terwijl je toestaat dat ze één van jou slaan. Strategische spelers overwegen of ruilen hun positie ten goede komt."
        }
      },
      {
        question: {
          en: "What is a 'cramp' in checkers?",
          es: "¿Qué es un 'apretón' en las damas?",
          de: "Was ist eine 'Verkrampfung' beim Dame?",
          nl: "Wat is een 'kramp' bij dammen?"
        },
        options: [
          { en: "When pieces have limited mobility", es: "Cuando las piezas tienen movilidad limitada", de: "Wenn Steine begrenzte Mobilität haben", nl: "Wanneer stenen beperkte mobiliteit hebben" },
          { en: "A physical injury from playing too long", es: "Una lesión física por jugar demasiado tiempo", de: "Eine körperliche Verletzung vom zu langen Spielen", nl: "Een fysieke blessure van te lang spelen" },
          { en: "Capturing three pieces at once", es: "Capturar tres piezas a la vez", de: "Drei Steine auf einmal schlagen", nl: "Drie stenen tegelijk slaan" },
          { en: "A time pressure situation", es: "Una situación de presión de tiempo", de: "Eine Zeitdruck-Situation", nl: "Een tijdsdruk situatie" }
        ],
        correct: 0,
        explanation: {
          en: "A cramp occurs when your pieces are restricted and have limited mobility due to opponent's positioning, making it difficult to execute your plans or defend effectively.",
          es: "Un apretón ocurre cuando tus piezas están restringidas y tienen movilidad limitada debido al posicionamiento del oponente, dificultando ejecutar tus planes o defender efectivamente.",
          de: "Eine Verkrampfung tritt auf, wenn deine Steine eingeschränkt sind und aufgrund der Positionierung des Gegners begrenzte Mobilität haben, was es schwierig macht, Pläne auszuführen oder effektiv zu verteidigen.",
          nl: "Een kramp treedt op wanneer je stenen beperkt zijn en beperkte mobiliteit hebben door de positionering van de tegenstander, waardoor het moeilijk is om je plannen uit te voeren of effectief te verdedigen."
        }
      },
      {
        question: {
          en: "What is the 'majority' principle in checkers endgames?",
          es: "¿Qué es el principio de 'mayoría' en finales de damas?",
          de: "Was ist das 'Mehrheits'-Prinzip in Dame-Endspielen?",
          nl: "Wat is het 'meerderheids'-principe in dam-eindspelen?"
        },
        options: [
          { en: "Having more pieces on one side of the board", es: "Tener más piezas en un lado del tablero", de: "Mehr Steine auf einer Seite des Bretts haben", nl: "Meer stenen aan één kant van het bord hebben" },
          { en: "Controlling more than half the squares", es: "Controlar más de la mitad de las casillas", de: "Mehr als die Hälfte der Felder kontrollieren", nl: "Meer dan de helft van de vakjes beheersen" },
          { en: "Having won the most games", es: "Haber ganado la mayoría de los juegos", de: "Die meisten Spiele gewonnen haben", nl: "De meeste spellen gewonnen hebben" },
          { en: "Using democratic voting for moves", es: "Usar votación democrática para movimientos", de: "Demokratische Abstimmung für Züge verwenden", nl: "Democratische stemming voor zetten gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "The majority principle involves creating a numerical advantage on one side of the board (wing), which can then be used to break through and create a king while the opponent is occupied elsewhere.",
          es: "El principio de mayoría implica crear una ventaja numérica en un lado del tablero (ala), que luego puede usarse para atravesar y crear un rey mientras el oponente está ocupado en otro lugar.",
          de: "Das Mehrheitsprinzip beinhaltet die Schaffung eines zahlenmäßigen Vorteils auf einer Seite des Bretts (Flügel), der dann genutzt werden kann, um durchzubrechen und eine Dame zu schaffen, während der Gegner anderswo beschäftigt ist.",
          nl: "Het meerderheidssprincipe houdt in dat je een numeriek voordeel creëert aan één kant van het bord (vleugel), dat vervolgens kan worden gebruikt om door te breken en een dam te maken terwijl de tegenstander elders bezig is."
        }
      },
      {
        question: {
          en: "What does it mean to 'strand' a piece?",
          es: "¿Qué significa 'varar' una pieza?",
          de: "Was bedeutet es, einen Stein zu 'stranden'?",
          nl: "Wat betekent het om een steen te 'stranden'?"
        },
        options: [
          { en: "Isolate it from supporting pieces", es: "Aislarla de piezas de apoyo", de: "Ihn von unterstützenden Steinen isolieren", nl: "Hem isoleren van ondersteunende stenen" },
          { en: "Place it on the edge of the board", es: "Colocarla en el borde del tablero", de: "Ihn an den Rand des Bretts platzieren", nl: "Hem aan de rand van het bord plaatsen" },
          { en: "Promote it to a king", es: "Promocionarla a rey", de: "Ihn zur Dame befördern", nl: "Hem promoveren tot dam" },
          { en: "Capture it with multiple pieces", es: "Capturarla con múltiples piezas", de: "Ihn mit mehreren Steinen schlagen", nl: "Hem met meerdere stenen slaan" }
        ],
        correct: 0,
        explanation: {
          en: "Stranding a piece means isolating it away from your other pieces, making it vulnerable to capture or unable to contribute effectively to your position.",
          es: "Varar una pieza significa aislarla lejos de tus otras piezas, haciéndola vulnerable a captura o incapaz de contribuir efectivamente a tu posición.",
          de: "Einen Stein zu stranden bedeutet, ihn von deinen anderen Steinen zu isolieren, was ihn anfällig für Schläge macht oder unfähig, effektiv zu deiner Position beizutragen.",
          nl: "Een steen stranden betekent hem isoleren van je andere stenen, waardoor hij kwetsbaar is voor slaan of niet effectief kan bijdragen aan je positie."
        }
      },
      {
        question: {
          en: "What is the 'second position' in checkers openings?",
          es: "¿Qué es la 'segunda posición' en aperturas de damas?",
          de: "Was ist die 'zweite Position' in Dame-Eröffnungen?",
          nl: "Wat is de 'tweede positie' in dam-openingen?"
        },
        options: [
          { en: "The position after two moves", es: "La posición después de dos movimientos", de: "Die Position nach zwei Zügen", nl: "De positie na twee zetten" },
          { en: "Controlling squares behind center squares", es: "Controlar casillas detrás de las casillas centrales", de: "Kontrolle der Felder hinter den zentralen Feldern", nl: "Vakjes achter de centrale vakjes beheersen" },
          { en: "The runner-up player's position", es: "La posición del segundo jugador", de: "Die Position des Zweitplatzierten", nl: "De positie van de tweede speler" },
          { en: "Having pieces in the second row", es: "Tener piezas en la segunda fila", de: "Steine in der zweiten Reihe haben", nl: "Stenen in de tweede rij hebben" }
        ],
        correct: 1,
        explanation: {
          en: "The second position refers to controlling the squares immediately behind the center squares, providing support and flexibility for pieces advancing to or occupying the center.",
          es: "La segunda posición se refiere a controlar las casillas inmediatamente detrás de las casillas centrales, proporcionando apoyo y flexibilidad para piezas que avanzan o ocupan el centro.",
          de: "Die zweite Position bezieht sich auf die Kontrolle der Felder unmittelbar hinter den zentralen Feldern, was Unterstützung und Flexibilität für Steine bietet, die zum Zentrum vorrücken oder es besetzen.",
          nl: "De tweede positie verwijst naar het beheersen van de vakjes direct achter de centrale vakjes, wat ondersteuning en flexibiliteit biedt voor stenen die naar het centrum oprukken of het bezetten."
        }
      },
      {
        question: {
          en: "What is a 'runaway checker'?",
          es: "¿Qué es una 'dama fugitiva'?",
          de: "Was ist ein 'Ausreißer-Stein'?",
          nl: "Wat is een 'weglopende dam'?"
        },
        options: [
          { en: "A piece that advances rapidly toward promotion", es: "Una pieza que avanza rápidamente hacia la promoción", de: "Ein Stein, der schnell zur Beförderung vorrückt", nl: "Een steen die snel opruk naar promotie" },
          { en: "A king escaping capture", es: "Un rey escapando de captura", de: "Eine Dame, die einem Schlag entkommt", nl: "Een dam die aan slaan ontsnapt" },
          { en: "A piece that violates the rules", es: "Una pieza que viola las reglas", de: "Ein Stein, der die Regeln verletzt", nl: "Een steen die de regels overtreedt" },
          { en: "A piece moving backward illegally", es: "Una pieza moviéndose ilegalmente hacia atrás", de: "Ein Stein, der sich illegal rückwärts bewegt", nl: "Een steen die illegaal achteruit beweegt" }
        ],
        correct: 0,
        explanation: {
          en: "A runaway checker is a piece that has a clear path to the opponent's king row with no enemy pieces able to stop it from promoting, often creating a decisive advantage.",
          es: "Una dama fugitiva es una pieza que tiene un camino claro hacia la fila del rey del oponente sin piezas enemigas capaces de detener su promoción, a menudo creando una ventaja decisiva.",
          de: "Ein Ausreißer-Stein ist ein Stein, der einen freien Weg zur Damenreihe des Gegners hat, ohne dass gegnerische Steine ihn von der Beförderung abhalten können, was oft einen entscheidenden Vorteil schafft.",
          nl: "Een weglopende dam is een steen die een vrije weg heeft naar de damrij van de tegenstander zonder dat vijandelijke stenen hem kunnen stoppen van promoveren, wat vaak een beslissend voordeel creëert."
        }
      },
      {
        question: {
          en: "What is the purpose of the 'blockade' strategy?",
          es: "¿Cuál es el propósito de la estrategia de 'bloqueo'?",
          de: "Was ist der Zweck der 'Blockade'-Strategie?",
          nl: "Wat is het doel van de 'blokkade'-strategie?"
        },
        options: [
          { en: "Prevent opponent pieces from advancing", es: "Evitar que las piezas del oponente avancen", de: "Verhindern, dass gegnerische Steine vorrücken", nl: "Voorkomen dat stenen van de tegenstander oprukken" },
          { en: "Block your own retreat", es: "Bloquear tu propia retirada", de: "Den eigenen Rückzug blockieren", nl: "Je eigen terugtocht blokkeren" },
          { en: "Stop the game clock", es: "Detener el reloj del juego", de: "Die Spieluhr anhalten", nl: "De spelklok stoppen" },
          { en: "Create a wall on one edge", es: "Crear una pared en un borde", de: "Eine Mauer an einem Rand bilden", nl: "Een muur aan één rand creëren" }
        ],
        correct: 0,
        explanation: {
          en: "A blockade strategy involves positioning your pieces to restrict the opponent's mobility and prevent their pieces from advancing, especially blocking potential kings from reaching your back row.",
          es: "Una estrategia de bloqueo implica posicionar tus piezas para restringir la movilidad del oponente y evitar que sus piezas avancen, especialmente bloqueando reyes potenciales de llegar a tu última fila.",
          de: "Eine Blockade-Strategie beinhaltet das Positionieren deiner Steine, um die Mobilität des Gegners einzuschränken und zu verhindern, dass seine Steine vorrücken, besonders das Blockieren potenzieller Damen vom Erreichen deiner letzten Reihe.",
          nl: "Een blokkade-strategie houdt in dat je je stenen positioneert om de mobiliteit van de tegenstander te beperken en te voorkomen dat hun stenen oprukken, vooral het blokkeren van potentiële dammen van het bereiken van je achterste rij."
        }
      },
      {
        question: {
          en: "What does 'the move' refer to in positional play?",
          es: "¿A qué se refiere 'el movimiento' en el juego posicional?",
          de: "Worauf bezieht sich 'der Zug' im Positionsspiel?",
          nl: "Waar verwijst 'de zet' naar in positioneel spel?"
        },
        options: [
          { en: "Who has the turn to play", es: "Quién tiene el turno de jugar", de: "Wer am Zug ist", nl: "Wie er aan de beurt is" },
          { en: "The best possible move", es: "El mejor movimiento posible", de: "Der bestmögliche Zug", nl: "De best mogelijke zet" },
          { en: "A mandatory capture", es: "Una captura obligatoria", de: "Ein obligatorischer Schlag", nl: "Een verplichte slag" },
          { en: "The final winning move", es: "El movimiento ganador final", de: "Der finale gewinnende Zug", nl: "De finale winnende zet" }
        ],
        correct: 0,
        explanation: {
          en: "In positional play, 'having the move' means it's your turn, which is significant because in many positions, the player to move has a decisive advantage or can force a favorable outcome.",
          es: "En el juego posicional, 'tener el movimiento' significa que es tu turno, lo cual es significativo porque en muchas posiciones, el jugador que mueve tiene una ventaja decisiva o puede forzar un resultado favorable.",
          de: "Im Positionsspiel bedeutet 'den Zug haben', dass du am Zug bist, was bedeutend ist, weil in vielen Positionen der Spieler am Zug einen entscheidenden Vorteil hat oder ein günstiges Ergebnis erzwingen kann.",
          nl: "In positioneel spel betekent 'de zet hebben' dat het jouw beurt is, wat belangrijk is omdat in veel posities de speler aan zet een beslissend voordeel heeft of een gunstig resultaat kan forceren."
        }
      },
      {
        question: {
          en: "What is a 'checker squeeze'?",
          es: "¿Qué es un 'apretón de damas'?",
          de: "Was ist ein 'Dame-Druck'?",
          nl: "Wat is een 'dam-knel'?"
        },
        options: [
          { en: "Forcing opponent into zugzwang", es: "Forzar al oponente a zugzwang", de: "Den Gegner in Zugzwang zwingen", nl: "De tegenstander in zugzwang dwingen" },
          { en: "Compressing pieces into corner", es: "Comprimir piezas en la esquina", de: "Steine in die Ecke komprimieren", nl: "Stenen in de hoek samenpersen" },
          { en: "Physically squeezing the pieces", es: "Apretar físicamente las piezas", de: "Die Steine physisch drücken", nl: "De stenen fysiek knijpen" },
          { en: "Reducing time on the clock", es: "Reducir tiempo en el reloj", de: "Zeit auf der Uhr reduzieren", nl: "Tijd op de klok verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "A checker squeeze forces your opponent into a position where any move they make worsens their position (zugzwang), giving you a tactical or strategic advantage.",
          es: "Un apretón de damas fuerza a tu oponente a una posición donde cualquier movimiento que haga empeora su posición (zugzwang), dándote una ventaja táctica o estratégica.",
          de: "Ein Dame-Druck zwingt deinen Gegner in eine Position, wo jeder Zug, den er macht, seine Position verschlechtert (Zugzwang), was dir einen taktischen oder strategischen Vorteil gibt.",
          nl: "Een dam-knel dwingt je tegenstander in een positie waar elke zet die hij doet zijn positie verslechtert (zugzwang), wat jou een tactisch of strategisch voordeel geeft."
        }
      },
      {
        question: {
          en: "What is the 'pairing' principle in checkers?",
          es: "¿Qué es el principio de 'emparejamiento' en las damas?",
          de: "Was ist das 'Paarungs'-Prinzip beim Dame?",
          nl: "Wat is het 'koppel'-principe bij dammen?"
        },
        options: [
          { en: "Keeping pieces in mutual support pairs", es: "Mantener piezas en pares de apoyo mutuo", de: "Steine in gegenseitigen Unterstützungspaaren halten", nl: "Stenen in wederzijdse ondersteunende paren houden" },
          { en: "Playing in doubles format", es: "Jugar en formato de dobles", de: "Im Doppelformat spielen", nl: "In dubbel formaat spelen" },
          { en: "Matching opponent's every move", es: "Igualar cada movimiento del oponente", de: "Jeden Zug des Gegners nachahmen", nl: "Elke zet van de tegenstander matchen" },
          { en: "Grouping pieces by color", es: "Agrupar piezas por color", de: "Steine nach Farbe gruppieren", nl: "Stenen groeperen op kleur" }
        ],
        correct: 0,
        explanation: {
          en: "The pairing principle involves keeping pieces close together in mutually supportive positions, where they can protect each other and create stronger defensive or offensive formations.",
          es: "El principio de emparejamiento implica mantener piezas cerca juntas en posiciones de apoyo mutuo, donde pueden protegerse mutuamente y crear formaciones defensivas u ofensivas más fuertes.",
          de: "Das Paarungsprinzip beinhaltet, Steine in gegenseitiger Unterstützung zusammenzuhalten, wo sie sich gegenseitig schützen und stärkere defensive oder offensive Formationen schaffen können.",
          nl: "Het koppelprincipe houdt in dat je stenen dicht bij elkaar houdt in wederzijds ondersteunende posities, waar ze elkaar kunnen beschermen en sterkere defensieve of offensieve formaties kunnen creëren."
        }
      },
      {
        question: {
          en: "What is 'zugzwang' in checkers?",
          es: "¿Qué es 'zugzwang' en las damas?",
          de: "Was ist 'Zugzwang' beim Dame?",
          nl: "Wat is 'zugzwang' bij dammen?"
        },
        options: [
          { en: "Being forced to move when any move worsens position", es: "Verse forzado a mover cuando cualquier movimiento empeora la posición", de: "Gezwungen sein zu ziehen, wenn jeder Zug die Position verschlechtert", nl: "Gedwongen zijn te zetten wanneer elke zet de positie verslechtert" },
          { en: "A German opening strategy", es: "Una estrategia de apertura alemana", de: "Eine deutsche Eröffnungsstrategie", nl: "Een Duitse openingsstrategie" },
          { en: "Capturing with a king", es: "Capturar con un rey", de: "Mit einer Dame schlagen", nl: "Slaan met een dam" },
          { en: "A mandatory jump rule", es: "Una regla de salto obligatorio", de: "Eine obligatorische Sprung-Regel", nl: "Een verplichte sprong-regel" }
        ],
        correct: 0,
        explanation: {
          en: "Zugzwang is a situation where a player is forced to move but any legal move will worsen their position, often leading to a loss of material or the game.",
          es: "Zugzwang es una situación donde un jugador se ve forzado a mover pero cualquier movimiento legal empeorará su posición, a menudo llevando a la pérdida de material o del juego.",
          de: "Zugzwang ist eine Situation, in der ein Spieler gezwungen ist zu ziehen, aber jeder legale Zug seine Position verschlechtert, was oft zum Verlust von Material oder des Spiels führt.",
          nl: "Zugzwang is een situatie waarbij een speler gedwongen is te zetten maar elke legale zet zijn positie verslechtert, vaak leidend tot verlies van materiaal of het spel."
        }
      },
      {
        question: {
          en: "What is the 'triangle' formation?",
          es: "¿Qué es la formación de 'triángulo'?",
          de: "Was ist die 'Dreieck'-Formation?",
          nl: "Wat is de 'driehoek'-formatie?"
        },
        options: [
          { en: "Three pieces arranged in mutual support", es: "Tres piezas dispuestas en apoyo mutuo", de: "Drei Steine in gegenseitiger Unterstützung angeordnet", nl: "Drie stenen gerangschikt in wederzijdse ondersteuning" },
          { en: "A three-player game variant", es: "Una variante de juego de tres jugadores", de: "Eine Drei-Spieler-Spielvariante", nl: "Een drie-spelers spelvariant" },
          { en: "Pieces in three rows", es: "Piezas en tres filas", de: "Steine in drei Reihen", nl: "Stenen in drie rijen" },
          { en: "A three-move combination", es: "Una combinación de tres movimientos", de: "Eine Drei-Zug-Kombination", nl: "Een drie-zetten combinatie" }
        ],
        correct: 0,
        explanation: {
          en: "The triangle formation consists of three pieces arranged to protect each other, creating a strong defensive structure that's difficult for opponents to break through.",
          es: "La formación de triángulo consiste en tres piezas dispuestas para protegerse mutuamente, creando una estructura defensiva fuerte que es difícil de atravesar para los oponentes.",
          de: "Die Dreieck-Formation besteht aus drei Steinen, die so angeordnet sind, dass sie sich gegenseitig schützen und eine starke Defensivstruktur schaffen, die für Gegner schwer zu durchbrechen ist.",
          nl: "De driehoek-formatie bestaat uit drie stenen die zo gerangschikt zijn dat ze elkaar beschermen, wat een sterke defensieve structuur creëert die moeilijk te doorbreken is voor tegenstanders."
        }
      },
      {
        question: {
          en: "What is meant by 'initiative' in checkers?",
          es: "¿Qué se entiende por 'iniciativa' en las damas?",
          de: "Was bedeutet 'Initiative' beim Dame?",
          nl: "Wat wordt bedoeld met 'initiatief' bij dammen?"
        },
        options: [
          { en: "Making the first move of the game", es: "Hacer el primer movimiento del juego", de: "Den ersten Zug des Spiels machen", nl: "De eerste zet van het spel doen" },
          { en: "Controlling the flow and forcing opponent to react", es: "Controlar el flujo y forzar al oponente a reaccionar", de: "Den Spielfluss kontrollieren und den Gegner zum Reagieren zwingen", nl: "De flow controleren en de tegenstander dwingen te reageren" },
          { en: "Starting a new game", es: "Comenzar un nuevo juego", de: "Ein neues Spiel beginnen", nl: "Een nieuw spel starten" },
          { en: "Proposing rule changes", es: "Proponer cambios de reglas", de: "Regeländerungen vorschlagen", nl: "Regelwijzigingen voorstellen" }
        ],
        correct: 1,
        explanation: {
          en: "Having the initiative means you're making threats and forcing your opponent to respond defensively, controlling the tempo and direction of the game rather than reacting to their moves.",
          es: "Tener la iniciativa significa que estás haciendo amenazas y forzando a tu oponente a responder defensivamente, controlando el tempo y dirección del juego en lugar de reaccionar a sus movimientos.",
          de: "Die Initiative zu haben bedeutet, dass du Drohungen machst und deinen Gegner zwingst, defensiv zu reagieren, wobei du das Tempo und die Richtung des Spiels kontrollierst, anstatt auf seine Züge zu reagieren.",
          nl: "Het initiatief hebben betekent dat je bedreigingen maakt en je tegenstander dwingt defensief te reageren, waarbij je het tempo en de richting van het spel controleert in plaats van te reageren op hun zetten."
        }
      },
      {
        question: {
          en: "What is a 'free move' in checkers?",
          es: "¿Qué es un 'movimiento libre' en las damas?",
          de: "Was ist ein 'freier Zug' beim Dame?",
          nl: "Wat is een 'vrije zet' bij dammen?"
        },
        options: [
          { en: "A move that doesn't cost material or position", es: "Un movimiento que no cuesta material o posición", de: "Ein Zug, der kein Material oder Position kostet", nl: "Een zet die geen materiaal of positie kost" },
          { en: "Moving without the opponent watching", es: "Moverse sin que el oponente mire", de: "Ziehen ohne dass der Gegner zuschaut", nl: "Zetten zonder dat de tegenstander kijkt" },
          { en: "A bonus turn", es: "Un turno de bonificación", de: "Ein Bonus-Zug", nl: "Een bonus beurt" },
          { en: "Skipping a mandatory capture", es: "Saltarse una captura obligatoria", de: "Einen obligatorischen Schlag überspringen", nl: "Een verplichte slag overslaan" }
        ],
        correct: 0,
        explanation: {
          en: "A free move is one that improves your position or maintains it without any cost in material or positional disadvantage, essentially gaining tempo or improving your setup without sacrifice.",
          es: "Un movimiento libre es uno que mejora tu posición o la mantiene sin ningún costo en material o desventaja posicional, esencialmente ganando tempo o mejorando tu configuración sin sacrificio.",
          de: "Ein freier Zug ist einer, der deine Position verbessert oder aufrechterhält ohne Kosten in Material oder Positionsnachteil, im Wesentlichen Tempo gewinnend oder deine Aufstellung verbessernd ohne Opfer.",
          nl: "Een vrije zet is er één die je positie verbetert of behoudt zonder enige kosten in materiaal of positioneel nadeel, in wezen tempo winnend of je opstelling verbeterend zonder offer."
        }
      },
      {
        question: {
          en: "What is the 'opposition of kings' endgame concept?",
          es: "¿Qué es el concepto de final de 'oposición de reyes'?",
          de: "Was ist das 'Opposition der Damen'-Endspielkonzept?",
          nl: "Wat is het 'oppositie van dammen'-eindspel concept?"
        },
        options: [
          { en: "Two kings facing each other with the move deciding the outcome", es: "Dos reyes enfrentándose con el movimiento decidiendo el resultado", de: "Zwei Damen gegenüber mit dem Zug, der das Ergebnis entscheidet", nl: "Twee dammen tegenover elkaar met de zet die de uitkomst bepaalt" },
          { en: "Kings on opposite sides of the board", es: "Reyes en lados opuestos del tablero", de: "Damen auf gegenüberliegenden Seiten des Bretts", nl: "Dammen aan tegenovergestelde kanten van het bord" },
          { en: "Kings of different colors", es: "Reyes de diferentes colores", de: "Damen verschiedener Farben", nl: "Dammen van verschillende kleuren" },
          { en: "Disagreement between two players", es: "Desacuerdo entre dos jugadores", de: "Meinungsverschiedenheit zwischen zwei Spielern", nl: "Meningsverschil tussen twee spelers" }
        ],
        correct: 0,
        explanation: {
          en: "Opposition of kings occurs in endgames where two kings face each other diagonally and whoever has the move (or doesn't have it, depending on position) wins, making tempo crucial.",
          es: "La oposición de reyes ocurre en finales donde dos reyes se enfrentan diagonalmente y quien tiene el movimiento (o no lo tiene, dependiendo de la posición) gana, haciendo el tempo crucial.",
          de: "Opposition der Damen tritt in Endspielen auf, wo zwei Damen sich diagonal gegenüberstehen und wer den Zug hat (oder nicht hat, je nach Position) gewinnt, was Tempo entscheidend macht.",
          nl: "Oppositie van dammen treedt op in eindspelen waar twee dammen elkaar diagonaal tegenoverstaan en wie de zet heeft (of niet heeft, afhankelijk van de positie) wint, wat tempo cruciaal maakt."
        }
      },
      {
        question: {
          en: "What is 'counting tempo' in checkers?",
          es: "¿Qué es 'contar tempo' en las damas?",
          de: "Was ist 'Tempo zählen' beim Dame?",
          nl: "Wat is 'tempo tellen' bij dammen?"
        },
        options: [
          { en: "Calculating how many moves to reach a goal", es: "Calcular cuántos movimientos para alcanzar un objetivo", de: "Berechnen, wie viele Züge ein Ziel erreicht wird", nl: "Berekenen hoeveel zetten nodig zijn om een doel te bereiken" },
          { en: "Timing moves with music", es: "Cronometrar movimientos con música", de: "Züge mit Musik timen", nl: "Zetten timen met muziek" },
          { en: "Measuring game speed", es: "Medir la velocidad del juego", de: "Spielgeschwindigkeit messen", nl: "Spelsnelheid meten" },
          { en: "Using a chess clock", es: "Usar un reloj de ajedrez", de: "Eine Schachuhr verwenden", nl: "Een schaakklok gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Counting tempo means calculating the number of moves needed for each side to achieve their goal (like promoting a piece), which helps determine who will win a race to promotion or other objectives.",
          es: "Contar tempo significa calcular el número de movimientos necesarios para que cada lado logre su objetivo (como promocionar una pieza), lo que ayuda a determinar quién ganará una carrera hacia la promoción u otros objetivos.",
          de: "Tempo zählen bedeutet die Anzahl der Züge zu berechnen, die jede Seite benötigt, um ihr Ziel zu erreichen (wie einen Stein zu befördern), was hilft zu bestimmen, wer ein Rennen zur Beförderung oder andere Ziele gewinnt.",
          nl: "Tempo tellen betekent het aantal zetten berekenen dat elke kant nodig heeft om hun doel te bereiken (zoals een steen promoveren), wat helpt bepalen wie een race naar promotie of andere doelstellingen zal winnen."
        }
      },
      {
        question: {
          en: "What is a 'key square' in checkers endgames?",
          es: "¿Qué es una 'casilla clave' en finales de damas?",
          de: "Was ist ein 'Schlüsselfeld' in Dame-Endspielen?",
          nl: "Wat is een 'sleutelvakje' in dam-eindspelen?"
        },
        options: [
          { en: "A square that controls the outcome if occupied", es: "Una casilla que controla el resultado si es ocupada", de: "Ein Feld, das das Ergebnis kontrolliert, wenn es besetzt wird", nl: "Een vakje dat de uitkomst controleert als het bezet is" },
          { en: "The square with a key symbol", es: "La casilla con un símbolo de llave", de: "Das Feld mit einem Schlüsselsymbol", nl: "Het vakje met een sleutelsymbool" },
          { en: "The center square of the board", es: "La casilla central del tablero", de: "Das zentrale Feld des Bretts", nl: "Het centrale vakje van het bord" },
          { en: "Where pieces are stored off-board", es: "Donde se guardan las piezas fuera del tablero", de: "Wo Steine außerhalb des Bretts aufbewahrt werden", nl: "Waar stenen buiten het bord worden bewaard" }
        ],
        correct: 0,
        explanation: {
          en: "A key square is a critical square in an endgame that, when controlled or occupied by a piece, determines the outcome of the game, often securing a win or forcing a draw.",
          es: "Una casilla clave es una casilla crítica en un final que, cuando es controlada u ocupada por una pieza, determina el resultado del juego, a menudo asegurando una victoria o forzando un empate.",
          de: "Ein Schlüsselfeld ist ein kritisches Feld in einem Endspiel, das, wenn es von einem Stein kontrolliert oder besetzt wird, das Ergebnis des Spiels bestimmt, oft einen Sieg sichert oder ein Unentschieden erzwingt.",
          nl: "Een sleutelvakje is een kritiek vakje in een eindspel dat, wanneer het gecontroleerd of bezet wordt door een steen, de uitkomst van het spel bepaalt, vaak een overwinning veiligstelt of een remise forceert."
        }
      },
      {
        question: {
          en: "What does it mean to 'develop' pieces in the opening?",
          es: "¿Qué significa 'desarrollar' piezas en la apertura?",
          de: "Was bedeutet es, Steine in der Eröffnung zu 'entwickeln'?",
          nl: "Wat betekent het om stenen te 'ontwikkelen' in de opening?"
        },
        options: [
          { en: "Move them from starting position toward the center", es: "Moverlas desde la posición inicial hacia el centro", de: "Sie von der Startposition zur Mitte bewegen", nl: "Ze van de startpositie naar het centrum bewegen" },
          { en: "Promote them to kings quickly", es: "Promocionarlas a reyes rápidamente", de: "Sie schnell zu Damen befördern", nl: "Ze snel tot dammen promoveren" },
          { en: "Capture opponent pieces early", es: "Capturar piezas del oponente temprano", de: "Früh gegnerische Steine schlagen", nl: "Vroeg stenen van tegenstander slaan" },
          { en: "Arrange them in formation", es: "Organizarlas en formación", de: "Sie in Formation anordnen", nl: "Ze in formatie rangschikken" }
        ],
        correct: 0,
        explanation: {
          en: "Developing pieces means moving them from their starting positions toward more active squares, typically toward the center where they have more influence and mobility.",
          es: "Desarrollar piezas significa moverlas desde sus posiciones iniciales hacia casillas más activas, típicamente hacia el centro donde tienen más influencia y movilidad.",
          de: "Steine entwickeln bedeutet, sie von ihren Startpositionen zu aktiveren Feldern zu bewegen, typischerweise zum Zentrum, wo sie mehr Einfluss und Mobilität haben.",
          nl: "Stenen ontwikkelen betekent ze van hun startposities naar meer actieve vakjes bewegen, typisch naar het centrum waar ze meer invloed en mobiliteit hebben."
        }
      },
      {
        question: {
          en: "What is the 'minority attack' strategy?",
          es: "¿Qué es la estrategia de 'ataque minoritario'?",
          de: "Was ist die 'Minderheitsangriffs'-Strategie?",
          nl: "Wat is de 'minderheidsaanval'-strategie?"
        },
        options: [
          { en: "Attacking with fewer pieces against opponent's majority", es: "Atacar con menos piezas contra la mayoría del oponente", de: "Mit weniger Steinen gegen die Mehrheit des Gegners angreifen", nl: "Aanvallen met minder stenen tegen de meerderheid van de tegenstander" },
          { en: "Only using regular pieces to attack", es: "Solo usar piezas regulares para atacar", de: "Nur normale Steine zum Angreifen verwenden", nl: "Alleen gewone stenen gebruiken om aan te vallen" },
          { en: "Attacking with young players", es: "Atacar con jugadores jóvenes", de: "Mit jungen Spielern angreifen", nl: "Aanvallen met jonge spelers" },
          { en: "Making small, incremental threats", es: "Hacer amenazas pequeñas e incrementales", de: "Kleine, inkrementelle Drohungen machen", nl: "Kleine, incrementele bedreigingen maken" }
        ],
        correct: 0,
        explanation: {
          en: "The minority attack involves using a smaller group of pieces on one wing to attack the opponent's larger group there, aiming to create weaknesses or force favorable exchanges.",
          es: "El ataque minoritario implica usar un grupo más pequeño de piezas en un ala para atacar el grupo más grande del oponente allí, con el objetivo de crear debilidades o forzar intercambios favorables.",
          de: "Der Minderheitsangriff beinhaltet die Verwendung einer kleineren Gruppe von Steinen auf einem Flügel, um die größere Gruppe des Gegners dort anzugreifen, mit dem Ziel, Schwächen zu schaffen oder günstige Tausche zu erzwingen.",
          nl: "De minderheidsaanval houdt in dat je een kleinere groep stenen op één vleugel gebruikt om de grotere groep van de tegenstander daar aan te vallen, met als doel zwaktes te creëren of gunstige ruilen te forceren."
        }
      },
      {
        question: {
          en: "What is a 'quiet move' in checkers?",
          es: "¿Qué es un 'movimiento silencioso' en las damas?",
          de: "Was ist ein 'ruhiger Zug' beim Dame?",
          nl: "Wat is een 'rustige zet' bij dammen?"
        },
        options: [
          { en: "A non-capturing move that improves position subtly", es: "Un movimiento sin captura que mejora la posición sutilmente", de: "Ein nicht-schlagender Zug, der die Position subtil verbessert", nl: "Een niet-slaande zet die de positie subtiel verbetert" },
          { en: "Moving without making noise", es: "Moverse sin hacer ruido", de: "Sich bewegen ohne Geräusche zu machen", nl: "Bewegen zonder geluid te maken" },
          { en: "A move in the back row", es: "Un movimiento en la fila trasera", de: "Ein Zug in der hinteren Reihe", nl: "Een zet in de achterste rij" },
          { en: "Passing your turn", es: "Pasar tu turno", de: "Deinen Zug passen", nl: "Je beurt passen" }
        ],
        correct: 0,
        explanation: {
          en: "A quiet move is a non-forcing, non-capturing move that subtly improves your position, prepares a combination, or strengthens your structure without making immediate threats.",
          es: "Un movimiento silencioso es un movimiento no forzado, sin captura que sutilmente mejora tu posición, prepara una combinación, o fortalece tu estructura sin hacer amenazas inmediatas.",
          de: "Ein ruhiger Zug ist ein nicht-erzwingender, nicht-schlagender Zug, der deine Position subtil verbessert, eine Kombination vorbereitet oder deine Struktur stärkt, ohne unmittelbare Drohungen zu machen.",
          nl: "Een rustige zet is een niet-forceerende, niet-slaande zet die subtiel je positie verbetert, een combinatie voorbereidt, of je structuur versterkt zonder onmiddellijke bedreigingen te maken."
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
