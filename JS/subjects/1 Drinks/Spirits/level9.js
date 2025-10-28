// Quiz - Level 9: Drinken - Sterke drank (Master Distillation & Alchemy)
(function() {
    "use strict";

    const level9 = {
        name: {
            en: "Master Distillation & Alchemy",
            es: "Maestría en Destilación y Alquimia",
            de: "Meister-Destillation & Alchemie",
            nl: "Meester Distillatie & Alchemie"
        },
        questions: [
            {
                question: {
                    en: "What is the precise science behind the 'cut points' that separate heads, hearts, and tails in artisanal distillation?",
                    es: "¿Cuál es la ciencia precisa detrás de los 'puntos de corte' que separan cabezas, corazones y colas en la destilación artesanal?",
                    de: "Was ist die präzise Wissenschaft hinter den 'Schnittpunkten', die Vorlauf, Herzstück und Nachlauf bei der handwerklichen Destillation trennen?",
                    nl: "Wat is de precieze wetenschap achter de 'cut points' die heads, hearts en tails scheiden in artisanale distillatie?"
                },
                options: [
                    {
                        en: "Vapor temperature and specific gravity measurements to identify compound volatility transitions",
                        es: "Mediciones de temperatura de vapor y gravedad específica para identificar transiciones de volatilidad de compuestos",
                        de: "Dampftemperatur- und spezifische Gewichtsmessungen zur Identifizierung von Verbindungsvolatilitätsübergängen",
                        nl: "Damptemperatuur en soortelijk gewicht metingen om compound volatiliteit overgangen te identificeren"
                    },
                    {
                        en: "Visual inspection of distillate clarity and color changes",
                        es: "Inspección visual de la claridad y cambios de color del destilado",
                        de: "Visuelle Inspektion der Destillat-Klarheit und Farbveränderungen",
                        nl: "Visuele inspectie van destillaat helderheid en kleurveranderingen"
                    },
                    {
                        en: "Timing based on traditional family recipes",
                        es: "Tiempo basado en recetas familiares tradicionales",
                        de: "Timing basierend auf traditionellen Familienrezepten",
                        nl: "Timing gebaseerd op traditionele familerecepten"
                    },
                    {
                        en: "Alcohol percentage measurements at regular intervals",
                        es: "Mediciones de porcentaje de alcohol a intervalos regulares",
                        de: "Alkoholprozentmessungen in regelmäßigen Abständen",
                        nl: "Alcoholpercentage metingen op regelmatige intervallen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Master distillers use precise vapor temperature monitoring and specific gravity to identify when different congener compounds volatilize, allowing exact separation of desirable from undesirable flavors.",
                    es: "Los maestros destiladores usan monitoreo preciso de temperatura de vapor y gravedad específica para identificar cuándo diferentes compuestos congéneres se volatilizan, permitiendo separación exacta de sabores deseables de indeseables.",
                    de: "Meisterdestillateure verwenden präzise Dampftemperaturüberwachung und spezifisches Gewicht, um zu identifizieren, wann verschiedene Begleitstoff-Verbindungen volatilisieren, wodurch eine exakte Trennung erwünschter von unerwünschten Aromen ermöglicht wird.",
                    nl: "Meester distilleerders gebruiken precieze damptemperatuur monitoring en soortelijk gewicht om te identificeren wanneer verschillende congener verbindingen vervluchtigen, wat exacte scheiding van gewenste van ongewenste smaken mogelijk maakt."
                }
            },
            {
                question: {
                    en: "Which molecular gastronomy technique is being applied to create 'impossible' spirit flavors in modern premium distilleries?",
                    es: "¿Qué técnica de gastronomía molecular se está aplicando para crear sabores 'imposibles' de licores en destilerías premium modernas?",
                    de: "Welche Molekulargastronomie-Technik wird angewendet, um 'unmögliche' Spirituosen-Aromen in modernen Premium-Brennereien zu schaffen?",
                    nl: "Welke moleculaire gastronomie techniek wordt toegepast om 'onmogelijke' sterke drank smaken te creëren in moderne premium distilleerderijen?"
                },
                options: [
                    {
                        en: "Encapsulation of volatile compounds using alginate spherification",
                        es: "Encapsulación de compuestos volátiles usando esferificación de alginato",
                        de: "Einkapselung flüchtiger Verbindungen mittels Alginat-Sphärifizierung",
                        nl: "Inkapseling van vluchtige verbindingen met alginaat spherification"
                    },
                    {
                        en: "Cryogenic distillation using liquid nitrogen",
                        es: "Destilación criogénica usando nitrógeno líquido",
                        de: "Kryogene Destillation mit flüssigem Stickstoff",
                        nl: "Cryogene distillatie met vloeibare stikstof"
                    },
                    {
                        en: "Ultrasonic frequency treatment of botanicals",
                        es: "Tratamiento de frecuencia ultrasónica de botánicos",
                        de: "Ultraschallfrequenz-Behandlung von Botanicals",
                        nl: "Ultrasone frequentie behandeling van botanicals"
                    },
                    {
                        en: "Plasma field manipulation during distillation",
                        es: "Manipulación de campo de plasma durante la destilación",
                        de: "Plasmafeld-Manipulation während der Destillation",
                        nl: "Plasmaveld manipulatie tijdens distillatie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Alginate spherification allows distillers to encapsulate volatile flavor compounds that would normally be lost during distillation, creating bursts of flavor that release at specific moments during tasting.",
                    es: "La esferificación de alginato permite a los destiladores encapsular compuestos de sabor volátiles que normalmente se perderían durante la destilación, creando explosiones de sabor que se liberan en momentos específicos durante la degustación.",
                    de: "Alginat-Sphärifizierung ermöglicht es Destillateuren, flüchtige Geschmacksverbindungen zu kapseln, die normalerweise während der Destillation verloren gehen würden, wodurch Geschmacksexplosionen entstehen, die sich in bestimmten Momenten während der Verkostung freisetzen.",
                    nl: "Alginaat spherification stelt distilleerders in staat om vluchtige smaakverbindingen in te kapselen die normaal gesproken verloren zouden gaan tijdens distillatie, wat smaakexplosies creëert die vrijkomen op specifieke momenten tijdens het proeven."
                }
            },
            {
                question: {
                    en: "What is the quantum mechanical principle behind 'structured water' aging that some premium distilleries claim enhances spirit maturation?",
                    es: "¿Cuál es el principio mecánico cuántico detrás del envejecimiento con 'agua estructurada' que algunas destilerías premium afirman mejora la maduración del licor?",
                    de: "Was ist das quantenmechanische Prinzip hinter der 'strukturierten Wasser'-Alterung, von der einige Premium-Brennereien behaupten, sie verbessere die Spirituosen-Reifung?",
                    nl: "Wat is het kwantummechanische principe achter 'gestructureerd water' rijping dat sommige premium distilleerderijen beweren de sterke drank rijping verbetert?"
                },
                options: [
                    {
                        en: "Hydrogen bond restructuring creating hexagonal water clusters that penetrate wood differently",
                        es: "Reestructuración de enlaces de hidrógeno creando clusters de agua hexagonales que penetran la madera diferentemente",
                        de: "Wasserstoffbindungs-Umstrukturierung, die hexagonale Wassercluster schafft, die Holz anders durchdringen",
                        nl: "Waterstofbinding herstructurering die hexagonale waterclusters creëert die hout anders penetreren"
                    },
                    {
                        en: "Electromagnetic field alignment of water molecules",
                        es: "Alineación electromagnética de moléculas de agua",
                        de: "Elektromagnetische Feldausrichtung von Wassermolekülen",
                        nl: "Elektromagnetische veld uitlijning van watermoleculen"
                    },
                    {
                        en: "Vibrational frequency tuning to wood resonance",
                        es: "Sintonización de frecuencia vibracional a la resonancia de la madera",
                        de: "Schwingungsfrequenz-Abstimmung auf Holzresonanz",
                        nl: "Trillings frequentie afstemming op hout resonantie"
                    },
                    {
                        en: "Crystalline memory storage in water lattices",
                        es: "Almacenamiento de memoria cristalina en redes de agua",
                        de: "Kristalline Gedächtnisspeicherung in Wassergittern",
                        nl: "Kristallijne geheugen opslag in water roosters"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Structured water proponents claim that reorganizing hydrogen bonds into hexagonal clusters creates water that interacts differently with wood tannins and alcohol molecules, though scientific consensus on its efficacy remains debated.",
                    es: "Los defensores del agua estructurada afirman que reorganizar los enlaces de hidrógeno en clusters hexagonales crea agua que interactúa diferentemente con los taninos de la madera y las moléculas de alcohol, aunque el consenso científico sobre su eficacia sigue siendo debatido.",
                    de: "Befürworter strukturierten Wassers behaupten, dass die Reorganisation von Wasserstoffbindungen in hexagonale Cluster Wasser schafft, das anders mit Holztanninen und Alkoholmolekülen interagiert, obwohl der wissenschaftliche Konsens über seine Wirksamkeit umstritten bleibt.",
                    nl: "Voorstanders van gestructureerd water beweren dat het reorganiseren van waterstofbindingen in hexagonale clusters water creëert dat anders interageert met houttannines en alcoholmoleculen, hoewel wetenschappelijke consensus over de effectiviteit nog steeds wordt betwist."
                }
            },
            {
                question: {
                    en: "Which advanced analytical technique allows master blenders to identify and replicate the exact molecular composition of legendary vintage spirits?",
                    es: "¿Qué técnica analítica avanzada permite a los maestros mezcladores identificar y replicar la composición molecular exacta de licores vintage legendarios?",
                    de: "Welche fortgeschrittene Analysetechnik ermöglicht es Meister-Blendern, die exakte molekulare Zusammensetzung legendärer Vintage-Spirituosen zu identifizieren und zu replizieren?",
                    nl: "Welke geavanceerde analytische techniek stelt meester blenders in staat om de exacte moleculaire samenstelling van legendarische vintage sterke drank te identificeren en repliceren?"
                },
                options: [
                    {
                        en: "Gas chromatography-mass spectrometry with olfactory port analysis",
                        es: "Cromatografía de gases-espectrometría de masas con análisis de puerto olfatorio",
                        de: "Gaschromatographie-Massenspektrometrie mit Riechport-Analyse",
                        nl: "Gaschromatografie-massaspectrometrie met reukpoort analyse"
                    },
                    {
                        en: "Nuclear magnetic resonance spectroscopy",
                        es: "Espectroscopia de resonancia magnética nuclear",
                        de: "Kernmagnetresonanz-Spektroskopie",
                        nl: "Kernmagnetische resonantie spectroscopie"
                    },
                    {
                        en: "X-ray crystallography of alcohol structures",
                        es: "Cristalografía de rayos X de estructuras de alcohol",
                        de: "Röntgenkristallographie von Alkoholstrukturen",
                        nl: "Röntgenkristallografie van alcoholstructuren"
                    },
                    {
                        en: "Electron microscopy of congener particles",
                        es: "Microscopía electrónica de partículas congéneres",
                        de: "Elektronenmikroskopie von Begleitstoff-Partikeln",
                        nl: "Elektronenmicroscopie van congener deeltjes"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "GC-MS with olfactory port allows simultaneous chemical analysis and human sensory evaluation, creating detailed 'fingerprints' of aroma compounds that define a spirit's character and can be used for precise replication.",
                    es: "GC-MS con puerto olfatorio permite análisis químico simultáneo y evaluación sensorial humana, creando 'huellas dactilares' detalladas de compuestos aromáticos que definen el carácter de un licor y pueden usarse para replicación precisa.",
                    de: "GC-MS mit Riechport ermöglicht gleichzeitige chemische Analyse und menschliche Sinnesauswertung, wodurch detaillierte 'Fingerabdrücke' von Aromaverbindungen entstehen, die den Charakter einer Spirituose definieren und für präzise Replikation verwendet werden können.",
                    nl: "GC-MS met reukpoort maakt gelijktijdige chemische analyse en menselijke sensorische evaluatie mogelijk, wat gedetailleerde 'vingerafdrukken' creëert van aromaverbindingen die het karakter van een sterke drank definiëren en gebruikt kunnen worden voor precieze replicatie."
                }
            },
            {
                question: {
                    en: "What is the alchemical process of 'transmutation aging' that some experimental distilleries use to artificially age spirits in days rather than years?",
                    es: "¿Cuál es el proceso alquímico de 'envejecimiento por transmutación' que algunas destilerías experimentales usan para envejecer artificialmente licores en días en lugar de años?",
                    de: "Was ist der alchemistische Prozess der 'Transmutations-Alterung', den einige experimentelle Brennereien verwenden, um Spirituosen in Tagen statt Jahren künstlich zu altern?",
                    nl: "Wat is het alchemistische proces van 'transmutatie rijping' dat sommige experimentele distilleerderijen gebruiken om sterke drank kunstmatig te laten rijpen in dagen in plaats van jaren?"
                },
                options: [
                    {
                        en: "Ultrasonic cavitation combined with controlled pressure oscillation and wood particle suspension",
                        es: "Cavitación ultrasónica combinada con oscilación de presión controlada y suspensión de partículas de madera",
                        de: "Ultraschall-Kavitation kombiniert mit kontrollierter Druckoszillation und Holzpartikel-Suspension",
                        nl: "Ultrasone cavitatie gecombineerd met gecontroleerde druk oscillatie en houtdeeltjes suspensie"
                    },
                    {
                        en: "Microwave radiation treatment at specific frequencies",
                        es: "Tratamiento de radiación de microondas a frecuencias específicas",
                        de: "Mikrowellen-Strahlungsbehandlung bei spezifischen Frequenzen",
                        nl: "Magnetron straling behandeling op specifieke frequenties"
                    },
                    {
                        en: "Chemical catalysts that accelerate esterification reactions",
                        es: "Catalizadores químicos que aceleran las reacciones de esterificación",
                        de: "Chemische Katalysatoren, die Veresterungsreaktionen beschleunigen",
                        nl: "Chemische katalysatoren die esterificatie reacties versnellen"
                    },
                    {
                        en: "Temperature cycling between extreme hot and cold",
                        es: "Ciclado de temperatura entre calor y frío extremos",
                        de: "Temperaturzyklen zwischen extremer Hitze und Kälte",
                        nl: "Temperatuur cycling tussen extreem heet en koud"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Transmutation aging uses ultrasonic cavitation to create microscopic bubbles that collapse with tremendous force, accelerating extraction of wood compounds while pressure oscillation mimics years of natural barrel breathing.",
                    es: "El envejecimiento por transmutación usa cavitación ultrasónica para crear burbujas microscópicas que colapsan con fuerza tremenda, acelerando la extracción de compuestos de madera mientras la oscilación de presión imita años de respiración natural del barril.",
                    de: "Transmutations-Alterung verwendet Ultraschall-Kavitation, um mikroskopische Blasen zu erzeugen, die mit enormer Kraft kollabieren, wodurch die Extraktion von Holzverbindungen beschleunigt wird, während Druckoszillation jahrelange natürliche Fassatmung nachahmt.",
                    nl: "Transmutatie rijping gebruikt ultrasone cavitatie om microscopische belletjes te creëren die met enorme kracht inklappen, wat extractie van houtverbindingen versnelt terwijl drukoscillatie jaren van natuurlijke vat ademhaling nabootst."
                }
            },
            {
                question: {
                    en: "Which nano-technology application in distillation allows for molecular-level filtration impossible with traditional methods?",
                    es: "¿Qué aplicación de nanotecnología en destilación permite filtración a nivel molecular imposible con métodos tradicionales?",
                    de: "Welche Nanotechnologie-Anwendung in der Destillation ermöglicht molekulare Filtration, die mit traditionellen Methoden unmöglich ist?",
                    nl: "Welke nanotechnologie toepassing in distillatie maakt moleculair niveau filtratie mogelijk die onmogelijk is met traditionele methoden?"
                },
                options: [
                    {
                        en: "Graphene oxide membranes with selective molecular permeability",
                        es: "Membranas de óxido de grafeno con permeabilidad molecular selectiva",
                        de: "Graphenoxid-Membranen mit selektiver molekularer Permeabilität",
                        nl: "Grafeen oxide membranen met selectieve moleculaire permeabiliteit"
                    },
                    {
                        en: "Carbon nanotube arrays for alcohol molecule sorting",
                        es: "Matrices de nanotubos de carbono para clasificación de moléculas de alcohol",
                        de: "Kohlenstoff-Nanoröhrchen-Arrays zur Alkoholmolekül-Sortierung",
                        nl: "Koolstof nanotube arrays voor alcohol molecuul sortering"
                    },
                    {
                        en: "Quantum dot filters that respond to molecular size",
                        es: "Filtros de puntos cuánticos que responden al tamaño molecular",
                        de: "Quantenpunkt-Filter, die auf Molekülgröße reagieren",
                        nl: "Kwantumpunt filters die reageren op moleculaire grootte"
                    },
                    {
                        en: "Nano-magnetic particle separation systems",
                        es: "Sistemas de separación de partículas nano-magnéticas",
                        de: "Nano-magnetische Partikeltrennsysteme",
                        nl: "Nano-magnetische deeltjes scheidingssystemen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Graphene oxide membranes can be engineered with precise molecular-sized pores that allow passage of desired compounds while blocking others, enabling separation at the individual molecule level.",
                    es: "Las membranas de óxido de grafeno pueden ser diseñadas con poros precisos del tamaño molecular que permiten el paso de compuestos deseados mientras bloquean otros, permitiendo separación a nivel de molécula individual.",
                    de: "Graphenoxid-Membranen können mit präzisen molekular-großen Poren entwickelt werden, die den Durchgang erwünschter Verbindungen ermöglichen, während andere blockiert werden, wodurch Trennung auf einzelner Molekülebene ermöglicht wird.",
                    nl: "Grafeen oxide membranen kunnen worden ontworpen met precieze molecuul-grote poriën die doorgang van gewenste verbindingen toestaan terwijl anderen geblokkeerd worden, wat scheiding op individueel molecuul niveau mogelijk maakt."
                }
            },
            {
                question: {
                    en: "What is the theory behind 'temporal distillation' that some avant-garde distillers claim can capture the 'memory' of ingredients?",
                    es: "¿Cuál es la teoría detrás de la 'destilación temporal' que algunos destiladores de vanguardia afirman puede capturar la 'memoria' de los ingredientes?",
                    de: "Was ist die Theorie hinter der 'zeitlichen Destillation', von der einige Avantgarde-Destillateure behaupten, sie könne das 'Gedächtnis' der Zutaten einfangen?",
                    nl: "Wat is de theorie achter 'temporele distillatie' waarvan sommige avant-garde distilleerders beweren dat het de 'herinnering' van ingrediënten kan vastleggen?"
                },
                options: [
                    {
                        en: "Quantum entanglement of molecular structures preserving original environmental information",
                        es: "Entrelazamiento cuántico de estructuras moleculares preservando información ambiental original",
                        de: "Quantenverschränkung molekularer Strukturen, die ursprüngliche Umweltinformationen bewahrt",
                        nl: "Kwantumverstrengeling van moleculaire structuren die originele omgevingsinformatie bewaart"
                    },
                    {
                        en: "Electromagnetic field imprinting during growth phase retention",
                        es: "Impresión de campo electromagnético durante la retención de fase de crecimiento",
                        de: "Elektromagnetische Feldprägung während der Wachstumsphasen-Retention",
                        nl: "Elektromagnetische veld imprinting tijdens groei fase retentie"
                    },
                    {
                        en: "Crystalline water matrix encoding of botanical origins",
                        es: "Codificación de matriz de agua cristalina de orígenes botánicos",
                        de: "Kristalline Wassermatrix-Kodierung botanischer Ursprünge",
                        nl: "Kristallijne water matrix codering van botanische oorsprong"
                    },
                    {
                        en: "Vibrational frequency preservation through distillation process",
                        es: "Preservación de frecuencia vibracional a través del proceso de destilación",
                        de: "Schwingungsfrequenz-Erhaltung durch den Destillationsprozess",
                        nl: "Trillings frequentie bewaring door het distillatie proces"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Temporal distillation theory suggests that molecules retain quantum-level information about their original environment through entangled states, though this remains highly experimental and scientifically unproven.",
                    es: "La teoría de destilación temporal sugiere que las moléculas retienen información a nivel cuántico sobre su ambiente original a través de estados entrelazados, aunque esto permanece altamente experimental y científicamente no probado.",
                    de: "Die zeitliche Destillationstheorie legt nahe, dass Moleküle Quantenebene-Informationen über ihre ursprüngliche Umgebung durch verschränkte Zustände beibehalten, obwohl dies hochexperimentell und wissenschaftlich unbewiesen bleibt.",
                    nl: "Temporele distillatie theorie suggereert dat moleculen kwantumniveau informatie over hun originele omgeving behouden door verstrengelde toestanden, hoewel dit zeer experimenteel en wetenschappelijk onbewezen blijft."
                }
            },
            {
                question: {
                    en: "Which biodynamic principle is applied in 'cosmic distillation' to align production with planetary influences?",
                    es: "¿Qué principio biodinámico se aplica en la 'destilación cósmica' para alinear la producción con influencias planetarias?",
                    de: "Welches biodynamische Prinzip wird in der 'kosmischen Destillation' angewendet, um die Produktion mit planetarischen Einflüssen auszurichten?",
                    nl: "Welk biodynamisch principe wordt toegepast in 'kosmische distillatie' om productie af te stemmen op planetaire invloeden?"
                },
                options: [
                    {
                        en: "Lunar calendar timing coordinated with gravitational tidal effects on liquid dynamics",
                        es: "Tiempo de calendario lunar coordinado con efectos gravitacionales de marea en la dinámica de líquidos",
                        de: "Mondkalender-Timing koordiniert mit gravitationellen Gezeiteneffekten auf Flüssigkeitsdynamik",
                        nl: "Maan kalender timing gecoördineerd met gravitationele getij effecten op vloeistof dynamiek"
                    },
                    {
                        en: "Solar flare activity monitoring for electromagnetic field optimization",
                        es: "Monitoreo de actividad de llamaradas solares para optimización de campo electromagnético",
                        de: "Sonneneruptions-Aktivitätsüberwachung zur elektromagnetischen Feldoptimierung",
                        nl: "Zonnevlam activiteit monitoring voor elektromagnetische veld optimalisatie"
                    },
                    {
                        en: "Planetary alignment calculations for optimal distillation windows",
                        es: "Cálculos de alineación planetaria para ventanas óptimas de destilación",
                        de: "Planetenausrichtungs-Berechnungen für optimale Destillationsfenster",
                        nl: "Planetaire uitlijning berekeningen voor optimale distillatie vensters"
                    },
                    {
                        en: "Seasonal equinox timing for maximum botanical potency extraction",
                        es: "Tiempo de equinoccio estacional para extracción máxima de potencia botánica",
                        de: "Saisonales Tagundnachtgleiche-Timing für maximale botanische Potenzextraktion",
                        nl: "Seizoensgebonden equinox timing voor maximale botanische potentie extractie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Cosmic distillation practitioners believe lunar gravitational cycles affect molecular behavior in liquids, timing distillation with new moons for 'concentration' and full moons for 'expansion' effects.",
                    es: "Los practicantes de destilación cósmica creen que los ciclos gravitacionales lunares afectan el comportamiento molecular en líquidos, programando la destilación con lunas nuevas para efectos de 'concentración' y lunas llenas para efectos de 'expansión'.",
                    de: "Praktiker der kosmischen Destillation glauben, dass Mond-Gravitationszyklen das molekulare Verhalten in Flüssigkeiten beeinflussen, und timen die Destillation mit Neumonden für 'Konzentrations'-Effekte und Vollmonden für 'Expansions'-Effekte.",
                    nl: "Kosmische distillatie beoefenaars geloven dat maan gravitatie cycli moleculair gedrag in vloeistoffen beïnvloeden, distillatie timing met nieuwe manen voor 'concentratie' en volle manen voor 'expansie' effecten."
                }
            },
            {
                question: {
                    en: "What advanced technique allows distillers to create 'impossible flavor combinations' that shouldn't exist according to traditional chemistry?",
                    es: "¿Qué técnica avanzada permite a los destiladores crear 'combinaciones de sabores imposibles' que no deberían existir según la química tradicional?",
                    de: "Welche fortgeschrittene Technik ermöglicht es Destillateuren, 'unmögliche Geschmackskombinationen' zu schaffen, die nach traditioneller Chemie nicht existieren sollten?",
                    nl: "Welke geavanceerde techniek stelt distilleerders in staat om 'onmogelijke smaakcombinaties' te creëren die niet zouden moeten bestaan volgens traditionele chemie?"
                },
                options: [
                    {
                        en: "Stereoisomer manipulation creating mirror-image molecules with opposite sensory properties",
                        es: "Manipulación de estereoisómeros creando moléculas espejo con propiedades sensoriales opuestas",
                        de: "Stereoisomer-Manipulation, die Spiegelbild-Moleküle mit entgegengesetzten sensorischen Eigenschaften schafft",
                        nl: "Stereoisomeer manipulatie die spiegelbeeld moleculen creëert met tegengestelde sensorische eigenschappen"
                    },
                    {
                        en: "Enzyme cascade reactions producing synthetic flavor pathways",
                        es: "Reacciones en cascada de enzimas produciendo vías de sabor sintético",
                        de: "Enzym-Kaskaden-Reaktionen, die synthetische Geschmackswege produzieren",
                        nl: "Enzym cascade reacties die synthetische smaak routes produceren"
                    },
                    {
                        en: "Controlled fermentation with genetically modified yeasts",
                        es: "Fermentación controlada con levaduras genéticamente modificadas",
                        de: "Kontrollierte Fermentation mit genetisch modifizierten Hefen",
                        nl: "Gecontroleerde fermentatie met genetisch gemodificeerde gisten"
                    },
                    {
                        en: "Supercritical fluid extraction at varying pressure points",
                        es: "Extracción con fluidos supercríticos en puntos de presión variables",
                        de: "Überkritische Fluidextraktion bei variierenden Druckpunkten",
                        nl: "Superkritische vloeistof extractie bij variërende druk punten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Stereoisomer manipulation involves creating left-handed and right-handed versions of the same molecule that can taste completely different - like carvone tasting like spearmint vs caraway depending on its orientation.",
                    es: "La manipulación de estereoisómeros involucra crear versiones levógiras y dextrógiras de la misma molécula que pueden saber completamente diferentes - como carvona sabiendo a menta verde vs comino dependiendo de su orientación.",
                    de: "Stereoisomer-Manipulation beinhaltet die Erstellung links- und rechtshändiger Versionen desselben Moleküls, die völlig unterschiedlich schmecken können - wie Carvon, das je nach Orientierung nach Grüner Minze oder Kümmel schmeckt.",
                    nl: "Stereoisomeer manipulatie houdt in dat je links- en rechtshandige versies van hetzelfde molecuul creëert die compleet anders kunnen smaken - zoals carvon dat naar groene munt vs karwij smaakt afhankelijk van zijn oriëntatie."
                }
            },
            {
                question: {
                    en: "Which theoretical physics concept is being explored in 'quantum distillation' experiments at cutting-edge research facilities?",
                    es: "¿Qué concepto de física teórica se está explorando en experimentos de 'destilación cuántica' en instalaciones de investigación de vanguardia?",
                    de: "Welches theoretische Physikkonzept wird in 'Quantendestillations'-Experimenten an hochmodernen Forschungseinrichtungen erforscht?",
                    nl: "Welk theoretisch fysica concept wordt onderzocht in 'kwantum distillatie' experimenten bij baanbrekende onderzoeksfaciliteiten?"
                },
                options: [
                    {
                        en: "Quantum superposition allowing molecules to exist in multiple states simultaneously during distillation",
                        es: "Superposición cuántica permitiendo que las moléculas existan en múltiples estados simultáneamente durante la destilación",
                        de: "Quantensuperposition, die es Molekülen ermöglicht, während der Destillation gleichzeitig in mehreren Zuständen zu existieren",
                        nl: "Kwantum superpositie die moleculen toestaat om gelijktijdig in meerdere toestanden te bestaan tijdens distillatie"
                    },
                    {
                        en: "Heisenberg uncertainty principle applied to flavor compound measurement",
                        es: "Principio de incertidumbre de Heisenberg aplicado a la medición de compuestos de sabor",
                        de: "Heisenbergsche Unschärferelation angewendet auf Geschmacksverbindungs-Messung",
                        nl: "Heisenberg onzekerheid principe toegepast op smaakverbinding meting"
                    },
                    {
                        en: "Wave-particle duality affecting alcohol molecule behavior",
                        es: "Dualidad onda-partícula afectando el comportamiento de moléculas de alcohol",
                        de: "Welle-Teilchen-Dualität, die das Verhalten von Alkoholmolekülen beeinflusst",
                        nl: "Golf-deeltje dualiteit die alcohol molecuul gedrag beïnvloedt"
                    },
                    {
                        en: "Quantum tunneling through distillation apparatus barriers",
                        es: "Tunelaje cuántico a través de barreras del aparato de destilación",
                        de: "Quantentunneln durch Destillationsapparatur-Barrieren",
                        nl: "Kwantumtunneling door distillatie apparaat barrières"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum distillation experiments theoretically explore whether molecules in superposition states could exhibit enhanced reactivity or flavor properties before measurement collapses them into definite states.",
                    es: "Los experimentos de destilación cuántica exploran teóricamente si las moléculas en estados de superposición podrían exhibir reactividad mejorada o propiedades de sabor antes de que la medición las colapse en estados definidos.",
                    de: "Quantendestillations-Experimente erforschen theoretisch, ob Moleküle in Superpositionszuständen verbesserte Reaktivität oder Geschmackseigenschaften zeigen könnten, bevor Messung sie in definite Zustände kollabiert.",
                    nl: "Kwantum distillatie experimenten onderzoeken theoretisch of moleculen in superpositie toestanden verhoogde reactiviteit of smaakeigenschappen zouden kunnen vertonen voordat meting ze doet instorten in definitieve toestanden."
                }
            },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
