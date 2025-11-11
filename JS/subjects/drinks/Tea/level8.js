// Quiz - Level 8: Drinken - Thee (Tea Science & Chemistry)
(function() {
    "use strict";

    const level8 = {
        name: {
            en: "Tea Science & Chemistry",
            es: "Ciencia y Química del Té",
            de: "Tee-Wissenschaft & Chemie",
            nl: "Thee Wetenschap & Chemie"
        },
        questions: [
            {
                question: {
                    en: "Which specific compound is responsible for the umami flavor in high-quality green teas?",
                    es: "¿Qué compuesto específico es responsable del sabor umami en tés verdes de alta calidad?",
                    de: "Welche spezifische Verbindung ist für den Umami-Geschmack in hochwertigen grünen Tees verantwortlich?",
                    nl: "Welke specifieke verbinding is verantwoordelijk voor de umami smaak in hoogwaardige groene theeën?"
                },
                options: [
                    {
                        en: "L-theanine - amino acid that creates sweet, savory complexity",
                        es: "L-teanina - aminoácido que crea complejidad dulce y salada",
                        de: "L-Theanin - Aminosäure, die süße, herzhafte Komplexität schafft",
                        nl: "L-theanine - aminozuur dat zoete, hartige complexiteit creëert"
                    },
                    {
                        en: "Caffeine - stimulant compound",
                        es: "Cafeína - compuesto estimulante",
                        de: "Koffein - Stimulans-Verbindung",
                        nl: "Cafeïne - stimulerende verbinding"
                    },
                    {
                        en: "Catechins - antioxidant polyphenols",
                        es: "Catequinas - polifenoles antioxidantes",
                        de: "Catechine - antioxidative Polyphenole",
                        nl: "Catechines - antioxidant polyfenolen"
                    },
                    {
                        en: "Chlorophyll - green pigment",
                        es: "Clorofila - pigmento verde",
                        de: "Chlorophyll - grüner Farbstoff",
                        nl: "Chlorofyl - groene kleurstof"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "L-theanine, found in highest concentrations in shade-grown teas, creates the distinctive umami (savory-sweet) flavor and works synergistically with caffeine to provide calm alertness.",
                    es: "L-teanina, encontrada en las más altas concentraciones en tés cultivados en sombra, crea el sabor distintivo umami (salado-dulce) y funciona sinérgicamente con la cafeína para proporcionar alerta calmada.",
                    de: "L-Theanin, in höchster Konzentration in schattig angebauten Tees gefunden, erzeugt den charakteristischen Umami (herzhaft-süßen) Geschmack und wirkt synergistisch mit Koffein für ruhige Wachheit.",
                    nl: "L-theanine, gevonden in hoogste concentraties in schaduw-gekweekte theeën, creëert de kenmerkende umami (hartig-zoete) smaak en werkt synergetisch met cafeïne voor kalme alertheid."
                }
            },
            {
                question: {
                    en: "What chemical transformation occurs during tea oxidation that changes flavor profiles?",
                    es: "¿Qué transformación química ocurre durante la oxidación del té que cambia los perfiles de sabor?",
                    de: "Welche chemische Umwandlung findet während der Tee-Oxidation statt, die Geschmacksprofile verändert?",
                    nl: "Welke chemische transformatie vindt plaats tijdens thee oxidatie die smaakprofielen verandert?"
                },
                options: [
                    {
                        en: "Polyphenol oxidase converts catechins to theaflavins and thearubigins",
                        es: "La polifenol oxidasa convierte catequinas a teaflavinas y tearubiginas",
                        de: "Polyphenoloxidase wandelt Catechine in Theaflavine und Thearubigine um",
                        nl: "Polyfenol oxidase converteert catechines naar theaflavines en thearubigines"
                    },
                    {
                        en: "Caffeine breaks down into simpler compounds",
                        es: "La cafeína se descompone en compuestos más simples",
                        de: "Koffein zerfällt in einfachere Verbindungen",
                        nl: "Cafeïne breekt af in eenvoudigere verbindingen"
                    },
                    {
                        en: "Chlorophyll converts to carotenoids",
                        es: "La clorofila se convierte en carotenoides",
                        de: "Chlorophyll wandelt sich in Karotinoide um",
                        nl: "Chlorofyl converteert naar carotenoïden"
                    },
                    {
                        en: "Water evaporation concentrates all compounds",
                        es: "La evaporación del agua concentra todos los compuestos",
                        de: "Wasserverdunstung konzentriert alle Verbindungen",
                        nl: "Water verdamping concentreert alle verbindingen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "During oxidation, polyphenol oxidase enzyme converts simple catechins into complex theaflavins (brightness, astringency) and thearubigins (depth, color), creating black tea's characteristic flavor.",
                    es: "Durante la oxidación, la enzima polifenol oxidasa convierte catequinas simples en teaflavinas complejas (brillo, astringencia) y tearubiginas (profundidad, color), creando el sabor característico del té negro.",
                    de: "Während der Oxidation wandelt das Enzym Polyphenoloxidase einfache Catechine in komplexe Theaflavine (Helligkeit, Adstringenz) und Thearubigine (Tiefe, Farbe) um, wodurch schwarzer Tees charakteristischer Geschmack entsteht.",
                    nl: "Tijdens oxidatie converteert polyfenol oxidase enzym simpele catechines naar complexe theaflavines (helderheid, samentrekkendheid) en thearubigines (diepte, kleur), zwarte thee's karakteristieke smaak creërend."
                }
            },
            {
                question: {
                    en: "Which polyphenol compound gives tea its primary antioxidant properties?",
                    es: "¿Qué compuesto polifenol le da al té sus propiedades antioxidantes primarias?",
                    de: "Welche Polyphenol-Verbindung verleiht Tee seine primären antioxidativen Eigenschaften?",
                    nl: "Welke polyfenol verbinding geeft thee zijn primaire antioxidant eigenschappen?"
                },
                options: [
                    {
                        en: "EGCG (Epigallocatechin gallate) - most potent catechin antioxidant",
                        es: "EGCG (Galato de epigalocatequina) - antioxidante catequina más potente",
                        de: "EGCG (Epigallocatechin-gallat) - stärkstes Catechin-Antioxidans",
                        nl: "EGCG (Epigallocatechin gallaat) - krachtigste catechine antioxidant"
                    },
                    {
                        en: "Tannins - bitter compounds",
                        es: "Taninos - compuestos amargos",
                        de: "Tannine - bittere Verbindungen",
                        nl: "Tannines - bittere verbindingen"
                    },
                    {
                        en: "Flavonoids - color compounds",
                        es: "Flavonoides - compuestos de color",
                        de: "Flavonoide - Farbverbindungen",
                        nl: "Flavonoïden - kleurverbindingen"
                    },
                    {
                        en: "Essential oils - aromatic compounds",
                        es: "Aceites esenciales - compuestos aromáticos",
                        de: "Ätherische Öle - aromatische Verbindungen",
                        nl: "Essentiële oliën - aromatische verbindingen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "EGCG (Epigallocatechin gallate) is the most abundant and bioactive catechin in tea, providing powerful antioxidant activity and accounting for many of tea's health benefits.",
                    es: "EGCG (Galato de epigalocatequina) es la catequina más abundante y bioactiva en el té, proporcionando poderosa actividad antioxidante y explicando muchos de los beneficios para la salud del té.",
                    de: "EGCG (Epigallocatechin-gallat) ist das häufigste und bioaktivste Catechin im Tee und bietet starke antioxidative Aktivität und erklärt viele der gesundheitlichen Vorteile von Tee.",
                    nl: "EGCG (Epigallocatechin gallaat) is de meest voorkomende en bioactieve catechine in thee, krachtige antioxidant activiteit biedend en veel van thee's gezondheidsvoordelen verklarend."
                }
            },
            {
                question: {
                    en: "How does altitude affect the chemical composition of tea leaves?",
                    es: "¿Cómo afecta la altitud la composición química de las hojas de té?",
                    de: "Wie beeinflusst die Höhe die chemische Zusammensetzung von Teeblättern?",
                    nl: "Hoe beïnvloedt hoogte de chemische samenstelling van thee bladeren?"
                },
                options: [
                    {
                        en: "UV stress increases polyphenol production and concentrates flavor compounds",
                        es: "El estrés UV aumenta la producción de polifenoles y concentra compuestos de sabor",
                        de: "UV-Stress erhöht Polyphenol-Produktion und konzentriert Geschmacksverbindungen",
                        nl: "UV stress verhoogt polyfenol productie en concentreert smaakverbindingen"
                    },
                    {
                        en: "Higher altitude reduces all chemical compounds equally",
                        es: "Mayor altitud reduce todos los compuestos químicos igualmente",
                        de: "Höhere Höhe reduziert alle chemischen Verbindungen gleichmäßig",
                        nl: "Hogere hoogte vermindert alle chemische verbindingen gelijkmatig"
                    },
                    {
                        en: "Altitude only affects leaf color, not chemistry",
                        es: "La altitud solo afecta el color de las hojas, no la química",
                        de: "Höhe beeinflusst nur Blattfarbe, nicht Chemie",
                        nl: "Hoogte beïnvloedt alleen bladkleur, niet chemie"
                    },
                    {
                        en: "Mountain air removes flavor compounds from leaves",
                        es: "El aire de montaña elimina compuestos de sabor de las hojas",
                        de: "Bergluft entfernt Geschmacksverbindungen aus Blättern",
                        nl: "Berglucht verwijdert smaakverbindingen uit bladeren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "High altitude exposure to UV radiation and temperature stress causes tea plants to produce higher concentrations of protective polyphenols and flavor compounds, creating more complex and intense teas.",
                    es: "La exposición a gran altitud a radiación UV y estrés de temperatura hace que las plantas de té produzcan mayores concentraciones de polifenoles protectores y compuestos de sabor, creando tés más complejos e intensos.",
                    de: "Hohe Höhenexposition gegenüber UV-Strahlung und Temperaturstress veranlasst Teepflanzen, höhere Konzentrationen schützender Polyphenole und Geschmacksverbindungen zu produzieren, wodurch komplexere und intensivere Tees entstehen.",
                    nl: "Hoge hoogte blootstelling aan UV straling en temperatuur stress veroorzaakt dat thee planten hogere concentraties beschermende polyfenolen en smaakverbindingen produceren, complexere en intensere theeën creërend."
                }
            },
            {
                question: {
                    en: "What causes the 'cream down' phenomenon when black tea cools?",
                    es: "¿Qué causa el fenómeno de 'cream down' cuando el té negro se enfría?",
                    de: "Was verursacht das 'Cream Down'-Phänomen, wenn schwarzer Tee abkühlt?",
                    nl: "Wat veroorzaakt het 'cream down' fenomeen wanneer zwarte thee afkoelt?"
                },
                options: [
                    {
                        en: "Theaflavin and caffeine complex precipitation creates cloudiness",
                        es: "La precipitación del complejo teaflavina y cafeína crea turbiedad",
                        de: "Theaflavin- und Koffein-Komplex-Präzipitation erzeugt Trübung",
                        nl: "Theaflavine en cafeïne complex precipitatie creëert troebeling"
                    },
                    {
                        en: "Natural milk proteins forming in the tea",
                        es: "Proteínas lácteas naturales formándose en el té",
                        de: "Natürliche Milchproteine bilden sich im Tee",
                        nl: "Natuurlijke melkproteïnes vormen zich in de thee"
                    },
                    {
                        en: "Sugar crystallization at lower temperatures",
                        es: "Cristalización de azúcar a temperaturas más bajas",
                        de: "Zuckerkristallisation bei niedrigeren Temperaturen",
                        nl: "Suiker kristallisatie bij lagere temperaturen"
                    },
                    {
                        en: "Oxidation continuing after brewing",
                        es: "Oxidación continuando después de la preparación",
                        de: "Oxidation setzt nach dem Brühen fort",
                        nl: "Oxidatie die doorgaat na het zetten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Cream down occurs when theaflavins and caffeine form complexes that precipitate as tea cools, creating cloudiness that indicates high-quality, theaflavin-rich black tea.",
                    es: "Cream down ocurre cuando las teaflavinas y la cafeína forman complejos que precipitan cuando el té se enfría, creando turbiedad que indica té negro de alta calidad, rico en teaflavinas.",
                    de: "Cream Down tritt auf, wenn Theaflavine und Koffein Komplexe bilden, die beim Abkühlen des Tees präzipitieren und Trübung erzeugen, die hochwertigen, theaflavin-reichen schwarzen Tee anzeigt.",
                    nl: "Cream down treedt op wanneer theaflavines en cafeïne complexen vormen die precipiteren wanneer thee afkoelt, troebeling creërend die hoogwaardige, theaflavine-rijke zwarte thee aangeeft."
                }
            },
            {
                question: {
                    en: "Which enzyme is responsible for the browning reaction during tea processing?",
                    es: "¿Qué enzima es responsable de la reacción de pardeamiento durante el procesamiento del té?",
                    de: "Welches Enzym ist für die Bräunungsreaktion während der Teeverarbeitung verantwortlich?",
                    nl: "Welk enzym is verantwoordelijk voor de verbruining reactie tijdens thee verwerking?"
                },
                options: [
                    {
                        en: "Polyphenol oxidase (PPO) - catalyzes oxidation of catechins",
                        es: "Polifenol oxidasa (PPO) - cataliza la oxidación de catequinas",
                        de: "Polyphenoloxidase (PPO) - katalysiert Oxidation von Catechinen",
                        nl: "Polyfenol oxidase (PPO) - katalyseert oxidatie van catechines"
                    },
                    {
                        en: "Amylase - breaks down starches",
                        es: "Amilasa - descompone almidones",
                        de: "Amylase - baut Stärken ab",
                        nl: "Amylase - breekt zetmeel af"
                    },
                    {
                        en: "Cellulase - breaks down cell walls",
                        es: "Celulasa - descompone paredes celulares",
                        de: "Cellulase - baut Zellwände ab",
                        nl: "Cellulase - breekt celwanden af"
                    },
                    {
                        en: "Protease - breaks down proteins",
                        es: "Proteasa - descompone proteínas",
                        de: "Protease - baut Proteine ab",
                        nl: "Protease - breekt proteïnes af"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Polyphenol oxidase (PPO) is the key enzyme that catalyzes the oxidation of catechins into theaflavins and thearubigins, creating the brown color and complex flavors in oxidized teas.",
                    es: "La polifenol oxidasa (PPO) es la enzima clave que cataliza la oxidación de catequinas en teaflavinas y tearubiginas, creando el color marrón y sabores complejos en tés oxidados.",
                    de: "Polyphenoloxidase (PPO) ist das Schlüsselenzym, das die Oxidation von Catechinen zu Theaflavinen und Thearubiginen katalysiert und braune Farbe und komplexe Aromen in oxidierten Tees erzeugt.",
                    nl: "Polyfenol oxidase (PPO) is het sleutelenzym dat de oxidatie van catechines naar theaflavines en thearubigines katalyseert, de bruine kleur en complexe smaken in geoxideerde theeën creërend."
                }
            },
            {
                question: {
                    en: "What determines the caffeine content variation between different tea types?",
                    es: "¿Qué determina la variación del contenido de cafeína entre diferentes tipos de té?",
                    de: "Was bestimmt die Variation des Koffeingehalts zwischen verschiedenen Teetypen?",
                    nl: "Wat bepaalt de cafeïne gehalte variatie tussen verschillende thee types?"
                },
                options: [
                    {
                        en: "Leaf position (buds highest), processing method, and brewing parameters",
                        es: "Posición de la hoja (brotes más altos), método de procesamiento y parámetros de preparación",
                        de: "Blattposition (Knospen am höchsten), Verarbeitungsmethode und Brühparameter",
                        nl: "Bladpositie (knoppen hoogst), verwerkingsmethode en zet parameters"
                    },
                    {
                        en: "Only the color of the final brewed tea",
                        es: "Solo el color del té preparado final",
                        de: "Nur die Farbe des final gebrühten Tees",
                        nl: "Alleen de kleur van de uiteindelijke gezette thee"
                    },
                    {
                        en: "Geographic origin exclusively determines caffeine",
                        es: "El origen geográfico determina exclusivamente la cafeína",
                        de: "Geografischer Ursprung bestimmt ausschließlich Koffein",
                        nl: "Geografische oorsprong bepaalt uitsluitend cafeïne"
                    },
                    {
                        en: "Age of the tea leaves when harvested",
                        es: "Edad de las hojas de té cuando se cosechan",
                        de: "Alter der Teeblätter bei der Ernte",
                        nl: "Leeftijd van de thee bladeren bij oogst"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Caffeine content is highest in young buds and tips, varies by processing (oxidation doesn't significantly change caffeine), and is most affected by brewing temperature, time, and leaf-to-water ratio.",
                    es: "El contenido de cafeína es más alto en brotes y puntas jóvenes, varía por procesamiento (la oxidación no cambia significativamente la cafeína), y es más afectado por temperatura de preparación, tiempo y proporción hoja-agua.",
                    de: "Koffeingehalt ist in jungen Knospen und Spitzen am höchsten, variiert durch Verarbeitung (Oxidation ändert Koffein nicht wesentlich) und wird am meisten durch Brühtemperatur, Zeit und Blatt-zu-Wasser-Verhältnis beeinflusst.",
                    nl: "Cafeïne gehalte is hoogst in jonge knoppen en tips, varieert door verwerking (oxidatie verandert cafeïne niet significant), en wordt het meest beïnvloed door zettemperatuur, tijd en blad-tot-water verhouding."
                }
            },
            {
                question: {
                    en: "Which volatile organic compounds are for tea aroma?",
                    es: "¿Qué compuestos orgánicos volátiles son principalmente responsables del aroma del té?",
                    de: "Welche flüchtigen organischen Verbindungen sind hauptsächlich für das Tee-Aroma verantwortlich?",
                    nl: "Welke vluchtige organische verbindingen zijn primair verantwoordelijk voor thee aroma?"
                },
                options: [
                    {
                        en: "Esters, alcohols, aldehydes, and terpenes create distinct aromatic profiles",
                        es: "Ésteres, alcoholes, aldehídos y terpenos crean perfiles aromáticos distintos",
                        de: "Ester, Alkohole, Aldehyde und Terpene schaffen charakteristische Aromaprofile",
                        nl: "Esters, alcoholen, aldehyden en terpenen creëren kenmerkende aromatische profielen"
                    },
                    {
                        en: "Only caffeine contributes to tea aroma",
                        es: "Solo la cafeína contribuye al aroma del té",
                        de: "Nur Koffein trägt zum Tee-Aroma bei",
                        nl: "Alleen cafeïne draagt bij aan thee aroma"
                    },
                    {
                        en: "Water minerals determine all aromatic properties",
                        es: "Los minerales del agua determinan todas las propiedades aromáticas",
                        de: "Wassermineralien bestimmen alle aromatischen Eigenschaften",
                        nl: "Water mineralen bepalen alle aromatische eigenschappen"
                    },
                    {
                        en: "Chlorophyll breakdown creates all tea aromas",
                        es: "La descomposición de la clorofila crea todos los aromas del té",
                        de: "Chlorophyll-Abbau erzeugt alle Tee-Aromen",
                        nl: "Chlorofyl afbraak creëert alle thee aroma's"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Tea aroma comes from complex mixtures of volatile compounds: floral esters, fruity aldehydes, woody terpenes, and grassy alcohols that vary by tea type, processing, and terroir.",
                    es: "El aroma del té proviene de mezclas complejas de compuestos volátiles: ésteres florales, aldehídos afrutados, terpenos amaderados y alcoholes herbáceos que varían por tipo de té, procesamiento y terroir.",
                    de: "Tee-Aroma stammt aus komplexen Mischungen flüchtiger Verbindungen: florale Ester, fruchtige Aldehyde, holzige Terpene und grasige Alkohole, die je nach Teetyp, Verarbeitung und Terroir variieren.",
                    nl: "Thee aroma komt van complexe mengsels van vluchtige verbindingen: florale esters, fruitige aldehyden, houterige terpenen en grasachtige alcoholen die variëren per thee type, verwerking en terroir."
                }
            },
            {
                question: {
                    en: "How does water chemistry specifically affect tea extraction and flavor?",
                    es: "¿Cómo afecta específicamente la química del agua la extracción y sabor del té?",
                    de: "Wie beeinflusst Wasserchemie spezifisch Tee-Extraktion und -Geschmack?",
                    nl: "Hoe beïnvloedt waterchemie specifiek thee extractie en smaak?"
                },
                options: [
                    {
                        en: "pH and mineral content affect polyphenol extraction and color development",
                        es: "El pH y contenido mineral afectan la extracción de polifenoles y desarrollo del color",
                        de: "pH-Wert und Mineralgehalt beeinflussen Polyphenol-Extraktion und Farbentwicklung",
                        nl: "pH en mineraal gehalte beïnvloeden polyfenol extractie en kleururontwikkeling"
                    },
                    {
                        en: "Only temperature matters for extraction",
                        es: "Solo la temperatura importa para la extracción",
                        de: "Nur Temperatur ist wichtig für Extraktion",
                        nl: "Alleen temperatuur is belangrijk voor extractie"
                    },
                    {
                        en: "Water chemistry has no effect on tea taste",
                        es: "La química del agua no tiene efecto en el sabor del té",
                        de: "Wasserchemie hat keinen Einfluss auf Teegeschmack",
                        nl: "Waterchemie heeft geen effect op thee smaak"
                    },
                    {
                        en: "All water produces identical tea flavors",
                        es: "Toda el agua produce sabores idénticos de té",
                        de: "Alles Wasser produziert identische Tee-Aromen",
                        nl: "Al het water produceert identieke thee smaken"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Water pH affects polyphenol stability and extraction rates, while minerals like calcium and magnesium influence color development, astringency, and overall flavor balance in the final brew.",
                    es: "El pH del agua afecta la estabilidad de los polifenoles y las tasas de extracción, mientras que minerales como calcio y magnesio influyen en el desarrollo del color, astringencia y equilibrio general del sabor en la preparación final.",
                    de: "Wasser-pH beeinflusst Polyphenol-Stabilität und Extraktionsraten, während Mineralien wie Kalzium und Magnesium Farbentwicklung, Adstringenz und allgemeine Geschmacksbalance im finalen Aufguss beeinflussen.",
                    nl: "Water pH beïnvloedt polyfenol stabiliteit en extractie snelheden, terwijl mineralen zoals calcium en magnesium kleurontwikkeling, samentrekkendheid en algemene smaakbalans in de finale brew beïnvloeden."
                }
            },
            {
                question: {
                    en: "What happens to tea compounds during the aging process in pu-erh tea?",
                    es: "¿Qué pasa con los compuestos del té durante el proceso de envejecimiento en el té pu-erh?",
                    de: "Was geschieht mit Teeverbindungen während des Alterungsprozesses in Pu-erh-Tee?",
                    nl: "Wat gebeurt er met thee verbindingen tijdens het rijpingsproces in pu-erh thee?"
                },
                options: [
                    {
                        en: "Microbial fermentation transforms catechins into theabrownins and gallic acids",
                        es: "La fermentación microbiana transforma catequinas en teabrowninas y ácidos gálicos",
                        de: "Mikrobielle Fermentation wandelt Catechine in Theabrownine und Gallussäuren um",
                        nl: "Microbiële fermentatie transformeert catechines in theabrownines en gallic zuren"
                    },
                    {
                        en: "Aging only removes water from the tea",
                        es: "El envejecimiento solo elimina agua del té",
                        de: "Alterung entfernt nur Wasser aus dem Tee",
                        nl: "Rijping verwijdert alleen water uit de thee"
                    },
                    {
                        en: "All compounds remain exactly the same over time",
                        es: "Todos los compuestos permanecen exactamente iguales con el tiempo",
                        de: "Alle Verbindungen bleiben über die Zeit genau gleich",
                        nl: "Alle verbindingen blijven precies hetzelfde over tijd"
                    },
                    {
                        en: "Caffeine converts to sugar during aging",
                        es: "La cafeína se convierte en azúcar durante el envejecimiento",
                        de: "Koffein wandelt sich während der Alterung in Zucker um",
                        nl: "Cafeïne converteert naar suiker tijdens rijping"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "During pu-erh aging, beneficial microorganisms gradually transform astringent catechins into smoother theabrownins and gallic acids, reducing bitterness and creating complex, mellow flavors over decades.",
                    es: "Durante el envejecimiento del pu-erh, microorganismos beneficiosos transforman gradualmente catequinas astringentes en teabrowninas más suaves y ácidos gálicos, reduciendo amargura y creando sabores complejos y suaves durante décadas.",
                    de: "Während der Pu-erh-Alterung transformieren nützliche Mikroorganismen allmählich adstringierende Catechine in geschmeidigere Theabrownine und Gallussäuren, reduzieren Bitterkeit und schaffen komplexe, milde Aromen über Jahrzehnte.",
                    nl: "Tijdens pu-erh rijping transformeren nuttige microorganismen geleidelijk samentrekkende catechines in zachtere theabrownines en gallic zuren, bitterheid verminderende en complexe, zachte smaken creërende gedurende decennia."
                }
            },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
