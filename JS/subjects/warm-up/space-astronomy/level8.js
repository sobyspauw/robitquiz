(function() {
    const level8 = {
        name: {
            en: "Space Technology and Satellites",
            es: "Tecnología Espacial y Satélites",
            de: "Raumfahrttechnologie und Satelliten",
            nl: "Ruimtetechnologie en Satellieten"
        },
        questions: [
            {
                question: {
                    en: "What is a satellite?",
                    es: "¿Qué es un satélite?",
                    de: "Was ist ein Satellit?",
                    nl: "Wat is een satelliet?"
                },
                options: [
                    { en: "An object that orbits around another larger object", es: "Un objeto que orbita alrededor de otro objeto más grande", de: "Ein Objekt, das um ein anderes größeres Objekt kreist", nl: "Een object dat om een ander groter object draait" },
                    { en: "A TV broadcasting station", es: "Una estación de transmisión de TV", de: "Eine TV-Sendestation", nl: "Een TV-uitzendstation" },
                    { en: "A type of rocket", es: "Un tipo de cohete", de: "Eine Art Rakete", nl: "Een soort raket" },
                    { en: "A space telescope only", es: "Solo un telescopio espacial", de: "Nur ein Weltraumteleskop", nl: "Alleen een ruimtetelescoop" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the first artificial satellite launched into space?",
                    es: "¿Cuál fue el primer satélite artificial lanzado al espacio?",
                    de: "Was war der erste künstliche Satellit, der ins Weltall gestartet wurde?",
                    nl: "Wat was de eerste kunstmatige satelliet die de ruimte in werd gelanceerd?"
                },
                options: [
                    { en: "Sputnik 1", es: "Sputnik 1", de: "Sputnik 1", nl: "Sputnik 1" },
                    { en: "Explorer 1", es: "Explorer 1", de: "Explorer 1", nl: "Explorer 1" },
                    { en: "Telstar", es: "Telstar", de: "Telstar", nl: "Telstar" },
                    { en: "Hubble", es: "Hubble", de: "Hubble", nl: "Hubble" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do GPS satellites help us do?",
                    es: "¿Qué nos ayudan a hacer los satélites GPS?",
                    de: "Was helfen uns GPS-Satelliten zu tun?",
                    nl: "Waarmee helpen GPS-satellieten ons?"
                },
                options: [
                    { en: "Find our exact location on Earth", es: "Encontrar nuestra ubicación exacta en la Tierra", de: "Unseren genauen Standort auf der Erde finden", nl: "Onze exacte locatie op Aarde vinden" },
                    { en: "Watch television", es: "Ver televisión", de: "Fernsehen schauen", nl: "Televisie kijken" },
                    { en: "Talk on the phone", es: "Hablar por teléfono", de: "Am Telefon sprechen", nl: "Telefoneren" },
                    { en: "Take pictures", es: "Tomar fotos", de: "Fotos machen", nl: "Foto's maken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do communication satellites work?",
                    es: "¿Cómo funcionan los satélites de comunicación?",
                    de: "Wie funktionieren Kommunikationssatelliten?",
                    nl: "Hoe werken communicatiesatellieten?"
                },
                options: [
                    { en: "They receive signals from Earth and send them to other places", es: "Reciben señales de la Tierra y las envían a otros lugares", de: "Sie empfangen Signale von der Erde und senden sie an andere Orte", nl: "Ze ontvangen signalen van de Aarde en sturen ze naar andere plaatsen" },
                    { en: "They create their own TV shows", es: "Crean sus propios programas de TV", de: "Sie erstellen ihre eigenen TV-Shows", nl: "Ze maken hun eigen TV-programma's" },
                    { en: "They only work at night", es: "Solo funcionan de noche", de: "Sie funktionieren nur nachts", nl: "Ze werken alleen 's nachts" },
                    { en: "They use cables to connect places", es: "Usan cables para conectar lugares", de: "Sie verwenden Kabel, um Orte zu verbinden", nl: "Ze gebruiken kabels om plaatsen te verbinden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are weather satellites used for?",
                    es: "¿Para qué se usan los satélites meteorológicos?",
                    de: "Wofür werden Wettersatelliten verwendet?",
                    nl: "Waarvoor worden weersatellieten gebruikt?"
                },
                options: [
                    { en: "To monitor weather patterns and predict storms", es: "Para monitorear patrones climáticos y predecir tormentas", de: "Um Wettermuster zu überwachen und Stürme vorherzusagen", nl: "Om weerpatronen te monitoren en stormen te voorspellen" },
                    { en: "To control the weather", es: "Para controlar el clima", de: "Um das Wetter zu kontrollieren", nl: "Om het weer te beheersen" },
                    { en: "To make it rain", es: "Para hacer llover", de: "Um es regnen zu lassen", nl: "Om het te laten regenen" },
                    { en: "To measure temperature only", es: "Para medir solo la temperatura", de: "Um nur die Temperatur zu messen", nl: "Om alleen temperatuur te meten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a geostationary orbit?",
                    es: "¿Qué es una órbita geoestacionaria?",
                    de: "Was ist eine geostationäre Umlaufbahn?",
                    nl: "Wat is een geostationaire baan?"
                },
                options: [
                    { en: "An orbit where the satellite stays over the same spot on Earth", es: "Una órbita donde el satélite permanece sobre el mismo punto en la Tierra", de: "Eine Umlaufbahn, in der der Satellit über demselben Punkt auf der Erde bleibt", nl: "Een baan waar de satelliet boven dezelfde plek op Aarde blijft" },
                    { en: "An orbit that goes around the poles", es: "Una órbita que va alrededor de los polos", de: "Eine Umlaufbahn, die um die Pole geht", nl: "Een baan die rond de polen gaat" },
                    { en: "An orbit very close to Earth", es: "Una órbita muy cerca de la Tierra", de: "Eine Umlaufbahn sehr nah zur Erde", nl: "Een baan heel dicht bij de Aarde" },
                    { en: "An orbit that changes constantly", es: "Una órbita que cambia constantemente", de: "Eine Umlaufbahn, die sich ständig ändert", nl: "Een baan die constant verandert" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do solar panels on satellites work?",
                    es: "¿Cómo funcionan los paneles solares en los satélites?",
                    de: "Wie funktionieren Solarpanels auf Satelliten?",
                    nl: "Hoe werken zonnepanelen op satellieten?"
                },
                options: [
                    { en: "They convert sunlight into electricity to power the satellite", es: "Convierten la luz solar en electricidad para alimentar el satélite", de: "Sie wandeln Sonnenlicht in Elektrizität um, um den Satelliten anzutreiben", nl: "Ze zetten zonlicht om in elektriciteit om de satelliet van stroom te voorzien" },
                    { en: "They reflect sunlight to Earth", es: "Reflejan la luz solar hacia la Tierra", de: "Sie reflektieren Sonnenlicht zur Erde", nl: "Ze reflecteren zonlicht naar de Aarde" },
                    { en: "They protect the satellite from heat", es: "Protegen el satélite del calor", de: "Sie schützen den Satelliten vor Hitze", nl: "Ze beschermen de satelliet tegen hitte" },
                    { en: "They help the satellite navigate", es: "Ayudan al satélite a navegar", de: "Sie helfen dem Satelliten zu navigieren", nl: "Ze helpen de satelliet navigeren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is mission control for satellites?",
                    es: "¿Qué es el control de misión para satélites?",
                    de: "Was ist Missionskontrolle für Satelliten?",
                    nl: "Wat is missiecontrole voor satellieten?"
                },
                options: [
                    { en: "Ground stations that monitor and control satellites", es: "Estaciones terrestres que monitorean y controlan satélites", de: "Bodenstationen, die Satelliten überwachen und steuern", nl: "Grondstations die satellieten monitoren en besturen" },
                    { en: "The computer inside the satellite", es: "La computadora dentro del satélite", de: "Der Computer im Satelliten", nl: "De computer in de satelliet" },
                    { en: "The satellite's navigation system", es: "El sistema de navegación del satélite", de: "Das Navigationssystem des Satelliten", nl: "Het navigatiesysteem van de satelliet" },
                    { en: "The rocket that launches satellites", es: "El cohete que lanza satélites", de: "Die Rakete, die Satelliten startet", nl: "De raket die satellieten lanceert" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is space debris or space junk?",
                    es: "¿Qué son los desechos espaciales o basura espacial?",
                    de: "Was ist Weltraummüll oder Weltraumschrott?",
                    nl: "Wat is ruimteafval of ruimtepuin?"
                },
                options: [
                    { en: "Old satellites and rocket parts floating in orbit around Earth", es: "Satélites viejos y partes de cohetes flotando en órbita alrededor de la Tierra", de: "Alte Satelliten und Raketenteile, die in der Umlaufbahn um die Erde schweben", nl: "Oude satellieten en raketonderdelen die in een baan rond de Aarde zweven" },
                    { en: "Garbage thrown out by astronauts", es: "Basura tirada por astronautas", de: "Müll, der von Astronauten weggeworfen wird", nl: "Afval weggegooid door astronauten" },
                    { en: "Natural space rocks", es: "Rocas espaciales naturales", de: "Natürliche Weltraumfelsen", nl: "Natuurlijke ruimterotsen" },
                    { en: "Broken telescopes only", es: "Solo telescopios rotos", de: "Nur kaputte Teleskope", nl: "Alleen kapotte telescopen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do we track satellites?",
                    es: "¿Cómo rastreamos los satélites?",
                    de: "Wie verfolgen wir Satelliten?",
                    nl: "Hoe volgen we satellieten?"
                },
                options: [
                    { en: "Using radar and radio signals from ground stations", es: "Usando radar y señales de radio desde estaciones terrestres", de: "Mit Radar und Funksignalen von Bodenstationen", nl: "Met radar en radiosignalen van grondstations" },
                    { en: "By following them with telescopes", es: "Siguiéndolos con telescopios", de: "Indem man ihnen mit Teleskopen folgt", nl: "Door ze te volgen met telescopen" },
                    { en: "Using GPS only", es: "Usando solo GPS", de: "Nur mit GPS", nl: "Alleen met GPS" },
                    { en: "By watching them with cameras", es: "Observándolos con cámaras", de: "Indem man sie mit Kameras beobachtet", nl: "Door ze te bekijken met camera's" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a space probe?",
                    es: "¿Qué es una sonda espacial?",
                    de: "Was ist eine Raumsonde?",
                    nl: "Wat is een ruimtesonde?"
                },
                options: [
                    { en: "An unmanned spacecraft designed to explore space and other planets", es: "Una nave espacial no tripulada diseñada para explorar el espacio y otros planetas", de: "Ein unbemanntes Raumschiff, das entwickelt wurde, um den Weltraum und andere Planeten zu erforschen", nl: "Een onbemand ruimteschip ontworpen om de ruimte en andere planeten te verkennen" },
                    { en: "A tool for examining satellites", es: "Una herramienta para examinar satélites", de: "Ein Werkzeug zur Untersuchung von Satelliten", nl: "Een gereedschap om satellieten te onderzoeken" },
                    { en: "A medical device used in space", es: "Un dispositivo médico usado en el espacio", de: "Ein medizinisches Gerät, das im Weltraum verwendet wird", nl: "Een medisch apparaat gebruikt in de ruimte" },
                    { en: "A type of space suit", es: "Un tipo de traje espacial", de: "Eine Art Raumanzug", nl: "Een soort ruimtepak" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the purpose of Earth observation satellites?",
                    es: "¿Cuál es el propósito de los satélites de observación de la Tierra?",
                    de: "Was ist der Zweck von Erdbeobachtungssatelliten?",
                    nl: "Wat is het doel van aardwaarnemingssatellieten?"
                },
                options: [
                    { en: "To monitor changes on Earth's surface, climate, and environment", es: "Monitorear cambios en la superficie, clima y ambiente de la Tierra", de: "Veränderungen auf der Erdoberfläche, dem Klima und der Umwelt zu überwachen", nl: "Om veranderingen op het aardoppervlak, klimaat en milieu te monitoren" },
                    { en: "To count how many people live on Earth", es: "Contar cuánta gente vive en la Tierra", de: "Zu zählen, wie viele Menschen auf der Erde leben", nl: "Om te tellen hoeveel mensen op Aarde wonen" },
                    { en: "To control Earth's rotation", es: "Controlar la rotación de la Tierra", de: "Die Erdrotation zu kontrollieren", nl: "Om de rotatie van de Aarde te beheersen" },
                    { en: "To provide internet only", es: "Solo para proveer internet", de: "Nur um Internet bereitzustellen", nl: "Alleen om internet te verstrekken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happens to satellites when they stop working?",
                    es: "¿Qué pasa con los satélites cuando dejan de funcionar?",
                    de: "Was passiert mit Satelliten, wenn sie aufhören zu funktionieren?",
                    nl: "Wat gebeurt er met satellieten wanneer ze stoppen met werken?"
                },
                options: [
                    { en: "They become space debris unless moved to a graveyard orbit", es: "Se convierten en desechos espaciales a menos que se muevan a una órbita cementerio", de: "Sie werden zu Weltraummüll, es sei denn, sie werden in eine Friedhofsumlaufbahn bewegt", nl: "Ze worden ruimteafval tenzij ze naar een begraafplaatsbaan worden verplaatst" },
                    { en: "They automatically return to Earth", es: "Regresan automáticamente a la Tierra", de: "Sie kehren automatisch zur Erde zurück", nl: "Ze keren automatisch terug naar de Aarde" },
                    { en: "They fix themselves", es: "Se reparan solos", de: "Sie reparieren sich selbst", nl: "Ze repareren zichzelf" },
                    { en: "They disappear completely", es: "Desaparecen completamente", de: "Sie verschwinden vollständig", nl: "Ze verdwijnen volledig" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a CubeSat?",
                    es: "¿Qué es un CubeSat?",
                    de: "Was ist ein CubeSat?",
                    nl: "Wat is een CubeSat?"
                },
                options: [
                    { en: "A small, cube-shaped satellite that's cheaper to build and launch", es: "Un satélite pequeño en forma de cubo que es más barato de construir y lanzar", de: "Ein kleiner, würfelförmiger Satellit, der billiger zu bauen und zu starten ist", nl: "Een kleine, kubusachtige satelliet die goedkoper is om te bouwen en te lanceren" },
                    { en: "A satellite made of ice cubes", es: "Un satélite hecho de cubos de hielo", de: "Ein Satellit aus Eiswürfeln", nl: "Een satelliet gemaakt van ijsblokjes" },
                    { en: "A satellite with six sides only", es: "Un satélite con solo seis lados", de: "Ein Satellit mit nur sechs Seiten", nl: "Een satelliet met alleen zes zijden" },
                    { en: "A gaming satellite", es: "Un satélite de juegos", de: "Ein Spiele-Satellit", nl: "Een spelsatelliet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do satellites stay in orbit?",
                    es: "¿Cómo se mantienen los satélites en órbita?",
                    de: "Wie bleiben Satelliten in der Umlaufbahn?",
                    nl: "Hoe blijven satellieten in een baan?"
                },
                options: [
                    { en: "By balancing their forward speed with Earth's gravitational pull", es: "Equilibrando su velocidad hacia adelante con la atracción gravitacional de la Tierra", de: "Indem sie ihre Vorwärtsgeschwindigkeit mit der Gravitationsanziehung der Erde ausbalancieren", nl: "Door hun voorwaartse snelheid in balans te houden met de zwaartekrachtaantrekking van de Aarde" },
                    { en: "By using rocket engines constantly", es: "Usando motores de cohete constantemente", de: "Indem sie ständig Raketenantriebe verwenden", nl: "Door constant raketmotoren te gebruiken" },
                    { en: "By being very light", es: "Siendo muy ligeros", de: "Indem sie sehr leicht sind", nl: "Door heel licht te zijn" },
                    { en: "By having magnetic fields", es: "Teniendo campos magnéticos", de: "Indem sie Magnetfelder haben", nl: "Door magnetische velden te hebben" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is satellite internet?",
                    es: "¿Qué es internet satelital?",
                    de: "Was ist Satelliten-Internet?",
                    nl: "Wat is satellietinternet?"
                },
                options: [
                    { en: "Internet connection provided through communication satellites", es: "Conexión a internet proporcionada a través de satélites de comunicación", de: "Internetverbindung, die über Kommunikationssatelliten bereitgestellt wird", nl: "Internetverbinding verstrekt via communicatiesatellieten" },
                    { en: "Internet only for satellites", es: "Internet solo para satélites", de: "Internet nur für Satelliten", nl: "Internet alleen voor satellieten" },
                    { en: "Websites about satellites", es: "Sitios web sobre satélites", de: "Websites über Satelliten", nl: "Websites over satellieten" },
                    { en: "Internet that works only in space", es: "Internet que funciona solo en el espacio", de: "Internet, das nur im Weltraum funktioniert", nl: "Internet dat alleen in de ruimte werkt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are military satellites used for?",
                    es: "¿Para qué se usan los satélites militares?",
                    de: "Wofür werden Militärsatelliten verwendet?",
                    nl: "Waarvoor worden militaire satellieten gebruikt?"
                },
                options: [
                    { en: "For secure communications, navigation, and surveillance", es: "Para comunicaciones seguras, navegación y vigilancia", de: "Für sichere Kommunikation, Navigation und Überwachung", nl: "Voor veilige communicatie, navigatie en bewaking" },
                    { en: "To attack other satellites", es: "Para atacar otros satélites", de: "Um andere Satelliten anzugreifen", nl: "Om andere satellieten aan te vallen" },
                    { en: "Only for watching TV", es: "Solo para ver TV", de: "Nur um fernzusehen", nl: "Alleen om TV te kijken" },
                    { en: "To control the weather", es: "Para controlar el clima", de: "Um das Wetter zu kontrollieren", nl: "Om het weer te beheersen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How long do most satellites last?",
                    es: "¿Cuánto duran la mayoría de los satélites?",
                    de: "Wie lange halten die meisten Satelliten?",
                    nl: "Hoe lang gaan de meeste satellieten mee?"
                },
                options: [
                    { en: "5 to 15 years depending on their mission and technology", es: "5 a 15 años dependiendo de su misión y tecnología", de: "5 bis 15 Jahre, abhängig von ihrer Mission und Technologie", nl: "5 tot 15 jaar afhankelijk van hun missie en technologie" },
                    { en: "Only 1 year", es: "Solo 1 año", de: "Nur 1 Jahr", nl: "Slechts 1 jaar" },
                    { en: "Forever", es: "Para siempre", de: "Für immer", nl: "Voor altijd" },
                    { en: "100 years", es: "100 años", de: "100 Jahre", nl: "100 jaar" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is satellite TV?",
                    es: "¿Qué es la TV satelital?",
                    de: "Was ist Satelliten-TV?",
                    nl: "Wat is satelliet-TV?"
                },
                options: [
                    { en: "Television signals broadcast from satellites to dish antennas", es: "Señales de televisión transmitidas desde satélites a antenas parabólicas", de: "Fernsehsignale, die von Satelliten an Parabolantennen übertragen werden", nl: "Televisiesignalen uitgezonden van satellieten naar schotelantennes" },
                    { en: "TV shows about satellites", es: "Programas de TV sobre satélites", de: "TV-Sendungen über Satelliten", nl: "TV-programma's over satellieten" },
                    { en: "Television for astronauts only", es: "Televisión solo para astronautas", de: "Fernsehen nur für Astronauten", nl: "Televisie alleen voor astronauten" },
                    { en: "TVs that look like satellites", es: "TVs que parecen satélites", de: "Fernseher, die wie Satelliten aussehen", nl: "TV's die eruitzien als satellieten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a satellite constellation?",
                    es: "¿Qué es una constelación de satélites?",
                    de: "Was ist eine Satellitenkonstellation?",
                    nl: "Wat is een satellietconstellatie?"
                },
                options: [
                    { en: "A group of satellites working together to provide global coverage", es: "Un grupo de satélites trabajando juntos para proveer cobertura global", de: "Eine Gruppe von Satelliten, die zusammenarbeiten, um globale Abdeckung zu bieten", nl: "Een groep satellieten die samenwerken om wereldwijde dekking te bieden" },
                    { en: "Satellites arranged in star patterns", es: "Satélites ordenados en patrones de estrella", de: "Satelliten, die in Sternmustern angeordnet sind", nl: "Satellieten gerangschikt in sterpatronen" },
                    { en: "Satellites that only work at night", es: "Satélites que solo funcionan de noche", de: "Satelliten, die nur nachts funktionieren", nl: "Satellieten die alleen 's nachts werken" },
                    { en: "Broken satellites floating together", es: "Satélites rotos flotando juntos", de: "Kaputte Satelliten, die zusammen schweben", nl: "Kapotte satellieten die samen drijven" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the difference between LEO, MEO, and GEO orbits?",
                    es: "¿Cuál es la diferencia entre las órbitas LEO, MEO y GEO?",
                    de: "Was ist der Unterschied zwischen LEO-, MEO- und GEO-Umlaufbahnen?",
                    nl: "Wat is het verschil tussen LEO, MEO en GEO banen?"
                },
                options: [
                    { en: "They are at different heights: Low, Medium, and Geostationary Earth Orbit", es: "Están a diferentes alturas: Órbita Terrestre Baja, Media y Geoestacionaria", de: "Sie sind in verschiedenen Höhen: Niedrige, Mittlere und Geostationäre Erdumlaufbahn", nl: "Ze bevinden zich op verschillende hoogtes: Lage, Middel en Geostationaire Aardbaan" },
                    { en: "They have different shapes: round, oval, and square", es: "Tienen diferentes formas: redonda, oval y cuadrada", de: "Sie haben verschiedene Formen: rund, oval und quadratisch", nl: "Ze hebben verschillende vormen: rond, ovaal en vierkant" },
                    { en: "They are for different countries", es: "Son para diferentes países", de: "Sie sind für verschiedene Länder", nl: "Ze zijn voor verschillende landen" },
                    { en: "LEO is for lions, MEO for cats, GEO for dogs", es: "LEO es para leones, MEO para gatos, GEO para perros", de: "LEO ist für Löwen, MEO für Katzen, GEO für Hunde", nl: "LEO is voor leeuwen, MEO voor katten, GEO voor honden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is propulsion in satellites?",
                    es: "¿Qué es la propulsión en satélites?",
                    de: "Was ist Antrieb bei Satelliten?",
                    nl: "Wat is voortstuwing bij satellieten?"
                },
                options: [
                    { en: "Small thrusters that help adjust the satellite's position and orbit", es: "Pequeños propulsores que ayudan a ajustar la posición y órbita del satélite", de: "Kleine Triebwerke, die helfen, die Position und Umlaufbahn des Satelliten anzupassen", nl: "Kleine stuwraketten die helpen de positie en baan van de satelliet aan te passen" },
                    { en: "The main engine that launches the satellite", es: "El motor principal que lanza el satélite", de: "Der Hauptmotor, der den Satelliten startet", nl: "De hoofdmotor die de satelliet lanceert" },
                    { en: "Solar panels that move the satellite", es: "Paneles solares que mueven el satélite", de: "Solarpanels, die den Satelliten bewegen", nl: "Zonnepanelen die de satelliet bewegen" },
                    { en: "Magnets that push the satellite", es: "Imanes que empujan el satélite", de: "Magnete, die den Satelliten schieben", nl: "Magneten die de satelliet duwen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do satellites communicate with Earth?",
                    es: "¿Cómo se comunican los satélites con la Tierra?",
                    de: "Wie kommunizieren Satelliten mit der Erde?",
                    nl: "Hoe communiceren satellieten met de Aarde?"
                },
                options: [
                    { en: "Using radio waves and antennas", es: "Usando ondas de radio y antenas", de: "Mit Radiowellen und Antennen", nl: "Met radiogolven en antennes" },
                    { en: "By sending letters", es: "Enviando cartas", de: "Indem sie Briefe senden", nl: "Door brieven te sturen" },
                    { en: "Through cables", es: "A través de cables", de: "Durch Kabel", nl: "Via kabels" },
                    { en: "Using laser beams only", es: "Usando solo rayos láser", de: "Nur mit Laserstrahlen", nl: "Alleen met laserstralen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is attitude control in satellites?",
                    es: "¿Qué es el control de actitud en satélites?",
                    de: "Was ist Lageregelung bei Satelliten?",
                    nl: "Wat is attituderegeling bij satellieten?"
                },
                options: [
                    { en: "Systems that control which direction the satellite points", es: "Sistemas que controlan hacia qué dirección apunta el satélite", de: "Systeme, die kontrollieren, in welche Richtung der Satellit zeigt", nl: "Systemen die regelen naar welke richting de satelliet wijst" },
                    { en: "How polite the satellite is", es: "Qué tan educado es el satélite", de: "Wie höflich der Satellit ist", nl: "Hoe beleefd de satelliet is" },
                    { en: "The satellite's speed control", es: "El control de velocidad del satélite", de: "Die Geschwindigkeitskontrolle des Satelliten", nl: "De snelheidsregeling van de satelliet" },
                    { en: "The satellite's temperature control", es: "El control de temperatura del satélite", de: "Die Temperaturkontrolle des Satelliten", nl: "De temperatuurregeling van de satelliet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are scientific satellites used for?",
                    es: "¿Para qué se usan los satélites científicos?",
                    de: "Wofür werden wissenschaftliche Satelliten verwendet?",
                    nl: "Waarvoor worden wetenschappelijke satellieten gebruikt?"
                },
                options: [
                    { en: "To study space, Earth, and conduct experiments", es: "Para estudiar el espacio, la Tierra y realizar experimentos", de: "Um den Weltraum und die Erde zu studieren und Experimente durchzuführen", nl: "Om de ruimte en de Aarde te bestuderen en experimenten uit te voeren" },
                    { en: "Only to take pretty pictures", es: "Solo para tomar fotos bonitas", de: "Nur um hübsche Bilder zu machen", nl: "Alleen om mooie foto's te maken" },
                    { en: "To count stars", es: "Para contar estrellas", de: "Um Sterne zu zählen", nl: "Om sterren te tellen" },
                    { en: "To find alien life only", es: "Solo para encontrar vida extraterrestre", de: "Nur um außerirdisches Leben zu finden", nl: "Alleen om buitenaards leven te vinden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a payload on a satellite?",
                    es: "¿Qué es una carga útil en un satélite?",
                    de: "Was ist eine Nutzlast bei einem Satelliten?",
                    nl: "Wat is een nuttige lading op een satelliet?"
                },
                options: [
                    { en: "The equipment that does the satellite's main job", es: "El equipo que hace el trabajo principal del satélite", de: "Die Ausrüstung, die die Hauptaufgabe des Satelliten erledigt", nl: "De apparatuur die de hoofdtaak van de satelliet uitvoert" },
                    { en: "Extra weight to make it heavy", es: "Peso extra para hacerlo pesado", de: "Zusätzliches Gewicht, um es schwer zu machen", nl: "Extra gewicht om het zwaar te maken" },
                    { en: "The rocket that launches it", es: "El cohete que lo lanza", de: "Die Rakete, die es startet", nl: "De raket die het lanceert" },
                    { en: "Fuel for the satellite", es: "Combustible para el satélite", de: "Treibstoff für den Satelliten", nl: "Brandstof voor de satelliet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is remote sensing?",
                    es: "¿Qué es la teledetección?",
                    de: "Was ist Fernerkundung?",
                    nl: "Wat is remote sensing?"
                },
                options: [
                    { en: "Gathering information about objects from a distance using satellites", es: "Recopilar información sobre objetos a distancia usando satélites", de: "Informationen über Objekte aus der Ferne mit Satelliten sammeln", nl: "Informatie verzamelen over objecten op afstand met satellieten" },
                    { en: "Controlling satellites with a remote", es: "Controlar satélites con un control remoto", de: "Satelliten mit einer Fernbedienung steuern", nl: "Satellieten besturen met een afstandsbediening" },
                    { en: "Sensing when satellites are far away", es: "Detectar cuando los satélites están lejos", de: "Spüren, wenn Satelliten weit weg sind", nl: "Voelen wanneer satellieten ver weg zijn" },
                    { en: "Remote control for TV satellites", es: "Control remoto para satélites de TV", de: "Fernbedienung für TV-Satelliten", nl: "Afstandsbediening voor TV-satellieten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happens when a satellite re-enters Earth's atmosphere?",
                    es: "¿Qué pasa cuando un satélite reingresa a la atmósfera de la Tierra?",
                    de: "Was passiert, wenn ein Satellit in die Erdatmosphäre wiedereintritt?",
                    nl: "Wat gebeurt er wanneer een satelliet weer de atmosfeer van de Aarde binnenkomt?"
                },
                options: [
                    { en: "Most of it burns up due to friction with air molecules", es: "La mayoría se quema debido a la fricción con las moléculas de aire", de: "Das meiste verbrennt aufgrund der Reibung mit Luftmolekülen", nl: "Het meeste verbrandt door wrijving met luchtmoleculen" },
                    { en: "It lands safely like an airplane", es: "Aterriza de manera segura como un avión", de: "Es landet sicher wie ein Flugzeug", nl: "Het landt veilig als een vliegtuig" },
                    { en: "It bounces back to space", es: "Rebota de vuelta al espacio", de: "Es prallt zurück ins Weltall", nl: "Het kaatst terug naar de ruimte" },
                    { en: "It freezes in the atmosphere", es: "Se congela en la atmósfera", de: "Es friert in der Atmosphäre ein", nl: "Het bevriest in de atmosfeer" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a ground station?",
                    es: "¿Qué es una estación terrestre?",
                    de: "Was ist eine Bodenstation?",
                    nl: "Wat is een grondstation?"
                },
                options: [
                    { en: "A facility on Earth that communicates with satellites", es: "Una instalación en la Tierra que se comunica con satélites", de: "Eine Einrichtung auf der Erde, die mit Satelliten kommuniziert", nl: "Een faciliteit op Aarde die communiceert met satellieten" },
                    { en: "The bottom part of a satellite", es: "La parte inferior de un satélite", de: "Der untere Teil eines Satelliten", nl: "Het onderste deel van een satelliet" },
                    { en: "A place where satellites land", es: "Un lugar donde aterrizan los satélites", de: "Ein Ort, wo Satelliten landen", nl: "Een plek waar satellieten landen" },
                    { en: "A gas station for rockets", es: "Una gasolinera para cohetes", de: "Eine Tankstelle für Raketen", nl: "Een tankstation voor raketten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do GPS satellites know their exact position?",
                    es: "¿Cómo saben los satélites GPS su posición exacta?",
                    de: "Wie wissen GPS-Satelliten ihre genaue Position?",
                    nl: "Hoe weten GPS-satellieten hun exacte positie?"
                },
                options: [
                    { en: "They use atomic clocks and ground stations track them precisely", es: "Usan relojes atómicos y las estaciones terrestres los rastrean con precisión", de: "Sie verwenden Atomuhren und Bodenstationen verfolgen sie genau", nl: "Ze gebruiken atoomklokken en grondstations volgen ze nauwkeurig" },
                    { en: "They ask other satellites", es: "Le preguntan a otros satélites", de: "Sie fragen andere Satelliten", nl: "Ze vragen het aan andere satellieten" },
                    { en: "They look at stars", es: "Miran las estrellas", de: "Sie schauen auf die Sterne", nl: "Ze kijken naar sterren" },
                    { en: "They use compasses", es: "Usan brújulas", de: "Sie verwenden Kompasse", nl: "Ze gebruiken kompassen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is satellite latency?",
                    es: "¿Qué es la latencia satelital?",
                    de: "Was ist Satellitenlatenz?",
                    nl: "Wat is satellietlatentie?"
                },
                options: [
                    { en: "The delay in signal transmission due to the distance to satellites", es: "El retraso en la transmisión de señales debido a la distancia a los satélites", de: "Die Verzögerung bei der Signalübertragung aufgrund der Entfernung zu Satelliten", nl: "De vertraging in signaaltransmissie door de afstand tot satellieten" },
                    { en: "How late satellites are for their appointments", es: "Qué tan tarde llegan los satélites a sus citas", de: "Wie spät Satelliten zu ihren Terminen sind", nl: "Hoe laat satellieten zijn voor hun afspraken" },
                    { en: "The age of satellites", es: "La edad de los satélites", de: "Das Alter der Satelliten", nl: "De leeftijd van satellieten" },
                    { en: "How long satellites take to launch", es: "Cuánto tiempo tardan los satélites en lanzarse", de: "Wie lange Satelliten zum Starten brauchen", nl: "Hoe lang satellieten erover doen om te lanceren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What role do satellites play in modern life?",
                    es: "¿Qué papel juegan los satélites en la vida moderna?",
                    de: "Welche Rolle spielen Satelliten im modernen Leben?",
                    nl: "Welke rol spelen satellieten in het moderne leven?"
                },
                options: [
                    { en: "They enable GPS, communication, weather forecasting, and internet", es: "Permiten GPS, comunicación, pronóstico del clima e internet", de: "Sie ermöglichen GPS, Kommunikation, Wettervorhersage und Internet", nl: "Ze maken GPS, communicatie, weersvoorspelling en internet mogelijk" },
                    { en: "They only provide TV entertainment", es: "Solo proveen entretenimiento televisivo", de: "Sie bieten nur TV-Unterhaltung", nl: "Ze bieden alleen TV-entertainment" },
                    { en: "They control all electronics", es: "Controlan toda la electrónica", de: "Sie kontrollieren alle Elektronik", nl: "Ze beheersen alle elektronica" },
                    { en: "They are just for decoration", es: "Solo son para decoración", de: "Sie sind nur zur Dekoration", nl: "Ze zijn alleen voor decoratie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What challenges do satellite engineers face?",
                    es: "¿Qué desafíos enfrentan los ingenieros de satélites?",
                    de: "Welche Herausforderungen haben Satellitenentwickler?",
                    nl: "Welke uitdagingen hebben satellietingenieurs?"
                },
                options: [
                    { en: "Space radiation, temperature extremes, and limited power", es: "Radiación espacial, temperaturas extremas y energía limitada", de: "Weltraumstrahlung, extreme Temperaturen und begrenzte Energie", nl: "Ruimtestraling, extreme temperaturen en beperkte energie" },
                    { en: "Only the cost of materials", es: "Solo el costo de los materiales", de: "Nur die Kosten der Materialien", nl: "Alleen de kosten van materialen" },
                    { en: "Finding the right colors", es: "Encontrar los colores correctos", de: "Die richtigen Farben finden", nl: "De juiste kleuren vinden" },
                    { en: "Making them look beautiful", es: "Hacer que se vean hermosos", de: "Sie schön aussehen lassen", nl: "Ze er mooi uit laten zien" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the future of satellite technology?",
                    es: "¿Cuál es el futuro de la tecnología satelital?",
                    de: "Was ist die Zukunft der Satellitentechnologie?",
                    nl: "Wat is de toekomst van satelliettechnologie?"
                },
                options: [
                    { en: "Smaller satellites, mega-constellations, and new applications", es: "Satélites más pequeños, mega-constelaciones y nuevas aplicaciones", de: "Kleinere Satelliten, Mega-Konstellationen und neue Anwendungen", nl: "Kleinere satellieten, mega-constellaties en nieuwe toepassingen" },
                    { en: "All satellites will be replaced by drones", es: "Todos los satélites serán reemplazados por drones", de: "Alle Satelliten werden durch Drohnen ersetzt", nl: "Alle satellieten worden vervangen door drones" },
                    { en: "Satellites will become obsolete", es: "Los satélites se volverán obsoletos", de: "Satelliten werden veraltet", nl: "Satellieten worden verouderd" },
                    { en: "Only military satellites will exist", es: "Solo existirán satélites militares", de: "Nur Militärsatelliten werden existieren", nl: "Alleen militaire satellieten zullen bestaan" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a bus in satellite terminology?",
                    es: "¿Qué es un bus en terminología satelital?",
                    de: "Was ist ein Bus in der Satellienterminologie?",
                    nl: "Wat is een bus in satelliettechnologie?"
                },
                options: [
                    { en: "The main structure that houses all satellite systems and components", es: "La estructura principal que aloja todos los sistemas y componentes del satélite", de: "Die Hauptstruktur, die alle Satellitensysteme und Komponenten beherbergt", nl: "De hoofdstructuur die alle satellietsystemen en componenten bevat" },
                    { en: "A vehicle that transports satellites", es: "Un vehículo que transporta satélites", de: "Ein Fahrzeug, das Satelliten transportiert", nl: "Een voertuig dat satellieten vervoert" },
                    { en: "The communication line between satellites", es: "La línea de comunicación entre satélites", de: "Die Kommunikationsleitung zwischen Satelliten", nl: "De communicatielijn tussen satellieten" },
                    { en: "A school bus for astronaut training", es: "Un autobús escolar para entrenamiento de astronautas", de: "Ein Schulbus für Astronautentraining", nl: "Een schoolbus voor astronautentraining" }
                ],
                correct: 0,
                explanation: {
                    en: "The satellite bus provides power, thermal control, attitude control, and structural support for the payload instruments.",
                    es: "El bus del satélite proporciona energía, control térmico, control de actitud y soporte estructural para los instrumentos de carga útil.",
                    de: "Der Satellitenbus stellt Energie, Thermalkontrolle, Lageregelung und strukturelle Unterstützung für die Nutzlastinstrumente bereit.",
                    nl: "De satellietbus biedt stroom, thermische controle, attituderegeling en structurele ondersteuning voor de nuttige lading instrumenten."
                }
            },
            {
                question: {
                    en: "What is the purpose of thermal control systems on satellites?",
                    es: "¿Cuál es el propósito de los sistemas de control térmico en los satélites?",
                    de: "Was ist der Zweck von Wärmekontrollsystemen bei Satelliten?",
                    nl: "Wat is het doel van thermische controlesystemen op satellieten?"
                },
                options: [
                    { en: "To keep satellite components within safe operating temperatures", es: "Mantener los componentes del satélite dentro de temperaturas de operación seguras", de: "Satellitenkomponenten innerhalb sicherer Betriebstemperaturen zu halten", nl: "Om satellietcomponenten binnen veilige bedrijfstemperaturen te houden" },
                    { en: "To heat up the satellite engines", es: "Para calentar los motores del satélite", de: "Um die Satellitentriebwerke aufzuwärmen", nl: "Om de satelliemotoren op te warmen" },
                    { en: "To cool down the Earth's atmosphere", es: "Para enfriar la atmósfera de la Tierra", de: "Um die Erdatmosphäre abzukühlen", nl: "Om de atmosfeer van de Aarde af te koelen" },
                    { en: "To control the weather on Earth", es: "Para controlar el clima en la Tierra", de: "Um das Wetter auf der Erde zu kontrollieren", nl: "Om het weer op Aarde te beheersen" }
                ],
                correct: 0,
                explanation: {
                    en: "Space has extreme temperature variations, and thermal control prevents components from overheating in sunlight or freezing in shadow.",
                    es: "El espacio tiene variaciones extremas de temperatura, y el control térmico evita que los componentes se sobrecalienten bajo la luz solar o se congelen en la sombra.",
                    de: "Der Weltraum hat extreme Temperaturschwankungen, und die Wärmekontrolle verhindert, dass Komponenten im Sonnenlicht überhitzen oder im Schatten einfrieren.",
                    nl: "De ruimte heeft extreme temperatuurschommelingen, en thermische controle voorkomt dat componenten oververhitten in zonlicht of bevriezen in schaduw."
                }
            },
            {
                question: {
                    en: "What is a transponder on a satellite?",
                    es: "¿Qué es un transpondedor en un satélite?",
                    de: "Was ist ein Transponder bei einem Satelliten?",
                    nl: "Wat is een transponder op een satelliet?"
                },
                options: [
                    { en: "A device that receives, amplifies, and retransmits radio signals", es: "Un dispositivo que recibe, amplifica y retransmite señales de radio", de: "Ein Gerät, das Funksignale empfängt, verstärkt und weiterleitet", nl: "Een apparaat dat radiosignalen ontvangt, versterkt en doorzendt" },
                    { en: "A tool that transports the satellite", es: "Una herramienta que transporta el satélite", de: "Ein Werkzeug, das den Satelliten transportiert", nl: "Een gereedschap dat de satelliet vervoert" },
                    { en: "A transparent window on the satellite", es: "Una ventana transparente en el satélite", de: "Ein transparentes Fenster am Satelliten", nl: "Een transparant raam op de satelliet" },
                    { en: "A response system for emergencies", es: "Un sistema de respuesta para emergencias", de: "Ein Antwortsystem für Notfälle", nl: "Een responssysteem voor noodgevallen" }
                ],
                correct: 0,
                explanation: {
                    en: "Transponders are essential for communication satellites, allowing them to relay signals between different locations on Earth.",
                    es: "Los transpondedores son esenciales para los satélites de comunicación, permitiéndoles retransmitir señales entre diferentes ubicaciones en la Tierra.",
                    de: "Transponder sind wesentlich für Kommunikationssatelliten und ermöglichen ihnen, Signale zwischen verschiedenen Orten auf der Erde weiterzuleiten.",
                    nl: "Transponders zijn essentieel voor communicatiesatellieten, waardoor ze signalen kunnen doorsturen tussen verschillende locaties op Aarde."
                }
            },
            {
                question: {
                    en: "What is the Kessler Syndrome?",
                    es: "¿Qué es el Síndrome de Kessler?",
                    de: "Was ist das Kessler-Syndrom?",
                    nl: "Wat is het Kessler-syndroom?"
                },
                options: [
                    { en: "A cascading effect where space debris collisions create more debris", es: "Un efecto en cascada donde las colisiones de desechos espaciales crean más desechos", de: "Ein Kaskadeneffekt, bei dem Weltraummüll-Kollisionen mehr Müll erzeugen", nl: "Een cascade-effect waarbij botsingen van ruimteafval meer afval creëren" },
                    { en: "A disease that affects astronauts in space", es: "Una enfermedad que afecta a los astronautas en el espacio", de: "Eine Krankheit, die Astronauten im Weltraum betrifft", nl: "Een ziekte die astronauten in de ruimte treft" },
                    { en: "A type of satellite malfunction", es: "Un tipo de mal funcionamiento del satélite", de: "Eine Art Satellitenfehlfunktion", nl: "Een soort satellietstoringen" },
                    { en: "A method for cleaning space junk", es: "Un método para limpiar basura espacial", de: "Eine Methode zur Reinigung von Weltraummüll", nl: "Een methode om ruimteafval op te ruimen" }
                ],
                correct: 0,
                explanation: {
                    en: "This theoretical scenario could make certain orbital regions unusable due to an exponential increase in debris from chain-reaction collisions.",
                    es: "Este escenario teórico podría hacer que ciertas regiones orbitales sean inutilizables debido a un aumento exponencial de desechos por colisiones en cadena.",
                    de: "Dieses theoretische Szenario könnte bestimmte Orbitalbereiche aufgrund eines exponentiellen Anstiegs von Trümmern durch Kettenreaktionskollisionen unbrauchbar machen.",
                    nl: "Dit theoretische scenario zou bepaalde baan-gebieden onbruikbaar kunnen maken door een exponentiële toename van puin door kettingreactie-botsingen."
                }
            },
            {
                question: {
                    en: "What is synthetic aperture radar (SAR) on satellites?",
                    es: "¿Qué es el radar de apertura sintética (SAR) en satélites?",
                    de: "Was ist Synthetic Aperture Radar (SAR) bei Satelliten?",
                    nl: "Wat is synthetische apertuur radar (SAR) op satellieten?"
                },
                options: [
                    { en: "A radar system that creates high-resolution images of Earth's surface", es: "Un sistema de radar que crea imágenes de alta resolución de la superficie terrestre", de: "Ein Radarsystem, das hochauflösende Bilder der Erdoberfläche erstellt", nl: "Een radarsysteem dat hoge resolutie beelden van het aardoppervlak maakt" },
                    { en: "A fake antenna system", es: "Un sistema de antena falso", de: "Ein falsches Antennensystem", nl: "Een nep antennesysteem" },
                    { en: "A system that opens and closes satellite doors", es: "Un sistema que abre y cierra puertas de satélite", de: "Ein System, das Satellitentüren öffnet und schließt", nl: "Een systeem dat satellietdeuren opent en sluit" },
                    { en: "A synthetic material for satellite construction", es: "Un material sintético para la construcción de satélites", de: "Ein synthetisches Material für den Satellitenbau", nl: "Een synthetisch materiaal voor satellietbouw" }
                ],
                correct: 0,
                explanation: {
                    en: "SAR can penetrate clouds and work day or night, making it valuable for monitoring terrain, tracking changes, and mapping.",
                    es: "SAR puede penetrar nubes y funcionar día o noche, haciéndolo valioso para monitorear terreno, rastrear cambios y mapear.",
                    de: "SAR kann Wolken durchdringen und Tag und Nacht arbeiten, was es wertvoll für die Geländeüberwachung, Verfolgung von Änderungen und Kartierung macht.",
                    nl: "SAR kan wolken doordringen en dag en nacht werken, waardoor het waardevol is voor terreinmonitoring, het volgen van veranderingen en kartering."
                }
            },
            {
                question: {
                    en: "What is a deployable antenna on a satellite?",
                    es: "¿Qué es una antena desplegable en un satélite?",
                    de: "Was ist eine ausfahrbare Antenne bei einem Satelliten?",
                    nl: "Wat is een uitklapbare antenne op een satelliet?"
                },
                options: [
                    { en: "An antenna that unfolds or extends after the satellite reaches orbit", es: "Una antena que se despliega o extiende después de que el satélite alcanza la órbita", de: "Eine Antenne, die sich entfaltet oder ausstreckt, nachdem der Satellit die Umlaufbahn erreicht hat", nl: "Een antenne die zich ontvouwt of uitstrekt nadat de satelliet de baan heeft bereikt" },
                    { en: "An antenna that can be removed from the satellite", es: "Una antena que se puede quitar del satélite", de: "Eine Antenne, die vom Satelliten entfernt werden kann", nl: "Een antenne die van de satelliet kan worden verwijderd" },
                    { en: "An antenna used only during deployment", es: "Una antena usada solo durante el despliegue", de: "Eine Antenne, die nur während der Bereitstellung verwendet wird", nl: "Een antenne die alleen tijdens het inzetten wordt gebruikt" },
                    { en: "An antenna for deploying other satellites", es: "Una antena para desplegar otros satélites", de: "Eine Antenne zur Bereitstellung anderer Satelliten", nl: "Een antenne voor het inzetten van andere satellieten" }
                ],
                correct: 0,
                explanation: {
                    en: "Large antennas are folded during launch to fit inside the rocket fairing, then deployed in space to achieve their full operational size.",
                    es: "Las antenas grandes se pliegan durante el lanzamiento para caber dentro de la cofia del cohete, luego se despliegan en el espacio para alcanzar su tamaño operacional completo.",
                    de: "Große Antennen werden während des Starts gefaltet, um in die Raketenverkleidung zu passen, dann im Weltraum entfaltet, um ihre volle Betriebsgröße zu erreichen.",
                    nl: "Grote antennes worden tijdens de lancering gevouwen om in de raketkap te passen, en worden dan in de ruimte uitgevouwen om hun volledige operationele grootte te bereiken."
                }
            },
            {
                question: {
                    en: "What is satellite spectrum management?",
                    es: "¿Qué es la gestión del espectro satelital?",
                    de: "Was ist Satelliten-Spektrumverwaltung?",
                    nl: "Wat is satelliet spectrumbeheer?"
                },
                options: [
                    { en: "Coordinating radio frequencies to prevent interference between satellites", es: "Coordinar frecuencias de radio para prevenir interferencia entre satélites", de: "Koordination von Radiofrequenzen zur Verhinderung von Interferenzen zwischen Satelliten", nl: "Coördineren van radiofrequenties om interferentie tussen satellieten te voorkomen" },
                    { en: "Managing the colors satellites can display", es: "Gestionar los colores que pueden mostrar los satélites", de: "Verwaltung der Farben, die Satelliten anzeigen können", nl: "Beheren van kleuren die satellieten kunnen tonen" },
                    { en: "Controlling satellite brightness levels", es: "Controlar los niveles de brillo del satélite", de: "Kontrolle der Satellitenhelligkeit", nl: "Beheersen van satelliethelderheid" },
                    { en: "Managing satellite viewing schedules", es: "Gestionar los horarios de visualización de satélites", de: "Verwaltung von Satelliten-Betrachtungsplänen", nl: "Beheren van satellietkijkschema's" }
                ],
                correct: 0,
                explanation: {
                    en: "International organizations allocate specific frequency bands to different satellite services to ensure efficient and interference-free operations.",
                    es: "Las organizaciones internacionales asignan bandas de frecuencia específicas a diferentes servicios satelitales para asegurar operaciones eficientes y libres de interferencia.",
                    de: "Internationale Organisationen weisen verschiedenen Satellitendiensten spezifische Frequenzbänder zu, um effiziente und störungsfreie Operationen sicherzustellen.",
                    nl: "Internationale organisaties wijzen specifieke frequentiebanden toe aan verschillende satelliendiensten om efficiënte en interferentievrije operaties te garanderen."
                }
            },
            {
                question: {
                    en: "What is a satellite's inclination?",
                    es: "¿Qué es la inclinación de un satélite?",
                    de: "Was ist die Inklination eines Satelliten?",
                    nl: "Wat is de inclinatie van een satelliet?"
                },
                options: [
                    { en: "The angle between its orbital plane and Earth's equatorial plane", es: "El ángulo entre su plano orbital y el plano ecuatorial de la Tierra", de: "Der Winkel zwischen seiner Orbitalebene und der Äquatorebene der Erde", nl: "De hoek tussen zijn baanvlak en het equatoriale vlak van de Aarde" },
                    { en: "How much the satellite leans to one side", es: "Cuánto se inclina el satélite hacia un lado", de: "Wie stark sich der Satellit zu einer Seite neigt", nl: "Hoeveel de satelliet naar één kant leunt" },
                    { en: "The satellite's tendency to fall toward Earth", es: "La tendencia del satélite a caer hacia la Tierra", de: "Die Neigung des Satelliten, zur Erde zu fallen", nl: "De neiging van de satelliet om naar de Aarde te vallen" },
                    { en: "How willing the satellite is to work", es: "Qué tan dispuesto está el satélite a trabajar", de: "Wie bereit der Satellit ist zu arbeiten", nl: "Hoe bereid de satelliet is om te werken" }
                ],
                correct: 0,
                explanation: {
                    en: "Orbital inclination determines which parts of Earth the satellite can observe and affects its coverage patterns and mission capabilities.",
                    es: "La inclinación orbital determina qué partes de la Tierra puede observar el satélite y afecta sus patrones de cobertura y capacidades de misión.",
                    de: "Die Orbitalinklination bestimmt, welche Teile der Erde der Satellit beobachten kann, und beeinflusst seine Abdeckungsmuster und Missionsfähigkeiten.",
                    nl: "Orbitale inclinatie bepaalt welke delen van de Aarde de satelliet kan waarnemen en beïnvloedt zijn dekkingspatronen en missiecapaciteiten."
                }
            },
            {
                question: {
                    en: "What is a rideshare mission in satellite launches?",
                    es: "¿Qué es una misión de viaje compartido en lanzamientos de satélites?",
                    de: "Was ist eine Rideshare-Mission bei Satellitenstarts?",
                    nl: "Wat is een rideshare-missie bij satellienlanceringen?"
                },
                options: [
                    { en: "Multiple satellites launched together on the same rocket to share costs", es: "Múltiples satélites lanzados juntos en el mismo cohete para compartir costos", de: "Mehrere Satelliten, die zusammen mit derselben Rakete gestartet werden, um Kosten zu teilen", nl: "Meerdere satellieten gelanceerd samen op dezelfde raket om kosten te delen" },
                    { en: "Satellites that share the same orbit", es: "Satélites que comparten la misma órbita", de: "Satelliten, die sich dieselbe Umlaufbahn teilen", nl: "Satellieten die dezelfde baan delen" },
                    { en: "Satellites that carpool to work", es: "Satélites que comparten auto al trabajo", de: "Satelliten, die zur Arbeit mitfahren", nl: "Satellieten die samen naar het werk rijden" },
                    { en: "Satellites sharing communication frequencies", es: "Satélites compartiendo frecuencias de comunicación", de: "Satelliten, die Kommunikationsfrequenzen teilen", nl: "Satellieten die communicatiefrequenties delen" }
                ],
                correct: 0,
                explanation: {
                    en: "Rideshare missions make satellite deployment more affordable for smaller organizations and enable the launch of many CubeSats and smallsats.",
                    es: "Las misiones de viaje compartido hacen que el despliegue de satélites sea más accesible para organizaciones más pequeñas y permiten el lanzamiento de muchos CubeSats y satélites pequeños.",
                    de: "Rideshare-Missionen machen die Satellitenbereitstellung für kleinere Organisationen erschwinglicher und ermöglichen den Start vieler CubeSats und Kleinsatelliten.",
                    nl: "Rideshare-missies maken satellietinzet betaalbaarder voor kleinere organisaties en maken de lancering van veel CubeSats en kleine satellieten mogelijk."
                }
            },
            {
                question: {
                    en: "What is a satellite's sun-synchronous orbit?",
                    es: "¿Qué es la órbita heliosíncrona de un satélite?",
                    de: "Was ist die sonnensynchrone Umlaufbahn eines Satelliten?",
                    nl: "Wat is een zonnesynchrone baan van een satelliet?"
                },
                options: [
                    { en: "An orbit where the satellite always passes over locations at the same local time", es: "Una órbita donde el satélite siempre pasa sobre ubicaciones a la misma hora local", de: "Eine Umlaufbahn, in der der Satellit immer zur gleichen Ortszeit über Orte hinwegfliegt", nl: "Een baan waar de satelliet altijd over locaties passeert op hetzelfde lokale tijdstip" },
                    { en: "An orbit that exactly follows the Sun's path", es: "Una órbita que sigue exactamente el camino del Sol", de: "Eine Umlaufbahn, die genau dem Weg der Sonne folgt", nl: "Een baan die exact het pad van de Zon volgt" },
                    { en: "An orbit that only works during daytime", es: "Una órbita que solo funciona durante el día", de: "Eine Umlaufbahn, die nur tagsrüber funktioniert", nl: "Een baan die alleen overdag werkt" },
                    { en: "An orbit where the satellite faces the Sun constantly", es: "Una órbita donde el satélite mira constantemente hacia el Sol", de: "Eine Umlaufbahn, in der der Satellit ständig zur Sonne zeigt", nl: "Een baan waar de satelliet constant naar de Zon gericht is" }
                ],
                correct: 0,
                explanation: {
                    en: "This orbit is ideal for Earth observation satellites because it provides consistent lighting conditions for imaging and monitoring.",
                    es: "Esta órbita es ideal para satélites de observación de la Tierra porque proporciona condiciones de iluminación consistentes para imágenes y monitoreo.",
                    de: "Diese Umlaufbahn ist ideal für Erdbeobachtungssatelliten, da sie konsistente Beleuchtungsbedingungen für Bildgebung und Überwachung bietet.",
                    nl: "Deze baan is ideaal voor aardwaarnemingssatellieten omdat het consistente verlichtingsomstandigheden biedt voor beeldvorming en monitoring."
                }
            },
            {
                question: {
                    en: "What is a satellite's apogee and perigee?",
                    es: "¿Qué son el apogeo y perigeo de un satélite?",
                    de: "Was sind Apogäum und Perigäum eines Satelliten?",
                    nl: "Wat zijn de apogeum en perigeum van een satelliet?"
                },
                options: [
                    { en: "The highest and lowest points in its elliptical orbit around Earth", es: "Los puntos más alto y más bajo en su órbita elíptica alrededor de la Tierra", de: "Die höchsten und niedrigsten Punkte in seiner elliptischen Umlaufbahn um die Erde", nl: "De hoogste en laagste punten in zijn elliptische baan rond de Aarde" },
                    { en: "The front and back of the satellite", es: "La parte delantera y trasera del satélite", de: "Die Vorder- und Rückseite des Satelliten", nl: "De voor- en achterkant van de satelliet" },
                    { en: "The time when it's closest to and farthest from the Sun", es: "El momento cuando está más cerca y más lejos del Sol", de: "Die Zeit, wenn er der Sonne am nächsten und am weitesten entfernt ist", nl: "Het moment waarop het het dichtst bij en het verst van de Zon is" },
                    { en: "Two different types of satellite engines", es: "Dos tipos diferentes de motores de satélite", de: "Zwei verschiedene Arten von Satellitentriebwerken", nl: "Twee verschillende soorten satelliemotoren" }
                ],
                correct: 0,
                explanation: {
                    en: "In elliptical orbits, satellites move faster at perigee (closer to Earth) and slower at apogee (farther from Earth) due to gravitational forces.",
                    es: "En órbitas elípticas, los satélites se mueven más rápido en el perigeo (más cerca de la Tierra) y más lento en el apogeo (más lejos de la Tierra) debido a las fuerzas gravitacionales.",
                    de: "In elliptischen Umlaufbahnen bewegen sich Satelliten am Perigäum (näher zur Erde) schneller und am Apogäum (weiter von der Erde entfernt) langsamer aufgrund von Gravitationskräften.",
                    nl: "In elliptische banen bewegen satellieten sneller bij het perigeum (dichter bij de Aarde) en langzamer bij het apogeum (verder van de Aarde) vanwege zwaartekrachten."
                }
            },
            {
                question: {
                    en: "What is multi-spectral imaging from satellites?",
                    es: "¿Qué es la imagen multiespectral desde satélites?",
                    de: "Was ist multispektrale Bildgebung von Satelliten?",
                    nl: "Wat is multispectrale beeldvorming vanuit satellieten?"
                },
                options: [
                    { en: "Capturing images in multiple wavelengths to analyze different surface features", es: "Capturar imágenes en múltiples longitudes de onda para analizar diferentes características de la superficie", de: "Bilder in mehreren Wellenlängen aufnehmen, um verschiedene Oberflächenmerkmale zu analysieren", nl: "Beelden vastleggen in meerdere golflengten om verschillende oppervlaktekenmerken te analyseren" },
                    { en: "Taking multiple photographs at the same time", es: "Tomar múltiples fotografías al mismo tiempo", de: "Mehrere Fotografien gleichzeitig aufnehmen", nl: "Meerdere foto's tegelijkertijd maken" },
                    { en: "Using many different cameras on one satellite", es: "Usar muchas cámaras diferentes en un satélite", de: "Viele verschiedene Kameras an einem Satelliten verwenden", nl: "Veel verschillende camera's gebruiken op één satelliet" },
                    { en: "Creating colorful rainbow images", es: "Crear imágenes coloridas de arco iris", de: "Bunte Regenbogenbilder erstellen", nl: "Kleurrijke regenboogbeelden maken" }
                ],
                correct: 0,
                explanation: {
                    en: "Different wavelengths reveal information about vegetation health, water quality, mineral composition, and other Earth surface characteristics.",
                    es: "Diferentes longitudes de onda revelan información sobre la salud de la vegetación, calidad del agua, composición mineral y otras características de la superficie terrestre.",
                    de: "Verschiedene Wellenlängen zeigen Informationen über Vegetationsgesundheit, Wasserqualität, Mineralzusammensetzung und andere Erdoberflächencharakteristika.",
                    nl: "Verschillende golflengten onthullen informatie over vegetatiegezondheid, waterkwaliteit, minerale samenstelling en andere aardoppervlaktekarakteristieken."
                }
            },
            {
                question: {
                    en: "What is a satellite's eclipse period?",
                    es: "¿Qué es el período de eclipse de un satélite?",
                    de: "Was ist die Finsternis-Periode eines Satelliten?",
                    nl: "Wat is de eclipsperiode van een satelliet?"
                },
                options: [
                    { en: "When Earth blocks sunlight from reaching the satellite's solar panels", es: "Cuando la Tierra bloquea la luz solar para llegar a los paneles solares del satélite", de: "Wenn die Erde das Sonnenlicht daran hindert, die Solarpanels des Satelliten zu erreichen", nl: "Wanneer de Aarde zonlicht blokkeert zodat het de zonnepanelen van de satelliet niet bereikt" },
                    { en: "When the satellite experiences a total solar eclipse", es: "Cuando el satélite experimenta un eclipse solar total", de: "Wenn der Satellit eine totale Sonnenfinsternis erlebt", nl: "Wanneer de satelliet een totale zonsverduistering ervaart" },
                    { en: "When the satellite stops working temporarily", es: "Cuando el satélite deja de funcionar temporalmente", de: "Wenn der Satellit vorübergehend nicht funktioniert", nl: "Wanneer de satelliet tijdelijk stopt met werken" },
                    { en: "When the satellite hides behind the Moon", es: "Cuando el satélite se esconde detrás de la Luna", de: "Wenn sich der Satellit hinter dem Mond versteckt", nl: "Wanneer de satelliet zich achter de Maan verstopt" }
                ],
                correct: 0,
                explanation: {
                    en: "During eclipse periods, satellites must rely on battery power, which limits their operations and affects mission planning.",
                    es: "Durante los períodos de eclipse, los satélites deben depender de la energía de la batería, lo que limita sus operaciones y afecta la planificación de la misión.",
                    de: "Während Finsternis-Perioden müssen Satelliten auf Batteriestrom angewiesen sein, was ihre Operationen begrenzt und die Missionsplanung beeinflusst.",
                    nl: "Tijdens eclipsperioden moeten satellieten vertrouwen op batterijvermogen, wat hun operaties beperkt en missieplanningen beïnvloedt."
                }
            },
            {
                question: {
                    en: "What is active debris removal for satellites?",
                    es: "¿Qué es la eliminación activa de desechos para satélites?",
                    de: "Was ist aktive Weltraummüll-Entfernung für Satelliten?",
                    nl: "Wat is actieve puinverwijdering voor satellieten?"
                },
                options: [
                    { en: "Technologies designed to capture and remove defunct satellites and space junk", es: "Tecnologías diseñadas para capturar y eliminar satélites extintos y basura espacial", de: "Technologien zur Erfassung und Entfernung ausgedienter Satelliten und Weltraummüll", nl: "Technologieën ontworpen om defuncte satellieten en ruimteafval vast te leggen en te verwijderen" },
                    { en: "Satellites that clean themselves automatically", es: "Satélites que se limpian automáticamente", de: "Satelliten, die sich automatisch reinigen", nl: "Satellieten die zichzelf automatisch schoonmaken" },
                    { en: "Removing debris from satellite images", es: "Eliminar desechos de imágenes satelitales", de: "Müll aus Satellitenbildern entfernen", nl: "Puin verwijderen uit satellietbeelden" },
                    { en: "Debris that actively attacks satellites", es: "Desechos que atacan activamente a los satélites", de: "Trümmer, die Satelliten aktiv angreifen", nl: "Puin dat actief satellieten aanvalt" }
                ],
                correct: 0,
                explanation: {
                    en: "These missions use nets, harpoons, robotic arms, or drag sails to safely deorbit defunct satellites and reduce space junk.",
                    es: "Estas misiones usan redes, arpones, brazos robóticos o velas de arrastre para desorbitar de manera segura satélites extintos y reducir basura espacial.",
                    de: "Diese Missionen verwenden Netze, Harpunen, Roboterarme oder Bremssegel, um ausgediente Satelliten sicher aus der Umlaufbahn zu bringen und Weltraummüll zu reduzieren.",
                    nl: "Deze missies gebruiken netten, harpoenen, robotarmen of sleepzeilen om defuncte satellieten veilig uit de baan te brengen en ruimteafval te verminderen."
                }
            },
            {
                question: {
                    en: "What is the significance of satellite miniaturization?",
                    es: "¿Cuál es la importancia de la miniaturización de satélites?",
                    de: "Was ist die Bedeutung der Satelliten-Miniaturisierung?",
                    nl: "Wat is de betekenis van satellietminiaturisatie?"
                },
                options: [
                    { en: "Smaller satellites are cheaper to build and launch, democratizing space access", es: "Los satélites más pequeños son más baratos de construir y lanzar, democratizando el acceso al espacio", de: "Kleinere Satelliten sind billiger zu bauen und zu starten, was den Weltraumzugang demokratisiert", nl: "Kleinere satellieten zijn goedkoper om te bouwen en te lanceren, waardoor toegang tot de ruimte wordt gedemocratiseerd" },
                    { en: "Small satellites are harder to detect by enemies", es: "Los satélites pequeños son más difíciles de detectar por enemigos", de: "Kleine Satelliten sind schwerer von Feinden zu erkennen", nl: "Kleine satellieten zijn moeilijker te detecteren door vijanden" },
                    { en: "Miniaturized satellites work better in space", es: "Los satélites miniaturizados funcionan mejor en el espacio", de: "Miniaturisierte Satelliten funktionieren besser im Weltraum", nl: "Geminiaturiseerde satellieten werken beter in de ruimte" },
                    { en: "They take up less space on Earth", es: "Ocupan menos espacio en la Tierra", de: "Sie nehmen weniger Platz auf der Erde ein", nl: "Ze nemen minder ruimte in op Aarde" }
                ],
                correct: 0,
                explanation: {
                    en: "This trend has enabled universities, startups, and developing nations to participate in space activities that were once limited to major powers.",
                    es: "Esta tendencia ha permitido a universidades, startups y naciones en desarrollo participar en actividades espaciales que una vez estuvieron limitadas a las grandes potencias.",
                    de: "Dieser Trend hat Universitäten, Startups und Entwicklungsländern ermöglicht, an Weltraumaktivitäten teilzunehmen, die einst auf Großmächte beschränkt waren.",
                    nl: "Deze trend heeft universiteiten, startups en ontwikkelingslanden in staat gesteld deel te nemen aan ruimteactiviteiten die ooit beperkt waren tot grote mogendheden."
                }
            },
            {
                question: {
                    en: "What is the future impact of mega-constellations on astronomy?",
                    es: "¿Cuál es el impacto futuro de las mega-constelaciones en la astronomía?",
                    de: "Was ist die zukünftige Auswirkung von Mega-Konstellationen auf die Astronomie?",
                    nl: "Wat is de toekomstige impact van mega-constellaties op de astronomie?"
                },
                options: [
                    { en: "Thousands of satellites may interfere with ground-based telescopes and observations", es: "Miles de satélites pueden interferir con telescopios terrestres y observaciones", de: "Tausende von Satelliten könnten bodenbasierte Teleskope und Beobachtungen stören", nl: "Duizenden satellieten kunnen interfereren met aardgebaseerde telescopen en waarnemingen" },
                    { en: "They will make astronomy impossible", es: "Harán que la astronomía sea imposible", de: "Sie werden Astronomie unmöglich machen", nl: "Ze zullen astronomie onmogelijk maken" },
                    { en: "They will improve all astronomical observations", es: "Mejorarán todas las observaciones astronómicas", de: "Sie werden alle astronomischen Beobachtungen verbessern", nl: "Ze zullen alle astronomische waarnemingen verbeteren" },
                    { en: "They have no effect on astronomy", es: "No tienen efecto en la astronomía", de: "Sie haben keine Auswirkung auf die Astronomie", nl: "Ze hebben geen effect op astronomie" }
                ],
                correct: 0,
                explanation: {
                    en: "The bright streaks from thousands of satellites in mega-constellations pose challenges for astronomical research, requiring new coordination and mitigation strategies.",
                    es: "Las rayas brillantes de miles de satélites en mega-constelaciones plantean desafíos para la investigación astronómica, requiriendo nuevas estrategias de coordinación y mitigación.",
                    de: "Die hellen Streifen von Tausenden von Satelliten in Mega-Konstellationen stellen Herausforderungen für die astronomische Forschung dar und erfordern neue Koordinations- und Mitigationsstrategien.",
                    nl: "De heldere strepen van duizenden satellieten in mega-constellaties vormen uitdagingen voor astronomisch onderzoek, wat nieuwe coördinatie- en mitigatiestrategieën vereist."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/space-astronomy', level8);
    }
})();