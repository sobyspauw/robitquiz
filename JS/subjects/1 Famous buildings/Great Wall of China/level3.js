(function() {
    const level3 = {
    name: {
      en: "Architecture",
      es: "Arquitectura",
      de: "Architektur",
      nl: "Architectuur"
},
    questions: [
        {
            question: {
                en: "What architectural feature was built at regular intervals along the wall for defense?",
                es: "¿Qué característica arquitectónica se construyó a intervalos regulares a lo largo del muro para defensa?",
                de: "Welches architektonische Merkmal wurde in regelmäßigen Abständen entlang der Mauer zur Verteidigung gebaut?",
                nl: "Welk architectonisch kenmerk werd op regelmatige afstanden langs de muur gebouwd voor verdediging?"
            },
            options: [
                {
                    en: "Watchtowers",
                    es: "Torres de vigilancia",
                    de: "Wachtürme",
                    nl: "Wachttorens"
                },
                {
                    en: "Moats",
                    es: "Fosos",
                    de: "Wassergräben",
                    nl: "Grachten"
                },
                {
                    en: "Drawbridges",
                    es: "Puentes levadizos",
                    de: "Zugbrücken",
                    nl: "Ophaalbrug"
                },
                {
                    en: "Trebuchets",
                    es: "Trebuchets",
                    de: "Trebuchets",
                    nl: "Trebuchets"
                }
            ],
            correct: 0,
            explanation: {
                en: "Watchtowers were built at regular intervals (typically every few hundred meters) for observation, signaling, troop accommodation, and storage of weapons and supplies.",
                es: "Las torres de vigilancia se construyeron a intervalos regulares (típicamente cada pocos cientos de metros) para observación, señalización, alojamiento de tropas y almacenamiento de armas y suministros.",
                de: "Wachtürme wurden in regelmäßigen Abständen (typischerweise alle paar hundert Meter) für Beobachtung, Signalgebung, Truppenunterbringung und Lagerung von Waffen und Vorräten gebaut.",
                nl: "Wachttorens werden op regelmatige afstanden gebouwd (meestal om de paar honderd meter) voor observatie, seingeving, troepenhuisvesting en opslag van wapens en voorraden."
            }
        },
        {
            question: {
                en: "What is the typical shape of the Great Wall's cross-section?",
                es: "¿Cuál es la forma típica de la sección transversal de la Gran Muralla?",
                de: "Welche Form hat der typische Querschnitt der Chinesischen Mauer?",
                nl: "Wat is de typische vorm van de dwarsdoorsnede van de Chinese Muur?"
            },
            options: [
                {
                    en: "Rectangular with vertical sides",
                    es: "Rectangular con lados verticales",
                    de: "Rechteckig mit vertikalen Seiten",
                    nl: "Rechthoekig met verticale zijden"
                },
                {
                    en: "Trapezoidal - wider at base, narrower at top",
                    es: "Trapezoidal - más ancha en la base, más estrecha arriba",
                    de: "Trapezförmig - breiter an der Basis, schmaler oben",
                    nl: "Trapeziumvormig - breder aan de basis, smaller bovenaan"
                },
                {
                    en: "Circular",
                    es: "Circular",
                    de: "Kreisförmig",
                    nl: "Cirkelvormig"
                },
                {
                    en: "Triangular",
                    es: "Triangular",
                    de: "Dreieckig",
                    nl: "Driehoekig"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall has a trapezoidal cross-section, being wider at the base for stability and narrower at the top, which also made it easier to defend.",
                es: "La Gran Muralla tiene una sección transversal trapezoidal, siendo más ancha en la base para estabilidad y más estrecha en la parte superior, lo que también facilitó la defensa.",
                de: "Die Chinesische Mauer hat einen trapezförmigen Querschnitt, ist an der Basis breiter für Stabilität und oben schmaler, was auch die Verteidigung erleichterte.",
                nl: "De Chinese Muur heeft een trapeziumvormige dwarsdoorsnede, breder aan de basis voor stabiliteit en smaller bovenaan, wat ook de verdediging vergemakkelijkte."
            }
        },
        {
            question: {
                en: "What defensive feature protected soldiers along the top of the wall?",
                es: "¿Qué característica defensiva protegía a los soldados a lo largo de la parte superior del muro?",
                de: "Welches Verteidigungsmerkmal schützte Soldaten entlang der Oberseite der Mauer?",
                nl: "Welk defensief kenmerk beschermde soldaten langs de bovenkant van de muur?"
            },
            options: [
                {
                    en: "Crenellations (battlements)",
                    es: "Almenas",
                    de: "Zinnen",
                    nl: "Kantelen"
                },
                {
                    en: "Glass shields",
                    es: "Escudos de vidrio",
                    de: "Glasschilde",
                    nl: "Glazen schilden"
                },
                {
                    en: "Wooden fences",
                    es: "Cercas de madera",
                    de: "Holzzäune",
                    nl: "Houten hekken"
                },
                {
                    en: "Metal plates",
                    es: "Placas de metal",
                    de: "Metallplatten",
                    nl: "Metalen platen"
                }
            ],
            correct: 0,
            explanation: {
                en: "Crenellations or battlements with merlons and embrasures lined the top of the wall, providing cover for defenders while allowing them to shoot arrows or observe enemies.",
                es: "Las almenas con merlones y aspilleras bordeaban la parte superior del muro, proporcionando cobertura a los defensores mientras les permitían disparar flechas u observar enemigos.",
                de: "Zinnen mit Mauerzinnen und Schießscharten säumten die Oberseite der Mauer und boten den Verteidigern Deckung, während sie Pfeile schießen oder Feinde beobachten konnten.",
                nl: "Kantelen met tinnen en schietgaten omzoomden de bovenkant van de muur, wat dekking bood aan verdedigers terwijl ze pijlen konden schieten of vijanden konden observeren."
            }
        },
        {
            question: {
                en: "How many watchtowers were built along the entire Great Wall?",
                es: "¿Cuántas torres de vigilancia se construyeron a lo largo de toda la Gran Muralla?",
                de: "Wie viele Wachtürme wurden entlang der gesamten Chinesischen Mauer gebaut?",
                nl: "Hoeveel wachttorens werden langs de hele Chinese Muur gebouwd?"
            },
            options: [
                {
                    en: "Around 1,000",
                    es: "Alrededor de 1.000",
                    de: "Etwa 1.000",
                    nl: "Ongeveer 1.000"
                },
                {
                    en: "Around 5,000",
                    es: "Alrededor de 5.000",
                    de: "Etwa 5.000",
                    nl: "Ongeveer 5.000"
                },
                {
                    en: "Around 25,000",
                    es: "Alrededor de 25.000",
                    de: "Etwa 25.000",
                    nl: "Ongeveer 25.000"
                },
                {
                    en: "Around 50,000",
                    es: "Alrededor de 50.000",
                    de: "Etwa 50.000",
                    nl: "Ongeveer 50.000"
                }
            ],
            correct: 2,
            explanation: {
                en: "Estimates suggest there were approximately 25,000 watchtowers built along the entire length of the Great Wall throughout its history.",
                es: "Las estimaciones sugieren que se construyeron aproximadamente 25.000 torres de vigilancia a lo largo de toda la longitud de la Gran Muralla a lo largo de su historia.",
                de: "Schätzungen zufolge wurden etwa 25.000 Wachtürme entlang der gesamten Länge der Chinesischen Mauer im Laufe ihrer Geschichte gebaut.",
                nl: "Schattingen suggereren dat er ongeveer 25.000 wachttorens werden gebouwd langs de hele lengte van de Chinese Muur gedurende haar geschiedenis."
            }
        },
        {
            question: {
                en: "What were beacon towers primarily used for?",
                es: "¿Para qué se usaban principalmente las torres de señales?",
                de: "Wofür wurden Leuchtfeuer-Türme hauptsächlich verwendet?",
                nl: "Waarvoor werden bakentoens voornamelijk gebruikt?"
            },
            options: [
                {
                    en: "Accommodation",
                    es: "Alojamiento",
                    de: "Unterkunft",
                    nl: "Accommodatie"
                },
                {
                    en: "Long-distance communication through smoke and fire signals",
                    es: "Comunicación a larga distancia mediante señales de humo y fuego",
                    de: "Fernkommunikation durch Rauch- und Feuersignale",
                    nl: "Communicatie over lange afstand via rook- en vuursignalen"
                },
                {
                    en: "Food storage",
                    es: "Almacenamiento de alimentos",
                    de: "Lebensmittellagerung",
                    nl: "Voedselopslag"
                },
                {
                    en: "Religious ceremonies",
                    es: "Ceremonias religiosas",
                    de: "Religiöse Zeremonien",
                    nl: "Religieuze ceremonies"
                }
            ],
            correct: 1,
            explanation: {
                en: "Beacon towers were used for rapid communication along the wall. During the day, smoke signals were used, and at night, fire signals warned of enemy approaches and conveyed the scale of the threat.",
                es: "Las torres de señales se usaban para comunicación rápida a lo largo del muro. Durante el día se usaban señales de humo, y por la noche, señales de fuego advertían de aproximaciones enemigas y transmitían la escala de la amenaza.",
                de: "Leuchtfeuer-Türme wurden für schnelle Kommunikation entlang der Mauer verwendet. Tagsüber wurden Rauchsignale verwendet, und nachts warnten Feuersignale vor feindlichen Annäherungen und übermittelten das Ausmaß der Bedrohung.",
                nl: "Bakentorens werden gebruikt voor snelle communicatie langs de muur. Overdag werden rooksignalen gebruikt, en 's nachts waarschuwden vuursignalen voor vijandelijke naderingen en gaven de schaal van de dreiging aan."
            }
        },
        {
            question: {
                en: "What is a 'pass' or 'gate' in the Great Wall?",
                es: "¿Qué es un 'paso' o 'puerta' en la Gran Muralla?",
                de: "Was ist ein 'Pass' oder 'Tor' in der Chinesischen Mauer?",
                nl: "Wat is een 'pas' of 'poort' in de Chinese Muur?"
            },
            options: [
                {
                    en: "A gap in the wall",
                    es: "Una brecha en el muro",
                    de: "Eine Lücke in der Mauer",
                    nl: "Een opening in de muur"
                },
                {
                    en: "A fortified entrance through strategic pts",
                    es: "Una entrada fortificada a través de puntos estratégicos",
                    de: "Ein befestigter Eingang durch strategische Punkte",
                    nl: "Een versterkte ingang door strategische punten"
                },
                {
                    en: "A lookout point",
                    es: "Un punto de observación",
                    de: "Ein Aussichtspunkt",
                    nl: "Een uitkijkpunt"
                },
                {
                    en: "A marketplace",
                    es: "Un mercado",
                    de: "Ein Marktplatz",
                    nl: "Een marktplaats"
                }
            ],
            correct: 1,
            explanation: {
                en: "Passes or gates were heavily fortified entrance points built at strategic locations like valleys or trade routes, allowing controlled passage through the wall while providing strong defense.",
                es: "Los pasos o puertas eran puntos de entrada fuertemente fortificados construidos en ubicaciones estratégicas como valles o rutas comerciales, permitiendo paso controlado a través del muro mientras proporcionaban defensa fuerte.",
                de: "Pässe oder Tore waren stark befestigte Eingangspunkte, die an strategischen Orten wie Tälern oder Handelsrouten gebaut wurden und kontrollierten Durchgang durch die Mauer ermöglichten, während sie starke Verteidigung boten.",
                nl: "Passen of poorten waren zwaar versterkte ingangspunten gebouwd op strategische locaties zoals valleien of handelsroutes, die gecontroleerde doorgang door de muur mogelijk maakten terwijl ze sterke verdediging boden."
            }
        },
        {
            question: {
                en: "What design feature helped with drainage on the Great Wall?",
                es: "¿Qué característica de diseño ayudó con el drenaje en la Gran Muralla?",
                de: "Welches Designmerkmal half bei der Entwässerung der Chinesischen Mauer?",
                nl: "Welk ontwerpkenmerk hielp met drainage op de Chinese Muur?"
            },
            options: [
                {
                    en: "Gutters and spouts built into the structure",
                    es: "Canaletas y desagües incorporados en la estructura",
                    de: "Rinnen und Ausgüsse, die in die Struktur eingebaut wurden",
                    nl: "Goten en spuiten ingebouwd in de structuur"
                },
                {
                    en: "Underground pipes",
                    es: "Tuberías subterráneas",
                    de: "Unterirdische Rohre",
                    nl: "Ondergrondse leidingen"
                },
                {
                    en: "Plastic channels",
                    es: "Canales de plástico",
                    de: "Kunststoffkanäle",
                    nl: "Plastic kanalen"
                },
                {
                    en: "Natural evaporation only",
                    es: "Solo evaporación natural",
                    de: "Nur natürliche Verdunstung",
                    nl: "Alleen natuurlijke verdamping"
                }
            ],
            correct: 0,
            explanation: {
                en: "The Great Wall incorporated drainage systems including gutters, water spouts, and drainage holes to prevent water accumulation, which could damage the structure through freezing or erosion.",
                es: "La Gran Muralla incorporó sistemas de drenaje incluyendo canaletas, desagües y agujeros de drenaje para prevenir acumulación de agua, que podría dañar la estructura por congelación o erosión.",
                de: "Die Chinesische Mauer verfügte über Entwässerungssysteme einschließlich Rinnen, Wasserspeier und Drainagelöcher, um Wasseransammlungen zu verhindern, die die Struktur durch Gefrieren oder Erosion beschädigen könnten.",
                nl: "De Chinese Muur bevatte drainagesystemen inclusief goten, waterspuwers en drainagegaten om waterophoping te voorkomen, wat de structuur kon beschadigen door bevriezing of erosie."
            }
        },
        {
            question: {
                en: "How were different levels of the wall connected in steep terrain?",
                es: "¿Cómo se conectaban diferentes niveles del muro en terreno empinado?",
                de: "Wie wurden verschiedene Ebenen der Mauer in steilem Gelände verbunden?",
                nl: "Hoe werden verschillende niveaus van de muur verbonden in steil terrein?"
            },
            options: [
                {
                    en: "Elevators",
                    es: "Ascensores",
                    de: "Aufzüge",
                    nl: "Liften"
                },
                {
                    en: "Steps and ramps",
                    es: "Escalones y rampas",
                    de: "Stufen und Rampen",
                    nl: "Trappen en hellingen"
                },
                {
                    en: "Rope bridges",
                    es: "Puentes de cuerda",
                    de: "Seilbrücken",
                    nl: "Touwbruggen"
                },
                {
                    en: "Tunnels",
                    es: "Túneles",
                    de: "Tunnel",
                    nl: "Tunnels"
                }
            ],
            correct: 1,
            explanation: {
                en: "Steps and ramps were built into the wall structure to connect different elevation levels, allowing soldiers and horses to traverse steep sections efficiently.",
                es: "Se construyeron escalones y rampas en la estructura del muro para conectar diferentes niveles de elevación, permitiendo a soldados y caballos atravesar secciones empinadas eficientemente.",
                de: "Stufen und Rampen wurden in die Mauerstruktur eingebaut, um verschiedene Höhenniveaus zu verbinden und es Soldaten und Pferden zu ermöglichen, steile Abschnitte effizient zu durchqueren.",
                nl: "Trappen en hellingen werden ingebouwd in de muurstructuur om verschillende hoogteniveaus te verbinden, waardoor soldaten en paarden efficiënt steile secties konden doorkruisen."
            }
        },
        {
            question: {
                en: "What was the typical height of watchtowers?",
                es: "¿Cuál era la altura típica de las torres de vigilancia?",
                de: "Wie hoch waren Wachtürme typischerweise?",
                nl: "Wat was de typische hoogte van wachttorens?"
            },
            options: [
                {
                    en: "5-10 m",
                    es: "5-10 metros",
                    de: "5-10 Meter",
                    nl: "5-10 meter"
                },
                {
                    en: "10-15 m",
                    es: "10-15 metros",
                    de: "10-15 Meter",
                    nl: "10-15 meter"
                },
                {
                    en: "20-30 m",
                    es: "20-30 metros",
                    de: "20-30 Meter",
                    nl: "20-30 meter"
                },
                {
                    en: "40-50 m",
                    es: "40-50 metros",
                    de: "40-50 Meter",
                    nl: "40-50 meter"
                }
            ],
            correct: 1,
            explanation: {
                en: "Watchtowers typically stood 10-15 meters tall, rising above the wall itself to provide extended visibility for spotting approaching enemies from greater distances.",
                es: "Las torres de vigilancia típicamente tenían 10-15 metros de altura, elevándose por encima del muro mismo para proporcionar visibilidad extendida para detectar enemigos que se aproximaban desde mayores distancias.",
                de: "Wachtürme waren typischerweise 10-15 Meter hoch und ragten über die Mauer selbst hinaus, um erweiterte Sicht zu bieten und herannahende Feinde aus größeren Entfernungen zu erkennen.",
                nl: "Wachttorens waren typisch 10-15 meter hoog en staken uit boven de muur zelf om uitgebreide zichtbaarheid te bieden voor het spotten van naderende vijanden op grotere afstanden."
            }
        },
        {
            question: {
                en: "What structural element reinforced the foundation of the Great Wall?",
                es: "¿Qué elemento estructural reforzó los cimientos de la Gran Muralla?",
                de: "Welches strukturelle Element verstärkte das Fundament der Chinesischen Mauer?",
                nl: "Welk structureel element versterkte de fundering van de Chinese Muur?"
            },
            options: [
                {
                    en: "Steel beams",
                    es: "Vigas de acero",
                    de: "Stahlträger",
                    nl: "Stalen balken"
                },
                {
                    en: "Stone and rammed earth foundations",
                    es: "Cimientos de piedra y tierra apisonada",
                    de: "Stein- und Stampflehmfundamente",
                    nl: "Steen- en aangestampte aardefunderingen"
                },
                {
                    en: "Concrete pillars",
                    es: "Pilares de hormigón",
                    de: "Betonpfeiler",
                    nl: "Betonpilaren"
                },
                {
                    en: "Wooden posts",
                    es: "Postes de madera",
                    de: "Holzpfosten",
                    nl: "Houten palen"
                }
            ],
            correct: 1,
            explanation: {
                en: "The Great Wall's foundation consisted of deep layers of compacted stone and rammed earth, providing a stable base that could support the massive weight of the wall structure above.",
                es: "Los cimientos de la Gran Muralla consistían en capas profundas de piedra compactada y tierra apisonada, proporcionando una base estable que podía soportar el peso masivo de la estructura del muro arriba.",
                de: "Das Fundament der Chinesischen Mauer bestand aus tiefen Schichten aus verdichtetem Stein und Stampflehm, die eine stabile Basis boten, die das massive Gewicht der Mauerstruktur darüber tragen konnte.",
                nl: "De fundering van de Chinese Muur bestond uit diepe lagen gecomprimeerde steen en aangestampte aarde, wat een stabiele basis bood die het enorme gewicht van de muurstructuur erboven kon dragen."
            }
        },
        {
            question: {
                en: "What is the purpose of the inner and outer parapets on the wall?",
                es: "¿Cuál es el propósito de los parapetos interiores y exteriores en el muro?",
                de: "Was ist der Zweck der inneren und äußeren Brüstungen an der Mauer?",
                nl: "Wat is het doel van de binnen- en buitenborstweringen op de muur?"
            },
            options: [
                {
                    en: "Decoration only",
                    es: "Solo decoración",
                    de: "Nur Dekoration",
                    nl: "Alleen decoratie"
                },
                {
                    en: "Protection for defenders on both sides",
                    es: "Protección para defensores en ambos lados",
                    de: "Schutz für Verteidiger auf beiden Seiten",
                    nl: "Bescherming voor verdedigers aan beide zijden"
                },
                {
                    en: "To hold banners",
                    es: "Para sostener estandartes",
                    de: "Um Banner zu halten",
                    nl: "Om banieren te houden"
                },
                {
                    en: "Water collection",
                    es: "Recolección de agua",
                    de: "Wassersammlung",
                    nl: "Waterverzameling"
                }
            ],
            correct: 1,
            explanation: {
                en: "The outer parapet (facing enemies) was higher with crenellations for defense, while the inner parapet (facing China) was lower to prevent defenders from falling and to allow easier movement along the wall.",
                es: "El parapeto exterior (frente a enemigos) era más alto con almenas para defensa, mientras que el parapeto interior (frente a China) era más bajo para prevenir caídas de defensores y permitir movimiento más fácil a lo largo del muro.",
                de: "Die äußere Brüstung (zu den Feinden hin) war höher mit Zinnen zur Verteidigung, während die innere Brüstung (zu China hin) niedriger war, um das Herunterfallen der Verteidiger zu verhindern und einfachere Bewegung entlang der Mauer zu ermöglichen.",
                nl: "De buitenborstw ering (gericht naar vijanden) was hoger met kantelen voor verdediging, terwijl de binnenborstw ering (gericht naar China) lager was om te voorkomen dat verdedigers vielen en om gemakkelijkere beweging langs de muur mogelijk te maken."
            }
        },
        {
            question: {
                en: "What geometric principle was used in watchtower placement?",
                es: "¿Qué principio geométrico se usó en la colocación de torres de vigilancia?",
                de: "Welches geometrische Prinzip wurde bei der Platzierung von Wachtürmen verwendet?",
                nl: "Welk geometrisch principe werd gebruikt bij de plaatsing van wachttorens?"
            },
            options: [
                {
                    en: "Random placement",
                    es: "Colocación aleatoria",
                    de: "Zufällige Platzierung",
                    nl: "Willekeurige plaatsing"
                },
                {
                    en: "Intervisibility - each tower could see adjacent towers",
                    es: "Intervisibilidad - cada torre podía ver las torres adyacentes",
                    de: "Sichtverbindung - jeder Turm konnte benachbarte Türme sehen",
                    nl: "Onderlinge zichtbaarheid - elke toren kon aangrenzende torens zien"
                },
                {
                    en: "Circular patterns",
                    es: "Patrones circulares",
                    de: "Kreisförmige Muster",
                    nl: "Cirkelvormige patronen"
                },
                {
                    en: "Triangular formation",
                    es: "Formación triangular",
                    de: "Dreieckige Formation",
                    nl: "Driehoekige formatie"
                }
            ],
            correct: 1,
            explanation: {
                en: "Watchtowers were strategically placed so that each tower could see at least two adjacent towers, allowing signals to be rapidly transmitted along the entire length of the wall.",
                es: "Las torres de vigilancia se colocaban estratégicamente para que cada torre pudiera ver al menos dos torres adyacentes, permitiendo que las señales se transmitieran rápidamente a lo largo de toda la longitud del muro.",
                de: "Wachtürme wurden strategisch platziert, sodass jeder Turm mindestens zwei benachbarte Türme sehen konnte, was eine schnelle Signalübertragung entlang der gesamten Mauerlänge ermöglichte.",
                nl: "Wachttorens werden strategisch geplaatst zodat elke toren minstens twee aangrenzende torens kon zien, waardoor signalen snel langs de hele lengte van de muur konden worden doorgegeven."
            }
        },
        {
            question: {
                en: "What rooms were typically found inside watchtowers?",
                es: "¿Qué habitaciones se encontraban típicamente dentro de las torres de vigilancia?",
                de: "Welche Räume befanden sich typischerweise in Wachtürmen?",
                nl: "Welke kamers werden typisch binnen wachttorens gevonden?"
            },
            options: [
                {
                    en: "Barracks, storage, and signal room",
                    es: "Barracas, almacenamiento y sala de señales",
                    de: "Kaserne, Lager und Signalraum",
                    nl: "Kazernes, opslag en seinkamer"
                },
                {
                    en: "Libraries and offices",
                    es: "Bibliotecas y oficinas",
                    de: "Bibliotheken und Büros",
                    nl: "Bibliotheken en kantoren"
                },
                {
                    en: "Temples and shrines",
                    es: "Templos y santuarios",
                    de: "Tempel und Schreine",
                    nl: "Tempels en heiligdommen"
                },
                {
                    en: "Kitchens only",
                    es: "Solo cocinas",
                    de: "Nur Küchen",
                    nl: "Alleen keukens"
                }
            ],
            correct: 0,
            explanation: {
                en: "Watchtowers contained multiple levels with different functions: ground floors for storage of weapons and supplies, middle floors for soldier barracks, and top floors for observation and signaling.",
                es: "Las torres de vigilancia contenían múltiples niveles con diferentes funciones: plantas bajas para almacenamiento de armas y suministros, pisos medios para barracas de soldados y pisos superiores para observación y señalización.",
                de: "Wachtürme enthielten mehrere Ebenen mit verschiedenen Funktionen: Erdgeschosse zur Lagerung von Waffen und Vorräten, mittlere Stockwerke für Soldatenkasernen und oberste Stockwerke für Beobachtung und Signalgebung.",
                nl: "Wachttorens bevatten meerdere niveaus met verschillende functies: begane grond voor opslag van wapens en voorraden, middelste verdiepingen voor soldatenkazernes en bovenste verdiepingen voor observatie en seingeving."
            }
        },
        {
            question: {
                en: "How wide is the walking path on top of the Great Wall?",
                es: "¿Qué ancho tiene el camino peatonal en la parte superior de la Gran Muralla?",
                de: "Wie breit ist der Gehweg oben auf der Chinesischen Mauer?",
                nl: "Hoe breed is het wandelpad bovenop de Chinese Muur?"
            },
            options: [
                {
                    en: "1-2 m",
                    es: "1-2 metros",
                    de: "1-2 Meter",
                    nl: "1-2 meter"
                },
                {
                    en: "4-5 meters wide enough for horses",
                    es: "4-5 metros suficientemente ancho para caballos",
                    de: "4-5 Meter breit genug für Pferde",
                    nl: "4-5 meter breed genoeg voor paarden"
                },
                {
                    en: "10 m",
                    es: "10 metros",
                    de: "10 Meter",
                    nl: "10 meter"
                },
                {
                    en: "15 m",
                    es: "15 metros",
                    de: "15 Meter",
                    nl: "15 meter"
                }
            ],
            correct: 1,
            explanation: {
                en: "The top of the Great Wall is typically 4-5 meters wide, designed to allow soldiers to march and horses to travel along its length for rapid troop movement.",
                es: "La parte superior de la Gran Muralla es típicamente de 4-5 metros de ancho, diseñada para permitir que los soldados marchen y los caballos viajen a lo largo de su longitud para movimiento rápido de tropas.",
                de: "Die Oberseite der Chinesischen Mauer ist typischerweise 4-5 Meter breit, konzipiert um Soldaten das Marschieren und Pferden das Reisen entlang ihrer Länge für schnelle Truppenbewegungen zu ermöglichen.",
                nl: "De bovenkant van de Chinese Muur is typisch 4-5 meter breed, ontworpen om soldaten te laten marcheren en paarden langs de lengte te laten reizen voor snelle troepenbewegingen."
            }
        },
        {
            question: {
                en: "What architectural feature helped stabilize the wall on slopes?",
                es: "¿Qué característica arquitectónica ayudó a estabilizar el muro en pendientes?",
                de: "Welches architektonische Merkmal half, die Mauer an Hängen zu stabilisieren?",
                nl: "Welk architectonisch kenmerk hielp de muur op hellingen te stabiliseren?"
            },
            options: [
                {
                    en: "Metal cables",
                    es: "Cables de metal",
                    de: "Metallkabel",
                    nl: "Metalen kabels"
                },
                {
                    en: "Terracing and buttressing",
                    es: "Terrazas y contrafuertes",
                    de: "Terrassierung und Strebepfeiler",
                    nl: "Terrassen en steunberen"
                },
                {
                    en: "Rubber supports",
                    es: "Soportes de caucho",
                    de: "Gummistützen",
                    nl: "Rubberen steunen"
                },
                {
                    en: "Wooden stakes",
                    es: "Estacas de madera",
                    de: "Holzpfähle",
                    nl: "Houten palen"
                }
            ],
            correct: 1,
            explanation: {
                en: "On steep slopes, builders used terracing to create level sections and added buttresses for additional support, preventing erosion and structural failure.",
                es: "En pendientes empinadas, los constructores usaban terrazas para crear secciones niveladas y agregaban contrafuertes para soporte adicional, previniendo erosión y falla estructural.",
                de: "An steilen Hängen verwendeten Bauarbeiter Terrassierung, um ebene Abschnitte zu schaffen, und fügten Strebepfeiler für zusätzliche Unterstützung hinzu, um Erosion und strukturelles Versagen zu verhindern.",
                nl: "Op steile hellingen gebruikten bouwers terrassen om vlakke secties te creëren en voegden steunberen toe voor extra ondersteuning, waardoor erosie en structureel falen werden voorkomen."
            }
        },
        {
            question: {
                en: "What is the function of loopholes in the wall?",
                es: "¿Cuál es la función de las aspilleras en el muro?",
                de: "Was ist die Funktion von Schießscharten in der Mauer?",
                nl: "Wat is de functie van schietgaten in de muur?"
            },
            options: [
                {
                    en: "Ventilation",
                    es: "Ventilación",
                    de: "Belüftung",
                    nl: "Ventilatie"
                },
                {
                    en: "Narrow openings for archers to shoot through",
                    es: "Aberturas estrechas para que los arqueros disparen",
                    de: "Schmale Öffnungen für Bogenschützen zum Schießen",
                    nl: "Smalle openingen voor boogschutters om doorheen te schieten"
                },
                {
                    en: "Drainage",
                    es: "Drenaje",
                    de: "Entwässerung",
                    nl: "Drainage"
                },
                {
                    en: "Lighting",
                    es: "Iluminación",
                    de: "Beleuchtung",
                    nl: "Verlichting"
                }
            ],
            correct: 1,
            explanation: {
                en: "Loopholes were narrow openings in the walls and battlements designed to allow defenders to shoot arrows or observe enemies while remaining protected from return fire.",
                es: "Las aspilleras eran aberturas estrechas en los muros y almenas diseñadas para permitir a los defensores disparar flechas u observar enemigos mientras permanecían protegidos del fuego de respuesta.",
                de: "Schießscharten waren schmale Öffnungen in den Mauern und Zinnen, die es Verteidigern ermöglichten, Pfeile zu schießen oder Feinde zu beobachten, während sie vor Gegenfeuer geschützt blieben.",
                nl: "Schietgaten waren smalle openingen in de muren en kantelen die verdedigers in staat stelden pijlen te schieten of vijanden te observeren terwijl ze beschermd bleven tegen tegenvuur."
            }
        },
        {
            question: {
                en: "What type of gates were built at major passes?",
                es: "¿Qué tipo de puertas se construyeron en los pasos principales?",
                de: "Welche Art von Toren wurden an wichtigen Pässen gebaut?",
                nl: "Welk type poorten werden bij belangrijke passen gebouwd?"
            },
            options: [
                {
                    en: "Simple wooden doors",
                    es: "Puertas de madera simples",
                    de: "Einfache Holztüren",
                    nl: "Eenvoudige houten deuren"
                },
                {
                    en: "Multi-layered fortified gate complexes",
                    es: "Complejos de puertas fortificadas de múltiples capas",
                    de: "Mehrschichtige befestigte Torkomplexe",
                    nl: "Meerlaagse versterkte poortcomplexen"
                },
                {
                    en: "Glass barriers",
                    es: "Barreras de vidrio",
                    de: "Glasbarrieren",
                    nl: "Glazen barrières"
                },
                {
                    en: "Rope curtains",
                    es: "Cortinas de cuerda",
                    de: "Seilvorhänge",
                    nl: "Touwgordijnen"
                }
            ],
            correct: 1,
            explanation: {
                en: "Major passes featured complex multi-layered gate systems with multiple walls, courtyards, and defensive positions, creating a fortress-like structure that could withstand prolonged attacks.",
                es: "Los pasos principales presentaban complejos sistemas de puertas de múltiples capas con múltiples muros, patios y posiciones defensivas, creando una estructura similar a una fortaleza que podía resistir ataques prolongados.",
                de: "Wichtige Pässe verfügten über komplexe mehrschichtige Torsysteme mit mehreren Mauern, Innenhöfen und Verteidigungspositionen, die eine festungsartige Struktur schufen, die längeren Angriffen standhalten konnte.",
                nl: "Belangrijke passen hadden complexe meerlaagse poortsystemen met meerdere muren, binnenplaatsen en defensieve posities, waardoor een fortachtige structuur ontstond die langdurige aanvallen kon weerstaan."
            }
        },
        {
            question: {
                en: "How did the wall's design accommodate troop movement?",
                es: "¿Cómo acomodó el diseño del muro el movimiento de tropas?",
                de: "Wie ermöglichte das Design der Mauer Truppenbewegungen?",
                nl: "Hoe accommodeerde het ontwerp van de muur troepenbewegingen?"
            },
            options: [
                {
                    en: "Helicopters were used",
                    es: "Se usaban helicópteros",
                    de: "Hubschrauber wurden verwendet",
                    nl: "Helikopters werden gebruikt"
                },
                {
                    en: "Wide roadway on top with ramps and steps",
                    es: "Camino ancho en la parte superior con rampas y escalones",
                    de: "Breite Straße oben mit Rampen und Stufen",
                    nl: "Brede weg bovenop met hellingen en trappen"
                },
                {
                    en: "Underground tunnels",
                    es: "Túneles subterráneos",
                    de: "Unterirdische Tunnel",
                    nl: "Ondergrondse tunnels"
                },
                {
                    en: "Parallel roads beside the wall",
                    es: "Carreteras paralelas junto al muro",
                    de: "Parallelstraßen neben der Mauer",
                    nl: "Parallelle wegen naast de muur"
                }
            ],
            correct: 1,
            explanation: {
                en: "The wall's design featured a wide roadway on top allowing rapid troop deployment, with ramps, steps, and access points at watchtowers enabling soldiers and horses to move efficiently along its length.",
                es: "El diseño del muro presentaba un camino ancho en la parte superior que permitía el despliegue rápido de tropas, con rampas, escalones y puntos de acceso en las torres de vigilancia que permitían a soldados y caballos moverse eficientemente a lo largo de su longitud.",
                de: "Das Design der Mauer verfügte über eine breite Straße oben, die schnelle Truppenverlegung ermöglichte, mit Rampen, Stufen und Zugangspunkten an Wachtürmen, die es Soldaten und Pferden ermöglichten, sich effizient entlang ihrer Länge zu bewegen.",
                nl: "Het ontwerp van de muur had een brede weg bovenop die snelle troepeninzet mogelijk maakte, met hellingen, trappen en toegangspunten bij wachttorens die soldaten en paarden in staat stelden zich efficiënt langs de lengte te bewegen."
            }
        },
        {
            question: {
                en: "What structural innovation made Ming-era walls more earthquake resistant?",
                es: "¿Qué innovación estructural hizo que los muros de la era Ming fueran más resistentes a terremotos?",
                de: "Welche strukturelle Innovation machte die Mauern der Ming-Ära erdbebensicherer?",
                nl: "Welke structurele innovatie maakte Ming-era muren beter bestand tegen aardbevingen?"
            },
            options: [
                {
                    en: "Steel frames",
                    es: "Marcos de acero",
                    de: "Stahlrahmen",
                    nl: "Stalen frames"
                },
                {
                    en: "Interlocking stones and flexible mortar",
                    es: "Piedras entrelazadas y mortero flexible",
                    de: "Ineinandergreifende Steine und flexibler Mörtel",
                    nl: "In elkaar grijpende stenen en flexibele mortel"
                },
                {
                    en: "Shock absorbers",
                    es: "Amortiguadores",
                    de: "Stoßdämpfer",
                    nl: "Schokdempers"
                },
                {
                    en: "Hollow foundations",
                    es: "Cimientos huecos",
                    de: "Hohlfundamente",
                    nl: "Holle funderingen"
                }
            ],
            correct: 1,
            explanation: {
                en: "Ming builders used carefully shaped interlocking stones and glutinous rice mortar which provided flexibility, allowing the structure to absorb seismic shocks without collapsing.",
                es: "Los constructores Ming usaban piedras entrelazadas cuidadosamente formadas y mortero de arroz glutinoso que proporcionaba flexibilidad, permitiendo que la estructura absorbiera choques sísmicos sin colapsar.",
                de: "Ming-Baumeister verwendeten sorgfältig geformte ineinandergreifende Steine und Klebreis-Mörtel, der Flexibilität bot und es der Struktur ermöglichte, seismische Erschütterungen zu absorbieren ohne einzustürzen.",
                nl: "Ming-bouwers gebruikten zorgvuldig gevormde in elkaar grijpende stenen en kleverige rijstmortel die flexibiliteit bood, waardoor de structuur seismische schokken kon opvangen zonder in te storten."
            }
        },
        {
            question: {
                en: "What drainage system was incorporated into the wall design?",
                es: "¿Qué sistema de drenaje se incorporó en el diseño del muro?",
                de: "Welches Entwässerungssystem wurde in das Mauerdesign integriert?",
                nl: "Welk drainagesysteem werd geïntegreerd in het ontwerp van de muur?"
            },
            options: [
                {
                    en: "No drainage needed",
                    es: "No se necesita drenaje",
                    de: "Keine Entwässerung erforderlich",
                    nl: "Geen drainage nodig"
                },
                {
                    en: "Gargoyles and drainage spouts",
                    es: "Gárgolas y desagües",
                    de: "Wasserspeier und Abflüsse",
                    nl: "Waterspuwers en afvoergoten"
                },
                {
                    en: "Open channels only",
                    es: "Solo canales abiertos",
                    de: "Nur offene Kanäle",
                    nl: "Alleen open kanalen"
                },
                {
                    en: "Underground pipes",
                    es: "Tuberías subterráneas",
                    de: "Unterirdische Rohre",
                    nl: "Ondergrondse leidingen"
                }
            ],
            correct: 1,
            explanation: {
                en: "The wall featured gargoyles and drainage spouts at regular intervals to prevent water accumulation, which could damage the structure through freeze-thaw cycles and erosion.",
                es: "El muro presentaba gárgolas y desagües a intervalos regulares para prevenir acumulación de agua, que podría dañar la estructura a través de ciclos de congelación-descongelación y erosión.",
                de: "Die Mauer verfügte über Wasserspeier und Abflüsse in regelmäßigen Abständen, um Wasseransammlungen zu verhindern, die die Struktur durch Frost-Tau-Zyklen und Erosion beschädigen könnten.",
                nl: "De muur had waterspuwers en afvoergoten op regelmatige afstanden om waterophoping te voorkomen, wat de structuur zou kunnen beschadigen door vries-dooicycli en erosie."
            }
        }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }
  if (typeof window !== 'undefined') {
    window.level3Data = level3;
  }
  return level3;
})();
