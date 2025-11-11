// Early Dinosaurs Quiz - Level 7: Advanced Knowledge
(function() {
  const level7 = {
    name: {
      en: "Early Dinosaurs Level 7",
      es: "Dinosaurios Tempranos Nivel 7",
      de: "Frühe Dinosaurier Stufe 7",
      nl: "Vroege Dinosaurussen Level 7"
    },
    questions: [
      {
        question: {
          en: "What molecular phylogenetic evidence constrains the timing of dinosaur origination within Archosauria?",
          es: "¿Qué evidencia filogenética molecular limita el momento de la originación de dinosaurios dentro de Archosauria?",
          de: "Welche molekularphylogenetischen Belege begrenzen das Timing der Dinosaurierentstehung innerhalb von Archosauria?",
          nl: "Welk moleculair fylogenetisch bewijs beperkt de timing van dinosaurusoriginatie binnen Archosauria?"
        },
        options: [
          { en: "Divergence time estimates from crocodilian-bird molecular clocks", es: "Estimaciones de tiempo de divergencia de relojes moleculares cocodrilo-ave", de: "Divergenzzeitschätzungen von Krokodil-Vogel-Molekularuhren", nl: "Divergentietijdschattingen van krokodil-vogel moleculaire klokken" },
          { en: "Direct DNA extraction from fossils", es: "Extracción directa de ADN de fósiles", de: "Direkte DNA-Extraktion aus Fossilien", nl: "Directe DNA-extractie uit fossielen" },
          { en: "Protein sequence analysis", es: "Análisis de secuencia de proteínas", de: "Proteinsequenzanalyse", nl: "Eiwitsequentie-analyse" },
          { en: "Mitochondrial genome comparisons", es: "Comparaciones del genoma mitocondrial", de: "Mitochondriale Genomvergleiche", nl: "Mitochondriale genoomvergelijkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular clock analyses based on crocodilian-bird divergence estimate that the archosaur crown group originated in the Early-Middle Triassic, providing temporal constraints on dinosaur origins within this radiation.",
          es: "Los análisis de reloj molecular basados en la divergencia cocodrilo-ave estiman que el grupo corona de arcosaurios se originó en el Triásico Temprano-Medio, proporcionando limitaciones temporales sobre los orígenes de dinosaurios dentro de esta radiación.",
          de: "Molekularuhr-Analysen basierend auf Krokodil-Vogel-Divergenz schätzen, dass die Archosaurier-Krongruppe im Frühen-Mittleren Trias entstand, was zeitliche Einschränkungen für Dinosaurierursprünge innerhalb dieser Radiation liefert.",
          nl: "Moleculaire klokanalyses gebaseerd op krokodil-vogel divergentie schatten dat de archosauriër kroongroep ontstond in de Vroege-Midden Trias, wat temporele beperkingen biedt op dinosaurusorigines binnen deze radiatie."
        }
      },
      {
        question: {
          en: "What specific feature of the dinosaurian calcaneum indicates derivation from a crocodile-line archosaur ancestor?",
          es: "¿Qué característica específica del calcáneo dinosauriano indica derivación de un ancestro arcosaurio de línea cocodrilo?",
          de: "Welches spezifische Merkmal des Dinosaurier-Calcaneus zeigt Ableitung von einem Krokodillinie-Archosaurier-Vorfahren an?",
          nl: "Welke specifieke eigenschap van het dinosauriër-hielbeen geeft afleiding aan van een krokodillijn-archosauriërvoorouder?"
        },
        options: [
          { en: "Reduced calcaneal tuber and loss of fibular articulation", es: "Tuberosidad calcánea reducida y pérdida de articulación fibular", de: "Reduzierter Calcaneus-Tuber und Verlust der Fibula-Artikulation", nl: "Verminderde hielbeentuber en verlies van fibulaire articulatie" },
          { en: "Enlarged calcaneal tuber", es: "Tuberosidad calcánea agrandada", de: "Vergrößerter Calcaneus-Tuber", nl: "Vergrote hielbeentuber" },
          { en: "Multiple fibular facets", es: "Múltiples facetas fibulares", de: "Mehrere Fibula-Facetten", nl: "Meerdere fibulaire facetten" },
          { en: "Absence of calcaneum entirely", es: "Ausencia completa del calcáneo", de: "Völlige Abwesenheit des Calcaneus", nl: "Volledige afwezigheid van hielbeen" }
        ],
        correct: 0,
        explanation: {
          en: "The dinosaurian calcaneum shows progressive reduction of the calcaneal tuber and loss of fibular contact, derived from the more robust, fibula-articulating calcaneum of basal archosaurs.",
          es: "El calcáneo dinosauriano muestra reducción progresiva de la tuberosidad calcánea y pérdida de contacto fibular, derivado del calcáneo más robusto y articulado con fíbula de los arcosaurios basales.",
          de: "Der Dinosaurier-Calcaneus zeigt progressive Reduktion des Calcaneus-Tubers und Verlust des Fibula-Kontakts, abgeleitet vom robusteren, Fibula-artikulierenden Calcaneus basaler Archosaurier.",
          nl: "Het dinosauriër-hielbeen toont progressieve reductie van de hielbeentuber en verlies van fibula-contact, afgeleid van het meer robuuste, fibula-articulerende hielbeen van basale archosauriërs."
        }
      },
      {
        question: {
          en: "What tectonic setting influenced the preservation of early dinosaur faunas in the Ischigualasto Basin?",
          es: "¿Qué configuración tectónica influyó en la preservación de las faunas de dinosaurios tempranos en la Cuenca de Ischigualasto?",
          de: "Welche tektonische Einstellung beeinflusste die Erhaltung früher Dinosaurierfaunen im Ischigualasto-Becken?",
          nl: "Welke tektonische setting beïnvloedde de conservering van vroege dinosaurusfauna's in het Ischigualasto-bekken?"
        },
        options: [
          { en: "Active continental rift with high subsidence rates", es: "Rift continental activo con altas tasas de subsidencia", de: "Aktiver kontinentaler Rift mit hohen Absenkungsraten", nl: "Actieve continentale rift met hoge subsidentiesnelheden" },
          { en: "Passive continental margin", es: "Margen continental pasivo", de: "Passiver Kontinentalrand", nl: "Passieve continentale marge" },
          { en: "Transform fault boundary", es: "Límite de falla transformante", de: "Transform-Verwerfungsgrenze", nl: "Transform-breuklijngrens" },
          { en: "Oceanic spreading center", es: "Centro de expansión oceánica", de: "Ozeanisches Ausbreitungszentrum", nl: "Oceanisch spreidingscentrum" }
        ],
        correct: 0,
        explanation: {
          en: "The Ischigualasto Basin formed in an active continental rift setting with rapid subsidence, creating accommodation space for thick sediment accumulation and exceptional fossil preservation.",
          es: "La Cuenca de Ischigualasto se formó en un ambiente de rift continental activo con subsidencia rápida, creando espacio de acomodación para acumulación sedimentaria gruesa y preservación fósil excepcional.",
          de: "Das Ischigualasto-Becken bildete sich in einer aktiven kontinentalen Rift-Umgebung mit schneller Absenkung, was Akkommodationsraum für dicke Sedimentakkumulation und außergewöhnliche Fossilerhaltung schuf.",
          nl: "Het Ischigualasto-bekken vormde zich in een actieve continentale rift-setting met snelle subsidentie, wat accommodatieruimte creëerde voor dikke sedimentaccumulatie en uitzonderlijke fossielconservering."
        }
      },
      {
        question: {
          en: "What geochemical proxy indicates the intensity of chemical weathering during the Carnian Stage?",
          es: "¿Qué proxy geoquímico indica la intensidad de la meteorización química durante la Etapa Carniana?",
          de: "Welcher geochemische Proxy zeigt die Intensität chemischer Verwitterung während des Carnium-Stadiums an?",
          nl: "Welke geochemische proxy geeft de intensiteit van chemische verwering aan tijdens het Carnische stadium?"
        },
        options: [
          { en: "CIA (Chemical Index of Alteration) values in paleosols", es: "Valores de CIA (Índice Químico de Alteración) en paleosuelos", de: "CIA (Chemical Index of Alteration)-Werte in Paläoböden", nl: "CIA (Chemical Index of Alteration) waarden in paleobodems" },
          { en: "Magnetic susceptibility", es: "Susceptibilidad magnética", de: "Magnetische Suszeptibilität", nl: "Magnetische susceptibiliteit" },
          { en: "Grain size distribution", es: "Distribución del tamaño de grano", de: "Korngrößenverteilung", nl: "Korrelgrootte-distributie" },
          { en: "Fossil content diversity", es: "Diversidad de contenido fósil", de: "Fossilinhalt-Diversität", nl: "Fossiele inhoudsdiversiteit" }
        ],
        correct: 0,
        explanation: {
          en: "The Chemical Index of Alteration (CIA) in paleosols quantifies the degree of feldspar alteration to clay minerals, indicating humid conditions and intense chemical weathering during the Carnian Pluvial Event.",
          es: "El Índice Químico de Alteración (CIA) en paleosuelos cuantifica el grado de alteración del feldespato a minerales arcillosos, indicando condiciones húmedas y meteorización química intensa durante el Evento Pluvial Carniano.",
          de: "Der Chemical Index of Alteration (CIA) in Paläoböden quantifiziert den Grad der Feldspat-Umwandlung zu Tonmineralen und zeigt feuchte Bedingungen und intensive chemische Verwitterung während des Carnischen Pluvialen Ereignisses an.",
          nl: "De Chemical Index of Alteration (CIA) in paleobodems kwantificeert de graad van veldspaat-alteratie naar kleimineralen, wat vochtige omstandigheden en intense chemische verwering aangeeft tijdens de Carnische Pluviale Gebeurtenis."
        }
      },
      {
        question: {
          en: "What specific histological feature distinguishes early dinosaur bone from that of contemporary archosaurs?",
          es: "¿Qué característica histológica específica distingue el hueso de dinosaurio temprano del de arcosaurios contemporáneos?",
          de: "Welches spezifische histologische Merkmal unterscheidet frühen Dinosaurierknochen von dem zeitgenössischer Archosaurier?",
          nl: "Welke specifieke histologische eigenschap onderscheidt vroeg dinosaurusbot van dat van hedendaagse archosauriërs?"
        },
        options: [
          { en: "Higher frequency of primary osteons and reticular vascular networks", es: "Mayor frecuencia de osteones primarios y redes vasculares reticulares", de: "Höhere Häufigkeit primärer Osteone und retikulärer Gefäßnetzwerke", nl: "Hogere frequentie van primaire osteons en reticulaire vasculaire netwerken" },
          { en: "Complete absence of vascularization", es: "Ausencia completa de vascularización", de: "Völlige Abwesenheit von Vaskularisation", nl: "Volledige afwezigheid van vascularisatie" },
          { en: "Purely lamellar bone tissue", es: "Tejido óseo puramente lamelar", de: "Rein lamelläres Knochengewebe", nl: "Puur lamellaire botweefsel" },
          { en: "Absence of osteocytes", es: "Ausencia de osteocitos", de: "Abwesenheit von Osteozyten", nl: "Afwezigheid van osteocyten" }
        ],
        correct: 0,
        explanation: {
          en: "Early dinosaur bone tissue shows distinctive fibrolamellar bone with high frequencies of primary osteons and reticular vascular arrangements, indicating rapid growth rates exceeding those of contemporary archosaurs.",
          es: "El tejido óseo de dinosaurios tempranos muestra hueso fibrolamelar distintivo con altas frecuencias de osteones primarios y arreglos vasculares reticulares, indicando tasas de crecimiento rápidas que exceden las de arcosaurios contemporáneos.",
          de: "Frühe Dinosaurier-Knochengewebe zeigt distinktives fibrolamelläres Gewebe mit hohen Häufigkeiten primärer Osteone und retikulärer Gefäßanordnungen, was auf schnelle Wachstumsraten hinweist, die die zeitgenössischer Archosaurier übertreffen.",
          nl: "Vroeg dinosaurusbotweefsel toont onderscheidend fibrolamellaire weefsel met hoge frequenties van primaire osteons en reticulaire vasculaire arrangementen, wat snelle groeisnelheden aangeeft die die van hedendaagse archosauriërs overtreffen."
        }
      },
      {
        question: {
          en: "What paleolatitudinal evidence constrains the geographic distribution of early dinosaurs?",
          es: "¿Qué evidencia paleolatitudinal limita la distribución geográfica de los dinosaurios tempranos?",
          de: "Welche paläolatitudinalen Belege begrenzen die geographische Verteilung früher Dinosaurier?",
          nl: "Welk paleobreedte-bewijs beperkt de geografische distributie van vroege dinosaurussen?"
        },
        options: [
          { en: "Paleomagnetic inclinations indicating equatorial to subtropical origins", es: "Inclinaciones paleomagnéticas indicando orígenes ecuatoriales a subtropicales", de: "Paläomagnetische Inklinationen, die äquatoriale bis subtropische Ursprünge anzeigen", nl: "Paleomagnetische inclinaties die equatoriale tot subtropische origines aangeven" },
          { en: "Polar magnetic signatures", es: "Firmas magnéticas polares", de: "Polare magnetische Signaturen", nl: "Polaire magnetische signaturen" },
          { en: "Absence of magnetic orientation", es: "Ausencia de orientación magnética", de: "Abwesenheit magnetischer Orientierung", nl: "Afwezigheid van magnetische oriëntatie" },
          { en: "Uniform global distribution", es: "Distribución global uniforme", de: "Einheitliche globale Verteilung", nl: "Uniforme globale distributie" }
        ],
        correct: 0,
        explanation: {
          en: "Paleomagnetic inclination data from early dinosaur-bearing formations indicate origination and early diversification in equatorial to subtropical latitudes of Pangaea, supporting climate-controlled distribution patterns.",
          es: "Los datos de inclinación paleomagnética de formaciones con dinosaurios tempranos indican originación y diversificación temprana en latitudes ecuatoriales a subtropicales de Pangea, apoyando patrones de distribución controlados por el clima.",
          de: "Paläomagnetische Inklinationsdaten von frühen Dinosaurier-führenden Formationen zeigen Entstehung und frühe Diversifikation in äquatorialen bis subtropischen Breiten von Pangäa an, was klimakontrollierte Verteilungsmuster unterstützt.",
          nl: "Paleomagnetische inclinatiegegevens van vroege dinosaurus-dragende formaties geven originatie en vroege diversificatie aan in equatoriale tot subtropische breedtegraden van Pangaea, wat klimaat-gecontroleerde distributiepartronen ondersteunt."
        }
      },
      {
        question: {
          en: "What functional morphological constraint explains the absence of large-bodied ornithischians in the Triassic?",
          es: "¿Qué limitación morfológica funcional explica la ausencia de ornitisquios de cuerpo grande en el Triásico?",
          de: "Welche funktionelle morphologische Einschränkung erklärt die Abwesenheit großkörperiger Ornithischier in der Trias?",
          nl: "Welke functionele morfologische beperking verklaart de afwezigheid van grootlijvige ornithischiërs in de Trias?"
        },
        options: [
          { en: "Lack of sophisticated oral processing mechanisms for fibrous vegetation", es: "Falta de mecanismos sofisticados de procesamiento oral para vegetación fibrosa", de: "Mangel an ausgeklügelten oralen Verarbeitungsmechanismen für faserige Vegetation", nl: "Gebrek aan verfijnde orale verwerkingsmechanismen voor vezelige vegetatie" },
          { en: "Inability to walk bipedally", es: "Incapacidad para caminar bípedamente", de: "Unfähigkeit, zweibeinig zu gehen", nl: "Onvermogen om bipedaal te lopen" },
          { en: "Lack of carnivorous adaptations", es: "Falta de adaptaciones carnívoras", de: "Mangel an karnivoren Anpassungen", nl: "Gebrek aan carnivore aanpassingen" },
          { en: "Absence of feathers", es: "Ausencia de plumas", de: "Abwesenheit von Federn", nl: "Afwezigheid van veren" }
        ],
        correct: 0,
        explanation: {
          en: "Large ornithischian herbivory required evolutionary innovations like dental batteries, complex jaw mechanics, and extended gut fermentation that had not yet evolved by the Triassic period.",
          es: "La herbivoría ornithisquiana grande requería innovaciones evolutivas como baterías dentales, mecánica mandibular compleja y fermentación intestinal extendida que aún no habían evolucionado para el período Triásico.",
          de: "Große ornithischische Pflanzenfresserei erforderte evolutionäre Innovationen wie Zahnbatterien, komplexe Kiefermechanik und erweiterte Darmfermentation, die bis zur Trias-Periode noch nicht evolviert waren.",
          nl: "Grote ornithischische herbivorie vereiste evolutionaire innovaties zoals tandbatterijen, complexe kaakdynamiek en uitgebreide darmfermentatie die nog niet waren geëvolueerd tegen de Trias-periode."
        }
      },
      {
        question: {
          en: "What stable isotope system provides information about early dinosaur dietary ecology?",
          es: "¿Qué sistema de isótopos estables proporciona información sobre la ecología dietética de los dinosaurios tempranos?",
          de: "Welches stabile Isotopensystem liefert Informationen über die Nahrungsökologie früher Dinosaurier?",
          nl: "Welk stabiele isotoopsysteem biedt informatie over vroege dinosaurusdieetecologie?"
        },
        options: [
          { en: "δ15N values indicating trophic level position", es: "Valores δ15N indicando posición de nivel trófico", de: "δ15N-Werte, die trophische Ebenenposition anzeigen", nl: "δ15N waarden die trofische niveauposities aangeven" },
          { en: "Uranium-lead ratios", es: "Proporciones uranio-plomo", de: "Uran-Blei-Verhältnisse", nl: "Uranium-lood verhoudingen" },
          { en: "Potassium-argon decay", es: "Desintegración potasio-argón", de: "Kalium-Argon-Zerfall", nl: "Kalium-argon verval" },
          { en: "Rubidium-strontium systematics", es: "Sistemática rubidio-estroncio", de: "Rubidium-Strontium-Systematik", nl: "Rubidium-strontium systematiek" }
        ],
        correct: 0,
        explanation: {
          en: "Nitrogen isotope values (δ15N) in bone collagen reflect trophic level, with higher values indicating carnivory and lower values herbivory, allowing reconstruction of early dinosaur feeding relationships.",
          es: "Los valores de isótopos de nitrógeno (δ15N) en colágeno óseo reflejan el nivel trófico, con valores más altos indicando carnivoría y valores más bajos herbivoría, permitiendo reconstrucción de relaciones alimentarias de dinosaurios tempranos.",
          de: "Stickstoff-Isotopenwerte (δ15N) in Knochenkollagen reflektieren das trophische Niveau, wobei höhere Werte Karnivorie und niedrigere Werte Herbivorie anzeigen, was die Rekonstruktion früher Dinosaurier-Nahrungsbeziehungen ermöglicht.",
          nl: "Stikstof-isotoopwaarden (δ15N) in botcollageen reflecteren het trofische niveau, waarbij hogere waarden carnivorie en lagere waarden herbivorie aangeven, wat reconstructie van vroege dinosaurusvoedselsrelaties mogelijk maakt."
        }
      },
      {
        question: {
          en: "What phylogenetic evidence supports the monophyly of Dinosauria?",
          es: "¿Qué evidencia filogenética apoya la monofilia de Dinosauria?",
          de: "Welche phylogenetischen Belege unterstützen die Monophylie von Dinosauria?",
          nl: "Welk fylogenetisch bewijs ondersteunt de monofylie van Dinosauria?"
        },
        options: [
          { en: "Shared derived characters including open acetabulum and ankle joint structure", es: "Caracteres derivados compartidos incluyendo acetábulo abierto y estructura de articulación del tobillo", de: "Geteilte abgeleitete Merkmale einschließlich offenes Acetabulum und Sprunggelenkstruktur", nl: "Gedeelde afgeleide karakters inclusief open acetabulum en enkelgewrichtstructuur" },
          { en: "Similar body size only", es: "Solo tamaño corporal similar", de: "Nur ähnliche Körpergröße", nl: "Alleen vergelijkbare lichaamsomvang" },
          { en: "Geographic distribution patterns", es: "Patrones de distribución geográfica", de: "Geographische Verteilungsmuster", nl: "Geografische distributiepatronen" },
          { en: "Stratigraphic occurrence", es: "Ocurrencia estratigráfica", de: "Stratigraphisches Vorkommen", nl: "Stratigrafisch voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Dinosauria is supported as monophyletic by multiple synapomorphies including the open (perforated) acetabulum, advanced mesotarsal ankle joint, and specific features of the skull and postcranium.",
          es: "Dinosauria es apoyada como monofilética por múltiples sinapomorfias incluyendo el acetábulo abierto (perforado), articulación avanzada del tobillo mesotarsal, y características específicas del cráneo y postcráneo.",
          de: "Dinosauria wird als monophyletisch durch mehrere Synapomorphien unterstützt, einschließlich des offenen (perforierten) Acetabulums, fortgeschrittenes mesotarsales Sprunggelenk und spezifische Merkmale von Schädel und Postcranium.",
          nl: "Dinosauria wordt ondersteund als monofyletisch door meerdere synapomorfieën inclusief het open (geperforeerde) acetabulum, geavanceerd mesotarsaal enkelgewricht, en specifieke eigenschappen van schedel en postcranium."
        }
      },
      {
        question: {
          en: "What sedimentological indicator suggests seasonal aridity in early dinosaur environments?",
          es: "¿Qué indicador sedimentológico sugiere aridez estacional en ambientes de dinosaurios tempranos?",
          de: "Welcher sedimentologische Indikator deutet auf saisonale Trockenheit in frühen Dinosaurierumgebungen hin?",
          nl: "Welke sedimentologische indicator suggereert seizoensdroogte in vroege dinosaurusomgevingen?"
        },
        options: [
          { en: "Calcrete paleosol horizons and mudcrack preservation", es: "Horizontes de paleosuelo calcrete y preservación de grietas de lodo", de: "Calcrete-Paläoboden-Horizonte und Trockenriss-Erhaltung", nl: "Calcrete-paleobodenhorizonten en modderkloofconservering" },
          { en: "Continuous coal seams", es: "Capas de carbón continuas", de: "Kontinuierliche Kohleflöze", nl: "Continue kolenlagen" },
          { en: "Deep marine turbidites", es: "Turbiditas marinas profundas", de: "Tiefmarine Turbidite", nl: "Diepe mariene turbiedieten" },
          { en: "Glacial dropstones", es: "Bloques erráticos glaciales", de: "Glaziale Dropstones", nl: "Glaciale dropstones" }
        ],
        correct: 0,
        explanation: {
          en: "Calcrete (caliche) paleosol horizons and preserved mudcracks indicate periodic drying and carbonate precipitation typical of semi-arid climates with distinct wet-dry seasonality.",
          es: "Los horizontes de paleosuelo calcrete (caliche) y grietas de lodo preservadas indican secado periódico y precipitación de carbonatos típicos de climas semiáridos con estacionalidad húmeda-seca distinta.",
          de: "Calcrete (Caliche)-Paläoboden-Horizonte und erhaltene Trockenrisse zeigen periodische Austrocknung und Karbonatpräzipitation an, die typisch für semiaride Klimate mit ausgeprägter Nass-Trocken-Saisonalität sind.",
          nl: "Calcrete (caliche) paleobodenhorizonten en bewaarde modderkraken geven periodieke uitdroging en carbonaatprecipitatie aan typisch voor semi-aride klimaten met onderscheidelijke nat-droge seizoensgebondenheid."
        }
      },
      {
        question: {
          en: "What biomechanical analysis reveals about the predatory capabilities of Herrerasaurus?",
          es: "¿Qué revela el análisis biomecánico sobre las capacidades depredadoras de Herrerasaurus?",
          de: "Was zeigt biomechanische Analyse über die räuberischen Fähigkeiten von Herrerasaurus?",
          nl: "Wat onthult biomechanische analyse over de roofdiervermogens van Herrerasaurus?"
        },
        options: [
          { en: "High mechanical advantage in jaw closure with optimal force transmission", es: "Alta ventaja mecánica en el cierre mandibular con transmisión de fuerza óptima", de: "Hoher mechanischer Vorteil beim Kieferschluss mit optimaler Kraftübertragung", nl: "Hoog mechanisch voordeel bij kaaksluiting met optimale krachtoverbrenging" },
          { en: "Weak bite force comparable to herbivores", es: "Fuerza de mordida débil comparable a herbívoros", de: "Schwache Bisskraft vergleichbar mit Pflanzenfressern", nl: "Zwakke bijtkracht vergelijkbaar met herbivoren" },
          { en: "Inability to process animal tissue", es: "Incapacidad para procesar tejido animal", de: "Unfähigkeit, tierisches Gewebe zu verarbeiten", nl: "Onvermogen om dierlijk weefsel te verwerken" },
          { en: "Exclusively filter-feeding adaptations", es: "Adaptaciones exclusivamente de alimentación por filtración", de: "Ausschließlich filterfütternde Anpassungen", nl: "Uitsluitend filtrerende aanpassingen" }
        ],
        correct: 0,
        explanation: {
          en: "Finite element analysis of Herrerasaurus skulls demonstrates high mechanical advantage in the adductor musculature and optimal stress distribution during biting, indicating sophisticated predatory adaptations.",
          es: "El análisis de elementos finitos de cráneos de Herrerasaurus demuestra alta ventaja mecánica en la musculatura aductora y distribución óptima de estrés durante la mordida, indicando adaptaciones depredadoras sofisticadas.",
          de: "Finite-Elemente-Analyse von Herrerasaurus-Schädeln zeigt hohen mechanischen Vorteil in der Adduktor-Muskulatur und optimale Stressverteilung beim Beißen, was auf ausgeklügelte räuberische Anpassungen hinweist.",
          nl: "Eindige-elementenanalyse van Herrerasaurus-schedels toont hoog mechanisch voordeel in de adductormusculatuur en optimale stressdistributie tijdens bijten, wat verfijnde roofdieraanpassingen aangeeft."
        }
      },
      {
        question: {
          en: "What paleoecological evidence indicates niche partitioning among early dinosaur communities?",
          es: "¿Qué evidencia paleoecológica indica partición de nichos entre las comunidades de dinosaurios tempranos?",
          de: "Welche paläoökologischen Belege zeigen Nischenteilung zwischen frühen Dinosauriergemeinschaften an?",
          nl: "Welk paleoecologisch bewijs geeft niche-partitionering aan tussen vroege dinosaurusgemeenschappen?"
        },
        options: [
          { en: "Size-stratified feeding guilds with distinct isotopic signatures", es: "Gremios alimentarios estratificados por tamaño con firmas isotópicas distintas", de: "Größenstratifizierte Nahrungsgilden mit distinkten isotopischen Signaturen", nl: "Grootte-gestratificeerde voedselguildes met onderscheidende isotopische signaturen" },
          { en: "Identical diets across all species", es: "Dietas idénticas en todas las especies", de: "Identische Diäten bei allen Arten", nl: "Identieke diëten bij alle soorten" },
          { en: "Single predator-prey relationship", es: "Relación única depredador-presa", de: "Einzige Räuber-Beute-Beziehung", nl: "Enkele roofdier-prooi relatie" },
          { en: "Absence of competitive interactions", es: "Ausencia de interacciones competitivas", de: "Abwesenheit kompetitiver Interaktionen", nl: "Afwezigheid van competitieve interacties" }
        ],
        correct: 0,
        explanation: {
          en: "Early dinosaur communities show evidence of ecological niche partitioning through size-based feeding strategies and distinct stable isotope signatures indicating different dietary resources and trophic positions.",
          es: "Las comunidades de dinosaurios tempranos muestran evidencia de partición de nichos ecológicos a través de estrategias alimentarias basadas en tamaño y firmas isotópicas estables distintas indicando diferentes recursos dietéticos y posiciones tróficas.",
          de: "Frühe Dinosauriergemeinschaften zeigen Belege für ökologische Nischenteilung durch größenbasierte Nahrungsstrategien und distinkte stabile Isotopensignaturen, die verschiedene Nahrungsressourcen und trophische Positionen anzeigen.",
          nl: "Vroege dinosaurusgemeenschappen tonen bewijs van ecologische niche-partitionering door grootte-gebaseerde voedingsstrategieën en onderscheidende stabiele isotoopsignaturen die verschillende dieetbronnen en trofische posities aangeven."
        }
      },
      {
        question: {
          en: "What specific morphological innovation allowed early sauropodomorphs to process tough plant material?",
          es: "¿Qué innovación morfológica específica permitió a los sauropodomorphos tempranos procesar material vegetal resistente?",
          de: "Welche spezifische morphologische Innovation ermöglichte frühen Sauropodomorphen, zähes Pflanzenmaterial zu verarbeiten?",
          nl: "Welke specifieke morfologische innovatie stelde vroege sauropodomorfen in staat taai plantaardig materiaal te verwerken?"
        },
        options: [
          { en: "Gastric mill system with gastroliths for mechanical breakdown", es: "Sistema de molino gástrico con gastrolitos para descomposición mecánica", de: "Magen-Mühlen-System mit Gastrolithen für mechanischen Aufschluss", nl: "Gastrisch maalsysteem met gastrolieten voor mechanische afbraak" },
          { en: "Specialized shearing dentition", es: "Dentición especializada de corte", de: "Spezialisierte Schergebiss", nl: "Gespecialiseerde scherende dentitie" },
          { en: "Acidic stomach secretions only", es: "Solo secreciones estomacales ácidas", de: "Nur saure Magensekrete", nl: "Alleen zure maagsecreties" },
          { en: "External food processing tools", es: "Herramientas externas de procesamiento de alimentos", de: "Externe Nahrungsverarbeitungswerkzeuge", nl: "Externe voedselverwerkinghulpmiddelen" }
        ],
        correct: 0,
        explanation: {
          en: "Early sauropodomorphs evolved gastric mill systems using swallowed stones (gastroliths) to mechanically break down fibrous plant material in muscular stomachs, similar to modern birds.",
          es: "Los sauropodomorphos tempranos evolucionaron sistemas de molino gástrico usando piedras tragadas (gastrolitos) para descomponer mecánicamente material vegetal fibroso en estómagos musculares, similar a las aves modernas.",
          de: "Frühe Sauropodomorphe entwickelten Magen-Mühlen-Systeme mit verschluckten Steinen (Gastrolithen), um faserige Pflanzenmaterialien in muskulösen Mägen mechanisch aufzubrechen, ähnlich modernen Vögeln.",
          nl: "Vroege sauropodomorfen evolueerden gastrische maalsystemen met ingeslikt steentjes (gastrolieten) om vezelig plantaardig materiaal mechanisch af te breken in gespierde magen, vergelijkbaar met moderne vogels."
        }
      },
      {
        question: {
          en: "What volcanic event provides a chronostratigraphic marker for early dinosaur evolution?",
          es: "¿Qué evento volcánico proporciona un marcador cronoestratigráfico para la evolución temprana de los dinosaurios?",
          de: "Welches vulkanische Ereignis liefert einen chronostratigraphischen Marker für die frühe Dinosaurierevolution?",
          nl: "Welke vulkanische gebeurtenis biedt een chronostratigrafische marker voor vroege dinosaurusevolutie?"
        },
        options: [
          { en: "Wrangellia flood basalt emplacement during the Carnian", es: "Emplazamiento de basalto de inundación de Wrangellia durante el Carniano", de: "Wrangellia-Flutbasalt-Platzierung während des Carniums", nl: "Wrangellia vloed-basaltplaatsing tijdens het Carnisch" },
          { en: "Yellowstone eruption", es: "Erupción de Yellowstone", de: "Yellowstone-Eruption", nl: "Yellowstone-eruptie" },
          { en: "Deccan Traps formation", es: "Formación de las Trampas del Decán", de: "Dekkan-Trapp-Formation", nl: "Deccan Traps-formatie" },
          { en: "Mount Vesuvius eruption", es: "Erupción del Monte Vesubio", de: "Vesuv-Eruption", nl: "Mount Vesuvius-eruptie" }
        ],
        correct: 0,
        explanation: {
          en: "The Wrangellia flood basalt eruptions during the Carnian Stage provide precise geochronological constraints on early dinosaur evolution and coincide with the Carnian Pluvial Event that influenced their diversification.",
          es: "Las erupciones de basalto de inundación de Wrangellia durante la Etapa Carniana proporcionan limitaciones geocronológicas precisas sobre la evolución temprana de dinosaurios y coinciden con el Evento Pluvial Carniano que influyó en su diversificación.",
          de: "Die Wrangellia-Flutbasalt-Eruptionen während des Carnium-Stadiums liefern präzise geochronologische Einschränkungen für die frühe Dinosaurierevolution und fallen mit dem Carnischen Pluvialen Ereignis zusammen, das ihre Diversifikation beeinflusste.",
          nl: "De Wrangellia vloed-basalterupties tijdens het Carnische stadium bieden precieze geochronologische beperkingen op vroege dinosaurusevolutie en vallen samen met de Carnische Pluviale Gebeurtenis die hun diversificatie beïnvloedde."
        }
      },
      {
        question: {
          en: "What actualistic study informs our understanding of early dinosaur social behavior?",
          es: "¿Qué estudio actualístico informa nuestro entendimiento del comportamiento social de los dinosaurios tempranos?",
          de: "Welche aktualistische Studie informiert unser Verständnis des Sozialverhaltens früher Dinosaurier?",
          nl: "Welke actualistische studie informeert ons begrip van vroeg dinosaurussociaal gedrag?"
        },
        options: [
          { en: "Comparative analysis of modern crocodilian and bird aggregation patterns", es: "Análisis comparativo de patrones de agregación de cocodrilos y aves modernas", de: "Vergleichende Analyse moderner Krokodil- und Vogel-Aggregationsmuster", nl: "Vergelijkende analyse van moderne krokodil- en vogelaggregratiepatronen" },
          { en: "Laboratory experiments on fossil specimens", es: "Experimentos de laboratorio en especímenes fósiles", de: "Laborexperimente an fossilen Exemplaren", nl: "Laboratoriumexperimenten op fossiele exemplaren" },
          { en: "Computer simulations only", es: "Solo simulaciones por computadora", de: "Nur Computersimulationen", nl: "Alleen computersimulaties" },
          { en: "Historical human accounts", es: "Relatos históricos humanos", de: "Historische menschliche Berichte", nl: "Historische menselijke verslagen" }
        ],
        correct: 0,
        explanation: {
          en: "Comparative behavioral studies of modern archosaurs (crocodilians and birds) provide actualistic frameworks for interpreting gregarious behavior, mating systems, and parental care in early dinosaurs.",
          es: "Los estudios comparativos de comportamiento de arcosaurios modernos (cocodrilos y aves) proporcionan marcos actualísticos para interpretar comportamiento gregario, sistemas de apareamiento y cuidado parental en dinosaurios tempranos.",
          de: "Vergleichende Verhaltensstudien moderner Archosaurier (Krokodile und Vögel) liefern aktualistische Rahmen zur Interpretation von Herdenverhalten, Paarungssystemen und elterlicher Fürsorge bei frühen Dinosauriern.",
          nl: "Vergelijkende gedragsstudies van moderne archosauriërs (krokodillen en vogels) bieden actualistische frameworks voor het interpreteren van kuddegedrag, paringssystemen en ouderlijke zorg bij vroege dinosaurussen."
        }
      },
      {
        question: {
          en: "What macro-evolutionary pattern characterizes early dinosaur diversification?",
          es: "¿Qué patrón macro-evolutivo caracteriza la diversificación de los dinosaurios tempranos?",
          de: "Welches makroevolutionäre Muster charakterisiert die frühe Dinosaurierdiversifikation?",
          nl: "Welk macro-evolutionair patroon kenmerkt vroege dinosaurusdiversificatie?"
        },
        options: [
          { en: "Rapid adaptive radiation following ecological opportunity", es: "Radiación adaptativa rápida siguiendo oportunidad ecológica", de: "Schnelle adaptive Radiation nach ökologischer Gelegenheit", nl: "Snelle adaptieve radiatie na ecologische kans" },
          { en: "Gradual uniform change over millions of years", es: "Cambio uniforme gradual durante millones de años", de: "Allmählicher einheitlicher Wandel über Millionen von Jahren", nl: "Geleidelijke uniforme verandering over miljoenen jaren" },
          { en: "Stasis with no evolutionary change", es: "Estasis sin cambio evolutivo", de: "Stase ohne evolutionären Wandel", nl: "Stasis zonder evolutionaire verandering" },
          { en: "Single-lineage evolution only", es: "Evolución de un solo linaje únicamente", de: "Nur Einzel-Linien-Evolution", nl: "Alleen enkellijn-evolutie" }
        ],
        correct: 0,
        explanation: {
          en: "Early dinosaur evolution exhibits rapid adaptive radiation with quick morphological and ecological diversification following the ecological opportunities created by the end-Triassic extinction event.",
          es: "La evolución temprana de dinosaurios exhibe radiación adaptativa rápida con diversificación morfológica y ecológica rápida siguiendo las oportunidades ecológicas creadas por el evento de extinción del final del Triásico.",
          de: "Frühe Dinosaurierevolution zeigt schnelle adaptive Radiation mit rascher morphologischer und ökologischer Diversifikation nach den ökologischen Möglichkeiten, die durch das End-Trias-Aussterbeereignis geschaffen wurden.",
          nl: "Vroege dinosaurusevolutie vertoont snelle adaptieve radiatie met snelle morfologische en ecologische diversificatie na de ecologische kansen gecreëerd door de eind-Trias extinctie-gebeurtenis."
        }
      },
      {
        question: {
          en: "What computational approach best models early dinosaur evolutionary relationships?",
          es: "¿Qué enfoque computacional modela mejor las relaciones evolutivas de los dinosaurios tempranos?",
          de: "Welcher rechnerische Ansatz modelliert am besten die evolutionären Beziehungen früher Dinosaurier?",
          nl: "Welke computationele benadering modelleert het beste vroege dinosaurus evolutionaire relaties?"
        },
        options: [
          { en: "Tip-dating Bayesian phylogenetics with morphological clocks", es: "Filogenética bayesiana con datación de puntas con relojes morfológicos", de: "Tip-Dating Bayessche Phylogenetik mit morphologischen Uhren", nl: "Tip-dating Bayesiaanse fylogenenie met morfologische klokken" },
          { en: "Simple distance-based clustering", es: "Agrupamiento simple basado en distancia", de: "Einfache distanzbasierte Clusterung", nl: "Eenvoudige afstand-gebaseerde clustering" },
          { en: "Manual tree construction", es: "Construcción manual de árboles", de: "Manuelle Baumkonstruktion", nl: "Handmatige boomconstructie" },
          { en: "Random tree generation", es: "Generación aleatoria de árboles", de: "Zufällige Baumerzeugung", nl: "Willekeurige boomgeneratie" }
        ],
        correct: 0,
        explanation: {
          en: "Tip-dating Bayesian methods that incorporate stratigraphic age data directly into phylogenetic estimation provide the most robust framework for resolving rapid early dinosaur diversification with appropriate uncertainty quantification.",
          es: "Los métodos bayesianos de datación de puntas que incorporan datos de edad estratigráfica directamente en la estimación filogenética proporcionan el marco más robusto para resolver la rápida diversificación temprana de dinosaurios con cuantificación de incertidumbre apropiada.",
          de: "Tip-Dating Bayessche Methoden, die stratigraphische Altersdaten direkt in die phylogenetische Schätzung einbeziehen, bieten das robusteste Framework zur Auflösung der schnellen frühen Dinosaurierdiversifikation mit angemessener Unsicherheitsquantifizierung.",
          nl: "Tip-dating Bayesiaanse methoden die stratigrafische leeftijdsgegevens direct in fylogenetische schatting incorporeren, bieden het meest robuuste framework voor het oplossen van snelle vroege dinosaurusdiversificatie met passende onzekerheidskwantificering."
        }
      },
      {
        question: {
          en: "What does the distribution of early dinosaur clades across Pangaea reveal about dispersal patterns?",
          es: "¿Qué revela la distribución de clados de dinosaurios tempranos a través de Pangea sobre los patrones de dispersión?",
          de: "Was offenbart die Verteilung früher Dinosaurier-Kladen über Pangäa über Ausbreitungsmuster?",
          nl: "Wat onthult de distributie van vroege dinosaurus-claden over Pangaea over verspreidingspatronen?"
        },
        options: [
          { en: "Rapid intercontinental dispersal during Late Triassic supercontinent connectivity", es: "Dispersión intercontinental rápida durante la conectividad del supercontinente Triásico Tardío", de: "Schnelle interkontinentale Ausbreitung während der Konnektivität des Späten Trias-Superkontinents", nl: "Snelle intercontinentale verspreiding tijdens Late Trias supercontinentconnectiviteit" },
          { en: "Strict endemic evolution with no dispersal", es: "Evolución endémica estricta sin dispersión", de: "Strenge endemische Evolution ohne Ausbreitung", nl: "Strikte endemische evolutie zonder verspreiding" },
          { en: "Ocean-based dispersal routes only", es: "Solo rutas de dispersión basadas en océanos", de: "Nur ozeanbasierte Ausbreitungsrouten", nl: "Alleen oceaan-gebaseerde verspreidingsroutes" },
          { en: "Aerial dispersal through flight", es: "Dispersión aérea a través del vuelo", de: "Luftausbreitung durch Flug", nl: "Luchtverspreiding door vlucht" }
        ],
        correct: 0,
        explanation: {
          en: "The cosmopolitan distribution of early dinosaur clades like herrerasaurids and coelophysoids across Pangaea indicates rapid dispersal capabilities enabled by Late Triassic continental connectivity before rifting began.",
          es: "La distribución cosmopolita de clados de dinosaurios tempranos como herrerasáuridos y celofisoídeos a través de Pangea indica capacidades de dispersión rápida habilitadas por la conectividad continental del Triásico Tardío antes de que comenzara la ruptura.",
          de: "Die kosmopolitische Verteilung früher Dinosaurier-Kladen wie Herrerasauriden und Coelophysoiden über Pangäa zeigt schnelle Ausbreitungsfähigkeiten an, die durch die kontinentale Konnektivität der Späten Trias vor Beginn des Riftings ermöglicht wurden.",
          nl: "De kosmopolitische distributie van vroege dinosaurus-claden zoals herrerasauriden en coelophysoïden over Pangaea geeft snelle verspreidingscapaciteiten aan die mogelijk werden gemaakt door Late Trias continentale connectiviteit voordat rifting begon."
        }
      },
      {
        question: {
          en: "How did the postcranial pneumatization in early dinosaurs compare to extant archosaurs?",
          es: "¿Cómo se comparó la neumatización postcraneal en los primeros dinosaurios con los arcosaurios existentes?",
          de: "Wie verglich sich die postkranielle Pneumatisation bei frühen Dinosauriern mit existierenden Archosauriern?",
          nl: "Hoe vergeleken de postcraniële pneumatisatie bij vroege dinosaurussen met bestaande archosauriërs?"
        },
        options: [
          { en: "Limited to axial skeleton with incipient cervical pneumaticity", es: "Limitada al esqueleto axial con neumaticidad cervical incipiente", de: "Begrenzt auf axiales Skelett mit beginnender zervikaler Pneumatik", nl: "Beperkt tot axiaal skelet met beginnende cervicale pneumaticiteit" },
          { en: "Extensive throughout entire postcranial skeleton", es: "Extensiva a través de todo el esqueleto postcraneal", de: "Ausgedehnt über das gesamte postkranielle Skelett", nl: "Uitgebreid door het hele postcraniële skelet" },
          { en: "Completely absent in all early forms", es: "Completamente ausente en todas las formas tempranas", de: "Völlig abwesend in allen frühen Formen", nl: "Volledig afwezig in alle vroege vormen" },
          { en: "Restricted to hindlimb elements only", es: "Restringida solo a elementos de extremidades traseras", de: "Nur auf Hinterbeinelemente beschränkt", nl: "Beperkt tot alleen achterpootelemenetten" }
        ],
        correct: 0,
        explanation: {
          en: "Early dinosaurs showed limited postcranial pneumatization compared to modern birds, primarily affecting the axial skeleton with early stages of cervical vertebral pneumaticity, representing initial evolution toward avian respiratory efficiency.",
          es: "Los primeros dinosaurios mostraron neumatización postcraneal limitada comparada con las aves modernas, afectando principalmente el esqueleto axial con etapas tempranas de neumaticidad vertebral cervical, representando evolución inicial hacia la eficiencia respiratoria aviar.",
          de: "Frühe Dinosaurier zeigten begrenzte postkranielle Pneumatisation im Vergleich zu modernen Vögeln, hauptsächlich das axiale Skelett betreffend mit frühen Stadien zervikaler Wirbelpneumatik, was die anfängliche Evolution zur aviären respiratorischen Effizienz darstellt.",
          nl: "Vroege dinosaurussen toonden beperkte postcraniële pneumatisatie vergeleken met moderne vogels, hoofdzakelijk het axiale skelet betreffend met vroege stadia van cervicale vertebrale pneumaticiteit, wat initiële evolutie naar aviaire respiratoire efficiëntie vertegenwoordigt."
        }
      },
      {
        question: {
          en: "What isotopic evidence constrains early dinosaur metabolic rates during Triassic greenhouse conditions?",
          es: "¿Qué evidencia isotópica limita las tasas metabólicas de los dinosaurios tempranos durante las condiciones de invernadero Triásico?",
          de: "Welche isotopische Belege begrenzen frühe Dinosaurier-Stoffwechselraten während der Triassischen Treibhausbedingungen?",
          nl: "Welk isotopisch bewijs beperkt vroege dinosaurus metabolische snelheden tijdens Trias-broeikasomstandigheden?"
        },
        options: [
          { en: "δ18O values indicating elevated but variable metabolic heat production", es: "Valores δ18O indicando producción de calor metabólico elevada pero variable", de: "δ18O-Werte, die erhöhte aber variable metabolische Wärmeproduktion anzeigen", nl: "δ18O waarden die verhoogde maar variabele metabolische warmteproductie aangeven" },
          { en: "Complete thermal equilibrium with ambient temperatures", es: "Equilibrio térmico completo con temperaturas ambientales", de: "Vollständiges thermisches Gleichgewicht mit Umgebungstemperaturen", nl: "Volledig thermisch evenwicht met omgevingstemperaturen" },
          { en: "Evidence of seasonal torpor states", es: "Evidencia de estados de torpor estacional", de: "Belege für saisonale Torporzustände", nl: "Bewijs van seizoenstorpor toestanden" },
          { en: "Identical thermal profiles to modern mammals", es: "Perfiles térmicos idénticos a los mamíferos modernos", de: "Identische thermische Profile zu modernen Säugetieren", nl: "Identieke thermische profielen als moderne zoogdieren" }
        ],
        correct: 0,
        explanation: {
          en: "Oxygen isotope analysis from early dinosaur bone phosphate suggests elevated body temperatures with some variation, indicating intermediate metabolic rates between modern reptiles and mammals, adapted to Triassic warm climate conditions.",
          es: "El análisis de isótopos de oxígeno del fosfato óseo de dinosaurios tempranos sugiere temperaturas corporales elevadas con alguna variación, indicando tasas metabólicas intermedias entre reptiles y mamíferos modernos, adaptadas a las condiciones climáticas cálidas del Triásico.",
          de: "Sauerstoff-Isotopen-Analyse von frühem Dinosaurier-Knochenphosphat deutet auf erhöhte Körpertemperaturen mit einiger Variation hin, was auf intermediate Stoffwechselraten zwischen modernen Reptilien und Säugetieren hindeutet, angepasst an die warmen Klimabedingungen der Trias.",
          nl: "Zuurstof-isotoop analyse van vroeg dinosaurus-botfosfaat suggereert verhoogde lichaamstemperaturen met enige variatie, wat intermediate metabolische snelheden aangeeft tussen moderne reptielen en zoogdieren, aangepast aan Trias warme klimaatomstandigheden."
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