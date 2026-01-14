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
            {
                question: {
                    en: "What role do amino acids play in tea flavor beyond L-theanine?",
                    es: "¿Qué papel juegan los aminoácidos en el sabor del té más allá de la L-teanina?",
                    de: "Welche Rolle spielen Aminosäuren im Tee-Geschmack über L-Theanin hinaus?",
                    nl: "Welke rol spelen aminozuren in thee smaak behalve L-theanine?"
                },
                options: [
                    {
                        en: "Contribute sweetness, mouthfeel, and undergo Maillard reactions creating roasted flavors",
                        es: "Contribuyen dulzura, sensación en boca y sufren reacciones de Maillard creando sabores tostados",
                        de: "Tragen Süße, Mundgefühl bei und durchlaufen Maillard-Reaktionen, die Röstaromen erzeugen",
                        nl: "Dragen bij aan zoetheid, mondgevoel en ondergaan Maillard reacties die geroosterde smaken creëren"
                    },
                    {
                        en: "Only provide nitrogen for plant growth",
                        es: "Solo proporcionan nitrógeno para el crecimiento de las plantas",
                        de: "Liefern nur Stickstoff für Pflanzenwachstum",
                        nl: "Bieden alleen stikstof voor plantengroei"
                    },
                    {
                        en: "Have no impact on tea flavor whatsoever",
                        es: "No tienen ningún impacto en el sabor del té",
                        de: "Haben überhaupt keinen Einfluss auf Teegeschmack",
                        nl: "Hebben absoluut geen impact op thee smaak"
                    },
                    {
                        en: "Cause bitterness and astringency in all teas",
                        es: "Causan amargura y astringencia en todos los tés",
                        de: "Verursachen Bitterkeit und Adstringenz in allen Tees",
                        nl: "Veroorzaken bitterheid en samentrekkendheid in alle theeën"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Besides L-theanine's umami, amino acids like glutamine, arginine, and serine contribute natural sweetness and rich mouthfeel. During roasting, they undergo Maillard reactions with sugars, creating nutty, toasted aromatics.",
                    es: "Además del umami de L-teanina, aminoácidos como glutamina, arginina y serina contribuyen dulzura natural y sensación en boca rica. Durante el tostado, sufren reacciones de Maillard con azúcares, creando aromáticos de nuez y tostados.",
                    de: "Neben L-Theanins Umami tragen Aminosäuren wie Glutamin, Arginin und Serin natürliche Süße und reiches Mundgefühl bei. Beim Rösten durchlaufen sie Maillard-Reaktionen mit Zuckern und erzeugen nussige, geröstete Aromen.",
                    nl: "Naast L-theanine's umami dragen aminozuren zoals glutamine, arginine en serine bij aan natuurlijke zoetheid en rijk mondgevoel. Tijdens roosteren ondergaan ze Maillard reacties met suikers, nootachtige, geroosterde aromaten creërend."
                }
            },
            {
                question: {
                    en: "How does the terroir concept apply scientifically to tea chemistry?",
                    es: "¿Cómo se aplica científicamente el concepto de terroir a la química del té?",
                    de: "Wie gilt das Terroir-Konzept wissenschaftlich für Tee-Chemie?",
                    nl: "Hoe past het terroir concept wetenschappelijk toe op thee chemie?"
                },
                options: [
                    {
                        en: "Soil mineral composition, climate, and microbiome uniquely affect secondary metabolite profiles",
                        es: "Composición mineral del suelo, clima y microbioma afectan únicamente perfiles de metabolitos secundarios",
                        de: "Bodenmineralzusammensetzung, Klima und Mikrobiom beeinflussen einzigartig Sekundärmetabolit-Profile",
                        nl: "Bodem mineraal samenstelling, klimaat en microbioom beïnvloeden uniek secundaire metaboliet profielen"
                    },
                    {
                        en: "Terroir is only a marketing term with no scientific basis",
                        es: "Terroir es solo un término de marketing sin base científica",
                        de: "Terroir ist nur ein Marketing-Begriff ohne wissenschaftliche Grundlage",
                        nl: "Terroir is alleen een marketingterm zonder wetenschappelijke basis"
                    },
                    {
                        en: "Location only affects leaf size, not chemical composition",
                        es: "La ubicación solo afecta el tamaño de la hoja, no la composición química",
                        de: "Standort beeinflusst nur Blattgröße, nicht chemische Zusammensetzung",
                        nl: "Locatie beïnvloedt alleen bladgrootte, niet chemische samenstelling"
                    },
                    {
                        en: "All tea plants produce identical compounds regardless of location",
                        es: "Todas las plantas de té producen compuestos idénticos independientemente de la ubicación",
                        de: "Alle Teepflanzen produzieren identische Verbindungen unabhängig vom Standort",
                        nl: "Alle thee planten produceren identieke verbindingen ongeacht locatie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Terroir scientifically influences tea through soil minerals affecting nutrient uptake, climate stressing plants to produce protective polyphenols, and local microorganisms creating unique volatile compounds - measurable via chromatography and metabolomics.",
                    es: "Terroir influye científicamente en el té a través de minerales del suelo afectando absorción de nutrientes, clima estresando plantas para producir polifenoles protectores y microorganismos locales creando compuestos volátiles únicos - medibles vía cromatografía y metabolómica.",
                    de: "Terroir beeinflusst Tee wissenschaftlich durch Bodenmineralien, die Nährstoffaufnahme beeinflussen, Klima, das Pflanzen stresst, schützende Polyphenole zu produzieren, und lokale Mikroorganismen, die einzigartige flüchtige Verbindungen erzeugen - messbar via Chromatographie und Metabolomik.",
                    nl: "Terroir beïnvloedt thee wetenschappelijk door bodem mineralen die nutriëntenopname beïnvloeden, klimaat dat planten stresst om beschermende polyfenolen te produceren, en lokale microorganismen die unieke vluchtige verbindingen creëren - meetbaar via chromatografie en metabolomics."
                }
            },
            {
                question: {
                    en: "What chemical changes occur when tea is steamed versus pan-fired for kill-green?",
                    es: "¿Qué cambios químicos ocurren cuando el té es al vapor versus salteado en sartén para kill-green?",
                    de: "Welche chemischen Veränderungen treten auf, wenn Tee gedämpft versus pfannengeröstet wird für Kill-Green?",
                    nl: "Welke chemische veranderingen treden op wanneer thee wordt gestoomd versus pan-gebakken voor kill-green?"
                },
                options: [
                    {
                        en: "Steaming preserves more chlorophyll and amino acids; pan-firing creates roasted aromatics",
                        es: "Vapor preserva más clorofila y aminoácidos; salteado en sartén crea aromáticos tostados",
                        de: "Dämpfen bewahrt mehr Chlorophyll und Aminosäuren; Pfannenrösten erzeugt Röstaromen",
                        nl: "Stomen behoudt meer chlorofyl en aminozuren; pan-bakken creëert geroosterde aromaten"
                    },
                    {
                        en: "Both methods produce chemically identical results",
                        es: "Ambos métodos producen resultados químicamente idénticos",
                        de: "Beide Methoden produzieren chemisch identische Ergebnisse",
                        nl: "Beide methoden produceren chemisch identieke resultaten"
                    },
                    {
                        en: "Steaming removes all flavor compounds completely",
                        es: "Vapor elimina todos los compuestos de sabor completamente",
                        de: "Dämpfen entfernt alle Geschmacksverbindungen vollständig",
                        nl: "Stomen verwijdert alle smaakverbindingen volledig"
                    },
                    {
                        en: "Pan-firing destroys all antioxidants in tea leaves",
                        es: "Salteado en sartén destruye todos los antioxidantes en hojas de té",
                        de: "Pfannenrösten zerstört alle Antioxidantien in Teeblättern",
                        nl: "Pan-bakken vernietigt alle antioxidanten in thee bladeren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Steaming (95-100°C) preserves vibrant green chlorophyll and delicate amino acids, creating grassy, seaweed notes. Pan-firing (280-320°C) drives Maillard reactions, producing nutty, chestnut aromatics while developing more robust body.",
                    es: "Vapor (95-100°C) preserva clorofila verde vibrante y aminoácidos delicados, creando notas herbáceas y de algas marinas. Salteado en sartén (280-320°C) impulsa reacciones de Maillard, produciendo aromáticos de nuez y castaña mientras desarrolla cuerpo más robusto.",
                    de: "Dämpfen (95-100°C) bewahrt lebendiges grünes Chlorophyll und zarte Aminosäuren, erzeugt grasige, Seetang-Noten. Pfannenrösten (280-320°C) treibt Maillard-Reaktionen an, produziert nussige, Kastanien-Aromen während robusterer Körper entwickelt wird.",
                    nl: "Stomen (95-100°C) behoudt levendig groen chlorofyl en delicate aminozuren, grasachtige, zeewier noten creërend. Pan-bakken (280-320°C) drijft Maillard reacties aan, nootachtige, kastanje aromaten producerend terwijl robuustere body ontwikkelt wordt."
                }
            },
            {
                question: {
                    en: "What causes the distinctive 'orchid' aroma in high-quality oolong teas?",
                    es: "¿Qué causa el distintivo aroma de 'orquídea' en tés oolong de alta calidad?",
                    de: "Was verursacht das charakteristische 'Orchideen'-Aroma in hochwertigen Oolong-Tees?",
                    nl: "Wat veroorzaakt het kenmerkende 'orchidee' aroma in hoogwaardige oolong theeën?"
                },
                options: [
                    {
                        en: "Specific terpene and ester formation during partial oxidation and shaking",
                        es: "Formación específica de terpenos y ésteres durante oxidación parcial y agitación",
                        de: "Spezifische Terpen- und Esterbildung während partieller Oxidation und Schütteln",
                        nl: "Specifieke terpeen en ester vorming tijdens gedeeltelijke oxidatie en schudden"
                    },
                    {
                        en: "Orchid flowers are added during processing",
                        es: "Flores de orquídea se agregan durante el procesamiento",
                        de: "Orchideenblüten werden während der Verarbeitung hinzugefügt",
                        nl: "Orchidee bloemen worden toegevoegd tijdens verwerking"
                    },
                    {
                        en: "Caffeine breakdown creates floral notes",
                        es: "Descomposición de cafeína crea notas florales",
                        de: "Koffeinabbau erzeugt florale Noten",
                        nl: "Cafeïne afbraak creëert florale noten"
                    },
                    {
                        en: "Chlorophyll oxidation produces orchid scent",
                        es: "Oxidación de clorofila produce aroma de orquídea",
                        de: "Chlorophyll-Oxidation produziert Orchideenduft",
                        nl: "Chlorofyl oxidatie produceert orchidee geur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Oolong's floral aromatics emerge from controlled oxidation (30-70%) combined with bruising/shaking, which ruptures cells, releasing enzymes that form linalool, geraniol, and jasmine lactone - volatile terpenes and esters creating orchid-like fragrance.",
                    es: "Los aromáticos florales del oolong emergen de oxidación controlada (30-70%) combinada con magullamiento/agitación, que rompe células, liberando enzimas que forman linalool, geraniol y lactona de jazmín - terpenos volátiles y ésteres creando fragancia como orquídea.",
                    de: "Oolongs florale Aromen entstehen aus kontrollierter Oxidation (30-70%) kombiniert mit Quetschen/Schütteln, was Zellen rupturiert, Enzyme freisetzend, die Linalool, Geraniol und Jasminlacton bilden - flüchtige Terpene und Ester, die orchideenartige Duftstoffe erzeugen.",
                    nl: "Oolong's florale aromaten ontstaan uit gecontroleerde oxidatie (30-70%) gecombineerd met kneuzen/schudden, wat cellen scheurt, enzymen vrijmakend die linalool, geraniol en jasmijn lacton vormen - vluchtige terpenen en esters die orchidee-achtige geur creëren."
                }
            },
            {
                question: {
                    en: "How do shade-growing techniques chemically alter tea leaf composition?",
                    es: "¿Cómo alteran químicamente las técnicas de cultivo en sombra la composición de las hojas de té?",
                    de: "Wie verändern Schattenanbau-Techniken chemisch die Teeblatt-Zusammensetzung?",
                    nl: "Hoe veranderen schaduwteelt technieken chemisch de thee blad samenstelling?"
                },
                options: [
                    {
                        en: "Reduced photosynthesis increases L-theanine and chlorophyll while decreasing catechins",
                        es: "Fotosíntesis reducida aumenta L-teanina y clorofila mientras disminuye catequinas",
                        de: "Reduzierte Photosynthese erhöht L-Theanin und Chlorophyll während Catechine abnehmen",
                        nl: "Verminderde fotosynthese verhoogt L-theanine en chlorofyl terwijl catechines afnemen"
                    },
                    {
                        en: "Shade removes all flavor compounds from leaves",
                        es: "Sombra elimina todos los compuestos de sabor de las hojas",
                        de: "Schatten entfernt alle Geschmacksverbindungen aus Blättern",
                        nl: "Schaduw verwijdert alle smaakverbindingen uit bladeren"
                    },
                    {
                        en: "Shading only affects leaf color, not chemistry",
                        es: "Sombreado solo afecta el color de la hoja, no la química",
                        de: "Beschattung beeinflusst nur Blattfarbe, nicht Chemie",
                        nl: "Beschaduwing beïnvloedt alleen bladkleur, niet chemie"
                    },
                    {
                        en: "Shade increases bitter compounds for stronger flavor",
                        es: "Sombra aumenta compuestos amargos para sabor más fuerte",
                        de: "Schatten erhöht bittere Verbindungen für stärkeren Geschmack",
                        nl: "Schaduw verhoogt bittere verbindingen voor sterkere smaak"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Shade (70-90% coverage for 2-4 weeks pre-harvest) reduces UV stress, so plants don't produce defensive catechins. Instead, they accumulate L-theanine (sweet umami) and chlorophyll (vibrant green), creating premium gyokuro and matcha profiles.",
                    es: "Sombra (70-90% cobertura por 2-4 semanas pre-cosecha) reduce estrés UV, así que plantas no producen catequinas defensivas. En cambio, acumulan L-teanina (umami dulce) y clorofila (verde vibrante), creando perfiles premium de gyokuro y matcha.",
                    de: "Schatten (70-90% Abdeckung 2-4 Wochen vor Ernte) reduziert UV-Stress, sodass Pflanzen keine defensiven Catechine produzieren. Stattdessen akkumulieren sie L-Theanin (süßes Umami) und Chlorophyll (lebendiges Grün), Premium-Gyokuro- und Matcha-Profile erzeugend.",
                    nl: "Schaduw (70-90% bedekking voor 2-4 weken vóór oogst) vermindert UV stress, zodat planten geen defensieve catechines produceren. In plaats daarvan accumuleren ze L-theanine (zoet umami) en chlorofyl (levendig groen), premium gyokuro en matcha profielen creërend."
                }
            },
            {
                question: {
                    en: "What chemical mechanism causes tea to develop astringency?",
                    es: "¿Qué mecanismo químico causa que el té desarrolle astringencia?",
                    de: "Welcher chemische Mechanismus verursacht, dass Tee Adstringenz entwickelt?",
                    nl: "Welk chemisch mechanisme veroorzaakt dat thee samentrekkendheid ontwikkelt?"
                },
                options: [
                    {
                        en: "Polyphenols (tannins) bind to salivary proteins, precipitating them and creating dry sensation",
                        es: "Polifenoles (taninos) se unen a proteínas salivales, precipitándolas y creando sensación seca",
                        de: "Polyphenole (Tannine) binden an Speichelproteine, präzipitieren sie und erzeugen trockene Sensation",
                        nl: "Polyfenolen (tannines) binden aan speekselproteïnes, precipiterend en droge sensatie creërend"
                    },
                    {
                        en: "Sugar crystallization on the tongue causes dryness",
                        es: "Cristalización de azúcar en la lengua causa sequedad",
                        de: "Zuckerkristallisation auf der Zunge verursacht Trockenheit",
                        nl: "Suiker kristallisatie op de tong veroorzaakt droogheid"
                    },
                    {
                        en: "Caffeine removes moisture from mouth tissues",
                        es: "Cafeína elimina humedad de tejidos de la boca",
                        de: "Koffein entfernt Feuchtigkeit aus Mundgewebe",
                        nl: "Cafeïne verwijdert vocht uit mondweefsels"
                    },
                    {
                        en: "Salt content dehydrates the palate directly",
                        es: "Contenido de sal deshidrata el paladar directamente",
                        de: "Salzgehalt dehydriert den Gaumen direkt",
                        nl: "Zoutgehalte dehydrateert het gehemelte direct"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Astringency results from polyphenols (catechins, theaflavins) binding to proline-rich salivary proteins, forming insoluble complexes that precipitate. This removes the lubricating saliva film, creating a dry, puckering mouthfeel.",
                    es: "Astringencia resulta de polifenoles (catequinas, teaflavinas) uniéndose a proteínas salivales ricas en prolina, formando complejos insolubles que precipitan. Esto elimina la película de saliva lubricante, creando sensación en boca seca y frunciente.",
                    de: "Adstringenz resultiert aus Polyphenolen (Catechinen, Theaflavinen), die an prolin-reiche Speichelproteine binden, unlösliche Komplexe bilden, die präzipitieren. Dies entfernt den schmierenden Speichelfilm, erzeugt trockenes, zusammenziehendes Mundgefühl.",
                    nl: "Samentrekkendheid resulteert uit polyfenolen (catechines, theaflavines) die binden aan proline-rijke speekselproteïnes, onoplosbare complexen vormend die precipiteren. Dit verwijdert de smerende speekselfilm, droog, samentrekkend mondgevoel creërend."
                }
            },
            {
                question: {
                    en: "What role does temperature play in volatile aroma compound release during brewing?",
                    es: "¿Qué papel juega la temperatura en la liberación de compuestos aromáticos volátiles durante la preparación?",
                    de: "Welche Rolle spielt Temperatur bei der Freisetzung flüchtiger Aromaverbindungen während des Brühens?",
                    nl: "Welke rol speelt temperatuur bij het vrijmaken van vluchtige aroma verbindingen tijdens het zetten?"
                },
                options: [
                    {
                        en: "Higher temps volatilize light aromatics faster but can degrade delicate compounds",
                        es: "Temperaturas más altas volatilizan aromáticos ligeros más rápido pero pueden degradar compuestos delicados",
                        de: "Höhere Temperaturen verflüchtigen leichte Aromen schneller, können aber zarte Verbindungen abbauen",
                        nl: "Hogere temperaturen vervluchtigen lichte aromaten sneller maar kunnen delicate verbindingen degraderen"
                    },
                    {
                        en: "Temperature has no effect on aroma release",
                        es: "La temperatura no tiene efecto en la liberación de aroma",
                        de: "Temperatur hat keinen Einfluss auf Aromafreisetzung",
                        nl: "Temperatuur heeft geen effect op aroma vrijmaking"
                    },
                    {
                        en: "Cold water releases more aromatics than hot water",
                        es: "Agua fría libera más aromáticos que agua caliente",
                        de: "Kaltes Wasser setzt mehr Aromen frei als heißes Wasser",
                        nl: "Koud water maakt meer aromaten vrij dan heet water"
                    },
                    {
                        en: "All aromatics are destroyed at any brewing temperature",
                        es: "Todos los aromáticos se destruyen a cualquier temperatura de preparación",
                        de: "Alle Aromen werden bei jeder Brühtemperatur zerstört",
                        nl: "Alle aromaten worden vernietigd bij elke zettemperatuur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Temperature affects vapor pressure: higher temps (90-100°C) quickly volatilize aromatics for robust teas, but can denature delicate floral esters in green/white teas. Cooler water (60-80°C) preserves subtle fragrance compounds.",
                    es: "La temperatura afecta la presión de vapor: temperaturas más altas (90-100°C) volatilizan rápidamente aromáticos para tés robustos, pero pueden desnaturalizar ésteres florales delicados en tés verdes/blancos. Agua más fría (60-80°C) preserva compuestos de fragancia sutiles.",
                    de: "Temperatur beeinflusst Dampfdruck: höhere Temperaturen (90-100°C) verflüchtigen schnell Aromen für robuste Tees, können aber zarte florale Ester in grünen/weißen Tees denaturieren. Kühleres Wasser (60-80°C) bewahrt subtile Duftverbindungen.",
                    nl: "Temperatuur beïnvloedt dampdruk: hogere temperaturen (90-100°C) vervluchtigen snel aromaten voor robuuste theeën, maar kunnen delicate florale esters in groene/witte theeën denatureren. Koeler water (60-80°C) behoudt subtiele geurverbindingen."
                }
            },
            {
                question: {
                    en: "What is the scientific explanation for tea's 'sweet aftertaste' (hui gan)?",
                    es: "¿Cuál es la explicación científica para el 'regusto dulce' del té (hui gan)?",
                    de: "Was ist die wissenschaftliche Erklärung für Tees 'süßen Nachgeschmack' (hui gan)?",
                    nl: "Wat is de wetenschappelijke verklaring voor thee's 'zoete nasmaak' (hui gan)?"
                },
                options: [
                    {
                        en: "Salivation reflex triggered by astringency, washing bitter compounds and revealing natural sugars",
                        es: "Reflejo de salivación activado por astringencia, lavando compuestos amargos y revelando azúcares naturales",
                        de: "Speichelfluss-Reflex ausgelöst durch Adstringenz, bittere Verbindungen wegspülend und natürliche Zucker offenbarend",
                        nl: "Speekselvloed reflex getriggerd door samentrekkendheid, bittere verbindingen wegspoelend en natuurlijke suikers onthullend"
                    },
                    {
                        en: "Sugar is added during tea processing secretly",
                        es: "Azúcar se agrega durante el procesamiento del té secretamente",
                        de: "Zucker wird während der Teeverarbeitung heimlich hinzugefügt",
                        nl: "Suiker wordt tijdens thee verwerking in het geheim toegevoegd"
                    },
                    {
                        en: "Caffeine converts to sweet compounds in the mouth",
                        es: "Cafeína se convierte en compuestos dulces en la boca",
                        de: "Koffein wandelt sich im Mund in süße Verbindungen um",
                        nl: "Cafeïne converteert naar zoete verbindingen in de mond"
                    },
                    {
                        en: "Optical illusion makes bitter taste seem sweet",
                        es: "Ilusión óptica hace que el sabor amargo parezca dulce",
                        de: "Optische Täuschung lässt bitteren Geschmack süß erscheinen",
                        nl: "Optische illusie maakt bittere smaak zoet lijken"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Hui gan occurs when initial astringency stimulates intense salivation. Fresh saliva dilutes and washes away bitter catechins, allowing perception of naturally occurring sugars (glucose, fructose) and sweet amino acids previously masked.",
                    es: "Hui gan ocurre cuando astringencia inicial estimula salivación intensa. Saliva fresca diluye y lava catequinas amargas, permitiendo percepción de azúcares naturales (glucosa, fructosa) y aminoácidos dulces previamente enmascarados.",
                    de: "Hui gan tritt auf, wenn anfängliche Adstringenz intensive Speichelbildung stimuliert. Frischer Speichel verdünnt und spült bittere Catechine weg, ermöglicht Wahrnehmung natürlich vorkommender Zucker (Glucose, Fructose) und süßer Aminosäuren, die zuvor maskiert waren.",
                    nl: "Hui gan treedt op wanneer initiële samentrekkendheid intense speekselvloed stimuleert. Vers speeksel verdunt en spoelt bittere catechines weg, perceptie toestaan van natuurlijk voorkomende suikers (glucose, fructose) en zoete aminozuren die eerder gemaskeerd waren."
                }
            },
            {
                question: {
                    en: "How do different cultivars (tea plant varieties) differ chemically?",
                    es: "¿Cómo difieren químicamente diferentes cultivares (variedades de plantas de té)?",
                    de: "Wie unterscheiden sich verschiedene Kultivare (Teepflanzen-Sorten) chemisch?",
                    nl: "Hoe verschillen verschillende cultivars (thee plant variëteiten) chemisch?"
                },
                options: [
                    {
                        en: "Genetic variations create different polyphenol ratios, aromatic profiles, and enzyme activities",
                        es: "Variaciones genéticas crean diferentes proporciones de polifenoles, perfiles aromáticos y actividades enzimáticas",
                        de: "Genetische Variationen erzeugen unterschiedliche Polyphenol-Verhältnisse, Aromaprofile und Enzymaktivitäten",
                        nl: "Genetische variaties creëren verschillende polyfenol verhoudingen, aromatische profielen en enzym activiteiten"
                    },
                    {
                        en: "All cultivars produce chemically identical tea",
                        es: "Todos los cultivares producen té químicamente idéntico",
                        de: "Alle Kultivare produzieren chemisch identischen Tee",
                        nl: "Alle cultivars produceren chemisch identieke thee"
                    },
                    {
                        en: "Cultivar only affects leaf shape, not chemistry",
                        es: "Cultivar solo afecta la forma de la hoja, no la química",
                        de: "Kultivar beeinflusst nur Blattform, nicht Chemie",
                        nl: "Cultivar beïnvloedt alleen bladvormen, niet chemie"
                    },
                    {
                        en: "Plant variety has no scientific importance in tea",
                        es: "Variedad de planta no tiene importancia científica en el té",
                        de: "Pflanzensorte hat keine wissenschaftliche Bedeutung in Tee",
                        nl: "Plant variëteit heeft geen wetenschappelijk belang in thee"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Tea cultivars show genetic differences in biosynthetic pathways: some produce high catechins (bitter), others high L-theanine (sweet umami), varying terpene synthase expression creates unique aromatic fingerprints - measurable via metabolite profiling.",
                    es: "Cultivares de té muestran diferencias genéticas en vías biosintéticas: algunos producen altas catequinas (amargo), otros alta L-teanina (umami dulce), expresión variante de terpeno sintasa crea huellas aromáticas únicas - medibles vía perfil de metabolitos.",
                    de: "Tee-Kultivare zeigen genetische Unterschiede in Biosynthesewe gen: einige produzieren hohe Catechine (bitter), andere hohes L-Theanin (süßes Umami), variierende Terpen-Synthase-Expression erzeugt einzigartige Aroma-Fingerabdrücke - messbar via Metabolit-Profiling.",
                    nl: "Thee cultivars tonen genetische verschillen in biosynthetische paden: sommige produceren hoge catechines (bitter), andere hoge L-theanine (zoet umami), variërende terpeen synthase expressie creëert unieke aromatische vingerafdrukken - meetbaar via metaboliet profilering."
                }
            },
            {
                question: {
                    en: "What chemical process occurs during the 'yellowing' stage of yellow tea production?",
                    es: "¿Qué proceso químico ocurre durante la etapa de 'amarilleo' de la producción de té amarillo?",
                    de: "Welcher chemische Prozess findet während der 'Gilbungs'-Phase der gelben Teeproduktion statt?",
                    nl: "Welk chemisch proces vindt plaats tijdens de 'vergeling' fase van gele thee productie?"
                },
                options: [
                    {
                        en: "Non-enzymatic auto-oxidation and controlled fermentation under heat and humidity encasing",
                        es: "Auto-oxidación no enzimática y fermentación controlada bajo calor y humedad encerrada",
                        de: "Nicht-enzymatische Auto-Oxidation und kontrollierte Fermentation unter Hitze und Feuchtigkeits-Umhüllung",
                        nl: "Niet-enzymatische auto-oxidatie en gecontroleerde fermentatie onder warmte en vocht omhulling"
                    },
                    {
                        en: "Yellow dye is added to the tea artificially",
                        es: "Tinte amarillo se agrega al té artificialmente",
                        de: "Gelber Farbstoff wird dem Tee künstlich hinzugefügt",
                        nl: "Gele kleurstof wordt kunstmatig aan de thee toegevoegd"
                    },
                    {
                        en: "Sunlight bleaches chlorophyll to yellow color",
                        es: "Luz solar blanquea clorofila a color amarillo",
                        de: "Sonnenlicht bleicht Chlorophyll zu gelber Farbe",
                        nl: "Zonlicht blekt chlorofyl naar gele kleur"
                    },
                    {
                        en: "Simple water evaporation concentrates yellow pigments",
                        es: "Evaporación simple de agua concentra pigmentos amarillos",
                        de: "Einfache Wasserverdunstung konzentriert gelbe Pigmente",
                        nl: "Eenvoudige water verdamping concentreert gele pigmenten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Yellow tea's 'men huan' (sealing yellow) wraps damp, warm leaves in cloth, creating anaerobic conditions. This drives slow non-enzymatic oxidation and controlled microbial activity, transforming green catechins to yellow-brown compounds, mellowing flavor.",
                    es: "El 'men huan' (sellado amarillo) del té amarillo envuelve hojas húmedas y calientes en tela, creando condiciones anaeróbicas. Esto impulsa oxidación no enzimática lenta y actividad microbiana controlada, transformando catequinas verdes a compuestos amarillo-marrón, suavizando sabor.",
                    de: "Gelber Tees 'men huan' (Gelb-Versiegelung) wickelt feuchte, warme Blätter in Tuch, schafft anaerobe Bedingungen. Dies treibt langsame nicht-enzymatische Oxidation und kontrollierte mikrobielle Aktivität an, transformiert grüne Catechine zu gelb-braunen Verbindungen, mildert Geschmack.",
                    nl: "Gele thee's 'men huan' (geel verzegelen) wikkelt vochtige, warme bladeren in doek, anaerobe condities creërend. Dit drijft langzame niet-enzymatische oxidatie en gecontroleerde microbiële activiteit aan, groene catechines transformerend naar geel-bruine verbindingen, smaak verzachtend."
                }
            },
            {
                question: {
                    en: "What is the chemical basis for tea's interaction with fluoride?",
                    es: "¿Cuál es la base química para la interacción del té con el fluoruro?",
                    de: "Was ist die chemische Grundlage für Tees Interaktion mit Fluorid?",
                    nl: "Wat is de chemische basis voor thee's interactie met fluoride?"
                },
                options: [
                    {
                        en: "Tea plants naturally accumulate fluoride from soil; older leaves contain highest concentrations",
                        es: "Plantas de té naturalmente acumulan fluoruro del suelo; hojas más viejas contienen mayores concentraciones",
                        de: "Teepflanzen akkumulieren natürlich Fluorid aus dem Boden; ältere Blätter enthalten höchste Konzentrationen",
                        nl: "Thee planten accumuleren natuurlijk fluoride uit de bodem; oudere bladeren bevatten hoogste concentraties"
                    },
                    {
                        en: "Fluoride is added during processing for preservation",
                        es: "Fluoruro se agrega durante el procesamiento para preservación",
                        de: "Fluorid wird während der Verarbeitung zur Konservierung hinzugefügt",
                        nl: "Fluoride wordt toegevoegd tijdens verwerking voor conservering"
                    },
                    {
                        en: "Water fluoridation transfers to tea during brewing only",
                        es: "Fluorización del agua se transfiere al té solo durante la preparación",
                        de: "Wasserfluoridierung überträgt sich nur während des Brühens auf Tee",
                        nl: "Water fluoridatie draagt over naar thee alleen tijdens het zetten"
                    },
                    {
                        en: "Tea contains no fluoride compounds whatsoever",
                        es: "El té no contiene compuestos de fluoruro en absoluto",
                        de: "Tee enthält überhaupt keine Fluoridverbindungen",
                        nl: "Thee bevat absoluut geen fluoride verbindingen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Camellia sinensis is a fluoride hyperaccumulator, absorbing it from acidic soils. Mature leaves accumulate 10-20x more fluoride than young buds. Long steeping extracts fluoride into liquor - potentially beneficial for dental health in moderation.",
                    es: "Camellia sinensis es un hiperacumulador de fluoruro, absorbiéndolo de suelos ácidos. Hojas maduras acumulan 10-20x más fluoruro que brotes jóvenes. Remojo largo extrae fluoruro en licor - potencialmente beneficioso para salud dental con moderación.",
                    de: "Camellia sinensis ist ein Fluorid-Hyperakkumulator, absorbiert es aus sauren Böden. Reife Blätter akkumulieren 10-20x mehr Fluorid als junge Knospen. Langes Ziehen extrahiert Fluorid in Liquor - potenziell vorteilhaft für Zahngesundheit in Maßen.",
                    nl: "Camellia sinensis is een fluoride hyperaccumulator, absorberend uit zure bodems. Rijpe bladeren accumuleren 10-20x meer fluoride dan jonge knoppen. Lang trekken extraheert fluoride in liquor - potentieel voordelig voor tandgezondheid in matiging."
                }
            },
            {
                question: {
                    en: "How does oxidation affect the caffeine-to-polyphenol ratio in tea?",
                    es: "¿Cómo afecta la oxidación la proporción de cafeína a polifenoles en el té?",
                    de: "Wie beeinflusst Oxidation das Koffein-zu-Polyphenol-Verhältnis in Tee?",
                    nl: "Hoe beïnvloedt oxidatie de cafeïne-tot-polyfenol verhouding in thee?"
                },
                options: [
                    {
                        en: "Polyphenols transform (catechins→theaflavins) but caffeine remains stable; ratio appears to shift",
                        es: "Polifenoles se transforman (catequinas→teaflavinas) pero cafeína permanece estable; proporción parece cambiar",
                        de: "Polyphenole transformieren (Catechine→Theaflavine) aber Koffein bleibt stabil; Verhältnis scheint sich zu verschieben",
                        nl: "Polyfenolen transformeren (catechines→theaflavines) maar cafeïne blijft stabiel; verhouding lijkt te verschuiven"
                    },
                    {
                        en: "Oxidation destroys all caffeine in tea leaves",
                        es: "Oxidación destruye toda la cafeína en hojas de té",
                        de: "Oxidation zerstört alles Koffein in Teeblättern",
                        nl: "Oxidatie vernietigt alle cafeïne in thee bladeren"
                    },
                    {
                        en: "Caffeine increases dramatically during oxidation",
                        es: "Cafeína aumenta dramáticamente durante la oxidación",
                        de: "Koffein steigt während der Oxidation dramatisch an",
                        nl: "Cafeïne neemt dramatisch toe tijdens oxidatie"
                    },
                    {
                        en: "Both caffeine and polyphenols disappear equally",
                        es: "Tanto cafeína como polifenoles desaparecen igualmente",
                        de: "Sowohl Koffein als auch Polyphenole verschwinden gleichermaßen",
                        nl: "Zowel cafeïne als polyfenolen verdwijnen gelijkmatig"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Oxidation chemically transforms catechins (green tea polyphenols) into theaflavins and thearubigins (black tea polyphenols), but caffeine is chemically stable and doesn't degrade. Total polyphenol mass decreases slightly, so caffeine appears proportionally higher.",
                    es: "Oxidación transforma químicamente catequinas (polifenoles de té verde) en teaflavinas y tearubiginas (polifenoles de té negro), pero cafeína es químicamente estable y no se degrada. Masa total de polifenoles disminuye ligeramente, así que cafeína parece proporcionalmente más alta.",
                    de: "Oxidation transformiert chemisch Catechine (Grüntee-Polyphenole) in Theaflavine und Thearubigine (Schwarztee-Polyphenole), aber Koffein ist chemisch stabil und degradiert nicht. Gesamte Polyphenol-Masse nimmt leicht ab, sodass Koffein proportional höher erscheint.",
                    nl: "Oxidatie transformeert chemisch catechines (groene thee polyfenolen) in theaflavines en thearubigines (zwarte thee polyfenolen), maar cafeïne is chemisch stabiel en degradeert niet. Totale polyfenol massa neemt licht af, dus cafeïne lijkt proportioneel hoger."
                }
            },
            {
                question: {
                    en: "What biochemical process creates the 'roasted' aroma in charcoal-fired oolongs?",
                    es: "¿Qué proceso bioquímico crea el aroma 'tostado' en oolongs al fuego de carbón?",
                    de: "Welcher biochemische Prozess erzeugt das 'geröstete' Aroma in kohlegefeuerten Oolongs?",
                    nl: "Welk biochemisch proces creëert het 'geroosterde' aroma in houtskool-gestookte oolongs?"
                },
                options: [
                    {
                        en: "Maillard reactions between amino acids and reducing sugars plus caramelization at 140-180°C",
                        es: "Reacciones de Maillard entre aminoácidos y azúcares reductores más caramelización a 140-180°C",
                        de: "Maillard-Reaktionen zwischen Aminosäuren und reduzierenden Zuckern plus Karamellisierung bei 140-180°C",
                        nl: "Maillard reacties tussen aminozuren en reducerende suikers plus karamellisatie bij 140-180°C"
                    },
                    {
                        en: "Charcoal ash physically coats the tea leaves",
                        es: "Ceniza de carbón cubre físicamente las hojas de té",
                        de: "Holzkohleasche bedeckt physisch die Teeblätter",
                        nl: "Houtskool as bedekt fysiek de thee bladeren"
                    },
                    {
                        en: "Smoke flavor is absorbed from burning wood only",
                        es: "Sabor a humo se absorbe solo de madera ardiente",
                        de: "Rauchgeschmack wird nur von brennendem Holz absorbiert",
                        nl: "Rooksmaak wordt alleen geabsorbeerd van brandend hout"
                    },
                    {
                        en: "Natural roasted flavor exists before any heat treatment",
                        es: "Sabor tostado natural existe antes de cualquier tratamiento térmico",
                        de: "Natürlicher Röstgeschmack existiert vor jeder Wärmebehandlung",
                        nl: "Natuurlijke geroosterde smaak bestaat vóór elke warmtebehandeling"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Charcoal roasting (tan bei) at controlled temps triggers Maillard reactions: amino acids + sugars form hundreds of flavor compounds (pyrazines, furans, melanoidins) creating nutty, caramel, toasted notes while preserving tea structure.",
                    es: "Tostado con carbón (tan bei) a temperaturas controladas activa reacciones de Maillard: aminoácidos + azúcares forman cientos de compuestos de sabor (pirazinas, furanos, melanoidinas) creando notas de nuez, caramelo y tostadas mientras preservan estructura del té.",
                    de: "Holzkohleröstung (tan bei) bei kontrollierten Temperaturen löst Maillard-Reaktionen aus: Aminosäuren + Zucker bilden Hunderte Geschmacksverbindungen (Pyrazine, Furane, Melanoidine), erzeugen nussige, Karamell-, geröstete Noten während Teestruktur bewahrt wird.",
                    nl: "Houtskool roosteren (tan bei) bij gecontroleerde temperaturen triggert Maillard reacties: aminozuren + suikers vormen honderden smaakverbindingen (pyrazines, furanen, melanoidines) nootachtige, karamel, geroosterde noten creërend terwijl thee structuur behouden wordt."
                }
            },
            {
                question: {
                    en: "What chemical compounds are responsible for the 'sour' notes sometimes found in poor-quality teas?",
                    es: "¿Qué compuestos químicos son responsables de las notas 'ácidas' que a veces se encuentran en tés de mala calidad?",
                    de: "Welche chemischen Verbindungen sind für die 'sauren' Noten in minderwertigen Tees verantwortlich?",
                    nl: "Welke chemische verbindingen zijn verantwoordelijk voor de 'zure' noten die soms worden gevonden in thee van slechte kwaliteit?"
                },
                options: [
                    {
                        en: "Organic acids from improper storage or microbial contamination (acetic, butyric acids)",
                        es: "Ácidos orgánicos de almacenamiento inadecuado o contaminación microbiana (ácidos acético, butírico)",
                        de: "Organische Säuren aus unsachgemäßer Lagerung oder mikrobieller Kontamination (Essig-, Buttersäuren)",
                        nl: "Organische zuren van onjuiste opslag of microbiële besmetting (azijnzuur, boterzuren)"
                    },
                    {
                        en: "Natural vitamin C is the only sour compound",
                        es: "Vitamina C natural es el único compuesto ácido",
                        de: "Natürliches Vitamin C ist die einzige saure Verbindung",
                        nl: "Natuurlijke vitamine C is de enige zure verbinding"
                    },
                    {
                        en: "Caffeine oxidation produces all sourness",
                        es: "Oxidación de cafeína produce toda la acidez",
                        de: "Koffeinoxidation produziert alle Säure",
                        nl: "Cafeïne oxidatie produceert alle zuurheid"
                    },
                    {
                        en: "Sour notes indicate highest quality premium tea",
                        es: "Notas ácidas indican té premium de más alta calidad",
                        de: "Saure Noten zeigen höchste Premium-Tee-Qualität an",
                        nl: "Zure noten geven hoogste kwaliteit premium thee aan"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Sourness indicates spoilage: improper drying/storage allows bacterial/fungal growth producing acetic acid (vinegar), butyric acid (rancid), or lactic acid. Fresh, properly stored tea should never have pronounced sour notes.",
                    es: "Acidez indica deterioro: secado/almacenamiento inadecuado permite crecimiento bacteriano/fúngico produciendo ácido acético (vinagre), ácido butírico (rancio) o ácido láctico. Té fresco, adecuadamente almacenado nunca debe tener notas ácidas pronunciadas.",
                    de: "Säure zeigt Verderb an: unsachgemäßes Trocknen/Lagern erlaubt bakterielles/fungales Wachstum, produziert Essigsäure (Essig), Buttersäure (ranzig) oder Milchsäure. Frischer, ordnungsgemäß gelagerter Tee sollte nie ausgeprägte saure Noten haben.",
                    nl: "Zuurheid geeft bederf aan: onjuist drogen/opslag staat bacteriële/schimmelgroei toe die azijnzuur (azijn), boterzuur (ranzig) of melkzuur produceert. Verse, goed opgeslagen thee mag nooit uitgesproken zure noten hebben."
                }
            },
            {
                question: {
                    en: "How does nitrogen availability in soil affect tea leaf chemical composition?",
                    es: "¿Cómo afecta la disponibilidad de nitrógeno en el suelo la composición química de las hojas de té?",
                    de: "Wie beeinflusst Stickstoffverfügbarkeit im Boden die chemische Zusammensetzung von Teeblättern?",
                    nl: "Hoe beïnvloedt stikstof beschikbaarheid in de bodem de chemische samenstelling van thee bladeren?"
                },
                options: [
                    {
                        en: "Higher nitrogen increases amino acids (L-theanine) and chlorophyll but may decrease polyphenols",
                        es: "Mayor nitrógeno aumenta aminoácidos (L-teanina) y clorofila pero puede disminuir polifenoles",
                        de: "Höherer Stickstoff erhöht Aminosäuren (L-Theanin) und Chlorophyll, kann aber Polyphenole verringern",
                        nl: "Hogere stikstof verhoogt aminozuren (L-theanine) en chlorofyl maar kan polyfenolen verminderen"
                    },
                    {
                        en: "Nitrogen has absolutely no effect on tea chemistry",
                        es: "Nitrógeno no tiene absolutamente ningún efecto en la química del té",
                        de: "Stickstoff hat absolut keinen Einfluss auf Tee-Chemie",
                        nl: "Stikstof heeft absoluut geen effect op thee chemie"
                    },
                    {
                        en: "All nitrogen is toxic to tea plants",
                        es: "Todo nitrógeno es tóxico para plantas de té",
                        de: "Aller Stickstoff ist giftig für Teepflanzen",
                        nl: "Alle stikstof is giftig voor thee planten"
                    },
                    {
                        en: "Nitrogen only affects root growth, not leaves",
                        es: "Nitrógeno solo afecta el crecimiento de raíces, no las hojas",
                        de: "Stickstoff beeinflusst nur Wurzelwachstum, nicht Blätter",
                        nl: "Stikstof beïnvloedt alleen wortelgroei, niet bladeren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Nitrogen is essential for amino acid biosynthesis - optimal N-fertilization boosts L-theanine (umami sweetness) and vibrant chlorophyll. However, excessive nitrogen can reduce stress-induced polyphenol production, potentially decreasing antioxidant content.",
                    es: "Nitrógeno es esencial para biosíntesis de aminoácidos - fertilización óptima de N aumenta L-teanina (dulzura umami) y clorofila vibrante. Sin embargo, nitrógeno excesivo puede reducir producción de polifenoles inducida por estrés, potencialmente disminuyendo contenido antioxidante.",
                    de: "Stickstoff ist essentiell für Aminosäure-Biosynthese - optimale N-Düngung steigert L-Theanin (Umami-Süße) und lebendiges Chlorophyll. Jedoch kann übermäßiger Stickstoff stress-induzierte Polyphenol-Produktion reduzieren, potenziell Antioxidantien-Gehalt verringernd.",
                    nl: "Stikstof is essentieel voor aminozuur biosynthese - optimale N-bemesting verhoogt L-theanine (umami zoetheid) en levendig chlorofyl. Echter kan excessieve stikstof stress-geïnduceerde polyfenol productie verminderen, potentieel antioxidant gehalte verlagend."
                }
            },
            {
                question: {
                    en: "What is the chemical mechanism behind 'wet storage' flavor development in pu-erh?",
                    es: "¿Cuál es el mecanismo químico detrás del desarrollo del sabor de 'almacenamiento húmedo' en pu-erh?",
                    de: "Was ist der chemische Mechanismus hinter der Geschmacksentwicklung bei 'feuchter Lagerung' in Pu-erh?",
                    nl: "Wat is het chemisch mechanisme achter 'natte opslag' smaak ontwikkeling in pu-erh?"
                },
                options: [
                    {
                        en: "Accelerated microbial fermentation at 70-85% humidity transforms catechins faster but risks off-flavors",
                        es: "Fermentación microbiana acelerada a 70-85% humedad transforma catequinas más rápido pero arriesga sabores extraños",
                        de: "Beschleunigte mikrobielle Fermentation bei 70-85% Luftfeuchtigkeit transformiert Catechine schneller, riskiert aber Fehlaromen",
                        nl: "Versnelde microbiële fermentatie bij 70-85% vochtigheid transformeert catechines sneller maar riskeert vreemde smaken"
                    },
                    {
                        en: "Water is literally added to the brewed tea",
                        es: "Agua se agrega literalmente al té preparado",
                        de: "Wasser wird buchstäblich zum gebrühten Tee hinzugefügt",
                        nl: "Water wordt letterlijk toegevoegd aan de gezette thee"
                    },
                    {
                        en: "Wet storage removes all flavor compounds completely",
                        es: "Almacenamiento húmedo elimina todos los compuestos de sabor completamente",
                        de: "Feuchte Lagerung entfernt alle Geschmacksverbindungen vollständig",
                        nl: "Natte opslag verwijdert alle smaakverbindingen volledig"
                    },
                    {
                        en: "Humidity has no chemical effect on tea aging",
                        es: "Humedad no tiene efecto químico en el envejecimiento del té",
                        de: "Feuchtigkeit hat keinen chemischen Einfluss auf Tee-Alterung",
                        nl: "Vochtigheid heeft geen chemisch effect op thee rijping"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wet storage (70-85% humidity) accelerates microbial activity - Aspergillus, Penicillium, and bacteria rapidly transform catechins to theabrownins. This creates earthy, musty 'warehouse' flavors faster but risks excessive funk if over-humidified.",
                    es: "Almacenamiento húmedo (70-85% humedad) acelera actividad microbiana - Aspergillus, Penicillium y bacterias transforman rápidamente catequinas a teabrowninas. Esto crea sabores terrosos, mohosos de 'almacén' más rápido pero arriesga funk excesivo si sobre-humidificado.",
                    de: "Feuchte Lagerung (70-85% Luftfeuchtigkeit) beschleunigt mikrobielle Aktivität - Aspergillus, Penicillium und Bakterien transformieren schnell Catechine zu Theabrowninen. Dies erzeugt erdige, muffige 'Lagerhaus'-Aromen schneller, riskiert aber übermäßigen Funk bei Über-Befeuchtung.",
                    nl: "Natte opslag (70-85% vochtigheid) versnelt microbiële activiteit - Aspergillus, Penicillium en bacteriën transformeren snel catechines naar theabrownines. Dit creëert aardse, muffe 'magazijn' smaken sneller maar riskeert excessieve funk bij over-bevochtiging."
                }
            },
            {
                question: {
                    en: "What biochemical role do polysaccharides play in tea mouthfeel?",
                    es: "¿Qué papel bioquímico juegan los polisacáridos en la sensación en boca del té?",
                    de: "Welche biochemische Rolle spielen Polysaccharide im Tee-Mundgefühl?",
                    nl: "Welke biochemische rol spelen polysacchariden in thee mondgevoel?"
                },
                options: [
                    {
                        en: "Increase viscosity and create smooth, thick body while modulating astringency perception",
                        es: "Aumentan viscosidad y crean cuerpo suave y espeso mientras modulan percepción de astringencia",
                        de: "Erhöhen Viskosität und schaffen glatten, dicken Körper während Adstringenz-Wahrnehmung moduliert wird",
                        nl: "Verhogen viscositeit en creëren glad, dik lichaam terwijl samentrekkendheid perceptie moduleren"
                    },
                    {
                        en: "Cause bitterness and harsh flavor only",
                        es: "Causan amargura y sabor duro solo",
                        de: "Verursachen nur Bitterkeit und harten Geschmack",
                        nl: "Veroorzaken alleen bitterheid en harde smaak"
                    },
                    {
                        en: "Have no impact on tea texture whatsoever",
                        es: "No tienen ningún impacto en la textura del té",
                        de: "Haben überhaupt keinen Einfluss auf Tee-Textur",
                        nl: "Hebben absoluut geen impact op thee textuur"
                    },
                    {
                        en: "Only provide energy, not sensory effects",
                        es: "Solo proporcionan energía, no efectos sensoriales",
                        de: "Liefern nur Energie, keine sensorischen Effekte",
                        nl: "Bieden alleen energie, geen zintuiglijke effecten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Tea polysaccharides (pectins, arabinogalactans, rhamnogalacturonans) increase solution viscosity, creating velvety, full-bodied mouthfeel. They also bind to polyphenols, reducing harsh astringency and contributing to smooth, round texture prized in aged teas.",
                    es: "Polisacáridos del té (pectinas, arabinogalactanos, ramnogalacturonanos) aumentan viscosidad de solución, creando sensación en boca aterciopelada y con cuerpo completo. También se unen a polifenoles, reduciendo astringencia dura y contribuyendo a textura suave y redonda apreciada en tés añejos.",
                    de: "Tee-Polysaccharide (Pektine, Arabinogalactane, Rhamnogalacturonane) erhöhen Lösungsviskosität, erzeugen samtiges, vollmundiges Mundgefühl. Sie binden auch an Polyphenole, reduzieren harte Adstringenz und tragen zu glatter, runder Textur bei, die in gereiften Tees geschätzt wird.",
                    nl: "Thee polysacchariden (pectines, arabinogalactanen, rhamnogalacturonanen) verhogen oplossing viscositeit, fluweelachtig, vol mondgevoel creërend. Ze binden ook aan polyfenolen, harde samentrekkendheid verminderende en bijdragend aan gladde, ronde textuur gewaardeerd in gerijpte theeën."
                }
            },
            {
                question: {
                    en: "How does seasonal variation (flush timing) affect tea biochemistry?",
                    es: "¿Cómo afecta la variación estacional (tiempo de cosecha) la bioquímica del té?",
                    de: "Wie beeinflusst saisonale Variation (Flush-Timing) die Tee-Biochemie?",
                    nl: "Hoe beïnvloedt seizoensvariatie (pluk timing) de thee biochemie?"
                },
                options: [
                    {
                        en: "Spring flush: high amino acids/low catechins; summer: reversed ratio from UV stress",
                        es: "Cosecha de primavera: altos aminoácidos/bajas catequinas; verano: proporción invertida por estrés UV",
                        de: "Frühlings-Flush: hohe Aminosäuren/niedrige Catechine; Sommer: umgekehrtes Verhältnis durch UV-Stress",
                        nl: "Lente pluk: hoge aminozuren/lage catechines; zomer: omgekeerde verhouding door UV stress"
                    },
                    {
                        en: "All seasons produce chemically identical tea leaves",
                        es: "Todas las estaciones producen hojas de té químicamente idénticas",
                        de: "Alle Jahreszeiten produzieren chemisch identische Teeblätter",
                        nl: "Alle seizoenen produceren chemisch identieke thee bladeren"
                    },
                    {
                        en: "Only leaf color changes, not chemical content",
                        es: "Solo cambia el color de la hoja, no el contenido químico",
                        de: "Nur Blattfarbe ändert sich, nicht chemischer Inhalt",
                        nl: "Alleen bladkleur verandert, niet chemische inhoud"
                    },
                    {
                        en: "Summer teas always have higher quality compounds",
                        es: "Tés de verano siempre tienen compuestos de mayor calidad",
                        de: "Sommer-Tees haben immer höherwertige Verbindungen",
                        nl: "Zomer theeën hebben altijd hogere kwaliteit verbindingen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "First flush (spring) has high L-theanine and low catechins - sweet, delicate. Second flush (summer) faces UV stress, producing defensive catechins and unique terpenes (muscatel in Darjeeling). Autumn flush is balanced but less complex.",
                    es: "Primera cosecha (primavera) tiene alta L-teanina y bajas catequinas - dulce, delicado. Segunda cosecha (verano) enfrenta estrés UV, produciendo catequinas defensivas y terpenos únicos (moscatel en Darjeeling). Cosecha de otoño es equilibrada pero menos compleja.",
                    de: "Erster Flush (Frühling) hat hohes L-Theanin und niedrige Catechine - süß, zart. Zweiter Flush (Sommer) erfährt UV-Stress, produziert defensive Catechine und einzigartige Terpene (Muskateller in Darjeeling). Herbst-Flush ist ausgewogen aber weniger komplex.",
                    nl: "Eerste pluk (lente) heeft hoge L-theanine en lage catechines - zoet, delicaat. Tweede pluk (zomer) ondergaat UV stress, defensieve catechines en unieke terpenen producerend (muskaat in Darjeeling). Herfst pluk is gebalanceerd maar minder complex."
                }
            },
            {
                question: {
                    en: "What chemical compounds create the 'cooling' sensation in some premium teas?",
                    es: "¿Qué compuestos químicos crean la sensación de 'enfriamiento' en algunos tés premium?",
                    de: "Welche chemischen Verbindungen erzeugen die 'kühlende' Sensation in einigen Premium-Tees?",
                    nl: "Welke chemische verbindingen creëren de 'koelende' sensatie in sommige premium theeën?"
                },
                options: [
                    {
                        en: "Menthol-like terpenes and specific polyphenols activating TRPM8 cold receptors on tongue",
                        es: "Terpenos tipo mentol y polifenoles específicos activando receptores fríos TRPM8 en la lengua",
                        de: "Menthol-ähnliche Terpene und spezifische Polyphenole, die TRPM8-Kälterezeptoren auf der Zunge aktivieren",
                        nl: "Menthol-achtige terpenen en specifieke polyfenolen die TRPM8 koude receptoren op de tong activeren"
                    },
                    {
                        en: "Tea is served at cold temperature only",
                        es: "Té se sirve solo a temperatura fría",
                        de: "Tee wird nur bei kalter Temperatur serviert",
                        nl: "Thee wordt alleen op koude temperatuur geserveerd"
                    },
                    {
                        en: "Ice crystals form naturally in the tea",
                        es: "Cristales de hielo se forman naturalmente en el té",
                        de: "Eiskristalle bilden sich natürlich im Tee",
                        nl: "IJskristallen vormen zich natuurlijk in de thee"
                    },
                    {
                        en: "Cooling is purely psychological, not chemical",
                        es: "Enfriamiento es puramente psicológico, no químico",
                        de: "Kühlung ist rein psychologisch, nicht chemisch",
                        nl: "Koeling is puur psychologisch, niet chemisch"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Certain premium teas (aged sheng pu-erh, high-mountain oolongs) contain terpene alcohols and specific catechin derivatives that trigger TRPM8 receptors - the same cold-sensing neurons activated by menthol, creating a refreshing cooling sensation (liang gan).",
                    es: "Ciertos tés premium (pu-erh sheng añejo, oolongs de alta montaña) contienen alcoholes terpenos y derivados específicos de catequinas que activan receptores TRPM8 - las mismas neuronas sensoras de frío activadas por mentol, creando sensación refrescante de enfriamiento (liang gan).",
                    de: "Bestimmte Premium-Tees (gereifter Sheng Pu-erh, Hochgebirgs-Oolongs) enthalten Terpenalkohole und spezifische Catechin-Derivate, die TRPM8-Rezeptoren auslösen - dieselben kälteempfindlichen Neuronen, die von Menthol aktiviert werden, erzeugen erfrischende Kühle-Sensation (liang gan).",
                    nl: "Bepaalde premium theeën (gerijpte sheng pu-erh, hooggebergte oolongs) bevatten terpeen alcoholen en specifieke catechine derivaten die TRPM8 receptoren triggeren - dezelfde koude-gevoelige neuronen geactiveerd door menthol, verfrissende koelende sensatie creërend (liang gan)."
                }
            },
            {
                question: {
                    en: "What is the biochemical explanation for tea's pH affecting extraction efficiency?",
                    es: "¿Cuál es la explicación bioquímica de que el pH del té afecte la eficiencia de extracción?",
                    de: "Was ist die biochemische Erklärung für Tee-pH, der die Extraktionseffizienz beeinflusst?",
                    nl: "Wat is de biochemische verklaring voor thee's pH die extractie efficiëntie beïnvloedt?"
                },
                options: [
                    {
                        en: "pH affects polyphenol ionization and solubility; alkaline water extracts more but degrades compounds",
                        es: "pH afecta ionización y solubilidad de polifenoles; agua alcalina extrae más pero degrada compuestos",
                        de: "pH beeinflusst Polyphenol-Ionisierung und Löslichkeit; alkalisches Wasser extrahiert mehr, degradiert aber Verbindungen",
                        nl: "pH beïnvloedt polyfenol ionisatie en oplosbaarheid; alkalisch water extraheert meer maar degradeert verbindingen"
                    },
                    {
                        en: "pH has absolutely no effect on tea brewing",
                        es: "pH no tiene absolutamente ningún efecto en la preparación del té",
                        de: "pH hat absolut keinen Einfluss auf Tee-Brühen",
                        nl: "pH heeft absoluut geen effect op thee zetten"
                    },
                    {
                        en: "Only acidic water can brew tea successfully",
                        es: "Solo agua ácida puede preparar té exitosamente",
                        de: "Nur saures Wasser kann Tee erfolgreich brühen",
                        nl: "Alleen zuur water kan thee succesvol zetten"
                    },
                    {
                        en: "Alkaline water prevents all flavor extraction",
                        es: "Agua alcalina previene toda extracción de sabor",
                        de: "Alkalisches Wasser verhindert alle Geschmacksextraktion",
                        nl: "Alkalisch water voorkomt alle smaak extractie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Polyphenols are weak acids - pH affects their ionization state. Neutral-slightly acidic water (pH 6-7) optimally extracts without degradation. Alkaline water (pH>8) extracts more but oxidizes catechins rapidly, darkening color and creating bitter, flat flavors.",
                    es: "Polifenoles son ácidos débiles - pH afecta su estado de ionización. Agua neutra-ligeramente ácida (pH 6-7) extrae óptimamente sin degradación. Agua alcalina (pH>8) extrae más pero oxida catequinas rápidamente, oscureciendo color y creando sabores amargos y planos.",
                    de: "Polyphenole sind schwache Säuren - pH beeinflusst ihren Ionisierungszustand. Neutral-leicht saures Wasser (pH 6-7) extrahiert optimal ohne Abbau. Alkalisches Wasser (pH>8) extrahiert mehr, oxidiert aber Catechine schnell, verdunkelt Farbe und erzeugt bittere, flache Aromen.",
                    nl: "Polyfenolen zijn zwakke zuren - pH beïnvloedt hun ionisatie toestand. Neutraal-licht zuur water (pH 6-7) extraheert optimaal zonder degradatie. Alkalisch water (pH>8) extraheert meer maar oxideert catechines snel, kleur verdonkerend en bittere, vlakke smaken creërend."
                }
            },
            {
                question: {
                    en: "What chemical transformation occurs when oolong tea is repeatedly re-steeped?",
                    es: "¿Qué transformación química ocurre cuando el té oolong se re-infusiona repetidamente?",
                    de: "Welche chemische Umwandlung findet statt, wenn Oolong-Tee wiederholt neu aufgebrüht wird?",
                    nl: "Welke chemische transformatie vindt plaats wanneer oolong thee herhaaldelijk opnieuw wordt gezet?"
                },
                options: [
                    {
                        en: "Sequential extraction: small molecules (caffeine, catechins) first, then larger polyphenols and polysaccharides",
                        es: "Extracción secuencial: moléculas pequeñas (cafeína, catequinas) primero, luego polifenoles y polisacáridos más grandes",
                        de: "Sequentielle Extraktion: kleine Moleküle (Koffein, Catechine) zuerst, dann größere Polyphenole und Polysaccharide",
                        nl: "Sequentiële extractie: kleine moleculen (cafeïne, catechines) eerst, dan grotere polyfenolen en polysacchariden"
                    },
                    {
                        en: "All compounds extract identically in every steeping",
                        es: "Todos los compuestos se extraen idénticamente en cada remojo",
                        de: "Alle Verbindungen extrahieren identisch bei jedem Aufguss",
                        nl: "Alle verbindingen extraheren identiek bij elke trekking"
                    },
                    {
                        en: "Tea becomes stronger with each subsequent brewing",
                        es: "Té se vuelve más fuerte con cada preparación subsiguiente",
                        de: "Tee wird mit jedem weiteren Aufguss stärker",
                        nl: "Thee wordt sterker met elke volgende zetbeurt"
                    },
                    {
                        en: "Re-steeping has no chemical basis, only tradition",
                        es: "Re-infusión no tiene base química, solo tradición",
                        de: "Wiederaufgießen hat keine chemische Basis, nur Tradition",
                        nl: "Opnieuw zetten heeft geen chemische basis, alleen traditie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Re-steeping extracts compounds by molecular size and polarity: 1st steep = caffeine + small catechins (bright, stimulating), 2-4th = complex theaflavins/polyphenols (balanced), 5-7th = polysaccharides (sweet, smooth body), creating evolving flavor profiles.",
                    es: "Re-infusión extrae compuestos por tamaño molecular y polaridad: 1er remojo = cafeína + catequinas pequeñas (brillante, estimulante), 2-4to = teaflavinas/polifenoles complejos (equilibrado), 5-7mo = polisacáridos (cuerpo dulce y suave), creando perfiles de sabor evolutivos.",
                    de: "Wiederaufgießen extrahiert Verbindungen nach Molekülgröße und Polarität: 1. Aufguss = Koffein + kleine Catechine (hell, stimulierend), 2-4. = komplexe Theaflavine/Polyphenole (ausgewogen), 5-7. = Polysaccharide (süßer, glatter Körper), evolvierende Geschmacksprofile erzeugend.",
                    nl: "Opnieuw zetten extraheert verbindingen op moleculaire grootte en polariteit: 1e trekking = cafeïne + kleine catechines (helder, stimulerend), 2-4e = complexe theaflavines/polyfenolen (gebalanceerd), 5-7e = polysacchariden (zoet, glad lichaam), evoluerende smaakprofielen creërend."
                }
            },
            {
                question: {
                    en: "What role do volatile sulfur compounds play in tea aroma?",
                    es: "¿Qué papel juegan los compuestos volátiles de azufre en el aroma del té?",
                    de: "Welche Rolle spielen flüchtige Schwefelverbindungen im Tee-Aroma?",
                    nl: "Welke rol spelen vluchtige zwavel verbindingen in thee aroma?"
                },
                options: [
                    {
                        en: "Low concentrations create savory umami notes; excessive levels indicate processing defects",
                        es: "Bajas concentraciones crean notas umami saladas; niveles excesivos indican defectos de procesamiento",
                        de: "Niedrige Konzentrationen erzeugen herzhafte Umami-Noten; übermäßige Mengen zeigen Verarbeitungsfehler an",
                        nl: "Lage concentraties creëren hartige umami noten; excessieve niveaus geven verwerkingsdefecten aan"
                    },
                    {
                        en: "Sulfur compounds only indicate contamination always",
                        es: "Compuestos de azufre solo indican contaminación siempre",
                        de: "Schwefelverbindungen zeigen immer nur Kontamination an",
                        nl: "Zwavel verbindingen geven alleen altijd besmetting aan"
                    },
                    {
                        en: "All sulfur is removed completely during processing",
                        es: "Todo azufre se elimina completamente durante el procesamiento",
                        de: "Aller Schwefel wird während der Verarbeitung vollständig entfernt",
                        nl: "Alle zwavel wordt volledig verwijderd tijdens verwerking"
                    },
                    {
                        en: "Tea naturally contains no sulfur compounds",
                        es: "Té naturalmente no contiene compuestos de azufre",
                        de: "Tee enthält natürlich keine Schwefelverbindungen",
                        nl: "Thee bevat van nature geen zwavel verbindingen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Trace volatile sulfur compounds (dimethyl sulfide, methanethiol) at low ppb levels contribute savory, brothy umami character in premium teas. However, elevated levels from over-heating or microbial contamination create off-putting cabbage-like sulfurous defects.",
                    es: "Compuestos volátiles de azufre en trazas (sulfuro de dimetilo, metanotiol) a niveles bajos de ppb contribuyen carácter umami salado y de caldo en tés premium. Sin embargo, niveles elevados de sobre-calentamiento o contaminación microbiana crean defectos sulfurosos desagradables como col.",
                    de: "Spurenelemente flüchtige Schwefelverbindungen (Dimethylsulfid, Methanthiol) bei niedrigen ppb-Werten tragen herzhaften, brüheartigen Umami-Charakter in Premium-Tees bei. Jedoch erzeugen erhöhte Mengen durch Überhitzung oder mikrobielle Kontamination abstoßende kohlartige Schwefelmängel.",
                    nl: "Spoor vluchtige zwavel verbindingen (dimethyl sulfide, methaanthiol) bij lage ppb niveaus dragen bij aan hartig, bouillon-achtig umami karakter in premium theeën. Echter creëren verhoogde niveaus van oververhitting of microbiële besmetting afstotende koolachtige zwaveldefecten."
                }
            },
            {
                question: {
                    en: "How does the concept of 'cha qi' (tea energy) relate to actual biochemistry?",
                    es: "¿Cómo se relaciona el concepto de 'cha qi' (energía del té) con la bioquímica real?",
                    de: "Wie bezieht sich das Konzept von 'Cha Qi' (Tee-Energie) auf tatsächliche Biochemie?",
                    nl: "Hoe relateert het concept van 'cha qi' (thee energie) aan werkelijke biochemie?"
                },
                options: [
                    {
                        en: "Combination of caffeine-L-theanine synergy, polyphenol bioactivity, and aromatic neurological effects",
                        es: "Combinación de sinergia cafeína-L-teanina, bioactividad de polifenoles y efectos neurológicos aromáticos",
                        de: "Kombination aus Koffein-L-Theanin-Synergie, Polyphenol-Bioaktivität und aromatischen neurologischen Effekten",
                        nl: "Combinatie van cafeïne-L-theanine synergie, polyfenol bioactiviteit en aromatische neurologische effecten"
                    },
                    {
                        en: "Pure mysticism with no scientific basis whatsoever",
                        es: "Misticismo puro sin ninguna base científica",
                        de: "Reine Mystik ohne jegliche wissenschaftliche Grundlage",
                        nl: "Puur mysticisme zonder enige wetenschappelijke basis"
                    },
                    {
                        en: "Only caffeine causes all cha qi sensations",
                        es: "Solo cafeína causa todas las sensaciones de cha qi",
                        de: "Nur Koffein verursacht alle Cha Qi-Empfindungen",
                        nl: "Alleen cafeïne veroorzaakt alle cha qi sensaties"
                    },
                    {
                        en: "Placebo effect explains 100% of reported experiences",
                        es: "Efecto placebo explica 100% de experiencias reportadas",
                        de: "Placebo-Effekt erklärt 100% der berichteten Erfahrungen",
                        nl: "Placebo effect verklaart 100% van gerapporteerde ervaringen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Cha qi likely reflects: caffeine-L-theanine creating alert calmness (alpha brain waves), EGCG crossing blood-brain barrier affecting neurotransmitters, volatile terpenes stimulating olfactory-limbic pathways, and polysaccharides modulating gut-brain axis - measurable physiological effects.",
                    es: "Cha qi probablemente refleja: cafeína-L-teanina creando calma alerta (ondas cerebrales alfa), EGCG cruzando barrera hematoencefálica afectando neurotransmisores, terpenos volátiles estimulando vías olfativas-límbicas y polisacáridos modulando eje intestino-cerebro - efectos fisiológicos medibles.",
                    de: "Cha Qi spiegelt wahrscheinlich wider: Koffein-L-Theanin erzeugt wache Ruhe (Alpha-Gehirnwellen), EGCG überquert Blut-Hirn-Schranke und beeinflusst Neurotransmitter, flüchtige Terpene stimulieren olfaktorisch-limbische Bahnen, und Polysaccharide modulieren Darm-Hirn-Achse - messbare physiologische Effekte.",
                    nl: "Cha qi weerspiegelt waarschijnlijk: cafeïne-L-theanine creërend alerte kalmte (alfa hersengolven), EGCG dat bloed-hersenbarrière kruist en neurotransmitters beïnvloedt, vluchtige terpenen die reuk-limbische paden stimuleren, en polysacchariden die darm-hersenAs moduleren - meetbare fysiologische effecten."
                }
            }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();,
{
                question: {
                    en: "What is the molecular mechanism of 'cream down' or clouding in black tea when cooled?",
                    es: "¿Cuál es el mecanismo molecular de 'cream down' o turbidez en té negro cuando se enfría?",
                    de: "Was ist der molekulare Mechanismus des 'Cream Down' oder Trübung in Schwarztee beim Abkühlen?",
                    nl: "Wat is het moleculaire mechanisme van 'cream down' of troebeling in zwarte thee bij afkoeling?"
                },
                options: [
                    {
                        en: "Theaflavins and caffeine form complexes that precipitate at lower temperatures due to reduced solubility",
                        es: "Teaflavinas y cafeína forman complejos que precipitan a temperaturas más bajas debido a solubilidad reducida",
                        de: "Theaflavine und Koffein bilden Komplexe, die bei niedrigeren Temperaturen aufgrund reduzierter Löslichkeit ausfallen",
                        nl: "Theaflavines en cafeïne vormen complexen die neerslaan bij lagere temperaturen door verminderde oplosbaarheid"
                    },
                    {
                        en: "Milk proteins separate from the tea liquid",
                        es: "Proteínas lácteas se separan del líquido del té",
                        de: "Milchproteine trennen sich von der Teeflüssigkeit",
                        nl: "Melk eiwitten scheiden van de thee vloeistof"
                    },
                    {
                        en: "Bacteria growth creates cloudiness during cooling",
                        es: "Crecimiento bacteriano crea turbidez durante enfriamiento",
                        de: "Bakterienwachstum erzeugt Trübung beim Abkühlen",
                        nl: "Bacteriële groei creëert troebeling tijdens afkoeling"
                    },
                    {
                        en: "Water hardness minerals precipitate out",
                        es: "Minerales de dureza del agua precipitan",
                        de: "Wasserhärtemineralien fallen aus",
                        nl: "Water hardheids mineralen slaan neer"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "'Cream down' occurs when hot black tea cools below ~10°C. Theaflavins (orange-red polyphenols formed during oxidation) and caffeine form colloidal complexes with reduced solubility at lower temperatures, causing them to precipitate and create a hazy appearance. This is actually a quality indicator—high-quality black teas with abundant theaflavins exhibit strong cream down. The precipitate redissolves when reheated. Water hardness exacerbates creaming: calcium and magnesium ions bind to polyphenols, accelerating precipitation. Soft water minimizes cream down.",
                    es: "'Cream down' ocurre cuando té negro caliente se enfría por debajo de ~10°C. Teaflavinas (polifenoles naranja-rojos formados durante oxidación) y cafeína forman complejos coloidales con solubilidad reducida a temperaturas más bajas, causando que precipiten y creen apariencia nebulosa. Esto es realmente indicador de calidad—tés negros de alta calidad con abundantes teaflavinas exhiben cream down fuerte. Precipitado se redisuelve cuando se recalienta. Dureza del agua exacerba cremado: iones de calcio y magnesio se unen a polifenoles, acelerando precipitación. Agua blanda minimiza cream down.",
                    de: "'Cream Down' tritt auf, wenn heißer Schwarztee unter ~10°C abkühlt. Theaflavine (orange-rote Polyphenole, die während der Oxidation gebildet werden) und Koffein bilden kolloidale Komplexe mit reduzierter Löslichkeit bei niedrigeren Temperaturen, wodurch sie ausfallen und ein trübes Aussehen erzeugen. Dies ist eigentlich ein Qualitätsindikator—hochwertige Schwarztees mit reichlich Theaflavinen zeigen starkes Cream Down. Der Niederschlag löst sich beim Wiedererhitzen auf. Wasserhärte verschlimmert Cremung: Calcium- und Magnesiumionen binden an Polyphenole und beschleunigen Ausfällung. Weiches Wasser minimiert Cream Down.",
                    nl: "'Cream down' treedt op wanneer hete zwarte thee afkoelt onder ~10°C. Theaflavines (oranje-rode polyfenolen gevormd tijdens oxidatie) en cafeïne vormen colloïdale complexen met verminderde oplosbaarheid bij lagere temperaturen, waardoor ze neerslaan en een wazig uiterlijk creëren. Dit is eigenlijk een kwaliteitsindicator—hoogwaardige zwarte thee met overvloedige theaflavines vertonen sterke cream down. Het neerslag lost opnieuw op bij herverwarming. Water hardheid verergert cremen: calcium en magnesium ionen binden aan polyfenolen, wat neerslag versnelt. Zacht water minimaliseert cream down."
                }
            },
            {
                question: {
                    en: "What enzymatic pathway creates the floral 'orchid fragrance' in traditional Tie Guan Yin oolong?",
                    es: "¿Qué vía enzimática crea la 'fragancia de orquídea' floral en oolong Tie Guan Yin tradicional?",
                    de: "Welcher enzymatische Weg erzeugt den blumigen 'Orchideenduft' in traditionellem Tie Guan Yin Oolong?",
                    nl: "Welke enzymatische route creëert de bloemen 'orchidee geur' in traditionele Tie Guan Yin oolong?"
                },
                options: [
                    {
                        en: "Lipoxygenase enzyme catalyzes linolenic acid breakdown into volatile C6 aldehydes (hexanal) and terpene alcohols (linalool, geraniol) during bruising",
                        es: "Enzima lipoxigenasa cataliza descomposición de ácido linolénico en aldehídos C6 volátiles (hexanal) y alcoholes terpénicos (linalool, geraniol) durante magulladura",
                        de: "Lipoxygenase-Enzym katalysiert Linolensäureabbau in flüchtige C6-Aldehyde (Hexanal) und Terpenalkohole (Linalool, Geraniol) während des Quetschens",
                        nl: "Lipoxygenase enzym katalyseert linoleenzuur afbraak in vluchtige C6 aldehydes (hexanal) en terpeen alcoholen (linalool, geraniol) tijdens kneuzen"
                    },
                    {
                        en: "Actual orchid petals are added during processing",
                        es: "Pétalos de orquídea reales son añadidos durante procesamiento",
                        de: "Echte Orchideenblütenblätter werden während der Verarbeitung hinzugefügt",
                        nl: "Echte orchidee blaadjes worden toegevoegd tijdens verwerking"
                    },
                    {
                        en: "High oxidation creates caramel compounds that smell floral",
                        es: "Alta oxidación crea compuestos de caramelo que huelen floral",
                        de: "Hohe Oxidation erzeugt Karamellverbindungen, die blumig riechen",
                        nl: "Hoge oxidatie creëert karamel verbindingen die bloemen ruiken"
                    },
                    {
                        en: "Artificial fragrances are sprayed on leaves after drying",
                        es: "Fragancias artificiales son rociadas en hojas después de secado",
                        de: "Künstliche Duftstoffe werden nach dem Trocknen auf Blätter gesprüht",
                        nl: "Kunstmatige geuren worden op bladeren gespoten na drogen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The signature orchid fragrance of Tie Guan Yin comes from lipoxygenase (LOX) enzyme activity during the repeated bruising/shaking steps. LOX catalyzes oxidation of linoleic and linolenic acids (fatty acids in tea leaves) into C6 aldehydes like (Z)-3-hexenal ('green' note) and (E)-2-hexenal. These then convert into aromatic alcohols like linalool (floral/lavender), geraniol (rose), and nerolidol (woody floral). The specific bruising intensity and timing in Anxi processing creates the perfect balance of these volatiles. Modern 'green style' Tie Guan Yin has less bruising, producing lighter floral notes.",
                    es: "Fragancia de orquídea característica de Tie Guan Yin proviene de actividad enzimática de lipoxigenasa (LOX) durante pasos repetidos de magulladura/agitación. LOX cataliza oxidación de ácidos linoleico y linolénico (ácidos grasos en hojas de té) en aldehídos C6 como (Z)-3-hexenal (nota 'verde') y (E)-2-hexenal. Estos luego se convierten en alcoholes aromáticos como linalool (floral/lavanda), geraniol (rosa) y nerolidol (floral amaderado). Intensidad específica de magulladura y tiempo en procesamiento Anxi crea balance perfecto de estos volátiles. Tie Guan Yin moderno 'estilo verde' tiene menos magulladura, produciendo notas florales más ligeras.",
                    de: "Der charakteristische Orchideenduft von Tie Guan Yin kommt von Lipoxygenase (LOX)-Enzymaktivität während der wiederholten Quetsch-/Schüttelschritte. LOX katalysiert Oxidation von Linol- und Linolensäuren (Fettsäuren in Teeblättern) in C6-Aldehyde wie (Z)-3-Hexenal ('grüne' Note) und (E)-2-Hexenal. Diese wandeln sich dann in aromatische Alkohole wie Linalool (blumig/Lavendel), Geraniol (Rose) und Nerolidol (holzig blumig) um. Die spezifische Quetschintensität und -zeit in der Anxi-Verarbeitung schafft die perfekte Balance dieser flüchtigen Stoffe. Moderner 'grüner Stil' Tie Guan Yin hat weniger Quetschen und produziert leichtere Blumennoten.",
                    nl: "De kenmerkende orchidee geur van Tie Guan Yin komt van lipoxygenase (LOX) enzym activiteit tijdens de herhaalde kneuzen/schudden stappen. LOX katalyseert oxidatie van linolzuur en linoleenzuur (vetzuren in thee bladeren) in C6 aldehydes zoals (Z)-3-hexenal ('groene' toon) en (E)-2-hexenal. Deze converteren dan naar aromatische alcoholen zoals linalool (bloemen/lavendel), geraniol (roos) en nerolidol (houtig bloemen). De specifieke kneus intensiteit en timing in Anxi verwerking creëert de perfecte balans van deze vluchtige stoffen. Moderne 'groene stijl' Tie Guan Yin heeft minder kneuzen, wat lichtere bloemen tonen produceert."
                }
            },
            {
                question: {
                    en: "What is the biochemical basis for tea's 'aftertaste' or 'hui gan' (returning sweetness)?",
                    es: "¿Cuál es la base bioquímica para el 'retrogusto' del té o 'hui gan' (dulzura que regresa)?",
                    de: "Was ist die biochemische Grundlage für Tees 'Nachgeschmack' oder 'Hui Gan' (zurückkehrende Süße)?",
                    nl: "Wat is de biochemische basis voor thee's 'nasmaak' of 'hui gan' (terugkerende zoetheid)?"
                },
                options: [
                    {
                        en: "Initial astringency from catechins triggers salivation; saliva enzymes then break down residual compounds releasing sweet amino acids and masking bitterness",
                        es: "Astringencia inicial de catequinas desencadena salivación; enzimas de saliva luego descomponen compuestos residuales liberando aminoácidos dulces y enmascarando amargor",
                        de: "Anfängliche Adstringenz durch Catechine löst Speichelfluss aus; Speichelenzyme bauen dann Restverbindungen ab, setzen süße Aminosäuren frei und maskieren Bitterkeit",
                        nl: "Initiële samentrekking van catechines triggert speekselproductie; speeksel enzymen breken dan resterende verbindingen af wat zoete aminozuren vrijgeeft en bitterheid maskeert"
                    },
                    {
                        en: "Sugar compounds slowly dissolve from leaf particles stuck to the palate",
                        es: "Compuestos de azúcar lentamente se disuelven de partículas de hoja atrapadas en el paladar",
                        de: "Zuckerverbindungen lösen sich langsam von Blattpartikeln auf dem Gaumen",
                        nl: "Suiker verbindingen lossen langzaam op van blad deeltjes vast op het gehemelte"
                    },
                    {
                        en: "Aftertaste is purely psychological adaptation to initial strong flavors",
                        es: "Retrogusto es adaptación puramente psicológica a sabores iniciales fuertes",
                        de: "Nachgeschmack ist rein psychologische Anpassung an anfängliche starke Aromen",
                        nl: "Nasmaak is puur psychologische aanpassing aan initiële sterke smaken"
                    },
                    {
                        en: "Caffeine molecules continue to stimulate sweet taste receptors for minutes",
                        es: "Moléculas de cafeína continúan estimulando receptores de sabor dulce por minutos",
                        de: "Koffeinmoleküle stimulieren weiterhin süße Geschmacksrezeptoren für Minuten",
                        nl: "Cafeïne moleculen blijven zoete smaak receptoren stimuleren voor minuten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Hui gan is a multi-phase sensory experience highly prized in oolongs and puerhs. Initial contact delivers astringent catechins that bind salivary proteins, creating dryness and triggering compensatory salivation. As fresh saliva flows, its enzymes (α-amylase, maltase) break down complex polyphenols and polysaccharides into simpler, sweeter compounds. Meanwhile, the initial astringency desensitizes bitter taste receptors, making sweet and umami notes more perceptible. High-quality aged teas exhibit strongest hui gan because their aged polyphenols are primed for enzymatic breakdown. The 'throat feel' or 'yun' is the cool, sweet sensation as compounds interact with receptors deeper in the throat.",
                    es: "Hui gan es experiencia sensorial multifásica muy valorada en oolongs y puerhs. Contacto inicial entrega catequinas astringentes que unen proteínas salivales, creando sequedad y desencadenando salivación compensatoria. Mientras fluye saliva fresca, sus enzimas (α-amilasa, maltasa) descomponen polifenoles complejos y polisacáridos en compuestos más simples y dulces. Mientras tanto, astringencia inicial desensibiliza receptores de sabor amargo, haciendo notas dulces y umami más perceptibles. Tés envejecidos de alta calidad exhiben hui gan más fuerte porque sus polifenoles envejecidos están preparados para descomposición enzimática. 'Sensación de garganta' o 'yun' es sensación fresca y dulce cuando compuestos interactúan con receptores más profundos en garganta.",
                    de: "Hui Gan ist ein mehrphasiges sensorisches Erlebnis, das bei Oolongs und Puerhs sehr geschätzt wird. Erstkontakt liefert adstringierende Catechine, die Speichelproteine binden, Trockenheit erzeugen und kompensatorischen Speichelfluss auslösen. Während frischer Speichel fließt, bauen seine Enzyme (α-Amylase, Maltase) komplexe Polyphenole und Polysaccharide in einfachere, süßere Verbindungen ab. Inzwischen desensibilisiert die anfängliche Adstringenz bittere Geschmacksrezeptoren, wodurch süße und Umami-Noten wahrnehmbarer werden. Hochwertige gealterte Tees zeigen stärkstes Hui Gan, weil ihre gereiften Polyphenole für enzymatischen Abbau vorbereitet sind. Das 'Halsgefühl' oder 'Yun' ist die kühle, süße Empfindung, wenn Verbindungen mit Rezeptoren tiefer im Hals interagieren.",
                    nl: "Hui gan is een meerfasige sensorische ervaring zeer gewaardeerd in oolongs en puerhs. Initieel contact levert samentrekkende catechines die speeksel eiwitten binden, droogte creërend en compenserende speekselproductie triggerend. Als vers speeksel stroomt, breken zijn enzymen (α-amylase, maltase) complexe polyfenolen en polysachariden af tot simpeler, zoeter verbindingen. Ondertussen desensibiliseert de initiële samentrekking bittere smaak receptoren, wat zoete en umami tonen waarneembaarder maakt. Hoge kwaliteit gerijpte thee vertoont sterkste hui gan omdat hun gerijpte polyfenolen klaar zijn voor enzymatische afbraak. Het 'keel gevoel' of 'yun' is de koele, zoete sensatie als verbindingen interacteren met receptoren dieper in de keel."
                }
            },
            {
                question: {
                    en: "What chemical process creates the 'roasted' or 'baked' character in Wuyi rock oolongs?",
                    es: "¿Qué proceso químico crea el carácter 'tostado' o 'horneado' en oolongs de roca Wuyi?",
                    de: "Welcher chemische Prozess erzeugt den 'gerösteten' oder 'gebackenen' Charakter in Wuyi-Fels-Oolongs?",
                    nl: "Welk chemisch proces creëert het 'geroosterde' of 'gebakken' karakter in Wuyi rots oolongs?"
                },
                options: [
                    {
                        en: "Multiple charcoal roasting cycles (6-10 times) trigger Maillard reactions and caramelization, converting amino acids and sugars into roasted, nutty, caramel notes",
                        es: "Múltiples ciclos de tostado con carbón (6-10 veces) desencadenan reacciones de Maillard y caramelización, convirtiendo aminoácidos y azúcares en notas tostadas, de nuez y caramelo",
                        de: "Mehrere Holzkohle-Röstzyklen (6-10 Mal) lösen Maillard-Reaktionen und Karamelisierung aus, wandeln Aminosäuren und Zucker in geröstete, nussige, Karamellnoten um",
                        nl: "Meervoudige houtskool rooster cycli (6-10 keer) triggeren Maillard reacties en karamelisatie, aminozuren en suikers omzettend in geroosterde, notige, karamel tonen"
                    },
                    {
                        en: "Roasted compounds are added as flavoring after processing",
                        es: "Compuestos tostados son añadidos como saborizante después de procesamiento",
                        de: "Geröstete Verbindungen werden nach der Verarbeitung als Aroma hinzugefügt",
                        nl: "Geroosterde verbindingen worden als smaakstof toegevoegd na verwerking"
                    },
                    {
                        en: "Tea grows near volcanic rocks that impart mineral roasted flavors",
                        es: "Té crece cerca de rocas volcánicas que imparten sabores tostados minerales",
                        de: "Tee wächst in der Nähe vulkanischer Gesteine, die mineralische Röstaromen verleihen",
                        nl: "Thee groeit bij vulkanische rotsen die minerale geroosterde smaken geven"
                    },
                    {
                        en: "High oxidation alone creates all roasted flavors without additional heat",
                        es: "Alta oxidación sola crea todos sabores tostados sin calor adicional",
                        de: "Hohe Oxidation allein erzeugt alle Röstaromen ohne zusätzliche Hitze",
                        nl: "Hoge oxidatie alleen creëert alle geroosterde smaken zonder extra hitte"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wuyi rock oolongs undergo traditional 'hong bei' (roasting) over charcoal at 90-120°C in 6-10 sessions spanning months. Each roasting cycle drives Maillard reactions between amino acids (especially proline, glycine) and reducing sugars, creating hundreds of flavor compounds: pyrazines (roasted, nutty), furans (caramel, sweet), pyrroles (toasted), and melanoidins (brown, complex). Caramelization of remaining sugars adds sweetness. This transforms the tea's green floral notes into deep coffee, chocolate, caramel, and mineral complexity. 'Light roast' uses fewer cycles preserving more floral character; 'high roast' creates darker, more caramelized profiles. Proper roasting requires mastery—over-roasting creates carbon harshness.",
                    es: "Oolongs de roca Wuyi se someten a 'hong bei' tradicional (tostado) sobre carbón a 90-120°C en 6-10 sesiones durante meses. Cada ciclo de tostado impulsa reacciones de Maillard entre aminoácidos (especialmente prolina, glicina) y azúcares reductores, creando cientos de compuestos de sabor: pirazinas (tostado, nuez), furanos (caramelo, dulce), pirroles (tostado) y melanoidinas (marrón, complejo). Caramelización de azúcares restantes añade dulzura. Esto transforma notas florales verdes del té en complejidad profunda de café, chocolate, caramelo y mineral. 'Tostado ligero' usa menos ciclos preservando más carácter floral; 'tostado alto' crea perfiles más oscuros y caramelizados. Tostado apropiado requiere maestría—sobre-tostado crea dureza de carbón.",
                    de: "Wuyi-Fels-Oolongs durchlaufen traditionelles 'Hong Bei' (Rösten) über Holzkohle bei 90-120°C in 6-10 Sitzungen über Monate. Jeder Röstzyklus treibt Maillard-Reaktionen zwischen Aminosäuren (besonders Prolin, Glycin) und reduzierenden Zuckern an, erzeugt Hunderte von Geschmacksverbindungen: Pyrazine (geröstet, nussig), Furane (Karamell, süß), Pyrrole (getoastet) und Melanoidine (braun, komplex). Karamelisierung verbleibender Zucker fügt Süße hinzu. Dies verwandelt grüne Blumennoten des Tees in tiefe Kaffee-, Schokoladen-, Karamell- und Mineralkomplexität. 'Leichte Röstung' verwendet weniger Zyklen und bewahrt mehr Blumencharakter; 'hohe Röstung' erzeugt dunklere, karamellisiertere Profile. Richtige Röstung erfordert Meisterschaft—Überrösten erzeugt Kohlenstoffhärte.",
                    nl: "Wuyi rots oolongs ondergaan traditionele 'hong bei' (roosteren) over houtskool bij 90-120°C in 6-10 sessies gedurende maanden. Elke rooster cyclus drijft Maillard reacties tussen aminozuren (vooral proline, glycine) en reducerende suikers, wat honderden smaak verbindingen creëert: pyrazines (geroosterd, notig), furanen (karamel, zoet), pyrrolen (getoast) en melanoidines (bruin, complex). Karamelisatie van resterende suikers voegt zoetheid toe. Dit transformeert de thee's groene bloemen tonen in diepe koffie, chocolade, karamel en mineraal complexiteit. 'Licht roosteren' gebruikt minder cycli wat meer bloemen karakter behoudt; 'zwaar roosteren' creëert donkerdere, meer gekarameliseerde profielen. Correct roosteren vereist meesterschap—over-roosteren creëert koolstof hardheid."
                }
            },
            {
                question: {
                    en: "What is the molecular basis for fluoride accumulation in tea leaves and its health implications?",
                    es: "¿Cuál es la base molecular para acumulación de fluoruro en hojas de té y sus implicaciones de salud?",
                    de: "Was ist die molekulare Grundlage für Fluoridanreicherung in Teeblättern und deren gesundheitliche Auswirkungen?",
                    nl: "Wat is de moleculaire basis voor fluoride accumulatie in thee bladeren en de gezondheidsimplicaties?"
                },
                options: [
                    {
                        en: "Tea plants actively absorb fluoride from soil through root ion transporters; mature leaves accumulate highest levels (up to 400 ppm in old leaves)",
                        es: "Plantas de té absorben activamente fluoruro del suelo mediante transportadores de iones en raíces; hojas maduras acumulan niveles más altos (hasta 400 ppm en hojas viejas)",
                        de: "Teepflanzen nehmen aktiv Fluorid aus dem Boden durch Wurzel-Ionentransporter auf; reife Blätter akkumulieren höchste Mengen (bis zu 400 ppm in alten Blättern)",
                        nl: "Thee planten absorberen actief fluoride uit grond via wortel ion transporters; volwassen bladeren accumuleren hoogste niveaus (tot 400 ppm in oude bladeren)"
                    },
                    {
                        en: "Fluoride is added to tea during processing for preservation",
                        es: "Fluoruro es añadido al té durante procesamiento para preservación",
                        de: "Fluorid wird Tee während der Verarbeitung zur Konservierung hinzugefügt",
                        nl: "Fluoride wordt toegevoegd aan thee tijdens verwerking voor conservering"
                    },
                    {
                        en: "Tea contains no fluoride; it's only present if added to brewing water",
                        es: "Té no contiene fluoruro; solo está presente si se añade al agua de preparación",
                        de: "Tee enthält kein Fluorid; es ist nur vorhanden, wenn es dem Brauwasser zugesetzt wird",
                        nl: "Thee bevat geen fluoride; het is alleen aanwezig als toegevoegd aan brouwwater"
                    },
                    {
                        en: "Fluoride accumulates from airborne pollution during drying",
                        es: "Fluoruro se acumula de contaminación aérea durante secado",
                        de: "Fluorid akkumuliert durch Luftverschmutzung während des Trocknens",
                        nl: "Fluoride accumuleert van luchtverontreiniging tijdens drogen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Camellia sinensis is a fluoride-accumulating plant. It actively absorbs fluoride ions (F-) from soil through anion transporters in roots. Fluoride then accumulates in vacuoles of mature leaves, with concentrations increasing with leaf age: young buds (50-150 ppm), mature leaves (200-400 ppm), old/coarse leaves (400+ ppm). This is why white and green teas (young leaves) have lower fluoride than brick teas made from mature leaves. Tea consumption provides beneficial fluoride for dental health (0.5-1.0 mg/L), but excessive consumption of low-grade brick teas can lead to skeletal fluorosis (>10 mg/L). Brewing time affects extraction: 1 min extracts ~30%, 5 min ~70% of available fluoride.",
                    es: "Camellia sinensis es planta acumuladora de fluoruro. Absorbe activamente iones de fluoruro (F-) del suelo mediante transportadores de aniones en raíces. Fluoruro luego se acumula en vacuolas de hojas maduras, con concentraciones aumentando con edad de hoja: brotes jóvenes (50-150 ppm), hojas maduras (200-400 ppm), hojas viejas/gruesas (400+ ppm). Por esto tés blancos y verdes (hojas jóvenes) tienen menor fluoruro que tés en ladrillo hechos de hojas maduras. Consumo de té proporciona fluoruro beneficioso para salud dental (0.5-1.0 mg/L), pero consumo excesivo de tés en ladrillo de baja calidad puede llevar a fluorosis esquelética (>10 mg/L). Tiempo de preparación afecta extracción: 1 min extrae ~30%, 5 min ~70% de fluoruro disponible.",
                    de: "Camellia sinensis ist eine Fluorid-akkumulierende Pflanze. Sie nimmt aktiv Fluoridionen (F-) aus dem Boden durch Anionentransporter in Wurzeln auf. Fluorid akkumuliert dann in Vakuolen reifer Blätter, wobei Konzentrationen mit Blattalter zunehmen: junge Knospen (50-150 ppm), reife Blätter (200-400 ppm), alte/grobe Blätter (400+ ppm). Deshalb haben weiße und grüne Tees (junge Blätter) weniger Fluorid als Ziegeltees aus reifen Blättern. Teekonsum liefert vorteilhaftes Fluorid für Zahngesundheit (0,5-1,0 mg/L), aber übermäßiger Konsum minderwertiger Ziegeltees kann zu Skelettfluorose führen (>10 mg/L). Brühzeit beeinflusst Extraktion: 1 Min extrahiert ~30%, 5 Min ~70% des verfügbaren Fluorids.",
                    nl: "Camellia sinensis is een fluoride-accumulerende plant. Het absorbeert actief fluoride ionen (F-) uit grond via anion transporters in wortels. Fluoride accumuleert dan in vacuolen van volwassen bladeren, met concentraties toenemend met blad leeftijd: jonge knoppen (50-150 ppm), volwassen bladeren (200-400 ppm), oude/grove bladeren (400+ ppm). Daarom hebben witte en groene thee (jonge bladeren) lager fluoride dan baksteen thee gemaakt van volwassen bladeren. Thee consumptie levert voordelig fluoride voor tandgezondheid (0,5-1,0 mg/L), maar overmatige consumptie van lage-kwaliteit baksteen thee kan leiden tot skelet fluorose (>10 mg/L). Trekken tijd beïnvloedt extractie: 1 min extraheert ~30%, 5 min ~70% van beschikbaar fluoride."
                }
            },
            {
                question: {
                    en: "What chemical transformation distinguishes 'white tea' processing from other tea types?",
                    es: "¿Qué transformación química distingue el procesamiento de 'té blanco' de otros tipos de té?",
                    de: "Welche chemische Transformation unterscheidet die Verarbeitung von 'weißem Tee' von anderen Teetypen?",
                    nl: "Welke chemische transformatie onderscheidt 'witte thee' verwerking van andere thee types?"
                },
                options: [
                    {
                        en: "Minimal processing (withering + drying only) allows slow enzymatic oxidation (5-10%) without mechanical bruising, preserving maximum catechins and minimal theaflavin formation",
                        es: "Procesamiento mínimo (solo marchitado + secado) permite oxidación enzimática lenta (5-10%) sin magulladura mecánica, preservando máximo catequinas y mínima formación de teaflavina",
                        de: "Minimale Verarbeitung (nur Welken + Trocknen) ermöglicht langsame enzymatische Oxidation (5-10%) ohne mechanisches Quetschen, bewahrt maximale Catechine und minimale Theaflavinbildung",
                        nl: "Minimale verwerking (alleen verwelken + drogen) staat langzame enzymatische oxidatie (5-10%) toe zonder mechanisch kneuzen, behoudt maximum catechines en minimale theaflavine vorming"
                    },
                    {
                        en: "White tea leaves are bleached with hydrogen peroxide to achieve white color",
                        es: "Hojas de té blanco son blanqueadas con peróxido de hidrógeno para lograr color blanco",
                        de: "Weiße Teeblätter werden mit Wasserstoffperoxid gebleicht, um weiße Farbe zu erreichen",
                        nl: "Witte thee bladeren worden gebleekt met waterstofperoxide om witte kleur te bereiken"
                    },
                    {
                        en: "White tea undergoes complete oxidation like black tea but uses white-haired buds",
                        es: "Té blanco sufre oxidación completa como té negro pero usa brotes de pelo blanco",
                        de: "Weißer Tee durchläuft vollständige Oxidation wie Schwarztee, verwendet aber weiß-haarige Knospen",
                        nl: "Witte thee ondergaat volledige oxidatie zoals zwarte thee maar gebruikt wit-behaarde knoppen"
                    },
                    {
                        en: "White tea is fermented with lactic acid bacteria creating pale color",
                        es: "Té blanco es fermentado con bacterias de ácido láctico creando color pálido",
                        de: "Weißer Tee wird mit Milchsäurebakterien fermentiert, die blasse Farbe erzeugen",
                        nl: "Witte thee wordt gefermenteerd met melkzuurbacteriën wat bleke kleur creëert"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "White tea is the least processed tea type, using only natural withering (24-72 hours) and low-temperature drying (70-90°C). Without rolling or kill-green steps, polyphenol oxidase enzymes remain active during withering, causing slow, gentle oxidation (5-10%). This is far less than oolong (20-80%) or black tea (100%). The minimal oxidation preserves high catechin content (especially EGCG) and creates very low theaflavin levels, resulting in delicate, sweet, slightly floral character. The 'white' name comes from silvery-white trichomes (fine hairs) on young buds (Silver Needle) or leaves (White Peony), not processing method. White tea has highest antioxidant content among tea types due to minimal catechin degradation.",
                    es: "Té blanco es tipo de té menos procesado, usando solo marchitado natural (24-72 horas) y secado a baja temperatura (70-90°C). Sin pasos de enrollado o kill-green, enzimas polifenol oxidasa permanecen activas durante marchitado, causando oxidación lenta y suave (5-10%). Esto es mucho menos que oolong (20-80%) o té negro (100%). Oxidación mínima preserva alto contenido de catequina (especialmente EGCG) y crea niveles muy bajos de teaflavina, resultando en carácter delicado, dulce y ligeramente floral. Nombre 'blanco' viene de tricomas blanco-plateados (pelos finos) en brotes jóvenes (Silver Needle) u hojas (White Peony), no método de procesamiento. Té blanco tiene mayor contenido antioxidante entre tipos de té debido a degradación mínima de catequina.",
                    de: "Weißer Tee ist der am wenigsten verarbeitete Teetyp, verwendet nur natürliches Welken (24-72 Stunden) und Niedertemperatur-Trocknung (70-90°C). Ohne Roll- oder Kill-Green-Schritte bleiben Polyphenoloxidase-Enzyme während des Welkens aktiv und verursachen langsame, sanfte Oxidation (5-10%). Dies ist weit weniger als Oolong (20-80%) oder Schwarztee (100%). Minimale Oxidation bewahrt hohen Catechin-Gehalt (besonders EGCG) und erzeugt sehr niedrige Theaflavin-Spiegel, resultierend in zartem, süßem, leicht blumigem Charakter. Der Name 'weiß' kommt von silbrig-weißen Trichomen (feinen Haaren) auf jungen Knospen (Silver Needle) oder Blättern (White Peony), nicht Verarbeitungsmethode. Weißer Tee hat höchsten Antioxidantiengehalt unter Teetypen aufgrund minimaler Catechin-Degradation.",
                    nl: "Witte thee is het minst verwerkte thee type, gebruikt alleen natuurlijk verwelken (24-72 uur) en lage-temperatuur drogen (70-90°C). Zonder rollen of kill-green stappen blijven polyfenol oxidase enzymen actief tijdens verwelken, wat langzame, zachte oxidatie (5-10%) veroorzaakt. Dit is veel minder dan oolong (20-80%) of zwarte thee (100%). De minimale oxidatie behoudt hoog catechine gehalte (vooral EGCG) en creëert zeer lage theaflavine niveaus, resulterend in delicaat, zoet, licht bloemen karakter. De 'witte' naam komt van zilverig-witte trichomen (fijne haartjes) op jonge knoppen (Silver Needle) of bladeren (White Peony), niet verwerkingsmethode. Witte thee heeft hoogste antioxidant gehalte onder thee types door minimale catechine degradatie."
                }
            },
            {
                question: {
                    en: "What is the biochemical mechanism behind 'golden flowers' (jin hua) in Fu Brick dark tea?",
                    es: "¿Cuál es el mecanismo bioquímico detrás de 'flores doradas' (jin hua) en té oscuro Fu Brick?",
                    de: "Was ist der biochemische Mechanismus hinter 'goldenen Blumen' (Jin Hua) in Fu Brick dunklem Tee?",
                    nl: "Wat is het biochemische mechanisme achter 'gouden bloemen' (jin hua) in Fu Brick donkere thee?"
                },
                options: [
                    {
                        en: "Eurotium cristatum fungus colonizes compressed tea, producing enzymes that break down catechins into unique metabolites and pleasant floral aromatics",
                        es: "Hongo Eurotium cristatum coloniza té comprimido, produciendo enzimas que descomponen catequinas en metabolitos únicos y aromáticos florales agradables",
                        de: "Eurotium cristatum Pilz besiedelt komprimierten Tee, produziert Enzyme, die Catechine in einzigartige Metaboliten und angenehme blumige Aromastoffe abbauen",
                        nl: "Eurotium cristatum schimmel koloniseert geperste thee, produceert enzymen die catechines afbreken tot unieke metabolieten en aangename bloemen aromaten"
                    },
                    {
                        en: "Golden mineral deposits from local water crystallize on tea surface",
                        es: "Depósitos minerales dorados de agua local cristalizan en superficie del té",
                        de: "Goldene Mineralablagerungen aus lokalem Wasser kristallisieren auf Teeoberfläche",
                        nl: "Gouden mineraal afzettingen van lokaal water kristalliseren op thee oppervlak"
                    },
                    {
                        en: "Pollen from flowers is added during brick pressing",
                        es: "Polen de flores es añadido durante prensado de ladrillo",
                        de: "Blütenpollen wird während des Ziegelpressens hinzugefügt",
                        nl: "Pollen van bloemen wordt toegevoegd tijdens baksteen persen"
                    },
                    {
                        en: "Caramelized sugars oxidize into golden crystals during aging",
                        es: "Azúcares caramelizados oxidan en cristales dorados durante envejecimiento",
                        de: "Karamellisierte Zucker oxidieren während der Alterung zu goldenen Kristallen",
                        nl: "Gekarameliseerde suikers oxideren tot gouden kristallen tijdens rijping"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "'Golden flowers' are golden-yellow colonies of Eurotium cristatum (formerly Aspergillus cristatus), a probiotic fungus unique to Fu Brick tea from Hunan. After pressing tea into bricks, controlled fermentation at 25-28°C and 85% humidity for 20-30 days encourages E. cristatum growth. The fungus secretes cellulase, pectinase, protease, and polyphenol oxidase enzymes that transform tea chemistry: bitter catechins convert into smooth, sweet metabolites; new aromatic compounds (geraniol, linalool) develop; polysaccharides increase. The result is a distinctive sweet, mellow, floral character prized for digestive benefits. Jin hua coverage and aroma intensity are quality indicators—dense golden spots indicate proper fermentation.",
                    es: "'Flores doradas' son colonias amarillo-doradas de Eurotium cristatum (anteriormente Aspergillus cristatus), hongo probiótico único del té Fu Brick de Hunan. Después de prensar té en ladrillos, fermentación controlada a 25-28°C y 85% humedad durante 20-30 días fomenta crecimiento de E. cristatum. Hongo secreta enzimas celulasa, pectinasa, proteasa y polifenol oxidasa que transforman química del té: catequinas amargas se convierten en metabolitos suaves y dulces; nuevos compuestos aromáticos (geraniol, linalool) se desarrollan; polisacáridos aumentan. Resultado es carácter distintivo dulce, suave y floral valorado por beneficios digestivos. Cobertura de jin hua e intensidad de aroma son indicadores de calidad—manchas doradas densas indican fermentación apropiada.",
                    de: "'Goldene Blumen' sind goldgelbe Kolonien von Eurotium cristatum (früher Aspergillus cristatus), ein probiotischer Pilz einzigartig für Fu Brick Tee aus Hunan. Nach Pressen von Tee in Ziegel fördert kontrollierte Fermentation bei 25-28°C und 85% Luftfeuchtigkeit für 20-30 Tage E. cristatum Wachstum. Der Pilz sezerniert Cellulase-, Pektinase-, Protease- und Polyphenoloxidase-Enzyme, die Tee-Chemie transformieren: bittere Catechine wandeln sich in glatte, süße Metaboliten um; neue aromatische Verbindungen (Geraniol, Linalool) entwickeln sich; Polysaccharide nehmen zu. Ergebnis ist ein charakteristischer süßer, milder, blumiger Charakter, geschätzt für Verdauungsvorteile. Jin Hua Abdeckung und Aromaintensität sind Qualitätsindikatoren—dichte goldene Flecken zeigen richtige Fermentation an.",
                    nl: "'Gouden bloemen' zijn goudgele kolonies van Eurotium cristatum (voorheen Aspergillus cristatus), een probiotische schimmel uniek voor Fu Brick thee uit Hunan. Na persen van thee tot bakstenen moedigt gecontroleerde fermentatie bij 25-28°C en 85% vochtigheid gedurende 20-30 dagen E. cristatum groei aan. De schimmel scheidt cellulase, pectinase, protease en polyfenol oxidase enzymen af die thee chemie transformeren: bittere catechines converteren tot gladde, zoete metabolieten; nieuwe aromatische verbindingen (geraniol, linalool) ontwikkelen; polysachariden nemen toe. Resultaat is een onderscheidend zoet, zacht, bloemen karakter gewaardeerd voor spijsverterings voordelen. Jin hua dekking en aroma intensiteit zijn kwaliteit indicatoren—dichte gouden vlekken geven correcte fermentatie aan."
                }
            }

