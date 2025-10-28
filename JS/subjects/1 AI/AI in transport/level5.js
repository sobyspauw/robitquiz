// AI in Transport Quiz - Level 5: Advanced Intelligent Transportation
(function() {
  const level5 = {
    name: {
      en: "AI in Transport Level 5",
      es: "IA en Transporte Nivel 5",
      de: "KI im Transport Stufe 5",
      nl: "AI in Transport Level 5"
    },
    questions: [
      {
        question: {
          en: "What is 'swarm intelligence' applied to in transportation systems?",
          es: "¿A qué se aplica la 'inteligencia de enjambre' en sistemas de transporte?",
          de: "Wofür wird 'Schwarmintelligenz' in Transportsystemen angewendet?",
          nl: "Waarop wordt 'zwerm intelligentie' toegepast in transportsystemen?"
        },
        options: [
          { en: "Coordinating large fleets of autonomous vehicles using collective decision-making algorithms inspired by natural swarms", es: "Coordinar grandes flotas de vehículos autónomos usando algoritmos de toma de decisiones colectiva inspirados en enjambres naturales", de: "Koordination großer Flotten autonomer Fahrzeuge mit kollektiven Entscheidungsalgorithmen inspiriert von natürlichen Schwärmen", nl: "Coördineren van grote vloten autonome voertuigen met collectieve besluitvormingsalgoritmes geïnspireerd door natuurlijke zwermen" },
          { en: "Controlling insect populations near roads", es: "Controlar poblaciones de insectos cerca de carreteras", de: "Insektenpopulationen in der Nähe von Straßen kontrollieren", nl: "Insectenpopulaties nabij wegen controleren" },
          { en: "Managing bee colonies in urban areas", es: "Gestionar colonias de abejas en áreas urbanas", de: "Bienenvölker in städtischen Gebieten verwalten", nl: "Bijenkolonies beheren in stedelijke gebieden" },
          { en: "Studying animal migration patterns", es: "Estudiar patrones de migración animal", de: "Tierwanderungsmuster studieren", nl: "Diermigratie patronen bestuderen" }
        ],
        correct: 0,
        explanation: {
          en: "Swarm intelligence enables decentralized coordination of vehicle fleets, optimizing routes and reducing congestion without central control.",
          es: "La inteligencia de enjambre permite coordinación descentralizada de flotas de vehículos, optimizando rutas y reduciendo congestión sin control central.",
          de: "Schwarmintelligenz ermöglicht dezentrale Koordination von Fahrzeugflotten, optimiert Routen und reduziert Staus ohne zentrale Kontrolle.",
          nl: "Zwerm intelligentie maakt gedecentraliseerde coördinatie van voertuigvloten mogelijk, optimaliseert routes en vermindert opstoppingen zonder centrale controle."
        }
      },
      {
        question: {
          en: "What is 'digital twin technology' creating in smart transportation?",
          es: "¿Qué está creando la 'tecnología de gemelo digital' en transporte inteligente?",
          de: "Was schafft 'Digital Twin Technologie' im intelligenten Transport?",
          nl: "Wat creëert 'digital twin technologie' in slim transport?"
        },
        options: [
          { en: "Virtual replicas of transportation systems that enable real-time monitoring, simulation, and optimization", es: "Réplicas virtuales de sistemas de transporte que permiten monitoreo, simulación y optimización en tiempo real", de: "Virtuelle Nachbildungen von Transportsystemen die Echtzeitüberwachung, Simulation und Optimierung ermöglichen", nl: "Virtuele replica's van transportsystemen die realtime monitoring, simulatie en optimalisatie mogelijk maken" },
          { en: "Identical copies of vehicles for backup", es: "Copias idénticas de vehículos para respaldo", de: "Identische Kopien von Fahrzeugen als Backup", nl: "Identieke kopieën van voertuigen voor backup" },
          { en: "Dual control systems in vehicles", es: "Sistemas de control dual en vehículos", de: "Duale Kontrollsysteme in Fahrzeugen", nl: "Dubbele controlesystemen in voertuigen" },
          { en: "Twin passenger seating arrangements", es: "Disposiciones de asientos de pasajeros gemelos", de: "Zwillings-Passagiersitzanordnungen", nl: "Tweeling passagierszitregelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Digital twins allow transportation planners to test scenarios, predict failures, and optimize performance using precise virtual models of real systems.",
          es: "Los gemelos digitales permiten a planificadores de transporte probar escenarios, predecir fallas y optimizar rendimiento usando modelos virtuales precisos de sistemas reales.",
          de: "Digital Twins ermöglichen Transportplanern Szenarien zu testen, Ausfälle vorherzusagen und Leistung mit präzisen virtuellen Modellen realer Systeme zu optimieren.",
          nl: "Digital twins stellen transportplanners in staat scenario's te testen, storingen te voorspellen en prestaties te optimaliseren met precieze virtuele modellen van echte systemen."
        }
      },
      {
        question: {
          en: "What is 'federated learning' enabling in connected vehicle networks?",
          es: "¿Qué está permitiendo el 'aprendizaje federado' en redes de vehículos conectados?",
          de: "Was ermöglicht 'Federated Learning' in vernetzten Fahrzeugnetzwerken?",
          nl: "Wat maakt 'federated learning' mogelijk in verbonden voertuignetwerken?"
        },
        options: [
          { en: "Training AI models across distributed vehicles while keeping sensitive data local and private", es: "Entrenar modelos IA a través de vehículos distribuidos mientras mantiene datos sensibles locales y privados", de: "KI-Modelle über verteilte Fahrzeuge trainieren während sensible Daten lokal und privat bleiben", nl: "AI-modellen trainen over gedistribueerde voertuigen terwijl gevoelige data lokaal en privé blijft" },
          { en: "Federal regulation of vehicle networks", es: "Regulación federal de redes de vehículos", de: "Bundesregulierung von Fahrzeugnetzwerken", nl: "Federale regulering van voertuignetwerken" },
          { en: "Learning federal traffic laws", es: "Aprender leyes federales de tráfico", de: "Bundesverkehrsgesetze lernen", nl: "Federale verkeersregels leren" },
          { en: "Federation of transportation companies", es: "Federación de empresas de transporte", de: "Föderation von Transportunternehmen", nl: "Federatie van transportbedrijven" }
        ],
        correct: 0,
        explanation: {
          en: "Federated learning allows vehicles to collectively improve AI performance by sharing learning insights without exposing personal travel data.",
          es: "El aprendizaje federado permite a vehículos mejorar colectivamente el rendimiento IA compartiendo conocimientos de aprendizaje sin exponer datos personales de viaje.",
          de: "Federated Learning ermöglicht Fahrzeugen kollektiv KI-Leistung zu verbessern durch Teilen von Lernerkenntnissen ohne persönliche Reisedaten preiszugeben.",
          nl: "Federated learning stelt voertuigen in staat om collectief AI-prestaties te verbeteren door leerinzichten te delen zonder persoonlijke reisdata bloot te stellen."
        }
      },
      {
        question: {
          en: "What is 'neuromorphic computing' potentially offering for autonomous vehicles?",
          es: "¿Qué está ofreciendo potencialmente la 'computación neuromórfica' para vehículos autónomos?",
          de: "Was bietet 'neuromorphe Datenverarbeitung' potenziell für autonome Fahrzeuge?",
          nl: "Wat biedt 'neuromorphic computing' potentieel voor autonome voertuigen?"
        },
        options: [
          { en: "Ultra-low power brain-inspired processors that can process sensory data with human-like efficiency", es: "Procesadores inspirados en el cerebro de ultra bajo consumo que pueden procesar datos sensoriales con eficiencia similar a la humana", de: "Ultra-niedrige Energieverbrauch gehirninspirierte Prozessoren die Sensordaten mit menschenähnlicher Effizienz verarbeiten können", nl: "Ultra-laag vermogen hersgeïnspireerde processors die sensordata kunnen verwerken met mensachtige efficiëntie" },
          { en: "Computing systems that look like neurons", es: "Sistemas de computación que parecen neuronas", de: "Computersysteme die wie Neuronen aussehen", nl: "Computersystemen die eruitzien als neuronen" },
          { en: "Morphing vehicle shapes for better aerodynamics", es: "Formas de vehículos que se transforman para mejor aerodinámica", de: "Sich verwandelnde Fahrzeugformen für bessere Aerodynamik", nl: "Transformerende voertuigvormen voor betere aerodynamica" },
          { en: "Neural network visualization tools", es: "Herramientas de visualización de redes neuronales", de: "Neuronale Netzwerk-Visualisierungstools", nl: "Neurale netwerk visualisatietools" }
        ],
        correct: 0,
        explanation: {
          en: "Neuromorphic chips mimic how biological brains process information, enabling real-time perception with minimal energy consumption for longer autonomous operation.",
          es: "Los chips neuromórficos imitan cómo los cerebros biológicos procesan información, permitiendo percepción en tiempo real con consumo mínimo de energía para operación autónoma más larga.",
          de: "Neuromorphe Chips imitieren wie biologische Gehirne Informationen verarbeiten, ermöglichen Echtzeitwahrnehmung mit minimalem Energieverbrauch für längeren autonomen Betrieb.",
          nl: "Neuromorphic chips imiteren hoe biologische hersenen informatie verwerken, waardoor realtime perceptie mogelijk is met minimaal energieverbruik voor langere autonome werking."
        }
      },
      {
        question: {
          en: "What is 'multi-modal transportation AI' achieving in smart cities?",
          es: "¿Qué está logrando la 'IA de transporte multimodal' en ciudades inteligentes?",
          de: "Was erreicht 'multimodale Transport-KI' in Smart Cities?",
          nl: "Wat bereikt 'multimodale transport AI' in slimme steden?"
        },
        options: [
          { en: "Seamlessly integrating different transportation modes (cars, bikes, trains, buses) into unified journey planning", es: "Integrar sin problemas diferentes modos de transporte (coches, bicicletas, trenes, autobuses) en planificación unificada de viajes", de: "Nahtlose Integration verschiedener Transportmodi (Autos, Fahrräder, Züge, Busse) in einheitliche Reiseplanung", nl: "Naadloos integreren van verschillende transportmodi (auto's, fietsen, treinen, bussen) in unified reisplanning" },
          { en: "Using multiple AI models for single vehicles", es: "Usar múltiples modelos IA para vehículos únicos", de: "Multiple KI-Modelle für einzelne Fahrzeuge verwenden", nl: "Meerdere AI-modellen gebruiken voor enkele voertuigen" },
          { en: "Multiple transportation companies working together", es: "Múltiples empresas de transporte trabajando juntas", de: "Mehrere Transportunternehmen arbeiten zusammen", nl: "Meerdere transportbedrijven die samenwerken" },
          { en: "Modal analysis of transportation data", es: "Análisis modal de datos de transporte", de: "Modale Analyse von Transportdaten", nl: "Modale analyse van transportdata" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-modal AI optimizes entire journeys by combining walking, cycling, public transit, and ride-sharing to create efficient, sustainable travel solutions.",
          es: "La IA multimodal optimiza viajes enteros combinando caminar, ciclismo, transporte público y viajes compartidos para crear soluciones de viaje eficientes y sostenibles.",
          de: "Multimodale KI optimiert ganze Reisen durch Kombination von Gehen, Radfahren, öffentlichem Verkehr und Mitfahrgelegenheiten um effiziente, nachhaltige Reisellösungen zu schaffen.",
          nl: "Multimodale AI optimaliseert hele reizen door lopen, fietsen, openbaar vervoer en ride-sharing te combineren om efficiënte, duurzame reisoplossingen te creëren."
        }
      },
      {
        question: {
          en: "What is 'A* algorithm' used for in autonomous vehicle path planning?",
          es: "¿Para qué se usa el 'algoritmo A*' en planificación de rutas de vehículos autónomos?",
          de: "Wofür wird der 'A*-Algorithmus' in der Pfadplanung autonomer Fahrzeuge verwendet?",
          nl: "Waarvoor wordt het 'A* algoritme' gebruikt in padplanning van autonome voertuigen?"
        },
        options: [
          { en: "Finding the optimal path between two points by evaluating the cost of potential routes and using heuristics to guide the search efficiently", es: "Encontrar la ruta óptima entre dos puntos evaluando el costo de rutas potenciales y usando heurísticas para guiar la búsqueda eficientemente", de: "Den optimalen Pfad zwischen zwei Punkten finden durch Bewertung der Kosten potenzieller Routen und Verwendung von Heuristiken zur effizienten Suchführung", nl: "Het optimale pad vinden tussen twee punten door de kosten van potentiële routes te evalueren en heuristieken te gebruiken om de zoektocht efficiënt te leiden" },
          { en: "Asterisk-based vehicle naming system", es: "Sistema de nomenclatura de vehículos basado en asterisco", de: "Sternchen-basiertes Fahrzeugbenennungssystem", nl: "Asterisk-gebaseerd voertuig naamgevingssysteem" },
          { en: "Advanced vehicle acceleration algorithm", es: "Algoritmo avanzado de aceleración de vehículo", de: "Fortgeschrittener Fahrzeugbeschleunigungsalgorithmus", nl: "Geavanceerd voertuigversnellingsalgoritme" },
          { en: "Automated steering algorithm", es: "Algoritmo de dirección automatizada", de: "Automatisierter Lenkungsalgorithmus", nl: "Geautomatiseerd stuuralgoritme" }
        ],
        correct: 0,
        explanation: {
          en: "A* algorithm combines the benefits of Dijkstra's algorithm with heuristic guidance, making it highly efficient for real-time navigation in dynamic environments.",
          es: "El algoritmo A* combina los beneficios del algoritmo de Dijkstra con guía heurística, haciéndolo altamente eficiente para navegación en tiempo real en entornos dinámicos.",
          de: "A*-Algorithmus kombiniert die Vorteile von Dijkstras Algorithmus mit heuristischer Führung, macht ihn hocheffizient für Echtzeitnavigation in dynamischen Umgebungen.",
          nl: "A* algoritme combineert de voordelen van Dijkstra's algoritme met heuristische begeleiding, waardoor het zeer efficiënt is voor realtime navigatie in dynamische omgevingen."
        }
      },
      {
        question: {
          en: "What is 'dynamic programming' solving in route optimization for autonomous vehicles?",
          es: "¿Qué está resolviendo la 'programación dinámica' en optimización de rutas para vehículos autónomos?",
          de: "Was löst 'dynamische Programmierung' in der Routenoptimierung für autonome Fahrzeuge?",
          nl: "Wat lost 'dynamische programmering' op in route-optimalisatie voor autonome voertuigen?"
        },
        options: [
          { en: "Breaking complex routing problems into smaller subproblems and storing solutions to avoid recalculation, enabling efficient multi-destination planning", es: "Dividir problemas complejos de enrutamiento en subproblemas más pequeños y almacenar soluciones para evitar recálculo, permitiendo planificación eficiente de múltiples destinos", de: "Komplexe Routingprobleme in kleinere Unterprobleme aufteilen und Lösungen speichern um Neuberechnung zu vermeiden, ermöglicht effiziente Mehrziel-Planung", nl: "Complexe routeringsproblemen opdelen in kleinere subproblemen en oplossingen opslaan om herberekening te vermijden, waardoor efficiënte meerdere-bestemmingen planning mogelijk wordt" },
          { en: "Dynamic vehicle programming interfaces", es: "Interfaces de programación dinámica de vehículos", de: "Dynamische Fahrzeugprogrammierungsschnittstellen", nl: "Dynamische voertuigprogrammering interfaces" },
          { en: "Programming vehicles to change routes randomly", es: "Programar vehículos para cambiar rutas aleatoriamente", de: "Fahrzeuge programmieren um Routen zufällig zu ändern", nl: "Voertuigen programmeren om routes willekeurig te veranderen" },
          { en: "Dynamic engine programming", es: "Programación dinámica de motor", de: "Dynamische Motorprogrammierung", nl: "Dynamische motorprogrammering" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic programming optimizes complex routing decisions by storing intermediate results, particularly useful for fleet management and multi-stop deliveries.",
          es: "La programación dinámica optimiza decisiones complejas de enrutamiento almacenando resultados intermedios, particularmente útil para gestión de flotas y entregas de múltiples paradas.",
          de: "Dynamische Programmierung optimiert komplexe Routing-Entscheidungen durch Speicherung von Zwischenergebnissen, besonders nützlich für Flottenmanagement und Lieferungen mit mehreren Stopps.",
          nl: "Dynamische programmering optimaliseert complexe routeringsbeslissingen door tussenresultaten op te slaan, vooral nuttig voor vlootbeheer en bezorgingen met meerdere stops."
        }
      },
      {
        question: {
          en: "What is 'model predictive control (MPC)' enabling in autonomous vehicle decision making?",
          es: "¿Qué está permitiendo el 'control predictivo de modelo (MPC)' en toma de decisiones de vehículos autónomos?",
          de: "Was ermöglicht 'modellprädiktive Regelung (MPC)' in der Entscheidungsfindung autonomer Fahrzeuge?",
          nl: "Wat maakt 'model predictive control (MPC)' mogelijk in besluitvorming van autonome voertuigen?"
        },
        options: [
          { en: "Predicting future vehicle and environment states to optimize control decisions over a prediction horizon while considering constraints", es: "Predecir estados futuros del vehículo y entorno para optimizar decisiones de control sobre un horizonte de predicción mientras considera restricciones", de: "Zukünftige Fahrzeug- und Umgebungszustände vorhersagen um Kontrollentscheidungen über einen Vorhersagehorizont zu optimieren unter Berücksichtigung von Einschränkungen", nl: "Toekomstige voertuig- en omgevingstoestanden voorspellen om controlbeslissingen over een voorspellingshorizon te optimaliseren terwijl beperkingen worden overwogen" },
          { en: "Multi-passenger control systems", es: "Sistemas de control multi-pasajero", de: "Multi-Passagier-Kontrollsysteme", nl: "Multi-passagier controlesystemen" },
          { en: "Manual predictive control", es: "Control predictivo manual", de: "Manuelle prädiktive Kontrolle", nl: "Handmatige predictieve controle" },
          { en: "Media player control in vehicles", es: "Control de reproductor multimedia en vehículos", de: "Mediaplayer-Kontrolle in Fahrzeugen", nl: "Mediaspeler controle in voertuigen" }
        ],
        correct: 0,
        explanation: {
          en: "MPC enables autonomous vehicles to make optimal decisions by solving optimization problems in real-time, considering future scenarios and physical constraints.",
          es: "MPC permite a vehículos autónomos tomar decisiones óptimas resolviendo problemas de optimización en tiempo real, considerando escenarios futuros y restricciones físicas.",
          de: "MPC ermöglicht autonomen Fahrzeugen optimale Entscheidungen zu treffen durch Lösung von Optimierungsproblemen in Echtzeit, unter Berücksichtigung zukünftiger Szenarien und physischer Einschränkungen.",
          nl: "MPC stelt autonome voertuigen in staat optimale beslissingen te nemen door optimalisatieproblemen in realtime op te lossen, rekening houdend met toekomstige scenario's en fysieke beperkingen."
        }
      },
      {
        question: {
          en: "What is 'rapidly-exploring random trees (RRT)' algorithm accomplishing in path planning?",
          es: "¿Qué está logrando el algoritmo de 'árboles aleatorios de exploración rápida (RRT)' en planificación de rutas?",
          de: "Was erreicht der 'Rapidly-exploring Random Trees (RRT)'-Algorithmus in der Pfadplanung?",
          nl: "Wat bereikt het 'rapidly-exploring random trees (RRT)' algoritme in padplanning?"
        },
        options: [
          { en: "Efficiently exploring high-dimensional configuration spaces by incrementally building a tree of feasible paths to find routes through complex environments", es: "Explorar eficientemente espacios de configuración de alta dimensión construyendo incrementalmente un árbol de rutas factibles para encontrar rutas a través de entornos complejos", de: "Effiziente Erkundung hochdimensionaler Konfigurationsräume durch schrittweisen Aufbau eines Baums machbarer Pfade um Routen durch komplexe Umgebungen zu finden", nl: "Efficiënt verkennen van hoog-dimensionale configuratieruimtes door incrementeel een boom van haalbare paden te bouwen om routes door complexe omgevingen te vinden" },
          { en: "Random route generation for entertainment", es: "Generación aleatoria de rutas para entretenimiento", de: "Zufällige Routengenerierung zur Unterhaltung", nl: "Willekeurige route generatie voor entertainment" },
          { en: "Rapidly growing trees for urban landscaping", es: "Árboles de crecimiento rápido para paisajismo urbano", de: "Schnell wachsende Bäume für städtische Landschaftsgestaltung", nl: "Snel groeiende bomen voor stedelijke landschapsarchitectuur" },
          { en: "Random testing of vehicle components", es: "Pruebas aleatorias de componentes de vehículo", de: "Zufällige Tests von Fahrzeugkomponenten", nl: "Willekeurige testen van voertuigcomponenten" }
        ],
        correct: 0,
        explanation: {
          en: "RRT algorithms excel at finding paths in complex environments with obstacles by rapidly exploring the space and connecting feasible points into a tree structure.",
          es: "Los algoritmos RRT sobresalen encontrando rutas en entornos complejos con obstáculos explorando rápidamente el espacio y conectando puntos factibles en una estructura de árbol.",
          de: "RRT-Algorithmen excellieren beim Finden von Pfaden in komplexen Umgebungen mit Hindernissen durch schnelle Erkundung des Raums und Verbindung machbarer Punkte in einer Baumstruktur.",
          nl: "RRT algoritmes blinken uit in het vinden van paden in complexe omgevingen met obstakels door snel de ruimte te verkennen en haalbare punten te verbinden in een boomstructuur."
        }
      },
      {
        question: {
          en: "What is 'genetic algorithm optimization' contributing to autonomous vehicle route planning?",
          es: "¿Qué está contribuyendo la 'optimización de algoritmo genético' a la planificación de rutas de vehículos autónomos?",
          de: "Was trägt 'genetische Algorithmus-Optimierung' zur Routenplanung autonomer Fahrzeuge bei?",
          nl: "Wat draagt 'genetisch algoritme optimalisatie' bij aan route planning van autonome voertuigen?"
        },
        options: [
          { en: "Evolving optimal routes through natural selection principles, combining and mutating route solutions to find near-optimal paths for complex scenarios", es: "Evolucionar rutas óptimas a través de principios de selección natural, combinando y mutando soluciones de rutas para encontrar caminos casi óptimos para escenarios complejos", de: "Optimale Routen durch natürliche Selektionsprinzipien entwickeln, Routenlösungen kombinieren und mutieren um nahezu optimale Pfade für komplexe Szenarien zu finden", nl: "Optimale routes ontwikkelen door natuurlijke selectieprincipes, route oplossingen combineren en muteren om bijna-optimale paden te vinden voor complexe scenario's" },
          { en: "Genetic testing of vehicle components", es: "Pruebas genéticas de componentes de vehículo", de: "Genetische Tests von Fahrzeugkomponenten", nl: "Genetische testen van voertuigcomponenten" },
          { en: "Algorithm for vehicle genealogy tracking", es: "Algoritmo para rastreo genealógico de vehículos", de: "Algorithmus für Fahrzeug-Genealogie-Verfolgung", nl: "Algoritme voor voertuig genealogie tracking" },
          { en: "Gene-based vehicle manufacturing", es: "Fabricación de vehículos basada en genes", de: "Gen-basierte Fahrzeugherstellung", nl: "Gen-gebaseerde voertuigproductie" }
        ],
        correct: 0,
        explanation: {
          en: "Genetic algorithms solve complex multi-objective routing problems by iteratively improving solutions through selection, crossover, and mutation operations inspired by biological evolution.",
          es: "Los algoritmos genéticos resuelven problemas complejos de enrutamiento multi-objetivo mejorando iterativamente soluciones a través de operaciones de selección, cruce y mutación inspiradas en evolución biológica.",
          de: "Genetische Algorithmen lösen komplexe Multi-Objektiv-Routing-Probleme durch iterative Verbesserung von Lösungen durch Selektion, Kreuzung und Mutationsoperationen inspiriert von biologischer Evolution.",
          nl: "Genetische algoritmes lossen complexe multi-doelstelling routeringsproblemen op door iteratief oplossingen te verbeteren door selectie, kruising en mutatie operaties geïnspireerd door biologische evolutie."
        }
      },
      {
        question: {
          en: "What is 'Dijkstra's algorithm' providing for autonomous vehicle navigation?",
          es: "¿Qué está proporcionando el 'algoritmo de Dijkstra' para navegación de vehículos autónomos?",
          de: "Was bietet 'Dijkstras Algorithmus' für die Navigation autonomer Fahrzeuge?",
          nl: "Wat biedt 'Dijkstra's algoritme' voor navigatie van autonome voertuigen?"
        },
        options: [
          { en: "Computing shortest paths from a source to all other nodes in a weighted graph, guaranteeing optimal routes when edge weights represent travel costs", es: "Computar rutas más cortas desde una fuente a todos los otros nodos en un grafo ponderado, garantizando rutas óptimas cuando pesos de bordes representan costos de viaje", de: "Berechnung kürzester Pfade von einer Quelle zu allen anderen Knoten in einem gewichteten Graphen, garantiert optimale Routen wenn Kantengewichte Reisekosten darstellen", nl: "Berekenen van kortste paden van een bron naar alle andere knooppunten in een gewogen graaf, garanteert optimale routes wanneer randgewichten reiskosten vertegenwoordigen" },
          { en: "Dutch-developed steering algorithm", es: "Algoritmo de dirección desarrollado en Holanda", de: "Niederländisch entwickelter Lenkungsalgorithmus", nl: "Nederlands ontwikkeld stuuralgoritme" },
          { en: "Disk-based storage algorithm", es: "Algoritmo de almacenamiento basado en disco", de: "Festplattenbasierter Speicheralgorithmus", nl: "Disk-gebaseerd opslagalgoritme" },
          { en: "Distance measurement algorithm", es: "Algoritmo de medición de distancia", de: "Entfernungsmessungsalgorithmus", nl: "Afstandsmeting algoritme" }
        ],
        correct: 0,
        explanation: {
          en: "Dijkstra's algorithm provides the foundation for many navigation systems, ensuring optimal pathfinding when costs are non-negative and well-defined.",
          es: "El algoritmo de Dijkstra proporciona la base para muchos sistemas de navegación, asegurando búsqueda de rutas óptima cuando los costos son no negativos y bien definidos.",
          de: "Dijkstras Algorithmus bildet die Grundlage für viele Navigationssysteme, gewährleistet optimale Pfadfindung wenn Kosten nicht-negativ und wohldefiniert sind.",
          nl: "Dijkstra's algoritme vormt de basis voor veel navigatiesystemen, zorgt voor optimale padvinding wanneer kosten niet-negatief en goed gedefinieerd zijn."
        }
      },
      {
        question: {
          en: "What is 'behavior tree decision making' enabling in autonomous vehicles?",
          es: "¿Qué está permitiendo la 'toma de decisiones con árboles de comportamiento' en vehículos autónomos?",
          de: "Was ermöglicht 'Verhaltensbaum-Entscheidungsfindung' in autonomen Fahrzeugen?",
          nl: "Wat maakt 'gedragsboom besluitvorming' mogelijk in autonome voertuigen?"
        },
        options: [
          { en: "Hierarchical decision-making structures that break complex driving behaviors into manageable, reusable, and easily debuggable components", es: "Estructuras jerárquicas de toma de decisiones que dividen comportamientos complejos de conducción en componentes manejables, reutilizables y fáciles de depurar", de: "Hierarchische Entscheidungsstrukturen die komplexe Fahrverhaltensweisen in handhabbare, wiederverwendbare und leicht debugbare Komponenten aufteilen", nl: "Hiërarchische besluitvormingsstructuren die complexe rijgedragingen opdelen in beheersbare, herbruikbare en gemakkelijk te debuggen componenten" },
          { en: "Tree-based vehicle suspension systems", es: "Sistemas de suspensión de vehículo basados en árboles", de: "Baumbasierte Fahrzeugaufhängungssysteme", nl: "Boom-gebaseerde voertuigophangsystemen" },
          { en: "Behavioral analysis of trees near roads", es: "Análisis de comportamiento de árboles cerca de carreteras", de: "Verhaltensanalyse von Bäumen in der Nähe von Straßen", nl: "Gedragsanalyse van bomen nabij wegen" },
          { en: "Tree planting decisions for urban planning", es: "Decisiones de plantación de árboles para planificación urbana", de: "Baumpflanzungsentscheidungen für Stadtplanung", nl: "Boomplaatbeslissingen voor stadsplanning" }
        ],
        correct: 0,
        explanation: {
          en: "Behavior trees provide a modular approach to complex decision-making, allowing autonomous vehicles to compose sophisticated behaviors from simple, testable components.",
          es: "Los árboles de comportamiento proporcionan un enfoque modular para toma de decisiones complejas, permitiendo a vehículos autónomos componer comportamientos sofisticados desde componentes simples y probables.",
          de: "Verhaltensbäume bieten einen modularen Ansatz für komplexe Entscheidungsfindung, ermöglichen autonomen Fahrzeugen anspruchsvolle Verhaltensweisen aus einfachen, testbaren Komponenten zu komponieren.",
          nl: "Gedragsbomen bieden een modulaire benadering voor complexe besluitvorming, waardoor autonome voertuigen geavanceerde gedragingen kunnen samenstellen uit eenvoudige, testbare componenten."
        }
      },
      {
        question: {
          en: "What is 'Monte Carlo tree search (MCTS)' contributing to autonomous vehicle planning?",
          es: "¿Qué está contribuyendo la 'búsqueda de árbol Monte Carlo (MCTS)' a la planificación de vehículos autónomos?",
          de: "Was trägt 'Monte Carlo Tree Search (MCTS)' zur Planung autonomer Fahrzeuge bei?",
          nl: "Wat draagt 'Monte Carlo tree search (MCTS)' bij aan planning van autonome voertuigen?"
        },
        options: [
          { en: "Evaluating decision outcomes through statistical sampling and simulation, building a search tree that balances exploration and exploitation for optimal planning", es: "Evaluar resultados de decisiones a través de muestreo estadístico y simulación, construyendo un árbol de búsqueda que equilibra exploración y explotación para planificación óptima", de: "Bewertung von Entscheidungsergebnissen durch statistische Stichproben und Simulation, Aufbau eines Suchbaums der Erkundung und Ausnutzung für optimale Planung ausbalanciert", nl: "Evalueren van besluitvormingsresultaten door statistische steekproeven en simulatie, bouwen van een zoekboom die exploratie en exploitatie balanceert voor optimale planning" },
          { en: "Monte Carlo casino-based navigation", es: "Navegación basada en casino Monte Carlo", de: "Monte Carlo Casino-basierte Navigation", nl: "Monte Carlo casino-gebaseerde navigatie" },
          { en: "Tree searching in Monte Carlo forests", es: "Búsqueda de árboles en bosques de Monte Carlo", de: "Baumsuche in Monte Carlo Wäldern", nl: "Boom zoeken in Monte Carlo bossen" },
          { en: "Mathematical tree counting algorithm", es: "Algoritmo matemático de conteo de árboles", de: "Mathematischer Baumzählungsalgorithmus", nl: "Wiskundig boom telalgoritme" }
        ],
        correct: 0,
        explanation: {
          en: "MCTS enables autonomous vehicles to make decisions in uncertain environments by simulating thousands of possible future scenarios and selecting actions with the highest expected value.",
          es: "MCTS permite a vehículos autónomos tomar decisiones en entornos inciertos simulando miles de posibles escenarios futuros y seleccionando acciones con el valor esperado más alto.",
          de: "MCTS ermöglicht autonomen Fahrzeugen Entscheidungen in unsicheren Umgebungen zu treffen durch Simulation tausender möglicher zukünftiger Szenarien und Auswahl von Aktionen mit dem höchsten erwarteten Wert.",
          nl: "MCTS stelt autonome voertuigen in staat beslissingen te nemen in onzekere omgevingen door duizenden mogelijke toekomstige scenario's te simuleren en acties te selecteren met de hoogste verwachte waarde."
        }
      },
      {
        question: {
          en: "What is 'particle filter localization' solving in autonomous vehicle navigation?",
          es: "¿Qué está resolviendo la 'localización de filtro de partículas' en navegación de vehículos autónomos?",
          de: "Was löst 'Partikelfilter-Lokalisierung' in der Navigation autonomer Fahrzeuge?",
          nl: "Wat lost 'particle filter localisatie' op in navigatie van autonome voertuigen?"
        },
        options: [
          { en: "Estimating vehicle position and orientation by maintaining multiple hypotheses about location and updating them based on sensor observations", es: "Estimar posición y orientación del vehículo manteniendo múltiples hipótesis sobre ubicación y actualizándolas basado en observaciones de sensores", de: "Fahrzeugposition und -ausrichtung schätzen durch Aufrechterhalten mehrerer Hypothesen über den Standort und deren Aktualisierung basierend auf Sensorbeobachtungen", nl: "Voertuigpositie en oriëntatie schatten door meerdere hypotheses over locatie te handhaven en deze bij te werken op basis van sensorwaarnemingen" },
          { en: "Filtering particles from vehicle air intake", es: "Filtrar partículas de la toma de aire del vehículo", de: "Partikel aus der Fahrzeuglufteinlass filtern", nl: "Deeltjes filteren uit voertuig luchtinlaat" },
          { en: "Particle physics experiments in vehicles", es: "Experimentos de física de partículas en vehículos", de: "Teilchenphysik-Experimente in Fahrzeugen", nl: "Deeltjesfysica experimenten in voertuigen" },
          { en: "Locating lost particles in the vehicle", es: "Localizar partículas perdidas en el vehículo", de: "Verlorene Partikel im Fahrzeug lokalisieren", nl: "Verloren deeltjes in het voertuig lokaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Particle filters handle the uncertainty in localization by representing the vehicle's position as a probability distribution, particularly effective in environments where GPS is unreliable.",
          es: "Los filtros de partículas manejan la incertidumbre en localización representando la posición del vehículo como una distribución de probabilidad, particularmente efectivo en entornos donde GPS no es confiable.",
          de: "Partikelfilter bewältigen die Unsicherheit in der Lokalisierung durch Darstellung der Fahrzeugposition als Wahrscheinlichkeitsverteilung, besonders effektiv in Umgebungen wo GPS unzuverlässig ist.",
          nl: "Particle filters gaan om met onzekerheid in lokalisatie door de voertuigpositie weer te geven als een waarschijnlijkheidsverdeling, vooral effectief in omgevingen waar GPS onbetrouwbaar is."
        }
      },
      {
        question: {
          en: "What is 'potential field navigation' enabling in autonomous vehicle obstacle avoidance?",
          es: "¿Qué está permitiendo la 'navegación de campo potencial' en evitación de obstáculos de vehículos autónomos?",
          de: "Was ermöglicht 'Potentialfeld-Navigation' in der Hindernisumgehung autonomer Fahrzeuge?",
          nl: "Wat maakt 'potentiaalveld navigatie' mogelijk in obstakel vermijding van autonome voertuigen?"
        },
        options: [
          { en: "Creating virtual force fields where goals attract the vehicle and obstacles repel it, generating smooth trajectories that naturally avoid collisions", es: "Crear campos de fuerza virtuales donde objetivos atraen el vehículo y obstáculos lo repelen, generando trayectorias suaves que naturalmente evitan colisiones", de: "Virtuelle Kraftfelder erstellen wo Ziele das Fahrzeug anziehen und Hindernisse es abstoßen, erzeugt glatte Trajektorien die natürlich Kollisionen vermeiden", nl: "Virtuele krachtvelden creëren waar doelen het voertuig aantrekken en obstakels het afstoten, genereert vloeiende trajecten die natuurlijk botsingen vermijden" },
          { en: "Potential energy storage in vehicle batteries", es: "Almacenamiento de energía potencial en baterías de vehículo", de: "Potentielle Energiespeicherung in Fahrzeugbatterien", nl: "Potentiële energie opslag in voertuigbatterijen" },
          { en: "Field navigation using compass only", es: "Navegación de campo usando solo brújula", de: "Feldnavigation nur mit Kompass", nl: "Veldnavigatie met alleen kompas" },
          { en: "Agricultural field navigation systems", es: "Sistemas de navegación de campo agrícola", de: "Landwirtschaftliche Feldnavigationssysteme", nl: "Landbouwveld navigatiesystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Potential field methods provide intuitive and computationally efficient path planning by treating navigation as a physics problem with attractive and repulsive forces.",
          es: "Los métodos de campo potencial proporcionan planificación de rutas intuitiva y computacionalmente eficiente tratando navegación como un problema de física con fuerzas atractivas y repulsivas.",
          de: "Potentialfeld-Methoden bieten intuitive und rechnerisch effiziente Pfadplanung durch Behandlung der Navigation als Physikproblem mit anziehenden und abstoßenden Kräften.",
          nl: "Potentiaalveld methoden bieden intuïtieve en computationeel efficiënte padplanning door navigatie te behandelen als een natuurkunde probleem met aantrekkelijke en afstotende krachten."
        }
      },
      {
        question: {
          en: "What is 'graph-based SLAM' accomplishing in autonomous vehicle mapping and localization?",
          es: "¿Qué está logrando el 'SLAM basado en grafos' en mapeo y localización de vehículos autónomos?",
          de: "Was erreicht 'graphenbasiertes SLAM' in Kartierung und Lokalisierung autonomer Fahrzeuge?",
          nl: "Wat bereikt 'graph-gebaseerde SLAM' in mapping en lokalisatie van autonome voertuigen?"
        },
        options: [
          { en: "Representing the vehicle's trajectory and landmark positions as nodes in a graph, optimizing the entire structure to minimize accumulated localization errors", es: "Representar la trayectoria del vehículo y posiciones de puntos de referencia como nodos en un grafo, optimizando toda la estructura para minimizar errores acumulados de localización", de: "Fahrzeugtrajektorie und Landmarken-Positionen als Knoten in einem Graphen darstellen, die gesamte Struktur optimieren um akkumulierte Lokalisierungsfehler zu minimieren", nl: "Voertuigtraject en landmerkposities weergeven als knooppunten in een graaf, de hele structuur optimaliseren om geaccumuleerde lokalisatiefouten te minimaliseren" },
          { en: "Creating visual graphs of vehicle performance", es: "Crear gráficos visuales de rendimiento del vehículo", de: "Visuelle Graphen der Fahrzeugleistung erstellen", nl: "Visuele grafieken van voertuigprestaties maken" },
          { en: "Graph-based user interface design", es: "Diseño de interfaz de usuario basado en gráficos", de: "Graphenbasiertes Benutzerinterface-Design", nl: "Graph-gebaseerd gebruikersinterface ontwerp" },
          { en: "Graphical vehicle component mapping", es: "Mapeo gráfico de componentes de vehículo", de: "Grafische Fahrzeugkomponenten-Kartierung", nl: "Grafische voertuigcomponent mapping" }
        ],
        correct: 0,
        explanation: {
          en: "Graph-based SLAM creates a unified framework for simultaneously building maps and tracking vehicle position, with loop closure detection correcting accumulated drift errors.",
          es: "SLAM basado en grafos crea un marco unificado para construir mapas simultáneamente y rastrear posición del vehículo, con detección de cierre de bucle corrigiendo errores de deriva acumulados.",
          de: "Graphenbasiertes SLAM schafft einen einheitlichen Rahmen für gleichzeitiges Kartenerstellung und Fahrzeugpositionsverfolgung, mit Schleifenschluss-Erkennung zur Korrektur akkumulierter Drift-Fehler.",
          nl: "Graph-gebaseerde SLAM creëert een uniform raamwerk voor gelijktijdig kaarten bouwen en voertuigpositie volgen, met loop closure detectie die geaccumuleerde drift fouten corrigeert."
        }
      },
      {
        question: {
          en: "What is 'dynamic obstacle avoidance' achieving in real-time autonomous vehicle navigation?",
          es: "¿Qué está logrando la 'evitación dinámica de obstáculos' en navegación en tiempo real de vehículos autónomos?",
          de: "Was erreicht 'dynamische Hindernisumgehung' in der Echtzeitnavigation autonomer Fahrzeuge?",
          nl: "Wat bereikt 'dynamische obstakel vermijding' in realtime navigatie van autonome voertuigen?"
        },
        options: [
          { en: "Continuously replanning vehicle trajectories to avoid moving obstacles like pedestrians and other vehicles while maintaining progress toward the destination", es: "Continuamente replanificar trayectorias del vehículo para evitar obstáculos en movimiento como peatones y otros vehículos mientras mantiene progreso hacia el destino", de: "Kontinuierliche Neuplanung von Fahrzeugtrajektorien um sich bewegende Hindernisse wie Fußgänger und andere Fahrzeuge zu vermeiden während Fortschritt zum Ziel beibehalten wird", nl: "Continu herplannen van voertuigtrajecten om bewegende obstakels zoals voetgangers en andere voertuigen te vermijden terwijl vooruitgang naar de bestemming wordt gehandhaafd" },
          { en: "Avoiding only static obstacles like buildings", es: "Evitar solo obstáculos estáticos como edificios", de: "Nur statische Hindernisse wie Gebäude vermeiden", nl: "Alleen statische obstakels zoals gebouwen vermijden" },
          { en: "Dynamic vehicle maintenance scheduling", es: "Programación dinámica de mantenimiento de vehículo", de: "Dynamische Fahrzeugwartungsplanung", nl: "Dynamische voertuigonderhoudsplanning" },
          { en: "Obstacle course design for vehicle testing", es: "Diseño de curso de obstáculos para prueba de vehículos", de: "Hindernisparcours-Design für Fahrzeugtests", nl: "Obstakelcourse ontwerp voor voertuigtesten" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic obstacle avoidance algorithms predict the motion of moving objects and continuously adjust vehicle paths to ensure safe navigation in populated environments.",
          es: "Los algoritmos de evitación dinámica de obstáculos predicen el movimiento de objetos en movimiento y ajustan continuamente rutas del vehículo para asegurar navegación segura en entornos poblados.",
          de: "Dynamische Hindernisumgehungsalgorithmen sagen die Bewegung sich bewegender Objekte vorher und passen kontinuierlich Fahrzeugwege an um sichere Navigation in bevölkerten Umgebungen zu gewährleisten.",
          nl: "Dynamische obstakel vermijdingsalgoritmes voorspellen de beweging van bewegende objecten en passen continu voertuigpaden aan om veilige navigatie in bevolkte omgevingen te waarborgen."
        }
      },
      {
        question: {
          en: "What is 'multi-objective optimization' solving in autonomous vehicle route planning?",
          es: "¿Qué está resolviendo la 'optimización multi-objetivo' en planificación de rutas de vehículos autónomos?",
          de: "Was löst 'Multi-Objektiv-Optimierung' in der Routenplanung autonomer Fahrzeuge?",
          nl: "Wat lost 'multi-doelstelling optimalisatie' op in route planning van autonome voertuigen?"
        },
        options: [
          { en: "Balancing competing objectives like travel time, fuel efficiency, safety, and passenger comfort by finding Pareto-optimal solutions", es: "Equilibrar objetivos competidores como tiempo de viaje, eficiencia de combustible, seguridad y comodidad del pasajero encontrando soluciones Pareto-óptimas", de: "Konkurrierende Ziele wie Reisezeit, Kraftstoffeffizienz, Sicherheit und Passagierkomfort ausbalancieren durch Finden Pareto-optimaler Lösungen", nl: "Balanceren van concurrerende doelstellingen zoals reistijd, brandstofefficiëntie, veiligheid en passagierscomfort door Pareto-optimale oplossingen te vinden" },
          { en: "Having multiple destination objectives only", es: "Tener solo múltiples objetivos de destino", de: "Nur mehrere Zielziele haben", nl: "Alleen meerdere bestemmingsdoelstellingen hebben" },
          { en: "Optimizing multiple vehicle engines", es: "Optimizar múltiples motores de vehículo", de: "Mehrere Fahrzeugmotoren optimieren", nl: "Meerdere voertuigmotoren optimaliseren" },
          { en: "Multi-vehicle objective planning", es: "Planificación objetiva multi-vehículo", de: "Multi-Fahrzeug-Objektiv-Planung", nl: "Multi-voertuig doelstelling planning" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-objective optimization helps autonomous vehicles make trade-offs between conflicting goals, allowing users to choose routes that best match their preferences and priorities.",
          es: "La optimización multi-objetivo ayuda a vehículos autónomos hacer compromisos entre objetivos conflictivos, permitiendo a usuarios elegir rutas que mejor coincidan con sus preferencias y prioridades.",
          de: "Multi-Objektiv-Optimierung hilft autonomen Fahrzeugen Kompromisse zwischen widersprüchlichen Zielen zu machen, ermöglicht Benutzern Routen zu wählen die am besten zu ihren Präferenzen und Prioritäten passen.",
          nl: "Multi-doelstelling optimalisatie helpt autonome voertuigen afwegingen te maken tussen conflicterende doelen, waardoor gebruikers routes kunnen kiezen die het best passen bij hun voorkeuren en prioriteiten."
        }
      },
      {
        question: {
          en: "What is 'reinforcement learning path planning' enabling in autonomous vehicle decision making?",
          es: "¿Qué está permitiendo la 'planificación de rutas con aprendizaje por refuerzo' en toma de decisiones de vehículos autónomos?",
          de: "Was ermöglicht 'Verstärkungslernen-Pfadplanung' in der Entscheidungsfindung autonomer Fahrzeuge?",
          nl: "Wat maakt 'reinforcement learning padplanning' mogelijk in besluitvorming van autonome voertuigen?"
        },
        options: [
          { en: "Learning optimal navigation policies through trial and error by receiving rewards for successful maneuvers and penalties for unsafe actions", es: "Aprender políticas óptimas de navegación a través de ensayo y error recibiendo recompensas por maniobras exitosas y penalizaciones por acciones inseguras", de: "Optimale Navigationspolitiken durch Trial-and-Error lernen durch Erhalt von Belohnungen für erfolgreiche Manöver und Strafen für unsichere Aktionen", nl: "Optimale navigatiebeleid leren door trial-and-error door beloningen te ontvangen voor succesvolle manoeuvres en straffen voor onveilige acties" },
          { en: "Reinforcing physical path structures", es: "Reforzar estructuras físicas de caminos", de: "Physische Pfadstrukturen verstärken", nl: "Fysieke padstructuren versterken" },
          { en: "Learning to reinforce vehicle components", es: "Aprender a reforzar componentes del vehículo", de: "Lernen Fahrzeugkomponenten zu verstärken", nl: "Leren voertuigcomponenten te versterken" },
          { en: "Reinforcement of navigation equipment", es: "Refuerzo de equipo de navegación", de: "Verstärkung von Navigationsausrüstung", nl: "Versterking van navigatieapparatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Reinforcement learning enables autonomous vehicles to adapt their navigation strategies based on experience, learning to handle complex scenarios that traditional algorithms might struggle with.",
          es: "El aprendizaje por refuerzo permite a vehículos autónomos adaptar sus estrategias de navegación basándose en experiencia, aprendiendo a manejar escenarios complejos con los que algoritmos tradicionales podrían tener dificultades.",
          de: "Verstärkungslernen ermöglicht autonomen Fahrzeugen ihre Navigationsstrategien basierend auf Erfahrung anzupassen, lernen komplexe Szenarien zu bewältigen mit denen traditionelle Algorithmen Schwierigkeiten haben könnten.",
          nl: "Reinforcement learning stelt autonome voertuigen in staat hun navigatiestrategieën aan te passen op basis van ervaring, leren omgaan met complexe scenario's waarmee traditionele algoritmes moeite zouden kunnen hebben."
        }
      },
      {
        question: {
          en: "What is 'hierarchical task planning' accomplishing in autonomous vehicle mission execution?",
          es: "¿Qué está logrando la 'planificación jerárquica de tareas' en ejecución de misiones de vehículos autónomos?",
          de: "Was erreicht 'hierarchische Aufgabenplanung' in der Missionsausführung autonomer Fahrzeuge?",
          nl: "Wat bereikt 'hiërarchische taakplanning' in missie-uitvoering van autonome voertuigen?"
        },
        options: [
          { en: "Decomposing complex transportation missions into manageable subtasks with different levels of abstraction for efficient execution and monitoring", es: "Descomponer misiones complejas de transporte en subtareas manejables con diferentes niveles de abstracción para ejecución y monitoreo eficientes", de: "Komplexe Transportmissionen in handhabbare Unteraufgaben mit verschiedenen Abstraktionsebenen für effiziente Ausführung und Überwachung zerlegen", nl: "Complexe transportmissies ontleden in beheersbare subtaken met verschillende abstractieniveaus voor efficiënte uitvoering en monitoring" },
          { en: "Organizing vehicle hierarchy in fleets", es: "Organizar jerarquía de vehículos en flotas", de: "Fahrzeughierarchie in Flotten organisieren", nl: "Voertuighiërarchie in vloten organiseren" },
          { en: "Task management for vehicle maintenance", es: "Gestión de tareas para mantenimiento de vehículos", de: "Aufgabenverwaltung für Fahrzeugwartung", nl: "Taakbeheer voor voertuigonderhoud" },
          { en: "Hierarchical vehicle component planning", es: "Planificación jerárquica de componentes de vehículo", de: "Hierarchische Fahrzeugkomponenten-Planung", nl: "Hiërarchische voertuigcomponent planning" }
        ],
        correct: 0,
        explanation: {
          en: "Hierarchical task planning enables autonomous vehicles to handle complex, multi-step missions by breaking them down into strategic, tactical, and operational levels of decision-making.",
          es: "La planificación jerárquica de tareas permite a vehículos autónomos manejar misiones complejas de múltiples pasos dividiéndolas en niveles estratégicos, tácticos y operacionales de toma de decisiones.",
          de: "Hierarchische Aufgabenplanung ermöglicht autonomen Fahrzeugen komplexe, mehrstufige Missionen zu bewältigen durch Aufgliederung in strategische, taktische und operative Entscheidungsebenen.",
          nl: "Hiërarchische taakplanning stelt autonome voertuigen in staat complexe, meerstaps missies te behandelen door ze op te delen in strategische, tactische en operationele besluitvormingsniveaus."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();