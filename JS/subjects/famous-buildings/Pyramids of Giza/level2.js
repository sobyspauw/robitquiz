(function() {
    const level2Questions = [
        {
            question: {
                en: "How long did it take to build the Great Pyramid?",
                es: "¿Cuánto tiempo tomó construir la Gran Pirámide?",
                de: "Wie lange dauerte der Bau der Großen Pyramide?",
                nl: "Hoe lang duurde het om de Grote Piramide te bouwen?"
            },
            options: [
                { en: "10 yrs", es: "10 años", de: "10 Jahre", nl: "10 jaar" },
                { en: "20 yrs", es: "20 años", de: "20 Jahre", nl: "20 jaar" },
                { en: "50 yrs", es: "50 años", de: "50 Jahre", nl: "50 jaar" },
                { en: "100 yrs", es: "100 años", de: "100 Jahre", nl: "100 jaar" }
            ],
            correctIndex: 1,
            explanation: {
                en: "According to ancient Greek historian Herodotus, the Great Pyramid took approximately 20 years to build.",
                es: "Según el antiguo historiador griego Heródoto, la Gran Pirámide tardó aproximadamente 20 años en construirse.",
                de: "Laut dem antiken griechischen Historiker Herodot dauerte der Bau der Großen Pyramide etwa 20 Jahre.",
                nl: "Volgens de oude Griekse historicus Herodotus duurde het ongeveer 20 jaar om de Grote Piramide te bouwen."
            }
        },
        {
            question: {
                en: "How many workers are estimated to have built the Great Pyramid?",
                es: "¿Cuántos trabajadores se estima que construyeron la Gran Pirámide?",
                de: "Wie viele Arbeiter haben schätzungsweise die Große Pyramide gebaut?",
                nl: "Hoeveel arbeiders bouwden naar schatting de Grote Piramide?"
            },
            options: [
                { en: "5,000-10,000 workers", es: "5.000-10.000 trabajadores", de: "5.000-10.000 Arbeiter", nl: "5.000-10.000 arbeiders" },
                { en: "20,000-30,000 workers", es: "20.000-30.000 trabajadores", de: "20.000-30.000 Arbeiter", nl: "20.000-30.000 arbeiders" },
                { en: "50,000-75,000 workers", es: "50.000-75.000 trabajadores", de: "50.000-75.000 Arbeiter", nl: "50.000-75.000 arbeiders" },
                { en: "100,000 workers", es: "100.000 trabajadores", de: "100.000 Arbeiter", nl: "100.000 arbeiders" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Modern estimates suggest that 20,000-30,000 workers were employed to build the Great Pyramid, working in rotating shifts.",
                es: "Las estimaciones modernas sugieren que se emplearon entre 20.000 y 30.000 trabajadores para construir la Gran Pirámide, trabajando en turnos rotativos.",
                de: "Moderne Schätzungen gehen davon aus, dass 20.000-30.000 Arbeiter beim Bau der Großen Pyramide beschäftigt waren, die in rotierenden Schichten arbeiteten.",
                nl: "Moderne schattingen suggereren dat 20.000-30.000 arbeiders werden ingezet om de Grote Piramide te bouwen, werkend in roterende diensten."
            }
        },
        {
            question: {
                en: "What method was likely used to move the heavy stone blocks?",
                es: "¿Qué método se utilizó probablemente para mover los pesados bloques de piedra?",
                de: "Welche Methode wurde wahrscheinlich verwendet, um die schweren Steinblöcke zu bewegen?",
                nl: "Welke methode werd waarschijnlijk gebruikt om de zware stenen blokken te verplaatsen?"
            },
            options: [
                { en: "Cranes and pulleys", es: "Grúas y poleas", de: "Kräne und Flaschenzüge", nl: "Kranen en katrolblokken" },
                { en: "Wooden sleds and ramps", es: "Trineos de madera y rampas", de: "Holzschlitten und Rampen", nl: "Houten sledes en hellingen" },
                { en: "Wheeled carts", es: "Carros con ruedas", de: "Radwagen", nl: "Karren met wielen" },
                { en: "Hot air balloons", es: "Globos aerostáticos", de: "Heißluftballons", nl: "Heteluchtballonnen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The most widely accepted theory is that wooden sleds were used to drag stones, which were then hauled up ramps made of mud brick and rubble.",
                es: "La teoría más aceptada es que se usaron trineos de madera para arrastrar las piedras, que luego se subían por rampas hechas de ladrillos de barro y escombros.",
                de: "Die am weitesten akzeptierte Theorie ist, dass Holzschlitten verwendet wurden, um Steine zu ziehen, die dann auf Rampen aus Lehmziegeln und Schutt hochgezogen wurden.",
                nl: "De meest geaccepteerde theorie is dat houten sledes werden gebruikt om stenen te slepen, die vervolgens over hellingen van modderbakstenen en puin werden getrokken."
            }
        },
        {
            question: {
                en: "What did workers pour on the sand to help move stones?",
                es: "¿Qué vertían los trabajadores en la arena para ayudar a mover las piedras?",
                de: "Was gossen die Arbeiter auf den Sand, um die Steine zu bewegen?",
                nl: "Wat goten arbeiders op het zand om de stenen te verplaatsen?"
            },
            options: [
                { en: "Oil", es: "Aceite", de: "Öl", nl: "Olie" },
                { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
                { en: "Wine", es: "Vino", de: "Wein", nl: "Wijn" },
                { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Recent research suggests workers poured water on the sand in front of sleds to reduce friction, making it easier to drag heavy stones.",
                es: "Investigaciones recientes sugieren que los trabajadores vertían agua en la arena frente a los trineos para reducir la fricción, facilitando el arrastre de piedras pesadas.",
                de: "Neuere Forschungen deuten darauf hin, dass Arbeiter Wasser auf den Sand vor den Schlitten gossen, um die Reibung zu verringern und das Ziehen schwerer Steine zu erleichtern.",
                nl: "Recent onderzoek suggereert dat arbeiders water op het zand voor de sledes goten om wrijving te verminderen, waardoor het gemakkelijker werd om zware stenen te slepen."
            }
        },
        {
            question: {
                en: "Where did the limestone blocks for the pyramid core come from?",
                es: "¿De dónde provenían los bloques de piedra caliza para el núcleo de la pirámide?",
                de: "Woher kamen die Kalksteinblöcke für den Pyramidenkern?",
                nl: "Waar kwamen de kalksteenblokken voor de kern van de piramide vandaan?"
            },
            options: [
                { en: "Local Giza quarries", es: "Canteras locales de Giza", de: "Lokale Gizeh-Steinbrüche", nl: "Lokale Gizeh-steengroeven" },
                { en: "Greece", es: "Grecia", de: "Griechenland", nl: "Griekenland" },
                { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
                { en: "Sudan", es: "Sudán", de: "Sudan", nl: "Soedan" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The bulk limestone blocks were quarried locally from the Giza Plateau itself, minimizing transportation distance.",
                es: "Los bloques de piedra caliza a granel se extrajeron localmente de la propia meseta de Giza, minimizando la distancia de transporte.",
                de: "Die Masse der Kalksteinblöcke wurde vor Ort auf dem Gizeh-Plateau selbst abgebaut, um den Transportweg zu minimieren.",
                nl: "De grote kalksteenblokken werden lokaal gewonnen op het Gizeh-plateau zelf, waardoor de transportafstand werd geminimaliseerd."
            }
        },
        {
            question: {
                en: "Where did the fine white limestone casing stones come from?",
                es: "¿De dónde provenían las piedras de revestimiento de piedra caliza blanca fina?",
                de: "Woher kamen die feinen weißen Kalkstein-Verkleidungssteine?",
                nl: "Waar kwamen de fijne witte kalksteen bekledingsstenen vandaan?"
            },
            options: [
                { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" },
                { en: "Tura", es: "Tura", de: "Tura", nl: "Tura" },
                { en: "Sinai", es: "Sinaí", de: "Sinai", nl: "Sinaï" },
                { en: "Nubia", es: "Nubia", de: "Nubien", nl: "Nubië" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The fine white limestone for the outer casing came from quarries at Tura, across the Nile River from Giza.",
                es: "La piedra caliza blanca fina para el revestimiento exterior provenía de las canteras de Tura, al otro lado del río Nilo desde Giza.",
                de: "Der feine weiße Kalkstein für die Außenverkleidung stammte aus Steinbrüchen in Tura, gegenüber von Gizeh am Nil.",
                nl: "De fijne witte kalksteen voor de buitenbekleding kwam uit steengroeven in Tura, aan de overkant van de Nijl van Gizeh."
            }
        },
        {
            question: {
                en: "What material was used for the internal chambers and passages?",
                es: "¿Qué material se usó para las cámaras internas y pasajes?",
                de: "Welches Material wurde für die inneren Kammern und Gänge verwendet?",
                nl: "Welk materiaal werd gebruikt voor de interne kamers en gangen?"
            },
            options: [
                { en: "Sandstone", es: "Arenisca", de: "Sandstein", nl: "Zandsteen" },
                { en: "Marble", es: "Mármol", de: "Marmor", nl: "Marmer" },
                { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
                { en: "Basalt", es: "Basalto", de: "Basalt", nl: "Basalt" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Red granite from Aswan was used for important internal structures like the King's Chamber walls and ceiling beams.",
                es: "El granito rojo de Asuán se utilizó para estructuras internas importantes como las paredes y vigas del techo de la Cámara del Rey.",
                de: "Roter Granit aus Assuan wurde für wichtige innere Strukturen wie die Wände und Deckenbalken der Königskammer verwendet.",
                nl: "Rood graniet uit Aswan werd gebruikt voor belangrijke interne structuren zoals de muren en plafondbalken van de Koningskamer."
            }
        },
        {
            question: {
                en: "How far did granite stones have to be transported from Aswan?",
                es: "¿Qué distancia debían transportarse las piedras de granito desde Asuán?",
                de: "Wie weit mussten die Granitsteine von Assuan transportiert werden?",
                nl: "Hoe ver moesten de granietstenen vanuit Aswan worden vervoerd?"
            },
            options: [
                { en: "50 km", es: "50 kilómetros", de: "50 Kilometer", nl: "50 kilometer" },
                { en: "200 km", es: "200 kilómetros", de: "200 Kilometer", nl: "200 kilometer" },
                { en: "500 km", es: "500 kilómetros", de: "500 Kilometer", nl: "500 kilometer" },
                { en: "800 km", es: "800 kilómetros", de: "800 Kilometer", nl: "800 kilometer" }
            ],
            correctIndex: 3,
            explanation: {
                en: "Granite blocks were transported approximately 800 kilometers from Aswan, likely floated down the Nile on barges during the flood season.",
                es: "Los bloques de granito se transportaron aproximadamente 800 kilómetros desde Asuán, probablemente flotando por el Nilo en barcazas durante la temporada de inundaciones.",
                de: "Granitblöcke wurden etwa 800 Kilometer von Assuan transportiert, wahrscheinlich während der Flutzeit auf Lastkähnen den Nil hinunter geflößt.",
                nl: "Granietblokken werden ongeveer 800 kilometer vanuit Aswan getransporteerd, waarschijnlijk tijdens het overstromingsseizoen op schuiten over de Nijl."
            }
        },
        {
            question: {
                en: "What season was most favorable for transporting stones by river?",
                es: "¿Qué temporada era más favorable para transportar piedras por río?",
                de: "Welche Jahreszeit war am günstigsten für den Transport von Steinen auf dem Fluss?",
                nl: "Welk seizoen was het meest gunstig voor het vervoer van stenen over de rivier?"
            },
            options: [
                { en: "Dry season", es: "Estación seca", de: "Trockenzeit", nl: "Droog seizoen" },
                { en: "Flood season", es: "Temporada de inundaciones", de: "Überschwemmungszeit", nl: "Overstromingsseizoen" },
                { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
                { en: "Harvest season", es: "Temporada de cosecha", de: "Erntezeit", nl: "Oogstseizoen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The annual Nile flood season was ideal for transporting stones, as higher water levels allowed barges to come closer to construction sites.",
                es: "La temporada anual de inundaciones del Nilo era ideal para transportar piedras, ya que los niveles de agua más altos permitían que las barcazas se acercaran más a los sitios de construcción.",
                de: "Die jährliche Nilflut war ideal für den Transport von Steinen, da höhere Wasserstände es ermöglichten, dass Lastkähne näher an die Baustellen kommen konnten.",
                nl: "Het jaarlijkse overstromingsseizoen van de Nijl was ideaal voor het vervoer van stenen, omdat hogere waterstanden het mogelijk maakten dat schuiten dichter bij de bouwplaatsen kwamen."
            }
        },
        {
            question: {
                en: "What tools did workers use to cut the limestone blocks?",
                es: "¿Qué herramientas usaban los trabajadores para cortar los bloques de piedra caliza?",
                de: "Welche Werkzeuge verwendeten die Arbeiter, um die Kalksteinblöcke zu schneiden?",
                nl: "Welke gereedschappen gebruikten arbeiders om de kalksteenblokken te snijden?"
            },
            options: [
                { en: "Steel saws", es: "Sierras de acero", de: "Stahlsägen", nl: "Stalen zagen" },
                { en: "Copper chisels and stone hammers", es: "Cinceles de cobre y martillos de piedra", de: "Kupfermeißel und Steinhämmer", nl: "Koperen beitels en stenen hamers" },
                { en: "Diamond drills", es: "Taladros de diamante", de: "Diamantbohrer", nl: "Diamantboren" },
                { en: "Laser cutters", es: "Cortadores láser", de: "Laserschneider", nl: "Lasersnijders" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Workers used copper chisels, stone hammers, and wooden wedges to quarry and shape the limestone blocks.",
                es: "Los trabajadores usaban cinceles de cobre, martillos de piedra y cuñas de madera para extraer y dar forma a los bloques de piedra caliza.",
                de: "Die Arbeiter verwendeten Kupfermeißel, Steinhämmer und Holzkeile, um die Kalksteinblöcke abzubauen und zu formen.",
                nl: "Arbeiders gebruikten koperen beitels, stenen hamers en houten wiggen om de kalksteenblokken te winnen en te vormen."
            }
        },
        {
            question: {
                en: "What was the role of the workers' village near Giza?",
                es: "¿Cuál era el papel del pueblo de trabajadores cerca de Giza?",
                de: "Welche Rolle spielte das Arbeiterdorf in der Nähe von Gizeh?",
                nl: "Wat was de rol van het arbeidersdorp bij Gizeh?"
            },
            options: [
                { en: "Military barracks", es: "Cuarteles militares", de: "Militärkasernen", nl: "Militaire kazernes" },
                { en: "Housing and support for pyramid workers", es: "Vivienda y apoyo para trabajadores de pirámides", de: "Unterkunft und Unterstützung für Pyramidenarbeiter", nl: "Huisvesting en ondersteuning voor piramidearbeiders" },
                { en: "Royal palace", es: "Palacio real", de: "Königspalast", nl: "Koninklijk paleis" },
                { en: "Trading post", es: "Puesto comercial", de: "Handelsposten", nl: "Handelspost" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Archaeological evidence shows a workers' village near Giza provided housing, food, and medical care for the pyramid builders.",
                es: "La evidencia arqueológica muestra que un pueblo de trabajadores cerca de Giza proporcionaba vivienda, comida y atención médica para los constructores de pirámides.",
                de: "Archäologische Beweise zeigen, dass ein Arbeiterdorf in der Nähe von Gizeh Unterkunft, Nahrung und medizinische Versorgung für die Pyramidenbauer bot.",
                nl: "Archeologisch bewijs toont aan dat een arbeidersdorp bij Gizeh huisvesting, voedsel en medische zorg bood voor de bouwers van de piramides."
            }
        },
        {
            question: {
                en: "What evidence suggests workers were well-fed?",
                es: "¿Qué evidencia sugiere que los trabajadores estaban bien alimentados?",
                de: "Welche Beweise deuten darauf hin, dass die Arbeiter gut ernährt waren?",
                nl: "Welk bewijs suggereert dat arbeiders goed gevoed waren?"
            },
            options: [
                { en: "Written complaints about food", es: "Quejas escritas sobre la comida", de: "Schriftliche Beschwerden über Essen", nl: "Schriftelijke klachten over voedsel" },
                { en: "Animal bones found at worker sites", es: "Huesos de animales encontrados en sitios de trabajadores", de: "Tierknochen an Arbeiterstandorten gefunden", nl: "Dierenbotten gevonden op werknemerslocaties" },
                { en: "Paintings of banquets", es: "Pinturas de banquetes", de: "Gemälde von Banketten", nl: "Schilderijen van banketten" },
                { en: "Gold coins for food purchases", es: "Monedas de oro para comprar comida", de: "Goldmünzen für Lebensmittelkäufe", nl: "Gouden munten voor voedselaankopen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Large quantities of animal bones, particularly cattle and fish, found at workers' sites indicate the workers were provided with substantial meat rations.",
                es: "Grandes cantidades de huesos de animales, particularmente de ganado y pescado, encontrados en los sitios de trabajadores indican que se les proporcionaban raciones sustanciales de carne.",
                de: "Große Mengen an Tierknochen, insbesondere von Rindern und Fischen, die an Arbeiterstandorten gefunden wurden, deuten darauf hin, dass die Arbeiter mit erheblichen Fleischrationen versorgt wurden.",
                nl: "Grote hoeveelheden dierenbotten, met name van runderen en vissen, gevonden op werknemerslocaties, geven aan dat de arbeiders aanzienlijke vleesrantsoenen kregen."
            }
        },
        {
            question: {
                en: "How were workers organized during construction?",
                es: "¿Cómo se organizaban los trabajadores durante la construcción?",
                de: "Wie waren die Arbeiter während des Baus organisiert?",
                nl: "Hoe waren arbeiders georganiseerd tijdens de bouw?"
            },
            options: [
                { en: "Random groups", es: "Grupos aleatorios", de: "Zufällige Gruppen", nl: "Willekeurige groepen" },
                { en: "Military units", es: "Unidades militares", de: "Militäreinheiten", nl: "Militaire eenheden" },
                { en: "Specialized teams with specific tasks", es: "Equipos especializados con tareas específicas", de: "Spezialisierte Teams mit spezifischen Aufgaben", nl: "Gespecialiseerde teams met specifieke taken" },
                { en: "Family groups", es: "Grupos familiares", de: "Familiengruppen", nl: "Familiegroepen" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Workers were organized into specialized teams with specific roles such as quarrying, transporting, and placing stones, along with support workers.",
                es: "Los trabajadores se organizaban en equipos especializados con roles específicos como extraer, transportar y colocar piedras, junto con trabajadores de apoyo.",
                de: "Die Arbeiter waren in spezialisierten Teams mit spezifischen Rollen wie Steinabbau, Transport und Platzierung von Steinen sowie Unterstützungsarbeiter organisiert.",
                nl: "Arbeiders waren georganiseerd in gespecialiseerde teams met specifieke rollen zoals het winnen, vervoeren en plaatsen van stenen, samen met ondersteunende arbeiders."
            }
        },
        {
            question: {
                en: "What type of ramps were likely used during construction?",
                es: "¿Qué tipo de rampas se usaron probablemente durante la construcción?",
                de: "Welche Art von Rampen wurden wahrscheinlich während des Baus verwendet?",
                nl: "Welk type hellingen werd waarschijnlijk gebruikt tijdens de bouw?"
            },
            options: [
                { en: "Permanent stone ramps", es: "Rampas de piedra permanentes", de: "Permanente Steinrampen", nl: "Permanente stenen hellingen" },
                { en: "Temporary mud brick and rubble ramps", es: "Rampas temporales de ladrillos de barro y escombros", de: "Temporäre Lehmziegel- und Schuttrampen", nl: "Tijdelijke modderbaksteen- en puinhellingen" },
                { en: "Metal scaffolding", es: "Andamios metálicos", de: "Metallgerüste", nl: "Metalen steigers" },
                { en: "Wooden towers", es: "Torres de madera", de: "Holztürme", nl: "Houten torens" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Temporary ramps made of mud brick and rubble were likely built and modified as the pyramid grew, then dismantled after completion.",
                es: "Las rampas temporales hechas de ladrillos de barro y escombros probablemente se construyeron y modificaron a medida que crecía la pirámide, luego se desmontaron después de completarse.",
                de: "Temporäre Rampen aus Lehmziegeln und Schutt wurden wahrscheinlich gebaut und modifiziert, während die Pyramide wuchs, und nach Fertigstellung abgebaut.",
                nl: "Tijdelijke hellingen van modderbakstenen en puin werden waarschijnlijk gebouwd en aangepast naarmate de piramide groeide, en werden na voltooiing afgebroken."
            }
        },
        {
            question: {
                en: "What was the precision of the pyramid's base alignment?",
                es: "¿Cuál fue la precisión de la alineación de la base de la pirámide?",
                de: "Wie präzise war die Ausrichtung der Pyramidenbasis?",
                nl: "Wat was de precisie van de uitlijning van de basis van de piramide?"
            },
            options: [
                { en: "Within 5 degrees", es: "Dentro de 5 grados", de: "Innerhalb von 5 Grad", nl: "Binnen 5 graden" },
                { en: "Within 1 degree", es: "Dentro de 1 grado", de: "Innerhalb von 1 Grad", nl: "Binnen 1 graad" },
                { en: "Within 4 minutes of arc", es: "Dentro de 4 minutos de arco", de: "Innerhalb von 4 Bogenminuten", nl: "Binnen 4 boogminuten" },
                { en: "Exactly aligned", es: "Exactamente alineado", de: "Genau ausgerichtet", nl: "Exact uitgelijnd" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid's base is aligned to the cardinal directions with remarkable precision, within just 4 minutes of arc (about 0.067 degrees).",
                es: "La base de la Gran Pirámide está alineada con las direcciones cardinales con notable precisión, dentro de solo 4 minutos de arco (aproximadamente 0,067 grados).",
                de: "Die Basis der Großen Pyramide ist mit bemerkenswerter Präzision auf die Himmelsrichtungen ausgerichtet, innerhalb von nur 4 Bogenminuten (etwa 0,067 Grad).",
                nl: "De basis van de Grote Piramide is met opmerkelijke precisie uitgelijnd met de windrichtingen, binnen slechts 4 boogminuten (ongeveer 0,067 graden)."
            }
        },
        {
            question: {
                en: "What method was likely used to achieve such precise alignment?",
                es: "¿Qué método se utilizó probablemente para lograr una alineación tan precisa?",
                de: "Welche Methode wurde wahrscheinlich verwendet, um eine so präzise Ausrichtung zu erreichen?",
                nl: "Welke methode werd waarschijnlijk gebruikt om zo'n precieze uitlijning te bereiken?"
            },
            options: [
                { en: "Magnetic compass", es: "Brújula magnética", de: "Magnetkompass", nl: "Magnetisch kompas" },
                { en: "GPS technology", es: "Tecnología GPS", de: "GPS-Technologie", nl: "GPS-technologie" },
                { en: "Stellar observations", es: "Observaciones estelares", de: "Sternbeobachtungen", nl: "Sterrenobservaties" },
                { en: "Random guessing", es: "Adivinanza aleatoria", de: "Zufälliges Raten", nl: "Willekeurig gokken" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Ancient Egyptians likely used observations of stars, particularly the circumpolar stars, to achieve the precise cardinal alignment of the pyramids.",
                es: "Los antiguos egipcios probablemente usaron observaciones de estrellas, particularmente las estrellas circumpolares, para lograr la alineación cardinal precisa de las pirámides.",
                de: "Die alten Ägypter verwendeten wahrscheinlich Beobachtungen von Sternen, insbesondere der zirkumpolaren Sterne, um die präzise Himmelsausrichtung der Pyramiden zu erreichen.",
                nl: "Oude Egyptenaren gebruikten waarschijnlijk observaties van sterren, met name de circumpolaire sterren, om de precieze kardinale uitlijning van de piramides te bereiken."
            }
        },
        {
            question: {
                en: "How accurate was the leveling of the pyramid base?",
                es: "¿Qué tan precisa fue la nivelación de la base de la pirámide?",
                de: "Wie genau war die Nivellierung der Pyramidenbasis?",
                nl: "Hoe nauwkeurig was de nivellering van de basis van de piramide?"
            },
            options: [
                { en: "Within 50 centimeters", es: "Dentro de 50 centímetros", de: "Innerhalb von 50 Zentimetern", nl: "Binnen 50 centimeter" },
                { en: "Within 10 centimeters", es: "Dentro de 10 centímetros", de: "Innerhalb von 10 Zentimetern", nl: "Binnen 10 centimeter" },
                { en: "Within 2.1 centimeters", es: "Dentro de 2,1 centímetros", de: "Innerhalb von 2,1 Zentimetern", nl: "Binnen 2,1 centimeter" },
                { en: "Perfectly level", es: "Perfectamente nivelado", de: "Perfekt eben", nl: "Perfect vlak" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid's base is remarkably level, with a maximum deviation of only 2.1 centimeters across its entire 230-meter width.",
                es: "La base de la Gran Pirámide es notablemente nivelada, con una desviación máxima de solo 2,1 centímetros en sus 230 metros de ancho.",
                de: "Die Basis der Großen Pyramide ist bemerkenswert eben, mit einer maximalen Abweichung von nur 2,1 Zentimetern über ihre gesamte 230-Meter-Breite.",
                nl: "De basis van de Grote Piramide is opmerkelijk vlak, met een maximale afwijking van slechts 2,1 centimeter over de gehele breedte van 230 meter."
            }
        },
        {
            question: {
                en: "What was used to achieve such precise leveling?",
                es: "¿Qué se usó para lograr una nivelación tan precisa?",
                de: "Was wurde verwendet, um eine so präzise Nivellierung zu erreichen?",
                nl: "Wat werd gebruikt om zo'n precieze nivellering te bereiken?"
            },
            options: [
                { en: "Modern laser levels", es: "Niveles láser modernos", de: "Moderne Lasernivelliergeräte", nl: "Moderne laserniveaus" },
                { en: "Water-filled trenches", es: "Trincheras llenas de agua", de: "Wassergefüllte Gräben", nl: "Met water gevulde greppels" },
                { en: "Spirit levels", es: "Niveles de burbuja", de: "Wasserwaagen", nl: "Waterpassen" },
                { en: "Eyesight alone", es: "Solo vista", de: "Nur Augenschein", nl: "Alleen op het oog" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Ancient Egyptians likely used water-filled trenches as a leveling tool, since water naturally finds a level surface.",
                es: "Los antiguos egipcios probablemente usaron trincheras llenas de agua como herramienta de nivelación, ya que el agua encuentra naturalmente una superficie nivelada.",
                de: "Die alten Ägypter verwendeten wahrscheinlich wassergefüllte Gräben als Nivellierungswerkzeug, da Wasser natürlich eine ebene Oberfläche findet.",
                nl: "Oude Egyptenaren gebruikten waarschijnlijk met water gevulde greppels als nivelleringsinstrument, omdat water van nature een vlak oppervlak vindt."
            }
        },
        {
            question: {
                en: "What evidence shows workers had medical care?",
                es: "¿Qué evidencia muestra que los trabajadores tenían atención médica?",
                de: "Welche Beweise zeigen, dass Arbeiter medizinische Versorgung hatten?",
                nl: "Welk bewijs toont aan dat arbeiders medische zorg hadden?"
            },
            options: [
                { en: "Written insurance policies", es: "Pólizas de seguro escritas", de: "Schriftliche Versicherungspolicen", nl: "Schriftelijke verzekeringspolissen" },
                { en: "Healed bone fractures in worker skeletons", es: "Fracturas óseas curadas en esqueletos de trabajadores", de: "Geheilte Knochenbrüche in Arbeiterskeletten", nl: "Genezen botbreuken in werknemersskeletten" },
                { en: "Hospital buildings", es: "Edificios de hospitales", de: "Krankenhausgebäude", nl: "Ziekenhuisgebouwen" },
                { en: "Medical prescriptions", es: "Recetas médicas", de: "Medizinische Rezepte", nl: "Medische voorschriften" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Worker skeletons show evidence of healed fractures and injuries, indicating they received medical treatment and care during construction.",
                es: "Los esqueletos de trabajadores muestran evidencia de fracturas y lesiones curadas, lo que indica que recibieron tratamiento médico y atención durante la construcción.",
                de: "Arbeiterskelette zeigen Beweise für geheilte Frakturen und Verletzungen, was darauf hindeutet, dass sie während des Baus medizinische Behandlung und Pflege erhielten.",
                nl: "Werknemersskeletten tonen bewijs van genezen breuken en verwondingen, wat aangeeft dat ze tijdens de bouw medische behandeling en zorg ontvingen."
            }
        },
        {
            question: {
                en: "What motivated workers to build the pyramids?",
                es: "¿Qué motivó a los trabajadores a construir las pirámides?",
                de: "Was motivierte die Arbeiter, die Pyramiden zu bauen?",
                nl: "Wat motiveerde arbeiders om de piramides te bouwen?"
            },
            options: [
                { en: "Force and slavery only", es: "Solo fuerza y esclavitud", de: "Nur Zwang und Sklaverei", nl: "Alleen dwang en slavernij" },
                { en: "Religious duty, payment, and national pride", es: "Deber religioso, pago y orgullo nacional", de: "Religiöse Pflicht, Bezahlung und Nationalstolz", nl: "Religieuze plicht, betaling en nationale trots" },
                { en: "Foreign invasion threat", es: "Amenaza de invasión extranjera", de: "Bedrohung durch ausländische Invasion", nl: "Dreiging van buitenlandse invasie" },
                { en: "Criminal punishment", es: "Castigo criminal", de: "Kriminalstrafe", nl: "Strafrechtelijke straf" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Workers were motivated by religious duty to the pharaoh (seen as a god), payment in food and goods, and pride in contributing to a national monument.",
                es: "Los trabajadores estaban motivados por el deber religioso hacia el faraón (visto como un dios), el pago en comida y bienes, y el orgullo de contribuir a un monumento nacional.",
                de: "Die Arbeiter waren motiviert durch religiöse Pflicht gegenüber dem Pharao (als Gott angesehen), Bezahlung in Form von Nahrung und Waren, und Stolz darauf, zu einem nationalen Monument beizutragen.",
                nl: "Arbeiders werden gemotiveerd door religieuze plicht jegens de farao (gezien als een god), betaling in voedsel en goederen, en trots op het bijdragen aan een nationaal monument."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level2Questions;
    }
})();
