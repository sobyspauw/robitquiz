// AI in transport - level2
// Total questions: 100
// Intermediate level transport AI concepts

module.exports = {
    questions: [
        {
            question: {
                en: "What are Level 2 autonomous vehicles?",
                es: "¿Qué son los vehículos autónomos de Nivel 2?",
                de: "Was sind autonome Fahrzeuge der Stufe 2?",
                nl: "Wat zijn niveau 2 autonome voertuigen?"
            },
            options: [
                { en: "Partial automation with driver monitoring", es: "Automatización parcial con supervisión del conductor", de: "Teilautomatisierung mit Fahrerüberwachung", nl: "Gedeeltelijke automatisering met bestuurdersbewaking" },
                { en: "Fully autonomous driving", es: "Conducción totalmente autónoma", de: "Vollständig autonomes Fahren", nl: "Volledig autonoom rijden" },
                { en: "No automation at all", es: "Sin automatización", de: "Keine Automatisierung", nl: "Geen automatisering" },
                { en: "Remote controlled vehicles", es: "Vehículos controlados remotamente", de: "Ferngesteuerte Fahrzeuge", nl: "Op afstand bestuurde voertuigen" }
            ],
            correct: 0,
            explanation: {
                en: "Level 2 vehicles can control steering and acceleration but require constant driver attention and hands on the wheel.",
                es: "Los vehículos de Nivel 2 pueden controlar la dirección y aceleración pero requieren atención constante del conductor.",
                de: "Stufe-2-Fahrzeuge können Lenkung und Beschleunigung steuern, erfordern aber ständige Fahreraufmerksamkeit.",
                nl: "Niveau 2 voertuigen kunnen sturen en accelereren maar vereisen constante aandacht van de bestuurder."
            }
        },
        {
            question: {
                en: "How does LIDAR work in autonomous vehicles?",
                es: "¿Cómo funciona LIDAR en vehículos autónomos?",
                de: "Wie funktioniert LIDAR in autonomen Fahrzeugen?",
                nl: "Hoe werkt LIDAR in autonome voertuigen?"
            },
            options: [
                { en: "Uses laser pulses to measure distances", es: "Usa pulsos láser para medir distancias", de: "Nutzt Laserimpulse zur Entfernungsmessung", nl: "Gebruikt laserpulsen om afstanden te meten" },
                { en: "Uses sound waves", es: "Usa ondas sonoras", de: "Nutzt Schallwellen", nl: "Gebruikt geluidsgolven" },
                { en: "Uses radio waves only", es: "Usa solo ondas de radio", de: "Nutzt nur Radiowellen", nl: "Gebruikt alleen radiogolven" },
                { en: "Uses camera vision", es: "Usa visión por cámara", de: "Nutzt Kameravision", nl: "Gebruikt camerazicht" }
            ],
            correct: 0,
            explanation: {
                en: "LIDAR (Light Detection and Ranging) sends laser pulses and measures return time to create 3D maps of surroundings.",
                es: "LIDAR envía pulsos láser y mide el tiempo de retorno para crear mapas 3D del entorno.",
                de: "LIDAR sendet Laserimpulse und misst die Rückkehrzeit zur Erstellung von 3D-Karten der Umgebung.",
                nl: "LIDAR zendt laserpulsen en meet de terugkeertijd om 3D-kaarten van de omgeving te maken."
            }
        },
        {
            question: {
                en: "What is sensor fusion in transport AI?",
                es: "¿Qué es la fusión de sensores en IA de transporte?",
                de: "Was ist Sensorfusion in Verkehrs-KI?",
                nl: "Wat is sensorfusie in transport AI?"
            },
            options: [
                { en: "Combining data from multiple sensors", es: "Combinar datos de múltiples sensores", de: "Kombinieren von Daten mehrerer Sensoren", nl: "Combineren van data uit meerdere sensoren" },
                { en: "Melting sensors together", es: "Fundir sensores juntos", de: "Sensoren zusammenschmelzen", nl: "Sensoren samensmelten" },
                { en: "Using one sensor only", es: "Usar solo un sensor", de: "Nur einen Sensor verwenden", nl: "Slechts één sensor gebruiken" },
                { en: "Replacing broken sensors", es: "Reemplazar sensores rotos", de: "Defekte Sensoren ersetzen", nl: "Kapotte sensoren vervangen" }
            ],
            correct: 0,
            explanation: {
                en: "Sensor fusion combines data from cameras, radar, LIDAR and other sensors to create accurate environmental understanding.",
                es: "La fusión de sensores combina datos de cámaras, radar, LIDAR y otros sensores para comprender el entorno.",
                de: "Sensorfusion kombiniert Daten von Kameras, Radar, LIDAR und anderen Sensoren für genaues Umgebungsverständnis.",
                nl: "Sensorfusie combineert data van camera's, radar, LIDAR en andere sensoren voor nauwkeurig omgevingsbegrip."
            }
        },
        {
            question: {
                en: "What is V2I communication used for?",
                es: "¿Para qué se usa la comunicación V2I?",
                de: "Wofür wird V2I-Kommunikation verwendet?",
                nl: "Waarvoor wordt V2I-communicatie gebruikt?"
            },
            options: [
                { en: "Vehicle to Infrastructure data exchange", es: "Intercambio de datos vehículo-infraestructura", de: "Fahrzeug-zu-Infrastruktur Datenaustausch", nl: "Voertuig naar infrastructuur data-uitwisseling" },
                { en: "Vehicle insurance", es: "Seguro del vehículo", de: "Fahrzeugversicherung", nl: "Voertuigverzekering" },
                { en: "Vehicle inspection", es: "Inspección del vehículo", de: "Fahrzeuginspektion", nl: "Voertuiginspectie" },
                { en: "Vehicle identification", es: "Identificación del vehículo", de: "Fahrzeugidentifikation", nl: "Voertuigidentificatie" }
            ],
            correct: 0,
            explanation: {
                en: "V2I enables vehicles to communicate with road infrastructure like traffic lights and signs for safer navigation.",
                es: "V2I permite a los vehículos comunicarse con infraestructura vial como semáforos y señales para navegación segura.",
                de: "V2I ermöglicht Fahrzeugen die Kommunikation mit Straßeninfrastruktur für sicherere Navigation.",
                nl: "V2I stelt voertuigen in staat te communiceren met weginfrastructuur voor veiligere navigatie."
            }
        },
        {
            question: {
                en: "What is platooning in trucking?",
                es: "¿Qué es el pelotón en camiones?",
                de: "Was ist Platooning im Lkw-Verkehr?",
                nl: "Wat is platooning bij vrachtwagens?"
            },
            options: [
                { en: "Trucks following closely using AI", es: "Camiones siguiendo de cerca usando IA", de: "Lkws folgen dicht mit KI", nl: "Vrachtwagens volgen dicht met AI" },
                { en: "Military truck formations", es: "Formaciones militares de camiones", de: "Militärische Lkw-Formationen", nl: "Militaire vrachtwagenformaties" },
                { en: "Truck racing teams", es: "Equipos de carreras de camiones", de: "Lkw-Rennteams", nl: "Vrachtwagen raceteams" },
                { en: "Truck parking lots", es: "Estacionamientos de camiones", de: "Lkw-Parkplätze", nl: "Vrachtwagenparkeerplaatsen" }
            ],
            correct: 0,
            explanation: {
                en: "Platooning uses AI to let trucks follow closely in convoy, reducing air resistance and fuel consumption by 10-15%.",
                es: "El pelotón usa IA para que los camiones sigan en convoy, reduciendo resistencia y consumo de combustible 10-15%.",
                de: "Platooning nutzt KI für dichte Lkw-Konvois, reduziert Luftwiderstand und Kraftstoffverbrauch um 10-15%.",
                nl: "Platooning gebruikt AI voor dichte vrachtwagenkonvooien, vermindert luchtweerstand en brandstofverbruik met 10-15%."
            }
        },
        {
            question: {
                en: "How does predictive maintenance use AI?",
                es: "¿Cómo usa IA el mantenimiento predictivo?",
                de: "Wie nutzt vorausschauende Wartung KI?",
                nl: "Hoe gebruikt predictief onderhoud AI?"
            },
            options: [
                { en: "Analyzes data to predict failures", es: "Analiza datos para predecir fallas", de: "Analysiert Daten zur Fehlervorhersage", nl: "Analyseert data om storingen te voorspellen" },
                { en: "Replaces parts randomly", es: "Reemplaza piezas aleatoriamente", de: "Ersetzt Teile zufällig", nl: "Vervangt onderdelen willekeurig" },
                { en: "Ignores vehicle data", es: "Ignora datos del vehículo", de: "Ignoriert Fahrzeugdaten", nl: "Negeert voertuigdata" },
                { en: "Only checks oil levels", es: "Solo verifica niveles de aceite", de: "Prüft nur Ölstände", nl: "Controleert alleen oliepeil" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes sensor data patterns to predict component failures before they occur, reducing unexpected breakdowns.",
                es: "La IA analiza patrones de datos de sensores para predecir fallas antes de que ocurran, reduciendo averías.",
                de: "KI analysiert Sensordatenmuster zur Vorhersage von Ausfällen, bevor sie auftreten.",
                nl: "AI analyseert sensordatapatronen om storingen te voorspellen voordat ze optreden."
            }
        },
        {
            question: {
                en: "What is geofencing in transport?",
                es: "¿Qué es el geovallado en transporte?",
                de: "Was ist Geofencing im Verkehr?",
                nl: "Wat is geofencing in transport?"
            },
            options: [
                { en: "Virtual boundaries for vehicle operation", es: "Límites virtuales para operación de vehículos", de: "Virtuelle Grenzen für Fahrzeugbetrieb", nl: "Virtuele grenzen voor voertuiggebruik" },
                { en: "Physical fences on roads", es: "Vallas físicas en carreteras", de: "Physische Zäune an Straßen", nl: "Fysieke hekken op wegen" },
                { en: "Geographic maps", es: "Mapas geográficos", de: "Geografische Karten", nl: "Geografische kaarten" },
                { en: "Fence repair services", es: "Servicios de reparación de vallas", de: "Zaunreparaturdienste", nl: "Hekreparatiediensten" }
            ],
            correct: 0,
            explanation: {
                en: "Geofencing creates virtual boundaries using GPS/RFID to control vehicle access and behavior in specific areas.",
                es: "El geovallado crea límites virtuales usando GPS/RFID para controlar acceso y comportamiento en áreas específicas.",
                de: "Geofencing erstellt virtuelle Grenzen mit GPS/RFID zur Kontrolle von Fahrzeugzugang und -verhalten.",
                nl: "Geofencing creëert virtuele grenzen met GPS/RFID om voertuigtoegang en gedrag te controleren."
            }
        },
        {
            question: {
                en: "What is MaaS in transportation?",
                es: "¿Qué es MaaS en transporte?",
                de: "Was ist MaaS im Verkehr?",
                nl: "Wat is MaaS in transport?"
            },
            options: [
                { en: "Mobility as a Service", es: "Movilidad como Servicio", de: "Mobilität als Service", nl: "Mobiliteit als Dienst" },
                { en: "Maps as a Service", es: "Mapas como Servicio", de: "Karten als Service", nl: "Kaarten als Dienst" },
                { en: "Maintenance as a Service", es: "Mantenimiento como Servicio", de: "Wartung als Service", nl: "Onderhoud als Dienst" },
                { en: "Motors as a Service", es: "Motores como Servicio", de: "Motoren als Service", nl: "Motoren als Dienst" }
            ],
            correct: 0,
            explanation: {
                en: "MaaS integrates various transport modes into a single accessible service, from planning to payment.",
                es: "MaaS integra varios modos de transporte en un servicio accesible único, desde planificación hasta pago.",
                de: "MaaS integriert verschiedene Verkehrsmittel in einen zugänglichen Service, von Planung bis Zahlung.",
                nl: "MaaS integreert verschillende transportmodi in één toegankelijke dienst, van planning tot betaling."
            }
        },
        {
            question: {
                en: "How does AI optimize traffic flow?",
                es: "¿Cómo optimiza la IA el flujo de tráfico?",
                de: "Wie optimiert KI den Verkehrsfluss?",
                nl: "Hoe optimaliseert AI de verkeersstroom?"
            },
            options: [
                { en: "Analyzes patterns and adjusts signals", es: "Analiza patrones y ajusta señales", de: "Analysiert Muster und passt Signale an", nl: "Analyseert patronen en past signalen aan" },
                { en: "Blocks all traffic", es: "Bloquea todo el tráfico", de: "Blockiert allen Verkehr", nl: "Blokkeert al het verkeer" },
                { en: "Removes traffic lights", es: "Elimina semáforos", de: "Entfernt Ampeln", nl: "Verwijdert verkeerslichten" },
                { en: "Ignores traffic data", es: "Ignora datos de tráfico", de: "Ignoriert Verkehrsdaten", nl: "Negeert verkeersdata" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes real-time traffic patterns and adjusts signal timing to reduce congestion and improve flow.",
                es: "La IA analiza patrones de tráfico en tiempo real y ajusta señales para reducir congestión.",
                de: "KI analysiert Echtzeit-Verkehrsmuster und passt Signalzeiten an, um Staus zu reduzieren.",
                nl: "AI analyseert real-time verkeerspatronen en past signaaltiming aan om congestie te verminderen."
            }
        },
        {
            question: {
                en: "What is dynamic routing?",
                es: "¿Qué es el enrutamiento dinámico?",
                de: "Was ist dynamisches Routing?",
                nl: "Wat is dynamische routering?"
            },
            options: [
                { en: "Real-time route optimization", es: "Optimización de rutas en tiempo real", de: "Echtzeit-Routenoptimierung", nl: "Real-time route-optimalisatie" },
                { en: "Fixed route planning", es: "Planificación de rutas fijas", de: "Feste Routenplanung", nl: "Vaste routeplanning" },
                { en: "Random route selection", es: "Selección aleatoria de rutas", de: "Zufällige Routenauswahl", nl: "Willekeurige routeselectie" },
                { en: "Manual navigation", es: "Navegación manual", de: "Manuelle Navigation", nl: "Handmatige navigatie" }
            ],
            correct: 0,
            explanation: {
                en: "Dynamic routing uses AI to adjust routes in real-time based on traffic, weather, and road conditions.",
                es: "El enrutamiento dinámico usa IA para ajustar rutas en tiempo real según tráfico y condiciones.",
                de: "Dynamisches Routing nutzt KI zur Echtzeit-Anpassung von Routen basierend auf Verkehr und Bedingungen.",
                nl: "Dynamische routering gebruikt AI om routes real-time aan te passen op basis van verkeer en omstandigheden."
            }
        },
        {
            question: {
                en: "What is computer vision in vehicles?",
                es: "¿Qué es la visión por computadora en vehículos?",
                de: "Was ist Computer Vision in Fahrzeugen?",
                nl: "Wat is computer vision in voertuigen?"
            },
            options: [
                { en: "AI interpreting camera images", es: "IA interpretando imágenes de cámara", de: "KI interpretiert Kamerabilder", nl: "AI interpreteert camerabeelden" },
                { en: "Dashboard computer screens", es: "Pantallas de computadora del tablero", de: "Armaturenbrett-Computerbildschirme", nl: "Dashboard computerschermen" },
                { en: "Driver vision tests", es: "Pruebas de visión del conductor", de: "Fahrer-Sehtests", nl: "Bestuurder visietesten" },
                { en: "Window tinting", es: "Tintado de ventanas", de: "Scheibentönung", nl: "Raamfolie" }
            ],
            correct: 0,
            explanation: {
                en: "Computer vision uses AI to process camera images for object detection, lane recognition, and sign reading.",
                es: "La visión por computadora usa IA para procesar imágenes para detección de objetos y reconocimiento.",
                de: "Computer Vision nutzt KI zur Bildverarbeitung für Objekterkennung und Spurerkennung.",
                nl: "Computer vision gebruikt AI om camerabeelden te verwerken voor objectdetectie en rijstrookherkenning."
            }
        },
        {
            question: {
                en: "How does AI detect driver drowsiness?",
                es: "¿Cómo detecta la IA la somnolencia del conductor?",
                de: "Wie erkennt KI Müdigkeit beim Fahrer?",
                nl: "Hoe detecteert AI slaperigheid bij bestuurders?"
            },
            options: [
                { en: "Monitors eye movements and steering", es: "Monitorea movimientos oculares y dirección", de: "Überwacht Augenbewegungen und Lenkung", nl: "Monitort oogbewegingen en stuurgedrag" },
                { en: "Asks questions", es: "Hace preguntas", de: "Stellt Fragen", nl: "Stelt vragen" },
                { en: "Checks license", es: "Verifica licencia", de: "Prüft Führerschein", nl: "Controleert rijbewijs" },
                { en: "Measures fuel level", es: "Mide nivel de combustible", de: "Misst Kraftstoffstand", nl: "Meet brandstofniveau" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes eye movements, blink patterns, and steering behavior to detect drowsiness and alert drivers.",
                es: "La IA analiza movimientos oculares, patrones de parpadeo y comportamiento para detectar somnolencia.",
                de: "KI analysiert Augenbewegungen, Blinkmuster und Lenkverhalten zur Müdigkeitserkennung.",
                nl: "AI analyseert oogbewegingen, knipperpatronen en stuurgedrag om slaperigheid te detecteren."
            }
        },
        {
            question: {
                en: "What is edge computing in transport?",
                es: "¿Qué es la computación perimetral en transporte?",
                de: "Was ist Edge Computing im Verkehr?",
                nl: "Wat is edge computing in transport?"
            },
            options: [
                { en: "Processing data near the source", es: "Procesamiento de datos cerca de la fuente", de: "Datenverarbeitung nahe der Quelle", nl: "Dataverwerking dicht bij de bron" },
                { en: "Computing at road edges", es: "Computación en bordes de carretera", de: "Berechnung an Straßenrändern", nl: "Berekeningen aan wegkanten" },
                { en: "Sharp turn calculations", es: "Cálculos de curvas cerradas", de: "Scharfe Kurvenberechnungen", nl: "Scherpe bochtberekeningen" },
                { en: "Cloud computing only", es: "Solo computación en nube", de: "Nur Cloud-Computing", nl: "Alleen cloud computing" }
            ],
            correct: 0,
            explanation: {
                en: "Edge computing processes data locally in vehicles or nearby infrastructure for faster response times.",
                es: "La computación perimetral procesa datos localmente en vehículos para respuestas más rápidas.",
                de: "Edge Computing verarbeitet Daten lokal in Fahrzeugen für schnellere Reaktionszeiten.",
                nl: "Edge computing verwerkt data lokaal in voertuigen voor snellere reactietijden."
            }
        },
        {
            question: {
                en: "What is HD mapping for autonomous cars?",
                es: "¿Qué es el mapeo HD para autos autónomos?",
                de: "Was ist HD-Kartierung für autonome Autos?",
                nl: "Wat is HD-mapping voor autonome auto's?"
            },
            options: [
                { en: "Centimeter-accurate 3D road maps", es: "Mapas 3D de carreteras con precisión centimétrica", de: "Zentimetergenaue 3D-Straßenkarten", nl: "Centimeter-nauwkeurige 3D-wegenkaarten" },
                { en: "High definition video", es: "Video de alta definición", de: "High-Definition-Video", nl: "High definition video" },
                { en: "Hard drive mapping", es: "Mapeo de disco duro", de: "Festplattenkartierung", nl: "Harde schijf mapping" },
                { en: "Historical data maps", es: "Mapas de datos históricos", de: "Historische Datenkarten", nl: "Historische datakaarten" }
            ],
            correct: 0,
            explanation: {
                en: "HD maps provide centimeter-level accurate 3D representations of roads, signs, and infrastructure for navigation.",
                es: "Los mapas HD proporcionan representaciones 3D precisas de carreteras y señales para navegación.",
                de: "HD-Karten bieten zentimetergenaue 3D-Darstellungen von Straßen und Schildern für Navigation.",
                nl: "HD-kaarten bieden centimeter-nauwkeurige 3D-representaties van wegen en borden voor navigatie."
            }
        },
        {
            question: {
                en: "How does AI manage intersection traffic?",
                es: "¿Cómo gestiona la IA el tráfico en intersecciones?",
                de: "Wie verwaltet KI Kreuzungsverkehr?",
                nl: "Hoe beheert AI kruispuntverkeer?"
            },
            options: [
                { en: "Coordinates signals and predicts flow", es: "Coordina señales y predice flujo", de: "Koordiniert Signale und prognostiziert Fluss", nl: "Coördineert signalen en voorspelt stroom" },
                { en: "Removes all signals", es: "Elimina todas las señales", de: "Entfernt alle Signale", nl: "Verwijdert alle signalen" },
                { en: "Blocks intersections", es: "Bloquea intersecciones", de: "Blockiert Kreuzungen", nl: "Blokkeert kruispunten" },
                { en: "Uses random timing", es: "Usa tiempo aleatorio", de: "Nutzt zufällige Zeiten", nl: "Gebruikt willekeurige timing" }
            ],
            correct: 0,
            explanation: {
                en: "AI coordinates traffic signals and predicts vehicle flow to minimize wait times and prevent gridlock.",
                es: "La IA coordina señales de tráfico y predice flujo vehicular para minimizar tiempos de espera.",
                de: "KI koordiniert Verkehrssignale und prognostiziert Fahrzeugfluss zur Minimierung von Wartezeiten.",
                nl: "AI coördineert verkeerssignalen en voorspelt voertuigstroom om wachttijden te minimaliseren."
            }
        },
        {
            question: {
                en: "What is swarm intelligence in transport?",
                es: "¿Qué es la inteligencia de enjambre en transporte?",
                de: "Was ist Schwarmintelligenz im Verkehr?",
                nl: "Wat is zwermintelligentie in transport?"
            },
            options: [
                { en: "Collective behavior optimization", es: "Optimización del comportamiento colectivo", de: "Kollektive Verhaltensoptimierung", nl: "Collectieve gedragsoptimalisatie" },
                { en: "Bee transportation", es: "Transporte de abejas", de: "Bienentransport", nl: "Bijentransport" },
                { en: "Single vehicle control", es: "Control de vehículo único", de: "Einzelfahrzeugkontrolle", nl: "Enkel voertuigcontrole" },
                { en: "Swarm of insects", es: "Enjambre de insectos", de: "Insektenschwarm", nl: "Zwerm insecten" }
            ],
            correct: 0,
            explanation: {
                en: "Swarm intelligence uses decentralized AI algorithms inspired by nature to optimize traffic and fleet behavior.",
                es: "La inteligencia de enjambre usa algoritmos IA descentralizados para optimizar tráfico y flotas.",
                de: "Schwarmintelligenz nutzt dezentrale KI-Algorithmen zur Optimierung von Verkehr und Flotten.",
                nl: "Zwermintelligentie gebruikt gedecentraliseerde AI-algoritmen om verkeer en vloten te optimaliseren."
            }
        },
        {
            question: {
                en: "What is vehicle telematics?",
                es: "¿Qué es la telemática vehicular?",
                de: "Was ist Fahrzeugtelematik?",
                nl: "Wat is voertuigtelematica?"
            },
            options: [
                { en: "Remote monitoring and data transmission", es: "Monitoreo remoto y transmisión de datos", de: "Fernüberwachung und Datenübertragung", nl: "Monitoring op afstand en datatransmissie" },
                { en: "Television in cars", es: "Televisión en autos", de: "Fernsehen in Autos", nl: "Televisie in auto's" },
                { en: "Automatic transmission", es: "Transmisión automática", de: "Automatikgetriebe", nl: "Automatische transmissie" },
                { en: "Telephone systems", es: "Sistemas telefónicos", de: "Telefonsysteme", nl: "Telefoonsystemen" }
            ],
            correct: 0,
            explanation: {
                en: "Telematics combines GPS and onboard diagnostics to transmit vehicle data for fleet management and insurance.",
                es: "La telemática combina GPS y diagnósticos para transmitir datos para gestión de flotas y seguros.",
                de: "Telematik kombiniert GPS und Borddiagnose zur Datenübertragung für Flottenmanagement.",
                nl: "Telematica combineert GPS en boorddiagnose om voertuigdata te verzenden voor vlootbeheer."
            }
        },
        {
            question: {
                en: "How does AI predict traffic accidents?",
                es: "¿Cómo predice la IA accidentes de tráfico?",
                de: "Wie prognostiziert KI Verkehrsunfälle?",
                nl: "Hoe voorspelt AI verkeersongelukken?"
            },
            options: [
                { en: "Analyzes patterns and risk factors", es: "Analiza patrones y factores de riesgo", de: "Analysiert Muster und Risikofaktoren", nl: "Analyseert patronen en risicofactoren" },
                { en: "Random predictions", es: "Predicciones aleatorias", de: "Zufällige Vorhersagen", nl: "Willekeurige voorspellingen" },
                { en: "Crystal ball method", es: "Método de bola de cristal", de: "Kristallkugel-Methode", nl: "Kristallen bol methode" },
                { en: "Ignores all data", es: "Ignora todos los datos", de: "Ignoriert alle Daten", nl: "Negeert alle data" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes historical data, weather, traffic patterns, and driver behavior to predict accident hotspots.",
                es: "La IA analiza datos históricos, clima y patrones para predecir puntos críticos de accidentes.",
                de: "KI analysiert historische Daten, Wetter und Muster zur Vorhersage von Unfallschwerpunkten.",
                nl: "AI analyseert historische data, weer en patronen om ongevalshotspots te voorspellen."
            }
        },
        {
            question: {
                en: "What is cooperative adaptive cruise control?",
                es: "¿Qué es el control de crucero adaptativo cooperativo?",
                de: "Was ist kooperative adaptive Geschwindigkeitsregelung?",
                nl: "Wat is coöperatieve adaptieve cruisecontrol?"
            },
            options: [
                { en: "Vehicles sharing speed data", es: "Vehículos compartiendo datos de velocidad", de: "Fahrzeuge teilen Geschwindigkeitsdaten", nl: "Voertuigen delen snelheidsdata" },
                { en: "Manual speed control", es: "Control manual de velocidad", de: "Manuelle Geschwindigkeitskontrolle", nl: "Handmatige snelheidscontrole" },
                { en: "Fixed cruise speed", es: "Velocidad de crucero fija", de: "Feste Reisegeschwindigkeit", nl: "Vaste cruisesnelheid" },
                { en: "Speed limit signs", es: "Señales de límite de velocidad", de: "Geschwindigkeitsbegrenzungsschilder", nl: "Snelheidslimietborden" }
            ],
            correct: 0,
            explanation: {
                en: "CACC uses V2V communication to share speed and braking data between vehicles for smoother traffic flow.",
                es: "CACC usa comunicación V2V para compartir datos de velocidad y frenado para flujo más suave.",
                de: "CACC nutzt V2V-Kommunikation zum Teilen von Geschwindigkeits- und Bremsdaten für flüssigeren Verkehr.",
                nl: "CACC gebruikt V2V-communicatie om snelheids- en remdata te delen voor soepeler verkeer."
            }
        },
        {
            question: {
                en: "What are digital twins in transport?",
                es: "¿Qué son los gemelos digitales en transporte?",
                de: "Was sind digitale Zwillinge im Verkehr?",
                nl: "Wat zijn digitale tweelingen in transport?"
            },
            options: [
                { en: "Virtual replicas of physical systems", es: "Réplicas virtuales de sistemas físicos", de: "Virtuelle Replikate physischer Systeme", nl: "Virtuele replica's van fysieke systemen" },
                { en: "Twin engines in vehicles", es: "Motores gemelos en vehículos", de: "Zwillingsmotoren in Fahrzeugen", nl: "Tweeling motoren in voertuigen" },
                { en: "Duplicate licenses", es: "Licencias duplicadas", de: "Doppelte Lizenzen", nl: "Dubbele licenties" },
                { en: "Two-way roads", es: "Carreteras de dos vías", de: "Zweispurige Straßen", nl: "Tweerichtingswegen" }
            ],
            correct: 0,
            explanation: {
                en: "Digital twins create virtual replicas of vehicles or infrastructure to simulate and optimize performance.",
                es: "Los gemelos digitales crean réplicas virtuales de vehículos para simular y optimizar rendimiento.",
                de: "Digitale Zwillinge erstellen virtuelle Replikate von Fahrzeugen zur Simulation und Optimierung.",
                nl: "Digitale tweelingen maken virtuele replica's van voertuigen om prestaties te simuleren en optimaliseren."
            }
        },
        {
            question: {
                en: "How does AI handle emergency vehicles?",
                es: "¿Cómo maneja la IA vehículos de emergencia?",
                de: "Wie handhabt KI Notfahrzeuge?",
                nl: "Hoe behandelt AI hulpverleningsvoertuigen?"
            },
            options: [
                { en: "Prioritizes routes and clears paths", es: "Prioriza rutas y despeja caminos", de: "Priorisiert Routen und räumt Wege", nl: "Prioriteert routes en maakt paden vrij" },
                { en: "Blocks emergency vehicles", es: "Bloquea vehículos de emergencia", de: "Blockiert Notfahrzeuge", nl: "Blokkeert hulpverleningsvoertuigen" },
                { en: "Ignores them completely", es: "Los ignora completamente", de: "Ignoriert sie vollständig", nl: "Negeert ze volledig" },
                { en: "Slows them down", es: "Los ralentiza", de: "Verlangsamt sie", nl: "Vertraagt ze" }
            ],
            correct: 0,
            explanation: {
                en: "AI systems detect emergency vehicles and adjust traffic signals to create clear paths for faster response.",
                es: "Los sistemas IA detectan vehículos de emergencia y ajustan señales para crear rutas despejadas.",
                de: "KI-Systeme erkennen Notfahrzeuge und passen Signale an, um freie Wege zu schaffen.",
                nl: "AI-systemen detecteren hulpverleningsvoertuigen en passen signalen aan voor vrije doorgang."
            }
        },
        {
            question: {
                en: "What is lane centering assistance?",
                es: "¿Qué es la asistencia de centrado de carril?",
                de: "Was ist Spurzentrierung?",
                nl: "Wat is rijstrookcentrering?"
            },
            options: [
                { en: "AI keeps vehicle centered in lane", es: "IA mantiene vehículo centrado en carril", de: "KI hält Fahrzeug in Spurmitte", nl: "AI houdt voertuig gecentreerd in rijstrook" },
                { en: "Manual steering only", es: "Solo dirección manual", de: "Nur manuelle Lenkung", nl: "Alleen handmatig sturen" },
                { en: "Lane painting service", es: "Servicio de pintura de carriles", de: "Spurmarkierungsdienst", nl: "Rijstrookmarkeringsdienst" },
                { en: "Center console feature", es: "Característica de consola central", de: "Mittelkonsolen-Funktion", nl: "Middenconsole functie" }
            ],
            correct: 0,
            explanation: {
                en: "Lane centering uses cameras and AI to detect lane markings and automatically adjust steering to stay centered.",
                es: "El centrado de carril usa cámaras e IA para detectar marcas y ajustar dirección automáticamente.",
                de: "Spurzentrierung nutzt Kameras und KI zur Erkennung von Markierungen und automatischer Lenkung.",
                nl: "Rijstrookcentrering gebruikt camera's en AI om markeringen te detecteren en sturen aan te passen."
            }
        },
        {
            question: {
                en: "What is intelligent speed adaptation?",
                es: "¿Qué es la adaptación inteligente de velocidad?",
                de: "Was ist intelligente Geschwindigkeitsanpassung?",
                nl: "Wat is intelligente snelheidsaanpassing?"
            },
            options: [
                { en: "Automatic speed limit compliance", es: "Cumplimiento automático de límites", de: "Automatische Geschwindigkeitsbegrenzung", nl: "Automatische snelheidslimiet naleving" },
                { en: "Random speed changes", es: "Cambios aleatorios de velocidad", de: "Zufällige Geschwindigkeitsänderungen", nl: "Willekeurige snelheidsveranderingen" },
                { en: "Manual speed setting", es: "Ajuste manual de velocidad", de: "Manuelle Geschwindigkeitseinstellung", nl: "Handmatige snelheidsinstelling" },
                { en: "Speed racing mode", es: "Modo de carreras", de: "Rennmodus", nl: "Race modus" }
            ],
            correct: 0,
            explanation: {
                en: "ISA uses GPS and sign recognition to automatically adjust vehicle speed to match legal limits.",
                es: "ISA usa GPS y reconocimiento de señales para ajustar velocidad a límites legales.",
                de: "ISA nutzt GPS und Schildererkennung zur automatischen Anpassung an Geschwindigkeitsbegrenzungen.",
                nl: "ISA gebruikt GPS en bordenherkenning om voertuigsnelheid aan te passen aan wettelijke limieten."
            }
        },
        {
            question: {
                en: "How does AI optimize fuel consumption?",
                es: "¿Cómo optimiza la IA el consumo de combustible?",
                de: "Wie optimiert KI den Kraftstoffverbrauch?",
                nl: "Hoe optimaliseert AI brandstofverbruik?"
            },
            options: [
                { en: "Analyzes driving patterns and routes", es: "Analiza patrones de conducción y rutas", de: "Analysiert Fahrmuster und Routen", nl: "Analyseert rijpatronen en routes" },
                { en: "Uses more fuel", es: "Usa más combustible", de: "Verbraucht mehr Kraftstoff", nl: "Gebruikt meer brandstof" },
                { en: "Ignores efficiency", es: "Ignora la eficiencia", de: "Ignoriert Effizienz", nl: "Negeert efficiëntie" },
                { en: "Random fuel injection", es: "Inyección aleatoria de combustible", de: "Zufällige Kraftstoffeinspritzung", nl: "Willekeurige brandstofinjectie" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes driving behavior, traffic conditions, and routes to suggest optimal speeds and paths for fuel efficiency.",
                es: "La IA analiza comportamiento, tráfico y rutas para sugerir velocidades óptimas para eficiencia.",
                de: "KI analysiert Fahrverhalten, Verkehr und Routen für optimale Geschwindigkeiten und Effizienz.",
                nl: "AI analyseert rijgedrag, verkeer en routes voor optimale snelheden en brandstofefficiëntie."
            }
        },
        {
            question: {
                en: "What is automated valet parking?",
                es: "¿Qué es el estacionamiento automático con valet?",
                de: "Was ist automatisches Valet-Parken?",
                nl: "Wat is geautomatiseerd valet parkeren?"
            },
            options: [
                { en: "Vehicle parks itself remotely", es: "Vehículo se estaciona solo remotamente", de: "Fahrzeug parkt selbstständig ein", nl: "Voertuig parkeert zichzelf op afstand" },
                { en: "Human valet service", es: "Servicio de valet humano", de: "Menschlicher Valet-Service", nl: "Menselijke valet service" },
                { en: "Parking meter payment", es: "Pago de parquímetro", de: "Parkuhrzahlung", nl: "Parkeermeter betaling" },
                { en: "Parking lot design", es: "Diseño de estacionamiento", de: "Parkplatzgestaltung", nl: "Parkeerplaats ontwerp" }
            ],
            correct: 0,
            explanation: {
                en: "AVP allows vehicles to find and navigate to parking spaces autonomously after passengers exit.",
                es: "AVP permite a vehículos encontrar y navegar a espacios de estacionamiento autónomamente.",
                de: "AVP ermöglicht Fahrzeugen, selbstständig Parkplätze zu finden und einzuparken.",
                nl: "AVP stelt voertuigen in staat autonoom parkeerplaatsen te vinden en in te parkeren."
            }
        },
        {
            question: {
                en: "What is road weather information system?",
                es: "¿Qué es el sistema de información meteorológica vial?",
                de: "Was ist ein Straßenwetter-Informationssystem?",
                nl: "Wat is een wegweer informatiesysteem?"
            },
            options: [
                { en: "AI analyzing weather impact on roads", es: "IA analizando impacto del clima en carreteras", de: "KI analysiert Wetterauswirkungen auf Straßen", nl: "AI analyseert weersinvloed op wegen" },
                { en: "Weather forecast TV", es: "TV de pronóstico del tiempo", de: "Wetter-Fernseher", nl: "Weerbericht TV" },
                { en: "Road construction info", es: "Información de construcción vial", de: "Straßenbau-Information", nl: "Wegwerkzaamheden info" },
                { en: "Traffic news radio", es: "Radio de noticias de tráfico", de: "Verkehrsnachrichten-Radio", nl: "Verkeersnieuws radio" }
            ],
            correct: 0,
            explanation: {
                en: "RWIS uses sensors and AI to monitor weather conditions and predict their impact on road safety.",
                es: "RWIS usa sensores e IA para monitorear condiciones climáticas y predecir impacto en seguridad.",
                de: "RWIS nutzt Sensoren und KI zur Überwachung von Wetterbedingungen und Sicherheitsvorhersage.",
                nl: "RWIS gebruikt sensoren en AI om weersomstandigheden te monitoren en impact op veiligheid te voorspellen."
            }
        },
        {
            question: {
                en: "How does AI detect road damage?",
                es: "¿Cómo detecta la IA daños en carreteras?",
                de: "Wie erkennt KI Straßenschäden?",
                nl: "Hoe detecteert AI wegschade?"
            },
            options: [
                { en: "Image analysis of road surface", es: "Análisis de imagen de superficie vial", de: "Bildanalyse der Straßenoberfläche", nl: "Beeldanalyse van wegoppervlak" },
                { en: "Manual inspection only", es: "Solo inspección manual", de: "Nur manuelle Inspektion", nl: "Alleen handmatige inspectie" },
                { en: "Ignoring road conditions", es: "Ignorando condiciones viales", de: "Ignorieren von Straßenzuständen", nl: "Negeren van wegcondities" },
                { en: "Random guessing", es: "Adivinanza aleatoria", de: "Zufälliges Raten", nl: "Willekeurig gokken" }
            ],
            correct: 0,
            explanation: {
                en: "AI uses computer vision to analyze images from vehicles or drones to detect potholes and cracks.",
                es: "La IA usa visión por computadora para analizar imágenes y detectar baches y grietas.",
                de: "KI nutzt Computer Vision zur Bildanalyse von Fahrzeugen oder Drohnen für Schlagloch-Erkennung.",
                nl: "AI gebruikt computer vision om beelden te analyseren en kuilen en scheuren te detecteren."
            }
        },
        {
            question: {
                en: "What is smart parking guidance?",
                es: "¿Qué es la guía inteligente de estacionamiento?",
                de: "Was ist intelligente Parkführung?",
                nl: "Wat is slimme parkeerbegeleiding?"
            },
            options: [
                { en: "AI directing to available spaces", es: "IA dirigiendo a espacios disponibles", de: "KI leitet zu freien Plätzen", nl: "AI leidt naar beschikbare plaatsen" },
                { en: "Parking lot security", es: "Seguridad del estacionamiento", de: "Parkplatzsicherheit", nl: "Parkeerplaats beveiliging" },
                { en: "Parking fee collection", es: "Cobro de tarifas de estacionamiento", de: "Parkgebührenerhebung", nl: "Parkeergeld inning" },
                { en: "Car washing service", es: "Servicio de lavado de autos", de: "Autowaschdienst", nl: "Autowasservice" }
            ],
            correct: 0,
            explanation: {
                en: "Smart parking uses sensors and AI to detect available spaces and guide drivers via apps or displays.",
                es: "El estacionamiento inteligente usa sensores e IA para detectar espacios y guiar conductores.",
                de: "Intelligentes Parken nutzt Sensoren und KI zur Erkennung freier Plätze und Fahrerführung.",
                nl: "Slim parkeren gebruikt sensoren en AI om vrije plaatsen te detecteren en bestuurders te leiden."
            }
        },
        {
            question: {
                en: "What is traffic incident management AI?",
                es: "¿Qué es la IA de gestión de incidentes de tráfico?",
                de: "Was ist KI für Verkehrsvorfallmanagement?",
                nl: "Wat is verkeersincident management AI?"
            },
            options: [
                { en: "Rapid detection and response coordination", es: "Detección rápida y coordinación de respuesta", de: "Schnelle Erkennung und Reaktionskoordination", nl: "Snelle detectie en respons coördinatie" },
                { en: "Creating traffic incidents", es: "Creando incidentes de tráfico", de: "Verkehrsvorfälle erzeugen", nl: "Verkeersincidenten creëren" },
                { en: "Ignoring accidents", es: "Ignorando accidentes", de: "Unfälle ignorieren", nl: "Ongevallen negeren" },
                { en: "Traffic ticket system", es: "Sistema de multas de tráfico", de: "Verkehrsticket-System", nl: "Verkeersboete systeem" }
            ],
            correct: 0,
            explanation: {
                en: "TIM AI detects incidents via cameras and sensors, then coordinates emergency response and traffic rerouting.",
                es: "TIM IA detecta incidentes con cámaras y sensores, coordina respuesta y desvío de tráfico.",
                de: "TIM KI erkennt Vorfälle über Kameras und Sensoren, koordiniert Notfallreaktion und Umleitung.",
                nl: "TIM AI detecteert incidenten via camera's en sensoren, coördineert hulpverlening en omleiding."
            }
        },
        {
            question: {
                en: "How does AI improve public transit?",
                es: "¿Cómo mejora la IA el transporte público?",
                de: "Wie verbessert KI den öffentlichen Verkehr?",
                nl: "Hoe verbetert AI openbaar vervoer?"
            },
            options: [
                { en: "Optimizes schedules and predicts delays", es: "Optimiza horarios y predice retrasos", de: "Optimiert Fahrpläne und prognostiziert Verspätungen", nl: "Optimaliseert dienstregelingen en voorspelt vertragingen" },
                { en: "Eliminates all buses", es: "Elimina todos los autobuses", de: "Beseitigt alle Busse", nl: "Elimineert alle bussen" },
                { en: "Increases ticket prices", es: "Aumenta precios de boletos", de: "Erhöht Ticketpreise", nl: "Verhoogt ticketprijzen" },
                { en: "Reduces service hours", es: "Reduce horas de servicio", de: "Reduziert Servicezeiten", nl: "Vermindert diensturen" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes passenger patterns and traffic to optimize routes, schedules, and predict maintenance needs.",
                es: "La IA analiza patrones de pasajeros y tráfico para optimizar rutas, horarios y mantenimiento.",
                de: "KI analysiert Fahrgastmuster und Verkehr zur Optimierung von Routen und Fahrplänen.",
                nl: "AI analyseert passagierspatronen en verkeer om routes en dienstregelingen te optimaliseren."
            }
        },
        {
            question: {
                en: "What is multimodal journey planning?",
                es: "¿Qué es la planificación de viajes multimodal?",
                de: "Was ist multimodale Reiseplanung?",
                nl: "Wat is multimodale reisplanning?"
            },
            options: [
                { en: "Combining different transport modes", es: "Combinando diferentes modos de transporte", de: "Kombination verschiedener Verkehrsmittel", nl: "Combineren van verschillende transportmodi" },
                { en: "Using one vehicle only", es: "Usando solo un vehículo", de: "Nur ein Fahrzeug nutzen", nl: "Slechts één voertuig gebruiken" },
                { en: "Walking everywhere", es: "Caminando a todas partes", de: "Überall zu Fuß gehen", nl: "Overal lopen" },
                { en: "Staying at home", es: "Quedándose en casa", de: "Zu Hause bleiben", nl: "Thuisblijven" }
            ],
            correct: 0,
            explanation: {
                en: "AI plans optimal routes using combinations of car, public transit, bike, and walking for efficiency.",
                es: "La IA planifica rutas óptimas combinando auto, transporte público, bicicleta y caminata.",
                de: "KI plant optimale Routen durch Kombination von Auto, ÖPNV, Fahrrad und Fußweg.",
                nl: "AI plant optimale routes door combinaties van auto, OV, fiets en lopen voor efficiëntie."
            }
        },
        {
            question: {
                en: "What is blind spot intervention?",
                es: "¿Qué es la intervención de punto ciego?",
                de: "Was ist Toter-Winkel-Intervention?",
                nl: "Wat is dodehoek interventie?"
            },
            options: [
                { en: "AI prevents lane changes into danger", es: "IA previene cambios de carril peligrosos", de: "KI verhindert gefährliche Spurwechsel", nl: "AI voorkomt gevaarlijke rijstrookwissels" },
                { en: "Fixing broken mirrors", es: "Arreglando espejos rotos", de: "Defekte Spiegel reparieren", nl: "Kapotte spiegels repareren" },
                { en: "Window cleaning service", es: "Servicio de limpieza de ventanas", de: "Fensterreinigungsdienst", nl: "Ruitenreinigingsservice" },
                { en: "Sunglasses for drivers", es: "Gafas de sol para conductores", de: "Sonnenbrillen für Fahrer", nl: "Zonnebrillen voor bestuurders" }
            ],
            correct: 0,
            explanation: {
                en: "BSI uses sensors to detect vehicles in blind spots and actively steers or brakes to prevent collisions.",
                es: "BSI usa sensores para detectar vehículos en puntos ciegos y frena para prevenir colisiones.",
                de: "BSI nutzt Sensoren zur Erkennung im toten Winkel und lenkt oder bremst aktiv.",
                nl: "BSI gebruikt sensoren om voertuigen in dode hoeken te detecteren en stuurt of remt actief."
            }
        },
        {
            question: {
                en: "How does AI manage toll collection?",
                es: "¿Cómo gestiona la IA el cobro de peajes?",
                de: "Wie verwaltet KI die Mauterhebung?",
                nl: "Hoe beheert AI tolheffing?"
            },
            options: [
                { en: "Automatic vehicle identification and billing", es: "Identificación automática de vehículos y facturación", de: "Automatische Fahrzeugerkennung und Abrechnung", nl: "Automatische voertuigidentificatie en facturering" },
                { en: "Manual cash collection", es: "Cobro manual en efectivo", de: "Manuelle Bargelderhebung", nl: "Handmatige contante inning" },
                { en: "Free passage for all", es: "Paso libre para todos", de: "Freie Durchfahrt für alle", nl: "Gratis doorgang voor iedereen" },
                { en: "Closing all toll roads", es: "Cerrando todas las autopistas de peaje", de: "Alle Mautstraßen schließen", nl: "Alle tolwegen sluiten" }
            ],
            correct: 0,
            explanation: {
                en: "AI uses license plate recognition and RFID tags to automatically identify vehicles and process payments.",
                es: "La IA usa reconocimiento de placas y etiquetas RFID para identificar vehículos y procesar pagos.",
                de: "KI nutzt Kennzeichenerkennung und RFID-Tags zur automatischen Fahrzeugidentifikation.",
                nl: "AI gebruikt kentekenherkenning en RFID-tags om voertuigen te identificeren en betalingen te verwerken."
            }
        },
        {
            question: {
                en: "What is connected vehicle technology?",
                es: "¿Qué es la tecnología de vehículos conectados?",
                de: "Was ist vernetzte Fahrzeugtechnologie?",
                nl: "Wat is connected vehicle technologie?"
            },
            options: [
                { en: "Vehicles sharing data with networks", es: "Vehículos compartiendo datos con redes", de: "Fahrzeuge teilen Daten mit Netzwerken", nl: "Voertuigen delen data met netwerken" },
                { en: "Physical chains between cars", es: "Cadenas físicas entre autos", de: "Physische Ketten zwischen Autos", nl: "Fysieke kettingen tussen auto's" },
                { en: "Car dealership networks", es: "Redes de concesionarios", de: "Autohändler-Netzwerke", nl: "Autodealernetwerken" },
                { en: "Social media for cars", es: "Redes sociales para autos", de: "Soziale Medien für Autos", nl: "Sociale media voor auto's" }
            ],
            correct: 0,
            explanation: {
                en: "Connected vehicles use wireless networks to share data with other vehicles, infrastructure, and cloud services.",
                es: "Los vehículos conectados usan redes inalámbricas para compartir datos con otros vehículos y servicios.",
                de: "Vernetzte Fahrzeuge nutzen drahtlose Netzwerke zum Datenaustausch mit anderen Fahrzeugen.",
                nl: "Connected vehicles gebruiken draadloze netwerken om data te delen met andere voertuigen en diensten."
            }
        },
        {
            question: {
                en: "What is autonomous last-mile delivery?",
                es: "¿Qué es la entrega autónoma de última milla?",
                de: "Was ist autonome Letzte-Meile-Lieferung?",
                nl: "Wat is autonome last-mile bezorging?"
            },
            options: [
                { en: "Robots and drones delivering packages", es: "Robots y drones entregando paquetes", de: "Roboter und Drohnen liefern Pakete", nl: "Robots en drones bezorgen pakketten" },
                { en: "Manual delivery only", es: "Solo entrega manual", de: "Nur manuelle Lieferung", nl: "Alleen handmatige bezorging" },
                { en: "Long distance trucking", es: "Camiones de larga distancia", de: "Fernverkehr-Lkw", nl: "Lange afstand vrachtwagens" },
                { en: "Airport baggage claim", es: "Reclamo de equipaje del aeropuerto", de: "Flughafen-Gepäckausgabe", nl: "Luchthaven bagageafhandeling" }
            ],
            correct: 0,
            explanation: {
                en: "Autonomous delivery uses robots, drones, or small vehicles for final delivery from hub to customer.",
                es: "La entrega autónoma usa robots, drones o vehículos pequeños para entrega final al cliente.",
                de: "Autonome Lieferung nutzt Roboter, Drohnen oder kleine Fahrzeuge für Endlieferung zum Kunden.",
                nl: "Autonome bezorging gebruikt robots, drones of kleine voertuigen voor levering aan klant."
            }
        },
        {
            question: {
                en: "How does AI detect traffic violations?",
                es: "¿Cómo detecta la IA violaciones de tráfico?",
                de: "Wie erkennt KI Verkehrsverstöße?",
                nl: "Hoe detecteert AI verkeersovertredingen?"
            },
            options: [
                { en: "Computer vision analyzing camera footage", es: "Visión por computadora analizando imágenes", de: "Computer Vision analysiert Kameraaufnahmen", nl: "Computer vision analyseert camerabeelden" },
                { en: "Random ticket generation", es: "Generación aleatoria de multas", de: "Zufällige Ticketerzeugung", nl: "Willekeurige boete generatie" },
                { en: "Manual observation only", es: "Solo observación manual", de: "Nur manuelle Beobachtung", nl: "Alleen handmatige observatie" },
                { en: "Ignoring all violations", es: "Ignorando todas las violaciones", de: "Alle Verstöße ignorieren", nl: "Alle overtredingen negeren" }
            ],
            correct: 0,
            explanation: {
                en: "AI uses computer vision to detect speeding, red light violations, and illegal parking from camera systems.",
                es: "La IA usa visión por computadora para detectar exceso de velocidad y violaciones desde cámaras.",
                de: "KI nutzt Computer Vision zur Erkennung von Geschwindigkeitsüberschreitungen aus Kamerasystemen.",
                nl: "AI gebruikt computer vision om snelheidsovertredingen en roodlichtnegatie te detecteren."
            }
        },
        {
            question: {
                en: "What is vehicle-to-grid technology?",
                es: "¿Qué es la tecnología vehículo a red?",
                de: "Was ist Vehicle-to-Grid-Technologie?",
                nl: "Wat is vehicle-to-grid technologie?"
            },
            options: [
                { en: "EVs providing power back to grid", es: "VE proporcionando energía a la red", de: "EVs liefern Strom ans Netz zurück", nl: "EV's leveren stroom terug aan net" },
                { en: "Cars on display grid", es: "Autos en cuadrícula de exhibición", de: "Autos im Ausstellungsraster", nl: "Auto's op display grid" },
                { en: "Racing grid positions", es: "Posiciones de parrilla de carrera", de: "Rennstartplätze", nl: "Race grid posities" },
                { en: "Parking lot layout", es: "Diseño de estacionamiento", de: "Parkplatzlayout", nl: "Parkeerplaats indeling" }
            ],
            correct: 0,
            explanation: {
                en: "V2G allows electric vehicles to feed stored energy back to the power grid during peak demand.",
                es: "V2G permite a vehículos eléctricos devolver energía almacenada a la red durante alta demanda.",
                de: "V2G ermöglicht Elektrofahrzeugen, gespeicherte Energie bei Spitzenbedarf ans Netz zurückzugeben.",
                nl: "V2G stelt elektrische voertuigen in staat opgeslagen energie terug te leveren tijdens piekverbruik."
            }
        },
        {
            question: {
                en: "What is adaptive traffic signal control?",
                es: "¿Qué es el control adaptativo de señales de tráfico?",
                de: "Was ist adaptive Verkehrssignalsteuerung?",
                nl: "Wat is adaptieve verkeerssignaalregeling?"
            },
            options: [
                { en: "Signals adjust to real-time traffic", es: "Señales se ajustan al tráfico en tiempo real", de: "Signale passen sich an Echtzeit-Verkehr an", nl: "Signalen passen zich aan real-time verkeer aan" },
                { en: "Fixed timing patterns", es: "Patrones de tiempo fijos", de: "Feste Zeitmuster", nl: "Vaste tijdpatronen" },
                { en: "Manual control only", es: "Solo control manual", de: "Nur manuelle Steuerung", nl: "Alleen handmatige controle" },
                { en: "No signals at all", es: "Sin señales en absoluto", de: "Keine Signale", nl: "Geen signalen" }
            ],
            correct: 0,
            explanation: {
                en: "ATSC uses sensors and AI to adjust signal timing based on actual traffic conditions for better flow.",
                es: "ATSC usa sensores e IA para ajustar tiempo de señales según condiciones reales de tráfico.",
                de: "ATSC nutzt Sensoren und KI zur Anpassung der Signalzeiten basierend auf Verkehrsbedingungen.",
                nl: "ATSC gebruikt sensoren en AI om signaaltiming aan te passen op basis van werkelijke verkeersomstandigheden."
            }
        },
        {
            question: {
                en: "How does AI assist in route optimization?",
                es: "¿Cómo ayuda la IA en la optimización de rutas?",
                de: "Wie unterstützt KI die Routenoptimierung?",
                nl: "Hoe helpt AI bij route-optimalisatie?"
            },
            options: [
                { en: "Calculates fastest path considering all factors", es: "Calcula ruta más rápida considerando factores", de: "Berechnet schnellsten Weg unter Berücksichtigung aller Faktoren", nl: "Berekent snelste route met alle factoren" },
                { en: "Always takes longest route", es: "Siempre toma la ruta más larga", de: "Nimmt immer längste Route", nl: "Neemt altijd langste route" },
                { en: "Random path selection", es: "Selección aleatoria de ruta", de: "Zufällige Wegauswahl", nl: "Willekeurige route selectie" },
                { en: "Ignores traffic completely", es: "Ignora el tráfico completamente", de: "Ignoriert Verkehr vollständig", nl: "Negeert verkeer volledig" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes traffic, weather, accidents, and historical data to calculate optimal routes in real-time.",
                es: "La IA analiza tráfico, clima, accidentes y datos históricos para calcular rutas óptimas.",
                de: "KI analysiert Verkehr, Wetter, Unfälle und historische Daten für optimale Routen.",
                nl: "AI analyseert verkeer, weer, ongevallen en historische data voor optimale routes."
            }
        },
        {
            question: {
                en: "What is pedestrian detection system?",
                es: "¿Qué es el sistema de detección de peatones?",
                de: "Was ist ein Fußgängererkennung-System?",
                nl: "Wat is een voetgangersdetectiesysteem?"
            },
            options: [
                { en: "AI identifying people near vehicles", es: "IA identificando personas cerca de vehículos", de: "KI erkennt Personen in Fahrzeugnähe", nl: "AI identificeert mensen bij voertuigen" },
                { en: "Pedestrian counting app", es: "App de conteo de peatones", de: "Fußgängerzähl-App", nl: "Voetgangersteller app" },
                { en: "Crosswalk painting", es: "Pintura de paso peatonal", de: "Zebrastreifen-Markierung", nl: "Zebrapad markering" },
                { en: "Walking speed measurement", es: "Medición de velocidad al caminar", de: "Gehgeschwindigkeitsmessung", nl: "Loopsnelheid meting" }
            ],
            correct: 0,
            explanation: {
                en: "Pedestrian detection uses cameras and AI to identify people and automatically brake if collision is imminent.",
                es: "La detección de peatones usa cámaras e IA para identificar personas y frenar automáticamente.",
                de: "Fußgängererkennung nutzt Kameras und KI zur Personenerkennung und automatischem Bremsen.",
                nl: "Voetgangersdetectie gebruikt camera's en AI om mensen te identificeren en automatisch te remmen."
            }
        },
        {
            question: {
                en: "What is traffic flow theory in AI?",
                es: "¿Qué es la teoría del flujo de tráfico en IA?",
                de: "Was ist Verkehrsflusstheorie in KI?",
                nl: "Wat is verkeersstroomtheorie in AI?"
            },
            options: [
                { en: "Mathematical models of vehicle movement", es: "Modelos matemáticos de movimiento vehicular", de: "Mathematische Modelle der Fahrzeugbewegung", nl: "Wiskundige modellen van voertuigbeweging" },
                { en: "Water flow in cars", es: "Flujo de agua en autos", de: "Wasserfluss in Autos", nl: "Waterstroom in auto's" },
                { en: "Traffic light colors", es: "Colores de semáforo", de: "Ampelfarben", nl: "Verkeerslicht kleuren" },
                { en: "Road construction theory", es: "Teoría de construcción vial", de: "Straßenbautheorie", nl: "Wegenbouw theorie" }
            ],
            correct: 0,
            explanation: {
                en: "Traffic flow theory uses mathematical models to predict and optimize vehicle movement patterns in networks.",
                es: "La teoría del flujo usa modelos matemáticos para predecir y optimizar patrones de movimiento.",
                de: "Verkehrsflusstheorie nutzt mathematische Modelle zur Vorhersage von Bewegungsmustern.",
                nl: "Verkeersstroomtheorie gebruikt wiskundige modellen om bewegingspatronen te voorspellen."
            }
        },
        {
            question: {
                en: "How does AI manage fleet vehicles?",
                es: "¿Cómo gestiona la IA vehículos de flota?",
                de: "Wie verwaltet KI Flottenfahrzeuge?",
                nl: "Hoe beheert AI vlootvoertuigen?"
            },
            options: [
                { en: "Tracks location and optimizes dispatch", es: "Rastrea ubicación y optimiza despacho", de: "Verfolgt Standort und optimiert Einsatz", nl: "Volgt locatie en optimaliseert inzet" },
                { en: "Parks them randomly", es: "Los estaciona aleatoriamente", de: "Parkt sie zufällig", nl: "Parkeert ze willekeurig" },
                { en: "Ignores vehicle status", es: "Ignora estado del vehículo", de: "Ignoriert Fahrzeugstatus", nl: "Negeert voertuigstatus" },
                { en: "Manual tracking only", es: "Solo seguimiento manual", de: "Nur manuelle Verfolgung", nl: "Alleen handmatige tracking" }
            ],
            correct: 0,
            explanation: {
                en: "Fleet management AI tracks vehicles in real-time, optimizes routes, schedules maintenance, and assigns tasks.",
                es: "La IA de gestión de flotas rastrea vehículos, optimiza rutas y programa mantenimiento.",
                de: "Flottenmanagement-KI verfolgt Fahrzeuge in Echtzeit und optimiert Routen und Wartung.",
                nl: "Vlootbeheer AI volgt voertuigen real-time, optimaliseert routes en plant onderhoud."
            }
        },
        {
            question: {
                en: "What is regenerative braking with AI?",
                es: "¿Qué es el frenado regenerativo con IA?",
                de: "Was ist regeneratives Bremsen mit KI?",
                nl: "Wat is regeneratief remmen met AI?"
            },
            options: [
                { en: "Optimizes energy recovery when braking", es: "Optimiza recuperación de energía al frenar", de: "Optimiert Energierückgewinnung beim Bremsen", nl: "Optimaliseert energieterugwinning bij remmen" },
                { en: "Breaks the brakes", es: "Rompe los frenos", de: "Zerstört die Bremsen", nl: "Breekt de remmen" },
                { en: "Manual braking only", es: "Solo frenado manual", de: "Nur manuelles Bremsen", nl: "Alleen handmatig remmen" },
                { en: "Wastes all energy", es: "Desperdicia toda la energía", de: "Verschwendet alle Energie", nl: "Verspilt alle energie" }
            ],
            correct: 0,
            explanation: {
                en: "AI optimizes regenerative braking to maximize energy recovery based on driving conditions and battery state.",
                es: "La IA optimiza el frenado regenerativo para maximizar recuperación según condiciones y batería.",
                de: "KI optimiert regeneratives Bremsen zur maximalen Energierückgewinnung basierend auf Bedingungen.",
                nl: "AI optimaliseert regeneratief remmen voor maximale energieterugwinning op basis van omstandigheden."
            }
        },
        {
            question: {
                en: "What is cross-traffic alert?",
                es: "¿Qué es la alerta de tráfico cruzado?",
                de: "Was ist Querverkehrswarnung?",
                nl: "Wat is kruisend verkeer waarschuwing?"
            },
            options: [
                { en: "Warns of vehicles crossing behind", es: "Advierte de vehículos cruzando detrás", de: "Warnt vor querenden Fahrzeugen hinten", nl: "Waarschuwt voor kruisend verkeer achter" },
                { en: "Railroad crossing alarm", es: "Alarma de cruce ferroviario", de: "Bahnübergangsalarm", nl: "Spoorwegovergang alarm" },
                { en: "Pedestrian crossing light", es: "Luz de cruce peatonal", de: "Fußgängerüberweglicht", nl: "Voetgangersoversteeklicht" },
                { en: "Cross-country navigation", es: "Navegación a campo traviesa", de: "Geländenavigation", nl: "Cross-country navigatie" }
            ],
            correct: 0,
            explanation: {
                en: "CTA uses sensors to detect vehicles approaching from sides when reversing out of parking spaces.",
                es: "CTA usa sensores para detectar vehículos acercándose desde los lados al retroceder.",
                de: "CTA nutzt Sensoren zur Erkennung von seitlich nahenden Fahrzeugen beim Rückwärtsfahren.",
                nl: "CTA gebruikt sensoren om voertuigen te detecteren die van opzij naderen bij achteruitrijden."
            }
        },
        {
            question: {
                en: "How does AI predict traffic congestion?",
                es: "¿Cómo predice la IA la congestión del tráfico?",
                de: "Wie prognostiziert KI Verkehrsstaus?",
                nl: "Hoe voorspelt AI verkeerscongestie?"
            },
            options: [
                { en: "Analyzes patterns and real-time data", es: "Analiza patrones y datos en tiempo real", de: "Analysiert Muster und Echtzeitdaten", nl: "Analyseert patronen en real-time data" },
                { en: "Creates congestion", es: "Crea congestión", de: "Erzeugt Staus", nl: "Creëert congestie" },
                { en: "Ignores traffic flow", es: "Ignora el flujo de tráfico", de: "Ignoriert Verkehrsfluss", nl: "Negeert verkeersstroom" },
                { en: "Random predictions", es: "Predicciones aleatorias", de: "Zufällige Vorhersagen", nl: "Willekeurige voorspellingen" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes historical patterns, events, weather, and real-time data to predict congestion hours ahead.",
                es: "La IA analiza patrones históricos, eventos y datos para predecir congestión con horas de anticipación.",
                de: "KI analysiert historische Muster, Events und Echtzeitdaten zur Stauvorhersage.",
                nl: "AI analyseert historische patronen, evenementen en real-time data om congestie uren vooruit te voorspellen."
            }
        },
        {
            question: {
                en: "What is automated highway system?",
                es: "¿Qué es el sistema automatizado de autopistas?",
                de: "Was ist ein automatisiertes Autobahnsystem?",
                nl: "Wat is een geautomatiseerd snelwegsysteem?"
            },
            options: [
                { en: "Fully automated vehicle control on highways", es: "Control vehicular totalmente automatizado en autopistas", de: "Vollautomatische Fahrzeugkontrolle auf Autobahnen", nl: "Volledig geautomatiseerde voertuigcontrole op snelwegen" },
                { en: "Manual driving only", es: "Solo conducción manual", de: "Nur manuelles Fahren", nl: "Alleen handmatig rijden" },
                { en: "Highway construction", es: "Construcción de autopistas", de: "Autobahnbau", nl: "Snelweg constructie" },
                { en: "Toll booth system", es: "Sistema de peaje", de: "Mautstellen-System", nl: "Tolpoort systeem" }
            ],
            correct: 0,
            explanation: {
                en: "AHS enables full vehicle automation on specially equipped highways with infrastructure support.",
                es: "AHS permite automatización completa en autopistas especialmente equipadas con infraestructura.",
                de: "AHS ermöglicht vollständige Fahrzeugautomatisierung auf speziell ausgestatteten Autobahnen.",
                nl: "AHS maakt volledige voertuigautomatisering mogelijk op speciaal uitgeruste snelwegen."
            }
        },
        {
            question: {
                en: "What is mobility data analytics?",
                es: "¿Qué es el análisis de datos de movilidad?",
                de: "Was ist Mobilitätsdatenanalyse?",
                nl: "Wat is mobiliteitsdata-analyse?"
            },
            options: [
                { en: "Analyzing movement patterns for planning", es: "Analizando patrones de movimiento para planificación", de: "Analyse von Bewegungsmustern für Planung", nl: "Analyseren van bewegingspatronen voor planning" },
                { en: "Mobile phone analysis", es: "Análisis de teléfonos móviles", de: "Mobiltelefon-Analyse", nl: "Mobiele telefoon analyse" },
                { en: "Walking speed tests", es: "Pruebas de velocidad al caminar", de: "Gehgeschwindigkeitstests", nl: "Loopsnelheidstesten" },
                { en: "Random data collection", es: "Recopilación aleatoria de datos", de: "Zufällige Datensammlung", nl: "Willekeurige dataverzameling" }
            ],
            correct: 0,
            explanation: {
                en: "Mobility analytics uses AI to analyze transport patterns for urban planning and service optimization.",
                es: "El análisis de movilidad usa IA para analizar patrones de transporte para planificación urbana.",
                de: "Mobilitätsanalyse nutzt KI zur Analyse von Transportmustern für Stadtplanung.",
                nl: "Mobiliteitsanalyse gebruikt AI om transportpatronen te analyseren voor stadsplanning."
            }
        },
        {
            question: {
                en: "How does AI improve cargo logistics?",
                es: "¿Cómo mejora la IA la logística de carga?",
                de: "Wie verbessert KI die Frachtlogistik?",
                nl: "Hoe verbetert AI vrachtlogistiek?"
            },
            options: [
                { en: "Optimizes loading and route planning", es: "Optimiza carga y planificación de rutas", de: "Optimiert Beladung und Routenplanung", nl: "Optimaliseert lading en routeplanning" },
                { en: "Loses all packages", es: "Pierde todos los paquetes", de: "Verliert alle Pakete", nl: "Verliest alle pakketten" },
                { en: "Random cargo placement", es: "Colocación aleatoria de carga", de: "Zufällige Frachtplatzierung", nl: "Willekeurige vrachtplaatsing" },
                { en: "Ignores delivery schedules", es: "Ignora horarios de entrega", de: "Ignoriert Lieferpläne", nl: "Negeert bezorgschema's" }
            ],
            correct: 0,
            explanation: {
                en: "AI optimizes container loading, predicts delays, plans routes, and coordinates multimodal transport.",
                es: "La IA optimiza carga de contenedores, predice retrasos, planifica rutas y coordina transporte.",
                de: "KI optimiert Containerbeladung, prognostiziert Verzögerungen und plant Routen.",
                nl: "AI optimaliseert containerlading, voorspelt vertragingen, plant routes en coördineert transport."
            }
        },
        {
            question: {
                en: "What is smart infrastructure?",
                es: "¿Qué es la infraestructura inteligente?",
                de: "Was ist intelligente Infrastruktur?",
                nl: "Wat is slimme infrastructuur?"
            },
            options: [
                { en: "Roads and systems with embedded AI", es: "Carreteras y sistemas con IA integrada", de: "Straßen und Systeme mit eingebetteter KI", nl: "Wegen en systemen met ingebouwde AI" },
                { en: "Regular concrete roads", es: "Carreteras de concreto regulares", de: "Normale Betonstraßen", nl: "Gewone betonwegen" },
                { en: "Manual traffic control", es: "Control de tráfico manual", de: "Manuelle Verkehrskontrolle", nl: "Handmatige verkeerscontrole" },
                { en: "Broken infrastructure", es: "Infraestructura rota", de: "Kaputte Infrastruktur", nl: "Kapotte infrastructuur" }
            ],
            correct: 0,
            explanation: {
                en: "Smart infrastructure integrates sensors, communication, and AI to actively manage traffic and safety.",
                es: "La infraestructura inteligente integra sensores, comunicación e IA para gestionar tráfico.",
                de: "Intelligente Infrastruktur integriert Sensoren, Kommunikation und KI für Verkehrsmanagement.",
                nl: "Slimme infrastructuur integreert sensoren, communicatie en AI voor verkeersbeheer."
            }
        },
        {
            question: {
                en: "What is vehicle cyber security?",
                es: "¿Qué es la ciberseguridad vehicular?",
                de: "Was ist Fahrzeug-Cybersicherheit?",
                nl: "Wat is voertuig cybersecurity?"
            },
            options: [
                { en: "Protecting vehicles from digital attacks", es: "Protegiendo vehículos de ataques digitales", de: "Schutz von Fahrzeugen vor digitalen Angriffen", nl: "Beschermen van voertuigen tegen digitale aanvallen" },
                { en: "Physical locks only", es: "Solo cerraduras físicas", de: "Nur physische Schlösser", nl: "Alleen fysieke sloten" },
                { en: "Insurance policies", es: "Pólizas de seguro", de: "Versicherungspolicen", nl: "Verzekeringspolissen" },
                { en: "Window tinting", es: "Tintado de ventanas", de: "Scheibentönung", nl: "Raamfolie" }
            ],
            correct: 0,
            explanation: {
                en: "Vehicle cyber security uses AI to detect and prevent hacking attempts on connected vehicle systems.",
                es: "La ciberseguridad vehicular usa IA para detectar y prevenir intentos de hackeo en sistemas.",
                de: "Fahrzeug-Cybersicherheit nutzt KI zur Erkennung und Verhinderung von Hackerangriffen.",
                nl: "Voertuig cybersecurity gebruikt AI om hackaanvallen op connected systemen te detecteren."
            }
        },
        {
            question: {
                en: "How does AI enable autonomous trains?",
                es: "¿Cómo habilita la IA trenes autónomos?",
                de: "Wie ermöglicht KI autonome Züge?",
                nl: "Hoe maakt AI autonome treinen mogelijk?"
            },
            options: [
                { en: "Controls speed, braking, and doors", es: "Controla velocidad, frenado y puertas", de: "Steuert Geschwindigkeit, Bremsen und Türen", nl: "Regelt snelheid, remmen en deuren" },
                { en: "Manual operation only", es: "Solo operación manual", de: "Nur manueller Betrieb", nl: "Alleen handmatige bediening" },
                { en: "Random train movements", es: "Movimientos aleatorios de tren", de: "Zufällige Zugbewegungen", nl: "Willekeurige treinbewegingen" },
                { en: "Eliminates all trains", es: "Elimina todos los trenes", de: "Beseitigt alle Züge", nl: "Elimineert alle treinen" }
            ],
            correct: 0,
            explanation: {
                en: "AI controls train operations including acceleration, braking, door operation, and platform alignment.",
                es: "La IA controla operaciones del tren incluyendo aceleración, frenado y alineación con plataforma.",
                de: "KI steuert Zugoperationen einschließlich Beschleunigung, Bremsen und Bahnsteigausrichtung.",
                nl: "AI regelt treinoperaties inclusief acceleratie, remmen, deuren en perronuitlijning."
            }
        },
        {
            question: {
                en: "What is urban air mobility?",
                es: "¿Qué es la movilidad aérea urbana?",
                de: "Was ist urbane Luftmobilität?",
                nl: "Wat is stedelijke luchtmobiliteit?"
            },
            options: [
                { en: "Flying vehicles for city transport", es: "Vehículos voladores para transporte urbano", de: "Flugfahrzeuge für Stadttransport", nl: "Vliegende voertuigen voor stadsvervoer" },
                { en: "Regular city buses", es: "Autobuses urbanos regulares", de: "Normale Stadtbusse", nl: "Gewone stadsbussen" },
                { en: "Underground metros", es: "Metros subterráneos", de: "U-Bahnen", nl: "Ondergrondse metro's" },
                { en: "Walking paths", es: "Senderos para caminar", de: "Gehwege", nl: "Wandelpaden" }
            ],
            correct: 0,
            explanation: {
                en: "UAM uses AI-controlled drones and air taxis for passenger and cargo transport within cities.",
                es: "UAM usa drones y taxis aéreos controlados por IA para transporte de pasajeros en ciudades.",
                de: "UAM nutzt KI-gesteuerte Drohnen und Lufttaxis für Personen- und Frachttransport in Städten.",
                nl: "UAM gebruikt AI-gestuurde drones en luchttaxi's voor passagiers- en vrachtvervoer in steden."
            }
        },
        {
            question: {
                en: "What is transportation demand modeling?",
                es: "¿Qué es el modelado de demanda de transporte?",
                de: "Was ist Verkehrsnachfragemodellierung?",
                nl: "Wat is transportvraag modellering?"
            },
            options: [
                { en: "Predicting future transport needs", es: "Prediciendo necesidades futuras de transporte", de: "Vorhersage zukünftiger Transportbedürfnisse", nl: "Voorspellen van toekomstige transportbehoeften" },
                { en: "Demanding more transport", es: "Exigiendo más transporte", de: "Mehr Transport fordern", nl: "Meer transport eisen" },
                { en: "Ignoring transport needs", es: "Ignorando necesidades de transporte", de: "Transportbedürfnisse ignorieren", nl: "Transportbehoeften negeren" },
                { en: "Random transport planning", es: "Planificación aleatoria de transporte", de: "Zufällige Transportplanung", nl: "Willekeurige transportplanning" }
            ],
            correct: 0,
            explanation: {
                en: "AI models analyze population, economic, and behavioral data to forecast transportation demand.",
                es: "Los modelos IA analizan población, economía y comportamiento para pronosticar demanda.",
                de: "KI-Modelle analysieren Bevölkerungs- und Wirtschaftsdaten zur Nachfrageprognose.",
                nl: "AI-modellen analyseren bevolkings- en economische data om transportvraag te voorspellen."
            }
        },
        {
            question: {
                en: "How does AI detect road rage?",
                es: "¿Cómo detecta la IA la ira al volante?",
                de: "Wie erkennt KI Straßenwut?",
                nl: "Hoe detecteert AI wegwoede?"
            },
            options: [
                { en: "Monitors driving patterns and behavior", es: "Monitorea patrones y comportamiento de conducción", de: "Überwacht Fahrmuster und Verhalten", nl: "Monitort rijpatronen en gedrag" },
                { en: "Causes road rage", es: "Causa ira al volante", de: "Verursacht Straßenwut", nl: "Veroorzaakt wegwoede" },
                { en: "Ignores driver behavior", es: "Ignora comportamiento del conductor", de: "Ignoriert Fahrerverhalten", nl: "Negeert bestuurdersgedrag" },
                { en: "Random mood detection", es: "Detección aleatoria de humor", de: "Zufällige Stimmungserkennung", nl: "Willekeurige stemmingsdetectie" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes aggressive acceleration, braking, and steering patterns to identify road rage behavior.",
                es: "La IA analiza aceleración agresiva, frenado y patrones para identificar comportamiento agresivo.",
                de: "KI analysiert aggressive Beschleunigung und Bremsmuster zur Erkennung von Straßenwut.",
                nl: "AI analyseert agressieve acceleratie, remmen en stuurpatronen om wegwoede te identificeren."
            }
        },
        {
            question: {
                en: "What is autonomous ship navigation?",
                es: "¿Qué es la navegación autónoma de barcos?",
                de: "Was ist autonome Schiffsnavigation?",
                nl: "Wat is autonome scheepsnavigatie?"
            },
            options: [
                { en: "AI-controlled vessel operation", es: "Operación de embarcaciones controlada por IA", de: "KI-gesteuerte Schiffsführung", nl: "AI-gestuurde vaartuigoperatie" },
                { en: "Manual steering only", es: "Solo dirección manual", de: "Nur manuelle Steuerung", nl: "Alleen handmatig sturen" },
                { en: "Random ship movements", es: "Movimientos aleatorios de barco", de: "Zufällige Schiffsbewegungen", nl: "Willekeurige scheepsbewegingen" },
                { en: "Anchored permanently", es: "Anclado permanentemente", de: "Dauerhaft verankert", nl: "Permanent geankerd" }
            ],
            correct: 0,
            explanation: {
                en: "Autonomous ships use AI for navigation, collision avoidance, and route optimization without crew.",
                es: "Los barcos autónomos usan IA para navegación, evitar colisiones y optimizar rutas sin tripulación.",
                de: "Autonome Schiffe nutzen KI für Navigation und Kollisionsvermeidung ohne Besatzung.",
                nl: "Autonome schepen gebruiken AI voor navigatie, aanvaringspreventie en route-optimalisatie."
            }
        },
        {
            question: {
                en: "What is hyperloop transportation?",
                es: "¿Qué es el transporte hyperloop?",
                de: "Was ist Hyperloop-Transport?",
                nl: "Wat is hyperloop transport?"
            },
            options: [
                { en: "High-speed pods in vacuum tubes", es: "Cápsulas de alta velocidad en tubos de vacío", de: "Hochgeschwindigkeitskapseln in Vakuumröhren", nl: "Hogesnelheidscapsules in vacuümbuizen" },
                { en: "Regular subway system", es: "Sistema de metro regular", de: "Normales U-Bahn-System", nl: "Gewoon metrosysteem" },
                { en: "Bicycle loops", es: "Bucles de bicicleta", de: "Fahrradschleifen", nl: "Fietslussen" },
                { en: "Walking tunnels", es: "Túneles para caminar", de: "Fußgängertunnel", nl: "Wandeltunnels" }
            ],
            correct: 0,
            explanation: {
                en: "Hyperloop uses AI to control pods traveling at 700+ mph through low-pressure tubes.",
                es: "Hyperloop usa IA para controlar cápsulas viajando a 700+ mph en tubos de baja presión.",
                de: "Hyperloop nutzt KI zur Steuerung von Kapseln mit über 1100 km/h in Niederdruckröhren.",
                nl: "Hyperloop gebruikt AI om capsules te besturen die 1100+ km/u reizen door lagedrukbuizen."
            }
        },
        {
            question: {
                en: "How does AI optimize airport operations?",
                es: "¿Cómo optimiza la IA las operaciones aeroportuarias?",
                de: "Wie optimiert KI den Flughafenbetrieb?",
                nl: "Hoe optimaliseert AI luchthavenoperaties?"
            },
            options: [
                { en: "Manages gates, baggage, and ground vehicles", es: "Gestiona puertas, equipaje y vehículos terrestres", de: "Verwaltet Gates, Gepäck und Bodenfahrzeuge", nl: "Beheert gates, bagage en grondvoertuigen" },
                { en: "Cancels all flights", es: "Cancela todos los vuelos", de: "Storniert alle Flüge", nl: "Annuleert alle vluchten" },
                { en: "Random gate assignments", es: "Asignaciones aleatorias de puertas", de: "Zufällige Gate-Zuweisungen", nl: "Willekeurige gate toewijzingen" },
                { en: "Ignores schedules", es: "Ignora horarios", de: "Ignoriert Zeitpläne", nl: "Negeert schema's" }
            ],
            correct: 0,
            explanation: {
                en: "AI coordinates gate assignments, baggage handling, ground vehicles, and passenger flow for efficiency.",
                es: "La IA coordina asignación de puertas, manejo de equipaje y flujo de pasajeros para eficiencia.",
                de: "KI koordiniert Gate-Zuweisungen, Gepäckabfertigung und Passagierfluss für Effizienz.",
                nl: "AI coördineert gate-toewijzingen, bagageafhandeling en passagiersstroom voor efficiëntie."
            }
        },
        {
            question: {
                en: "What is railway predictive maintenance?",
                es: "¿Qué es el mantenimiento predictivo ferroviario?",
                de: "Was ist vorausschauende Bahnwartung?",
                nl: "Wat is predictief spooronderhoud?"
            },
            options: [
                { en: "AI predicts track and train failures", es: "IA predice fallas de vías y trenes", de: "KI prognostiziert Gleis- und Zugausfälle", nl: "AI voorspelt spoor- en treinstoringen" },
                { en: "Random track repairs", es: "Reparaciones aleatorias de vías", de: "Zufällige Gleisreparaturen", nl: "Willekeurige spoorreparaties" },
                { en: "Never maintaining tracks", es: "Nunca mantener las vías", de: "Gleise nie warten", nl: "Nooit sporen onderhouden" },
                { en: "Manual inspection only", es: "Solo inspección manual", de: "Nur manuelle Inspektion", nl: "Alleen handmatige inspectie" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes sensor data from tracks and trains to predict failures before they cause delays.",
                es: "La IA analiza datos de sensores de vías y trenes para predecir fallas antes de causar retrasos.",
                de: "KI analysiert Sensordaten von Gleisen und Zügen zur Vorhersage von Ausfällen.",
                nl: "AI analyseert sensordata van sporen en treinen om storingen te voorspellen voordat ze vertragingen veroorzaken."
            }
        }
    ]
};