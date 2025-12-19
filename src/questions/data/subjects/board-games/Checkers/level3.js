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
      },
      {
        question: {
          en: "What is the 'Laird and Lady opening'?",
          es: "¿Qué es la apertura 'Laird and Lady'?",
          de: "Was ist die 'Laird and Lady-Eröffnung'?",
          nl: "Wat is de 'Laird and Lady-opening'?"
        },
        options: [
          { en: "10-15, a balanced positional opening", es: "10-15, una apertura posicional equilibrada", de: "10-15, eine ausgewogene positionelle Eröffnung", nl: "10-15, een gebalanceerde positionele opening" },
          { en: "11-15, the standard Bristol line", es: "11-15, la línea estándar de Bristol", de: "11-15, die Standard Bristol-Linie", nl: "11-15, de standaard Bristol-lijn" },
          { en: "9-14, attacking the center", es: "9-14, atacando el centro", de: "9-14, Angriff auf das Zentrum", nl: "9-14, het centrum aanvallen" },
          { en: "12-16, the flank development", es: "12-16, el desarrollo de flanco", de: "12-16, die Flankenentwicklung", nl: "12-16, de flank-ontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "The Laird and Lady opening (10-15) is known for creating balanced positions with opportunities for both sides, offering strategic complexity without immediate tactical fireworks.",
          es: "La apertura Laird and Lady (10-15) es conocida por crear posiciones equilibradas con oportunidades para ambos lados, ofreciendo complejidad estratégica sin fuegos artificiales tácticos inmediatos.",
          de: "Die Laird and Lady-Eröffnung (10-15) ist bekannt dafür, ausgewogene Positionen mit Chancen für beide Seiten zu schaffen und strategische Komplexität ohne sofortige taktische Feuerwerke zu bieten.",
          nl: "De Laird and Lady-opening (10-15) staat bekend om het creëren van gebalanceerde posities met kansen voor beide kanten, met strategische complexiteit zonder onmiddellijk tactisch vuurwerk."
        }
      },
      {
        question: {
          en: "What is the 'First Position' in endgame theory?",
          es: "¿Qué es la 'Primera Posición' en la teoría del final?",
          de: "Was ist die 'Erste Position' in der Endspieltheorie?",
          nl: "Wat is de 'Eerste Positie' in eindspeltheorie?"
        },
        options: [
          { en: "Starting position of the game", es: "Posición inicial del juego", de: "Startposition des Spiels", nl: "Startpositie van het spel" },
          { en: "A theoretical win with one king vs one piece", es: "Una victoria teórica con un rey contra una pieza", de: "Ein theoretischer Gewinn mit einer Dame gegen einen Stein", nl: "Een theoretische winst met één dam tegen één steen" },
          { en: "The player who moves first wins", es: "El jugador que mueve primero gana", de: "Der Spieler, der zuerst zieht, gewinnt", nl: "De speler die eerst zet wint" },
          { en: "Leading position in a tournament", es: "Posición líder en un torneo", de: "Führende Position in einem Turnier", nl: "Leidende positie in een toernooi" }
        ],
        correct: 1,
        explanation: {
          en: "The First Position is a fundamental endgame scenario where one king versus one regular piece leads to a theoretical win for the king's side through precise play and understanding of key squares.",
          es: "La Primera Posición es un escenario de final fundamental donde un rey contra una pieza regular lleva a una victoria teórica para el lado del rey mediante juego preciso y comprensión de casillas clave.",
          de: "Die Erste Position ist ein fundamentales Endspielszenario, wo eine Dame gegen einen normalen Stein durch präzises Spiel und Verständnis der Schlüsselfelder zu einem theoretischen Gewinn für die Damenseite führt.",
          nl: "De Eerste Positie is een fundamenteel eindspelscenario waarbij één dam tegen één gewone steen leidt tot een theoretische winst voor de damkant door nauwkeurig spel en begrip van sleutelvakjes."
        }
      },
      {
        question: {
          en: "What is 'transposition' in checkers openings?",
          es: "¿Qué es la 'transposición' en aperturas de damas?",
          de: "Was ist 'Transposition' in Dame-Eröffnungen?",
          nl: "Wat is 'transpositie' in dam-openingen?"
        },
        options: [
          { en: "Moving pieces to opposite sides", es: "Mover piezas a lados opuestos", de: "Steine zu gegenüberliegenden Seiten bewegen", nl: "Stenen naar tegenovergestelde kanten bewegen" },
          { en: "Reaching the same position through different move orders", es: "Alcanzar la misma posición mediante diferentes órdenes de movimiento", de: "Dieselbe Position durch verschiedene Zugfolgen erreichen", nl: "Dezelfde positie bereiken via verschillende zetvolgordes" },
          { en: "Exchanging pieces equally", es: "Intercambiar piezas por igual", de: "Steine gleichwertig tauschen", nl: "Stenen gelijkwaardig ruilen" },
          { en: "Switching from offense to defense", es: "Cambiar de ofensiva a defensiva", de: "Von Offensive zu Defensive wechseln", nl: "Wisselen van aanval naar verdediging" }
        ],
        correct: 1,
        explanation: {
          en: "Transposition occurs when different opening move sequences lead to the same position. Understanding transpositions allows players to reach favorable positions while avoiding opponent's prepared variations.",
          es: "La transposición ocurre cuando diferentes secuencias de movimientos de apertura llevan a la misma posición. Entender las transposiciones permite a los jugadores alcanzar posiciones favorables mientras evitan las variaciones preparadas del oponente.",
          de: "Transposition tritt auf, wenn verschiedene Eröffnungszugfolgen zur selben Position führen. Das Verständnis von Transpositionen ermöglicht Spielern, günstige Positionen zu erreichen und vorbereitete Varianten des Gegners zu vermeiden.",
          nl: "Transpositie treedt op wanneer verschillende openingszet sequenties tot dezelfde positie leiden. Begrip van transposities stelt spelers in staat gunstige posities te bereiken terwijl ze voorbereide varianten van de tegenstander vermijden."
        }
      },
      {
        question: {
          en: "What is the 'Third Position' endgame?",
          es: "¿Qué es el final de 'Tercera Posición'?",
          de: "Was ist das 'Dritte Position'-Endspiel?",
          nl: "Wat is het 'Derde Positie'-eindspel?"
        },
        options: [
          { en: "Three kings versus two", es: "Tres reyes contra dos", de: "Drei Damen gegen zwei", nl: "Drie dammen tegen twee" },
          { en: "A specific drawn endgame configuration", es: "Una configuración de final tablas específica", de: "Eine spezifische remis Endspielkonfiguration", nl: "Een specifieke remise eindspelconfiguratie" },
          { en: "Finishing third in a tournament", es: "Terminar tercero en un torneo", de: "Dritter in einem Turnier werden", nl: "Derde worden in een toernooi" },
          { en: "Three pieces remaining total", es: "Tres piezas restantes en total", de: "Insgesamt drei verbleibende Steine", nl: "Totaal drie resterende stenen" }
        ],
        correct: 1,
        explanation: {
          en: "The Third Position is a classic drawn endgame where despite material imbalance, the defender can force a draw through precise defensive technique and understanding of the position's defensive resources.",
          es: "La Tercera Posición es un final tablas clásico donde a pesar del desequilibrio material, el defensor puede forzar tablas mediante técnica defensiva precisa y comprensión de los recursos defensivos de la posición.",
          de: "Die Dritte Position ist ein klassisches Remis-Endspiel, wo trotz materiellen Ungleichgewichts der Verteidiger durch präzise Verteidigungstechnik und Verständnis der defensiven Ressourcen der Position ein Remis erzwingen kann.",
          nl: "De Derde Positie is een klassiek remise-eindspel waarbij ondanks materieel oneven, de verdediger remise kan forceren door precieze verdedigingstechniek en begrip van de defensieve middelen van de positie."
        }
      },
      {
        question: {
          en: "What is a 'thematic tournament' in checkers?",
          es: "¿Qué es un 'torneo temático' en las damas?",
          de: "Was ist ein 'Themen-Turnier' beim Dame?",
          nl: "Wat is een 'thematisch toernooi' bij dammen?"
        },
        options: [
          { en: "Tournament with a specific theme or topic", es: "Torneo con un tema específico", de: "Turnier mit einem bestimmten Thema", nl: "Toernooi met een specifiek thema" },
          { en: "All games start from the same opening position", es: "Todos los juegos comienzan desde la misma posición de apertura", de: "Alle Spiele beginnen von derselben Eröffnungsposition", nl: "Alle spellen beginnen vanuit dezelfde openingspositie" },
          { en: "Players dress in costumes", es: "Los jugadores se visten con disfraces", de: "Spieler tragen Kostüme", nl: "Spelers dragen kostuums" },
          { en: "Only certain openings are allowed", es: "Solo ciertas aperturas están permitidas", de: "Nur bestimmte Eröffnungen sind erlaubt", nl: "Alleen bepaalde openingen zijn toegestaan" }
        ],
        correct: 1,
        explanation: {
          en: "A thematic tournament requires all games to begin from a predetermined opening position, testing players' understanding of specific positions and eliminating opening preparation advantages.",
          es: "Un torneo temático requiere que todos los juegos comiencen desde una posición de apertura predeterminada, probando la comprensión de los jugadores de posiciones específicas y eliminando ventajas de preparación de apertura.",
          de: "Ein Themen-Turnier erfordert, dass alle Spiele von einer vorgegebenen Eröffnungsposition beginnen, was das Verständnis der Spieler für spezifische Positionen testet und Eröffnungsvorbereitungsvorteile eliminiert.",
          nl: "Een thematisch toernooi vereist dat alle spellen beginnen vanuit een vooraf bepaalde openingspositie, waarbij het begrip van spelers van specifieke posities wordt getest en openingsvoorbereidingsvoordelen worden geëlimineerd."
        }
      },
      {
        question: {
          en: "What is 'piece coordination' in checkers?",
          es: "¿Qué es la 'coordinación de piezas' en las damas?",
          de: "Was ist 'Steinkoordination' beim Dame?",
          nl: "Wat is 'steencoördinatie' bij dammen?"
        },
        options: [
          { en: "Pieces moving in synchronized patterns", es: "Piezas moviéndose en patrones sincronizados", de: "Steine, die sich in synchronisierten Mustern bewegen", nl: "Stenen die in gesynchroniseerde patronen bewegen" },
          { en: "How effectively pieces work together", es: "Qué tan efectivamente trabajan las piezas juntas", de: "Wie effektiv Steine zusammenarbeiten", nl: "Hoe effectief stenen samenwerken" },
          { en: "Planning moves in advance", es: "Planificar movimientos con anticipación", de: "Züge im Voraus planen", nl: "Zetten van tevoren plannen" },
          { en: "Matching piece colors", es: "Igualar colores de piezas", de: "Steinfarben angleichen", nl: "Steenkleuren matchen" }
        ],
        correct: 1,
        explanation: {
          en: "Piece coordination refers to how well your pieces support each other, create threats together, and work as a unified force rather than isolated units. Well-coordinated pieces multiply their effectiveness.",
          es: "La coordinación de piezas se refiere a qué tan bien tus piezas se apoyan mutuamente, crean amenazas juntas y trabajan como una fuerza unificada en lugar de unidades aisladas. Las piezas bien coordinadas multiplican su efectividad.",
          de: "Steinkoordination bezieht sich darauf, wie gut Ihre Steine sich gegenseitig unterstützen, gemeinsam Drohungen schaffen und als vereinte Kraft statt als isolierte Einheiten arbeiten. Gut koordinierte Steine vervielfachen ihre Effektivität.",
          nl: "Steencoördinatie verwijst naar hoe goed je stenen elkaar ondersteunen, samen bedreigingen creëren en werken als een verenigde kracht in plaats van geïsoleerde eenheden. Goed gecoördineerde stenen verveelvoudigen hun effectiviteit."
        }
      },
      {
        question: {
          en: "What is the 'Denny opening'?",
          es: "¿Qué es la apertura 'Denny'?",
          de: "Was ist die 'Denny-Eröffnung'?",
          nl: "Wat is de 'Denny-opening'?"
        },
        options: [
          { en: "10-14, solid and flexible", es: "10-14, sólida y flexible", de: "10-14, solide und flexibel", nl: "10-14, solide en flexibel" },
          { en: "11-16, positional emphasis", es: "11-16, énfasis posicional", de: "11-16, positioneller Schwerpunkt", nl: "11-16, positionele nadruk" },
          { en: "9-13, central control", es: "9-13, control central", de: "9-13, Zentrumskontrolle", nl: "9-13, centrumcontrole" },
          { en: "12-16, wing expansion", es: "12-16, expansión de ala", de: "12-16, Flügelexpansion", nl: "12-16, vleugel expansie" }
        ],
        correct: 0,
        explanation: {
          en: "The Denny opening (10-14) offers solid development with flexibility to transpose into various structures, making it a favorite among players who value adaptability over forcing immediate confrontation.",
          es: "La apertura Denny (10-14) ofrece desarrollo sólido con flexibilidad para transponer en varias estructuras, haciéndola favorita entre jugadores que valoran la adaptabilidad sobre forzar confrontación inmediata.",
          de: "Die Denny-Eröffnung (10-14) bietet solide Entwicklung mit Flexibilität zur Transposition in verschiedene Strukturen, was sie zu einem Favoriten unter Spielern macht, die Anpassungsfähigkeit über das Erzwingen sofortiger Konfrontation schätzen.",
          nl: "De Denny-opening (10-14) biedt solide ontwikkeling met flexibiliteit om te transponeren naar verschillende structuren, waardoor het een favoriet is onder spelers die aanpassingsvermogen waarderen boven het forceren van onmiddellijke confrontatie."
        }
      },
      {
        question: {
          en: "What is a 'phalanx' formation in checkers?",
          es: "¿Qué es una formación de 'falange' en las damas?",
          de: "Was ist eine 'Phalanx'-Formation beim Dame?",
          nl: "Wat is een 'falanx'-formatie bij dammen?"
        },
        options: [
          { en: "Pieces arranged in a defensive row", es: "Piezas dispuestas en una fila defensiva", de: "Steine in einer defensiven Reihe angeordnet", nl: "Stenen gerangschikt in een defensieve rij" },
          { en: "All pieces advancing together", es: "Todas las piezas avanzando juntas", de: "Alle Steine rücken zusammen vor", nl: "Alle stenen rukken samen op" },
          { en: "Side-by-side pieces supporting each other", es: "Piezas lado a lado apoyándose mutuamente", de: "Nebeneinander stehende Steine unterstützen sich gegenseitig", nl: "Zij-aan-zij stenen die elkaar ondersteunen" },
          { en: "Pieces forming a V-shape", es: "Piezas formando una V", de: "Steine, die eine V-Form bilden", nl: "Stenen die een V-vorm vormen" }
        ],
        correct: 2,
        explanation: {
          en: "A phalanx is a formation where pieces are positioned side by side on adjacent squares, creating a strong wall that's difficult to break through and providing mutual support for advancement.",
          es: "Una falange es una formación donde las piezas están posicionadas lado a lado en casillas adyacentes, creando una pared fuerte difícil de atravesar y proporcionando apoyo mutuo para el avance.",
          de: "Eine Phalanx ist eine Formation, bei der Steine Seite an Seite auf benachbarten Feldern positioniert sind, was eine starke Mauer schafft, die schwer zu durchbrechen ist und gegenseitige Unterstützung für den Vormarsch bietet.",
          nl: "Een falanx is een formatie waarbij stenen zij aan zij op aangrenzende vakjes zijn gepositioneerd, wat een sterke muur creëert die moeilijk te doorbreken is en wederzijdse ondersteuning biedt voor vooruitgang."
        }
      },
      {
        question: {
          en: "What is 'piece value' in checkers?",
          es: "¿Qué es el 'valor de pieza' en las damas?",
          de: "Was ist der 'Steinwert' beim Dame?",
          nl: "Wat is 'steenwaarde' bij dammen?"
        },
        options: [
          { en: "A king is worth exactly two regular pieces", es: "Un rey vale exactamente dos piezas regulares", de: "Eine Dame ist genau zwei normale Steine wert", nl: "Een dam is precies twee gewone stenen waard" },
          { en: "All pieces have equal value", es: "Todas las piezas tienen igual valor", de: "Alle Steine haben gleichen Wert", nl: "Alle stenen hebben gelijke waarde" },
          { en: "Relative worth depending on position and activity", es: "Valor relativo dependiendo de posición y actividad", de: "Relativer Wert abhängig von Position und Aktivität", nl: "Relatieve waarde afhankelijk van positie en activiteit" },
          { en: "Determined by how many captures made", es: "Determinado por cuántas capturas hechas", de: "Bestimmt durch wie viele Schläge gemacht wurden", nl: "Bepaald door hoeveel slagen gemaakt" }
        },
        correct: 2,
        explanation: {
          en: "Piece value in checkers isn't fixed; it depends on position, activity, and context. A well-placed regular piece can be more valuable than a poorly positioned king, and advanced pieces near promotion are worth more.",
          es: "El valor de pieza en damas no es fijo; depende de posición, actividad y contexto. Una pieza regular bien colocada puede ser más valiosa que un rey mal posicionado, y piezas avanzadas cerca de promoción valen más.",
          de: "Der Steinwert beim Dame ist nicht fest; er hängt von Position, Aktivität und Kontext ab. Ein gut platzierter normaler Stein kann wertvoller sein als eine schlecht positionierte Dame, und fortgeschrittene Steine nahe der Beförderung sind mehr wert.",
          nl: "Steenwaarde bij dammen is niet vast; het hangt af van positie, activiteit en context. Een goed geplaatste gewone steen kan waardevoller zijn dan een slecht gepositioneerde dam, en gevorderde stenen nabij promotie zijn meer waard."
        }
      },
      {
        question: {
          en: "What is the 'Old Fourteenth' opening?",
          es: "¿Qué es la apertura 'Old Fourteenth'?",
          de: "Was ist die 'Old Fourteenth'-Eröffnung?",
          nl: "Wat is de 'Old Fourteenth'-opening'?"
        },
        options: [
          { en: "11-15, one of the oldest recorded openings", es: "11-15, una de las aperturas más antiguas registradas", de: "11-15, eine der ältesten aufgezeichneten Eröffnungen", nl: "11-15, een van de oudste opgetekende openingen" },
          { en: "10-14, the 14th move sequence discovered", es: "10-14, la 14ª secuencia de movimientos descubierta", de: "10-14, die 14. entdeckte Zugfolge", nl: "10-14, de 14e ontdekte zetreeks" },
          { en: "9-14, dating from the 14th century", es: "9-14, que data del siglo XIV", de: "9-14, aus dem 14. Jahrhundert", nl: "9-14, daterend uit de 14e eeuw" },
          { en: "12-16, created by a 14-year-old", es: "12-16, creada por un joven de 14 años", de: "12-16, von einem 14-Jährigen erstellt", nl: "12-16, gecreëerd door een 14-jarige" }
        ],
        correct: 0,
        explanation: {
          en: "The Old Fourteenth (11-15) is one of the oldest and most extensively analyzed openings in checkers literature, with a rich history of theoretical development spanning centuries.",
          es: "La Old Fourteenth (11-15) es una de las aperturas más antiguas y extensamente analizadas en la literatura de damas, con una rica historia de desarrollo teórico que abarca siglos.",
          de: "Die Old Fourteenth (11-15) ist eine der ältesten und am umfassendsten analysierten Eröffnungen in der Dame-Literatur mit einer reichen Geschichte theoretischer Entwicklung über Jahrhunderte.",
          nl: "De Old Fourteenth (11-15) is een van de oudste en meest uitgebreid geanalyseerde openingen in damliteratuur, met een rijke geschiedenis van theoretische ontwikkeling die eeuwen beslaat."
        }
      },
      {
        question: {
          en: "What is 'breakthrough timing' in checkers?",
          es: "¿Qué es el 'momento de avance' en las damas?",
          de: "Was ist 'Durchbruch-Timing' beim Dame?",
          nl: "Wat is 'doorbraak-timing' bij dammen?"
        },
        options: [
          { en: "When to force pieces through opponent's defense", es: "Cuándo forzar piezas a través de la defensa del oponente", de: "Wann Steine durch die Verteidigung des Gegners erzwingen", nl: "Wanneer stenen door de verdediging van de tegenstander forceren" },
          { en: "How long it takes to create a king", es: "Cuánto tiempo lleva crear un rey", de: "Wie lange es dauert, eine Dame zu schaffen", nl: "Hoe lang het duurt om een dam te maken" },
          { en: "The speed of piece movement", es: "La velocidad del movimiento de piezas", de: "Die Geschwindigkeit der Steinbewegung", nl: "De snelheid van steenbeweging" },
          { en: "Setting a clock for moves", es: "Configurar un reloj para movimientos", de: "Eine Uhr für Züge einstellen", nl: "Een klok instellen voor zetten" }
        ],
        correct: 0,
        explanation: {
          en: "Breakthrough timing refers to knowing the optimal moment to sacrifice material or force pieces through the opponent's defenses to create a passed piece (runaway checker) that can promote to a king.",
          es: "El momento de avance se refiere a saber el momento óptimo para sacrificar material o forzar piezas a través de las defensas del oponente para crear una pieza pasada que puede promocionar a rey.",
          de: "Durchbruch-Timing bezieht sich darauf, den optimalen Moment zu kennen, um Material zu opfern oder Steine durch die Verteidigung des Gegners zu zwingen, um einen durchgehenden Stein zu schaffen, der zur Dame befördert werden kann.",
          nl: "Doorbraak-timing verwijst naar het kennen van het optimale moment om materiaal te offeren of stenen door de verdediging van de tegenstander te forceren om een doorlopende steen te creëren die kan promoveren tot dam."
        }
      },
      {
        question: {
          en: "What is 'backward movement advantage' of kings?",
          es: "¿Qué es la 'ventaja de movimiento hacia atrás' de los reyes?",
          de: "Was ist der 'Rückwärtsbewegungsvorteil' von Damen?",
          nl: "Wat is het 'achterwaarts bewegingsvoordeel' van dammen?"
        },
        options: [
          { en: "Kings can retreat to safety when threatened", es: "Los reyes pueden retirarse a seguridad cuando están amenazados", de: "Damen können sich bei Bedrohung in Sicherheit zurückziehen", nl: "Dammen kunnen terugtrekken naar veiligheid wanneer bedreigd" },
          { en: "Kings move faster backwards", es: "Los reyes se mueven más rápido hacia atrás", de: "Damen bewegen sich rückwärts schneller", nl: "Dammen bewegen sneller achteruit" },
          { en: "Backward moves don't count as turns", es: "Los movimientos hacia atrás no cuentan como turnos", de: "Rückwärtszüge zählen nicht als Züge", nl: "Achterwaartse zetten tellen niet als beurten" },
          { en: "Kings can capture backward more effectively", es: "Los reyes pueden capturar hacia atrás más efectivamente", de: "Damen können rückwärts effektiver schlagen", nl: "Dammen kunnen achterwaarts effectiever slaan" }
        },
        correct: 0,
        explanation: {
          en: "The ability to move backward allows kings to retreat from threats, reposition tactically, participate in defense, and control both forward and backward diagonals, making them significantly more versatile than regular pieces.",
          es: "La capacidad de moverse hacia atrás permite a los reyes retirarse de amenazas, reposicionarse tácticamente, participar en defensa y controlar diagonales tanto hacia adelante como hacia atrás, haciéndolos significativamente más versátiles que piezas regulares.",
          de: "Die Fähigkeit, sich rückwärts zu bewegen, ermöglicht Damen, sich von Bedrohungen zurückzuziehen, sich taktisch neu zu positionieren, an der Verteidigung teilzunehmen und sowohl Vorwärts- als auch Rückwärtsdiagonalen zu kontrollieren, was sie deutlich vielseitiger macht als normale Steine.",
          nl: "Het vermogen om achteruit te bewegen stelt dammen in staat om terug te trekken van bedreigingen, tactisch te herpositioneren, deel te nemen aan verdediging en zowel voorwaartse als achterwaartse diagonalen te controleren, waardoor ze aanzienlijk veelzijdiger zijn dan gewone stenen."
        }
      },
      {
        question: {
          en: "What is the 'Kelso Cross' opening?",
          es: "¿Qué es la apertura 'Kelso Cross'?",
          de: "Was ist die 'Kelso Cross'-Eröffnung?",
          nl: "Wat is de 'Kelso Cross'-opening?"
        },
        options: [
          { en: "A crossing pattern of pieces", es: "Un patrón de cruce de piezas", de: "Ein Kreuzmuster von Steinen", nl: "Een kruisingspatroon van stenen" },
          { en: "9-13 followed by specific continuation", es: "9-13 seguido de continuación específica", de: "9-13 gefolgt von spezifischer Fortsetzung", nl: "9-13 gevolgd door specifieke voortzetting" },
          { en: "A Scottish variant of Cross opening", es: "Una variante escocesa de la apertura Cross", de: "Eine schottische Variante der Cross-Eröffnung", nl: "Een Schotse variant van de Cross-opening" },
          { en: "Named after a famous player from Kelso", es: "Nombrada por un jugador famoso de Kelso", de: "Benannt nach einem berühmten Spieler aus Kelso", nl: "Vernoemd naar een beroemde speler uit Kelso" }
        },
        correct: 1,
        explanation: {
          en: "The Kelso Cross is a specific variation of the Cross opening (9-13) with particular continuation lines that lead to characteristic pawn structures and middlegame plans.",
          es: "El Kelso Cross es una variación específica de la apertura Cross (9-13) con líneas de continuación particulares que llevan a estructuras de peones características y planes de medio juego.",
          de: "Der Kelso Cross ist eine spezifische Variation der Cross-Eröffnung (9-13) mit bestimmten Fortsetzungslinien, die zu charakteristischen Bauernstrukturen und Mittelspiel-Plänen führen.",
          nl: "De Kelso Cross is een specifieke variatie van de Cross-opening (9-13) met bepaalde voorzettingslijnen die leiden tot karakteristieke pion structuren en middenspel plannen."
        }
      },
      {
        question: {
          en: "What is 'king row control' in checkers?",
          es: "¿Qué es el 'control de fila del rey' en las damas?",
          de: "Was ist 'Damenreihen-Kontrolle' beim Dame?",
          nl: "Wat is 'damrij-controle' bij dammen?"
        },
        options: [
          { en: "Having more kings than opponent", es: "Tener más reyes que el oponente", de: "Mehr Damen als der Gegner haben", nl: "Meer dammen hebben dan tegenstander" },
          { en: "Occupying or guarding the opponent's back row", es: "Ocupar o guardar la fila trasera del oponente", de: "Die hintere Reihe des Gegners besetzen oder bewachen", nl: "De achterste rij van de tegenstander bezetten of bewaken" },
          { en: "Kings controlling the center", es: "Reyes controlando el centro", de: "Damen kontrollieren das Zentrum", nl: "Dammen beheersen het centrum" },
          { en: "Preventing opponent from moving kings", es: "Evitar que el oponente mueva reyes", de: "Verhindern, dass der Gegner Damen bewegt", nl: "Voorkomen dat tegenstander dammen beweegt" }
        },
        correct: 1,
        explanation: {
          en: "King row control means occupying or controlling squares on your opponent's back row, which prevents their pieces from promoting and can create tactical opportunities for combinations.",
          es: "El control de fila del rey significa ocupar o controlar casillas en la fila trasera de tu oponente, lo que evita que sus piezas promocionen y puede crear oportunidades tácticas para combinaciones.",
          de: "Damenreihen-Kontrolle bedeutet, Felder auf der hinteren Reihe des Gegners zu besetzen oder zu kontrollieren, was verhindert, dass seine Steine befördert werden und taktische Möglichkeiten für Kombinationen schaffen kann.",
          nl: "Damrij-controle betekent het bezetten of controleren van vakjes op de achterste rij van je tegenstander, wat voorkomt dat hun stenen promoveren en tactische mogelijkheden voor combinaties kan creëren."
        }
      },
      {
        question: {
          en: "What is a 'positional sacrifice' in checkers?",
          es: "¿Qué es un 'sacrificio posicional' en las damas?",
          de: "Was ist ein 'positionelles Opfer' beim Dame?",
          nl: "Wat is een 'positioneel offer' bij dammen?"
        },
        options: [
          { en: "Sacrificing material for better piece placement", es: "Sacrificar material por mejor ubicación de piezas", de: "Material opfern für bessere Steinplatzierung", nl: "Materiaal offeren voor betere steenplaatsing" },
          { en: "Giving up the center position", es: "Renunciar a la posición central", de: "Die Zentrumsposition aufgeben", nl: "De centrumpositie opgeven" },
          { en: "Trading pieces equally", es: "Intercambiar piezas por igual", de: "Steine gleichwertig tauschen", nl: "Stenen gelijkwaardig ruilen" },
          { en: "Moving to a worse square temporarily", es: "Moverse a una casilla peor temporalmente", de: "Vorübergehend zu einem schlechteren Feld ziehen", nl: "Tijdelijk naar een slechter vakje bewegen" }
        },
        correct: 0,
        explanation: {
          en: "A positional sacrifice involves giving up material (usually one or more pieces) not for immediate tactical gain but to achieve superior piece placement, mobility, or long-term strategic advantage.",
          es: "Un sacrificio posicional implica renunciar a material (usualmente una o más piezas) no por ganancia táctica inmediata sino para lograr ubicación de piezas superior, movilidad o ventaja estratégica a largo plazo.",
          de: "Ein positionelles Opfer beinhaltet das Aufgeben von Material (normalerweise ein oder mehrere Steine) nicht für unmittelbaren taktischen Gewinn, sondern um überlegene Steinplatzierung, Mobilität oder langfristigen strategischen Vorteil zu erreichen.",
          nl: "Een positioneel offer houdt in dat je materiaal opgeeft (meestal één of meer stenen) niet voor onmiddellijke tactische winst maar om superieure steenplaatsing, mobiliteit of strategisch voordeel op lange termijn te bereiken."
        }
      },
      {
        question: {
          en: "What is the 'Single Corner' opening strategy?",
          es: "¿Qué es la estrategia de apertura 'Single Corner'?",
          de: "Was ist die 'Einzelecken'-Eröffnungsstrategie?",
          nl: "Wat is de 'Enkele Hoek'-openingsstrategie?"
        },
        options: [
          { en: "12-16, developing the single corner piece", es: "12-16, desarrollando la pieza de esquina simple", de: "12-16, Entwicklung des Einzelecken-Steins", nl: "12-16, ontwikkeling van de enkele hoeksteen" },
          { en: "Focusing all pieces on one corner", es: "Enfocar todas las piezas en una esquina", de: "Alle Steine auf eine Ecke fokussieren", nl: "Alle stenen focussen op één hoek" },
          { en: "Avoiding the double corner squares", es: "Evitar las casillas de esquina doble", de: "Die Doppelecken-Felder vermeiden", nl: "De dubbele hoek vakjes vermijden" },
          { en: "Playing only with one piece initially", es: "Jugar solo con una pieza inicialmente", de: "Anfangs nur mit einem Stein spielen", nl: "Initieel alleen met één steen spelen" }
        ],
        correct: 0,
        explanation: {
          en: "The Single Corner opening (12-16) emphasizes developing the piece from square 12, which sits in the 'single corner' (the corner that isn't the promotion square), leading to specific structural patterns.",
          es: "La apertura Single Corner (12-16) enfatiza desarrollar la pieza desde la casilla 12, que se encuentra en la 'esquina simple' (la esquina que no es la casilla de promoción), llevando a patrones estructurales específicos.",
          de: "Die Einzelecken-Eröffnung (12-16) betont die Entwicklung des Steins von Feld 12, das in der 'Einzelecke' sitzt (die Ecke, die nicht das Beförderungsfeld ist), was zu spezifischen strukturellen Mustern führt.",
          nl: "De Enkele Hoek-opening (12-16) benadrukt het ontwikkelen van de steen vanaf vak 12, dat in de 'enkele hoek' zit (de hoek die niet het promotievakje is), leidend tot specifieke structurele patronen."
        }
      },
      {
        question: {
          en: "What is 'tempo play' in checkers?",
          es: "¿Qué es el 'juego de tempo' en las damas?",
          de: "Was ist 'Tempo-Spiel' beim Dame?",
          nl: "Wat is 'tempo-spel' bij dammen?"
        },
        options: [
          { en: "Playing at a fast pace", es: "Jugar a un ritmo rápido", de: "In schnellem Tempo spielen", nl: "In een snel tempo spelen" },
          { en: "Gaining time advantages through forcing moves", es: "Ganar ventajas de tiempo mediante movimientos forzados", de: "Zeitvorteile durch erzwingende Züge gewinnen", nl: "Tijdsvoordelen winnen door forcerende zetten" },
          { en: "Following a rhythmic pattern", es: "Seguir un patrón rítmico", de: "Einem rhythmischen Muster folgen", nl: "Een ritmisch patroon volgen" },
          { en: "Using a chess clock", es: "Usar un reloj de ajedrez", de: "Eine Schachuhr verwenden", nl: "Een schaakklok gebruiken" }
        },
        correct: 1,
        explanation: {
          en: "Tempo play involves making moves that force your opponent to respond, effectively giving you extra moves or time to improve your position while they're occupied dealing with your threats.",
          es: "El juego de tempo implica hacer movimientos que fuerzan a tu oponente a responder, efectivamente dándote movimientos extra o tiempo para mejorar tu posición mientras están ocupados lidiando con tus amenazas.",
          de: "Tempo-Spiel beinhaltet Züge zu machen, die deinen Gegner zum Reagieren zwingen, was dir effektiv zusätzliche Züge oder Zeit gibt, um deine Position zu verbessern, während sie mit deinen Drohungen beschäftigt sind.",
          nl: "Tempo-spel houdt in dat je zetten doet die je tegenstander dwingen te reageren, wat je effectief extra zetten of tijd geeft om je positie te verbeteren terwijl ze bezig zijn met je bedreigingen."
        }
      },
      {
        question: {
          en: "What is the 'Souter opening'?",
          es: "¿Qué es la apertura 'Souter'?",
          de: "Was ist die 'Souter-Eröffnung'?",
          nl: "Wat is de 'Souter-opening'?"
        },
        options: [
          { en: "10-15, conservative development", es: "10-15, desarrollo conservador", de: "10-15, konservative Entwicklung", nl: "10-15, conservatieve ontwikkeling" },
          { en: "11-15, classical approach", es: "11-15, enfoque clásico", de: "11-15, klassischer Ansatz", nl: "11-15, klassieke aanpak" },
          { en: "9-14, center control priority", es: "9-14, prioridad de control central", de: "9-14, Zentrumskontrolle Priorität", nl: "9-14, centrum controle prioriteit" },
          { en: "12-16, flank development", es: "12-16, desarrollo de flanco", de: "12-16, Flankenentwicklung", nl: "12-16, flank ontwikkeling" }
        },
        correct: 0,
        explanation: {
          en: "The Souter opening (10-15) offers conservative, solid development that aims for safe, long-term advantages rather than sharp tactical complications, making it popular among positional players.",
          es: "La apertura Souter (10-15) ofrece desarrollo conservador y sólido que apunta a ventajas seguras a largo plazo en lugar de complicaciones tácticas agudas, haciéndola popular entre jugadores posicionales.",
          de: "Die Souter-Eröffnung (10-15) bietet konservative, solide Entwicklung, die auf sichere, langfristige Vorteile abzielt statt auf scharfe taktische Komplikationen, was sie unter Positionsspielern beliebt macht.",
          nl: "De Souter-opening (10-15) biedt conservatieve, solide ontwikkeling die streeft naar veilige, langetermijnvoordelen in plaats van scherpe tactische complicaties, waardoor het populair is onder positionele spelers."
        }
      },
      {
        question: {
          en: "What is 'prophylaxis' in checkers?",
          es: "¿Qué es la 'profilaxis' en las damas?",
          de: "Was ist 'Prophylaxe' beim Dame?",
          nl: "Wat is 'profylaxe' bij dammen?"
        },
        options: [
          { en: "Preventing injuries during play", es: "Prevenir lesiones durante el juego", de: "Verletzungen während des Spiels verhindern", nl: "Blessures tijdens het spel voorkomen" },
          { en: "Preventing opponent's plans before they execute them", es: "Prevenir los planes del oponente antes de que los ejecuten", de: "Die Pläne des Gegners verhindern, bevor sie sie ausführen", nl: "De plannen van de tegenstander voorkomen voordat ze ze uitvoeren" },
          { en: "Protecting pieces from capture", es: "Proteger piezas de captura", de: "Steine vor Schlägen schützen", nl: "Stenen beschermen tegen slaan" },
          { en: "Following prevention strategies", es: "Seguir estrategias de prevención", de: "Präventionsstrategien folgen", nl: "Preventie strategieën volgen" }
        },
        correct: 1,
        explanation: {
          en: "Prophylaxis is the strategic principle of preventing your opponent's plans and threats before they materialize, rather than waiting to react after they've created problems for you.",
          es: "La profilaxis es el principio estratégico de prevenir los planes y amenazas de tu oponente antes de que se materialicen, en lugar de esperar para reaccionar después de que hayan creado problemas para ti.",
          de: "Prophylaxe ist das strategische Prinzip, die Pläne und Drohungen deines Gegners zu verhindern, bevor sie sich materialisieren, anstatt zu warten und zu reagieren, nachdem sie Probleme für dich geschaffen haben.",
          nl: "Profylaxe is het strategische principe van het voorkomen van de plannen en bedreigingen van je tegenstander voordat ze zich materialiseren, in plaats van te wachten om te reageren nadat ze problemen voor je hebben gecreëerd."
        }
      },
      {
        question: {
          en: "What is the 'Fife opening'?",
          es: "¿Qué es la apertura 'Fife'?",
          de: "Was ist die 'Fife-Eröffnung'?",
          nl: "Wat is de 'Fife-opening'?"
        },
        options: [
          { en: "A musical-themed opening", es: "Una apertura con tema musical", de: "Eine musikalisch thematisierte Eröffnung", nl: "Een muzikaal thema opening" },
          { en: "9-13, with specific continuation patterns", es: "9-13, con patrones de continuación específicos", de: "9-13, mit spezifischen Fortsetzungsmustern", nl: "9-13, met specifieke voorzettingspatronen" },
          { en: "A Scottish regional variant", es: "Una variante regional escocesa", de: "Eine schottische regionale Variante", nl: "Een Schotse regionale variant" },
          { en: "Named after the fifth move option", es: "Nombrada por la quinta opción de movimiento", de: "Benannt nach der fünften Zugoption", nl: "Vernoemd naar de vijfde zetoptie" }
        },
        correct: 1,
        explanation: {
          en: "The Fife opening is a specific variation within the Cross opening family (9-13) with particular continuation lines that create distinctive middlegame positions and strategic themes.",
          es: "La apertura Fife es una variación específica dentro de la familia de apertura Cross (9-13) con líneas de continuación particulares que crean posiciones de medio juego distintivas y temas estratégicos.",
          de: "Die Fife-Eröffnung ist eine spezifische Variation innerhalb der Cross-Eröffnungsfamilie (9-13) mit bestimmten Fortsetzungslinien, die markante Mittelspiel-Positionen und strategische Themen schaffen.",
          nl: "De Fife-opening is een specifieke variatie binnen de Cross-openingsfamilie (9-13) met bepaalde voorzettingslijnen die onderscheidende middenspelposities en strategische thema's creëren."
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
