// Quiz Template - Level 3: Board Games - Checkers
(function() {
  const level3 = {
    name: {
      en: "Checkers/Draughts - Advanced",
      es: "Damas - Avanzado",
      de: "Dame - Fortgeschritten",
      nl: "Dammen - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What is a 'stroke' in checkers terminology?",
          es: "¿Qué es un 'golpe' en la terminología de damas?",
          de: "Was ist ein 'Schlag' in der Dame-Terminologie?",
          nl: "Wat is een 'slag' in damterminologie?"
        },
        options: [
          { en: "A forced capture sequence", es: "Una secuencia de captura forzada", de: "Eine erzwungene Schlagsequenz", nl: "Een gedwongen slagreeks" },
          { en: "Moving a king across the board", es: "Mover un rey a través del tablero", de: "Eine Dame über das Brett bewegen", nl: "Een dam over het bord bewegen" },
          { en: "A single capture by a king", es: "Una captura única de un rey", de: "Ein einzelner Schlag durch eine Dame", nl: "Een enkele slag door een dam" },
          { en: "A defensive maneuver", es: "Una maniobra defensiva", de: "Ein defensives Manöver", nl: "Een defensief manoeuvre" }
        ],
        correct: 0,
        explanation: {
          en: "A stroke is a forced capture sequence where one player must make multiple jumps according to the rules, often resulting from a tactical setup by the opponent.",
          es: "Un golpe es una secuencia de captura forzada donde un jugador debe hacer múltiples saltos según las reglas, a menudo resultando de una configuración táctica del oponente.",
          de: "Ein Schlag ist eine erzwungene Schlagsequenz, bei der ein Spieler gemäß den Regeln mehrere Sprünge machen muss, oft als Ergebnis einer taktischen Aufstellung des Gegners.",
          nl: "Een slag is een gedwongen slagreeks waarbij een speler meerdere sprongen moet maken volgens de regels, vaak het resultaat van een tactische opstelling door de tegenstander."
        }
      },
      {
        question: {
          en: "What is the 'Bristol opening' in checkers?",
          es: "¿Qué es la 'apertura Bristol' en las damas?",
          de: "Was ist die 'Bristol-Eröffnung' beim Dame-Spiel?",
          nl: "Wat is de 'Bristol-opening' bij dammen?"
        },
        options: [
          { en: "11-15, advancing the leftmost piece", es: "11-15, avanzando la pieza más a la izquierda", de: "11-15, Vorrücken des linken Steins", nl: "11-15, de meest linkse steen vooruit zetten" },
          { en: "9-13, controlling the center", es: "9-13, controlando el centro", de: "9-13, Kontrolle des Zentrums", nl: "9-13, het centrum beheersen" },
          { en: "10-14, the double corner attack", es: "10-14, el ataque de esquina doble", de: "10-14, der Doppeleckenangriff", nl: "10-14, de dubbele hoekaanval" },
          { en: "12-16, the king's gambit", es: "12-16, el gambito del rey", de: "12-16, das Damengambit", nl: "12-16, het damgambiet" }
        ],
        correct: 0,
        explanation: {
          en: "The Bristol opening starts with 11-15, moving the piece on square 11 to square 15. It's one of the most popular and analyzed openings in checkers, leading to complex middlegame positions.",
          es: "La apertura Bristol comienza con 11-15, moviendo la pieza en la casilla 11 a la casilla 15. Es una de las aperturas más populares y analizadas en las damas, llevando a posiciones complejas de medio juego.",
          de: "Die Bristol-Eröffnung beginnt mit 11-15, wobei der Stein von Feld 11 auf Feld 15 bewegt wird. Es ist eine der beliebtesten und am meisten analysierten Eröffnungen im Dame-Spiel, die zu komplexen Mittelspiel-Positionen führt.",
          nl: "De Bristol-opening begint met 11-15, waarbij de steen op vak 11 naar vak 15 wordt verplaatst. Het is een van de meest populaire en geanalyseerde openingen in dammen, leidend tot complexe middenspelposities."
        }
      },
      {
        question: {
          en: "What is an 'in-and-out' move in checkers?",
          es: "¿Qué es un movimiento 'dentro y fuera' en las damas?",
          de: "Was ist ein 'Rein-und-Raus'-Zug beim Dame-Spiel?",
          nl: "Wat is een 'in-en-uit'-zet bij dammen?"
        },
        options: [
          { en: "Moving a piece to the edge and back", es: "Mover una pieza al borde y de vuelta", de: "Einen Stein zum Rand und zurück bewegen", nl: "Een steen naar de rand en terug bewegen" },
          { en: "Jumping over a piece and landing in the same diagonal", es: "Saltar sobre una pieza y aterrizar en la misma diagonal", de: "Über einen Stein springen und auf derselben Diagonale landen", nl: "Over een steen springen en op dezelfde diagonaal landen" },
          { en: "A king moving forward then backward", es: "Un rey moviéndose hacia adelante y luego hacia atrás", de: "Eine Dame, die vorwärts und dann rückwärts zieht", nl: "Een dam die vooruit en dan achteruit beweegt" },
          { en: "A sacrifice and immediate recapture", es: "Un sacrificio y recaptura inmediata", de: "Ein Opfer und sofortige Rückeroberung", nl: "Een offer en onmiddellijke terugslag" }
        ],
        correct: 3,
        explanation: {
          en: "An in-and-out move is a tactical sequence where you sacrifice a piece that is immediately recaptured, often as part of a larger combination to gain positional advantage or set up further captures.",
          es: "Un movimiento dentro y fuera es una secuencia táctica donde sacrificas una pieza que es recapturada inmediatamente, a menudo como parte de una combinación más grande para ganar ventaja posicional o preparar más capturas.",
          de: "Ein Rein-und-Raus-Zug ist eine taktische Sequenz, bei der Sie einen Stein opfern, der sofort zurückgeschlagen wird, oft als Teil einer größeren Kombination, um Positionsvorteil zu erlangen oder weitere Schläge vorzubereiten.",
          nl: "Een in-en-uit-zet is een tactische reeks waarbij je een steen offert die onmiddellijk wordt teruggeslagen, vaak als onderdeel van een grotere combinatie om positievoordeel te krijgen of verdere slagen op te zetten."
        }
      },
      {
        question: {
          en: "What is the 'Second Position' in checkers endgame theory?",
          es: "¿Qué es la 'Segunda Posición' en la teoría del final de damas?",
          de: "Was ist die 'Zweite Position' in der Dame-Endspieltheorie?",
          nl: "Wat is de 'Tweede Positie' in de dammen eindspeltheorie?"
        },
        options: [
          { en: "Having two kings versus one", es: "Tener dos reyes contra uno", de: "Zwei Damen gegen eine haben", nl: "Twee dammen tegen één hebben" },
          { en: "A specific winning endgame configuration", es: "Una configuración de final ganador específica", de: "Eine spezifische gewinnende Endspielkonfiguration", nl: "Een specifieke winnende eindspelconfiguratie" },
          { en: "The runner-up position in a tournament", es: "La posición de subcampeón en un torneo", de: "Die Zweitplatzierte Position in einem Turnier", nl: "De tweede plaats in een toernooi" },
          { en: "Controlling the second row", es: "Controlar la segunda fila", de: "Kontrolle der zweiten Reihe", nl: "De tweede rij beheersen" }
        ],
        correct: 1,
        explanation: {
          en: "The Second Position is a classic endgame scenario where specific piece placements lead to a theoretically winning position. It's one of several fundamental endgame positions every advanced player must know.",
          es: "La Segunda Posición es un escenario de final clásico donde ubicaciones específicas de piezas llevan a una posición teóricamente ganadora. Es una de varias posiciones de final fundamentales que todo jugador avanzado debe conocer.",
          de: "Die Zweite Position ist ein klassisches Endspielszenario, bei dem spezifische Steinplatzierungen zu einer theoretisch gewinnenden Position führen. Es ist eine von mehreren fundamentalen Endspiel-Positionen, die jeder fortgeschrittene Spieler kennen muss.",
          nl: "De Tweede Positie is een klassiek eindspelscenario waarbij specifieke steenplaatsingen leiden tot een theoretisch winnende positie. Het is een van verschillende fundamentele eindspelposities die elke gevorderde speler moet kennen."
        }
      },
      {
        question: {
          en: "What is a 'pitch' in checkers?",
          es: "¿Qué es un 'lanzamiento' en las damas?",
          de: "Was ist ein 'Wurf' beim Dame-Spiel?",
          nl: "Wat is een 'worp' bij dammen?"
        },
        options: [
          { en: "Throwing your pieces at the opponent", es: "Lanzar tus piezas al oponente", de: "Deine Steine auf den Gegner werfen", nl: "Je stenen naar de tegenstander gooien" },
          { en: "A deliberate sacrifice to create an opportunity", es: "Un sacrificio deliberado para crear una oportunidad", de: "Ein absichtliches Opfer, um eine Gelegenheit zu schaffen", nl: "Een opzettelijk offer om een kans te creëren" },
          { en: "The angle of a diagonal move", es: "El ángulo de un movimiento diagonal", de: "Der Winkel eines diagonalen Zugs", nl: "De hoek van een diagonale zet" },
          { en: "A type of opening strategy", es: "Un tipo de estrategia de apertura", de: "Eine Art Eröffnungsstrategie", nl: "Een soort openingsstrategie" }
        ],
        correct: 1,
        explanation: {
          en: "A pitch is a tactical sacrifice where you deliberately offer a piece to be captured in order to gain a favorable position or force a winning combination in subsequent moves.",
          es: "Un lanzamiento es un sacrificio táctico donde deliberadamente ofreces una pieza para ser capturada con el fin de ganar una posición favorable o forzar una combinación ganadora en movimientos posteriores.",
          de: "Ein Wurf ist ein taktisches Opfer, bei dem Sie absichtlich einen Stein zum Schlagen anbieten, um eine günstige Position zu erlangen oder in nachfolgenden Zügen eine gewinnende Kombination zu erzwingen.",
          nl: "Een worp is een tactisch offer waarbij je opzettelijk een steen aanbiedt om geslagen te worden om een gunstige positie te krijgen of een winnende combinatie in latere zetten af te dwingen."
        }
      },
      {
        question: {
          en: "What is the key principle of the 'Edinburgh opening'?",
          es: "¿Cuál es el principio clave de la 'apertura de Edimburgo'?",
          de: "Was ist das Schlüsselprinzip der 'Edinburgh-Eröffnung'?",
          nl: "Wat is het sleutelprincipe van de 'Edinburgh-opening'?"
        },
        options: [
          { en: "Aggressive center control from the start", es: "Control agresivo del centro desde el inicio", de: "Aggressive Zentrumskontrolle von Anfang an", nl: "Agressieve centrumcontrole vanaf het begin" },
          { en: "Building a strong defensive formation", es: "Construir una formación defensiva fuerte", de: "Aufbau einer starken defensiven Formation", nl: "Een sterke defensieve formatie opbouwen" },
          { en: "Quick piece development on the flanks", es: "Desarrollo rápido de piezas en los flancos", de: "Schnelle Steinentwicklung an den Flanken", nl: "Snelle steenontwikkeling op de flanken" },
          { en: "Maintaining symmetry with opponent", es: "Mantener simetría con el oponente", de: "Symmetrie mit dem Gegner aufrechterhalten", nl: "Symmetrie met de tegenstander behouden" }
        ],
        correct: 0,
        explanation: {
          en: "The Edinburgh opening (9-14) emphasizes aggressive central control from the first move, aiming to dominate the center squares and restrict opponent mobility early in the game.",
          es: "La apertura de Edimburgo (9-14) enfatiza el control central agresivo desde el primer movimiento, apuntando a dominar las casillas centrales y restringir la movilidad del oponente temprano en el juego.",
          de: "Die Edinburgh-Eröffnung (9-14) betont aggressive Zentrumskontrolle vom ersten Zug an, mit dem Ziel, die zentralen Felder zu dominieren und die Mobilität des Gegners früh im Spiel einzuschränken.",
          nl: "De Edinburgh-opening (9-14) benadrukt agressieve centrumcontrole vanaf de eerste zet, met als doel de centrale vakjes te domineren en de mobiliteit van de tegenstander vroeg in het spel te beperken."
        }
      },
      {
        question: {
          en: "What is 'piece majority' in checkers?",
          es: "¿Qué es 'mayoría de piezas' en las damas?",
          de: "Was ist 'Steinmehrheit' beim Dame-Spiel?",
          nl: "Wat is 'steenmeerderheid' bij dammen?"
        },
        options: [
          { en: "Having more pieces than your opponent", es: "Tener más piezas que tu oponente", de: "Mehr Steine als der Gegner haben", nl: "Meer stenen hebben dan je tegenstander" },
          { en: "Most pieces in the center", es: "La mayoría de piezas en el centro", de: "Die meisten Steine im Zentrum", nl: "De meeste stenen in het centrum" },
          { en: "More pieces on one side of the board", es: "Más piezas en un lado del tablero", de: "Mehr Steine auf einer Seite des Bretts", nl: "Meer stenen aan één kant van het bord" },
          { en: "Having more kings than regular pieces", es: "Tener más reyes que piezas regulares", de: "Mehr Damen als normale Steine haben", nl: "Meer dammen dan gewone stenen hebben" }
        ],
        correct: 2,
        explanation: {
          en: "Piece majority refers to having more pieces concentrated on one side of the board, which can be used to create breakthrough opportunities or overwhelm defenses in that area.",
          es: "La mayoría de piezas se refiere a tener más piezas concentradas en un lado del tablero, lo que puede usarse para crear oportunidades de avance o abrumar las defensas en esa área.",
          de: "Steinmehrheit bezieht sich darauf, mehr Steine auf einer Seite des Bretts konzentriert zu haben, was genutzt werden kann, um Durchbruchsmöglichkeiten zu schaffen oder Verteidigungen in diesem Bereich zu überrumpeln.",
          nl: "Steenmeerderheid verwijst naar het hebben van meer stenen geconcentreerd aan één kant van het bord, wat kan worden gebruikt om doorbraakmogelijkheden te creëren of verdedigingen in dat gebied te overweldigen."
        }
      },
      {
        question: {
          en: "What is the 'Glasgow opening'?",
          es: "¿Qué es la 'apertura Glasgow'?",
          de: "Was ist die 'Glasgow-Eröffnung'?",
          nl: "Wat is de 'Glasgow-opening'?"
        },
        options: [
          { en: "11-16, a solid positional approach", es: "11-16, un enfoque posicional sólido", de: "11-16, ein solider positioneller Ansatz", nl: "11-16, een solide positionele aanpak" },
          { en: "10-15, the aggressive variant", es: "10-15, la variante agresiva", de: "10-15, die aggressive Variante", nl: "10-15, de agressieve variant" },
          { en: "9-13, the classical setup", es: "9-13, la configuración clásica", de: "9-13, die klassische Aufstellung", nl: "9-13, de klassieke opstelling" },
          { en: "12-16, the flanking maneuver", es: "12-16, la maniobra de flanqueo", de: "12-16, das Flankenmanöver", nl: "12-16, het flankmanoeuvre" }
        ],
        correct: 0,
        explanation: {
          en: "The Glasgow opening (11-16) is known for solid, positional play that aims for long-term structural advantages rather than immediate tactical complications.",
          es: "La apertura Glasgow (11-16) es conocida por su juego posicional sólido que apunta a ventajas estructurales a largo plazo en lugar de complicaciones tácticas inmediatas.",
          de: "Die Glasgow-Eröffnung (11-16) ist bekannt für solides, positionelles Spiel, das auf langfristige strukturelle Vorteile abzielt statt auf sofortige taktische Komplikationen.",
          nl: "De Glasgow-opening (11-16) staat bekend om solide, positioneel spel dat streeft naar structurele voordelen op de lange termijn in plaats van onmiddellijke tactische complicaties."
        }
      },
      {
        question: {
          en: "In a triple jump scenario, what rule determines which capture path to take?",
          es: "En un escenario de salto triple, ¿qué regla determina qué ruta de captura tomar?",
          de: "Bei einem Dreifachsprung-Szenario, welche Regel bestimmt, welchen Schlagweg man nehmen soll?",
          nl: "In een drievoudige sprongscenario, welke regel bepaalt welk slagpad je moet nemen?"
        },
        options: [
          { en: "The path that captures the most pieces", es: "El camino que captura más piezas", de: "Der Weg, der die meisten Steine schlägt", nl: "Het pad dat de meeste stenen slaat" },
          { en: "The path chosen by the player", es: "El camino elegido por el jugador", de: "Der vom Spieler gewählte Weg", nl: "Het door de speler gekozen pad" },
          { en: "The clockwise path always", es: "Siempre el camino en sentido horario", de: "Immer der Uhrzeigersinn-Weg", nl: "Altijd het rechtsom pad" },
          { en: "The shortest path to the king row", es: "El camino más corto a la fila del rey", de: "Der kürzeste Weg zur Damenreihe", nl: "Het kortste pad naar de damrij" }
        ],
        correct: 1,
        explanation: {
          en: "In standard American checkers, when multiple jump paths are available, the player has the choice of which path to take. However, once a jump sequence begins, all available jumps in that path must be completed.",
          es: "En las damas americanas estándar, cuando hay múltiples rutas de salto disponibles, el jugador tiene la elección de qué ruta tomar. Sin embargo, una vez que comienza una secuencia de saltos, todos los saltos disponibles en esa ruta deben completarse.",
          de: "Im Standard-amerikanischen Dame, wenn mehrere Sprungwege verfügbar sind, hat der Spieler die Wahl, welchen Weg er nimmt. Sobald jedoch eine Sprungsequenz beginnt, müssen alle verfügbaren Sprünge in diesem Pfad abgeschlossen werden.",
          nl: "In het standaard Amerikaanse dammen, wanneer meerdere sprongpaden beschikbaar zijn, heeft de speler de keuze welk pad te nemen. Echter, zodra een sprongreeks begint, moeten alle beschikbare sprongen in dat pad worden voltooid."
        }
      },
      {
        question: {
          en: "What is 'mobility' in checkers strategy?",
          es: "¿Qué es 'movilidad' en la estrategia de damas?",
          de: "Was ist 'Mobilität' in der Dame-Strategie?",
          nl: "Wat is 'mobiliteit' in damstrategie?"
        },
        options: [
          { en: "How quickly pieces can be promoted", es: "Qué tan rápido se pueden promocionar las piezas", de: "Wie schnell Steine befördert werden können", nl: "Hoe snel stenen kunnen worden gepromoveerd" },
          { en: "The number of legal moves available", es: "El número de movimientos legales disponibles", de: "Die Anzahl verfügbarer legaler Züge", nl: "Het aantal beschikbare legale zetten" },
          { en: "The speed of gameplay", es: "La velocidad del juego", de: "Die Geschwindigkeit des Spiels", nl: "De snelheid van het spel" },
          { en: "Having pieces spread across the board", es: "Tener piezas distribuidas por el tablero", de: "Steine über das Brett verteilt haben", nl: "Stenen verspreid over het bord hebben" }
        ],
        correct: 1,
        explanation: {
          en: "Mobility refers to the number of legal moves available to your pieces. Greater mobility provides more options and flexibility, allowing you to respond better to threats and create opportunities.",
          es: "La movilidad se refiere al número de movimientos legales disponibles para tus piezas. Mayor movilidad proporciona más opciones y flexibilidad, permitiéndote responder mejor a las amenazas y crear oportunidades.",
          de: "Mobilität bezieht sich auf die Anzahl der legalen Züge, die Ihren Steinen zur Verfügung stehen. Größere Mobilität bietet mehr Optionen und Flexibilität, sodass Sie besser auf Bedrohungen reagieren und Gelegenheiten schaffen können.",
          nl: "Mobiliteit verwijst naar het aantal legale zetten dat beschikbaar is voor je stenen. Grotere mobiliteit biedt meer opties en flexibiliteit, waardoor je beter kunt reageren op bedreigingen en kansen kunt creëren."
        }
      },
      {
        question: {
          en: "What is the 'Cross opening' known for?",
          es: "¿Por qué es conocida la 'apertura Cross'?",
          de: "Wofür ist die 'Cross-Eröffnung' bekannt?",
          nl: "Waar staat de 'Cross-opening' om bekend?"
        },
        options: [
          { en: "Creating crossed diagonals", es: "Crear diagonales cruzadas", de: "Gekreuzte Diagonalen schaffen", nl: "Gekruiste diagonalen creëren" },
          { en: "Sharp tactical complications", es: "Complicaciones tácticas agudas", de: "Scharfe taktische Komplikationen", nl: "Scherpe tactische complicaties" },
          { en: "Symmetrical piece placement", es: "Colocación simétrica de piezas", de: "Symmetrische Steinplatzierung", nl: "Symmetrische steenplaatsing" },
          { en: "Defensive stability", es: "Estabilidad defensiva", de: "Defensive Stabilität", nl: "Defensieve stabiliteit" }
        ],
        correct: 1,
        explanation: {
          en: "The Cross opening (9-13) is known for leading to sharp tactical complications and complex positions that require precise calculation from both players.",
          es: "La apertura Cross (9-13) es conocida por llevar a complicaciones tácticas agudas y posiciones complejas que requieren cálculo preciso de ambos jugadores.",
          de: "Die Cross-Eröffnung (9-13) ist bekannt dafür, zu scharfen taktischen Komplikationen und komplexen Positionen zu führen, die präzise Berechnung von beiden Spielern erfordern.",
          nl: "De Cross-opening (9-13) staat bekend om het leiden naar scherpe tactische complicaties en complexe posities die nauwkeurige berekening van beide spelers vereisen."
        }
      },
      {
        question: {
          en: "What does 'gaining the move' mean in checkers?",
          es: "¿Qué significa 'ganar el movimiento' en las damas?",
          de: "Was bedeutet 'den Zug gewinnen' beim Dame-Spiel?",
          nl: "Wat betekent 'de zet winnen' bij dammen?"
        },
        options: [
          { en: "Forcing the opponent to move first in a critical position", es: "Forzar al oponente a moverse primero en una posición crítica", de: "Den Gegner zwingen, in einer kritischen Position zuerst zu ziehen", nl: "De tegenstander dwingen om eerst te zetten in een kritieke positie" },
          { en: "Moving faster than your opponent", es: "Moverse más rápido que tu oponente", de: "Sich schneller bewegen als der Gegner", nl: "Sneller bewegen dan je tegenstander" },
          { en: "Making an extra move", es: "Hacer un movimiento extra", de: "Einen zusätzlichen Zug machen", nl: "Een extra zet maken" },
          { en: "Capturing more pieces", es: "Capturar más piezas", de: "Mehr Steine schlagen", nl: "Meer stenen slaan" }
        ],
        correct: 0,
        explanation: {
          en: "Gaining the move is a strategic technique where you maneuver to force your opponent to be the one who must move in a critical position, often putting them at a disadvantage due to zugzwang.",
          es: "Ganar el movimiento es una técnica estratégica donde maniobras para forzar a tu oponente a ser quien deba moverse en una posición crítica, a menudo poniéndolo en desventaja debido al zugzwang.",
          de: "Den Zug gewinnen ist eine strategische Technik, bei der Sie manövrieren, um Ihren Gegner zu zwingen, in einer kritischen Position ziehen zu müssen, was ihn oft durch Zugzwang benachteiligt.",
          nl: "De zet winnen is een strategische techniek waarbij je manoeuvreerd om je tegenstander te dwingen degene te zijn die moet zetten in een kritieke positie, waarbij je ze vaak in het nadeel brengt door zugzwang."
        }
      },
      {
        question: {
          en: "What is a 'cramp' position in checkers?",
          es: "¿Qué es una posición de 'apretura' en las damas?",
          de: "Was ist eine 'Enge'-Position beim Dame-Spiel?",
          nl: "Wat is een 'krappe' positie bij dammen?"
        },
        options: [
          { en: "When pieces are stuck in corners", es: "Cuando las piezas están atascadas en las esquinas", de: "Wenn Steine in Ecken feststecken", nl: "Wanneer stenen vastzitten in hoeken" },
          { en: "Having limited space and mobility", es: "Tener espacio y movilidad limitados", de: "Begrenzten Raum und Mobilität haben", nl: "Beperkte ruimte en mobiliteit hebben" },
          { en: "Too many pieces on the board", es: "Demasiadas piezas en el tablero", de: "Zu viele Steine auf dem Brett", nl: "Te veel stenen op het bord" },
          { en: "Pieces blocking each other", es: "Piezas bloqueándose entre sí", de: "Steine, die sich gegenseitig blockieren", nl: "Stenen die elkaar blokkeren" }
        ],
        correct: 1,
        explanation: {
          en: "A cramp position occurs when one player's pieces have limited space and mobility, typically due to opponent's superior positioning that restricts movement and creates long-term disadvantage.",
          es: "Una posición de apretura ocurre cuando las piezas de un jugador tienen espacio y movilidad limitados, típicamente debido al posicionamiento superior del oponente que restringe el movimiento y crea desventaja a largo plazo.",
          de: "Eine Enge-Position tritt auf, wenn die Steine eines Spielers begrenzten Raum und Mobilität haben, typischerweise aufgrund der überlegenen Positionierung des Gegners, die Bewegung einschränkt und langfristige Nachteile schafft.",
          nl: "Een krappe positie treedt op wanneer de stenen van een speler beperkte ruimte en mobiliteit hebben, typisch door de superieure positionering van de tegenstander die beweging beperkt en langetermijnnadeel creëert."
        }
      },
      {
        question: {
          en: "What is the key advantage of the 'Defiance opening'?",
          es: "¿Cuál es la ventaja clave de la 'apertura Defiance'?",
          de: "Was ist der Schlüsselvorteil der 'Defiance-Eröffnung'?",
          nl: "Wat is het belangrijkste voordeel van de 'Defiance-opening'?"
        },
        options: [
          { en: "Immediate king creation", es: "Creación inmediata de rey", de: "Sofortige Damenerstellung", nl: "Onmiddellijke damcreatie" },
          { en: "Strong central presence and piece activity", es: "Fuerte presencia central y actividad de piezas", de: "Starke zentrale Präsenz und Steinaktivität", nl: "Sterke centrale aanwezigheid en steenactiviteit" },
          { en: "Defensive solidity", es: "Solidez defensiva", de: "Defensive Solidität", nl: "Defensieve soliditeit" },
          { en: "Quick piece exchanges", es: "Intercambios rápidos de piezas", de: "Schnelle Steintausche", nl: "Snelle steenruilen" }
        ],
        correct: 1,
        explanation: {
          en: "The Defiance opening (10-14) provides strong central control and active piece play, giving the player good attacking chances and maintaining initiative throughout the opening phase.",
          es: "La apertura Defiance (10-14) proporciona un fuerte control central y juego activo de piezas, dando al jugador buenas oportunidades de ataque y manteniendo la iniciativa durante la fase de apertura.",
          de: "Die Defiance-Eröffnung (10-14) bietet starke Zentrumskontrolle und aktives Steinspiel, was dem Spieler gute Angriffschancen gibt und die Initiative während der Eröffnungsphase aufrechterhält.",
          nl: "De Defiance-opening (10-14) biedt sterke centrumcontrole en actief steenspel, wat de speler goede aanvalskansen geeft en het initiatief behoudt gedurende de openingsfase."
        }
      },
      {
        question: {
          en: "What is a 'squeeze' in checkers?",
          es: "¿Qué es un 'apretón' en las damas?",
          de: "Was ist eine 'Quetsche' beim Dame-Spiel?",
          nl: "Wat is een 'klem' bij dammen?"
        },
        options: [
          { en: "Capturing multiple pieces at once", es: "Capturar múltiples piezas a la vez", de: "Mehrere Steine auf einmal schlagen", nl: "Meerdere stenen tegelijk slaan" },
          { en: "Forcing opponent into a position where any move loses material", es: "Forzar al oponente a una posición donde cualquier movimiento pierde material", de: "Den Gegner in eine Position zwingen, wo jeder Zug Material verliert", nl: "De tegenstander dwingen in een positie waar elke zet materiaal verliest" },
          { en: "Pushing pieces toward the edge", es: "Empujar piezas hacia el borde", de: "Steine zum Rand drängen", nl: "Stenen naar de rand duwen" },
          { en: "Playing in a tight time control", es: "Jugar con un control de tiempo ajustado", de: "Mit knapper Zeitkontrolle spielen", nl: "Spelen met krappe tijdscontrole" }
        ],
        correct: 1,
        explanation: {
          en: "A squeeze is a tactical situation where you restrict your opponent's options so severely that any move they make will result in material loss or positional disadvantage.",
          es: "Un apretón es una situación táctica donde restringes las opciones de tu oponente tan severamente que cualquier movimiento que haga resultará en pérdida de material o desventaja posicional.",
          de: "Eine Quetsche ist eine taktische Situation, bei der Sie die Optionen Ihres Gegners so stark einschränken, dass jeder Zug zu Materialverlust oder positionellem Nachteil führt.",
          nl: "Een klem is een tactische situatie waarbij je de opties van je tegenstander zo ernstig beperkt dat elke zet die ze maken resulteert in materiaalverlies of positioneel nadeel."
        }
      },
      {
        question: {
          en: "What is 'piece activity' in checkers?",
          es: "¿Qué es 'actividad de piezas' en las damas?",
          de: "Was ist 'Steinaktivität' beim Dame-Spiel?",
          nl: "Wat is 'steenactiviteit' bij dammen?"
        },
        options: [
          { en: "How many pieces are moving per turn", es: "Cuántas piezas se mueven por turno", de: "Wie viele Steine pro Zug bewegt werden", nl: "Hoeveel stenen er per beurt bewegen" },
          { en: "The effectiveness and influence of piece positioning", es: "La efectividad e influencia del posicionamiento de piezas", de: "Die Effektivität und der Einfluss der Steinpositionierung", nl: "De effectiviteit en invloed van steenpositionering" },
          { en: "How quickly pieces reach the king row", es: "Qué tan rápido las piezas alcanzan la fila del rey", de: "Wie schnell Steine die Damenreihe erreichen", nl: "Hoe snel stenen de damrij bereiken" },
          { en: "The number of captures made", es: "El número de capturas realizadas", de: "Die Anzahl der gemachten Schläge", nl: "Het aantal gemaakte slagen" }
        ],
        correct: 1,
        explanation: {
          en: "Piece activity measures how effectively your pieces are positioned to control key squares, threaten captures, and participate in the game. Active pieces exert influence while passive pieces have limited impact.",
          es: "La actividad de piezas mide qué tan efectivamente están posicionadas tus piezas para controlar casillas clave, amenazar capturas y participar en el juego. Las piezas activas ejercen influencia mientras que las piezas pasivas tienen impacto limitado.",
          de: "Steinaktivität misst, wie effektiv Ihre Steine positioniert sind, um Schlüsselfelder zu kontrollieren, Schläge zu bedrohen und am Spiel teilzunehmen. Aktive Steine üben Einfluss aus, während passive Steine begrenzten Einfluss haben.",
          nl: "Steenactiviteit meet hoe effectief je stenen gepositioneerd zijn om sleutelvakjes te controleren, slagen te bedreigen en aan het spel deel te nemen. Actieve stenen oefenen invloed uit terwijl passieve stenen beperkte impact hebben."
        }
      },
      {
        question: {
          en: "What is the strategic importance of the 'single corner'?",
          es: "¿Cuál es la importancia estratégica de la 'esquina simple'?",
          de: "Was ist die strategische Bedeutung der 'Einzelecke'?",
          nl: "Wat is het strategische belang van de 'enkele hoek'?"
        },
        options: [
          { en: "It's where kings are most powerful", es: "Es donde los reyes son más poderosos", de: "Dort sind Damen am mächtigsten", nl: "Daar zijn dammen het krachtigst" },
          { en: "It provides a safe haven for trapped pieces", es: "Proporciona un refugio seguro para piezas atrapadas", de: "Es bietet eine sichere Zuflucht für gefangene Steine", nl: "Het biedt een veilige haven voor gevangen stenen" },
          { en: "It's a weak point vulnerable to attack", es: "Es un punto débil vulnerable al ataque", de: "Es ist ein schwacher Punkt, der anfällig für Angriffe ist", nl: "Het is een zwak punt dat kwetsbaar is voor aanvallen" },
          { en: "It controls the most diagonal squares", es: "Controla la mayoría de las casillas diagonales", de: "Es kontrolliert die meisten diagonalen Felder", nl: "Het controleert de meeste diagonale vakjes" }
        ],
        correct: 2,
        explanation: {
          en: "The single corner (the corner on your side of the board that's not the double corner) is strategically weak because pieces there have limited mobility and can become targets for combination attacks.",
          es: "La esquina simple (la esquina en tu lado del tablero que no es la esquina doble) es estratégicamente débil porque las piezas allí tienen movilidad limitada y pueden convertirse en objetivos para ataques de combinación.",
          de: "Die Einzelecke (die Ecke auf Ihrer Seite des Bretts, die nicht die Doppelecke ist) ist strategisch schwach, weil Steine dort begrenzte Mobilität haben und Ziele für Kombinationsangriffe werden können.",
          nl: "De enkele hoek (de hoek aan jouw kant van het bord die niet de dubbele hoek is) is strategisch zwak omdat stenen daar beperkte mobiliteit hebben en doelwitten kunnen worden voor combinatieaanvallen."
        }
      },
      {
        question: {
          en: "What is a 'waiting move' in checkers?",
          es: "¿Qué es un 'movimiento de espera' en las damas?",
          de: "Was ist ein 'Wartezug' beim Dame-Spiel?",
          nl: "Wat is een 'wachtzet' bij dammen?"
        },
        options: [
          { en: "Taking extra time before moving", es: "Tomar tiempo extra antes de mover", de: "Extra Zeit nehmen vor dem Ziehen", nl: "Extra tijd nemen voor het zetten" },
          { en: "A move that maintains position without advancing", es: "Un movimiento que mantiene la posición sin avanzar", de: "Ein Zug, der die Position hält ohne vorzurücken", nl: "Een zet die de positie behoudt zonder vooruit te gaan" },
          { en: "Passing your turn to the opponent", es: "Pasar tu turno al oponente", de: "Den Zug an den Gegner weitergeben", nl: "Je beurt doorgeven aan de tegenstander" },
          { en: "Moving only when forced to capture", es: "Moverse solo cuando se está forzado a capturar", de: "Nur ziehen, wenn zum Schlagen gezwungen", nl: "Alleen zetten wanneer gedwongen te slaan" }
        ],
        correct: 1,
        explanation: {
          en: "A waiting move is a move that doesn't significantly change the position but maintains flexibility, often used to gain tempo or force the opponent to commit to a position first.",
          es: "Un movimiento de espera es un movimiento que no cambia significativamente la posición pero mantiene la flexibilidad, a menudo usado para ganar tempo o forzar al oponente a comprometerse con una posición primero.",
          de: "Ein Wartezug ist ein Zug, der die Position nicht wesentlich verändert, aber Flexibilität bewahrt, oft verwendet um Tempo zu gewinnen oder den Gegner zu zwingen, sich zuerst auf eine Position festzulegen.",
          nl: "Een wachtzet is een zet die de positie niet significant verandert maar flexibiliteit behoudt, vaak gebruikt om tempo te winnen of de tegenstander te dwingen zich eerst op een positie vast te leggen."
        }
      },
      {
        question: {
          en: "In advanced checkers, what is a 'book opening'?",
          es: "En damas avanzadas, ¿qué es una 'apertura de libro'?",
          de: "Was ist eine 'Bucheröffnung' im fortgeschrittenen Dame?",
          nl: "Wat is een 'boekopening' in gevorderd dammen?"
        },
        options: [
          { en: "An opening documented in checkers literature", es: "Una apertura documentada en la literatura de damas", de: "Eine in der Dame-Literatur dokumentierte Eröffnung", nl: "Een opening gedocumenteerd in damliteratuur" },
          { en: "Reading strategy books during play", es: "Leer libros de estrategia durante el juego", de: "Strategiebücher während des Spiels lesen", nl: "Strategieboeken lezen tijdens het spel" },
          { en: "The first move of the game", es: "El primer movimiento del juego", de: "Der erste Zug des Spiels", nl: "De eerste zet van het spel" },
          { en: "A beginner-level opening", es: "Una apertura de nivel principiante", de: "Eine Anfänger-Eröffnung", nl: "Een opening voor beginners" }
        ],
        correct: 0,
        explanation: {
          en: "Book openings are well-analyzed opening sequences documented in checkers literature and databases. Advanced players study these to understand the theoretical best moves and typical plans arising from each opening.",
          es: "Las aperturas de libro son secuencias de apertura bien analizadas documentadas en literatura y bases de datos de damas. Los jugadores avanzados las estudian para entender los mejores movimientos teóricos y planes típicos que surgen de cada apertura.",
          de: "Bucheröffnungen sind gut analysierte Eröffnungssequenzen, die in Dame-Literatur und Datenbanken dokumentiert sind. Fortgeschrittene Spieler studieren diese, um die theoretisch besten Züge und typischen Pläne zu verstehen, die aus jeder Eröffnung entstehen.",
          nl: "Boekopeningen zijn goed geanalyseerde openingsreeksen gedocumenteerd in damliteratuur en databases. Gevorderde spelers bestuderen deze om de theoretisch beste zetten en typische plannen uit elke opening te begrijpen."
        }
      },
      {
        question: {
          en: "What makes a position 'sharp' in checkers?",
          es: "¿Qué hace que una posición sea 'aguda' en las damas?",
          de: "Was macht eine Position beim Dame-Spiel 'scharf'?",
          nl: "Wat maakt een positie 'scherp' bij dammen?"
        },
        options: [
          { en: "Having many pieces on pointed squares", es: "Tener muchas piezas en casillas puntiagudas", de: "Viele Steine auf spitzen Feldern haben", nl: "Veel stenen op puntige vakjes hebben" },
          { en: "Tactical complexity with critical consequences", es: "Complejidad táctica con consecuencias críticas", de: "Taktische Komplexität mit kritischen Konsequenzen", nl: "Tactische complexiteit met kritieke consequenties" },
          { en: "Clear winning advantage for one side", es: "Ventaja ganadora clara para un lado", de: "Klarer Gewinnvorteil für eine Seite", nl: "Duidelijk winnend voordeel voor één kant" },
          { en: "Pieces arranged in angular patterns", es: "Piezas dispuestas en patrones angulares", de: "Steine in winkligen Mustern angeordnet", nl: "Stenen gerangschikt in hoekige patronen" }
        ],
        correct: 1,
        explanation: {
          en: "A sharp position is one with high tactical complexity where precise moves are critical and small errors can lead to immediate and significant consequences, often involving multiple capture threats.",
          es: "Una posición aguda es aquella con alta complejidad táctica donde los movimientos precisos son críticos y los pequeños errores pueden llevar a consecuencias inmediatas y significativas, a menudo involucrando múltiples amenazas de captura.",
          de: "Eine scharfe Position ist eine mit hoher taktischer Komplexität, bei der präzise Züge kritisch sind und kleine Fehler zu unmittelbaren und bedeutenden Konsequenzen führen können, oft mit mehreren Schlagdrohungen.",
          nl: "Een scherpe positie is er een met hoge tactische complexiteit waarbij precieze zetten kritiek zijn en kleine fouten kunnen leiden tot onmiddellijke en significante consequenties, vaak met meerdere slagdreigingen."
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
