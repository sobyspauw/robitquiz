(function() {
    'use strict';

    const level10Data = {
        name: {
            en: "Expert Fruit Desserts",
            es: "Postres de Fruta Experto",
            de: "Experten-Fruchtdesserts",
            nl: "Expert Fruitdesserts"
        },
        questions: [
            {
                question: {
                    en: "What is the precise enzymatic browning inhibition mechanism of ascorbic acid in fresh fruit desserts?",
                    es: "¿Cuál es el mecanismo preciso de inhibición del pardeamiento enzimático del ácido ascórbico en postres de fruta fresca?",
                    de: "Was ist der präzise enzymatische Bräunungsinhibitionsmechanismus von Ascorbinsäure in frischen Fruchtdesserts?",
                    nl: "Wat is het precieze enzymatische bruiningsinhibitie mechanisme van ascorbinezuur in verse fruitdesserts?"
                },
                options: [
                    { en: "Reduces quinones back to phenols", es: "Reduce quinonas de vuelta a fenoles", de: "Reduziert Chinone zurück zu Phenolen", nl: "Reduceert quinonen terug naar fenolen" },
                    { en: "Denatures polyphenol oxidase", es: "Desnaturaliza la polifenol oxidasa", de: "Denaturiert Polyphenoloxidase", nl: "Denatureert polyfenol oxidase" },
                    { en: "Chelates copper cofactors", es: "Quela cofactores de cobre", de: "Chelatiert Kupfer-Cofaktoren", nl: "Chelateert koper cofactoren" },
                    { en: "Lowers pH below enzyme activity range", es: "Baja el pH por debajo del rango de actividad enzimática", de: "Senkt pH unter Enzymaktivitätsbereich", nl: "Verlaagt pH onder enzym activiteit bereik" }
                ],
                correct: 0,
                explanation: {
                    en: "Ascorbic acid acts as a reducing agent that converts oxidized quinones back to their reduced phenolic forms, preventing the brown pigment formation that occurs when quinones polymerize.",
                    es: "El ácido ascórbico actúa como agente reductor que convierte quinonas oxidadas de vuelta a sus formas fenólicas reducidas, previniendo la formación de pigmento marrón que ocurre cuando las quinonas polimerizan.",
                    de: "Ascorbinsäure wirkt als Reduktionsmittel, das oxidierte Chinone zurück in ihre reduzierten phenolischen Formen umwandelt und die braune Pigmentbildung verhindert, die auftritt, wenn Chinone polymerisieren.",
                    nl: "Ascorbinezuur werkt als reductiemiddel dat geoxideerde quinonen terug omzet in hun gereduceerde fenolische vormen, bruine pigment vorming voorkomend die optreedt wanneer quinonen polymeriseren."
                }
            },
            {
                question: {
                    en: "Which advanced texture analysis parameter best predicts consumer perception of fruit dessert quality?",
                    es: "¿Qué parámetro avanzado de análisis de textura predice mejor la percepción del consumidor de calidad de postre de fruta?",
                    de: "Welcher fortgeschrittene Texturanalyseparameter sagt die Verbraucherwahrnehmung der Fruchtdessert-Qualität am besten voraus?",
                    nl: "Welke geavanceerde textuur analyse parameter voorspelt het beste de consument perceptie van fruitdessert kwaliteit?"
                },
                options: [
                    { en: "Fracturability coefficient", es: "Coeficiente de fracturabilidad", de: "Frakturbilitäts-Koeffizient", nl: "Breekbaarheids coëfficiënt" },
                    { en: "Springback ratio", es: "Relación de recuperación", de: "Rückfederungsverhältnis", nl: "Terugveer verhouding" },
                    { en: "Cohesiveness index", es: "Índice de cohesividad", de: "Kohäsivitätsindex", nl: "Cohesiviteits index" },
                    { en: "Temporal dominance of sensations (TDS)", es: "Dominancia temporal de sensaciones (TDS)", de: "Zeitliche Dominanz der Empfindungen (TDS)", nl: "Temporele dominantie van sensaties (TDS)" }
                ],
                correct: 3,
                explanation: {
                    en: "Temporal dominance of sensations (TDS) tracks which textural attributes dominate perception over time during consumption, providing the most comprehensive correlation with consumer quality perception.",
                    es: "La dominancia temporal de sensaciones (TDS) rastrea qué atributos texturales dominan la percepción a lo largo del tiempo durante el consumo, proporcionando la correlación más completa con la percepción de calidad del consumidor.",
                    de: "Zeitliche Dominanz der Empfindungen (TDS) verfolgt, welche texturellen Attribute die Wahrnehmung im Laufe der Zeit während des Konsums dominieren und bietet die umfassendste Korrelation mit der Verbraucher-Qualitätswahrnehmung.",
                    nl: "Temporele dominantie van sensaties (TDS) volgt welke texturele attributen de perceptie domineren over tijd tijdens consumptie, de meest uitgebreide correlatie biedend met consument kwaliteit perceptie."
                }
            },
            {
                question: {
                    en: "What is the critical supercooling degree required for controlled ice nucleation in sorbet production?",
                    es: "¿Cuál es el grado crítico de sobreenfriamiento requerido para nucleación de hielo controlada en producción de sorbete?",
                    de: "Was ist der kritische Unterkühlungsgrad für kontrollierte Eiskeimbildung in der Sorbet-Produktion?",
                    nl: "Wat is de kritieke onderkoeling graad vereist voor gecontroleerde ijs nucleatie in sorbet productie?"
                },
                options: [
                    { en: "2-4°C below freezing point", es: "2-4°C por debajo del punto de congelación", de: "2-4°C unter Gefrierpunkt", nl: "2-4°C onder vriespunt" },
                    { en: "5-8°C below freezing point", es: "5-8°C por debajo del punto de congelación", de: "5-8°C unter Gefrierpunkt", nl: "5-8°C onder vriespunt" },
                    { en: "10-15°C below freezing point", es: "10-15°C por debajo del punto de congelación", de: "10-15°C unter Gefrierpunkt", nl: "10-15°C onder vriespunt" },
                    { en: "1°C below freezing point", es: "1°C por debajo del punto de congelación", de: "1°C unter Gefrierpunkt", nl: "1°C onder vriespunt" }
                ],
                correct: 1,
                explanation: {
                    en: "A supercooling degree of 5-8°C below the freezing point provides optimal conditions for controlled ice nucleation, creating numerous small ice crystals simultaneously for smooth sorbet texture.",
                    es: "Un grado de sobreenfriamiento de 5-8°C por debajo del punto de congelación proporciona condiciones óptimas para nucleación de hielo controlada, creando numerosos cristales de hielo pequeños simultáneamente para textura de sorbete suave.",
                    de: "Ein Unterkühlungsgrad von 5-8°C unter dem Gefrierpunkt bietet optimale Bedingungen für kontrollierte Eiskeimbildung und erzeugt gleichzeitig zahlreiche kleine Eiskristalle für glatte Sorbet-Textur.",
                    nl: "Een onderkoeling graad van 5-8°C onder het vriespunt biedt optimale condities voor gecontroleerde ijs nucleatie, talrijke kleine ijskristallen gelijktijdig creërend voor gladde sorbet textuur."
                }
            },
            {
                question: {
                    en: "Which rheological model best describes the flow behavior of high-pectin fruit coulis?",
                    es: "¿Qué modelo reológico describe mejor el comportamiento de flujo de coulis de fruta alto en pectina?",
                    de: "Welches rheologische Modell beschreibt das Fließverhalten von hochpektinhaltigem Fruchtkoulis am besten?",
                    nl: "Welk rheologisch model beschrijft het beste het stroomgedrag van hoog-pectine fruitcoulis?"
                },
                options: [
                    { en: "Newtonian fluid model", es: "Modelo de fluido newtoniano", de: "Newtonsches Fluidmodell", nl: "Newtoniaans vloeistof model" },
                    { en: "Bingham plastic model", es: "Modelo plástico de Bingham", de: "Bingham-Plastik-Modell", nl: "Bingham plastisch model" },
                    { en: "Power-law (Ostwald-de Waele) model", es: "Modelo de ley de potencia (Ostwald-de Waele)", de: "Potenzgesetz (Ostwald-de Waele) Modell", nl: "Machts-wet (Ostwald-de Waele) model" },
                    { en: "Herschel-Bulkley model", es: "Modelo de Herschel-Bulkley", de: "Herschel-Bulkley-Modell", nl: "Herschel-Bulkley model" }
                ],
                correct: 3,
                explanation: {
                    en: "The Herschel-Bulkley model combines yield stress with shear-thinning behavior, accurately describing high-pectin fruit coulis which exhibits both a yield stress and non-Newtonian flow characteristics.",
                    es: "El modelo de Herschel-Bulkley combina esfuerzo de fluencia con comportamiento de adelgazamiento por cizallamiento, describiendo con precisión el coulis de fruta alto en pectina que exhibe tanto esfuerzo de fluencia como características de flujo no newtoniano.",
                    de: "Das Herschel-Bulkley-Modell kombiniert Fließgrenze mit scherverflüssigendem Verhalten und beschreibt genau hochpektinhaltiges Fruchtkoulis, das sowohl Fließgrenze als auch nicht-Newtonsche Fließeigenschaften aufweist.",
                    nl: "Het Herschel-Bulkley model combineert vloeigrens met afschuif-verdunnend gedrag, hoog-pectine fruitcoulis nauwkeurig beschrijvend die zowel een vloeigrens als niet-Newtoniaanse stroom eigenschappen vertoont."
                }
            },
            {
                question: {
                    en: "What is the optimal homogenization pressure range for creating stable fruit emulsions without phase separation?",
                    es: "¿Cuál es el rango óptimo de presión de homogeneización para crear emulsiones de fruta estables sin separación de fases?",
                    de: "Was ist der optimale Homogenisierungsdruckbereich zur Herstellung stabiler Fruchtemulsionen ohne Phasentrennung?",
                    nl: "Wat is het optimale homogenisatie druk bereik voor het maken van stabiele fruitemulsies zonder fase scheiding?"
                },
                options: [
                    { en: "5-10 MPa", es: "5-10 MPa", de: "5-10 MPa", nl: "5-10 MPa" },
                    { en: "15-20 MPa", es: "15-20 MPa", de: "15-20 MPa", nl: "15-20 MPa" },
                    { en: "50-100 MPa", es: "50-100 MPa", de: "50-100 MPa", nl: "50-100 MPa" },
                    { en: "150-300 MPa", es: "150-300 MPa", de: "150-300 MPa", nl: "150-300 MPa" }
                ],
                correct: 2,
                explanation: {
                    en: "Homogenization pressure of 50-100 MPa creates sufficient shear force to reduce droplet size to <1 μm, providing optimal stability against coalescence and phase separation in fruit emulsions.",
                    es: "La presión de homogeneización de 50-100 MPa crea fuerza de cizallamiento suficiente para reducir el tamaño de gotita a <1 μm, proporcionando estabilidad óptima contra coalescencia y separación de fases en emulsiones de fruta.",
                    de: "Homogenisierungsdruck von 50-100 MPa erzeugt ausreichende Scherkraft, um Tröpfchengröße auf <1 μm zu reduzieren und optimale Stabilität gegen Koaleszenz und Phasentrennung in Fruchtemulsionen zu bieten.",
                    nl: "Homogenisatie druk van 50-100 MPa creëert voldoende afschuifkracht om druppel grootte te reduceren tot <1 μm, optimale stabiliteit biedend tegen coalescence en fase scheiding in fruitemulsies."
                }
            },
            {
                question: {
                    en: "Which advanced drying technique preserves the most volatile aromatic compounds in fruit dessert ingredients?",
                    es: "¿Qué técnica avanzada de secado preserva la mayor cantidad de compuestos aromáticos volátiles en ingredientes de postre de fruta?",
                    de: "Welche fortgeschrittene Trocknungstechnik erhält die meisten flüchtigen aromatischen Verbindungen in Fruchtdessert-Zutaten?",
                    nl: "Welke geavanceerde droog techniek behoudt de meeste vluchtige aromatische verbindingen in fruitdessert ingrediënten?"
                },
                options: [
                    { en: "Infrared drying at 80°C", es: "Secado infrarrojo a 80°C", de: "Infrarot-Trocknung bei 80°C", nl: "Infrarood drogen bij 80°C" },
                    { en: "Hot air convection drying at 60°C", es: "Secado por convección de aire caliente a 60°C", de: "Heißluft-Konvektionstrocknung bei 60°C", nl: "Hete lucht convectie drogen bij 60°C" },
                    { en: "Vacuum freeze-drying at -40°C", es: "Liofilización al vacío a -40°C", de: "Vakuum-Gefriertrocknung bei -40°C", nl: "Vacuüm vriesdrogen bij -40°C" },
                    { en: "Microwave vacuum drying at 50°C", es: "Secado por microondas al vacío a 50°C", de: "Mikrowellen-Vakuumtrocknung bei 50°C", nl: "Magnetron vacuüm drogen bij 50°C" }
                ],
                correct: 2,
                explanation: {
                    en: "Vacuum freeze-drying at -40°C operates below the volatilization temperature of most aromatic compounds, using sublimation rather than evaporation to preserve maximum volatile retention.",
                    es: "La liofilización al vacío a -40°C opera por debajo de la temperatura de volatilización de la mayoría de compuestos aromáticos, usando sublimación en lugar de evaporación para preservar máxima retención volátil.",
                    de: "Vakuum-Gefriertrocknung bei -40°C arbeitet unterhalb der Volatilisierungstemperatur der meisten aromatischen Verbindungen und verwendet Sublimation statt Verdampfung, um maximale Flüchtigkeitsretention zu bewahren.",
                    nl: "Vacuüm vriesdrogen bij -40°C opereert onder de volatilisatie temperatuur van de meeste aromatische verbindingen, sublimatie gebruikend in plaats van verdamping om maximale vluchtige retentie te behouden."
                }
            },
            {
                question: {
                    en: "What is the critical zeta potential value that indicates sufficient electrostatic stabilization in fruit juice colloids?",
                    es: "¿Cuál es el valor crítico de potencial zeta que indica estabilización electrostática suficiente en coloides de jugo de fruta?",
                    de: "Was ist der kritische Zeta-Potenzialwert, der ausreichende elektrostatische Stabilisierung in Fruchtsaft-Kolloiden anzeigt?",
                    nl: "Wat is de kritieke zeta potentiaal waarde die voldoende elektrostatische stabilisatie aangeeft in fruitsap colloïden?"
                },
                options: [
                    { en: "±10 mV", es: "±10 mV", de: "±10 mV", nl: "±10 mV" },
                    { en: "±20 mV", es: "±20 mV", de: "±20 mV", nl: "±20 mV" },
                    { en: "±30 mV", es: "±30 mV", de: "±30 mV", nl: "±30 mV" },
                    { en: "±50 mV", es: "±50 mV", de: "±50 mV", nl: "±50 mV" }
                ],
                correct: 2,
                explanation: {
                    en: "A zeta potential of ±30 mV or greater indicates sufficient electrostatic repulsion between particles to prevent aggregation and maintain colloidal stability in fruit juice systems.",
                    es: "Un potencial zeta de ±30 mV o mayor indica repulsión electrostática suficiente entre partículas para prevenir agregación y mantener estabilidad coloidal en sistemas de jugo de fruta.",
                    de: "Ein Zeta-Potenzial von ±30 mV oder größer zeigt ausreichende elektrostatische Abstoßung zwischen Partikeln an, um Aggregation zu verhindern und kolloidale Stabilität in Fruchtsaft-Systemen aufrechtzuerhalten.",
                    nl: "Een zeta potentiaal van ±30 mV of groter geeft voldoende elektrostatische afstoting tussen deeltjes aan om aggregatie te voorkomen en colloïdale stabiliteit te behouden in fruitsap systemen."
                }
            },
            {
                question: {
                    en: "Which enzymatic pre-treatment most effectively enhances juice yield while maintaining nutritional quality?",
                    es: "¿Qué pretratamiento enzimático mejora más eficazmente el rendimiento de jugo mientras mantiene la calidad nutricional?",
                    de: "Welche enzymatische Vorbehandlung verbessert den Saftgewinn am effektivsten bei Erhaltung der Ernährungsqualität?",
                    nl: "Welke enzymatische voorbehandeling verhoogt het meest effectief sap opbrengst terwijl voedings kwaliteit behouden blijft?"
                },
                options: [
                    { en: "Pectinase + cellulase combination", es: "Combinación de pectinasa + celulasa", de: "Pektinase + Cellulase Kombination", nl: "Pectinase + cellulase combinatie" },
                    { en: "Amylase treatment only", es: "Tratamiento solo con amilasa", de: "Nur Amylase-Behandlung", nl: "Alleen amylase behandeling" },
                    { en: "Protease application", es: "Aplicación de proteasa", de: "Protease-Anwendung", nl: "Protease toepassing" },
                    { en: "Lipase pre-treatment", es: "Pretratamiento con lipasa", de: "Lipase-Vorbehandlung", nl: "Lipase voorbehandeling" }
                ],
                correct: 0,
                explanation: {
                    en: "Combined pectinase and cellulase treatment breaks down both pectin networks and cellulose cell walls, maximizing juice extraction while preserving heat-sensitive vitamins and antioxidants through enzymatic rather than thermal processing.",
                    es: "El tratamiento combinado de pectinasa y celulasa descompone tanto redes de pectina como paredes celulares de celulosa, maximizando extracción de jugo mientras preserva vitaminas sensibles al calor y antioxidantes mediante procesamiento enzimático en lugar de térmico.",
                    de: "Kombinierte Pektinase- und Cellulase-Behandlung baut sowohl Pektinnetzwerke als auch Cellulose-Zellwände ab, maximiert Saftgewinnung bei Erhaltung hitzeempfindlicher Vitamine und Antioxidantien durch enzymatische statt thermische Verarbeitung.",
                    nl: "Gecombineerde pectinase en cellulase behandeling breekt zowel pectine netwerken als cellulose celwanden af, sap extractie maximaliseren terwijl warmte-gevoelige vitamines en antioxidanten behouden blijven door enzymatische in plaats van thermische verwerking."
                }
            },
            {
                question: {
                    en: "What is the optimal encapsulation technique for protecting sensitive fruit flavors during high-temperature processing?",
                    es: "¿Cuál es la técnica óptima de encapsulación para proteger sabores de fruta sensibles durante procesamiento a alta temperatura?",
                    de: "Was ist die optimale Verkapselungstechnik zum Schutz empfindlicher Fruchtaromen während Hochtemperaturverarbeitung?",
                    nl: "Wat is de optimale inkapseling techniek voor het beschermen van gevoelige fruitsmaken tijdens hoge temperatuur verwerking?"
                },
                options: [
                    { en: "Spray drying with maltodextrin", es: "Secado por aspersión con maltodextrina", de: "Sprühtrocknung mit Maltodextrin", nl: "Spray drogen met maltodextrine" },
                    { en: "Coacervation with gelatin-gum arabic", es: "Coacervación con gelatina-goma arábiga", de: "Koazervation mit Gelatine-Gummi arabicum", nl: "Coacervatie met gelatine-arabische gom" },
                    { en: "Liposomal encapsulation", es: "Encapsulación liposomal", de: "Liposomale Verkapselung", nl: "Liposomale inkapseling" },
                    { en: "β-cyclodextrin inclusion complexation", es: "Complejación de inclusión con β-ciclodextrina", de: "β-Cyclodextrin-Inklusionskomplexierung", nl: "β-cyclodextrine inclusie complexatie" }
                ],
                correct: 3,
                explanation: {
                    en: "β-cyclodextrin forms molecular inclusion complexes with volatile flavor compounds through host-guest interactions, providing superior thermal protection up to 180°C while releasing flavors upon consumption through saliva interaction.",
                    es: "La β-ciclodextrina forma complejos de inclusión molecular con compuestos de sabor volátiles mediante interacciones huésped-anfitrión, proporcionando protección térmica superior hasta 180°C mientras libera sabores al consumir mediante interacción con saliva.",
                    de: "β-Cyclodextrin bildet molekulare Inklusionskomplexe mit flüchtigen Geschmacksverbindungen durch Wirt-Gast-Wechselwirkungen und bietet überlegenen thermischen Schutz bis 180°C bei Freisetzung von Aromen beim Konsum durch Speichelinteraktion.",
                    nl: "β-cyclodextrine vormt moleculaire inclusie complexen met vluchtige smaak verbindingen door gastheer-gast interacties, superieure thermische bescherming biedend tot 180°C terwijl smaken vrijkomen bij consumptie door speeksel interactie."
                }
            },
            {
                question: {
                    en: "Which membrane filtration technology is most effective for clarifying fruit juice while retaining bioactive compounds?",
                    es: "¿Qué tecnología de filtración por membrana es más efectiva para clarificar jugo de fruta mientras retiene compuestos bioactivos?",
                    de: "Welche Membranfiltrationstechnologie ist am effektivsten zur Klärung von Fruchtsaft bei Erhaltung bioaktiver Verbindungen?",
                    nl: "Welke membraan filtratie technologie is het meest effectief voor het verhelderen van fruitsap terwijl bioactieve verbindingen behouden blijven?"
                },
                options: [
                    { en: "Microfiltration (0.1-10 μm)", es: "Microfiltración (0,1-10 μm)", de: "Mikrofiltration (0,1-10 μm)", nl: "Microfiltratie (0,1-10 μm)" },
                    { en: "Ultrafiltration (1-100 nm)", es: "Ultrafiltración (1-100 nm)", de: "Ultrafiltration (1-100 nm)", nl: "Ultrafiltratie (1-100 nm)" },
                    { en: "Nanofiltration (0.5-2 nm)", es: "Nanofiltración (0,5-2 nm)", de: "Nanofiltration (0,5-2 nm)", nl: "Nanofiltratie (0,5-2 nm)" },
                    { en: "Reverse osmosis (<0.5 nm)", es: "Ósmosis inversa (<0,5 nm)", de: "Umkehrosmose (<0,5 nm)", nl: "Omgekeerde osmose (<0,5 nm)" }
                ],
                correct: 1,
                explanation: {
                    en: "Ultrafiltration with 1-100 nm pore size removes macromolecules like pectin and proteins for clarification while allowing smaller bioactive compounds (polyphenols, vitamins) to pass through in the permeate.",
                    es: "La ultrafiltración con tamaño de poro de 1-100 nm elimina macromoléculas como pectina y proteínas para clarificación mientras permite que compuestos bioactivos más pequeños (polifenoles, vitaminas) pasen en el permeado.",
                    de: "Ultrafiltration mit 1-100 nm Porengröße entfernt Makromoleküle wie Pektin und Proteine zur Klärung, während kleinere bioaktive Verbindungen (Polyphenole, Vitamine) im Permeat durchgelassen werden.",
                    nl: "Ultrafiltratie met 1-100 nm porie grootte verwijdert macromoleculen zoals pectine en eiwitten voor verheldering terwijl kleinere bioactieve verbindingen (polyfenolen, vitamines) door kunnen in het permeaat."
                }
            },
            {
                question: {
                    en: "What is the optimal degree of esterification (DE) for pectin used in low-sugar fruit preserves?",
                    es: "¿Cuál es el grado óptimo de esterificación (DE) para pectina usada en conservas de fruta bajas en azúcar?",
                    de: "Was ist der optimale Veresterungsgrad (DE) für Pektin in zuckerarmen Fruchtkonserven?",
                    nl: "Wat is de optimale esterificatie graad (DE) voor pectine gebruikt in suikerarme fruit conserven?"
                },
                options: [
                    { en: "DE > 70% (high methoxyl)", es: "DE > 70% (alto metoxilo)", de: "DE > 70% (hochverester)", nl: "DE > 70% (hoog methoxyl)" },
                    { en: "DE 50-70% (medium methoxyl)", es: "DE 50-70% (metoxilo medio)", de: "DE 50-70% (mittelverester)", nl: "DE 50-70% (middel methoxyl)" },
                    { en: "DE < 50% (low methoxyl)", es: "DE < 50% (bajo metoxilo)", de: "DE < 50% (niedrigverester)", nl: "DE < 50% (laag methoxyl)" },
                    { en: "DE 25-30% (amidated low methoxyl)", es: "DE 25-30% (bajo metoxilo amidado)", de: "DE 25-30% (amidierter niedrigverester)", nl: "DE 25-30% (geamideerd laag methoxyl)" }
                ],
                correct: 3,
                explanation: {
                    en: "Amidated low methoxyl pectin (DE 25-30%) gels effectively in low-sugar conditions through calcium cross-linking, with amidation providing enhanced thermal stability and reduced calcium sensitivity vs non-amidated LM pectin.",
                    es: "La pectina de bajo metoxilo amidada (DE 25-30%) gelifica efectivamente en condiciones bajas en azúcar mediante reticulación con calcio, con amidación proporcionando estabilidad térmica mejorada y sensibilidad al calcio reducida comparada con pectina LM no amidada.",
                    de: "Amidiertes niedrigverestertes Pektin (DE 25-30%) geliert effektiv in zuckerarmen Bedingungen durch Calcium-Vernetzung, wobei Amidierung verbesserte thermische Stabilität und reduzierte Calciumempfindlichkeit im Vergleich zu nicht-amidiertem LM-Pektin bietet.",
                    nl: "Geamideerd laag methoxyl pectine (DE 25-30%) geleert effectief in suikerarme condities door calcium cross-linking, met amidatie verbeterde thermische stabiliteit en verminderde calcium gevoeligheid biedend vergeleken met niet-geamideerd LM pectine."
                }
            },
            {
                question: {
                    en: "Which non-thermal processing technique achieves maximum microbial inactivation while preserving fruit dessert organoleptic properties?",
                    es: "¿Qué técnica de procesamiento no térmico logra máxima inactivación microbiana mientras preserva propiedades organolépticas de postre de fruta?",
                    de: "Welche nicht-thermische Verarbeitungstechnik erreicht maximale mikrobielle Inaktivierung bei Erhaltung organoleptischer Fruchtdessert-Eigenschaften?",
                    nl: "Welke niet-thermische verwerkings techniek bereikt maximale microbiële inactivatie terwijl fruitdessert organoleptische eigenschappen behouden blijven?"
                },
                options: [
                    { en: "High-pressure processing (HPP) at 600 MPa", es: "Procesamiento de alta presión (HPP) a 600 MPa", de: "Hochdruckverarbeitung (HPP) bei 600 MPa", nl: "Hoge druk verwerking (HPP) bij 600 MPa" },
                    { en: "Pulsed electric field (PEF) at 35 kV/cm", es: "Campo eléctrico pulsado (PEF) a 35 kV/cm", de: "Gepulstes elektrisches Feld (PEF) bei 35 kV/cm", nl: "Gepulseerd elektrisch veld (PEF) bij 35 kV/cm" },
                    { en: "UV-C irradiation at 254 nm", es: "Irradiación UV-C a 254 nm", de: "UV-C-Bestrahlung bei 254 nm", nl: "UV-C bestraling bij 254 nm" },
                    { en: "Ozone treatment at 5 ppm", es: "Tratamiento con ozono a 5 ppm", de: "Ozonbehandlung bei 5 ppm", nl: "Ozon behandeling bij 5 ppm" }
                ],
                correct: 0,
                explanation: {
                    en: "HPP at 600 MPa achieves 5-log microbial reduction through membrane disruption while operating at ambient temperature, maximally preserving color, flavor, vitamins, and texture vs other non-thermal methods.",
                    es: "HPP a 600 MPa logra reducción microbiana de 5 logaritmos mediante disrupción de membrana mientras opera a temperatura ambiente, preservando máximamente color, sabor, vitaminas y textura comparado con otros métodos no térmicos.",
                    de: "HPP bei 600 MPa erreicht 5-Log-Reduktion mikrobieller Belastung durch Membranstörung bei Betrieb bei Umgebungstemperatur und erhält maximal Farbe, Geschmack, Vitamine und Textur im Vergleich zu anderen nicht-thermischen Methoden.",
                    nl: "HPP bij 600 MPa bereikt 5-log microbiële reductie door membraan verstoring terwijl het opereert bij omgevings temperatuur, maximaal kleur, smaak, vitamines en textuur behoudend vergeleken met andere niet-thermische methoden."
                }
            },
            {
                question: {
                    en: "What is the critical hydroxymethylfurfural (HMF) threshold indicating excessive heat damage in fruit dessert processing?",
                    es: "¿Cuál es el umbral crítico de hidroximetilfurfural (HMF) que indica daño excesivo por calor en procesamiento de postre de fruta?",
                    de: "Was ist der kritische Hydroxymethylfurfural (HMF) Schwellenwert, der übermäßigen Hitzeschaden in Fruchtdessert-Verarbeitung anzeigt?",
                    nl: "Wat is de kritieke hydroxymethylfurfural (HMF) drempel die excessieve hitte schade aangeeft in fruitdessert verwerking?"
                },
                options: [
                    { en: "> 10 mg/kg", es: "> 10 mg/kg", de: "> 10 mg/kg", nl: "> 10 mg/kg" },
                    { en: "> 25 mg/kg", es: "> 25 mg/kg", de: "> 25 mg/kg", nl: "> 25 mg/kg" },
                    { en: "> 50 mg/kg", es: "> 50 mg/kg", de: "> 50 mg/kg", nl: "> 50 mg/kg" },
                    { en: "> 100 mg/kg", es: "> 100 mg/kg", de: "> 100 mg/kg", nl: "> 100 mg/kg" }
                ],
                correct: 1,
                explanation: {
                    en: "HMF levels above 25 mg/kg indicate significant heat-induced degradation of sugars and loss of nutritional quality in fruit products, serving as a reliable marker of thermal processing intensity.",
                    es: "Niveles de HMF por encima de 25 mg/kg indican degradación significativa de azúcares inducida por calor y pérdida de calidad nutricional en productos de fruta, sirviendo como marcador confiable de intensidad de procesamiento térmico.",
                    de: "HMF-Werte über 25 mg/kg zeigen signifikanten hitzeinduzierten Abbau von Zuckern und Verlust ernährungsphysiologischer Qualität in Fruchtprodukten an und dienen als zuverlässiger Marker für thermische Verarbeitungsintensität.",
                    nl: "HMF niveaus boven 25 mg/kg geven significante hitte-geïnduceerde degradatie van suikers en verlies van voedingskwaliteit aan in fruitproducten, dienend als betrouwbare marker van thermische verwerkings intensiteit."
                }
            },
            {
                question: {
                    en: "Which advanced analytical technique provides the most comprehensive volatile flavor profile of fruit desserts?",
                    es: "¿Qué técnica analítica avanzada proporciona el perfil de sabor volátil más completo de postres de fruta?",
                    de: "Welche fortgeschrittene Analysetechnik bietet das umfassendste flüchtige Geschmacksprofil von Fruchtdesserts?",
                    nl: "Welke geavanceerde analytische techniek biedt het meest uitgebreide vluchtige smaak profiel van fruitdesserts?"
                },
                options: [
                    { en: "Headspace solid-phase microextraction (HS-SPME) with GC-MS", es: "Microextracción en fase sólida de espacio de cabeza (HS-SPME) con GC-MS", de: "Headspace-Festphasenmikroextraktion (HS-SPME) mit GC-MS", nl: "Headspace vaste fase micro-extractie (HS-SPME) met GC-MS" },
                    { en: "Direct injection GC-MS", es: "GC-MS de inyección directa", de: "Direktinjektions-GC-MS", nl: "Directe injectie GC-MS" },
                    { en: "Proton transfer reaction mass spectrometry (PTR-MS)", es: "Espectrometría de masas de reacción de transferencia de protones (PTR-MS)", de: "Protonen-Transfer-Reaktions-Massenspektrometrie (PTR-MS)", nl: "Proton overdracht reactie massa spectrometrie (PTR-MS)" },
                    { en: "Two-dimensional GC with olfactometry (GC×GC-O)", es: "GC bidimensional con olfatometría (GC×GC-O)", de: "Zweidimensionale GC mit Olfaktometrie (GC×GC-O)", nl: "Twee-dimensionale GC met olfactometrie (GC×GC-O)" }
                ],
                correct: 3,
                explanation: {
                    en: "GC×GC-O combines comprehensive two-dimensional separation of complex volatile mixtures with simultaneous human sensory evaluation, identifying both chemical composition and odor-active compounds for complete flavor characterization.",
                    es: "GC×GC-O combina separación bidimensional completa de mezclas volátiles complejas con evaluación sensorial humana simultánea, identificando tanto composición química como compuestos activos de olor para caracterización completa de sabor.",
                    de: "GC×GC-O kombiniert umfassende zweidimensionale Trennung komplexer flüchtiger Gemische mit gleichzeitiger menschlicher sensorischer Bewertung und identifiziert sowohl chemische Zusammensetzung als auch geruchsaktive Verbindungen für vollständige Geschmackscharakterisierung.",
                    nl: "GC×GC-O combineert uitgebreide twee-dimensionale scheiding van complexe vluchtige mengsels met gelijktijdige menselijke sensorische evaluatie, zowel chemische samenstelling als geur-actieve verbindingen identificerend voor complete smaak karakterisatie."
                }
            },
            {
                question: {
                    en: "What is the optimal molecular weight range for hydrocolloids used in fruit dessert texture modification?",
                    es: "¿Cuál es el rango óptimo de peso molecular para hidrocoloides usados en modificación de textura de postre de fruta?",
                    de: "Was ist der optimale Molekulargewichtsbereich für Hydrokolloide in Fruchtdessert-Texturmodifikation?",
                    nl: "Wat is het optimale moleculair gewicht bereik voor hydrocolloïden gebruikt in fruitdessert textuur modificatie?"
                },
                options: [
                    { en: "10-50 kDa", es: "10-50 kDa", de: "10-50 kDa", nl: "10-50 kDa" },
                    { en: "100-500 kDa", es: "100-500 kDa", de: "100-500 kDa", nl: "100-500 kDa" },
                    { en: "500-2000 kDa", es: "500-2000 kDa", de: "500-2000 kDa", nl: "500-2000 kDa" },
                    { en: "> 5000 kDa", es: "> 5000 kDa", de: "> 5000 kDa", nl: "> 5000 kDa" }
                ],
                correct: 2,
                explanation: {
                    en: "Hydrocolloids in the 500-2000 kDa range provide optimal balance between viscosity building, gel strength, and mouth feel without excessive stringiness or syneresis in fruit dessert applications.",
                    es: "Los hidrocoloides en el rango de 500-2000 kDa proporcionan equilibrio óptimo entre construcción de viscosidad, fuerza de gel y sensación en boca sin excesiva fibrosidad o sinéresis en aplicaciones de postre de fruta.",
                    de: "Hydrokolloide im Bereich 500-2000 kDa bieten optimales Gleichgewicht zwischen Viskositätsaufbau, Gelstärke und Mundgefühl ohne übermäßige Fadenbildung oder Synerese in Fruchtdessert-Anwendungen.",
                    nl: "Hydrocolloïden in het 500-2000 kDa bereik bieden optimale balans tussen viscositeit opbouw, gel sterkte en mond gevoel zonder overdreven draadvorming of synerese in fruitdessert toepassingen."
                }
            },
            {
                question: {
                    en: "Which molecular interaction is for fruit pectin gelation in the presence of calcium?",
                    es: "¿Qué interacción molecular es principalmente responsable de la gelación de pectina de fruta en presencia de calcio?",
                    de: "Welche molekulare Wechselwirkung ist hauptsächlich für Fruchtpektin-Gelierung in Gegenwart von Calcium verantwortlich?",
                    nl: "Welke moleculaire interactie is primair verantwoordelijk voor fruit pectine gelering in aanwezigheid van calcium?"
                },
                options: [
                    { en: "Egg-box model with galacturonic acid chains", es: "Modelo de caja de huevos con cadenas de ácido galacturónico", de: "Eierkarton-Modell mit Galacturonsäureketten", nl: "Eierdoos model met galacturonzuur ketens" },
                    { en: "Hydrophobic interactions", es: "Interacciones hidrofóbicas", de: "Hydrophobe Wechselwirkungen", nl: "Hydrofobe interacties" },
                    { en: "Disulfide bond formation", es: "Formación de enlaces disulfuro", de: "Disulfidbrücken-Bildung", nl: "Disulfide binding vorming" },
                    { en: "Van der Waals forces", es: "Fuerzas de Van der Waals", de: "Van-der-Waals-Kräfte", nl: "Van der Waals krachten" }
                ],
                correct: 0,
                explanation: {
                    en: "The egg-box model describes how calcium ions cross-link two galacturonic acid chains of low-methoxyl pectin through ionic coordination, forming a three-dimensional gel network structure.",
                    es: "El modelo de caja de huevos describe cómo los iones de calcio reticulan dos cadenas de ácido galacturónico de pectina de bajo metoxilo mediante coordinación iónica, formando una estructura de red de gel tridimensional.",
                    de: "Das Eierkarton-Modell beschreibt, wie Calciumionen zwei Galacturonsäureketten von niedrigverestertem Pektin durch ionische Koordination vernetzen und eine dreidimensionale Gelnetzwerkstruktur bilden.",
                    nl: "Het eierdoos model beschrijft hoe calcium ionen twee galacturonzuur ketens van laag-methoxyl pectine cross-linken door ionische coördinatie, een driedimensionale gel netwerk structuur vormend."
                }
            },
            {
                question: {
                    en: "What is the optimal particle size distribution for fruit puree to achieve maximum creaminess perception?",
                    es: "¿Cuál es la distribución óptima de tamaño de partícula para puré de fruta para lograr máxima percepción de cremosidad?",
                    de: "Was ist die optimale Partikelgrößenverteilung für Fruchtpüree zur Erzielung maximaler Cremigkeitswahrnehmung?",
                    nl: "Wat is de optimale deeltjes grootte verdeling voor fruitpuree om maximale romigheid perceptie te bereiken?"
                },
                options: [
                    { en: "Unimodal distribution at 10-20 μm", es: "Distribución unimodal a 10-20 μm", de: "Unimodale Verteilung bei 10-20 μm", nl: "Unimodale verdeling bij 10-20 μm" },
                    { en: "Bimodal distribution at 5-10 μm and 50-100 μm", es: "Distribución bimodal a 5-10 μm y 50-100 μm", de: "Bimodale Verteilung bei 5-10 μm und 50-100 μm", nl: "Bimodale verdeling bij 5-10 μm en 50-100 μm" },
                    { en: "Broad distribution from 1-200 μm", es: "Distribución amplia de 1-200 μm", de: "Breite Verteilung von 1-200 μm", nl: "Brede verdeling van 1-200 μm" },
                    { en: "Narrow distribution at 20-30 μm", es: "Distribución estrecha a 20-30 μm", de: "Enge Verteilung bei 20-30 μm", nl: "Smalle verdeling bij 20-30 μm" }
                ],
                correct: 3,
                explanation: {
                    en: "A narrow particle size distribution centered at 20-30 μm creates optimal creaminess by being small enough to avoid grittiness but large enough to provide body, with uniformity enhancing smooth mouthfeel.",
                    es: "Una distribución estrecha de tamaño de partícula centrada en 20-30 μm crea cremosidad óptima al ser suficientemente pequeña para evitar arenosidad pero suficientemente grande para proporcionar cuerpo, con uniformidad mejorando sensación suave en boca.",
                    de: "Eine enge Partikelgrößenverteilung bei 20-30 μm erzeugt optimale Cremigkeit, indem sie klein genug ist, um Körnigkeit zu vermeiden, aber groß genug, um Körper zu bieten, wobei Gleichmäßigkeit glattes Mundgefühl verstärkt.",
                    nl: "Een smalle deeltjes grootte verdeling gecentreerd bij 20-30 μm creëert optimale romigheid door klein genoeg te zijn om korreligheid te vermijden maar groot genoeg om body te bieden, met uniformiteit glad mond gevoel versterkend."
                }
            },
            {
                question: {
                    en: "Which fermentation metabolite profile indicates optimal probiotic activity in fermented fruit desserts?",
                    es: "¿Qué perfil de metabolito de fermentación indica actividad probiótica óptima en postres de fruta fermentados?",
                    de: "Welches Fermentationsmetabolitenprofil zeigt optimale probiotische Aktivität in fermentierten Fruchtdesserts an?",
                    nl: "Welk fermentatie metaboliet profiel geeft optimale probiotische activiteit aan in gefermenteerde fruitdesserts?"
                },
                options: [
                    { en: "High lactic acid (>0.8%), low acetic acid (<0.1%)", es: "Alto ácido láctico (>0,8%), bajo ácido acético (<0,1%)", de: "Hohe Milchsäure (>0,8%), niedrige Essigsäure (<0,1%)", nl: "Hoog melkzuur (>0,8%), laag azijnzuur (<0,1%)" },
                    { en: "Balanced lactic:acetic ratio of 3:1", es: "Relación equilibrada láctico:acético de 3:1", de: "Ausgewogenes Milchsäure:Essigsäure-Verhältnis von 3:1", nl: "Gebalanceerde melkzuur:azijnzuur verhouding van 3:1" },
                    { en: "High ethanol (>2%), moderate acids", es: "Alto etanol (>2%), ácidos moderados", de: "Hohes Ethanol (>2%), moderate Säuren", nl: "Hoog ethanol (>2%), gematigde zuren" },
                    { en: "Mixed organic acids with low pH (<3.5)", es: "Ácidos orgánicos mixtos con pH bajo (<3,5)", de: "Gemischte organische Säuren mit niedrigem pH (<3,5)", nl: "Gemengde organische zuren met lage pH (<3,5)" }
                ],
                correct: 0,
                explanation: {
                    en: "High lactic acid (>0.8%) with low acetic acid (<0.1%) indicates homofermentative probiotic activity, producing beneficial lactic acid for gut health without excessive acetic acid that can cause undesirable sharp flavors.",
                    es: "Alto ácido láctico (>0,8%) con bajo ácido acético (<0,1%) indica actividad probiótica homofermentativa, produciendo ácido láctico beneficioso para salud intestinal sin exceso de ácido acético que puede causar sabores agudos indeseables.",
                    de: "Hohe Milchsäure (>0,8%) mit niedriger Essigsäure (<0,1%) zeigt homofermentative probiotische Aktivität an und produziert vorteilhafte Milchsäure für Darmgesundheit ohne übermäßige Essigsäure, die unerwünschte scharfe Aromen verursachen kann.",
                    nl: "Hoog melkzuur (>0,8%) met laag azijnzuur (<0,1%) geeft homofermentatieve probiotische activiteit aan, voordelig melkzuur producerend voor darm gezondheid zonder overdreven azijnzuur dat ongewenste scherpe smaken kan veroorzaken."
                }
            },
            {
                question: {
                    en: "What is the critical polyphenol oxidase (PPO) residual activity threshold that prevents enzymatic browning in fruit desserts?",
                    es: "¿Cuál es el umbral crítico de actividad residual de polifenol oxidasa (PPO) que previene pardeamiento enzimático en postres de fruta?",
                    de: "Was ist der kritische Restaktivitätsschwellenwert von Polyphenoloxidase (PPO), der enzymatische Bräunung in Fruchtdesserts verhindert?",
                    nl: "Wat is de kritieke polyfenol oxidase (PPO) residu activiteit drempel die enzymatische bruining voorkomt in fruitdesserts?"
                },
                options: [
                    { en: "< 50% residual activity", es: "< 50% actividad residual", de: "< 50% Restaktivität", nl: "< 50% residu activiteit" },
                    { en: "< 20% residual activity", es: "< 20% actividad residual", de: "< 20% Restaktivität", nl: "< 20% residu activiteit" },
                    { en: "< 10% residual activity", es: "< 10% actividad residual", de: "< 10% Restaktivität", nl: "< 10% residu activiteit" },
                    { en: "< 5% residual activity", es: "< 5% actividad residual", de: "< 5% Restaktivität", nl: "< 5% residu activiteit" }
                ],
                correct: 2,
                explanation: {
                    en: "PPO residual activity below 10% is necessary to effectively prevent enzymatic browning during storage, as even low enzyme levels can catalyze visible browning over extended shelf-life periods.",
                    es: "La actividad residual de PPO por debajo del 10% es necesaria para prevenir efectivamente el pardeamiento enzimático durante el almacenamiento, ya que incluso niveles bajos de enzima pueden catalizar pardeamiento visible durante períodos prolongados de vida útil.",
                    de: "PPO-Restaktivität unter 10% ist notwendig, um enzymatische Bräunung während der Lagerung wirksam zu verhindern, da selbst niedrige Enzymspiegel während verlängerter Haltbarkeitsperioden sichtbare Bräunung katalysieren können.",
                    nl: "PPO residu activiteit onder 10% is noodzakelijk om enzymatische bruining tijdens opslag effectief te voorkomen, aangezien zelfs lage enzym niveaus zichtbare bruining kunnen katalyseren over verlengde houdbaarheids periodes."
                }
            },
            {
                question: {
                    en: "Which crystallization control technique produces the finest ice crystal structure in frozen fruit desserts?",
                    es: "¿Qué técnica de control de cristalización produce la estructura de cristal de hielo más fina en postres de fruta congelados?",
                    de: "Welche Kristallisationskontrolltechnik produziert die feinste Eiskristallstruktur in gefrorenen Fruchtdesserts?",
                    nl: "Welke kristallisatie controle techniek produceert de fijnste ijs kristal structuur in bevroren fruitdesserts?"
                },
                options: [
                    { en: "Ice structuring proteins (ISPs) at 0.01-0.1%", es: "Proteínas estructurantes de hielo (ISPs) a 0,01-0,1%", de: "Eisstrukturierende Proteine (ISPs) bei 0,01-0,1%", nl: "Ijs structurerende eiwitten (ISPs) bij 0,01-0,1%" },
                    { en: "High sugar content (>60% solids)", es: "Alto contenido de azúcar (>60% sólidos)", de: "Hoher Zuckergehalt (>60% Feststoffe)", nl: "Hoog suiker gehalte (>60% vaste stoffen)" },
                    { en: "Rapid blast freezing at -40°C", es: "Congelación rápida por explosión a -40°C", de: "Schnelles Schockfrosten bei -40°C", nl: "Snelle schok bevriezing bij -40°C" },
                    { en: "Continuous scraping during freezing", es: "Raspado continuo durante congelación", de: "Kontinuierliches Kratzen während des Einfrierens", nl: "Continu schrapen tijdens bevriezing" }
                ],
                correct: 0,
                explanation: {
                    en: "Ice structuring proteins (ISPs) at 0.01-0.1% concentration inhibit ice crystal growth through adsorption-inhibition mechanism, producing crystals <30 μm for superior smooth texture vs conventional methods.",
                    es: "Las proteínas estructurantes de hielo (ISPs) a concentración de 0,01-0,1% inhiben el crecimiento de cristales de hielo mediante mecanismo de adsorción-inhibición, produciendo cristales <30 μm para textura suave superior comparada con métodos convencionales.",
                    de: "Eisstrukturierende Proteine (ISPs) bei 0,01-0,1% Konzentration hemmen Eiskristallwachstum durch Adsorptions-Inhibitionsmechanismus und produzieren Kristalle <30 μm für überlegene glatte Textur im Vergleich zu konventionellen Methoden.",
                    nl: "Ijs structurerende eiwitten (ISPs) bij 0,01-0,1% concentratie remmen ijs kristal groei door adsorptie-inhibitie mechanisme, kristallen <30 μm producerend voor superieure gladde textuur vergeleken met conventionele methoden."
                }
            }
        ]
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level10Data;
    } else if (typeof window !== 'undefined') {
        window.level10Data = level10Data;
    }

})();
