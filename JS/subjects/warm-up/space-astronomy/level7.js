(function() {
    const level7 = {
        name: {
            en: "Space Phenomena",
            es: "Fenómenos Espaciales",
            de: "Weltraumphänomene",
            nl: "Ruimtefenomenen"
        },
        questions: [
            {
                question: {
                    en: "What is a black hole?",
                    es: "¿Qué es un agujero negro?",
                    de: "Was ist ein schwarzes Loch?",
                    nl: "Wat is een zwart gat?"
                },
                options: [
                    { en: "A region where gravity is so strong that nothing can escape", es: "Una región donde la gravedad es tan fuerte que nada puede escapar", de: "Ein Bereich, wo die Schwerkraft so stark ist, dass nichts entkommen kann", nl: "Een gebied waar zwaartekracht zo sterk is dat niets kan ontsnappen" },
                    { en: "A hole in space you can see through", es: "Un agujero en el espacio que puedes ver a través", de: "Ein Loch im Weltraum, durch das man sehen kann", nl: "Een gat in de ruimte waar je doorheen kunt kijken" },
                    { en: "A very dark star", es: "Una estrella muy oscura", de: "Ein sehr dunkler Stern", nl: "Een zeer donkere ster" },
                    { en: "A tunnel to another dimension", es: "Un túnel a otra dimensión", de: "Ein Tunnel zu einer anderen Dimension", nl: "Een tunnel naar een andere dimensie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a nebula?",
                    es: "¿Qué es una nebulosa?",
                    de: "Was ist ein Nebel?",
                    nl: "Wat is een nevel?"
                },
                options: [
                    { en: "A cloud of gas and dust in space", es: "Una nube de gas y polvo en el espacio", de: "Eine Wolke aus Gas und Staub im Weltraum", nl: "Een wolk van gas en stof in de ruimte" },
                    { en: "A small galaxy", es: "Una galaxia pequeña", de: "Eine kleine Galaxie", nl: "Een klein sterrenstelsel" },
                    { en: "A type of planet", es: "Un tipo de planeta", de: "Eine Art Planet", nl: "Een soort planeet" },
                    { en: "A cluster of stars", es: "Un cúmulo de estrellas", de: "Ein Sternhaufen", nl: "Een sterrenhoop" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a supernova?",
                    es: "¿Qué es una supernova?",
                    de: "Was ist eine Supernova?",
                    nl: "Wat is een supernova?"
                },
                options: [
                    { en: "The explosive death of a massive star", es: "La muerte explosiva de una estrella masiva", de: "Der explosive Tod eines massereichen Sterns", nl: "De explosieve dood van een massieve ster" },
                    { en: "A very bright new star", es: "Una estrella nueva muy brillante", de: "Ein sehr heller neuer Stern", nl: "Een zeer heldere nieuwe ster" },
                    { en: "A star that moves very fast", es: "Una estrella que se mueve muy rápido", de: "Ein Stern, der sich sehr schnell bewegt", nl: "Een ster die heel snel beweegt" },
                    { en: "A star that is larger than normal", es: "Una estrella que es más grande de lo normal", de: "Ein Stern, der größer als normal ist", nl: "Een ster die groter is dan normaal" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What creates the beautiful colors in nebulae?",
                    es: "¿Qué crea los hermosos colores en las nebulosas?",
                    de: "Was erzeugt die schönen Farben in Nebeln?",
                    nl: "Wat creëert de mooie kleuren in nevels?"
                },
                options: [
                    { en: "Different gases glowing when heated by nearby stars", es: "Diferentes gases brillando cuando son calentados por estrellas cercanas", de: "Verschiedene Gase, die leuchten, wenn sie von nahegelegenen Sternen erhitzt werden", nl: "Verschillende gassen die gloeien wanneer ze worden verhit door nabije sterren" },
                    { en: "Colored dust particles", es: "Partículas de polvo de colores", de: "Farbige Staubpartikel", nl: "Gekleurde stofdeeltjes" },
                    { en: "Reflection of sunlight", es: "Reflejo de la luz solar", de: "Reflexion von Sonnenlicht", nl: "Reflectie van zonlicht" },
                    { en: "Paint from space artists", es: "Pintura de artistas espaciales", de: "Farbe von Weltraumkünstlern", nl: "Verf van ruimtekunstenaars" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a pulsar?",
                    es: "¿Qué es un púlsar?",
                    de: "Was ist ein Pulsar?",
                    nl: "Wat is een pulsar?"
                },
                options: [
                    { en: "A rapidly spinning neutron star that sends out beams of radiation", es: "Una estrella de neutrones que gira rápidamente y envía haces de radiación", de: "Ein schnell rotierender Neutronenstern, der Strahlungsbündel aussendet", nl: "Een snel draaiende neutronenster die bundels straling uitzendt" },
                    { en: "A star that pulses like a heartbeat", es: "Una estrella que pulsa como un latido del corazón", de: "Ein Stern, der wie ein Herzschlag pulsiert", nl: "Een ster die pulseert als een hartslag" },
                    { en: "A type of planet", es: "Un tipo de planeta", de: "Eine Art Planet", nl: "Een soort planeet" },
                    { en: "A flashing light on a spacecraft", es: "Una luz intermitente en una nave espacial", de: "Ein blinkendes Licht auf einem Raumschiff", nl: "Een knipperend licht op een ruimteschip" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happens at the event horizon of a black hole?",
                    es: "¿Qué pasa en el horizonte de eventos de un agujero negro?",
                    de: "Was passiert am Ereignishorizont eines schwarzen Lochs?",
                    nl: "Wat gebeurt er bij de waarnemingshorizon van een zwart gat?"
                },
                options: [
                    { en: "It's the point of no return where nothing can escape", es: "Es el punto de no retorno donde nada puede escapar", de: "Es ist der Punkt ohne Wiederkehr, wo nichts entkommen kann", nl: "Het is het punt van geen terugkeer waar niets kan ontsnappen" },
                    { en: "Everything explodes", es: "Todo explota", de: "Alles explodiert", nl: "Alles explodeert" },
                    { en: "Time stops completely", es: "El tiempo se detiene completamente", de: "Die Zeit hört vollständig auf", nl: "De tijd stopt volledig" },
                    { en: "You can see the future", es: "Puedes ver el futuro", de: "Du kannst die Zukunft sehen", nl: "Je kunt de toekomst zien" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a gamma-ray burst?",
                    es: "¿Qué es una ráfaga de rayos gamma?",
                    de: "Was ist ein Gamma-Strahlen-Ausbruch?",
                    nl: "Wat is een gamma-straaluitbarsting?"
                },
                options: [
                    { en: "An extremely powerful explosion that releases intense gamma radiation", es: "Una explosión extremadamente poderosa que libera intensa radiación gamma", de: "Eine extrem mächtige Explosion, die intensive Gammastrahlung freisetzt", nl: "Een extreem krachtige explosie die intense gammastraling vrijgeeft" },
                    { en: "A type of aurora", es: "Un tipo de aurora", de: "Eine Art Nordlicht", nl: "Een soort noorderlicht" },
                    { en: "Lightning in space", es: "Rayos en el espacio", de: "Blitze im Weltraum", nl: "Bliksem in de ruimte" },
                    { en: "Sunlight reflecting off planets", es: "Luz solar reflejándose en planetas", de: "Sonnenlicht, das von Planeten reflektiert wird", nl: "Zonlicht dat weerkaatst van planeten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a wormhole?",
                    es: "¿Qué es un agujero de gusano?",
                    de: "Was ist ein Wurmloch?",
                    nl: "Wat is een wormgat?"
                },
                options: [
                    { en: "A theoretical tunnel that could connect distant parts of space and time", es: "Un túnel teórico que podría conectar partes distantes del espacio y tiempo", de: "Ein theoretischer Tunnel, der entfernte Teile von Raum und Zeit verbinden könnte", nl: "Een theoretische tunnel die verre delen van ruimte en tijd zou kunnen verbinden" },
                    { en: "A hole made by space worms", es: "Un agujero hecho por gusanos espaciales", de: "Ein Loch, das von Weltraumwürmern gemacht wurde", nl: "Een gat gemaakt door ruimtewormen" },
                    { en: "A type of black hole", es: "Un tipo de agujero negro", de: "Eine Art schwarzes Loch", nl: "Een soort zwart gat" },
                    { en: "A tunnel through asteroids", es: "Un túnel a través de asteroides", de: "Ein Tunnel durch Asteroiden", nl: "Een tunnel door asteroïden" }
                ],
                correct: 0
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
                    { en: "Very dark colored matter", es: "Materia de color muy oscuro", de: "Sehr dunkel gefärbte Materie", nl: "Zeer donker gekleurde materie" },
                    { en: "Matter that exists only at night", es: "Materia que existe solo de noche", de: "Materie, die nur nachts existiert", nl: "Materie die alleen 's nachts bestaat" },
                    { en: "Evil matter from dark places", es: "Materia malvada de lugares oscuros", de: "Böse Materie aus dunklen Orten", nl: "Kwade materie van donkere plaatsen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What causes an aurora (northern/southern lights)?",
                    es: "¿Qué causa una aurora (luces del norte/sur)?",
                    de: "Was verursacht eine Aurora (Nord-/Südlichter)?",
                    nl: "Wat veroorzaakt een aurora (noorderlicht/zuiderlicht)?"
                },
                options: [
                    { en: "Charged particles from the Sun hitting Earth's magnetic field", es: "Partículas cargadas del Sol golpeando el campo magnético de la Tierra", de: "Geladene Teilchen von der Sonne treffen auf das Magnetfeld der Erde", nl: "Geladen deeltjes van de Zon die het magnetische veld van de Aarde raken" },
                    { en: "Reflection of city lights", es: "Reflejo de luces de la ciudad", de: "Reflexion von Stadtlichtern", nl: "Reflectie van stadslichten" },
                    { en: "Lightning in the upper atmosphere", es: "Rayos en la atmósfera superior", de: "Blitze in der oberen Atmosphäre", nl: "Bliksem in de bovenste atmosfeer" },
                    { en: "Colored gases in the air", es: "Gases de colores en el aire", de: "Farbige Gase in der Luft", nl: "Gekleurde gassen in de lucht" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a planetary nebula?",
                    es: "¿Qué es una nebulosa planetaria?",
                    de: "Was ist ein planetarischer Nebel?",
                    nl: "Wat is een planetaire nevel?"
                },
                options: [
                    { en: "Gas expelled by a dying star, forming a colorful shell", es: "Gas expulsado por una estrella moribunda, formando una cáscara colorida", de: "Gas, das von einem sterbenden Stern ausgestoßen wird und eine farbige Hülle bildet", nl: "Gas uitgestoten door een stervende ster, vormend een kleurrijke schil" },
                    { en: "A nebula around a planet", es: "Una nebulosa alrededor de un planeta", de: "Ein Nebel um einen Planeten", nl: "Een nevel rond een planeet" },
                    { en: "A nebula that looks like a planet", es: "Una nebulosa que parece un planeta", de: "Ein Nebel, der wie ein Planet aussieht", nl: "Een nevel die eruitziet als een planeet" },
                    { en: "Where new planets are born", es: "Donde nacen nuevos planetas", de: "Wo neue Planeten geboren werden", nl: "Waar nieuwe planeten geboren worden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is Hawking radiation?",
                    es: "¿Qué es la radiación de Hawking?",
                    de: "Was ist Hawking-Strahlung?",
                    nl: "Wat is Hawkingstraling?"
                },
                options: [
                    { en: "Theoretical radiation that causes black holes to slowly evaporate", es: "Radiación teórica que causa que los agujeros negros se evaporen lentamente", de: "Theoretische Strahlung, die schwarze Löcher langsam verdampfen lässt", nl: "Theoretische straling die zwarte gaten langzaam doet verdampen" },
                    { en: "Radiation from the physicist Stephen Hawking", es: "Radiación del físico Stephen Hawking", de: "Strahlung vom Physiker Stephen Hawking", nl: "Straling van de natuurkundige Stephen Hawking" },
                    { en: "Radiation that hawks use to navigate", es: "Radiación que usan los halcones para navegar", de: "Strahlung, die Falken zur Navigation verwenden", nl: "Straling die haviken gebruiken om te navigeren" },
                    { en: "Very dangerous radiation from space", es: "Radiación muy peligrosa del espacio", de: "Sehr gefährliche Strahlung aus dem Weltraum", nl: "Zeer gevaarlijke straling uit de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a magnetosphere?",
                    es: "¿Qué es una magnetosfera?",
                    de: "Was ist eine Magnetosphäre?",
                    nl: "Wat is een magnetosfeer?"
                },
                options: [
                    { en: "A magnetic field around a planet that protects it from solar wind", es: "Un campo magnético alrededor de un planeta que lo protege del viento solar", de: "Ein Magnetfeld um einen Planeten, das ihn vor dem Sonnenwind schützt", nl: "Een magnetisch veld rond een planeet dat het beschermt tegen zonnewind" },
                    { en: "A sphere made of magnets", es: "Una esfera hecha de imanes", de: "Eine Kugel aus Magneten", nl: "Een bol gemaakt van magneten" },
                    { en: "The atmosphere of magnetic planets", es: "La atmósfera de planetas magnéticos", de: "Die Atmosphäre magnetischer Planeten", nl: "De atmosfeer van magnetische planeten" },
                    { en: "A type of space helmet", es: "Un tipo de casco espacial", de: "Eine Art Weltraumhelm", nl: "Een soort ruimtehelm" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a solar flare?",
                    es: "¿Qué es una llamarada solar?",
                    de: "Was ist eine Sonneneruption?",
                    nl: "Wat is een zonnevlam?"
                },
                options: [
                    { en: "A sudden release of magnetic energy from the Sun's surface", es: "Una liberación repentina de energía magnética de la superficie del Sol", de: "Eine plötzliche Freisetzung magnetischer Energie von der Sonnenoberfläche", nl: "Een plotselinge vrijgave van magnetische energie van het oppervlak van de Zon" },
                    { en: "A flame that burns on the Sun", es: "Una llama que arde en el Sol", de: "Eine Flamme, die auf der Sonne brennt", nl: "Een vlam die op de Zon brandt" },
                    { en: "Sunlight reflecting off solar panels", es: "Luz solar reflejándose en paneles solares", de: "Sonnenlicht, das von Solarpanels reflektiert wird", nl: "Zonlicht dat weerkaatst van zonnepanelen" },
                    { en: "A type of aurora", es: "Un tipo de aurora", de: "Eine Art Nordlicht", nl: "Een soort noorderlicht" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a coronal mass ejection (CME)?",
                    es: "¿Qué es una eyección de masa coronal (EMC)?",
                    de: "Was ist ein koronaler Massenauswurf (KMA)?",
                    nl: "Wat is een coronale massa-uitworp (CME)?"
                },
                options: [
                    { en: "A large burst of solar wind and magnetic field from the Sun's corona", es: "Una gran ráfaga de viento solar y campo magnético de la corona del Sol", de: "Ein großer Ausbruch von Sonnenwind und Magnetfeld aus der Sonnenkorona", nl: "Een grote uitbarsting van zonnewind en magnetisch veld uit de corona van de Zon" },
                    { en: "When the Sun's crown falls off", es: "Cuando se cae la corona del Sol", de: "Wenn die Krone der Sonne abfällt", nl: "Wanneer de kroon van de Zon afvalt" },
                    { en: "A type of solar eclipse", es: "Un tipo de eclipse solar", de: "Eine Art Sonnenfinsternis", nl: "Een soort zonsverduistering" },
                    { en: "Gas escaping from solar panels", es: "Gas escapando de paneles solares", de: "Gas, das aus Solarpanels entweicht", nl: "Gas dat ontsnapt uit zonnepanelen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is time dilation near a black hole?",
                    es: "¿Qué es la dilatación del tiempo cerca de un agujero negro?",
                    de: "Was ist Zeitdilatation in der Nähe eines schwarzen Lochs?",
                    nl: "Wat is tijddilatatie nabij een zwart gat?"
                },
                options: [
                    { en: "Time appears to slow down due to strong gravity", es: "El tiempo parece ralentizarse debido a la fuerte gravedad", de: "Zeit scheint sich aufgrund starker Schwerkraft zu verlangsamen", nl: "Tijd lijkt trager te gaan door sterke zwaartekracht" },
                    { en: "Time speeds up", es: "El tiempo se acelera", de: "Zeit beschleunigt", nl: "Tijd versnelt" },
                    { en: "Time goes backwards", es: "El tiempo va hacia atrás", de: "Zeit geht rückwärts", nl: "Tijd gaat achteruit" },
                    { en: "Time stops for everyone", es: "El tiempo se detiene para todos", de: "Zeit hört für alle auf", nl: "Tijd stopt voor iedereen" }
                ],
                correct: 0
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
                    { en: "A type of star that quasi-rotates", es: "Un tipo de estrella que cuasi-rota", de: "Eine Art Stern, der quasi-rotiert", nl: "Een soort ster die quasi-roteert" },
                    { en: "A quarter of a pulsar", es: "Un cuarto de un púlsar", de: "Ein Viertel eines Pulsars", nl: "Een kwart van een pulsar" },
                    { en: "A small galaxy", es: "Una galaxia pequeña", de: "Eine kleine Galaxie", nl: "Een klein sterrenstelsel" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is gravitational lensing?",
                    es: "¿Qué es la lente gravitacional?",
                    de: "Was ist Gravitationslinseneffekt?",
                    nl: "Wat is gravitationele lensvorming?"
                },
                options: [
                    { en: "When massive objects bend light due to their gravity", es: "Cuando objetos masivos doblan la luz debido a su gravedad", de: "Wenn massive Objekte Licht aufgrund ihrer Schwerkraft beugen", nl: "Wanneer massieve objecten licht buigen door hun zwaartekracht" },
                    { en: "Special lenses that can see gravity", es: "Lentes especiales que pueden ver la gravedad", de: "Spezielle Linsen, die Schwerkraft sehen können", nl: "Speciale lenzen die zwaartekracht kunnen zien" },
                    { en: "When light creates gravity", es: "Cuando la luz crea gravedad", de: "Wenn Licht Schwerkraft erzeugt", nl: "Wanneer licht zwaartekracht creëert" },
                    { en: "Telescopes that use gravity to focus", es: "Telescopios que usan gravedad para enfocar", de: "Teleskope, die Schwerkraft zum Fokussieren verwenden", nl: "Telescopen die zwaartekracht gebruiken om te focussen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a brown dwarf?",
                    es: "¿Qué es una enana marrón?",
                    de: "Was ist ein Brauner Zwerg?",
                    nl: "Wat is een bruine dwerg?"
                },
                options: [
                    { en: "A failed star that didn't get hot enough for nuclear fusion", es: "Una estrella fallida que no se calentó lo suficiente para la fusión nuclear", de: "Ein gescheiterter Stern, der nicht heiß genug für Kernfusion wurde", nl: "Een mislukte ster die niet heet genoeg werd voor kernfusie" },
                    { en: "A very small brown-colored star", es: "Una estrella muy pequeña de color marrón", de: "Ein sehr kleiner braunfarbiger Stern", nl: "Een heel kleine bruin gekleurde ster" },
                    { en: "A dwarf planet that is brown", es: "Un planeta enano que es marrón", de: "Ein Zwergplanet, der braun ist", nl: "Een dwergplaneet die bruin is" },
                    { en: "A type of asteroid", es: "Un tipo de asteroide", de: "Eine Art Asteroid", nl: "Een soort asteroïde" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happens when two black holes collide?",
                    es: "¿Qué pasa cuando dos agujeros negros chocan?",
                    de: "Was passiert, wenn zwei schwarze Löcher kollidieren?",
                    nl: "Wat gebeurt er wanneer twee zwarte gaten botsen?"
                },
                options: [
                    { en: "They merge and create gravitational waves", es: "Se fusionan y crean ondas gravitacionales", de: "Sie verschmelzen und erzeugen Gravitationswellen", nl: "Ze versmelten en creëren gravitatiegolven" },
                    { en: "They bounce off each other", es: "Rebotan entre sí", de: "Sie prallen voneinander ab", nl: "Ze ketsen van elkaar af" },
                    { en: "They explode and disappear", es: "Explotan y desaparecen", de: "Sie explodieren und verschwinden", nl: "Ze exploderen en verdwijnen" },
                    { en: "They create a wormhole", es: "Crean un agujero de gusano", de: "Sie erschaffen ein Wurmloch", nl: "Ze creëren een wormgat" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What are gravitational waves?",
                    es: "¿Qué son las ondas gravitacionales?",
                    de: "Was sind Gravitationswellen?",
                    nl: "Wat zijn gravitatiegolven?"
                },
                options: [
                    { en: "Ripples in space-time caused by accelerating massive objects", es: "Ondulaciones en el espacio-tiempo causadas por objetos masivos en aceleración", de: "Wellen in der Raumzeit, die durch beschleunigende massive Objekte verursacht werden", nl: "Rimpelingen in ruimte-tijd veroorzaakt door versnellende massieve objecten" },
                    { en: "Waves of gravity that push objects around", es: "Ondas de gravedad que empujan objetos", de: "Gravitationswellen, die Objekte herumschieben", nl: "Zwaartekrachtgolven die objecten rondduwen" },
                    { en: "Ocean waves caused by gravity", es: "Ondas oceánicas causadas por la gravedad", de: "Ozeanwellen, die durch Schwerkraft verursacht werden", nl: "Oceaangolven veroorzaakt door zwaartekracht" },
                    { en: "Sound waves from massive objects", es: "Ondas sonoras de objetos masivos", de: "Schallwellen von massiven Objekten", nl: "Geluidsgolven van massieve objecten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the accretion disk around a black hole?",
                    es: "¿Qué es el disco de acreción alrededor de un agujero negro?",
                    de: "Was ist die Akkretionsscheibe um ein schwarzes Loch?",
                    nl: "Wat is de accretieschijf rond een zwart gat?"
                },
                options: [
                    { en: "Hot, swirling matter spiraling into the black hole", es: "Materia caliente y arremolinada en espiral hacia el agujero negro", de: "Heiße, wirbelnde Materie, die in das schwarze Loch spiralt", nl: "Hete, wervelende materie die in spiraal naar het zwarte gat gaat" },
                    { en: "A solid disk that blocks the black hole", es: "Un disco sólido que bloquea el agujero negro", de: "Eine feste Scheibe, die das schwarze Loch blockiert", nl: "Een vaste schijf die het zwarte gat blokkeert" },
                    { en: "A musical record playing around the black hole", es: "Un disco musical tocando alrededor del agujero negro", de: "Eine Schallplatte, die um das schwarze Loch spielt", nl: "Een muziekplaat die rond het zwarte gat speelt" },
                    { en: "Cold gas floating near the black hole", es: "Gas frío flotando cerca del agujero negro", de: "Kaltes Gas, das in der Nähe des schwarzen Lochs schwebt", nl: "Koud gas dat drijft nabij het zwarte gat" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a Wolf-Rayet star?",
                    es: "¿Qué es una estrella Wolf-Rayet?",
                    de: "Was ist ein Wolf-Rayet-Stern?",
                    nl: "Wat is een Wolf-Rayet ster?"
                },
                options: [
                    { en: "A massive, hot star that's losing its outer layers rapidly", es: "Una estrella masiva y caliente que está perdiendo sus capas externas rápidamente", de: "Ein massereicher, heißer Stern, der seine äußeren Schichten schnell verliert", nl: "Een massieve, hete ster die zijn buitenste lagen snel verliest" },
                    { en: "A star that looks like a wolf", es: "Una estrella que parece un lobo", de: "Ein Stern, der wie ein Wolf aussieht", nl: "Een ster die eruitziet als een wolf" },
                    { en: "A binary star system", es: "Un sistema estelar binario", de: "Ein Doppelsternsystem", nl: "Een dubbelsterren systeem" },
                    { en: "A star discovered by a person named Rayet", es: "Una estrella descubierta por una persona llamada Rayet", de: "Ein Stern, der von einer Person namens Rayet entdeckt wurde", nl: "Een ster ontdekt door een persoon genaamd Rayet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is cosmic background radiation?",
                    es: "¿Qué es la radiación cósmica de fondo?",
                    de: "Was ist die kosmische Hintergrundstrahlung?",
                    nl: "Wat is kosmische achtergrondstraling?"
                },
                options: [
                    { en: "Leftover radiation from the Big Bang that fills the universe", es: "Radiación residual del Big Bang que llena el universo", de: "Übrig gebliebene Strahlung vom Urknall, die das Universum füllt", nl: "Overgebleven straling van de Oerknal die het heelal vult" },
                    { en: "Radiation from all the stars combined", es: "Radiación de todas las estrellas combinadas", de: "Strahlung von allen Sternen zusammen", nl: "Straling van alle sterren gecombineerd" },
                    { en: "Background music playing in space", es: "Música de fondo tocando en el espacio", de: "Hintergrundmusik, die im Weltraum spielt", nl: "Achtergrondmuziek die in de ruimte speelt" },
                    { en: "Radiation from cosmic rays", es: "Radiación de rayos cósmicos", de: "Strahlung von kosmischen Strahlen", nl: "Straling van kosmische stralen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a hypernova?",
                    es: "¿Qué es una hipernova?",
                    de: "Was ist eine Hypernova?",
                    nl: "Wat is een hypernova?"
                },
                options: [
                    { en: "An extremely energetic supernova explosion from a very massive star", es: "Una explosión de supernova extremadamente energética de una estrella muy masiva", de: "Eine extrem energiereiche Supernova-Explosion von einem sehr massereichen Stern", nl: "Een extreem energieke supernova-explosie van een zeer massieve ster" },
                    { en: "A supernova that happens very quickly", es: "Una supernova que pasa muy rápido", de: "Eine Supernova, die sehr schnell passiert", nl: "Een supernova die heel snel gebeurt" },
                    { en: "A nova that's hyperactive", es: "Una nova que es hiperactiva", de: "Eine Nova, die hyperaktiv ist", nl: "Een nova die hyperactief is" },
                    { en: "Multiple supernovas happening at once", es: "Múltiples supernovas ocurriendo a la vez", de: "Mehrere Supernovas passieren gleichzeitig", nl: "Meerdere supernova's die tegelijk gebeuren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the solar wind?",
                    es: "¿Qué es el viento solar?",
                    de: "Was ist der Sonnenwind?",
                    nl: "Wat is zonnewind?"
                },
                options: [
                    { en: "A stream of charged particles flowing from the Sun", es: "Un flujo de partículas cargadas que fluye desde el Sol", de: "Ein Strom geladener Teilchen, der von der Sonne fließt", nl: "Een stroom van geladen deeltjes die van de Zon stroomt" },
                    { en: "Wind on the surface of the Sun", es: "Viento en la superficie del Sol", de: "Wind auf der Oberfläche der Sonne", nl: "Wind op het oppervlak van de Zon" },
                    { en: "Air currents caused by solar panels", es: "Corrientes de aire causadas por paneles solares", de: "Luftströmungen, die durch Solarpanels verursacht werden", nl: "Luchtstromen veroorzaakt door zonnepanelen" },
                    { en: "Weather on planets caused by the Sun", es: "Clima en planetas causado por el Sol", de: "Wetter auf Planeten, das durch die Sonne verursacht wird", nl: "Weer op planeten veroorzaakt door de Zon" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a white dwarf star?",
                    es: "¿Qué es una estrella enana blanca?",
                    de: "Was ist ein weißer Zwergstern?",
                    nl: "Wat is een witte dwergster?"
                },
                options: [
                    { en: "The hot, dense core left after a medium-mass star dies", es: "El núcleo caliente y denso que queda después de que muere una estrella de masa media", de: "Der heiße, dichte Kern, der nach dem Tod eines mittleren Sterns übrig bleibt", nl: "De hete, dichte kern die overblijft nadat een middelgrote ster sterft" },
                    { en: "A very small white colored star", es: "Una estrella muy pequeña de color blanco", de: "Ein sehr kleiner weißfarbiger Stern", nl: "Een heel kleine wit gekleurde ster" },
                    { en: "A star that only shines white light", es: "Una estrella que solo brilla luz blanca", de: "Ein Stern, der nur weißes Licht leuchtet", nl: "Een ster die alleen wit licht schijnt" },
                    { en: "A dwarf star that is very bright", es: "Una estrella enana que es muy brillante", de: "Ein Zwergstern, der sehr hell ist", nl: "Een dwergster die heel helder is" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is antimatter?",
                    es: "¿Qué es la antimateria?",
                    de: "Was ist Antimaterie?",
                    nl: "Wat is antimaterie?"
                },
                options: [
                    { en: "Matter made of particles with opposite charges to normal matter", es: "Materia hecha de partículas con cargas opuestas a la materia normal", de: "Materie aus Teilchen mit entgegengesetzten Ladungen zur normalen Materie", nl: "Materie gemaakt van deeltjes met tegenovergestelde ladingen aan normale materie" },
                    { en: "Matter that is against everything", es: "Materia que está en contra de todo", de: "Materie, die gegen alles ist", nl: "Materie die tegen alles is" },
                    { en: "The opposite of dark matter", es: "Lo opuesto a la materia oscura", de: "Das Gegenteil von dunkler Materie", nl: "Het tegenovergestelde van donkere materie" },
                    { en: "Matter that doesn't exist", es: "Materia que no existe", de: "Materie, die nicht existiert", nl: "Materie die niet bestaat" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the heliopause?",
                    es: "¿Qué es la heliopausa?",
                    de: "Was ist die Heliopause?",
                    nl: "Wat is de heliopauze?"
                },
                options: [
                    { en: "The boundary where the solar wind meets interstellar space", es: "El límite donde el viento solar se encuentra con el espacio interestelar", de: "Die Grenze, wo der Sonnenwind auf den interstellaren Raum trifft", nl: "De grens waar de zonnewind de interstellaire ruimte ontmoet" },
                    { en: "When the Sun stops shining", es: "Cuando el Sol deja de brillar", de: "Wenn die Sonne aufhört zu scheinen", nl: "Wanneer de Zon stopt met schijnen" },
                    { en: "A pause in solar activity", es: "Una pausa en la actividad solar", de: "Eine Pause in der Sonnenaktivität", nl: "Een pauze in zonneactiviteit" },
                    { en: "The center of the Sun", es: "El centro del Sol", de: "Das Zentrum der Sonne", nl: "Het centrum van de Zon" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What creates the rings around gas giant planets?",
                    es: "¿Qué crea los anillos alrededor de los planetas gigantes gaseosos?",
                    de: "Was erzeugt die Ringe um Gasriesenplaneten?",
                    nl: "Wat creëert de ringen rond gasreuze planeten?"
                },
                options: [
                    { en: "Broken-up moons or captured debris orbiting the planet", es: "Lunas fragmentadas o escombros capturados orbitando el planeta", de: "Zerbrochene Monde oder eingefangene Trümmer, die den Planeten umkreisen", nl: "Gebroken manen of gevangen puin dat de planeet omcirkelt" },
                    { en: "Solid metal rings built by aliens", es: "Anillos de metal sólido construidos por extraterrestres", de: "Feste Metallringe, die von Außerirdischen gebaut wurden", nl: "Solide metalen ringen gebouwd door buitenaardse wezens" },
                    { en: "Frozen water from comets", es: "Agua congelada de cometas", de: "Gefrorenes Wasser von Kometen", nl: "Bevroren water van kometen" },
                    { en: "Gas that got flattened around the planet", es: "Gas que se aplanó alrededor del planeta", de: "Gas, das um den Planeten abgeflacht wurde", nl: "Gas dat plat werd gedrukt rond de planeet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is a magnetar?",
                    es: "¿Qué es un magnetar?",
                    de: "Was ist ein Magnetar?",
                    nl: "Wat is een magnetar?"
                },
                options: [
                    { en: "A neutron star with an extremely powerful magnetic field", es: "Una estrella de neutrones con un campo magnético extremadamente poderoso", de: "Ein Neutronenstern mit einem extrem starken Magnetfeld", nl: "Een neutronenster met een extreem krachtig magnetisch veld" },
                    { en: "A star made entirely of magnets", es: "Una estrella hecha completamente de imanes", de: "Ein Stern, der vollständig aus Magneten besteht", nl: "Een ster die volledig uit magneten bestaat" },
                    { en: "A magnetic planet", es: "Un planeta magnético", de: "Ein magnetischer Planet", nl: "Een magnetische planeet" },
                    { en: "A tool used to study magnetic fields", es: "Una herramienta usada para estudiar campos magnéticos", de: "Ein Werkzeug zum Studium magnetischer Felder", nl: "Een gereedschap gebruikt om magnetische velden te bestuderen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happens when matter meets antimatter?",
                    es: "¿Qué pasa cuando la materia se encuentra con la antimateria?",
                    de: "Was passiert, wenn Materie auf Antimaterie trifft?",
                    nl: "Wat gebeurt er wanneer materie antimaterie ontmoet?"
                },
                options: [
                    { en: "They annihilate each other and release pure energy", es: "Se aniquilan mutuamente y liberan energía pura", de: "Sie vernichten sich gegenseitig und setzen reine Energie frei", nl: "Ze vernietigen elkaar en geven pure energie vrij" },
                    { en: "They stick together", es: "Se pegan", de: "Sie kleben zusammen", nl: "Ze plakken aan elkaar" },
                    { en: "Nothing happens", es: "No pasa nada", de: "Es passiert nichts", nl: "Er gebeurt niets" },
                    { en: "They create more matter", es: "Crean más materia", de: "Sie erzeugen mehr Materie", nl: "Ze creëren meer materie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the Oort Cloud?",
                    es: "¿Qué es la Nube de Oort?",
                    de: "Was ist die Oort-Wolke?",
                    nl: "Wat is de Oortwolk?"
                },
                options: [
                    { en: "A spherical shell of icy objects at the edge of our solar system", es: "Una cáscara esférica de objetos helados en el borde de nuestro sistema solar", de: "Eine kugelförmige Hülle eisiger Objekte am Rand unseres Sonnensystems", nl: "Een bolvormige schil van ijzige objecten aan de rand van ons zonnestelsel" },
                    { en: "A cloud made by scientist Oort", es: "Una nube hecha por el científico Oort", de: "Eine Wolke, die vom Wissenschaftler Oort gemacht wurde", nl: "Een wolk gemaakt door wetenschapper Oort" },
                    { en: "Storm clouds on Jupiter", es: "Nubes de tormenta en Júpiter", de: "Sturmwolken auf Jupiter", nl: "Stormwolken op Jupiter" },
                    { en: "A nebula near Earth", es: "Una nebulosa cerca de la Tierra", de: "Ein Nebel in der Nähe der Erde", nl: "Een nevel nabij de Aarde" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is vacuum decay?",
                    es: "¿Qué es la desintegración del vacío?",
                    de: "Was ist Vakuumzerfall?",
                    nl: "Wat is vacuümverval?"
                },
                options: [
                    { en: "A theoretical process where empty space itself could become unstable", es: "Un proceso teórico donde el espacio vacío podría volverse inestable", de: "Ein theoretischer Prozess, bei dem der leere Raum selbst instabil werden könnte", nl: "Een theoretisch proces waarbij lege ruimte zelf instabiel zou kunnen worden" },
                    { en: "When vacuum cleaners break", es: "Cuando las aspiradoras se rompen", de: "Wenn Staubsauger kaputt gehen", nl: "Wanneer stofzuigers kapot gaan" },
                    { en: "Air leaking out of a spacecraft", es: "Aire filtrándose de una nave espacial", de: "Luft, die aus einem Raumschiff entweicht", nl: "Lucht die lekt uit een ruimteschip" },
                    { en: "The process of creating a vacuum", es: "El proceso de crear un vacío", de: "Der Prozess ein Vakuum zu schaffen", nl: "Het proces van het creëren van een vacuüm" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is Cherenkov radiation?",
                    es: "¿Qué es la radiación Cherenkov?",
                    de: "Was ist Cherenkov-Strahlung?",
                    nl: "Wat is Cherenkovstraling?"
                },
                options: [
                    { en: "Blue light emitted when particles travel faster than light in a medium", es: "Luz azul emitida cuando las partículas viajan más rápido que la luz en un medio", de: "Blaues Licht, das emittiert wird, wenn Teilchen schneller als Licht in einem Medium reisen", nl: "Blauw licht uitgestraald wanneer deeltjes sneller reizen dan licht in een medium" },
                    { en: "Radiation from the scientist Cherenkov", es: "Radiación del científico Cherenkov", de: "Strahlung vom Wissenschaftler Cherenkov", nl: "Straling van wetenschapper Cherenkov" },
                    { en: "A type of nuclear radiation", es: "Un tipo de radiación nuclear", de: "Eine Art Kernstrahlung", nl: "Een soort nucleaire straling" },
                    { en: "Light from cosmic rays", es: "Luz de rayos cósmicos", de: "Licht von kosmischen Strahlen", nl: "Licht van kosmische stralen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What causes the different phases of matter in space?",
                    es: "¿Qué causa las diferentes fases de la materia en el espacio?",
                    de: "Was verursacht die verschiedenen Phasen der Materie im Weltraum?",
                    nl: "Wat veroorzaakt de verschillende fasen van materie in de ruimte?"
                },
                options: [
                    { en: "Temperature and pressure differences in different regions", es: "Diferencias de temperatura y presión en diferentes regiones", de: "Temperatur- und Druckunterschiede in verschiedenen Regionen", nl: "Temperatuur- en drukverschillen in verschillende gebieden" },
                    { en: "Different types of atoms", es: "Diferentes tipos de átomos", de: "Verschiedene Arten von Atomen", nl: "Verschillende soorten atomen" },
                    { en: "Age of the matter", es: "Edad de la materia", de: "Alter der Materie", nl: "Leeftijd van de materie" },
                    { en: "Distance from Earth", es: "Distancia de la Tierra", de: "Entfernung zur Erde", nl: "Afstand tot de Aarde" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the role of dark energy in space phenomena?",
                    es: "¿Cuál es el papel de la energía oscura en los fenómenos espaciales?",
                    de: "Welche Rolle spielt dunkle Energie bei Weltraum-Phänomenen?",
                    nl: "Wat is de rol van donkere energie in ruimtefenomenen?"
                },
                options: [
                    { en: "It causes the accelerating expansion of the universe", es: "Causa la expansión acelerada del universo", de: "Sie verursacht die beschleunigte Ausdehnung des Universums", nl: "Het veroorzaakt de versnellende uitbreiding van het heelal" },
                    { en: "It creates black holes", es: "Crea agujeros negros", de: "Es erschafft schwarze Löcher", nl: "Het creëert zwarte gaten" },
                    { en: "It makes stars shine", es: "Hace que las estrellas brillen", de: "Es lässt Sterne leuchten", nl: "Het laat sterren schijnen" },
                    { en: "It holds galaxies together", es: "Mantiene las galaxias unidas", de: "Es hält Galaxien zusammen", nl: "Het houdt sterrenstelsels bij elkaar" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why are space phenomena important to study?",
                    es: "¿Por qué es importante estudiar los fenómenos espaciales?",
                    de: "Warum ist es wichtig, Weltraum-Phänomene zu studieren?",
                    nl: "Waarom is het belangrijk om ruimtefenomenen te bestuderen?"
                },
                options: [
                    { en: "They help us understand the fundamental laws of physics and the universe", es: "Nos ayudan a entender las leyes fundamentales de la física y el universo", de: "Sie helfen uns, die fundamentalen Gesetze der Physik und des Universums zu verstehen", nl: "Ze helpen ons de fundamentele wetten van de natuurkunde en het heelal te begrijpen" },
                    { en: "Just for entertainment", es: "Solo por entretenimiento", de: "Nur zur Unterhaltung", nl: "Alleen voor entertainment" },
                    { en: "To find new planets to live on", es: "Para encontrar nuevos planetas donde vivir", de: "Um neue Planeten zum Leben zu finden", nl: "Om nieuwe planeten te vinden om op te wonen" },
                    { en: "To impress other countries", es: "Para impresionar a otros países", de: "Um andere Länder zu beeindrucken", nl: "Om andere landen te imponeren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is the interstellar medium?",
                    es: "¿Qué es el medio interestelar?",
                    de: "Was ist das interstellare Medium?",
                    nl: "Wat is het interstellaire medium?"
                },
                options: [
                    { en: "Gas and dust that exists between stars in a galaxy", es: "Gas y polvo que existe entre las estrellas en una galaxia", de: "Gas und Staub, die zwischen den Sternen in einer Galaxie existieren", nl: "Gas en stof die bestaat tussen sterren in een sterrenstelsel" },
                    { en: "The atmosphere of space stations", es: "La atmósfera de las estaciones espaciales", de: "Die Atmosphäre von Raumstationen", nl: "De atmosfeer van ruimtestations" },
                    { en: "The air between planets", es: "El aire entre planetas", de: "Die Luft zwischen Planeten", nl: "De lucht tussen planeten" },
                    { en: "Communication signals between stars", es: "Señales de comunicación entre estrellas", de: "Kommunikationssignale zwischen Sternen", nl: "Communicatiesignalen tussen sterren" }
                ],
                correct: 0,
                explanation: {
                    en: "The interstellar medium is mostly hydrogen and helium with traces of heavier elements, and it's where new stars are born.",
                    es: "El medio interestelar es principalmente hidrógeno y helio con trazas de elementos más pesados, y es donde nacen nuevas estrellas.",
                    de: "Das interstellare Medium besteht hauptsächlich aus Wasserstoff und Helium mit Spuren schwererer Elemente, und dort entstehen neue Sterne.",
                    nl: "Het interstellaire medium bestaat voornamelijk uit waterstof en helium met sporen van zwaardere elementen, en het is waar nieuwe sterren geboren worden."
                }
            },
            {
                question: {
                    en: "What is frame-dragging near a rotating black hole?",
                    es: "¿Qué es el arrastre del marco cerca de un agujero negro en rotación?",
                    de: "Was ist Rahmen-Mitnahme in der Nähe eines rotierenden schwarzen Lochs?",
                    nl: "Wat is frame-dragging nabij een roterend zwart gat?"
                },
                options: [
                    { en: "The spinning black hole drags space-time around with it", es: "El agujero negro giratorio arrastra el espacio-tiempo consigo", de: "Das rotierende schwarze Loch zieht die Raumzeit mit sich", nl: "Het draaiende zwarte gat sleept ruimte-tijd mee" },
                    { en: "Pictures of the black hole become blurry", es: "Las imágenes del agujero negro se vuelven borrosas", de: "Bilder des schwarzen Lochs werden unscharf", nl: "Foto's van het zwarte gat worden wazig" },
                    { en: "The black hole moves very slowly", es: "El agujero negro se mueve muy lentamente", de: "Das schwarze Loch bewegt sich sehr langsam", nl: "Het zwarte gat beweegt heel langzaam" },
                    { en: "Objects near it start spinning backwards", es: "Los objetos cerca de él comienzan a girar hacia atrás", de: "Objekte in seiner Nähe beginnen rückwärts zu rotieren", nl: "Objecten in de buurt beginnen achterwaarts te draaien" }
                ],
                correct: 0,
                explanation: {
                    en: "This effect, predicted by Einstein's general relativity, has been measured around Earth and confirmed near supermassive black holes.",
                    es: "Este efecto, predicho por la relatividad general de Einstein, ha sido medido alrededor de la Tierra y confirmado cerca de agujeros negros supermasivos.",
                    de: "Dieser von Einsteins allgemeiner Relativitätstheorie vorhergesagte Effekt wurde um die Erde gemessen und in der Nähe supermassereicheer schwarzer Löcher bestätigt.",
                    nl: "Dit effect, voorspeld door Einsteins algemene relativiteitstheorie, is gemeten rond de Aarde en bevestigd nabij superzware zwarte gaten."
                }
            },
            {
                question: {
                    en: "What are cosmic strings?",
                    es: "¿Qué son las cuerdas cósmicas?",
                    de: "Was sind kosmische Strings?",
                    nl: "Wat zijn kosmische strings?"
                },
                options: [
                    { en: "Theoretical one-dimensional defects in space-time", es: "Defectos unidimensionales teóricos en el espacio-tiempo", de: "Theoretische eindimensionale Defekte in der Raumzeit", nl: "Theoretische eendimensionale defecten in ruimte-tijd" },
                    { en: "Guitar strings that play cosmic music", es: "Cuerdas de guitarra que tocan música cósmica", de: "Gitarrensaiten, die kosmische Musik spielen", nl: "Gitaarsnaren die kosmische muziek spelen" },
                    { en: "Cables connecting different galaxies", es: "Cables que conectan diferentes galaxias", de: "Kabel, die verschiedene Galaxien verbinden", nl: "Kabels die verschillende sterrenstelsels verbinden" },
                    { en: "Thin streams of dark matter", es: "Corrientes delgadas de materia oscura", de: "Dünne Ströme dunkler Materie", nl: "Dunne stromen van donkere materie" }
                ],
                correct: 0,
                explanation: {
                    en: "If they exist, cosmic strings would be incredibly thin but potentially stretch across the universe, affecting space-time around them.",
                    es: "Si existen, las cuerdas cósmicas serían increíblemente delgadas pero potencialmente se extenderían por todo el universo, afectando el espacio-tiempo a su alrededor.",
                    de: "Falls sie existieren, wären kosmische Strings unglaublich dünn, könnten sich aber möglicherweise über das ganze Universum erstrecken und die Raumzeit um sie herum beeinflussen.",
                    nl: "Als ze bestaan, zouden kosmische strings ongelooflijk dun zijn maar mogelijk zich uitstrekken over het heelal, en de ruimte-tijd eromheen beïnvloeden."
                }
            },
            {
                question: {
                    en: "What is a kilonova?",
                    es: "¿Qué es una kilonova?",
                    de: "Was ist eine Kilonova?",
                    nl: "Wat is een kilonova?"
                },
                options: [
                    { en: "An explosion from the collision of two neutron stars", es: "Una explosión de la colisión de dos estrellas de neutrones", de: "Eine Explosion aus der Kollision zweier Neutronensterne", nl: "Een explosie van de botsing van twee neutronensterren" },
                    { en: "A nova that happens a thousand times", es: "Una nova que pasa mil veces", de: "Eine Nova, die tausend Mal passiert", nl: "Een nova die duizend keer gebeurt" },
                    { en: "A very small supernova", es: "Una supernova muy pequeña", de: "Eine sehr kleine Supernova", nl: "Een zeer kleine supernova" },
                    { en: "An explosion involving a thousand stars", es: "Una explosión que involucra mil estrellas", de: "Eine Explosion mit tausend Sternen", nl: "Een explosie waarbij duizend sterren betrokken zijn" }
                ],
                correct: 0,
                explanation: {
                    en: "Kilonovae are the primary source of heavy elements like gold and platinum in the universe, forged in the extreme conditions of neutron star mergers.",
                    es: "Las kilonovas son la fuente principal de elementos pesados como oro y platino en el universo, forjados en las condiciones extremas de fusiones de estrellas de neutrones.",
                    de: "Kilonovae sind die Hauptquelle schwerer Elemente wie Gold und Platin im Universum, die in den extremen Bedingungen von Neutronensternverschmelzungen geschmiedet werden.",
                    nl: "Kilonovas zijn de primaire bron van zware elementen zoals goud en platina in het heelal, gesmeed in de extreme omstandigheden van neutronensterfusies."
                }
            },
            {
                question: {
                    en: "What is Hawking-Unruh radiation?",
                    es: "¿Qué es la radiación Hawking-Unruh?",
                    de: "Was ist Hawking-Unruh-Strahlung?",
                    nl: "Wat is Hawking-Unruhstraling?"
                },
                options: [
                    { en: "Radiation detected by accelerating observers in empty space", es: "Radiación detectada por observadores acelerados en el espacio vacío", de: "Strahlung, die von beschleunigenden Beobachtern im leeren Raum erkannt wird", nl: "Straling gedetecteerd door versnellende waarnemers in lege ruimte" },
                    { en: "A combination of two different types of dangerous radiation", es: "Una combinación de dos tipos diferentes de radiación peligrosa", de: "Eine Kombination zweier verschiedener Arten gefährlicher Strahlung", nl: "Een combinatie van twee verschillende soorten gevaarlijke straling" },
                    { en: "Radiation from two scientists working together", es: "Radiación de dos científicos trabajando juntos", de: "Strahlung von zwei Wissenschaftlern, die zusammenarbeiten", nl: "Straling van twee wetenschappers die samenwerken" },
                    { en: "The total radiation output of black holes", es: "La producción total de radiación de los agujeros negros", de: "Die gesamte Strahlungsausgabe schwarzer Löcher", nl: "De totale stralingsuitvoer van zwarte gaten" }
                ],
                correct: 0,
                explanation: {
                    en: "This effect shows that the detection of particles depends on the observer's motion, revealing deep connections between gravity, acceleration, and thermodynamics.",
                    es: "Este efecto muestra que la detección de partículas depende del movimiento del observador, revelando conexiones profundas entre gravedad, aceleración y termodinámica.",
                    de: "Dieser Effekt zeigt, dass die Erkennung von Teilchen von der Bewegung des Beobachters abhängt und tiefe Verbindungen zwischen Schwerkraft, Beschleunigung und Thermodynamik offenbart.",
                    nl: "Dit effect toont dat de detectie van deeltjes afhangt van de beweging van de waarnemer, en onthult diepe verbindingen tussen zwaartekracht, versnelling en thermodynamica."
                }
            },
            {
                question: {
                    en: "What is the cosmic neutrino background?",
                    es: "¿Qué es el fondo cósmico de neutrinos?",
                    de: "Was ist der kosmische Neutrino-Hintergrund?",
                    nl: "Wat is de kosmische neutrino-achtergrond?"
                },
                options: [
                    { en: "Relic neutrinos from the early universe that fill all of space", es: "Neutrinos reliquia del universo temprano que llenan todo el espacio", de: "Relikte-Neutrinos aus dem frühen Universum, die den ganzen Raum füllen", nl: "Overblijfsel-neutrino's van het vroege heelal die alle ruimte vullen" },
                    { en: "Neutrinos produced by all the stars in the background", es: "Neutrinos producidos por todas las estrellas en el fondo", de: "Neutrinos, die von allen Sternen im Hintergrund produziert werden", nl: "Neutrino's geproduceerd door alle sterren op de achtergrond" },
                    { en: "The sound neutrinos make in space", es: "El sonido que hacen los neutrinos en el espacio", de: "Das Geräusch, das Neutrinos im Weltraum machen", nl: "Het geluid dat neutrino's maken in de ruimte" },
                    { en: "Neutrinos that hide behind other particles", es: "Neutrinos que se esconden detrás de otras partículas", de: "Neutrinos, die sich hinter anderen Teilchen verstecken", nl: "Neutrino's die zich verstoppen achter andere deeltjes" }
                ],
                correct: 0,
                explanation: {
                    en: "These primordial neutrinos decoupled from matter when the universe was very young and should still permeate space, though they're extremely difficult to detect.",
                    es: "Estos neutrinos primordiales se desacoplaron de la materia cuando el universo era muy joven y deberían seguir impregnando el espacio, aunque son extremadamente difíciles de detectar.",
                    de: "Diese primordialen Neutrinos entkoppelten sich von der Materie, als das Universum sehr jung war, und sollten immer noch den Raum durchdringen, obwohl sie extrem schwer zu erkennen sind.",
                    nl: "Deze primordiale neutrino's ontkoppelden van materie toen het heelal heel jong was en zouden nog steeds de ruimte moeten doordringen, hoewel ze extreem moeilijk te detecteren zijn."
                }
            },
            {
                question: {
                    en: "What is the difference between dark matter and dark energy?",
                    es: "¿Cuál es la diferencia entre materia oscura y energía oscura?",
                    de: "Was ist der Unterschied zwischen dunkler Materie und dunkler Energie?",
                    nl: "Wat is het verschil tussen donkere materie en donkere energie?"
                },
                options: [
                    { en: "Dark matter clumps and holds things together; dark energy pushes the universe apart", es: "La materia oscura se agrupa y mantiene las cosas unidas; la energía oscura separa el universo", de: "Dunkle Materie klumpt und hält Dinge zusammen; dunkle Energie drückt das Universum auseinander", nl: "Donkere materie klontert en houdt dingen bij elkaar; donkere energie duwt het heelal uit elkaar" },
                    { en: "Dark matter is visible, dark energy is invisible", es: "La materia oscura es visible, la energía oscura es invisible", de: "Dunkle Materie ist sichtbar, dunkle Energie ist unsichtbar", nl: "Donkere materie is zichtbaar, donkere energie is onzichtbaar" },
                    { en: "They are the same thing with different names", es: "Son la misma cosa con nombres diferentes", de: "Sie sind dasselbe mit verschiedenen Namen", nl: "Ze zijn hetzelfde met verschillende namen" },
                    { en: "Dark matter exists during the day, dark energy at night", es: "La materia oscura existe durante el día, la energía oscura por la noche", de: "Dunkle Materie existiert tagsüber, dunkle Energie nachts", nl: "Donkere materie bestaat overdag, donkere energie 's nachts" }
                ],
                correct: 0,
                explanation: {
                    en: "Dark matter makes up about 27% of the universe and helps form cosmic structure, while dark energy comprises 68% and drives cosmic acceleration.",
                    es: "La materia oscura constituye aproximadamente el 27% del universo y ayuda a formar la estructura cósmica, mientras que la energía oscura comprende el 68% e impulsa la aceleración cósmica.",
                    de: "Dunkle Materie macht etwa 27% des Universums aus und hilft bei der Bildung kosmischer Strukturen, während dunkle Energie 68% ausmacht und die kosmische Beschleunigung antreibt.",
                    nl: "Donkere materie vormt ongeveer 27% van het heelal en helpt kosmische structuur te vormen, terwijl donkere energie 68% omvat en kosmische versnelling aandrijft."
                }
            },
            {
                question: {
                    en: "What is a relativistic jet?",
                    es: "¿Qué es un chorro relativista?",
                    de: "Was ist ein relativistischer Jet?",
                    nl: "Wat is een relativistische jet?"
                },
                options: [
                    { en: "High-speed streams of particles shot out from black holes or neutron stars", es: "Corrientes de alta velocidad de partículas disparadas desde agujeros negros o estrellas de neutrones", de: "Hochgeschwindigkeitsströme von Teilchen, die von schwarzen Löchern oder Neutronensternen ausgeschossen werden", nl: "Hoge-snelheidsstromen van deeltjes geschoten vanuit zwarte gaten of neutronensterren" },
                    { en: "Spacecraft that travel near the speed of light", es: "Naves espaciales que viajan cerca de la velocidad de la luz", de: "Raumschiffe, die nahe Lichtgeschwindigkeit reisen", nl: "Ruimteschepen die nabij de lichtsnelheid reizen" },
                    { en: "Jets of water from Einstein's relatives", es: "Chorros de agua de los parientes de Einstein", de: "Wasserstrahlen von Einsteins Verwandten", nl: "Waterstralen van Einsteins familieleden" },
                    { en: "Fast-moving comets in the solar system", es: "Cometas que se mueven rápidamente en el sistema solar", de: "Sich schnell bewegende Kometen im Sonnensystem", nl: "Snel bewegende kometen in het zonnestelsel" }
                ],
                correct: 0,
                explanation: {
                    en: "These jets can extend for millions of light-years and move at speeds approaching the speed of light, visible across vast cosmic distances.",
                    es: "Estos chorros pueden extenderse por millones de años luz y moverse a velocidades que se acercan a la velocidad de la luz, visibles a través de vastas distancias cósmicas.",
                    de: "Diese Jets können sich über Millionen von Lichtjahren erstrecken und sich mit Geschwindigkeiten nahe der Lichtgeschwindigkeit bewegen, sichtbar über riesige kosmische Entfernungen.",
                    nl: "Deze jets kunnen zich uitstrekken over miljoenen lichtjaren en bewegen met snelheden die de lichtsnelheid naderen, zichtbaar over enorme kosmische afstanden."
                }
            },
            {
                question: {
                    en: "What is primordial nucleosynthesis?",
                    es: "¿Qué es la nucleosíntesis primordial?",
                    de: "Was ist primordiale Nukleosynthese?",
                    nl: "Wat is primordiale nucleosynthese?"
                },
                options: [
                    { en: "The formation of light elements like helium in the early universe", es: "La formación de elementos ligeros como el helio en el universo temprano", de: "Die Entstehung leichter Elemente wie Helium im frühen Universum", nl: "De vorming van lichte elementen zoals helium in het vroege heelal" },
                    { en: "The first nuclear power plants in space", es: "Las primeras plantas de energía nuclear en el espacio", de: "Die ersten Kernkraftwerke im Weltraum", nl: "De eerste kerncentrales in de ruimte" },
                    { en: "Nuclear reactions in the very first stars", es: "Reacciones nucleares en las primeras estrellas", de: "Kernreaktionen in den allerersten Sternen", nl: "Kernreacties in de allereerste sterren" },
                    { en: "The creation of all heavy elements", es: "La creación de todos los elementos pesados", de: "Die Schaffung aller schweren Elemente", nl: "De creatie van alle zware elementen" }
                ],
                correct: 0,
                explanation: {
                    en: "This process occurred within the first 20 minutes after the Big Bang, creating about 25% helium and traces of lithium from primordial hydrogen.",
                    es: "Este proceso ocurrió dentro de los primeros 20 minutos después del Big Bang, creando aproximadamente 25% de helio y trazas de litio del hidrógeno primordial.",
                    de: "Dieser Prozess ereignete sich innerhalb der ersten 20 Minuten nach dem Urknall und erzeugte etwa 25% Helium und Spuren von Lithium aus primordialem Wasserstoff.",
                    nl: "Dit proces vond plaats binnen de eerste 20 minuten na de Oerknal, en creëerde ongeveer 25% helium en sporen van lithium uit primordiale waterstof."
                }
            },
            {
                question: {
                    en: "What is the Parker Solar Probe studying?",
                    es: "¿Qué está estudiando la Sonda Solar Parker?",
                    de: "Was untersucht die Parker Solar Probe?",
                    nl: "Wat bestudeert de Parker Solar Probe?"
                },
                options: [
                    { en: "The Sun's corona and solar wind by flying closer to the Sun than ever before", es: "La corona del Sol y el viento solar volando más cerca del Sol que nunca antes", de: "Die Sonnenkorona und den Sonnenwind, indem sie näher zur Sonne fliegt als je zuvor", nl: "De corona van de Zon en zonnewind door dichter bij de Zon te vliegen dan ooit tevoren" },
                    { en: "How to park spacecraft near the Sun", es: "Cómo estacionar naves espaciales cerca del Sol", de: "Wie man Raumschiffe in der Nähe der Sonne parkt", nl: "Hoe ruimteschepen te parkeren nabij de Zon" },
                    { en: "Solar panels and their efficiency", es: "Paneles solares y su eficiencia", de: "Solarpanels und ihre Effizienz", nl: "Zonnepanelen en hun efficiëntie" },
                    { en: "The temperature inside parking meters on Earth", es: "La temperatura dentro de los parquímetros en la Tierra", de: "Die Temperatur in Parkuhren auf der Erde", nl: "De temperatuur binnen parkeermeters op Aarde" }
                ],
                correct: 0,
                explanation: {
                    en: "This mission is providing unprecedented insights into solar phenomena, helping us understand space weather that affects Earth and spacecraft.",
                    es: "Esta misión está proporcionando ideas sin precedentes sobre los fenómenos solares, ayudándonos a entender el clima espacial que afecta a la Tierra y las naves espaciales.",
                    de: "Diese Mission liefert beispiellose Einblicke in Sonnenphänomene und hilft uns, das Weltraumwetter zu verstehen, das die Erde und Raumschiffe beeinflusst.",
                    nl: "Deze missie biedt ongekende inzichten in zonnefenomenen, en helpt ons het ruimteweer te begrijpen dat de Aarde en ruimteschepen beïnvloedt."
                }
            },
            {
                question: {
                    en: "What is baryon asymmetry?",
                    es: "¿Qué es la asimetría bariónica?",
                    de: "Was ist Baryonen-Asymmetrie?",
                    nl: "Wat is baryonasymmetrie?"
                },
                options: [
                    { en: "Why there's more matter than antimatter in the universe", es: "Por qué hay más materia que antimateria en el universo", de: "Warum es mehr Materie als Antimaterie im Universum gibt", nl: "Waarom er meer materie dan antimaterie in het heelal is" },
                    { en: "The uneven distribution of heavy particles", es: "La distribución desigual de partículas pesadas", de: "Die ungleiche Verteilung schwerer Teilchen", nl: "De ongelijke verdeling van zware deeltjes" },
                    { en: "When baryons are not symmetric in shape", es: "Cuando los bariones no son simétricos en forma", de: "Wenn Baryonen nicht symmetrisch in der Form sind", nl: "Wanneer baryonen niet symmetrisch van vorm zijn" },
                    { en: "The difference in mass between protons and neutrons", es: "La diferencia en masa entre protones y neutrones", de: "Der Massenunterschied zwischen Protonen und Neutronen", nl: "Het massaverschil tussen protonen en neutronen" }
                ],
                correct: 0,
                explanation: {
                    en: "This fundamental puzzle explains why our universe is made of matter rather than being empty after matter-antimatter annihilation in the early universe.",
                    es: "Este rompecabezas fundamental explica por qué nuestro universo está hecho de materia en lugar de estar vacío después de la aniquilación materia-antimateria en el universo temprano.",
                    de: "Dieses fundamentale Rätsel erklärt, warum unser Universum aus Materie besteht, anstatt nach der Materie-Antimaterie-Vernichtung im frühen Universum leer zu sein.",
                    nl: "Deze fundamentele puzzel verklaart waarom ons heelal van materie is gemaakt in plaats van leeg te zijn na materie-antimaterie vernietiging in het vroege heelal."
                }
            },
            {
                question: {
                    en: "What are the most extreme conditions in the known universe?",
                    es: "¿Cuáles son las condiciones más extremas en el universo conocido?",
                    de: "Was sind die extremsten Bedingungen im bekannten Universum?",
                    nl: "Wat zijn de meest extreme omstandigheden in het bekende heelal?"
                },
                options: [
                    { en: "Inside black holes where space-time curvature becomes infinite", es: "Dentro de agujeros negros donde la curvatura del espacio-tiempo se vuelve infinita", de: "Im Inneren schwarzer Löcher, wo die Raumzeit-Krümmung unendlich wird", nl: "Binnenin zwarte gaten waar ruimte-tijd kromming oneindig wordt" },
                    { en: "The coldest places in intergalactic space", es: "Los lugares más fríos en el espacio intergaláctico", de: "Die kältesten Orte im intergalaktischen Raum", nl: "De koudste plaatsen in intergalactische ruimte" },
                    { en: "The surface of the hottest known stars", es: "La superficie de las estrellas más calientes conocidas", de: "Die Oberfläche der heißesten bekannten Sterne", nl: "Het oppervlak van de heetste bekende sterren" },
                    { en: "The center of the largest known galaxies", es: "El centro de las galaxias más grandes conocidas", de: "Das Zentrum der größten bekannten Galaxien", nl: "Het centrum van de grootste bekende sterrenstelsels" }
                ],
                correct: 0,
                explanation: {
                    en: "At the singularity of a black hole, our current physics breaks down completely, with infinite density, temperature, and curvature predicted by general relativity.",
                    es: "En la singularidad de un agujero negro, nuestra física actual se descompone completamente, con densidad infinita, temperatura y curvatura predicha por la relatividad general.",
                    de: "Bei der Singularität eines schwarzen Lochs bricht unsere aktuelle Physik völlig zusammen, mit unendlicher Dichte, Temperatur und Krümmung, die von der allgemeinen Relativitätstheorie vorhergesagt wird.",
                    nl: "Bij de singulariteit van een zwart gat valt onze huidige natuurkunde volledig weg, met oneindige dichtheid, temperatuur en kromming voorspeld door de algemene relativiteitstheorie."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/space-astronomy', level7);
    }
})();