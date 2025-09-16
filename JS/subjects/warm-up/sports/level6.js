(function() {
    const level6 = {
        name: {
            en: "Sports Equipment and Venues",
            es: "Equipamiento Deportivo y Recintos",
            de: "Sportausrüstung und Sportstätten",
            nl: "Sportuitrusting en Locaties"
        },
        questions: [
            {
                question: {
                    en: "What is the official weight of a basketball?",
                    es: "¿Cuál es el peso oficial de un balón de baloncesto?",
                    de: "Was ist das offizielle Gewicht eines Basketballs?",
                    nl: "Wat is het officiële gewicht van een basketbal?"
                },
                options: [
                    { en: "567-650g", es: "567-650g", de: "567-650g", nl: "567-650g" },
                    { en: "600-750g", es: "600-750g", de: "600-750g", nl: "600-750g" },
                    { en: "650-800g", es: "650-800g", de: "650-800g", nl: "650-800g" },
                    { en: "700-850g", es: "700-850g", de: "700-850g", nl: "700-850g" }
                ],
                correct: 0,
                explanation: {
                    en: "An official basketball weighs between 567-650 grams (20-23 oz), providing the right weight for proper dribbling, shooting, and handling.",
                    es: "Un balón de baloncesto oficial pesa entre 567-650 gramos (20-23 oz), proporcionando el peso adecuado para driblar, disparar y manejar correctamente.",
                    de: "Ein offizieller Basketball wiegt zwischen 567-650 Gramm (20-23 oz) und bietet das richtige Gewicht für ordnungsgemäßes Dribbeln, Schießen und Handhaben.",
                    nl: "Een officiële basketbal weegt tussen 567-650 gram (20-23 oz), wat het juiste gewicht biedt voor correct dribbelen, schieten en hanteren."
                }
            },
            {
                question: {
                    en: "What is the diameter of a soccer goal?",
                    es: "¿Cuál es el diámetro de una portería de fútbol?",
                    de: "Wie breit ist ein Fußballtor?",
                    nl: "Wat is de breedte van een voetbaldoel?"
                },
                options: [
                    { en: "7.32m wide x 2.44m high", es: "7,32m ancho x 2,44m alto", de: "7,32m breit x 2,44m hoch", nl: "7,32m breed x 2,44m hoog" },
                    { en: "8.00m wide x 2.50m high", es: "8,00m ancho x 2,50m alto", de: "8,00m breit x 2,50m hoch", nl: "8,00m breed x 2,50m hoog" },
                    { en: "7.00m wide x 2.40m high", es: "7,00m ancho x 2,40m alto", de: "7,00m breit x 2,40m hoch", nl: "7,00m breed x 2,40m hoog" },
                    { en: "8.32m wide x 2.64m high", es: "8,32m ancho x 2,64m alto", de: "8,32m breit x 2,64m hoch", nl: "8,32m breed x 2,64m hoog" }
                ],
                correct: 0,
                explanation: {
                    en: "A soccer goal measures exactly 7.32m wide by 2.44m high according to FIFA regulations, standardized worldwide for all professional matches.",
                    es: "Una portería de fútbol mide exactamente 7,32m de ancho por 2,44m de alto según las regulaciones de la FIFA, estandarizado mundialmente para todos los partidos profesionales.",
                    de: "Ein Fußballtor misst nach FIFA-Bestimmungen exakt 7,32m breit mal 2,44m hoch, weltweit standardisiert für alle professionellen Spiele.",
                    nl: "Een voetbaldoel meet precies 7,32m breed bij 2,44m hoog volgens FIFA-reglementen, wereldwijd gestandaardiseerd voor alle professionele wedstrijden."
                }
            },
            {
                question: {
                    en: "Which famous stadium is known as 'The Home of Cricket'?",
                    es: "¿Qué estadio famoso se conoce como 'La Casa del Cricket'?",
                    de: "Welches berühmte Stadion ist als 'The Home of Cricket' bekannt?",
                    nl: "Welk beroemde stadion staat bekend als 'The Home of Cricket'?"
                },
                options: [
                    { en: "The Oval", es: "The Oval", de: "The Oval", nl: "The Oval" },
                    { en: "Lord's", es: "Lord's", de: "Lord's", nl: "Lord's" },
                    { en: "Old Trafford", es: "Old Trafford", de: "Old Trafford", nl: "Old Trafford" },
                    { en: "Edgbaston", es: "Edgbaston", de: "Edgbaston", nl: "Edgbaston" }
                ],
                correct: 1,
                explanation: {
                    en: "Lord's Cricket Ground in London is known as 'The Home of Cricket' and houses the world's oldest sporting museum, established in 1787.",
                    es: "Lord's Cricket Ground en Londres se conoce como 'La Casa del Cricket' y alberga el museo deportivo más antiguo del mundo, establecido en 1787.",
                    de: "Lord's Cricket Ground in London ist als 'The Home of Cricket' bekannt und beherbergt das älteste Sportmuseum der Welt, gegründet 1787.",
                    nl: "Lord's Cricket Ground in Londen staat bekend als 'The Home of Cricket' en herbergt 's werelds oudste sportmuseum, opgericht in 1787."
                }
            },
            {
                question: {
                    en: "What is the standard length of a tennis racquet?",
                    es: "¿Cuál es la longitud estándar de una raqueta de tenis?",
                    de: "Was ist die Standardlänge eines Tennisschlägers?",
                    nl: "Wat is de standaardlengte van een tennisracket?"
                },
                options: [
                    { en: "27 inches (68.6cm)", es: "27 pulgadas (68,6cm)", de: "27 Zoll (68,6cm)", nl: "27 inch (68,6cm)" },
                    { en: "29 inches (73.7cm)", es: "29 pulgadas (73,7cm)", de: "29 Zoll (73,7cm)", nl: "29 inch (73,7cm)" },
                    { en: "25 inches (63.5cm)", es: "25 pulgadas (63,5cm)", de: "25 Zoll (63,5cm)", nl: "25 inch (63,5cm)" },
                    { en: "31 inches (78.7cm)", es: "31 pulgadas (78,7cm)", de: "31 Zoll (78,7cm)", nl: "31 inch (78,7cm)" }
                ],
                correct: 0,
                explanation: {
                    en: "A standard tennis racquet is 27 inches (68.6cm) long, though the maximum allowed length is 29 inches. This length provides optimal power and control.",
                    es: "Una raqueta de tenis estándar tiene 27 pulgadas (68,6cm) de largo, aunque la longitud máxima permitida es de 29 pulgadas. Esta longitud proporciona potencia y control óptimos.",
                    de: "Ein Standard-Tennisschläger ist 27 Zoll (68,6cm) lang, obwohl die maximal erlaubte Länge 29 Zoll beträgt. Diese Länge bietet optimale Kraft und Kontrolle.",
                    nl: "Een standaard tennisracket is 27 inch (68,6cm) lang, hoewel de maximaal toegestane lengte 29 inch is. Deze lengte biedt optimale kracht en controle."
                }
            },
            {
                question: {
                    en: "Which tennis venue is known for its retractable roof?",
                    es: "¿Qué recinto de tenis es conocido por su techo retráctil?",
                    de: "Welche Tennisstätte ist für ihr einziehbares Dach bekannt?",
                    nl: "Welke tennislocatie staat bekend om zijn inklapbare dak?"
                },
                options: [
                    { en: "Roland Garros", es: "Roland Garros", de: "Roland Garros", nl: "Roland Garros" },
                    { en: "US Open", es: "US Open", de: "US Open", nl: "US Open" },
                    { en: "Wimbledon Centre Court", es: "Cancha Central de Wimbledon", de: "Wimbledon Centre Court", nl: "Wimbledon Centre Court" },
                    { en: "Australian Open", es: "Abierto de Australia", de: "Australian Open", nl: "Australian Open" }
                ],
                correct: 2,
                explanation: {
                    en: "Wimbledon's Centre Court is famous for its retractable roof, installed in 2009 to prevent rain delays during the tournament.",
                    es: "La Cancha Central de Wimbledon es famosa por su techo retráctil, instalado en 2009 para prevenir retrasos por lluvia durante el torneo.",
                    de: "Wimbledons Centre Court ist berühmt für sein einziehbares Dach, das 2009 installiert wurde, um Regenverzögerungen während des Turniers zu verhindern.",
                    nl: "Wimbledon's Centre Court is beroemd om zijn inklapbare dak, geïnstalleerd in 2009 om regenvertragingen tijdens het toernooi te voorkomen."
                }
            },
            {
                question: {
                    en: "What is the weight of an official volleyball?",
                    es: "¿Cuál es el peso de un voleibol oficial?",
                    de: "Was ist das Gewicht eines offiziellen Volleyballs?",
                    nl: "Wat is het gewicht van een officiële volleybal?"
                },
                options: [
                    { en: "200-220g", es: "200-220g", de: "200-220g", nl: "200-220g" },
                    { en: "260-280g", es: "260-280g", de: "260-280g", nl: "260-280g" },
                    { en: "300-320g", es: "300-320g", de: "300-320g", nl: "300-320g" },
                    { en: "350-370g", es: "350-370g", de: "350-370g", nl: "350-370g" }
                ],
                correct: 1,
                explanation: {
                    en: "An official volleyball weighs between 260-280 grams, light enough for fast-paced play while maintaining durability and proper flight characteristics.",
                    es: "Un voleibol oficial pesa entre 260-280 gramos, lo suficientemente ligero para juego de ritmo rápido mientras mantiene durabilidad y características de vuelo adecuadas.",
                    de: "Ein offizieller Volleyball wiegt zwischen 260-280 Gramm, leicht genug für temporeiche Spiele bei gleichzeitiger Haltbarkeit und ordnungsgemäßen Flugeigenschaften.",
                    nl: "Een officiële volleybal weegt tussen 260-280 gram, licht genoeg voor snel spel terwijl duurzaamheid en juiste vluchteigenschappen behouden blijven."
                }
            },
            {
                question: {
                    en: "Which stadium is known as 'The Big House'?",
                    es: "¿Qué estadio se conoce como 'La Casa Grande'?",
                    de: "Welches Stadion ist als 'The Big House' bekannt?",
                    nl: "Welk stadion staat bekend als 'The Big House'?"
                },
                options: [
                    { en: "Rose Bowl", es: "Rose Bowl", de: "Rose Bowl", nl: "Rose Bowl" },
                    { en: "Michigan Stadium", es: "Estadio de Michigan", de: "Michigan Stadium", nl: "Michigan Stadium" },
                    { en: "Ohio Stadium", es: "Estadio de Ohio", de: "Ohio Stadium", nl: "Ohio Stadium" },
                    { en: "Neyland Stadium", es: "Estadio Neyland", de: "Neyland Stadium", nl: "Neyland Stadium" }
                ],
                correct: 1,
                explanation: {
                    en: "Michigan Stadium is known as 'The Big House' with a capacity of over 107,000, making it one of the largest football stadiums in the world.",
                    es: "El Estadio de Michigan se conoce como 'La Casa Grande' con una capacidad de más de 107,000, convirtiéndolo en uno de los estadios de fútbol más grandes del mundo.",
                    de: "Das Michigan Stadium ist als 'The Big House' bekannt mit einer Kapazität von über 107.000 und ist damit eines der größten Football-Stadien der Welt.",
                    nl: "Michigan Stadium staat bekend als 'The Big House' met een capaciteit van meer dan 107.000, waardoor het een van de grootste voetbalstadions ter wereld is."
                }
            },
            {
                question: {
                    en: "What material are modern golf club heads typically made from?",
                    es: "¿De qué material están hechas típicamente las cabezas de palos de golf modernos?",
                    de: "Aus welchem Material bestehen moderne Golfschlägerköpfe normalerweise?",
                    nl: "Van welk materiaal zijn moderne golfclubkoppen meestal gemaakt?"
                },
                options: [
                    { en: "Wood", es: "Madera", de: "Holz", nl: "Hout" },
                    { en: "Steel", es: "Acero", de: "Stahl", nl: "Staal" },
                    { en: "Titanium", es: "Titanio", de: "Titan", nl: "Titanium" },
                    { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" }
                ],
                correct: 2,
                explanation: {
                    en: "Modern golf club heads, especially drivers, are typically made from titanium because it's lighter and stronger than steel, allowing for larger club heads.",
                    es: "Las cabezas de palos de golf modernos, especialmente los drivers, están hechas típicamente de titanio porque es más ligero y fuerte que el acero, permitiendo cabezas de palo más grandes.",
                    de: "Moderne Golfschlägerköpfe, insbesondere Driver, bestehen typischerweise aus Titan, da es leichter und stärker als Stahl ist und größere Schlägerköpfe ermöglicht.",
                    nl: "Moderne golfclubkoppen, vooral drivers, zijn meestal gemaakt van titanium omdat het lichter en sterker is dan staal, waardoor grotere clubkoppen mogelijk zijn."
                }
            },
            {
                question: {
                    en: "What is the circumference of a regulation soccer ball?",
                    es: "¿Cuál es la circunferencia de un balón de fútbol reglamentario?",
                    de: "Was ist der Umfang eines regulären Fußballs?",
                    nl: "Wat is de omtrek van een officiële voetbal?"
                },
                options: [
                    { en: "65-67cm", es: "65-67cm", de: "65-67cm", nl: "65-67cm" },
                    { en: "68-70cm", es: "68-70cm", de: "68-70cm", nl: "68-70cm" },
                    { en: "70-72cm", es: "70-72cm", de: "70-72cm", nl: "70-72cm" },
                    { en: "72-74cm", es: "72-74cm", de: "72-74cm", nl: "72-74cm" }
                ],
                correct: 1,
                explanation: {
                    en: "A regulation soccer ball has a circumference of 68-70cm, standardized by FIFA to ensure consistent play across all professional matches worldwide.",
                    es: "Un balón de fútbol reglamentario tiene una circunferencia de 68-70cm, estandarizado por la FIFA para asegurar juego consistente en todos los partidos profesionales mundialmente.",
                    de: "Ein regulärer Fußball hat einen Umfang von 68-70cm, von der FIFA standardisiert, um konsistentes Spiel bei allen professionellen Spielen weltweit zu gewährleisten.",
                    nl: "Een officiële voetbal heeft een omtrek van 68-70cm, gestandaardiseerd door FIFA om consistent spel te garanderen bij alle professionele wedstrijden wereldwijd."
                }
            },
            {
                question: {
                    en: "Which Olympic venue is known as the 'Bird's Nest'?",
                    es: "¿Qué recinto olímpico se conoce como el 'Nido de Pájaro'?",
                    de: "Welche olympische Stätte ist als 'Vogelnest' bekannt?",
                    nl: "Welke Olympische locatie staat bekend als het 'Vogelnest'?"
                },
                options: [
                    { en: "London Olympic Stadium", es: "Estadio Olímpico de Londres", de: "London Olympic Stadium", nl: "London Olympic Stadium" },
                    { en: "Beijing National Stadium", es: "Estadio Nacional de Pekín", de: "Beijing National Stadium", nl: "Beijing National Stadium" },
                    { en: "Sydney Olympic Stadium", es: "Estadio Olímpico de Sidney", de: "Sydney Olympic Stadium", nl: "Sydney Olympic Stadium" },
                    { en: "Athens Olympic Stadium", es: "Estadio Olímpico de Atenas", de: "Athens Olympic Stadium", nl: "Athens Olympic Stadium" }
                ],
                correct: 1,
                explanation: {
                    en: "Beijing National Stadium is nicknamed the 'Bird's Nest' due to its distinctive architectural design featuring intertwined steel beams resembling a bird's nest.",
                    es: "El Estadio Nacional de Pekín es apodado el 'Nido de Pájaro' debido a su diseño arquitectónico distintivo que presenta vigas de acero entrelazadas que se asemejan a un nido de pájaro.",
                    de: "Das Beijing National Stadium wird 'Vogelnest' genannt aufgrund seines markanten architektonischen Designs mit verschlungenen Stahlträgern, die einem Vogelnest ähneln.",
                    nl: "Beijing National Stadium wordt het 'Vogelnest' genoemd vanwege zijn onderscheidende architectonische ontwerp met verweven stalen balken die lijken op een vogelnest."
                }
            },
            {
                question: {
                    en: "What is the standard height of a volleyball net for men?",
                    es: "¿Cuál es la altura estándar de una red de voleibol para hombres?",
                    de: "Was ist die Standardhöhe eines Volleyballnetzes für Männer?",
                    nl: "Wat is de standaardhoogte van een volleybalnet voor mannen?"
                },
                options: [
                    { en: "2.24m", es: "2,24m", de: "2,24m", nl: "2,24m" },
                    { en: "2.43m", es: "2,43m", de: "2,43m", nl: "2,43m" },
                    { en: "2.50m", es: "2,50m", de: "2,50m", nl: "2,50m" },
                    { en: "2.60m", es: "2,60m", de: "2,60m", nl: "2,60m" }
                ],
                correct: 1,
                explanation: {
                    en: "The men's volleyball net is set at 2.43m high, while women's nets are set at 2.24m, accommodating the different average heights and jumping abilities.",
                    es: "La red de voleibol masculino se establece a 2,43m de altura, mientras que las redes femeninas se establecen a 2,24m, acomodando las diferentes alturas promedio y habilidades de salto.",
                    de: "Das Männer-Volleyballnetz wird auf 2,43m Höhe gesetzt, während Frauennetze auf 2,24m gesetzt werden, um den unterschiedlichen Durchschnittsgrößen und Sprungfähigkeiten gerecht zu werden.",
                    nl: "Het heren volleybalnet wordt op 2,43m hoogte gezet, terwijl damesnetten op 2,24m worden gezet, om de verschillende gemiddelde lengtes en springvermogens te accommoderen."
                }
            },
            {
                question: {
                    en: "Which hockey venue is known as 'Madison Square Garden'?",
                    es: "¿Qué recinto de hockey se conoce como 'Madison Square Garden'?",
                    de: "Welche Hockeystätte ist als 'Madison Square Garden' bekannt?",
                    nl: "Welke hockeylocatie staat bekend als 'Madison Square Garden'?"
                },
                options: [
                    { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" },
                    { en: "Chicago", es: "Chicago", de: "Chicago", nl: "Chicago" },
                    { en: "New York", es: "Nueva York", de: "New York", nl: "New York" },
                    { en: "Philadelphia", es: "Filadelfia", de: "Philadelphia", nl: "Philadelphia" }
                ],
                correct: 2,
                explanation: {
                    en: "Madison Square Garden in New York is one of the most famous sports venues, home to the New York Rangers (NHL) and New York Knicks (NBA).",
                    es: "Madison Square Garden en Nueva York es uno de los recintos deportivos más famosos, hogar de los New York Rangers (NHL) y New York Knicks (NBA).",
                    de: "Madison Square Garden in New York ist eine der berühmtesten Sportstätten, Heimat der New York Rangers (NHL) und New York Knicks (NBA).",
                    nl: "Madison Square Garden in New York is een van de beroemdste sportlocaties, thuis van de New York Rangers (NHL) en New York Knicks (NBA)."
                }
            },
            {
                question: {
                    en: "What is the diameter of a basketball hoop?",
                    es: "¿Cuál es el diámetro de un aro de baloncesto?",
                    de: "Was ist der Durchmesser eines Basketballkorbs?",
                    nl: "Wat is de diameter van een basketbalring?"
                },
                options: [
                    { en: "43cm", es: "43cm", de: "43cm", nl: "43cm" },
                    { en: "45cm", es: "45cm", de: "45cm", nl: "45cm" },
                    { en: "46cm", es: "46cm", de: "46cm", nl: "46cm" },
                    { en: "48cm", es: "48cm", de: "48cm", nl: "48cm" }
                ],
                correct: 2,
                explanation: {
                    en: "A basketball hoop has an inner diameter of 46cm (18 inches), designed to be just slightly larger than a basketball (24cm diameter) for challenging shots.",
                    es: "Un aro de baloncesto tiene un diámetro interior de 46cm (18 pulgadas), diseñado para ser ligeramente más grande que un balón de baloncesto (24cm de diámetro) para tiros desafiantes.",
                    de: "Ein Basketballkorb hat einen Innendurchmesser von 46cm (18 Zoll), entworfen, um nur etwas größer als ein Basketball (24cm Durchmesser) für herausfordernde Würfe zu sein.",
                    nl: "Een basketbalring heeft een binnendiameter van 46cm (18 inch), ontworpen om net iets groter te zijn dan een basketbal (24cm diameter) voor uitdagende schoten."
                }
            },
            {
                question: {
                    en: "What type of surface is used at the French Open?",
                    es: "¿Qué tipo de superficie se usa en el Abierto de Francia?",
                    de: "Welche Art von Belag wird bei den French Open verwendet?",
                    nl: "Welk type oppervlak wordt gebruikt bij de French Open?"
                },
                options: [
                    { en: "Grass", es: "Césped", de: "Rasen", nl: "Gras" },
                    { en: "Hard court", es: "Cancha dura", de: "Hartplatz", nl: "Hardcourt" },
                    { en: "Clay", es: "Arcilla", de: "Sand", nl: "Gravel" },
                    { en: "Carpet", es: "Alfombra", de: "Teppich", nl: "Tapijt" }
                ],
                correct: 2,
                explanation: {
                    en: "The French Open (Roland Garros) is played on red clay courts, which create slower ball movement and higher bounces compared to other surfaces.",
                    es: "El Abierto de Francia (Roland Garros) se juega en canchas de arcilla roja, que crean movimiento de pelota más lento y rebotes más altos comparado con otras superficies.",
                    de: "Die French Open (Roland Garros) werden auf roten Sandplätzen gespielt, die langsamere Ballbewegung und höhere Aufpraller im Vergleich zu anderen Oberflächen erzeugen.",
                    nl: "De French Open (Roland Garros) wordt gespeeld op rode gravelbanen, die langzamere balbeweging en hogere stuiters creëren vergeleken met andere oppervlakken."
                }
            },
            {
                question: {
                    en: "What is the weight of a regulation American football?",
                    es: "¿Cuál es el peso de un balón de fútbol americano reglamentario?",
                    de: "Was ist das Gewicht eines regulären American Footballs?",
                    nl: "Wat is het gewicht van een officiële American football?"
                },
                options: [
                    { en: "300-350g", es: "300-350g", de: "300-350g", nl: "300-350g" },
                    { en: "397-425g", es: "397-425g", de: "397-425g", nl: "397-425g" },
                    { en: "450-500g", es: "450-500g", de: "450-500g", nl: "450-500g" },
                    { en: "500-550g", es: "500-550g", de: "500-550g", nl: "500-550g" }
                ],
                correct: 1,
                explanation: {
                    en: "A regulation American football weighs 397-425 grams (14-15 oz), designed for optimal grip, throwing distance, and control in various weather conditions.",
                    es: "Un balón de fútbol americano reglamentario pesa 397-425 gramos (14-15 oz), diseñado para agarre óptimo, distancia de lanzamiento y control en varias condiciones climáticas.",
                    de: "Ein regulärer American Football wiegt 397-425 Gramm (14-15 oz), entworfen für optimalen Griff, Wurfweite und Kontrolle bei verschiedenen Wetterbedingungen.",
                    nl: "Een officiële American football weegt 397-425 gram (14-15 oz), ontworpen voor optimale grip, werpafstand en controle in verschillende weersomstandigheden."
                }
            },
            {
                question: {
                    en: "Which golf course is known for hosting The Masters?",
                    es: "¿Qué campo de golf es conocido por albergar The Masters?",
                    de: "Welcher Golfplatz ist für die Ausrichtung der Masters bekannt?",
                    nl: "Welke golfbaan staat bekend om het organiseren van The Masters?"
                },
                options: [
                    { en: "Pebble Beach", es: "Pebble Beach", de: "Pebble Beach", nl: "Pebble Beach" },
                    { en: "Augusta National", es: "Augusta National", de: "Augusta National", nl: "Augusta National" },
                    { en: "St. Andrews", es: "St. Andrews", de: "St. Andrews", nl: "St. Andrews" },
                    { en: "Pinehurst", es: "Pinehurst", de: "Pinehurst", nl: "Pinehurst" }
                ],
                correct: 1,
                explanation: {
                    en: "Augusta National Golf Club hosts The Masters Tournament every April, famous for its pristine conditions, azaleas, and the coveted green jacket.",
                    es: "Augusta National Golf Club alberga el Torneo Masters cada abril, famoso por sus condiciones prístinas, azaleas y la codiciada chaqueta verde.",
                    de: "Augusta National Golf Club beherbergt das Masters-Turnier jeden April, berühmt für seine makellosen Bedingungen, Azaleen und das begehrte grüne Jacket.",
                    nl: "Augusta National Golf Club organiseert het Masters Toernooi elke april, beroemd om zijn onberispelijke omstandigheden, azalea's en het felbegeerde groene jasje."
                }
            },
            {
                question: {
                    en: "What is the standard length of a cricket bat?",
                    es: "¿Cuál es la longitud estándar de un bate de cricket?",
                    de: "Was ist die Standardlänge eines Cricketschlägers?",
                    nl: "Wat is de standaardlengte van een cricketbat?"
                },
                options: [
                    { en: "Maximum 36 inches", es: "Máximo 36 pulgadas", de: "Maximum 36 Zoll", nl: "Maximum 36 inch" },
                    { en: "Maximum 38 inches", es: "Máximo 38 pulgadas", de: "Maximum 38 Zoll", nl: "Maximum 38 inch" },
                    { en: "Maximum 40 inches", es: "Máximo 40 pulgadas", de: "Maximum 40 Zoll", nl: "Maximum 40 inch" },
                    { en: "Maximum 42 inches", es: "Máximo 42 pulgadas", de: "Maximum 42 Zoll", nl: "Maximum 42 inch" }
                ],
                correct: 0,
                explanation: {
                    en: "A cricket bat can be a maximum of 36 inches (91.4cm) long and 4.25 inches (10.8cm) wide, designed for optimal control and power when hitting the ball.",
                    es: "Un bate de cricket puede tener un máximo de 36 pulgadas (91,4cm) de largo y 4,25 pulgadas (10,8cm) de ancho, diseñado para control y potencia óptimos al golpear la pelota.",
                    de: "Ein Cricketschläger darf maximal 36 Zoll (91,4cm) lang und 4,25 Zoll (10,8cm) breit sein, entworfen für optimale Kontrolle und Kraft beim Schlagen des Balls.",
                    nl: "Een cricketbat kan maximaal 36 inch (91,4cm) lang en 4,25 inch (10,8cm) breed zijn, ontworpen voor optimale controle en kracht bij het slaan van de bal."
                }
            },
            {
                question: {
                    en: "What is the diameter of an ice hockey puck?",
                    es: "¿Cuál es el diámetro de un disco de hockey sobre hielo?",
                    de: "Was ist der Durchmesser eines Eishockey-Pucks?",
                    nl: "Wat is de diameter van een ijshockey puck?"
                },
                options: [
                    { en: "7.0cm", es: "7,0cm", de: "7,0cm", nl: "7,0cm" },
                    { en: "7.62cm", es: "7,62cm", de: "7,62cm", nl: "7,62cm" },
                    { en: "8.0cm", es: "8,0cm", de: "8,0cm", nl: "8,0cm" },
                    { en: "8.5cm", es: "8,5cm", de: "8,5cm", nl: "8,5cm" }
                ],
                correct: 1,
                explanation: {
                    en: "An ice hockey puck has a diameter of 7.62cm (3 inches) and is 2.54cm thick, made of vulcanized rubber for durability and consistent play.",
                    es: "Un disco de hockey sobre hielo tiene un diámetro de 7,62cm (3 pulgadas) y 2,54cm de grosor, hecho de goma vulcanizada para durabilidad y juego consistente.",
                    de: "Ein Eishockey-Puck hat einen Durchmesser von 7,62cm (3 Zoll) und ist 2,54cm dick, aus vulkanisiertem Gummi für Haltbarkeit und konsistentes Spiel.",
                    nl: "Een ijshockey puck heeft een diameter van 7,62cm (3 inch) en is 2,54cm dik, gemaakt van gevulkaniseerd rubber voor duurzaamheid en consistent spel."
                }
            },
            {
                question: {
                    en: "Which stadium is known as 'The Cathedral of Football'?",
                    es: "¿Qué estadio se conoce como 'La Catedral del Fútbol'?",
                    de: "Welches Stadion ist als 'The Cathedral of Football' bekannt?",
                    nl: "Welk stadion staat bekend als 'The Cathedral of Football'?"
                },
                options: [
                    { en: "Old Trafford", es: "Old Trafford", de: "Old Trafford", nl: "Old Trafford" },
                    { en: "Wembley", es: "Wembley", de: "Wembley", nl: "Wembley" },
                    { en: "Camp Nou", es: "Camp Nou", de: "Camp Nou", nl: "Camp Nou" },
                    { en: "Santiago Bernabéu", es: "Santiago Bernabéu", de: "Santiago Bernabéu", nl: "Santiago Bernabéu" }
                ],
                correct: 1,
                explanation: {
                    en: "Wembley Stadium in London is known as 'The Cathedral of Football' due to its iconic status and role in hosting major football matches and tournaments.",
                    es: "El Estadio de Wembley en Londres se conoce como 'La Catedral del Fútbol' debido a su estatus icónico y papel en albergar partidos y torneos importantes de fútbol.",
                    de: "Das Wembley-Stadion in London ist als 'The Cathedral of Football' bekannt aufgrund seines ikonischen Status und seiner Rolle bei der Ausrichtung großer Fußballspiele und Turniere.",
                    nl: "Wembley Stadium in Londen staat bekend als 'The Cathedral of Football' vanwege zijn iconische status en rol bij het organiseren van belangrijke voetbalwedstrijden en toernooien."
                }
            },
            {
                question: {
                    en: "What is the standard weight of a bowling pin?",
                    es: "¿Cuál es el peso estándar de un bolo?",
                    de: "Was ist das Standardgewicht eines Bowlingpins?",
                    nl: "Wat is het standaardgewicht van een bowlingpin?"
                },
                options: [
                    { en: "1.4-1.6 kg", es: "1,4-1,6 kg", de: "1,4-1,6 kg", nl: "1,4-1,6 kg" },
                    { en: "1.6-1.8 kg", es: "1,6-1,8 kg", de: "1,6-1,8 kg", nl: "1,6-1,8 kg" },
                    { en: "1.8-2.0 kg", es: "1,8-2,0 kg", de: "1,8-2,0 kg", nl: "1,8-2,0 kg" },
                    { en: "2.0-2.2 kg", es: "2,0-2,2 kg", de: "2,0-2,2 kg", nl: "2,0-2,2 kg" }
                ],
                correct: 0,
                explanation: {
                    en: "A standard bowling pin weighs between 1.4-1.6 kg (3 lbs 2 oz to 3 lbs 10 oz), providing the right weight for proper pin action when struck by the ball.",
                    es: "Un bolo estándar pesa entre 1,4-1,6 kg (3 lbs 2 oz a 3 lbs 10 oz), proporcionando el peso adecuado para la acción apropiada del bolo al ser golpeado por la pelota.",
                    de: "Ein Standard-Bowlingpin wiegt zwischen 1,4-1,6 kg (3 lbs 2 oz bis 3 lbs 10 oz) und bietet das richtige Gewicht für ordnungsgemäße Pin-Aktion beim Aufprall des Balls.",
                    nl: "Een standaard bowlingpin weegt tussen 1,4-1,6 kg (3 lbs 2 oz tot 3 lbs 10 oz), wat het juiste gewicht biedt voor goede pin-actie wanneer geraakt door de bal."
                }
            },
            {
                question: {
                    en: "Which stadium is famous for its 'Green Monster' wall?",
                    es: "¿Qué estadio es famoso por su pared 'Monstruo Verde'?",
                    de: "Welches Stadion ist für seine 'Green Monster' Wand berühmt?",
                    nl: "Welk stadion is beroemd om zijn 'Green Monster' muur?"
                },
                options: [
                    { en: "Yankee Stadium", es: "Yankee Stadium", de: "Yankee Stadium", nl: "Yankee Stadium" },
                    { en: "Fenway Park", es: "Fenway Park", de: "Fenway Park", nl: "Fenway Park" },
                    { en: "Wrigley Field", es: "Wrigley Field", de: "Wrigley Field", nl: "Wrigley Field" },
                    { en: "Dodger Stadium", es: "Dodger Stadium", de: "Dodger Stadium", nl: "Dodger Stadium" }
                ],
                correct: 1,
                explanation: {
                    en: "Fenway Park is famous for its 'Green Monster', a 37-foot high left field wall that creates unique playing conditions and iconic moments in baseball.",
                    es: "Fenway Park es famoso por su 'Monstruo Verde', una pared del campo izquierdo de 37 pies de altura que crea condiciones de juego únicas y momentos icónicos en el béisbol.",
                    de: "Fenway Park ist berühmt für seine 'Green Monster', eine 37 Fuß hohe linke Feldwand, die einzigartige Spielbedingungen und ikonische Momente im Baseball schafft.",
                    nl: "Fenway Park is beroemd om zijn 'Green Monster', een 37 voet hoge linker veld muur die unieke speelomstandigheden en iconische momenten in honkbal creëert."
                }
            },
            {
                question: {
                    en: "What is the length of a badminton racquet handle?",
                    es: "¿Cuál es la longitud del mango de una raqueta de bádminton?",
                    de: "Wie lang ist der Griff eines Badmintonschlägers?",
                    nl: "Wat is de lengte van een badmintonracket handvat?"
                },
                options: [
                    { en: "160mm", es: "160mm", de: "160mm", nl: "160mm" },
                    { en: "180mm", es: "180mm", de: "180mm", nl: "180mm" },
                    { en: "200mm", es: "200mm", de: "200mm", nl: "200mm" },
                    { en: "220mm", es: "220mm", de: "220mm", nl: "220mm" }
                ],
                correct: 0,
                explanation: {
                    en: "A badminton racquet handle is 160mm long, providing adequate grip length for proper technique while maintaining overall racquet balance and maneuverability.",
                    es: "El mango de una raqueta de bádminton tiene 160mm de largo, proporcionando longitud de agarre adecuada para técnica apropiada mientras mantiene el equilibrio y maniobrabilidad general de la raqueta.",
                    de: "Ein Badmintonschläger-Griff ist 160mm lang und bietet ausreichende Grifflänge für ordnungsgemäße Technik bei gleichzeitiger Aufrechterhaltung von Balance und Maneuvrierfähigkeit des Schlägers.",
                    nl: "Een badmintonracket handvat is 160mm lang, wat voldoende griplengte biedt voor juiste techniek terwijl de algehele racket balans en manoeuvreerbaarheid behouden blijft."
                }
            },
            {
                question: {
                    en: "Which racing venue is known as 'The Brickyard'?",
                    es: "¿Qué circuito de carreras se conoce como 'The Brickyard'?",
                    de: "Welche Rennstrecke ist als 'The Brickyard' bekannt?",
                    nl: "Welk racecircuit staat bekend als 'The Brickyard'?"
                },
                options: [
                    { en: "Daytona International Speedway", es: "Daytona International Speedway", de: "Daytona International Speedway", nl: "Daytona International Speedway" },
                    { en: "Indianapolis Motor Speedway", es: "Indianapolis Motor Speedway", de: "Indianapolis Motor Speedway", nl: "Indianapolis Motor Speedway" },
                    { en: "Talladega Superspeedway", es: "Talladega Superspeedway", de: "Talladega Superspeedway", nl: "Talladega Superspeedway" },
                    { en: "Charlotte Motor Speedway", es: "Charlotte Motor Speedway", de: "Charlotte Motor Speedway", nl: "Charlotte Motor Speedway" }
                ],
                correct: 1,
                explanation: {
                    en: "Indianapolis Motor Speedway is known as 'The Brickyard' due to its original brick surface, and hosts the famous Indianapolis 500 race.",
                    es: "Indianapolis Motor Speedway se conoce como 'The Brickyard' debido a su superficie original de ladrillo, y alberga la famosa carrera de Indianapolis 500.",
                    de: "Indianapolis Motor Speedway ist als 'The Brickyard' bekannt aufgrund seiner ursprünglichen Ziegeloberfläche und beherbergt das berühmte Indianapolis 500-Rennen.",
                    nl: "Indianapolis Motor Speedway staat bekend als 'The Brickyard' vanwege zijn oorspronkelijke bakstenen oppervlak, en organiseert de beroemde Indianapolis 500 race."
                }
            },
            {
                question: {
                    en: "What is the standard depth of a swimming pool lane?",
                    es: "¿Cuál es la profundidad estándar de un carril de piscina?",
                    de: "Was ist die Standardtiefe einer Schwimmbahn?",
                    nl: "Wat is de standaarddiepte van een zwembad baan?"
                },
                options: [
                    { en: "1.5m minimum", es: "1,5m mínimo", de: "1,5m Minimum", nl: "1,5m minimum" },
                    { en: "2.0m minimum", es: "2,0m mínimo", de: "2,0m Minimum", nl: "2,0m minimum" },
                    { en: "2.5m minimum", es: "2,5m mínimo", de: "2,5m Minimum", nl: "2,5m minimum" },
                    { en: "3.0m minimum", es: "3,0m mínimo", de: "3,0m Minimum", nl: "3,0m minimum" }
                ],
                correct: 1,
                explanation: {
                    en: "Olympic swimming pools must have a minimum depth of 2.0 meters to ensure proper racing conditions and reduce turbulence for competitive swimming.",
                    es: "Las piscinas olímpicas deben tener una profundidad mínima de 2,0 metros para asegurar condiciones apropiadas de carrera y reducir turbulencias para natación competitiva.",
                    de: "Olympische Schwimmbecken müssen eine Mindesttiefe von 2,0 Metern haben, um ordnungsgemäße Rennbedingungen zu gewährleisten und Turbulenzen für Wettkampfschwimmen zu reduzieren.",
                    nl: "Olympische zwembaden moeten een minimale diepte van 2,0 meter hebben om juiste race-omstandigheden te garanderen en turbulentie voor competitief zwemmen te verminderen."
                }
            },
            {
                question: {
                    en: "What material is used for Olympic fencing masks?",
                    es: "¿Qué material se usa para las máscaras de esgrima olímpica?",
                    de: "Welches Material wird für olympische Fechtmasken verwendet?",
                    nl: "Welk materiaal wordt gebruikt voor Olympische schermmaskers?"
                },
                options: [
                    { en: "Steel mesh", es: "Malla de acero", de: "Stahlnetz", nl: "Stalen gaas" },
                    { en: "Titanium", es: "Titanio", de: "Titan", nl: "Titanium" },
                    { en: "Carbon fiber", es: "Fibra de carbono", de: "Kohlefaser", nl: "Koolstofvezel" },
                    { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" }
                ],
                correct: 0,
                explanation: {
                    en: "Olympic fencing masks use steel mesh construction for maximum protection while maintaining visibility and breathability during competition.",
                    es: "Las máscaras de esgrima olímpica usan construcción de malla de acero para máxima protección mientras mantienen visibilidad y transpirabilidad durante la competición.",
                    de: "Olympische Fechtmasken verwenden Stahlnetz-Konstruktion für maximalen Schutz bei gleichzeitiger Aufrechterhaltung von Sichtbarkeit und Atmungsaktivität während des Wettkampfs.",
                    nl: "Olympische schermmaskers gebruiken stalen gaas constructie voor maximale bescherming terwijl zichtbaarheid en ademend vermogen tijdens competitie behouden blijven."
                }
            },
            {
                question: {
                    en: "Which tennis court surface is considered the fastest?",
                    es: "¿Qué superficie de cancha de tenis se considera la más rápida?",
                    de: "Welcher Tennisplatzbelag gilt als der schnellste?",
                    nl: "Welk tennisbaanoppervlak wordt beschouwd als het snelste?"
                },
                options: [
                    { en: "Clay", es: "Arcilla", de: "Sand", nl: "Gravel" },
                    { en: "Hard court", es: "Cancha dura", de: "Hartplatz", nl: "Hardcourt" },
                    { en: "Grass", es: "Césped", de: "Rasen", nl: "Gras" },
                    { en: "Carpet", es: "Alfombra", de: "Teppich", nl: "Tapijt" }
                ],
                correct: 2,
                explanation: {
                    en: "Grass courts are considered the fastest surface in tennis because the ball skids and stays low, giving players less time to react and favoring serve-and-volley play.",
                    es: "Las canchas de césped se consideran la superficie más rápida en tenis porque la pelota resbala y se mantiene baja, dando menos tiempo a los jugadores para reaccionar y favoreciendo el juego de saque y volea.",
                    de: "Rasenplätze gelten als schnellste Oberfläche im Tennis, da der Ball rutscht und niedrig bleibt, was den Spielern weniger Reaktionszeit gibt und das Serve-and-Volley-Spiel begünstigt.",
                    nl: "Grasbanen worden beschouwd als het snelste oppervlak in tennis omdat de bal glijdt en laag blijft, waardoor spelers minder tijd hebben om te reageren en serve-and-volley spel wordt bevoordeeld."
                }
            },
            {
                question: {
                    en: "What is the weight of an official table tennis ball?",
                    es: "¿Cuál es el peso de una pelota oficial de tenis de mesa?",
                    de: "Was ist das Gewicht eines offiziellen Tischtennisballs?",
                    nl: "Wat is het gewicht van een officiële tafeltennisbal?"
                },
                options: [
                    { en: "2.7g", es: "2,7g", de: "2,7g", nl: "2,7g" },
                    { en: "3.2g", es: "3,2g", de: "3,2g", nl: "3,2g" },
                    { en: "3.7g", es: "3,7g", de: "3,7g", nl: "3,7g" },
                    { en: "4.2g", es: "4,2g", de: "4,2g", nl: "4,2g" }
                ],
                correct: 0,
                explanation: {
                    en: "An official table tennis ball weighs exactly 2.7 grams, made of celluloid or similar plastic material, providing the right balance for proper spin and control in competitive play.",
                    es: "Una pelota oficial de tenis de mesa pesa exactamente 2,7 gramos, hecha de celuloide o material plástico similar, proporcionando el equilibrio adecuado para efectos y control apropiados en juego competitivo.",
                    de: "Ein offizieller Tischtennisball wiegt genau 2,7 Gramm, aus Zelluloid oder ähnlichem Kunststoffmaterial, und bietet das richtige Gleichgewicht für ordnungsgemäßen Spin und Kontrolle im Wettkampfspiel.",
                    nl: "Een officiële tafeltennisbal weegt precies 2,7 gram, gemaakt van celluloid of vergelijkbaar plastic materiaal, wat de juiste balans biedt voor goede spin en controle in competitief spel."
                }
            },
            {
                question: {
                    en: "Which arena is known as 'The Garden' in basketball?",
                    es: "¿Qué arena se conoce como 'El Jardín' en baloncesto?",
                    de: "Welche Arena ist im Basketball als 'The Garden' bekannt?",
                    nl: "Welke arena staat bekend als 'The Garden' in basketbal?"
                },
                options: [
                    { en: "TD Garden", es: "TD Garden", de: "TD Garden", nl: "TD Garden" },
                    { en: "Madison Square Garden", es: "Madison Square Garden", de: "Madison Square Garden", nl: "Madison Square Garden" },
                    { en: "United Center", es: "United Center", de: "United Center", nl: "United Center" },
                    { en: "Staples Center", es: "Staples Center", de: "Staples Center", nl: "Staples Center" }
                ],
                correct: 1,
                explanation: {
                    en: "Madison Square Garden in New York is universally known as 'The Garden' and is one of the most famous basketball arenas, home to the New York Knicks.",
                    es: "Madison Square Garden en Nueva York es universalmente conocido como 'El Jardín' y es una de las arenas de baloncesto más famosas, hogar de los New York Knicks.",
                    de: "Madison Square Garden in New York ist allgemein als 'The Garden' bekannt und ist eine der berühmtesten Basketball-Arenen, Heimat der New York Knicks.",
                    nl: "Madison Square Garden in New York staat universeel bekend als 'The Garden' en is een van de beroemdste basketbalarena's, thuis van de New York Knicks."
                }
            },
            {
                question: {
                    en: "What is the standard width of a tennis court?",
                    es: "¿Cuál es el ancho estándar de una cancha de tenis?",
                    de: "Was ist die Standardbreite eines Tennisplatzes?",
                    nl: "Wat is de standaardbreedte van een tennisbaan?"
                },
                options: [
                    { en: "8.23m", es: "8,23m", de: "8,23m", nl: "8,23m" },
                    { en: "10.97m", es: "10,97m", de: "10,97m", nl: "10,97m" },
                    { en: "12.80m", es: "12,80m", de: "12,80m", nl: "12,80m" },
                    { en: "15.24m", es: "15,24m", de: "15,24m", nl: "15,24m" }
                ],
                correct: 1,
                explanation: {
                    en: "A tennis court is 10.97m (36 feet) wide for doubles play, with the singles court being 8.23m wide. The doubles width is the standard measurement.",
                    es: "Una cancha de tenis tiene 10,97m (36 pies) de ancho para juego de dobles, siendo la cancha de individuales de 8,23m de ancho. El ancho de dobles es la medida estándar.",
                    de: "Ein Tennisplatz ist 10,97m (36 Fuß) breit für Doppelspiele, wobei der Einzelplatz 8,23m breit ist. Die Doppelbreite ist das Standardmaß.",
                    nl: "Een tennisbaan is 10,97m (36 voet) breed voor dubbelspel, waarbij de enkelspelbaan 8,23m breed is. De dubbelspelbreedte is de standaardmeting."
                }
            },
            {
                question: {
                    en: "What type of wood is traditionally used for cricket bats?",
                    es: "¿Qué tipo de madera se usa tradicionalmente para los bates de cricket?",
                    de: "Welche Holzart wird traditionell für Cricketschläger verwendet?",
                    nl: "Welk type hout wordt traditioneel gebruikt voor cricketbats?"
                },
                options: [
                    { en: "Oak", es: "Roble", de: "Eiche", nl: "Eiken" },
                    { en: "Willow", es: "Sauce", de: "Weide", nl: "Wilg" },
                    { en: "Ash", es: "Fresno", de: "Esche", nl: "Es" },
                    { en: "Pine", es: "Pino", de: "Kiefer", nl: "Den" }
                ],
                correct: 1,
                explanation: {
                    en: "Willow wood is traditionally used for cricket bats because it's lightweight yet strong, with excellent shock-absorbing properties that make it ideal for striking a hard cricket ball.",
                    es: "La madera de sauce se usa tradicionalmente para bates de cricket porque es liviana pero fuerte, con excelentes propiedades de absorción de impactos que la hacen ideal para golpear una pelota dura de cricket.",
                    de: "Weidenholz wird traditionell für Cricketschläger verwendet, da es leicht aber stark ist, mit ausgezeichneten stoßdämpfenden Eigenschaften, die es ideal zum Schlagen eines harten Cricketballs machen.",
                    nl: "Wilgenhout wordt traditioneel gebruikt voor cricketbats omdat het licht maar sterk is, met uitstekende schokabsorberende eigenschappen die het ideaal maken voor het slaan van een harde cricketbal."
                }
            },
            {
                question: {
                    en: "What is the length of an Olympic-size swimming pool?",
                    es: "¿Cuál es la longitud de una piscina de tamaño olímpico?",
                    de: "Wie lang ist ein olympisches Schwimmbecken?",
                    nl: "Wat is de lengte van een Olympisch zwembad?"
                },
                options: [
                    { en: "25m", es: "25m", de: "25m", nl: "25m" },
                    { en: "50m", es: "50m", de: "50m", nl: "50m" },
                    { en: "75m", es: "75m", de: "75m", nl: "75m" },
                    { en: "100m", es: "100m", de: "100m", nl: "100m" }
                ],
                correct: 1,
                explanation: {
                    en: "An Olympic-size swimming pool is exactly 50 meters long, providing the standard distance for competitive swimming events and ensuring consistency across all international competitions.",
                    es: "Una piscina de tamaño olímpico tiene exactamente 50 metros de largo, proporcionando la distancia estándar para eventos de natación competitiva y asegurando consistencia en todas las competiciones internacionales.",
                    de: "Ein olympisches Schwimmbecken ist genau 50 Meter lang und bietet die Standarddistanz für Wettkampfschwimmen sowie Konsistenz bei allen internationalen Wettkämpfen.",
                    nl: "Een Olympisch zwembad is precies 50 meter lang, wat de standaardafstand biedt voor competitief zwemmen en consistentie verzekert bij alle internationale competities."
                }
            },
            {
                question: {
                    en: "Which stadium is known as 'The House That Ruth Built'?",
                    es: "¿Qué estadio se conoce como 'La Casa que Ruth Construyó'?",
                    de: "Welches Stadion ist als 'The House That Ruth Built' bekannt?",
                    nl: "Welk stadion staat bekend als 'The House That Ruth Built'?"
                },
                options: [
                    { en: "Fenway Park", es: "Fenway Park", de: "Fenway Park", nl: "Fenway Park" },
                    { en: "Old Yankee Stadium", es: "Viejo Yankee Stadium", de: "Old Yankee Stadium", nl: "Old Yankee Stadium" },
                    { en: "Wrigley Field", es: "Wrigley Field", de: "Wrigley Field", nl: "Wrigley Field" },
                    { en: "Polo Grounds", es: "Polo Grounds", de: "Polo Grounds", nl: "Polo Grounds" }
                ],
                correct: 1,
                explanation: {
                    en: "The old Yankee Stadium was known as 'The House That Ruth Built' because it was built in 1923, the same year Babe Ruth helped establish the Yankees as a dominant force in baseball.",
                    es: "El viejo Yankee Stadium era conocido como 'La Casa que Ruth Construyó' porque fue construido en 1923, el mismo año que Babe Ruth ayudó a establecer a los Yankees como una fuerza dominante en el béisbol.",
                    de: "Das alte Yankee Stadium war als 'The House That Ruth Built' bekannt, da es 1923 gebaut wurde, im selben Jahr als Babe Ruth half, die Yankees als dominante Kraft im Baseball zu etablieren.",
                    nl: "Het oude Yankee Stadium stond bekend als 'The House That Ruth Built' omdat het in 1923 werd gebouwd, hetzelfde jaar dat Babe Ruth hielp de Yankees te vestigen als dominante kracht in honkbal."
                }
            },
            {
                question: {
                    en: "What is the regulation height of a handball goal?",
                    es: "¿Cuál es la altura reglamentaria de una portería de balonmano?",
                    de: "Was ist die reguläre Höhe eines Handballtores?",
                    nl: "Wat is de officiële hoogte van een handbalgoal?"
                },
                options: [
                    { en: "1.8m", es: "1,8m", de: "1,8m", nl: "1,8m" },
                    { en: "2.0m", es: "2,0m", de: "2,0m", nl: "2,0m" },
                    { en: "2.2m", es: "2,2m", de: "2,2m", nl: "2,2m" },
                    { en: "2.4m", es: "2,4m", de: "2,4m", nl: "2,4m" }
                ],
                correct: 1,
                explanation: {
                    en: "A handball goal is 2.0 meters high and 3.0 meters wide, designed to provide challenging but achievable scoring opportunities for players throwing from various distances.",
                    es: "Una portería de balonmano tiene 2,0 metros de altura y 3,0 metros de ancho, diseñada para proporcionar oportunidades de anotación desafiantes pero alcanzables para jugadores lanzando desde varias distancias.",
                    de: "Ein Handballtor ist 2,0 Meter hoch und 3,0 Meter breit, entworfen um herausfordernde aber erreichbare Torchancen für Spieler zu bieten, die aus verschiedenen Entfernungen werfen.",
                    nl: "Een handbalgoal is 2,0 meter hoog en 3,0 meter breed, ontworpen om uitdagende maar haalbare scorekansen te bieden voor spelers die vanaf verschillende afstanden gooien."
                }
            },
            {
                question: {
                    en: "Which golf club is traditionally used for the longest shots?",
                    es: "¿Qué palo de golf se usa tradicionalmente para los tiros más largos?",
                    de: "Welcher Golfschläger wird traditionell für die längsten Schläge verwendet?",
                    nl: "Welke golfclub wordt traditioneel gebruikt voor de langste slagen?"
                },
                options: [
                    { en: "3-wood", es: "3-madera", de: "3-Holz", nl: "3-hout" },
                    { en: "Driver", es: "Driver", de: "Driver", nl: "Driver" },
                    { en: "5-iron", es: "5-hierro", de: "5-Eisen", nl: "5-ijzer" },
                    { en: "Wedge", es: "Wedge", de: "Wedge", nl: "Wedge" }
                ],
                correct: 1,
                explanation: {
                    en: "The driver is traditionally used for the longest shots in golf because it has the lowest loft angle and longest shaft, allowing for maximum distance off the tee.",
                    es: "El driver se usa tradicionalmente para los tiros más largos en golf porque tiene el ángulo de loft más bajo y el eje más largo, permitiendo máxima distancia desde el tee.",
                    de: "Der Driver wird traditionell für die längsten Schläge im Golf verwendet, da er den niedrigsten Loft-Winkel und den längsten Schaft hat, was maximale Distanz vom Abschlag ermöglicht.",
                    nl: "De driver wordt traditioneel gebruikt voor de langste slagen in golf omdat hij de laagste loft hoek en langste schacht heeft, wat maximale afstand vanaf de tee mogelijk maakt."
                }
            },
            {
                question: {
                    en: "What is the width of a hockey goal?",
                    es: "¿Cuál es el ancho de una portería de hockey?",
                    de: "Wie breit ist ein Hockeytor?",
                    nl: "Wat is de breedte van een hockeygoal?"
                },
                options: [
                    { en: "1.8m", es: "1,8m", de: "1,8m", nl: "1,8m" },
                    { en: "2.0m", es: "2,0m", de: "2,0m", nl: "2,0m" },
                    { en: "3.66m", es: "3,66m", de: "3,66m", nl: "3,66m" },
                    { en: "4.0m", es: "4,0m", de: "4,0m", nl: "4,0m" }
                ],
                correct: 2,
                explanation: {
                    en: "An ice hockey goal is 3.66 meters (12 feet) wide and 1.22 meters (4 feet) high, providing a challenging but fair target for players shooting the puck.",
                    es: "Una portería de hockey sobre hielo tiene 3,66 metros (12 pies) de ancho y 1,22 metros (4 pies) de alto, proporcionando un objetivo desafiante pero justo para jugadores disparando el puck.",
                    de: "Ein Eishockeytor ist 3,66 Meter (12 Fuß) breit und 1,22 Meter (4 Fuß) hoch und bietet ein herausforderndes aber faires Ziel für Spieler, die den Puck schießen.",
                    nl: "Een ijshockeygoal is 3,66 meter (12 voet) breed en 1,22 meter (4 voet) hoog, wat een uitdagend maar eerlijk doelwit biedt voor spelers die de puck schieten."
                }
            },
            {
                question: {
                    en: "Which material is used for modern javelin tips?",
                    es: "¿Qué material se usa para las puntas de jabalina modernas?",
                    de: "Welches Material wird für moderne Speerspitzen verwendet?",
                    nl: "Welk materiaal wordt gebruikt voor moderne speerpu nten?"
                },
                options: [
                    { en: "Steel", es: "Acero", de: "Stahl", nl: "Staal" },
                    { en: "Tungsten", es: "Tungsteno", de: "Wolfram", nl: "Wolfraam" },
                    { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" },
                    { en: "Titanium", es: "Titanio", de: "Titan", nl: "Titanium" }
                ],
                correct: 0,
                explanation: {
                    en: "Modern javelin tips are made of steel for durability and proper aerodynamics. The steel tip ensures the javelin sticks in the ground and meets competition standards.",
                    es: "Las puntas de jabalina modernas están hechas de acero para durabilidad y aerodinámica adecuada. La punta de acero asegura que la jabalina se clave en el suelo y cumpla estándares de competición.",
                    de: "Moderne Speerspitzen bestehen aus Stahl für Haltbarkeit und ordnungsgemäße Aerodynamik. Die Stahlspitze sorgt dafür, dass der Speer im Boden steckt und Wettkampfstandards erfüllt.",
                    nl: "Moderne speerpunten zijn gemaakt van staal voor duurzaamheid en juiste aerodynamica. De stalen punt zorgt ervoor dat de speer in de grond steekt en voldoet aan competitiestandaarden."
                }
            },
            {
                question: {
                    en: "What is the weight of an Olympic discus for women?",
                    es: "¿Cuál es el peso de un disco olímpico para mujeres?",
                    de: "Was ist das Gewicht einer olympischen Diskusscheibe für Frauen?",
                    nl: "Wat is het gewicht van een Olympische discus voor vrouwen?"
                },
                options: [
                    { en: "1.0 kg", es: "1,0 kg", de: "1,0 kg", nl: "1,0 kg" },
                    { en: "1.5 kg", es: "1,5 kg", de: "1,5 kg", nl: "1,5 kg" },
                    { en: "2.0 kg", es: "2,0 kg", de: "2,0 kg", nl: "2,0 kg" },
                    { en: "2.5 kg", es: "2,5 kg", de: "2,5 kg", nl: "2,5 kg" }
                ],
                correct: 0,
                explanation: {
                    en: "The women's Olympic discus weighs 1.0 kg, which is lighter than the men's discus (2.0 kg), allowing for proper technique and safety while maintaining competitive standards.",
                    es: "El disco olímpico femenino pesa 1,0 kg, que es más liviano que el disco masculino (2,0 kg), permitiendo técnica adecuada y seguridad mientras mantiene estándares competitivos.",
                    de: "Die olympische Diskusscheibe für Frauen wiegt 1,0 kg, was leichter ist als der Männerdiskus (2,0 kg), und ermöglicht ordnungsgemäße Technik und Sicherheit bei Aufrechterhaltung von Wettkampfstandards.",
                    nl: "De Olympische discus voor vrouwen weegt 1,0 kg, wat lichter is dan de mannendiscus (2,0 kg), wat juiste techniek en veiligheid mogelijk maakt terwijl competitieve standaarden behouden blijven."
                }
            },
            {
                question: {
                    en: "Which venue is known as 'The Home of Golf'?",
                    es: "¿Qué lugar se conoce como 'La Casa del Golf'?",
                    de: "Welche Stätte ist als 'The Home of Golf' bekannt?",
                    nl: "Welke locatie staat bekend als 'The Home of Golf'?"
                },
                options: [
                    { en: "Augusta National", es: "Augusta National", de: "Augusta National", nl: "Augusta National" },
                    { en: "St. Andrews", es: "St. Andrews", de: "St. Andrews", nl: "St. Andrews" },
                    { en: "Pebble Beach", es: "Pebble Beach", de: "Pebble Beach", nl: "Pebble Beach" },
                    { en: "Royal & Ancient", es: "Royal & Ancient", de: "Royal & Ancient", nl: "Royal & Ancient" }
                ],
                correct: 1,
                explanation: {
                    en: "St. Andrews in Scotland is known as 'The Home of Golf' because it's where golf was first played over 600 years ago and houses the Royal and Ancient Golf Club, golf's governing body.",
                    es: "St. Andrews en Escocia se conoce como 'La Casa del Golf' porque es donde se jugó golf por primera vez hace más de 600 años y alberga el Royal and Ancient Golf Club, el cuerpo gobernante del golf.",
                    de: "St. Andrews in Schottland ist als 'The Home of Golf' bekannt, da dort vor über 600 Jahren erstmals Golf gespielt wurde und es den Royal and Ancient Golf Club beherbergt, Golfs Dachverband.",
                    nl: "St. Andrews in Schotland staat bekend als 'The Home of Golf' omdat daar meer dan 600 jaar geleden voor het eerst golf werd gespeeld en het de Royal and Ancient Golf Club herbergt, golf's bestuursorgaan."
                }
            },
            {
                question: {
                    en: "What is the standard thickness of a gymnasium floor?",
                    es: "¿Cuál es el grosor estándar de un piso de gimnasio?",
                    de: "Was ist die Standarddicke eines Turnhallenbodens?",
                    nl: "Wat is de standaarddikte van een gymnasiumvloer?"
                },
                options: [
                    { en: "15-20mm", es: "15-20mm", de: "15-20mm", nl: "15-20mm" },
                    { en: "20-25mm", es: "20-25mm", de: "20-25mm", nl: "20-25mm" },
                    { en: "25-30mm", es: "25-30mm", de: "25-30mm", nl: "25-30mm" },
                    { en: "30-35mm", es: "30-35mm", de: "30-35mm", nl: "30-35mm" }
                ],
                correct: 1,
                explanation: {
                    en: "Standard gymnasium floors are 20-25mm thick, providing the right balance of durability, shock absorption, and performance for various indoor sports activities.",
                    es: "Los pisos de gimnasio estándar tienen 20-25mm de grosor, proporcionando el equilibrio adecuado de durabilidad, absorción de impactos y rendimiento para varias actividades deportivas interiores.",
                    de: "Standard-Turnhallenböden sind 20-25mm dick und bieten das richtige Gleichgewicht aus Haltbarkeit, Stoßdämpfung und Leistung für verschiedene Hallensportarten.",
                    nl: "Standaard gymnasiumvloeren zijn 20-25mm dik, wat de juiste balans biedt van duurzaamheid, schokabsorptie en prestaties voor verschillende indoor sportactiviteiten."
                }
            },
            {
                question: {
                    en: "Which racing circuit is known as 'The Temple of Speed'?",
                    es: "¿Qué circuito de carreras se conoce como 'El Templo de la Velocidad'?",
                    de: "Welche Rennstrecke ist als 'The Temple of Speed' bekannt?",
                    nl: "Welk racecircuit staat bekend als 'The Temple of Speed'?"
                },
                options: [
                    { en: "Monaco", es: "Mónaco", de: "Monaco", nl: "Monaco" },
                    { en: "Monza", es: "Monza", de: "Monza", nl: "Monza" },
                    { en: "Silverstone", es: "Silverstone", de: "Silverstone", nl: "Silverstone" },
                    { en: "Spa-Francorchamps", es: "Spa-Francorchamps", de: "Spa-Francorchamps", nl: "Spa-Francorchamps" }
                ],
                correct: 1,
                explanation: {
                    en: "Monza in Italy is known as 'The Temple of Speed' due to its high-speed layout and long straights, making it one of the fastest circuits in Formula 1.",
                    es: "Monza en Italia se conoce como 'El Templo de la Velocidad' debido a su diseño de alta velocidad y rectas largas, convirtiéndolo en uno de los circuitos más rápidos en Fórmula 1.",
                    de: "Monza in Italien ist als 'The Temple of Speed' bekannt aufgrund seines Hochgeschwindigkeits-Layouts und langen Geraden, was es zu einer der schnellsten Strecken in der Formel 1 macht.",
                    nl: "Monza in Italië staat bekend als 'The Temple of Speed' vanwege zijn hoge snelheid layout en lange rechte stukken, waardoor het een van de snelste circuits in Formule 1 is."
                }
            },
            {
                question: {
                    en: "What is the weight of an official rugby ball?",
                    es: "¿Cuál es el peso de un balón de rugby oficial?",
                    de: "Was ist das Gewicht eines offiziellen Rugbyballs?",
                    nl: "Wat is het gewicht van een officiële rugbybal?"
                },
                options: [
                    { en: "380-440g", es: "380-440g", de: "380-440g", nl: "380-440g" },
                    { en: "410-460g", es: "410-460g", de: "410-460g", nl: "410-460g" },
                    { en: "450-500g", es: "450-500g", de: "450-500g", nl: "450-500g" },
                    { en: "480-520g", es: "480-520g", de: "480-520g", nl: "480-520g" }
                ],
                correct: 1,
                explanation: {
                    en: "An official rugby ball weighs 410-460 grams, designed to be heavy enough for accurate passing and kicking while remaining manageable for players to handle during intense play.",
                    es: "Un balón de rugby oficial pesa 410-460 gramos, diseñado para ser lo suficientemente pesado para pases y patadas precisas mientras permanece manejable para que los jugadores lo manejen durante juego intenso.",
                    de: "Ein offizieller Rugbyball wiegt 410-460 Gramm, entworfen um schwer genug für präzise Pässe und Tritte zu sein, während er für Spieler während intensivem Spiel handhabbar bleibt.",
                    nl: "Een officiële rugbybal weegt 410-460 gram, ontworpen om zwaar genoeg te zijn voor nauwkeurig passen en schoppen terwijl hij beheersbaar blijft voor spelers tijdens intensief spel."
                }
            },
            {
                question: {
                    en: "Which Olympic venue was known as the 'Aquatics Centre'?",
                    es: "¿Qué recinto olímpico era conocido como el 'Centro Acuático'?",
                    de: "Welche olympische Stätte war als 'Aquatics Centre' bekannt?",
                    nl: "Welke Olympische locatie stond bekend als het 'Aquatics Centre'?"
                },
                options: [
                    { en: "Beijing 2008", es: "Pekín 2008", de: "Peking 2008", nl: "Peking 2008" },
                    { en: "London 2012", es: "Londres 2012", de: "London 2012", nl: "Londen 2012" },
                    { en: "Rio 2016", es: "Río 2016", de: "Rio 2016", nl: "Rio 2016" },
                    { en: "Tokyo 2020", es: "Tokio 2020", de: "Tokio 2020", nl: "Tokyo 2020" }
                ],
                correct: 1,
                explanation: {
                    en: "The London 2012 Olympics featured the iconic Aquatics Centre designed by Zaha Hadid, known for its distinctive wave-like roof and innovative architecture.",
                    es: "Los Juegos Olímpicos de Londres 2012 presentaron el icónico Centro Acuático diseñado por Zaha Hadid, conocido por su distintivo techo ondulado y arquitectura innovadora.",
                    de: "Die Olympischen Spiele 2012 in London zeigten das ikonische Aquatics Centre von Zaha Hadid, bekannt für sein markantes wellenförmiges Dach und innovative Architektur.",
                    nl: "De Olympische Spelen van Londen 2012 toonden het iconische Aquatics Centre ontworpen door Zaha Hadid, bekend om zijn onderscheidende golfachtige dak en vernieuwende architectuur."
                }
            },
            {
                question: {
                    en: "What is the standard height of a basketball hoop?",
                    es: "¿Cuál es la altura estándar de un aro de baloncesto?",
                    de: "Was ist die Standardhöhe eines Basketballkorbs?",
                    nl: "Wat is de standaardhoogte van een basketbalring?"
                },
                options: [
                    { en: "2.95m", es: "2,95m", de: "2,95m", nl: "2,95m" },
                    { en: "3.00m", es: "3,00m", de: "3,00m", nl: "3,00m" },
                    { en: "3.05m", es: "3,05m", de: "3,05m", nl: "3,05m" },
                    { en: "3.10m", es: "3,10m", de: "3,10m", nl: "3,10m" }
                ],
                correct: 2,
                explanation: {
                    en: "A basketball hoop is exactly 3.05 meters (10 feet) high, a standard established in 1891 when James Naismith invented the game and has remained unchanged ever since.",
                    es: "Un aro de baloncesto tiene exactamente 3,05 metros (10 pies) de altura, un estándar establecido en 1891 cuando James Naismith inventó el juego y ha permanecido sin cambios desde entonces.",
                    de: "Ein Basketballkorb ist genau 3,05 Meter (10 Fuß) hoch, ein Standard der 1891 festgelegt wurde, als James Naismith das Spiel erfand und seitdem unverändert geblieben ist.",
                    nl: "Een basketbalring is precies 3,05 meter (10 voet) hoog, een standaard vastgesteld in 1891 toen James Naismith het spel uitvond en sindsdien onveranderd is gebleven."
                }
            },
            {
                question: {
                    en: "Which material is commonly used for modern ski construction?",
                    es: "¿Qué material se usa comúnmente para la construcción de esquís modernos?",
                    de: "Welches Material wird häufig für den Bau moderner Skier verwendet?",
                    nl: "Welk materiaal wordt vaak gebruikt voor moderne ski constructie?"
                },
                options: [
                    { en: "Wood only", es: "Solo madera", de: "Nur Holz", nl: "Alleen hout" },
                    { en: "Fiberglass and carbon fiber", es: "Fibra de vidrio y fibra de carbono", de: "Glasfaser und Kohlefaser", nl: "Glasvezel en koolstofvezel" },
                    { en: "Steel", es: "Acero", de: "Stahl", nl: "Staal" },
                    { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" }
                ],
                correct: 1,
                explanation: {
                    en: "Modern skis are constructed using fiberglass and carbon fiber materials, which provide the perfect combination of strength, flexibility, and lightweight performance for various skiing conditions.",
                    es: "Los esquís modernos se construyen usando materiales de fibra de vidrio y fibra de carbono, que proporcionan la combinación perfecta de fuerza, flexibilidad y rendimiento liviano para varias condiciones de esquí.",
                    de: "Moderne Skier werden mit Glasfaser- und Kohlefasermaterialien konstruiert, die die perfekte Kombination aus Stärke, Flexibilität und leichter Leistung für verschiedene Skibedingungen bieten.",
                    nl: "Moderne ski's worden geconstrueerd met glasvezel en koolstofvezel materialen, die de perfecte combinatie bieden van sterkte, flexibiliteit en lichtgewicht prestaties voor verschillende ski-omstandigheden."
                }
            },
            {
                question: {
                    en: "What is the length of a standard pool table?",
                    es: "¿Cuál es la longitud de una mesa de billar estándar?",
                    de: "Wie lang ist ein Standard-Billardtisch?",
                    nl: "Wat is de lengte van een standaard pooltafel?"
                },
                options: [
                    { en: "2.54m", es: "2,54m", de: "2,54m", nl: "2,54m" },
                    { en: "2.84m", es: "2,84m", de: "2,84m", nl: "2,84m" },
                    { en: "3.05m", es: "3,05m", de: "3,05m", nl: "3,05m" },
                    { en: "3.66m", es: "3,66m", de: "3,66m", nl: "3,66m" }
                ],
                correct: 1,
                explanation: {
                    en: "A standard pool table is 2.84 meters (9 feet) long and 1.42 meters (4.5 feet) wide, providing the proper playing surface for regulation pool games.",
                    es: "Una mesa de billar estándar tiene 2,84 metros (9 pies) de largo y 1,42 metros (4,5 pies) de ancho, proporcionando la superficie de juego adecuada para juegos de billar reglamentarios.",
                    de: "Ein Standard-Billardtisch ist 2,84 Meter (9 Fuß) lang und 1,42 Meter (4,5 Fuß) breit und bietet die ordnungsgemäße Spielfläche für reguläre Poolspiele.",
                    nl: "Een standaard pooltafel is 2,84 meter (9 voet) lang en 1,42 meter (4,5 voet) breed, wat het juiste speeloppervlak biedt voor regulatie poolspellen."
                }
            },
            {
                question: {
                    en: "What do you call the person who trains a sports team?",
                    es: "¿Cómo se llama a la persona que entrena un equipo deportivo?",
                    de: "Wie nennt man die Person, die eine Sportmannschaft trainiert?",
                    nl: "Hoe noem je de persoon die een sportteam traint?"
                },
                options: [
                    { en: "Coach", es: "Entrenador", de: "Trainer", nl: "Coach" },
                    { en: "Player", es: "Jugador", de: "Spieler", nl: "Speler" },
                    { en: "Referee", es: "Árbitro", de: "Schiedsrichter", nl: "Scheidsrechter" },
                    { en: "Manager", es: "Gerente", de: "Manager", nl: "Manager" }
                ],
                correct: 0,
                explanation: {
                    en: "A coach is the person who trains and guides a sports team, teaching players skills, strategies, and helping them improve their performance.",
                    es: "Un entrenador es la persona que entrena y guía un equipo deportivo, enseñando a los jugadores habilidades, estrategias y ayudándolos a mejorar su rendimiento.",
                    de: "Ein Trainer ist die Person, die eine Sportmannschaft trainiert und leitet, den Spielern Fähigkeiten und Strategien beibringt und ihnen hilft, ihre Leistung zu verbessern.",
                    nl: "Een coach is de persoon die een sportteam traint en begeleidt, spelers vaardigheden en strategieën leert en hen helpt hun prestaties te verbeteren."
                }
            },
            {
                question: {
                    en: "What sport is played on ice with sticks and a puck?",
                    es: "¿Qué deporte se juega en hielo con palos y un disco?",
                    de: "Welcher Sport wird auf Eis mit Schlägern und einem Puck gespielt?",
                    nl: "Welke sport wordt op ijs gespeeld met sticks en een puck?"
                },
                options: [
                    { en: "Ice hockey", es: "Hockey sobre hielo", de: "Eishockey", nl: "IJshockey" },
                    { en: "Figure skating", es: "Patinaje artístico", de: "Eiskunstlauf", nl: "Kunstschaatsen" },
                    { en: "Speed skating", es: "Patinaje de velocidad", de: "Eisschnelllauf", nl: "Schaatsen" },
                    { en: "Curling", es: "Curling", de: "Curling", nl: "Curling" }
                ],
                correct: 0,
                explanation: {
                    en: "Ice hockey is played on ice where players use sticks to hit a puck and try to score goals. It's a fast-paced team sport.",
                    es: "El hockey sobre hielo se juega en hielo donde los jugadores usan palos para golpear un disco y tratan de anotar goles. Es un deporte de equipo de ritmo rápido.",
                    de: "Eishockey wird auf Eis gespielt, wo Spieler Schläger verwenden, um einen Puck zu schlagen und Tore zu erzielen. Es ist ein schneller Mannschaftssport.",
                    nl: "IJshockey wordt op ijs gespeeld waarbij spelers sticks gebruiken om een puck te slaan en doelpunten proberen te maken. Het is een snelle teamsport."
                }
            },
            {
                question: {
                    en: "In which sport do you run and jump over barriers?",
                    es: "¿En qué deporte corres y saltas sobre barreras?",
                    de: "In welchem Sport läufst und springst du über Hindernisse?",
                    nl: "In welke sport ren en spring je over barrières?"
                },
                options: [
                    { en: "Hurdles", es: "Vallas", de: "Hürdenlauf", nl: "Hordenlopen" },
                    { en: "High jump", es: "Salto alto", de: "Hochsprung", nl: "Hoogspringen" },
                    { en: "Long jump", es: "Salto largo", de: "Weitsprung", nl: "Verspringen" },
                    { en: "Pole vault", es: "Salto con pértiga", de: "Stabhochsprung", nl: "Polsstokhoogspringen" }
                ],
                correct: 0,
                explanation: {
                    en: "Hurdles is a track and field event where runners sprint and jump over a series of barriers placed at specific distances.",
                    es: "Las vallas es un evento de atletismo donde los corredores esprintan y saltan sobre una serie de barreras colocadas a distancias específicas.",
                    de: "Hürdenlauf ist eine Leichtathletikdisziplin, bei der Läufer sprinten und über eine Reihe von Hindernissen in bestimmten Abständen springen.",
                    nl: "Hordenlopen is een atletiekevenement waarbij lopers sprinten en springen over een reeks barrières geplaatst op specifieke afstanden."
                }
            },
            {
                question: {
                    en: "What do swimmers wear to protect their eyes?",
                    es: "¿Qué usan los nadadores para proteger sus ojos?",
                    de: "Was tragen Schwimmer zum Schutz ihrer Augen?",
                    nl: "Wat dragen zwemmers om hun ogen te beschermen?"
                },
                options: [
                    { en: "Goggles", es: "Gafas de natación", de: "Schwimmbrille", nl: "Zwembril" },
                    { en: "Sunglasses", es: "Gafas de sol", de: "Sonnenbrille", nl: "Zonnebril" },
                    { en: "Mask", es: "Máscara", de: "Maske", nl: "Masker" },
                    { en: "Hat", es: "Sombrero", de: "Hut", nl: "Hoed" }
                ],
                correct: 0,
                explanation: {
                    en: "Swimmers wear goggles to protect their eyes from chlorine in pools and to see clearly underwater while swimming.",
                    es: "Los nadadores usan gafas de natación para proteger sus ojos del cloro en las piscinas y para ver claramente bajo el agua mientras nadan.",
                    de: "Schwimmer tragen eine Schwimmbrille, um ihre Augen vor Chlor in Schwimmbädern zu schützen und unter Wasser klar zu sehen.",
                    nl: "Zwemmers dragen een zwembril om hun ogen te beschermen tegen chloor in zwembaden en om duidelijk onder water te kunnen zien tijdens het zwemmen."
                }
            },
            {
                question: {
                    en: "What is the basic equipment needed to play catch?",
                    es: "¿Cuál es el equipo básico necesario para jugar a atrapar?",
                    de: "Was ist die Grundausstattung, die man zum Fangenspielen braucht?",
                    nl: "Wat is de basisuitrusting die nodig is om te vangen?"
                },
                options: [
                    { en: "A ball", es: "Una pelota", de: "Ein Ball", nl: "Een bal" },
                    { en: "A bat", es: "Un bate", de: "Ein Schläger", nl: "Een knuppel" },
                    { en: "A net", es: "Una red", de: "Ein Netz", nl: "Een net" },
                    { en: "Skates", es: "Patines", de: "Schlittschuhe", nl: "Schaatsen" }
                ],
                correct: 0,
                explanation: {
                    en: "To play catch, you only need a ball. Players throw the ball back and forth to each other, practicing throwing and catching skills.",
                    es: "Para jugar a atrapar, solo necesitas una pelota. Los jugadores se lanzan la pelota de un lado a otro, practicando habilidades de lanzamiento y atrapada.",
                    de: "Um Fangen zu spielen, braucht man nur einen Ball. Die Spieler werfen sich den Ball hin und her und üben dabei Wurf- und Fangfähigkeiten.",
                    nl: "Om te vangen heb je alleen een bal nodig. Spelers gooien de bal heen en weer naar elkaar en oefenen zo gooi- en vangvaardigheden."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/sports', level6);
    }
})();