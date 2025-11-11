// Quiz - Level 6: Drinken - Thee (Tea Processing & Oxidation)
(function() {
    "use strict";

    const level6 = {
        name: {
            en: "Tea Processing & Oxidation",
            es: "Procesamiento y Oxidación del Té",
            de: "Tee-Verarbeitung & Oxidation",
            nl: "Thee Verwerking & Oxidatie"
        },
        questions: [
            {
                question: {
                    en: "What determines the difference between green, oolong, and black tea from the same plant?",
                    es: "¿Qué determina la diferencia entre té verde, oolong y negro de la misma planta?",
                    de: "Was bestimmt den Unterschied zwischen grünem, Oolong- und schwarzem Tee von derselben Pflanze?",
                    nl: "Wat bepaalt het verschil tussen groene, oolong en zwarte thee van dezelfde plant?"
                },
                options: [
                    {
                        en: "Level of oxidation - from 0% (green) to 100% (black)",
                        es: "Nivel de oxidación - del 0% (verde) al 100% (negro)",
                        de: "Oxidationsgrad - von 0% (grün) bis 100% (schwarz)",
                        nl: "Oxidatie niveau - van 0% (groen) tot 100% (zwart)"
                    },
                    {
                        en: "Different harvesting seasons throughout the year",
                        es: "Diferentes temporadas de cosecha durante el año",
                        de: "Verschiedene Erntezeiten während des Jahres",
                        nl: "Verschillende oogst seizoenen gedurende het jaar"
                    },
                    {
                        en: "Adding different flavoring agents during processing",
                        es: "Agregar diferentes agentes saborizantes durante el procesamiento",
                        de: "Hinzufügen verschiedener Aromastoffe während der Verarbeitung",
                        nl: "Het toevoegen van verschillende smaakstoffen tijdens verwerking"
                    },
                    {
                        en: "Using leaves from different parts of the plant",
                        es: "Usar hojas de diferentes partes de la planta",
                        de: "Verwendung von Blättern aus verschiedenen Pflanzenteilen",
                        nl: "Het gebruiken van bladeren van verschillende delen van de plant"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The level of oxidation determines tea type: green tea is unoxidized (0%), oolong is partially oxidized (20-80%), and black tea is fully oxidized (100%), all from Camellia sinensis.",
                    es: "El nivel de oxidación determina el tipo de té: el té verde no está oxidado (0%), el oolong está parcialmente oxidado (20-80%), y el té negro está completamente oxidado (100%), todos de Camellia sinensis.",
                    de: "Der Oxidationsgrad bestimmt den Teetyp: Grüner Tee ist unoxidiert (0%), Oolong ist teilweise oxidiert (20-80%), und schwarzer Tee ist vollständig oxidiert (100%), alle von Camellia sinensis.",
                    nl: "Het oxidatie niveau bepaalt het thee type: groene thee is ongeoxideerd (0%), oolong is gedeeltelijk geoxideerd (20-80%), en zwarte thee is volledig geoxideerd (100%), allemaal van Camellia sinensis."
                }
            },
            {
                question: {
                    en: "What is the critical 'kill-green' (sha qing) process in tea manufacturing?",
                    es: "¿Qué es el proceso crítico de 'matar el verde' (sha qing) en la fabricación de té?",
                    de: "Was ist der kritische 'Grün-töten' (Sha Qing) Prozess in der Teeherstellung?",
                    nl: "Wat is het kritieke 'kill-green' (sha qing) proces in thee productie?"
                },
                options: [
                    {
                        en: "Heat treatment to halt oxidation and preserve green tea's fresh character",
                        es: "Tratamiento térmico para detener la oxidación y preservar el carácter fresco del té verde",
                        de: "Wärmebehandlung zur Stopp der Oxidation und Erhaltung des frischen Charakters von grünem Tee",
                        nl: "Warmte behandeling om oxidatie te stoppen en het verse karakter van groene thee te bewaren"
                    },
                    {
                        en: "Removing all green leaves from the harvest",
                        es: "Eliminar todas las hojas verdes de la cosecha",
                        de: "Entfernen aller grünen Blätter von der Ernte",
                        nl: "Het verwijderen van alle groene bladeren van de oogst"
                    },
                    {
                        en: "Adding chemicals to change leaf color",
                        es: "Agregar químicos para cambiar el color de las hojas",
                        de: "Hinzufügen von Chemikalien zur Farbveränderung der Blätter",
                        nl: "Het toevoegen van chemicaliën om bladkleur te veranderen"
                    },
                    {
                        en: "Filtering out chlorophyll during processing",
                        es: "Filtrar la clorofila durante el procesamiento",
                        de: "Herausfiltern von Chlorophyll während der Verarbeitung",
                        nl: "Het uitfilteren van chlorofyl tijdens verwerking"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Kill-green (sha qing) involves rapid heating (pan-firing or steaming) to denature oxidizing enzymes, stopping oxidation to preserve green tea's fresh, grassy flavors and green color.",
                    es: "Matar el verde (sha qing) involucra calentamiento rápido (fritura en sartén o vaporización) para desnaturalizar enzimas oxidantes, deteniendo la oxidación para preservar los sabores frescos y herbáceos del té verde y su color verde.",
                    de: "Grün-töten (Sha Qing) beinhaltet schnelles Erhitzen (Pfannenrösten oder Dämpfen) zur Denaturierung oxidierender Enzyme, Stoppen der Oxidation zur Erhaltung der frischen, grasigen Aromen und grünen Farbe von grünem Tee.",
                    nl: "Kill-green (sha qing) houdt snelle verwarming in (pan-braden of stomen) om oxiderende enzymen te denatureren, oxidatie stoppend om groene thee's verse, grasachtige smaken en groene kleur te bewaren."
                }
            },
            {
                question: {
                    en: "What is the traditional Chinese 'withering' (wei diao) process designed to achieve?",
                    es: "¿Qué está diseñado para lograr el proceso tradicional chino de 'marchitamiento' (wei diao)?",
                    de: "Was ist der traditionelle chinesische 'Welk'-Prozess (Wei Diao) darauf ausgelegt zu erreichen?",
                    nl: "Wat is het traditionele Chinese 'verwelkings' (wei diao) proces ontworpen om te bereiken?"
                },
                options: [
                    {
                        en: "Reduce moisture content and begin enzymatic breakdown for flavor development",
                        es: "Reducir el contenido de humedad e iniciar la descomposición enzimática para el desarrollo del sabor",
                        de: "Feuchtigkeitsgehalt reduzieren und enzymatischen Abbau für Geschmacksentwicklung beginnen",
                        nl: "Vocht gehalte verminderen en enzymatische afbraak beginnen voor smaak ontwikkeling"
                    },
                    {
                        en: "Remove all water to preserve the leaves",
                        es: "Eliminar toda el agua para preservar las hojas",
                        de: "Alles Wasser entfernen, um die Blätter zu konservieren",
                        nl: "Al het water verwijderen om de bladeren te bewaren"
                    },
                    {
                        en: "Add moisture to soften tough leaves",
                        es: "Agregar humedad para ablandar hojas duras",
                        de: "Feuchtigkeit hinzufügen, um harte Blätter zu erweichen",
                        nl: "Vocht toevoegen om harde bladeren te verzachten"
                    },
                    {
                        en: "Cool the leaves after heating",
                        es: "Enfriar las hojas después del calentamiento",
                        de: "Blätter nach dem Erhitzen abkühlen",
                        nl: "De bladeren afkoelen na verhitting"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Withering reduces leaf moisture from 75-80% to 55-60% and initiates enzymatic processes that break down chlorophyll and develop precursor compounds for complex tea flavors.",
                    es: "El marchitamiento reduce la humedad de las hojas del 75-80% al 55-60% e inicia procesos enzimáticos que descomponen la clorofila y desarrollan compuestos precursores para sabores complejos del té.",
                    de: "Welken reduziert die Blattfeuchtigkeit von 75-80% auf 55-60% und initiiert enzymatische Prozesse, die Chlorophyll abbauen und Vorläuferverbindungen für komplexe Teearomen entwickeln.",
                    nl: "Verwelken vermindert bladvocht van 75-80% naar 55-60% en initieert enzymatische processen die chlorofyl afbreken en voorloper verbindingen ontwikkelen voor complexe thee smaken."
                }
            },
            {
                question: {
                    en: "How does the 'rolling' (rou nian) process affect tea quality and character?",
                    es: "¿Cómo afecta el proceso de 'enrollado' (rou nian) la calidad y carácter del té?",
                    de: "Wie beeinflusst der 'Roll'-Prozess (Rou Nian) Teequalität und -charakter?",
                    nl: "Hoe beïnvloedt het 'rollen' (rou nian) proces thee kwaliteit en karakter?"
                },
                options: [
                    {
                        en: "Breaks cell walls to release oils and enzymes, shaping leaves for optimal extraction",
                        es: "Rompe las paredes celulares para liberar aceites y enzimas, dando forma a las hojas para extracción óptima",
                        de: "Bricht Zellwände auf, um Öle und Enzyme freizusetzen, formt Blätter für optimale Extraktion",
                        nl: "Breekt celwanden om oliën en enzymen vrij te maken, bladeren vormend voor optimale extractie"
                    },
                    {
                        en: "Simply compresses leaves to reduce storage space",
                        es: "Simplemente comprime las hojas para reducir el espacio de almacenamiento",
                        de: "Presst einfach Blätter zusammen, um Lagerplatz zu reduzieren",
                        nl: "Drukt simpelweg bladeren samen om opslag ruimte te verminderen"
                    },
                    {
                        en: "Adds moisture back to dried leaves",
                        es: "Agrega humedad de vuelta a las hojas secas",
                        de: "Fügt getrockneten Blättern wieder Feuchtigkeit hinzu",
                        nl: "Voegt vocht toe aan gedroogde bladeren"
                    },
                    {
                        en: "Removes stems and unwanted plant material",
                        es: "Elimina tallos y material vegetal no deseado",
                        de: "Entfernt Stiele und unerwünschtes Pflanzenmaterial",
                        nl: "Verwijdert stengels en ongewenst plantenmateriaal"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Rolling breaks cell walls to release essential oils and enzymes, facilitates oxidation for flavor development, and shapes leaves into tight curls that unfurl during brewing for better extraction.",
                    es: "El enrollado rompe las paredes celulares para liberar aceites esenciales y enzimas, facilita la oxidación para el desarrollo del sabor, y da forma a las hojas en rizos apretados que se despliegan durante la preparación para mejor extracción.",
                    de: "Rollen bricht Zellwände auf, um ätherische Öle und Enzyme freizusetzen, erleichtert Oxidation für Geschmacksentwicklung und formt Blätter in feste Locken, die sich beim Aufbrühen für bessere Extraktion entfalten.",
                    nl: "Rollen breekt celwanden om essentiële oliën en enzymen vrij te maken, faciliteert oxidatie voor smaak ontwikkeling, en vormt bladeren in strakke krullen die zich ontvouwen tijdens het zetten voor betere extractie."
                }
            },
            {
                question: {
                    en: "What is the purpose of 'firing' or 'drying' (hong gan) in tea processing?",
                    es: "¿Cuál es el propósito del 'tostado' o 'secado' (hong gan) en el procesamiento del té?",
                    de: "Was ist der Zweck des 'Röstens' oder 'Trocknens' (Hong Gan) in der Teeverarbeitung?",
                    nl: "Wat is het doel van 'roosteren' of 'drogen' (hong gan) in thee verwerking?"
                },
                options: [
                    {
                        en: "Remove remaining moisture, halt oxidation, and develop final flavor profile",
                        es: "Eliminar la humedad restante, detener la oxidación y desarrollar el perfil de sabor final",
                        de: "Restfeuchtigkeit entfernen, Oxidation stoppen und finales Geschmacksprofil entwickeln",
                        nl: "Resterende vocht verwijderen, oxidatie stoppen en finale smaakprofiel ontwikkelen"
                    },
                    {
                        en: "Add smoky flavors through wood burning",
                        es: "Agregar sabores ahumados a través de quema de madera",
                        de: "Rauchige Aromen durch Holzverbrennung hinzufügen",
                        nl: "Rokerige smaken toevoegen door hout verbranding"
                    },
                    {
                        en: "Change the color of the tea leaves",
                        es: "Cambiar el color de las hojas de té",
                        de: "Farbe der Teeblätter ändern",
                        nl: "De kleur van thee bladeren veranderen"
                    },
                    {
                        en: "Increase caffeine content through heat treatment",
                        es: "Aumentar el contenido de cafeína a través del tratamiento térmico",
                        de: "Koffeingehalt durch Wärmebehandlung erhöhen",
                        nl: "Cafeïne gehalte verhogen door warmte behandeling"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Firing reduces moisture to 2-3%, permanently halts oxidation processes, and develops the final flavor profile through controlled heat application, ensuring tea stability and shelf life.",
                    es: "El tostado reduce la humedad al 2-3%, detiene permanentemente los procesos de oxidación y desarrolla el perfil de sabor final a través de la aplicación controlada de calor, asegurando la estabilidad del té y vida útil.",
                    de: "Rösten reduziert Feuchtigkeit auf 2-3%, stoppt dauerhaft Oxidationsprozesse und entwickelt das finale Geschmacksprofil durch kontrollierte Wärmeanwendung, gewährleistet Teestabilität und Haltbarkeit.",
                    nl: "Roosteren vermindert vocht tot 2-3%, stopt permanent oxidatie processen en ontwikkelt het finale smaakprofiel door gecontroleerde warmte toepassing, wat thee stabiliteit en houdbaarheid waarborgt."
                }
            },
            {
                question: {
                    en: "What distinguishes 'orthodox' from 'CTC' (Crush, Tear, Curl) tea processing?",
                    es: "¿Qué distingue el procesamiento de té 'ortodoxo' del 'CTC' (Aplastar, Rasgar, Rizar)?",
                    de: "Was unterscheidet 'orthodoxe' von 'CTC' (Crush, Tear, Curl) Tee-Verarbeitung?",
                    nl: "Wat onderscheidt 'orthodoxe' van 'CTC' (Crush, Tear, Curl) thee verwerking?"
                },
                options: [
                    {
                        en: "Orthodox preserves whole leaves, CTC creates uniform small particles for quick extraction",
                        es: "Ortodoxo preserva hojas enteras, CTC crea partículas pequeñas uniformes para extracción rápida",
                        de: "Orthodox bewahrt ganze Blätter, CTC erzeugt gleichmäßige kleine Partikel für schnelle Extraktion",
                        nl: "Orthodox bewaart hele bladeren, CTC creëert uniforme kleine deeltjes voor snelle extractie"
                    },
                    {
                        en: "Orthodox uses machines, CTC is done by hand",
                        es: "Ortodoxo usa máquinas, CTC se hace a mano",
                        de: "Orthodox verwendet Maschinen, CTC wird von Hand gemacht",
                        nl: "Orthodox gebruikt machines, CTC wordt met de hand gedaan"
                    },
                    {
                        en: "Orthodox is for black tea, CTC for green tea",
                        es: "Ortodoxo es para té negro, CTC para té verde",
                        de: "Orthodox ist für schwarzen Tee, CTC für grünen Tee",
                        nl: "Orthodox is voor zwarte thee, CTC voor groene thee"
                    },
                    {
                        en: "Orthodox takes less time than CTC processing",
                        es: "Ortodoxo toma menos tiempo que el procesamiento CTC",
                        de: "Orthodox dauert weniger Zeit als CTC-Verarbeitung",
                        nl: "Orthodox duurt minder tijd dan CTC verwerking"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Orthodox processing maintains leaf integrity for complex flavors, while CTC mechanically cuts leaves into uniform granules that brew quickly and strongly, ideal for tea bags and milk tea.",
                    es: "El procesamiento ortodoxo mantiene la integridad de las hojas para sabores complejos, mientras que CTC corta mecánicamente las hojas en gránulos uniformes que se preparan rápida y fuertemente, ideal para bolsitas de té y té con leche.",
                    de: "Orthodoxe Verarbeitung erhält Blattintegrität für komplexe Aromen, während CTC Blätter mechanisch in gleichmäßige Granulate schneidet, die schnell und stark aufbrühen, ideal für Teebeutel und Milchtee.",
                    nl: "Orthodox verwerking behoudt blad integriteit voor complexe smaken, terwijl CTC mechanisch bladeren snijdt in uniforme korrels die snel en sterk trekken, ideaal voor theezakjes en melk thee."
                }
            },
            {
                question: {
                    en: "How does the 'scenting' process work for jasmine tea production?",
                    es: "¿Cómo funciona el proceso de 'aromatización' para la producción de té de jazmín?",
                    de: "Wie funktioniert der 'Parfümierungs'-Prozess für die Jasmin-Tee-Produktion?",
                    nl: "Hoe werkt het 'geur' proces voor jasmijn thee productie?"
                },
                options: [
                    {
                        en: "Layering tea with fresh jasmine flowers multiple times to absorb natural fragrance",
                        es: "Superposición de té con flores frescas de jazmín múltiples veces para absorber fragancia natural",
                        de: "Schichtung von Tee mit frischen Jasminblüten mehrmals zur Aufnahme natürlicher Duftstoffe",
                        nl: "Lagen thee met verse jasmijn bloemen meerdere keren om natuurlijke geur te absorberen"
                    },
                    {
                        en: "Spraying artificial jasmine essence on dried tea leaves",
                        es: "Rociar esencia artificial de jazmín en hojas de té secas",
                        de: "Sprühen künstlicher Jasmin-Essenz auf getrocknete Teeblätter",
                        nl: "Het spuiten van kunstmatige jasmijn essence op gedroogde thee bladeren"
                    },
                    {
                        en: "Mixing jasmine petals directly into the tea blend",
                        es: "Mezclar pétalos de jazmín directamente en la mezcla de té",
                        de: "Direkte Mischung von Jasminblütenblättern in die Teemischung",
                        nl: "Het mengen van jasmijn blaadjes direct in de thee blend"
                    },
                    {
                        en: "Growing tea plants near jasmine bushes",
                        es: "Cultivar plantas de té cerca de arbustos de jazmín",
                        de: "Teepflanzen in der Nähe von Jasmin-Büschen anbauen",
                        nl: "Het kweken van thee planten nabij jasmijn struiken"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Traditional scenting involves layering tea leaves with fresh jasmine flowers that bloom at night, allowing the tea to naturally absorb the floral oils over multiple cycles, with flowers removed before final processing.",
                    es: "La aromatización tradicional involucra superponer hojas de té con flores frescas de jazmín que florecen por la noche, permitiendo que el té absorba naturalmente los aceites florales durante múltiples ciclos, con las flores eliminadas antes del procesamiento final.",
                    de: "Traditionelle Parfümierung beinhaltet das Schichten von Teeblättern mit frischen Jasminblüten, die nachts blühen, wodurch der Tee über mehrere Zyklen natürlich die Blütenöle absorbiert, wobei Blüten vor der Endverarbeitung entfernt werden.",
                    nl: "Traditionele geurproductie houdt in dat thee bladeren in lagen worden gelegd met verse jasmijn bloemen die 's nachts bloeien, waardoor de thee natuurlijk de bloemige oliën absorbeert gedurende meerdere cycli, met bloemen verwijderd voor de finale verwerking."
                }
            },
            {
                question: {
                    en: "What is the critical timing for optimal oolong tea oxidation?",
                    es: "¿Cuál es el tiempo crítico para la oxidación óptima del té oolong?",
                    de: "Was ist der kritische Zeitpunkt für optimale Oolong-Tee-Oxidation?",
                    nl: "Wat is de kritieke timing voor optimale oolong thee oxidatie?"
                },
                options: [
                    {
                        en: "Partial oxidation stopped at precise moment to balance floral and roasted notes",
                        es: "Oxidación parcial detenida en momento preciso para equilibrar notas florales y tostadas",
                        de: "Teiloxidation im präzisen Moment gestoppt, um florale und geröstete Noten auszugleichen",
                        nl: "Gedeeltelijke oxidatie gestopt op precies moment om florale en geroosterde noten te balanceren"
                    },
                    {
                        en: "Exactly 12 hours regardless of environmental conditions",
                        es: "Exactamente 12 horas independientemente de las condiciones ambientales",
                        de: "Genau 12 Stunden unabhängig von Umweltbedingungen",
                        nl: "Precies 12 uur ongeacht omgevingsomstandigheden"
                    },
                    {
                        en: "Until leaves turn completely brown",
                        es: "Hasta que las hojas se vuelvan completamente marrones",
                        de: "Bis Blätter vollständig braun werden",
                        nl: "Totdat bladeren volledig bruin worden"
                    },
                    {
                        en: "When ambient temperature reaches 25°C",
                        es: "Cuando la temperatura ambiente alcanza 25°C",
                        de: "Wenn Umgebungstemperatur 25°C erreicht",
                        nl: "Wanneer omgevingstemperatuur 25°C bereikt"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Oolong oxidation (20-80%) must be stopped at the precise moment when the balance between fresh, floral notes and deeper, roasted flavors reaches the desired profile for that specific style.",
                    es: "La oxidación del oolong (20-80%) debe detenerse en el momento preciso cuando el equilibrio entre notas frescas y florales y sabores más profundos y tostados alcanza el perfil deseado para ese estilo específico.",
                    de: "Oolong-Oxidation (20-80%) muss im präzisen Moment gestoppt werden, wenn das Gleichgewicht zwischen frischen, floralen Noten und tieferen, gerösteten Aromen das gewünschte Profil für diesen spezifischen Stil erreicht.",
                    nl: "Oolong oxidatie (20-80%) moet gestopt worden op het precieze moment wanneer de balans tussen verse, florale noten en diepere, geroosterde smaken het gewenste profiel voor die specifieke stijl bereikt."
                }
            },
            {
                question: {
                    en: "What causes the distinctive 'tippy' golden color in premium black teas?",
                    es: "¿Qué causa el distintivo color dorado 'tippy' en tés negros premium?",
                    de: "Was verursacht die charakteristische 'tippy' goldene Farbe in Premium-Schwarztees?",
                    nl: "Wat veroorzaakt de kenmerkende 'tippy' gouden kleur in premium zwarte theeën?"
                },
                options: [
                    {
                        en: "Young tea buds with fine hairs that resist full oxidation and retain golden color",
                        es: "Brotes jóvenes de té con pelusa fina que resisten la oxidación completa y retienen color dorado",
                        de: "Junge Teeknospen mit feinen Härchen, die vollständiger Oxidation widerstehen und goldene Farbe behalten",
                        nl: "Jonge thee knoppen met fijne haartjes die volledige oxidatie weerstaan en gouden kleur behouden"
                    },
                    {
                        en: "Addition of gold leaf during processing",
                        es: "Adición de hoja de oro durante el procesamiento",
                        de: "Hinzufügung von Blattgold während der Verarbeitung",
                        nl: "Het toevoegen van bladgoud tijdens verwerking"
                    },
                    {
                        en: "Special heating process that caramelizes sugars",
                        es: "Proceso especial de calentamiento que carameliza azúcares",
                        de: "Spezieller Erhitzungsprozess, der Zucker karamellisiert",
                        nl: "Speciaal verwarmingsproces dat suikers karameliseert"
                    },
                    {
                        en: "Fermentation with specific yellow-producing bacteria",
                        es: "Fermentación con bacterias específicas productoras de amarillo",
                        de: "Fermentation mit spezifischen gelb-produzierenden Bakterien",
                        nl: "Fermentatie met specifieke geel-producerende bacteriën"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Golden tips come from young tea buds covered in fine silver-white hairs (pekoe) that partially resist oxidation, retaining their golden color and contributing sweet, delicate flavors to premium teas.",
                    es: "Las puntas doradas provienen de brotes jóvenes de té cubiertos de pelusa fina blanco-plateada (pekoe) que resisten parcialmente la oxidación, reteniendo su color dorado y contribuyendo sabores dulces y delicados a tés premium.",
                    de: "Goldene Spitzen stammen von jungen Teeknospen, die mit feinen silber-weißen Härchen (Pekoe) bedeckt sind, die teilweise der Oxidation widerstehen, ihre goldene Farbe behalten und süße, zarte Aromen zu Premium-Tees beitragen.",
                    nl: "Gouden tips komen van jonge thee knoppen bedekt met fijne zilver-witte haartjes (pekoe) die gedeeltelijk oxidatie weerstaan, hun gouden kleur behoudend en zoete, delicate smaken bijdragend aan premium theeën."
                }
            },
            {
                question: {
                    en: "How does altitude affect tea processing and final quality?",
                    es: "¿Cómo afecta la altitud el procesamiento del té y la calidad final?",
                    de: "Wie beeinflusst die Höhe die Teevearbeitung und finale Qualität?",
                    nl: "Hoe beïnvloedt hoogte thee verwerking en finale kwaliteit?"
                },
                options: [
                    {
                        en: "Higher altitudes slow growth, concentrate compounds, and create more complex flavors",
                        es: "Altitudes más altas ralentizan el crecimiento, concentran compuestos y crean sabores más complejos",
                        de: "Höhere Lagen verlangsamen Wachstum, konzentrieren Verbindungen und schaffen komplexere Aromen",
                        nl: "Hogere hoogtes vertragen groei, concentreren verbindingen en creëren complexere smaken"
                    },
                    {
                        en: "Altitude has no significant impact on tea quality",
                        es: "La altitud no tiene impacto significativo en la calidad del té",
                        de: "Höhe hat keinen signifikanten Einfluss auf Teequalität",
                        nl: "Hoogte heeft geen significante impact op thee kwaliteit"
                    },
                    {
                        en: "High altitude makes processing faster and easier",
                        es: "Gran altitud hace el procesamiento más rápido y fácil",
                        de: "Große Höhe macht Verarbeitung schneller und einfacher",
                        nl: "Grote hoogte maakt verwerking sneller en makkelijker"
                    },
                    {
                        en: "Only temperature matters, not altitude itself",
                        es: "Solo la temperatura importa, no la altitud en sí",
                        de: "Nur Temperatur ist wichtig, nicht die Höhe selbst",
                        nl: "Alleen temperatuur is belangrijk, niet hoogte zelf"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "High-altitude tea gardens (above 3,000 feet) experience cooler temperatures and UV stress, slowing leaf growth and concentrating beneficial compounds like amino acids and polyphenols, creating superior complexity.",
                    es: "Los jardines de té de gran altitud (sobre 3,000 pies) experimentan temperaturas más frescas y estrés UV, ralentizando el crecimiento de las hojas y concentrando compuestos beneficiosos como aminoácidos y polifenoles, creando complejidad superior.",
                    de: "Hochgelegene Teegärten (über 3.000 Fuß) erleben kühlere Temperaturen und UV-Stress, verlangsamen Blattwachstum und konzentrieren nützliche Verbindungen wie Aminosäuren und Polyphenole, wodurch überlegene Komplexität entsteht.",
                    nl: "Hoog gelegen thee tuinen (boven 3.000 voet) ervaren koelere temperaturen en UV stress, blad groei vertragend en nuttige verbindingen zoals aminozuren en polyfenolen concentrerend, superieure complexiteit creërend."
                }
            },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
