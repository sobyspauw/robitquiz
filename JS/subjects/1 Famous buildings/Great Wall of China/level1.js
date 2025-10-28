(function() {
    const level1 = {
    name: {
      en: "Basics",
      es: "Conceptos Básicos",
      de: "Grundlagen",
      nl: "Basiskennis"
},
    questions: [
        {
            question: {
                en: "What is the Great Wall of China?",
                es: "¿Qué es la Gran Muralla China?",
                de: "Was ist die Chinesische Mauer?",
                nl: "Wat is de Chinese Muur?"
            },
            options: [
                {
                    en: "A series of fortifications built to protect China",
                    es: "Una serie de fortificaciones construidas para proteger China",
                    de: "Eine Reihe von Befestigungen zum Schutz Chinas",
                    nl: "Een reeks vestingwerken gebouwd om China te beschermen"
                },
                {
                    en: "A single continuous wall",
                    es: "Un solo muro continuo",
                    de: "Eine einzelne durchgehende Mauer",
                    nl: "Een enkele doorlopende muur"
                },
                {
                    en: "A ceremonial monument",
                    es: "Un monumento ceremonial",
                    de: "Ein zeremonielles Monument",
                    nl: "Een ceremonieel monument"
                },
                {
                    en: "A trade route",
                    es: "Una ruta comercial",
                    de: "Eine Handelsroute",
                    nl: "Een handelsroute"
                }
            ],
            correct: 0,
            explanation: {
                en: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, and other materials, built to protect Chinese states and empires against invasions.",
                es: "La Gran Muralla China es una serie de fortificaciones hechas de piedra, ladrillo, tierra apisonada y otros materiales, construida para proteger los estados e imperios chinos contra invasiones.",
                de: "Die Chinesische Mauer ist eine Reihe von Befestigungen aus Stein, Ziegeln, gestampfter Erde und anderen Materialien, die zum Schutz chinesischer Staaten und Reiche vor Invasionen errichtet wurden.",
                nl: "De Chinese Muur is een reeks vestingwerken gemaakt van steen, baksteen, aangestampte aarde en andere materialen, gebouwd om Chinese staten en rijken te beschermen tegen invasies."
            }
        },
        {
            question: {
                en: "Approximately how long is the Great Wall of China in total?",
                es: "¿Aproximadamente cuánto mide la Gran Muralla China en total?",
                de: "Wie lang ist die Chinesische Mauer insgesamt ungefähr?",
                nl: "Ongeveer hoe lang is de Chinese Muur in totaal?"
            },
            options: [
                {
                    en: "5,500 km",
                    es: "5.500 km",
                    de: "5.500 km",
                    nl: "5.500 km"
                },
                {
                    en: "21,196 km",
                    es: "21.196 km",
                    de: "21.196 km",
                    nl: "21.196 km"
                },
                {
                    en: "10,000 km",
                    es: "10.000 km",
                    de: "10.000 km",
                    nl: "10.000 km"
                },
                {
                    en: "15,000 km",
                    es: "15.000 km",
                    de: "15.000 km",
                    nl: "15.000 km"
                }
            ],
            correct: 1,
            explanation: {
                en: "According to a 2012 survey, the total length of all sections of the Great Wall, including branches and spurs, is approximately 21,196 kilometers (13,171 miles).",
                es: "Según un estudio de 2012, la longitud total de todas las secciones de la Gran Muralla, incluidas las ramificaciones, es de aproximadamente 21.196 kilómetros.",
                de: "Laut einer Untersuchung von 2012 beträgt die Gesamtlänge aller Abschnitte der Chinesischen Mauer, einschließlich Verzweigungen, etwa 21.196 Kilometer.",
                nl: "Volgens een onderzoek uit 2012 is de totale lengte van alle secties van de Chinese Muur, inclusief vertakkingen, ongeveer 21.196 kilometer."
            }
        },
        {
            question: {
                en: "When did construction of the Great Wall begin?",
                es: "¿Cuándo comenzó la construcción de la Gran Muralla?",
                de: "Wann begann der Bau der Chinesischen Mauer?",
                nl: "Wanneer begon de bouw van de Chinese Muur?"
            },
            options: [
                {
                    en: "1st century AD",
                    es: "Siglo I d.C.",
                    de: "1. Jahrhundert n. Chr.",
                    nl: "1e eeuw na Christus"
                },
                {
                    en: "7th century BC",
                    es: "Siglo VII a.C.",
                    de: "7. Jahrhundert v. Chr.",
                    nl: "7e eeuw voor Christus"
                },
                {
                    en: "3rd century AD",
                    es: "Siglo III d.C.",
                    de: "3. Jahrhundert n. Chr.",
                    nl: "3e eeuw na Christus"
                },
                {
                    en: "10th century BC",
                    es: "Siglo X a.C.",
                    de: "10. Jahrhundert v. Chr.",
                    nl: "10e eeuw voor Christus"
                }
            ],
            correct: 1,
            explanation: {
                en: "The earliest walls were built in the 7th century BC during the Warring States period. Various states built walls to defend their borders.",
                es: "Los primeros muros se construyeron en el siglo VII a.C. durante el período de los Reinos Combatientes. Varios estados construyeron muros para defender sus fronteras.",
                de: "Die frühesten Mauern wurden im 7. Jahrhundert v. Chr. während der Zeit der Streitenden Reiche gebaut. Verschiedene Staaten errichteten Mauern zur Verteidigung ihrer Grenzen.",
                nl: "De vroegste muren werden gebouwd in de 7e eeuw voor Christus tijdens de periode van de Strijdende Staten. Verschillende staten bouwden muren om hun grenzen te verdedigen."
            }
        },
        {
            question: {
                en: "What was the primary purpose of the Great Wall?",
                es: "¿Cuál era el propósito principal de la Gran Muralla?",
                de: "Was war der Hauptzweck der Chinesischen Mauer?",
                nl: "Wat was het primaire doel van de Chinese Muur?"
            },
            options: [
                {
                    en: "To facilitate trade",
                    es: "Facilitar el comercio",
                    de: "Handel zu erleichtern",
                    nl: "Om handel te faciliteren"
                },
                {
                    en: "To protect against invasions and raids",
                    es: "Proteger contra invasiones y ataques",
                    de: "Schutz vor Invasionen und Überfällen",
                    nl: "Om te beschermen tegen invasies en overvallen"
                },
                {
                    en: "Religious ceremonies",
                    es: "Ceremonias religiosas",
                    de: "Religiöse Zeremonien",
                    nl: "Religieuze ceremonies"
                },
                {
                    en: "To mark territorial boundaries",
                    es: "Marcar límites territoriales",
                    de: "Territoriale Grenzen zu markieren",
                    nl: "Om territoriale grenzen te markeren"
                }
            ],
            correct: 1,
            explanation: {
                en: "The primary purpose was to protect Chinese states and empires from nomadic invasions and military raids from the north, particularly from the Xiongnu and later the Mongols.",
                es: "El propósito principal era proteger los estados e imperios chinos de las invasiones nómadas y los ataques militares del norte, particularmente de los Xiongnu y más tarde de los mongoles.",
                de: "Der Hauptzweck war der Schutz chinesischer Staaten und Reiche vor nomadischen Invasionen und militärischen Überfällen aus dem Norden, insbesondere von den Xiongnu und später den Mongolen.",
                nl: "Het primaire doel was om Chinese staten en rijken te beschermen tegen nomadische invasies en militaire overvallen uit het noorden, met name van de Xiongnu en later de Mongolen."
            }
        },
        {
            question: {
                en: "Which Chinese emperor is most famous for connecting and extending the wall?",
                es: "¿Qué emperador chino es más famoso por conectar y extender la muralla?",
                de: "Welcher chinesische Kaiser ist am berühmtesten dafür, die Mauer zu verbinden und zu erweitern?",
                nl: "Welke Chinese keizer is het meest beroemd voor het verbinden en uitbreiden van de muur?"
            },
            options: [
                {
                    en: "Emperor Wu of Han",
                    es: "Emperador Wu de Han",
                    de: "Kaiser Wu von Han",
                    nl: "Keizer Wu van Han"
                },
                {
                    en: "Qin Shi Huang",
                    es: "Qin Shi Huang",
                    de: "Qin Shi Huang",
                    nl: "Qin Shi Huang"
                },
                {
                    en: "Kublai Khan",
                    es: "Kublai Kan",
                    de: "Kublai Khan",
                    nl: "Kublai Khan"
                },
                {
                    en: "Tang Taizong",
                    es: "Tang Taizong",
                    de: "Tang Taizong",
                    nl: "Tang Taizong"
                }
            ],
            correct: 1,
            explanation: {
                en: "Qin Shi Huang, the first Emperor of unified China (221-210 BC), is famous for ordering the connection and extension of various pre-existing walls into one defensive system.",
                es: "Qin Shi Huang, el primer emperador de la China unificada (221-210 a.C.), es famoso por ordenar la conexión y extensión de varios muros preexistentes en un solo sistema defensivo.",
                de: "Qin Shi Huang, der erste Kaiser des vereinten China (221-210 v. Chr.), ist berühmt dafür, die Verbindung und Erweiterung verschiedener bereits existierender Mauern zu einem Verteidigungssystem angeordnet zu haben.",
                nl: "Qin Shi Huang, de eerste keizer van het verenigde China (221-210 v.Chr.), is beroemd omdat hij opdracht gaf tot het verbinden en uitbreiden van verschillende reeds bestaande muren tot één verdedigingssysteem."
            }
        },
        {
            question: {
                en: "In which year was the Great Wall designated a UNESCO World Heritage Site?",
                es: "¿En qué año fue designada la Gran Muralla como Patrimonio de la Humanidad por la UNESCO?",
                de: "In welchem Jahr wurde die Chinesische Mauer zum UNESCO-Weltkulturerbe erklärt?",
                nl: "In welk jaar werd de Chinese Muur aangewezen als UNESCO-werelderfgoed?"
            },
            options: [
                {
                    en: "1987",
                    es: "1987",
                    de: "1987",
                    nl: "1987"
                },
                {
                    en: "1995",
                    es: "1995",
                    de: "1995",
                    nl: "1995"
                },
                {
                    en: "1979",
                    es: "1979",
                    de: "1979",
                    nl: "1979"
                },
                {
                    en: "2000",
                    es: "2000",
                    de: "2000",
                    nl: "2000"
                }
            ],
            correct: 0,
            explanation: {
                en: "The Great Wall of China was designated a UNESCO World Heritage Site in 1987, recognizing its outstanding universal value as a cultural monument.",
                es: "La Gran Muralla China fue designada Patrimonio de la Humanidad por la UNESCO en 1987, reconociendo su valor universal excepcional como monumento cultural.",
                de: "Die Chinesische Mauer wurde 1987 zum UNESCO-Weltkulturerbe erklärt, wodurch ihr außergewöhnlicher universeller Wert als Kulturdenkmal anerkannt wurde.",
                nl: "De Chinese Muur werd in 1987 aangewezen als UNESCO-werelderfgoed, waarbij de uitzonderlijke universele waarde als cultureel monument werd erkend."
            }
        },
        {
            question: {
                en: "Can the Great Wall be seen from space with the naked eye?",
                es: "¿Se puede ver la Gran Muralla desde el espacio a simple vista?",
                de: "Kann man die Chinesische Mauer mit bloßem Auge aus dem All sehen?",
                nl: "Kan de Chinese Muur met het blote oog vanuit de ruimte worden gezien?"
            },
            options: [
                {
                    en: "Yes, easily",
                    es: "Sí, fácilmente",
                    de: "Ja, leicht",
                    nl: "Ja, gemakkelijk"
                },
                {
                    en: "No, this is a myth",
                    es: "No, esto es un mito",
                    de: "Nein, das ist ein Mythos",
                    nl: "Nee, dit is een mythe"
                },
                {
                    en: "Only from the moon",
                    es: "Solo desde la luna",
                    de: "Nur vom Mond aus",
                    nl: "Alleen vanaf de maan"
                },
                {
                    en: "Only during winter",
                    es: "Solo durante el invierno",
                    de: "Nur im Winter",
                    nl: "Alleen tijdens de winter"
                }
            ],
            correct: 1,
            explanation: {
                en: "Contrary to popular belief, the Great Wall cannot be seen from space with the naked eye. This myth has been debunked by astronauts. It's too narrow and blends with the natural landscape.",
                es: "Contrariamente a la creencia popular, la Gran Muralla no se puede ver desde el espacio a simple vista. Este mito ha sido desmentido por astronautas. Es demasiado estrecha y se mezcla con el paisaje natural.",
                de: "Entgegen der landläufigen Meinung kann die Chinesische Mauer mit bloßem Auge nicht aus dem All gesehen werden. Dieser Mythos wurde von Astronauten widerlegt. Sie ist zu schmal und verschmilzt mit der natürlichen Landschaft.",
                nl: "In tegenstelling tot wat vaak wordt gedacht, kan de Chinese Muur niet met het blote oog vanuit de ruimte worden gezien. Deze mythe is ontkracht door astronauten. De muur is te smal en gaat op in het natuurlijke landschap."
            }
        },
        {
            question: {
                en: "What is the Chinese name for the Great Wall?",
                es: "¿Cuál es el nombre chino de la Gran Muralla?",
                de: "Wie lautet der chinesische Name für die Chinesische Mauer?",
                nl: "Wat is de Chinese naam voor de Chinese Muur?"
            },
            options: [
                {
                    en: "Zhongguo Qiang",
                    es: "Zhongguo Qiang",
                    de: "Zhongguo Qiang",
                    nl: "Zhongguo Qiang"
                },
                {
                    en: "Changcheng",
                    es: "Changcheng",
                    de: "Changcheng",
                    nl: "Changcheng"
                },
                {
                    en: "Da Qiang",
                    es: "Da Qiang",
                    de: "Da Qiang",
                    nl: "Da Qiang"
                },
                {
                    en: "Beijing Cheng",
                    es: "Beijing Cheng",
                    de: "Beijing Cheng",
                    nl: "Beijing Cheng"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Chinese name for the Great Wall is 'Changcheng' (长城), which literally translates to 'Long Wall' or 'Long City'.",
                es: "El nombre chino de la Gran Muralla es 'Changcheng' (长城), que se traduce literalmente como 'Muro Largo' o 'Ciudad Larga'.",
                de: "Der chinesische Name für die Chinesische Mauer ist 'Changcheng' (长城), was wörtlich 'Lange Mauer' oder 'Lange Stadt' bedeutet.",
                nl: "De Chinese naam voor de Chinese Muur is 'Changcheng' (长城), wat letterlijk 'Lange Muur' of 'Lange Stad' betekent."
            }
        },
        {
            question: {
                en: "How many people visit the Great Wall annually?",
                es: "¿Cuántas personas visitan la Gran Muralla anualmente?",
                de: "Wie viele Menschen besuchen die Chinesische Mauer jährlich?",
                nl: "Hoeveel mensen bezoeken de Chinese Muur jaarlijks?"
            },
            options: [
                {
                    en: "About 1 million",
                    es: "Aproximadamente 1 millón",
                    de: "Etwa 1 Million",
                    nl: "Ongeveer 1 miljoen"
                },
                {
                    en: "About 10 million",
                    es: "Aproximadamente 10 millones",
                    de: "Etwa 10 Millionen",
                    nl: "Ongeveer 10 miljoen"
                },
                {
                    en: "About 5 million",
                    es: "Aproximadamente 5 millones",
                    de: "Etwa 5 Millionen",
                    nl: "Ongeveer 5 miljoen"
                },
                {
                    en: "About 50 million",
                    es: "Aproximadamente 50 millones",
                    de: "Etwa 50 Millionen",
                    nl: "Ongeveer 50 miljoen"
                }
            ],
            correct: 1,
            explanation: {
                en: "Approximately 10 million people visit the Great Wall each year, making it one of the most visited tourist attractions in the world.",
                es: "Aproximadamente 10 millones de personas visitan la Gran Muralla cada año, lo que la convierte en una de las atracciones turísticas más visitadas del mundo.",
                de: "Etwa 10 Millionen Menschen besuchen die Chinesische Mauer jedes Jahr, was sie zu einer der meistbesuchten Touristenattraktionen der Welt macht.",
                nl: "Ongeveer 10 miljoen mensen bezoeken de Chinese Muur elk jaar, waardoor het een van de meest bezochte toeristische attracties ter wereld is."
            }
        },
        {
            question: {
                en: "Which dynasty built the most recognizable sections of the Great Wall that stand today?",
                es: "¿Qué dinastía construyó las secciones más reconocibles de la Gran Muralla que permanecen hoy?",
                de: "Welche Dynastie baute die heute noch stehenden bekanntesten Abschnitte der Chinesischen Mauer?",
                nl: "Welke dynastie bouwde de meest herkenbare secties van de Chinese Muur die er vandaag nog staan?"
            },
            options: [
                {
                    en: "Qin Dynasty",
                    es: "Dinastía Qin",
                    de: "Qin-Dynastie",
                    nl: "Qin-dynastie"
                },
                {
                    en: "Han Dynasty",
                    es: "Dinastía Han",
                    de: "Han-Dynastie",
                    nl: "Han-dynastie"
                },
                {
                    en: "Ming Dynasty",
                    es: "Dinastía Ming",
                    de: "Ming-Dynastie",
                    nl: "Ming-dynastie"
                },
                {
                    en: "Tang Dynasty",
                    es: "Dinastía Tang",
                    de: "Tang-Dynastie",
                    nl: "Tang-dynastie"
                }
            ],
            correct: 2,
            explanation: {
                en: "The Ming Dynasty (1368-1644) built the most extensive and well-preserved sections of the Great Wall that tourists visit today, including the famous Badaling section.",
                es: "La Dinastía Ming (1368-1644) construyó las secciones más extensas y mejor conservadas de la Gran Muralla que los turistas visitan hoy, incluyendo la famosa sección de Badaling.",
                de: "Die Ming-Dynastie (1368-1644) baute die umfangreichsten und am besten erhaltenen Abschnitte der Chinesischen Mauer, die Touristen heute besuchen, einschließlich des berühmten Badaling-Abschnitts.",
                nl: "De Ming-dynastie (1368-1644) bouwde de meest uitgebreide en goed bewaarde secties van de Chinese Muur die toeristen vandaag bezoeken, inclusief de beroemde Badaling-sectie."
            }
        },
        {
            question: {
                en: "What natural features did builders incorporate into the Great Wall's design?",
                es: "¿Qué características naturales incorporaron los constructores en el diseño de la Gran Muralla?",
                de: "Welche natürlichen Merkmale integrierten die Erbauer in das Design der Chinesischen Mauer?",
                nl: "Welke natuurlijke kenmerken hebben bouwers in het ontwerp van de Chinese Muur verwerkt?"
            },
            options: [
                {
                    en: "Rivers and lakes",
                    es: "Ríos y lagos",
                    de: "Flüsse und Seen",
                    nl: "Rivieren en meren"
                },
                {
                    en: "Mountains and ridges",
                    es: "Montañas y crestas",
                    de: "Berge und Gebirgskämme",
                    nl: "Bergen en bergkammen"
                },
                {
                    en: "Forests and valleys",
                    es: "Bosques y valles",
                    de: "Wälder und Täler",
                    nl: "Bossen en valleien"
                },
                {
                    en: "Desert dunes",
                    es: "Dunas del desierto",
                    de: "Wüstendünen",
                    nl: "Woestijnduinen"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall was built following the contours of mountains and ridges, using natural terrain as part of the defensive structure to make it more difficult to attack.",
                es: "La Gran Muralla fue construida siguiendo los contornos de montañas y crestas, utilizando el terreno natural como parte de la estructura defensiva para hacerla más difícil de atacar.",
                de: "Die Chinesische Mauer wurde entlang der Konturen von Bergen und Gebirgskämmen gebaut, wobei das natürliche Gelände als Teil der Verteidigungsstruktur genutzt wurde, um Angriffe zu erschweren.",
                nl: "De Chinese Muur werd gebouwd volgens de contouren van bergen en bergkammen, waarbij het natuurlijke terrein werd gebruikt als onderdeel van de verdedigingsstructuur om aanvallen te bemoeilijken."
            }
        },
        {
            question: {
                en: "What is the average height of the Great Wall?",
                es: "¿Cuál es la altura promedio de la Gran Muralla?",
                de: "Wie hoch ist die Chinesische Mauer durchschnittlich?",
                nl: "Wat is de gemiddelde hoogte van de Chinese Muur?"
            },
            options: [
                {
                    en: "3-5 m",
                    es: "3-5 metros",
                    de: "3-5 Meter",
                    nl: "3-5 meter"
                },
                {
                    en: "6-8 m",
                    es: "6-8 metros",
                    de: "6-8 Meter",
                    nl: "6-8 meter"
                },
                {
                    en: "10-12 m",
                    es: "10-12 metros",
                    de: "10-12 Meter",
                    nl: "10-12 meter"
                },
                {
                    en: "15-20 m",
                    es: "15-20 metros",
                    de: "15-20 Meter",
                    nl: "15-20 meter"
                }
            ],
            correct: 1,
            explanation: {
                en: "The average height of the Great Wall is approximately 6-8 meters (20-26 feet), though this varies by section and dynasty that built it.",
                es: "La altura promedio de la Gran Muralla es de aproximadamente 6-8 metros, aunque esto varía según la sección y la dinastía que la construyó.",
                de: "Die durchschnittliche Höhe der Chinesischen Mauer beträgt etwa 6-8 Meter, obwohl dies je nach Abschnitt und der Dynastie, die ihn baute, variiert.",
                nl: "De gemiddelde hoogte van de Chinese Muur is ongeveer 6-8 meter, hoewel dit varieert per sectie en dynastie die deze bouwde."
            }
        },
        {
            question: {
                en: "What were watchtowers used for on the Great Wall?",
                es: "¿Para qué se usaban las torres de vigilancia en la Gran Muralla?",
                de: "Wofür wurden die Wachtürme an der Chinesischen Mauer verwendet?",
                nl: "Waarvoor werden wachttorens op de Chinese Muur gebruikt?"
            },
            options: [
                {
                    en: "Storage of weapons and supplies",
                    es: "Almacenamiento de armas y suministros",
                    de: "Lagerung von Waffen und Vorräten",
                    nl: "Opslag van wapens en voorraden"
                },
                {
                    en: "Observation, signaling, and troop quarters",
                    es: "Observación, señalización y cuarteles de tropas",
                    de: "Beobachtung, Signalgebung und Truppenunterkünfte",
                    nl: "Observatie, seingeving en troepenkwartieren"
                },
                {
                    en: "Religious ceremonies",
                    es: "Ceremonias religiosas",
                    de: "Religiöse Zeremonien",
                    nl: "Religieuze ceremonies"
                },
                {
                    en: "Tax collection pts",
                    es: "Puntos de recaudación de impuestos",
                    de: "Steuereintreibungsstellen",
                    nl: "Belastinginningspunten"
                }
            ],
            correct: 1,
            explanation: {
                en: "Watchtowers served multiple purposes: observation of enemy movements, signaling through smoke or fire, storing weapons, and providing quarters for soldiers.",
                es: "Las torres de vigilancia servían múltiples propósitos: observación de movimientos enemigos, señalización con humo o fuego, almacenamiento de armas y alojamiento de soldados.",
                de: "Wachtürme dienten mehreren Zwecken: Beobachtung feindlicher Bewegungen, Signalgebung durch Rauch oder Feuer, Lagerung von Waffen und Unterbringung von Soldaten.",
                nl: "Wachttorens hadden meerdere doelen: observatie van vijandelijke bewegingen, seingeving via rook of vuur, opslag van wapens en verblijf voor soldaten."
            }
        },
        {
            question: {
                en: "Which geographic feature marks the eastern end of the Great Wall?",
                es: "¿Qué característica geográfica marca el extremo oriental de la Gran Muralla?",
                de: "Welches geografische Merkmal markiert das östliche Ende der Chinesischen Mauer?",
                nl: "Welk geografisch kenmerk markeert het oostelijke einde van de Chinese Muur?"
            },
            options: [
                {
                    en: "The Yellow River",
                    es: "El Río Amarillo",
                    de: "Der Gelbe Fluss",
                    nl: "De Gele Rivier"
                },
                {
                    en: "The Bohai Sea",
                    es: "El Mar de Bohai",
                    de: "Das Bohai-Meer",
                    nl: "De Bohai-zee"
                },
                {
                    en: "Mount Tai",
                    es: "Monte Tai",
                    de: "Berg Tai",
                    nl: "Berg Tai"
                },
                {
                    en: "The Gobi Desert",
                    es: "El Desierto de Gobi",
                    de: "Die Wüste Gobi",
                    nl: "De Gobi-woestijn"
                }
            ],
            correct: 1,
            explanation: {
                en: "The eastern end of the Great Wall is at Shanhaiguan, where it meets the Bohai Sea. This section is known as the 'Old Dragon's Head'.",
                es: "El extremo oriental de la Gran Muralla está en Shanhaiguan, donde se encuentra con el Mar de Bohai. Esta sección se conoce como la 'Cabeza del Viejo Dragón'.",
                de: "Das östliche Ende der Chinesischen Mauer befindet sich in Shanhaiguan, wo sie auf das Bohai-Meer trifft. Dieser Abschnitt ist als 'Kopf des Alten Drachen' bekannt.",
                nl: "Het oostelijke einde van de Chinese Muur ligt bij Shanhaiguan, waar deze de Bohai-zee ontmoet. Deze sectie staat bekend als het 'Hoofd van de Oude Draak'."
            }
        },
        {
            question: {
                en: "What was one of the major challenges in building the Great Wall?",
                es: "¿Cuál fue uno de los principales desafíos en la construcción de la Gran Muralla?",
                de: "Was war eine der größten Herausforderungen beim Bau der Chinesischen Mauer?",
                nl: "Wat was een van de grote uitdagingen bij de bouw van de Chinese Muur?"
            },
            options: [
                {
                    en: "Lack of building materials",
                    es: "Falta de materiales de construcción",
                    de: "Mangel an Baumaterialien",
                    nl: "Gebrek aan bouwmaterialen"
                },
                {
                    en: "The difficult mountainous terrain",
                    es: "El difícil terreno montañoso",
                    de: "Das schwierige Berggelände",
                    nl: "Het moeilijke bergachtige terrein"
                },
                {
                    en: "Frequent earthquakes",
                    es: "Terremotos frecuentes",
                    de: "Häufige Erdbeben",
                    nl: "Frequente aardbevingen"
                },
                {
                    en: "Opposition from local populations",
                    es: "Oposición de las poblaciones locales",
                    de: "Widerstand der lokalen Bevölkerung",
                    nl: "Verzet van lokale bevolking"
                }
            ],
            correct: 1,
            explanation: {
                en: "One of the major challenges was the difficult mountainous terrain, which made transportation of materials and construction extremely difficult. Workers had to navigate steep slopes and harsh conditions.",
                es: "Uno de los principales desafíos fue el difícil terreno montañoso, que hizo que el transporte de materiales y la construcción fueran extremadamente difíciles. Los trabajadores tenían que navegar por pendientes empinadas y condiciones duras.",
                de: "Eine der größten Herausforderungen war das schwierige Berggelände, das den Transport von Materialien und den Bau extrem erschwerte. Arbeiter mussten steile Hänge und harte Bedingungen bewältigen.",
                nl: "Een van de grote uitdagingen was het moeilijke bergachtige terrein, waardoor transport van materialen en constructie uiterst moeilijk waren. Werkers moesten steile hellingen en barre omstandigheden trotseren."
            }
        },
        {
            question: {
                en: "Approximately how many workers died during the construction of the Great Wall over its history?",
                es: "¿Aproximadamente cuántos trabajadores murieron durante la construcción de la Gran Muralla a lo largo de su historia?",
                de: "Wie viele Arbeiter starben ungefähr während des Baus der Chinesischen Mauer im Laufe ihrer Geschichte?",
                nl: "Ongeveer hoeveel arbeiders stierven tijdens de bouw van de Chinese Muur in de loop van de geschiedenis?"
            },
            options: [
                {
                    en: "Tens of thousands",
                    es: "Decenas de miles",
                    de: "Zehntausende",
                    nl: "Tienduizenden"
                },
                {
                    en: "Hundreds of thousands",
                    es: "Cientos de miles",
                    de: "Hunderttausende",
                    nl: "Honderdduizenden"
                },
                {
                    en: "Around one million",
                    es: "Alrededor de un millón",
                    de: "Etwa eine Million",
                    nl: "Ongeveer een miljoen"
                },
                {
                    en: "Several million",
                    es: "Varios millones",
                    de: "Mehrere Millionen",
                    nl: "Meerdere miljoenen"
                }
            ],
            correct: 2,
            explanation: {
                en: "It is estimated that around one million workers died during the construction of the Great Wall over its 2,000+ year history, from disease, accidents, and harsh working conditions.",
                es: "Se estima que alrededor de un millón de trabajadores murieron durante la construcción de la Gran Muralla a lo largo de su historia de más de 2.000 años, por enfermedades, accidentes y condiciones de trabajo duras.",
                de: "Es wird geschätzt, dass etwa eine Million Arbeiter während des Baus der Chinesischen Mauer in ihrer über 2.000-jährigen Geschichte durch Krankheiten, Unfälle und harte Arbeitsbedingungen starben.",
                nl: "Er wordt geschat dat ongeveer een miljoen arbeiders stierven tijdens de bouw van de Chinese Muur gedurende de meer dan 2.000 jaar geschiedenis, door ziekte, ongelukken en harde werkomstandigheden."
            }
        },
        {
            question: {
                en: "What is the most visited section of the Great Wall?",
                es: "¿Cuál es la sección más visitada de la Gran Muralla?",
                de: "Was ist der meistbesuchte Abschnitt der Chinesischen Mauer?",
                nl: "Wat is de meest bezochte sectie van de Chinese Muur?"
            },
            options: [
                {
                    en: "Mutianyu",
                    es: "Mutianyu",
                    de: "Mutianyu",
                    nl: "Mutianyu"
                },
                {
                    en: "Badaling",
                    es: "Badaling",
                    de: "Badaling",
                    nl: "Badaling"
                },
                {
                    en: "Jinshanling",
                    es: "Jinshanling",
                    de: "Jinshanling",
                    nl: "Jinshanling"
                },
                {
                    en: "Simatai",
                    es: "Simatai",
                    de: "Simatai",
                    nl: "Simatai"
                }
            ],
            correct: 1,
            explanation: {
                en: "Badaling is the most visited section of the Great Wall, located about 80 km northwest of Beijing. It was the first section opened to tourists in 1957.",
                es: "Badaling es la sección más visitada de la Gran Muralla, ubicada a unos 80 km al noroeste de Beijing. Fue la primera sección abierta a los turistas en 1957.",
                de: "Badaling ist der meistbesuchte Abschnitt der Chinesischen Mauer, etwa 80 km nordwestlich von Peking gelegen. Es war der erste Abschnitt, der 1957 für Touristen geöffnet wurde.",
                nl: "Badaling is de meest bezochte sectie van de Chinese Muur, gelegen ongeveer 80 km ten noordwesten van Beijing. Het was de eerste sectie die in 1957 werd geopend voor toeristen."
            }
        },
        {
            question: {
                en: "What was the main threat from the north that prompted the construction of the Great Wall?",
                es: "¿Cuál fue la principal amenaza del norte que impulsó la construcción de la Gran Muralla?",
                de: "Was war die Hauptbedrohung aus dem Norden, die den Bau der Chinesischen Mauer veranlasste?",
                nl: "Wat was de belangrijkste dreiging uit het noorden die de bouw van de Chinese Muur aanwakkerde?"
            },
            options: [
                {
                    en: "Korean invasions",
                    es: "Invasiones coreanas",
                    de: "Koreanische Invasionen",
                    nl: "Koreaanse invasies"
                },
                {
                    en: "Nomadic tribes and raiders",
                    es: "Tribus nómadas y atacantes",
                    de: "Nomadische Stämme und Plünderer",
                    nl: "Nomadische stammen en aanvallers"
                },
                {
                    en: "Russian expansion",
                    es: "Expansión rusa",
                    de: "Russische Expansion",
                    nl: "Russische expansie"
                },
                {
                    en: "Japanese pirates",
                    es: "Piratas japoneses",
                    de: "Japanische Piraten",
                    nl: "Japanse piraten"
                }
            ],
            correct: 1,
            explanation: {
                en: "The main threats were nomadic tribes from the northern steppes, particularly the Xiongnu, Mongols, and other nomadic groups who conducted raids into Chinese territory.",
                es: "Las principales amenazas eran las tribus nómadas de las estepas del norte, particularmente los Xiongnu, mongoles y otros grupos nómadas que realizaban incursiones en territorio chino.",
                de: "Die Hauptbedrohungen waren nomadische Stämme aus den nördlichen Steppen, insbesondere die Xiongnu, Mongolen und andere nomadische Gruppen, die Überfälle auf chinesisches Territorium durchführten.",
                nl: "De belangrijkste bedreigingen waren nomadische stammen uit de noordelijke steppen, met name de Xiongnu, Mongolen en andere nomadische groepen die invallen deden in Chinees gebied."
            }
        },
        {
            question: {
                en: "Which material was NOT commonly used in the construction of the Great Wall?",
                es: "¿Qué material NO se usaba comúnmente en la construcción de la Gran Muralla?",
                de: "Welches Material wurde NICHT häufig beim Bau der Chinesischen Mauer verwendet?",
                nl: "Welk materiaal werd NIET vaak gebruikt bij de bouw van de Chinese Muur?"
            },
            options: [
                {
                    en: "Brick",
                    es: "Ladrillo",
                    de: "Ziegel",
                    nl: "Baksteen"
                },
                {
                    en: "Stone",
                    es: "Piedra",
                    de: "Stein",
                    nl: "Steen"
                },
                {
                    en: "Rammed earth",
                    es: "Tierra apisonada",
                    de: "Gestampfte Erde",
                    nl: "Aangestampte aarde"
                },
                {
                    en: "Steel reinforcement",
                    es: "Refuerzo de acero",
                    de: "Stahlverstärkung",
                    nl: "Stalen versterking"
                }
            ],
            correct: 3,
            explanation: {
                en: "Steel reinforcement was not used in the construction of the Great Wall, as it was built centuries before modern steel production. Common materials included stone, brick, rammed earth, wood, and tamped earth.",
                es: "El refuerzo de acero no se usó en la construcción de la Gran Muralla, ya que fue construida siglos antes de la producción moderna de acero. Los materiales comunes incluían piedra, ladrillo, tierra apisonada, madera y tierra compactada.",
                de: "Stahlverstärkung wurde beim Bau der Chinesischen Mauer nicht verwendet, da sie Jahrhunderte vor der modernen Stahlproduktion errichtet wurde. Gängige Materialien waren Stein, Ziegel, gestampfte Erde, Holz und verdichtete Erde.",
                nl: "Stalen versterking werd niet gebruikt bij de bouw van de Chinese Muur, aangezien deze eeuwen voor de moderne staalproductie werd gebouwd. Gebruikelijke materialen waren steen, baksteen, aangestampte aarde, hout en vastgestampte aarde."
            }
        },
        {
            question: {
                en: "What is one of the Seven Wonders of the Medieval World that the Great Wall is part of?",
                es: "¿Cuál es una de las Siete Maravillas del Mundo Medieval de la que forma parte la Gran Muralla?",
                de: "Zu welchen der Sieben Weltwunder des Mittelalters gehört die Chinesische Mauer?",
                nl: "Van welke Zeven Wonderen van de Middeleeuwse Wereld maakt de Chinese Muur deel uit?"
            },
            options: [
                {
                    en: "It is not part of any such list",
                    es: "No forma parte de ninguna lista de ese tipo",
                    de: "Sie ist nicht Teil einer solchen Liste",
                    nl: "Het maakt geen deel uit van zo'n lijst"
                },
                {
                    en: "It is one of the New7Wonders of the World",
                    es: "Es una de las Nuevas 7 Maravillas del Mundo",
                    de: "Sie gehört zu den New7Wonders of the World",
                    nl: "Het is een van de New7Wonders of the World"
                },
                {
                    en: "It is one of the Ancient Seven Wonders",
                    es: "Es una de las Siete Maravillas Antiguas",
                    de: "Sie gehört zu den Sieben Weltwundern der Antike",
                    nl: "Het is een van de Zeven Oude Wereldwonderen"
                },
                {
                    en: "It was removed from the list",
                    es: "Fue eliminada de la lista",
                    de: "Sie wurde von der Liste gestrichen",
                    nl: "Het is van de lijst verwijderd"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall of China was voted as one of the New7Wonders of the World in 2007, following a worldwide poll that attracted millions of votes.",
                es: "La Gran Muralla China fue votada como una de las Nuevas 7 Maravillas del Mundo en 2007, tras una encuesta mundial que atrajo millones de votos.",
                de: "Die Chinesische Mauer wurde 2007 zu einem der New7Wonders of the World gewählt, nach einer weltweiten Abstimmung, die Millionen von Stimmen anzog.",
                nl: "De Chinese Muur werd in 2007 verkozen tot een van de New7Wonders of the World, na een wereldwijde poll die miljoenen stemmen trok."
            }
        }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
  if (typeof window !== 'undefined') {
    window.level1Data = level1;
  }
  return level1;
})();
