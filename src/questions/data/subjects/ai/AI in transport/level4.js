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
      },
      {
        question: {
          en: "What is 'end-to-end learning' in autonomous driving systems?",
          es: "¿Qué es el 'aprendizaje de extremo a extremo' en sistemas de conducción autónoma?",
          de: "Was ist 'End-to-End-Lernen' in autonomen Fahrsystemen?",
          nl: "Wat is 'end-to-end learning' in autonome rijsystemen?"
        },
        options: [
          { en: "Neural networks that directly map sensor inputs to steering commands without explicit intermediate steps", es: "Redes neuronales que mapean directamente entradas de sensores a comandos de dirección sin pasos intermedios explícitos", de: "Neuronale Netzwerke die Sensoreingaben direkt auf Lenkbefehle abbilden ohne explizite Zwischenschritte", nl: "Neurale netwerken die sensorinputs direct naar stuurcommando's mappen zonder expliciete tussenstappen" },
          { en: "Learning that occurs from start to finish of journey", es: "Aprendizaje que ocurre desde inicio hasta fin del viaje", de: "Lernen das vom Anfang bis Ende der Reise erfolgt", nl: "Leren dat plaatsvindt van begin tot einde van reis" },
          { en: "End-of-life vehicle learning systems", es: "Sistemas de aprendizaje de fin de vida del vehículo", de: "Fahrzeug-End-of-Life-Lernsysteme", nl: "Einde-levensduur voertuig leersystemen" },
          { en: "Learning endpoints for navigation routes", es: "Aprender puntos finales para rutas de navegación", de: "Endpunkte für Navigationsrouten lernen", nl: "Eindpunten leren voor navigatieroutes" }
        ],
        correct: 0,
        explanation: {
          en: "End-to-end learning trains neural networks to learn the entire driving task holistically, from raw sensor data to control outputs, potentially discovering optimal strategies that human-designed systems might miss.",
          es: "El aprendizaje de extremo a extremo entrena redes neuronales para aprender toda la tarea de conducción holísticamente, desde datos brutos de sensores hasta salidas de control, potencialmente descubriendo estrategias óptimas que sistemas diseñados por humanos podrían perder.",
          de: "End-to-End-Lernen trainiert neuronale Netzwerke die gesamte Fahraufgabe ganzheitlich zu lernen, von Roh-Sensordaten bis Steuerausgaben, entdeckt potenziell optimale Strategien die menschendesignte Systeme verpassen könnten.",
          nl: "End-to-end learning traint neurale netwerken om de gehele rijtaak holistisch te leren, van ruwe sensordata tot controle-outputs, waarbij mogelijk optimale strategieën worden ontdekt die door mensen ontworpen systemen zouden kunnen missen."
        }
      },
      {
        question: {
          en: "What is 'domain adaptation' addressing in autonomous vehicle AI?",
          es: "¿Qué está abordando la 'adaptación de dominio' en IA de vehículos autónomos?",
          de: "Was adressiert 'Domänenanpassung' in autonomer Fahrzeug-KI?",
          nl: "Wat pakt 'domein aanpassing' aan in autonome voertuig AI?"
        },
        options: [
          { en: "Enabling AI trained in one environment to work effectively in different geographic or weather conditions", es: "Habilitar IA entrenada en un entorno para trabajar efectivamente en diferentes condiciones geográficas o climáticas", de: "KI die in einer Umgebung trainiert wurde befähigen in verschiedenen geografischen oder Wetterbedingungen effektiv zu arbeiten", nl: "AI getraind in één omgeving in staat stellen om effectief te werken in verschillende geografische of weersomstandigheden" },
          { en: "Adapting domain names for vehicle networks", es: "Adaptar nombres de dominio para redes vehiculares", de: "Domänennamen für Fahrzeugnetzwerke anpassen", nl: "Domeinnamen aanpassen voor voertuignetwerken" },
          { en: "Domain-specific language adaptation", es: "Adaptación de lenguaje específico de dominio", de: "Domänenspezifische Sprachanpassung", nl: "Domein-specifieke taaladaptatie" },
          { en: "Adapting to different vehicle ownership domains", es: "Adaptarse a diferentes dominios de propiedad de vehículos", de: "Anpassung an verschiedene Fahrzeugeigentums-Domänen", nl: "Aanpassen aan verschillende voertuig eigendomsdomeinen" }
        ],
        correct: 0,
        explanation: {
          en: "Domain adaptation techniques allow AI systems trained on sunny California roads to generalize to snowy European cities or Asian megacities, reducing the need for extensive retraining in every new environment.",
          es: "Las técnicas de adaptación de dominio permiten a sistemas IA entrenados en carreteras soleadas de California generalizar a ciudades europeas nevadas o megaciudades asiáticas, reduciendo la necesidad de reentrenamiento extensivo en cada nuevo entorno.",
          de: "Domänenanpassungstechniken ermöglichen KI-Systemen die auf sonnigen kalifornischen Straßen trainiert wurden auf verschneite europäische Städte oder asiatische Megastädte zu generalisieren, reduziert Bedarf an umfangreichem Neutraining in jeder neuen Umgebung.",
          nl: "Domein aanpassingstechnieken stellen AI-systemen getraind op zonnige Californische wegen in staat om te generaliseren naar besneeuwde Europese steden of Aziatische megasteden, wat de behoefte aan uitgebreide hertraining in elke nieuwe omgeving vermindert."
        }
      },
      {
        question: {
          en: "What is 'adversarial training' improving in autonomous vehicle robustness?",
          es: "¿Qué está mejorando el 'entrenamiento adversarial' en robustez de vehículos autónomos?",
          de: "Was verbessert 'adversariales Training' in Robustheit autonomer Fahrzeuge?",
          nl: "Wat verbetert 'adversarial training' in robuustheid van autonome voertuigen?"
        },
        options: [
          { en: "Resistance to adversarial attacks and edge cases by training on intentionally challenging examples", es: "Resistencia a ataques adversariales y casos extremos entrenando en ejemplos intencionalmente desafiantes", de: "Widerstand gegen adversariale Angriffe und Randfälle durch Training an absichtlich herausfordernden Beispielen", nl: "Weerstand tegen adversariale aanvallen en edge cases door te trainen op opzettelijk uitdagende voorbeelden" },
          { en: "Training against adversarial competitors only", es: "Solo entrenar contra competidores adversariales", de: "Nur gegen adversariale Wettbewerber trainieren", nl: "Alleen trainen tegen adversariale concurrenten" },
          { en: "Adversarial marketing strategies", es: "Estrategias de marketing adversarial", de: "Adversariale Marketingstrategien", nl: "Adversariale marketingstrategieën" },
          { en: "Training in adverse weather only", es: "Solo entrenar en clima adverso", de: "Nur bei widrigem Wetter trainieren", nl: "Alleen trainen bij slecht weer" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial training exposes AI to deliberately crafted challenging scenarios, making it more resilient to unusual inputs, sensor glitches, and potential attacks that could compromise safety.",
          es: "El entrenamiento adversarial expone a IA a escenarios desafiantes deliberadamente elaborados, haciéndola más resistente a entradas inusuales, fallos de sensores y ataques potenciales que podrían comprometer la seguridad.",
          de: "Adversariales Training setzt KI absichtlich gestalteten herausfordernden Szenarien aus, macht sie widerstandsfähiger gegen ungewöhnliche Eingaben, Sensorfehler und potenzielle Angriffe die Sicherheit gefährden könnten.",
          nl: "Adversarial training stelt AI bloot aan opzettelijk gecreëerde uitdagende scenario's, waardoor het veerkrachtiger wordt tegen ongebruikelijke inputs, sensorstoringen en potentiële aanvallen die veiligheid in gevaar zouden kunnen brengen."
        }
      },
      {
        question: {
          en: "What is 'model compression' enabling for edge deployment of AI in vehicles?",
          es: "¿Qué está habilitando la 'compresión de modelos' para despliegue en el borde de IA en vehículos?",
          de: "Was ermöglicht 'Modellkompression' für Edge-Bereitstellung von KI in Fahrzeugen?",
          nl: "Wat maakt 'model compressie' mogelijk voor edge deployment van AI in voertuigen?"
        },
        options: [
          { en: "Running complex neural networks on resource-constrained vehicle hardware with minimal performance loss", es: "Ejecutar redes neuronales complejas en hardware vehicular con recursos limitados con pérdida mínima de rendimiento", de: "Ausführung komplexer neuronaler Netzwerke auf ressourcenbeschränkter Fahrzeughardware mit minimalem Leistungsverlust", nl: "Complexe neurale netwerken uitvoeren op resource-beperkte voertuig hardware met minimaal prestatieverlies" },
          { en: "Compressing vehicle models into smaller sizes", es: "Comprimir modelos de vehículos en tamaños más pequeños", de: "Fahrzeugmodelle in kleinere Größen komprimieren", nl: "Voertuig modellen comprimeren in kleinere maten" },
          { en: "Model car compression for storage", es: "Compresión de coches modelo para almacenamiento", de: "Modellauto-Kompression für Lagerung", nl: "Modelauto compressie voor opslag" },
          { en: "Compressing 3D vehicle models", es: "Comprimir modelos 3D de vehículos", de: "3D-Fahrzeugmodelle komprimieren", nl: "3D voertuig modellen comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "Model compression techniques like pruning, quantization, and knowledge distillation reduce neural network size and computational requirements, enabling real-time AI inference on vehicle computers with limited power and memory.",
          es: "Las técnicas de compresión de modelos como poda, cuantización y destilación de conocimiento reducen tamaño de redes neuronales y requisitos computacionales, habilitando inferencia IA en tiempo real en computadoras vehiculares con potencia y memoria limitadas.",
          de: "Modellkompressionstechniken wie Pruning, Quantisierung und Knowledge Distillation reduzieren neuronale Netzwerkgröße und Rechenanforderungen, ermöglichen Echtzeit-KI-Inferenz auf Fahrzeugcomputern mit begrenzter Leistung und Speicher.",
          nl: "Model compressie technieken zoals pruning, quantisatie en knowledge distillation verminderen neurale netwerk grootte en computationele vereisten, wat real-time AI-inferentie mogelijk maakt op voertuigcomputers met beperkte stroom en geheugen."
        }
      },
      {
        question: {
          en: "What is 'federated learning' offering for collaborative autonomous vehicle AI development?",
          es: "¿Qué está ofreciendo el 'aprendizaje federado' para desarrollo colaborativo de IA de vehículos autónomos?",
          de: "Was bietet 'föderiertes Lernen' für kollaborative autonome Fahrzeug-KI-Entwicklung?",
          nl: "Wat biedt 'federated learning' voor collaboratieve autonome voertuig AI-ontwikkeling?"
        },
        options: [
          { en: "Training shared AI models across vehicle fleets without exposing individual vehicle data, preserving privacy", es: "Entrenar modelos IA compartidos a través de flotas de vehículos sin exponer datos de vehículos individuales, preservando privacidad", de: "Geteilte KI-Modelle über Fahrzeugflotten trainieren ohne individuelle Fahrzeugdaten offenzulegen, Privatsphäre bewahren", nl: "Gedeelde AI-modellen trainen over voertuigvloten zonder individuele voertuigdata bloot te stellen, privacy behouden" },
          { en: "Federal government vehicle learning programs", es: "Programas de aprendizaje de vehículos del gobierno federal", de: "Bundesregierungs-Fahrzeuglernprogramme", nl: "Federale overheids voertuig leerprogramma's" },
          { en: "Federation of vehicle manufacturers learning", es: "Aprendizaje de federación de fabricantes de vehículos", de: "Fahrzeughersteller-Föderation Lernen", nl: "Federatie van voertuigfabrikanten leren" },
          { en: "Federated network protocols for vehicles", es: "Protocolos de red federados para vehículos", de: "Föderierte Netzwerkprotokolle für Fahrzeuge", nl: "Gefedereerde netwerk protocollen voor voertuigen" }
        ],
        correct: 0,
        explanation: {
          en: "Federated learning allows manufacturers to improve AI models by learning from millions of vehicles' experiences while keeping sensitive driving data local to each vehicle, addressing privacy concerns while enabling continuous improvement.",
          es: "El aprendizaje federado permite a fabricantes mejorar modelos IA aprendiendo de experiencias de millones de vehículos mientras mantiene datos sensibles de conducción locales a cada vehículo, abordando preocupaciones de privacidad mientras habilita mejora continua.",
          de: "Föderiertes Lernen ermöglicht Herstellern KI-Modelle zu verbessern durch Lernen aus Erfahrungen von Millionen Fahrzeugen während sensible Fahrdaten lokal in jedem Fahrzeug bleiben, adressiert Datenschutzbedenken während kontinuierliche Verbesserung ermöglicht wird.",
          nl: "Federated learning stelt fabrikanten in staat om AI-modellen te verbeteren door te leren van ervaringen van miljoenen voertuigen terwijl gevoelige rijdata lokaal bij elk voertuig blijven, wat privacyzorgen aanpakt terwijl continue verbetering mogelijk wordt gemaakt."
        }
      },
      {
        question: {
          en: "What is 'sim-to-real transfer' addressing in autonomous driving AI development?",
          es: "¿Qué está abordando la 'transferencia de sim a real' en desarrollo de IA de conducción autónoma?",
          de: "Was adressiert 'Sim-to-Real-Transfer' in autonomer Fahr-KI-Entwicklung?",
          nl: "Wat pakt 'sim-to-real transfer' aan in autonome rijden AI-ontwikkeling?"
        },
        options: [
          { en: "Bridging the gap between AI trained in simulation and real-world performance", es: "Cerrar la brecha entre IA entrenada en simulación y rendimiento en el mundo real", de: "Lücke zwischen in Simulation trainierter KI und realer Leistung überbrücken", nl: "De kloof overbruggen tussen AI getraind in simulatie en echte wereld prestaties" },
          { en: "Transferring SIM cards between vehicles", es: "Transferir tarjetas SIM entre vehículos", de: "SIM-Karten zwischen Fahrzeugen übertragen", nl: "SIM-kaarten overdragen tussen voertuigen" },
          { en: "Real-time simulation transfers", es: "Transferencias de simulación en tiempo real", de: "Echtzeit-Simulationsübertragungen", nl: "Real-time simulatie overdrachten" },
          { en: "Transferring simulation software licenses", es: "Transferir licencias de software de simulación", de: "Simulationssoftware-Lizenzen übertragen", nl: "Simulatie software licenties overdragen" }
        ],
        correct: 0,
        explanation: {
          en: "Sim-to-real transfer techniques ensure AI trained in virtual environments performs reliably when deployed in actual vehicles, using domain randomization and reality gap minimization to handle differences between simulation and reality.",
          es: "Las técnicas de transferencia de sim a real aseguran que IA entrenada en entornos virtuales funcione confiablemente cuando se despliega en vehículos reales, usando aleatorización de dominio y minimización de brecha de realidad para manejar diferencias entre simulación y realidad.",
          de: "Sim-to-Real-Transfer-Techniken stellen sicher dass in virtuellen Umgebungen trainierte KI zuverlässig funktioniert wenn in tatsächlichen Fahrzeugen eingesetzt, nutzt Domain-Randomisierung und Reality-Gap-Minimierung um Unterschiede zwischen Simulation und Realität zu behandeln.",
          nl: "Sim-to-real transfer technieken zorgen ervoor dat AI getraind in virtuele omgevingen betrouwbaar presteert wanneer ingezet in daadwerkelijke voertuigen, waarbij domein randomisatie en reality gap minimalisatie worden gebruikt om verschillen tussen simulatie en realiteit te behandelen."
        }
      },
      {
        question: {
          en: "What is 'uncertainty quantification' providing in autonomous vehicle decision-making?",
          es: "¿Qué está proporcionando la 'cuantificación de incertidumbre' en toma de decisiones de vehículos autónomos?",
          de: "Was bietet 'Unsicherheitsquantifizierung' in autonomer Fahrzeugentscheidungsfindung?",
          nl: "Wat biedt 'onzekerheids kwantificatie' in autonome voertuig besluitvorming?"
        },
        options: [
          { en: "Measuring AI confidence levels to know when predictions are reliable versus uncertain", es: "Medir niveles de confianza de IA para saber cuándo predicciones son confiables versus inciertas", de: "KI-Konfidenzniveaus messen um zu wissen wann Vorhersagen zuverlässig versus unsicher sind", nl: "AI-vertrouwensniveaus meten om te weten wanneer voorspellingen betrouwbaar versus onzeker zijn" },
          { en: "Quantifying uncertain vehicle sales", es: "Cuantificar ventas inciertas de vehículos", de: "Unsichere Fahrzeugverkäufe quantifizieren", nl: "Onzekere voertuigverkopen kwantificeren" },
          { en: "Uncertainty in fuel consumption estimates", es: "Incertidumbre en estimaciones de consumo de combustible", de: "Unsicherheit bei Kraftstoffverbrauchsschätzungen", nl: "Onzekerheid in brandstofverbruik schattingen" },
          { en: "Quantifying manufacturing uncertainties", es: "Cuantificar incertidumbres de fabricación", de: "Fertigungsunsicherheiten quantifizieren", nl: "Productie onzekerheden kwantificeren" }
        ],
        correct: 0,
        explanation: {
          en: "Uncertainty quantification enables autonomous vehicles to assess their own confidence in perceptions and decisions, triggering fallback behaviors or requesting human intervention when confidence is low.",
          es: "La cuantificación de incertidumbre habilita a vehículos autónomos evaluar su propia confianza en percepciones y decisiones, activando comportamientos de respaldo o solicitando intervención humana cuando la confianza es baja.",
          de: "Unsicherheitsquantifizierung ermöglicht autonomen Fahrzeugen ihr eigenes Vertrauen in Wahrnehmungen und Entscheidungen zu bewerten, löst Fallback-Verhalten aus oder fordert menschliches Eingreifen wenn Vertrauen niedrig ist.",
          nl: "Onzekerheids kwantificatie stelt autonome voertuigen in staat om hun eigen vertrouwen in waarnemingen en beslissingen te beoordelen, wat fallback gedragingen activeert of menselijke interventie vraagt wanneer vertrouwen laag is."
        }
      },
      {
        question: {
          en: "What is 'active learning' optimizing in autonomous vehicle AI training?",
          es: "¿Qué está optimizando el 'aprendizaje activo' en entrenamiento de IA de vehículos autónomos?",
          de: "Was optimiert 'aktives Lernen' in autonomem Fahrzeug-KI-Training?",
          nl: "Wat optimaliseert 'actief leren' in autonome voertuig AI-training?"
        },
        options: [
          { en: "Intelligently selecting the most valuable data samples for annotation and training", es: "Seleccionar inteligentemente las muestras de datos más valiosas para anotación y entrenamiento", de: "Intelligente Auswahl der wertvollsten Datenproben für Annotation und Training", nl: "Intelligent de meest waardevolle data samples selecteren voor annotatie en training" },
          { en: "Active physical training for AI systems", es: "Entrenamiento físico activo para sistemas IA", de: "Aktives körperliches Training für KI-Systeme", nl: "Actieve fysieke training voor AI-systemen" },
          { en: "Learning only during active driving", es: "Aprender solo durante conducción activa", de: "Nur während aktiver Fahrt lernen", nl: "Alleen leren tijdens actief rijden" },
          { en: "Active noise learning in vehicles", es: "Aprendizaje de ruido activo en vehículos", de: "Aktives Rauschlernen in Fahrzeugen", nl: "Actief ruisleren in voertuigen" }
        ],
        correct: 0,
        explanation: {
          en: "Active learning identifies edge cases and uncertain scenarios that provide maximum learning value, focusing human annotation efforts on the most informative examples rather than random data, dramatically improving training efficiency.",
          es: "El aprendizaje activo identifica casos extremos y escenarios inciertos que proporcionan máximo valor de aprendizaje, enfocando esfuerzos de anotación humana en ejemplos más informativos en lugar de datos aleatorios, mejorando dramáticamente eficiencia de entrenamiento.",
          de: "Aktives Lernen identifiziert Randfälle und unsichere Szenarien die maximalen Lernwert bieten, fokussiert menschliche Annotationsanstrengungen auf informativsten Beispiele statt zufällige Daten, verbessert Trainingseffizienz dramatisch.",
          nl: "Actief leren identificeert edge cases en onzekere scenario's die maximale leerwaarde bieden, focust menselijke annotatie inspanningen op de meest informatieve voorbeelden in plaats van willekeurige data, wat trainingsefficiëntie dramatisch verbetert."
        }
      },
      {
        question: {
          en: "What is 'continual learning' enabling for deployed autonomous vehicles?",
          es: "¿Qué está habilitando el 'aprendizaje continuo' para vehículos autónomos desplegados?",
          de: "Was ermöglicht 'kontinuierliches Lernen' für eingesetzte autonome Fahrzeuge?",
          nl: "Wat maakt 'continu leren' mogelijk voor gedeployeerde autonome voertuigen?"
        },
        options: [
          { en: "Learning from new experiences over time without forgetting previously learned behaviors", es: "Aprender de nuevas experiencias con el tiempo sin olvidar comportamientos aprendidos previamente", de: "Aus neuen Erfahrungen über Zeit lernen ohne zuvor gelernte Verhaltensweisen zu vergessen", nl: "Leren van nieuwe ervaringen in de tijd zonder eerder geleerde gedragingen te vergeten" },
          { en: "Continuous vehicle operation learning", es: "Aprendizaje de operación continua de vehículos", de: "Kontinuierliches Fahrzeugbetriebs-Lernen", nl: "Continue voertuigoperatie leren" },
          { en: "Learning during continuous charging", es: "Aprender durante carga continua", de: "Lernen während kontinuierlichem Laden", nl: "Leren tijdens continu opladen" },
          { en: "Continual maintenance learning", es: "Aprendizaje de mantenimiento continuo", de: "Kontinuierliches Wartungslernen", nl: "Continu onderhoud leren" }
        ],
        correct: 0,
        explanation: {
          en: "Continual learning allows autonomous vehicles to adapt to new road layouts, traffic patterns, and scenarios encountered in operation while preserving their existing knowledge, avoiding catastrophic forgetting.",
          es: "El aprendizaje continuo permite a vehículos autónomos adaptarse a nuevos diseños de carreteras, patrones de tráfico y escenarios encontrados en operación mientras preserva su conocimiento existente, evitando olvido catastrófico.",
          de: "Kontinuierliches Lernen ermöglicht autonomen Fahrzeugen sich an neue Straßenlayouts, Verkehrsmuster und im Betrieb angetroffene Szenarien anzupassen während bestehendes Wissen bewahrt wird, vermeidet katastrophales Vergessen.",
          nl: "Continu leren stelt autonome voertuigen in staat om zich aan te passen aan nieuwe wegindelingen, verkeerspatronen en scenario's aangetroffen in bedrijf terwijl bestaande kennis behouden blijft, waarbij catastrofaal vergeten wordt vermeden."
        }
      },
      {
        question: {
          en: "What is 'multi-task learning' achieving in autonomous vehicle AI architectures?",
          es: "¿Qué está logrando el 'aprendizaje multi-tarea' en arquitecturas de IA de vehículos autónomos?",
          de: "Was erreicht 'Multi-Task-Lernen' in autonomen Fahrzeug-KI-Architekturen?",
          nl: "Wat bereikt 'multi-task learning' in autonome voertuig AI-architecturen?"
        },
        options: [
          { en: "Training single models to perform multiple related tasks simultaneously, improving efficiency and shared representations", es: "Entrenar modelos únicos para realizar múltiples tareas relacionadas simultáneamente, mejorando eficiencia y representaciones compartidas", de: "Einzelne Modelle trainieren um mehrere verwandte Aufgaben gleichzeitig durchzuführen, verbessert Effizienz und geteilte Repräsentationen", nl: "Enkele modellen trainen om meerdere gerelateerde taken gelijktijdig uit te voeren, wat efficiëntie en gedeelde representaties verbetert" },
          { en: "Learning multiple vehicle tasks separately", es: "Aprender múltiples tareas de vehículos por separado", de: "Mehrere Fahrzeugaufgaben separat lernen", nl: "Meerdere voertuig taken afzonderlijk leren" },
          { en: "Task management for vehicle operators", es: "Gestión de tareas para operadores de vehículos", de: "Aufgabenverwaltung für Fahrzeugbetreiber", nl: "Taakbeheer voor voertuigoperators" },
          { en: "Multi-tasking by human drivers", es: "Multitarea por conductores humanos", de: "Multitasking von menschlichen Fahrern", nl: "Multitasking door menselijke bestuurders" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-task learning enables one neural network to handle object detection, lane detection, depth estimation, and other tasks simultaneously, sharing learned features across tasks for better performance and computational efficiency.",
          es: "El aprendizaje multi-tarea habilita a una red neuronal manejar detección de objetos, detección de carriles, estimación de profundidad y otras tareas simultáneamente, compartiendo características aprendidas a través de tareas para mejor rendimiento y eficiencia computacional.",
          de: "Multi-Task-Lernen ermöglicht einem neuronalen Netzwerk Objekterkennung, Spurerkennung, Tiefenschätzung und andere Aufgaben gleichzeitig zu bewältigen, teilt gelernte Merkmale über Aufgaben für bessere Leistung und Recheneffizienz.",
          nl: "Multi-task learning stelt één neuraal netwerk in staat om objectdetectie, rijstrookdetectie, diepte schatting en andere taken gelijktijdig te behandelen, waarbij geleerde kenmerken over taken worden gedeeld voor betere prestaties en computationele efficiëntie."
        }
      },
      {
        question: {
          en: "What is 'attention mechanisms' improving in autonomous vehicle perception models?",
          es: "¿Qué están mejorando los 'mecanismos de atención' en modelos de percepción de vehículos autónomos?",
          de: "Was verbessern 'Aufmerksamkeitsmechanismen' in autonomen Fahrzeugwahrnehmungsmodellen?",
          nl: "Wat verbeteren 'aandachtsmechanismen' in autonome voertuig perceptie modellen?"
        },
        options: [
          { en: "Focusing computational resources on the most relevant parts of sensor data for better decision-making", es: "Enfocar recursos computacionales en las partes más relevantes de datos de sensores para mejor toma de decisiones", de: "Rechenressourcen auf relevanteste Teile von Sensordaten fokussieren für bessere Entscheidungsfindung", nl: "Computationele middelen focussen op de meest relevante delen van sensordata voor betere besluitvorming" },
          { en: "Attention-grabbing vehicle design features", es: "Características de diseño vehicular que captan atención", de: "Aufmerksamkeitserregende Fahrzeugdesign-Merkmale", nl: "Aandacht-trekkende voertuig design kenmerken" },
          { en: "Driver attention monitoring only", es: "Solo monitoreo de atención del conductor", de: "Nur Fahreraufmerksamkeitsüberwachung", nl: "Alleen bestuurder aandacht monitoring" },
          { en: "Attention management for passengers", es: "Gestión de atención para pasajeros", de: "Aufmerksamkeitsverwaltung für Passagiere", nl: "Aandachtbeheer voor passagiers" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms allow neural networks to dynamically weight different parts of input data, focusing on important objects or regions while filtering noise, significantly improving perception accuracy and contextual understanding.",
          es: "Los mecanismos de atención permiten a redes neuronales ponderar dinámicamente diferentes partes de datos de entrada, enfocándose en objetos o regiones importantes mientras filtra ruido, mejorando significativamente precisión de percepción y comprensión contextual.",
          de: "Aufmerksamkeitsmechanismen ermöglichen neuronalen Netzwerken verschiedene Teile von Eingabedaten dynamisch zu gewichten, fokussieren auf wichtige Objekte oder Regionen während Rauschen gefiltert wird, verbessert Wahrnehmungsgenauigkeit und kontextuelles Verständnis signifikant.",
          nl: "Aandachtsmechanismen stellen neurale netwerken in staat om verschillende delen van inputdata dynamisch te wegen, waarbij wordt gefocust op belangrijke objecten of regio's terwijl ruis wordt gefilterd, wat perceptie nauwkeurigheid en contextueel begrip aanzienlijk verbetert."
        }
      },
      {
        question: {
          en: "What is 'transformer architecture' revolutionizing in autonomous driving perception?",
          es: "¿Qué está revolucionando la 'arquitectura transformer' en percepción de conducción autónoma?",
          de: "Was revolutioniert 'Transformer-Architektur' in autonomer Fahrwahrnehmung?",
          nl: "Wat revolutioneert 'transformer architectuur' in autonome rijden perceptie?"
        },
        options: [
          { en: "Processing sequences and spatial relationships with self-attention for superior scene understanding", es: "Procesar secuencias y relaciones espaciales con auto-atención para comprensión superior de escena", de: "Verarbeitung von Sequenzen und räumlichen Beziehungen mit Selbst-Aufmerksamkeit für überlegenes Szenenverständnis", nl: "Verwerken van sequenties en ruimtelijke relaties met zelf-aandacht voor superieur scènebegrip" },
          { en: "Electrical transformers for vehicle power", es: "Transformadores eléctricos para energía vehicular", de: "Elektrische Transformatoren für Fahrzeugstrom", nl: "Elektrische transformatoren voor voertuig stroom" },
          { en: "Transforming vehicle shapes and designs", es: "Transformar formas y diseños de vehículos", de: "Fahrzeugformen und -designs transformieren", nl: "Voertuigvormen en -ontwerpen transformeren" },
          { en: "Data transformation protocols", es: "Protocolos de transformación de datos", de: "Datentransformations-Protokolle", nl: "Data transformatie protocollen" }
        ],
        correct: 0,
        explanation: {
          en: "Transformer architectures excel at capturing long-range dependencies and contextual relationships in visual data, enabling better understanding of complex traffic scenarios and interactions between multiple road users.",
          es: "Las arquitecturas transformer sobresalen capturando dependencias de largo alcance y relaciones contextuales en datos visuales, habilitando mejor comprensión de escenarios de tráfico complejos e interacciones entre múltiples usuarios de carretera.",
          de: "Transformer-Architekturen übertreffen bei Erfassung weitreichender Abhängigkeiten und kontextueller Beziehungen in visuellen Daten, ermöglichen besseres Verständnis komplexer Verkehrsszenarien und Interaktionen zwischen mehreren Verkehrsteilnehmern.",
          nl: "Transformer architecturen blinken uit in het vastleggen van lange-afstand afhankelijkheden en contextuele relaties in visuele data, wat beter begrip mogelijk maakt van complexe verkeersscenario's en interacties tussen meerdere weggebruikers."
        }
      },
      {
        question: {
          en: "What is 'neural radiance fields (NeRF)' enabling for autonomous vehicle scene reconstruction?",
          es: "¿Qué están habilitando los 'campos de radiancia neural (NeRF)' para reconstrucción de escena de vehículos autónomos?",
          de: "Was ermöglichen 'neuronale Radianzfelder (NeRF)' für autonome Fahrzeugszenrekonstruktion?",
          nl: "Wat maken 'neural radiance fields (NeRF)' mogelijk voor autonome voertuig scène reconstructie?"
        },
        options: [
          { en: "Creating photorealistic 3D scene representations from multiple camera views for simulation and training", es: "Crear representaciones de escena 3D fotorrealistas desde múltiples vistas de cámara para simulación y entrenamiento", de: "Fotorealistische 3D-Szenenrepräsentationen aus mehreren Kameraansichten für Simulation und Training erstellen", nl: "Fotorealistische 3D-scène representaties creëren vanuit meerdere cameraperspectieven voor simulatie en training" },
          { en: "Neural field theory for vehicle physics", es: "Teoría de campo neural para física vehicular", de: "Neurale Feldtheorie für Fahrzeugphysik", nl: "Neurale veld theorie voor voertuig fysica" },
          { en: "Radiance lighting for vehicle interiors", es: "Iluminación de radiancia para interiores vehiculares", de: "Radianz-Beleuchtung für Fahrzeuginnenräume", nl: "Radiance verlichting voor voertuig interieurs" },
          { en: "Field testing neural networks", es: "Pruebas de campo de redes neuronales", de: "Feldtests neuronaler Netzwerke", nl: "Veldtesten van neurale netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "NeRF technology synthesizes detailed 3D environments from 2D images, enabling creation of realistic virtual training scenarios from real-world data and supporting novel view synthesis for comprehensive scene understanding.",
          es: "La tecnología NeRF sintetiza entornos 3D detallados desde imágenes 2D, habilitando creación de escenarios de entrenamiento virtuales realistas desde datos del mundo real y apoyando síntesis de vista novedosa para comprensión comprehensiva de escena.",
          de: "NeRF-Technologie synthetisiert detaillierte 3D-Umgebungen aus 2D-Bildern, ermöglicht Erstellung realistischer virtueller Trainingsszenarien aus realen Daten und unterstützt neuartige Ansichtssynthese für umfassendes Szenenverständnis.",
          nl: "NeRF technologie synthetiseert gedetailleerde 3D-omgevingen uit 2D-afbeeldingen, wat creatie van realistische virtuele trainingsscenario's mogelijk maakt vanuit echte wereld data en nieuwe weergave synthese ondersteunt voor uitgebreid scènebegrip."
        }
      },
      {
        question: {
          en: "What is 'few-shot learning' addressing in autonomous vehicle AI deployment?",
          es: "¿Qué está abordando el 'aprendizaje de pocos ejemplos' en despliegue de IA de vehículos autónomos?",
          de: "Was adressiert 'Few-Shot-Lernen' in autonomer Fahrzeug-KI-Bereitstellung?",
          nl: "Wat pakt 'few-shot learning' aan in autonome voertuig AI-deployment?"
        },
        options: [
          { en: "Quickly adapting to new object types or scenarios with minimal training examples", es: "Adaptarse rápidamente a nuevos tipos de objetos o escenarios con ejemplos mínimos de entrenamiento", de: "Schnelle Anpassung an neue Objekttypen oder Szenarien mit minimalen Trainingsbeispielen", nl: "Snel aanpassen aan nieuwe objecttypes of scenario's met minimale trainingsvoorbeelden" },
          { en: "Learning from a few driving shots only", es: "Aprender solo de unos pocos intentos de conducción", de: "Nur aus wenigen Fahrversuchen lernen", nl: "Alleen leren van een paar rijpogingen" },
          { en: "Few-shot photography in vehicles", es: "Fotografía de pocos disparos en vehículos", de: "Few-Shot-Fotografie in Fahrzeugen", nl: "Few-shot fotografie in voertuigen" },
          { en: "Learning with few sensors", es: "Aprender con pocos sensores", de: "Mit wenigen Sensoren lernen", nl: "Leren met weinig sensoren" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning enables autonomous vehicles to recognize rare objects or handle unusual scenarios after seeing only a handful of examples, reducing the need for massive labeled datasets for every possible situation.",
          es: "El aprendizaje de pocos ejemplos habilita a vehículos autónomos reconocer objetos raros o manejar escenarios inusuales después de ver solo un puñado de ejemplos, reduciendo necesidad de conjuntos de datos etiquetados masivos para cada situación posible.",
          de: "Few-Shot-Lernen ermöglicht autonomen Fahrzeugen seltene Objekte zu erkennen oder ungewöhnliche Szenarien zu bewältigen nach dem Sehen nur weniger Beispiele, reduziert Bedarf an riesigen gelabelten Datensätzen für jede mögliche Situation.",
          nl: "Few-shot learning stelt autonome voertuigen in staat om zeldzame objecten te herkennen of ongebruikelijke scenario's te behandelen na het zien van slechts een handvol voorbeelden, wat de behoefte aan massieve gelabelde datasets voor elke mogelijke situatie vermindert."
        }
      },
      {
        question: {
          en: "What is 'meta-learning' providing for autonomous vehicle AI systems?",
          es: "¿Qué está proporcionando el 'meta-aprendizaje' para sistemas de IA de vehículos autónomos?",
          de: "Was bietet 'Meta-Learning' für autonome Fahrzeug-KI-Systeme?",
          nl: "Wat biedt 'meta-learning' voor autonome voertuig AI-systemen?"
        },
        options: [
          { en: "Learning how to learn efficiently, enabling rapid adaptation to new tasks and environments", es: "Aprender cómo aprender eficientemente, habilitando adaptación rápida a nuevas tareas y entornos", de: "Lernen wie man effizient lernt, ermöglicht schnelle Anpassung an neue Aufgaben und Umgebungen", nl: "Leren hoe efficiënt te leren, wat snelle aanpassing aan nieuwe taken en omgevingen mogelijk maakt" },
          { en: "Meta-data management for vehicles", es: "Gestión de metadatos para vehículos", de: "Metadaten-Verwaltung für Fahrzeuge", nl: "Metadata beheer voor voertuigen" },
          { en: "Learning about learning theory only", es: "Solo aprender sobre teoría del aprendizaje", de: "Nur über Lerntheorie lernen", nl: "Alleen leren over leertheorie" },
          { en: "Meta-cognitive vehicle systems", es: "Sistemas vehiculares metacognitivos", de: "Metakognitive Fahrzeugsysteme", nl: "Metacognitieve voertuig systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-learning trains AI systems to quickly acquire new skills from limited data, enabling autonomous vehicles to adapt to novel driving conditions, road types, or regional differences with minimal additional training.",
          es: "El meta-aprendizaje entrena sistemas IA para adquirir rápidamente nuevas habilidades desde datos limitados, habilitando a vehículos autónomos adaptarse a condiciones de conducción novedosas, tipos de carretera o diferencias regionales con entrenamiento adicional mínimo.",
          de: "Meta-Learning trainiert KI-Systeme neue Fähigkeiten schnell aus begrenzten Daten zu erwerben, ermöglicht autonomen Fahrzeugen sich an neuartige Fahrbedingungen, Straßentypen oder regionale Unterschiede mit minimalem zusätzlichem Training anzupassen.",
          nl: "Meta-learning traint AI-systemen om snel nieuwe vaardigheden te verwerven uit beperkte data, wat autonome voertuigen in staat stelt om zich aan te passen aan nieuwe rijomstandigheden, wegtypes of regionale verschillen met minimale aanvullende training."
        }
      },
      {
        question: {
          en: "What is 'causal reasoning' improving in autonomous vehicle safety systems?",
          es: "¿Qué está mejorando el 'razonamiento causal' en sistemas de seguridad de vehículos autónomos?",
          de: "Was verbessert 'kausales Denken' in Sicherheitssystemen autonomer Fahrzeuge?",
          nl: "Wat verbetert 'causaal redeneren' in veiligheidssystemen van autonome voertuigen?"
        },
        options: [
          { en: "Understanding cause-effect relationships rather than just correlations for more robust decision-making", es: "Entender relaciones causa-efecto en lugar de solo correlaciones para toma de decisiones más robusta", de: "Ursache-Wirkungs-Beziehungen verstehen statt nur Korrelationen für robustere Entscheidungsfindung", nl: "Oorzaak-gevolg relaties begrijpen in plaats van alleen correlaties voor robuustere besluitvorming" },
          { en: "Causal analysis of vehicle accidents only", es: "Solo análisis causal de accidentes vehiculares", de: "Nur kausale Analyse von Fahrzeugunfällen", nl: "Alleen causale analyse van voertuigongevallen" },
          { en: "Reasoning about vehicle causes of failure", es: "Razonar sobre causas de falla de vehículos", de: "Über Ursachen von Fahrzeugausfällen nachdenken", nl: "Redeneren over voertuig oorzaken van storing" },
          { en: "Causal relationships in vehicle sales", es: "Relaciones causales en ventas de vehículos", de: "Kausale Beziehungen bei Fahrzeugverkäufen", nl: "Causale relaties in voertuigverkoop" }
        ],
        correct: 0,
        explanation: {
          en: "Causal reasoning enables autonomous vehicles to understand why events occur, predict consequences of actions more accurately, and generalize better to new situations beyond pattern recognition alone.",
          es: "El razonamiento causal habilita a vehículos autónomos entender por qué ocurren eventos, predecir consecuencias de acciones más precisamente y generalizar mejor a nuevas situaciones más allá de solo reconocimiento de patrones.",
          de: "Kausales Denken ermöglicht autonomen Fahrzeugen zu verstehen warum Ereignisse auftreten, Konsequenzen von Aktionen genauer vorherzusagen und besser auf neue Situationen zu generalisieren über bloße Mustererkennung hinaus.",
          nl: "Causaal redeneren stelt autonome voertuigen in staat om te begrijpen waarom gebeurtenissen optreden, gevolgen van acties nauwkeuriger te voorspellen en beter te generaliseren naar nieuwe situaties voorbij patroonherkenning alleen."
        }
      },
      {
        question: {
          en: "What is 'neural architecture search' optimizing for vehicle AI deployment?",
          es: "¿Qué está optimizando la 'búsqueda de arquitectura neural' para despliegue de IA vehicular?",
          de: "Was optimiert 'neuronale Architektursuche' für Fahrzeug-KI-Bereitstellung?",
          nl: "Wat optimaliseert 'neural architecture search' voor voertuig AI-deployment?"
        },
        options: [
          { en: "Automatically discovering optimal neural network structures for specific autonomous driving tasks", es: "Descubrir automáticamente estructuras de redes neuronales óptimas para tareas específicas de conducción autónoma", de: "Automatisches Entdecken optimaler neuronaler Netzwerkstrukturen für spezifische autonome Fahraufgaben", nl: "Automatisch optimale neurale netwerkstructuren ontdekken voor specifieke autonome rijtaken" },
          { en: "Searching for neural network documentation", es: "Buscar documentación de redes neuronales", de: "Nach neuronaler Netzwerk-Dokumentation suchen", nl: "Zoeken naar neurale netwerk documentatie" },
          { en: "Architecture design for vehicle structures", es: "Diseño arquitectónico para estructuras vehiculares", de: "Architekturdesign für Fahrzeugstrukturen", nl: "Architectuur ontwerp voor voertuigstructuren" },
          { en: "Searching neural pathways in brains", es: "Buscar vías neuronales en cerebros", de: "Neuronale Pfade in Gehirnen suchen", nl: "Neurale paden in hersenen zoeken" }
        ],
        correct: 0,
        explanation: {
          en: "Neural architecture search automates the design of neural networks, finding architectures optimized for vehicle hardware constraints, real-time requirements, and specific perception tasks without manual trial-and-error.",
          es: "La búsqueda de arquitectura neural automatiza el diseño de redes neuronales, encontrando arquitecturas optimizadas para restricciones de hardware vehicular, requisitos en tiempo real y tareas de percepción específicas sin prueba y error manual.",
          de: "Neuronale Architektursuche automatisiert das Design neuronaler Netzwerke, findet Architekturen optimiert für Fahrzeughardware-Beschränkungen, Echtzeitanforderungen und spezifische Wahrnehmungsaufgaben ohne manuelle Trial-and-Error.",
          nl: "Neural architecture search automatiseert het ontwerp van neurale netwerken, vindt architecturen geoptimaliseerd voor voertuig hardware beperkingen, real-time vereisten en specifieke perceptie taken zonder handmatige trial-and-error."
        }
      },
      {
        question: {
          en: "What is 'explainable AI (XAI)' providing for autonomous vehicle accountability?",
          es: "¿Qué está proporcionando la 'IA explicable (XAI)' para responsabilidad de vehículos autónomos?",
          de: "Was bietet 'erklärbare KI (XAI)' für autonome Fahrzeug-Verantwortlichkeit?",
          nl: "Wat biedt 'verklaarbare AI (XAI)' voor autonome voertuig verantwoordelijkheid?"
        },
        options: [
          { en: "Interpretable insights into AI decision-making processes for debugging, validation, and legal compliance", es: "Perspectivas interpretables en procesos de toma de decisiones de IA para depuración, validación y cumplimiento legal", de: "Interpretierbare Einblicke in KI-Entscheidungsprozesse für Debugging, Validierung und rechtliche Compliance", nl: "Interpreteerbare inzichten in AI besluitvormingsprocessen voor debugging, validatie en juridische compliance" },
          { en: "Explaining AI to passengers only", es: "Solo explicar IA a pasajeros", de: "Nur KI an Passagiere erklären", nl: "Alleen AI uitleggen aan passagiers" },
          { en: "Explainable vehicle manuals", es: "Manuales de vehículos explicables", de: "Erklärbare Fahrzeughandbücher", nl: "Verklaarbare voertuig handleidingen" },
          { en: "AI explanation interfaces", es: "Interfaces de explicación de IA", de: "KI-Erklärungsschnittstellen", nl: "AI uitleg interfaces" }
        ],
        correct: 0,
        explanation: {
          en: "XAI techniques provide transparency into why autonomous vehicles make specific decisions, essential for safety validation, accident investigation, regulatory approval, and building public trust.",
          es: "Las técnicas XAI proporcionan transparencia sobre por qué vehículos autónomos toman decisiones específicas, esencial para validación de seguridad, investigación de accidentes, aprobación regulatoria y construcción de confianza pública.",
          de: "XAI-Techniken bieten Transparenz darüber warum autonome Fahrzeuge spezifische Entscheidungen treffen, wesentlich für Sicherheitsvalidierung, Unfalluntersuchung, regulatorische Genehmigung und Aufbau öffentlichen Vertrauens.",
          nl: "XAI technieken bieden transparantie over waarom autonome voertuigen specifieke beslissingen nemen, essentieel voor veiligheidsvalidatie, ongevalonderzoek, regelgevende goedkeuring en het opbouwen van publiek vertrouwen."
        }
      },
      {
        question: {
          en: "What is 'knowledge distillation' enabling for efficient autonomous vehicle AI?",
          es: "¿Qué está habilitando la 'destilación de conocimiento' para IA eficiente de vehículos autónomos?",
          de: "Was ermöglicht 'Wissensdestillation' für effiziente autonome Fahrzeug-KI?",
          nl: "Wat maakt 'knowledge distillation' mogelijk voor efficiënte autonome voertuig AI?"
        },
        options: [
          { en: "Transferring knowledge from large complex models to smaller, faster models suitable for vehicle deployment", es: "Transferir conocimiento de modelos grandes y complejos a modelos más pequeños y rápidos adecuados para despliegue vehicular", de: "Wissen von großen komplexen Modellen auf kleinere, schnellere Modelle übertragen geeignet für Fahrzeugbereitstellung", nl: "Kennis overdragen van grote complexe modellen naar kleinere, snellere modellen geschikt voor voertuig deployment" },
          { en: "Distilling fuel for knowledge engines", es: "Destilar combustible para motores de conocimiento", de: "Kraftstoff für Wissensmaschinen destillieren", nl: "Brandstof distilleren voor kennis motoren" },
          { en: "Knowledge base distillation processes", es: "Procesos de destilación de base de conocimiento", de: "Wissensbasis-Destillationsprozesse", nl: "Kennisbasis distillatieprocessen" },
          { en: "Distilling training data only", es: "Solo destilar datos de entrenamiento", de: "Nur Trainingsdaten destillieren", nl: "Alleen trainingsdata distilleren" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation trains compact student models to mimic the behavior of larger teacher models, achieving similar accuracy with lower computational requirements ideal for real-time vehicle operation.",
          es: "La destilación de conocimiento entrena modelos estudiantes compactos para imitar comportamiento de modelos maestros más grandes, logrando precisión similar con requisitos computacionales más bajos ideales para operación vehicular en tiempo real.",
          de: "Wissensdestillation trainiert kompakte Studenten-Modelle das Verhalten größerer Lehrer-Modelle nachzuahmen, erreicht ähnliche Genauigkeit mit niedrigeren Rechenanforderungen ideal für Echtzeit-Fahrzeugbetrieb.",
          nl: "Knowledge distillation traint compacte student modellen om het gedrag van grotere leraar modellen na te bootsen, bereikt vergelijkbare nauwkeurigheid met lagere computationele vereisten ideaal voor real-time voertuigoperatie."
        }
      },
      {
        question: {
          en: "What is 'self-supervised learning' reducing in autonomous vehicle AI development?",
          es: "¿Qué está reduciendo el 'aprendizaje autosupervisado' en desarrollo de IA de vehículos autónomos?",
          de: "Was reduziert 'selbstüberwachtes Lernen' in autonomer Fahrzeug-KI-Entwicklung?",
          nl: "Wat vermindert 'zelf-gesuperviseerd leren' in autonome voertuig AI-ontwikkeling?"
        },
        options: [
          { en: "Dependency on expensive manual data labeling by learning from unlabeled sensor data", es: "Dependencia en etiquetado manual costoso de datos aprendiendo desde datos de sensores sin etiquetar", de: "Abhängigkeit von teurer manueller Datenkennzeichnung durch Lernen aus ungelabelten Sensordaten", nl: "Afhankelijkheid van dure handmatige data labeling door te leren van ongelabelde sensordata" },
          { en: "Self-driving vehicle supervision needs", es: "Necesidades de supervisión de vehículos autónomos", de: "Selbstfahr-Fahrzeug-Überwachungsbedarf", nl: "Zelfrijdende voertuig toezicht behoeften" },
          { en: "Supervised driving instruction only", es: "Solo instrucción de conducción supervisada", de: "Nur überwachte Fahranweisung", nl: "Alleen gesuperviseerde rijinstructie" },
          { en: "Self-maintenance supervision", es: "Supervisión de automantenimiento", de: "Selbstwartungs-Überwachung", nl: "Zelfonderhoud toezicht" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning creates training signals from the data itself (predicting future frames, reconstructing masked inputs), enabling AI to learn useful representations from vast amounts of unlabeled driving footage.",
          es: "El aprendizaje autosupervisado crea señales de entrenamiento desde los datos mismos (prediciendo fotogramas futuros, reconstruyendo entradas enmascaradas), habilitando a IA aprender representaciones útiles desde vastas cantidades de metraje de conducción sin etiquetar.",
          de: "Selbstüberwachtes Lernen erstellt Trainingssignale aus den Daten selbst (zukünftige Frames vorhersagen, maskierte Eingaben rekonstruieren), ermöglicht KI nützliche Repräsentationen aus riesigen Mengen ungelabelter Fahraufnahmen zu lernen.",
          nl: "Zelf-gesuperviseerd leren creëert trainings signalen uit de data zelf (toekomstige frames voorspellen, gemaskeerde inputs reconstrueren), wat AI in staat stelt om nuttige representaties te leren uit enorme hoeveelheden ongelabeld rijmateriaal."
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