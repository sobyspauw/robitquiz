// AI in Transport Quiz - Level 2: Advanced Transportation AI
(function() {
  const level2 = {
    name: {
      en: "AI in Transport Level 2",
      es: "IA en Transporte Nivel 2",
      de: "KI im Transport Stufe 2",
      nl: "AI in Transport Level 2"
    },
    questions: [
      {
        question: {
          en: "What type of sensor is commonly used in autonomous vehicles to measure distance?",
          es: "¿Qué tipo de sensor se usa comúnmente en vehículos autónomos para medir distancia?",
          de: "Welcher Sensortyp wird häufig in autonomen Fahrzeugen zur Entfernungsmessung verwendet?",
          nl: "Welk type sensor wordt vaak gebruikt in autonome voertuigen om afstand te meten?"
        },
        options: [
          { en: "LiDAR (Light Detection and Ranging)", es: "LiDAR (Detección y Medición por Luz)", de: "LiDAR (Lichtdetektion und -entfernung)", nl: "LiDAR (Light Detection and Ranging)" },
          { en: "Radio antenna", es: "Antena de radio", de: "Radioantenne", nl: "Radio-antenne" },
          { en: "Speedometer", es: "Velocímetro", de: "Tachometer", nl: "Snelheidsmeter" },
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" }
        ],
        correct: 0,
        explanation: {
          en: "LiDAR uses laser beams to create detailed 3D maps of the environment, measuring precise distances to objects.",
          es: "LiDAR usa rayos láser para crear mapas 3D detallados del entorno, midiendo distancias precisas a objetos.",
          de: "LiDAR nutzt Laserstrahlen um detaillierte 3D-Karten der Umgebung zu erstellen und präzise Entfernungen zu Objekten zu messen.",
          nl: "LiDAR gebruikt laserstralen om gedetailleerde 3D-kaarten van de omgeving te maken en precieze afstanden tot objecten te meten."
        }
      },
      {
        question: {
          en: "What does 'autonomous driving level 3' mean?",
          es: "¿Qué significa 'nivel 3 de conducción autónoma'?",
          de: "Was bedeutet 'Autonomes Fahren Level 3'?",
          nl: "Wat betekent 'autonoom rijden level 3'?"
        },
        options: [
          { en: "Conditional automation - car can drive itself but human must be ready to take over", es: "Automatización condicional - el coche puede conducirse solo pero el humano debe estar listo para tomar el control", de: "Bedingte Automatisierung - Auto kann selbst fahren aber Mensch muss bereit sein zu übernehmen", nl: "Voorwaardelijke automatisering - auto kan zelf rijden maar mens moet klaar zijn om over te nemen" },
          { en: "No automation at all", es: "Sin automatización en absoluto", de: "Überhaupt keine Automatisierung", nl: "Helemaal geen automatisering" },
          { en: "Full automation in all conditions", es: "Automatización completa en todas las condiciones", de: "Vollautomatisierung unter allen Bedingungen", nl: "Volledige automatisering onder alle omstandigheden" },
          { en: "Only parking assistance", es: "Solo asistencia de estacionamiento", de: "Nur Parkassistenz", nl: "Alleen parkeerhulp" }
        ],
        correct: 0,
        explanation: {
          en: "Level 3 means the car handles driving tasks but requires human attention and readiness to intervene when needed.",
          es: "Nivel 3 significa que el coche maneja tareas de conducción pero requiere atención humana y preparación para intervenir cuando sea necesario.",
          de: "Level 3 bedeutet dass das Auto Fahraufgaben übernimmt aber menschliche Aufmerksamkeit und Bereitschaft zum Eingreifen erfordert.",
          nl: "Level 3 betekent dat de auto rijtaken overneemt maar menselijke aandacht en bereidheid om in te grijpen vereist."
        }
      },
      {
        question: {
          en: "What is 'computer vision' in autonomous vehicles?",
          es: "¿Qué es la 'visión por computadora' en vehículos autónomos?",
          de: "Was ist 'Computer Vision' in autonomen Fahrzeugen?",
          nl: "Wat is 'computer vision' in autonome voertuigen?"
        },
        options: [
          { en: "AI system that interprets visual information from cameras", es: "Sistema IA que interpreta información visual de cámaras", de: "KI-System das visuelle Informationen von Kameras interpretiert", nl: "AI-systeem dat visuele informatie van camera's interpreteert" },
          { en: "Computer screen in the dashboard", es: "Pantalla de computadora en el tablero", de: "Computerbildschirm im Armaturenbrett", nl: "Computerscherm in het dashboard" },
          { en: "GPS navigation system", es: "Sistema de navegación GPS", de: "GPS-Navigationssystem", nl: "GPS-navigatiesysteem" },
          { en: "Backup camera display", es: "Pantalla de cámara trasera", de: "Rückfahrkamera-Display", nl: "Achteruitrijcamera display" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision enables cars to recognize objects, read signs, detect lanes, and understand their visual environment.",
          es: "La visión por computadora permite a los coches reconocer objetos, leer señales, detectar carriles y entender su entorno visual.",
          de: "Computer Vision ermöglicht Autos Objekte zu erkennen, Schilder zu lesen, Fahrspuren zu erkennen und ihre visuelle Umgebung zu verstehen.",
          nl: "Computer vision stelt auto's in staat objecten te herkennen, borden te lezen, rijstroken te detecteren en hun visuele omgeving te begrijpen."
        }
      },
      {
        question: {
          en: "What is predictive maintenance in transportation?",
          es: "¿Qué es el mantenimiento predictivo en transporte?",
          de: "Was ist vorausschauende Wartung im Transport?",
          nl: "Wat is voorspellend onderhoud in transport?"
        },
        options: [
          { en: "Using AI to predict when vehicles need maintenance before they break down", es: "Usar IA para predecir cuándo los vehículos necesitan mantenimiento antes de averiarse", de: "KI nutzen um vorherzusagen wann Fahrzeuge Wartung benötigen bevor sie kaputt gehen", nl: "AI gebruiken om te voorspellen wanneer voertuigen onderhoud nodig hebben voordat ze kapot gaan" },
          { en: "Checking vehicles every month", es: "Revisar vehículos cada mes", de: "Fahrzeuge jeden Monat überprüfen", nl: "Voertuigen elke maand controleren" },
          { en: "Fixing vehicles after they break", es: "Reparar vehículos después de averiarse", de: "Fahrzeuge reparieren nachdem sie kaputt sind", nl: "Voertuigen repareren nadat ze kapot zijn" },
          { en: "Only visual inspection", es: "Solo inspección visual", de: "Nur visuelle Inspektion", nl: "Alleen visuele inspectie" }
        ],
        correct: 0,
        explanation: {
          en: "AI analyzes sensor data to detect early signs of wear and schedule maintenance, preventing unexpected breakdowns.",
          es: "La IA analiza datos de sensores para detectar signos tempranos de desgaste y programar mantenimiento, previniendo averías inesperadas.",
          de: "KI analysiert Sensordaten um frühe Verschleißzeichen zu erkennen und Wartung zu planen, verhindert unerwartete Ausfälle.",
          nl: "AI analyseert sensordata om vroege tekenen van slijtage te detecteren en onderhoud in te plannen, waardoor onverwachte storingen worden voorkomen."
        }
      },
      {
        question: {
          en: "What is dynamic route planning in smart transportation?",
          es: "¿Qué es la planificación dinámica de rutas en transporte inteligente?",
          de: "Was ist dynamische Routenplanung im intelligenten Transport?",
          nl: "Wat is dynamische routeplanning in slim transport?"
        },
        options: [
          { en: "AI adjusting routes in real-time based on traffic conditions", es: "IA ajustando rutas en tiempo real basándose en condiciones de tráfico", de: "KI die Routen in Echtzeit basierend auf Verkehrsbedingungen anpasst", nl: "AI die routes in realtime aanpast op basis van verkeersomstandigheden" },
          { en: "Planning routes once per day", es: "Planificar rutas una vez al día", de: "Routen einmal pro Tag planen", nl: "Routes één keer per dag plannen" },
          { en: "Using only highway routes", es: "Usar solo rutas de autopista", de: "Nur Autobahnrouten verwenden", nl: "Alleen snelwegroutes gebruiken" },
          { en: "Fixed routes that never change", es: "Rutas fijas que nunca cambian", de: "Feste Routen die sich nie ändern", nl: "Vaste routes die nooit veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic routing uses live traffic data, weather conditions, and incidents to continuously optimize travel paths.",
          es: "El enrutamiento dinámico usa datos de tráfico en vivo, condiciones climáticas e incidentes para optimizar continuamente rutas de viaje.",
          de: "Dynamisches Routing nutzt Live-Verkehrsdaten, Wetterbedingungen und Vorfälle um Reisewege kontinuierlich zu optimieren.",
          nl: "Dynamische routering gebruikt live verkeersdata, weersomstandigheden en incidenten om reispaden continu te optimaliseren."
        }
      },
      {
        question: {
          en: "What is the purpose of ultrasonic sensors in vehicles?",
          es: "¿Cuál es el propósito de los sensores ultrasónicos en vehículos?",
          de: "Was ist der Zweck von Ultraschallsensoren in Fahrzeugen?",
          nl: "Wat is het doel van ultrasone sensoren in voertuigen?"
        },
        options: [
          { en: "Detect nearby objects during parking and low-speed maneuvers", es: "Detectar objetos cercanos durante estacionamiento y maniobras a baja velocidad", de: "Nahe Objekte während Parken und langsamen Manövern erkennen", nl: "Nabije objecten detecteren tijdens parkeren en lage snelheid manoeuvres" },
          { en: "Play music through sound waves", es: "Reproducir música a través de ondas sonoras", de: "Musik über Schallwellen abspielen", nl: "Muziek afspelen door geluidsgolven" },
          { en: "Clean the vehicle exterior", es: "Limpiar el exterior del vehículo", de: "Fahrzeugaußenseite reinigen", nl: "Buitenkant van voertuig schoonmaken" },
          { en: "Adjust engine temperature", es: "Ajustar temperatura del motor", de: "Motortemperatur einstellen", nl: "Motortemperatuur aanpassen" }
        ],
        correct: 0,
        explanation: {
          en: "Ultrasonic sensors emit high-frequency sound waves and measure the time for echoes to return, detecting objects within short range for parking assistance.",
          es: "Los sensores ultrasónicos emiten ondas sonoras de alta frecuencia y miden el tiempo para que los ecos regresen, detectando objetos a corta distancia para asistencia de estacionamiento.",
          de: "Ultraschallsensoren senden hochfrequente Schallwellen aus und messen die Zeit für Echos zurückzukehren, erkennen Objekte in kurzer Reichweite für Parkassistenz.",
          nl: "Ultrasone sensoren zenden hoogfrequente geluidsgolven uit en meten de tijd voor echo's om terug te keren, detecteren objecten binnen korte afstand voor parkeerhulp."
        }
      },
      {
        question: {
          en: "What does ADAS stand for in automotive technology?",
          es: "¿Qué significa ADAS en tecnología automotriz?",
          de: "Wofür steht ADAS in der Automobiltechnologie?",
          nl: "Waar staat ADAS voor in automotive technologie?"
        },
        options: [
          { en: "Advanced Driver Assistance Systems", es: "Sistemas Avanzados de Asistencia al Conductor", de: "Fortschrittliche Fahrerassistenzsysteme", nl: "Geavanceerde Bestuurder Assistentie Systemen" },
          { en: "Automated Driving Analysis Software", es: "Software de Análisis de Conducción Automatizada", de: "Automatisierte Fahranalyse-Software", nl: "Geautomatiseerde Rijanalyse Software" },
          { en: "Advanced Data Analysis System", es: "Sistema Avanzado de Análisis de Datos", de: "Fortschrittliches Datenanalysesystem", nl: "Geavanceerd Data Analyse Systeem" },
          { en: "Automatic Door And Security", es: "Puerta Automática y Seguridad", de: "Automatische Tür und Sicherheit", nl: "Automatische Deur en Beveiliging" }
        ],
        correct: 0,
        explanation: {
          en: "ADAS encompasses various AI-powered safety features like collision avoidance, lane departure warning, and adaptive cruise control to assist drivers.",
          es: "ADAS abarca varias características de seguridad con IA como evitación de colisiones, advertencia de salida de carril y control de crucero adaptativo para asistir conductores.",
          de: "ADAS umfasst verschiedene KI-gestützte Sicherheitsfeatures wie Kollisionsvermeidung, Spurverlassenswarnung und adaptiver Tempomat zur Fahrerunterstützung.",
          nl: "ADAS omvat verschillende AI-aangedreven veiligheidsfeatures zoals botsingvermijding, rijstrook verlaten waarschuwing en adaptieve cruise control om bestuurders te helpen."
        }
      },
      {
        question: {
          en: "How does machine learning improve traffic signal timing?",
          es: "¿Cómo mejora el aprendizaje automático el tiempo de los semáforos?",
          de: "Wie verbessert maschinelles Lernen die Ampelzeiten?",
          nl: "Hoe verbetert machine learning verkeerslicht timing?"
        },
        options: [
          { en: "By learning from traffic patterns and optimizing signal phases automatically", es: "Aprendiendo de patrones de tráfico y optimizando fases de señal automáticamente", de: "Durch Lernen von Verkehrsmustern und automatische Optimierung der Signalphasen", nl: "Door te leren van verkeerspatronen en signalfasen automatisch te optimaliseren" },
          { en: "By making lights change colors faster", es: "Haciendo que las luces cambien de color más rápido", de: "Durch schnelleres Farbwechseln der Lichter", nl: "Door lichten sneller van kleur te laten veranderen" },
          { en: "By increasing the brightness of signals", es: "Aumentando el brillo de las señales", de: "Durch Erhöhung der Helligkeit der Signale", nl: "Door de helderheid van signalen te verhogen" },
          { en: "By adding more traffic lights to intersections", es: "Agregando más semáforos a las intersecciones", de: "Durch Hinzufügen weiterer Ampeln zu Kreuzungen", nl: "Door meer verkeerslichten toe te voegen aan kruispunten" }
        ],
        correct: 0,
        explanation: {
          en: "Machine learning algorithms analyze historical and real-time traffic data to predict optimal timing patterns, reducing wait times and improving traffic flow efficiency.",
          es: "Los algoritmos de aprendizaje automático analizan datos de tráfico históricos y en tiempo real para predecir patrones de tiempo óptimos, reduciendo tiempos de espera y mejorando eficiencia del flujo de tráfico.",
          de: "Maschinelle Lernalgorithmen analysieren historische und Echtzeitverkehrsdaten um optimale Zeitpunktmuster vorherzusagen, reduzieren Wartezeiten und verbessern Verkehrsflusseffizienz.",
          nl: "Machine learning algoritmes analyseren historische en real-time verkeersdata om optimale timing patronen te voorspellen, waardoor wachttijden worden verminderd en verkeersstroom efficiëntie wordt verbeterd."
        }
      },
      {
        question: {
          en: "What is sensor fusion in autonomous vehicle technology?",
          es: "¿Qué es la fusión de sensores en tecnología de vehículos autónomos?",
          de: "Was ist Sensorfusion in der Technologie autonomer Fahrzeuge?",
          nl: "Wat is sensor fusion in autonome voertuig technologie?"
        },
        options: [
          { en: "Combining data from multiple sensors to create a complete understanding of the environment", es: "Combinar datos de múltiples sensores para crear una comprensión completa del entorno", de: "Daten von mehreren Sensoren kombinieren um ein vollständiges Umgebungsverständnis zu schaffen", nl: "Data van meerdere sensoren combineren om een volledig begrip van de omgeving te creëren" },
          { en: "Welding sensors together physically", es: "Soldar sensores juntos físicamente", de: "Sensoren physisch zusammenschweißen", nl: "Sensoren fysiek aan elkaar lassen" },
          { en: "Using only one type of sensor", es: "Usar solo un tipo de sensor", de: "Nur einen Sensortyp verwenden", nl: "Slechts één type sensor gebruiken" },
          { en: "Replacing broken sensors automatically", es: "Reemplazar sensores rotos automáticamente", de: "Kaputte Sensoren automatisch ersetzen", nl: "Kapotte sensoren automatisch vervangen" }
        ],
        correct: 0,
        explanation: {
          en: "Sensor fusion integrates data from cameras, radar, LiDAR, and other sensors to provide redundancy and create a more accurate, reliable perception system.",
          es: "La fusión de sensores integra datos de cámaras, radar, LiDAR y otros sensores para proporcionar redundancia y crear un sistema de percepción más preciso y confiable.",
          de: "Sensorfusion integriert Daten von Kameras, Radar, LiDAR und anderen Sensoren um Redundanz zu bieten und ein genaueres, zuverlässigeres Wahrnehmungssystem zu schaffen.",
          nl: "Sensor fusion integreert data van camera's, radar, LiDAR en andere sensoren om redundantie te bieden en een nauwkeuriger, betrouwbaarder perceptiesysteem te creëren."
        }
      },
      {
        question: {
          en: "What is object classification in computer vision for vehicles?",
          es: "¿Qué es la clasificación de objetos en visión por computadora para vehículos?",
          de: "Was ist Objektklassifizierung in Computer Vision für Fahrzeuge?",
          nl: "Wat is object classificatie in computer vision voor voertuigen?"
        },
        options: [
          { en: "Identifying and categorizing different objects like cars, pedestrians, and traffic signs", es: "Identificar y categorizar diferentes objetos como coches, peatones y señales de tráfico", de: "Verschiedene Objekte wie Autos, Fußgänger und Verkehrsschilder identifizieren und kategorisieren", nl: "Verschillende objecten zoals auto's, voetgangers en verkeersborden identificeren en categoriseren" },
          { en: "Organizing files on the vehicle's computer", es: "Organizar archivos en la computadora del vehículo", de: "Dateien auf dem Fahrzeugcomputer organisieren", nl: "Bestanden op de voertuigcomputer organiseren" },
          { en: "Sorting vehicle parts by size", es: "Clasificar partes del vehículo por tamaño", de: "Fahrzeugteile nach Größe sortieren", nl: "Voertuigonderdelen op grootte sorteren" },
          { en: "Arranging passengers by destination", es: "Organizar pasajeros por destino", de: "Passagiere nach Zielort ordnen", nl: "Passagiers op bestemming rangschikken" }
        ],
        correct: 0,
        explanation: {
          en: "Object classification allows autonomous vehicles to recognize and respond appropriately to different elements in their environment, essential for safe navigation.",
          es: "La clasificación de objetos permite a vehículos autónomos reconocer y responder apropiadamente a diferentes elementos en su entorno, esencial para navegación segura.",
          de: "Objektklassifizierung ermöglicht autonomen Fahrzeugen verschiedene Elemente in ihrer Umgebung zu erkennen und angemessen zu reagieren, wesentlich für sichere Navigation.",
          nl: "Object classificatie stelt autonome voertuigen in staat verschillende elementen in hun omgeving te herkennen en er gepast op te reageren, essentieel voor veilige navigatie."
        }
      },
      {
        question: {
          en: "What is the difference between Level 2 and Level 3 autonomous driving?",
          es: "¿Cuál es la diferencia entre el nivel 2 y nivel 3 de conducción autónoma?",
          de: "Was ist der Unterschied zwischen Level 2 und Level 3 autonomem Fahren?",
          nl: "Wat is het verschil tussen Level 2 en Level 3 autonoom rijden?"
        },
        options: [
          { en: "Level 2 requires constant driver monitoring, Level 3 allows driver to look away under certain conditions", es: "Nivel 2 requiere monitoreo constante del conductor, Nivel 3 permite al conductor apartar la vista bajo ciertas condiciones", de: "Level 2 erfordert ständige Fahrerüberwachung, Level 3 erlaubt dem Fahrer unter bestimmten Bedingungen wegzuschauen", nl: "Level 2 vereist constante bestuurder monitoring, Level 3 staat bestuurder toe weg te kijken onder bepaalde omstandigheden" },
          { en: "Level 2 is faster than Level 3", es: "Nivel 2 es más rápido que Nivel 3", de: "Level 2 ist schneller als Level 3", nl: "Level 2 is sneller dan Level 3" },
          { en: "Level 3 has fewer sensors than Level 2", es: "Nivel 3 tiene menos sensores que Nivel 2", de: "Level 3 hat weniger Sensoren als Level 2", nl: "Level 3 heeft minder sensoren dan Level 2" },
          { en: "Level 2 works only at night, Level 3 only during day", es: "Nivel 2 funciona solo de noche, Nivel 3 solo durante el día", de: "Level 2 funktioniert nur nachts, Level 3 nur tagsüber", nl: "Level 2 werkt alleen 's nachts, Level 3 alleen overdag" }
        ],
        correct: 0,
        explanation: {
          en: "Level 2 systems assist with steering and acceleration but require full driver attention, while Level 3 can handle driving tasks independently under specific conditions but need driver readiness to intervene.",
          es: "Los sistemas Nivel 2 asisten con dirección y aceleración pero requieren atención completa del conductor, mientras Nivel 3 puede manejar tareas de conducción independientemente bajo condiciones específicas pero necesita preparación del conductor para intervenir.",
          de: "Level 2 Systeme helfen bei Lenkung und Beschleunigung aber erfordern volle Fahreraufmerksamkeit, während Level 3 Fahraufgaben unter spezifischen Bedingungen unabhängig bewältigen kann aber Fahrerbereitschaft zum Eingreifen benötigt.",
          nl: "Level 2 systemen helpen met sturen en accelereren maar vereisen volledige bestuurder aandacht, terwijl Level 3 rijtaken onafhankelijk kan afhandelen onder specifieke omstandigheden maar bestuurder gereedheid voor ingrijpen nodig heeft."
        }
      },
      {
        question: {
          en: "How do smart intersections use AI to improve traffic flow?",
          es: "¿Cómo usan IA las intersecciones inteligentes para mejorar el flujo de tráfico?",
          de: "Wie nutzen intelligente Kreuzungen KI zur Verbesserung des Verkehrsflusses?",
          nl: "Hoe gebruiken slimme kruispunten AI om verkeersstroom te verbeteren?"
        },
        options: [
          { en: "By detecting vehicle presence and adjusting signal timing in real-time", es: "Detectando presencia de vehículos y ajustando tiempo de señal en tiempo real", de: "Durch Erkennung von Fahrzeugpräsenz und Anpassung der Signalzeiten in Echtzeit", nl: "Door voertuigaanwezigheid te detecteren en signaaltiming in real-time aan te passen" },
          { en: "By painting the intersection with bright colors", es: "Pintando la intersección con colores brillantes", de: "Durch Bemalen der Kreuzung mit hellen Farben", nl: "Door het kruispunt te schilderen met heldere kleuren" },
          { en: "By playing music at intersections", es: "Reproduciendo música en intersecciones", de: "Durch Musikwiedergabe an Kreuzungen", nl: "Door muziek af te spelen bij kruispunten" },
          { en: "By making all lights flash simultaneously", es: "Haciendo que todas las luces parpadeen simultáneamente", de: "Durch gleichzeitiges Blinken aller Lichter", nl: "Door alle lichten tegelijkertijd te laten knipperen" }
        ],
        correct: 0,
        explanation: {
          en: "Smart intersections use cameras and sensors to monitor traffic in all directions and dynamically adjust traffic light timing to minimize congestion and wait times.",
          es: "Las intersecciones inteligentes usan cámaras y sensores para monitorear tráfico en todas direcciones y ajustar dinámicamente el tiempo de semáforos para minimizar congestión y tiempos de espera.",
          de: "Intelligente Kreuzungen nutzen Kameras und Sensoren zur Verkehrsüberwachung in alle Richtungen und passen dynamisch Ampelzeiten an um Staus und Wartezeiten zu minimieren.",
          nl: "Slimme kruispunten gebruiken camera's en sensoren om verkeer in alle richtingen te monitoren en passen dynamisch verkeerslicht timing aan om opstoppingen en wachttijden te minimaliseren."
        }
      },
      {
        question: {
          en: "What is edge detection in vehicle computer vision systems?",
          es: "¿Qué es la detección de bordes en sistemas de visión por computadora de vehículos?",
          de: "Was ist Kantenerkennung in Fahrzeug-Computer-Vision-Systemen?",
          nl: "Wat is rand detectie in voertuig computer vision systemen?"
        },
        options: [
          { en: "Identifying boundaries between different objects and surfaces in camera images", es: "Identificar límites entre diferentes objetos y superficies en imágenes de cámara", de: "Grenzen zwischen verschiedenen Objekten und Oberflächen in Kamerabildern identifizieren", nl: "Grenzen tussen verschillende objecten en oppervlakken in camera beelden identificeren" },
          { en: "Finding the edge of the road only", es: "Encontrar solo el borde de la carretera", de: "Nur den Straßenrand finden", nl: "Alleen de rand van de weg vinden" },
          { en: "Detecting sharp turns in the route", es: "Detectar curvas cerradas en la ruta", de: "Scharfe Kurven in der Route erkennen", nl: "Scherpe bochten in de route detecteren" },
          { en: "Monitoring the vehicle's exterior edges", es: "Monitorear los bordes exteriores del vehículo", de: "Äußeren Fahrzeugränder überwachen", nl: "Buitenranden van het voertuig monitoren" }
        ],
        correct: 0,
        explanation: {
          en: "Edge detection algorithms process camera images to identify object boundaries, lane markings, and structural features, helping vehicles understand their visual environment.",
          es: "Los algoritmos de detección de bordes procesan imágenes de cámara para identificar límites de objetos, marcas de carril y características estructurales, ayudando a vehículos entender su entorno visual.",
          de: "Kantenerkennungsalgorithmen verarbeiten Kamerabilder um Objektgrenzen, Fahrbahnmarkierungen und strukturelle Merkmale zu identifizieren, helfen Fahrzeugen ihre visuelle Umgebung zu verstehen.",
          nl: "Rand detectie algoritmes verwerken camera beelden om objectgrenzen, rijstrook markeringen en structurele kenmerken te identificeren, waardoor voertuigen hun visuele omgeving kunnen begrijpen."
        }
      },
      {
        question: {
          en: "What role does AI play in vehicle-to-infrastructure (V2I) communication?",
          es: "¿Qué papel juega la IA en la comunicación vehículo-infraestructura (V2I)?",
          de: "Welche Rolle spielt KI in der Fahrzeug-zu-Infrastruktur (V2I) Kommunikation?",
          nl: "Welke rol speelt AI in voertuig-naar-infrastructuur (V2I) communicatie?"
        },
        options: [
          { en: "Processing and interpreting data exchanged between vehicles and road infrastructure", es: "Procesar e interpretar datos intercambiados entre vehículos e infraestructura vial", de: "Verarbeitung und Interpretation von Daten zwischen Fahrzeugen und Straßeninfrastruktur", nl: "Data verwerken en interpreteren die wordt uitgewisseld tussen voertuigen en weginfrastructuur" },
          { en: "Building new roads automatically", es: "Construir nuevas carreteras automáticamente", de: "Neue Straßen automatisch bauen", nl: "Automatisch nieuwe wegen bouwen" },
          { en: "Designing traffic signs", es: "Diseñar señales de tráfico", de: "Verkehrsschilder entwerfen", nl: "Verkeersborden ontwerpen" },
          { en: "Installing vehicle engines", es: "Instalar motores de vehículos", de: "Fahrzeugmotoren installieren", nl: "Voertuigmotoren installeren" }
        ],
        correct: 0,
        explanation: {
          en: "AI enables vehicles to understand and act on information from traffic lights, road signs, and infrastructure sensors, optimizing routes and improving safety through intelligent communication.",
          es: "La IA permite a vehículos entender y actuar sobre información de semáforos, señales viales y sensores de infraestructura, optimizando rutas y mejorando seguridad através comunicación inteligente.",
          de: "KI ermöglicht Fahrzeugen Informationen von Ampeln, Straßenschildern und Infrastruktursensoren zu verstehen und darauf zu reagieren, optimiert Routen und verbessert Sicherheit durch intelligente Kommunikation.",
          nl: "AI stelt voertuigen in staat informatie van verkeerslichten, wegborden en infrastructuur sensoren te begrijpen en erop te handelen, optimaliseert routes en verbetert veiligheid door intelligente communicatie."
        }
      },
      {
        question: {
          en: "How does AI help with parking space detection in smart cities?",
          es: "¿Cómo ayuda la IA con la detección de espacios de estacionamiento en ciudades inteligentes?",
          de: "Wie hilft KI bei der Parkplatz-Erkennung in Smart Cities?",
          nl: "Hoe helpt AI met parkeerplaats detectie in slimme steden?"
        },
        options: [
          { en: "Using computer vision and sensors to identify empty parking spots and guide drivers", es: "Usando visión por computadora y sensores para identificar espacios de estacionamiento vacíos y guiar conductores", de: "Computer Vision und Sensoren nutzen um leere Parkplätze zu identifizieren und Fahrer zu führen", nl: "Computer vision en sensoren gebruiken om lege parkeerplaatsen te identificeren en bestuurders te begeleiden" },
          { en: "Painting parking lines brighter", es: "Pintar líneas de estacionamiento más brillantes", de: "Parklinien heller malen", nl: "Parkeerlijnen helderder schilderen" },
          { en: "Making parking meters taller", es: "Hacer parquímetros más altos", de: "Parkuhren höher machen", nl: "Parkeermeters hoger maken" },
          { en: "Adding more parking attendants", es: "Agregar más asistentes de estacionamiento", de: "Mehr Parkwächter hinzufügen", nl: "Meer parkeer assistenten toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "AI-powered parking systems use cameras and IoT sensors to continuously monitor parking spaces, creating real-time maps of availability and directing drivers to open spots.",
          es: "Los sistemas de estacionamiento con IA usan cámaras y sensores IoT para monitorear continuamente espacios de estacionamiento, creando mapas en tiempo real de disponibilidad y dirigiendo conductores a lugares abiertos.",
          de: "KI-gestützte Parksysteme nutzen Kameras und IoT-Sensoren zur kontinuierlichen Parkplatzüberwachung, erstellen Echtzeitkarten der Verfügbarkeit und leiten Fahrer zu freien Plätzen.",
          nl: "AI-aangedreven parkeersystemen gebruiken camera's en IoT sensoren om parkeerplaatsen continu te monitoren, creëren real-time kaarten van beschikbaarheid en leiden bestuurders naar vrije plekken."
        }
      },
      {
        question: {
          en: "What is pattern recognition in autonomous vehicle AI?",
          es: "¿Qué es el reconocimiento de patrones en IA de vehículos autónomos?",
          de: "Was ist Mustererkennung in autonomer Fahrzeug-KI?",
          nl: "Wat is patroonherkenning in autonome voertuig AI?"
        },
        options: [
          { en: "AI ability to recognize recurring shapes, behaviors, and scenarios in the driving environment", es: "Capacidad IA para reconocer formas, comportamientos y escenarios recurrentes en el entorno de conducción", de: "KI-Fähigkeit wiederkehrende Formen, Verhaltensweisen und Szenarien in der Fahrumgebung zu erkennen", nl: "AI vermogen om terugkerende vormen, gedragingen en scenario's in de rijomgeving te herkennen" },
          { en: "Recognizing vehicle license plate patterns", es: "Reconocer patrones de placas de vehículos", de: "Fahrzeug-Kennzeichenmuster erkennen", nl: "Voertuig kentekenpatronen herkennen" },
          { en: "Identifying carpet patterns in vehicle interiors", es: "Identificar patrones de alfombra en interiores de vehículos", de: "Teppichmuster in Fahrzeuginnenräumen identifizieren", nl: "Tapijt patronen in voertuig interieurs identificeren" },
          { en: "Recognizing tire tread patterns only", es: "Reconocer solo patrones de banda de rodadura", de: "Nur Reifenprofil-Muster erkennen", nl: "Alleen banden profiel patronen herkennen" }
        ],
        correct: 0,
        explanation: {
          en: "Pattern recognition enables vehicles to identify common traffic situations, predict other drivers' behaviors, and recognize road signs, lane markings, and hazards consistently.",
          es: "El reconocimiento de patrones permite a vehículos identificar situaciones de tráfico comunes, predecir comportamientos de otros conductores y reconocer señales viales, marcas de carril y peligros consistentemente.",
          de: "Mustererkennung ermöglicht Fahrzeugen häufige Verkehrssituationen zu identifizieren, Verhalten anderer Fahrer vorherzusagen und Verkehrszeichen, Fahrbahnmarkierungen und Gefahren konsistent zu erkennen.",
          nl: "Patroonherkenning stelt voertuigen in staat algemene verkeerssituaties te identificeren, gedrag van andere bestuurders te voorspellen en verkeersborden, rijstrook markeringen en gevaren consistent te herkennen."
        }
      },
      {
        question: {
          en: "How does AI improve fuel efficiency in transportation systems?",
          es: "¿Cómo mejora la IA la eficiencia de combustible en sistemas de transporte?",
          de: "Wie verbessert KI die Kraftstoffeffizienz in Transportsystemen?",
          nl: "Hoe verbetert AI brandstofefficiëntie in transportsystemen?"
        },
        options: [
          { en: "By optimizing routes, driving patterns, and vehicle coordination to reduce fuel consumption", es: "Optimizando rutas, patrones de conducción y coordinación de vehículos para reducir consumo de combustible", de: "Durch Optimierung von Routen, Fahrmustern und Fahrzeugkoordination zur Kraftstoffverbrauchsreduktion", nl: "Door routes, rijpatronen en voertuigcoördinatie te optimaliseren om brandstofverbruik te verminderen" },
          { en: "By making engines larger", es: "Haciendo motores más grandes", de: "Durch größere Motoren", nl: "Door motoren groter te maken" },
          { en: "By adding more fuel tanks", es: "Agregando más tanques de combustible", de: "Durch Hinzufügen weiterer Kraftstofftanks", nl: "Door meer brandstoftanks toe te voegen" },
          { en: "By increasing vehicle weight", es: "Aumentando peso del vehículo", de: "Durch Erhöhung des Fahrzeuggewichts", nl: "Door voertuiggewicht te verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "AI analyzes traffic conditions, topography, and vehicle characteristics to determine optimal speeds, routes, and driving behaviors that minimize fuel consumption and emissions.",
          es: "La IA analiza condiciones de tráfico, topografía y características del vehículo para determinar velocidades, rutas y comportamientos de conducción óptimos que minimizan consumo de combustible y emisiones.",
          de: "KI analysiert Verkehrsbedingungen, Topografie und Fahrzeugcharakteristika um optimale Geschwindigkeiten, Routen und Fahrverhalten zu bestimmen die Kraftstoffverbrauch und Emissionen minimieren.",
          nl: "AI analyseert verkeersomstandigheden, topografie en voertuigkarakteristieken om optimale snelheden, routes en rijgedrag te bepalen die brandstofverbruik en uitstoot minimaliseren."
        }
      },
      {
        question: {
          en: "What is real-time processing in autonomous vehicle systems?",
          es: "¿Qué es el procesamiento en tiempo real en sistemas de vehículos autónomos?",
          de: "Was ist Echtzeitverarbeitung in autonomen Fahrzeugsystemen?",
          nl: "Wat is real-time verwerking in autonome voertuigsystemen?"
        },
        options: [
          { en: "Instant analysis and response to sensor data for immediate driving decisions", es: "Análisis instantáneo y respuesta a datos de sensores para decisiones de conducción inmediatas", de: "Sofortige Analyse und Reaktion auf Sensordaten für unmittelbare Fahrentscheidungen", nl: "Onmiddellijke analyse en reactie op sensordata voor directe rijbeslissingen" },
          { en: "Processing data only during daylight hours", es: "Procesar datos solo durante horas diurnas", de: "Datenverarbeitung nur bei Tageslicht", nl: "Data alleen verwerken tijdens daglichturen" },
          { en: "Analyzing data once per hour", es: "Analizar datos una vez por hora", de: "Daten einmal pro Stunde analysieren", nl: "Data één keer per uur analyseren" },
          { en: "Processing information when vehicle is parked", es: "Procesar información cuando vehículo está estacionado", de: "Informationen verarbeiten wenn Fahrzeug geparkt ist", nl: "Informatie verwerken wanneer voertuig geparkeerd staat" }
        ],
        correct: 0,
        explanation: {
          en: "Real-time processing enables autonomous vehicles to make split-second decisions by continuously analyzing sensor input and responding to changing road conditions instantly.",
          es: "El procesamiento en tiempo real permite a vehículos autónomos tomar decisiones en fracciones de segundo analizando continuamente entrada de sensores y respondiendo a condiciones cambiantes de carretera instantáneamente.",
          de: "Echtzeitverarbeitung ermöglicht autonomen Fahrzeugen Sekundenbruchteile Entscheidungen zu treffen durch kontinuierliche Analyse von Sensoreingaben und sofortige Reaktion auf sich ändernde Straßenbedingungen.",
          nl: "Real-time verwerking stelt autonome voertuigen in staat om seconde beslissingen te nemen door continu sensorinput te analyseren en onmiddellijk te reageren op veranderende wegomstandigheden."
        }
      },
      {
        question: {
          en: "How do AI systems handle traffic sign recognition?",
          es: "¿Cómo manejan los sistemas IA el reconocimiento de señales de tráfico?",
          de: "Wie handhaben KI-Systeme Verkehrszeichenerkennung?",
          nl: "Hoe gaan AI-systemen om met verkeersbordenherkenning?"
        },
        options: [
          { en: "Using computer vision to detect, classify, and interpret traffic signs from camera images", es: "Usando visión por computadora para detectar, clasificar e interpretar señales de tráfico de imágenes de cámara", de: "Computer Vision nutzen um Verkehrszeichen aus Kamerabildern zu erkennen, klassifizieren und interpretieren", nl: "Computer vision gebruiken om verkeersborden te detecteren, classificeren en interpreteren van camera beelden" },
          { en: "Reading text on signs manually", es: "Leyendo texto en señales manualmente", de: "Text auf Schildern manuell lesen", nl: "Tekst op borden handmatig lezen" },
          { en: "Only recognizing red colored signs", es: "Solo reconociendo señales de color rojo", de: "Nur rote Schilder erkennen", nl: "Alleen rode borden herkennen" },
          { en: "Ignoring all traffic signs completely", es: "Ignorando todas las señales de tráfico completamente", de: "Alle Verkehrszeichen komplett ignorieren", nl: "Alle verkeersborden volledig negeren" }
        ],
        correct: 0,
        explanation: {
          en: "AI traffic sign recognition systems use trained neural networks to identify sign shapes, colors, symbols, and text, ensuring vehicles comply with traffic regulations automatically.",
          es: "Los sistemas IA de reconocimiento de señales de tráfico usan redes neuronales entrenadas para identificar formas, colores, símbolos y texto de señales, asegurando que vehículos cumplan regulaciones de tráfico automáticamente.",
          de: "KI-Verkehrszeichenerkennungssysteme nutzen trainierte neuronale Netzwerke um Schilderformen, Farben, Symbole und Text zu identifizieren, stellen sicher dass Fahrzeuge Verkehrsregeln automatisch befolgen.",
          nl: "AI verkeersbordenherkenning systemen gebruiken getrainde neurale netwerken om bordvormen, kleuren, symbolen en tekst te identificeren, zorgen ervoor dat voertuigen automatisch aan verkeersregels voldoen."
        }
      },
      {
        question: {
          en: "What is adaptive cruise control (ACC) in modern vehicles?",
          es: "¿Qué es el control de crucero adaptativo (ACC) en vehículos modernos?",
          de: "Was ist adaptiver Tempomat (ACC) in modernen Fahrzeugen?",
          nl: "Wat is adaptieve cruise control (ACC) in moderne voertuigen?"
        },
        options: [
          { en: "AI system that automatically adjusts vehicle speed to maintain safe distance from vehicles ahead", es: "Sistema IA que ajusta automáticamente velocidad del vehículo para mantener distancia segura de vehículos adelante", de: "KI-System das Fahrzeuggeschwindigkeit automatisch anpasst um sicheren Abstand zu vorausfahrenden Fahrzeugen zu halten", nl: "AI-systeem dat voertuigsnelheid automatisch aanpast om veilige afstand tot voertuigen vooruit te behouden" },
          { en: "Cruise control that only works at high speeds", es: "Control de crucero que solo funciona a altas velocidades", de: "Tempomat der nur bei hohen Geschwindigkeiten funktioniert", nl: "Cruise control die alleen werkt bij hoge snelheden" },
          { en: "Manual speed adjustment system", es: "Sistema de ajuste manual de velocidad", de: "Manuelles Geschwindigkeitseinstellungssystem", nl: "Handmatig snelheidsaanpassingssysteem" },
          { en: "System that adapts to radio signals", es: "Sistema que se adapta a señales de radio", de: "System das sich an Funksignale anpasst", nl: "Systeem dat zich aanpast aan radiosignalen" }
        ],
        correct: 0,
        explanation: {
          en: "Adaptive cruise control uses radar and cameras to detect vehicles ahead and automatically accelerates or brakes to maintain a preset following distance, reducing driver fatigue.",
          es: "El control de crucero adaptativo usa radar y cámaras para detectar vehículos adelante y automáticamente acelera o frena para mantener distancia de seguimiento preestablecida, reduciendo fatiga del conductor.",
          de: "Adaptiver Tempomat nutzt Radar und Kameras um vorausfahrende Fahrzeuge zu erkennen und beschleunigt oder bremst automatisch um voreingestellten Folgeabstand zu halten, reduziert Fahrermüdigkeit.",
          nl: "Adaptieve cruise control gebruikt radar en camera's om voertuigen vooruit te detecteren en versnelt of remt automatisch om vooraf ingestelde volgafstand te behouden, vermindert bestuurdervermoeidheid."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
