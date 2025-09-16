// Robotics - Level 5: Autonomous Navigation & Path Planning
window.addLevel('mind-bender/robotics', {
  name: { 
    en: 'Autonomous Navigation & Path Planning', 
    es: 'Navegación Autónoma y Planificación de Rutas', 
    de: 'Autonome Navigation & Pfadplanung', 
    nl: 'Autonome Navigatie & Padplanning' 
  },
  questions: [
    {
      question: {
        en: "What is SLAM in robotics?",
        es: "¿Qué es SLAM en robótica?",
        de: "Was ist SLAM in der Robotik?",
        nl: "Wat is SLAM in de robotica?"
      },
      options: [
        { en: "Simultaneous Localization and Mapping - building a map while determining robot position", es: "Localización y Mapeo Simultáneos - construir un mapa mientras se determina la posición del robot", de: "Simultane Lokalisierung und Kartierung - Kartenerstellung bei gleichzeitiger Positionsbestimmung", nl: "Simultane Lokalisatie en Mapping - het bouwen van een kaart terwijl de robotpositie wordt bepaald" },
        { en: "Sequential Logic Automation Method for robot programming", es: "Método de Automatización de Lógica Secuencial para programación de robots", de: "Sequentielle Logik-Automatisierungsmethode für Roboterprogrammierung", nl: "Sequentiële Logica Automatiseringsmethode voor robotprogrammering" },
        { en: "Safety and Liability Analysis Module for robot compliance", es: "Módulo de Análisis de Seguridad y Responsabilidad para cumplimiento de robots", de: "Sicherheits- und Haftungsanalysemodul für Roboterkonformität", nl: "Veiligheids- en Aansprakelijkheidsanalysiemodule voor robotnaleving" },
        { en: "Standard Linear Actuation Mechanism for robot joints", es: "Mecanismo de Actuación Lineal Estándar para articulaciones de robot", de: "Standard Linear Antriebsmechanismus für Robotergelenke", nl: "Standaard Lineair Aandrijfmechanisme voor robotgewrichten" }
      ],
      correct: 0,
      explanation: {
        en: "SLAM (Simultaneous Localization and Mapping) is a fundamental technique where a robot builds a map of an unknown environment while simultaneously keeping track of its location within that map. This is crucial for autonomous navigation in unknown environments.",
        es: "SLAM (Localización y Mapeo Simultáneos) es una técnica fundamental donde un robot construye un mapa de un entorno desconocido mientras simultáneamente mantiene registro de su ubicación dentro de ese mapa. Esto es crucial para navegación autónoma en entornos desconocidos.",
        de: "SLAM (Simultane Lokalisierung und Kartierung) ist eine fundamentale Technik, bei der ein Roboter eine Karte einer unbekannten Umgebung erstellt und gleichzeitig seine Position innerhalb dieser Karte verfolgt. Dies ist entscheidend für autonome Navigation in unbekannten Umgebungen.",
        nl: "SLAM (Simultane Lokalisatie en Mapping) is een fundamentele techniek waarbij een robot een kaart van een onbekende omgeving bouwt terwijl hij tegelijkertijd zijn locatie binnen die kaart bijhoudt. Dit is cruciaal voor autonome navigatie in onbekende omgevingen."
      }
    },
    {
      question: {
        en: "What is the A* (A-star) algorithm used for in robotics?",
        es: "¿Para qué se usa el algoritmo A* (A-estrella) en robótica?",
        de: "Wofür wird der A* (A-Stern) Algorithmus in der Robotik verwendet?",
        nl: "Waarvoor wordt het A* (A-ster) algoritme gebruikt in de robotica?"
      },
      options: [
        { en: "Optimal path planning by finding the shortest route from start to goal", es: "Planificación de ruta óptima encontrando la ruta más corta desde el inicio hasta la meta", de: "Optimale Pfadplanung durch Finden der kürzesten Route von Start zum Ziel", nl: "Optimale padplanning door de kortste route van start naar doel te vinden" },
        { en: "Autonomous steering control for wheeled robots", es: "Control de dirección autónomo para robots con ruedas", de: "Autonome Lenksteuerung für Radroboter", nl: "Autonome stuurcontrole voor robots met wielen" },
        { en: "Actuator synchronization in multi-joint systems", es: "Sincronización de actuadores en sistemas de múltiples articulaciones", de: "Aktuatorsynchronisation in Mehrgelenksystemen", nl: "Actuator synchronisatie in multi-gewricht systemen" },
        { en: "Artificial vision processing for object recognition", es: "Procesamiento de visión artificial para reconocimiento de objetos", de: "Künstliche Sichtverarbeitung für Objekterkennung", nl: "Kunstmatige beeldverwerking voor objectherkenning" }
      ],
      correct: 0,
      explanation: {
        en: "A* is a graph traversal and path search algorithm that finds the optimal path from a start node to a goal node. It uses heuristics to efficiently explore the most promising paths first, making it ideal for robot path planning in grid-based or graph-based environments.",
        es: "A* es un algoritmo de travesía de grafos y búsqueda de rutas que encuentra el camino óptimo desde un nodo inicial hasta un nodo meta. Usa heurísticas para explorar eficientemente primero los caminos más prometedores, haciéndolo ideal para planificación de rutas de robots en entornos basados en cuadrícula o grafos.",
        de: "A* ist ein Graph-Traversal- und Pfadsuchalgorithmus, der den optimalen Pfad von einem Startknoten zu einem Zielknoten findet. Er verwendet Heuristiken, um die vielversprechendsten Pfade zuerst effizient zu erkunden, wodurch er ideal für Roboter-Pfadplanung in gitter- oder graphbasierten Umgebungen ist.",
        nl: "A* is een graaftraversal en padzoekalgoritme dat het optimale pad van een startknoop naar een doelknoop vindt. Het gebruikt heuristieken om efficiënt eerst de meest veelbelovende paden te verkennen, waardoor het ideaal is voor robotpadplanning in raster- of graafgebaseerde omgevingen."
      }
    },
    {
      question: {
        en: "What is occupancy grid mapping in mobile robotics?",
        es: "¿Qué es el mapeo de cuadrícula de ocupación en robótica móvil?",
        de: "Was ist Belegungsraster-Kartierung in der mobilen Robotik?",
        nl: "Wat is bezettingsraster mapping in mobiele robotica?"
      },
      options: [
        { en: "A probabilistic representation of space where each cell indicates the likelihood of being occupied", es: "Una representación probabilística del espacio donde cada celda indica la probabilidad de estar ocupada", de: "Eine probabilistische Raumdarstellung, wo jede Zelle die Wahrscheinlichkeit der Belegung anzeigt", nl: "Een probabilistische ruimterepresentatie waarbij elke cel de waarschijnlijkheid van bezetting aangeeft" },
        { en: "A scheduling system for multiple robots in shared workspaces", es: "Un sistema de programación para múltiples robots en espacios de trabajo compartidos", de: "Ein Planungssystem für mehrere Roboter in geteilten Arbeitsbereichen", nl: "Een planningssysteem voor meerdere robots in gedeelde werkruimten" },
        { en: "A method for detecting when workspace cells are being used", es: "Un método para detectar cuándo se están usando celdas del espacio de trabajo", de: "Eine Methode zur Erkennung, wann Arbeitsbereich-Zellen verwendet werden", nl: "Een methode voor het detecteren wanneer werkruimte cellen worden gebruikt" },
        { en: "A technique for organizing robot sensor data in tabular format", es: "Una técnica para organizar datos de sensores de robot en formato tabular", de: "Eine Technik zur Organisation von Roboter-Sensordaten in tabellarischer Form", nl: "Een techniek voor het organiseren van robotsensordata in tabelformaat" }
      ],
      correct: 0,
      explanation: {
        en: "Occupancy grid mapping divides space into a grid of cells, where each cell stores a probability value indicating whether that space is occupied, free, or unknown. This probabilistic approach handles sensor uncertainty and enables robust navigation planning.",
        es: "El mapeo de cuadrícula de ocupación divide el espacio en una cuadrícula de celdas, donde cada celda almacena un valor de probabilidad que indica si ese espacio está ocupado, libre o es desconocido. Este enfoque probabilístico maneja la incertidumbre del sensor y permite planificación de navegación robusta.",
        de: "Belegungsraster-Kartierung teilt den Raum in ein Raster von Zellen auf, wobei jede Zelle einen Wahrscheinlichkeitswert speichert, der anzeigt, ob dieser Raum belegt, frei oder unbekannt ist. Dieser probabilistische Ansatz behandelt Sensorunsicherheit und ermöglicht robuste Navigationsplanung.",
        nl: "Bezettingsraster mapping verdeelt ruimte in een raster van cellen, waarbij elke cel een kanswaarde opslaat die aangeeft of die ruimte bezet, vrij of onbekend is. Deze probabilistische benadering behandelt sensoronzekerheid en maakt robuuste navigatieplanning mogelijk."
      }
    },
    {
      question: {
        en: "What is the difference between global and local path planning?",
        es: "¿Cuál es la diferencia entre planificación de ruta global y local?",
        de: "Was ist der Unterschied zwischen globaler und lokaler Pfadplanung?",
        nl: "Wat is het verschil tussen globale en lokale padplanning?"
      },
      options: [
        { en: "Global planning creates complete routes, local planning handles immediate obstacles and refinements", es: "La planificación global crea rutas completas, la planificación local maneja obstáculos inmediatos y refinamientos", de: "Globale Planung erstellt vollständige Routen, lokale Planung behandelt sofortige Hindernisse und Verfeinerungen", nl: "Globale planning creëert complete routes, lokale planning behandelt onmiddellijke obstakels en verfijningen" },
        { en: "Global planning uses GPS coordinates, local planning uses relative positioning", es: "La planificación global usa coordenadas GPS, la planificación local usa posicionamiento relativo", de: "Globale Planung verwendet GPS-Koordinaten, lokale Planung verwendet relative Positionierung", nl: "Globale planning gebruikt GPS-coördinaten, lokale planning gebruikt relatieve positionering" },
        { en: "Global planning is for outdoor environments, local planning is for indoor spaces", es: "La planificación global es para entornos exteriores, la planificación local es para espacios interiores", de: "Globale Planung ist für Außenumgebungen, lokale Planung ist für Innenräume", nl: "Globale planning is voor buitenomgevingen, lokale planning is voor binnenruimten" },
        { en: "Global planning considers all robots, local planning focuses on individual robots", es: "La planificación global considera todos los robots, la planificación local se enfoca en robots individuales", de: "Globale Planung betrachtet alle Roboter, lokale Planung fokussiert auf einzelne Roboter", nl: "Globale planning houdt rekening met alle robots, lokale planning richt zich op individuele robots" }
      ],
      correct: 0,
      explanation: {
        en: "Global path planning computes an optimal route from start to destination using a complete map, while local path planning handles immediate obstacles, dynamic environments, and trajectory refinements in real-time during execution.",
        es: "La planificación de ruta global calcula una ruta óptima desde el inicio hasta el destino usando un mapa completo, mientras que la planificación de ruta local maneja obstáculos inmediatos, entornos dinámicos y refinamientos de trayectoria en tiempo real durante la ejecución.",
        de: "Globale Pfadplanung berechnet eine optimale Route von Start zu Ziel mit einer vollständigen Karte, während lokale Pfadplanung sofortige Hindernisse, dynamische Umgebungen und Trajektorien-Verfeinerungen in Echtzeit während der Ausführung behandelt.",
        nl: "Globale padplanning berekent een optimale route van start naar bestemming met behulp van een complete kaart, terwijl lokale padplanning onmiddellijke obstakels, dynamische omgevingen en traject verfijningen in real-time tijdens uitvoering behandelt."
      }
    },
    {
      question: {
        en: "What is the rapidly-exploring random tree (RRT) algorithm?",
        es: "¿Qué es el algoritmo de árbol aleatorio de exploración rápida (RRT)?",
        de: "Was ist der schnell erkundende Zufallsbaum (RRT) Algorithmus?",
        nl: "Wat is het rapidly-exploring random tree (RRT) algoritme?"
      },
      options: [
        { en: "A sampling-based path planning algorithm that explores space by randomly growing a tree structure", es: "Un algoritmo de planificación de rutas basado en muestreo que explora el espacio creciendo aleatoriamente una estructura de árbol", de: "Ein stichprobenbasierter Pfadplanungsalgorithmus, der den Raum durch zufälliges Wachstum einer Baumstruktur erkundet", nl: "Een op steekproeven gebaseerd padplanningsalgoritme dat ruimte verkent door willekeurig een boomstructuur te laten groeien" },
        { en: "A real-time tracking system for moving targets", es: "Un sistema de seguimiento en tiempo real para objetivos en movimiento", de: "Ein Echtzeit-Verfolgungssystem für bewegende Ziele", nl: "Een real-time volgsysteem voor bewegende doelen" },
        { en: "A robotic control technique for rapid response", es: "Una técnica de control robótico para respuesta rápida", de: "Eine Roboter-Steuerungstechnik für schnelle Reaktion", nl: "Een robotbesturingstechniek voor snelle respons" },
        { en: "A random number generator for robot decision making", es: "Un generador de números aleatorios para toma de decisiones de robots", de: "Ein Zufallszahlengenerator für Roboter-Entscheidungsfindung", nl: "Een willekeurige nummergenerator voor robotbesluitvorming" }
      ],
      correct: 0,
      explanation: {
        en: "RRT is a sampling-based algorithm that builds a tree of feasible paths by iteratively adding random samples to explore the configuration space. It's particularly effective for high-dimensional planning problems and complex environments with obstacles.",
        es: "RRT es un algoritmo basado en muestreo que construye un árbol de caminos factibles agregando iterativamente muestras aleatorias para explorar el espacio de configuración. Es particularmente efectivo para problemas de planificación de alta dimensión y entornos complejos con obstáculos.",
        de: "RRT ist ein stichprobenbasierter Algorithmus, der einen Baum machbarer Pfade durch iteratives Hinzufügen zufälliger Stichproben zur Erkundung des Konfigurationsraums aufbaut. Er ist besonders effektiv für hochdimensionale Planungsprobleme und komplexe Umgebungen mit Hindernissen.",
        nl: "RRT is een op steekproeven gebaseerd algoritme dat een boom van haalbare paden bouwt door iteratief willekeurige steekproeven toe te voegen om de configuratieruimte te verkennen. Het is bijzonder effectief voor hoog-dimensionale planningsproblemen en complexe omgevingen met obstakels."
      }
    },
    {
      question: {
        en: "What is dynamic window approach (DWA) in robot navigation?",
        es: "¿Qué es el enfoque de ventana dinámica (DWA) en navegación robótica?",
        de: "Was ist der dynamische Fenster-Ansatz (DWA) in der Roboter-Navigation?",
        nl: "Wat is de dynamische vensterbenadering (DWA) in robotnavigatie?"
      },
      options: [
        { en: "A local planning method that considers robot dynamics to find safe, executable velocities", es: "Un método de planificación local que considera las dinámicas del robot para encontrar velocidades seguras y ejecutables", de: "Eine lokale Planungsmethode, die Roboterdynamik berücksichtigt, um sichere, ausführbare Geschwindigkeiten zu finden", nl: "Een lokale planningsmethode die robotdynamica beschouwt om veilige, uitvoerbare snelheden te vinden" },
        { en: "A windowing technique for displaying multiple navigation views", es: "Una técnica de ventanas para mostrar múltiples vistas de navegación", de: "Eine Fenstertechnik zur Anzeige mehrerer Navigationsansichten", nl: "Een venstertechniek voor het weergeven van meerdere navigatieweergaven" },
        { en: "A method for adjusting sensor sensitivity based on speed", es: "Un método para ajustar la sensibilidad del sensor basándose en la velocidad", de: "Eine Methode zur Anpassung der Sensorempfindlichkeit basierend auf Geschwindigkeit", nl: "Een methode voor het aanpassen van sensorgevoeligheid gebaseerd op snelheid" },
        { en: "A dynamic allocation system for computational resources", es: "Un sistema de asignación dinámica para recursos computacionales", de: "Ein dynamisches Zuweisungssystem für Rechenressourcen", nl: "Een dynamisch toewijzingssysteem voor computationele bronnen" }
      ],
      correct: 0,
      explanation: {
        en: "DWA considers the robot's dynamic constraints (acceleration limits, maximum velocities) to generate a set of feasible velocity commands. It evaluates these commands based on safety, goal-reaching, and speed criteria to select optimal motion.",
        es: "DWA considera las restricciones dinámicas del robot (límites de aceleración, velocidades máximas) para generar un conjunto de comandos de velocidad factibles. Evalúa estos comandos basándose en criterios de seguridad, alcance de meta y velocidad para seleccionar movimiento óptimo.",
        de: "DWA berücksichtigt die dynamischen Beschränkungen des Roboters (Beschleunigungsgrenzen, maximale Geschwindigkeiten), um einen Satz machbarer Geschwindigkeitsbefehle zu generieren. Es bewertet diese Befehle basierend auf Sicherheits-, Zielerreichungs- und Geschwindigkeitskriterien zur Auswahl optimaler Bewegung.",
        nl: "DWA beschouwt de dynamische beperkingen van de robot (versnellingslimieten, maximale snelheden) om een set haalbare snelheidscommando's te genereren. Het evalueert deze commando's op basis van veiligheids-, doelbereikings- en snelheidscriteria om optimale beweging te selecteren."
      }
    },
    {
      question: {
        en: "What is localization in mobile robotics?",
        es: "¿Qué es la localización en robótica móvil?",
        de: "Was ist Lokalisierung in der mobilen Robotik?",
        nl: "Wat is lokalisatie in mobiele robotica?"
      },
      options: [
        { en: "Determining the robot's position and orientation within a known map or coordinate system", es: "Determinar la posición y orientación del robot dentro de un mapa conocido o sistema de coordenadas", de: "Bestimmung der Position und Orientierung des Roboters innerhalb einer bekannten Karte oder eines Koordinatensystems", nl: "Het bepalen van de positie en oriëntatie van de robot binnen een bekende kaart of coördinatensysteem" },
        { en: "Adapting robot software to local language and cultural settings", es: "Adaptar software de robot a idioma local y configuraciones culturales", de: "Anpassung der Roboter-Software an lokale Sprache und kulturelle Einstellungen", nl: "Robotsoftware aanpassen aan lokale taal- en culturele instellingen" },
        { en: "Restricting robot operation to specific geographic areas", es: "Restringir la operación del robot a áreas geográficas específicas", de: "Beschränkung des Roboterbetriebs auf bestimmte geografische Gebiete", nl: "Robotwerking beperken tot specifieke geografische gebieden" },
        { en: "Installing robots in local production facilities", es: "Instalar robots en instalaciones de producción locales", de: "Installation von Robotern in lokalen Produktionsanlagen", nl: "Robots installeren in lokale productievoorzieningen" }
      ],
      correct: 0,
      explanation: {
        en: "Localization is the process of determining a robot's position (x, y coordinates) and orientation (heading) within a known environment or map. This is essential for navigation, as robots need to know where they are to plan paths and execute movements effectively.",
        es: "La localización es el proceso de determinar la posición (coordenadas x, y) y orientación (rumbo) de un robot dentro de un entorno conocido o mapa. Esto es esencial para la navegación, ya que los robots necesitan saber dónde están para planificar rutas y ejecutar movimientos efectivamente.",
        de: "Lokalisierung ist der Prozess der Bestimmung der Position (x, y-Koordinaten) und Orientierung (Kurs) eines Roboters innerhalb einer bekannten Umgebung oder Karte. Dies ist für die Navigation wesentlich, da Roboter wissen müssen, wo sie sind, um Pfade zu planen und Bewegungen effektiv auszuführen.",
        nl: "Lokalisatie is het proces van het bepalen van de positie (x, y coördinaten) en oriëntatie (koers) van een robot binnen een bekende omgeving of kaart. Dit is essentieel voor navigatie, omdat robots moeten weten waar ze zijn om paden te plannen en bewegingen effectief uit te voeren."
      }
    },
    {
      question: {
        en: "What is Monte Carlo Localization (MCL) in robotics?",
        es: "¿Qué es la Localización Monte Carlo (MCL) en robótica?",
        de: "Was ist Monte Carlo Lokalisierung (MCL) in der Robotik?",
        nl: "Wat is Monte Carlo Lokalisatie (MCL) in de robotica?"
      },
      options: [
        { en: "A probabilistic localization algorithm using particle filters to estimate robot position", es: "Un algoritmo de localización probabilístico usando filtros de partículas para estimar la posición del robot", de: "Ein probabilistischer Lokalisierungsalgorithmus mit Partikelfiltern zur Schätzung der Roboterposition", nl: "Een probabilistisch lokalisatie-algoritme dat partikelfilters gebruikt om robotpositie te schatten" },
        { en: "A casino-based reward system for robot training", es: "Un sistema de recompensas basado en casino para entrenamiento de robots", de: "Ein casino-basiertes Belohnungssystem für Roboter-Training", nl: "Een casino-gebaseerd beloningssysteem voor robottraining" },
        { en: "A random movement strategy for exploration tasks", es: "Una estrategia de movimiento aleatorio para tareas de exploración", de: "Eine zufällige Bewegungsstrategie für Erkundungsaufgaben", nl: "Een willekeurige bewegingsstrategie voor verkenningstaken" },
        { en: "A statistical method for calculating navigation errors", es: "Un método estadístico para calcular errores de navegación", de: "Eine statistische Methode zur Berechnung von Navigationsfehlern", nl: "Een statistische methode voor het berekenen van navigatiefouten" }
      ],
      correct: 0,
      explanation: {
        en: "MCL uses a particle filter approach where multiple hypotheses (particles) represent possible robot positions. These particles are weighted based on sensor observations and resampled over time, converging to the most likely robot location through Bayesian inference.",
        es: "MCL usa un enfoque de filtro de partículas donde múltiples hipótesis (partículas) representan posibles posiciones del robot. Estas partículas son ponderadas basándose en observaciones de sensores y remuestreadas a lo largo del tiempo, convergiendo a la ubicación más probable del robot a través de inferencia bayesiana.",
        de: "MCL verwendet einen Partikelfilter-Ansatz, wo mehrere Hypothesen (Partikel) mögliche Roboterpositionen repräsentieren. Diese Partikel werden basierend auf Sensorbeobachtungen gewichtet und über die Zeit neu gesampelt, konvergierend zur wahrscheinlichsten Roboterposition durch Bayessche Inferenz.",
        nl: "MCL gebruikt een partikelfilter benadering waarbij meerdere hypothesen (partikels) mogelijke robotposities vertegenwoordigen. Deze partikels worden gewogen gebaseerd op sensorobservaties en over tijd opnieuw bemonsterd, convergerend naar de meest waarschijnlijke robotlocatie door Bayesiaanse inferentie."
      }
    },
    {
      question: {
        en: "What is configuration space (C-space) in robot path planning?",
        es: "¿Qué es el espacio de configuración (C-space) en planificación de rutas de robots?",
        de: "Was ist der Konfigurationsraum (C-Space) in der Roboter-Pfadplanung?",
        nl: "Wat is configuratieruimte (C-space) in robotpadplanning?"
      },
      options: [
        { en: "A mathematical space representing all possible robot configurations and poses", es: "Un espacio matemático que representa todas las configuraciones y poses posibles del robot", de: "Ein mathematischer Raum, der alle möglichen Roboterkonfigurationen und -posen repräsentiert", nl: "Een wiskundige ruimte die alle mogelijke robotconfiguraties en poses vertegenwoordigt" },
        { en: "The physical workspace where robots operate", es: "El espacio de trabajo físico donde operan los robots", de: "Der physische Arbeitsbereich, wo Roboter arbeiten", nl: "De fysieke werkruimte waar robots opereren" },
        { en: "A storage system for robot configuration files", es: "Un sistema de almacenamiento para archivos de configuración de robots", de: "Ein Speichersystem für Roboter-Konfigurationsdateien", nl: "Een opslagsysteem voor robotconfiguratiebestanden" },
        { en: "The control interface for setting robot parameters", es: "La interfaz de control para establecer parámetros del robot", de: "Die Steuerungsschnittstelle zur Einstellung von Roboterparametern", nl: "De besturingsinterface voor het instellen van robotparameters" }
      ],
      correct: 0,
      explanation: {
        en: "Configuration space is an abstract mathematical space where each point represents a unique configuration of the robot (joint angles, position, orientation). Path planning in C-space transforms the complex robot geometry into a point navigation problem, simplifying collision detection and path generation.",
        es: "El espacio de configuración es un espacio matemático abstracto donde cada punto representa una configuración única del robot (ángulos de articulaciones, posición, orientación). La planificación de rutas en C-space transforma la geometría compleja del robot en un problema de navegación de puntos, simplificando la detección de colisiones y generación de rutas.",
        de: "Konfigurationsraum ist ein abstrakter mathematischer Raum, wo jeder Punkt eine einzigartige Roboterkonfiguration (Gelenkwinkel, Position, Orientierung) repräsentiert. Pfadplanung im C-Space transformiert die komplexe Robotergeometrie in ein Punkt-Navigationsproblem, vereinfacht Kollisionserkennung und Pfadgenerierung.",
        nl: "Configuratieruimte is een abstracte wiskundige ruimte waarbij elk punt een unieke robotconfiguratie vertegenwoordigt (gewrichthoeken, positie, oriëntatie). Padplanning in C-space transformeert de complexe robotgeometrie in een puntnavigatie probleem, wat botsingsdetectie en padgeneratie vereenvoudigt."
      }
    },
    {
      question: {
        en: "What is the purpose of costmaps in robot navigation?",
        es: "¿Cuál es el propósito de los mapas de costo en navegación robótica?",
        de: "Was ist der Zweck von Kostenkarten in der Roboter-Navigation?",
        nl: "Wat is het doel van kostenkaarten in robotnavigatie?"
      },
      options: [
        { en: "Assigning traversal costs to different areas to guide optimal path selection", es: "Asignar costos de travesía a diferentes áreas para guiar la selección óptima de rutas", de: "Zuordnung von Durchfahrtskosten zu verschiedenen Bereichen zur Führung optimaler Pfadauswahl", nl: "Toewijzen van doorkruisingskosten aan verschillende gebieden om optimale padselectie te begeleiden" },
        { en: "Tracking the financial cost of robot operations", es: "Rastrear el costo financiero de las operaciones del robot", de: "Verfolgung der finanziellen Kosten des Roboterbetriebs", nl: "Het bijhouden van de financiële kosten van robotoperaties" },
        { en: "Mapping the energy consumption of different robot movements", es: "Mapear el consumo de energía de diferentes movimientos del robot", de: "Kartierung des Energieverbrauchs verschiedener Roboterbewegungen", nl: "Het in kaart brengen van energieverbruik van verschillende robotbewegingen" },
        { en: "Calculating the computational cost of navigation algorithms", es: "Calcular el costo computacional de algoritmos de navegación", de: "Berechnung der Rechenkosten von Navigationsalgorithmen", nl: "Het berekenen van de computationele kosten van navigatie-algoritmen" }
      ],
      correct: 0,
      explanation: {
        en: "Costmaps assign numerical values to different areas of the environment based on factors like safety, traversability, and preferences. Lower costs indicate preferred paths, while higher costs represent obstacles, dangerous areas, or less desirable routes, enabling intelligent path planning decisions.",
        es: "Los mapas de costo asignan valores numéricos a diferentes áreas del entorno basándose en factores como seguridad, transitabilidad y preferencias. Costos más bajos indican caminos preferidos, mientras que costos más altos representan obstáculos, áreas peligrosas o rutas menos deseables, permitiendo decisiones inteligentes de planificación de rutas.",
        de: "Kostenkarten weisen verschiedenen Umgebungsbereichen numerische Werte zu, basierend auf Faktoren wie Sicherheit, Befahrbarkeit und Präferenzen. Niedrigere Kosten zeigen bevorzugte Pfade an, während höhere Kosten Hindernisse, gefährliche Bereiche oder weniger wünschenswerte Routen repräsentieren, wodurch intelligente Pfadplanungsentscheidungen ermöglicht werden.",
        nl: "Kostenkaarten wijzen numerieke waarden toe aan verschillende gebieden van de omgeving op basis van factoren zoals veiligheid, begaanbaarheid en voorkeuren. Lagere kosten duiden op voorkeursroutes, terwijl hogere kosten obstakels, gevaarlijke gebieden of minder wenselijke routes vertegenwoordigen, wat intelligente padplanningsbeslissingen mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is odometry in mobile robotics?",
        es: "¿Qué es la odometría en robótica móvil?",
        de: "Was ist Odometrie in der mobilen Robotik?",
        nl: "Wat is odometrie in mobiele robotica?"
      },
      options: [
        { en: "Estimating robot position by integrating wheel encoder or sensor measurements over time", es: "Estimar la posición del robot integrando mediciones de codificador de rueda o sensores a lo largo del tiempo", de: "Schätzung der Roboterposition durch Integration von Radencoder- oder Sensormessungen über die Zeit", nl: "Het schatten van robotpositie door integratie van wielencoder of sensormetingen over tijd" },
        { en: "Measuring the distance traveled by robots using GPS", es: "Medir la distancia recorrida por robots usando GPS", de: "Messung der von Robotern zurückgelegten Strecke mit GPS", nl: "Het meten van de door robots afgelegde afstand met behulp van GPS" },
        { en: "A diagnostic system for detecting robot component wear", es: "Un sistema de diagnóstico para detectar desgaste de componentes de robot", de: "Ein Diagnosesystem zur Erkennung von Roboterkomponentenverschleiß", nl: "Een diagnostisch systeem voor het detecteren van robotcomponent slijtage" },
        { en: "The study of robot movement patterns and behaviors", es: "El estudio de patrones de movimiento y comportamientos de robots", de: "Das Studium von Roboterbewegungsmustern und -verhalten", nl: "De studie van robotbewegingspatronen en gedragingen" }
      ],
      correct: 0,
      explanation: {
        en: "Odometry estimates robot position and orientation by integrating motion measurements (wheel rotations, IMU data) over time. While useful for short-term navigation, odometry suffers from cumulative errors and drift, requiring periodic correction from other localization methods.",
        es: "La odometría estima la posición y orientación del robot integrando mediciones de movimiento (rotaciones de rueda, datos IMU) a lo largo del tiempo. Aunque útil para navegación a corto plazo, la odometría sufre de errores acumulativos y deriva, requiriendo corrección periódica de otros métodos de localización.",
        de: "Odometrie schätzt Roboterposition und -orientierung durch Integration von Bewegungsmessungen (Radumdrehungen, IMU-Daten) über die Zeit. Obwohl nützlich für kurzfristige Navigation, leidet Odometrie unter kumulativen Fehlern und Drift, was periodische Korrektur von anderen Lokalisierungsmethoden erfordert.",
        nl: "Odometrie schat robotpositie en oriëntatie door integratie van bewegingsmetingen (wielrotaties, IMU-data) over tijd. Hoewel nuttig voor korte-termijn navigatie, lijdt odometrie aan cumulatieve fouten en drift, wat periodieke correctie van andere lokalisatiemethoden vereist."
      }
    },
    {
      question: {
        en: "What is the artificial potential field method for robot navigation?",
        es: "¿Qué es el método de campo potencial artificial para navegación robótica?",
        de: "Was ist die künstliche Potentialfeld-Methode für Roboter-Navigation?",
        nl: "Wat is de kunstmatige potentiaalveldmethode voor robotnavigatie?"
      },
      options: [
        { en: "A technique that treats the goal as attractive and obstacles as repulsive forces to guide robot movement", es: "Una técnica que trata la meta como atractiva y los obstáculos como fuerzas repulsivas para guiar el movimiento del robot", de: "Eine Technik, die das Ziel als anziehend und Hindernisse als abstoßende Kräfte behandelt, um Roboterbewegung zu führen", nl: "Een techniek die het doel als aantrekkelijk en obstakels als afstotende krachten behandelt om robotbeweging te leiden" },
        { en: "An electrical field generator for powering autonomous robots", es: "Un generador de campo eléctrico para alimentar robots autónomos", de: "Ein elektrisches Feldgenerator zur Stromversorgung autonomer Roboter", nl: "Een elektrische veldgenerator voor het voeden van autonome robots" },
        { en: "A magnetic navigation system using artificial magnetic fields", es: "Un sistema de navegación magnético usando campos magnéticos artificiales", de: "Ein magnetisches Navigationssystem mit künstlichen Magnetfeldern", nl: "Een magnetisch navigatiesysteem dat kunstmatige magnetische velden gebruikt" },
        { en: "A virtual reality environment for testing robot algorithms", es: "Un entorno de realidad virtual para probar algoritmos de robot", de: "Eine Virtual-Reality-Umgebung zum Testen von Roboter-Algorithmen", nl: "Een virtual reality omgeving voor het testen van robotalgoritmen" }
      ],
      correct: 0,
      explanation: {
        en: "The artificial potential field method creates a virtual force field where the goal location generates an attractive force pulling the robot forward, while obstacles create repulsive forces pushing the robot away. The robot follows the gradient of the combined potential field toward the goal while avoiding obstacles.",
        es: "El método de campo potencial artificial crea un campo de fuerza virtual donde la ubicación de la meta genera una fuerza atractiva que jala al robot hacia adelante, mientras los obstáculos crean fuerzas repulsivas que empujan al robot lejos. El robot sigue el gradiente del campo potencial combinado hacia la meta mientras evita obstáculos.",
        de: "Die künstliche Potentialfeld-Methode erstellt ein virtuelles Kraftfeld, wo die Zielposition eine anziehende Kraft erzeugt, die den Roboter vorwärts zieht, während Hindernisse abstoßende Kräfte schaffen, die den Roboter wegdrücken. Der Roboter folgt dem Gradienten des kombinierten Potentialfelds zum Ziel, während er Hindernisse vermeidet.",
        nl: "De kunstmatige potentiaalveldmethode creëert een virtueel krachtenveld waarbij de doellocatie een aantrekkende kracht genereert die de robot voorwaarts trekt, terwijl obstakels afstotende krachten creëren die de robot wegduwen. De robot volgt de gradiënt van het gecombineerde potentiaalveld naar het doel terwijl obstakels worden vermeden."
      }
    },
    {
      question: {
        en: "What is visual odometry in robotics?",
        es: "¿Qué es la odometría visual en robótica?",
        de: "Was ist visuelle Odometrie in der Robotik?",
        nl: "Wat is visuele odometrie in de robotica?"
      },
      options: [
        { en: "Estimating robot motion by analyzing changes in camera images over time", es: "Estimar el movimiento del robot analizando cambios en imágenes de cámara a lo largo del tiempo", de: "Schätzung der Roboterbewegung durch Analyse von Änderungen in Kamerabildern über die Zeit", nl: "Het schatten van robotbeweging door analyse van veranderingen in camerabeelden over tijd" },
        { en: "A vision-based quality control system for manufacturing", es: "Un sistema de control de calidad basado en visión para manufactura", de: "Ein sichtbasiertes Qualitätskontrollsystem für die Fertigung", nl: "Een op zicht gebaseerd kwaliteitscontrolesysteem voor productie" },
        { en: "Measuring robot speed using optical sensors", es: "Medir la velocidad del robot usando sensores ópticos", de: "Messung der Robotergeschwindigkeit mit optischen Sensoren", nl: "Het meten van robotsnelheid met optische sensoren" },
        { en: "A visual programming interface for robot control", es: "Una interfaz de programación visual para control de robots", de: "Eine visuelle Programmierungsschnittstelle für Robotersteuerung", nl: "Een visuele programmeerinterface voor robotbesturing" }
      ],
      correct: 0,
      explanation: {
        en: "Visual odometry uses camera images to estimate robot motion by tracking visual features between consecutive frames. It computes the robot's position and orientation changes by analyzing how visual landmarks move in the camera's field of view, providing an alternative to wheel-based odometry.",
        es: "La odometría visual usa imágenes de cámara para estimar el movimiento del robot rastreando características visuales entre marcos consecutivos. Calcula los cambios de posición y orientación del robot analizando cómo se mueven los puntos de referencia visuales en el campo de visión de la cámara, proporcionando una alternativa a la odometría basada en ruedas.",
        de: "Visuelle Odometrie verwendet Kamerabilder zur Schätzung der Roboterbewegung durch Verfolgung visueller Merkmale zwischen aufeinanderfolgenden Frames. Sie berechnet die Positions- und Orientierungsänderungen des Roboters durch Analyse, wie sich visuelle Orientierungspunkte im Sichtfeld der Kamera bewegen, was eine Alternative zur radbasierten Odometrie bietet.",
        nl: "Visuele odometrie gebruikt camerabeelden om robotbeweging te schatten door visuele kenmerken tussen opeenvolgende frames te volgen. Het berekent de positie- en oriëntatieveranderingen van de robot door te analyseren hoe visuele herkenningspunten bewegen in het gezichtsveld van de camera, wat een alternatief biedt voor op wielen gebaseerde odometrie."
      }
    },
    {
      question: {
        en: "What is the Voronoi diagram method for path planning?",
        es: "¿Qué es el método de diagrama de Voronoi para planificación de rutas?",
        de: "Was ist die Voronoi-Diagramm-Methode für Pfadplanung?",
        nl: "Wat is de Voronoi-diagram methode voor padplanning?"
      },
      options: [
        { en: "Creating paths that maximize distance from obstacles by following Voronoi cell boundaries", es: "Crear caminos que maximicen la distancia de obstáculos siguiendo los límites de celdas de Voronoi", de: "Erstellen von Pfaden, die den Abstand zu Hindernissen maximieren, indem Voronoi-Zellgrenzen gefolgt wird", nl: "Het creëren van paden die afstand tot obstakels maximaliseren door Voronoi-celgrenzen te volgen" },
        { en: "A mathematical theorem for calculating optimal routes", es: "Un teorema matemático para calcular rutas óptimas", de: "Ein mathematischer Lehrsatz zur Berechnung optimaler Routen", nl: "Een wiskundige stelling voor het berekenen van optimale routes" },
        { en: "A pattern recognition method for identifying navigation landmarks", es: "Un método de reconocimiento de patrones para identificar puntos de referencia de navegación", de: "Eine Musterkennungsmethode zur Identifizierung von Navigations-Orientierungspunkten", nl: "Een patroonherkenningsmethode voor het identificeren van navigatie herkenningspunten" },
        { en: "A data structure for storing hierarchical path information", es: "Una estructura de datos para almacenar información jerárquica de rutas", de: "Eine Datenstruktur zur Speicherung hierarchischer Pfadinformationen", nl: "Een datastructuur voor het opslaan van hiërarchische padinformatie" }
      ],
      correct: 0,
      explanation: {
        en: "Voronoi diagrams partition space based on distance to obstacles, creating regions where each point is closer to one obstacle than any other. The boundaries between regions (Voronoi edges) represent paths that maximize clearance from obstacles, providing safe navigation corridors.",
        es: "Los diagramas de Voronoi particionan el espacio basándose en la distancia a obstáculos, creando regiones donde cada punto está más cerca de un obstáculo que de cualquier otro. Los límites entre regiones (bordes de Voronoi) representan caminos que maximizan la separación de obstáculos, proporcionando corredores de navegación seguros.",
        de: "Voronoi-Diagramme unterteilen den Raum basierend auf der Entfernung zu Hindernissen und schaffen Regionen, wo jeder Punkt näher zu einem Hindernis als zu jedem anderen ist. Die Grenzen zwischen Regionen (Voronoi-Kanten) repräsentieren Pfade, die den Abstand zu Hindernissen maximieren und sichere Navigationskorridore bieten.",
        nl: "Voronoi-diagrammen verdelen ruimte op basis van afstand tot obstakels, waarbij gebieden worden gecreëerd waar elk punt dichter bij één obstakel is dan bij enig ander. De grenzen tussen gebieden (Voronoi-randen) vertegenwoordigen paden die afstand tot obstakels maximaliseren, wat veilige navigatiecorridors biedt."
      }
    },
    {
      question: {
        en: "What is loop closure in SLAM?",
        es: "¿Qué es el cierre de bucle en SLAM?",
        de: "Was ist Schleifenschluss in SLAM?",
        nl: "Wat is lus sluiting in SLAM?"
      },
      options: [
        { en: "Recognizing when the robot returns to a previously visited location to correct mapping errors", es: "Reconocer cuando el robot regresa a una ubicación previamente visitada para corregir errores de mapeo", de: "Erkennen, wenn der Roboter zu einem zuvor besuchten Ort zurückkehrt, um Kartierungsfehler zu korrigieren", nl: "Het herkennen wanneer de robot terugkeert naar een eerder bezochte locatie om mappingfouten te corrigeren" },
        { en: "Completing a full navigation circuit around obstacles", es: "Completar un circuito de navegación completo alrededor de obstáculos", de: "Vervollständigung eines vollständigen Navigationskreislaufs um Hindernisse", nl: "Het voltooien van een volledig navigatiecircuit rond obstakels" },
        { en: "Closing control loops in robot motion systems", es: "Cerrar bucles de control en sistemas de movimiento de robots", de: "Schließen von Steuerkreisen in Roboterbewegungssystemen", nl: "Het sluiten van controle-lussen in robotbewegingssystemen" },
        { en: "Ending a mapping session and saving the final map", es: "Terminar una sesión de mapeo y guardar el mapa final", de: "Beenden einer Kartierungssitzung und Speichern der finalen Karte", nl: "Het beëindigen van een mappingsessie en opslaan van de uiteindelijke kaart" }
      ],
      correct: 0,
      explanation: {
        en: "Loop closure detection identifies when a robot has returned to a previously mapped area, allowing SLAM algorithms to correct accumulated drift and inconsistencies in both the map and the robot's trajectory. This is crucial for creating accurate, globally consistent maps.",
        es: "La detección de cierre de bucle identifica cuando un robot ha regresado a un área previamente mapeada, permitiendo que los algoritmos SLAM corrijan la deriva acumulada e inconsistencias tanto en el mapa como en la trayectoria del robot. Esto es crucial para crear mapas precisos y globalmente consistentes.",
        de: "Schleifenschlusserkennung identifiziert, wenn ein Roboter zu einem zuvor kartierten Bereich zurückgekehrt ist, wodurch SLAM-Algorithmen akkumulierte Drift und Inkonsistenzen sowohl in der Karte als auch in der Robotertrajektorie korrigieren können. Dies ist entscheidend für die Erstellung genauer, global konsistenter Karten.",
        nl: "Lussluiting detectie identificeert wanneer een robot is teruggekeerd naar een eerder gekarteerd gebied, waardoor SLAM-algoritmen geaccumuleerde drift en inconsistenties in zowel de kaart als het robottraject kunnen corrigeren. Dit is cruciaal voor het creëren van nauwkeurige, wereldwijd consistente kaarten."
      }
    },
    {
      question: {
        en: "What is the difference between holonomic and non-holonomic robots in motion planning?",
        es: "¿Cuál es la diferencia entre robots holonómicos y no holonómicos en planificación de movimiento?",
        de: "Was ist der Unterschied zwischen holonomen und nicht-holonomen Robotern in der Bewegungsplanung?",
        nl: "Wat is het verschil tussen holonomische en niet-holonomische robots in bewegingsplanning?"
      },
      options: [
        { en: "Holonomic robots can move in any direction instantly, non-holonomic robots have movement constraints", es: "Los robots holonómicos pueden moverse en cualquier dirección instantáneamente, los robots no holonómicos tienen restricciones de movimiento", de: "Holonome Roboter können sich sofort in jede Richtung bewegen, nicht-holonome Roboter haben Bewegungseinschränkungen", nl: "Holonomische robots kunnen onmiddellijk in elke richting bewegen, niet-holonomische robots hebben bewegingsbeperkingen" },
        { en: "Holonomic robots use wheels, non-holonomic robots use legs or tracks", es: "Los robots holonómicos usan ruedas, los robots no holonómicos usan patas o orugas", de: "Holonome Roboter verwenden Räder, nicht-holonome Roboter verwenden Beine oder Ketten", nl: "Holonomische robots gebruiken wielen, niet-holonomische robots gebruiken benen of rupsbanden" },
        { en: "Holonomic robots are autonomous, non-holonomic robots require human control", es: "Los robots holonómicos son autónomos, los robots no holonómicos requieren control humano", de: "Holonome Roboter sind autonom, nicht-holonome Roboter erfordern menschliche Steuerung", nl: "Holonomische robots zijn autonoom, niet-holonomische robots vereisen menselijke controle" },
        { en: "Holonomic robots work indoors, non-holonomic robots work outdoors", es: "Los robots holonómicos trabajan en interiores, los robots no holonómicos trabajan en exteriores", de: "Holonome Roboter arbeiten drinnen, nicht-holonome Roboter arbeiten draußen", nl: "Holonomische robots werken binnenshuis, niet-holonomische robots werken buitenshuis" }
      ],
      correct: 0,
      explanation: {
        en: "Holonomic robots can move in any direction at any time (like mecanum wheel robots), while non-holonomic robots have constraints on their motion (like car-like robots that cannot move sideways). This affects path planning complexity, as non-holonomic robots require consideration of their kinematic constraints.",
        es: "Los robots holonómicos pueden moverse en cualquier dirección en cualquier momento (como robots con ruedas mecanum), mientras que los robots no holonómicos tienen restricciones en su movimiento (como robots similares a autos que no pueden moverse lateralmente). Esto afecta la complejidad de la planificación de rutas, ya que los robots no holonómicos requieren consideración de sus restricciones cinemáticas.",
        de: "Holonome Roboter können sich jederzeit in jede Richtung bewegen (wie Mecanum-Rad-Roboter), während nicht-holonome Roboter Bewegungseinschränkungen haben (wie autoähnliche Roboter, die sich nicht seitwärts bewegen können). Dies beeinflusst die Komplexität der Pfadplanung, da nicht-holonome Roboter die Berücksichtigung ihrer kinematischen Beschränkungen erfordern.",
        nl: "Holonomische robots kunnen op elk moment in elke richting bewegen (zoals mecanum wiel robots), terwijl niet-holonomische robots bewegingsbeperkingen hebben (zoals auto-achtige robots die niet zijwaarts kunnen bewegen). Dit beïnvloedt de complexiteit van padplanning, omdat niet-holonomische robots overweging van hun kinematische beperkingen vereisen."
      }
    },
    {
      question: {
        en: "What is the timed elastic band (TEB) algorithm for robot navigation?",
        es: "¿Qué es el algoritmo de banda elástica temporizada (TEB) para navegación robótica?",
        de: "Was ist der zeitgesteuerte elastische Band (TEB) Algorithmus für Roboter-Navigation?",
        nl: "Wat is het timed elastic band (TEB) algoritme voor robotnavigatie?"
      },
      options: [
        { en: "A local trajectory optimization method that considers time-optimal, smooth paths while avoiding obstacles", es: "Un método de optimización de trayectoria local que considera caminos suaves y de tiempo óptimo mientras evita obstáculos", de: "Eine lokale Trajektorien-Optimierungsmethode, die zeit-optimale, glatte Pfade unter Vermeidung von Hindernissen berücksichtigt", nl: "Een lokale traject optimalisatiemethode die tijd-optimale, gladde paden overweegt terwijl obstakels worden vermeden" },
        { en: "A flexible scheduling system for coordinating multiple robot tasks", es: "Un sistema de programación flexible para coordinar múltiples tareas de robot", de: "Ein flexibles Planungssystem zur Koordination mehrerer Roboteraufgaben", nl: "Een flexibel planningssysteem voor het coördineren van meerdere robottaken" },
        { en: "An adaptive sensor band that adjusts timing based on robot speed", es: "Una banda de sensor adaptativa que ajusta el tiempo basándose en la velocidad del robot", de: "Ein adaptives Sensorband, das die Zeitsteuerung basierend auf Robotergeschwindigkeit anpasst", nl: "Een adaptieve sensorband die timing aanpast op basis van robotsnelheid" },
        { en: "A real-time communication protocol for robot swarms", es: "Un protocolo de comunicación en tiempo real para enjambres de robots", de: "Ein Echtzeit-Kommunikationsprotokoll für Roboterschwärme", nl: "Een real-time communicatieprotocol voor robotzwermen" }
      ],
      correct: 0,
      explanation: {
        en: "TEB optimizes robot trajectories by treating the path as an elastic band that can be deformed to minimize travel time, energy, and path deviation while satisfying constraints like obstacle avoidance and kinematic limits. It provides smooth, feasible trajectories for real-time navigation.",
        es: "TEB optimiza las trayectorias del robot tratando el camino como una banda elástica que puede ser deformada para minimizar tiempo de viaje, energía y desviación del camino mientras satisface restricciones como evitar obstáculos y límites cinemáticos. Proporciona trayectorias suaves y factibles para navegación en tiempo real.",
        de: "TEB optimiert Robotertrajektorien, indem es den Pfad als elastisches Band behandelt, das deformiert werden kann, um Reisezeit, Energie und Pfadabweichung zu minimieren, während Beschränkungen wie Hindernissvermeidung und kinematische Grenzen erfüllt werden. Es bietet glatte, machbare Trajektorien für Echtzeitnavigation.",
        nl: "TEB optimaliseert robottrajecten door het pad te behandelen als een elastische band die kan worden vervormd om reistijd, energie en padafwijking te minimaliseren terwijl beperkingen zoals obstakelbeging en kinematische limieten worden vervuld. Het biedt gladde, haalbare trajecten voor real-time navigatie."
      }
    },
    {
      question: {
        en: "What is semantic mapping in robotics?",
        es: "¿Qué es el mapeo semántico en robótica?",
        de: "Was ist semantische Kartierung in der Robotik?",
        nl: "Wat is semantische mapping in de robotica?"
      },
      options: [
        { en: "Creating maps that include object identification and semantic information about the environment", es: "Crear mapas que incluyan identificación de objetos e información semántica sobre el entorno", de: "Erstellen von Karten, die Objektidentifikation und semantische Informationen über die Umgebung einschließen", nl: "Het maken van kaarten die objectidentificatie en semantische informatie over de omgeving bevatten" },
        { en: "Using language processing to control robot navigation", es: "Usar procesamiento de lenguaje para controlar la navegación del robot", de: "Verwendung von Sprachverarbeitung zur Steuerung der Roboter-Navigation", nl: "Het gebruik van taalverwerking om robotnavigatie te besturen" },
        { en: "Mapping based on the meaning of robot movements", es: "Mapeo basado en el significado de los movimientos del robot", de: "Kartierung basierend auf der Bedeutung von Roboterbewegungen", nl: "Mapping gebaseerd op de betekenis van robotbewegingen" },
        { en: "Creating conceptual diagrams of robot behavior patterns", es: "Crear diagramas conceptuales de patrones de comportamiento de robots", de: "Erstellen konzeptioneller Diagramme von Roboter-Verhaltensmustern", nl: "Het maken van conceptuele diagrammen van robotgedragspatronen" }
      ],
      correct: 0,
      explanation: {
        en: "Semantic mapping goes beyond geometric representation to include semantic labels and object categories (chair, door, table) in the map. This enables higher-level reasoning, task planning, and more natural human-robot interaction by understanding what objects are present and their functional meanings.",
        es: "El mapeo semántico va más allá de la representación geométrica para incluir etiquetas semánticas y categorías de objetos (silla, puerta, mesa) en el mapa. Esto permite razonamiento de alto nivel, planificación de tareas e interacción humano-robot más natural al entender qué objetos están presentes y sus significados funcionales.",
        de: "Semantische Kartierung geht über geometrische Darstellung hinaus, um semantische Labels und Objektkategorien (Stuhl, Tür, Tisch) in die Karte einzuschließen. Dies ermöglicht höherstufiges Denken, Aufgabenplanung und natürlichere Mensch-Roboter-Interaktion durch Verständnis welche Objekte vorhanden sind und ihre funktionalen Bedeutungen.",
        nl: "Semantische mapping gaat verder dan geometrische representatie om semantische labels en objectcategorieën (stoel, deur, tafel) in de kaart op te nemen. Dit maakt hogere-orde redenering, taakplanning en natuurlijkere mens-robot interactie mogelijk door te begrijpen welke objecten aanwezig zijn en hun functionele betekenissen."
      }
    },
    {
      question: {
        en: "What is multi-robot path planning and coordination?",
        es: "¿Qué es la planificación de rutas y coordinación multi-robot?",
        de: "Was ist Multi-Roboter-Pfadplanung und -koordination?",
        nl: "Wat is multi-robot padplanning en coördinatie?"
      },
      options: [
        { en: "Planning collision-free paths for multiple robots operating in the same environment simultaneously", es: "Planificar caminos libres de colisiones para múltiples robots operando simultáneamente en el mismo entorno", de: "Planung kollisionsfreier Pfade für mehrere Roboter, die gleichzeitig in derselben Umgebung arbeiten", nl: "Het plannen van botsingsvrije paden voor meerdere robots die tegelijkertijd in dezelfde omgeving opereren" },
        { en: "A management system for organizing robot maintenance schedules", es: "Un sistema de gestión para organizar horarios de mantenimiento de robots", de: "Ein Verwaltungssystem zur Organisation von Roboter-Wartungsplänen", nl: "Een beheersysteem voor het organiseren van robot onderhoudsschema's" },
        { en: "Connecting multiple robots through wireless communication networks", es: "Conectar múltiples robots a través de redes de comunicación inalámbrica", de: "Verbindung mehrerer Roboter über drahtlose Kommunikationsnetzwerke", nl: "Het verbinden van meerdere robots via draadloze communicatienetwerken" },
        { en: "Training multiple robots to perform identical tasks", es: "Entrenar múltiples robots para realizar tareas idénticas", de: "Training mehrerer Roboter zur Ausführung identischer Aufgaben", nl: "Het trainen van meerdere robots om identieke taken uit te voeren" }
      ],
      correct: 0,
      explanation: {
        en: "Multi-robot path planning involves finding optimal, collision-free paths for multiple robots sharing the same workspace. This requires coordination algorithms to prevent inter-robot collisions, optimize overall system performance, and handle dynamic re-planning when robots interfere with each other's paths.",
        es: "La planificación de rutas multi-robot involucra encontrar caminos óptimos y libres de colisiones para múltiples robots compartiendo el mismo espacio de trabajo. Esto requiere algoritmos de coordinación para prevenir colisiones entre robots, optimizar el rendimiento general del sistema y manejar re-planificación dinámica cuando los robots interfieren con los caminos de otros.",
        de: "Multi-Roboter-Pfadplanung beinhaltet das Finden optimaler, kollisionsfreier Pfade für mehrere Roboter, die denselben Arbeitsbereich teilen. Dies erfordert Koordinationsalgorithmen, um Inter-Roboter-Kollisionen zu verhindern, die Gesamtsystemleistung zu optimieren und dynamische Neuplanung zu handhaben, wenn Roboter sich gegenseitig in die Pfade einmischen.",
        nl: "Multi-robot padplanning houdt in het vinden van optimale, botsingsvrije paden voor meerdere robots die dezelfde werkruimte delen. Dit vereist coördinatie-algoritmen om inter-robot botsingen te voorkomen, algehele systeemprestaties te optimaliseren en dynamische herplanning te hanteren wanneer robots elkaars paden verstoren."
      }
    },
    {
      question: {
        en: "What is Graph SLAM in robotics?",
        es: "¿Qué es Graph SLAM en robótica?",
        de: "Was ist Graph SLAM in der Robotik?",
        nl: "Wat is Graph SLAM in de robotica?"
      },
      options: [
        { en: "A SLAM approach representing robot poses and landmarks as nodes in a graph optimized globally", es: "Un enfoque SLAM que representa poses de robot y puntos de referencia como nodos en un grafo optimizado globalmente", de: "Ein SLAM-Ansatz, der Roboterposen und Orientierungspunkte als Knoten in einem global optimierten Graphen repräsentiert", nl: "Een SLAM-benadering die robotposes en herkenningspunten vertegenwoordigt als knopen in een globaal geoptimaliseerde graaf" },
        { en: "A visual representation tool for displaying SLAM results", es: "Una herramienta de representación visual para mostrar resultados de SLAM", de: "Ein visuelles Darstellungswerkzeug zur Anzeige von SLAM-Ergebnissen", nl: "Een visueel representatie gereedschap voor het weergeven van SLAM-resultaten" },
        { en: "A network topology for connecting multiple SLAM systems", es: "Una topología de red para conectar múltiples sistemas SLAM", de: "Eine Netzwerktopologie zur Verbindung mehrerer SLAM-Systeme", nl: "Een netwerktopologie voor het verbinden van meerdere SLAM-systemen" },
        { en: "A graph-based user interface for SLAM configuration", es: "Una interfaz de usuario basada en grafos para configuración de SLAM", de: "Eine graphbasierte Benutzeroberfläche für SLAM-Konfiguration", nl: "Een graaf-gebaseerde gebruikersinterface voor SLAM-configuratie" }
      ],
      correct: 0,
      explanation: {
        en: "Graph SLAM formulates the SLAM problem as a graph where nodes represent robot poses and landmark positions, while edges represent spatial constraints from sensor observations. Global optimization minimizes errors across the entire trajectory and map simultaneously.",
        es: "Graph SLAM formula el problema SLAM como un grafo donde los nodos representan poses de robot y posiciones de puntos de referencia, mientras que los bordes representan restricciones espaciales de observaciones de sensores. La optimización global minimiza errores a través de toda la trayectoria y mapa simultáneamente.",
        de: "Graph SLAM formuliert das SLAM-Problem als Graphen, wo Knoten Roboterposen und Orientierungspunktpositionen repräsentieren, während Kanten räumliche Beschränkungen aus Sensorbeobachtungen darstellen. Globale Optimierung minimiert Fehler über die gesamte Trajektorie und Karte gleichzeitig.",
        nl: "Graph SLAM formuleert het SLAM-probleem als een graaf waarbij knopen robotposes en herkenningspuntposities vertegenwoordigen, terwijl randen ruimtelijke beperkingen van sensorobservaties representeren. Globale optimalisatie minimaliseert fouten over het gehele traject en kaart tegelijkertijd."
      }
    },
    {
      question: {
        en: "What is probabilistic roadmap (PRM) in path planning?",
        es: "¿Qué es el mapa de carreteras probabilístico (PRM) en planificación de rutas?",
        de: "Was ist probabilistische Straßenkarte (PRM) in der Pfadplanung?",
        nl: "Wat is probabilistische roadmap (PRM) in padplanning?"
      },
      options: [
        { en: "A pre-computed network of collision-free paths sampled randomly from the configuration space", es: "Una red pre-computada de caminos libres de colisiones muestreados aleatoriamente del espacio de configuración", de: "Ein vorberechnetes Netzwerk kollisionsfreier Pfade, die zufällig aus dem Konfigurationsraum gesampelt wurden", nl: "Een vooraf berekend netwerk van botsingsvrije paden willekeurig bemonsterd uit de configuratieruimte" },
        { en: "A traffic management system for autonomous vehicles", es: "Un sistema de gestión de tráfico para vehículos autónomos", de: "Ein Verkehrsmanagementsystem für autonome Fahrzeuge", nl: "Een verkeersbeheersysteem voor autonome voertuigen" },
        { en: "A probability-based route recommendation system", es: "Un sistema de recomendación de rutas basado en probabilidad", de: "Ein wahrscheinlichkeitsbasiertes Routenempfehlungssystem", nl: "Een op waarschijnlijkheid gebaseerd route aanbevelingssysteem" },
        { en: "A map format that includes uncertainty information", es: "Un formato de mapa que incluye información de incertidumbre", de: "Ein Kartenformat, das Unsicherheitsinformationen einschließt", nl: "Een kaartformaat dat onzekerheidsinformatie bevat" }
      ],
      correct: 0,
      explanation: {
        en: "PRM builds a roadmap by randomly sampling collision-free configurations and connecting nearby samples with straight-line paths. This creates a graph of feasible motions that can be queried efficiently for path planning between any start and goal configurations.",
        es: "PRM construye un mapa de carreteras muestreando aleatoriamente configuraciones libres de colisiones y conectando muestras cercanas con caminos de línea recta. Esto crea un grafo de movimientos factibles que puede ser consultado eficientemente para planificación de rutas entre cualquier configuración de inicio y meta.",
        de: "PRM baut eine Straßenkarte durch zufälliges Sampeln kollisionsfreier Konfigurationen und Verbinden naher Samples mit geraden Pfaden auf. Dies erstellt einen Graphen machbarer Bewegungen, der effizient für Pfadplanung zwischen beliebigen Start- und Zielkonfigurationen abgefragt werden kann.",
        nl: "PRM bouwt een roadmap door willekeurig botsingsvrije configuraties te bemonsteren en nabije samples te verbinden met rechte-lijn paden. Dit creëert een graaf van haalbare bewegingen die efficiënt bevraagd kan worden voor padplanning tussen willekeurige start- en doelconfiguraties."
      }
    },
    {
      question: {
        en: "What is the Extended Kalman Filter (EKF) in robot localization?",
        es: "¿Qué es el Filtro de Kalman Extendido (EKF) en localización robótica?",
        de: "Was ist das erweiterte Kalman-Filter (EKF) in der Roboter-Lokalisierung?",
        nl: "Wat is het Extended Kalman Filter (EKF) in robotlokalisatie?"
      },
      options: [
        { en: "A probabilistic state estimation technique for tracking robot pose using sensor fusion", es: "Una técnica de estimación de estado probabilística para rastrear la pose del robot usando fusión de sensores", de: "Eine probabilistische Zustandsschätzungstechnik zur Verfolgung der Roboterpose mit Sensorfusion", nl: "Een probabilistische toestandsschattingstechniek voor het volgen van robotpose met sensorfusie" },
        { en: "An expanded version of standard navigation filters", es: "Una versión expandida de filtros de navegación estándar", de: "Eine erweiterte Version von Standard-Navigationsfiltern", nl: "Een uitgebreide versie van standaard navigatiefilters" },
        { en: "A Kalman filter with additional computational resources", es: "Un filtro de Kalman con recursos computacionales adicionales", de: "Ein Kalman-Filter mit zusätzlichen Rechenressourcen", nl: "Een Kalman-filter met extra computationele bronnen" },
        { en: "A filter designed specifically for large robot systems", es: "Un filtro diseñado específicamente para sistemas de robot grandes", de: "Ein Filter, der speziell für große Robotersysteme entwickelt wurde", nl: "Een filter specifiek ontworpen voor grote robotsystemen" }
      ],
      correct: 0,
      explanation: {
        en: "EKF extends the linear Kalman filter to handle nonlinear robot motion and sensor models by linearizing around the current state estimate. It recursively combines predictions from robot motion with sensor observations to maintain probabilistic estimates of robot pose with uncertainty quantification.",
        es: "EKF extiende el filtro de Kalman lineal para manejar modelos de movimiento de robot y sensores no lineales linealizando alrededor de la estimación de estado actual. Combina recursivamente predicciones del movimiento del robot con observaciones de sensores para mantener estimaciones probabilísticas de la pose del robot con cuantificación de incertidumbre.",
        de: "EKF erweitert das lineare Kalman-Filter zur Behandlung nichtlinearer Roboterbewegung und Sensormodelle durch Linearisierung um die aktuelle Zustandsschätzung. Es kombiniert rekursiv Vorhersagen aus Roboterbewegung mit Sensorbeobachtungen, um probabilistische Schätzungen der Roboterpose mit Unsicherheitsquantifizierung aufrechtzuerhalten.",
        nl: "EKF breidt het lineaire Kalman-filter uit om niet-lineaire robotbeweging en sensormodellen te hanteren door linearisatie rond de huidige toestandsschatting. Het combineert recursief voorspellingen van robotbeweging met sensorobservaties om probabilistische schattingen van robotpose te behouden met onzekerheidskaantificatie."
      }
    },
    {
      question: {
        en: "What is trajectory tracking in robotic navigation?",
        es: "¿Qué es el seguimiento de trayectoria en navegación robótica?",
        de: "Was ist Trajektorien-Verfolgung in der Roboter-Navigation?",
        nl: "Wat is traject volgen in robotnavigatie?"
      },
      options: [
        { en: "Controlling robot motion to follow a predefined time-parameterized path with specified timing", es: "Controlar el movimiento del robot para seguir un camino predefinido parametrizado en tiempo con temporización especificada", de: "Steuerung der Roboterbewegung zum Folgen eines vordefinierten zeitparametrisierten Pfads mit spezifizierter Zeitsteuerung", nl: "Het controleren van robotbeweging om een vooraf gedefinieerd tijd-geparametriseerd pad met gespecificeerde timing te volgen" },
        { en: "Recording robot movements for later analysis", es: "Grabar movimientos de robot para análisis posterior", de: "Aufzeichnung von Roboterbewegungen für spätere Analyse", nl: "Het opnemen van robotbewegingen voor latere analyse" },
        { en: "Monitoring robot position using GPS tracking", es: "Monitorear la posición del robot usando seguimiento GPS", de: "Überwachung der Roboterposition mit GPS-Verfolgung", nl: "Het monitoren van robotpositie met GPS-tracking" },
        { en: "Following other robots in formation", es: "Seguir otros robots en formación", de: "Folgen anderer Roboter in Formation", nl: "Het volgen van andere robots in formatie" }
      ],
      correct: 0,
      explanation: {
        en: "Trajectory tracking involves controlling robot actuators to follow a desired trajectory that specifies both spatial path and timing constraints. Unlike path following, trajectory tracking requires the robot to be at specific positions at specific times, which is crucial for coordination and precision tasks.",
        es: "El seguimiento de trayectoria involucra controlar actuadores de robot para seguir una trayectoria deseada que especifica tanto el camino espacial como las restricciones de tiempo. A diferencia del seguimiento de caminos, el seguimiento de trayectoria requiere que el robot esté en posiciones específicas en tiempos específicos, lo cual es crucial para coordinación y tareas de precisión.",
        de: "Trajektorien-Verfolgung beinhaltet die Steuerung von Roboter-Aktuatoren zum Folgen einer gewünschten Trajektorie, die sowohl räumlichen Pfad als auch Zeitbeschränkungen spezifiziert. Im Gegensatz zur Pfadverfolgung erfordert Trajektorien-Verfolgung, dass der Roboter zu bestimmten Zeiten an bestimmten Positionen ist, was für Koordination und Präzisionsaufgaben entscheidend ist.",
        nl: "Traject volgen houdt in het controleren van robotactuatoren om een gewenst traject te volgen dat zowel ruimtelijk pad als timing beperkingen specificeert. In tegenstelling tot pad volgen vereist traject volgen dat de robot op specifieke tijden op specifieke posities is, wat cruciaal is voor coördinatie en precisietaken."
      }
    },
    {
      question: {
        en: "What is reactive navigation in robotics?",
        es: "¿Qué es la navegación reactiva en robótica?",
        de: "Was ist reaktive Navigation in der Robotik?",
        nl: "Wat is reactieve navigatie in de robotica?"
      },
      options: [
        { en: "Real-time obstacle avoidance based on immediate sensor feedback without pre-planning", es: "Evitación de obstáculos en tiempo real basada en retroalimentación inmediata de sensores sin pre-planificación", de: "Echtzeit-Hindernissvermeidung basierend auf sofortiger Sensorrückmeldung ohne Vorplanung", nl: "Real-time obstakel vermijding gebaseerd op onmiddellijke sensor feedback zonder vooraf planning" },
        { en: "Navigation that responds to user commands", es: "Navegación que responde a comandos del usuario", de: "Navigation, die auf Benutzerbefehle reagiert", nl: "Navigatie die reageert op gebruikerscommando's" },
        { en: "Chemical-based navigation using reactive substances", es: "Navegación basada en químicos usando sustancias reactivas", de: "Chemiebasierte Navigation mit reaktiven Substanzen", nl: "Chemisch gebaseerde navigatie met reactieve stoffen" },
        { en: "Navigation that adapts to emotional robot states", es: "Navegación que se adapta a estados emocionales del robot", de: "Navigation, die sich an emotionale Roboterzustände anpasst", nl: "Navigatie die zich aanpast aan emotionele robottoestanden" }
      ],
      correct: 0,
      explanation: {
        en: "Reactive navigation creates robot behaviors that respond directly to sensor inputs without explicit path planning. It uses simple rules like 'move toward goal while avoiding obstacles' to generate motion, providing fast responses to dynamic environments but potentially leading to local minima or suboptimal paths.",
        es: "La navegación reactiva crea comportamientos de robot que responden directamente a entradas de sensores sin planificación explícita de rutas. Usa reglas simples como 'moverse hacia la meta mientras evita obstáculos' para generar movimiento, proporcionando respuestas rápidas a entornos dinámicos pero potencialmente llevando a mínimos locales o caminos subóptimos.",
        de: "Reaktive Navigation erstellt Roboterverhalten, die direkt auf Sensoreingaben reagieren, ohne explizite Pfadplanung. Sie verwendet einfache Regeln wie 'zum Ziel bewegen während Hindernisse vermieden werden', um Bewegung zu generieren, was schnelle Reaktionen auf dynamische Umgebungen bietet, aber möglicherweise zu lokalen Minima oder suboptimalen Pfaden führt.",
        nl: "Reactieve navigatie creëert robotgedragingen die direct reageren op sensorinputs zonder expliciete padplanning. Het gebruikt eenvoudige regels zoals 'beweeg naar doel terwijl obstakels worden vermeden' om beweging te genereren, wat snelle reacties op dynamische omgevingen biedt maar mogelijk tot lokale minima of suboptimale paden leidt."
      }
    },
    {
      question: {
        en: "What is frontier-based exploration in autonomous mapping?",
        es: "¿Qué es la exploración basada en fronteras en mapeo autónomo?",
        de: "Was ist grenzbasierte Erkundung in autonomer Kartierung?",
        nl: "Wat is grens-gebaseerde verkenning in autonome mapping?"
      },
      options: [
        { en: "A strategy where robots explore unknown areas by moving toward boundaries between known and unknown space", es: "Una estrategia donde los robots exploran áreas desconocidas moviéndose hacia límites entre espacio conocido y desconocido", de: "Eine Strategie, wo Roboter unbekannte Bereiche erkunden, indem sie sich zu Grenzen zwischen bekanntem und unbekanntem Raum bewegen", nl: "Een strategie waarbij robots onbekende gebieden verkennen door naar grenzen tussen bekende en onbekende ruimte te bewegen" },
        { en: "Exploration limited to border regions of the environment", es: "Exploración limitada a regiones fronterizas del entorno", de: "Erkundung begrenzt auf Grenzregionen der Umgebung", nl: "Verkenning beperkt tot grensgebieden van de omgeving" },
        { en: "A military-inspired reconnaissance technique", es: "Una técnica de reconocimiento inspirada en lo militar", de: "Eine militärisch inspirierte Aufklärungstechnik", nl: "Een militair geïnspireerde verkenningtechniek" },
        { en: "Mapping only the perimeter of accessible areas", es: "Mapear solo el perímetro de áreas accesibles", de: "Kartierung nur des Umfangs zugänglicher Bereiche", nl: "Het in kaart brengen van alleen de omtrek van toegankelijke gebieden" }
      ],
      correct: 0,
      explanation: {
        en: "Frontier-based exploration identifies frontiers - boundaries between explored (known) and unexplored (unknown) regions in the map. Robots systematically move to these frontiers to expand the known map area, ensuring efficient coverage and complete exploration of accessible space.",
        es: "La exploración basada en fronteras identifica fronteras - límites entre regiones exploradas (conocidas) y no exploradas (desconocidas) en el mapa. Los robots se mueven sistemáticamente a estas fronteras para expandir el área conocida del mapa, asegurando cobertura eficiente y exploración completa del espacio accesible.",
        de: "Grenzbasierte Erkundung identifiziert Grenzen - Grenzen zwischen erkundeten (bekannten) und unerkundeten (unbekannten) Regionen in der Karte. Roboter bewegen sich systematisch zu diesen Grenzen, um das bekannte Kartengebiet zu erweitern und effiziente Abdeckung und vollständige Erkundung des zugänglichen Raums zu gewährleisten.",
        nl: "Grens-gebaseerde verkenning identificeert grenzen - grenzen tussen verkende (bekende) en onverkende (onbekende) regio's in de kaart. Robots bewegen systematisch naar deze grenzen om het bekende kaartgebied uit te breiden, wat efficiënte dekking en volledige verkenning van toegankelijke ruimte verzekert."
      }
    },
    {
      question: {
        en: "What is the Social Force Model in pedestrian-aware robot navigation?",
        es: "¿Qué es el Modelo de Fuerza Social en navegación robótica consciente de peatones?",
        de: "Was ist das Social Force Model in fußgängerbewusster Roboter-Navigation?",
        nl: "Wat is het Social Force Model in voetganger-bewuste robotnavigatie?"
      },
      options: [
        { en: "A model treating pedestrians and robots as particles influenced by attractive and repulsive social forces", es: "Un modelo que trata a peatones y robots como partículas influenciadas por fuerzas sociales atractivas y repulsivas", de: "Ein Modell, das Fußgänger und Roboter als Partikel behandelt, die von anziehenden und abstoßenden sozialen Kräften beeinflusst werden", nl: "Een model dat voetgangers en robots behandelt als deeltjes beïnvloed door aantrekkende en afstotende sociale krachten" },
        { en: "A communication protocol for robot-human interaction", es: "Un protocolo de comunicación para interacción robot-humano", de: "Ein Kommunikationsprotokoll für Roboter-Mensch-Interaktion", nl: "Een communicatieprotocol voor robot-mens interactie" },
        { en: "A crowd simulation algorithm for entertainment", es: "Un algoritmo de simulación de multitudes para entretenimiento", de: "Ein Menschenmengensimulationsalgorithmus für Unterhaltung", nl: "Een menigte simulatie algoritme voor entertainment" },
        { en: "A social network analysis tool for robotics", es: "Una herramienta de análisis de redes sociales para robótica", de: "Ein soziales Netzwerkanalyse-Tool für Robotik", nl: "Een sociale netwerkanalyse tool voor robotica" }
      ],
      correct: 0,
      explanation: {
        en: "The Social Force Model represents pedestrians and robots as particles subject to forces: attractive forces toward goals, repulsive forces from obstacles and other agents, and social forces reflecting human movement patterns. This enables robots to navigate naturally in crowded environments while respecting social norms.",
        es: "El Modelo de Fuerza Social representa a peatones y robots como partículas sujetas a fuerzas: fuerzas atractivas hacia metas, fuerzas repulsivas de obstáculos y otros agentes, y fuerzas sociales que reflejan patrones de movimiento humano. Esto permite a los robots navegar naturalmente en entornos llenos de gente mientras respetan normas sociales.",
        de: "Das Social Force Model repräsentiert Fußgänger und Roboter als Partikel, die Kräften unterworfen sind: anziehende Kräfte zu Zielen, abstoßende Kräfte von Hindernissen und anderen Agenten, und soziale Kräfte, die menschliche Bewegungsmuster widerspiegeln. Dies ermöglicht es Robotern, natürlich in überfüllten Umgebungen zu navigieren, während soziale Normen respektiert werden.",
        nl: "Het Social Force Model vertegenwoordigt voetgangers en robots als deeltjes onderworpen aan krachten: aantrekkende krachten naar doelen, afstotende krachten van obstakels en andere agenten, en sociale krachten die menselijke bewegingspatronen weerspiegelen. Dit stelt robots in staat natuurlijk te navigeren in drukke omgevingen terwijl sociale normen worden gerespecteerd."
      }
    },
    {
      question: {
        en: "What is path smoothing in robot trajectory planning?",
        es: "¿Qué es el suavizado de caminos en planificación de trayectorias de robots?",
        de: "Was ist Pfadglättung in der Roboter-Trajektorienplanung?",
        nl: "Wat is pad gladmaken in robot traject planning?"
      },
      options: [
        { en: "Post-processing planned paths to reduce sharp turns and create smooth, executable trajectories", es: "Post-procesamiento de caminos planificados para reducir giros bruscos y crear trayectorias suaves y ejecutables", de: "Nachbearbeitung geplanter Pfade zur Reduzierung scharfer Kurven und Erstellung glatter, ausführbarer Trajektorien", nl: "Nabewerking van geplande paden om scherpe bochten te verminderen en gladde, uitvoerbare trajecten te creëren" },
        { en: "Maintaining smooth robot surfaces to reduce friction", es: "Mantener superficies de robot suaves para reducir fricción", de: "Aufrechterhaltung glatter Roboter-Oberflächen zur Reibungsreduzierung", nl: "Het onderhouden van gladde robotoppervlakken om wrijving te verminderen" },
        { en: "Filtering sensor noise from path measurements", es: "Filtrar ruido de sensor de mediciones de camino", de: "Filterung von Sensorrauschen aus Pfadmessungen", nl: "Het filteren van sensorruis uit padmetingen" },
        { en: "Creating visually appealing path displays", es: "Crear visualizaciones de caminos visualmente atractivas", de: "Erstellung visuell ansprechender Pfadanzeigen", nl: "Het maken van visueel aantrekkelijke padweergaven" }
      ],
      correct: 0,
      explanation: {
        en: "Path smoothing takes discrete, potentially jagged paths from planning algorithms and transforms them into smooth, continuous trajectories that robots can follow safely. This involves techniques like spline fitting, Bezier curves, or iterative smoothing to remove sharp corners while maintaining obstacle clearance.",
        es: "El suavizado de caminos toma caminos discretos, potencialmente irregulares de algoritmos de planificación y los transforma en trayectorias suaves y continuas que los robots pueden seguir de manera segura. Esto involucra técnicas como ajuste de splines, curvas de Bezier, o suavizado iterativo para eliminar esquinas afiladas mientras mantiene separación de obstáculos.",
        de: "Pfadglättung nimmt diskrete, potenziell gezackte Pfade von Planungsalgorithmen und transformiert sie in glatte, kontinuierliche Trajektorien, denen Roboter sicher folgen können. Dies beinhaltet Techniken wie Spline-Anpassung, Bezier-Kurven oder iterative Glättung, um scharfe Ecken zu entfernen, während Hindernisabstand beibehalten wird.",
        nl: "Pad gladmaken neemt discrete, mogelijk gekartelde paden van planningsalgoritmen en transformeert ze in gladde, continue trajecten die robots veilig kunnen volgen. Dit houdt technieken in zoals spline fitting, Bezier-curven, of iteratieve gladmaking om scherpe hoeken te verwijderen terwijl obstakel afstand behouden wordt."
      }
    },
    {
      question: {
        en: "What is the role of dead reckoning in robot navigation?",
        es: "¿Cuál es el papel de la navegación por estima en navegación robótica?",
        de: "Was ist die Rolle der Koppelnavigation in der Roboter-Navigation?",
        nl: "Wat is de rol van dode navigatie in robotnavigatie?"
      },
      options: [
        { en: "Estimating current position based on previously known position and recorded movements", es: "Estimar la posición actual basándose en una posición previamente conocida y movimientos registrados", de: "Schätzung der aktuellen Position basierend auf zuvor bekannter Position und aufgezeichneten Bewegungen", nl: "Het schatten van huidige positie gebaseerd op eerder bekende positie en opgenomen bewegingen" },
        { en: "Detecting when robot systems have failed", es: "Detectar cuando los sistemas de robot han fallado", de: "Erkennung, wann Robotersysteme versagt haben", nl: "Het detecteren wanneer robotsystemen hebben gefaald" },
        { en: "Navigation in areas with no GPS signal", es: "Navegación en áreas sin señal GPS", de: "Navigation in Gebieten ohne GPS-Signal", nl: "Navigatie in gebieden zonder GPS-signaal" },
        { en: "Calculating the shortest path between waypoints", es: "Calcular el camino más corto entre puntos de referencia", de: "Berechnung des kürzesten Pfads zwischen Wegpunkten", nl: "Het berekenen van het kortste pad tussen waypoints" }
      ],
      correct: 0,
      explanation: {
        en: "Dead reckoning estimates the robot's current position by integrating movement data (distance traveled, heading changes) from a known starting position. While simple and autonomous, it accumulates errors over time due to wheel slip, measurement noise, and model inaccuracies, requiring periodic correction from external references.",
        es: "La navegación por estima estima la posición actual del robot integrando datos de movimiento (distancia recorrida, cambios de rumbo) desde una posición de inicio conocida. Aunque simple y autónoma, acumula errores con el tiempo debido a deslizamiento de ruedas, ruido de medición e inexactitudes del modelo, requiriendo corrección periódica de referencias externas.",
        de: "Koppelnavigation schätzt die aktuelle Roboterposition durch Integration von Bewegungsdaten (zurückgelegte Strecke, Kursänderungen) von einer bekannten Startposition. Obwohl einfach und autonom, akkumuliert sie Fehler über die Zeit aufgrund von Radschlupf, Messrauschen und Modellungenauigkeiten, was periodische Korrektur von externen Referenzen erfordert.",
        nl: "Dode navigatie schat de huidige robotpositie door integratie van bewegingsdata (afgelegde afstand, koersveranderingen) van een bekende startpositie. Hoewel eenvoudig en autonoom, accumuleert het fouten over tijd door wielslip, meetruis en modelonnauwkeurigheden, wat periodieke correctie van externe referenties vereist."
      }
    },
    {
      question: {
        en: "What is the D* (D-star) algorithm for dynamic path planning?",
        es: "¿Qué es el algoritmo D* (D-estrella) para planificación dinámica de rutas?",
        de: "Was ist der D* (D-Stern) Algorithmus für dynamische Pfadplanung?",
        nl: "Wat is het D* (D-ster) algoritme voor dynamische padplanning?"
      },
      options: [
        { en: "An incremental search algorithm that efficiently replans paths when new obstacles are discovered", es: "Un algoritmo de búsqueda incremental que replanifica eficientemente caminos cuando se descubren nuevos obstáculos", de: "Ein inkrementeller Suchalgorithmus, der Pfade effizient neu plant, wenn neue Hindernisse entdeckt werden", nl: "Een incrementeel zoekalgoritme dat efficiënt paden herplant wanneer nieuwe obstakels worden ontdekt" },
        { en: "A star-shaped path planning pattern", es: "Un patrón de planificación de rutas en forma de estrella", de: "Ein sternförmiges Pfadplanungsmuster", nl: "Een stervormig padplanningspatroon" },
        { en: "A distributed algorithm for multiple robot coordination", es: "Un algoritmo distribuido para coordinación de múltiples robots", de: "Ein verteilter Algorithmus für Multi-Roboter-Koordination", nl: "Een gedistribueerd algoritme voor meerdere robot coördinatie" },
        { en: "A dynamic programming approach for optimal control", es: "Un enfoque de programación dinámica para control óptimo", de: "Ein dynamischer Programmierungsansatz für optimale Steuerung", nl: "Een dynamische programmeringsbenadering voor optimale controle" }
      ],
      correct: 0,
      explanation: {
        en: "D* is designed for dynamic environments where the map changes during navigation. Unlike A* which replans from scratch, D* incrementally updates the search tree, propagating changes only where necessary, making it efficient for real-time navigation in unknown or changing environments.",
        es: "D* está diseñado para entornos dinámicos donde el mapa cambia durante la navegación. A diferencia de A* que replanifica desde cero, D* actualiza incrementalmente el árbol de búsqueda, propagando cambios solo donde es necesario, haciéndolo eficiente para navegación en tiempo real en entornos desconocidos o cambiantes.",
        de: "D* ist für dynamische Umgebungen konzipiert, wo sich die Karte während der Navigation ändert. Im Gegensatz zu A*, das von Grund auf neu plant, aktualisiert D* den Suchbaum inkrementell und propagiert Änderungen nur wo nötig, was es effizient für Echtzeitnavigation in unbekannten oder sich ändernden Umgebungen macht.",
        nl: "D* is ontworpen voor dynamische omgevingen waar de kaart verandert tijdens navigatie. In tegenstelling tot A* dat opnieuw plant vanaf nul, werkt D* de zoekboom incrementeel bij, veranderingen alleen propageerend waar nodig, wat het efficiënt maakt voor real-time navigatie in onbekende of veranderende omgevingen."
      }
    },
    {
      question: {
        en: "What is bundle adjustment in visual SLAM?",
        es: "¿Qué es el ajuste de haz en SLAM visual?",
        de: "Was ist Bündelausgleich im visuellen SLAM?",
        nl: "Wat is bundel aanpassing in visuele SLAM?"
      },
      options: [
        { en: "Joint optimization of camera poses and 3D landmark positions to minimize reprojection errors", es: "Optimización conjunta de poses de cámara y posiciones de puntos de referencia 3D para minimizar errores de reproyección", de: "Gemeinsame Optimierung von Kameraposen und 3D-Orientierungspunktpositionen zur Minimierung von Reprojektionsfehlern", nl: "Gezamenlijke optimalisatie van cameraposes en 3D herkenningspuntposities om reprojectiefouten te minimaliseren" },
        { en: "Organizing visual features into grouped bundles", es: "Organizar características visuales en grupos de haces", de: "Organisation visueller Merkmale in gruppierten Bündeln", nl: "Het organiseren van visuele kenmerken in gegroepeerde bundels" },
        { en: "Adjusting camera bundle configurations for better images", es: "Ajustar configuraciones de haz de cámara para mejores imágenes", de: "Anpassung der Kamera-Bündelkonfigurationen für bessere Bilder", nl: "Het aanpassen van camera bundel configuraties voor betere beelden" },
        { en: "Calibrating multiple cameras working together", es: "Calibrar múltiples cámaras trabajando juntas", de: "Kalibrierung mehrerer zusammenarbeitender Kameras", nl: "Het kalibreren van meerdere camera's die samenwerken" }
      ],
      correct: 0,
      explanation: {
        en: "Bundle adjustment simultaneously optimizes all camera poses and 3D point positions by minimizing the reprojection error across all observations. It's a global optimization technique that refines the entire map and trajectory estimates, often used as a backend optimization step in visual SLAM systems.",
        es: "El ajuste de haz optimiza simultáneamente todas las poses de cámara y posiciones de puntos 3D minimizando el error de reproyección a través de todas las observaciones. Es una técnica de optimización global que refina toda la estimación del mapa y trayectoria, a menudo usada como un paso de optimización de backend en sistemas SLAM visuales.",
        de: "Bündelausgleich optimiert gleichzeitig alle Kameraposen und 3D-Punktpositionen durch Minimierung des Reprojektionsfehlers über alle Beobachtungen. Es ist eine globale Optimierungstechnik, die die gesamten Karten- und Trajektorienschätzungen verfeinert, oft als Backend-Optimierungsschritt in visuellen SLAM-Systemen verwendet.",
        nl: "Bundel aanpassing optimaliseert tegelijkertijd alle cameraposes en 3D puntposities door reprojectiefouten over alle observaties te minimaliseren. Het is een globale optimalisatietechniek die de gehele kaart en traject schattingen verfijnt, vaak gebruikt als backend optimalisatiestap in visuele SLAM-systemen."
      }
    },
    {
      question: {
        en: "What is the elastic band algorithm for path deformation?",
        es: "¿Qué es el algoritmo de banda elástica para deformación de caminos?",
        de: "Was ist der elastische Band-Algorithmus für Pfaddeformation?",
        nl: "Wat is het elastische band algoritme voor padvervorming?"
      },
      options: [
        { en: "A method that deforms initial paths by treating them as elastic bands subject to internal and external forces", es: "Un método que deforma caminos iniciales tratándolos como bandas elásticas sujetas a fuerzas internas y externas", de: "Eine Methode, die anfängliche Pfade durch Behandlung als elastische Bänder unter internen und externen Kräften deformiert", nl: "Een methode die initiële paden vervormt door ze te behandelen als elastische banden onderworpen aan interne en externe krachten" },
        { en: "A flexible material used in robot construction", es: "Un material flexible usado en construcción de robots", de: "Ein flexibles Material für Roboter-Konstruktion", nl: "Een flexibel materiaal gebruikt in robotconstructie" },
        { en: "A data compression technique for storing paths", es: "Una técnica de compresión de datos para almacenar caminos", de: "Eine Datenkomprimierungstechnik zur Pfadspeicherung", nl: "Een datacompressietechniek voor het opslaan van paden" },
        { en: "An algorithm for connecting disconnected path segments", es: "Un algoritmo para conectar segmentos de camino desconectados", de: "Ein Algorithmus zur Verbindung getrennter Pfadsegmente", nl: "Een algoritme voor het verbinden van losgekoppelde padsegmenten" }
      ],
      correct: 0,
      explanation: {
        en: "The elastic band algorithm represents paths as elastic bands with internal forces (tension) that minimize path length and external forces (repulsion from obstacles) that maintain clearance. The equilibrium configuration provides a smooth, optimal path that balances distance and safety objectives.",
        es: "El algoritmo de banda elástica representa caminos como bandas elásticas con fuerzas internas (tensión) que minimizan la longitud del camino y fuerzas externas (repulsión de obstáculos) que mantienen separación. La configuración de equilibrio proporciona un camino suave y óptimo que equilibra objetivos de distancia y seguridad.",
        de: "Der elastische Band-Algorithmus repräsentiert Pfade als elastische Bänder mit internen Kräften (Spannung), die Pfadlänge minimieren, und externen Kräften (Abstoßung von Hindernissen), die Abstand aufrechterhalten. Die Gleichgewichtskonfiguration bietet einen glatten, optimalen Pfad, der Distanz- und Sicherheitsziele ausbalanciert.",
        nl: "Het elastische band algoritme vertegenwoordigt paden als elastische banden met interne krachten (spanning) die padlengte minimaliseren en externe krachten (afstoting van obstakels) die afstand handhaven. De evenwichtsconfiguratie biedt een glad, optimaal pad dat afstand en veiligheidsdoelstellingen balanceert."
      }
    },
    {
      question: {
        en: "What is the difference between global and local costmaps in navigation?",
        es: "¿Cuál es la diferencia entre mapas de costo globales y locales en navegación?",
        de: "Was ist der Unterschied zwischen globalen und lokalen Kostenkarten in der Navigation?",
        nl: "Wat is het verschil tussen globale en lokale kostenkaarten in navigatie?"
      },
      options: [
        { en: "Global costmaps cover the entire known environment, local costmaps focus on the robot's immediate vicinity", es: "Los mapas de costo globales cubren todo el entorno conocido, los mapas de costo locales se enfocan en la vecindad inmediata del robot", de: "Globale Kostenkarten decken die gesamte bekannte Umgebung ab, lokale Kostenkarten fokussieren auf die unmittelbare Umgebung des Roboters", nl: "Globale kostenkaarten dekken de gehele bekende omgeving, lokale kostenkaarten focussen op de onmiddellijke omgeving van de robot" },
        { en: "Global costmaps use GPS coordinates, local costmaps use relative positioning", es: "Los mapas de costo globales usan coordenadas GPS, los mapas de costo locales usan posicionamiento relativo", de: "Globale Kostenkarten verwenden GPS-Koordinaten, lokale Kostenkarten verwenden relative Positionierung", nl: "Globale kostenkaarten gebruiken GPS-coördinaten, lokale kostenkaarten gebruiken relatieve positionering" },
        { en: "Global costmaps are permanent, local costmaps are temporary", es: "Los mapas de costo globales son permanentes, los mapas de costo locales son temporales", de: "Globale Kostenkarten sind permanent, lokale Kostenkarten sind temporär", nl: "Globale kostenkaarten zijn permanent, lokale kostenkaarten zijn tijdelijk" },
        { en: "Global costmaps consider all robots, local costmaps consider individual robots", es: "Los mapas de costo globales consideran todos los robots, los mapas de costo locales consideran robots individuales", de: "Globale Kostenkarten betrachten alle Roboter, lokale Kostenkarten betrachten einzelne Roboter", nl: "Globale kostenkaarten beschouwen alle robots, lokale kostenkaarten beschouwen individuele robots" }
      ],
      correct: 0,
      explanation: {
        en: "Global costmaps represent the entire known environment for long-range planning, while local costmaps focus on a smaller area around the robot for real-time obstacle avoidance. Local costmaps often incorporate sensor data for dynamic obstacles, while global costmaps provide stable, long-term environmental representation.",
        es: "Los mapas de costo globales representan todo el entorno conocido para planificación a largo alcance, mientras que los mapas de costo locales se enfocan en un área más pequeña alrededor del robot para evitar obstáculos en tiempo real. Los mapas de costo locales a menudo incorporan datos de sensores para obstáculos dinámicos, mientras que los mapas de costo globales proporcionan representación ambiental estable a largo plazo.",
        de: "Globale Kostenkarten repräsentieren die gesamte bekannte Umgebung für Fernbereichsplanung, während lokale Kostenkarten sich auf ein kleineres Gebiet um den Roboter für Echtzeit-Hindernissvermeidung konzentrieren. Lokale Kostenkarten integrieren oft Sensordaten für dynamische Hindernisse, während globale Kostenkarten stabile, langfristige Umgebungsrepräsentation bieten.",
        nl: "Globale kostenkaarten vertegenwoordigen de gehele bekende omgeving voor lange-afstand planning, terwijl lokale kostenkaarten focussen op een kleiner gebied rond de robot voor real-time obstakel vermijding. Lokale kostenkaarten incorporeren vaak sensordata voor dynamische obstakels, terwijl globale kostenkaarten stabiele, lange-termijn omgevingsrepresentatie bieden."
      }
    },
    {
      question: {
        en: "What is place recognition in robot navigation and mapping?",
        es: "¿Qué es el reconocimiento de lugares en navegación y mapeo robótico?",
        de: "Was ist Ortsbestimmung in der Roboter-Navigation und Kartierung?",
        nl: "Wat is plaatsherkenning in robotnavigatie en mapping?"
      },
      options: [
        { en: "The ability to recognize when the robot has returned to a previously visited location", es: "La capacidad de reconocer cuando el robot ha regresado a una ubicación previamente visitada", de: "Die Fähigkeit zu erkennen, wenn der Roboter zu einem zuvor besuchten Ort zurückgekehrt ist", nl: "Het vermogen om te herkennen wanneer de robot is teruggekeerd naar een eerder bezochte locatie" },
        { en: "Identifying the type of environment the robot is operating in", es: "Identificar el tipo de entorno en el que opera el robot", de: "Identifizierung der Art der Umgebung, in der der Roboter arbeitet", nl: "Het identificeren van het type omgeving waarin de robot opereert" },
        { en: "Recognizing specific objects or landmarks in the environment", es: "Reconocer objetos específicos o puntos de referencia en el entorno", de: "Erkennung spezifischer Objekte oder Orientierungspunkte in der Umgebung", nl: "Het herkennen van specifieke objecten of herkenningspunten in de omgeving" },
        { en: "Determining the robot's precise coordinates within a map", es: "Determinar las coordenadas precisas del robot dentro de un mapa", de: "Bestimmung der genauen Koordinaten des Roboters innerhalb einer Karte", nl: "Het bepalen van de precieze coördinaten van de robot binnen een kaart" }
      ],
      correct: 0,
      explanation: {
        en: "Place recognition enables robots to identify when they've revisited a location, which is crucial for loop closure detection in SLAM, relocalization after getting lost, and building topological maps. It typically uses visual features, laser scan matching, or other sensor signatures to match current observations with previous experiences.",
        es: "El reconocimiento de lugares permite a los robots identificar cuando han revisitado una ubicación, lo cual es crucial para detección de cierre de bucle en SLAM, relocalización después de perderse y construcción de mapas topológicos. Típicamente usa características visuales, coincidencia de escaneo láser u otras firmas de sensores para coincidir observaciones actuales con experiencias previas.",
        de: "Ortsbestimmung ermöglicht es Robotern zu identifizieren, wann sie einen Ort wiederbesucht haben, was entscheidend für Schleifenschlusserkennung in SLAM, Relokalisierung nach Verirren und Aufbau topologischer Karten ist. Es verwendet typischerweise visuelle Merkmale, Laser-Scan-Matching oder andere Sensorsignaturen, um aktuelle Beobachtungen mit früheren Erfahrungen abzugleichen.",
        nl: "Plaatsherkenning stelt robots in staat te identificeren wanneer ze een locatie opnieuw hebben bezocht, wat cruciaal is voor lussluiting detectie in SLAM, herlokalisatie na het verdwalen en het bouwen van topologische kaarten. Het gebruikt typisch visuele kenmerken, laser scan matching of andere sensor signaturen om huidige observaties te matchen met eerdere ervaringen."
      }
    },
    {
      question: {
        en: "What is the bug algorithm family in robot navigation?",
        es: "¿Qué es la familia de algoritmos bug en navegación robótica?",
        de: "Was ist die Bug-Algorithmusfamilie in der Roboter-Navigation?",
        nl: "Wat is de bug algoritme familie in robotnavigatie?"
      },
      options: [
        { en: "Simple navigation algorithms that follow obstacle boundaries when direct paths are blocked", es: "Algoritmos de navegación simples que siguen límites de obstáculos cuando los caminos directos están bloqueados", de: "Einfache Navigationsalgorithmen, die Hindernissgrenzen folgen, wenn direkte Pfade blockiert sind", nl: "Eenvoudige navigatie-algoritmen die obstakelgrenzen volgen wanneer directe paden geblokkeerd zijn" },
        { en: "Debugging tools for identifying navigation algorithm errors", es: "Herramientas de depuración para identificar errores de algoritmos de navegación", de: "Debugging-Tools zur Identifizierung von Navigationsalgorithmus-Fehlern", nl: "Debugging tools voor het identificeren van navigatie-algoritmefouten" },
        { en: "Bio-inspired algorithms based on insect movement patterns", es: "Algoritmos bio-inspirados basados en patrones de movimiento de insectos", de: "Bio-inspirierte Algorithmen basierend auf Insektenbewegungsmustern", nl: "Bio-geïnspireerde algoritmen gebaseerd op insectenbewegingspatronen" },
        { en: "Error correction algorithms for sensor malfunctions", es: "Algoritmos de corrección de errores para mal funcionamiento de sensores", de: "Fehlerkorrektualgorithmen für Sensorfehlfunktionen", nl: "Foutcorrectie algoritmen voor sensorstoringen" }
      ],
      correct: 0,
      explanation: {
        en: "Bug algorithms (Bug1, Bug2, TangentBug) are reactive navigation strategies where robots move toward goals until hitting obstacles, then follow obstacle boundaries until they can resume direct motion. They guarantee goal reachability in simply connected environments with minimal sensing requirements, though paths may be suboptimal.",
        es: "Los algoritmos Bug (Bug1, Bug2, TangentBug) son estrategias de navegación reactivas donde los robots se mueven hacia metas hasta topar con obstáculos, luego siguen límites de obstáculos hasta que pueden reanudar movimiento directo. Garantizan alcanzabilidad de meta en entornos simplemente conectados con requisitos mínimos de detección, aunque los caminos pueden ser subóptimos.",
        de: "Bug-Algorithmen (Bug1, Bug2, TangentBug) sind reaktive Navigationsstrategien, wo Roboter sich zu Zielen bewegen, bis sie Hindernisse treffen, dann Hindernissgrenzen folgen, bis sie direkte Bewegung wieder aufnehmen können. Sie garantieren Zielerreichbarkeit in einfach verbundenen Umgebungen mit minimalen Erfassungsanforderungen, obwohl Pfade suboptimal sein können.",
        nl: "Bug algoritmen (Bug1, Bug2, TangentBug) zijn reactieve navigatiestrategieën waarbij robots naar doelen bewegen tot ze obstakels raken, dan obstakelgrenzen volgen tot ze directe beweging kunnen hervatten. Ze garanderen doelbereikbaarheid in eenvoudig verbonden omgevingen met minimale sensingvereisten, hoewel paden suboptimaal kunnen zijn."
      }
    },
    {
      question: {
        en: "What is visual-inertial odometry (VIO) in robot navigation?",
        es: "¿Qué es la odometría visual-inercial (VIO) en navegación robótica?",
        de: "Was ist visuell-inertiale Odometrie (VIO) in der Roboter-Navigation?",
        nl: "Wat is visueel-inertiële odometrie (VIO) in robotnavigatie?"
      },
      options: [
        { en: "Combining camera images with IMU data to estimate robot motion more accurately than either sensor alone", es: "Combinar imágenes de cámara con datos IMU para estimar el movimiento del robot más precisamente que cualquier sensor solo", de: "Kombination von Kamerabildern mit IMU-Daten zur genaueren Schätzung der Roboterbewegung als mit einem Sensor allein", nl: "Het combineren van camerabeelden met IMU-data om robotbeweging nauwkeuriger te schatten dan elk sensor alleen" },
        { en: "A visual interface for displaying robot inertial properties", es: "Una interfaz visual para mostrar propiedades inerciales del robot", de: "Eine visuelle Schnittstelle zur Anzeige der Trägheitseigenschaften des Roboters", nl: "Een visuele interface voor het weergeven van robot inertiële eigenschappen" },
        { en: "Measuring robot acceleration using only visual sensors", es: "Medir aceleración del robot usando solo sensores visuales", de: "Messung der Roboter-Beschleunigung nur mit visuellen Sensoren", nl: "Het meten van robotversnelling met alleen visuele sensoren" },
        { en: "A calibration procedure for aligning cameras with gyroscopes", es: "Un procedimiento de calibración para alinear cámaras con giroscopios", de: "Ein Kalibrierungsverfahren zur Ausrichtung von Kameras mit Gyroskopen", nl: "Een kalibratieprocedure voor het uitlijnen van camera's met gyroscopen" }
      ],
      correct: 0,
      explanation: {
        en: "VIO fuses visual information from cameras with inertial measurements from IMUs (accelerometers and gyroscopes) to provide robust motion estimation. The IMU provides high-frequency motion updates during fast movements, while the camera provides absolute scale and drift correction, creating a complementary sensor fusion approach.",
        es: "VIO fusiona información visual de cámaras con mediciones inerciales de IMUs (acelerómetros y giroscopios) para proporcionar estimación robusta de movimiento. El IMU proporciona actualizaciones de movimiento de alta frecuencia durante movimientos rápidos, mientras que la cámara proporciona escala absoluta y corrección de deriva, creando un enfoque complementario de fusión de sensores.",
        de: "VIO fusioniert visuelle Informationen von Kameras mit Trägheitsmessungen von IMUs (Beschleunigungsmesser und Gyroskope), um robuste Bewegungsschätzung zu bieten. Das IMU liefert hochfrequente Bewegungsupdates während schneller Bewegungen, während die Kamera absolute Skala und Driftkorrektur bietet, wodurch ein komplementärer Sensorfusionsansatz entsteht.",
        nl: "VIO fuseert visuele informatie van camera's met inertiële metingen van IMUs (accelerometers en gyroscopen) om robuuste bewegingsschatting te bieden. De IMU biedt hoge-frequentie bewegingsupdates tijdens snelle bewegingen, terwijl de camera absolute schaal en driftcorrectie biedt, wat een complementaire sensorfusie benadering creëert."
      }
    },
    {
      question: {
        en: "What is topological mapping versus metric mapping in robotics?",
        es: "¿Qué es el mapeo topológico versus mapeo métrico en robótica?",
        de: "Was ist topologische Kartierung versus metrische Kartierung in der Robotik?",
        nl: "Wat is topologische mapping versus metrische mapping in de robotica?"
      },
      options: [
        { en: "Topological maps represent connectivity between places, metric maps provide precise geometric measurements", es: "Los mapas topológicos representan conectividad entre lugares, los mapas métricos proporcionan mediciones geométricas precisas", de: "Topologische Karten repräsentieren Konnektivität zwischen Orten, metrische Karten bieten präzise geometrische Messungen", nl: "Topologische kaarten vertegenwoordigen connectiviteit tussen plaatsen, metrische kaarten bieden precieze geometrische metingen" },
        { en: "Topological maps are for outdoor use, metric maps are for indoor use", es: "Los mapas topológicos son para uso exterior, los mapas métricos son para uso interior", de: "Topologische Karten sind für den Außenbereich, metrische Karten für den Innenbereich", nl: "Topologische kaarten zijn voor buitengebruik, metrische kaarten zijn voor binnengebruik" },
        { en: "Topological maps use GPS, metric maps use local sensors", es: "Los mapas topológicos usan GPS, los mapas métricos usan sensores locales", de: "Topologische Karten verwenden GPS, metrische Karten verwenden lokale Sensoren", nl: "Topologische kaarten gebruiken GPS, metrische kaarten gebruiken lokale sensoren" },
        { en: "Topological maps are 2D, metric maps are 3D", es: "Los mapas topológicos son 2D, los mapas métricos son 3D", de: "Topologische Karten sind 2D, metrische Karten sind 3D", nl: "Topologische kaarten zijn 2D, metrische kaarten zijn 3D" }
      ],
      correct: 0,
      explanation: {
        en: "Topological maps represent the environment as a graph of connected places/nodes without precise geometric information, focusing on adjacency and reachability. Metric maps provide accurate geometric representations with precise distances, angles, and positions, enabling detailed spatial reasoning and precise navigation.",
        es: "Los mapas topológicos representan el entorno como un grafo de lugares/nodos conectados sin información geométrica precisa, enfocándose en adyacencia y alcanzabilidad. Los mapas métricos proporcionan representaciones geométricas precisas con distancias, ángulos y posiciones exactas, permitiendo razonamiento espacial detallado y navegación precisa.",
        de: "Topologische Karten repräsentieren die Umgebung als Graphen verbundener Orte/Knoten ohne präzise geometrische Information und fokussieren auf Nachbarschaft und Erreichbarkeit. Metrische Karten bieten genaue geometrische Darstellungen mit präzisen Entfernungen, Winkeln und Positionen, die detaillierte räumliche Argumentation und präzise Navigation ermöglichen.",
        nl: "Topologische kaarten vertegenwoordigen de omgeving als een graaf van verbonden plaatsen/knopen zonder precieze geometrische informatie, focussend op nabijheid en bereikbaarheid. Metrische kaarten bieden nauwkeurige geometrische representaties met precieze afstanden, hoeken en posities, wat gedetailleerde ruimtelijke redenering en precieze navigatie mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is the main challenge in simultaneous localization and mapping (SLAM)?",
        es: "¿Cuál es el principal desafío en localización y mapeo simultáneos (SLAM)?",
        de: "Was ist die Hauptherausforderung bei simultaner Lokalisierung und Kartierung (SLAM)?",
        nl: "Wat is de belangrijkste uitdaging in simultane lokalisatie en mapping (SLAM)?"
      },
      options: [
        { en: "The chicken-and-egg problem: accurate localization requires a good map, but creating a map requires knowing the robot's position", es: "El problema del huevo y la gallina: la localización precisa requiere un buen mapa, pero crear un mapa requiere conocer la posición del robot", de: "Das Henne-Ei-Problem: genaue Lokalisierung erfordert eine gute Karte, aber eine Karte zu erstellen erfordert die Kenntnis der Roboterposition", nl: "Het kip-en-ei probleem: nauwkeurige lokalisatie vereist een goede kaart, maar het maken van een kaart vereist kennis van de robotpositie" },
        { en: "Processing sensor data in real-time", es: "Procesar datos de sensores en tiempo real", de: "Verarbeitung von Sensordaten in Echtzeit", nl: "Het verwerken van sensordata in real-time" },
        { en: "Dealing with limited computational resources", es: "Lidiar con recursos computacionales limitados", de: "Umgang mit begrenzten Rechenressourcen", nl: "Het omgaan met beperkte computationele bronnen" },
        { en: "Handling sensor noise and measurement errors", es: "Manejar ruido de sensores y errores de medición", de: "Umgang mit Sensorrauschen und Messfehlern", nl: "Het hanteren van sensorruis en meetfouten" }
      ],
      correct: 0,
      explanation: {
        en: "SLAM faces the fundamental circular dependency where accurate self-localization requires a precise map of the environment, but building that map requires knowing where the robot is. SLAM algorithms must bootstrap this process by simultaneously estimating both the robot trajectory and environmental structure from uncertain sensor observations.",
        es: "SLAM enfrenta la dependencia circular fundamental donde la auto-localización precisa requiere un mapa preciso del entorno, pero construir ese mapa requiere saber dónde está el robot. Los algoritmos SLAM deben inicializar este proceso estimando simultáneamente tanto la trayectoria del robot como la estructura ambiental a partir de observaciones de sensores inciertos.",
        de: "SLAM steht vor der fundamentalen zirkulären Abhängigkeit, wo genaue Selbstlokalisierung eine präzise Umgebungskarte erfordert, aber das Erstellen dieser Karte das Wissen der Roboterposition erfordert. SLAM-Algorithmen müssen diesen Prozess durch gleichzeitige Schätzung sowohl der Robotertrajektorie als auch der Umgebungsstruktur aus unsicheren Sensorbeobachtungen initialisieren.",
        nl: "SLAM staat voor de fundamentele circulaire afhankelijkheid waarbij nauwkeurige zelf-lokalisatie een precieze kaart van de omgeving vereist, maar het bouwen van die kaart vereist weten waar de robot is. SLAM-algoritmen moeten dit proces bootstrappen door gelijktijdig zowel het robottraject als omgevingsstructuur te schatten uit onzekere sensorobservaties."
      }
    },
    {
      question: {
        en: "What is LiDAR-based SLAM compared to visual SLAM?",
        es: "¿Qué es SLAM basado en LiDAR comparado con SLAM visual?",
        de: "Was ist LiDAR-basiertes SLAM im Vergleich zu visuellem SLAM?",
        nl: "Wat is LiDAR-gebaseerde SLAM vergeleken met visuele SLAM?"
      },
      options: [
        { en: "LiDAR SLAM provides direct distance measurements and works in darkness, while visual SLAM offers richer semantic information but needs good lighting", es: "SLAM LiDAR proporciona mediciones directas de distancia y funciona en oscuridad, mientras que SLAM visual ofrece información semántica más rica pero necesita buena iluminación", de: "LiDAR SLAM bietet direkte Entfernungsmessungen und funktioniert in Dunkelheit, während visuelles SLAM reichere semantische Informationen bietet, aber gute Beleuchtung benötigt", nl: "LiDAR SLAM biedt directe afstandsmetingen en werkt in duisternis, terwijl visuele SLAM rijkere semantische informatie biedt maar goede verlichting nodig heeft" },
        { en: "LiDAR SLAM is more accurate, visual SLAM is faster", es: "SLAM LiDAR es más preciso, SLAM visual es más rápido", de: "LiDAR SLAM ist genauer, visuelles SLAM ist schneller", nl: "LiDAR SLAM is nauwkeuriger, visuele SLAM is sneller" },
        { en: "LiDAR SLAM works indoors, visual SLAM works outdoors", es: "SLAM LiDAR funciona en interiores, SLAM visual funciona en exteriores", de: "LiDAR SLAM funktioniert drinnen, visuelles SLAM funktioniert draußen", nl: "LiDAR SLAM werkt binnenshuis, visuele SLAM werkt buitenshuis" },
        { en: "LiDAR SLAM is cheaper, visual SLAM is more expensive", es: "SLAM LiDAR es más barato, SLAM visual es más caro", de: "LiDAR SLAM ist billiger, visuelles SLAM ist teurer", nl: "LiDAR SLAM is goedkoper, visuele SLAM is duurder" }
      ],
      correct: 0,
      explanation: {
        en: "LiDAR SLAM uses laser range measurements to directly obtain geometric information, works reliably in various lighting conditions including darkness, and provides accurate distance measurements. Visual SLAM uses camera images, offers rich appearance information for loop closure and semantic understanding, but depends on good lighting and can struggle with textureless environments or motion blur.",
        es: "SLAM LiDAR usa mediciones de rango láser para obtener directamente información geométrica, funciona confiablemente en varias condiciones de iluminación incluyendo oscuridad, y proporciona mediciones precisas de distancia. SLAM visual usa imágenes de cámara, ofrece información rica de apariencia para cierre de bucle y comprensión semántica, pero depende de buena iluminación y puede tener dificultades con entornos sin textura o desenfoque de movimiento.",
        de: "LiDAR SLAM verwendet Laser-Entfernungsmessungen zur direkten Gewinnung geometrischer Informationen, funktioniert zuverlässig unter verschiedenen Beleuchtungsbedingungen einschließlich Dunkelheit und bietet genaue Entfernungsmessungen. Visuelles SLAM verwendet Kamerabilder, bietet reiche Erscheinungsinformationen für Schleifenschluss und semantisches Verständnis, hängt aber von guter Beleuchtung ab und kann Probleme mit texturlosen Umgebungen oder Bewegungsunschärfe haben.",
        nl: "LiDAR SLAM gebruikt laser afstandsmetingen om direct geometrische informatie te verkrijgen, werkt betrouwbaar onder verschillende verlichtingscondities inclusief duisternis, en biedt nauwkeurige afstandsmetingen. Visuele SLAM gebruikt camerabeelden, biedt rijke verschijningsinformatie voor lussluiting en semantisch begrip, maar is afhankelijk van goede verlichting en kan problemen hebben met textuurloze omgevingen of bewegingsonscherpte."
      }
    },
    {
      question: {
        en: "What is the role of uncertainty representation in probabilistic robotics navigation?",
        es: "¿Cuál es el papel de la representación de incertidumbre en navegación robótica probabilística?",
        de: "Was ist die Rolle der Unsicherheitsdarstellung in der probabilistischen Roboter-Navigation?",
        nl: "Wat is de rol van onzekerheidsrepresentatie in probabilistische robotica navigatie?"
      },
      options: [
        { en: "Quantifying and propagating confidence levels in sensor measurements, robot positions, and environmental features", es: "Cuantificar y propagar niveles de confianza en mediciones de sensores, posiciones de robot y características ambientales", de: "Quantifizierung und Propagation von Vertrauensebenen in Sensormessungen, Roboterpositionen und Umgebungsmerkmalen", nl: "Het kwantificeren en propageren van vertrouwensniveaus in sensormetingen, robotposities en omgevingskenmerken" },
        { en: "Handling unpredictable robot behavior", es: "Manejar comportamiento impredecible del robot", de: "Umgang mit unvorhersagbarem Roboterverhalten", nl: "Het hanteren van onvoorspelbaar robotgedrag" },
        { en: "Dealing with incomplete sensor coverage", es: "Lidiar con cobertura incompleta de sensores", de: "Umgang mit unvollständiger Sensorabdeckung", nl: "Het omgaan met onvolledige sensordekking" },
        { en: "Managing computational complexity", es: "Gestionar complejidad computacional", de: "Verwaltung rechnerischer Komplexität", nl: "Het beheren van computationele complexiteit" }
      ],
      correct: 0,
      explanation: {
        en: "Uncertainty representation in probabilistic robotics explicitly models the confidence or reliability of all estimates. This includes sensor noise models, position uncertainty (covariance), landmark position uncertainty, and map quality measures. Proper uncertainty propagation enables robust decision-making, optimal sensor fusion, and realistic assessment of navigation reliability.",
        es: "La representación de incertidumbre en robótica probabilística modela explícitamente la confianza o confiabilidad de todas las estimaciones. Esto incluye modelos de ruido de sensores, incertidumbre de posición (covarianza), incertidumbre de posición de puntos de referencia y medidas de calidad del mapa. La propagación adecuada de incertidumbre permite toma de decisiones robusta, fusión óptima de sensores y evaluación realista de confiabilidad de navegación.",
        de: "Unsicherheitsdarstellung in probabilistischer Robotik modelliert explizit das Vertrauen oder die Zuverlässigkeit aller Schätzungen. Dies umfasst Sensorrauschmodelle, Positionsunsicherheit (Kovarianz), Orientierungspunktunsicherheit und Kartenqualitätsmaße. Ordnungsgemäße Unsicherheitspropagation ermöglicht robuste Entscheidungsfindung, optimale Sensorfusion und realistische Bewertung der Navigationszuverlässigkeit.",
        nl: "Onzekerheidsrepresentatie in probabilistische robotica modelleert expliciet het vertrouwen of betrouwbaarheid van alle schattingen. Dit omvat sensorruis modellen, positie onzekerheid (covariantie), herkenningspunt positie onzekerheid en kaartkwaliteit metingen. Juiste onzekerheidspropagatie maakt robuuste besluitvorming, optimale sensorfusie en realistische beoordeling van navigatiebetrouwbaarheid mogelijk."
      }
    },
    {
      question: {
        en: "What is multi-hypothesis tracking in robot navigation?",
        es: "¿Qué es el seguimiento de múltiples hipótesis en navegación robótica?",
        de: "Was ist Multi-Hypothesen-Verfolgung in der Roboter-Navigation?",
        nl: "Wat is multi-hypothese tracking in robotnavigatie?"
      },
      options: [
        { en: "Maintaining multiple possible robot position estimates simultaneously to handle ambiguous sensor data", es: "Mantener múltiples estimaciones posibles de posición del robot simultáneamente para manejar datos de sensores ambiguos", de: "Aufrechterhaltung mehrerer möglicher Roboterpositionsschätzungen gleichzeitig zur Behandlung mehrdeutiger Sensordaten", nl: "Het gelijktijdig onderhouden van meerdere mogelijke robotpositie schattingen om ambigue sensordata te hanteren" },
        { en: "Tracking multiple robots in the same environment", es: "Rastrear múltiples robots en el mismo entorno", de: "Verfolgung mehrerer Roboter in derselben Umgebung", nl: "Het volgen van meerdere robots in dezelfde omgeving" },
        { en: "Testing different navigation algorithms simultaneously", es: "Probar diferentes algoritmos de navegación simultáneamente", de: "Gleichzeitiges Testen verschiedener Navigationsalgorithmen", nl: "Het gelijktijdig testen van verschillende navigatie-algoritmen" },
        { en: "Planning multiple alternative paths to the goal", es: "Planificar múltiples caminos alternativos hacia la meta", de: "Planung mehrerer alternativer Pfade zum Ziel", nl: "Het plannen van meerdere alternatieve paden naar het doel" }
      ],
      correct: 0,
      explanation: {
        en: "Multi-hypothesis tracking maintains several competing position estimates when sensor observations are ambiguous or when data association is uncertain. This approach prevents premature commitment to a single incorrect hypothesis and enables recovery from localization failures by tracking multiple possible explanations until sufficient evidence resolves the ambiguity.",
        es: "El seguimiento de múltiples hipótesis mantiene varias estimaciones de posición competidoras cuando las observaciones de sensores son ambiguas o cuando la asociación de datos es incierta. Este enfoque previene compromiso prematuro con una sola hipótesis incorrecta y permite recuperación de fallas de localización rastreando múltiples explicaciones posibles hasta que evidencia suficiente resuelve la ambigüedad.",
        de: "Multi-Hypothesen-Verfolgung hält mehrere konkurrierende Positionsschätzungen aufrecht, wenn Sensorbeobachtungen mehrdeutig sind oder wenn Datenassoziation unsicher ist. Dieser Ansatz verhindert vorzeitige Festlegung auf eine einzelne falsche Hypothese und ermöglicht Erholung von Lokalisierungsfehlern durch Verfolgung mehrerer möglicher Erklärungen, bis ausreichende Beweise die Mehrdeutigkeit auflösen.",
        nl: "Multi-hypothese tracking houdt verschillende concurrerende positie schattingen in stand wanneer sensorobservaties dubbelzinnig zijn of wanneer data associatie onzeker is. Deze benadering voorkomt voortijdige toewijding aan een enkele incorrecte hypothese en maakt herstel van lokalisatiefalen mogelijk door meerdere mogelijke verklaringen te volgen totdat voldoende bewijs de dubbelzinnigheid oplost."
      }
    },
    {
      question: {
        en: "What is loop closure detection in SLAM?",
        es: "¿Qué es la detección de cierre de bucle en SLAM?",
        de: "Was ist Schleifenschlusserkennung in SLAM?",
        nl: "Wat is lussluiting detectie in SLAM?"
      },
      options: [
        { en: "Recognizing when the robot returns to a previously visited location to reduce accumulated drift", es: "Reconocer cuando el robot regresa a una ubicación visitada anteriormente para reducir deriva acumulada", de: "Erkennen, wann der Roboter zu einem zuvor besuchten Ort zurückkehrt, um akkumulierte Drift zu reduzieren", nl: "Het herkennen wanneer de robot terugkeert naar een eerder bezochte locatie om geaccumuleerde drift te verminderen" },
        { en: "Detecting when mapping process is complete", es: "Detectar cuando el proceso de mapeo está completo", de: "Erkennen, wann der Kartierungsprozess abgeschlossen ist", nl: "Detecteren wanneer het mapping proces voltooid is" },
        { en: "Finding closed paths for optimal navigation", es: "Encontrar caminos cerrados para navegación óptima", de: "Geschlossene Pfade für optimale Navigation finden", nl: "Gesloten paden vinden voor optimale navigatie" },
        { en: "Closing gaps in the map representation", es: "Cerrar brechas en la representación del mapa", de: "Lücken in der Kartendarstellung schließen", nl: "Gaten sluiten in de kaartrepresentatie" }
      ],
      correct: 0,
      explanation: {
        en: "Loop closure detection identifies when a robot has returned to a previously mapped location, enabling correction of accumulated odometry errors through graph optimization. This process significantly improves map accuracy and robot localization by creating constraints that link current observations with past map elements.",
        es: "La detección de cierre de bucle identifica cuando un robot ha regresado a una ubicación mapeada previamente, permitiendo corrección de errores de odometría acumulados a través de optimización de grafo. Este proceso mejora significativamente la precisión del mapa y localización del robot creando restricciones que vinculan observaciones actuales con elementos de mapa pasados.",
        de: "Schleifenschlusserkennung identifiziert, wann ein Roboter zu einem zuvor kartierten Ort zurückgekehrt ist, wodurch Korrektur akkumulierter Odometriefehler durch Graphenoptimierung ermöglicht wird. Dieser Prozess verbessert signifikant die Kartengenauigkeit und Roboterlokalisierung durch Schaffung von Beschränkungen, die aktuelle Beobachtungen mit vergangenen Kartenelementen verknüpfen.",
        nl: "Lussluiting detectie identificeert wanneer een robot is teruggekeerd naar een eerder in kaart gebrachte locatie, wat correctie van geaccumuleerde odometrie fouten mogelijk maakt door graafoptimalisatie. Dit proces verbetert aanzienlijk kaartnauwkeurigheid en robotlokalisatie door beperkingen te creëren die huidige observaties koppelen aan eerdere kaartelementen."
      }
    },
    {
      question: {
        en: "What is stereo vision-based depth estimation in robotics?",
        es: "¿Qué es la estimación de profundidad basada en visión estéreo en robótica?",
        de: "Was ist stereovisionsbasierte Tiefenschätzung in der Robotik?",
        nl: "Wat is stereo vision-gebaseerde diepteschatting in robotica?"
      },
      options: [
        { en: "Computing distance to objects using disparity between left and right camera images", es: "Calcular distancia a objetos usando disparidad entre imágenes de cámara izquierda y derecha", de: "Berechnung der Entfernung zu Objekten mittels Disparität zwischen linken und rechten Kamerabildern", nl: "Afstand tot objecten berekenen met behulp van dispariteit tussen linker en rechter camerabeelden" },
        { en: "Using two sensors to double measurement accuracy", es: "Usar dos sensores para duplicar precisión de medición", de: "Verwendung zweier Sensoren zur Verdopplung der Messgenauigkeit", nl: "Twee sensoren gebruiken om meetnauwkeurigheid te verdubbelen" },
        { en: "Creating 3D models from multiple viewpoints", es: "Crear modelos 3D desde múltiples puntos de vista", de: "Erstellung von 3D-Modellen aus mehreren Blickwinkeln", nl: "3D-modellen creëren vanuit meerdere gezichtspunten" },
        { en: "Detecting objects in both visible and infrared spectra", es: "Detectar objetos en espectros visible e infrarrojo", de: "Erkennung von Objekten im sichtbaren und Infrarotspektrum", nl: "Objecten detecteren in zowel zichtbare als infrarode spectra" }
      ],
      correct: 0,
      explanation: {
        en: "Stereo vision uses two cameras separated by a known baseline to estimate depth through triangulation. By matching corresponding points between left and right images and measuring their disparity (horizontal displacement), the system can calculate distance using the principle that closer objects have larger disparities.",
        es: "La visión estéreo usa dos cámaras separadas por una línea base conocida para estimar profundidad a través de triangulación. Al hacer coincidir puntos correspondientes entre imágenes izquierda y derecha y medir su disparidad (desplazamiento horizontal), el sistema puede calcular distancia usando el principio de que objetos más cercanos tienen disparidades mayores.",
        de: "Stereovision verwendet zwei durch eine bekannte Basislinie getrennte Kameras zur Tiefenschätzung durch Triangulation. Durch Abgleich entsprechender Punkte zwischen linken und rechten Bildern und Messung ihrer Disparität (horizontale Verschiebung) kann das System Entfernung berechnen mit dem Prinzip, dass nähere Objekte größere Disparitäten haben.",
        nl: "Stereo vision gebruikt twee camera's gescheiden door een bekende basislijn om diepte te schatten door triangulatie. Door overeenkomende punten tussen linker en rechter beelden te matchen en hun dispariteit (horizontale verschuiving) te meten, kan het systeem afstand berekenen met het principe dat dichtere objecten grotere dispariteiten hebben."
      }
    },
    {
      question: {
        en: "What is semantic SLAM in modern robotics?",
        es: "¿Qué es SLAM semántico en robótica moderna?",
        de: "Was ist semantisches SLAM in der modernen Robotik?",
        nl: "Wat is semantische SLAM in moderne robotica?"
      },
      options: [
        { en: "SLAM that incorporates object recognition and semantic understanding of the environment", es: "SLAM que incorpora reconocimiento de objetos y comprensión semántica del entorno", de: "SLAM, das Objekterkennung und semantisches Verständnis der Umgebung einbezieht", nl: "SLAM dat objectherkenning en semantisch begrip van de omgeving incorporeert" },
        { en: "SLAM using only semantic sensors", es: "SLAM usando solo sensores semánticos", de: "SLAM nur mit semantischen Sensoren", nl: "SLAM met alleen semantische sensoren" },
        { en: "Language-based robot navigation commands", es: "Comandos de navegación robótica basados en lenguaje", de: "Sprachbasierte Roboter-Navigationsbefehle", nl: "Taalgebaseerde robotnavigatie commando's" },
        { en: "SLAM for robots with semantic memory", es: "SLAM para robots con memoria semántica", de: "SLAM für Roboter mit semantischem Gedächtnis", nl: "SLAM voor robots met semantisch geheugen" }
      ],
      correct: 0,
      explanation: {
        en: "Semantic SLAM combines traditional geometric mapping with object recognition and semantic understanding. Instead of just mapping geometric features, it identifies and labels objects (chairs, doors, tables) in the environment, creating semantically meaningful maps that enable higher-level reasoning and natural human-robot interaction.",
        es: "SLAM semántico combina mapeo geométrico tradicional con reconocimiento de objetos y comprensión semántica. En lugar de solo mapear características geométricas, identifica y etiqueta objetos (sillas, puertas, mesas) en el entorno, creando mapas semánticamente significativos que permiten razonamiento de nivel superior e interacción natural humano-robot.",
        de: "Semantisches SLAM kombiniert traditionelle geometrische Kartierung mit Objekterkennung und semantischem Verständnis. Anstatt nur geometrische Merkmale zu kartieren, identifiziert und kennzeichnet es Objekte (Stühle, Türen, Tische) in der Umgebung und erstellt semantisch bedeutungsvolle Karten, die höherstufiges Denken und natürliche Mensch-Roboter-Interaktion ermöglichen.",
        nl: "Semantische SLAM combineert traditionele geometrische mapping met objectherkenning en semantisch begrip. In plaats van alleen geometrische kenmerken in kaart te brengen, identificeert en labelt het objecten (stoelen, deuren, tafels) in de omgeving, wat semantisch betekenisvolle kaarten creëert die hoger-niveau redenering en natuurlijke mens-robot interactie mogelijk maken."
      }
    },
    {
      question: {
        en: "What is bundle adjustment in visual SLAM?",
        es: "¿Qué es el ajuste de paquete en SLAM visual?",
        de: "Was ist Bundle Adjustment in visuellem SLAM?",
        nl: "Wat is bundle adjustment in visuele SLAM?"
      },
      options: [
        { en: "Simultaneous optimization of camera poses and 3D landmark positions using reprojection error minimization", es: "Optimización simultánea de poses de cámara y posiciones de puntos de referencia 3D usando minimización de error de reproyección", de: "Simultane Optimierung von Kameraposen und 3D-Orientierungspunktpositionen mittels Minimierung des Reprojektionsfehlers", nl: "Gelijktijdige optimalisatie van camera poses en 3D landmarkposities met behulp van reprojectie fout minimalisatie" },
        { en: "Grouping visual features into bundles for processing", es: "Agrupar características visuales en paquetes para procesamiento", de: "Gruppierung visueller Merkmale in Bündel zur Verarbeitung", nl: "Visuele kenmerken groeperen in bundels voor verwerking" },
        { en: "Adjusting camera parameters for better image quality", es: "Ajustar parámetros de cámara para mejor calidad de imagen", de: "Anpassung von Kameraparametern für bessere Bildqualität", nl: "Camera parameters aanpassen voor betere beeldkwaliteit" },
        { en: "Bundling multiple SLAM algorithms together", es: "Agrupar múltiples algoritmos SLAM juntos", de: "Mehrere SLAM-Algorithmen zusammenbündeln", nl: "Meerdere SLAM-algoritmen samen bundelen" }
      ],
      correct: 0,
      explanation: {
        en: "Bundle adjustment is a global optimization technique that simultaneously refines camera trajectory and 3D landmark positions by minimizing reprojection errors across all observations. It considers all camera poses and 3D points together, optimizing their parameters to achieve the best consistency between observed and predicted feature locations in all images.",
        es: "El ajuste de paquete es una técnica de optimización global que refina simultáneamente la trayectoria de la cámara y posiciones de puntos de referencia 3D minimizando errores de reproyección a través de todas las observaciones. Considera todas las poses de cámara y puntos 3D juntos, optimizando sus parámetros para lograr la mejor consistencia entre ubicaciones de características observadas y predichas en todas las imágenes.",
        de: "Bundle Adjustment ist eine globale Optimierungstechnik, die gleichzeitig Kameratrajektorie und 3D-Orientierungspunktpositionen durch Minimierung von Reprojektionsfehlern über alle Beobachtungen verfeinert. Sie betrachtet alle Kameraposen und 3D-Punkte zusammen und optimiert ihre Parameter für beste Konsistenz zwischen beobachteten und vorhergesagten Merkmalsorten in allen Bildern.",
        nl: "Bundle adjustment is een globale optimalisatietechniek die gelijktijdig camera traject en 3D landmarkposities verfijnt door reprojectiefouten over alle observaties te minimaliseren. Het beschouwt alle camera poses en 3D-punten samen, hun parameters optimaliseerend om de beste consistentie tussen geobserveerde en voorspelde kenmerklocaties in alle beelden te bereiken."
      }
    },
    {
      question: {
        en: "What is occupancy grid mapping in mobile robotics?",
        es: "¿Qué es el mapeo de rejilla de ocupación en robótica móvil?",
        de: "Was ist Occupancy Grid Mapping in der mobilen Robotik?",
        nl: "Wat is occupancy grid mapping in mobiele robotica?"
      },
      options: [
        { en: "Representing environment as a grid where each cell contains probability of being occupied by obstacles", es: "Representar entorno como rejilla donde cada celda contiene probabilidad de estar ocupada por obstáculos", de: "Darstellung der Umgebung als Gitter, wo jede Zelle die Wahrscheinlichkeit enthält, von Hindernissen besetzt zu sein", nl: "Omgeving representeren als grid waarbij elke cel de waarschijnlijkheid bevat bezet te zijn door obstakels" },
        { en: "Mapping only occupied spaces for efficient storage", es: "Mapear solo espacios ocupados para almacenamiento eficiente", de: "Kartierung nur besetzter Räume für effiziente Speicherung", nl: "Alleen bezette ruimtes mappen voor efficiënte opslag" },
        { en: "Creating floor plans with occupancy schedules", es: "Crear planos de planta con horarios de ocupación", de: "Erstellung von Grundrissen mit Belegungsplänen", nl: "Plattegronden maken met bezettingsschema's" },
        { en: "Grid-based path planning algorithms", es: "Algoritmos de planificación de rutas basados en rejilla", de: "Gitterbasierte Pfadplanungsalgorithmen", nl: "Grid-gebaseerde pad planning algoritmen" }
      ],
      correct: 0,
      explanation: {
        en: "Occupancy grid mapping discretizes the environment into a regular grid of cells, where each cell stores the probability that it contains an obstacle. Range sensor measurements update these probabilities using Bayesian inference, creating a probabilistic representation that handles sensor uncertainty while providing efficient storage and processing for navigation algorithms.",
        es: "El mapeo de rejilla de ocupación discretiza el entorno en una rejilla regular de celdas, donde cada celda almacena la probabilidad de que contenga un obstáculo. Las mediciones de sensores de rango actualizan estas probabilidades usando inferencia Bayesiana, creando una representación probabilística que maneja incertidumbre del sensor mientras proporciona almacenamiento y procesamiento eficiente para algoritmos de navegación.",
        de: "Occupancy Grid Mapping diskretisiert die Umgebung in ein regelmäßiges Gitter von Zellen, wobei jede Zelle die Wahrscheinlichkeit speichert, dass sie ein Hindernis enthält. Entfernungssensormessungen aktualisieren diese Wahrscheinlichkeiten mittels Bayesischer Inferenz und schaffen eine probabilistische Darstellung, die Sensorunsicherheit behandelt und gleichzeitig effiziente Speicherung und Verarbeitung für Navigationsalgorithmen bietet.",
        nl: "Occupancy grid mapping discretiseert de omgeving in een regelmatig grid van cellen, waarbij elke cel de waarschijnlijkheid opslaat dat deze een obstakel bevat. Afstandssensor metingen updaten deze waarschijnlijkheden met Bayesiaanse inferentie, een probabilistische representatie creërend die sensoronzekerheid behandelt terwijl efficiënte opslag en verwerking voor navigatie-algoritmen wordt geboden."
      }
    },
    {
      question: {
        en: "What is active SLAM versus passive SLAM?",
        es: "¿Qué es SLAM activo versus SLAM pasivo?",
        de: "Was ist aktives SLAM versus passives SLAM?",
        nl: "Wat is actieve SLAM versus passieve SLAM?"
      },
      options: [
        { en: "Active SLAM optimizes robot trajectory for better mapping and localization, passive SLAM processes given trajectory", es: "SLAM activo optimiza trayectoria del robot para mejor mapeo y localización, SLAM pasivo procesa trayectoria dada", de: "Aktives SLAM optimiert Robotertrajektorie für bessere Kartierung und Lokalisierung, passives SLAM verarbeitet gegebene Trajektorie", nl: "Actieve SLAM optimaliseert robot traject voor betere mapping en lokalisatie, passieve SLAM verwerkt gegeven traject" },
        { en: "Active SLAM uses powered sensors, passive SLAM uses unpowered sensors", es: "SLAM activo usa sensores con energía, SLAM pasivo usa sensores sin energía", de: "Aktives SLAM verwendet angetriebene Sensoren, passives SLAM verwendet nicht angetriebene Sensoren", nl: "Actieve SLAM gebruikt aangedreven sensoren, passieve SLAM gebruikt niet-aangedreven sensoren" },
        { en: "Active SLAM processes data in real-time, passive SLAM processes offline", es: "SLAM activo procesa datos en tiempo real, SLAM pasivo procesa fuera de línea", de: "Aktives SLAM verarbeitet Daten in Echtzeit, passives SLAM verarbeitet offline", nl: "Actieve SLAM verwerkt data in real-time, passieve SLAM verwerkt offline" },
        { en: "Active SLAM modifies environment, passive SLAM only observes", es: "SLAM activo modifica entorno, SLAM pasivo solo observa", de: "Aktives SLAM modifiziert Umgebung, passives SLAM beobachtet nur", nl: "Actieve SLAM modificeert omgeving, passieve SLAM observeert alleen" }
      ],
      correct: 0,
      explanation: {
        en: "Active SLAM considers the robot's control inputs as part of the optimization problem, planning trajectories that maximize mapping and localization performance by seeking informative viewpoints and reducing uncertainty. Passive SLAM treats the robot trajectory as given and focuses only on estimating poses and map from the available sensor data without influencing future motion.",
        es: "SLAM activo considera las entradas de control del robot como parte del problema de optimización, planificando trayectorias que maximizan rendimiento de mapeo y localización buscando puntos de vista informativos y reduciendo incertidumbre. SLAM pasivo trata la trayectoria del robot como dada y se enfoca solo en estimar poses y mapa de los datos de sensores disponibles sin influir en movimiento futuro.",
        de: "Aktives SLAM betrachtet die Steuereingaben des Roboters als Teil des Optimierungsproblems und plant Trajektorien, die Kartierungs- und Lokalisierungsleistung maximieren, indem sie informative Blickwinkel suchen und Unsicherheit reduzieren. Passives SLAM behandelt die Robotertrajektorie als gegeben und konzentriert sich nur auf Schätzung von Posen und Karte aus verfügbaren Sensordaten ohne zukünftige Bewegung zu beeinflussen.",
        nl: "Actieve SLAM beschouwt de robot controle-invoer als onderdeel van het optimalisatieprobleem, trajecten plannend die mapping en lokalisatie prestatie maximaliseren door informatieve gezichtspunten te zoeken en onzekerheid te verminderen. Passieve SLAM behandelt het robot traject als gegeven en focust alleen op het schatten van poses en kaart uit beschikbare sensordata zonder toekomstige beweging te beïnvloeden."
      }
    },
    {
      question: {
        en: "What is RGB-D SLAM using depth cameras?",
        es: "¿Qué es SLAM RGB-D usando cámaras de profundidad?",
        de: "Was ist RGB-D SLAM mit Tiefenkameras?",
        nl: "Wat is RGB-D SLAM met dieptecamera's?"
      },
      options: [
        { en: "SLAM using cameras that provide both color images and per-pixel depth information", es: "SLAM usando cámaras que proporcionan tanto imágenes de color como información de profundidad por píxel", de: "SLAM mit Kameras, die sowohl Farbbilder als auch pixelweise Tiefeninformation liefern", nl: "SLAM met camera's die zowel kleurenbeelden als per-pixel diepte-informatie leveren" },
        { en: "SLAM using red, green, blue, and depth sensors separately", es: "SLAM usando sensores rojo, verde, azul y profundidad por separado", de: "SLAM mit separaten Rot-, Grün-, Blau- und Tiefensensoren", nl: "SLAM met rode, groene, blauwe en diepte sensoren afzonderlijk" },
        { en: "High dynamic range SLAM with depth estimation", es: "SLAM de alto rango dinámico con estimación de profundidad", de: "SLAM mit hohem Dynamikbereich und Tiefenschätzung", nl: "Hoge dynamische bereik SLAM met diepteschatting" },
        { en: "SLAM for robots with RGB and infrared vision", es: "SLAM para robots con visión RGB e infrarroja", de: "SLAM für Roboter mit RGB- und Infrarotsicht", nl: "SLAM voor robots met RGB en infrarood zicht" }
      ],
      correct: 0,
      explanation: {
        en: "RGB-D SLAM uses structured light or time-of-flight cameras that capture both color (RGB) and depth (D) information for each pixel. This provides dense 3D point clouds with color information, enabling robust feature matching, accurate 3D reconstruction, and efficient loop closure detection compared to monocular or stereo vision approaches.",
        es: "SLAM RGB-D usa cámaras de luz estructurada o tiempo de vuelo que capturan tanto información de color (RGB) como de profundidad (D) para cada píxel. Esto proporciona nubes de puntos 3D densas con información de color, permitiendo emparejamiento robusto de características, reconstrucción 3D precisa y detección eficiente de cierre de bucle comparado con enfoques de visión monocular o estéreo.",
        de: "RGB-D SLAM verwendet strukturierte Licht- oder Laufzeitkameras, die sowohl Farb- (RGB) als auch Tiefen- (D) Information für jeden Pixel erfassen. Dies bietet dichte 3D-Punktwolken mit Farbinformation und ermöglicht robuste Merkmalsanpassung, genaue 3D-Rekonstruktion und effiziente Schleifenschlusserkennung im Vergleich zu monokularen oder Stereo-Vision-Ansätzen.",
        nl: "RGB-D SLAM gebruikt gestructureerd licht of time-of-flight camera's die zowel kleur (RGB) als diepte (D) informatie vastleggen voor elke pixel. Dit biedt dichte 3D-puntenwolken met kleurinformatie, wat robuuste kenmerkmatching, nauwkeurige 3D-reconstructie en efficiënte lussluiting detectie mogelijk maakt vergeleken met monoculaire of stereo vision benaderingen."
      }
    },
    {
      question: {
        en: "What is pose graph optimization in SLAM?",
        es: "¿Qué es la optimización de grafo de poses en SLAM?",
        de: "Was ist Pose Graph Optimierung in SLAM?",
        nl: "Wat is pose graph optimalisatie in SLAM?"
      },
      options: [
        { en: "Optimizing robot trajectory by treating poses as graph nodes connected by odometry and loop closure constraints", es: "Optimizar trayectoria del robot tratando poses como nodos de grafo conectados por restricciones de odometría y cierre de bucle", de: "Optimierung der Robotertrajektorie durch Behandlung von Posen als Graphknoten, die durch Odometrie- und Schleifenschlussbeschränkungen verbunden sind", nl: "Robot traject optimaliseren door poses te behandelen als graafknopen verbonden door odometrie en lussluiting beperkingen" },
        { en: "Creating aesthetic poses for robot photography", es: "Crear poses estéticas para fotografía de robots", de: "Schaffung ästhetischer Posen für Roboterfotografie", nl: "Esthetische poses creëren voor robotfotografie" },
        { en: "Optimizing joint configurations for robot posture", es: "Optimizar configuraciones de articulaciones para postura del robot", de: "Optimierung von Gelenkkonfigurationen für Roboterhaltung", nl: "Gewrichtconfiguraties optimaliseren voor robothouding" },
        { en: "Graph algorithms for efficient pose storage", es: "Algoritmos de grafo para almacenamiento eficiente de poses", de: "Graphalgorithmen für effiziente Posenspeicherung", nl: "Graafalgoritmen voor efficiënte pose opslag" }
      ],
      correct: 0,
      explanation: {
        en: "Pose graph optimization represents the SLAM problem as a graph where nodes are robot poses and edges represent spatial constraints from odometry or loop closures. The optimization minimizes constraint violations to find the most consistent trajectory, correcting accumulated drift when loops are detected while maintaining computational efficiency for large-scale mapping.",
        es: "La optimización de grafo de poses representa el problema SLAM como un grafo donde los nodos son poses del robot y las aristas representan restricciones espaciales de odometría o cierres de bucle. La optimización minimiza violaciones de restricciones para encontrar la trayectoria más consistente, corrigiendo deriva acumulada cuando se detectan bucles mientras mantiene eficiencia computacional para mapeo a gran escala.",
        de: "Pose Graph Optimierung repräsentiert das SLAM-Problem als Graphen, wo Knoten Roboterposen sind und Kanten räumliche Beschränkungen aus Odometrie oder Schleifenschlüssen darstellen. Die Optimierung minimiert Beschränkungsverletzungen zur Findung der konsistentesten Trajektorie, korrigiert akkumulierte Drift bei Schleifenerkennung und erhält rechnerische Effizienz für großmaßstäbliche Kartierung.",
        nl: "Pose graph optimalisatie representeert het SLAM-probleem als een graaf waarbij knopen robotposes zijn en randen ruimtelijke beperkingen van odometrie of lussluitingen vertegenwoordigen. De optimalisatie minimaliseert beperkingsschendingen om het meest consistente traject te vinden, geaccumuleerde drift corrigerend wanneer lussen worden gedetecteerd terwijl computationele efficiëntie voor grootschalige mapping wordt behouden."
      }
    },
    {
      question: {
        en: "What is place recognition in robot navigation?",
        es: "¿Qué es el reconocimiento de lugares en navegación robótica?",
        de: "Was ist Ortserkennung in der Roboter-Navigation?",
        nl: "Wat is plaatsherkenning in robotnavigatie?"
      },
      options: [
        { en: "Identifying previously visited locations from current sensor observations for loop closure", es: "Identificar ubicaciones visitadas previamente a partir de observaciones actuales de sensores para cierre de bucle", de: "Identifizierung zuvor besuchter Orte aus aktuellen Sensorbeobachtungen für Schleifenschluss", nl: "Eerder bezochte locaties identificeren uit huidige sensorobservaties voor lussluiting" },
        { en: "Recognizing named locations like rooms and buildings", es: "Reconocer ubicaciones nombradas como habitaciones y edificios", de: "Erkennung benannter Orte wie Räume und Gebäude", nl: "Benoemde locaties herkennen zoals kamers en gebouwen" },
        { en: "Finding optimal places to position the robot", es: "Encontrar lugares óptimos para posicionar el robot", de: "Optimale Orte zum Positionieren des Roboters finden", nl: "Optimale plaatsen vinden om de robot te positioneren" },
        { en: "Mapping place names to GPS coordinates", es: "Mapear nombres de lugares a coordenadas GPS", de: "Ortsnamen zu GPS-Koordinaten zuordnen", nl: "Plaatsnamen toewijzen aan GPS-coördinaten" }
      ],
      correct: 0,
      explanation: {
        en: "Place recognition is the ability to identify whether the current location has been visited before by comparing current sensor observations with stored representations. This is crucial for loop closure detection in SLAM, enabling correction of accumulated errors and creation of consistent maps through techniques like bag-of-words, deep learning features, or geometric matching.",
        es: "El reconocimiento de lugares es la capacidad de identificar si la ubicación actual ha sido visitada antes comparando observaciones actuales de sensores con representaciones almacenadas. Esto es crucial para detección de cierre de bucle en SLAM, permitiendo corrección de errores acumulados y creación de mapas consistentes a través de técnicas como bolsa de palabras, características de aprendizaje profundo o emparejamiento geométrico.",
        de: "Ortserkennung ist die Fähigkeit zu identifizieren, ob der aktuelle Ort zuvor besucht wurde, durch Vergleich aktueller Sensorbeobachtungen mit gespeicherten Darstellungen. Dies ist entscheidend für Schleifenschlusserkennung in SLAM und ermöglicht Korrektur akkumulierter Fehler und Schaffung konsistenter Karten durch Techniken wie Bag-of-Words, Deep Learning Features oder geometrische Anpassung.",
        nl: "Plaatsherkenning is het vermogen om te identificeren of de huidige locatie eerder is bezocht door huidige sensorobservaties te vergelijken met opgeslagen representaties. Dit is cruciaal voor lussluiting detectie in SLAM, wat correctie van geaccumuleerde fouten en creatie van consistente kaarten mogelijk maakt door technieken zoals bag-of-words, deep learning kenmerken of geometrische matching."
      }
    },
    {
      question: {
        en: "What is visual-inertial SLAM (VI-SLAM)?",
        es: "¿Qué es SLAM visual-inercial (VI-SLAM)?",
        de: "Was ist visuell-inertiales SLAM (VI-SLAM)?",
        nl: "Wat is visueel-inertiaal SLAM (VI-SLAM)?"
      },
      options: [
        { en: "SLAM combining camera images with inertial measurement unit (IMU) data for robust state estimation", es: "SLAM combinando imágenes de cámara con datos de unidad de medición inercial (IMU) para estimación robusta de estado", de: "SLAM, das Kamerabilder mit Inertialmesseinheit (IMU) Daten für robuste Zustandsschätzung kombiniert", nl: "SLAM dat camerabeelden combineert met inertial measurement unit (IMU) data voor robuuste toestandsschatting" },
        { en: "SLAM using only inertial sensors for navigation", es: "SLAM usando solo sensores inerciales para navegación", de: "SLAM nur mit Inertialsensoren für Navigation", nl: "SLAM met alleen inertiële sensoren voor navigatie" },
        { en: "SLAM with visual and infrared camera fusion", es: "SLAM con fusión de cámaras visuales e infrarrojas", de: "SLAM mit visueller und Infrarotkamera-Fusion", nl: "SLAM met visuele en infrarood camera fusie" },
        { en: "SLAM optimized for virtual and augmented reality", es: "SLAM optimizado para realidad virtual y aumentada", de: "SLAM optimiert für virtuelle und erweiterte Realität", nl: "SLAM geoptimaliseerd voor virtuele en augmented reality" }
      ],
      correct: 0,
      explanation: {
        en: "Visual-inertial SLAM fuses camera measurements with IMU data (accelerometer, gyroscope) to achieve more robust and accurate localization and mapping. The IMU provides high-frequency motion estimates that help with feature tracking, scale recovery, and handling rapid motions or temporary visual occlusions, while cameras provide rich environmental information for mapping and loop closure.",
        es: "SLAM visual-inercial fusiona mediciones de cámara con datos de IMU (acelerómetro, giroscopio) para lograr localización y mapeo más robusto y preciso. La IMU proporciona estimaciones de movimiento de alta frecuencia que ayudan con seguimiento de características, recuperación de escala y manejo de movimientos rápidos u oclusiones visuales temporales, mientras las cámaras proporcionan información ambiental rica para mapeo y cierre de bucle.",
        de: "Visuell-inertiales SLAM fusioniert Kameramessungen mit IMU-Daten (Beschleunigungsmesser, Gyroskop) für robustere und genauere Lokalisierung und Kartierung. Die IMU bietet hochfrequente Bewegungsschätzungen, die bei Merkmalsverfolgung, Skalenerholung und Behandlung schneller Bewegungen oder temporärer visueller Verdeckungen helfen, während Kameras reiche Umgebungsinformation für Kartierung und Schleifenschluss liefern.",
        nl: "Visueel-inertiaal SLAM fuseert camera metingen met IMU-data (accelerometer, gyroscoop) om robuustere en nauwkeurigere lokalisatie en mapping te bereiken. De IMU biedt hoge-frequentie bewegingsschattingen die helpen met kenmerktracking, schaal herstel en het hanteren van snelle bewegingen of tijdelijke visuele occlusies, terwijl camera's rijke omgevingsinformatie bieden voor mapping en lussluiting."
      }
    }
  ]
});
