// Level 7: Currencies - Zeldzame valuta (Grandmaster)
(function() {
  const level7 = {
    difficulty: "Grandmaster",
    name: {
      en: "Rare Currencies - Grandmaster Level",
      es: "Monedas Raras - Nivel Gran Maestro",
      de: "Seltene Währungen - Großmeister",
      nl: "Zeldzame Valuta - Grootmeester Niveau"
    },
    questions: [
      {
        question: {
          en: "What does neutron activation analysis reveal about ancient coins?",
          es: "¿Qué revela el análisis de activación neutrónica sobre monedas antiguas?",
          de: "Was enthüllt die Neutronenaktivierungsanalyse über antike Münzen?",
          nl: "Wat onthult neutronactivatie-analyse over antieke munten?"
        },
        options: [
          { en: "Surface wear patterns", es: "Patrones de desgaste superficial", de: "Oberflächenverschleißmuster", nl: "Oppervlakte slijtageppatronen" },
          { en: "Trace elements revealing ore sources and authenticity", es: "Elementos traza que revelan fuentes de mineral y autenticidad", de: "Spurenelemente, die Erzquellen und Authentizität offenbaren", nl: "Spoorelementen die ertsbronnen en authenticiteit onthullen" },
          { en: "Die production methods", es: "Métodos de producción de troqueles", de: "Stempelproduktionsmethoden", nl: "Stempel productie methoden" },
          { en: "Coin circulation patterns", es: "Patrones de circulación de monedas", de: "Münzzirkulationsmuster", nl: "Munt circulatie patronen" }
        ],
        correct: 1,
        explanation: {
          en: "Neutron activation analysis bombards coins with neutrons to identify trace elements present in minute quantities. These trace elements create 'fingerprints' that can identify specific ore sources, revealing ancient trade routes and helping authenticate coins by comparing their elemental signatures to known ancient mining regions.",
          es: "El análisis de activación neutrónica bombardea monedas con neutrones para identificar elementos traza presentes en cantidades mínimas. Estos elementos traza crean 'huellas dactilares' que pueden identificar fuentes específicas de mineral, revelando rutas comerciales antiguas y ayudando a autenticar monedas comparando sus firmas elementales con regiones mineras antiguas conocidas.",
          de: "Neutronenaktivierungsanalyse bombardiert Münzen mit Neutronen, um Spurenelemente in winzigen Mengen zu identifizieren. Diese Spurenelemente erzeugen 'Fingerabdrücke', die spezifische Erzquellen identifizieren können, antike Handelsrouten offenbaren und bei der Authentifizierung von Münzen helfen, indem ihre elementaren Signaturen mit bekannten antiken Bergbauregionen verglichen werden.",
          nl: "Neutronactivatie-analyse bombardeert munten met neutronen om spoorelementen aanwezig in minuscule hoeveelheden te identificeren. Deze spoorelementen creëren 'vingerafdrukken' die specifieke ertsbronnen kunnen identificeren, antieke handelsroutes onthullen en helpen munten te authenticeren door hun elementaire handtekeningen te vergelijken met bekende antieke mijnbouwregio's."
        }
      },
      {
        question: {
          en: "How does X-ray tomography assist in coin authentication?",
          es: "¿Cómo ayuda la tomografía de rayos X en la autenticación de monedas?",
          de: "Wie hilft Röntgentomographie bei der Münzauthentifizierung?",
          nl: "Hoe helpt röntgentomografie bij muntauthenticatie?"
        },
        options: [
          { en: "By revealing internal structure and core composition without damage", es: "Revelando estructura interna y composición del núcleo sin daño", de: "Durch Offenlegung der inneren Struktur und Kernzusammensetzung ohne Schäden", nl: "Door interne structuur en kernsamenstelling te onthullen zonder schade" },
          { en: "By measuring surface hardness", es: "Midiendo la dureza superficial", de: "Durch Messung der Oberflächenhärte", nl: "Door oppervlakte hardheid te meten" },
          { en: "By analyzing color changes", es: "Analizando cambios de color", de: "Durch Analyse von Farbänderungen", nl: "Door kleurveranderingen te analyseren" },
          { en: "By testing magnetic properties", es: "Probando propiedades magnéticas", de: "Durch Prüfung magnetischer Eigenschaften", nl: "Door magnetische eigenschappen te testen" }
        ],
        correct: 0,
        explanation: {
          en: "X-ray tomography creates detailed 3D images of a coin's internal structure without damage, revealing hidden cores, internal defects, or evidence of modern manufacturing techniques. This technology can detect tungsten cores in gold-plated fakes or reveal how ancient coins were constructed, providing authentication insights impossible to obtain through surface examination alone.",
          es: "La tomografía de rayos X crea imágenes 3D detalladas de la estructura interna de una moneda sin daño, revelando núcleos ocultos, defectos internos o evidencia de técnicas de fabricación modernas. Esta tecnología puede detectar núcleos de tungsteno en falsificaciones chapadas en oro o revelar cómo se construyeron monedas antiguas, proporcionando conocimientos de autenticación imposibles de obtener solo mediante examen superficial.",
          de: "Röntgentomographie erstellt detaillierte 3D-Bilder der inneren Struktur einer Münze ohne Schäden und offenbart versteckte Kerne, interne Defekte oder Beweise moderner Herstellungstechniken. Diese Technologie kann Wolframkerne in goldplattierten Fälschungen erkennen oder offenbaren, wie antike Münzen konstruiert wurden, und bietet Authentifizierungseinblicke, die durch Oberflächenuntersuchung allein unmöglich zu erhalten sind.",
          nl: "Röntgentomografie creëert gedetailleerde 3D-beelden van de interne structuur van een munt zonder schade, onthullend verborgen kernen, interne defecten of bewijs van moderne productietechnieken. Deze technologie kan wolfraamkernen in goudgeplateerde vervalsingen detecteren of onthullen hoe antieke munten werden geconstrueerd, wat authenticatie-inzichten biedt die onmogelijk te verkrijgen zijn door alleen oppervlakte-onderzoek."
        }
      },
      {
        question: {
          en: "What is the significance of 'microchemical analysis' in forensic numismatics?",
          es: "¿Cuál es la importancia del 'análisis microquímico' en numismática forense?",
          de: "Was ist die Bedeutung der 'mikrochemischen Analyse' in der forensischen Numismatik?",
          nl: "Wat is de betekenis van 'microchemische analyse' in forensische numismatiek?"
        },
        options: [
          { en: "Testing coin weight accuracy", es: "Probando la precisión del peso de la moneda", de: "Prüfung der Münzgewichtsgenauigkeit", nl: "Testen van muntgewicht nauwkeurigheid" },
          { en: "Analyzing microscopic samples to determine manufacturing era and techniques", es: "Analizando muestras microscópicas para determinar era y técnicas de fabricación", de: "Analyse mikroskopischer Proben zur Bestimmung von Herstellungsära und -techniken", nl: "Analyseren van microscopische monsters om productie-era en technieken te bepalen" },
          { en: "Measuring coin diameter", es: "Midiendo el diámetro de la moneda", de: "Messung des Münzdurchmessers", nl: "Meten van muntdiameter" },
          { en: "Counting edge reeding", es: "Contando el estriado del borde", de: "Zählung der Randriffelung", nl: "Tellen van randribbing" }
        ],
        correct: 1,
        explanation: {
          en: "Microchemical analysis examines microscopic samples of metal, patina, or corrosion products to determine their composition and formation processes. This can reveal whether a coin was made using historical techniques or modern methods, detect artificial aging, and identify specific alloys or treatments that indicate authenticity or forgery.",
          es: "El análisis microquímico examina muestras microscópicas de metal, pátina o productos de corrosión para determinar su composición y procesos de formación. Esto puede revelar si una moneda fue hecha usando técnicas históricas o métodos modernos, detectar envejecimiento artificial e identificar aleaciones específicas o tratamientos que indican autenticidad o falsificación.",
          de: "Mikrochemische Analyse untersucht mikroskopische Proben von Metall, Patina oder Korrosionsprodukten, um ihre Zusammensetzung und Bildungsprozesse zu bestimmen. Dies kann offenbaren, ob eine Münze mit historischen Techniken oder modernen Methoden hergestellt wurde, künstliche Alterung erkennen und spezifische Legierungen oder Behandlungen identifizieren, die Authentizität oder Fälschung anzeigen.",
          nl: "Microchemische analyse onderzoekt microscopische monsters van metaal, patina of corrosieproducten om hun samenstelling en vormingsprocessen te bepalen. Dit kan onthullen of een munt werd gemaakt met historische technieken of moderne methoden, kunstmatige veroudering detecteren en specifieke legeringen of behandelingen identificeren die authenticiteit of vervalsing aangeven."
        }
      },
      {
        question: {
          en: "How does mass spectrometry contribute to numismatic research?",
          es: "¿Cómo contribuye la espectrometría de masas a la investigación numismática?",
          de: "Wie trägt Massenspektrometrie zur numismatischen Forschung bei?",
          nl: "Hoe draagt massaspectrometrie bij aan numismatisch onderzoek?"
        },
        options: [
          { en: "By measuring coin thickness", es: "Midiendo el grosor de la moneda", de: "Durch Messung der Münzdicke", nl: "Door muntdikte te meten" },
          { en: "By precisely identifying isotopic ratios and trace elements", es: "Identificando precisamente proporciones isotópicas y elementos traza", de: "Durch präzise Identifizierung von Isotopenverhältnissen und Spurenelementen", nl: "Door isotopenverhoudingen en spoorelementen nauwkeurig te identificeren" },
          { en: "By analyzing surface texture", es: "Analizando textura superficial", de: "Durch Analyse der Oberflächentextur", nl: "Door oppervlakte textuur te analyseren" },
          { en: "By measuring magnetic fields", es: "Midiendo campos magnéticos", de: "Durch Messung magnetischer Felder", nl: "Door magnetische velden te meten" }
        ],
        correct: 1,
        explanation: {
          en: "Mass spectrometry provides extremely precise identification of isotopic ratios and trace elements in coins, creating unique 'chemical fingerprints' that can identify specific ore sources, detect modern alloys, and authenticate ancient coins. This technique can detect impurities at parts-per-million levels, revealing information about ancient mining and metalworking practices.",
          es: "La espectrometría de masas proporciona identificación extremadamente precisa de proporciones isotópicas y elementos traza en monedas, creando 'huellas dactilares químicas' únicas que pueden identificar fuentes específicas de mineral, detectar aleaciones modernas y autenticar monedas antiguas. Esta técnica puede detectar impurezas a niveles de partes por millón, revelando información sobre prácticas antiguas de minería y metalurgia.",
          de: "Massenspektrometrie bietet extrem präzise Identifizierung von Isotopenverhältnissen und Spurenelementen in Münzen und schafft einzigartige 'chemische Fingerabdrücke', die spezifische Erzquellen identifizieren, moderne Legierungen erkennen und antike Münzen authentifizieren können. Diese Technik kann Verunreinigungen auf Parts-per-Million-Niveau erkennen und Informationen über antike Bergbau- und Metallbearbeitungspraktiken offenbaren.",
          nl: "Massaspectrometrie biedt extreem nauwkeurige identificatie van isotopenverhoudingen en spoorelementen in munten, wat unieke 'chemische vingerafdrukken' creëert die specifieke ertsbronnen kunnen identificeren, moderne legeringen detecteren en antieke munten authenticeren. Deze techniek kan onzuiverheden op parts-per-million niveau detecteren, wat informatie onthult over antieke mijnbouw en metaalbewerking praktijken."
        }
      },
      {
        question: {
          en: "What role does computational analysis play in die studies?",
          es: "¿Qué papel juega el análisis computacional en estudios de troquel?",
          de: "Welche Rolle spielt computergestützte Analyse in Stempelstudien?",
          nl: "Welke rol speelt computationele analyse in stempel studies?"
        },
        options: [
          { en: "Automated detection of die varieties and links through image recognition", es: "Detección automatizada de variedades y enlaces de troquel mediante reconocimiento de imagen", de: "Automatische Erkennung von Stempelvarianten und -verbindungen durch Bilderkennung", nl: "Geautomatiseerde detectie van stempelvariëteiten en verbindingen door beeldherkenning" },
          { en: "Calculating coin values", es: "Calculando valores de monedas", de: "Berechnung von Münzwerten", nl: "Berekenen van muntwaarden" },
          { en: "Measuring strike pressure", es: "Midiendo presión de acuñación", de: "Messung des Prägedrucks", nl: "Meten van slagdruk" },
          { en: "Determining mint locations", es: "Determinando ubicaciones de casas de moneda", de: "Bestimmung von Münzstättenstandorten", nl: "Bepalen van muntlocaties" }
        ],
        correct: 0,
        explanation: {
          en: "Computational analysis uses advanced image recognition and pattern matching algorithms to automatically detect die varieties, identify die links, and track die deterioration patterns across large numbers of coins. This technology can process thousands of coin images to find connections that would take human researchers years to discover manually.",
          es: "El análisis computacional usa reconocimiento de imagen avanzado y algoritmos de coincidencia de patrones para detectar automáticamente variedades de troquel, identificar enlaces de troquel y rastrear patrones de deterioro de troquel a través de grandes números de monedas. Esta tecnología puede procesar miles de imágenes de monedas para encontrar conexiones que tomarían años a investigadores humanos descubrir manualmente.",
          de: "Computergestützte Analyse verwendet fortschrittliche Bilderkennung und Musterabgleichsalgorithmen, um automatisch Stempelvarianten zu erkennen, Stempelverbindungen zu identifizieren und Stempelverschlechterungsmuster über große Anzahlen von Münzen zu verfolgen. Diese Technologie kann Tausende von Münzbildern verarbeiten, um Verbindungen zu finden, deren manuelle Entdeckung menschliche Forscher Jahre kosten würde.",
          nl: "Computationele analyse gebruikt geavanceerde beeldherkenning en patroonvergelijking algoritmen om automatisch stempelvariëteiten te detecteren, stempelverbindingen te identificeren en stempel achteruitgang patronen te volgen over grote aantallen munten. Deze technologie kan duizenden muntbeelden verwerken om verbindingen te vinden die menselijke onderzoekers jaren zouden kosten om handmatig te ontdekken."
        }
      },
      {
        question: {
          en: "What does radiocarbon dating reveal about organic materials in ancient coins?",
          es: "¿Qué revela la datación por radiocarbono sobre materiales orgánicos en monedas antiguas?",
          de: "Was enthüllt Radiokarbondatierung über organische Materialien in antiken Münzen?",
          nl: "Wat onthult radiokoolstof datering over organische materialen in antieke munten?"
        },
        options: [
          { en: "The exact minting date", es: "La fecha exacta de acuñación", de: "Das genaue Prägungsdatum", nl: "De exacte slagdatum" },
          { en: "Age of organic inclusions or surface deposits, providing authentication clues", es: "Edad de inclusiones orgánicas o depósitos superficiales, proporcionando pistas de autenticación", de: "Alter organischer Einschlüsse oder Oberflächenablagerungen, die Authentifizierungshinweise liefern", nl: "Leeftijd van organische insluitsels of oppervlakte afzettingen, die authenticatie aanwijzingen geven" },
          { en: "Metal purity levels", es: "Niveles de pureza del metal", de: "Metallreinheitsgrade", nl: "Metaal zuiverheid niveaus" },
          { en: "Die manufacturing techniques", es: "Técnicas de fabricación de troqueles", de: "Stempelherstellungstechniken", nl: "Stempel fabricage technieken" }
        ],
        correct: 1,
        explanation: {
          en: "Radiocarbon dating can analyze organic materials found as inclusions in coins or as surface deposits (like ancient wood fragments, textiles, or biological matter) to provide authentication evidence. If organic materials date to modern times on supposedly ancient coins, it indicates forgery. This technique helps verify the age of environmental deposits that accumulate over centuries.",
          es: "La datación por radiocarbono puede analizar materiales orgánicos encontrados como inclusiones en monedas o como depósitos superficiales (como fragmentos de madera antigua, textiles o materia biológica) para proporcionar evidencia de autenticación. Si los materiales orgánicos datan de tiempos modernos en monedas supuestamente antiguas, indica falsificación. Esta técnica ayuda a verificar la edad de depósitos ambientales que se acumulan durante siglos.",
          de: "Radiokarbondatierung kann organische Materialien analysieren, die als Einschlüsse in Münzen oder als Oberflächenablagerungen gefunden werden (wie antike Holzfragmente, Textilien oder biologisches Material), um Authentifizierungsbeweise zu liefern. Wenn organische Materialien auf angeblich antiken Münzen in moderne Zeiten datieren, deutet dies auf Fälschung hin. Diese Technik hilft, das Alter von Umweltablagerungen zu verifizieren, die sich über Jahrhunderte ansammeln.",
          nl: "Radiokoolstof datering kan organische materialen analyseren die worden gevonden als insluitsels in munten of als oppervlakte afzettingen (zoals antieke houtfragmenten, textiel of biologisch materiaal) om authenticatie bewijs te leveren. Als organische materialen dateren naar moderne tijden op zogenaamd antieke munten, duidt dit op vervalsing. Deze techniek helpt de leeftijd van omgevingsafzettingen te verifiëren die zich over eeuwen ophopen."
        }
      },
      {
        question: {
          en: "How does electron microscopy advance numismatic authentication?",
          es: "¿Cómo avanza la microscopía electrónica la autenticación numismática?",
          de: "Wie verbessert Elektronenmikroskopie die numismatische Authentifizierung?",
          nl: "Hoe bevordert elektronenmicroscopie numismatische authenticatie?"
        },
        options: [
          { en: "By revealing surface details at magnifications up to 100,000x", es: "Revelando detalles superficiales a magnificaciones de hasta 100,000x", de: "Durch Offenlegung von Oberflächendetails bei Vergrößerungen bis zu 100.000x", nl: "Door oppervlakte details te onthullen bij vergrotingen tot 100.000x" },
          { en: "By measuring coin weight", es: "Midiendo el peso de la moneda", de: "Durch Messung des Münzgewichts", nl: "Door muntgewicht te meten" },
          { en: "By testing coin flexibility", es: "Probando la flexibilidad de la moneda", de: "Durch Prüfung der Münzflexibilität", nl: "Door muntflexibiliteit te testen" },
          { en: "By analyzing sound frequencies", es: "Analizando frecuencias de sonido", de: "Durch Analyse von Schallfrequenzen", nl: "Door geluidsfrequenties te analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "Electron microscopy reveals surface details at magnifications up to 100,000x, showing microscopic tool marks, crystalline structures, and manufacturing evidence invisible to conventional examination. This ultra-high resolution can distinguish between hand-engraving and modern machine work, detect artificial aging, and reveal authentic ancient manufacturing techniques through microscopic analysis.",
          es: "La microscopía electrónica revela detalles superficiales a magnificaciones de hasta 100,000x, mostrando marcas microscópicas de herramientas, estructuras cristalinas y evidencia de fabricación invisible al examen convencional. Esta resolución ultra alta puede distinguir entre grabado a mano y trabajo de máquina moderna, detectar envejecimiento artificial y revelar técnicas auténticas de fabricación antigua a través de análisis microscópico.",
          de: "Elektronenmikroskopie offenbart Oberflächendetails bei Vergrößerungen bis zu 100.000x und zeigt mikroskopische Werkzeugspuren, Kristallstrukturen und Herstellungsbeweise, die für konventionelle Untersuchung unsichtbar sind. Diese Ultra-High-Resolution kann zwischen Handgravur und moderner Maschinenarbeit unterscheiden, künstliche Alterung erkennen und authentische antike Herstellungstechniken durch mikroskopische Analyse offenbaren.",
          nl: "Elektronenmicroscopie onthult oppervlakte details bij vergrotingen tot 100.000x, tonend microscopische gereedschapsporen, kristallijne structuren en productie bewijs onzichtbaar voor conventioneel onderzoek. Deze ultra-hoge resolutie kan onderscheid maken tussen handgravering en modern machinewerk, kunstmatige veroudering detecteren en authentieke antieke productietechnieken onthullen door microscopische analyse."
        }
      },
      {
        question: {
          en: "What information can thermoluminescence dating provide about ceramic coin molds?",
          es: "¿Qué información puede proporcionar la datación por termoluminiscencia sobre moldes cerámicos de monedas?",
          de: "Welche Informationen kann Thermolumineszenzdatierung über keramische Münzformen liefern?",
          nl: "Welke informatie kan thermoluminescentie datering verschaffen over keramische muntmallen?"
        },
        options: [
          { en: "The metal composition used", es: "La composición metálica usada", de: "Die verwendete Metallzusammensetzung", nl: "De gebruikte metaalsamenstelling" },
          { en: "When the ceramic was last heated, indicating mold production date", es: "Cuándo se calentó por última vez la cerámica, indicando fecha de producción del molde", de: "Wann die Keramik zuletzt erhitzt wurde, was das Produktionsdatum der Form anzeigt", nl: "Wanneer de keramiek voor het laatst werd verwarmd, wat de productiedatum van de mal aangeeft" },
          { en: "The coin's market value", es: "El valor de mercado de la moneda", de: "Der Marktwert der Münze", nl: "De marktwaarde van de munt" },
          { en: "The number of coins produced", es: "El número de monedas producidas", de: "Die Anzahl der produzierten Münzen", nl: "Het aantal geproduceerde munten" }
        ],
        correct: 1,
        explanation: {
          en: "Thermoluminescence dating measures accumulated radiation damage in ceramic materials since they were last heated. For coin molds, this reveals when the ceramic was fired during mold production, helping authenticate the age of supposed ancient coin-making equipment and detect modern fakes made with recently fired ceramic molds.",
          es: "La datación por termoluminiscencia mide el daño de radiación acumulado en materiales cerámicos desde que fueron calentados por última vez. Para moldes de monedas, esto revela cuándo se coció la cerámica durante la producción del molde, ayudando a autenticar la edad del supuesto equipo de fabricación de monedas antiguas y detectar falsificaciones modernas hechas con moldes cerámicos recientemente cocidos.",
          de: "Thermolumineszenzdatierung misst akkumulierte Strahlenschäden in keramischen Materialien seit ihrer letzten Erhitzung. Für Münzformen offenbart dies, wann die Keramik während der Formproduktion gebrannt wurde, was bei der Authentifizierung des Alters angeblicher antiker Münzherstellungsausrüstung hilft und moderne Fälschungen mit kürzlich gebrannten keramischen Formen erkennt.",
          nl: "Thermoluminescentie datering meet geaccumuleerde stralingschade in keramische materialen sinds ze voor het laatst werden verwarmd. Voor muntmallen onthult dit wanneer de keramiek werd gebakken tijdens malproductie, helpend bij het authenticeren van de leeftijd van veronderstelde antieke muntmaak apparatuur en het detecteren van moderne vervalsingen gemaakt met recent gebakken keramische mallen."
        }
      },
      {
        question: {
          en: "How do blockchain technologies impact coin provenance research?",
          es: "¿Cómo impactan las tecnologías blockchain en la investigación de procedencia de monedas?",
          de: "Wie beeinflussen Blockchain-Technologien die Münzprovenienzforschung?",
          nl: "Hoe beïnvloeden blockchain technologieën onderzoek naar muntherkomst?"
        },
        options: [
          { en: "They create immutable records of ownership and transaction history", es: "Crean registros inmutables de propiedad e historia de transacciones", de: "Sie schaffen unveränderliche Aufzeichnungen von Eigentum und Transaktionsgeschichte", nl: "Ze creëren onveranderlijke records van eigendom en transactiegeschiedenis" },
          { en: "They determine metal composition", es: "Determinan composición metálica", de: "Sie bestimmen die Metallzusammensetzung", nl: "Ze bepalen metaalsamenstelling" },
          { en: "They measure coin dimensions", es: "Miden dimensiones de monedas", de: "Sie messen Münzdimensionen", nl: "Ze meten muntdimensies" },
          { en: "They analyze surface wear", es: "Analizan desgaste superficial", de: "Sie analysieren Oberflächenverschleiß", nl: "Ze analyseren oppervlakte slijtage" }
        ],
        correct: 0,
        explanation: {
          en: "Blockchain technologies create immutable, decentralized records of coin ownership and transaction history, providing transparent and tamper-proof provenance documentation. This technology can track a coin's ownership chain, verify authenticity claims, and create permanent records that enhance trust in the rare coin market.",
          es: "Las tecnologías blockchain crean registros inmutables y descentralizados de propiedad de monedas e historia de transacciones, proporcionando documentación de procedencia transparente y a prueba de manipulación. Esta tecnología puede rastrear la cadena de propiedad de una moneda, verificar afirmaciones de autenticidad y crear registros permanentes que mejoran la confianza en el mercado de monedas raras.",
          de: "Blockchain-Technologien schaffen unveränderliche, dezentralisierte Aufzeichnungen von Münzeigentum und Transaktionsgeschichte und bieten transparente und manipulationssichere Provenienzdokumentation. Diese Technologie kann die Eigentumskette einer Münze verfolgen, Authentizitätsansprüche verifizieren und permanente Aufzeichnungen erstellen, die das Vertrauen in den Markt für seltene Münzen stärken.",
          nl: "Blockchain technologieën creëren onveranderlijke, gedecentraliseerde records van muntenigendom en transactiegeschiedenis, wat transparante en fraudebestendige herkomstdocumentatie biedt. Deze technologie kan de eigendomsketen van een munt volgen, authenticiteitsbeweringen verifiëren en permanente records creëren die het vertrouwen in de markt voor zeldzame munten versterken."
        }
      },
      {
        question: {
          en: "What does laser ablation inductively coupled plasma mass spectrometry (LA-ICP-MS) reveal?",
          es: "¿Qué revela la espectrometría de masas con plasma acoplado inductivamente por ablación láser (LA-ICP-MS)?",
          de: "Was enthüllt Laser-Ablation induktiv gekoppelte Plasma-Massenspektrometrie (LA-ICP-MS)?",
          nl: "Wat onthult laser ablatie inductief gekoppelde plasma massaspectrometrie (LA-ICP-MS)?"
        },
        options: [
          { en: "Surface scratches and wear patterns", es: "Arañazos superficiales y patrones de desgaste", de: "Oberflächenkratzer und Verschleißmuster", nl: "Oppervlakte krassen en slijtagepatronen" },
          { en: "Precise elemental composition with minimal sample damage", es: "Composición elemental precisa con daño mínimo de muestra", de: "Präzise Elementzusammensetzung mit minimaler Probeschädigung", nl: "Nauwkeurige elementsamenstelling met minimale monster schade" },
          { en: "Coin production volumes", es: "Volúmenes de producción de monedas", de: "Münzproduktionsvolumen", nl: "Muntproductie volumes" },
          { en: "Historical market prices", es: "Precios históricos del mercado", de: "Historische Marktpreise", nl: "Historische marktprijzen" }
        ],
        correct: 1,
        explanation: {
          en: "LA-ICP-MS uses laser ablation to remove microscopic amounts of material for precise elemental analysis, causing minimal damage while providing extremely accurate compositional data. This technique can detect trace elements and isotopes that reveal ore sources, detect modern alloys, and authenticate ancient coins through their unique chemical signatures.",
          es: "LA-ICP-MS usa ablación láser para remover cantidades microscópicas de material para análisis elemental preciso, causando daño mínimo mientras proporciona datos composicionales extremadamente precisos. Esta técnica puede detectar elementos traza e isótopos que revelan fuentes de mineral, detectar aleaciones modernas y autenticar monedas antiguas a través de sus firmas químicas únicas.",
          de: "LA-ICP-MS verwendet Laser-Ablation, um mikroskopische Materialmengen für präzise Elementanalyse zu entfernen, was minimale Schäden verursacht, während es extrem genaue Zusammensetzungsdaten liefert. Diese Technik kann Spurenelemente und Isotope erkennen, die Erzquellen offenbaren, moderne Legierungen erkennen und antike Münzen durch ihre einzigartigen chemischen Signaturen authentifizieren.",
          nl: "LA-ICP-MS gebruikt laser ablatie om microscopische hoeveelheden materiaal te verwijderen voor nauwkeurige elementanalyse, minimale schade veroorzakend terwijl het extreem nauwkeurige samenstellingsgegevens levert. Deze techniek kan spoorelementen en isotopen detecteren die ertsbronnen onthullen, moderne legeringen detecteren en antieke munten authenticeren door hun unieke chemische handtekeningen."
        }
      },
      {
        question: {
          en: "How does photogrammetry assist in numismatic documentation?",
          es: "¿Cómo ayuda la fotogrametría en la documentación numismática?",
          de: "Wie hilft Fotogrammetrie bei der numismatischen Dokumentation?",
          nl: "Hoe helpt fotogrammetrie bij numismatische documentatie?"
        },
        options: [
          { en: "By creating detailed 3D models from multiple photographs", es: "Creando modelos 3D detallados a partir de múltiples fotografías", de: "Durch Erstellung detaillierter 3D-Modelle aus mehreren Fotografien", nl: "Door gedetailleerde 3D-modellen te creëren uit meerdere foto's" },
          { en: "By analyzing metal composition", es: "Analizando composición metálica", de: "Durch Analyse der Metallzusammensetzung", nl: "Door metaalsamenstelling te analyseren" },
          { en: "By measuring magnetic properties", es: "Midiendo propiedades magnéticas", de: "Durch Messung magnetischer Eigenschaften", nl: "Door magnetische eigenschappen te meten" },
          { en: "By testing hardness levels", es: "Probando niveles de dureza", de: "Durch Prüfung von Härtegraden", nl: "Door hardheid niveaus te testen" }
        ],
        correct: 0,
        explanation: {
          en: "Photogrammetry creates precise 3D digital models of coins from multiple overlapping photographs, capturing detailed surface information including wear patterns, die characteristics, and minute details. These models enable remote study, accurate measurements, virtual exhibitions, and permanent documentation that preserves coin details for future research.",
          es: "La fotogrametría crea modelos digitales 3D precisos de monedas a partir de múltiples fotografías superpuestas, capturando información detallada de superficie incluyendo patrones de desgaste, características de troquel y detalles minutos. Estos modelos permiten estudio remoto, mediciones precisas, exhibiciones virtuales y documentación permanente que preserva detalles de monedas para investigación futura.",
          de: "Fotogrammetrie erstellt präzise 3D-digitale Modelle von Münzen aus mehreren überlappenden Fotografien und erfasst detaillierte Oberflächeninformationen einschließlich Verschleißmustern, Stempelmerkmalen und winzigen Details. Diese Modelle ermöglichen Fernstudium, genaue Messungen, virtuelle Ausstellungen und permanente Dokumentation, die Münzdetails für zukünftige Forschung bewahrt.",
          nl: "Fotogrammetrie creëert nauwkeurige 3D-digitale modellen van munten uit meerdere overlappende foto's, vastleggend gedetailleerde oppervlakte-informatie inclusief slijtagepatronen, stempelkenmerken en minuscule details. Deze modellen maken onderzoek op afstand mogelijk, nauwkeurige metingen, virtuele tentoonstellingen en permanente documentatie die muntdetails bewaart voor toekomstig onderzoek."
        }
      },
      {
        question: {
          en: "What role does artificial intelligence play in modern numismatic analysis?",
          es: "¿Qué papel juega la inteligencia artificial en el análisis numismático moderno?",
          de: "Welche Rolle spielt künstliche Intelligenz in der modernen numismatischen Analyse?",
          nl: "Welke rol speelt kunstmatige intelligentie in moderne numismatische analyse?"
        },
        options: [
          { en: "Pattern recognition for automated attribution and authentication", es: "Reconocimiento de patrones para atribución y autenticación automatizada", de: "Mustererkennung für automatisierte Zuordnung und Authentifizierung", nl: "Patroonherkenning voor geautomatiseerde toewijzing en authenticatie" },
          { en: "Physical coin handling", es: "Manejo físico de monedas", de: "Physische Münzhandhabung", nl: "Fysieke munthantering" },
          { en: "Metal extraction from ore", es: "Extracción de metal del mineral", de: "Metallextraktion aus Erz", nl: "Metaal extractie uit erts" },
          { en: "Coin minting processes", es: "Procesos de acuñación de monedas", de: "Münzprägeprozesse", nl: "Muntslag processen" }
        ],
        correct: 0,
        explanation: {
          en: "Artificial intelligence employs machine learning algorithms for pattern recognition, automatically identifying coin types, detecting varieties, and spotting potential forgeries through image analysis. AI can process vast databases of coin images to find patterns and connections that would take human researchers decades to discover manually.",
          es: "La inteligencia artificial emplea algoritmos de aprendizaje automático para reconocimiento de patrones, identificando automáticamente tipos de monedas, detectando variedades y detectando posibles falsificaciones a través de análisis de imagen. La IA puede procesar vastas bases de datos de imágenes de monedas para encontrar patrones y conexiones que tomarían décadas a investigadores humanos descubrir manualmente.",
          de: "Künstliche Intelligenz setzt maschinelle Lernalgorithmen für Mustererkennung ein, identifiziert automatisch Münztypen, erkennt Varianten und entdeckt potenzielle Fälschungen durch Bildanalyse. KI kann riesige Datenbanken von Münzbildern verarbeiten, um Muster und Verbindungen zu finden, deren manuelle Entdeckung menschliche Forscher Jahrzehnte kosten würde.",
          nl: "Kunstmatige intelligentie gebruikt machine learning algoritmen voor patroonherkenning, automatisch munttypes identificerend, variëteiten detecterend en potentiële vervalsingen spottend door beeldanalyse. AI kan uitgebreide databases van muntbeelden verwerken om patronen en verbindingen te vinden die menselijke onderzoekers decennia zouden kosten om handmatig te ontdekken."
        }
      },
      {
        question: {
          en: "How does synchrotron radiation analysis contribute to coin authentication?",
          es: "¿Cómo contribuye el análisis de radiación sincrotrón a la autenticación de monedas?",
          de: "Wie trägt Synchrotronstrahlung-Analyse zur Münzauthentifizierung bei?",
          nl: "Hoe draagt synchrotron stralings analyse bij aan muntauthenticatie?"
        },
        options: [
          { en: "By providing ultra-high-resolution elemental mapping and phase identification", es: "Proporcionando mapeo elemental de ultra alta resolución e identificación de fases", de: "Durch Bereitstellung von ultra-hochauflösender Elementkartierung und Phasenidentifikation", nl: "Door ultra-hoge resolutie element mapping en fase identificatie te bieden" },
          { en: "By measuring coin weight", es: "Midiendo peso de monedas", de: "Durch Münzgewichtsmessung", nl: "Door muntgewicht te meten" },
          { en: "By counting surface scratches", es: "Contando arañazos superficiales", de: "Durch Zählung von Oberflächenkratzern", nl: "Door oppervlakte krassen te tellen" },
          { en: "By testing coin flexibility", es: "Probando flexibilidad de monedas", de: "Durch Prüfung der Münzflexibilität", nl: "Door muntflexibiliteit te testen" }
        ],
        correct: 0,
        explanation: {
          en: "Synchrotron radiation provides intense, highly focused X-ray beams that enable ultra-high-resolution elemental mapping and crystalline phase identification in coins. This advanced technique can reveal microscopic details about metal structure, detect minute traces of specific elements, and identify manufacturing processes at the atomic level, providing definitive authentication evidence.",
          es: "La radiación sincrotrón proporciona haces de rayos X intensos y altamente enfocados que permiten mapeo elemental de ultra alta resolución e identificación de fases cristalinas en monedas. Esta técnica avanzada puede revelar detalles microscópicos sobre estructura metálica, detectar trazas minúsculas de elementos específicos e identificar procesos de fabricación a nivel atómico, proporcionando evidencia definitiva de autenticación.",
          de: "Synchrotronstrahlung liefert intensive, hochfokussierte Röntgenstrahlen, die ultra-hochauflösende Elementkartierung und kristalline Phasenidentifikation in Münzen ermöglichen. Diese fortschrittliche Technik kann mikroskopische Details über Metallstruktur offenbaren, winzige Spuren spezifischer Elemente erkennen und Herstellungsprozesse auf atomarer Ebene identifizieren, was definitive Authentifizierungsbeweise liefert.",
          nl: "Synchrotron straling biedt intense, zeer gefocuste röntgenstralen die ultra-hoge resolutie element mapping en kristallijne fase identificatie in munten mogelijk maken. Deze geavanceerde techniek kan microscopische details over metaalstructuur onthullen, minuscule sporen van specifieke elementen detecteren en fabricageprocessen op atomair niveau identificeren, wat definitief authenticatiebewijs levert."
        }
      },
      {
        question: {
          en: "What future technology shows promise for non-destructive coin analysis?",
          es: "¿Qué tecnología futura muestra promesa para análisis no destructivo de monedas?",
          de: "Welche Zukunftstechnologie zeigt Potenzial für zerstörungsfreie Münzanalyse?",
          nl: "Welke toekomstige technologie toont belofte voor niet-destructieve muntanalyse?"
        },
        options: [
          { en: "Terahertz spectroscopy for subsurface imaging", es: "Espectroscopia de terahercios para imagen subsuperficial", de: "Terahertz-Spektroskopie für Untergrund-Bildgebung", nl: "Terahertz spectroscopie voor ondergrondse beeldvorming" },
          { en: "Mechanical drilling", es: "Perforación mecánica", de: "Mechanisches Bohren", nl: "Mechanisch boren" },
          { en: "Chemical etching", es: "Grabado químico", de: "Chemisches Ätzen", nl: "Chemisch etsen" },
          { en: "Physical sectioning", es: "Seccionamiento físico", de: "Physische Sektionierung", nl: "Fysieke doorsnede" }
        ],
        correct: 0,
        explanation: {
          en: "Terahertz spectroscopy shows great promise for non-destructive coin analysis by penetrating surfaces to reveal internal structures, hidden layers, and subsurface features without any damage. This emerging technology can detect internal composition variations, hidden repairs, and core structures that other non-destructive methods cannot reveal.",
          es: "La espectroscopia de terahercios muestra gran promesa para análisis no destructivo de monedas penetrando superficies para revelar estructuras internas, capas ocultas y características subsuperficiales sin ningún daño. Esta tecnología emergente puede detectar variaciones de composición interna, reparaciones ocultas y estructuras centrales que otros métodos no destructivos no pueden revelar.",
          de: "Terahertz-Spektroskopie zeigt großes Potenzial für zerstörungsfreie Münzanalyse, indem sie Oberflächen durchdringt, um interne Strukturen, versteckte Schichten und unterirdische Merkmale ohne Schäden zu offenbaren. Diese aufkommende Technologie kann interne Zusammensetzungsvariationen, versteckte Reparaturen und Kernstrukturen erkennen, die andere zerstörungsfreie Methoden nicht offenbaren können.",
          nl: "Terahertz spectroscopie toont grote belofte voor niet-destructieve muntanalyse door oppervlakken te penetreren om interne structuren, verborgen lagen en ondergrondse kenmerken te onthullen zonder enige schade. Deze opkomende technologie kan interne samenstellingsvariaties, verborgen reparaties en kernstructuren detecteren die andere niet-destructieve methoden niet kunnen onthullen."
        }
      },
      {
        question: {
          en: "What is unique about the 'Eid Mar' denarius?",
          es: "¿Qué es único sobre el denario 'Eid Mar'?",
          de: "Was ist einzigartig am 'Eid Mar' Denar?",
          nl: "Wat is uniek aan de 'Eid Mar' denarius?"
        },
        options: [
          { en: "Commemorates Caesar's assassination, one of history's most famous political murders", es: "Conmemora el asesinato de César, uno de los asesinatos políticos más famosos de la historia", de: "Gedenkt Caesars Ermordung, einen der berühmtesten politischen Morde der Geschichte", nl: "Herdenkt de moord op Caesar, een van de beroemdste politieke moorden uit de geschiedenis" },
          { en: "First Roman gold coin", es: "Primera moneda de oro romana", de: "Erste römische Goldmünze", nl: "Eerste Romeinse gouden munt" },
          { en: "Largest ancient coin ever minted", es: "Moneda antigua más grande jamás acuñada", de: "Größte jemals geprägte antike Münze", nl: "Grootste antieke munt ooit geslagen" },
          { en: "Made entirely of platinum", es: "Hecha completamente de platino", de: "Vollständig aus Platin hergestellt", nl: "Volledig gemaakt van platina" }
        ],
        correct: 0,
        explanation: {
          en: "The 'Eid Mar' (Ides of March) denarius was struck by Brutus in 42 BC to commemorate Julius Caesar's assassination. It features two daggers and a liberty cap, symbolizing the 'liberation' of Rome. Only about 100 specimens are known, with one selling for $4.2 million in 2020. It's one of the most historically significant ancient coins.",
          es: "El denario 'Eid Mar' (Idus de Marzo) fue acuñado por Bruto en 42 a.C. para conmemorar el asesinato de Julio César. Presenta dos dagas y un gorro de la libertad, simbolizando la 'liberación' de Roma. Solo se conocen unos 100 especímenes, con uno vendiéndose por $4.2 millones en 2020. Es una de las monedas antiguas más históricamente significativas.",
          de: "Der 'Eid Mar' (Iden des März) Denar wurde 42 v. Chr. von Brutus geprägt, um Julius Caesars Ermordung zu gedenken. Er zeigt zwei Dolche und eine Freiheitsmütze, die die 'Befreiung' Roms symbolisieren. Nur etwa 100 Exemplare sind bekannt, wobei eines 2020 für 4,2 Millionen Dollar verkauft wurde. Es ist eine der historisch bedeutsamsten antiken Münzen.",
          nl: "De 'Eid Mar' (Ides van Maart) denarius werd in 42 v.Chr. geslagen door Brutus om de moord op Julius Caesar te herdenken. Het toont twee dolken en een vrijheidsmuts, die de 'bevrijding' van Rome symboliseren. Slechts ongeveer 100 exemplaren zijn bekend, waarbij één in 2020 voor $4,2 miljoen werd verkocht. Het is een van de historisch meest significante antieke munten."
        }
      },
      {
        question: {
          en: "What was special about the 1804 Silver Dollar 'Class I' specimens?",
          es: "¿Qué fue especial sobre los especímenes de 'Clase I' del Dólar de Plata de 1804?",
          de: "Was war besonders an den 'Klasse I' Exemplaren des 1804 Silberdollars?",
          nl: "Wat was speciaal aan de 'Klasse I' exemplaren van de 1804 Zilveren Dollar?"
        },
        options: [
          { en: "Actually struck in the 1830s as diplomatic gifts, not 1804", es: "Realmente acuñadas en los años 1830 como regalos diplomáticos, no en 1804", de: "Tatsächlich in den 1830er Jahren als diplomatische Geschenke geprägt, nicht 1804", nl: "Daadwerkelijk geslagen in de jaren 1830 als diplomatieke geschenken, niet 1804" },
          { en: "Made of pure gold instead of silver", es: "Hechas de oro puro en lugar de plata", de: "Aus reinem Gold statt Silber hergestellt", nl: "Gemaakt van puur goud in plaats van zilver" },
          { en: "Largest US coins ever produced", es: "Monedas estadounidenses más grandes jamás producidas", de: "Größte jemals produzierte US-Münzen", nl: "Grootste Amerikaanse munten ooit geproduceerd" },
          { en: "Featured a misprint of the date", es: "Presentaban un error de impresión de la fecha", de: "Zeigten einen Druckfehler des Datums", nl: "Vertoonden een drukfout van de datum" }
        ],
        correct: 0,
        explanation: {
          en: "The 1804 Silver Dollar 'Class I' specimens, known as the 'King of American Coins,' were actually struck in the 1834-1835 period as diplomatic presentation pieces, not in 1804. Only 15 examples are known across all classes. One specimen sold for over $4 million, representing one of numismatics' greatest mysteries and most valuable coins.",
          es: "Los especímenes de 'Clase I' del Dólar de Plata de 1804, conocidos como el 'Rey de las Monedas Americanas,' fueron realmente acuñados en el período 1834-1835 como piezas de presentación diplomática, no en 1804. Solo se conocen 15 ejemplos en todas las clases. Un espécimen se vendió por más de $4 millones, representando uno de los mayores misterios numismáticos y monedas más valiosas.",
          de: "Die 'Klasse I' Exemplare des 1804 Silberdollars, bekannt als der 'König der amerikanischen Münzen,' wurden tatsächlich im Zeitraum 1834-1835 als diplomatische Präsentationsstücke geprägt, nicht 1804. Nur 15 Beispiele sind über alle Klassen bekannt. Ein Exemplar wurde für über 4 Millionen Dollar verkauft und repräsentiert eines der größten numismatischen Mysterien und wertvollsten Münzen.",
          nl: "De 'Klasse I' exemplaren van de 1804 Zilveren Dollar, bekend als de 'Koning van Amerikaanse Munten,' werden daadwerkelijk geslagen in de periode 1834-1835 als diplomatieke presentatiestukken, niet in 1804. Slechts 15 voorbeelden zijn bekend over alle klassen. Eén exemplaar werd verkocht voor meer dan $4 miljoen, wat een van de grootste numismatische mysteries en meest waardevolle munten vertegenwoordigt."
        }
      },
      {
        question: {
          en: "What makes the 'Widows Mite' biblically and historically significant?",
          es: "¿Qué hace que la 'Óbolo de la Viuda' sea bíblica e históricamente significativa?",
          de: "Was macht den 'Scherflein der Witwe' biblisch und historisch bedeutsam?",
          nl: "Wat maakt de 'Penning van de Weduwe' bijbels en historisch significant?"
        },
        options: [
          { en: "Small bronze coin mentioned in the Bible, from Hasmonean period Judea", es: "Pequeña moneda de bronce mencionada en la Biblia, del período Hasmoneano de Judea", de: "Kleine Bronzemünze, die in der Bibel erwähnt wird, aus der hasmonäischen Periode Judäas", nl: "Kleine bronzen munt genoemd in de Bijbel, uit de Hasmoneïsche periode van Judea" },
          { en: "First gold coin mentioned in scripture", es: "Primera moneda de oro mencionada en las escrituras", de: "Erste in der Schrift erwähnte Goldmünze", nl: "Eerste gouden munt genoemd in de geschriften" },
          { en: "Largest ancient coin ever found", es: "Moneda antigua más grande jamás encontrada", de: "Größte jemals gefundene antike Münze", nl: "Grootste antieke munt ooit gevonden" },
          { en: "Coin used exclusively by Roman emperors", es: "Moneda usada exclusivamente por emperadores romanos", de: "Münze, die ausschließlich von römischen Kaisern verwendet wurde", nl: "Munt uitsluitend gebruikt door Romeinse keizers" }
        ],
        correct: 0,
        explanation: {
          en: "The 'Widow's Mite' refers to small bronze Hasmonean lepton coins from ancient Judea (circa 103-76 BC), mentioned in Mark 12:41-44 and Luke 21:1-4. These tiny coins represent the humble offering given by a poor widow, as told by Jesus. Despite their small size and common nature in antiquity, their biblical significance makes them highly collectible today.",
          es: "La 'Óbolo de la Viuda' se refiere a pequeñas monedas de bronce lepton Hasmoneanas de la antigua Judea (circa 103-76 a.C.), mencionadas en Marcos 12:41-44 y Lucas 21:1-4. Estas pequeñas monedas representan la humilde ofrenda dada por una viuda pobre, como lo contó Jesús. A pesar de su pequeño tamaño y naturaleza común en la antigüedad, su significado bíblico las hace muy coleccionables hoy.",
          de: "Der 'Scherflein der Witwe' bezieht sich auf kleine bronzene hasmonäische Lepton-Münzen aus dem antiken Judäa (ca. 103-76 v. Chr.), erwähnt in Markus 12:41-44 und Lukas 21:1-4. Diese winzigen Münzen repräsentieren die bescheidene Gabe einer armen Witwe, wie von Jesus erzählt. Trotz ihrer kleinen Größe und gewöhnlichen Natur in der Antike macht ihre biblische Bedeutung sie heute sehr sammelwürdig.",
          nl: "De 'Penning van de Weduwe' verwijst naar kleine bronzen Hasmoneïsche lepton munten uit het oude Judea (circa 103-76 v.Chr.), genoemd in Marcus 12:41-44 en Lucas 21:1-4. Deze kleine munten vertegenwoordigen de nederige gave gegeven door een arme weduwe, zoals verteld door Jezus. Ondanks hun kleine formaat en gewone aard in de oudheid, maakt hun bijbelse betekenis ze vandaag zeer verzamelbaar."
        }
      },
      {
        question: {
          en: "What was the 'Continental Dollar' of 1776?",
          es: "¿Qué fue el 'Dólar Continental' de 1776?",
          de: "Was war der 'Continental Dollar' von 1776?",
          nl: "Wat was de 'Continental Dollar' van 1776?"
        },
        options: [
          { en: "First dollar-denominated coin proposed for the United States", es: "Primera moneda denominada en dólares propuesta para Estados Unidos", de: "Erste auf Dollar lautende Münze, die für die Vereinigten Staaten vorgeschlagen wurde", nl: "Eerste in dollars gedenomineerde munt voorgesteld voor de Verenigde Staten" },
          { en: "British colonial currency", es: "Moneda colonial británica", de: "Britische Kolonialwährung", nl: "Britse koloniale valuta" },
          { en: "French military token", es: "Ficha militar francesa", de: "Französischer Militär-Token", nl: "Franse militaire token" },
          { en: "Spanish trade coin", es: "Moneda comercial española", de: "Spanische Handelsmünze", nl: "Spaanse handelsmunt" }
        ],
        correct: 0,
        explanation: {
          en: "The Continental Dollar was a pattern coin struck in 1776, possibly as a proposal for the first dollar-denominated United States currency. The debate continues whether they were struck in pewter, brass, or silver. Only about 100 are known to exist, making them extremely rare and historically significant as they represent America's transition from colonial to independent currency.",
          es: "El Dólar Continental fue una moneda patrón acuñada en 1776, posiblemente como propuesta para la primera moneda estadounidense denominada en dólares. El debate continúa sobre si fueron acuñadas en peltre, latón o plata. Solo se conocen unos 100 ejemplares, haciéndolas extremadamente raras e históricamente significativas ya que representan la transición de América de moneda colonial a independiente.",
          de: "Der Continental Dollar war eine Mustermünze, die 1776 geprägt wurde, möglicherweise als Vorschlag für die erste auf Dollar lautende Währung der Vereinigten Staaten. Die Debatte geht weiter, ob sie in Zinn, Messing oder Silber geprägt wurden. Nur etwa 100 sind bekannt, was sie extrem selten und historisch bedeutsam macht, da sie Amerikas Übergang von kolonialer zu unabhängiger Währung repräsentieren.",
          nl: "De Continental Dollar was een patroonmunt geslagen in 1776, mogelijk als voorstel voor de eerste in dollars gedenomineerde valuta van de Verenigde Staten. Het debat gaat door of ze werden geslagen in tin, messing of zilver. Slechts ongeveer 100 zijn bekend, waardoor ze extreem zeldzaam en historisch significant zijn omdat ze Amerika's overgang van koloniale naar onafhankelijke valuta vertegenwoordigen."
        }
      },
      {
        question: {
          en: "What is a 'shipwreck coin' and why are they valued?",
          es: "¿Qué es una 'moneda de naufragio' y por qué son valoradas?",
          de: "Was ist eine 'Schiffswrack-Münze' und warum sind sie wertvoll?",
          nl: "Wat is een 'scheepswrakmunt' en waarom zijn ze waardevol?"
        },
        options: [
          { en: "Coins recovered from sunken ships, valued for provenance and historical context", es: "Monedas recuperadas de barcos hundidos, valoradas por procedencia y contexto histórico", de: "Münzen, die von gesunkenen Schiffen geborgen wurden, geschätzt für Herkunft und historischen Kontext", nl: "Munten geborgen van gezonken schepen, gewaardeerd om herkomst en historische context" },
          { en: "Coins with ship designs", es: "Monedas con diseños de barcos", de: "Münzen mit Schiffsdesigns", nl: "Munten met scheepsontwerpen" },
          { en: "Naval payment certificates", es: "Certificados de pago naval", de: "Marine-Zahlungszertifikate", nl: "Marine betalingscertificaten" },
          { en: "Commemorative maritime coins", es: "Monedas marítimas conmemorativas", de: "Maritime Gedenkmünzen", nl: "Maritieme herdenkingsmunten" }
        ],
        correct: 0,
        explanation: {
          en: "Shipwreck coins are recovered from sunken vessels and are highly valued for their documented provenance and historical context. Famous examples include coins from the SS Central America ('Ship of Gold'), Nuestra Señora de Atocha, and HMS Sussex. Their underwater preservation often creates unique surface characteristics, and each coin tells a story of maritime history and trade routes.",
          es: "Las monedas de naufragio son recuperadas de naves hundidas y son altamente valoradas por su procedencia documentada y contexto histórico. Ejemplos famosos incluyen monedas del SS Central America ('Barco de Oro'), Nuestra Señora de Atocha y HMS Sussex. Su preservación submarina a menudo crea características de superficie únicas, y cada moneda cuenta una historia de historia marítima y rutas comerciales.",
          de: "Schiffswrack-Münzen werden von gesunkenen Schiffen geborgen und sind hochgeschätzt für ihre dokumentierte Herkunft und ihren historischen Kontext. Berühmte Beispiele sind Münzen von der SS Central America ('Schiff des Goldes'), Nuestra Señora de Atocha und HMS Sussex. Ihre Unterwasserkonservierung erzeugt oft einzigartige Oberflächenmerkmale, und jede Münze erzählt eine Geschichte maritimer Geschichte und Handelsrouten.",
          nl: "Scheepswrakmunten worden geborgen van gezonken schepen en zijn zeer gewaardeerd om hun gedocumenteerde herkomst en historische context. Beroemde voorbeelden zijn munten van de SS Central America ('Schip van Goud'), Nuestra Señora de Atocha en HMS Sussex. Hun onderwaterbehoud creëert vaak unieke oppervlaktekenmerken, en elke munt vertelt een verhaal van maritieme geschiedenis en handelsroutes."
        }
      },
      {
        question: {
          en: "What was the 'Fugio Cent' and its historical importance?",
          es: "¿Qué fue el 'Centavo Fugio' y su importancia histórica?",
          de: "Was war der 'Fugio Cent' und seine historische Bedeutung?",
          nl: "Wat was de 'Fugio Cent' en zijn historische belang?"
        },
        options: [
          { en: "First official coin authorized by the United States Congress in 1787", es: "Primera moneda oficial autorizada por el Congreso de Estados Unidos en 1787", de: "Erste offizielle Münze, die 1787 vom US-Kongress autorisiert wurde", nl: "Eerste officiële munt geautoriseerd door het Amerikaanse Congres in 1787" },
          { en: "Confederate war currency", es: "Moneda de guerra confederada", de: "Konföderierte Kriegswährung", nl: "Geconfedereerde oorlogsvaluta" },
          { en: "British colonial token", es: "Ficha colonial británica", de: "Britischer Kolonial-Token", nl: "Britse koloniale token" },
          { en: "French Revolutionary coin", es: "Moneda revolucionaria francesa", de: "Französische Revolutionsmünze", nl: "Franse revolutionaire munt" }
        ],
        correct: 0,
        explanation: {
          en: "The Fugio Cent was authorized by Congress on April 21, 1787, making it the first official coin of the United States. Designed possibly by Benjamin Franklin, it features a sundial with 'Fugio' (Latin for 'I fly/flee') and the motto 'Mind Your Business.' These coins represent the nation's earliest federal coinage and are highly prized by collectors.",
          es: "El Centavo Fugio fue autorizado por el Congreso el 21 de abril de 1787, haciéndolo la primera moneda oficial de Estados Unidos. Diseñado posiblemente por Benjamin Franklin, presenta un reloj de sol con 'Fugio' (latín para 'Yo vuelo/huyo') y el lema 'Mind Your Business.' Estas monedas representan la acuñación federal más temprana de la nación y son muy valoradas por coleccionistas.",
          de: "Der Fugio Cent wurde am 21. April 1787 vom Kongress autorisiert und war damit die erste offizielle Münze der Vereinigten Staaten. Möglicherweise von Benjamin Franklin entworfen, zeigt sie eine Sonnenuhr mit 'Fugio' (Latein für 'Ich fliege/fliehe') und dem Motto 'Mind Your Business.' Diese Münzen repräsentieren die früheste Bundesprägung der Nation und sind von Sammlern sehr geschätzt.",
          nl: "De Fugio Cent werd op 21 april 1787 geautoriseerd door het Congres, waardoor het de eerste officiële munt van de Verenigde Staten werd. Mogelijk ontworpen door Benjamin Franklin, toont het een zonnewijzer met 'Fugio' (Latijn voor 'Ik vlieg/vlucht') en het motto 'Mind Your Business.' Deze munten vertegenwoordigen de vroegste federale muntslag van de natie en zijn zeer gewaardeerd door verzamelaars."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();