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
      },
      {
        question: {
          en: "What is the main advantage of electric vehicles with AI systems?",
          es: "¿Cuál es la ventaja principal de vehículos eléctricos con sistemas IA?",
          de: "Was ist der Hauptvorteil von Elektrofahrzeugen mit KI-Systemen?",
          nl: "Wat is het hoofdvoordeel van elektrische voertuigen met AI-systemen?"
        },
        options: [
          { en: "Optimized battery usage and charging schedules", es: "Uso optimizado de batería y horarios de carga", de: "Optimierte Batterienutzung und Ladepläne", nl: "Geoptimaliseerd batterijgebruik en laadschema's" },
          { en: "Louder engine sounds", es: "Sonidos de motor más fuertes", de: "Lautere Motorgeräusche", nl: "Hardere motorgeluiden" },
          { en: "More colorful exteriors", es: "Exteriores más coloridos", de: "Buntere Außenseiten", nl: "Kleurrijkere buitenkanten" },
          { en: "Larger fuel tanks", es: "Tanques de combustible más grandes", de: "Größere Kraftstofftanks", nl: "Grotere brandstoftanks" }
        ],
        correct: 0,
        explanation: {
          en: "AI in electric vehicles monitors driving patterns and battery status to maximize range and suggest optimal charging times based on electricity prices and usage needs.",
          es: "La IA en vehículos eléctricos monitorea patrones de conducción y estado de batería para maximizar alcance y sugerir tiempos óptimos de carga basados en precios de electricidad y necesidades de uso.",
          de: "KI in Elektrofahrzeugen überwacht Fahrmuster und Batteriestatus um Reichweite zu maximieren und optimale Ladezeiten basierend auf Strompreisen und Nutzungsbedarf vorzuschlagen.",
          nl: "AI in elektrische voertuigen monitort rijpatronen en batterijstatus om bereik te maximaliseren en optimale oplaadtijden voor te stellen op basis van elektriciteitsprijzen en gebruiksbehoeften."
        }
      },
      {
        question: {
          en: "What does collision avoidance system do in cars?",
          es: "¿Qué hace el sistema de evitación de colisiones en coches?",
          de: "Was macht ein Kollisionsvermeidungssystem in Autos?",
          nl: "Wat doet een botsingsvermijdingssysteem in auto's?"
        },
        options: [
          { en: "Detects potential crashes and warns or acts to prevent them", es: "Detecta choques potenciales y advierte o actúa para prevenirlos", de: "Erkennt potenzielle Unfälle und warnt oder handelt um sie zu verhindern", nl: "Detecteert potentiële crashes en waarschuwt of handelt om ze te voorkomen" },
          { en: "Repairs damaged bumpers", es: "Repara parachoques dañados", de: "Repariert beschädigte Stoßstangen", nl: "Repareert beschadigde bumpers" },
          { en: "Paints collision markings", es: "Pinta marcas de colisión", de: "Malt Kollisionsmarkierungen", nl: "Schildert botsingsmarkeringen" },
          { en: "Records accident statistics", es: "Registra estadísticas de accidentes", de: "Zeichnet Unfallstatistiken auf", nl: "Registreert ongevallenstatistieken" }
        ],
        correct: 0,
        explanation: {
          en: "Collision avoidance systems use sensors to monitor surroundings and can alert the driver or automatically brake and steer to prevent accidents.",
          es: "Los sistemas de evitación de colisiones usan sensores para monitorear alrededores y pueden alertar al conductor o frenar y dirigir automáticamente para prevenir accidentes.",
          de: "Kollisionsvermeidungssysteme nutzen Sensoren zur Umgebungsüberwachung und können den Fahrer warnen oder automatisch bremsen und lenken um Unfälle zu verhindern.",
          nl: "Botsingsvermijdingssystemen gebruiken sensoren om omgeving te monitoren en kunnen de bestuurder waarschuwen of automatisch remmen en sturen om ongevallen te voorkomen."
        }
      },
      {
        question: {
          en: "What is a benefit of AI in delivery trucks?",
          es: "¿Cuál es un beneficio de IA en camiones de reparto?",
          de: "Was ist ein Vorteil von KI in Lieferwagen?",
          nl: "Wat is een voordeel van AI in bezorgwagens?"
        },
        options: [
          { en: "Efficient route planning to save fuel and time", es: "Planificación eficiente de rutas para ahorrar combustible y tiempo", de: "Effiziente Routenplanung um Kraftstoff und Zeit zu sparen", nl: "Efficiënte routeplanning om brandstof en tijd te besparen" },
          { en: "Decorating truck exteriors", es: "Decorar exteriores de camión", de: "Lkw-Außenseiten dekorieren", nl: "Vrachtwagen buitenkanten decoreren" },
          { en: "Playing music for drivers", es: "Reproducir música para conductores", de: "Musik für Fahrer abspielen", nl: "Muziek afspelen voor bestuurders" },
          { en: "Choosing package colors", es: "Elegir colores de paquetes", de: "Paketfarben auswählen", nl: "Pakketkleuren kiezen" }
        ],
        correct: 0,
        explanation: {
          en: "AI helps delivery companies optimize routes based on traffic, delivery locations, and time windows, reducing costs and improving delivery speed.",
          es: "La IA ayuda a empresas de reparto a optimizar rutas basadas en tráfico, ubicaciones de entrega y ventanas de tiempo, reduciendo costos y mejorando velocidad de entrega.",
          de: "KI hilft Lieferunternehmen Routen basierend auf Verkehr, Lieferorten und Zeitfenstern zu optimieren, reduziert Kosten und verbessert Liefergeschwindigkeit.",
          nl: "AI helpt bezorgbedrijven routes te optimaliseren op basis van verkeer, bezorglocaties en tijdvensters, wat kosten vermindert en bezorgsnelheid verbetert."
        }
      },
      {
        question: {
          en: "What does parking assist technology help drivers do?",
          es: "¿Qué ayuda a hacer la tecnología de asistencia de estacionamiento a conductores?",
          de: "Was hilft Park-Assistenz-Technologie Fahrern zu tun?",
          nl: "Wat helpt parkeerassistentie technologie bestuurders te doen?"
        },
        options: [
          { en: "Park vehicles in tight spaces automatically", es: "Estacionar vehículos en espacios reducidos automáticamente", de: "Fahrzeuge automatisch in engen Räumen parken", nl: "Voertuigen automatisch in krappe ruimtes parkeren" },
          { en: "Pay parking fees", es: "Pagar tarifas de estacionamiento", de: "Parkgebühren bezahlen", nl: "Parkeerkosten betalen" },
          { en: "Find parking lot owners", es: "Encontrar propietarios de estacionamiento", de: "Parkplatzbesitzer finden", nl: "Parkeerplaats eigenaren vinden" },
          { en: "Design parking spaces", es: "Diseñar espacios de estacionamiento", de: "Parkplätze gestalten", nl: "Parkeerruimtes ontwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "Parking assist uses sensors and cameras to measure available space and automatically steers the vehicle into parking spots while the driver controls speed.",
          es: "La asistencia de estacionamiento usa sensores y cámaras para medir espacio disponible y dirige automáticamente el vehículo a lugares de estacionamiento mientras el conductor controla velocidad.",
          de: "Park-Assistenz nutzt Sensoren und Kameras zur Raummessung und lenkt das Fahrzeug automatisch in Parkplätze während der Fahrer die Geschwindigkeit kontrolliert.",
          nl: "Parkeerassistentie gebruikt sensoren en camera's om beschikbare ruimte te meten en stuurt het voertuig automatisch in parkeerplaatsen terwijl de bestuurder snelheid controleert."
        }
      },
      {
        question: {
          en: "How do traffic prediction systems work?",
          es: "¿Cómo funcionan los sistemas de predicción de tráfico?",
          de: "Wie funktionieren Verkehrsvorhersagesysteme?",
          nl: "Hoe werken verkeervoorspellingssystemen?"
        },
        options: [
          { en: "Analyze historical data and current conditions to forecast traffic", es: "Analizan datos históricos y condiciones actuales para pronosticar tráfico", de: "Analysieren historische Daten und aktuelle Bedingungen um Verkehr vorherzusagen", nl: "Analyseren historische data en huidige omstandigheden om verkeer te voorspellen" },
          { en: "Count parked cars", es: "Contar coches estacionados", de: "Geparkte Autos zählen", nl: "Geparkeerde auto's tellen" },
          { en: "Measure road temperature", es: "Medir temperatura de carretera", de: "Straßentemperatur messen", nl: "Wegtemperatuur meten" },
          { en: "Monitor street light brightness", es: "Monitorear brillo de farolas", de: "Straßenlichthelligkeit überwachen", nl: "Straatverlichting helderheid monitoren" }
        ],
        correct: 0,
        explanation: {
          en: "AI traffic prediction analyzes patterns from past traffic data, events, weather, and real-time conditions to forecast congestion and suggest alternative routes.",
          es: "La predicción de tráfico con IA analiza patrones de datos de tráfico pasados, eventos, clima y condiciones en tiempo real para pronosticar congestión y sugerir rutas alternativas.",
          de: "KI-Verkehrsvorhersage analysiert Muster aus vergangenen Verkehrsdaten, Ereignissen, Wetter und Echtzeitbedingungen um Staus vorherzusagen und alternative Routen vorzuschlagen.",
          nl: "AI-verkeervoorspelling analyseert patronen uit eerdere verkeersdata, evenementen, weer en real-time omstandigheden om opstoppingen te voorspellen en alternatieve routes voor te stellen."
        }
      },
      {
        question: {
          en: "What is pedestrian detection in vehicles?",
          es: "¿Qué es la detección de peatones en vehículos?",
          de: "Was ist Fußgängererkennung in Fahrzeugen?",
          nl: "Wat is voetgangersdetectie in voertuigen?"
        },
        options: [
          { en: "AI system that identifies people near the vehicle to prevent accidents", es: "Sistema IA que identifica personas cerca del vehículo para prevenir accidentes", de: "KI-System das Personen in Fahrzeugnähe erkennt um Unfälle zu verhindern", nl: "AI-systeem dat mensen bij het voertuig identificeert om ongevallen te voorkomen" },
          { en: "System for pedestrian traffic lights", es: "Sistema para semáforos peatonales", de: "System für Fußgängerampeln", nl: "Systeem voor voetgangerslichten" },
          { en: "Pedestrian counting database", es: "Base de datos de conteo de peatones", de: "Fußgängerzähl-Datenbank", nl: "Voetgangerstel database" },
          { en: "Sidewalk monitoring", es: "Monitoreo de aceras", de: "Gehwegüberwachung", nl: "Trottoir monitoring" }
        ],
        correct: 0,
        explanation: {
          en: "Pedestrian detection uses cameras and AI to recognize people crossing or near roads and can alert drivers or automatically brake to protect pedestrians.",
          es: "La detección de peatones usa cámaras e IA para reconocer personas cruzando o cerca de carreteras y puede alertar conductores o frenar automáticamente para proteger peatones.",
          de: "Fußgängererkennung nutzt Kameras und KI zur Erkennung von Personen die Straßen überqueren oder in deren Nähe sind und kann Fahrer warnen oder automatisch bremsen um Fußgänger zu schützen.",
          nl: "Voetgangersdetectie gebruikt camera's en AI om mensen te herkennen die wegen oversteken of erbij in de buurt zijn en kan bestuurders waarschuwen of automatisch remmen om voetgangers te beschermen."
        }
      },
      {
        question: {
          en: "What is the purpose of traffic cameras with AI?",
          es: "¿Cuál es el propósito de cámaras de tráfico con IA?",
          de: "Was ist der Zweck von Verkehrskameras mit KI?",
          nl: "Wat is het doel van verkeerscamera's met AI?"
        },
        options: [
          { en: "Monitor traffic flow and detect violations automatically", es: "Monitorear flujo de tráfico y detectar violaciones automáticamente", de: "Verkehrsfluss überwachen und Verstöße automatisch erkennen", nl: "Verkeersstroom monitoren en overtredingen automatisch detecteren" },
          { en: "Take tourist photos", es: "Tomar fotos turísticas", de: "Touristenfotos machen", nl: "Toeristenfoto's maken" },
          { en: "Film movies", es: "Filmar películas", de: "Filme drehen", nl: "Films opnemen" },
          { en: "Broadcast television shows", es: "Transmitir programas de televisión", de: "Fernsehsendungen ausstrahlen", nl: "Televisie programma's uitzenden" }
        ],
        correct: 0,
        explanation: {
          en: "AI-powered traffic cameras analyze vehicle movement, detect speeding, illegal parking, and traffic rule violations, while also monitoring overall traffic conditions.",
          es: "Las cámaras de tráfico con IA analizan movimiento de vehículos, detectan exceso de velocidad, estacionamiento ilegal y violaciones de reglas de tráfico, mientras también monitorean condiciones generales de tráfico.",
          de: "KI-gestützte Verkehrskameras analysieren Fahrzeugbewegungen, erkennen Geschwindigkeitsüberschreitungen, illegales Parken und Verkehrsregelverstöße, während sie auch allgemeine Verkehrsbedingungen überwachen.",
          nl: "AI-aangedreven verkeerscamera's analyseren voertuigbeweging, detecteren snelheidsovertredingen, illegaal parkeren en verkeersregel overtredingen, terwijl ze ook algemene verkeersomstandigheden monitoren."
        }
      },
      {
        question: {
          en: "How does AI help in train scheduling?",
          es: "¿Cómo ayuda la IA en programación de trenes?",
          de: "Wie hilft KI bei der Zugplanung?",
          nl: "Hoe helpt AI bij treinplanning?"
        },
        options: [
          { en: "Optimizes timetables based on passenger demand and delays", es: "Optimiza horarios basados en demanda de pasajeros y retrasos", de: "Optimiert Fahrpläne basierend auf Fahrgastnachfrage und Verspätungen", nl: "Optimaliseert dienstregelingen op basis van passagiersvraag en vertragingen" },
          { en: "Paints train colors", es: "Pinta colores de tren", de: "Malt Zugfarben", nl: "Schildert treinkleuren" },
          { en: "Designs train seats", es: "Diseña asientos de tren", de: "Gestaltet Zugsitze", nl: "Ontwerpt treinstoelen" },
          { en: "Cleans train windows", es: "Limpia ventanas de tren", de: "Reinigt Zugfenster", nl: "Maakt treinramen schoon" }
        ],
        correct: 0,
        explanation: {
          en: "AI analyzes passenger patterns, connection requirements, and potential delays to create efficient train schedules that minimize waiting times and maximize capacity utilization.",
          es: "La IA analiza patrones de pasajeros, requisitos de conexión y retrasos potenciales para crear horarios eficientes de tren que minimizan tiempos de espera y maximizan utilización de capacidad.",
          de: "KI analysiert Fahrgastmuster, Anschlussanforderungen und potenzielle Verspätungen um effiziente Zugfahrpläne zu erstellen die Wartezeiten minimieren und Kapazitätsauslastung maximieren.",
          nl: "AI analyseert passagierspatronen, overstapvereisten en potentiële vertragingen om efficiënte treinschema's te creëren die wachttijden minimaliseren en capaciteitsbenutting maximaliseren."
        }
      },
      {
        question: {
          en: "What does road sign recognition do in cars?",
          es: "¿Qué hace el reconocimiento de señales de carretera en coches?",
          de: "Was macht Verkehrszeichenerkennung in Autos?",
          nl: "Wat doet verkeersbordherkenning in auto's?"
        },
        options: [
          { en: "Identifies traffic signs and displays information to the driver", es: "Identifica señales de tráfico y muestra información al conductor", de: "Erkennt Verkehrsschilder und zeigt Informationen dem Fahrer", nl: "Identificeert verkeersborden en toont informatie aan de bestuurder" },
          { en: "Creates new traffic signs", es: "Crea nuevas señales de tráfico", de: "Erstellt neue Verkehrsschilder", nl: "Creëert nieuwe verkeersborden" },
          { en: "Paints road signs", es: "Pinta señales de carretera", de: "Malt Straßenschilder", nl: "Schildert verkeersborden" },
          { en: "Removes old signs", es: "Remueve señales viejas", de: "Entfernt alte Schilder", nl: "Verwijdert oude borden" }
        ],
        correct: 0,
        explanation: {
          en: "Road sign recognition cameras use AI to read speed limits, stop signs, and other traffic signs, displaying alerts or adjusting vehicle settings automatically.",
          es: "Las cámaras de reconocimiento de señales de carretera usan IA para leer límites de velocidad, señales de alto y otras señales de tráfico, mostrando alertas o ajustando configuraciones del vehículo automáticamente.",
          de: "Verkehrszeichenerkennungs-Kameras nutzen KI zum Lesen von Geschwindigkeitsbegrenzungen, Stoppschildern und anderen Verkehrsschildern, zeigen Warnungen oder passen Fahrzeugeinstellungen automatisch an.",
          nl: "Verkeersbordherkenning camera's gebruiken AI om snelheidslimieten, stopborden en andere verkeersborden te lezen, waarbij waarschuwingen worden getoond of voertuiginstellingen automatisch worden aangepast."
        }
      },
      {
        question: {
          en: "What is vehicle diagnostics with AI?",
          es: "¿Qué es diagnóstico de vehículo con IA?",
          de: "Was ist Fahrzeugdiagnose mit KI?",
          nl: "Wat is voertuigdiagnostiek met AI?"
        },
        options: [
          { en: "System that monitors vehicle health and predicts maintenance needs", es: "Sistema que monitorea salud del vehículo y predice necesidades de mantenimiento", de: "System das Fahrzeugzustand überwacht und Wartungsbedarf vorhersagt", nl: "Systeem dat voertuigconditie monitort en onderhoudsbehoeften voorspelt" },
          { en: "Diagnostic for driver health", es: "Diagnóstico para salud del conductor", de: "Diagnose für Fahrer-Gesundheit", nl: "Diagnose voor bestuurder gezondheid" },
          { en: "Vehicle color analysis", es: "Análisis de color de vehículo", de: "Fahrzeugfarb-Analyse", nl: "Voertuigkleur analyse" },
          { en: "Vehicle age estimation", es: "Estimación de edad de vehículo", de: "Fahrzeugalter-Schätzung", nl: "Voertuigleeftijd schatting" }
        ],
        correct: 0,
        explanation: {
          en: "AI-powered diagnostics monitor engine performance, tire pressure, brake wear, and other systems to detect problems early and schedule maintenance before breakdowns occur.",
          es: "Los diagnósticos con IA monitorean rendimiento del motor, presión de neumáticos, desgaste de frenos y otros sistemas para detectar problemas temprano y programar mantenimiento antes de que ocurran averías.",
          de: "KI-gestützte Diagnose überwacht Motorleistung, Reifendruck, Bremsverschleiß und andere Systeme um Probleme früh zu erkennen und Wartung vor Pannen zu planen.",
          nl: "AI-aangedreven diagnostiek monitort motorprestaties, bandenspanning, remslijtage en andere systemen om problemen vroeg te detecteren en onderhoud in te plannen voordat storingen optreden."
        }
      },
      {
        question: {
          en: "How do smart buses help public transportation?",
          es: "¿Cómo ayudan los autobuses inteligentes al transporte público?",
          de: "Wie helfen intelligente Busse dem öffentlichen Verkehr?",
          nl: "Hoe helpen slimme bussen het openbaar vervoer?"
        },
        options: [
          { en: "Adjust routes and schedules based on real-time passenger demand", es: "Ajustan rutas y horarios basados en demanda de pasajeros en tiempo real", de: "Passen Routen und Fahrpläne basierend auf Echtzeit-Fahrgastnachfrage an", nl: "Passen routes en schema's aan op basis van real-time passagiersvraag" },
          { en: "Only play announcements", es: "Solo reproducen anuncios", de: "Nur Ansagen abspielen", nl: "Alleen aankondigingen afspelen" },
          { en: "Paint bus exteriors", es: "Pintar exteriores de autobús", de: "Bus-Außenseiten malen", nl: "Bus buitenkanten schilderen" },
          { en: "Count bus stops", es: "Contar paradas de autobús", de: "Bushaltestellen zählen", nl: "Bushaltes tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Smart buses use AI to track passenger numbers, traffic conditions, and demand patterns to dynamically optimize routes and improve service efficiency.",
          es: "Los autobuses inteligentes usan IA para rastrear números de pasajeros, condiciones de tráfico y patrones de demanda para optimizar dinámicamente rutas y mejorar eficiencia del servicio.",
          de: "Intelligente Busse nutzen KI zur Verfolgung von Fahrgastzahlen, Verkehrsbedingungen und Nachfragemustern um Routen dynamisch zu optimieren und Serviceeffizienz zu verbessern.",
          nl: "Slimme bussen gebruiken AI om passagiersaantallen, verkeersomstandigheden en vraagpatronen te volgen om routes dynamisch te optimaliseren en service-efficiëntie te verbeteren."
        }
      },
      {
        question: {
          en: "What is automatic headlight control in vehicles?",
          es: "¿Qué es el control automático de faros en vehículos?",
          de: "Was ist automatische Scheinwerfersteuerung in Fahrzeugen?",
          nl: "Wat is automatische koplampregeling in voertuigen?"
        },
        options: [
          { en: "AI adjusts headlights based on ambient light and oncoming traffic", es: "IA ajusta faros basándose en luz ambiente y tráfico que se aproxima", de: "KI passt Scheinwerfer basierend auf Umgebungslicht und Gegenverkehr an", nl: "AI past koplampen aan op basis van omgevingslicht en tegemoetkomend verkeer" },
          { en: "Manual light switch", es: "Interruptor manual de luz", de: "Manueller Lichtschalter", nl: "Handmatige lichtschakelaar" },
          { en: "Headlight color changer", es: "Cambiador de color de faro", de: "Scheinwerferfarbwechsler", nl: "Koplamp kleurveranderaar" },
          { en: "Headlight cleaning system", es: "Sistema de limpieza de faros", de: "Scheinwerfer-Reinigungssystem", nl: "Koplamp reinigingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Automatic headlight systems use sensors and cameras to detect darkness and approaching vehicles, adjusting beam direction and intensity to improve visibility without blinding other drivers.",
          es: "Los sistemas automáticos de faros usan sensores y cámaras para detectar oscuridad y vehículos que se aproximan, ajustando dirección e intensidad del haz para mejorar visibilidad sin cegar otros conductores.",
          de: "Automatische Scheinwerfersysteme nutzen Sensoren und Kameras zur Erkennung von Dunkelheit und sich nähernden Fahrzeugen, passen Strahlrichtung und Intensität an um Sichtbarkeit zu verbessern ohne andere Fahrer zu blenden.",
          nl: "Automatische koplampsystemen gebruiken sensoren en camera's om duisternis en naderende voertuigen te detecteren, waarbij straalrichting en intensiteit worden aangepast om zichtbaarheid te verbeteren zonder andere bestuurders te verblinden."
        }
      },
      {
        question: {
          en: "What is driver drowsiness detection?",
          es: "¿Qué es la detección de somnolencia del conductor?",
          de: "Was ist Fahrer-Müdigkeitserkennung?",
          nl: "Wat is bestuurder slaperigheidsdetectie?"
        },
        options: [
          { en: "AI system that monitors driver alertness and warns when tired", es: "Sistema IA que monitorea alerta del conductor y advierte cuando está cansado", de: "KI-System das Fahrer-Wachsamkeit überwacht und bei Müdigkeit warnt", nl: "AI-systeem dat bestuurder alertheid monitort en waarschuwt wanneer moe" },
          { en: "Sleepiness medication dispenser", es: "Dispensador de medicamento para sueño", de: "Schläfrigkeitsmedikament-Spender", nl: "Slaperigheids medicatie dispenser" },
          { en: "Drowsiness prevention coffee maker", es: "Cafetera de prevención de somnolencia", de: "Müdigkeitspräventions-Kaffeemaschine", nl: "Slaperigheidspreventie koffiezetapparaat" },
          { en: "Sleep schedule planner", es: "Planificador de horario de sueño", de: "Schlafzeitplan-Planer", nl: "Slaapschema planner" }
        ],
        correct: 0,
        explanation: {
          en: "Drowsiness detection uses cameras to monitor eye movements, blinking patterns, and head position to detect signs of fatigue and alert drivers to take breaks.",
          es: "La detección de somnolencia usa cámaras para monitorear movimientos oculares, patrones de parpadeo y posición de cabeza para detectar signos de fatiga y alertar conductores a tomar descansos.",
          de: "Müdigkeitserkennung nutzt Kameras zur Überwachung von Augenbewegungen, Blinzelmustern und Kopfposition um Ermüdungszeichen zu erkennen und Fahrer zu Pausen zu mahnen.",
          nl: "Slaperigheidsdetectie gebruikt camera's om oogbewegingen, knipperpatronen en hoofdpositie te monitoren om tekenen van vermoeidheid te detecteren en bestuurders te waarschuwen om pauzes te nemen."
        }
      },
      {
        question: {
          en: "How does AI help with fuel efficiency in vehicles?",
          es: "¿Cómo ayuda la IA con la eficiencia de combustible en vehículos?",
          de: "Wie hilft KI bei der Kraftstoffeffizienz in Fahrzeugen?",
          nl: "Hoe helpt AI met brandstofefficiëntie in voertuigen?"
        },
        options: [
          { en: "Optimizes engine performance and driving patterns to reduce fuel consumption", es: "Optimiza rendimiento del motor y patrones de conducción para reducir consumo de combustible", de: "Optimiert Motorleistung und Fahrmuster um Kraftstoffverbrauch zu reduzieren", nl: "Optimaliseert motorprestaties en rijpatronen om brandstofverbruik te verminderen" },
          { en: "Changes fuel tank size", es: "Cambia tamaño del tanque de combustible", de: "Ändert Tankgröße", nl: "Verandert brandstoftankgrootte" },
          { en: "Adjusts fuel prices", es: "Ajusta precios de combustible", de: "Passt Kraftstoffpreise an", nl: "Past brandstofprijzen aan" },
          { en: "Selects fuel station colors", es: "Selecciona colores de estación de combustible", de: "Wählt Tankstellenfarben", nl: "Selecteert tankstationkleuren" }
        ],
        correct: 0,
        explanation: {
          en: "AI monitors driving behavior, road conditions, and traffic to suggest optimal speeds, gear shifts, and routes that minimize fuel consumption while maintaining performance.",
          es: "La IA monitorea comportamiento de conducción, condiciones de carretera y tráfico para sugerir velocidades óptimas, cambios de marcha y rutas que minimizan consumo de combustible mientras mantiene rendimiento.",
          de: "KI überwacht Fahrverhalten, Straßenbedingungen und Verkehr um optimale Geschwindigkeiten, Gangwechsel und Routen vorzuschlagen die Kraftstoffverbrauch minimieren bei Leistungserhalt.",
          nl: "AI monitort rijgedrag, wegomstandigheden en verkeer om optimale snelheden, versnellingswisselingen en routes voor te stellen die brandstofverbruik minimaliseren terwijl prestaties behouden blijven."
        }
      },
      {
        question: {
          en: "What is intersection collision warning?",
          es: "¿Qué es la advertencia de colisión en intersecciones?",
          de: "Was ist Kreuzungs-Kollisionswarnung?",
          nl: "Wat is kruispunt botsingswaarschuwing?"
        },
        options: [
          { en: "System that alerts drivers to crossing traffic at intersections", es: "Sistema que alerta conductores a tráfico cruzando en intersecciones", de: "System das Fahrer vor Querverkehr an Kreuzungen warnt", nl: "Systeem dat bestuurders waarschuwt voor kruisend verkeer bij kruispunten" },
          { en: "Intersection design tool", es: "Herramienta de diseño de intersecciones", de: "Kreuzungs-Design-Werkzeug", nl: "Kruispunt ontwerp gereedschap" },
          { en: "Traffic light timer", es: "Temporizador de semáforo", de: "Ampel-Timer", nl: "Verkeerslicht timer" },
          { en: "Road surface analyzer", es: "Analizador de superficie de carretera", de: "Straßenoberflächen-Analysator", nl: "Wegoppervlak analysator" }
        ],
        correct: 0,
        explanation: {
          en: "This AI system uses sensors to detect vehicles approaching from side streets or running red lights, warning the driver of potential collisions at intersections.",
          es: "Este sistema IA usa sensores para detectar vehículos aproximándose desde calles laterales o pasando luces rojas, advirtiendo al conductor de colisiones potenciales en intersecciones.",
          de: "Dieses KI-System nutzt Sensoren zur Erkennung von Fahrzeugen die sich von Seitenstraßen nähern oder rote Ampeln überfahren, warnt Fahrer vor potenziellen Kollisionen an Kreuzungen.",
          nl: "Dit AI-systeem gebruikt sensoren om voertuigen te detecteren die naderen van zijstraten of door rood rijden, waarbij de bestuurder wordt gewaarschuwd voor potentiële botsingen bij kruispunten."
        }
      },
      {
        question: {
          en: "What is the purpose of AI in metro/subway systems?",
          es: "¿Cuál es el propósito de IA en sistemas de metro?",
          de: "Was ist der Zweck von KI in Metro/U-Bahn-Systemen?",
          nl: "Wat is het doel van AI in metro/ondergrondse systemen?"
        },
        options: [
          { en: "Automate train operation and optimize schedules for efficiency", es: "Automatizar operación de trenes y optimizar horarios para eficiencia", de: "Zugbetrieb automatisieren und Fahrpläne für Effizienz optimieren", nl: "Treinoperatie automatiseren en schema's optimaliseren voor efficiëntie" },
          { en: "Design station architecture", es: "Diseñar arquitectura de estación", de: "Stationsarchitektur gestalten", nl: "Station architectuur ontwerpen" },
          { en: "Choose train colors", es: "Elegir colores de tren", de: "Zugfarben auswählen", nl: "Treinkleuren kiezen" },
          { en: "Sell tickets manually", es: "Vender boletos manualmente", de: "Tickets manuell verkaufen", nl: "Kaartjes handmatig verkopen" }
        ],
        correct: 0,
        explanation: {
          en: "AI controls train speeds, manages station dwell times, adjusts schedules based on passenger flow, and ensures safe distances between trains for optimal metro operations.",
          es: "La IA controla velocidades de tren, gestiona tiempos de permanencia en estación, ajusta horarios basados en flujo de pasajeros y asegura distancias seguras entre trenes para operaciones óptimas de metro.",
          de: "KI steuert Zuggeschwindigkeiten, verwaltet Stationsaufenthaltszeiten, passt Fahrpläne basierend auf Fahrgastfluss an und gewährleistet sichere Abstände zwischen Zügen für optimalen Metro-Betrieb.",
          nl: "AI regelt treinsnelheden, beheert stationsverblijftijden, past schema's aan op basis van passagiersstroom en waarborgt veilige afstanden tussen treinen voor optimale metrooperaties."
        }
      },
      {
        question: {
          en: "What is rear cross-traffic alert in cars?",
          es: "¿Qué es la alerta de tráfico cruzado trasero en coches?",
          de: "Was ist Querverkehrswarnung hinten in Autos?",
          nl: "Wat is achteruitrijwaarschuwing voor kruisend verkeer in auto's?"
        },
        options: [
          { en: "Warns drivers of vehicles approaching from sides when reversing", es: "Advierte conductores de vehículos aproximándose desde lados al retroceder", de: "Warnt Fahrer vor Fahrzeugen die sich von den Seiten nähern beim Rückwärtsfahren", nl: "Waarschuwt bestuurders voor voertuigen die naderen van opzij bij achteruitrijden" },
          { en: "Rear window heater", es: "Calentador de ventana trasera", de: "Heckscheibenheizung", nl: "Achterruitverwarming" },
          { en: "Rear bumper color indicator", es: "Indicador de color de parachoques trasero", de: "Hinterstoßstangen-Farbindikator", nl: "Achterbumper kleurindicator" },
          { en: "Rear tire pressure monitor", es: "Monitor de presión de neumático trasero", de: "Hinterer Reifendruck-Monitor", nl: "Achterbandenspanning monitor" }
        ],
        correct: 0,
        explanation: {
          en: "This system uses radar sensors to detect vehicles approaching from either side when backing out of parking spaces, alerting the driver to prevent collisions.",
          es: "Este sistema usa sensores de radar para detectar vehículos aproximándose desde cualquier lado al salir de espacios de estacionamiento, alertando al conductor para prevenir colisiones.",
          de: "Dieses System nutzt Radarsensoren zur Erkennung von Fahrzeugen die sich von beiden Seiten nähern beim Rückwärtsausparken, warnt Fahrer um Kollisionen zu verhindern.",
          nl: "Dit systeem gebruikt radarsensoren om voertuigen te detecteren die van beide kanten naderen bij het achteruit uitparkeren, waarbij de bestuurder wordt gewaarschuwd om botsingen te voorkomen."
        }
      },
      {
        question: {
          en: "How do shared mobility services use AI?",
          es: "¿Cómo usan IA los servicios de movilidad compartida?",
          de: "Wie nutzen geteilte Mobilitätsdienste KI?",
          nl: "Hoe gebruiken gedeelde mobiliteitsdiensten AI?"
        },
        options: [
          { en: "Match users with nearby vehicles and predict demand patterns", es: "Emparejan usuarios con vehículos cercanos y predicen patrones de demanda", de: "Verbinden Nutzer mit nahen Fahrzeugen und sagen Nachfragemuster voraus", nl: "Koppelen gebruikers aan nabije voertuigen en voorspellen vraagpatronen" },
          { en: "Design vehicle colors", es: "Diseñar colores de vehículos", de: "Fahrzeugfarben gestalten", nl: "Voertuigkleuren ontwerpen" },
          { en: "Create vehicle logos", es: "Crear logos de vehículos", de: "Fahrzeug-Logos erstellen", nl: "Voertuig logo's creëren" },
          { en: "Choose parking lot names", es: "Elegir nombres de estacionamiento", de: "Parkplatznamen auswählen", nl: "Parkeerplaats namen kiezen" }
        ],
        correct: 0,
        explanation: {
          en: "AI in bike-shares, car-shares, and scooter-shares analyzes usage patterns, redistributes vehicles to high-demand areas, and optimizes pricing based on availability and location.",
          es: "La IA en bicicletas compartidas, coches compartidos y scooters compartidos analiza patrones de uso, redistribuye vehículos a áreas de alta demanda y optimiza precios basados en disponibilidad y ubicación.",
          de: "KI in Bike-Sharing, Car-Sharing und Scooter-Sharing analysiert Nutzungsmuster, verteilt Fahrzeuge in stark nachgefragte Bereiche um und optimiert Preise basierend auf Verfügbarkeit und Standort.",
          nl: "AI in deelfietsen, deelauto's en deelscooters analyseert gebruikspatronen, distribueert voertuigen naar gebieden met hoge vraag en optimaliseert prijzen op basis van beschikbaarheid en locatie."
        }
      },
      {
        question: {
          en: "What is tire pressure monitoring with AI?",
          es: "¿Qué es el monitoreo de presión de neumáticos con IA?",
          de: "Was ist Reifendruck-Überwachung mit KI?",
          nl: "Wat is bandenspanning monitoring met AI?"
        },
        options: [
          { en: "System that continuously checks tire pressure and alerts for problems", es: "Sistema que revisa continuamente presión de neumáticos y alerta sobre problemas", de: "System das kontinuierlich Reifendruck prüft und bei Problemen warnt", nl: "Systeem dat continu bandenspanning controleert en waarschuwt voor problemen" },
          { en: "Tire color monitoring", es: "Monitoreo de color de neumático", de: "Reifenfarb-Überwachung", nl: "Bandenkleur monitoring" },
          { en: "Tire brand selection", es: "Selección de marca de neumático", de: "Reifenmarken-Auswahl", nl: "Bandenmerk selectie" },
          { en: "Tire age estimation", es: "Estimación de edad de neumático", de: "Reifenalter-Schätzung", nl: "Bandenleeftijd schatting" }
        ],
        correct: 0,
        explanation: {
          en: "AI-enhanced tire pressure monitoring analyzes pressure trends to predict punctures, optimize tire wear, and improve fuel efficiency by maintaining proper inflation.",
          es: "El monitoreo de presión de neumáticos mejorado con IA analiza tendencias de presión para predecir pinchazos, optimizar desgaste de neumáticos y mejorar eficiencia de combustible manteniendo inflado adecuado.",
          de: "KI-verbesserte Reifendrucküberwachung analysiert Drucktrends um Reifenpannen vorherzusagen, Reifenverschleiß zu optimieren und Kraftstoffeffizienz durch richtigen Reifendruck zu verbessern.",
          nl: "AI-verbeterde bandenspanning monitoring analyseert druktrends om lekke banden te voorspellen, bandenslijtage te optimaliseren en brandstofefficiëntie te verbeteren door juiste spanning te behouden."
        }
      },
      {
        question: {
          en: "What is weather-adaptive driving assistance?",
          es: "¿Qué es la asistencia de conducción adaptativa al clima?",
          de: "Was ist wetterangepasste Fahrassistenz?",
          nl: "Wat is weersaangepaste rijassistentie?"
        },
        options: [
          { en: "AI adjusts vehicle systems based on weather conditions for safety", es: "IA ajusta sistemas del vehículo basándose en condiciones climáticas para seguridad", de: "KI passt Fahrzeugsysteme basierend auf Wetterbedingungen für Sicherheit an", nl: "AI past voertuigsystemen aan op basis van weersomstandigheden voor veiligheid" },
          { en: "Weather forecasting display", es: "Visualización de pronóstico del tiempo", de: "Wettervorhersage-Anzeige", nl: "Weervoorspelling display" },
          { en: "Weather-themed car decorations", es: "Decoraciones de coche con tema del clima", de: "Wetterabhängige Auto-Dekorationen", nl: "Weer-thema auto decoraties" },
          { en: "Climate control for cabin temperature", es: "Control de clima para temperatura de cabina", de: "Klimasteuerung für Innenraumtemperatur", nl: "Klimaatregeling voor cabinetemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "This AI system detects rain, snow, fog, or ice and automatically adjusts traction control, braking sensitivity, and driver alerts to maintain safe driving in poor weather.",
          es: "Este sistema IA detecta lluvia, nieve, niebla o hielo y ajusta automáticamente control de tracción, sensibilidad de frenado y alertas de conductor para mantener conducción segura en mal clima.",
          de: "Dieses KI-System erkennt Regen, Schnee, Nebel oder Eis und passt automatisch Traktionskontrolle, Bremsempfindlichkeit und Fahrerwarnungen an um sicheres Fahren bei schlechtem Wetter zu gewährleisten.",
          nl: "Dit AI-systeem detecteert regen, sneeuw, mist of ijs en past automatisch tractiecontrole, remgevoeligheid en bestuurder waarschuwingen aan om veilig rijden bij slecht weer te behouden."
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
