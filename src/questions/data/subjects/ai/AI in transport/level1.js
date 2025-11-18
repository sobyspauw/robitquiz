// AI in Transport Quiz - Level 1: Basic Transportation AI
(function() {
  const level1 = {
    name: {
      en: "AI in Transport Level 1",
      es: "IA en Transporte Nivel 1",
      de: "KI im Transport Stufe 1",
      nl: "AI in Transport Level 1"
    },
    questions: [
      {
        question: {
          en: "What is the main benefit of AI in self-driving cars?",
          es: "Â¿CuÃ¡l es el principal beneficio de la IA en los coches autÃ³nomos?",
          de: "Was ist der Hauptvorteil von KI in selbstfahrenden Autos?",
          nl: "Wat is het hoofdvoordeel van AI in zelfrijdende auto's?"
        },
        options: [
          { en: "Increased safety", es: "Mayor seguridad", de: "ErhÃ¶hte Sicherheit", nl: "Verhoogde veiligheid" },
          { en: "Lower fuel costs", es: "Menores costos de combustible", de: "Niedrigere Kraftstoffkosten", nl: "Lagere brandstofkosten" },
          { en: "Better radio reception", es: "Mejor recepciÃ³n de radio", de: "Besserer Radioempfang", nl: "Betere radio-ontvangst" },
          { en: "Louder horns", es: "Bocinas mÃ¡s fuertes", de: "Lautere Hupen", nl: "Hardere claxons" }
        ],
        correct: 0,
        explanation: {
          en: "AI systems can process information faster than humans and don't get tired or distracted, making roads safer.",
          es: "Los sistemas de IA pueden procesar informaciÃ³n mÃ¡s rÃ¡pido que los humanos y no se cansan ni se distraen, haciendo las carreteras mÃ¡s seguras.",
          de: "KI-Systeme kÃ¶nnen Informationen schneller verarbeiten als Menschen und werden nicht mÃ¼de oder abgelenkt, wodurch die StraÃŸen sicherer werden.",
          nl: "AI-systemen kunnen informatie sneller verwerken dan mensen en worden niet moe of afgeleid, waardoor wegen veiliger worden."
        }
      },
      {
        question: {
          en: "Which technology helps AI cars 'see' their surroundings?",
          es: "Â¿QuÃ© tecnologÃ­a ayuda a los coches con IA a 'ver' su entorno?",
          de: "Welche Technologie hilft KI-Autos dabei, ihre Umgebung zu 'sehen'?",
          nl: "Welke technologie helpt AI-auto's hun omgeving te 'zien'?"
        },
        options: [
          { en: "Cameras and sensors", es: "CÃ¡maras y sensores", de: "Kameras und Sensoren", nl: "Camera's en sensoren" },
          { en: "Radio antennas", es: "Antenas de radio", de: "Radioantennen", nl: "Radio-antennes" },
          { en: "Loud speakers", es: "Altavoces", de: "Lautsprecher", nl: "Luidsprekers" },
          { en: "Air conditioning", es: "Aire acondicionado", de: "Klimaanlage", nl: "Airconditioning" }
        ],
        correct: 0,
        explanation: {
          en: "AI vehicles use cameras, radar, and lidar sensors to detect objects, lanes, and other vehicles around them.",
          es: "Los vehÃ­culos con IA usan cÃ¡maras, radar y sensores lidar para detectar objetos, carriles y otros vehÃ­culos a su alrededor.",
          de: "KI-Fahrzeuge verwenden Kameras, Radar und Lidar-Sensoren, um Objekte, Fahrspuren und andere Fahrzeuge zu erkennen.",
          nl: "AI-voertuigen gebruiken camera's, radar en lidar-sensoren om objecten, rijstroken en andere voertuigen te detecteren."
        }
      },
      {
        question: {
          en: "What is a common AI application in public transportation?",
          es: "Â¿CuÃ¡l es una aplicaciÃ³n comÃºn de IA en el transporte pÃºblico?",
          de: "Was ist eine hÃ¤ufige KI-Anwendung im Ã¶ffentlichen Verkehr?",
          nl: "Wat is een veelvoorkomende AI-toepassing in het openbaar vervoer?"
        },
        options: [
          { en: "Route optimization", es: "OptimizaciÃ³n de rutas", de: "Routenoptimierung", nl: "Route-optimalisatie" },
          { en: "Ticket printing", es: "ImpresiÃ³n de boletos", de: "Ticketdruck", nl: "Ticket printen" },
          { en: "Seat heating", es: "CalefacciÃ³n de asientos", de: "Sitzheizung", nl: "Stoelverwarming" },
          { en: "Window cleaning", es: "Limpieza de ventanas", de: "Fensterreinigung", nl: "Ramen wassen" }
        ],
        correct: 0,
        explanation: {
          en: "AI analyzes traffic patterns and passenger demand to create the most efficient bus and train routes.",
          es: "La IA analiza patrones de trÃ¡fico y demanda de pasajeros para crear las rutas de autobÃºs y tren mÃ¡s eficientes.",
          de: "KI analysiert Verkehrsmuster und Fahrgastnachfrage, um die effizientesten Bus- und Zugstrecken zu erstellen.",
          nl: "AI analyseert verkeerspatronen en passagiersvraag om de meest efficiÃ«nte bus- en treinroutes te creÃ«ren."
        }
      },
      {
        question: {
          en: "What does GPS stand for in navigation systems?",
          es: "Â¿QuÃ© significa GPS en los sistemas de navegaciÃ³n?",
          de: "WofÃ¼r steht GPS in Navigationssystemen?",
          nl: "Waar staat GPS voor in navigatiesystemen?"
        },
        options: [
          { en: "Global Positioning System", es: "Sistema de Posicionamiento Global", de: "Globales Positionierungssystem", nl: "Global Positioning System" },
          { en: "Great Picture Service", es: "Gran Servicio de ImÃ¡genes", de: "GroÃŸartiger Bilddienst", nl: "Geweldige Foto Service" },
          { en: "Green Planet Solutions", es: "Soluciones Planeta Verde", de: "GrÃ¼ne Planet LÃ¶sungen", nl: "Groene Planeet Oplossingen" },
          { en: "Good Parking Spots", es: "Buenos Lugares de Estacionamiento", de: "Gute ParkplÃ¤tze", nl: "Goede Parkeerplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "GPS uses satellites to determine exact location and helps AI navigation systems guide vehicles efficiently.",
          es: "El GPS usa satÃ©lites para determinar la ubicaciÃ³n exacta y ayuda a los sistemas de navegaciÃ³n con IA a guiar vehÃ­culos eficientemente.",
          de: "GPS nutzt Satelliten zur genauen Standortbestimmung und hilft KI-Navigationssystemen bei der effizienten FahrzeugfÃ¼hrung.",
          nl: "GPS gebruikt satellieten om de exacte locatie te bepalen en helpt AI-navigatiesystemen voertuigen efficiÃ«nt te begeleiden."
        }
      },
      {
        question: {
          en: "Which is NOT a benefit of AI in traffic management?",
          es: "Â¿CuÃ¡l NO es un beneficio de la IA en la gestiÃ³n del trÃ¡fico?",
          de: "Was ist KEIN Vorteil von KI im Verkehrsmanagement?",
          nl: "Wat is GEEN voordeel van AI in verkeersmanagement?"
        },
        options: [
          { en: "Making cars fly", es: "Hacer volar los coches", de: "Autos zum Fliegen bringen", nl: "Auto's laten vliegen" },
          { en: "Reducing traffic jams", es: "Reducir atascos de trÃ¡fico", de: "Verkehrsstaus reduzieren", nl: "Verminderen van verkeersstoppingen" },
          { en: "Optimizing traffic lights", es: "Optimizar semÃ¡foros", de: "Ampeln optimieren", nl: "Verkeerslichten optimaliseren" },
          { en: "Predicting busy routes", es: "Predecir rutas ocupadas", de: "Verkehrsreiche Routen vorhersagen", nl: "Drukke routes voorspellen" }
        ],
        correct: 0,
        explanation: {
          en: "AI helps with ground transportation efficiency but cannot make regular cars fly through the air.",
          es: "La IA ayuda con la eficiencia del transporte terrestre pero no puede hacer que los coches normales vuelen por el aire.",
          de: "KI hilft bei der Effizienz des Bodentransports, kann aber normale Autos nicht durch die Luft fliegen lassen.",
          nl: "AI helpt met de efficiÃ«ntie van grondtransport maar kan gewone auto's niet door de lucht laten vliegen."
        }
      },
      {
        question: {
          en: "What type of sensors do autonomous vehicles use to detect obstacles?",
          es: "¿Qué tipo de sensores usan los vehículos autónomos para detectar obstáculos?",
          de: "Welche Art von Sensoren verwenden autonome Fahrzeuge zur Hinderniserkennung?",
          nl: "Welk type sensoren gebruiken autonome voertuigen om obstakels te detecteren?"
        },
        options: [
          { en: "LiDAR, cameras, and radar", es: "LiDAR, cámaras y radar", de: "LiDAR, Kameras und Radar", nl: "LiDAR, camera's en radar" },
          { en: "Only radio antennas", es: "Solo antenas de radio", de: "Nur Radioantennen", nl: "Alleen radio-antennes" },
          { en: "Temperature sensors only", es: "Solo sensores de temperatura", de: "Nur Temperatursensoren", nl: "Alleen temperatuursensoren" },
          { en: "Sound detectors only", es: "Solo detectores de sonido", de: "Nur Schalldetektoren", nl: "Alleen geluidsdetectoren" }
        ],
        correct: 0,
        explanation: {
          en: "Autonomous vehicles combine multiple sensor types: LiDAR for 3D mapping, cameras for visual recognition, and radar for distance measurement.",
          es: "Los vehículos autónomos combinan múltiples tipos de sensores: LiDAR para mapeo 3D, cámaras para reconocimiento visual y radar para medición de distancia.",
          de: "Autonome Fahrzeuge kombinieren mehrere Sensortypen: LiDAR für 3D-Kartierung, Kameras für visuelle Erkennung und Radar für Entfernungsmessung.",
          nl: "Autonome voertuigen combineren meerdere sensortypes: LiDAR voor 3D-mapping, camera's voor visuele herkenning en radar voor afstandsmeting."
        }
      },
      {
        question: {
          en: "What is 'vehicle-to-vehicle' (V2V) communication?",
          es: "¿Qué es la comunicación 'vehículo a vehículo' (V2V)?",
          de: "Was ist 'Fahrzeug-zu-Fahrzeug' (V2V) Kommunikation?",
          nl: "Wat is 'vehicle-to-vehicle' (V2V) communicatie?"
        },
        options: [
          { en: "Cars sharing information with each other wirelessly", es: "Autos compartiendo información entre sí de forma inalámbrica", de: "Autos teilen drahtlos Informationen miteinander", nl: "Auto's die draadloos informatie met elkaar delen" },
          { en: "Vehicle repair services", es: "Servicios de reparación de vehículos", de: "Fahrzeugreparaturdienste", nl: "Voertuigreparatiediensten" },
          { en: "Car racing competitions", es: "Competencias de carreras de autos", de: "Autorennen-Wettbewerbe", nl: "Autorace competities" },
          { en: "Vehicle manufacturing process", es: "Proceso de fabricación de vehículos", de: "Fahrzeugherstellungsprozess", nl: "Voertuigproductieproces" }
        ],
        correct: 0,
        explanation: {
          en: "V2V allows vehicles to exchange real-time information about speed, location, and road conditions to improve safety and traffic flow.",
          es: "V2V permite a los vehículos intercambiar información en tiempo real sobre velocidad, ubicación y condiciones de la carretera para mejorar la seguridad y el flujo de tráfico.",
          de: "V2V ermöglicht Fahrzeugen den Austausch von Echtzeitinformationen über Geschwindigkeit, Standort und Straßenbedingungen zur Verbesserung der Sicherheit und des Verkehrsflusses.",
          nl: "V2V stelt voertuigen in staat om real-time informatie uit te wisselen over snelheid, locatie en wegomstandigheden om veiligheid en verkeersstroom te verbeteren."
        }
      },
      {
        question: {
          en: "What level of automation allows a car to drive itself in specific conditions?",
          es: "¿Qué nivel de automatización permite que un auto se conduzca solo en condiciones específicas?",
          de: "Welche Automatisierungsstufe ermöglicht es einem Auto, unter bestimmten Bedingungen selbst zu fahren?",
          nl: "Welk automatiseringsniveau stelt een auto in staat om zichzelf te besturen onder specifieke omstandigheden?"
        },
        options: [
          { en: "Level 3 - Conditional Automation", es: "Nivel 3 - Automatización Condicional", de: "Stufe 3 - Bedingte Automatisierung", nl: "Level 3 - Voorwaardelijke Automatisering" },
          { en: "Level 0 - No Automation", es: "Nivel 0 - Sin Automatización", de: "Stufe 0 - Keine Automatisierung", nl: "Level 0 - Geen Automatisering" },
          { en: "Level 1 - Driver Assistance", es: "Nivel 1 - Asistencia al Conductor", de: "Stufe 1 - Fahrerassistenz", nl: "Level 1 - Bestuurdersbijstand" },
          { en: "Level 2 - Partial Automation", es: "Nivel 2 - Automatización Parcial", de: "Stufe 2 - Teilautomatisierung", nl: "Level 2 - Gedeeltelijke Automatisering" }
        ],
        correct: 0,
        explanation: {
          en: "Level 3 automation allows the vehicle to handle all driving tasks in specific scenarios, but the driver must be ready to take control when requested.",
          es: "La automatización de Nivel 3 permite al vehículo manejar todas las tareas de conducción en escenarios específicos, pero el conductor debe estar listo para tomar control cuando se solicite.",
          de: "Stufe 3 Automatisierung ermöglicht dem Fahrzeug alle Fahraufgaben in spezifischen Szenarien zu bewältigen, aber der Fahrer muss bereit sein die Kontrolle zu übernehmen wenn angefordert.",
          nl: "Level 3 automatisering stelt het voertuig in staat om alle rijtaken in specifieke scenario's uit te voeren, maar de bestuurder moet klaar zijn om de controle over te nemen wanneer daarom wordt gevraagd."
        }
      },
      {
        question: {
          en: "What is 'platooning' in autonomous transport?",
          es: "¿Qué es 'platooning' en transporte autónomo?",
          de: "Was ist 'Platooning' im autonomen Transport?",
          nl: "Wat is 'platooning' in autonoom transport?"
        },
        options: [
          { en: "Multiple vehicles following each other closely in formation", es: "Múltiples vehículos siguiéndose de cerca en formación", de: "Mehrere Fahrzeuge folgen sich eng in Formation", nl: "Meerdere voertuigen die elkaar op korte afstand in formatie volgen" },
          { en: "Single vehicle operation", es: "Operación de vehículo único", de: "Einzelfahrzeugbetrieb", nl: "Enkele voertuigoperatie" },
          { en: "Vehicle parking system", es: "Sistema de estacionamiento de vehículos", de: "Fahrzeugparksystem", nl: "Voertuigparkeersysteem" },
          { en: "Traffic light control", es: "Control de semáforos", de: "Ampelsteuerung", nl: "Verkeerslichtregeling" }
        ],
        correct: 0,
        explanation: {
          en: "Platooning allows trucks or cars to travel in closely-spaced convoys, reducing air resistance and fuel consumption while maintaining safety through AI coordination.",
          es: "El platooning permite a camiones o autos viajar en convoyes de espaciado cerrado, reduciendo resistencia al aire y consumo de combustible mientras mantiene seguridad através coordinación IA.",
          de: "Platooning ermöglicht Lastwagen oder Autos in eng beieinander liegenden Konvois zu fahren, reduziert Luftwiderstand und Kraftstoffverbrauch bei Aufrechterhaltung der Sicherheit durch KI-Koordination.",
          nl: "Platooning stelt vrachtwagens of auto's in staat om in dichtbij elkaar rijdende konvooien te reizen, waardoor luchtweerstand en brandstofverbruik worden verminderd terwijl veiligheid wordt gehandhaafd door AI-coördinatie."
        }
      },
      {
        question: {
          en: "What does an AI-powered traffic light system help achieve?",
          es: "¿Qué ayuda a lograr un sistema de semáforos con IA?",
          de: "Was hilft ein KI-gesteuertes Ampelsystem zu erreichen?",
          nl: "Wat helpt een AI-aangedreven verkeerslicht systeem te bereiken?"
        },
        options: [
          { en: "Reduce waiting time at intersections", es: "Reducir tiempo de espera en intersecciones", de: "Wartezeit an Kreuzungen reduzieren", nl: "Wachttijd bij kruispunten verminderen" },
          { en: "Make lights brighter", es: "Hacer luces más brillantes", de: "Lichter heller machen", nl: "Lichten helderder maken" },
          { en: "Change light colors", es: "Cambiar colores de luz", de: "Lichtfarben ändern", nl: "Lichtkleuren veranderen" },
          { en: "Make lights flash faster", es: "Hacer luces parpadear más rápido", de: "Lichter schneller blinken lassen", nl: "Lichten sneller laten knipperen" }
        ],
        correct: 0,
        explanation: {
          en: "AI traffic lights analyze real-time traffic flow and adjust timing to minimize congestion and reduce wait times for drivers.",
          es: "Los semáforos con IA analizan el flujo de tráfico en tiempo real y ajustan el tiempo para minimizar la congestión y reducir tiempos de espera para conductores.",
          de: "KI-Ampeln analysieren den Echtzeitverkehrsfluss und passen die Zeiten an, um Staus zu minimieren und Wartezeiten für Fahrer zu reduzieren.",
          nl: "AI-verkeerslichten analyseren real-time verkeersstroom en passen timing aan om opstoppingen te minimaliseren en wachttijden voor bestuurders te verminderen."
        }
      },
      {
        question: {
          en: "What is a basic function of AI in modern navigation apps?",
          es: "¿Cuál es una función básica de la IA en aplicaciones de navegación modernas?",
          de: "Was ist eine Grundfunktion von KI in modernen Navigations-Apps?",
          nl: "Wat is een basisfunctie van AI in moderne navigatie-apps?"
        },
        options: [
          { en: "Find the fastest route based on traffic", es: "Encontrar la ruta más rápida basada en tráfico", de: "Schnellste Route basierend auf Verkehr finden", nl: "Snelste route vinden op basis van verkeer" },
          { en: "Play music while driving", es: "Reproducir música mientras se conduce", de: "Musik beim Fahren abspielen", nl: "Muziek afspelen tijdens het rijden" },
          { en: "Take photos of the journey", es: "Tomar fotos del viaje", de: "Fotos der Reise machen", nl: "Foto's maken van de reis" },
          { en: "Control the radio volume", es: "Controlar el volumen de la radio", de: "Radiolautstärke kontrollieren", nl: "Radio volume regelen" }
        ],
        correct: 0,
        explanation: {
          en: "AI navigation systems analyze traffic data, road conditions, and historical patterns to suggest optimal routes in real-time.",
          es: "Los sistemas de navegación con IA analizan datos de tráfico, condiciones de carretera y patrones históricos para sugerir rutas óptimas en tiempo real.",
          de: "KI-Navigationssysteme analysieren Verkehrsdaten, Straßenbedingungen und historische Muster, um optimale Routen in Echtzeit vorzuschlagen.",
          nl: "AI-navigatiesystemen analyseren verkeersdata, wegomstandigheden en historische patronen om optimale routes in real-time voor te stellen."
        }
      },
      {
        question: {
          en: "Which sensor helps autonomous cars detect objects in bad weather?",
          es: "¿Qué sensor ayuda a los coches autónomos a detectar objetos en mal clima?",
          de: "Welcher Sensor hilft autonomen Autos, Objekte bei schlechtem Wetter zu erkennen?",
          nl: "Welke sensor helpt autonome auto's objecten te detecteren bij slecht weer?"
        },
        options: [
          { en: "Radar", es: "Radar", de: "Radar", nl: "Radar" },
          { en: "Windshield wipers", es: "Limpiaparabrisas", de: "Scheibenwischer", nl: "Ruitenwissers" },
          { en: "Air fresheners", es: "Ambientadores", de: "Lufterfrischer", nl: "Luchtverfrisers" },
          { en: "Seat heaters", es: "Calentadores de asiento", de: "Sitzheizungen", nl: "Stoelverwarmers" }
        ],
        correct: 0,
        explanation: {
          en: "Radar waves can penetrate fog, rain, and snow better than cameras or lidar, making them essential for all-weather autonomous driving.",
          es: "Las ondas de radar pueden penetrar niebla, lluvia y nieve mejor que las cámaras o lidar, haciéndolas esenciales para conducción autónoma en cualquier clima.",
          de: "Radarwellen können Nebel, Regen und Schnee besser durchdringen als Kameras oder Lidar, was sie für autonomes Fahren bei jedem Wetter unerlässlich macht.",
          nl: "Radarwaves kunnen mist, regen en sneeuw beter doordringen dan camera's of lidar, waardoor ze essentieel zijn voor autonoom rijden bij elk weer."
        }
      },
      {
        question: {
          en: "What is the main purpose of AI in ride-sharing services?",
          es: "¿Cuál es el propósito principal de la IA en servicios de viajes compartidos?",
          de: "Was ist der Hauptzweck von KI in Mitfahrdiensten?",
          nl: "Wat is het hoofddoel van AI in ride-sharing diensten?"
        },
        options: [
          { en: "Match drivers with passengers efficiently", es: "Emparejar conductores con pasajeros eficientemente", de: "Fahrer effizient mit Fahrgästen zusammenbringen", nl: "Bestuurders efficiënt koppelen aan passagiers" },
          { en: "Choose car colors", es: "Elegir colores de coche", de: "Autofarben auswählen", nl: "Autokleuren kiezen" },
          { en: "Design car interiors", es: "Diseñar interiores de coche", de: "Auto-Innenräume gestalten", nl: "Auto-interieurs ontwerpen" },
          { en: "Plan car maintenance schedules", es: "Planificar horarios de mantenimiento de coches", de: "Autowartungspläne planen", nl: "Auto-onderhoudschema's plannen" }
        ],
        correct: 0,
        explanation: {
          en: "AI algorithms optimize driver-passenger matching based on location, demand, and traffic patterns to reduce waiting times and travel costs.",
          es: "Los algoritmos de IA optimizan la correspondencia conductor-pasajero basándose en ubicación, demanda y patrones de tráfico para reducir tiempos de espera y costos de viaje.",
          de: "KI-Algorithmen optimieren die Fahrer-Fahrgast-Zuordnung basierend auf Standort, Nachfrage und Verkehrsmustern, um Wartezeiten und Reisekosten zu reduzieren.",
          nl: "AI-algoritmes optimaliseren bestuurder-passagier matching op basis van locatie, vraag en verkeerspatronen om wachttijden en reiskosten te verminderen."
        }
      },
      {
        question: {
          en: "How do smart parking systems use AI?",
          es: "¿Cómo usan IA los sistemas de estacionamiento inteligente?",
          de: "Wie nutzen intelligente Parksysteme KI?",
          nl: "Hoe gebruiken slimme parkeersystemen AI?"
        },
        options: [
          { en: "Find available parking spaces automatically", es: "Encontrar espacios de estacionamiento disponibles automáticamente", de: "Verfügbare Parkplätze automatisch finden", nl: "Beschikbare parkeerplaatsen automatisch vinden" },
          { en: "Paint parking lines", es: "Pintar líneas de estacionamiento", de: "Parklinien malen", nl: "Parkeerlijnen schilderen" },
          { en: "Wash parked cars", es: "Lavar coches estacionados", de: "Geparkte Autos waschen", nl: "Geparkeerde auto's wassen" },
          { en: "Charge parking fees", es: "Cobrar tarifas de estacionamiento", de: "Parkgebühren erheben", nl: "Parkeerkosten rekenen" }
        ],
        correct: 0,
        explanation: {
          en: "AI-powered parking systems use sensors and cameras to detect empty spaces and guide drivers to available spots, reducing search time and traffic congestion.",
          es: "Los sistemas de estacionamiento con IA usan sensores y cámaras para detectar espacios vacíos y guiar conductores a lugares disponibles, reduciendo tiempo de búsqueda y congestión de tráfico.",
          de: "KI-gestützte Parksysteme nutzen Sensoren und Kameras, um leere Plätze zu erkennen und Fahrer zu verfügbaren Stellplätzen zu führen, wodurch Suchzeit und Verkehrsstau reduziert werden.",
          nl: "AI-aangedreven parkeersystemen gebruiken sensoren en camera's om lege plekken te detecteren en bestuurders naar beschikbare plaatsen te leiden, waardoor zoektijd en verkeersopstoppingen worden verminderd."
        }
      },
      {
        question: {
          en: "What does 'lane keeping assistance' help with in cars?",
          es: "¿Con qué ayuda la 'asistencia para mantenerse en el carril' en los coches?",
          de: "Wobei hilft 'Spurhalteassistent' in Autos?",
          nl: "Waarmee helpt 'rijstrook assistentie' in auto's?"
        },
        options: [
          { en: "Keeping the car centered in its driving lane", es: "Mantener el coche centrado en su carril de conducción", de: "Das Auto in der Fahrspur zentriert halten", nl: "De auto gecentreerd in zijn rijstrook houden" },
          { en: "Changing radio stations", es: "Cambiar estaciones de radio", de: "Radiosender wechseln", nl: "Radiozenders veranderen" },
          { en: "Adjusting seat position", es: "Ajustar posición del asiento", de: "Sitzposition einstellen", nl: "Stoelpositie aanpassen" },
          { en: "Controlling air conditioning", es: "Controlar aire acondicionado", de: "Klimaanlage kontrollieren", nl: "Airconditioning regelen" }
        ],
        correct: 0,
        explanation: {
          en: "Lane keeping assistance uses cameras to detect lane markings and automatically steers to keep the vehicle centered, preventing unintentional lane departures.",
          es: "La asistencia de mantenimiento de carril usa cámaras para detectar marcas de carril y dirige automáticamente para mantener el vehículo centrado, previniendo salidas no intencionales del carril.",
          de: "Spurhalteassistent nutzt Kameras zur Erkennung von Fahrbahnmarkierungen und lenkt automatisch, um das Fahrzeug zentriert zu halten und unbeabsichtigtes Verlassen der Spur zu verhindern.",
          nl: "Rijstrook assistentie gebruikt camera's om rijstrookmarkeringen te detecteren en stuurt automatisch om het voertuig gecentreerd te houden, waardoor onbedoeld verlaten van de rijstrook wordt voorkomen."
        }
      },
      {
        question: {
          en: "What is adaptive cruise control in vehicles?",
          es: "¿Qué es el control de crucero adaptativo en vehículos?",
          de: "Was ist adaptiver Tempomat in Fahrzeugen?",
          nl: "Wat is adaptieve cruise control in voertuigen?"
        },
        options: [
          { en: "Automatically adjusts speed to maintain safe distance from other cars", es: "Ajusta automáticamente la velocidad para mantener distancia segura de otros coches", de: "Passt Geschwindigkeit automatisch an um sicheren Abstand zu anderen Autos zu halten", nl: "Past snelheid automatisch aan om veilige afstand tot andere auto's te behouden" },
          { en: "Plays cruise ship music", es: "Reproduce música de crucero", de: "Spielt Kreuzfahrtmusik", nl: "Speelt cruise schip muziek" },
          { en: "Controls ship navigation", es: "Controla navegación de barco", de: "Kontrolliert Schiffsnavigation", nl: "Regelt scheepsnavigatie" },
          { en: "Adjusts seat comfort settings", es: "Ajusta configuraciones de comodidad del asiento", de: "Passt Sitzkomfort-Einstellungen an", nl: "Past stoelcomfort instellingen aan" }
        ],
        correct: 0,
        explanation: {
          en: "Adaptive cruise control uses sensors to monitor traffic ahead and automatically speeds up or slows down to maintain a safe following distance.",
          es: "El control de crucero adaptativo usa sensores para monitorear tráfico adelante y automáticamente acelera o desacelera para mantener una distancia de seguimiento segura.",
          de: "Adaptiver Tempomat nutzt Sensoren zur Überwachung des Verkehrs voraus und beschleunigt oder verlangsamt automatisch um sicheren Folgeabstand zu halten.",
          nl: "Adaptieve cruise control gebruikt sensoren om verkeer vooruit te monitoren en versnelt of vertraagt automatisch om een veilige volgafstand te behouden."
        }
      },
      {
        question: {
          en: "What do AI systems in public buses help optimize?",
          es: "¿Qué ayudan a optimizar los sistemas de IA en autobuses públicos?",
          de: "Was helfen KI-Systeme in öffentlichen Bussen zu optimieren?",
          nl: "Wat helpen AI-systemen in openbare bussen optimaliseren?"
        },
        options: [
          { en: "Bus schedules and routes based on passenger demand", es: "Horarios y rutas de autobús basados en demanda de pasajeros", de: "Busfahrpläne und Routen basierend auf Fahrgastnachfrage", nl: "Bus schema's en routes op basis van passagiersvraag" },
          { en: "Bus seat colors", es: "Colores de asientos de autobús", de: "Bussitzfarben", nl: "Bus stoelkleuren" },
          { en: "Driver uniform designs", es: "Diseños de uniformes de conductor", de: "Fahreruniform-Designs", nl: "Bestuurder uniform ontwerpen" },
          { en: "Bus exterior decorations", es: "Decoraciones exteriores de autobús", de: "Bus-Außendekorationen", nl: "Bus buitendecoraties" }
        ],
        correct: 0,
        explanation: {
          en: "AI analyzes passenger patterns, traffic conditions, and historical data to create efficient bus schedules and routes that better serve public transportation needs.",
          es: "La IA analiza patrones de pasajeros, condiciones de tráfico y datos históricos para crear horarios y rutas de autobús eficientes que mejor sirven necesidades de transporte público.",
          de: "KI analysiert Fahrgastmuster, Verkehrsbedingungen und historische Daten, um effiziente Busfahrpläne und Routen zu erstellen, die öffentliche Verkehrsbedürfnisse besser erfüllen.",
          nl: "AI analyseert passagierspatronen, verkeersomstandigheden en historische data om efficiënte busschema's en routes te creëren die openbaar vervoer behoeften beter dienen."
        }
      },
      {
        question: {
          en: "What is emergency braking assistance in vehicles?",
          es: "¿Qué es la asistencia de frenado de emergencia en vehículos?",
          de: "Was ist Notbremsassistent in Fahrzeugen?",
          nl: "Wat is noodremassistentie in voertuigen?"
        },
        options: [
          { en: "AI system that applies brakes automatically to prevent collisions", es: "Sistema IA que aplica frenos automáticamente para prevenir colisiones", de: "KI-System das Bremsen automatisch anwendet um Kollisionen zu verhindern", nl: "AI-systeem dat automatisch remt om botsingen te voorkomen" },
          { en: "Special brake pads for emergencies", es: "Pastillas de freno especiales para emergencias", de: "Spezielle Bremsbeläge für Notfälle", nl: "Speciale remblokken voor noodgevallen" },
          { en: "Emergency contact calling system", es: "Sistema de llamada de contacto de emergencia", de: "Notfallkontakt-Anrufsystem", nl: "Noodcontact belsysteem" },
          { en: "Brake fluid monitoring", es: "Monitoreo de líquido de frenos", de: "Bremsflüssigkeits-Überwachung", nl: "Remvloeistof monitoring" }
        ],
        correct: 0,
        explanation: {
          en: "Emergency braking systems use sensors to detect imminent collisions and automatically apply maximum braking force to prevent or reduce impact severity.",
          es: "Los sistemas de frenado de emergencia usan sensores para detectar colisiones inminentes y aplican automáticamente fuerza máxima de frenado para prevenir o reducir severidad de impacto.",
          de: "Notbremssysteme nutzen Sensoren zur Erkennung drohender Kollisionen und wenden automatisch maximale Bremskraft an, um Aufprall zu verhindern oder dessen Schwere zu reduzieren.",
          nl: "Noodremsystemen gebruiken sensoren om dreigende botsingen te detecteren en passen automatisch maximale remkracht toe om impact te voorkomen of de ernst te verminderen."
        }
      },
      {
        question: {
          en: "How does AI help with traffic flow in cities?",
          es: "¿Cómo ayuda la IA con el flujo de tráfico en ciudades?",
          de: "Wie hilft KI beim Verkehrsfluss in Städten?",
          nl: "Hoe helpt AI met verkeersstroom in steden?"
        },
        options: [
          { en: "By coordinating traffic lights to reduce congestion", es: "Coordinando semáforos para reducir congestión", de: "Durch Koordination von Ampeln zur Stauverringerung", nl: "Door verkeerslichten te coördineren om opstoppingen te verminderen" },
          { en: "By painting more road signs", es: "Pintando más señales de carretera", de: "Durch das Malen weiterer Straßenschilder", nl: "Door meer verkeersborden te schilderen" },
          { en: "By building more roads", es: "Construyendo más carreteras", de: "Durch den Bau weiterer Straßen", nl: "Door meer wegen te bouwen" },
          { en: "By increasing speed limits", es: "Aumentando límites de velocidad", de: "Durch Erhöhung der Geschwindigkeitsbegrenzungen", nl: "Door snelheidslimieten te verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "AI traffic management systems monitor real-time conditions and adjust traffic light timing across the city to optimize flow and minimize delays.",
          es: "Los sistemas de gestión de tráfico con IA monitorean condiciones en tiempo real y ajustan tiempo de semáforos a través de la ciudad para optimizar flujo y minimizar retrasos.",
          de: "KI-Verkehrsmanagementsysteme überwachen Echtzeitbedingungen und passen Ampelzeiten stadtweite an, um Fluss zu optimieren und Verzögerungen zu minimieren.",
          nl: "AI-verkeersmanagementsystemen monitoren real-time omstandigheden en passen verkeerslicht timing aan door de stad om stroom te optimaliseren en vertragingen te minimaliseren."
        }
      },
      {
        question: {
          en: "What is blind spot detection in vehicles?",
          es: "¿Qué es la detección de punto ciego en vehículos?",
          de: "Was ist Totwinkel-Erkennung in Fahrzeugen?",
          nl: "Wat is dodehoekdetectie in voertuigen?"
        },
        options: [
          { en: "AI system that warns drivers about vehicles in areas they cannot see", es: "Sistema IA que advierte conductores sobre vehículos en áreas que no pueden ver", de: "KI-System das Fahrer vor Fahrzeugen in nicht einsehbaren Bereichen warnt", nl: "AI-systeem dat bestuurders waarschuwt voor voertuigen in gebieden die zij niet kunnen zien" },
          { en: "System for detecting eye problems", es: "Sistema para detectar problemas oculares", de: "System zur Erkennung von Augenproblemen", nl: "Systeem voor het detecteren van oogproblemen" },
          { en: "Window cleaning mechanism", es: "Mecanismo de limpieza de ventanas", de: "Fenster-Reinigungsmechanismus", nl: "Raam schoonmaakmechanisme" },
          { en: "Interior lighting system", es: "Sistema de iluminación interior", de: "Innenbeleuchtungssystem", nl: "Interieurverlichting systeem" }
        ],
        correct: 0,
        explanation: {
          en: "Blind spot detection uses radar or cameras to monitor areas beside and behind the vehicle that mirrors don't cover, alerting drivers to hidden vehicles.",
          es: "La detección de punto ciego usa radar o cámaras para monitorear áreas al lado y detrás del vehículo que los espejos no cubren, alertando conductores de vehículos ocultos.",
          de: "Totwinkel-Erkennung nutzt Radar oder Kameras zur Überwachung von Bereichen neben und hinter dem Fahrzeug, die Spiegel nicht abdecken, und warnt Fahrer vor versteckten Fahrzeugen.",
          nl: "Dodehoekdetectie gebruikt radar of camera's om gebieden naast en achter het voertuig te monitoren die spiegels niet dekken, en waarschuwt bestuurders voor verborgen voertuigen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
