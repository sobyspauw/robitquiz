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
            {
                question: {
                    en: "What is the purpose of 'bruising' edges of oolong leaves during processing?",
                    es: "¿Cuál es el propósito de 'magullar' los bordes de las hojas oolong durante el procesamiento?",
                    de: "Was ist der Zweck des 'Quetschens' der Ränder von Oolong-Blättern während der Verarbeitung?",
                    nl: "Wat is het doel van 'kneuzen' van randen van oolong bladeren tijdens verwerking?"
                },
                options: [
                    {
                        en: "Initiate oxidation from leaf edges inward for characteristic red-rimmed appearance",
                        es: "Iniciar oxidación desde bordes de hojas hacia adentro para apariencia característica de borde rojo",
                        de: "Oxidation von Blatträndern nach innen initiieren für charakteristisches rot-gesäumtes Aussehen",
                        nl: "Oxidatie initiëren van bladranden naar binnen voor karakteristieke rood-gerande verschijning"
                    },
                    {
                        en: "Remove sharp edges for safety",
                        es: "Eliminar bordes afilados por seguridad",
                        de: "Scharfe Kanten zur Sicherheit entfernen",
                        nl: "Scherpe randen verwijderen voor veiligheid"
                    },
                    {
                        en: "Add artificial coloring to edges",
                        es: "Agregar coloración artificial a bordes",
                        de: "Künstliche Färbung an Rändern hinzufügen",
                        nl: "Kunstmatige kleuring toevoegen aan randen"
                    },
                    {
                        en: "Make leaves easier to roll",
                        es: "Hacer hojas más fáciles de enrollar",
                        de: "Blätter leichter zu rollen machen",
                        nl: "Bladeren makkelijker te rollen maken"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Bruising involves gently shaking or tossing leaves to damage edges, where oxidation begins first, creating the distinctive red-brown edges (红边) and green center characteristic of oolong teas.",
                    es: "Magullar involucra sacudir o lanzar suavemente las hojas para dañar los bordes, donde la oxidación comienza primero, creando los característicos bordes marrón-rojizos (红边) y centro verde característico de los tés oolong.",
                    de: "Quetschen beinhaltet sanftes Schütteln oder Werfen der Blätter, um Ränder zu beschädigen, wo Oxidation zuerst beginnt, wodurch die charakteristischen rotbraunen Ränder (红边) und grünes Zentrum von Oolong-Tees entstehen.",
                    nl: "Kneuzen houdt in dat bladeren zacht geschud of gegooid worden om randen te beschadigen, waar oxidatie eerst begint, wat de kenmerkende roodbruine randen (红边) en groen centrum kenmerkend voor oolong theeën creëert."
                }
            },
            {
                question: {
                    en: "How does pan-firing differ from steaming in kill-green processing?",
                    es: "¿Cómo difiere el tostado en sartén de la vaporización en el procesamiento de matar el verde?",
                    de: "Wie unterscheidet sich Pfannenrösten vom Dämpfen beim Kill-Green-Processing?",
                    nl: "Hoe verschilt pan-braden van stomen in kill-green verwerking?"
                },
                options: [
                    {
                        en: "Pan-firing creates roasted notes; steaming preserves fresh, vegetal character",
                        es: "Tostado en sartén crea notas tostadas; vaporización preserva carácter fresco y vegetal",
                        de: "Pfannenrösten schafft geröstete Noten; Dämpfen bewahrt frischen, pflanzlichen Charakter",
                        nl: "Pan-braden creëert geroosterde noten; stomen bewaart vers, plantaardig karakter"
                    },
                    {
                        en: "Both methods produce identical results",
                        es: "Ambos métodos producen resultados idénticos",
                        de: "Beide Methoden produzieren identische Ergebnisse",
                        nl: "Beide methoden produceren identieke resultaten"
                    },
                    {
                        en: "Steaming is only for black tea",
                        es: "Vaporización es solo para té negro",
                        de: "Dämpfen ist nur für schwarzen Tee",
                        nl: "Stomen is alleen voor zwarte thee"
                    },
                    {
                        en: "Pan-firing takes longer than steaming",
                        es: "Tostado en sartén toma más tiempo que vaporización",
                        de: "Pfannenrösten dauert länger als Dämpfen",
                        nl: "Pan-braden duurt langer dan stomen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Chinese pan-firing (wok roasting) imparts nutty, toasted notes and slightly yellowish color, while Japanese steaming maintains bright green color and fresh, grassy, sweet flavors by gentler enzyme deactivation.",
                    es: "El tostado chino en sartén (tostado en wok) imparte notas a nuez y tostadas y color ligeramente amarillento, mientras que la vaporización japonesa mantiene color verde brillante y sabores frescos, herbáceos y dulces mediante desactivación enzimática más suave.",
                    de: "Chinesisches Pfannenrösten (Wok-Röstung) verleiht nussige, geröstete Noten und leicht gelbliche Farbe, während japanisches Dämpfen hellgrüne Farbe und frische, grasige, süße Aromen durch sanftere Enzymdeaktivierung bewahrt.",
                    nl: "Chinees pan-braden (wok roosteren) geeft nootachtige, geroosterde noten en licht geelachtige kleur, terwijl Japans stomen heldere groene kleur en verse, grasachtige, zoete smaken behoudt door zachtere enzym deactivatie."
                }
            },
            {
                question: {
                    en: "What enzymatic process drives tea oxidation during processing?",
                    es: "¿Qué proceso enzimático impulsa la oxidación del té durante el procesamiento?",
                    de: "Welcher enzymatische Prozess treibt Tee-Oxidation während der Verarbeitung an?",
                    nl: "Welk enzymatisch proces drijft thee oxidatie tijdens verwerking?"
                },
                options: [
                    {
                        en: "Polyphenol oxidase converting catechins to theaflavins and thearubigins",
                        es: "Polifenol oxidasa convirtiendo catequinas en teaflavinas y tearubiginas",
                        de: "Polyphenoloxidase wandelt Katechine in Theaflavine und Thearubigine um",
                        nl: "Polyfenol oxidase converteert catechinen naar theaflavinen en thearubiginen"
                    },
                    {
                        en: "Chlorophyll breakdown only",
                        es: "Solo descomposición de clorofila",
                        de: "Nur Chlorophyll-Abbau",
                        nl: "Alleen chlorofyl afbraak"
                    },
                    {
                        en: "Caffeine synthesis from amino acids",
                        es: "Síntesis de cafeína a partir de aminoácidos",
                        de: "Koffeinsynthese aus Aminosäuren",
                        nl: "Cafeïne synthese uit aminozuren"
                    },
                    {
                        en: "Water evaporation process",
                        es: "Proceso de evaporación de agua",
                        de: "Wasserverdampfungsprozess",
                        nl: "Water verdampingsproces"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Polyphenol oxidase (PPO) enzymes catalyze oxidation of catechins (green tea polyphenols) into theaflavins (golden color, briskness) and thearubigins (reddish-brown color, body) in black tea.",
                    es: "Las enzimas polifenol oxidasa (PPO) catalizan la oxidación de catequinas (polifenoles de té verde) en teaflavinas (color dorado, vivacidad) y tearubiginas (color marrón rojizo, cuerpo) en té negro.",
                    de: "Polyphenoloxidase (PPO) Enzyme katalysieren Oxidation von Katechinen (Grüntee-Polyphenole) zu Theaflavinen (goldene Farbe, Frische) und Thearubiginen (rotbraune Farbe, Körper) in schwarzem Tee.",
                    nl: "Polyfenol oxidase (PPO) enzymen katalyseren oxidatie van catechinen (groene thee polyfenolen) in theaflavinen (gouden kleur, levendigheid) en thearubiginen (roodbruine kleur, body) in zwarte thee."
                }
            },
            {
                question: {
                    en: "What is the purpose of 'sorting' and 'grading' after tea processing?",
                    es: "¿Cuál es el propósito del 'clasificación' y 'gradación' después del procesamiento del té?",
                    de: "Was ist der Zweck des 'Sortierens' und 'Gradierens' nach der Teevearbeitung?",
                    nl: "Wat is het doel van 'sorteren' en 'graderen' na thee verwerking?"
                },
                options: [
                    {
                        en: "Separate leaves by size, quality, and appearance for consistent market grades",
                        es: "Separar hojas por tamaño, calidad y apariencia para grados de mercado consistentes",
                        de: "Blätter nach Größe, Qualität und Aussehen für konsistente Marktgrade trennen",
                        nl: "Bladeren scheiden op grootte, kwaliteit en uiterlijk voor consistente markt graden"
                    },
                    {
                        en: "Remove all damaged leaves only",
                        es: "Eliminar solo todas las hojas dañadas",
                        de: "Nur alle beschädigten Blätter entfernen",
                        nl: "Alleen alle beschadigde bladeren verwijderen"
                    },
                    {
                        en: "Mix different tea types together",
                        es: "Mezclar diferentes tipos de té juntos",
                        de: "Verschiedene Teetypen mischen",
                        nl: "Verschillende thee types mengen"
                    },
                    {
                        en: "Add flavor enhancers",
                        es: "Agregar potenciadores de sabor",
                        de: "Geschmacksverstärker hinzufügen",
                        nl: "Smaakversterkers toevoegen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Sorting separates tea into grades (FOP, SFTGFOP, etc.) based on leaf size, bud content, and quality. This ensures consistency, allows premium teas to command higher prices, and matches product to market needs.",
                    es: "La clasificación separa el té en grados (FOP, SFTGFOP, etc.) basándose en tamaño de hoja, contenido de brotes y calidad. Esto asegura consistencia, permite que tés premium comanden precios más altos y ajusta producto a necesidades del mercado.",
                    de: "Sortierung trennt Tee in Grade (FOP, SFTGFOP, etc.) basierend auf Blattgröße, Knospengehalt und Qualität. Dies gewährleistet Konsistenz, ermöglicht Premium-Tees höhere Preise zu erzielen und passt Produkt an Marktbedürfnisse an.",
                    nl: "Sortering scheidt thee in graden (FOP, SFTGFOP, etc.) gebaseerd op bladgrootte, knop inhoud en kwaliteit. Dit waarborgt consistentie, stelt premium theeën in staat hogere prijzen te vragen en past product aan markt behoeften aan."
                }
            },
            {
                question: {
                    en: "How does 'post-fermentation' in Pu-erh tea differ from oxidation?",
                    es: "¿Cómo difiere la 'post-fermentación' en el té Pu-erh de la oxidación?",
                    de: "Wie unterscheidet sich 'Post-Fermentation' in Pu-erh-Tee von Oxidation?",
                    nl: "Hoe verschilt 'post-fermentatie' in Pu-erh thee van oxidatie?"
                },
                options: [
                    {
                        en: "Post-fermentation involves microbial activity; oxidation is enzymatic",
                        es: "Post-fermentación involucra actividad microbiana; oxidación es enzimática",
                        de: "Post-Fermentation beinhaltet mikrobielle Aktivität; Oxidation ist enzymatisch",
                        nl: "Post-fermentatie omvat microbiële activiteit; oxidatie is enzymatisch"
                    },
                    {
                        en: "They are identical processes",
                        es: "Son procesos idénticos",
                        de: "Sie sind identische Prozesse",
                        nl: "Ze zijn identieke processen"
                    },
                    {
                        en: "Post-fermentation is faster than oxidation",
                        es: "Post-fermentación es más rápida que oxidación",
                        de: "Post-Fermentation ist schneller als Oxidation",
                        nl: "Post-fermentatie is sneller dan oxidatie"
                    },
                    {
                        en: "Oxidation requires bacteria; fermentation doesn't",
                        es: "Oxidación requiere bacterias; fermentación no",
                        de: "Oxidation benötigt Bakterien; Fermentation nicht",
                        nl: "Oxidatie vereist bacteriën; fermentatie niet"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Post-fermentation is true microbial fermentation where bacteria and fungi break down tea compounds over years, while oxidation is enzymatic browning that happens during initial processing hours/days.",
                    es: "La post-fermentación es verdadera fermentación microbiana donde bacterias y hongos descomponen compuestos del té durante años, mientras que la oxidación es pardeamiento enzimático que ocurre durante horas/días de procesamiento inicial.",
                    de: "Post-Fermentation ist echte mikrobielle Fermentation, bei der Bakterien und Pilze Tee-Verbindungen über Jahre abbauen, während Oxidation enzymatische Bräunung ist, die während der anfänglichen Verarbeitung Stunden/Tage geschieht.",
                    nl: "Post-fermentatie is echte microbiële fermentatie waar bacteriën en schimmels thee verbindingen afbreken over jaren, terwijl oxidatie enzymatische bruining is die gebeurt tijdens initiële verwerking uren/dagen."
                }
            },
            {
                question: {
                    en: "What is the 'piling' (wo dui) process in shou (ripe) Pu-erh production?",
                    es: "¿Qué es el proceso de 'apilamiento' (wo dui) en la producción de Pu-erh shou (maduro)?",
                    de: "Was ist der 'Aufhäufungs'-Prozess (Wo Dui) in der Shou (reifen) Pu-erh-Produktion?",
                    nl: "Wat is het 'ophoping' (wo dui) proces in shou (rijpe) Pu-erh productie?"
                },
                options: [
                    {
                        en: "Wet-piling tea leaves with controlled moisture and temperature to accelerate fermentation",
                        es: "Apilamiento húmedo de hojas de té con humedad y temperatura controladas para acelerar fermentación",
                        de: "Feucht-Aufhäufung von Teeblättern mit kontrollierter Feuchtigkeit und Temperatur zur Beschleunigung der Fermentation",
                        nl: "Nat-ophoping van thee bladeren met gecontroleerde vochtigheid en temperatuur om fermentatie te versnellen"
                    },
                    {
                        en: "Stacking dry tea bags for storage",
                        es: "Apilar bolsitas de té secas para almacenamiento",
                        de: "Trockene Teebeutel für Lagerung stapeln",
                        nl: "Droge theezakjes stapelen voor opslag"
                    },
                    {
                        en: "Building tall piles to compress tea",
                        es: "Construir pilas altas para comprimir té",
                        de: "Hohe Stapel zum Pressen von Tee bauen",
                        nl: "Hoge stapels bouwen om thee te comprimeren"
                    },
                    {
                        en: "Sorting leaves into quality piles",
                        es: "Clasificar hojas en pilas de calidad",
                        de: "Blätter in Qualitätsstapel sortieren",
                        nl: "Bladeren sorteren in kwaliteit stapels"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wo dui involves piling moistened maocha (green tea base) in large heaps covered with cloth, maintaining 50-60°C and controlled humidity for 45-60 days to accelerate microbial fermentation that naturally takes decades.",
                    es: "Wo dui involucra apilar maocha humedecido (base de té verde) en montones grandes cubiertos con tela, manteniendo 50-60°C y humedad controlada durante 45-60 días para acelerar fermentación microbiana que naturalmente toma décadas.",
                    de: "Wo Dui beinhaltet das Aufhäufen von befeuchtetem Maocha (Grüntee-Basis) in großen Haufen bedeckt mit Tuch, Aufrechterhaltung von 50-60°C und kontrollierter Feuchtigkeit für 45-60 Tage zur Beschleunigung mikrobieller Fermentation, die natürlich Jahrzehnte dauert.",
                    nl: "Wo dui houdt in dat bevochtigde maocha (groene thee basis) wordt opgehoopt in grote stapels bedekt met doek, 50-60°C en gecontroleerde vochtigheid onderhoudend voor 45-60 dagen om microbiële fermentatie te versnellen die natuurlijk decennia duurt."
                }
            },
            {
                question: {
                    en: "What causes 'creaming down' or 'tea cream' in high-quality black teas?",
                    es: "¿Qué causa el 'cremado' o 'crema de té' en tés negros de alta calidad?",
                    de: "Was verursacht 'Aufrahmen' oder 'Tee-Creme' in hochwertigem schwarzem Tee?",
                    nl: "Wat veroorzaakt 'roomvorming' of 'thee room' in hoogwaardige zwarte theeën?"
                },
                options: [
                    {
                        en: "Theaflavin-caffeine complexes precipitating when tea cools below 40°C",
                        es: "Complejos de teaflavina-cafeína precipitando cuando té se enfría por debajo de 40°C",
                        de: "Theaflavin-Koffein-Komplexe fällen aus, wenn Tee unter 40°C abkühlt",
                        nl: "Theaflavine-cafeïne complexen precipiterend wanneer thee afkoelt onder 40°C"
                    },
                    {
                        en: "Added milk particles from processing",
                        es: "Partículas de leche añadidas del procesamiento",
                        de: "Zugesetzte Milchpartikel aus der Verarbeitung",
                        nl: "Toegevoegde melk deeltjes van verwerking"
                    },
                    {
                        en: "Bacterial contamination in water",
                        es: "Contaminación bacteriana en agua",
                        de: "Bakterielle Verunreinigung im Wasser",
                        nl: "Bacteriële besmetting in water"
                    },
                    {
                        en: "Excessive sugar content",
                        es: "Contenido excesivo de azúcar",
                        de: "Übermäßiger Zuckergehalt",
                        nl: "Overmatig suiker gehalte"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Cream down occurs when high concentrations of theaflavins and caffeine in premium teas form complexes that precipitate as cloudy particles when cooled, indicating quality and proper oxidation.",
                    es: "El cremado ocurre cuando altas concentraciones de teaflavinas y cafeína en tés premium forman complejos que precipitan como partículas turbias al enfriarse, indicando calidad y oxidación adecuada.",
                    de: "Aufrahmen tritt auf, wenn hohe Konzentrationen von Theaflavinen und Koffein in Premium-Tees Komplexe bilden, die beim Abkühlen als trübe Partikel ausfallen, was Qualität und richtige Oxidation anzeigt.",
                    nl: "Roomvorming treedt op wanneer hoge concentraties theaflavinen en cafeïne in premium theeën complexen vormen die precipiteren als troebele deeltjes bij afkoeling, wat kwaliteit en juiste oxidatie aangeeft."
                }
            },
            {
                question: {
                    en: "How does the 'shaping' process differ between various tea types?",
                    es: "¿Cómo difiere el proceso de 'dar forma' entre varios tipos de té?",
                    de: "Wie unterscheidet sich der 'Formungs'-Prozess zwischen verschiedenen Teetypen?",
                    nl: "Hoe verschilt het 'vormgeving' proces tussen verschillende thee types?"
                },
                options: [
                    {
                        en: "Different techniques create needles, pearls, balls, or twisted leaves for each style",
                        es: "Diferentes técnicas crean agujas, perlas, bolas u hojas retorcidas para cada estilo",
                        de: "Verschiedene Techniken schaffen Nadeln, Perlen, Kugeln oder gedrehte Blätter für jeden Stil",
                        nl: "Verschillende technieken creëren naalden, parels, ballen of gedraaide bladeren voor elke stijl"
                    },
                    {
                        en: "All teas are shaped identically",
                        es: "Todos los tés se forman idénticamente",
                        de: "Alle Tees werden identisch geformt",
                        nl: "Alle theeën worden identiek gevormd"
                    },
                    {
                        en: "Shape has no impact on tea quality",
                        es: "La forma no tiene impacto en la calidad del té",
                        de: "Form hat keinen Einfluss auf Teequalität",
                        nl: "Vorm heeft geen impact op thee kwaliteit"
                    },
                    {
                        en: "Only cosmetic appearance matters",
                        es: "Solo importa la apariencia cosmética",
                        de: "Nur kosmetisches Aussehen ist wichtig",
                        nl: "Alleen cosmetisch uiterlijk is belangrijk"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Shaping techniques vary: Dragon Well is pan-pressed flat, Ti Kuan Yin rolled into tight balls, Pi Lo Chun hand-twisted into spirals, Silver Needle left as unopened buds - each shape affects extraction and presentation.",
                    es: "Las técnicas de dar forma varían: Dragon Well es prensado plano en sartén, Ti Kuan Yin enrollado en bolas apretadas, Pi Lo Chun retorcido a mano en espirales, Silver Needle dejado como brotes sin abrir - cada forma afecta extracción y presentación.",
                    de: "Formungstechniken variieren: Dragon Well wird flach in Pfanne gepresst, Ti Kuan Yin in enge Kugeln gerollt, Pi Lo Chun von Hand in Spiralen gedreht, Silver Needle als ungeöffnete Knospen gelassen - jede Form beeinflusst Extraktion und Präsentation.",
                    nl: "Vormgevingstechnieken variëren: Dragon Well wordt plat in pan geperst, Ti Kuan Yin gerold in strakke ballen, Pi Lo Chun met de hand gedraaid in spiralen, Silver Needle gelaten als ongeopende knoppen - elke vorm beïnvloedt extractie en presentatie."
                }
            },
            {
                question: {
                    en: "What is the 'resting' period between rolling sessions in orthodox processing?",
                    es: "¿Qué es el período de 'descanso' entre sesiones de enrollado en procesamiento ortodoxo?",
                    de: "Was ist die 'Ruhe'-Periode zwischen Roll-Sitzungen in orthodoxer Verarbeitung?",
                    nl: "Wat is de 'rust' periode tussen rol sessies in orthodoxe verwerking?"
                },
                options: [
                    {
                        en: "Allows oxidation to develop evenly throughout leaves between mechanical stress",
                        es: "Permite que oxidación se desarrolle uniformemente a través de hojas entre estrés mecánico",
                        de: "Ermöglicht gleichmäßige Oxidationsentwicklung durch Blätter zwischen mechanischem Stress",
                        nl: "Staat gelijkmatige oxidatie ontwikkeling toe door bladeren tussen mechanische stress"
                    },
                    {
                        en: "Gives workers lunch break only",
                        es: "Da a trabajadores solo pausa para almuerzo",
                        de: "Gibt Arbeitern nur Mittagspause",
                        nl: "Geeft werknemers alleen lunchpauze"
                    },
                    {
                        en: "Cools machinery to prevent overheating",
                        es: "Enfría maquinaria para prevenir sobrecalentamiento",
                        de: "Kühlt Maschinen zur Überhitzungsprävention",
                        nl: "Koelt machines om oververhitting te voorkomen"
                    },
                    {
                        en: "Has no functional purpose",
                        es: "No tiene propósito funcional",
                        de: "Hat keinen funktionalen Zweck",
                        nl: "Heeft geen functioneel doel"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Resting periods between rolling sessions allow enzymes to distribute evenly and oxidation to proceed uniformly through the leaf mass, preventing over-oxidation of outer leaves while inner leaves catch up.",
                    es: "Los períodos de descanso entre sesiones de enrollado permiten que enzimas se distribuyan uniformemente y la oxidación proceda uniformemente a través de la masa de hojas, previniendo sobre-oxidación de hojas externas mientras hojas internas se ponen al día.",
                    de: "Ruheperioden zwischen Roll-Sitzungen ermöglichen gleichmäßige Enzymverteilung und einheitliches Fortschreiten der Oxidation durch die Blattmasse, verhindern Über-Oxidation äußerer Blätter während innere Blätter aufholen.",
                    nl: "Rustperioden tussen rol sessies staan enzymen toe zich gelijkmatig te verdelen en oxidatie uniform voort te gaan door de blad massa, over-oxidatie van buitenste bladeren voorkomen terwijl binnenste bladeren bijkomen."
                }
            },
            {
                question: {
                    en: "What role does humidity play during tea oxidation?",
                    es: "¿Qué papel juega la humedad durante la oxidación del té?",
                    de: "Welche Rolle spielt Feuchtigkeit während der Tee-Oxidation?",
                    nl: "Welke rol speelt vochtigheid tijdens thee oxidatie?"
                },
                options: [
                    {
                        en: "85-95% humidity activates enzymes and facilitates even oxidation",
                        es: "85-95% de humedad activa enzimas y facilita oxidación uniforme",
                        de: "85-95% Feuchtigkeit aktiviert Enzyme und erleichtert gleichmäßige Oxidation",
                        nl: "85-95% vochtigheid activeert enzymen en faciliteert gelijkmatige oxidatie"
                    },
                    {
                        en: "Humidity should be kept at 0% always",
                        es: "Humedad debe mantenerse en 0% siempre",
                        de: "Feuchtigkeit sollte immer bei 0% gehalten werden",
                        nl: "Vochtigheid moet altijd op 0% gehouden worden"
                    },
                    {
                        en: "High humidity ruins all tea",
                        es: "Alta humedad arruina todo té",
                        de: "Hohe Feuchtigkeit ruiniert allen Tee",
                        nl: "Hoge vochtigheid ruïneert alle thee"
                    },
                    {
                        en: "Humidity has no effect on processing",
                        es: "Humedad no tiene efecto en procesamiento",
                        de: "Feuchtigkeit hat keinen Effekt auf Verarbeitung",
                        nl: "Vochtigheid heeft geen effect op verwerking"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Controlled humidity (85-95%) during oxidation keeps enzymes active and prevents leaves from drying out too quickly, ensuring even oxidation. Too low humidity halts oxidation; too high encourages unwanted microbial growth.",
                    es: "La humedad controlada (85-95%) durante oxidación mantiene enzimas activas y previene que hojas se sequen demasiado rápido, asegurando oxidación uniforme. Humedad demasiado baja detiene oxidación; demasiado alta fomenta crecimiento microbiano no deseado.",
                    de: "Kontrollierte Feuchtigkeit (85-95%) während Oxidation hält Enzyme aktiv und verhindert zu schnelles Austrocknen der Blätter, gewährleistet gleichmäßige Oxidation. Zu niedrige Feuchtigkeit stoppt Oxidation; zu hohe fördert unerwünschtes mikrobielles Wachstum.",
                    nl: "Gecontroleerde vochtigheid (85-95%) tijdens oxidatie houdt enzymen actief en voorkomt dat bladeren te snel uitdrogen, wat gelijkmatige oxidatie waarborgt. Te lage vochtigheid stopt oxidatie; te hoge bevordert ongewenste microbiële groei."
                }
            },
            {
                question: {
                    en: "How does temperature affect tea oxidation rate?",
                    es: "¿Cómo afecta la temperatura la tasa de oxidación del té?",
                    de: "Wie beeinflusst Temperatur die Tee-Oxidationsrate?",
                    nl: "Hoe beïnvloedt temperatuur thee oxidatie snelheid?"
                },
                options: [
                    {
                        en: "20-25°C optimal; higher temps accelerate but risk over-oxidation",
                        es: "20-25°C óptimo; temperaturas más altas aceleran pero arriesgan sobre-oxidación",
                        de: "20-25°C optimal; höhere Temps beschleunigen, riskieren aber Über-Oxidation",
                        nl: "20-25°C optimaal; hogere temps versnellen maar riskeren over-oxidatie"
                    },
                    {
                        en: "Temperature has no effect on oxidation",
                        es: "Temperatura no tiene efecto en oxidación",
                        de: "Temperatur hat keinen Effekt auf Oxidation",
                        nl: "Temperatuur heeft geen effect op oxidatie"
                    },
                    {
                        en: "Freezing temperatures are ideal",
                        es: "Temperaturas de congelación son ideales",
                        de: "Gefriertemperaturen sind ideal",
                        nl: "Vries temperaturen zijn ideaal"
                    },
                    {
                        en: "Boiling temperature required for oxidation",
                        es: "Temperatura de ebullición requerida para oxidación",
                        de: "Siedetemperatur für Oxidation erforderlich",
                        nl: "Kook temperatuur vereist voor oxidatie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Optimal oxidation occurs at 20-25°C (68-77°F). Higher temperatures speed enzyme activity but risk uncontrolled oxidation and off-flavors; lower temps slow oxidation, extending processing time but allowing more control.",
                    es: "La oxidación óptima ocurre a 20-25°C (68-77°F). Temperaturas más altas aceleran actividad enzimática pero arriesgan oxidación incontrolada y sabores desagradables; temperaturas más bajas ralentizan oxidación, extendiendo tiempo de procesamiento pero permitiendo más control.",
                    de: "Optimale Oxidation tritt bei 20-25°C (68-77°F) auf. Höhere Temperaturen beschleunigen Enzymaktivität, riskieren aber unkontrollierte Oxidation und Fehlaromen; niedrigere Temps verlangsamen Oxidation, verlängern Verarbeitungszeit aber ermöglichen mehr Kontrolle.",
                    nl: "Optimale oxidatie vindt plaats bij 20-25°C (68-77°F). Hogere temperaturen versnellen enzym activiteit maar riskeren ongecontroleerde oxidatie en vreemde smaken; lagere temps vertragen oxidatie, verwerking tijd verlengend maar meer controle toestaan."
                }
            },
            {
                question: {
                    en: "What is 'monsooning' in tea processing?",
                    es: "¿Qué es el 'monzónico' en el procesamiento del té?",
                    de: "Was ist 'Monsunierung' in der Teevearbeitung?",
                    nl: "Wat is 'moesson' in thee verwerking?"
                },
                options: [
                    {
                        en: "Exposing tea to humid monsoon winds to develop mellow, sweet character",
                        es: "Exponer té a vientos húmedos del monzón para desarrollar carácter suave y dulce",
                        de: "Tee feuchten Monsunwinden aussetzen, um milden, süßen Charakter zu entwickeln",
                        nl: "Thee blootstellen aan vochtige moesson winden om zacht, zoet karakter te ontwikkelen"
                    },
                    {
                        en: "Processing tea only during rainy season",
                        es: "Procesar té solo durante temporada de lluvias",
                        de: "Tee nur während Regenzeit verarbeiten",
                        nl: "Thee alleen tijdens regenseizoen verwerken"
                    },
                    {
                        en: "Washing tea with monsoon rainwater",
                        es: "Lavar té con agua de lluvia del monzón",
                        de: "Tee mit Monsunregenwasser waschen",
                        nl: "Thee wassen met moesson regenwater"
                    },
                    {
                        en: "Storing tea underground during monsoons",
                        es: "Almacenar té bajo tierra durante monzones",
                        de: "Tee während Monsunzeit unterirdisch lagern",
                        nl: "Thee ondergronds opslaan tijdens moessons"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Monsooning, traditional in India's Malabar coast, exposes tea to moisture-laden monsoon winds in warehouses, swelling leaves and creating unique mellow, earthy, sweet character with reduced astringency.",
                    es: "El monzónico, tradicional en la costa Malabar de India, expone té a vientos del monzón cargados de humedad en almacenes, hinchando hojas y creando carácter único suave, terroso y dulce con astringencia reducida.",
                    de: "Monsunierung, traditionell an Indiens Malabarküste, setzt Tee feuchtigkeitsbeladenen Monsunwinden in Lagerhäusern aus, Blätter quellen und schaffen einzigartigen milden, erdigen, süßen Charakter mit reduzierter Adstringenz.",
                    nl: "Moesson, traditioneel aan India's Malabar kust, stelt thee bloot aan vocht-geladen moesson winden in opslagplaatsen, bladeren zwellend en uniek zacht, aards, zoet karakter creërend met verminderde astringentie."
                }
            },
            {
                question: {
                    en: "What causes the 'grassy' or 'seaweed' flavor in improperly processed green tea?",
                    es: "¿Qué causa el sabor 'herbáceo' o de 'alga marina' en té verde procesado incorrectamente?",
                    de: "Was verursacht den 'grasigen' oder 'Seetang'-Geschmack in unsachgemäß verarbeitetem grünem Tee?",
                    nl: "Wat veroorzaakt de 'grasachtige' of 'zeewier' smaak in onjuist verwerkte groene thee?"
                },
                options: [
                    {
                        en: "Insufficient kill-green heat allowing partial oxidation and chlorophyll breakdown",
                        es: "Calor insuficiente de matar el verde permitiendo oxidación parcial y descomposición de clorofila",
                        de: "Unzureichende Kill-Green-Hitze ermöglicht teilweise Oxidation und Chlorophyll-Abbau",
                        nl: "Onvoldoende kill-green hitte die gedeeltelijke oxidatie en chlorofyl afbraak toestaat"
                    },
                    {
                        en: "Adding seaweed during processing",
                        es: "Agregar alga marina durante procesamiento",
                        de: "Seetang während Verarbeitung hinzufügen",
                        nl: "Zeewier toevoegen tijdens verwerking"
                    },
                    {
                        en: "Too much heat application",
                        es: "Demasiada aplicación de calor",
                        de: "Zu viel Wärmeanwendung",
                        nl: "Te veel warmte toepassing"
                    },
                    {
                        en: "Natural flavor of all green teas",
                        es: "Sabor natural de todos los tés verdes",
                        de: "Natürlicher Geschmack aller grünen Tees",
                        nl: "Natuurlijke smaak van alle groene theeën"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Grassy/seaweed notes indicate incomplete enzyme deactivation during kill-green - insufficient heat fails to halt oxidation completely, causing partial chlorophyll breakdown and development of these off-flavors instead of desired fresh, sweet notes.",
                    es: "Notas herbáceas/de alga marina indican desactivación incompleta de enzimas durante matar el verde - calor insuficiente falla en detener completamente oxidación, causando descomposición parcial de clorofila y desarrollo de estos sabores desagradables en lugar de notas frescas y dulces deseadas.",
                    de: "Grasige/Seetang-Noten zeigen unvollständige Enzymdeaktivierung während Kill-Green an - unzureichende Hitze stoppt Oxidation nicht vollständig, verursacht teilweisen Chlorophyll-Abbau und Entwicklung dieser Fehlaromen statt gewünschter frischer, süßer Noten.",
                    nl: "Grasachtige/zeewier noten duiden onvolledige enzym deactivatie tijdens kill-green aan - onvoldoende hitte stopt oxidatie niet volledig, veroorzaakt gedeeltelijke chlorofyl afbraak en ontwikkeling van deze vreemde smaken in plaats van gewenste verse, zoete noten."
                }
            },
            {
                question: {
                    en: "How does 'de-enzyming' temperature differ for pan-firing versus steaming?",
                    es: "¿Cómo difiere la temperatura de 'des-enzimación' para tostado en sartén versus vaporización?",
                    de: "Wie unterscheidet sich 'Enzym-Deaktivierungs'-Temperatur für Pfannenrösten versus Dämpfen?",
                    nl: "Hoe verschilt 'de-enzyming' temperatuur voor pan-braden versus stomen?"
                },
                options: [
                    {
                        en: "Pan-firing: 280-320°C direct heat; Steaming: 95-100°C indirect heat",
                        es: "Tostado en sartén: 280-320°C calor directo; Vaporización: 95-100°C calor indirecto",
                        de: "Pfannenrösten: 280-320°C direkte Hitze; Dämpfen: 95-100°C indirekte Hitze",
                        nl: "Pan-braden: 280-320°C directe hitte; Stomen: 95-100°C indirecte hitte"
                    },
                    {
                        en: "Both use identical temperatures",
                        es: "Ambos usan temperaturas idénticas",
                        de: "Beide verwenden identische Temperaturen",
                        nl: "Beide gebruiken identieke temperaturen"
                    },
                    {
                        en: "Steaming requires higher heat than pan-firing",
                        es: "Vaporización requiere mayor calor que tostado en sartén",
                        de: "Dämpfen erfordert höhere Hitze als Pfannenrösten",
                        nl: "Stomen vereist hogere hitte dan pan-braden"
                    },
                    {
                        en: "Temperature doesn't matter for enzyme deactivation",
                        es: "Temperatura no importa para desactivación de enzimas",
                        de: "Temperatur ist für Enzymdeaktivierung unwichtig",
                        nl: "Temperatuur maakt niet uit voor enzym deactivatie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Pan-firing uses high direct heat (280-320°C) touching leaves briefly, creating toasted notes. Steaming uses lower indirect heat (95-100°C) for longer duration, gentler on leaves, preserving fresh character and bright green color.",
                    es: "El tostado en sartén usa calor directo alto (280-320°C) tocando hojas brevemente, creando notas tostadas. La vaporización usa calor indirecto más bajo (95-100°C) por mayor duración, más suave con hojas, preservando carácter fresco y color verde brillante.",
                    de: "Pfannenrösten verwendet hohe direkte Hitze (280-320°C), die Blätter kurz berührt und geröstete Noten schafft. Dämpfen verwendet niedrigere indirekte Hitze (95-100°C) für längere Dauer, sanfter zu Blättern, bewahrt frischen Charakter und hellgrüne Farbe.",
                    nl: "Pan-braden gebruikt hoge directe hitte (280-320°C) die bladeren kort raakt, geroosterde noten creërend. Stomen gebruikt lagere indirecte hitte (95-100°C) voor langere duur, zachter voor bladeren, vers karakter en heldere groene kleur bewarend."
                }
            },
            {
                question: {
                    en: "What is the 'flush' system in tea harvesting and how does it affect processing?",
                    es: "¿Qué es el sistema de 'cosecha' en la recolección de té y cómo afecta el procesamiento?",
                    de: "Was ist das 'Flush'-System beim Tee-Ernten und wie beeinflusst es die Verarbeitung?",
                    nl: "Wat is het 'flush' systeem in thee oogsten en hoe beïnvloedt het verwerking?"
                },
                options: [
                    {
                        en: "Seasonal growth periods; first flush (spring) is most delicate requiring gentle processing",
                        es: "Períodos de crecimiento estacionales; primera cosecha (primavera) es más delicada requiriendo procesamiento suave",
                        de: "Saisonale Wachstumsperioden; erster Flush (Frühling) ist zartester, erfordert sanfte Verarbeitung",
                        nl: "Seizoensgebonden groei perioden; eerste flush (lente) is meest delicaat en vereist zachte verwerking"
                    },
                    {
                        en: "Washing method for tea leaves",
                        es: "Método de lavado para hojas de té",
                        de: "Waschmethode für Teeblätter",
                        nl: "Was methode voor thee bladeren"
                    },
                    {
                        en: "Machine model used for harvesting",
                        es: "Modelo de máquina usado para cosechar",
                        de: "Maschinenmodell für Ernte verwendet",
                        nl: "Machine model gebruikt voor oogsten"
                    },
                    {
                        en: "Quality grading system only",
                        es: "Solo sistema de gradación de calidad",
                        de: "Nur Qualitäts-Gradierungssystem",
                        nl: "Alleen kwaliteit graderingssysteem"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Flushes are seasonal growth periods. First flush (spring) produces tender, delicate leaves requiring minimal oxidation; second flush (early summer) yields fuller-bodied tea; autumnal flush provides robust character - each requiring adjusted processing.",
                    es: "Las cosechas son períodos de crecimiento estacionales. Primera cosecha (primavera) produce hojas tiernas y delicadas requiriendo oxidación mínima; segunda cosecha (principios de verano) produce té de cuerpo más completo; cosecha otoñal proporciona carácter robusto - cada una requiriendo procesamiento ajustado.",
                    de: "Flushes sind saisonale Wachstumsperioden. Erster Flush (Frühling) produziert zarte, delikate Blätter, die minimale Oxidation erfordern; zweiter Flush (Frühsommer) ergibt vollmundigeren Tee; Herbst-Flush bietet robusten Charakter - jeder erfordert angepasste Verarbeitung.",
                    nl: "Flushes zijn seizoensgebonden groei perioden. Eerste flush (lente) produceert tedere, delicate bladeren die minimale oxidatie vereisen; tweede flush (vroege zomer) levert voller-bodied thee; herfst flush biedt robuust karakter - elk vereist aangepaste verwerking."
                }
            },
            {
                question: {
                    en: "What is 'compression' in tea processing and why is it used?",
                    es: "¿Qué es la 'compresión' en el procesamiento del té y por qué se usa?",
                    de: "Was ist 'Kompression' in der Teevearbeitung und warum wird sie verwendet?",
                    nl: "Wat is 'compressie' in thee verwerking en waarom wordt het gebruikt?"
                },
                options: [
                    {
                        en: "Pressing tea into cakes, bricks, or tuos for aging, transport, and controlled fermentation",
                        es: "Prensar té en pasteles, ladrillos o tuos para envejecimiento, transporte y fermentación controlada",
                        de: "Pressen von Tee in Kuchen, Ziegel oder Tuos für Reifung, Transport und kontrollierte Fermentation",
                        nl: "Persen van thee in koeken, stenen of tuos voor rijping, transport en gecontroleerde fermentatie"
                    },
                    {
                        en: "Squeezing water out of fresh leaves",
                        es: "Exprimir agua de hojas frescas",
                        de: "Wasser aus frischen Blättern pressen",
                        nl: "Water uit verse bladeren persen"
                    },
                    {
                        en: "Compacting tea bags for packaging",
                        es: "Compactar bolsitas de té para empaquetar",
                        de: "Teebeutel für Verpackung verdichten",
                        nl: "Theezakjes comprimeren voor verpakking"
                    },
                    {
                        en: "Reducing leaf size mechanically",
                        es: "Reducir tamaño de hoja mecánicamente",
                        de: "Blattgröße mechanisch reduzieren",
                        nl: "Bladgrootte mechanisch verminderen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Compression creates dense forms (cakes, bricks, tuos) that facilitate aging by limiting air exposure, improve transport efficiency, and allow slow, even fermentation over time - traditional for Pu-erh and dark teas.",
                    es: "La compresión crea formas densas (pasteles, ladrillos, tuos) que facilitan el envejecimiento limitando exposición al aire, mejoran eficiencia de transporte y permiten fermentación lenta y uniforme con el tiempo - tradicional para Pu-erh y tés oscuros.",
                    de: "Kompression schafft dichte Formen (Kuchen, Ziegel, Tuos), die Reifung durch Begrenzung der Luftexposition erleichtern, Transporteffizienz verbessern und langsame, gleichmäßige Fermentation über Zeit ermöglichen - traditionell für Pu-erh und dunkle Tees.",
                    nl: "Compressie creëert dichte vormen (koeken, stenen, tuos) die rijping faciliteren door lucht blootstelling te beperken, transport efficiëntie verbeteren en langzame, gelijkmatige fermentatie in de tijd toestaan - traditioneel voor Pu-erh en donkere theeën."
                }
            },
            {
                question: {
                    en: "How does 'solar withering' differ from indoor withering?",
                    es: "¿Cómo difiere el 'marchitamiento solar' del marchitamiento interior?",
                    de: "Wie unterscheidet sich 'Solar-Welken' vom Indoor-Welken?",
                    nl: "Hoe verschilt 'zonne verwelking' van binnen verwelking?"
                },
                options: [
                    {
                        en: "Solar withering uses UV exposure for enhanced aroma; indoor is controlled and gentler",
                        es: "Marchitamiento solar usa exposición UV para aroma mejorado; interior es controlado y más suave",
                        de: "Solar-Welken nutzt UV-Exposition für verbessertes Aroma; Indoor ist kontrolliert und sanfter",
                        nl: "Zonne verwelking gebruikt UV blootstelling voor verbeterd aroma; binnen is gecontroleerd en zachter"
                    },
                    {
                        en: "No difference in final tea quality",
                        es: "No hay diferencia en calidad final del té",
                        de: "Kein Unterschied in finaler Teequalität",
                        nl: "Geen verschil in finale thee kwaliteit"
                    },
                    {
                        en: "Solar withering is only for damaged leaves",
                        es: "Marchitamiento solar es solo para hojas dañadas",
                        de: "Solar-Welken ist nur für beschädigte Blätter",
                        nl: "Zonne verwelking is alleen voor beschadigde bladeren"
                    },
                    {
                        en: "Indoor withering is always inferior",
                        es: "Marchitamiento interior es siempre inferior",
                        de: "Indoor-Welken ist immer unterlegen",
                        nl: "Binnen verwelking is altijd inferieur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Solar withering exposes leaves to direct sunlight and UV, creating unique floral aromatics and initiating enzymatic changes faster. Indoor withering offers temperature/humidity control for more consistent, predictable results.",
                    es: "El marchitamiento solar expone hojas a luz solar directa y UV, creando aromáticos florales únicos e iniciando cambios enzimáticos más rápido. El marchitamiento interior ofrece control de temperatura/humedad para resultados más consistentes y predecibles.",
                    de: "Solar-Welken setzt Blätter direktem Sonnenlicht und UV aus, schafft einzigartige florale Aromen und initiiert enzymatische Veränderungen schneller. Indoor-Welken bietet Temperatur-/Feuchtigkeitskontrolle für konsistentere, vorhersagbare Ergebnisse.",
                    nl: "Zonne verwelking stelt bladeren bloot aan direct zonlicht en UV, wat unieke bloemen aromaten creëert en enzymatische veranderingen sneller initieert. Binnen verwelking biedt temperatuur/vochtigheid controle voor consistentere, voorspelbare resultaten."
                }
            },
            {
                question: {
                    en: "What causes 'astringency' in tea and how does processing affect it?",
                    es: "¿Qué causa la 'astringencia' en el té y cómo la afecta el procesamiento?",
                    de: "Was verursacht 'Adstringenz' in Tee und wie beeinflusst Verarbeitung sie?",
                    nl: "Wat veroorzaakt 'astringentie' in thee en hoe beïnvloedt verwerking het?"
                },
                options: [
                    {
                        en: "Catechins/tannins; oxidation and roasting reduce astringency by converting to milder compounds",
                        es: "Catequinas/taninos; oxidación y tostado reducen astringencia convirtiendo a compuestos más suaves",
                        de: "Katechine/Tannine; Oxidation und Rösten reduzieren Adstringenz durch Umwandlung in mildere Verbindungen",
                        nl: "Catechinen/tannines; oxidatie en roosteren verminderen astringentie door conversie naar mildere verbindingen"
                    },
                    {
                        en: "Added chemicals during processing",
                        es: "Químicos añadidos durante procesamiento",
                        de: "Zugesetzte Chemikalien während Verarbeitung",
                        nl: "Toegevoegde chemicaliën tijdens verwerking"
                    },
                    {
                        en: "Water quality only",
                        es: "Solo calidad del agua",
                        de: "Nur Wasserqualität",
                        nl: "Alleen water kwaliteit"
                    },
                    {
                        en: "Storage temperature",
                        es: "Temperatura de almacenamiento",
                        de: "Lagertemperatur",
                        nl: "Opslag temperatuur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Astringency comes from catechins (green tea) and tannins. Oxidation converts catechins to theaflavins (less astringent), and roasting polymerizes tannins into smoother compounds, explaining why black/roasted teas are less astringent than green.",
                    es: "La astringencia proviene de catequinas (té verde) y taninos. La oxidación convierte catequinas en teaflavinas (menos astringentes), y el tostado polimeriza taninos en compuestos más suaves, explicando por qué tés negros/tostados son menos astringentes que verdes.",
                    de: "Adstringenz kommt von Katechinen (grüner Tee) und Tanninen. Oxidation wandelt Katechine in Theaflavine (weniger adstringent) um, und Rösten polymerisiert Tannine zu glatteren Verbindungen, erklärt warum schwarze/geröstete Tees weniger adstringent als grüne sind.",
                    nl: "Astringentie komt van catechinen (groene thee) en tannines. Oxidatie converteert catechinen naar theaflavinen (minder astringent), en roosteren polymeriseert tannines in gladdere verbindingen, wat verklaart waarom zwarte/geroosterde theeën minder astringent zijn dan groene."
                }
            },
            {
                question: {
                    en: "What is the 'rinsing' or 'awakening' step in some tea processing traditions?",
                    es: "¿Qué es el paso de 'enjuague' o 'despertar' en algunas tradiciones de procesamiento de té?",
                    de: "Was ist der 'Spül'- oder 'Erweckungs'-Schritt in einigen Tee-Verarbeitungstraditionen?",
                    nl: "Wat is de 'spoeling' of 'ontwaking' stap in sommige thee verwerking tradities?"
                },
                options: [
                    {
                        en: "Brief hot water rinse before brewing to open leaves and remove surface dust",
                        es: "Breve enjuague con agua caliente antes de preparar para abrir hojas y eliminar polvo superficial",
                        de: "Kurze Heißwasserspülung vor dem Aufbrühen zum Öffnen der Blätter und Entfernen von Oberflächenstaub",
                        nl: "Korte hete water spoeling voor zetten om bladeren te openen en oppervlakte stof te verwijderen"
                    },
                    {
                        en: "Washing leaves with soap during processing",
                        es: "Lavar hojas con jabón durante procesamiento",
                        de: "Blätter mit Seife während Verarbeitung waschen",
                        nl: "Bladeren wassen met zeep tijdens verwerking"
                    },
                    {
                        en: "Adding water to dried tea for storage",
                        es: "Agregar agua a té seco para almacenamiento",
                        de: "Wasser zu getrocknetem Tee für Lagerung hinzufügen",
                        nl: "Water toevoegen aan gedroogde thee voor opslag"
                    },
                    {
                        en: "Final cleaning step in factory",
                        es: "Paso final de limpieza en fábrica",
                        de: "Abschließender Reinigungsschritt in Fabrik",
                        nl: "Finale schoonmaak stap in fabriek"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Rinsing involves pouring hot water over tea for 5-10 seconds, then discarding it before actual brewing. This opens tightly rolled leaves, removes dust from storage/processing, and 'awakens' aromatics, especially for aged or compressed teas.",
                    es: "El enjuague involucra verter agua caliente sobre té durante 5-10 segundos, luego descartarla antes de la preparación real. Esto abre hojas enrolladas apretadamente, elimina polvo de almacenamiento/procesamiento y 'despierta' aromáticos, especialmente para tés envejecidos o comprimidos.",
                    de: "Spülen beinhaltet Gießen von heißem Wasser über Tee für 5-10 Sekunden, dann Wegschütten vor tatsächlichem Aufbrühen. Dies öffnet fest gerollte Blätter, entfernt Staub von Lagerung/Verarbeitung und 'erweckt' Aromen, besonders für gealterte oder gepresste Tees.",
                    nl: "Spoelen houdt in dat hete water over thee wordt gegoten voor 5-10 seconden, dan weggegoten voor het eigenlijke zetten. Dit opent strak gerolde bladeren, verwijdert stof van opslag/verwerking en 'ontwaakt' aromaten, vooral voor gerijpte of gecomprimeerde theeën."
                }
            },
            {
                question: {
                    en: "How does leaf 'pluck standard' affect processing decisions?",
                    es: "¿Cómo afecta el 'estándar de recolección' de hojas las decisiones de procesamiento?",
                    de: "Wie beeinflusst 'Pflück-Standard' der Blätter Verarbeitungsentscheidungen?",
                    nl: "Hoe beïnvloedt blad 'pluk standaard' verwerkings beslissingen?"
                },
                options: [
                    {
                        en: "Fine pluck (bud + 2 leaves) requires gentle handling; coarse pluck tolerates more aggressive processing",
                        es: "Recolección fina (brote + 2 hojas) requiere manejo suave; recolección gruesa tolera procesamiento más agresivo",
                        de: "Feine Pflückung (Knospe + 2 Blätter) erfordert sanfte Handhabung; grobe Pflückung toleriert aggressivere Verarbeitung",
                        nl: "Fijne pluk (knop + 2 bladeren) vereist zachte behandeling; grove pluk tolereert meer agressieve verwerking"
                    },
                    {
                        en: "All pluck standards process identically",
                        es: "Todos los estándares de recolección procesan idénticamente",
                        de: "Alle Pflück-Standards verarbeiten identisch",
                        nl: "Alle pluk standaarden verwerken identiek"
                    },
                    {
                        en: "Pluck standard only affects appearance",
                        es: "Estándar de recolección solo afecta apariencia",
                        de: "Pflück-Standard beeinflusst nur Aussehen",
                        nl: "Pluk standaard beïnvloedt alleen uiterlijk"
                    },
                    {
                        en: "Processing is determined by machine settings only",
                        es: "Procesamiento está determinado solo por ajustes de máquina",
                        de: "Verarbeitung wird nur durch Maschineneinstellungen bestimmt",
                        nl: "Verwerking wordt alleen bepaald door machine instellingen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Fine pluck (Imperial/Golden: bud + 1-2 tender leaves) requires delicate processing - gentle rolling, lower temps, shorter oxidation. Coarse pluck (Standard: 3-4 mature leaves) withstands more vigorous handling and longer processing times.",
                    es: "Recolección fina (Imperial/Dorado: brote + 1-2 hojas tiernas) requiere procesamiento delicado - enrollado suave, temperaturas más bajas, oxidación más corta. Recolección gruesa (Estándar: 3-4 hojas maduras) resiste manejo más vigoroso y tiempos de procesamiento más largos.",
                    de: "Feine Pflückung (Imperial/Golden: Knospe + 1-2 zarte Blätter) erfordert delikate Verarbeitung - sanftes Rollen, niedrigere Temps, kürzere Oxidation. Grobe Pflückung (Standard: 3-4 reife Blätter) hält kräftigerer Handhabung und längeren Verarbeitungszeiten stand.",
                    nl: "Fijne pluk (Imperial/Gouden: knop + 1-2 tedere bladeren) vereist delicate verwerking - zacht rollen, lagere temps, kortere oxidatie. Grove pluk (Standaard: 3-4 volwassen bladeren) weerstaat meer krachtige behandeling en langere verwerking tijden."
                }
            },
            {
                question: {
                    en: "What is 'needle tea' shaping and which teas use this technique?",
                    es: "¿Qué es el moldeado de 'té de aguja' y qué tés usan esta técnica?",
                    de: "Was ist 'Nadeltee'-Formung und welche Tees verwenden diese Technik?",
                    nl: "Wat is 'naald thee' vormgeving en welke theeën gebruiken deze techniek?"
                },
                options: [
                    {
                        en: "Hand-rolling leaves into long, thin, needle-like shapes (Silver Needle, Pine Needle)",
                        es: "Enrollar hojas a mano en formas largas, delgadas, similares a agujas (Aguja de Plata, Aguja de Pino)",
                        de: "Hand-Rollen von Blättern in lange, dünne, nadelförmige Formen (Silbernadel, Kiefernadel)",
                        nl: "Met de hand rollen van bladeren in lange, dunne, naaldachtige vormen (Zilveren Naald, Pijnboom Naald)"
                    },
                    {
                        en: "Cutting tea with needles for uniform size",
                        es: "Cortar té con agujas para tamaño uniforme",
                        de: "Tee mit Nadeln für gleichmäßige Größe schneiden",
                        nl: "Thee snijden met naalden voor uniforme grootte"
                    },
                    {
                        en: "Adding pine needles to tea blend",
                        es: "Agregar agujas de pino a mezcla de té",
                        de: "Kiefernadeln zur Teemischung hinzufügen",
                        nl: "Dennennaalden toevoegen aan thee blend"
                    },
                    {
                        en: "Processing only pointed leaf tips",
                        es: "Procesar solo puntas de hojas puntiagudas",
                        de: "Nur spitze Blattspitzen verarbeiten",
                        nl: "Alleen puntige blad tips verwerken"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Needle shaping involves careful hand-rolling or mechanical shaping to create elongated, thin, straight tea leaves resembling pine needles. Used for premium teas like Silver Needle (Bai Hao Yin Zhen) and Korean Jukro.",
                    es: "El moldeado de aguja involucra enrollado cuidadoso a mano o moldeado mecánico para crear hojas de té alargadas, delgadas y rectas que se asemejan a agujas de pino. Usado para tés premium como Aguja de Plata (Bai Hao Yin Zhen) y Jukro coreano.",
                    de: "Nadelformung beinhaltet sorgfältiges Hand-Rollen oder mechanisches Formen zur Schaffung verlängerter, dünner, gerader Teeblätter, die Kiefernadeln ähneln. Verwendet für Premium-Tees wie Silbernadel (Bai Hao Yin Zhen) und koreanisches Jukro.",
                    nl: "Naald vormgeving houdt zorgvuldig met de hand rollen of mechanisch vormen in om langwerpige, dunne, rechte thee bladeren te creëren die op dennennaalden lijken. Gebruikt voor premium theeën zoals Zilveren Naald (Bai Hao Yin Zhen) en Koreaans Jukro."
                }
            },
            {
                question: {
                    en: "How does 'wet storage' (shi cang) differ from 'dry storage' (gan cang) for Pu-erh aging?",
                    es: "¿Cómo difiere el 'almacenamiento húmedo' (shi cang) del 'almacenamiento seco' (gan cang) para el envejecimiento del Pu-erh?",
                    de: "Wie unterscheidet sich 'feuchte Lagerung' (Shi Cang) von 'trockener Lagerung' (Gan Cang) für Pu-erh-Reifung?",
                    nl: "Hoe verschilt 'natte opslag' (shi cang) van 'droge opslag' (gan cang) voor Pu-erh rijping?"
                },
                options: [
                    {
                        en: "Wet storage (high humidity) accelerates fermentation; dry storage (natural) ages slowly with cleaner flavors",
                        es: "Almacenamiento húmedo (alta humedad) acelera fermentación; almacenamiento seco (natural) envejece lentamente con sabores más limpios",
                        de: "Feuchte Lagerung (hohe Feuchtigkeit) beschleunigt Fermentation; trockene Lagerung (natürlich) altert langsam mit saubereren Aromen",
                        nl: "Natte opslag (hoge vochtigheid) versnelt fermentatie; droge opslag (natuurlijk) rijpt langzaam met schonere smaken"
                    },
                    {
                        en: "Both methods produce identical results",
                        es: "Ambos métodos producen resultados idénticos",
                        de: "Beide Methoden produzieren identische Ergebnisse",
                        nl: "Beide methoden produceren identieke resultaten"
                    },
                    {
                        en: "Wet storage is always superior quality",
                        es: "Almacenamiento húmedo es siempre calidad superior",
                        de: "Feuchte Lagerung ist immer überlegene Qualität",
                        nl: "Natte opslag is altijd superieure kwaliteit"
                    },
                    {
                        en: "Dry storage ruins all Pu-erh",
                        es: "Almacenamiento seco arruina todo Pu-erh",
                        de: "Trockene Lagerung ruiniert allen Pu-erh",
                        nl: "Droge opslag ruïneert alle Pu-erh"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wet storage (Hong Kong style: 70-85% humidity) accelerates fermentation, creating earthy, camphor notes faster but risking mustiness. Dry storage (Taiwan/Kunming: 50-70% humidity) ages slowly, developing clean, complex fruit/wood notes.",
                    es: "El almacenamiento húmedo (estilo Hong Kong: 70-85% humedad) acelera fermentación, creando notas terrosas y de alcanfor más rápido pero arriesgando moho. El almacenamiento seco (Taiwan/Kunming: 50-70% humedad) envejece lentamente, desarrollando notas limpias y complejas de fruta/madera.",
                    de: "Feuchte Lagerung (Hong Kong-Stil: 70-85% Feuchtigkeit) beschleunigt Fermentation, schafft erdige, Kampfer-Noten schneller, riskiert aber Muffigkeit. Trockene Lagerung (Taiwan/Kunming: 50-70% Feuchtigkeit) altert langsam, entwickelt saubere, komplexe Frucht-/Holznoten.",
                    nl: "Natte opslag (Hong Kong stijl: 70-85% vochtigheid) versnelt fermentatie, creëert aardse, kamfer noten sneller maar riskeert mufheid. Droge opslag (Taiwan/Kunming: 50-70% vochtigheid) rijpt langzaam, ontwikkelt schone, complexe fruit/hout noten."
                }
            },
            {
                question: {
                    en: "What is 'pluck to cup' time and why does it matter for premium tea processing?",
                    es: "¿Qué es el tiempo 'de recolección a taza' y por qué importa para el procesamiento de té premium?",
                    de: "Was ist 'Pflück-zu-Tasse'-Zeit und warum ist sie wichtig für Premium-Tee-Verarbeitung?",
                    nl: "Wat is 'pluk tot kop' tijd en waarom is het belangrijk voor premium thee verwerking?"
                },
                options: [
                    {
                        en: "Time from harvest to processing; under 24 hours preserves delicate aromatics in premium teas",
                        es: "Tiempo desde cosecha hasta procesamiento; menos de 24 horas preserva aromáticos delicados en tés premium",
                        de: "Zeit von Ernte bis Verarbeitung; unter 24 Stunden bewahrt delikate Aromen in Premium-Tees",
                        nl: "Tijd van oogst tot verwerking; onder 24 uur bewaart delicate aromaten in premium theeën"
                    },
                    {
                        en: "Time it takes to brew one cup",
                        es: "Tiempo que toma preparar una taza",
                        de: "Zeit zum Aufbrühen einer Tasse",
                        nl: "Tijd die het kost om één kop te zetten"
                    },
                    {
                        en: "Storage time before consumption",
                        es: "Tiempo de almacenamiento antes del consumo",
                        de: "Lagerzeit vor Konsum",
                        nl: "Opslag tijd voor consumptie"
                    },
                    {
                        en: "Doesn't affect tea quality at all",
                        es: "No afecta la calidad del té en absoluto",
                        de: "Beeinflusst Teequalität überhaupt nicht",
                        nl: "Beïnvloedt thee kwaliteit helemaal niet"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Pluck to cup is time from harvest to processing. For delicate teas (first flush Darjeeling, gyokuro), processing within hours preserves volatile aromatics; delays cause degradation. Robust teas tolerate longer intervals.",
                    es: "Pluck to cup es tiempo desde cosecha hasta procesamiento. Para tés delicados (primera cosecha Darjeeling, gyokuro), procesar dentro de horas preserva aromáticos volátiles; retrasos causan degradación. Tés robustos toleran intervalos más largos.",
                    de: "Pflück zu Tasse ist Zeit von Ernte bis Verarbeitung. Für delikate Tees (erster Flush Darjeeling, Gyokuro) bewahrt Verarbeitung innerhalb Stunden flüchtige Aromen; Verzögerungen verursachen Abbau. Robuste Tees tolerieren längere Intervalle.",
                    nl: "Pluk tot kop is tijd van oogst tot verwerking. Voor delicate theeën (eerste flush Darjeeling, gyokuro) bewaart verwerking binnen uren vluchtige aromaten; vertragingen veroorzaken degradatie. Robuuste theeën tolereren langere intervallen."
                }
            },
            {
                question: {
                    en: "What causes the distinctive 'roasted' or 'charcoal' notes in some oolongs and black teas?",
                    es: "¿Qué causa las distintivas notas 'tostadas' o de 'carbón' en algunos oolongs y tés negros?",
                    de: "Was verursacht die charakteristischen 'gerösteten' oder 'Holzkohle'-Noten in einigen Oolongs und Schwarztees?",
                    nl: "Wat veroorzaakt de kenmerkende 'geroosterde' of 'houtskool' noten in sommige oolongs en zwarte theeën?"
                },
                options: [
                    {
                        en: "Traditional charcoal roasting (tan bei) caramelizing sugars and developing Maillard reaction compounds",
                        es: "Tostado tradicional con carbón (tan bei) caramelizando azúcares y desarrollando compuestos de reacción de Maillard",
                        de: "Traditionelles Holzkohle-Rösten (Tan Bei) karamellisiert Zucker und entwickelt Maillard-Reaktions-Verbindungen",
                        nl: "Traditionele houtskool roostering (tan bei) karameliseert suikers en ontwikkelt Maillard reactie verbindingen"
                    },
                    {
                        en: "Adding charcoal powder to tea",
                        es: "Agregar polvo de carbón al té",
                        de: "Holzkohlepulver zum Tee hinzufügen",
                        nl: "Houtskool poeder toevoegen aan thee"
                    },
                    {
                        en: "Natural flavor of all teas",
                        es: "Sabor natural de todos los tés",
                        de: "Natürlicher Geschmack aller Tees",
                        nl: "Natuurlijke smaak van alle theeën"
                    },
                    {
                        en: "Contamination during storage",
                        es: "Contaminación durante almacenamiento",
                        de: "Verunreinigung während Lagerung",
                        nl: "Besmetting tijdens opslag"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Charcoal roasting over low heat (80-120°C) for hours caramelizes residual sugars and triggers Maillard reactions between amino acids and reducing sugars, creating roasted, nutty, caramel notes while reducing astringency.",
                    es: "El tostado con carbón a fuego lento (80-120°C) durante horas carameliza azúcares residuales y desencadena reacciones de Maillard entre aminoácidos y azúcares reductores, creando notas tostadas, a nuez y caramelo mientras reduce astringencia.",
                    de: "Holzkohle-Rösten bei niedriger Hitze (80-120°C) für Stunden karamellisiert Restzucker und löst Maillard-Reaktionen zwischen Aminosäuren und reduzierenden Zuckern aus, schafft geröstete, nussige, Karamell-Noten während Adstringenz reduziert wird.",
                    nl: "Houtskool roosteren op laag vuur (80-120°C) gedurende uren karameliseert residuele suikers en triggert Maillard reacties tussen aminozuren en reducerende suikers, creëert geroosterde, nootachtige, karamel noten terwijl astringentie verminderd wordt."
                }
            },
            {
                question: {
                    en: "How does mechanical damage during processing affect final tea quality?",
                    es: "¿Cómo afecta el daño mecánico durante el procesamiento la calidad final del té?",
                    de: "Wie beeinflusst mechanischer Schaden während der Verarbeitung die finale Teequalität?",
                    nl: "Hoe beïnvloedt mechanische schade tijdens verwerking de finale thee kwaliteit?"
                },
                options: [
                    {
                        en: "Controlled damage releases compounds and initiates oxidation; excessive damage causes bitterness",
                        es: "Daño controlado libera compuestos e inicia oxidación; daño excesivo causa amargor",
                        de: "Kontrollierter Schaden setzt Verbindungen frei und initiiert Oxidation; übermäßiger Schaden verursacht Bitterkeit",
                        nl: "Gecontroleerde schade maakt verbindingen vrij en initieert oxidatie; overmatige schade veroorzaakt bitterheid"
                    },
                    {
                        en: "All mechanical damage ruins tea quality",
                        es: "Todo daño mecánico arruina la calidad del té",
                        de: "Aller mechanischer Schaden ruiniert Teequalität",
                        nl: "Alle mechanische schade ruïneert thee kwaliteit"
                    },
                    {
                        en: "Damage only affects appearance, not flavor",
                        es: "Daño solo afecta apariencia, no sabor",
                        de: "Schaden beeinflusst nur Aussehen, nicht Geschmack",
                        nl: "Schade beïnvloedt alleen uiterlijk, niet smaak"
                    },
                    {
                        en: "Mechanical damage is impossible to control",
                        es: "Daño mecánico es imposible de controlar",
                        de: "Mechanischer Schaden ist unmöglich zu kontrollieren",
                        nl: "Mechanische schade is onmogelijk te controleren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Strategic mechanical damage (rolling, bruising) releases essential oils and enzymes for flavor development. However, over-processing breaks too many cells, releasing excessive tannins and creating harsh bitterness in the final tea.",
                    es: "El daño mecánico estratégico (enrollado, magulladura) libera aceites esenciales y enzimas para desarrollo del sabor. Sin embargo, sobre-procesamiento rompe demasiadas células, liberando taninos excesivos y creando amargor áspero en el té final.",
                    de: "Strategischer mechanischer Schaden (Rollen, Quetschen) setzt ätherische Öle und Enzyme für Geschmacksentwicklung frei. Jedoch bricht Über-Verarbeitung zu viele Zellen, setzt übermäßige Tannine frei und schafft harsche Bitterkeit im finalen Tee.",
                    nl: "Strategische mechanische schade (rollen, kneuzen) maakt essentiële oliën en enzymen vrij voor smaak ontwikkeling. Echter, over-verwerking breekt te veel cellen, maakt overmatige tannines vrij en creëert harde bitterheid in de finale thee."
                }
            },
            {
                question: {
                    en: "What is the purpose of multiple 'firing' sessions in premium tea production?",
                    es: "¿Cuál es el propósito de múltiples sesiones de 'tostado' en la producción de té premium?",
                    de: "Was ist der Zweck mehrerer 'Röst'-Sitzungen in der Premium-Tee-Produktion?",
                    nl: "Wat is het doel van meerdere 'roostering' sessies in premium thee productie?"
                },
                options: [
                    {
                        en: "Gradually remove moisture while developing complex flavors without scorching leaves",
                        es: "Eliminar gradualmente humedad mientras se desarrollan sabores complejos sin quemar hojas",
                        de: "Feuchtigkeit allmählich entfernen während komplexe Aromen entwickelt werden ohne Blätter zu versengen",
                        nl: "Geleidelijk vocht verwijderen terwijl complexe smaken ontwikkeld worden zonder bladeren te verschroeien"
                    },
                    {
                        en: "Only to save time in processing",
                        es: "Solo para ahorrar tiempo en procesamiento",
                        de: "Nur um Zeit in der Verarbeitung zu sparen",
                        nl: "Alleen om tijd te besparen in verwerking"
                    },
                    {
                        en: "Increases caffeine content each session",
                        es: "Aumenta contenido de cafeína cada sesión",
                        de: "Erhöht Koffeingehalt jede Sitzung",
                        nl: "Verhoogt cafeïne gehalte elke sessie"
                    },
                    {
                        en: "Makes tea darker in color only",
                        es: "Hace té más oscuro en color solo",
                        de: "Macht Tee nur dunkler in Farbe",
                        nl: "Maakt thee alleen donkerder in kleur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Multiple firing sessions (initial firing, intermediate firing, final firing) gradually reduce moisture to 2-3% while allowing flavor compounds to develop and integrate. Gentle heat prevents leaf scorching that single high-heat firing would cause.",
                    es: "Múltiples sesiones de tostado (tostado inicial, intermedio, final) reducen gradualmente humedad al 2-3% mientras permiten que compuestos de sabor se desarrollen e integren. Calor suave previene quemado de hojas que causaría tostado único de alto calor.",
                    de: "Mehrere Röst-Sitzungen (initiales, intermediäres, finales Rösten) reduzieren Feuchtigkeit allmählich auf 2-3%, während Geschmacksverbindungen sich entwickeln und integrieren. Sanfte Hitze verhindert Blattversengung, die einzelnes Hochhitze-Rösten verursachen würde.",
                    nl: "Meerdere roostering sessies (initiële, tussenliggende, finale roostering) verminderen geleidelijk vocht tot 2-3% terwijl smaak verbindingen zich ontwikkelen en integreren. Zachte hitte voorkomt blad verschroeien dat enkele hoge-hitte roostering zou veroorzaken."
                }
            },
            {
                question: {
                    en: "How does leaf oxidation create the characteristic color change in tea processing?",
                    es: "¿Cómo crea la oxidación de hojas el cambio de color característico en el procesamiento del té?",
                    de: "Wie schafft Blatt-Oxidation die charakteristische Farbveränderung in der Teevearbeitung?",
                    nl: "Hoe creëert blad oxidatie de karakteristieke kleurverandering in thee verwerking?"
                },
                options: [
                    {
                        en: "Chlorophyll breaks down and polyphenols oxidize, changing green to yellow, amber, then brown",
                        es: "Clorofila se descompone y polifenoles se oxidan, cambiando verde a amarillo, ámbar, luego marrón",
                        de: "Chlorophyll baut ab und Polyphenole oxidieren, ändern grün zu gelb, bernsteinfarben, dann braun",
                        nl: "Chlorofyl breekt af en polyfenolen oxideren, veranderen groen naar geel, amber, dan bruin"
                    },
                    {
                        en: "Natural dyes are released from stems",
                        es: "Colorantes naturales se liberan de tallos",
                        de: "Natürliche Farbstoffe werden aus Stielen freigesetzt",
                        nl: "Natuurlijke kleurstoffen worden vrijgemaakt uit stengels"
                    },
                    {
                        en: "Artificial coloring agents added",
                        es: "Agentes colorantes artificiales añadidos",
                        de: "Künstliche Farbstoffe hinzugefügt",
                        nl: "Kunstmatige kleur middelen toegevoegd"
                    },
                    {
                        en: "Water absorption causes color change",
                        es: "Absorción de agua causa cambio de color",
                        de: "Wasseraufnahme verursacht Farbveränderung",
                        nl: "Water absorptie veroorzaakt kleur verandering"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "During oxidation, chlorophyll degrades (losing green), while polyphenols (catechins) oxidize into theaflavins (yellow-gold) and thearubigins (reddish-brown), creating the spectrum from green tea through oolong to black tea colors.",
                    es: "Durante oxidación, clorofila se degrada (perdiendo verde), mientras polifenoles (catequinas) se oxidan en teaflavinas (amarillo-dorado) y tearubiginas (marrón rojizo), creando el espectro desde té verde a través de oolong hasta colores de té negro.",
                    de: "Während Oxidation baut Chlorophyll ab (verliert grün), während Polyphenole (Katechine) zu Theaflavinen (gelb-gold) und Thearubiginen (rötlich-braun) oxidieren, schaffen das Spektrum von grünem Tee über Oolong zu Schwarztee-Farben.",
                    nl: "Tijdens oxidatie degradeert chlorofyl (verliest groen), terwijl polyfenolen (catechinen) oxideren tot theaflavinen (geel-goud) en thearubiginen (roodachtig-bruin), creërend het spectrum van groene thee via oolong naar zwarte thee kleuren."
                }
            }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();,
{
                question: {
                    en: "What is the enzymatic mechanism behind 'withering' in tea processing?",
                    es: "¿Cuál es el mecanismo enzimático detrás del 'marchitado' en el procesamiento del té?",
                    de: "Was ist der enzymatische Mechanismus hinter dem 'Welken' in der Teeverarbeitung?",
                    nl: "Wat is het enzymatische mechanisme achter 'verwelken' in thee verwerking?"
                },
                options: [
                    {
                        en: "Water loss activates polyphenol oxidase enzymes that begin breaking down catechins and developing flavor compounds",
                        es: "Pérdida de agua activa enzimas polifenol oxidasa que comienzan a descomponer catequinas y desarrollar compuestos de sabor",
                        de: "Wasserverlust aktiviert Polyphenoloxidase-Enzyme, die Catechine abzubauen beginnen und Geschmacksverbindungen entwickeln",
                        nl: "Waterverlies activeert polyfenol oxidase enzymen die beginnen catechines af te breken en smaakverbindingen te ontwikkelen"
                    },
                    {
                        en: "Leaves simply dry out without chemical changes",
                        es: "Las hojas simplemente se secan sin cambios químicos",
                        de: "Blätter trocknen einfach ohne chemische Veränderungen",
                        nl: "Bladeren drogen simpelweg uit zonder chemische veranderingen"
                    },
                    {
                        en: "External bacteria colonize the leaves adding fermentation flavors",
                        es: "Bacterias externas colonizan las hojas añadiendo sabores de fermentación",
                        de: "Externe Bakterien besiedeln die Blätter und fügen Fermentationsaromen hinzu",
                        nl: "Externe bacteriën koloniseren de bladeren en voegen fermentatie smaken toe"
                    },
                    {
                        en: "Chlorophyll breaks down into sugars during sun exposure",
                        es: "La clorofila se descompone en azúcares durante la exposición al sol",
                        de: "Chlorophyll zerfällt während der Sonnenexposition in Zucker",
                        nl: "Chlorofyl breekt af tot suikers tijdens blootstelling aan de zon"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "During withering, tea leaves lose 30-70% of their moisture over 8-24 hours. This water loss stresses the leaf cells, activating polyphenol oxidase (PPO) and peroxidase enzymes. These enzymes begin oxidizing catechins (EGCG, ECG) into theaflavins and thearubigins, initiating flavor development. Withering also converts starches to sugars, amino acids develop, and cell membranes become more permeable for later rolling and oxidation stages.",
                    es: "Durante marchitado, hojas de té pierden 30-70% de su humedad durante 8-24 horas. Esta pérdida de agua estresa las células de la hoja, activando enzimas polifenol oxidasa (PPO) y peroxidasa. Estas enzimas comienzan a oxidar catequinas (EGCG, ECG) en teaflavinas y tearrubiginas, iniciando desarrollo de sabor. Marchitado también convierte almidones en azúcares, aminoácidos se desarrollan, y membranas celulares se vuelven más permeables para etapas posteriores de enrollado y oxidación.",
                    de: "Während des Welkens verlieren Teeblätter über 8-24 Stunden 30-70% ihrer Feuchtigkeit. Dieser Wasserverlust stresst die Blattzellen und aktiviert Polyphenoloxidase (PPO) und Peroxidase-Enzyme. Diese Enzyme beginnen, Catechine (EGCG, ECG) zu Theaflavinen und Thearubiginen zu oxidieren und initiieren die Geschmacksentwicklung. Welken wandelt auch Stärken in Zucker um, Aminosäuren entwickeln sich, und Zellmembranen werden durchlässiger für spätere Roll- und Oxidationsstufen.",
                    nl: "Tijdens verwelken verliezen thee bladeren 30-70% van hun vocht over 8-24 uur. Dit waterverlies stresst de bladcellen, waardoor polyfenol oxidase (PPO) en peroxidase enzymen worden geactiveerd. Deze enzymen beginnen catechines (EGCG, ECG) te oxideren tot theaflavines en thearubigines, wat smaakontwikkeling initieert. Verwelken zet ook zetmelen om in suikers, aminozuren ontwikkelen zich, en celmembranen worden doorgankelijker voor latere rol- en oxidatiefasen."
                }
            },
            {
                question: {
                    en: "What is the chemical difference between 'orthodox' and 'CTC' black tea processing?",
                    es: "¿Cuál es la diferencia química entre el procesamiento de té negro 'ortodoxo' y 'CTC'?",
                    de: "Was ist der chemische Unterschied zwischen 'orthodoxer' und 'CTC'-Schwarztee-Verarbeitung?",
                    nl: "Wat is het chemische verschil tussen 'orthodox' en 'CTC' zwarte thee verwerking?"
                },
                options: [
                    {
                        en: "CTC (Crush-Tear-Curl) creates smaller particles with faster oxidation producing higher theaflavin:thearubigin ratios than orthodox rolling",
                        es: "CTC (Crush-Tear-Curl) crea partículas más pequeñas con oxidación más rápida produciendo ratios más altos de teaflavina:tearrubigina que enrollado ortodoxo",
                        de: "CTC (Crush-Tear-Curl) erzeugt kleinere Partikel mit schnellerer Oxidation, die höhere Theaflavin:Thearubigin-Verhältnisse als orthodoxes Rollen produzieren",
                        nl: "CTC (Crush-Tear-Curl) creëert kleinere deeltjes met snellere oxidatie die hogere theaflavine:thearubigine verhoudingen produceert dan orthodox rollen"
                    },
                    {
                        en: "Orthodox and CTC produce chemically identical teas; only leaf appearance differs",
                        es: "Ortodoxo y CTC producen tés químicamente idénticos; solo difiere apariencia de hoja",
                        de: "Orthodox und CTC produzieren chemisch identische Tees; nur Blattaussehen unterscheidet sich",
                        nl: "Orthodox en CTC produceren chemisch identieke thee; alleen blad uiterlijk verschilt"
                    },
                    {
                        en: "CTC uses chemicals for oxidation while orthodox uses natural enzymes",
                        es: "CTC usa químicos para oxidación mientras ortodoxo usa enzimas naturales",
                        de: "CTC verwendet Chemikalien für Oxidation, während Orthodox natürliche Enzyme verwendet",
                        nl: "CTC gebruikt chemicaliën voor oxidatie terwijl orthodox natuurlijke enzymen gebruikt"
                    },
                    {
                        en: "Orthodox prevents oxidation while CTC encourages it",
                        es: "Ortodoxo previene oxidación mientras CTC la fomenta",
                        de: "Orthodox verhindert Oxidation, während CTC sie fördert",
                        nl: "Orthodox voorkomt oxidatie terwijl CTC het aanmoedigt"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "CTC machines crush, tear, and curl leaves into small uniform granules, rupturing far more cell walls than traditional orthodox rolling. This aggressive mechanical action exposes more catechins to oxygen and polyphenol oxidase enzymes, causing rapid, intense oxidation (30-90 minutes vs 2-4 hours orthodox). CTC produces stronger, more astringent teas with darker color due to higher thearubigin content. Orthodox rolling preserves more delicate theaflavin compounds and nuanced flavors. CTC is preferred for tea bags (quick extraction), while orthodox commands premium prices for whole-leaf teas.",
                    es: "Máquinas CTC aplastan, desgarran y enrollan hojas en gránulos uniformes pequeños, rompiendo muchas más paredes celulares que enrollado ortodoxo tradicional. Esta acción mecánica agresiva expone más catequinas a oxígeno y enzimas polifenol oxidasa, causando oxidación rápida e intensa (30-90 minutos vs 2-4 horas ortodoxo). CTC produce tés más fuertes y astringentes con color más oscuro debido a mayor contenido de tearrubigina. Enrollado ortodoxo preserva compuestos de teaflavina más delicados y sabores matizados. CTC es preferido para bolsitas de té (extracción rápida), mientras ortodoxo comanda precios premium para tés de hoja entera.",
                    de: "CTC-Maschinen zerdrücken, zerreißen und rollen Blätter zu kleinen gleichmäßigen Granulaten und zerreißen dabei weit mehr Zellwände als traditionelles orthodoxes Rollen. Diese aggressive mechanische Aktion setzt mehr Catechine Sauerstoff und Polyphenoloxidase-Enzymen aus und verursacht schnelle, intensive Oxidation (30-90 Minuten vs 2-4 Stunden orthodox). CTC produziert stärkere, adstringierendere Tees mit dunklerer Farbe aufgrund höheren Thearubigin-Gehalts. Orthodoxes Rollen bewahrt zartere Theaflavin-Verbindungen und nuancierte Aromen. CTC wird für Teebeutel bevorzugt (schnelle Extraktion), während Orthodox Premiumpreise für Ganzblatt-Tees erzielt.",
                    nl: "CTC machines verpletteren, scheuren en krullen bladeren tot kleine uniforme korrels, waarbij veel meer celwanden worden gebroken dan traditioneel orthodox rollen. Deze agressieve mechanische actie stelt meer catechines bloot aan zuurstof en polyfenol oxidase enzymen, wat snelle, intense oxidatie veroorzaakt (30-90 minuten vs 2-4 uur orthodox). CTC produceert sterkere, meer samentrekkende thee met donkerdere kleur door hoger thearubigine gehalte. Orthodox rollen behoudt meer delicate theaflavine verbindingen en genuanceerde smaken. CTC heeft de voorkeur voor theezakjes (snelle extractie), terwijl orthodox premium prijzen haalt voor hele-blad thee."
                }
            },
            {
                question: {
                    en: "What is the biochemical role of 'firing' or 'drying' as the final step in tea processing?",
                    es: "¿Cuál es el papel bioquímico del 'horneado' o 'secado' como paso final en el procesamiento del té?",
                    de: "Was ist die biochemische Rolle des 'Röstens' oder 'Trocknens' als letzter Schritt in der Teeverarbeitung?",
                    nl: "Wat is de biochemische rol van 'roosteren' of 'drogen' als laatste stap in thee verwerking?"
                },
                options: [
                    {
                        en: "Heat denatures enzymes to halt oxidation permanently, evaporates moisture to 2-3%, and develops final flavor through Maillard reactions",
                        es: "Calor desnaturaliza enzimas para detener oxidación permanentemente, evapora humedad a 2-3%, y desarrolla sabor final mediante reacciones de Maillard",
                        de: "Hitze denaturiert Enzyme, um Oxidation dauerhaft zu stoppen, verdunstet Feuchtigkeit auf 2-3%, und entwickelt finalen Geschmack durch Maillard-Reaktionen",
                        nl: "Hitte denatureert enzymen om oxidatie permanent te stoppen, verdampt vocht tot 2-3%, en ontwikkelt finale smaak door Maillard reacties"
                    },
                    {
                        en: "Firing only reduces water content without affecting chemistry",
                        es: "Horneado solo reduce contenido de agua sin afectar química",
                        de: "Rösten reduziert nur Wassergehalt ohne Chemie zu beeinflussen",
                        nl: "Roosteren vermindert alleen watergehalte zonder chemie te beïnvloeden"
                    },
                    {
                        en: "Drying increases oxidation to maximum levels for all tea types",
                        es: "Secado aumenta oxidación a niveles máximos para todos tipos de té",
                        de: "Trocknen erhöht Oxidation auf maximale Niveaus für alle Teetypen",
                        nl: "Drogen verhoogt oxidatie tot maximale niveaus voor alle thee types"
                    },
                    {
                        en: "Heat kills bacteria but doesn't affect tea chemistry",
                        es: "Calor mata bacterias pero no afecta química del té",
                        de: "Hitze tötet Bakterien, beeinflusst aber nicht Tee-Chemie",
                        nl: "Hitte doodt bacteriën maar beïnvloedt thee chemie niet"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Firing (typically 90-130°C) serves three critical functions: 1) Heat denatures polyphenol oxidase and peroxidase enzymes, permanently halting oxidation and stabilizing the tea's chemical profile; 2) Reduces moisture content from 50-60% to 2-3%, preventing microbial growth and extending shelf life; 3) Triggers Maillard reactions between amino acids and sugars, creating roasted, toasted, or sweet notes depending on temperature and duration. Light firing preserves floral/vegetal notes (green tea), while heavy firing develops caramelized, nutty, or roasted flavors (some oolongs, hojicha). Proper firing is essential—under-firing leaves enzymes active causing staling, over-firing creates burnt flavors.",
                    es: "Horneado (típicamente 90-130°C) sirve tres funciones críticas: 1) Calor desnaturaliza enzimas polifenol oxidasa y peroxidasa, deteniendo permanentemente oxidación y estabilizando perfil químico del té; 2) Reduce contenido de humedad de 50-60% a 2-3%, previniendo crecimiento microbiano y extendiendo vida útil; 3) Desencadena reacciones de Maillard entre aminoácidos y azúcares, creando notas tostadas o dulces dependiendo de temperatura y duración. Horneado ligero preserva notas florales/vegetales (té verde), mientras horneado fuerte desarrolla sabores caramelizados, de nuez o tostados (algunos oolongs, hojicha). Horneado apropiado es esencial—sub-horneado deja enzimas activas causando envejecimiento, sobre-horneado crea sabores quemados.",
                    de: "Rösten (typisch 90-130°C) erfüllt drei kritische Funktionen: 1) Hitze denaturiert Polyphenoloxidase- und Peroxidase-Enzyme, stoppt Oxidation dauerhaft und stabilisiert chemisches Profil des Tees; 2) Reduziert Feuchtigkeitsgehalt von 50-60% auf 2-3%, verhindert mikrobielles Wachstum und verlängert Haltbarkeit; 3) Löst Maillard-Reaktionen zwischen Aminosäuren und Zuckern aus, schafft geröstete oder süße Noten je nach Temperatur und Dauer. Leichtes Rösten bewahrt blumige/pflanzliche Noten (grüner Tee), während starkes Rösten karamellisierte, nussige oder geröstete Aromen entwickelt (einige Oolongs, Hojicha). Richtiges Rösten ist essentiell—Unter-Rösten lässt Enzyme aktiv und verursacht Alterung, Über-Rösten erzeugt verbrannte Aromen.",
                    nl: "Roosteren (typisch 90-130°C) dient drie kritieke functies: 1) Hitte denatureert polyfenol oxidase en peroxidase enzymen, stopt oxidatie permanent en stabiliseert chemisch profiel van thee; 2) Vermindert vochtgehalte van 50-60% naar 2-3%, voorkomt microbiële groei en verlengt houdbaarheid; 3) Triggert Maillard reacties tussen aminozuren en suikers, creëert geroosterde of zoete tonen afhankelijk van temperatuur en duur. Licht roosteren behoudt bloemen/plantaardige tonen (groene thee), terwijl zwaar roosteren gekarameliseerde, notige of geroosterde smaken ontwikkelt (sommige oolongs, hojicha). Correct roosteren is essentieel—onder-roosteren laat enzymen actief wat veroudering veroorzaakt, over-roosteren creëert verbrande smaken."
                }
            }

