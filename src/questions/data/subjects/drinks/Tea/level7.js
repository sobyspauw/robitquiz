// Quiz - Level 7: Drinken - Thee (Tea Tasting & Evaluation)
(function() {
    "use strict";

    const level7 = {
        name: {
            en: "Tea Tasting & Evaluation",
            es: "Degustación y Evaluación de Té",
            de: "Tee-Verkostung & Bewertung",
            nl: "Thee Proeven & Evaluatie"
        },
        questions: [
            {
                question: {
                    en: "What is the professional tea tasting technique called 'slurping' designed to achieve?",
                    es: "¿Qué está diseñada para lograr la técnica profesional de degustación de té llamada 'sorber'?",
                    de: "Was ist die professionelle Tee-Verkostungstechnik des 'Schlürfens' darauf ausgelegt zu erreichen?",
                    nl: "Wat is de professionele thee proef techniek genaamd 'slurpen' ontworpen om te bereiken?"
                },
                options: [
                    {
                        en: "Aerate tea across the palate to enhance volatile aromatics and flavor perception",
                        es: "Airear el té por el paladar para realzar aromáticos volátiles y percepción del sabor",
                        de: "Tee über den Gaumen belüften, um flüchtige Aromastoffe und Geschmackswahrnehmung zu verstärken",
                        nl: "Thee beluchten over het gehemelte om vluchtige aromaten en smaakperceptie te versterken"
                    },
                    {
                        en: "Cool down hot tea quickly to prevent burning",
                        es: "Enfriar el té caliente rápidamente para prevenir quemaduras",
                        de: "Heißen Tee schnell abkühlen, um Verbrennung zu verhindern",
                        nl: "Hete thee snel afkoelen om verbranding te voorkomen"
                    },
                    {
                        en: "Make noise to show appreciation for the tea",
                        es: "Hacer ruido para mostrar aprecio por el té",
                        de: "Geräusche machen, um Wertschätzung für den Tee zu zeigen",
                        nl: "Geluid maken om waardering voor de thee te tonen"
                    },
                    {
                        en: "Mix different teas in the mouth simultaneously",
                        es: "Mezclar diferentes tés en la boca simultáneamente",
                        de: "Verschiedene Tees gleichzeitig im Mund mischen",
                        nl: "Verschillende theeën gelijktijdig in de mond mengen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Professional slurping draws air through the tea, spreading it across taste buds and enhancing volatile compounds' reach to olfactory receptors for comprehensive flavor analysis.",
                    es: "El sorber profesional atrae aire a través del té, extendiéndolo por las papilas gustativas y mejorando el alcance de compuestos volátiles a los receptores olfatorios para análisis completo del sabor.",
                    de: "Professionelles Schlürfen zieht Luft durch den Tee, verteilt ihn über Geschmacksknospen und verstärkt die Reichweite flüchtiger Verbindungen zu Riechrezeptoren für umfassende Geschmacksanalyse.",
                    nl: "Professioneel slurpen trekt lucht door de thee, verspreidt het over smaakpapillen en verbetert vluchtige verbindingen hun bereik tot reukceptoren voor uitgebreide smaakanalyse."
                }
            },
            {
                question: {
                    en: "In professional tea cupping, what does 'liquor' refer to?",
                    es: "En el catado profesional de té, ¿a qué se refiere 'licor'?",
                    de: "Worauf bezieht sich 'Liquor' beim professionellen Tea Cupping?",
                    nl: "Waar verwijst 'liquor' naar in professioneel thee cuppen?"
                },
                options: [
                    {
                        en: "The brewed tea liquid itself, distinct from the dry leaves",
                        es: "El líquido de té preparado en sí, distinto de las hojas secas",
                        de: "Die gebrühte Teeflüssigkeit selbst, unterschieden von den trockenen Blättern",
                        nl: "De gebrouwen thee vloeistof zelf, onderscheiden van de droge bladeren"
                    },
                    {
                        en: "Alcohol added to enhance tea flavor",
                        es: "Alcohol agregado para realzar el sabor del té",
                        de: "Alkohol hinzugefügt zur Geschmacksverstärkung",
                        nl: "Alcohol toegevoegd om thee smaak te versterken"
                    },
                    {
                        en: "The concentrated tea essence extract",
                        es: "El extracto concentrado de esencia de té",
                        de: "Der konzentrierte Tee-Essenz-Extrakt",
                        nl: "Het geconcentreerde thee essence extract"
                    },
                    {
                        en: "Sweetening syrup used in tea preparation",
                        es: "Jarabe endulzante usado en preparación de té",
                        de: "Süßungssirup für Tee-Zubereitung verwendet",
                        nl: "Zoetmakende siroop gebruikt in thee bereiding"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "In tea terminology, 'liquor' simply refers to the brewed tea liquid - the infusion created when hot water extracts compounds from tea leaves during steeping.",
                    es: "En terminología del té, 'licor' simplemente se refiere al líquido de té preparado - la infusión creada cuando el agua caliente extrae compuestos de las hojas de té durante el remojo.",
                    de: "In der Tee-Terminologie bezieht sich 'Liquor' einfach auf die gebrühte Teeflüssigkeit - die Infusion, die entsteht, wenn heißes Wasser Verbindungen aus Teeblättern während des Ziehens extrahiert.",
                    nl: "In thee terminologie verwijst 'liquor' simpelweg naar de gebrouwen thee vloeistof - de infusie gecreëerd wanneer heet water verbindingen uit thee bladeren extraheert tijdens het trekken."
                }
            },
            {
                question: {
                    en: "What are the five key sensory aspects evaluated in professional tea tasting?",
                    es: "¿Cuáles son los cinco aspectos sensoriales clave evaluados en la degustación profesional de té?",
                    de: "Was sind die fünf wichtigsten sensorischen Aspekte, die bei der professionellen Tee-Verkostung bewertet werden?",
                    nl: "Wat zijn de vijf belangrijke zintuiglijke aspecten geëvalueerd in professioneel thee proeven?"
                },
                options: [
                    {
                        en: "Appearance, aroma, flavor, mouthfeel, and aftertaste",
                        es: "Apariencia, aroma, sabor, sensación en boca y regusto",
                        de: "Aussehen, Aroma, Geschmack, Mundgefühl und Nachgeschmack",
                        nl: "Uiterlijk, aroma, smaak, mondgevoel en nasmaak"
                    },
                    {
                        en: "Color, temperature, strength, sweetness, and bitterness",
                        es: "Color, temperatura, fuerza, dulzura y amargura",
                        de: "Farbe, Temperatur, Stärke, Süße und Bitterkeit",
                        nl: "Kleur, temperatuur, sterkte, zoetheid en bitterheid"
                    },
                    {
                        en: "Origin, processing, age, quality, and price",
                        es: "Origen, procesamiento, edad, calidad y precio",
                        de: "Herkunft, Verarbeitung, Alter, Qualität und Preis",
                        nl: "Oorsprong, verwerking, leeftijd, kwaliteit en prijs"
                    },
                    {
                        en: "Leaf size, brewing time, water temperature, serving method, and packaging",
                        es: "Tamaño de hoja, tiempo de preparación, temperatura del agua, método de servir y empaque",
                        de: "Blattgröße, Brühzeit, Wassertemperatur, Serviermethode und Verpackung",
                        nl: "Bladgrootte, zettijd, watertemperatuur, serveer methode en verpakking"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Professional tea evaluation systematically assesses appearance (color, clarity), aroma (fragrance intensity), flavor (taste complexity), mouthfeel (body, astringency), and aftertaste (lingering finish).",
                    es: "La evaluación profesional del té evalúa sistemáticamente la apariencia (color, claridad), aroma (intensidad de fragancia), sabor (complejidad del gusto), sensación en boca (cuerpo, astringencia) y regusto (final persistente).",
                    de: "Professionelle Tee-Bewertung bewertet systematisch Aussehen (Farbe, Klarheit), Aroma (Duftintensität), Geschmack (Geschmackskomplexität), Mundgefühl (Körper, Adstringenz) und Nachgeschmack (anhaltender Abgang).",
                    nl: "Professionele thee evaluatie beoordeelt systematisch uiterlijk (kleur, helderheid), aroma (geur intensiteit), smaak (smaakcomplexiteit), mondgevoel (body, samentrekkendheid) en nasmaak (aanhoudende afsluiting)."
                }
            },
            {
                question: {
                    en: "What does 'astringency' specifically indicate in tea evaluation?",
                    es: "¿Qué indica específicamente la 'astringencia' en la evaluación del té?",
                    de: "Was zeigt 'Adstringenz' spezifisch bei der Tee-Bewertung an?",
                    nl: "Wat geeft 'samentrekkendheid' specifiek aan in thee evaluatie?"
                },
                options: [
                    {
                        en: "Tannin-induced dry, puckering sensation that indicates tea strength and quality",
                        es: "Sensación seca y frunciente inducida por taninos que indica fuerza y calidad del té",
                        de: "Tannin-induzierte trockene, zusammenziehende Sensation, die Tee-Stärke und -Qualität anzeigt",
                        nl: "Tannine-geïnduceerde droge, samentrekkende sensatie die thee sterkte en kwaliteit aangeeft"
                    },
                    {
                        en: "Bitter taste from over-steeping the tea",
                        es: "Sabor amargo por remojar demasiado el té",
                        de: "Bitterer Geschmack vom Überziehen des Tees",
                        nl: "Bittere smaak van té lang trekken van de thee"
                    },
                    {
                        en: "Sweet aftertaste that develops over time",
                        es: "Regusto dulce que se desarrolla con el tiempo",
                        de: "Süßer Nachgeschmack, der sich mit der Zeit entwickelt",
                        nl: "Zoete nasmaak die zich in de tijd ontwikkelt"
                    },
                    {
                        en: "Metallic flavor from poor water quality",
                        es: "Sabor metálico de mala calidad del agua",
                        de: "Metallischer Geschmack von schlechter Wasserqualität",
                        nl: "Metalige smaak van slechte waterkwaliteit"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Astringency is the dry, mouth-puckering sensation caused by tannins binding to proteins in saliva, indicating the tea's body and strength - desirable in moderation for balanced flavor.",
                    es: "La astringencia es la sensación seca y frunciente en la boca causada por taninos que se unen a proteínas en la saliva, indicando el cuerpo y fuerza del té - deseable con moderación para sabor equilibrado.",
                    de: "Adstringenz ist die trockene, mundpuckernde Sensation, die durch Tannine verursacht wird, die sich an Proteine im Speichel binden und Körper und Stärke des Tees anzeigen - in Maßen wünschenswert für ausgewogenen Geschmack.",
                    nl: "Samentrekkendheid is de droge, mond-samentrekkende sensatie veroorzaakt door tannines die binden aan proteïnes in speeksel, de body en sterkte van de thee aangevend - wenselijk in matiging voor gebalanceerde smaak."
                }
            },
            {
                question: {
                    en: "What is the optimal water temperature range for evaluating different tea types in cupping?",
                    es: "¿Cuál es el rango óptimo de temperatura del agua para evaluar diferentes tipos de té en catado?",
                    de: "Was ist der optimale Wassertemperaturbereich für die Bewertung verschiedener Teearten beim Cupping?",
                    nl: "Wat is het optimale watertemperatuur bereik voor het evalueren van verschillende thee types in cupping?"
                },
                options: [
                    {
                        en: "Varies by tea type: 70-80°C for green/white, 85-95°C for oolong, 95-100°C for black/pu-erh",
                        es: "Varía por tipo de té: 70-80°C para verde/blanco, 85-95°C para oolong, 95-100°C para negro/pu-erh",
                        de: "Variiert nach Teetyp: 70-80°C für grünen/weißen, 85-95°C für Oolong, 95-100°C für schwarzen/Pu-erh",
                        nl: "Varieert per thee type: 70-80°C voor groen/wit, 85-95°C voor oolong, 95-100°C voor zwart/pu-erh"
                    },
                    {
                        en: "Always 100°C boiling water for consistency",
                        es: "Siempre agua hirviendo a 100°C para consistencia",
                        de: "Immer 100°C kochendes Wasser für Konsistenz",
                        nl: "Altijd 100°C kokend water voor consistentie"
                    },
                    {
                        en: "Room temperature water for all evaluations",
                        es: "Agua a temperatura ambiente para todas las evaluaciones",
                        de: "Raumtemperatur-Wasser für alle Bewertungen",
                        nl: "Kamertemperatuur water voor alle evaluaties"
                    },
                    {
                        en: "Fixed 85°C for all tea types uniformly",
                        es: "85°C fijo para todos los tipos de té uniformemente",
                        de: "Feste 85°C für alle Teetypen einheitlich",
                        nl: "Vaste 85°C voor alle thee types uniform"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Different teas require specific temperatures: delicate green/white teas need cooler water (70-80°C) to avoid bitterness, while robust black teas need near-boiling (95-100°C) for full extraction.",
                    es: "Diferentes tés requieren temperaturas específicas: tés verdes/blancos delicados necesitan agua más fría (70-80°C) para evitar amargura, mientras que tés negros robustos necesitan casi hirviendo (95-100°C) para extracción completa.",
                    de: "Verschiedene Tees erfordern spezifische Temperaturen: delikate grüne/weiße Tees brauchen kühleres Wasser (70-80°C) um Bitterkeit zu vermeiden, während robuste schwarze Tees fast kochendes (95-100°C) für vollständige Extraktion benötigen.",
                    nl: "Verschillende theeën vereisen specifieke temperaturen: delicate groene/witte theeën hebben koeler water (70-80°C) nodig om bitterheid te vermijden, terwijl robuuste zwarte theeën bijna kokend (95-100°C) nodig hebben voor volledige extractie."
                }
            },
            {
                question: {
                    en: "What does 'brightness' indicate when evaluating tea liquor?",
                    es: "¿Qué indica el 'brillo' al evaluar el licor de té?",
                    de: "Was zeigt 'Helligkeit' bei der Bewertung von Tee-Liquor an?",
                    nl: "Wat geeft 'helderheid' aan bij het evalueren van thee liquor?"
                },
                options: [
                    {
                        en: "Clear, sparkling appearance indicating freshness and proper processing",
                        es: "Apariencia clara y brillante indicando frescura y procesamiento adecuado",
                        de: "Klares, funkelndes Aussehen, das Frische und ordnungsgemäße Verarbeitung anzeigt",
                        nl: "Heldere, sprankelende verschijning die versheid en juiste verwerking aangeeft"
                    },
                    {
                        en: "High caffeine content in the tea",
                        es: "Alto contenido de cafeína en el té",
                        de: "Hoher Koffeingehalt im Tee",
                        nl: "Hoog cafeïne gehalte in de thee"
                    },
                    {
                        en: "Strong flavor intensity regardless of clarity",
                        es: "Intensidad de sabor fuerte independientemente de la claridad",
                        de: "Starke Geschmacksintensität unabhängig von der Klarheit",
                        nl: "Sterke smaak intensiteit ongeacht helderheid"
                    },
                    {
                        en: "Light color indicating weak brewing",
                        es: "Color claro indicando preparación débil",
                        de: "Helle Farbe, die schwaches Brühen anzeigt",
                        nl: "Lichte kleur die zwak zetten aangeeft"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Brightness refers to the tea's clear, lustrous appearance without cloudiness or sediment, indicating fresh, high-quality tea that was properly processed and stored.",
                    es: "El brillo se refiere a la apariencia clara y lustrosa del té sin turbiedad o sedimento, indicando té fresco y de alta calidad que fue procesado y almacenado adecuadamente.",
                    de: "Helligkeit bezieht sich auf das klare, glänzende Aussehen des Tees ohne Trübung oder Sediment und zeigt frischen, hochwertigen Tee an, der ordnungsgemäß verarbeitet und gelagert wurde.",
                    nl: "Helderheid verwijst naar de heldere, glanzende verschijning van de thee zonder troebeling of bezinksel, wat verse, hoogwaardige thee aangeeft die goed verwerkt en opgeslagen werd."
                }
            },
            {
                question: {
                    en: "What is the purpose of the standardized 'Orange Pekoe' grading system?",
                    es: "¿Cuál es el propósito del sistema de clasificación estandarizado 'Orange Pekoe'?",
                    de: "Was ist der Zweck des standardisierten 'Orange Pekoe'-Bewertungssystems?",
                    nl: "Wat is het doel van het gestandaardiseerde 'Orange Pekoe' beoordelingssysteem?"
                },
                options: [
                    {
                        en: "Classify black tea leaf size and grade, not flavor or quality level",
                        es: "Clasificar el tamaño y grado de hoja de té negro, no el nivel de sabor o calidad",
                        de: "Schwarztee-Blattgröße und -grad klassifizieren, nicht Geschmacks- oder Qualitätsniveau",
                        nl: "Zwarte thee bladgrootte en graad classificeren, niet smaak of kwaliteit niveau"
                    },
                    {
                        en: "Indicate tea flavor profiles from orange-flavored teas",
                        es: "Indicar perfiles de sabor de té de tés con sabor a naranja",
                        de: "Geschmacksprofile von orangen-aromatisierten Tees anzeigen",
                        nl: "Thee smaakprofielen van oranje-gearomatiseerde theeën aangeven"
                    },
                    {
                        en: "Rate tea quality from poor to excellent",
                        es: "Calificar la calidad del té de pobre a excelente",
                        de: "Teequalität von schlecht bis ausgezeichnet bewerten",
                        nl: "Thee kwaliteit beoordelen van slecht tot uitstekend"
                    },
                    {
                        en: "Determine optimal brewing temperature for each tea",
                        es: "Determinar temperatura óptima de preparación para cada té",
                        de: "Optimale Brühtemperatur für jeden Tee bestimmen",
                        nl: "Optimale zettemperatuur voor elke thee bepalen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Orange Pekoe (OP, FOP, SFTGFOP, etc.) grades refer to leaf size and style of black tea processing, not quality or flavor - even broken grades can be excellent quality.",
                    es: "Los grados Orange Pekoe (OP, FOP, SFTGFOP, etc.) se refieren al tamaño de hoja y estilo de procesamiento de té negro, no a calidad o sabor - incluso grados rotos pueden ser de excelente calidad.",
                    de: "Orange Pekoe (OP, FOP, SFTGFOP, etc.) Grade beziehen sich auf Blattgröße und Stil der Schwarztee-Verarbeitung, nicht auf Qualität oder Geschmack - auch gebrochene Grade können ausgezeichnete Qualität haben.",
                    nl: "Orange Pekoe (OP, FOP, SFTGFOP, etc.) graden verwijzen naar bladgrootte en stijl van zwarte thee verwerking, niet kwaliteit of smaak - zelfs gebroken graden kunnen uitstekende kwaliteit hebben."
                }
            },
            {
                question: {
                    en: "How do professional tasters evaluate tea 'body' or mouthfeel?",
                    es: "¿Cómo evalúan los catadores profesionales el 'cuerpo' o sensación en boca del té?",
                    de: "Wie bewerten professionelle Verkoster Tee-'Körper' oder Mundgefühl?",
                    nl: "Hoe evalueren professionele proevers thee 'body' of mondgevoel?"
                },
                options: [
                    {
                        en: "Assess weight, texture, and viscosity sensations on the tongue and palate",
                        es: "Evaluar peso, textura y sensaciones de viscosidad en la lengua y paladar",
                        de: "Gewicht, Textur und Viskositäts-Sensationen auf Zunge und Gaumen bewerten",
                        nl: "Gewicht, textuur en viscositeit sensaties op de tong en het gehemelte beoordelen"
                    },
                    {
                        en: "Measure the physical temperature of the brewed tea",
                        es: "Medir la temperatura física del té preparado",
                        de: "Physische Temperatur des gebrühten Tees messen",
                        nl: "De fysieke temperatuur van de gebrouwen thee meten"
                    },
                    {
                        en: "Count the number of flavor compounds present",
                        es: "Contar el número de compuestos de sabor presentes",
                        de: "Anzahl der vorhandenen Geschmacksverbindungen zählen",
                        nl: "Het aantal aanwezige smaakverbindingen tellen"
                    },
                    {
                        en: "Test the tea's ability to pair with food",
                        es: "Probar la capacidad del té para maridar con comida",
                        de: "Fähigkeit des Tees zur Speisenkombination testen",
                        nl: "De thee's vermogen testen om te combineren met voedsel"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Body refers to the tactile weight and fullness of tea in the mouth - from light and thin to full-bodied and robust, determined by dissolved solids and astringent compounds.",
                    es: "El cuerpo se refiere al peso táctil y plenitud del té en la boca - de ligero y delgado a con cuerpo completo y robusto, determinado por sólidos disueltos y compuestos astringentes.",
                    de: "Körper bezieht sich auf das taktile Gewicht und die Fülle des Tees im Mund - von leicht und dünn bis vollmundig und robust, bestimmt durch gelöste Feststoffe und adstringierende Verbindungen.",
                    nl: "Body verwijst naar het tactiele gewicht en volheid van thee in de mond - van licht en dun tot vol en robuust, bepaald door opgeloste vaste stoffen en samentrekkende verbindingen."
                }
            },
            {
                question: {
                    en: "What is the significance of evaluating tea's 'finish' or aftertaste?",
                    es: "¿Cuál es la significancia de evaluar el 'final' o regusto del té?",
                    de: "Was ist die Bedeutung der Bewertung des Tee-'Abgangs' oder Nachgeschmacks?",
                    nl: "Wat is de betekenis van het evalueren van thee's 'finish' of nasmaak?"
                },
                options: [
                    {
                        en: "Reveals tea quality and complexity through lingering flavor development",
                        es: "Revela calidad y complejidad del té a través del desarrollo persistente del sabor",
                        de: "Offenbart Teequalität und -komplexität durch anhaltende Geschmacksentwicklung",
                        nl: "Onthult thee kwaliteit en complexiteit door aanhoudende smaak ontwikkeling"
                    },
                    {
                        en: "Indicates when the tea has finished brewing completely",
                        es: "Indica cuándo el té ha terminado de prepararse completamente",
                        de: "Zeigt an, wann der Tee vollständig gebrüht ist",
                        nl: "Geeft aan wanneer de thee volledig is gebrouwen"
                    },
                    {
                        en: "Determines the optimal serving temperature for guests",
                        es: "Determina la temperatura óptima de servir para los huéspedes",
                        de: "Bestimmt die optimale Serviertemperatur für Gäste",
                        nl: "Bepaalt de optimale serveertemperatuur voor gasten"
                    },
                    {
                        en: "Shows how much caffeine remains in the tea",
                        es: "Muestra cuánta cafeína permanece en el té",
                        de: "Zeigt, wie viel Koffein im Tee verbleibt",
                        nl: "Toont hoeveel cafeïne er in de thee blijft"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "A tea's finish reveals its true quality - premium teas have long, evolving aftertastes with sweet, floral, or mineral notes that develop and linger pleasantly, while poor teas fade quickly.",
                    es: "El final de un té revela su verdadera calidad - los tés premium tienen regustos largos y evolutivos con notas dulces, florales o minerales que se desarrollan y persisten agradablemente, mientras que los tés pobres se desvanecen rápidamente.",
                    de: "Der Abgang eines Tees offenbart seine wahre Qualität - Premium-Tees haben lange, sich entwickelnde Nachgeschmäcke mit süßen, floralen oder mineralischen Noten, die sich entwickeln und angenehm verweilen, während schlechte Tees schnell verblassen.",
                    nl: "Een thee's finish onthult zijn ware kwaliteit - premium theeën hebben lange, evoluerende nasmaken met zoete, florale of minerale noten die zich ontwikkelen en aangenaam blijven hangen, terwijl slechte theeën snel vervagen."
                }
            },
            {
                question: {
                    en: "What role does water quality play in professional tea evaluation?",
                    es: "¿Qué papel juega la calidad del agua en la evaluación profesional del té?",
                    de: "Welche Rolle spielt Wasserqualität bei der professionellen Tee-Bewertung?",
                    nl: "Welke rol speelt waterkwaliteit in professionele thee evaluatie?"
                },
                options: [
                    {
                        en: "Critical factor - mineral content and pH affect extraction and must be standardized",
                        es: "Factor crítico - el contenido mineral y pH afectan la extracción y deben estar estandarizados",
                        de: "Kritischer Faktor - Mineralgehalt und pH-Wert beeinflussen Extraktion und müssen standardisiert werden",
                        nl: "Kritieke factor - mineraal gehalte en pH beïnvloeden extractie en moeten gestandaardiseerd zijn"
                    },
                    {
                        en: "Irrelevant as long as water is clean and drinkable",
                        es: "Irrelevante mientras el agua sea limpia y potable",
                        de: "Irrelevant, solange Wasser sauber und trinkbar ist",
                        nl: "Irrelevant zolang water schoon en drinkbaar is"
                    },
                    {
                        en: "Only temperature matters, not chemical composition",
                        es: "Solo la temperatura importa, no la composición química",
                        de: "Nur Temperatur ist wichtig, nicht chemische Zusammensetzung",
                        nl: "Alleen temperatuur is belangrijk, niet chemische samenstelling"
                    },
                    {
                        en: "Distilled water is always preferred for consistency",
                        es: "Agua destilada siempre es preferida para consistencia",
                        de: "Destilliertes Wasser wird immer für Konsistenz bevorzugt",
                        nl: "Gedestilleerd water heeft altijd de voorkeur voor consistentie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Water quality is crucial - ideal water has 150-300 ppm total dissolved solids with balanced minerals. Too soft water under-extracts, while hard water creates harsh, bitter flavors and must be standardized for fair evaluation.",
                    es: "La calidad del agua es crucial - el agua ideal tiene 150-300 ppm de sólidos totales disueltos con minerales equilibrados. El agua muy suave sub-extrae, mientras que el agua dura crea sabores duros y amargos y debe estar estandarizada para evaluación justa.",
                    de: "Wasserqualität ist entscheidend - ideales Wasser hat 150-300 ppm gelöste Feststoffe mit ausgewogenen Mineralien. Zu weiches Wasser extrahiert zu wenig, während hartes Wasser harte, bittere Aromen erzeugt und für faire Bewertung standardisiert werden muss.",
                    nl: "Waterkwaliteit is cruciaal - ideaal water heeft 150-300 ppm totale opgeloste vaste stoffen met gebalanceerde mineralen. Te zacht water extraheert onvoldoende, terwijl hard water harde, bittere smaken creëert en gestandaardiseerd moet zijn voor eerlijke evaluatie."
                }
            },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
