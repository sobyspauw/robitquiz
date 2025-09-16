(function() {
    const level6 = {
        name: {
            en: "Life in the Past",
            es: "La Vida en el Pasado",
            de: "Leben in der Vergangenheit",
            nl: "Leven in het Verleden"
        },
        questions: [
            {
                question: {
                    en: "How did people in ancient times get their water?",
                    es: "¿Cómo obtenían agua las personas en tiempos antiguos?",
                    de: "Wie bekamen Menschen in alten Zeiten ihr Wasser?",
                    nl: "Hoe kregen mensen in de oudheid hun water?"
                },
                options: [
                    { en: "From wells and rivers", es: "De pozos y ríos", de: "Aus Brunnen und Flüssen", nl: "Uit putten en rivieren" },
                    { en: "From taps", es: "De grifos", de: "Aus Wasserhähnen", nl: "Uit kranen" },
                    { en: "From bottles", es: "De botellas", de: "Aus Flaschen", nl: "Uit flessen" },
                    { en: "From stores", es: "De tiendas", de: "Aus Geschäften", nl: "Uit winkels" }
                ],
                correct: 0,
                explanation: {
                    en: "In ancient times, people got water from natural sources like wells (deep holes dug in the ground), rivers, lakes, and springs. They had to walk to these water sources and carry water back home in buckets or clay pots. Having clean water was very important for survival.",
                    es: "En tiempos antiguos, la gente obtenía agua de fuentes naturales como pozos (hoyos profundos cavados en el suelo), ríos, lagos y manantiales. Tenían que caminar a estas fuentes de agua y llevar agua de vuelta a casa en cubos o vasijas de barro. Tener agua limpia era muy importante para la supervivencia.",
                    de: "In alten Zeiten bekamen Menschen Wasser aus natürlichen Quellen wie Brunnen (tiefe Löcher im Boden gegraben), Flüssen, Seen und Quellen. Sie mussten zu diesen Wasserquellen gehen und Wasser in Eimern oder Tonkrügen nach Hause tragen. Sauberes Wasser zu haben war sehr wichtig für das Überleben.",
                    nl: "In de oudheid kregen mensen water uit natuurlijke bronnen zoals putten (diepe gaten gegraven in de grond), rivieren, meren en bronnen. Ze moesten naar deze waterbronnen lopen en water naar huis dragen in emmers of klei potten. Schoon water hebben was heel belangrijk voor overleving."
                }
            },
            {
                question: {
                    en: "What did people use for light before electricity?",
                    es: "¿Qué usaba la gente para la luz antes de la electricidad?",
                    de: "Was benutzten Menschen für Licht vor der Elektrizität?",
                    nl: "Wat gebruikten mensen voor licht vóór elektriciteit?"
                },
                options: [
                    { en: "Candles and oil lamps", es: "Velas y lámparas de aceite", de: "Kerzen und Öllampen", nl: "Kaarsen en olielampen" },
                    { en: "Light bulbs", es: "Bombillas", de: "Glühbirnen", nl: "Gloeilampen" },
                    { en: "Flashlights", es: "Linternas", de: "Taschenlampen", nl: "Zaklampen" },
                    { en: "Neon lights", es: "Luces de neón", de: "Neonlichter", nl: "Neonverlichting" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Where did most families cook their meals in medieval times?",
                    es: "¿Dónde cocinaban sus comidas la mayoría de las familias en tiempos medievales?",
                    de: "Wo kochten die meisten Familien im Mittelalter ihre Mahlzeiten?",
                    nl: "Waar kookten de meeste families hun maaltijden in de middeleeuwen?"
                },
                options: [
                    { en: "Over an open fire", es: "Sobre fuego abierto", de: "Über offenem Feuer", nl: "Boven een open vuur" },
                    { en: "In microwaves", es: "En microondas", de: "In Mikrowellen", nl: "In magnetrons" },
                    { en: "On electric stoves", es: "En estufas eléctricas", de: "Auf Elektroherden", nl: "Op elektrische kookplaten" },
                    { en: "In restaurants", es: "En restaurantes", de: "In Restaurants", nl: "In restaurants" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What were most houses made of in ancient times?",
                    es: "¿De qué estaban hechas la mayoría de las casas en tiempos antiguos?",
                    de: "Woraus waren die meisten Häuser in alten Zeiten gemacht?",
                    nl: "Waarvan waren de meeste huizen gemaakt in de oudheid?"
                },
                options: [
                    { en: "Wood, stone, and mud", es: "Madera, piedra y barro", de: "Holz, Stein und Lehm", nl: "Hout, steen en modder" },
                    { en: "Plastic and glass", es: "Plástico y vidrio", de: "Plastik und Glas", nl: "Plastic en glas" },
                    { en: "Steel and concrete", es: "Acero y concreto", de: "Stahl und Beton", nl: "Staal en beton" },
                    { en: "Paper and cardboard", es: "Papel y cartón", de: "Papier und Karton", nl: "Papier en karton" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did children learn to read and write in ancient times?",
                    es: "¿Cómo aprendían a leer y escribir los niños en tiempos antiguos?",
                    de: "Wie lernten Kinder in alten Zeiten lesen und schreiben?",
                    nl: "Hoe leerden kinderen lezen en schrijven in de oudheid?"
                },
                options: [
                    { en: "Very few children went to school", es: "Muy pocos niños iban a la escuela", de: "Sehr wenige Kinder gingen zur Schule", nl: "Heel weinig kinderen gingen naar school" },
                    { en: "All children went to school", es: "Todos los niños iban a la escuela", de: "Alle Kinder gingen zur Schule", nl: "Alle kinderen gingen naar school" },
                    { en: "They learned online", es: "Aprendían en línea", de: "Sie lernten online", nl: "Ze leerden online" },
                    { en: "They used computers", es: "Usaban computadoras", de: "Sie benutzten Computer", nl: "Ze gebruikten computers" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people do for entertainment before TV and movies?",
                    es: "¿Qué hacía la gente para entretenerse antes de la TV y las películas?",
                    de: "Was machten Menschen zur Unterhaltung vor TV und Filmen?",
                    nl: "Wat deden mensen voor vermaak vóór tv en films?"
                },
                options: [
                    { en: "Told stories and played music", es: "Contaban historias y tocaban música", de: "Erzählten Geschichten und machten Musik", nl: "Vertelden verhalen en speelden muziek" },
                    { en: "Watched television", es: "Veían televisión", de: "Schauten Fernsehen", nl: "Keken televisie" },
                    { en: "Played video games", es: "Jugaban videojuegos", de: "Spielten Videospiele", nl: "Speelden videogames" },
                    { en: "Used smartphones", es: "Usaban teléfonos inteligentes", de: "Benutzten Smartphones", nl: "Gebruikten smartphones" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people travel long distances in the past?",
                    es: "¿Cómo viajaba la gente largas distancias en el pasado?",
                    de: "Wie reisten Menschen in der Vergangenheit über weite Strecken?",
                    nl: "Hoe reisden mensen in het verleden over lange afstanden?"
                },
                options: [
                    { en: "Walking or riding animals", es: "Caminando o montando animales", de: "Zu Fuß oder auf Tieren reitend", nl: "Lopend of rijdend op dieren" },
                    { en: "Flying in airplanes", es: "Volando en aviones", de: "Mit Flugzeugen fliegend", nl: "Vliegend in vliegtuigen" },
                    { en: "Driving cars", es: "Manejando carros", de: "Auto fahrend", nl: "Rijdend in auto's" },
                    { en: "Taking trains", es: "Tomando trenes", de: "Mit Zügen fahrend", nl: "Nemend de trein" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people wear on their feet in ancient times?",
                    es: "¿Qué llevaba la gente en los pies en tiempos antiguos?",
                    de: "Was trugen Menschen in alten Zeiten an den Füßen?",
                    nl: "Wat droegen mensen aan hun voeten in de oudheid?"
                },
                options: [
                    { en: "Simple sandals or nothing", es: "Sandalias simples o nada", de: "Einfache Sandalen oder nichts", nl: "Eenvoudige sandalen of niets" },
                    { en: "Sneakers", es: "Zapatillas", de: "Turnschuhe", nl: "Sneakers" },
                    { en: "High heels", es: "Tacones altos", de: "High Heels", nl: "Hoge hakken" },
                    { en: "Roller skates", es: "Patines", de: "Rollschuhe", nl: "Rolschaatsen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people keep food fresh without refrigerators?",
                    es: "¿Cómo mantenía la gente la comida fresca sin refrigeradores?",
                    de: "Wie hielten Menschen Essen ohne Kühlschränke frisch?",
                    nl: "Hoe hielden mensen voedsel vers zonder koelkasten?"
                },
                options: [
                    { en: "Salting, drying, and smoking", es: "Salando, secando y ahumando", de: "Salzen, Trocknen und Räuchern", nl: "Zouten, drogen en roken" },
                    { en: "Freezing in freezers", es: "Congelando en congeladores", de: "Einfrieren in Gefrierschränken", nl: "Bevriezen in vriezers" },
                    { en: "Vacuum packing", es: "Envasado al vacío", de: "Vakuumverpackung", nl: "Vacuümverpakken" },
                    { en: "Microwave heating", es: "Calentamiento en microondas", de: "Mikrowellenerwärmung", nl: "Magnetronverwarming" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people use to make clothes in ancient times?",
                    es: "¿Qué usaba la gente para hacer ropa en tiempos antiguos?",
                    de: "Was benutzten Menschen, um Kleidung in alten Zeiten zu machen?",
                    nl: "Wat gebruikten mensen om kleding te maken in de oudheid?"
                },
                options: [
                    { en: "Animal skins and plant fibers", es: "Pieles de animales y fibras vegetales", de: "Tierhäute und Pflanzenfasern", nl: "Dierenhuidenen plantenvezels" },
                    { en: "Plastic and nylon", es: "Plástico y nylon", de: "Plastik und Nylon", nl: "Plastic en nylon" },
                    { en: "Paper and cardboard", es: "Papel y cartón", de: "Papier und Karton", nl: "Papier en karton" },
                    { en: "Metal and glass", es: "Metal y vidrio", de: "Metall und Glas", nl: "Metaal en glas" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people wash their clothes in the past?",
                    es: "¿Cómo lavaba la gente su ropa en el pasado?",
                    de: "Wie wuschen Menschen ihre Kleidung in der Vergangenheit?",
                    nl: "Hoe wasten mensen hun kleren in het verleden?"
                },
                options: [
                    { en: "By hand in rivers or basins", es: "A mano en ríos o tazones", de: "Von Hand in Flüssen oder Becken", nl: "Met de hand in rivieren of bekkens" },
                    { en: "In washing machines", es: "En lavadoras", de: "In Waschmaschinen", nl: "In wasmachines" },
                    { en: "At the dry cleaner", es: "En la tintorería", de: "In der Reinigung", nl: "Bij de stomerij" },
                    { en: "They never washed them", es: "Nunca las lavaban", de: "Sie wuschen sie nie", nl: "Ze wasten ze nooit" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people sleep on before beds?",
                    es: "¿En qué dormía la gente antes de las camas?",
                    de: "Worauf schliefen Menschen vor Betten?",
                    nl: "Waarop sliepen mensen vóór bedden?"
                },
                options: [
                    { en: "Animal skins on the ground", es: "Pieles de animales en el suelo", de: "Tierfelle auf dem Boden", nl: "Dierenhuiden op de grond" },
                    { en: "Mattresses", es: "Colchones", de: "Matratzen", nl: "Matrassen" },
                    { en: "Couches", es: "Sofás", de: "Sofas", nl: "Banken" },
                    { en: "Hammocks", es: "Hamacas", de: "Hängematten", nl: "Hangmatten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people tell time before clocks?",
                    es: "¿Cómo sabía la gente la hora antes de los relojes?",
                    de: "Wie bestimmten Menschen die Zeit vor Uhren?",
                    nl: "Hoe vertelden mensen de tijd vóór klokken?"
                },
                options: [
                    { en: "By the position of the sun", es: "Por la posición del sol", de: "Durch die Position der Sonne", nl: "Door de positie van de zon" },
                    { en: "With digital clocks", es: "Con relojes digitales", de: "Mit Digitaluhren", nl: "Met digitale klokken" },
                    { en: "Using smartphones", es: "Usando teléfonos inteligentes", de: "Mit Smartphones", nl: "Gebruikmakend van smartphones" },
                    { en: "Watching TV", es: "Viendo televisión", de: "Fernsehen schauen", nl: "Tv kijken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What jobs did most people have in medieval times?",
                    es: "¿Qué trabajos tenía la mayoría de la gente en tiempos medievales?",
                    de: "Welche Berufe hatten die meisten Menschen im Mittelalter?",
                    nl: "Welke banen hadden de meeste mensen in de middeleeuwen?"
                },
                options: [
                    { en: "Farming", es: "Agricultura", de: "Landwirtschaft", nl: "Landbouw" },
                    { en: "Computer programming", es: "Programación de computadoras", de: "Computerprogrammierung", nl: "Computerprogrammering" },
                    { en: "Working in offices", es: "Trabajando en oficinas", de: "Büroarbeit", nl: "Werken op kantoor" },
                    { en: "Driving trucks", es: "Manejando camiones", de: "LKW fahren", nl: "Vrachtwagens rijden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people get around in cities before cars?",
                    es: "¿Cómo se movía la gente en las ciudades antes de los carros?",
                    de: "Wie bewegten sich Menschen in Städten vor Autos fort?",
                    nl: "Hoe kwamen mensen rond in steden vóór auto's?"
                },
                options: [
                    { en: "Walking or riding horses", es: "Caminando o montando caballos", de: "Zu Fuß oder auf Pferden reitend", nl: "Lopend of rijdend op paarden" },
                    { en: "Taking buses", es: "Tomando autobuses", de: "Mit Bussen fahrend", nl: "Nemend de bus" },
                    { en: "Riding bicycles", es: "Montando bicicletas", de: "Fahrrad fahrend", nl: "Fietsend" },
                    { en: "Flying helicopters", es: "Volando helicópteros", de: "Mit Hubschraubern fliegend", nl: "Vliegend in helikopters" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people use to write before paper was common?",
                    es: "¿Qué usaba la gente para escribir antes de que el papel fuera común?",
                    de: "Was benutzten Menschen zum Schreiben, bevor Papier üblich war?",
                    nl: "Wat gebruikten mensen om te schrijven voordat papier gewoon was?"
                },
                options: [
                    { en: "Clay tablets and animal skins", es: "Tablillas de arcilla y pieles de animales", de: "Tontafeln und Tierhäute", nl: "Kleitabletten en dierenhuiden" },
                    { en: "Computers", es: "Computadoras", de: "Computer", nl: "Computers" },
                    { en: "Typewriters", es: "Máquinas de escribir", de: "Schreibmaschinen", nl: "Schrijfmachines" },
                    { en: "Smartphones", es: "Teléfonos inteligentes", de: "Smartphones", nl: "Smartphones" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people communicate over long distances in ancient times?",
                    es: "¿Cómo se comunicaba la gente a largas distancias en tiempos antiguos?",
                    de: "Wie kommunizierten Menschen über weite Entfernungen in alten Zeiten?",
                    nl: "Hoe communiceerden mensen over lange afstanden in de oudheid?"
                },
                options: [
                    { en: "Messengers and smoke signals", es: "Mensajeros y señales de humo", de: "Boten und Rauchsignale", nl: "Boodschappers en rooksignalen" },
                    { en: "Telephones", es: "Teléfonos", de: "Telefone", nl: "Telefoons" },
                    { en: "Email", es: "Correo electrónico", de: "E-Mail", nl: "E-mail" },
                    { en: "Text messages", es: "Mensajes de texto", de: "SMS", nl: "Sms-berichten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people do when they got sick in ancient times?",
                    es: "¿Qué hacía la gente cuando se enfermaba en tiempos antiguos?",
                    de: "Was machten Menschen, wenn sie in alten Zeiten krank wurden?",
                    nl: "Wat deden mensen als ze ziek werden in de oudheid?"
                },
                options: [
                    { en: "Used herbs and plants for medicine", es: "Usaban hierbas y plantas como medicina", de: "Benutzten Kräuter und Pflanzen als Medizin", nl: "Gebruikten kruiden en planten als medicijn" },
                    { en: "Went to hospitals", es: "Iban a hospitales", de: "Gingen ins Krankenhaus", nl: "Gingen naar ziekenhuizen" },
                    { en: "Took pills", es: "Tomaban pastillas", de: "Nahmen Tabletten", nl: "Namen pillen" },
                    { en: "Got vaccines", es: "Se vacunaron", de: "Wurden geimpft", nl: "Kregen vaccinaties" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did families stay warm in winter before heating?",
                    es: "¿Cómo se mantenían calientes las familias en invierno antes de la calefacción?",
                    de: "Wie blieben Familien im Winter warm vor der Heizung?",
                    nl: "Hoe bleven families warm in de winter vóór verwarming?"
                },
                options: [
                    { en: "Gathered around fires", es: "Se reunían alrededor de fuegos", de: "Versammelten sich um Feuer", nl: "Verzamelden rond vuren" },
                    { en: "Used central heating", es: "Usaban calefacción central", de: "Benutzten Zentralheizung", nl: "Gebruikten centrale verwarming" },
                    { en: "Turned on radiators", es: "Encendían radiadores", de: "Schalteten Heizkörper ein", nl: "Zetten radiatoren aan" },
                    { en: "Used electric heaters", es: "Usaban calentadores eléctricos", de: "Benutzten elektrische Heizungen", nl: "Gebruikten elektrische kachels" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What games did children play in medieval times?",
                    es: "¿Qué juegos jugaban los niños en tiempos medievales?",
                    de: "Welche Spiele spielten Kinder im Mittelalter?",
                    nl: "Welke spelletjes speelden kinderen in de middeleeuwen?"
                },
                options: [
                    { en: "Simple games with sticks and stones", es: "Juegos simples con palos y piedras", de: "Einfache Spiele mit Stöcken und Steinen", nl: "Eenvoudige spelletjes met stokken en stenen" },
                    { en: "Video games", es: "Videojuegos", de: "Videospiele", nl: "Videogames" },
                    { en: "Board games with batteries", es: "Juegos de mesa con baterías", de: "Brettspiele mit Batterien", nl: "Bordspellen met batterijen" },
                    { en: "Computer games", es: "Juegos de computadora", de: "Computerspiele", nl: "Computerspelletjes" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people learn about news and events in the past?",
                    es: "¿Cómo se enteraba la gente de las noticias y eventos en el pasado?",
                    de: "Wie erfuhren Menschen in der Vergangenheit von Nachrichten und Ereignissen?",
                    nl: "Hoe hoorden mensen over nieuws en gebeurtenissen in het verleden?"
                },
                options: [
                    { en: "From town criers and traveling storytellers", es: "De pregoneros y narradores viajeros", de: "Von Stadtausrufern und reisenden Geschichtenerzählern", nl: "Van stadsomroepers en reizende verhalenvertellers" },
                    { en: "From television", es: "De la televisión", de: "Vom Fernsehen", nl: "Van televisie" },
                    { en: "From newspapers", es: "De periódicos", de: "Aus Zeitungen", nl: "Van kranten" },
                    { en: "From the internet", es: "De internet", de: "Aus dem Internet", nl: "Van het internet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the most valuable thing for most families in the past?",
                    es: "¿Qué era lo más valioso para la mayoría de las familias en el pasado?",
                    de: "Was war das wertvollste Ding für die meisten Familien in der Vergangenheit?",
                    nl: "Wat was het meest waardevolle voor de meeste families in het verleden?"
                },
                options: [
                    { en: "Land for farming", es: "Tierra para cultivar", de: "Land zum Bewirtschaften", nl: "Land voor landbouw" },
                    { en: "Cars", es: "Carros", de: "Autos", nl: "Auto's" },
                    { en: "Televisions", es: "Televisiones", de: "Fernsehgeräte", nl: "Televisies" },
                    { en: "Computers", es: "Computadoras", de: "Computer", nl: "Computers" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people shop for things they needed in ancient times?",
                    es: "¿Cómo compraba la gente las cosas que necesitaba en tiempos antiguos?",
                    de: "Wie kauften Menschen Dinge, die sie in alten Zeiten brauchten?",
                    nl: "Hoe kochten mensen dingen die ze nodig hadden in de oudheid?"
                },
                options: [
                    { en: "At markets and by trading", es: "En mercados e intercambiando", de: "Auf Märkten und durch Tauschhandel", nl: "Op markten en door ruilhandel" },
                    { en: "In supermarkets", es: "En supermercados", de: "In Supermärkten", nl: "In supermarkten" },
                    { en: "Online shopping", es: "Comprando en línea", de: "Online-Shopping", nl: "Online winkelen" },
                    { en: "In shopping malls", es: "En centros comerciales", de: "In Einkaufszentren", nl: "In winkelcentra" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people use for transportation in ancient Egypt?",
                    es: "¿Qué usaba la gente para transporte en el antiguo Egipto?",
                    de: "Was benutzten Menschen für Transport im alten Ägypten?",
                    nl: "Wat gebruikten mensen voor transport in het oude Egypte?"
                },
                options: [
                    { en: "Boats on the Nile River", es: "Botes en el río Nilo", de: "Boote auf dem Nil", nl: "Boten op de Nijl" },
                    { en: "Cars and trucks", es: "Carros y camiones", de: "Autos und LKWs", nl: "Auto's en vrachtwagens" },
                    { en: "Airplanes", es: "Aviones", de: "Flugzeuge", nl: "Vliegtuigen" },
                    { en: "Trains", es: "Trenes", de: "Züge", nl: "Treinen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people keep their food from spoiling in hot climates?",
                    es: "¿Cómo evitaba la gente que su comida se echara a perder en climas calurosos?",
                    de: "Wie verhinderten Menschen, dass ihr Essen in heißen Klimazonen verdirbt?",
                    nl: "Hoe voorkwamen mensen dat hun voedsel bederf in warme klimaten?"
                },
                options: [
                    { en: "Stored it in cool caves or underground", es: "La guardaban en cuevas frías o bajo tierra", de: "Lagerten es in kühlen Höhlen oder unterirdisch", nl: "Bewaarden het in koele grotten of ondergronds" },
                    { en: "Put it in freezers", es: "La ponían en congeladores", de: "Stellten es in Gefrierschränke", nl: "Zetten het in vriezers" },
                    { en: "Used ice cubes", es: "Usaban cubos de hielo", de: "Benutzten Eiswürfel", nl: "Gebruikten ijsblokjes" },
                    { en: "Bought it fresh daily", es: "La compraban fresca diariamente", de: "Kauften es täglich frisch", nl: "Kochten het dagelijks vers" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people do for work in ancient Rome?",
                    es: "¿Qué hacía la gente para trabajar en la antigua Roma?",
                    de: "Was machten Menschen als Arbeit im alten Rom?",
                    nl: "Wat deden mensen voor werk in het oude Rome?"
                },
                options: [
                    { en: "Farming, crafting, and trading", es: "Agricultura, artesanía y comercio", de: "Landwirtschaft, Handwerk und Handel", nl: "Landbouw, ambacht en handel" },
                    { en: "Working in offices", es: "Trabajando en oficinas", de: "Büroarbeit", nl: "Werken op kantoor" },
                    { en: "Using computers", es: "Usando computadoras", de: "Computer benutzen", nl: "Computers gebruiken" },
                    { en: "Working in factories", es: "Trabajando en fábricas", de: "In Fabriken arbeiten", nl: "Werken in fabrieken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people decorate their homes in the past?",
                    es: "¿Cómo decoraba la gente sus hogares en el pasado?",
                    de: "Wie dekorierten Menschen ihre Häuser in der Vergangenheit?",
                    nl: "Hoe decoreerden mensen hun huizen in het verleden?"
                },
                options: [
                    { en: "With handmade items and paintings", es: "Con artículos hechos a mano y pinturas", de: "Mit handgemachten Gegenständen und Gemälden", nl: "Met handgemaakte voorwerpen en schilderijen" },
                    { en: "With plastic decorations", es: "Con decoraciones de plástico", de: "Mit Plastikdekorationen", nl: "Met plastic decoraties" },
                    { en: "With electric lights", es: "Con luces eléctricas", de: "Mit elektrischen Lichtern", nl: "Met elektrische verlichting" },
                    { en: "With store-bought items", es: "Con artículos comprados en tienda", de: "Mit gekauften Gegenständen", nl: "Met in de winkel gekochte spullen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people use to clean their teeth before toothbrushes?",
                    es: "¿Qué usaba la gente para limpiar sus dientes antes de los cepillos de dientes?",
                    de: "Was benutzten Menschen, um ihre Zähne vor Zahnbürsten zu reinigen?",
                    nl: "Wat gebruikten mensen om hun tanden schoon te maken vóór tandenborstels?"
                },
                options: [
                    { en: "Twigs and rough cloths", es: "Ramitas y telas ásperas", de: "Zweige und grobe Tücher", nl: "Takjes en ruwe doeken" },
                    { en: "Electric toothbrushes", es: "Cepillos de dientes eléctricos", de: "Elektrische Zahnbürsten", nl: "Elektrische tandenborstels" },
                    { en: "Toothpaste", es: "Pasta de dientes", de: "Zahnpasta", nl: "Tandpasta" },
                    { en: "Mouthwash", es: "Enjuague bucal", de: "Mundwasser", nl: "Mondwater" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people predict the weather in ancient times?",
                    es: "¿Cómo predecía la gente el clima en tiempos antiguos?",
                    de: "Wie sagten Menschen das Wetter in alten Zeiten vorher?",
                    nl: "Hoe voorspelden mensen het weer in de oudheid?"
                },
                options: [
                    { en: "By watching clouds and animals", es: "Observando nubes y animales", de: "Durch Beobachten von Wolken und Tieren", nl: "Door wolken en dieren te observeren" },
                    { en: "Using weather apps", es: "Usando aplicaciones del tiempo", de: "Mit Wetter-Apps", nl: "Gebruikmakend van weer-apps" },
                    { en: "Watching TV weather", es: "Viendo el clima en TV", de: "Wetterfernsehen schauen", nl: "Tv-weer kijken" },
                    { en: "Using satellites", es: "Usando satélites", de: "Mit Satelliten", nl: "Gebruikmakend van satellieten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people use for money before coins?",
                    es: "¿Qué usaba la gente como dinero antes de las monedas?",
                    de: "Was benutzten Menschen als Geld vor Münzen?",
                    nl: "Wat gebruikten mensen als geld vóór munten?"
                },
                options: [
                    { en: "Shells, beads, and cattle", es: "Conchas, cuentas y ganado", de: "Muscheln, Perlen und Vieh", nl: "Schelpen, kralen en vee" },
                    { en: "Credit cards", es: "Tarjetas de crédito", de: "Kreditkarten", nl: "Creditcards" },
                    { en: "Paper money", es: "Dinero en papel", de: "Papiergeld", nl: "Papiergeld" },
                    { en: "Checks", es: "Cheques", de: "Schecks", nl: "Cheques" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people learn skills and trades in the past?",
                    es: "¿Cómo aprendía la gente habilidades y oficios en el pasado?",
                    de: "Wie lernten Menschen Fähigkeiten und Berufe in der Vergangenheit?",
                    nl: "Hoe leerden mensen vaardigheden en ambachten in het verleden?"
                },
                options: [
                    { en: "From their parents and masters", es: "De sus padres y maestros", de: "Von ihren Eltern und Meistern", nl: "Van hun ouders en meesters" },
                    { en: "In schools and colleges", es: "En escuelas y universidades", de: "In Schulen und Hochschulen", nl: "Op scholen en hogescholen" },
                    { en: "From books and videos", es: "De libros y videos", de: "Aus Büchern und Videos", nl: "Van boeken en video's" },
                    { en: "Online courses", es: "Cursos en línea", de: "Online-Kurse", nl: "Online cursussen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the main source of power before electricity?",
                    es: "¿Cuál era la principal fuente de energía antes de la electricidad?",
                    de: "Was war die Hauptenergiequelle vor der Elektrizität?",
                    nl: "Wat was de hoofdbron van energie vóór elektriciteit?"
                },
                options: [
                    { en: "Human and animal power", es: "Poder humano y animal", de: "Menschliche und tierische Kraft", nl: "Menselijke en dierlijke kracht" },
                    { en: "Solar panels", es: "Paneles solares", de: "Solarpaneele", nl: "Zonnepanelen" },
                    { en: "Wind turbines", es: "Turbinas eólicas", de: "Windturbinen", nl: "Windturbines" },
                    { en: "Nuclear power", es: "Energía nuclear", de: "Kernkraft", nl: "Kernenergie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people keep track of important dates in the past?",
                    es: "¿Cómo llevaba la gente el registro de fechas importantes en el pasado?",
                    de: "Wie behielten Menschen wichtige Daten in der Vergangenheit im Blick?",
                    nl: "Hoe hielden mensen belangrijke data bij in het verleden?"
                },
                options: [
                    { en: "By the seasons and moon phases", es: "Por las estaciones y fases lunares", de: "Durch Jahreszeiten und Mondphasen", nl: "Door de seizoenen en maanfasen" },
                    { en: "Using calendars", es: "Usando calendarios", de: "Mit Kalendern", nl: "Gebruikmakend van kalenders" },
                    { en: "With computers", es: "Con computadoras", de: "Mit Computern", nl: "Met computers" },
                    { en: "Using smartphones", es: "Usando teléfonos inteligentes", de: "Mit Smartphones", nl: "Gebruikmakend van smartphones" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What did people do for fun at night before electric lights?",
                    es: "¿Qué hacía la gente para divertirse por la noche antes de las luces eléctricas?",
                    de: "Was machten Menschen zur Unterhaltung bei Nacht vor elektrischen Lichtern?",
                    nl: "Wat deden mensen voor plezier 's avonds vóór elektrische verlichting?"
                },
                options: [
                    { en: "Went to bed early", es: "Se acostaban temprano", de: "Gingen früh zu Bett", nl: "Gingen vroeg naar bed" },
                    { en: "Watched TV", es: "Veían televisión", de: "Schauten Fernsehen", nl: "Keken televisie" },
                    { en: "Used computers", es: "Usaban computadoras", de: "Benutzten Computer", nl: "Gebruikten computers" },
                    { en: "Went to movies", es: "Iban al cine", de: "Gingen ins Kino", nl: "Gingen naar de bioscoop" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did people in ancient times know if it was going to rain?",
                    es: "¿Cómo sabía la gente en tiempos antiguos si iba a llover?",
                    de: "Wie wussten Menschen in alten Zeiten, ob es regnen würde?",
                    nl: "Hoe wisten mensen in de oudheid of het ging regenen?"
                },
                options: [
                    { en: "Watched the sky and felt the air", es: "Observaban el cielo y sentían el aire", de: "Beobachteten den Himmel und spürten die Luft", nl: "Keken naar de lucht en voelden de lucht" },
                    { en: "Checked weather websites", es: "Revisaban sitios web del tiempo", de: "Schauten Wetter-Websites", nl: "Checkten weerwebsites" },
                    { en: "Used weather apps", es: "Usaban aplicaciones del tiempo", de: "Benutzten Wetter-Apps", nl: "Gebruikten weer-apps" },
                    { en: "Watched weather reports", es: "Veían reportes del tiempo", de: "Schauten Wetterberichte", nl: "Keken naar weerberichten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was different about family life in the past compared to today?",
                    es: "¿Qué era diferente sobre la vida familiar en el pasado comparado con hoy?",
                    de: "Was war anders am Familienleben in der Vergangenheit im Vergleich zu heute?",
                    nl: "Wat was anders aan het familieleven in het verleden vergeleken met vandaag?"
                },
                options: [
                    { en: "Families lived and worked together more", es: "Las familias vivían y trabajaban juntas más", de: "Familien lebten und arbeiteten mehr zusammen", nl: "Families leefden en werkten meer samen" },
                    { en: "Children went to school more", es: "Los niños iban más a la escuela", de: "Kinder gingen mehr zur Schule", nl: "Kinderen gingen meer naar school" },
                    { en: "Parents worked in offices", es: "Los padres trabajaban en oficinas", de: "Eltern arbeiteten in Büros", nl: "Ouders werkten op kantoor" },
                    { en: "Everyone had their own room", es: "Todos tenían su propia habitación", de: "Jeder hatte sein eigenes Zimmer", nl: "Iedereen had zijn eigen kamer" }
                ],
                correct: 0,
                explanation: {
                    en: "Industrial Revolution brought many changes to family life including families moving from farms to cities, children going to school more regularly, and parents working in factories instead of at home.",
                    es: "La Revolución Industrial trajo muchos cambios a la vida familiar incluyendo familias mudándose de granjas a ciudades, niños yendo a la escuela más regularmente, y padres trabajando en fábricas en lugar de en casa.",
                    de: "Die Industrielle Revolution brachte viele Veränderungen für das Familienleben mit sich, einschließlich Familien, die von Bauernhöfen in Städte zogen, Kinder, die regelmäßiger zur Schule gingen, und Eltern, die in Fabriken statt zu Hause arbeiteten.",
                    nl: "De Industriële Revolutie bracht veel veranderingen in het gezinsleven, waaronder gezinnen die verhuisden van boerderijen naar steden, kinderen die meer naar school gingen, en ouders die in fabrieken werkten in plaats van thuis."
                }
            },
            {
                question: {
                    en: "What can we learn from studying how people lived in the past?",
                    es: "¿Qué podemos aprender del estudio de cómo vivía la gente en el pasado?",
                    de: "Was können wir lernen, wenn wir studieren, wie Menschen in der Vergangenheit lebten?",
                    nl: "Wat kunnen we leren van het bestuderen van hoe mensen in het verleden leefden?"
                },
                options: [
                    { en: "How to appreciate what we have today", es: "Cómo apreciar lo que tenemos hoy", de: "Wie wir schätzen können, was wir heute haben", nl: "Hoe we kunnen waarderen wat we vandaag hebben" },
                    { en: "That the past was better", es: "Que el pasado era mejor", de: "Dass die Vergangenheit besser war", nl: "Dat het verleden beter was" },
                    { en: "That we should live like them", es: "Que deberíamos vivir como ellos", de: "Dass wir wie sie leben sollten", nl: "Dat we zoals zij zouden moeten leven" },
                    { en: "Nothing useful", es: "Nada útil", de: "Nichts Nützliches", nl: "Niets nuttigs" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying how people lived in the past helps us appreciate what we have today! It shows us how much progress we've made in areas like health, education, and technology, and helps us understand how societies develop over time.",
                    es: "¡Estudiar cómo vivía la gente en el pasado nos ayuda a apreciar lo que tenemos hoy! Nos muestra cuánto progreso hemos hecho en áreas como salud, educación y tecnología, y nos ayuda a entender cómo se desarrollan las sociedades con el tiempo.",
                    de: "Das Studium, wie Menschen in der Vergangenheit lebten, hilft uns zu schätzen, was wir heute haben! Es zeigt uns, wie viel Fortschritt wir in Bereichen wie Gesundheit, Bildung und Technologie gemacht haben, und hilft uns zu verstehen, wie sich Gesellschaften über die Zeit entwickeln.",
                    nl: "Het bestuderen van hoe mensen in het verleden leefden helpt ons waarderen wat we vandaag hebben! Het toont ons hoeveel vooruitgang we hebben gemaakt op gebieden zoals gezondheid, onderwijs en technologie, en helpt ons begrijpen hoe samenlevingen zich in de tijd ontwikkelen."
                }
            },
            {
                question: {
                    en: "How did people in medieval times preserve food without refrigerators?",
                    es: "¿Cómo conservaban la comida las personas en tiempos medievales sin refrigeradores?",
                    de: "Wie konservierten Menschen im Mittelalter Nahrung ohne Kühlschränke?",
                    nl: "Hoe bewaarden mensen in middeleeuwse tijden voedsel zonder koelkasten?"
                },
                options: [
                    { en: "Salting, smoking, and drying", es: "Salando, ahumando y secando", de: "Salzen, Räuchern und Trocknen", nl: "Zouten, roken en drogen" },
                    { en: "Using plastic containers", es: "Usando contenedores de plástico", de: "Mit Plastikbehältern", nl: "Met plastic containers" },
                    { en: "Freezing in ice boxes", es: "Congelando en cajas de hielo", de: "Einfrieren in Eisboxen", nl: "Invriezen in ijsboxen" },
                    { en: "They didn't preserve food", es: "No conservaban la comida", de: "Sie konservierten keine Nahrung", nl: "Ze bewaarden geen voedsel" }
                ],
                correct: 0,
                explanation: {
                    en: "Medieval people preserved food by salting meat and fish, smoking them over fires, and drying fruits and vegetables in the sun. These methods removed moisture that bacteria need to grow, keeping food safe to eat for much longer periods.",
                    es: "Las personas medievales conservaban comida salando carne y pescado, ahumándolos sobre fuegos, y secando frutas y verduras al sol. Estos métodos removían la humedad que las bacterias necesitan para crecer, manteniendo la comida segura para comer por períodos mucho más largos.",
                    de: "Mittelalterliche Menschen konservierten Nahrung durch Salzen von Fleisch und Fisch, Räuchern über Feuer und Trocknen von Früchten und Gemüse in der Sonne. Diese Methoden entfernten Feuchtigkeit, die Bakterien zum Wachsen brauchen, und hielten Nahrung viel länger sicher essbar.",
                    nl: "Middeleeuwse mensen bewaarden voedsel door vlees en vis te zouten, ze te roken boven vuren, en fruit en groenten in de zon te drogen. Deze methoden verwijderden vocht dat bacteriën nodig hebben om te groeien, waardoor voedsel veel langere perioden veilig te eten bleef."
                }
            },
            {
                question: {
                    en: "What did ancient Egyptian children play with?",
                    es: "¿Con qué jugaban los niños del antiguo Egipto?",
                    de: "Womit spielten Kinder im alten Ägypten?",
                    nl: "Waarmee speelden oude Egyptische kinderen?"
                },
                options: [
                    { en: "Wooden dolls and clay animals", es: "Muñecas de madera y animales de arcilla", de: "Holzpuppen und Tontierfiguren", nl: "Houten poppen en klei dieren" },
                    { en: "Video games", es: "Videojuegos", de: "Videospiele", nl: "Videospelletjes" },
                    { en: "Plastic toys", es: "Juguetes de plástico", de: "Plastikspielzeug", nl: "Plastic speelgoed" },
                    { en: "Electric trains", es: "Trenes eléctricos", de: "Elektrische Züge", nl: "Elektrische treinen" }
                ],
                correct: 0,
                explanation: {
                    en: "Ancient Egyptian children played with toys made from natural materials like wooden dolls, clay animals, spinning tops, and balls made from leather or papyrus. They also played games similar to hopscotch and had toy boats to play with in the Nile River.",
                    es: "Los niños del antiguo Egipto jugaban con juguetes hechos de materiales naturales como muñecas de madera, animales de arcilla, trompos giratorios, y pelotas hechas de cuero o papiro. También jugaban juegos similares a la rayuela y tenían botes de juguete para jugar en el río Nilo.",
                    de: "Kinder im alten Ägypten spielten mit Spielzeug aus natürlichen Materialien wie Holzpuppen, Tontierfiguren, Kreiseln und Bällen aus Leder oder Papyrus. Sie spielten auch Spiele ähnlich wie Himmel und Hölle und hatten Spielzeugboote zum Spielen im Nil.",
                    nl: "Oude Egyptische kinderen speelden met speelgoed gemaakt van natuurlijke materialen zoals houten poppen, klei dieren, tollen, en ballen gemaakt van leer of papyrus. Ze speelden ook spellen vergelijkbaar met hinkelspel en hadden speelgoedboten om mee te spelen in de Nijl."
                }
            },
            {
                question: {
                    en: "How did Viking families stay warm in winter?",
                    es: "¿Cómo se mantenían calientes las familias vikingas en invierno?",
                    de: "Wie blieben Wikingerfamilien im Winter warm?",
                    nl: "Hoe bleven Viking families warm in de winter?"
                },
                options: [
                    { en: "Gathered around a central fire pit and wore thick furs", es: "Se reunían alrededor de un hogar central y usaban pieles gruesas", de: "Versammelten sich um eine zentrale Feuerstelle und trugen dicke Pelze", nl: "Verzamelden rond een centrale vuurplaats en droegen dikke bont" },
                    { en: "Used electric heaters", es: "Usaban calentadores eléctricos", de: "Benutzten elektrische Heizungen", nl: "Gebruikten elektrische verwarmers" },
                    { en: "Moved to warm countries", es: "Se mudaron a países cálidos", de: "Zogen in warme Länder", nl: "Verhuisden naar warme landen" },
                    { en: "Built igloos", es: "Construyeron iglúes", de: "Bauten Iglus", nl: "Bouwden iglo's" }
                ],
                correct: 0,
                explanation: {
                    en: "Viking families stayed warm by gathering around a central fire pit in their longhouses, wearing thick fur clothing from animals they hunted, and sleeping close together under heavy furs and wool blankets. They also kept animals inside during winter for extra warmth.",
                    es: "Las familias vikingas se mantenían calientes reuniéndose alrededor de un hogar central en sus casas largas, usando ropa gruesa de piel de animales que cazaban, y durmiendo cerca bajo pieles pesadas y mantas de lana. También mantenían animales adentro durante el invierno para calor extra.",
                    de: "Wikingerfamilien blieben warm, indem sie sich um eine zentrale Feuerstelle in ihren Langhäusern versammelten, dicke Pelzkleidung von Tieren trugen, die sie jagten, und eng zusammen unter schweren Fellen und Wolldecken schliefen. Sie hielten auch Tiere im Winter drinnen für zusätzliche Wärme.",
                    nl: "Viking families bleven warm door rond een centrale vuurplaats in hun langhuizen te verzamelen, dikke bontkleding te dragen van dieren die ze joegen, en dicht samen te slapen onder zware bont en wollen dekens. Ze hielden ook dieren binnen tijdens de winter voor extra warmte."
                }
            },
            {
                question: {
                    en: "What did Roman children learn in school?",
                    es: "¿Qué aprendían los niños romanos en la escuela?",
                    de: "Was lernten römische Kinder in der Schule?",
                    nl: "Wat leerden Romeinse kinderen op school?"
                },
                options: [
                    { en: "Reading, writing, math, and public speaking", es: "Lectura, escritura, matemáticas y hablar en público", de: "Lesen, Schreiben, Mathematik und öffentliches Sprechen", nl: "Lezen, schrijven, rekenen en openbaar spreken" },
                    { en: "Computer skills", es: "Habilidades de computadora", de: "Computerfähigkeiten", nl: "Computervaardigheden" },
                    { en: "How to drive cars", es: "Cómo conducir coches", de: "Autofahren", nl: "Hoe auto's te rijden" },
                    { en: "Modern science", es: "Ciencia moderna", de: "Moderne Wissenschaft", nl: "Moderne wetenschap" }
                ],
                correct: 0,
                explanation: {
                    en: "Roman children learned reading, writing Latin and Greek, mathematics, public speaking (rhetoric), and sometimes music and poetry. Boys from wealthy families might also learn about law and government, while girls typically learned household management alongside basic education.",
                    es: "Los niños romanos aprendían lectura, escritura en latín y griego, matemáticas, hablar en público (retórica), y a veces música y poesía. Los niños de familias adineradas también podrían aprender sobre leyes y gobierno, mientras las niñas típicamente aprendían manejo del hogar junto con educación básica.",
                    de: "Römische Kinder lernten Lesen, Schreiben auf Lateinisch und Griechisch, Mathematik, öffentliches Sprechen (Rhetorik) und manchmal Musik und Poesie. Jungen aus wohlhabenden Familien könnten auch über Recht und Regierung lernen, während Mädchen typischerweise Haushaltsführung neben der Grundbildung lernten.",
                    nl: "Romeinse kinderen leerden lezen, schrijven in het Latijn en Grieks, rekenen, openbaar spreken (retorica), en soms muziek en poëzie. Jongens uit welvarende families konden ook leren over wet en bestuur, terwijl meisjes typisch huishoudelijk beheer leerden naast basiseducatie."
                }
            },
            {
                question: {
                    en: "How did medieval people tell time without clocks?",
                    es: "¿Cómo sabían la hora las personas medievales sin relojes?",
                    de: "Wie sagten mittelalterliche Menschen die Zeit ohne Uhren?",
                    nl: "Hoe vertelden middeleeuwse mensen de tijd zonder klokken?"
                },
                options: [
                    { en: "By the position of the sun and church bells", es: "Por la posición del sol y las campanas de la iglesia", de: "Durch die Sonnenposition und Kirchenglocken", nl: "Door de positie van de zon en kerkklokken" },
                    { en: "With digital watches", es: "Con relojes digitales", de: "Mit digitalen Uhren", nl: "Met digitale horloges" },
                    { en: "By counting their heartbeats", es: "Contando sus latidos", de: "Durch Zählen ihrer Herzschläge", nl: "Door hun hartslag te tellen" },
                    { en: "They didn't need to know the time", es: "No necesitaban saber la hora", de: "Sie brauchten die Zeit nicht zu wissen", nl: "Ze hoefden de tijd niet te weten" }
                ],
                correct: 0,
                explanation: {
                    en: "Medieval people told time by watching the sun's position in the sky, using sundials, and listening for church bells that rang at specific times for prayers. They also used candles marked with lines or water clocks that measured time by water flow.",
                    es: "Las personas medievales sabían la hora observando la posición del sol en el cielo, usando relojes de sol, y escuchando campanas de iglesia que sonaban a horas específicas para oraciones. También usaban velas marcadas con líneas o relojes de agua que medían el tiempo por el flujo del agua.",
                    de: "Mittelalterliche Menschen sagten die Zeit, indem sie die Sonnenposition am Himmel beobachteten, Sonnenuhren verwendeten und auf Kirchenglocken hörten, die zu bestimmten Zeiten für Gebete läuteten. Sie verwendeten auch Kerzen mit Linienmarkierungen oder Wasseruhren, die Zeit durch Wasserfluss maßen.",
                    nl: "Middeleeuwse mensen vertelden de tijd door de positie van de zon aan de hemel te observeren, zonnewijzers te gebruiken, en te luisteren naar kerkklokken die op specifieke tijden voor gebeden luidden. Ze gebruikten ook kaarsen gemarkeerd met lijnen of waterklokken die tijd maten door waterstroom."
                }
            },
            {
                question: {
                    en: "What was the main job of most people in ancient times?",
                    es: "¿Cuál era el trabajo principal de la mayoría de personas en tiempos antiguos?",
                    de: "Was war der Hauptberuf der meisten Menschen in alten Zeiten?",
                    nl: "Wat was het hoofdberoep van de meeste mensen in de oudheid?"
                },
                options: [
                    { en: "Farming", es: "Agricultura", de: "Landwirtschaft", nl: "Landbouw" },
                    { en: "Working in offices", es: "Trabajar en oficinas", de: "In Büros arbeiten", nl: "Werken op kantoren" },
                    { en: "Making movies", es: "Hacer películas", de: "Filme machen", nl: "Films maken" },
                    { en: "Teaching school", es: "Enseñar en la escuela", de: "Schule unterrichten", nl: "School onderwijzen" }
                ],
                correct: 0,
                explanation: {
                    en: "Most people in ancient times were farmers who grew crops and raised animals for food. Farming was essential for survival, and entire families would work together planting, tending, and harvesting crops according to the seasons.",
                    es: "La mayoría de personas en tiempos antiguos eran agricultores que cultivaban cosechas y criaban animales para comida. La agricultura era esencial para la supervivencia, y familias enteras trabajarían juntas plantando, cuidando y cosechando cultivos según las estaciones.",
                    de: "Die meisten Menschen in alten Zeiten waren Bauern, die Feldfrüchte anbauten und Tiere für Nahrung züchteten. Landwirtschaft war für das Überleben wesentlich, und ganze Familien arbeiteten zusammen beim Pflanzen, Pflegen und Ernten von Feldfrüchten je nach Jahreszeit.",
                    nl: "De meeste mensen in de oudheid waren boeren die gewassen verbouwden en dieren fokten voor voedsel. Landbouw was essentieel voor overleving, en hele families zouden samenwerken met planten, verzorgen en oogsten van gewassen volgens de seizoenen."
                }
            },
            {
                question: {
                    en: "How did ancient people light their homes at night?",
                    es: "¿Cómo iluminaban sus casas las personas antiguas por la noche?",
                    de: "Wie beleuchteten alte Menschen ihre Häuser nachts?",
                    nl: "Hoe verlichtten oude mensen hun huizen 's nachts?"
                },
                options: [
                    { en: "Candles, oil lamps, and fires", es: "Velas, lámparas de aceite y fuegos", de: "Kerzen, Öllampen und Feuer", nl: "Kaarsen, olielampen en vuren" },
                    { en: "Electric light bulbs", es: "Bombillas eléctricas", de: "Elektrische Glühbirnen", nl: "Elektrische gloeilampen" },
                    { en: "Flashlights", es: "Linternas", de: "Taschenlampen", nl: "Zaklantaarns" },
                    { en: "They didn't light their homes", es: "No iluminaban sus casas", de: "Sie beleuchteten ihre Häuser nicht", nl: "Ze verlichtten hun huizen niet" }
                ],
                correct: 0,
                explanation: {
                    en: "Ancient people lit their homes using candles made from animal fat or beeswax, oil lamps that burned olive oil or other oils, and fires in fireplaces or braziers. These gave limited light, so most people went to bed early and woke up with the sun.",
                    es: "Las personas antiguas iluminaban sus casas usando velas hechas de grasa animal o cera de abeja, lámparas de aceite que quemaban aceite de oliva u otros aceites, y fuegos en chimeneas o braseros. Estos daban luz limitada, así que la mayoría de personas se acostaban temprano y se despertaban con el sol.",
                    de: "Alte Menschen beleuchteten ihre Häuser mit Kerzen aus Tierfett oder Bienenwachs, Öllampen, die Olivenöl oder andere Öle verbrannten, und Feuer in Kaminen oder Feuerbecken. Diese gaben begrenztes Licht, also gingen die meisten Menschen früh schlafen und wachten mit der Sonne auf.",
                    nl: "Oude mensen verlichtten hun huizen met kaarsen gemaakt van dierlijk vet of bijenwas, olielampen die olijfolie of andere oliën brandden, en vuren in haarden of vuurkorven. Deze gaven beperkt licht, dus de meeste mensen gingen vroeg naar bed en werden wakker met de zon."
                }
            },
            {
                question: {
                    en: "What did children wear to school in ancient Rome?",
                    es: "¿Qué usaban los niños para ir a la escuela en la antigua Roma?",
                    de: "Was trugen Kinder zur Schule im alten Rom?",
                    nl: "Wat droegen kinderen naar school in het oude Rome?"
                },
                options: [
                    { en: "A tunic (like a long shirt) and sandals", es: "Una túnica (como una camisa larga) y sandalias", de: "Eine Tunika (wie ein langes Hemd) und Sandalen", nl: "Een tuniek (zoals een lang hemd) en sandalen" },
                    { en: "School uniforms with ties", es: "Uniformes escolares con corbatas", de: "Schuluniformen mit Krawatten", nl: "Schooluniformen met stropdassen" },
                    { en: "Jeans and sneakers", es: "Vaqueros y zapatillas", de: "Jeans und Turnschuhe", nl: "Spijkerbroeken en gymschoenen" },
                    { en: "Formal suits", es: "Trajes formales", de: "Formelle Anzüge", nl: "Formele pakken" }
                ],
                correct: 0,
                explanation: {
                    en: "Roman children wore a tunic, which was like a long shirt that reached their knees, and leather sandals. Wealthy children might have finer tunics made of better materials, while poorer children wore simpler clothing made from rougher fabrics.",
                    es: "Los niños romanos usaban una túnica, que era como una camisa larga que llegaba a las rodillas, y sandalias de cuero. Los niños ricos podrían tener túnicas más finas hechas de mejores materiales, mientras los niños pobres usaban ropa más simple hecha de telas más ásperas.",
                    de: "Römische Kinder trugen eine Tunika, die wie ein langes Hemd war, das bis zu den Knien reichte, und Ledersandalen. Reiche Kinder könnten feinere Tuniken aus besseren Materialien haben, während ärmere Kinder einfachere Kleidung aus gröberen Stoffen trugen.",
                    nl: "Romeinse kinderen droegen een tuniek, die was zoals een lang hemd dat tot hun knieën reikte, en leren sandalen. Rijke kinderen hadden mogelijk fijnere tunieken gemaakt van betere materialen, terwijl armere kinderen eenvoudigere kleding droegen van grovere stoffen."
                }
            },
            {
                question: {
                    en: "How did people in the past get news from other places?",
                    es: "¿Cómo obtenían noticias de otros lugares las personas del pasado?",
                    de: "Wie bekamen Menschen in der Vergangenheit Nachrichten von anderen Orten?",
                    nl: "Hoe kregen mensen in het verleden nieuws van andere plaatsen?"
                },
                options: [
                    { en: "Travelers, messengers on horses, and letters", es: "Viajeros, mensajeros a caballo y cartas", de: "Reisende, Boten zu Pferd und Briefe", nl: "Reizigers, boodschappers te paard en brieven" },
                    { en: "Television and radio", es: "Televisión y radio", de: "Fernsehen und Radio", nl: "Televisie en radio" },
                    { en: "Newspapers delivered daily", es: "Periódicos entregados diariamente", de: "Täglich gelieferte Zeitungen", nl: "Dagelijks bezorgde kranten" },
                    { en: "Internet and phones", es: "Internet y teléfonos", de: "Internet und Telefone", nl: "Internet en telefoons" }
                ],
                correct: 0,
                explanation: {
                    en: "People in the past got news from traveling merchants, messengers who rode horses from place to place, and letters that were carried by travelers. News traveled very slowly - it could take weeks or months to hear about events in distant places!",
                    es: "Las personas del pasado obtenían noticias de comerciantes viajeros, mensajeros que montaban caballos de lugar en lugar, y cartas que eran llevadas por viajeros. ¡Las noticias viajaban muy lentamente - podía tomar semanas o meses escuchar sobre eventos en lugares distantes!",
                    de: "Menschen in der Vergangenheit bekamen Nachrichten von reisenden Händlern, Boten, die Pferde von Ort zu Ort ritten, und Briefen, die von Reisenden getragen wurden. Nachrichten reisten sehr langsam - es konnte Wochen oder Monate dauern, von Ereignissen in fernen Orten zu hören!",
                    nl: "Mensen in het verleden kregen nieuws van reizende handelaren, boodschappers die paarden reden van plaats naar plaats, en brieven die door reizigers werden gedragen. Nieuws reisde heel langzaam - het kon weken of maanden duren om over gebeurtenissen in verre plaatsen te horen!"
                }
            },
            {
                question: {
                    en: "What games did children play in medieval times?",
                    es: "¿Qué juegos jugaban los niños en tiempos medievales?",
                    de: "Welche Spiele spielten Kinder im Mittelalter?",
                    nl: "Welke spellen speelden kinderen in middeleeuwse tijden?"
                },
                options: [
                    { en: "Tag, hide-and-seek, and playing with wooden hoops", es: "Pillar, escondidas y jugar con aros de madera", de: "Fangen, Verstecken und Spielen mit Holzreifen", nl: "Tikkertje, verstoppertje en spelen met houten hoepels" },
                    { en: "Video games and board games", es: "Videojuegos y juegos de mesa", de: "Videospiele und Brettspiele", nl: "Videospelletjes en bordspellen" },
                    { en: "Sports with modern equipment", es: "Deportes con equipo moderno", de: "Sport mit moderner Ausrüstung", nl: "Sporten met moderne uitrusting" },
                    { en: "They weren't allowed to play", es: "No se les permitía jugar", de: "Sie durften nicht spielen", nl: "Ze mochten niet spelen" }
                ],
                correct: 0,
                explanation: {
                    en: "Medieval children played many games similar to today including tag, hide-and-seek, and rolling wooden hoops with sticks. They also played with dolls made from scraps of cloth, had spinning tops, and played ball games using inflated pig bladders as balls!",
                    es: "Los niños medievales jugaban muchos juegos similares a hoy incluyendo pillar, escondidas, y rodar aros de madera con palos. ¡También jugaban con muñecas hechas de retazos de tela, tenían trompos giratorios, y jugaban juegos de pelota usando vejigas infladas de cerdo como pelotas!",
                    de: "Mittelalterliche Kinder spielten viele Spiele ähnlich wie heute, einschließlich Fangen, Verstecken und Rollen von Holzreifen mit Stöcken. Sie spielten auch mit Puppen aus Stoffresten, hatten Kreisel und spielten Ballspiele mit aufgeblasenen Schweineblasen als Bälle!",
                    nl: "Middeleeuwse kinderen speelden veel spellen vergelijkbaar met vandaag inclusief tikkertje, verstoppertje, en houten hoepels rollen met stokken. Ze speelden ook met poppen gemaakt van lappen stof, hadden tollen, en speelden balspellen met opgeblazen varkensblaazen als ballen!"
                }
            },
            {
                question: {
                    en: "How did people in ancient times heal when they got sick?",
                    es: "¿Cómo se curaban las personas en tiempos antiguos cuando se enfermaban?",
                    de: "Wie heilten Menschen in alten Zeiten, when sie krank wurden?",
                    nl: "Hoe genazen mensen in de oudheid wanneer ze ziek werden?"
                },
                options: [
                    { en: "Used herbs, rest, and prayers", es: "Usaron hierbas, descanso y oraciones", de: "Verwendeten Kräuter, Ruhe und Gebete", nl: "Gebruikten kruiden, rust en gebeden" },
                    { en: "Went to modern hospitals", es: "Fueron a hospitales modernos", de: "Gingen in moderne Krankenhäuser", nl: "Gingen naar moderne ziekenhuizen" },
                    { en: "Took pills from pharmacies", es: "Tomaron pastillas de farmacias", de: "Nahmen Pillen aus Apotheken", nl: "Namen pillen uit apotheken" },
                    { en: "Got surgery immediately", es: "Se operaron inmediatamente", de: "Wurden sofort operiert", nl: "Kregen onmiddellijk een operatie" }
                ],
                correct: 0,
                explanation: {
                    en: "Ancient people used herbs and plants as medicine, got plenty of rest, drank special teas, and often prayed for healing. Some cultures had healers who knew which plants could help with different illnesses, though their treatments weren't always effective.",
                    es: "Las personas antiguas usaban hierbas y plantas como medicina, descansaban mucho, bebían tés especiales, y a menudo oraban por sanación. Algunas culturas tenían sanadores que sabían qué plantas podían ayudar con diferentes enfermedades, aunque sus tratamientos no siempre eran efectivos.",
                    de: "Alte Menschen verwendeten Kräuter und Pflanzen als Medizin, bekamen viel Ruhe, tranken spezielle Tees und beteten oft für Heilung. Einige Kulturen hatten Heiler, die wussten, welche Pflanzen bei verschiedenen Krankheiten helfen konnten, obwohl ihre Behandlungen nicht immer wirksam waren.",
                    nl: "Oude mensen gebruikten kruiden en planten als medicijn, kregen veel rust, dronken speciale thee, en baden vaak voor genezing. Sommige culturen hadden genezers die wisten welke planten konden helpen bij verschillende ziekten, hoewel hun behandelingen niet altijd effectief waren."
                }
            },
            {
                question: {
                    en: "What was transportation like for ordinary people in the past?",
                    es: "¿Cómo era el transporte para personas comunes en el pasado?",
                    de: "Wie war der Transport für gewöhnliche Menschen in der Vergangenheit?",
                    nl: "Hoe was vervoer voor gewone mensen in het verleden?"
                },
                options: [
                    { en: "Walking, riding horses, or using simple carts", es: "Caminar, montar caballos o usar carretas simples", de: "Zu Fuß gehen, Pferde reiten oder einfache Karren verwenden", nl: "Lopen, paarden rijden of eenvoudige karren gebruiken" },
                    { en: "Driving cars and taking trains", es: "Conducir coches y tomar trenes", de: "Autos fahren und Züge nehmen", nl: "Auto's rijden en treinen nemen" },
                    { en: "Flying in airplanes", es: "Volar en aviones", de: "In Flugzeugen fliegen", nl: "Vliegen in vliegtuigen" },
                    { en: "Using public buses", es: "Usar autobuses públicos", de: "Öffentliche Busse verwenden", nl: "Openbare bussen gebruiken" }
                ],
                correct: 0,
                explanation: {
                    en: "Most ordinary people in the past traveled by walking long distances, riding horses or donkeys if they could afford them, or using simple wooden carts pulled by animals. Only wealthy people could afford carriages, and most people never traveled far from where they were born.",
                    es: "La mayoría de personas comunes en el pasado viajaban caminando largas distancias, montando caballos o burros si podían pagarlos, o usando carretas de madera simples tiradas por animales. Solo las personas adineradas podían pagar carruajes, y la mayoría nunca viajaba lejos de donde nacieron.",
                    de: "Die meisten gewöhnlichen Menschen in der Vergangenheit reisten zu Fuß über weite Strecken, ritten Pferde oder Esel, wenn sie es sich leisten konnten, oder verwendeten einfache Holzkarren, die von Tieren gezogen wurden. Nur reiche Menschen konnten sich Kutschen leisten, und die meisten Menschen reisten nie weit von ihrem Geburtsort weg.",
                    nl: "De meeste gewone mensen in het verleden reisden door lange afstanden te lopen, paarden of ezels te rijden als ze het zich konden veroorloven, of eenvoudige houten karren te gebruiken die door dieren werden getrokken. Alleen rijke mensen konden zich koetsen veroorloven, en de meeste mensen reisden nooit ver van waar ze geboren waren."
                }
            },
            {
                question: {
                    en: "What's the most important thing we can learn from how people lived in the past?",
                    es: "¿Cuál es lo más importante que podemos aprender de cómo vivía la gente en el pasado?",
                    de: "Was ist das Wichtigste, was wir davon lernen können, wie Menschen in der Vergangenheit lebten?",
                    nl: "Wat is het belangrijkste dat we kunnen leren van hoe mensen in het verleden leefden?"
                },
                options: [
                    { en: "People have always been creative and worked hard to survive", es: "Las personas siempre han sido creativas y han trabajado duro para sobrevivir", de: "Menschen waren immer kreativ und arbeiteten hart, um zu überleben", nl: "Mensen zijn altijd creatief geweest en hebben hard gewerkt om te overleven" },
                    { en: "Life in the past was always better", es: "La vida en el pasado siempre era mejor", de: "Das Leben in der Vergangenheit war immer besser", nl: "Het leven in het verleden was altijd beter" },
                    { en: "We shouldn't change anything about modern life", es: "No deberíamos cambiar nada de la vida moderna", de: "Wir sollten nichts am modernen Leben ändern", nl: "We zouden niets aan het moderne leven moeten veranderen" },
                    { en: "Technology is the only thing that matters", es: "La tecnología es lo único que importa", de: "Technologie ist das Einzige, was zählt", nl: "Technologie is het enige dat ertoe doet" }
                ],
                correct: 0,
                explanation: {
                    en: "The most important lesson from studying the past is that people have always been creative, resourceful, and worked hard to survive and care for their families! Despite having fewer modern conveniences, they found ingenious ways to solve problems, created beautiful art and stories, and built communities that helped everyone survive. This shows us that human creativity and determination are timeless qualities that connect us across history.",
                    es: "¡La lección más importante de estudiar el pasado es que las personas siempre han sido creativas, ingeniosas y han trabajado duro para sobrevivir y cuidar a sus familias! A pesar de tener menos comodidades modernas, encontraron formas ingeniosas de resolver problemas, crearon arte hermoso e historias, y construyeron comunidades que ayudaron a todos a sobrevivir. Esto nos muestra que la creatividad y determinación humana son cualidades eternas que nos conectan a través de la historia.",
                    de: "Die wichtigste Lektion aus dem Studium der Vergangenheit ist, dass Menschen immer kreativ und einfallsreich waren und hart arbeiteten, um zu überleben und für ihre Familien zu sorgen! Trotz weniger moderner Annehmlichkeiten fanden sie geniale Wege, Probleme zu lösen, schufen schöne Kunst und Geschichten und bauten Gemeinschaften auf, die allen beim Überleben halfen. Das zeigt uns, dass menschliche Kreativität und Entschlossenheit zeitlose Eigenschaften sind, die uns durch die Geschichte verbinden.",
                    nl: "De belangrijkste les van het bestuderen van het verleden is dat mensen altijd creatief en vindingrijk zijn geweest en hard hebben gewerkt om te overleven en voor hun families te zorgen! Ondanks minder moderne gemakken, vonden ze ingenieuze manieren om problemen op te lossen, creëerden prachtige kunst en verhalen, en bouwden gemeenschappen die iedereen hielpen overleven. Dit toont ons dat menselijke creativiteit en vastberadenheid tijdloze kwaliteiten zijn die ons door de geschiedenis verbinden."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/history', level6);
    }
})();