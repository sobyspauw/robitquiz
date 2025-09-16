// Robotics - Level 7: Advanced Manipulation and Human-Robot Interaction
window.addLevel('mind-bender/robotics', {
  name: { 
    en: 'Advanced Manipulation & Human Interaction', 
    es: 'Manipulación Avanzada e Interacción Humana', 
    de: 'Erweiterte Manipulation & Mensch-Interaktion', 
    nl: 'Geavanceerde Manipulatie & Menselijke Interactie' 
  },
  questions: [
    {
      question: {
        en: "What is the primary advantage of compliant control over rigid position control in robotic manipulation?",
        es: "¿Cuál es la principal ventaja del control adaptable sobre el control de posición rígida en manipulación robótica?",
        de: "Was ist der Hauptvorteil der nachgiebigen Steuerung gegenüber starrer Positionssteuerung in der Robotermanipulation?",
        nl: "Wat is het primaire voordeel van buigzame besturing ten opzichte van rigide positiebesturing in robotmanipulatie?"
      },
      options: [
        { en: "Safe interaction with uncertain environments", es: "Interacción segura con entornos inciertos", de: "Sichere Interaktion mit unsicheren Umgebungen", nl: "Veilige interactie met onzekere omgevingen" },
        { en: "Higher speed operation only", es: "Solo operación de mayor velocidad", de: "Nur höhere Geschwindigkeit", nl: "Alleen hogere snelheid operatie" },
        { en: "Reduced computational requirements", es: "Requisitos computacionales reducidos", de: "Reduzierte Rechenanforderungen", nl: "Verminderde computationele vereisten" },
        { en: "Lower manufacturing costs", es: "Menores costos de fabricación", de: "Niedrigere Herstellungskosten", nl: "Lagere productiekosten" }
      ],
      correct: 0,
      explanation: {
        en: "Compliant control allows robots to adapt to contact forces and environmental uncertainties, enabling safe interaction with objects, humans, and unstructured environments without causing damage.",
        es: "El control adaptable permite a los robots adaptarse a fuerzas de contacto e incertidumbres ambientales, permitiendo interacción segura con objetos, humanos y entornos no estructurados sin causar daño.",
        de: "Nachgiebige Steuerung ermöglicht es Robotern, sich an Kontaktkräfte und Umgebungsunsicherheiten anzupassen und sichere Interaktion mit Objekten, Menschen und unstrukturierten Umgebungen ohne Schäden zu ermöglichen.",
        nl: "Buigzame besturing stelt robots in staat zich aan te passen aan contactkrachten en omgevingsonzekerheden, wat veilige interactie met objecten, mensen en ongestructureerde omgevingen zonder schade mogelijk maakt."
      }
    },
    {
      question: {
        en: "Which sensing modality is most critical for dexterous robotic grasping of unknown objects?",
        es: "¿Qué modalidad sensorial es más crítica para el agarre robótico diestro de objetos desconocidos?",
        de: "Welche Sensormodalität ist am kritischsten für das geschickte robotische Greifen unbekannter Objekte?",
        nl: "Welke zintuiglijke modaliteit is het meest kritiek voor behendig robotisch grijpen van onbekende objecten?"
      },
      options: [
        { en: "Tactile feedback and force sensing", es: "Retroalimentación táctil y detección de fuerza", de: "Taktile Rückmeldung und Kraftmessung", nl: "Tactiele feedback en krachtsensoring" },
        { en: "Visual recognition only", es: "Solo reconocimiento visual", de: "Nur visuelle Erkennung", nl: "Alleen visuele herkenning" },
        { en: "Audio pattern analysis", es: "Análisis de patrones de audio", de: "Audio-Musteranalyse", nl: "Audio patroon analyse" },
        { en: "Temperature measurement", es: "Medición de temperatura", de: "Temperaturmessung", nl: "Temperatuurmeting" }
      ],
      correct: 0,
      explanation: {
        en: "Tactile feedback and force sensing provide essential information about object properties, grip stability, and contact forces that visual systems cannot detect, enabling adaptive grasping strategies.",
        es: "La retroalimentación táctil y detección de fuerza proporcionan información esencial sobre propiedades del objeto, estabilidad del agarre y fuerzas de contacto que los sistemas visuales no pueden detectar, permitiendo estrategias adaptativas de agarre.",
        de: "Taktile Rückmeldung und Kraftmessung liefern wesentliche Informationen über Objekteigenschaften, Griffstabilität und Kontaktkräfte, die visuelle Systeme nicht erkennen können, und ermöglichen adaptive Greifstrategien.",
        nl: "Tactiele feedback en krachtsensoring bieden essentiële informatie over objecteigenschappen, gripstabiliteit en contactkrachten die visuele systemen niet kunnen detecteren, wat adaptieve grijpstrategieën mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is the fundamental principle behind impedance control in robotic manipulation?",
        es: "¿Cuál es el principio fundamental detrás del control de impedancia en manipulación robótica?",
        de: "Was ist das grundlegende Prinzip hinter der Impedanzsteuerung in der Robotermanipulation?",
        nl: "Wat is het fundamentele principe achter impedantiebesturing in robotmanipulatie?"
      },
      options: [
        { en: "Regulating the relationship between force and motion", es: "Regular la relación entre fuerza y movimiento", de: "Regulierung der Beziehung zwischen Kraft und Bewegung", nl: "Reguleren van de relatie tussen kracht en beweging" },
        { en: "Maximizing end-effector velocity", es: "Maximizar velocidad del efector final", de: "Maximierung der Endeffektorgeschwindigkeit", nl: "Maximaliseren van eindeffector snelheid" },
        { en: "Minimizing energy consumption", es: "Minimizar consumo de energía", de: "Minimierung des Energieverbrauchs", nl: "Minimaliseren van energieverbruik" },
        { en: "Increasing payload capacity", es: "Aumentar capacidad de carga", de: "Erhöhung der Nutzlastkapazität", nl: "Verhogen van laadcapaciteit" }
      ],
      correct: 0,
      explanation: {
        en: "Impedance control regulates the dynamic relationship between forces and motions, allowing robots to exhibit desired mechanical behaviors like stiffness, damping, and inertia for safe interaction.",
        es: "El control de impedancia regula la relación dinámica entre fuerzas y movimientos, permitiendo que los robots exhiban comportamientos mecánicos deseados como rigidez, amortiguación e inercia para interacción segura.",
        de: "Die Impedanzsteuerung reguliert die dynamische Beziehung zwischen Kräften und Bewegungen und ermöglicht es Robotern, gewünschte mechanische Verhaltensweisen wie Steifigkeit, Dämpfung und Trägheit für sichere Interaktion zu zeigen.",
        nl: "Impedantiebesturing reguleert de dynamische relatie tussen krachten en bewegingen, waardoor robots gewenste mechanische gedragingen kunnen vertonen zoals stijfheid, demping en traagheid voor veilige interactie."
      }
    },
    {
      question: {
        en: "Which machine learning approach is most effective for teaching robots complex manipulation skills from human demonstrations?",
        es: "¿Qué enfoque de aprendizaje automático es más efectivo para enseñar a robots habilidades complejas de manipulación a partir de demostraciones humanas?",
        de: "Welcher maschinelle Lernansatz ist am effektivsten, um Robotern komplexe Manipulationsfähigkeiten aus menschlichen Demonstrationen beizubringen?",
        nl: "Welke machine learning benadering is het meest effectief voor het leren van complexe manipulatievaardigheden aan robots uit menselijke demonstraties?"
      },
      options: [
        { en: "Imitation Learning and Behavioral Cloning", es: "Aprendizaje por Imitación y Clonación de Comportamiento", de: "Nachahmungslernen und Verhaltensklonen", nl: "Imitatie Leren en Gedragskloning" },
        { en: "Supervised Classification", es: "Clasificación Supervisada", de: "Überwachte Klassifikation", nl: "Begeleid Classificeren" },
        { en: "Unsupervised Clustering", es: "Agrupamiento No Supervisado", de: "Unüberwachtes Clustering", nl: "Onbegeleid Clusteren" },
        { en: "Linear Regression", es: "Regresión Lineal", de: "Lineare Regression", nl: "Lineaire Regressie" }
      ],
      correct: 0,
      explanation: {
        en: "Imitation learning allows robots to learn complex behaviors by observing and copying human demonstrations, capturing the nuanced skills that are difficult to program explicitly.",
        es: "El aprendizaje por imitación permite a los robots aprender comportamientos complejos observando y copiando demostraciones humanas, capturando las habilidades matizadas que son difíciles de programar explícitamente.",
        de: "Nachahmungslernen ermöglicht es Robotern, komplexe Verhaltensweisen durch Beobachten und Kopieren menschlicher Demonstrationen zu erlernen und die nuancierten Fähigkeiten zu erfassen, die schwer explizit zu programmieren sind.",
        nl: "Imitatie leren stelt robots in staat complexe gedragingen te leren door menselijke demonstraties te observeren en kopiëren, waarbij genuanceerde vaardigheden worden vastgelegd die moeilijk expliciet te programmeren zijn."
      }
    },
    {
      question: {
        en: "What is the primary challenge in developing social robots for elderly care applications?",
        es: "¿Cuál es el desafío principal en desarrollar robots sociales para aplicaciones de cuidado de ancianos?",
        de: "Was ist die Hauptherausforderung bei der Entwicklung sozialer Roboter für Altenpflege-Anwendungen?",
        nl: "Wat is de primaire uitdaging in het ontwikkelen van sociale robots voor ouderenzorg toepassingen?"
      },
      options: [
        { en: "Balancing autonomy with user acceptance and trust", es: "Equilibrar autonomía con aceptación del usuario y confianza", de: "Autonomie mit Benutzerakzeptanz und Vertrauen ausbalancieren", nl: "Autonomie balanceren met gebruikersacceptatie en vertrouwen" },
        { en: "Reducing manufacturing costs only", es: "Solo reducir costos de fabricación", de: "Nur Herstellungskosten reduzieren", nl: "Alleen productiekosten verlagen" },
        { en: "Increasing processing speed", es: "Aumentar velocidad de procesamiento", de: "Erhöhung der Verarbeitungsgeschwindigkeit", nl: "Verwerkingssnelheid verhogen" },
        { en: "Improving battery life", es: "Mejorar vida de batería", de: "Verbesserung der Batterielebensdauer", nl: "Batterijlevensduur verbeteren" }
      ],
      correct: 0,
      explanation: {
        en: "Social robots for elderly care must balance independence and assistance while building trust and acceptance, requiring careful design of interaction patterns, privacy protection, and user control.",
        es: "Los robots sociales para cuidado de ancianos deben equilibrar independencia y asistencia mientras construyen confianza y aceptación, requiriendo diseño cuidadoso de patrones de interacción, protección de privacidad y control del usuario.",
        de: "Soziale Roboter für die Altenpflege müssen Unabhängigkeit und Unterstützung ausbalancieren, während sie Vertrauen und Akzeptanz aufbauen, was sorgfältiges Design von Interaktionsmustern, Datenschutz und Benutzerkontrolle erfordert.",
        nl: "Sociale robots voor ouderenzorg moeten onafhankelijkheid en hulp balanceren terwijl ze vertrouwen en acceptatie opbouwen, wat zorgvuldig ontwerp van interactiepatronen, privacybescherming en gebruikerscontrole vereist."
      }
    },
    {
      question: {
        en: "Which control architecture is most suitable for multi-robot coordination in dynamic environments?",
        es: "¿Qué arquitectura de control es más adecuada para coordinación multi-robot en entornos dinámicos?",
        de: "Welche Steuerungsarchitektur ist am besten für Multi-Roboter-Koordination in dynamischen Umgebungen geeignet?",
        nl: "Welke besturingsarchitectuur is het meest geschikt voor multi-robot coördinatie in dynamische omgevingen?"
      },
      options: [
        { en: "Distributed consensus algorithms", es: "Algoritmos de consenso distribuido", de: "Verteilte Konsensalgorithmen", nl: "Gedistribueerde consensus algoritmen" },
        { en: "Centralized master-slave control", es: "Control centralizado maestro-esclavo", de: "Zentralisierte Master-Slave-Steuerung", nl: "Gecentraliseerde master-slave besturing" },
        { en: "Individual reactive behaviors only", es: "Solo comportamientos reactivos individuales", de: "Nur individuelle reaktive Verhaltensweisen", nl: "Alleen individuele reactieve gedragingen" },
        { en: "Pre-programmed sequential tasks", es: "Tareas secuenciales pre-programadas", de: "Vorprogrammierte sequentielle Aufgaben", nl: "Voorgeprogrammeerde sequentiële taken" }
      ],
      correct: 0,
      explanation: {
        en: "Distributed consensus algorithms enable robots to coordinate without a central controller, adapting to dynamic changes and robot failures while maintaining collective objectives through local communication.",
        es: "Los algoritmos de consenso distribuido permiten a los robots coordinarse sin un controlador central, adaptándose a cambios dinámicos y fallas de robots mientras mantienen objetivos colectivos a través de comunicación local.",
        de: "Verteilte Konsensalgorithmen ermöglichen es Robotern, sich ohne zentrale Steuerung zu koordinieren, sich an dynamische Änderungen und Roboterausfälle anzupassen und dabei kollektive Ziele durch lokale Kommunikation aufrechtzuerhalten.",
        nl: "Gedistribueerde consensus algoritmen stellen robots in staat te coördineren zonder centrale besturing, zich aanpassend aan dynamische veranderingen en robot storingen terwijl collectieve doelstellingen behouden blijven door lokale communicatie."
      }
    },
    {
      question: {
        en: "What is the primary function of haptic feedback in teleoperated robotic systems?",
        es: "¿Cuál es la función principal de la retroalimentación háptica en sistemas robóticos teleoperados?",
        de: "Was ist die Hauptfunktion der haptischen Rückmeldung in ferngesteuerten Robotersystemen?",
        nl: "Wat is de primaire functie van haptische feedback in op afstand bediende robotsystemen?"
      },
      options: [
        { en: "Transmit force and texture information to operator", es: "Transmitir información de fuerza y textura al operador", de: "Kraft- und Texturinformationen an Bediener übertragen", nl: "Kracht en textuurinformatie aan operator overbrengen" },
        { en: "Increase robot speed", es: "Aumentar velocidad del robot", de: "Robotergeschwindigkeit erhöhen", nl: "Robotsnelheid verhogen" },
        { en: "Reduce communication latency", es: "Reducir latencia de comunicación", de: "Kommunikationslatenz reduzieren", nl: "Communicatielatentie verminderen" },
        { en: "Improve visual display quality", es: "Mejorar calidad de visualización", de: "Anzeigenqualität verbessern", nl: "Visuele beeldkwaliteit verbeteren" }
      ],
      correct: 0,
      explanation: {
        en: "Haptic feedback provides the operator with force and tactile sensations from the remote robot, enabling more precise manipulation and better situational awareness in teleoperation tasks.",
        es: "La retroalimentación háptica proporciona al operador sensaciones de fuerza y táctiles del robot remoto, permitiendo manipulación más precisa y mejor conciencia situacional en tareas de teleoperación.",
        de: "Haptische Rückmeldung bietet dem Bediener Kraft- und Tastempfindungen vom entfernten Roboter und ermöglicht präzisere Manipulation und besseres Situationsbewusstsein bei Fernsteuerungsaufgaben.",
        nl: "Haptische feedback biedt de operator kracht- en tactiele sensaties van de op afstand bediende robot, wat meer precieze manipulatie en beter situationeel bewustzijn in teleoperatie taken mogelijk maakt."
      }
    },
    {
      question: {
        en: "Which approach is most effective for enabling robots to learn manipulation skills in unstructured environments?",
        es: "¿Qué enfoque es más efectivo para permitir que los robots aprendan habilidades de manipulación en entornos no estructurados?",
        de: "Welcher Ansatz ist am effektivsten, um Robotern das Erlernen von Manipulationsfähigkeiten in unstrukturierten Umgebungen zu ermöglichen?",
        nl: "Welke benadering is het meest effectief voor het in staat stellen van robots om manipulatievaardigheden te leren in ongestructureerde omgevingen?"
      },
      options: [
        { en: "Reinforcement learning with sim-to-real transfer", es: "Aprendizaje por refuerzo con transferencia sim-a-real", de: "Verstärkungslernen mit Sim-zu-Real-Transfer", nl: "Versterkend leren met sim-naar-real overdracht" },
        { en: "Rule-based programming only", es: "Solo programación basada en reglas", de: "Nur regelbasierte Programmierung", nl: "Alleen regel-gebaseerde programmering" },
        { en: "Pre-recorded motion sequences", es: "Secuencias de movimiento pregrabadas", de: "Voraufgezeichnete Bewegungssequenzen", nl: "Vooropgenomen bewegingssequenties" },
        { en: "Fixed trajectory planning", es: "Planificación de trayectoria fija", de: "Feste Bahnplanung", nl: "Vaste traject planning" }
      ],
      correct: 0,
      explanation: {
        en: "Reinforcement learning with simulation-to-reality transfer allows robots to learn through trial and error in safe simulated environments before applying skills to real-world scenarios.",
        es: "El aprendizaje por refuerzo con transferencia simulación-a-realidad permite a los robots aprender a través de ensayo y error en entornos simulados seguros antes de aplicar habilidades a escenarios del mundo real.",
        de: "Verstärkungslernen mit Simulation-zu-Realität-Transfer ermöglicht es Robotern, durch Versuch und Irrtum in sicheren simulierten Umgebungen zu lernen, bevor sie Fähigkeiten auf reale Szenarien anwenden.",
        nl: "Versterkend leren met simulatie-naar-realiteit overdracht stelt robots in staat te leren door vallen en opstaan in veilige gesimuleerde omgevingen voordat vaardigheden worden toegepast op echte scenario's."
      }
    },
    {
      question: {
        en: "What is the main advantage of using vision-language models in robotic task planning?",
        es: "¿Cuál es la principal ventaja de usar modelos de visión-lenguaje en planificación de tareas robóticas?",
        de: "Was ist der Hauptvorteil der Verwendung von Vision-Sprache-Modellen in der robotischen Aufgabenplanung?",
        nl: "Wat is het hoofdvoordeel van het gebruik van visie-taal modellen in robotische taakplanning?"
      },
      options: [
        { en: "Natural language instruction interpretation with visual context", es: "Interpretación de instrucciones en lenguaje natural con contexto visual", de: "Interpretation natürlicher Sprachanweisungen mit visuellem Kontext", nl: "Natuurlijke taal instructie interpretatie met visuele context" },
        { en: "Faster computation speed", es: "Mayor velocidad de computación", de: "Schnellere Rechengeschwindigkeit", nl: "Snellere rekensnelheid" },
        { en: "Lower memory requirements", es: "Menores requisitos de memoria", de: "Geringere Speicheranforderungen", nl: "Lagere geheugenvereisten" },
        { en: "Reduced sensor complexity", es: "Complejidad de sensores reducida", de: "Reduzierte Sensorkomplexität", nl: "Verminderde sensorcomplexiteit" }
      ],
      correct: 0,
      explanation: {
        en: "Vision-language models enable robots to understand natural language commands while grounding them in visual perception, allowing for more intuitive human-robot communication and flexible task specification.",
        es: "Los modelos de visión-lenguaje permiten a los robots entender comandos en lenguaje natural mientras los fundamentan en percepción visual, permitiendo comunicación humano-robot más intuitiva y especificación flexible de tareas.",
        de: "Vision-Sprache-Modelle ermöglichen es Robotern, natürliche Sprachbefehle zu verstehen, während sie diese in visueller Wahrnehmung verankern, was intuitivere Mensch-Roboter-Kommunikation und flexible Aufgabenspezifikation ermöglicht.",
        nl: "Visie-taal modellen stellen robots in staat natuurlijke taalcommando's te begrijpen terwijl ze deze gronden in visuele waarneming, wat meer intuïtieve mens-robot communicatie en flexibele taakspecificatie mogelijk maakt."
      }
    },
    {
      question: {
        en: "Which sensing technology is essential for enabling robots to perform precise assembly tasks in manufacturing?",
        es: "¿Qué tecnología de detección es esencial para permitir que los robots realicen tareas de ensamblaje precisas en manufactura?",
        de: "Welche Sensortechnologie ist für die Ermöglichung präziser Montageaufgaben von Robotern in der Fertigung wesentlich?",
        nl: "Welke sensing technologie is essentieel voor het in staat stellen van robots om precieze assemblagetaken uit te voeren in productie?"
      },
      options: [
        { en: "6-axis force/torque sensors", es: "Sensores de fuerza/torque de 6 ejes", de: "6-Achsen-Kraft-/Drehmomentsensoren", nl: "6-as kracht/koppel sensoren" },
        { en: "Color detection cameras only", es: "Solo cámaras de detección de color", de: "Nur Farberkennungskameras", nl: "Alleen kleurdetectie camera's" },
        { en: "Temperature sensors", es: "Sensores de temperatura", de: "Temperatursensoren", nl: "Temperatuursensoren" },
        { en: "Proximity sensors", es: "Sensores de proximidad", de: "Näherungssensoren", nl: "Nabijheidssensoren" }
      ],
      correct: 0,
      explanation: {
        en: "6-axis force/torque sensors provide precise measurements of forces and moments in all directions, enabling robots to detect misalignments, control contact forces, and perform delicate assembly operations.",
        es: "Los sensores de fuerza/torque de 6 ejes proporcionan mediciones precisas de fuerzas y momentos en todas las direcciones, permitiendo a los robots detectar desalineaciones, controlar fuerzas de contacto y realizar operaciones delicadas de ensamblaje.",
        de: "6-Achsen-Kraft-/Drehmomentsensoren liefern präzise Messungen von Kräften und Momenten in alle Richtungen und ermöglichen es Robotern, Fehlausrichtungen zu erkennen, Kontaktkräfte zu kontrollieren und empfindliche Montageoperationen durchzuführen.",
        nl: "6-as kracht/koppel sensoren bieden precieze metingen van krachten en momenten in alle richtingen, waardoor robots misal­lignments kunnen detecteren, contactkrachten kunnen beheersen en delicate assemblagbewerkingen kunnen uitvoeren."
      }
    },
    {
      question: {
        en: "What is the fundamental concept behind soft robotics design principles?",
        es: "¿Cuál es el concepto fundamental detrás de los principios de diseño de robótica blanda?",
        de: "Was ist das grundlegende Konzept hinter den Designprinzipien der Soft-Robotik?",
        nl: "Wat is het fundamentele concept achter zachte robotica ontwerpprincipes?"
      },
      options: [
        { en: "Bio-inspired flexible materials and continuous deformation", es: "Materiales flexibles bio-inspirados y deformación continua", de: "Bio-inspirierte flexible Materialien und kontinuierliche Verformung", nl: "Bio-geïnspireerde flexibele materialen en continue vervorming" },
        { en: "Rigid mechanical joints only", es: "Solo articulaciones mecánicas rígidas", de: "Nur starre mechanische Gelenke", nl: "Alleen rigide mechanische gewrichten" },
        { en: "High-speed actuator systems", es: "Sistemas de actuadores de alta velocidad", de: "Hochgeschwindigkeits-Aktuatorsysteme", nl: "Hogesnelheid actuator systemen" },
        { en: "Metal-based construction", es: "Construcción basada en metal", de: "Metallbasierte Konstruktion", nl: "Metaal-gebaseerde constructie" }
      ],
      correct: 0,
      explanation: {
        en: "Soft robotics uses flexible, bio-inspired materials that can continuously deform, enabling safe interaction with delicate objects and complex environments while mimicking natural biological systems.",
        es: "La robótica blanda usa materiales flexibles bio-inspirados que pueden deformarse continuamente, permitiendo interacción segura con objetos delicados y entornos complejos mientras imita sistemas biológicos naturales.",
        de: "Soft-Robotik verwendet flexible, bio-inspirierte Materialien, die sich kontinuierlich verformen können und sichere Interaktion mit empfindlichen Objekten und komplexen Umgebungen ermöglichen, während sie natürliche biologische Systeme nachahmen.",
        nl: "Zachte robotica gebruikt flexibele, bio-geïnspireerde materialen die continu kunnen vervormen, wat veilige interactie met delicate objecten en complexe omgevingen mogelijk maakt terwijl natuurlijke biologische systemen worden nagebootst."
      }
    },
    {
      question: {
        en: "Which factor is most critical for achieving robust grasping in cluttered environments?",
        es: "¿Qué factor es más crítico para lograr agarre robusto en entornos desordenados?",
        de: "Welcher Faktor ist am kritischsten für robustes Greifen in unübersichtlichen Umgebungen?",
        nl: "Welke factor is het meest kritiek voor het bereiken van robuust grijpen in rommelige omgevingen?"
      },
      options: [
        { en: "Multi-modal perception fusion and uncertainty estimation", es: "Fusión de percepción multimodal y estimación de incertidumbre", de: "Multimodale Wahrnehmungsfusion und Unsicherheitsschätzung", nl: "Multimodale waarneming fusie en onzekerheidsschatting" },
        { en: "Maximum gripper force application", es: "Aplicación de fuerza máxima del agarre", de: "Maximale Greiferraftanwendung", nl: "Maximale grijpkracht toepassing" },
        { en: "Fastest possible approach speed", es: "Velocidad de aproximación más rápida posible", de: "Schnellstmögliche Annäherungsgeschwindigkeit", nl: "Snelst mogelijke naderingssnelheid" },
        { en: "Simplest gripper design", es: "Diseño de agarre más simple", de: "Einfachstes Greiferdesign", nl: "Eenvoudigste grijper ontwerp" }
      ],
      correct: 0,
      explanation: {
        en: "Robust grasping in cluttered environments requires combining visual, tactile, and force information while estimating uncertainties to make informed decisions about grasp strategies and contact management.",
        es: "El agarre robusto en entornos desordenados requiere combinar información visual, táctil y de fuerza mientras se estiman incertidumbres para tomar decisiones informadas sobre estrategias de agarre y gestión de contacto.",
        de: "Robustes Greifen in unübersichtlichen Umgebungen erfordert die Kombination visueller, taktiler und Kraftinformationen bei gleichzeitiger Unsicherheitsschätzung, um fundierte Entscheidungen über Greifstrategien und Kontaktmanagement zu treffen.",
        nl: "Robuust grijpen in rommelige omgevingen vereist het combineren van visuele, tactiele en krachtinformatie terwijl onzekerheden worden geschat om geïnformeerde beslissingen te nemen over grijpstrategieën en contactbeheer."
      }
    },
    {
      question: {
        en: "What is the primary challenge in developing explainable AI for autonomous robotic decision-making?",
        es: "¿Cuál es el desafío principal en desarrollar IA explicable para toma de decisiones robóticas autónomas?",
        de: "Was ist die Hauptherausforderung bei der Entwicklung erklärbarer KI für autonome robotische Entscheidungsfindung?",
        nl: "Wat is de primaire uitdaging in het ontwikkelen van verklaarbare AI voor autonome robotische besluitvorming?"
      },
      options: [
        { en: "Translating complex neural network decisions into human-understandable reasoning", es: "Traducir decisiones complejas de redes neuronales en razonamiento comprensible para humanos", de: "Übersetzung komplexer neuronaler Netzwerkentscheidungen in menschenverständliche Argumentation", nl: "Vertalen van complexe neurale netwerk beslissingen naar menselijk begrijpbare redenering" },
        { en: "Increasing computational efficiency", es: "Aumentar eficiencia computacional", de: "Erhöhung der Recheneffizienz", nl: "Verhogen van computationele efficiëntie" },
        { en: "Reducing hardware costs", es: "Reducir costos de hardware", de: "Hardware-Kosten reduzieren", nl: "Hardware kosten verlagen" },
        { en: "Improving battery life", es: "Mejorar vida de batería", de: "Verbesserung der Batterielebensdauer", nl: "Batterijlevensduur verbeteren" }
      ],
      correct: 0,
      explanation: {
        en: "Explainable AI in robotics must make the 'black box' decisions of neural networks transparent and interpretable to humans, enabling trust, debugging, and accountability in autonomous systems.",
        es: "La IA explicable en robótica debe hacer las decisiones de 'caja negra' de las redes neuronales transparentes e interpretables para humanos, permitiendo confianza, depuración y responsabilidad en sistemas autónomos.",
        de: "Erklärbare KI in der Robotik muss die 'Black Box'-Entscheidungen neuronaler Netzwerke transparent und für Menschen interpretierbar machen und Vertrauen, Debugging und Verantwortlichkeit in autonomen Systemen ermöglichen.",
        nl: "Verklaarbare AI in robotica moet de 'zwarte doos' beslissingen van neurale netwerken transparant en interpreteerbaar maken voor mensen, wat vertrouwen, debugging en verantwoordelijkheid in autonome systemen mogelijk maakt."
      }
    },
    {
      question: {
        en: "Which type of end-effector design is most versatile for general-purpose manipulation tasks?",
        es: "¿Qué tipo de diseño de efector final es más versátil para tareas de manipulación de propósito general?",
        de: "Welches Endeffektordesign ist am vielseitigsten für allgemeine Manipulationsaufgaben?",
        nl: "Welk type eindeffector ontwerp is het meest veelzijdig voor algemene manipulatietaken?"
      },
      options: [
        { en: "Underactuated adaptive hands with passive compliance", es: "Manos adaptativas subactuadas con adaptabilidad pasiva", de: "Unteraktuierte adaptive Hände mit passiver Nachgiebigkeit", nl: "Ondergeactueerde adaptieve handen met passieve buigzaamheid" },
        { en: "Rigid two-finger grippers", es: "Agarres rígidos de dos dedos", de: "Starre Zweifingergreifer", nl: "Rigide twee-vinger grijpers" },
        { en: "Vacuum suction systems", es: "Sistemas de succión por vacío", de: "Vakuum-Saugsysteme", nl: "Vacuüm zuigsystemen" },
        { en: "Magnetic lifting devices", es: "Dispositivos de elevación magnética", de: "Magnetische Hebevorrichtungen", nl: "Magnetische hefinrichtingen" }
      ],
      correct: 0,
      explanation: {
        en: "Underactuated hands use fewer actuators than degrees of freedom, allowing passive adaptation to object shapes while maintaining robust grasping capabilities across diverse object geometries and sizes.",
        es: "Las manos subactuadas usan menos actuadores que grados de libertad, permitiendo adaptación pasiva a formas de objetos mientras mantienen capacidades robustas de agarre a través de diversas geometrías y tamaños de objetos.",
        de: "Unteraktuierte Hände verwenden weniger Aktuatoren als Freiheitsgrade und ermöglichen passive Anpassung an Objektformen bei gleichzeitig robusten Greiffähigkeiten über verschiedene Objektgeometrien und -größen hinweg.",
        nl: "Ondergeactueerde handen gebruiken minder actuatoren dan vrijheidsgraden, wat passieve aanpassing aan objectvormen mogelijk maakt terwijl robuuste grijpmogelijkheden behouden blijven over diverse objectgeometrieën en -groottes."
      }
    },
    {
      question: {
        en: "What is the main benefit of using shared autonomy in human-robot collaborative systems?",
        es: "¿Cuál es el principal beneficio de usar autonomía compartida en sistemas colaborativos humano-robot?",
        de: "Was ist der Hauptvorteil der Verwendung geteilter Autonomie in kollaborativen Mensch-Roboter-Systemen?",
        nl: "Wat is het hoofdvoordeel van het gebruik van gedeelde autonomie in collaboratieve mens-robot systemen?"
      },
      options: [
        { en: "Combining human intuition with robotic precision and consistency", es: "Combinar intuición humana con precisión y consistencia robótica", de: "Kombination menschlicher Intuition mit robotischer Präzision und Konsistenz", nl: "Combineren van menselijke intuïtie met robotische precisie en consistentie" },
        { en: "Eliminating all human involvement", es: "Eliminar toda participación humana", de: "Eliminierung jeder menschlichen Beteiligung", nl: "Elimineren van alle menselijke betrokkenheid" },
        { en: "Reducing system complexity", es: "Reducir complejidad del sistema", de: "Reduzierung der Systemkomplexität", nl: "Systeemcomplexiteit verminderen" },
        { en: "Lowering computational requirements", es: "Reducir requisitos computacionales", de: "Reduzierung der Rechenanforderungen", nl: "Computationele vereisten verlagen" }
      ],
      correct: 0,
      explanation: {
        en: "Shared autonomy leverages human cognitive abilities (creativity, adaptation, high-level reasoning) while utilizing robot capabilities (precision, repeatability, endurance) for optimal task performance.",
        es: "La autonomía compartida aprovecha las habilidades cognitivas humanas (creatividad, adaptación, razonamiento de alto nivel) mientras utiliza capacidades robóticas (precisión, repetibilidad, resistencia) para rendimiento óptimo de tareas.",
        de: "Geteilte Autonomie nutzt menschliche kognitive Fähigkeiten (Kreativität, Anpassung, hochrangige Argumentation) und verwendet gleichzeitig robotische Fähigkeiten (Präzision, Wiederholbarkeit, Ausdauer) für optimale Aufgabenleistung.",
        nl: "Gedeelde autonomie benut menselijke cognitieve vermogens (creativiteit, aanpassing, hoog-niveau redeneren) terwijl robotische capaciteiten (precisie, herhaalbaarheid, uithoudingsvermogen) worden gebruikt voor optimale taakprestatie."
      }
    },
    {
      question: {
        en: "Which robotic learning paradigm is most suitable for tasks requiring continuous adaptation to changing environments?",
        es: "¿Qué paradigma de aprendizaje robótico es más adecuado para tareas que requieren adaptación continua a entornos cambiantes?",
        de: "Welches robotische Lernparadigma ist am besten für Aufgaben geeignet, die kontinuierliche Anpassung an sich ändernde Umgebungen erfordern?",
        nl: "Welk robotisch leerparadigma is het meest geschikt voor taken die continue aanpassing aan veranderende omgevingen vereisen?"
      },
      options: [
        { en: "Online reinforcement learning with experience replay", es: "Aprendizaje por refuerzo en línea con repetición de experiencia", de: "Online-Verstärkungslernen mit Erfahrungswiederholung", nl: "Online versterkend leren met ervaring herhaling" },
        { en: "Offline supervised learning", es: "Aprendizaje supervisado fuera de línea", de: "Offline überwachtes Lernen", nl: "Offline begeleid leren" },
        { en: "Static rule-based systems", es: "Sistemas estáticos basados en reglas", de: "Statische regelbasierte Systeme", nl: "Statische regel-gebaseerde systemen" },
        { en: "Pre-trained fixed neural networks", es: "Redes neuronales fijas pre-entrenadas", de: "Vortrainierte feste neuronale Netzwerke", nl: "Voorgetrainde vaste neurale netwerken" }
      ],
      correct: 0,
      explanation: {
        en: "Online reinforcement learning with experience replay enables robots to continuously learn and adapt from new experiences while retaining knowledge from past interactions, crucial for dynamic environments.",
        es: "El aprendizaje por refuerzo en línea con repetición de experiencia permite a los robots aprender y adaptarse continuamente de nuevas experiencias mientras retienen conocimiento de interacciones pasadas, crucial para entornos dinámicos.",
        de: "Online-Verstärkungslernen mit Erfahrungswiederholung ermöglicht es Robotern, kontinuierlich aus neuen Erfahrungen zu lernen und sich anzupassen, während sie Wissen aus vergangenen Interaktionen behalten, was für dynamische Umgebungen entscheidend ist.",
        nl: "Online versterkend leren met ervaring herhaling stelt robots in staat continu te leren en aan te passen vanuit nieuwe ervaringen terwijl kennis van eerdere interacties behouden blijft, cruciaal voor dynamische omgevingen."
      }
    },
    {
      question: {
        en: "What is the fundamental principle behind whole-body control in humanoid robots?",
        es: "¿Cuál es el principio fundamental detrás del control de cuerpo completo en robots humanoides?",
        de: "Was ist das grundlegende Prinzip hinter der Ganzkörpersteuerung in humanoiden Robotern?",
        nl: "Wat is het fundamentele principe achter hele-lichaam besturing in humanoïde robots?"
      },
      options: [
        { en: "Simultaneous optimization of all joints for global task objectives", es: "Optimización simultánea de todas las articulaciones para objetivos globales de tareas", de: "Simultane Optimierung aller Gelenke für globale Aufgabenziele", nl: "Gelijktijdige optimalisatie van alle gewrichten voor globale taakdoelstellingen" },
        { en: "Sequential control of individual limbs", es: "Control secuencial de extremidades individuales", de: "Sequentielle Steuerung einzelner Gliedmaßen", nl: "Sequentiële besturing van individuele ledematen" },
        { en: "Independent joint control only", es: "Solo control independiente de articulaciones", de: "Nur unabhängige Gelenksteuerung", nl: "Alleen onafhankelijke gewricht besturing" },
        { en: "Fixed posture maintenance", es: "Mantenimiento de postura fija", de: "Feste Haltungserhaltung", nl: "Vaste houding onderhoud" }
      ],
      correct: 0,
      explanation: {
        en: "Whole-body control treats the entire robot as a single dynamic system, optimizing all joint motions simultaneously to achieve complex tasks while maintaining balance and satisfying physical constraints.",
        es: "El control de cuerpo completo trata todo el robot como un sistema dinámico único, optimizando todos los movimientos articulares simultáneamente para lograr tareas complejas mientras mantiene equilibrio y satisface restricciones físicas.",
        de: "Ganzkörpersteuerung behandelt den gesamten Roboter als ein einziges dynamisches System und optimiert alle Gelenkbewegungen gleichzeitig, um komplexe Aufgaben zu erfüllen und dabei Gleichgewicht zu halten und physikalische Einschränkungen zu erfüllen.",
        nl: "Hele-lichaam besturing behandelt de hele robot als één dynamisch systeem, waarbij alle gewrichtbewegingen gelijktijdig worden geoptimaliseerd om complexe taken te bereiken terwijl balans wordt behouden en fysieke beperkingen worden voldaan."
      }
    },
    {
      question: {
        en: "Which algorithm is most effective for robot motion planning in high-dimensional configuration spaces?",
        es: "¿Qué algoritmo es más efectivo para planificación de movimiento robótico en espacios de configuración de alta dimensión?",
        de: "Welcher Algorithmus ist am effektivsten für die robotische Bewegungsplanung in hochdimensionalen Konfigurationsräumen?",
        nl: "Welk algoritme is het meest effectief voor robot bewegingsplanning in hoog-dimensionale configuratieruimtes?"
      },
      options: [
        { en: "RRT* (Rapidly-exploring Random Tree star)", es: "RRT* (Árbol Aleatorio de Exploración Rápida estrella)", de: "RRT* (Schnell erkundender zufälliger Baum Stern)", nl: "RRT* (Snel-verkennende Willekeurige Boom ster)" },
        { en: "Breadth-first search", es: "Búsqueda en anchura", de: "Breitensuche", nl: "Breedte-eerst zoeken" },
        { en: "Depth-first search", es: "Búsqueda en profundidad", de: "Tiefensuche", nl: "Diepte-eerst zoeken" },
        { en: "Linear interpolation", es: "Interpolación lineal", de: "Lineare Interpolation", nl: "Lineaire interpolatie" }
      ],
      correct: 0,
      explanation: {
        en: "RRT* is specifically designed for high-dimensional spaces and provides asymptotically optimal solutions while efficiently exploring complex configuration spaces with obstacles.",
        es: "RRT* está específicamente diseñado para espacios de alta dimensión y proporciona soluciones asintóticamente óptimas mientras explora eficientemente espacios de configuración complejos con obstáculos.",
        de: "RRT* ist speziell für hochdimensionale Räume entwickelt und liefert asymptotisch optimale Lösungen, während es komplexe Konfigurationsräume mit Hindernissen effizient erkundet.",
        nl: "RRT* is specifiek ontworpen voor hoog-dimensionale ruimtes en biedt asymptotisch optimale oplossingen terwijl het efficiënt complexe configuratieruimtes met obstakels verkent."
      }
    },
    {
      question: {
        en: "What is the primary function of admittance control in physical human-robot interaction?",
        es: "¿Cuál es la función principal del control de admitancia en interacción física humano-robot?",
        de: "Was ist die Hauptfunktion der Admittanzsteuerung bei physischer Mensch-Roboter-Interaktion?",
        nl: "Wat is de primaire functie van admittantiebesturing in fysieke mens-robot interactie?"
      },
      options: [
        { en: "Modulate robot motion based on applied forces", es: "Modular movimiento del robot basado en fuerzas aplicadas", de: "Roboterbewegung basierend auf angewandten Kräften modulieren", nl: "Robot beweging moduleren gebaseerd op toegepaste krachten" },
        { en: "Maintain constant velocity", es: "Mantener velocidad constante", de: "Konstante Geschwindigkeit beibehalten", nl: "Constante snelheid behouden" },
        { en: "Maximize force output", es: "Maximizar salida de fuerza", de: "Kraftausgang maximieren", nl: "Kracht output maximaliseren" },
        { en: "Minimize power consumption", es: "Minimizar consumo de energía", de: "Energieverbrauch minimieren", nl: "Energieverbruik minimaliseren" }
      ],
      correct: 0,
      explanation: {
        en: "Admittance control makes the robot appear to have desired mechanical properties (mass, damping, stiffness) by modulating its motion in response to external forces from human interaction.",
        es: "El control de admitancia hace que el robot parezca tener propiedades mecánicas deseadas (masa, amortiguación, rigidez) modulando su movimiento en respuesta a fuerzas externas de la interacción humana.",
        de: "Admittanzsteuerung lässt den Roboter gewünschte mechanische Eigenschaften (Masse, Dämpfung, Steifigkeit) haben, indem sie seine Bewegung als Reaktion auf externe Kräfte aus menschlicher Interaktion moduliert.",
        nl: "Admittantiebesturing laat de robot gewenste mechanische eigenschappen lijken te hebben (massa, demping, stijfheid) door zijn beweging te moduleren als reactie op externe krachten uit menselijke interactie."
      }
    },
    {
      question: {
        en: "Which approach is most effective for enabling robots to understand and respond to human emotional cues?",
        es: "¿Qué enfoque es más efectivo para permitir que los robots entiendan y respondan a señales emocionales humanas?",
        de: "Welcher Ansatz ist am effektivsten, um Robotern das Verstehen und Reagieren auf menschliche emotionale Hinweise zu ermöglichen?",
        nl: "Welke benadering is het meest effectief voor het in staat stellen van robots om menselijke emotionele signalen te begrijpen en erop te reageren?"
      },
      options: [
        { en: "Multi-modal fusion of facial expressions, voice, and body language", es: "Fusión multimodal de expresiones faciales, voz y lenguaje corporal", de: "Multimodale Fusion von Gesichtsausdrücken, Stimme und Körpersprache", nl: "Multimodale fusie van gezichtsuitdrukkingen, stem en lichaamstaal" },
        { en: "Voice recognition only", es: "Solo reconocimiento de voz", de: "Nur Spracherkennung", nl: "Alleen spraakherkenning" },
        { en: "Simple keyword detection", es: "Detección simple de palabras clave", de: "Einfache Schlüsselworterkennung", nl: "Eenvoudige sleutelwoord detectie" },
        { en: "Pre-programmed response patterns", es: "Patrones de respuesta pre-programados", de: "Vorprogrammierte Antwortmuster", nl: "Voorgeprogrammeerde responspatronen" }
      ],
      correct: 0,
      explanation: {
        en: "Effective emotion recognition requires integrating multiple modalities - facial expressions, vocal intonation, gestures, and posture - to accurately interpret complex human emotional states.",
        es: "El reconocimiento efectivo de emociones requiere integrar múltiples modalidades - expresiones faciales, entonación vocal, gestos y postura - para interpretar con precisión estados emocionales humanos complejos.",
        de: "Effektive Emotionserkennung erfordert die Integration mehrerer Modalitäten - Gesichtsausdrücke, Stimmintonation, Gesten und Haltung - um komplexe menschliche Emotionszustände genau zu interpretieren.",
        nl: "Effectieve emotieherkenning vereist integratie van meerdere modaliteiten - gezichtsuitdrukkingen, stemtoon, gebaren en houding - om complexe menselijke emotionele toestanden nauwkeurig te interpreteren."
      }
    },
    {
      question: {
        en: "What is the key advantage of using series elastic actuators in robotic systems?",
        es: "¿Cuál es la ventaja clave de usar actuadores elásticos en serie en sistemas robóticos?",
        de: "Was ist der Hauptvorteil der Verwendung von seriell-elastischen Aktuatoren in Robotersystemen?",
        nl: "Wat is het belangrijkste voordeel van het gebruik van serie elastische actuatoren in robotsystemen?"
      },
      options: [
        { en: "Natural force control and energy storage capabilities", es: "Control natural de fuerza y capacidades de almacenamiento de energía", de: "Natürliche Kraftsteuerung und Energiespeicherfähigkeiten", nl: "Natuurlijke krachtbeheersing en energieopslag mogelijkheden" },
        { en: "Reduced weight only", es: "Solo peso reducido", de: "Nur reduziertes Gewicht", nl: "Alleen verminderd gewicht" },
        { en: "Higher maximum speed", es: "Mayor velocidad máxima", de: "Höhere Maximalgeschwindigkeit", nl: "Hogere maximumsnelheid" },
        { en: "Simplified control algorithms", es: "Algoritmos de control simplificados", de: "Vereinfachte Steuerungsalgorithmen", nl: "Vereenvoudigde besturingsalgoritmen" }
      ],
      correct: 0,
      explanation: {
        en: "Series elastic actuators include a compliant element that provides natural force control, shock absorption, energy storage, and safer interaction compared to rigid actuators.",
        es: "Los actuadores elásticos en serie incluyen un elemento adaptable que proporciona control natural de fuerza, absorción de impactos, almacenamiento de energía e interacción más segura comparado con actuadores rígidos.",
        de: "Seriell-elastische Aktuatoren enthalten ein nachgiebiges Element, das natürliche Kraftsteuerung, Stoßdämpfung, Energiespeicherung und sicherere Interaktion im Vergleich zu starren Aktuatoren bietet.",
        nl: "Serie elastische actuatoren bevatten een buigzaam element dat natuurlijke krachtbeheersing, schokabsorptie, energieopslag en veiligere interactie biedt vergeleken met rigide actuatoren."
      }
    },
    {
      question: {
        en: "Which technique is most effective for enabling robots to manipulate deformable objects like fabric or rope?",
        es: "¿Qué técnica es más efectiva para permitir que los robots manipulen objetos deformables como tela o cuerda?",
        de: "Welche Technik ist am effektivsten, um Robotern die Manipulation verformbarer Objekte wie Stoff oder Seil zu ermöglichen?",
        nl: "Welke techniek is het meest effectief voor het in staat stellen van robots om vervormbare objecten zoals stof of touw te manipuleren?"
      },
      options: [
        { en: "Physics-based simulation with contact modeling", es: "Simulación basada en física con modelado de contacto", de: "Physikbasierte Simulation mit Kontaktmodellierung", nl: "Fysica-gebaseerde simulatie met contact modellering" },
        { en: "Rigid body assumptions", es: "Suposiciones de cuerpo rígido", de: "Starrkörnperannahmen", nl: "Rigide lichaam aannames" },
        { en: "Simple geometric calculations", es: "Cálculos geométricos simples", de: "Einfache geometrische Berechnungen", nl: "Eenvoudige geometrische berekeningen" },
        { en: "Pre-recorded motion patterns", es: "Patrones de movimiento pregrabados", de: "Voraufgezeichnete Bewegungsmuster", nl: "Vooropgenomen bewegingspatronen" }
      ],
      correct: 0,
      explanation: {
        en: "Deformable object manipulation requires physics-based models that can predict how forces affect object shape and dynamics, enabling planning and control of complex manipulation strategies.",
        es: "La manipulación de objetos deformables requiere modelos basados en física que puedan predecir cómo las fuerzas afectan la forma y dinámica del objeto, permitiendo planificación y control de estrategias complejas de manipulación.",
        de: "Die Manipulation verformbarer Objekte erfordert physikbasierte Modelle, die vorhersagen können, wie Kräfte Objektform und -dynamik beeinflussen, und ermöglicht Planung und Steuerung komplexer Manipulationsstrategien.",
        nl: "Vervormbare object manipulatie vereist fysica-gebaseerde modellen die kunnen voorspellen hoe krachten objectvorm en dynamiek beïnvloeden, wat planning en besturing van complexe manipulatiestrategieën mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is the primary benefit of using variable impedance in robotic manipulation tasks?",
        es: "¿Cuál es el beneficio principal de usar impedancia variable en tareas de manipulación robótica?",
        de: "Was ist der Hauptvorteil der Verwendung variabler Impedanz in robotischen Manipulationsaufgaben?",
        nl: "Wat is het primaire voordeel van het gebruik van variabele impedantie in robotische manipulatietaken?"
      },
      options: [
        { en: "Adaptive stiffness for different task phases", es: "Rigidez adaptativa para diferentes fases de tareas", de: "Adaptive Steifigkeit für verschiedene Aufgabenphasen", nl: "Adaptieve stijfheid voor verschillende taakfases" },
        { en: "Constant force output", es: "Salida de fuerza constante", de: "Konstante Kraftausgang", nl: "Constante kracht output" },
        { en: "Fixed joint positions", es: "Posiciones articulares fijas", de: "Feste Gelenkpositionen", nl: "Vaste gewrichtposities" },
        { en: "Maximum speed operation", es: "Operación de velocidad máxima", de: "Maximale Geschwindigkeitsbetrieb", nl: "Maximale snelheid operatie" }
      ],
      correct: 0,
      explanation: {
        en: "Variable impedance allows robots to adjust their mechanical behavior during task execution - being stiff for precise positioning and compliant for safe contact and exploration phases.",
        es: "La impedancia variable permite a los robots ajustar su comportamiento mecánico durante la ejecución de tareas - siendo rígidos para posicionamiento preciso y adaptables para fases seguras de contacto y exploración.",
        de: "Variable Impedanz ermöglicht es Robotern, ihr mechanisches Verhalten während der Aufgabenausführung anzupassen - steif für präzise Positionierung und nachgiebig für sichere Kontakt- und Erkundungsphasen.",
        nl: "Variabele impedantie stelt robots in staat hun mechanisch gedrag aan te passen tijdens taakuitvoering - stijf voor precieze positionering en buigzaam voor veilige contact- en verkenningsfases."
      }
    },
    {
      question: {
        en: "Which sensing approach is most promising for enabling robots to understand object affordances?",
        es: "¿Qué enfoque de detección es más prometedor para permitir que los robots entiendan las capacidades de los objetos?",
        de: "Welcher Sensoransatz ist am vielversprechendsten, um Robotern das Verstehen von Objektaffordanzen zu ermöglichen?",
        nl: "Welke sensing benadering is het meest veelbelovend voor het in staat stellen van robots om object affordances te begrijpen?"
      },
      options: [
        { en: "Integrated vision-haptic exploration with learned representations", es: "Exploración visión-háptica integrada con representaciones aprendidas", de: "Integrierte Vision-Haptik-Erkundung mit erlernten Repräsentationen", nl: "Geïntegreerde visie-haptische verkenning met geleerde representaties" },
        { en: "Visual inspection only", es: "Solo inspección visual", de: "Nur visuelle Inspektion", nl: "Alleen visuele inspectie" },
        { en: "Force measurement alone", es: "Solo medición de fuerza", de: "Nur Kraftmessung", nl: "Alleen krachtmeting" },
        { en: "Database lookup systems", es: "Sistemas de búsqueda en base de datos", de: "Datenbankabfragesysteme", nl: "Database opzoeksystemen" }
      ],
      correct: 0,
      explanation: {
        en: "Understanding object affordances requires combining visual and haptic information through learned representations that capture how object properties relate to possible actions and interactions.",
        es: "Entender las capacidades de objetos requiere combinar información visual y háptica a través de representaciones aprendidas que capturan cómo las propiedades del objeto se relacionan con posibles acciones e interacciones.",
        de: "Das Verstehen von Objektaffordanzen erfordert die Kombination visueller und haptischer Informationen durch erlernte Repräsentationen, die erfassen, wie sich Objekteigenschaften auf mögliche Aktionen und Interaktionen beziehen.",
        nl: "Begrijpen van object affordances vereist het combineren van visuele en haptische informatie door geleerde representaties die vastleggen hoe objecteigenschappen gerelateerd zijn aan mogelijke acties en interacties."
      }
    },
    {
      question: {
        en: "What is the fundamental challenge in developing autonomous surgical robots?",
        es: "¿Cuál es el desafío fundamental en desarrollar robots quirúrgicos autónomos?",
        de: "Was ist die grundlegende Herausforderung bei der Entwicklung autonomer Chirurgieroboter?",
        nl: "Wat is de fundamentele uitdaging in het ontwikkelen van autonome chirurgische robots?"
      },
      options: [
        { en: "Ensuring safety with unpredictable biological variability", es: "Asegurar seguridad con variabilidad biológica impredecible", de: "Sicherheit bei unvorhersagbarer biologischer Variabilität gewährleisten", nl: "Veiligheid verzekeren met onvoorspelbare biologische variabiliteit" },
        { en: "Reducing operation time", es: "Reducir tiempo de operación", de: "Operationszeit reduzieren", nl: "Operatietijd verminderen" },
        { en: "Increasing tool precision only", es: "Solo aumentar precisión de herramientas", de: "Nur Werkzeugpräzision erhöhen", nl: "Alleen gereedschapsprecisie verhogen" },
        { en: "Minimizing equipment costs", es: "Minimizar costos de equipo", de: "Ausrüstungskosten minimieren", nl: "Apparatuurkosten minimaliseren" }
      ],
      correct: 0,
      explanation: {
        en: "Each patient presents unique anatomical variations and unexpected conditions, requiring surgical robots to adapt safely while maintaining precision in life-critical procedures with zero tolerance for errors.",
        es: "Cada paciente presenta variaciones anatómicas únicas y condiciones inesperadas, requiriendo que los robots quirúrgicos se adapten de manera segura mientras mantienen precisión en procedimientos críticos para la vida con tolerancia cero a errores.",
        de: "Jeder Patient weist einzigartige anatomische Variationen und unerwartete Zustände auf, was erfordert, dass Chirurgieroboter sich sicher anpassen und dabei Präzision in lebenskritischen Verfahren mit null Fehlertoleranz beibehalten.",
        nl: "Elke patiënt vertoont unieke anatomische variaties en onverwachte omstandigheden, waardoor chirurgische robots zich veilig moeten aanpassen terwijl ze precisie behouden in levenskritieke procedures met nul fouttolerantie."
      }
    },
    {
      question: {
        en: "Which control strategy is most effective for coordinating multiple robots in assembly line operations?",
        es: "¿Qué estrategia de control es más efectiva para coordinar múltiples robots en operaciones de línea de ensamblaje?",
        de: "Welche Steuerungsstrategie ist am effektivsten für die Koordination mehrerer Roboter in Fließbandoperationen?",
        nl: "Welke besturingsstrategie is het meest effectief voor het coördineren van meerdere robots in assemblagelijn operaties?"
      },
      options: [
        { en: "Event-driven coordination with shared workspace management", es: "Coordinación impulsada por eventos con gestión de espacio de trabajo compartido", de: "Ereignisgesteuerte Koordination mit geteiltem Arbeitsbereichsmanagement", nl: "Gebeurtenis-gedreven coördinatie met gedeeld werkruimte beheer" },
        { en: "Independent operation without communication", es: "Operación independiente sin comunicación", de: "Unabhängiger Betrieb ohne Kommunikation", nl: "Onafhankelijke operatie zonder communicatie" },
        { en: "Time-based scheduling only", es: "Solo programación basada en tiempo", de: "Nur zeitbasierte Planung", nl: "Alleen tijd-gebaseerde planning" },
        { en: "Random task assignment", es: "Asignación aleatoria de tareas", de: "Zufällige Aufgabenzuteilung", nl: "Willekeurige taak toewijzing" }
      ],
      correct: 0,
      explanation: {
        en: "Event-driven coordination responds to real-time conditions and manages shared workspace access, enabling efficient collaboration while preventing collisions and deadlocks in dynamic assembly processes.",
        es: "La coordinación impulsada por eventos responde a condiciones en tiempo real y gestiona acceso al espacio de trabajo compartido, permitiendo colaboración eficiente mientras previene colisiones y bloqueos en procesos dinámicos de ensamblaje.",
        de: "Ereignisgesteuerte Koordination reagiert auf Echtzeitbedingungen und verwaltet den Zugang zum geteilten Arbeitsbereich, ermöglicht effiziente Zusammenarbeit und verhindert Kollisionen und Deadlocks in dynamischen Montageprozessen.",
        nl: "Gebeurtenis-gedreven coördinatie reageert op real-time omstandigheden en beheert gedeelde werkruimte toegang, wat efficiënte samenwerking mogelijk maakt terwijl botsingen en deadlocks in dynamische assemblageprocessen worden voorkomen."
      }
    },
    {
      question: {
        en: "What is the primary advantage of using deep reinforcement learning for robotic grasping compared to traditional approaches?",
        es: "¿Cuál es la principal ventaja de usar aprendizaje profundo por refuerzo para agarre robótico comparado con enfoques tradicionales?",
        de: "Was ist der Hauptvorteil der Verwendung von Deep Reinforcement Learning für robotisches Greifen im Vergleich zu traditionellen Ansätzen?",
        nl: "Wat is het primaire voordeel van het gebruik van diep versterkend leren voor robotisch grijpen vergeleken met traditionele benaderingen?"
      },
      options: [
        { en: "Automatic discovery of optimal grasp strategies", es: "Descubrimiento automático de estrategias óptimas de agarre", de: "Automatische Entdeckung optimaler Greifstrategien", nl: "Automatische ontdekking van optimale grijpstrategieën" },
        { en: "Faster execution speed", es: "Velocidad de ejecución más rápida", de: "Schnellere Ausführungsgeschwindigkeit", nl: "Snellere uitvoeringssnelheid" },
        { en: "Lower computational cost", es: "Menor costo computacional", de: "Geringere Rechenkosten", nl: "Lagere computationele kosten" },
        { en: "Simpler implementation", es: "Implementación más simple", de: "Einfachere Implementierung", nl: "Eenvoudigere implementatie" }
      ],
      correct: 0,
      explanation: {
        en: "Deep reinforcement learning can automatically discover novel grasp strategies and adapt to diverse objects without requiring explicit programming of grasp heuristics or object models.",
        es: "El aprendizaje profundo por refuerzo puede descubrir automáticamente estrategias novedosas de agarre y adaptarse a diversos objetos sin requerir programación explícita de heurísticas de agarre o modelos de objetos.",
        de: "Deep Reinforcement Learning kann automatisch neuartige Greifstrategien entdecken und sich an verschiedene Objekte anpassen, ohne explizite Programmierung von Greifheuristiken oder Objektmodellen zu benötigen.",
        nl: "Diep versterkend leren kan automatisch nieuwe grijpstrategieën ontdekken en zich aanpassen aan diverse objecten zonder expliciete programmering van grijpheuristieken of objectmodellen te vereisen."
      }
    },
    {
      question: {
        en: "Which safety mechanism is most critical for collaborative robots working alongside humans?",
        es: "¿Qué mecanismo de seguridad es más crítico para robots colaborativos trabajando junto a humanos?",
        de: "Welcher Sicherheitsmechanismus ist am kritischsten für kollaborative Roboter, die neben Menschen arbeiten?",
        nl: "Welk veiligheidsmechanisme is het meest kritiek voor collaboratieve robots die naast mensen werken?"
      },
      options: [
        { en: "Real-time collision detection and reflex stopping", es: "Detección de colisión en tiempo real y parada refleja", de: "Echtzeit-Kollisionserkennung und Reflexstopp", nl: "Real-time botsing detectie en reflex stoppen" },
        { en: "Physical barriers only", es: "Solo barreras físicas", de: "Nur physische Barrieren", nl: "Alleen fysieke barrières" },
        { en: "Reduced robot speed", es: "Velocidad reducida del robot", de: "Reduzierte Robotergeschwindigkeit", nl: "Verminderde robotsnelheid" },
        { en: "Emergency stop buttons", es: "Botones de parada de emergencia", de: "Not-Stopp-Tasten", nl: "Noodstop knoppen" }
      ],
      correct: 0,
      explanation: {
        en: "Collaborative robots must detect unexpected contact within milliseconds and immediately stop or retract to prevent injury, using advanced sensors and fast control systems for human safety.",
        es: "Los robots colaborativos deben detectar contacto inesperado en milisegundos e inmediatamente parar o retraerse para prevenir lesiones, usando sensores avanzados y sistemas de control rápidos para seguridad humana.",
        de: "Kollaborative Roboter müssen unerwarteten Kontakt innerhalb von Millisekunden erkennen und sofort stoppen oder zurückziehen, um Verletzungen zu vermeiden, unter Verwendung fortgeschrittener Sensoren und schneller Steuerungssysteme für menschliche Sicherheit.",
        nl: "Collaboratieve robots moeten onverwacht contact binnen milliseconden detecteren en onmiddellijk stoppen of terugtrekken om verwondingen te voorkomen, gebruikmakend van geavanceerde sensoren en snelle besturingssystemen voor menselijke veiligheid."
      }
    },
    {
      question: {
        en: "What is the key principle behind bio-inspired robotic hand designs?",
        es: "¿Cuál es el principio clave detrás de los diseños de manos robóticas bio-inspiradas?",
        de: "Was ist das Schlüsselprinzip hinter bio-inspirierten robotischen Handdesigns?",
        nl: "Wat is het sleutelprincipe achter bio-geïnspireerde robotische hand ontwerpen?"
      },
      options: [
        { en: "Underactuation with mechanical intelligence", es: "Subactuación con inteligencia mecánica", de: "Unteraktuierung mit mechanischer Intelligenz", nl: "Onderactuatie met mechanische intelligentie" },
        { en: "Maximum number of actuators", es: "Número máximo de actuadores", de: "Maximale Anzahl von Aktuatoren", nl: "Maximum aantal actuatoren" },
        { en: "Rigid finger structures", es: "Estructuras rígidas de dedos", de: "Starre Fingerstrukturen", nl: "Rigide vingerstructuren" },
        { en: "Single-purpose gripping", es: "Agarre de propósito único", de: "Einzweckgreifen", nl: "Enkelvoudig doel grijpen" }
      ],
      correct: 0,
      explanation: {
        en: "Bio-inspired hands use underactuation where fewer motors control multiple joints, with mechanical compliance allowing passive adaptation to object shapes, mimicking the efficiency of biological hands.",
        es: "Las manos bio-inspiradas usan subactuación donde menos motores controlan múltiples articulaciones, con adaptabilidad mecánica permitiendo adaptación pasiva a formas de objetos, imitando la eficiencia de las manos biológicas.",
        de: "Bio-inspirierte Hände verwenden Unteraktuierung, wo weniger Motoren mehrere Gelenke steuern, mit mechanischer Nachgiebigkeit für passive Anpassung an Objektformen, was die Effizienz biologischer Hände nachahmt.",
        nl: "Bio-geïnspireerde handen gebruiken onderactuatie waarbij minder motoren meerdere gewrichten besturen, met mechanische buigzaamheid die passieve aanpassing aan objectvormen mogelijk maakt, wat de efficiëntie van biologische handen nabootst."
      }
    },
    {
      question: {
        en: "Which approach is most effective for robot learning in human-robot collaborative tasks?",
        es: "¿Qué enfoque es más efectivo para el aprendizaje robótico en tareas colaborativas humano-robot?",
        de: "Welcher Ansatz ist am effektivsten für robotisches Lernen in kollaborativen Mensch-Roboter-Aufgaben?",
        nl: "Welke benadering is het meest effectief voor robot leren in mens-robot collaboratieve taken?"
      },
      options: [
        { en: "Interactive learning with human feedback and correction", es: "Aprendizaje interactivo con retroalimentación y corrección humana", de: "Interaktives Lernen mit menschlichem Feedback und Korrektur", nl: "Interactief leren met menselijke feedback en correctie" },
        { en: "Isolated machine learning", es: "Aprendizaje automático aislado", de: "Isoliertes maschinelles Lernen", nl: "Geïsoleerd machine leren" },
        { en: "Pre-programmed behaviors only", es: "Solo comportamientos pre-programados", de: "Nur vorprogrammierte Verhaltensweisen", nl: "Alleen voorgeprogrammeerde gedragingen" },
        { en: "Trial-and-error without guidance", es: "Ensayo y error sin orientación", de: "Versuch und Irrtum ohne Anleitung", nl: "Vallen en opstaan zonder begeleiding" }
      ],
      correct: 0,
      explanation: {
        en: "Interactive learning allows robots to benefit from human expertise and real-time feedback, enabling faster learning of complex collaborative behaviors and adaptation to human preferences and work styles.",
        es: "El aprendizaje interactivo permite a los robots beneficiarse de la experiencia humana y retroalimentación en tiempo real, permitiendo aprendizaje más rápido de comportamientos colaborativos complejos y adaptación a preferencias humanas y estilos de trabajo.",
        de: "Interaktives Lernen ermöglicht es Robotern, von menschlicher Expertise und Echtzeit-Feedback zu profitieren und ermöglicht schnelleres Lernen komplexer kollaborativer Verhaltensweisen und Anpassung an menschliche Vorlieben und Arbeitsstile.",
        nl: "Interactief leren stelt robots in staat te profiteren van menselijke expertise en real-time feedback, wat sneller leren van complexe collaboratieve gedragingen en aanpassing aan menselijke voorkeuren en werkstijlen mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is soft robotics and what are its key advantages over traditional rigid robots?",
        es: "¿Qué es la robótica blanda y cuáles son sus ventajas clave sobre los robots rígidos tradicionales?",
        de: "Was ist Soft-Robotik und was sind ihre Hauptvorteile gegenüber traditionellen starren Robotern?",
        nl: "Wat is zachte robotica en wat zijn de belangrijkste voordelen ten opzichte van traditionele starre robots?"
      },
      options: [
        { en: "Inherent safety, adaptability to complex shapes, and damage tolerance", es: "Seguridad inherente, adaptabilidad a formas complejas y tolerancia al daño", de: "Inhärente Sicherheit, Anpassungsfähigkeit an komplexe Formen und Schadenstoleranz", nl: "Inherente veiligheid, aanpasbaarheid aan complexe vormen en schade tolerantie" },
        { en: "Higher precision and faster operation speeds", es: "Mayor precisión y velocidades de operación más rápidas", de: "Höhere Präzision und schnellere Betriebsgeschwindigkeiten", nl: "Hogere precisie en snellere bedrijfssnelheden" },
        { en: "Lower power consumption and simpler control", es: "Menor consumo de energía y control más simple", de: "Geringerer Stromverbrauch und einfachere Steuerung", nl: "Lager energieverbruik en eenvoudigere besturing" },
        { en: "Better computational efficiency", es: "Mejor eficiencia computacional", de: "Bessere Recheneffizienz", nl: "Betere computationele efficiëntie" }
      ],
      correct: 0,
      explanation: {
        en: "Soft robots use flexible materials that provide inherent compliance, making them safer for human interaction, adaptable to irregular shapes, and resilient to damage. They can squeeze through tight spaces and safely handle delicate objects.",
        es: "Los robots blandos usan materiales flexibles que proporcionan adaptabilidad inherente, haciéndolos más seguros para interacción humana, adaptables a formas irregulares y resistentes al daño. Pueden pasar por espacios estrechos y manejar objetos delicados de forma segura.",
        de: "Weiche Roboter verwenden flexible Materialien, die inhärente Nachgiebigkeit bieten, wodurch sie sicherer für menschliche Interaktion, anpassungsfähig an unregelmäßige Formen und widerstandsfähig gegen Schäden werden. Sie können sich durch enge Räume zwängen und empfindliche Objekte sicher handhaben.",
        nl: "Zachte robots gebruiken flexibele materialen die inherente buigzaamheid bieden, waardoor ze veiliger zijn voor menselijke interactie, aanpasbaar aan onregelmatige vormen en bestand tegen schade. Ze kunnen door nauwe ruimtes persen en delicate objecten veilig hanteren."
      }
    },
    {
      question: {
        en: "What is the role of tactile sensing in advanced robotic manipulation?",
        es: "¿Cuál es el papel de la detección táctil en la manipulación robótica avanzada?",
        de: "Welche Rolle spielt das taktile Sensing in der erweiterten Robotermanipulation?",
        nl: "Wat is de rol van tactiele waarneming in geavanceerde robotmanipulatie?"
      },
      options: [
        { en: "Providing force feedback and texture recognition for dexterous manipulation", es: "Proporcionar retroalimentación de fuerza y reconocimiento de textura para manipulación diestra", de: "Kraftrückkopplung und Texturerkennung für geschickte Manipulation bereitstellen", nl: "Krachten feedback en textuur herkenning voor behendigde manipulatie bieden" },
        { en: "Only detecting object presence", es: "Solo detectar presencia de objetos", de: "Nur Objektpräsenz erkennen", nl: "Alleen objectaanwezigheid detecteren" },
        { en: "Replacing visual sensors completely", es: "Reemplazar completamente sensores visuales", de: "Visuelle Sensoren vollständig ersetzen", nl: "Visuele sensoren volledig vervangen" },
        { en: "Measuring temperature variations only", es: "Medir solo variaciones de temperatura", de: "Nur Temperaturschwankungen messen", nl: "Alleen temperatuurvariaties meten" }
      ],
      correct: 0,
      explanation: {
        en: "Tactile sensing provides crucial information about contact forces, surface textures, slip detection, and object properties that enable robots to perform delicate manipulation tasks like assembly, grasping fragile objects, and adaptive gripping.",
        es: "La detección táctil proporciona información crucial sobre fuerzas de contacto, texturas de superficie, detección de deslizamiento y propiedades de objetos que permiten a los robots realizar tareas de manipulación delicadas como ensamblaje, agarre de objetos frágiles y agarre adaptivo.",
        de: "Taktiles Sensing liefert wichtige Informationen über Kontaktkräfte, Oberflächentexturen, Rutscherkennung und Objekteigenschaften, die es Robotern ermöglichen, empfindliche Manipulationsaufgaben wie Montage, Greifen zerbrechlicher Objekte und adaptives Greifen durchzuführen.",
        nl: "Tactiele waarneming biedt cruciale informatie over contactkrachten, oppervlakte texturen, glijdetectie en objecteigenschappen die robots in staat stellen delicate manipulatietaken uit te voeren zoals montage, het grijpen van kwetsbare objecten en adaptief grijpen."
      }
    },
    {
      question: {
        en: "What is the primary challenge in developing autonomous surgical robots?",
        es: "¿Cuál es el desafío principal en el desarrollo de robots quirúrgicos autónomos?",
        de: "Was ist die Hauptherausforderung bei der Entwicklung autonomer Chirurgie-Roboter?",
        nl: "Wat is de primaire uitdaging bij het ontwikkelen van autonome chirurgische robots?"
      },
      options: [
        { en: "Ensuring millimeter-precision with real-time tissue deformation and safety constraints", es: "Asegurar precisión milimétrica con deformación de tejido en tiempo real y restricciones de seguridad", de: "Millimeter-Präzision mit Echtzeit-Gewebeverformung und Sicherheitsbeschränkungen sicherstellen", nl: "Millimeter-precisie verzekeren met real-time weefsel vervorming en veiligheidsbeperkingen" },
        { en: "Creating faster surgical procedures", es: "Crear procedimientos quirúrgicos más rápidos", de: "Schnellere chirurgische Verfahren schaffen", nl: "Snellere chirurgische procedures creëren" },
        { en: "Reducing manufacturing costs", es: "Reducir costos de fabricación", de: "Herstellungskosten reduzieren", nl: "Productiekosten verlagen" },
        { en: "Making robots more portable", es: "Hacer robots más portátiles", de: "Roboter portabler machen", nl: "Robots draagbaarder maken" }
      ],
      correct: 0,
      explanation: {
        en: "Surgical robots must operate with extreme precision in highly dynamic environments where tissues deform unpredictably, while maintaining absolute safety standards and accounting for individual patient anatomy variations.",
        es: "Los robots quirúrgicos deben operar con precisión extrema en entornos altamente dinámicos donde los tejidos se deforman de manera impredecible, manteniendo estándares de seguridad absolutos y considerando variaciones de anatomía de pacientes individuales.",
        de: "Chirurgische Roboter müssen mit extremer Präzision in hochdynamischen Umgebungen arbeiten, wo sich Gewebe unvorhersagbar verformt, während sie absolute Sicherheitsstandards einhalten und individuelle Patientenanatomie-Variationen berücksichtigen.",
        nl: "Chirurgische robots moeten opereren met extreme precisie in zeer dynamische omgevingen waar weefsels onvoorspelbaar vervormen, terwijl ze absolute veiligheidsnormen handhaven en rekening houden met individuele patiënt anatomie variaties."
      }
    },
    {
      question: {
        en: "What is swarm robotics and what emergent behaviors can arise from simple local interactions?",
        es: "¿Qué es la robótica de enjambre y qué comportamientos emergentes pueden surgir de interacciones locales simples?",
        de: "Was ist Schwarmrobotik und welche emergenten Verhaltensweisen können aus einfachen lokalen Interaktionen entstehen?",
        nl: "Wat is zwerm robotica en welke emergente gedragingen kunnen ontstaan uit eenvoudige lokale interacties?"
      },
      options: [
        { en: "Collective behaviors like formation control, distributed sensing, and cooperative transport", es: "Comportamientos colectivos como control de formación, detección distribuida y transporte cooperativo", de: "Kollektive Verhaltensweisen wie Formationskontrolle, verteilte Sensorik und kooperativer Transport", nl: "Collectieve gedragingen zoals formatie controle, gedistribueerde sensing en coöperatief transport" },
        { en: "Individual robot optimization only", es: "Solo optimización de robot individual", de: "Nur individuelle Roboteroptimierung", nl: "Alleen individuele robot optimalisatie" },
        { en: "Centralized decision making", es: "Toma de decisiones centralizada", de: "Zentrale Entscheidungsfindung", nl: "Gecentraliseerde besluitvorming" },
        { en: "Direct human control of each robot", es: "Control humano directo de cada robot", de: "Direkte menschliche Kontrolle jedes Roboters", nl: "Directe menselijke controle van elke robot" }
      ],
      correct: 0,
      explanation: {
        en: "Swarm robotics demonstrates how simple local rules between robots can lead to complex collective behaviors like flocking, pattern formation, consensus reaching, and coordinated task execution without centralized control.",
        es: "La robótica de enjambre demuestra cómo reglas locales simples entre robots pueden llevar a comportamientos colectivos complejos como bandadas, formación de patrones, alcance de consenso y ejecución coordinada de tareas sin control centralizado.",
        de: "Schwarmrobotik zeigt, wie einfache lokale Regeln zwischen Robotern zu komplexen kollektiven Verhaltensweisen wie Schwarmverhalten, Musterbildung, Konsensbildung und koordinierter Aufgabenausführung ohne zentrale Kontrolle führen können.",
        nl: "Zwerm robotica toont aan hoe eenvoudige lokale regels tussen robots kunnen leiden tot complexe collectieve gedragingen zoals zwermen, patroon vorming, consensus bereiken en gecoördineerde taakuitvoering zonder gecentraliseerde controle."
      }
    },
    {
      question: {
        en: "What is the difference between teleoperation and telepresence in robotics?",
        es: "¿Cuál es la diferencia entre teleoperación y telepresencia en robótica?",
        de: "Was ist der Unterschied zwischen Teleoperation und Telepräsenz in der Robotik?",
        nl: "Wat is het verschil tussen teleoperatie en telepresence in robotica?"
      },
      options: [
        { en: "Telepresence provides immersive sensory feedback, while teleoperation focuses on basic remote control", es: "La telepresencia proporciona retroalimentación sensorial inmersiva, mientras la teleoperación se enfoca en control remoto básico", de: "Telepräsenz bietet immersives sensorisches Feedback, während Teleoperation auf grundlegende Fernsteuerung fokussiert", nl: "Telepresence biedt immersieve sensorische feedback, terwijl teleoperatie zich richt op basis afstandsbediening" },
        { en: "No significant difference between the two terms", es: "No hay diferencia significativa entre los dos términos", de: "Kein signifikanter Unterschied zwischen den beiden Begriffen", nl: "Geen significant verschil tussen de twee termen" },
        { en: "Teleoperation is only for industrial robots", es: "La teleoperación es solo para robots industriales", de: "Teleoperation ist nur für Industrieroboter", nl: "Teleoperatie is alleen voor industriële robots" },
        { en: "Telepresence requires multiple operators", es: "La telepresencia requiere múltiples operadores", de: "Telepräsenz erfordert mehrere Bediener", nl: "Telepresence vereist meerdere operators" }
      ],
      correct: 0,
      explanation: {
        en: "Telepresence aims to create the sensation that the operator is physically present at the remote location through rich sensory feedback (visual, haptic, audio), while teleoperation is primarily about remote control of robot actions.",
        es: "La telepresencia busca crear la sensación de que el operador está físicamente presente en la ubicación remota a través de rica retroalimentación sensorial (visual, háptica, audio), mientras la teleoperación se trata principalmente de control remoto de acciones del robot.",
        de: "Telepräsenz zielt darauf ab, das Gefühl zu schaffen, dass der Bediener physisch am entfernten Ort anwesend ist durch reichhaltiges sensorisches Feedback (visuell, haptisch, audio), während Teleoperation hauptsächlich um Fernsteuerung von Roboteraktionen geht.",
        nl: "Telepresence heeft als doel de sensatie te creëren dat de operator fysiek aanwezig is op de afgelegen locatie door rijke sensorische feedback (visueel, haptisch, audio), terwijl teleoperatie voornamelijk gaat over afstandsbediening van robot acties."
      }
    },
    {
      question: {
        en: "What is the primary advantage of using impedance control in robotic manipulation tasks?",
        es: "¿Cuál es la ventaja principal de usar control de impedancia en tareas de manipulación robótica?",
        de: "Was ist der Hauptvorteil der Verwendung von Impedanzsteuerung bei Robotermanipulationsaufgaben?",
        nl: "Wat is het primaire voordeel van het gebruik van impedantie controle in robotmanipulatie taken?"
      },
      options: [
        { en: "Unified control of both motion and force in contact tasks", es: "Control unificado de movimiento y fuerza en tareas de contacto", de: "Einheitliche Steuerung von Bewegung und Kraft bei Kontaktaufgaben", nl: "Geünificeerde controle van zowel beweging als kracht in contacttaken" },
        { en: "Eliminating all sensor requirements", es: "Eliminar todos los requisitos de sensores", de: "Eliminierung aller Sensoranforderungen", nl: "Het elimineren van alle sensorvereisten" },
        { en: "Reducing power consumption significantly", es: "Reducir significativamente el consumo de energía", de: "Energieverbrauch erheblich reduzieren", nl: "Energieverbruik aanzienlijk verminderen" },
        { en: "Simplifying robot mechanical design", es: "Simplificar el diseño mecánico del robot", de: "Vereinfachung des mechanischen Roboterdesigns", nl: "Robot mechanisch ontwerp vereenvoudigen" }
      ],
      correct: 0,
      explanation: {
        en: "Impedance control allows robots to regulate the dynamic relationship between motion and force, enabling smooth transitions between free motion and contact phases while maintaining desired stiffness and damping characteristics.",
        es: "El control de impedancia permite a los robots regular la relación dinámica entre movimiento y fuerza, permitiendo transiciones suaves entre fases de movimiento libre y contacto mientras mantiene características deseadas de rigidez y amortiguación.",
        de: "Impedanzsteuerung ermöglicht es Robotern, die dynamische Beziehung zwischen Bewegung und Kraft zu regulieren und ermöglicht sanfte Übergänge zwischen freier Bewegung und Kontaktphasen bei Beibehaltung gewünschter Steifigkeits- und Dämpfungscharakteristika.",
        nl: "Impedantie controle stelt robots in staat de dynamische relatie tussen beweging en kracht te reguleren, wat soepele overgangen mogelijk maakt tussen vrije beweging en contactfases terwijl gewenste stijfheid en dempingskarakteristieken behouden blijven."
      }
    },
    {
      question: {
        en: "What is the key challenge in developing robots for extreme environments like deep sea or space?",
        es: "¿Cuál es el desafío clave en el desarrollo de robots para entornos extremos como el mar profundo o el espacio?",
        de: "Was ist die Hauptherausforderung bei der Entwicklung von Robotern für extreme Umgebungen wie Tiefsee oder Weltraum?",
        nl: "Wat is de belangrijkste uitdaging bij het ontwikkelen van robots voor extreme omgevingen zoals de diepe zee of ruimte?"
      },
      options: [
        { en: "Ensuring reliability and autonomy with no possibility of physical maintenance or human intervention", es: "Asegurar confiabilidad y autonomía sin posibilidad de mantenimiento físico o intervención humana", de: "Zuverlässigkeit und Autonomie ohne Möglichkeit physischer Wartung oder menschlicher Intervention sicherstellen", nl: "Betrouwbaarheid en autonomie verzekeren zonder mogelijkheid van fysiek onderhoud of menselijke interventie" },
        { en: "Making robots lighter and more compact", es: "Hacer robots más ligeros y compactos", de: "Roboter leichter und kompakter machen", nl: "Robots lichter en compacter maken" },
        { en: "Improving communication speed", es: "Mejorar velocidad de comunicación", de: "Kommunikationsgeschwindigkeit verbessern", nl: "Communicatiesnelheid verbeteren" },
        { en: "Reducing manufacturing costs", es: "Reducir costos de fabricación", de: "Herstellungskosten reduzieren", nl: "Productiekosten verlagen" }
      ],
      correct: 0,
      explanation: {
        en: "Extreme environment robots must operate autonomously for extended periods in harsh conditions (pressure, temperature, radiation, corrosive materials) where repair is impossible, requiring exceptional reliability and self-diagnostic capabilities.",
        es: "Los robots de entornos extremos deben operar autónomamente por períodos extendidos en condiciones duras (presión, temperatura, radiación, materiales corrosivos) donde la reparación es imposible, requiriendo confiabilidad excepcional y capacidades de autodiagnóstico.",
        de: "Roboter für extreme Umgebungen müssen autonom über längere Zeiträume in harten Bedingungen (Druck, Temperatur, Strahlung, korrosive Materialien) arbeiten, wo Reparaturen unmöglich sind und außergewöhnliche Zuverlässigkeit und Selbstdiagnosefähigkeiten erfordern.",
        nl: "Extreme omgeving robots moeten autonoom opereren voor uitgebreide periodes in harde omstandigheden (druk, temperatuur, straling, corrosieve materialen) waar reparatie onmogelijk is, wat uitzonderlijke betrouwbaarheid en zelfdiagnostische vaardigheden vereist."
      }
    },
    {
      question: {
        en: "What is morphological computation in robotics?",
        es: "¿Qué es la computación morfológica en robótica?",
        de: "Was ist morphologische Berechnung in der Robotik?",
        nl: "Wat is morfologische berekening in robotica?"
      },
      options: [
        { en: "Using the robot's physical structure and material properties to perform computational functions", es: "Usar la estructura física del robot y propiedades de materiales para realizar funciones computacionales", de: "Die physische Struktur und Materialeigenschaften des Roboters zur Durchführung von Rechenfunktionen nutzen", nl: "Het gebruik van de fysieke structuur van de robot en materiaaleigenschappen om computationele functies uit te voeren" },
        { en: "Changing robot shape during operation", es: "Cambiar forma del robot durante operación", de: "Roboterform während des Betriebs ändern", nl: "Robot vorm veranderen tijdens operatie" },
        { en: "Computing optimal robot configurations", es: "Computar configuraciones óptimas del robot", de: "Optimale Roboterkonfigurationen berechnen", nl: "Optimale robot configuraties berekenen" },
        { en: "Analyzing robot mechanical design", es: "Analizar diseño mecánico del robot", de: "Robotermechanisches Design analysieren", nl: "Robot mechanisch ontwerp analyseren" }
      ],
      correct: 0,
      explanation: {
        en: "Morphological computation leverages the robot's embodiment - its shape, material properties, and mechanical structure - to simplify control and computation by having the body itself contribute to information processing and behavior generation.",
        es: "La computación morfológica aprovecha la encarnación del robot - su forma, propiedades de materiales y estructura mecánica - para simplificar control y computación teniendo el cuerpo mismo contribuir al procesamiento de información y generación de comportamiento.",
        de: "Morphologische Berechnung nutzt die Verkörperung des Roboters - seine Form, Materialeigenschaften und mechanische Struktur - um Kontrolle und Berechnung zu vereinfachen, indem der Körper selbst zur Informationsverarbeitung und Verhaltensgenerierung beiträgt.",
        nl: "Morfologische berekening benut de belichaming van de robot - zijn vorm, materiaaleigenschappen en mechanische structuur - om controle en berekening te vereenvoudigen door het lichaam zelf bij te laten dragen aan informatieverwerking en gedragsgeneratie."
      }
    },
    {
      question: {
        en: "What is the main advantage of using model predictive control (MPC) in robotic systems?",
        es: "¿Cuál es la ventaja principal de usar control predictivo de modelo (MPC) en sistemas robóticos?",
        de: "Was ist der Hauptvorteil der Verwendung von modellprädiktiver Regelung (MPC) in Robotersystemen?",
        nl: "Wat is het hoofdvoordeel van het gebruik van model predictive control (MPC) in robotsystemen?"
      },
      options: [
        { en: "Optimizing future trajectories while handling constraints and uncertainties", es: "Optimizar trayectorias futuras mientras maneja restricciones e incertidumbres", de: "Optimierung zukünftiger Trajektorien bei Berücksichtigung von Beschränkungen und Unsicherheiten", nl: "Toekomstige trajecten optimaliseren terwijl beperkingen en onzekerheden worden afgehandeld" },
        { en: "Eliminating the need for sensors", es: "Eliminar la necesidad de sensores", de: "Die Notwendigkeit von Sensoren eliminieren", nl: "De noodzaak voor sensoren elimineren" },
        { en: "Reducing computational complexity to zero", es: "Reducir complejidad computacional a cero", de: "Rechenkomplexität auf null reduzieren", nl: "Computationele complexiteit tot nul reduceren" },
        { en: "Working without any system model", es: "Trabajar sin ningún modelo de sistema", de: "Ohne Systemmodell arbeiten", nl: "Werken zonder enig systeemmodel" }
      ],
      correct: 0,
      explanation: {
        en: "MPC uses a predictive model to optimize control actions over a finite time horizon while explicitly handling system constraints, obstacles, and uncertainties, enabling robots to plan safe and efficient trajectories in complex environments.",
        es: "MPC usa un modelo predictivo para optimizar acciones de control sobre un horizonte de tiempo finito mientras maneja explícitamente restricciones del sistema, obstáculos e incertidumbres, permitiendo a robots planear trayectorias seguras y eficientes en entornos complejos.",
        de: "MPC verwendet ein prädiktives Modell zur Optimierung von Steueraktionen über einen endlichen Zeithorizont bei expliziter Berücksichtigung von Systembeschränkungen, Hindernissen und Unsicherheiten, wodurch Roboter sichere und effiziente Trajektorien in komplexen Umgebungen planen können.",
        nl: "MPC gebruikt een voorspellend model om controleacties te optimaliseren over een eindige tijdshorizon terwijl het expliciet systeembeperkingen, obstakels en onzekerheden afhandelt, waardoor robots veilige en efficiënte trajecten kunnen plannen in complexe omgevingen."
      }
    },
    {
      question: {
        en: "What is the primary goal of shared autonomy in human-robot systems?",
        es: "¿Cuál es el objetivo principal de la autonomía compartida en sistemas humano-robot?",
        de: "Was ist das Hauptziel der geteilten Autonomie in Mensch-Roboter-Systemen?",
        nl: "Wat is het primaire doel van gedeelde autonomie in mens-robot systemen?"
      },
      options: [
        { en: "Combining human intelligence and robot capabilities to achieve better performance than either alone", es: "Combinar inteligencia humana y capacidades robóticas para lograr mejor rendimiento que cualquiera solo", de: "Menschliche Intelligenz und Roboterfähigkeiten kombinieren, um bessere Leistung als jeder allein zu erzielen", nl: "Menselijke intelligentie en robot capaciteiten combineren om betere prestaties te behalen dan elk afzonderlijk" },
        { en: "Having humans control every robot action", es: "Hacer que humanos controlen cada acción del robot", de: "Menschen jede Robotaktion kontrollieren lassen", nl: "Mensen elke robot actie laten controleren" },
        { en: "Making robots completely independent", es: "Hacer robots completamente independientes", de: "Roboter vollständig unabhängig machen", nl: "Robots volledig onafhankelijk maken" },
        { en: "Reducing robot manufacturing costs", es: "Reducir costos de fabricación de robots", de: "Roboter-Herstellungskosten reduzieren", nl: "Robot productiekosten verlagen" }
      ],
      correct: 0,
      explanation: {
        en: "Shared autonomy creates a collaborative partnership where human expertise (intuition, high-level reasoning, adaptability) combines with robot precision and consistency, dynamically adjusting the level of human vs robot control based on task demands and context.",
        es: "La autonomía compartida crea una asociación colaborativa donde la experiencia humana (intuición, razonamiento de alto nivel, adaptabilidad) se combina con precisión y consistencia robótica, ajustando dinámicamente el nivel de control humano vs robot basado en demandas de tarea y contexto.",
        de: "Geteilte Autonomie schafft eine kollaborative Partnerschaft, wo menschliche Expertise (Intuition, hochrangiges Reasoning, Anpassungsfähigkeit) sich mit Roboterpräzision und Konsistenz verbindet und dynamisch das Niveau menschlicher vs Roboterkontrolle basierend auf Aufgabenanforderungen und Kontext anpasst.",
        nl: "Gedeelde autonomie creëert een collaboratief partnerschap waar menselijke expertise (intuïtie, hoog-niveau redeneren, aanpassingsvermogen) combineert met robot precisie en consistentie, dynamisch het niveau van menselijke vs robot controle aanpassend gebaseerd op taakvereisten en context."
      }
    },
    {
      question: {
        en: "What is the significance of sim-to-real transfer in modern robotics?",
        es: "¿Cuál es la importancia de la transferencia simulación-a-real en robótica moderna?",
        de: "Was ist die Bedeutung des Sim-to-Real-Transfers in der modernen Robotik?",
        nl: "Wat is de betekenis van sim-to-real transfer in moderne robotica?"
      },
      options: [
        { en: "Bridging the gap between simulation training and real-world deployment through domain adaptation techniques", es: "Cerrar la brecha entre entrenamiento de simulación y despliegue en mundo real a través de técnicas de adaptación de dominio", de: "Die Lücke zwischen Simulationstraining und realer Welt-Deployment durch Domänenadaptationstechniken schließen", nl: "De kloof overbruggen tussen simulatietraining en werkelijke wereld inzet door domeinaanpassingstechnieken" },
        { en: "Converting simulation software to real hardware", es: "Convertir software de simulación a hardware real", de: "Simulationssoftware in reale Hardware konvertieren", nl: "Simulatiesoftware converteren naar echte hardware" },
        { en: "Making simulations more realistic visually", es: "Hacer simulaciones más realistas visualmente", de: "Simulationen visuell realistischer machen", nl: "Simulaties visueel realistischer maken" },
        { en: "Reducing simulation computational requirements", es: "Reducir requisitos computacionales de simulación", de: "Simulationsberechnungsanforderungen reduzieren", nl: "Simulatie computationele vereisten verminderen" }
      ],
      correct: 0,
      explanation: {
        en: "Sim-to-real transfer addresses the reality gap between simulated environments and real-world conditions by using techniques like domain randomization, progressive learning, and robust control to ensure that policies learned in simulation perform effectively on physical robots.",
        es: "La transferencia sim-to-real aborda la brecha de realidad entre entornos simulados y condiciones del mundo real usando técnicas como aleatorización de dominio, aprendizaje progresivo y control robusto para asegurar que políticas aprendidas en simulación funcionen efectivamente en robots físicos.",
        de: "Sim-to-Real-Transfer adressiert die Realitätslücke zwischen simulierten Umgebungen und realen Bedingungen durch Verwendung von Techniken wie Domänen-Randomisierung, progressivem Lernen und robuster Kontrolle zur Sicherstellung, dass in Simulation erlernte Richtlinien effektiv auf physischen Robotern funktionieren.",
        nl: "Sim-to-real transfer pakt de realiteitskloof aan tussen gesimuleerde omgevingen en werkelijke wereld omstandigheden door technieken te gebruiken zoals domein randomisatie, progressief leren en robuuste controle om ervoor te zorgen dat beleid geleerd in simulatie effectief presteert op fysieke robots."
      }
    },
    {
      question: {
        en: "What is neuromorphic robotics and its potential advantages?",
        es: "¿Qué es la robótica neuromórfica y sus ventajas potenciales?",
        de: "Was ist neuromorphe Robotik und ihre potenziellen Vorteile?",
        nl: "Wat is neuromorfische robotica en zijn potentiële voordelen?"
      },
      options: [
        { en: "Brain-inspired computing architectures enabling ultra-low power consumption and real-time sensorimotor processing", es: "Arquitecturas de computación inspiradas en cerebro que permiten consumo de energía ultra-bajo y procesamiento sensoriomotor en tiempo real", de: "Gehirn-inspirierte Computerarchitekturen, die ultra-niedrigen Energieverbrauch und Echtzeit-sensomotorische Verarbeitung ermöglichen", nl: "Brein-geïnspireerde computerarchitecturen die ultra-laag energieverbruik en real-time sensomotorische verwerking mogelijk maken" },
        { en: "Robots that mimic human facial expressions", es: "Robots que imitan expresiones faciales humanas", de: "Roboter, die menschliche Gesichtsausdrücke nachahmen", nl: "Robots die menselijke gezichtsuitdrukkingen nabootsen" },
        { en: "Using biological neural tissue in robots", es: "Usar tejido neural biológico en robots", de: "Verwendung biologischen Nervengewebes in Robotern", nl: "Het gebruik van biologisch neuraal weefsel in robots" },
        { en: "Programming robots to understand emotions", es: "Programar robots para entender emociones", de: "Roboter zur Emotionsverständnis programmieren", nl: "Robots programmeren om emoties te begrijpen" }
      ],
      correct: 0,
      explanation: {
        en: "Neuromorphic robotics employs brain-inspired spiking neural networks and event-driven processing, offering advantages like extremely low power consumption, inherent parallelism, fault tolerance, and real-time adaptation capabilities ideal for autonomous robotic systems.",
        es: "La robótica neuromórfica emplea redes neurales de picos inspiradas en cerebro y procesamiento impulsado por eventos, ofreciendo ventajas como consumo de energía extremadamente bajo, paralelismo inherente, tolerancia a fallas y capacidades de adaptación en tiempo real ideales para sistemas robóticos autónomos.",
        de: "Neuromorphe Robotik verwendet gehirn-inspirierte spiking neuronale Netzwerke und ereignisgesteuerte Verarbeitung und bietet Vorteile wie extrem niedrigen Energieverbrauch, inhärente Parallelität, Fehlertoleranz und Echtzeit-Anpassungsfähigkeiten ideal für autonome Robotersysteme.",
        nl: "Neuromorfische robotica gebruikt brein-geïnspireerde spiking neurale netwerken en gebeurtenisgestuurde verwerking, biedend voordelen zoals extreem laag energieverbruik, inherent parallellisme, fouttolerantie en real-time aanpassingsmogelijkheden ideaal voor autonome robotsystemen."
      }
    },
    {
      question: {
        en: "What is continual learning in robotics and why is it crucial for autonomous systems?",
        es: "¿Qué es el aprendizaje continuo en robótica y por qué es crucial para sistemas autónomos?",
        de: "Was ist kontinuierliches Lernen in der Robotik und warum ist es entscheidend für autonome Systeme?",
        nl: "Wat is continu leren in robotica en waarom is het cruciaal voor autonome systemen?"
      },
      options: [
        { en: "Learning new skills while retaining previously acquired knowledge without catastrophic forgetting", es: "Aprender nuevas habilidades mientras retiene conocimiento previamente adquirido sin olvido catastrófico", de: "Neue Fähigkeiten lernen bei Beibehaltung zuvor erworbenen Wissens ohne katastrophales Vergessen", nl: "Nieuwe vaardigheden leren terwijl eerder verworven kennis behouden blijft zonder catastrofaal vergeten" },
        { en: "Running learning algorithms continuously without breaks", es: "Ejecutar algoritmos de aprendizaje continuamente sin descansos", de: "Lernalgorithmen kontinuierlich ohne Pausen ausführen", nl: "Leeralgoritmen continu uitvoeren zonder onderbrekingen" },
        { en: "Learning only the same task repeatedly", es: "Aprender solo la misma tarea repetidamente", de: "Nur die gleiche Aufgabe wiederholt lernen", nl: "Alleen dezelfde taak herhaaldelijk leren" },
        { en: "Requiring constant human supervision for learning", es: "Requerir supervisión humana constante para aprendizaje", de: "Konstante menschliche Überwachung für Lernen erfordern", nl: "Constante menselijke supervisie vereisen voor leren" }
      ],
      correct: 0,
      explanation: {
        en: "Continual learning enables robots to adapt to new environments and tasks throughout their operational lifetime while preserving existing capabilities, crucial for long-term deployment in dynamic real-world scenarios where requirements evolve.",
        es: "El aprendizaje continuo permite a los robots adaptarse a nuevos entornos y tareas durante su vida operacional mientras preserva capacidades existentes, crucial para despliegue a largo plazo en escenarios dinámicos del mundo real donde los requisitos evolucionan.",
        de: "Kontinuierliches Lernen ermöglicht es Robotern, sich während ihrer Betriebslebensdauer an neue Umgebungen und Aufgaben anzupassen bei Beibehaltung bestehender Fähigkeiten, entscheidend für langfristige Einsätze in dynamischen realen Szenarien mit sich entwickelnden Anforderungen.",
        nl: "Continu leren stelt robots in staat zich aan te passen aan nieuwe omgevingen en taken gedurende hun operationele levensduur terwijl bestaande capaciteiten behouden blijven, cruciaal voor lange-termijn inzet in dynamische echte wereld scenario's waar vereisten evolueren."
      }
    },
    {
      question: {
        en: "What is self-reconfigurable robotics and its potential applications?",
        es: "¿Qué es la robótica auto-reconfigurable y sus aplicaciones potenciales?",
        de: "Was ist selbst-rekonfigurierbare Robotik und ihre potenziellen Anwendungen?",
        nl: "Wat is zelf-herconfigureerbare robotica en zijn potentiële toepassingen?"
      },
      options: [
        { en: "Modular robots that can autonomously reorganize their physical structure for different tasks or environments", es: "Robots modulares que pueden reorganizar autónomamente su estructura física para diferentes tareas o entornos", de: "Modulare Roboter, die ihre physische Struktur autonom für verschiedene Aufgaben oder Umgebungen reorganisieren können", nl: "Modulaire robots die autonoom hun fysieke structuur kunnen reorganiseren voor verschillende taken of omgevingen" },
        { en: "Robots that only change their software configuration", es: "Robots que solo cambian su configuración de software", de: "Roboter, die nur ihre Software-Konfiguration ändern", nl: "Robots die alleen hun software configuratie veranderen" },
        { en: "Traditional industrial robots with better programming", es: "Robots industriales tradicionales con mejor programación", de: "Traditionelle Industrieroboter mit besserer Programmierung", nl: "Traditionele industriële robots met betere programmering" },
        { en: "Robots designed exclusively for manufacturing", es: "Robots diseñados exclusivamente para fabricación", de: "Roboter ausschließlich für die Fertigung entwickelt", nl: "Robots uitsluitend ontworpen voor fabricage" }
      ],
      correct: 0,
      explanation: {
        en: "Self-reconfigurable robots consist of modular units that can autonomously reorganize their physical structure to adapt to different environments, tasks, or damage scenarios, offering unprecedented flexibility, fault tolerance, and adaptability in robotic systems.",
        es: "Los robots auto-reconfigurables consisten en unidades modulares que pueden reorganizar autónomamente su estructura física para adaptarse a diferentes entornos, tareas o escenarios de daño, ofreciendo flexibilidad, tolerancia a fallos y adaptabilidad sin precedentes en sistemas robóticos.",
        de: "Selbst-rekonfigurierbare Roboter bestehen aus modularen Einheiten, die autonom ihre physische Struktur reorganisieren können, um sich an verschiedene Umgebungen, Aufgaben oder Schadenszenarien anzupassen und beispiellose Flexibilität, Fehlertoleranz und Anpassungsfähigkeit in Robotersystemen bieten.",
        nl: "Zelf-herconfigureerbare robots bestaan uit modulaire eenheden die autonoom hun fysieke structuur kunnen reorganiseren om zich aan te passen aan verschillende omgevingen, taken of schade scenario's, wat ongekende flexibiliteit, fout tolerantie en aanpassingsvermogen biedt in robotsystemen."
      }
    },
    {
      question: {
        en: "What is digital twin technology in robotics and its main benefits?",
        es: "¿Qué es la tecnología de gemelo digital en robótica y sus principales beneficios?",
        de: "Was ist Digital-Twin-Technologie in der Robotik und ihre Hauptvorteile?",
        nl: "Wat is digitale tweeling technologie in robotica en zijn hoofdvoordelen?"
      },
      options: [
        { en: "Real-time virtual replicas for simulation, monitoring, predictive maintenance, and optimization", es: "Réplicas virtuales en tiempo real para simulación, monitoreo, mantenimiento predictivo y optimización", de: "Echtzeit-virtuelle Replikas für Simulation, Überwachung, vorausschauende Wartung und Optimierung", nl: "Real-time virtuele replica's voor simulatie, monitoring, voorspellend onderhoud en optimalisatie" },
        { en: "Creating identical physical robot copies", es: "Crear copias físicas idénticas de robots", de: "Identische physische Roboterkopien erstellen", nl: "Identieke fysieke robot kopieën creëren" },
        { en: "Reducing robot programming complexity only", es: "Solo reducir complejidad de programación de robots", de: "Nur Roboter-Programmierungskomplexität reduzieren", nl: "Alleen robot programmering complexiteit verminderen" },
        { en: "Eliminating need for physical testing entirely", es: "Eliminar completamente la necesidad de pruebas físicas", de: "Bedarf an physischen Tests vollständig eliminieren", nl: "Behoefte aan fysieke tests volledig elimineren" }
      ],
      correct: 0,
      explanation: {
        en: "Digital twins are real-time virtual models that mirror physical robots, enabling simulation of scenarios, performance monitoring, fault prediction, optimization of operations, and testing of new behaviors without risking the physical system.",
        es: "Los gemelos digitales son modelos virtuales en tiempo real que reflejan robots físicos, permitiendo simulación de escenarios, monitoreo de rendimiento, predicción de fallas, optimización de operaciones y prueba de nuevos comportamientos sin arriesgar el sistema físico.",
        de: "Digitale Zwillinge sind Echtzeit-virtuelle Modelle, die physische Roboter spiegeln und Simulation von Szenarien, Leistungsüberwachung, Fehlervorhersage, Betriebsoptimierung und Testen neuer Verhaltensweisen ohne Risiko für das physische System ermöglichen.",
        nl: "Digitale tweelingen zijn real-time virtuele modellen die fysieke robots spiegelen, wat simulatie van scenario's, prestatie monitoring, fout voorspelling, operatie optimalisatie en testen van nieuw gedrag mogelijk maakt zonder het fysieke systeem te riskeren."
      }
    },
    {
      question: {
        en: "What is the primary advantage of hierarchical control architectures in complex robotic systems?",
        es: "¿Cuál es la ventaja principal de arquitecturas de control jerárquicas en sistemas robóticos complejos?",
        de: "Was ist der Hauptvorteil hierarchischer Steuerungsarchitekturen in komplexen Robotersystemen?",
        nl: "Wat is het primaire voordeel van hiërarchische controle architecturen in complexe robotsystemen?"
      },
      options: [
        { en: "Decomposing complex tasks into manageable subtasks with different time scales and abstraction levels", es: "Descomponer tareas complejas en subtareas manejables con diferentes escalas de tiempo y niveles de abstracción", de: "Komplexe Aufgaben in handhabbare Unteraufgaben mit verschiedenen Zeitskalen und Abstraktionsebenen zerlegen", nl: "Complexe taken ontbinden in hanteerbare subtaken met verschillende tijdschalen en abstractieniveaus" },
        { en: "Eliminating all sensor requirements completely", es: "Eliminar completamente todos los requisitos de sensores", de: "Alle Sensoranforderungen vollständig eliminieren", nl: "Alle sensorvereisten volledig elimineren" },
        { en: "Reducing power consumption to zero", es: "Reducir consumo de energía a cero", de: "Energieverbrauch auf null reduzieren", nl: "Energieverbruik tot nul reduceren" },
        { en: "Making all robots identical in behavior", es: "Hacer que todos los robots sean idénticos en comportamiento", de: "Alle Roboter im Verhalten identisch machen", nl: "Alle robots identiek maken in gedrag" }
      ],
      correct: 0,
      explanation: {
        en: "Hierarchical control enables systematic decomposition of complex robotic tasks into layers of increasing abstraction, allowing high-level planners to focus on goals while low-level controllers handle immediate execution, improving modularity, maintainability, and scalability.",
        es: "El control jerárquico permite descomposición sistemática de tareas robóticas complejas en capas de abstracción creciente, permitiendo que planificadores de alto nivel se enfoquen en objetivos mientras controladores de bajo nivel manejan ejecución inmediata, mejorando modularidad, mantenibilidad y escalabilidad.",
        de: "Hierarchische Steuerung ermöglicht systematische Zerlegung komplexer robotischer Aufgaben in Schichten zunehmender Abstraktion, wodurch Hochebenen-Planer sich auf Ziele konzentrieren können während Niederebenen-Controller sofortige Ausführung handhaben und Modularität, Wartbarkeit und Skalierbarkeit verbessern.",
        nl: "Hiërarchische controle maakt systematische ontbinding mogelijk van complexe robotische taken in lagen van toenemende abstractie, waardoor hoog-niveau planners zich kunnen richten op doelen terwijl laag-niveau controllers onmiddellijke uitvoering afhandelen, wat modulariteit, onderhoudbaarheid en schaalbaarheid verbetert."
      }
    },
    {
      question: {
        en: "What is quantum robotics and its potential revolutionary impact?",
        es: "¿Qué es la robótica cuántica y su impacto revolucionario potencial?",
        de: "Was ist Quantenrobotik und ihre potenziell revolutionäre Auswirkung?",
        nl: "Wat is quantum robotica en zijn potentiële revolutionaire impact?"
      },
      options: [
        { en: "Leveraging quantum computing principles for exponential speedup in planning, optimization, and learning", es: "Aprovechar principios de computación cuántica para aceleración exponencial en planificación, optimización y aprendizaje", de: "Quantencomputing-Prinzipien für exponentielle Beschleunigung in Planung, Optimierung und Lernen nutzen", nl: "Quantum computing principes benutten voor exponentiële versnelling in planning, optimalisatie en leren" },
        { en: "Using quantum mechanics only for robot navigation", es: "Usar mecánica cuántica solo para navegación de robots", de: "Quantenmechanik nur für Roboternavigation verwenden", nl: "Quantum mechanica alleen gebruiken voor robot navigatie" },
        { en: "Creating robots at quantum scale exclusively", es: "Crear robots exclusivamente a escala cuántica", de: "Roboter ausschließlich im Quantenmaßstab erstellen", nl: "Robots uitsluitend op quantum schaal creëren" },
        { en: "Making robots invisible through quantum effects", es: "Hacer robots invisibles a través de efectos cuánticos", de: "Roboter durch Quanteneffekte unsichtbar machen", nl: "Robots onzichtbaar maken door quantum effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Quantum robotics explores the integration of quantum computing with robotic systems, potentially offering exponential advantages in complex optimization problems, machine learning, sensing capabilities, and solving computationally intractable problems in real-time control and planning.",
        es: "La robótica cuántica explora la integración de computación cuántica con sistemas robóticos, potencialmente ofreciendo ventajas exponenciales en problemas de optimización complejos, aprendizaje automático, capacidades de detección y resolución de problemas computacionalmente intratables en control y planificación en tiempo real.",
        de: "Quantenrobotik erforscht die Integration von Quantencomputing mit robotischen Systemen und bietet potenziell exponentielle Vorteile bei komplexen Optimierungsproblemen, maschinellem Lernen, Sensorfähigkeiten und Lösung rechnerisch unlösbarer Probleme in Echtzeit-Kontrolle und -Planung.",
        nl: "Quantum robotica verkent de integratie van quantum computing met robotische systemen, wat potentieel exponentiële voordelen biedt in complexe optimalisatieproblemen, machine learning, detectiecapaciteiten en het oplossen van computationeel onhanteerbare problemen in real-time controle en planning."
      }
    },
    {
      question: {
        en: "What is liquid robotics and its unique characteristics?",
        es: "¿Qué es la robótica líquida y sus características únicas?",
        de: "Was ist Flüssigrobotik und ihre einzigartigen Eigenschaften?",
        nl: "Wat is vloeistof robotica en zijn unieke kenmerken?"
      },
      options: [
        { en: "Robots made from liquid materials that can change shape, split, merge, and flow through confined spaces", es: "Robots hechos de materiales líquidos que pueden cambiar forma, dividirse, fusionarse y fluir a través de espacios confinados", de: "Roboter aus flüssigen Materialien, die Form ändern, sich teilen, verschmelzen und durch enge Räume fließen können", nl: "Robots gemaakt van vloeibare materialen die van vorm kunnen veranderen, splitsen, samenvoegen en door beperkte ruimtes stromen" },
        { en: "Underwater robots designed exclusively for ocean exploration", es: "Robots submarinos diseñados exclusivamente para exploración oceánica", de: "Unterwasser-Roboter ausschließlich für Meereserkundung entwickelt", nl: "Onderwater robots uitsluitend ontworpen voor oceaan exploratie" },
        { en: "Robots that work only with liquid materials", es: "Robots que trabajan solo con materiales líquidos", de: "Roboter, die nur mit flüssigen Materialien arbeiten", nl: "Robots die alleen werken met vloeibare materialen" },
        { en: "Traditional robots cooled by liquid systems", es: "Robots tradicionales enfriados por sistemas líquidos", de: "Traditionelle Roboter, die von Flüssigkeitssystemen gekühlt werden", nl: "Traditionele robots gekoeld door vloeistofsystemen" }
      ],
      correct: 0,
      explanation: {
        en: "Liquid robotics involves robots constructed from programmable matter that can exist in liquid states, enabling unprecedented capabilities like shape-shifting, self-repair, passing through narrow openings, and distributed sensing across fluid environments.",
        es: "La robótica líquida involucra robots construidos de materia programable que puede existir en estados líquidos, permitiendo capacidades sin precedentes como cambio de forma, auto-reparación, pasar a través de aberturas estrechas y detección distribuida en entornos fluidos.",
        de: "Flüssigrobotik umfasst Roboter, die aus programmierbarer Materie konstruiert sind, die in flüssigen Zuständen existieren kann und beispiellose Fähigkeiten wie Formwandel, Selbstreparatur, Durchgang durch enge Öffnungen und verteilte Sensorik in flüssigen Umgebungen ermöglicht.",
        nl: "Vloeistof robotica betreft robots geconstrueerd van programmeerbare materie die kan bestaan in vloeibare toestanden, wat ongekende mogelijkheden mogelijk maakt zoals vormverandering, zelfherstel, doorgang door nauwe openingen en gedistribueerde detectie in vloeistofomgevingen."
      }
    },
    {
      question: {
        en: "What is the concept of robot consciousness and its implications for future robotics?",
        es: "¿Cuál es el concepto de conciencia robótica y sus implicaciones para la robótica futura?",
        de: "Was ist das Konzept des Roboterbewusstseins und seine Implikationen für die Zukunft der Robotik?",
        nl: "Wat is het concept van robot bewustzijn en zijn implicaties voor toekomstige robotica?"
      },
      options: [
        { en: "Theoretical framework exploring self-awareness, subjective experience, and autonomous decision-making in artificial systems", es: "Marco teórico explorando autoconciencia, experiencia subjetiva y toma de decisiones autónoma en sistemas artificiales", de: "Theoretischer Rahmen zur Erforschung von Selbstbewusstsein, subjektiver Erfahrung und autonomer Entscheidungsfindung in künstlichen Systemen", nl: "Theoretisch raamwerk dat zelfbewustzijn, subjectieve ervaring en autonome besluitvorming in kunstmatige systemen verkent" },
        { en: "Simply making robots aware of their surroundings", es: "Simplemente hacer que los robots sean conscientes de su entorno", de: "Einfach Roboter sich ihrer Umgebung bewusst machen", nl: "Simpelweg robots bewust maken van hun omgeving" },
        { en: "Programming robots to mimic human emotions", es: "Programar robots para imitar emociones humanas", de: "Roboter programmieren, um menschliche Emotionen nachzuahmen", nl: "Robots programmeren om menselijke emoties na te bootsen" },
        { en: "Creating robots that can sleep and dream", es: "Crear robots que puedan dormir y soñar", de: "Roboter erstellen, die schlafen und träumen können", nl: "Robots creëren die kunnen slapen en dromen" }
      ],
      correct: 0,
      explanation: {
        en: "Robot consciousness explores fundamental questions about machine self-awareness, phenomenal experience, and autonomous agency, potentially leading to robots capable of genuine understanding, creative problem-solving, and ethical reasoning beyond programmed responses.",
        es: "La conciencia robótica explora preguntas fundamentales sobre autoconciencia de máquinas, experiencia fenomenal y agencia autónoma, potencialmente llevando a robots capaces de comprensión genuina, resolución creativa de problemas y razonamiento ético más allá de respuestas programadas.",
        de: "Roboterbewusstsein erforscht grundlegende Fragen über maschinelles Selbstbewusstsein, phänomenale Erfahrung und autonome Handlungsfähigkeit und führt potenziell zu Robotern, die zu echtem Verständnis, kreativer Problemlösung und ethischem Reasoning jenseits programmierter Antworten fähig sind.",
        nl: "Robot bewustzijn verkent fundamentele vragen over machine zelfbewustzijn, fenomenale ervaring en autonome agency, wat potentieel kan leiden tot robots die capabel zijn tot echt begrip, creatief probleem oplossen en ethisch redeneren voorbij geprogrammeerde responsen."
      }
    },
    {
      question: {
        en: "What is evolutionary robotics and how does it advance robot development?",
        es: "¿Qué es la robótica evolutiva y cómo avanza el desarrollo de robots?",
        de: "Was ist evolutionäre Robotik und wie fördert sie die Roboter-Entwicklung?",
        nl: "Wat is evolutionaire robotica en hoe bevordert het robot ontwikkeling?"
      },
      options: [
        { en: "Using evolutionary algorithms to automatically design and optimize robot morphology, control, and behavior", es: "Usar algoritmos evolutivos para diseñar y optimizar automáticamente morfología, control y comportamiento de robots", de: "Evolutionäre Algorithmen zur automatischen Gestaltung und Optimierung von Roboter-Morphologie, -Steuerung und -Verhalten verwenden", nl: "Evolutionaire algoritmen gebruiken om robot morfologie, controle en gedrag automatisch te ontwerpen en optimaliseren" },
        { en: "Studying how biological evolution created different species", es: "Estudiar cómo la evolución biológica creó diferentes especies", de: "Studium, wie biologische Evolution verschiedene Arten schuf", nl: "Bestuderen hoe biologische evolutie verschillende soorten creëerde" },
        { en: "Making robots that can reproduce physically", es: "Hacer robots que pueden reproducirse físicamente", de: "Roboter herstellen, die sich physisch reproduzieren können", nl: "Robots maken die zich fysiek kunnen reproduceren" },
        { en: "Creating robots that age and die naturally", es: "Crear robots que envejecen y mueren naturalmente", de: "Roboter erstellen, die natürlich altern und sterben", nl: "Robots creëren die natuurlijk verouderen en sterven" }
      ],
      correct: 0,
      explanation: {
        en: "Evolutionary robotics applies evolutionary computation principles to automatically evolve robot designs, neural network controllers, and behavioral strategies, discovering novel solutions that might not be conceived through traditional engineering approaches.",
        es: "La robótica evolutiva aplica principios de computación evolutiva para evolucionar automáticamente diseños de robots, controladores de redes neuronales y estrategias de comportamiento, descubriendo soluciones novedosas que podrían no concebirse a través de enfoques de ingeniería tradicionales.",
        de: "Evolutionäre Robotik wendet evolutionäre Berechnungsprinzipien an, um Roboter-Designs, neuronale Netzwerk-Controller und Verhaltensstrategien automatisch zu entwickeln und neuartige Lösungen zu entdecken, die durch traditionelle Ingenieur-Ansätze möglicherweise nicht konzipiert würden.",
        nl: "Evolutionaire robotica past evolutionaire computatie principes toe om robot ontwerpen, neurale netwerk controllers en gedragsstrategieën automatisch te evolueren, waarbij nieuwe oplossingen worden ontdekt die mogelijk niet bedacht zouden worden door traditionele engineering benaderingen."
      }
    }
  ]
});
