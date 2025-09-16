(function() {
    const level9 = {
        name: {
            en: "Future of Space Exploration",
            es: "Futuro de la Exploración Espacial",
            de: "Zukunft der Weltraumforschung",
            nl: "Toekomst van Ruimteverkenning"
        },
        questions: [
            {
                question: {
                    en: "What is the main goal of Mars exploration missions?",
                    es: "¿Cuál es el objetivo principal de las misiones de exploración de Marte?",
                    de: "Was ist das Hauptziel von Mars-Explorationsmissionen?",
                    nl: "Wat is het hoofddoel van Mars-verkenningsmissies?"
                },
                options: [
                    { en: "To eventually establish human settlements on Mars", es: "Eventualmente establecer asentamientos humanos en Marte", de: "Letztendlich menschliche Siedlungen auf dem Mars zu errichten", nl: "Uiteindelijk menselijke nederzettingen op Mars vestigen" },
                    { en: "Just to take pictures", es: "Solo para tomar fotos", de: "Nur um Fotos zu machen", nl: "Alleen om foto's te maken" },
                    { en: "To mine gold", es: "Para extraer oro", de: "Um Gold zu schürfen", nl: "Om goud te delven" },
                    { en: "To prove Mars doesn't exist", es: "Para probar que Marte no existe", de: "Um zu beweisen, dass Mars nicht existiert", nl: "Om te bewijzen dat Mars niet bestaat" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a space elevator?",
                    es: "¿Qué es un ascensor espacial?",
                    de: "Was ist ein Weltraumlift?",
                    nl: "Wat is een ruimtelift?"
                },
                options: [
                    { en: "A theoretical structure that would connect Earth to space with a cable", es: "Una estructura teórica que conectaría la Tierra al espacio con un cable", de: "Eine theoretische Struktur, die die Erde mit dem Weltraum durch ein Kabel verbinden würde", nl: "Een theoretische structuur die de Aarde met de ruimte zou verbinden met een kabel" },
                    { en: "An elevator inside a rocket", es: "Un ascensor dentro de un cohete", de: "Ein Aufzug in einer Rakete", nl: "Een lift in een raket" },
                    { en: "A way to get to different floors on a space station", es: "Una manera de llegar a diferentes pisos en una estación espacial", de: "Ein Weg, um zu verschiedenen Stockwerken auf einer Raumstation zu gelangen", nl: "Een manier om naar verschillende verdiepingen op een ruimtestation te gaan" },
                    { en: "An elevator that plays space music", es: "Un ascensor que toca música espacial", de: "Ein Aufzug, der Weltraummusik spielt", nl: "Een lift die ruimtemuziek speelt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are the main challenges for human missions to Mars?",
                    es: "¿Cuáles son los principales desafíos para misiones humanas a Marte?",
                    de: "Was sind die Hauptherausforderungen für menschliche Missionen zum Mars?",
                    nl: "Wat zijn de hoofduitdagingen voor bemande missies naar Mars?"
                },
                options: [
                    { en: "Long travel time, radiation exposure, and psychological isolation", es: "Tiempo de viaje largo, exposición a radiación y aislamiento psicológico", de: "Lange Reisezeit, Strahlenbelastung und psychologische Isolation", nl: "Lange reistijd, stralingsblootstelling en psychologische isolatie" },
                    { en: "Only the cost", es: "Solo el costo", de: "Nur die Kosten", nl: "Alleen de kosten" },
                    { en: "Language barriers with Martians", es: "Barreras de idioma con los marcianos", de: "Sprachbarrieren mit Marsianern", nl: "Taalbarrières met Marsbewoners" },
                    { en: "Finding parking spaces", es: "Encontrar espacios de estacionamiento", de: "Parkplätze finden", nl: "Parkeerplaatsen vinden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is space tourism?",
                    es: "¿Qué es el turismo espacial?",
                    de: "Was ist Weltraumtourismus?",
                    nl: "Wat is ruimtetoerisme?"
                },
                options: [
                    { en: "Commercial flights that take paying passengers to space", es: "Vuelos comerciales que llevan pasajeros pagantes al espacio", de: "Kommerzielle Flüge, die zahlende Passagiere ins Weltall bringen", nl: "Commerciële vluchten die betalende passagiers naar de ruimte brengen" },
                    { en: "Tours of space museums", es: "Tours de museos espaciales", de: "Führungen durch Weltraummuseen", nl: "Rondleidingen door ruimtemusea" },
                    { en: "Visiting observatories", es: "Visitar observatorios", de: "Observatorien besuchen", nl: "Observatoria bezoeken" },
                    { en: "Reading books about space", es: "Leer libros sobre el espacio", de: "Bücher über den Weltraum lesen", nl: "Boeken lezen over de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is asteroid mining?",
                    es: "¿Qué es la minería de asteroides?",
                    de: "Was ist Asteroidenbergbau?",
                    nl: "Wat is asteroïde-mijnbouw?"
                },
                options: [
                    { en: "Extracting valuable materials like metals and water from asteroids", es: "Extraer materiales valiosos como metales y agua de asteroides", de: "Wertvolle Materialien wie Metalle und Wasser aus Asteroiden gewinnen", nl: "Waardevolle materialen zoals metalen en water winnen uit asteroïden" },
                    { en: "Digging holes in asteroids for fun", es: "Cavar hoyos en asteroides por diversión", de: "Löcher in Asteroiden graben zum Spaß", nl: "Gaten graven in asteroïden voor de lol" },
                    { en: "Using asteroids as mines on Earth", es: "Usar asteroides como minas en la Tierra", de: "Asteroiden als Minen auf der Erde verwenden", nl: "Asteroïden gebruiken als mijnen op Aarde" },
                    { en: "Mining Earth and sending materials to asteroids", es: "Minar la Tierra y enviar materiales a asteroides", de: "Die Erde abbauen und Materialien zu Asteroiden senden", nl: "De Aarde ontginnen en materialen naar asteroïden sturen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a generation ship?",
                    es: "¿Qué es una nave generacional?",
                    de: "Was ist ein Generationenschiff?",
                    nl: "Wat is een generatieschip?"
                },
                options: [
                    { en: "A spacecraft designed for very long interstellar journeys with multiple generations", es: "Una nave espacial diseñada para viajes interestelares muy largos con múltiples generaciones", de: "Ein Raumschiff, das für sehr lange interstellare Reisen mit mehreren Generationen entworfen wurde", nl: "Een ruimteschip ontworpen voor zeer lange interstellaire reizen met meerdere generaties" },
                    { en: "A ship that generates electricity", es: "Una nave que genera electricidad", de: "Ein Schiff, das Elektrizität erzeugt", nl: "Een schip dat elektriciteit opwekt" },
                    { en: "A ship built by young people", es: "Una nave construida por jóvenes", de: "Ein Schiff, das von jungen Menschen gebaut wurde", nl: "Een schip gebouwd door jonge mensen" },
                    { en: "A ship that ages very quickly", es: "Una nave que envejece muy rápido", de: "Ein Schiff, das sehr schnell altert", nl: "Een schip dat heel snel veroudert" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is terraforming?",
                    es: "¿Qué es la terraformación?",
                    de: "Was ist Terraforming?",
                    nl: "Wat is terraforming?"
                },
                options: [
                    { en: "Changing a planet's environment to make it suitable for Earth life", es: "Cambiar el ambiente de un planeta para hacerlo adecuado para la vida terrestre", de: "Die Umwelt eines Planeten ändern, um sie für das Leben auf der Erde geeignet zu machen", nl: "Het milieu van een planeet veranderen om het geschikt te maken voor aards leven" },
                    { en: "Building terraces on planets", es: "Construir terrazas en planetas", de: "Terrassen auf Planeten bauen", nl: "Terrassen bouwen op planeten" },
                    { en: "Forming terror on planets", es: "Formar terror en planetas", de: "Terror auf Planeten bilden", nl: "Terreur vormen op planeten" },
                    { en: "Making planets look like Earth from space", es: "Hacer que los planetas se vean como la Tierra desde el espacio", de: "Planeten vom Weltraum aus wie die Erde aussehen lassen", nl: "Planeten er vanuit de ruimte uit laten zien als de Aarde" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the Artemis program?",
                    es: "¿Qué es el programa Artemis?",
                    de: "Was ist das Artemis-Programm?",
                    nl: "Wat is het Artemis-programma?"
                },
                options: [
                    { en: "NASA's program to return humans to the Moon and establish a lunar base", es: "El programa de NASA para regresar humanos a la Luna y establecer una base lunar", de: "NASAs Programm, um Menschen zum Mond zurückzubringen und eine Mondbasis zu errichten", nl: "NASA's programma om mensen terug te brengen naar de Maan en een maanbasis te vestigen" },
                    { en: "A program to study asteroids", es: "Un programa para estudiar asteroides", de: "Ein Programm zur Erforschung von Asteroiden", nl: "Een programma om asteroïden te bestuderen" },
                    { en: "A program about the Greek goddess", es: "Un programa sobre la diosa griega", de: "Ein Programm über die griechische Göttin", nl: "Een programma over de Griekse godin" },
                    { en: "A program to build rockets only", es: "Un programa solo para construir cohetes", de: "Ein Programm nur zum Bau von Raketen", nl: "Een programma alleen om raketten te bouwen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are CubeSats and how might they change space exploration?",
                    es: "¿Qué son los CubeSats y cómo podrían cambiar la exploración espacial?",
                    de: "Was sind CubeSats und wie könnten sie die Weltraumforschung verändern?",
                    nl: "Wat zijn CubeSats en hoe zouden ze ruimteverkenning kunnen veranderen?"
                },
                options: [
                    { en: "Small, cheap satellites that make space more accessible to everyone", es: "Satélites pequeños y baratos que hacen el espacio más accesible para todos", de: "Kleine, billige Satelliten, die den Weltraum für alle zugänglicher machen", nl: "Kleine, goedkope satellieten die de ruimte toegankelijker maken voor iedereen" },
                    { en: "Satellites shaped like cubes only", es: "Satélites con forma de cubo solamente", de: "Nur würfelförmige Satelliten", nl: "Alleen kubusvormige satellieten" },
                    { en: "Satellites for playing games", es: "Satélites para jugar juegos", de: "Satelliten zum Spielen", nl: "Satellieten voor spelletjes spelen" },
                    { en: "Satellites that cube numbers", es: "Satélites que elevan números al cubo", de: "Satelliten, die Zahlen hoch drei nehmen", nl: "Satellieten die getallen tot de macht drie verheffen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the purpose of lunar bases?",
                    es: "¿Cuál es el propósito de las bases lunares?",
                    de: "Was ist der Zweck von Mondbasen?",
                    nl: "Wat is het doel van maanbases?"
                },
                options: [
                    { en: "To serve as stepping stones for deeper space exploration and research", es: "Servir como escalones para la exploración e investigación del espacio profundo", de: "Als Sprungbretter für tiefere Weltraumforschung und Forschung zu dienen", nl: "Om te dienen als springplanken voor diepere ruimteverkenning en onderzoek" },
                    { en: "Just to have a place to live", es: "Solo para tener un lugar donde vivir", de: "Nur um einen Ort zum Leben zu haben", nl: "Alleen om een plek te hebben om te wonen" },
                    { en: "To mine the Moon completely", es: "Para minar completamente la Luna", de: "Um den Mond vollständig abzubauen", nl: "Om de Maan volledig te ontginnen" },
                    { en: "To block sunlight from reaching Earth", es: "Para bloquear la luz solar de llegar a la Tierra", de: "Um Sonnenlicht daran zu hindern, die Erde zu erreichen", nl: "Om zonlicht te blokkeren dat de Aarde bereikt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is nuclear propulsion in space?",
                    es: "¿Qué es la propulsión nuclear en el espacio?",
                    de: "Was ist Nuklearantrieb im Weltraum?",
                    nl: "Wat is nucleaire voortstuwing in de ruimte?"
                },
                options: [
                    { en: "Using nuclear energy to power rockets for faster, longer space missions", es: "Usar energía nuclear para alimentar cohetes para misiones espaciales más rápidas y largas", de: "Nuklearenergie verwenden, um Raketen für schnellere, längere Weltraummissionen anzutreiben", nl: "Nucleaire energie gebruiken om raketten aan te drijven voor snellere, langere ruimtemissies" },
                    { en: "Nuclear weapons in space", es: "Armas nucleares en el espacio", de: "Nuklearwaffen im Weltraum", nl: "Nucleaire wapens in de ruimte" },
                    { en: "Nuclear power plants on Earth", es: "Plantas de energía nuclear en la Tierra", de: "Kernkraftwerke auf der Erde", nl: "Kerncentrales op Aarde" },
                    { en: "Nuclear medicine for astronauts", es: "Medicina nuclear para astronautas", de: "Nuklearmedizin für Astronauten", nl: "Nucleaire geneeskunde voor astronauten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are space habitats?",
                    es: "¿Qué son los hábitats espaciales?",
                    de: "Was sind Weltraum-Habitate?",
                    nl: "Wat zijn ruimtehabitats?"
                },
                options: [
                    { en: "Large structures in space where people could live permanently", es: "Estructuras grandes en el espacio donde la gente podría vivir permanentemente", de: "Große Strukturen im Weltraum, wo Menschen dauerhaft leben könnten", nl: "Grote structuren in de ruimte waar mensen permanent zouden kunnen wonen" },
                    { en: "Places where aliens live", es: "Lugares donde viven los extraterrestres", de: "Orte, wo Außerirdische leben", nl: "Plaatsen waar buitenaardse wezens wonen" },
                    { en: "Animal shelters in space", es: "Refugios de animales en el espacio", de: "Tierheime im Weltraum", nl: "Dierenopvang in de ruimte" },
                    { en: "Storage areas on space stations", es: "Áreas de almacenamiento en estaciones espaciales", de: "Lagerbereiche auf Raumstationen", nl: "Opslaggebieden op ruimtestations" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the search for extraterrestrial intelligence (SETI)?",
                    es: "¿Qué es la búsqueda de inteligencia extraterrestre (SETI)?",
                    de: "Was ist die Suche nach extraterrestrischer Intelligenz (SETI)?",
                    nl: "Wat is de zoektocht naar buitenaardse intelligentie (SETI)?"
                },
                options: [
                    { en: "Scientific efforts to detect signals from intelligent alien civilizations", es: "Esfuerzos científicos para detectar señales de civilizaciones alienígenas inteligentes", de: "Wissenschaftliche Bemühungen, Signale von intelligenten außerirdischen Zivilisationen zu erkennen", nl: "Wetenschappelijke inspanningen om signalen van intelligente buitenaardse beschavingen te detecteren" },
                    { en: "Setting up telescopes everywhere", es: "Instalar telescopios en todas partes", de: "Überall Teleskope aufstellen", nl: "Overal telescopen opstellen" },
                    { en: "Searching for lost astronauts", es: "Buscar astronautas perdidos", de: "Nach verlorenen Astronauten suchen", nl: "Zoeken naar vermiste astronauten" },
                    { en: "Looking for intelligent people on Earth", es: "Buscar gente inteligente en la Tierra", de: "Nach intelligenten Menschen auf der Erde suchen", nl: "Zoeken naar intelligente mensen op Aarde" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is artificial intelligence's role in future space missions?",
                    es: "¿Cuál es el papel de la inteligencia artificial en futuras misiones espaciales?",
                    de: "Welche Rolle spielt künstliche Intelligenz in zukünftigen Weltraummissionen?",
                    nl: "Wat is de rol van kunstmatige intelligentie in toekomstige ruimtemissies?"
                },
                options: [
                    { en: "AI will help make autonomous decisions and analyze vast amounts of data", es: "La IA ayudará a tomar decisiones autónomas y analizar vastas cantidades de datos", de: "KI wird helfen, autonome Entscheidungen zu treffen und riesige Datenmengen zu analysieren", nl: "AI zal helpen autonome beslissingen te nemen en enorme hoeveelheden data te analyseren" },
                    { en: "AI will replace all astronauts", es: "La IA reemplazará a todos los astronautas", de: "KI wird alle Astronauten ersetzen", nl: "AI zal alle astronauten vervangen" },
                    { en: "AI will only play games in space", es: "La IA solo jugará juegos en el espacio", de: "KI wird nur Spiele im Weltraum spielen", nl: "AI zal alleen spelletjes spelen in de ruimte" },
                    { en: "AI has no role in space", es: "La IA no tiene papel en el espacio", de: "KI hat keine Rolle im Weltraum", nl: "AI heeft geen rol in de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is 3D printing's potential in space?",
                    es: "¿Cuál es el potencial de la impresión 3D en el espacio?",
                    de: "Was ist das Potenzial des 3D-Drucks im Weltraum?",
                    nl: "Wat is het potentieel van 3D-printen in de ruimte?"
                },
                options: [
                    { en: "Making tools, parts, and structures on-demand during missions", es: "Hacer herramientas, partes y estructuras bajo demanda durante misiones", de: "Werkzeuge, Teile und Strukturen bei Bedarf während Missionen herstellen", nl: "Gereedschappen, onderdelen en structuren op aanvraag maken tijdens missies" },
                    { en: "Only printing photos in space", es: "Solo imprimir fotos en el espacio", de: "Nur Fotos im Weltraum drucken", nl: "Alleen foto's printen in de ruimte" },
                    { en: "Printing entire planets", es: "Imprimir planetas enteros", de: "Ganze Planeten drucken", nl: "Hele planeten printen" },
                    { en: "3D printing doesn't work in space", es: "La impresión 3D no funciona en el espacio", de: "3D-Druck funktioniert nicht im Weltraum", nl: "3D-printen werkt niet in de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are solar sails?",
                    es: "¿Qué son las velas solares?",
                    de: "Was sind Sonnensegel?",
                    nl: "Wat zijn zonnzeilen?"
                },
                options: [
                    { en: "Large, thin sheets that use sunlight pressure for spacecraft propulsion", es: "Láminas grandes y delgadas que usan la presión de la luz solar para propulsión de naves espaciales", de: "Große, dünne Blätter, die Sonnenlichtdruck für Raumschiffantrieb verwenden", nl: "Grote, dunne vellen die zonlichtdruk gebruiken voor ruimteschipvoortstuwing" },
                    { en: "Sails for boats on the Sun", es: "Velas para barcos en el Sol", de: "Segel für Boote auf der Sonne", nl: "Zeilen voor boten op de Zon" },
                    { en: "Solar panels shaped like sails", es: "Paneles solares con forma de velas", de: "Solarpanels in Segelform", nl: "Zonnepanelen in de vorm van zeilen" },
                    { en: "Decorations for spacecraft", es: "Decoraciones para naves espaciales", de: "Dekorationen für Raumschiffe", nl: "Decoraties voor ruimteschepen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cryogenic preservation for space travel?",
                    es: "¿Qué es la preservación criogénica para viajes espaciales?",
                    de: "Was ist kryogene Konservierung für Weltraumreisen?",
                    nl: "Wat is cryogene preservatie voor ruimtereizen?"
                },
                options: [
                    { en: "Freezing astronauts to preserve them during very long journeys", es: "Congelar astronautas para preservarlos durante viajes muy largos", de: "Astronauten einfrieren, um sie während sehr langer Reisen zu konservieren", nl: "Astronauten bevriezen om ze te bewaren tijdens zeer lange reizen" },
                    { en: "Keeping food cold in space", es: "Mantener la comida fría en el espacio", de: "Essen im Weltraum kalt halten", nl: "Voedsel koel houden in de ruimte" },
                    { en: "Using ice as fuel", es: "Usar hielo como combustible", de: "Eis als Treibstoff verwenden", nl: "IJs gebruiken als brandstof" },
                    { en: "Making ice sculptures in space", es: "Hacer esculturas de hielo en el espacio", de: "Eisskulpturen im Weltraum machen", nl: "IJssculpturen maken in de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the Breakthrough Starshot project?",
                    es: "¿Qué es el proyecto Breakthrough Starshot?",
                    de: "Was ist das Breakthrough Starshot Projekt?",
                    nl: "Wat is het Breakthrough Starshot project?"
                },
                options: [
                    { en: "A plan to send tiny spacecraft to the nearest star using laser propulsion", es: "Un plan para enviar naves espaciales diminutas a la estrella más cercana usando propulsión láser", de: "Ein Plan, winzige Raumschiffe zum nächsten Stern mit Laser-Antrieb zu senden", nl: "Een plan om kleine ruimteschepen naar de dichtstbijzijnde ster te sturen met laservoortstuwing" },
                    { en: "A project to breakthrough to new stars", es: "Un proyecto para abrirse paso hacia nuevas estrellas", de: "Ein Projekt, um zu neuen Sternen durchzubrechen", nl: "Een project om door te breken naar nieuwe sterren" },
                    { en: "A movie about space exploration", es: "Una película sobre exploración espacial", de: "Ein Film über Weltraumforschung", nl: "Een film over ruimteverkenning" },
                    { en: "A new type of telescope", es: "Un nuevo tipo de telescopio", de: "Eine neue Art Teleskop", nl: "Een nieuw type telescoop" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are the benefits of asteroid mining for humanity?",
                    es: "¿Cuáles son los beneficios de la minería de asteroides para la humanidad?",
                    de: "Was sind die Vorteile des Asteroidenbergbaus für die Menschheit?",
                    nl: "Wat zijn de voordelen van asteroïde-mijnbouw voor de mensheid?"
                },
                options: [
                    { en: "Access to rare materials and reducing Earth's resource depletion", es: "Acceso a materiales raros y reducir el agotamiento de recursos de la Tierra", de: "Zugang zu seltenen Materialien und Reduzierung der Ressourcenausbeutung der Erde", nl: "Toegang tot zeldzame materialen en vermindering van uitputting van aardse hulpbronnen" },
                    { en: "Making asteroids disappear", es: "Hacer que los asteroides desaparezcan", de: "Asteroiden verschwinden lassen", nl: "Asteroïden laten verdwijnen" },
                    { en: "Creating more space debris", es: "Crear más desechos espaciales", de: "Mehr Weltraummüll schaffen", nl: "Meer ruimteafval creëren" },
                    { en: "Only providing entertainment", es: "Solo proveer entretenimiento", de: "Nur Unterhaltung bieten", nl: "Alleen entertainment bieden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the concept of a space tether?",
                    es: "¿Qué es el concepto de una correa espacial?",
                    de: "Was ist das Konzept einer Weltraum-Leine?",
                    nl: "Wat is het concept van een ruimtekabel?"
                },
                options: [
                    { en: "A long cable connecting two objects in space for various purposes", es: "Un cable largo que conecta dos objetos en el espacio para varios propósitos", de: "Ein langes Kabel, das zwei Objekte im Weltraum für verschiedene Zwecke verbindet", nl: "Een lange kabel die twee objecten in de ruimte verbindt voor verschillende doeleinden" },
                    { en: "A leash for space pets", es: "Una correa para mascotas espaciales", de: "Eine Leine für Weltraum-Haustiere", nl: "Een riem voor ruimtehuisdieren" },
                    { en: "A safety rope for spacewalks only", es: "Una cuerda de seguridad solo para caminatas espaciales", de: "Ein Sicherheitsseil nur für Weltraumspaziergänge", nl: "Een veiligheidstouw alleen voor ruimtewandelingen" },
                    { en: "A tool for catching satellites", es: "Una herramienta para atrapar satélites", de: "Ein Werkzeug zum Fangen von Satelliten", nl: "Een gereedschap om satellieten te vangen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is interplanetary internet?",
                    es: "¿Qué es internet interplanetario?",
                    de: "Was ist interplanetares Internet?",
                    nl: "Wat is interplanetair internet?"
                },
                options: [
                    { en: "A communication network connecting different planets and space missions", es: "Una red de comunicación que conecta diferentes planetas y misiones espaciales", de: "Ein Kommunikationsnetzwerk, das verschiedene Planeten und Weltraummissionen verbindet", nl: "Een communicatienetwerk dat verschillende planeten en ruimtemissies verbindt" },
                    { en: "Internet only for aliens", es: "Internet solo para extraterrestres", de: "Internet nur für Außerirdische", nl: "Internet alleen voor buitenaardse wezens" },
                    { en: "Faster internet on Earth", es: "Internet más rápido en la Tierra", de: "Schnelleres Internet auf der Erde", nl: "Sneller internet op Aarde" },
                    { en: "Internet that works between planets naturally", es: "Internet que funciona entre planetas naturalmente", de: "Internet, das natürlich zwischen Planeten funktioniert", nl: "Internet dat van nature tussen planeten werkt" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a Dyson sphere?",
                    es: "¿Qué es una esfera de Dyson?",
                    de: "Was ist eine Dyson-Sphäre?",
                    nl: "Wat is een Dyson-bol?"
                },
                options: [
                    { en: "A theoretical structure that would surround a star to capture its energy", es: "Una estructura teórica que rodearía una estrella para capturar su energía", de: "Eine theoretische Struktur, die einen Stern umgeben würde, um seine Energie zu nutzen", nl: "Een theoretische structuur die een ster zou omringen om zijn energie op te vangen" },
                    { en: "A vacuum cleaner for space", es: "Una aspiradora para el espacio", de: "Ein Staubsauger für den Weltraum", nl: "Een stofzuiger voor de ruimte" },
                    { en: "A sphere made by scientist Dyson", es: "Una esfera hecha por el científico Dyson", de: "Eine Kugel, die vom Wissenschaftler Dyson gemacht wurde", nl: "Een bol gemaakt door wetenschapper Dyson" },
                    { en: "A ball for playing sports in space", es: "Una pelota para jugar deportes en el espacio", de: "Ein Ball zum Sport spielen im Weltraum", nl: "Een bal om sport te spelen in de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are the ethical considerations of space colonization?",
                    es: "¿Cuáles son las consideraciones éticas de la colonización espacial?",
                    de: "Was sind die ethischen Überlegungen zur Weltraumkolonisation?",
                    nl: "Wat zijn de ethische overwegingen van ruimtekolonisatie?"
                },
                options: [
                    { en: "Questions about planetary protection, resource rights, and equality", es: "Preguntas sobre protección planetaria, derechos de recursos e igualdad", de: "Fragen über Planetenschutz, Ressourcenrechte und Gleichberechtigung", nl: "Vragen over planetaire bescherming, hulpbronnenrechten en gelijkheid" },
                    { en: "Only how to build better rockets", es: "Solo cómo construir mejores cohetes", de: "Nur wie man bessere Raketen baut", nl: "Alleen hoe betere raketten te bouwen" },
                    { en: "What food to bring", es: "Qué comida llevar", de: "Welches Essen mitzubringen", nl: "Welk voedsel mee te nemen" },
                    { en: "How to make space fashionable", es: "Cómo hacer el espacio a la moda", de: "Wie man den Weltraum modisch macht", nl: "Hoe ruimte modieus te maken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the role of private companies in future space exploration?",
                    es: "¿Cuál es el papel de las compañías privadas en la futura exploración espacial?",
                    de: "Welche Rolle spielen private Unternehmen in der zukünftigen Weltraumforschung?",
                    nl: "Wat is de rol van privé-bedrijven in toekomstige ruimteverkenning?"
                },
                options: [
                    { en: "They're making space access cheaper and driving innovation", es: "Están haciendo el acceso al espacio más barato e impulsando la innovación", de: "Sie machen den Weltraumzugang billiger und treiben Innovation voran", nl: "Ze maken ruimtetoegang goedkoper en stimuleren innovatie" },
                    { en: "They only provide funding", es: "Solo proporcionan financiamiento", de: "Sie stellen nur Finanzierung bereit", nl: "Ze verstrekken alleen financiering" },
                    { en: "They have no role in space", es: "No tienen papel en el espacio", de: "Sie haben keine Rolle im Weltraum", nl: "Ze hebben geen rol in de ruimte" },
                    { en: "They only compete with governments", es: "Solo compiten con gobiernos", de: "Sie konkurrieren nur mit Regierungen", nl: "Ze concurreren alleen met regeringen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is fusion propulsion?",
                    es: "¿Qué es la propulsión por fusión?",
                    de: "Was ist Fusionsantrieb?",
                    nl: "Wat is fusievoortstuwing?"
                },
                options: [
                    { en: "Using nuclear fusion reactions to power very fast spacecraft", es: "Usar reacciones de fusión nuclear para alimentar naves espaciales muy rápidas", de: "Kernfusionsreaktionen verwenden, um sehr schnelle Raumschiffe anzutreiben", nl: "Kernfusiereacties gebruiken om zeer snelle ruimteschepen aan te drijven" },
                    { en: "Fusing two rockets together", es: "Fusionar dos cohetes juntos", de: "Zwei Raketen zusammenfügen", nl: "Twee raketten samenvoegen" },
                    { en: "Using confusion to move spacecraft", es: "Usar confusión para mover naves espaciales", de: "Verwirrung verwenden, um Raumschiffe zu bewegen", nl: "Verwarring gebruiken om ruimteschepen te bewegen" },
                    { en: "Melting metal to make fuel", es: "Derretir metal para hacer combustible", de: "Metall schmelzen, um Treibstoff zu machen", nl: "Metaal smelten om brandstof te maken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the concept of a multi-generational starship?",
                    es: "¿Qué es el concepto de una nave estelar multigeneracional?",
                    de: "Was ist das Konzept eines mehrgenerationalen Sternenschiffs?",
                    nl: "Wat is het concept van een multigenerationeel sterschip?"
                },
                options: [
                    { en: "A spacecraft where multiple generations live and die during the journey to distant stars", es: "Una nave espacial donde múltiples generaciones viven y mueren durante el viaje a estrellas distantes", de: "Ein Raumschiff, wo mehrere Generationen leben und sterben während der Reise zu fernen Sternen", nl: "Een ruimteschip waar meerdere generaties leven en sterven tijdens de reis naar verre sterren" },
                    { en: "A ship that can transport many generations at once", es: "Una nave que puede transportar muchas generaciones a la vez", de: "Ein Schiff, das viele Generationen auf einmal transportieren kann", nl: "Een schip dat vele generaties tegelijk kan vervoeren" },
                    { en: "A ship built by multiple generations", es: "Una nave construida por múltiples generaciones", de: "Ein Schiff, das von mehreren Generationen gebaut wurde", nl: "Een schip gebouwd door meerdere generaties" },
                    { en: "A ship that creates new generations", es: "Una nave que crea nuevas generaciones", de: "Ein Schiff, das neue Generationen schafft", nl: "Een schip dat nieuwe generaties creëert" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is planetary defense?",
                    es: "¿Qué es la defensa planetaria?",
                    de: "Was ist Planetenverteidigung?",
                    nl: "Wat is planetaire verdediging?"
                },
                options: [
                    { en: "Protecting Earth from potentially dangerous asteroids and comets", es: "Proteger la Tierra de asteroides y cometas potencialmente peligrosos", de: "Die Erde vor potenziell gefährlichen Asteroiden und Kometen schützen", nl: "De Aarde beschermen tegen potentieel gevaarlijke asteroïden en kometen" },
                    { en: "Military forces on other planets", es: "Fuerzas militares en otros planetas", de: "Militärische Kräfte auf anderen Planeten", nl: "Militaire troepen op andere planeten" },
                    { en: "Defending planets from aliens", es: "Defender planetas de extraterrestres", de: "Planeten vor Außerirdischen verteidigen", nl: "Planeten verdedigen tegen buitenaardse wezens" },
                    { en: "Building walls around planets", es: "Construir muros alrededor de planetas", de: "Mauern um Planeten bauen", nl: "Muren bouwen rond planeten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the significance of finding life on other worlds?",
                    es: "¿Cuál es la importancia de encontrar vida en otros mundos?",
                    de: "Was ist die Bedeutung des Findens von Leben auf anderen Welten?",
                    nl: "Wat is de betekenis van het vinden van leven op andere werelden?"
                },
                options: [
                    { en: "It would answer fundamental questions about life in the universe", es: "Respondería preguntas fundamentales sobre la vida en el universo", de: "Es würde fundamentale Fragen über das Leben im Universum beantworten", nl: "Het zou fundamentele vragen over leven in het heelal beantwoorden" },
                    { en: "We could make new friends", es: "Podríamos hacer nuevos amigos", de: "Wir könnten neue Freunde finden", nl: "We zouden nieuwe vrienden kunnen maken" },
                    { en: "It would prove Earth is not special", es: "Probaría que la Tierra no es especial", de: "Es würde beweisen, dass die Erde nicht besonders ist", nl: "Het zou bewijzen dat de Aarde niet speciaal is" },
                    { en: "We could trade with aliens", es: "Podríamos comerciar con extraterrestres", de: "Wir könnten mit Außerirdischen handeln", nl: "We zouden handel kunnen drijven met buitenaardse wezens" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is space manufacturing?",
                    es: "¿Qué es la manufactura espacial?",
                    de: "Was ist Weltraum-Fertigung?",
                    nl: "Wat is ruimteproductie?"
                },
                options: [
                    { en: "Using the unique conditions of space to manufacture materials impossible on Earth", es: "Usar las condiciones únicas del espacio para manufacturar materiales imposibles en la Tierra", de: "Die einzigartigen Bedingungen des Weltraums nutzen, um Materialien herzustellen, die auf der Erde unmöglich sind", nl: "De unieke omstandigheden van de ruimte gebruiken om materialen te produceren die onmogelijk zijn op Aarde" },
                    { en: "Building factories that look like spaceships", es: "Construir fábricas que parecen naves espaciales", de: "Fabriken bauen, die wie Raumschiffe aussehen", nl: "Fabrieken bouwen die eruitzien als ruimteschepen" },
                    { en: "Manufacturing spacecraft only", es: "Manufacturar solo naves espaciales", de: "Nur Raumschiffe herstellen", nl: "Alleen ruimteschepen produceren" },
                    { en: "Making space-themed products", es: "Hacer productos con tema espacial", de: "Weltraumthematische Produkte herstellen", nl: "Ruimte-gerelateerde producten maken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What role will quantum technology play in future space missions?",
                    es: "¿Qué papel jugará la tecnología cuántica en futuras misiones espaciales?",
                    de: "Welche Rolle wird Quantentechnologie in zukünftigen Weltraummissionen spielen?",
                    nl: "Welke rol zal kwantumtechnologie spelen in toekomstige ruimtemissies?"
                },
                options: [
                    { en: "Ultra-secure communication and potentially revolutionary propulsion", es: "Comunicación ultra-segura y potencialmente propulsión revolucionaria", de: "Ultra-sichere Kommunikation und möglicherweise revolutionärer Antrieb", nl: "Ultra-veilige communicatie en mogelijk revolutionaire voortstuwing" },
                    { en: "Only making smaller computers", es: "Solo hacer computadoras más pequeñas", de: "Nur kleinere Computer machen", nl: "Alleen kleinere computers maken" },
                    { en: "Quantum technology doesn't work in space", es: "La tecnología cuántica no funciona en el espacio", de: "Quantentechnologie funktioniert nicht im Weltraum", nl: "Kwantumtechnologie werkt niet in de ruimte" },
                    { en: "Making quantum soup for astronauts", es: "Hacer sopa cuántica para astronautas", de: "Quantensuppe für Astronauten machen", nl: "Kwantumsoep maken voor astronauten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the timeline for establishing permanent human presence on Mars?",
                    es: "¿Cuál es el cronograma para establecer presencia humana permanente en Marte?",
                    de: "Was ist der Zeitplan für die Etablierung einer dauerhaften menschlichen Präsenz auf dem Mars?",
                    nl: "Wat is de tijdlijn voor het vestigen van permanente menselijke aanwezigheid op Mars?"
                },
                options: [
                    { en: "Current estimates suggest 2030s-2040s for first missions, longer for permanent bases", es: "Las estimaciones actuales sugieren 2030s-2040s para primeras misiones, más tiempo para bases permanentes", de: "Aktuelle Schätzungen deuten auf 2030er-2040er Jahre für erste Missionen hin, länger für permanente Basen", nl: "Huidige schattingen suggereren 2030s-2040s voor eerste missies, langer voor permanente bases" },
                    { en: "Next year", es: "El próximo año", de: "Nächstes Jahr", nl: "Volgend jaar" },
                    { en: "Never, it's impossible", es: "Nunca, es imposible", de: "Niemals, es ist unmöglich", nl: "Nooit, het is onmogelijk" },
                    { en: "In 100 years", es: "En 100 años", de: "In 100 Jahren", nl: "Over 100 jaar" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How will biotechnology contribute to long-duration space missions?",
                    es: "¿Cómo contribuirá la biotecnología a misiones espaciales de larga duración?",
                    de: "Wie wird Biotechnologie zu lang andauernden Weltraummissionen beitragen?",
                    nl: "Hoe zal biotechnologie bijdragen aan langdurige ruimtemissies?"
                },
                options: [
                    { en: "Growing food, producing medicine, and maintaining astronaut health", es: "Cultivar comida, producir medicina y mantener la salud de los astronautas", de: "Nahrung anbauen, Medizin produzieren und die Gesundheit der Astronauten erhalten", nl: "Voedsel kweken, medicijnen produceren en astronautengezondheidsinstandhouden" },
                    { en: "Only making things look pretty", es: "Solo hacer que las cosas se vean bonitas", de: "Nur Dinge hübsch aussehen lassen", nl: "Alleen dingen er mooi uit laten zien" },
                    { en: "Biotechnology doesn't work in space", es: "La biotecnología no funciona en el espacio", de: "Biotechnologie funktioniert nicht im Weltraum", nl: "Biotechnologie werkt niet in de ruimte" },
                    { en: "Creating space monsters", es: "Crear monstruos espaciales", de: "Weltraummonster erschaffen", nl: "Ruimtemonsters creëren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the biggest challenge facing the future of human space exploration?",
                    es: "¿Cuál es el mayor desafío que enfrenta el futuro de la exploración espacial humana?",
                    de: "Was ist die größte Herausforderung für die Zukunft der menschlichen Weltraumforschung?",
                    nl: "Wat is de grootste uitdaging voor de toekomst van menselijke ruimteverkenning?"
                },
                options: [
                    { en: "Developing sustainable, safe, and affordable long-term space presence", es: "Desarrollar presencia espacial a largo plazo sostenible, segura y asequible", de: "Nachhaltige, sichere und erschwingliche langfristige Weltraumpräsenz entwickeln", nl: "Duurzame, veilige en betaalbare langetermijn ruimteaanwezigheid ontwikkelen" },
                    { en: "Finding enough astronauts", es: "Encontrar suficientes astronautas", de: "Genug Astronauten finden", nl: "Genoeg astronauten vinden" },
                    { en: "Making space suits fashionable", es: "Hacer que los trajes espaciales estén a la moda", de: "Raumanzüge modisch machen", nl: "Ruimtepakken modieus maken" },
                    { en: "Learning alien languages", es: "Aprender idiomas extraterrestres", de: "Außerirdische Sprachen lernen", nl: "Buitenaardse talen leren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What impact will space exploration have on life on Earth?",
                    es: "¿Qué impacto tendrá la exploración espacial en la vida en la Tierra?",
                    de: "Welche Auswirkungen wird die Weltraumforschung auf das Leben auf der Erde haben?",
                    nl: "Welke impact zal ruimteverkenning hebben op het leven op Aarde?"
                },
                options: [
                    { en: "New technologies, resources, and perspectives that benefit humanity", es: "Nuevas tecnologías, recursos y perspectivas que benefician a la humanidad", de: "Neue Technologien, Ressourcen und Perspektiven, die der Menschheit zugutekommen", nl: "Nieuwe technologieën, hulpbronnen en perspectieven die de mensheid ten goede komen" },
                    { en: "Everyone will have to move to space", es: "Todos tendrán que mudarse al espacio", de: "Jeder wird ins Weltall ziehen müssen", nl: "Iedereen zal naar de ruimte moeten verhuizen" },
                    { en: "No impact at all", es: "Ningún impacto en absoluto", de: "Überhaupt keine Auswirkungen", nl: "Helemaal geen impact" },
                    { en: "Earth will become obsolete", es: "La Tierra se volverá obsoleta", de: "Die Erde wird veraltet", nl: "De Aarde wordt verouderd" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why is the future of space exploration exciting?",
                    es: "¿Por qué es emocionante el futuro de la exploración espacial?",
                    de: "Warum ist die Zukunft der Weltraumforschung aufregend?",
                    nl: "Waarom is de toekomst van ruimteverkenning spannend?"
                },
                options: [
                    { en: "It opens infinite possibilities for human knowledge, growth, and survival", es: "Abre posibilidades infinitas para el conocimiento, crecimiento y supervivencia humanos", de: "Es eröffnet unendliche Möglichkeiten für menschliches Wissen, Wachstum und Überleben", nl: "Het opent oneindige mogelijkheden voor menselijke kennis, groei en overleving" },
                    { en: "We might find treasure", es: "Podríamos encontrar tesoros", de: "Wir könnten Schätze finden", nl: "We zouden schatten kunnen vinden" },
                    { en: "Space travel will be like vacations", es: "Los viajes espaciales serán como vacaciones", de: "Weltraumreisen werden wie Urlaub sein", nl: "Ruimtereizen zullen als vakanties zijn" },
                    { en: "Everyone will become astronauts", es: "Todos se convertirán en astronautas", de: "Jeder wird Astronaut werden", nl: "Iedereen wordt astronaut" }
                ],
                correct: 0,
                explanation: {
                    en: "Space exploration represents humanity's greatest adventure, offering solutions to Earth's challenges, expanding our understanding of the universe, and ensuring our species' long-term survival through diversification beyond one planet.",
                    es: "La exploración espacial representa la mayor aventura de la humanidad, ofreciendo soluciones a los desafíos de la Tierra, expandiendo nuestra comprensión del universo y asegurando la supervivencia a largo plazo de nuestra especie a través de la diversificación más allá de un planeta.",
                    de: "Die Weltraumforschung stellt das größte Abenteuer der Menschheit dar, bietet Lösungen für die Herausforderungen der Erde, erweitert unser Verständnis des Universums und sichert das langfristige Überleben unserer Spezies durch Diversifizierung jenseits eines Planeten.",
                    nl: "Ruimteverkenning vertegenwoordigt de grootste avontuur van de mensheid, biedt oplossingen voor de uitdagingen van de Aarde, breidt ons begrip van het heelal uit en verzekert het langetermijnoverleving van onze soort door diversificatie voorbij één planeet."
                }
            },
            {
                question: {
                    en: "What is orbital refueling and why is it important?",
                    es: "¿Qué es el reabastecimiento orbital y por qué es importante?",
                    de: "Was ist Orbitalrefueling und warum ist es wichtig?",
                    nl: "Wat is orbitaal tanken en waarom is het belangrijk?"
                },
                options: [
                    { en: "Refueling spacecraft in orbit enables deeper space missions without massive rockets", es: "Reabastecer naves espaciales en órbita permite misiones espaciales más profundas sin cohetes masivos", de: "Das Betanken von Raumschiffen im Orbit ermöglicht tiefere Weltraummissionen ohne massive Raketen", nl: "Ruimteschepen in een baan om de aarde tanken maakt diepere ruimtemissies mogelijk zonder massieve raketten" },
                    { en: "It's just for saving money on gas", es: "Es solo para ahorrar dinero en gasolina", de: "Es ist nur um Geld bei Benzin zu sparen", nl: "Het is alleen om geld te besparen op benzine" },
                    { en: "Spacecraft never need refueling", es: "Las naves espaciales nunca necesitan reabastecimiento", de: "Raumschiffe brauchen niemals Betankung", nl: "Ruimteschepen hebben nooit brandstof nodig" },
                    { en: "It's only used for satellites", es: "Solo se usa para satélites", de: "Es wird nur für Satelliten verwendet", nl: "Het wordt alleen gebruikt voor satellieten" }
                ],
                correct: 0,
                explanation: {
                    en: "Orbital refueling allows spacecraft to be launched with smaller, less expensive rockets and then refueled in space, enabling more ambitious missions to Mars and beyond.",
                    es: "El reabastecimiento orbital permite que las naves espaciales sean lanzadas con cohetes más pequeños y menos costosos y luego reabastecidas en el espacio, permitiendo misiones más ambiciosas a Marte y más allá.",
                    de: "Orbitalrefueling ermöglicht es, Raumschiffe mit kleineren, weniger teuren Raketen zu starten und dann im Weltraum zu betanken, wodurch ehrgeizigere Missionen zum Mars und darüber hinaus ermöglicht werden.",
                    nl: "Orbitaal tanken stelt ruimteschepen in staat om gelanceerd te worden met kleinere, minder dure raketten en vervolgens getankt te worden in de ruimte, waardoor meer ambitieuze missies naar Mars en daarbuiten mogelijk worden."
                }
            },
            {
                question: {
                    en: "What is space-based solar power?",
                    es: "¿Qué es la energía solar espacial?",
                    de: "Was ist weltraumbasierte Solarenergie?",
                    nl: "Wat is ruimte-gebaseerde zonne-energie?"
                },
                options: [
                    { en: "Collecting solar energy in space and beaming it to Earth via microwaves", es: "Recoger energía solar en el espacio y transmitirla a la Tierra vía microondas", de: "Solarenergie im Weltraum sammeln und per Mikrowellen zur Erde senden", nl: "Zonne-energie verzamelen in de ruimte en naar de Aarde stralen via microgolven" },
                    { en: "Solar panels that work only in space", es: "Paneles solares que funcionan solo en el espacio", de: "Solarpanels, die nur im Weltraum funktionieren", nl: "Zonnepanelen die alleen in de ruimte werken" },
                    { en: "Using the Sun as a power source for rockets", es: "Usar el Sol como fuente de energía para cohetes", de: "Die Sonne als Energiequelle für Raketen verwenden", nl: "De Zon gebruiken als energiebron voor raketten" },
                    { en: "Solar power that makes things float", es: "Energía solar que hace flotar las cosas", de: "Solarenergie, die Dinge schweben lässt", nl: "Zonne-energie die dingen laat zweven" }
                ],
                correct: 0,
                explanation: {
                    en: "Space-based solar power could provide clean, abundant energy by collecting sunlight in space 24/7 without atmospheric interference and wirelessly transmitting it to Earth.",
                    es: "La energía solar espacial podría proporcionar energía limpia y abundante recolectando luz solar en el espacio 24/7 sin interferencia atmosférica y transmitiéndola inalámbricamente a la Tierra.",
                    de: "Weltraumbasierte Solarenergie könnte saubere, reichliche Energie liefern, indem sie 24/7 Sonnenlicht im Weltraum ohne atmosphärische Störungen sammelt und es drahtlos zur Erde überträgt.",
                    nl: "Ruimte-gebaseerde zonne-energie zou schone, overvloedige energie kunnen leveren door 24/7 zonlicht in de ruimte te verzamelen zonder atmosferische interferentie en het draadloos naar de Aarde te zenden."
                }
            },
            {
                question: {
                    en: "What is in-situ resource utilization (ISRU)?",
                    es: "¿Qué es la utilización de recursos in-situ (ISRU)?",
                    de: "Was ist In-situ-Ressourcennutzung (ISRU)?",
                    nl: "Wat is in-situ hulpbronnengebruik (ISRU)?"
                },
                options: [
                    { en: "Using materials found on other planets to support missions instead of shipping everything from Earth", es: "Usar materiales encontrados en otros planetas para apoyar misiones en lugar de enviar todo desde la Tierra", de: "Materialien verwenden, die auf anderen Planeten gefunden werden, um Missionen zu unterstützen, anstatt alles von der Erde zu versenden", nl: "Materialen gebruiken die op andere planeten gevonden worden om missies te ondersteunen in plaats van alles vanaf de Aarde te verzenden" },
                    { en: "A new type of space suit", es: "Un nuevo tipo de traje espacial", de: "Eine neue Art Raumanzug", nl: "Een nieuw type ruimtepak" },
                    { en: "Resources that can only be used once", es: "Recursos que solo pueden usarse una vez", de: "Ressourcen, die nur einmal verwendet werden können", nl: "Hulpbronnen die slechts één keer gebruikt kunnen worden" },
                    { en: "Resources found only in space stations", es: "Recursos encontrados solo en estaciones espaciales", de: "Ressourcen, die nur in Raumstationen gefunden werden", nl: "Hulpbronnen die alleen in ruimtestations gevonden worden" }
                ],
                correct: 0,
                explanation: {
                    en: "ISRU involves extracting water, oxygen, fuel, and building materials from planetary surfaces, dramatically reducing mission costs and enabling sustainable space exploration.",
                    es: "ISRU implica extraer agua, oxígeno, combustible y materiales de construcción de superficies planetarias, reduciendo dramáticamente los costos de misión y permitiendo exploración espacial sostenible.",
                    de: "ISRU umfasst die Gewinnung von Wasser, Sauerstoff, Kraftstoff und Baumaterialien von Planetenoberflächen, was die Missionskosten dramatisch reduziert und nachhaltige Weltraumforschung ermöglicht.",
                    nl: "ISRU omvat het winnen van water, zuurstof, brandstof en bouwmaterialen van planetaire oppervlakken, wat missiekosten dramatisch vermindert en duurzame ruimteverkenning mogelijk maakt."
                }
            },
            {
                question: {
                    en: "What are magnetic plasma sails?",
                    es: "¿Qué son las velas de plasma magnético?",
                    de: "Was sind magnetische Plasmasegel?",
                    nl: "Wat zijn magnetische plasmazeilen?"
                },
                options: [
                    { en: "Propulsion systems that use magnetic fields to deflect solar wind plasma for thrust", es: "Sistemas de propulsión que usan campos magnéticos para desviar plasma del viento solar para empuje", de: "Antriebssysteme, die Magnetfelder verwenden, um Sonnenwindplasma für Schub abzulenken", nl: "Voortstuwingssystemen die magnetische velden gebruiken om zonnewindplasma af te buigen voor stuwkracht" },
                    { en: "Sails made of magnets", es: "Velas hechas de imanes", de: "Segel aus Magneten", nl: "Zeilen gemaakt van magneten" },
                    { en: "Plasma screens for spacecraft", es: "Pantallas de plasma para naves espaciales", de: "Plasma-Bildschirme für Raumschiffe", nl: "Plasmaschermen voor ruimteschepen" },
                    { en: "Magnetic compasses for space navigation", es: "Brújulas magnéticas para navegación espacial", de: "Magnetkompasse für Weltraumnavigation", nl: "Magnetische kompassen voor ruimtenavigatie" }
                ],
                correct: 0,
                explanation: {
                    en: "Magnetic plasma sails could enable fast, fuel-free travel through space by using magnetic fields to interact with charged particles in the solar wind.",
                    es: "Las velas de plasma magnético podrían permitir viajes rápidos sin combustible a través del espacio usando campos magnéticos para interactuar con partículas cargadas en el viento solar.",
                    de: "Magnetische Plasmasegel könnten schnelle, kraftstofffreie Reisen durch den Weltraum ermöglichen, indem sie Magnetfelder verwenden, um mit geladenen Teilchen im Sonnenwind zu interagieren.",
                    nl: "Magnetische plasmazeilen zouden snelle, brandstofvrije reizen door de ruimte mogelijk kunnen maken door magnetische velden te gebruiken om te interageren met geladen deeltjes in de zonnewind."
                }
            },
            {
                question: {
                    en: "What is rotating artificial gravity?",
                    es: "¿Qué es la gravedad artificial rotatoria?",
                    de: "Was ist rotierende künstliche Schwerkraft?",
                    nl: "Wat is roterende kunstmatige zwaartekracht?"
                },
                options: [
                    { en: "Creating artificial gravity by spinning spacecraft to produce centrifugal force", es: "Crear gravedad artificial girando naves espaciales para producir fuerza centrífuga", de: "Künstliche Schwerkraft durch Drehen von Raumschiffen erzeugen, um Zentrifugalkraft zu produzieren", nl: "Kunstmatige zwaartekracht creëren door ruimteschepen te laten draaien om middelpuntvliedende kracht te produceren" },
                    { en: "Gravity that only works when rotating", es: "Gravedad que solo funciona cuando rota", de: "Schwerkraft, die nur beim Rotieren funktioniert", nl: "Zwaartekracht die alleen werkt bij rotatie" },
                    { en: "Natural gravity that spins", es: "Gravedad natural que gira", de: "Natürliche Schwerkraft, die sich dreht", nl: "Natuurlijke zwaartekracht die draait" },
                    { en: "Artificial gravity that changes direction", es: "Gravedad artificial que cambia de dirección", de: "Künstliche Schwerkraft, die die Richtung ändert", nl: "Kunstmatige zwaartekracht die van richting verandert" }
                ],
                correct: 0,
                explanation: {
                    en: "Rotating spacecraft sections can simulate Earth-like gravity, helping astronauts maintain bone density, muscle mass, and overall health during long missions.",
                    es: "Las secciones giratorias de naves espaciales pueden simular gravedad similar a la Tierra, ayudando a los astronautas a mantener densidad ósea, masa muscular y salud general durante misiones largas.",
                    de: "Rotierende Raumschiffsektionen können erdähnliche Schwerkraft simulieren und Astronauten helfen, Knochendichte, Muskelmasse und Gesamtgesundheit während langer Missionen zu erhalten.",
                    nl: "Roterende ruimteschipsecties kunnen aardachtige zwaartekracht simuleren, waardoor astronauten botdichtheid, spiermassa en algehele gezondheid kunnen behouden tijdens lange missies."
                }
            },
            {
                question: {
                    en: "What is space archaeology?",
                    es: "¿Qué es la arqueología espacial?",
                    de: "Was ist Weltraumarchäologie?",
                    nl: "Wat is ruimtearcheologie?"
                },
                options: [
                    { en: "Using satellite technology to discover and study archaeological sites on Earth", es: "Usar tecnología satelital para descubrir y estudiar sitios arqueológicos en la Tierra", de: "Satellitentechnologie verwenden, um archäologische Stätten auf der Erde zu entdecken und zu studieren", nl: "Satelliettechnologie gebruiken om archeologische sites op aarde te ontdekken en bestuderen" },
                    { en: "Digging for artifacts on other planets", es: "Excavar en busca de artefactos en otros planetas", de: "Nach Artefakten auf anderen Planeten graben", nl: "Graven naar artefacten op andere planeten" },
                    { en: "Studying the history of space missions", es: "Estudiar la historia de las misiones espaciales", de: "Die Geschichte der Weltraummissionen studieren", nl: "De geschiedenis van ruimtemissies bestuderen" },
                    { en: "Archaeological work done by astronauts", es: "Trabajo arqueológico hecho por astronautas", de: "Archäologische Arbeit von Astronauten", nl: "Archeologisch werk gedaan door astronauten" }
                ],
                correct: 0,
                explanation: {
                    en: "Space archaeology uses remote sensing from satellites to identify hidden archaeological features, map ancient sites, and monitor cultural heritage preservation.",
                    es: "La arqueología espacial usa detección remota desde satélites para identificar características arqueológicas ocultas, mapear sitios antiguos y monitorear la preservación del patrimonio cultural.",
                    de: "Weltraumarchäologie verwendet Fernerkundung von Satelliten, um versteckte archäologische Merkmale zu identifizieren, antike Stätten zu kartieren und die Erhaltung des Kulturerbes zu überwachen.",
                    nl: "Ruimtearcheologie gebruikt remote sensing van satellieten om verborgen archeologische kenmerken te identificeren, oude sites in kaart te brengen en cultureel erfgoed behoud te monitoren."
                }
            },
            {
                question: {
                    en: "What are swarm robotics in space exploration?",
                    es: "¿Qué es la robótica en enjambre en la exploración espacial?",
                    de: "Was ist Schwarmrobotik in der Weltraumforschung?",
                    nl: "Wat is zwermrobotica in ruimteverkenning?"
                },
                options: [
                    { en: "Multiple small robots working together to explore and map large areas efficiently", es: "Múltiples robots pequeños trabajando juntos para explorar y mapear grandes áreas eficientemente", de: "Mehrere kleine Roboter, die zusammenarbeiten, um große Gebiete effizient zu erkunden und zu kartieren", nl: "Meerdere kleine robots die samenwerken om grote gebieden efficiënt te verkennen en in kaart te brengen" },
                    { en: "Robots that look like bees", es: "Robots que parecen abejas", de: "Roboter, die wie Bienen aussehen", nl: "Robots die eruitzien als bijen" },
                    { en: "Robots that only work in swarms of exactly 100", es: "Robots que solo funcionan en enjambres de exactamente 100", de: "Roboter, die nur in Schwärmen von genau 100 funktionieren", nl: "Robots die alleen werken in zwermen van precies 100" },
                    { en: "Robotic insects for space missions", es: "Insectos robóticos para misiones espaciales", de: "Roboter-Insekten für Weltraummissionen", nl: "Robotische insecten voor ruimtemissies" }
                ],
                correct: 0,
                explanation: {
                    en: "Swarm robotics allows many small, simple robots to coordinate their actions, providing redundancy, covering large areas quickly, and reducing mission risk compared to single large robots.",
                    es: "La robótica en enjambre permite que muchos robots pequeños y simples coordinen sus acciones, proporcionando redundancia, cubriendo grandes áreas rápidamente y reduciendo el riesgo de misión comparado con robots grandes individuales.",
                    de: "Schwarmrobotik ermöglicht es vielen kleinen, einfachen Robotern, ihre Aktionen zu koordinieren, bietet Redundanz, deckt große Gebiete schnell ab und reduziert das Missionsrisiko im Vergleich zu einzelnen großen Robotern.",
                    nl: "Zwermrobotica stelt veel kleine, eenvoudige robots in staat hun acties te coördineren, biedt redundantie, bestrijkt grote gebieden snel en vermindert missierisico vergeleken met enkele grote robots."
                }
            },
            {
                question: {
                    en: "What is closed-loop life support?",
                    es: "¿Qué es el soporte vital de circuito cerrado?",
                    de: "Was ist geschlossene Lebenserhaltung?",
                    nl: "Wat is gesloten-lus levensondersteuning?"
                },
                options: [
                    { en: "Recycling air, water, and waste to create a self-sustaining environment", es: "Reciclar aire, agua y desechos para crear un ambiente autosostenible", de: "Luft, Wasser und Abfall recyceln, um eine selbsterhaltende Umgebung zu schaffen", nl: "Lucht, water en afval recyclen om een zelfvoorzienende omgeving te creëren" },
                    { en: "Life support that works in loops only", es: "Soporte vital que funciona solo en bucles", de: "Lebenserhaltung, die nur in Schleifen funktioniert", nl: "Levensondersteuning die alleen in lussen werkt" },
                    { en: "Emergency life support systems", es: "Sistemas de soporte vital de emergencia", de: "Notfall-Lebenserhaltungssysteme", nl: "Noodlevensondersteunende systemen" },
                    { en: "Life support that never breaks", es: "Soporte vital que nunca se rompe", de: "Lebenserhaltung, die nie kaputt geht", nl: "Levensondersteuning die nooit kapot gaat" }
                ],
                correct: 0,
                explanation: {
                    en: "Closed-loop systems minimize resource requirements for long-duration missions by continuously recycling consumables, essential for Mars missions and permanent space habitats.",
                    es: "Los sistemas de circuito cerrado minimizan los requisitos de recursos para misiones de larga duración reciclando continuamente consumibles, esencial para misiones a Marte y hábitats espaciales permanentes.",
                    de: "Geschlossene Systeme minimieren Ressourcenanforderungen für lang andauernde Missionen durch kontinuierliches Recycling von Verbrauchsmaterialien, wesentlich für Mars-Missionen und dauerhafte Weltraumhabitate.",
                    nl: "Gesloten-lus systemen minimaliseren hulpbronnenvereisten voor langdurige missies door continu recyclen van verbruiksartikelen, essentieel voor Mars-missies en permanente ruimtehabitats."
                }
            },
            {
                question: {
                    en: "What is space weather prediction?",
                    es: "¿Qué es la predicción del clima espacial?",
                    de: "Was ist Weltraumwetter-Vorhersage?",
                    nl: "Wat is ruimteweersvoorspelling?"
                },
                options: [
                    { en: "Forecasting solar radiation and magnetic storms that affect spacecraft and astronauts", es: "Predecir radiación solar y tormentas magnéticas que afectan naves espaciales y astronautas", de: "Vorhersage von Sonnenstrahlung und Magnetstürmen, die Raumschiffe und Astronauten beeinflussen", nl: "Voorspellen van zonnestraling en magnetische stormen die ruimteschepen en astronauten beïnvloeden" },
                    { en: "Weather forecasting for other planets", es: "Pronóstico del tiempo para otros planetas", de: "Wettervorhersage für andere Planeten", nl: "Weersvoorspelling voor andere planeten" },
                    { en: "Predicting when it will rain in space", es: "Predecir cuándo lloverá en el espacio", de: "Vorhersagen, wann es im Weltraum regnen wird", nl: "Voorspellen wanneer het in de ruimte zal regenen" },
                    { en: "Weather reports for space stations only", es: "Informes meteorológicos solo para estaciones espaciales", de: "Wetterberichte nur für Raumstationen", nl: "Weersberichten alleen voor ruimtestations" }
                ],
                correct: 0,
                explanation: {
                    en: "Space weather monitoring protects astronauts from dangerous radiation exposure and prevents spacecraft electronics from being damaged by solar storms and cosmic rays.",
                    es: "El monitoreo del clima espacial protege a los astronautas de la exposición peligrosa a la radiación y previene que los electrónicos de naves espaciales sean dañados por tormentas solares y rayos cósmicos.",
                    de: "Weltraumwetter-Monitoring schützt Astronauten vor gefährlicher Strahlenbelastung und verhindert Schäden an Raumschiff-Elektronik durch Sonnenstürme und kosmische Strahlung.",
                    nl: "Ruimteweermonitoring beschermt astronauten tegen gevaarlijke stralingsblootstelling en voorkomt dat ruimteschipelektronica beschadigd wordt door zonnestormen en kosmische stralen."
                }
            },
            {
                question: {
                    en: "What is bioprinting in space?",
                    es: "¿Qué es la bioimpresión en el espacio?",
                    de: "Was ist Bioprinting im Weltraum?",
                    nl: "Wat is bioprinting in de ruimte?"
                },
                options: [
                    { en: "3D printing living tissues and organs using biological materials in microgravity", es: "Impresión 3D de tejidos vivos y órganos usando materiales biológicos en microgravedad", de: "3D-Druck von lebendem Gewebe und Organen mit biologischen Materialien in der Schwerelosigkeit", nl: "3D printen van levende weefsels en organen met biologische materialen in microzwaartekracht" },
                    { en: "Printing pictures of biological specimens", es: "Imprimir imágenes de especímenes biológicos", de: "Bilder von biologischen Proben drucken", nl: "Afdrukken van afbeeldingen van biologische specimens" },
                    { en: "Using printers made from biological materials", es: "Usar impresoras hechas de materiales biológicos", de: "Drucker aus biologischen Materialien verwenden", nl: "Printers gebruiken gemaakt van biologische materialen" },
                    { en: "Printing biological textbooks", es: "Imprimir libros de texto biológicos", de: "Biologische Lehrbücher drucken", nl: "Biologische leerboeken printen" }
                ],
                correct: 0,
                explanation: {
                    en: "Microgravity conditions in space may enable better tissue and organ printing by eliminating gravitational stresses that affect cell growth and structure formation.",
                    es: "Las condiciones de microgravedad en el espacio pueden permitir mejor impresión de tejidos y órganos eliminando tensiones gravitacionales que afectan el crecimiento celular y la formación de estructuras.",
                    de: "Mikrogravitationsbedingungen im Weltraum können besseres Gewebe- und Organprinting ermöglichen, indem Gravitationsspannungen eliminiert werden, die Zellwachstum und Strukturbildung beeinflussen.",
                    nl: "Microzwaartekrachtomstandigheden in de ruimte kunnen betere weefsel- en orgaanprinting mogelijk maken door gravitationele spanningen weg te nemen die celgroei en structuurvorming beïnvloeden."
                }
            },
            {
                question: {
                    en: "What is electrodynamic tethering?",
                    es: "¿Qué es la atadura electrodinámica?",
                    de: "Was ist elektrodynamisches Tethering?",
                    nl: "Wat is elektrodynamisch tetheren?"
                },
                options: [
                    { en: "Using conducting cables to generate thrust by interacting with planetary magnetic fields", es: "Usar cables conductores para generar empuje interactuando con campos magnéticos planetarios", de: "Leitende Kabel verwenden, um Schub durch Interaktion mit planetaren Magnetfeldern zu erzeugen", nl: "Geleidende kabels gebruiken om stuwkracht te genereren door interactie met planetaire magnetische velden" },
                    { en: "Electric ropes for climbing in space", es: "Cuerdas eléctricas para escalar en el espacio", de: "Elektrische Seile zum Klettern im Weltraum", nl: "Elektrische touwen voor klimmen in de ruimte" },
                    { en: "Tying spacecraft together with electric cables", es: "Atar naves espaciales con cables eléctricos", de: "Raumschiffe mit Elektrokabeln zusammenbinden", nl: "Ruimteschepen aan elkaar binden met elektrische kabels" },
                    { en: "Dynamic electricity storage systems", es: "Sistemas dinámicos de almacenamiento de electricidad", de: "Dynamische Stromspeichersysteme", nl: "Dynamische elektriciteitsopslagsystemen" }
                ],
                correct: 0,
                explanation: {
                    en: "Electrodynamic tethers can provide propulsion, power generation, or orbital drag without using fuel, by exploiting the motion of conductive cables through magnetic fields.",
                    es: "Las ataduras electrodinámicas pueden proporcionar propulsión, generación de energía o arrastre orbital sin usar combustible, explotando el movimiento de cables conductores a través de campos magnéticos.",
                    de: "Elektrodynamische Tether können Antrieb, Stromerzeugung oder Bahnwiderstand ohne Kraftstoffverbrauch liefern, indem sie die Bewegung leitender Kabel durch Magnetfelder ausnutzen.",
                    nl: "Elektrodynamische tethers kunnen voortstuwing, energieopwekking of baanweerstand leveren zonder brandstof te gebruiken, door de beweging van geleidende kabels door magnetische velden te benutten."
                }
            },
            {
                question: {
                    en: "What is the concept of a world ship?",
                    es: "¿Qué es el concepto de una nave mundial?",
                    de: "Was ist das Konzept eines Weltenschiffs?",
                    nl: "Wat is het concept van een wereldschip?"
                },
                options: [
                    { en: "A massive self-contained spacecraft designed to carry entire populations across interstellar distances", es: "Una nave espacial masiva autónoma diseñada para transportar poblaciones enteras a través de distancias interestelares", de: "Ein massives, in sich geschlossenes Raumschiff, das ganze Bevölkerungen über interstellare Entfernungen transportieren soll", nl: "Een massief zelfvoorzienend ruimteschip ontworpen om hele bevolkingen over interstellaire afstanden te vervoeren" },
                    { en: "A ship that contains a whole world", es: "Una nave que contiene un mundo entero", de: "Ein Schiff, das eine ganze Welt enthält", nl: "Een schip dat een hele wereld bevat" },
                    { en: "The largest ship ever built", es: "La nave más grande jamás construida", de: "Das größte jemals gebaute Schiff", nl: "Het grootste ooit gebouwde schip" },
                    { en: "A ship for exploring the whole world", es: "Una nave para explorar todo el mundo", de: "Ein Schiff zur Erkundung der ganzen Welt", nl: "Een schip om de hele wereld te verkennen" }
                ],
                correct: 0,
                explanation: {
                    en: "World ships would essentially be mobile planets, with complete ecosystems, cities, and civilizations aboard, enabling humanity to spread across the galaxy over thousands of years.",
                    es: "Las naves mundiales serían esencialmente planetas móviles, con ecosistemas completos, ciudades y civilizaciones a bordo, permitiendo a la humanidad expandirse a través de la galaxia durante miles de años.",
                    de: "Weltenschiffe wären im Wesentlichen mobile Planeten mit kompletten Ökosystemen, Städten und Zivilisationen an Bord, die es der Menschheit ermöglichen, sich über Tausende von Jahren in der Galaxie auszubreiten.",
                    nl: "Wereldschepen zouden in wezen mobiele planeten zijn, met complete ecosystemen, steden en beschavingen aan boord, waardoor de mensheid zich over duizenden jaren door de melkweg kan verspreiden."
                }
            },
            {
                question: {
                    en: "What is active space debris removal?",
                    es: "¿Qué es la remoción activa de desechos espaciales?",
                    de: "Was ist aktive Weltraummüll-Entfernung?",
                    nl: "Wat is actieve ruimteafvalverwijdering?"
                },
                options: [
                    { en: "Using specialized missions to capture and deorbit dangerous space junk", es: "Usar misiones especializadas para capturar y desorbitrar basura espacial peligrosa", de: "Spezialisierte Missionen verwenden, um gefährlichen Weltraummüll zu erfassen und zu entorbitieren", nl: "Gespecialiseerde missies gebruiken om gevaarlijk ruimteafval te vangen en uit de baan te brengen" },
                    { en: "Astronauts picking up trash during spacewalks", es: "Astronautas recogiendo basura durante caminatas espaciales", de: "Astronauten sammeln Müll während Weltraumspaziergängen", nl: "Astronauten die afval oprapen tijdens ruimtewandelingen" },
                    { en: "Waiting for space debris to fall down naturally", es: "Esperar a que los desechos espaciales caigan naturalmente", de: "Warten, bis Weltraummüll natürlich herunterfällt", nl: "Wachten tot ruimteafval natuurlijk naar beneden valt" },
                    { en: "Using explosives to destroy space debris", es: "Usar explosivos para destruir desechos espaciales", de: "Sprengstoff verwenden, um Weltraummüll zu zerstören", nl: "Explosieven gebruiken om ruimteafval te vernietigen" }
                ],
                correct: 0,
                explanation: {
                    en: "Active debris removal prevents dangerous collisions that could create more debris and threaten operational spacecraft, using technologies like nets, harpoons, and robotic arms.",
                    es: "La remoción activa de desechos previene colisiones peligrosas que podrían crear más desechos y amenazar naves espaciales operacionales, usando tecnologías como redes, arpones y brazos robóticos.",
                    de: "Aktive Müllentfernung verhindert gefährliche Kollisionen, die mehr Trümmer erzeugen und operative Raumschiffe bedrohen könnten, unter Verwendung von Technologien wie Netzen, Harpunen und Roboterarmen.",
                    nl: "Actieve afvalverwijdering voorkomt gevaarlijke botsingen die meer afval zouden kunnen creëren en operationele ruimteschepen bedreigen, met behulp van technologieën zoals netten, harpoeenen en robotarmen."
                }
            },
            {
                question: {
                    en: "What is the ultimate goal of space exploration for humanity?",
                    es: "¿Cuál es el objetivo final de la exploración espacial para la humanidad?",
                    de: "Was ist das ultimative Ziel der Weltraumforschung für die Menschheit?",
                    nl: "Wat is het uiteindelijke doel van ruimteverkenning voor de mensheid?"
                },
                options: [
                    { en: "Ensuring humanity's survival and continued growth as a multi-planetary civilization", es: "Asegurar la supervivencia de la humanidad y crecimiento continuo como civilización multiplanetaria", de: "Das Überleben der Menschheit sichern und kontinuierliches Wachstum als multiplanetare Zivilisation", nl: "Het overleven van de mensheid verzekeren en voortdurende groei als een multiplanetaire beschaving" },
                    { en: "Finding the best vacation spots in the universe", es: "Encontrar los mejores lugares de vacaciones en el universo", de: "Die besten Urlaubsplätze im Universum finden", nl: "De beste vakantieoorden in het heelal vinden" },
                    { en: "Proving that space travel is possible", es: "Probar que los viajes espaciales son posibles", de: "Beweisen, dass Weltraumreisen möglich sind", nl: "Bewijzen dat ruimtereizen mogelijk is" },
                    { en: "Making space movies more realistic", es: "Hacer películas espaciales más realistas", de: "Weltraumfilme realistischer machen", nl: "Ruimtefilms realistischer maken" }
                ],
                correct: 0,
                explanation: {
                    en: "The ultimate goal is to transform humanity into a spacefaring civilization capable of thriving throughout the solar system and beyond, reducing existential risks and unlocking infinite possibilities for growth and discovery.",
                    es: "El objetivo final es transformar a la humanidad en una civilización espacial capaz de prosperar en todo el sistema solar y más allá, reduciendo riesgos existenciales y desbloqueando posibilidades infinitas para crecimiento y descubrimiento.",
                    de: "Das ultimative Ziel ist es, die Menschheit in eine raumfahrende Zivilisation zu verwandeln, die im ganzen Sonnensystem und darüber hinaus gedeihen kann, existenzielle Risiken reduziert und unendliche Möglichkeiten für Wachstum und Entdeckung erschließt.",
                    nl: "Het uiteindelijke doel is de mensheid te transformeren in een ruimtevarende beschaving die in staat is te gedijen door het hele zonnestelsel en daarbuiten, existentiële risico's te verminderen en oneindige mogelijkheden voor groei en ontdekking te ontsluiten."
                }
            },
            {
                question: {
                    en: "What makes space exploration humanity's next evolutionary step?",
                    es: "¿Qué hace que la exploración espacial sea el próximo paso evolutivo de la humanidad?",
                    de: "Was macht die Weltraumforschung zu der nächsten evolutionären Stufe der Menschheit?",
                    nl: "Wat maakt ruimteverkenning de volgende evolutionaire stap van de mensheid?"
                },
                options: [
                    { en: "It represents our species becoming truly adaptive to any environment in the universe", es: "Representa que nuestra especie se vuelva verdaderamente adaptable a cualquier ambiente en el universo", de: "Es stellt dar, dass unsere Spezies wirklich anpassungsfähig an jede Umgebung im Universum wird", nl: "Het vertegenwoordigt dat onze soort echt aangepast wordt aan elke omgeving in het heelal" },
                    { en: "Humans will grow wings in space", es: "Los humanos desarrollarán alas en el espacio", de: "Menschen werden Flügel im Weltraum entwickeln", nl: "Mensen zullen vleugels ontwikkelen in de ruimte" },
                    { en: "Space changes human DNA automatically", es: "El espacio cambia el ADN humano automáticamente", de: "Der Weltraum verändert menschliche DNA automatisch", nl: "De ruimte verandert menselijk DNA automatisch" },
                    { en: "Evolution stops working in space", es: "La evolución deja de funcionar en el espacio", de: "Evolution hört im Weltraum auf zu funktionieren", nl: "Evolutie stopt met werken in de ruimte" }
                ],
                correct: 0,
                explanation: {
                    en: "Space exploration forces humanity to develop technologies, social systems, and biological adaptations that make us capable of thriving in any environment, marking our transition from a planetary to a cosmic species.",
                    es: "La exploración espacial obliga a la humanidad a desarrollar tecnologías, sistemas sociales y adaptaciones biológicas que nos hacen capaces de prosperar en cualquier ambiente, marcando nuestra transición de una especie planetaria a cósmica.",
                    de: "Die Weltraumforschung zwingt die Menschheit dazu, Technologien, soziale Systeme und biologische Anpassungen zu entwickeln, die uns befähigen, in jeder Umgebung zu gedeihen, und markiert unseren Übergang von einer planetaren zu einer kosmischen Spezies.",
                    nl: "Ruimteverkenning dwingt de mensheid om technologieën, sociale systemen en biologische aanpassingen te ontwikkelen die ons in staat stellen in elke omgeving te gedijen, wat onze overgang markeert van een planetaire naar een kosmische soort."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/space-astronomy', level9);
    }
})();