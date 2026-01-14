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
          { en: "Bio-inspired algorithm that finds optimal paths by simulating how ants leave pheromone trails to discover efficient routes through complex networks", es: "Algoritmo bio-inspirado encuentra rutas óptimas simulando cómo hormigas dejan feromonas para descubrir rutas eficientes", de: "Bio-inspirierter Algorithmus findet optimale Pfade durch Simulation wie Ameisen Pheromonspuren für effiziente Routen hinterlassen", nl: "Bio-geïnspireerd algoritme vindt optimale paden door te simuleren hoe mieren feromonsporen achterlaten voor efficiënte routes" },
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
          { en: "Distributed decision-making where multiple vehicles negotiate and coordinate actions to optimize collective performance without central control", es: "Decisiones distribuidas donde vehículos negocian y coordinan acciones para optimizar rendimiento colectivo sin control central", de: "Verteilte Entscheidungen wo Fahrzeuge verhandeln und Aktionen koordinieren um kollektive Leistung ohne zentrale Kontrolle zu optimieren", nl: "Gedistribueerde besluitvorming waarbij voertuigen onderhandelen en acties coördineren om collectieve prestaties te optimaliseren zonder centrale controle" },
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
          { en: "Real-time AI processing directly in vehicles without relying on cloud connectivity, ensuring low latency and privacy protection", es: "Procesamiento IA en tiempo real directamente en vehículos sin depender de nube, asegurando baja latencia y protección privacidad", de: "Echtzeit-KI-Verarbeitung direkt in Fahrzeugen ohne Cloud-Abhängigkeit, gewährleistet niedrige Latenz und Datenschutz", nl: "Realtime AI-verwerking direct in voertuigen zonder cloudafhankelijkheid, zorgt voor lage latentie en privacybescherming" },
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
          { en: "Aggregating knowledge from thousands of vehicles and infrastructure components to make system-wide optimization decisions that no single entity could achieve alone", es: "Agregar conocimiento de miles de vehículos e infraestructura para decisiones de optimización de sistema que ninguna entidad individual lograría sola", de: "Wissen von Tausenden Fahrzeugen und Infrastruktur aggregieren um systemweite Optimierungsentscheidungen zu treffen die keine Entität allein erreichen könnte", nl: "Kennis aggregeren van duizenden voertuigen en infrastructuur om systeembrede optimalisatiebeslissingen te nemen die geen enkele entiteit alleen zou kunnen bereiken" },
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
          { en: "Automatically redistributing passengers and cargo across different transportation modes (trains, buses, bikes, cars) in real-time based on capacity and demand", es: "Redistribuir pasajeros y carga entre modos transporte (trenes, buses, bicis, autos) en tiempo real basado en capacidad y demanda", de: "Passagiere und Fracht über Transportmodi (Züge, Busse, Fahrräder, Autos) in Echtzeit umverteilen basierend auf Kapazität und Nachfrage", nl: "Passagiers en lading herverdelen over transportmodi (treinen, bussen, fietsen, auto's) in realtime gebaseerd op capaciteit en vraag" },
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
          { en: "Sharing sensor data and perceptual information between vehicles to create a collective understanding of the environment beyond individual vehicle capabilities", es: "Compartir datos sensores e información perceptual entre vehículos para crear comprensión colectiva del entorno más allá de capacidades individuales", de: "Sensordaten und Wahrnehmung zwischen Fahrzeugen teilen um kollektives Verständnis der Umgebung jenseits individueller Fähigkeiten zu schaffen", nl: "Sensordata en perceptuele informatie delen tussen voertuigen om collectief begrip van omgeving voorbij individuele mogelijkheden te creëren" },
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
          { en: "Real-time adjustment of traffic light timing based on current traffic flow, weather conditions, and pedestrian presence to minimize delays and maximize throughput", es: "Ajuste en tiempo real de semáforos basado en flujo tráfico, condiciones climáticas y presencia peatones para minimizar retrasos y maximizar rendimiento", de: "Echtzeitanpassung der Ampelzeiten basierend auf Verkehrsfluss, Wetter und Fußgänger um Verzögerungen zu minimieren und Durchsatz zu maximieren", nl: "Realtime aanpassing verkeerslicht timing gebaseerd op verkeersstroom, weersomstandigheden en voetgangers om vertragingen te minimaliseren en doorvoer te maximaliseren" },
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
          { en: "Understanding situational context beyond immediate sensor data, such as cultural driving norms, time of day effects, and event-specific traffic patterns", es: "Entender contexto situacional más allá de datos sensores, como normas culturales de conducción, efectos hora día y patrones tráfico de eventos", de: "Situationskontext verstehen jenseits Sensordaten, wie kulturelle Fahrnormen, Tageszeit-Effekte und ereignisspezifische Verkehrsmuster", nl: "Situationele context begrijpen voorbij sensordata, zoals culturele rijdnormen, tijd-van-dag effecten en evenement-specifieke verkeerspatronen" },
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
          { en: "Evolutionary computation that evolves optimal routing solutions by simulating natural selection processes across multiple generations of route combinations", es: "Computación evolutiva que evoluciona soluciones óptimas de enrutamiento simulando selección natural a través de generaciones de combinaciones de rutas", de: "Evolutionäre Berechnung die optimale Routing-Lösungen entwickelt durch Simulation natürlicher Selektion über Generationen von Routenkombinationen", nl: "Evolutionaire berekening die optimale routeringsoplossingen evolueert door natuurlijke selectie te simuleren over generaties van routecombinaties" },
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
          { en: "Multi-level planning approach that combines global route optimization with local obstacle avoidance and real-time trajectory adjustment at different resolution scales", es: "Enfoque multinivel que combina optimización ruta global con evitación obstáculos local y ajuste trayectoria en tiempo real a escalas de resolución diferentes", de: "Mehrstufiger Ansatz der globale Routenoptimierung mit lokaler Hindernisumgehung und Echtzeitbahnkorrektur auf Auflösungsebenen kombiniert", nl: "Multi-niveau aanpak die globale route-optimalisatie combineert met lokale obstakel vermijding en realtime traject aanpassing op resolutieschalen" },
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
          { en: "Real-time redistribution of traffic flows across network links to minimize congestion and travel times by predicting and responding to changing demand patterns", es: "Redistribución en tiempo real de flujos tráfico a través enlaces red para minimizar congestión y tiempos viaje prediciendo y respondiendo a patrones demanda cambiantes", de: "Echtzeit-Umverteilung von Verkehrsströmen über Netzwerkverbindungen um Staus und Reisezeiten zu minimieren durch Vorhersage und Reaktion auf Nachfragemuster", nl: "Realtime herverdeling verkeersstromen over netwerkverbindingen om opstoppingen en reistijden te minimaliseren door vraagpatronen te voorspellen en erop te reageren" },
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
      },
      {
        question: {
          en: "What is 'synthetic data generation' solving in autonomous vehicle AI training?",
          es: "¿Qué está resolviendo la 'generación de datos sintéticos' en entrenamiento IA de vehículos autónomos?",
          de: "Was löst 'synthetische Datengenerierung' im KI-Training autonomer Fahrzeuge?",
          nl: "Wat lost 'synthetische data generatie' op in AI-training van autonome voertuigen?"
        },
        options: [
          { en: "Creating realistic simulated driving scenarios to train AI on rare edge cases without requiring dangerous real-world data collection", es: "Crear escenarios conducción simulados realistas para entrenar IA en casos límite raros sin requerir recopilación peligrosa datos del mundo real", de: "Realistische simulierte Fahrszenarien erstellen um KI auf seltene Randfälle zu trainieren ohne gefährliche Datensammlung in der realen Welt", nl: "Realistische gesimuleerde rijscenario's creëren om AI te trainen op zeldzame randgevallen zonder gevaarlijke real-world data verzameling" },
          { en: "Synthesizing vehicle components artificially", es: "Sintetizar componentes de vehículo artificialmente", de: "Fahrzeugkomponenten künstlich synthetisieren", nl: "Voertuigcomponenten kunstmatig synthetiseren" },
          { en: "Generating synthetic fuel for vehicles", es: "Generar combustible sintético para vehículos", de: "Synthetischen Kraftstoff für Fahrzeuge generieren", nl: "Synthetische brandstof genereren voor voertuigen" },
          { en: "Creating artificial driving licenses", es: "Crear licencias de conducir artificiales", de: "Künstliche Führerscheine erstellen", nl: "Kunstmatige rijbewijzen creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Synthetic data generation allows AI developers to train systems on hazardous scenarios like extreme weather, rare accidents, or unusual pedestrian behavior safely and cost-effectively.",
          es: "La generación de datos sintéticos permite a desarrolladores IA entrenar sistemas en escenarios peligrosos como clima extremo, accidentes raros o comportamiento peatonal inusual de manera segura y rentable.",
          de: "Synthetische Datengenerierung ermöglicht KI-Entwicklern Systeme auf gefährliche Szenarien wie Extremwetter, seltene Unfälle oder ungewöhnliches Fußgängerverhalten sicher und kosteneffektiv zu trainieren.",
          nl: "Synthetische data generatie stelt AI-ontwikkelaars in staat systemen te trainen op gevaarlijke scenario's zoals extreem weer, zeldzame ongevallen of ongewoon voetgangersgedrag veilig en kosteneffectief."
        }
      },
      {
        question: {
          en: "What is 'vehicle-to-everything' (V2X) communication enabling in smart transportation?",
          es: "¿Qué está permitiendo la comunicación 'vehículo-a-todo' (V2X) en transporte inteligente?",
          de: "Was ermöglicht 'Vehicle-to-Everything' (V2X) Kommunikation im intelligenten Transport?",
          nl: "Wat maakt 'vehicle-to-everything' (V2X) communicatie mogelijk in slim transport?"
        },
        options: [
          { en: "Seamless communication between vehicles, infrastructure, pedestrians, and networks to share critical safety and traffic information in real-time", es: "Comunicación sin problemas entre vehículos, infraestructura, peatones y redes para compartir información crítica de seguridad y tráfico en tiempo real", de: "Nahtlose Kommunikation zwischen Fahrzeugen, Infrastruktur, Fußgängern und Netzwerken um kritische Sicherheits- und Verkehrsinformationen in Echtzeit zu teilen", nl: "Naadloze communicatie tussen voertuigen, infrastructuur, voetgangers en netwerken om kritieke veiligheids- en verkeersinformatie in realtime te delen" },
          { en: "Vehicles communicating with everything they encounter", es: "Vehículos comunicándose con todo lo que encuentran", de: "Fahrzeuge die mit allem kommunizieren was sie treffen", nl: "Voertuigen communiceren met alles wat ze tegenkomen" },
          { en: "V2X marketing communications", es: "Comunicaciones de marketing V2X", de: "V2X-Marketingkommunikation", nl: "V2X marketing communicatie" },
          { en: "Vehicle-to-eXtra accessories connection", es: "Conexión de vehículo a accesorios extra", de: "Fahrzeug-zu-Extra-Zubehör-Verbindung", nl: "Voertuig-naar-extra accessoires verbinding" }
        ],
        correct: 0,
        explanation: {
          en: "V2X creates a connected ecosystem where vehicles can receive warnings about hazards, traffic conditions, and pedestrian movements before they're visible, dramatically improving safety.",
          es: "V2X crea un ecosistema conectado donde vehículos pueden recibir advertencias sobre peligros, condiciones de tráfico y movimientos peatonales antes de que sean visibles, mejorando dramáticamente la seguridad.",
          de: "V2X schafft ein vernetztes Ökosystem wo Fahrzeuge Warnungen über Gefahren, Verkehrsbedingungen und Fußgängerbewegungen erhalten bevor sie sichtbar sind, verbessert dramatisch die Sicherheit.",
          nl: "V2X creëert een verbonden ecosysteem waar voertuigen waarschuwingen kunnen ontvangen over gevaren, verkeersomstandigheden en voetgangersbewegingen voordat ze zichtbaar zijn, verbetert dramatisch de veiligheid."
        }
      },
      {
        question: {
          en: "What is 'blockchain technology' potentially providing for autonomous vehicle transactions?",
          es: "¿Qué está proporcionando potencialmente la 'tecnología blockchain' para transacciones de vehículos autónomos?",
          de: "Was bietet 'Blockchain-Technologie' potenziell für autonome Fahrzeugtransaktionen?",
          nl: "Wat biedt 'blockchain technologie' potentieel voor autonome voertuigtransacties?"
        },
        options: [
          { en: "Secure, transparent, and tamper-proof record-keeping for vehicle payments, maintenance history, insurance claims, and data sharing agreements", es: "Registro seguro, transparente e inalterable para pagos vehículos, historial mantenimiento, reclamos seguros y acuerdos intercambio datos", de: "Sichere, transparente und fälschungssichere Aufzeichnungen für Fahrzeugzahlungen, Wartungshistorie, Versicherungsansprüche und Datenaustauschvereinbarungen", nl: "Veilige, transparante en fraudebestendige registratie voor voertuigbetalingen, onderhoudsgeschiedenis, verzekeringsclaims en data-uitwisselingsovereenkomsten" },
          { en: "Blocking vehicle chains for security", es: "Bloquear cadenas de vehículos para seguridad", de: "Fahrzeugketten zur Sicherheit blockieren", nl: "Voertuigketens blokkeren voor beveiliging" },
          { en: "Chain-based vehicle towing systems", es: "Sistemas de remolque de vehículos basados en cadena", de: "Kettenbasierte Fahrzeugabschleppsysteme", nl: "Ketting-gebaseerde voertuigsleepdiensten" },
          { en: "Blockchain for vehicle supply chains only", es: "Blockchain solo para cadenas de suministro de vehículos", de: "Blockchain nur für Fahrzeug-Lieferketten", nl: "Blockchain alleen voor voertuig supply chains" }
        ],
        correct: 0,
        explanation: {
          en: "Blockchain can create trusted records of autonomous vehicle activities, enabling automated toll payments, peer-to-peer vehicle sharing, and verifiable maintenance logs without central authorities.",
          es: "Blockchain puede crear registros confiables de actividades de vehículos autónomos, permitiendo pagos automatizados de peajes, compartir vehículos entre pares y registros de mantenimiento verificables sin autoridades centrales.",
          de: "Blockchain kann vertrauenswürdige Aufzeichnungen autonomer Fahrzeugaktivitäten erstellen, ermöglicht automatisierte Mautzahlungen, Peer-to-Peer-Fahrzeugsharing und verifizierbare Wartungsprotokolle ohne zentrale Behörden.",
          nl: "Blockchain kan vertrouwde records van autonome voertuigactiviteiten creëren, maakt geautomatiseerde tolbetalingen mogelijk, peer-to-peer voertuigdeling en verifieerbare onderhoudslogs zonder centrale autoriteiten."
        }
      },
      {
        question: {
          en: "What is 'digital twin technology' enabling for autonomous vehicle development?",
          es: "¿Qué está permitiendo la 'tecnología de gemelo digital' para desarrollo de vehículos autónomos?",
          de: "Was ermöglicht 'Digital Twin Technologie' für autonome Fahrzeugentwicklung?",
          nl: "Wat maakt 'digital twin technologie' mogelijk voor ontwikkeling van autonome voertuigen?"
        },
        options: [
          { en: "Creating virtual replicas of physical vehicles that enable real-time simulation, testing, and optimization of autonomous systems before deployment", es: "Crear réplicas virtuales de vehículos físicos que permiten simulación, prueba y optimización en tiempo real de sistemas autónomos antes del despliegue", de: "Virtuelle Nachbildungen physischer Fahrzeuge erstellen die Echtzeitsimulation, Tests und Optimierung autonomer Systeme vor Einsatz ermöglichen", nl: "Virtuele replica's van fysieke voertuigen creëren die realtime simulatie, testen en optimalisatie van autonome systemen voor implementatie mogelijk maken" },
          { en: "Manufacturing twin copies of each vehicle", es: "Fabricar copias gemelas de cada vehículo", de: "Zwillingskopien jedes Fahrzeugs herstellen", nl: "Tweelingkopieën van elk voertuig produceren" },
          { en: "Twin engine configurations in vehicles", es: "Configuraciones de motor gemelo en vehículos", de: "Zwillingsmotorkonfigurationen in Fahrzeugen", nl: "Tweeling motorconfiguraties in voertuigen" },
          { en: "Digital twin passenger seating", es: "Asientos de pasajeros gemelos digitales", de: "Digitale Zwillings-Passagiersitze", nl: "Digitale tweeling passagierszitplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Digital twins allow engineers to test millions of scenarios virtually, predict maintenance needs, and optimize performance without risking actual vehicles or requiring expensive physical testing.",
          es: "Los gemelos digitales permiten a ingenieros probar millones de escenarios virtualmente, predecir necesidades de mantenimiento y optimizar rendimiento sin arriesgar vehículos reales o requerir pruebas físicas costosas.",
          de: "Digital Twins ermöglichen Ingenieuren Millionen von Szenarien virtuell zu testen, Wartungsbedarf vorherzusagen und Leistung zu optimieren ohne echte Fahrzeuge zu riskieren oder teure physische Tests zu erfordern.",
          nl: "Digital twins stellen ingenieurs in staat miljoenen scenario's virtueel te testen, onderhoudsbehoe te voorspellen en prestaties te optimaliseren zonder echte voertuigen te riskeren of dure fysieke tests te vereisen."
        }
      },
      {
        question: {
          en: "What is 'transfer learning' accelerating in autonomous vehicle AI development?",
          es: "¿Qué está acelerando el 'aprendizaje por transferencia' en desarrollo de IA para vehículos autónomos?",
          de: "Was beschleunigt 'Transfer Learning' in der KI-Entwicklung autonomer Fahrzeuge?",
          nl: "Wat versnelt 'transfer learning' in AI-ontwikkeling van autonome voertuigen?"
        },
        options: [
          { en: "Reusing knowledge learned from one driving environment or task to quickly adapt to new environments with minimal additional training", es: "Reutilizar conocimiento aprendido de un entorno o tarea de conducción para adaptarse rápidamente a nuevos entornos con entrenamiento adicional mínimo", de: "Wissen aus einer Fahrumgebung oder Aufgabe wiederverwenden um sich schnell an neue Umgebungen mit minimalem zusätzlichem Training anzupassen", nl: "Kennis hergebruiken die is geleerd van een rijomgeving of taak om snel aan te passen aan nieuwe omgevingen met minimale extra training" },
          { en: "Transferring learning between different drivers", es: "Transferir aprendizaje entre diferentes conductores", de: "Lernen zwischen verschiedenen Fahrern übertragen", nl: "Leren overdragen tussen verschillende bestuurders" },
          { en: "Learning to transfer passengers efficiently", es: "Aprender a transferir pasajeros eficientemente", de: "Lernen Passagiere effizient zu übertragen", nl: "Leren om passagiers efficiënt over te dragen" },
          { en: "Transferring vehicle ownership learning", es: "Transferir aprendizaje de propiedad de vehículo", de: "Fahrzeugbesitz-Lernen übertragen", nl: "Voertuigeigendom leren overdragen" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning enables autonomous vehicles trained in one city to rapidly adapt to a new city's driving culture, road layouts, and traffic patterns without starting from scratch.",
          es: "El aprendizaje por transferencia permite a vehículos autónomos entrenados en una ciudad adaptarse rápidamente a cultura de conducción, diseños de carreteras y patrones de tráfico de una ciudad nueva sin empezar desde cero.",
          de: "Transfer Learning ermöglicht in einer Stadt trainierten autonomen Fahrzeugen sich schnell an Fahrkultur, Straßenlayouts und Verkehrsmuster einer neuen Stadt anzupassen ohne von vorn zu beginnen.",
          nl: "Transfer learning stelt autonome voertuigen die in één stad zijn getraind in staat zich snel aan te passen aan rijcultuur, wegindelingen en verkeerspatronen van een nieuwe stad zonder opnieuw te beginnen."
        }
      },
      {
        question: {
          en: "What is 'attention mechanism' improving in autonomous vehicle perception systems?",
          es: "¿Qué está mejorando el 'mecanismo de atención' en sistemas de percepción de vehículos autónomos?",
          de: "Was verbessert 'Aufmerksamkeitsmechanismus' in Wahrnehmungssystemen autonomer Fahrzeuge?",
          nl: "Wat verbetert 'attention mechanisme' in perceptiesystemen van autonome voertuigen?"
        },
        options: [
          { en: "Focusing computational resources on the most relevant parts of sensor data, like pedestrians near the vehicle path while ignoring distant background objects", es: "Enfocar recursos computacionales en partes más relevantes de datos sensores, como peatones cerca de camino vehículo ignorando objetos de fondo distantes", de: "Rechenressourcen auf relevanteste Teile der Sensordaten fokussieren, wie Fußgänger nahe Fahrzeugweg während entfernte Hintergrundobjekte ignoriert werden", nl: "Computationele middelen focussen op meest relevante delen van sensordata, zoals voetgangers nabij voertuigpad terwijl verre achtergrond objecten genegeerd worden" },
          { en: "Driver attention monitoring systems", es: "Sistemas de monitoreo de atención del conductor", de: "Fahreraufmerksamkeits-Überwachungssysteme", nl: "Bestuurder aandacht monitoring systemen" },
          { en: "Attention-grabbing vehicle advertisements", es: "Anuncios de vehículos que llaman la atención", de: "Aufmerksamkeitserregende Fahrzeugwerbung", nl: "Aandachttrekkende voertuigreclame" },
          { en: "Mechanism for vehicle maintenance attention", es: "Mecanismo para atención de mantenimiento de vehículo", de: "Mechanismus für Fahrzeugwartungsaufmerksamkeit", nl: "Mechanisme voor voertuigonderhoudsaandacht" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms, borrowed from modern AI architectures, allow perception systems to dynamically prioritize important visual features, improving detection accuracy and computational efficiency.",
          es: "Los mecanismos de atención, tomados de arquitecturas IA modernas, permiten a sistemas de percepción priorizar dinámicamente características visuales importantes, mejorando precisión de detección y eficiencia computacional.",
          de: "Aufmerksamkeitsmechanismen, aus modernen KI-Architekturen entlehnt, ermöglichen Wahrnehmungssystemen wichtige visuelle Merkmale dynamisch zu priorisieren, verbessert Erkennungsgenauigkeit und Recheneffizienz.",
          nl: "Attention mechanismen, geleend van moderne AI-architecturen, stellen perceptiesystemen in staat dynamisch belangrijke visuele kenmerken te prioriteren, verbetert detectieaccuraatheid en computationele efficiëntie."
        }
      },
      {
        question: {
          en: "What is 'zero-shot learning' enabling in autonomous vehicle perception?",
          es: "¿Qué está permitiendo el 'aprendizaje de cero disparos' en percepción de vehículos autónomos?",
          de: "Was ermöglicht 'Zero-Shot Learning' in der Wahrnehmung autonomer Fahrzeuge?",
          nl: "Wat maakt 'zero-shot learning' mogelijk in perceptie van autonome voertuigen?"
        },
        options: [
          { en: "Recognizing and responding to objects or situations never encountered during training by leveraging semantic knowledge and relationships", es: "Reconocer y responder a objetos o situaciones nunca encontradas durante entrenamiento aprovechando conocimiento semántico y relaciones", de: "Objekte oder Situationen erkennen und darauf reagieren die nie während Training angetroffen wurden durch Nutzung semantischen Wissens und Beziehungen", nl: "Objecten of situaties herkennen en erop reageren die nooit tijdens training zijn tegengekomen door semantische kennis en relaties te benutten" },
          { en: "Learning with zero training examples", es: "Aprender con cero ejemplos de entrenamiento", de: "Mit null Trainingsbeispielen lernen", nl: "Leren met nul trainingsvoorbeelden" },
          { en: "Zero-cost vehicle learning programs", es: "Programas de aprendizaje de vehículo de costo cero", de: "Null-Kosten-Fahrzeug-Lernprogramme", nl: "Nul-kosten voertuig leerprogramma's" },
          { en: "Shooting zero times during testing", es: "Disparar cero veces durante prueba", de: "Null mal während Tests schießen", nl: "Nul keer schieten tijdens testen" }
        ],
        correct: 0,
        explanation: {
          en: "Zero-shot learning allows autonomous vehicles to handle novel scenarios like unusual vehicle types or rare road conditions by understanding conceptual relationships rather than requiring explicit training examples.",
          es: "El aprendizaje de cero disparos permite a vehículos autónomos manejar escenarios novedosos como tipos inusuales de vehículos o condiciones raras de carretera entendiendo relaciones conceptuales en lugar de requerir ejemplos explícitos de entrenamiento.",
          de: "Zero-Shot Learning ermöglicht autonomen Fahrzeugen neuartige Szenarien wie ungewöhnliche Fahrzeugtypen oder seltene Straßenbedingungen zu bewältigen durch Verständnis konzeptioneller Beziehungen statt explizite Trainingsbeispiele zu erfordern.",
          nl: "Zero-shot learning stelt autonome voertuigen in staat nieuwe scenario's aan te pakken zoals ongebruikelijke voertuigtypen of zeldzame wegomstandigheden door conceptuele relaties te begrijpen in plaats van expliciete trainingsvoorbeelden te vereisen."
        }
      },
      {
        question: {
          en: "What is 'neural architecture search' (NAS) optimizing for autonomous vehicle AI?",
          es: "¿Qué está optimizando la 'búsqueda de arquitectura neuronal' (NAS) para IA de vehículos autónomos?",
          de: "Was optimiert 'Neural Architecture Search' (NAS) für autonome Fahrzeug-KI?",
          nl: "Wat optimaliseert 'neural architecture search' (NAS) voor autonome voertuig AI?"
        },
        options: [
          { en: "Automatically discovering optimal neural network designs for specific autonomous driving tasks, replacing manual architecture engineering", es: "Descubrir automáticamente diseños óptimos de red neuronal para tareas específicas de conducción autónoma, reemplazando ingeniería manual de arquitectura", de: "Automatisches Entdecken optimaler neuronaler Netzwerk-Designs für spezifische autonome Fahraufgaben, ersetzt manuelle Architektur-Entwicklung", nl: "Automatisch optimale neurale netwerkontwerpen ontdekken voor specifieke autonome rijtaken, vervangt handmatige architectuur engineering" },
          { en: "Searching for neural surgeons for vehicle repair", es: "Buscar cirujanos neuronales para reparación de vehículos", de: "Nach neuralen Chirurgen für Fahrzeugreparatur suchen", nl: "Zoeken naar neurale chirurgen voor voertuig reparatie" },
          { en: "Architecture search for vehicle design", es: "Búsqueda de arquitectura para diseño de vehículo", de: "Architektursuche für Fahrzeugdesign", nl: "Architectuur zoektocht voor voertuigontwerp" },
          { en: "Neural network building architecture", es: "Arquitectura de edificio de red neuronal", de: "Neuronales Netzwerk-Gebäudearchitektur", nl: "Neurale netwerk gebouw architectuur" }
        ],
        correct: 0,
        explanation: {
          en: "NAS uses AI to design better AI systems, automatically finding neural network architectures that are more accurate, faster, or more efficient than human-designed networks for autonomous driving tasks.",
          es: "NAS usa IA para diseñar mejores sistemas IA, encontrando automáticamente arquitecturas de redes neuronales más precisas, rápidas o eficientes que redes diseñadas por humanos para tareas de conducción autónoma.",
          de: "NAS verwendet KI um bessere KI-Systeme zu entwerfen, findet automatisch neuronale Netzwerk-Architekturen die genauer, schneller oder effizienter sind als menschendesignte Netzwerke für autonome Fahraufgaben.",
          nl: "NAS gebruikt AI om betere AI-systemen te ontwerpen, vindt automatisch neurale netwerkarchitecturen die nauwkeuriger, sneller of efficiënter zijn dan door mensen ontworpen netwerken voor autonome rijtaken."
        }
      },
      {
        question: {
          en: "What is 'multi-task learning' achieving in autonomous vehicle AI systems?",
          es: "¿Qué está logrando el 'aprendizaje multi-tarea' en sistemas IA de vehículos autónomos?",
          de: "Was erreicht 'Multi-Task Learning' in KI-Systemen autonomer Fahrzeuge?",
          nl: "Wat bereikt 'multi-task learning' in AI-systemen van autonome voertuigen?"
        },
        options: [
          { en: "Training a single neural network to simultaneously perform multiple related tasks like object detection, semantic segmentation, and depth estimation by sharing representations", es: "Entrenar una red neuronal única para realizar simultáneamente múltiples tareas relacionadas como detección objetos, segmentación semántica y estimación profundidad compartiendo representaciones", de: "Ein einzelnes neuronales Netzwerk trainieren um gleichzeitig mehrere verwandte Aufgaben wie Objekterkennung, semantische Segmentierung und Tiefenschätzung durch geteilte Repräsentationen durchzuführen", nl: "Een enkel neuraal netwerk trainen om tegelijkertijd meerdere gerelateerde taken uit te voeren zoals objectdetectie, semantische segmentatie en diepte schatting door representaties te delen" },
          { en: "Learning multiple vehicle maintenance tasks", es: "Aprender múltiples tareas de mantenimiento de vehículo", de: "Mehrere Fahrzeugwartungsaufgaben lernen", nl: "Meerdere voertuigonderhoudstaken leren" },
          { en: "Multi-tasking drivers learning systems", es: "Sistemas de aprendizaje de conductores multi-tarea", de: "Multi-Tasking-Fahrer-Lernsysteme", nl: "Multi-tasking bestuurders leersystemen" },
          { en: "Task management learning for fleets", es: "Aprendizaje de gestión de tareas para flotas", de: "Aufgabenmanagement-Lernen für Flotten", nl: "Taakbeheer leren voor vloten" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-task learning enables more efficient AI systems that can leverage shared knowledge across related tasks, improving performance while reducing computational requirements and memory usage.",
          es: "El aprendizaje multi-tarea permite sistemas IA más eficientes que pueden aprovechar conocimiento compartido a través de tareas relacionadas, mejorando rendimiento mientras reduce requisitos computacionales y uso de memoria.",
          de: "Multi-Task Learning ermöglicht effizientere KI-Systeme die geteiltes Wissen über verwandte Aufgaben nutzen können, verbessert Leistung während Rechenanforderungen und Speichernutzung reduziert werden.",
          nl: "Multi-task learning maakt efficiëntere AI-systemen mogelijk die gedeelde kennis over gerelateerde taken kunnen benutten, verbetert prestaties terwijl computationele vereisten en geheugengebruik worden verminderd."
        }
      },
      {
        question: {
          en: "What is 'active learning' optimizing in autonomous vehicle data collection?",
          es: "¿Qué está optimizando el 'aprendizaje activo' en recopilación de datos de vehículos autónomos?",
          de: "Was optimiert 'Active Learning' in der Datensammlung autonomer Fahrzeuge?",
          nl: "Wat optimaliseert 'active learning' in data verzameling van autonome voertuigen?"
        },
        options: [
          { en: "Intelligently selecting the most informative driving scenarios for human annotation, maximizing learning efficiency while minimizing labeling costs", es: "Seleccionar inteligentemente escenarios de conducción más informativos para anotación humana, maximizando eficiencia aprendizaje mientras minimiza costos etiquetado", de: "Intelligent die informativsten Fahrszenarien für menschliche Annotation auswählen, maximiert Lerneffizienz während Etikettierungskosten minimiert werden", nl: "Intelligent de meest informatieve rijscenario's selecteren voor menselijke annotatie, maximaliseert leerefficiëntie terwijl labelkosten worden geminimaliseerd" },
          { en: "Active driver learning programs", es: "Programas activos de aprendizaje de conductor", de: "Aktive Fahrer-Lernprogramme", nl: "Actieve bestuurder leerprogramma's" },
          { en: "Learning active vehicle suspensions", es: "Aprender suspensiones activas de vehículo", de: "Aktive Fahrzeugaufhängungen lernen", nl: "Actieve voertuigophanging leren" },
          { en: "Active participation in vehicle learning", es: "Participación activa en aprendizaje de vehículo", de: "Aktive Teilnahme am Fahrzeuglernen", nl: "Actieve deelname aan voertuig leren" }
        ],
        correct: 0,
        explanation: {
          en: "Active learning identifies the most valuable unlabeled data for human experts to annotate, dramatically reducing the amount of labeled data needed to achieve high performance.",
          es: "El aprendizaje activo identifica los datos no etiquetados más valiosos para que expertos humanos anoten, reduciendo dramáticamente la cantidad de datos etiquetados necesarios para lograr alto rendimiento.",
          de: "Active Learning identifiziert die wertvollsten unbeschrifteten Daten für menschliche Experten zum Annotieren, reduziert dramatisch die Menge beschrifteter Daten die für hohe Leistung benötigt werden.",
          nl: "Active learning identificeert de meest waardevolle ongelabelde data voor menselijke experts om te annoteren, vermindert dramatisch de hoeveelheid gelabelde data die nodig is om hoge prestaties te bereiken."
        }
      },
      {
        question: {
          en: "What is 'causal inference' providing for autonomous vehicle AI decision-making?",
          es: "¿Qué está proporcionando la 'inferencia causal' para toma de decisiones IA de vehículos autónomos?",
          de: "Was bietet 'kausale Inferenz' für KI-Entscheidungsfindung autonomer Fahrzeuge?",
          nl: "Wat biedt 'causale inferentie' voor AI-besluitvorming van autonome voertuigen?"
        },
        options: [
          { en: "Understanding cause-and-effect relationships in driving scenarios, enabling better prediction of how actions will influence outcomes beyond mere correlation", es: "Entender relaciones causa-efecto en escenarios conducción, permitiendo mejor predicción de cómo acciones influirán resultados más allá de mera correlación", de: "Ursache-Wirkungs-Beziehungen in Fahrszenarien verstehen, ermöglicht bessere Vorhersage wie Aktionen Ergebnisse beeinflussen jenseits bloßer Korrelation", nl: "Oorzaak-gevolg relaties in rijscenario's begrijpen, maakt betere voorspelling mogelijk van hoe acties uitkomsten zullen beïnvloeden voorbij louter correlatie" },
          { en: "Inferring causes of vehicle accidents only", es: "Inferir solo causas de accidentes de vehículo", de: "Nur Ursachen von Fahrzeugunfällen schlussfolgern", nl: "Alleen oorzaken van voertuigongevallen afleiden" },
          { en: "Causal analysis of vehicle sales", es: "Análisis causal de ventas de vehículos", de: "Kausale Analyse von Fahrzeugverkäufen", nl: "Causale analyse van voertuigverkopen" },
          { en: "Inferring causal vehicle maintenance", es: "Inferir mantenimiento causal de vehículo", de: "Kausale Fahrzeugwartung schlussfolgern", nl: "Causaal voertuigonderhoud afleiden" }
        ],
        correct: 0,
        explanation: {
          en: "Causal inference allows autonomous vehicles to understand not just what happened, but why it happened, enabling better counterfactual reasoning and more robust decision-making under novel conditions.",
          es: "La inferencia causal permite a vehículos autónomos entender no solo qué pasó, sino por qué pasó, permitiendo mejor razonamiento contrafactual y toma de decisiones más robusta bajo condiciones novedosas.",
          de: "Kausale Inferenz ermöglicht autonomen Fahrzeugen zu verstehen nicht nur was passierte, sondern warum es passierte, ermöglicht besseres kontrafaktisches Denken und robustere Entscheidungsfindung unter neuartigen Bedingungen.",
          nl: "Causale inferentie stelt autonome voertuigen in staat te begrijpen niet alleen wat er gebeurde, maar waarom het gebeurde, maakt betere contrafeitelijke redenering mogelijk en robuustere besluitvorming onder nieuwe omstandigheden."
        }
      },
      {
        question: {
          en: "What is 'meta-learning' enabling for autonomous vehicle adaptation?",
          es: "¿Qué está permitiendo el 'meta-aprendizaje' para adaptación de vehículos autónomos?",
          de: "Was ermöglicht 'Meta-Learning' für autonome Fahrzeuganpassung?",
          nl: "Wat maakt 'meta-learning' mogelijk voor aanpassing van autonome voertuigen?"
        },
        options: [
          { en: "Learning how to learn, allowing AI systems to quickly adapt to new driving environments or tasks with minimal additional training data", es: "Aprender cómo aprender, permitiendo a sistemas IA adaptarse rápidamente a nuevos entornos o tareas de conducción con datos de entrenamiento adicionales mínimos", de: "Lernen wie man lernt, ermöglicht KI-Systemen sich schnell an neue Fahrumgebungen oder Aufgaben mit minimalen zusätzlichen Trainingsdaten anzupassen", nl: "Leren hoe te leren, stelt AI-systemen in staat zich snel aan te passen aan nieuwe rijomgevingen of taken met minimale extra trainingsdata" },
          { en: "Meta-analysis of vehicle performance", es: "Meta-análisis de rendimiento de vehículo", de: "Meta-Analyse der Fahrzeugleistung", nl: "Meta-analyse van voertuigprestaties" },
          { en: "Learning metadata about vehicles", es: "Aprender metadatos sobre vehículos", de: "Metadaten über Fahrzeuge lernen", nl: "Metadata over voertuigen leren" },
          { en: "Meta-level vehicle management", es: "Gestión de vehículo a nivel meta", de: "Meta-Ebene Fahrzeugmanagement", nl: "Meta-niveau voertuigbeheer" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-learning creates AI systems that can rapidly acquire new skills with few examples, crucial for autonomous vehicles that need to adapt to diverse and changing environments efficiently.",
          es: "El meta-aprendizaje crea sistemas IA que pueden adquirir rápidamente nuevas habilidades con pocos ejemplos, crucial para vehículos autónomos que necesitan adaptarse a entornos diversos y cambiantes eficientemente.",
          de: "Meta-Learning schafft KI-Systeme die schnell neue Fähigkeiten mit wenigen Beispielen erwerben können, entscheidend für autonome Fahrzeuge die sich effizient an diverse und sich ändernde Umgebungen anpassen müssen.",
          nl: "Meta-learning creëert AI-systemen die snel nieuwe vaardigheden kunnen verwerven met weinig voorbeelden, cruciaal voor autonome voertuigen die zich efficiënt moeten aanpassen aan diverse en veranderende omgevingen."
        }
      },
      {
        question: {
          en: "What is 'continual learning' (lifelong learning) solving in deployed autonomous vehicles?",
          es: "¿Qué está resolviendo el 'aprendizaje continuo' (aprendizaje de por vida) en vehículos autónomos desplegados?",
          de: "Was löst 'kontinuierliches Lernen' (lebenslanges Lernen) in eingesetzten autonomen Fahrzeugen?",
          nl: "Wat lost 'continue learning' (levenslang leren) op in ingezette autonome voertuigen?"
        },
        options: [
          { en: "Accumulating knowledge over time from new experiences while preserving previously learned capabilities and avoiding catastrophic forgetting", es: "Acumular conocimiento con tiempo desde nuevas experiencias preservando capacidades previamente aprendidas y evitando olvido catastrófico", de: "Wissen über Zeit aus neuen Erfahrungen akkumulieren während zuvor gelernte Fähigkeiten bewahrt und katastrophales Vergessen vermieden wird", nl: "Kennis accumuleren over tijd van nieuwe ervaringen terwijl eerder geleerde capaciteiten behouden blijven en catastrofaal vergeten vermeden wordt" },
          { en: "Continuous vehicle maintenance learning", es: "Aprendizaje continuo de mantenimiento de vehículo", de: "Kontinuierliches Fahrzeugwartungslernen", nl: "Continue voertuigonderhoud leren" },
          { en: "Learning continuously without stopping", es: "Aprender continuamente sin parar", de: "Kontinuierlich ohne Halt lernen", nl: "Continu leren zonder stoppen" },
          { en: "Continual driver education programs", es: "Programas continuos de educación del conductor", de: "Kontinuierliche Fahrer-Bildungsprogramme", nl: "Continue bestuurder educatieprogramma's" }
        ],
        correct: 0,
        explanation: {
          en: "Continual learning allows autonomous vehicles to improve performance throughout their operational lifetime by learning from new data while maintaining competence on previously encountered scenarios.",
          es: "El aprendizaje continuo permite a vehículos autónomos mejorar rendimiento durante toda su vida operativa aprendiendo de nuevos datos mientras mantiene competencia en escenarios previamente encontrados.",
          de: "Kontinuierliches Lernen ermöglicht autonomen Fahrzeugen die Leistung während ihrer Betriebslebensdauer zu verbessern durch Lernen aus neuen Daten während Kompetenz bei zuvor angetroffenen Szenarien erhalten bleibt.",
          nl: "Continue learning stelt autonome voertuigen in staat prestaties te verbeteren gedurende hun operationele levensduur door te leren van nieuwe data terwijl competentie op eerder tegengekomen scenario's behouden blijft."
        }
      },
      {
        question: {
          en: "What is 'ensemble learning' improving in autonomous vehicle AI robustness?",
          es: "¿Qué está mejorando el 'aprendizaje de conjunto' en robustez de IA de vehículos autónomos?",
          de: "Was verbessert 'Ensemble Learning' in der Robustheit autonomer Fahrzeug-KI?",
          nl: "Wat verbetert 'ensemble learning' in robuustheid van autonome voertuig AI?"
        },
        options: [
          { en: "Combining predictions from multiple diverse AI models to make more reliable decisions that are less prone to individual model errors or biases", es: "Combinar predicciones de múltiples modelos IA diversos para tomar decisiones más confiables menos propensas a errores o sesgos de modelos individuales", de: "Vorhersagen mehrerer diverser KI-Modelle kombinieren um zuverlässigere Entscheidungen zu treffen die weniger anfällig für individuelle Modellfehler oder Verzerrungen sind", nl: "Voorspellingen combineren van meerdere diverse AI-modellen om betrouwbaardere beslissingen te nemen die minder vatbaar zijn voor individuele modelfouten of vooroordelen" },
          { en: "Ensemble music learning in vehicles", es: "Aprendizaje de música de conjunto en vehículos", de: "Ensemble-Musiklernen in Fahrzeugen", nl: "Ensemble muziek leren in voertuigen" },
          { en: "Learning vehicle ensemble configurations", es: "Aprender configuraciones de conjunto de vehículo", de: "Fahrzeug-Ensemble-Konfigurationen lernen", nl: "Voertuig ensemble configuraties leren" },
          { en: "Ensemble of vehicle features", es: "Conjunto de características de vehículo", de: "Ensemble von Fahrzeugfunktionen", nl: "Ensemble van voertuigfuncties" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble methods increase safety by aggregating multiple AI perspectives, ensuring that if one model fails or makes an error, other models can compensate, creating more robust decision-making.",
          es: "Los métodos de conjunto aumentan seguridad agregando múltiples perspectivas IA, asegurando que si un modelo falla o comete un error, otros modelos pueden compensar, creando toma de decisiones más robusta.",
          de: "Ensemble-Methoden erhöhen Sicherheit durch Aggregation mehrerer KI-Perspektiven, gewährleisten dass wenn ein Modell versagt oder einen Fehler macht, andere Modelle kompensieren können, schafft robustere Entscheidungsfindung.",
          nl: "Ensemble methoden verhogen veiligheid door meerdere AI-perspectieven te aggregeren, zorgt ervoor dat als een model faalt of een fout maakt, andere modellen kunnen compenseren, creëert robuustere besluitvorming."
        }
      },
      {
        question: {
          en: "What is 'uncertainty quantification' providing for autonomous vehicle safety?",
          es: "¿Qué está proporcionando la 'cuantificación de incertidumbre' para seguridad de vehículos autónomos?",
          de: "Was bietet 'Unsicherheitsquantifizierung' für die Sicherheit autonomer Fahrzeuge?",
          nl: "Wat biedt 'onzekerheids kwantificatie' voor veiligheid van autonome voertuigen?"
        },
        options: [
          { en: "Estimating confidence levels in AI predictions, allowing vehicles to recognize when they're uncertain and take appropriate conservative actions or request help", es: "Estimar niveles de confianza en predicciones IA, permitiendo a vehículos reconocer cuando están inciertos y tomar acciones conservadoras apropiadas o solicitar ayuda", de: "Konfidenzniveaus in KI-Vorhersagen schätzen, ermöglicht Fahrzeugen zu erkennen wenn sie unsicher sind und angemessene konservative Aktionen zu ergreifen oder Hilfe anzufordern", nl: "Vertrouwensniveaus schatten in AI-voorspellingen, stelt voertuigen in staat te herkennen wanneer ze onzeker zijn en passende conservatieve acties te ondernemen of hulp te vragen" },
          { en: "Quantifying uncertain vehicle performance", es: "Cuantificar rendimiento incierto de vehículo", de: "Unsichere Fahrzeugleistung quantifizieren", nl: "Onzekere voertuigprestaties kwantificeren" },
          { en: "Uncertainty in vehicle pricing", es: "Incertidumbre en precios de vehículo", de: "Unsicherheit bei Fahrzeugpreisen", nl: "Onzekerheid in voertuigprijzen" },
          { en: "Quantifying vehicle maintenance uncertainty", es: "Cuantificar incertidumbre de mantenimiento de vehículo", de: "Fahrzeugwartungsunsicherheit quantifizieren", nl: "Voertuigonderhoud onzekerheid kwantificeren" }
        ],
        correct: 0,
        explanation: {
          en: "Uncertainty quantification enables autonomous vehicles to 'know what they don't know,' crucial for safety-critical decisions where overconfident incorrect predictions could be dangerous.",
          es: "La cuantificación de incertidumbre permite a vehículos autónomos 'saber qué no saben,' crucial para decisiones críticas de seguridad donde predicciones incorrectas demasiado confiadas podrían ser peligrosas.",
          de: "Unsicherheitsquantifizierung ermöglicht autonomen Fahrzeugen 'zu wissen was sie nicht wissen,' entscheidend für sicherheitskritische Entscheidungen wo überkonfidente falsche Vorhersagen gefährlich sein könnten.",
          nl: "Onzekerheids kwantificatie stelt autonome voertuigen in staat 'te weten wat ze niet weten,' cruciaal voor veiligheidskritische beslissingen waar overmoedig onjuiste voorspellingen gevaarlijk zouden kunnen zijn."
        }
      },
      {
        question: {
          en: "What is 'domain randomization' achieving in autonomous vehicle simulation training?",
          es: "¿Qué está logrando la 'aleatorización de dominio' en entrenamiento de simulación de vehículos autónomos?",
          de: "Was erreicht 'Domain-Randomisierung' im Simulationstraining autonomer Fahrzeuge?",
          nl: "Wat bereikt 'domain randomization' in simulatietraining van autonome voertuigen?"
        },
        options: [
          { en: "Training on highly varied simulated environments with randomized lighting, weather, textures, and object properties to improve real-world generalization", es: "Entrenar en entornos simulados altamente variados con iluminación, clima, texturas y propiedades objetos aleatorizados para mejorar generalización del mundo real", de: "Training auf hochgradig variierten simulierten Umgebungen mit randomisierter Beleuchtung, Wetter, Texturen und Objekteigenschaften um Generalisierung in der realen Welt zu verbessern", nl: "Trainen op zeer gevarieerde gesimuleerde omgevingen met gerandomiseerde verlichting, weer, texturen en objecteigenschappen om real-world generalisatie te verbeteren" },
          { en: "Randomizing vehicle domains for marketing", es: "Aleatorizar dominios de vehículos para marketing", de: "Fahrzeugdomänen für Marketing randomisieren", nl: "Voertuigdomeinen randomiseren voor marketing" },
          { en: "Random domain name selection", es: "Selección aleatoria de nombre de dominio", de: "Zufällige Domain-Namen-Auswahl", nl: "Willekeurige domeinnaam selectie" },
          { en: "Randomizing training domains only", es: "Aleatorizar solo dominios de entrenamiento", de: "Nur Trainingsdomänen randomisieren", nl: "Alleen trainingsdomeinen randomiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Domain randomization trains AI on such diverse simulated conditions that the real world becomes just another variation it can handle, bridging the sim-to-real transfer gap.",
          es: "La aleatorización de dominio entrena IA en condiciones simuladas tan diversas que el mundo real se convierte en solo otra variación que puede manejar, superando la brecha de transferencia sim-a-real.",
          de: "Domain-Randomisierung trainiert KI auf so diversen simulierten Bedingungen dass die reale Welt nur eine weitere Variation wird die sie handhaben kann, überbrückt die Sim-zu-Real-Transfer-Lücke.",
          nl: "Domain randomization traint AI op zulke diverse gesimuleerde omstandigheden dat de echte wereld slechts een andere variatie wordt die het aankan, overbrugt de sim-to-real transfer kloof."
        }
      },
      {
        question: {
          en: "What is 'knowledge distillation' enabling for autonomous vehicle edge deployment?",
          es: "¿Qué está permitiendo la 'destilación de conocimiento' para despliegue de borde de vehículos autónomos?",
          de: "Was ermöglicht 'Knowledge Distillation' für Edge-Deployment autonomer Fahrzeuge?",
          nl: "Wat maakt 'knowledge distillation' mogelijk voor edge deployment van autonome voertuigen?"
        },
        options: [
          { en: "Transferring knowledge from large, accurate teacher models to smaller, faster student models that can run efficiently on vehicle hardware with limited resources", es: "Transferir conocimiento de modelos maestros grandes y precisos a modelos estudiante más pequeños y rápidos que pueden ejecutarse eficientemente en hardware vehículo con recursos limitados", de: "Wissen von großen, genauen Lehrer-Modellen auf kleinere, schnellere Schüler-Modelle übertragen die effizient auf Fahrzeug-Hardware mit begrenzten Ressourcen laufen können", nl: "Kennis overdragen van grote, nauwkeurige leraar modellen naar kleinere, snellere student modellen die efficiënt kunnen draaien op voertuighardware met beperkte middelen" },
          { en: "Distilling knowledge from driving instructors", es: "Destilar conocimiento de instructores de conducción", de: "Wissen von Fahrlehrern destillieren", nl: "Kennis distilleren van rijinstructeurs" },
          { en: "Knowledge distillation for fuel efficiency", es: "Destilación de conocimiento para eficiencia de combustible", de: "Wissensdestillation für Kraftstoffeffizienz", nl: "Kennis distillatie voor brandstofefficiëntie" },
          { en: "Distilling vehicle maintenance knowledge", es: "Destilar conocimiento de mantenimiento de vehículo", de: "Fahrzeugwartungswissen destillieren", nl: "Voertuigonderhoud kennis distilleren" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation compresses powerful but computationally expensive AI models into compact versions suitable for real-time inference on vehicle processors without significant performance loss.",
          es: "La destilación de conocimiento comprime modelos IA poderosos pero computacionalmente costosos en versiones compactas adecuadas para inferencia en tiempo real en procesadores de vehículo sin pérdida significativa de rendimiento.",
          de: "Knowledge Distillation komprimiert leistungsstarke aber rechenintensive KI-Modelle in kompakte Versionen geeignet für Echtzeitinferenz auf Fahrzeugprozessoren ohne signifikanten Leistungsverlust.",
          nl: "Knowledge distillation comprimeert krachtige maar computationeel dure AI-modellen in compacte versies geschikt voor realtime inferentie op voertuigprocessors zonder significant prestatieverlies."
        }
      },
      {
        question: {
          en: "What is 'neural-symbolic integration' providing for autonomous vehicle reasoning?",
          es: "¿Qué está proporcionando la 'integración neuro-simbólica' para razonamiento de vehículos autónomos?",
          de: "Was bietet 'neural-symbolische Integration' für autonomes Fahrzeug-Reasoning?",
          nl: "Wat biedt 'neural-symbolische integratie' voor redenering van autonome voertuigen?"
        },
        options: [
          { en: "Combining neural network perception capabilities with symbolic logical reasoning to enable both pattern recognition and rule-based decision-making", es: "Combinar capacidades percepción red neuronal con razonamiento lógico simbólico para permitir reconocimiento patrones y toma decisiones basada reglas", de: "Neuronale Netzwerk-Wahrnehmungsfähigkeiten mit symbolischem logischem Reasoning kombinieren um sowohl Mustererkennung als auch regelbasierte Entscheidungsfindung zu ermöglichen", nl: "Neurale netwerk perceptie capaciteiten combineren met symbolische logische redenering om zowel patroonherkenning als regelgebaseerde besluitvorming mogelijk te maken" },
          { en: "Integration of neural and symbol systems in vehicles", es: "Integración de sistemas neuronales y de símbolos en vehículos", de: "Integration von neuralen und Symbolsystemen in Fahrzeugen", nl: "Integratie van neurale en symboolsystemen in voertuigen" },
          { en: "Symbolic vehicle branding with neural networks", es: "Marca simbólica de vehículo con redes neuronales", de: "Symbolisches Fahrzeugbranding mit neuronalen Netzwerken", nl: "Symbolische voertuigbranding met neurale netwerken" },
          { en: "Neural-symbolic vehicle design", es: "Diseño de vehículo neuro-simbólico", de: "Neural-symbolisches Fahrzeugdesign", nl: "Neural-symbolisch voertuigontwerp" }
        ],
        correct: 0,
        explanation: {
          en: "Neural-symbolic AI combines the learning strengths of neural networks with the interpretability and logical reasoning of symbolic systems, creating more explainable and reliable autonomous driving decisions.",
          es: "La IA neuro-simbólica combina las fortalezas de aprendizaje de redes neuronales con interpretabilidad y razonamiento lógico de sistemas simbólicos, creando decisiones de conducción autónoma más explicables y confiables.",
          de: "Neural-symbolische KI kombiniert die Lernstärken neuronaler Netzwerke mit Interpretierbarkeit und logischem Reasoning symbolischer Systeme, schafft erklärbarere und zuverlässigere autonome Fahrentscheidungen.",
          nl: "Neural-symbolische AI combineert de leersterktes van neurale netwerken met interpreteerbaarheid en logische redenering van symbolische systemen, creëert meer verklaarbare en betrouwbare autonome rijbeslissingen."
        }
      },
      {
        question: {
          en: "What is 'self-supervised learning' enabling in autonomous vehicle perception?",
          es: "¿Qué está permitiendo el 'aprendizaje auto-supervisado' en percepción de vehículos autónomos?",
          de: "Was ermöglicht 'selbstüberwachtes Lernen' in der Wahrnehmung autonomer Fahrzeuge?",
          nl: "Wat maakt 'self-supervised learning' mogelijk in perceptie van autonome voertuigen?"
        },
        options: [
          { en: "Learning powerful visual representations from unlabeled driving data by creating pretext tasks that don't require human annotation, reducing labeling costs", es: "Aprender representaciones visuales poderosas de datos conducción sin etiquetar creando tareas pretexto que no requieren anotación humana, reduciendo costos etiquetado", de: "Leistungsstarke visuelle Repräsentationen aus unbeschrifteten Fahrdaten lernen durch Erstellen von Pretext-Aufgaben die keine menschliche Annotation erfordern, reduziert Etikettierungskosten", nl: "Krachtige visuele representaties leren van ongelabelde rijdata door pretext taken te creëren die geen menselijke annotatie vereisen, vermindert labelkosten" },
          { en: "Vehicles supervising themselves for maintenance", es: "Vehículos supervisándose a sí mismos para mantenimiento", de: "Fahrzeuge sich selbst für Wartung überwachen", nl: "Voertuigen zichzelf superviseren voor onderhoud" },
          { en: "Self-driving vehicles supervising drivers", es: "Vehículos autónomos supervisando conductores", de: "Selbstfahrende Fahrzeuge überwachen Fahrer", nl: "Zelfrijdende voertuigen die bestuurders superviseren" },
          { en: "Supervised learning for self-driving only", es: "Aprendizaje supervisado solo para autoconducción", de: "Überwachtes Lernen nur für selbstfahrend", nl: "Supervised learning alleen voor zelfrijden" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning leverages the vast amounts of unlabeled driving video to learn useful features, dramatically reducing the need for expensive human-labeled training data while improving performance.",
          es: "El aprendizaje auto-supervisado aprovecha grandes cantidades de video de conducción sin etiquetar para aprender características útiles, reduciendo dramáticamente necesidad de datos de entrenamiento etiquetados por humanos costosos mientras mejora rendimiento.",
          de: "Selbstüberwachtes Lernen nutzt die riesigen Mengen unbeschrifteter Fahrvideos um nützliche Merkmale zu lernen, reduziert dramatisch den Bedarf an teuren menschlich beschrifteten Trainingsdaten während Leistung verbessert wird.",
          nl: "Self-supervised learning benut de enorme hoeveelheden ongelabelde rijvideo om nuttige kenmerken te leren, vermindert dramatisch de behoefte aan dure door mensen gelabelde trainingsdata terwijl prestaties verbeteren."
        }
      },
      {
        question: {
          en: "What is 'few-shot learning' enabling for autonomous vehicle adaptability?",
          es: "¿Qué está permitiendo el 'aprendizaje de pocos ejemplos' para adaptabilidad de vehículos autónomos?",
          de: "Was ermöglicht 'Few-Shot Learning' für autonome Fahrzeug-Anpassungsfähigkeit?",
          nl: "Wat maakt 'few-shot learning' mogelijk voor aanpassingsvermogen van autonome voertuigen?"
        },
        options: [
          { en: "Learning to recognize new object classes or adapt to new scenarios from just a handful of training examples, crucial for handling rare situations", es: "Aprender a reconocer nuevas clases objetos o adaptarse a nuevos escenarios desde solo un puñado de ejemplos entrenamiento, crucial para manejar situaciones raras", de: "Neue Objektklassen erkennen oder sich an neue Szenarien anpassen lernen aus nur wenigen Trainingsbeispielen, entscheidend für Umgang mit seltenen Situationen", nl: "Leren nieuwe objectklassen te herkennen of aan te passen aan nieuwe scenario's van slechts een handvol trainingsvoorbeelden, cruciaal voor omgaan met zeldzame situaties" },
          { en: "Learning from few shooting scenarios only", es: "Aprender solo desde pocos escenarios de disparo", de: "Nur aus wenigen Schießszenarien lernen", nl: "Alleen leren van weinig schietscenario's" },
          { en: "Few-shot vehicle photography", es: "Fotografía de vehículo de pocos disparos", de: "Few-Shot Fahrzeugfotografie", nl: "Few-shot voertuigfotografie" },
          { en: "Learning from few vehicle examples", es: "Aprender desde pocos ejemplos de vehículo", de: "Aus wenigen Fahrzeugbeispielen lernen", nl: "Leren van weinig voertuigvoorbeelden" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning is essential for autonomous vehicles to quickly adapt to unusual objects or scenarios they rarely encounter, like construction equipment or region-specific traffic signs, without extensive retraining.",
          es: "El aprendizaje de pocos ejemplos es esencial para vehículos autónomos adaptarse rápidamente a objetos o escenarios inusuales que raramente encuentran, como equipo de construcción o señales de tráfico específicas de región, sin reentrenamiento extenso.",
          de: "Few-Shot Learning ist essentiell für autonome Fahrzeuge um sich schnell an ungewöhnliche Objekte oder Szenarien anzupassen die sie selten antreffen, wie Baugeräte oder regionsspezifische Verkehrszeichen, ohne umfangreiches Neutraining.",
          nl: "Few-shot learning is essentieel voor autonome voertuigen om snel aan te passen aan ongebruikelijke objecten of scenario's die ze zelden tegenkomen, zoals bouwmaterieel of regiospecifieke verkeersborden, zonder uitgebreide hertraining."
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