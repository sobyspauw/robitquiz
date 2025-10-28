// T-Rex Family Quiz - Level 7: Advanced Knowledge
(function() {
  const level7 = {
    name: {
      en: "T-Rex Family Level 7",
      es: "Familia T-Rex Nivel 7",
      de: "T-Rex Familie Stufe 7",
      nl: "T-Rex Familie Level 7"
    },
    questions: [
      {
        question: {
          en: "Which specific biomolecular analysis revealed collagen proteins in T. rex femur bones?",
          es: "¿Qué análisis biomolecular específico reveló proteínas de colágeno en los huesos del fémur de T. rex?",
          de: "Welche spezifische biomolekulare Analyse enthüllte Kollagenproteine in T. rex-Oberschenkelknochen?",
          nl: "Welke specifieke biomoleculaire analyse onthulde collageeneiwitten in T. rex dijbeenbotten?"
        },
        options: [
          { en: "Mass spectrometry analysis", es: "Análisis de espectrometría de masas", de: "Massenspektrometrie-Analyse", nl: "Massaspectrometrie analyse" },
          { en: "DNA sequencing", es: "Secuenciación de ADN", de: "DNA-Sequenzierung", nl: "DNA sequencing" },
          { en: "Radiocarbon dating", es: "Datación por radiocarbono", de: "Radiokohlenstoff-Datierung", nl: "Radiokoolstof datering" },
          { en: "X-ray crystallography", es: "Cristalografía de rayos X", de: "Röntgenkristallographie", nl: "Röntgenkristallografie" }
        ],
        correct: 0,
        explanation: {
          en: "Mass spectrometry analysis of T. rex fossils revealed collagen protein sequences, providing unprecedented molecular evidence linking dinosaurs to modern birds and confirming their evolutionary relationship.",
          es: "El análisis de espectrometría de masas de fósiles de T. rex reveló secuencias de proteínas de colágeno, proporcionando evidencia molecular sin precedentes que vincula a los dinosaurios con las aves modernas y confirma su relación evolutiva.",
          de: "Massenspektrometrie-Analyse von T. rex-Fossilien enthüllte Kollagenproteinsequenzen und lieferte beispiellose molekulare Beweise, die Dinosaurier mit modernen Vögeln verknüpfen und ihre evolutionäre Verwandtschaft bestätigen.",
          nl: "Massaspectrometrie analyse van T. rex fossielen onthulde collageen eiwit sequenties, wat ongekend moleculair bewijs leverde dat dinosauriërs verbindt met moderne vogels en hun evolutionaire verwantschap bevestigt."
        }
      },
      {
        question: {
          en: "What cranial pneumatization pattern distinguishes advanced tyrannosaurids from primitive forms?",
          es: "¿Qué patrón de neumatización craneal distingue a los tiranosáuridos avanzados de las formas primitivas?",
          de: "Welches kraniale Pneumatisierungsmuster unterscheidet fortgeschrittene Tyrannosauriden von primitiven Formen?",
          nl: "Welk schedel pneumatisatiepatroon onderscheidt geavanceerde tyrannosauriden van primitieve vormen?"
        },
        options: [
          { en: "Complete absence of air spaces", es: "Ausencia completa de espacios de aire", de: "Vollständige Abwesenheit von Lufträumen", nl: "Volledige afwezigheid van luchtruimtes" },
          { en: "Extensive pneumatization of frontal and parietal bones", es: "Neumatización extensa de huesos frontales y parietales", de: "Ausgedehnte Pneumatisierung der Stirn- und Scheitelbeine", nl: "Uitgebreide pneumatisatie van voorhoofd en wandbeenderen" },
          { en: "Only maxillary air sacs", es: "Solo sacos de aire maxilares", de: "Nur Kieferhöhlen", nl: "Alleen maxillaire luchtzakken" },
          { en: "Single frontal air chamber", es: "Cámara de aire frontal única", de: "Einzelne Stirnluftkammer", nl: "Enkele frontale luchtkamer" }
        ],
        correct: 1,
        explanation: {
          en: "Advanced tyrannosaurids like T. rex show extensive cranial pneumatization, particularly in frontal and parietal bones, reducing skull weight while maintaining structural integrity—a key evolutionary advancement.",
          es: "Los tiranosáuridos avanzados como T. rex muestran neumatización craneal extensa, particularmente en huesos frontales y parietales, reduciendo el peso del cráneo mientras mantienen la integridad estructural—un avance evolutivo clave.",
          de: "Fortgeschrittene Tyrannosauriden wie T. rex zeigen ausgedehnte kraniale Pneumatisierung, besonders in Stirn- und Scheitelbeinen, wodurch das Schädelgewicht reduziert wird, während die strukturelle Integrität erhalten bleibt—ein wichtiger evolutionärer Fortschritt.",
          nl: "Geavanceerde tyrannosauriden zoals T. rex tonen uitgebreide schedel pneumatisatie, vooral in voorhoofd- en wandbeenderen, wat schedelgewicht vermindert terwijl structurele integriteit behouden blijft—een belangrijke evolutionaire vooruitgang."
        }
      },
      {
        question: {
          en: "Which isotopic ratio in T. rex bone phosphate indicates its trophic level position?",
          es: "¿Qué relación isotópica en el fosfato óseo del T. rex indica su posición en el nivel trófico?",
          de: "Welches Isotopenverhältnis im Knochenphosphat von T. rex zeigt seine trophische Ebene an?",
          nl: "Welke isotoop verhouding in T. rex botfosfaat geeft zijn trofische niveau positie aan?"
        },
        options: [
          { en: "Carbon-13 to Carbon-12 ratio", es: "Relación Carbono-13 a Carbono-12", de: "Kohlenstoff-13 zu Kohlenstoff-12 Verhältnis", nl: "Koolstof-13 tot Koolstof-12 verhouding" },
          { en: "Nitrogen-15 to Nitrogen-14 ratio", es: "Relación Nitrógeno-15 a Nitrógeno-14", de: "Stickstoff-15 zu Stickstoff-14 Verhältnis", nl: "Stikstof-15 tot Stikstof-14 verhouding" },
          { en: "Oxygen-18 to Oxygen-16 ratio", es: "Relación Oxígeno-18 a Oxígeno-16", de: "Sauerstoff-18 zu Sauerstoff-16 Verhältnis", nl: "Zuurstof-18 tot Zuurstof-16 verhouding" },
          { en: "Sulfur-34 to Sulfur-32 ratio", es: "Relación Azufre-34 a Azufre-32", de: "Schwefel-34 zu Schwefel-32 Verhältnis", nl: "Zwavel-34 tot Zwavel-32 verhouding" }
        ],
        correct: 1,
        explanation: {
          en: "Nitrogen-15 to Nitrogen-14 ratios in bone collagen increase with each trophic level. T. rex shows elevated δ15N values, confirming its position as an apex predator at the top of Late Cretaceous food webs.",
          es: "Las relaciones Nitrógeno-15 a Nitrógeno-14 en colágeno óseo aumentan con cada nivel trófico. T. rex muestra valores δ15N elevados, confirmando su posición como depredador ápice en la cima de las redes alimentarias del Cretácico Tardío.",
          de: "Stickstoff-15 zu Stickstoff-14 Verhältnisse im Knochenkollagen steigen mit jeder trophischen Ebene. T. rex zeigt erhöhte δ15N-Werte, was seine Position als Spitzenprädator an der Spitze der späten Kreidezeit-Nahrungsnetze bestätigt.",
          nl: "Stikstof-15 tot Stikstof-14 verhoudingen in botcollageen nemen toe met elk trofisch niveau. T. rex toont verhoogde δ15N waarden, wat zijn positie als apex roofdier aan de top van Late Krijt voedselwebben bevestigt."
        }
      },
      {
        question: {
          en: "What specific feature of T. rex lacrimal bone indicates enhanced tear production?",
          es: "¿Qué característica específica del hueso lacrimal del T. rex indica producción de lágrimas mejorada?",
          de: "Welches spezifische Merkmal des T. rex-Tränenbeins deutet auf verstärkte Tränenproduktion hin?",
          nl: "Welk specifiek kenmerk van T. rex traanbot duidt op verhoogde traanproductie?"
        },
        options: [
          { en: "Enlarged lacrimal foramen", es: "Foramen lacrimal agrandado", de: "Vergrößertes Tränenforamen", nl: "Vergroot traanforamen" },
          { en: "Reduced lacrimal surface", es: "Superficie lacrimal reducida", de: "Reduzierte Tränenoberfläche", nl: "Verminderd traanoppervlak" },
          { en: "Absent lacrimal duct", es: "Conducto lacrimal ausente", de: "Fehlender Tränenkanal", nl: "Afwezige traankanaal" },
          { en: "Fused lacrimal structure", es: "Estructura lacrimal fusionada", de: "Verschmolzene Tränenstruktur", nl: "Vergroeide traanstructuur" }
        ],
        correct: 0,
        explanation: {
          en: "T. rex possessed an enlarged lacrimal foramen, suggesting enhanced tear gland function possibly for eye protection during feeding on carcasses or for advanced visual communication behaviors.",
          es: "T. rex poseía un foramen lacrimal agrandado, sugiriendo función mejorada de glándulas lacrimales posiblemente para protección ocular durante la alimentación de cadáveres o para comportamientos avanzados de comunicación visual.",
          de: "T. rex besaß ein vergrößertes Tränenforamen, was auf verbesserte Trändrüsenfunktion hindeutet, möglicherweise zum Augenschutz beim Fressen von Kadavern oder für fortgeschrittene visuelle Kommunikationsverhalten.",
          nl: "T. rex bezat een vergroot traanforamen, wat verbeterde traanklierfunctie suggereert mogelijk voor oogbescherming tijdens het voeden op karkassen of voor geavanceerde visuele communicatiegedragingen."
        }
      },
      {
        question: {
          en: "Which microstructural bone feature indicates T. rex experienced seasonal stress periods?",
          es: "¿Qué característica microestructural del hueso indica que T. rex experimentó períodos de estrés estacional?",
          de: "Welches mikrostrukturelle Knochenmerkmal zeigt, dass T. rex saisonale Stressperioden erlebte?",
          nl: "Welk microstructureel bot kenmerk geeft aan dat T. rex seizoensgebonden stressperioden ervaarde?"
        },
        options: [
          { en: "Uniform bone density throughout", es: "Densidad ósea uniforme en todo", de: "Einheitliche Knochendichte überall", nl: "Uniforme botdichtheid overal" },
          { en: "Lines of arrested growth (LAGs) in cortical bone", es: "Líneas de crecimiento arrestado (LAGs) en hueso cortical", de: "Wachstumsstillstandslinien (LAGs) im Kortikalisknochen", nl: "Lijnen van gestopte groei (LAGs) in corticaal bot" },
          { en: "Completely avascular bone tissue", es: "Tejido óseo completamente avascular", de: "Völlig avaskuläres Knochengewebe", nl: "Volledig avasculair botweefsel" },
          { en: "Random osteon distribution", es: "Distribución aleatoria de osteonas", de: "Zufällige Osteonverteilung", nl: "Willekeurige osteon distributie" }
        ],
        correct: 1,
        explanation: {
          en: "Lines of Arrested Growth (LAGs) in T. rex cortical bone represent periodic growth cessation, likely due to seasonal resource scarcity, disease, or environmental stress, providing insights into their life history.",
          es: "Las Líneas de Crecimiento Arrestado (LAGs) en el hueso cortical del T. rex representan cesación periódica del crecimiento, probablemente debido a escasez estacional de recursos, enfermedad o estrés ambiental, proporcionando perspectivas sobre su historia de vida.",
          de: "Wachstumsstillstandslinien (LAGs) im T. rex-Kortikalisknochen repräsentieren periodische Wachstumsstopps, wahrscheinlich aufgrund saisonaler Ressourcenknappheit, Krankheit oder Umweltstress und geben Einblicke in ihre Lebensgeschichte.",
          nl: "Lijnen van Gestopte Groei (LAGs) in T. rex corticaal bot vertegenwoordigen periodieke groeistilstand, waarschijnlijk door seizoensgebonden hulpbronschaarste, ziekte of omgevingsstress, wat inzichten geeft in hun levensgeschiedenis."
        }
      },
      {
        question: {
          en: "What neuroanatomical evidence suggests T. rex had enhanced proprioception?",
          es: "¿Qué evidencia neuroanatómica sugiere que T. rex tenía propiocepción mejorada?",
          de: "Welche neuroanatomischen Belege deuten darauf hin, dass T. rex verbesserte Propriozeption hatte?",
          nl: "Welk neuroanatomisch bewijs suggereert dat T. rex verbeterde proprioceptie had?"
        },
        options: [
          { en: "Reduced cerebellum size", es: "Tamaño de cerebelo reducido", de: "Reduzierte Kleinhirngröße", nl: "Verkleinde kleine hersenen grootte" },
          { en: "Enlarged cerebellum and vestibular complex", es: "Cerebelo y complejo vestibular agrandados", de: "Vergrößertes Kleinhirn und Vestibularkomplex", nl: "Vergrote kleine hersenen en vestibulair complex" },
          { en: "Absent balance organs", es: "Órganos de equilibrio ausentes", de: "Fehlende Gleichgewichtsorgane", nl: "Afwezige evenwichtsorganen" },
          { en: "Simple brain stem structure", es: "Estructura simple del tallo cerebral", de: "Einfache Hirnstammstruktur", nl: "Eenvoudige hersenstam structuur" }
        ],
        correct: 1,
        explanation: {
          en: "T. rex endocranial casts reveal an enlarged cerebellum and sophisticated vestibular system, indicating enhanced proprioception crucial for coordinating its massive body during complex hunting maneuvers.",
          es: "Los moldes endocraneales del T. rex revelan un cerebelo agrandado y sistema vestibular sofisticado, indicando propiocepción mejorada crucial para coordinar su cuerpo masivo durante maniobras complejas de caza.",
          de: "T. rex-Endokranialabgüsse zeigen ein vergrößertes Kleinhirn und ausgeklügeltes Vestibularsystem, was auf verbesserte Propriozeption hindeutet, die für die Koordination seines massiven Körpers während komplexer Jagdmanöver entscheidend ist.",
          nl: "T. rex endocraniële afgietsels onthullen vergrote kleine hersenen en verfijnd vestibulair systeem, wat verbeterde proprioceptie aangeeft cruciaal voor coördineren van zijn massieve lichaam tijdens complexe jachtmanoeuvres."
        }
      },
      {
        question: {
          en: "Which specific amino acid sequence in T. rex collagen supports bird-dinosaur phylogenetic relationship?",
          es: "¿Qué secuencia específica de aminoácidos en el colágeno de T. rex apoya la relación filogenética ave-dinosaurio?",
          de: "Welche spezifische Aminosäuresequenz im T. rex-Kollagen stützt die phylogenetische Beziehung zwischen Vögeln und Dinosauriern?",
          nl: "Welke specifieke aminozuursequentie in T. rex collageen ondersteunt vogel-dinosauriër fylogenetische relatie?"
        },
        options: [
          { en: "Glycine-Proline-Hydroxyproline repeat", es: "Repetición Glicina-Prolina-Hidroxiprolina", de: "Glycin-Prolin-Hydroxyprolin-Wiederholung", nl: "Glycine-Proline-Hydroxyproline herhaling" },
          { en: "Tyrosine-rich terminal sequence", es: "Secuencia terminal rica en tirosina", de: "Tyrosinreiche Endsequenz", nl: "Tyrosine-rijke eindsequentie" },
          { en: "Leucine-Isoleucine motif", es: "Motivo Leucina-Isoleucina", de: "Leucin-Isoleucin-Motiv", nl: "Leucine-Isoleucine motief" },
          { en: "Cysteine cross-linking pattern", es: "Patrón de entrecruzamiento de cisteína", de: "Cystein-Quervernetzungsmuster", nl: "Cysteine kruisverbinding patroon" }
        ],
        correct: 0,
        explanation: {
          en: "The characteristic Glycine-Proline-Hydroxyproline repeat in T. rex collagen matches avian collagen sequences more closely than reptilian ones, providing molecular evidence for the dinosaur-bird evolutionary connection.",
          es: "La repetición característica Glicina-Prolina-Hidroxiprolina en el colágeno de T. rex coincide más estrechamente con secuencias de colágeno aviares que con las reptilianas, proporcionando evidencia molecular para la conexión evolutiva dinosaurio-ave.",
          de: "Die charakteristische Glycin-Prolin-Hydroxyprolin-Wiederholung im T. rex-Kollagen stimmt enger mit aviären Kollagensequenzen überein als mit reptilienartigen und liefert molekulare Belege für die evolutionäre Verbindung zwischen Dinosauriern und Vögeln.",
          nl: "De karakteristieke Glycine-Proline-Hydroxyproline herhaling in T. rex collageen komt meer overeen met aviaire collageen sequenties dan met reptielensequenties, wat moleculair bewijs levert voor de dinosauriër-vogel evolutionaire verbinding."
        }
      },
      {
        question: {
          en: "What paleopathological evidence indicates T. rex engaged in intraspecific combat?",
          es: "¿Qué evidencia paleopatológica indica que T. rex participaba en combate intraespecífico?",
          de: "Welche paläopathologischen Belege deuten darauf hin, dass T. rex intraspezifische Kämpfe führte?",
          nl: "Welk paleopathologisch bewijs geeft aan dat T. rex deelnam aan intraspecifieke gevechten?"
        },
        options: [
          { en: "Random bone fractures", es: "Fracturas óseas aleatorias", de: "Zufällige Knochenbrüche", nl: "Willekeurige botbreuken" },
          { en: "Healed bite marks matching T. rex tooth spacing", es: "Marcas de mordida curadas que coinciden con el espaciado dental del T. rex", de: "Geheilte Bissspuren, die dem T. rex-Zahnabstand entsprechen", nl: "Genezen beetwonden die overeenkomen met T. rex tandafstand" },
          { en: "Arthritis in all joints", es: "Artritis en todas las articulaciones", de: "Arthritis in allen Gelenken", nl: "Artritis in alle gewrichten" },
          { en: "Metabolic bone disease", es: "Enfermedad ósea metabólica", de: "Metabolische Knochenkrankheit", nl: "Metabolische botziekte" }
        ],
        correct: 1,
        explanation: {
          en: "Multiple T. rex specimens show healed bite marks with tooth spacing and depth consistent with T. rex dentition, indicating face-to-face combat between individuals, likely over territory or mates.",
          es: "Múltiples especímenes de T. rex muestran marcas de mordida curadas con espaciado y profundidad dental consistente con la dentición de T. rex, indicando combate cara a cara entre individuos, probablemente por territorio o parejas.",
          de: "Mehrere T. rex-Exemplare zeigen geheilte Bissspuren mit Zahnabstand und -tiefe, die mit T. rex-Gebiss übereinstimmen, was auf direkte Kämpfe zwischen Individuen hindeutet, wahrscheinlich um Territorium oder Partner.",
          nl: "Meerdere T. rex specimens tonen genezen beetwonden met tandafstand en diepte consistent met T. rex gebit, wat oog-in-oog gevechten tussen individuen aangeeft, waarschijnlijk over territorium of partners."
        }
      },
      {
        question: {
          en: "Which specific theropod synapomorphy is most pronounced in T. rex postcranial skeleton?",
          es: "¿Qué sinapomorfia específica de terópodos es más pronunciada en el esqueleto postcraneal del T. rex?",
          de: "Welche spezifische Theropoden-Synapomorphie ist im postcranialen Skelett von T. rex am ausgeprägtesten?",
          nl: "Welke specifieke theropode synapomorfie is het meest uitgesproken in T. rex postcraniaal skelet?"
        },
        options: [
          { en: "Completely fused sacral vertebrae", es: "Vértebras sacras completamente fusionadas", de: "Vollständig verschmolzene Sakralwirbel", nl: "Volledig vergroeide sacrale wervels" },
          { en: "Hollow, thin-walled long bones", es: "Huesos largos huecos de paredes delgadas", de: "Hohle, dünnwandige lange Knochen", nl: "Holle, dunwandige lange botten" },
          { en: "Quadrupedal stance", es: "Postura cuadrúpeda", de: "Vierbeinige Haltung", nl: "Viervoetige houding" },
          { en: "Absence of furcula", es: "Ausencia de fúrcula", de: "Abwesenheit der Furcula", nl: "Afwezigheid van vorkbeen" }
        ],
        correct: 1,
        explanation: {
          en: "T. rex exhibits highly pneumatized, hollow long bones with thin cortical walls—a key theropod synapomorphy that reduces weight while maintaining structural strength, essential for bipedal locomotion.",
          es: "T. rex exhibe huesos largos altamente neumatizados y huecos con paredes corticales delgadas—una sinapomorfia clave de terópodos que reduce peso mientras mantiene fuerza estructural, esencial para locomoción bípeda.",
          de: "T. rex zeigt hochpneumatisierte, hohle lange Knochen mit dünnen Kortikaliswänden—eine wichtige Theropoden-Synapomorphie, die das Gewicht reduziert, während die strukturelle Festigkeit beibehalten wird, wesentlich für bipede Fortbewegung.",
          nl: "T. rex vertoont sterk gepneumatiseerde, holle lange botten met dunne corticale wanden—een belangrijke theropode synapomorfie die gewicht vermindert terwijl structurele sterkte behouden blijft, essentieel voor tweevoetige locomotie."
        }
      },
      {
        question: {
          en: "What geochemical evidence supports T. rex migration patterns across Hell Creek Formation?",
          es: "¿Qué evidencia geoquímica apoya los patrones de migración del T. rex a través de la Formación Hell Creek?",
          de: "Welche geochemischen Belege unterstützen T. rex-Migrationsmuster durch die Hell Creek Formation?",
          nl: "Welk geochemisch bewijs ondersteunt T. rex migratiepatronen door de Hell Creek Formatie?"
        },
        options: [
          { en: "Uniform strontium isotope ratios throughout skeleton", es: "Relaciones isotópicas de estroncio uniformes en todo el esqueleto", de: "Einheitliche Strontium-Isotopenverhältnisse im gesamten Skelett", nl: "Uniforme strontium isotoop verhoudingen door het hele skelet" },
          { en: "Variable strontium isotope signatures in sequential tooth samples", es: "Firmas isotópicas variables de estroncio en muestras dentales secuenciales", de: "Variable Strontium-Isotopensignaturen in sequenziellen Zahnproben", nl: "Variabele strontium isotoop signaturen in sequentiële tandmonsters" },
          { en: "Absence of trace elements", es: "Ausencia de elementos traza", de: "Abwesenheit von Spurenelementen", nl: "Afwezigheid van spoorelementen" },
          { en: "Constant oxygen isotope values", es: "Valores isotópicos de oxígeno constantes", de: "Konstante Sauerstoff-Isotopenwerte", nl: "Constante zuurstof isotoop waarden" }
        ],
        correct: 1,
        explanation: {
          en: "Variable strontium isotope ratios in sequentially formed T. rex teeth reflect different geological substrates, indicating these animals moved across diverse terrains during their lifetime, supporting migration behavior.",
          es: "Las relaciones isotópicas variables de estroncio en dientes de T. rex formados secuencialmente reflejan diferentes sustratos geológicos, indicando que estos animales se movían a través de terrenos diversos durante su vida, apoyando comportamiento migratorio.",
          de: "Variable Strontium-Isotopenverhältnisse in sequenziell gebildeten T. rex-Zähnen spiegeln verschiedene geologische Substrate wider und zeigen, dass diese Tiere sich während ihrer Lebenszeit über verschiedene Terrains bewegten, was Migrationsverhalten unterstützt.",
          nl: "Variabele strontium isotoop verhoudingen in sequentieel gevormde T. rex tanden reflecteren verschillende geologische substraten, wat aangeeft dat deze dieren zich door diverse terreinen bewogen tijdens hun leven, wat migratiegedrag ondersteunt."
        }
      },
      {
        question: {
          en: "Which biomechanical analysis method determined T. rex jaw muscle attachment sites?",
          es: "¿Qué método de análisis biomecánico determinó los sitios de unión muscular de la mandíbula del T. rex?",
          de: "Welche biomechanische Analysemethode bestimmte T. rex-Kiefermuskel-Ansatzstellen?",
          nl: "Welke biomechanische analysemethode bepaalde T. rex kaakspier aanhechtingsplaatsen?"
        },
        options: [
          { en: "Simple visual inspection", es: "Inspección visual simple", de: "Einfache Sichtprüfung", nl: "Eenvoudige visuele inspectie" },
          { en: "Finite element analysis of stress patterns", es: "Análisis de elementos finitos de patrones de estrés", de: "Finite-Elemente-Analyse von Stressmustern", nl: "Eindige elementen analyse van stresspatronen" },
          { en: "Radioactive isotope tracing", es: "Rastreo de isótopos radiactivos", de: "Radioaktive Isotopenverfolgung", nl: "Radioactieve isotoop tracking" },
          { en: "Magnetic resonance imaging", es: "Imagen por resonancia magnética", de: "Magnetresonanztomographie", nl: "Magnetische resonantie beeldvorming" }
        ],
        correct: 1,
        explanation: {
          en: "Finite element analysis of T. rex skulls identifies stress concentration patterns that reveal muscle attachment sites and force vectors, providing detailed insights into jaw muscle architecture and bite mechanics.",
          es: "El análisis de elementos finitos de cráneos de T. rex identifica patrones de concentración de estrés que revelan sitios de unión muscular y vectores de fuerza, proporcionando perspectivas detalladas sobre arquitectura muscular mandibular y mecánica de mordida.",
          de: "Finite-Elemente-Analyse von T. rex-Schädeln identifiziert Stresskonzentrationsmuster, die Muskelansatzstellen und Kraftvektoren enthüllen und detaillierte Einblicke in Kiefermuskelarchitektur und Beißmechanik bieten.",
          nl: "Eindige elementen analyse van T. rex schedels identificeert stressconcentratiepatronen die spieraanhechtingsplaatsen en krachtvectoren onthullen, wat gedetailleerde inzichten geeft in kaakspierarchitectuur en beetmechanica."
        }
      },
      {
        question: {
          en: "What histological evidence indicates T. rex bone remodeling rates?",
          es: "¿Qué evidencia histológica indica las tasas de remodelación ósea del T. rex?",
          de: "Welche histologischen Belege zeigen T. rex-Knochenumbauraten an?",
          nl: "Welk histologisch bewijs geeft T. rex bot hermodellering snelheden aan?"
        },
        options: [
          { en: "Complete absence of secondary osteons", es: "Ausencia completa de osteonas secundarias", de: "Vollständige Abwesenheit sekundärer Osteone", nl: "Volledige afwezigheid van secundaire osteons" },
          { en: "High density of Haversian systems with varying degrees of completion", es: "Alta densidad de sistemas haversianos con grados variables de completitud", de: "Hohe Dichte von Havers-Systemen mit unterschiedlichen Vollständigkeitsgraden", nl: "Hoge dichtheid van Haversische systemen met variërende mate van voltooiing" },
          { en: "Only primary bone formation", es: "Solo formación ósea primaria", de: "Nur primäre Knochenbildung", nl: "Alleen primaire botvorming" },
          { en: "Uniform bone density patterns", es: "Patrones uniformes de densidad ósea", de: "Einheitliche Knochendichtemuster", nl: "Uniforme botdichtheidspatronen" }
        ],
        correct: 1,
        explanation: {
          en: "T. rex bones show extensive secondary osteon formation with varying completion stages, indicating rapid bone turnover and remodeling throughout life—evidence of high metabolic activity and stress-induced bone adaptation.",
          es: "Los huesos de T. rex muestran formación extensa de osteonas secundarias con etapas variables de completitud, indicando recambio óseo rápido y remodelación durante toda la vida—evidencia de alta actividad metabólica y adaptación ósea inducida por estrés.",
          de: "T. rex-Knochen zeigen extensive sekundäre Osteonbildung mit unterschiedlichen Vollendungsstadien, was auf schnellen Knochenumsatz und Remodellierung während des Lebens hindeutet—Beweis für hohe Stoffwechselaktivität und stressinduzierte Knochenanpassung.",
          nl: "T. rex botten tonen uitgebreide secundaire osteon vorming met variërende voltooiingsstadia, wat snelle botvernieuwing en hermodellering tijdens het leven aangeeft—bewijs van hoge metabolische activiteit en stress-geïnduceerde bot aanpassing."
        }
      },
      {
        question: {
          en: "Which cranial suture pattern indicates T. rex developmental maturity?",
          es: "¿Qué patrón de sutura craneal indica madurez del desarrollo del T. rex?",
          de: "Welches kraniale Suturenmuster zeigt T. rex-Entwicklungsreife an?",
          nl: "Welk schedelnaad patroon geeft T. rex ontwikkelingsrijpheid aan?"
        },
        options: [
          { en: "Complete suture obliteration in all skull bones", es: "Obliteración completa de suturas en todos los huesos del cráneo", de: "Vollständige Suturenauslöschung in allen Schädelknochen", nl: "Volledige naadverdwijning in alle schedelbotten" },
          { en: "Open, unfused sutures throughout skull", es: "Suturas abiertas, no fusionadas en todo el cráneo", de: "Offene, nicht verschmolzene Suturen im gesamten Schädel", nl: "Open, niet vergroeide naden door de hele schedel" },
          { en: "Progressive suture fusion from posterior to anterior", es: "Fusión progresiva de suturas de posterior a anterior", de: "Progressive Suturenfusion von hinten nach vorn", nl: "Progressieve naadvergroeiing van achteren naar voren" },
          { en: "Random suture fusion pattern", es: "Patrón de fusión de suturas aleatorio", de: "Zufälliges Suturenfusionsmuster", nl: "Willekeurig naadvergroeiingspatroon" }
        ],
        correct: 2,
        explanation: {
          en: "T. rex shows progressive cranial suture fusion from posterior (back) to anterior (front), with older individuals displaying more complete fusion—a reliable indicator of ontogenetic age and developmental stage.",
          es: "T. rex muestra fusión progresiva de suturas craneales de posterior (atrás) a anterior (adelante), con individuos mayores mostrando fusión más completa—un indicador confiable de edad ontogenética y etapa de desarrollo.",
          de: "T. rex zeigt progressive kraniale Suturenfusion von posterior (hinten) zu anterior (vorn), wobei ältere Individuen vollständigere Fusion aufweisen—ein zuverlässiger Indikator für ontogenetisches Alter und Entwicklungsstadium.",
          nl: "T. rex toont progressieve schedel naadvergroeiing van posterieur (achter) naar anterieur (voor), waarbij oudere individuen meer complete vergroeiing vertonen—een betrouwbare indicator van ontogenetische leeftijd en ontwikkelingsstadium."
        }
      },
      {
        question: {
          en: "What taphonomic process best explains T. rex fossil preservation quality variations?",
          es: "¿Qué proceso tafonómico explica mejor las variaciones en la calidad de preservación de fósiles de T. rex?",
          de: "Welcher taphonomische Prozess erklärt am besten die Qualitätsvariationen der T. rex-Fossilerhaltung?",
          nl: "Welk tafonomisch proces verklaart het best T. rex fossiel preservering kwaliteitsvariaties?"
        },
        options: [
          { en: "Uniform burial conditions across all sites", es: "Condiciones de enterramiento uniformes en todos los sitios", de: "Einheitliche Begrabungsbedingungen an allen Standorten", nl: "Uniforme begraafomstandigheden op alle locaties" },
          { en: "Differential diagenetic alteration based on sediment chemistry", es: "Alteración diagenética diferencial basada en química de sedimentos", de: "Differentielle diagenetische Alteration basierend auf Sedimentchemie", nl: "Differentiële diagenetische verandering gebaseerd op sedimentchemie" },
          { en: "Identical fossilization timeframes", es: "Marcos temporales de fosilización idénticos", de: "Identische Fossilisierungszeitrahmen", nl: "Identieke fossilisatietijdsbestekken" },
          { en: "Single burial environment type", es: "Tipo de ambiente de enterramiento único", de: "Einziger Begrabungsumgebungstyp", nl: "Enkel begraafomgevingstype" }
        ],
        correct: 1,
        explanation: {
          en: "T. rex fossil preservation varies significantly due to differential diagenetic processes influenced by groundwater pH, mineral content, and redox conditions—explaining why some specimens retain soft tissues while others are completely mineralized.",
          es: "La preservación de fósiles de T. rex varía significativamente debido a procesos diagenéticos diferenciales influenciados por pH de agua subterránea, contenido mineral y condiciones redox—explicando por qué algunos especímenes retienen tejidos blandos mientras otros están completamente mineralizados.",
          de: "T. rex-Fossilerhaltung variiert erheblich aufgrund differentieller diagenetischer Prozesse, die von Grundwasser-pH, Mineralgehalt und Redoxbedingungen beeinflusst werden—erklärt, warum einige Exemplare Weichteile behalten, während andere vollständig mineralisiert sind.",
          nl: "T. rex fossiel preservering varieert significant door differentiële diagenetische processen beïnvloed door grondwater pH, mineraalgehalte en redoxomstandigheden—verklaart waarom sommige specimens zachte weefsels behouden terwijl anderen volledig gemineraliseerd zijn."
        }
      },
      {
        question: {
          en: "Which molecular clock analysis supports T. rex divergence timing from Asian tyrannosaurids?",
          es: "¿Qué análisis de reloj molecular apoya el tiempo de divergencia del T. rex de los tiranosáuridos asiáticos?",
          de: "Welche molekulare Uhren-Analyse unterstützt die T. rex-Divergenzzeit von asiatischen Tyrannosauriden?",
          nl: "Welke moleculaire klok analyse ondersteunt T. rex divergentie timing van Aziatische tyrannosauriden?"
        },
        options: [
          { en: "Collagen degradation rate analysis", es: "Análisis de tasa de degradación de colágeno", de: "Kollagenabbaugeschwindigkeits-Analyse", nl: "Collageen afbraaksnelheid analyse" },
          { en: "Calibrated phylogenetic analysis using multiple fossil dates", es: "Análisis filogenético calibrado usando múltiples fechas fósiles", de: "Kalibrierte phylogenetische Analyse mit mehreren Fossildaten", nl: "Gekalibreerde fylogenetische analyse met meerdere fossiel data" },
          { en: "Single point calibration method", es: "Método de calibración de punto único", de: "Einzelpunkt-Kalibrierungsmethode", nl: "Enkelpunt kalibratiemethode" },
          { en: "Random mutation rate assumption", es: "Suposición de tasa de mutación aleatoria", de: "Zufällige Mutationsratenannahme", nl: "Willekeurige mutatiegraad aanname" }
        ],
        correct: 1,
        explanation: {
          en: "Calibrated phylogenetic analyses using multiple well-dated tyrannosaurid fossils suggest T. rex diverged from Asian relatives like Tarbosaurus approximately 70-75 million years ago, during Late Cretaceous continental separation.",
          es: "Los análisis filogenéticos calibrados usando múltiples fósiles de tiranosáuridos bien fechados sugieren que T. rex divergió de parientes asiáticos como Tarbosaurus aproximadamente hace 70-75 millones de años, durante la separación continental del Cretácico Tardío.",
          de: "Kalibrierte phylogenetische Analysen mit mehreren gut datierten Tyrannosauriden-Fossilien deuten darauf hin, dass T. rex vor etwa 70-75 Millionen Jahren während der späten Kreidezeit-Kontinentaltrennung von asiatischen Verwandten wie Tarbosaurus divergierte.",
          nl: "Gekalibreerde fylogenetische analyses met meerdere goed gedateerde tyrannosauride fossielen suggereren dat T. rex ongeveer 70-75 miljoen jaar geleden divergeerde van Aziatische verwanten zoals Tarbosaurus, tijdens Late Krijt continentale scheiding."
        }
      },
      {
        question: {
          en: "What trace element signature indicates T. rex dietary specialization?",
          es: "¿Qué firma de elementos traza indica especialización dietética del T. rex?",
          de: "Welche Spurenelementsignatur zeigt T. rex-Nahrungsspezialisierung an?",
          nl: "Welke spoorelement signatuur geeft T. rex dieet specialisatie aan?"
        },
        options: [
          { en: "Low calcium-to-phosphorus ratios", es: "Relaciones bajas de calcio a fósforo", de: "Niedrige Kalzium-zu-Phosphor-Verhältnisse", nl: "Lage calcium-tot-fosfor verhoudingen" },
          { en: "Elevated zinc and copper concentrations", es: "Concentraciones elevadas de zinc y cobre", de: "Erhöhte Zink- und Kupferkonzentrationen", nl: "Verhoogde zink en koper concentraties" },
          { en: "Absence of any trace metals", es: "Ausencia de cualquier metal traza", de: "Abwesenheit von Spurenmetallen", nl: "Afwezigheid van sporenmetalen" },
          { en: "Random trace element distribution", es: "Distribución aleatoria de elementos traza", de: "Zufällige Spurenelementverteilung", nl: "Willekeurige spoorelement distributie" }
        ],
        correct: 1,
        explanation: {
          en: "Elevated zinc and copper in T. rex bones suggest high-protein carnivorous diet, as these elements concentrate in muscle tissue and are retained in bone during fossilization, indicating specialized predatory behavior.",
          es: "El zinc y cobre elevados en huesos de T. rex sugieren dieta carnívora alta en proteínas, ya que estos elementos se concentran en tejido muscular y se retienen en hueso durante la fosilización, indicando comportamiento depredador especializado.",
          de: "Erhöhte Zink- und Kupferkonzentrationen in T. rex-Knochen deuten auf proteinreiche fleischfressende Ernährung hin, da sich diese Elemente in Muskelgewebe konzentrieren und während der Fossilisation im Knochen erhalten bleiben, was spezialisiertes Raubtierverhalten anzeigt.",
          nl: "Verhoogd zink en koper in T. rex botten suggereert hoog-proteïne carnivoor dieet, omdat deze elementen concentreren in spierweefsel en behouden blijven in bot tijdens fossilisatie, wat gespecialiseerd roofdiergedrag aangeeft."
        }
      },
      {
        question: {
          en: "Which biomechanical constraint explains the evolutionary reduction of T. rex forelimbs?",
          es: "¿Qué restricción biomecánica explica la reducción evolutiva de las extremidades anteriores del T. rex?",
          de: "Welche biomechanische Einschränkung erklärt die evolutionäre Reduktion der T. rex-Vorderextremitäten?",
          nl: "Welke biomechanische beperking verklaart de evolutionaire reductie van T. rex voorpoten?"
        },
        options: [
          { en: "Increased metabolic efficiency through reduced muscle mass", es: "Eficiencia metabólica aumentada a través de masa muscular reducida", de: "Erhöhte Stoffwechseleffizienz durch reduzierte Muskelmasse", nl: "Verhoogde metabolische efficiëntie door verminderde spiermassa" },
          { en: "Improved balance during bipedal locomotion", es: "Equilibrio mejorado durante locomoción bípeda", de: "Verbessertes Gleichgewicht während bipeder Fortbewegung", nl: "Verbeterde balans tijdens tweevoetige locomotie" },
          { en: "Biomechanical trade-off favoring skull enlargement", es: "Compromiso biomecánico favoreciendo agrandamiento del cráneo", de: "Biomechanischer Kompromiss zugunsten der Schädelvergrößerung", nl: "Biomechanisch compromis ten gunste van schedelvergroting" },
          { en: "Adaptation to aquatic environments", es: "Adaptación a ambientes acuáticos", de: "Anpassung an aquatische Umgebungen", nl: "Aanpassing aan aquatische omgevingen" }
        ],
        correct: 2,
        explanation: {
          en: "T. rex forelimb reduction represents a biomechanical trade-off where developmental and metabolic resources were redirected toward massive skull and jaw development, maximizing predatory effectiveness over forelimb functionality.",
          es: "La reducción de extremidades anteriores del T. rex representa un compromiso biomecánico donde los recursos de desarrollo y metabólicos fueron redirigidos hacia el desarrollo masivo del cráneo y mandíbula, maximizando la efectividad depredadora sobre la funcionalidad de extremidades anteriores.",
          de: "T. rex-Vorderextremitätenreduktion stellt einen biomechanischen Kompromiss dar, bei dem Entwicklungs- und Stoffwechselressourcen zur massiven Schädel- und Kieferentwicklung umgeleitet wurden, um die räuberische Effektivität über die Vorderextremitätenfunktionalität zu maximieren.",
          nl: "T. rex voorpoot reductie vertegenwoordigt een biomechanisch compromis waar ontwikkelings- en metabolische hulpbronnen werden omgeleid naar massieve schedel- en kaakontwikkeling, wat roofdier effectiviteit maximaliseerde boven voorpoot functionaliteit."
        }
      },
      {
        question: {
          en: "What isotopic evidence supports T. rex thermoregulatory capabilities?",
          es: "¿Qué evidencia isotópica apoya las capacidades termorreguladoras del T. rex?",
          de: "Welche Isotopen-Belege unterstützen T. rex-Thermoregulationsfähigkeiten?",
          nl: "Welk isotopisch bewijs ondersteunt T. rex thermoregulatoire capaciteiten?"
        },
        options: [
          { en: "Identical oxygen isotope ratios in all bones", es: "Relaciones isotópicas de oxígeno idénticas en todos los huesos", de: "Identische Sauerstoff-Isotopenverhältnisse in allen Knochen", nl: "Identieke zuurstof isotoop verhoudingen in alle botten" },
          { en: "Consistent core-to-extremity oxygen isotope gradients", es: "Gradientes consistentes de isótopos de oxígeno de núcleo a extremidades", de: "Konsistente Kern-zu-Extremitäten-Sauerstoff-Isotopen-Gradienten", nl: "Consistente kern-naar-extremiteit zuurstof isotoop gradiënten" },
          { en: "Random isotopic variations", es: "Variaciones isotópicas aleatorias", de: "Zufällige Isotopenvariationen", nl: "Willekeurige isotopische variaties" },
          { en: "Absence of temperature-sensitive isotopes", es: "Ausencia de isótopos sensibles a la temperatura", de: "Abwesenheit temperaturempfindlicher Isotope", nl: "Afwezigheid van temperatuurgevoelige isotopen" }
        ],
        correct: 1,
        explanation: {
          en: "T. rex shows consistent oxygen isotope gradients from core body bones to extremities, indicating maintained body temperature differences despite environmental fluctuations—evidence of active thermoregulation characteristic of endothermic metabolism.",
          es: "T. rex muestra gradientes consistentes de isótopos de oxígeno desde huesos del núcleo corporal hasta extremidades, indicando diferencias de temperatura corporal mantenidas a pesar de fluctuaciones ambientales—evidencia de termorregulación activa característica del metabolismo endotérmico.",
          de: "T. rex zeigt konsistente Sauerstoff-Isotopen-Gradienten von Körperkern-Knochen zu Extremitäten, was aufrechterhaltene Körpertemperaturunterschiede trotz Umgebungsschwankungen anzeigt—Beweis für aktive Thermoregulation, die für endothermen Stoffwechsel charakteristisch ist.",
          nl: "T. rex toont consistente zuurstof isotoop gradiënten van kernlichaam botten naar extremiteiten, wat behouden lichaamstemperatuurverschillen ondanks omgevingsfluctuaties aangeeft—bewijs van actieve thermoregulatie karakteristiek voor endotherm metabolisme."
        }
      },
      {
        question: {
          en: "Which phylogenetic analysis method resolved T. rex position within Tyrannosauridae?",
          es: "¿Qué método de análisis filogenético resolvió la posición del T. rex dentro de Tyrannosauridae?",
          de: "Welche phylogenetische Analysemethode löste T. rex-Position innerhalb der Tyrannosauridae auf?",
          nl: "Welke fylogenetische analysemethode loste T. rex positie binnen Tyrannosauridae op?"
        },
        options: [
          { en: "Simple morphological comparison", es: "Comparación morfológica simple", de: "Einfacher morphologischer Vergleich", nl: "Eenvoudige morfologische vergelijking" },
          { en: "Maximum parsimony analysis with character weighting", es: "Análisis de máxima parsimonia con ponderación de caracteres", de: "Maximum-Parsimony-Analyse mit Charaktergewichtung", nl: "Maximum parsimony analyse met karakterweging" },
          { en: "Random classification system", es: "Sistema de clasificación aleatoria", de: "Zufälliges Klassifikationssystem", nl: "Willekeurig classificatiesysteem" },
          { en: "Geographic distribution only", es: "Solo distribución geográfica", de: "Nur geografische Verteilung", nl: "Alleen geografische distributie" }
        ],
        correct: 1,
        explanation: {
          en: "Maximum parsimony analysis incorporating character weighting and extensive morphological datasets has consistently placed T. rex as the most derived tyrannosaurid, sister to Tarbosaurus in the subfamily Tyrannosaurinae.",
          es: "El análisis de máxima parsimonia incorporando ponderación de caracteres y conjuntos de datos morfológicos extensos ha colocado consistentemente a T. rex como el tiranosáurido más derivado, hermano de Tarbosaurus en la subfamilia Tyrannosaurinae.",
          de: "Maximum-Parsimony-Analyse mit Charaktergewichtung und umfangreichen morphologischen Datensätzen hat T. rex konsistent als den abgeleitetsten Tyrannosauriden positioniert, Schwester zu Tarbosaurus in der Unterfamilie Tyrannosaurinae.",
          nl: "Maximum parsimony analyse incorporerend karakterweging en uitgebreide morfologische datasets heeft T. rex consistent geplaatst als de meest afgeleide tyrannosauride, zuster van Tarbosaurus in de onderfamilie Tyrannosaurinae."
        }
      },
      {
        question: {
          en: "What microscopic analysis of T. rex teeth reveals about their replacement rate?",
          es: "¿Qué revela el análisis microscópico de los dientes de T. rex sobre su tasa de reemplazo?",
          de: "Was zeigt die mikroskopische Analyse von T. rex-Zähnen über ihre Ersatzrate?",
          nl: "Wat onthult microscopische analyse van T. rex tanden over hun vervangingssnelheid?"
        },
        options: [
          {
            en: "Teeth were replaced every 2 years in adults",
            es: "Los dientes se reemplazaban cada 2 años en adultos",
            de: "Zähne wurden alle 2 Jahre bei Erwachsenen ersetzt",
            nl: "Tanden werden elke 2 jaar vervangen bij volwassenen"
          },
          {
            en: "Rapid continuous replacement throughout life, with new teeth emerging every 777 days on average",
            es: "Reemplazo continuo rápido durante toda la vida, con nuevos dientes emergiendo cada 777 días en promedio",
            de: "Schneller kontinuierlicher Ersatz während des gesamten Lebens, mit neuen Zähnen, die durchschnittlich alle 777 Tage hervorkommen",
            nl: "Snelle continue vervanging gedurende het hele leven, met nieuwe tanden die gemiddeld elke 777 dagen tevoorschijn komen"
          },
          {
            en: "Teeth were never replaced once adult",
            es: "Los dientes nunca se reemplazaban una vez adultos",
            de: "Zähne wurden nie ersetzt, sobald erwachsen",
            nl: "Tanden werden nooit vervangen eenmaal volwassen"
          },
          {
            en: "Only damaged teeth were replaced",
            es: "Solo se reemplazaban los dientes dañados",
            de: "Nur beschädigte Zähne wurden ersetzt",
            nl: "Alleen beschadigde tanden werden vervangen"
          }
        ],
        correct: 1,
        explanation: {
          en: "Histological analysis of T. rex dental tissue shows continuous tooth replacement throughout life, with von Ebner lines indicating an average replacement cycle of 777 days. This rapid turnover was essential for maintaining their predatory efficiency despite the massive forces their teeth endured.",
          es: "El análisis histológico del tejido dental de T. rex muestra reemplazo continuo de dientes durante toda la vida, con líneas de von Ebner indicando un ciclo de reemplazo promedio de 777 días. Esta renovación rápida era esencial para mantener su eficiencia depredadora a pesar de las fuerzas masivas que sus dientes soportaban.",
          de: "Histologische Analyse von T. rex-Zahngewebe zeigt kontinuierlichen Zahnersatz während des gesamten Lebens, mit von Ebner-Linien, die einen durchschnittlichen Ersatzzyklus von 777 Tagen anzeigen. Dieser schnelle Umsatz war wesentlich für die Aufrechterhaltung ihrer Raubeffizienz trotz der massiven Kräfte, die ihre Zähne ertragen mussten.",
          nl: "Histologische analyse van T. rex tandweefsel toont continue tandvervanging gedurende het hele leven, met von Ebner lijnen die een gemiddelde vervangingscyclus van 777 dagen aangeven. Deze snelle omzet was essentieel voor het behouden van hun roofdierefficiëntie ondanks de massieve krachten die hun tanden ondergingen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
