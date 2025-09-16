(function() {
    const level1 = {
        name: {
            en: "Our Solar System",
            es: "Nuestro Sistema Solar",
            de: "Unser Sonnensystem",
            nl: "Ons Zonnestelsel"
        },
        questions: [
            {
                question: {
                    en: "What is at the center of our solar system?",
                    es: "¿Qué está en el centro de nuestro sistema solar?",
                    de: "Was ist im Zentrum unseres Sonnensystems?",
                    nl: "Wat staat in het midden van ons zonnestelsel?"
                },
                options: [
                    { en: "The Sun", es: "El Sol", de: "Die Sonne", nl: "De Zon" },
                    { en: "Earth", es: "La Tierra", de: "Die Erde", nl: "De Aarde" },
                    { en: "The Moon", es: "La Luna", de: "Der Mond", nl: "De Maan" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" }
                ],
                correct: 0,
                explanation: {
                    en: "The Sun is the central star of our solar system and the source of light and heat for all planets.",
                    es: "El Sol es la estrella central de nuestro sistema solar y la fuente de luz y calor para todos los planetas.",
                    de: "Die Sonne ist der zentrale Stern unseres Sonnensystems und die Quelle von Licht und Wärme für alle Planeten.",
                    nl: "De Zon is de centrale ster van ons zonnestelsel en de bron van licht en warmte voor alle planeten."
                }
            },
            {
                question: {
                    en: "How many planets are in our solar system?",
                    es: "¿Cuántos planetas hay en nuestro sistema solar?",
                    de: "Wie viele Planeten gibt es in unserem Sonnensystem?",
                    nl: "Hoeveel planeten zijn er in ons zonnestelsel?"
                },
                options: [
                    { en: "Eight", es: "Ocho", de: "Acht", nl: "Acht" },
                    { en: "Seven", es: "Siete", de: "Sieben", nl: "Zeven" },
                    { en: "Nine", es: "Nueve", de: "Neun", nl: "Negen" },
                    { en: "Ten", es: "Diez", de: "Zehn", nl: "Tien" }
                ],
                correct: 0,
                explanation: {
                    en: "There are eight planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
                    es: "Hay ocho planetas en nuestro sistema solar: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno.",
                    de: "Es gibt acht Planeten in unserem Sonnensystem: Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus und Neptun.",
                    nl: "Er zijn acht planeten in ons zonnestelsel: Mercurius, Venus, Aarde, Mars, Jupiter, Saturnus, Uranus en Neptunus."
                }
            },
            {
                question: {
                    en: "Which planet do we live on?",
                    es: "¿En qué planeta vivimos?",
                    de: "Auf welchem Planeten leben wir?",
                    nl: "Op welke planeet leven wij?"
                },
                options: [
                    { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
                    { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth is our home planet, the third planet from the Sun and the only known planet with life.",
                    es: "La Tierra es nuestro planeta hogar, el tercer planeta desde el Sol y el único planeta conocido con vida.",
                    de: "Die Erde ist unser Heimatplanet, der dritte Planet von der Sonne und der einzige bekannte Planet mit Leben.",
                    nl: "De Aarde is onze thuisplaneet, de derde planeet vanaf de Zon en de enige bekende planeet met leven."
                }
            },
            {
                question: {
                    en: "What is the biggest planet in our solar system?",
                    es: "¿Cuál es el planeta más grande de nuestro sistema solar?",
                    de: "Was ist der größte Planet in unserem Sonnensystem?",
                    nl: "Wat is de grootste planeet in ons zonnestelsel?"
                },
                options: [
                    { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
                    { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" }
                ],
                correct: 0,
                explanation: {
                    en: "Jupiter is the largest planet in our solar system, more than 11 times wider than Earth.",
                    es: "Júpiter es el planeta más grande de nuestro sistema solar, más de 11 veces más ancho que la Tierra.",
                    de: "Jupiter ist der größte Planet in unserem Sonnensystem, mehr als 11 mal breiter als die Erde.",
                    nl: "Jupiter is de grootste planeet in ons zonnestelsel, meer dan 11 keer breder dan de Aarde."
                }
            },
            {
                question: {
                    en: "What is the smallest planet in our solar system?",
                    es: "¿Cuál es el planeta más pequeño de nuestro sistema solar?",
                    de: "Was ist der kleinste Planet in unserem Sonnensystem?",
                    nl: "Wat is de kleinste planeet in ons zonnestelsel?"
                },
                options: [
                    { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
                    { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" }
                ],
                correct: 0,
                explanation: {
                    en: "Mercury is the smallest planet in our solar system, only slightly larger than Earth's Moon.",
                    es: "Mercurio es el planeta más pequeño de nuestro sistema solar, solo un poco más grande que la Luna de la Tierra.",
                    de: "Merkur ist der kleinste Planet in unserem Sonnensystem, nur etwas größer als der Mond der Erde.",
                    nl: "Mercurius is de kleinste planeet in ons zonnestelsel, slechts iets groter dan de Maan van de Aarde."
                }
            },
            {
                question: {
                    en: "Which planet is closest to the Sun?",
                    es: "¿Qué planeta está más cerca del Sol?",
                    de: "Welcher Planet ist der Sonne am nächsten?",
                    nl: "Welke planeet staat het dichtst bij de Zon?"
                },
                options: [
                    { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
                    { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" }
                ],
                correct: 0,
                explanation: {
                    en: "Mercury is the closest planet to the Sun, taking only 88 Earth days to complete one orbit.",
                    es: "Mercurio es el planeta más cercano al Sol, tardando solo 88 días terrestres en completar una órbita.",
                    de: "Merkur ist der sonnennächste Planet und braucht nur 88 Erdtage für eine Umlaufbahn.",
                    nl: "Mercurius is de planeet die het dichtst bij de Zon staat en heeft slechts 88 aardse dagen nodig voor één omloop."
                }
            },
            {
                question: {
                    en: "Which planet is known as the Red Planet?",
                    es: "¿Qué planeta es conocido como el Planeta Rojo?",
                    de: "Welcher Planet ist als der Rote Planet bekannt?",
                    nl: "Welke planeet staat bekend als de Rode Planeet?"
                },
                options: [
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
                    { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" },
                    { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" }
                ],
                correct: 0,
                explanation: {
                    en: "Mars is called the Red Planet because of iron oxide (rust) on its surface that gives it a reddish color.",
                    es: "Marte es llamado el Planeta Rojo debido al óxido de hierro (óxido) en su superficie que le da un color rojizo.",
                    de: "Mars wird der Rote Planet genannt wegen des Eisenoxids (Rost) auf seiner Oberfläche, das ihm eine rötliche Farbe verleiht.",
                    nl: "Mars wordt de Rode Planeet genoemd vanwege ijzeroxide (roest) op het oppervlak dat het een roodachtige kleur geeft."
                }
            },
            {
                question: {
                    en: "Which planet has beautiful rings around it?",
                    es: "¿Qué planeta tiene hermosos anillos a su alrededor?",
                    de: "Welcher Planet hat schöne Ringe um sich herum?",
                    nl: "Welke planeet heeft mooie ringen eromheen?"
                },
                options: [
                    { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
                    { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" }
                ],
                correct: 0,
                explanation: {
                    en: "Saturn is famous for its spectacular ring system made of ice and rock particles.",
                    es: "Saturno es famoso por su espectacular sistema de anillos hecho de partículas de hielo y roca.",
                    de: "Saturn ist berühmt für sein spektakuläres Ringsystem aus Eis- und Gesteinspartikeln.",
                    nl: "Saturnus is beroemd om zijn spectaculaire ringensysteem gemaakt van ijs- en rotsdeeltjes."
                }
            },
            {
                question: {
                    en: "What orbits around Earth?",
                    es: "¿Qué orbita alrededor de la Tierra?",
                    de: "Was kreist um die Erde?",
                    nl: "Wat draait rond de Aarde?"
                },
                options: [
                    { en: "The Moon", es: "La Luna", de: "Der Mond", nl: "De Maan" },
                    { en: "The Sun", es: "El Sol", de: "Die Sonne", nl: "De Zon" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" }
                ],
                correct: 0,
                explanation: {
                    en: "The Moon is Earth's only natural satellite and orbits around our planet about once every month.",
                    es: "La Luna es el único satélite natural de la Tierra y orbita alrededor de nuestro planeta aproximadamente una vez al mes.",
                    de: "Der Mond ist der einzige natürliche Satellit der Erde und umkreist unseren Planeten etwa einmal pro Monat.",
                    nl: "De Maan is de enige natuurlijke satelliet van de Aarde en draait ongeveer eens per maand rond onze planeet."
                }
            },
            {
                question: {
                    en: "How long does it take Earth to orbit the Sun?",
                    es: "¿Cuánto tiempo le toma a la Tierra orbitar el Sol?",
                    de: "Wie lange braucht die Erde, um die Sonne zu umkreisen?",
                    nl: "Hoe lang duurt het voor de Aarde om de Zon te omcirkelen?"
                },
                options: [
                    { en: "One year", es: "Un año", de: "Ein Jahr", nl: "Een jaar" },
                    { en: "One day", es: "Un día", de: "Ein Tag", nl: "Een dag" },
                    { en: "One month", es: "Un mes", de: "Ein Monat", nl: "Een maand" },
                    { en: "One week", es: "Una semana", de: "Eine Woche", nl: "Een week" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth takes 365.25 days (one year) to complete one full orbit around the Sun.",
                    es: "La Tierra toma 365.25 días (un año) para completar una órbita completa alrededor del Sol.",
                    de: "Die Erde braucht 365,25 Tage (ein Jahr), um eine vollständige Umlaufbahn um die Sonne zu vollenden.",
                    nl: "De Aarde heeft 365,25 dagen (één jaar) nodig om één volledige baan rond de Zon te voltooien."
                }
            },
            {
                question: {
                    en: "Why does the Moon look different each night?",
                    es: "¿Por qué la Luna se ve diferente cada noche?",
                    de: "Warum sieht der Mond jede Nacht anders aus?",
                    nl: "Waarom ziet de Maan er elke nacht anders uit?"
                },
                options: [
                    { en: "Different parts are lit by the Sun", es: "Diferentes partes son iluminadas por el Sol", de: "Verschiedene Teile werden von der Sonne beleuchtet", nl: "Verschillende delen worden verlicht door de Zon" },
                    { en: "The Moon changes size", es: "La Luna cambia de tamaño", de: "Der Mond ändert seine Größe", nl: "De Maan verandert van grootte" },
                    { en: "Clouds cover it", es: "Las nubes la cubren", de: "Wolken bedecken ihn", nl: "Wolken bedekken hem" },
                    { en: "The Moon turns around", es: "La Luna se da vuelta", de: "Der Mond dreht sich um", nl: "De Maan draait om" }
                ],
                correct: 0,
                explanation: {
                    en: "The Moon appears different because different parts are lit by the Sun as it orbits Earth.",
                    es: "La Luna se ve diferente porque diferentes partes son iluminadas por el Sol mientras orbita la Tierra.",
                    de: "Der Mond sieht anders aus, weil verschiedene Teile von der Sonne beleuchtet werden, während er die Erde umkreist.",
                    nl: "De Maan ziet er anders uit omdat verschillende delen verlicht worden door de Zon terwijl hij de Aarde omcirkelt."
                }
            },
            {
                question: {
                    en: "What gives the Sun its energy?",
                    es: "¿Qué le da energía al Sol?",
                    de: "Was gibt der Sonne ihre Energie?",
                    nl: "Wat geeft de Zon zijn energie?"
                },
                options: [
                    { en: "Nuclear reactions", es: "Reacciones nucleares", de: "Kernreaktionen", nl: "Kernreacties" },
                    { en: "Burning wood", es: "Quemando madera", de: "Brennendes Holz", nl: "Brandend hout" },
                    { en: "Electric batteries", es: "Baterías eléctricas", de: "Elektrische Batterien", nl: "Elektrische batterijen" },
                    { en: "Solar panels", es: "Paneles solares", de: "Solarpanels", nl: "Zonnepanelen" }
                ],
                correct: 0,
                explanation: {
                    en: "The Sun gets its energy from nuclear fusion reactions in its core, where hydrogen atoms combine to form helium.",
                    es: "El Sol obtiene su energía de reacciones de fusión nuclear en su núcleo, donde los átomos de hidrógeno se combinan para formar helio.",
                    de: "Die Sonne erhält ihre Energie aus Kernfusionsreaktionen in ihrem Kern, wo Wasserstoffatome sich zu Helium verbinden.",
                    nl: "De Zon krijgt zijn energie van kernfusiereacties in zijn kern, waar waterstofatomen samensmelten tot helium."
                }
            },
            {
                question: {
                    en: "What is the hottest planet in our solar system?",
                    es: "¿Cuál es el planeta más caliente de nuestro sistema solar?",
                    de: "Was ist der heißeste Planet in unserem Sonnensystem?",
                    nl: "Wat is de heetste planeet in ons zonnestelsel?"
                },
                options: [
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
                    { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" }
                ],
                correct: 0,
                explanation: {
                    en: "Venus is the hottest planet due to its thick atmosphere that traps heat in a runaway greenhouse effect.",
                    es: "Venus es el planeta más caliente debido a su atmósfera espesa que atrapa el calor en un efecto invernadero descontrolado.",
                    de: "Venus ist der heißeste Planet aufgrund seiner dicken Atmosphäre, die Wärme in einem entfesselten Treibhauseffekt einfängt.",
                    nl: "Venus is de heetste planeet vanwege zijn dikke atmosfeer die warmte vasthoudt in een ongecontroleerd broeikaseffect."
                }
            },
            {
                question: {
                    en: "What is the coldest planet in our solar system?",
                    es: "¿Cuál es el planeta más frío de nuestro sistema solar?",
                    de: "Was ist der kälteste Planet in unserem Sonnensystem?",
                    nl: "Wat is de koudste planeet in ons zonnestelsel?"
                },
                options: [
                    { en: "Neptune", es: "Neptuno", de: "Neptun", nl: "Neptunus" },
                    { en: "Pluto", es: "Plutón", de: "Pluto", nl: "Pluto" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" }
                ],
                correct: 0,
                explanation: {
                    en: "Neptune is the coldest planet because it is farthest from the Sun and receives very little solar heat.",
                    es: "Neptuno es el planeta más frío porque está más lejos del Sol y recibe muy poco calor solar.",
                    de: "Neptun ist der kälteste Planet, weil er am weitesten von der Sonne entfernt ist und sehr wenig Sonnenwärme erhält.",
                    nl: "Neptunus is de koudste planeet omdat hij het verst van de Zon staat en zeer weinig zonnewarmte ontvangt."
                }
            },
            {
                question: {
                    en: "What do we call the path a planet takes around the Sun?",
                    es: "¿Cómo llamamos al camino que toma un planeta alrededor del Sol?",
                    de: "Wie nennen wir den Weg, den ein Planet um die Sonne nimmt?",
                    nl: "Hoe noemen we het pad dat een planeet neemt rond de Zon?"
                },
                options: [
                    { en: "Orbit", es: "Órbita", de: "Umlaufbahn", nl: "Baan" },
                    { en: "Circle", es: "Círculo", de: "Kreis", nl: "Cirkel" },
                    { en: "Route", es: "Ruta", de: "Route", nl: "Route" },
                    { en: "Line", es: "Línea", de: "Linie", nl: "Lijn" }
                ],
                correct: 0,
                explanation: {
                    en: "An orbit is the curved path that a planet follows as it travels around the Sun due to gravity.",
                    es: "Una órbita es el camino curvo que sigue un planeta mientras viaja alrededor del Sol debido a la gravedad.",
                    de: "Eine Umlaufbahn ist der gekrümmte Weg, dem ein Planet folgt, während er aufgrund der Schwerkraft um die Sonne reist.",
                    nl: "Een baan is het gebogen pad dat een planeet volgt terwijl hij door de zwaartekracht rond de Zon reist."
                }
            },
            {
                question: {
                    en: "Which planet is closest to Earth?",
                    es: "¿Qué planeta está más cerca de la Tierra?",
                    de: "Welcher Planet ist der Erde am nächsten?",
                    nl: "Welke planeet staat het dichtst bij de Aarde?"
                },
                options: [
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Mercury", es: "Mercurio", de: "Merkur", nl: "Mercurius" },
                    { en: "Jupiter", es: "Júpiter", de: "Jupiter", nl: "Jupiter" }
                ],
                correct: 0,
                explanation: {
                    en: "Venus is usually the closest planet to Earth, though Mars can be closer at certain times.",
                    es: "Venus es generalmente el planeta más cercano a la Tierra, aunque Marte puede estar más cerca en ciertos momentos.",
                    de: "Venus ist normalerweise der erdnächste Planet, obwohl Mars zu bestimmten Zeiten näher sein kann.",
                    nl: "Venus is gewoonlijk de planeet die het dichtst bij de Aarde staat, hoewel Mars op bepaalde momenten dichterbij kan zijn."
                }
            },
            {
                question: {
                    en: "What makes Earth special for life?",
                    es: "¿Qué hace especial a la Tierra para la vida?",
                    de: "Was macht die Erde besonders für das Leben?",
                    nl: "Wat maakt de Aarde speciaal voor het leven?"
                },
                options: [
                    { en: "It has water and the right temperature", es: "Tiene agua y la temperatura correcta", de: "Sie hat Wasser und die richtige Temperatur", nl: "Het heeft water en de juiste temperatuur" },
                    { en: "It's the biggest planet", es: "Es el planeta más grande", de: "Es ist der größte Planet", nl: "Het is de grootste planeet" },
                    { en: "It has the most moons", es: "Tiene la mayoría de lunas", de: "Es hat die meisten Monde", nl: "Het heeft de meeste manen" },
                    { en: "It's closest to the Sun", es: "Está más cerca del Sol", de: "Es ist der Sonne am nächsten", nl: "Het staat het dichtst bij de Zon" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth is special because it has liquid water, breathable air, and the perfect distance from the Sun for life.",
                    es: "La Tierra es especial porque tiene agua líquida, aire respirable y la distancia perfecta del Sol para la vida.",
                    de: "Die Erde ist besonders, weil sie flüssiges Wasser, atembare Luft und den perfekten Abstand zur Sonne für Leben hat.",
                    nl: "De Aarde is speciaal omdat het vloeibaar water heeft, adembare lucht en de perfecte afstand tot de Zon voor leven."
                }
            },
            {
                question: {
                    en: "What are Saturn's rings made of?",
                    es: "¿De qué están hechos los anillos de Saturno?",
                    de: "Woraus bestehen Saturns Ringe?",
                    nl: "Waar zijn de ringen van Saturnus van gemaakt?"
                },
                options: [
                    { en: "Ice and rock pieces", es: "Pedazos de hielo y roca", de: "Eis- und Gesteinsbrocken", nl: "Ijs- en rotsstukjes" },
                    { en: "Gas and dust", es: "Gas y polvo", de: "Gas und Staub", nl: "Gas en stof" },
                    { en: "Metal rings", es: "Anillos de metal", de: "Metallringe", nl: "Metalen ringen" },
                    { en: "Colored lights", es: "Luces de colores", de: "Farbige Lichter", nl: "Gekleurde lichten" }
                ],
                correct: 0,
                explanation: {
                    en: "Saturn's rings are made of countless pieces of ice and rock ranging from tiny grains to house-sized chunks.",
                    es: "Los anillos de Saturno están hechos de incontables pedazos de hielo y roca que van desde granos diminutos hasta trozos del tamaño de una casa.",
                    de: "Saturns Ringe bestehen aus unzähligen Stücken aus Eis und Gestein, die von winzigen Körnern bis zu hausroßen Brocken reichen.",
                    nl: "De ringen van Saturnus bestaan uit ontelbare stukjes ijs en steen, variërend van kleine korreltjes tot brokken zo groot als een huis."
                }
            },
            {
                question: {
                    en: "How many moons does Earth have?",
                    es: "¿Cuántas lunas tiene la Tierra?",
                    de: "Wie viele Monde hat die Erde?",
                    nl: "Hoeveel manen heeft de Aarde?"
                },
                options: [
                    { en: "One", es: "Una", de: "Einen", nl: "Eén" },
                    { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
                    { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
                    { en: "None", es: "Ninguna", de: "Keinen", nl: "Geen" }
                ],
                correct: 0,
                explanation: {
                    en: "Earth has exactly one moon, which is unusually large compared to our planet's size.",
                    es: "La Tierra tiene exactamente una luna, que es inusualmente grande comparada con el tamaño de nuestro planeta.",
                    de: "Die Erde hat genau einen Mond, der ungewöhnlich groß ist im Vergleich zur Größe unseres Planeten.",
                    nl: "De Aarde heeft precies één maan, die ongewoon groot is vergeleken met de grootte van onze planeet."
                }
            },
            {
                question: {
                    en: "Which planet has the most moons?",
                    es: "¿Qué planeta tiene la mayoría de lunas?",
                    de: "Welcher Planet hat die meisten Monde?",
                    nl: "Welke planeet heeft de meeste manen?"
                },
                options: [
                    { en: "Saturn", es: "Saturno", de: "Saturn", nl: "Saturnus" },
                    { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" }
                ],
                correct: 0,
                explanation: {
                    en: "Saturn currently holds the record with over 140 known moons, more than any other planet.",
                    es: "Saturno actualmente tiene el récord con más de 140 lunas conocidas, más que cualquier otro planeta.",
                    de: "Saturn hält derzeit den Rekord mit über 140 bekannten Monden, mehr als jeder andere Planet.",
                    nl: "Saturnus heeft momenteel het record met meer dan 140 bekende manen, meer dan enige andere planeet."
                }
            },
            {
                question: {
                    en: "What is the asteroid belt?",
                    es: "¿Qué es el cinturón de asteroides?",
                    de: "Was ist der Asteroidengürtel?",
                    nl: "Wat is de asteroïdengordel?"
                },
                options: [
                    { en: "A region of rocky objects between Mars and Jupiter", es: "Una región de objetos rocosos entre Marte y Júpiter", de: "Ein Bereich felsiger Objekte zwischen Mars und Jupiter", nl: "Een gebied met rotsachtige objecten tussen Mars en Jupiter" },
                    { en: "A ring around Saturn", es: "Un anillo alrededor de Saturno", de: "Ein Ring um Saturn", nl: "Een ring rond Saturnus" },
                    { en: "A moon of Earth", es: "Una luna de la Tierra", de: "Ein Mond der Erde", nl: "Een maan van de Aarde" },
                    { en: "A type of planet", es: "Un tipo de planeta", de: "Ein Planetentyp", nl: "Een soort planeet" }
                ],
                correct: 0,
                explanation: {
                    en: "The asteroid belt is a region between Mars and Jupiter filled with rocky objects left over from the solar system's formation.",
                    es: "El cinturón de asteroides es una región entre Marte y Júpiter llena de objetos rocosos que quedaron de la formación del sistema solar.",
                    de: "Der Asteroidengürtel ist ein Bereich zwischen Mars und Jupiter, der mit Gesteinsobjekten gefüllt ist, die von der Entstehung des Sonnensystems übrig geblieben sind.",
                    nl: "De asteroïdengordel is een gebied tussen Mars en Jupiter gevuld met rotsachtige objecten die overbleven van de vorming van het zonnestelsel."
                }
            },
            {
                question: {
                    en: "What do we call a shooting star?",
                    es: "¿Cómo llamamos a una estrella fugaz?",
                    de: "Wie nennen wir eine Sternschnuppe?",
                    nl: "Hoe noemen we een vallende ster?"
                },
                options: [
                    { en: "A meteor", es: "Un meteoro", de: "Ein Meteor", nl: "Een meteoor" },
                    { en: "A comet", es: "Un cometa", de: "Ein Komet", nl: "Een komeet" },
                    { en: "An asteroid", es: "Un asteroide", de: "Ein Asteroid", nl: "Een asteroïde" },
                    { en: "A planet", es: "Un planeta", de: "Ein Planet", nl: "Een planeet" }
                ],
                correct: 0,
                explanation: {
                    en: "A shooting star is actually a meteor - a small piece of space rock burning up as it enters Earth's atmosphere.",
                    es: "Una estrella fugaz es en realidad un meteoro - un pequeño pedazo de roca espacial que se quema al entrar en la atmósfera de la Tierra.",
                    de: "Eine Sternschnuppe ist eigentlich ein Meteor - ein kleines Stück Weltraumgestein, das beim Eintritt in die Erdatmosphäre verbrennt.",
                    nl: "Een vallende ster is eigenlijk een meteoor - een klein stukje ruimterots dat opbrandt bij het binnenkomen van de atmosfeer van de Aarde."
                }
            },
            {
                question: {
                    en: "What is a comet?",
                    es: "¿Qué es un cometa?",
                    de: "Was ist ein Komet?",
                    nl: "Wat is een komeet?"
                },
                options: [
                    { en: "A dirty snowball that orbits the Sun", es: "Una bola de nieve sucia que orbita el Sol", de: "Ein schmutziger Schneeball, der die Sonne umkreist", nl: "Een vuile sneeuwbal die rond de Zon draait" },
                    { en: "A type of planet", es: "Un tipo de planeta", de: "Ein Planetentyp", nl: "Een soort planeet" },
                    { en: "A moon", es: "Una luna", de: "Ein Mond", nl: "Een maan" },
                    { en: "A small star", es: "Una estrella pequeña", de: "Ein kleiner Stern", nl: "Een kleine ster" }
                ],
                correct: 0,
                explanation: {
                    en: "A comet is like a dirty snowball made of ice and dust that develops a bright tail when it approaches the Sun.",
                    es: "Un cometa es como una bola de nieve sucia hecha de hielo y polvo que desarrolla una cola brillante cuando se acerca al Sol.",
                    de: "Ein Komet ist wie ein schmutziger Schneeball aus Eis und Staub, der einen hellen Schweif entwickelt, wenn er sich der Sonne nähert.",
                    nl: "Een komeet is als een vuile sneeuwbal gemaakt van ijs en stof die een heldere staart ontwikkelt wanneer hij de Zon nadert."
                }
            },
            {
                question: {
                    en: "Why does the Sun appear to move across the sky?",
                    es: "¿Por qué parece que el Sol se mueve por el cielo?",
                    de: "Warum scheint sich die Sonne über den Himmel zu bewegen?",
                    nl: "Waarom lijkt de Zon over de hemel te bewegen?"
                },
                options: [
                    { en: "Earth rotates on its axis", es: "La Tierra rota sobre su eje", de: "Die Erde rotiert um ihre Achse", nl: "De Aarde draait om zijn as" },
                    { en: "The Sun moves around Earth", es: "El Sol se mueve alrededor de la Tierra", de: "Die Sonne bewegt sich um die Erde", nl: "De Zon beweegt rond de Aarde" },
                    { en: "The Sun changes position", es: "El Sol cambia de posición", de: "Die Sonne ändert ihre Position", nl: "De Zon verandert van positie" },
                    { en: "Clouds push the Sun", es: "Las nubes empujan al Sol", de: "Wolken schieben die Sonne", nl: "Wolken duwen de Zon" }
                ],
                correct: 0,
                explanation: {
                    en: "The Sun appears to move because Earth rotates on its axis once every 24 hours, making day and night.",
                    es: "El Sol parece moverse porque la Tierra rota sobre su eje una vez cada 24 horas, creando el día y la noche.",
                    de: "Die Sonne scheint sich zu bewegen, weil die Erde alle 24 Stunden einmal um ihre Achse rotiert und so Tag und Nacht entstehen.",
                    nl: "De Zon lijkt te bewegen omdat de Aarde elke 24 uur één keer om zijn as draait, waardoor dag en nacht ontstaan."
                }
            },
            {
                question: {
                    en: "What causes the seasons on Earth?",
                    es: "¿Qué causa las estaciones en la Tierra?",
                    de: "Was verursacht die Jahreszeiten auf der Erde?",
                    nl: "Wat veroorzaakt de seizoenen op Aarde?"
                },
                options: [
                    { en: "Earth's tilt as it orbits the Sun", es: "La inclinación de la Tierra mientras orbita el Sol", de: "Die Neigung der Erde während sie die Sonne umkreist", nl: "De kanteling van de Aarde terwijl het de Zon omcirkelt" },
                    { en: "Distance from the Sun", es: "Distancia del Sol", de: "Entfernung zur Sonne", nl: "Afstand tot de Zon" },
                    { en: "The Moon's position", es: "La posición de la Luna", de: "Die Position des Mondes", nl: "De positie van de Maan" },
                    { en: "Solar flares", es: "Llamaradas solares", de: "Sonneneruptionen", nl: "Zonnevlammen" }
                ],
                correct: 0,
                explanation: {
                    en: "Seasons are caused by Earth's tilt as it orbits the Sun, making different parts receive more or less sunlight.",
                    es: "Las estaciones son causadas por la inclinación de la Tierra mientras orbita el Sol, haciendo que diferentes partes reciban más o menos luz solar.",
                    de: "Die Jahreszeiten werden durch die Neigung der Erde verursacht, während sie die Sonne umkreist, wodurch verschiedene Teile mehr oder weniger Sonnenlicht erhalten.",
                    nl: "Seizoenen worden veroorzaakt door de kanteling van de Aarde terwijl hij de Zon omcirkelt, waardoor verschillende delen meer of minder zonlicht ontvangen."
                }
            },
            {
                question: {
                    en: "What is the largest moon in our solar system?",
                    es: "¿Cuál es la luna más grande de nuestro sistema solar?",
                    de: "Was ist der größte Mond in unserem Sonnensystem?",
                    nl: "Wat is de grootste maan in ons zonnestelsel?"
                },
                options: [
                    { en: "Ganymede (Jupiter's moon)", es: "Ganimedes (luna de Júpiter)", de: "Ganymed (Mond von Jupiter)", nl: "Ganymedes (maan van Jupiter)" },
                    { en: "Our Moon", es: "Nuestra Luna", de: "Unser Mond", nl: "Onze Maan" },
                    { en: "Europa", es: "Europa", de: "Europa", nl: "Europa" },
                    { en: "Titan", es: "Titán", de: "Titan", nl: "Titan" }
                ],
                correct: 0,
                explanation: {
                    en: "Ganymede, one of Jupiter's moons, is the largest moon in our solar system, even bigger than Mercury.",
                    es: "Ganímedes, una de las lunas de Júpiter, es la luna más grande de nuestro sistema solar, incluso más grande que Mercurio.",
                    de: "Ganymed, einer von Jupiters Monden, ist der größte Mond in unserem Sonnensystem, sogar größer als Merkur.",
                    nl: "Ganymedes, een van Jupiter's manen, is de grootste maan in ons zonnestelsel, zelfs groter dan Mercurius."
                }
            },
            {
                question: {
                    en: "Which planets are called gas giants?",
                    es: "¿Qué planetas son llamados gigantes gaseosos?",
                    de: "Welche Planeten werden Gasriesen genannt?",
                    nl: "Welke planeten worden gasreuzen genoemd?"
                },
                options: [
                    { en: "Jupiter, Saturn, Uranus, and Neptune", es: "Júpiter, Saturno, Urano y Neptuno", de: "Jupiter, Saturn, Uranus und Neptun", nl: "Jupiter, Saturnus, Uranus en Neptunus" },
                    { en: "Mercury, Venus, Earth, and Mars", es: "Mercurio, Venus, Tierra y Marte", de: "Merkur, Venus, Erde und Mars", nl: "Mercurius, Venus, Aarde en Mars" },
                    { en: "Only Jupiter and Saturn", es: "Solo Júpiter y Saturno", de: "Nur Jupiter und Saturn", nl: "Alleen Jupiter en Saturnus" },
                    { en: "All the planets", es: "Todos los planetas", de: "Alle Planeten", nl: "Alle planeten" }
                ],
                correct: 0,
                explanation: {
                    en: "Jupiter, Saturn, Uranus, and Neptune are called gas giants because they are made mostly of gas and have no solid surface.",
                    es: "Júpiter, Saturno, Urano y Neptuno son llamados gigantes gaseosos porque están hechos principalmente de gas y no tienen superficie sólida.",
                    de: "Jupiter, Saturn, Uranus und Neptun werden Gasriesen genannt, weil sie hauptsächlich aus Gas bestehen und keine feste Oberfläche haben.",
                    nl: "Jupiter, Saturnus, Uranus en Neptunus worden gasreuzen genoemd omdat ze voornamelijk bestaan uit gas en geen vast oppervlak hebben."
                }
            },
            {
                question: {
                    en: "Which planets are called terrestrial or rocky planets?",
                    es: "¿Qué planetas son llamados terrestres o rocosos?",
                    de: "Welche Planeten werden terrestrisch oder Gesteinsplaneten genannt?",
                    nl: "Welke planeten worden aardse of rotsachtige planeten genoemd?"
                },
                options: [
                    { en: "Mercury, Venus, Earth, and Mars", es: "Mercurio, Venus, Tierra y Marte", de: "Merkur, Venus, Erde und Mars", nl: "Mercurius, Venus, Aarde en Mars" },
                    { en: "Jupiter, Saturn, Uranus, and Neptune", es: "Júpiter, Saturno, Urano y Neptuno", de: "Jupiter, Saturn, Uranus und Neptun", nl: "Jupiter, Saturnus, Uranus en Neptunus" },
                    { en: "Only Earth and Mars", es: "Solo Tierra y Marte", de: "Nur Erde und Mars", nl: "Alleen Aarde en Mars" },
                    { en: "All planets are rocky", es: "Todos los planetas son rocosos", de: "Alle Planeten sind felsig", nl: "Alle planeten zijn rotsachtig" }
                ],
                correct: 0,
                explanation: {
                    en: "Mercury, Venus, Earth, and Mars are terrestrial planets because they have solid, rocky surfaces.",
                    es: "Mercurio, Venus, Tierra y Marte son planetas terrestres porque tienen superficies sólidas y rocosas.",
                    de: "Merkur, Venus, Erde und Mars sind Gesteinsplaneten, weil sie feste, felsige Oberflächen haben.",
                    nl: "Mercurius, Venus, Aarde en Mars zijn aardse planeten omdat ze vaste, rotsachtige oppervlakken hebben."
                }
            },
            {
                question: {
                    en: "How long is a day on Earth?",
                    es: "¿Cuánto dura un día en la Tierra?",
                    de: "Wie lang ist ein Tag auf der Erde?",
                    nl: "Hoe lang duurt een dag op Aarde?"
                },
                options: [
                    { en: "24 hours", es: "24 horas", de: "24 Stunden", nl: "24 uur" },
                    { en: "12 hours", es: "12 horas", de: "12 Stunden", nl: "12 uur" },
                    { en: "48 hours", es: "48 horas", de: "48 Stunden", nl: "48 uur" },
                    { en: "10 hours", es: "10 horas", de: "10 Stunden", nl: "10 uur" }
                ],
                correct: 0,
                explanation: {
                    en: "A day on Earth is 24 hours, which is the time it takes for our planet to rotate once on its axis.",
                    es: "Un día en la Tierra es de 24 horas, que es el tiempo que tarda nuestro planeta en rotar una vez sobre su eje.",
                    de: "Ein Tag auf der Erde dauert 24 Stunden, das ist die Zeit, die unser Planet braucht, um sich einmal um seine Achse zu drehen.",
                    nl: "Een dag op Aarde duurt 24 uur, dat is de tijd die onze planeet nodig heeft om één keer om zijn as te draaien."
                }
            },
            {
                question: {
                    en: "What would happen if there was no Sun?",
                    es: "¿Qué pasaría si no hubiera Sol?",
                    de: "Was würde passieren, wenn es keine Sonne gäbe?",
                    nl: "Wat zou er gebeuren als er geen Zon was?"
                },
                options: [
                    { en: "Earth would be frozen and dark", es: "La Tierra estaría congelada y oscura", de: "Die Erde wäre gefroren und dunkel", nl: "De Aarde zou bevroren en donker zijn" },
                    { en: "Nothing would change", es: "Nada cambiaría", de: "Nichts würde sich ändern", nl: "Niets zou veranderen" },
                    { en: "Earth would be brighter", es: "La Tierra sería más brillante", de: "Die Erde wäre heller", nl: "De Aarde zou helderder zijn" },
                    { en: "Other planets would give us light", es: "Otros planetas nos darían luz", de: "Andere Planeten würden uns Licht geben", nl: "Andere planeten zouden ons licht geven" }
                ],
                correct: 0,
                explanation: {
                    en: "Without the Sun, Earth would become a frozen, dark planet with no heat or light to support life.",
                    es: "Sin el Sol, la Tierra se convertiría en un planeta congelado y oscuro sin calor o luz para sustentar la vida.",
                    de: "Ohne die Sonne würde die Erde ein gefrorener, dunkler Planet ohne Wärme oder Licht werden, um Leben zu unterstützen.",
                    nl: "Zonder de Zon zou de Aarde een bevroren, donkere planeet worden zonder warmte of licht om leven te ondersteunen."
                }
            },
            {
                question: {
                    en: "What is the Great Red Spot on Jupiter?",
                    es: "¿Qué es la Gran Mancha Roja en Júpiter?",
                    de: "Was ist der Große Rote Fleck auf Jupiter?",
                    nl: "Wat is de Grote Rode Vlek op Jupiter?"
                },
                options: [
                    { en: "A giant storm", es: "Una tormenta gigante", de: "Ein riesiger Sturm", nl: "Een gigantische storm" },
                    { en: "A moon", es: "Una luna", de: "Ein Mond", nl: "Een maan" },
                    { en: "A mountain", es: "Una montaña", de: "Ein Berg", nl: "Een berg" },
                    { en: "A crater", es: "Un cráter", de: "Ein Krater", nl: "Een krater" }
                ],
                correct: 0,
                explanation: {
                    en: "The Great Red Spot is a giant storm on Jupiter that has been raging for hundreds of years.",
                    es: "La Gran Mancha Roja es una tormenta gigante en Júpiter que ha estado enfureciendo por cientos de años.",
                    de: "Der Große Rote Fleck ist ein riesiger Sturm auf Jupiter, der seit Hunderten von Jahren tobt.",
                    nl: "De Grote Rode Vlek is een gigantische storm op Jupiter die al honderden jaren woedt."
                }
            },
            {
                question: {
                    en: "Why can't we live on Mars?",
                    es: "¿Por qué no podemos vivir en Marte?",
                    de: "Warum können wir nicht auf Mars leben?",
                    nl: "Waarom kunnen we niet op Mars leven?"
                },
                options: [
                    { en: "It's too cold and has no breathable air", es: "Es demasiado frío y no tiene aire respirable", de: "Es ist zu kalt und hat keine atembare Luft", nl: "Het is te koud en heeft geen adembare lucht" },
                    { en: "It's too small", es: "Es demasiado pequeño", de: "Es ist zu klein", nl: "Het is te klein" },
                    { en: "It has too many moons", es: "Tiene demasiadas lunas", de: "Es hat zu viele Monde", nl: "Het heeft te veel manen" },
                    { en: "It's too close to the Sun", es: "Está muy cerca del Sol", de: "Es ist zu nah zur Sonne", nl: "Het staat te dicht bij de Zon" }
                ],
                correct: 0,
                explanation: {
                    en: "Mars is too cold, has a very thin atmosphere, and no breathable air, making it impossible for humans to live there without special equipment.",
                    es: "Marte es demasiado frío, tiene una atmósfera muy delgada y no tiene aire respirable, haciendo imposible que los humanos vivan allí sin equipo especial.",
                    de: "Mars ist zu kalt, hat eine sehr dünne Atmosphäre und keine atembare Luft, was es für Menschen unmöglich macht, dort ohne spezielle Ausrüstung zu leben.",
                    nl: "Mars is te koud, heeft een zeer dunne atmosfeer en geen adembare lucht, waardoor het voor mensen onmogelijk is om daar te leven zonder speciale uitrusting."
                }
            },
            {
                question: {
                    en: "What makes a planet different from a star?",
                    es: "¿Qué hace diferente a un planeta de una estrella?",
                    de: "Was macht einen Planeten anders als einen Stern?",
                    nl: "Wat maakt een planeet anders dan een ster?"
                },
                options: [
                    { en: "Planets don't make their own light", es: "Los planetas no producen su propia luz", de: "Planeten machen ihr eigenes Licht nicht", nl: "Planeten maken hun eigen licht niet" },
                    { en: "Planets are bigger", es: "Los planetas son más grandes", de: "Planeten sind größer", nl: "Planeten zijn groter" },
                    { en: "Planets are hotter", es: "Los planetas son más calientes", de: "Planeten sind heißer", nl: "Planeten zijn heter" },
                    { en: "Planets are farther away", es: "Los planetas están más lejos", de: "Planeten sind weiter weg", nl: "Planeten zijn verder weg" }
                ],
                correct: 0,
                explanation: {
                    en: "Planets reflect sunlight and don't produce their own light, while stars create their own light through nuclear fusion.",
                    es: "Los planetas reflejan la luz solar y no producen su propia luz, mientras que las estrellas crean su propia luz a través de la fusión nuclear.",
                    de: "Planeten reflektieren Sonnenlicht und produzieren kein eigenes Licht, während Sterne ihr eigenes Licht durch Kernfusion erzeugen.",
                    nl: "Planeten reflecteren zonlicht en produceren geen eigen licht, terwijl sterren hun eigen licht creëren door kernfusie."
                }
            },
            {
                question: {
                    en: "Which planet rotates on its side?",
                    es: "¿Qué planeta rota de lado?",
                    de: "Welcher Planet rotiert auf der Seite?",
                    nl: "Welke planeet draait op zijn kant?"
                },
                options: [
                    { en: "Uranus", es: "Urano", de: "Uranus", nl: "Uranus" },
                    { en: "Earth", es: "Tierra", de: "Erde", nl: "Aarde" },
                    { en: "Mars", es: "Marte", de: "Mars", nl: "Mars" },
                    { en: "Venus", es: "Venus", de: "Venus", nl: "Venus" }
                ],
                correct: 0,
                explanation: {
                    en: "Uranus is unique because it rotates on its side, with its axis tilted at about 98 degrees.",
                    es: "Urano es único porque rota de lado, con su eje inclinado a unos 98 grados.",
                    de: "Uranus ist einzigartig, weil er auf der Seite rotiert, mit seiner Achse um etwa 98 Grad geneigt.",
                    nl: "Uranus is uniek omdat hij op zijn kant draait, met zijn as gekanteld op ongeveer 98 graden."
                }
            },
            {
                question: {
                    en: "What do we call the force that keeps planets orbiting the Sun?",
                    es: "¿Cómo llamamos a la fuerza que mantiene a los planetas orbitando el Sol?",
                    de: "Wie nennen wir die Kraft, die Planeten in der Umlaufbahn um die Sonne hält?",
                    nl: "Hoe noemen we de kracht die planeten in een baan rond de Zon houdt?"
                },
                options: [
                    { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" },
                    { en: "Magnetism", es: "Magnetismo", de: "Magnetismus", nl: "Magnetisme" },
                    { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
                    { en: "Electricity", es: "Electricidad", de: "Elektrizität", nl: "Elektriciteit" }
                ],
                correct: 0,
                explanation: {
                    en: "Gravity is the invisible force that pulls objects toward each other and keeps planets in orbit around the Sun.",
                    es: "La gravedad es la fuerza invisible que atrae objetos entre sí y mantiene a los planetas en órbita alrededor del Sol.",
                    de: "Die Schwerkraft ist die unsichtbare Kraft, die Objekte zueinander zieht und Planeten in der Umlaufbahn um die Sonne hält.",
                    nl: "Zwaartekracht is de onzichtbare kracht die objecten naar elkaar toe trekt en planeten in een baan rond de Zon houdt."
                }
            },
            {
                question: {
                    en: "How far is the Moon from Earth?",
                    es: "¿Qué tan lejos está la Luna de la Tierra?",
                    de: "Wie weit ist der Mond von der Erde entfernt?",
                    nl: "Hoe ver staat de Maan van de Aarde?"
                },
                options: [
                    { en: "About 384,000 kilometers", es: "Aproximadamente 384,000 kilómetros", de: "Etwa 384.000 Kilometer", nl: "Ongeveer 384.000 kilometer" },
                    { en: "1,000 kilometers", es: "1,000 kilómetros", de: "1.000 Kilometer", nl: "1.000 kilometer" },
                    { en: "1 million kilometers", es: "1 millón de kilómetros", de: "1 Million Kilometer", nl: "1 miljoen kilometer" },
                    { en: "100 kilometers", es: "100 kilómetros", de: "100 Kilometer", nl: "100 kilometer" }
                ],
                correct: 0,
                explanation: {
                    en: "The Moon is about 384,000 kilometers away from Earth, which is roughly 30 Earth diameters.",
                    es: "La Luna está aproximadamente a 384,000 kilómetros de la Tierra, que es aproximadamente 30 diámetros terrestres.",
                    de: "Der Mond ist etwa 384.000 Kilometer von der Erde entfernt, das sind ungefähr 30 Erddurchmesser.",
                    nl: "De Maan staat ongeveer 384.000 kilometer van de Aarde, dat is ongeveer 30 aardse diameters."
                }
            },
            {
                question: {
                    en: "What happens during a solar eclipse?",
                    es: "¿Qué pasa durante un eclipse solar?",
                    de: "Was passiert während einer Sonnenfinsternis?",
                    nl: "Wat gebeurt er tijdens een zonsverduistering?"
                },
                options: [
                    { en: "The Moon blocks the Sun's light", es: "La Luna bloquea la luz del Sol", de: "Der Mond blockiert das Sonnenlicht", nl: "De Maan blokkeert het zonlicht" },
                    { en: "Earth blocks the Sun", es: "La Tierra bloquea el Sol", de: "Die Erde blockiert die Sonne", nl: "De Aarde blokkeert de Zon" },
                    { en: "The Sun goes out", es: "El Sol se apaga", de: "Die Sonne geht aus", nl: "De Zon gaat uit" },
                    { en: "Clouds cover the Sun", es: "Las nubes cubren el Sol", de: "Wolken bedecken die Sonne", nl: "Wolken bedekken de Zon" }
                ],
                correct: 0,
                explanation: {
                    en: "During a solar eclipse, the Moon passes between Earth and the Sun, casting a shadow on Earth.",
                    es: "Durante un eclipse solar, la Luna pasa entre la Tierra y el Sol, proyectando una sombra sobre la Tierra.",
                    de: "Während einer Sonnenfinsternis geht der Mond zwischen Erde und Sonne vorbei und wirft einen Schatten auf die Erde.",
                    nl: "Tijdens een zonsverduistering gaat de Maan tussen de Aarde en de Zon door en werpt een schaduw op de Aarde."
                }
            },
            {
                question: {
                    en: "What happens during a lunar eclipse?",
                    es: "¿Qué pasa durante un eclipse lunar?",
                    de: "Was passiert während einer Mondfinsternis?",
                    nl: "Wat gebeurt er tijdens een maansverduistering?"
                },
                options: [
                    { en: "Earth blocks sunlight from reaching the Moon", es: "La Tierra bloquea la luz solar de llegar a la Luna", de: "Die Erde blockiert Sonnenlicht und erreicht den Mond", nl: "De Aarde blokkeert zonlicht dat de Maan bereikt" },
                    { en: "The Moon disappears", es: "La Luna desaparece", de: "Der Mond verschwindet", nl: "De Maan verdwijnt" },
                    { en: "The Moon turns off its light", es: "La Luna apaga su luz", de: "Der Mond schaltet sein Licht aus", nl: "De Maan zet zijn licht uit" },
                    { en: "The Sun blocks the Moon", es: "El Sol bloquea la Luna", de: "Die Sonne blockiert den Mond", nl: "De Zon blokkeert de Maan" }
                ],
                correct: 0,
                explanation: {
                    en: "During a lunar eclipse, Earth passes between the Sun and Moon, blocking sunlight from reaching the Moon.",
                    es: "Durante un eclipse lunar, la Tierra pasa entre el Sol y la Luna, bloqueando la luz solar de llegar a la Luna.",
                    de: "Während einer Mondfinsternis geht die Erde zwischen Sonne und Mond vorbei und blockiert das Sonnenlicht, das den Mond erreicht.",
                    nl: "Tijdens een maansverduistering gaat de Aarde tussen de Zon en de Maan door en blokkeert het zonlicht dat de Maan bereikt."
                }
            },
            {
                question: {
                    en: "What makes Jupiter so much bigger than Earth?",
                    es: "¿Qué hace a Júpiter mucho más grande que la Tierra?",
                    de: "Was macht Jupiter so viel größer als die Erde?",
                    nl: "Wat maakt Jupiter zo veel groter dan de Aarde?"
                },
                options: [
                    { en: "It's made mostly of gas", es: "Está hecho principalmente de gas", de: "Es besteht hauptsächlich aus Gas", nl: "Het bestaat voornamelijk uit gas" },
                    { en: "It's closer to the Sun", es: "Está más cerca del Sol", de: "Es ist näher zur Sonne", nl: "Het staat dichter bij de Zon" },
                    { en: "It's older than Earth", es: "Es más viejo que la Tierra", de: "Es ist älter als die Erde", nl: "Het is ouder dan de Aarde" },
                    { en: "It has more moons", es: "Tiene más lunas", de: "Es hat mehr Monde", nl: "Het heeft meer manen" }
                ],
                correct: 0,
                explanation: {
                    en: "Jupiter is much bigger because it's a gas giant made mostly of hydrogen and helium, unlike Earth's solid rock.",
                    es: "Júpiter es mucho más grande porque es un gigante gaseoso hecho principalmente de hidrógeno y helio, a diferencia de la roca sólida de la Tierra.",
                    de: "Jupiter ist viel größer, weil er ein Gasriese ist, der hauptsächlich aus Wasserstoff und Helium besteht, im Gegensatz zu Erdgestein.",
                    nl: "Jupiter is veel groter omdat het een gasreus is die voornamelijk bestaat uit waterstof en helium, in tegenstelling tot het vaste gesteente van de Aarde."
                }
            },
            {
                question: {
                    en: "Why do we always see the same side of the Moon?",
                    es: "¿Por qué siempre vemos el mismo lado de la Luna?",
                    de: "Warum sehen wir immer dieselbe Seite des Mondes?",
                    nl: "Waarom zien we altijd dezelfde kant van de Maan?"
                },
                options: [
                    { en: "The Moon rotates at the same speed it orbits Earth", es: "La Luna rota a la misma velocidad que orbita la Tierra", de: "Der Mond rotiert mit derselben Geschwindigkeit wie er die Erde umkreist", nl: "De Maan draait met dezelfde snelheid als hij de Aarde omcirkelt" },
                    { en: "The Moon doesn't rotate", es: "La Luna no rota", de: "Der Mond rotiert nicht", nl: "De Maan draait niet" },
                    { en: "The Moon is too far away", es: "La Luna está muy lejos", de: "Der Mond ist zu weit weg", nl: "De Maan staat te ver weg" },
                    { en: "One side of the Moon is broken", es: "Un lado de la Luna está roto", de: "Eine Seite des Mondes ist kaputt", nl: "Een kant van de Maan is kapot" }
                ],
                correct: 0,
                explanation: {
                    en: "We see the same side because the Moon's rotation period matches its orbital period around Earth (synchronous rotation).",
                    es: "Vemos el mismo lado porque el período de rotación de la Luna coincide con su período orbital alrededor de la Tierra (rotación síncrona).",
                    de: "Wir sehen dieselbe Seite, weil die Rotationsperiode des Mondes mit seiner Umlaufperiode um die Erde übereinstimmt (synchrone Rotation).",
                    nl: "We zien dezelfde kant omdat de rotatieperiode van de Maan overeenkomt met zijn omloopperiode rond de Aarde (synchrone rotatie)."
                }
            },
            {
                question: {
                    en: "What is our solar system part of?",
                    es: "¿De qué forma parte nuestro sistema solar?",
                    de: "Wovon ist unser Sonnensystem ein Teil?",
                    nl: "Waar is ons zonnestelsel onderdeel van?"
                },
                options: [
                    { en: "The Milky Way galaxy", es: "La galaxia Vía Láctea", de: "Die Milchstraße-Galaxie", nl: "Het Melkwegstelsel" },
                    { en: "Another solar system", es: "Otro sistema solar", de: "Ein anderes Sonnensystem", nl: "Een ander zonnestelsel" },
                    { en: "A constellation", es: "Una constelación", de: "Ein Sternbild", nl: "Een sterrenbeeld" },
                    { en: "A comet", es: "Un cometa", de: "Ein Komet", nl: "Een komeet" }
                ],
                correct: 0,
                explanation: {
                    en: "Our solar system is part of the Milky Way galaxy, which contains billions of stars and their planetary systems.",
                    es: "Nuestro sistema solar es parte de la galaxia Vía Láctea, que contiene miles de millones de estrellas y sus sistemas planetarios.",
                    de: "Unser Sonnensystem ist Teil der Milchstraßen-Galaxie, die Milliarden von Sternen und ihre Planetensysteme enthält.",
                    nl: "Ons zonnestelsel is onderdeel van het Melkwegstelsel, dat miljarden sterren en hun planetaire systemen bevat."
                }
            },
            {
                question: {
                    en: "How many Earth days does it take the Moon to orbit Earth?",
                    es: "¿Cuántos días terrestres le toma a la Luna orbitar la Tierra?",
                    de: "Wie viele Erdtage braucht der Mond, um die Erde zu umkreisen?",
                    nl: "Hoeveel aardse dagen heeft de Maan nodig om de Aarde te omcirkelen?"
                },
                options: [
                    { en: "About 28 days", es: "Aproximadamente 28 días", de: "Etwa 28 Tage", nl: "Ongeveer 28 dagen" },
                    { en: "7 days", es: "7 días", de: "7 Tage", nl: "7 dagen" },
                    { en: "365 days", es: "365 días", de: "365 Tage", nl: "365 dagen" },
                    { en: "1 day", es: "1 día", de: "1 Tag", nl: "1 dag" }
                ],
                correct: 0,
                explanation: {
                    en: "The Moon takes about 28 days (one lunar month) to complete one orbit around Earth.",
                    es: "La Luna toma aproximadamente 28 días (un mes lunar) para completar una órbita alrededor de la Tierra.",
                    de: "Der Mond braucht etwa 28 Tage (einen Mondmonat), um eine Umlaufbahn um die Erde zu vollenden.",
                    nl: "De Maan heeft ongeveer 28 dagen (een maanmaand) nodig om één baan rond de Aarde te voltooien."
                }
            },
            {
                question: {
                    en: "What would you weigh on the Moon compared to Earth?",
                    es: "¿Cuánto pesarías en la Luna comparado con la Tierra?",
                    de: "Wie viel würdest du auf dem Mond im Vergleich zur Erde wiegen?",
                    nl: "Hoeveel zou je wegen op de Maan vergeleken met de Aarde?"
                },
                options: [
                    { en: "About 6 times less", es: "Aproximadamente 6 veces menos", de: "Etwa 6 mal weniger", nl: "Ongeveer 6 keer minder" },
                    { en: "The same", es: "Lo mismo", de: "Das Gleiche", nl: "Hetzelfde" },
                    { en: "6 times more", es: "6 veces más", de: "6 mal mehr", nl: "6 keer meer" },
                    { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" }
                ],
                correct: 0,
                explanation: {
                    en: "You would weigh about 6 times less on the Moon because the Moon's gravity is much weaker than Earth's.",
                    es: "Pesarías aproximadamente 6 veces menos en la Luna porque la gravedad de la Luna es mucho más débil que la de la Tierra.",
                    de: "Du würdest etwa 6 mal weniger auf dem Mond wiegen, weil die Schwerkraft des Mondes viel schwächer ist als die der Erde.",
                    nl: "Je zou ongeveer 6 keer minder wegen op de Maan omdat de zwaartekracht van de Maan veel zwakker is dan die van de Aarde."
                }
            },
            {
                question: {
                    en: "What is a shooting star?",
                    es: "¿Qué es una estrella fugaz?",
                    de: "Was ist eine Sternschnuppe?",
                    nl: "Wat is een vallende ster?"
                },
                options: [
                    { en: "A meteor burning up in Earth's atmosphere", es: "Un meteoro que se quema en la atmósfera de la Tierra", de: "Ein Meteor, der in der Erdatmosphäre verbrennt", nl: "Een meteoor die opbrandt in de aardatmosfeer" },
                    { en: "A star flying through space", es: "Una estrella volando por el espacio", de: "Ein Stern, der durch den Weltraum fliegt", nl: "Een ster die door de ruimte vliegt" },
                    { en: "A rocket", es: "Un cohete", de: "Eine Rakete", nl: "Een raket" },
                    { en: "A comet", es: "Un cometa", de: "Ein Komet", nl: "Een komeet" }
                ],
                correct: 0,
                explanation: {
                    en: "A shooting star is actually a small piece of space rock called a meteor that burns up as it enters Earth's atmosphere, creating a bright streak of light in the sky! Most meteors are tiny - smaller than a pebble - but they travel so fast that they create this beautiful light show. Real stars don't actually 'shoot' or move around the sky.",
                    es: "¡Una estrella fugaz es en realidad un pequeño pedazo de roca espacial llamado meteoro que se quema al entrar en la atmósfera de la Tierra, creando una raya brillante de luz en el cielo! La mayoría de los meteoros son diminutos - más pequeños que una piedrita - pero viajan tan rápido que crean este hermoso espectáculo de luz. Las estrellas reales no 'disparan' o se mueven por el cielo.",
                    de: "Eine Sternschnuppe ist tatsächlich ein kleines Stück Weltraumgestein namens Meteor, das verbrennt, wenn es in die Erdatmosphäre eintritt und einen hellen Lichtstreifen am Himmel erzeugt! Die meisten Meteore sind winzig - kleiner als ein Kieselstein - aber sie reisen so schnell, dass sie diese wunderschöne Lichtshow erzeugen. Echte Sterne 'schießen' oder bewegen sich nicht am Himmel.",
                    nl: "Een vallende ster is eigenlijk een klein stukje ruimtesteen genaamd een meteoor dat opbrandt als het de atmosfeer van de aarde binnenkomt en een heldere lichtstreep aan de hemel maakt! De meeste meteoren zijn heel klein - kleiner dan een steentje - maar ze reizen zo snel dat ze deze prachtige lichtshow creëren. Echte sterren 'schieten' of bewegen niet echt door de lucht."
                }
            },
            {
                question: {
                    en: "What do astronauts wear to breathe in space?",
                    es: "¿Qué usan los astronautas para respirar en el espacio?",
                    de: "Was tragen Astronauten, um im Weltraum zu atmen?",
                    nl: "Wat dragen astronauten om in de ruimte te ademen?"
                },
                options: [
                    { en: "A spacesuit with air supply", es: "Un traje espacial con suministro de aire", de: "Einen Raumanzug mit Luftversorgung", nl: "Een ruimtepak met luchtvoorziening" },
                    { en: "A snorkel", es: "Un snorkel", de: "Einen Schnorchel", nl: "Een snorkel" },
                    { en: "A face mask", es: "Una mascarilla", de: "Eine Gesichtsmaske", nl: "Een gezichtsmasker" },
                    { en: "Nothing special", es: "Nada especial", de: "Nichts Besonderes", nl: "Niets bijzonders" }
                ],
                correct: 0,
                explanation: {
                    en: "Astronauts wear special spacesuits that provide them with air to breathe, protection from radiation, and temperature control! These suits are like personal spaceships that keep astronauts safe while they work in the dangerous environment of space. The suits also have communication systems so astronauts can talk to each other and to Mission Control on Earth.",
                    es: "¡Los astronautas usan trajes espaciales especiales que les proporcionan aire para respirar, protección de la radiación y control de temperatura! Estos trajes son como naves espaciales personales que mantienen a los astronautas seguros mientras trabajan en el ambiente peligroso del espacio. Los trajes también tienen sistemas de comunicación para que los astronautas puedan hablar entre ellos y con el Control de Misión en la Tierra.",
                    de: "Astronauten tragen spezielle Raumanzüge, die ihnen Atemluft, Schutz vor Strahlung und Temperaturkontrolle bieten! Diese Anzüge sind wie persönliche Raumschiffe, die Astronauten sicher halten, während sie in der gefährlichen Umgebung des Weltraums arbeiten. Die Anzüge haben auch Kommunikationssysteme, damit Astronauten miteinander und mit der Missionskontrolle auf der Erde sprechen können.",
                    nl: "Astronauten dragen speciale ruimtepakken die hen lucht geven om te ademen, bescherming tegen straling en temperatuurregeling! Deze pakken zijn zoals persoonlijke ruimteschepen die astronauten veilig houden terwijl ze werken in de gevaarlijke omgeving van de ruimte. De pakken hebben ook communicatiesystemen zodat astronauten met elkaar en met Mission Control op aarde kunnen praten."
                }
            },
            {
                question: {
                    en: "How long does it take light from the Sun to reach Earth?",
                    es: "¿Cuánto tiempo le toma a la luz del Sol llegar a la Tierra?",
                    de: "Wie lange braucht das Licht der Sonne, um die Erde zu erreichen?",
                    nl: "Hoe lang doet licht van de Zon erover om de Aarde te bereiken?"
                },
                options: [
                    { en: "About 8 minutes", es: "Aproximadamente 8 minutos", de: "Etwa 8 Minuten", nl: "Ongeveer 8 minuten" },
                    { en: "1 second", es: "1 segundo", de: "1 Sekunde", nl: "1 seconde" },
                    { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" },
                    { en: "1 day", es: "1 día", de: "1 Tag", nl: "1 dag" }
                ],
                correct: 0,
                explanation: {
                    en: "Light from the Sun takes about 8 minutes to travel the 93 million miles to Earth! Light travels incredibly fast - about 186,000 miles per second - but space is so huge that even light takes time to get from place to place. This means when you look at the Sun (never look directly!), you're actually seeing it as it was 8 minutes ago!",
                    es: "¡La luz del Sol toma aproximadamente 8 minutos para viajar las 93 millones de millas hasta la Tierra! La luz viaja increíblemente rápido - aproximadamente 186,000 millas por segundo - pero el espacio es tan enorme que incluso la luz toma tiempo para ir de un lugar a otro. ¡Esto significa que cuando miras al Sol (¡nunca mires directamente!), en realidad lo estás viendo como era hace 8 minutos!",
                    de: "Licht von der Sonne braucht etwa 8 Minuten, um die 93 Millionen Meilen zur Erde zu reisen! Licht reist unglaublich schnell - etwa 186.000 Meilen pro Sekunde - aber der Weltraum ist so riesig, dass selbst Licht Zeit braucht, um von Ort zu Ort zu gelangen. Das bedeutet, wenn du zur Sonne schaust (niemals direkt hineinschauen!), siehst du sie tatsächlich so, wie sie vor 8 Minuten war!",
                    nl: "Licht van de Zon heeft ongeveer 8 minuten nodig om de 93 miljoen mijl naar de Aarde te reizen! Licht reist ongelooflijk snel - ongeveer 186.000 mijl per seconde - maar de ruimte is zo enorm groot dat zelfs licht tijd nodig heeft om van plaats naar plaats te gaan. Dit betekent dat wanneer je naar de Zon kijkt (nooit direct kijken!), je hem eigenlijk ziet zoals hij 8 minuten geleden was!"
                }
            },
            {
                question: {
                    en: "What is the name of our galaxy?",
                    es: "¿Cómo se llama nuestra galaxia?",
                    de: "Wie heißt unsere Galaxie?",
                    nl: "Hoe heet onze melkweg?"
                },
                options: [
                    { en: "Milky Way", es: "Vía Láctea", de: "Milchstraße", nl: "Melkweg" },
                    { en: "Andromeda", es: "Andrómeda", de: "Andromeda", nl: "Andromeda" },
                    { en: "Big Dipper", es: "Osa Mayor", de: "Großer Wagen", nl: "Grote Beer" },
                    { en: "Solar Way", es: "Vía Solar", de: "Solarweg", nl: "Zonneweg" }
                ],
                correct: 0,
                explanation: {
                    en: "Our galaxy is called the Milky Way! It's a huge collection of billions of stars, including our Sun, all spinning together in space. From Earth, we can see part of our galaxy as a bright band of stars across the night sky. Ancient people thought this band looked like spilled milk, which is why we call it the Milky Way!",
                    es: "¡Nuestra galaxia se llama Vía Láctea! Es una enorme colección de miles de millones de estrellas, incluyendo nuestro Sol, todas girando juntas en el espacio. Desde la Tierra, podemos ver parte de nuestra galaxia como una banda brillante de estrellas a través del cielo nocturno. La gente antigua pensaba que esta banda parecía leche derramada, ¡por eso la llamamos Vía Láctea!",
                    de: "Unsere Galaxie heißt Milchstraße! Es ist eine riesige Sammlung von Milliarden von Sternen, einschließlich unserer Sonne, die alle zusammen im Weltraum rotieren. Von der Erde aus können wir einen Teil unserer Galaxie als helles Sternenband über den Nachthimmel sehen. Alte Menschen dachten, dieses Band sähe aus wie verschüttete Milch, deshalb nennen wir es Milchstraße!",
                    nl: "Onze melkweg heet de Melkweg! Het is een enorme verzameling van miljarden sterren, inclusief onze Zon, die allemaal samen in de ruimte draaien. Vanaf de Aarde kunnen we een deel van onze melkweg zien als een heldere band van sterren over de nachtelijke hemel. Oude mensen dachten dat deze band eruitzag als gemorste melk, daarom noemen we het de Melkweg!"
                }
            },
            {
                question: {
                    en: "What happens to stars when they get very old?",
                    es: "¿Qué les pasa a las estrellas cuando se vuelven muy viejas?",
                    de: "Was passiert mit Sternen, wenn sie sehr alt werden?",
                    nl: "Wat gebeurt er met sterren als ze heel oud worden?"
                },
                options: [
                    { en: "They can explode or collapse", es: "Pueden explotar o colapsar", de: "Sie können explodieren oder kollabieren", nl: "Ze kunnen exploderen of instorten" },
                    { en: "They turn green", es: "Se vuelven verdes", de: "Sie werden grün", nl: "Ze worden groen" },
                    { en: "They move to other galaxies", es: "Se mueven a otras galaxias", de: "Sie ziehen in andere Galaxien", nl: "Ze verhuizen naar andere sterrenstelsels" },
                    { en: "They become planets", es: "Se convierten en planetas", de: "Sie werden zu Planeten", nl: "Ze worden planeten" }
                ],
                correct: 0,
                explanation: {
                    en: "When stars get very old, they can explode in a spectacular event called a supernova, or they can collapse into very dense objects! Some stars become white dwarfs, neutron stars, or even black holes. The materials from exploding stars help create new stars and planets. Our Sun has billions of years left, so don't worry about it happening soon!",
                    es: "¡Cuando las estrellas se vuelven muy viejas, pueden explotar en un evento espectacular llamado supernova, o pueden colapsar en objetos muy densos! Algunas estrellas se convierten en enanas blancas, estrellas de neutrones, o incluso agujeros negros. Los materiales de las estrellas que explotan ayudan a crear nuevas estrellas y planetas. ¡Nuestro Sol tiene miles de millones de años restantes, así que no te preocupes de que pase pronto!",
                    de: "Wenn Sterne sehr alt werden, können sie in einem spektakulären Ereignis namens Supernova explodieren oder zu sehr dichten Objekten kollabieren! Manche Sterne werden zu Weißen Zwergen, Neutronensternen oder sogar Schwarzen Löchern. Die Materialien von explodierenden Sternen helfen dabei, neue Sterne und Planeten zu erschaffen. Unsere Sonne hat noch Milliarden Jahre übrig, also mach dir keine Sorgen, dass es bald passiert!",
                    nl: "Wanneer sterren heel oud worden, kunnen ze exploderen in een spectaculaire gebeurtenis genaamd een supernova, of ze kunnen instorten tot zeer dichte objecten! Sommige sterren worden witte dwergen, neutronensterren, of zelfs zwarte gaten. De materialen van exploderende sterren helpen nieuwe sterren en planeten te maken. Onze Zon heeft nog miljarden jaren te gaan, dus maak je geen zorgen dat het binnenkort gebeurt!"
                }
            },
            {
                question: {
                    en: "Why is our solar system important to study?",
                    es: "¿Por qué es importante estudiar nuestro sistema solar?",
                    de: "Warum ist es wichtig, unser Sonnensystem zu studieren?",
                    nl: "Waarom is het belangrijk om ons zonnestelsel te bestuderen?"
                },
                options: [
                    { en: "It helps us understand Earth and space", es: "Nos ayuda a entender la Tierra y el espacio", de: "Es hilft uns, die Erde und den Weltraum zu verstehen", nl: "Het helpt ons de Aarde en de ruimte te begrijpen" },
                    { en: "It's fun to learn planet names", es: "Es divertido aprender nombres de planetas", de: "Es macht Spaß, Planetennamen zu lernen", nl: "Het is leuk om planetennamen te leren" },
                    { en: "We might visit other planets", es: "Podríamos visitar otros planetas", de: "Wir könnten andere Planeten besueken", nl: "We zouden andere planeten kunnen bezoeken" },
                    { en: "To make better telescopes", es: "Para hacer mejores telescopios", de: "Um bessere Teleskope zu machen", nl: "Om betere telescopen te maken" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying our solar system helps us understand how planets form, how life develops, and our place in the universe! By learning about other planets, we better understand what makes Earth special and how to protect our home planet. Space exploration also leads to amazing discoveries and new technologies that help improve life on Earth.",
                    es: "¡Estudiar nuestro sistema solar nos ayuda a entender cómo se forman los planetas, cómo se desarrolla la vida y nuestro lugar en el universo! Al aprender sobre otros planetas, entendemos mejor qué hace especial a la Tierra y cómo proteger nuestro planeta hogar. La exploración espacial también lleva a descubrimientos increíbles y nuevas tecnologías que ayudan a mejorar la vida en la Tierra.",
                    de: "Das Studium unseres Sonnensystems hilft uns zu verstehen, wie Planeten entstehen, wie sich Leben entwickelt und unseren Platz im Universum! Indem wir über andere Planeten lernen, verstehen wir besser, was die Erde besonders macht und wie wir unseren Heimatplaneten schützen können. Weltraumforschung führt auch zu erstaunlichen Entdeckungen und neuen Technologien, die helfen, das Leben auf der Erde zu verbessern.",
                    nl: "Het bestuderen van ons zonnestelsel helpt ons begrijpen hoe planeten ontstaan, hoe leven zich ontwikkelt en onze plaats in het universum! Door over andere planeten te leren, begrijpen we beter wat de Aarde speciaal maakt en hoe we onze thuisplaneet kunnen beschermen. Ruimteverkenning leidt ook tot verbazingwekkende ontdekkingen en nieuwe technologieën die helpen het leven op Aarde te verbeteren."
                }
            },
            {
                question: {
                    en: "What do we use to see far away things in space?",
                    es: "¿Qué usamos para ver cosas lejanas en el espacio?",
                    de: "Was benutzen wir, um weit entfernte Dinge im Weltraum zu sehen?",
                    nl: "Wat gebruiken we om verre dingen in de ruimte te zien?"
                },
                options: [
                    { en: "A telescope", es: "Un telescopio", de: "Ein Teleskop", nl: "Een telescoop" },
                    { en: "Binoculars", es: "Binoculares", de: "Fernglas", nl: "Een verrekijker" },
                    { en: "A magnifying glass", es: "Una lupa", de: "Eine Lupe", nl: "Een vergrootglas" },
                    { en: "Sunglasses", es: "Gafas de sol", de: "Sonnenbrille", nl: "Een zonnebril" }
                ],
                correct: 0,
                explanation: {
                    en: "We use telescopes to see far away things in space! Telescopes collect light from distant stars, planets, and galaxies and make them appear bigger and brighter so we can see them better. There are telescopes on Earth and even in space, like the Hubble Space Telescope, that help us discover amazing things about the universe. Even with a small telescope, you can see the Moon's craters, Saturn's rings, and Jupiter's moons!",
                    es: "¡Usamos telescopios para ver cosas lejanas en el espacio! Los telescopios recolectan luz de estrellas distantes, planetas y galaxias y las hacen aparecer más grandes y brillantes para que podamos verlas mejor. Hay telescopios en la Tierra e incluso en el espacio, como el Telescopio Espacial Hubble, que nos ayudan a descubrir cosas increíbles sobre el universo. ¡Incluso con un telescopio pequeño, puedes ver los cráteres de la Luna, los anillos de Saturno y las lunas de Júpiter!",
                    de: "Wir benutzen Teleskope, um weit entfernte Dinge im Weltraum zu sehen! Teleskope sammeln Licht von entfernten Sternen, Planeten und Galaxien und lassen sie größer und heller erscheinen, damit wir sie besser sehen können. Es gibt Teleskope auf der Erde und sogar im Weltraum, wie das Hubble-Weltraumteleskop, die uns helfen, erstaunliche Dinge über das Universum zu entdecken. Sogar mit einem kleinen Teleskop kannst du Mondkrater, Saturnringe und Jupitermonde sehen!",
                    nl: "We gebruiken telescopen om verre dingen in de ruimte te zien! Telescopen verzamelen licht van verre sterren, planeten en sterrenstelsels en maken ze groter en helderder zodat we ze beter kunnen zien. Er zijn telescopen op aarde en zelfs in de ruimte, zoals de Hubble Space Telescope, die ons helpen verbazingwekkende dingen over het universum te ontdekken. Zelfs met een kleine telescoop kun je de kraters van de maan, de ringen van Saturnus en de manen van Jupiter zien!"
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/space-astronomy', level1);
    }
})();