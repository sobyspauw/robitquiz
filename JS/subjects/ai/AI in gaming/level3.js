// AI in Gaming Quiz - Level 3: Advanced Gaming AI Concepts
(function() {
  const level3 = {
    name: {
      en: "AI in Gaming Level 3",
      es: "IA en Juegos Nivel 3",
      de: "KI im Gaming Stufe 3",
      nl: "AI in Gaming Level 3"
    },
    questions: [
      {
        question: {
          en: "What is the A* (A-star) algorithm commonly used for in game AI?",
          es: "¿Para qué se usa comúnmente el algoritmo A* (A-estrella) en la IA de juegos?",
          de: "Wofür wird der A* (A-Stern) Algorithmus häufig in Spiele-KI verwendet?",
          nl: "Waarvoor wordt het A* (A-ster) algoritme vaak gebruikt in game AI?"
        },
        options: [
          { en: "Efficient pathfinding and navigation", es: "Búsqueda de caminos y navegación eficiente", de: "Effiziente Pfadfindung und Navigation", nl: "Efficiënte pathfinding en navigatie" },
          { en: "Generating random numbers", es: "Generar números aleatorios", de: "Zufallszahlen generieren", nl: "Willekeurige getallen genereren" },
          { en: "Creating game graphics", es: "Crear gráficos de juego", de: "Spielgrafiken erstellen", nl: "Spelgraphics creëren" },
          { en: "Managing game saves", es: "Gestionar guardados de juego", de: "Spielstände verwalten", nl: "Spelbestanden beheren" }
        ],
        correct: 0,
        explanation: {
          en: "A* is a graph traversal algorithm widely used in games for finding the shortest path between two points while avoiding obstacles efficiently.",
          es: "A* es un algoritmo de recorrido de grafos ampliamente usado en juegos para encontrar el camino más corto entre dos puntos evitando obstáculos eficientemente.",
          de: "A* ist ein Graph-Durchlauf-Algorithmus der in Spielen weit verbreitet ist, um den kürzesten Weg zwischen zwei Punkten unter effizienter Vermeidung von Hindernissen zu finden.",
          nl: "A* is een graph traversal algoritme dat veel gebruikt wordt in games om de kortste route tussen twee punten te vinden terwijl obstakels efficiënt worden vermeden."
        }
      },
      {
        question: {
          en: "What is a 'behavior tree' in game AI?",
          es: "¿Qué es un 'árbol de comportamiento' en la IA de juegos?",
          de: "Was ist ein 'Verhaltensbaum' in Spiele-KI?",
          nl: "Wat is een 'behavior tree' in game AI?"
        },
        options: [
          { en: "Hierarchical structure for organizing AI decision-making", es: "Estructura jerárquica para organizar toma de decisiones de IA", de: "Hierarchische Struktur zur Organisation von KI-Entscheidungsfindung", nl: "Hiërarchische structuur voor het organiseren van AI-besluitvorming" },
          { en: "Tree-shaped game level", es: "Nivel de juego con forma de árbol", de: "Baumförmiges Spiel-Level", nl: "Boomvormig spelniveau" },
          { en: "Graphics rendering technique", es: "Técnica de renderizado gráfico", de: "Grafik-Rendering-Technik", nl: "Grafische renderingtechniek" },
          { en: "Database for storing player data", es: "Base de datos para almacenar datos del jugador", de: "Datenbank zur Speicherung von Spielerdaten", nl: "Database voor het opslaan van spelerdata" }
        ],
        correct: 0,
        explanation: {
          en: "Behavior trees provide a modular way to design complex AI behaviors by breaking them down into smaller, manageable nodes that can be combined and reused.",
          es: "Los árboles de comportamiento proporcionan una forma modular de diseñar comportamientos complejos de IA dividiéndolos en nodos más pequeños y manejables que pueden combinarse y reutilizarse.",
          de: "Verhaltensbäume bieten eine modulare Möglichkeit, komplexe KI-Verhaltensweisen zu entwerfen, indem sie in kleinere, handhabbare Knoten unterteilt werden, die kombiniert und wiederverwendet werden können.",
          nl: "Behavior trees bieden een modulaire manier om complexe AI-gedragingen te ontwerpen door ze op te splitsen in kleinere, beheersbare nodes die gecombineerd en hergebruikt kunnen worden."
        }
      },
      {
        question: {
          en: "What does 'emergent gameplay' mean in AI-driven games?",
          es: "¿Qué significa 'jugabilidad emergente' en juegos impulsados por IA?",
          de: "Was bedeutet 'emergentes Gameplay' in KI-gesteuerten Spielen?",
          nl: "Wat betekent 'emergent gameplay' in AI-gedreven games?"
        },
        options: [
          { en: "Complex behaviors arising from simple AI rules interactions", es: "Comportamientos complejos que surgen de interacciones simples de reglas de IA", de: "Komplexe Verhaltensweisen die aus einfachen KI-Regel-Interaktionen entstehen", nl: "Complexe gedragingen die ontstaan uit eenvoudige AI-regel interacties" },
          { en: "Games that appear suddenly", es: "Juegos que aparecen de repente", de: "Spiele die plötzlich erscheinen", nl: "Games die plotseling verschijnen" },
          { en: "Emergency save feature", es: "Función de guardado de emergencia", de: "Notfall-Speicherfunktion", nl: "Noodsave functie" },
          { en: "New game releases", es: "Nuevos lanzamientos de juegos", de: "Neue Spielveröffentlichungen", nl: "Nieuwe game releases" }
        ],
        correct: 0,
        explanation: {
          en: "Emergent gameplay occurs when simple AI rules interact to create unexpected, complex, and interesting player experiences that weren't explicitly programmed.",
          es: "La jugabilidad emergente ocurre cuando reglas simples de IA interactúan para crear experiencias de jugador inesperadas, complejas e interesantes que no fueron explícitamente programadas.",
          de: "Emergentes Gameplay entsteht, wenn einfache KI-Regeln interagieren und unerwartete, komplexe und interessante Spielererfahrungen schaffen, die nicht explizit programmiert wurden.",
          nl: "Emergent gameplay ontstaat wanneer eenvoudige AI-regels interacteren om onverwachte, complexe en interessante spelerservaringen te creëren die niet expliciet geprogrammeerd waren."
        }
      },
      {
        question: {
          en: "What is 'Monte Carlo Tree Search' used for in game AI?",
          es: "¿Para qué se usa 'Monte Carlo Tree Search' en la IA de juegos?",
          de: "Wofür wird 'Monte Carlo Tree Search' in Spiele-KI verwendet?",
          nl: "Waarvoor wordt 'Monte Carlo Tree Search' gebruikt in game AI?"
        },
        options: [
          { en: "Making optimal decisions in turn-based strategy games", es: "Tomar decisiones óptimas en juegos de estrategia por turnos", de: "Optimale Entscheidungen in rundenbasierten Strategiespielen treffen", nl: "Optimale beslissingen nemen in beurtgebaseerde strategiespellen" },
          { en: "Finding geographical locations", es: "Encontrar ubicaciones geográficas", de: "Geografische Standorte finden", nl: "Geografische locaties vinden" },
          { en: "Generating random music", es: "Generar música aleatoria", de: "Zufällige Musik generieren", nl: "Willekeurige muziek genereren" },
          { en: "Creating character animations", es: "Crear animaciones de personajes", de: "Charakter-Animationen erstellen", nl: "Karakteranimaties creëren" }
        ],
        correct: 0,
        explanation: {
          en: "MCTS uses random sampling and tree search to evaluate possible moves in complex games, famously used in games like Go and many modern strategy games.",
          es: "MCTS usa muestreo aleatorio y búsqueda en árbol para evaluar posibles movimientos en juegos complejos, famosamente usado en juegos como Go y muchos juegos de estrategia modernos.",
          de: "MCTS verwendet zufällige Stichproben und Baumsuche, um mögliche Züge in komplexen Spielen zu bewerten, berühmt verwendet in Spielen wie Go und vielen modernen Strategiespielen.",
          nl: "MCTS gebruikt willekeurige sampling en tree search om mogelijke zetten in complexe spellen te evalueren, beroemd gebruikt in spellen zoals Go en veel moderne strategiespellen."
        }
      },
      {
        question: {
          en: "What is 'dynamic difficulty adjustment' (DDA) in games?",
          es: "¿Qué es el 'ajuste dinámico de dificultad' (DDA) en juegos?",
          de: "Was ist 'dynamische Schwierigkeitsanpassung' (DDA) in Spielen?",
          nl: "Wat is 'dynamic difficulty adjustment' (DDA) in games?"
        },
        options: [
          { en: "Real-time modification of game challenge based on player performance", es: "Modificación en tiempo real del desafío del juego basada en el rendimiento del jugador", de: "Echtzeit-Anpassung der Spielherausforderung basierend auf Spielerleistung", nl: "Real-time aanpassing van speluitdaging gebaseerd op spelerprestaties" },
          { en: "Changing graphics quality automatically", es: "Cambiar automáticamente la calidad gráfica", de: "Automatische Änderung der Grafikqualität", nl: "Automatisch veranderen van grafische kwaliteit" },
          { en: "Adjusting sound volume dynamically", es: "Ajustar dinámicamente el volumen del sonido", de: "Dynamische Anpassung der Lautstärke", nl: "Dynamisch aanpassen van geluidsvolume" },
          { en: "Modifying control sensitivity", es: "Modificar la sensibilidad de controles", de: "Anpassung der Steuerungsempfindlichkeit", nl: "Aanpassen van besturingsgevoeligheid" }
        ],
        correct: 0,
        explanation: {
          en: "DDA systems monitor player behavior and automatically adjust game difficulty to maintain an optimal challenge level, keeping players engaged without frustration.",
          es: "Los sistemas DDA monitorean el comportamiento del jugador y ajustan automáticamente la dificultad del juego para mantener un nivel óptimo de desafío, manteniendo a los jugadores comprometidos sin frustración.",
          de: "DDA-Systeme überwachen Spielerverhalten und passen automatisch die Spielschwierigkeit an, um ein optimales Herausforderungsniveau zu erhalten und Spieler engagiert zu halten ohne Frustration.",
          nl: "DDA-systemen monitoren spelergedrag en passen automatisch de spelmoeilijkheid aan om een optimaal uitdagingsniveau te behouden, waardoor spelers betrokken blijven zonder frustratie."
        }
      },
      {
        question: {
          en: "What is a 'finite state machine' (FSM) in game AI?",
          es: "¿Qué es una 'máquina de estado finito' (FSM) en IA de juegos?",
          de: "Was ist eine 'endliche Zustandsmaschine' (FSM) in Spiele-KI?",
          nl: "Wat is een 'finite state machine' (FSM) in game AI?"
        },
        options: [
          { en: "A computational model with defined states and transitions for AI behavior", es: "Un modelo computacional con estados definidos y transiciones para comportamiento IA", de: "Ein Berechnungsmodell mit definierten Zuständen und Übergängen für KI-Verhalten", nl: "Een computermodel met gedefinieerde toestanden en overgangen voor AI-gedrag" },
          { en: "A machine that creates finite game worlds", es: "Una máquina que crea mundos de juego finitos", de: "Eine Maschine die endliche Spielwelten erstellt", nl: "Een machine die eindige spelwerelden creëert" },
          { en: "A type of graphics processor", es: "Un tipo de procesador gráfico", de: "Eine Art Grafikprozessor", nl: "Een type grafische processor" },
          { en: "A networking protocol for multiplayer games", es: "Un protocolo de red para juegos multijugador", de: "Ein Netzwerkprotokoll für Mehrspielerspiele", nl: "Een netwerkprotocol voor multiplayer games" }
        ],
        correct: 0,
        explanation: {
          en: "FSMs organize AI behavior into distinct states (idle, patrol, attack) with rules governing transitions between states, providing clear and predictable AI behavior patterns.",
          es: "Los FSM organizan el comportamiento IA en estados distintos (inactivo, patrulla, ataque) con reglas que gobiernan transiciones entre estados, proporcionando patrones de comportamiento IA claros y predecibles.",
          de: "FSMs organisieren KI-Verhalten in unterschiedliche Zustände (untätig, patrouillieren, angreifen) mit Regeln die Übergänge zwischen Zuständen steuern und klare und vorhersagbare KI-Verhaltensmuster bieten.",
          nl: "FSMs organiseren AI-gedrag in verschillende toestanden (inactief, patrouilleren, aanvallen) met regels die overgangen tussen toestanden beheersen, wat duidelijke en voorspelbare AI-gedragspatronen biedt."
        }
      },
      {
        question: {
          en: "What is 'procedural generation' in game development?",
          es: "¿Qué es la 'generación procedimental' en desarrollo de juegos?",
          de: "Was ist 'prozedurale Generierung' in der Spielentwicklung?",
          nl: "Wat is 'procedurele generatie' in spelontwikkeling?"
        },
        options: [
          { en: "Algorithmic creation of game content using rules and randomness", es: "Creación algorítmica de contenido de juego usando reglas y aleatoriedad", de: "Algorithmische Erstellung von Spielinhalten mit Regeln und Zufälligkeit", nl: "Algoritmische creatie van spelinhoud met regels en willekeurigheid" },
          { en: "Following step-by-step procedures manually", es: "Seguir procedimientos paso a paso manualmente", de: "Schrittweise Verfahren manuell befolgen", nl: "Stap-voor-stap procedures handmatig volgen" },
          { en: "Creating procedures for game testing", es: "Crear procedimientos para pruebas de juego", de: "Verfahren für Spieltests erstellen", nl: "Procedures creëren voor speltesten" },
          { en: "Generating game documentation automatically", es: "Generar documentación de juego automáticamente", de: "Automatische Generierung von Spieldokumentation", nl: "Automatisch speldocumentatie genereren" }
        ],
        correct: 0,
        explanation: {
          en: "Procedural generation uses algorithms to automatically create game content like levels, terrains, dungeons, and worlds, providing infinite variety and reducing manual design work.",
          es: "La generación procedimental usa algoritmos para crear automáticamente contenido de juego como niveles, terrenos, mazmorras y mundos, proporcionando variedad infinita y reduciendo trabajo de diseño manual.",
          de: "Prozedurale Generierung nutzt Algorithmen um automatisch Spielinhalte wie Level, Gelände, Verliese und Welten zu erstellen, bietet unendliche Vielfalt und reduziert manuelle Designarbeit.",
          nl: "Procedurele generatie gebruikt algoritmes om automatisch spelinhoud zoals levels, terreinen, dungeons en werelden te creëren, wat oneindige variëteit biedt en handmatig ontwerpwerk vermindert."
        }
      },
      {
        question: {
          en: "What is 'flocking behavior' in game AI?",
          es: "¿Qué es el 'comportamiento de bandada' en IA de juegos?",
          de: "Was ist 'Schwarmverhalten' in Spiele-KI?",
          nl: "Wat is 'zwermgedrag' in game AI?"
        },
        options: [
          { en: "AI simulation of group movement patterns like birds or fish", es: "Simulación IA de patrones de movimiento grupal como pájaros o peces", de: "KI-Simulation von Gruppenbewegungsmustern wie Vögel oder Fische", nl: "AI-simulatie van groepsbewegingspatronen zoals vogels of vissen" },
          { en: "Creating flocks of sheep in farming games", es: "Crear rebaños de ovejas en juegos de granja", de: "Schafherden in Farmerspielen erstellen", nl: "Kuddes schapen creëren in boerderijspellen" },
          { en: "Behavioral patterns of human crowds only", es: "Patrones de comportamiento solo de multitudes humanas", de: "Verhaltensmuster nur von Menschenmengen", nl: "Gedragspatronen alleen van menselijke menigten" },
          { en: "Aggressive pack hunting behavior", es: "Comportamiento agresivo de caza en manada", de: "Aggressives Rudeljagdverhalten", nl: "Agressief roedeljaaggedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Flocking behavior uses simple rules (separation, alignment, cohesion) to create realistic group movement patterns, commonly used for creatures, crowds, and particle effects.",
          es: "El comportamiento de bandada usa reglas simples (separación, alineación, cohesión) para crear patrones realistas de movimiento grupal, comúnmente usado para criaturas, multitudes y efectos de partículas.",
          de: "Schwarmverhalten nutzt einfache Regeln (Trennung, Ausrichtung, Zusammenhalt) um realistische Gruppenbewegungsmuster zu erstellen, häufig verwendet für Kreaturen, Menschenmengen und Partikeleffekte.",
          nl: "Zwermgedrag gebruikt eenvoudige regels (scheiding, uitlijning, cohesie) om realistische groepsbewegingspatronen te creëren, vaak gebruikt voor wezens, menigten en deeltjeseffecten."
        }
      },
      {
        question: {
          en: "What is 'navigation mesh' (NavMesh) in game AI?",
          es: "¿Qué es 'navigation mesh' (NavMesh) en IA de juegos?",
          de: "Was ist 'Navigation Mesh' (NavMesh) in Spiele-KI?",
          nl: "Wat is 'navigation mesh' (NavMesh) in game AI?"
        },
        options: [
          { en: "A 3D mesh defining walkable areas for AI pathfinding", es: "Una malla 3D que define áreas transitables para búsqueda de caminos IA", de: "Ein 3D-Netz das begehbare Bereiche für KI-Pfadfindung definiert", nl: "Een 3D-mesh die bewandelbare gebieden definieert voor AI-pathfinding" },
          { en: "A fishing net for catching game objects", es: "Una red de pesca para atrapar objetos del juego", de: "Ein Fischernetz zum Fangen von Spielobjekten", nl: "Een visnet voor het vangen van spelobjecten" },
          { en: "A network connection for multiplayer navigation", es: "Una conexión de red para navegación multijugador", de: "Eine Netzwerkverbindung für Mehrspielnagivation", nl: "Een netwerkverbinding voor multiplayer navigatie" },
          { en: "A mesh for creating water surfaces", es: "Una malla para crear superficies de agua", de: "Ein Netz für die Erstellung von Wasseroberflächen", nl: "Een mesh voor het creëren van wateroppervlakken" }
        ],
        correct: 0,
        explanation: {
          en: "NavMesh is a 2D/3D representation of walkable surfaces that AI characters use for efficient pathfinding, avoiding obstacles and finding optimal routes through complex environments.",
          es: "NavMesh es una representación 2D/3D de superficies transitables que personajes IA usan para búsqueda eficiente de caminos, evitando obstáculos y encontrando rutas óptimas a través de entornos complejos.",
          de: "NavMesh ist eine 2D/3D-Darstellung begehbarer Oberflächen die KI-Charaktere für effiziente Pfadfindung nutzen, Hindernisse vermeiden und optimale Routen durch komplexe Umgebungen finden.",
          nl: "NavMesh is een 2D/3D-representatie van bewandelbare oppervlakken die AI-karakters gebruiken voor efficiënte pathfinding, obstakels vermijden en optimale routes vinden door complexe omgevingen."
        }
      },
      {
        question: {
          en: "What is 'line of sight' (LOS) in game AI systems?",
          es: "¿Qué es 'línea de visión' (LOS) en sistemas de IA de juegos?",
          de: "Was ist 'Sichtlinie' (LOS) in Spiele-KI-Systemen?",
          nl: "Wat is 'line of sight' (LOS) in game AI systemen?"
        },
        options: [
          { en: "AI's ability to detect objects within visual range without obstructions", es: "Capacidad de la IA para detectar objetos dentro del rango visual sin obstrucciones", de: "Fähigkeit der KI Objekte innerhalb der Sichtweite ohne Hindernisse zu erkennen", nl: "AI's vermogen om objecten binnen visueel bereik zonder obstakels te detecteren" },
          { en: "Drawing straight lines in game graphics", es: "Dibujar líneas rectas en gráficos de juego", de: "Gerade Linien in Spielgrafiken zeichnen", nl: "Rechte lijnen tekenen in spelgraphics" },
          { en: "Network latency measurement", es: "Medición de latencia de red", de: "Netzwerk-Latenz-Messung", nl: "Netwerklatentiemeting" },
          { en: "User interface design principle", es: "Principio de diseño de interfaz de usuario", de: "Benutzeroberflächendesign-Prinzip", nl: "Gebruikersinterface ontwerpprincipe" }
        ],
        correct: 0,
        explanation: {
          en: "Line of sight determines whether AI can 'see' targets by checking for obstructions between the AI and the target, crucial for realistic NPC behavior and tactical gameplay.",
          es: "La línea de visión determina si la IA puede 'ver' objetivos verificando obstrucciones entre la IA y el objetivo, crucial para comportamiento realista de NPCs y jugabilidad táctica.",
          de: "Sichtlinie bestimmt ob KI Ziele 'sehen' kann durch Prüfung auf Hindernisse zwischen KI und Ziel, entscheidend für realistisches NPC-Verhalten und taktisches Gameplay.",
          nl: "Line of sight bepaalt of AI doelen kan 'zien' door te controleren op obstakels tussen de AI en het doel, cruciaal voor realistisch NPC-gedrag en tactische gameplay."
        }
      },
      {
        question: {
          en: "What is 'AI scripting' in game development?",
          es: "¿Qué es 'AI scripting' en desarrollo de juegos?",
          de: "Was ist 'KI-Skripting' in der Spielentwicklung?",
          nl: "Wat is 'AI scripting' in spelontwikkeling?"
        },
        options: [
          { en: "Programming AI behavior using scripts instead of hardcoded logic", es: "Programar comportamiento IA usando scripts en lugar de lógica codificada", de: "Programmierung von KI-Verhalten mit Skripten anstatt fest kodierter Logik", nl: "AI-gedrag programmeren met scripts in plaats van hardgecodeerde logica" },
          { en: "Writing dialogue scripts for NPCs", es: "Escribir guiones de diálogo para NPCs", de: "Dialogskripte für NPCs schreiben", nl: "Dialoogscripts schrijven voor NPCs" },
          { en: "Creating automated build scripts", es: "Crear scripts de construcción automatizados", de: "Automatisierte Build-Skripte erstellen", nl: "Geautomatiseerde build scripts creëren" },
          { en: "Writing game storylines", es: "Escribir líneas argumentales de juego", de: "Spielhandlungen schreiben", nl: "Spelverhaallijn schrijven" }
        ],
        correct: 0,
        explanation: {
          en: "AI scripting allows developers to define AI behavior using flexible script languages, enabling non-programmers to modify AI behavior and supporting rapid iteration and testing.",
          es: "El AI scripting permite a desarrolladores definir comportamiento IA usando lenguajes de script flexibles, permitiendo a no programadores modificar comportamiento IA y apoyando iteración y pruebas rápidas.",
          de: "KI-Skripting erlaubt Entwicklern KI-Verhalten mit flexiblen Skriptsprachen zu definieren, ermöglicht Nicht-Programmierern KI-Verhalten zu ändern und unterstützt schnelle Iteration und Tests.",
          nl: "AI scripting stelt ontwikkelaars in staat om AI-gedrag te definiëren met flexibele scripttalen, waardoor niet-programmeurs AI-gedrag kunnen wijzigen en snelle iteratie en testen wordt ondersteund."
        }
      },
      {
        question: {
          en: "What is 'crowd simulation' in game AI?",
          es: "¿Qué es 'simulación de multitudes' en IA de juegos?",
          de: "Was ist 'Menschenmengensimulation' in Spiele-KI?",
          nl: "Wat is 'menigtesimulatie' in game AI?"
        },
        options: [
          { en: "Simulating realistic behavior of large groups of AI characters", es: "Simular comportamiento realista de grandes grupos de personajes IA", de: "Simulation realistischen Verhaltens großer Gruppen von KI-Charakteren", nl: "Simuleren van realistisch gedrag van grote groepen AI-karakters" },
          { en: "Creating loud sound effects for crowds", es: "Crear efectos de sonido fuertes para multitudes", de: "Laute Soundeffekte für Menschenmengen erstellen", nl: "Luide geluidseffecten creëren voor menigten" },
          { en: "Crowdfunding simulation games", es: "Simular juegos de financiación colectiva", de: "Crowdfunding-Simulationsspiele", nl: "Crowdfunding simulatiespellen" },
          { en: "Managing multiplayer server crowds", es: "Gestionar multitudes de servidores multijugador", de: "Mehrspielserver-Menschenmengen verwalten", nl: "Multiplayer server menigten beheren" }
        ],
        correct: 0,
        explanation: {
          en: "Crowd simulation creates believable mass behavior by modeling individual agents that follow simple rules, resulting in emergent collective behaviors like panic, flocking, and queue formation.",
          es: "La simulación de multitudes crea comportamiento masivo creíble modelando agentes individuales que siguen reglas simples, resultando en comportamientos colectivos emergentes como pánico, bandadas y formación de colas.",
          de: "Menschenmengensimulation schafft glaubwürdiges Massenverhalten durch Modellierung individueller Agenten die einfachen Regeln folgen, was in emergenten kollektiven Verhaltensweisen wie Panik, Schwärmen und Schlangenbildung resultiert.",
          nl: "Menigtesimulatie creëert geloofwaardig massagedrag door individuele agenten te modelleren die eenvoudige regels volgen, wat resulteert in emergent collectief gedrag zoals paniek, zwermen en rijvorming."
        }
      },
      {
        question: {
          en: "What is 'decision trees' in game AI logic?",
          es: "¿Qué son los 'árboles de decisión' en lógica de IA de juegos?",
          de: "Was sind 'Entscheidungsbäume' in Spiele-KI-Logik?",
          nl: "Wat zijn 'beslissingsbomen' in game AI logica?"
        },
        options: [
          { en: "Hierarchical structures for organizing AI decision-making processes", es: "Estructuras jerárquicas para organizar procesos de toma de decisiones IA", de: "Hierarchische Strukturen zur Organisation von KI-Entscheidungsprozessen", nl: "Hiërarchische structuren voor het organiseren van AI-besluitvormingsprocessen" },
          { en: "Tree-shaped level designs in games", es: "Diseños de nivel con forma de árbol en juegos", de: "Baumförmige Level-Designs in Spielen", nl: "Boomvormige levelontwerpen in games" },
          { en: "Plant growth simulation algorithms", es: "Algoritmos de simulación de crecimiento de plantas", de: "Algorithmen zur Simulation von Pflanzenwachstum", nl: "Algoritmes voor plantengroei simulatie" },
          { en: "Data structures for storing game saves", es: "Estructuras de datos para almacenar guardados de juego", de: "Datenstrukturen zum Speichern von Spielständen", nl: "Datastructuren voor het opslaan van spelbestanden" }
        ],
        correct: 0,
        explanation: {
          en: "Decision trees provide a clear, branching structure for AI to evaluate conditions and make choices, often used for dialogue systems, tactical decisions, and reactive behaviors.",
          es: "Los árboles de decisión proporcionan una estructura clara y ramificada para que la IA evalúe condiciones y tome decisiones, a menudo usados para sistemas de diálogo, decisiones tácticas y comportamientos reactivos.",
          de: "Entscheidungsbäume bieten eine klare, verzweigende Struktur für KI um Bedingungen zu bewerten und Entscheidungen zu treffen, oft verwendet für Dialogsysteme, taktische Entscheidungen und reaktive Verhaltensweisen.",
          nl: "Beslissingsbomen bieden een duidelijke, vertakkende structuur voor AI om voorwaarden te evalueren en keuzes te maken, vaak gebruikt voor dialoogsystemen, tactische beslissingen en reactieve gedragingen."
        }
      },
      {
        question: {
          en: "What is 'reactive AI' in game systems?",
          es: "¿Qué es 'IA reactiva' en sistemas de juegos?",
          de: "Was ist 'reaktive KI' in Spielsystemen?",
          nl: "Wat is 'reactieve AI' in spelsystemen?"
        },
        options: [
          { en: "AI that responds to immediate stimuli without long-term planning", es: "IA que responde a estímulos inmediatos sin planificación a largo plazo", de: "KI die auf unmittelbare Reize ohne langfristige Planung reagiert", nl: "AI die reageert op onmiddellijke stimuli zonder langetermijnplanning" },
          { en: "AI that creates chemical reactions", es: "IA que crea reacciones químicas", de: "KI die chemische Reaktionen erzeugt", nl: "AI die chemische reacties creëert" },
          { en: "Emotionally reactive AI characters", es: "Personajes IA emocionalmente reactivos", de: "Emotional reaktive KI-Charaktere", nl: "Emotioneel reactieve AI-karakters" },
          { en: "AI that reacts only to player input", es: "IA que reacciona solo a entrada del jugador", de: "KI die nur auf Spielereingaben reagiert", nl: "AI die alleen reageert op spelerinvoer" }
        ],
        correct: 0,
        explanation: {
          en: "Reactive AI operates on stimulus-response patterns, making quick decisions based on current conditions without complex planning, ideal for fast-paced action games and immediate responses.",
          es: "La IA reactiva opera en patrones estímulo-respuesta, tomando decisiones rápidas basadas en condiciones actuales sin planificación compleja, ideal para juegos de acción rápidos y respuestas inmediatas.",
          de: "Reaktive KI arbeitet mit Reiz-Reaktions-Mustern, trifft schnelle Entscheidungen basierend auf aktuellen Bedingungen ohne komplexe Planung, ideal für schnelle Action-Spiele und sofortige Reaktionen.",
          nl: "Reactieve AI werkt met stimulus-respons patronen, neemt snelle beslissingen gebaseerd op huidige omstandigheden zonder complexe planning, ideaal voor snelle actiespellen en onmiddellijke reacties."
        }
      },
      {
        question: {
          en: "What is 'goal-based AI' in game character behavior?",
          es: "¿Qué es 'IA basada en objetivos' en comportamiento de personajes de juego?",
          de: "Was ist 'zielbasierte KI' in Spielcharakter-Verhalten?",
          nl: "Wat is 'doelgerichte AI' in spelkaraktergedrag?"
        },
        options: [
          { en: "AI that pursues specific objectives through planned action sequences", es: "IA que persigue objetivos específicos a través de secuencias de acción planificadas", de: "KI die spezifische Ziele durch geplante Aktionssequenzen verfolgt", nl: "AI die specifieke doelstellingen nastreeft door geplande actiesequenties" },
          { en: "AI that only manages game scoring systems", es: "IA que solo gestiona sistemas de puntuación de juego", de: "KI die nur Spielpunktesysteme verwaltet", nl: "AI die alleen spelscoresystemen beheert" },
          { en: "AI focused on achieving player goals", es: "IA enfocada en lograr objetivos del jugador", de: "KI fokussiert auf das Erreichen von Spielerzielen", nl: "AI gericht op het bereiken van spelerdoelen" },
          { en: "AI that sets goals for game levels", es: "IA que establece objetivos para niveles de juego", de: "KI die Ziele für Spiellevel festlegt", nl: "AI die doelen stelt voor spellevels" }
        ],
        correct: 0,
        explanation: {
          en: "Goal-based AI maintains objectives and creates plans to achieve them, allowing characters to pursue complex multi-step behaviors like gathering resources, building structures, or completing quests.",
          es: "La IA basada en objetivos mantiene objetivos y crea planes para lograrlos, permitiendo a personajes perseguir comportamientos complejos de múltiples pasos como recopilar recursos, construir estructuras o completar misiones.",
          de: "Zielbasierte KI hält Ziele aufrecht und erstellt Pläne um sie zu erreichen, ermöglicht Charakteren komplexe mehrstufige Verhaltensweisen wie Ressourcensammlung, Strukturbau oder Questerfüllung zu verfolgen.",
          nl: "Doelgerichte AI houdt doelstellingen bij en creëert plannen om ze te bereiken, waardoor karakters complexe meerstapsgedragingen kunnen nastreven zoals het verzamelen van bronnen, het bouwen van structuren of het voltooien van quests."
        }
      },
      {
        question: {
          en: "What is 'pathfinding optimization' in game AI?",
          es: "¿Qué es 'optimización de búsqueda de caminos' en IA de juegos?",
          de: "Was ist 'Pfadfindungsoptimierung' in Spiele-KI?",
          nl: "Wat is 'pathfinding optimalisatie' in game AI?"
        },
        options: [
          { en: "Techniques to improve speed and efficiency of route calculation algorithms", es: "Técnicas para mejorar velocidad y eficiencia de algoritmos de cálculo de rutas", de: "Techniken zur Verbesserung von Geschwindigkeit und Effizienz von Routenberechnungsalgorithmen", nl: "Technieken om snelheid en efficiëntie van routeberekeningsalgoritmes te verbeteren" },
          { en: "Finding the best paths for level design", es: "Encontrar los mejores caminos para diseño de niveles", de: "Die besten Pfade für Level-Design finden", nl: "De beste paden vinden voor levelontwerp" },
          { en: "Optimizing graphics rendering paths", es: "Optimizar rutas de renderizado gráfico", de: "Grafikrendering-Pfade optimieren", nl: "Grafische renderingpaden optimaliseren" },
          { en: "Network path optimization for multiplayer", es: "Optimización de ruta de red para multijugador", de: "Netzwerkpfad-Optimierung für Mehrspielermodus", nl: "Netwerkpadoptimalisatie voor multiplayer" }
        ],
        correct: 0,
        explanation: {
          en: "Pathfinding optimization uses techniques like hierarchical pathfinding, caching, and approximation algorithms to reduce computational cost while maintaining pathfinding quality for multiple AI agents.",
          es: "La optimización de búsqueda de caminos usa técnicas como búsqueda jerárquica de caminos, almacenamiento en caché y algoritmos de aproximación para reducir costo computacional mientras mantiene calidad de búsqueda para múltiples agentes IA.",
          de: "Pfadfindungsoptimierung nutzt Techniken wie hierarchische Pfadfindung, Caching und Approximationsalgorithmen um Berechnungskosten zu reduzieren während Pfadfindungsqualität für mehrere KI-Agenten erhalten bleibt.",
          nl: "Pathfinding optimalisatie gebruikt technieken zoals hiërarchische pathfinding, caching en benaderingsalgoritmes om computationele kosten te verminderen terwijl pathfinding kwaliteit voor meerdere AI-agenten behouden blijft."
        }
      },
      {
        question: {
          en: "What is 'AI debugging' in game development?",
          es: "¿Qué es 'depuración de IA' en desarrollo de juegos?",
          de: "Was ist 'KI-Debugging' in der Spielentwicklung?",
          nl: "Wat is 'AI debugging' in spelontwikkeling?"
        },
        options: [
          { en: "Tools and techniques for identifying and fixing AI behavior problems", es: "Herramientas y técnicas para identificar y corregir problemas de comportamiento IA", de: "Werkzeuge und Techniken zur Identifizierung und Behebung von KI-Verhaltensproblemen", nl: "Tools en technieken voor het identificeren en oplossen van AI-gedragsproblemen" },
          { en: "Removing bugs from game environments", es: "Eliminar insectos de entornos de juego", de: "Käfer aus Spielumgebungen entfernen", nl: "Insecten verwijderen uit spelomgevingen" },
          { en: "Testing network connections for AI", es: "Probar conexiones de red para IA", de: "Netzwerkverbindungen für KI testen", nl: "Netwerkverbindingen testen voor AI" },
          { en: "Debugging graphics rendering for AI", es: "Depurar renderizado gráfico para IA", de: "Grafikrendering für KI debuggen", nl: "Graphics rendering debuggen voor AI" }
        ],
        correct: 0,
        explanation: {
          en: "AI debugging involves visualization tools, logging systems, and testing frameworks to understand why AI behaves unexpectedly, helping developers identify logic errors and performance issues.",
          es: "La depuración de IA involucra herramientas de visualización, sistemas de registro y marcos de prueba para entender por qué la IA se comporta inesperadamente, ayudando a desarrolladores identificar errores de lógica y problemas de rendimiento.",
          de: "KI-Debugging umfasst Visualisierungstools, Logging-Systeme und Test-Frameworks um zu verstehen warum KI sich unerwartet verhält, hilft Entwicklern Logikfehler und Leistungsprobleme zu identifizieren.",
          nl: "AI debugging omvat visualisatietools, logging systemen en test frameworks om te begrijpen waarom AI zich onverwacht gedraagt, helpt ontwikkelaars logische fouten en prestatieproblemen te identificeren."
        }
      },
      {
        question: {
          en: "What is 'AI performance optimization' in games?",
          es: "¿Qué es 'optimización de rendimiento de IA' en juegos?",
          de: "Was ist 'KI-Leistungsoptimierung' in Spielen?",
          nl: "Wat is 'AI prestatie optimalisatie' in games?"
        },
        options: [
          { en: "Techniques to reduce computational cost of AI while maintaining quality", es: "Técnicas para reducir costo computacional de IA mientras se mantiene calidad", de: "Techniken zur Reduzierung der Berechnungskosten von KI bei gleichbleibender Qualität", nl: "Technieken om computationele kosten van AI te verminderen terwijl kwaliteit behouden blijft" },
          { en: "Making AI perform better at games", es: "Hacer que la IA rinda mejor en juegos", de: "KI dazu bringen besser in Spielen abzuschneiden", nl: "AI beter laten presteren in spellen" },
          { en: "Optimizing AI for competitive gaming", es: "Optimizar IA para juegos competitivos", de: "KI für kompetitive Spiele optimieren", nl: "AI optimaliseren voor competitieve gaming" },
          { en: "Performance monitoring for AI systems", es: "Monitoreo de rendimiento para sistemas IA", de: "Leistungsüberwachung für KI-Systeme", nl: "Prestatiemonitoring voor AI-systemen" }
        ],
        correct: 0,
        explanation: {
          en: "AI performance optimization uses techniques like level-of-detail AI, update frequency scaling, and computational budgeting to ensure smooth gameplay even with many AI characters active.",
          es: "La optimización de rendimiento de IA usa técnicas como IA de nivel de detalle, escalado de frecuencia de actualización y presupuestación computacional para asegurar jugabilidad fluida incluso con muchos personajes IA activos.",
          de: "KI-Leistungsoptimierung nutzt Techniken wie Level-of-Detail-KI, Update-Frequenz-Skalierung und Berechnungsbudgetierung um flüssiges Gameplay auch mit vielen aktiven KI-Charakteren zu gewährleisten.",
          nl: "AI prestatie optimalisatie gebruikt technieken zoals level-of-detail AI, update frequentie schaling en computationele budgettering om soepele gameplay te waarborgen zelfs met veel actieve AI-karakters."
        }
      },
      {
        question: {
          en: "What is 'AI state persistence' in game systems?",
          es: "¿Qué es 'persistencia de estado de IA' en sistemas de juegos?",
          de: "Was ist 'KI-Zustandspersistenz' in Spielsystemen?",
          nl: "Wat is 'AI toestand persistentie' in spelsystemen?"
        },
        options: [
          { en: "Saving and loading AI character states across game sessions", es: "Guardar y cargar estados de personajes IA a través de sesiones de juego", de: "Speichern und Laden von KI-Charakterzuständen über Spielsitzungen hinweg", nl: "AI-karaktertoestanden opslaan en laden over spelsessies heen" },
          { en: "AI that never changes its behavior", es: "IA que nunca cambia su comportamiento", de: "KI die ihr Verhalten nie ändert", nl: "AI die zijn gedrag nooit verandert" },
          { en: "Persistent network connections for AI", es: "Conexiones de red persistentes para IA", de: "Persistente Netzwerkverbindungen für KI", nl: "Persistente netwerkverbindingen voor AI" },
          { en: "AI that maintains consistent performance", es: "IA que mantiene rendimiento consistente", de: "KI die konsistente Leistung aufrechterhält", nl: "AI die consistente prestaties behoudt" }
        ],
        correct: 0,
        explanation: {
          en: "AI state persistence ensures that AI characters remember their previous states, relationships, and progress when players reload games, maintaining continuity and immersion in the game world.",
          es: "La persistencia de estado de IA asegura que personajes IA recuerden sus estados previos, relaciones y progreso cuando jugadores recargan juegos, manteniendo continuidad e inmersión en el mundo del juego.",
          de: "KI-Zustandspersistenz stellt sicher dass KI-Charaktere ihre vorherigen Zustände, Beziehungen und Fortschritte erinnern wenn Spieler Spiele neu laden, erhält Kontinuität und Immersion in der Spielwelt.",
          nl: "AI toestand persistentie zorgt ervoor dat AI-karakters hun vorige toestanden, relaties en voortgang onthouden wanneer spelers games herladen, wat continuïteit en immersie in de spelwereld behoudt."
        }
      },
      {
        question: {
          en: "What is 'utility-based AI' in game character decision making?",
          es: "¿Qué es 'IA basada en utilidad' en toma de decisiones de personajes de juego?",
          de: "Was ist 'nutzenbasierte KI' in Spielcharakter-Entscheidungsfindung?",
          nl: "Wat is 'utility-based AI' in spelkarakter besluitvorming?"
        },
        options: [
          { en: "AI that evaluates and selects actions based on calculated utility scores", es: "IA que evalúa y selecciona acciones basándose en puntuaciones de utilidad calculadas", de: "KI die Aktionen basierend auf berechneten Nutzenwerten bewertet und auswählt", nl: "AI die acties evalueert en selecteert gebaseerd op berekende utiliteitsscores" },
          { en: "AI that manages game utilities and resources", es: "IA que gestiona utilidades y recursos del juego", de: "KI die Spielwerkzeuge und -ressourcen verwaltet", nl: "AI die spelutilities en bronnen beheert" },
          { en: "AI designed for utility applications only", es: "IA diseñada solo para aplicaciones de utilidad", de: "KI nur für Anwendungsprogramme entwickelt", nl: "AI ontworpen alleen voor utility applicaties" },
          { en: "AI that provides useful tools for players", es: "IA que proporciona herramientas útiles para jugadores", de: "KI die nützliche Werkzeuge für Spieler bereitstellt", nl: "AI die nuttige tools biedt voor spelers" }
        ],
        correct: 0,
        explanation: {
          en: "Utility-based AI assigns numerical values to different actions based on current context and goals, then selects the action with the highest utility score, enabling nuanced and context-sensitive decision making.",
          es: "La IA basada en utilidad asigna valores numéricos a diferentes acciones basándose en contexto actual y objetivos, luego selecciona la acción con mayor puntuación de utilidad, permitiendo toma de decisiones matizada y sensible al contexto.",
          de: "Nutzenbasierte KI weist verschiedenen Aktionen numerische Werte basierend auf aktuellem Kontext und Zielen zu, wählt dann die Aktion mit höchstem Nutzenwert aus, ermöglicht nuancierte und kontextsensitive Entscheidungsfindung.",
          nl: "Utility-based AI wijst numerieke waarden toe aan verschillende acties gebaseerd op huidige context en doelen, selecteert dan de actie met de hoogste utiliteitsscore, waardoor genuanceerde en contextgevoelige besluitvorming mogelijk wordt."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();