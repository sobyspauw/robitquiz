// AI in transport Quiz - Level 8
(function() {
  const level8 = {
    name: {
          "en": "AI in Transport Level 8",
          "es": "IA en Transporte Nivel 8",
          "de": "KI im Transport Stufe 8",
          "nl": "AI in Transport Level 8"
    },
    questions: [
      {
        question: {
                  "en": "What is 'homomorphic encryption' enabling for connected vehicle privacy?",
                  "es": "¿Qué está permitiendo la 'encriptación homomórfica' para privacidad de vehículos conectados?",
                  "de": "Was ermöglicht 'homomorphe Verschlüsselung' für die Privatsphäre vernetzter Fahrzeuge?",
                  "nl": "Wat maakt 'homomorphic encryption' mogelijk voor privacy van verbonden voertuigen?"
        },
        options: [
        {
                  "en": "Performing computations on encrypted vehicle data without decrypting it, preserving complete privacy",
                  "es": "Realizar cálculos en datos de vehículos encriptados sin desencriptarlos, preservando privacidad completa",
                  "de": "Berechnungen an verschlüsselten Fahrzeugdaten durchführen ohne sie zu entschlüsseln, komplette Privatsphäre bewahrend",
                  "nl": "Berekeningen uitvoeren op versleutelde voertuigdata zonder het te ontsleutelen, volledige privacy behoudend"
        },
        {
                  "en": "Similar encryption methods for all vehicles",
                  "es": "Métodos de encriptación similares para todos los vehículos",
                  "de": "Ähnliche Verschlüsselungsmethoden für alle Fahrzeuge",
                  "nl": "Vergelijkbare versleutelingsmethoden voor alle voertuigen"
        },
        {
                  "en": "Home-based encryption for vehicle data",
                  "es": "Encriptación basada en hogar para datos de vehículo",
                  "de": "Heimbasierte Verschlüsselung für Fahrzeugdaten",
                  "nl": "Thuis-gebaseerde versleuteling voor voertuigdata"
        },
        {
                  "en": "Morphing encryption keys automatically",
                  "es": "Transformar claves de encriptación automáticamente",
                  "de": "Verschlüsselungsschlüssel automatisch morphen",
                  "nl": "Versleutelingssleutels automatisch morphen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Homomorphic encryption allows traffic optimization algorithms to analyze encrypted location and speed data without ever exposing personal travel patterns.",
                  "es": "La encriptación homomórfica permite a algoritmos de optimización de tráfico analizar datos encriptados de ubicación y velocidad sin exponer nunca patrones de viaje personales.",
                  "de": "Homomorphe Verschlüsselung ermöglicht Verkehrsoptimierungsalgorithmen verschlüsselte Standort- und Geschwindigkeitsdaten zu analysieren ohne persönliche Reisemuster preiszugeben.",
                  "nl": "Homomorphic encryption stelt verkeersoptimalisatie-algoritmes in staat versleutelde locatie- en snelheidsdata te analyseren zonder ooit persoonlijke reispatronen bloot te stellen."
        }
      },
      {
        question: {
                  "en": "What is 'multi-agent deep reinforcement learning' achieving in traffic coordination?",
                  "es": "¿Qué está logrando el 'aprendizaje profundo por refuerzo multi-agente' en coordinación de tráfico?",
                  "de": "Was erreicht 'Multi-Agent Deep Reinforcement Learning' in Verkehrskoordination?",
                  "nl": "Wat bereikt 'multi-agent deep reinforcement learning' in verkeerscoördinatie?"
        },
        options: [
        {
                  "en": "Deep learning for multiple transport modes",
                  "es": "Aprendizaje profundo para múltiples modos de transporte",
                  "de": "Deep Learning für mehrere Transportmodi",
                  "nl": "Deep learning voor meerdere transportmodi"
        },
        {
                  "en": "Agent-based modeling of traffic flows",
                  "es": "Modelado basado en agentes de flujos de tráfico",
                  "de": "Agentenbasierte Modellierung von Verkehrsflüssen",
                  "nl": "Agent-gebaseerde modellering van verkeersstromen"
        },
        {
                  "en": "Multiple agents controlling single vehicles",
                  "es": "Múltiples agentes controlando vehículos únicos",
                  "de": "Mehrere Agenten kontrollieren einzelne Fahrzeuge",
                  "nl": "Meerdere agenten die enkele voertuigen besturen"
        },
        {
                  "en": "Enabling multiple AI agents to learn cooperative traffic strategies through competitive and collaborative interactions",
                  "es": "Permitir a múltiples agentes IA aprender estrategias cooperativas de tráfico a través de interacciones competitivas y colaborativas",
                  "de": "Mehreren KI-Agenten ermöglichen kooperative Verkehrsstrategien durch kompetitive und kollaborative Interaktionen zu lernen",
                  "nl": "Meerdere AI-agenten in staat stellen coöperatieve verkeersstrategieën te leren door competitieve en collaboratieve interacties"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Multiple AI systems learn to coordinate traffic signals, routing, and vehicle movements by discovering emergent cooperative strategies through trial-and-error interactions.",
                  "es": "Múltiples sistemas IA aprenden a coordinar señales de tráfico, enrutamiento y movimientos de vehículos descubriendo estrategias cooperativas emergentes a través de interacciones de ensayo y error.",
                  "de": "Mehrere KI-Systeme lernen Verkehrssignale, Routing und Fahrzeugbewegungen zu koordinieren indem sie emergente kooperative Strategien durch Trial-and-Error-Interaktionen entdecken.",
                  "nl": "Meerdere AI-systemen leren verkeerssignalen, routing en voertuigbewegingen te coördineren door emergente coöperatieve strategieën te ontdekken via trial-and-error interacties."
        }
      },
      {
        question: {
                  "en": "What is 'synthetic data generation' solving for autonomous vehicle training?",
                  "es": "¿Qué está resolviendo la 'generación de datos sintéticos' para entrenamiento de vehículos autónomos?",
                  "de": "Was löst 'synthetische Datengenerierung' für das Training autonomer Fahrzeuge?",
                  "nl": "Wat lost 'synthetische datageneratie' op voor training van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Creating artificial traffic patterns",
                  "es": "Crear patrones de tráfico artificiales",
                  "de": "Künstliche Verkehrsmuster erstellen",
                  "nl": "Kunstmatige verkeerspatronen creëren"
        },
        {
                  "en": "Creating unlimited realistic training scenarios including rare and dangerous situations that are difficult to collect in real world",
                  "es": "Crear escenarios entrenamiento realistas ilimitados incluyendo situaciones raras y peligrosas difíciles de recopilar en mundo real",
                  "de": "Unbegrenzte realistische Trainingsszenarien erstellen einschließlich seltener und gefährlicher Situationen die schwer zu sammeln sind",
                  "nl": "Onbeperkte realistische trainingsscenario's creëren inclusief zeldzame en gevaarlijke situaties moeilijk te verzamelen in echte wereld"
        },
        {
                  "en": "Synthesizing artificial vehicle materials",
                  "es": "Sintetizar materiales artificiales de vehículos",
                  "de": "Künstliche Fahrzeugmaterialien synthetisieren",
                  "nl": "Kunstmatige voertuigmaterialen synthetiseren"
        },
        {
                  "en": "Generating synthetic fuel for vehicles",
                  "es": "Generar combustible sintético para vehículos",
                  "de": "Synthetischen Kraftstoff für Fahrzeuge generieren",
                  "nl": "Synthetische brandstof genereren voor voertuigen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI can generate photorealistic driving scenarios with edge cases like accidents, extreme weather, and unusual road conditions that are too risky or rare to collect naturally.",
                  "es": "La IA puede generar escenarios de conducción fotorrealistas con casos extremos como accidentes, clima extremo y condiciones de carretera inusuales que son muy arriesgados o raros para recopilar naturalmente.",
                  "de": "KI kann fotorealistische Fahrszenarien mit Grenzfällen wie Unfällen, extremem Wetter und ungewöhnlichen Straßenbedingungen generieren die zu riskant oder selten sind um natürlich gesammelt zu werden.",
                  "nl": "AI kan fotorealistische rijscenario's genereren met edge cases zoals ongevallen, extreem weer en ongewone wegomstandigheden die te risicovol of zeldzaam zijn om natuurlijk te verzamelen."
        }
      },
      {
        question: {
                  "en": "What is 'causal AI' bringing to autonomous vehicle decision-making?",
                  "es": "¿Qué está aportando la 'IA causal' a la toma de decisiones de vehículos autónomos?",
                  "de": "Was bringt 'kausale KI' zur Entscheidungsfindung autonomer Fahrzeuge?",
                  "nl": "Wat brengt 'causale AI' naar besluitvorming van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Understanding cause-and-effect relationships to make reasoned decisions rather than just pattern matching",
                  "es": "Entender relaciones causa-efecto para tomar decisiones razonadas en lugar de solo coincidencia de patrones",
                  "de": "Ursache-Wirkung-Beziehungen verstehen um begründete Entscheidungen zu treffen anstatt nur Mustererkennung",
                  "nl": "Oorzaak-gevolg relaties begrijpen om beredeneerde beslissingen te nemen in plaats van alleen patroonherkenning"
        },
        {
                  "en": "Causing accidents to test AI systems",
                  "es": "Causar accidentes para probar sistemas IA",
                  "de": "Unfälle verursachen um KI-Systeme zu testen",
                  "nl": "Ongevallen veroorzaken om AI-systemen te testen"
        },
        {
                  "en": "Causal modeling of vehicle mechanics",
                  "es": "Modelado causal de mecánica de vehículos",
                  "de": "Kausale Modellierung von Fahrzeugmechanik",
                  "nl": "Causale modellering van voertuigmechanica"
        },
        {
                  "en": "AI systems that cause traffic improvements",
                  "es": "Sistemas IA que causan mejoras de tráfico",
                  "de": "KI-Systeme die Verkehrsverbesserungen verursachen",
                  "nl": "AI-systemen die verkeerverbeteringen veroorzaken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Causal AI allows vehicles to understand why certain actions lead to specific outcomes, enabling better generalization to novel situations and more explainable decisions.",
                  "es": "La IA causal permite a vehículos entender por qué ciertas acciones llevan a resultados específicos, permitiendo mejor generalización a situaciones novedosas y decisiones más explicables.",
                  "de": "Kausale KI ermöglicht Fahrzeugen zu verstehen warum bestimmte Aktionen zu spezifischen Ergebnissen führen, ermöglicht bessere Generalisierung auf neue Situationen und erklärbarere Entscheidungen.",
                  "nl": "Causale AI stelt voertuigen in staat te begrijpen waarom bepaalde acties tot specifieke uitkomsten leiden, wat betere generalisatie naar nieuwe situaties en meer verklaarbare beslissingen mogelijk maakt."
        }
      },
      {
        question: {
                  "en": "What is 'zero-shot learning' enabling for autonomous vehicles in new environments?",
                  "es": "¿Qué está permitiendo el 'aprendizaje de cero disparos' para vehículos autónomos en nuevos entornos?",
                  "de": "Was ermöglicht 'Zero-Shot Learning' für autonome Fahrzeuge in neuen Umgebungen?",
                  "nl": "Wat maakt 'zero-shot learning' mogelijk voor autonome voertuigen in nieuwe omgevingen?"
        },
        options: [
        {
                  "en": "Recognizing and handling completely new objects and situations without any prior training examples",
                  "es": "Reconocer y manejar objetos y situaciones completamente nuevos sin ejemplos de entrenamiento previos",
                  "de": "Völlig neue Objekte und Situationen erkennen und handhaben ohne vorherige Trainingsbeispiele",
                  "nl": "Volledig nieuwe objecten en situaties herkennen en hanteren zonder eerdere trainingsvoorbeelden"
        },
        {
                  "en": "Learning without taking any shots",
                  "es": "Aprender sin tomar ninguna foto",
                  "de": "Lernen ohne Aufnahmen zu machen",
                  "nl": "Leren zonder foto's te nemen"
        },
        {
                  "en": "Starting from zero knowledge",
                  "es": "Empezar desde conocimiento cero",
                  "de": "Von null Wissen beginnen",
                  "nl": "Beginnen vanaf nul kennis"
        },
        {
                  "en": "Zero accidents during learning phase",
                  "es": "Cero accidentes durante fase de aprendizaje",
                  "de": "Null Unfälle während der Lernphase",
                  "nl": "Nul ongevallen tijdens de leerfase"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Zero-shot learning allows vehicles to understand novel road signs, unusual vehicles, or new traffic patterns by leveraging semantic understanding and generalization capabilities.",
                  "es": "El aprendizaje de cero disparos permite a vehículos entender señales de carretera novedosas, vehículos inusuales o nuevos patrones de tráfico aprovechando comprensión semántica y capacidades de generalización.",
                  "de": "Zero-Shot Learning ermöglicht Fahrzeugen neue Verkehrsschilder, ungewöhnliche Fahrzeuge oder neue Verkehrsmuster zu verstehen durch Nutzung semantischen Verständnisses und Generalisierungsfähigkeiten.",
                  "nl": "Zero-shot learning stelt voertuigen in staat nieuwe verkeersborden, ongewone voertuigen of nieuwe verkeerspatronen te begrijpen door semantisch begrip en generalisatiecapaciteiten te benutten."
        }
      },
      {
        question: {
                  "en": "What is 'formal verification' providing for safety-critical autonomous vehicle systems?",
                  "es": "¿Qué está proporcionando la 'verificación formal' para sistemas de vehículos autónomos críticos de seguridad?",
                  "de": "Was bietet 'formale Verifikation' für sicherheitskritische autonome Fahrzeugsysteme?",
                  "nl": "Wat biedt 'formele verificatie' voor veiligheidskritieke autonome voertuigsystemen?"
        },
        options: [
        {
                  "en": "Mathematical proof that AI decision-making algorithms will always behave safely under specified conditions",
                  "es": "Prueba matemática de que algoritmos de toma de decisiones IA siempre se comportarán de forma segura bajo condiciones especificadas",
                  "de": "Mathematischer Beweis dass KI-Entscheidungsalgorithmen unter spezifizierten Bedingungen immer sicher verhalten",
                  "nl": "Wiskundig bewijs dat AI-besluitvormingsalgoritmes altijd veilig zullen gedragen onder gespecificeerde condities"
        },
        {
                  "en": "Official approval from authorities",
                  "es": "Aprobación oficial de autoridades",
                  "de": "Offizielle Genehmigung von Behörden",
                  "nl": "Officiële goedkeuring van autoriteiten"
        },
        {
                  "en": "Formal documentation of vehicle features",
                  "es": "Documentación formal de características vehiculares",
                  "de": "Formale Dokumentation von Fahrzeugmerkmalen",
                  "nl": "Formele documentatie van voertuigkenmerken"
        },
        {
                  "en": "Verification through formal testing only",
                  "es": "Verificación solo a través de pruebas formales",
                  "de": "Verifikation nur durch formale Tests",
                  "nl": "Verificatie alleen door formele testen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Formal verification uses mathematical logic to prove that autonomous systems will never violate safety constraints, providing the highest level of assurance for critical functions.",
                  "es": "La verificación formal usa lógica matemática para probar que sistemas autónomos nunca violarán restricciones de seguridad, proporcionando el nivel más alto de garantía para funciones críticas.",
                  "de": "Formale Verifikation nutzt mathematische Logik um zu beweisen dass autonome Systeme niemals Sicherheitsbeschränkungen verletzen, bietet höchstes Vertrauensniveau für kritische Funktionen.",
                  "nl": "Formele verificatie gebruikt wiskundige logica om te bewijzen dat autonome systemen nooit veiligheidsbeperkingen zullen schenden, wat het hoogste zekerheidsniveau biedt voor kritieke functies."
        }
      },
      {
        question: {
                  "en": "What is 'adversarial training' strengthening in autonomous vehicle AI systems?",
                  "es": "¿Qué está fortaleciendo el 'entrenamiento adversarial' en sistemas IA de vehículos autónomos?",
                  "de": "Was stärkt 'Adversarial Training' in KI-Systemen autonomer Fahrzeuge?",
                  "nl": "Wat versterkt 'adversarial training' in AI-systemen van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Training against competing vehicles",
                  "es": "Entrenamiento contra vehículos competidores",
                  "de": "Training gegen konkurrierende Fahrzeuge",
                  "nl": "Training tegen concurrerende voertuigen"
        },
        {
                  "en": "Adverse weather condition training",
                  "es": "Entrenamiento en condiciones climáticas adversas",
                  "de": "Training bei widrigen Wetterbedingungen",
                  "nl": "Training in slechte weersomstandigheden"
        },
        {
                  "en": "Robustness against malicious attacks and edge cases by training on intentionally challenging examples",
                  "es": "Robustez contra ataques maliciosos y casos extremos entrenando en ejemplos intencionalmente desafiantes",
                  "de": "Robustheit gegen bösartige Angriffe und Grenzfälle durch Training an absichtlich herausfordernden Beispielen",
                  "nl": "Robuustheid tegen kwaadaardige aanvallen en randgevallen door training op opzettelijk uitdagende voorbeelden"
        },
        {
                  "en": "Training with adversarial instructors",
                  "es": "Entrenamiento con instructores adversarios",
                  "de": "Training mit gegnerischen Ausbildern",
                  "nl": "Training met vijandige instructeurs"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adversarial training exposes AI systems to worst-case scenarios and potential attacks, building resilience against attempts to fool perception systems or decision-making algorithms.",
                  "es": "El entrenamiento adversarial expone sistemas IA a escenarios del peor caso y ataques potenciales, construyendo resistencia contra intentos de engañar sistemas de percepción o algoritmos de toma de decisiones.",
                  "de": "Adversarial Training setzt KI-Systeme Worst-Case-Szenarien und potentiellen Angriffen aus, baut Widerstandsfähigkeit gegen Versuche auf Wahrnehmungssysteme oder Entscheidungsalgorithmen zu täuschen.",
                  "nl": "Adversarial training stelt AI-systemen bloot aan worst-case scenario's en potentiële aanvallen, waarbij weerstand wordt opgebouwd tegen pogingen om perceptiesystemen of besluitvormingsalgoritmes te misleiden."
        }
      },
      {
        question: {
                  "en": "What is 'fail-safe architecture' ensuring in autonomous transportation systems?",
                  "es": "¿Qué está asegurando la 'arquitectura a prueba de fallos' en sistemas de transporte autónomo?",
                  "de": "Was gewährleistet 'Fail-Safe Architektur' in autonomen Transportsystemen?",
                  "nl": "Wat waarborgt 'fail-safe architectuur' in autonome transportsystemen?"
        },
        options: [
        {
                  "en": "Graceful degradation to safe states when components fail, preventing catastrophic system failures",
                  "es": "Degradación elegante a estados seguros cuando componentes fallan, previniendo fallas catastróficas del sistema",
                  "de": "Elegante Degradation zu sicheren Zuständen wenn Komponenten ausfallen, verhindert katastrophale Systemausfälle",
                  "nl": "Elegante degradatie naar veilige toestanden wanneer componenten falen, waarbij catastrofale systeemfalen worden voorkomen"
        },
        {
                  "en": "Architecture that cannot fail",
                  "es": "Arquitectura que no puede fallar",
                  "de": "Architektur die nicht ausfallen kann",
                  "nl": "Architectuur die niet kan falen"
        },
        {
                  "en": "Ensuring failures never happen",
                  "es": "Asegurar que fallas nunca ocurran",
                  "de": "Sicherstellen dass Ausfälle nie passieren",
                  "nl": "Ervoor zorgen dat storingen nooit gebeuren"
        },
        {
                  "en": "Safe storage of failure data",
                  "es": "Almacenamiento seguro de datos de falla",
                  "de": "Sichere Speicherung von Ausfalldaten",
                  "nl": "Veilige opslag van storingsdata"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fail-safe systems automatically transition to minimal risk conditions when detecting failures, such as safely pulling over when sensors malfunction or network connections are lost.",
                  "es": "Los sistemas a prueba de fallos transicionan automáticamente a condiciones de riesgo mínimo al detectar fallas, como detenerse de forma segura cuando sensores funcionan mal o conexiones de red se pierden.",
                  "de": "Fail-Safe Systeme wechseln automatisch zu minimalen Risikobedingungen bei Fehlererkennung, wie sicheres Anhalten wenn Sensoren versagen oder Netzwerkverbindungen verloren gehen.",
                  "nl": "Fail-safe systemen schakelen automatisch over naar minimale risicocondities bij detectie van storingen, zoals veilig naar de kant gaan wanneer sensoren defect raken of netwerkverbindingen wegvallen."
        }
      },
      {
        question: {
                  "en": "What is 'cybersecurity intrusion detection' protecting in connected vehicle networks?",
                  "es": "¿Qué está protegiendo la 'detección de intrusión de ciberseguridad' en redes de vehículos conectados?",
                  "de": "Was schützt 'Cybersecurity Intrusion Detection' in vernetzten Fahrzeugnetzwerken?",
                  "nl": "Wat beschermt 'cybersecurity intrusion detection' in verbonden voertuignetwerken?"
        },
        options: [
        {
                  "en": "Detection of vehicle break-ins",
                  "es": "Detección de robos de vehículos",
                  "de": "Erkennung von Fahrzeugeinbrüchen",
                  "nl": "Detectie van voertuiginbraken"
        },
        {
                  "en": "Intrusion detection for passengers",
                  "es": "Detección de intrusión para pasajeros",
                  "de": "Eindringlingserkennung für Passagiere",
                  "nl": "Inbraakdetectie voor passagiers"
        },
        {
                  "en": "Real-time monitoring and prevention of malicious attacks on vehicle communication systems and critical functions",
                  "es": "Monitoreo en tiempo real y prevención de ataques maliciosos en sistemas de comunicación vehicular y funciones críticas",
                  "de": "Echtzeit-Überwachung und Verhinderung bösartiger Angriffe auf Fahrzeugkommunikationssysteme und kritische Funktionen",
                  "nl": "Realtime monitoring en preventie van kwaadaardige aanvallen op voertuigcommunicatiesystemen en kritieke functies"
        },
        {
                  "en": "Physical security of vehicle entry",
                  "es": "Seguridad física de entrada vehicular",
                  "de": "Physische Sicherheit des Fahrzeugzugangs",
                  "nl": "Fysieke beveiliging van voertuigtoegang"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Advanced intrusion detection identifies anomalous network behavior, unauthorized access attempts, and potential cyberattacks on vehicle systems before they can cause harm.",
                  "es": "La detección avanzada de intrusión identifica comportamiento anómalo de red, intentos de acceso no autorizado y ataques cibernéticos potenciales en sistemas vehiculares antes de que puedan causar daño.",
                  "de": "Erweiterte Intrusion Detection identifiziert anomales Netzwerkverhalten, unbefugte Zugriffsversuche und potentielle Cyberangriffe auf Fahrzeugsysteme bevor sie Schaden verursachen können.",
                  "nl": "Geavanceerde intrusion detection identificeert anomaal netwerkgedrag, ongeautoriseerde toegangspogingen en potentiële cyberaanvallen op voertuigsystemen voordat ze schade kunnen veroorzaken."
        }
      },
      {
        question: {
                  "en": "What is 'redundant sensor validation' ensuring for autonomous vehicle safety?",
                  "es": "¿Qué está asegurando la 'validación de sensores redundantes' para seguridad de vehículos autónomos?",
                  "de": "Was gewährleistet 'redundante Sensorvalidierung' für autonome Fahrzeugsicherheit?",
                  "nl": "Wat waarborgt 'redundante sensorvalidatie' voor veiligheid van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Reducing sensor redundancy",
                  "es": "Reducir redundancia de sensores",
                  "de": "Sensor-Redundanz reduzieren",
                  "nl": "Sensorredundantie verminderen"
        },
        {
                  "en": "Validating sensor installation",
                  "es": "Validar instalación de sensores",
                  "de": "Sensorinstallation validieren",
                  "nl": "Sensorinstallatie valideren"
        },
        {
                  "en": "Having extra sensors for backup",
                  "es": "Tener sensores extra para respaldo",
                  "de": "Extra Sensoren als Backup haben",
                  "nl": "Extra sensoren hebben als backup"
        },
        {
                  "en": "Cross-verification of sensor data to detect failures, malfunctions, and inconsistencies in real-time",
                  "es": "Verificación cruzada de datos de sensores para detectar fallas, mal funcionamiento e inconsistencias en tiempo real",
                  "de": "Kreuzvalidierung von Sensordaten um Ausfälle, Fehlfunktionen und Inkonsistenzen in Echtzeit zu erkennen",
                  "nl": "Kruisvalidatie van sensordata om storingen, defecten en inconsistenties in realtime te detecteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Multiple sensors measuring the same phenomena are continuously compared to identify which sensors may be compromised, ensuring reliable perception for safety-critical decisions.",
                  "es": "Múltiples sensores midiendo los mismos fenómenos se comparan continuamente para identificar qué sensores pueden estar comprometidos, asegurando percepción confiable para decisiones críticas de seguridad.",
                  "de": "Mehrere Sensoren die dieselben Phänomene messen werden kontinuierlich verglichen um zu identifizieren welche Sensoren kompromittiert sein könnten, gewährleistet zuverlässige Wahrnehmung für sicherheitskritische Entscheidungen.",
                  "nl": "Meerdere sensoren die dezelfde fenomenen meten worden continu vergeleken om te identificeren welke sensoren gecompromitteerd kunnen zijn, wat betrouwbare perceptie waarborgt voor veiligheidskritieke beslissingen."
        }
      },
      {
        question: {
                  "en": "What is 'secure boot technology' protecting in autonomous vehicle systems?",
                  "es": "¿Qué está protegiendo la 'tecnología de arranque seguro' en sistemas de vehículos autónomos?",
                  "de": "Was schützt 'Secure Boot Technologie' in autonomen Fahrzeugsystemen?",
                  "nl": "Wat beschermt 'secure boot technologie' in autonome voertuigsystemen?"
        },
        options: [
        {
                  "en": "Secure physical vehicle startup",
                  "es": "Arranque físico seguro del vehículo",
                  "de": "Sicherer physischer Fahrzeugstart",
                  "nl": "Veilige fysieke voertuigstart"
        },
        {
                  "en": "Ensuring only verified, authentic software can run on vehicle systems from startup to prevent malicious code injection",
                  "es": "Asegurar que solo software verificado y auténtico pueda ejecutarse en sistemas vehiculares desde el arranque para prevenir inyección de código malicioso",
                  "de": "Gewährleisten dass nur verifizierte, authentische Software auf Fahrzeugsystemen vom Start an laufen kann um bösartige Code-Injection zu verhindern",
                  "nl": "Ervoor zorgen dat alleen geverifieerde, authentieke software kan draaien op voertuigsystemen vanaf opstarten om kwaadaardige code-injectie te voorkomen"
        },
        {
                  "en": "Boot protection from weather",
                  "es": "Protección de arranque del clima",
                  "de": "Boot-Schutz vor Wetter",
                  "nl": "Bescherming van opstarten tegen weer"
        },
        {
                  "en": "Secure storage of boot data",
                  "es": "Almacenamiento seguro de datos de arranque",
                  "de": "Sichere Speicherung von Boot-Daten",
                  "nl": "Veilige opslag van opstartdata"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Secure boot creates a chain of trust from hardware to software, cryptographically verifying each component before execution to prevent unauthorized or tampered software from compromising vehicle safety systems.",
                  "es": "El arranque seguro crea una cadena de confianza del hardware al software, verificando criptográficamente cada componente antes de la ejecución para prevenir que software no autorizado o alterado comprometa sistemas de seguridad vehicular.",
                  "de": "Secure Boot erstellt eine Vertrauenskette von Hardware zu Software, verifiziert kryptographisch jede Komponente vor Ausführung um zu verhindern dass unbefugte oder manipulierte Software Fahrzeugsicherheitssysteme kompromittiert.",
                  "nl": "Secure boot creëert een vertrouwensketen van hardware naar software, waarbij elke component cryptografisch wordt geverifieerd voor uitvoering om te voorkomen dat ongeautoriseerde of gemanipuleerde software voertuigveiligheidssystemen compromitteert."
        }
      },
      {
        question: {
                  "en": "What is 'AI model explainability' providing for autonomous vehicle decision auditing?",
                  "es": "¿Qué está proporcionando la 'explicabilidad de modelos IA' para auditoría de decisiones de vehículos autónomos?",
                  "de": "Was bietet 'KI-Modell-Erklärbarkeit' für autonome Fahrzeugentscheidungs-Auditing?",
                  "nl": "Wat biedt 'AI-model uitlegbaarheid' voor autonome voertuigbeslissing auditing?"
        },
        options: [
        {
                  "en": "Model documentation for developers",
                  "es": "Documentación de modelo para desarrolladores",
                  "de": "Modelldokumentation für Entwickler",
                  "nl": "Modeldocumentatie voor ontwikkelaars"
        },
        {
                  "en": "Explaining AI concepts to users",
                  "es": "Explicar conceptos IA a usuarios",
                  "de": "KI-Konzepte an Nutzer erklären",
                  "nl": "AI-concepten uitleggen aan gebruikers"
        },
        {
                  "en": "Clear, interpretable explanations of why AI systems made specific driving decisions for accountability and safety validation",
                  "es": "Explicaciones claras interpretables de por qué sistemas IA tomaron decisiones específicas de conducción para responsabilidad y validación seguridad",
                  "de": "Klare interpretierbare Erklärungen warum KI-Systeme spezifische Fahrentscheidungen trafen für Verantwortlichkeit und Sicherheitsvalidierung",
                  "nl": "Duidelijke interpreteerbare verklaringen waarom AI-systemen specifieke rijbeslissingen namen voor verantwoordelijkheid en veiligheidsvalidatie"
        },
        {
                  "en": "Explaining vehicle features",
                  "es": "Explicar características vehiculares",
                  "de": "Fahrzeugmerkmale erklären",
                  "nl": "Voertuigkenmerken uitleggen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Explainable AI enables investigators to understand the reasoning behind every autonomous driving decision, crucial for accident investigation, liability determination, and safety system improvement.",
                  "es": "La IA explicable permite a investigadores entender el razonamiento detrás de cada decisión de conducción autónoma, crucial para investigación de accidentes, determinación de responsabilidad y mejora de sistemas de seguridad.",
                  "de": "Erklärbare KI ermöglicht Ermittlern das Verständnis der Begründung hinter jeder autonomen Fahrentscheidung, entscheidend für Unfalluntersuchung, Haftungsbestimmung und Sicherheitssystemverbesserung.",
                  "nl": "Uitlegbare AI stelt onderzoekers in staat de redenering achter elke autonome rijbeslissing te begrijpen, cruciaal voor ongevalonderzoek, aansprakelijkheidsbepaling en verbetering van veiligheidssystemen."
        }
      },
      {
        question: {
                  "en": "What is 'hardware security module (HSM)' safeguarding in connected vehicles?",
                  "es": "¿Qué está salvaguardando el 'módulo de seguridad de hardware (HSM)' en vehículos conectados?",
                  "de": "Was schützt 'Hardware Security Module (HSM)' in vernetzten Fahrzeugen?",
                  "nl": "Wat beschermt 'hardware security module (HSM)' in verbonden voertuigen?"
        },
        options: [
        {
                  "en": "Cryptographic keys and sensitive operations through tamper-resistant hardware that cannot be compromised by software attacks",
                  "es": "Claves criptográficas y operaciones sensibles via hardware resistente a manipulación que no puede comprometerse por ataques de software",
                  "de": "Kryptographische Schlüssel und sensible Operationen durch manipulationsresistente Hardware die nicht durch Software-Angriffe kompromittiert werden kann",
                  "nl": "Cryptografische sleutels en gevoelige operaties door manipulatiebestendige hardware die niet gecompromitteerd kan worden door software-aanvallen"
        },
        {
                  "en": "Module for hardware security training",
                  "es": "Módulo para entrenamiento de seguridad de hardware",
                  "de": "Modul für Hardware-Sicherheitstraining",
                  "nl": "Module voor hardware beveiligingstraining"
        },
        {
                  "en": "Security for hardware components",
                  "es": "Seguridad para componentes de hardware",
                  "de": "Sicherheit für Hardware-Komponenten",
                  "nl": "Beveiliging voor hardware componenten"
        },
        {
                  "en": "Hardware system maintenance",
                  "es": "Mantenimiento de sistema de hardware",
                  "de": "Hardware-System-Wartung",
                  "nl": "Hardware systeem onderhoud"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "HSMs provide hardware-level protection for encryption keys and security functions, ensuring that even if vehicle software is compromised, critical security operations remain protected.",
                  "es": "Los HSM proporcionan protección a nivel de hardware para claves de encriptación y funciones de seguridad, asegurando que incluso si software vehicular está comprometido, operaciones críticas de seguridad permanezcan protegidas.",
                  "de": "HSMs bieten Hardware-Level-Schutz für Verschlüsselungsschlüssel und Sicherheitsfunktionen, gewährleisten dass selbst wenn Fahrzeugsoftware kompromittiert ist, kritische Sicherheitsoperationen geschützt bleiben.",
                  "nl": "HSM's bieden hardware-niveau bescherming voor versleutelingssleutels en beveiligingsfuncties, waarbij wordt gewaarborgd dat zelfs als voertuigsoftware gecompromitteerd is, kritieke beveiligingsoperaties beschermd blijven."
        }
      },
      {
        question: {
                  "en": "What is 'byzantine fault tolerance' enabling in autonomous vehicle networks?",
                  "es": "¿Qué está permitiendo la 'tolerancia a fallos bizantinos' en redes de vehículos autónomos?",
                  "de": "Was ermöglicht 'Byzantine Fault Tolerance' in autonomen Fahrzeugnetzwerken?",
                  "nl": "Wat maakt 'byzantine fault tolerance' mogelijk in autonome voertuignetwerken?"
        },
        options: [
        {
                  "en": "Tolerance for Byzantine architecture",
                  "es": "Tolerancia para arquitectura bizantina",
                  "de": "Toleranz für byzantinische Architektur",
                  "nl": "Tolerantie voor Byzantijnse architectuur"
        },
        {
                  "en": "Historical fault analysis",
                  "es": "Análisis histórico de fallas",
                  "de": "Historische Fehleranalyse",
                  "nl": "Historische foutanalyse"
        },
        {
                  "en": "Fault tolerance in ancient systems",
                  "es": "Tolerancia a fallos en sistemas antiguos",
                  "de": "Fehlertoleranz in antiken Systemen",
                  "nl": "Fouttolerantie in oude systemen"
        },
        {
                  "en": "System consensus and operation even when some vehicles behave maliciously or unpredictably",
                  "es": "Consenso y operación sistema incluso cuando algunos vehículos se comportan maliciosamente o impredeciblemente",
                  "de": "Systemkonsens und -betrieb auch wenn einige Fahrzeuge bösartig oder unvorhersagbar handeln",
                  "nl": "Systeemconsensus en werking zelfs wanneer sommige voertuigen zich kwaadaardig of onvoorspelbaar gedragen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Byzantine fault tolerance ensures that vehicle networks can reach consensus on traffic decisions and maintain safety even if some vehicles are compromised, malfunctioning, or providing false information.",
                  "es": "La tolerancia a fallos bizantinos asegura que redes vehiculares puedan alcanzar consenso en decisiones de tráfico y mantener seguridad incluso si algunos vehículos están comprometidos, funcionando mal o proporcionando información falsa.",
                  "de": "Byzantine Fault Tolerance gewährleistet dass Fahrzeugnetzwerke Konsens über Verkehrsentscheidungen erreichen und Sicherheit aufrechterhalten können auch wenn einige Fahrzeuge kompromittiert, fehlerhaft oder falsche Informationen liefern.",
                  "nl": "Byzantine fault tolerance zorgt ervoor dat voertuignetwerken consensus kunnen bereiken over verkeersbeslissingen en veiligheid kunnen handhaven zelfs als sommige voertuigen gecompromitteerd zijn, defect zijn of valse informatie verstrekken."
        }
      },
      {
        question: {
                  "en": "What is 'differential privacy' protecting in vehicle data sharing?",
                  "es": "¿Qué está protegiendo la 'privacidad diferencial' en intercambio de datos vehiculares?",
                  "de": "Was schützt 'Differential Privacy' beim Fahrzeugdatenaustausch?",
                  "nl": "Wat beschermt 'differential privacy' bij het delen van voertuigdata?"
        },
        options: [
        {
                  "en": "Privacy for different user groups",
                  "es": "Privacidad para diferentes grupos de usuarios",
                  "de": "Privatsphäre für verschiedene Benutzergruppen",
                  "nl": "Privacy voor verschillende gebruikersgroepen"
        },
        {
                  "en": "Differences in privacy policies",
                  "es": "Diferencias en políticas de privacidad",
                  "de": "Unterschiede in Datenschutzrichtlinien",
                  "nl": "Verschillen in privacybeleid"
        },
        {
                  "en": "Private data differentiation",
                  "es": "Diferenciación de datos privados",
                  "de": "Private Datendifferenzierung",
                  "nl": "Privé data differentiatie"
        },
        {
                  "en": "Individual privacy while enabling useful aggregate analysis by adding carefully calibrated statistical noise",
                  "es": "Privacidad individual mientras permite análisis agregado útil añadiendo ruido estadístico cuidadosamente calibrado",
                  "de": "Individuelle Privatsphäre während nützliche Aggregatanalyse ermöglicht wird durch Hinzufügen sorgfältig kalibriertes statistisches Rauschen",
                  "nl": "Individuele privacy terwijl nuttige geaggregeerde analyse mogelijk blijft door zorgvuldig gekalibreerde statistische ruis toe te voegen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Differential privacy mathematically guarantees that individual vehicle data cannot be identified while still allowing traffic pattern analysis and infrastructure optimization.",
                  "es": "La privacidad diferencial garantiza matemáticamente que datos individuales de vehículos no pueden ser identificados mientras aún permite análisis de patrones de tráfico y optimización de infraestructura.",
                  "de": "Differential Privacy garantiert mathematisch dass individuelle Fahrzeugdaten nicht identifiziert werden können während Verkehrsmusteranalyse und Infrastrukturoptimierung weiterhin möglich sind.",
                  "nl": "Differential privacy garandeert wiskundig dat individuele voertuigdata niet geïdentificeerd kunnen worden terwijl verkeerspatroonanalyse en infrastructuuroptimalisatie nog steeds mogelijk blijven."
        }
      },
      {
        question: {
                  "en": "What is 'safety-critical real-time scheduling' ensuring in autonomous vehicle systems?",
                  "es": "¿Qué está asegurando la 'programación en tiempo real crítica de seguridad' en sistemas de vehículos autónomos?",
                  "de": "Was gewährleistet 'sicherheitskritische Echtzeit-Scheduling' in autonomen Fahrzeugsystemen?",
                  "nl": "Wat waarborgt 'veiligheidskritieke realtime scheduling' in autonome voertuigsystemen?"
        },
        options: [
        {
                  "en": "Critical safety tasks always receive processing priority and meet strict timing deadlines",
                  "es": "Tareas críticas de seguridad siempre reciben prioridad de procesamiento y cumplen fechas límite estrictas",
                  "de": "Kritische Sicherheitsaufgaben erhalten immer Verarbeitungspriorität und erfüllen strenge Zeitfristen",
                  "nl": "Kritieke veiligheidstaken krijgen altijd verwerkingsprioriteit en halen strikte timing deadlines"
        },
        {
                  "en": "Critical scheduling for traffic lights",
                  "es": "Programación crítica para semáforos",
                  "de": "Kritische Planung für Ampeln",
                  "nl": "Kritieke planning voor verkeerslichten"
        },
        {
                  "en": "Real-time scheduling of passenger trips",
                  "es": "Programación en tiempo real de viajes de pasajeros",
                  "de": "Echtzeit-Planung von Passagierfahrten",
                  "nl": "Realtime planning van passagiersreizen"
        },
        {
                  "en": "Scheduling vehicle maintenance safely",
                  "es": "Programar mantenimiento vehicular de forma segura",
                  "de": "Fahrzeugwartung sicher planen",
                  "nl": "Voertuigonderhoud veilig inplannen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Real-time schedulers ensure that emergency braking, collision avoidance, and other life-critical functions always get immediate CPU access, preventing dangerous delays in safety responses.",
                  "es": "Los programadores en tiempo real aseguran que frenado de emergencia, evitación de colisiones y otras funciones críticas de vida siempre obtengan acceso inmediato a CPU, previniendo retrasos peligrosos en respuestas de seguridad.",
                  "de": "Echtzeit-Scheduler gewährleisten dass Notbremsung, Kollisionsvermeidung und andere lebenskritische Funktionen immer sofortigen CPU-Zugang erhalten, verhindert gefährliche Verzögerungen in Sicherheitsantworten.",
                  "nl": "Realtime schedulers zorgen ervoor dat noodremmen, botsingspreventie en andere levenskritieke functies altijd onmiddellijke CPU-toegang krijgen, waardoor gevaarlijke vertragingen in veiligheidsresponses worden voorkomen."
        }
      },
      {
        question: {
                  "en": "What is 'trusted execution environment (TEE)' securing in autonomous vehicles?",
                  "es": "¿Qué está asegurando el 'entorno de ejecución confiable (TEE)' en vehículos autónomos?",
                  "de": "Was sichert 'Trusted Execution Environment (TEE)' in autonomen Fahrzeugen?",
                  "nl": "Wat beveiligt 'trusted execution environment (TEE)' in autonome voertuigen?"
        },
        options: [
        {
                  "en": "Execution environment documentation",
                  "es": "Documentación de entorno de ejecución",
                  "de": "Ausführungsumgebung-Dokumentation",
                  "nl": "Uitvoeringsomgeving documentatie"
        },
        {
                  "en": "Environment for trusted users",
                  "es": "Entorno para usuarios confiables",
                  "de": "Umgebung für vertrauensvolle Nutzer",
                  "nl": "Omgeving voor vertrouwde gebruikers"
        },
        {
                  "en": "Trusted testing environment",
                  "es": "Entorno de pruebas confiable",
                  "de": "Vertrauensvolle Testumgebung",
                  "nl": "Vertrouwde testomgeving"
        },
        {
                  "en": "Isolated execution space where critical AI decisions and cryptographic operations cannot be accessed by compromised software",
                  "es": "Espacio de ejecución aislado donde decisiones críticas IA y operaciones criptográficas no pueden ser accedidas por software comprometido",
                  "de": "Isolierter Ausführungsraum wo kritische KI-Entscheidungen und kryptographische Operationen nicht durch kompromittierte Software zugegriffen werden können",
                  "nl": "Geïsoleerde uitvoeringsruimte waar kritieke AI-beslissingen en cryptografische operaties niet benaderd kunnen worden door gecompromitteerde software"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "TEE creates a secure enclave within the processor where safety-critical computations run in complete isolation, protected even from privileged system software and hypervisors.",
                  "es": "TEE crea un enclave seguro dentro del procesador donde cálculos críticos de seguridad se ejecutan en aislamiento completo, protegidos incluso de software de sistema privilegiado e hipervisores.",
                  "de": "TEE erstellt eine sichere Enklave innerhalb des Prozessors wo sicherheitskritische Berechnungen in kompletter Isolation laufen, geschützt selbst vor privilegierter Systemsoftware und Hypervisoren.",
                  "nl": "TEE creëert een veilige enclave binnen de processor waar veiligheidskritieke berekeningen in complete isolatie draaien, beschermd zelfs tegen geprivilegieerde systeemsoftware en hypervisors."
        }
      },
      {
        question: {
                  "en": "What is 'AI safety monitoring' continuously tracking in autonomous vehicle operations?",
                  "es": "¿Qué está rastreando continuamente el 'monitoreo de seguridad IA' en operaciones de vehículos autónomos?",
                  "de": "Was verfolgt 'KI-Sicherheitsüberwachung' kontinuierlich in autonomen Fahrzeugoperationen?",
                  "nl": "Wat volgt 'AI-veiligheidsmonitoring' continu in autonome voertuigoperaties?"
        },
        options: [
        {
                  "en": "Safety equipment monitoring only",
                  "es": "Solo monitoreo de equipo de seguridad",
                  "de": "Nur Sicherheitsausrüstung-Überwachung",
                  "nl": "Alleen veiligheidsuitrusting monitoring"
        },
        {
                  "en": "AI safety training progress",
                  "es": "Progreso de entrenamiento de seguridad IA",
                  "de": "KI-Sicherheitstraining-Fortschritt",
                  "nl": "AI-veiligheids trainingsvoortgang"
        },
        {
                  "en": "Safety monitoring of AI developers",
                  "es": "Monitoreo de seguridad de desarrolladores IA",
                  "de": "Sicherheitsüberwachung von KI-Entwicklern",
                  "nl": "Veiligheidsmonitoring van AI-ontwikkelaars"
        },
        {
                  "en": "AI model performance degradation, unexpected behaviors, and confidence levels to detect when systems may be operating outside safe parameters",
                  "es": "Degradación rendimiento modelos IA, comportamientos inesperados y niveles confianza para detectar cuando sistemas operan fuera de parámetros seguros",
                  "de": "KI-Modell-Leistungsabfall, unerwartete Verhaltensweisen und Vertrauensniveaus um zu erkennen wenn Systeme außerhalb sicherer Parameter operieren",
                  "nl": "AI-model prestatieverval, onverwacht gedrag en vertrouwensniveaus om te detecteren wanneer systemen buiten veilige parameters opereren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Continuous safety monitoring detects when AI systems exhibit unusual confidence patterns, make inconsistent decisions, or show signs of adversarial manipulation, triggering safety interventions.",
                  "es": "El monitoreo continuo de seguridad detecta cuando sistemas IA exhiben patrones de confianza inusuales, toman decisiones inconsistentes o muestran signos de manipulación adversarial, activando intervenciones de seguridad.",
                  "de": "Kontinuierliche Sicherheitsüberwachung erkennt wenn KI-Systeme ungewöhnliche Vertrauensmuster zeigen, inkonsistente Entscheidungen treffen oder Zeichen adversarialer Manipulation aufweisen, löst Sicherheitseingriffe aus.",
                  "nl": "Continue veiligheidsmonitoring detecteert wanneer AI-systemen ongewone vertrouwenspatronen vertonen, inconsistente beslissingen nemen of tekenen van adversariële manipulatie tonen, wat veiligheidsinterventies activeert."
        }
      },
      {
        question: {
                  "en": "What is 'secure over-the-air (OTA) updates' protecting against in autonomous vehicles?",
                  "es": "¿Contra qué está protegiendo las 'actualizaciones seguras por aire (OTA)' en vehículos autónomos?",
                  "de": "Wogegen schützen 'sichere Over-the-Air (OTA) Updates' in autonomen Fahrzeugen?",
                  "nl": "Waartegen beschermen 'veilige over-the-air (OTA) updates' in autonome voertuigen?"
        },
        options: [
        {
                  "en": "Updates during flight only",
                  "es": "Actualizaciones solo durante vuelo",
                  "de": "Updates nur während des Flugs",
                  "nl": "Updates alleen tijdens vlucht"
        },
        {
                  "en": "Air pollution during updates",
                  "es": "Contaminación del aire durante actualizaciones",
                  "de": "Luftverschmutzung während Updates",
                  "nl": "Luchtvervuiling tijdens updates"
        },
        {
                  "en": "Over-the-air radio interference",
                  "es": "Interferencia de radio por aire",
                  "de": "Over-the-Air Radio-Interferenz",
                  "nl": "Over-the-air radio interferentie"
        },
        {
                  "en": "Malicious software injection during remote updates through cryptographic verification and secure communication channels",
                  "es": "Inyección software malicioso durante actualizaciones remotas via verificación criptográfica y canales comunicación seguros",
                  "de": "Bösartige Software-Injection während Remote-Updates durch kryptographische Verifikation und sichere Kommunikationskanäle",
                  "nl": "Kwaadaardige software-injectie tijdens externe updates door cryptografische verificatie en veilige communicatiekanalen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Secure OTA updates use digital signatures, encrypted channels, and rollback mechanisms to ensure only legitimate software updates are installed and can be reverted if problems occur.",
                  "es": "Las actualizaciones OTA seguras usan firmas digitales, canales encriptados y mecanismos de reversión para asegurar que solo actualizaciones de software legítimas se instalen y puedan revertirse si ocurren problemas.",
                  "de": "Sichere OTA-Updates nutzen digitale Signaturen, verschlüsselte Kanäle und Rollback-Mechanismen um zu gewährleisten dass nur legitime Software-Updates installiert werden und bei Problemen rückgängig gemacht werden können.",
                  "nl": "Veilige OTA-updates gebruiken digitale handtekeningen, versleutelde kanalen en rollback-mechanismen om te zorgen dat alleen legitieme software-updates worden geïnstalleerd en kunnen worden teruggedraaid bij problemen."
        }
      },
      {
        question: {
                  "en": "What is 'penetration testing' validating in autonomous vehicle cybersecurity?",
                  "es": "¿Qué está validando las 'pruebas de penetración' en ciberseguridad de vehículos autónomos?",
                  "de": "Was validieren 'Penetration Tests' in der Cybersicherheit autonomer Fahrzeuge?",
                  "nl": "Wat valideren 'penetration tests' in cybersecurity van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Testing vehicle entry systems",
                  "es": "Probar sistemas de entrada vehicular",
                  "de": "Fahrzeugzugangssysteme testen",
                  "nl": "Voertuigtoegangsystemen testen"
        },
        {
                  "en": "Penetration testing for crash safety",
                  "es": "Pruebas de penetración para seguridad de choques",
                  "de": "Penetrationstests für Crash-Sicherheit",
                  "nl": "Penetratietests voor botsbeveiliging"
        },
        {
                  "en": "Security vulnerabilities by simulating real-world attack scenarios to identify and fix weaknesses before deployment",
                  "es": "Vulnerabilidades de seguridad simulando escenarios de ataque del mundo real para identificar y corregir debilidades antes del despliegue",
                  "de": "Sicherheitsvulnerabilitäten durch Simulation realer Angriffsszenarien um Schwachstellen vor Deployment zu identifizieren und beheben",
                  "nl": "Beveiligingskwetsbaarheden door aanvalsscenario's te simuleren om zwakke punten te identificeren en oplossen voor implementatie"
        },
        {
                  "en": "Penetration depth of vehicle materials",
                  "es": "Profundidad de penetración de materiales vehiculares",
                  "de": "Penetrationstiefe von Fahrzeugmaterialien",
                  "nl": "Penetratiediepte van voertuigmaterialen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ethical hackers systematically test autonomous vehicle systems to discover potential cyber attack vectors, ensuring robust security before vehicles reach public roads.",
                  "es": "Hackers éticos prueban sistemáticamente sistemas de vehículos autónomos para descubrir vectores potenciales de ataques cibernéticos, asegurando seguridad robusta antes de que vehículos lleguen a carreteras públicas.",
                  "de": "Ethische Hacker testen systematisch autonome Fahrzeugsysteme um potentielle Cyber-Angriffsvektoren zu entdecken, gewährleisten robuste Sicherheit bevor Fahrzeuge öffentliche Straßen erreichen.",
                  "nl": "Ethische hackers testen systematisch autonome voertuigsystemen om potentiële cyber-aanvalsvectoren te ontdekken, waarbij robuuste beveiliging wordt gewaarborgd voordat voertuigen openbare wegen bereiken."
        }
      },
      {
        question: {
                  "en": "What is 'quantum-resistant cryptography' preparing for in future autonomous vehicle security?",
                  "es": "¿Para qué está preparando la 'criptografía resistente a cuántica' en seguridad futura de vehículos autónomos?",
                  "de": "Wofür bereitet 'quantenresistente Kryptographie' die zukünftige Sicherheit autonomer Fahrzeuge vor?",
                  "nl": "Waarvoor bereidt 'quantum-resistente cryptografie' toekomstige beveiliging van autonome voertuigen voor?"
        },
        options: [
        {
                  "en": "Cryptography for quantum vehicle engines",
                  "es": "Criptografía para motores vehiculares cuánticos",
                  "de": "Kryptographie für Quanten-Fahrzeugmotoren",
                  "nl": "Cryptografie voor quantum voertuigmotoren"
        },
        {
                  "en": "Resistance to quantum interference",
                  "es": "Resistencia a interferencia cuántica",
                  "de": "Resistenz gegen Quanteninterferenz",
                  "nl": "Weerstand tegen quantum interferentie"
        },
        {
                  "en": "Protecting vehicle communications against future quantum computers that could break current encryption methods",
                  "es": "Proteger comunicaciones vehiculares contra futuras computadoras cuánticas que podrían romper métodos de encriptación actuales",
                  "de": "Fahrzeugkommunikation gegen zukünftige Quantencomputer schützen die aktuelle Verschlüsselungsmethoden brechen könnten",
                  "nl": "Voertuigcommunicaties beschermen tegen toekomstige quantumcomputers die huidige versleutelingsmethoden zouden kunnen breken"
        },
        {
                  "en": "Quantum particle encryption",
                  "es": "Encriptación de partículas cuánticas",
                  "de": "Quantenteilchen-Verschlüsselung",
                  "nl": "Quantumdeeltjes versleuteling"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Post-quantum cryptography algorithms ensure that autonomous vehicle security remains intact even when quantum computers become powerful enough to break traditional encryption, protecting long-term data security.",
                  "es": "Los algoritmos de criptografía post-cuántica aseguran que la seguridad de vehículos autónomos permanezca intacta incluso cuando computadoras cuánticas sean lo suficientemente poderosas para romper encriptación tradicional, protegiendo seguridad de datos a largo plazo.",
                  "de": "Post-Quanten-Kryptographie-Algorithmen gewährleisten dass autonome Fahrzeugsicherheit intakt bleibt auch wenn Quantencomputer mächtig genug werden traditionelle Verschlüsselung zu brechen, schützt langfristige Datensicherheit.",
                  "nl": "Post-quantum cryptografie algoritmes zorgen ervoor dat autonome voertuigbeveiliging intact blijft zelfs wanneer quantumcomputers krachtig genoeg worden om traditionele versleuteling te breken, beschermt langetermijn databeveiliging."
        }
      },
      {
        question: {
                  "en": "What is 'AI alignment research' addressing for autonomous vehicle value systems?",
                  "es": "¿Qué está abordando la 'investigación de alineación IA' para sistemas de valores de vehículos autónomos?",
                  "de": "Was adressiert 'KI-Alignment-Forschung' für Wertesysteme autonomer Fahrzeuge?",
                  "nl": "Wat pakt 'AI-alignment onderzoek' aan voor waardesystemen van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Alignment of AI algorithms",
                  "es": "Alineación de algoritmos IA",
                  "de": "Ausrichtung von KI-Algorithmen",
                  "nl": "Uitlijning van AI-algoritmes"
        },
        {
                  "en": "Alignment of AI sensors only",
                  "es": "Solo alineación de sensores IA",
                  "de": "Nur Ausrichtung von KI-Sensoren",
                  "nl": "Alleen uitlijning van AI-sensoren"
        },
        {
                  "en": "Aligning AI with company goals",
                  "es": "Alinear IA con objetivos de empresa",
                  "de": "KI mit Unternehmenszielen ausrichten",
                  "nl": "AI afstemmen op bedrijfsdoelen"
        },
        {
                  "en": "Ensuring AI driving decisions align with human ethical values and societal safety expectations in complex moral dilemmas",
                  "es": "Asegurar que decisiones de conducción IA se alineen con valores éticos humanos y expectativas de seguridad social en dilemas morales complejos",
                  "de": "Gewährleisten dass KI-Fahrentscheidungen mit menschlichen ethischen Werten und gesellschaftlichen Sicherheitserwartungen in komplexen moralischen Dilemmata übereinstimmen",
                  "nl": "Ervoor zorgen dat AI-rijbeslissingen aansluiten bij menselijke ethische waarden en maatschappelijke veiligheidsverwachtingen in complexe morele dilemma's"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI alignment ensures autonomous vehicles make decisions consistent with human values in ethical edge cases, like how to minimize harm in unavoidable accident scenarios while respecting legal and cultural norms.",
                  "es": "La alineación IA asegura que vehículos autónomos tomen decisiones consistentes con valores humanos en casos límite éticos, como minimizar daño en escenarios de accidente inevitable mientras se respetan normas legales y culturales.",
                  "de": "KI-Alignment gewährleistet dass autonome Fahrzeuge Entscheidungen treffen die mit menschlichen Werten in ethischen Grenzfällen konsistent sind, wie Schaden in unvermeidbaren Unfallszenarien minimieren während rechtliche und kulturelle Normen respektiert werden.",
                  "nl": "AI-alignment zorgt ervoor dat autonome voertuigen beslissingen nemen die consistent zijn met menselijke waarden in ethische randgevallen, zoals het minimaliseren van schade in onvermijdelijke ongevalsscenario's terwijl wettelijke en culturele normen worden gerespecteerd."
        }
      },
      {
        question: {
                  "en": "What is 'specification gaming detection' preventing in autonomous vehicle AI systems?",
                  "es": "¿Qué está previniendo la 'detección de gaming de especificación' en sistemas IA de vehículos autónomos?",
                  "de": "Was verhindert 'Specification Gaming Detection' in KI-Systemen autonomer Fahrzeuge?",
                  "nl": "Wat voorkomt 'specification gaming detectie' in AI-systemen van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Gaming traffic specifications",
                  "es": "Especificaciones de tráfico de juegos",
                  "de": "Gaming-Verkehrsspezifikationen",
                  "nl": "Gaming verkeer specificaties"
        },
        {
                  "en": "Specification documentation games",
                  "es": "Juegos de documentación de especificación",
                  "de": "Spezifikationsdokumentations-Spiele",
                  "nl": "Specificatie documentatie games"
        },
        {
                  "en": "AI systems finding loopholes to achieve reward objectives in technically correct but unsafe or unintended ways",
                  "es": "Sistemas IA encontrando lagunas para lograr objetivos de recompensa en formas técnicamente correctas pero inseguras o no previstas",
                  "de": "KI-Systeme finden Schlupflöcher um Belohnungsziele auf technisch korrekte aber unsichere oder unbeabsichtigte Weise zu erreichen",
                  "nl": "AI-systemen vinden mazen om beloningsdoelstellingen te bereiken op technisch correcte maar onveilige of onbedoelde manieren"
        },
        {
                  "en": "Gaming features in vehicles",
                  "es": "Características de juegos en vehículos",
                  "de": "Gaming-Funktionen in Fahrzeugen",
                  "nl": "Gaming functies in voertuigen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Specification gaming occurs when AI optimizes for literal reward metrics while violating the intended spirit, like an autonomous vehicle technically obeying speed limits while driving dangerously close to obstacles.",
                  "es": "El gaming de especificación ocurre cuando IA optimiza para métricas literales de recompensa mientras viola el espíritu previsto, como un vehículo autónomo técnicamente obedeciendo límites de velocidad mientras conduce peligrosamente cerca de obstáculos.",
                  "de": "Specification Gaming tritt auf wenn KI für wörtliche Belohnungsmetriken optimiert während die beabsichtigte Absicht verletzt wird, wie ein autonomes Fahrzeug technisch Geschwindigkeitsbegrenzungen befolgt während es gefährlich nahe an Hindernissen fährt.",
                  "nl": "Specification gaming treedt op wanneer AI optimaliseert voor letterlijke beloningsmetrieken terwijl de beoogde geest wordt geschonden, zoals een autonoom voertuig technisch snelheidslimieten naleeft terwijl het gevaarlijk dicht bij obstakels rijdt."
        }
      },
      {
        question: {
                  "en": "What is 'runtime verification' continuously checking in deployed autonomous vehicles?",
                  "es": "¿Qué está verificando continuamente la 'verificación en tiempo de ejecución' en vehículos autónomos desplegados?",
                  "de": "Was überprüft 'Runtime Verification' kontinuierlich in eingesetzten autonomen Fahrzeugen?",
                  "nl": "Wat controleert 'runtime verification' continu in ingezette autonome voertuigen?"
        },
        options: [
        {
                  "en": "Verification of runtime errors",
                  "es": "Verificación de errores de tiempo de ejecución",
                  "de": "Verifikation von Runtime-Fehlern",
                  "nl": "Verificatie van runtime fouten"
        },
        {
                  "en": "Runtime software performance only",
                  "es": "Solo rendimiento de software en tiempo de ejecución",
                  "de": "Nur Runtime-Software-Leistung",
                  "nl": "Alleen runtime software prestaties"
        },
        {
                  "en": "Whether system behavior matches formal safety specifications during actual operation in real-time",
                  "es": "Si comportamiento sistema coincide con especificaciones formales de seguridad durante operación real en tiempo real",
                  "de": "Ob Systemverhalten während tatsächlicher Operation in Echtzeit mit formalen Sicherheitsspezifikationen übereinstimmt",
                  "nl": "Of systeemgedrag overeenkomt met formele veiligheidsspecificaties tijdens daadwerkelijke werking in realtime"
        },
        {
                  "en": "Runtime compilation verification",
                  "es": "Verificación de compilación en tiempo de ejecución",
                  "de": "Runtime-Kompilierungsverifikation",
                  "nl": "Runtime compilatie verificatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Runtime verification monitors executing systems to detect violations of safety properties immediately, enabling fast intervention before dangerous situations develop.",
                  "es": "La verificación en tiempo de ejecución monitorea sistemas en ejecución para detectar violaciones de propiedades de seguridad inmediatamente, permitiendo intervención rápida antes de que situaciones peligrosas se desarrollen.",
                  "de": "Runtime Verification überwacht ausführende Systeme um Verletzungen von Sicherheitseigenschaften sofort zu erkennen, ermöglicht schnelle Intervention bevor gefährliche Situationen entstehen.",
                  "nl": "Runtime verification monitort uitvoerende systemen om schendingen van veiligheidseigenschappen onmiddellijk te detecteren, wat snelle interventie mogelijk maakt voordat gevaarlijke situaties ontstaan."
        }
      },
      {
        question: {
                  "en": "What is 'attack surface minimization' reducing in autonomous vehicle cybersecurity?",
                  "es": "¿Qué está reduciendo la 'minimización de superficie de ataque' en ciberseguridad de vehículos autónomos?",
                  "de": "Was reduziert 'Attack Surface Minimization' in der Cybersicherheit autonomer Fahrzeuge?",
                  "nl": "Wat vermindert 'attack surface minimization' in cybersecurity van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Minimal vehicle surfaces",
                  "es": "Superficies vehiculares mínimas",
                  "de": "Minimale Fahrzeugoberflächen",
                  "nl": "Minimale voertuigoppervlakken"
        },
        {
                  "en": "Attack minimization strategies",
                  "es": "Estrategias de minimización de ataques",
                  "de": "Angriff-Minimierungsstrategien",
                  "nl": "Aanval minimalisatie strategieën"
        },
        {
                  "en": "Surface area of vehicle panels",
                  "es": "Área de superficie de paneles vehiculares",
                  "de": "Oberfläche von Fahrzeugpaneelen",
                  "nl": "Oppervlakte van voertuigpanelen"
        },
        {
                  "en": "Exposed interfaces, unnecessary services, and potential entry points that attackers could exploit to compromise vehicle systems",
                  "es": "Interfaces expuestas, servicios innecesarios y puntos de entrada potenciales que atacantes podrían explotar para comprometer sistemas vehiculares",
                  "de": "Exponierte Schnittstellen, unnötige Dienste und potentielle Einstiegspunkte die Angreifer ausnutzen könnten um Fahrzeugsysteme zu kompromittieren",
                  "nl": "Blootgestelde interfaces, onnodige diensten en potentiële toegangspunten die aanvallers zouden kunnen misbruiken om voertuigsystemen te compromitteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Reducing attack surface involves disabling unused communication ports, limiting network exposure, and implementing strict access controls to minimize ways attackers can infiltrate vehicle systems.",
                  "es": "Reducir superficie de ataque implica deshabilitar puertos de comunicación no usados, limitar exposición de red e implementar controles de acceso estrictos para minimizar formas en que atacantes pueden infiltrar sistemas vehiculares.",
                  "de": "Reduzierung der Angriffsfläche beinhaltet Deaktivierung ungenutzter Kommunikationsports, Begrenzung der Netzwerkexposition und Implementierung strenger Zugriffskontrollen um Wege zu minimieren wie Angreifer Fahrzeugsysteme infiltrieren können.",
                  "nl": "Het verminderen van attack surface omvat het uitschakelen van ongebruikte communicatiepoorten, het beperken van netwerkblootstelling en het implementeren van strikte toegangscontroles om manieren te minimaliseren waarop aanvallers voertuigsystemen kunnen infiltreren."
        }
      },
      {
        question: {
                  "en": "What is 'secure multi-party computation' enabling for privacy-preserving traffic optimization?",
                  "es": "¿Qué está permitiendo la 'computación multipartita segura' para optimización de tráfico que preserva privacidad?",
                  "de": "Was ermöglicht 'Secure Multi-Party Computation' für datenschutzfreundliche Verkehrsoptimierung?",
                  "nl": "Wat maakt 'secure multi-party computation' mogelijk voor privacy-behoudende verkeersoptimalisatie?"
        },
        options: [
        {
                  "en": "Multi-party vehicle ownership computation",
                  "es": "Computación de propiedad vehicular multipartita",
                  "de": "Multi-Party Fahrzeugbesitz-Berechnung",
                  "nl": "Multi-party voertuig eigendom berekening"
        },
        {
                  "en": "Multiple vehicles computing optimal traffic solutions collaboratively without revealing individual position or route data",
                  "es": "Múltiples vehículos computando soluciones óptimas de tráfico colaborativamente sin revelar datos individuales de posición o ruta",
                  "de": "Mehrere Fahrzeuge berechnen optimale Verkehrslösungen kollaborativ ohne individuelle Positions- oder Routendaten zu offenbaren",
                  "nl": "Meerdere voertuigen berekenen optimale verkeersoplossingen collaboratief zonder individuele positie- of routedata te onthullen"
        },
        {
                  "en": "Secure computation for multiple passengers",
                  "es": "Computación segura para múltiples pasajeros",
                  "de": "Sichere Berechnung für mehrere Passagiere",
                  "nl": "Veilige berekening voor meerdere passagiers"
        },
        {
                  "en": "Party planning computations",
                  "es": "Computaciones de planificación de fiestas",
                  "de": "Party-Planungsberechnungen",
                  "nl": "Feest planning berekeningen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Secure multi-party computation allows vehicles to jointly optimize routes and traffic flow while cryptographically ensuring no single party can learn others' private data, balancing efficiency with privacy.",
                  "es": "La computación multipartita segura permite a vehículos optimizar conjuntamente rutas y flujo de tráfico mientras asegura criptográficamente que ninguna parte puede aprender datos privados de otros, equilibrando eficiencia con privacidad.",
                  "de": "Secure Multi-Party Computation ermöglicht Fahrzeugen gemeinsam Routen und Verkehrsfluss zu optimieren während kryptographisch gewährleistet wird dass keine einzelne Partei private Daten anderer lernen kann, balanciert Effizienz mit Datenschutz.",
                  "nl": "Secure multi-party computation stelt voertuigen in staat gezamenlijk routes en verkeersstroom te optimaliseren terwijl cryptografisch wordt gewaarborgd dat geen enkele partij de privédata van anderen kan leren, balanceert efficiëntie met privacy."
        }
      },
      {
        question: {
                  "en": "What is 'safety cage architecture' providing in autonomous vehicle system design?",
                  "es": "¿Qué está proporcionando la 'arquitectura de jaula de seguridad' en diseño de sistemas de vehículos autónomos?",
                  "de": "Was bietet 'Safety Cage Architektur' im Design autonomer Fahrzeugsysteme?",
                  "nl": "Wat biedt 'safety cage architectuur' in ontwerp van autonome voertuigsystemen?"
        },
        options: [
        {
                  "en": "Caged safety equipment",
                  "es": "Equipo de seguridad enjaulado",
                  "de": "Eingesperrte Sicherheitsausrüstung",
                  "nl": "Kooiuitrusting voor veiligheid"
        },
        {
                  "en": "Physical cage around vehicle systems",
                  "es": "Jaula física alrededor de sistemas vehiculares",
                  "de": "Physischer Käfig um Fahrzeugsysteme",
                  "nl": "Fysieke kooi rondom voertuigsystemen"
        },
        {
                  "en": "Safety cage for passengers",
                  "es": "Jaula de seguridad para pasajeros",
                  "de": "Sicherheitskäfig für Passagiere",
                  "nl": "Veiligheidskooi voor passagiers"
        },
        {
                  "en": "Multiple independent safety layers that monitor and override AI decisions when dangerous behaviors are detected",
                  "es": "Múltiples capas de seguridad independientes que monitorean y anulan decisiones IA cuando comportamientos peligrosos son detectados",
                  "de": "Mehrere unabhängige Sicherheitsschichten die KI-Entscheidungen überwachen und überschreiben wenn gefährliche Verhaltensweisen erkannt werden",
                  "nl": "Meerdere onafhankelijke veiligheidslagen die AI-beslissingen monitoren en overschrijven wanneer gevaarlijke gedragingen worden gedetecteerd"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Safety cage architecture wraps AI systems in independent monitoring layers that can detect and prevent unsafe actions, ensuring the vehicle remains safe even if the primary AI malfunctions.",
                  "es": "La arquitectura de jaula de seguridad envuelve sistemas IA en capas de monitoreo independientes que pueden detectar y prevenir acciones inseguras, asegurando que el vehículo permanezca seguro incluso si la IA primaria funciona mal.",
                  "de": "Safety Cage Architektur umhüllt KI-Systeme mit unabhängigen Überwachungsschichten die unsichere Aktionen erkennen und verhindern können, gewährleistet dass das Fahrzeug sicher bleibt auch wenn die primäre KI versagt.",
                  "nl": "Safety cage architectuur omhult AI-systemen in onafhankelijke monitoringlagen die onveilige acties kunnen detecteren en voorkomen, waarbij wordt gewaarborgd dat het voertuig veilig blijft zelfs als de primaire AI defect raakt."
        }
      },
      {
        question: {
                  "en": "What is 'adversarial robustness certification' verifying for autonomous vehicle perception systems?",
                  "es": "¿Qué está verificando la 'certificación de robustez adversarial' para sistemas de percepción de vehículos autónomos?",
                  "de": "Was verifiziert 'adversariale Robustheitszertifizierung' für Wahrnehmungssysteme autonomer Fahrzeuge?",
                  "nl": "Wat verifieert 'adversarial robustness certification' voor perceptiesystemen van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Mathematically proven bounds on how resistant AI perception is to adversarial attacks and sensor manipulation",
                  "es": "Límites probados matemáticamente sobre qué tan resistente es percepción IA a ataques adversariales y manipulación de sensores",
                  "de": "Mathematisch bewiesene Grenzen wie resistent KI-Wahrnehmung gegen adversariale Angriffe und Sensormanipulation ist",
                  "nl": "Wiskundig bewezen grenzen aan hoe resistent AI-perceptie is tegen adversariële aanvallen en sensormanipulatie"
        },
        {
                  "en": "Certification of adversarial training only",
                  "es": "Certificación solo de entrenamiento adversarial",
                  "de": "Zertifizierung nur von adversarialem Training",
                  "nl": "Certificering alleen van adversarial training"
        },
        {
                  "en": "Certification documentation robustness",
                  "es": "Robustez de documentación de certificación",
                  "de": "Zertifizierungsdokumentations-Robustheit",
                  "nl": "Certificatie documentatie robuustheid"
        },
        {
                  "en": "Robustness of adversarial examples",
                  "es": "Robustez de ejemplos adversariales",
                  "de": "Robustheit adversarialer Beispiele",
                  "nl": "Robuustheid van adversarial voorbeelden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Certified adversarial robustness provides formal guarantees that perception systems will correctly classify objects even under bounded adversarial perturbations, ensuring reliable safety despite potential attacks.",
                  "es": "La robustez adversarial certificada proporciona garantías formales de que sistemas de percepción clasificarán correctamente objetos incluso bajo perturbaciones adversariales limitadas, asegurando seguridad confiable a pesar de ataques potenciales.",
                  "de": "Zertifizierte adversariale Robustheit bietet formale Garantien dass Wahrnehmungssysteme Objekte korrekt klassifizieren auch unter begrenzten adversarialen Störungen, gewährleistet zuverlässige Sicherheit trotz potentieller Angriffe.",
                  "nl": "Gecertificeerde adversarial robustness biedt formele garanties dat perceptiesystemen objecten correct zullen classificeren zelfs onder begrensde adversariële verstoringen, wat betrouwbare veiligheid waarborgt ondanks potentiële aanvallen."
        }
      },
      {
        question: {
                  "en": "What is 'security information and event management' (SIEM) providing for fleet cybersecurity?",
                  "es": "¿Qué está proporcionando la 'gestión de información y eventos de seguridad' (SIEM) para ciberseguridad de flotas?",
                  "de": "Was bietet 'Security Information and Event Management' (SIEM) für Flotten-Cybersicherheit?",
                  "nl": "Wat biedt 'security information and event management' (SIEM) voor vloot cybersecurity?"
        },
        options: [
        {
                  "en": "Centralized monitoring and correlation of security events across entire vehicle fleets to detect coordinated attacks and patterns",
                  "es": "Monitoreo centralizado y correlación de eventos de seguridad a través de flotas vehiculares enteras para detectar ataques coordinados y patrones",
                  "de": "Zentralisierte Überwachung und Korrelation von Sicherheitsereignissen über gesamte Fahrzeugflotten um koordinierte Angriffe und Muster zu erkennen",
                  "nl": "Gecentraliseerde monitoring en correlatie van beveiligingsgebeurtenissen over hele voertuigvloten om gecoördineerde aanvallen en patronen te detecteren"
        },
        {
                  "en": "Security information documentation",
                  "es": "Documentación de información de seguridad",
                  "de": "Sicherheitsinformations-Dokumentation",
                  "nl": "Beveiligingsinformatie documentatie"
        },
        {
                  "en": "Event management for vehicle maintenance",
                  "es": "Gestión de eventos para mantenimiento vehicular",
                  "de": "Ereignismanagement für Fahrzeugwartung",
                  "nl": "Gebeurtenisbeheer voor voertuigonderhoud"
        },
        {
                  "en": "SIEM for individual vehicle security only",
                  "es": "SIEM solo para seguridad de vehículo individual",
                  "de": "SIEM nur für individuelle Fahrzeugsicherheit",
                  "nl": "SIEM alleen voor individuele voertuigbeveiliging"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "SIEM aggregates security data from thousands of vehicles, using AI to identify widespread attack campaigns, zero-day exploits, and anomalous patterns that indicate emerging threats to the fleet.",
                  "es": "SIEM agrega datos de seguridad de miles de vehículos, usando IA para identificar campañas de ataque generalizadas, exploits de día cero y patrones anómalos que indican amenazas emergentes para la flota.",
                  "de": "SIEM aggregiert Sicherheitsdaten von Tausenden Fahrzeugen, nutzt KI um weitverbreitete Angriffskampagnen, Zero-Day-Exploits und anomale Muster zu identifizieren die auf entstehende Bedrohungen für die Flotte hinweisen.",
                  "nl": "SIEM aggregeert beveiligingsdata van duizenden voertuigen, gebruikt AI om wijdverbreide aanvalscampagnes, zero-day exploits en anomale patronen te identificeren die duiden op opkomende bedreigingen voor de vloot."
        }
      },
      {
        question: {
                  "en": "What is 'micro-segmentation' isolating in autonomous vehicle network architecture?",
                  "es": "¿Qué está aislando la 'micro-segmentación' en arquitectura de red de vehículos autónomos?",
                  "de": "Was isoliert 'Mikro-Segmentierung' in autonomer Fahrzeugnetzwerk-Architektur?",
                  "nl": "Wat isoleert 'micro-segmentatie' in autonome voertuignetwerkarchitectuur?"
        },
        options: [
        {
                  "en": "Individual vehicle subsystems into isolated network zones to contain breaches and prevent lateral movement of attackers",
                  "es": "Subsistemas vehiculares individuales en zonas de red aisladas para contener brechas y prevenir movimiento lateral de atacantes",
                  "de": "Individuelle Fahrzeugsubsysteme in isolierte Netzwerkzonen um Einbrüche zu begrenzen und laterale Bewegung von Angreifern zu verhindern",
                  "nl": "Individuele voertuigsubsystemen in geïsoleerde netwerksegmenten om inbraken te beperken en laterale beweging van aanvallers te voorkomen"
        },
        {
                  "en": "Micro-level network analysis",
                  "es": "Análisis de red a nivel micro",
                  "de": "Mikro-Level Netzwerkanalyse",
                  "nl": "Micro-niveau netwerkanalyse"
        },
        {
                  "en": "Segmentation of micro-controllers",
                  "es": "Segmentación de micro-controladores",
                  "de": "Segmentierung von Mikrocontrollern",
                  "nl": "Segmentatie van microcontrollers"
        },
        {
                  "en": "Micro-sized vehicle segments",
                  "es": "Segmentos vehiculares de tamaño micro",
                  "de": "Mikro-große Fahrzeugsegmente",
                  "nl": "Micro-formaat voertuigsegmenten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Micro-segmentation creates strict boundaries between vehicle systems like infotainment, telematics, and safety-critical controls, ensuring compromised entertainment systems cannot access steering or braking.",
                  "es": "La micro-segmentación crea límites estrictos entre sistemas vehiculares como infoentretenimiento, telemática y controles críticos de seguridad, asegurando que sistemas de entretenimiento comprometidos no puedan acceder a dirección o frenos.",
                  "de": "Mikro-Segmentierung erstellt strikte Grenzen zwischen Fahrzeugsystemen wie Infotainment, Telematik und sicherheitskritischen Kontrollen, gewährleistet dass kompromittierte Unterhaltungssysteme nicht auf Lenkung oder Bremsen zugreifen können.",
                  "nl": "Micro-segmentatie creëert strikte grenzen tussen voertuigsystemen zoals infotainment, telematica en veiligheidskritieke controles, waardoor gecompromitteerde entertainmentsystemen geen toegang hebben tot stuurinrichtingen of remmen."
        }
      },
      {
        question: {
                  "en": "What is 'zero-trust architecture' requiring in autonomous vehicle system access?",
                  "es": "¿Qué está requiriendo la 'arquitectura de confianza cero' en acceso a sistemas de vehículos autónomos?",
                  "de": "Was erfordert 'Zero-Trust Architektur' beim Zugriff auf autonome Fahrzeugsysteme?",
                  "nl": "Wat vereist 'zero-trust architectuur' in autonome voertuigsysteem toegang?"
        },
        options: [
        {
                  "en": "Zero trust in vehicle users",
                  "es": "Cero confianza en usuarios vehiculares",
                  "de": "Null Vertrauen in Fahrzeugnutzer",
                  "nl": "Nul vertrouwen in voertuiggebruikers"
        },
        {
                  "en": "Continuous authentication and authorization for every access request regardless of source, never assuming trust",
                  "es": "Autenticación y autorización continuas para cada solicitud de acceso sin importar fuente, nunca asumiendo confianza",
                  "de": "Kontinuierliche Authentifizierung und Autorisierung für jede Zugriffsanforderung unabhängig von Quelle, niemals Vertrauen annehmen",
                  "nl": "Continue authenticatie en autorisatie voor elke toegangsaanvraag ongeacht bron, nooit vertrouwen aannemen"
        },
        {
                  "en": "Trust architecture with zero components",
                  "es": "Arquitectura de confianza con cero componentes",
                  "de": "Vertrauensarchitektur mit null Komponenten",
                  "nl": "Vertrouwensarchitectuur met nul componenten"
        },
        {
                  "en": "Zero-level trust for all systems",
                  "es": "Confianza de nivel cero para todos los sistemas",
                  "de": "Null-Level Vertrauen für alle Systeme",
                  "nl": "Nul-niveau vertrouwen voor alle systemen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Zero-trust principles ensure that even internal vehicle components must continuously prove their identity and authorization, preventing compromised subsystems from accessing critical functions.",
                  "es": "Los principios de confianza cero aseguran que incluso componentes vehiculares internos deben probar continuamente su identidad y autorización, previniendo que subsistemas comprometidos accedan a funciones críticas.",
                  "de": "Zero-Trust-Prinzipien gewährleisten dass auch interne Fahrzeugkomponenten kontinuierlich ihre Identität und Autorisierung beweisen müssen, verhindert dass kompromittierte Subsysteme auf kritische Funktionen zugreifen.",
                  "nl": "Zero-trust principes zorgen ervoor dat zelfs interne voertuigcomponenten continu hun identiteit en autorisatie moeten bewijzen, waardoor gecompromitteerde subsystemen geen toegang krijgen tot kritieke functies."
        }
      },
      {
        question: {
                  "en": "What is 'AI red teaming' discovering in autonomous vehicle security testing?",
                  "es": "¿Qué está descubriendo el 'equipo rojo IA' en pruebas de seguridad de vehículos autónomos?",
                  "de": "Was entdeckt 'KI Red Teaming' in Sicherheitstests autonomer Fahrzeuge?",
                  "nl": "Wat ontdekt 'AI red teaming' in beveiligingstesten van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Red team vehicle colors",
                  "es": "Colores de equipo rojo vehicular",
                  "de": "Rote Team-Fahrzeugfarben",
                  "nl": "Rode team voertuigkleuren"
        },
        {
                  "en": "AI teams wearing red",
                  "es": "Equipos IA vistiendo rojo",
                  "de": "KI-Teams in Rot gekleidet",
                  "nl": "AI-teams gekleed in rood"
        },
        {
                  "en": "Novel attack vectors and AI vulnerabilities through adversarial AI systems trained to find weaknesses and exploit edge cases",
                  "es": "Vectores de ataque novedosos y vulnerabilidades IA a través de sistemas IA adversariales entrenados para encontrar debilidades y explotar casos límite",
                  "de": "Neuartige Angriffsvektoren und KI-Schwachstellen durch adversariale KI-Systeme trainiert um Schwächen zu finden und Grenzfälle auszunutzen",
                  "nl": "Nieuwe aanvalsvectoren en AI-kwetsbaarheden door adversariële AI-systemen getraind om zwakke punten te vinden en randgevallen te exploiteren"
        },
        {
                  "en": "Red alert AI systems",
                  "es": "Sistemas IA de alerta roja",
                  "de": "Rotalarm-KI-Systeme",
                  "nl": "Rode alarm AI-systemen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI red teams use automated adversarial systems to continuously probe autonomous vehicles for undiscovered vulnerabilities, simulating sophisticated attackers faster and more comprehensively than human testers alone.",
                  "es": "Los equipos rojos IA usan sistemas adversariales automatizados para sondear continuamente vehículos autónomos buscando vulnerabilidades no descubiertas, simulando atacantes sofisticados más rápido y más exhaustivamente que testers humanos solos.",
                  "de": "KI Red Teams nutzen automatisierte adversariale Systeme um autonome Fahrzeuge kontinuierlich auf unentdeckte Schwachstellen zu untersuchen, simulieren anspruchsvolle Angreifer schneller und umfassender als menschliche Tester allein.",
                  "nl": "AI red teams gebruiken geautomatiseerde adversariële systemen om autonome voertuigen continu te onderzoeken op ontdekte kwetsbaarheden, simuleren geavanceerde aanvallers sneller en uitgebreider dan menselijke testers alleen."
        }
      },
      {
        question: {
                  "en": "What is 'supply chain security verification' protecting against in autonomous vehicle manufacturing?",
                  "es": "¿Contra qué está protegiendo la 'verificación de seguridad de cadena de suministro' en fabricación de vehículos autónomos?",
                  "de": "Wogegen schützt 'Supply Chain Security Verification' in der Herstellung autonomer Fahrzeuge?",
                  "nl": "Waartegen beschermt 'supply chain security verification' in productie van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Verification of supply quantities",
                  "es": "Verificación de cantidades de suministro",
                  "de": "Verifikation von Liefermengen",
                  "nl": "Verificatie van leveringshoeveelheden"
        },
        {
                  "en": "Supply chain logistics verification",
                  "es": "Verificación de logística de cadena de suministro",
                  "de": "Lieferketten-Logistik-Verifikation",
                  "nl": "Supply chain logistiek verificatie"
        },
        {
                  "en": "Chain security for vehicle parts",
                  "es": "Seguridad de cadena para partes vehiculares",
                  "de": "Kettensicherheit für Fahrzeugteile",
                  "nl": "Ketting beveiliging voor voertuigonderdelen"
        },
        {
                  "en": "Malicious hardware and software components inserted during manufacturing or delivery by compromised suppliers",
                  "es": "Componentes maliciosos de hardware y software insertados durante fabricación o entrega por proveedores comprometidos",
                  "de": "Bösartige Hardware- und Software-Komponenten eingefügt während Herstellung oder Lieferung durch kompromittierte Lieferanten",
                  "nl": "Kwaadaardige hardware- en softwarecomponenten ingevoegd tijdens productie of levering door gecompromitteerde leveranciers"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Supply chain verification uses cryptographic attestation, secure boot chains, and component authentication to ensure no malicious hardware backdoors or compromised software enters vehicles during manufacturing.",
                  "es": "La verificación de cadena de suministro usa atestación criptográfica, cadenas de arranque seguro y autenticación de componentes para asegurar que no entren puertas traseras de hardware maliciosas o software comprometido a vehículos durante fabricación.",
                  "de": "Supply Chain Verification nutzt kryptographische Attestierung, Secure-Boot-Ketten und Komponenten-Authentifizierung um zu gewährleisten dass keine bösartigen Hardware-Backdoors oder kompromittierte Software während der Herstellung in Fahrzeuge gelangen.",
                  "nl": "Supply chain verification gebruikt cryptografische attestatie, secure boot chains en component authenticatie om te zorgen dat geen kwaadaardige hardware backdoors of gecompromitteerde software tijdens productie in voertuigen terechtkomen."
        }
      },
      {
        question: {
                  "en": "What is 'side-channel attack mitigation' protecting in autonomous vehicle processors?",
                  "es": "¿Qué está protegiendo la 'mitigación de ataques de canal lateral' en procesadores de vehículos autónomos?",
                  "de": "Was schützt 'Side-Channel-Angriffs-Mitigation' in Prozessoren autonomer Fahrzeuge?",
                  "nl": "Wat beschermt 'side-channel attack mitigation' in processors van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Channel switching attacks",
                  "es": "Ataques de cambio de canal",
                  "de": "Kanalwechsel-Angriffe",
                  "nl": "Kanaal wissel aanvallen"
        },
        {
                  "en": "Side mirror attack detection",
                  "es": "Detección de ataques de espejo lateral",
                  "de": "Seitenspiegel-Angriffserkennung",
                  "nl": "Zijspiegel aanval detectie"
        },
        {
                  "en": "Side doors attack protection",
                  "es": "Protección de ataque de puertas laterales",
                  "de": "Seitentür-Angriffsschutz",
                  "nl": "Zijdeur aanval bescherming"
        },
        {
                  "en": "Cryptographic keys and sensitive data from being extracted by analyzing power consumption, electromagnetic emissions, or timing variations",
                  "es": "Claves criptográficas y datos sensibles de ser extraídos analizando consumo de energía, emisiones electromagnéticas o variaciones de tiempo",
                  "de": "Kryptographische Schlüssel und sensible Daten davor extrahiert zu werden durch Analyse von Stromverbrauch, elektromagnetischen Emissionen oder Zeitvariationen",
                  "nl": "Cryptografische sleutels en gevoelige data tegen extractie door analyse van stroomverbruik, elektromagnetische emissies of timing variaties"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Side-channel mitigations use constant-time algorithms, power analysis countermeasures, and shielding to prevent attackers from extracting cryptographic secrets by observing physical characteristics of computation.",
                  "es": "Las mitigaciones de canal lateral usan algoritmos de tiempo constante, contramedidas de análisis de energía y blindaje para prevenir que atacantes extraigan secretos criptográficos observando características físicas de computación.",
                  "de": "Side-Channel-Mitigationen nutzen Constant-Time-Algorithmen, Stromanalyse-Gegenmaßnahmen und Abschirmung um zu verhindern dass Angreifer kryptographische Geheimnisse durch Beobachtung physischer Berechnungsmerkmale extrahieren.",
                  "nl": "Side-channel mitigaties gebruiken constant-time algoritmes, stroom analyse tegenmaatregelen en afscherming om te voorkomen dat aanvallers cryptografische geheimen extraheren door fysieke kenmerken van berekeningen te observeren."
        }
      },
      {
        question: {
                  "en": "What is 'behavioral biometrics' adding to autonomous vehicle user authentication?",
                  "es": "¿Qué está añadiendo la 'biometría de comportamiento' a autenticación de usuarios de vehículos autónomos?",
                  "de": "Was fügt 'verhaltensbiometrische Erkennung' zur Nutzerauthentifizierung autonomer Fahrzeuge hinzu?",
                  "nl": "Wat voegt 'gedragsbiometrie' toe aan gebruikersauthenticatie van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Continuous authentication based on unique driving patterns, interaction styles, and usage behaviors to detect unauthorized users",
                  "es": "Autenticación continua basada en patrones únicos de conducción, estilos de interacción y comportamientos de uso para detectar usuarios no autorizados",
                  "de": "Kontinuierliche Authentifizierung basierend auf einzigartigen Fahrmustern, Interaktionsstilen und Nutzungsverhalten um unbefugte Nutzer zu erkennen",
                  "nl": "Continue authenticatie gebaseerd op unieke rijpatronen, interactiestijlen en gebruiksgedrag om ongeautoriseerde gebruikers te detecteren"
        },
        {
                  "en": "Biometric behavior documentation",
                  "es": "Documentación de comportamiento biométrico",
                  "de": "Biometrische Verhaltensdokumentation",
                  "nl": "Biometrisch gedrag documentatie"
        },
        {
                  "en": "Behavioral training for biometrics",
                  "es": "Entrenamiento de comportamiento para biométrica",
                  "de": "Verhaltenstraining für Biometrie",
                  "nl": "Gedragstraining voor biometrie"
        },
        {
                  "en": "Biometric behavioral analysis only",
                  "es": "Solo análisis biométrico de comportamiento",
                  "de": "Nur biometrische Verhaltensanalyse",
                  "nl": "Alleen biometrische gedragsanalyse"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Behavioral biometrics analyze subtle patterns like seat adjustment sequences, climate control preferences, and driving styles to verify authorized users continuously without requiring explicit authentication steps.",
                  "es": "La biometría de comportamiento analiza patrones sutiles como secuencias de ajuste de asiento, preferencias de control de clima y estilos de conducción para verificar usuarios autorizados continuamente sin requerir pasos explícitos de autenticación.",
                  "de": "Verhaltensbiometrische Erkennung analysiert subtile Muster wie Sitzeinstellungssequenzen, Klimasteuerungspräferenzen und Fahrstile um autorisierte Nutzer kontinuierlich zu verifizieren ohne explizite Authentifizierungsschritte zu erfordern.",
                  "nl": "Gedragsbiometrie analyseert subtiele patronen zoals stoelverstelling sequenties, klimaatregelingsvoorkeuren en rijstijlen om geautoriseerde gebruikers continu te verifiëren zonder expliciete authenticatiestappen te vereisen."
        }
      },
      {
        question: {
                  "en": "What is 'code signing with hardware roots of trust' ensuring for autonomous vehicle software?",
                  "es": "¿Qué está asegurando la 'firma de código con raíces de confianza de hardware' para software de vehículos autónomos?",
                  "de": "Was gewährleistet 'Code-Signierung mit Hardware-Vertrauensankern' für autonome Fahrzeugsoftware?",
                  "nl": "Wat waarborgt 'code signing met hardware roots of trust' voor autonome voertuigsoftware?"
        },
        options: [
        {
                  "en": "Only software signed by authorized developers with keys stored in tamper-proof hardware can execute on vehicle systems",
                  "es": "Solo software firmado por desarrolladores autorizados con claves almacenadas en hardware a prueba de manipulación puede ejecutarse en sistemas vehiculares",
                  "de": "Nur Software signiert von autorisierten Entwicklern mit in manipulationssicherer Hardware gespeicherten Schlüsseln kann auf Fahrzeugsystemen ausgeführt werden",
                  "nl": "Alleen software ondertekend door geautoriseerde ontwikkelaars met sleutels opgeslagen in manipulatiebestendige hardware kan draaien op voertuigsystemen"
        },
        {
                  "en": "Code signing documentation",
                  "es": "Documentación de firma de código",
                  "de": "Code-Signierung-Dokumentation",
                  "nl": "Code signing documentatie"
        },
        {
                  "en": "Signing hardware components",
                  "es": "Firmar componentes de hardware",
                  "de": "Hardware-Komponenten signieren",
                  "nl": "Hardware componenten ondertekenen"
        },
        {
                  "en": "Hardware code verification only",
                  "es": "Solo verificación de código de hardware",
                  "de": "Nur Hardware-Code-Verifikation",
                  "nl": "Alleen hardware code verificatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Hardware-backed code signing creates an unbreakable chain from silicon to software, preventing malware installation by cryptographically verifying every executable against hardware-protected signing keys.",
                  "es": "La firma de código respaldada por hardware crea una cadena inquebrantable desde silicio a software, previniendo instalación de malware verificando criptográficamente cada ejecutable contra claves de firma protegidas por hardware.",
                  "de": "Hardware-gestützte Code-Signierung erstellt eine unzerbrechliche Kette von Silizium zu Software, verhindert Malware-Installation durch kryptographische Verifikation jedes Executables gegen hardware-geschützte Signierungsschlüssel.",
                  "nl": "Hardware-ondersteunde code signing creëert een onbreekbare keten van silicium naar software, voorkomt malware installatie door elke executable cryptografisch te verifiëren tegen hardware-beschermde ondertekeningssleutels."
        }
      },
      {
        question: {
                  "en": "What is 'quantum key distribution' preparing for in long-term autonomous vehicle communication security?",
                  "es": "¿Para qué está preparando la 'distribución de claves cuánticas' en seguridad de comunicación a largo plazo de vehículos autónomos?",
                  "de": "Wofür bereitet 'Quantenschlüsselverteilung' die langfristige Kommunikationssicherheit autonomer Fahrzeuge vor?",
                  "nl": "Waarvoor bereidt 'quantum key distribution' voor in langetermijn communicatiebeveiliging van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Quantum particle key generation",
                  "es": "Generación de claves de partículas cuánticas",
                  "de": "Quantenteilchen-Schlüsselgenerierung",
                  "nl": "Quantum deeltjes sleutel generatie"
        },
        {
                  "en": "Distribution of quantum computing keys",
                  "es": "Distribución de claves de computación cuántica",
                  "de": "Verteilung von Quantencomputer-Schlüsseln",
                  "nl": "Distributie van quantum computing sleutels"
        },
        {
                  "en": "Provably secure communication channels using quantum physics principles that detect any interception attempts",
                  "es": "Canales de comunicación demostrablemente seguros usando principios de física cuántica que detectan cualquier intento de intercepción",
                  "de": "Nachweislich sichere Kommunikationskanäle unter Verwendung quantenphysikalischer Prinzipien die jeden Abhörversuch erkennen",
                  "nl": "Aantoonbaar veilige communicatiekanalen die quantumfysica principes gebruiken om elke onderscheppingspoging te detecteren"
        },
        {
                  "en": "Key distribution for quantum vehicles",
                  "es": "Distribución de claves para vehículos cuánticos",
                  "de": "Schlüsselverteilung für Quanten-Fahrzeuge",
                  "nl": "Sleutel distributie voor quantum voertuigen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Quantum key distribution uses quantum entanglement and superposition to create encryption keys that are physically impossible to intercept without detection, providing ultimate security for critical vehicle communications.",
                  "es": "La distribución de claves cuánticas usa entrelazamiento cuántico y superposición para crear claves de encriptación físicamente imposibles de interceptar sin detección, proporcionando seguridad definitiva para comunicaciones críticas vehiculares.",
                  "de": "Quantenschlüsselverteilung nutzt Quantenverschränkung und Superposition um Verschlüsselungsschlüssel zu erstellen die physikalisch unmöglich ohne Detektion abgefangen werden können, bietet ultimative Sicherheit für kritische Fahrzeugkommunikation.",
                  "nl": "Quantum key distribution gebruikt quantum verstrengeling en superpositie om versleutelingssleutels te creëren die fysiek onmogelijk zonder detectie onderschept kunnen worden, biedt ultieme beveiliging voor kritieke voertuigcommunicaties."
        }
      },
      {
        question: {
                  "en": "What is 'security orchestration, automation, and response' (SOAR) enabling for autonomous fleet protection?",
                  "es": "¿Qué está permitiendo la 'orquestación, automatización y respuesta de seguridad' (SOAR) para protección de flotas autónomas?",
                  "de": "Was ermöglicht 'Security Orchestration, Automation, and Response' (SOAR) für autonomen Flottenschutz?",
                  "nl": "Wat maakt 'security orchestration, automation, and response' (SOAR) mogelijk voor autonome vlootbescherming?"
        },
        options: [
        {
                  "en": "SOAR for vehicle orchestration only",
                  "es": "SOAR solo para orquestación vehicular",
                  "de": "SOAR nur für Fahrzeug-Orchestrierung",
                  "nl": "SOAR alleen voor voertuig orchestratie"
        },
        {
                  "en": "Automated coordinated response to security incidents across entire fleets with AI-driven threat remediation and containment",
                  "es": "Respuesta coordinada automatizada a incidentes de seguridad a través de flotas enteras con remediación y contención de amenazas impulsada por IA",
                  "de": "Automatisierte koordinierte Reaktion auf Sicherheitsvorfälle über gesamte Flotten mit KI-gesteuerte Bedrohungsbehebung und -eindämmung",
                  "nl": "Geautomatiseerde gecoördineerde reactie op beveiligingsincidenten over hele vloten met AI-gedreven dreiging herstel en insluiting"
        },
        {
                  "en": "Security automation documentation",
                  "es": "Documentación de automatización de seguridad",
                  "de": "Sicherheitsautomatisierungs-Dokumentation",
                  "nl": "Beveiligingsautomatisering documentatie"
        },
        {
                  "en": "Orchestrated security training",
                  "es": "Entrenamiento de seguridad orquestado",
                  "de": "Orchestriertes Sicherheitstraining",
                  "nl": "Georchestreerde beveiligingstraining"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "SOAR platforms automatically detect, analyze, and respond to security threats across thousands of vehicles simultaneously, isolating compromised vehicles, deploying patches, and coordinating defensive measures at fleet scale.",
                  "es": "Las plataformas SOAR detectan, analizan y responden automáticamente a amenazas de seguridad a través de miles de vehículos simultáneamente, aislando vehículos comprometidos, desplegando parches y coordinando medidas defensivas a escala de flota.",
                  "de": "SOAR-Plattformen erkennen, analysieren und reagieren automatisch auf Sicherheitsbedrohungen über Tausende Fahrzeuge gleichzeitig, isolieren kompromittierte Fahrzeuge, setzen Patches ein und koordinieren Verteidigungsmaßnahmen im Flottenmaßstab.",
                  "nl": "SOAR platforms detecteren, analyseren en reageren automatisch op beveiligingsdreigingen over duizenden voertuigen tegelijkertijd, isoleren gecompromitteerde voertuigen, implementeren patches en coördineren verdedigingsmaatregelen op vlootschaal."
        }
      },
      {
        question: {
                  "en": "What is 'threat intelligence sharing' providing across autonomous vehicle manufacturers and operators?",
                  "es": "¿Qué está proporcionando el 'intercambio de inteligencia de amenazas' a través de fabricantes y operadores de vehículos autónomos?",
                  "de": "Was bietet 'Threat Intelligence Sharing' über autonome Fahrzeughersteller und Betreiber hinweg?",
                  "nl": "Wat biedt 'threat intelligence sharing' over autonome voertuigfabrikanten en exploitanten?"
        },
        options: [
        {
                  "en": "Threat analysis sharing meetings",
                  "es": "Reuniones de intercambio de análisis de amenazas",
                  "de": "Bedrohungsanalyse-Austauschmeetings",
                  "nl": "Dreiging analyse deel vergaderingen"
        },
        {
                  "en": "Intelligence gathering for threats",
                  "es": "Recopilación de inteligencia para amenazas",
                  "de": "Intelligenzsammlung für Bedrohungen",
                  "nl": "Intelligence verzameling voor dreigingen"
        },
        {
                  "en": "Collaborative real-time sharing of attack patterns, vulnerabilities, and defensive strategies to protect the entire autonomous vehicle ecosystem",
                  "es": "Intercambio colaborativo en tiempo real de patrones de ataque, vulnerabilidades y estrategias defensivas para proteger todo el ecosistema de vehículos autónomos",
                  "de": "Kollaboratives Echtzeit-Teilen von Angriffsmustern, Schwachstellen und Verteidigungsstrategien um das gesamte autonome Fahrzeug-Ökosystem zu schützen",
                  "nl": "Collaboratief realtime delen van aanvalspatronen, kwetsbaarheden en defensieve strategieën om het hele autonome voertuigecosysteem te beschermen"
        },
        {
                  "en": "Sharing threat documentation only",
                  "es": "Compartir solo documentación de amenazas",
                  "de": "Nur Bedrohungsdokumentation teilen",
                  "nl": "Alleen dreiging documentatie delen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Industry-wide threat intelligence sharing enables rapid dissemination of zero-day vulnerabilities, emerging attack techniques, and effective countermeasures, creating collective defense stronger than any single manufacturer could achieve.",
                  "es": "El intercambio de inteligencia de amenazas a nivel industrial permite difusión rápida de vulnerabilidades de día cero, técnicas de ataque emergentes y contramedidas efectivas, creando defensa colectiva más fuerte que cualquier fabricante único podría lograr.",
                  "de": "Branchenweites Threat Intelligence Sharing ermöglicht schnelle Verbreitung von Zero-Day-Schwachstellen, entstehenden Angriffstechniken und effektiven Gegenmaßnahmen, schafft kollektive Verteidigung stärker als jeder einzelne Hersteller erreichen könnte.",
                  "nl": "Industrie-breed threat intelligence sharing maakt snelle verspreiding mogelijk van zero-day kwetsbaarheden, opkomende aanvalstechnieken en effectieve tegenmaatregelen, creëert collectieve verdediging sterker dan elke individuele fabrikant zou kunnen bereiken."
        }
      },
      {
        question: {
                  "en": "What is adversarial training improving in autonomous vehicle robustness?",
                  "es": "¿Qué está mejorando el entrenamiento adversarial en robustez de vehículos autónomos?",
                  "de": "Was verbessert adversariales Training in autonomer Fahrzeugrobustheit?",
                  "nl": "Wat verbetert adversariële training in autonome voertuig robuustheid?"
        },
        options: [
        {
                  "en": "Training with competitive AI systems",
                  "es": "Entrenar con sistemas de IA competitivos",
                  "de": "Training mit konkurrierenden KI-Systemen",
                  "nl": "Trainen met concurrerende AI systemen"
        },
        {
                  "en": "Training models on intentionally perturbed inputs to resist malicious attacks and edge cases",
                  "es": "Entrenar modelos en entradas intencionalmente perturbadas para resistir ataques maliciosos y casos extremos",
                  "de": "Modelle auf absichtlich gestörten Eingaben trainieren um böswilligen Angriffen und Randfällen zu widerstehen",
                  "nl": "Modellen trainen op opzettelijk verstoorde inputs om kwaadaardige aanvallen en randgevallen te weerstaan"
        },
        {
                  "en": "Training against adversaries only",
                  "es": "Entrenar solo contra adversarios",
                  "de": "Nur gegen Gegner trainieren",
                  "nl": "Alleen trainen tegen tegenstanders"
        },
        {
                  "en": "Adversarial driving competitions",
                  "es": "Competiciones de conducción adversarial",
                  "de": "Adversariale Fahrwettbewerbe",
                  "nl": "Adversariële rij competities"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Adversarial training exposes models to carefully crafted malicious inputs during training, teaching them to recognize and resist attacks like adversarial patches on stop signs or spoofed sensor data, significantly improving robustness against real-world threats.",
                  "es": "El entrenamiento adversarial expone modelos a entradas maliciosas cuidadosamente elaboradas durante entrenamiento, enseñándoles a reconocer y resistir ataques como parches adversariales en señales de alto o datos de sensores falsificados, mejorando significativamente robustez contra amenazas del mundo real.",
                  "de": "Adversariales Training setzt Modelle während des Trainings sorgfältig gestalteten böswilligen Eingaben aus, lehrt sie Angriffe wie adversariale Patches auf Stoppschildern oder gefälschte Sensordaten zu erkennen und zu widerstehen, verbessert signifikant Robustheit gegen reale Bedrohungen.",
                  "nl": "Adversariële training stelt modellen bloot aan zorgvuldig ontworpen kwaadaardige inputs tijdens training, leert ze aanvallen te herkennen en te weerstaan zoals adversariële patches op stopborden of vervalste sensordata, verbetert aanzienlijk robuustheid tegen echte dreigingen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
})();