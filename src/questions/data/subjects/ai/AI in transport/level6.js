// AI in Transport Quiz - Level 6: Expert Transportation AI Systems
(function() {
  const level6 = {
    name: {
      en: "AI in Transport Level 6",
      es: "IA en Transporte Nivel 6",
      de: "KI im Transport Stufe 6",
      nl: "AI in Transport Level 6"
    },
    questions: [
      {
        question: {
          en: "What is 'adversarial machine learning' addressing in autonomous vehicle security?",
          es: "¿Qué está abordando el 'aprendizaje automático adversarial' en seguridad de vehículos autónomos?",
          de: "Was adressiert 'adversariales maschinelles Lernen' in der Sicherheit autonomer Fahrzeuge?",
          nl: "Wat pakt 'adversarial machine learning' aan in de beveiliging van autonome voertuigen?"
        },
        options: [
          { en: "Protecting AI systems from malicious attacks that could fool perception systems with crafted inputs", es: "Proteger sistemas IA de ataques maliciosos que podrían engañar sistemas de percepción con entradas diseñadas", de: "KI-Systeme vor böswilligen Angriffen schützen die Wahrnehmungssysteme mit gestalteten Eingaben täuschen könnten", nl: "AI-systemen beschermen tegen kwaadaardige aanvallen die perceptiesystemen zouden kunnen misleiden met bewerkte invoer" },
          { en: "Creating competitive AI systems for racing", es: "Crear sistemas IA competitivos para carreras", de: "Wettbewerbsfähige KI-Systeme für Rennen erstellen", nl: "Competitieve AI-systemen creëren voor racen" },
          { en: "Training AI to be hostile to pedestrians", es: "Entrenar IA para ser hostil con peatones", de: "KI trainieren um feindlich gegenüber Fußgängern zu sein", nl: "AI trainen om vijandig te zijn tegen voetgangers" },
          { en: "Adversarial advertising on vehicles", es: "Publicidad adversarial en vehículos", de: "Adversariale Werbung auf Fahrzeugen", nl: "Adversarial reclame op voertuigen" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial attacks can manipulate stop signs or road markings to fool AI perception, so robust defenses are critical for safe autonomous driving.",
          es: "Los ataques adversariales pueden manipular señales de alto o marcas viales para engañar percepción IA, por lo que defensas robustas son críticas para conducción autónoma segura.",
          de: "Adversariale Angriffe können Stoppschilder oder Straßenmarkierungen manipulieren um KI-Wahrnehmung zu täuschen, daher sind robuste Verteidigungen kritisch für sicheres autonomes Fahren.",
          nl: "Adversarial aanvallen kunnen stopborden of wegmarkering manipuleren om AI-perceptie te misleiden, dus robuuste verdedigingen zijn kritiek voor veilig autonoom rijden."
        }
      },
      {
        question: {
          en: "What is 'quantum computing' potentially revolutionizing in transportation optimization?",
          es: "¿Qué está revolucionando potencialmente la 'computación cuántica' en optimización de transporte?",
          de: "Was revolutioniert 'Quantencomputing' potenziell in Transportoptimierung?",
          nl: "Wat revolutioneert 'quantum computing' potentieel in transportoptimalisatie?"
        },
        options: [
          { en: "Solving complex route optimization and traffic flow problems exponentially faster than classical computers", es: "Resolver problemas complejos de optimización de rutas y flujo de tráfico exponencialmente más rápido que computadoras clásicas", de: "Komplexe Routenoptimierung und Verkehrsfluss-Probleme exponentiell schneller lösen als klassische Computer", nl: "Complexe route-optimalisatie en verkeersstroomproblemen exponentieel sneller oplossen dan klassieke computers" },
          { en: "Creating quantum-powered vehicles", es: "Crear vehículos impulsados por cuántica", de: "Quantengetriebene Fahrzeuge erstellen", nl: "Quantum-aangedreven voertuigen creëren" },
          { en: "Quantum encryption for vehicle communications", es: "Encriptación cuántica para comunicaciones de vehículos", de: "Quantenverschlüsselung für Fahrzeugkommunikation", nl: "Quantum versleuteling voor voertuigcommunicatie" },
          { en: "Quantifying transportation metrics", es: "Cuantificar métricas de transporte", de: "Transport-Metriken quantifizieren", nl: "Transportstatistieken kwantificeren" }
        ],
        correct: 0,
        explanation: {
          en: "Quantum algorithms could optimize city-wide traffic patterns, fleet routing, and logistics networks at unprecedented scales and speeds.",
          es: "Los algoritmos cuánticos podrían optimizar patrones de tráfico de toda la ciudad, enrutamiento de flotas y redes logísticas a escalas y velocidades sin precedentes.",
          de: "Quantenalgorithmen könnten stadtweite Verkehrsmuster, Flottenrouting und Logistiknetzwerke in beispiellosen Größenordnungen und Geschwindigkeiten optimieren.",
          nl: "Quantum algoritmes zouden stadsbrede verkeerspatronen, vlootrouting en logistieke netwerken kunnen optimaliseren op ongekende schaal en snelheid."
        }
      },
      {
        question: {
          en: "What is 'explainable AI' (XAI) providing for autonomous vehicle decision-making?",
          es: "¿Qué está proporcionando la 'IA explicable' (XAI) para toma de decisiones de vehículos autónomos?",
          de: "Was bietet 'erklärbare KI' (XAI) für autonome Fahrzeugentscheidungen?",
          nl: "Wat biedt 'verklaarbare AI' (XAI) voor besluitvorming van autonome voertuigen?"
        },
        options: [
          { en: "Transparent reasoning that allows humans to understand and validate why AI systems made specific driving decisions", es: "Razonamiento transparente que permite a humanos entender y validar por qué sistemas IA tomaron decisiones específicas de conducción", de: "Transparente Argumentation die Menschen ermöglicht zu verstehen und zu validieren warum KI-Systeme spezifische Fahrentscheidungen trafen", nl: "Transparante redenering die mensen in staat stelt te begrijpen en valideren waarom AI-systemen specifieke rijbeslissingen namen" },
          { en: "Explaining traffic rules to AI systems", es: "Explicar reglas de tráfico a sistemas IA", de: "Verkehrsregeln an KI-Systeme erklären", nl: "Verkeersregels uitleggen aan AI-systemen" },
          { en: "AI systems that can explain themselves to passengers", es: "Sistemas IA que pueden explicarse a pasajeros", de: "KI-Systeme die sich Passagieren erklären können", nl: "AI-systemen die zichzelf kunnen uitleggen aan passagiers" },
          { en: "Explainable user interfaces in vehicles", es: "Interfaces de usuario explicables en vehículos", de: "Erklärbare Benutzeroberflächen in Fahrzeugen", nl: "Verklaarbare gebruikersinterfaces in voertuigen" }
        ],
        correct: 0,
        explanation: {
          en: "XAI is crucial for building trust, ensuring regulatory compliance, and enabling post-accident analysis by making AI decision processes interpretable.",
          es: "XAI es crucial para construir confianza, asegurar cumplimiento regulatorio y permitir análisis post-accidente haciendo interpretables procesos de decisión IA.",
          de: "XAI ist entscheidend für Vertrauensaufbau, Einhaltung von Vorschriften und Ermöglichung von Unfallanalysen durch interpretierbare KI-Entscheidungsprozesse.",
          nl: "XAI is cruciaal voor het opbouwen van vertrouwen, zorgen voor regelgevingsnaleving en het mogelijk maken van post-ongeval analyse door AI-besluitvormingsprocessen interpreteerbaar te maken."
        }
      },
      {
        question: {
          en: "What is 'continuous learning' enabling in deployed autonomous vehicles?",
          es: "¿Qué está permitiendo el 'aprendizaje continuo' en vehículos autónomos desplegados?",
          de: "Was ermöglicht 'kontinuierliches Lernen' in eingesetzten autonomen Fahrzeugen?",
          nl: "Wat maakt 'continue learning' mogelijk in ingezette autonome voertuigen?"
        },
        options: [
          { en: "Real-time adaptation to new environments, weather conditions, and traffic patterns without returning to manufacturers", es: "Adaptación en tiempo real a nuevos entornos, condiciones climáticas y patrones de tráfico sin regresar a fabricantes", de: "Echtzeitanpassung an neue Umgebungen, Wetterbedingungen und Verkehrsmuster ohne Rückkehr zu Herstellern", nl: "Realtime aanpassing aan nieuwe omgevingen, weersomstandigheden en verkeerspatronen zonder terugkeer naar fabrikanten" },
          { en: "Continuous driver education programs", es: "Programas continuos de educación de conductores", de: "Kontinuierliche Fahrer-Ausbildungsprogramme", nl: "Continue bestuurder educatieprogramma's" },
          { en: "Learning to drive in circles continuously", es: "Aprender a conducir en círculos continuamente", de: "Kontinuierlich im Kreis fahren lernen", nl: "Leren om continu in cirkels te rijden" },
          { en: "Continuous software updates only", es: "Solo actualizaciones continuas de software", de: "Nur kontinuierliche Software-Updates", nl: "Alleen continue software-updates" }
        ],
        correct: 0,
        explanation: {
          en: "Continuous learning allows vehicles to improve performance by learning from new experiences while maintaining safety and avoiding catastrophic forgetting.",
          es: "El aprendizaje continuo permite a vehículos mejorar rendimiento aprendiendo de nuevas experiencias mientras mantiene seguridad y evita olvido catastrófico.",
          de: "Kontinuierliches Lernen ermöglicht Fahrzeugen die Leistung durch Lernen aus neuen Erfahrungen zu verbessern während Sicherheit erhalten und katastrophales Vergessen vermieden wird.",
          nl: "Continue learning stelt voertuigen in staat prestaties te verbeteren door te leren van nieuwe ervaringen terwijl veiligheid behouden blijft en catastrofaal vergeten wordt vermeden."
        }
      },
      {
        question: {
          en: "What is 'emergent behavior' in large-scale autonomous vehicle networks?",
          es: "¿Qué es el 'comportamiento emergente' en redes de vehículos autónomos a gran escala?",
          de: "Was ist 'emergentes Verhalten' in großangelegten autonomen Fahrzeugnetzwerken?",
          nl: "Wat is 'emergent gedrag' in grootschalige autonome voertuignetwerken?"
        },
        options: [
          { en: "Complex collective behaviors arising from simple individual vehicle interactions that weren't explicitly programmed", es: "Comportamientos colectivos complejos surgiendo de interacciones individuales simples de vehículos no programados explícitamente", de: "Komplexe kollektive Verhaltensweisen aus einfachen Fahrzeuginteraktionen die nicht explizit programmiert wurden", nl: "Complexe collectieve gedragingen uit eenvoudige individuele voertuiginteracties die niet expliciet geprogrammeerd waren" },
          { en: "Emergency response behaviors in vehicles", es: "Comportamientos de respuesta de emergencia en vehículos", de: "Notfallreaktionsverhalten in Fahrzeugen", nl: "Noodresponsgedrag in voertuigen" },
          { en: "Behaviors that emerge during vehicle manufacturing", es: "Comportamientos que emergen durante fabricación de vehículos", de: "Verhaltensweisen die während der Fahrzeugherstellung entstehen", nl: "Gedragingen die ontstaan tijdens voertuigproductie" },
          { en: "Emerging from parking lots", es: "Emergiendo de estacionamientos", de: "Aus Parkplätzen hervortretend", nl: "Opkomend uit parkeerplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "When thousands of autonomous vehicles interact, unexpected traffic patterns, routing behaviors, and system-wide optimizations can emerge naturally.",
          es: "Cuando miles de vehículos autónomos interactúan, patrones de tráfico inesperados, comportamientos de enrutamiento y optimizaciones de todo el sistema pueden emerger naturalmente.",
          de: "Wenn Tausende autonomer Fahrzeuge interagieren, können unerwartete Verkehrsmuster, Routing-Verhalten und systemweite Optimierungen natürlich entstehen.",
          nl: "Wanneer duizenden autonome voertuigen interacteren, kunnen onverwachte verkeerspatronen, routinggedrag en systeembrede optimalisaties natuurlijk ontstaan."
        }
      },
      {
        question: {
          en: "What is 'ant colony optimization' contributing to vehicle route planning?",
          es: "¿Qué está contribuyendo la 'optimización de colonia de hormigas' a la planificación de rutas de vehículos?",
          de: "Was trägt 'Ameisenkolonie-Optimierung' zur Fahrzeug-Routenplanung bei?",
          nl: "Wat draagt 'mierenkolonie optimalisatie' bij aan voertuigroute planning?"
        },
        options: [
          { en: "Bio-inspired algorithm that finds optimal paths by simulating how ants leave pheromone trails to discover efficient routes through complex networks", es: "Algoritmo bio-inspirado que encuentra rutas óptimas simulando cómo las hormigas dejan rastros de feromonas para descubrir rutas eficientes a través de redes complejas", de: "Bio-inspirierter Algorithmus der optimale Pfade findet durch Simulation wie Ameisen Pheromonspuren hinterlassen um effiziente Routen durch komplexe Netzwerke zu entdecken", nl: "Bio-geïnspireerd algoritme dat optimale paden vindt door te simuleren hoe mieren feromonsporen achterlaten om efficiënte routes door complexe netwerken te ontdekken" },
          { en: "Colony of ants controlling vehicle steering", es: "Colonia de hormigas controlando dirección de vehículo", de: "Ameisenkolonie die Fahrzeuglenkung kontrolliert", nl: "Kolonie mieren die voertuigbesturing controleert" },
          { en: "Optimizing ant populations near highways", es: "Optimizar poblaciones de hormigas cerca de autopistas", de: "Ameisenpopulationen in der Nähe von Autobahnen optimieren", nl: "Mierenpopulaties nabij snelwegen optimaliseren" },
          { en: "Ant-based vehicle manufacturing", es: "Fabricación de vehículos basada en hormigas", de: "Ameisenbasierte Fahrzeugherstellung", nl: "Mier-gebaseerde voertuigproductie" }
        ],
        correct: 0,
        explanation: {
          en: "Ant colony optimization excels at finding good solutions to complex routing problems by using collective intelligence and positive feedback mechanisms.",
          es: "La optimización de colonia de hormigas sobresale encontrando buenas soluciones a problemas complejos de enrutamiento usando inteligencia colectiva y mecanismos de retroalimentación positiva.",
          de: "Ameisenkolonie-Optimierung excelliert beim Finden guter Lösungen für komplexe Routing-Probleme durch kollektive Intelligenz und positive Rückkopplungsmechanismen.",
          nl: "Mierenkolonie optimalisatie blinkt uit in het vinden van goede oplossingen voor complexe routeringsproblemen door collectieve intelligentie en positieve feedback mechanismen."
        }
      },
      {
        question: {
          en: "What is 'multi-agent coordination' achieving in autonomous vehicle fleets?",
          es: "¿Qué está logrando la 'coordinación multi-agente' en flotas de vehículos autónomos?",
          de: "Was erreicht 'Multi-Agenten-Koordination' in autonomen Fahrzeugflotten?",
          nl: "Wat bereikt 'multi-agent coördinatie' in autonome voertuigvloten?"
        },
        options: [
          { en: "Distributed decision-making where multiple vehicles negotiate and coordinate actions to optimize collective performance without central control", es: "Toma de decisiones distribuida donde múltiples vehículos negocian y coordinan acciones para optimizar rendimiento colectivo sin control central", de: "Verteilte Entscheidungsfindung wo mehrere Fahrzeuge verhandeln und Aktionen koordinieren um kollektive Leistung ohne zentrale Kontrolle zu optimieren", nl: "Gedistribueerde besluitvorming waarbij meerdere voertuigen onderhandelen en acties coördineren om collectieve prestaties te optimaliseren zonder centrale controle" },
          { en: "Multiple agents selling vehicles", es: "Múltiples agentes vendiendo vehículos", de: "Mehrere Agenten verkaufen Fahrzeuge", nl: "Meerdere agenten die voertuigen verkopen" },
          { en: "Agent-based vehicle insurance", es: "Seguro de vehículo basado en agentes", de: "Agentenbasierte Fahrzeugversicherung", nl: "Agent-gebaseerde voertuigverzekering" },
          { en: "Coordinating vehicle sales agents", es: "Coordinar agentes de ventas de vehículos", de: "Fahrzeugverkaufsagenten koordinieren", nl: "Voertuigverkoopagenten coördineren" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-agent systems enable autonomous vehicles to work together like a distributed AI, sharing information and coordinating movements for improved traffic flow and safety.",
          es: "Los sistemas multi-agente permiten a vehículos autónomos trabajar juntos como una IA distribuida, compartiendo información y coordinando movimientos para mejorar flujo de tráfico y seguridad.",
          de: "Multi-Agenten-Systeme ermöglichen autonomen Fahrzeugen zusammenzuarbeiten wie eine verteilte KI, Informationen zu teilen und Bewegungen zu koordinieren für verbesserten Verkehrsfluss und Sicherheit.",
          nl: "Multi-agent systemen stellen autonome voertuigen in staat samen te werken als een gedistribueerde AI, informatie te delen en bewegingen te coördineren voor verbeterde verkeersstroom en veiligheid."
        }
      },
      {
        question: {
          en: "What is 'edge AI computing' enabling in autonomous vehicles?",
          es: "¿Qué está permitiendo la 'computación IA de borde' en vehículos autónomos?",
          de: "Was ermöglicht 'Edge-KI-Computing' in autonomen Fahrzeugen?",
          nl: "Wat maakt 'edge AI computing' mogelijk in autonome voertuigen?"
        },
        options: [
          { en: "Real-time AI processing directly in vehicles without relying on cloud connectivity, ensuring low latency and privacy protection", es: "Procesamiento IA en tiempo real directamente en vehículos sin depender de conectividad en la nube, asegurando baja latencia y protección de privacidad", de: "Echtzeit-KI-Verarbeitung direkt in Fahrzeugen ohne Abhängigkeit von Cloud-Konnektivität, gewährleistet niedrige Latenz und Datenschutz", nl: "Realtime AI-verwerking direct in voertuigen zonder afhankelijkheid van cloudconnectiviteit, zorgt voor lage latentie en privacybescherming" },
          { en: "AI processing at road edges only", es: "Procesamiento IA solo en bordes de carretera", de: "KI-Verarbeitung nur an Straßenrändern", nl: "AI-verwerking alleen aan wegranden" },
          { en: "Edge detection algorithms", es: "Algoritmos de detección de bordes", de: "Kantenerkennungsalgorithmen", nl: "Randdetectie algoritmes" },
          { en: "Computing on vehicle edges", es: "Computación en bordes de vehículo", de: "Computing an Fahrzeugkanten", nl: "Computing op voertuigranden" }
        ],
        correct: 0,
        explanation: {
          en: "Edge AI enables autonomous vehicles to make split-second decisions locally, reducing dependence on unreliable network connections and improving response times.",
          es: "Edge AI permite a vehículos autónomos tomar decisiones de fracción de segundo localmente, reduciendo dependencia de conexiones de red poco confiables y mejorando tiempos de respuesta.",
          de: "Edge-KI ermöglicht autonomen Fahrzeugen Sekundenbruchteile-Entscheidungen lokal zu treffen, reduziert Abhängigkeit von unzuverlässigen Netzwerkverbindungen und verbessert Antwortzeiten.",
          nl: "Edge AI stelt autonome voertuigen in staat lokaal split-second beslissingen te nemen, vermindert afhankelijkheid van onbetrouwbare netwerkverbindingen en verbetert reactietijden."
        }
      },
      {
        question: {
          en: "What is 'predictive maintenance AI' accomplishing in vehicle fleet management?",
          es: "¿Qué está logrando la 'IA de mantenimiento predictivo' en gestión de flotas de vehículos?",
          de: "Was erreicht 'Predictive Maintenance KI' im Fahrzeugflottenmanagement?",
          nl: "Wat bereikt 'predictive maintenance AI' in voertuigvlootbeheer?"
        },
        options: [
          { en: "Analyzing sensor data and usage patterns to predict component failures before they occur, minimizing downtime and optimizing maintenance schedules", es: "Analizar datos sensores y patrones uso para predecir fallas componentes antes que ocurran, minimizando inactividad y optimizando mantenimiento", de: "Sensordaten und Nutzungsmuster analysieren um Komponentenausfälle vorherzusagen, minimiert Ausfallzeiten und optimiert Wartung", nl: "Sensordata en gebruikspatronen analyseren om componentdefecten te voorspellen, minimaliseert uitvaltijd en optimaliseert onderhoud" },
          { en: "Predicting future vehicle models", es: "Predecir futuros modelos de vehículos", de: "Zukünftige Fahrzeugmodelle vorhersagen", nl: "Toekomstige voertuigmodellen voorspellen" },
          { en: "Maintaining AI prediction algorithms", es: "Mantener algoritmos de predicción IA", de: "KI-Vorhersagealgorithmen warten", nl: "AI-voorspellingsalgoritmes onderhouden" },
          { en: "Predicting maintenance costs only", es: "Predecir solo costos de mantenimiento", de: "Nur Wartungskosten vorhersagen", nl: "Alleen onderhoudskosten voorspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Predictive maintenance AI transforms fleet operations by shifting from reactive repairs to proactive maintenance, reducing costs and improving vehicle reliability.",
          es: "La IA de mantenimiento predictivo transforma operaciones de flota cambiando de reparaciones reactivas a mantenimiento proactivo, reduciendo costos y mejorando confiabilidad del vehículo.",
          de: "Predictive Maintenance KI transformiert Flottenbetrieb durch Wechsel von reaktiven Reparaturen zu proaktiver Wartung, reduziert Kosten und verbessert Fahrzeugzuverlässigkeit.",
          nl: "Predictive maintenance AI transformeert vlootoperaties door te verschuiven van reactieve reparaties naar proactief onderhoud, vermindert kosten en verbetert voertuigbetrouwbaarheid."
        }
      },
      {
        question: {
          en: "What is 'mesh networking' enabling in connected vehicle ecosystems?",
          es: "¿Qué está permitiendo la 'red mallada' en ecosistemas de vehículos conectados?",
          de: "Was ermöglicht 'Mesh-Networking' in vernetzten Fahrzeug-Ökosystemen?",
          nl: "Wat maakt 'mesh networking' mogelijk in verbonden voertuigecosystemen?"
        },
        options: [
          { en: "Creating resilient communication networks where vehicles act as nodes, allowing data to route through multiple paths even when some vehicles leave the network", es: "Crear redes resilientes donde vehículos actúan como nodos, permitiendo datos enrutarse via múltiples caminos incluso cuando vehículos salen", de: "Resiliente Netzwerke wo Fahrzeuge als Knoten fungieren, ermöglichen Datenrouting durch mehrere Pfade auch wenn Fahrzeuge ausscheiden", nl: "Veerkrachtige netwerken waarbij voertuigen fungeren als knooppunten, data routeren via meerdere paden zelfs wanneer voertuigen uitvallen" },
          { en: "Physical mesh covers for vehicle protection", es: "Cubiertas de malla físicas para protección de vehículos", de: "Physische Netzabdeckungen für Fahrzeugschutz", nl: "Fysieke mesh dekking voor voertuigbescherming" },
          { en: "Mesh interior design in vehicles", es: "Diseño interior de malla en vehículos", de: "Netz-Innendesign in Fahrzeugen", nl: "Mesh interieurontwerp in voertuigen" },
          { en: "Networking vehicle maintenance schedules", es: "Programación en red de mantenimiento de vehículos", de: "Vernetzte Fahrzeugwartungspläne", nl: "Netwerken van voertuigonderhoudsschema's" }
        ],
        correct: 0,
        explanation: {
          en: "Mesh networking creates robust vehicle-to-vehicle communication that doesn't rely on fixed infrastructure, enabling real-time information sharing in dynamic traffic conditions.",
          es: "La red mallada crea comunicación robusta de vehículo a vehículo que no depende de infraestructura fija, permitiendo intercambio de información en tiempo real en condiciones de tráfico dinámicas.",
          de: "Mesh-Networking schafft robuste Fahrzeug-zu-Fahrzeug-Kommunikation die nicht auf feste Infrastruktur angewiesen ist, ermöglicht Echtzeitinformationsaustausch unter dynamischen Verkehrsbedingungen.",
          nl: "Mesh networking creëert robuuste voertuig-naar-voertuig communicatie die niet afhankelijk is van vaste infrastructuur, waardoor realtime informatie-uitwisseling mogelijk is in dynamische verkeersomstandigheden."
        }
      },
      {
        question: {
          en: "What is 'collective intelligence' achieving in smart transportation networks?",
          es: "¿Qué está logrando la 'inteligencia colectiva' en redes de transporte inteligente?",
          de: "Was erreicht 'kollektive Intelligenz' in intelligenten Transportnetzwerken?",
          nl: "Wat bereikt 'collectieve intelligentie' in slimme transportnetwerken?"
        },
        options: [
          { en: "Aggregating knowledge from thousands of vehicles and infrastructure components to make system-wide optimization decisions that no single entity could achieve alone", es: "Agregar conocimiento de miles de vehículos y componentes de infraestructura para tomar decisiones de optimización de todo el sistema que ninguna entidad individual podría lograr sola", de: "Wissen von Tausenden von Fahrzeugen und Infrastrukturkomponenten aggregieren um systemweite Optimierungsentscheidungen zu treffen die keine einzelne Entität allein erreichen könnte", nl: "Kennis aggregeren van duizenden voertuigen en infrastructuurcomponenten om systeembrede optimalisatiebeslissingen te nemen die geen enkele entiteit alleen zou kunnen bereiken" },
          { en: "Collective vehicle purchasing decisions", es: "Decisiones colectivas de compra de vehículos", de: "Kollektive Fahrzeugkaufentscheidungen", nl: "Collectieve voertuigaankoopbeslissingen" },
          { en: "Intelligence gathering about transportation crimes", es: "Recopilación de inteligencia sobre crímenes de transporte", de: "Intelligenz-Sammlung über Transportverbrechen", nl: "Intelligentie verzameling over transportmisdaden" },
          { en: "Collective transportation employee training", es: "Entrenamiento colectivo de empleados de transporte", de: "Kollektive Transportmitarbeiter-Schulung", nl: "Collectieve transportmedewerker training" }
        ],
        correct: 0,
        explanation: {
          en: "Collective intelligence emerges when individual smart vehicles and infrastructure elements share data and insights, creating transportation systems that are smarter than the sum of their parts.",
          es: "La inteligencia colectiva emerge cuando vehículos inteligentes individuales y elementos de infraestructura comparten datos y conocimientos, creando sistemas de transporte más inteligentes que la suma de sus partes.",
          de: "Kollektive Intelligenz entsteht wenn individuelle intelligente Fahrzeuge und Infrastrukturelementen Daten und Erkenntnisse teilen, schafft Transportsysteme die intelligenter sind als die Summe ihrer Teile.",
          nl: "Collectieve intelligentie ontstaat wanneer individuele slimme voertuigen en infrastructuurelementen data en inzichten delen, waardoor transportsystemen ontstaan die slimmer zijn dan de som van hun onderdelen."
        }
      },
      {
        question: {
          en: "What is 'dynamic load balancing' optimizing in multi-modal transportation systems?",
          es: "¿Qué está optimizando el 'equilibrio dinámico de carga' en sistemas de transporte multimodal?",
          de: "Was optimiert 'dynamische Lastbalancierung' in multimodalen Transportsystemen?",
          nl: "Wat optimaliseert 'dynamische load balancing' in multimodale transportsystemen?"
        },
        options: [
          { en: "Automatically redistributing passengers and cargo across different transportation modes (trains, buses, bikes, cars) in real-time based on capacity and demand", es: "Redistribuir automáticamente pasajeros y carga a través de diferentes modos de transporte (trenes, autobuses, bicicletas, autos) en tiempo real basado en capacidad y demanda", de: "Automatische Umverteilung von Passagieren und Fracht über verschiedene Transportmodi (Züge, Busse, Fahrräder, Autos) in Echtzeit basierend auf Kapazität und Nachfrage", nl: "Automatisch herverdelingen van passagiers en lading over verschillende transportmodi (treinen, bussen, fietsen, auto's) in realtime gebaseerd op capaciteit en vraag" },
          { en: "Balancing physical weight in vehicles", es: "Equilibrar peso físico en vehículos", de: "Physisches Gewicht in Fahrzeugen ausbalancieren", nl: "Fysiek gewicht in voertuigen balanceren" },
          { en: "Loading and unloading cargo efficiently", es: "Cargar y descargar carga eficientemente", de: "Fracht effizient laden und entladen", nl: "Lading efficiënt laden en lossen" },
          { en: "Balancing vehicle fuel loads", es: "Equilibrar cargas de combustible de vehículo", de: "Fahrzeugkraftstofflasten ausbalancieren", nl: "Voertuigbrandstofladingen balanceren" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic load balancing ensures optimal utilization of all transportation resources by intelligently directing traffic flow across different modes based on real-time conditions.",
          es: "El equilibrio dinámico de carga asegura utilización óptima de todos los recursos de transporte dirigiendo inteligentemente el flujo de tráfico a través de diferentes modos basado en condiciones en tiempo real.",
          de: "Dynamische Lastbalancierung gewährleistet optimale Nutzung aller Transportressourcen durch intelligente Lenkung des Verkehrsflusses über verschiedene Modi basierend auf Echtzeitbedingungen.",
          nl: "Dynamische load balancing zorgt voor optimaal gebruik van alle transportbronnen door verkeersstroom intelligent te leiden over verschillende modi gebaseerd op realtime omstandigheden."
        }
      },
      {
        question: {
          en: "What is 'cooperative perception' enabling in connected autonomous vehicles?",
          es: "¿Qué está permitiendo la 'percepción cooperativa' en vehículos autónomos conectados?",
          de: "Was ermöglicht 'kooperative Wahrnehmung' in vernetzten autonomen Fahrzeugen?",
          nl: "Wat maakt 'coöperatieve perceptie' mogelijk in verbonden autonome voertuigen?"
        },
        options: [
          { en: "Sharing sensor data and perceptual information between vehicles to create a collective understanding of the environment beyond individual vehicle capabilities", es: "Compartir datos de sensores e información perceptual entre vehículos para crear comprensión colectiva del entorno más allá de capacidades individuales del vehículo", de: "Sensordaten und Wahrnehmungsinformationen zwischen Fahrzeugen teilen um kollektives Verständnis der Umgebung zu schaffen jenseits individueller Fahrzeugfähigkeiten", nl: "Sensordata en perceptuele informatie delen tussen voertuigen om collectief begrip van de omgeving te creëren voorbij individuele voertuigmogelijkheden" },
          { en: "Cooperation between vehicle manufacturers", es: "Cooperación entre fabricantes de vehículos", de: "Kooperation zwischen Fahrzeugherstellern", nl: "Samenwerking tussen voertuigfabrikanten" },
          { en: "Perception training for vehicle operators", es: "Entrenamiento de percepción para operadores de vehículos", de: "Wahrnehmungstraining für Fahrzeugbediener", nl: "Perceptietraining voor voertuigoperators" },
          { en: "Cooperative vehicle parking systems", es: "Sistemas cooperativos de estacionamiento de vehículos", de: "Kooperative Fahrzeugparksysteme", nl: "Coöperatieve voertuigparkeersystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Cooperative perception allows vehicles to 'see' around corners and beyond obstacles by sharing sensor data, dramatically improving safety and decision-making capabilities.",
          es: "La percepción cooperativa permite a vehículos 'ver' alrededor de esquinas y más allá de obstáculos compartiendo datos de sensores, mejorando dramáticamente capacidades de seguridad y toma de decisiones.",
          de: "Kooperative Wahrnehmung ermöglicht Fahrzeugen 'um Ecken zu sehen' und jenseits von Hindernissen durch Teilen von Sensordaten, verbessert dramatisch Sicherheits- und Entscheidungsfähigkeiten.",
          nl: "Coöperatieve perceptie stelt voertuigen in staat 'om hoeken te kijken' en voorbij obstakels door sensordata te delen, verbetert dramatisch veiligheids- en besluitvormingsmogelijkheden."
        }
      },
      {
        question: {
          en: "What is 'adaptive traffic signal optimization' achieving in smart cities?",
          es: "¿Qué está logrando la 'optimización adaptativa de semáforos' en ciudades inteligentes?",
          de: "Was erreicht 'adaptive Verkehrsampel-Optimierung' in Smart Cities?",
          nl: "Wat bereikt 'adaptieve verkeerslicht optimalisatie' in slimme steden?"
        },
        options: [
          { en: "Real-time adjustment of traffic light timing based on current traffic flow, weather conditions, and pedestrian presence to minimize delays and maximize throughput", es: "Ajuste en tiempo real de temporización de semáforos basado en flujo de tráfico actual, condiciones climáticas y presencia de peatones para minimizar retrasos y maximizar rendimiento", de: "Echtzeitanpassung der Ampelzeiten basierend auf aktuellem Verkehrsfluss, Wetterbedingungen und Fußgängerpräsenz um Verzögerungen zu minimieren und Durchsatz zu maximieren", nl: "Realtime aanpassing van verkeerslicht timing gebaseerd op huidige verkeersstroom, weersomstandigheden en voetgangersaanwezigheid om vertragingen te minimaliseren en doorvoer te maximaliseren" },
          { en: "Adapting traffic signals to different vehicle colors", es: "Adaptar semáforos a diferentes colores de vehículos", de: "Verkehrsampeln an verschiedene Fahrzeugfarben anpassen", nl: "Verkeerslichten aanpassen aan verschillende voertuigkleuren" },
          { en: "Adaptive brightness of traffic signals", es: "Brillo adaptativo de semáforos", de: "Adaptive Helligkeit von Verkehrsampeln", nl: "Adaptieve helderheid van verkeerslichten" },
          { en: "Optimizing traffic signal maintenance", es: "Optimizar mantenimiento de semáforos", de: "Verkehrsampel-Wartung optimieren", nl: "Verkeerslicht onderhoud optimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Adaptive traffic signals use AI to continuously monitor and adjust to changing conditions, reducing traffic congestion and improving overall urban mobility efficiency.",
          es: "Los semáforos adaptativos usan IA para monitorear continuamente y ajustarse a condiciones cambiantes, reduciendo congestión de tráfico y mejorando eficiencia general de movilidad urbana.",
          de: "Adaptive Verkehrsampeln verwenden KI um kontinuierlich zu überwachen und sich an verändernde Bedingungen anzupassen, reduziert Verkehrsstaus und verbessert allgemeine städtische Mobilitätseffizienz.",
          nl: "Adaptieve verkeerslichten gebruiken AI om continu te monitoren en aan te passen aan veranderende omstandigheden, vermindert verkeersopstoppingen en verbetert algehele stedelijke mobiliteitsefficiëntie."
        }
      },
      {
        question: {
          en: "What is 'distributed consensus algorithms' enabling in autonomous vehicle coordination?",
          es: "¿Qué están permitiendo los 'algoritmos de consenso distribuido' en coordinación de vehículos autónomos?",
          de: "Was ermöglichen 'verteilte Konsensalgorithmen' in der Koordination autonomer Fahrzeuge?",
          nl: "Wat maken 'gedistribueerde consensus algoritmes' mogelijk in coördinatie van autonome voertuigen?"
        },
        options: [
          { en: "Allowing groups of vehicles to collectively agree on decisions like lane changes, merging, and intersection priorities without central coordination", es: "Permitir a grupos de vehículos acordar colectivamente decisiones como cambios de carril, fusiones y prioridades de intersección sin coordinación central", de: "Gruppen von Fahrzeugen ermöglichen kollektiv Entscheidungen wie Spurwechsel, Einfahren und Kreuzungsprioritäten ohne zentrale Koordination zu vereinbaren", nl: "Groepen voertuigen in staat stellen collectief akkoord te gaan over beslissingen zoals rijstrookwisselingen, samenvoegen en kruispuntprioriteiten zonder centrale coördinatie" },
          { en: "Consensus on vehicle pricing", es: "Consenso sobre precios de vehículos", de: "Konsens über Fahrzeugpreise", nl: "Consensus over voertuigprijzen" },
          { en: "Distributed vehicle manufacturing agreements", es: "Acuerdos distribuidos de fabricación de vehículos", de: "Verteilte Fahrzeugherstellungsvereinbarungen", nl: "Gedistribueerde voertuigproductie overeenkomsten" },
          { en: "Algorithm consensus for software updates", es: "Consenso de algoritmo para actualizaciones de software", de: "Algorithmus-Konsens für Software-Updates", nl: "Algoritme consensus voor software-updates" }
        ],
        correct: 0,
        explanation: {
          en: "Distributed consensus enables autonomous vehicles to coordinate complex maneuvers safely and efficiently without relying on centralized traffic management systems.",
          es: "El consenso distribuido permite a vehículos autónomos coordinar maniobras complejas de manera segura y eficiente sin depender de sistemas centralizados de gestión de tráfico.",
          de: "Verteilter Konsens ermöglicht autonomen Fahrzeugen komplexe Manöver sicher und effizient zu koordinieren ohne auf zentralisierte Verkehrsmanagementsysteme angewiesen zu sein.",
          nl: "Gedistribueerde consensus stelt autonome voertuigen in staat complexe manoeuvres veilig en efficiënt te coördineren zonder afhankelijk te zijn van gecentraliseerde verkeersmanagementsystemen."
        }
      },
      {
        question: {
          en: "What is 'swarm robotics principles' contributing to large-scale vehicle fleet coordination?",
          es: "¿Qué están contribuyendo los 'principios de robótica de enjambre' a la coordinación de flotas de vehículos a gran escala?",
          de: "Was tragen 'Schwarmrobotik-Prinzipien' zur großangelegten Fahrzeugflotten-Koordination bei?",
          nl: "Wat dragen 'zwermrobotica principes' bij aan grootschalige voertuigvloot coördinatie?"
        },
        options: [
          { en: "Enabling thousands of vehicles to self-organize and coordinate using simple local rules to achieve complex global behaviors like efficient traffic flow and collision avoidance", es: "Miles de vehículos auto-organizarse y coordinarse con reglas locales simples logrando comportamientos complejos como flujo eficiente y evitación colisiones", de: "Tausende Fahrzeuge selbst organisieren und koordinieren mit lokalen Regeln für komplexe Verhaltensweisen wie Verkehrsfluss und Kollisionsvermeidung", nl: "Duizenden voertuigen zelf organiseren en coördineren met lokale regels voor complexe gedragingen zoals verkeersstroom en botsingvermijding" },
          { en: "Using robotic swarms to repair vehicles", es: "Usar enjambres robóticos para reparar vehículos", de: "Roboterschwärme zur Fahrzeugreparatur verwenden", nl: "Robotzwermen gebruiken om voertuigen te repareren" },
          { en: "Swarm-based vehicle assembly lines", es: "Líneas de ensamblaje de vehículos basadas en enjambre", de: "Schwarmbasierte Fahrzeugmontagenlinien", nl: "Zwerm-gebaseerde voertuigassemblagelijnen" },
          { en: "Robotic bees directing traffic", es: "Abejas robóticas dirigiendo tráfico", de: "Roboterbienen die Verkehr lenken", nl: "Robotbijen die verkeer dirigeren" }
        ],
        correct: 0,
        explanation: {
          en: "Swarm robotics principles enable vehicle fleets to exhibit intelligent collective behavior without centralized control, similar to how bird flocks or bee colonies operate efficiently.",
          es: "Los principios de robótica de enjambre permiten a flotas de vehículos exhibir comportamiento colectivo inteligente sin control centralizado, similar a cómo bandadas de pájaros o colonias de abejas operan eficientemente.",
          de: "Schwarmrobotik-Prinzipien ermöglichen Fahrzeugflotten intelligentes kollektives Verhalten ohne zentralisierte Kontrolle zu zeigen, ähnlich wie Vogelschwärme oder Bienenvölker effizient operieren.",
          nl: "Zwermrobotica principes stellen voertuigvloten in staat intelligent collectief gedrag te vertonen zonder gecentraliseerde controle, vergelijkbaar met hoe vogelvluchten of bijenkolonies efficiënt opereren."
        }
      },
      {
        question: {
          en: "What is 'contextual AI reasoning' providing for autonomous vehicle decision-making?",
          es: "¿Qué está proporcionando el 'razonamiento IA contextual' para toma de decisiones de vehículos autónomos?",
          de: "Was bietet 'kontextuelles KI-Reasoning' für autonome Fahrzeugentscheidungen?",
          nl: "Wat biedt 'contextuele AI-redeneringen' voor besluitvorming van autonome voertuigen?"
        },
        options: [
          { en: "Understanding situational context beyond immediate sensor data, such as cultural driving norms, time of day effects, and event-specific traffic patterns", es: "Entender contexto situacional más allá de datos inmediatos de sensores, como normas culturales de conducción, efectos de hora del día y patrones de tráfico específicos de eventos", de: "Situationskontext verstehen jenseits unmittelbarer Sensordaten, wie kulturelle Fahrnormen, Tageszeit-Effekte und ereignisspezifische Verkehrsmuster", nl: "Situationele context begrijpen voorbij directe sensordata, zoals culturele rijdnormen, tijd-van-de-dag effecten en evenement-specifieke verkeerspatronen" },
          { en: "Contextual vehicle advertising", es: "Publicidad contextual de vehículos", de: "Kontextuelle Fahrzeugwerbung", nl: "Contextuele voertuigreclame" },
          { en: "AI reasoning about vehicle context menus", es: "Razonamiento IA sobre menús contextuales de vehículo", de: "KI-Reasoning über Fahrzeug-Kontextmenüs", nl: "AI-redenering over voertuig contextmenu's" },
          { en: "Context-aware vehicle maintenance", es: "Mantenimiento de vehículo consciente del contexto", de: "Kontextbewusste Fahrzeugwartung", nl: "Context-bewust voertuigonderhoud" }
        ],
        correct: 0,
        explanation: {
          en: "Contextual AI reasoning enables autonomous vehicles to adapt their behavior appropriately to different cultural, temporal, and situational contexts beyond basic traffic rules.",
          es: "El razonamiento IA contextual permite a vehículos autónomos adaptar su comportamiento apropiadamente a diferentes contextos culturales, temporales y situacionales más allá de reglas básicas de tráfico.",
          de: "Kontextuelles KI-Reasoning ermöglicht autonomen Fahrzeugen ihr Verhalten angemessen an verschiedene kulturelle, zeitliche und situative Kontexte jenseits grundlegender Verkehrsregeln anzupassen.",
          nl: "Contextuele AI-redeneringen stellen autonome voertuigen in staat hun gedrag passend aan te passen aan verschillende culturele, temporele en situationele contexten voorbij basis verkeersregels."
        }
      },
      {
        question: {
          en: "What is 'genetic algorithm optimization' contributing to large-scale route planning?",
          es: "¿Qué está contribuyendo la 'optimización con algoritmos genéticos' a la planificación de rutas a gran escala?",
          de: "Was trägt 'genetische Algorithmus-Optimierung' zur großangelegten Routenplanung bei?",
          nl: "Wat draagt 'genetische algoritme optimalisatie' bij aan grootschalige routeplanning?"
        },
        options: [
          { en: "Evolutionary computation that evolves optimal routing solutions by simulating natural selection processes across multiple generations of route combinations", es: "Computación evolutiva que evoluciona soluciones de enrutamiento óptimas simulando procesos de selección natural a través de múltiples generaciones de combinaciones de rutas", de: "Evolutionäre Berechnung die optimale Routing-Lösungen entwickelt durch Simulation natürlicher Selektionsprozesse über mehrere Generationen von Routenkombinationen", nl: "Evolutionaire berekening die optimale routeringsoplossingen evolueert door natuurlijke selectieprocessen te simuleren over meerdere generaties van routecombinaties" },
          { en: "Using genetic testing for vehicle operators", es: "Usar pruebas genéticas para operadores de vehículos", de: "Gentests für Fahrzeugbediener verwenden", nl: "Genetische testen gebruiken voor voertuigoperators" },
          { en: "Genetic modification of transportation infrastructure", es: "Modificación genética de infraestructura de transporte", de: "Genetische Modifikation der Transportinfrastruktur", nl: "Genetische modificatie van transportinfrastructuur" },
          { en: "Optimizing DNA analysis in vehicles", es: "Optimizar análisis de ADN en vehículos", de: "DNA-Analyse in Fahrzeugen optimieren", nl: "DNA-analyse in voertuigen optimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Genetic algorithms mimic biological evolution to solve complex optimization problems, evolving increasingly better route solutions through crossover, mutation, and selection operations.",
          es: "Los algoritmos genéticos imitan evolución biológica para resolver problemas complejos de optimización, evolucionando soluciones de ruta cada vez mejores através operaciones de cruce, mutación y selección.",
          de: "Genetische Algorithmen ahmen biologische Evolution nach um komplexe Optimierungsprobleme zu lösen, entwickeln zunehmend bessere Routenlösungen durch Kreuzung, Mutation und Selektionsoperationen.",
          nl: "Genetische algoritmes bootsen biologische evolutie na om complexe optimalisatieproblemen op te lossen, evolueren steeds betere route-oplossingen door kruising, mutatie en selectie-operaties."
        }
      },
      {
        question: {
          en: "What is 'hierarchical path planning' achieving in autonomous navigation systems?",
          es: "¿Qué está logrando la 'planificación jerárquica de rutas' en sistemas de navegación autónoma?",
          de: "Was erreicht 'hierarchische Pfadplanung' in autonomen Navigationssystemen?",
          nl: "Wat bereikt 'hiërarchische padplanning' in autonome navigatiesystemen?"
        },
        options: [
          { en: "Multi-level planning approach that combines global route optimization with local obstacle avoidance and real-time trajectory adjustment at different resolution scales", es: "Enfoque de planificación multinivel que combina optimización de ruta global con evitación local de obstáculos y ajuste de trayectoria en tiempo real a diferentes escalas de resolución", de: "Mehrstufiger Planungsansatz der globale Routenoptimierung mit lokaler Hindernisumgehung und Echtzeitbahnkorrektur auf verschiedenen Auflösungsebenen kombiniert", nl: "Multi-niveau planning aanpak die globale route-optimalisatie combineert met lokale obstakel vermijding en realtime traject aanpassing op verschillende resolutieschalen" },
          { en: "Planning based on vehicle hierarchy status", es: "Planificación basada en estatus de jerarquía de vehículo", de: "Planung basierend auf Fahrzeughierarchiestatus", nl: "Planning gebaseerd op voertuighiërarchiestatus" },
          { en: "Hierarchical vehicle maintenance planning", es: "Planificación jerárquica de mantenimiento de vehículos", de: "Hierarchische Fahrzeugwartungsplanung", nl: "Hiërarchische voertuigonderhoudsplanning" },
          { en: "Planning routes for different vehicle classes only", es: "Planificar rutas solo para diferentes clases de vehículos", de: "Routen nur für verschiedene Fahrzeugklassen planen", nl: "Routes plannen alleen voor verschillende voertuigklassen" }
        ],
        correct: 0,
        explanation: {
          en: "Hierarchical planning breaks down complex navigation into manageable layers - strategic route planning at city level, tactical maneuver planning at intersection level, and operational control at vehicle level.",
          es: "La planificación jerárquica divide navegación compleja en capas manejables - planificación estratégica de rutas a nivel ciudad, planificación táctica de maniobras a nivel intersección, y control operacional a nivel vehículo.",
          de: "Hierarchische Planung unterteilt komplexe Navigation in handhabbare Schichten - strategische Routenplanung auf Stadtebene, taktische Manöverplanung auf Kreuzungsebene und operationelle Kontrolle auf Fahrzeugebene.",
          nl: "Hiërarchische planning verdeelt complexe navigatie in beheersbare lagen - strategische routeplanning op stadsniveau, tactische manoeuvreplanning op kruispuntniveau, en operationele controle op voertuigniveau."
        }
      },
      {
        question: {
          en: "What is 'dynamic traffic assignment' optimizing in smart transportation networks?",
          es: "¿Qué está optimizando la 'asignación dinámica de tráfico' en redes de transporte inteligente?",
          de: "Was optimiert 'dynamische Verkehrszuordnung' in intelligenten Transportnetzwerken?",
          nl: "Wat optimaliseert 'dynamische verkeerstoewijzing' in slimme transportnetwerken?"
        },
        options: [
          { en: "Real-time redistribution of traffic flows across network links to minimize congestion and travel times by predicting and responding to changing demand patterns", es: "Redistribución en tiempo real de flujos de tráfico a través de enlaces de red para minimizar congestión y tiempos de viaje prediciendo y respondiendo a patrones de demanda cambiantes", de: "Echtzeit-Umverteilung von Verkehrsströmen über Netzwerkverbindungen um Staus und Reisezeiten zu minimieren durch Vorhersage und Reaktion auf sich ändernde Nachfragemuster", nl: "Realtime herverdeling van verkeersstromen over netwerkverbindingen om opstoppingen en reistijden te minimaliseren door veranderende vraagpatronen te voorspellen en erop te reageren" },
          { en: "Assigning traffic violations to drivers", es: "Asignar infracciones de tráfico a conductores", de: "Verkehrsverstöße Fahrern zuordnen", nl: "Verkeersovertredingen toewijzen aan bestuurders" },
          { en: "Dynamic allocation of parking spaces", es: "Asignación dinámica de espacios de estacionamiento", de: "Dynamische Zuteilung von Parkplätzen", nl: "Dynamische toewijzing van parkeerplaatsen" },
          { en: "Assigning vehicles to specific lanes only", es: "Asignar vehículos solo a carriles específicos", de: "Fahrzeuge nur bestimmten Spuren zuordnen", nl: "Voertuigen alleen aan specifieke rijstroken toewijzen" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic traffic assignment uses mathematical optimization and machine learning to continuously recalculate optimal traffic distribution, adapting to incidents, events, and demand fluctuations in real-time.",
          es: "La asignación dinámica de tráfico usa optimización matemática y aprendizaje automático para recalcular continuamente distribución óptima de tráfico, adaptándose a incidentes, eventos y fluctuaciones de demanda en tiempo real.",
          de: "Dynamische Verkehrszuordnung nutzt mathematische Optimierung und maschinelles Lernen um kontinuierlich optimale Verkehrsverteilung neu zu berechnen, passt sich an Vorfälle, Ereignisse und Nachfrageschwankungen in Echtzeit an.",
          nl: "Dynamische verkeerstoewijzing gebruikt wiskundige optimalisatie en machine learning om continu optimale verkeersverdeling te herberekenen, past zich aan aan incidenten, evenementen en vraagfluctuaties in realtime."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();