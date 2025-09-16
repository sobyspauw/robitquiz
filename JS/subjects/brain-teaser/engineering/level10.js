// Engineering - Level 10: Systems Engineering
(function() {
  const level10 = {
    name: {
      en: "Systems Engineering",
      es: "Ingeniería de Sistemas", 
      de: "Systemtechnik",
      nl: "Systeemtechniek"
    },
    questions: [
      {
        question: {
          en: "What is the primary goal of systems engineering?",
          es: "¿Cuál es el objetivo principal de la ingeniería de sistemas?",
          de: "Was ist das Hauptziel der Systemtechnik?",
          nl: "Wat is het primaire doel van systeemtechniek?"
        },
        options: [
          { en: "Design and manage complex systems over their life cycles", es: "Diseñar y gestionar sistemas complejos durante sus ciclos de vida", de: "Komplexe Systeme über ihre Lebenszyklen entwerfen und verwalten", nl: "Complexe systemen ontwerpen en beheren gedurende hun levenscycli" },
          { en: "Write software code only", es: "Solo escribir código de software", de: "Nur Softwarecode schreiben", nl: "Alleen softwarecode schrijven" },
          { en: "Build hardware components", es: "Construir componentes de hardware", de: "Hardware-Komponenten bauen", nl: "Hardware-componenten bouwen" },
          { en: "Test individual parts", es: "Probar partes individuales", de: "Einzelne Teile testen", nl: "Individuele onderdelen testen" }
        ],
        correct: 0,
        explanation: {
          en: "Systems engineering is an interdisciplinary approach to design, integrate, and manage complex systems throughout their entire life cycle, from conception to retirement.",
          es: "La ingeniería de sistemas es un enfoque interdisciplinario para diseñar, integrar y gestionar sistemas complejos durante todo su ciclo de vida, desde la concepción hasta la jubilación.",
          de: "Systemtechnik ist ein interdisziplinärer Ansatz zum Entwerfen, Integrieren und Verwalten komplexer Systeme während ihres gesamten Lebenszyklus, von der Konzeption bis zur Stilllegung.",
          nl: "Systeemtechniek is een interdisciplinaire benadering voor het ontwerpen, integreren en beheren van complexe systemen gedurende hun hele levenscyclus, van conceptie tot buitenbedrijfstelling."
        }
      },
      {
        question: {
          en: "What does V-model represent in systems engineering?",
          es: "¿Qué representa el modelo V en ingeniería de sistemas?",
          de: "Was stellt das V-Modell in der Systemtechnik dar?",
          nl: "Wat vertegenwoordigt het V-model in systeemtechniek?"
        },
        options: [
          { en: "Systems development and verification process", es: "Proceso de desarrollo y verificación de sistemas", de: "Systementwicklungs- und Verifikationsprozess", nl: "Systeem ontwikkelings- en verificatieproces" },
          { en: "Victory in project management", es: "Victoria en gestión de proyectos", de: "Sieg im Projektmanagement", nl: "Overwinning in projectbeheer" },
          { en: "Variable cost analysis", es: "Análisis de costos variables", de: "Variable Kostenanalyse", nl: "Variabele kostenanalyse" },
          { en: "Velocity measurement", es: "Medición de velocidad", de: "Geschwindigkeitsmessung", nl: "Snelheidsmeting" }
        ],
        correct: 0,
        explanation: {
          en: "The V-model illustrates the relationship between systems development phases and corresponding verification/validation activities, with requirements flowing down the left side and testing up the right side.",
          es: "El modelo V ilustra la relación entre las fases de desarrollo de sistemas y las actividades correspondientes de verificación/validación, con requisitos fluyendo hacia abajo del lado izquierdo y pruebas hacia arriba del lado derecho.",
          de: "Das V-Modell veranschaulicht die Beziehung zwischen Systementwicklungsphasen und entsprechenden Verifikations-/Validierungsaktivitäten, wobei Anforderungen auf der linken Seite nach unten und Tests auf der rechten Seite nach oben fließen.",
          nl: "Het V-model illustreert de relatie tussen systeemontwikkelingsfasen en overeenkomstige verificatie-/validatieactiviteiten, met vereisten die naar beneden stromen aan de linkerkant en testen omhoog aan de rechterkant."
        }
      },
      {
        question: {
          en: "What is requirements traceability in systems engineering?",
          es: "¿Qué es la trazabilidad de requisitos en ingeniería de sistemas?",
          de: "Was ist Anforderungsverfolgbarkeit in der Systemtechnik?",
          nl: "Wat is vereisten traceerbaarheid in systeemtechniek?"
        },
        options: [
          { en: "Ability to track requirements through design, implementation, and testing", es: "Capacidad de rastrear requisitos a través del diseño, implementación y pruebas", de: "Fähigkeit, Anforderungen durch Design, Implementierung und Tests zu verfolgen", nl: "Vermogen om vereisten te volgen door ontwerp, implementatie en testen" },
          { en: "Physical tracking of system components", es: "Rastreo físico de componentes del sistema", de: "Physische Verfolgung von Systemkomponenten", nl: "Fysieke tracking van systeemcomponenten" },
          { en: "GPS location services", es: "Servicios de ubicación GPS", de: "GPS-Ortungsdienste", nl: "GPS-locatiediensten" },
          { en: "Quality control procedures", es: "Procedimientos de control de calidad", de: "Qualitätskontrollverfahren", nl: "Kwaliteitscontroleprocedures" }
        ],
        correct: 0,
        explanation: {
          en: "Requirements traceability ensures that every requirement can be traced from its origin through design, implementation, and verification, providing accountability and completeness verification.",
          es: "La trazabilidad de requisitos asegura que cada requisito pueda ser rastreado desde su origen a través del diseño, implementación y verificación, proporcionando responsabilidad y verificación de completitud.",
          de: "Anforderungsverfolgbarkeit stellt sicher, dass jede Anforderung von ihrem Ursprung durch Design, Implementierung und Verifikation verfolgt werden kann, um Verantwortlichkeit und Vollständigkeitsverifikation zu gewährleisten.",
          nl: "Vereisten traceerbaarheid zorgt ervoor dat elke vereiste kan worden gevolgd van zijn oorsprong door ontwerp, implementatie en verificatie, wat verantwoordelijkheid en volledigheidsverificatie biedt."
        }
      },
      {
        question: {
          en: "What is configuration management in systems engineering?",
          es: "¿Qué es la gestión de configuración en ingeniería de sistemas?",
          de: "Was ist Konfigurationsmanagement in der Systemtechnik?",
          nl: "Wat is configuratiebeheer in systeemtechniek?"
        },
        options: [
          { en: "Control and tracking of system changes throughout development", es: "Control y seguimiento de cambios del sistema durante el desarrollo", de: "Kontrolle und Verfolgung von Systemänderungen während der Entwicklung", nl: "Controle en tracking van systeemveranderingen gedurende ontwikkeling" },
          { en: "Computer setup procedures", es: "Procedimientos de configuración de computadoras", de: "Computer-Setup-Verfahren", nl: "Computer instelprocedures" },
          { en: "Network configuration only", es: "Solo configuración de red", de: "Nur Netzwerkkonfiguration", nl: "Alleen netwerkconfiguratie" },
          { en: "Software installation", es: "Instalación de software", de: "Software-Installation", nl: "Software-installatie" }
        ],
        correct: 0,
        explanation: {
          en: "Configuration management is the process of identifying, controlling, and tracking all system elements and changes to ensure system integrity and consistency throughout the development lifecycle.",
          es: "La gestión de configuración es el proceso de identificar, controlar y rastrear todos los elementos del sistema y cambios para asegurar la integridad y consistencia del sistema durante el ciclo de vida de desarrollo.",
          de: "Konfigurationsmanagement ist der Prozess der Identifizierung, Kontrolle und Verfolgung aller Systemelemente und Änderungen, um Systemintegrität und -konsistenz während des Entwicklungslebenszyklus zu gewährleisten.",
          nl: "Configuratiebeheer is het proces van het identificeren, controleren en volgen van alle systeemelementen en veranderingen om systeemintegriteit en consistentie gedurende de ontwikkelingslevenscyclus te waarborgen."
        }
      },
      {
        question: {
          en: "What is system architecture in engineering?",
          es: "¿Qué es la arquitectura de sistemas en ingeniería?",
          de: "Was ist Systemarchitektur im Ingenieurwesen?",
          nl: "Wat is systeemarchitectuur in engineering?"
        },
        options: [
          { en: "Fundamental organization and structure of system components", es: "Organización fundamental y estructura de componentes del sistema", de: "Grundlegende Organisation und Struktur von Systemkomponenten", nl: "Fundamentele organisatie en structuur van systeemcomponenten" },
          { en: "Building design only", es: "Solo diseño de edificios", de: "Nur Gebäudedesign", nl: "Alleen gebouwontwerp" },
          { en: "Computer hardware layout", es: "Diseño de hardware de computadora", de: "Computer-Hardware-Layout", nl: "Computer hardware-indeling" },
          { en: "Network topology", es: "Topología de red", de: "Netzwerktopologie", nl: "Netwerktopologie" }
        ],
        correct: 0,
        explanation: {
          en: "System architecture defines the fundamental organization of a system, embodied in its components, their relationships to each other and the environment, and principles governing its design and evolution.",
          es: "La arquitectura de sistemas define la organización fundamental de un sistema, incorporada en sus componentes, sus relaciones entre sí y el ambiente, y principios que gobiernan su diseño y evolución.",
          de: "Systemarchitektur definiert die grundlegende Organisation eines Systems, verkörpert in seinen Komponenten, ihren Beziehungen zueinander und zur Umgebung, und Prinzipien, die sein Design und seine Evolution regeln.",
          nl: "Systeemarchitectuur definieert de fundamentele organisatie van een systeem, belichaamd in zijn componenten, hun relaties tot elkaar en de omgeving, en principes die zijn ontwerp en evolutie beheersen."
        }
      },
      {
        question: {
          en: "What is Model-Based Systems Engineering (MBSE)?",
          es: "¿Qué es la Ingeniería de Sistemas Basada en Modelos (MBSE)?",
          de: "Was ist modellbasierte Systemtechnik (MBSE)?",
          nl: "Wat is Model-Based Systems Engineering (MBSE)?"
        },
        options: [
          { en: "Formalized application of modeling to support system requirements, design, analysis, and verification", es: "Aplicación formalizada de modelado para apoyar requisitos del sistema, diseño, análisis y verificación", de: "Formalisierte Anwendung der Modellierung zur Unterstützung von Systemanforderungen, Design, Analyse und Verifikation", nl: "Geformaliseerde toepassing van modellering ter ondersteuning van systeemeisen, ontwerp, analyse en verificatie" },
          { en: "Using only physical models", es: "Usar solo modelos físicos", de: "Nur physische Modelle verwenden", nl: "Alleen fysieke modellen gebruiken" },
          { en: "3D printing of prototypes", es: "Impresión 3D de prototipos", de: "3D-Druck von Prototypen", nl: "3D-printen van prototypes" },
          { en: "Mathematical calculations only", es: "Solo cálculos matemáticos", de: "Nur mathematische Berechnungen", nl: "Alleen wiskundige berekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "MBSE is the formalized application of modeling to support system requirements, design, analysis, verification and validation activities beginning in the conceptual design phase and continuing throughout development and later life cycle phases.",
          es: "MBSE es la aplicación formalizada de modelado para apoyar los requisitos del sistema, diseño, análisis, actividades de verificación y validación comenzando en la fase de diseño conceptual y continuando a lo largo del desarrollo y fases posteriores del ciclo de vida.",
          de: "MBSE ist die formalisierte Anwendung der Modellierung zur Unterstützung von Systemanforderungen, Design, Analyse, Verifikations- und Validierungsaktivitäten, beginnend in der konzeptionellen Designphase und fortgesetzt während der Entwicklung und späteren Lebenszyklusphasen.",
          nl: "MBSE is de geformaliseerde toepassing van modellering ter ondersteuning van systeemeisen, ontwerp, analyse, verificatie- en validatieactiviteiten beginnend in de conceptuele ontwerpfase en voortgezet gedurende ontwikkeling en latere levenscyclusfasen."
        }
      },
      {
        question: {
          en: "What is a System of Systems (SoS)?",
          es: "¿Qué es un Sistema de Sistemas (SoS)?",
          de: "Was ist ein System von Systemen (SoS)?",
          nl: "Wat is een System of Systems (SoS)?"
        },
        options: [
          { en: "Collection of independent systems that together achieve capabilities not possible by individual systems alone", es: "Colección de sistemas independientes que juntos logran capacidades no posibles por sistemas individuales solos", de: "Sammlung unabhängiger Systeme, die zusammen Fähigkeiten erreichen, die von einzelnen Systemen allein nicht möglich sind", nl: "Verzameling van onafhankelijke systemen die samen capaciteiten bereiken die niet mogelijk zijn door individuele systemen alleen" },
          { en: "Multiple identical systems", es: "Múltiples sistemas idénticos", de: "Mehrere identische Systeme", nl: "Meerdere identieke systemen" },
          { en: "Hierarchical system structure", es: "Estructura de sistema jerárquica", de: "Hierarchische Systemstruktur", nl: "Hiërarchische systeemstructuur" },
          { en: "Systems with many components", es: "Sistemas con muchos componentes", de: "Systeme mit vielen Komponenten", nl: "Systemen met veel componenten" }
        ],
        correct: 0,
        explanation: {
          en: "A System of Systems is a collection of task-oriented or dedicated systems that pool their resources and capabilities to create a new, more complex system which offers more functionality than simply the sum of the constituent systems.",
          es: "Un Sistema de Sistemas es una colección de sistemas orientados a tareas o dedicados que combinan sus recursos y capacidades para crear un nuevo sistema más complejo que ofrece más funcionalidad que simplemente la suma de los sistemas constituyentes.",
          de: "Ein System von Systemen ist eine Sammlung aufgaben-orientierter oder spezialisierter Systeme, die ihre Ressourcen und Fähigkeiten bündeln, um ein neues, komplexeres System zu schaffen, das mehr Funktionalität bietet als einfach die Summe der Bestandssysteme.",
          nl: "Een System of Systems is een verzameling van taakgerichte of toegewijde systemen die hun bronnen en capaciteiten bundelen om een nieuw, complexer systeem te creëren dat meer functionaliteit biedt dan alleen de som van de samenstellende systemen."
        }
      },
      {
        question: {
          en: "What is systems integration in engineering?",
          es: "¿Qué es la integración de sistemas en ingeniería?",
          de: "Was ist Systemintegration im Ingenieurwesen?",
          nl: "Wat is systeemintegratie in engineering?"
        },
        options: [
          { en: "Process of bringing together component sub-systems into one system to ensure they function as a whole", es: "Proceso de unir sub-sistemas componentes en un sistema para asegurar que funcionen como un todo", de: "Prozess des Zusammenbringens von Komponenten-Subsystemen in ein System, um sicherzustellen, dass sie als Ganzes funktionieren", nl: "Proces van het samenbrengen van component subsystemen in één systeem om ervoor te zorgen dat ze als geheel functioneren" },
          { en: "Installing software only", es: "Solo instalar software", de: "Nur Software installieren", nl: "Alleen software installeren" },
          { en: "Connecting networks", es: "Conectar redes", de: "Netzwerke verbinden", nl: "Netwerken verbinden" },
          { en: "Testing individual components", es: "Probar componentes individuales", de: "Einzelne Komponenten testen", nl: "Individuele componenten testen" }
        ],
        correct: 0,
        explanation: {
          en: "Systems integration is the process of bringing together the component sub-systems into one system and ensuring they function together. It involves resolving interface issues, verifying system performance, and validating that integrated systems meet requirements.",
          es: "La integración de sistemas es el proceso de unir los sub-sistemas componentes en un sistema y asegurar que funcionen juntos. Involucra resolver problemas de interfaz, verificar el rendimiento del sistema y validar que los sistemas integrados cumplan los requisitos.",
          de: "Systemintegration ist der Prozess des Zusammenbringens der Komponenten-Subsysteme in ein System und der Sicherstellung, dass sie zusammenarbeiten. Es beinhaltet die Lösung von Schnittstellenproblemen, die Überprüfung der Systemleistung und die Validierung, dass integrierte Systeme die Anforderungen erfüllen.",
          nl: "Systeemintegratie is het proces van het samenbrengen van de component subsystemen in één systeem en ervoor zorgen dat ze samenwerken. Het omvat het oplossen van interfaceproblemen, het verifiëren van systeemprestaties en het valideren dat geïntegreerde systemen aan vereisten voldoen."
        }
      },
      {
        question: {
          en: "What is the primary purpose of Interface Control Documents (ICDs)?",
          es: "¿Cuál es el propósito principal de los Documentos de Control de Interfaz (ICDs)?",
          de: "Was ist der Hauptzweck von Interface Control Documents (ICDs)?",
          nl: "Wat is het primaire doel van Interface Control Documents (ICDs)?"
        },
        options: [
          { en: "Define and control interfaces between system components or subsystems", es: "Definir y controlar interfaces entre componentes del sistema o subsistemas", de: "Schnittstellen zwischen Systemkomponenten oder Subsystemen definieren und kontrollieren", nl: "Interfaces tussen systeemcomponenten of subsystemen definiëren en controleren" },
          { en: "Control user interfaces only", es: "Controlar solo interfaces de usuario", de: "Nur Benutzerschnittstellen kontrollieren", nl: "Alleen gebruikersinterfaces controleren" },
          { en: "Document software code", es: "Documentar código de software", de: "Softwarecode dokumentieren", nl: "Softwarecode documenteren" },
          { en: "Manage project schedules", es: "Gestionar cronogramas de proyecto", de: "Projektpläne verwalten", nl: "Projectschema's beheren" }
        ],
        correct: 0,
        explanation: {
          en: "Interface Control Documents (ICDs) specify the interface requirements between system elements. They define the form, fit, and function of interfaces including data formats, protocols, timing, and physical connections to ensure proper integration.",
          es: "Los Documentos de Control de Interfaz (ICDs) especifican los requisitos de interfaz entre elementos del sistema. Definen la forma, ajuste y función de las interfaces incluyendo formatos de datos, protocolos, tiempo y conexiones físicas para asegurar la integración adecuada.",
          de: "Interface Control Documents (ICDs) spezifizieren die Schnittstellenanforderungen zwischen Systemelementen. Sie definieren Form, Passung und Funktion von Schnittstellen einschließlich Datenformate, Protokolle, Timing und physische Verbindungen zur Sicherstellung ordnungsgemäßer Integration.",
          nl: "Interface Control Documents (ICDs) specificeren de interfacevereisten tussen systeemelementen. Ze definiëren de vorm, passing en functie van interfaces inclusief dataformaten, protocollen, timing en fysieke verbindingen om juiste integratie te waarborgen."
        }
      },
      {
        question: {
          en: "What is verification versus validation in systems engineering?",
          es: "¿Qué es verificación versus validación en ingeniería de sistemas?",
          de: "Was ist Verifikation versus Validierung in der Systemtechnik?",
          nl: "Wat is verificatie versus validatie in systeemtechniek?"
        },
        options: [
          { en: "Verification checks if system is built right; validation checks if right system is built", es: "Verificación verifica si el sistema está construido correctamente; validación verifica si se construye el sistema correcto", de: "Verifikation prüft, ob das System richtig gebaut ist; Validierung prüft, ob das richtige System gebaut wird", nl: "Verificatie controleert of het systeem goed is gebouwd; validatie controleert of het juiste systeem wordt gebouwd" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Het zijn hetzelfde" },
          { en: "Verification is for software, validation for hardware", es: "Verificación es para software, validación para hardware", de: "Verifikation ist für Software, Validierung für Hardware", nl: "Verificatie is voor software, validatie voor hardware" },
          { en: "Validation comes before verification", es: "Validación viene antes de verificación", de: "Validierung kommt vor Verifikation", nl: "Validatie komt voor verificatie" }
        ],
        correct: 0,
        explanation: {
          en: "Verification answers 'Are we building the product right?' - ensuring the system meets specified requirements. Validation answers 'Are we building the right product?' - ensuring the system meets user needs and intended use in the operational environment.",
          es: "Verificación responde '¿Estamos construyendo el producto correctamente?' - asegurando que el sistema cumple los requisitos especificados. Validación responde '¿Estamos construyendo el producto correcto?' - asegurando que el sistema cumple las necesidades del usuario y uso previsto en el ambiente operacional.",
          de: "Verifikation beantwortet 'Bauen wir das Produkt richtig?' - sicherstellen, dass das System spezifizierte Anforderungen erfüllt. Validierung beantwortet 'Bauen wir das richtige Produkt?' - sicherstellen, dass das System Benutzerbedürfnisse und beabsichtigte Verwendung in der Betriebsumgebung erfüllt.",
          nl: "Verificatie beantwoordt 'Bouwen we het product goed?' - ervoor zorgen dat het systeem voldoet aan gespecificeerde vereisten. Validatie beantwoordt 'Bouwen we het juiste product?' - ervoor zorgen dat het systeem voldoet aan gebruikersbehoeften en beoogd gebruik in de operationele omgeving."
        }
      },
      {
        question: {
          en: "What is systems thinking?",
          es: "¿Qué es el pensamiento sistémico?",
          de: "Was ist systemisches Denken?",
          nl: "Wat is systeemdenken?"
        },
        options: [
          { en: "Holistic approach to analysis that focuses on interconnections between system parts", es: "Enfoque holístico para análisis que se enfoca en interconexiones entre partes del sistema", de: "Ganzheitlicher Analyseansatz, der sich auf Verbindungen zwischen Systemteilen konzentriert", nl: "Holistische benadering van analyse die zich richt op onderlinge verbindingen tussen systeemonderdelen" },
          { en: "Only thinking about computers", es: "Solo pensar en computadoras", de: "Nur an Computer denken", nl: "Alleen aan computers denken" },
          { en: "Linear cause-and-effect analysis", es: "Análisis lineal de causa y efecto", de: "Lineare Ursache-Wirkungs-Analyse", nl: "Lineaire oorzaak-gevolg analyse" },
          { en: "Breaking systems into parts", es: "Dividir sistemas en partes", de: "Systeme in Teile zerlegen", nl: "Systemen opsplitsen in onderdelen" }
        ],
        correct: 0,
        explanation: {
          en: "Systems thinking is a holistic approach to analysis that focuses on the way that a system's constituent parts interrelate and how systems work over time and within the context of larger systems, rather than focusing on individual parts in isolation.",
          es: "El pensamiento sistémico es un enfoque holístico para análisis que se enfoca en la manera en que las partes constituyentes de un sistema se interrelacionan y cómo los sistemas funcionan a través del tiempo y dentro del contexto de sistemas más grandes, en lugar de enfocarse en partes individuales aisladamente.",
          de: "Systemisches Denken ist ein ganzheitlicher Analyseansatz, der sich darauf konzentriert, wie die Bestandteile eines Systems miteinander in Beziehung stehen und wie Systeme über die Zeit und im Kontext größerer Systeme funktionieren, anstatt sich auf einzelne Teile isoliert zu konzentrieren.",
          nl: "Systeemdenken is een holistische benadering van analyse die zich richt op de manier waarop de samenstellende delen van een systeem met elkaar verbonden zijn en hoe systemen functioneren in de tijd en binnen de context van grotere systemen, in plaats van zich te richten op individuele delen in isolatie."
        }
      },
      {
        question: {
          en: "What is risk management in systems engineering?",
          es: "¿Qué es la gestión de riesgos en ingeniería de sistemas?",
          de: "Was ist Risikomanagement in der Systemtechnik?",
          nl: "Wat is risicobeheer in systeemtechniek?"
        },
        options: [
          { en: "Systematic process to identify, analyze, and mitigate potential threats to system success", es: "Proceso sistemático para identificar, analizar y mitigar amenazas potenciales al éxito del sistema", de: "Systematischer Prozess zur Identifizierung, Analyse und Minderung potenzieller Bedrohungen für den Systemerfolg", nl: "Systematisch proces om potentiële bedreigingen voor systeemgesucces te identificeren, analyseren en mitigeren" },
          { en: "Only financial risk assessment", es: "Solo evaluación de riesgo financiero", de: "Nur finanzielle Risikobewertung", nl: "Alleen financiële risicobeoordeling" },
          { en: "Safety procedures only", es: "Solo procedimientos de seguridad", de: "Nur Sicherheitsverfahren", nl: "Alleen veiligheidsprocedures" },
          { en: "Insurance coverage", es: "Cobertura de seguro", de: "Versicherungsschutz", nl: "Verzekeringsdekking" }
        ],
        correct: 0,
        explanation: {
          en: "Risk management in systems engineering is the systematic approach to identifying, assessing, and controlling risks that could impact system performance, schedule, cost, or safety. It includes risk identification, analysis, mitigation planning, and monitoring throughout the system lifecycle.",
          es: "La gestión de riesgos en ingeniería de sistemas es el enfoque sistemático para identificar, evaluar y controlar riesgos que podrían impactar el rendimiento del sistema, cronograma, costo o seguridad. Incluye identificación de riesgos, análisis, planificación de mitigación y monitoreo durante el ciclo de vida del sistema.",
          de: "Risikomanagement in der Systemtechnik ist der systematische Ansatz zur Identifizierung, Bewertung und Kontrolle von Risiken, die Systemleistung, Zeitplan, Kosten oder Sicherheit beeinträchtigen könnten. Es umfasst Risikoidentifikation, Analyse, Minderungsplanung und Überwachung während des Systemlebenszyklus.",
          nl: "Risicobeheer in systeemtechniek is de systematische benadering voor het identificeren, beoordelen en controleren van risico's die systeemprestaties, planning, kosten of veiligheid zouden kunnen beïnvloeden. Het omvat risicoidentificatie, analyse, mitigatieplanning en monitoring gedurende de systeemlevenscyclus."
        }
      },
      {
        question: {
          en: "What is a digital twin in systems engineering?",
          es: "¿Qué es un gemelo digital en ingeniería de sistemas?",
          de: "Was ist ein digitaler Zwilling in der Systemtechnik?",
          nl: "Wat is een digitale tweeling in systeemtechniek?"
        },
        options: [
          { en: "Real-time digital replica of physical system that mirrors behavior and performance", es: "Réplica digital en tiempo real del sistema físico que refleja comportamiento y rendimiento", de: "Digitale Echtzeitreplica des physischen Systems, die Verhalten und Leistung widerspiegelt", nl: "Real-time digitale replica van fysiek systeem dat gedrag en prestaties weergeeft" },
          { en: "Two identical systems", es: "Dos sistemas idénticos", de: "Zwei identische Systeme", nl: "Twee identieke systemen" },
          { en: "Backup system copy", es: "Copia de sistema de respaldo", de: "Backup-Systemkopie", nl: "Back-up systeemkopie" },
          { en: "System documentation", es: "Documentación del sistema", de: "Systemdokumentation", nl: "Systeemdocumentatie" }
        ],
        correct: 0,
        explanation: {
          en: "A digital twin is a real-time digital replica of a physical system, product, or process. It uses real-world data to create simulations that can predict how a product or process will perform, enabling better decision-making, predictive maintenance, and optimization.",
          es: "Un gemelo digital es una réplica digital en tiempo real de un sistema físico, producto o proceso. Usa datos del mundo real para crear simulaciones que pueden predecir cómo un producto o proceso se desempeñará, permitiendo mejor toma de decisiones, mantenimiento predictivo y optimización.",
          de: "Ein digitaler Zwilling ist eine digitale Echtzeitreplika eines physischen Systems, Produkts oder Prozesses. Er verwendet reale Daten, um Simulationen zu erstellen, die vorhersagen können, wie ein Produkt oder Prozess funktionieren wird, was bessere Entscheidungsfindung, vorausschauende Wartung und Optimierung ermöglicht.",
          nl: "Een digitale tweeling is een real-time digitale replica van een fysiek systeem, product of proces. Het gebruikt echte werelddata om simulaties te creëren die kunnen voorspellen hoe een product of proces zal presteren, wat betere besluitvorming, voorspellend onderhoud en optimalisatie mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is human systems integration (HSI)?",
          es: "¿Qué es la integración de sistemas humanos (HSI)?",
          de: "Was ist Human Systems Integration (HSI)?",
          nl: "Wat is human systems integration (HSI)?"
        },
        options: [
          { en: "Systematic integration of human considerations into system design and development", es: "Integración sistemática de consideraciones humanas en el diseño y desarrollo del sistema", de: "Systematische Integration menschlicher Überlegungen in Systemdesign und -entwicklung", nl: "Systematische integratie van menselijke overwegingen in systeemontwerp en -ontwikkeling" },
          { en: "Only ergonomic design", es: "Solo diseño ergonómico", de: "Nur ergonomisches Design", nl: "Alleen ergonomisch ontwerp" },
          { en: "HR management systems", es: "Sistemas de gestión de RRHH", de: "HR-Management-Systeme", nl: "HR-managementsystemen" },
          { en: "Social media integration", es: "Integración de redes sociales", de: "Social-Media-Integration", nl: "Social media-integratie" }
        ],
        correct: 0,
        explanation: {
          en: "Human Systems Integration (HSI) is the systematic integration of human considerations into system acquisition and development to optimize total system performance, reduce life-cycle costs, and ensure system effectiveness and safety through consideration of human capabilities and limitations.",
          es: "La Integración de Sistemas Humanos (HSI) es la integración sistemática de consideraciones humanas en la adquisición y desarrollo de sistemas para optimizar el rendimiento total del sistema, reducir costos del ciclo de vida y asegurar efectividad y seguridad del sistema a través de la consideración de capacidades y limitaciones humanas.",
          de: "Human Systems Integration (HSI) ist die systematische Integration menschlicher Überlegungen in Systembeschaffung und -entwicklung zur Optimierung der Gesamtsystemleistung, Reduzierung der Lebenszykluskosten und Sicherstellung von Systemeffektivität und -sicherheit durch Berücksichtigung menschlicher Fähigkeiten und Grenzen.",
          nl: "Human Systems Integration (HSI) is de systematische integratie van menselijke overwegingen in systeemverwerving en -ontwikkeling om totale systeemprestaties te optimaliseren, levenscycluskosten te reduceren en systeemeffectiviteit en veiligheid te waarborgen door rekening te houden met menselijke capaciteiten en beperkingen."
        }
      },
      {
        question: {
          en: "What is enterprise architecture?",
          es: "¿Qué es la arquitectura empresarial?",
          de: "Was ist Enterprise-Architektur?",
          nl: "Wat is enterprise-architectuur?"
        },
        options: [
          { en: "Conceptual blueprint defining structure and operation of organizations through technology, processes, and people", es: "Plano conceptual que define estructura y operación de organizaciones a través de tecnología, procesos y personas", de: "Konzeptioneller Plan, der Struktur und Betrieb von Organisationen durch Technologie, Prozesse und Menschen definiert", nl: "Conceptuele blauwdruk die structuur en werking van organisaties definieert door technologie, processen en mensen" },
          { en: "Only building architecture", es: "Solo arquitectura de edificios", de: "Nur Gebäudearchitektur", nl: "Alleen gebouwarchitectuur" },
          { en: "Network design only", es: "Solo diseño de red", de: "Nur Netzwerkdesign", nl: "Alleen netwerkontwerp" },
          { en: "Software architecture", es: "Arquitectura de software", de: "Software-Architektur", nl: "Software-architectuur" }
        ],
        correct: 0,
        explanation: {
          en: "Enterprise architecture is a conceptual blueprint that defines the structure and operation of organizations. It determines how technology, processes, and people work together to support business objectives and strategic goals across the entire enterprise.",
          es: "La arquitectura empresarial es un plano conceptual que define la estructura y operación de las organizaciones. Determina cómo la tecnología, procesos y personas trabajan juntos para apoyar objetivos de negocio y metas estratégicas a través de toda la empresa.",
          de: "Enterprise-Architektur ist ein konzeptioneller Plan, der die Struktur und den Betrieb von Organisationen definiert. Sie bestimmt, wie Technologie, Prozesse und Menschen zusammenarbeiten, um Geschäftsziele und strategische Ziele im gesamten Unternehmen zu unterstützen.",
          nl: "Enterprise-architectuur is een conceptuele blauwdruk die de structuur en werking van organisaties definieert. Het bepaalt hoe technologie, processen en mensen samenwerken om bedrijfsdoelstellingen en strategische doelen door de hele onderneming heen te ondersteunen."
        }
      },
      {
        question: {
          en: "What is reliability engineering in systems?",
          es: "¿Qué es la ingeniería de confiabilidad en sistemas?",
          de: "Was ist Zuverlässigkeitstechnik in Systemen?",
          nl: "Wat is betrouwbaarheidstechniek in systemen?"
        },
        options: [
          { en: "Engineering discipline focused on ability of systems to perform required functions under stated conditions", es: "Disciplina de ingeniería enfocada en la capacidad de sistemas para realizar funciones requeridas bajo condiciones establecidas", de: "Ingenieursdisziplin, die sich auf die Fähigkeit von Systemen konzentriert, erforderliche Funktionen unter festgelegten Bedingungen auszuführen", nl: "Ingenieursdiscipline gericht op het vermogen van systemen om vereiste functies onder vastgestelde omstandigheden uit te voeren" },
          { en: "Quality control testing", es: "Pruebas de control de calidad", de: "Qualitätskontrolltests", nl: "Kwaliteitscontroletesten" },
          { en: "System maintenance only", es: "Solo mantenimiento del sistema", de: "Nur Systemwartung", nl: "Alleen systeemonderhoud" },
          { en: "User satisfaction surveys", es: "Encuestas de satisfacción del usuario", de: "Benutzerzufriedenheitsumfragen", nl: "Gebruikerstevredenheidsenquêtes" }
        ],
        correct: 0,
        explanation: {
          en: "Reliability engineering is a sub-discipline of systems engineering that emphasizes dependability in lifecycle management. It focuses on the ability of a system or component to perform its required functions under stated conditions for a specified period of time.",
          es: "La ingeniería de confiabilidad es una sub-disciplina de la ingeniería de sistemas que enfatiza la confiabilidad en la gestión del ciclo de vida. Se enfoca en la capacidad de un sistema o componente para realizar sus funciones requeridas bajo condiciones establecidas por un período de tiempo especificado.",
          de: "Zuverlässigkeitstechnik ist eine Subdisziplin der Systemtechnik, die Verlässlichkeit im Lebenszyklusmanagement betont. Sie konzentriert sich auf die Fähigkeit eines Systems oder einer Komponente, seine erforderlichen Funktionen unter festgelegten Bedingungen für einen bestimmten Zeitraum auszuführen.",
          nl: "Betrouwbaarheidstechniek is een subdiscipline van systeemtechniek die betrouwbaarheid in levenscyclusbeheer benadrukt. Het richt zich op het vermogen van een systeem of component om zijn vereiste functies onder vastgestelde omstandigheden gedurende een gespecificeerde periode uit te voeren."
        }
      },
      {
        question: {
          en: "What is systems engineering lifecycle management?",
          es: "¿Qué es la gestión del ciclo de vida de ingeniería de sistemas?",
          de: "Was ist Systemtechnik-Lebenszyklusmanagement?",
          nl: "Wat is systeemtechniek levenscyclusbeheer?"
        },
        options: [
          { en: "Integrated management of system from conception through design, production, operation, and disposal", es: "Gestión integrada del sistema desde la concepción a través del diseño, producción, operación y disposición", de: "Integrierte Verwaltung des Systems von der Konzeption über Design, Produktion, Betrieb bis zur Entsorgung", nl: "Geïntegreerd beheer van het systeem vanaf conceptie door ontwerp, productie, werking en afvoer" },
          { en: "Only design phase management", es: "Solo gestión de fase de diseño", de: "Nur Design-Phasen-Management", nl: "Alleen ontwerpfasebeheer" },
          { en: "Product warranty support", es: "Soporte de garantía del producto", de: "Produktgarantie-Support", nl: "Productgarantieondersteuning" },
          { en: "Manufacturing process only", es: "Solo proceso de fabricación", de: "Nur Herstellungsprozess", nl: "Alleen productieproces" }
        ],
        correct: 0,
        explanation: {
          en: "Systems engineering lifecycle management encompasses all activities from initial concept through design, development, production, operation, maintenance, and eventual disposal or retirement of the system. It ensures coordinated management across all lifecycle phases.",
          es: "La gestión del ciclo de vida de ingeniería de sistemas abarca todas las actividades desde el concepto inicial a través del diseño, desarrollo, producción, operación, mantenimiento y eventual disposición o retiro del sistema. Asegura gestión coordinada a través de todas las fases del ciclo de vida.",
          de: "Systemtechnik-Lebenszyklusmanagement umfasst alle Aktivitäten vom ursprünglichen Konzept über Design, Entwicklung, Produktion, Betrieb, Wartung bis zur eventuellen Entsorgung oder Stilllegung des Systems. Es gewährleistet koordinierte Verwaltung über alle Lebenszyklusphasen.",
          nl: "Systeemtechniek levenscyclusbeheer omvat alle activiteiten vanaf het initiële concept door ontwerp, ontwikkeling, productie, werking, onderhoud en uiteindelijke afvoer of buitenbedrijfstelling van het systeem. Het zorgt voor gecoördineerd beheer over alle levenscyclusfasen."
        }
      },
      {
        question: {
          en: "What is functional analysis in systems engineering?",
          es: "¿Qué es el análisis funcional en ingeniería de sistemas?",
          de: "Was ist Funktionsanalyse in der Systemtechnik?",
          nl: "Wat is functionele analyse in systeemtechniek?"
        },
        options: [
          { en: "Process of identifying and analyzing what the system must do to meet stakeholder needs", es: "Proceso de identificar y analizar lo que el sistema debe hacer para satisfacer las necesidades de las partes interesadas", de: "Prozess der Identifizierung und Analyse dessen, was das System tun muss, um Stakeholder-Bedürfnisse zu erfüllen", nl: "Proces van identificeren en analyseren wat het systeem moet doen om stakeholderbehoeften te vervullen" },
          { en: "Mathematical function calculations", es: "Cálculos de función matemática", de: "Mathematische Funktionsberechnungen", nl: "Wiskundige functieberekeningen" },
          { en: "Team performance analysis", es: "Análisis de rendimiento del equipo", de: "Team-Leistungsanalyse", nl: "Teamprestatie-analyse" },
          { en: "Cost-benefit analysis only", es: "Solo análisis de costo-beneficio", de: "Nur Kosten-Nutzen-Analyse", nl: "Alleen kosten-batenanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Functional analysis is the process of identifying, describing, and organizing the functions a system must perform to achieve its intended purpose. It translates stakeholder needs into specific functional requirements and establishes the functional architecture.",
          es: "El análisis funcional es el proceso de identificar, describir y organizar las funciones que un sistema debe realizar para lograr su propósito previsto. Traduce las necesidades de las partes interesadas en requisitos funcionales específicos y establece la arquitectura funcional.",
          de: "Funktionsanalyse ist der Prozess der Identifizierung, Beschreibung und Organisation der Funktionen, die ein System ausführen muss, um seinen beabsichtigten Zweck zu erreichen. Sie übersetzt Stakeholder-Bedürfnisse in spezifische Funktionsanforderungen und etabliert die Funktionsarchitektur.",
          nl: "Functionele analyse is het proces van identificeren, beschrijven en organiseren van de functies die een systeem moet uitvoeren om zijn beoogde doel te bereiken. Het vertaalt stakeholderbehoeften naar specifieke functionele vereisten en vestigt de functionele architectuur."
        }
      },
      {
        question: {
          en: "What is systems interoperability?",
          es: "¿Qué es la interoperabilidad de sistemas?",
          de: "Was ist Systeminteroperabilität?",
          nl: "Wat is systeeminteroperabiliteit?"
        },
        options: [
          { en: "Ability of systems to work together and exchange information effectively", es: "Capacidad de sistemas para trabajar juntos e intercambiar información efectivamente", de: "Fähigkeit von Systemen, zusammenzuarbeiten und Informationen effektiv auszutauschen", nl: "Vermogen van systemen om samen te werken en informatie effectief uit te wisselen" },
          { en: "Systems compatibility only", es: "Solo compatibilidad de sistemas", de: "Nur Systemkompatibilität", nl: "Alleen systeemcompatibiliteit" },
          { en: "Network connectivity", es: "Conectividad de red", de: "Netzwerkkonnektivität", nl: "Netwerkconnectiviteit" },
          { en: "User interface design", es: "Diseño de interfaz de usuario", de: "Benutzerschnittstellen-Design", nl: "Gebruikersinterface-ontwerp" }
        ],
        correct: 0,
        explanation: {
          en: "Systems interoperability is the ability of systems to work together (inter-operate) by exchanging and using information to achieve common objectives. It encompasses technical, syntactic, semantic, and organizational aspects of system integration.",
          es: "La interoperabilidad de sistemas es la capacidad de los sistemas para trabajar juntos (inter-operar) intercambiando y usando información para lograr objetivos comunes. Abarca aspectos técnicos, sintácticos, semánticos y organizacionales de la integración de sistemas.",
          de: "Systeminteroperabilität ist die Fähigkeit von Systemen, zusammenzuarbeiten (inter-operieren), indem sie Informationen austauschen und nutzen, um gemeinsame Ziele zu erreichen. Sie umfasst technische, syntaktische, semantische und organisatorische Aspekte der Systemintegration.",
          nl: "Systeeminteroperabiliteit is het vermogen van systemen om samen te werken (inter-opereren) door informatie uit te wisselen en te gebruiken om gemeenschappelijke doelstellingen te bereiken. Het omvat technische, syntactische, semantische en organisatorische aspecten van systeemintegratie."
        }
      },
      {
        question: {
          en: "What is systems performance measurement?",
          es: "¿Qué es la medición de rendimiento de sistemas?",
          de: "Was ist Systemleistungsmessung?",
          nl: "Wat is systeemprestatiemet ing?"
        },
        options: [
          { en: "Quantitative assessment of how well system meets requirements and objectives", es: "Evaluación cuantitativa de qué tan bien el sistema cumple requisitos y objetivos", de: "Quantitative Bewertung, wie gut das System Anforderungen und Ziele erfüllt", nl: "Kwantitatieve beoordeling van hoe goed het systeem voldoet aan vereisten en doelstellingen" },
          { en: "Speed testing only", es: "Solo pruebas de velocidad", de: "Nur Geschwindigkeitstests", nl: "Alleen snelheidstesten" },
          { en: "User satisfaction surveys", es: "Encuestas de satisfacción del usuario", de: "Benutzerzufriedenheitsumfragen", nl: "Gebruikerstevredenheidsenquêtes" },
          { en: "Financial performance only", es: "Solo rendimiento financiero", de: "Nur finanzielle Leistung", nl: "Alleen financiële prestatie" }
        ],
        correct: 0,
        explanation: {
          en: "Systems performance measurement is the systematic quantification of system effectiveness, efficiency, and capability against established requirements and objectives. It includes measures of performance (MOPs) and measures of effectiveness (MOEs) throughout the system lifecycle.",
          es: "La medición de rendimiento de sistemas es la cuantificación sistemática de la efectividad, eficiencia y capacidad del sistema contra requisitos y objetivos establecidos. Incluye medidas de rendimiento (MOPs) y medidas de efectividad (MOEs) durante el ciclo de vida del sistema.",
          de: "Systemleistungsmessung ist die systematische Quantifizierung von Systemeffektivität, -effizienz und -fähigkeit gegenüber etablierten Anforderungen und Zielen. Sie umfasst Leistungsmaße (MOPs) und Effektivitätsmaße (MOEs) während des Systemlebenszyklus.",
          nl: "Systeemprestatiem eting is de systematische kwantificering van systeemeffectiviteit, -efficiëntie en -capaciteit tegen vastgestelde vereisten en doelstellingen. Het omvat prestatiemaatregelen (MOPs) en effectiviteitsmaatregelen (MOEs) gedurende de systeemlevenscyclus."
        }
      },
      {
        question: {
          en: "What is trade-off analysis in systems engineering?",
          es: "¿Qué es el análisis de compensaciones en ingeniería de sistemas?",
          de: "Was ist Trade-off-Analyse in der Systemtechnik?",
          nl: "Wat is trade-off analyse in systeemtechniek?"
        },
        options: [
          { en: "Systematic evaluation of alternatives to optimize system design decisions", es: "Evaluación sistemática de alternativas para optimizar decisiones de diseño del sistema", de: "Systematische Bewertung von Alternativen zur Optimierung von Systemdesign-Entscheidungen", nl: "Systematische evaluatie van alternatieven om systeemontwerp beslissingen te optimaliseren" },
          { en: "Financial trading analysis", es: "Análisis de comercio financiero", de: "Finanzhandelsanalyse", nl: "Financiële handelsanalyse" },
          { en: "Project scheduling", es: "Programación de proyectos", de: "Projektplanung", nl: "Projectplanning" },
          { en: "Risk assessment only", es: "Solo evaluación de riesgos", de: "Nur Risikobewertung", nl: "Alleen risicobeoordeling" }
        ],
        correct: 0,
        explanation: {
          en: "Trade-off analysis is the systematic evaluation of competing design alternatives to determine the optimal balance between conflicting system attributes such as cost, performance, schedule, and risk. It helps make informed decisions when resources or requirements conflict.",
          es: "El análisis de compensaciones es la evaluación sistemática de alternativas de diseño competidoras para determinar el equilibrio óptimo entre atributos del sistema en conflicto como costo, rendimiento, cronograma y riesgo. Ayuda a tomar decisiones informadas cuando los recursos o requisitos entran en conflicto.",
          de: "Trade-off-Analyse ist die systematische Bewertung konkurrierender Designalternativen zur Bestimmung des optimalen Gleichgewichts zwischen konfliktierenden Systemattributen wie Kosten, Leistung, Zeitplan und Risiko. Sie hilft bei informierten Entscheidungen, wenn Ressourcen oder Anforderungen in Konflikt stehen.",
          nl: "Trade-off analyse is de systematische evaluatie van concurrerende ontwerpalt ernatieven om de optimale balans tussen conflicterende systeemkenmerken zoals kosten, prestaties, planning en risico te bepalen. Het helpt bij het nemen van geïnformeerde beslissingen wanneer middelen of vereisten botsen."
        }
      },
      {
        question: {
          en: "What is concurrent engineering in systems development?",
          es: "¿Qué es la ingeniería concurrente en desarrollo de sistemas?",
          de: "Was ist Concurrent Engineering in der Systementwicklung?",
          nl: "Wat is concurrent engineering in systeemontwikkeling?"
        },
        options: [
          { en: "Simultaneous development of products and related processes to reduce development time and improve quality", es: "Desarrollo simultáneo de productos y procesos relacionados para reducir tiempo de desarrollo y mejorar calidad", de: "Gleichzeitige Entwicklung von Produkten und verwandten Prozessen zur Reduzierung der Entwicklungszeit und Verbesserung der Qualität", nl: "Gelijktijdige ontwikkeling van producten en gerelateerde processen om ontwikkelingstijd te verkorten en kwaliteit te verbeteren" },
          { en: "Multiple teams working separately", es: "Múltiples equipos trabajando por separado", de: "Mehrere Teams arbeiten getrennt", nl: "Meerdere teams die apart werken" },
          { en: "Sequential development phases", es: "Fases de desarrollo secuencial", de: "Sequenzielle Entwicklungsphasen", nl: "Sequentiële ontwikkelingsfasen" },
          { en: "Parallel computing only", es: "Solo computación paralela", de: "Nur paralleles Rechnen", nl: "Alleen parallel computing" }
        ],
        correct: 0,
        explanation: {
          en: "Concurrent engineering is an approach where product development activities are performed in parallel rather than sequentially. Cross-functional teams work simultaneously on design, manufacturing, testing, and other processes to reduce development time and improve product quality.",
          es: "La ingeniería concurrente es un enfoque donde las actividades de desarrollo de productos se realizan en paralelo en lugar de secuencialmente. Los equipos multifuncionales trabajan simultáneamente en diseño, fabricación, pruebas y otros procesos para reducir el tiempo de desarrollo y mejorar la calidad del producto.",
          de: "Concurrent Engineering ist ein Ansatz, bei dem Produktentwicklungsaktivitäten parallel statt sequenziell durchgeführt werden. Funktionsübergreifende Teams arbeiten gleichzeitig an Design, Herstellung, Tests und anderen Prozessen, um die Entwicklungszeit zu reduzieren und die Produktqualität zu verbessern.",
          nl: "Concurrent engineering is een benadering waarbij productontwikkelingsactiviteiten parallel worden uitgevoerd in plaats van sequentieel. Multifunctionele teams werken gelijktijdig aan ontwerp, productie, testen en andere processen om ontwikkelingstijd te verkorten en productkwaliteit te verbeteren."
        }
      },
      {
        question: {
          en: "What is systems maintenance and sustainment?",
          es: "¿Qué es el mantenimiento y sostenimiento de sistemas?",
          de: "Was ist Systemwartung und -erhaltung?",
          nl: "Wat is systeemonderhoud en -voortzetting?"
        },
        options: [
          { en: "Activities to keep systems operational and effective throughout their service life", es: "Actividades para mantener los sistemas operacionales y efectivos durante su vida útil", de: "Aktivitäten zur Aufrechterhaltung der Betriebsfähigkeit und Wirksamkeit von Systemen während ihrer Betriebsdauer", nl: "Activiteiten om systemen operationeel en effectief te houden gedurende hun levensduur" },
          { en: "Only repair activities", es: "Solo actividades de reparación", de: "Nur Reparaturaktivitäten", nl: "Alleen reparatieactiviteiten" },
          { en: "Environmental protection", es: "Protección ambiental", de: "Umweltschutz", nl: "Milieubescherming" },
          { en: "User training only", es: "Solo entrenamiento de usuario", de: "Nur Benutzerschulung", nl: "Alleen gebruikersscholing" }
        ],
        correct: 0,
        explanation: {
          en: "Systems maintenance and sustainment encompasses all activities required to keep a system operational and effective throughout its service life. This includes corrective and preventive maintenance, system modifications, logistics support, and capability improvements.",
          es: "El mantenimiento y sostenimiento de sistemas abarca todas las actividades requeridas para mantener un sistema operacional y efectivo durante su vida útil. Esto incluye mantenimiento correctivo y preventivo, modificaciones del sistema, soporte logístico y mejoras de capacidad.",
          de: "Systemwartung und -erhaltung umfasst alle Aktivitäten, die erforderlich sind, um ein System während seiner Betriebsdauer betriebsbereit und wirksam zu halten. Dazu gehören korrigierende und vorbeugende Wartung, Systemmodifikationen, logistische Unterstützung und Fähigkeitsverbesserungen.",
          nl: "Systeemonderhoud en -voortzetting omvat alle activiteiten die vereist zijn om een systeem operationeel en effectief te houden gedurende zijn levensduur. Dit omvat correctief en preventief onderhoud, systeemmodificaties, logistieke ondersteuning en capaciteitsverbeteringen."
        }
      },
      {
        question: {
          en: "What is system safety engineering?",
          es: "¿Qué es la ingeniería de seguridad de sistemas?",
          de: "Was ist Systemsicherheitstechnik?",
          nl: "Wat is systeem veiligheidstechniek?"
        },
        options: [
          { en: "Engineering discipline ensuring systems operate safely without unacceptable risk of harm", es: "Disciplina de ingeniería que asegura que los sistemas operen de manera segura sin riesgo inaceptable de daño", de: "Ingenieursdisziplin, die sicherstellt, dass Systeme sicher ohne unakzeptables Schadensrisiko funktionieren", nl: "Ingenieursdiscipline die waarborgt dat systemen veilig functioneren zonder onaanvaardbaar risico op schade" },
          { en: "Security systems only", es: "Solo sistemas de seguridad", de: "Nur Sicherheitssysteme", nl: "Alleen beveiligingssystemen" },
          { en: "Physical protection measures", es: "Medidas de protección física", de: "Physische Schutzmaßnahmen", nl: "Fysieke beschermingsmaatregelen" },
          { en: "Data encryption", es: "Encriptación de datos", de: "Datenverschlüsselung", nl: "Data-encryptie" }
        ],
        correct: 0,
        explanation: {
          en: "System safety engineering is the application of engineering and management principles to ensure systems operate safely throughout their lifecycle. It involves hazard identification, risk assessment, and implementation of safety measures to prevent accidents and minimize harm.",
          es: "La ingeniería de seguridad de sistemas es la aplicación de principios de ingeniería y gestión para asegurar que los sistemas operen de manera segura durante su ciclo de vida. Involucra identificación de peligros, evaluación de riesgos e implementación de medidas de seguridad para prevenir accidentes y minimizar daños.",
          de: "Systemsicherheitstechnik ist die Anwendung von Ingenieur- und Managementprinzipien zur Sicherstellung, dass Systeme während ihres Lebenszyklus sicher funktionieren. Sie beinhaltet Gefahrenidentifikation, Risikobewertung und Implementierung von Sicherheitsmaßnahmen zur Unfallverhütung und Schadensminimierung.",
          nl: "Systeem veiligheidstechniek is de toepassing van technische en managementprincipes om ervoor te zorgen dat systemen veilig functioneren gedurende hun levenscyclus. Het omvat gevarenidentificatie, risicobeoordeling en implementatie van veiligheidsmaatregelen om ongevallen te voorkomen en schade te minimaliseren."
        }
      },
      {
        question: {
          en: "What is systems integration testing?",
          es: "¿Qué son las pruebas de integración de sistemas?",
          de: "Was ist Systemintegrationstesting?",
          nl: "Wat is systeemintegratietesten?"
        },
        options: [
          { en: "Testing to verify that integrated system components work together correctly", es: "Pruebas para verificar que los componentes del sistema integrados funcionen juntos correctamente", de: "Tests zur Überprüfung, dass integrierte Systemkomponenten korrekt zusammenarbeiten", nl: "Testen om te verifiëren dat geïntegreerde systeemcomponenten correct samenwerken" },
          { en: "Individual component testing", es: "Pruebas de componentes individuales", de: "Einzelkomponenten-Tests", nl: "Individuele componenttesten" },
          { en: "User acceptance testing", es: "Pruebas de aceptación del usuario", de: "Benutzerakzeptanztests", nl: "Gebruikersacceptatietesten" },
          { en: "Performance testing only", es: "Solo pruebas de rendimiento", de: "Nur Leistungstests", nl: "Alleen prestatietesten" }
        ],
        correct: 0,
        explanation: {
          en: "Systems integration testing verifies that individual system components work together as intended when integrated. It focuses on interfaces between components, data flow, and overall system behavior to ensure the integrated system meets requirements.",
          es: "Las pruebas de integración de sistemas verifican que los componentes individuales del sistema funcionen juntos como se pretende cuando se integran. Se enfoca en interfaces entre componentes, flujo de datos y comportamiento general del sistema para asegurar que el sistema integrado cumpla los requisitos.",
          de: "Systemintegrationstesting überprüft, dass einzelne Systemkomponenten bei der Integration wie beabsichtigt zusammenarbeiten. Es konzentriert sich auf Schnittstellen zwischen Komponenten, Datenfluss und das Gesamtsystemverhalten, um sicherzustellen, dass das integrierte System die Anforderungen erfüllt.",
          nl: "Systeemintegratietesten verifieert dat individuele systeemcomponenten samenwerken zoals bedoeld wanneer ze geïntegreerd worden. Het richt zich op interfaces tussen componenten, gegevensstroom en algemeen systeemgedrag om ervoor te zorgen dat het geïntegreerde systeem voldoet aan vereisten."
        }
      },
      {
        question: {
          en: "What is systems scalability?",
          es: "¿Qué es la escalabilidad de sistemas?",
          de: "Was ist Systemskalierbarkeit?",
          nl: "Wat is systeemschaalbaarheid?"
        },
        options: [
          { en: "Ability of system to handle increased workload by adding resources without redesigning architecture", es: "Capacidad del sistema para manejar carga de trabajo aumentada agregando recursos sin rediseñar la arquitectura", de: "Fähigkeit des Systems, erhöhte Arbeitsbelastung durch Hinzufügen von Ressourcen zu bewältigen, ohne die Architektur neu zu entwerfen", nl: "Vermogen van het systeem om verhoogde werkbelasting te hanteren door middelen toe te voegen zonder de architectuur opnieuw te ontwerpen" },
          { en: "Physical size adjustment", es: "Ajuste de tamaño físico", de: "Physische Größenanpassung", nl: "Fysieke grootte-aanpassing" },
          { en: "User interface resizing", es: "Redimensionamiento de interfaz de usuario", de: "Größenänderung der Benutzeroberfläche", nl: "Gebruikersinterface hergrootte" },
          { en: "Data compression", es: "Compresión de datos", de: "Datenkompression", nl: "Datacompressie" }
        ],
        correct: 0,
        explanation: {
          en: "Systems scalability refers to the capability of a system to handle a growing amount of work or its potential to be enlarged to accommodate growth. It can be achieved through horizontal scaling (adding more machines) or vertical scaling (adding more power to existing machines).",
          es: "La escalabilidad de sistemas se refiere a la capacidad de un sistema para manejar una cantidad creciente de trabajo o su potencial para ser ampliado para acomodar el crecimiento. Puede lograrse a través de escalamiento horizontal (agregar más máquinas) o escalamiento vertical (agregar más poder a máquinas existentes).",
          de: "Systemskalierbarkeit bezieht sich auf die Fähigkeit eines Systems, eine wachsende Arbeitsmenge zu bewältigen oder sein Potenzial, zur Aufnahme des Wachstums erweitert zu werden. Dies kann durch horizontale Skalierung (mehr Maschinen hinzufügen) oder vertikale Skalierung (mehr Leistung zu bestehenden Maschinen hinzufügen) erreicht werden.",
          nl: "Systeemschaalbaarheid verwijst naar het vermogen van een systeem om een groeiende hoeveelheid werk te hanteren of zijn potentieel om uitgebreid te worden om groei te accommoderen. Het kan bereikt worden door horizontale schaling (meer machines toevoegen) of verticale schaling (meer kracht toevoegen aan bestaande machines)."
        }
      },
      {
        question: {
          en: "What is system security engineering?",
          es: "¿Qué es la ingeniería de seguridad de sistemas?",
          de: "Was ist Systemsicherheitstechnik?",
          nl: "Wat is systeemveiligheidstechniek?"
        },
        options: [
          { en: "Systematic approach to protect systems from threats and ensure confidentiality, integrity, and availability", es: "Enfoque sistemático para proteger sistemas de amenazas y asegurar confidencialidad, integridad y disponibilidad", de: "Systematischer Ansatz zum Schutz von Systemen vor Bedrohungen und zur Gewährleistung von Vertraulichkeit, Integrität und Verfügbarkeit", nl: "Systematische benadering om systemen te beschermen tegen bedreigingen en vertrouwelijkheid, integriteit en beschikbaarheid te waarborgen" },
          { en: "Password management only", es: "Solo gestión de contraseñas", de: "Nur Passwort-Management", nl: "Alleen wachtwoordbeheer" },
          { en: "Physical locks and barriers", es: "Cerraduras físicas y barreras", de: "Physische Schlösser und Barrieren", nl: "Fysieke sloten en barrières" },
          { en: "Antivirus software installation", es: "Instalación de software antivirus", de: "Antivirus-Software-Installation", nl: "Antivirus software-installatie" }
        ],
        correct: 0,
        explanation: {
          en: "System security engineering is the systematic application of engineering principles to design and implement security measures that protect systems from threats while maintaining the required levels of confidentiality, integrity, availability, and other security properties.",
          es: "La ingeniería de seguridad de sistemas es la aplicación sistemática de principios de ingeniería para diseñar e implementar medidas de seguridad que protejan los sistemas de amenazas mientras mantienen los niveles requeridos de confidencialidad, integridad, disponibilidad y otras propiedades de seguridad.",
          de: "Systemsicherheitstechnik ist die systematische Anwendung von Ingenieurprinzipien zum Design und zur Implementierung von Sicherheitsmaßnahmen, die Systeme vor Bedrohungen schützen, während die erforderlichen Ebenen von Vertraulichkeit, Integrität, Verfügbarkeit und anderen Sicherheitseigenschaften aufrechterhalten werden.",
          nl: "Systeemveiligheidstechniek is de systematische toepassing van technische principes om veiligheidsmaatregelen te ontwerpen en implementeren die systemen beschermen tegen bedreigingen terwijl de vereiste niveaus van vertrouwelijkheid, integriteit, beschikbaarheid en andere veiligheidseigenschappen behouden blijven."
        }
      },
      {
        question: {
          en: "What is systems cost-effectiveness analysis?",
          es: "¿Qué es el análisis de costo-efectividad de sistemas?",
          de: "Was ist Systemkosten-Wirksamkeits-Analyse?",
          nl: "Wat is systeemkosten-effectiviteitsanalyse?"
        },
        options: [
          { en: "Economic evaluation comparing relative costs and benefits of different system alternatives", es: "Evaluación económica comparando costos y beneficios relativos de diferentes alternativas de sistema", de: "Wirtschaftliche Bewertung, die relative Kosten und Nutzen verschiedener Systemalternativen vergleicht", nl: "Economische evaluatie die relatieve kosten en baten van verschillende systeemalt ernatieven vergelijkt" },
          { en: "Only cost accounting", es: "Solo contabilidad de costos", de: "Nur Kostenrechnung", nl: "Alleen kostenboekhoud ing" },
          { en: "Profit maximization only", es: "Solo maximización de ganancias", de: "Nur Gewinnmaximierung", nl: "Alleen winstmaximalisatie" },
          { en: "Budget allocation", es: "Asignación de presupuesto", de: "Budgetzuweisung", nl: "Budgettoewijzing" }
        ],
        correct: 0,
        explanation: {
          en: "Systems cost-effectiveness analysis is a systematic approach to comparing the relative costs and benefits of different system alternatives to determine the most efficient use of resources. It considers lifecycle costs against system effectiveness measures to inform decision-making.",
          es: "El análisis de costo-efectividad de sistemas es un enfoque sistemático para comparar los costos y beneficios relativos de diferentes alternativas de sistema para determinar el uso más eficiente de recursos. Considera costos del ciclo de vida contra medidas de efectividad del sistema para informar la toma de decisiones.",
          de: "Systemkosten-Wirksamkeits-Analyse ist ein systematischer Ansatz zum Vergleich der relativen Kosten und Nutzen verschiedener Systemalternativen, um die effizienteste Ressourcennutzung zu bestimmen. Sie berücksichtigt Lebenszykluskosten gegenüber Systemwirksamkeitsmaßen zur Entscheidungsfindung.",
          nl: "Systeemkosten-effectiviteitsanalyse is een systematische benadering om de relatieve kosten en baten van verschillende systeemalt ernatieven te vergelijken om het meest efficiënte gebruik van middelen te bepalen. Het beschouwt levenscycluskosten tegen systeemeffectiviteitsmaat regelen om besluitvorming te informeren."
        }
      },
      {
        question: {
          en: "What is continuous improvement in systems engineering?",
          es: "¿Qué es la mejora continua en ingeniería de sistemas?",
          de: "Was ist kontinuierliche Verbesserung in der Systemtechnik?",
          nl: "Wat is continue verbetering in systeemtechniek?"
        },
        options: [
          { en: "Ongoing effort to improve systems through incremental and breakthrough improvements", es: "Esfuerzo continuo para mejorar sistemas a través de mejoras incrementales y revolucionarias", de: "Fortlaufende Anstrengung zur Verbesserung von Systemen durch inkrementelle und bahnbrechende Verbesserungen", nl: "Voortdurende inspanning om systemen te verbeteren door incrementele en doorbraakverbeteringen" },
          { en: "Only bug fixes", es: "Solo correcciones de errores", de: "Nur Fehlerbehebungen", nl: "Alleen bugfixes" },
          { en: "Scheduled maintenance", es: "Mantenimiento programado", de: "Planmäßige Wartung", nl: "Gepland onderhoud" },
          { en: "Version updates only", es: "Solo actualizaciones de versión", de: "Nur Versionsupdates", nl: "Alleen versie-updates" }
        ],
        correct: 0,
        explanation: {
          en: "Continuous improvement in systems engineering is an ongoing effort to enhance system performance, quality, and value through incremental and breakthrough improvements. It involves systematic measurement, analysis, and optimization of system processes and outcomes.",
          es: "La mejora continua en ingeniería de sistemas es un esfuerzo continuo para mejorar el rendimiento del sistema, calidad y valor a través de mejoras incrementales y revolucionarias. Involucra medición sistemática, análisis y optimización de procesos y resultados del sistema.",
          de: "Kontinuierliche Verbesserung in der Systemtechnik ist eine fortlaufende Anstrengung zur Verbesserung der Systemleistung, -qualität und des -werts durch inkrementelle und bahnbrechende Verbesserungen. Sie beinhaltet systematische Messung, Analyse und Optimierung von Systemprozessen und -ergebnissen.",
          nl: "Continue verbetering in systeemtechniek is een voortdurende inspanning om systeemprestaties, kwaliteit en waarde te verbeteren door incrementele en doorbraakverbeteringen. Het omvat systematische meting, analyse en optimalisatie van systeemprocessen en -uitkomsten."
        }
      },
      {
        question: {
          en: "What is technology readiness level (TRL) assessment?",
          es: "¿Qué es la evaluación del nivel de preparación tecnológica (TRL)?",
          de: "Was ist die Bewertung des Technologie-Reifegrads (TRL)?",
          nl: "Wat is technologie gereedheids niveau (TRL) beoordeling?"
        },
        options: [
          { en: "Systematic metric to assess maturity level of particular technology during acquisition process", es: "Métrica sistemática para evaluar el nivel de madurez de tecnología particular durante el proceso de adquisición", de: "Systematische Metrik zur Bewertung des Reifegrads bestimmter Technologien während des Beschaffungsprozesses", nl: "Systematische maatstaf om het rijpheidsniveau van bepaalde technologie tijdens het aanschaffingsproces te beoordelen" },
          { en: "Employee skill assessment", es: "Evaluación de habilidades del empleado", de: "Mitarbeiterfähigkeitsbewertung", nl: "Werknemersvaardigheidsbeoordeling" },
          { en: "System complexity rating", es: "Calificación de complejidad del sistema", de: "Systemkomplexitätsbewertung", nl: "Systeemcomplexiteitsbeoordeling" },
          { en: "User satisfaction metric", es: "Métrica de satisfacción del usuario", de: "Benutzerzufriedenheitsmetrik", nl: "Gebruikerstevredenheidsm aatstaf" }
        ],
        correct: 0,
        explanation: {
          en: "Technology Readiness Level (TRL) is a systematic measurement system used to assess the maturity level of a particular technology. TRL ranges from 1 (basic principles observed) to 9 (system proven in operational environment), helping inform technology development and acquisition decisions.",
          es: "El Nivel de Preparación Tecnológica (TRL) es un sistema de medición sistemático usado para evaluar el nivel de madurez de una tecnología particular. TRL va de 1 (principios básicos observados) a 9 (sistema probado en ambiente operacional), ayudando a informar decisiones de desarrollo y adquisición tecnológica.",
          de: "Technology Readiness Level (TRL) ist ein systematisches Messsystem zur Bewertung des Reifegrads einer bestimmten Technologie. TRL reicht von 1 (grundlegende Prinzipien beobachtet) bis 9 (System in operationeller Umgebung bewährt) und hilft bei Technologieentwicklungs- und Beschaffungsentscheidungen.",
          nl: "Technology Readiness Level (TRL) is een systematisch meetsysteem dat gebruikt wordt om het rijpheidsniveau van een bepaalde technologie te beoordelen. TRL varieert van 1 (basisprincipes waargenomen) tot 9 (systeem bewezen in operationele omgeving), wat helpt bij technologie-ontwikkeling en aanschaffingsbeslissingen."
        }
      },
      {
        question: {
          en: "What is systems architecture design pattern?",
          es: "¿Qué es un patrón de diseño de arquitectura de sistemas?",
          de: "Was ist ein Systemarchitektur-Designmuster?",
          nl: "Wat is een systeemarchitectuur ontwerppatroon?"
        },
        options: [
          { en: "Reusable solution template for commonly occurring system architecture problems", es: "Plantilla de solución reutilizable para problemas de arquitectura de sistemas que ocurren comúnmente", de: "Wiederverwendbare Lösungsvorlage für häufig auftretende Systemarchitektur-Probleme", nl: "Herbruikbare oplossingssjabloon voor veelvoorkomende systeemarchitectuurproblemen" },
          { en: "Visual design aesthetics", es: "Estética de diseño visual", de: "Visuelles Design-Ästhetik", nl: "Visuele ontwerpesthetiek" },
          { en: "Color schemes only", es: "Solo esquemas de colores", de: "Nur Farbschemata", nl: "Alleen kleurenschema's" },
          { en: "User interface layouts", es: "Diseños de interfaz de usuario", de: "Benutzerschnittstellenlayouts", nl: "Gebruikersinterface-lay-outs" }
        ],
        correct: 0,
        explanation: {
          en: "A systems architecture design pattern is a reusable solution template that addresses commonly occurring problems in system architecture design. Examples include layered architecture, client-server, service-oriented architecture (SOA), and microservices patterns.",
          es: "Un patrón de diseño de arquitectura de sistemas es una plantilla de solución reutilizable que aborda problemas que ocurren comúnmente en el diseño de arquitectura de sistemas. Los ejemplos incluyen arquitectura en capas, cliente-servidor, arquitectura orientada a servicios (SOA) y patrones de microservicios.",
          de: "Ein Systemarchitektur-Designmuster ist eine wiederverwendbare Lösungsvorlage, die häufig auftretende Probleme im Systemarchitektur-Design angeht. Beispiele sind geschichtete Architektur, Client-Server, service-orientierte Architektur (SOA) und Microservices-Muster.",
          nl: "Een systeemarchitectuur ontwerppatroon is een herbruikbare oplossingssjabloon die veelvoorkomende problemen in systeemarchitectuurontwerp aanpakt. Voorbeelden zijn gelaagde architectuur, client-server, service-georiënteerde architectuur (SOA) en microservices patronen."
        }
      },
      {
        question: {
          en: "What is systems engineering data management?",
          es: "¿Qué es la gestión de datos de ingeniería de sistemas?",
          de: "Was ist Systemtechnik-Datenmanagement?",
          nl: "Wat is systeemtechniek datamanagement?"
        },
        options: [
          { en: "Systematic control and organization of data throughout system development lifecycle", es: "Control y organización sistemática de datos durante el ciclo de vida de desarrollo del sistema", de: "Systematische Kontrolle und Organisation von Daten während des Systementwicklungslebenszyklus", nl: "Systematische controle en organisatie van data gedurende de systeemontwikkeling slevenscyclus" },
          { en: "Database administration only", es: "Solo administración de base de datos", de: "Nur Datenbankadministration", nl: "Alleen databasebeheer" },
          { en: "File storage management", es: "Gestión de almacenamiento de archivos", de: "Dateispeicher-Management", nl: "Bestandsopslagbeheer" },
          { en: "Backup procedures only", es: "Solo procedimientos de respaldo", de: "Nur Backup-Verfahren", nl: "Alleen back-upprocedures" }
        ],
        correct: 0,
        explanation: {
          en: "Systems engineering data management encompasses the systematic control, organization, and governance of all data generated and used throughout the system development lifecycle. It includes data quality, security, accessibility, and traceability to support effective decision-making.",
          es: "La gestión de datos de ingeniería de sistemas abarca el control, organización y gobernanza sistemática de todos los datos generados y usados durante el ciclo de vida de desarrollo del sistema. Incluye calidad de datos, seguridad, accesibilidad y trazabilidad para apoyar la toma de decisiones efectiva.",
          de: "Systemtechnik-Datenmanagement umfasst die systematische Kontrolle, Organisation und Governance aller Daten, die während des Systementwicklungslebenszyklus generiert und verwendet werden. Es beinhaltet Datenqualität, -sicherheit, -zugänglichkeit und -rückverfolgbarkeit zur Unterstützung effektiver Entscheidungsfindung.",
          nl: "Systeemtechniek datamanagement omvat de systematische controle, organisatie en governance van alle data gegenereerd en gebruikt gedurende de systeemontwikkelingslevenscyclus. Het omvat datakwaliteit, beveiliging, toegankelijkheid en traceerbaarheid ter ondersteuning van effectieve besluitvorming."
        }
      },
      {
        question: {
          en: "What is systems engineering knowledge management?",
          es: "¿Qué es la gestión del conocimiento en ingeniería de sistemas?",
          de: "Was ist Wissensmanagement in der Systemtechnik?",
          nl: "Wat is kennismanagement in systeemtechniek?"
        },
        options: [
          { en: "Systematic approach to capture, organize, and share engineering knowledge and lessons learned", es: "Enfoque sistemático para capturar, organizar y compartir conocimiento de ingeniería y lecciones aprendidas", de: "Systematischer Ansatz zur Erfassung, Organisation und Weitergabe von Ingenieurwissen und gelernten Lektionen", nl: "Systematische benadering om technische kennis en geleerde lessen vast te leggen, organiseren en delen" },
          { en: "Training programs only", es: "Solo programas de entrenamiento", de: "Nur Trainingsprogramme", nl: "Alleen trainingsprogramma's" },
          { en: "Document storage", es: "Almacenamiento de documentos", de: "Dokumentenspeicherung", nl: "Documentopslag" },
          { en: "Expert consultation", es: "Consulta de expertos", de: "Expertenberatung", nl: "Expertadvies" }
        ],
        correct: 0,
        explanation: {
          en: "Systems engineering knowledge management is the systematic approach to capturing, organizing, storing, and sharing engineering knowledge, best practices, and lessons learned across projects and organizations to improve system development effectiveness and prevent recurring problems.",
          es: "La gestión del conocimiento en ingeniería de sistemas es el enfoque sistemático para capturar, organizar, almacenar y compartir conocimiento de ingeniería, mejores prácticas y lecciones aprendidas a través de proyectos y organizaciones para mejorar la efectividad del desarrollo de sistemas y prevenir problemas recurrentes.",
          de: "Wissensmanagement in der Systemtechnik ist der systematische Ansatz zur Erfassung, Organisation, Speicherung und Weitergabe von Ingenieurwissen, bewährten Praktiken und gelernten Lektionen über Projekte und Organisationen hinweg, um die Systementwicklungseffektivität zu verbessern und wiederkehrende Probleme zu verhindern.",
          nl: "Kennismanagement in systeemtechniek is de systematische benadering om technische kennis, beste praktijken en geleerde lessen vast te leggen, organiseren, opslaan en delen over projecten en organisaties heen om systeemontwikkelingseffectiviteit te verbeteren en terugkerende problemen te voorkomen."
        }
      },
      {
        question: {
          en: "What is agile systems engineering?",
          es: "¿Qué es la ingeniería de sistemas ágil?",
          de: "Was ist agile Systemtechnik?",
          nl: "Wat is agile systeemtechniek?"
        },
        options: [
          { en: "Adaptive approach combining systems engineering principles with agile development methodologies", es: "Enfoque adaptativo combinando principios de ingeniería de sistemas con metodologías de desarrollo ágil", de: "Adaptiver Ansatz, der Systemtechnik-Prinzipien mit agilen Entwicklungsmethoden kombiniert", nl: "Adaptieve benadering die systeemtechniekprincipes combineert met agile ontwikkelingsmethodologieën" },
          { en: "Fast system deployment only", es: "Solo despliegue rápido del sistema", de: "Nur schnelle Systembereitstellung", nl: "Alleen snelle systeemimplementatie" },
          { en: "Flexible hardware design", es: "Diseño de hardware flexible", de: "Flexibles Hardware-Design", nl: "Flexibel hardware-ontwerp" },
          { en: "Quick decision making", es: "Toma de decisiones rápida", de: "Schnelle Entscheidungsfindung", nl: "Snelle besluitvorming" }
        ],
        correct: 0,
        explanation: {
          en: "Agile systems engineering is an adaptive approach that applies agile principles and practices to systems engineering processes. It emphasizes iterative development, early and continuous stakeholder engagement, flexibility in requirements, and rapid response to change while maintaining systems engineering rigor.",
          es: "La ingeniería de sistemas ágil es un enfoque adaptativo que aplica principios y prácticas ágiles a procesos de ingeniería de sistemas. Enfatiza desarrollo iterativo, participación temprana y continua de las partes interesadas, flexibilidad en requisitos y respuesta rápida al cambio mientras mantiene el rigor de la ingeniería de sistemas.",
          de: "Agile Systemtechnik ist ein adaptiver Ansatz, der agile Prinzipien und Praktiken auf Systemtechnikprozesse anwendet. Sie betont iterative Entwicklung, frühe und kontinuierliche Stakeholder-Einbindung, Flexibilität bei Anforderungen und schnelle Reaktion auf Änderungen, während die Systemtechnik-Strenge beibehalten wird.",
          nl: "Agile systeemtechniek is een adaptieve benadering die agile principes en praktijken toepast op systeemtechniekprocessen. Het benadrukt iteratieve ontwikkeling, vroege en continue stakeholderbetrokkenheid, flexibiliteit in vereisten en snelle reactie op verandering terwijl systeemtechnieknauwkeurigheid behouden blijft."
        }
      },
      {
        question: {
          en: "What is systems engineering capability maturity?",
          es: "¿Qué es la madurez de capacidad de ingeniería de sistemas?",
          de: "Was ist Systemtechnik-Fähigkeitsreife?",
          nl: "Wat is systeemtechniek capaciteitsrijpheid?"
        },
        options: [
          { en: "Assessment framework measuring organization's ability to consistently apply systems engineering processes", es: "Marco de evaluación que mide la capacidad de la organización para aplicar consistentemente procesos de ingeniería de sistemas", de: "Bewertungsrahmen zur Messung der Fähigkeit einer Organisation, Systemtechnikprozesse konsistent anzuwenden", nl: "Beoordelingskader dat het vermogen van een organisatie meet om systeemtechniekprocessen consistent toe te passen" },
          { en: "Individual skill certification", es: "Certificación de habilidades individuales", de: "Individuelle Fähigkeitszertifizierung", nl: "Individuele vaardigheidscertificering" },
          { en: "Technology advancement level", es: "Nivel de avance tecnológico", de: "Technologie-Fortschrittsniveau", nl: "Technologie-ontwikkelingsniveau" },
          { en: "System performance metrics", es: "Métricas de rendimiento del sistema", de: "Systemleistungsmetriken", nl: "Systeemprestatiem aatstaven" }
        ],
        correct: 0,
        explanation: {
          en: "Systems engineering capability maturity is an assessment framework that measures an organization's ability to consistently and effectively apply systems engineering processes and practices. It typically includes levels from initial/ad-hoc to optimizing, helping organizations improve their systems engineering capabilities.",
          es: "La madurez de capacidad de ingeniería de sistemas es un marco de evaluación que mide la capacidad de una organización para aplicar consistente y efectivamente procesos y prácticas de ingeniería de sistemas. Típicamente incluye niveles desde inicial/ad-hoc hasta optimización, ayudando a las organizaciones a mejorar sus capacidades de ingeniería de sistemas.",
          de: "Systemtechnik-Fähigkeitsreife ist ein Bewertungsrahmen, der die Fähigkeit einer Organisation misst, Systemtechnikprozesse und -praktiken konsistent und effektiv anzuwenden. Sie umfasst typischerweise Stufen von initial/ad-hoc bis optimierend und hilft Organisationen, ihre Systemtechnikfähigkeiten zu verbessern.",
          nl: "Systeemtechniek capaciteitsrijpheid is een beoordelingskader dat het vermogen van een organisatie meet om systeemtechniekprocessen en -praktijken consistent en effectief toe te passen. Het omvat typisch niveaus van initieel/ad-hoc tot optimalisatie, wat organisaties helpt hun systeemtechniekcapaciteiten te verbeteren."
        }
      },
      {
        question: {
          en: "What is systems engineering process improvement?",
          es: "¿Qué es la mejora de procesos de ingeniería de sistemas?",
          de: "Was ist Systemtechnik-Prozessverbesserung?",
          nl: "Wat is systeemtechniek procesverbetering?"
        },
        options: [
          { en: "Systematic effort to enhance effectiveness and efficiency of systems engineering processes", es: "Esfuerzo sistemático para mejorar la efectividad y eficiencia de los procesos de ingeniería de sistemas", de: "Systematische Anstrengung zur Verbesserung der Wirksamkeit und Effizienz von Systemtechnikprozessen", nl: "Systematische inspanning om de effectiviteit en efficiëntie van systeemtechniekprocessen te verbeteren" },
          { en: "Software updates only", es: "Solo actualizaciones de software", de: "Nur Software-Updates", nl: "Alleen software-updates" },
          { en: "Team reorganization", es: "Reorganización del equipo", de: "Team-Reorganisation", nl: "Team reorganisatie" },
          { en: "Budget optimization", es: "Optimización de presupuesto", de: "Budget-Optimierung", nl: "Budgetoptimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Systems engineering process improvement is the systematic effort to enhance the effectiveness, efficiency, and maturity of systems engineering processes and practices. It involves measuring current performance, identifying improvement opportunities, and implementing changes to achieve better outcomes.",
          es: "La mejora de procesos de ingeniería de sistemas es el esfuerzo sistemático para mejorar la efectividad, eficiencia y madurez de los procesos y prácticas de ingeniería de sistemas. Involucra medir el rendimiento actual, identificar oportunidades de mejora e implementar cambios para lograr mejores resultados.",
          de: "Systemtechnik-Prozessverbesserung ist die systematische Anstrengung zur Verbesserung der Wirksamkeit, Effizienz und Reife von Systemtechnikprozessen und -praktiken. Sie beinhaltet die Messung der aktuellen Leistung, Identifizierung von Verbesserungsmöglichkeiten und Implementierung von Änderungen zur Erzielung besserer Ergebnisse.",
          nl: "Systeemtechniek procesverbetering is de systematische inspanning om de effectiviteit, efficiëntie en rijpheid van systeemtechniekprocessen en -praktijken te verbeteren. Het omvat het meten van huidige prestaties, identificeren van verbetermogelijkheden en implementeren van veranderingen om betere resultaten te bereiken."
        }
      },
      {
        question: {
          en: "What is failure mode and effects analysis (FMEA)?",
          es: "¿Qué es el análisis de modo de falla y efectos (FMEA)?",
          de: "Was ist Fehlermöglichkeits- und Einflussanalyse (FMEA)?",
          nl: "Wat is faalwijze- en effectanalyse (FMEA)?"
        },
        options: [
          { en: "Systematic method for evaluating potential failure modes and their impact on system performance", es: "Método sistemático para evaluar modos potenciales de falla y su impacto en el rendimiento del sistema", de: "Systematische Methode zur Bewertung potenzieller Ausfallarten und ihrer Auswirkungen auf die Systemleistung", nl: "Systematische methode voor het evalueren van potentiële faalwijzen en hun impact op systeemprestaties" },
          { en: "Financial risk evaluation", es: "Evaluación de riesgo financiero", de: "Finanzielle Risikobewertung", nl: "Financiële risicobeoordeling" },
          { en: "User behavior analysis", es: "Análisis de comportamiento del usuario", de: "Analyse des Benutzerverhaltens", nl: "Gebruikersgedraganalyse" },
          { en: "Market research study", es: "Estudio de investigación de mercado", de: "Marktforschungsstudie", nl: "Marktonderzoek studie" }
        ],
        correct: 0,
        explanation: {
          en: "FMEA is a systematic, proactive method for evaluating a process to identify where and how it might fail and assess the relative impact of different failures, helping prioritize actions to reduce failure occurrence or impact.",
          es: "FMEA es un método sistemático y proactivo para evaluar un proceso para identificar dónde y cómo podría fallar y evaluar el impacto relativo de diferentes fallas, ayudando a priorizar acciones para reducir la ocurrencia o impacto de fallas.",
          de: "FMEA ist eine systematische, proaktive Methode zur Bewertung eines Prozesses, um zu identifizieren, wo und wie er versagen könnte, und die relative Auswirkung verschiedener Ausfälle zu bewerten, um Maßnahmen zur Reduzierung des Ausfallauftretens oder -impacts zu priorisieren.",
          nl: "FMEA is een systematische, proactieve methode voor het evalueren van een proces om te identificeren waar en hoe het zou kunnen falen en de relatieve impact van verschillende falingen te beoordelen, wat helpt bij het prioriteren van acties om faalfrequentie of impact te verminderen."
        }
      },
      {
        question: {
          en: "What is design for manufacturability (DFM)?",
          es: "¿Qué es el diseño para manufacturabilidad (DFM)?",
          de: "Was ist Design for Manufacturability (DFM)?",
          nl: "Wat is design for manufacturability (DFM)?"
        },
        options: [
          { en: "Design approach optimizing product design for efficient and cost-effective manufacturing processes", es: "Enfoque de diseño que optimiza el diseño del producto para procesos de fabricación eficientes y rentables", de: "Designansatz zur Optimierung des Produktdesigns für effiziente und kosteneffektive Fertigungsprozesse", nl: "Ontwerpbenadering die productontwerp optimaliseert voor efficiënte en kosteneffectieve productieprocessen" },
          { en: "Manufacturing equipment design", es: "Diseño de equipos de fabricación", de: "Fertigungsanlagen-Design", nl: "Productieapparatuur ontwerp" },
          { en: "Factory layout planning", es: "Planificación de diseño de fábrica", de: "Fabrik-Layout-Planung", nl: "Fabriekslayout planning" },
          { en: "Product marketing strategy", es: "Estrategia de marketing del producto", de: "Produktmarketing-Strategie", nl: "Productmarketingstrategie" }
        ],
        correct: 0,
        explanation: {
          en: "Design for Manufacturability (DFM) is an engineering design approach that optimizes the design of products to make them easier to manufacture, assemble, and test while maintaining quality and reducing costs throughout the production process.",
          es: "El Diseño para Manufacturabilidad (DFM) es un enfoque de diseño de ingeniería que optimiza el diseño de productos para hacerlos más fáciles de fabricar, ensamblar y probar mientras mantiene la calidad y reduce costos durante el proceso de producción.",
          de: "Design for Manufacturability (DFM) ist ein Ingenieur-Designansatz, der das Design von Produkten optimiert, um sie einfacher herzustellen, zusammenzubauen und zu testen, während Qualität beibehalten und Kosten im Produktionsprozess reduziert werden.",
          nl: "Design for Manufacturability (DFM) is een technische ontwerpbenadering die het ontwerp van producten optimaliseert om ze gemakkelijker te maken om te produceren, assembleren en testen terwijl kwaliteit behouden blijft en kosten gedurende het productieproces worden verminderd."
        }
      },
      {
        question: {
          en: "What is systems of systems engineering (SoSE)?",
          es: "¿Qué es la ingeniería de sistemas de sistemas (SoSE)?",
          de: "Was ist Systems of Systems Engineering (SoSE)?",
          nl: "Wat is systems of systems engineering (SoSE)?"
        },
        options: [
          { en: "Engineering discipline focused on coupling collection of systems to achieve capabilities not attainable by individual systems", es: "Disciplina de ingeniería enfocada en acoplar colección de sistemas para lograr capacidades no alcanzables por sistemas individuales", de: "Ingenieursdisziplin, die sich auf die Kopplung einer Sammlung von Systemen konzentriert, um Fähigkeiten zu erreichen, die von einzelnen Systemen nicht erreichbar sind", nl: "Ingenieursdiscipline gericht op het koppelen van een verzameling systemen om capaciteiten te bereiken die niet haalbaar zijn door individuele systemen" },
          { en: "Managing multiple identical systems", es: "Gestionar múltiples sistemas idénticos", de: "Verwaltung mehrerer identischer Systeme", nl: "Beheren van meerdere identieke systemen" },
          { en: "System backup and redundancy", es: "Respaldo y redundancia del sistema", de: "System-Backup und Redundanz", nl: "Systeemback-up en redundantie" },
          { en: "System version control", es: "Control de versiones del sistema", de: "System-Versionskontrolle", nl: "Systeemversiecontrole" }
        ],
        correct: 0,
        explanation: {
          en: "Systems of Systems Engineering (SoSE) is an engineering discipline that focuses on the coupling of a collection of dedicated systems to achieve a capability or performance that is not possible with the individual systems alone, addressing challenges like operational independence, managerial independence, evolutionary development, and emergent behavior.",
          es: "La Ingeniería de Sistemas de Sistemas (SoSE) es una disciplina de ingeniería que se enfoca en el acoplamiento de una colección de sistemas dedicados para lograr una capacidad o rendimiento que no es posible con los sistemas individuales solos, abordando desafíos como independencia operacional, independencia gerencial, desarrollo evolutivo y comportamiento emergente.",
          de: "Systems of Systems Engineering (SoSE) ist eine Ingenieursdisziplin, die sich auf die Kopplung einer Sammlung spezialisierter Systeme konzentriert, um eine Fähigkeit oder Leistung zu erreichen, die mit den einzelnen Systemen allein nicht möglich ist, und Herausforderungen wie operative Unabhängigkeit, verwaltungsmäßige Unabhängigkeit, evolutionäre Entwicklung und emergentes Verhalten angeht.",
          nl: "Systems of Systems Engineering (SoSE) is een ingenieursdiscipline die zich richt op het koppelen van een verzameling toegewijde systemen om een capaciteit of prestatie te bereiken die niet mogelijk is met de individuele systemen alleen, waarbij uitdagingen zoals operationele onafhankelijkheid, managementonafhankelijkheid, evolutionaire ontwikkeling en emergent gedrag worden aangepakt."
        }
      },
      {
        question: {
          en: "What is requirements engineering in systems development?",
          es: "¿Qué es la ingeniería de requisitos en desarrollo de sistemas?",
          de: "Was ist Requirements Engineering in der Systementwicklung?",
          nl: "Wat is requirements engineering in systeemontwikkeling?"
        },
        options: [
          { en: "Systematic process of discovering, analyzing, documenting, and maintaining system requirements", es: "Proceso sistemático de descubrir, analizar, documentar y mantener requisitos del sistema", de: "Systematischer Prozess des Entdeckens, Analysierens, Dokumentierens und Wartens von Systemanforderungen", nl: "Systematisch proces van ontdekken, analyseren, documenteren en onderhouden van systeemvereisten" },
          { en: "Technical specification writing", es: "Redacción de especificaciones técnicas", de: "Technische Spezifikationsschreibung", nl: "Technische specificatie schrijven" },
          { en: "Software coding standards", es: "Estándares de codificación de software", de: "Software-Codierungsstandards", nl: "Software programmeerstandaarden" },
          { en: "Hardware installation procedures", es: "Procedimientos de instalación de hardware", de: "Hardware-Installationsverfahren", nl: "Hardware-installatieprocedures" }
        ],
        correct: 0,
        explanation: {
          en: "Requirements engineering is a systematic and disciplined approach to the specification and management of requirements with the goal of understanding user or customer needs and translating them into clear, complete, and testable system requirements that guide system design and development.",
          es: "La ingeniería de requisitos es un enfoque sistemático y disciplinado para la especificación y gestión de requisitos con el objetivo de entender las necesidades del usuario o cliente y traducirlas en requisitos del sistema claros, completos y comprobables que guíen el diseño y desarrollo del sistema.",
          de: "Requirements Engineering ist ein systematischer und disziplinierter Ansatz zur Spezifikation und Verwaltung von Anforderungen mit dem Ziel, Benutzer- oder Kundenbedürfnisse zu verstehen und sie in klare, vollständige und testbare Systemanforderungen zu übersetzen, die Systemdesign und -entwicklung leiten.",
          nl: "Requirements engineering is een systematische en gedisciplineerde benadering voor de specificatie en het beheer van vereisten met het doel om gebruikers- of klantbehoeften te begrijpen en deze te vertalen naar duidelijke, volledige en testbare systeemvereisten die systeemontwerp en -ontwikkeling leiden."
        }
      },
      {
        question: {
          en: "What is system optimization in engineering?",
          es: "¿Qué es la optimización de sistemas en ingeniería?",
          de: "Was ist Systemoptimierung im Ingenieurwesen?",
          nl: "Wat is systeemoptimalisatie in engineering?"
        },
        options: [
          { en: "Process of making system as effective and functional as possible within given constraints", es: "Proceso de hacer el sistema tan efectivo y funcional como sea posible dentro de restricciones dadas", de: "Prozess, ein System so effektiv und funktional wie möglich innerhalb gegebener Beschränkungen zu machen", nl: "Proces van het maken van een systeem zo effectief en functioneel mogelijk binnen gegeven beperkingen" },
          { en: "Speed improvement only", es: "Solo mejora de velocidad", de: "Nur Geschwindigkeitsverbesserung", nl: "Alleen snelheidsverbetering" },
          { en: "Cost reduction only", es: "Solo reducción de costos", de: "Nur Kostenreduzierung", nl: "Alleen kostenreductie" },
          { en: "Size minimization only", es: "Solo minimización de tamaño", de: "Nur Größenminimierung", nl: "Alleen grootteminimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "System optimization is the process of finding the best solution among all feasible solutions to maximize or minimize system performance criteria while satisfying constraints, often involving trade-offs between competing objectives like cost, performance, reliability, and time.",
          es: "La optimización de sistemas es el proceso de encontrar la mejor solución entre todas las soluciones factibles para maximizar o minimizar criterios de rendimiento del sistema mientras satisface restricciones, a menudo involucrando compromisos entre objetivos competidores como costo, rendimiento, confiabilidad y tiempo.",
          de: "Systemoptimierung ist der Prozess, die beste Lösung unter allen machbaren Lösungen zu finden, um Systemleistungskriterien zu maximieren oder zu minimieren, während Beschränkungen erfüllt werden, oft unter Einbeziehung von Kompromissen zwischen konkurrierenden Zielen wie Kosten, Leistung, Zuverlässigkeit und Zeit.",
          nl: "Systeemoptimalisatie is het proces van het vinden van de beste oplossing onder alle haalbare oplossingen om systeemprestatiecriteria te maximaliseren of minimaliseren terwijl beperkingen worden voldaan, vaak met afwegingen tussen concurrerende doelstellingen zoals kosten, prestaties, betrouwbaarheid en tijd."
        }
      },
      {
        question: {
          en: "What is systems acquisition management?",
          es: "¿Qué es la gestión de adquisición de sistemas?",
          de: "Was ist Systemerwerbsmanagement?",
          nl: "Wat is systeemverwerving management?"
        },
        options: [
          { en: "Management approach for acquiring complex systems through systematic planning, execution, and control", es: "Enfoque de gestión para adquirir sistemas complejos a través de planificación, ejecución y control sistemáticos", de: "Managementansatz für den Erwerb komplexer Systeme durch systematische Planung, Ausführung und Kontrolle", nl: "Managementbenadering voor het verwerven van complexe systemen door systematische planning, uitvoering en controle" },
          { en: "Purchasing office supplies", es: "Comprar suministros de oficina", de: "Büromaterial kaufen", nl: "Kantoorbenodigdheden kopen" },
          { en: "Software licensing management", es: "Gestión de licencias de software", de: "Software-Lizenz-Management", nl: "Software licentiebeheer" },
          { en: "Equipment maintenance contracts", es: "Contratos de mantenimiento de equipos", de: "Gerätewartungsverträge", nl: "Apparatuuronderhoudscontracten" }
        ],
        correct: 0,
        explanation: {
          en: "Systems acquisition management is the discipline that applies management principles, processes, and procedures throughout a system's acquisition lifecycle to ensure successful delivery of complex systems that meet user requirements within cost, schedule, and performance constraints.",
          es: "La gestión de adquisición de sistemas es la disciplina que aplica principios, procesos y procedimientos de gestión a lo largo del ciclo de vida de adquisición de un sistema para asegurar la entrega exitosa de sistemas complejos que cumplan los requisitos del usuario dentro de restricciones de costo, cronograma y rendimiento.",
          de: "Systemerwerbsmanagement ist die Disziplin, die Managementprinzipien, -prozesse und -verfahren während des gesamten Erwerbslebenszyklus eines Systems anwendet, um die erfolgreiche Lieferung komplexer Systeme sicherzustellen, die Benutzeranforderungen innerhalb von Kosten-, Zeit- und Leistungsbeschränkungen erfüllen.",
          nl: "Systeemverwerving management is de discipline die managementprincipes, -processen en -procedures toepast gedurende de gehele verwervingslevenscyclus van een systeem om succesvolle levering van complexe systemen te waarborgen die voldoen aan gebruikerseisen binnen kosten-, planning- en prestatiebeperkingen."
        }
      },
      {
        question: {
          en: "What is technical performance measurement (TPM)?",
          es: "¿Qué es la medición de rendimiento técnico (TPM)?",
          de: "Was ist technische Leistungsmessung (TPM)?",
          nl: "Wat is technische prestatiemeting (TPM)?"
        },
        options: [
          { en: "Systematic measurement of actual system performance against planned performance parameters", es: "Medición sistemática del rendimiento real del sistema contra parámetros de rendimiento planificados", de: "Systematische Messung der tatsächlichen Systemleistung gegen geplante Leistungsparameter", nl: "Systematische meting van werkelijke systeemprestaties tegen geplande prestatieparameters" },
          { en: "Employee productivity metrics", es: "Métricas de productividad del empleado", de: "Mitarbeiterproduktivitätsmetriken", nl: "Werknemersproductiviteitsmetrieken" },
          { en: "Financial performance indicators", es: "Indicadores de rendimiento financiero", de: "Finanzleistungsindikatoren", nl: "Financiële prestatie-indicatoren" },
          { en: "Marketing effectiveness measures", es: "Medidas de efectividad de marketing", de: "Marketing-Effektivitätsmaßnahmen", nl: "Marketing effectiviteitsmaatregelen" }
        ],
        correct: 0,
        explanation: {
          en: "Technical Performance Measurement (TPM) is the ongoing assessment of system performance parameters against established targets and thresholds to provide early warning of potential problems and guide corrective actions during system development and operation.",
          es: "La Medición de Rendimiento Técnico (TPM) es la evaluación continua de parámetros de rendimiento del sistema contra objetivos y umbrales establecidos para proporcionar alerta temprana de problemas potenciales y guiar acciones correctivas durante el desarrollo y operación del sistema.",
          de: "Technische Leistungsmessung (TPM) ist die fortlaufende Bewertung von Systemleistungsparametern gegen etablierte Ziele und Schwellenwerte, um Frühwarnung vor potenziellen Problemen zu bieten und Korrekturmaßnahmen während Systementwicklung und -betrieb zu leiten.",
          nl: "Technische Prestatiemeting (TPM) is de voortdurende beoordeling van systeemprestatieparameters tegen vastgestelde doelen en drempels om vroege waarschuwing van potentiële problemen te bieden en corrigerende acties te leiden tijdens systeemontwikkeling en -werking."
        }
      },
      {
        question: {
          en: "What is system integration and test (SIT)?",
          es: "¿Qué es la integración y prueba de sistemas (SIT)?",
          de: "Was ist Systemintegration und Test (SIT)?",
          nl: "Wat is systeemintegratie en test (SIT)?"
        },
        options: [
          { en: "Phase where system components are combined and tested to verify they work together as intended", es: "Fase donde los componentes del sistema se combinan y prueban para verificar que funcionen juntos como se pretende", de: "Phase, in der Systemkomponenten kombiniert und getestet werden, um zu überprüfen, dass sie wie beabsichtigt zusammenarbeiten", nl: "Fase waarin systeemcomponenten worden gecombineerd en getest om te verifiëren dat ze samenwerken zoals bedoeld" },
          { en: "Software installation process", es: "Proceso de instalación de software", de: "Software-Installationsprozess", nl: "Software-installatieproces" },
          { en: "Hardware assembly only", es: "Solo ensamblaje de hardware", de: "Nur Hardware-Montage", nl: "Alleen hardware-assemblage" },
          { en: "User training program", es: "Programa de entrenamiento de usuario", de: "Benutzerschulungsprogramm", nl: "Gebruikersopleidingsprogramma" }
        ],
        correct: 0,
        explanation: {
          en: "System Integration and Test (SIT) is a critical phase in system development where individual components and subsystems are incrementally combined and tested to verify interfaces, functionality, and performance meet requirements before system-level testing and deployment.",
          es: "La Integración y Prueba de Sistemas (SIT) es una fase crítica en el desarrollo de sistemas donde componentes individuales y subsistemas se combinan incrementalmente y se prueban para verificar que interfaces, funcionalidad y rendimiento cumplan requisitos antes de pruebas a nivel de sistema y despliegue.",
          de: "Systemintegration und Test (SIT) ist eine kritische Phase in der Systementwicklung, in der einzelne Komponenten und Subsysteme schrittweise kombiniert und getestet werden, um Schnittstellen, Funktionalität und Leistung zu überprüfen, bevor Systemtests und Bereitstellung erfolgen.",
          nl: "Systeemintegratie en Test (SIT) is een kritieke fase in systeemontwikkeling waarbij individuele componenten en subsystemen incrementeel worden gecombineerd en getest om interfaces, functionaliteit en prestaties te verifiëren voordat systeemniveau testen en uitrol plaatsvinden."
        }
      },
      {
        question: {
          en: "What is logistics systems engineering?",
          es: "¿Qué es la ingeniería de sistemas logísticos?",
          de: "Was ist Logistiksystem-Engineering?",
          nl: "Wat is logistieke systeemtechniek?"
        },
        options: [
          { en: "Engineering approach to design and optimize integrated logistics support systems throughout system lifecycle", es: "Enfoque de ingeniería para diseñar y optimizar sistemas de soporte logístico integrados durante el ciclo de vida del sistema", de: "Ingenieuransatz zur Gestaltung und Optimierung integrierter Logistik-Unterstützungssysteme während des Systemlebenszyklus", nl: "Ingenieursbenadering om geïntegreerde logistieke ondersteuningssystemen te ontwerpen en optimaliseren gedurende de systeemlevenscyclus" },
          { en: "Warehouse management only", es: "Solo gestión de almacén", de: "Nur Lagerverwaltung", nl: "Alleen magazijnbeheer" },
          { en: "Transportation planning", es: "Planificación de transporte", de: "Transportplanung", nl: "Transportplanning" },
          { en: "Inventory control systems", es: "Sistemas de control de inventario", de: "Inventarkontrollsysteme", nl: "Voorraadcontrolesystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Logistics systems engineering applies systems engineering principles to design, develop, and integrate logistics support systems that ensure effective and efficient sustainment of operational systems throughout their lifecycle, including maintenance, supply chain, training, and support infrastructure.",
          es: "La ingeniería de sistemas logísticos aplica principios de ingeniería de sistemas para diseñar, desarrollar e integrar sistemas de soporte logístico que aseguren el sostenimiento efectivo y eficiente de sistemas operacionales durante su ciclo de vida, incluyendo mantenimiento, cadena de suministro, entrenamiento e infraestructura de soporte.",
          de: "Logistiksystem-Engineering wendet Systemtechnikprinzipien an, um Logistik-Unterstützungssysteme zu entwerfen, zu entwickeln und zu integrieren, die effektive und effiziente Aufrechterhaltung operativer Systeme während ihres Lebenszyklus gewährleisten, einschließlich Wartung, Lieferkette, Schulung und Unterstützungsinfrastruktur.",
          nl: "Logistieke systeemtechniek past systeemtechniekprincipes toe om logistieke ondersteuningssystemen te ontwerpen, ontwikkelen en integreren die effectieve en efficiënte instandhouding van operationele systemen gedurende hun levenscyclus waarborgen, inclusief onderhoud, toeleveringsketen, training en ondersteunende infrastructuur."
        }
      },
      {
        question: {
          en: "What is system evolution and modernization?",
          es: "¿Qué es la evolución y modernización de sistemas?",
          de: "Was ist Systementwicklung und Modernisierung?",
          nl: "Wat is systeemevolutie en modernisering?"
        },
        options: [
          { en: "Systematic approach to upgrading and adapting existing systems to meet changing requirements and new technologies", es: "Enfoque sistemático para actualizar y adaptar sistemas existentes para cumplir requisitos cambiantes y nuevas tecnologías", de: "Systematischer Ansatz zur Aktualisierung und Anpassung bestehender Systeme, um sich ändernde Anforderungen und neue Technologien zu erfüllen", nl: "Systematische benadering om bestaande systemen te upgraden en aan te passen om veranderende vereisten en nieuwe technologieën te voldoen" },
          { en: "Complete system replacement", es: "Reemplazo completo del sistema", de: "Vollständiger Systemersatz", nl: "Volledige systeemvervanging" },
          { en: "Software patches only", es: "Solo parches de software", de: "Nur Software-Patches", nl: "Alleen software-patches" },
          { en: "Hardware upgrades only", es: "Solo actualizaciones de hardware", de: "Nur Hardware-Upgrades", nl: "Alleen hardware-upgrades" }
        ],
        correct: 0,
        explanation: {
          en: "System evolution and modernization is the systematic process of updating, enhancing, and adapting existing systems to maintain relevance, improve performance, integrate new technologies, and meet changing user requirements while preserving valuable existing capabilities and minimizing disruption.",
          es: "La evolución y modernización de sistemas es el proceso sistemático de actualizar, mejorar y adaptar sistemas existentes para mantener relevancia, mejorar rendimiento, integrar nuevas tecnologías y cumplir requisitos cambiantes del usuario mientras preserva capacidades existentes valiosas y minimiza interrupciones.",
          de: "Systementwicklung und Modernisierung ist der systematische Prozess der Aktualisierung, Verbesserung und Anpassung bestehender Systeme, um Relevanz zu erhalten, Leistung zu verbessern, neue Technologien zu integrieren und sich ändernde Benutzeranforderungen zu erfüllen, während wertvolle bestehende Fähigkeiten erhalten und Störungen minimiert werden.",
          nl: "Systeemevolutie en modernisering is het systematische proces van het bijwerken, verbeteren en aanpassen van bestaande systemen om relevantie te behouden, prestaties te verbeteren, nieuwe technologieën te integreren en veranderende gebruikerseisen te voldoen terwijl waardevolle bestaande capaciteiten behouden blijven en verstoring wordt geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is systems engineering metrics and measurement?",
          es: "¿Qué son las métricas y medición de ingeniería de sistemas?",
          de: "Was sind Systemtechnik-Metriken und Messung?",
          nl: "Wat zijn systeemtechniek metrieken en meting?"
        },
        options: [
          { en: "Quantitative measures used to assess and track performance of systems engineering processes and outcomes", es: "Medidas cuantitativas usadas para evaluar y rastrear el rendimiento de procesos y resultados de ingeniería de sistemas", de: "Quantitative Maßnahmen zur Bewertung und Verfolgung der Leistung von Systemtechnikprozessen und -ergebnissen", nl: "Kwantitatieve maatregelen gebruikt om prestaties van systeemtechniekprocessen en -uitkomsten te beoordelen en volgen" },
          { en: "Physical system measurements", es: "Mediciones físicas del sistema", de: "Physische Systemmessungen", nl: "Fysieke systeemmetingen" },
          { en: "Cost accounting procedures", es: "Procedimientos de contabilidad de costos", de: "Kostenrechnungsverfahren", nl: "Kostenboekhoudprocedures" },
          { en: "Time tracking methods", es: "Métodos de seguimiento de tiempo", de: "Zeitmessungsmethoden", nl: "Tijdvolging methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Systems engineering metrics and measurement provide quantitative data to assess the effectiveness, efficiency, and quality of systems engineering processes, track progress toward objectives, identify areas for improvement, and support data-driven decision making throughout the system lifecycle.",
          es: "Las métricas y medición de ingeniería de sistemas proporcionan datos cuantitativos para evaluar la efectividad, eficiencia y calidad de procesos de ingeniería de sistemas, rastrear progreso hacia objetivos, identificar áreas de mejora y apoyar toma de decisiones basada en datos durante el ciclo de vida del sistema.",
          de: "Systemtechnik-Metriken und Messung liefern quantitative Daten zur Bewertung der Effektivität, Effizienz und Qualität von Systemtechnikprozessen, Verfolgung des Fortschritts in Richtung Ziele, Identifizierung von Verbesserungsbereichen und Unterstützung datengestützter Entscheidungsfindung während des Systemlebenszyklus.",
          nl: "Systeemtechniek metrieken en meting bieden kwantitatieve gegevens om de effectiviteit, efficiëntie en kwaliteit van systeemtechniekprocessen te beoordelen, voortgang naar doelstellingen te volgen, verbetergebieden te identificeren en datagedreven besluitvorming te ondersteunen gedurende de systeemlevenscyclus."
        }
      },
      {
        question: {
          en: "What is systems architecture evaluation?",
          es: "¿Qué es la evaluación de arquitectura de sistemas?",
          de: "Was ist Systemarchitekturbewertung?",
          nl: "Wat is systeemarchitectuur evaluatie?"
        },
        options: [
          { en: "Systematic assessment of system architecture against quality attributes and stakeholder concerns", es: "Evaluación sistemática de arquitectura de sistemas contra atributos de calidad y preocupaciones de las partes interesadas", de: "Systematische Bewertung der Systemarchitektur gegen Qualitätsattribute und Stakeholder-Anliegen", nl: "Systematische beoordeling van systeemarchitectuur tegen kwaliteitskenmerken en stakeholder zorgen" },
          { en: "Building architecture review", es: "Revisión de arquitectura de edificios", de: "Gebäudearchitektur-Überprüfung", nl: "Gebouwarchitectuurbeoordeling" },
          { en: "Software code review", es: "Revisión de código de software", de: "Software-Code-Review", nl: "Software code review" },
          { en: "Network topology analysis", es: "Análisis de topología de red", de: "Netzwerktopologie-Analyse", nl: "Netwerktopologie-analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Systems architecture evaluation is a systematic approach to analyze and assess system architectures against defined quality attributes (performance, reliability, security, maintainability) and stakeholder concerns to identify risks, trade-offs, and improvement opportunities before implementation.",
          es: "La evaluación de arquitectura de sistemas es un enfoque sistemático para analizar y evaluar arquitecturas de sistemas contra atributos de calidad definidos (rendimiento, confiabilidad, seguridad, mantenibilidad) y preocupaciones de las partes interesadas para identificar riesgos, compromisos y oportunidades de mejora antes de la implementación.",
          de: "Systemarchitekturbewertung ist ein systematischer Ansatz zur Analyse und Bewertung von Systemarchitekturen gegen definierte Qualitätsattribute (Leistung, Zuverlässigkeit, Sicherheit, Wartbarkeit) und Stakeholder-Anliegen, um Risiken, Kompromisse und Verbesserungsmöglichkeiten vor der Implementierung zu identifizieren.",
          nl: "Systeemarchitectuur evaluatie is een systematische benadering om systeemarchitecturen te analyseren en beoordelen tegen gedefinieerde kwaliteitskenmerken (prestaties, betrouwbaarheid, beveiliging, onderhoudbaarheid) en stakeholder zorgen om risico's, afwegingen en verbeteringsmogelijkheden te identificeren voor implementatie."
        }
      },
      {
        question: {
          en: "What is earned value management (EVM) in systems projects?",
          es: "¿Qué es la gestión de valor ganado (EVM) en proyectos de sistemas?",
          de: "Was ist Earned Value Management (EVM) in Systemprojekten?",
          nl: "Wat is earned value management (EVM) in systeemprojecten?"
        },
        options: [
          { en: "Project management technique integrating scope, schedule, and cost measurements to assess project performance", es: "Técnica de gestión de proyectos que integra mediciones de alcance, cronograma y costo para evaluar el rendimiento del proyecto", de: "Projektmanagement-Technik, die Umfang-, Zeit- und Kostenmessungen integriert, um Projektleistung zu bewerten", nl: "Projectmanagementtechniek die omvang-, planning- en kostenmetingen integreert om projectprestaties te beoordelen" },
          { en: "Employee reward system", es: "Sistema de recompensas para empleados", de: "Mitarbeiter-Belohnungssystem", nl: "Werknemersbeloningssysteem" },
          { en: "Financial profit calculation", es: "Cálculo de ganancias financieras", de: "Finanzielle Gewinnberechnung", nl: "Financiële winstberekening" },
          { en: "Performance bonus structure", es: "Estructura de bonificaciones por rendimiento", de: "Leistungsbonusstruktur", nl: "Prestatiebonusstructuur" }
        ],
        correct: 0,
        explanation: {
          en: "Earned Value Management (EVM) is a project management methodology that integrates project scope, schedule, and cost measurements to provide objective performance indicators, enabling early identification of project issues and supporting predictive analysis of final project outcomes.",
          es: "La Gestión de Valor Ganado (EVM) es una metodología de gestión de proyectos que integra mediciones de alcance, cronograma y costo del proyecto para proporcionar indicadores objetivos de rendimiento, permitiendo identificación temprana de problemas del proyecto y apoyando análisis predictivo de resultados finales del proyecto.",
          de: "Earned Value Management (EVM) ist eine Projektmanagement-Methodik, die Projektumfang, -zeitplan und -kostenmessungen integriert, um objektive Leistungsindikatoren zu liefern, frühe Identifizierung von Projektproblemen zu ermöglichen und prädiktive Analyse der endgültigen Projektergebnisse zu unterstützen.",
          nl: "Earned Value Management (EVM) is een projectmanagementmethodologie die projectomvang, -planning en -kostenmetingen integreert om objectieve prestatie-indicatoren te bieden, vroege identificatie van projectproblemen mogelijk te maken en voorspellende analyse van uiteindelijke projectresultaten te ondersteunen."
        }
      },
      {
        question: {
          en: "What is systems engineering standards and best practices?",
          es: "¿Qué son los estándares y mejores prácticas de ingeniería de sistemas?",
          de: "Was sind Systemtechnik-Standards und bewährte Praktiken?",
          nl: "Wat zijn systeemtechniek standaarden en beste praktijken?"
        },
        options: [
          { en: "Established guidelines, methodologies, and frameworks for consistent and effective systems engineering practices", es: "Directrices establecidas, metodologías y marcos para prácticas consistentes y efectivas de ingeniería de sistemas", de: "Etablierte Richtlinien, Methoden und Rahmenwerke für konsistente und effektive Systemtechnikpraktiken", nl: "Gevestigde richtlijnen, methodologieën en frameworks voor consistente en effectieve systeemtechniekpraktijken" },
          { en: "Software coding conventions", es: "Convenciones de codificación de software", de: "Software-Codierungskonventionen", nl: "Software programmeerconventies" },
          { en: "Quality assurance testing", es: "Pruebas de aseguramiento de calidad", de: "Qualitätssicherungstests", nl: "Kwaliteitsborgingstesten" },
          { en: "Project management tools", es: "Herramientas de gestión de proyectos", de: "Projektmanagement-Tools", nl: "Projectmanagementtools" }
        ],
        correct: 0,
        explanation: {
          en: "Systems engineering standards and best practices provide established guidelines, methodologies, processes, and frameworks (such as IEEE 15288, ISO/IEC 15288, INCOSE practices) that promote consistent, disciplined, and effective systems engineering approaches across organizations and projects.",
          es: "Los estándares y mejores prácticas de ingeniería de sistemas proporcionan directrices establecidas, metodologías, procesos y marcos (como IEEE 15288, ISO/IEC 15288, prácticas de INCOSE) que promueven enfoques de ingeniería de sistemas consistentes, disciplinados y efectivos a través de organizaciones y proyectos.",
          de: "Systemtechnik-Standards und bewährte Praktiken liefern etablierte Richtlinien, Methoden, Prozesse und Rahmenwerke (wie IEEE 15288, ISO/IEC 15288, INCOSE-Praktiken), die konsistente, disziplinierte und effektive Systemtechnikansätze über Organisationen und Projekte hinweg fördern.",
          nl: "Systeemtechniek standaarden en beste praktijken bieden gevestigde richtlijnen, methodologieën, processen en frameworks (zoals IEEE 15288, ISO/IEC 15288, INCOSE-praktijken) die consistente, gedisciplineerde en effectieve systeemtechniekbenaderingen over organisaties en projecten heen bevorderen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/engineering', level10);
  }
})();
