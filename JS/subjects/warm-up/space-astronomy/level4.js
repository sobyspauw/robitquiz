(function() {
    const level4 = {
        name: {
            en: "Galaxies and Universe",
            es: "Galaxias y Universo",
            de: "Galaxien und Universum",
            nl: "Sterrenstelsels en Heelal"
        },
        questions: [
            {
                question: {
                    en: "What is a galaxy?",
                    es: "¿Qué es una galaxia?",
                    de: "Was ist eine Galaxie?",
                    nl: "Wat is een sterrenstelsel?"
                },
                options: [
                    { en: "A huge collection of stars, gas, and dust held together by gravity", es: "Una enorme colección de estrellas, gas y polvo unidas por la gravedad", de: "Eine riesige Sammlung von Sternen, Gas und Staub, die von der Schwerkraft zusammengehalten wird", nl: "Een enorme verzameling sterren, gas en stof die door zwaartekracht bij elkaar wordt gehouden" },
                    { en: "A single very large star", es: "Una sola estrella muy grande", de: "Ein einzelner sehr großer Stern", nl: "Een enkele zeer grote ster" },
                    { en: "A planet with many moons", es: "Un planeta con muchas lunas", de: "Ein Planet mit vielen Monden", nl: "Een planeet met veel manen" },
                    { en: "A type of comet", es: "Un tipo de cometa", de: "Eine Art Komet", nl: "Een soort komeet" }
                ],
                correct: 0,
                explanation: {
                    en: "A galaxy is a massive cosmic structure containing billions of stars, planets, gas, dust, and dark matter bound together by gravity.",
                    es: "Una galaxia es una estructura cósmica masiva que contiene miles de millones de estrellas, planetas, gas, polvo y materia oscura unidos por la gravedad.",
                    de: "Eine Galaxie ist eine massive kosmische Struktur, die Milliarden von Sternen, Planeten, Gas, Staub und dunkle Materie enthält, die durch die Schwerkraft zusammengehalten werden.",
                    nl: "Een sterrenstelsel is een massieve kosmische structuur die miljarden sterren, planeten, gas, stof en donkere materie bevat die door zwaartekracht bij elkaar worden gehouden."
                }
            },
            {
                question: {
                    en: "What is the name of our galaxy?",
                    es: "¿Cuál es el nombre de nuestra galaxia?",
                    de: "Wie heißt unsere Galaxie?",
                    nl: "Wat is de naam van ons sterrenstelsel?"
                },
                options: [
                    { en: "The Milky Way", es: "La Vía Láctea", de: "Die Milchstraße", nl: "De Melkweg" },
                    { en: "Andromeda", es: "Andrómeda", de: "Andromeda", nl: "Andromeda" },
                    { en: "The Spiral Galaxy", es: "La Galaxia Espiral", de: "Die Spiralgalaxie", nl: "Het Spiraalsterrenstelsel" },
                    { en: "The Star Galaxy", es: "La Galaxia Estrella", de: "Die Sterngalaxie", nl: "Het Sterrensterrenstelsel" }
                ],
                correct: 0,
                explanation: {
                    en: "The Milky Way is our home galaxy, named for its milky appearance in the night sky when viewed from Earth.",
                    es: "La Vía Láctea es nuestra galaxia hogar, nombrada por su apariencia lechosa en el cielo nocturno cuando se ve desde la Tierra.",
                    de: "Die Milchstraße ist unsere Heimatgalaxie, benannt nach ihrem milchigen Aussehen am Nachthimmel, wenn sie von der Erde aus betrachtet wird.",
                    nl: "De Melkweg is ons thuissterrenstelsel, genoemd naar zijn melkachtige verschijning aan de nachtelijke hemel wanneer gezien vanaf de Aarde."
                }
            },
            {
                question: {
                    en: "What shape is our Milky Way galaxy?",
                    es: "¿Qué forma tiene nuestra galaxia Vía Láctea?",
                    de: "Welche Form hat unsere Milchstraßengalaxie?",
                    nl: "Welke vorm heeft ons Melkwegsterrenstelsel?"
                },
                options: [
                    { en: "Spiral", es: "Espiral", de: "Spiral", nl: "Spiraal" },
                    { en: "Round circle", es: "Círculo redondo", de: "Runder Kreis", nl: "Ronde cirkel" },
                    { en: "Square", es: "Cuadrada", de: "Quadrat", nl: "Vierkant" },
                    { en: "Triangle", es: "Triángulo", de: "Dreieck", nl: "Driehoek" }
                ],
                correct: 0,
                explanation: {
                    en: "The Milky Way is a spiral galaxy with curved arms containing stars, gas, and dust extending from a central bulge.",
                    es: "La Vía Láctea es una galaxia espiral con brazos curvados que contienen estrellas, gas y polvo extendiéndose desde un bulbo central.",
                    de: "Die Milchstraße ist eine Spiralgalaxie mit gebogenen Armen, die Sterne, Gas und Staub enthalten und sich von einer zentralen Ausbuchtung erstrecken.",
                    nl: "De Melkweg is een spiraalstelsel met gebogen armen die sterren, gas en stof bevatten die zich uitstrekken vanaf een centrale verdikking."
                }
            },
            {
                question: {
                    en: "How many stars are estimated to be in our galaxy?",
                    es: "¿Cuántas estrellas se estima que hay en nuestra galaxia?",
                    de: "Wie viele Sterne gibt es schätzungsweise in unserer Galaxie?",
                    nl: "Hoeveel sterren zitten er naar schatting in ons sterrenstelsel?"
                },
                options: [
                    { en: "100-400 billion", es: "100-400 mil millones", de: "100-400 Milliarden", nl: "100-400 miljard" },
                    { en: "1 million", es: "1 millón", de: "1 Million", nl: "1 miljoen" },
                    { en: "1 thousand", es: "1 mil", de: "1 Tausend", nl: "1 duizend" },
                    { en: "10 trillion", es: "10 billones", de: "10 Billionen", nl: "10 biljoen" }
                ],
                correct: 0,
                explanation: {
                    en: "Our galaxy contains an enormous number of stars, making it one of the larger galaxies in the Local Group.",
                    es: "Nuestra galaxia contiene un número enorme de estrellas, haciéndola una de las galaxias más grandes en el Grupo Local.",
                    de: "Unsere Galaxie enthält eine enorme Anzahl von Sternen und macht sie zu einer der größeren Galaxien in der Lokalen Gruppe.",
                    nl: "Ons sterrenstelsel bevat een enorm aantal sterren, waardoor het een van de grotere sterrenstelsels in de Lokale Groep is."
                }
            },
            {
                question: {
                    en: "What is at the center of most galaxies?",
                    es: "¿Qué hay en el centro de la mayoría de las galaxias?",
                    de: "Was ist im Zentrum der meisten Galaxien?",
                    nl: "Wat staat in het midden van de meeste sterrenstelsels?"
                },
                options: [
                    { en: "A supermassive black hole", es: "Un agujero negro supermasivo", de: "Ein supermassereiches schwarzes Loch", nl: "Een superzwaar zwart gat" },
                    { en: "A giant star", es: "Una estrella gigante", de: "Ein Riesenstern", nl: "Een reuzenster" },
                    { en: "A planet", es: "Un planeta", de: "Ein Planet", nl: "Een planeet" },
                    { en: "Empty space", es: "Espacio vacío", de: "Leerer Raum", nl: "Lege ruimte" }
                ],
                correct: 0,
                explanation: {
                    en: "Supermassive black holes provide the gravitational anchor that holds galaxies together and influences their formation and evolution.",
                    es: "Los agujeros negros supermasivos proporcionan el ancla gravitacional que mantiene unidas las galaxias e influye en su formación y evolución.",
                    de: "Supermassereiche schwarze Löcher bieten den gravitativen Anker, der Galaxien zusammenhält und ihre Entstehung und Entwicklung beeinflusst.",
                    nl: "Superzware zwarte gaten zorgen voor het gravitationele anker dat sterrenstelsels bij elkaar houdt en hun vorming en evolutie beïnvloedt."
                }
            },
            {
                question: {
                    en: "What is the closest galaxy to the Milky Way?",
                    es: "¿Cuál es la galaxia más cercana a la Vía Láctea?",
                    de: "Was ist die nächste Galaxie zur Milchstraße?",
                    nl: "Wat is het dichtstbijzijnde sterrenstelsel bij de Melkweg?"
                },
                options: [
                    { en: "Andromeda Galaxy", es: "Galaxia de Andrómeda", de: "Andromeda-Galaxie", nl: "Andromedanevel" },
                    { en: "Whirlpool Galaxy", es: "Galaxia del Remolino", de: "Whirlpool-Galaxie", nl: "Wervelwindsterrenstelsel" },
                    { en: "Triangulum Galaxy", es: "Galaxia del Triángulo", de: "Dreiecksgalaxie", nl: "Driehoeksnevel" },
                    { en: "Sombrero Galaxy", es: "Galaxia del Sombrero", de: "Sombrero-Galaxie", nl: "Sombrerosterrenstelsel" }
                ],
                correct: 0,
                explanation: {
                    en: "The Andromeda Galaxy is our nearest major galactic neighbor and is approaching us at about 250,000 mph.",
                    es: "La Galaxia de Andrómeda es nuestro vecino galáctico mayor más cercano y se acerca a nosotros a aproximadamente 400,000 km/h.",
                    de: "Die Andromeda-Galaxie ist unser nächster großer galaktischer Nachbar und nähert sich uns mit etwa 400.000 km/h.",
                    nl: "Het Andromedanevel is onze dichtstbijzijnde grote galactische buur en nadert ons met ongeveer 400.000 km/u."
                }
            },
            {
                question: {
                    en: "What will happen when the Milky Way and Andromeda galaxies meet?",
                    es: "¿Qué pasará cuando las galaxias Vía Láctea y Andrómeda se encuentren?",
                    de: "Was wird passieren, wenn sich die Milchstraße und die Andromeda-Galaxie treffen?",
                    nl: "Wat zal er gebeuren wanneer de Melkweg en Andromeda sterrenstelsels elkaar ontmoeten?"
                },
                options: [
                    { en: "They will merge into one larger galaxy", es: "Se fusionarán en una galaxia más grande", de: "Sie werden zu einer größeren Galaxie verschmelzen", nl: "Ze zullen samenvoegen tot één groter sterrenstelsel" },
                    { en: "They will bounce off each other", es: "Rebotarán una contra la otra", de: "Sie werden voneinander abprallen", nl: "Ze zullen van elkaar afketsen" },
                    { en: "They will destroy each other", es: "Se destruirán mutuamente", de: "Sie werden sich gegenseitig zerstören", nl: "Ze zullen elkaar vernietigen" },
                    { en: "Nothing will happen", es: "No pasará nada", de: "Es wird nichts passieren", nl: "Er zal niets gebeuren" }
                ],
                correct: 0,
                explanation: {
                    en: "In about 4.5 billion years, gravity will pull our galaxies together in a slow cosmic dance lasting millions of years.",
                    es: "En aproximadamente 4.5 mil millones de años, la gravedad unirá nuestras galaxias en una danza cósmica lenta que durará millones de años.",
                    de: "In etwa 4,5 Milliarden Jahren wird die Schwerkraft unsere Galaxien in einem langsamen kosmischen Tanz über Millionen von Jahren zusammenziehen.",
                    nl: "Over ongeveer 4,5 miljard jaar zal zwaartekracht onze sterrenstelsels samentrekken in een langzame kosmische dans die miljoenen jaren duurt."
                }
            },
            {
                question: {
                    en: "What is the universe?",
                    es: "¿Qué es el universo?",
                    de: "Was ist das Universum?",
                    nl: "Wat is het heelal?"
                },
                options: [
                    { en: "Everything that exists - all matter, energy, space, and time", es: "Todo lo que existe - toda la materia, energía, espacio y tiempo", de: "Alles was existiert - alle Materie, Energie, Raum und Zeit", nl: "Alles wat bestaat - alle materie, energie, ruimte en tijd" },
                    { en: "Just our solar system", es: "Solo nuestro sistema solar", de: "Nur unser Sonnensystem", nl: "Alleen ons zonnestelsel" },
                    { en: "Only our galaxy", es: "Solo nuestra galaxia", de: "Nur unsere Galaxie", nl: "Alleen ons sterrenstelsel" },
                    { en: "The space between planets", es: "El espacio entre planetas", de: "Der Raum zwischen Planeten", nl: "De ruimte tussen planeten" }
                ],
                correct: 0,
                explanation: {
                    en: "The universe encompasses everything we know to exist, from the smallest particles to the largest structures in space.",
                    es: "El universo abarca todo lo que sabemos que existe, desde las partículas más pequeñas hasta las estructuras más grandes en el espacio.",
                    de: "Das Universum umfasst alles, was wir als existierend kennen, von den kleinsten Teilchen bis zu den größten Strukturen im Weltraum.",
                    nl: "Het heelal omvat alles wat we kennen als bestaand, van de kleinste deeltjes tot de grootste structuren in de ruimte."
                }
            },
            {
                question: {
                    en: "How old is the universe estimated to be?",
                    es: "¿Qué edad se estima que tiene el universo?",
                    de: "Wie alt ist das Universum schätzungsweise?",
                    nl: "Hoe oud wordt het heelal geschat?"
                },
                options: [
                    { en: "About 13.8 billion years", es: "Aproximadamente 13.8 mil millones de años", de: "Etwa 13,8 Milliarden Jahre", nl: "Ongeveer 13,8 miljard jaar" },
                    { en: "1 million years", es: "1 millón de años", de: "1 Million Jahre", nl: "1 miljoen jaar" },
                    { en: "100 billion years", es: "100 mil millones de años", de: "100 Milliarden Jahre", nl: "100 miljard jaar" },
                    { en: "6,000 years", es: "6,000 años", de: "6.000 Jahre", nl: "6.000 jaar" }
                ],
                correct: 0,
                explanation: {
                    en: "This age is determined by measuring the cosmic microwave background radiation and the expansion rate of the universe.",
                    es: "Esta edad se determina midiendo la radiación cósmica de fondo de microondas y la tasa de expansión del universo.",
                    de: "Dieses Alter wird durch Messung der kosmischen Mikrowellen-Hintergrundstrahlung und der Expansionsrate des Universums bestimmt.",
                    nl: "Deze leeftijd wordt bepaald door het meten van de kosmische achtergrondstraling en de uitbreidingssnelheid van het heelal."
                }
            },
            {
                question: {
                    en: "What is the Big Bang?",
                    es: "¿Qué es el Big Bang?",
                    de: "Was ist der Urknall?",
                    nl: "Wat is de Oerknal?"
                },
                options: [
                    { en: "The event that started the expansion of the universe", es: "El evento que comenzó la expansión del universo", de: "Das Ereignis, das die Ausdehnung des Universums begann", nl: "De gebeurtenis die de uitbreiding van het heelal begon" },
                    { en: "The explosion of a star", es: "La explosión de una estrella", de: "Die Explosion eines Sterns", nl: "De explosie van een ster" },
                    { en: "The collision of two planets", es: "La colisión de dos planetas", de: "Die Kollision zweier Planeten", nl: "De botsing van twee planeten" },
                    { en: "A loud noise in space", es: "Un ruido fuerte en el espacio", de: "Ein lautes Geräusch im Weltraum", nl: "Een hard geluid in de ruimte" }
                ],
                correct: 0,
                explanation: {
                    en: "The Big Bang theory describes how the universe began from an extremely hot, dense point and has been expanding ever since.",
                    es: "La teoría del Big Bang describe cómo el universo comenzó desde un punto extremadamente caliente y denso y ha estado expandiéndose desde entonces.",
                    de: "Die Urknalltheorie beschreibt, wie das Universum von einem extrem heißen, dichten Punkt begann und sich seitdem ausdehnt.",
                    nl: "De Oerknaltheorie beschrijft hoe het heelal begon vanuit een extreem heet, dicht punt en sindsdien uitbreidt."
                }
            },
            {
                question: {
                    en: "Is the universe expanding or shrinking?",
                    es: "¿El universo se está expandiendo o contrayendo?",
                    de: "Expandiert oder schrumpft das Universum?",
                    nl: "Zet het heelal uit of krimpt het?"
                },
                options: [
                    { en: "Expanding", es: "Expandiéndose", de: "Expandierend", nl: "Uitbreidend" },
                    { en: "Shrinking", es: "Contrayéndose", de: "Schrumpfend", nl: "Krimpend" },
                    { en: "Staying the same size", es: "Manteniéndose del mismo tamaño", de: "Bleibt gleich groß", nl: "Blijft hetzelfde formaat" },
                    { en: "Nobody knows", es: "Nadie lo sabe", de: "Niemand weiß es", nl: "Niemand weet het" }
                ],
                correct: 0,
                explanation: {
                    en: "The universe is expanding, with galaxies moving away from each other as space itself stretches.",
                    es: "El universo se está expandiendo, con galaxias alejándose unas de otras mientras el espacio mismo se estira.",
                    de: "Das Universum expandiert, wobei sich Galaxien voneinander entfernen, während sich der Raum selbst ausdehnt.",
                    nl: "Het heelal breidt uit, met sterrenstelsels die van elkaar wegbewegen terwijl de ruimte zelf uitrekt."
                }
            },
            {
                question: {
                    en: "What are the three main types of galaxies?",
                    es: "¿Cuáles son los tres tipos principales de galaxias?",
                    de: "Was sind die drei Haupttypen von Galaxien?",
                    nl: "Wat zijn de drie hoofdtypen van sterrenstelsels?"
                },
                options: [
                    { en: "Spiral, elliptical, and irregular", es: "Espiral, elíptica e irregular", de: "Spiral-, elliptische und irreguläre", nl: "Spiraal, elliptisch en onregelmatig" },
                    { en: "Big, medium, and small", es: "Grande, mediana y pequeña", de: "Groß, mittel und klein", nl: "Groot, middel en klein" },
                    { en: "Red, blue, and yellow", es: "Roja, azul y amarilla", de: "Rot, blau und gelb", nl: "Rood, blauw en geel" },
                    { en: "Round, square, and triangle", es: "Redonda, cuadrada y triangular", de: "Rund, quadratisch und dreieckig", nl: "Rond, vierkant en driehoekig" }
                ],
                correct: 0,
                explanation: {
                    en: "These three galaxy types are classified by their shape and structure, each forming through different cosmic processes.",
                    es: "Estos tres tipos de galaxias se clasifican por su forma y estructura, cada uno formándose a través de diferentes procesos cósmicos.",
                    de: "Diese drei Galaxientypen werden nach ihrer Form und Struktur klassifiziert, wobei jeder durch verschiedene kosmische Prozesse entsteht.",
                    nl: "Deze drie soorten sterrenstelsels worden geclassificeerd naar hun vorm en structuur, elk gevormd door verschillende kosmische processen."
                }
            },
            {
                question: {
                    en: "What is dark matter?",
                    es: "¿Qué es la materia oscura?",
                    de: "Was ist dunkle Materie?",
                    nl: "Wat is donkere materie?"
                },
                options: [
                    { en: "Invisible matter that we can't see but affects gravity", es: "Materia invisible que no podemos ver pero afecta la gravedad", de: "Unsichtbare Materie, die wir nicht sehen können, aber die Schwerkraft beeinflusst", nl: "Onzichtbare materie die we niet kunnen zien maar die de zwaartekracht beïnvloedt" },
                    { en: "Very dark stars", es: "Estrellas muy oscuras", de: "Sehr dunkle Sterne", nl: "Zeer donkere sterren" },
                    { en: "Black planets", es: "Planetas negros", de: "Schwarze Planeten", nl: "Zwarte planeten" },
                    { en: "Empty space", es: "Espacio vacío", de: "Leerer Raum", nl: "Lege ruimte" }
                ],
                correct: 0,
                explanation: {
                    en: "Dark matter doesn't emit light but its gravitational effects hold galaxies together and shape cosmic structure.",
                    es: "La materia oscura no emite luz pero sus efectos gravitacionales mantienen unidas las galaxias y dan forma a la estructura cósmica.",
                    de: "Dunkle Materie emittiert kein Licht, aber ihre gravitativen Effekte halten Galaxien zusammen und formen die kosmische Struktur.",
                    nl: "Donkere materie zendt geen licht uit maar zijn gravitationele effecten houden sterrenstelsels samen en vormen kosmische structuur."
                }
            },
            {
                question: {
                    en: "What is dark energy?",
                    es: "¿Qué es la energía oscura?",
                    de: "Was ist dunkle Energie?",
                    nl: "Wat is donkere energie?"
                },
                options: [
                    { en: "A mysterious force causing the universe to expand faster", es: "Una fuerza misteriosa que hace que el universo se expanda más rápido", de: "Eine geheimnisvolle Kraft, die das Universum schneller expandieren lässt", nl: "Een mysterieuze kracht die het heelal sneller doet uitbreiden" },
                    { en: "Energy from black holes", es: "Energía de los agujeros negros", de: "Energie aus schwarzen Löchern", nl: "Energie van zwarte gaten" },
                    { en: "The energy of dark stars", es: "La energía de las estrellas oscuras", de: "Die Energie dunkler Sterne", nl: "De energie van donkere sterren" },
                    { en: "Electricity in space", es: "Electricidad en el espacio", de: "Elektrizität im Weltraum", nl: "Elektriciteit in de ruimte" }
                ],
                correct: 0,
                explanation: {
                    en: "Dark energy is the mysterious force driving the accelerating expansion of the universe, making up about 68% of it.",
                    es: "La energía oscura es la fuerza misteriosa que impulsa la expansión acelerada del universo, constituyendo aproximadamente el 68% de él.",
                    de: "Dunkle Energie ist die geheimnisvolle Kraft, die die beschleunigte Expansion des Universums antreibt und etwa 68% davon ausmacht.",
                    nl: "Donkere energie is de mysterieuze kracht die de versnellende uitbreiding van het heelal aandrijft en ongeveer 68% ervan uitmaakt."
                }
            },
            {
                question: {
                    en: "What percentage of the universe is made of ordinary matter (atoms)?",
                    es: "¿Qué porcentaje del universo está hecho de materia ordinaria (átomos)?",
                    de: "Wie viel Prozent des Universums besteht aus gewöhnlicher Materie (Atome)?",
                    nl: "Welk percentage van het heelal bestaat uit gewone materie (atomen)?"
                },
                options: [
                    { en: "About 5%", es: "Aproximadamente 5%", de: "Etwa 5%", nl: "Ongeveer 5%" },
                    { en: "About 50%", es: "Aproximadamente 50%", de: "Etwa 50%", nl: "Ongeveer 50%" },
                    { en: "About 95%", es: "Aproximadamente 95%", de: "Etwa 95%", nl: "Ongeveer 95%" },
                    { en: "About 25%", es: "Aproximadamente 25%", de: "Etwa 25%", nl: "Ongeveer 25%" }
                ],
                correct: 0,
                explanation: {
                    en: "Only a tiny fraction of the universe consists of ordinary matter like stars and planets - most is dark matter and dark energy.",
                    es: "Solo una pequeña fracción del universo consiste en materia ordinaria como estrellas y planetas - la mayoría es materia oscura y energía oscura.",
                    de: "Nur ein winziger Bruchteil des Universums besteht aus gewöhnlicher Materie wie Sternen und Planeten - das meiste ist dunkle Materie und dunkle Energie.",
                    nl: "Slechts een kleine fractie van het heelal bestaat uit gewone materie zoals sterren en planeten - de meeste is donkere materie en donkere energie."
                }
            },
            {
                question: {
                    en: "What are galaxy clusters?",
                    es: "¿Qué son los cúmulos de galaxias?",
                    de: "Was sind Galaxienhaufen?",
                    nl: "Wat zijn sterrenstelselhopen?"
                },
                options: [
                    { en: "Groups of galaxies held together by gravity", es: "Grupos de galaxias unidas por la gravedad", de: "Gruppen von Galaxien, die von der Schwerkraft zusammengehalten werden", nl: "Groepen sterrenstelsels die door zwaartekracht bij elkaar worden gehouden" },
                    { en: "Groups of stars in one galaxy", es: "Grupos de estrellas en una galaxia", de: "Gruppen von Sternen in einer Galaxie", nl: "Groepen sterren in één sterrenstelsel" },
                    { en: "Groups of planets", es: "Grupos de planetas", de: "Gruppen von Planeten", nl: "Groepen planeten" },
                    { en: "Collections of black holes", es: "Colecciones de agujeros negros", de: "Sammlungen schwarzer Löcher", nl: "Verzamelingen zwarte gaten" }
                ],
                correct: 0,
                explanation: {
                    en: "Galaxy clusters are the largest gravitationally bound structures in the universe, containing hundreds to thousands of galaxies.",
                    es: "Los cúmulos de galaxias son las estructuras gravitacionalmente ligadas más grandes del universo, conteniendo cientos a miles de galaxias.",
                    de: "Galaxienhaufen sind die größten gravitativ gebundenen Strukturen im Universum und enthalten Hunderte bis Tausende von Galaxien.",
                    nl: "Sterrenstelselhopen zijn de grootste gravitationeel gebonden structuren in het heelal, die honderden tot duizenden sterrenstelsels bevatten."
                }
            },
            {
                question: {
                    en: "What is a quasar?",
                    es: "¿Qué es un quásar?",
                    de: "Was ist ein Quasar?",
                    nl: "Wat is een quasar?"
                },
                options: [
                    { en: "An extremely bright object powered by a supermassive black hole", es: "Un objeto extremadamente brillante alimentado por un agujero negro supermasivo", de: "Ein extrem helles Objekt, das von einem supermassereichem schwarzen Loch angetrieben wird", nl: "Een extreem helder object aangedreven door een superzwaar zwart gat" },
                    { en: "A type of star", es: "Un tipo de estrella", de: "Eine Art Stern", nl: "Een soort ster" },
                    { en: "A small galaxy", es: "Una galaxia pequeña", de: "Eine kleine Galaxie", nl: "Een klein sterrenstelsel" },
                    { en: "A planet with rings", es: "Un planeta con anillos", de: "Ein Planet mit Ringen", nl: "Een planeet met ringen" }
                ],
                correct: 0,
                explanation: {
                    en: "Quasars are among the most luminous objects in the universe, powered by matter falling into supermassive black holes.",
                    es: "Los quásares están entre los objetos más luminosos del universo, alimentados por materia que cae en agujeros negros supermasivos.",
                    de: "Quasare gehören zu den leuchtendsten Objekten im Universum und werden von Materie angetrieben, die in supermassereiche schwarze Löcher fällt.",
                    nl: "Quasars behoren tot de meest lumineuze objecten in het heelal, aangedreven door materie die in superzware zwarte gaten valt."
                }
            },
            {
                question: {
                    en: "How do we know galaxies are moving away from us?",
                    es: "¿Cómo sabemos que las galaxias se alejan de nosotros?",
                    de: "Woher wissen wir, dass sich Galaxien von uns entfernen?",
                    nl: "Hoe weten we dat sterrenstelsels van ons wegbewegen?"
                },
                options: [
                    { en: "Their light is redshifted (stretched to longer wavelengths)", es: "Su luz está desplazada al rojo (estirada a longitudes de onda más largas)", de: "Ihr Licht ist rotverschoben (zu längeren Wellenlängen gedehnt)", nl: "Hun licht is roodverschoven (uitgerekt naar langere golflengtes)" },
                    { en: "They look smaller each year", es: "Se ven más pequeñas cada año", de: "Sie sehen jedes Jahr kleiner aus", nl: "Ze zien er elk jaar kleiner uit" },
                    { en: "We can see them moving with telescopes", es: "Podemos verlas moverse con telescopios", de: "Wir können sie sich mit Teleskopen bewegen sehen", nl: "We kunnen ze zien bewegen met telescopen" },
                    { en: "They send us radio messages", es: "Nos envían mensajes de radio", de: "Sie senden uns Radiobotschaften", nl: "Ze sturen ons radioberichten" }
                ],
                correct: 0,
                explanation: {
                    en: "Redshift occurs when light wavelengths stretch as objects move away, similar to how a siren sounds lower when moving away.",
                    es: "El corrimiento al rojo ocurre cuando las longitudes de onda de la luz se estiran mientras los objetos se alejan, similar a cómo una sirena suena más grave cuando se aleja.",
                    de: "Rotverschiebung tritt auf, wenn sich Lichtwellenlängen dehnen, während sich Objekte entfernen, ähnlich wie eine Sirene tiefer klingt, wenn sie sich entfernt.",
                    nl: "Roodverschuiving treedt op wanneer lichtgolflengtes uitrekken terwijl objecten wegbewegen, vergelijkbaar met hoe een sirene lager klinkt wanneer hij wegbeweegt."
                }
            },
            {
                question: {
                    en: "What is the cosmic microwave background?",
                    es: "¿Qué es la radiación cósmica de fondo?",
                    de: "Was ist die kosmische Hintergrundstrahlung?",
                    nl: "Wat is de kosmische achtergrondstraling?"
                },
                options: [
                    { en: "Leftover radiation from the Big Bang", es: "Radiación residual del Big Bang", de: "Übrig gebliebene Strahlung vom Urknall", nl: "Overgebleven straling van de Oerknal" },
                    { en: "Light from distant stars", es: "Luz de estrellas distantes", de: "Licht von entfernten Sternen", nl: "Licht van verre sterren" },
                    { en: "Radio waves from planets", es: "Ondas de radio de planetas", de: "Radiowellen von Planeten", nl: "Radiogolven van planeten" },
                    { en: "Signals from aliens", es: "Señales de extraterrestres", de: "Signale von Außerirdischen", nl: "Signalen van buitenaardse wezens" }
                ],
                correct: 0,
                explanation: {
                    en: "The cosmic microwave background is ancient light from when the universe first became transparent, about 380,000 years after the Big Bang.",
                    es: "La radiación cósmica de fondo es luz antigua de cuando el universo se volvió transparente por primera vez, aproximadamente 380,000 años después del Big Bang.",
                    de: "Die kosmische Mikrowellen-Hintergrundstrahlung ist uraltes Licht aus der Zeit, als das Universum erstmals durchsichtig wurde, etwa 380.000 Jahre nach dem Urknall.",
                    nl: "De kosmische achtergrondstraling is oud licht van toen het heelal voor het eerst transparant werd, ongeveer 380.000 jaar na de Oerknal."
                }
            },
            {
                question: {
                    en: "What is a black hole?",
                    es: "¿Qué es un agujero negro?",
                    de: "Was ist ein schwarzes Loch?",
                    nl: "Wat is een zwart gat?"
                },
                options: [
                    { en: "A region where gravity is so strong that nothing can escape", es: "Una región donde la gravedad es tan fuerte que nada puede escapar", de: "Ein Bereich, wo die Schwerkraft so stark ist, dass nichts entkommen kann", nl: "Een gebied waar zwaartekracht zo sterk is dat niets kan ontsnappen" },
                    { en: "A hole in space", es: "Un agujero en el espacio", de: "Ein Loch im Weltraum", nl: "Een gat in de ruimte" },
                    { en: "A very dark star", es: "Una estrella muy oscura", de: "Ein sehr dunkler Stern", nl: "Een heel donkere ster" },
                    { en: "A tunnel to another universe", es: "Un túnel a otro universo", de: "Ein Tunnel zu einem anderen Universum", nl: "Een tunnel naar een ander heelal" }
                ],
                correct: 0,
                explanation: {
                    en: "Black holes form when massive stars collapse, creating regions where gravity is so intense that space and time are severely distorted.",
                    es: "Los agujeros negros se forman cuando estrellas masivas colapsan, creando regiones donde la gravedad es tan intensa que el espacio y el tiempo se distorsionan severamente.",
                    de: "Schwarze Löcher entstehen, wenn massive Sterne kollabieren und Regionen schaffen, wo die Schwerkraft so intensiv ist, dass Raum und Zeit stark verzerrt werden.",
                    nl: "Zwarte gaten vormen zich wanneer massieve sterren instorten, en creëren gebieden waar zwaartekracht zo intens is dat ruimte en tijd ernstig vervormd worden."
                }
            },
            {
                question: {
                    en: "What happens to light near a black hole?",
                    es: "¿Qué le pasa a la luz cerca de un agujero negro?",
                    de: "Was passiert mit Licht in der Nähe eines schwarzen Lochs?",
                    nl: "Wat gebeurt er met licht in de buurt van een zwart gat?"
                },
                options: [
                    { en: "It gets pulled in and cannot escape", es: "Es atraída y no puede escapar", de: "Es wird hineingezogen und kann nicht entkommen", nl: "Het wordt naar binnen gezogen en kan niet ontsnappen" },
                    { en: "It becomes brighter", es: "Se vuelve más brillante", de: "Es wird heller", nl: "Het wordt helderder" },
                    { en: "It changes color to green", es: "Cambia de color a verde", de: "Es ändert die Farbe zu grün", nl: "Het verandert van kleur naar groen" },
                    { en: "It moves faster", es: "Se mueve más rápido", de: "Es bewegt sich schneller", nl: "Het beweegt sneller" }
                ],
                correct: 0,
                explanation: {
                    en: "Once light crosses the event horizon of a black hole, it cannot escape because the escape velocity exceeds the speed of light.",
                    es: "Una vez que la luz cruza el horizonte de eventos de un agujero negro, no puede escapar porque la velocidad de escape excede la velocidad de la luz.",
                    de: "Sobald Licht den Ereignishorizont eines schwarzen Lochs überquert, kann es nicht entkommen, weil die Fluchtgeschwindigkeit die Lichtgeschwindigkeit übersteigt.",
                    nl: "Zodra licht de gebeurtenishorizon van een zwart gat overschrijdt, kan het niet ontsnappen omdat de ontsnappingssnelheid de lichtsnelheid overschrijdt."
                }
            },
            {
                question: {
                    en: "Where do most galaxies exist in the universe?",
                    es: "¿Dónde existen la mayoría de las galaxias en el universo?",
                    de: "Wo existieren die meisten Galaxien im Universum?",
                    nl: "Waar bestaan de meeste sterrenstelsels in het heelal?"
                },
                options: [
                    { en: "In groups and clusters, not alone", es: "En grupos y cúmulos, no solas", de: "In Gruppen und Haufen, nicht allein", nl: "In groepen en clusters, niet alleen" },
                    { en: "Scattered randomly and alone", es: "Dispersas aleatoriamente y solas", de: "Zufällig verstreut und allein", nl: "Willekeurig verspreid en alleen" },
                    { en: "Only at the edge of the universe", es: "Solo en el borde del universo", de: "Nur am Rand des Universums", nl: "Alleen aan de rand van het heelal" },
                    { en: "Only in the center of the universe", es: "Solo en el centro del universo", de: "Nur im Zentrum des Universums", nl: "Alleen in het midden van het heelal" }
                ],
                correct: 0,
                explanation: {
                    en: "Galaxies tend to cluster together due to gravity, forming a cosmic web of filaments with vast empty regions called voids.",
                    es: "Las galaxias tienden a agruparse debido a la gravedad, formando una red cósmica de filamentos con vastas regiones vacías llamadas vacíos.",
                    de: "Galaxien neigen dazu, sich aufgrund der Schwerkraft zu gruppieren und bilden ein kosmisches Netz aus Filamenten mit weiten leeren Regionen, die Voids genannt werden.",
                    nl: "Sterrenstelsels hebben de neiging om samen te klitten door zwaartekracht, en vormen een kosmisch web van filamenten met uitgestrekte lege gebieden genaamd voids."
                }
            },
            {
                question: {
                    en: "What is the Local Group?",
                    es: "¿Qué es el Grupo Local?",
                    de: "Was ist die Lokale Gruppe?",
                    nl: "Wat is de Lokale Groep?"
                },
                options: [
                    { en: "The galaxy cluster containing the Milky Way and Andromeda", es: "El cúmulo de galaxias que contiene la Vía Láctea y Andrómeda", de: "Der Galaxienhaufen, der die Milchstraße und Andromeda enthält", nl: "De sterrenstelselhoop die de Melkweg en Andromeda bevat" },
                    { en: "Stars near our solar system", es: "Estrellas cerca de nuestro sistema solar", de: "Sterne in der Nähe unseres Sonnensystems", nl: "Sterren in de buurt van ons zonnestelsel" },
                    { en: "Planets in our solar system", es: "Planetas en nuestro sistema solar", de: "Planeten in unserem Sonnensystem", nl: "Planeten in ons zonnestelsel" },
                    { en: "People living in our area", es: "Gente que vive en nuestra área", de: "Menschen, die in unserer Gegend leben", nl: "Mensen die in onze buurt wonen" }
                ],
                correct: 0,
                explanation: {
                    en: "The Local Group is our galactic neighborhood containing about 80 galaxies, dominated by the Milky Way and Andromeda.",
                    es: "El Grupo Local es nuestro vecindario galáctico que contiene aproximadamente 80 galaxias, dominado por la Vía Láctea y Andrómeda.",
                    de: "Die Lokale Gruppe ist unsere galaktische Nachbarschaft mit etwa 80 Galaxien, dominiert von der Milchstraße und Andromeda.",
                    nl: "De Lokale Groep is onze galactische buurt die ongeveer 80 sterrenstelsels bevat, gedomineerd door de Melkweg en Andromeda."
                }
            },
            {
                question: {
                    en: "How far away is the Andromeda Galaxy?",
                    es: "¿Qué tan lejos está la Galaxia de Andrómeda?",
                    de: "Wie weit entfernt ist die Andromeda-Galaxie?",
                    nl: "Hoe ver weg is het Andromedanevel?"
                },
                options: [
                    { en: "About 2.5 million light-years", es: "Aproximadamente 2.5 millones de años luz", de: "Etwa 2,5 Millionen Lichtjahre", nl: "Ongeveer 2,5 miljoen lichtjaren" },
                    { en: "100 light-years", es: "100 años luz", de: "100 Lichtjahre", nl: "100 lichtjaren" },
                    { en: "1 billion light-years", es: "1 mil millones de años luz", de: "1 Milliarde Lichtjahre", nl: "1 miljard lichtjaren" },
                    { en: "10,000 light-years", es: "10,000 años luz", de: "10.000 Lichtjahre", nl: "10.000 lichtjaren" }
                ],
                correct: 0,
                explanation: {
                    en: "Andromeda is approaching us and will collide with the Milky Way in about 4.5 billion years, despite this vast distance.",
                    es: "Andrómeda se acerca a nosotros y colisionará con la Vía Láctea en aproximadamente 4.5 mil millones de años, a pesar de esta vasta distancia.",
                    de: "Andromeda nähert sich uns und wird in etwa 4,5 Milliarden Jahren mit der Milchstraße kollidieren, trotz dieser gewaltigen Entfernung.",
                    nl: "Andromeda nadert ons en zal over ongeveer 4,5 miljard jaar botsen met de Melkweg, ondanks deze enorme afstand."
                }
            },
            {
                question: {
                    en: "What is the observable universe?",
                    es: "¿Qué es el universo observable?",
                    de: "Was ist das beobachtbare Universum?",
                    nl: "Wat is het waarneembare heelal?"
                },
                options: [
                    { en: "The part of the universe we can see with telescopes", es: "La parte del universo que podemos ver con telescopios", de: "Der Teil des Universums, den wir mit Teleskopen sehen können", nl: "Het deel van het heelal dat we kunnen zien met telescopen" },
                    { en: "Only our galaxy", es: "Solo nuestra galaxia", de: "Nur unsere Galaxie", nl: "Alleen ons sterrenstelsel" },
                    { en: "The entire universe", es: "Todo el universo", de: "Das gesamte Universum", nl: "Het hele heelal" },
                    { en: "Just nearby stars", es: "Solo estrellas cercanas", de: "Nur nahe Sterne", nl: "Alleen nabije sterren" }
                ],
                correct: 0,
                explanation: {
                    en: "The observable universe is limited by the distance light has traveled since the Big Bang, creating a cosmic horizon.",
                    es: "El universo observable está limitado por la distancia que la luz ha viajado desde el Big Bang, creando un horizonte cósmico.",
                    de: "Das beobachtbare Universum ist durch die Entfernung begrenzt, die das Licht seit dem Urknall zurückgelegt hat, wodurch ein kosmischer Horizont entsteht.",
                    nl: "Het waarneembare heelal is beperkt door de afstand die licht heeft afgelegd sinds de Oerknal, waardoor een kosmische horizon ontstaat."
                }
            },
            {
                question: {
                    en: "What is galactic rotation?",
                    es: "¿Qué es la rotación galáctica?",
                    de: "Was ist galaktische Rotation?",
                    nl: "Wat is galactische rotatie?"
                },
                options: [
                    { en: "How galaxies spin around their centers", es: "Cómo las galaxias giran alrededor de sus centros", de: "Wie sich Galaxien um ihre Zentren drehen", nl: "Hoe sterrenstelsels rond hun centra draaien" },
                    { en: "How planets rotate", es: "Cómo rotan los planetas", de: "Wie Planeten rotieren", nl: "Hoe planeten draaien" },
                    { en: "How stars move in circles", es: "Cómo las estrellas se mueven en círculos", de: "Wie sich Sterne in Kreisen bewegen", nl: "Hoe sterren in cirkels bewegen" },
                    { en: "The movement of comets", es: "El movimiento de los cometas", de: "Die Bewegung von Kometen", nl: "De beweging van kometen" }
                ],
                correct: 0,
                explanation: {
                    en: "Galactic rotation reveals the presence of dark matter, as stars move faster than expected based on visible matter alone.",
                    es: "La rotación galáctica revela la presencia de materia oscura, ya que las estrellas se mueven más rápido de lo esperado basado solo en la materia visible.",
                    de: "Die galaktische Rotation offenbart die Anwesenheit dunkler Materie, da sich Sterne schneller bewegen als aufgrund sichtbarer Materie allein erwartet.",
                    nl: "Galactische rotatie onthult de aanwezigheid van donkere materie, omdat sterren sneller bewegen dan verwacht op basis van alleen zichtbare materie."
                }
            },
            {
                question: {
                    en: "What is cosmic inflation?",
                    es: "¿Qué es la inflación cósmica?",
                    de: "Was ist kosmische Inflation?",
                    nl: "Wat is kosmische inflatie?"
                },
                options: [
                    { en: "Rapid expansion of the universe right after the Big Bang", es: "Expansión rápida del universo justo después del Big Bang", de: "Schnelle Ausdehnung des Universums direkt nach dem Urknall", nl: "Snelle uitbreiding van het heelal direct na de Oerknal" },
                    { en: "Stars getting bigger over time", es: "Estrellas que se hacen más grandes con el tiempo", de: "Sterne werden mit der Zeit größer", nl: "Sterren worden groter in de loop van de tijd" },
                    { en: "Galaxies inflating like balloons", es: "Galaxias inflándose como globos", de: "Galaxien blähen sich auf wie Ballons", nl: "Sterrenstelsels blazen op als ballonnen" },
                    { en: "Prices going up in space", es: "Los precios subiendo en el espacio", de: "Preise steigen im Weltraum", nl: "Prijzen stijgen in de ruimte" }
                ],
                correct: 0,
                explanation: {
                    en: "Cosmic inflation theory explains how the universe expanded incredibly rapidly in its first fraction of a second.",
                    es: "La teoría de la inflación cósmica explica cómo el universo se expandió increíblemente rápido en su primera fracción de segundo.",
                    de: "Die Theorie der kosmischen Inflation erklärt, wie sich das Universum in seinem ersten Sekundenbruchteil unglaublich schnell ausdehnte.",
                    nl: "De kosmische inflatietheorie verklaart hoe het heelal ongelooflijk snel uitbreidde in zijn eerste fractie van een seconde."
                }
            },
            {
                question: {
                    en: "What are the arms of spiral galaxies made of?",
                    es: "¿De qué están hechos los brazos de las galaxias espirales?",
                    de: "Woraus bestehen die Arme von Spiralgalaxien?",
                    nl: "Waar bestaan de armen van spiraalsterrenstelsels uit?"
                },
                options: [
                    { en: "Stars, gas, and dust in a spiral pattern", es: "Estrellas, gas y polvo en un patrón espiral", de: "Sterne, Gas und Staub in einem Spiralmuster", nl: "Sterren, gas en stof in een spiraalpatroon" },
                    { en: "Solid metal arms", es: "Brazos de metal sólido", de: "Feste Metallarme", nl: "Solide metalen armen" },
                    { en: "Empty space", es: "Espacio vacío", de: "Leerer Raum", nl: "Lege ruimte" },
                    { en: "Only very old stars", es: "Solo estrellas muy viejas", de: "Nur sehr alte Sterne", nl: "Alleen zeer oude sterren" }
                ],
                correct: 0,
                explanation: {
                    en: "Spiral arms are density waves that compress gas and trigger star formation, creating the bright, distinctive patterns we see.",
                    es: "Los brazos espirales son ondas de densidad que comprimen gas y desencadenan formación estelar, creando los patrones brillantes y distintivos que vemos.",
                    de: "Spiralarme sind Dichtewellen, die Gas komprimieren und Sternentstehung auslösen, wodurch die hellen, markanten Muster entstehen, die wir sehen.",
                    nl: "Spiraaларmen zijn dichtheidsgolven die gas comprimeren en stervorming veroorzaken, waardoor de heldere, onderscheidende patronen ontstaan die we zien."
                }
            },
            {
                question: {
                    en: "What is redshift in astronomy?",
                    es: "¿Qué es el corrimiento al rojo en astronomía?",
                    de: "Was ist Rotverschiebung in der Astronomie?",
                    nl: "Wat is roodverschuiving in de astronomie?"
                },
                options: [
                    { en: "Light from objects moving away appears more red", es: "La luz de objetos que se alejan aparece más roja", de: "Licht von sich entfernenden Objekten erscheint röter", nl: "Licht van objecten die wegbewegen lijkt roder" },
                    { en: "All stars are red colored", es: "Todas las estrellas son de color rojo", de: "Alle Sterne sind rot gefärbt", nl: "Alle sterren zijn rood gekleurd" },
                    { en: "Telescopes make everything look red", es: "Los telescopios hacen que todo se vea rojo", de: "Teleskope lassen alles rot aussehen", nl: "Telescopen laten alles er rood uitzien" },
                    { en: "The universe is painted red", es: "El universo está pintado de rojo", de: "Das Universum ist rot angestrichen", nl: "Het heelal is rood geverfd" }
                ],
                correct: 0,
                explanation: {
                    en: "Redshift is a key tool for measuring cosmic distances and understanding the expansion of the universe.",
                    es: "El corrimiento al rojo es una herramienta clave para medir distancias cósmicas y entender la expansión del universo.",
                    de: "Rotverschiebung ist ein Schlüsselwerkzeug zur Messung kosmischer Entfernungen und zum Verständnis der Expansion des Universums.",
                    nl: "Roodverschuiving is een belangrijk hulpmiddel voor het meten van kosmische afstanden en het begrijpen van de uitbreiding van het heelal."
                }
            },
            {
                question: {
                    en: "What will be the ultimate fate of the universe?",
                    es: "¿Cuál será el destino final del universo?",
                    de: "Was wird das letztendliche Schicksal des Universums sein?",
                    nl: "Wat zal het uiteindelijke lot van het heelal zijn?"
                },
                options: [
                    { en: "It will likely continue expanding and cooling forever", es: "Probablemente continuará expandiéndose y enfriándose para siempre", de: "Es wird sich wahrscheinlich für immer weiter ausdehnen und abkühlen", nl: "Het zal waarschijnlijk voor altijd blijven uitbreiden en afkoelen" },
                    { en: "It will collapse back into a point", es: "Colapsará de vuelta a un punto", de: "Es wird zurück zu einem Punkt kollabieren", nl: "Het zal terugvallen tot een punt" },
                    { en: "It will stop and stay the same", es: "Se detendrá y permanecerá igual", de: "Es wird stoppen und gleich bleiben", nl: "Het zal stoppen en hetzelfde blijven" },
                    { en: "It will restart with another Big Bang", es: "Se reiniciará con otro Big Bang", de: "Es wird mit einem anderen Urknall neu starten", nl: "Het zal opnieuw beginnen met een andere Oerknal" }
                ],
                correct: 0,
                explanation: {
                    en: "Current evidence suggests the universe will continue expanding and cooling forever in a scenario called the 'heat death.'",
                    es: "La evidencia actual sugiere que el universo continuará expandiéndose y enfriándose para siempre en un escenario llamado la 'muerte térmica.'",
                    de: "Aktuelle Beweise deuten darauf hin, dass sich das Universum in einem Szenario namens 'Wärmetod' für immer weiter ausdehnen und abkühlen wird.",
                    nl: "Huidige bewijzen suggereren dat het heelal voor altijd zal blijven uitbreiden en afkoelen in een scenario genaamd de 'warmtedood.'"
                }
            },
            {
                question: {
                    en: "What is the Great Attractor?",
                    es: "¿Qué es el Gran Atractor?",
                    de: "Was ist der Große Attraktor?",
                    nl: "Wat is de Grote Aantrekker?"
                },
                options: [
                    { en: "A gravitational anomaly pulling our galaxy and neighbors toward it", es: "Una anomalía gravitacional que atrae nuestra galaxia y vecinas hacia ella", de: "Eine gravitative Anomalie, die unsere Galaxie und Nachbarn zu sich hinzieht", nl: "Een gravitationele anomalie die ons sterrenstelsel en buren ernaartoe trekt" },
                    { en: "The largest star in the universe", es: "La estrella más grande del universo", de: "Der größte Stern im Universum", nl: "De grootste ster in het heelal" },
                    { en: "A theme park in space", es: "Un parque temático en el espacio", de: "Ein Themenpark im Weltraum", nl: "Een pretpark in de ruimte" },
                    { en: "The brightest galaxy", es: "La galaxia más brillante", de: "Die hellste Galaxie", nl: "Het helderste sterrenstelsel" }
                ],
                correct: 0,
                explanation: {
                    en: "The Great Attractor is a massive concentration of galaxies that's pulling our Local Group toward it at high speed.",
                    es: "El Gran Atractor es una concentración masiva de galaxias que está atrayendo nuestro Grupo Local hacia él a alta velocidad.",
                    de: "Der Große Attraktor ist eine massive Konzentration von Galaxien, die unsere Lokale Gruppe mit hoher Geschwindigkeit zu sich hinzieht.",
                    nl: "De Grote Aantrekker is een massieve concentratie van sterrenstelsels die onze Lokale Groep met hoge snelheid naar zich toe trekt."
                }
            },
            {
                question: {
                    en: "What creates the structure of the universe (galaxy clusters, filaments, voids)?",
                    es: "¿Qué crea la estructura del universo (cúmulos de galaxias, filamentos, vacíos)?",
                    de: "Was schafft die Struktur des Universums (Galaxienhaufen, Filamente, Voids)?",
                    nl: "Wat creëert de structuur van het heelal (sterrenstelselhopen, filamenten, leegte)?"
                },
                options: [
                    { en: "Gravity acting on dark matter over billions of years", es: "La gravedad actuando sobre la materia oscura durante miles de millones de años", de: "Schwerkraft, die über Milliarden von Jahren auf dunkle Materie einwirkt", nl: "Zwaartekracht die miljarden jaren lang inwerkt op donkere materie" },
                    { en: "Explosions from supernovas", es: "Explosiones de supernovas", de: "Explosionen von Supernovas", nl: "Explosies van supernova's" },
                    { en: "Magnetic fields in space", es: "Campos magnéticos en el espacio", de: "Magnetfelder im Weltraum", nl: "Magnetische velden in de ruimte" },
                    { en: "Aliens building structures", es: "Extraterrestres construyendo estructuras", de: "Außerirdische bauen Strukturen", nl: "Buitenaardse wezens die structuren bouwen" }
                ],
                correct: 0,
                explanation: {
                    en: "Dark matter's gravitational influence shaped the cosmic web over billions of years, creating the large-scale structure we observe today.",
                    es: "La influencia gravitacional de la materia oscura moldeó la red cósmica durante miles de millones de años, creando la estructura a gran escala que observamos hoy.",
                    de: "Der gravitative Einfluss der dunklen Materie formte das kosmische Netz über Milliarden von Jahren und schuf die großräumige Struktur, die wir heute beobachten.",
                    nl: "De gravitationele invloed van donkere materie vormde het kosmische web gedurende miljarden jaren, en creëerde de grootschalige structuur die we vandaag waarnemen."
                }
            },
            {
                question: {
                    en: "What is the difference between a galaxy and a star cluster?",
                    es: "¿Cuál es la diferencia entre una galaxia y un cúmulo estelar?",
                    de: "Was ist der Unterschied zwischen einer Galaxie und einem Sternhaufen?",
                    nl: "Wat is het verschil tussen een sterrenstelsel en een sterrenhoop?"
                },
                options: [
                    { en: "Galaxies contain billions of stars; clusters contain hundreds to thousands", es: "Las galaxias contienen miles de millones de estrellas; los cúmulos contienen cientos a miles", de: "Galaxien enthalten Milliarden von Sternen; Haufen enthalten Hunderte bis Tausende", nl: "Sterrenstelsels bevatten miljarden sterren; hopen bevatten honderden tot duizenden" },
                    { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" },
                    { en: "Galaxies are smaller than star clusters", es: "Las galaxias son más pequeñas que los cúmulos estelares", de: "Galaxien sind kleiner als Sternhaufen", nl: "Sterrenstelsels zijn kleiner dan sterrenhopen" },
                    { en: "Star clusters contain planets; galaxies don't", es: "Los cúmulos estelares contienen planetas; las galaxias no", de: "Sternhaufen enthalten Planeten; Galaxien nicht", nl: "Sterrenhopen bevatten planeten; sterrenstelsels niet" }
                ],
                correct: 0,
                explanation: {
                    en: "The scale difference is enormous - galaxies are vast cosmic cities while star clusters are more like neighborhoods within them.",
                    es: "La diferencia de escala es enorme - las galaxias son vastas ciudades cósmicas mientras que los cúmulos estelares son más como vecindarios dentro de ellas.",
                    de: "Der Größenunterschied ist enorm - Galaxien sind riesige kosmische Städte, während Sternhaufen eher wie Nachbarschaften in ihnen sind.",
                    nl: "Het schaalverschil is enorm - sterrenstelsels zijn uitgestrekte kosmische steden terwijl sterrenhopen meer als buurten binnen hen zijn."
                }
            },
            {
                question: {
                    en: "What are dwarf galaxies?",
                    es: "¿Qué son las galaxias enanas?",
                    de: "Was sind Zwerggalaxien?",
                    nl: "Wat zijn dwergsterrenstelsels?"
                },
                options: [
                    { en: "Small galaxies with fewer stars than typical galaxies", es: "Galaxias pequeñas con menos estrellas que las galaxias típicas", de: "Kleine Galaxien mit weniger Sternen als typische Galaxien", nl: "Kleine sterrenstelsels met minder sterren dan typische sterrenstelsels" },
                    { en: "Galaxies inhabited by small people", es: "Galaxias habitadas por gente pequeña", de: "Galaxien, die von kleinen Menschen bewohnt werden", nl: "Sterrenstelsels bewoond door kleine mensen" },
                    { en: "Very distant galaxies", es: "Galaxias muy distantes", de: "Sehr entfernte Galaxien", nl: "Zeer verre sterrenstelsels" },
                    { en: "Galaxies that are very young", es: "Galaxias que son muy jóvenes", de: "Galaxien, die sehr jung sind", nl: "Sterrenstelsels die heel jong zijn" }
                ],
                correct: 0,
                explanation: {
                    en: "Dwarf galaxies are the most common type of galaxy in the universe, often satellites of larger galaxies like ours.",
                    es: "Las galaxias enanas son el tipo más común de galaxia en el universo, a menudo satélites de galaxias más grandes como la nuestra.",
                    de: "Zwerggalaxien sind die häufigste Art von Galaxie im Universum, oft Satelliten größerer Galaxien wie unserer.",
                    nl: "Dwergsterrenstelsels zijn het meest voorkomende type sterrenstelsel in het heelal, vaak satellieten van grotere sterrenstelsels zoals het onze."
                }
            },
            {
                question: {
                    en: "What is the Hubble constant?",
                    es: "¿Qué es la constante de Hubble?",
                    de: "Was ist die Hubble-Konstante?",
                    nl: "Wat is de Hubbleconstante?"
                },
                options: [
                    { en: "A measurement of how fast the universe is expanding", es: "Una medida de qué tan rápido se está expandiendo el universo", de: "Eine Messung, wie schnell sich das Universum ausdehnt", nl: "Een meting van hoe snel het heelal uitbreidt" },
                    { en: "The distance to the Hubble telescope", es: "La distancia al telescopio Hubble", de: "Die Entfernung zum Hubble-Teleskop", nl: "De afstand tot de Hubbletelescoop" },
                    { en: "How many galaxies Hubble discovered", es: "Cuántas galaxias descubrió Hubble", de: "Wie viele Galaxien Hubble entdeckte", nl: "Hoeveel sterrenstelsels Hubble ontdekte" },
                    { en: "The age of Edwin Hubble", es: "La edad de Edwin Hubble", de: "Das Alter von Edwin Hubble", nl: "De leeftijd van Edwin Hubble" }
                ],
                correct: 0,
                explanation: {
                    en: "The Hubble constant tells us how fast the universe is expanding and helps determine its age and ultimate fate.",
                    es: "La constante de Hubble nos dice qué tan rápido se está expandiendo el universo y ayuda a determinar su edad y destino final.",
                    de: "Die Hubble-Konstante sagt uns, wie schnell sich das Universum ausdehnt und hilft, sein Alter und sein endgültiges Schicksal zu bestimmen.",
                    nl: "De Hubbleconstante vertelt ons hoe snel het heelal uitbreidt en helpt zijn leeftijd en uiteindelijke lot te bepalen."
                }
            },
            {
                question: {
                    en: "What is the cosmic web?",
                    es: "¿Qué es la red cósmica?",
                    de: "Was ist das kosmische Netz?",
                    nl: "Wat is het kosmische web?"
                },
                options: [
                    { en: "The large-scale structure of the universe with filaments and voids", es: "La estructura a gran escala del universo con filamentos y vacíos", de: "Die großräumige Struktur des Universums mit Filamenten und Voids", nl: "De grootschalige structuur van het heelal met filamenten en lege ruimtes" },
                    { en: "A web made by space spiders", es: "Una red hecha por arañas espaciales", de: "Ein Netz von Weltraumspinnen", nl: "Een web gemaakt door ruimtespinnen" },
                    { en: "The internet in space", es: "El internet en el espacio", de: "Das Internet im Weltraum", nl: "Het internet in de ruimte" },
                    { en: "Magnetic field lines", es: "Líneas de campo magnético", de: "Magnetfeldlinien", nl: "Magnetische veldlijnen" }
                ],
                correct: 0,
                explanation: {
                    en: "The cosmic web is the largest-scale structure of the universe, resembling a three-dimensional spider web of matter.",
                    es: "La red cósmica es la estructura a mayor escala del universo, pareciendo una telaraña tridimensional de materia.",
                    de: "Das kosmische Netz ist die größträumigste Struktur des Universums und ähnelt einem dreidimensionalen Spinnennetz aus Materie.",
                    nl: "Het kosmische web is de grootschaligste structuur van het heelal, lijkend op een driedimensionaal spinnenweb van materie."
                }
            },
            {
                question: {
                    en: "What evidence supports the Big Bang theory?",
                    es: "¿Qué evidencia apoya la teoría del Big Bang?",
                    de: "Welche Beweise unterstützen die Urknalltheorie?",
                    nl: "Welk bewijs ondersteunt de Oerknaltheorie?"
                },
                options: [
                    { en: "Cosmic microwave background radiation and expanding universe", es: "Radiación cósmica de fondo y universo en expansión", de: "Kosmische Hintergrundstrahlung und expandierendes Universum", nl: "Kosmische achtergrondstraling en uitbreidend heelal" },
                    { en: "Pictures of the explosion", es: "Fotos de la explosión", de: "Bilder der Explosion", nl: "Foto's van de explosie" },
                    { en: "Sounds recorded from space", es: "Sonidos grabados del espacio", de: "Aus dem Weltraum aufgenommene Geräusche", nl: "Geluiden opgenomen uit de ruimte" },
                    { en: "Witness accounts", es: "Testimonios de testigos", de: "Augenzeugenberichte", nl: "Getuigenverslagen" }
                ],
                correct: 0,
                explanation: {
                    en: "Multiple lines of evidence including cosmic background radiation, nucleosynthesis, and galactic recession all support the Big Bang.",
                    es: "Múltiples líneas de evidencia incluyendo radiación cósmica de fondo, nucleosíntesis y recesión galáctica apoyan el Big Bang.",
                    de: "Mehrere Beweislinien einschließlich kosmischer Hintergrundstrahlung, Nukleosynthese und galaktischer Rezession stützen den Urknall.",
                    nl: "Meerdere bewijslijnen inclusief kosmische achtergrondstraling, nucleosynthese en galactische recessie ondersteunen allemaal de Oerknal."
                }
            },
            {
                question: {
                    en: "What is the critical density of the universe?",
                    es: "¿Cuál es la densidad crítica del universo?",
                    de: "Was ist die kritische Dichte des Universums?",
                    nl: "Wat is de kritieke dichtheid van het heelal?"
                },
                options: [
                    { en: "The density needed to determine if the universe will expand forever", es: "La densidad necesaria para determinar si el universo se expandirá para siempre", de: "Die Dichte, die benötigt wird, um zu bestimmen, ob sich das Universum für immer ausdehnt", nl: "De dichtheid die nodig is om te bepalen of het heelal voor altijd zal uitbreiden" },
                    { en: "How many people can fit in the universe", es: "Cuántas personas pueden caber en el universo", de: "Wie viele Menschen in das Universum passen", nl: "Hoeveel mensen er in het heelal passen" },
                    { en: "The thickness of space", es: "El grosor del espacio", de: "Die Dicke des Raumes", nl: "De dikte van de ruimte" },
                    { en: "How heavy galaxies are", es: "Qué tan pesadas son las galaxias", de: "Wie schwer Galaxien sind", nl: "Hoe zwaar sterrenstelsels zijn" }
                ],
                correct: 0,
                explanation: {
                    en: "Critical density determines whether the universe will expand forever, collapse, or reach a balance between expansion and gravity.",
                    es: "La densidad crítica determina si el universo se expandirá para siempre, colapsará, o alcanzará un equilibrio entre expansión y gravedad.",
                    de: "Die kritische Dichte bestimmt, ob sich das Universum für immer ausdehnt, kollabiert oder ein Gleichgewicht zwischen Expansion und Schwerkraft erreicht.",
                    nl: "Kritieke dichtheid bepaalt of het heelal voor altijd zal uitbreiden, zal instorten, of een balans zal bereiken tussen uitbreiding en zwaartekracht."
                }
            },
            {
                question: {
                    en: "What happens when two galaxies collide?",
                    es: "¿Qué pasa cuando dos galaxias chocan?",
                    de: "Was passiert, wenn zwei Galaxien kollidieren?",
                    nl: "Wat gebeurt er wanneer twee sterrenstelsels botsen?"
                },
                options: [
                    { en: "They merge slowly over millions of years, with few star collisions", es: "Se fusionan lentamente durante millones de años, con pocas colisiones estelares", de: "Sie verschmelzen langsam über Millionen von Jahren, mit wenigen Sternkollisionen", nl: "Ze versmelten langzaam over miljoenen jaren, met weinig sterbotsingen" },
                    { en: "They explode and disappear", es: "Explotan y desaparecen", de: "Sie explodieren und verschwinden", nl: "Ze exploderen en verdwijnen" },
                    { en: "They bounce off each other", es: "Rebotan una de la otra", de: "Sie prallen voneinander ab", nl: "Ze ketsen van elkaar af" },
                    { en: "All stars collide at once", es: "Todas las estrellas chocan a la vez", de: "Alle Sterne kollidieren gleichzeitig", nl: "Alle sterren botsen tegelijk" }
                ],
                correct: 0,
                explanation: {
                    en: "Galaxy collisions are surprisingly gentle events where individual stars rarely collide due to the vast spaces between them.",
                    es: "Las colisiones de galaxias son eventos sorprendentemente gentiles donde las estrellas individuales rara vez colisionan debido a los vastos espacios entre ellas.",
                    de: "Galaxienkollisionen sind überraschend sanfte Ereignisse, bei denen einzelne Sterne aufgrund der riesigen Abstände zwischen ihnen selten kollidieren.",
                    nl: "Sterrenstelselbotsingen zijn verrassend zachte gebeurtenissen waarbij individuele sterren zelden botsen vanwege de enorme ruimtes tussen hen."
                }
            },
            {
                question: {
                    en: "What is the Zone of Avoidance?",
                    es: "¿Qué es la Zona de Evasión?",
                    de: "Was ist die Zone der Vermeidung?",
                    nl: "Wat is de Zone van Vermijding?"
                },
                options: [
                    { en: "The area blocked by our galaxy's disk where we can't see distant galaxies", es: "El área bloqueada por el disco de nuestra galaxia donde no podemos ver galaxias distantes", de: "Der Bereich, der durch die Scheibe unserer Galaxie blockiert wird, wo wir keine fernen Galaxien sehen können", nl: "Het gebied dat wordt geblokkeerd door de schijf van ons sterrenstelsel waar we geen verre sterrenstelsels kunnen zien" },
                    { en: "Places in space that are dangerous", es: "Lugares en el espacio que son peligrosos", de: "Orte im Weltraum, die gefährlich sind", nl: "Plaatsen in de ruimte die gevaarlijk zijn" },
                    { en: "Areas where aliens live", es: "Áreas donde viven los extraterrestres", de: "Bereiche, wo Außerirdische leben", nl: "Gebieden waar buitenaardse wezens leven" },
                    { en: "Regions with no gravity", es: "Regiones sin gravedad", de: "Regionen ohne Schwerkraft", nl: "Gebieden zonder zwaartekracht" }
                ],
                correct: 0,
                explanation: {
                    en: "This zone exists because dust and stars in our galaxy's disk block our view of distant galaxies in that direction.",
                    es: "Esta zona existe porque el polvo y las estrellas en el disco de nuestra galaxia bloquean nuestra vista de galaxias distantes en esa dirección.",
                    de: "Diese Zone existiert, weil Staub und Sterne in der Scheibe unserer Galaxie unsere Sicht auf entfernte Galaxien in dieser Richtung blockieren.",
                    nl: "Deze zone bestaat omdat stof en sterren in de schijf van ons sterrenstelsel ons zicht op verre sterrenstelsels in die richting blokkeren."
                }
            },
            {
                question: {
                    en: "What are galactic halos made of?",
                    es: "¿De qué están hechos los halos galácticos?",
                    de: "Woraus bestehen galaktische Halos?",
                    nl: "Waar bestaan galactische halo's uit?"
                },
                options: [
                    { en: "Mostly dark matter with some old stars", es: "Principalmente materia oscura con algunas estrellas viejas", de: "Hauptsächlich dunkle Materie mit einigen alten Sternen", nl: "Voornamelijk donkere materie met wat oude sterren" },
                    { en: "Only bright young stars", es: "Solo estrellas jóvenes brillantes", de: "Nur helle junge Sterne", nl: "Alleen heldere jonge sterren" },
                    { en: "Gas clouds only", es: "Solo nubes de gas", de: "Nur Gaswolken", nl: "Alleen gaswolken" },
                    { en: "Empty space", es: "Espacio vacío", de: "Leerer Raum", nl: "Lege ruimte" }
                ],
                correct: 0,
                explanation: {
                    en: "Galactic halos extend far beyond the visible galaxy and contain most of the galaxy's mass in the form of dark matter.",
                    es: "Los halos galácticos se extienden mucho más allá de la galaxia visible y contienen la mayor parte de la masa de la galaxia en forma de materia oscura.",
                    de: "Galaktische Halos erstrecken sich weit über die sichtbare Galaxie hinaus und enthalten den Großteil der Galaxienmasse in Form dunkler Materie.",
                    nl: "Galactische halo's strekken zich ver uit voorbij het zichtbare sterrenstelsel en bevatten het grootste deel van de massa van het sterrenstelsel in de vorm van donkere materie."
                }
            },
            {
                question: {
                    en: "What is the multiverse theory?",
                    es: "¿Qué es la teoría del multiverso?",
                    de: "Was ist die Multiversum-Theorie?",
                    nl: "Wat is de multiversumtheorie?"
                },
                options: [
                    { en: "The idea that there might be many universes beyond our own", es: "La idea de que podría haber muchos universos más allá del nuestro", de: "Die Idee, dass es viele Universen jenseits unseres eigenen geben könnte", nl: "Het idee dat er veel heelallen kunnen zijn naast het onze" },
                    { en: "Multiple galaxies in our universe", es: "Múltiples galaxias en nuestro universo", de: "Mehrere Galaxien in unserem Universum", nl: "Meerdere sterrenstelsels in ons heelal" },
                    { en: "Many planets with life", es: "Muchos planetas con vida", de: "Viele Planeten mit Leben", nl: "Veel planeten met leven" },
                    { en: "Different versions of Earth", es: "Diferentes versiones de la Tierra", de: "Verschiedene Versionen der Erde", nl: "Verschillende versies van de Aarde" }
                ],
                correct: 0,
                explanation: {
                    en: "The multiverse theory suggests our universe might be one of many, though this remains highly speculative and unproven.",
                    es: "La teoría del multiverso sugiere que nuestro universo podría ser uno de muchos, aunque esto permanece altamente especulativo y sin probar.",
                    de: "Die Multiversum-Theorie schlägt vor, dass unser Universum eines von vielen sein könnte, obwohl dies höchst spekulativ und unbewiesen bleibt.",
                    nl: "De multiversumtheorie suggereert dat ons heelal er een van velen zou kunnen zijn, hoewel dit zeer speculatief en onbewezen blijft."
                }
            },
            {
                question: {
                    en: "Why is studying distant galaxies like looking back in time?",
                    es: "¿Por qué estudiar galaxias distantes es como mirar atrás en el tiempo?",
                    de: "Warum ist das Studieren entfernter Galaxien wie ein Blick zurück in die Zeit?",
                    nl: "Waarom is het bestuderen van verre sterrenstelsels als terugkijken in de tijd?"
                },
                options: [
                    { en: "Light takes time to travel, so we see them as they were long ago", es: "La luz tarda en viajar, así que las vemos como eran hace mucho tiempo", de: "Licht braucht Zeit zum Reisen, also sehen wir sie, wie sie vor langer Zeit waren", nl: "Licht heeft tijd nodig om te reizen, dus we zien ze zoals ze lang geleden waren" },
                    { en: "They are moving backwards", es: "Se mueven hacia atrás", de: "Sie bewegen sich rückwärts", nl: "Ze bewegen achteruit" },
                    { en: "They are older than our galaxy", es: "Son más viejas que nuestra galaxia", de: "Sie sind älter als unsere Galaxie", nl: "Ze zijn ouder dan ons sterrenstelsel" },
                    { en: "Time runs differently there", es: "El tiempo corre diferente allí", de: "Die Zeit läuft dort anders", nl: "Tijd loopt daar anders" }
                ],
                correct: 0,
                explanation: {
                    en: "Because light has a finite speed, when we observe distant galaxies, we see them as they existed millions or billions of years ago.",
                    es: "Porque la luz tiene una velocidad finita, cuando observamos galaxias distantes, las vemos como existían hace millones o miles de millones de años.",
                    de: "Da Licht eine endliche Geschwindigkeit hat, sehen wir entfernte Galaxien so, wie sie vor Millionen oder Milliarden von Jahren existierten.",
                    nl: "Omdat licht een eindige snelheid heeft, zien we verre sterrenstelsels zoals ze miljoenen of miljarden jaren geleden bestonden."
                }
            },
            {
                question: {
                    en: "What is the Virgo Supercluster?",
                    es: "¿Qué es el Supercúmulo de Virgo?",
                    de: "Was ist der Virgo-Superhaufen?",
                    nl: "Wat is de Virgo-Supercluster?"
                },
                options: [
                    { en: "A large group of galaxy clusters containing our Local Group", es: "Un gran grupo de cúmulos de galaxias que contiene nuestro Grupo Local", de: "Eine große Gruppe von Galaxienhaufen, die unsere Lokale Gruppe enthält", nl: "Een grote groep sterrenstelselhopen die onze Lokale Groep bevat" },
                    { en: "A single massive galaxy", es: "Una sola galaxia masiva", de: "Eine einzelne massive Galaxie", nl: "Een enkel massief sterrenstelsel" },
                    { en: "A constellation visible from Earth", es: "Una constelación visible desde la Tierra", de: "Ein Sternbild, das von der Erde aus sichtbar ist", nl: "Een sterrenbeeld zichtbaar vanaf de Aarde" },
                    { en: "A type of black hole", es: "Un tipo de agujero negro", de: "Eine Art schwarzes Loch", nl: "Een type zwart gat" }
                ],
                correct: 0,
                explanation: {
                    en: "The Virgo Supercluster contains thousands of galaxies organized in clusters, including our Local Group, spanning about 110 million light-years.",
                    es: "El Supercúmulo de Virgo contiene miles de galaxias organizadas en cúmulos, incluyendo nuestro Grupo Local, abarcando aproximadamente 110 millones de años luz.",
                    de: "Der Virgo-Superhaufen enthält Tausende von Galaxien, die in Haufen organisiert sind, einschließlich unserer Lokalen Gruppe, und erstreckt sich über etwa 110 Millionen Lichtjahre.",
                    nl: "De Virgo-Supercluster bevat duizenden sterrenstelsels georganiseerd in clusters, inclusief onze Lokale Groep, en beslaat ongeveer 110 miljoen lichtjaren."
                }
            },
            {
                question: {
                    en: "What is the Laniakea Supercluster?",
                    es: "¿Qué es el Supercúmulo Laniakea?",
                    de: "Was ist der Laniakea-Superhaufen?",
                    nl: "Wat is de Laniakea-Supercluster?"
                },
                options: [
                    { en: "An even larger structure containing the Virgo Supercluster", es: "Una estructura aún más grande que contiene el Supercúmulo de Virgo", de: "Eine noch größere Struktur, die den Virgo-Superhaufen enthält", nl: "Een nog grotere structuur die de Virgo-Supercluster bevat" },
                    { en: "Another name for the Milky Way", es: "Otro nombre para la Vía Láctea", de: "Ein anderer Name für die Milchstraße", nl: "Een andere naam voor de Melkweg" },
                    { en: "A newly discovered planet", es: "Un planeta recién descubierto", de: "Ein neu entdeckter Planet", nl: "Een nieuw ontdekte planeet" },
                    { en: "A space telescope", es: "Un telescopio espacial", de: "Ein Weltraumteleskop", nl: "Een ruimtetelescoop" }
                ],
                correct: 0,
                explanation: {
                    en: "Laniakea is our home supercluster of galaxies, containing about 100,000 galaxies and spanning 520 million light-years across.",
                    es: "Laniakea es nuestro supercúmulo hogar de galaxias, conteniendo aproximadamente 100,000 galaxias y abarcando 520 millones de años luz.",
                    de: "Laniakea ist unser Heimat-Superhaufen von Galaxien, der etwa 100.000 Galaxien enthält und sich über 520 Millionen Lichtjahre erstreckt.",
                    nl: "Laniakea is onze thuis-supercluster van sterrenstelsels, die ongeveer 100.000 sterrenstelsels bevat en zich uitstrekt over 520 miljoen lichtjaren."
                }
            },
            {
                question: {
                    en: "What is vacuum decay?",
                    es: "¿Qué es la desintegración del vacío?",
                    de: "Was ist Vakuumzerfall?",
                    nl: "Wat is vacuümverval?"
                },
                options: [
                    { en: "A theoretical process that could destroy the universe", es: "Un proceso teórico que podría destruir el universo", de: "Ein theoretischer Prozess, der das Universum zerstören könnte", nl: "Een theoretisch proces dat het heelal zou kunnen vernietigen" },
                    { en: "When vacuum cleaners break down", es: "Cuando las aspiradoras se descomponen", de: "Wenn Staubsauger kaputt gehen", nl: "Wanneer stofzuigers kapot gaan" },
                    { en: "The formation of new galaxies", es: "La formación de nuevas galaxias", de: "Die Entstehung neuer Galaxien", nl: "De vorming van nieuwe sterrenstelsels" },
                    { en: "A type of nuclear reaction", es: "Un tipo de reacción nuclear", de: "Eine Art Kernreaktion", nl: "Een type kernreactie" }
                ],
                correct: 0,
                explanation: {
                    en: "Vacuum decay is a hypothetical quantum field theory phenomenon where the vacuum state could transition to a lower energy state, potentially destroying the universe.",
                    es: "La desintegración del vacío es un fenómeno hipotético de la teoría cuántica de campos donde el estado del vacío podría transicionar a un estado de menor energía, potencialmente destruyendo el universo.",
                    de: "Vakuumzerfall ist ein hypothetisches Quantenfeldtheorie-Phänomen, bei dem der Vakuumzustand zu einem niedrigeren Energiezustand übergehen könnte, was möglicherweise das Universum zerstört.",
                    nl: "Vacuümverval is een hypothetisch kwantumveldtheorie-fenomeen waarbij de vacuümtoestand zou kunnen overgaan naar een lagere energietoestand, wat mogelijk het heelal zou vernietigen."
                }
            },
            {
                question: {
                    en: "What are primordial black holes?",
                    es: "¿Qué son los agujeros negros primordiales?",
                    de: "Was sind primordiale schwarze Löcher?",
                    nl: "Wat zijn primordiale zwarte gaten?"
                },
                options: [
                    { en: "Black holes that may have formed in the early universe", es: "Agujeros negros que pueden haberse formado en el universo temprano", de: "Schwarze Löcher, die sich möglicherweise im frühen Universum gebildet haben", nl: "Zwarte gaten die mogelijk in het vroege heelal zijn gevormd" },
                    { en: "The first stars that ever existed", es: "Las primeras estrellas que existieron", de: "Die ersten Sterne, die je existierten", nl: "De eerste sterren die ooit bestonden" },
                    { en: "Black holes at galaxy centers", es: "Agujeros negros en los centros de galaxias", de: "Schwarze Löcher in Galaxienzentren", nl: "Zwarte gaten in sterrenstelselcentra" },
                    { en: "Ancient planets", es: "Planetas antiguos", de: "Uralte Planeten", nl: "Oude planeten" }
                ],
                correct: 0,
                explanation: {
                    en: "Primordial black holes are hypothetical black holes that could have formed from density fluctuations in the very early universe, not from stellar collapse.",
                    es: "Los agujeros negros primordiales son agujeros negros hipotéticos que podrían haberse formado a partir de fluctuaciones de densidad en el universo muy temprano, no del colapso estelar.",
                    de: "Primordiale schwarze Löcher sind hypothetische schwarze Löcher, die sich aus Dichteschwankungen im sehr frühen Universum gebildet haben könnten, nicht aus Sternkollaps.",
                    nl: "Primordiale zwarte gaten zijn hypothetische zwarte gaten die gevormd zouden kunnen zijn uit dichtheidsfluctuaties in het zeer vroege heelal, niet uit stellaire ineenstorting."
                }
            },
            {
                question: {
                    en: "What is the Planck epoch?",
                    es: "¿Qué es la época de Planck?",
                    de: "Was ist die Planck-Ära?",
                    nl: "Wat is het Planck-tijdperk?"
                },
                options: [
                    { en: "The earliest period of the universe where physics breaks down", es: "El período más temprano del universo donde la física se descompone", de: "Die früheste Periode des Universums, in der die Physik zusammenbricht", nl: "De vroegste periode van het heelal waar de natuurkunde instort" },
                    { en: "When the first planets formed", es: "Cuando se formaron los primeros planetas", de: "Als sich die ersten Planeten bildeten", nl: "Toen de eerste planeten zich vormden" },
                    { en: "A time when space was flat", es: "Un tiempo cuando el espacio era plano", de: "Eine Zeit, als der Raum flach war", nl: "Een tijd toen de ruimte plat was" },
                    { en: "The current age of the universe", es: "La edad actual del universo", de: "Das aktuelle Alter des Universums", nl: "De huidige leeftijd van het heelal" }
                ],
                correct: 0,
                explanation: {
                    en: "The Planck epoch refers to the first 10^-43 seconds after the Big Bang, when quantum effects of gravity dominated and our current physics cannot describe what happened.",
                    es: "La época de Planck se refiere a los primeros 10^-43 segundos después del Big Bang, cuando los efectos cuánticos de la gravedad dominaban y nuestra física actual no puede describir lo que pasó.",
                    de: "Die Planck-Ära bezieht sich auf die ersten 10^-43 Sekunden nach dem Urknall, als Quanteneffekte der Gravitation dominierten und unsere aktuelle Physik nicht beschreiben kann, was geschah.",
                    nl: "Het Planck-tijdperk verwijst naar de eerste 10^-43 seconden na de Oerknal, toen kwantumeffecten van zwaartekracht domineerden en onze huidige natuurkunde niet kan beschrijven wat er gebeurde."
                }
            },
            {
                question: {
                    en: "What is the ultimate fate of stars in an expanding universe?",
                    es: "¿Cuál es el destino final de las estrellas en un universo en expansión?",
                    de: "Was ist das letztendliche Schicksal der Sterne in einem expandierenden Universum?",
                    nl: "Wat is het uiteindelijke lot van sterren in een uitbreidend heelal?"
                },
                options: [
                    { en: "They will eventually burn out and the universe will become cold and dark", es: "Eventualmente se apagarán y el universo se volverá frío y oscuro", de: "Sie werden schließlich ausbrennen und das Universum wird kalt und dunkel werden", nl: "Ze zullen uiteindelijk uitbranden en het heelal zal koud en donker worden" },
                    { en: "They will all become black holes", es: "Todas se convertirán en agujeros negros", de: "Sie werden alle zu schwarzen Löchern werden", nl: "Ze zullen allemaal zwarte gaten worden" },
                    { en: "They will merge into one giant star", es: "Se fusionarán en una estrella gigante", de: "Sie werden zu einem Riesenstern verschmelzen", nl: "Ze zullen samenvoegen tot één reuzenster" },
                    { en: "They will explode all at once", es: "Explotarán todas a la vez", de: "Sie werden alle gleichzeitig explodieren", nl: "Ze zullen allemaal tegelijk exploderen" }
                ],
                correct: 0,
                explanation: {
                    en: "In the distant future, stars will exhaust their fuel and die out, leading to a cold, dark universe with only black holes, which will also eventually evaporate.",
                    es: "En el futuro distante, las estrellas agotarán su combustible y se apagarán, llevando a un universo frío y oscuro con solo agujeros negros, que también eventualmente se evaporarán.",
                    de: "In ferner Zukunft werden Sterne ihren Brennstoff erschöpfen und sterben, was zu einem kalten, dunklen Universum nur mit schwarzen Löchern führt, die schließlich auch verdampfen werden.",
                    nl: "In de verre toekomst zullen sterren hun brandstof uitputten en uitsterven, leidend tot een koud, donker heelal met alleen zwarte gaten, die ook uiteindelijk zullen verdampen."
                }
            },
            {
                question: {
                    en: "What is Hawking radiation?",
                    es: "¿Qué es la radiación de Hawking?",
                    de: "Was ist Hawking-Strahlung?",
                    nl: "Wat is Hawkingstraling?"
                },
                options: [
                    { en: "Radiation emitted by black holes that causes them to slowly evaporate", es: "Radiación emitida por agujeros negros que hace que se evaporen lentamente", de: "Strahlung, die von schwarzen Löchern emittiert wird und sie langsam verdampfen lässt", nl: "Straling uitgezonden door zwarte gaten die ze langzaam doet verdampen" },
                    { en: "Radio waves from Stephen Hawking", es: "Ondas de radio de Stephen Hawking", de: "Radiowellen von Stephen Hawking", nl: "Radiogolven van Stephen Hawking" },
                    { en: "Light from the Big Bang", es: "Luz del Big Bang", de: "Licht vom Urknall", nl: "Licht van de Oerknal" },
                    { en: "Energy from galaxy collisions", es: "Energía de colisiones de galaxias", de: "Energie aus Galaxienkollisionen", nl: "Energie van sterrenstelselbotsingen" }
                ],
                correct: 0,
                explanation: {
                    en: "Hawking radiation is a quantum mechanical phenomenon that predicts black holes emit particles and gradually lose mass, eventually evaporating completely.",
                    es: "La radiación de Hawking es un fenómeno mecánico cuántico que predice que los agujeros negros emiten partículas y gradualmente pierden masa, eventualmente evaporándose completamente.",
                    de: "Hawking-Strahlung ist ein quantenmechanisches Phänomen, das vorhersagt, dass schwarze Löcher Teilchen emittieren und allmählich Masse verlieren, schließlich vollständig verdampfen.",
                    nl: "Hawkingstraling is een kwantummechanisch fenomeen dat voorspelt dat zwarte gaten deeltjes uitzenden en geleidelijk massa verliezen, uiteindelijk volledig verdampen."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/space-astronomy', level4);
    }
})();