// AI in transport - Level 6
// Advanced transport AI concepts with 140 character limit
// Real questions with proper translations

module.exports = {
    questions: [
        {
            question: {
                en: "What is simultaneous localization and mapping (SLAM)?",
                es: "¿Qué es localización y mapeo simultáneo (SLAM)?",
                de: "Was ist simultane Lokalisierung und Kartierung (SLAM)?",
                nl: "Wat is simultane lokalisatie en mapping (SLAM)?"
            },
            options: [
                { en: "Building maps while navigating", es: "Construir mapas mientras navega", de: "Karten beim Navigieren erstellen", nl: "Kaarten bouwen tijdens navigeren" },
                { en: "Static map reading", es: "Lectura de mapa estático", de: "Statische Kartenlesung", nl: "Statisch kaart lezen" },
                { en: "GPS positioning only", es: "Solo posicionamiento GPS", de: "Nur GPS-Positionierung", nl: "Alleen GPS positionering" },
                { en: "Manual mapping process", es: "Proceso de mapeo manual", de: "Manueller Kartierungsprozess", nl: "Handmatig mapping proces" }
            ],
            correct: 0,
            explanation: {
                en: "SLAM enables vehicles to create maps of unknown environments while simultaneously tracking their location within that map.",
                es: "SLAM permite a vehículos crear mapas de entornos desconocidos mientras rastrean simultáneamente su ubicación en ese mapa.",
                de: "SLAM ermöglicht Fahrzeugen, Karten unbekannter Umgebungen zu erstellen und gleichzeitig ihre Position zu verfolgen.",
                nl: "SLAM stelt voertuigen in staat kaarten van onbekende omgevingen te maken terwijl ze hun locatie volgen."
            }
        },
        {
            question: {
                en: "How do autonomous vehicles handle adverse weather?",
                es: "¿Cómo manejan vehículos autónomos el mal tiempo?",
                de: "Wie bewältigen autonome Fahrzeuge schlechtes Wetter?",
                nl: "Hoe gaan autonome voertuigen om met slecht weer?"
            },
            options: [
                { en: "Multi-sensor fusion and adaptation", es: "Fusión multi-sensor y adaptación", de: "Multi-Sensor-Fusion und Anpassung", nl: "Multi-sensor fusie en aanpassing" },
                { en: "Stop operation completely", es: "Detener operación completamente", de: "Betrieb vollständig stoppen", nl: "Operatie volledig stoppen" },
                { en: "Rely on GPS only", es: "Depender solo de GPS", de: "Nur auf GPS verlassen", nl: "Alleen op GPS vertrouwen" },
                { en: "Ignore weather conditions", es: "Ignorar condiciones climáticas", de: "Wetterbedingungen ignorieren", nl: "Weersomstandigheden negeren" }
            ],
            correct: 0,
            explanation: {
                en: "Vehicles use sensor fusion combining radar, LiDAR, and cameras with weather-specific algorithms to maintain safe operation.",
                es: "Los vehículos usan fusión de sensores combinando radar, LiDAR y cámaras con algoritmos específicos del clima.",
                de: "Fahrzeuge nutzen Sensorfusion mit Radar, LiDAR und Kameras plus wetterspezifische Algorithmen für sicheren Betrieb.",
                nl: "Voertuigen gebruiken sensorfusie met radar, LiDAR en camera's plus weer-specifieke algoritmen voor veilige werking."
            }
        },
        {
            question: {
                en: "What is vehicle-to-infrastructure (V2I) communication?",
                es: "¿Qué es comunicación vehículo-infraestructura (V2I)?",
                de: "Was ist Fahrzeug-zu-Infrastruktur (V2I) Kommunikation?",
                nl: "Wat is voertuig-naar-infrastructuur (V2I) communicatie?"
            },
            options: [
                { en: "Data exchange with road systems", es: "Intercambio de datos con sistemas viales", de: "Datenaustausch mit Straßensystemen", nl: "Data-uitwisseling met wegsystemen" },
                { en: "Vehicle maintenance alerts", es: "Alertas de mantenimiento vehicular", de: "Fahrzeugwartungswarnungen", nl: "Voertuig onderhoudswaarschuwingen" },
                { en: "Passenger communication", es: "Comunicación de pasajeros", de: "Passagierkommunikation", nl: "Passagier communicatie" },
                { en: "Radio broadcasting", es: "Radiodifusión", de: "Rundfunkübertragung", nl: "Radio uitzending" }
            ],
            correct: 0,
            explanation: {
                en: "V2I enables vehicles to communicate with traffic lights, road signs, and infrastructure for safer, more efficient travel.",
                es: "V2I permite a vehículos comunicarse con semáforos, señales y infraestructura para viaje más seguro y eficiente.",
                de: "V2I ermöglicht Fahrzeugen Kommunikation mit Ampeln, Schildern und Infrastruktur für sicherere, effizientere Fahrt.",
                nl: "V2I laat voertuigen communiceren met verkeerslichten, borden en infrastructuur voor veiliger, efficiënter reizen."
            }
        },
        {
            question: {
                en: "What role does edge computing play in transport AI?",
                es: "¿Qué papel juega edge computing en IA de transporte?",
                de: "Welche Rolle spielt Edge Computing in Transport-KI?",
                nl: "Welke rol speelt edge computing in transport AI?"
            },
            options: [
                { en: "Local real-time processing", es: "Procesamiento local en tiempo real", de: "Lokale Echtzeitverarbeitung", nl: "Lokale real-time verwerking" },
                { en: "Cloud storage only", es: "Solo almacenamiento en nube", de: "Nur Cloud-Speicher", nl: "Alleen cloud opslag" },
                { en: "Data backup systems", es: "Sistemas de respaldo de datos", de: "Datensicherungssysteme", nl: "Data backup systemen" },
                { en: "Network maintenance", es: "Mantenimiento de red", de: "Netzwerkwartung", nl: "Netwerk onderhoud" }
            ],
            correct: 0,
            explanation: {
                en: "Edge computing processes data locally in vehicles or nearby infrastructure, reducing latency for critical safety decisions.",
                es: "Edge computing procesa datos localmente en vehículos o infraestructura cercana, reduciendo latencia para decisiones críticas.",
                de: "Edge Computing verarbeitet Daten lokal in Fahrzeugen oder naher Infrastruktur für kritische Sicherheitsentscheidungen.",
                nl: "Edge computing verwerkt data lokaal in voertuigen of nabije infrastructuur voor kritieke veiligheidsbeslissingen."
            }
        },
        {
            question: {
                en: "How do autonomous trucks handle highway platooning?",
                es: "¿Cómo manejan camiones autónomos el pelotón en autopista?",
                de: "Wie handhaben autonome LKW Kolonnenfahrt?",
                nl: "Hoe hanteren autonome trucks peloton rijden?"
            },
            options: [
                { en: "Synchronized automated following", es: "Seguimiento automatizado sincronizado", de: "Synchronisiertes automatisches Folgen", nl: "Gesynchroniseerd automatisch volgen" },
                { en: "Random spacing", es: "Espaciado aleatorio", de: "Zufälliger Abstand", nl: "Willekeurige afstand" },
                { en: "Manual coordination", es: "Coordinación manual", de: "Manuelle Koordination", nl: "Handmatige coördinatie" },
                { en: "Independent driving", es: "Conducción independiente", de: "Unabhängiges Fahren", nl: "Onafhankelijk rijden" }
            ],
            correct: 0,
            explanation: {
                en: "Platooning uses V2V communication and automated control to maintain close, safe distances for fuel efficiency and capacity.",
                es: "El pelotón usa comunicación V2V y control automatizado para mantener distancias cercanas y seguras eficientemente.",
                de: "Kolonnenfahrt nutzt V2V-Kommunikation und automatische Kontrolle für sichere, nahe Abstände und Effizienz.",
                nl: "Peloton rijden gebruikt V2V communicatie en automatische controle voor veilige, korte afstanden en efficiëntie."
            }
        },
        {
            question: {
                en: "What is occupancy prediction in autonomous driving?",
                es: "¿Qué es predicción de ocupación en conducción autónoma?",
                de: "Was ist Belegungsvorhersage beim autonomen Fahren?",
                nl: "Wat is bezettingsvoorspelling bij autonoom rijden?"
            },
            options: [
                { en: "Forecasting future space usage", es: "Pronosticar uso futuro del espacio", de: "Zukünftige Raumbelegung vorhersagen", nl: "Toekomstig ruimtegebruik voorspellen" },
                { en: "Counting passengers", es: "Contar pasajeros", de: "Passagiere zählen", nl: "Passagiers tellen" },
                { en: "Parking availability", es: "Disponibilidad de estacionamiento", de: "Parkverfügbarkeit", nl: "Parkeer beschikbaarheid" },
                { en: "Seat detection", es: "Detección de asientos", de: "Sitzerkennung", nl: "Stoeldetectie" }
            ],
            correct: 0,
            explanation: {
                en: "Occupancy prediction forecasts where objects and vehicles will be in the future for safe path planning and collision avoidance.",
                es: "La predicción de ocupación pronostica dónde estarán objetos y vehículos en el futuro para planificación segura.",
                de: "Belegungsvorhersage prognostiziert zukünftige Positionen von Objekten und Fahrzeugen für sichere Wegplanung.",
                nl: "Bezettingsvoorspelling voorspelt waar objecten en voertuigen zullen zijn voor veilige padplanning."
            }
        },
        {
            question: {
                en: "How does AI optimize public transit scheduling?",
                es: "¿Cómo optimiza la IA horarios de tránsito público?",
                de: "Wie optimiert KI öffentliche Verkehrsplanung?",
                nl: "Hoe optimaliseert AI openbaar vervoer planning?"
            },
            options: [
                { en: "Demand prediction and routing", es: "Predicción de demanda y rutas", de: "Nachfragevorhersage und Routing", nl: "Vraagvoorspelling en routering" },
                { en: "Fixed timetables only", es: "Solo horarios fijos", de: "Nur feste Fahrpläne", nl: "Alleen vaste dienstregelingen" },
                { en: "Random scheduling", es: "Programación aleatoria", de: "Zufällige Planung", nl: "Willekeurige planning" },
                { en: "Manual planning", es: "Planificación manual", de: "Manuelle Planung", nl: "Handmatige planning" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes passenger patterns, traffic conditions, and events to dynamically optimize routes and schedules for efficiency.",
                es: "La IA analiza patrones de pasajeros, condiciones de tráfico y eventos para optimizar rutas y horarios dinámicamente.",
                de: "KI analysiert Fahrgastmuster, Verkehrsbedingungen und Events für dynamisch optimierte Routen und Fahrpläne.",
                nl: "AI analyseert passagierspatronen, verkeersomstandigheden en events voor dynamisch geoptimaliseerde routes."
            }
        },
        {
            question: {
                en: "What is cooperative adaptive cruise control (CACC)?",
                es: "¿Qué es control de crucero adaptativo cooperativo?",
                de: "Was ist kooperative adaptive Geschwindigkeitsregelung?",
                nl: "Wat is coöperatieve adaptieve cruise control?"
            },
            options: [
                { en: "V2V-based speed coordination", es: "Coordinación de velocidad basada en V2V", de: "V2V-basierte Geschwindigkeitskoordination", nl: "V2V-gebaseerde snelheidscoördinatie" },
                { en: "Individual cruise control", es: "Control de crucero individual", de: "Individuelle Geschwindigkeitsregelung", nl: "Individuele cruise control" },
                { en: "Manual speed control", es: "Control manual de velocidad", de: "Manuelle Geschwindigkeitskontrolle", nl: "Handmatige snelheidscontrole" },
                { en: "Fixed speed setting", es: "Ajuste de velocidad fija", de: "Feste Geschwindigkeitseinstellung", nl: "Vaste snelheidsinstelling" }
            ],
            correct: 0,
            explanation: {
                en: "CACC uses vehicle communication to coordinate speeds among multiple vehicles for smoother traffic flow and safety.",
                es: "CACC usa comunicación vehicular para coordinar velocidades entre múltiples vehículos para flujo más suave.",
                de: "CACC nutzt Fahrzeugkommunikation zur Geschwindigkeitskoordination mehrerer Fahrzeuge für besseren Verkehrsfluss.",
                nl: "CACC gebruikt voertuigcommunicatie om snelheden te coördineren tussen voertuigen voor betere doorstroming."
            }
        },
        {
            question: {
                en: "How do autonomous ships navigate in ports?",
                es: "¿Cómo navegan barcos autónomos en puertos?",
                de: "Wie navigieren autonome Schiffe in Häfen?",
                nl: "Hoe navigeren autonome schepen in havens?"
            },
            options: [
                { en: "AI-based precision docking", es: "Atraque de precisión basado en IA", de: "KI-basiertes Präzisionsdocking", nl: "AI-gebaseerd precisie aanmeren" },
                { en: "Manual pilot only", es: "Solo piloto manual", de: "Nur manueller Lotse", nl: "Alleen handmatige loods" },
                { en: "Random approach", es: "Aproximación aleatoria", de: "Zufällige Annäherung", nl: "Willekeurige benadering" },
                { en: "GPS only navigation", es: "Solo navegación GPS", de: "Nur GPS-Navigation", nl: "Alleen GPS navigatie" }
            ],
            correct: 0,
            explanation: {
                en: "Autonomous ships use AI combining sensors, cameras, and port data for precise navigation and automated docking procedures.",
                es: "Los barcos autónomos usan IA combinando sensores, cámaras y datos portuarios para navegación precisa y atraque.",
                de: "Autonome Schiffe nutzen KI mit Sensoren, Kameras und Hafendaten für präzise Navigation und automatisches Andocken.",
                nl: "Autonome schepen gebruiken AI met sensoren, camera's en havendata voor precieze navigatie en aanmeren."
            }
        },
        {
            question: {
                en: "What is trajectory prediction in transport AI?",
                es: "¿Qué es predicción de trayectoria en IA de transporte?",
                de: "Was ist Trajektorienvorhersage in Transport-KI?",
                nl: "Wat is trajectvoorspelling in transport AI?"
            },
            options: [
                { en: "Forecasting object movement paths", es: "Pronosticar rutas de movimiento de objetos", de: "Bewegungspfade von Objekten vorhersagen", nl: "Bewegingspaden van objecten voorspellen" },
                { en: "Historical route analysis", es: "Análisis de rutas históricas", de: "Historische Routenanalyse", nl: "Historische route analyse" },
                { en: "Static path planning", es: "Planificación de ruta estática", de: "Statische Wegplanung", nl: "Statische padplanning" },
                { en: "Random movement", es: "Movimiento aleatorio", de: "Zufällige Bewegung", nl: "Willekeurige beweging" }
            ],
            correct: 0,
            explanation: {
                en: "Trajectory prediction uses AI to forecast future positions of vehicles, pedestrians, and cyclists for safe navigation.",
                es: "La predicción de trayectoria usa IA para pronosticar posiciones futuras de vehículos y peatones para navegación segura.",
                de: "Trajektorienvorhersage nutzt KI zur Prognose zukünftiger Positionen von Fahrzeugen und Fußgängern.",
                nl: "Trajectvoorspelling gebruikt AI om toekomstige posities van voertuigen en voetgangers te voorspellen."
            }
        },
        {
            question: {
                en: "How does AI manage emergency vehicle priority?",
                es: "¿Cómo gestiona la IA prioridad de vehículos de emergencia?",
                de: "Wie verwaltet KI Einsatzfahrzeugpriorität?",
                nl: "Hoe beheert AI prioriteit van hulpvoertuigen?"
            },
            options: [
                { en: "Dynamic signal preemption", es: "Prioridad dinámica de señales", de: "Dynamische Signalpriorität", nl: "Dynamische signaal voorrang" },
                { en: "Fixed timing only", es: "Solo tiempo fijo", de: "Nur feste Zeitsteuerung", nl: "Alleen vaste timing" },
                { en: "Manual override", es: "Anulación manual", de: "Manuelle Übersteuerung", nl: "Handmatige override" },
                { en: "No priority system", es: "Sin sistema de prioridad", de: "Kein Prioritätssystem", nl: "Geen prioriteitssysteem" }
            ],
            correct: 0,
            explanation: {
                en: "AI systems detect emergency vehicles and dynamically adjust traffic signals to create clear paths while minimizing disruption.",
                es: "Los sistemas de IA detectan vehículos de emergencia y ajustan señales dinámicamente para crear rutas despejadas.",
                de: "KI-Systeme erkennen Einsatzfahrzeuge und passen Ampeln dynamisch an für freie Wege bei minimaler Störung.",
                nl: "AI-systemen detecteren hulpvoertuigen en passen verkeerslichten dynamisch aan voor vrije doorgang."
            }
        },
        {
            question: {
                en: "What is multi-modal journey planning?",
                es: "¿Qué es planificación de viaje multimodal?",
                de: "Was ist multimodale Reiseplanung?",
                nl: "Wat is multimodale reisplanning?"
            },
            options: [
                { en: "Combining different transport types", es: "Combinar diferentes tipos de transporte", de: "Verschiedene Verkehrsmittel kombinieren", nl: "Verschillende vervoerstypes combineren" },
                { en: "Single transport mode", es: "Modo único de transporte", de: "Einzelnes Verkehrsmittel", nl: "Enkel vervoerstype" },
                { en: "Walking only", es: "Solo caminar", de: "Nur zu Fuß", nl: "Alleen lopen" },
                { en: "Private car only", es: "Solo coche privado", de: "Nur Privatwagen", nl: "Alleen privéauto" }
            ],
            correct: 0,
            explanation: {
                en: "Multi-modal planning optimizes journeys using combinations of walking, cycling, public transit, and ride-sharing options.",
                es: "La planificación multimodal optimiza viajes usando combinaciones de caminar, bicicleta, tránsito público y compartido.",
                de: "Multimodale Planung optimiert Reisen durch Kombination von Gehen, Radfahren, ÖPNV und Ridesharing.",
                nl: "Multimodale planning optimaliseert reizen door combinaties van lopen, fietsen, OV en deelvervoer."
            }
        },
        {
            question: {
                en: "How does AI detect driver drowsiness?",
                es: "¿Cómo detecta la IA somnolencia del conductor?",
                de: "Wie erkennt KI Fahrermüdigkeit?",
                nl: "Hoe detecteert AI vermoeidheid bij bestuurders?"
            },
            options: [
                { en: "Eye tracking and behavior analysis", es: "Seguimiento ocular y análisis de comportamiento", de: "Augenverfolgung und Verhaltensanalyse", nl: "Oogtracking en gedragsanalyse" },
                { en: "Time-based alerts only", es: "Solo alertas basadas en tiempo", de: "Nur zeitbasierte Warnungen", nl: "Alleen tijd-gebaseerde waarschuwingen" },
                { en: "Manual reporting", es: "Reporte manual", de: "Manuelle Meldung", nl: "Handmatige melding" },
                { en: "Speed monitoring only", es: "Solo monitoreo de velocidad", de: "Nur Geschwindigkeitsüberwachung", nl: "Alleen snelheidsmonitoring" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes eye movements, blinking patterns, head position, and steering behavior to detect drowsiness and alert drivers.",
                es: "La IA analiza movimientos oculares, patrones de parpadeo, posición de cabeza y comportamiento para detectar somnolencia.",
                de: "KI analysiert Augenbewegungen, Blinkmuster, Kopfposition und Lenkverhalten zur Müdigkeitserkennung.",
                nl: "AI analyseert oogbewegingen, knipperpatronen, hoofdpositie en stuurgedrag om vermoeidheid te detecteren."
            }
        },
        {
            question: {
                en: "What is intelligent speed adaptation (ISA)?",
                es: "¿Qué es adaptación inteligente de velocidad?",
                de: "Was ist intelligente Geschwindigkeitsanpassung?",
                nl: "Wat is intelligente snelheidsaanpassing?"
            },
            options: [
                { en: "Automatic speed limit compliance", es: "Cumplimiento automático de límites", de: "Automatische Geschwindigkeitsbegrenzung", nl: "Automatische snelheidslimiet naleving" },
                { en: "Manual speed control", es: "Control manual de velocidad", de: "Manuelle Geschwindigkeitskontrolle", nl: "Handmatige snelheidscontrole" },
                { en: "Fixed cruise control", es: "Control de crucero fijo", de: "Feste Geschwindigkeitsregelung", nl: "Vaste cruise control" },
                { en: "Random speed changes", es: "Cambios aleatorios de velocidad", de: "Zufällige Geschwindigkeitsänderungen", nl: "Willekeurige snelheidswijzigingen" }
            ],
            correct: 0,
            explanation: {
                en: "ISA uses GPS and road data to automatically adjust vehicle speed to comply with local speed limits and conditions.",
                es: "ISA usa GPS y datos viales para ajustar automáticamente la velocidad según límites locales y condiciones.",
                de: "ISA nutzt GPS und Straßendaten zur automatischen Anpassung an lokale Geschwindigkeitslimits und Bedingungen.",
                nl: "ISA gebruikt GPS en wegdata om voertuigsnelheid automatisch aan te passen aan lokale limieten."
            }
        },
        {
            question: {
                en: "How do drones assist in traffic management?",
                es: "¿Cómo asisten drones en gestión de tráfico?",
                de: "Wie unterstützen Drohnen Verkehrsmanagement?",
                nl: "Hoe assisteren drones bij verkeersmanagement?"
            },
            options: [
                { en: "Aerial monitoring and data collection", es: "Monitoreo aéreo y recolección de datos", de: "Luftüberwachung und Datensammlung", nl: "Luchtmonitoring en dataverzameling" },
                { en: "Ground transport only", es: "Solo transporte terrestre", de: "Nur Bodentransport", nl: "Alleen grondtransport" },
                { en: "Package delivery only", es: "Solo entrega de paquetes", de: "Nur Paketlieferung", nl: "Alleen pakketlevering" },
                { en: "Entertainment purposes", es: "Propósitos de entretenimiento", de: "Unterhaltungszwecke", nl: "Entertainment doeleinden" }
            ],
            correct: 0,
            explanation: {
                en: "Traffic drones provide real-time aerial views for monitoring congestion, accidents, and optimizing traffic flow patterns.",
                es: "Los drones de tráfico proporcionan vistas aéreas en tiempo real para monitorear congestión y optimizar flujo.",
                de: "Verkehrsdrohnen liefern Echzeit-Luftbilder zur Überwachung von Staus, Unfällen und Verkehrsflussoptimierung.",
                nl: "Verkeersdrones bieden real-time luchtbeelden voor monitoring van congestie en optimalisatie van verkeersstromen."
            }
        },
        {
            question: {
                en: "What is predictive vehicle maintenance AI?",
                es: "¿Qué es IA de mantenimiento predictivo vehicular?",
                de: "Was ist KI für vorausschauende Fahrzeugwartung?",
                nl: "Wat is predictief voertuigonderhoud AI?"
            },
            options: [
                { en: "Forecasting component failures", es: "Pronosticar fallas de componentes", de: "Bauteilausfälle vorhersagen", nl: "Componentfalen voorspellen" },
                { en: "Regular scheduled maintenance", es: "Mantenimiento programado regular", de: "Regelmäßige geplante Wartung", nl: "Regulier gepland onderhoud" },
                { en: "Emergency repairs only", es: "Solo reparaciones de emergencia", de: "Nur Notreparaturen", nl: "Alleen noodreparaties" },
                { en: "Visual inspection", es: "Inspección visual", de: "Sichtprüfung", nl: "Visuele inspectie" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes sensor data and patterns to predict when vehicle components will fail, enabling preventive maintenance.",
                es: "La IA analiza datos de sensores y patrones para predecir cuándo fallarán componentes, permitiendo mantenimiento preventivo.",
                de: "KI analysiert Sensordaten und Muster zur Vorhersage von Bauteilausfällen für präventive Wartung.",
                nl: "AI analyseert sensordata en patronen om te voorspellen wanneer componenten falen voor preventief onderhoud."
            }
        },
        {
            question: {
                en: "How does AI optimize last-mile delivery?",
                es: "¿Cómo optimiza la IA entrega de última milla?",
                de: "Wie optimiert KI die letzte Meile Lieferung?",
                nl: "Hoe optimaliseert AI last-mile levering?"
            },
            options: [
                { en: "Route optimization and timing", es: "Optimización de rutas y tiempo", de: "Routen- und Zeitoptimierung", nl: "Route optimalisatie en timing" },
                { en: "Fixed delivery routes", es: "Rutas de entrega fijas", de: "Feste Lieferrouten", nl: "Vaste leveringsroutes" },
                { en: "Random delivery order", es: "Orden de entrega aleatorio", de: "Zufällige Lieferreihenfolge", nl: "Willekeurige leveringsvolgorde" },
                { en: "Manual planning only", es: "Solo planificación manual", de: "Nur manuelle Planung", nl: "Alleen handmatige planning" }
            ],
            correct: 0,
            explanation: {
                en: "AI optimizes delivery routes considering traffic, package priority, time windows, and vehicle capacity for efficiency.",
                es: "La IA optimiza rutas de entrega considerando tráfico, prioridad de paquetes, ventanas de tiempo y capacidad.",
                de: "KI optimiert Lieferrouten unter Berücksichtigung von Verkehr, Paketpriorität, Zeitfenstern und Kapazität.",
                nl: "AI optimaliseert leveringsroutes rekening houdend met verkeer, pakketprioriteit, tijdvensters en capaciteit."
            }
        },
        {
            question: {
                en: "What is vehicle-to-grid (V2G) technology?",
                es: "¿Qué es tecnología vehículo-a-red (V2G)?",
                de: "Was ist Vehicle-to-Grid (V2G) Technologie?",
                nl: "Wat is vehicle-to-grid (V2G) technologie?"
            },
            options: [
                { en: "Bidirectional energy exchange", es: "Intercambio bidireccional de energía", de: "Bidirektionaler Energieaustausch", nl: "Bidirectionele energie-uitwisseling" },
                { en: "Charging only", es: "Solo carga", de: "Nur Laden", nl: "Alleen opladen" },
                { en: "Grid monitoring", es: "Monitoreo de red", de: "Netzüberwachung", nl: "Net monitoring" },
                { en: "Power generation", es: "Generación de energía", de: "Stromerzeugung", nl: "Stroomopwekking" }
            ],
            correct: 0,
            explanation: {
                en: "V2G allows electric vehicles to supply power back to the grid during peak demand, optimizing energy distribution.",
                es: "V2G permite a vehículos eléctricos suministrar energía a la red durante demanda máxima, optimizando distribución.",
                de: "V2G ermöglicht Elektrofahrzeugen, bei Spitzenbedarf Strom ins Netz zurückzuspeisen und Verteilung zu optimieren.",
                nl: "V2G laat elektrische voertuigen stroom terugleveren aan het net tijdens piekbelasting voor optimale verdeling."
            }
        },
        {
            question: {
                en: "How does AI detect road surface conditions?",
                es: "¿Cómo detecta la IA condiciones de superficie vial?",
                de: "Wie erkennt KI Straßenoberflächenbedingungen?",
                nl: "Hoe detecteert AI wegdekconditie?"
            },
            options: [
                { en: "Sensor fusion and image analysis", es: "Fusión de sensores y análisis de imagen", de: "Sensorfusion und Bildanalyse", nl: "Sensorfusie en beeldanalyse" },
                { en: "Visual inspection only", es: "Solo inspección visual", de: "Nur Sichtprüfung", nl: "Alleen visuele inspectie" },
                { en: "Weather reports", es: "Informes meteorológicos", de: "Wetterberichte", nl: "Weerberichten" },
                { en: "Manual reporting", es: "Reporte manual", de: "Manuelle Meldung", nl: "Handmatige melding" }
            ],
            correct: 0,
            explanation: {
                en: "AI combines wheel sensors, cameras, and weather data to detect ice, water, potholes, and other road conditions.",
                es: "La IA combina sensores de ruedas, cámaras y datos meteorológicos para detectar hielo, agua, baches y condiciones.",
                de: "KI kombiniert Radsensoren, Kameras und Wetterdaten zur Erkennung von Eis, Wasser, Schlaglöchern und Bedingungen.",
                nl: "AI combineert wielsensoren, camera's en weerdata om ijs, water, kuilen en andere wegcondities te detecteren."
            }
        },
        {
            question: {
                en: "What is swarm intelligence in transport?",
                es: "¿Qué es inteligencia de enjambre en transporte?",
                de: "Was ist Schwarmintelligenz im Verkehr?",
                nl: "Wat is zwermintelligentie in transport?"
            },
            options: [
                { en: "Collective behavior optimization", es: "Optimización de comportamiento colectivo", de: "Kollektive Verhaltensoptimierung", nl: "Collectieve gedragsoptimalisatie" },
                { en: "Individual vehicle control", es: "Control individual de vehículos", de: "Individuelle Fahrzeugkontrolle", nl: "Individuele voertuigcontrole" },
                { en: "Central command system", es: "Sistema de comando central", de: "Zentrales Befehlssystem", nl: "Centraal commandosysteem" },
                { en: "Random movement", es: "Movimiento aleatorio", de: "Zufällige Bewegung", nl: "Willekeurige beweging" }
            ],
            correct: 0,
            explanation: {
                en: "Swarm intelligence coordinates multiple vehicles or drones to work collectively for optimal traffic flow and efficiency.",
                es: "La inteligencia de enjambre coordina múltiples vehículos o drones para trabajar colectivamente de forma óptima.",
                de: "Schwarmintelligenz koordiniert mehrere Fahrzeuge oder Drohnen für optimalen Verkehrsfluss und Effizienz.",
                nl: "Zwermintelligentie coördineert meerdere voertuigen of drones voor optimale verkeersstroom en efficiëntie."
            }
        },
        {
            question: {
                en: "How do smart traffic lights reduce congestion?",
                es: "¿Cómo reducen congestión los semáforos inteligentes?",
                de: "Wie reduzieren intelligente Ampeln Staus?",
                nl: "Hoe verminderen slimme verkeerslichten congestie?"
            },
            options: [
                { en: "Adaptive timing based on flow", es: "Tiempo adaptativo basado en flujo", de: "Adaptive Zeitsteuerung nach Fluss", nl: "Adaptieve timing op basis van stroom" },
                { en: "Fixed timing cycles", es: "Ciclos de tiempo fijos", de: "Feste Zeitzyklen", nl: "Vaste timing cycli" },
                { en: "Random changes", es: "Cambios aleatorios", de: "Zufällige Änderungen", nl: "Willekeurige veranderingen" },
                { en: "Manual control", es: "Control manual", de: "Manuelle Kontrolle", nl: "Handmatige controle" }
            ],
            correct: 0,
            explanation: {
                en: "Smart lights use real-time traffic data and AI to dynamically adjust signal timing for optimal traffic flow.",
                es: "Los semáforos inteligentes usan datos de tráfico en tiempo real e IA para ajustar tiempo de señal dinámicamente.",
                de: "Intelligente Ampeln nutzen Echtzeit-Verkehrsdaten und KI für dynamisch angepasste Signalzeiten.",
                nl: "Slimme lichten gebruiken real-time verkeersdata en AI om signaaltiming dynamisch aan te passen."
            }
        },
        {
            question: {
                en: "What is automated valet parking (AVP)?",
                es: "¿Qué es estacionamiento valet automatizado?",
                de: "Was ist automatisiertes Valet-Parken?",
                nl: "Wat is geautomatiseerd valet parkeren?"
            },
            options: [
                { en: "Driverless parking system", es: "Sistema de estacionamiento sin conductor", de: "Fahrerloses Parksystem", nl: "Bestuurdersloos parkeersysteem" },
                { en: "Human valet service", es: "Servicio de valet humano", de: "Menschlicher Parkservice", nl: "Menselijke valet service" },
                { en: "Manual parking only", es: "Solo estacionamiento manual", de: "Nur manuelles Parken", nl: "Alleen handmatig parkeren" },
                { en: "Reserved parking spots", es: "Lugares de estacionamiento reservados", de: "Reservierte Parkplätze", nl: "Gereserveerde parkeerplekken" }
            ],
            correct: 0,
            explanation: {
                en: "AVP allows vehicles to park themselves autonomously after drop-off, maximizing space efficiency and convenience.",
                es: "AVP permite a vehículos estacionarse autónomamente después del descenso, maximizando eficiencia y conveniencia.",
                de: "AVP ermöglicht Fahrzeugen nach dem Aussteigen autonomes Parken für maximale Raumeffizienz und Komfort.",
                nl: "AVP laat voertuigen zichzelf autonoom parkeren na afzetten voor maximale ruimte-efficiëntie."
            }
        },
        {
            question: {
                en: "How does AI prevent wrong-way driving?",
                es: "¿Cómo previene la IA conducción en sentido contrario?",
                de: "Wie verhindert KI Falschfahrten?",
                nl: "Hoe voorkomt AI spookrijden?"
            },
            options: [
                { en: "Real-time detection and alerts", es: "Detección y alertas en tiempo real", de: "Echtzeiterkennung und Warnungen", nl: "Real-time detectie en waarschuwingen" },
                { en: "Static road signs only", es: "Solo señales viales estáticas", de: "Nur statische Verkehrsschilder", nl: "Alleen statische verkeersborden" },
                { en: "Manual monitoring", es: "Monitoreo manual", de: "Manuelle Überwachung", nl: "Handmatige monitoring" },
                { en: "Physical barriers", es: "Barreras físicas", de: "Physische Barrieren", nl: "Fysieke barrières" }
            ],
            correct: 0,
            explanation: {
                en: "AI systems detect wrong-way vehicles using cameras and sensors, immediately alerting drivers and traffic management.",
                es: "Los sistemas de IA detectan vehículos en sentido contrario usando cámaras y sensores, alertando inmediatamente.",
                de: "KI-Systeme erkennen Falschfahrer mit Kameras und Sensoren und warnen sofort Fahrer und Verkehrsmanagement.",
                nl: "AI-systemen detecteren spookrijders met camera's en sensoren en waarschuwen direct bestuurders en verkeersleiding."
            }
        },
        {
            question: {
                en: "What is mobility-as-a-service (MaaS)?",
                es: "¿Qué es movilidad como servicio (MaaS)?",
                de: "Was ist Mobility-as-a-Service (MaaS)?",
                nl: "Wat is mobility-as-a-service (MaaS)?"
            },
            options: [
                { en: "Integrated transport platform", es: "Plataforma de transporte integrada", de: "Integrierte Transportplattform", nl: "Geïntegreerd transportplatform" },
                { en: "Car ownership only", es: "Solo propiedad de automóvil", de: "Nur Autobesitz", nl: "Alleen auto-eigendom" },
                { en: "Single transport mode", es: "Modo único de transporte", de: "Einzelnes Verkehrsmittel", nl: "Enkel transportmiddel" },
                { en: "Traditional taxi service", es: "Servicio de taxi tradicional", de: "Traditioneller Taxiservice", nl: "Traditionele taxiservice" }
            ],
            correct: 0,
            explanation: {
                en: "MaaS integrates various transport modes into a single accessible platform for planning, booking, and payment.",
                es: "MaaS integra varios modos de transporte en una plataforma única accesible para planificación, reserva y pago.",
                de: "MaaS integriert verschiedene Verkehrsmittel in eine zugängliche Plattform für Planung, Buchung und Zahlung.",
                nl: "MaaS integreert verschillende transportmodi in één toegankelijk platform voor planning, boeken en betalen."
            }
        },
        {
            question: {
                en: "How does AI optimize freight routing?",
                es: "¿Cómo optimiza la IA el enrutamiento de carga?",
                de: "Wie optimiert KI Frachtrouting?",
                nl: "Hoe optimaliseert AI vrachtrouting?"
            },
            options: [
                { en: "Multi-factor route optimization", es: "Optimización de ruta multifactor", de: "Multifaktor-Routenoptimierung", nl: "Multi-factor route optimalisatie" },
                { en: "Shortest path only", es: "Solo ruta más corta", de: "Nur kürzester Weg", nl: "Alleen kortste route" },
                { en: "Fixed routes", es: "Rutas fijas", de: "Feste Routen", nl: "Vaste routes" },
                { en: "Manual planning", es: "Planificación manual", de: "Manuelle Planung", nl: "Handmatige planning" }
            ],
            correct: 0,
            explanation: {
                en: "AI considers traffic, fuel costs, delivery windows, vehicle capacity, and regulations for optimal freight routing.",
                es: "La IA considera tráfico, costos de combustible, ventanas de entrega, capacidad y regulaciones para enrutamiento óptimo.",
                de: "KI berücksichtigt Verkehr, Kraftstoffkosten, Lieferfenster, Kapazität und Vorschriften für optimales Routing.",
                nl: "AI houdt rekening met verkeer, brandstofkosten, leveringsvensters, capaciteit en regelgeving voor optimale routing."
            }
        },
        {
            question: {
                en: "What are digital twins in transport?",
                es: "¿Qué son gemelos digitales en transporte?",
                de: "Was sind digitale Zwillinge im Verkehr?",
                nl: "Wat zijn digital twins in transport?"
            },
            options: [
                { en: "Virtual replicas for simulation", es: "Réplicas virtuales para simulación", de: "Virtuelle Replikate zur Simulation", nl: "Virtuele replica's voor simulatie" },
                { en: "Physical duplicates", es: "Duplicados físicos", de: "Physische Duplikate", nl: "Fysieke duplicaten" },
                { en: "Backup vehicles", es: "Vehículos de respaldo", de: "Ersatzfahrzeuge", nl: "Backup voertuigen" },
                { en: "Twin engines", es: "Motores gemelos", de: "Zwillingsmotoren", nl: "Dubbele motoren" }
            ],
            correct: 0,
            explanation: {
                en: "Digital twins are virtual models of vehicles or infrastructure used for testing, optimization, and predictive analysis.",
                es: "Los gemelos digitales son modelos virtuales de vehículos o infraestructura para pruebas, optimización y análisis.",
                de: "Digitale Zwillinge sind virtuelle Modelle von Fahrzeugen oder Infrastruktur für Tests und Optimierung.",
                nl: "Digital twins zijn virtuele modellen van voertuigen of infrastructuur voor testen, optimalisatie en analyse."
            }
        },
        {
            question: {
                en: "How does AI handle intersection management?",
                es: "¿Cómo maneja la IA gestión de intersecciones?",
                de: "Wie handhabt KI Kreuzungsmanagement?",
                nl: "Hoe beheert AI kruispuntmanagement?"
            },
            options: [
                { en: "Coordinated signal optimization", es: "Optimización coordinada de señales", de: "Koordinierte Signaloptimierung", nl: "Gecoördineerde signaal optimalisatie" },
                { en: "Fixed signal timing", es: "Tiempo de señal fijo", de: "Feste Signalzeiten", nl: "Vaste signaaltiming" },
                { en: "Random signal changes", es: "Cambios aleatorios de señal", de: "Zufällige Signaländerungen", nl: "Willekeurige signaalveranderingen" },
                { en: "Manual traffic control", es: "Control de tráfico manual", de: "Manuelle Verkehrskontrolle", nl: "Handmatige verkeerscontrole" }
            ],
            correct: 0,
            explanation: {
                en: "AI coordinates multiple intersection signals to create green waves and optimize overall network traffic flow.",
                es: "La IA coordina múltiples señales de intersección para crear ondas verdes y optimizar flujo de tráfico.",
                de: "KI koordiniert mehrere Kreuzungssignale für grüne Wellen und optimierten Gesamtverkehrsfluss.",
                nl: "AI coördineert meerdere kruispuntsignalen voor groene golven en optimale netwerkdoorstroming."
            }
        },
        {
            question: {
                en: "What is geofencing in transport AI?",
                es: "¿Qué es geofencing en IA de transporte?",
                de: "Was ist Geofencing in Transport-KI?",
                nl: "Wat is geofencing in transport AI?"
            },
            options: [
                { en: "Virtual boundary monitoring", es: "Monitoreo de límites virtuales", de: "Virtuelle Grenzüberwachung", nl: "Virtuele grens monitoring" },
                { en: "Physical barriers", es: "Barreras físicas", de: "Physische Barrieren", nl: "Fysieke barrières" },
                { en: "Road construction", es: "Construcción de carreteras", de: "Straßenbau", nl: "Wegenbouw" },
                { en: "Vehicle fencing", es: "Cercado de vehículos", de: "Fahrzeugzäunung", nl: "Voertuig omheining" }
            ],
            correct: 0,
            explanation: {
                en: "Geofencing creates virtual boundaries that trigger actions when vehicles enter or exit specific areas for management.",
                es: "Geofencing crea límites virtuales que activan acciones cuando vehículos entran o salen de áreas específicas.",
                de: "Geofencing erstellt virtuelle Grenzen, die Aktionen auslösen beim Betreten oder Verlassen von Bereichen.",
                nl: "Geofencing creëert virtuele grenzen die acties triggeren wanneer voertuigen gebieden betreden of verlaten."
            }
        },
        {
            question: {
                en: "How do autonomous trains maintain safety?",
                es: "¿Cómo mantienen seguridad los trenes autónomos?",
                de: "Wie gewährleisten autonome Züge Sicherheit?",
                nl: "Hoe waarborgen autonome treinen veiligheid?"
            },
            options: [
                { en: "Multi-layer safety systems", es: "Sistemas de seguridad multicapa", de: "Mehrschichtige Sicherheitssysteme", nl: "Meerlaagse veiligheidssystemen" },
                { en: "Single safety mechanism", es: "Mecanismo único de seguridad", de: "Einzelner Sicherheitsmechanismus", nl: "Enkel veiligheidsmechanisme" },
                { en: "Manual driver backup", es: "Respaldo de conductor manual", de: "Manueller Fahrerbackup", nl: "Handmatige machinist backup" },
                { en: "Visual monitoring only", es: "Solo monitoreo visual", de: "Nur visuelle Überwachung", nl: "Alleen visuele monitoring" }
            ],
            correct: 0,
            explanation: {
                en: "Autonomous trains use redundant sensors, automatic braking, platform detection, and communication systems for safety.",
                es: "Los trenes autónomos usan sensores redundantes, frenado automático, detección de plataforma y comunicación.",
                de: "Autonome Züge nutzen redundante Sensoren, automatisches Bremsen, Bahnsteigdetektion und Kommunikation.",
                nl: "Autonome treinen gebruiken redundante sensoren, automatisch remmen, perrondetectie en communicatiesystemen."
            }
        },
        {
            question: {
                en: "What is congestion pricing AI?",
                es: "¿Qué es IA de tarificación por congestión?",
                de: "Was ist KI für Staugebühren?",
                nl: "Wat is congestieprijzen AI?"
            },
            options: [
                { en: "Dynamic toll adjustment", es: "Ajuste dinámico de peaje", de: "Dynamische Mautanpassung", nl: "Dynamische tol aanpassing" },
                { en: "Fixed toll rates", es: "Tarifas de peaje fijas", de: "Feste Mautgebühren", nl: "Vaste toltarieven" },
                { en: "Free road access", es: "Acceso gratuito a carreteras", de: "Kostenloser Straßenzugang", nl: "Gratis toegang tot wegen" },
                { en: "Manual toll collection", es: "Cobro manual de peaje", de: "Manuelle Mauterhebung", nl: "Handmatige tol inning" }
            ],
            correct: 0,
            explanation: {
                en: "AI adjusts road tolls based on real-time traffic conditions to manage congestion and optimize traffic flow.",
                es: "La IA ajusta peajes viales basándose en condiciones de tráfico en tiempo real para gestionar congestión.",
                de: "KI passt Straßenmaut basierend auf Echtzeitverkehr an zur Staumanagement und Flussoptimierung.",
                nl: "AI past wegtol aan op basis van real-time verkeersomstandigheden om congestie te beheren."
            }
        },
        {
            question: {
                en: "How does AI improve railway scheduling?",
                es: "¿Cómo mejora la IA la programación ferroviaria?",
                de: "Wie verbessert KI Bahnfahrpläne?",
                nl: "Hoe verbetert AI spoorwegplanning?"
            },
            options: [
                { en: "Real-time optimization", es: "Optimización en tiempo real", de: "Echtzeitoptimierung", nl: "Real-time optimalisatie" },
                { en: "Fixed timetables only", es: "Solo horarios fijos", de: "Nur feste Fahrpläne", nl: "Alleen vaste dienstregelingen" },
                { en: "Manual scheduling", es: "Programación manual", de: "Manuelle Planung", nl: "Handmatige planning" },
                { en: "Random train times", es: "Tiempos de tren aleatorios", de: "Zufällige Zugzeiten", nl: "Willekeurige treintijden" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes passenger demand, delays, and network capacity to dynamically optimize train schedules and connections.",
                es: "La IA analiza demanda de pasajeros, retrasos y capacidad de red para optimizar horarios dinámicamente.",
                de: "KI analysiert Passagiernachfrage, Verspätungen und Netzkapazität für dynamisch optimierte Fahrpläne.",
                nl: "AI analyseert passagiersvraag, vertragingen en netwerkcapaciteit voor dynamisch geoptimaliseerde dienstregelingen."
            }
        },
        {
            question: {
                en: "What is adaptive traffic control?",
                es: "¿Qué es control de tráfico adaptativo?",
                de: "Was ist adaptive Verkehrskontrolle?",
                nl: "Wat is adaptieve verkeerscontrole?"
            },
            options: [
                { en: "Self-adjusting signal systems", es: "Sistemas de señal autoajustables", de: "Selbstanpassende Signalsysteme", nl: "Zelf-aanpassende signaalsystemen" },
                { en: "Fixed timing patterns", es: "Patrones de tiempo fijos", de: "Feste Zeitmuster", nl: "Vaste timing patronen" },
                { en: "Manual control only", es: "Solo control manual", de: "Nur manuelle Kontrolle", nl: "Alleen handmatige controle" },
                { en: "Random signal changes", es: "Cambios aleatorios de señal", de: "Zufällige Signaländerungen", nl: "Willekeurige signaalveranderingen" }
            ],
            correct: 0,
            explanation: {
                en: "Adaptive control uses real-time data to continuously adjust traffic signals for optimal flow and reduced delays.",
                es: "El control adaptativo usa datos en tiempo real para ajustar señales continuamente para flujo óptimo.",
                de: "Adaptive Kontrolle nutzt Echtzeitdaten zur kontinuierlichen Signalanpassung für optimalen Fluss.",
                nl: "Adaptieve controle gebruikt real-time data om verkeerssignalen continu aan te passen voor optimale doorstroming."
            }
        },
        {
            question: {
                en: "How do smart highways improve safety?",
                es: "¿Cómo mejoran seguridad las autopistas inteligentes?",
                de: "Wie verbessern intelligente Autobahnen Sicherheit?",
                nl: "Hoe verbeteren slimme snelwegen veiligheid?"
            },
            options: [
                { en: "Dynamic warnings and lane control", es: "Advertencias dinámicas y control de carril", de: "Dynamische Warnungen und Spurkontrolle", nl: "Dynamische waarschuwingen en rijstrookcontrole" },
                { en: "Static road signs only", es: "Solo señales viales estáticas", de: "Nur statische Verkehrsschilder", nl: "Alleen statische verkeersborden" },
                { en: "Physical barriers", es: "Barreras físicas", de: "Physische Barrieren", nl: "Fysieke barrières" },
                { en: "Manual monitoring", es: "Monitoreo manual", de: "Manuelle Überwachung", nl: "Handmatige monitoring" }
            ],
            correct: 0,
            explanation: {
                en: "Smart highways use sensors and displays to provide real-time warnings, variable speed limits, and lane management.",
                es: "Las autopistas inteligentes usan sensores y pantallas para advertencias, límites de velocidad variables y gestión.",
                de: "Intelligente Autobahnen nutzen Sensoren und Anzeigen für Echtzeitwarnungen und variable Geschwindigkeitslimits.",
                nl: "Slimme snelwegen gebruiken sensoren en displays voor real-time waarschuwingen en variabele snelheidslimieten."
            }
        },
        {
            question: {
                en: "What is blind spot detection technology?",
                es: "¿Qué es tecnología de detección de punto ciego?",
                de: "Was ist Toter-Winkel-Erkennung?",
                nl: "Wat is dodehoek detectie technologie?"
            },
            options: [
                { en: "Radar/camera monitoring system", es: "Sistema de monitoreo radar/cámara", de: "Radar/Kamera-Überwachungssystem", nl: "Radar/camera monitoring systeem" },
                { en: "Mirror adjustment only", es: "Solo ajuste de espejos", de: "Nur Spiegeleinstellung", nl: "Alleen spiegelafstelling" },
                { en: "Manual checking", es: "Verificación manual", de: "Manuelle Überprüfung", nl: "Handmatige controle" },
                { en: "Sound alerts only", es: "Solo alertas sonoras", de: "Nur Tonwarnungen", nl: "Alleen geluidswaarschuwingen" }
            ],
            correct: 0,
            explanation: {
                en: "Blind spot detection uses radar or cameras to monitor areas not visible in mirrors and alerts drivers to hidden vehicles.",
                es: "La detección de punto ciego usa radar o cámaras para monitorear áreas no visibles y alerta sobre vehículos ocultos.",
                de: "Toter-Winkel-Erkennung nutzt Radar oder Kameras zur Überwachung nicht sichtbarer Bereiche und warnt vor Fahrzeugen.",
                nl: "Dodehoek detectie gebruikt radar of camera's om niet-zichtbare gebieden te monitoren en waarschuwt voor voertuigen."
            }
        },
        {
            question: {
                en: "How does AI enable dynamic routing?",
                es: "¿Cómo permite la IA enrutamiento dinámico?",
                de: "Wie ermöglicht KI dynamisches Routing?",
                nl: "Hoe maakt AI dynamische routing mogelijk?"
            },
            options: [
                { en: "Real-time route recalculation", es: "Recálculo de ruta en tiempo real", de: "Echtzeit-Routenneuberechnung", nl: "Real-time route herberekening" },
                { en: "Fixed route planning", es: "Planificación de ruta fija", de: "Feste Routenplanung", nl: "Vaste routeplanning" },
                { en: "Manual navigation", es: "Navegación manual", de: "Manuelle Navigation", nl: "Handmatige navigatie" },
                { en: "Predetermined paths", es: "Rutas predeterminadas", de: "Vorbestimmte Wege", nl: "Vooraf bepaalde paden" }
            ],
            correct: 0,
            explanation: {
                en: "AI continuously analyzes traffic conditions and incidents to recalculate optimal routes in real-time during travel.",
                es: "La IA analiza continuamente condiciones de tráfico e incidentes para recalcular rutas óptimas en tiempo real.",
                de: "KI analysiert kontinuierlich Verkehrsbedingungen und Vorfälle für Echtzeit-Routenneuberechnung während der Fahrt.",
                nl: "AI analyseert continu verkeersomstandigheden en incidenten voor real-time herberekening van optimale routes."
            }
        },
        {
            question: {
                en: "What is telematics in modern vehicles?",
                es: "¿Qué es telemática en vehículos modernos?",
                de: "Was ist Telematik in modernen Fahrzeugen?",
                nl: "Wat is telematica in moderne voertuigen?"
            },
            options: [
                { en: "Integrated data communication", es: "Comunicación de datos integrada", de: "Integrierte Datenkommunikation", nl: "Geïntegreerde datacommunicatie" },
                { en: "Radio system only", es: "Solo sistema de radio", de: "Nur Radiosystem", nl: "Alleen radiosysteem" },
                { en: "GPS tracking only", es: "Solo rastreo GPS", de: "Nur GPS-Tracking", nl: "Alleen GPS tracking" },
                { en: "Entertainment system", es: "Sistema de entretenimiento", de: "Unterhaltungssystem", nl: "Entertainment systeem" }
            ],
            correct: 0,
            explanation: {
                en: "Telematics combines GPS, onboard diagnostics, and wireless communication for vehicle monitoring and management.",
                es: "La telemática combina GPS, diagnósticos a bordo y comunicación inalámbrica para monitoreo y gestión vehicular.",
                de: "Telematik kombiniert GPS, Borddiagnose und drahtlose Kommunikation für Fahrzeugüberwachung und -management.",
                nl: "Telematica combineert GPS, boorddiagnostiek en draadloze communicatie voor voertuigmonitoring en -beheer."
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
                { en: "Computer vision analysis", es: "Análisis de visión por computadora", de: "Computer-Vision-Analyse", nl: "Computer vision analyse" },
                { en: "Manual observation only", es: "Solo observación manual", de: "Nur manuelle Beobachtung", nl: "Alleen handmatige observatie" },
                { en: "Random checks", es: "Controles aleatorios", de: "Zufällige Kontrollen", nl: "Willekeurige controles" },
                { en: "Fixed cameras only", es: "Solo cámaras fijas", de: "Nur feste Kameras", nl: "Alleen vaste camera's" }
            ],
            correct: 0,
            explanation: {
                en: "AI uses computer vision to automatically detect speeding, red light violations, and illegal parking from camera footage.",
                es: "La IA usa visión por computadora para detectar automáticamente exceso de velocidad y violaciones desde cámaras.",
                de: "KI nutzt Computer Vision zur automatischen Erkennung von Geschwindigkeitsverstößen und Rotlichtvergehen.",
                nl: "AI gebruikt computer vision om automatisch snelheidsovertredingen en roodlichtnegatie te detecteren."
            }
        },
        {
            question: {
                en: "What is vehicle health monitoring?",
                es: "¿Qué es monitoreo de salud vehicular?",
                de: "Was ist Fahrzeugzustandsüberwachung?",
                nl: "Wat is voertuiggezondheidsmonitoring?"
            },
            options: [
                { en: "Continuous diagnostics system", es: "Sistema de diagnóstico continuo", de: "Kontinuierliches Diagnosesystem", nl: "Continu diagnostiek systeem" },
                { en: "Annual inspection only", es: "Solo inspección anual", de: "Nur jährliche Inspektion", nl: "Alleen jaarlijkse inspectie" },
                { en: "Visual checking", es: "Verificación visual", de: "Sichtprüfung", nl: "Visuele controle" },
                { en: "Manual testing", es: "Pruebas manuales", de: "Manuelle Tests", nl: "Handmatige tests" }
            ],
            correct: 0,
            explanation: {
                en: "Vehicle health monitoring uses sensors to continuously track component status and predict maintenance needs.",
                es: "El monitoreo de salud vehicular usa sensores para rastrear continuamente estado de componentes y predecir mantenimiento.",
                de: "Fahrzeugzustandsüberwachung nutzt Sensoren zur kontinuierlichen Überwachung und Wartungsvorhersage.",
                nl: "Voertuiggezondheidsmonitoring gebruikt sensoren om continu componentstatus te volgen en onderhoud te voorspellen."
            }
        },
        {
            question: {
                en: "How do autonomous buses handle stops?",
                es: "¿Cómo manejan paradas los autobuses autónomos?",
                de: "Wie handhaben autonome Busse Haltestellen?",
                nl: "Hoe hanteren autonome bussen haltes?"
            },
            options: [
                { en: "Precision docking systems", es: "Sistemas de acoplamiento de precisión", de: "Präzisionsandocksysteme", nl: "Precisie aansluit systemen" },
                { en: "Random stopping", es: "Parada aleatoria", de: "Zufälliges Anhalten", nl: "Willekeurig stoppen" },
                { en: "Manual driver control", es: "Control manual del conductor", de: "Manuelle Fahrerkontrolle", nl: "Handmatige chauffeur controle" },
                { en: "Fixed stop locations only", es: "Solo ubicaciones fijas de parada", de: "Nur feste Haltestellen", nl: "Alleen vaste haltelocaties" }
            ],
            correct: 0,
            explanation: {
                en: "Autonomous buses use precision docking to align perfectly with platforms for safe, accessible passenger boarding.",
                es: "Los autobuses autónomos usan acoplamiento de precisión para alinearse perfectamente con plataformas para embarque seguro.",
                de: "Autonome Busse nutzen Präzisionsandocken für perfekte Ausrichtung an Bahnsteigen für sicheres Einsteigen.",
                nl: "Autonome bussen gebruiken precisie docking om perfect aan te sluiten bij perrons voor veilig instappen."
            }
        },
        {
            question: {
                en: "What is automated toll collection?",
                es: "¿Qué es cobro automático de peaje?",
                de: "Was ist automatische Mauterhebung?",
                nl: "Wat is automatische tol inning?"
            },
            options: [
                { en: "Electronic payment systems", es: "Sistemas de pago electrónico", de: "Elektronische Zahlungssysteme", nl: "Elektronische betalingssystemen" },
                { en: "Cash payment only", es: "Solo pago en efectivo", de: "Nur Barzahlung", nl: "Alleen contante betaling" },
                { en: "Manual toll booths", es: "Cabinas de peaje manuales", de: "Manuelle Mautstellen", nl: "Handmatige tolhuisjes" },
                { en: "Free passage", es: "Paso gratuito", de: "Freie Durchfahrt", nl: "Gratis doorgang" }
            ],
            correct: 0,
            explanation: {
                en: "Automated toll systems use RFID or license plate recognition for seamless payment without stopping vehicles.",
                es: "Los sistemas de peaje automatizado usan RFID o reconocimiento de matrículas para pago sin detener vehículos.",
                de: "Automatische Mautsysteme nutzen RFID oder Kennzeichenerkennung für nahtlose Zahlung ohne Anhalten.",
                nl: "Automatische tolsystemen gebruiken RFID of kentekenherkenning voor naadloze betaling zonder stoppen."
            }
        },
        {
            question: {
                en: "How does AI optimize parking space?",
                es: "¿Cómo optimiza la IA el espacio de estacionamiento?",
                de: "Wie optimiert KI Parkraum?",
                nl: "Hoe optimaliseert AI parkeerruimte?"
            },
            options: [
                { en: "Dynamic space allocation", es: "Asignación dinámica de espacio", de: "Dynamische Raumzuweisung", nl: "Dynamische ruimte toewijzing" },
                { en: "Fixed parking spots", es: "Lugares de estacionamiento fijos", de: "Feste Parkplätze", nl: "Vaste parkeerplekken" },
                { en: "Random parking", es: "Estacionamiento aleatorio", de: "Zufälliges Parken", nl: "Willekeurig parkeren" },
                { en: "Manual assignment", es: "Asignación manual", de: "Manuelle Zuweisung", nl: "Handmatige toewijzing" }
            ],
            correct: 0,
            explanation: {
                en: "AI analyzes vehicle sizes and parking patterns to dynamically allocate and guide vehicles to optimal parking spaces.",
                es: "La IA analiza tamaños de vehículos y patrones para asignar dinámicamente y guiar a espacios óptimos.",
                de: "KI analysiert Fahrzeuggrößen und Parkmuster für dynamische Zuweisung zu optimalen Parkplätzen.",
                nl: "AI analyseert voertuiggroottes en parkeerpatronen voor dynamische toewijzing van optimale parkeerplaatsen."
            }
        },
        {
            question: {
                en: "What is ride-sharing optimization?",
                es: "¿Qué es optimización de viaje compartido?",
                de: "Was ist Fahrgemeinschaftsoptimierung?",
                nl: "Wat is ritdelen optimalisatie?"
            },
            options: [
                { en: "Matching riders with routes", es: "Emparejar pasajeros con rutas", de: "Fahrgäste mit Routen abgleichen", nl: "Passagiers matchen met routes" },
                { en: "Individual rides only", es: "Solo viajes individuales", de: "Nur Einzelfahrten", nl: "Alleen individuele ritten" },
                { en: "Fixed route service", es: "Servicio de ruta fija", de: "Fester Routenservice", nl: "Vaste route service" },
                { en: "Random passenger pickup", es: "Recogida aleatoria de pasajeros", de: "Zufällige Fahrgastaufnahme", nl: "Willekeurige passagier ophalen" }
            ],
            correct: 0,
            explanation: {
                en: "AI matches multiple riders with similar routes to optimize vehicle utilization and reduce traffic congestion.",
                es: "La IA empareja múltiples pasajeros con rutas similares para optimizar utilización y reducir congestión.",
                de: "KI bringt mehrere Fahrgäste mit ähnlichen Routen zusammen für optimale Auslastung und weniger Stau.",
                nl: "AI matcht meerdere passagiers met vergelijkbare routes voor optimaal voertuiggebruik en minder congestie."
            }
        },
        {
            question: {
                en: "How does weather affect autonomous driving?",
                es: "¿Cómo afecta el clima la conducción autónoma?",
                de: "Wie beeinflusst Wetter autonomes Fahren?",
                nl: "Hoe beïnvloedt weer autonoom rijden?"
            },
            options: [
                { en: "Requires adaptive algorithms", es: "Requiere algoritmos adaptativos", de: "Erfordert adaptive Algorithmen", nl: "Vereist adaptieve algoritmen" },
                { en: "No impact on systems", es: "Sin impacto en sistemas", de: "Keine Auswirkung auf Systeme", nl: "Geen impact op systemen" },
                { en: "Complete shutdown", es: "Apagado completo", de: "Vollständige Abschaltung", nl: "Volledige uitschakeling" },
                { en: "Manual override only", es: "Solo anulación manual", de: "Nur manuelle Übersteuerung", nl: "Alleen handmatige override" }
            ],
            correct: 0,
            explanation: {
                en: "Weather conditions require adaptive algorithms that adjust sensor processing and driving behavior for safety.",
                es: "Las condiciones climáticas requieren algoritmos adaptativos que ajustan procesamiento de sensores y comportamiento.",
                de: "Wetterbedingungen erfordern adaptive Algorithmen für angepasste Sensorverarbeitung und Fahrverhalten.",
                nl: "Weersomstandigheden vereisen adaptieve algoritmen die sensorverwerking en rijgedrag aanpassen voor veiligheid."
            }
        },
        {
            question: {
                en: "What is connected vehicle technology?",
                es: "¿Qué es tecnología de vehículo conectado?",
                de: "Was ist vernetzte Fahrzeugtechnologie?",
                nl: "Wat is connected vehicle technologie?"
            },
            options: [
                { en: "Vehicle network communication", es: "Comunicación de red vehicular", de: "Fahrzeugnetzwerkkommunikation", nl: "Voertuig netwerkcommunicatie" },
                { en: "Standalone operation", es: "Operación independiente", de: "Eigenständiger Betrieb", nl: "Standalone werking" },
                { en: "Physical connection only", es: "Solo conexión física", de: "Nur physische Verbindung", nl: "Alleen fysieke verbinding" },
                { en: "Radio broadcasting", es: "Radiodifusión", de: "Rundfunkübertragung", nl: "Radio uitzending" }
            ],
            correct: 0,
            explanation: {
                en: "Connected vehicles share data with other vehicles, infrastructure, and networks for enhanced safety and efficiency.",
                es: "Los vehículos conectados comparten datos con otros vehículos, infraestructura y redes para mayor seguridad.",
                de: "Vernetzte Fahrzeuge teilen Daten mit anderen Fahrzeugen, Infrastruktur und Netzwerken für mehr Sicherheit.",
                nl: "Connected vehicles delen data met andere voertuigen, infrastructuur en netwerken voor betere veiligheid."
            }
        },
        {
            question: {
                en: "How does AI manage fleet operations?",
                es: "¿Cómo gestiona la IA operaciones de flota?",
                de: "Wie verwaltet KI Flottenbetrieb?",
                nl: "Hoe beheert AI wagenparkoperaties?"
            },
            options: [
                { en: "Comprehensive optimization system", es: "Sistema integral de optimización", de: "Umfassendes Optimierungssystem", nl: "Uitgebreid optimalisatiesysteem" },
                { en: "Individual vehicle tracking", es: "Rastreo individual de vehículos", de: "Individuelle Fahrzeugverfolgung", nl: "Individuele voertuig tracking" },
                { en: "Manual dispatch only", es: "Solo despacho manual", de: "Nur manuelle Disposition", nl: "Alleen handmatige dispatch" },
                { en: "Random assignment", es: "Asignación aleatoria", de: "Zufällige Zuweisung", nl: "Willekeurige toewijzing" }
            ],
            correct: 0,
            explanation: {
                en: "AI optimizes fleet operations through route planning, maintenance scheduling, driver assignment, and fuel management.",
                es: "La IA optimiza operaciones de flota mediante planificación de rutas, mantenimiento, asignación y gestión de combustible.",
                de: "KI optimiert Flottenbetrieb durch Routenplanung, Wartungsplanung, Fahrerzuweisung und Kraftstoffmanagement.",
                nl: "AI optimaliseert wagenparkoperaties door routeplanning, onderhoudsplanning, chauffeur toewijzing en brandstofbeheer."
            }
        },
        {
            question: {
                en: "What is automated valet charging?",
                es: "¿Qué es carga valet automatizada?",
                de: "Was ist automatisiertes Valet-Laden?",
                nl: "Wat is geautomatiseerd valet opladen?"
            },
            options: [
                { en: "Self-parking for charging", es: "Auto-estacionamiento para carga", de: "Selbstparken zum Laden", nl: "Zelf-parkeren voor opladen" },
                { en: "Manual charging only", es: "Solo carga manual", de: "Nur manuelles Laden", nl: "Alleen handmatig opladen" },
                { en: "Fixed charging stations", es: "Estaciones de carga fijas", de: "Feste Ladestationen", nl: "Vaste oplaadstations" },
                { en: "Human valet service", es: "Servicio de valet humano", de: "Menschlicher Parkservice", nl: "Menselijke valet service" }
            ],
            correct: 0,
            explanation: {
                en: "Electric vehicles autonomously navigate to charging stations and connect for charging without human intervention.",
                es: "Los vehículos eléctricos navegan autónomamente a estaciones de carga y se conectan sin intervención humana.",
                de: "Elektrofahrzeuge navigieren autonom zu Ladestationen und verbinden sich ohne menschlichen Eingriff.",
                nl: "Elektrische voertuigen navigeren autonoom naar oplaadstations en verbinden zich zonder menselijke interventie."
            }
        },
        {
            question: {
                en: "How do road weather systems work?",
                es: "¿Cómo funcionan sistemas meteorológicos viales?",
                de: "Wie funktionieren Straßenwettersysteme?",
                nl: "Hoe werken wegweersystemen?"
            },
            options: [
                { en: "Integrated sensor networks", es: "Redes de sensores integradas", de: "Integrierte Sensornetzwerke", nl: "Geïntegreerde sensornetwerken" },
                { en: "Weather forecasts only", es: "Solo pronósticos del tiempo", de: "Nur Wettervorhersagen", nl: "Alleen weersvoorspellingen" },
                { en: "Manual observation", es: "Observación manual", de: "Manuelle Beobachtung", nl: "Handmatige observatie" },
                { en: "Satellite data only", es: "Solo datos satelitales", de: "Nur Satellitendaten", nl: "Alleen satellietdata" }
            ],
            correct: 0,
            explanation: {
                en: "Road weather systems use sensors for temperature, moisture, and visibility to provide real-time road condition data.",
                es: "Los sistemas meteorológicos viales usan sensores de temperatura, humedad y visibilidad para datos en tiempo real.",
                de: "Straßenwettersysteme nutzen Sensoren für Temperatur, Feuchtigkeit und Sicht für Echtzeitdaten.",
                nl: "Wegweersystemen gebruiken sensoren voor temperatuur, vocht en zicht voor real-time wegconditie data."
            }
        },
        {
            question: {
                en: "What is cross traffic alert?",
                es: "¿Qué es alerta de tráfico cruzado?",
                de: "Was ist Querverkehrswarnung?",
                nl: "Wat is kruisend verkeer waarschuwing?"
            },
            options: [
                { en: "Rear cross-path detection", es: "Detección de ruta cruzada trasera", de: "Hintere Querpfaderkennung", nl: "Achterste kruispad detectie" },
                { en: "Forward detection only", es: "Solo detección frontal", de: "Nur Vorwärtserkennung", nl: "Alleen voorwaartse detectie" },
                { en: "Side mirrors only", es: "Solo espejos laterales", de: "Nur Seitenspiegel", nl: "Alleen zijspiegels" },
                { en: "Manual checking", es: "Verificación manual", de: "Manuelle Überprüfung", nl: "Handmatige controle" }
            ],
            correct: 0,
            explanation: {
                en: "Cross traffic alert uses sensors to detect vehicles approaching from the sides when reversing out of parking spaces.",
                es: "La alerta de tráfico cruzado usa sensores para detectar vehículos acercándose desde los lados al retroceder.",
                de: "Querverkehrswarnung nutzt Sensoren zur Erkennung seitlich nahender Fahrzeuge beim Rückwärtsfahren.",
                nl: "Kruisend verkeer waarschuwing gebruikt sensoren om voertuigen van opzij te detecteren bij achteruit rijden."
            }
        },
        {
            question: {
                en: "How does forward collision warning work?",
                es: "¿Cómo funciona advertencia de colisión frontal?",
                de: "Wie funktioniert Kollisionswarnung?",
                nl: "Hoe werkt voorwaartse botsingswaarschuwing?"
            },
            options: [
                { en: "Predictive collision detection", es: "Detección predictiva de colisión", de: "Vorhersagende Kollisionserkennung", nl: "Voorspellende botsingsdetectie" },
                { en: "Rear detection only", es: "Solo detección trasera", de: "Nur Heckerkennung", nl: "Alleen achterdetectie" },
                { en: "Manual observation", es: "Observación manual", de: "Manuelle Beobachtung", nl: "Handmatige observatie" },
                { en: "Sound alerts only", es: "Solo alertas sonoras", de: "Nur Tonwarnungen", nl: "Alleen geluidswaarschuwingen" }
            ],
            correct: 0,
            explanation: {
                en: "The system uses radar and cameras to detect potential frontal collisions and alerts drivers to brake or steer.",
                es: "El sistema usa radar y cámaras para detectar colisiones frontales potenciales y alerta para frenar o girar.",
                de: "Das System nutzt Radar und Kameras zur Erkennung möglicher Frontalkollisionen und warnt zum Bremsen.",
                nl: "Het systeem gebruikt radar en camera's om mogelijke frontale botsingen te detecteren en waarschuwt om te remmen."
            }
        },
        {
            question: {
                en: "What is pedestrian detection AI?",
                es: "¿Qué es IA de detección de peatones?",
                de: "Was ist KI zur Fußgängererkennung?",
                nl: "Wat is voetgangersdetectie AI?"
            },
            options: [
                { en: "Vision-based person recognition", es: "Reconocimiento de personas basado en visión", de: "Sichtbasierte Personenerkennung", nl: "Visie-gebaseerde persoonsherkenning" },
                { en: "Motion sensors only", es: "Solo sensores de movimiento", de: "Nur Bewegungssensoren", nl: "Alleen bewegingssensoren" },
                { en: "Sound detection", es: "Detección de sonido", de: "Geräuscherkennung", nl: "Geluidsdetectie" },
                { en: "Manual spotting", es: "Avistamiento manual", de: "Manuelle Erkennung", nl: "Handmatige herkenning" }
            ],
            correct: 0,
            explanation: {
                en: "AI uses computer vision to identify pedestrians, predict their movement, and trigger automatic braking if needed.",
                es: "La IA usa visión por computadora para identificar peatones, predecir movimiento y activar frenado automático.",
                de: "KI nutzt Computer Vision zur Fußgängererkennung, Bewegungsvorhersage und automatischem Bremsen.",
                nl: "AI gebruikt computer vision om voetgangers te identificeren, beweging te voorspellen en automatisch te remmen."
            }
        },
        {
            question: {
                en: "How does traffic sign recognition work?",
                es: "¿Cómo funciona reconocimiento de señales?",
                de: "Wie funktioniert Verkehrszeichenerkennung?",
                nl: "Hoe werkt verkeersbordherkenning?"
            },
            options: [
                { en: "Camera-based sign analysis", es: "Análisis de señales basado en cámara", de: "Kamerabasierte Schildanalyse", nl: "Camera-gebaseerde bordanalyse" },
                { en: "GPS data only", es: "Solo datos GPS", de: "Nur GPS-Daten", nl: "Alleen GPS data" },
                { en: "Manual observation", es: "Observación manual", de: "Manuelle Beobachtung", nl: "Handmatige observatie" },
                { en: "Radio signals", es: "Señales de radio", de: "Funksignale", nl: "Radio signalen" }
            ],
            correct: 0,
            explanation: {
                en: "Cameras capture traffic signs and AI algorithms identify and interpret them to inform drivers or adjust vehicle behavior.",
                es: "Las cámaras capturan señales de tráfico y algoritmos de IA las identifican e interpretan para informar o ajustar.",
                de: "Kameras erfassen Verkehrszeichen und KI-Algorithmen identifizieren sie zur Information oder Anpassung.",
                nl: "Camera's leggen verkeersborden vast en AI-algoritmen identificeren ze om bestuurders te informeren."
            }
        },
        {
            question: {
                en: "What is night vision assistance?",
                es: "¿Qué es asistencia de visión nocturna?",
                de: "Was ist Nachtsichtassistenz?",
                nl: "Wat is nachtzicht assistentie?"
            },
            options: [
                { en: "Infrared detection system", es: "Sistema de detección infrarroja", de: "Infrarot-Erkennungssystem", nl: "Infrarood detectiesysteem" },
                { en: "Brighter headlights only", es: "Solo faros más brillantes", de: "Nur hellere Scheinwerfer", nl: "Alleen fellere koplampen" },
                { en: "Daylight driving only", es: "Solo conducción diurna", de: "Nur Tagfahrt", nl: "Alleen dagrijden" },
                { en: "Manual vision", es: "Visión manual", de: "Manuelle Sicht", nl: "Handmatig zicht" }
            ],
            correct: 0,
            explanation: {
                en: "Night vision uses infrared sensors to detect pedestrians, animals, and obstacles beyond headlight range in darkness.",
                es: "La visión nocturna usa sensores infrarrojos para detectar peatones, animales y obstáculos más allá de los faros.",
                de: "Nachtsicht nutzt Infrarotsensoren zur Erkennung von Fußgängern und Hindernissen über Scheinwerferreichweite.",
                nl: "Nachtzicht gebruikt infrarood sensoren om voetgangers, dieren en obstakels buiten koplampreikwijdte te detecteren."
            }
        },
        {
            question: {
                en: "How does hill start assist work?",
                es: "¿Cómo funciona asistente de arranque en pendiente?",
                de: "Wie funktioniert Berganfahrhilfe?",
                nl: "Hoe werkt heuvelstart assistentie?"
            },
            options: [
                { en: "Prevents rollback on slopes", es: "Previene retroceso en pendientes", de: "Verhindert Zurückrollen am Hang", nl: "Voorkomt achteruit rollen op hellingen" },
                { en: "Accelerates automatically", es: "Acelera automáticamente", de: "Beschleunigt automatisch", nl: "Versnelt automatisch" },
                { en: "Manual brake hold", es: "Retención manual de freno", de: "Manuelle Bremshalterung", nl: "Handmatige rem vasthouden" },
                { en: "Level ground only", es: "Solo terreno nivelado", de: "Nur ebener Boden", nl: "Alleen vlakke grond" }
            ],
            correct: 0,
            explanation: {
                en: "Hill start assist temporarily holds brakes when starting on an incline to prevent the vehicle from rolling backward.",
                es: "El asistente de arranque en pendiente retiene temporalmente los frenos para prevenir que el vehículo retroceda.",
                de: "Berganfahrhilfe hält Bremsen beim Anfahren am Hang kurz fest um Zurückrollen zu verhindern.",
                nl: "Heuvelstart assistentie houdt remmen tijdelijk vast bij wegrijden op helling om achteruit rollen te voorkomen."
            }
        },
        {
            question: {
                en: "What is tire pressure monitoring?",
                es: "¿Qué es monitoreo de presión de neumáticos?",
                de: "Was ist Reifendrucküberwachung?",
                nl: "Wat is bandenspanning monitoring?"
            },
            options: [
                { en: "Automatic pressure sensing", es: "Detección automática de presión", de: "Automatische Druckerkennung", nl: "Automatische druk detectie" },
                { en: "Manual checking only", es: "Solo verificación manual", de: "Nur manuelle Prüfung", nl: "Alleen handmatige controle" },
                { en: "Visual inspection", es: "Inspección visual", de: "Sichtprüfung", nl: "Visuele inspectie" },
                { en: "Annual testing", es: "Prueba anual", de: "Jährliche Prüfung", nl: "Jaarlijkse test" }
            ],
            correct: 0,
            explanation: {
                en: "TPMS uses sensors in each wheel to monitor tire pressure and alert drivers to under-inflation for safety and efficiency.",
                es: "TPMS usa sensores en cada rueda para monitorear presión y alertar sobre baja inflación para seguridad.",
                de: "TPMS nutzt Sensoren in jedem Rad zur Drucküberwachung und warnt bei Unterdruck für Sicherheit.",
                nl: "TPMS gebruikt sensoren in elk wiel om bandenspanning te monitoren en waarschuwt bij te lage druk."
            }
        },
        {
            question: {
                en: "How does electronic stability control work?",
                es: "¿Cómo funciona control electrónico de estabilidad?",
                de: "Wie funktioniert elektronische Stabilitätskontrolle?",
                nl: "Hoe werkt elektronische stabiliteitscontrole?"
            },
            options: [
                { en: "Selective braking and power reduction", es: "Frenado selectivo y reducción de potencia", de: "Selektives Bremsen und Leistungsreduzierung", nl: "Selectief remmen en vermogensreductie" },
                { en: "Steering lock only", es: "Solo bloqueo de dirección", de: "Nur Lenkradsperre", nl: "Alleen stuurslot" },
                { en: "Manual control", es: "Control manual", de: "Manuelle Kontrolle", nl: "Handmatige controle" },
                { en: "Speed limitation", es: "Limitación de velocidad", de: "Geschwindigkeitsbegrenzung", nl: "Snelheidsbegrenzing" }
            ],
            correct: 0,
            explanation: {
                en: "ESC detects loss of traction and automatically applies brakes to individual wheels to maintain vehicle control.",
                es: "ESC detecta pérdida de tracción y aplica frenos automáticamente a ruedas individuales para mantener control.",
                de: "ESC erkennt Traktionsverlust und bremst automatisch einzelne Räder für Fahrzeugkontrolle.",
                nl: "ESC detecteert tractieverlies en remt automatisch individuele wielen voor voertuigcontrole."
            }
        },
        {
            question: {
                en: "What is parking distance control?",
                es: "¿Qué es control de distancia de estacionamiento?",
                de: "Was ist Einparkhilfe?",
                nl: "Wat is parkeerafstand controle?"
            },
            options: [
                { en: "Ultrasonic proximity sensors", es: "Sensores ultrasónicos de proximidad", de: "Ultraschall-Näherungssensoren", nl: "Ultrasone nabijheidssensoren" },
                { en: "Visual estimation only", es: "Solo estimación visual", de: "Nur visuelle Schätzung", nl: "Alleen visuele schatting" },
                { en: "Manual measurement", es: "Medición manual", de: "Manuelle Messung", nl: "Handmatige meting" },
                { en: "Fixed parking spaces", es: "Espacios de estacionamiento fijos", de: "Feste Parkplätze", nl: "Vaste parkeerplekken" }
            ],
            correct: 0,
            explanation: {
                en: "PDC uses ultrasonic sensors to measure distance to obstacles and provides audio/visual warnings when parking.",
                es: "PDC usa sensores ultrasónicos para medir distancia a obstáculos y proporciona advertencias al estacionar.",
                de: "PDC nutzt Ultraschallsensoren zur Abstandsmessung und gibt akustische/visuelle Warnungen beim Parken.",
                nl: "PDC gebruikt ultrasone sensoren om afstand tot obstakels te meten en geeft waarschuwingen bij parkeren."
            }
        },
        {
            question: {
                en: "How do surround view cameras work?",
                es: "¿Cómo funcionan cámaras de vista envolvente?",
                de: "Wie funktionieren Rundumsichtkameras?",
                nl: "Hoe werken surround view camera's?"
            },
            options: [
                { en: "Multiple cameras create bird's-eye view", es: "Múltiples cámaras crean vista aérea", de: "Mehrere Kameras erzeugen Vogelperspektive", nl: "Meerdere camera's creëren vogelperspectief" },
                { en: "Single rear camera", es: "Cámara trasera única", de: "Einzelne Rückkamera", nl: "Enkele achteruitrijcamera" },
                { en: "Mirror system only", es: "Solo sistema de espejos", de: "Nur Spiegelsystem", nl: "Alleen spiegelsysteem" },
                { en: "Front view only", es: "Solo vista frontal", de: "Nur Frontansicht", nl: "Alleen vooraanzicht" }
            ],
            correct: 0,
            explanation: {
                en: "Multiple cameras around the vehicle combine images to create a 360-degree bird's-eye view for easier parking.",
                es: "Múltiples cámaras alrededor del vehículo combinan imágenes para crear vista de 360 grados para estacionamiento.",
                de: "Mehrere Kameras um das Fahrzeug kombinieren Bilder für 360-Grad-Vogelperspektive zum Parken.",
                nl: "Meerdere camera's rondom het voertuig combineren beelden voor 360-graden vogelperspectief voor parkeren."
            }
        },
        {
            question: {
                en: "What is regenerative braking in EVs?",
                es: "¿Qué es frenado regenerativo en VE?",
                de: "Was ist regeneratives Bremsen bei EVs?",
                nl: "Wat is regeneratief remmen in EV's?"
            },
            options: [
                { en: "Energy recovery during braking", es: "Recuperación de energía al frenar", de: "Energierückgewinnung beim Bremsen", nl: "Energie terugwinning bij remmen" },
                { en: "Traditional friction brakes", es: "Frenos de fricción tradicionales", de: "Traditionelle Reibungsbremsen", nl: "Traditionele wrijvingsremmen" },
                { en: "Emergency braking only", es: "Solo frenado de emergencia", de: "Nur Notbremsung", nl: "Alleen noodremmen" },
                { en: "Power consumption", es: "Consumo de energía", de: "Stromverbrauch", nl: "Stroomverbruik" }
            ],
            correct: 0,
            explanation: {
                en: "Regenerative braking converts kinetic energy back into battery charge when slowing down, improving efficiency.",
                es: "El frenado regenerativo convierte energía cinética en carga de batería al desacelerar, mejorando eficiencia.",
                de: "Regeneratives Bremsen wandelt kinetische Energie beim Abbremsen in Batterieladung um für mehr Effizienz.",
                nl: "Regeneratief remmen zet kinetische energie om in accustroom bij vertragen voor betere efficiëntie."
            }
        },
        {
            question: {
                en: "How does 5G enhance transport AI?",
                es: "¿Cómo mejora 5G la IA de transporte?",
                de: "Wie verbessert 5G Transport-KI?",
                nl: "Hoe verbetert 5G transport AI?"
            },
            options: [
                { en: "Ultra-low latency communication", es: "Comunicación de latencia ultra baja", de: "Ultra-niedrige Latenz-Kommunikation", nl: "Ultra-lage latentie communicatie" },
                { en: "Slower data speeds", es: "Velocidades de datos más lentas", de: "Langsamere Datengeschwindigkeiten", nl: "Langzamere datasnelheden" },
                { en: "Limited connectivity", es: "Conectividad limitada", de: "Begrenzte Konnektivität", nl: "Beperkte connectiviteit" },
                { en: "Voice calls only", es: "Solo llamadas de voz", de: "Nur Sprachanrufe", nl: "Alleen spraakoproepen" }
            ],
            correct: 0,
            explanation: {
                en: "5G provides ultra-low latency and high bandwidth for real-time vehicle communication and edge computing applications.",
                es: "5G proporciona latencia ultra baja y alto ancho de banda para comunicación vehicular en tiempo real.",
                de: "5G bietet ultra-niedrige Latenz und hohe Bandbreite für Echtzeit-Fahrzeugkommunikation und Edge Computing.",
                nl: "5G biedt ultra-lage latentie en hoge bandbreedte voor real-time voertuigcommunicatie en edge computing."
            }
        },
        {
            question: {
                en: "What is urban air mobility?",
                es: "¿Qué es movilidad aérea urbana?",
                de: "Was ist urbane Luftmobilität?",
                nl: "Wat is stedelijke luchtmobiliteit?"
            },
            options: [
                { en: "Flying vehicles for city transport", es: "Vehículos voladores para transporte urbano", de: "Flugfahrzeuge für Stadtverkehr", nl: "Vliegende voertuigen voor stadsvervoer" },
                { en: "Ground transport only", es: "Solo transporte terrestre", de: "Nur Bodentransport", nl: "Alleen grondtransport" },
                { en: "Traditional aviation", es: "Aviación tradicional", de: "Traditionelle Luftfahrt", nl: "Traditionele luchtvaart" },
                { en: "Underground tunnels", es: "Túneles subterráneos", de: "Unterirdische Tunnel", nl: "Ondergrondse tunnels" }
            ],
            correct: 0,
            explanation: {
                en: "UAM involves electric vertical takeoff aircraft for passenger transport within cities to reduce ground congestion.",
                es: "UAM involucra aeronaves eléctricas de despegue vertical para transporte de pasajeros en ciudades.",
                de: "UAM umfasst elektrische Senkrechtstart-Flugzeuge für Passagiertransport in Städten zur Staureduzierung.",
                nl: "UAM betreft elektrische verticaal opstijgende vliegtuigen voor passagiersvervoer in steden."
            }
        },
        {
            question: {
                en: "How does hyperloop transport work?",
                es: "¿Cómo funciona transporte hyperloop?",
                de: "Wie funktioniert Hyperloop-Transport?",
                nl: "Hoe werkt hyperloop transport?"
            },
            options: [
                { en: "Pods in low-pressure tubes", es: "Cápsulas en tubos de baja presión", de: "Kapseln in Niederdruck-Röhren", nl: "Pods in lagedruk buizen" },
                { en: "Traditional rail system", es: "Sistema ferroviario tradicional", de: "Traditionelles Schienensystem", nl: "Traditioneel spoorwegsysteem" },
                { en: "Highway transport", es: "Transporte por carretera", de: "Straßentransport", nl: "Snelwegtransport" },
                { en: "Air travel only", es: "Solo viaje aéreo", de: "Nur Flugreisen", nl: "Alleen luchtreizen" }
            ],
            correct: 0,
            explanation: {
                en: "Hyperloop uses magnetic levitation pods traveling through low-pressure tubes at very high speeds for rapid transit.",
                es: "Hyperloop usa cápsulas de levitación magnética viajando por tubos de baja presión a velocidades muy altas.",
                de: "Hyperloop nutzt Magnetschwebe-Kapseln in Niederdruck-Röhren für sehr schnellen Transit.",
                nl: "Hyperloop gebruikt magnetisch zwevende pods in lagedruk buizen voor zeer snel transport."
            }
        },
        {
            question: {
                en: "What are smart highways?",
                es: "¿Qué son autopistas inteligentes?",
                de: "Was sind intelligente Autobahnen?",
                nl: "Wat zijn slimme snelwegen?"
            },
            options: [
                { en: "Interactive road infrastructure", es: "Infraestructura vial interactiva", de: "Interaktive Straßeninfrastruktur", nl: "Interactieve weginfrastructuur" },
                { en: "Traditional asphalt roads", es: "Carreteras de asfalto tradicionales", de: "Traditionelle Asphaltstraßen", nl: "Traditionele asfaltwegen" },
                { en: "Unpaved roads", es: "Caminos sin pavimentar", de: "Unbefestigte Straßen", nl: "Onverharde wegen" },
                { en: "Toll roads only", es: "Solo carreteras de peaje", de: "Nur Mautstraßen", nl: "Alleen tolwegen" }
            ],
            correct: 0,
            explanation: {
                en: "Smart highways use sensors, solar panels, and communication systems to interact with vehicles and manage traffic.",
                es: "Las autopistas inteligentes usan sensores, paneles solares y sistemas de comunicación para interactuar con vehículos.",
                de: "Intelligente Autobahnen nutzen Sensoren, Solarpanels und Kommunikationssysteme zur Fahrzeuginteraktion.",
                nl: "Slimme snelwegen gebruiken sensoren, zonnepanelen en communicatiesystemen voor interactie met voertuigen."
            }
        },
        {
            question: {
                en: "How do autonomous trains operate?",
                es: "¿Cómo operan trenes autónomos?",
                de: "Wie funktionieren autonome Züge?",
                nl: "Hoe werken autonome treinen?"
            },
            options: [
                { en: "Computer-controlled operation", es: "Operación controlada por computadora", de: "Computergesteuerte Bedienung", nl: "Computer-gestuurde operatie" },
                { en: "Manual driver required", es: "Conductor manual requerido", de: "Manueller Fahrer erforderlich", nl: "Handmatige machinist vereist" },
                { en: "Remote control only", es: "Solo control remoto", de: "Nur Fernsteuerung", nl: "Alleen afstandsbediening" },
                { en: "Fixed schedule only", es: "Solo horario fijo", de: "Nur fester Fahrplan", nl: "Alleen vaste dienstregeling" }
            ],
            correct: 0,
            explanation: {
                en: "Autonomous trains use AI and sensors for automatic operation including acceleration, braking, and door control.",
                es: "Los trenes autónomos usan IA y sensores para operación automática incluyendo aceleración, frenado y puertas.",
                de: "Autonome Züge nutzen KI und Sensoren für automatischen Betrieb mit Beschleunigung, Bremsen und Türen.",
                nl: "Autonome treinen gebruiken AI en sensoren voor automatische operatie inclusief acceleratie, remmen en deuren."
            }
        },
        {
            question: {
                en: "What is drone delivery AI?",
                es: "¿Qué es IA de entrega con drones?",
                de: "Was ist Drohnenlieferungs-KI?",
                nl: "Wat is drone levering AI?"
            },
            options: [
                { en: "Autonomous package delivery", es: "Entrega autónoma de paquetes", de: "Autonome Paketlieferung", nl: "Autonome pakketlevering" },
                { en: "Manual piloting only", es: "Solo pilotaje manual", de: "Nur manuelles Steuern", nl: "Alleen handmatige besturing" },
                { en: "Ground delivery only", es: "Solo entrega terrestre", de: "Nur Bodenlieferung", nl: "Alleen grondlevering" },
                { en: "Surveillance purposes", es: "Propósitos de vigilancia", de: "Überwachungszwecke", nl: "Surveillance doeleinden" }
            ],
            correct: 0,
            explanation: {
                en: "Delivery drones use AI for navigation, obstacle avoidance, and landing at precise delivery locations autonomously.",
                es: "Los drones de entrega usan IA para navegación, evitar obstáculos y aterrizar en ubicaciones precisas autónomamente.",
                de: "Lieferdrohnen nutzen KI für Navigation, Hindernisvermeidung und präzise autonome Landung.",
                nl: "Leveringsdrones gebruiken AI voor navigatie, obstakel vermijding en precieze autonome landing."
            }
        },
        {
            question: {
                en: "How do maritime autonomous ships navigate?",
                es: "¿Cómo navegan barcos marítimos autónomos?",
                de: "Wie navigieren autonome Seeschiffe?",
                nl: "Hoe navigeren autonome zeeschepen?"
            },
            options: [
                { en: "AI-based navigation systems", es: "Sistemas de navegación basados en IA", de: "KI-basierte Navigationssysteme", nl: "AI-gebaseerde navigatiesystemen" },
                { en: "Human crew only", es: "Solo tripulación humana", de: "Nur menschliche Besatzung", nl: "Alleen menselijke bemanning" },
                { en: "Coast guard guidance", es: "Guía de guardacostas", de: "Küstenwache-Führung", nl: "Kustwacht begeleiding" },
                { en: "Fixed routes only", es: "Solo rutas fijas", de: "Nur feste Routen", nl: "Alleen vaste routes" }
            ],
            correct: 0,
            explanation: {
                en: "Autonomous ships use AI combining radar, cameras, and sensors for navigation, collision avoidance, and route optimization.",
                es: "Los barcos autónomos usan IA combinando radar, cámaras y sensores para navegación y evitar colisiones.",
                de: "Autonome Schiffe nutzen KI mit Radar, Kameras und Sensoren für Navigation und Kollisionsvermeidung.",
                nl: "Autonome schepen gebruiken AI met radar, camera's en sensoren voor navigatie en botsingsvermijding."
            }
        }
    ]
};