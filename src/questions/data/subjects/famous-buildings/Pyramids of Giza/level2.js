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
        },
        {
            question: {
                en: "What was the original purpose of the air shafts?",
                es: "¿Cuál era el propósito original de los conductos de aire?",
                de: "Was war der ursprüngliche Zweck der Luftschächte?",
                nl: "Wat was het oorspronkelijke doel van de luchtschachten?"
            },
            options: [
                { en: "Ventilation for workers", es: "Ventilación para trabajadores", de: "Belüftung für Arbeiter", nl: "Ventilatie voor arbeiders" },
                { en: "Spiritual passages to stars", es: "Pasajes espirituales a las estrellas", de: "Spirituelle Durchgänge zu den Sternen", nl: "Spirituele doorgangen naar sterren" },
                { en: "Escape routes", es: "Rutas de escape", de: "Fluchtwege", nl: "Ontsnappingsroutes" },
                { en: "Water drainage", es: "Drenaje de agua", de: "Wasserentwässerung", nl: "Waterafvoer" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The air shafts likely had spiritual significance, pointing toward specific stars believed to be destinations for the pharaoh's soul.",
                es: "Los conductos de aire probablemente tenían significado espiritual, apuntando hacia estrellas específicas que se creían destinos del alma del faraón.",
                de: "Die Luftschächte hatten wahrscheinlich spirituelle Bedeutung und zeigten auf bestimmte Sterne, die als Ziele für die Seele des Pharaos galten.",
                nl: "De luchtschachten hadden waarschijnlijk spirituele betekenis en wezen naar specifieke sterren die werden beschouwd als bestemmingen voor de ziel van de farao."
            }
        },
        {
            question: {
                en: "How many entrances does the Great Pyramid have?",
                es: "¿Cuántas entradas tiene la Gran Pirámide?",
                de: "Wie viele Eingänge hat die Große Pyramide?",
                nl: "Hoeveel ingangen heeft de Grote Piramide?"
            },
            options: [
                { en: "One entrance", es: "Una entrada", de: "Ein Eingang", nl: "Eén ingang" },
                { en: "Two entrances", es: "Dos entradas", de: "Zwei Eingänge", nl: "Twee ingangen" },
                { en: "Three entrances", es: "Tres entradas", de: "Drei Eingänge", nl: "Drie ingangen" },
                { en: "Four entrances", es: "Cuatro entradas", de: "Vier Eingänge", nl: "Vier ingangen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Pyramid has two known entrances: the original entrance and the forced entrance created by Caliph Al-Mamun in 820 AD.",
                es: "La Gran Pirámide tiene dos entradas conocidas: la entrada original y la entrada forzada creada por el califa Al-Mamun en 820 d.C.",
                de: "Die Große Pyramide hat zwei bekannte Eingänge: den ursprünglichen Eingang und den erzwungenen Eingang, der 820 n. Chr. von Kalif Al-Mamun geschaffen wurde.",
                nl: "De Grote Piramide heeft twee bekende ingangen: de oorspronkelijke ingang en de geforceerde ingang gecreëerd door kalief Al-Mamun in 820 na Christus."
            }
        },
        {
            question: {
                en: "What ancient Greek historian wrote about the pyramids?",
                es: "¿Qué antiguo historiador griego escribió sobre las pirámides?",
                de: "Welcher antike griechische Historiker schrieb über die Pyramiden?",
                nl: "Welke oude Griekse historicus schreef over de piramides?"
            },
            options: [
                { en: "Plutarch", es: "Plutarco", de: "Plutarch", nl: "Plutarchus" },
                { en: "Herodotus", es: "Heródoto", de: "Herodot", nl: "Herodotus" },
                { en: "Thucydides", es: "Tucídides", de: "Thukydides", nl: "Thucydides" },
                { en: "Aristotle", es: "Aristóteles", de: "Aristoteles", nl: "Aristoteles" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Herodotus visited Egypt around 450 BC and wrote detailed accounts of the pyramids, though some of his information was likely second-hand.",
                es: "Heródoto visitó Egipto alrededor del 450 a.C. y escribió relatos detallados de las pirámides, aunque parte de su información probablemente era de segunda mano.",
                de: "Herodot besuchte Ägypten um 450 v. Chr. und schrieb detaillierte Berichte über die Pyramiden, obwohl einige seiner Informationen wahrscheinlich aus zweiter Hand stammten.",
                nl: "Herodotus bezocht Egypte rond 450 voor Christus en schreef gedetailleerde verslagen van de piramides, hoewel sommige van zijn informatie waarschijnlijk uit de tweede hand kwam."
            }
        },
        {
            question: {
                en: "What season was most construction work done?",
                es: "¿En qué temporada se realizaba la mayor parte del trabajo de construcción?",
                de: "In welcher Jahreszeit wurde der meiste Bau durchgeführt?",
                nl: "In welk seizoen werd het meeste bouwwerk gedaan?"
            },
            options: [
                { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
                { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
                { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
                { en: "Flood season", es: "Temporada de inundaciones", de: "Überschwemmungssaison", nl: "Overstromingsseizoen" }
            ],
            correctIndex: 3,
            explanation: {
                en: "Most construction work was done during the Nile flood season when farmers couldn't work their fields and were available for labor.",
                es: "La mayor parte del trabajo de construcción se realizaba durante la temporada de inundaciones del Nilo cuando los agricultores no podían trabajar sus campos y estaban disponibles para trabajar.",
                de: "Die meiste Bauarbeit wurde während der Nilüberschwemmungssaison durchgeführt, wenn Bauern ihre Felder nicht bearbeiten konnten und für Arbeit verfügbar waren.",
                nl: "Het meeste bouwwerk werd gedaan tijdens het overstromingsseizoen van de Nijl, wanneer boeren hun velden niet konden bewerken en beschikbaar waren voor arbeid."
            }
        },
        {
            question: {
                en: "What was found in the King's Chamber?",
                es: "¿Qué se encontró en la Cámara del Rey?",
                de: "Was wurde in der Königskammer gefunden?",
                nl: "Wat werd er gevonden in de Koningskamer?"
            },
            options: [
                { en: "Gold treasures", es: "Tesoros de oro", de: "Goldschätze", nl: "Gouden schatten" },
                { en: "An empty sarcophagus", es: "Un sarcófago vacío", de: "Ein leerer Sarkophag", nl: "Een lege sarcofaag" },
                { en: "Ancient scrolls", es: "Pergaminos antiguos", de: "Alte Schriftrollen", nl: "Oude rollen" },
                { en: "Mummies", es: "Momias", de: "Mumien", nl: "Mummies" }
            ],
            correctIndex: 1,
            explanation: {
                en: "When first opened, the King's Chamber contained only an empty granite sarcophagus. Any treasures or body had been removed in antiquity.",
                es: "Cuando se abrió por primera vez, la Cámara del Rey contenía solo un sarcófago de granito vacío. Cualquier tesoro o cuerpo había sido removido en la antigüedad.",
                de: "Als sie zum ersten Mal geöffnet wurde, enthielt die Königskammer nur einen leeren Granitsarkophag. Alle Schätze oder Körper waren in der Antike entfernt worden.",
                nl: "Toen deze voor het eerst werd geopend, bevatte de Koningskamer alleen een lege granieten sarcofaag. Eventuele schatten of lichaam waren in de oudheid verwijderd."
            }
        },
        {
            question: {
                en: "How accurate is the pyramid's alignment to true north?",
                es: "¿Qué tan precisa es la alineación de la pirámide con el norte verdadero?",
                de: "Wie genau ist die Ausrichtung der Pyramide nach echtem Norden?",
                nl: "Hoe nauwkeurig is de uitlijning van de piramide op het ware noorden?"
            },
            options: [
                { en: "Within 5 degrees", es: "Dentro de 5 grados", de: "Innerhalb von 5 Grad", nl: "Binnen 5 graden" },
                { en: "Within 1 degree", es: "Dentro de 1 grado", de: "Innerhalb von 1 Grad", nl: "Binnen 1 graad" },
                { en: "Within 3/60th of a degree", es: "Dentro de 3/60 de grado", de: "Innerhalb von 3/60 Grad", nl: "Binnen 3/60 van een graad" },
                { en: "Not aligned at all", es: "No alineada en absoluto", de: "Überhaupt nicht ausgerichtet", nl: "Helemaal niet uitgelijnd" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid is aligned to true north with an accuracy of 3/60th of one degree, an incredible achievement for ancient builders.",
                es: "La Gran Pirámide está alineada con el norte verdadero con una precisión de 3/60 de un grado, un logro increíble para los constructores antiguos.",
                de: "Die Große Pyramide ist mit einer Genauigkeit von 3/60 Grad nach echtem Norden ausgerichtet, eine unglaubliche Leistung der alten Baumeister.",
                nl: "De Grote Piramide is uitgelijnd op het ware noorden met een nauwkeurigheid van 3/60 van een graad, een ongelooflijke prestatie voor oude bouwers."
            }
        },
        {
            question: {
                en: "What was the total weight of the Great Pyramid?",
                es: "¿Cuál era el peso total de la Gran Pirámide?",
                de: "Wie viel wog die Große Pyramide insgesamt?",
                nl: "Wat was het totale gewicht van de Grote Piramide?"
            },
            options: [
                { en: "1 million tons", es: "1 millón de toneladas", de: "1 Million Tonnen", nl: "1 miljoen ton" },
                { en: "3 million tons", es: "3 millones de toneladas", de: "3 Millionen Tonnen", nl: "3 miljoen ton" },
                { en: "6 million tons", es: "6 millones de toneladas", de: "6 Millionen Tonnen", nl: "6 miljoen ton" },
                { en: "10 million tons", es: "10 millones de toneladas", de: "10 Millionen Tonnen", nl: "10 miljoen ton" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid originally weighed approximately 6 million tons, making it one of the heaviest structures ever built by humans.",
                es: "La Gran Pirámide originalmente pesaba aproximadamente 6 millones de toneladas, convirtiéndola en una de las estructuras más pesadas jamás construidas por humanos.",
                de: "Die Große Pyramide wog ursprünglich etwa 6 Millionen Tonnen und ist damit eines der schwersten jemals von Menschen gebauten Bauwerke.",
                nl: "De Grote Piramide woog oorspronkelijk ongeveer 6 miljoen ton, waardoor het een van de zwaarste ooit door mensen gebouwde constructies is."
            }
        },
        {
            question: {
                en: "What type of boat was found near the pyramid?",
                es: "¿Qué tipo de barco se encontró cerca de la pirámide?",
                de: "Welche Art von Boot wurde in der Nähe der Pyramide gefunden?",
                nl: "Wat voor soort boot werd gevonden bij de piramide?"
            },
            options: [
                { en: "A warship", es: "Un buque de guerra", de: "Ein Kriegsschiff", nl: "Een oorlogsschip" },
                { en: "A solar barque", es: "Una barca solar", de: "Eine Sonnenbarke", nl: "Een zonnebarque" },
                { en: "A fishing boat", es: "Un barco de pesca", de: "Ein Fischerboot", nl: "Een vissersboot" },
                { en: "A trade vessel", es: "Un barco comercial", de: "Ein Handelsschiff", nl: "Een handelsschip" }
            ],
            correctIndex: 1,
            explanation: {
                en: "A dismantled solar barque (ceremonial boat) was found in a pit near Khufu's pyramid, meant to carry the pharaoh's soul through the sky.",
                es: "Se encontró una barca solar desmantelada (bote ceremonial) en un pozo cerca de la pirámide de Keops, destinada a transportar el alma del faraón por el cielo.",
                de: "Eine zerlegte Sonnenbarke (Zeremonialboot) wurde in einer Grube in der Nähe von Chufus Pyramide gefunden, bestimmt, die Seele des Pharaos durch den Himmel zu tragen.",
                nl: "Een gedemonteerde zonnebarque (ceremoniële boot) werd gevonden in een put bij de piramide van Khufu, bedoeld om de ziel van de farao door de lucht te dragen."
            }
        },
        {
            question: {
                en: "What happened to most of the pyramid's casing stones?",
                es: "¿Qué pasó con la mayoría de las piedras de revestimiento de la pirámide?",
                de: "Was geschah mit den meisten Verkleidungssteinen der Pyramide?",
                nl: "Wat gebeurde er met de meeste bekledingsstenen van de piramide?"
            },
            options: [
                { en: "They melted in the sun", es: "Se derritieron al sol", de: "Sie schmolzen in der Sonne", nl: "Ze smolten in de zon" },
                { en: "They were stolen for building projects", es: "Fueron robados para proyectos de construcción", de: "Sie wurden für Bauprojekte gestohlen", nl: "Ze werden gestolen voor bouwprojecten" },
                { en: "They crumbled naturally", es: "Se desmoronaron naturalmente", de: "Sie bröckelten natürlich ab", nl: "Ze verkruimelden natuurlijk" },
                { en: "They were painted over", es: "Fueron pintados", de: "Sie wurden übermalt", nl: "Ze werden overschilderd" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Most of the white Tura limestone casing stones were removed over centuries and used to build mosques and other buildings in Cairo.",
                es: "La mayoría de las piedras de revestimiento de piedra caliza blanca de Tura fueron removidas durante siglos y utilizadas para construir mezquitas y otros edificios en El Cairo.",
                de: "Die meisten weißen Tura-Kalkstein-Verkleidungssteine wurden über Jahrhunderte entfernt und zum Bau von Moscheen und anderen Gebäuden in Kairo verwendet.",
                nl: "De meeste witte Tura-kalksteen bekledingsstenen werden gedurende eeuwen verwijderd en gebruikt om moskeeën en andere gebouwen in Caïro te bouwen."
            }
        },
        {
            question: {
                en: "How many chambers are inside the Great Pyramid?",
                es: "¿Cuántas cámaras hay dentro de la Gran Pirámide?",
                de: "Wie viele Kammern befinden sich in der Großen Pyramide?",
                nl: "Hoeveel kamers zijn er in de Grote Piramide?"
            },
            options: [
                { en: "Two chambers", es: "Dos cámaras", de: "Zwei Kammern", nl: "Twee kamers" },
                { en: "Three chambers", es: "Tres cámaras", de: "Drei Kammern", nl: "Drie kamers" },
                { en: "Five chambers", es: "Cinco cámaras", de: "Fünf Kammern", nl: "Vijf kamers" },
                { en: "Ten chambers", es: "Diez cámaras", de: "Zehn Kammern", nl: "Tien kamers" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Pyramid has three main chambers: the King's Chamber, the Queen's Chamber, and the unfinished Subterranean Chamber.",
                es: "La Gran Pirámide tiene tres cámaras principales: la Cámara del Rey, la Cámara de la Reina y la Cámara Subterránea inacabada.",
                de: "Die Große Pyramide hat drei Hauptkammern: die Königskammer, die Königinnenkammer und die unvollendete Subterrane Kammer.",
                nl: "De Grote Piramide heeft drie hoofdkamers: de Koningskamer, de Koninginnenkamer en de onafgemaakte Ondergrondse Kamer."
            }
        },
        {
            question: {
                en: "What title did Khufu's chief architect likely hold?",
                es: "¿Qué título tenía probablemente el arquitecto jefe de Keops?",
                de: "Welchen Titel hatte wahrscheinlich Chufus Chefarchitekt?",
                nl: "Welke titel had waarschijnlijk de hoofdarchitect van Khufu?"
            },
            options: [
                { en: "Pharaoh's Builder", es: "Constructor del Faraón", de: "Baumeister des Pharaos", nl: "Bouwer van de Farao" },
                { en: "Overseer of Works", es: "Supervisor de Obras", de: "Aufseher der Arbeiten", nl: "Opzichter van Werken" },
                { en: "Royal Engineer", es: "Ingeniero Real", de: "Königlicher Ingenieur", nl: "Koninklijk Ingenieur" },
                { en: "Master Mason", es: "Maestro Masón", de: "Meistersteinmetz", nl: "Meester Metselaar" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Hemiunu, Khufu's vizier and likely chief architect, held the title 'Overseer of All the King's Works' and managed the pyramid's construction.",
                es: "Hemiunu, visir de Keops y probable arquitecto jefe, ostentaba el título de 'Supervisor de Todas las Obras del Rey' y gestionó la construcción de la pirámide.",
                de: "Hemiunu, Chufus Wesir und wahrscheinlicher Chefarchitekt, trug den Titel 'Aufseher aller Werke des Königs' und leitete den Bau der Pyramide.",
                nl: "Hemiunu, Khufu's vizier en waarschijnlijk hoofdarchitect, had de titel 'Opzichter van Alle Werken van de Koning' en beheerde de bouw van de piramide."
            }
        },
        {
            question: {
                en: "What was discovered inside sealed doors in 2002?",
                es: "¿Qué se descubrió dentro de puertas selladas en 2002?",
                de: "Was wurde 2002 hinter versiegelten Türen entdeckt?",
                nl: "Wat werd ontdekt achter verzegelde deuren in 2002?"
            },
            options: [
                { en: "Gold treasure", es: "Tesoro de oro", de: "Goldschatz", nl: "Gouden schat" },
                { en: "Another sealed door", es: "Otra puerta sellada", de: "Eine weitere versiegelte Tür", nl: "Nog een verzegelde deur" },
                { en: "Ancient scrolls", es: "Pergaminos antiguos", de: "Alte Schriftrollen", nl: "Oude rollen" },
                { en: "Hidden chamber", es: "Cámara oculta", de: "Verborgene Kammer", nl: "Verborgen kamer" }
            ],
            correctIndex: 1,
            explanation: {
                en: "In 2002, a robot camera explored a shaft and found another sealed door behind the first, deepening the mystery of the pyramid's interior.",
                es: "En 2002, una cámara robot exploró un conducto y encontró otra puerta sellada detrás de la primera, profundizando el misterio del interior de la pirámide.",
                de: "Im Jahr 2002 erkundete eine Roboterkamera einen Schacht und fand eine weitere versiegelte Tür hinter der ersten, was das Geheimnis des Pyramideninneren vertiefte.",
                nl: "In 2002 onderzocht een robotcamera een schacht en vond nog een verzegelde deur achter de eerste, wat het mysterie van het binnenste van de piramide verdiepte."
            }
        },
        {
            question: {
                en: "Where did workers live during construction?",
                es: "¿Dónde vivían los trabajadores durante la construcción?",
                de: "Wo lebten die Arbeiter während des Baus?",
                nl: "Waar woonden arbeiders tijdens de bouw?"
            },
            options: [
                { en: "Inside the pyramids", es: "Dentro de las pirámides", de: "In den Pyramiden", nl: "In de piramides" },
                { en: "In Cairo", es: "En El Cairo", de: "In Kairo", nl: "In Caïro" },
                { en: "In worker villages near the site", es: "En aldeas de trabajadores cerca del sitio", de: "In Arbeiterdörfern in der Nähe", nl: "In arbeidersdorpen bij de site" },
                { en: "They commuted daily from afar", es: "Viajaban diariamente desde lejos", de: "Sie pendelten täglich von weit her", nl: "Ze reisden dagelijks van ver" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Archaeological evidence shows workers lived in purpose-built villages near the pyramids, with housing, bakeries, and workshops.",
                es: "La evidencia arqueológica muestra que los trabajadores vivían en aldeas construidas especialmente cerca de las pirámides, con viviendas, panaderías y talleres.",
                de: "Archäologische Beweise zeigen, dass Arbeiter in speziell gebauten Dörfern in der Nähe der Pyramiden lebten, mit Wohnungen, Bäckereien und Werkstätten.",
                nl: "Archeologisch bewijs toont aan dat arbeiders woonden in speciaal gebouwde dorpen bij de piramides, met huisvesting, bakkerijen en werkplaatsen."
            }
        },
        {
            question: {
                en: "What food was commonly given to workers?",
                es: "¿Qué comida se daba comúnmente a los trabajadores?",
                de: "Welche Nahrung wurde den Arbeitern üblicherweise gegeben?",
                nl: "Welk voedsel werd gewoonlijk aan arbeiders gegeven?"
            },
            options: [
                { en: "Bread, beer, and onions", es: "Pan, cerveza y cebollas", de: "Brot, Bier und Zwiebeln", nl: "Brood, bier en uien" },
                { en: "Rice and fish", es: "Arroz y pescado", de: "Reis und Fisch", nl: "Rijst en vis" },
                { en: "Meat only", es: "Solo carne", de: "Nur Fleisch", nl: "Alleen vlees" },
                { en: "Fruits and vegetables", es: "Frutas y verduras", de: "Obst und Gemüse", nl: "Fruit en groenten" }
            ],
            correctIndex: 0,
            explanation: {
                en: "Workers were typically paid with bread, beer, and onions, which provided necessary calories and nutrition for the hard physical labor.",
                es: "Los trabajadores recibían típicamente pan, cerveza y cebollas, que proporcionaban las calorías y nutrición necesarias para el duro trabajo físico.",
                de: "Arbeiter wurden typischerweise mit Brot, Bier und Zwiebeln bezahlt, die notwendige Kalorien und Nahrung für die harte körperliche Arbeit lieferten.",
                nl: "Arbeiders werden doorgaans betaald met brood, bier en uien, die de nodige calorieën en voeding leverden voor het zware fysieke werk."
            }
        },
        {
            question: {
                en: "What does the name 'Khufu' mean in Egyptian?",
                es: "¿Qué significa el nombre 'Keops' en egipcio?",
                de: "Was bedeutet der Name 'Chufu' im Ägyptischen?",
                nl: "Wat betekent de naam 'Khufu' in het Egyptisch?"
            },
            options: [
                { en: "Great builder", es: "Gran constructor", de: "Großer Baumeister", nl: "Grote bouwer" },
                { en: "He protects me", es: "Él me protege", de: "Er schützt mich", nl: "Hij beschermt mij" },
                { en: "Son of Ra", es: "Hijo de Ra", de: "Sohn von Ra", nl: "Zoon van Ra" },
                { en: "King of kings", es: "Rey de reyes", de: "König der Könige", nl: "Koning der koningen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Khufu's name means 'He protects me,' referring to the god Khnum who was believed to protect the pharaoh.",
                es: "El nombre de Keops significa 'Él me protege,' refiriéndose al dios Jnum que se creía protegía al faraón.",
                de: "Chufus Name bedeutet 'Er schützt mich,' und bezieht sich auf den Gott Chnum, von dem geglaubt wurde, dass er den Pharao schützt.",
                nl: "Khufu's naam betekent 'Hij beschermt mij,' verwijzend naar de god Khnum waarvan werd geloofd dat hij de farao beschermde."
            }
        },
        {
            question: {
                en: "What instrument helped align the pyramid so precisely?",
                es: "¿Qué instrumento ayudó a alinear la pirámide con tanta precisión?",
                de: "Welches Instrument half, die Pyramide so präzise auszurichten?",
                nl: "Welk instrument hielp de piramide zo nauwkeurig uit te lijnen?"
            },
            options: [
                { en: "A compass", es: "Una brújula", de: "Ein Kompass", nl: "Een kompas" },
                { en: "Star observations", es: "Observaciones de estrellas", de: "Sternbeobachtungen", nl: "Sterrenwaarnemingen" },
                { en: "A sundial", es: "Un reloj de sol", de: "Eine Sonnenuhr", nl: "Een zonnewijzer" },
                { en: "A magnetic needle", es: "Una aguja magnética", de: "Eine Magnetnadel", nl: "Een magneetnaald" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Ancient Egyptians likely used observations of circumpolar stars to determine true north and achieve the pyramid's precise alignment.",
                es: "Los antiguos egipcios probablemente usaron observaciones de estrellas circumpolares para determinar el norte verdadero y lograr la alineación precisa de la pirámide.",
                de: "Die alten Ägypter verwendeten wahrscheinlich Beobachtungen zirkumpolarer Sterne, um echten Norden zu bestimmen und die präzise Ausrichtung der Pyramide zu erreichen.",
                nl: "Oude Egyptenaren gebruikten waarschijnlijk waarnemingen van circumpolaire sterren om het ware noorden te bepalen en de precieze uitlijning van de piramide te bereiken."
            }
        },
        {
            question: {
                en: "What temperature is maintained inside the pyramid?",
                es: "¿Qué temperatura se mantiene dentro de la pirámide?",
                de: "Welche Temperatur wird in der Pyramide aufrechterhalten?",
                nl: "Welke temperatuur wordt in de piramide gehandhaafd?"
            },
            options: [
                { en: "Same as outside", es: "Igual que afuera", de: "Gleich wie draußen", nl: "Hetzelfde als buiten" },
                { en: "Always freezing", es: "Siempre congelado", de: "Immer gefroren", nl: "Altijd bevroren" },
                { en: "Constant 20°C (68°F)", es: "Constante 20°C (68°F)", de: "Konstant 20°C (68°F)", nl: "Constant 20°C (68°F)" },
                { en: "Extremely hot", es: "Extremadamente caliente", de: "Extrem heiß", nl: "Extreem heet" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The interior of the Great Pyramid maintains a constant temperature of about 20°C (68°F) regardless of outside conditions.",
                es: "El interior de la Gran Pirámide mantiene una temperatura constante de aproximadamente 20°C (68°F) independientemente de las condiciones exteriores.",
                de: "Das Innere der Großen Pyramide hält eine konstante Temperatur von etwa 20°C (68°F) aufrecht, unabhängig von den Außenbedingungen.",
                nl: "Het binnenste van de Grote Piramide handhaaft een constante temperatuur van ongeveer 20°C (68°F), ongeacht de buitenomstandigheden."
            }
        },
        {
            question: {
                en: "How many sides does the Great Pyramid actually have?",
                es: "¿Cuántos lados tiene realmente la Gran Pirámide?",
                de: "Wie viele Seiten hat die Große Pyramide tatsächlich?",
                nl: "Hoeveel zijden heeft de Grote Piramide eigenlijk?"
            },
            options: [
                { en: "Three sides", es: "Tres lados", de: "Drei Seiten", nl: "Drie zijden" },
                { en: "Four sides", es: "Cuatro lados", de: "Vier Seiten", nl: "Vier zijden" },
                { en: "Eight sides", es: "Ocho lados", de: "Acht Seiten", nl: "Acht zijden" },
                { en: "Six sides", es: "Seis lados", de: "Sechs Seiten", nl: "Zes zijden" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Pyramid actually has eight sides due to a subtle concave indentation on each of the four faces, visible only from the air at certain times.",
                es: "La Gran Pirámide en realidad tiene ocho lados debido a una sutil hendidura cóncava en cada una de las cuatro caras, visible solo desde el aire en ciertos momentos.",
                de: "Die Große Pyramide hat tatsächlich acht Seiten aufgrund einer subtilen konkaven Vertiefung auf jeder der vier Flächen, die nur aus der Luft zu bestimmten Zeiten sichtbar ist.",
                nl: "De Grote Piramide heeft eigenlijk acht zijden vanwege een subtiele holle inkeping op elk van de vier vlakken, alleen zichtbaar vanuit de lucht op bepaalde momenten."
            }
        },
        {
            question: {
                en: "What modern technology discovered new voids in 2017?",
                es: "¿Qué tecnología moderna descubrió nuevos vacíos en 2017?",
                de: "Welche moderne Technologie entdeckte 2017 neue Hohlräume?",
                nl: "Welke moderne technologie ontdekte nieuwe holtes in 2017?"
            },
            options: [
                { en: "X-rays", es: "Rayos X", de: "Röntgenstrahlen", nl: "Röntgenstralen" },
                { en: "Cosmic ray muon imaging", es: "Imágenes de muones de rayos cósmicos", de: "Kosmische Myonen-Bildgebung", nl: "Kosmische straling muon-beeldvorming" },
                { en: "Sonar", es: "Sonar", de: "Sonar", nl: "Sonar" },
                { en: "Ground radar", es: "Radar terrestre", de: "Bodenradar", nl: "Grondradar" }
            ],
            correctIndex: 1,
            explanation: {
                en: "In 2017, scientists used cosmic ray muon imaging to discover a large previously unknown void above the Grand Gallery in the Great Pyramid.",
                es: "En 2017, los científicos usaron imágenes de muones de rayos cósmicos para descubrir un gran vacío previamente desconocido sobre la Gran Galería en la Gran Pirámide.",
                de: "Im Jahr 2017 verwendeten Wissenschaftler kosmische Myonen-Bildgebung, um einen großen zuvor unbekannten Hohlraum über der Großen Galerie in der Großen Pyramide zu entdecken.",
                nl: "In 2017 gebruikten wetenschappers kosmische straling muon-beeldvorming om een grote voorheen onbekende holte boven de Grote Galerij in de Grote Piramide te ontdekken."
            }
        },
        {
            question: {
                en: "Who was buried in the smallest pyramid?",
                es: "¿Quién fue enterrado en la pirámide más pequeña?",
                de: "Wer wurde in der kleinsten Pyramide begraben?",
                nl: "Wie werd begraven in de kleinste piramide?"
            },
            options: [
                { en: "Khufu", es: "Keops", de: "Cheops", nl: "Khufu" },
                { en: "Khafre", es: "Kefrén", de: "Chephren", nl: "Khafre" },
                { en: "Menkaure", es: "Micerino", de: "Mykerinos", nl: "Menkaure" },
                { en: "Djoser", es: "Djoser", de: "Djoser", nl: "Djoser" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Pharaoh Menkaure was buried in the smallest of the three main pyramids at Giza, which is about one-tenth the mass of the Great Pyramid.",
                es: "El faraón Micerino fue enterrado en la más pequeña de las tres pirámides principales de Giza, que tiene aproximadamente una décima parte de la masa de la Gran Pirámide.",
                de: "Pharao Mykerinos wurde in der kleinsten der drei Hauptpyramiden von Gizeh begraben, die etwa ein Zehntel der Masse der Großen Pyramide hat.",
                nl: "Farao Menkaure werd begraven in de kleinste van de drie hoofdpiramides in Giza, die ongeveer een tiende van de massa van de Grote Piramide heeft."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level2Questions;
    }
})();
