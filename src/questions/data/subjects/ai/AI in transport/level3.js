// AI in transport Quiz - Level 3
(function() {
  const level3 = {
    name: {
          "en": "AI in Transport Level 3",
          "es": "IA en Transporte Nivel 3",
          "de": "KI im Transport Stufe 3",
          "nl": "AI in Transport Level 3"
    },
    questions: [
      {
        question: {
                  "en": "What is 'sensor fusion' in autonomous vehicles?",
                  "es": "¿Qué es la 'fusión de sensores' en vehículos autónomos?",
                  "de": "Was ist 'Sensorfusion' in autonomen Fahrzeugen?",
                  "nl": "Wat is 'sensor fusion' in autonome voertuigen?"
        },
        options: [
        {
                  "en": "Connecting sensors to the internet",
                  "es": "Conectar sensores a internet",
                  "de": "Sensoren mit dem Internet verbinden",
                  "nl": "Sensoren met internet verbinden"
        },
        {
                  "en": "Using only camera sensors",
                  "es": "Usar solo sensores de cámara",
                  "de": "Nur Kamerasensoren verwenden",
                  "nl": "Alleen camerasensoren gebruiken"
        },
        {
                  "en": "Combining data from multiple sensors to create a more accurate understanding of the environment",
                  "es": "Combinar datos de múltiples sensores para crear una comprensión más precisa del entorno",
                  "de": "Daten von mehreren Sensoren kombinieren um ein genaueres Verständnis der Umgebung zu schaffen",
                  "nl": "Data van meerdere sensoren combineren om een nauwkeuriger begrip van de omgeving te creëren"
        },
        {
                  "en": "Installing more sensors in the car",
                  "es": "Instalar más sensores en el coche",
                  "de": "Mehr Sensoren im Auto installieren",
                  "nl": "Meer sensoren in de auto installeren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sensor fusion integrates information from cameras, radar, LiDAR, and other sensors to overcome individual sensor limitations and improve safety.",
                  "es": "La fusión de sensores integra información de cámaras, radar, LiDAR y otros sensores para superar limitaciones de sensores individuales y mejorar la seguridad.",
                  "de": "Sensorfusion integriert Informationen von Kameras, Radar, LiDAR und anderen Sensoren um individuelle Sensorbegrenzungen zu überwinden und Sicherheit zu verbessern.",
                  "nl": "Sensor fusion integreert informatie van camera's, radar, LiDAR en andere sensoren om individuele sensorbeperkingen te overwinnen en veiligheid te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is 'vehicle-to-vehicle (V2V) communication' in smart transportation?",
                  "es": "¿Qué es la 'comunicación vehículo a vehículo (V2V)' en transporte inteligente?",
                  "de": "Was ist 'Fahrzeug-zu-Fahrzeug (V2V) Kommunikation' im intelligenten Transport?",
                  "nl": "Wat is 'voertuig-naar-voertuig (V2V) communicatie' in slim transport?"
        },
        options: [
        {
                  "en": "Connecting cars to gas stations",
                  "es": "Conectar coches a gasolineras",
                  "de": "Autos mit Tankstellen verbinden",
                  "nl": "Auto's verbinden met tankstations"
        },
        {
                  "en": "Using mobile phones to call other drivers",
                  "es": "Usar teléfonos móviles para llamar a otros conductores",
                  "de": "Mobiltelefone verwenden um andere Fahrer anzurufen",
                  "nl": "Mobiele telefoons gebruiken om andere bestuurders te bellen"
        },
        {
                  "en": "Radio communication with traffic police",
                  "es": "Comunicación por radio con policía de tráfico",
                  "de": "Funkkommunikation mit Verkehrspolizei",
                  "nl": "Radiocommunicatie met verkeerspolitie"
        },
        {
                  "en": "Direct wireless communication between vehicles to share safety and traffic information",
                  "es": "Comunicación inalámbrica directa entre vehículos para compartir información de seguridad y tráfico",
                  "de": "Direkte drahtlose Kommunikation zwischen Fahrzeugen zum Austausch von Sicherheits- und Verkehrsinformationen",
                  "nl": "Directe draadloze communicatie tussen voertuigen om veiligheids- en verkeersinformatie te delen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "V2V allows vehicles to exchange real-time information about speed, position, and road conditions to prevent accidents and improve traffic flow.",
                  "es": "V2V permite a vehículos intercambiar información en tiempo real sobre velocidad, posición y condiciones de carretera para prevenir accidentes y mejorar flujo de tráfico.",
                  "de": "V2V ermöglicht Fahrzeugen Echtzeitinformationen über Geschwindigkeit, Position und Straßenverhältnisse auszutauschen um Unfälle zu verhindern und Verkehrsfluss zu verbessern.",
                  "nl": "V2V stelt voertuigen in staat om realtime informatie over snelheid, positie en wegomstandigheden uit te wisselen om ongevallen te voorkomen en verkeersstroom te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is 'edge computing' in intelligent transportation systems?",
                  "es": "¿Qué es la 'computación en el borde' en sistemas de transporte inteligente?",
                  "de": "Was ist 'Edge Computing' in intelligenten Transportsystemen?",
                  "nl": "Wat is 'edge computing' in intelligente transportsystemen?"
        },
        options: [
        {
                  "en": "Computing only at traffic intersections",
                  "es": "Computar solo en intersecciones de tráfico",
                  "de": "Nur an Verkehrskreuzungen rechnen",
                  "nl": "Alleen rekenen bij verkeerskruispunten"
        },
        {
                  "en": "Using computers at the edge of roads",
                  "es": "Usar computadoras en el borde de carreteras",
                  "de": "Computer am Straßenrand verwenden",
                  "nl": "Computers aan de rand van wegen gebruiken"
        },
        {
                  "en": "Processing data locally in vehicles or roadside units instead of sending everything to distant servers",
                  "es": "Procesar datos localmente en vehículos o unidades de carretera en lugar de enviar todo a servidores distantes",
                  "de": "Daten lokal in Fahrzeugen oder Straßeneinheiten verarbeiten anstatt alles an entfernte Server zu senden",
                  "nl": "Data lokaal verwerken in voertuigen of wegkantunits in plaats van alles naar verre servers te sturen"
        },
        {
                  "en": "Cloud computing for navigation",
                  "es": "Computación en la nube para navegación",
                  "de": "Cloud Computing für Navigation",
                  "nl": "Cloud computing voor navigatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Edge computing reduces latency and ensures critical safety decisions can be made instantly without relying on distant cloud servers.",
                  "es": "La computación en el borde reduce latencia y asegura que decisiones críticas de seguridad puedan tomarse instantáneamente sin depender de servidores de nube distantes.",
                  "de": "Edge Computing reduziert Latenz und stellt sicher dass kritische Sicherheitsentscheidungen sofort getroffen werden können ohne auf entfernte Cloud-Server angewiesen zu sein.",
                  "nl": "Edge computing vermindert latentie en zorgt ervoor dat kritieke veiligheidsbeslissingen onmiddellijk kunnen worden genomen zonder afhankelijk te zijn van verre cloudservers."
        }
      },
      {
        question: {
                  "en": "What is 'machine learning' used for in traffic management systems?",
                  "es": "¿Para qué se usa el 'aprendizaje automático' en sistemas de gestión de tráfico?",
                  "de": "Wofür wird 'maschinelles Lernen' in Verkehrsmanagementsystemen verwendet?",
                  "nl": "Waarvoor wordt 'machine learning' gebruikt in verkeersmanagementsystemen?"
        },
        options: [
        {
                  "en": "Analyzing traffic patterns to predict congestion and optimize signal timing",
                  "es": "Analizar patrones de tráfico para predecir congestión y optimizar temporización de semáforos",
                  "de": "Verkehrsmuster analysieren um Staus vorherzusagen und Signalzeiten zu optimieren",
                  "nl": "Verkeerspatronen analyseren om opstoppingen te voorspellen en signaaltiming te optimaliseren"
        },
        {
                  "en": "Teaching traffic lights to change colors",
                  "es": "Enseñar a semáforos a cambiar colores",
                  "de": "Ampeln beibringen Farben zu wechseln",
                  "nl": "Verkeerslichten leren kleuren te veranderen"
        },
        {
                  "en": "Only counting vehicles",
                  "es": "Solo contar vehículos",
                  "de": "Nur Fahrzeuge zählen",
                  "nl": "Alleen voertuigen tellen"
        },
        {
                  "en": "Learning traffic rules from books",
                  "es": "Aprender reglas de tráfico de libros",
                  "de": "Verkehrsregeln aus Büchern lernen",
                  "nl": "Verkeersregels leren uit boeken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "ML algorithms learn from historical traffic data to identify patterns, predict rush hours, and automatically adjust traffic signals for optimal flow.",
                  "es": "Los algoritmos ML aprenden de datos históricos de tráfico para identificar patrones, predecir horas pico y ajustar automáticamente semáforos para flujo óptimo.",
                  "de": "ML-Algorithmen lernen aus historischen Verkehrsdaten um Muster zu identifizieren, Stoßzeiten vorherzusagen und Ampeln automatisch für optimalen Fluss anzupassen.",
                  "nl": "ML-algoritmes leren van historische verkeersdata om patronen te identificeren, spitsuren te voorspellen en verkeerslichten automatisch aan te passen voor optimale doorstroming."
        }
      },
      {
        question: {
                  "en": "What is 'platooning' in autonomous truck transportation?",
                  "es": "¿Qué es el 'peloteo' en transporte de camiones autónomos?",
                  "de": "Was ist 'Platooning' im autonomen LKW-Transport?",
                  "nl": "Wat is 'platooning' in autonoom vrachtwagentransport?"
        },
        options: [
        {
                  "en": "Multiple autonomous trucks following each other closely in a convoy using AI coordination",
                  "es": "Múltiples camiones autónomos siguiéndose de cerca en convoy usando coordinación IA",
                  "de": "Mehrere autonome LKWs die sich in einem Konvoi dicht folgen mit KI-Koordination",
                  "nl": "Meerdere autonome vrachtwagens die elkaar dicht volgen in een konvooi met AI-coördinatie"
        },
        {
                  "en": "Single truck transportation only",
                  "es": "Solo transporte de un camión",
                  "de": "Nur Ein-LKW-Transport",
                  "nl": "Alleen enkele vrachtwagen transport"
        },
        {
                  "en": "Trucks communicating with satellites",
                  "es": "Camiones comunicándose con satélites",
                  "de": "LKWs kommunizieren mit Satelliten",
                  "nl": "Vrachtwagens communiceren met satellieten"
        },
        {
                  "en": "Trucks driving in random patterns",
                  "es": "Camiones conduciendo en patrones aleatorios",
                  "de": "LKWs fahren in zufälligen Mustern",
                  "nl": "Vrachtwagens rijden in willekeurige patronen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Platooning reduces fuel consumption through improved aerodynamics and allows for more efficient highway usage with AI-controlled spacing.",
                  "es": "El peloteo reduce consumo de combustible mediante aerodinámica mejorada y permite uso más eficiente de autopistas con espaciado controlado por IA.",
                  "de": "Platooning reduziert Kraftstoffverbrauch durch verbesserte Aerodynamik und ermöglicht effizientere Autobahnnutzung mit KI-gesteuertem Abstand.",
                  "nl": "Platooning vermindert brandstofverbruik door verbeterde aerodynamica en maakt efficiënter snelweggebruik mogelijk met AI-gecontroleerde afstand."
        }
      },
      {
        question: {
                  "en": "What is the primary advantage of LiDAR sensors over cameras in autonomous vehicles?",
                  "es": "¿Cuál es la ventaja principal de los sensores LiDAR sobre las cámaras en vehículos autónomos?",
                  "de": "Was ist der Hauptvorteil von LiDAR-Sensoren gegenüber Kameras in autonomen Fahrzeugen?",
                  "nl": "Wat is het hoofdvoordeel van LiDAR-sensoren ten opzichte van camera's in autonome voertuigen?"
        },
        options: [
        {
                  "en": "Provides precise 3D distance measurements regardless of lighting conditions",
                  "es": "Proporciona mediciones precisas de distancia 3D independientemente de las condiciones de iluminación",
                  "de": "Bietet präzise 3D-Entfernungsmessungen unabhängig von Lichtverhältnissen",
                  "nl": "Biedt precieze 3D-afstandsmetingen ongeacht lichtomstandigheden"
        },
        {
                  "en": "Works only during daylight",
                  "es": "Funciona solo durante el día",
                  "de": "Funktioniert nur bei Tageslicht",
                  "nl": "Werkt alleen overdag"
        },
        {
                  "en": "Uses less electrical power",
                  "es": "Usa menos energía eléctrica",
                  "de": "Verbraucht weniger elektrische Energie",
                  "nl": "Gebruikt minder elektrische energie"
        },
        {
                  "en": "Takes better photos of scenery",
                  "es": "Toma mejores fotos del paisaje",
                  "de": "Macht bessere Fotos von der Landschaft",
                  "nl": "Maakt betere foto's van het landschap"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "LiDAR uses laser pulses to create detailed 3D point clouds, providing accurate distance measurements in darkness, fog, or bright sunlight where cameras may struggle.",
                  "es": "LiDAR usa pulsos láser para crear nubes de puntos 3D detalladas, proporcionando mediciones precisas de distancia en oscuridad, niebla o luz solar brillante donde las cámaras pueden tener dificultades.",
                  "de": "LiDAR nutzt Laserpulse zur Erstellung detaillierter 3D-Punktwolken und bietet genaue Entfernungsmessungen bei Dunkelheit, Nebel oder hellem Sonnenlicht, wo Kameras Schwierigkeiten haben können.",
                  "nl": "LiDAR gebruikt laserpulsen om gedetailleerde 3D-puntenwolken te creëren, waardoor nauwkeurige afstandsmetingen worden geboden in duisternis, mist of fel zonlicht waar camera's kunnen falen."
        }
      },
      {
        question: {
                  "en": "How does radar technology contribute to autonomous vehicle perception?",
                  "es": "¿Cómo contribuye la tecnología radar a la percepción de vehículos autónomos?",
                  "de": "Wie trägt Radartechnologie zur Wahrnehmung autonomer Fahrzeuge bei?",
                  "nl": "Hoe draagt radartechnologie bij aan de perceptie van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Only works for metal objects",
                  "es": "Solo funciona para objetos metálicos",
                  "de": "Funktioniert nur bei Metallobjekten",
                  "nl": "Werkt alleen voor metalen objecten"
        },
        {
                  "en": "Detects objects and measures their velocity even through weather conditions like rain and fog",
                  "es": "Detecta objetos y mide su velocidad incluso en condiciones climáticas como lluvia y niebla",
                  "de": "Erkennt Objekte und misst ihre Geschwindigkeit auch bei Wetterbedingungen wie Regen und Nebel",
                  "nl": "Detecteert objecten en meet hun snelheid zelfs bij weersomstandigheden zoals regen en mist"
        },
        {
                  "en": "Requires direct line of sight always",
                  "es": "Requiere línea de vista directa siempre",
                  "de": "Erfordert immer direkte Sichtlinie",
                  "nl": "Vereist altijd directe zichtlijn"
        },
        {
                  "en": "Provides color information about objects",
                  "es": "Proporciona información de color sobre objetos",
                  "de": "Liefert Farbinformationen über Objekte",
                  "nl": "Geeft kleurinformatie over objecten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Radar uses radio waves that can penetrate weather conditions and detect moving objects with Doppler shift measurements, making it crucial for all-weather autonomous driving.",
                  "es": "El radar usa ondas de radio que pueden penetrar condiciones climáticas y detectar objetos en movimiento con mediciones de desplazamiento Doppler, haciéndolo crucial para conducción autónoma en cualquier clima.",
                  "de": "Radar nutzt Radiowellen die Wetterbedingungen durchdringen und bewegende Objekte mit Doppler-Verschiebungsmessungen erkennen können, was es für autonomes Fahren bei jedem Wetter entscheidend macht.",
                  "nl": "Radar gebruikt radiogolven die weersomstandigheden kunnen doordringen en bewegende objecten kunnen detecteren met Doppler-verschuivingsmetingen, waardoor het cruciaal is voor autonoom rijden bij elk weer."
        }
      },
      {
        question: {
                  "en": "What is 'point cloud processing' in LiDAR-based perception systems?",
                  "es": "¿Qué es el 'procesamiento de nube de puntos' en sistemas de percepción basados en LiDAR?",
                  "de": "Was ist 'Punktwolken-Verarbeitung' in LiDAR-basierten Wahrnehmungssystemen?",
                  "nl": "Wat is 'puntenwolk verwerking' in LiDAR-gebaseerde perceptiesystemen?"
        },
        options: [
        {
                  "en": "Converting 3D laser scan data into recognizable objects and environmental features",
                  "es": "Convertir datos de escaneo láser 3D en objetos reconocibles y características ambientales",
                  "de": "3D-Laserscandaten in erkennbare Objekte und Umgebungsmerkmale umwandeln",
                  "nl": "3D-laserscandata omzetten naar herkenbare objecten en omgevingskenmerken"
        },
        {
                  "en": "Processing weather cloud formations",
                  "es": "Procesar formaciones de nubes meteorológicas",
                  "de": "Wetterwolkenformationen verarbeiten",
                  "nl": "Weerwolkformaties verwerken"
        },
        {
                  "en": "Storing data in cloud servers",
                  "es": "Almacenar datos en servidores de nube",
                  "de": "Daten in Cloud-Servern speichern",
                  "nl": "Data opslaan in cloudservers"
        },
        {
                  "en": "Connecting multiple sensors together",
                  "es": "Conectar múltiples sensores juntos",
                  "de": "Mehrere Sensoren miteinander verbinden",
                  "nl": "Meerdere sensoren met elkaar verbinden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Point cloud processing analyzes millions of 3D points from LiDAR to identify vehicles, pedestrians, buildings, and road features using advanced algorithms and machine learning.",
                  "es": "El procesamiento de nube de puntos analiza millones de puntos 3D de LiDAR para identificar vehículos, peatones, edificios y características de carretera usando algoritmos avanzados y aprendizaje automático.",
                  "de": "Punktwolken-Verarbeitung analysiert Millionen von 3D-Punkten vom LiDAR um Fahrzeuge, Fußgänger, Gebäude und Straßenmerkmale mit fortgeschrittenen Algorithmen und maschinellem Lernen zu identifizieren.",
                  "nl": "Puntenwolk verwerking analyseert miljoenen 3D-punten van LiDAR om voertuigen, voetgangers, gebouwen en wegkenmerken te identificeren met geavanceerde algoritmes en machine learning."
        }
      },
      {
        question: {
                  "en": "What is the role of IMU (Inertial Measurement Unit) sensors in autonomous vehicles?",
                  "es": "¿Cuál es el papel de los sensores IMU (Unidad de Medición Inercial) en vehículos autónomos?",
                  "de": "Was ist die Rolle von IMU (Inertialmesseinheit) Sensoren in autonomen Fahrzeugen?",
                  "nl": "Wat is de rol van IMU (Inertial Measurement Unit) sensoren in autonome voertuigen?"
        },
        options: [
        {
                  "en": "Control the vehicle's air conditioning",
                  "es": "Controlar el aire acondicionado del vehículo",
                  "de": "Klimaanlage des Fahrzeugs steuern",
                  "nl": "Airconditioning van het voertuig regelen"
        },
        {
                  "en": "Measure vehicle orientation, acceleration, and rotational movement to understand vehicle dynamics",
                  "es": "Medir orientación, aceleración y movimiento rotacional del vehículo para entender dinámicas vehiculares",
                  "de": "Fahrzeugausrichtung, Beschleunigung und Rotationsbewegung messen um Fahrzeugdynamik zu verstehen",
                  "nl": "Voertuigoriëntatie, acceleratie en rotationele beweging meten om voertuigdynamiek te begrijpen"
        },
        {
                  "en": "Monitor fuel consumption only",
                  "es": "Monitorear solo consumo de combustible",
                  "de": "Nur Kraftstoffverbrauch überwachen",
                  "nl": "Alleen brandstofverbruik monitoren"
        },
        {
                  "en": "Detect radio signals from other vehicles",
                  "es": "Detectar señales de radio de otros vehículos",
                  "de": "Funksignale von anderen Fahrzeugen erkennen",
                  "nl": "Radiosignalen van andere voertuigen detecteren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "IMU sensors provide crucial motion data that helps autonomous vehicles understand their own movement, maintain stability, and make precise navigation decisions.",
                  "es": "Los sensores IMU proporcionan datos de movimiento cruciales que ayudan a vehículos autónomos a entender su propio movimiento, mantener estabilidad y tomar decisiones de navegación precisas.",
                  "de": "IMU-Sensoren liefern entscheidende Bewegungsdaten die autonomen Fahrzeugen helfen ihre eigene Bewegung zu verstehen, Stabilität zu bewahren und präzise Navigationsentscheidungen zu treffen.",
                  "nl": "IMU-sensoren leveren cruciale bewegingsdata die autonome voertuigen helpen hun eigen beweging te begrijpen, stabiliteit te behouden en precieze navigatiebeslissingen te nemen."
        }
      },
      {
        question: {
                  "en": "How do thermal infrared sensors enhance autonomous vehicle perception?",
                  "es": "¿Cómo mejoran los sensores infrarrojos térmicos la percepción de vehículos autónomos?",
                  "de": "Wie verbessern thermische Infrarotsensoren die Wahrnehmung autonomer Fahrzeuge?",
                  "nl": "Hoe verbeteren thermische infraroodsensoren de perceptie van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Control vehicle interior climate",
                  "es": "Controlar clima interior del vehículo",
                  "de": "Fahrzeuginnenklima kontrollieren",
                  "nl": "Voertuig binnenklimaat regelen"
        },
        {
                  "en": "Measure vehicle engine temperature only",
                  "es": "Medir solo temperatura del motor del vehículo",
                  "de": "Nur Fahrzeugmotortemperatur messen",
                  "nl": "Alleen voertuigmotortemperatuur meten"
        },
        {
                  "en": "Detect only metal objects",
                  "es": "Detectar solo objetos metálicos",
                  "de": "Nur Metallobjekte erkennen",
                  "nl": "Alleen metalen objecten detecteren"
        },
        {
                  "en": "Detect heat signatures of people and animals, especially useful in low-light conditions",
                  "es": "Detectan firmas de calor de personas y animales, especialmente útiles en condiciones de poca luz",
                  "de": "Erkennen Wärmesignaturen von Menschen und Tieren, besonders nützlich bei schwachen Lichtverhältnissen",
                  "nl": "Detecteren warmtehandtekeningen van mensen en dieren, vooral nuttig bij weinig licht"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Thermal sensors detect heat radiation, making them valuable for spotting pedestrians, cyclists, and animals that might be invisible to regular cameras in darkness or adverse weather.",
                  "es": "Los sensores térmicos detectan radiación de calor, haciéndolos valiosos para detectar peatones, ciclistas y animales que podrían ser invisibles para cámaras regulares en oscuridad o clima adverso.",
                  "de": "Thermische Sensoren erkennen Wärmestrahlung und sind wertvoll zum Erkennen von Fußgängern, Radfahrern und Tieren die für normale Kameras bei Dunkelheit oder schlechtem Wetter unsichtbar sein könnten.",
                  "nl": "Thermische sensoren detecteren warmtestraling, waardoor ze waardevol zijn voor het spotten van voetgangers, fietsers en dieren die onzichtbaar zouden kunnen zijn voor gewone camera's in duisternis of slecht weer."
        }
      },
      {
        question: {
                  "en": "What is 'sensor calibration' and why is it critical for autonomous vehicles?",
                  "es": "¿Qué es la 'calibración de sensores' y por qué es crítica para vehículos autónomos?",
                  "de": "Was ist 'Sensorkalibrierung' und warum ist sie für autonome Fahrzeuge kritisch?",
                  "nl": "Wat is 'sensor kalibratie' en waarom is het cruciaal voor autonome voertuigen?"
        },
        options: [
        {
                  "en": "Aligning and synchronizing multiple sensors to ensure accurate and consistent measurements",
                  "es": "Alinear y sincronizar múltiples sensores para asegurar mediciones precisas y consistentes",
                  "de": "Mehrere Sensoren ausrichten und synchronisieren um genaue und konsistente Messungen sicherzustellen",
                  "nl": "Meerdere sensoren uitlijnen en synchroniseren om nauwkeurige en consistente metingen te waarborgen"
        },
        {
                  "en": "Installing new sensors periodically",
                  "es": "Instalar nuevos sensores periódicamente",
                  "de": "Regelmäßig neue Sensoren installieren",
                  "nl": "Periodiek nieuwe sensoren installeren"
        },
        {
                  "en": "Adjusting sensor brightness settings",
                  "es": "Ajustar configuraciones de brillo del sensor",
                  "de": "Sensorhelligkeitseinstellungen anpassen",
                  "nl": "Sensor helderheid instellingen aanpassen"
        },
        {
                  "en": "Cleaning sensor surfaces only",
                  "es": "Solo limpiar superficies de sensores",
                  "de": "Nur Sensoroberflächen reinigen",
                  "nl": "Alleen sensoroppervlakken schoonmaken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Proper sensor calibration ensures that data from different sensors (cameras, LiDAR, radar) can be accurately combined and that the vehicle's perception of its environment is precise.",
                  "es": "La calibración adecuada de sensores asegura que los datos de diferentes sensores (cámaras, LiDAR, radar) puedan combinarse con precisión y que la percepción del vehículo de su entorno sea precisa.",
                  "de": "Ordnungsgemäße Sensorkalibrierung stellt sicher dass Daten verschiedener Sensoren (Kameras, LiDAR, Radar) genau kombiniert werden können und die Fahrzeugwahrnehmung der Umgebung präzise ist.",
                  "nl": "Juiste sensorkalibratie zorgt ervoor dat data van verschillende sensoren (camera's, LiDAR, radar) nauwkeurig kunnen worden gecombineerd en dat de perceptie van het voertuig van zijn omgeving precies is."
        }
      },
      {
        question: {
                  "en": "What is the purpose of 'multi-spectral imaging' in advanced vehicle perception systems?",
                  "es": "¿Cuál es el propósito de las 'imágenes multiespectrales' en sistemas avanzados de percepción vehicular?",
                  "de": "Was ist der Zweck von 'multispektraler Bildgebung' in fortgeschrittenen Fahrzeugwahrnehmungssystemen?",
                  "nl": "Wat is het doel van 'multi-spectrale beeldvorming' in geavanceerde voertuigperceptiesystemen?"
        },
        options: [
        {
                  "en": "Capture images across different wavelengths to detect materials and conditions invisible to normal cameras",
                  "es": "Capturar imágenes a través de diferentes longitudes de onda para detectar materiales y condiciones invisibles para cámaras normales",
                  "de": "Bilder über verschiedene Wellenlängen erfassen um Materialien und Bedingungen zu erkennen die für normale Kameras unsichtbar sind",
                  "nl": "Beelden vastleggen over verschillende golflengtes om materialen en condities te detecteren die onzichtbaar zijn voor normale camera's"
        },
        {
                  "en": "Increase photo resolution only",
                  "es": "Solo aumentar resolución de foto",
                  "de": "Nur Fotoauflösung erhöhen",
                  "nl": "Alleen fotoresolutie verhogen"
        },
        {
                  "en": "Take multiple photos at the same time",
                  "es": "Tomar múltiples fotos al mismo tiempo",
                  "de": "Mehrere Fotos gleichzeitig aufnehmen",
                  "nl": "Meerdere foto's tegelijk maken"
        },
        {
                  "en": "Adjust camera focus automatically",
                  "es": "Ajustar enfoque de cámara automáticamente",
                  "de": "Kamerafokus automatisch einstellen",
                  "nl": "Camera focus automatisch aanpassen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Multi-spectral imaging can detect road surface conditions, identify specific materials, spot oil spills or ice, and reveal details that standard RGB cameras cannot see.",
                  "es": "Las imágenes multiespectrales pueden detectar condiciones de superficie de carretera, identificar materiales específicos, detectar derrames de aceite o hielo, y revelar detalles que cámaras RGB estándar no pueden ver.",
                  "de": "Multispektrale Bildgebung kann Straßenoberflächenbedingungen erkennen, spezifische Materialien identifizieren, Ölverschmutzungen oder Eis entdecken und Details offenbaren die Standard-RGB-Kameras nicht sehen können.",
                  "nl": "Multi-spectrale beeldvorming kan wegoppervlakte condities detecteren, specifieke materialen identificeren, olievlekken of ijs spotten, en details onthullen die standaard RGB-camera's niet kunnen zien."
        }
      },
      {
        question: {
                  "en": "How do 'solid-state LiDAR' systems differ from traditional spinning LiDAR?",
                  "es": "¿Cómo difieren los sistemas 'LiDAR de estado sólido' del LiDAR giratorio tradicional?",
                  "de": "Wie unterscheiden sich 'Solid-State-LiDAR' Systeme von herkömmlichem rotierendem LiDAR?",
                  "nl": "Hoe verschillen 'solid-state LiDAR' systemen van traditionele draaiende LiDAR?"
        },
        options: [
        {
                  "en": "They require more power to operate",
                  "es": "Requieren más energía para operar",
                  "de": "Sie benötigen mehr Energie zum Betrieb",
                  "nl": "Ze hebben meer stroom nodig om te werken"
        },
        {
                  "en": "No moving parts, making them more reliable, compact, and cost-effective for mass production",
                  "es": "Sin partes móviles, haciéndolos más confiables, compactos y rentables para producción masiva",
                  "de": "Keine beweglichen Teile, wodurch sie zuverlässiger, kompakter und kostengünstiger für Massenproduktion sind",
                  "nl": "Geen bewegende onderdelen, waardoor ze betrouwbaarder, compacter en kosteneffectiever zijn voor massaproductie"
        },
        {
                  "en": "They use different colored lasers only",
                  "es": "Solo usan láseres de diferentes colores",
                  "de": "Sie verwenden nur verschiedenfarbige Laser",
                  "nl": "Ze gebruiken alleen verschillende gekleurde lasers"
        },
        {
                  "en": "They spin faster than traditional LiDAR",
                  "es": "Giran más rápido que el LiDAR tradicional",
                  "de": "Sie rotieren schneller als traditionelles LiDAR",
                  "nl": "Ze draaien sneller dan traditionele LiDAR"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Solid-state LiDAR uses electronic beam steering instead of mechanical rotation, offering better durability, smaller size, and lower manufacturing costs for widespread automotive adoption.",
                  "es": "LiDAR de estado sólido usa dirección de haz electrónica en lugar de rotación mecánica, ofreciendo mejor durabilidad, tamaño menor y costos de fabricación más bajos para adopción automotriz generalizada.",
                  "de": "Solid-State-LiDAR nutzt elektronische Strahlsteuerung statt mechanischer Rotation und bietet bessere Haltbarkeit, kleinere Größe und niedrigere Herstellungskosten für breite Automobiladoption.",
                  "nl": "Solid-state LiDAR gebruikt elektronische bundel sturing in plaats van mechanische rotatie, wat betere duurzaamheid, kleinere afmetingen en lagere productiekosten biedt voor wijdverspreide automotive adoptie."
        }
      },
      {
        question: {
                  "en": "What is 'radar cross-section' and how does it affect object detection?",
                  "es": "¿Qué es la 'sección transversal del radar' y cómo afecta la detección de objetos?",
                  "de": "Was ist 'Radarquerschnitt' und wie beeinflusst er die Objekterkennung?",
                  "nl": "Wat is 'radar cross-sectie' en hoe beïnvloedt het objectdetectie?"
        },
        options: [
        {
                  "en": "A measure of how much an object reflects radar signals back to the sensor",
                  "es": "Una medida de cuánto un objeto refleja señales de radar de vuelta al sensor",
                  "de": "Ein Maß dafür wie stark ein Objekt Radarsignale zurück zum Sensor reflektiert",
                  "nl": "Een maat voor hoeveel een object radarsignalen terug naar de sensor reflecteert"
        },
        {
                  "en": "The distance radar can detect objects",
                  "es": "La distancia que el radar puede detectar objetos",
                  "de": "Die Entfernung die Radar Objekte erkennen kann",
                  "nl": "De afstand waarop radar objecten kan detecteren"
        },
        {
                  "en": "The physical size of radar equipment",
                  "es": "El tamaño físico del equipo de radar",
                  "de": "Die physische Größe der Radarausrüstung",
                  "nl": "De fysieke grootte van radarapparatuur"
        },
        {
                  "en": "The speed of radar signal transmission",
                  "es": "La velocidad de transmisión de señal de radar",
                  "de": "Die Geschwindigkeit der Radarsignalübertragung",
                  "nl": "De snelheid van radarsignaal transmissie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Objects with larger radar cross-sections (like metal vehicles) are easier to detect, while smaller cross-sections (like pedestrians or cyclists) require more sensitive radar systems.",
                  "es": "Objetos con secciones transversales de radar más grandes (como vehículos metálicos) son más fáciles de detectar, mientras secciones transversales más pequeñas (como peatones o ciclistas) requieren sistemas de radar más sensibles.",
                  "de": "Objekte mit größeren Radarquerschnitten (wie Metallfahrzeuge) sind leichter zu erkennen, während kleinere Querschnitte (wie Fußgänger oder Radfahrer) sensiblere Radarsysteme erfordern.",
                  "nl": "Objecten met grotere radar cross-secties (zoals metalen voertuigen) zijn makkelijker te detecteren, terwijl kleinere cross-secties (zoals voetgangers of fietsers) gevoeliger radarsystemen vereisen."
        }
      },
      {
        question: {
                  "en": "What is 'sensor redundancy' in autonomous vehicle safety systems?",
                  "es": "¿Qué es la 'redundancia de sensores' en sistemas de seguridad de vehículos autónomos?",
                  "de": "Was ist 'Sensorredundanz' in Sicherheitssystemen autonomer Fahrzeuge?",
                  "nl": "Wat is 'sensor redundantie' in veiligheidssystemen van autonome voertuigen?"
        },
        options: [
        {
                  "en": "Installing extra sensors for decoration",
                  "es": "Instalar sensores extra para decoración",
                  "de": "Extra Sensoren zur Dekoration installieren",
                  "nl": "Extra sensoren installeren voor decoratie"
        },
        {
                  "en": "Using only one type of sensor for simplicity",
                  "es": "Usar solo un tipo de sensor para simplicidad",
                  "de": "Nur einen Sensortyp für Einfachheit verwenden",
                  "nl": "Slechts één type sensor gebruiken voor eenvoud"
        },
        {
                  "en": "Replacing sensors frequently",
                  "es": "Reemplazar sensores frecuentemente",
                  "de": "Sensoren häufig ersetzen",
                  "nl": "Sensoren regelmatig vervangen"
        },
        {
                  "en": "Having multiple sensors of the same or different types to ensure system continues functioning if one fails",
                  "es": "Tener múltiples sensores del mismo o diferentes tipos para asegurar que el sistema continúe funcionando si uno falla",
                  "de": "Mehrere Sensoren gleicher oder verschiedener Typen haben um sicherzustellen dass das System weiterfunktioniert wenn einer ausfällt",
                  "nl": "Meerdere sensoren van hetzelfde of verschillende types hebben om ervoor te zorgen dat het systeem blijft functioneren als er één faalt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sensor redundancy is crucial for safety-critical applications, ensuring that if a LiDAR, camera, or radar fails, other sensors can compensate and maintain safe operation.",
                  "es": "La redundancia de sensores es crucial para aplicaciones críticas de seguridad, asegurando que si un LiDAR, cámara o radar falla, otros sensores pueden compensar y mantener operación segura.",
                  "de": "Sensorredundanz ist für sicherheitskritische Anwendungen entscheidend und stellt sicher dass wenn LiDAR, Kamera oder Radar ausfallen, andere Sensoren kompensieren und sicheren Betrieb aufrechterhalten können.",
                  "nl": "Sensor redundantie is cruciaal voor veiligheidskritische toepassingen, waarbij wordt gegarandeerd dat als een LiDAR, camera of radar faalt, andere sensoren kunnen compenseren en veilige werking kunnen handhaven."
        }
      },
      {
        question: {
                  "en": "How do 'automotive-grade' sensors differ from consumer-grade sensors?",
                  "es": "¿Cómo difieren los sensores de 'grado automotriz' de los sensores de grado de consumidor?",
                  "de": "Wie unterscheiden sich 'Automotive-Grade' Sensoren von Consumer-Grade Sensoren?",
                  "nl": "Hoe verschillen 'automotive-grade' sensoren van consumer-grade sensoren?"
        },
        options: [
        {
                  "en": "They work only in vehicles",
                  "es": "Solo funcionan en vehículos",
                  "de": "Sie funktionieren nur in Fahrzeugen",
                  "nl": "Ze werken alleen in voertuigen"
        },
        {
                  "en": "They have better marketing",
                  "es": "Tienen mejor marketing",
                  "de": "Sie haben besseres Marketing",
                  "nl": "Ze hebben betere marketing"
        },
        {
                  "en": "Built to withstand extreme temperatures, vibrations, and long-term reliability requirements",
                  "es": "Construidos para resistir temperaturas extremas, vibraciones y requisitos de confiabilidad a largo plazo",
                  "de": "Gebaut um extremen Temperaturen, Vibrationen und langfristigen Zuverlässigkeitsanforderungen standzuhalten",
                  "nl": "Gebouwd om extreme temperaturen, trillingen en langetermijn betrouwbaarheidseisen te weerstaan"
        },
        {
                  "en": "They are just more expensive versions",
                  "es": "Son solo versiones más caras",
                  "de": "Sie sind nur teurere Versionen",
                  "nl": "Het zijn alleen duurdere versies"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Automotive-grade sensors must meet strict quality standards for temperature ranges (-40°C to +85°C), shock resistance, electromagnetic compatibility, and 15+ year lifespans.",
                  "es": "Los sensores de grado automotriz deben cumplir estrictos estándares de calidad para rangos de temperatura (-40°C a +85°C), resistencia a golpes, compatibilidad electromagnética y vida útil de 15+ años.",
                  "de": "Automotive-Grade Sensoren müssen strenge Qualitätsstandards für Temperaturbereiche (-40°C bis +85°C), Stoßfestigkeit, elektromagnetische Verträglichkeit und 15+ Jahre Lebensdauer erfüllen.",
                  "nl": "Automotive-grade sensoren moeten voldoen aan strikte kwaliteitsnormen voor temperatuurbereiken (-40°C tot +85°C), schokbestendigheid, elektromagnetische compatibiliteit en levensduur van 15+ jaar."
        }
      },
      {
        question: {
                  "en": "What is 'time-of-flight' measurement in LiDAR and radar systems?",
                  "es": "¿Qué es la medición de 'tiempo de vuelo' en sistemas LiDAR y radar?",
                  "de": "Was ist 'Time-of-Flight' Messung in LiDAR und Radarsystemen?",
                  "nl": "Wat is 'time-of-flight' meting in LiDAR en radarsystemen?"
        },
        options: [
        {
                  "en": "Timing traffic light changes",
                  "es": "Cronometrar cambios de semáforos",
                  "de": "Ampelwechsel timen",
                  "nl": "Verkeerslichtveranderingen timen"
        },
        {
                  "en": "Measuring how fast vehicles are moving",
                  "es": "Medir qué tan rápido se mueven los vehículos",
                  "de": "Messen wie schnell Fahrzeuge sich bewegen",
                  "nl": "Meten hoe snel voertuigen bewegen"
        },
        {
                  "en": "Calculating flight paths of aircraft",
                  "es": "Calcular rutas de vuelo de aeronaves",
                  "de": "Flugbahnen von Flugzeugen berechnen",
                  "nl": "Vliegroutes van vliegtuigen berekenen"
        },
        {
                  "en": "Calculating distance by measuring how long it takes for signals to travel to objects and back",
                  "es": "Calcular distancia midiendo cuánto tiempo toma para que las señales viajen a objetos y regresen",
                  "de": "Entfernung berechnen durch Messen wie lange Signale brauchen um zu Objekten und zurück zu reisen",
                  "nl": "Afstand berekenen door te meten hoe lang het duurt voor signalen om naar objecten en terug te reizen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Time-of-flight works on the principle that distance equals speed times time - by knowing signal speed and measuring travel time, precise distances can be calculated.",
                  "es": "El tiempo de vuelo funciona en el principio de que distancia es igual a velocidad por tiempo - conociendo la velocidad de la señal y midiendo tiempo de viaje, distancias precisas pueden calcularse.",
                  "de": "Time-of-Flight funktioniert nach dem Prinzip dass Entfernung gleich Geschwindigkeit mal Zeit ist - durch Kenntnis der Signalgeschwindigkeit und Messen der Reisezeit können präzise Entfernungen berechnet werden.",
                  "nl": "Time-of-flight werkt op het principe dat afstand gelijk is aan snelheid maal tijd - door de signaalsnelheid te kennen en reistijd te meten, kunnen precieze afstanden worden berekend."
        }
      },
      {
        question: {
                  "en": "What is 'doppler shift' and how do radar systems use it?",
                  "es": "¿Qué es el 'desplazamiento Doppler' y cómo lo usan los sistemas de radar?",
                  "de": "Was ist 'Doppler-Verschiebung' und wie nutzen Radarsysteme sie?",
                  "nl": "Wat is 'doppler verschuiving' en hoe gebruiken radarsystemen het?"
        },
        options: [
        {
                  "en": "Physical movement of radar equipment",
                  "es": "Movimiento físico del equipo de radar",
                  "de": "Physische Bewegung der Radarausrüstung",
                  "nl": "Fysieke beweging van radarapparatuur"
        },
        {
                  "en": "Rotation of radar antenna",
                  "es": "Rotación de antena de radar",
                  "de": "Rotation der Radarantenne",
                  "nl": "Rotatie van radarantenne"
        },
        {
                  "en": "Change in radar signal strength",
                  "es": "Cambio en fuerza de señal de radar",
                  "de": "Änderung der Radarsignalstärke",
                  "nl": "Verandering in radarsignaal sterkte"
        },
        {
                  "en": "Change in frequency of reflected signals used to measure object velocity and direction of movement",
                  "es": "Cambio en frecuencia de señales reflejadas usado para medir velocidad de objeto y dirección de movimiento",
                  "de": "Änderung der Frequenz reflektierter Signale zur Messung von Objektgeschwindigkeit und Bewegungsrichtung",
                  "nl": "Verandering in frequentie van gereflecteerde signalen gebruikt om objectsnelheid en bewegingsrichting te meten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Doppler shift allows radar to distinguish between stationary and moving objects, measure their speed, and determine if they're approaching or moving away from the vehicle.",
                  "es": "El desplazamiento Doppler permite al radar distinguir entre objetos estacionarios y en movimiento, medir su velocidad y determinar si se acercan o se alejan del vehículo.",
                  "de": "Doppler-Verschiebung ermöglicht Radar zwischen stationären und beweglichen Objekten zu unterscheiden, ihre Geschwindigkeit zu messen und zu bestimmen ob sie sich dem Fahrzeug nähern oder sich entfernen.",
                  "nl": "Doppler verschuiving stelt radar in staat om onderscheid te maken tussen stilstaande en bewegende objecten, hun snelheid te meten en te bepalen of ze naderen of wegbewegen van het voertuig."
        }
      },
      {
        question: {
                  "en": "What is 'SLAM' (Simultaneous Localization and Mapping) in autonomous vehicle navigation?",
                  "es": "¿Qué es 'SLAM' (Localización y Mapeo Simultáneo) en navegación de vehículos autónomos?",
                  "de": "Was ist 'SLAM' (Simultane Lokalisierung und Kartierung) in der Navigation autonomer Fahrzeuge?",
                  "nl": "Wat is 'SLAM' (Simultaneous Localization and Mapping) in autonome voertuig navigatie?"
        },
        options: [
        {
                  "en": "Technology that simultaneously builds a map of the environment while tracking the vehicle's location within it",
                  "es": "Tecnología que simultáneamente construye un mapa del entorno mientras rastrea la ubicación del vehículo dentro de él",
                  "de": "Technologie die gleichzeitig eine Karte der Umgebung erstellt während sie die Fahrzeugposition darin verfolgt",
                  "nl": "Technologie die simultaan een kaart van de omgeving bouwt terwijl het de locatie van het voertuig daarbinnen volgt"
        },
        {
                  "en": "System for emergency braking only",
                  "es": "Sistema solo para frenado de emergencia",
                  "de": "System nur für Notbremsung",
                  "nl": "Systeem alleen voor noodremmen"
        },
        {
                  "en": "Method for closing vehicle doors",
                  "es": "Método para cerrar puertas de vehículos",
                  "de": "Methode zum Schließen von Fahrzeugtüren",
                  "nl": "Methode voor het sluiten van voertuigdeuren"
        },
        {
                  "en": "Software for slam-detection in accidents",
                  "es": "Software para detección de golpes en accidentes",
                  "de": "Software zur Aufprall-Erkennung bei Unfällen",
                  "nl": "Software voor botsingsdetectie bij ongelukken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "SLAM algorithms use sensor data to create detailed maps of unknown environments while simultaneously determining the vehicle's precise position, essential for navigation in areas without GPS.",
                  "es": "Los algoritmos SLAM usan datos de sensores para crear mapas detallados de entornos desconocidos mientras simultáneamente determinan la posición precisa del vehículo, esencial para navegación en áreas sin GPS.",
                  "de": "SLAM-Algorithmen nutzen Sensordaten um detaillierte Karten unbekannter Umgebungen zu erstellen während sie gleichzeitig die präzise Fahrzeugposition bestimmen, wesentlich für Navigation in Gebieten ohne GPS.",
                  "nl": "SLAM-algoritmes gebruiken sensordata om gedetailleerde kaarten van onbekende omgevingen te maken terwijl ze tegelijkertijd de precieze voertuigpositie bepalen, essentieel voor navigatie in gebieden zonder GPS."
        }
      },
      {
        question: {
                  "en": "What is millimeter-wave radar technology providing in autonomous vehicles?",
                  "es": "¿Qué está proporcionando la tecnología radar de ondas milimétricas en vehículos autónomos?",
                  "de": "Was bietet Millimeterwellen-Radartechnologie in autonomen Fahrzeugen?",
                  "nl": "Wat biedt millimetergolf radar technologie in autonome voertuigen?"
        },
        options: [
        {
                  "en": "High-resolution object detection and velocity measurement with excellent performance in adverse weather conditions",
                  "es": "Detección de objetos de alta resolución y medición de velocidad con excelente rendimiento en condiciones climáticas adversas",
                  "de": "Hochauflösende Objekterkennung und Geschwindigkeitsmessung mit exzellenter Leistung bei widrigen Wetterbedingungen",
                  "nl": "Hoge-resolutie objectdetectie en snelheidsmeting met uitstekende prestaties bij slechte weersomstandigheden"
        },
        {
                  "en": "Radio wave communication with satellites only",
                  "es": "Comunicación por ondas de radio solo con satélites",
                  "de": "Radiowellen-Kommunikation nur mit Satelliten",
                  "nl": "Radiogolf communicatie alleen met satellieten"
        },
        {
                  "en": "Wave pattern analysis for entertainment",
                  "es": "Análisis de patrones de ondas para entretenimiento",
                  "de": "Wellenmuster-Analyse für Unterhaltung",
                  "nl": "Golfpatroon analyse voor entertainment"
        },
        {
                  "en": "Microwave cooking capabilities in vehicles",
                  "es": "Capacidades de cocción por microondas en vehículos",
                  "de": "Mikrowellen-Kochfähigkeiten in Fahrzeugen",
                  "nl": "Magnetron kookmogelijkheden in voertuigen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Millimeter-wave radar operates at higher frequencies than conventional radar, providing superior range resolution and the ability to distinguish between closely spaced objects even in rain, fog, or snow.",
                  "es": "El radar de ondas milimétricas opera a frecuencias más altas que el radar convencional, proporcionando resolución de rango superior y capacidad para distinguir entre objetos muy cercanos incluso en lluvia, niebla o nieve.",
                  "de": "Millimeterwellen-Radar arbeitet bei höheren Frequenzen als herkömmliches Radar und bietet überlegene Entfernungsauflösung und die Fähigkeit zwischen eng beieinander liegenden Objekten auch bei Regen, Nebel oder Schnee zu unterscheiden.",
                  "nl": "Millimetergolf radar werkt op hogere frequenties dan conventionele radar, biedt superieure afstandsresolutie en het vermogen om onderscheid te maken tussen dicht bij elkaar geplaatste objecten zelfs bij regen, mist of sneeuw."
        }
      },
      {
        question: {
                  "en": "What is 'HD mapping' for autonomous vehicles?",
                  "es": "¿Qué es el 'mapeo HD' para vehículos autónomos?",
                  "de": "Was ist 'HD-Kartierung' für autonome Fahrzeuge?",
                  "nl": "Wat is 'HD mapping' voor autonome voertuigen?"
        },
        options: [
        {
                  "en": "Maps displayed on HD screens only",
                  "es": "Mapas mostrados solo en pantallas HD",
                  "de": "Nur auf HD-Bildschirmen angezeigte Karten",
                  "nl": "Kaarten alleen weergegeven op HD-schermen"
        },
        {
                  "en": "High-definition video recording of routes",
                  "es": "Grabación de video de alta definición de rutas",
                  "de": "Hochauflösende Videoaufnahme von Routen",
                  "nl": "High-definition video-opname van routes"
        },
        {
                  "en": "Highly detailed maps with centimeter-level precision including lane markings, signs, and 3D road features",
                  "es": "Mapas altamente detallados con precisión a nivel de centímetro incluyendo marcas de carril, señales y características 3D de carretera",
                  "de": "Hochdetaillierte Karten mit zentimeterpräzision einschließlich Fahrbahnmarkierungen, Schilder und 3D-Straßenmerkmale",
                  "nl": "Zeer gedetailleerde kaarten met centimeter-niveau precisie inclusief rijstrookmarkeringen, borden en 3D-wegkenmerken"
        },
        {
                  "en": "Hard drive storage of standard maps",
                  "es": "Almacenamiento en disco duro de mapas estándar",
                  "de": "Festplattenspeicherung von Standardkarten",
                  "nl": "Harde schijf opslag van standaard kaarten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "HD maps provide autonomous vehicles with prior knowledge of road geometry, traffic signs, lane configurations, and obstacles, enabling safer navigation and reducing reliance on real-time sensor interpretation.",
                  "es": "Los mapas HD proporcionan a vehículos autónomos conocimiento previo de geometría de carretera, señales de tráfico, configuraciones de carril y obstáculos, habilitando navegación más segura y reduciendo dependencia en interpretación de sensores en tiempo real.",
                  "de": "HD-Karten bieten autonomen Fahrzeugen Vorwissen über Straßengeometrie, Verkehrsschilder, Spurkonfigurationen und Hindernisse, ermöglichen sicherere Navigation und reduzieren Abhängigkeit von Echtzeit-Sensorinterpretation.",
                  "nl": "HD-kaarten bieden autonome voertuigen voorkennis van weggeometrie, verkeersborden, rijstrook configuraties en obstakels, wat veiligere navigatie mogelijk maakt en afhankelijkheid van real-time sensorinterpretatie vermindert."
        }
      },
      {
        question: {
                  "en": "What is 'object tracking' in autonomous vehicle perception?",
                  "es": "¿Qué es el 'rastreo de objetos' en percepción de vehículos autónomos?",
                  "de": "Was ist 'Objektverfolgung' in autonomer Fahrzeugwahrnehmung?",
                  "nl": "Wat is 'object tracking' in autonome voertuigperceptie?"
        },
        options: [
        {
                  "en": "Recording object colors and shapes",
                  "es": "Registrar colores y formas de objetos",
                  "de": "Objektfarben und -formen aufzeichnen",
                  "nl": "Object kleuren en vormen registreren"
        },
        {
                  "en": "Continuously monitoring detected objects across multiple frames to predict their future trajectories",
                  "es": "Monitorear continuamente objetos detectados a través de múltiples fotogramas para predecir sus trayectorias futuras",
                  "de": "Kontinuierliche Überwachung erkannter Objekte über mehrere Frames um ihre zukünftigen Trajektorien vorherzusagen",
                  "nl": "Continu gedetecteerde objecten monitoren over meerdere frames om hun toekomstige trajecten te voorspellen"
        },
        {
                  "en": "GPS tracking of the vehicle only",
                  "es": "Solo rastreo GPS del vehículo",
                  "de": "Nur GPS-Verfolgung des Fahrzeugs",
                  "nl": "Alleen GPS-tracking van het voertuig"
        },
        {
                  "en": "Tracking vehicle maintenance schedules",
                  "es": "Rastrear horarios de mantenimiento de vehículos",
                  "de": "Fahrzeugwartungspläne verfolgen",
                  "nl": "Voertuig onderhoudsschema's volgen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Object tracking maintains identity and monitors movement of pedestrians, vehicles, and other objects over time, enabling the system to anticipate behavior and plan safe maneuvers.",
                  "es": "El rastreo de objetos mantiene identidad y monitorea movimiento de peatones, vehículos y otros objetos con el tiempo, habilitando al sistema anticipar comportamiento y planificar maniobras seguras.",
                  "de": "Objektverfolgung erhält Identität und überwacht Bewegung von Fußgängern, Fahrzeugen und anderen Objekten über Zeit, ermöglicht dem System Verhalten vorherzusehen und sichere Manöver zu planen.",
                  "nl": "Object tracking behoudt identiteit en monitort beweging van voetgangers, voertuigen en andere objecten in de tijd, waardoor het systeem gedrag kan anticiperen en veilige manoeuvres kan plannen."
        }
      },
      {
        question: {
                  "en": "What is 'semantic scene understanding' in AI perception systems?",
                  "es": "¿Qué es la 'comprensión semántica de escena' en sistemas de percepción IA?",
                  "de": "Was ist 'semantisches Szenenverständnis' in KI-Wahrnehmungssystemen?",
                  "nl": "Wat is 'semantisch scène begrip' in AI perceptiesystemen?"
        },
        options: [
        {
                  "en": "Semantic web browsing in vehicles",
                  "es": "Navegación web semántica en vehículos",
                  "de": "Semantisches Webbrowsing in Fahrzeugen",
                  "nl": "Semantisch web browsen in voertuigen"
        },
        {
                  "en": "Scene detection for photography",
                  "es": "Detección de escena para fotografía",
                  "de": "Szenenerkennung für Fotografie",
                  "nl": "Scène detectie voor fotografie"
        },
        {
                  "en": "Understanding only traffic signs meanings",
                  "es": "Entender solo significados de señales de tráfico",
                  "de": "Nur Verkehrsschildbedeutungen verstehen",
                  "nl": "Alleen verkeersbord betekenissen begrijpen"
        },
        {
                  "en": "Identifying not just what objects are but understanding their relationships and context",
                  "es": "Identificar no solo qué son los objetos sino entender sus relaciones y contexto",
                  "de": "Nicht nur identifizieren was Objekte sind sondern ihre Beziehungen und Kontext verstehen",
                  "nl": "Niet alleen identificeren wat objecten zijn maar hun relaties en context begrijpen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Semantic understanding allows vehicles to comprehend complex scenarios like construction zones, understand that a school zone means children may be present, or recognize emergency situations requiring special responses.",
                  "es": "La comprensión semántica permite a vehículos comprender escenarios complejos como zonas de construcción, entender que una zona escolar significa que niños pueden estar presentes, o reconocer situaciones de emergencia requiriendo respuestas especiales.",
                  "de": "Semantisches Verständnis ermöglicht Fahrzeugen komplexe Szenarien wie Baustellen zu begreifen, zu verstehen dass eine Schulzone bedeutet dass Kinder anwesend sein können, oder Notsituationen zu erkennen die besondere Reaktionen erfordern.",
                  "nl": "Semantisch begrip stelt voertuigen in staat om complexe scenario's zoals bouwzones te begrijpen, te begrijpen dat een schoolzone betekent dat kinderen aanwezig kunnen zijn, of noodsituaties te herkennen die speciale reacties vereisen."
        }
      },
      {
        question: {
                  "en": "What is 'occlusion handling' in object detection systems?",
                  "es": "¿Qué es el 'manejo de oclusión' en sistemas de detección de objetos?",
                  "de": "Was ist 'Okklusionsbehandlung' in Objekterkennungssystemen?",
                  "nl": "Wat is 'occlusie afhandeling' in objectdetectie systemen?"
        },
        options: [
        {
                  "en": "Blocking unwanted sensor data",
                  "es": "Bloquear datos no deseados de sensores",
                  "de": "Unerwünschte Sensordaten blockieren",
                  "nl": "Ongewenste sensordata blokkeren"
        },
        {
                  "en": "Closing sensor covers when not in use",
                  "es": "Cerrar cubiertas de sensores cuando no están en uso",
                  "de": "Sensorabdeckungen schließen wenn nicht in Gebrauch",
                  "nl": "Sensorafdekkingen sluiten wanneer niet in gebruik"
        },
        {
                  "en": "Detecting and tracking partially hidden objects behind other objects or obstacles",
                  "es": "Detectar y rastrear objetos parcialmente ocultos detrás de otros objetos u obstáculos",
                  "de": "Teilweise verdeckte Objekte hinter anderen Objekten oder Hindernissen erkennen und verfolgen",
                  "nl": "Gedeeltelijk verborgen objecten achter andere objecten of obstakels detecteren en volgen"
        },
        {
                  "en": "Handling vehicle occlusion in parking",
                  "es": "Manejar oclusión de vehículo al estacionar",
                  "de": "Fahrzeug-Okklusion beim Parken handhaben",
                  "nl": "Voertuig occlusie bij parkeren afhandelen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Occlusion handling enables autonomous vehicles to maintain awareness of objects even when they're partially obscured, predicting their continued presence and movement behind obstacles.",
                  "es": "El manejo de oclusión habilita a vehículos autónomos mantener conciencia de objetos incluso cuando están parcialmente oscurecidos, prediciendo su presencia continua y movimiento detrás de obstáculos.",
                  "de": "Okklusionsbehandlung ermöglicht autonomen Fahrzeugen das Bewusstsein für Objekte aufrechtzuerhalten auch wenn sie teilweise verdeckt sind, sagt ihre fortgesetzte Präsenz und Bewegung hinter Hindernissen voraus.",
                  "nl": "Occlusie afhandeling stelt autonome voertuigen in staat om bewustzijn van objecten te behouden zelfs wanneer ze gedeeltelijk verborgen zijn, waarbij hun voortdurende aanwezigheid en beweging achter obstakels worden voorspeld."
        }
      },
      {
        question: {
                  "en": "What is 'camera-radar fusion' improving in autonomous perception?",
                  "es": "¿Qué está mejorando la 'fusión de cámara-radar' en percepción autónoma?",
                  "de": "Was verbessert 'Kamera-Radar-Fusion' in autonomer Wahrnehmung?",
                  "nl": "Wat verbetert 'camera-radar fusie' in autonome perceptie?"
        },
        options: [
        {
                  "en": "Using camera and radar separately",
                  "es": "Usar cámara y radar por separado",
                  "de": "Kamera und Radar separat verwenden",
                  "nl": "Camera en radar afzonderlijk gebruiken"
        },
        {
                  "en": "Combining visual detail from cameras with precise distance and velocity data from radar",
                  "es": "Combinar detalle visual de cámaras con datos precisos de distancia y velocidad de radar",
                  "de": "Visuelle Details von Kameras mit präzisen Entfernungs- und Geschwindigkeitsdaten von Radar kombinieren",
                  "nl": "Visueel detail van camera's combineren met precieze afstand en snelheidsdata van radar"
        },
        {
                  "en": "Physically attaching cameras to radar units",
                  "es": "Adjuntar físicamente cámaras a unidades de radar",
                  "de": "Kameras physisch an Radareinheiten befestigen",
                  "nl": "Camera's fysiek aan radareenheden bevestigen"
        },
        {
                  "en": "Radar controlling camera settings",
                  "es": "Radar controlando configuraciones de cámara",
                  "de": "Radar steuert Kameraeinstellungen",
                  "nl": "Radar regelt camera instellingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Camera-radar fusion leverages cameras' ability to classify objects visually while radar provides accurate distance, velocity, and all-weather detection, creating more robust perception than either sensor alone.",
                  "es": "La fusión de cámara-radar aprovecha la capacidad de cámaras para clasificar objetos visualmente mientras radar proporciona detección precisa de distancia, velocidad y en cualquier clima, creando percepción más robusta que cualquier sensor solo.",
                  "de": "Kamera-Radar-Fusion nutzt die Fähigkeit von Kameras Objekte visuell zu klassifizieren während Radar genaue Entfernung, Geschwindigkeit und Allwetter-Erkennung bietet, schafft robustere Wahrnehmung als jeder Sensor allein.",
                  "nl": "Camera-radar fusie maakt gebruik van het vermogen van camera's om objecten visueel te classificeren terwijl radar nauwkeurige afstand, snelheid en all-weather detectie biedt, wat robuustere perceptie creëert dan één sensor alleen."
        }
      },
      {
        question: {
                  "en": "What is 'sensor degradation detection' in autonomous vehicle safety?",
                  "es": "¿Qué es la 'detección de degradación de sensores' en seguridad de vehículos autónomos?",
                  "de": "Was ist 'Sensordegradations-Erkennung' in autonomer Fahrzeugsicherheit?",
                  "nl": "Wat is 'sensor degradatie detectie' in autonome voertuig veiligheid?"
        },
        options: [
        {
                  "en": "Monitoring sensor performance to detect dirt, damage, or malfunction affecting data quality",
                  "es": "Monitorear rendimiento de sensores para detectar suciedad, daño o mal funcionamiento afectando calidad de datos",
                  "de": "Sensorleistung überwachen um Schmutz, Schäden oder Fehlfunktionen zu erkennen die Datenqualität beeinflussen",
                  "nl": "Sensor prestaties monitoren om vuil, schade of storing te detecteren die datakwaliteit beïnvloedt"
        },
        {
                  "en": "Removing old sensors automatically",
                  "es": "Remover sensores viejos automáticamente",
                  "de": "Alte Sensoren automatisch entfernen",
                  "nl": "Oude sensoren automatisch verwijderen"
        },
        {
                  "en": "Degrading sensor signals intentionally",
                  "es": "Degradar señales de sensores intencionalmente",
                  "de": "Sensorsignale absichtlich verschlechtern",
                  "nl": "Sensorsignalen opzettelijk verslechteren"
        },
        {
                  "en": "Detecting sensor age only",
                  "es": "Detectar solo edad del sensor",
                  "de": "Nur Sensoralter erkennen",
                  "nl": "Alleen sensor leeftijd detecteren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sensor degradation detection continuously monitors data quality and can trigger warnings, activate redundant sensors, or adjust driving behavior when sensor performance declines due to contamination or failure.",
                  "es": "La detección de degradación de sensores monitorea continuamente calidad de datos y puede activar advertencias, activar sensores redundantes o ajustar comportamiento de conducción cuando rendimiento de sensor declina debido a contaminación o falla.",
                  "de": "Sensordegradations-Erkennung überwacht kontinuierlich Datenqualität und kann Warnungen auslösen, redundante Sensoren aktivieren oder Fahrverhalten anpassen wenn Sensorleistung durch Kontamination oder Ausfall nachlässt.",
                  "nl": "Sensor degradatie detectie monitort continu datakwaliteit en kan waarschuwingen activeren, redundante sensoren inschakelen of rijgedrag aanpassen wanneer sensor prestaties afnemen door vervuiling of storing."
        }
      },
      {
        question: {
                  "en": "What is 'multi-object tracking and prediction' enabling in autonomous navigation?",
                  "es": "¿Qué está habilitando el 'rastreo y predicción de múltiples objetos' en navegación autónoma?",
                  "de": "Was ermöglicht 'Multi-Objekt-Verfolgung und Vorhersage' in autonomer Navigation?",
                  "nl": "Wat maakt 'multi-object tracking en voorspelling' mogelijk in autonome navigatie?"
        },
        options: [
        {
                  "en": "Simultaneously tracking multiple road users and predicting their future movements for safe path planning",
                  "es": "Rastrear simultáneamente múltiples usuarios de carretera y predecir sus movimientos futuros para planificación de ruta segura",
                  "de": "Gleichzeitiges Verfolgen mehrerer Verkehrsteilnehmer und Vorhersagen ihrer zukünftigen Bewegungen für sichere Pfadplanung",
                  "nl": "Gelijktijdig meerdere weggebruikers volgen en hun toekomstige bewegingen voorspellen voor veilige pad planning"
        },
        {
                  "en": "Tracking only the closest object",
                  "es": "Rastrear solo el objeto más cercano",
                  "de": "Nur das nächste Objekt verfolgen",
                  "nl": "Alleen het dichtstbijzijnde object volgen"
        },
        {
                  "en": "Tracking vehicle parts separately",
                  "es": "Rastrear partes del vehículo por separado",
                  "de": "Fahrzeugteile separat verfolgen",
                  "nl": "Voertuigonderdelen afzonderlijk volgen"
        },
        {
                  "en": "Predicting object colors and shapes",
                  "es": "Predecir colores y formas de objetos",
                  "de": "Objektfarben und -formen vorhersagen",
                  "nl": "Object kleuren en vormen voorspellen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Multi-object tracking maintains awareness of all nearby pedestrians, cyclists, and vehicles, predicting their trajectories to enable proactive collision avoidance and smooth navigation through complex traffic scenarios.",
                  "es": "El rastreo de múltiples objetos mantiene conciencia de todos los peatones, ciclistas y vehículos cercanos, prediciendo sus trayectorias para habilitar evitación proactiva de colisiones y navegación suave através escenarios de tráfico complejos.",
                  "de": "Multi-Objekt-Verfolgung erhält Bewusstsein für alle nahegelegenen Fußgänger, Radfahrer und Fahrzeuge, sagt ihre Trajektorien voraus um proaktive Kollisionsvermeidung und reibungslose Navigation durch komplexe Verkehrsszenarien zu ermöglichen.",
                  "nl": "Multi-object tracking behoudt bewustzijn van alle nabije voetgangers, fietsers en voertuigen, voorspelt hun trajecten om proactieve botsing vermijding en soepele navigatie door complexe verkeersscenario's mogelijk te maken."
        }
      },
      {
        question: {
                  "en": "What is 'LiDAR point cloud segmentation' in perception processing?",
                  "es": "¿Qué es la 'segmentación de nube de puntos LiDAR' en procesamiento de percepción?",
                  "de": "Was ist 'LiDAR-Punktwolken-Segmentierung' in Wahrnehmungsverarbeitung?",
                  "nl": "Wat is 'LiDAR puntenwolk segmentatie' in perceptie verwerking?"
        },
        options: [
        {
                  "en": "Dividing point cloud data into meaningful groups representing individual objects or surfaces",
                  "es": "Dividir datos de nube de puntos en grupos significativos representando objetos o superficies individuales",
                  "de": "Punktwolkendaten in bedeutungsvolle Gruppen unterteilen die einzelne Objekte oder Oberflächen repräsentieren",
                  "nl": "Puntenwolk data verdelen in betekenisvolle groepen die individuele objecten of oppervlakken vertegenwoordigen"
        },
        {
                  "en": "Segmenting cloud storage space",
                  "es": "Segmentar espacio de almacenamiento en nube",
                  "de": "Cloud-Speicherplatz segmentieren",
                  "nl": "Cloud opslagruimte segmenteren"
        },
        {
                  "en": "Storing point clouds in separate files",
                  "es": "Almacenar nubes de puntos en archivos separados",
                  "de": "Punktwolken in separaten Dateien speichern",
                  "nl": "Puntenwolken opslaan in aparte bestanden"
        },
        {
                  "en": "Breaking LiDAR into parts",
                  "es": "Romper LiDAR en partes",
                  "de": "LiDAR in Teile zerbrechen",
                  "nl": "LiDAR in delen breken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Point cloud segmentation groups millions of LiDAR points into coherent objects like vehicles, pedestrians, and road surfaces, enabling the system to understand and reason about the 3D environment.",
                  "es": "La segmentación de nube de puntos agrupa millones de puntos LiDAR en objetos coherentes como vehículos, peatones y superficies de carretera, habilitando al sistema entender y razonar sobre el entorno 3D.",
                  "de": "Punktwolken-Segmentierung gruppiert Millionen von LiDAR-Punkten in kohärente Objekte wie Fahrzeuge, Fußgänger und Straßenoberflächen, ermöglicht dem System die 3D-Umgebung zu verstehen und zu interpretieren.",
                  "nl": "Puntenwolk segmentatie groepeert miljoenen LiDAR-punten in coherente objecten zoals voertuigen, voetgangers en wegoppervlakken, wat het systeem in staat stelt om de 3D-omgeving te begrijpen en te beredeneren."
        }
      },
      {
        question: {
                  "en": "What is 'temporal sensor data alignment' in multi-sensor fusion?",
                  "es": "¿Qué es la 'alineación temporal de datos de sensores' en fusión de múltiples sensores?",
                  "de": "Was ist 'zeitliche Sensordaten-Ausrichtung' in Multi-Sensor-Fusion?",
                  "nl": "Wat is 'temporele sensor data uitlijning' in multi-sensor fusie?"
        },
        options: [
        {
                  "en": "Aligning sensors with time zones",
                  "es": "Alinear sensores con zonas horarias",
                  "de": "Sensoren mit Zeitzonen ausrichten",
                  "nl": "Sensoren met tijdzones uitlijnen"
        },
        {
                  "en": "Arranging sensors in temporal order",
                  "es": "Ordenar sensores en orden temporal",
                  "de": "Sensoren in zeitlicher Reihenfolge anordnen",
                  "nl": "Sensoren in tijdelijke volgorde rangschikken"
        },
        {
                  "en": "Synchronizing data from sensors with different capture rates to create coherent environmental understanding",
                  "es": "Sincronizar datos de sensores con diferentes tasas de captura para crear comprensión ambiental coherente",
                  "de": "Daten von Sensoren mit unterschiedlichen Erfassungsraten synchronisieren um kohärentes Umgebungsverständnis zu schaffen",
                  "nl": "Data van sensoren met verschillende opnamefrequenties synchroniseren om coherent omgevingsbegrip te creëren"
        },
        {
                  "en": "Setting sensor clocks to correct time",
                  "es": "Ajustar relojes de sensores a tiempo correcto",
                  "de": "Sensoruhren auf richtige Zeit einstellen",
                  "nl": "Sensorklokken op juiste tijd zetten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Different sensors operate at different frequencies (cameras at 30Hz, LiDAR at 10Hz, radar at 20Hz), requiring precise temporal alignment to ensure all data represents the same moment for accurate fusion.",
                  "es": "Diferentes sensores operan a diferentes frecuencias (cámaras a 30Hz, LiDAR a 10Hz, radar a 20Hz), requiriendo alineación temporal precisa para asegurar que todos los datos representen el mismo momento para fusión precisa.",
                  "de": "Verschiedene Sensoren arbeiten mit verschiedenen Frequenzen (Kameras bei 30Hz, LiDAR bei 10Hz, Radar bei 20Hz), erfordern präzise zeitliche Ausrichtung um sicherzustellen dass alle Daten denselben Moment für genaue Fusion repräsentieren.",
                  "nl": "Verschillende sensoren werken op verschillende frequenties (camera's op 30Hz, LiDAR op 10Hz, radar op 20Hz), waarbij precieze temporele uitlijning nodig is om te verzekeren dat alle data hetzelfde moment vertegenwoordigt voor nauwkeurige fusie."
        }
      },
      {
        question: {
                  "en": "What is 'weather-adaptive sensor processing' in autonomous vehicles?",
                  "es": "¿Qué es el 'procesamiento de sensores adaptativo al clima' en vehículos autónomos?",
                  "de": "Was ist 'wetterangepasste Sensorverarbeitung' in autonomen Fahrzeugen?",
                  "nl": "Wat is 'weersaangepaste sensor verwerking' in autonome voertuigen?"
        },
        options: [
        {
                  "en": "Processing weather data for navigation",
                  "es": "Procesar datos meteorológicos para navegación",
                  "de": "Wetterdaten für Navigation verarbeiten",
                  "nl": "Weersdata verwerken voor navigatie"
        },
        {
                  "en": "Adapting to weather forecasts only",
                  "es": "Adaptarse solo a pronósticos del tiempo",
                  "de": "Nur an Wettervorhersagen anpassen",
                  "nl": "Alleen aanpassen aan weersvoorspellingen"
        },
        {
                  "en": "Adjusting sensor algorithms and fusion strategies based on detected weather conditions",
                  "es": "Ajustar algoritmos de sensores y estrategias de fusión basándose en condiciones climáticas detectadas",
                  "de": "Sensoralgorithmen und Fusionsstrategien basierend auf erkannten Wetterbedingungen anpassen",
                  "nl": "Sensor algoritmes en fusie strategieën aanpassen op basis van gedetecteerde weersomstandigheden"
        },
        {
                  "en": "Only using sensors during good weather",
                  "es": "Solo usar sensores durante buen clima",
                  "de": "Nur Sensoren bei gutem Wetter verwenden",
                  "nl": "Alleen sensoren gebruiken bij goed weer"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Weather-adaptive processing detects rain, fog, or snow and adjusts sensor weights (relying more on radar in fog, using thermal cameras in rain) to maintain perception performance in adverse conditions.",
                  "es": "El procesamiento adaptativo al clima detecta lluvia, niebla o nieve y ajusta pesos de sensores (confiando más en radar en niebla, usando cámaras térmicas en lluvia) para mantener rendimiento de percepción en condiciones adversas.",
                  "de": "Wetterangepasste Verarbeitung erkennt Regen, Nebel oder Schnee und passt Sensorgewichte an (mehr auf Radar bei Nebel verlassen, thermische Kameras bei Regen verwenden) um Wahrnehmungsleistung bei widrigen Bedingungen aufrechtzuerhalten.",
                  "nl": "Weersaangepaste verwerking detecteert regen, mist of sneeuw en past sensorgewichten aan (meer vertrouwen op radar in mist, thermische camera's gebruiken in regen) om perceptie prestaties bij slechte omstandigheden te behouden."
        }
      },
      {
        question: {
                  "en": "What is '4D radar imaging' providing for advanced autonomous perception?",
                  "es": "¿Qué está proporcionando la 'imagen de radar 4D' para percepción autónoma avanzada?",
                  "de": "Was bietet '4D-Radar-Bildgebung' für fortgeschrittene autonome Wahrnehmung?",
                  "nl": "Wat biedt '4D radar beeldvorming' voor geavanceerde autonome perceptie?"
        },
        options: [
        {
                  "en": "Radar operating in four frequency bands",
                  "es": "Radar operando en cuatro bandas de frecuencia",
                  "de": "Radar das in vier Frequenzbändern arbeitet",
                  "nl": "Radar werkend in vier frequentiebanden"
        },
        {
                  "en": "Four separate radar units working together",
                  "es": "Cuatro unidades de radar separadas trabajando juntas",
                  "de": "Vier separate Radareinheiten die zusammenarbeiten",
                  "nl": "Vier aparte radareenheden die samenwerken"
        },
        {
                  "en": "3D spatial position plus velocity information for each detected point in the environment",
                  "es": "Posición espacial 3D más información de velocidad para cada punto detectado en el entorno",
                  "de": "3D-Raumposition plus Geschwindigkeitsinformationen für jeden erkannten Punkt in der Umgebung",
                  "nl": "3D ruimtelijke positie plus snelheidsinformatie voor elk gedetecteerd punt in de omgeving"
        },
        {
                  "en": "Four-dimensional mathematical radar calculations",
                  "es": "Cálculos matemáticos de radar de cuatro dimensiones",
                  "de": "Vierdimensionale mathematische Radarberechnungen",
                  "nl": "Vierdimensionale wiskundige radarbereke ningen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "4D imaging radar provides elevation angle resolution in addition to traditional azimuth, range, and velocity, creating point clouds similar to LiDAR with the all-weather advantages of radar.",
                  "es": "El radar de imagen 4D proporciona resolución de ángulo de elevación además de azimut tradicional, rango y velocidad, creando nubes de puntos similares a LiDAR con las ventajas de radar en cualquier clima.",
                  "de": "4D-Bildgebungs-Radar bietet Elevationswinkel-Auflösung zusätzlich zu traditionellem Azimut, Reichweite und Geschwindigkeit, schafft Punktwolken ähnlich LiDAR mit den Allwetter-Vorteilen von Radar.",
                  "nl": "4D imaging radar biedt elevatiehoek resolutie naast traditionele azimut, bereik en snelheid, creëert puntenwolken vergelijkbaar met LiDAR met de all-weather voordelen van radar."
        }
      },
      {
        question: {
                  "en": "What is 'sensor self-cleaning' technology in autonomous vehicles?",
                  "es": "¿Qué es la tecnología de 'autolimpieza de sensores' en vehículos autónomos?",
                  "de": "Was ist 'Sensor-Selbstreinigungstechnologie' in autonomen Fahrzeugen?",
                  "nl": "Wat is 'sensor zelfr einiging' technologie in autonome voertuigen?"
        },
        options: [
        {
                  "en": "Automated systems using air jets, wipers, or fluid sprays to maintain sensor clarity",
                  "es": "Sistemas automatizados usando chorros de aire, limpiaparabrisas o rociadores de fluido para mantener claridad de sensores",
                  "de": "Automatisierte Systeme mit Luftstrahlen, Wischern oder Flüssigkeitssprays zur Aufrechterhaltung der Sensorklarheit",
                  "nl": "Geautomatiseerde systemen met luchtstro men, wisers of vloeistof sprays om sensor helderheid te behouden"
        },
        {
                  "en": "Self-diagnostic sensor testing only",
                  "es": "Solo pruebas de autodiagnóstico de sensores",
                  "de": "Nur Sensor-Selbstdiagnose-Tests",
                  "nl": "Alleen sensor zelfdiagnose testen"
        },
        {
                  "en": "Manual cleaning by maintenance staff",
                  "es": "Limpieza manual por personal de mantenimiento",
                  "de": "Manuelle Reinigung durch Wartungspersonal",
                  "nl": "Handmatige reiniging door onderhoudspersoneel"
        },
        {
                  "en": "Sensors that never get dirty",
                  "es": "Sensores que nunca se ensucian",
                  "de": "Sensoren die nie schmutzig werden",
                  "nl": "Sensoren die nooit vuil worden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sensor self-cleaning is critical for maintaining perception performance, automatically removing dirt, water, snow, or insects from camera lenses, LiDAR windows, and radar covers without driver intervention.",
                  "es": "La autolimpieza de sensores es crítica para mantener rendimiento de percepción, removiendo automáticamente suciedad, agua, nieve o insectos de lentes de cámara, ventanas LiDAR y cubiertas de radar sin intervención del conductor.",
                  "de": "Sensor-Selbstreinigung ist kritisch für Aufrechterhaltung der Wahrnehmungsleistung, entfernt automatisch Schmutz, Wasser, Schnee oder Insekten von Kameralinsen, LiDAR-Fenstern und Radarabdeckungen ohne Fahrereingriff.",
                  "nl": "Sensor zelfreiniging is cruciaal voor het behouden van perceptie prestaties, verwijdert automatisch vuil, water, sneeuw of insecten van cameralenzen, LiDAR-vensters en radarafdekkingen zonder bestuurder tussenkomst."
        }
      },
      {
        question: {
                  "en": "What is 'event-based vision' in next-generation camera sensors?",
                  "es": "¿Qué es la 'visión basada en eventos' en sensores de cámara de próxima generación?",
                  "de": "Was ist 'ereignisbasiertes Sehen' in Kamerasensoren der nächsten Generation?",
                  "nl": "Wat is 'event-based vision' in camera sensoren van de volgende generatie?"
        },
        options: [
        {
                  "en": "Cameras for recording special events only",
                  "es": "Cámaras para grabar solo eventos especiales",
                  "de": "Kameras nur für Aufnahme besonderer Ereignisse",
                  "nl": "Camera's alleen voor het opnemen van speciale gebeurtenissen"
        },
        {
                  "en": "Vision systems for event detection",
                  "es": "Sistemas de visión para detección de eventos",
                  "de": "Sichtsysteme für Ereigniserkennung",
                  "nl": "Visiesystemen voor gebeurtenis detectie"
        },
        {
                  "en": "Event scheduling for camera activation",
                  "es": "Programación de eventos para activación de cámara",
                  "de": "Ereignisplanung für Kameraaktivierung",
                  "nl": "Gebeurtenis planning voor camera activering"
        },
        {
                  "en": "Cameras that detect changes in individual pixels asynchronously instead of capturing full frames",
                  "es": "Cámaras que detectan cambios en píxeles individuales asincrónicamente en lugar de capturar fotogramas completos",
                  "de": "Kameras die Änderungen in einzelnen Pixeln asynchron erkennen anstatt vollständige Frames zu erfassen",
                  "nl": "Camera's die veranderingen in individuele pixels asynchroon detecteren in plaats van volledige frames vast te leggen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Event-based cameras offer microsecond temporal resolution and high dynamic range by detecting only changes in brightness, making them ideal for detecting fast-moving objects and working in challenging lighting conditions.",
                  "es": "Las cámaras basadas en eventos ofrecen resolución temporal de microsegundos y alto rango dinámico detectando solo cambios en brillo, haciéndolas ideales para detectar objetos en movimiento rápido y trabajar en condiciones de iluminación desafiantes.",
                  "de": "Ereignisbasierte Kameras bieten Mikrosekunden-Zeitauflösung und hohen Dynamikbereich durch Erkennung nur von Helligkeitsänderungen, macht sie ideal für Erkennung schnell bewegender Objekte und Arbeiten in herausfordernden Lichtverhältnissen.",
                  "nl": "Event-based camera's bieden microseconde temporele resolutie en hoog dynamisch bereik door alleen veranderingen in helderheid te detecteren, waardoor ze ideaal zijn voor het detecteren van snel bewegende objecten en werken in uitdagende lichtomstandigheden."
        }
      },
      {
        question: {
                  "en": "What is 'LiDAR intensity' providing beyond distance measurements?",
                  "es": "¿Qué está proporcionando la 'intensidad LiDAR' más allá de mediciones de distancia?",
                  "de": "Was bietet 'LiDAR-Intensität' über Entfernungsmessungen hinaus?",
                  "nl": "Wat biedt 'LiDAR intensiteit' naast afstandsmetingen?"
        },
        options: [
        {
                  "en": "Intensity of vehicle movement only",
                  "es": "Solo intensidad de movimiento del vehículo",
                  "de": "Nur Intensität der Fahrzeugbewegung",
                  "nl": "Alleen intensiteit van voertuigbeweging"
        },
        {
                  "en": "Information about surface material properties and reflectivity for better object classification",
                  "es": "Información sobre propiedades de material de superficie y reflectividad para mejor clasificación de objetos",
                  "de": "Informationen über Oberflächenmaterial-Eigenschaften und Reflektivität für bessere Objektklassifizierung",
                  "nl": "Informatie over oppervlaktemateriaal eigenschappen en reflectiviteit voor betere object classificatie"
        },
        {
                  "en": "Brightness control for LiDAR lasers",
                  "es": "Control de brillo para láseres LiDAR",
                  "de": "Helligkeitskontrolle für LiDAR-Laser",
                  "nl": "Helderheid controle voor LiDAR lasers"
        },
        {
                  "en": "LiDAR power consumption levels",
                  "es": "Niveles de consumo de energía LiDAR",
                  "de": "LiDAR-Stromverbrauchsebenen",
                  "nl": "LiDAR stroomverbruik niveaus"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "LiDAR intensity values indicate how much laser light is reflected back, helping distinguish between materials like asphalt, metal, vegetation, or retroreflective road signs for improved scene understanding.",
                  "es": "Los valores de intensidad LiDAR indican cuánta luz láser se refleja de vuelta, ayudando a distinguir entre materiales como asfalto, metal, vegetación o señales viales retrorreflectivas para comprensión mejorada de escena.",
                  "de": "LiDAR-Intensitätswerte zeigen wie viel Laserlicht zurückgeworfen wird, helfen zwischen Materialien wie Asphalt, Metall, Vegetation oder retroreflektiven Straßenschildern zu unterscheiden für verbessertes Szenenverständnis.",
                  "nl": "LiDAR intensiteit waarden geven aan hoeveel laserlicht wordt teruggekaatst, helpen onderscheid te maken tussen materialen zoals asfalt, metaal, vegetatie of retroreflectieve verkeersborden voor verbeterd scène begrip."
        }
      },
      {
        question: {
                  "en": "What is 'ultra-wideband (UWB) radar' offering for short-range vehicle perception?",
                  "es": "¿Qué está ofreciendo el 'radar de banda ultra ancha (UWB)' para percepción vehicular de corto alcance?",
                  "de": "Was bietet 'Ultra-Wideband (UWB) Radar' für Nahbereichs-Fahrzeugwahrnehmung?",
                  "nl": "Wat biedt 'ultra-wideband (UWB) radar' voor korte afstand voertuig perceptie?"
        },
        options: [
        {
                  "en": "Ultra-wide camera field of view",
                  "es": "Campo de visión ultra amplio de cámara",
                  "de": "Ultra-weites Kamera-Sichtfeld",
                  "nl": "Ultra-breed camera gezichtsveld"
        },
        {
                  "en": "Wide broadcast range for vehicle communication",
                  "es": "Rango de transmisión amplio para comunicación vehicular",
                  "de": "Weite Übertragungsreichweite für Fahrzeugkommunikation",
                  "nl": "Breed uitzend bereik voor voertuig communicatie"
        },
        {
                  "en": "Wideband radio for entertainment",
                  "es": "Radio de banda ancha para entretenimiento",
                  "de": "Breitband-Radio für Unterhaltung",
                  "nl": "Breedband radio voor entertainment"
        },
        {
                  "en": "Extremely high resolution for detecting small objects and precise positioning in parking scenarios",
                  "es": "Resolución extremadamente alta para detectar objetos pequeños y posicionamiento preciso en escenarios de estacionamiento",
                  "de": "Extrem hohe Auflösung für Erkennung kleiner Objekte und präzise Positionierung in Parkszenarien",
                  "nl": "Extreem hoge resolutie voor het detecteren van kleine objecten en precieze positionering in parkeerscenario's"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "UWB radar uses very short pulses across a wide frequency spectrum, providing centimeter-level accuracy for detecting curbs, parking barriers, and precise vehicle positioning in tight spaces.",
                  "es": "El radar UWB usa pulsos muy cortos a través de un espectro de frecuencia amplio, proporcionando precisión a nivel de centímetro para detectar bordillos, barreras de estacionamiento y posicionamiento preciso de vehículos en espacios reducidos.",
                  "de": "UWB-Radar nutzt sehr kurze Impulse über ein breites Frequenzspektrum und bietet Zentimeter-Genauigkeit für Erkennung von Bordsteinen, Parkbarrieren und präzise Fahrzeugpositionierung in engen Räumen.",
                  "nl": "UWB radar gebruikt zeer korte pulsen over een breed frequentiespectrum, biedt centimeter-niveau nauwkeurigheid voor het detecteren van stoepen, parkeerbarriëres en precieze voertuigpositionering in krappe ruimtes."
        }
      },
      {
        question: {
                  "en": "What is 'cooperative perception' in vehicle-to-vehicle systems?",
                  "es": "¿Qué es la 'percepción cooperativa' en sistemas vehículo-a-vehículo?",
                  "de": "Was ist 'kooperative Wahrnehmung' in Fahrzeug-zu-Fahrzeug-Systemen?",
                  "nl": "Wat is 'coöperatieve perceptie' in voertuig-naar-voertuig systemen?"
        },
        options: [
        {
                  "en": "Vehicles sharing their sensor data and detected objects with nearby vehicles to extend perception range",
                  "es": "Vehículos compartiendo sus datos de sensores y objetos detectados con vehículos cercanos para extender rango de percepción",
                  "de": "Fahrzeuge teilen ihre Sensordaten und erkannte Objekte mit nahegelegenen Fahrzeugen um Wahrnehmungsbereich zu erweitern",
                  "nl": "Voertuigen delen hun sensordata en gedetecteerde objecten met nabije voertuigen om perceptiebereik uit te breiden"
        },
        {
                  "en": "Perception of cooperative driving behavior",
                  "es": "Percepción de comportamiento de conducción cooperativa",
                  "de": "Wahrnehmung kooperativen Fahrverhaltens",
                  "nl": "Perceptie van coöperatief rijgedrag"
        },
        {
                  "en": "Vehicles cooperating in traffic only",
                  "es": "Vehículos cooperando solo en tráfico",
                  "de": "Fahrzeuge kooperieren nur im Verkehr",
                  "nl": "Voertuigen coöpereren alleen in verkeer"
        },
        {
                  "en": "Cooperative sensor maintenance",
                  "es": "Mantenimiento cooperativo de sensores",
                  "de": "Kooperative Sensorwartung",
                  "nl": "Coöperatief sensor onderhoud"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Cooperative perception enables vehicles to 'see' around corners and beyond occlusions by receiving sensor data from other vehicles, dramatically improving safety by detecting hazards earlier than individual sensors could.",
                  "es": "La percepción cooperativa habilita a vehículos 'ver' alrededor de esquinas y más allá de oclusiones recibiendo datos de sensores de otros vehículos, mejorando dramáticamente seguridad detectando peligros antes de lo que sensores individuales podrían.",
                  "de": "Kooperative Wahrnehmung ermöglicht Fahrzeugen um Ecken und über Verdeckungen 'zu sehen' durch Empfang von Sensordaten anderer Fahrzeuge, verbessert Sicherheit dramatisch durch frühere Gefahrenerkennung als individuelle Sensoren könnten.",
                  "nl": "Coöperatieve perceptie stelt voertuigen in staat om 'te zien' om hoeken en voorbij occlusies door sensordata van andere voertuigen te ontvangen, wat veiligheid dramatisch verbetert door gevaren eerder te detecteren dan individuele sensoren zouden kunnen."
        }
      },
      {
        question: {
                  "en": "What is 'sensor firmware updating' enabling for autonomous vehicle evolution?",
                  "es": "¿Qué está habilitando la 'actualización de firmware de sensores' para evolución de vehículos autónomos?",
                  "de": "Was ermöglicht 'Sensor-Firmware-Aktualisierung' für Evolution autonomer Fahrzeuge?",
                  "nl": "Wat maakt 'sensor firmware updating' mogelijk voor autonome voertuig evolutie?"
        },
        options: [
        {
                  "en": "Improving sensor capabilities and algorithms after deployment through over-the-air updates",
                  "es": "Mejorar capacidades y algoritmos de sensores después del despliegue através actualizaciones inalámbricas",
                  "de": "Verbesserung von Sensorfähigkeiten und Algorithmen nach Bereitstellung durch Over-the-Air-Updates",
                  "nl": "Sensor capaciteiten en algoritmes verbeteren na implementatie door over-the-air updates"
        },
        {
                  "en": "Physically replacing sensor hardware remotely",
                  "es": "Reemplazar físicamente hardware de sensores remotamente",
                  "de": "Sensor-Hardware physisch remote ersetzen",
                  "nl": "Sensor hardware fysiek op afstand vervangen"
        },
        {
                  "en": "Manual sensor recalibration procedures",
                  "es": "Procedimientos manuales de recalibración de sensores",
                  "de": "Manuelle Sensor-Rekalibrierungsverfahren",
                  "nl": "Handmatige sensor herkalibra tieprocedures"
        },
        {
                  "en": "Updating only entertainment system firmware",
                  "es": "Actualizar solo firmware del sistema de entretenimiento",
                  "de": "Nur Unterhaltungssystem-Firmware aktualisieren",
                  "nl": "Alleen entertainment systeem firmware updaten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Over-the-air sensor firmware updates allow manufacturers to continuously improve perception algorithms, fix bugs, add new features, and adapt to new scenarios, keeping vehicles at the cutting edge throughout their lifetime.",
                  "es": "Las actualizaciones de firmware de sensores inalámbricas permiten a fabricantes mejorar continuamente algoritmos de percepción, corregir errores, agregar nuevas características y adaptarse a nuevos escenarios, manteniendo vehículos a la vanguardia a lo largo de su vida útil.",
                  "de": "Over-the-Air Sensor-Firmware-Updates ermöglichen Herstellern kontinuierliche Verbesserung von Wahrnehmungsalgorithmen, Fehlerbehebung, Hinzufügung neuer Features und Anpassung an neue Szenarien, hält Fahrzeuge während ihrer gesamten Lebensdauer auf dem neuesten Stand.",
                  "nl": "Over-the-air sensor firmware updates stellen fabrikanten in staat om continu perceptie algoritmes te verbeteren, bugs te fixen, nieuwe features toe te voegen en zich aan te passen aan nieuwe scenario's, waardoor voertuigen gedurende hun levensduur op de nieuwste stand blijven."
        }
      },
      {
        question: {
                  "en": "What is 'edge case detection' in autonomous vehicle sensor validation?",
                  "es": "¿Qué es la 'detección de casos extremos' en validación de sensores de vehículos autónomos?",
                  "de": "Was ist 'Edge-Case-Erkennung' in autonomer Fahrzeugsensor-Validierung?",
                  "nl": "Wat is 'edge case detectie' in autonome voertuig sensor validatie?"
        },
        options: [
        {
                  "en": "Testing sensors in extreme cold only",
                  "es": "Probar sensores solo en frío extremo",
                  "de": "Sensoren nur bei extremer Kälte testen",
                  "nl": "Sensoren alleen bij extreme kou testen"
        },
        {
                  "en": "Identifying rare or unusual scenarios where sensor performance may be challenged or unpredictable",
                  "es": "Identificar escenarios raros o inusuales donde rendimiento de sensores puede ser desafiado o impredecible",
                  "de": "Identifizierung seltener oder ungewöhnlicher Szenarien wo Sensorleistung herausgefordert oder unvorhersehbar sein kann",
                  "nl": "Identificeren van zeldzame of ongewone scenario's waar sensor prestaties uitgedaagd of onvoorspelbaar kunnen zijn"
        },
        {
                  "en": "Detecting sensors located at vehicle edges",
                  "es": "Detectar sensores ubicados en bordes del vehículo",
                  "de": "Sensoren an Fahrzeugkanten erkennen",
                  "nl": "Sensoren aan voertuigranden detecteren"
        },
        {
                  "en": "Case studies of sensor deployments",
                  "es": "Estudios de caso de despliegues de sensores",
                  "de": "Fallstudien von Sensor-Einsätzen",
                  "nl": "Case studies van sensor implementaties"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Edge case detection identifies unusual lighting conditions, rare weather phenomena, unexpected road configurations, or novel object types that may confuse sensors, enabling targeted improvements and safety validation.",
                  "es": "La detección de casos extremos identifica condiciones de iluminación inusuales, fenómenos meteorológicos raros, configuraciones de carretera inesperadas o tipos de objetos novedosos que pueden confundir sensores, habilitando mejoras dirigidas y validación de seguridad.",
                  "de": "Edge-Case-Erkennung identifiziert ungewöhnliche Beleuchtungsbedingungen, seltene Wetterphänomene, unerwartete Straßenkonfigurationen oder neuartige Objekttypen die Sensoren verwirren können, ermöglicht gezielte Verbesserungen und Sicherheitsvalidierung.",
                  "nl": "Edge case detectie identificeert ongewone lichtomstandigheden, zeldzame weerfenomenen, onverwachte wegconfiguraties of nieuwe objecttypes die sensoren kunnen verwarren, wat gerichte verbeteringen en veiligheidsvalidatie mogelijk maakt."
        }
      },
      {
        question: {
                  "en": "What is 'polarization diversity' in advanced radar systems?",
                  "es": "¿Qué es la 'diversidad de polarización' en sistemas de radar avanzados?",
                  "de": "Was ist 'Polarisationsdiversität' in fortgeschrittenen Radarsystemen?",
                  "nl": "Wat is 'polarisatie diversiteit' in geavanceerde radarsystemen?"
        },
        options: [
        {
                  "en": "Political diversity in radar development teams",
                  "es": "Diversidad política en equipos de desarrollo de radar",
                  "de": "Politische Vielfalt in Radar-Entwicklungsteams",
                  "nl": "Politieke diversiteit in radar ontwikkelingsteams"
        },
        {
                  "en": "Diverse radar installation locations",
                  "es": "Ubicaciones diversas de instalación de radar",
                  "de": "Diverse Radar-Installationsorte",
                  "nl": "Diverse radar installatie locaties"
        },
        {
                  "en": "Using multiple polarizations to better characterize object shapes and materials",
                  "es": "Usar múltiples polarizaciones para caracterizar mejor formas y materiales de objetos",
                  "de": "Verwendung mehrerer Polarisationen zur besseren Charakterisierung von Objektformen und Materialien",
                  "nl": "Gebruik van meerdere polarisaties om objectvormen en materialen beter te karakteriseren"
        },
        {
                  "en": "Different radar frequency diversities",
                  "es": "Diferentes diversidades de frecuencia de radar",
                  "de": "Verschiedene Radar-Frequenz-Diversitäten",
                  "nl": "Verschillende radar frequentie diversiteiten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Polarization diversity radar transmits and receives waves in different polarizations (horizontal, vertical, circular), providing additional information about object geometry and composition that aids classification.",
                  "es": "El radar de diversidad de polarización transmite y recibe ondas en diferentes polarizaciones (horizontal, vertical, circular), proporcionando información adicional sobre geometría y composición de objetos que ayuda a clasificación.",
                  "de": "Polarisationsdiversitäts-Radar sendet und empfängt Wellen in verschiedenen Polarisationen (horizontal, vertikal, zirkular), bietet zusätzliche Informationen über Objektgeometrie und Zusammensetzung die Klassifizierung unterstützt.",
                  "nl": "Polarisatie diversiteit radar zendt en ontvangt golven in verschillende polarisaties (horizontaal, verticaal, circulair), biedt extra informatie over object geometrie en samenstelling die classificatie ondersteunt."
        }
      },
      {
        question: {
                  "en": "What is 'sparse convolutional neural networks' improving in LiDAR processing?",
                  "es": "¿Qué están mejorando las 'redes neuronales convolucionales dispersas' en procesamiento LiDAR?",
                  "de": "Was verbessern 'Sparse Convolutional Neural Networks' in LiDAR-Verarbeitung?",
                  "nl": "Wat verbeteren 'sparse convolutional neural networks' in LiDAR verwerking?"
        },
        options: [
        {
                  "en": "Efficiently processing 3D point clouds by focusing computation only on occupied voxels",
                  "es": "Procesar eficientemente nubes de puntos 3D enfocando computación solo en vóxeles ocupados",
                  "de": "Effiziente Verarbeitung von 3D-Punktwolken durch Fokussierung der Berechnung nur auf besetzte Voxel",
                  "nl": "Efficiënt 3D puntenwolken verwerken door berekening alleen te focussen op bezette voxels"
        },
        {
                  "en": "Sparse data storage for neural networks",
                  "es": "Almacenamiento disperso de datos para redes neuronales",
                  "de": "Sparse Datenspeicherung für neuronale Netzwerke",
                  "nl": "Sparse data opslag voor neurale netwerken"
        },
        {
                  "en": "Neural networks with few connections",
                  "es": "Redes neuronales con pocas conexiones",
                  "de": "Neuronale Netzwerke mit wenigen Verbindungen",
                  "nl": "Neurale netwerken met weinig verbindingen"
        },
        {
                  "en": "Networks trained on limited datasets",
                  "es": "Redes entrenadas en conjuntos de datos limitados",
                  "de": "Netzwerke trainiert auf begrenzten Datensätzen",
                  "nl": "Netwerken getraind op beperkte datasets"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sparse CNNs exploit the fact that most 3D space is empty, processing only points where LiDAR detects objects, dramatically reducing computation while maintaining accuracy for real-time autonomous driving.",
                  "es": "Las CNN dispersas explotan el hecho de que la mayoría del espacio 3D está vacío, procesando solo puntos donde LiDAR detecta objetos, reduciendo dramáticamente computación mientras mantiene precisión para conducción autónoma en tiempo real.",
                  "de": "Sparse CNNs nutzen die Tatsache dass der meiste 3D-Raum leer ist, verarbeiten nur Punkte wo LiDAR Objekte erkennt, reduzieren Berechnung dramatisch während Genauigkeit für autonomes Fahren in Echtzeit erhalten bleibt.",
                  "nl": "Sparse CNNs benutten het feit dat de meeste 3D-ruimte leeg is, verwerken alleen punten waar LiDAR objecten detecteert, verminderen berekening dramatisch terwijl nauwkeurigheid voor real-time autonoom rijden behouden blijft."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }
})();