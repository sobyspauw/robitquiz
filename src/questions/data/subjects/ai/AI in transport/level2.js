// AI in transport Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "AI in Transport Level 2",
          "es": "IA en Transporte Nivel 2",
          "de": "KI im Transport Stufe 2",
          "nl": "AI in Transport Level 2"
    },
    questions: [
      {
        question: {
                  "en": "What type of sensor is commonly used in autonomous vehicles to measure distance?",
                  "es": "¿Qué tipo de sensor se usa comúnmente en vehículos autónomos para medir distancia?",
                  "de": "Welcher Sensortyp wird häufig in autonomen Fahrzeugen zur Entfernungsmessung verwendet?",
                  "nl": "Welk type sensor wordt vaak gebruikt in autonome voertuigen om afstand te meten?"
        },
        options: [
        {
                  "en": "Thermometer",
                  "es": "Termómetro",
                  "de": "Thermometer",
                  "nl": "Thermometer"
        },
        {
                  "en": "LiDAR (Light Detection and Ranging)",
                  "es": "LiDAR (Detección y Medición por Luz)",
                  "de": "LiDAR (Lichtdetektion und -entfernung)",
                  "nl": "LiDAR (Light Detection and Ranging)"
        },
        {
                  "en": "Radio antenna",
                  "es": "Antena de radio",
                  "de": "Radioantenne",
                  "nl": "Radio-antenne"
        },
        {
                  "en": "Speedometer",
                  "es": "Velocímetro",
                  "de": "Tachometer",
                  "nl": "Snelheidsmeter"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "LiDAR uses laser beams to create detailed 3D maps of the environment, measuring precise distances to objects.",
                  "es": "LiDAR usa rayos láser para crear mapas 3D detallados del entorno, midiendo distancias precisas a objetos.",
                  "de": "LiDAR nutzt Laserstrahlen um detaillierte 3D-Karten der Umgebung zu erstellen und präzise Entfernungen zu Objekten zu messen.",
                  "nl": "LiDAR gebruikt laserstralen om gedetailleerde 3D-kaarten van de omgeving te maken en precieze afstanden tot objecten te meten."
        }
      },
      {
        question: {
                  "en": "What does 'autonomous driving level 3' mean?",
                  "es": "¿Qué significa 'nivel 3 de conducción autónoma'?",
                  "de": "Was bedeutet 'Autonomes Fahren Level 3'?",
                  "nl": "Wat betekent 'autonoom rijden level 3'?"
        },
        options: [
        {
                  "en": "No automation at all",
                  "es": "Sin automatización en absoluto",
                  "de": "Überhaupt keine Automatisierung",
                  "nl": "Helemaal geen automatisering"
        },
        {
                  "en": "Conditional automation - car can drive itself but human must be ready to take over",
                  "es": "Automatización condicional - el coche puede conducirse solo pero el humano debe estar listo para tomar el control",
                  "de": "Bedingte Automatisierung - Auto kann selbst fahren aber Mensch muss bereit sein zu übernehmen",
                  "nl": "Voorwaardelijke automatisering - auto kan zelf rijden maar mens moet klaar zijn om over te nemen"
        },
        {
                  "en": "Full automation in all conditions",
                  "es": "Automatización completa en todas las condiciones",
                  "de": "Vollautomatisierung unter allen Bedingungen",
                  "nl": "Volledige automatisering onder alle omstandigheden"
        },
        {
                  "en": "Only parking assistance",
                  "es": "Solo asistencia de estacionamiento",
                  "de": "Nur Parkassistenz",
                  "nl": "Alleen parkeerhulp"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Level 3 means the car handles driving tasks but requires human attention and readiness to intervene when needed.",
                  "es": "Nivel 3 significa que el coche maneja tareas de conducción pero requiere atención humana y preparación para intervenir cuando sea necesario.",
                  "de": "Level 3 bedeutet dass das Auto Fahraufgaben übernimmt aber menschliche Aufmerksamkeit und Bereitschaft zum Eingreifen erfordert.",
                  "nl": "Level 3 betekent dat de auto rijtaken overneemt maar menselijke aandacht en bereidheid om in te grijpen vereist."
        }
      },
      {
        question: {
                  "en": "What is 'computer vision' in autonomous vehicles?",
                  "es": "¿Qué es la 'visión por computadora' en vehículos autónomos?",
                  "de": "Was ist 'Computer Vision' in autonomen Fahrzeugen?",
                  "nl": "Wat is 'computer vision' in autonome voertuigen?"
        },
        options: [
        {
                  "en": "AI system that interprets visual information from cameras",
                  "es": "Sistema IA que interpreta información visual de cámaras",
                  "de": "KI-System das visuelle Informationen von Kameras interpretiert",
                  "nl": "AI-systeem dat visuele informatie van camera's interpreteert"
        },
        {
                  "en": "GPS navigation system",
                  "es": "Sistema de navegación GPS",
                  "de": "GPS-Navigationssystem",
                  "nl": "GPS-navigatiesysteem"
        },
        {
                  "en": "Computer screen in the dashboard",
                  "es": "Pantalla de computadora en el tablero",
                  "de": "Computerbildschirm im Armaturenbrett",
                  "nl": "Computerscherm in het dashboard"
        },
        {
                  "en": "Backup camera display",
                  "es": "Pantalla de cámara trasera",
                  "de": "Rückfahrkamera-Display",
                  "nl": "Achteruitrijcamera display"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Computer vision enables cars to recognize objects, read signs, detect lanes, and understand their visual environment.",
                  "es": "La visión por computadora permite a los coches reconocer objetos, leer señales, detectar carriles y entender su entorno visual.",
                  "de": "Computer Vision ermöglicht Autos Objekte zu erkennen, Schilder zu lesen, Fahrspuren zu erkennen und ihre visuelle Umgebung zu verstehen.",
                  "nl": "Computer vision stelt auto's in staat objecten te herkennen, borden te lezen, rijstroken te detecteren en hun visuele omgeving te begrijpen."
        }
      },
      {
        question: {
                  "en": "What is predictive maintenance in transportation?",
                  "es": "¿Qué es el mantenimiento predictivo en transporte?",
                  "de": "Was ist vorausschauende Wartung im Transport?",
                  "nl": "Wat is voorspellend onderhoud in transport?"
        },
        options: [
        {
                  "en": "Fixing vehicles after they break",
                  "es": "Reparar vehículos después de averiarse",
                  "de": "Fahrzeuge reparieren nachdem sie kaputt sind",
                  "nl": "Voertuigen repareren nadat ze kapot zijn"
        },
        {
                  "en": "Checking vehicles every month",
                  "es": "Revisar vehículos cada mes",
                  "de": "Fahrzeuge jeden Monat überprüfen",
                  "nl": "Voertuigen elke maand controleren"
        },
        {
                  "en": "Only visual inspection",
                  "es": "Solo inspección visual",
                  "de": "Nur visuelle Inspektion",
                  "nl": "Alleen visuele inspectie"
        },
        {
                  "en": "Using AI to predict when vehicles need maintenance before they break down",
                  "es": "Usar IA para predecir cuándo los vehículos necesitan mantenimiento antes de averiarse",
                  "de": "KI nutzen um vorherzusagen wann Fahrzeuge Wartung benötigen bevor sie kaputt gehen",
                  "nl": "AI gebruiken om te voorspellen wanneer voertuigen onderhoud nodig hebben voordat ze kapot gaan"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI analyzes sensor data to detect early signs of wear and schedule maintenance, preventing unexpected breakdowns.",
                  "es": "La IA analiza datos de sensores para detectar signos tempranos de desgaste y programar mantenimiento, previniendo averías inesperadas.",
                  "de": "KI analysiert Sensordaten um frühe Verschleißzeichen zu erkennen und Wartung zu planen, verhindert unerwartete Ausfälle.",
                  "nl": "AI analyseert sensordata om vroege tekenen van slijtage te detecteren en onderhoud in te plannen, waardoor onverwachte storingen worden voorkomen."
        }
      },
      {
        question: {
                  "en": "What is dynamic route planning in smart transportation?",
                  "es": "¿Qué es la planificación dinámica de rutas en transporte inteligente?",
                  "de": "Was ist dynamische Routenplanung im intelligenten Transport?",
                  "nl": "Wat is dynamische routeplanning in slim transport?"
        },
        options: [
        {
                  "en": "Fixed routes that never change",
                  "es": "Rutas fijas que nunca cambian",
                  "de": "Feste Routen die sich nie ändern",
                  "nl": "Vaste routes die nooit veranderen"
        },
        {
                  "en": "AI adjusting routes in real-time based on traffic conditions",
                  "es": "IA ajustando rutas en tiempo real basándose en condiciones de tráfico",
                  "de": "KI die Routen in Echtzeit basierend auf Verkehrsbedingungen anpasst",
                  "nl": "AI die routes in realtime aanpast op basis van verkeersomstandigheden"
        },
        {
                  "en": "Planning routes once per day",
                  "es": "Planificar rutas una vez al día",
                  "de": "Routen einmal pro Tag planen",
                  "nl": "Routes één keer per dag plannen"
        },
        {
                  "en": "Using only highway routes",
                  "es": "Usar solo rutas de autopista",
                  "de": "Nur Autobahnrouten verwenden",
                  "nl": "Alleen snelwegroutes gebruiken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dynamic routing uses live traffic data, weather conditions, and incidents to continuously optimize travel paths.",
                  "es": "El enrutamiento dinámico usa datos de tráfico en vivo, condiciones climáticas e incidentes para optimizar continuamente rutas de viaje.",
                  "de": "Dynamisches Routing nutzt Live-Verkehrsdaten, Wetterbedingungen und Vorfälle um Reisewege kontinuierlich zu optimieren.",
                  "nl": "Dynamische routering gebruikt live verkeersdata, weersomstandigheden en incidenten om reispaden continu te optimaliseren."
        }
      },
      {
        question: {
                  "en": "What is the purpose of ultrasonic sensors in vehicles?",
                  "es": "¿Cuál es el propósito de los sensores ultrasónicos en vehículos?",
                  "de": "Was ist der Zweck von Ultraschallsensoren in Fahrzeugen?",
                  "nl": "Wat is het doel van ultrasone sensoren in voertuigen?"
        },
        options: [
        {
                  "en": "Clean the vehicle exterior",
                  "es": "Limpiar el exterior del vehículo",
                  "de": "Fahrzeugaußenseite reinigen",
                  "nl": "Buitenkant van voertuig schoonmaken"
        },
        {
                  "en": "Detect nearby objects during parking and low-speed maneuvers",
                  "es": "Detectar objetos cercanos durante estacionamiento y maniobras a baja velocidad",
                  "de": "Nahe Objekte während Parken und langsamen Manövern erkennen",
                  "nl": "Nabije objecten detecteren tijdens parkeren en lage snelheid manoeuvres"
        },
        {
                  "en": "Play music through sound waves",
                  "es": "Reproducir música a través de ondas sonoras",
                  "de": "Musik über Schallwellen abspielen",
                  "nl": "Muziek afspelen door geluidsgolven"
        },
        {
                  "en": "Adjust engine temperature",
                  "es": "Ajustar temperatura del motor",
                  "de": "Motortemperatur einstellen",
                  "nl": "Motortemperatuur aanpassen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Ultrasonic sensors emit high-frequency sound waves and measure the time for echoes to return, detecting objects within short range for parking assistance.",
                  "es": "Los sensores ultrasónicos emiten ondas sonoras de alta frecuencia y miden el tiempo para que los ecos regresen, detectando objetos a corta distancia para asistencia de estacionamiento.",
                  "de": "Ultraschallsensoren senden hochfrequente Schallwellen aus und messen die Zeit für Echos zurückzukehren, erkennen Objekte in kurzer Reichweite für Parkassistenz.",
                  "nl": "Ultrasone sensoren zenden hoogfrequente geluidsgolven uit en meten de tijd voor echo's om terug te keren, detecteren objecten binnen korte afstand voor parkeerhulp."
        }
      },
      {
        question: {
                  "en": "What does ADAS stand for in automotive technology?",
                  "es": "¿Qué significa ADAS en tecnología automotriz?",
                  "de": "Wofür steht ADAS in der Automobiltechnologie?",
                  "nl": "Waar staat ADAS voor in automotive technologie?"
        },
        options: [
        {
                  "en": "Advanced Data Analysis System",
                  "es": "Sistema Avanzado de Análisis de Datos",
                  "de": "Fortschrittliches Datenanalysesystem",
                  "nl": "Geavanceerd Data Analyse Systeem"
        },
        {
                  "en": "Automated Driving Analysis Software",
                  "es": "Software de Análisis de Conducción Automatizada",
                  "de": "Automatisierte Fahranalyse-Software",
                  "nl": "Geautomatiseerde Rijanalyse Software"
        },
        {
                  "en": "Automatic Door And Security",
                  "es": "Puerta Automática y Seguridad",
                  "de": "Automatische Tür und Sicherheit",
                  "nl": "Automatische Deur en Beveiliging"
        },
        {
                  "en": "Advanced Driver Assistance Systems",
                  "es": "Sistemas Avanzados de Asistencia al Conductor",
                  "de": "Fortschrittliche Fahrerassistenzsysteme",
                  "nl": "Geavanceerde Bestuurder Assistentie Systemen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "ADAS encompasses various AI-powered safety features like collision avoidance, lane departure warning, and adaptive cruise control to assist drivers.",
                  "es": "ADAS abarca varias características de seguridad con IA como evitación de colisiones, advertencia de salida de carril y control de crucero adaptativo para asistir conductores.",
                  "de": "ADAS umfasst verschiedene KI-gestützte Sicherheitsfeatures wie Kollisionsvermeidung, Spurverlassenswarnung und adaptiver Tempomat zur Fahrerunterstützung.",
                  "nl": "ADAS omvat verschillende AI-aangedreven veiligheidsfeatures zoals botsingvermijding, rijstrook verlaten waarschuwing en adaptieve cruise control om bestuurders te helpen."
        }
      },
      {
        question: {
                  "en": "How does machine learning improve traffic signal timing?",
                  "es": "¿Cómo mejora el aprendizaje automático el tiempo de los semáforos?",
                  "de": "Wie verbessert maschinelles Lernen die Ampelzeiten?",
                  "nl": "Hoe verbetert machine learning verkeerslicht timing?"
        },
        options: [
        {
                  "en": "By adding more traffic lights to intersections",
                  "es": "Agregando más semáforos a las intersecciones",
                  "de": "Durch Hinzufügen weiterer Ampeln zu Kreuzungen",
                  "nl": "Door meer verkeerslichten toe te voegen aan kruispunten"
        },
        {
                  "en": "By increasing the brightness of signals",
                  "es": "Aumentando el brillo de las señales",
                  "de": "Durch Erhöhung der Helligkeit der Signale",
                  "nl": "Door de helderheid van signalen te verhogen"
        },
        {
                  "en": "By learning from traffic patterns and optimizing signal phases automatically",
                  "es": "Aprendiendo de patrones de tráfico y optimizando fases de señal automáticamente",
                  "de": "Durch Lernen von Verkehrsmustern und automatische Optimierung der Signalphasen",
                  "nl": "Door te leren van verkeerspatronen en signalfasen automatisch te optimaliseren"
        },
        {
                  "en": "By making lights change colors faster",
                  "es": "Haciendo que las luces cambien de color más rápido",
                  "de": "Durch schnelleres Farbwechseln der Lichter",
                  "nl": "Door lichten sneller van kleur te laten veranderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Machine learning algorithms analyze historical and real-time traffic data to predict optimal timing patterns, reducing wait times and improving traffic flow efficiency.",
                  "es": "Los algoritmos de aprendizaje automático analizan datos de tráfico históricos y en tiempo real para predecir patrones de tiempo óptimos, reduciendo tiempos de espera y mejorando eficiencia del flujo de tráfico.",
                  "de": "Maschinelle Lernalgorithmen analysieren historische und Echtzeitverkehrsdaten um optimale Zeitpunktmuster vorherzusagen, reduzieren Wartezeiten und verbessern Verkehrsflusseffizienz.",
                  "nl": "Machine learning algoritmes analyseren historische en real-time verkeersdata om optimale timing patronen te voorspellen, waardoor wachttijden worden verminderd en verkeersstroom efficiëntie wordt verbeterd."
        }
      },
      {
        question: {
                  "en": "What is sensor fusion in autonomous vehicle technology?",
                  "es": "¿Qué es la fusión de sensores en tecnología de vehículos autónomos?",
                  "de": "Was ist Sensorfusion in der Technologie autonomer Fahrzeuge?",
                  "nl": "Wat is sensor fusion in autonome voertuig technologie?"
        },
        options: [
        {
                  "en": "Welding sensors together physically",
                  "es": "Soldar sensores juntos físicamente",
                  "de": "Sensoren physisch zusammenschweißen",
                  "nl": "Sensoren fysiek aan elkaar lassen"
        },
        {
                  "en": "Using only one type of sensor",
                  "es": "Usar solo un tipo de sensor",
                  "de": "Nur einen Sensortyp verwenden",
                  "nl": "Slechts één type sensor gebruiken"
        },
        {
                  "en": "Replacing broken sensors automatically",
                  "es": "Reemplazar sensores rotos automáticamente",
                  "de": "Kaputte Sensoren automatisch ersetzen",
                  "nl": "Kapotte sensoren automatisch vervangen"
        },
        {
                  "en": "Combining data from multiple sensors to create a complete understanding of the environment",
                  "es": "Combinar datos de múltiples sensores para crear una comprensión completa del entorno",
                  "de": "Daten von mehreren Sensoren kombinieren um ein vollständiges Umgebungsverständnis zu schaffen",
                  "nl": "Data van meerdere sensoren combineren om een volledig begrip van de omgeving te creëren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sensor fusion integrates data from cameras, radar, LiDAR, and other sensors to provide redundancy and create a more accurate, reliable perception system.",
                  "es": "La fusión de sensores integra datos de cámaras, radar, LiDAR y otros sensores para proporcionar redundancia y crear un sistema de percepción más preciso y confiable.",
                  "de": "Sensorfusion integriert Daten von Kameras, Radar, LiDAR und anderen Sensoren um Redundanz zu bieten und ein genaueres, zuverlässigeres Wahrnehmungssystem zu schaffen.",
                  "nl": "Sensor fusion integreert data van camera's, radar, LiDAR en andere sensoren om redundantie te bieden en een nauwkeuriger, betrouwbaarder perceptiesysteem te creëren."
        }
      },
      {
        question: {
                  "en": "What is object classification in computer vision for vehicles?",
                  "es": "¿Qué es la clasificación de objetos en visión por computadora para vehículos?",
                  "de": "Was ist Objektklassifizierung in Computer Vision für Fahrzeuge?",
                  "nl": "Wat is object classificatie in computer vision voor voertuigen?"
        },
        options: [
        {
                  "en": "Organizing files on the vehicle's computer",
                  "es": "Organizar archivos en la computadora del vehículo",
                  "de": "Dateien auf dem Fahrzeugcomputer organisieren",
                  "nl": "Bestanden op de voertuigcomputer organiseren"
        },
        {
                  "en": "Sorting vehicle parts by size",
                  "es": "Clasificar partes del vehículo por tamaño",
                  "de": "Fahrzeugteile nach Größe sortieren",
                  "nl": "Voertuigonderdelen op grootte sorteren"
        },
        {
                  "en": "Identifying and categorizing different objects like cars, pedestrians, and traffic signs",
                  "es": "Identificar y categorizar diferentes objetos como coches, peatones y señales de tráfico",
                  "de": "Verschiedene Objekte wie Autos, Fußgänger und Verkehrsschilder identifizieren und kategorisieren",
                  "nl": "Verschillende objecten zoals auto's, voetgangers en verkeersborden identificeren en categoriseren"
        },
        {
                  "en": "Arranging passengers by destination",
                  "es": "Organizar pasajeros por destino",
                  "de": "Passagiere nach Zielort ordnen",
                  "nl": "Passagiers op bestemming rangschikken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Object classification allows autonomous vehicles to recognize and respond appropriately to different elements in their environment, essential for safe navigation.",
                  "es": "La clasificación de objetos permite a vehículos autónomos reconocer y responder apropiadamente a diferentes elementos en su entorno, esencial para navegación segura.",
                  "de": "Objektklassifizierung ermöglicht autonomen Fahrzeugen verschiedene Elemente in ihrer Umgebung zu erkennen und angemessen zu reagieren, wesentlich für sichere Navigation.",
                  "nl": "Object classificatie stelt autonome voertuigen in staat verschillende elementen in hun omgeving te herkennen en er gepast op te reageren, essentieel voor veilige navigatie."
        }
      },
      {
        question: {
                  "en": "What is the difference between Level 2 and Level 3 autonomous driving?",
                  "es": "¿Cuál es la diferencia entre el nivel 2 y nivel 3 de conducción autónoma?",
                  "de": "Was ist der Unterschied zwischen Level 2 und Level 3 autonomem Fahren?",
                  "nl": "Wat is het verschil tussen Level 2 en Level 3 autonoom rijden?"
        },
        options: [
        {
                  "en": "Level 3 has fewer sensors than Level 2",
                  "es": "Nivel 3 tiene menos sensores que Nivel 2",
                  "de": "Level 3 hat weniger Sensoren als Level 2",
                  "nl": "Level 3 heeft minder sensoren dan Level 2"
        },
        {
                  "en": "Level 2 requires constant driver monitoring, Level 3 allows driver to look away under certain conditions",
                  "es": "Nivel 2 requiere monitoreo constante del conductor, Nivel 3 permite al conductor apartar la vista bajo ciertas condiciones",
                  "de": "Level 2 erfordert ständige Fahrerüberwachung, Level 3 erlaubt dem Fahrer unter bestimmten Bedingungen wegzuschauen",
                  "nl": "Level 2 vereist constante bestuurder monitoring, Level 3 staat bestuurder toe weg te kijken onder bepaalde omstandigheden"
        },
        {
                  "en": "Level 2 works only at night, Level 3 only during day",
                  "es": "Nivel 2 funciona solo de noche, Nivel 3 solo durante el día",
                  "de": "Level 2 funktioniert nur nachts, Level 3 nur tagsüber",
                  "nl": "Level 2 werkt alleen 's nachts, Level 3 alleen overdag"
        },
        {
                  "en": "Level 2 is faster than Level 3",
                  "es": "Nivel 2 es más rápido que Nivel 3",
                  "de": "Level 2 ist schneller als Level 3",
                  "nl": "Level 2 is sneller dan Level 3"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Level 2 systems assist with steering and acceleration but require full driver attention, while Level 3 can handle driving tasks independently under specific conditions but need driver readiness to intervene.",
                  "es": "Los sistemas Nivel 2 asisten con dirección y aceleración pero requieren atención completa del conductor, mientras Nivel 3 puede manejar tareas de conducción independientemente bajo condiciones específicas pero necesita preparación del conductor para intervenir.",
                  "de": "Level 2 Systeme helfen bei Lenkung und Beschleunigung aber erfordern volle Fahreraufmerksamkeit, während Level 3 Fahraufgaben unter spezifischen Bedingungen unabhängig bewältigen kann aber Fahrerbereitschaft zum Eingreifen benötigt.",
                  "nl": "Level 2 systemen helpen met sturen en accelereren maar vereisen volledige bestuurder aandacht, terwijl Level 3 rijtaken onafhankelijk kan afhandelen onder specifieke omstandigheden maar bestuurder gereedheid voor ingrijpen nodig heeft."
        }
      },
      {
        question: {
                  "en": "How do smart intersections use AI to improve traffic flow?",
                  "es": "¿Cómo usan IA las intersecciones inteligentes para mejorar el flujo de tráfico?",
                  "de": "Wie nutzen intelligente Kreuzungen KI zur Verbesserung des Verkehrsflusses?",
                  "nl": "Hoe gebruiken slimme kruispunten AI om verkeersstroom te verbeteren?"
        },
        options: [
        {
                  "en": "By detecting vehicle presence and adjusting signal timing in real-time",
                  "es": "Detectando presencia de vehículos y ajustando tiempo de señal en tiempo real",
                  "de": "Durch Erkennung von Fahrzeugpräsenz und Anpassung der Signalzeiten in Echtzeit",
                  "nl": "Door voertuigaanwezigheid te detecteren en signaaltiming in real-time aan te passen"
        },
        {
                  "en": "By painting the intersection with bright colors",
                  "es": "Pintando la intersección con colores brillantes",
                  "de": "Durch Bemalen der Kreuzung mit hellen Farben",
                  "nl": "Door het kruispunt te schilderen met heldere kleuren"
        },
        {
                  "en": "By playing music at intersections",
                  "es": "Reproduciendo música en intersecciones",
                  "de": "Durch Musikwiedergabe an Kreuzungen",
                  "nl": "Door muziek af te spelen bij kruispunten"
        },
        {
                  "en": "By making all lights flash simultaneously",
                  "es": "Haciendo que todas las luces parpadeen simultáneamente",
                  "de": "Durch gleichzeitiges Blinken aller Lichter",
                  "nl": "Door alle lichten tegelijkertijd te laten knipperen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Smart intersections use cameras and sensors to monitor traffic in all directions and dynamically adjust traffic light timing to minimize congestion and wait times.",
                  "es": "Las intersecciones inteligentes usan cámaras y sensores para monitorear tráfico en todas direcciones y ajustar dinámicamente el tiempo de semáforos para minimizar congestión y tiempos de espera.",
                  "de": "Intelligente Kreuzungen nutzen Kameras und Sensoren zur Verkehrsüberwachung in alle Richtungen und passen dynamisch Ampelzeiten an um Staus und Wartezeiten zu minimieren.",
                  "nl": "Slimme kruispunten gebruiken camera's en sensoren om verkeer in alle richtingen te monitoren en passen dynamisch verkeerslicht timing aan om opstoppingen en wachttijden te minimaliseren."
        }
      },
      {
        question: {
                  "en": "What is edge detection in vehicle computer vision systems?",
                  "es": "¿Qué es la detección de bordes en sistemas de visión por computadora de vehículos?",
                  "de": "Was ist Kantenerkennung in Fahrzeug-Computer-Vision-Systemen?",
                  "nl": "Wat is rand detectie in voertuig computer vision systemen?"
        },
        options: [
        {
                  "en": "Identifying boundaries between different objects and surfaces in camera images",
                  "es": "Identificar límites entre diferentes objetos y superficies en imágenes de cámara",
                  "de": "Grenzen zwischen verschiedenen Objekten und Oberflächen in Kamerabildern identifizieren",
                  "nl": "Grenzen tussen verschillende objecten en oppervlakken in camera beelden identificeren"
        },
        {
                  "en": "Detecting sharp turns in the route",
                  "es": "Detectar curvas cerradas en la ruta",
                  "de": "Scharfe Kurven in der Route erkennen",
                  "nl": "Scherpe bochten in de route detecteren"
        },
        {
                  "en": "Finding the edge of the road only",
                  "es": "Encontrar solo el borde de la carretera",
                  "de": "Nur den Straßenrand finden",
                  "nl": "Alleen de rand van de weg vinden"
        },
        {
                  "en": "Monitoring the vehicle's exterior edges",
                  "es": "Monitorear los bordes exteriores del vehículo",
                  "de": "Äußeren Fahrzeugränder überwachen",
                  "nl": "Buitenranden van het voertuig monitoren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Edge detection algorithms process camera images to identify object boundaries, lane markings, and structural features, helping vehicles understand their visual environment.",
                  "es": "Los algoritmos de detección de bordes procesan imágenes de cámara para identificar límites de objetos, marcas de carril y características estructurales, ayudando a vehículos entender su entorno visual.",
                  "de": "Kantenerkennungsalgorithmen verarbeiten Kamerabilder um Objektgrenzen, Fahrbahnmarkierungen und strukturelle Merkmale zu identifizieren, helfen Fahrzeugen ihre visuelle Umgebung zu verstehen.",
                  "nl": "Rand detectie algoritmes verwerken camera beelden om objectgrenzen, rijstrook markeringen en structurele kenmerken te identificeren, waardoor voertuigen hun visuele omgeving kunnen begrijpen."
        }
      },
      {
        question: {
                  "en": "What role does AI play in vehicle-to-infrastructure (V2I) communication?",
                  "es": "¿Qué papel juega la IA en la comunicación vehículo-infraestructura (V2I)?",
                  "de": "Welche Rolle spielt KI in der Fahrzeug-zu-Infrastruktur (V2I) Kommunikation?",
                  "nl": "Welke rol speelt AI in voertuig-naar-infrastructuur (V2I) communicatie?"
        },
        options: [
        {
                  "en": "Designing traffic signs",
                  "es": "Diseñar señales de tráfico",
                  "de": "Verkehrsschilder entwerfen",
                  "nl": "Verkeersborden ontwerpen"
        },
        {
                  "en": "Installing vehicle engines",
                  "es": "Instalar motores de vehículos",
                  "de": "Fahrzeugmotoren installieren",
                  "nl": "Voertuigmotoren installeren"
        },
        {
                  "en": "Processing and interpreting data exchanged between vehicles and road infrastructure",
                  "es": "Procesar e interpretar datos intercambiados entre vehículos e infraestructura vial",
                  "de": "Verarbeitung und Interpretation von Daten zwischen Fahrzeugen und Straßeninfrastruktur",
                  "nl": "Data verwerken en interpreteren die wordt uitgewisseld tussen voertuigen en weginfrastructuur"
        },
        {
                  "en": "Building new roads automatically",
                  "es": "Construir nuevas carreteras automáticamente",
                  "de": "Neue Straßen automatisch bauen",
                  "nl": "Automatisch nieuwe wegen bouwen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "AI enables vehicles to understand and act on information from traffic lights, road signs, and infrastructure sensors, optimizing routes and improving safety through intelligent communication.",
                  "es": "La IA permite a vehículos entender y actuar sobre información de semáforos, señales viales y sensores de infraestructura, optimizando rutas y mejorando seguridad através comunicación inteligente.",
                  "de": "KI ermöglicht Fahrzeugen Informationen von Ampeln, Straßenschildern und Infrastruktursensoren zu verstehen und darauf zu reagieren, optimiert Routen und verbessert Sicherheit durch intelligente Kommunikation.",
                  "nl": "AI stelt voertuigen in staat informatie van verkeerslichten, wegborden en infrastructuur sensoren te begrijpen en erop te handelen, optimaliseert routes en verbetert veiligheid door intelligente communicatie."
        }
      },
      {
        question: {
                  "en": "How does AI help with parking space detection in smart cities?",
                  "es": "¿Cómo ayuda la IA con la detección de espacios de estacionamiento en ciudades inteligentes?",
                  "de": "Wie hilft KI bei der Parkplatz-Erkennung in Smart Cities?",
                  "nl": "Hoe helpt AI met parkeerplaats detectie in slimme steden?"
        },
        options: [
        {
                  "en": "Adding more parking attendants",
                  "es": "Agregar más asistentes de estacionamiento",
                  "de": "Mehr Parkwächter hinzufügen",
                  "nl": "Meer parkeer assistenten toevoegen"
        },
        {
                  "en": "Using computer vision and sensors to identify empty parking spots and guide drivers",
                  "es": "Usando visión por computadora y sensores para identificar espacios de estacionamiento vacíos y guiar conductores",
                  "de": "Computer Vision und Sensoren nutzen um leere Parkplätze zu identifizieren und Fahrer zu führen",
                  "nl": "Computer vision en sensoren gebruiken om lege parkeerplaatsen te identificeren en bestuurders te begeleiden"
        },
        {
                  "en": "Making parking meters taller",
                  "es": "Hacer parquímetros más altos",
                  "de": "Parkuhren höher machen",
                  "nl": "Parkeermeters hoger maken"
        },
        {
                  "en": "Painting parking lines brighter",
                  "es": "Pintar líneas de estacionamiento más brillantes",
                  "de": "Parklinien heller malen",
                  "nl": "Parkeerlijnen helderder schilderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI-powered parking systems use cameras and IoT sensors to continuously monitor parking spaces, creating real-time maps of availability and directing drivers to open spots.",
                  "es": "Los sistemas de estacionamiento con IA usan cámaras y sensores IoT para monitorear continuamente espacios de estacionamiento, creando mapas en tiempo real de disponibilidad y dirigiendo conductores a lugares abiertos.",
                  "de": "KI-gestützte Parksysteme nutzen Kameras und IoT-Sensoren zur kontinuierlichen Parkplatzüberwachung, erstellen Echtzeitkarten der Verfügbarkeit und leiten Fahrer zu freien Plätzen.",
                  "nl": "AI-aangedreven parkeersystemen gebruiken camera's en IoT sensoren om parkeerplaatsen continu te monitoren, creëren real-time kaarten van beschikbaarheid en leiden bestuurders naar vrije plekken."
        }
      },
      {
        question: {
                  "en": "What is pattern recognition in autonomous vehicle AI?",
                  "es": "¿Qué es el reconocimiento de patrones en IA de vehículos autónomos?",
                  "de": "Was ist Mustererkennung in autonomer Fahrzeug-KI?",
                  "nl": "Wat is patroonherkenning in autonome voertuig AI?"
        },
        options: [
        {
                  "en": "Identifying carpet patterns in vehicle interiors",
                  "es": "Identificar patrones de alfombra en interiores de vehículos",
                  "de": "Teppichmuster in Fahrzeuginnenräumen identifizieren",
                  "nl": "Tapijt patronen in voertuig interieurs identificeren"
        },
        {
                  "en": "Recognizing vehicle license plate patterns",
                  "es": "Reconocer patrones de placas de vehículos",
                  "de": "Fahrzeug-Kennzeichenmuster erkennen",
                  "nl": "Voertuig kentekenpatronen herkennen"
        },
        {
                  "en": "AI ability to recognize recurring shapes, behaviors, and scenarios in the driving environment",
                  "es": "Capacidad IA para reconocer formas, comportamientos y escenarios recurrentes en el entorno de conducción",
                  "de": "KI-Fähigkeit wiederkehrende Formen, Verhaltensweisen und Szenarien in der Fahrumgebung zu erkennen",
                  "nl": "AI vermogen om terugkerende vormen, gedragingen en scenario's in de rijomgeving te herkennen"
        },
        {
                  "en": "Recognizing tire tread patterns only",
                  "es": "Reconocer solo patrones de banda de rodadura",
                  "de": "Nur Reifenprofil-Muster erkennen",
                  "nl": "Alleen banden profiel patronen herkennen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Pattern recognition enables vehicles to identify common traffic situations, predict other drivers' behaviors, and recognize road signs, lane markings, and hazards consistently.",
                  "es": "El reconocimiento de patrones permite a vehículos identificar situaciones de tráfico comunes, predecir comportamientos de otros conductores y reconocer señales viales, marcas de carril y peligros consistentemente.",
                  "de": "Mustererkennung ermöglicht Fahrzeugen häufige Verkehrssituationen zu identifizieren, Verhalten anderer Fahrer vorherzusagen und Verkehrszeichen, Fahrbahnmarkierungen und Gefahren konsistent zu erkennen.",
                  "nl": "Patroonherkenning stelt voertuigen in staat algemene verkeerssituaties te identificeren, gedrag van andere bestuurders te voorspellen en verkeersborden, rijstrook markeringen en gevaren consistent te herkennen."
        }
      },
      {
        question: {
                  "en": "How does AI improve fuel efficiency in transportation systems?",
                  "es": "¿Cómo mejora la IA la eficiencia de combustible en sistemas de transporte?",
                  "de": "Wie verbessert KI die Kraftstoffeffizienz in Transportsystemen?",
                  "nl": "Hoe verbetert AI brandstofefficiëntie in transportsystemen?"
        },
        options: [
        {
                  "en": "By making engines larger",
                  "es": "Haciendo motores más grandes",
                  "de": "Durch größere Motoren",
                  "nl": "Door motoren groter te maken"
        },
        {
                  "en": "By adding more fuel tanks",
                  "es": "Agregando más tanques de combustible",
                  "de": "Durch Hinzufügen weiterer Kraftstofftanks",
                  "nl": "Door meer brandstoftanks toe te voegen"
        },
        {
                  "en": "By increasing vehicle weight",
                  "es": "Aumentando peso del vehículo",
                  "de": "Durch Erhöhung des Fahrzeuggewichts",
                  "nl": "Door voertuiggewicht te verhogen"
        },
        {
                  "en": "By optimizing routes, driving patterns, and vehicle coordination to reduce fuel consumption",
                  "es": "Optimizando rutas, patrones de conducción y coordinación de vehículos para reducir consumo de combustible",
                  "de": "Durch Optimierung von Routen, Fahrmustern und Fahrzeugkoordination zur Kraftstoffverbrauchsreduktion",
                  "nl": "Door routes, rijpatronen en voertuigcoördinatie te optimaliseren om brandstofverbruik te verminderen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI analyzes traffic conditions, topography, and vehicle characteristics to determine optimal speeds, routes, and driving behaviors that minimize fuel consumption and emissions.",
                  "es": "La IA analiza condiciones de tráfico, topografía y características del vehículo para determinar velocidades, rutas y comportamientos de conducción óptimos que minimizan consumo de combustible y emisiones.",
                  "de": "KI analysiert Verkehrsbedingungen, Topografie und Fahrzeugcharakteristika um optimale Geschwindigkeiten, Routen und Fahrverhalten zu bestimmen die Kraftstoffverbrauch und Emissionen minimieren.",
                  "nl": "AI analyseert verkeersomstandigheden, topografie en voertuigkarakteristieken om optimale snelheden, routes en rijgedrag te bepalen die brandstofverbruik en uitstoot minimaliseren."
        }
      },
      {
        question: {
                  "en": "What is real-time processing in autonomous vehicle systems?",
                  "es": "¿Qué es el procesamiento en tiempo real en sistemas de vehículos autónomos?",
                  "de": "Was ist Echtzeitverarbeitung in autonomen Fahrzeugsystemen?",
                  "nl": "Wat is real-time verwerking in autonome voertuigsystemen?"
        },
        options: [
        {
                  "en": "Instant analysis and response to sensor data for immediate driving decisions",
                  "es": "Análisis instantáneo y respuesta a datos de sensores para decisiones de conducción inmediatas",
                  "de": "Sofortige Analyse und Reaktion auf Sensordaten für unmittelbare Fahrentscheidungen",
                  "nl": "Onmiddellijke analyse en reactie op sensordata voor directe rijbeslissingen"
        },
        {
                  "en": "Processing information when vehicle is parked",
                  "es": "Procesar información cuando vehículo está estacionado",
                  "de": "Informationen verarbeiten wenn Fahrzeug geparkt ist",
                  "nl": "Informatie verwerken wanneer voertuig geparkeerd staat"
        },
        {
                  "en": "Analyzing data once per hour",
                  "es": "Analizar datos una vez por hora",
                  "de": "Daten einmal pro Stunde analysieren",
                  "nl": "Data één keer per uur analyseren"
        },
        {
                  "en": "Processing data only during daylight hours",
                  "es": "Procesar datos solo durante horas diurnas",
                  "de": "Datenverarbeitung nur bei Tageslicht",
                  "nl": "Data alleen verwerken tijdens daglichturen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Real-time processing enables autonomous vehicles to make split-second decisions by continuously analyzing sensor input and responding to changing road conditions instantly.",
                  "es": "El procesamiento en tiempo real permite a vehículos autónomos tomar decisiones en fracciones de segundo analizando continuamente entrada de sensores y respondiendo a condiciones cambiantes de carretera instantáneamente.",
                  "de": "Echtzeitverarbeitung ermöglicht autonomen Fahrzeugen Sekundenbruchteile Entscheidungen zu treffen durch kontinuierliche Analyse von Sensoreingaben und sofortige Reaktion auf sich ändernde Straßenbedingungen.",
                  "nl": "Real-time verwerking stelt autonome voertuigen in staat om seconde beslissingen te nemen door continu sensorinput te analyseren en onmiddellijk te reageren op veranderende wegomstandigheden."
        }
      },
      {
        question: {
                  "en": "How do AI systems handle traffic sign recognition?",
                  "es": "¿Cómo manejan los sistemas IA el reconocimiento de señales de tráfico?",
                  "de": "Wie handhaben KI-Systeme Verkehrszeichenerkennung?",
                  "nl": "Hoe gaan AI-systemen om met verkeersbordenherkenning?"
        },
        options: [
        {
                  "en": "Reading text on signs manually",
                  "es": "Leyendo texto en señales manualmente",
                  "de": "Text auf Schildern manuell lesen",
                  "nl": "Tekst op borden handmatig lezen"
        },
        {
                  "en": "Only recognizing red colored signs",
                  "es": "Solo reconociendo señales de color rojo",
                  "de": "Nur rote Schilder erkennen",
                  "nl": "Alleen rode borden herkennen"
        },
        {
                  "en": "Ignoring all traffic signs completely",
                  "es": "Ignorando todas las señales de tráfico completamente",
                  "de": "Alle Verkehrszeichen komplett ignorieren",
                  "nl": "Alle verkeersborden volledig negeren"
        },
        {
                  "en": "Using computer vision to detect, classify, and interpret traffic signs from camera images",
                  "es": "Usando visión por computadora para detectar, clasificar e interpretar señales de tráfico de imágenes de cámara",
                  "de": "Computer Vision nutzen um Verkehrszeichen aus Kamerabildern zu erkennen, klassifizieren und interpretieren",
                  "nl": "Computer vision gebruiken om verkeersborden te detecteren, classificeren en interpreteren van camera beelden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "AI traffic sign recognition systems use trained neural networks to identify sign shapes, colors, symbols, and text, ensuring vehicles comply with traffic regulations automatically.",
                  "es": "Los sistemas IA de reconocimiento de señales de tráfico usan redes neuronales entrenadas para identificar formas, colores, símbolos y texto de señales, asegurando que vehículos cumplan regulaciones de tráfico automáticamente.",
                  "de": "KI-Verkehrszeichenerkennungssysteme nutzen trainierte neuronale Netzwerke um Schilderformen, Farben, Symbole und Text zu identifizieren, stellen sicher dass Fahrzeuge Verkehrsregeln automatisch befolgen.",
                  "nl": "AI verkeersbordenherkenning systemen gebruiken getrainde neurale netwerken om bordvormen, kleuren, symbolen en tekst te identificeren, zorgen ervoor dat voertuigen automatisch aan verkeersregels voldoen."
        }
      },
      {
        question: {
                  "en": "What is adaptive cruise control (ACC) in modern vehicles?",
                  "es": "¿Qué es el control de crucero adaptativo (ACC) en vehículos modernos?",
                  "de": "Was ist adaptiver Tempomat (ACC) in modernen Fahrzeugen?",
                  "nl": "Wat is adaptieve cruise control (ACC) in moderne voertuigen?"
        },
        options: [
        {
                  "en": "Manual speed adjustment system",
                  "es": "Sistema de ajuste manual de velocidad",
                  "de": "Manuelles Geschwindigkeitseinstellungssystem",
                  "nl": "Handmatig snelheidsaanpassingssysteem"
        },
        {
                  "en": "System that adapts to radio signals",
                  "es": "Sistema que se adapta a señales de radio",
                  "de": "System das sich an Funksignale anpasst",
                  "nl": "Systeem dat zich aanpast aan radiosignalen"
        },
        {
                  "en": "AI system that automatically adjusts vehicle speed to maintain safe distance from vehicles ahead",
                  "es": "Sistema IA que ajusta automáticamente velocidad del vehículo para mantener distancia segura de vehículos adelante",
                  "de": "KI-System das Fahrzeuggeschwindigkeit automatisch anpasst um sicheren Abstand zu vorausfahrenden Fahrzeugen zu halten",
                  "nl": "AI-systeem dat voertuigsnelheid automatisch aanpast om veilige afstand tot voertuigen vooruit te behouden"
        },
        {
                  "en": "Cruise control that only works at high speeds",
                  "es": "Control de crucero que solo funciona a altas velocidades",
                  "de": "Tempomat der nur bei hohen Geschwindigkeiten funktioniert",
                  "nl": "Cruise control die alleen werkt bij hoge snelheden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adaptive cruise control uses radar and cameras to detect vehicles ahead and automatically accelerates or brakes to maintain a preset following distance, reducing driver fatigue.",
                  "es": "El control de crucero adaptativo usa radar y cámaras para detectar vehículos adelante y automáticamente acelera o frena para mantener distancia de seguimiento preestablecida, reduciendo fatiga del conductor.",
                  "de": "Adaptiver Tempomat nutzt Radar und Kameras um vorausfahrende Fahrzeuge zu erkennen und beschleunigt oder bremst automatisch um voreingestellten Folgeabstand zu halten, reduziert Fahrermüdigkeit.",
                  "nl": "Adaptieve cruise control gebruikt radar en camera's om voertuigen vooruit te detecteren en versnelt of remt automatisch om vooraf ingestelde volgafstand te behouden, vermindert bestuurdervermoeidheid."
        }
      },
      {
        question: {
                  "en": "What is path planning in autonomous vehicle navigation?",
                  "es": "¿Qué es la planificación de rutas en navegación de vehículos autónomos?",
                  "de": "Was ist Pfadplanung in der Navigation autonomer Fahrzeuge?",
                  "nl": "Wat is pad planning in autonome voertuig navigatie?"
        },
        options: [
        {
                  "en": "Planning parking lot layouts",
                  "es": "Planificar diseños de estacionamiento",
                  "de": "Parkplatz-Layouts planen",
                  "nl": "Parkeerplaats lay-outs plannen"
        },
        {
                  "en": "Designing road construction paths",
                  "es": "Diseñar rutas de construcción vial",
                  "de": "Straßenbau-Pfade entwerfen",
                  "nl": "Wegenbouw paden ontwerpen"
        },
        {
                  "en": "Creating walking paths for pedestrians",
                  "es": "Crear caminos peatonales para peatones",
                  "de": "Fußwege für Fußgänger erstellen",
                  "nl": "Wandelpaden voor voetgangers creëren"
        },
        {
                  "en": "AI calculating the optimal trajectory from current position to destination",
                  "es": "IA calculando la trayectoria óptima desde posición actual hasta destino",
                  "de": "KI berechnet optimale Trajektorie von aktueller Position zum Ziel",
                  "nl": "AI berekent optimale traject van huidige positie naar bestemming"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Path planning algorithms compute safe, efficient routes considering obstacles, traffic rules, and road conditions, continuously updating as the environment changes.",
                  "es": "Los algoritmos de planificación de rutas calculan rutas seguras y eficientes considerando obstáculos, reglas de tráfico y condiciones de carretera, actualizando continuamente mientras el entorno cambia.",
                  "de": "Pfadplanungsalgorithmen berechnen sichere, effiziente Routen unter Berücksichtigung von Hindernissen, Verkehrsregeln und Straßenbedingungen, aktualisieren kontinuierlich während sich Umgebung ändert.",
                  "nl": "Pad planning algoritmes berekenen veilige, efficiënte routes met inachtneming van obstakels, verkeersregels en wegomstandigheden, waarbij continu wordt bijgewerkt terwijl de omgeving verandert."
        }
      },
      {
        question: {
                  "en": "How does AI assist in fleet management for transportation companies?",
                  "es": "¿Cómo asiste la IA en gestión de flotas para empresas de transporte?",
                  "de": "Wie unterstützt KI beim Flottenmanagement für Transportunternehmen?",
                  "nl": "Hoe helpt AI bij vlootbeheer voor transportbedrijven?"
        },
        options: [
        {
                  "en": "Optimizing vehicle assignments, routes, and maintenance schedules to maximize efficiency",
                  "es": "Optimizando asignaciones de vehículos, rutas y horarios de mantenimiento para maximizar eficiencia",
                  "de": "Optimierung von Fahrzeugzuweisungen, Routen und Wartungsplänen zur Effizienzmaximierung",
                  "nl": "Optimaliseren van voertuigtoewijzingen, routes en onderhoudsschema's om efficiëntie te maximaliseren"
        },
        {
                  "en": "Painting fleet vehicles",
                  "es": "Pintar vehículos de flota",
                  "de": "Flottenfahrzeuge bemalen",
                  "nl": "Vlootvoertuigen schilderen"
        },
        {
                  "en": "Designing fleet logos",
                  "es": "Diseñar logos de flota",
                  "de": "Flottenlogos entwerfen",
                  "nl": "Vlootlogo's ontwerpen"
        },
        {
                  "en": "Hiring fleet drivers",
                  "es": "Contratar conductores de flota",
                  "de": "Flottenfahrer einstellen",
                  "nl": "Vlootbestuurders aannemen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI fleet management systems analyze usage patterns, driver behavior, vehicle health, and operational data to reduce costs, improve safety, and optimize logistics operations.",
                  "es": "Los sistemas de gestión de flotas con IA analizan patrones de uso, comportamiento del conductor, salud del vehículo y datos operacionales para reducir costos, mejorar seguridad y optimizar operaciones logísticas.",
                  "de": "KI-Flottenmanagement-Systeme analysieren Nutzungsmuster, Fahrerverhalten, Fahrzeugzustand und Betriebsdaten um Kosten zu reduzieren, Sicherheit zu verbessern und Logistikoperationen zu optimieren.",
                  "nl": "AI vlootbeheer systemen analyseren gebruikspatronen, bestuurdergedrag, voertuigconditie en operationele data om kosten te verminderen, veiligheid te verbeteren en logistieke operaties te optimaliseren."
        }
      },
      {
        question: {
                  "en": "What is simultaneous localization and mapping (SLAM) in autonomous vehicles?",
                  "es": "¿Qué es la localización y mapeo simultáneos (SLAM) en vehículos autónomos?",
                  "de": "Was ist simultane Lokalisierung und Kartierung (SLAM) in autonomen Fahrzeugen?",
                  "nl": "Wat is simultane lokalisatie en mapping (SLAM) in autonome voertuigen?"
        },
        options: [
        {
                  "en": "Building a map of surroundings while tracking the vehicle's position simultaneously",
                  "es": "Construir un mapa del entorno mientras rastrea posición del vehículo simultáneamente",
                  "de": "Karte der Umgebung erstellen während Fahrzeugposition gleichzeitig verfolgt wird",
                  "nl": "Een kaart van omgeving bouwen terwijl voertuigpositie gelijktijdig wordt gevolgd"
        },
        {
                  "en": "Slamming brakes in emergencies",
                  "es": "Frenar bruscamente en emergencias",
                  "de": "Notbremsung in Notfällen",
                  "nl": "Hard remmen in noodgevallen"
        },
        {
                  "en": "Locating vehicle service centers",
                  "es": "Localizar centros de servicio de vehículos",
                  "de": "Fahrzeugservicezentren lokalisieren",
                  "nl": "Voertuig service centers lokaliseren"
        },
        {
                  "en": "Mapping only pre-programmed routes",
                  "es": "Mapear solo rutas preprogramadas",
                  "de": "Nur vorprogrammierte Routen kartieren",
                  "nl": "Alleen voorgeprogrammeerde routes in kaart brengen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "SLAM enables autonomous vehicles to navigate unknown environments by creating real-time maps while determining their exact location within those maps using sensor data.",
                  "es": "SLAM permite a vehículos autónomos navegar entornos desconocidos creando mapas en tiempo real mientras determina su ubicación exacta dentro de esos mapas usando datos de sensores.",
                  "de": "SLAM ermöglicht autonomen Fahrzeugen in unbekannten Umgebungen zu navigieren durch Erstellung von Echtzeit-Karten während ihre genaue Position innerhalb dieser Karten mit Sensordaten bestimmt wird.",
                  "nl": "SLAM stelt autonome voertuigen in staat om in onbekende omgevingen te navigeren door real-time kaarten te creëren terwijl hun exacte locatie binnen die kaarten wordt bepaald met behulp van sensordata."
        }
      },
      {
        question: {
                  "en": "What is vehicle platooning technology?",
                  "es": "¿Qué es la tecnología de platooning de vehículos?",
                  "de": "Was ist Fahrzeug-Platooning-Technologie?",
                  "nl": "Wat is voertuig platooning technologie?"
        },
        options: [
        {
                  "en": "Vehicle storage in platoons",
                  "es": "Almacenamiento de vehículos en pelotones",
                  "de": "Fahrzeuglagerung in Zügen",
                  "nl": "Voertuig opslag in pelotons"
        },
        {
                  "en": "Platoon-style military vehicle formations",
                  "es": "Formaciones de vehículos militares estilo pelotón",
                  "de": "Militärfahrzeug-Formationen im Zug-Stil",
                  "nl": "Militaire voertuig formaties in peloton-stijl"
        },
        {
                  "en": "Single vehicle operation mode",
                  "es": "Modo de operación de vehículo único",
                  "de": "Einzelfahrzeug-Betriebsmodus",
                  "nl": "Enkele voertuig operatie modus"
        },
        {
                  "en": "AI-coordinated convoys of vehicles traveling close together to improve fuel efficiency",
                  "es": "Convoyes coordinados por IA de vehículos viajando cerca juntos para mejorar eficiencia de combustible",
                  "de": "KI-koordinierte Fahrzeug-Konvois die eng zusammen fahren um Kraftstoffeffizienz zu verbessern",
                  "nl": "AI-gecoördineerde konvooien van voertuigen die dicht bij elkaar rijden om brandstofefficiëntie te verbeteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Platooning uses V2V communication and AI to maintain precise spacing between vehicles, reducing air resistance and fuel consumption especially for trucks on highways.",
                  "es": "El platooning usa comunicación V2V e IA para mantener espacio preciso entre vehículos, reduciendo resistencia al aire y consumo de combustible especialmente para camiones en autopistas.",
                  "de": "Platooning nutzt V2V-Kommunikation und KI um präzisen Abstand zwischen Fahrzeugen zu halten, reduziert Luftwiderstand und Kraftstoffverbrauch besonders für Lkw auf Autobahnen.",
                  "nl": "Platooning gebruikt V2V communicatie en AI om precieze afstand tussen voertuigen te behouden, vermindert luchtweerstand en brandstofverbruik vooral voor vrachtwagens op snelwegen."
        }
      },
      {
        question: {
                  "en": "How do neural networks contribute to autonomous driving?",
                  "es": "¿Cómo contribuyen las redes neuronales a la conducción autónoma?",
                  "de": "Wie tragen neuronale Netzwerke zum autonomen Fahren bei?",
                  "nl": "Hoe dragen neurale netwerken bij aan autonoom rijden?"
        },
        options: [
        {
                  "en": "Connecting vehicle's electrical wiring",
                  "es": "Conectar cableado eléctrico del vehículo",
                  "de": "Elektrische Verkabelung des Fahrzeugs verbinden",
                  "nl": "Elektrische bedrading van voertuig verbinden"
        },
        {
                  "en": "Monitoring driver's brain activity",
                  "es": "Monitorear actividad cerebral del conductor",
                  "de": "Gehirnaktivität des Fahrers überwachen",
                  "nl": "Hersenactiviteit van bestuurder monitoren"
        },
        {
                  "en": "Creating social networks for drivers",
                  "es": "Crear redes sociales para conductores",
                  "de": "Soziale Netzwerke für Fahrer erstellen",
                  "nl": "Sociale netwerken voor bestuurders creëren"
        },
        {
                  "en": "Learning complex patterns from data to make driving decisions like humans",
                  "es": "Aprendiendo patrones complejos de datos para tomar decisiones de conducción como humanos",
                  "de": "Lernen komplexer Muster aus Daten um Fahrentscheidungen wie Menschen zu treffen",
                  "nl": "Complexe patronen leren uit data om rijbeslissingen te nemen zoals mensen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Neural networks process vast amounts of sensor data to recognize objects, predict behaviors, and make real-time driving decisions, forming the core of modern autonomous vehicle AI.",
                  "es": "Las redes neuronales procesan vastas cantidades de datos de sensores para reconocer objetos, predecir comportamientos y tomar decisiones de conducción en tiempo real, formando el núcleo de IA moderna de vehículos autónomos.",
                  "de": "Neuronale Netzwerke verarbeiten riesige Mengen an Sensordaten um Objekte zu erkennen, Verhalten vorherzusagen und Echtzeit-Fahrentscheidungen zu treffen, bilden Kern moderner autonomer Fahrzeug-KI.",
                  "nl": "Neurale netwerken verwerken grote hoeveelheden sensordata om objecten te herkennen, gedrag te voorspellen en real-time rijbeslissingen te nemen, vormen de kern van moderne autonome voertuig AI."
        }
      },
      {
        question: {
                  "en": "What is the purpose of redundancy in autonomous vehicle sensor systems?",
                  "es": "¿Cuál es el propósito de la redundancia en sistemas de sensores de vehículos autónomos?",
                  "de": "Was ist der Zweck von Redundanz in autonomen Fahrzeugsensorsystemen?",
                  "nl": "Wat is het doel van redundantie in autonome voertuig sensorsystemen?"
        },
        options: [
        {
                  "en": "Increasing vehicle cost unnecessarily",
                  "es": "Aumentar costo del vehículo innecesariamente",
                  "de": "Fahrzeugkosten unnötig erhöhen",
                  "nl": "Voertuigkosten onnodig verhogen"
        },
        {
                  "en": "Making vehicles heavier",
                  "es": "Hacer vehículos más pesados",
                  "de": "Fahrzeuge schwerer machen",
                  "nl": "Voertuigen zwaarder maken"
        },
        {
                  "en": "Having multiple backup sensors to ensure safety if one fails",
                  "es": "Tener múltiples sensores de respaldo para asegurar seguridad si uno falla",
                  "de": "Mehrere Backup-Sensoren haben um Sicherheit zu gewährleisten wenn einer ausfällt",
                  "nl": "Meerdere backup sensoren hebben om veiligheid te waarborgen als één uitvalt"
        },
        {
                  "en": "Decorating vehicle with extra sensors",
                  "es": "Decorar vehículo con sensores extra",
                  "de": "Fahrzeug mit extra Sensoren dekorieren",
                  "nl": "Voertuig decoreren met extra sensoren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Redundant sensor systems provide fail-safe operation by using multiple overlapping sensors, so if one fails, others can maintain vehicle awareness and safety.",
                  "es": "Los sistemas de sensores redundantes proporcionan operación a prueba de fallos usando múltiples sensores superpuestos, entonces si uno falla, otros pueden mantener conciencia y seguridad del vehículo.",
                  "de": "Redundante Sensorsysteme bieten ausfallsicheren Betrieb durch mehrere überlappende Sensoren, wenn einer ausfällt können andere Fahrzeugwahrnehmung und Sicherheit aufrechterhalten.",
                  "nl": "Redundante sensor systemen bieden fail-safe operatie door meerdere overlappende sensoren te gebruiken, dus als één uitvalt kunnen anderen voertuigbewustzijn en veiligheid behouden."
        }
      },
      {
        question: {
                  "en": "What role does cloud computing play in connected vehicle systems?",
                  "es": "¿Qué papel juega la computación en la nube en sistemas de vehículos conectados?",
                  "de": "Welche Rolle spielt Cloud Computing in vernetzten Fahrzeugsystemen?",
                  "nl": "Welke rol speelt cloud computing in verbonden voertuig systemen?"
        },
        options: [
        {
                  "en": "Monitoring weather clouds only",
                  "es": "Monitorear solo nubes meteorológicas",
                  "de": "Nur Wetterwolken überwachen",
                  "nl": "Alleen weerwolken monitoren"
        },
        {
                  "en": "Storing personal photos in vehicle",
                  "es": "Almacenar fotos personales en vehículo",
                  "de": "Persönliche Fotos im Fahrzeug speichern",
                  "nl": "Persoonlijke foto's opslaan in voertuig"
        },
        {
                  "en": "Storing and processing large amounts of traffic and map data for vehicles to access",
                  "es": "Almacenar y procesar grandes cantidades de datos de tráfico y mapas para que vehículos accedan",
                  "de": "Speicherung und Verarbeitung großer Mengen an Verkehrs- und Kartendaten für Fahrzeugzugriff",
                  "nl": "Grote hoeveelheden verkeer en kaart data opslaan en verwerken voor voertuigtoegang"
        },
        {
                  "en": "Creating cloud-shaped vehicle designs",
                  "es": "Crear diseños de vehículos con forma de nube",
                  "de": "Wolkenförmige Fahrzeugdesigns erstellen",
                  "nl": "Wolkvormige voertuig ontwerpen creëren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cloud computing enables vehicles to access real-time traffic updates, high-definition maps, and shared intelligence from other vehicles, enhancing navigation and safety.",
                  "es": "La computación en la nube permite a vehículos acceder a actualizaciones de tráfico en tiempo real, mapas de alta definición e inteligencia compartida de otros vehículos, mejorando navegación y seguridad.",
                  "de": "Cloud Computing ermöglicht Fahrzeugen Zugriff auf Echtzeit-Verkehrsupdates, hochauflösende Karten und geteilte Intelligenz von anderen Fahrzeugen, verbessert Navigation und Sicherheit.",
                  "nl": "Cloud computing stelt voertuigen in staat om toegang te krijgen tot real-time verkeersupdates, high-definition kaarten en gedeelde intelligentie van andere voertuigen, wat navigatie en veiligheid verbetert."
        }
      },
      {
        question: {
                  "en": "What is behavior prediction in autonomous vehicle AI?",
                  "es": "¿Qué es la predicción de comportamiento en IA de vehículos autónomos?",
                  "de": "Was ist Verhaltensvorhersage in autonomer Fahrzeug-KI?",
                  "nl": "Wat is gedragsvoorspelling in autonome voertuig AI?"
        },
        options: [
        {
                  "en": "Anticipating actions of other road users to make safer driving decisions",
                  "es": "Anticipar acciones de otros usuarios de carretera para tomar decisiones de conducción más seguras",
                  "de": "Aktionen anderer Verkehrsteilnehmer vorhersagen um sicherere Fahrentscheidungen zu treffen",
                  "nl": "Acties van andere weggebruikers voorspellen om veiligere rijbeslissingen te nemen"
        },
        {
                  "en": "Predicting vehicle maintenance needs",
                  "es": "Predecir necesidades de mantenimiento del vehículo",
                  "de": "Fahrzeugwartungsbedarf vorhersagen",
                  "nl": "Voertuig onderhoudsbehoeften voorspellen"
        },
        {
                  "en": "Predicting fuel consumption only",
                  "es": "Predecir solo consumo de combustible",
                  "de": "Nur Kraftstoffverbrauch vorhersagen",
                  "nl": "Alleen brandstofverbruik voorspellen"
        },
        {
                  "en": "Forecasting driver personality types",
                  "es": "Pronosticar tipos de personalidad del conductor",
                  "de": "Fahrerpersönlichkeitstypen prognostizieren",
                  "nl": "Bestuurder persoonlijkheidstypes voorspellen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI behavior prediction analyzes movements and patterns of pedestrians, cyclists, and other vehicles to anticipate their next actions, enabling proactive safety measures.",
                  "es": "La predicción de comportamiento IA analiza movimientos y patrones de peatones, ciclistas y otros vehículos para anticipar sus próximas acciones, habilitando medidas de seguridad proactivas.",
                  "de": "KI-Verhaltensvorhersage analysiert Bewegungen und Muster von Fußgängern, Radfahrern und anderen Fahrzeugen um deren nächste Aktionen vorherzusagen, ermöglicht proaktive Sicherheitsmaßnahmen.",
                  "nl": "AI gedragsvoorspelling analyseert bewegingen en patronen van voetgangers, fietsers en andere voertuigen om hun volgende acties te voorspellen, wat proactieve veiligheidsmaatregelen mogelijk maakt."
        }
      },
      {
        question: {
                  "en": "How does AI improve public transit scheduling?",
                  "es": "¿Cómo mejora la IA la programación del tránsito público?",
                  "de": "Wie verbessert KI die Planung des öffentlichen Nahverkehrs?",
                  "nl": "Hoe verbetert AI openbaar vervoer planning?"
        },
        options: [
        {
                  "en": "Analyzing passenger demand patterns to optimize frequency and routes",
                  "es": "Analizando patrones de demanda de pasajeros para optimizar frecuencia y rutas",
                  "de": "Analyse von Fahrgastnachfragemustern zur Optimierung von Frequenz und Routen",
                  "nl": "Passagiersvraag patronen analyseren om frequentie en routes te optimaliseren"
        },
        {
                  "en": "Only changing bus colors",
                  "es": "Solo cambiar colores de autobús",
                  "de": "Nur Busfarben ändern",
                  "nl": "Alleen buskleuren veranderen"
        },
        {
                  "en": "Designing transit station architecture",
                  "es": "Diseñar arquitectura de estación de tránsito",
                  "de": "Transitstations-Architektur entwerfen",
                  "nl": "Openbaar vervoer station architectuur ontwerpen"
        },
        {
                  "en": "Hiring more transit operators",
                  "es": "Contratar más operadores de tránsito",
                  "de": "Mehr Transitbetreiber einstellen",
                  "nl": "Meer openbaar vervoer operators aannemen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI analyzes historical ridership data, events, weather, and real-time conditions to dynamically adjust schedules, improving service reliability and reducing wait times.",
                  "es": "La IA analiza datos históricos de pasajeros, eventos, clima y condiciones en tiempo real para ajustar dinámicamente horarios, mejorando confiabilidad del servicio y reduciendo tiempos de espera.",
                  "de": "KI analysiert historische Fahrgastdaten, Ereignisse, Wetter und Echtzeitbedingungen um Fahrpläne dynamisch anzupassen, verbessert Service-Zuverlässigkeit und reduziert Wartezeiten.",
                  "nl": "AI analyseert historische passagiersdata, evenementen, weer en real-time omstandigheden om schema's dynamisch aan te passen, wat service betrouwbaarheid verbetert en wachttijden vermindert."
        }
      },
      {
        question: {
                  "en": "What is semantic segmentation in autonomous vehicle vision?",
                  "es": "¿Qué es la segmentación semántica en visión de vehículos autónomos?",
                  "de": "Was ist semantische Segmentierung in autonomer Fahrzeugvision?",
                  "nl": "Wat is semantische segmentatie in autonome voertuig vision?"
        },
        options: [
        {
                  "en": "Semantic analysis of traffic rules",
                  "es": "Análisis semántico de reglas de tráfico",
                  "de": "Semantische Analyse von Verkehrsregeln",
                  "nl": "Semantische analyse van verkeersregels"
        },
        {
                  "en": "Segmenting vehicle interior components",
                  "es": "Segmentar componentes interiores del vehículo",
                  "de": "Fahrzeuginnenkomponenten segmentieren",
                  "nl": "Voertuig interieur componenten segmenteren"
        },
        {
                  "en": "Classifying every pixel in camera images to identify road, vehicles, pedestrians, etc.",
                  "es": "Clasificar cada píxel en imágenes de cámara para identificar carretera, vehículos, peatones, etc.",
                  "de": "Jedes Pixel in Kamerabildern klassifizieren um Straße, Fahrzeuge, Fußgänger usw. zu identifizieren",
                  "nl": "Elke pixel in camera beelden classificeren om weg, voertuigen, voetgangers, etc. te identificeren"
        },
        {
                  "en": "Dividing roads into segments",
                  "es": "Dividir carreteras en segmentos",
                  "de": "Straßen in Segmente teilen",
                  "nl": "Wegen in segmenten verdelen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Semantic segmentation provides detailed pixel-level understanding of the scene, enabling precise identification of drivable surfaces, obstacles, and relevant objects for navigation.",
                  "es": "La segmentación semántica proporciona comprensión detallada a nivel de píxel de la escena, habilitando identificación precisa de superficies conducibles, obstáculos y objetos relevantes para navegación.",
                  "de": "Semantische Segmentierung bietet detailliertes Pixel-Verständnis der Szene, ermöglicht präzise Identifizierung befahrbarer Oberflächen, Hindernisse und relevanter Objekte für Navigation.",
                  "nl": "Semantische segmentatie biedt gedetailleerd pixel-niveau begrip van de scène, wat precieze identificatie mogelijk maakt van berijdbare oppervlakken, obstakels en relevante objecten voor navigatie."
        }
      },
      {
        question: {
                  "en": "What is deep learning's advantage in autonomous driving?",
                  "es": "¿Cuál es la ventaja del aprendizaje profundo en conducción autónoma?",
                  "de": "Was ist der Vorteil von Deep Learning beim autonomen Fahren?",
                  "nl": "Wat is het voordeel van deep learning bij autonoom rijden?"
        },
        options: [
        {
                  "en": "Learning complex features automatically from raw data without manual programming",
                  "es": "Aprender características complejas automáticamente de datos brutos sin programación manual",
                  "de": "Komplexe Merkmale automatisch aus Rohdaten ohne manuelle Programmierung lernen",
                  "nl": "Complexe kenmerken automatisch leren uit ruwe data zonder handmatige programmering"
        },
        {
                  "en": "Learning only at night",
                  "es": "Aprender solo de noche",
                  "de": "Nur nachts lernen",
                  "nl": "Alleen 's nachts leren"
        },
        {
                  "en": "Deep storage of learning materials",
                  "es": "Almacenamiento profundo de materiales de aprendizaje",
                  "de": "Tiefe Speicherung von Lernmaterialien",
                  "nl": "Diepe opslag van leermaterialen"
        },
        {
                  "en": "Making vehicles drive deeper underwater",
                  "es": "Hacer que vehículos conduzcan más profundo bajo agua",
                  "de": "Fahrzeuge tiefer unter Wasser fahren lassen",
                  "nl": "Voertuigen dieper onder water laten rijden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Deep learning automatically discovers relevant patterns and features in sensor data, enabling autonomous vehicles to handle diverse, unpredictable real-world driving scenarios.",
                  "es": "El aprendizaje profundo descubre automáticamente patrones y características relevantes en datos de sensores, habilitando a vehículos autónomos manejar diversos e impredecibles escenarios de conducción del mundo real.",
                  "de": "Deep Learning entdeckt automatisch relevante Muster und Merkmale in Sensordaten, ermöglicht autonomen Fahrzeugen diverse, unvorhersehbare reale Fahrszenarien zu bewältigen.",
                  "nl": "Deep learning ontdekt automatisch relevante patronen en kenmerken in sensordata, waardoor autonome voertuigen diverse, onvoorspelbare echte wereld rijscenario's kunnen afhandelen."
        }
      },
      {
        question: {
                  "en": "How does AI enable predictive traffic management?",
                  "es": "¿Cómo habilita la IA la gestión predictiva del tráfico?",
                  "de": "Wie ermöglicht KI prädiktives Verkehrsmanagement?",
                  "nl": "Hoe maakt AI voorspellend verkeersmanagement mogelijk?"
        },
        options: [
        {
                  "en": "Only counting traffic violations",
                  "es": "Solo contar infracciones de tráfico",
                  "de": "Nur Verkehrsverstöße zählen",
                  "nl": "Alleen verkeersovertredingen tellen"
        },
        {
                  "en": "Forecasting traffic congestion and adjusting signals before problems occur",
                  "es": "Pronosticando congestión de tráfico y ajustando señales antes de que ocurran problemas",
                  "de": "Verkehrsstaus vorhersagen und Signale anpassen bevor Probleme auftreten",
                  "nl": "Verkeersopstoppingen voorspellen en signalen aanpassen voordat problemen optreden"
        },
        {
                  "en": "Forecasting weather conditions only",
                  "es": "Pronosticar solo condiciones climáticas",
                  "de": "Nur Wetterbedingungen prognostizieren",
                  "nl": "Alleen weersomstandigheden voorspellen"
        },
        {
                  "en": "Predicting vehicle colors",
                  "es": "Predecir colores de vehículos",
                  "de": "Fahrzeugfarben vorhersagen",
                  "nl": "Voertuigkleuren voorspellen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Predictive traffic management uses machine learning to analyze patterns and predict congestion, enabling proactive adjustments to traffic control systems before bottlenecks form.",
                  "es": "La gestión predictiva del tráfico usa aprendizaje automático para analizar patrones y predecir congestión, habilitando ajustes proactivos a sistemas de control de tráfico antes de que se formen cuellos de botella.",
                  "de": "Prädiktives Verkehrsmanagement nutzt maschinelles Lernen um Muster zu analysieren und Staus vorherzusagen, ermöglicht proaktive Anpassungen an Verkehrsleitsysteme bevor Engpässe entstehen.",
                  "nl": "Voorspellend verkeersmanagement gebruikt machine learning om patronen te analyseren en opstoppingen te voorspellen, wat proactieve aanpassingen aan verkeersbeheersystemen mogelijk maakt voordat knelpunten ontstaan."
        }
      },
      {
        question: {
                  "en": "What is occupancy grid mapping in autonomous vehicles?",
                  "es": "¿Qué es el mapeo de cuadrícula de ocupación en vehículos autónomos?",
                  "de": "Was ist Belegungsraster-Kartierung in autonomen Fahrzeugen?",
                  "nl": "Wat is bezettingsraster mapping in autonome voertuigen?"
        },
        options: [
        {
                  "en": "Counting vehicle occupants",
                  "es": "Contar ocupantes del vehículo",
                  "de": "Fahrzeuginsassen zählen",
                  "nl": "Voertuig inzittenden tellen"
        },
        {
                  "en": "Grid pattern on vehicle exterior",
                  "es": "Patrón de cuadrícula en exterior del vehículo",
                  "de": "Rastermuster auf Fahrzeugaußenseite",
                  "nl": "Rasterpatroon op voertuig buitenkant"
        },
        {
                  "en": "Mapping parking lot occupancy",
                  "es": "Mapear ocupación de estacionamiento",
                  "de": "Parkplatzbelegung kartieren",
                  "nl": "Parkeerplaats bezetting in kaart brengen"
        },
        {
                  "en": "Representing the environment as a grid showing which areas are occupied by obstacles",
                  "es": "Representar el entorno como una cuadrícula mostrando qué áreas están ocupadas por obstáculos",
                  "de": "Umgebung als Raster darstellen das zeigt welche Bereiche von Hindernissen besetzt sind",
                  "nl": "Omgeving weergeven als een raster dat laat zien welke gebieden bezet zijn door obstakels"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Occupancy grids divide the space around a vehicle into cells, marking each as free or occupied based on sensor data, helping plan safe navigation paths.",
                  "es": "Las cuadrículas de ocupación dividen el espacio alrededor de un vehículo en celdas, marcando cada una como libre u ocupada basándose en datos de sensores, ayudando a planificar rutas de navegación seguras.",
                  "de": "Belegungsraster teilen Raum um Fahrzeug in Zellen, markieren jede als frei oder besetzt basierend auf Sensordaten, helfen sichere Navigationspfade zu planen.",
                  "nl": "Bezettingsrasters verdelen de ruimte rond een voertuig in cellen, waarbij elke wordt gemarkeerd als vrij of bezet op basis van sensordata, wat helpt bij het plannen van veilige navigatiepaden."
        }
      },
      {
        question: {
                  "en": "How does AI enhance emergency vehicle routing?",
                  "es": "¿Cómo mejora la IA el enrutamiento de vehículos de emergencia?",
                  "de": "Wie verbessert KI die Notfahrzeug-Routenführung?",
                  "nl": "Hoe verbetert AI hulpverleningsvoertuig routing?"
        },
        options: [
        {
                  "en": "Emergency vehicle maintenance scheduling",
                  "es": "Programación de mantenimiento de vehículos de emergencia",
                  "de": "Notfahrzeug-Wartungsplanung",
                  "nl": "Hulpverleningsvoertuig onderhoud planning"
        },
        {
                  "en": "Calculating fastest routes considering real-time traffic and coordinating traffic lights",
                  "es": "Calculando rutas más rápidas considerando tráfico en tiempo real y coordinando semáforos",
                  "de": "Schnellste Routen berechnen unter Berücksichtigung von Echtzeitverkehr und Ampelkoordination",
                  "nl": "Snelste routes berekenen rekening houdend met real-time verkeer en verkeerslichten coördineren"
        },
        {
                  "en": "Only painting emergency vehicle colors",
                  "es": "Solo pintar colores de vehículos de emergencia",
                  "de": "Nur Notfahrzeugfarben malen",
                  "nl": "Alleen hulpverleningsvoertuig kleuren schilderen"
        },
        {
                  "en": "Decorating emergency vehicles",
                  "es": "Decorar vehículos de emergencia",
                  "de": "Notfahrzeuge dekorieren",
                  "nl": "Hulpverleningsvoertuigen decoreren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "AI systems optimize emergency vehicle routes by analyzing traffic patterns, adjusting traffic signals to create green corridors, and minimizing response times to save lives.",
                  "es": "Los sistemas IA optimizan rutas de vehículos de emergencia analizando patrones de tráfico, ajustando señales de tráfico para crear corredores verdes y minimizando tiempos de respuesta para salvar vidas.",
                  "de": "KI-Systeme optimieren Notfahrzeug-Routen durch Analyse von Verkehrsmustern, Anpassung von Ampeln zur Schaffung grüner Korridore und Minimierung von Reaktionszeiten um Leben zu retten.",
                  "nl": "AI-systemen optimaliseren hulpverleningsvoertuig routes door verkeerspatronen te analyseren, verkeerslichten aan te passen om groene corridors te creëren en reactietijden te minimaliseren om levens te redden."
        }
      },
      {
        question: {
                  "en": "What is transfer learning in autonomous vehicle development?",
                  "es": "¿Qué es el aprendizaje por transferencia en desarrollo de vehículos autónomos?",
                  "de": "Was ist Transfer Learning in der Entwicklung autonomer Fahrzeuge?",
                  "nl": "Wat is transfer learning in autonome voertuig ontwikkeling?"
        },
        options: [
        {
                  "en": "Learning during vehicle transfers",
                  "es": "Aprender durante transferencias de vehículos",
                  "de": "Lernen während Fahrzeugtransfers",
                  "nl": "Leren tijdens voertuig overdrachten"
        },
        {
                  "en": "Transferring ownership of learning systems",
                  "es": "Transferir propiedad de sistemas de aprendizaje",
                  "de": "Eigentum an Lernsystemen übertragen",
                  "nl": "Eigendom van leersystemen overdragen"
        },
        {
                  "en": "Applying knowledge learned in one driving scenario to new similar situations",
                  "es": "Aplicar conocimiento aprendido en un escenario de conducción a nuevas situaciones similares",
                  "de": "In einem Fahrszenario gelerntes Wissen auf neue ähnliche Situationen anwenden",
                  "nl": "Kennis geleerd in één rijscenario toepassen op nieuwe vergelijkbare situaties"
        },
        {
                  "en": "Transferring vehicles between locations",
                  "es": "Transferir vehículos entre ubicaciones",
                  "de": "Fahrzeuge zwischen Standorten transferieren",
                  "nl": "Voertuigen tussen locaties overdragen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Transfer learning allows AI systems trained on one dataset or environment to quickly adapt to new conditions, reducing training time and improving performance across diverse driving scenarios.",
                  "es": "El aprendizaje por transferencia permite a sistemas IA entrenados en un conjunto de datos o entorno adaptarse rápidamente a nuevas condiciones, reduciendo tiempo de entrenamiento y mejorando rendimiento en diversos escenarios de conducción.",
                  "de": "Transfer Learning erlaubt KI-Systemen die auf einem Datensatz oder einer Umgebung trainiert wurden sich schnell an neue Bedingungen anzupassen, reduziert Trainingszeit und verbessert Leistung in diversen Fahrszenarien.",
                  "nl": "Transfer learning stelt AI-systemen getraind op één dataset of omgeving in staat om snel aan te passen aan nieuwe omstandigheden, wat trainingstijd vermindert en prestaties verbetert in diverse rijscenario's."
        }
      },
      {
        question: {
                  "en": "How do reinforcement learning algorithms improve autonomous driving?",
                  "es": "¿Cómo mejoran los algoritmos de aprendizaje por refuerzo la conducción autónoma?",
                  "de": "Wie verbessern Verstärkungslern-Algorithmen das autonome Fahren?",
                  "nl": "Hoe verbeteren reinforcement learning algoritmes autonoom rijden?"
        },
        options: [
        {
                  "en": "Reinforcing vehicle structure only",
                  "es": "Solo reforzar estructura del vehículo",
                  "de": "Nur Fahrzeugstruktur verstärken",
                  "nl": "Alleen voertuigstructuur versterken"
        },
        {
                  "en": "Learning to reinforce traffic rules",
                  "es": "Aprender a reforzar reglas de tráfico",
                  "de": "Lernen Verkehrsregeln zu verstärken",
                  "nl": "Leren verkeersregels te versterken"
        },
        {
                  "en": "Reinforcing driver education programs",
                  "es": "Reforzar programas de educación de conductores",
                  "de": "Fahrer-Ausbildungsprogramme verstärken",
                  "nl": "Bestuurder educatie programma's versterken"
        },
        {
                  "en": "Learning optimal driving strategies through trial, error, and reward feedback",
                  "es": "Aprendiendo estrategias de conducción óptimas através prueba, error y retroalimentación de recompensa",
                  "de": "Optimale Fahrstrategien durch Versuch, Irrtum und Belohnungsfeedback lernen",
                  "nl": "Optimale rijstrategieën leren door trial, error en beloningsfeedback"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Reinforcement learning trains autonomous systems by rewarding safe, efficient behaviors and penalizing mistakes, allowing AI to discover optimal driving policies through experience.",
                  "es": "El aprendizaje por refuerzo entrena sistemas autónomos recompensando comportamientos seguros y eficientes y penalizando errores, permitiendo a IA descubrir políticas de conducción óptimas através experiencia.",
                  "de": "Verstärkungslernen trainiert autonome Systeme durch Belohnung sicherer, effizienter Verhaltensweisen und Bestrafung von Fehlern, erlaubt KI optimale Fahrrichtlinien durch Erfahrung zu entdecken.",
                  "nl": "Reinforcement learning traint autonome systemen door veilig, efficiënt gedrag te belonen en fouten te bestraffen, waardoor AI optimale rijstrategieën kan ontdekken door ervaring."
        }
      },
      {
        question: {
                  "en": "What is vehicle telemetry and how does AI use it?",
                  "es": "¿Qué es la telemetría de vehículos y cómo la usa la IA?",
                  "de": "Was ist Fahrzeugtelemetrie und wie nutzt KI sie?",
                  "nl": "Wat is voertuig telemetrie en hoe gebruikt AI het?"
        },
        options: [
        {
                  "en": "Metric measurement tools only",
                  "es": "Solo herramientas de medición métrica",
                  "de": "Nur metrische Messwerkzeuge",
                  "nl": "Alleen metrische meetinstrumenten"
        },
        {
                  "en": "Telephone systems for vehicles",
                  "es": "Sistemas telefónicos para vehículos",
                  "de": "Telefonsysteme für Fahrzeuge",
                  "nl": "Telefoonsystemen voor voertuigen"
        },
        {
                  "en": "Television broadcast in vehicles",
                  "es": "Transmisión de televisión en vehículos",
                  "de": "Fernsehübertragung in Fahrzeugen",
                  "nl": "Televisie uitzending in voertuigen"
        },
        {
                  "en": "Remote monitoring of vehicle data that AI analyzes for performance optimization",
                  "es": "Monitoreo remoto de datos de vehículo que IA analiza para optimización de rendimiento",
                  "de": "Fernüberwachung von Fahrzeugdaten die KI zur Leistungsoptimierung analysiert",
                  "nl": "Remote monitoring van voertuigdata die AI analyseert voor prestatie optimalisatie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Vehicle telemetry collects data on speed, location, fuel consumption, and component health, which AI analyzes to optimize routes, predict maintenance, and improve fleet efficiency.",
                  "es": "La telemetría de vehículos recopila datos sobre velocidad, ubicación, consumo de combustible y salud de componentes, que IA analiza para optimizar rutas, predecir mantenimiento y mejorar eficiencia de flota.",
                  "de": "Fahrzeugtelemetrie sammelt Daten zu Geschwindigkeit, Standort, Kraftstoffverbrauch und Komponentenzustand, die KI analysiert um Routen zu optimieren, Wartung vorherzusagen und Flotteneffizienz zu verbessern.",
                  "nl": "Voertuig telemetrie verzamelt data over snelheid, locatie, brandstofverbruik en componentgezondheid, die AI analyseert om routes te optimaliseren, onderhoud te voorspellen en vloot efficiëntie te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is cooperative adaptive cruise control (CACC)?",
                  "es": "¿Qué es el control de crucero adaptativo cooperativo (CACC)?",
                  "de": "Was ist kooperative adaptive Geschwindigkeitsregelung (CACC)?",
                  "nl": "Wat is coöperatieve adaptieve cruise control (CACC)?"
        },
        options: [
        {
                  "en": "Cooperative parking systems",
                  "es": "Sistemas cooperativos de estacionamiento",
                  "de": "Kooperative Parksysteme",
                  "nl": "Coöperatieve parkeersystemen"
        },
        {
                  "en": "Vehicles communicating to coordinate speeds and maintain optimal spacing automatically",
                  "es": "Vehículos comunicándose para coordinar velocidades y mantener espacio óptimo automáticamente",
                  "de": "Fahrzeuge kommunizieren um Geschwindigkeiten zu koordinieren und optimalen Abstand automatisch zu halten",
                  "nl": "Voertuigen communiceren om snelheden te coördineren en automatisch optimale afstand te behouden"
        },
        {
                  "en": "Adaptive control for cruise ships",
                  "es": "Control adaptativo para cruceros",
                  "de": "Adaptive Steuerung für Kreuzfahrtschiffe",
                  "nl": "Adaptieve controle voor cruiseschepen"
        },
        {
                  "en": "Cruise control requiring driver cooperation",
                  "es": "Control de crucero requiriendo cooperación del conductor",
                  "de": "Tempomat der Fahrer-Kooperation erfordert",
                  "nl": "Cruise control die bestuurder samenwerking vereist"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "CACC uses V2V communication to share velocity and acceleration data between vehicles, enabling smoother traffic flow and tighter, safer platoons than traditional adaptive cruise control.",
                  "es": "CACC usa comunicación V2V para compartir datos de velocidad y aceleración entre vehículos, habilitando flujo de tráfico más suave y pelotones más ajustados y seguros que control de crucero adaptativo tradicional.",
                  "de": "CACC nutzt V2V-Kommunikation um Geschwindigkeits- und Beschleunigungsdaten zwischen Fahrzeugen zu teilen, ermöglicht glattere Verkehrsfluss und engere, sicherere Züge als traditioneller adaptiver Tempomat.",
                  "nl": "CACC gebruikt V2V communicatie om snelheids- en acceleratiedata tussen voertuigen te delen, wat soepelere verkeersstroom en nauwere, veiligere pelotons mogelijk maakt dan traditionele adaptieve cruise control."
        }
      },
      {
        question: {
                  "en": "How does AI contribute to reducing transportation emissions?",
                  "es": "¿Cómo contribuye la IA a reducir emisiones de transporte?",
                  "de": "Wie trägt KI zur Reduzierung von Transportemissionen bei?",
                  "nl": "Hoe draagt AI bij aan het verminderen van transport uitstoot?"
        },
        options: [
        {
                  "en": "Optimizing routes, speeds, and vehicle operations to minimize fuel consumption",
                  "es": "Optimizando rutas, velocidades y operaciones de vehículos para minimizar consumo de combustible",
                  "de": "Optimierung von Routen, Geschwindigkeiten und Fahrzeugbetrieb zur Minimierung des Kraftstoffverbrauchs",
                  "nl": "Routes, snelheden en voertuigoperaties optimaliseren om brandstofverbruik te minimaliseren"
        },
        {
                  "en": "Increasing vehicle speeds everywhere",
                  "es": "Aumentar velocidades de vehículos en todas partes",
                  "de": "Fahrzeuggeschwindigkeiten überall erhöhen",
                  "nl": "Voertuigsnelheden overal verhogen"
        },
        {
                  "en": "Only painting vehicles green",
                  "es": "Solo pintar vehículos de verde",
                  "de": "Nur Fahrzeuge grün anmalen",
                  "nl": "Alleen voertuigen groen schilderen"
        },
        {
                  "en": "Eliminating emissions measurement tools",
                  "es": "Eliminar herramientas de medición de emisiones",
                  "de": "Emissionsmess-Werkzeuge eliminieren",
                  "nl": "Uitstoot meetinstrumenten elimineren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "AI reduces emissions by calculating eco-friendly routes, optimizing traffic flow to reduce idling, coordinating vehicle speeds, and managing electric vehicle charging for cleaner energy use.",
                  "es": "La IA reduce emisiones calculando rutas eco-amigables, optimizando flujo de tráfico para reducir ralentí, coordinando velocidades de vehículos y gestionando carga de vehículos eléctricos para uso de energía más limpia.",
                  "de": "KI reduziert Emissionen durch Berechnung umweltfreundlicher Routen, Optimierung des Verkehrsflusses zur Reduzierung von Leerlauf, Koordination von Fahrzeuggeschwindigkeiten und Verwaltung des Ladens von Elektrofahrzeugen für saubereren Energieverbrauch.",
                  "nl": "AI vermindert uitstoot door milieuvriendelijke routes te berekenen, verkeersstroom te optimaliseren om stationair draaien te verminderen, voertuigsnelheden te coördineren en elektrische voertuig opladen te beheren voor schoner energiegebruik."
        }
      },
      {
        question: {
                  "en": "What is geo-fencing in autonomous vehicle management?",
                  "es": "¿Qué es el geo-cercado en gestión de vehículos autónomos?",
                  "de": "Was ist Geo-Fencing im autonomen Fahrzeugmanagement?",
                  "nl": "Wat is geo-fencing in autonoom voertuigbeheer?"
        },
        options: [
        {
                  "en": "Fencing competitions using GPS",
                  "es": "Competencias de esgrima usando GPS",
                  "de": "Fechtwettbewerbe mit GPS",
                  "nl": "Schermwedstrijden met GPS"
        },
        {
                  "en": "Virtual boundaries that restrict or enable autonomous operations in specific areas",
                  "es": "Límites virtuales que restringen o habilitan operaciones autónomas en áreas específicas",
                  "de": "Virtuelle Grenzen die autonome Operationen in bestimmten Bereichen einschränken oder ermöglichen",
                  "nl": "Virtuele grenzen die autonome operaties in specifieke gebieden beperken of mogelijk maken"
        },
        {
                  "en": "Geographic study of fencing",
                  "es": "Estudio geográfico de cercado",
                  "de": "Geographische Studie des Zaunbaus",
                  "nl": "Geografische studie van hekwerk"
        },
        {
                  "en": "Physical fences around vehicles",
                  "es": "Cercas físicas alrededor de vehículos",
                  "de": "Physische Zäune um Fahrzeuge",
                  "nl": "Fysieke hekken rond voertuigen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Geo-fencing uses GPS to define operational zones where autonomous vehicles can operate, ensuring they stay within approved areas and comply with local regulations.",
                  "es": "El geo-cercado usa GPS para definir zonas operacionales donde vehículos autónomos pueden operar, asegurando que permanezcan dentro de áreas aprobadas y cumplan regulaciones locales.",
                  "de": "Geo-Fencing nutzt GPS um Betriebszonen zu definieren in denen autonome Fahrzeuge operieren können, stellt sicher dass sie in genehmigten Bereichen bleiben und lokale Vorschriften einhalten.",
                  "nl": "Geo-fencing gebruikt GPS om operationele zones te definiëren waar autonome voertuigen kunnen opereren, waardoor wordt verzekerd dat ze binnen goedgekeurde gebieden blijven en voldoen aan lokale regelgeving."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();