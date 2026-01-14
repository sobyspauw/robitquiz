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
                en: "How wide is the Great Wall on average?",
                es: "¿Cuán ancha es la Gran Muralla en promedio?",
                de: "Wie breit ist die Chinesische Mauer durchschnittlich?",
                nl: "Hoe breed is de Chinese Muur gemiddeld?"
            },
            options: [
                {
                    en: "2-3 meters",
                    es: "2-3 metros",
                    de: "2-3 Meter",
                    nl: "2-3 meter"
                },
                {
                    en: "4-5 meters",
                    es: "4-5 metros",
                    de: "4-5 Meter",
                    nl: "4-5 meter"
                },
                {
                    en: "10 meters",
                    es: "10 metros",
                    de: "10 Meter",
                    nl: "10 meter"
                },
                {
                    en: "1 meter",
                    es: "1 metro",
                    de: "1 Meter",
                    nl: "1 meter"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall is wide enough for 4-5 horses or soldiers to march side by side, typically 4-5 meters across at the top, allowing for troop movement and defense.",
                es: "La Gran Muralla es lo suficientemente ancha para que 4-5 caballos o soldados marchen uno al lado del otro, típicamente 4-5 metros de ancho en la parte superior, permitiendo movimiento de tropas y defensa.",
                de: "Die Chinesische Mauer ist breit genug für 4-5 Pferde oder Soldaten nebeneinander, typischerweise 4-5 Meter breit oben, was Truppenbewegung und Verteidigung ermöglicht.",
                nl: "De Chinese Muur is breed genoeg voor 4-5 paarden of soldaten om naast elkaar te marcheren, typisch 4-5 meter breed bovenaan, waardoor troepenbeweging en verdediging mogelijk is."
            }
        },
        {
            question: {
                en: "Which country is the Great Wall located in?",
                es: "¿En qué país se encuentra la Gran Muralla?",
                de: "In welchem Land befindet sich die Chinesische Mauer?",
                nl: "In welk land bevindt zich de Chinese Muur?"
            },
            options: [
                {
                    en: "Japan",
                    es: "Japón",
                    de: "Japan",
                    nl: "Japan"
                },
                {
                    en: "China",
                    es: "China",
                    de: "China",
                    nl: "China"
                },
                {
                    en: "India",
                    es: "India",
                    de: "Indien",
                    nl: "India"
                },
                {
                    en: "Mongolia",
                    es: "Mongolia",
                    de: "Mongolei",
                    nl: "Mongolië"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall is located in China, running across northern China from east to west. It's one of China's most famous landmarks and a symbol of Chinese civilization.",
                es: "La Gran Muralla está ubicada en China, atravesando el norte de China de este a oeste. Es uno de los monumentos más famosos de China y un símbolo de la civilización china.",
                de: "Die Chinesische Mauer befindet sich in China und verläuft durch Nordchina von Ost nach West. Sie ist eines der bekanntesten Wahrzeichen Chinas und ein Symbol der chinesischen Zivilisation.",
                nl: "De Chinese Muur bevindt zich in China en loopt door noordelijk China van oost naar west. Het is een van China's beroemdste bezienswaardigheden en een symbool van de Chinese beschaving."
            }
        },
        {
            question: {
                en: "What is sticky rice mortar?",
                es: "¿Qué es el mortero de arroz glutinoso?",
                de: "Was ist Klebreis-Mörtel?",
                nl: "Wat is kleverige rijstmortel?"
            },
            options: [
                {
                    en: "A type of food",
                    es: "Un tipo de comida",
                    de: "Eine Art Nahrung",
                    nl: "Een soort voedsel"
                },
                {
                    en: "A binding material used in construction",
                    es: "Un material de unión usado en construcción",
                    de: "Ein Bindemittel im Bauwesen",
                    nl: "Een bindmiddel gebruikt in de bouw"
                },
                {
                    en: "A paint color",
                    es: "Un color de pintura",
                    de: "Eine Farbe",
                    nl: "Een verfkleur"
                },
                {
                    en: "A weapon",
                    es: "Un arma",
                    de: "Eine Waffe",
                    nl: "Een wapen"
                }
            ],
            correct: 1,
            explanation: {
                en: "Sticky rice mortar was a binding material made from rice paste mixed with lime, used in the Ming Dynasty to hold bricks together. It's incredibly strong and durable.",
                es: "El mortero de arroz glutinoso era un material de unión hecho de pasta de arroz mezclada con cal, usado en la Dinastía Ming para unir ladrillos. Es increíblemente fuerte y duradero.",
                de: "Klebreis-Mörtel war ein Bindemittel aus Reispaste gemischt mit Kalk, das in der Ming-Dynastie verwendet wurde, um Ziegel zusammenzuhalten. Es ist unglaublich stark und langlebig.",
                nl: "Kleverige rijstmortel was een bindmiddel gemaakt van rijstpasta gemengd met kalk, gebruikt in de Ming-dynastie om bakstenen samen te houden. Het is ongelooflijk sterk en duurzaam."
            }
        },
        {
            question: {
                en: "Where does the Great Wall start in the east?",
                es: "¿Dónde comienza la Gran Muralla en el este?",
                de: "Wo beginnt die Chinesische Mauer im Osten?",
                nl: "Waar begint de Chinese Muur in het oosten?"
            },
            options: [
                {
                    en: "Shanghai",
                    es: "Shanghái",
                    de: "Shanghai",
                    nl: "Shanghai"
                },
                {
                    en: "Shanhaiguan at the Bohai Sea",
                    es: "Shanhaiguan en el Mar de Bohai",
                    de: "Shanhaiguan am Bohai-Meer",
                    nl: "Shanhaiguan bij de Bohai-zee"
                },
                {
                    en: "Hong Kong",
                    es: "Hong Kong",
                    de: "Hongkong",
                    nl: "Hong Kong"
                },
                {
                    en: "Taiwan",
                    es: "Taiwán",
                    de: "Taiwan",
                    nl: "Taiwan"
                }
            ],
            correct: 1,
            explanation: {
                en: "The eastern end of the Great Wall is at Shanhaiguan, where it meets the Bohai Sea. This section is called 'Old Dragon's Head' as it extends into the water.",
                es: "El extremo oriental de la Gran Muralla está en Shanhaiguan, donde se encuentra con el Mar de Bohai. Esta sección se llama 'Cabeza del Viejo Dragón' ya que se extiende hacia el agua.",
                de: "Das östliche Ende der Chinesischen Mauer liegt in Shanhaiguan, wo sie auf das Bohai-Meer trifft. Dieser Abschnitt heißt 'Kopf des Alten Drachen', da er ins Wasser reicht.",
                nl: "Het oostelijke einde van de Chinese Muur ligt bij Shanhaiguan, waar deze de Bohai-zee ontmoet. Deze sectie wordt 'Hoofd van de Oude Draak' genoemd omdat deze het water in reikt."
            }
        },
        {
            question: {
                en: "What does the Chinese name 'Changcheng' mean?",
                es: "¿Qué significa el nombre chino 'Changcheng'?",
                de: "Was bedeutet der chinesische Name 'Changcheng'?",
                nl: "Wat betekent de Chinese naam 'Changcheng'?"
            },
            options: [
                {
                    en: "Strong Wall",
                    es: "Muro Fuerte",
                    de: "Starke Mauer",
                    nl: "Sterke Muur"
                },
                {
                    en: "Long Wall",
                    es: "Muro Largo",
                    de: "Lange Mauer",
                    nl: "Lange Muur"
                },
                {
                    en: "Great Wall",
                    es: "Gran Muralla",
                    de: "Große Mauer",
                    nl: "Grote Muur"
                },
                {
                    en: "Stone Wall",
                    es: "Muro de Piedra",
                    de: "Steinmauer",
                    nl: "Stenen Muur"
                }
            ],
            correct: 1,
            explanation: {
                en: "Changcheng (长城) literally means 'Long Wall' in Chinese. It's called this because of its enormous length stretching across northern China.",
                es: "Changcheng (长城) literalmente significa 'Muro Largo' en chino. Se llama así debido a su enorme longitud que se extiende a través del norte de China.",
                de: "Changcheng (长城) bedeutet wörtlich 'Lange Mauer' auf Chinesisch. Sie wird so genannt wegen ihrer enormen Länge, die sich durch Nordchina erstreckt.",
                nl: "Changcheng (长城) betekent letterlijk 'Lange Muur' in het Chinees. Het wordt zo genoemd vanwege zijn enorme lengte die zich uitstrekt over noordelijk China."
            }
        },
        {
            question: {
                en: "Why were watchtowers built along the Great Wall?",
                es: "¿Por qué se construyeron torres de vigilancia a lo largo de la Gran Muralla?",
                de: "Warum wurden entlang der Chinesischen Mauer Wachtürme gebaut?",
                nl: "Waarom werden wachttorens gebouwd langs de Chinese Muur?"
            },
            options: [
                {
                    en: "For storage only",
                    es: "Solo para almacenamiento",
                    de: "Nur zur Lagerung",
                    nl: "Alleen voor opslag"
                },
                {
                    en: "For observation and signaling",
                    es: "Para observación y señalización",
                    de: "Zur Beobachtung und Signalgebung",
                    nl: "Voor observatie en seingeving"
                },
                {
                    en: "As tourist attractions",
                    es: "Como atracciones turísticas",
                    de: "Als Touristenattraktionen",
                    nl: "Als toeristische attracties"
                },
                {
                    en: "For ceremonies",
                    es: "Para ceremonias",
                    de: "Für Zeremonien",
                    nl: "Voor ceremonies"
                }
            ],
            correct: 1,
            explanation: {
                en: "Watchtowers were built for observation and signaling. Soldiers could watch for enemies and send smoke or fire signals to warn other towers of approaching danger.",
                es: "Las torres de vigilancia se construyeron para observación y señalización. Los soldados podían vigilar enemigos y enviar señales de humo o fuego para advertir a otras torres del peligro que se aproximaba.",
                de: "Wachtürme wurden zur Beobachtung und Signalgebung gebaut. Soldaten konnten nach Feinden Ausschau halten und Rauch- oder Feuersignale senden, um andere Türme vor nahender Gefahr zu warnen.",
                nl: "Wachttorens werden gebouwd voor observatie en seingeving. Soldaten konden uitkijken naar vijanden en rook- of vuursignalen sturen om andere torens te waarschuwen voor naderend gevaar."
            }
        },
        {
            question: {
                en: "What is the Badaling section famous for?",
                es: "¿Por qué es famosa la sección de Badaling?",
                de: "Wofür ist der Badaling-Abschnitt berühmt?",
                nl: "Waar is de Badaling-sectie beroemd om?"
            },
            options: [
                {
                    en: "Being the oldest section",
                    es: "Ser la sección más antigua",
                    de: "Der älteste Abschnitt zu sein",
                    nl: "De oudste sectie zijn"
                },
                {
                    en: "Being the most visited tourist section",
                    es: "Ser la sección turística más visitada",
                    de: "Der meistbesuchte Touristenabschnitt zu sein",
                    nl: "De meest bezochte toeristische sectie zijn"
                },
                {
                    en: "Being the longest section",
                    es: "Ser la sección más larga",
                    de: "Der längste Abschnitt zu sein",
                    nl: "De langste sectie zijn"
                },
                {
                    en: "Being the tallest section",
                    es: "Ser la sección más alta",
                    de: "Der höchste Abschnitt zu sein",
                    nl: "De hoogste sectie zijn"
                }
            ],
            correct: 1,
            explanation: {
                en: "Badaling is the most visited section of the Great Wall. It's well-preserved, easily accessible from Beijing, and was the first section opened to tourists in 1957.",
                es: "Badaling es la sección más visitada de la Gran Muralla. Está bien conservada, es fácilmente accesible desde Beijing y fue la primera sección abierta a turistas en 1957.",
                de: "Badaling ist der meistbesuchte Abschnitt der Chinesischen Mauer. Er ist gut erhalten, leicht von Peking aus erreichbar und war 1957 der erste Abschnitt, der für Touristen geöffnet wurde.",
                nl: "Badaling is de meest bezochte sectie van de Chinese Muur. Het is goed bewaard, gemakkelijk bereikbaar vanuit Beijing en was de eerste sectie die in 1957 voor toeristen werd geopend."
            }
        },
        {
            question: {
                en: "What modern honor did the Great Wall receive in 2007?",
                es: "¿Qué honor moderno recibió la Gran Muralla en 2007?",
                de: "Welche moderne Ehre erhielt die Chinesische Mauer 2007?",
                de: "Welke moderne eer ontving de Chinese Muur in 2007?",
                nl: "Welke moderne eer ontving de Chinese Muur in 2007?"
            },
            options: [
                {
                    en: "World's longest building",
                    es: "Edificio más largo del mundo",
                    de: "Längstes Gebäude der Welt",
                    nl: "Langste gebouw ter wereld"
                },
                {
                    en: "One of the New7Wonders of the World",
                    es: "Una de las Nuevas 7 Maravillas del Mundo",
                    de: "Eines der New7Wonders of the World",
                    nl: "Een van de New7Wonders of the World"
                },
                {
                    en: "Best tourist destination",
                    es: "Mejor destino turístico",
                    de: "Bestes Reiseziel",
                    nl: "Beste toeristische bestemming"
                },
                {
                    en: "Oldest structure award",
                    es: "Premio a la estructura más antigua",
                    de: "Preis für älteste Struktur",
                    nl: "Oudste structuur prijs"
                }
            ],
            correct: 1,
            explanation: {
                en: "In 2007, the Great Wall was voted as one of the New7Wonders of the World through a global poll. This honored its significance as an architectural and cultural masterpiece.",
                es: "En 2007, la Gran Muralla fue votada como una de las Nuevas 7 Maravillas del Mundo mediante una encuesta global. Esto honró su importancia como obra maestra arquitectónica y cultural.",
                de: "2007 wurde die Chinesische Mauer durch eine weltweite Abstimmung zu einem der New7Wonders of the World gewählt. Dies ehrte ihre Bedeutung als architektonisches und kulturelles Meisterwerk.",
                nl: "In 2007 werd de Chinese Muur verkozen tot een van de New7Wonders of the World via een wereldwijde peiling. Dit eert het belang als architectonisch en cultureel meesterwerk."
            }
        },
        {
            question: {
                en: "How did soldiers communicate danger along the wall?",
                es: "¿Cómo comunicaban los soldados el peligro a lo largo del muro?",
                de: "Wie kommunizierten Soldaten Gefahr entlang der Mauer?",
                nl: "Hoe communiceerden soldaten gevaar langs de muur?"
            },
            options: [
                {
                    en: "By telephone",
                    es: "Por teléfono",
                    de: "Per Telefon",
                    nl: "Per telefoon"
                },
                {
                    en: "By smoke signals during day and fire at night",
                    es: "Por señales de humo durante el día y fuego por la noche",
                    de: "Durch Rauchsignale tagsüber und Feuer nachts",
                    nl: "Via rooksignalen overdag en vuur 's nachts"
                },
                {
                    en: "By shouting",
                    es: "Gritando",
                    de: "Durch Rufen",
                    nl: "Door te schreeuwen"
                },
                {
                    en: "By running messages",
                    es: "Corriendo mensajes",
                    de: "Durch Überbringen von Nachrichten",
                    nl: "Door boodschappen te rennen"
                }
            ],
            correct: 1,
            explanation: {
                en: "Soldiers used smoke signals during the day and fire signals at night to communicate danger. This beacon system could quickly relay warnings across hundreds of kilometers.",
                es: "Los soldados usaban señales de humo durante el día y señales de fuego por la noche para comunicar peligro. Este sistema de señales podía transmitir rápidamente advertencias a través de cientos de kilómetros.",
                de: "Soldaten verwendeten Rauchsignale tagsüber und Feuersignale nachts, um Gefahr zu kommunizieren. Dieses Leuchtfeuersystem konnte schnell Warnungen über Hunderte von Kilometern weiterleiten.",
                nl: "Soldaten gebruikten rooksignalen overdag en vuursignalen 's nachts om gevaar te communiceren. Dit bakensysteem kon snel waarschuwingen doorgeven over honderden kilometers."
            }
        },
        {
            question: {
                en: "What is the Mutianyu section known for?",
                es: "¿Por qué es conocida la sección de Mutianyu?",
                de: "Wofür ist der Mutianyu-Abschnitt bekannt?",
                nl: "Waar is de Mutianyu-sectie bekend om?"
            },
            options: [
                {
                    en: "Its flat terrain",
                    es: "Su terreno plano",
                    de: "Sein flaches Gelände",
                    nl: "Zijn vlak terrein"
                },
                {
                    en: "Its scenic beauty and well-preserved state",
                    es: "Su belleza escénica y buen estado de conservación",
                    de: "Seine landschaftliche Schönheit und gut erhaltenen Zustand",
                    nl: "Zijn schilderachtige schoonheid en goed bewaarde staat"
                },
                {
                    en: "Being the newest section",
                    es: "Ser la sección más nueva",
                    de: "Der neueste Abschnitt zu sein",
                    nl: "De nieuwste sectie zijn"
                },
                {
                    en: "Its underground tunnels",
                    es: "Sus túneles subterráneos",
                    de: "Seine unterirdischen Tunnel",
                    nl: "Zijn ondergrondse tunnels"
                }
            ],
            correct: 1,
            explanation: {
                en: "Mutianyu is known for its scenic beauty and excellent preservation. It's surrounded by forests and offers stunning views, making it a popular but less crowded alternative to Badaling.",
                es: "Mutianyu es conocida por su belleza escénica y excelente preservación. Está rodeada de bosques y ofrece vistas impresionantes, convirtiéndola en una alternativa popular pero menos concurrida que Badaling.",
                de: "Mutianyu ist bekannt für seine landschaftliche Schönheit und hervorragende Erhaltung. Es ist von Wäldern umgeben und bietet atemberaubende Aussichten, was es zu einer beliebten, aber weniger überfüllten Alternative zu Badaling macht.",
                nl: "Mutianyu is bekend om zijn schilderachtige schoonheid en uitstekende bewaring. Het is omgeven door bossen en biedt prachtige uitzichten, waardoor het een populair maar minder druk alternatief voor Badaling is."
            }
        },
        {
            question: {
                en: "What enemies did the Great Wall primarily defend against?",
                es: "¿Contra qué enemigos defendía principalmente la Gran Muralla?",
                de: "Gegen welche Feinde verteidigte die Chinesische Mauer hauptsächlich?",
                nl: "Tegen welke vijanden verdedigde de Chinese Muur voornamelijk?"
            },
            options: [
                {
                    en: "European invaders",
                    es: "Invasores europeos",
                    de: "Europäische Eindringlinge",
                    nl: "Europese indringers"
                },
                {
                    en: "Nomadic tribes from the north",
                    es: "Tribus nómadas del norte",
                    de: "Nomadische Stämme aus dem Norden",
                    nl: "Nomadische stammen uit het noorden"
                },
                {
                    en: "Sea pirates",
                    es: "Piratas marinos",
                    de: "Seepiraten",
                    nl: "Zeepiraten"
                },
                {
                    en: "Wild animals",
                    es: "Animales salvajes",
                    de: "Wilde Tiere",
                    nl: "Wilde dieren"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall was built primarily to defend against nomadic tribes from the northern steppes, including the Xiongnu, Mongols, and other groups who raided Chinese territories.",
                es: "La Gran Muralla se construyó principalmente para defenderse contra tribus nómadas de las estepas del norte, incluyendo los Xiongnu, mongoles y otros grupos que atacaban territorios chinos.",
                de: "Die Chinesische Mauer wurde hauptsächlich zur Verteidigung gegen nomadische Stämme aus den nördlichen Steppen gebaut, einschließlich der Xiongnu, Mongolen und anderer Gruppen, die chinesische Gebiete überfielen.",
                nl: "De Chinese Muur werd voornamelijk gebouwd om te verdedigen tegen nomadische stammen uit de noordelijke steppen, waaronder de Xiongnu, Mongolen en andere groepen die Chinese gebieden overvielen."
            }
        },
        {
            question: {
                en: "How many people approximately worked on building the Great Wall?",
                es: "¿Aproximadamente cuántas personas trabajaron en la construcción de la Gran Muralla?",
                de: "Wie viele Menschen arbeiteten ungefähr am Bau der Chinesischen Mauer?",
                nl: "Hoeveel mensen werkten ongeveer aan de bouw van de Chinese Muur?"
            },
            options: [
                {
                    en: "Thousands",
                    es: "Miles",
                    de: "Tausende",
                    nl: "Duizenden"
                },
                {
                    en: "Millions over the centuries",
                    es: "Millones a lo largo de los siglos",
                    de: "Millionen über die Jahrhunderte",
                    nl: "Miljoenen door de eeuwen heen"
                },
                {
                    en: "Hundreds",
                    es: "Cientos",
                    de: "Hunderte",
                    nl: "Honderden"
                },
                {
                    en: "Just one person",
                    es: "Solo una persona",
                    de: "Nur eine Person",
                    nl: "Slechts één persoon"
                }
            ],
            correct: 1,
            explanation: {
                en: "Millions of workers built the Great Wall over more than 2,000 years. These included soldiers, peasants, and prisoners. Many lost their lives during construction.",
                es: "Millones de trabajadores construyeron la Gran Muralla durante más de 2.000 años. Estos incluían soldados, campesinos y prisioneros. Muchos perdieron sus vidas durante la construcción.",
                de: "Millionen von Arbeitern bauten die Chinesische Mauer über mehr als 2.000 Jahre. Dazu gehörten Soldaten, Bauern und Gefangene. Viele verloren ihr Leben während des Baus.",
                nl: "Miljoenen werkers bouwden de Chinese Muur gedurende meer dan 2.000 jaar. Deze omvatten soldaten, boeren en gevangenen. Velen verloren hun leven tijdens de constructie."
            }
        },
        {
            question: {
                en: "Why is the wall important to Chinese culture?",
                es: "¿Por qué es importante el muro para la cultura china?",
                de: "Warum ist die Mauer für die chinesische Kultur wichtig?",
                nl: "Waarom is de muur belangrijk voor de Chinese cultuur?"
            },
            options: [
                {
                    en: "It's just a tourist attraction",
                    es: "Es solo una atracción turística",
                    de: "Sie ist nur eine Touristenattraktion",
                    nl: "Het is alleen een toeristische attractie"
                },
                {
                    en: "It symbolizes Chinese strength and perseverance",
                    es: "Simboliza la fuerza y perseverancia china",
                    de: "Sie symbolisiert chinesische Stärke und Ausdauer",
                    nl: "Het symboliseert Chinese kracht en doorzettingsvermogen"
                },
                {
                    en: "It separates China from other countries",
                    es: "Separa China de otros países",
                    de: "Sie trennt China von anderen Ländern",
                    nl: "Het scheidt China van andere landen"
                },
                {
                    en: "It has no cultural importance",
                    es: "No tiene importancia cultural",
                    de: "Sie hat keine kulturelle Bedeutung",
                    nl: "Het heeft geen cultureel belang"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall is a powerful symbol of Chinese strength, perseverance, and ingenuity. It represents the determination of the Chinese people and is central to national identity.",
                es: "La Gran Muralla es un símbolo poderoso de la fuerza, perseverancia e ingenio chino. Representa la determinación del pueblo chino y es central para la identidad nacional.",
                de: "Die Chinesische Mauer ist ein mächtiges Symbol chinesischer Stärke, Ausdauer und Genialität. Sie repräsentiert die Entschlossenheit des chinesischen Volkes und ist zentral für die nationale Identität.",
                nl: "De Chinese Muur is een krachtig symbool van Chinese kracht, doorzettingsvermogen en vindingrijkheid. Het vertegenwoordigt de vastberadenheid van het Chinese volk en is centraal in de nationale identiteit."
            }
        },
        {
            question: {
                en: "What does 'Old Dragon's Head' refer to?",
                es: "¿A qué se refiere 'Cabeza del Viejo Dragón'?",
                de: "Worauf bezieht sich 'Kopf des Alten Drachen'?",
                nl: "Waar verwijst 'Hoofd van de Oude Draak' naar?"
            },
            options: [
                {
                    en: "A statue on the wall",
                    es: "Una estatua en el muro",
                    de: "Eine Statue auf der Mauer",
                    nl: "Een standbeeld op de muur"
                },
                {
                    en: "The eastern end where the wall meets the sea",
                    es: "El extremo oriental donde el muro se encuentra con el mar",
                    de: "Das östliche Ende, wo die Mauer auf das Meer trifft",
                    nl: "Het oostelijke einde waar de muur de zee ontmoet"
                },
                {
                    en: "A mountain peak",
                    es: "Un pico de montaña",
                    de: "Ein Berggipfel",
                    nl: "Een bergtop"
                },
                {
                    en: "The main gate",
                    es: "La puerta principal",
                    de: "Das Haupttor",
                    nl: "De hoofdpoort"
                }
            ],
            correct: 1,
            explanation: {
                en: "Old Dragon's Head (Laolongtou) is the eastern terminus of the Great Wall at Shanhaiguan, where the wall extends into the Bohai Sea like a dragon drinking water.",
                es: "Cabeza del Viejo Dragón (Laolongtou) es el término oriental de la Gran Muralla en Shanhaiguan, donde el muro se extiende hacia el Mar de Bohai como un dragón bebiendo agua.",
                de: "Kopf des Alten Drachen (Laolongtou) ist der östliche Endpunkt der Chinesischen Mauer in Shanhaiguan, wo die Mauer wie ein Drache, der Wasser trinkt, ins Bohai-Meer reicht.",
                nl: "Hoofd van de Oude Draak (Laolongtou) is het oostelijke eindpunt van de Chinese Muur bij Shanhaiguan, waar de muur de Bohai-zee in reikt als een draak die water drinkt."
            }
        },
        {
            question: {
                en: "Which pass was the most important for protecting Beijing?",
                es: "¿Qué paso era el más importante para proteger Beijing?",
                de: "Welcher Pass war am wichtigsten zum Schutz Pekings?",
                nl: "Welke pas was het belangrijkst voor de bescherming van Beijing?"
            },
            options: [
                {
                    en: "Badaling Pass",
                    es: "Paso de Badaling",
                    de: "Badaling-Pass",
                    nl: "Badaling-pas"
                },
                {
                    en: "Juyongguan Pass",
                    es: "Paso de Juyongguan",
                    de: "Juyongguan-Pass",
                    nl: "Juyongguan-pas"
                },
                {
                    en: "Shanhaiguan Pass",
                    es: "Paso de Shanhaiguan",
                    de: "Shanhaiguan-Pass",
                    nl: "Shanhaiguan-pas"
                },
                {
                    en: "Jiayuguan Pass",
                    es: "Paso de Jiayuguan",
                    de: "Jiayuguan-Pass",
                    nl: "Jiayuguan-pas"
                }
            ],
            correct: 1,
            explanation: {
                en: "Juyongguan Pass was one of the most strategically important, located only 50 km from Beijing. It controlled the main northern approach to the capital.",
                es: "El Paso de Juyongguan era uno de los más estratégicamente importantes, ubicado a solo 50 km de Beijing. Controlaba el principal acceso norte a la capital.",
                de: "Der Juyongguan-Pass war einer der strategisch wichtigsten, nur 50 km von Peking entfernt. Er kontrollierte den nördlichen Hauptzugang zur Hauptstadt.",
                nl: "De Juyongguan-pas was een van de strategisch belangrijkste, gelegen op slechts 50 km van Beijing. Het controleerde de belangrijkste noordelijke toegang tot de hoofdstad."
            }
        },
        {
            question: {
                en: "What is the western end of the Great Wall called?",
                es: "¿Cómo se llama el extremo occidental de la Gran Muralla?",
                de: "Wie heißt das westliche Ende der Chinesischen Mauer?",
                nl: "Hoe heet het westelijke einde van de Chinese Muur?"
            },
            options: [
                {
                    en: "Old Dragon's Tail",
                    es: "Cola del Viejo Dragón",
                    de: "Schwanz des Alten Drachen",
                    nl: "Staart van de Oude Draak"
                },
                {
                    en: "Jiayuguan Pass",
                    es: "Paso de Jiayuguan",
                    de: "Jiayuguan-Pass",
                    nl: "Jiayuguan-pas"
                },
                {
                    en: "Western Gate",
                    es: "Puerta Occidental",
                    de: "Westliches Tor",
                    nl: "Westelijke Poort"
                },
                {
                    en: "Desert End",
                    es: "Fin del Desierto",
                    de: "Wüstenende",
                    nl: "Woestijneinde"
                }
            ],
            correct: 1,
            explanation: {
                en: "Jiayuguan Pass in Gansu Province is the western terminus of the Ming Great Wall. It's called the 'First Pass Under Heaven' and marks the edge of ancient China.",
                es: "El Paso de Jiayuguan en la provincia de Gansu es el término occidental de la Gran Muralla Ming. Se llama el 'Primer Paso Bajo el Cielo' y marca el borde de la China antigua.",
                de: "Der Jiayuguan-Pass in der Provinz Gansu ist der westliche Endpunkt der Ming-Chinesischen Mauer. Er wird 'Erster Pass Unter dem Himmel' genannt und markiert die Grenze des alten China.",
                nl: "De Jiayuguan-pas in de provincie Gansu is het westelijke eindpunt van de Ming-Chinese Muur. Het wordt de 'Eerste Pas Onder de Hemel' genoemd en markeert de rand van het oude China."
            }
        },
        {
            question: {
                en: "How do tourists typically visit the Great Wall today?",
                es: "¿Cómo visitan típicamente los turistas la Gran Muralla hoy?",
                de: "Wie besuchen Touristen die Chinesische Mauer heute typischerweise?",
                nl: "Hoe bezoeken toeristen de Chinese Muur vandaag typisch?"
            },
            options: [
                {
                    en: "Only by helicopter",
                    es: "Solo en helicóptero",
                    de: "Nur per Helikopter",
                    nl: "Alleen per helikopter"
                },
                {
                    en: "By bus or car to restored sections",
                    es: "En autobús o coche a secciones restauradas",
                    de: "Mit Bus oder Auto zu restaurierten Abschnitten",
                    nl: "Per bus of auto naar gerestaureerde secties"
                },
                {
                    en: "By swimming",
                    es: "Nadando",
                    de: "Durch Schwimmen",
                    nl: "Door te zwemmen"
                },
                {
                    en: "It's closed to visitors",
                    es: "Está cerrada a los visitantes",
                    de: "Sie ist für Besucher geschlossen",
                    nl: "Het is gesloten voor bezoekers"
                }
            ],
            correct: 1,
            explanation: {
                en: "Today, tourists visit restored sections of the Great Wall by bus or car from Beijing. Popular sections like Badaling and Mutianyu have visitor facilities and are well-maintained.",
                es: "Hoy, los turistas visitan secciones restauradas de la Gran Muralla en autobús o coche desde Beijing. Secciones populares como Badaling y Mutianyu tienen instalaciones para visitantes y están bien mantenidas.",
                de: "Heute besuchen Touristen restaurierte Abschnitte der Chinesischen Mauer mit Bus oder Auto von Peking aus. Beliebte Abschnitte wie Badaling und Mutianyu haben Besuchereinrichtungen und sind gut gepflegt.",
                nl: "Vandaag bezoeken toeristen gerestaureerde secties van de Chinese Muur per bus of auto vanuit Beijing. Populaire secties zoals Badaling en Mutianyu hebben bezoekersvoorzieningen en zijn goed onderhouden."
            }
        },
        {
            question: {
                en: "What makes the Great Wall structurally impressive?",
                es: "¿Qué hace que la Gran Muralla sea estructuralmente impresionante?",
                de: "Was macht die Chinesische Mauer strukturell beeindruckend?",
                nl: "Wat maakt de Chinese Muur structureel indrukwekkend?"
            },
            options: [
                {
                    en: "Its modern design",
                    es: "Su diseño moderno",
                    de: "Ihr modernes Design",
                    nl: "Zijn moderne ontwerp"
                },
                {
                    en: "It crosses diverse terrain including mountains and deserts",
                    es: "Cruza terrenos diversos incluyendo montañas y desiertos",
                    de: "Sie durchquert vielfältiges Gelände einschließlich Berge und Wüsten",
                    nl: "Het doorkruist divers terrein inclusief bergen en woestijnen"
                },
                {
                    en: "Its bright colors",
                    es: "Sus colores brillantes",
                    de: "Ihre hellen Farben",
                    nl: "Zijn felle kleuren"
                },
                {
                    en: "Its underground sections",
                    es: "Sus secciones subterráneas",
                    de: "Ihre unterirdischen Abschnitte",
                    nl: "Zijn ondergrondse secties"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall is impressive because it crosses incredibly diverse terrain - steep mountains, flat plains, and harsh deserts - adapting its construction to each environment.",
                es: "La Gran Muralla es impresionante porque cruza terrenos increíblemente diversos - montañas empinadas, llanuras planas y duros desiertos - adaptando su construcción a cada entorno.",
                de: "Die Chinesische Mauer ist beeindruckend, weil sie unglaublich vielfältiges Gelände durchquert - steile Berge, flache Ebenen und raue Wüsten - und ihre Konstruktion an jede Umgebung anpasst.",
                nl: "De Chinese Muur is indrukwekkend omdat deze ongelooflijk divers terrein doorkruist - steile bergen, vlakke vlakten en ruwe woestijnen - waarbij de constructie aan elke omgeving wordt aangepast."
            }
        },
        {
            question: {
                en: "What is one way the Great Wall has been damaged over time?",
                es: "¿Cuál es una forma en que la Gran Muralla ha sido dañada con el tiempo?",
                de: "Was ist eine Art, wie die Chinesische Mauer im Laufe der Zeit beschädigt wurde?",
                nl: "Wat is een manier waarop de Chinese Muur in de loop der tijd beschadigd is?"
            },
            options: [
                {
                    en: "Alien invasions",
                    es: "Invasiones alienígenas",
                    de: "Außerirdische Invasionen",
                    nl: "Buitenaardse invasies"
                },
                {
                    en: "Weather erosion and human activity",
                    es: "Erosión climática y actividad humana",
                    de: "Witterungserosion und menschliche Aktivität",
                    nl: "Weerserosie en menselijke activiteit"
                },
                {
                    en: "Earthquakes only",
                    es: "Solo terremotos",
                    de: "Nur Erdbeben",
                    nl: "Alleen aardbevingen"
                },
                {
                    en: "It has never been damaged",
                    es: "Nunca ha sido dañada",
                    de: "Sie wurde nie beschädigt",
                    nl: "Het is nooit beschadigd"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall has been damaged by natural weather erosion, earthquakes, and human activity including vandalism and using wall materials for other construction projects.",
                es: "La Gran Muralla ha sido dañada por erosión climática natural, terremotos y actividad humana incluyendo vandalismo y usar materiales del muro para otros proyectos de construcción.",
                de: "Die Chinesische Mauer wurde durch natürliche Witterungserosion, Erdbeben und menschliche Aktivitäten einschließlich Vandalismus und die Verwendung von Mauermaterialien für andere Bauprojekte beschädigt.",
                nl: "De Chinese Muur is beschadigd door natuurlijke weerserosie, aardbevingen en menselijke activiteit inclusief vandalisme en het gebruik van muurmaterialen voor andere bouwprojecten."
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
