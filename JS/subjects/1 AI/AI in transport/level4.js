// AI in Transport Quiz - Level 4: Expert Transportation AI Systems
(function() {
  const level4 = {
    name: {
      en: "AI in Transport Level 4",
      es: "IA en Transporte Nivel 4",
      de: "KI im Transport Stufe 4",
      nl: "AI in Transport Level 4"
    },
    questions: [
      {
        question: {
          en: "What is 'deep learning' used for in autonomous vehicle perception?",
          es: "¿Para qué se usa el 'aprendizaje profundo' en percepción de vehículos autónomos?",
          de: "Wofür wird 'Deep Learning' in der Wahrnehmung autonomer Fahrzeuge verwendet?",
          nl: "Waarvoor wordt 'deep learning' gebruikt in de perceptie van autonome voertuigen?"
        },
        options: [
          { en: "Training neural networks to recognize complex patterns in sensor data like objects, pedestrians, and road conditions", es: "Entrenar redes neuronales para reconocer patrones complejos en datos de sensores como objetos, peatones y condiciones de carretera", de: "Neuronale Netzwerke trainieren um komplexe Muster in Sensordaten wie Objekte, Fußgänger und Straßenverhältnisse zu erkennen", nl: "Neurale netwerken trainen om complexe patronen in sensordata te herkennen zoals objecten, voetgangers en wegomstandigheden" },
          { en: "Deep cleaning of vehicle sensors", es: "Limpieza profunda de sensores de vehículo", de: "Tiefenreinigung von Fahrzeugsensoren", nl: "Diepe reiniging van voertuigsensoren" },
          { en: "Deep storage of transportation data", es: "Almacenamiento profundo de datos de transporte", de: "Tiefe Speicherung von Transportdaten", nl: "Diepe opslag van transportdata" },
          { en: "Deep analysis of fuel consumption", es: "Análisis profundo de consumo de combustible", de: "Tiefe Analyse des Kraftstoffverbrauchs", nl: "Diepe analyse van brandstofverbruik" }
        ],
        correct: 0,
        explanation: {
          en: "Deep learning enables vehicles to understand complex visual scenes, identify objects in various weather conditions, and make split-second driving decisions.",
          es: "El aprendizaje profundo permite a vehículos entender escenas visuales complejas, identificar objetos en varias condiciones climáticas y tomar decisiones de conducción en fracciones de segundo.",
          de: "Deep Learning ermöglicht Fahrzeugen komplexe visuelle Szenen zu verstehen, Objekte unter verschiedenen Wetterbedingungen zu identifizieren und Sekundenbruchteile-Fahrentscheidungen zu treffen.",
          nl: "Deep learning stelt voertuigen in staat complexe visuele scènes te begrijpen, objecten te identificeren onder verschillende weersomstandigheden en split-second rijbeslissingen te nemen."
        }
      },
      {
        question: {
          en: "What is 'SLAM' (Simultaneous Localization and Mapping) in autonomous navigation?",
          es: "¿Qué es 'SLAM' (Localización y Mapeo Simultáneos) en navegación autónoma?",
          de: "Was ist 'SLAM' (Simultane Lokalisierung und Kartierung) in autonomer Navigation?",
          nl: "Wat is 'SLAM' (Simultaneous Localization and Mapping) in autonome navigatie?"
        },
        options: [
          { en: "AI technique for building maps of unknown environments while tracking the vehicle's location within that map", es: "Técnica IA para construir mapas de entornos desconocidos mientras rastrea la ubicación del vehículo dentro de ese mapa", de: "KI-Technik zum Erstellen von Karten unbekannter Umgebungen während der Verfolgung der Fahrzeugposition innerhalb dieser Karte", nl: "AI-techniek voor het bouwen van kaarten van onbekende omgevingen terwijl de locatie van het voertuig binnen die kaart wordt gevolgd" },
          { en: "Sudden stopping mechanism in vehicles", es: "Mecanismo de parada súbita en vehículos", de: "Plötzlicher Stoppmechanismus in Fahrzeugen", nl: "Plotseling stopmechanisme in voertuigen" },
          { en: "Speed limitation and monitoring", es: "Limitación y monitoreo de velocidad", de: "Geschwindigkeitsbegrenzung und -überwachung", nl: "Snelheidsbeperking en -monitoring" },
          { en: "Safety lock and alarm mechanism", es: "Mecanismo de bloqueo y alarma de seguridad", de: "Sicherheitsschloss und Alarmmechanismus", nl: "Veiligheidsslot en alarmmechanisme" }
        ],
        correct: 0,
        explanation: {
          en: "SLAM allows vehicles to navigate in GPS-denied environments like tunnels or parking garages by creating real-time maps using sensor data.",
          es: "SLAM permite a vehículos navegar en entornos sin GPS como túneles o garajes de estacionamiento creando mapas en tiempo real usando datos de sensores.",
          de: "SLAM ermöglicht Fahrzeugen in GPS-verweigerten Umgebungen wie Tunnels oder Parkhäusern zu navigieren indem Echtzeitkarten mit Sensordaten erstellt werden.",
          nl: "SLAM stelt voertuigen in staat te navigeren in GPS-ontzeggde omgevingen zoals tunnels of parkeergarages door realtime kaarten te maken met sensordata."
        }
      },
      {
        question: {
          en: "What is 'reinforcement learning' achieving in autonomous driving?",
          es: "¿Qué está logrando el 'aprendizaje por refuerzo' en conducción autónoma?",
          de: "Was erreicht 'Verstärkungslernen' beim autonomen Fahren?",
          nl: "Wat bereikt 'reinforcement learning' in autonoom rijden?"
        },
        options: [
          { en: "Training AI agents to make optimal driving decisions through trial-and-error learning in simulated environments", es: "Entrenar agentes IA para tomar decisiones óptimas de conducción a través de aprendizaje de ensayo y error en entornos simulados", de: "KI-Agenten trainieren um optimale Fahrentscheidungen durch Trial-and-Error-Lernen in simulierten Umgebungen zu treffen", nl: "AI-agenten trainen om optimale rijbeslissingen te nemen door trial-and-error leren in gesimuleerde omgevingen" },
          { en: "Reinforcing vehicle chassis structure", es: "Reforzar estructura del chasis del vehículo", de: "Fahrzeugchassis-Struktur verstärken", nl: "Voertuigchassis structuur versterken" },
          { en: "Learning traffic rules by repetition", es: "Aprender reglas de tráfico por repetición", de: "Verkehrsregeln durch Wiederholung lernen", nl: "Verkeersregels leren door herhaling" },
          { en: "Reinforcing safety equipment", es: "Reforzar equipo de seguridad", de: "Sicherheitsausrüstung verstärken", nl: "Veiligheidsuitrusting versterken" }
        ],
        correct: 0,
        explanation: {
          en: "Reinforcement learning allows AI to discover complex driving strategies by receiving rewards for safe, efficient driving behaviors in millions of simulated scenarios.",
          es: "El aprendizaje por refuerzo permite a la IA descubrir estrategias complejas de conducción recibiendo recompensas por comportamientos de conducción seguros y eficientes en millones de escenarios simulados.",
          de: "Verstärkungslernen ermöglicht KI komplexe Fahrstrategien zu entdecken indem sie Belohnungen für sicheres, effizientes Fahrverhalten in Millionen simulierter Szenarien erhält.",
          nl: "Reinforcement learning stelt AI in staat complexe rijstrategieën te ontdekken door beloningen te ontvangen voor veilig, efficiënt rijgedrag in miljoenen gesimuleerde scenario's."
        }
      },
      {
        question: {
          en: "What is 'predictive analytics' used for in smart transportation systems?",
          es: "¿Para qué se usa el 'análisis predictivo' en sistemas de transporte inteligente?",
          de: "Wofür wird 'Predictive Analytics' in intelligenten Transportsystemen verwendet?",
          nl: "Waarvoor wordt 'predictive analytics' gebruikt in slimme transportsystemen?"
        },
        options: [
          { en: "Forecasting traffic patterns, demand fluctuations, and potential system failures before they occur", es: "Pronosticar patrones de tráfico, fluctuaciones de demanda y posibles fallas del sistema antes de que ocurran", de: "Verkehrsmuster, Nachfrageschwankungen und potenzielle Systemausfälle vorhersagen bevor sie auftreten", nl: "Verkeerspatronen, vraagfluctuaties en potentiële systeemdefecten voorspellen voordat ze optreden" },
          { en: "Predicting weather conditions only", es: "Predecir solo condiciones climáticas", de: "Nur Wetterbedingungen vorhersagen", nl: "Alleen weersomstandigheden voorspellen" },
          { en: "Analyzing past transportation data", es: "Analizar datos de transporte pasados", de: "Vergangene Transportdaten analysieren", nl: "Verleden transportdata analyseren" },
          { en: "Predicting fuel prices", es: "Predecir precios de combustible", de: "Kraftstoffpreise vorhersagen", nl: "Brandstofprijzen voorspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Predictive analytics helps transportation systems proactively adjust capacity, reroute traffic, and schedule maintenance to prevent disruptions.",
          es: "El análisis predictivo ayuda a sistemas de transporte a ajustar proactivamente capacidad, reencaminar tráfico y programar mantenimiento para prevenir interrupciones.",
          de: "Predictive Analytics hilft Transportsystemen proaktiv Kapazität anzupassen, Verkehr umzuleiten und Wartung zu planen um Störungen zu verhindern.",
          nl: "Predictive analytics helpt transportsystemen proactief capaciteit aan te passen, verkeer om te leiden en onderhoud in te plannen om verstoringen te voorkomen."
        }
      },
      {
        question: {
          en: "What is 'vehicle-to-infrastructure (V2I) communication' enabling in smart cities?",
          es: "¿Qué está permitiendo la 'comunicación vehículo a infraestructura (V2I)' en ciudades inteligentes?",
          de: "Was ermöglicht 'Fahrzeug-zu-Infrastruktur (V2I) Kommunikation' in Smart Cities?",
          nl: "Wat maakt 'voertuig-naar-infrastructuur (V2I) communicatie' mogelijk in slimme steden?"
        },
        options: [
          { en: "Direct communication between vehicles and traffic infrastructure like smart traffic lights and road sensors", es: "Comunicación directa entre vehículos e infraestructura de tráfico como semáforos inteligentes y sensores de carretera", de: "Direkte Kommunikation zwischen Fahrzeugen und Verkehrsinfrastruktur wie intelligenten Ampeln und Straßensensoren", nl: "Directe communicatie tussen voertuigen en verkeersinfrastructuur zoals slimme verkeerslichten en wegsensoren" },
          { en: "Vehicle inspection procedures", es: "Procedimientos de inspección de vehículos", de: "Fahrzeuginspektion-Verfahren", nl: "Voertuiginspectieprocedures" },
          { en: "Infrastructure maintenance scheduling", es: "Programación de mantenimiento de infraestructura", de: "Infrastruktur-Wartungsplanung", nl: "Infrastructuur onderhoudsplanning" },
          { en: "Vehicle registration systems", es: "Sistemas de registro de vehículos", de: "Fahrzeug-Registrierungssysteme", nl: "Voertuigregistratiesystemen" }
        ],
        correct: 0,
        explanation: {
          en: "V2I communication allows traffic lights to optimize timing based on approaching vehicles, and roads to warn vehicles about hazards ahead.",
          es: "La comunicación V2I permite a semáforos optimizar temporización basándose en vehículos que se aproximan, y a carreteras advertir a vehículos sobre peligros adelante.",
          de: "V2I-Kommunikation ermöglicht Ampeln die Zeitsteuerung basierend auf sich nähernden Fahrzeugen zu optimieren, und Straßen Fahrzeuge vor Gefahren zu warnen.",
          nl: "V2I-communicatie stelt verkeerslichten in staat timing te optimaliseren gebaseerd op naderende voertuigen, en wegen om voertuigen te waarschuwen voor gevaren vooruit."
        }
      },
      {
        question: {
          en: "What is 'object detection' in autonomous vehicle computer vision?",
          es: "¿Qué es la 'detección de objetos' en visión por computadora de vehículos autónomos?",
          de: "Was ist 'Objekterkennung' in Computer Vision autonomer Fahrzeuge?",
          nl: "Wat is 'objectdetectie' in computer vision van autonome voertuigen?"
        },
        options: [
          { en: "AI technique to identify and locate objects like cars, pedestrians, cyclists, and traffic signs in real-time camera feeds", es: "Técnica IA para identificar y localizar objetos como autos, peatones, ciclistas y señales de tráfico en feeds de cámara en tiempo real", de: "KI-Technik zur Identifizierung und Lokalisierung von Objekten wie Autos, Fußgängern, Radfahrern und Verkehrsschildern in Echtzeit-Kamera-Feeds", nl: "AI-techniek om objecten zoals auto's, voetgangers, fietsers en verkeersborden te identificeren en lokaliseren in realtime camera feeds" },
          { en: "Detection of faulty objects in vehicles", es: "Detección de objetos defectuosos en vehículos", de: "Erkennung fehlerhafter Objekte in Fahrzeugen", nl: "Detectie van defecte objecten in voertuigen" },
          { en: "Object storage in vehicle compartments", es: "Almacenamiento de objetos en compartimentos del vehículo", de: "Objektlagerung in Fahrzeugfächern", nl: "Objectopslag in voertuigcompartimenten" },
          { en: "Detection of valuable objects", es: "Detección de objetos valiosos", de: "Erkennung wertvoller Objekte", nl: "Detectie van waardevolle objecten" }
        ],
        correct: 0,
        explanation: {
          en: "Object detection algorithms use convolutional neural networks to process camera images and create bounding boxes around detected objects, enabling vehicles to understand their environment.",
          es: "Los algoritmos de detección de objetos usan redes neuronales convolucionales para procesar imágenes de cámara y crear cajas delimitadoras alrededor de objetos detectados, permitiendo a vehículos entender su entorno.",
          de: "Objekterkennungsalgorithmen verwenden Convolutional Neural Networks um Kamerabilder zu verarbeiten und Begrenzungsrahmen um erkannte Objekte zu erstellen, wodurch Fahrzeuge ihre Umgebung verstehen können.",
          nl: "Objectdetectie algoritmes gebruiken convolutionele neurale netwerken om camera beelden te verwerken en begrenzingskaders rond gedetecteerde objecten te maken, waardoor voertuigen hun omgeving kunnen begrijpen."
        }
      },
      {
        question: {
          en: "What is 'semantic segmentation' used for in autonomous driving perception?",
          es: "¿Para qué se usa la 'segmentación semántica' en percepción de conducción autónoma?",
          de: "Wofür wird 'semantische Segmentierung' in der Wahrnehmung autonomen Fahrens verwendet?",
          nl: "Waarvoor wordt 'semantische segmentatie' gebruikt in perceptie van autonoom rijden?"
        },
        options: [
          { en: "Pixel-level classification of images to distinguish between road, sidewalk, buildings, vegetation, and other scene elements", es: "Clasificación a nivel de píxel de imágenes para distinguir entre carretera, acera, edificios, vegetación y otros elementos de escena", de: "Pixel-Level-Klassifizierung von Bildern zur Unterscheidung zwischen Straße, Gehweg, Gebäuden, Vegetation und anderen Szenenelementen", nl: "Pixel-niveau classificatie van beelden om onderscheid te maken tussen weg, trottoir, gebouwen, vegetatie en andere scène-elementen" },
          { en: "Segmenting vehicle passengers by age groups", es: "Segmentar pasajeros de vehículo por grupos de edad", de: "Fahrzeugpassagiere nach Altersgruppen segmentieren", nl: "Voertuigpassagiers segmenteren naar leeftijdsgroepen" },
          { en: "Dividing traffic into time segments", es: "Dividir tráfico en segmentos de tiempo", de: "Verkehr in Zeitsegmente unterteilen", nl: "Verkeer verdelen in tijdsegmenten" },
          { en: "Semantic analysis of traffic rules", es: "Análisis semántico de reglas de tráfico", de: "Semantische Analyse von Verkehrsregeln", nl: "Semantische analyse van verkeersregels" }
        ],
        correct: 0,
        explanation: {
          en: "Semantic segmentation provides dense understanding of the driving environment by labeling every pixel, enabling precise path planning and obstacle avoidance.",
          es: "La segmentación semántica proporciona comprensión densa del entorno de conducción etiquetando cada píxel, permitiendo planificación precisa de rutas y evitación de obstáculos.",
          de: "Semantische Segmentierung bietet dichtes Verständnis der Fahrumgebung durch Beschriftung jedes Pixels, ermöglicht präzise Pfadplanung und Hindernisvermeidung.",
          nl: "Semantische segmentatie biedt dichte begrip van de rijomgeving door elk pixel te labelen, waardoor precieze padplanning en obstakelvermijding mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is 'LiDAR point cloud processing' enabling in autonomous vehicles?",
          es: "¿Qué está permitiendo el 'procesamiento de nubes de puntos LiDAR' en vehículos autónomos?",
          de: "Was ermöglicht 'LiDAR-Punktwolken-Verarbeitung' in autonomen Fahrzeugen?",
          nl: "Wat maakt 'LiDAR puntenwolk verwerking' mogelijk in autonome voertuigen?"
        },
        options: [
          { en: "3D environment reconstruction and precise distance measurement using laser-generated point clouds for navigation and obstacle detection", es: "Reconstrucción de entorno 3D y medición precisa de distancia usando nubes de puntos generadas por láser para navegación y detección de obstáculos", de: "3D-Umgebungsrekonstruktion und präzise Entfernungsmessung mit laser-generierten Punktwolken für Navigation und Hinderniserkennung", nl: "3D omgevingsreconstructie en precieze afstandsmeting met laser-gegenereerde puntenwolken voor navigatie en obstakeldetectie" },
          { en: "Cloud storage for vehicle data", es: "Almacenamiento en la nube para datos de vehículo", de: "Cloud-Speicher für Fahrzeugdaten", nl: "Cloud opslag voor voertuigdata" },
          { en: "Light detection for vehicle illumination", es: "Detección de luz para iluminación de vehículo", de: "Lichterkennung für Fahrzeugbeleuchtung", nl: "Lichtdetectie voor voertuigverlichting" },
          { en: "Radar signal processing", es: "Procesamiento de señales de radar", de: "Radarsignalverarbeitung", nl: "Radar signaalverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "LiDAR creates dense 3D point clouds that provide accurate depth information and work in various lighting conditions, complementing camera-based perception systems.",
          es: "LiDAR crea nubes de puntos 3D densas que proporcionan información precisa de profundidad y funcionan en varias condiciones de iluminación, complementando sistemas de percepción basados en cámara.",
          de: "LiDAR erstellt dichte 3D-Punktwolken die genaue Tiefeninformationen liefern und unter verschiedenen Beleuchtungsbedingungen funktionieren, ergänzend zu kamerabasierten Wahrnehmungssystemen.",
          nl: "LiDAR creëert dichte 3D puntenwolken die nauwkeurige diepte-informatie bieden en werken onder verschillende lichtomstandigheden, complementair aan camera-gebaseerde perceptiesystemen."
        }
      },
      {
        question: {
          en: "What is 'sensor fusion' achieving in autonomous vehicle perception systems?",
          es: "¿Qué está logrando la 'fusión de sensores' en sistemas de percepción de vehículos autónomos?",
          de: "Was erreicht 'Sensorfusion' in Wahrnehmungssystemen autonomer Fahrzeuge?",
          nl: "Wat bereikt 'sensorfusie' in perceptiesystemen van autonome voertuigen?"
        },
        options: [
          { en: "Combining data from cameras, LiDAR, radar, and ultrasonic sensors to create a comprehensive understanding of the environment", es: "Combinar datos de cámaras, LiDAR, radar y sensores ultrasónicos para crear comprensión integral del entorno", de: "Daten von Kameras, LiDAR, Radar und Ultraschallsensoren kombinieren um umfassendes Verständnis der Umgebung zu schaffen", nl: "Data van camera's, LiDAR, radar en ultrasone sensoren combineren om uitgebreid begrip van de omgeving te creëren" },
          { en: "Fusing different vehicle components", es: "Fusionar diferentes componentes del vehículo", de: "Verschiedene Fahrzeugkomponenten verschmelzen", nl: "Verschillende voertuigcomponenten samenvoegen" },
          { en: "Melting sensors for recycling", es: "Derretir sensores para reciclaje", de: "Sensoren zum Recycling schmelzen", nl: "Sensoren smelten voor recycling" },
          { en: "Connecting sensors with cables", es: "Conectar sensores con cables", de: "Sensoren mit Kabeln verbinden", nl: "Sensoren verbinden met kabels" }
        ],
        correct: 0,
        explanation: {
          en: "Sensor fusion algorithms weigh the strengths of each sensor type - cameras for color/texture, LiDAR for precise distance, radar for weather resistance - to create robust perception.",
          es: "Los algoritmos de fusión de sensores pesan las fortalezas de cada tipo de sensor - cámaras para color/textura, LiDAR para distancia precisa, radar para resistencia al clima - para crear percepción robusta.",
          de: "Sensorfusionsalgorithmen wägen die Stärken jeder Sensorart ab - Kameras für Farbe/Textur, LiDAR für präzise Entfernung, Radar für Wetterresistenz - um robuste Wahrnehmung zu schaffen.",
          nl: "Sensorfusie algoritmes wegen de sterke punten van elk sensortype - camera's voor kleur/textuur, LiDAR voor precieze afstand, radar voor weersbestendigheid - om robuuste perceptie te creëren."
        }
      },
      {
        question: {
          en: "What is 'real-time object tracking' solving in autonomous driving?",
          es: "¿Qué está resolviendo el 'seguimiento de objetos en tiempo real' en conducción autónoma?",
          de: "Was löst 'Echtzeit-Objektverfolgung' beim autonomen Fahren?",
          nl: "Wat lost 'realtime objecttracking' op in autonoom rijden?"
        },
        options: [
          { en: "Maintaining consistent identification and prediction of moving objects like vehicles and pedestrians across video frames", es: "Mantener identificación consistente y predicción de objetos en movimiento como vehículos y peatones a través de marcos de video", de: "Konsistente Identifizierung und Vorhersage sich bewegender Objekte wie Fahrzeuge und Fußgänger über Videoframes hinweg aufrechterhalten", nl: "Consistente identificatie en voorspelling van bewegende objecten zoals voertuigen en voetgangers over video frames handhaven" },
          { en: "Tracking stolen vehicles", es: "Rastrear vehículos robados", de: "Gestohlene Fahrzeuge verfolgen", nl: "Gestolen voertuigen volgen" },
          { en: "Following GPS coordinates", es: "Seguir coordenadas GPS", de: "GPS-Koordinaten folgen", nl: "GPS coördinaten volgen" },
          { en: "Tracking fuel consumption in real-time", es: "Rastrear consumo de combustible en tiempo real", de: "Kraftstoffverbrauch in Echtzeit verfolgen", nl: "Brandstofverbruik in realtime volgen" }
        ],
        correct: 0,
        explanation: {
          en: "Object tracking algorithms predict where detected objects will move next, enabling autonomous vehicles to anticipate and react to dynamic traffic situations safely.",
          es: "Los algoritmos de seguimiento de objetos predicen dónde se moverán los objetos detectados, permitiendo a vehículos autónomos anticipar y reaccionar a situaciones de tráfico dinámicas de manera segura.",
          de: "Objektverfolgungsalgorithmen sagen vorher wohin sich erkannte Objekte als nächstes bewegen, ermöglichen autonomen Fahrzeugen dynamische Verkehrssituationen sicher zu antizipieren und darauf zu reagieren.",
          nl: "Objecttracking algoritmes voorspellen waar gedetecteerde objecten vervolgens naartoe zullen bewegen, waardoor autonome voertuigen dynamische verkeerssituaties veilig kunnen anticiperen en erop reageren."
        }
      },
      {
        question: {
          en: "What is 'edge detection' used for in autonomous vehicle vision systems?",
          es: "¿Para qué se usa la 'detección de bordes' en sistemas de visión de vehículos autónomos?",
          de: "Wofür wird 'Kantenerkennung' in Sichtsystemen autonomer Fahrzeuge verwendet?",
          nl: "Waarvoor wordt 'randdetectie' gebruikt in zichtsystemen van autonome voertuigen?"
        },
        options: [
          { en: "Identifying boundaries between different objects and surfaces in camera images to define lane markings, road edges, and object outlines", es: "Identificar límites entre diferentes objetos y superficies en imágenes de cámara para definir marcas de carril, bordes de carretera y contornos de objetos", de: "Grenzen zwischen verschiedenen Objekten und Oberflächen in Kamerabildern identifizieren um Fahrbahnmarkierungen, Straßenränder und Objektkonturen zu definieren", nl: "Grenzen identificeren tussen verschillende objecten en oppervlakken in camera beelden om rijstrookmarkeringen, wegrnden en objectcontouren te definiëren" },
          { en: "Detecting the edge of the vehicle only", es: "Detectar solo el borde del vehículo", de: "Nur den Fahrzeugrand erkennen", nl: "Alleen de rand van het voertuig detecteren" },
          { en: "Finding sharp edges on roads", es: "Encontrar bordes afilados en carreteras", de: "Scharfe Kanten auf Straßen finden", nl: "Scherpe randen op wegen vinden" },
          { en: "Detecting vehicle window edges", es: "Detectar bordes de ventanas de vehículo", de: "Fahrzeugfensterränder erkennen", nl: "Voertuigvensterranden detecteren" }
        ],
        correct: 0,
        explanation: {
          en: "Edge detection algorithms help autonomous vehicles understand scene structure by identifying transitions between different regions, crucial for lane keeping and obstacle avoidance.",
          es: "Los algoritmos de detección de bordes ayudan a vehículos autónomos a entender estructura de escena identificando transiciones entre diferentes regiones, crucial para mantenimiento de carril y evitación de obstáculos.",
          de: "Kantenerkennungsalgorithmen helfen autonomen Fahrzeugen Szenenstruktur zu verstehen indem sie Übergänge zwischen verschiedenen Regionen identifizieren, entscheidend für Spurhaltung und Hindernisvermeidung.",
          nl: "Randdetectie algoritmes helpen autonome voertuigen scènestructuur te begrijpen door overgangen tussen verschillende regio's te identificeren, cruciaal voor rijstrookhandhaving en obstakelvermijding."
        }
      },
      {
        question: {
          en: "What is 'depth estimation' providing in stereo vision systems for autonomous vehicles?",
          es: "¿Qué está proporcionando la 'estimación de profundidad' en sistemas de visión estéreo para vehículos autónomos?",
          de: "Was bietet 'Tiefenschätzung' in Stereo-Vision-Systemen für autonome Fahrzeuge?",
          nl: "Wat biedt 'diepte-inschatting' in stereo visiesystemen voor autonome voertuigen?"
        },
        options: [
          { en: "3D distance information by comparing images from two cameras to calculate how far objects are from the vehicle", es: "Información de distancia 3D comparando imágenes de dos cámaras para calcular qué tan lejos están los objetos del vehículo", de: "3D-Entfernungsinformationen durch Vergleich von Bildern zweier Kameras zur Berechnung wie weit Objekte vom Fahrzeug entfernt sind", nl: "3D afstandsinformatie door beelden van twee camera's te vergelijken om te berekenen hoe ver objecten van het voertuig zijn" },
          { en: "Deep analysis of camera quality", es: "Análisis profundo de calidad de cámara", de: "Tiefe Analyse der Kameraqualität", nl: "Diepe analyse van camerakwaliteit" },
          { en: "Depth of vehicle interior space", es: "Profundidad del espacio interior del vehículo", de: "Tiefe des Fahrzeuginnenraums", nl: "Diepte van voertuig interieur ruimte" },
          { en: "Water depth measurement for amphibious vehicles", es: "Medición de profundidad de agua para vehículos anfibios", de: "Wassertiefenmessung für Amphibienfahrzeuge", nl: "Waterdiepte meting voor amfibische voertuigen" }
        ],
        correct: 0,
        explanation: {
          en: "Stereo vision mimics human binocular vision, using disparity between two camera views to triangulate object distances, providing cost-effective depth perception for autonomous driving.",
          es: "La visión estéreo imita la visión binocular humana, usando disparidad entre dos vistas de cámara para triangular distancias de objetos, proporcionando percepción de profundidad rentable para conducción autónoma.",
          de: "Stereo-Vision ahmt menschliches binokulares Sehen nach, nutzt Disparität zwischen zwei Kameraansichten zur Triangulation von Objektentfernungen, bietet kosteneffektive Tiefenwahrnehmung für autonomes Fahren.",
          nl: "Stereo visie bootst menselijk binoculair zien na, gebruikt dispariteit tussen twee cameraweergaven om objectafstanden te trianguleren, biedt kosteneffectieve diepteperceptie voor autonoom rijden."
        }
      },
      {
        question: {
          en: "What is 'lane detection and tracking' accomplishing in autonomous driving systems?",
          es: "¿Qué está logrando la 'detección y seguimiento de carriles' en sistemas de conducción autónoma?",
          de: "Was erreicht 'Spurerkennung und -verfolgung' in autonomen Fahrsystemen?",
          nl: "Wat bereikt 'rijstrookdetectie en -tracking' in autonome rijsystemen?"
        },
        options: [
          { en: "Identifying road lane boundaries and maintaining vehicle position within lanes using computer vision algorithms to detect painted lines and road markings", es: "Identificar límites de carriles de carretera y mantener posición del vehículo dentro de carriles usando algoritmos de visión por computadora para detectar líneas pintadas y marcas de carretera", de: "Straßenspurgrenzen identifizieren und Fahrzeugposition innerhalb der Spuren aufrechterhalten mit Computer-Vision-Algorithmen zur Erkennung gemalter Linien und Straßenmarkierungen", nl: "Wegrijstrookgrenzen identificeren en voertuigpositie binnen rijstroken handhaven met computer vision algoritmes om geschilderde lijnen en wegmarkeringen te detecteren" },
          { en: "Tracking vehicle speed in different lanes", es: "Rastrear velocidad del vehículo en diferentes carriles", de: "Fahrzeuggeschwindigkeit in verschiedenen Spuren verfolgen", nl: "Voertuigsnelheid in verschillende rijstroken volgen" },
          { en: "Detecting lane changes by other vehicles only", es: "Detectar cambios de carril solo por otros vehículos", de: "Nur Spurwechsel anderer Fahrzeuge erkennen", nl: "Alleen rijstrookwisselingen door andere voertuigen detecteren" },
          { en: "Tracking the number of lanes on highways", es: "Rastrear el número de carriles en autopistas", de: "Anzahl der Spuren auf Autobahns verfolgen", nl: "Aantal rijstroken op snelwegen volgen" }
        ],
        correct: 0,
        explanation: {
          en: "Lane detection algorithms use edge detection and line fitting techniques to identify lane boundaries, enabling precise steering control and safe navigation within traffic lanes.",
          es: "Los algoritmos de detección de carriles usan técnicas de detección de bordes y ajuste de líneas para identificar límites de carriles, permitiendo control preciso de dirección y navegación segura dentro de carriles de tráfico.",
          de: "Spurerkennungsalgorithmen verwenden Kantenerkennung und Linienanpassungstechniken zur Identifizierung von Spurgrenzen, ermöglichen präzise Lenkungskontrolle und sichere Navigation innerhalb von Verkehrsspuren.",
          nl: "Rijstrookdetectie algoritmes gebruiken randdetectie en lijnpassingstechnieken om rijstrookgrenzen te identificeren, waardoor precieze stuurcontrole en veilige navigatie binnen verkeersrijstroken mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is 'optical flow' analysis contributing to autonomous vehicle perception?",
          es: "¿Qué está contribuyendo el análisis de 'flujo óptico' a la percepción de vehículos autónomos?",
          de: "Was trägt 'Optischer Fluss'-Analyse zur Wahrnehmung autonomer Fahrzeuge bei?",
          nl: "Wat draagt 'optische stroom' analyse bij aan perceptie van autonome voertuigen?"
        },
        options: [
          { en: "Tracking pixel movement between consecutive frames to estimate vehicle motion and detect moving objects in the environment", es: "Rastrear movimiento de píxeles entre marcos consecutivos para estimar movimiento del vehículo y detectar objetos en movimiento en el entorno", de: "Pixelbewegung zwischen aufeinanderfolgenden Frames verfolgen um Fahrzeugbewegung zu schätzen und sich bewegende Objekte in der Umgebung zu erkennen", nl: "Pixelbeweging tussen opeenvolgende frames volgen om voertuigbeweging in te schatten en bewegende objecten in de omgeving te detecteren" },
          { en: "Analyzing traffic flow patterns only", es: "Analizar solo patrones de flujo de tráfico", de: "Nur Verkehrsflussmuster analysieren", nl: "Alleen verkeersstroompatronen analyseren" },
          { en: "Measuring airflow around the vehicle", es: "Medir flujo de aire alrededor del vehículo", de: "Luftstrom um das Fahrzeug messen", nl: "Luchtstroom rond het voertuig meten" },
          { en: "Optical fiber data transmission", es: "Transmisión de datos por fibra óptica", de: "Optische Glasfaser-Datenübertragung", nl: "Optische vezel datatransmissie" }
        ],
        correct: 0,
        explanation: {
          en: "Optical flow algorithms analyze how pixels move between video frames, helping vehicles estimate their own motion and detect independent moving objects like other vehicles and pedestrians.",
          es: "Los algoritmos de flujo óptico analizan cómo se mueven los píxeles entre marcos de video, ayudando a vehículos a estimar su propio movimiento y detectar objetos en movimiento independientes como otros vehículos y peatones.",
          de: "Optische Fluss-Algorithmen analysieren wie sich Pixel zwischen Videoframes bewegen, helfen Fahrzeugen ihre eigene Bewegung zu schätzen und unabhängig bewegende Objekte wie andere Fahrzeuge und Fußgänger zu erkennen.",
          nl: "Optische stroom algoritmes analyseren hoe pixels bewegen tussen video frames, helpen voertuigen hun eigen beweging in te schatten en onafhankelijk bewegende objecten zoals andere voertuigen en voetgangers te detecteren."
        }
      },
      {
        question: {
          en: "What is 'feature extraction' enabling in autonomous vehicle computer vision?",
          es: "¿Qué está permitiendo la 'extracción de características' en visión por computadora de vehículos autónomos?",
          de: "Was ermöglicht 'Merkmalextraktion' in Computer Vision autonomer Fahrzeuge?",
          nl: "Wat maakt 'feature extractie' mogelijk in computer vision van autonome voertuigen?"
        },
        options: [
          { en: "Identifying distinctive visual patterns and characteristics in images that can be used for object recognition and scene understanding", es: "Identificar patrones visuales distintivos y características en imágenes que pueden usarse para reconocimiento de objetos y comprensión de escena", de: "Identifizierung charakteristischer visueller Muster und Merkmale in Bildern die für Objekterkennung und Szenenverständnis verwendet werden können", nl: "Identificatie van onderscheidende visuele patronen en kenmerken in beelden die gebruikt kunnen worden voor objectherkenning en scènebegrip" },
          { en: "Extracting vehicle features for marketing", es: "Extraer características del vehículo para marketing", de: "Fahrzeugmerkmale für Marketing extrahieren", nl: "Voertuigkenmerken extraheren voor marketing" },
          { en: "Removing unnecessary vehicle components", es: "Remover componentes innecesarios del vehículo", de: "Unnötige Fahrzeugkomponenten entfernen", nl: "Onnodige voertuigcomponenten verwijderen" },
          { en: "Feature-based vehicle pricing", es: "Precios de vehículo basados en características", de: "Merkmalbasierte Fahrzeugpreisgestaltung", nl: "Feature-gebaseerde voertuigprijsstelling" }
        ],
        correct: 0,
        explanation: {
          en: "Feature extraction algorithms identify key visual elements like corners, edges, and textures that remain consistent across different viewing conditions, enabling robust object recognition.",
          es: "Los algoritmos de extracción de características identifican elementos visuales clave como esquinas, bordes y texturas que permanecen consistentes a través de diferentes condiciones de visualización, permitiendo reconocimiento robusto de objetos.",
          de: "Merkmalextraktionsalgorithmen identifizieren wichtige visuelle Elemente wie Ecken, Kanten und Texturen die unter verschiedenen Betrachtungsbedingungen konsistent bleiben, ermöglichen robuste Objekterkennung.",
          nl: "Feature extractie algoritmes identificeren belangrijke visuele elementen zoals hoeken, randen en texturen die consistent blijven onder verschillende kijkomstandigheden, waardoor robuuste objectherkenning mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is 'image preprocessing' achieving in autonomous vehicle vision systems?",
          es: "¿Qué está logrando el 'preprocesamiento de imágenes' en sistemas de visión de vehículos autónomos?",
          de: "Was erreicht 'Bildvorverarbeitung' in Sichtsystemen autonomer Fahrzeuge?",
          nl: "Wat bereikt 'beeldvoorverwerking' in zichtsystemen van autonome voertuigen?"
        },
        options: [
          { en: "Enhancing image quality by adjusting brightness, contrast, noise reduction, and distortion correction to improve computer vision algorithm performance", es: "Mejorar calidad de imagen ajustando brillo, contraste, reducción de ruido y corrección de distorsión para mejorar rendimiento de algoritmos de visión por computadora", de: "Bildqualität verbessern durch Anpassung von Helligkeit, Kontrast, Rauschreduzierung und Verzerrungskorrektur zur Verbesserung der Computer-Vision-Algorithmus-Leistung", nl: "Beeldkwaliteit verbeteren door helderheid, contrast, ruisreductie en vervormingscorrectie aan te passen om computer vision algoritme prestaties te verbeteren" },
          { en: "Processing images for storage only", es: "Procesar imágenes solo para almacenamiento", de: "Bilder nur für Speicherung verarbeiten", nl: "Beelden alleen voor opslag verwerken" },
          { en: "Pre-selecting images for manual review", es: "Preseleccionar imágenes para revisión manual", de: "Bilder für manuelle Überprüfung vorauswählen", nl: "Beelden voorselecteren voor handmatige beoordeling" },
          { en: "Preparing images for printing", es: "Preparar imágenes para impresión", de: "Bilder für den Druck vorbereiten", nl: "Beelden voorbereiden voor afdrukken" }
        ],
        correct: 0,
        explanation: {
          en: "Image preprocessing ensures optimal input conditions for computer vision algorithms by handling varying lighting, weather conditions, and camera imperfections that could affect perception accuracy.",
          es: "El preprocesamiento de imágenes asegura condiciones de entrada óptimas para algoritmos de visión por computadora manejando iluminación variable, condiciones climáticas e imperfecciones de cámara que podrían afectar precisión de percepción.",
          de: "Bildvorverarbeitung gewährleistet optimale Eingangsbedingungen für Computer-Vision-Algorithmen durch Behandlung variabler Beleuchtung, Wetterbedingungen und Kameraunvollkommenheiten die Wahrnehmungsgenauigkeit beeinträchtigen könnten.",
          nl: "Beeldvoorverwerking zorgt voor optimale invoercondities voor computer vision algoritmes door variabele verlichting, weersomstandigheden en camera onvolkomenheden te behandelen die perceptie nauwkeurigheid zouden kunnen beïnvloeden."
        }
      },
      {
        question: {
          en: "What is 'multi-scale object detection' solving in autonomous driving computer vision?",
          es: "¿Qué está resolviendo la 'detección de objetos multi-escala' en visión por computadora de conducción autónoma?",
          de: "Was löst 'Mehrskalige Objekterkennung' in Computer Vision autonomen Fahrens?",
          nl: "Wat lost 'multi-schaal objectdetectie' op in computer vision van autonoom rijden?"
        },
        options: [
          { en: "Detecting objects of varying sizes from small distant pedestrians to large nearby trucks using multiple detection scales simultaneously", es: "Detectar objetos de tamaños variables desde pequeños peatones distantes hasta grandes camiones cercanos usando múltiples escalas de detección simultáneamente", de: "Objekte verschiedener Größen von kleinen entfernten Fußgängern bis zu großen nahen Lastwagen erkennen mit mehreren Erkennungsmaßstäben gleichzeitig", nl: "Objecten van verschillende groottes detecteren van kleine verre voetgangers tot grote nabije vrachtwagens met behulp van meerdere detectieschalen tegelijkertijd" },
          { en: "Scaling vehicle size based on road conditions", es: "Escalar tamaño del vehículo basado en condiciones de carretera", de: "Fahrzeuggröße basierend auf Straßenbedingungen skalieren", nl: "Voertuiggrootte schalen gebaseerd op wegomstandigheden" },
          { en: "Detecting objects at multiple time scales", es: "Detectar objetos en múltiples escalas de tiempo", de: "Objekte in mehreren Zeitskalen erkennen", nl: "Objecten detecteren op meerdere tijdschalen" },
          { en: "Measuring object weight at different scales", es: "Medir peso de objetos en diferentes escalas", de: "Objektgewicht in verschiedenen Maßstäben messen", nl: "Objectgewicht meten op verschillende schalen" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-scale detection uses image pyramids and feature maps at different resolutions to ensure reliable detection of both near and far objects, critical for comprehensive environment perception.",
          es: "La detección multi-escala usa pirámides de imágenes y mapas de características en diferentes resoluciones para asegurar detección confiable de objetos cercanos y lejanos, crítico para percepción integral del entorno.",
          de: "Mehrskalige Erkennung verwendet Bildpyramiden und Merkmalskarten in verschiedenen Auflösungen um zuverlässige Erkennung naher und ferner Objekte zu gewährleisten, kritisch für umfassende Umgebungswahrnehmung.",
          nl: "Multi-schaal detectie gebruikt beeldpiramides en feature maps op verschillende resoluties om betrouwbare detectie van zowel nabije als verre objecten te waarborgen, cruciaal voor uitgebreide omgevingsperceptie."
        }
      },
      {
        question: {
          en: "What is 'temporal consistency' ensuring in autonomous vehicle perception systems?",
          es: "¿Qué está asegurando la 'consistencia temporal' en sistemas de percepción de vehículos autónomos?",
          de: "Was gewährleistet 'zeitliche Konsistenz' in Wahrnehmungssystemen autonomer Fahrzeuge?",
          nl: "Wat waarborgt 'temporele consistentie' in perceptiesystemen van autonome voertuigen?"
        },
        options: [
          { en: "Maintaining stable object detection and tracking across consecutive video frames to prevent flickering identifications and ensure smooth perception", es: "Mantener detección y seguimiento estable de objetos a través de marcos de video consecutivos para prevenir identificaciones parpadeantes y asegurar percepción suave", de: "Stabile Objekterkennung und -verfolgung über aufeinanderfolgende Videoframes aufrechterhalten um flackernde Identifizierungen zu verhindern und glatte Wahrnehmung zu gewährleisten", nl: "Stabiele objectdetectie en -tracking handhaven over opeenvolgende videoframes om flikkerende identificaties te voorkomen en soepele perceptie te waarborgen" },
          { en: "Keeping vehicle temperature consistent", es: "Mantener temperatura del vehículo consistente", de: "Fahrzeugtemperatur konsistent halten", nl: "Voertuigtemperatuur consistent houden" },
          { en: "Ensuring consistent driving schedules", es: "Asegurar horarios de conducción consistentes", de: "Konsistente Fahrzeiten gewährleisten", nl: "Consistente rijschema's waarborgen" },
          { en: "Maintaining temporal database records", es: "Mantener registros de base de datos temporal", de: "Temporale Datenbankaufzeichnungen aufrechterhalten", nl: "Temporele database records onderhouden" }
        ],
        correct: 0,
        explanation: {
          en: "Temporal consistency algorithms use information from previous frames to stabilize current detections, reducing false positives and negatives that could lead to erratic driving behavior.",
          es: "Los algoritmos de consistencia temporal usan información de marcos previos para estabilizar detecciones actuales, reduciendo falsos positivos y negativos que podrían llevar a comportamiento errático de conducción.",
          de: "Zeitliche Konsistenz-Algorithmen verwenden Informationen aus vorherigen Frames um aktuelle Erkennungen zu stabilisieren, reduzieren falsch-positive und falsch-negative Ergebnisse die zu erratischem Fahrverhalten führen könnten.",
          nl: "Temporele consistentie algoritmes gebruiken informatie van vorige frames om huidige detecties te stabiliseren, verminderen valse positieven en negatieven die tot grillig rijgedrag zouden kunnen leiden."
        }
      },
      {
        question: {
          en: "What is 'night vision enhancement' providing for autonomous vehicle perception?",
          es: "¿Qué está proporcionando la 'mejora de visión nocturna' para percepción de vehículos autónomos?",
          de: "Was bietet 'Nachtsicht-Verbesserung' für die Wahrnehmung autonomer Fahrzeuge?",
          nl: "Wat biedt 'nachtzicht verbetering' voor perceptie van autonome voertuigen?"
        },
        options: [
          { en: "Enhanced object detection and recognition in low-light conditions using thermal cameras, infrared sensors, and image enhancement algorithms", es: "Detección y reconocimiento mejorado de objetos en condiciones de poca luz usando cámaras térmicas, sensores infrarrojos y algoritmos de mejora de imagen", de: "Verbesserte Objekterkennung und -erkennung bei schlechten Lichtverhältnissen mit Wärmebildkameras, Infrarotsensoren und Bildverbesserungsalgorithmen", nl: "Verbeterde objectdetectie en -herkenning in weinig licht omstandigheden met thermische camera's, infrarood sensoren en beeldverbeteringsalgoritmes" },
          { en: "Improved headlight brightness only", es: "Solo mejora del brillo de faros", de: "Nur verbesserte Scheinwerferhelligkeit", nl: "Alleen verbeterde koplampenhelderheid" },
          { en: "Night-time vehicle maintenance", es: "Mantenimiento nocturno de vehículos", de: "Nächtliche Fahrzeugwartung", nl: "Nachtelijk voertuigonderhoud" },
          { en: "Vision enhancement for human drivers", es: "Mejora de visión para conductores humanos", de: "Sichtverbesserung für menschliche Fahrer", nl: "Zichtverbetering voor menselijke bestuurders" }
        ],
        correct: 0,
        explanation: {
          en: "Night vision systems combine multiple technologies to extend autonomous vehicle capabilities into low-light conditions, detecting pedestrians and obstacles that would be invisible to standard cameras.",
          es: "Los sistemas de visión nocturna combinan múltiples tecnologías para extender capacidades de vehículos autónomos a condiciones de poca luz, detectando peatones y obstáculos que serían invisibles para cámaras estándar.",
          de: "Nachtsichtsysteme kombinieren mehrere Technologien um autonome Fahrzeugfähigkeiten auf schlechte Lichtverhältnisse auszudehnen, erkennen Fußgänger und Hindernisse die für Standardkameras unsichtbar wären.",
          nl: "Nachtzichtsystemen combineren meerdere technologieën om autonome voertuigmogelijkheden uit te breiden naar weinig licht omstandigheden, detecteren voetgangers en obstakels die onzichtbaar zouden zijn voor standaard camera's."
        }
      },
      {
        question: {
          en: "What is 'motion blur compensation' solving in autonomous vehicle computer vision?",
          es: "¿Qué está resolviendo la 'compensación de desenfoque de movimiento' en visión por computadora de vehículos autónomos?",
          de: "Was löst 'Bewegungsunschärfe-Kompensation' in Computer Vision autonomer Fahrzeuge?",
          nl: "Wat lost 'bewegingsonscherpte compensatie' op in computer vision van autonome voertuigen?"
        },
        options: [
          { en: "Correcting image degradation caused by vehicle or object motion during camera exposure, enabling clear perception at high speeds", es: "Corregir degradación de imagen causada por movimiento del vehículo u objeto durante exposición de cámara, permitiendo percepción clara a altas velocidades", de: "Bildverschlechterung korrigieren die durch Fahrzeug- oder Objektbewegung während Kamerabelichtung verursacht wird, ermöglicht klare Wahrnehmung bei hohen Geschwindigkeiten", nl: "Beeldverslechtering corrigeren veroorzaakt door voertuig- of objectbeweging tijdens camera-exposure, waardoor heldere perceptie bij hoge snelheden mogelijk wordt" },
          { en: "Compensating for motion sickness in passengers", es: "Compensar mareo por movimiento en pasajeros", de: "Reisekrankheit bei Passagieren kompensieren", nl: "Compenseren voor bewegingsziekte bij passagiers" },
          { en: "Motion-based entertainment in vehicles", es: "Entretenimiento basado en movimiento en vehículos", de: "Bewegungsbasierte Unterhaltung in Fahrzeugen", nl: "Beweging-gebaseerd entertainment in voertuigen" },
          { en: "Compensating vehicle vibrations only", es: "Solo compensar vibraciones del vehículo", de: "Nur Fahrzeugvibrationen kompensieren", nl: "Alleen voertuigtrillingen compenseren" }
        ],
        correct: 0,
        explanation: {
          en: "Motion blur compensation uses advanced algorithms and high-speed imaging techniques to maintain sharp, clear images for computer vision systems even when the vehicle is moving at highway speeds.",
          es: "La compensación de desenfoque de movimiento usa algoritmos avanzados y técnicas de imagen de alta velocidad para mantener imágenes nítidas y claras para sistemas de visión por computadora incluso cuando el vehículo se mueve a velocidades de autopista.",
          de: "Bewegungsunschärfe-Kompensation verwendet fortgeschrittene Algorithmen und Hochgeschwindigkeits-Bildgebungstechniken um scharfe, klare Bilder für Computer-Vision-Systeme zu erhalten auch wenn das Fahrzeug mit Autobahngeschwindigkeit fährt.",
          nl: "Bewegingsonscherpte compensatie gebruikt geavanceerde algoritmes en hoge-snelheid beeldtechnieken om scherpe, heldere beelden te behouden voor computer vision systemen zelfs wanneer het voertuig met snelwegsnelheden beweegt."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();