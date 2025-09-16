// Artificial Intelligence - Level 8: Robotics and AI Systems
(function() {
  const level8 = {
    name: {
      en: "Robotics and AI Systems",
      es: "Robótica y Sistemas de IA",
      de: "Robotik und KI-Systeme",
      nl: "Robotica en AI-Systemen"
    },
    questions: [
      {
        question: {
          en: "What is the primary challenge in robot motion planning?",
          es: "¿Cuál es el principal desafío en la planificación de movimiento de robots?",
          de: "Was ist die Hauptherausforderung bei der Roboter-Bewegungsplanung?",
          nl: "Wat is de primaire uitdaging in robot bewegingsplanning?"
        },
        options: [
          { en: "Find collision-free paths in complex environments while optimizing for constraints", es: "Encontrar trayectorias libres de colisiones en entornos complejos mientras se optimiza para restricciones", de: "Kollisionsfreie Pfade in komplexen Umgebungen finden während der Optimierung für Einschränkungen", nl: "Botsingsvrije paden vinden in complexe omgevingen terwijl geoptimaliseerd wordt voor beperkingen" },
          { en: "Increase robot processing speed", es: "Aumentar la velocidad de procesamiento del robot", de: "Robot-Verarbeitungsgeschwindigkeit erhöhen", nl: "Robot verwerkingssnelheid verhogen" },
          { en: "Reduce robot manufacturing costs", es: "Reducir costos de fabricación de robots", de: "Roboterherstellungskosten reduzieren", nl: "Robot productiekosten verminderen" },
          { en: "Improve battery life only", es: "Mejorar solo la duración de la batería", de: "Nur Batterielaufzeit verbessern", nl: "Alleen batterijduur verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Robot motion planning involves finding feasible paths from start to goal positions while avoiding obstacles, considering kinematic and dynamic constraints, and often optimizing for criteria like time, energy, or smoothness.",
          es: "La planificación de movimiento de robots involucra encontrar trayectorias factibles desde posiciones de inicio hasta objetivo mientras evita obstáculos, considerando restricciones cinemáticas y dinámicas, y a menudo optimizando criterios como tiempo, energía o suavidad.",
          de: "Roboter-Bewegungsplanung beinhaltet das Finden machbarer Pfade von Start- zu Zielpositionen unter Vermeidung von Hindernissen, unter Berücksichtigung kinematischer und dynamischer Einschränkungen, und oft Optimierung für Kriterien wie Zeit, Energie oder Glätte.",
          nl: "Robot bewegingsplanning houdt in het vinden van haalbare paden van start naar doelposities terwijl obstakels worden vermeden, rekening houdend met kinematische en dynamische beperkingen, en vaak optimaliserend voor criteria zoals tijd, energie of gladheid."
        }
      },
      {
        question: {
          en: "What is the key concept behind simultaneous localization and mapping (SLAM) in robotics?",
          es: "¿Cuál es el concepto clave detrás de la localización y mapeo simultáneo (SLAM) en robótica?",
          de: "Was ist das Schlüsselkonzept hinter simultaner Lokalisierung und Kartierung (SLAM) in der Robotik?",
          nl: "Wat is het belangrijkste concept achter simultane lokalisatie en mapping (SLAM) in robotica?"
        },
        options: [
          { en: "Estimate robot position while building a map of unknown environment simultaneously", es: "Estimar posición del robot mientras construye un mapa del entorno desconocido simultáneamente", de: "Roboterposition schätzen während gleichzeitiger Erstellung einer Karte der unbekannten Umgebung", nl: "Robot positie schatten terwijl tegelijkertijd een kaart van onbekende omgeving wordt opgebouwd" },
          { en: "Control multiple robots independently", es: "Controlar múltiples robots independientemente", de: "Mehrere Roboter unabhängig steuern", nl: "Meerdere robots onafhankelijk besturen" },
          { en: "Optimize robot energy consumption", es: "Optimizar consumo de energía del robot", de: "Roboter-Energieverbrauch optimieren", nl: "Robot energieverbruik optimaliseren" },
          { en: "Improve robot communication protocols", es: "Mejorar protocolos de comunicación del robot", de: "Robot-Kommunikationsprotokolle verbessern", nl: "Robot communicatieprotocollen verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "SLAM addresses the chicken-and-egg problem in robotics: to localize, robots need a map; to map, they need to know their location. SLAM algorithms solve both problems simultaneously using sensor data and probabilistic estimation.",
          es: "SLAM aborda el problema del huevo y la gallina en robótica: para localizarse, los robots necesitan un mapa; para mapear, necesitan conocer su ubicación. Los algoritmos SLAM resuelven ambos problemas simultáneamente usando datos de sensores y estimación probabilística.",
          de: "SLAM geht das Henne-Ei-Problem in der Robotik an: Um sich zu lokalisieren, brauchen Roboter eine Karte; um zu kartieren, müssen sie ihre Position kennen. SLAM-Algorithmen lösen beide Probleme gleichzeitig mit Sensordaten und probabilistischer Schätzung.",
          nl: "SLAM pakt het kip-en-ei probleem in robotica aan: om te lokaliseren hebben robots een kaart nodig; om te mappen moeten ze hun locatie kennen. SLAM algoritmen lossen beide problemen tegelijkertijd op met behulp van sensordata en probabilistische schatting."
        }
      },
      {
        question: {
          en: "What is the primary advantage of reinforcement learning in robotics applications?",
          es: "¿Cuál es la ventaja principal del aprendizaje por refuerzo en aplicaciones robóticas?",
          de: "Was ist der Hauptvorteil von Reinforcement Learning in Robotikanwendungen?",
          nl: "Wat is het primaire voordeel van reinforcement learning in robotica toepassingen?"
        },
        options: [
          { en: "Learn complex behaviors through trial and error without explicit programming", es: "Aprender comportamientos complejos a través de ensayo y error sin programación explícita", de: "Komplexe Verhaltensweisen durch Versuch und Irrtum ohne explizite Programmierung lernen", nl: "Complexe gedragingen leren door vallen en opstaan zonder expliciete programmering" },
          { en: "Reduce computational requirements", es: "Reducir requisitos computacionales", de: "Rechenaufwand reduzieren", nl: "Computationele vereisten verminderen" },
          { en: "Eliminate need for sensors", es: "Eliminar necesidad de sensores", de: "Notwendigkeit für Sensoren eliminieren", nl: "Behoefte aan sensoren elimineren" },
          { en: "Guarantee optimal performance", es: "Garantizar rendimiento óptimo", de: "Optimale Leistung garantieren", nl: "Optimale prestaties garanderen" }
        ],
        correct: 0,
        explanation: {
          en: "Reinforcement learning allows robots to learn optimal policies for complex tasks by interacting with their environment and receiving rewards or penalties, making it particularly suitable for tasks that are difficult to program explicitly.",
          es: "El aprendizaje por refuerzo permite a los robots aprender políticas óptimas para tareas complejas interactuando con su entorno y recibiendo recompensas o penalizaciones, haciéndolo particularmente adecuado para tareas difíciles de programar explícitamente.",
          de: "Reinforcement Learning ermöglicht es Robotern, optimale Richtlinien für komplexe Aufgaben zu lernen, indem sie mit ihrer Umgebung interagieren und Belohnungen oder Bestrafungen erhalten, wodurch es besonders geeignet für schwer explizit programmierbare Aufgaben wird.",
          nl: "Reinforcement learning stelt robots in staat om optimale beleidsregels te leren voor complexe taken door interactie met hun omgeving en het ontvangen van beloningen of straffen, waardoor het bijzonder geschikt is voor taken die moeilijk expliciet te programmeren zijn."
        }
      },
      {
        question: {
          en: "What is the main challenge in human-robot interaction (HRI)?",
          es: "¿Cuál es el principal desafío en la interacción humano-robot (HRI)?",
          de: "Was ist die Hauptherausforderung in der Mensch-Roboter-Interaktion (HRI)?",
          nl: "Wat is de belangrijkste uitdaging in mens-robot interactie (HRI)?"
        },
        options: [
          { en: "Design intuitive interfaces that enable natural communication and collaboration", es: "Diseñar interfaces intuitivas que permitan comunicación y colaboración natural", de: "Intuitive Schnittstellen entwerfen, die natürliche Kommunikation und Zusammenarbeit ermöglichen", nl: "Intuïtieve interfaces ontwerpen die natuurlijke communicatie en samenwerking mogelijk maken" },
          { en: "Increase robot processing power", es: "Aumentar poder de procesamiento del robot", de: "Robot-Verarbeitungsleistung erhöhen", nl: "Robot verwerkingskracht verhogen" },
          { en: "Reduce robot size and weight", es: "Reducir tamaño y peso del robot", de: "Roboter-Größe und -Gewicht reduzieren", nl: "Robot grootte en gewicht verminderen" },
          { en: "Improve robot durability", es: "Mejorar durabilidad del robot", de: "Roboter-Haltbarkeit verbessern", nl: "Robot duurzaamheid verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Human-robot interaction focuses on creating seamless, natural interfaces that allow humans and robots to communicate effectively through speech, gestures, facial expressions, and shared understanding of social contexts and intentions.",
          es: "La interacción humano-robot se enfoca en crear interfaces naturales y fluidas que permitan a humanos y robots comunicarse efectivamente a través del habla, gestos, expresiones faciales y comprensión compartida de contextos sociales e intenciones.",
          de: "Mensch-Roboter-Interaktion konzentriert sich auf die Schaffung nahtloser, natürlicher Schnittstellen, die es Menschen und Robotern ermöglichen, effektiv durch Sprache, Gesten, Gesichtsausdrücke und gemeinsames Verständnis sozialer Kontexte und Absichten zu kommunizieren.",
          nl: "Mens-robot interactie focust op het creëren van naadloze, natuurlijke interfaces die mensen en robots in staat stellen effectief te communiceren via spraak, gebaren, gezichtsuitdrukkingen en gedeeld begrip van sociale contexten en intenties."
        }
      },
      {
        question: {
          en: "What is the key principle behind swarm robotics?",
          es: "¿Cuál es el principio clave detrás de la robótica de enjambre?",
          de: "Was ist das Schlüsselprinzip hinter Schwarmrobotik?",
          nl: "Wat is het belangrijkste principe achter zwermrobotica?"
        },
        options: [
          { en: "Coordinate multiple simple robots to achieve complex collective behaviors", es: "Coordinar múltiples robots simples para lograr comportamientos colectivos complejos", de: "Mehrere einfache Roboter koordinieren, um komplexe kollektive Verhaltensweisen zu erreichen", nl: "Meerdere eenvoudige robots coördineren om complexe collectieve gedragingen te bereiken" },
          { en: "Build larger individual robots", es: "Construir robots individuales más grandes", de: "Größere Einzelroboter bauen", nl: "Grotere individuele robots bouwen" },
          { en: "Reduce manufacturing costs", es: "Reducir costos de fabricación", de: "Herstellungskosten reduzieren", nl: "Productiekosten verminderen" },
          { en: "Eliminate need for communication", es: "Eliminar necesidad de comunicación", de: "Notwendigkeit der Kommunikation eliminieren", nl: "Behoefte aan communicatie elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Swarm robotics is inspired by collective behaviors in nature (like ant colonies or bird flocks) and focuses on coordinating large numbers of relatively simple robots to accomplish tasks that would be difficult or impossible for individual robots.",
          es: "La robótica de enjambre está inspirada en comportamientos colectivos en la naturaleza (como colonias de hormigas o bandadas de pájaros) y se enfoca en coordinar grandes números de robots relativamente simples para accomplir tareas difíciles o imposibles para robots individuales.",
          de: "Schwarmrobotik ist von kollektiven Verhaltensweisen in der Natur (wie Ameisenkolonien oder Vogelschwärmen) inspiriert und konzentriert sich auf die Koordination großer Anzahlen relativ einfacher Roboter, um Aufgaben zu bewältigen, die für einzelne Roboter schwierig oder unmöglich wären.",
          nl: "Zwermrobotica is geïnspireerd door collectieve gedragingen in de natuur (zoals mierenkolonies of vogelvluchten) en focust op het coördineren van grote aantallen relatief eenvoudige robots om taken te volbrengen die moeilijk of onmogelijk zouden zijn voor individuele robots."
        }
      },
      {
        question: {
          en: "What is the primary purpose of sensor fusion in robotic systems?",
          es: "¿Cuál es el propósito principal de la fusión de sensores en sistemas robóticos?",
          de: "Was ist der Hauptzweck der Sensorfusion in Robotersystemen?",
          nl: "Wat is het primaire doel van sensorfusie in robotische systemen?"
        },
        options: [
          { en: "Combine data from multiple sensors to improve accuracy and robustness", es: "Combinar datos de múltiples sensores para mejorar precisión y robustez", de: "Daten mehrerer Sensoren kombinieren, um Genauigkeit und Robustheit zu verbessern", nl: "Data van meerdere sensoren combineren om nauwkeurigheid en robuustheid te verbeteren" },
          { en: "Reduce the number of sensors needed", es: "Reducir el número de sensores necesarios", de: "Anzahl benötigter Sensoren reduzieren", nl: "Het aantal benodigde sensoren verminderen" },
          { en: "Increase data processing speed", es: "Aumentar velocidad de procesamiento de datos", de: "Datenverarbeitungsgeschwindigkeit erhöhen", nl: "Dataverwerkingssnelheid verhogen" },
          { en: "Eliminate sensor calibration", es: "Eliminar calibración de sensores", de: "Sensorkalibrierung eliminieren", nl: "Sensorcalibratie elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Sensor fusion integrates information from multiple heterogeneous sensors (cameras, lidar, IMU, GPS, etc.) to create a more complete and reliable understanding of the robot's environment and state than any single sensor could provide.",
          es: "La fusión de sensores integra información de múltiples sensores heterogéneos (cámaras, lidar, IMU, GPS, etc.) para crear una comprensión más completa y confiable del entorno y estado del robot que cualquier sensor individual podría proporcionar.",
          de: "Sensorfusion integriert Informationen von mehreren heterogenen Sensoren (Kameras, Lidar, IMU, GPS, etc.), um ein vollständigeres und zuverlässigeres Verständnis der Roboterumgebung und des Zustands zu schaffen, als es jeder einzelne Sensor bieten könnte.",
          nl: "Sensorfusie integreert informatie van meerdere heterogene sensoren (camera's, lidar, IMU, GPS, etc.) om een completer en betrouwbaarder begrip van de robot omgeving en toestand te creëren dan welke individuele sensor dan ook zou kunnen bieden."
        }
      },
      {
        question: {
          en: "What is the main challenge in autonomous vehicle navigation?",
          es: "¿Cuál es el principal desafío en la navegación de vehículos autónomos?",
          de: "Was ist die Hauptherausforderung bei der Navigation autonomer Fahrzeuge?",
          nl: "Wat is de belangrijkste uitdaging in autonome voertuignavigatie?"
        },
        options: [
          { en: "Handle dynamic, unpredictable environments with safety-critical decision making", es: "Manejar entornos dinámicos e impredecibles con toma de decisiones críticas para la seguridad", de: "Dynamische, unvorhersagbare Umgebungen mit sicherheitskritischer Entscheidungsfindung handhaben", nl: "Dynamische, onvoorspelbare omgevingen hanteren met veiligheidskritische besluitvorming" },
          { en: "Increase vehicle speed limits", es: "Aumentar límites de velocidad del vehículo", de: "Fahrzeuggeschwindigkeitsbegrenzungen erhöhen", nl: "Voertuigsnelheidslimieten verhogen" },
          { en: "Reduce fuel consumption only", es: "Reducir solo el consumo de combustible", de: "Nur Kraftstoffverbrauch reduzieren", nl: "Alleen brandstofverbruik verminderen" },
          { en: "Improve vehicle aesthetics", es: "Mejorar estética del vehículo", de: "Fahrzeugästhetik verbessern", nl: "Voertuigesthetiek verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Autonomous vehicles must navigate complex real-world scenarios with pedestrians, other vehicles, weather conditions, and unexpected events while making split-second decisions that prioritize safety and follow traffic laws.",
          es: "Los vehículos autónomos deben navegar escenarios complejos del mundo real con peatones, otros vehículos, condiciones climáticas y eventos inesperados mientras toman decisiones en fracciones de segundo que priorizan la seguridad y siguen las leyes de tránsito.",
          de: "Autonome Fahrzeuge müssen komplexe reale Szenarien mit Fußgängern, anderen Fahrzeugen, Wetterbedingungen und unerwarteten Ereignissen navigieren, während sie Sekundenbruchteile-Entscheidungen treffen, die Sicherheit priorisieren und Verkehrsregeln befolgen.",
          nl: "Autonome voertuigen moeten complexe echte scenario's navigeren met voetgangers, andere voertuigen, weersomstandigheden en onverwachte gebeurtenissen terwijl ze split-second beslissingen maken die veiligheid prioriteren en verkeersregels volgen."
        }
      },
      {
        question: {
          en: "What is the key concept behind model predictive control (MPC) in robotics?",
          es: "¿Cuál es el concepto clave detrás del control predictivo de modelo (MPC) en robótica?",
          de: "Was ist das Schlüsselkonzept hinter modellprädiktiver Regelung (MPC) in der Robotik?",
          nl: "Wat is het belangrijkste concept achter model predictive control (MPC) in robotica?"
        },
        options: [
          { en: "Use system model to predict future states and optimize control actions over time horizon", es: "Usar modelo del sistema para predecir estados futuros y optimizar acciones de control sobre horizonte temporal", de: "Systemmodell verwenden, um zukünftige Zustände vorherzusagen und Steuerungsaktionen über Zeithorizont zu optimieren", nl: "Systeemmodel gebruiken om toekomstige toestanden te voorspellen en controleacties over tijdhorizon te optimaliseren" },
          { en: "React only to current sensor readings", es: "Reaccionar solo a lecturas actuales de sensores", de: "Nur auf aktuelle Sensorwerte reagieren", nl: "Alleen reageren op huidige sensormetingen" },
          { en: "Use fixed control sequences", es: "Usar secuencias de control fijas", de: "Feste Steuerungssequenzen verwenden", nl: "Vaste controlesequenties gebruiken" },
          { en: "Eliminate feedback control", es: "Eliminar control de retroalimentación", de: "Rückkopplungssteuerung eliminieren", nl: "Feedback controle elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "MPC solves an optimization problem at each time step, using a model of the system to predict future behavior and computing control inputs that minimize a cost function while satisfying constraints over a finite prediction horizon.",
          es: "MPC resuelve un problema de optimización en cada paso de tiempo, usando un modelo del sistema para predecir comportamiento futuro y computando entradas de control que minimizan una función de costo mientras satisfacen restricciones sobre un horizonte de predicción finito.",
          de: "MPC löst ein Optimierungsproblem bei jedem Zeitschritt, verwendet ein Systemmodell zur Vorhersage zukünftigen Verhaltens und berechnet Steuerungseingaben, die eine Kostenfunktion minimieren, während Einschränkungen über einen endlichen Vorhersagehorizont erfüllt werden.",
          nl: "MPC lost een optimalisatieprobleem op bij elke tijdstap, gebruikt een systeemmodel om toekomstig gedrag te voorspellen en berekent controle-ingangen die een kostenfunctie minimaliseren terwijl beperkingen over een eindige voorspellingshorizon worden voldaan."
        }
      },
      {
        question: {
          en: "What is the primary challenge in robotic manipulation and grasping?",
          es: "¿Cuál es el principal desafío en la manipulación y agarre robótico?",
          de: "Was ist die Hauptherausforderung bei robotischer Manipulation und Greifen?",
          nl: "Wat is de primaire uitdaging in robotische manipulatie en grijpen?"
        },
        options: [
          { en: "Handle diverse objects with varying shapes, materials, and fragility", es: "Manejar objetos diversos con formas, materiales y fragilidad variables", de: "Diverse Objekte mit unterschiedlichen Formen, Materialien und Zerbrechlichkeit handhaben", nl: "Diverse objecten hanteren met variërende vormen, materialen en kwetsbaarheid" },
          { en: "Increase gripping force only", es: "Aumentar solo la fuerza de agarre", de: "Nur Greifkraft erhöhen", nl: "Alleen grijpkracht verhogen" },
          { en: "Reduce robot arm weight", es: "Reducir peso del brazo del robot", de: "Roboterarmgewicht reduzieren", nl: "Robotarmgewicht verminderen" },
          { en: "Improve visual aesthetics", es: "Mejorar estética visual", de: "Visuelle Ästhetik verbessern", nl: "Visuele esthetiek verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Robotic manipulation requires sophisticated perception to understand object properties, precise control to apply appropriate forces, and adaptive strategies to handle the infinite variety of objects, poses, and environmental conditions encountered in real-world scenarios.",
          es: "La manipulación robótica requiere percepción sofisticada para entender propiedades de objetos, control preciso para aplicar fuerzas apropiadas, y estrategias adaptativas para manejar la variedad infinita de objetos, poses y condiciones ambientales encontradas en escenarios del mundo real.",
          de: "Robotische Manipulation erfordert sophisticated Wahrnehmung zum Verstehen von Objekteigenschaften, präzise Steuerung zur Anwendung angemessener Kräfte und adaptive Strategien zur Handhabung der unendlichen Vielfalt von Objekten, Posen und Umgebungsbedingungen in realen Szenarien.",
          nl: "Robotische manipulatie vereist geavanceerde perceptie om objecteigenschappen te begrijpen, precieze controle om gepaste krachten toe te passen, en adaptieve strategieën om de oneindige variëteit aan objecten, poses en omgevingscondities in echte scenario's te hanteren."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind behavior-based robotics?",
          es: "¿Cuál es el principio fundamental detrás de la robótica basada en comportamiento?",
          de: "Was ist das Grundprinzip hinter verhaltensbasierter Robotik?",
          nl: "Wat is het fundamentele principe achter gedragsgebaseerde robotica?"
        },
        options: [
          { en: "Decompose complex tasks into simple, reactive behaviors that interact to produce emergent intelligence", es: "Descomponer tareas complejas en comportamientos simples y reactivos que interactúan para producir inteligencia emergente", de: "Komplexe Aufgaben in einfache, reaktive Verhaltensweisen zerlegen, die interagieren, um emergente Intelligenz zu erzeugen", nl: "Complexe taken ontleden in eenvoudige, reactieve gedragingen die interacteren om emergente intelligentie te produceren" },
          { en: "Use centralized planning for all decisions", es: "Usar planificación centralizada para todas las decisiones", de: "Zentralisierte Planung für alle Entscheidungen verwenden", nl: "Gecentraliseerde planning gebruiken voor alle beslissingen" },
          { en: "Rely on detailed world models", es: "Depender de modelos detallados del mundo", de: "Auf detaillierte Weltmodelle angewiesen sein", nl: "Vertrouwen op gedetailleerde wereldmodellen" },
          { en: "Eliminate sensor feedback", es: "Eliminar retroalimentación de sensores", de: "Sensor-Rückkopplung eliminieren", nl: "Sensorfeedback elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Behavior-based robotics follows a bottom-up approach where simple behaviors (like obstacle avoidance, goal-seeking) operate concurrently and their interactions produce complex, intelligent-seeming behavior without requiring explicit high-level planning.",
          es: "La robótica basada en comportamiento sigue un enfoque de abajo hacia arriba donde comportamientos simples (como evitar obstáculos, buscar objetivos) operan concurrentemente y sus interacciones producen comportamiento complejo que parece inteligente sin requerir planificación explícita de alto nivel.",
          de: "Verhaltensbasierte Robotik folgt einem Bottom-up-Ansatz, bei dem einfache Verhaltensweisen (wie Hindernisumgehung, Zielsuche) gleichzeitig operieren und ihre Interaktionen komplexes, intelligent erscheinendes Verhalten erzeugen, ohne explizite hochstufige Planung zu erfordern.",
          nl: "Gedragsgebaseerde robotica volgt een bottom-up benadering waar eenvoudige gedragingen (zoals obstakelontwijking, doelzoeken) gelijktijdig opereren en hun interacties complex, intelligent lijkend gedrag produceren zonder expliciete hoog-niveau planning te vereisen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/artificial-intelligence', level8);
  }
})();
