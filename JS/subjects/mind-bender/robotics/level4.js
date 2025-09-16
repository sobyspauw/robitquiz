// Robotics - Level 4: Advanced Control Systems & AI Integration
window.addLevel('mind-bender/robotics', {
  name: { 
    en: 'Advanced Control Systems & AI Integration', 
    es: 'Sistemas de Control Avanzados e Integración de IA', 
    de: 'Erweiterte Steuerungssysteme & KI-Integration', 
    nl: 'Geavanceerde Besturingssystemen & AI-Integratie' 
  },
  questions: [
    {
      question: {
        en: "What is adaptive control in robotics?",
        es: "¿Qué es el control adaptativo en robótica?",
        de: "Was ist adaptive Steuerung in der Robotik?",
        nl: "Wat is adaptieve controle in de robotica?"
      },
      options: [
        { en: "A control system that automatically adjusts its parameters based on changing conditions", es: "Un sistema de control que ajusta automáticamente sus parámetros basado en condiciones cambiantes", de: "Ein Steuersystem, das seine Parameter automatisch basierend auf sich ändernden Bedingungen anpasst", nl: "Een controlesysteem dat automatisch zijn parameters aanpast op basis van veranderende omstandigheden" },
        { en: "A fixed-parameter control system for specific tasks", es: "Un sistema de control de parámetros fijos para tareas específicas", de: "Ein Festparameter-Steuersystem für spezifische Aufgaben", nl: "Een vast-parameter controlesysteem voor specifieke taken" },
        { en: "A manual adjustment mechanism for robot joints", es: "Un mecanismo de ajuste manual para articulaciones de robot", de: "Ein manueller Einstellmechanismus für Robotergelenke", nl: "Een handmatig aanpassingsmechanisme voor robotgewrichten" },
        { en: "A power management system for robot batteries", es: "Un sistema de gestión de energía para baterías de robot", de: "Ein Energieverwaltungssystem für Roboterbatterien", nl: "Een energiebeheersysteem voor robotbatterijen" }
      ],
      correct: 0,
      explanation: {
        en: "Adaptive control systems can modify their own parameters in real-time to maintain optimal performance despite changes in system dynamics, disturbances, or operating conditions. This is crucial for robots operating in uncertain or varying environments.",
        es: "Los sistemas de control adaptativo pueden modificar sus propios parámetros en tiempo real para mantener un rendimiento óptimo a pesar de cambios en la dinámica del sistema, perturbaciones o condiciones de operación. Esto es crucial para robots que operan en entornos inciertos o variables.",
        de: "Adaptive Steuersysteme können ihre eigenen Parameter in Echtzeit modifizieren, um optimale Leistung trotz Änderungen in der Systemdynamik, Störungen oder Betriebsbedingungen aufrechtzuerhalten. Dies ist entscheidend für Roboter, die in unsicheren oder sich verändernden Umgebungen arbeiten.",
        nl: "Adaptieve controlesystemen kunnen hun eigen parameters in realtime aanpassen om optimale prestaties te behouden ondanks veranderingen in systeemynamica, verstoringen of bedrijfsomstandigheden. Dit is cruciaal voor robots die werken in onzekere of variërende omgevingen."
      }
    },
    {
      question: {
        en: "What is model predictive control (MPC) in robotics applications?",
        es: "¿Qué es el control predictivo de modelo (MPC) en aplicaciones robóticas?",
        de: "Was ist modellprädiktive Regelung (MPC) in robotischen Anwendungen?",
        nl: "Wat is model predictieve controle (MPC) in robotica-applicaties?"
      },
      options: [
        { en: "A control strategy that uses a system model to predict future behavior and optimize control actions", es: "Una estrategia de control que usa un modelo del sistema para predecir comportamiento futuro y optimizar acciones de control", de: "Eine Steuerungsstrategie, die ein Systemmodell verwendet, um zukünftiges Verhalten vorherzusagen und Steuerungsaktionen zu optimieren", nl: "Een controlestrategie die een systeemmodel gebruikt om toekomstig gedrag te voorspellen en controleacties te optimaliseren" },
        { en: "A method for creating 3D models of robot workspaces", es: "Un método para crear modelos 3D de espacios de trabajo de robots", de: "Eine Methode zur Erstellung von 3D-Modellen von Roboterarbeitsbereichen", nl: "Een methode voor het maken van 3D-modellen van robotwerkruimtes" },
        { en: "A technique for predicting robot component failures", es: "Una técnica para predecir fallas de componentes de robot", de: "Eine Technik zur Vorhersage von Roboterkomponentenausfällen", nl: "Een techniek voor het voorspellen van robotcomponent storingen" },
        { en: "A programming language for robot motion planning", es: "Un lenguaje de programación para planificación de movimiento de robots", de: "Eine Programmiersprache für Roboterbewegungsplanung", nl: "Een programmeertaal voor robotbewegingsplanning" }
      ],
      correct: 0,
      explanation: {
        en: "Model Predictive Control uses a mathematical model of the system to predict its future states over a prediction horizon, then optimizes control actions to achieve desired performance while satisfying constraints. It's particularly effective for complex, multi-variable systems with constraints.",
        es: "El Control Predictivo de Modelo usa un modelo matemático del sistema para predecir sus estados futuros sobre un horizonte de predicción, luego optimiza las acciones de control para lograr el rendimiento deseado mientras satisface restricciones. Es particularmente efectivo para sistemas complejos multivariables con restricciones.",
        de: "Modellprädiktive Regelung verwendet ein mathematisches Modell des Systems, um seine zukünftigen Zustände über einen Vorhersagehorizont vorherzusagen, dann optimiert sie Steuerungsaktionen, um gewünschte Leistung zu erreichen, während Beschränkungen erfüllt werden. Sie ist besonders effektiv für komplexe, multivariable Systeme mit Beschränkungen.",
        nl: "Model Predictieve Controle gebruikt een wiskundig model van het systeem om zijn toekomstige toestanden over een voorspellingshorizon te voorspellen, dan optimaliseert het controleacties om gewenste prestaties te bereiken terwijl beperkingen worden gerespecteerd. Het is bijzonder effectief voor complexe, multivariabele systemen met beperkingen."
      }
    },
    {
      question: {
        en: "What is reinforcement learning in the context of robot control?",
        es: "¿Qué es el aprendizaje por refuerzo en el contexto del control de robots?",
        de: "Was ist bestärkendes Lernen im Kontext der Robotersteuerung?",
        nl: "Wat is versterkend leren in de context van robotcontrole?"
      },
      options: [
        { en: "A machine learning approach where robots learn optimal behaviors through trial and error with reward feedback", es: "Un enfoque de aprendizaje automático donde los robots aprenden comportamientos óptimos a través de prueba y error con retroalimentación de recompensa", de: "Ein maschinelles Lernverfahren, bei dem Roboter optimale Verhaltensweisen durch Versuch und Irrtum mit Belohnungsrückmeldung lernen", nl: "Een machine learning benadering waarbij robots optimaal gedrag leren door trial-and-error met beloningsfeedback" },
        { en: "A method of physically reinforcing robot joints with stronger materials", es: "Un método de reforzar físicamente las articulaciones del robot con materiales más fuertes", de: "Eine Methode zur physischen Verstärkung von Robotergelenken mit stärkeren Materialien", nl: "Een methode voor het fysiek versterken van robotgewrichten met sterkere materialen" },
        { en: "A programming technique for repeating robot instructions", es: "Una técnica de programación para repetir instrucciones de robot", de: "Eine Programmiertechnik zur Wiederholung von Roboterbefehlen", nl: "Een programmeertechniek voor het herhalen van robotinstructies" },
        { en: "A safety protocol for robot operation", es: "Un protocolo de seguridad para operación de robots", de: "Ein Sicherheitsprotokoll für den Roboterbetrieb", nl: "Een veiligheidsprotocol voor robotwerking" }
      ],
      correct: 0,
      explanation: {
        en: "Reinforcement learning allows robots to learn optimal control policies by interacting with their environment, receiving rewards or penalties for actions, and gradually improving their behavior. This enables robots to adapt to new tasks and environments without explicit programming.",
        es: "El aprendizaje por refuerzo permite a los robots aprender políticas de control óptimas interactuando con su entorno, recibiendo recompensas o penalizaciones por acciones, y mejorando gradualmente su comportamiento. Esto permite a los robots adaptarse a nuevas tareas y entornos sin programación explícita.",
        de: "Bestärkendes Lernen ermöglicht es Robotern, optimale Steuerungsstrategien zu erlernen, indem sie mit ihrer Umgebung interagieren, Belohnungen oder Strafen für Aktionen erhalten und ihr Verhalten schrittweise verbessern. Dies ermöglicht es Robotern, sich ohne explizite Programmierung an neue Aufgaben und Umgebungen anzupassen.",
        nl: "Versterkend leren stelt robots in staat om optimale controlestrategieën te leren door interactie met hun omgeving, het ontvangen van beloningen of straffen voor acties, en geleidelijke verbetering van hun gedrag. Dit stelt robots in staat zich aan te passen aan nieuwe taken en omgevingen zonder expliciete programmering."
      }
    },
    {
      question: {
        en: "What is impedance control in robotic manipulation?",
        es: "¿Qué es el control de impedancia en manipulación robótica?",
        de: "Was ist Impedanzkontrolle in der robotischen Manipulation?",
        nl: "Wat is impedantiecontrole in robotische manipulatie?"
      },
      options: [
        { en: "A control method that regulates the dynamic relationship between force and motion", es: "Un método de control que regula la relación dinámica entre fuerza y movimiento", de: "Eine Steuerungsmethode, die die dynamische Beziehung zwischen Kraft und Bewegung reguliert", nl: "Een controlemethode die de dynamische relatie tussen kracht en beweging reguleert" },
        { en: "A technique for measuring electrical resistance in robot circuits", es: "Una técnica para medir la resistencia eléctrica en circuitos de robot", de: "Eine Technik zur Messung des elektrischen Widerstands in Roboterschaltungen", nl: "Een techniek voor het meten van elektrische weerstand in robotcircuits" },
        { en: "A method for preventing robot component interference", es: "Un método para prevenir interferencia de componentes de robot", de: "Eine Methode zur Verhinderung von Roboterkomponenteninterferenzen", nl: "Een methode voor het voorkomen van robotcomponent interferentie" },
        { en: "A programming approach for collision avoidance", es: "Un enfoque de programación para evitar colisiones", de: "Ein Programmierungsansatz zur Kollisionsvermeidung", nl: "Een programmeerbenaderingswijze voor botsingspreventie" }
      ],
      correct: 0,
      explanation: {
        en: "Impedance control manages the dynamic relationship between force and position/velocity, allowing robots to interact safely and effectively with their environment. It's essential for tasks requiring contact with objects, surfaces, or humans.",
        es: "El control de impedancia gestiona la relación dinámica entre fuerza y posición/velocidad, permitiendo a los robots interactuar de manera segura y efectiva con su entorno. Es esencial para tareas que requieren contacto con objetos, superficies o humanos.",
        de: "Impedanzkontrolle verwaltet die dynamische Beziehung zwischen Kraft und Position/Geschwindigkeit, wodurch Roboter sicher und effektiv mit ihrer Umgebung interagieren können. Sie ist wesentlich für Aufgaben, die Kontakt mit Objekten, Oberflächen oder Menschen erfordern.",
        nl: "Impedantiecontrole beheert de dynamische relatie tussen kracht en positie/snelheid, waardoor robots veilig en effectief kunnen interageren met hun omgeving. Het is essentieel voor taken die contact met objecten, oppervlakken of mensen vereisen."
      }
    },
    {
      question: {
        en: "What is neural network control in robotics?",
        es: "¿Qué es el control de red neuronal en robótica?",
        de: "Was ist neuronale Netzwerk-Steuerung in der Robotik?",
        nl: "Wat is neurale netwerkcontrole in de robotica?"
      },
      options: [
        { en: "Using artificial neural networks to learn and implement complex control strategies", es: "Usar redes neuronales artificiales para aprender e implementar estrategias de control complejas", de: "Verwendung künstlicher neuronaler Netzwerke zum Erlernen und Implementieren komplexer Steuerungsstrategien", nl: "Het gebruik van kunstmatige neurale netwerken om complexe controlestrategieën te leren en te implementeren" },
        { en: "A biological control system using actual nerve cells", es: "Un sistema de control biológico usando células nerviosas reales", de: "Ein biologisches Steuersystem mit echten Nervenzellen", nl: "Een biologisch controlesysteem dat echte zenuwcellen gebruikt" },
        { en: "A network protocol for robot communication", es: "Un protocolo de red para comunicación de robots", de: "Ein Netzwerkprotokoll für Roboterkommunikation", nl: "Een netwerkprotocol voor robotcommunicatie" },
        { en: "A wiring system for connecting robot sensors", es: "Un sistema de cableado para conectar sensores de robot", de: "Ein Verkabelungssystem zum Anschluss von Robotersensoren", nl: "Een bedradingssysteem voor het aansluiten van robotsensoren" }
      ],
      correct: 0,
      explanation: {
        en: "Neural network control uses artificial neural networks to learn complex, nonlinear control mappings that are difficult to model mathematically. These networks can adapt and learn from experience, making them powerful for complex control tasks.",
        es: "El control de red neuronal usa redes neuronales artificiales para aprender mapeos de control complejos y no lineales que son difíciles de modelar matemáticamente. Estas redes pueden adaptarse y aprender de la experiencia, haciéndolas poderosas para tareas de control complejas.",
        de: "Neuronale Netzwerk-Steuerung verwendet künstliche neuronale Netzwerke, um komplexe, nichtlineare Steuerungszuordnungen zu lernen, die mathematisch schwer zu modellieren sind. Diese Netzwerke können sich anpassen und aus Erfahrung lernen, wodurch sie für komplexe Steuerungsaufgaben mächtig werden.",
        nl: "Neurale netwerkcontrole gebruikt kunstmatige neurale netwerken om complexe, niet-lineaire controlemappings te leren die wiskundig moeilijk te modelleren zijn. Deze netwerken kunnen zich aanpassen en leren van ervaring, waardoor ze krachtig zijn voor complexe controletaken."
      }
    },
    {
      question: {
        en: "What is fuzzy logic control in robotics?",
        es: "¿Qué es el control de lógica difusa en robótica?",
        de: "Was ist Fuzzy-Logik-Steuerung in der Robotik?",
        nl: "Wat is fuzzy logica controle in de robotica?"
      },
      options: [
        { en: "A control approach using approximate reasoning with degrees of truth rather than binary logic", es: "Un enfoque de control usando razonamiento aproximado con grados de verdad en lugar de lógica binaria", de: "Ein Steuerungsansatz mit approximativem Schlussfolgern mit Wahrheitsgraden anstatt binärer Logik", nl: "Een controleeraanpak die benaderende redenering gebruikt met waarheidsgraden in plaats van binaire logica" },
        { en: "A control system with unclear or undefined parameters", es: "Un sistema de control con parámetros poco claros o indefinidos", de: "Ein Steuersystem mit unklaren oder undefinierten Parametern", nl: "Een controlesysteem met onduidelijke of ongedefinieerde parameters" },
        { en: "A method for handling sensor noise and interference", es: "Un método para manejar ruido e interferencia de sensores", de: "Eine Methode zum Umgang mit Sensorrauschen und Interferenzen", nl: "Een methode voor het hanteren van sensorruis en interferentie" },
        { en: "A programming technique using random control actions", es: "Una técnica de programación usando acciones de control aleatorias", de: "Eine Programmiertechnik mit zufälligen Steuerungsaktionen", nl: "Een programmeertechniek die willekeurige controleacties gebruikt" }
      ],
      correct: 0,
      explanation: {
        en: "Fuzzy logic control uses linguistic variables and rules with degrees of membership rather than crisp binary logic. This allows for more natural control of systems with uncertainty, imprecision, or partial truth, making it suitable for human-like decision making in robots.",
        es: "El control de lógica difusa usa variables lingüísticas y reglas con grados de pertenencia en lugar de lógica binaria precisa. Esto permite un control más natural de sistemas con incertidumbre, imprecisión o verdad parcial, haciéndolo adecuado para toma de decisiones similar a la humana en robots.",
        de: "Fuzzy-Logik-Steuerung verwendet linguistische Variablen und Regeln mit Zugehörigkeitsgraden anstatt scharfer binärer Logik. Dies ermöglicht natürlichere Steuerung von Systemen mit Unsicherheit, Ungenauigkeit oder partieller Wahrheit, wodurch sie für menschenähnliche Entscheidungsfindung in Robotern geeignet ist.",
        nl: "Fuzzy logica controle gebruikt linguïstische variabelen en regels met lidmaatschapsgraden in plaats van scherpe binaire logica. Dit maakt meer natuurlijke controle mogelijk van systemen met onzekerheid, onnauwkeurigheid of gedeeltelijke waarheid, waardoor het geschikt is voor mensachtige besluitvorming in robots."
      }
    },
    {
      question: {
        en: "What is sliding mode control in robotics?",
        es: "¿Qué es el control de modo deslizante en robótica?",
        de: "Was ist Gleitmodus-Steuerung in der Robotik?",
        nl: "Wat is glijmodus controle in de robotica?"
      },
      options: [
        { en: "A robust control method that constrains system behavior to follow a predefined sliding surface", es: "Un método de control robusto que restringe el comportamiento del sistema para seguir una superficie deslizante predefinida", de: "Eine robuste Steuerungsmethode, die das Systemverhalten zwangt, einer vordefinierten Gleitfläche zu folgen", nl: "Een robuuste controlemethode die systeemgedrag beperkt om een voorgedefinieerd glijoppervlak te volgen" },
        { en: "A control system for robots that move by sliding on surfaces", es: "Un sistema de control para robots que se mueven deslizándose sobre superficies", de: "Ein Steuersystem für Roboter, die sich durch Gleiten auf Oberflächen bewegen", nl: "Een controlesysteem voor robots die bewegen door glijden over oppervlakken" },
        { en: "A method for smooth parameter transitions in control systems", es: "Un método para transiciones suaves de parámetros en sistemas de control", de: "Eine Methode für sanfte Parameterübergänge in Steuersystemen", nl: "Een methode voor vloeiende parameterovergangen in controlesystemen" },
        { en: "A programming technique for sequential control actions", es: "Una técnica de programación para acciones de control secuenciales", de: "Eine Programmiertechnik für sequenzielle Steuerungsaktionen", nl: "Een programmeertechniek voor sequentiële controleacties" }
      ],
      correct: 0,
      explanation: {
        en: "Sliding mode control is a robust, nonlinear control method that forces the system to 'slide' along a predefined surface in state space. It provides excellent disturbance rejection and is insensitive to parameter variations, making it ideal for uncertain robot systems.",
        es: "El control de modo deslizante es un método de control robusto y no lineal que fuerza al sistema a 'deslizarse' a lo largo de una superficie predefinida en el espacio de estados. Proporciona excelente rechazo de perturbaciones y es insensible a variaciones de parámetros, haciéndolo ideal para sistemas robóticos inciertos.",
        de: "Gleitmodus-Steuerung ist eine robuste, nichtlineare Steuerungsmethode, die das System zwingt, entlang einer vordefinierten Fläche im Zustandsraum zu 'gleiten'. Sie bietet ausgezeichnete Störungsunterdrückung und ist unempfindlich gegenüber Parametervariationen, wodurch sie ideal für unsichere Robotersysteme ist.",
        nl: "Glijmodus controle is een robuuste, niet-lineaire controlemethode die het systeem dwingt om langs een voorgedefinieerd oppervlak in de toestandsruimte te 'glijden'. Het biedt uitstekende verstoringsonderdrukking en is ongevoelig voor parametervariaties, waardoor het ideaal is voor onzekere robotsystemen."
      }
    },
    {
      question: {
        en: "What is machine learning-based system identification in robotics?",
        es: "¿Qué es la identificación de sistemas basada en aprendizaje automático en robótica?",
        de: "Was ist auf maschinellem Lernen basierende Systemidentifikation in der Robotik?",
        nl: "Wat is machine learning-gebaseerde systeemidentificatie in de robotica?"
      },
      options: [
        { en: "Using ML algorithms to automatically learn mathematical models of robot dynamics from data", es: "Usar algoritmos de ML para aprender automáticamente modelos matemáticos de dinámicas de robot a partir de datos", de: "Verwendung von ML-Algorithmen zum automatischen Erlernen mathematischer Modelle der Roboterdynamik aus Daten", nl: "Het gebruik van ML-algoritmen om automatisch wiskundige modellen van robotdynamica te leren uit data" },
        { en: "A security system for identifying unauthorized robot access", es: "Un sistema de seguridad para identificar acceso no autorizado a robots", de: "Ein Sicherheitssystem zur Identifizierung unbefugten Roboterzugangs", nl: "Een beveiligingssysteem voor het identificeren van ongeautoriseerde robottoegang" },
        { en: "A method for labeling and cataloging robot components", es: "Un método para etiquetar y catalogar componentes de robot", de: "Eine Methode zur Kennzeichnung und Katalogisierung von Roboterkomponenten", nl: "Een methode voor het labelen en catalogiseren van robotcomponenten" },
        { en: "A technique for robot self-diagnosis and health monitoring", es: "Una técnica para autodiagnóstico y monitoreo de salud de robots", de: "Eine Technik für Roboter-Selbstdiagnose und Gesundheitsüberwachung", nl: "Een techniek voor robot zelfdiagnose en gezondheidsmonitoring" }
      ],
      correct: 0,
      explanation: {
        en: "Machine learning-based system identification uses algorithms like neural networks, Gaussian processes, or other ML methods to automatically discover mathematical models of robot dynamics from experimental data, eliminating the need for manual model derivation.",
        es: "La identificación de sistemas basada en aprendizaje automático usa algoritmos como redes neuronales, procesos gaussianos u otros métodos de ML para descubrir automáticamente modelos matemáticos de dinámicas de robot a partir de datos experimentales, eliminando la necesidad de derivación manual de modelos.",
        de: "Auf maschinellem Lernen basierende Systemidentifikation verwendet Algorithmen wie neuronale Netzwerke, Gaußsche Prozesse oder andere ML-Methoden, um automatisch mathematische Modelle der Roboterdynamik aus experimentellen Daten zu entdecken und manuelle Modellableitung zu eliminieren.",
        nl: "Machine learning-gebaseerde systeemidentificatie gebruikt algoritmen zoals neurale netwerken, Gaussiaanse processen of andere ML-methoden om automatisch wiskundige modellen van robotdynamica te ontdekken uit experimentele data, waardoor handmatige modelafleiding wordt weggenomen."
      }
    },
    {
      question: {
        en: "What is robust control in robotics applications?",
        es: "¿Qué es el control robusto en aplicaciones robóticas?",
        de: "Was ist robuste Steuerung in robotischen Anwendungen?",
        nl: "Wat is robuuste controle in robotica-applicaties?"
      },
      options: [
        { en: "Control design that maintains performance despite model uncertainties and disturbances", es: "Diseño de control que mantiene el rendimiento a pesar de incertidumbres del modelo y perturbaciones", de: "Steuerungsdesign, das die Leistung trotz Modellunsicherheiten und Störungen aufrechterhält", nl: "Controleontwerp dat prestaties behoudt ondanks modelonzekerheden en verstoringen" },
        { en: "Using physically strong and durable control hardware", es: "Usar hardware de control físicamente fuerte y duradero", de: "Verwendung physisch starker und langlebiger Steuerungshardware", nl: "Het gebruik van fysiek sterke en duurzame controlehardware" },
        { en: "A high-gain control system for fast response", es: "Un sistema de control de alta ganancia para respuesta rápida", de: "Ein Hochverstärkungssteuerungssystem für schnelle Reaktion", nl: "Een hoge-versterkingscontrolesysteem voor snelle respons" },
        { en: "A backup control system for emergencies", es: "Un sistema de control de respaldo para emergencias", de: "Ein Backup-Steuersystem für Notfälle", nl: "Een backup controlesysteem voor noodgevallen" }
      ],
      correct: 0,
      explanation: {
        en: "Robust control design ensures that the control system maintains acceptable performance even when there are uncertainties in the system model, parameter variations, or external disturbances. This is crucial for real-world robot applications where exact models are rarely available.",
        es: "El diseño de control robusto asegura que el sistema de control mantenga un rendimiento aceptable incluso cuando hay incertidumbres en el modelo del sistema, variaciones de parámetros o perturbaciones externas. Esto es crucial para aplicaciones robóticas del mundo real donde rara vez están disponibles modelos exactos.",
        de: "Robustes Steuerungsdesign stellt sicher, dass das Steuersystem akzeptable Leistung auch bei Unsicherheiten im Systemmodell, Parametervariationen oder externen Störungen aufrechterhält. Dies ist entscheidend für reale Roboteranwendungen, wo exakte Modelle selten verfügbar sind.",
        nl: "Robuust controleontwerp zorgt ervoor dat het controlesysteem acceptabele prestaties behoudt zelfs wanneer er onzekerheden zijn in het systeemmodel, parametervariaties of externe verstoringen. Dit is cruciaal voor echte robotapplicaties waar exacte modellen zelden beschikbaar zijn."
      }
    },
    {
      question: {
        en: "What is optimal control in robotics?",
        es: "¿Qué es el control óptimo en robótica?",
        de: "Was ist optimale Steuerung in der Robotik?",
        nl: "Wat is optimale controle in de robotica?"
      },
      options: [
        { en: "Finding control inputs that minimize a cost function while satisfying system constraints", es: "Encontrar entradas de control que minimicen una función de costo mientras satisfacen restricciones del sistema", de: "Finden von Steuereingaben, die eine Kostenfunktion minimieren, während Systembeschränkungen erfüllt werden", nl: "Het vinden van controle-invoeren die een kostenfunctie minimaliseren terwijl systeembeperkingen worden voldaan" },
        { en: "Using the best available sensors and actuators", es: "Usar los mejores sensores y actuadores disponibles", de: "Verwendung der besten verfügbaren Sensoren und Aktuatoren", nl: "Het gebruik van de beste beschikbare sensoren en actuatoren" },
        { en: "Achieving maximum robot speed and accuracy", es: "Lograr máxima velocidad y precisión del robot", de: "Erreichen maximaler Robotergeschwindigkeit und -genauigkeit", nl: "Het bereiken van maximale robotsnelheid en nauwkeurigheid" },
        { en: "Running control algorithms at highest possible frequency", es: "Ejecutar algoritmos de control a la frecuencia más alta posible", de: "Ausführung von Steuerungsalgorithmen mit höchstmöglicher Frequenz", nl: "Het uitvoeren van controle-algoritmen op hoogst mogelijke frequentie" }
      ],
      correct: 0,
      explanation: {
        en: "Optimal control seeks to find the control strategy that minimizes (or maximizes) a given performance criterion, such as energy consumption, time, or tracking error, while satisfying system dynamics and constraints. This leads to mathematically optimal robot behavior.",
        es: "El control óptimo busca encontrar la estrategia de control que minimice (o maximice) un criterio de rendimiento dado, como consumo de energía, tiempo o error de seguimiento, mientras satisface dinámicas del sistema y restricciones. Esto lleva a comportamiento robótico matemáticamente óptimo.",
        de: "Optimale Steuerung sucht die Steuerungsstrategie zu finden, die ein gegebenes Leistungskriterium wie Energieverbrauch, Zeit oder Verfolgungsfehler minimiert (oder maximiert), während Systemdynamik und Beschränkungen erfüllt werden. Dies führt zu mathematisch optimalem Roboterverhalten.",
        nl: "Optimale controle zoekt naar de controlestrategie die een gegeven prestatiecriterium minimaliseert (of maximaliseert), zoals energieverbruik, tijd of volgfout, terwijl systeemynamica en beperkingen worden voldaan. Dit leidt tot wiskundig optimaal robotgedrag."
      }
    },
    {
      question: {
        en: "What is nonlinear control in robotics?",
        es: "¿Qué es el control no lineal en robótica?",
        de: "Was ist nichtlineare Steuerung in der Robotik?",
        nl: "Wat is niet-lineaire controle in de robotica?"
      },
      options: [
        { en: "Control methods designed specifically for systems with nonlinear dynamics", es: "Métodos de control diseñados específicamente para sistemas con dinámicas no lineales", de: "Steuerungsmethoden, die speziell für Systeme mit nichtlinearer Dynamik entwickelt wurden", nl: "Controlemethoden specifiek ontworpen voor systemen met niet-lineaire dynamica" },
        { en: "Control systems that use non-straight line trajectories", es: "Sistemas de control que usan trayectorias de línea no recta", de: "Steuersysteme, die nicht-geradlinige Trajektorien verwenden", nl: "Controlesystemen die niet-rechte lijn trajectories gebruiken" },
        { en: "Digital control systems as opposed to analog systems", es: "Sistemas de control digitales en oposición a sistemas analógicos", de: "Digitale Steuersysteme im Gegensatz zu analogen Systemen", nl: "Digitale controlesystemen in tegenstelling tot analoge systemen" },
        { en: "Control methods that violate the superposition principle", es: "Métodos de control que violan el principio de superposición", de: "Steuerungsmethoden, die das Superpositionsprinzip verletzen", nl: "Controlemethoden die het superposittieprincipe schenden" }
      ],
      correct: 0,
      explanation: {
        en: "Nonlinear control addresses systems where the relationship between inputs and outputs is nonlinear, which is common in robotics due to factors like joint coupling, friction, and geometric constraints. These methods can achieve better performance than linear approximations.",
        es: "El control no lineal aborda sistemas donde la relación entre entradas y salidas es no lineal, lo cual es común en robótica debido a factores como acoplamiento de articulaciones, fricción y restricciones geométricas. Estos métodos pueden lograr mejor rendimiento que aproximaciones lineales.",
        de: "Nichtlineare Steuerung behandelt Systeme, wo die Beziehung zwischen Ein- und Ausgängen nichtlinear ist, was in der Robotik aufgrund von Faktoren wie Gelenkkopplung, Reibung und geometrischen Beschränkungen üblich ist. Diese Methoden können bessere Leistung als lineare Approximationen erreichen.",
        nl: "Niet-lineaire controle behandelt systemen waarbij de relatie tussen ingangen en uitgangen niet-lineair is, wat gebruikelijk is in de robotica vanwege factoren zoals gewrichtkoppeling, wrijving en geometrische beperkingen. Deze methoden kunnen betere prestaties bereiken dan lineaire benaderingen."
      }
    },
    {
      question: {
        en: "What is hierarchical control in robotic systems?",
        es: "¿Qué es el control jerárquico en sistemas robóticos?",
        de: "Was ist hierarchische Steuerung in robotischen Systemen?",
        nl: "Wat is hiërarchische controle in robotische systemen?"
      },
      options: [
        { en: "A multi-level control architecture with different time scales and abstraction levels", es: "Una arquitectura de control multinivel con diferentes escalas de tiempo y niveles de abstracción", de: "Eine mehrstufige Steuerungsarchitektur mit verschiedenen Zeitskalen und Abstraktionsebenen", nl: "Een multi-niveau controle architectuur met verschillende tijdschalen en abstractieniveaus" },
        { en: "A control system where one robot commands multiple subordinate robots", es: "Un sistema de control donde un robot comanda múltiples robots subordinados", de: "Ein Steuersystem, wo ein Roboter mehrere untergeordnete Roboter kommandiert", nl: "Een controlesysteem waarbij één robot meerdere ondergeschikte robots aanstuurt" },
        { en: "A priority-based control system for handling multiple tasks", es: "Un sistema de control basado en prioridades para manejar múltiples tareas", de: "Ein prioritätsbasiertes Steuersystem zur Behandlung mehrerer Aufgaben", nl: "Een prioriteit-gebaseerd controlesysteem voor het hanteren van meerdere taken" },
        { en: "A control method using tree-structured decision making", es: "Un método de control usando toma de decisiones estructurada en árbol", de: "Eine Steuerungsmethode mit baumstrukturierter Entscheidungsfindung", nl: "Een controlemethode die boomgestructureerde besluitvorming gebruikt" }
      ],
      correct: 0,
      explanation: {
        en: "Hierarchical control organizes the control system into multiple levels, typically with high-level planning, mid-level coordination, and low-level execution. Each level operates at different time scales and abstraction levels, allowing for effective management of complex robotic systems.",
        es: "El control jerárquico organiza el sistema de control en múltiples niveles, típicamente con planificación de alto nivel, coordinación de nivel medio y ejecución de bajo nivel. Cada nivel opera en diferentes escalas de tiempo y niveles de abstracción, permitiendo gestión efectiva de sistemas robóticos complejos.",
        de: "Hierarchische Steuerung organisiert das Steuersystem in mehrere Ebenen, typischerweise mit hochstufiger Planung, mittlerer Koordination und niedrigstufiger Ausführung. Jede Ebene arbeitet in verschiedenen Zeitskalen und Abstraktionsebenen, was effektive Verwaltung komplexer robotischer Systeme ermöglicht.",
        nl: "Hiërarchische controle organiseert het controlesysteem in meerdere niveaus, typisch met hoog-niveau planning, midden-niveau coördinatie en laag-niveau uitvoering. Elk niveau werkt op verschillende tijdschalen en abstractieniveaus, wat effectief beheer van complexe robotische systemen mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is distributed control in multi-robot systems?",
        es: "¿Qué es el control distribuido en sistemas multi-robot?",
        de: "Was ist verteilte Steuerung in Multi-Roboter-Systemen?",
        nl: "Wat is gedistribueerde controle in multi-robot systemen?"
      },
      options: [
        { en: "Control architecture where decision-making is shared among multiple autonomous agents", es: "Arquitectura de control donde la toma de decisiones se comparte entre múltiples agentes autónomos", de: "Steuerungsarchitektur, wo Entscheidungsfindung unter mehreren autonomen Agenten geteilt wird", nl: "Controle architectuur waarbij besluitvorming wordt gedeeld onder meerdere autonome agenten" },
        { en: "Physical distribution of control components across the robot", es: "Distribución física de componentes de control a través del robot", de: "Physische Verteilung von Steuerungskomponenten über den Roboter", nl: "Fysieke distributie van controlecomponenten over de robot" },
        { en: "A control system with multiple backup controllers", es: "Un sistema de control con múltiples controladores de respaldo", de: "Ein Steuersystem mit mehreren Backup-Steuerungen", nl: "Een controlesysteem met meerdere backup controllers" },
        { en: "Control algorithms running on distributed computing platforms", es: "Algoritmos de control ejecutándose en plataformas de computación distribuida", de: "Steuerungsalgorithmen, die auf verteilten Rechenplattformen laufen", nl: "Controle-algoritmen die draaien op gedistribueerde computerplatforms" }
      ],
      correct: 0,
      explanation: {
        en: "Distributed control eliminates centralized decision-making by allowing each robot or agent to make autonomous decisions based on local information and communication with neighbors. This improves scalability, robustness, and fault tolerance in multi-robot systems.",
        es: "El control distribuido elimina la toma de decisiones centralizada permitiendo que cada robot o agente tome decisiones autónomas basadas en información local y comunicación con vecinos. Esto mejora la escalabilidad, robustez y tolerancia a fallas en sistemas multi-robot.",
        de: "Verteilte Steuerung eliminiert zentralisierte Entscheidungsfindung, indem sie jedem Roboter oder Agenten erlaubt, autonome Entscheidungen basierend auf lokalen Informationen und Kommunikation mit Nachbarn zu treffen. Dies verbessert Skalierbarkeit, Robustheit und Fehlertoleranz in Multi-Roboter-Systemen.",
        nl: "Gedistribueerde controle elimineert gecentraliseerde besluitvorming door elke robot of agent toe te staan autonome beslissingen te nemen gebaseerd op lokale informatie en communicatie met buren. Dit verbetert schaalbaarheid, robuustheid en fouttolerantie in multi-robot systemen."
      }
    },
    {
      question: {
        en: "What is gain scheduling in adaptive robot control?",
        es: "¿Qué es la programación de ganancia en control adaptativo de robots?",
        de: "Was ist Verstärkungsplanung in der adaptiven Robotersteuerung?",
        nl: "Wat is versterkingsplanning in adaptieve robotcontrole?"
      },
      options: [
        { en: "Automatically adjusting controller gains based on operating conditions or system states", es: "Ajustar automáticamente las ganancias del controlador basándose en condiciones de operación o estados del sistema", de: "Automatische Anpassung der Reglerverstärkungen basierend auf Betriebsbedingungen oder Systemzuständen", nl: "Automatisch aanpassen van controllerversterkingen gebaseerd op bedrijfsomstandigheden of systeemtoestanden" },
        { en: "Planning the sequence of control gains over time", es: "Planificar la secuencia de ganancias de control a lo largo del tiempo", de: "Planung der Sequenz von Steuerungsverstärkungen über die Zeit", nl: "Het plannen van de sequentie van controleversterkingen over tijd" },
        { en: "Scheduling when to increase or decrease system gains", es: "Programar cuándo aumentar o disminuir las ganancias del sistema", de: "Planen, wann Systemverstärkungen erhöht oder verringert werden", nl: "Plannen wanneer systeemversterkingen verhoogd of verlaagd moeten worden" },
        { en: "Optimizing the computational schedule for gain calculations", es: "Optimizar el programa computacional para cálculos de ganancia", de: "Optimierung des Rechenzeitplans für Verstärkungsberechnungen", nl: "Optimaliseren van het computerschema voor versterkingsberekeningen" }
      ],
      correct: 0,
      explanation: {
        en: "Gain scheduling adapts controller parameters (gains) based on measured variables like position, velocity, or load conditions. This allows linear controllers to work effectively across a robot's entire operating range, compensating for nonlinear system behavior.",
        es: "La programación de ganancia adapta los parámetros del controlador (ganancias) basándose en variables medidas como posición, velocidad o condiciones de carga. Esto permite que controladores lineales funcionen efectivamente a través de todo el rango de operación del robot, compensando por comportamiento no lineal del sistema.",
        de: "Verstärkungsplanung passt Reglerparameter (Verstärkungen) basierend auf gemessenen Variablen wie Position, Geschwindigkeit oder Lastbedingungen an. Dies ermöglicht linearen Reglern, effektiv über den gesamten Betriebsbereich des Roboters zu arbeiten und nichtlineares Systemverhalten zu kompensieren.",
        nl: "Versterkingsplanning past controllerparameters (versterkingen) aan gebaseerd op gemeten variabelen zoals positie, snelheid of lastcondities. Dit stelt lineaire controllers in staat effectief te werken over het gehele bedrijfsbereik van de robot, compenserend voor niet-lineair systeemgedrag."
      }
    },
    {
      question: {
        en: "What is backstepping control in nonlinear robotics?",
        es: "¿Qué es el control de retroceso en robótica no lineal?",
        de: "Was ist Backstepping-Steuerung in der nichtlinearen Robotik?",
        nl: "Wat is backstepping controle in niet-lineaire robotica?"
      },
      options: [
        { en: "A recursive design method that systematically constructs Lyapunov functions for nonlinear control", es: "Un método de diseño recursivo que construye sistemáticamente funciones de Lyapunov para control no lineal", de: "Eine rekursive Entwurfsmethode, die systematisch Lyapunov-Funktionen für nichtlineare Steuerung konstruiert", nl: "Een recursieve ontwerpmethode die systematisch Lyapunov-functies construeert voor niet-lineaire controle" },
        { en: "A control method that reverses robot movements step by step", es: "Un método de control que revierte movimientos de robot paso a paso", de: "Eine Steuerungsmethode, die Roboterbewegungen schrittweise umkehrt", nl: "Een controlemethode die robotbewegingen stap voor stap omkeert" },
        { en: "A safety mechanism that steps back from dangerous situations", es: "Un mecanismo de seguridad que retrocede de situaciones peligrosas", de: "Ein Sicherheitsmechanismus, der von gefährlichen Situationen zurücktritt", nl: "Een veiligheidsmechanisme dat terugstapt van gevaarlijke situaties" },
        { en: "A debugging technique for control algorithms", es: "Una técnica de depuración para algoritmos de control", de: "Eine Debugging-Technik für Steuerungsalgorithmen", nl: "Een debugging techniek voor controle-algoritmen" }
      ],
      correct: 0,
      explanation: {
        en: "Backstepping is a recursive control design technique for nonlinear systems that starts from the desired output and works backwards, systematically constructing virtual control laws and Lyapunov functions to guarantee stability and performance.",
        es: "El retroceso es una técnica de diseño de control recursivo para sistemas no lineales que comienza desde la salida deseada y trabaja hacia atrás, construyendo sistemáticamente leyes de control virtuales y funciones de Lyapunov para garantizar estabilidad y rendimiento.",
        de: "Backstepping ist eine rekursive Steuerungsentwurfstechnik für nichtlineare Systeme, die von der gewünschten Ausgabe ausgeht und rückwärts arbeitet, systematisch virtuelle Steuerungsgesetze und Lyapunov-Funktionen konstruiert, um Stabilität und Leistung zu garantieren.",
        nl: "Backstepping is een recursieve controleontwerptechniek voor niet-lineaire systemen die begint bij de gewenste uitvoer en achterwaarts werkt, systematisch virtuele controlewetten en Lyapunov-functies construeert om stabiliteit en prestaties te garanderen."
      }
    },
    {
      question: {
        en: "What is the role of observers in robot control systems?",
        es: "¿Cuál es el papel de los observadores en sistemas de control de robots?",
        de: "Was ist die Rolle von Beobachtern in Roboter-Steuersystemen?",
        nl: "Wat is de rol van waarnemers in robotcontrolesystemen?"
      },
      options: [
        { en: "Estimating unmeasured system states using available sensor information", es: "Estimar estados del sistema no medidos usando información de sensores disponible", de: "Schätzung nicht gemessener Systemzustände unter Verwendung verfügbarer Sensorinformationen", nl: "Het schatten van niet-gemeten systeemtoestanden met behulp van beschikbare sensorinformatie" },
        { en: "Human operators monitoring robot performance", es: "Operadores humanos monitoreando el rendimiento del robot", de: "Menschliche Bediener, die die Roboterleistung überwachen", nl: "Menselijke operators die robotprestaties monitoren" },
        { en: "Vision sensors for environmental perception", es: "Sensores de visión para percepción ambiental", de: "Sichtsensoren für Umgebungswahrnehmung", nl: "Visuele sensoren voor omgevingsperceptie" },
        { en: "Safety systems that watch for dangerous conditions", es: "Sistemas de seguridad que vigilan condiciones peligrosas", de: "Sicherheitssysteme, die auf gefährliche Bedingungen achten", nl: "Veiligheidssystemen die letten op gevaarlijke omstandigheden" }
      ],
      correct: 0,
      explanation: {
        en: "Observers (or estimators) are algorithms that estimate internal system states that cannot be directly measured, using mathematical models and available sensor data. This enables full-state feedback control even when not all states are measurable.",
        es: "Los observadores (o estimadores) son algoritmos que estiman estados internos del sistema que no pueden ser directamente medidos, usando modelos matemáticos y datos de sensores disponibles. Esto permite control de retroalimentación de estado completo incluso cuando no todos los estados son medibles.",
        de: "Beobachter (oder Schätzer) sind Algorithmen, die interne Systemzustände schätzen, die nicht direkt gemessen werden können, unter Verwendung mathematischer Modelle und verfügbarer Sensordaten. Dies ermöglicht Vollzustandsrückkopplungssteuerung, auch wenn nicht alle Zustände messbar sind.",
        nl: "Waarnemers (of schatters) zijn algoritmen die interne systeemtoestanden schatten die niet direct gemeten kunnen worden, gebruikmakend van wiskundige modellen en beschikbare sensordata. Dit maakt volledige-toestand feedbackcontrole mogelijk zelfs wanneer niet alle toestanden meetbaar zijn."
      }
    },
    {
      question: {
        en: "What is learning-based control in modern robotics?",
        es: "¿Qué es el control basado en aprendizaje en robótica moderna?",
        de: "Was ist lernbasierte Steuerung in der modernen Robotik?",
        nl: "Wat is leer-gebaseerde controle in moderne robotica?"
      },
      options: [
        { en: "Control methods that improve performance through experience and data-driven learning", es: "Métodos de control que mejoran el rendimiento a través de experiencia y aprendizaje basado en datos", de: "Steuerungsmethoden, die die Leistung durch Erfahrung und datengetriebenes Lernen verbessern", nl: "Controlemethoden die prestaties verbeteren door ervaring en data-gedreven leren" },
        { en: "Teaching robots through step-by-step instruction manuals", es: "Enseñar robots a través de manuales de instrucción paso a paso", de: "Roboter durch schrittweise Anleitungen unterrichten", nl: "Robots leren door stap-voor-stap instructiehandleidingen" },
        { en: "Control systems that learn from human demonstrations only", es: "Sistemas de control que aprenden solo de demostraciones humanas", de: "Steuersysteme, die nur von menschlichen Demonstrationen lernen", nl: "Controlesystemen die alleen leren van menselijke demonstraties" },
        { en: "Educational programs for robot programming", es: "Programas educativos para programación de robots", de: "Bildungsprogramme für Roboterprogrammierung", nl: "Educatieve programma's voor robotprogrammering" }
      ],
      correct: 0,
      explanation: {
        en: "Learning-based control encompasses methods like reinforcement learning, imitation learning, and adaptive control that enable robots to improve their control policies through experience, data, or interaction with the environment, leading to better performance over time.",
        es: "El control basado en aprendizaje abarca métodos como aprendizaje por refuerzo, aprendizaje por imitación y control adaptativo que permiten a los robots mejorar sus políticas de control a través de experiencia, datos o interacción con el entorno, llevando a mejor rendimiento con el tiempo.",
        de: "Lernbasierte Steuerung umfasst Methoden wie bestärkendes Lernen, Nachahmungslernen und adaptive Steuerung, die es Robotern ermöglichen, ihre Steuerungsstrategien durch Erfahrung, Daten oder Interaktion mit der Umgebung zu verbessern, was zu besserer Leistung über die Zeit führt.",
        nl: "Leer-gebaseerde controle omvat methoden zoals versterkend leren, imitatieleren en adaptieve controle die robots in staat stellen hun controlestrategieën te verbeteren door ervaring, data of interactie met de omgeving, leidend tot betere prestaties over tijd."
      }
    },
    {
      question: {
        en: "What is event-triggered control in robotic systems?",
        es: "¿Qué es el control activado por eventos en sistemas robóticos?",
        de: "Was ist ereignisgesteuerte Steuerung in robotischen Systemen?",
        nl: "Wat is event-gestuurde controle in robotische systemen?"
      },
      options: [
        { en: "Control updates occur only when specific conditions or events are met, reducing computational load", es: "Las actualizaciones de control ocurren solo cuando se cumplen condiciones o eventos específicos, reduciendo la carga computacional", de: "Steuerungsupdates erfolgen nur wenn spezifische Bedingungen oder Ereignisse erfüllt sind, wodurch die Rechenlast reduziert wird", nl: "Controle-updates vinden alleen plaats wanneer specifieke voorwaarden of gebeurtenissen worden vervuld, wat de rekenbelasting vermindert" },
        { en: "Control actions triggered by external emergency events", es: "Acciones de control activadas por eventos de emergencia externos", de: "Steuerungsaktionen, die durch externe Notfallereignisse ausgelöst werden", nl: "Controleacties geactiveerd door externe noodgebeurtenissen" },
        { en: "Scheduling control tasks based on calendar events", es: "Programar tareas de control basándose en eventos de calendario", de: "Planung von Steuerungsaufgaben basierend auf Kalenderereignissen", nl: "Het plannen van controletaken gebaseerd op kalendergebeurtenissen" },
        { en: "User-initiated control commands through interface events", es: "Comandos de control iniciados por usuario a través de eventos de interfaz", de: "Benutzerinitiierte Steuerungsbefehle durch Schnittstellenereignisse", nl: "Door gebruiker geïnitieerde controlecommando's via interface-gebeurtenissen" }
      ],
      correct: 0,
      explanation: {
        en: "Event-triggered control updates the control signal only when necessary (e.g., when tracking error exceeds a threshold), rather than at fixed time intervals. This reduces computational requirements and communication overhead while maintaining performance.",
        es: "El control activado por eventos actualiza la señal de control solo cuando es necesario (ej. cuando el error de seguimiento excede un umbral), en lugar de en intervalos de tiempo fijos. Esto reduce los requerimientos computacionales y la sobrecarga de comunicación mientras mantiene el rendimiento.",
        de: "Ereignisgesteuerte Steuerung aktualisiert das Steuersignal nur wenn nötig (z.B. wenn Verfolgungsfehler einen Schwellenwert überschreitet), anstatt in festen Zeitintervallen. Dies reduziert Rechenanforderungen und Kommunikationsoverhead bei Beibehaltung der Leistung.",
        nl: "Event-gestuurde controle werkt het controlesignaal alleen bij wanneer nodig (bijv. wanneer volgfout een drempel overschrijdt), in plaats van op vaste tijdsintervallen. Dit vermindert rekenvereisten en communicatie-overhead terwijl prestaties behouden blijven."
      }
    },
    {
      question: {
        en: "What is H-infinity control in robotics?",
        es: "¿Qué es el control H-infinito en robótica?",
        de: "Was ist H-unendlich-Steuerung in der Robotik?",
        nl: "Wat is H-oneindige controle in de robotica?"
      },
      options: [
        { en: "A robust control method that minimizes the worst-case effects of disturbances and uncertainties", es: "Un método de control robusto que minimiza los efectos del peor caso de perturbaciones e incertidumbres", de: "Eine robuste Steuerungsmethode, die die Worst-Case-Auswirkungen von Störungen und Unsicherheiten minimiert", nl: "Een robuuste controlemethode die de worst-case effecten van verstoringen en onzekerheden minimaliseert" },
        { en: "A control system with infinite loop gains", es: "Un sistema de control con ganancias de bucle infinitas", de: "Ein Steuersystem mit unendlichen Schleifenverstärkungen", nl: "Een controlesysteem met oneindige lusversterkingen" },
        { en: "A high-frequency control method for fast robots", es: "Un método de control de alta frecuencia para robots rápidos", de: "Eine Hochfrequenz-Steuerungsmethode für schnelle Roboter", nl: "Een hoge-frequentie controlemethode voor snelle robots" },
        { en: "A control approach using infinite dimensional state spaces", es: "Un enfoque de control usando espacios de estado de dimensión infinita", de: "Ein Steuerungsansatz mit unendlich dimensionalen Zustandsräumen", nl: "Een controleaanpak die oneindige dimensionale toestandsruimtes gebruikt" }
      ],
      correct: 0,
      explanation: {
        en: "H-infinity control is a robust control method that provides guarantees on system performance in the presence of model uncertainties and external disturbances by minimizing the H-infinity norm of the closed-loop transfer function.",
        es: "El control H-infinito es un método de control robusto que proporciona garantías sobre el rendimiento del sistema en presencia de incertidumbres del modelo y perturbaciones externas minimizando la norma H-infinito de la función de transferencia de bucle cerrado.",
        de: "H-unendlich-Steuerung ist eine robuste Steuerungsmethode, die Garantien für die Systemleistung bei Modellunsicherheiten und externen Störungen bietet, indem sie die H-unendlich-Norm der geschlossenen Schleife Übertragungsfunktion minimiert.",
        nl: "H-oneindige controle is een robuuste controlemethode die garanties biedt voor systeemprestaties in aanwezigheid van modelonzekerheden en externe verstoringen door de H-oneindige norm van de gesloten-lus overdrachtsfunctie te minimaliseren."
      }
    },
    {
      question: {
        en: "What is passivity-based control in robotics?",
        es: "¿Qué es el control basado en pasividad en robótica?",
        de: "Was ist passivitätsbasierte Steuerung in der Robotik?",
        nl: "Wat is passiviteit-gebaseerde controle in de robotica?"
      },
      options: [
        { en: "A control approach that exploits the natural energy properties of mechanical systems", es: "Un enfoque de control que explota las propiedades energéticas naturales de sistemas mecánicos", de: "Ein Steuerungsansatz, der die natürlichen Energieeigenschaften mechanischer Systeme ausnutzt", nl: "Een controleaanpak die de natuurlijke energie-eigenschappen van mechanische systemen benut" },
        { en: "A control method that uses passive sensors only", es: "Un método de control que usa solo sensores pasivos", de: "Eine Steuerungsmethode, die nur passive Sensoren verwendet", nl: "Een controlemethode die alleen passieve sensoren gebruikt" },
        { en: "A conservative control approach with minimal intervention", es: "Un enfoque de control conservador con intervención mínima", de: "Ein konservativer Steuerungsansatz mit minimaler Intervention", nl: "Een conservatieve controleaanpak met minimale interventie" },
        { en: "A control system that operates without external power", es: "Un sistema de control que opera sin energía externa", de: "Ein Steuersystem, das ohne externe Energie arbeitet", nl: "Een controlesysteem dat werkt zonder externe energie" }
      ],
      correct: 0,
      explanation: {
        en: "Passivity-based control leverages the physical properties of mechanical systems (like energy conservation) to design stable controllers. Passive systems naturally dissipate energy, making them inherently stable and suitable for safe human-robot interaction.",
        es: "El control basado en pasividad aprovecha las propiedades físicas de sistemas mecánicos (como conservación de energía) para diseñar controladores estables. Los sistemas pasivos disipan energía naturalmente, haciéndolos inherentemente estables y adecuados para interacción humano-robot segura.",
        de: "Passivitätsbasierte Steuerung nutzt die physikalischen Eigenschaften mechanischer Systeme (wie Energieerhaltung) zur Gestaltung stabiler Regler. Passive Systeme dissipieren Energie natürlich, wodurch sie inherent stabil und für sichere Mensch-Roboter-Interaktion geeignet sind.",
        nl: "Passiviteit-gebaseerde controle benut de fysieke eigenschappen van mechanische systemen (zoals energiebehoud) om stabiele controllers te ontwerpen. Passieve systemen dissiperen energie natuurlijk, waardoor ze inherent stabiel zijn en geschikt voor veilige mens-robot interactie."
      }
    },
    {
      question: {
        en: "What is teleoperation control in robotics?",
        es: "¿Qué es el control de teleoperación en robótica?",
        de: "Was ist Fernsteuerung in der Robotik?",
        nl: "Wat is teleoperatie controle in de robotica?"
      },
      options: [
        { en: "Remote control of robots by human operators, often with force/haptic feedback", es: "Control remoto de robots por operadores humanos, a menudo con retroalimentación de fuerza/háptica", de: "Fernsteuerung von Robotern durch menschliche Bediener, oft mit Kraft-/haptischer Rückmeldung", nl: "Externe besturing van robots door menselijke operators, vaak met kracht/haptische feedback" },
        { en: "Autonomous control using telecommunication protocols", es: "Control autónomo usando protocolos de telecomunicación", de: "Autonome Steuerung mit Telekommunikationsprotokollen", nl: "Autonome controle met telecommunicatieprotocollen" },
        { en: "Wireless control of robot communication systems", es: "Control inalámbrico de sistemas de comunicación de robots", de: "Drahtlose Steuerung von Roboter-Kommunikationssystemen", nl: "Draadloze controle van robotcommunicatiesystemen" },
        { en: "Remote monitoring of robot operations without control", es: "Monitoreo remoto de operaciones de robot sin control", de: "Fernüberwachung von Roboteroperationen ohne Steuerung", nl: "Externe monitoring van robotoperaties zonder controle" }
      ],
      correct: 0,
      explanation: {
        en: "Teleoperation involves human operators remotely controlling robots in distant or hazardous environments. Advanced systems provide haptic feedback, allowing operators to feel forces and textures, essential for delicate manipulation tasks.",
        es: "La teleoperación involucra operadores humanos controlando remotamente robots en entornos distantes o peligrosos. Los sistemas avanzados proporcionan retroalimentación háptica, permitiendo a los operadores sentir fuerzas y texturas, esencial para tareas de manipulación delicadas.",
        de: "Fernsteuerung beinhaltet menschliche Bediener, die Roboter in entfernten oder gefährlichen Umgebungen fernsteuern. Fortgeschrittene Systeme bieten haptische Rückmeldung, die es Bedienern ermöglicht, Kräfte und Texturen zu spüren, wesentlich für empfindliche Manipulationsaufgaben.",
        nl: "Teleoperatie behelst menselijke operators die robots op afstand besturen in verafgelegen of gevaarlijke omgevingen. Geavanceerde systemen bieden haptische feedback, waardoor operators krachten en texturen kunnen voelen, essentieel voor delicate manipulatietaken."
      }
    },
    {
      question: {
        en: "What is compliant control in robotic manipulation?",
        es: "¿Qué es el control complaciente en manipulación robótica?",
        de: "Was ist nachgiebige Steuerung in der robotischen Manipulation?",
        nl: "Wat is meegaande controle in robotische manipulatie?"
      },
      options: [
        { en: "Control that allows robots to yield to external forces while maintaining task performance", es: "Control que permite a los robots ceder a fuerzas externas mientras mantienen el rendimiento de la tarea", de: "Steuerung, die es Robotern ermöglicht, externen Kräften nachzugeben, während sie die Aufgabenleistung aufrechterhalten", nl: "Controle die robots toestaat toe te geven aan externe krachten terwijl taakprestaties behouden blijven" },
        { en: "Control that follows regulatory compliance requirements", es: "Control que sigue los requisitos de cumplimiento regulatorio", de: "Steuerung, die regulatorische Compliance-Anforderungen befolgt", nl: "Controle die voldoet aan regelgevingsvereisten" },
        { en: "A control system that adapts to user preferences", es: "Un sistema de control que se adapta a las preferencias del usuario", de: "Ein Steuersystem, das sich an Benutzerpräferenzen anpasst", nl: "Een controlesysteem dat zich aanpast aan gebruikersvoorkeuren" },
        { en: "Obedient control that follows all commands exactly", es: "Control obediente que sigue todos los comandos exactamente", de: "Gehorsame Steuerung, die alle Befehle genau befolgt", nl: "Gehoorzame controle die alle commando's exact opvolgt" }
      ],
      correct: 0,
      explanation: {
        en: "Compliant control enables robots to interact safely with their environment by allowing controlled yielding to external forces. This is crucial for tasks involving contact with objects, surfaces, or humans, preventing damage and ensuring safety.",
        es: "El control complaciente permite a los robots interactuar de manera segura con su entorno permitiendo ceder de manera controlada a fuerzas externas. Esto es crucial para tareas que involucran contacto con objetos, superficies o humanos, previniendo daños y asegurando seguridad.",
        de: "Nachgiebige Steuerung ermöglicht es Robotern, sicher mit ihrer Umgebung zu interagieren, indem sie kontrolliertes Nachgeben gegenüber externen Kräften erlaubt. Dies ist entscheidend für Aufgaben mit Kontakt zu Objekten, Oberflächen oder Menschen, um Schäden zu verhindern und Sicherheit zu gewährleisten.",
        nl: "Meegaande controle stelt robots in staat veilig te interageren met hun omgeving door gecontroleerd toegeven aan externe krachten mogelijk te maken. Dit is cruciaal voor taken waarbij contact met objecten, oppervlakken of mensen betrokken is, om schade te voorkomen en veiligheid te garanderen."
      }
    },
    {
      question: {
        en: "What is feed-forward control in robotics?",
        es: "¿Qué es el control prealimentado en robótica?",
        de: "Was ist Vorwärtssteuerung in der Robotik?",
        nl: "Wat is voorwaartse controle in de robotica?"
      },
      options: [
        { en: "Control action based on known disturbances or reference commands, acting before errors occur", es: "Acción de control basada en perturbaciones conocidas o comandos de referencia, actuando antes de que ocurran errores", de: "Steuerungsaktion basierend auf bekannten Störungen oder Referenzbefehlen, die vor dem Auftreten von Fehlern wirkt", nl: "Controleactie gebaseerd op bekende verstoringen of referentiecommando's, handelend voordat fouten optreden" },
        { en: "Automatically feeding power to robot actuators", es: "Alimentar automáticamente energía a actuadores de robot", de: "Automatische Stromversorgung von Roboter-Aktuatoren", nl: "Automatisch voeding naar robotactuatoren" },
        { en: "Controlling the order of sensor data processing", es: "Controlar el orden de procesamiento de datos de sensores", de: "Steuerung der Reihenfolge der Sensordatenverarbeitung", nl: "Controle van de volgorde van sensordataverwerking" },
        { en: "Forward movement control for mobile robots", es: "Control de movimiento hacia adelante para robots móviles", de: "Vorwärtsbewegungssteuerung für mobile Roboter", nl: "Voorwaartse bewegingscontrole voor mobiele robots" }
      ],
      correct: 0,
      explanation: {
        en: "Feed-forward control anticipates system behavior by using knowledge of the reference trajectory or known disturbances to generate control actions before errors develop, improving tracking performance and reducing lag.",
        es: "El control prealimentado anticipa el comportamiento del sistema usando conocimiento de la trayectoria de referencia o perturbaciones conocidas para generar acciones de control antes de que se desarrollen errores, mejorando el rendimiento de seguimiento y reduciendo el retraso.",
        de: "Vorwärtssteuerung antizipiert Systemverhalten durch Verwendung des Wissens über die Referenztrajektorie oder bekannte Störungen, um Steuerungsaktionen zu generieren, bevor sich Fehler entwickeln, wodurch die Verfolgungsleistung verbessert und Verzögerung reduziert wird.",
        nl: "Voorwaartse controle anticipeert systeemgedrag door kennis van de referentietrajectorie of bekende verstoringen te gebruiken om controleacties te genereren voordat fouten ontstaan, waardoor volgprestaties verbeteren en vertraging wordt verminderd."
      }
    },
    {
      question: {
        en: "What is variable structure control in robotics?",
        es: "¿Qué es el control de estructura variable en robótica?",
        de: "Was ist Steuerung mit variabler Struktur in der Robotik?",
        nl: "Wat is variabele structuur controle in de robotica?"
      },
      options: [
        { en: "Control that switches between different control laws based on system state or operating conditions", es: "Control que cambia entre diferentes leyes de control basado en el estado del sistema o condiciones de operación", de: "Steuerung, die zwischen verschiedenen Steuerungsgesetzen basierend auf Systemzustand oder Betriebsbedingungen wechselt", nl: "Controle die schakelt tussen verschillende controlewetten gebaseerd op systeemtoestand of bedrijfsomstandigheden" },
        { en: "Control for robots with reconfigurable mechanical structures", es: "Control para robots con estructuras mecánicas reconfigurables", de: "Steuerung für Roboter mit rekonfigurierbaren mechanischen Strukturen", nl: "Controle voor robots met herconfigureerbare mechanische structuren" },
        { en: "Adaptive control that changes controller parameters", es: "Control adaptativo que cambia parámetros del controlador", de: "Adaptive Steuerung, die Reglerparameter ändert", nl: "Adaptieve controle die controllerparameters verandert" },
        { en: "Control design using variable mathematical structures", es: "Diseño de control usando estructuras matemáticas variables", de: "Steuerungsdesign mit variablen mathematischen Strukturen", nl: "Controleontwerp met variabele wiskundige structuren" }
      ],
      correct: 0,
      explanation: {
        en: "Variable structure control switches between different control strategies or laws depending on the current system state, allowing optimal performance across varying operating conditions. Sliding mode control is a common example of variable structure control.",
        es: "El control de estructura variable cambia entre diferentes estrategias o leyes de control dependiendo del estado actual del sistema, permitiendo rendimiento óptimo a través de condiciones de operación variables. El control de modo deslizante es un ejemplo común de control de estructura variable.",
        de: "Steuerung mit variabler Struktur wechselt zwischen verschiedenen Steuerungsstrategien oder -gesetzen abhängig vom aktuellen Systemzustand, wodurch optimale Leistung über verschiedene Betriebsbedingungen ermöglicht wird. Gleitmodus-Steuerung ist ein häufiges Beispiel für Steuerung mit variabler Struktur.",
        nl: "Variabele structuur controle schakelt tussen verschillende controlestrategieën of -wetten afhankelijk van de huidige systeemtoestand, waardoor optimale prestaties over variërende bedrijfsomstandigheden mogelijk worden. Glijmodus controle is een veelvoorkomend voorbeeld van variabele structuur controle."
      }
    },
    {
      question: {
        en: "What is iterative learning control (ILC) in robotics?",
        es: "¿Qué es el control de aprendizaje iterativo (ILC) en robótica?",
        de: "Was ist iterative Lernsteuerung (ILC) in der Robotik?",
        nl: "Wat is iteratieve leercontrole (ILC) in de robotica?"
      },
      options: [
        { en: "A control method that improves performance by learning from repeated execution of the same task", es: "Un método de control que mejora el rendimiento aprendiendo de la ejecución repetida de la misma tarea", de: "Eine Steuerungsmethode, die die Leistung durch Lernen aus wiederholter Ausführung derselben Aufgabe verbessert", nl: "Een controlemethode die prestaties verbetert door te leren van herhaalde uitvoering van dezelfde taak" },
        { en: "A programming approach using iterative loops for control", es: "Un enfoque de programación usando bucles iterativos para control", de: "Ein Programmierungsansatz mit iterativen Schleifen für die Steuerung", nl: "Een programmeeraanpak die iteratieve lussen gebruikt voor controle" },
        { en: "Learning control through trial and error methods", es: "Control de aprendizaje a través de métodos de prueba y error", de: "Lernende Steuerung durch Versuch-und-Irrtum-Methoden", nl: "Leercontrole door trial-and-error methoden" },
        { en: "Continuous adaptation during single task execution", es: "Adaptación continua durante la ejecución de una sola tarea", de: "Kontinuierliche Anpassung während der Ausführung einer einzelnen Aufgabe", nl: "Continue aanpassing tijdens uitvoering van één taak" }
      ],
      correct: 0,
      explanation: {
        en: "Iterative Learning Control improves robot performance by updating the control input based on tracking errors from previous iterations of the same repetitive task, leading to progressively better performance with each repetition.",
        es: "El Control de Aprendizaje Iterativo mejora el rendimiento del robot actualizando la entrada de control basándose en errores de seguimiento de iteraciones previas de la misma tarea repetitiva, llevando a rendimiento progresivamente mejor con cada repetición.",
        de: "Iterative Lernsteuerung verbessert die Roboterleistung durch Aktualisierung der Steuereingabe basierend auf Verfolgungsfehlern von vorherigen Iterationen derselben wiederholten Aufgabe, was zu progressiv besserer Leistung mit jeder Wiederholung führt.",
        nl: "Iteratieve Leercontrole verbetert robotprestaties door de controle-invoer bij te werken gebaseerd op volgfouten van vorige iteraties van dezelfde repetitieve taak, leidend tot progressief betere prestaties met elke herhaling."
      }
    },
    {
      question: {
        en: "What is multi-objective control in robotics?",
        es: "¿Qué es el control multi-objetivo en robótica?",
        de: "Was ist Multi-Ziel-Steuerung in der Robotik?",
        nl: "Wat is multi-doelstelling controle in de robotica?"
      },
      options: [
        { en: "Optimizing multiple, potentially conflicting performance criteria simultaneously", es: "Optimizar múltiples criterios de rendimiento potencialmente conflictivos simultáneamente", de: "Optimierung mehrerer, potenziell widersprüchlicher Leistungskriterien gleichzeitig", nl: "Het optimaliseren van meerdere, potentieel conflicterende prestatiecriteria tegelijkertijd" },
        { en: "Control systems that can switch between different objectives", es: "Sistemas de control que pueden cambiar entre diferentes objetivos", de: "Steuersysteme, die zwischen verschiedenen Zielen wechseln können", nl: "Controlesystemen die kunnen schakelen tussen verschillende doelstellingen" },
        { en: "Controlling multiple robots towards the same objective", es: "Controlar múltiples robots hacia el mismo objetivo", de: "Steuerung mehrerer Roboter zum selben Ziel", nl: "Meerdere robots besturen naar hetzelfde doel" },
        { en: "Setting multiple target positions for robot movement", es: "Establecer múltiples posiciones objetivo para movimiento de robot", de: "Festlegung mehrerer Zielpositionen für Roboterbewegung", nl: "Meerdere doelposities instellen voor robotbeweging" }
      ],
      correct: 0,
      explanation: {
        en: "Multi-objective control addresses the challenge of optimizing several performance criteria simultaneously, such as accuracy, speed, energy efficiency, and safety. This often involves trade-offs and Pareto-optimal solutions since objectives may conflict.",
        es: "El control multi-objetivo aborda el desafío de optimizar varios criterios de rendimiento simultáneamente, como precisión, velocidad, eficiencia energética y seguridad. Esto a menudo involucra compromisos y soluciones Pareto-óptimas ya que los objetivos pueden entrar en conflicto.",
        de: "Multi-Ziel-Steuerung behandelt die Herausforderung, mehrere Leistungskriterien gleichzeitig zu optimieren, wie Genauigkeit, Geschwindigkeit, Energieeffizienz und Sicherheit. Dies beinhaltet oft Kompromisse und Pareto-optimale Lösungen, da Ziele konfliktreich sein können.",
        nl: "Multi-doelstelling controle behandelt de uitdaging van het simultaan optimaliseren van verschillende prestatiecriteria, zoals nauwkeurigheid, snelheid, energie-efficiëntie en veiligheid. Dit behelst vaak afwegingen en Pareto-optimale oplossingen omdat doelstellingen kunnen conflicteren."
      }
    },
    {
      question: {
        en: "What is cooperative control in multi-robot systems?",
        es: "¿Qué es el control cooperativo en sistemas multi-robot?",
        de: "Was ist kooperative Steuerung in Multi-Roboter-Systemen?",
        nl: "Wat is coöperatieve controle in multi-robot systemen?"
      },
      options: [
        { en: "Coordinated control where robots work together to achieve common goals", es: "Control coordinado donde los robots trabajan juntos para lograr objetivos comunes", de: "Koordinierte Steuerung, wo Roboter zusammenarbeiten, um gemeinsame Ziele zu erreichen", nl: "Gecoördineerde controle waarbij robots samenwerken om gemeenschappelijke doelen te bereiken" },
        { en: "Control that avoids conflicts between different robot systems", es: "Control que evita conflictos entre diferentes sistemas de robot", de: "Steuerung, die Konflikte zwischen verschiedenen Robotersystemen vermeidet", nl: "Controle die conflicten tussen verschillende robotsystemen vermijdt" },
        { en: "Sharing control authority between human and robot", es: "Compartir autoridad de control entre humano y robot", de: "Teilung der Steuerungsautorität zwischen Mensch und Roboter", nl: "Delen van controleautoriteit tussen mens en robot" },
        { en: "Backup control systems that cooperate during failures", es: "Sistemas de control de respaldo que cooperan durante fallas", de: "Backup-Steuersysteme, die bei Ausfällen kooperieren", nl: "Backup controlesystemen die samenwerken tijdens storingen" }
      ],
      correct: 0,
      explanation: {
        en: "Cooperative control enables multiple robots to work together effectively by coordinating their actions, sharing information, and jointly optimizing their collective performance to accomplish tasks that would be difficult or impossible for individual robots.",
        es: "El control cooperativo permite que múltiples robots trabajen juntos efectivamente coordinando sus acciones, compartiendo información y optimizando conjuntamente su rendimiento colectivo para lograr tareas que serían difíciles o imposibles para robots individuales.",
        de: "Kooperative Steuerung ermöglicht es mehreren Robotern, effektiv zusammenzuarbeiten, indem sie ihre Aktionen koordinieren, Informationen teilen und gemeinsam ihre kollektive Leistung optimieren, um Aufgaben zu bewältigen, die für einzelne Roboter schwierig oder unmöglich wären.",
        nl: "Coöperatieve controle stelt meerdere robots in staat effectief samen te werken door hun acties te coördineren, informatie te delen en gezamenlijk hun collectieve prestaties te optimaliseren om taken te volbrengen die moeilijk of onmogelijk zouden zijn voor individuele robots."
      }
    },
    {
      question: {
        en: "What is stochastic control in robotics?",
        es: "¿Qué es el control estocástico en robótica?",
        de: "Was ist stochastische Steuerung in der Robotik?",
        nl: "Wat is stochastische controle in de robotica?"
      },
      options: [
        { en: "Control design that explicitly accounts for random disturbances and uncertainties", es: "Diseño de control que explícitamente considera perturbaciones aleatorias e incertidumbres", de: "Steuerungsdesign, das explizit zufällige Störungen und Unsicherheiten berücksichtigt", nl: "Controleontwerp dat expliciet rekening houdt met willekeurige verstoringen en onzekerheden" },
        { en: "Control using random number generators for decision making", es: "Control usando generadores de números aleatorios para toma de decisiones", de: "Steuerung mit Zufallszahlengeneratoren für Entscheidungsfindung", nl: "Controle met willekeurige nummergeneratoren voor besluitvorming" },
        { en: "Control systems that operate on probability distributions", es: "Sistemas de control que operan sobre distribuciones de probabilidad", de: "Steuersysteme, die auf Wahrscheinlichkeitsverteilungen arbeiten", nl: "Controlesystemen die werken op waarschijnlijkheidsverdelingen" },
        { en: "Statistical analysis of control system performance", es: "Análisis estadístico del rendimiento de sistemas de control", de: "Statistische Analyse der Leistung von Steuersystemen", nl: "Statistische analyse van controlesysteemprestaties" }
      ],
      correct: 0,
      explanation: {
        en: "Stochastic control deals with systems subject to random disturbances, sensor noise, and model uncertainties. It uses probabilistic methods to design controllers that optimize expected performance while handling uncertainty.",
        es: "El control estocástico trata con sistemas sujetos a perturbaciones aleatorias, ruido de sensores e incertidumbres del modelo. Usa métodos probabilísticos para diseñar controladores que optimicen el rendimiento esperado mientras manejan incertidumbre.",
        de: "Stochastische Steuerung behandelt Systeme, die zufälligen Störungen, Sensorrauschen und Modellunsicherheiten unterliegen. Sie verwendet probabilistische Methoden zur Gestaltung von Reglern, die erwartete Leistung optimieren, während sie Unsicherheit handhaben.",
        nl: "Stochastische controle behandelt systemen onderhevig aan willekeurige verstoringen, sensorruis en modelonzekerheden. Het gebruikt probabilistische methoden om controllers te ontwerpen die verwachte prestaties optimaliseren terwijl ze omgaan met onzekerheid."
      }
    },
    {
      question: {
        en: "What is consensus control in multi-agent robotics?",
        es: "¿Qué es el control de consenso en robótica multi-agente?",
        de: "Was ist Konsens-Steuerung in der Multi-Agenten-Robotik?",
        nl: "Wat is consensus controle in multi-agent robotica?"
      },
      options: [
        { en: "Achieving agreement on shared variables or states across all robots in a network", es: "Lograr acuerdo sobre variables o estados compartidos a través de todos los robots en una red", de: "Erreichen von Einigung über geteilte Variablen oder Zustände über alle Roboter in einem Netzwerk", nl: "Het bereiken van overeenstemming over gedeelde variabelen of toestanden over alle robots in een netwerk" },
        { en: "Voting mechanisms for robot decision making", es: "Mecanismos de votación para toma de decisiones de robots", de: "Abstimmungsmechanismen für Roboter-Entscheidungsfindung", nl: "Stemmechanismen voor robot besluitvorming" },
        { en: "Conflict resolution between competing robot objectives", es: "Resolución de conflictos entre objetivos de robot competidores", de: "Konfliktlösung zwischen konkurrierenden Roboterzielen", nl: "Conflictoplossing tussen concurrerende robotdoelstellingen" },
        { en: "Democratic control where robots vote on actions", es: "Control democrático donde los robots votan sobre acciones", de: "Demokratische Steuerung, wo Roboter über Aktionen abstimmen", nl: "Democratische controle waarbij robots stemmen over acties" }
      ],
      correct: 0,
      explanation: {
        en: "Consensus control enables a group of robots to reach agreement on shared state variables (like velocity, position, or formation) through local communication and distributed algorithms, achieving coordinated behavior without centralized control.",
        es: "El control de consenso permite que un grupo de robots llegue a acuerdo sobre variables de estado compartidas (como velocidad, posición o formación) a través de comunicación local y algoritmos distribuidos, logrando comportamiento coordinado sin control centralizado.",
        de: "Konsens-Steuerung ermöglicht es einer Gruppe von Robotern, Einigung über geteilte Zustandsvariablen (wie Geschwindigkeit, Position oder Formation) durch lokale Kommunikation und verteilte Algorithmen zu erreichen, wodurch koordiniertes Verhalten ohne zentralisierte Steuerung erreicht wird.",
        nl: "Consensus controle stelt een groep robots in staat overeenstemming te bereiken over gedeelde toestandsvariabelen (zoals snelheid, positie of formatie) door lokale communicatie en gedistribueerde algoritmen, waardoor gecoördineerd gedrag wordt bereikt zonder gecentraliseerde controle."
      }
    },
    {
      question: {
        en: "What is constraint-based control in robotics?",
        es: "¿Qué es el control basado en restricciones en robótica?",
        de: "Was ist beschränkungsbasierte Steuerung in der Robotik?",
        nl: "Wat is beperking-gebaseerde controle in de robotica?"
      },
      options: [
        { en: "Control that ensures robot motion respects physical, safety, and task constraints", es: "Control que asegura que el movimiento del robot respete restricciones físicas, de seguridad y de tarea", de: "Steuerung, die sicherstellt, dass Roboterbewegung physische, Sicherheits- und Aufgabenbeschränkungen respektiert", nl: "Controle die ervoor zorgt dat robotbeweging fysieke, veiligheids- en taakbeperkingen respecteert" },
        { en: "Programming constraints for robot task specifications", es: "Restricciones de programación para especificaciones de tareas de robot", de: "Programmierbeschränkungen für Roboter-Aufgabenspezifikationen", nl: "Programmeerbeperkingen voor robotgaakspecificaties" },
        { en: "Control systems with limited computational resources", es: "Sistemas de control con recursos computacionales limitados", de: "Steuersysteme mit begrenzten Rechenressourcen", nl: "Controlesystemen met beperkte computationele bronnen" },
        { en: "Restricting robot movement to predefined paths only", es: "Restringir el movimiento del robot solo a rutas predefinidas", de: "Beschränkung der Roboterbewegung nur auf vordefinierte Pfade", nl: "Het beperken van robotbeweging tot alleen voorgedefinieerde paden" }
      ],
      correct: 0,
      explanation: {
        en: "Constraint-based control incorporates various constraints (joint limits, obstacle avoidance, task requirements) directly into the control design, ensuring that robot behavior always satisfies these constraints while optimizing performance.",
        es: "El control basado en restricciones incorpora varias restricciones (límites de articulaciones, evitación de obstáculos, requisitos de tareas) directamente en el diseño de control, asegurando que el comportamiento del robot siempre satisfaga estas restricciones mientras optimiza el rendimiento.",
        de: "Beschränkungsbasierte Steuerung integriert verschiedene Beschränkungen (Gelenkgrenzen, Hindernisumgehung, Aufgabenanforderungen) direkt in das Steuerungsdesign und stellt sicher, dass Roboterverhalten diese Beschränkungen immer erfüllt, während die Leistung optimiert wird.",
        nl: "Beperking-gebaseerde controle integreert verschillende beperkingen (gewrichtgrenzen, obstakelontwijking, taakvereisten) direct in het controleontwerp, zodat robotgedrag deze beperkingen altijd respecteert terwijl prestaties worden geoptimaliseerd."
      }
    },
    {
      question: {
        en: "What is fault-tolerant control in robotics?",
        es: "¿Qué es el control tolerante a fallas en robótica?",
        de: "Was ist fehlertolerrante Steuerung in der Robotik?",
        nl: "Wat is fouttolerante controle in de robotica?"
      },
      options: [
        { en: "Control systems that maintain functionality despite component failures or malfunctions", es: "Sistemas de control que mantienen funcionalidad a pesar de fallas de componentes o mal funcionamiento", de: "Steuersysteme, die Funktionalität trotz Komponentenausfällen oder Fehlfunktionen aufrechterhalten", nl: "Controlesystemen die functionaliteit behouden ondanks componentfouten of storingen" },
        { en: "Control that prevents any system faults from occurring", es: "Control que previene que ocurran fallas del sistema", de: "Steuerung, die das Auftreten von Systemfehlern verhindert", nl: "Controle die voorkomt dat systeemfouten optreden" },
        { en: "Error detection and correction in control algorithms", es: "Detección y corrección de errores en algoritmos de control", de: "Fehlererkennung und -korrektur in Steuerungsalgorithmen", nl: "Foutdetectie en -correctie in controle-algoritmen" },
        { en: "Control systems with built-in redundant hardware", es: "Sistemas de control con hardware redundante incorporado", de: "Steuersysteme mit eingebauter redundanter Hardware", nl: "Controlesystemen met ingebouwde redundante hardware" }
      ],
      correct: 0,
      explanation: {
        en: "Fault-tolerant control enables robots to continue operating safely and effectively even when sensors, actuators, or other components fail. This involves fault detection, isolation, and reconfiguration strategies to maintain system performance.",
        es: "El control tolerante a fallas permite a los robots continuar operando de manera segura y efectiva incluso cuando sensores, actuadores u otros componentes fallan. Esto involucra estrategias de detección, aislamiento y reconfiguración de fallas para mantener el rendimiento del sistema.",
        de: "Fehlertolerante Steuerung ermöglicht es Robotern, sicher und effektiv zu arbeiten, auch wenn Sensoren, Aktuatoren oder andere Komponenten ausfallen. Dies beinhaltet Fehlererkennungs-, Isolierungs- und Rekonfigurationsstrategien zur Aufrechterhaltung der Systemleistung.",
        nl: "Fouttolerante controle stelt robots in staat veilig en effectief te blijven werken zelfs wanneer sensoren, actuatoren of andere componenten falen. Dit behelst foutdetectie-, isolatie- en herconfiguratie strategieën om systeemprestaties te behouden."
      }
    },
    {
      question: {
        en: "What is hybrid control in robotics?",
        es: "¿Qué es el control híbrido en robótica?",
        de: "Was ist hybride Steuerung in der Robotik?",
        nl: "Wat is hybride controle in de robotica?"
      },
      options: [
        { en: "Control systems that combine continuous dynamics with discrete event logic", es: "Sistemas de control que combinan dinámicas continuas con lógica de eventos discretos", de: "Steuersysteme, die kontinuierliche Dynamik mit diskreter Ereignislogik kombinieren", nl: "Controlesystemen die continue dynamica combineren met discrete gebeurtenislogica" },
        { en: "Using both analog and digital control hardware", es: "Usar tanto hardware de control analógico como digital", de: "Verwendung sowohl analoger als auch digitaler Steuerungshardware", nl: "Het gebruik van zowel analoge als digitale controlehardware" },
        { en: "Combining human and automatic control modes", es: "Combinar modos de control humano y automático", de: "Kombination menschlicher und automatischer Steuerungsmodi", nl: "Het combineren van menselijke en automatische controlemodi" },
        { en: "Control systems using hybrid energy sources", es: "Sistemas de control usando fuentes de energía híbridas", de: "Steuersysteme mit hybriden Energiequellen", nl: "Controlesystemen die hybride energiebronnen gebruiken" }
      ],
      correct: 0,
      explanation: {
        en: "Hybrid control combines continuous control (for smooth motions) with discrete control logic (for mode switching, state machines, planning), enabling robots to handle complex tasks involving both continuous dynamics and discrete decision-making.",
        es: "El control híbrido combina control continuo (para movimientos suaves) con lógica de control discreta (para cambio de modos, máquinas de estado, planificación), permitiendo a los robots manejar tareas complejas que involucran tanto dinámicas continuas como toma de decisiones discreta.",
        de: "Hybride Steuerung kombiniert kontinuierliche Steuerung (für sanfte Bewegungen) mit diskreter Steuerungslogik (für Moduswechsel, Zustandsmaschinen, Planung), wodurch Roboter komplexe Aufgaben bewältigen können, die sowohl kontinuierliche Dynamik als auch diskrete Entscheidungsfindung beinhalten.",
        nl: "Hybride controle combineert continue controle (voor vloeiende bewegingen) met discrete controlelogica (voor modus-switching, toestandsmachines, planning), waardoor robots complexe taken kunnen behandelen die zowel continue dynamica als discrete besluitvorming behelzen."
      }
    },
    {
      question: {
        en: "What is energy-based control in robotics?",
        es: "¿Qué es el control basado en energía en robótica?",
        de: "Was ist energiebasierte Steuerung in der Robotik?",
        nl: "Wat is energie-gebaseerde controle in de robotica?"
      },
      options: [
        { en: "Control design using energy functions to shape system behavior and ensure stability", es: "Diseño de control usando funciones de energía para moldear el comportamiento del sistema y asegurar estabilidad", de: "Steuerungsdesign mit Energiefunktionen zur Gestaltung des Systemverhaltens und Gewährleistung der Stabilität", nl: "Controleontwerp met energiefuncties om systeemgedrag te vormen en stabiliteit te garanderen" },
        { en: "Optimizing robot energy consumption and battery life", es: "Optimizar el consumo de energía del robot y la vida de la batería", de: "Optimierung des Roboter-Energieverbrauchs und der Batterielaufzeit", nl: "Het optimaliseren van robotenergieverbruik en batterijlevensduur" },
        { en: "Control systems powered by renewable energy sources", es: "Sistemas de control alimentados por fuentes de energía renovables", de: "Steuersysteme, die von erneuerbaren Energiequellen betrieben werden", nl: "Controlesystemen aangedreven door hernieuwbare energiebronnen" },
        { en: "Managing power distribution in robot systems", es: "Gestionar la distribución de energía en sistemas de robot", de: "Verwaltung der Energieverteilung in Robotersystemen", nl: "Het beheren van energieverdeling in robotsystemen" }
      ],
      correct: 0,
      explanation: {
        en: "Energy-based control uses energy functions (like Lyapunov functions) to design controllers that shape the total energy of the system, ensuring stability and desired behavior by making target states represent minimum energy configurations.",
        es: "El control basado en energía usa funciones de energía (como funciones de Lyapunov) para diseñar controladores que moldean la energía total del sistema, asegurando estabilidad y comportamiento deseado haciendo que los estados objetivo representen configuraciones de energía mínima.",
        de: "Energiebasierte Steuerung verwendet Energiefunktionen (wie Lyapunov-Funktionen) zur Gestaltung von Reglern, die die Gesamtenergie des Systems formen, wodurch Stabilität und gewünschtes Verhalten durch Zielzustände als minimale Energiekonfigurationen sichergestellt wird.",
        nl: "Energie-gebaseerde controle gebruikt energiefuncties (zoals Lyapunov-functies) om controllers te ontwerpen die de totale energie van het systeem vormen, stabiliteit en gewenst gedrag garanderend door doeltoestanden minimale energieconfiguraties te laten vertegenwoordigen."
      }
    },
    {
      question: {
        en: "What is quantized control in networked robotics?",
        es: "¿Qué es el control cuantizado en robótica en red?",
        de: "Was ist quantisierte Steuerung in der vernetzten Robotik?",
        nl: "Wat is gekwantiseerde controle in genetwerkte robotica?"
      },
      options: [
        { en: "Control over digital networks with limited precision signals and finite communication bandwidth", es: "Control sobre redes digitales con señales de precisión limitada y ancho de banda de comunicación finito", de: "Steuerung über digitale Netzwerke mit begrenzter Präzisionssignalen und endlicher Kommunikationsbandbreite", nl: "Controle over digitale netwerken met signalen van beperkte precisie en eindige communicatiebandbreedte" },
        { en: "Control using quantum computing principles for robots", es: "Control usando principios de computación cuántica para robots", de: "Steuerung mit Quantencomputerprinzipien für Roboter", nl: "Controle met quantumcomputing principes voor robots" },
        { en: "Dividing control tasks into discrete time intervals", es: "Dividir tareas de control en intervalos de tiempo discretos", de: "Aufteilung von Steuerungsaufgaben in diskrete Zeitintervalle", nl: "Het verdelen van controletaken in discrete tijdsintervallen" },
        { en: "Digital sampling of analog control signals", es: "Muestreo digital de señales de control analógicas", de: "Digitale Abtastung analoger Steuersignale", nl: "Digitale sampling van analoge controlesignalen" }
      ],
      correct: 0,
      explanation: {
        en: "Quantized control addresses the challenges of controlling robots over digital communication networks where signals have finite precision and limited bandwidth. It develops methods to maintain control performance despite quantization effects.",
        es: "El control cuantizado aborda los desafíos de controlar robots sobre redes de comunicación digitales donde las señales tienen precisión finita y ancho de banda limitado. Desarrolla métodos para mantener el rendimiento de control a pesar de efectos de cuantización.",
        de: "Quantisierte Steuerung behandelt die Herausforderungen der Robotersteuerung über digitale Kommunikationsnetzwerke, wo Signale endliche Präzision und begrenzte Bandbreite haben. Sie entwickelt Methoden zur Aufrechterhaltung der Steuerungsleistung trotz Quantisierungseffekten.",
        nl: "Gekwantiseerde controle behandelt de uitdagingen van het besturen van robots over digitale communicatienetwerken waar signalen eindige precisie en beperkte bandbreedte hebben. Het ontwikkelt methoden om controleprestaties te behouden ondanks kwantisatie-effecten."
      }
    },
    {
      question: {
        en: "What is sampled-data control in digital robotics?",
        es: "¿Qué es el control de datos muestreados en robótica digital?",
        de: "Was ist Abtastdaten-Steuerung in der digitalen Robotik?",
        nl: "Wat is sample-data controle in digitale robotica?"
      },
      options: [
        { en: "Control design that accounts for the discrete-time nature of digital implementation", es: "Diseño de control que considera la naturaleza de tiempo discreto de la implementación digital", de: "Steuerungsdesign, das die diskrete Zeitnatur der digitalen Implementierung berücksichtigt", nl: "Controleontwerp dat rekening houdt met de discrete-tijd natuur van digitale implementatie" },
        { en: "Control using statistical sampling of sensor data", es: "Control usando muestreo estadístico de datos de sensores", de: "Steuerung mit statistischer Abtastung von Sensordaten", nl: "Controle met statistische sampling van sensordata" },
        { en: "Randomly sampling control commands for efficiency", es: "Muestrear aleatoriamente comandos de control para eficiencia", de: "Zufällige Abtastung von Steuerungsbefehlen für Effizienz", nl: "Willekeurig samplen van controlecommando's voor efficiëntie" },
        { en: "Data collection methods for robot learning", es: "Métodos de recolección de datos para aprendizaje de robots", de: "Datensammlungsmethoden für Roboterlernen", nl: "Datacollectiemethoden voor robotleren" }
      ],
      correct: 0,
      explanation: {
        en: "Sampled-data control bridges the gap between continuous-time physical systems and discrete-time digital controllers, addressing issues like sampling rates, zero-order holds, and intersample behavior to ensure stable and effective control.",
        es: "El control de datos muestreados cierra la brecha entre sistemas físicos de tiempo continuo y controladores digitales de tiempo discreto, abordando temas como tasas de muestreo, retenciones de orden cero y comportamiento entre muestras para asegurar control estable y efectivo.",
        de: "Abtastdaten-Steuerung überbrückt die Lücke zwischen kontinuierlichen physischen Systemen und diskreten digitalen Reglern, behandelt Themen wie Abtastraten, Nullordnungshalter und Zwischenabtastverhalten zur Gewährleistung stabiler und effektiver Steuerung.",
        nl: "Sample-data controle overbrugt de kloof tussen continue-tijd fysieke systemen en discrete-tijd digitale controllers, behandelend problemen zoals samplingsnelheden, zero-order holds en intersample gedrag om stabiele en effectieve controle te garanderen."
      }
    },
    {
      question: {
        en: "What is distributed model predictive control (DMPC) in multi-robot systems?",
        es: "¿Qué es el control predictivo de modelo distribuido (DMPC) en sistemas multi-robot?",
        de: "Was ist verteilte modellprädiktive Regelung (DMPC) in Multi-Roboter-Systemen?",
        nl: "Wat is gedistribueerde model predictieve controle (DMPC) in multi-robot systemen?"
      },
      options: [
        { en: "MPC where each robot optimizes locally while coordinating with neighbors", es: "MPC donde cada robot optimiza localmente mientras se coordina con vecinos", de: "MPC, wo jeder Roboter lokal optimiert, während er sich mit Nachbarn koordiniert", nl: "MPC waarbij elke robot lokaal optimaliseert terwijl deze coördineert met buren" },
        { en: "Running MPC algorithms on distributed computing clusters", es: "Ejecutar algoritmos MPC en clústeres de computación distribuida", de: "Ausführung von MPC-Algorithmen auf verteilten Rechenclustern", nl: "Het uitvoeren van MPC-algoritmen op gedistribueerde computerclusters" },
        { en: "Sharing predictive models between different robot types", es: "Compartir modelos predictivos entre diferentes tipos de robots", de: "Teilen prädiktiver Modelle zwischen verschiedenen Robotertypen", nl: "Het delen van voorspellende modellen tussen verschillende robottypen" },
        { en: "Model predictive control with multiple prediction horizons", es: "Control predictivo de modelo con múltiples horizontes de predicción", de: "Modellprädiktive Regelung mit mehreren Vorhersagehorizonten", nl: "Model predictieve controle met meerdere voorspellingshorizonten" }
      ],
      correct: 0,
      explanation: {
        en: "Distributed MPC allows each robot in a multi-robot system to solve its own optimization problem locally while exchanging information with neighbors, achieving coordinated behavior without centralized computation, improving scalability and robustness.",
        es: "El MPC distribuido permite que cada robot en un sistema multi-robot resuelva su propio problema de optimización localmente mientras intercambia información con vecinos, logrando comportamiento coordinado sin computación centralizada, mejorando escalabilidad y robustez.",
        de: "Verteilte MPC ermöglicht es jedem Roboter in einem Multi-Roboter-System, sein eigenes Optimierungsproblem lokal zu lösen, während er Informationen mit Nachbarn austauscht, wodurch koordiniertes Verhalten ohne zentralisierte Berechnung erreicht wird, was Skalierbarkeit und Robustheit verbessert.",
        nl: "Gedistribueerde MPC stelt elke robot in een multi-robot systeem in staat zijn eigen optimalisatieprobleem lokaal op te lossen terwijl informatie wordt uitgewisseld met buren, waardoor gecoördineerd gedrag wordt bereikt zonder gecentraliseerde berekening, wat schaalbaarheid en robuustheid verbetert."
      }
    },
    {
      question: {
        en: "What is learning-based model predictive control in robotics?",
        es: "¿Qué es el control predictivo de modelo basado en aprendizaje en robótica?",
        de: "Was ist lernbasierte modellprädiktive Regelung in der Robotik?",
        nl: "Wat is leer-gebaseerde model predictieve controle in de robotica?"
      },
      options: [
        { en: "MPC that continuously improves its system model through machine learning from data", es: "MPC que mejora continuamente su modelo del sistema a través de aprendizaje automático de datos", de: "MPC, die ihr Systemmodell kontinuierlich durch maschinelles Lernen aus Daten verbessert", nl: "MPC die zijn systeemmodel continu verbetert door machine learning uit data" },
        { en: "Teaching MPC algorithms through supervised learning", es: "Enseñar algoritmos MPC a través de aprendizaje supervisado", de: "Lehren von MPC-Algorithmen durch überwachtes Lernen", nl: "Het onderwijzen van MPC-algoritmen door supervised learning" },
        { en: "Using MPC to train neural networks for robot control", es: "Usar MPC para entrenar redes neuronales para control de robots", de: "Verwendung von MPC zum Training neuronaler Netzwerke für Robotersteuerung", nl: "Het gebruik van MPC om neurale netwerken te trainen voor robotcontrole" },
        { en: "MPC with pre-trained models for different robot tasks", es: "MPC con modelos pre-entrenados para diferentes tareas de robots", de: "MPC mit vortrainierten Modellen für verschiedene Roboteraufgaben", nl: "MPC met voorgetrainde modellen voor verschillende robottaken" }
      ],
      correct: 0,
      explanation: {
        en: "Learning-based MPC combines the predictive planning capabilities of MPC with machine learning to adaptively improve the system model over time, enabling better performance in unknown or changing environments through experience.",
        es: "El MPC basado en aprendizaje combina las capacidades de planificación predictiva del MPC con aprendizaje automático para mejorar adaptativamente el modelo del sistema con el tiempo, permitiendo mejor rendimiento en entornos desconocidos o cambiantes a través de la experiencia.",
        de: "Lernbasierte MPC kombiniert die prädiktiven Planungsfähigkeiten von MPC mit maschinellem Lernen, um das Systemmodell über die Zeit adaptiv zu verbessern, wodurch bessere Leistung in unbekannten oder sich verändernden Umgebungen durch Erfahrung ermöglicht wird.",
        nl: "Leer-gebaseerde MPC combineert de voorspellende planningscapaciteiten van MPC met machine learning om het systeemmodel adaptief te verbeteren over tijd, waardoor betere prestaties in onbekende of veranderende omgevingen door ervaring mogelijk worden."
      }
    },
    {
      question: {
        en: "What is consensus control in multi-agent robotic systems?",
        es: "¿Qué es el control de consenso en sistemas robóticos multi-agente?",
        de: "Was ist Konsenssteuerung in Multi-Agenten-Robotersystemen?",
        nl: "Wat is consensus controle in multi-agent robotsystemen?"
      },
      options: [
        { en: "Distributed algorithms ensuring all agents agree on shared variables or states", es: "Algoritmos distribuidos asegurando que todos los agentes acuerden en variables o estados compartidos", de: "Verteilte Algorithmen, die sicherstellen, dass alle Agenten sich auf gemeinsame Variablen oder Zustände einigen", nl: "Gedistribueerde algoritmen die ervoor zorgen dat alle agenten het eens worden over gedeelde variabelen of toestanden" },
        { en: "All robots follow a single leader's commands", es: "Todos los robots siguen comandos de un solo líder", de: "Alle Roboter folgen den Befehlen eines einzelnen Führers", nl: "Alle robots volgen de commando's van één leider" },
        { en: "Voting systems for robot decision making", es: "Sistemas de votación para toma de decisiones de robots", de: "Abstimmungssysteme für Roboterentscheidungen", nl: "Stemsystemen voor robot besluitvorming" },
        { en: "Conflict resolution between competing robots", es: "Resolución de conflictos entre robots competidores", de: "Konfliktlösung zwischen konkurrierenden Robotern", nl: "Conflictoplossing tussen concurrerende robots" }
      ],
      correct: 0,
      explanation: {
        en: "Consensus control uses distributed algorithms where agents exchange information with neighbors to converge to agreement on shared states (position, velocity, estimates) without centralized coordination, enabling scalable multi-robot coordination.",
        es: "El control de consenso usa algoritmos distribuidos donde los agentes intercambian información con vecinos para converger a un acuerdo sobre estados compartidos (posición, velocidad, estimaciones) sin coordinación centralizada, permitiendo coordinación multi-robot escalable.",
        de: "Konsenssteuerung verwendet verteilte Algorithmen, bei denen Agenten Informationen mit Nachbarn austauschen, um sich auf gemeinsame Zustände (Position, Geschwindigkeit, Schätzungen) ohne zentralisierte Koordination zu einigen, was skalierbare Multi-Roboter-Koordination ermöglicht.",
        nl: "Consensus controle gebruikt gedistribueerde algoritmen waarbij agenten informatie uitwisselen met buren om tot overeenstemming te komen over gedeelde toestanden (positie, snelheid, schattingen) zonder gecentraliseerde coördinatie, wat schaalbare multi-robot coördinatie mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is formation control in multi-robot systems?",
        es: "¿Qué es el control de formación en sistemas multi-robot?",
        de: "Was ist Formationssteuerung in Multi-Roboter-Systemen?",
        nl: "Wat is formatiecontrole in multi-robot systemen?"
      },
      options: [
        { en: "Coordinating multiple robots to maintain specific geometric patterns while moving", es: "Coordinar múltiples robots para mantener patrones geométricos específicos mientras se mueven", de: "Koordinierung mehrerer Roboter zur Aufrechterhaltung spezifischer geometrischer Muster während der Bewegung", nl: "Het coördineren van meerdere robots om specifieke geometrische patronen te behouden tijdens beweging" },
        { en: "Training robots in proper formation procedures", es: "Entrenar robots en procedimientos de formación apropiados", de: "Roboter in ordnungsgemäßen Formationsverfahren trainieren", nl: "Robots trainen in juiste formatieprocedures" },
        { en: "Forming new robot teams from existing ones", es: "Formar nuevos equipos de robots de los existentes", de: "Neue Roboterteams aus bestehenden bilden", nl: "Nieuwe robotteams vormen uit bestaande" },
        { en: "Sequential robot startup procedures", es: "Procedimientos secuenciales de arranque de robots", de: "Sequenzielle Roboter-Startverfahren", nl: "Sequentiële robot opstartprocedures" }
      ],
      correct: 0,
      explanation: {
        en: "Formation control coordinates multiple robots to maintain desired geometric configurations (line, triangle, grid) while moving as a group. This involves position control, inter-robot spacing, and collision avoidance while preserving the formation shape.",
        es: "El control de formación coordina múltiples robots para mantener configuraciones geométricas deseadas (línea, triángulo, rejilla) mientras se mueven como grupo. Esto involucra control de posición, espaciado entre robots y evitación de colisiones mientras preserva la forma de formación.",
        de: "Formationssteuerung koordiniert mehrere Roboter zur Aufrechterhaltung gewünschter geometrischer Konfigurationen (Linie, Dreieck, Gitter) während sie sich als Gruppe bewegen. Dies umfasst Positionssteuerung, Roboter-Abstand und Kollisionsvermeidung bei Erhaltung der Formationsform.",
        nl: "Formatiecontrole coördineert meerdere robots om gewenste geometrische configuraties (lijn, driehoek, grid) te behouden tijdens het bewegen als groep. Dit omvat positiecontrole, inter-robot afstand en botsing vermijding terwijl de formatievorm behouden blijft."
      }
    },
    {
      question: {
        en: "What is coverage control in robotic surveillance applications?",
        es: "¿Qué es el control de cobertura en aplicaciones de vigilancia robótica?",
        de: "Was ist Abdeckungssteuerung in robotischen Überwachungsanwendungen?",
        nl: "Wat is dekkingscontrole in robotische bewakingstoepassingen?"
      },
      options: [
        { en: "Optimally positioning robots to maximize sensing coverage of an area", es: "Posicionar robots óptimamente para maximizar cobertura de detección de un área", de: "Optimale Positionierung von Robotern zur Maximierung der Sensorabdeckung eines Bereichs", nl: "Robots optimaal positioneren om sensorische dekking van een gebied te maximaliseren" },
        { en: "Controlling robot protective covers and shields", es: "Controlar cubiertas protectoras y escudos de robots", de: "Steuerung von Roboter-Schutzabdeckungen und -schilden", nl: "Het besturen van robot beschermende afdekkingen en schilden" },
        { en: "Insurance coverage for robotic systems", es: "Cobertura de seguro para sistemas robóticos", de: "Versicherungsschutz für Robotersysteme", nl: "Verzekeringsdekking voor robotsystemen" },
        { en: "Covering robots with camouflage materials", es: "Cubrir robots con materiales de camuflaje", de: "Roboter mit Tarnmaterialien abdecken", nl: "Robots bedekken met camouflagematerialen" }
      ],
      correct: 0,
      explanation: {
        en: "Coverage control optimally deploys mobile robots to maximize sensing coverage of an environment, using techniques like Voronoi partitioning and gradient-based control to ensure complete area monitoring with minimal overlaps and gaps.",
        es: "El control de cobertura despliega óptimamente robots móviles para maximizar la cobertura de detección de un entorno, usando técnicas como particionamiento de Voronoi y control basado en gradientes para asegurar monitoreo completo del área con mínimos solapamientos y brechas.",
        de: "Abdeckungssteuerung setzt mobile Roboter optimal ein, um die Sensorabdeckung einer Umgebung zu maximieren, unter Verwendung von Techniken wie Voronoi-Partitionierung und gradientenbasierter Steuerung zur Gewährleistung vollständiger Bereichsüberwachung mit minimalen Überlappungen und Lücken.",
        nl: "Dekkingscontrole zet mobiele robots optimaal in om sensorische dekking van een omgeving te maximaliseren, gebruikmakend van technieken zoals Voronoi-partitionering en gradiënt-gebaseerde controle om complete gebiedsbewaking te garanderen met minimale overlappingen en gaten."
      }
    },
    {
      question: {
        en: "What is flocking control inspired by biological swarms?",
        es: "¿Qué es el control de bandada inspirado en enjambres biológicos?",
        de: "Was ist Schwarmsteuerung inspiriert von biologischen Schwärmen?",
        nl: "Wat is zwermcontrole geïnspireerd door biologische zwermen?"
      },
      options: [
        { en: "Control laws based on cohesion, separation, and alignment behaviors", es: "Leyes de control basadas en comportamientos de cohesión, separación y alineación", de: "Steuerungsgesetze basierend auf Kohäsions-, Trennungs- und Ausrichtungsverhalten", nl: "Controlewetten gebaseerd op cohesie, separatie en uitlijning gedragingen" },
        { en: "Robots moving in random patterns like birds", es: "Robots moviéndose en patrones aleatorios como pájaros", de: "Roboter bewegen sich in zufälligen Mustern wie Vögel", nl: "Robots die in willekeurige patronen bewegen zoals vogels" },
        { en: "Control systems for flying robots only", es: "Sistemas de control solo para robots voladores", de: "Steuerungssysteme nur für fliegende Roboter", nl: "Controlesystemen alleen voor vliegende robots" },
        { en: "Grouping robots by their capabilities", es: "Agrupar robots por sus capacidades", de: "Roboter nach ihren Fähigkeiten gruppieren", nl: "Robots groeperen op hun capaciteiten" }
      ],
      correct: 0,
      explanation: {
        en: "Flocking control implements three basic rules from biological swarms: cohesion (stay close to neighbors), separation (avoid collisions), and alignment (match neighbors' velocities). These simple local rules create emergent coordinated group behavior.",
        es: "El control de bandada implementa tres reglas básicas de enjambres biológicos: cohesión (mantenerse cerca de vecinos), separación (evitar colisiones) y alineación (igualar velocidades de vecinos). Estas simples reglas locales crean comportamiento grupal coordinado emergente.",
        de: "Schwarmsteuerung implementiert drei Grundregeln biologischer Schwärme: Kohäsion (nahe bei Nachbarn bleiben), Trennung (Kollisionen vermeiden) und Ausrichtung (Geschwindigkeiten der Nachbarn angleichen). Diese einfachen lokalen Regeln erzeugen emergentes koordiniertes Gruppenverhalten.",
        nl: "Zwermcontrole implementeert drie basisregels van biologische zwermen: cohesie (dicht bij buren blijven), separatie (botsingen vermijden) en uitlijning (snelheden van buren evenaren). Deze eenvoudige lokale regels creëren emergent gecoördineerd groepsgedrag."
      }
    },
    {
      question: {
        en: "What is containment control in multi-agent systems?",
        es: "¿Qué es el control de contención en sistemas multi-agente?",
        de: "Was ist Eindämmungssteuerung in Multi-Agenten-Systemen?",
        nl: "Wat is inperkingscontrole in multi-agent systemen?"
      },
      options: [
        { en: "Follower agents converge to the convex hull formed by leader agents", es: "Agentes seguidores convergen al casco convexo formado por agentes líderes", de: "Follower-Agenten konvergieren zur konvexen Hülle, die von Leader-Agenten gebildet wird", nl: "Volger-agenten convergeren naar de convexe omhulling gevormd door leider-agenten" },
        { en: "Containing robots within physical boundaries", es: "Contener robots dentro de límites físicos", de: "Roboter innerhalb physischer Grenzen einschließen", nl: "Robots binnen fysieke grenzen houden" },
        { en: "Containerized deployment of robot software", es: "Despliegue en contenedores de software de robots", de: "Container-basierte Bereitstellung von Robotersoftware", nl: "Gecontaineriseerde implementatie van robotsoftware" },
        { en: "Preventing information leakage between robots", es: "Prevenir fuga de información entre robots", de: "Informationslecks zwischen Robotern verhindern", nl: "Informatielekken tussen robots voorkomen" }
      ],
      correct: 0,
      explanation: {
        en: "Containment control ensures that follower agents in a multi-agent system converge to and remain within the convex hull formed by multiple leader agents, useful for escorting, herding, and protection scenarios.",
        es: "El control de contención asegura que los agentes seguidores en un sistema multi-agente converjan y permanezcan dentro del casco convexo formado por múltiples agentes líderes, útil para escenarios de escolta, pastoreo y protección.",
        de: "Eindämmungssteuerung stellt sicher, dass Follower-Agenten in einem Multi-Agenten-System zur konvexen Hülle konvergieren und darin verbleiben, die von mehreren Leader-Agenten gebildet wird, nützlich für Eskort-, Hüte- und Schutzszenarien.",
        nl: "Inperkingscontrole zorgt ervoor dat volger-agenten in een multi-agent systeem convergeren naar en binnen de convexe omhulling blijven die gevormd wordt door meerdere leider-agenten, nuttig voor escorte-, kudde- en beschermingsscenario's."
      }
    },
    {
      question: {
        en: "What is task allocation in multi-robot systems?",
        es: "¿Qué es la asignación de tareas en sistemas multi-robot?",
        de: "Was ist Aufgabenzuweisung in Multi-Roboter-Systemen?",
        nl: "Wat is taaktoewijzing in multi-robot systemen?"
      },
      options: [
        { en: "Optimally assigning tasks to robots based on capabilities and costs", es: "Asignar óptimamente tareas a robots basado en capacidades y costos", de: "Optimale Zuweisung von Aufgaben an Roboter basierend auf Fähigkeiten und Kosten", nl: "Optimaal toewijzen van taken aan robots gebaseerd op capaciteiten en kosten" },
        { en: "Dividing computational tasks among processors", es: "Dividir tareas computacionales entre procesadores", de: "Aufteilung von Rechenaufgaben auf Prozessoren", nl: "Computationele taken verdelen over processors" },
        { en: "Allocating memory for robot programs", es: "Asignar memoria para programas de robots", de: "Speicher für Roboterprogramme zuweisen", nl: "Geheugen toewijzen voor robotprogramma's" },
        { en: "Scheduling maintenance tasks for robots", es: "Programar tareas de mantenimiento para robots", de: "Wartungsaufgaben für Roboter planen", nl: "Onderhoudstaken plannen voor robots" }
      ],
      correct: 0,
      explanation: {
        en: "Task allocation optimally assigns tasks to robots in multi-robot systems considering factors like robot capabilities, task requirements, spatial distribution, and energy costs, using methods like auction-based algorithms or optimization techniques.",
        es: "La asignación de tareas asigna óptimamente tareas a robots en sistemas multi-robot considerando factores como capacidades de robots, requisitos de tareas, distribución espacial y costos energéticos, usando métodos como algoritmos basados en subastas o técnicas de optimización.",
        de: "Aufgabenzuweisung weist Aufgaben optimal Robotern in Multi-Roboter-Systemen zu unter Berücksichtigung von Faktoren wie Roboterfähigkeiten, Aufgabenanforderungen, räumlicher Verteilung und Energiekosten, unter Verwendung von Methoden wie auktionsbasierten Algorithmen oder Optimierungstechniken.",
        nl: "Taaktoewijzing wijst taken optimaal toe aan robots in multi-robot systemen rekening houdend met factoren zoals robot capaciteiten, taakvereisten, ruimtelijke distributie en energiekosten, gebruikmakend van methoden zoals veiling-gebaseerde algoritmen of optimalisatietechnieken."
      }
    },
    {
      question: {
        en: "What is graph-based control in networked robotic systems?",
        es: "¿Qué es el control basado en grafos en sistemas robóticos en red?",
        de: "Was ist graphbasierte Steuerung in vernetzten Robotersystemen?",
        nl: "Wat is graaf-gebaseerde controle in genetwerkte robotsystemen?"
      },
      options: [
        { en: "Using graph theory to model and analyze robot communication networks", es: "Usar teoría de grafos para modelar y analizar redes de comunicación de robots", de: "Verwendung der Graphentheorie zur Modellierung und Analyse von Roboter-Kommunikationsnetzwerken", nl: "Grafentheorie gebruiken om robot communicatienetwerken te modelleren en analyseren" },
        { en: "Graphical programming interfaces for robots", es: "Interfaces de programación gráfica para robots", de: "Grafische Programmierschnittstellen für Roboter", nl: "Grafische programmeerinterfaces voor robots" },
        { en: "Control based on visual graphs and charts", es: "Control basado en gráficos y diagramas visuales", de: "Steuerung basierend auf visuellen Grafiken und Diagrammen", nl: "Controle gebaseerd op visuele grafieken en diagrammen" },
        { en: "Drawing graphs with robotic arms", es: "Dibujar gráficos con brazos robóticos", de: "Grafiken mit Roboterarmen zeichnen", nl: "Grafieken tekenen met robotarmen" }
      ],
      correct: 0,
      explanation: {
        en: "Graph-based control uses graph theory to model robot networks where nodes represent robots and edges represent communication links. This framework enables analysis of connectivity, convergence properties, and design of distributed control algorithms.",
        es: "El control basado en grafos usa teoría de grafos para modelar redes de robots donde los nodos representan robots y las aristas representan enlaces de comunicación. Este marco permite análisis de conectividad, propiedades de convergencia y diseño de algoritmos de control distribuido.",
        de: "Graphbasierte Steuerung verwendet Graphentheorie zur Modellierung von Roboternetzwerken, wo Knoten Roboter und Kanten Kommunikationsverbindungen darstellen. Dieses Framework ermöglicht Analyse von Konnektivität, Konvergenzeigenschaften und Design verteilter Steuerungsalgorithmen.",
        nl: "Graaf-gebaseerde controle gebruikt grafentheorie om robotnetwerken te modelleren waar knopen robots vertegenwoordigen en randen communicatieverbindingen. Dit raamwerk maakt analyse van connectiviteit, convergentie-eigenschappen en ontwerp van gedistribueerde controle-algoritmen mogelijk."
      }
    },
    {
      question: {
        en: "What is leader-follower control architecture?",
        es: "¿Qué es la arquitectura de control líder-seguidor?",
        de: "Was ist Leader-Follower-Steuerungsarchitektur?",
        nl: "Wat is leider-volger controle architectuur?"
      },
      options: [
        { en: "One or more leaders guide follower robots through desired trajectories", es: "Uno o más líderes guían robots seguidores a través de trayectorias deseadas", de: "Ein oder mehrere Leader führen Follower-Roboter durch gewünschte Trajektorien", nl: "Een of meer leiders leiden volger-robots door gewenste trajecten" },
        { en: "Robots take turns being the leader", es: "Los robots se turnan siendo el líder", de: "Roboter wechseln sich als Leader ab", nl: "Robots wisselen elkaar af als leider" },
        { en: "Following human leaders exclusively", es: "Seguir exclusivamente líderes humanos", de: "Ausschließlich menschlichen Leadern folgen", nl: "Uitsluitend menselijke leiders volgen" },
        { en: "Leadership training programs for robots", es: "Programas de entrenamiento de liderazgo para robots", de: "Führungstrainingsprogramme für Roboter", nl: "Leiderschapstrainingsprogramma's voor robots" }
      ],
      correct: 0,
      explanation: {
        en: "Leader-follower control designates specific robots as leaders that know the desired trajectory, while followers maintain formation relative to leaders using only local sensing and communication, creating scalable coordination without global information.",
        es: "El control líder-seguidor designa robots específicos como líderes que conocen la trayectoria deseada, mientras los seguidores mantienen formación relativa a los líderes usando solo detección y comunicación local, creando coordinación escalable sin información global.",
        de: "Leader-Follower-Steuerung bezeichnet spezifische Roboter als Leader, die die gewünschte Trajektorie kennen, während Follower Formation relativ zu Leadern nur mit lokaler Sensorik und Kommunikation halten, was skalierbare Koordination ohne globale Information schafft.",
        nl: "Leider-volger controle wijst specifieke robots aan als leiders die het gewenste traject kennen, terwijl volgers formatie behouden relatief aan leiders met alleen lokale waarneming en communicatie, wat schaalbare coördinatie zonder globale informatie creëert."
      }
    },
    {
      question: {
        en: "What is decentralized control in multi-robot systems?",
        es: "¿Qué es el control descentralizado en sistemas multi-robot?",
        de: "Was ist dezentralisierte Steuerung in Multi-Roboter-Systemen?",
        nl: "Wat is gedecentraliseerde controle in multi-robot systemen?"
      },
      options: [
        { en: "Each robot makes decisions based on local information without central coordinator", es: "Cada robot toma decisiones basadas en información local sin coordinador central", de: "Jeder Roboter trifft Entscheidungen basierend auf lokalen Informationen ohne zentralen Koordinator", nl: "Elke robot neemt beslissingen gebaseerd op lokale informatie zonder centrale coördinator" },
        { en: "Control systems physically separated from robots", es: "Sistemas de control físicamente separados de robots", de: "Steuerungssysteme physisch von Robotern getrennt", nl: "Controlesystemen fysiek gescheiden van robots" },
        { en: "Multiple control centers for redundancy", es: "Múltiples centros de control para redundancia", de: "Mehrere Kontrollzentren für Redundanz", nl: "Meerdere controlecentra voor redundantie" },
        { en: "Distributing control code across processors", es: "Distribuir código de control entre procesadores", de: "Steuerungscode auf Prozessoren verteilen", nl: "Controlecode verdelen over processors" }
      ],
      correct: 0,
      explanation: {
        en: "Decentralized control eliminates single points of failure by having each robot make decisions using only local sensing and neighbor communication, improving scalability, robustness, and flexibility compared to centralized approaches.",
        es: "El control descentralizado elimina puntos únicos de falla teniendo cada robot tomando decisiones usando solo detección local y comunicación con vecinos, mejorando escalabilidad, robustez y flexibilidad comparado con enfoques centralizados.",
        de: "Dezentralisierte Steuerung eliminiert einzelne Ausfallpunkte, indem jeder Roboter Entscheidungen nur mit lokaler Sensorik und Nachbarkommunikation trifft, was Skalierbarkeit, Robustheit und Flexibilität im Vergleich zu zentralisierten Ansätzen verbessert.",
        nl: "Gedecentraliseerde controle elimineert single points of failure door elke robot beslissingen te laten nemen met alleen lokale waarneming en buurcommunicatie, wat schaalbaarheid, robuustheid en flexibiliteit verbetert vergeleken met gecentraliseerde benaderingen."
      }
    },
    {
      question: {
        en: "What is cooperative localization in multi-robot systems?",
        es: "¿Qué es la localización cooperativa en sistemas multi-robot?",
        de: "Was ist kooperative Lokalisierung in Multi-Roboter-Systemen?",
        nl: "Wat is coöperatieve lokalisatie in multi-robot systemen?"
      },
      options: [
        { en: "Robots help each other determine positions by sharing observations", es: "Los robots se ayudan mutuamente a determinar posiciones compartiendo observaciones", de: "Roboter helfen sich gegenseitig bei der Positionsbestimmung durch Teilen von Beobachtungen", nl: "Robots helpen elkaar posities te bepalen door observaties te delen" },
        { en: "Locating robots in the same building", es: "Localizar robots en el mismo edificio", de: "Roboter im selben Gebäude lokalisieren", nl: "Robots lokaliseren in hetzelfde gebouw" },
        { en: "Cooperative agreements for robot deployment", es: "Acuerdos cooperativos para despliegue de robots", de: "Kooperative Vereinbarungen für Robotereinsatz", nl: "Coöperatieve overeenkomsten voor robot inzet" },
        { en: "Sharing GPS coordinates between robots", es: "Compartir coordenadas GPS entre robots", de: "GPS-Koordinaten zwischen Robotern teilen", nl: "GPS-coördinaten delen tussen robots" }
      ],
      correct: 0,
      explanation: {
        en: "Cooperative localization improves position estimation accuracy by having robots share relative observations of each other, combining measurements to reduce uncertainty and enabling localization even when individual robots have poor or no absolute position information.",
        es: "La localización cooperativa mejora la precisión de estimación de posición teniendo robots compartiendo observaciones relativas entre sí, combinando mediciones para reducir incertidumbre y permitiendo localización incluso cuando robots individuales tienen información de posición absoluta pobre o nula.",
        de: "Kooperative Lokalisierung verbessert die Genauigkeit der Positionsschätzung, indem Roboter relative Beobachtungen voneinander teilen, Messungen kombinieren um Unsicherheit zu reduzieren und Lokalisierung ermöglichen, selbst wenn einzelne Roboter schlechte oder keine absolute Positionsinformation haben.",
        nl: "Coöperatieve lokalisatie verbetert de nauwkeurigheid van positieschatting door robots relatieve observaties van elkaar te laten delen, metingen te combineren om onzekerheid te verminderen en lokalisatie mogelijk te maken zelfs wanneer individuele robots slechte of geen absolute positie-informatie hebben."
      }
    },
    {
      question: {
        en: "What is behavior-based control in robotics?",
        es: "¿Qué es el control basado en comportamiento en robótica?",
        de: "Was ist verhaltensbasierte Steuerung in der Robotik?",
        nl: "Wat is gedragsgebaseerde controle in robotica?"
      },
      options: [
        { en: "Parallel execution of simple behaviors that combine to produce complex actions", es: "Ejecución paralela de comportamientos simples que se combinan para producir acciones complejas", de: "Parallele Ausführung einfacher Verhaltensweisen, die sich zu komplexen Aktionen kombinieren", nl: "Parallelle uitvoering van eenvoudige gedragingen die combineren tot complexe acties" },
        { en: "Programming robots to behave like humans", es: "Programar robots para comportarse como humanos", de: "Roboter programmieren, sich wie Menschen zu verhalten", nl: "Robots programmeren om zich als mensen te gedragen" },
        { en: "Controlling robot behavior through punishment and reward", es: "Controlar comportamiento de robots mediante castigo y recompensa", de: "Roboterverhalten durch Bestrafung und Belohnung steuern", nl: "Robotgedrag controleren door straf en beloning" },
        { en: "Behavioral psychology applied to robots", es: "Psicología conductual aplicada a robots", de: "Verhaltenspsychologie auf Roboter angewendet", nl: "Gedragspsychologie toegepast op robots" }
      ],
      correct: 0,
      explanation: {
        en: "Behavior-based control uses multiple simple behaviors (obstacle avoidance, goal seeking, wall following) running in parallel, with arbitration mechanisms to combine their outputs, creating robust emergent behaviors without complex planning.",
        es: "El control basado en comportamiento usa múltiples comportamientos simples (evitación de obstáculos, búsqueda de objetivos, seguimiento de paredes) ejecutándose en paralelo, con mecanismos de arbitraje para combinar sus salidas, creando comportamientos emergentes robustos sin planificación compleja.",
        de: "Verhaltensbasierte Steuerung verwendet mehrere einfache Verhaltensweisen (Hindernisvermeidung, Zielsuche, Wandverfolgung), die parallel laufen, mit Arbitrierungsmechanismen zur Kombination ihrer Ausgaben, wodurch robuste emergente Verhaltensweisen ohne komplexe Planung entstehen.",
        nl: "Gedragsgebaseerde controle gebruikt meerdere eenvoudige gedragingen (obstakel vermijding, doel zoeken, muur volgen) die parallel lopen, met arbitragemechanismen om hun outputs te combineren, wat robuuste emergente gedragingen creëert zonder complexe planning."
      }
    },
    {
      question: {
        en: "What is event-triggered control in cyber-physical systems?",
        es: "¿Qué es el control disparado por eventos en sistemas ciber-físicos?",
        de: "Was ist ereignisgesteuerte Regelung in cyber-physischen Systemen?",
        nl: "Wat is event-getriggerde controle in cyber-fysieke systemen?"
      },
      options: [
        { en: "Control updates occur only when specific conditions are met, not periodically", es: "Las actualizaciones de control ocurren solo cuando se cumplen condiciones específicas, no periódicamente", de: "Steuerungsaktualisierungen erfolgen nur bei Erfüllung spezifischer Bedingungen, nicht periodisch", nl: "Controle-updates vinden alleen plaats wanneer aan specifieke voorwaarden wordt voldaan, niet periodiek" },
        { en: "Control systems for event management robots", es: "Sistemas de control para robots de gestión de eventos", de: "Steuerungssysteme für Eventmanagement-Roboter", nl: "Controlesystemen voor evenementenbeheer robots" },
        { en: "Triggering emergency stops during events", es: "Activar paradas de emergencia durante eventos", de: "Notstopps während Ereignissen auslösen", nl: "Noodstops activeren tijdens gebeurtenissen" },
        { en: "Calendar-based robot scheduling", es: "Programación de robots basada en calendario", de: "Kalenderbasierte Roboterplanung", nl: "Kalender-gebaseerde robot planning" }
      ],
      correct: 0,
      explanation: {
        en: "Event-triggered control reduces communication and computation by updating control signals only when the system state crosses predefined thresholds or error bounds, rather than at fixed time intervals, saving resources while maintaining performance.",
        es: "El control disparado por eventos reduce comunicación y computación actualizando señales de control solo cuando el estado del sistema cruza umbrales predefinidos o límites de error, en lugar de intervalos de tiempo fijos, ahorrando recursos mientras mantiene rendimiento.",
        de: "Ereignisgesteuerte Regelung reduziert Kommunikation und Berechnung durch Aktualisierung von Steuersignalen nur wenn der Systemzustand vordefinierte Schwellenwerte oder Fehlergrenzen überschreitet, anstatt in festen Zeitintervallen, was Ressourcen spart bei Erhaltung der Leistung.",
        nl: "Event-getriggerde controle vermindert communicatie en berekening door controlesignalen alleen bij te werken wanneer de systeemtoestand voorgedefinieerde drempels of foutgrenzen overschrijdt, in plaats van op vaste tijdsintervallen, wat resources bespaart terwijl prestaties behouden blijven."
      }
    },
    {
      question: {
        en: "What is resilient control in the presence of failures?",
        es: "¿Qué es el control resiliente en presencia de fallas?",
        de: "Was ist resiliente Steuerung bei Ausfällen?",
        nl: "Wat is veerkrachtige controle in aanwezigheid van storingen?"
      },
      options: [
        { en: "Control strategies that maintain performance despite component failures or attacks", es: "Estrategias de control que mantienen rendimiento a pesar de fallas de componentes o ataques", de: "Steuerungsstrategien, die Leistung trotz Komponentenausfällen oder Angriffen aufrechterhalten", nl: "Controlestrategieën die prestaties behouden ondanks componentenstoringen of aanvallen" },
        { en: "Rubber-based shock absorption for robots", es: "Absorción de impactos basada en caucho para robots", de: "Gummibasierte Stoßdämpfung für Roboter", nl: "Rubber-gebaseerde schokabsorptie voor robots" },
        { en: "Emotional resilience training for robots", es: "Entrenamiento de resiliencia emocional para robots", de: "Emotionale Resilienz-Training für Roboter", nl: "Emotionele veerkrachttraining voor robots" },
        { en: "Spring-based control mechanisms", es: "Mecanismos de control basados en resortes", de: "Federbasierte Steuerungsmechanismen", nl: "Veer-gebaseerde controlemechanismen" }
      ],
      correct: 0,
      explanation: {
        en: "Resilient control designs systems that can detect, isolate, and recover from failures or cyber attacks, using techniques like redundancy, fault detection, reconfiguration, and robust control to maintain acceptable performance under adverse conditions.",
        es: "El control resiliente diseña sistemas que pueden detectar, aislar y recuperarse de fallas o ataques cibernéticos, usando técnicas como redundancia, detección de fallas, reconfiguración y control robusto para mantener rendimiento aceptable bajo condiciones adversas.",
        de: "Resiliente Steuerung entwirft Systeme, die Ausfälle oder Cyberangriffe erkennen, isolieren und sich davon erholen können, unter Verwendung von Techniken wie Redundanz, Fehlererkennung, Rekonfiguration und robuster Steuerung zur Aufrechterhaltung akzeptabler Leistung unter widrigen Bedingungen.",
        nl: "Veerkrachtige controle ontwerpt systemen die storingen of cyberaanvallen kunnen detecteren, isoleren en herstellen, gebruikmakend van technieken zoals redundantie, foutdetectie, herconfiguratie en robuuste controle om acceptabele prestaties onder ongunstige omstandigheden te behouden."
      }
    }
  ]
});
