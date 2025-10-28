// AI in Transport Quiz - Level 3: Advanced Transportation AI
(function() {
  const level3 = {
    name: {
      en: "AI in Transport Level 3",
      es: "IA en Transporte Nivel 3",
      de: "KI im Transport Stufe 3",
      nl: "AI in Transport Level 3"
    },
    questions: [
      {
        question: {
          en: "What is 'sensor fusion' in autonomous vehicles?",
          es: "¿Qué es la 'fusión de sensores' en vehículos autónomos?",
          de: "Was ist 'Sensorfusion' in autonomen Fahrzeugen?",
          nl: "Wat is 'sensor fusion' in autonome voertuigen?"
        },
        options: [
          { en: "Combining data from multiple sensors to create a more accurate understanding of the environment", es: "Combinar datos de múltiples sensores para crear una comprensión más precisa del entorno", de: "Daten von mehreren Sensoren kombinieren um ein genaueres Verständnis der Umgebung zu schaffen", nl: "Data van meerdere sensoren combineren om een nauwkeuriger begrip van de omgeving te creëren" },
          { en: "Installing more sensors in the car", es: "Instalar más sensores en el coche", de: "Mehr Sensoren im Auto installieren", nl: "Meer sensoren in de auto installeren" },
          { en: "Connecting sensors to the internet", es: "Conectar sensores a internet", de: "Sensoren mit dem Internet verbinden", nl: "Sensoren met internet verbinden" },
          { en: "Using only camera sensors", es: "Usar solo sensores de cámara", de: "Nur Kamerasensoren verwenden", nl: "Alleen camerasensoren gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Sensor fusion integrates information from cameras, radar, LiDAR, and other sensors to overcome individual sensor limitations and improve safety.",
          es: "La fusión de sensores integra información de cámaras, radar, LiDAR y otros sensores para superar limitaciones de sensores individuales y mejorar la seguridad.",
          de: "Sensorfusion integriert Informationen von Kameras, Radar, LiDAR und anderen Sensoren um individuelle Sensorbegrenzungen zu überwinden und Sicherheit zu verbessern.",
          nl: "Sensor fusion integreert informatie van camera's, radar, LiDAR en andere sensoren om individuele sensorbeperkingen te overwinnen en veiligheid te verbeteren."
        }
      },
      {
        question: {
          en: "What is 'vehicle-to-vehicle (V2V) communication' in smart transportation?",
          es: "¿Qué es la 'comunicación vehículo a vehículo (V2V)' en transporte inteligente?",
          de: "Was ist 'Fahrzeug-zu-Fahrzeug (V2V) Kommunikation' im intelligenten Transport?",
          nl: "Wat is 'voertuig-naar-voertuig (V2V) communicatie' in slim transport?"
        },
        options: [
          { en: "Direct wireless communication between vehicles to share safety and traffic information", es: "Comunicación inalámbrica directa entre vehículos para compartir información de seguridad y tráfico", de: "Direkte drahtlose Kommunikation zwischen Fahrzeugen zum Austausch von Sicherheits- und Verkehrsinformationen", nl: "Directe draadloze communicatie tussen voertuigen om veiligheids- en verkeersinformatie te delen" },
          { en: "Using mobile phones to call other drivers", es: "Usar teléfonos móviles para llamar a otros conductores", de: "Mobiltelefone verwenden um andere Fahrer anzurufen", nl: "Mobiele telefoons gebruiken om andere bestuurders te bellen" },
          { en: "Radio communication with traffic police", es: "Comunicación por radio con policía de tráfico", de: "Funkkommunikation mit Verkehrspolizei", nl: "Radiocommunicatie met verkeerspolitie" },
          { en: "Connecting cars to gas stations", es: "Conectar coches a gasolineras", de: "Autos mit Tankstellen verbinden", nl: "Auto's verbinden met tankstations" }
        ],
        correct: 0,
        explanation: {
          en: "V2V allows vehicles to exchange real-time information about speed, position, and road conditions to prevent accidents and improve traffic flow.",
          es: "V2V permite a vehículos intercambiar información en tiempo real sobre velocidad, posición y condiciones de carretera para prevenir accidentes y mejorar flujo de tráfico.",
          de: "V2V ermöglicht Fahrzeugen Echtzeitinformationen über Geschwindigkeit, Position und Straßenverhältnisse auszutauschen um Unfälle zu verhindern und Verkehrsfluss zu verbessern.",
          nl: "V2V stelt voertuigen in staat om realtime informatie over snelheid, positie en wegomstandigheden uit te wisselen om ongevallen te voorkomen en verkeersstroom te verbeteren."
        }
      },
      {
        question: {
          en: "What is 'edge computing' in intelligent transportation systems?",
          es: "¿Qué es la 'computación en el borde' en sistemas de transporte inteligente?",
          de: "Was ist 'Edge Computing' in intelligenten Transportsystemen?",
          nl: "Wat is 'edge computing' in intelligente transportsystemen?"
        },
        options: [
          { en: "Processing data locally in vehicles or roadside units instead of sending everything to distant servers", es: "Procesar datos localmente en vehículos o unidades de carretera en lugar de enviar todo a servidores distantes", de: "Daten lokal in Fahrzeugen oder Straßeneinheiten verarbeiten anstatt alles an entfernte Server zu senden", nl: "Data lokaal verwerken in voertuigen of wegkantunits in plaats van alles naar verre servers te sturen" },
          { en: "Computing only at traffic intersections", es: "Computar solo en intersecciones de tráfico", de: "Nur an Verkehrskreuzungen rechnen", nl: "Alleen rekenen bij verkeerskruispunten" },
          { en: "Using computers at the edge of roads", es: "Usar computadoras en el borde de carreteras", de: "Computer am Straßenrand verwenden", nl: "Computers aan de rand van wegen gebruiken" },
          { en: "Cloud computing for navigation", es: "Computación en la nube para navegación", de: "Cloud Computing für Navigation", nl: "Cloud computing voor navigatie" }
        ],
        correct: 0,
        explanation: {
          en: "Edge computing reduces latency and ensures critical safety decisions can be made instantly without relying on distant cloud servers.",
          es: "La computación en el borde reduce latencia y asegura que decisiones críticas de seguridad puedan tomarse instantáneamente sin depender de servidores de nube distantes.",
          de: "Edge Computing reduziert Latenz und stellt sicher dass kritische Sicherheitsentscheidungen sofort getroffen werden können ohne auf entfernte Cloud-Server angewiesen zu sein.",
          nl: "Edge computing vermindert latentie en zorgt ervoor dat kritieke veiligheidsbeslissingen onmiddellijk kunnen worden genomen zonder afhankelijk te zijn van verre cloudservers."
        }
      },
      {
        question: {
          en: "What is 'machine learning' used for in traffic management systems?",
          es: "¿Para qué se usa el 'aprendizaje automático' en sistemas de gestión de tráfico?",
          de: "Wofür wird 'maschinelles Lernen' in Verkehrsmanagementsystemen verwendet?",
          nl: "Waarvoor wordt 'machine learning' gebruikt in verkeersmanagementsystemen?"
        },
        options: [
          { en: "Analyzing traffic patterns to predict congestion and optimize signal timing", es: "Analizar patrones de tráfico para predecir congestión y optimizar temporización de semáforos", de: "Verkehrsmuster analysieren um Staus vorherzusagen und Signalzeiten zu optimieren", nl: "Verkeerspatronen analyseren om opstoppingen te voorspellen en signaaltiming te optimaliseren" },
          { en: "Teaching traffic lights to change colors", es: "Enseñar a semáforos a cambiar colores", de: "Ampeln beibringen Farben zu wechseln", nl: "Verkeerslichten leren kleuren te veranderen" },
          { en: "Learning traffic rules from books", es: "Aprender reglas de tráfico de libros", de: "Verkehrsregeln aus Büchern lernen", nl: "Verkeersregels leren uit boeken" },
          { en: "Only counting vehicles", es: "Solo contar vehículos", de: "Nur Fahrzeuge zählen", nl: "Alleen voertuigen tellen" }
        ],
        correct: 0,
        explanation: {
          en: "ML algorithms learn from historical traffic data to identify patterns, predict rush hours, and automatically adjust traffic signals for optimal flow.",
          es: "Los algoritmos ML aprenden de datos históricos de tráfico para identificar patrones, predecir horas pico y ajustar automáticamente semáforos para flujo óptimo.",
          de: "ML-Algorithmen lernen aus historischen Verkehrsdaten um Muster zu identifizieren, Stoßzeiten vorherzusagen und Ampeln automatisch für optimalen Fluss anzupassen.",
          nl: "ML-algoritmes leren van historische verkeersdata om patronen te identificeren, spitsuren te voorspellen en verkeerslichten automatisch aan te passen voor optimale doorstroming."
        }
      },
      {
        question: {
          en: "What is 'platooning' in autonomous truck transportation?",
          es: "¿Qué es el 'peloteo' en transporte de camiones autónomos?",
          de: "Was ist 'Platooning' im autonomen LKW-Transport?",
          nl: "Wat is 'platooning' in autonoom vrachtwagentransport?"
        },
        options: [
          { en: "Multiple autonomous trucks following each other closely in a convoy using AI coordination", es: "Múltiples camiones autónomos siguiéndose de cerca en convoy usando coordinación IA", de: "Mehrere autonome LKWs die sich in einem Konvoi dicht folgen mit KI-Koordination", nl: "Meerdere autonome vrachtwagens die elkaar dicht volgen in een konvooi met AI-coördinatie" },
          { en: "Trucks driving in random patterns", es: "Camiones conduciendo en patrones aleatorios", de: "LKWs fahren in zufälligen Mustern", nl: "Vrachtwagens rijden in willekeurige patronen" },
          { en: "Single truck transportation only", es: "Solo transporte de un camión", de: "Nur Ein-LKW-Transport", nl: "Alleen enkele vrachtwagen transport" },
          { en: "Trucks communicating with satellites", es: "Camiones comunicándose con satélites", de: "LKWs kommunizieren mit Satelliten", nl: "Vrachtwagens communiceren met satellieten" }
        ],
        correct: 0,
        explanation: {
          en: "Platooning reduces fuel consumption through improved aerodynamics and allows for more efficient highway usage with AI-controlled spacing.",
          es: "El peloteo reduce consumo de combustible mediante aerodinámica mejorada y permite uso más eficiente de autopistas con espaciado controlado por IA.",
          de: "Platooning reduziert Kraftstoffverbrauch durch verbesserte Aerodynamik und ermöglicht effizientere Autobahnnutzung mit KI-gesteuertem Abstand.",
          nl: "Platooning vermindert brandstofverbruik door verbeterde aerodynamica en maakt efficiënter snelweggebruik mogelijk met AI-gecontroleerde afstand."
        }
      },
      {
        question: {
          en: "What is the primary advantage of LiDAR sensors over cameras in autonomous vehicles?",
          es: "¿Cuál es la ventaja principal de los sensores LiDAR sobre las cámaras en vehículos autónomos?",
          de: "Was ist der Hauptvorteil von LiDAR-Sensoren gegenüber Kameras in autonomen Fahrzeugen?",
          nl: "Wat is het hoofdvoordeel van LiDAR-sensoren ten opzichte van camera's in autonome voertuigen?"
        },
        options: [
          { en: "Provides precise 3D distance measurements regardless of lighting conditions", es: "Proporciona mediciones precisas de distancia 3D independientemente de las condiciones de iluminación", de: "Bietet präzise 3D-Entfernungsmessungen unabhängig von Lichtverhältnissen", nl: "Biedt precieze 3D-afstandsmetingen ongeacht lichtomstandigheden" },
          { en: "Takes better photos of scenery", es: "Toma mejores fotos del paisaje", de: "Macht bessere Fotos von der Landschaft", nl: "Maakt betere foto's van het landschap" },
          { en: "Uses less electrical power", es: "Usa menos energía eléctrica", de: "Verbraucht weniger elektrische Energie", nl: "Gebruikt minder elektrische energie" },
          { en: "Works only during daylight", es: "Funciona solo durante el día", de: "Funktioniert nur bei Tageslicht", nl: "Werkt alleen overdag" }
        ],
        correct: 0,
        explanation: {
          en: "LiDAR uses laser pulses to create detailed 3D point clouds, providing accurate distance measurements in darkness, fog, or bright sunlight where cameras may struggle.",
          es: "LiDAR usa pulsos láser para crear nubes de puntos 3D detalladas, proporcionando mediciones precisas de distancia en oscuridad, niebla o luz solar brillante donde las cámaras pueden tener dificultades.",
          de: "LiDAR nutzt Laserpulse zur Erstellung detaillierter 3D-Punktwolken und bietet genaue Entfernungsmessungen bei Dunkelheit, Nebel oder hellem Sonnenlicht, wo Kameras Schwierigkeiten haben können.",
          nl: "LiDAR gebruikt laserpulsen om gedetailleerde 3D-puntenwolken te creëren, waardoor nauwkeurige afstandsmetingen worden geboden in duisternis, mist of fel zonlicht waar camera's kunnen falen."
        }
      },
      {
        question: {
          en: "How does radar technology contribute to autonomous vehicle perception?",
          es: "¿Cómo contribuye la tecnología radar a la percepción de vehículos autónomos?",
          de: "Wie trägt Radartechnologie zur Wahrnehmung autonomer Fahrzeuge bei?",
          nl: "Hoe draagt radartechnologie bij aan de perceptie van autonome voertuigen?"
        },
        options: [
          { en: "Detects objects and measures their velocity even through weather conditions like rain and fog", es: "Detecta objetos y mide su velocidad incluso en condiciones climáticas como lluvia y niebla", de: "Erkennt Objekte und misst ihre Geschwindigkeit auch bei Wetterbedingungen wie Regen und Nebel", nl: "Detecteert objecten en meet hun snelheid zelfs bij weersomstandigheden zoals regen en mist" },
          { en: "Only works for metal objects", es: "Solo funciona para objetos metálicos", de: "Funktioniert nur bei Metallobjekten", nl: "Werkt alleen voor metalen objecten" },
          { en: "Provides color information about objects", es: "Proporciona información de color sobre objetos", de: "Liefert Farbinformationen über Objekte", nl: "Geeft kleurinformatie over objecten" },
          { en: "Requires direct line of sight always", es: "Requiere línea de vista directa siempre", de: "Erfordert immer direkte Sichtlinie", nl: "Vereist altijd directe zichtlijn" }
        ],
        correct: 0,
        explanation: {
          en: "Radar uses radio waves that can penetrate weather conditions and detect moving objects with Doppler shift measurements, making it crucial for all-weather autonomous driving.",
          es: "El radar usa ondas de radio que pueden penetrar condiciones climáticas y detectar objetos en movimiento con mediciones de desplazamiento Doppler, haciéndolo crucial para conducción autónoma en cualquier clima.",
          de: "Radar nutzt Radiowellen die Wetterbedingungen durchdringen und bewegende Objekte mit Doppler-Verschiebungsmessungen erkennen können, was es für autonomes Fahren bei jedem Wetter entscheidend macht.",
          nl: "Radar gebruikt radiogolven die weersomstandigheden kunnen doordringen en bewegende objecten kunnen detecteren met Doppler-verschuivingsmetingen, waardoor het cruciaal is voor autonoom rijden bij elk weer."
        }
      },
      {
        question: {
          en: "What is 'point cloud processing' in LiDAR-based perception systems?",
          es: "¿Qué es el 'procesamiento de nube de puntos' en sistemas de percepción basados en LiDAR?",
          de: "Was ist 'Punktwolken-Verarbeitung' in LiDAR-basierten Wahrnehmungssystemen?",
          nl: "Wat is 'puntenwolk verwerking' in LiDAR-gebaseerde perceptiesystemen?"
        },
        options: [
          { en: "Converting 3D laser scan data into recognizable objects and environmental features", es: "Convertir datos de escaneo láser 3D en objetos reconocibles y características ambientales", de: "3D-Laserscandaten in erkennbare Objekte und Umgebungsmerkmale umwandeln", nl: "3D-laserscandata omzetten naar herkenbare objecten en omgevingskenmerken" },
          { en: "Storing data in cloud servers", es: "Almacenar datos en servidores de nube", de: "Daten in Cloud-Servern speichern", nl: "Data opslaan in cloudservers" },
          { en: "Processing weather cloud formations", es: "Procesar formaciones de nubes meteorológicas", de: "Wetterwolkenformationen verarbeiten", nl: "Weerwolkformaties verwerken" },
          { en: "Connecting multiple sensors together", es: "Conectar múltiples sensores juntos", de: "Mehrere Sensoren miteinander verbinden", nl: "Meerdere sensoren met elkaar verbinden" }
        ],
        correct: 0,
        explanation: {
          en: "Point cloud processing analyzes millions of 3D points from LiDAR to identify vehicles, pedestrians, buildings, and road features using advanced algorithms and machine learning.",
          es: "El procesamiento de nube de puntos analiza millones de puntos 3D de LiDAR para identificar vehículos, peatones, edificios y características de carretera usando algoritmos avanzados y aprendizaje automático.",
          de: "Punktwolken-Verarbeitung analysiert Millionen von 3D-Punkten vom LiDAR um Fahrzeuge, Fußgänger, Gebäude und Straßenmerkmale mit fortgeschrittenen Algorithmen und maschinellem Lernen zu identifizieren.",
          nl: "Puntenwolk verwerking analyseert miljoenen 3D-punten van LiDAR om voertuigen, voetgangers, gebouwen en wegkenmerken te identificeren met geavanceerde algoritmes en machine learning."
        }
      },
      {
        question: {
          en: "What is the role of IMU (Inertial Measurement Unit) sensors in autonomous vehicles?",
          es: "¿Cuál es el papel de los sensores IMU (Unidad de Medición Inercial) en vehículos autónomos?",
          de: "Was ist die Rolle von IMU (Inertialmesseinheit) Sensoren in autonomen Fahrzeugen?",
          nl: "Wat is de rol van IMU (Inertial Measurement Unit) sensoren in autonome voertuigen?"
        },
        options: [
          { en: "Measure vehicle orientation, acceleration, and rotational movement to understand vehicle dynamics", es: "Medir orientación, aceleración y movimiento rotacional del vehículo para entender dinámicas vehiculares", de: "Fahrzeugausrichtung, Beschleunigung und Rotationsbewegung messen um Fahrzeugdynamik zu verstehen", nl: "Voertuigoriëntatie, acceleratie en rotationele beweging meten om voertuigdynamiek te begrijpen" },
          { en: "Control the vehicle's air conditioning", es: "Controlar el aire acondicionado del vehículo", de: "Klimaanlage des Fahrzeugs steuern", nl: "Airconditioning van het voertuig regelen" },
          { en: "Monitor fuel consumption only", es: "Monitorear solo consumo de combustible", de: "Nur Kraftstoffverbrauch überwachen", nl: "Alleen brandstofverbruik monitoren" },
          { en: "Detect radio signals from other vehicles", es: "Detectar señales de radio de otros vehículos", de: "Funksignale von anderen Fahrzeugen erkennen", nl: "Radiosignalen van andere voertuigen detecteren" }
        ],
        correct: 0,
        explanation: {
          en: "IMU sensors provide crucial motion data that helps autonomous vehicles understand their own movement, maintain stability, and make precise navigation decisions.",
          es: "Los sensores IMU proporcionan datos de movimiento cruciales que ayudan a vehículos autónomos a entender su propio movimiento, mantener estabilidad y tomar decisiones de navegación precisas.",
          de: "IMU-Sensoren liefern entscheidende Bewegungsdaten die autonomen Fahrzeugen helfen ihre eigene Bewegung zu verstehen, Stabilität zu bewahren und präzise Navigationsentscheidungen zu treffen.",
          nl: "IMU-sensoren leveren cruciale bewegingsdata die autonome voertuigen helpen hun eigen beweging te begrijpen, stabiliteit te behouden en precieze navigatiebeslissingen te nemen."
        }
      },
      {
        question: {
          en: "How do thermal infrared sensors enhance autonomous vehicle perception?",
          es: "¿Cómo mejoran los sensores infrarrojos térmicos la percepción de vehículos autónomos?",
          de: "Wie verbessern thermische Infrarotsensoren die Wahrnehmung autonomer Fahrzeuge?",
          nl: "Hoe verbeteren thermische infraroodsensoren de perceptie van autonome voertuigen?"
        },
        options: [
          { en: "Detect heat signatures of people and animals, especially useful in low-light conditions", es: "Detectan firmas de calor de personas y animales, especialmente útiles en condiciones de poca luz", de: "Erkennen Wärmesignaturen von Menschen und Tieren, besonders nützlich bei schwachen Lichtverhältnissen", nl: "Detecteren warmtehandtekeningen van mensen en dieren, vooral nuttig bij weinig licht" },
          { en: "Measure vehicle engine temperature only", es: "Medir solo temperatura del motor del vehículo", de: "Nur Fahrzeugmotortemperatur messen", nl: "Alleen voertuigmotortemperatuur meten" },
          { en: "Control vehicle interior climate", es: "Controlar clima interior del vehículo", de: "Fahrzeuginnenklima kontrollieren", nl: "Voertuig binnenklimaat regelen" },
          { en: "Detect only metal objects", es: "Detectar solo objetos metálicos", de: "Nur Metallobjekte erkennen", nl: "Alleen metalen objecten detecteren" }
        ],
        correct: 0,
        explanation: {
          en: "Thermal sensors detect heat radiation, making them valuable for spotting pedestrians, cyclists, and animals that might be invisible to regular cameras in darkness or adverse weather.",
          es: "Los sensores térmicos detectan radiación de calor, haciéndolos valiosos para detectar peatones, ciclistas y animales que podrían ser invisibles para cámaras regulares en oscuridad o clima adverso.",
          de: "Thermische Sensoren erkennen Wärmestrahlung und sind wertvoll zum Erkennen von Fußgängern, Radfahrern und Tieren die für normale Kameras bei Dunkelheit oder schlechtem Wetter unsichtbar sein könnten.",
          nl: "Thermische sensoren detecteren warmtestraling, waardoor ze waardevol zijn voor het spotten van voetgangers, fietsers en dieren die onzichtbaar zouden kunnen zijn voor gewone camera's in duisternis of slecht weer."
        }
      },
      {
        question: {
          en: "What is 'sensor calibration' and why is it critical for autonomous vehicles?",
          es: "¿Qué es la 'calibración de sensores' y por qué es crítica para vehículos autónomos?",
          de: "Was ist 'Sensorkalibrierung' und warum ist sie für autonome Fahrzeuge kritisch?",
          nl: "Wat is 'sensor kalibratie' en waarom is het cruciaal voor autonome voertuigen?"
        },
        options: [
          { en: "Aligning and synchronizing multiple sensors to ensure accurate and consistent measurements", es: "Alinear y sincronizar múltiples sensores para asegurar mediciones precisas y consistentes", de: "Mehrere Sensoren ausrichten und synchronisieren um genaue und konsistente Messungen sicherzustellen", nl: "Meerdere sensoren uitlijnen en synchroniseren om nauwkeurige en consistente metingen te waarborgen" },
          { en: "Adjusting sensor brightness settings", es: "Ajustar configuraciones de brillo del sensor", de: "Sensorhelligkeitseinstellungen anpassen", nl: "Sensor helderheid instellingen aanpassen" },
          { en: "Cleaning sensor surfaces only", es: "Solo limpiar superficies de sensores", de: "Nur Sensoroberflächen reinigen", nl: "Alleen sensoroppervlakken schoonmaken" },
          { en: "Installing new sensors periodically", es: "Instalar nuevos sensores periódicamente", de: "Regelmäßig neue Sensoren installieren", nl: "Periodiek nieuwe sensoren installeren" }
        ],
        correct: 0,
        explanation: {
          en: "Proper sensor calibration ensures that data from different sensors (cameras, LiDAR, radar) can be accurately combined and that the vehicle's perception of its environment is precise.",
          es: "La calibración adecuada de sensores asegura que los datos de diferentes sensores (cámaras, LiDAR, radar) puedan combinarse con precisión y que la percepción del vehículo de su entorno sea precisa.",
          de: "Ordnungsgemäße Sensorkalibrierung stellt sicher dass Daten verschiedener Sensoren (Kameras, LiDAR, Radar) genau kombiniert werden können und die Fahrzeugwahrnehmung der Umgebung präzise ist.",
          nl: "Juiste sensorkalibratie zorgt ervoor dat data van verschillende sensoren (camera's, LiDAR, radar) nauwkeurig kunnen worden gecombineerd en dat de perceptie van het voertuig van zijn omgeving precies is."
        }
      },
      {
        question: {
          en: "What is the purpose of 'multi-spectral imaging' in advanced vehicle perception systems?",
          es: "¿Cuál es el propósito de las 'imágenes multiespectrales' en sistemas avanzados de percepción vehicular?",
          de: "Was ist der Zweck von 'multispektraler Bildgebung' in fortgeschrittenen Fahrzeugwahrnehmungssystemen?",
          nl: "Wat is het doel van 'multi-spectrale beeldvorming' in geavanceerde voertuigperceptiesystemen?"
        },
        options: [
          { en: "Capture images across different wavelengths to detect materials and conditions invisible to normal cameras", es: "Capturar imágenes a través de diferentes longitudes de onda para detectar materiales y condiciones invisibles para cámaras normales", de: "Bilder über verschiedene Wellenlängen erfassen um Materialien und Bedingungen zu erkennen die für normale Kameras unsichtbar sind", nl: "Beelden vastleggen over verschillende golflengtes om materialen en condities te detecteren die onzichtbaar zijn voor normale camera's" },
          { en: "Take multiple photos at the same time", es: "Tomar múltiples fotos al mismo tiempo", de: "Mehrere Fotos gleichzeitig aufnehmen", nl: "Meerdere foto's tegelijk maken" },
          { en: "Adjust camera focus automatically", es: "Ajustar enfoque de cámara automáticamente", de: "Kamerafokus automatisch einstellen", nl: "Camera focus automatisch aanpassen" },
          { en: "Increase photo resolution only", es: "Solo aumentar resolución de foto", de: "Nur Fotoauflösung erhöhen", nl: "Alleen fotoresolutie verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-spectral imaging can detect road surface conditions, identify specific materials, spot oil spills or ice, and reveal details that standard RGB cameras cannot see.",
          es: "Las imágenes multiespectrales pueden detectar condiciones de superficie de carretera, identificar materiales específicos, detectar derrames de aceite o hielo, y revelar detalles que cámaras RGB estándar no pueden ver.",
          de: "Multispektrale Bildgebung kann Straßenoberflächenbedingungen erkennen, spezifische Materialien identifizieren, Ölverschmutzungen oder Eis entdecken und Details offenbaren die Standard-RGB-Kameras nicht sehen können.",
          nl: "Multi-spectrale beeldvorming kan wegoppervlakte condities detecteren, specifieke materialen identificeren, olievlekken of ijs spotten, en details onthullen die standaard RGB-camera's niet kunnen zien."
        }
      },
      {
        question: {
          en: "How do 'solid-state LiDAR' systems differ from traditional spinning LiDAR?",
          es: "¿Cómo difieren los sistemas 'LiDAR de estado sólido' del LiDAR giratorio tradicional?",
          de: "Wie unterscheiden sich 'Solid-State-LiDAR' Systeme von herkömmlichem rotierendem LiDAR?",
          nl: "Hoe verschillen 'solid-state LiDAR' systemen van traditionele draaiende LiDAR?"
        },
        options: [
          { en: "No moving parts, making them more reliable, compact, and cost-effective for mass production", es: "Sin partes móviles, haciéndolos más confiables, compactos y rentables para producción masiva", de: "Keine beweglichen Teile, wodurch sie zuverlässiger, kompakter und kostengünstiger für Massenproduktion sind", nl: "Geen bewegende onderdelen, waardoor ze betrouwbaarder, compacter en kosteneffectiever zijn voor massaproductie" },
          { en: "They spin faster than traditional LiDAR", es: "Giran más rápido que el LiDAR tradicional", de: "Sie rotieren schneller als traditionelles LiDAR", nl: "Ze draaien sneller dan traditionele LiDAR" },
          { en: "They use different colored lasers only", es: "Solo usan láseres de diferentes colores", de: "Sie verwenden nur verschiedenfarbige Laser", nl: "Ze gebruiken alleen verschillende gekleurde lasers" },
          { en: "They require more power to operate", es: "Requieren más energía para operar", de: "Sie benötigen mehr Energie zum Betrieb", nl: "Ze hebben meer stroom nodig om te werken" }
        ],
        correct: 0,
        explanation: {
          en: "Solid-state LiDAR uses electronic beam steering instead of mechanical rotation, offering better durability, smaller size, and lower manufacturing costs for widespread automotive adoption.",
          es: "LiDAR de estado sólido usa dirección de haz electrónica en lugar de rotación mecánica, ofreciendo mejor durabilidad, tamaño menor y costos de fabricación más bajos para adopción automotriz generalizada.",
          de: "Solid-State-LiDAR nutzt elektronische Strahlsteuerung statt mechanischer Rotation und bietet bessere Haltbarkeit, kleinere Größe und niedrigere Herstellungskosten für breite Automobiladoption.",
          nl: "Solid-state LiDAR gebruikt elektronische bundel sturing in plaats van mechanische rotatie, wat betere duurzaamheid, kleinere afmetingen en lagere productiekosten biedt voor wijdverspreide automotive adoptie."
        }
      },
      {
        question: {
          en: "What is 'radar cross-section' and how does it affect object detection?",
          es: "¿Qué es la 'sección transversal del radar' y cómo afecta la detección de objetos?",
          de: "Was ist 'Radarquerschnitt' und wie beeinflusst er die Objekterkennung?",
          nl: "Wat is 'radar cross-sectie' en hoe beïnvloedt het objectdetectie?"
        },
        options: [
          { en: "A measure of how much an object reflects radar signals back to the sensor", es: "Una medida de cuánto un objeto refleja señales de radar de vuelta al sensor", de: "Ein Maß dafür wie stark ein Objekt Radarsignale zurück zum Sensor reflektiert", nl: "Een maat voor hoeveel een object radarsignalen terug naar de sensor reflecteert" },
          { en: "The physical size of radar equipment", es: "El tamaño físico del equipo de radar", de: "Die physische Größe der Radarausrüstung", nl: "De fysieke grootte van radarapparatuur" },
          { en: "The distance radar can detect objects", es: "La distancia que el radar puede detectar objetos", de: "Die Entfernung die Radar Objekte erkennen kann", nl: "De afstand waarop radar objecten kan detecteren" },
          { en: "The speed of radar signal transmission", es: "La velocidad de transmisión de señal de radar", de: "Die Geschwindigkeit der Radarsignalübertragung", nl: "De snelheid van radarsignaal transmissie" }
        ],
        correct: 0,
        explanation: {
          en: "Objects with larger radar cross-sections (like metal vehicles) are easier to detect, while smaller cross-sections (like pedestrians or cyclists) require more sensitive radar systems.",
          es: "Objetos con secciones transversales de radar más grandes (como vehículos metálicos) son más fáciles de detectar, mientras secciones transversales más pequeñas (como peatones o ciclistas) requieren sistemas de radar más sensibles.",
          de: "Objekte mit größeren Radarquerschnitten (wie Metallfahrzeuge) sind leichter zu erkennen, während kleinere Querschnitte (wie Fußgänger oder Radfahrer) sensiblere Radarsysteme erfordern.",
          nl: "Objecten met grotere radar cross-secties (zoals metalen voertuigen) zijn makkelijker te detecteren, terwijl kleinere cross-secties (zoals voetgangers of fietsers) gevoeliger radarsystemen vereisen."
        }
      },
      {
        question: {
          en: "What is 'sensor redundancy' in autonomous vehicle safety systems?",
          es: "¿Qué es la 'redundancia de sensores' en sistemas de seguridad de vehículos autónomos?",
          de: "Was ist 'Sensorredundanz' in Sicherheitssystemen autonomer Fahrzeuge?",
          nl: "Wat is 'sensor redundantie' in veiligheidssystemen van autonome voertuigen?"
        },
        options: [
          { en: "Having multiple sensors of the same or different types to ensure system continues functioning if one fails", es: "Tener múltiples sensores del mismo o diferentes tipos para asegurar que el sistema continúe funcionando si uno falla", de: "Mehrere Sensoren gleicher oder verschiedener Typen haben um sicherzustellen dass das System weiterfunktioniert wenn einer ausfällt", nl: "Meerdere sensoren van hetzelfde of verschillende types hebben om ervoor te zorgen dat het systeem blijft functioneren als er één faalt" },
          { en: "Using only one type of sensor for simplicity", es: "Usar solo un tipo de sensor para simplicidad", de: "Nur einen Sensortyp für Einfachheit verwenden", nl: "Slechts één type sensor gebruiken voor eenvoud" },
          { en: "Installing extra sensors for decoration", es: "Instalar sensores extra para decoración", de: "Extra Sensoren zur Dekoration installieren", nl: "Extra sensoren installeren voor decoratie" },
          { en: "Replacing sensors frequently", es: "Reemplazar sensores frecuentemente", de: "Sensoren häufig ersetzen", nl: "Sensoren regelmatig vervangen" }
        ],
        correct: 0,
        explanation: {
          en: "Sensor redundancy is crucial for safety-critical applications, ensuring that if a LiDAR, camera, or radar fails, other sensors can compensate and maintain safe operation.",
          es: "La redundancia de sensores es crucial para aplicaciones críticas de seguridad, asegurando que si un LiDAR, cámara o radar falla, otros sensores pueden compensar y mantener operación segura.",
          de: "Sensorredundanz ist für sicherheitskritische Anwendungen entscheidend und stellt sicher dass wenn LiDAR, Kamera oder Radar ausfallen, andere Sensoren kompensieren und sicheren Betrieb aufrechterhalten können.",
          nl: "Sensor redundantie is cruciaal voor veiligheidskritische toepassingen, waarbij wordt gegarandeerd dat als een LiDAR, camera of radar faalt, andere sensoren kunnen compenseren en veilige werking kunnen handhaven."
        }
      },
      {
        question: {
          en: "How do 'automotive-grade' sensors differ from consumer-grade sensors?",
          es: "¿Cómo difieren los sensores de 'grado automotriz' de los sensores de grado de consumidor?",
          de: "Wie unterscheiden sich 'Automotive-Grade' Sensoren von Consumer-Grade Sensoren?",
          nl: "Hoe verschillen 'automotive-grade' sensoren van consumer-grade sensoren?"
        },
        options: [
          { en: "Built to withstand extreme temperatures, vibrations, and long-term reliability requirements", es: "Construidos para resistir temperaturas extremas, vibraciones y requisitos de confiabilidad a largo plazo", de: "Gebaut um extremen Temperaturen, Vibrationen und langfristigen Zuverlässigkeitsanforderungen standzuhalten", nl: "Gebouwd om extreme temperaturen, trillingen en langetermijn betrouwbaarheidseisen te weerstaan" },
          { en: "They are just more expensive versions", es: "Son solo versiones más caras", de: "Sie sind nur teurere Versionen", nl: "Het zijn alleen duurdere versies" },
          { en: "They work only in vehicles", es: "Solo funcionan en vehículos", de: "Sie funktionieren nur in Fahrzeugen", nl: "Ze werken alleen in voertuigen" },
          { en: "They have better marketing", es: "Tienen mejor marketing", de: "Sie haben besseres Marketing", nl: "Ze hebben betere marketing" }
        ],
        correct: 0,
        explanation: {
          en: "Automotive-grade sensors must meet strict quality standards for temperature ranges (-40°C to +85°C), shock resistance, electromagnetic compatibility, and 15+ year lifespans.",
          es: "Los sensores de grado automotriz deben cumplir estrictos estándares de calidad para rangos de temperatura (-40°C a +85°C), resistencia a golpes, compatibilidad electromagnética y vida útil de 15+ años.",
          de: "Automotive-Grade Sensoren müssen strenge Qualitätsstandards für Temperaturbereiche (-40°C bis +85°C), Stoßfestigkeit, elektromagnetische Verträglichkeit und 15+ Jahre Lebensdauer erfüllen.",
          nl: "Automotive-grade sensoren moeten voldoen aan strikte kwaliteitsnormen voor temperatuurbereiken (-40°C tot +85°C), schokbestendigheid, elektromagnetische compatibiliteit en levensduur van 15+ jaar."
        }
      },
      {
        question: {
          en: "What is 'time-of-flight' measurement in LiDAR and radar systems?",
          es: "¿Qué es la medición de 'tiempo de vuelo' en sistemas LiDAR y radar?",
          de: "Was ist 'Time-of-Flight' Messung in LiDAR und Radarsystemen?",
          nl: "Wat is 'time-of-flight' meting in LiDAR en radarsystemen?"
        },
        options: [
          { en: "Calculating distance by measuring how long it takes for signals to travel to objects and back", es: "Calcular distancia midiendo cuánto tiempo toma para que las señales viajen a objetos y regresen", de: "Entfernung berechnen durch Messen wie lange Signale brauchen um zu Objekten und zurück zu reisen", nl: "Afstand berekenen door te meten hoe lang het duurt voor signalen om naar objecten en terug te reizen" },
          { en: "Measuring how fast vehicles are moving", es: "Medir qué tan rápido se mueven los vehículos", de: "Messen wie schnell Fahrzeuge sich bewegen", nl: "Meten hoe snel voertuigen bewegen" },
          { en: "Calculating flight paths of aircraft", es: "Calcular rutas de vuelo de aeronaves", de: "Flugbahnen von Flugzeugen berechnen", nl: "Vliegroutes van vliegtuigen berekenen" },
          { en: "Timing traffic light changes", es: "Cronometrar cambios de semáforos", de: "Ampelwechsel timen", nl: "Verkeerslichtveranderingen timen" }
        ],
        correct: 0,
        explanation: {
          en: "Time-of-flight works on the principle that distance equals speed times time - by knowing signal speed and measuring travel time, precise distances can be calculated.",
          es: "El tiempo de vuelo funciona en el principio de que distancia es igual a velocidad por tiempo - conociendo la velocidad de la señal y midiendo tiempo de viaje, distancias precisas pueden calcularse.",
          de: "Time-of-Flight funktioniert nach dem Prinzip dass Entfernung gleich Geschwindigkeit mal Zeit ist - durch Kenntnis der Signalgeschwindigkeit und Messen der Reisezeit können präzise Entfernungen berechnet werden.",
          nl: "Time-of-flight werkt op het principe dat afstand gelijk is aan snelheid maal tijd - door de signaalsnelheid te kennen en reistijd te meten, kunnen precieze afstanden worden berekend."
        }
      },
      {
        question: {
          en: "What is 'doppler shift' and how do radar systems use it?",
          es: "¿Qué es el 'desplazamiento Doppler' y cómo lo usan los sistemas de radar?",
          de: "Was ist 'Doppler-Verschiebung' und wie nutzen Radarsysteme sie?",
          nl: "Wat is 'doppler verschuiving' en hoe gebruiken radarsystemen het?"
        },
        options: [
          { en: "Change in frequency of reflected signals used to measure object velocity and direction of movement", es: "Cambio en frecuencia de señales reflejadas usado para medir velocidad de objeto y dirección de movimiento", de: "Änderung der Frequenz reflektierter Signale zur Messung von Objektgeschwindigkeit und Bewegungsrichtung", nl: "Verandering in frequentie van gereflecteerde signalen gebruikt om objectsnelheid en bewegingsrichting te meten" },
          { en: "Physical movement of radar equipment", es: "Movimiento físico del equipo de radar", de: "Physische Bewegung der Radarausrüstung", nl: "Fysieke beweging van radarapparatuur" },
          { en: "Change in radar signal strength", es: "Cambio en fuerza de señal de radar", de: "Änderung der Radarsignalstärke", nl: "Verandering in radarsignaal sterkte" },
          { en: "Rotation of radar antenna", es: "Rotación de antena de radar", de: "Rotation der Radarantenne", nl: "Rotatie van radarantenne" }
        ],
        correct: 0,
        explanation: {
          en: "Doppler shift allows radar to distinguish between stationary and moving objects, measure their speed, and determine if they're approaching or moving away from the vehicle.",
          es: "El desplazamiento Doppler permite al radar distinguir entre objetos estacionarios y en movimiento, medir su velocidad y determinar si se acercan o se alejan del vehículo.",
          de: "Doppler-Verschiebung ermöglicht Radar zwischen stationären und beweglichen Objekten zu unterscheiden, ihre Geschwindigkeit zu messen und zu bestimmen ob sie sich dem Fahrzeug nähern oder sich entfernen.",
          nl: "Doppler verschuiving stelt radar in staat om onderscheid te maken tussen stilstaande en bewegende objecten, hun snelheid te meten en te bepalen of ze naderen of wegbewegen van het voertuig."
        }
      },
      {
        question: {
          en: "What is 'SLAM' (Simultaneous Localization and Mapping) in autonomous vehicle navigation?",
          es: "¿Qué es 'SLAM' (Localización y Mapeo Simultáneo) en navegación de vehículos autónomos?",
          de: "Was ist 'SLAM' (Simultane Lokalisierung und Kartierung) in der Navigation autonomer Fahrzeuge?",
          nl: "Wat is 'SLAM' (Simultaneous Localization and Mapping) in autonome voertuig navigatie?"
        },
        options: [
          { en: "Technology that simultaneously builds a map of the environment while tracking the vehicle's location within it", es: "Tecnología que simultáneamente construye un mapa del entorno mientras rastrea la ubicación del vehículo dentro de él", de: "Technologie die gleichzeitig eine Karte der Umgebung erstellt während sie die Fahrzeugposition darin verfolgt", nl: "Technologie die simultaan een kaart van de omgeving bouwt terwijl het de locatie van het voertuig daarbinnen volgt" },
          { en: "System for emergency braking only", es: "Sistema solo para frenado de emergencia", de: "System nur für Notbremsung", nl: "Systeem alleen voor noodremmen" },
          { en: "Software for slam-detection in accidents", es: "Software para detección de golpes en accidentes", de: "Software zur Aufprall-Erkennung bei Unfällen", nl: "Software voor botsingsdetectie bij ongelukken" },
          { en: "Method for closing vehicle doors", es: "Método para cerrar puertas de vehículos", de: "Methode zum Schließen von Fahrzeugtüren", nl: "Methode voor het sluiten van voertuigdeuren" }
        ],
        correct: 0,
        explanation: {
          en: "SLAM algorithms use sensor data to create detailed maps of unknown environments while simultaneously determining the vehicle's precise position, essential for navigation in areas without GPS.",
          es: "Los algoritmos SLAM usan datos de sensores para crear mapas detallados de entornos desconocidos mientras simultáneamente determinan la posición precisa del vehículo, esencial para navegación en áreas sin GPS.",
          de: "SLAM-Algorithmen nutzen Sensordaten um detaillierte Karten unbekannter Umgebungen zu erstellen während sie gleichzeitig die präzise Fahrzeugposition bestimmen, wesentlich für Navigation in Gebieten ohne GPS.",
          nl: "SLAM-algoritmes gebruiken sensordata om gedetailleerde kaarten van onbekende omgevingen te maken terwijl ze tegelijkertijd de precieze voertuigpositie bepalen, essentieel voor navigatie in gebieden zonder GPS."
        }
      },
      {
        question: {
          en: "What is millimeter-wave radar technology providing in autonomous vehicles?",
          es: "¿Qué está proporcionando la tecnología radar de ondas milimétricas en vehículos autónomos?",
          de: "Was bietet Millimeterwellen-Radartechnologie in autonomen Fahrzeugen?",
          nl: "Wat biedt millimetergolf radar technologie in autonome voertuigen?"
        },
        options: [
          { en: "High-resolution object detection and velocity measurement with excellent performance in adverse weather conditions", es: "Detección de objetos de alta resolución y medición de velocidad con excelente rendimiento en condiciones climáticas adversas", de: "Hochauflösende Objekterkennung und Geschwindigkeitsmessung mit exzellenter Leistung bei widrigen Wetterbedingungen", nl: "Hoge-resolutie objectdetectie en snelheidsmeting met uitstekende prestaties bij slechte weersomstandigheden" },
          { en: "Microwave cooking capabilities in vehicles", es: "Capacidades de cocción por microondas en vehículos", de: "Mikrowellen-Kochfähigkeiten in Fahrzeugen", nl: "Magnetron kookmogelijkheden in voertuigen" },
          { en: "Radio wave communication with satellites only", es: "Comunicación por ondas de radio solo con satélites", de: "Radiowellen-Kommunikation nur mit Satelliten", nl: "Radiogolf communicatie alleen met satellieten" },
          { en: "Wave pattern analysis for entertainment", es: "Análisis de patrones de ondas para entretenimiento", de: "Wellenmuster-Analyse für Unterhaltung", nl: "Golfpatroon analyse voor entertainment" }
        ],
        correct: 0,
        explanation: {
          en: "Millimeter-wave radar operates at higher frequencies than conventional radar, providing superior range resolution and the ability to distinguish between closely spaced objects even in rain, fog, or snow.",
          es: "El radar de ondas milimétricas opera a frecuencias más altas que el radar convencional, proporcionando resolución de rango superior y capacidad para distinguir entre objetos muy cercanos incluso en lluvia, niebla o nieve.",
          de: "Millimeterwellen-Radar arbeitet bei höheren Frequenzen als herkömmliches Radar und bietet überlegene Entfernungsauflösung und die Fähigkeit zwischen eng beieinander liegenden Objekten auch bei Regen, Nebel oder Schnee zu unterscheiden.",
          nl: "Millimetergolf radar werkt op hogere frequenties dan conventionele radar, biedt superieure afstandsresolutie en het vermogen om onderscheid te maken tussen dicht bij elkaar geplaatste objecten zelfs bij regen, mist of sneeuw."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();