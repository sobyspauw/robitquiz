// Dinosaur Fossils Quiz - Level 6: Advanced Fossil Study Methods
(function() {
  const level6 = {
    name: {
      en: "Dinosaur Fossils Level 6",
      es: "Fosiles de Dinosaurios Nivel 6",
      de: "Dinosaurier Fossilien Stufe 6",
      nl: "Dino Fossielen Level 6"
    },
    questions: [
      {
        question: {
          en: "What does CT scanning reveal about dinosaur fossils that traditional methods cannot?",
          es: "¿Qué revela el escaneo CT sobre los fósiles de dinosaurios que los métodos tradicionales no pueden?",
          de: "Was enthüllt die CT-Untersuchung über Dinosaurier-Fossilien, was traditionelle Methoden nicht können?",
          nl: "Wat onthult CT-scanning over dinosaurusfossielen dat traditionele methoden niet kunnen?"
        },
        options: [
          { en: "Internal bone structure and hidden elements", es: "Estructura ósea interna y elementos ocultos", de: "Innere Knochenstruktur und versteckte Elemente", nl: "Interne botstructuur en verborgen elementen" },
          { en: "The exact age of the fossil", es: "La edad exacta del fósil", de: "Das genaue Alter des Fossils", nl: "De exacte leeftijd van het fossiel" },
          { en: "The DNA sequence", es: "La secuencia de ADN", de: "Die DNA-Sequenz", nl: "De DNA-sequentie" },
          { en: "The original color patterns", es: "Los patrones de color originales", de: "Die ursprünglichen Farbmuster", nl: "De oorspronkelijke kleurpatronen" }
        ],
        correct: 0,
        explanation: {
          en: "CT scanning allows paleontologists to see inside fossils without damaging them, revealing internal bone structure, air spaces, and fossils still embedded in rock matrix.",
          es: "El escaneo CT permite a los paleontólogos ver dentro de los fósiles sin dañarlos, revelando la estructura ósea interna, espacios de aire y fósiles aún incrustados en la matriz rocosa.",
          de: "CT-Scans ermöglichen es Paläontologen, in Fossilien hineinzusehen, ohne sie zu beschädigen, und enthüllen die innere Knochenstruktur, Lufträume und noch in der Gesteinsmatrix eingebettete Fossilien.",
          nl: "CT-scanning stelt paleontologen in staat om in fossielen te kijken zonder ze te beschadigen, waarbij de interne botstructuur, luchtholes en fossielen die nog in de gesteentematrix zitten worden onthuld."
        }
      },
      {
        question: {
          en: "What is synchrotron radiation analysis used for in dinosaur fossil research?",
          es: "¿Para qué se utiliza el análisis de radiación sincrotrón en la investigación de fósiles de dinosaurios?",
          de: "Wofür wird die Synchrotron-Strahlungsanalyse in der Dinosaurier-Fossilforschung verwendet?",
          nl: "Waarvoor wordt synchrotronstralinganalyse gebruikt in dinosaurusfossielonderzoek?"
        },
        options: [
          { en: "Detecting trace elements and chemical composition", es: "Detectar elementos traza y composición química", de: "Nachweis von Spurenelementen und chemischer Zusammensetzung", nl: "Detectie van spoorelementen en chemische samenstelling" },
          { en: "Determining the weight of fossils", es: "Determinar el peso de los fósiles", de: "Bestimmung des Gewichts von Fossilien", nl: "Het gewicht van fossielen bepalen" },
          { en: "Measuring fossil hardness", es: "Medir la dureza del fósil", de: "Messung der Fossilienhärte", nl: "Fossielhardheid meten" },
          { en: "Counting fossil layers", es: "Contar capas fósiles", de: "Zählung von Fossilschichten", nl: "Fossiellagen tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Synchrotron radiation provides extremely intense X-rays that can analyze the elemental composition of fossils at the microscopic level, revealing information about diet, metabolism, and preservation processes.",
          es: "La radiación sincrotrón proporciona rayos X extremadamente intensos que pueden analizar la composición elemental de los fósiles a nivel microscópico, revelando información sobre dieta, metabolismo y procesos de preservación.",
          de: "Synchrotronstrahlung liefert extrem intensive Röntgenstrahlen, die die Elementzusammensetzung von Fossilien auf mikroskopischer Ebene analysieren können und Informationen über Ernährung, Stoffwechsel und Erhaltungsprozesse preisgeben.",
          nl: "Synchrotronstraling levert extreem intense röntgenstralen die de elementaire samenstelling van fossielen op microscopisch niveau kunnen analyseren, waarbij informatie over voeding, metabolisme en bewaringsprocessen wordt onthuld."
        }
      },
      {
        question: {
          en: "What does histological analysis of dinosaur bones reveal?",
          es: "¿Qué revela el análisis histológico de los huesos de dinosaurios?",
          de: "Was enthüllt die histologische Analyse von Dinosaurierknochen?",
          nl: "Wat onthult histologische analyse van dinosaurusbotten?"
        },
        options: [
          { en: "Growth patterns, age, and metabolism rates", es: "Patrones de crecimiento, edad y tasas metabólicas", de: "Wachstumsmuster, Alter und Stoffwechselraten", nl: "Groeipatronen, leeftijd en stofwisselingssnelheden" },
          { en: "The exact species identification", es: "La identificación exacta de especies", de: "Die genaue Artidentifikation", nl: "De exacte soortidentificatie" },
          { en: "The fossil's geographic origin", es: "El origen geográfico del fósil", de: "Die geografische Herkunft des Fossils", nl: "De geografische oorsprong van het fossiel" },
          { en: "The cause of death", es: "La causa de muerte", de: "Die Todesursache", nl: "De doodsoorzaak" }
        ],
        correct: 0,
        explanation: {
          en: "Histological analysis involves examining thin sections of bone under a microscope to study growth rings, bone tissue types, and vascular patterns that indicate growth rates, age at death, and metabolic activity.",
          es: "El análisis histológico implica examinar secciones delgadas de hueso bajo un microscopio para estudiar anillos de crecimiento, tipos de tejido óseo y patrones vasculares que indican tasas de crecimiento, edad al morir y actividad metabólica.",
          de: "Die histologische Analyse beinhaltet die Untersuchung dünner Knochenschnitte unter dem Mikroskop, um Wachstumsringe, Knochengewebe-Typen und vaskuläre Muster zu studieren, die Wachstumsraten, Sterbealter und Stoffwechselaktivität anzeigen.",
          nl: "Histologische analyse houdt in dat dunne botcoupes onder een microscoop worden onderzocht om groeiringen, bottweefseltypen en vasculaire patronen te bestuderen die groeisnelheden, leeftijd bij overlijden en metabolische activiteit aangeven."
        }
      },
      {
        question: {
          en: "What is the purpose of geochemical analysis in paleontology?",
          es: "¿Cuál es el propósito del análisis geoquímico en paleontología?",
          de: "Was ist der Zweck der geochemischen Analyse in der Paläontologie?",
          nl: "Wat is het doel van geochemische analyse in de paleontologie?"
        },
        options: [
          { en: "To study ancient environments and dietary habits", es: "Estudiar ambientes antiguos y hábitos dietéticos", de: "Alte Umgebungen und Ernährungsgewohnheiten zu studieren", nl: "Het bestuderen van oude omgevingen en voedingsgewoonten" },
          { en: "To determine fossil color", es: "Determinar el color del fósil", de: "Die Fossilfarbe zu bestimmen", nl: "De fossielkleur bepalen" },
          { en: "To measure fossil density", es: "Medir la densidad del fósil", de: "Die Fossiliendichte zu messen", nl: "Fossiesdichtheid meten" },
          { en: "To count fossil fragments", es: "Contar fragmentos fósiles", de: "Fossilfragmente zu zählen", nl: "Fossielfragmenten tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Geochemical analysis examines isotope ratios and trace elements in fossils to reconstruct ancient climates, temperatures, dietary preferences, and migration patterns of dinosaurs.",
          es: "El análisis geoquímico examina las proporciones de isótopos y elementos traza en los fósiles para reconstruir climas antiguos, temperaturas, preferencias dietéticas y patrones migratorios de los dinosaurios.",
          de: "Die geochemische Analyse untersucht Isotopenverhältnisse und Spurenelemente in Fossilien, um alte Klimata, Temperaturen, Ernährungspräferenzen und Migrationsmuster von Dinosauriern zu rekonstruieren.",
          nl: "Geochemische analyse onderzoekt isotopenverhoudingen en spoorelementen in fossielen om oude klimaten, temperaturen, voedingsvoorkeuren en migratiepatronen van dinosaurussen te reconstrueren."
        }
      },
      {
        question: {
          en: "What advantage does electron microscopy provide in fossil analysis?",
          es: "¿Qué ventaja proporciona la microscopía electrónica en el análisis de fósiles?",
          de: "Welchen Vorteil bietet die Elektronenmikroskopie bei der Fossilanalyse?",
          nl: "Welk voordeel biedt elektronenmicroscopie bij fossiělanalyse?"
        },
        options: [
          { en: "Ultra-high magnification revealing cellular structures", es: "Magnificación ultra-alta revelando estructuras celulares", de: "Ultra-hohe Vergrößerung enthüllt Zellstrukturen", nl: "Ultra-hoge vergroting die celstructuren onthult" },
          { en: "Faster scanning of large specimens", es: "Escaneo más rápido de especímenes grandes", de: "Schnelleres Scannen großer Exemplare", nl: "Sneller scannen van grote specimens" },
          { en: "Better color reproduction", es: "Mejor reproducción del color", de: "Bessere Farbwiedergabe", nl: "Betere kleurweergave" },
          { en: "Automatic species identification", es: "Identificación automática de especies", de: "Automatische Artidentifikation", nl: "Automatische soortidentificatie" }
        ],
        correct: 0,
        explanation: {
          en: "Electron microscopy can magnify specimens up to 2 million times, allowing scientists to observe preserved cellular structures, organelles, and even molecular-level details in exceptionally preserved fossils.",
          es: "La microscopía electrónica puede magnificar especímenes hasta 2 millones de veces, permitiendo a los científicos observar estructuras celulares preservadas, orgánulos e incluso detalles a nivel molecular en fósiles excepcionalmente preservados.",
          de: "Die Elektronenmikroskopie kann Exemplare bis zu 2 Millionen Mal vergrößern und ermöglicht es Wissenschaftlern, erhaltene Zellstrukturen, Organellen und sogar Details auf molekularer Ebene in außergewöhnlich erhaltenen Fossilien zu beobachten.",
          nl: "Elektronenmicroscopie kan specimens tot 2 miljoen keer vergroten, waardoor wetenschappers bewaarde celstructuren, organellen en zelfs details op moleculair niveau kunnen observeren in uitzonderlijk goed bewaarde fossielen."
        }
      },
      {
        question: {
          en: "What is X-ray diffraction used to determine in fossil studies?",
          es: "¿Para qué se utiliza la difracción de rayos X en los estudios de fósiles?",
          de: "Wofür wird Röntgenbeugung in Fossilstudien verwendet?",
          nl: "Waarvoor wordt röntgendiffractie gebruikt in fossielstudies?"
        },
        options: [
          { en: "Crystal structure and mineral composition", es: "Estructura cristalina y composición mineral", de: "Kristallstruktur und Mineralzusammensetzung", nl: "Kristalstructuur en mineraalsamenstelling" },
          { en: "Fossil age determination", es: "Determinación de la edad del fósil", de: "Fossilaltersbestimmung", nl: "Fossiělleeftijdbepaling" },
          { en: "DNA extraction efficiency", es: "Eficiencia de extracción de ADN", de: "DNA-Extraktionseffizienz", nl: "DNA-extractie-efficiëntie" },
          { en: "Fossil weight measurement", es: "Medición del peso del fósil", de: "Fossilgewichtsmessung", nl: "Fossiělgewichtmeting" }
        ],
        correct: 0,
        explanation: {
          en: "X-ray diffraction analyzes how X-rays scatter when they hit crystalline materials, revealing the mineral composition and crystal structure of fossilized materials and surrounding rock matrix.",
          es: "La difracción de rayos X analiza cómo se dispersan los rayos X cuando golpean materiales cristalinos, revelando la composición mineral y la estructura cristalina de materiales fosilizados y la matriz rocosa circundante.",
          de: "Die Röntgenbeugung analysiert, wie sich Röntgenstrahlen streuen, wenn sie kristalline Materialien treffen, und enthüllt die Mineralzusammensetzung und Kristallstruktur von versteinerten Materialien und der umgebenden Gesteinsmatrix.",
          nl: "Röntgendiffractie analyseert hoe röntgenstralen verstrooien wanneer ze kristallijne materialen raken, waarbij de mineraalsamenstelling en kristalstructuur van gefossiliseerde materialen en omliggende gesteentematrix wordt onthuld."
        }
      },
      {
        question: {
          en: "What information can stable isotope analysis provide about dinosaurs?",
          es: "¿Qué información puede proporcionar el análisis de isótopos estables sobre los dinosaurios?",
          de: "Welche Informationen kann die Analyse stabiler Isotope über Dinosaurier liefern?",
          nl: "Welke informatie kan stabiele isotopenanalyse over dinosaurussen verschaffen?"
        },
        options: [
          { en: "Diet, body temperature, and habitat preferences", es: "Dieta, temperatura corporal y preferencias de hábitat", de: "Ernährung, Körpertemperatur und Habitatpräferenzen", nl: "Dieet, lichaamstemperatuur en habitatvoorkeuren" },
          { en: "Exact date of death", es: "Fecha exacta de muerte", de: "Genaues Todesdatum", nl: "Exacte sterfdatum" },
          { en: "Number of offspring", es: "Número de descendientes", de: "Anzahl der Nachkommen", nl: "Aantal nakomelingen" },
          { en: "Brain size measurements", es: "Mediciones del tamaño del cerebro", de: "Gehirngrößenmessungen", nl: "Hersengroottemetingen" }
        ],
        correct: 0,
        explanation: {
          en: "Stable isotope ratios (like carbon-13, oxygen-18, nitrogen-15) in fossil bones and teeth reflect the isotopic composition of food and water consumed, revealing dietary habits, metabolic rates, and environmental conditions.",
          es: "Las proporciones de isótopos estables (como carbono-13, oxígeno-18, nitrógeno-15) en huesos y dientes fósiles reflejan la composición isotópica de alimentos y agua consumidos, revelando hábitos dietéticos, tasas metabólicas y condiciones ambientales.",
          de: "Stabile Isotopenverhältnisse (wie Kohlenstoff-13, Sauerstoff-18, Stickstoff-15) in fossilen Knochen und Zähnen spiegeln die Isotopenzusammensetzung der konsumierten Nahrung und des Wassers wider und enthüllen Ernährungsgewohnheiten, Stoffwechselraten und Umweltbedingungen.",
          nl: "Stabiele isotopenverhoudingen (zoals koolstof-13, zuurstof-18, stikstof-15) in fossiele botten en tanden weerspiegelen de isotopische samenstelling van geconsumeerd voedsel en water, waarbij voedingsgewoonten, stofwisselingssnelheden en omgevingscondities worden onthuld."
        }
      },
      {
        question: {
          en: "What is biomechanical analysis used to determine in dinosaur research?",
          es: "¿Para qué se utiliza el análisis biomecánico en la investigación de dinosaurios?",
          de: "Wofür wird biomechanische Analyse in der Dinosaurierforschung verwendet?",
          nl: "Waarvoor wordt biomechanische analyse gebruikt in dinosaurusonderzoek?"
        },
        options: [
          { en: "Locomotion, bite force, and functional morphology", es: "Locomoción, fuerza de mordida y morfología funcional", de: "Fortbewegung, Bisskraft und funktionale Morphologie", nl: "Voortbeweging, beetkracht en functionele morfologie" },
          { en: "Fossil preservation quality", es: "Calidad de preservación del fósil", de: "Qualität der Fossilerhaltung", nl: "Kwaliteit van fossielbeweging" },
          { en: "Genetic relationships", es: "Relaciones genéticas", de: "Genetische Beziehungen", nl: "Genetische verwantschappen" },
          { en: "Reproductive behavior", es: "Comportamiento reproductivo", de: "Fortpflanzungsverhalten", nl: "Reproductief gedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Biomechanical analysis uses engineering principles to study how dinosaur skeletons functioned, including stress distribution in bones, muscle attachment sites, and range of motion to understand how they moved and fed.",
          es: "El análisis biomecánico utiliza principios de ingeniería para estudiar cómo funcionaban los esqueletos de dinosaurios, incluyendo distribución de estrés en huesos, sitios de unión muscular y rango de movimiento para entender cómo se movían y alimentaban.",
          de: "Die biomechanische Analyse verwendet ingenieurtechnische Prinzipien, um zu studieren, wie Dinosaurierskelette funktionierten, einschließlich Spannungsverteilung in Knochen, Muskelansatzstellen und Bewegungsumfang, um zu verstehen, wie sie sich bewegten und nährten.",
          nl: "Biomechanische analyse gebruikt technische principes om te bestuderen hoe dinosaurusskeletten functioneerden, inclusief spanningsverdeling in botten, spierhechtingsplaatsen en bewegingsbereik om te begrijpen hoe ze bewogen en aten."
        }
      },
      {
        question: {
          en: "What does scanning electron microscopy (SEM) reveal about dinosaur eggshells?",
          es: "¿Qué revela la microscopía electrónica de barrido (SEM) sobre las cáscaras de huevos de dinosaurios?",
          de: "Was enthüllt die Rasterelektronenmikroskopie (REM) über Dinosaurier-Eierschalen?",
          nl: "Wat onthult scanning elektronenmicroscopie (SEM) over dinosauruseischalen?"
        },
        options: [
          { en: "Pore structure, shell thickness, and microstructure", es: "Estructura de poros, grosor de cáscara y microestructura", de: "Porenstruktur, Schalendicke und Mikrostruktur", nl: "Poriestructuur, schaaldikte en microstructuur" },
          { en: "The embryo's DNA sequence", es: "La secuencia de ADN del embrión", de: "Die DNA-Sequenz des Embryos", nl: "De DNA-sequentie van het embryo" },
          { en: "The exact incubation period", es: "El período exacto de incubación", de: "Die genaue Inkubationszeit", nl: "De exacte broedperiode" },
          { en: "The parent's behavior patterns", es: "Los patrones de comportamiento de los padres", de: "Die Verhaltensmuster der Eltern", nl: "De gedragspatronen van de ouders" }
        ],
        correct: 0,
        explanation: {
          en: "SEM provides detailed images of eggshell surfaces and cross-sections, revealing pore density and size (important for gas exchange), shell layer organization, and crystalline structure that indicates nesting environment and parental care.",
          es: "SEM proporciona imágenes detalladas de superficies y secciones transversales de cáscaras de huevos, revelando densidad y tamaño de poros (importante para intercambio gaseoso), organización de capas de cáscara y estructura cristalina que indica ambiente de anidación y cuidado parental.",
          de: "REM liefert detaillierte Bilder von Eierschalenoberflächen und Querschnitten und enthüllt Porendichte und -größe (wichtig für Gasaustausch), Schalenschichtorganisation und Kristallstruktur, die Nistumgebung und elterliche Fürsorge anzeigt.",
          nl: "SEM levert gedetailleerde beelden van eischaaloppervlakken en dwarsdoorsneden, waarbij poriedichtheid en -grootte (belangrijk voor gasuitwisseling), schaallaagorganisatie en kristallijne structuur wordt onthuld die de nestomgeving en ouderlijke zorg aangeeft."
        }
      },
      {
        question: {
          en: "What is laser-stimulated fluorescence used for in fossil analysis?",
          es: "¿Para qué se utiliza la fluorescencia estimulada por láser en el análisis de fósiles?",
          de: "Wofür wird laser-stimulierte Fluoreszenz in der Fossilanalyse verwendet?",
          nl: "Waarvoor wordt laser-gestimuleerde fluorescentie gebruikt in fossiělanalyse?"
        },
        options: [
          { en: "Revealing soft tissue preservation and organic compounds", es: "Revelando preservación de tejidos blandos y compuestos orgánicos", de: "Enthüllung von Weichgewebeerhaltung und organischen Verbindungen", nl: "Het onthullen van zachte weefselbeweging en organische verbindingen" },
          { en: "Measuring fossil hardness", es: "Midiendo la dureza del fósil", de: "Messung der Fossilienhärte", nl: "Fossiělhardheid meten" },
          { en: "Determining exact fossil weight", es: "Determinando el peso exacto del fósil", de: "Bestimmung des genauen Fossilgewichts", nl: "Bepalen van exact fossielgewicht" },
          { en: "Counting growth rings", es: "Contando anillos de crecimiento", de: "Zählung von Wachstumsringen", nl: "Groeiringen tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Laser-stimulated fluorescence can make organic compounds glow, revealing preserved soft tissues, skin impressions, feathers, and other organic materials that are normally invisible under regular light.",
          es: "La fluorescencia estimulada por láser puede hacer que los compuestos orgánicos brillen, revelando tejidos blandos preservados, impresiones de piel, plumas y otros materiales orgánicos que normalmente son invisibles bajo luz regular.",
          de: "Laser-stimulierte Fluoreszenz kann organische Verbindungen zum Leuchten bringen und erhaltene Weichgewebe, Hautabdrücke, Federn und andere organische Materialien enthüllen, die normalerweise unter normalem Licht unsichtbar sind.",
          nl: "Laser-gestimuleerde fluorescentie kan organische verbindingen laten gloeien, waarbij bewaarde zachte weefsels, huidafdrukken, veren en andere organische materialen worden onthuld die normaal onzichtbaar zijn onder gewoon licht."
        }
      },
      {
        question: {
          en: "What information can neutron tomography provide about fossils?",
          es: "¿Qué información puede proporcionar la tomografía de neutrones sobre los fósiles?",
          de: "Welche Informationen kann die Neutronentomografie über Fossilien liefern?",
          nl: "Welke informatie kan neutrontomografie over fossielen verschaffen?"
        },
        options: [
          { en: "Light element detection and hydrogen content analysis", es: "Detección de elementos ligeros y análisis de contenido de hidrógeno", de: "Nachweis leichter Elemente und Wasserstoffgehaltsanalyse", nl: "Detectie van lichte elementen en analyse van waterstofgehalte" },
          { en: "Fossil color restoration", es: "Restauración del color del fósil", de: "Fossilfarb-Wiederherstellung", nl: "Fossielkleurherstel" },
          { en: "Automatic dating of specimens", es: "Datación automática de especímenes", de: "Automatische Datierung von Exemplaren", nl: "Automatische datering van specimens" },
          { en: "Sound wave analysis", es: "Análisis de ondas sonoras", de: "Schallwellenanalyse", nl: "Geluidsgolfanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Neutron tomography is particularly sensitive to light elements like hydrogen and carbon, making it excellent for detecting organic residues, water content, and hydrocarbon compounds in fossils that X-rays might miss.",
          es: "La tomografía de neutrones es particularmente sensible a elementos ligeros como hidrógeno y carbono, lo que la hace excelente para detectar residuos orgánicos, contenido de agua y compuestos de hidrocarburos en fósiles que los rayos X podrían pasar por alto.",
          de: "Die Neutronentomografie ist besonders empfindlich für leichte Elemente wie Wasserstoff und Kohlenstoff und eignet sich daher hervorragend zum Nachweis organischer Rückstände, Wassergehalts und Kohlenwasserstoffverbindungen in Fossilien, die Röntgenstrahlen möglicherweise übersehen.",
          nl: "Neutrontomografie is bijzonder gevoelig voor lichte elementen zoals waterstof en koolstof, waardoor het uitstekend geschikt is voor het detecteren van organische residuen, watergehalte en koolwaterstofverbindingen in fossielen die röntgenstralen mogelijk missen."
        }
      },
      {
        question: {
          en: "What does micro-CT analysis reveal about dinosaur brain cases?",
          es: "¿Qué revela el análisis de micro-CT sobre las cajas craneales de los dinosaurios?",
          de: "Was enthüllt die Mikro-CT-Analyse über Dinosaurier-Gehirnkästen?",
          nl: "Wat onthult micro-CT-analyse over dinosaurushersenkasten?"
        },
        options: [
          { en: "Brain structure, cranial nerves, and sensory capabilities", es: "Estructura cerebral, nervios craneales y capacidades sensoriales", de: "Gehirnstruktur, Hirnnerven und sensorische Fähigkeiten", nl: "Hersenstructuur, hersenzenuwen en sensorische mogelijkheden" },
          { en: "The dinosaur's intelligence level", es: "El nivel de inteligencia del dinosaurio", de: "Das Intelligenzniveau des Dinosauriers", nl: "Het intelligentieniveau van de dinosaurus" },
          { en: "The exact cause of extinction", es: "La causa exacta de extinción", de: "Die genaue Ursache des Aussterbens", nl: "De exacte oorzaak van uitsterven" },
          { en: "The dinosaur's social behavior", es: "El comportamiento social del dinosaurio", de: "Das Sozialverhalten des Dinosauriers", nl: "Het sociale gedrag van de dinosaurus" }
        ],
        correct: 0,
        explanation: {
          en: "High-resolution micro-CT scans of skull cavities can create digital endocasts showing brain shape, olfactory bulb size, optic nerve pathways, and inner ear structure, indicating sensory capabilities and balance mechanisms.",
          es: "Los escaneos de micro-CT de alta resolución de cavidades craneales pueden crear endocasts digitales mostrando forma cerebral, tamaño del bulbo olfatorio, vías del nervio óptico y estructura del oído interno, indicando capacidades sensoriales y mecanismos de equilibrio.",
          de: "Hochauflösende Mikro-CT-Scans von Schädelhöhlen können digitale Endocasts erstellen, die Gehirnform, Größe des Riechkolbens, Sehnerv-Bahnen und Innenohrstruktur zeigen und sensorische Fähigkeiten und Gleichgewichtsmechanismen anzeigen.",
          nl: "Hoge-resolutie micro-CT-scans van schedelholtes kunnen digitale endocasts creëren die hersenvorm, grootte van de reukbol, oogzenuwbanen en binnenoorstructuur tonen, waarbij sensorische mogelijkheden en balansmechanismen worden aangegeven."
        }
      },
      {
        question: {
          en: "What is confocal laser scanning microscopy used to study in fossils?",
          es: "¿Para qué se utiliza la microscopía confocal de barrido láser para estudiar en fósiles?",
          de: "Wofür wird die konfokale Laser-Scanning-Mikroskopie zur Untersuchung von Fossilien verwendet?",
          nl: "Waarvoor wordt confocale laser scanning microscopie gebruikt om fossielen te bestuderen?"
        },
        options: [
          { en: "Three-dimensional surface topography and fine details", es: "Topografía superficial tridimensional y detalles finos", de: "Dreidimensionale Oberflächentopografie und feine Details", nl: "Driedimensionale oppervlaktetopografie en fijne details" },
          { en: "Radioactive decay patterns", es: "Patrones de desintegración radiactiva", de: "Radioaktive Zerfallsmuster", nl: "Radioactieve vervalpatronen" },
          { en: "Magnetic field strength", es: "Intensidad del campo magnético", de: "Magnetfeldstärke", nl: "Magnetische veldsterkte" },
          { en: "Electrical conductivity", es: "Conductividad eléctrica", de: "Elektrische Leitfähigkeit", nl: "Elektrische geleidbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "Confocal microscopy uses laser light to create sharp, high-contrast 3D images of fossil surfaces, revealing minute details like scale patterns, feather structures, and surface textures with exceptional depth resolution.",
          es: "La microscopía confocal utiliza luz láser para crear imágenes 3D nítidas y de alto contraste de superficies fósiles, revelando detalles diminutos como patrones de escamas, estructuras de plumas y texturas superficiales con resolución de profundidad excepcional.",
          de: "Die konfokale Mikroskopie verwendet Laserlicht, um scharfe, kontrastreiche 3D-Bilder von Fossiloberflächen zu erstellen und winzige Details wie Schuppenmuster, Federstrukturen und Oberflächentexturen mit außergewöhnlicher Tiefenauflösung zu enthüllen.",
          nl: "Confocale microscopie gebruikt laserlicht om scherpe, hoge-contrast 3D-beelden van fossieloppervlakken te creëren, waarbij minuscule details zoals schubpatronen, veerstructuren en oppervlaktetexturen met uitzonderlijke diepteresolutie worden onthuld."
        }
      },
      {
        question: {
          en: "How does X-ray fluorescence (XRF) spectroscopy help in fossil analysis?",
          es: "¿Cómo ayuda la espectroscopía de fluorescencia de rayos X (XRF) en el análisis de fósiles?",
          de: "Wie hilft die Röntgenfluoreszenz-(XRF)-Spektroskopie bei der Fossilanalyse?",
          nl: "Hoe helpt röntgenfluorescentie (XRF) spectroscopie bij fossielanalyse?"
        },
        options: [
          { en: "Rapid elemental composition analysis without sample destruction", es: "Análisis rápido de composición elemental sin destrucción de muestra", de: "Schnelle Elementzusammensetzungsanalyse ohne Probenzerstörung", nl: "Snelle elementaire samenstellingsanalyse zonder monstervernietiging" },
          { en: "Measuring fossil flexibility", es: "Midiendo flexibilidad del fósil", de: "Messung der Fossilienschexibilität", nl: "Meten van fossiělflexibiliteit" },
          { en: "Determining fossil transparency", es: "Determinando transparencia del fósil", de: "Bestimmung der Fossilitransparenz", nl: "Bepalen van fossieltransparantie" },
          { en: "Calculating fossil volume", es: "Calculando volumen del fósil", de: "Berechnung des Fossilvolumens", nl: "Berekenen van fossielvolume" }
        ],
        correct: 0,
        explanation: {
          en: "XRF spectroscopy identifies and quantifies elements by measuring characteristic X-rays emitted when a sample is excited by high-energy X-rays, providing rapid, non-destructive chemical analysis of fossil composition.",
          es: "La espectroscopía XRF identifica y cuantifica elementos midiendo rayos X característicos emitidos cuando una muestra es excitada por rayos X de alta energía, proporcionando análisis químico rápido y no destructivo de la composición del fósil.",
          de: "Die XRF-Spektroskopie identifiziert und quantifiziert Elemente durch Messung charakteristischer Röntgenstrahlen, die emittiert werden, wenn eine Probe durch hochenergetische Röntgenstrahlen angeregt wird, und liefert eine schnelle, zerstörungsfreie chemische Analyse der Fossilzusammensetzung.",
          nl: "XRF-spectroscopie identificeert en kwantificeert elementen door karakteristieke röntgenstralen te meten die worden uitgezonden wanneer een monster wordt geëxciteerd door hoogenergetische röntgenstralen, waarbij snelle, niet-destructieve chemische analyse van fossielsamenstelling wordt geleverd."
        }
      },
      {
        question: {
          en: "What can phase-contrast X-ray imaging reveal that conventional X-rays cannot?",
          es: "¿Qué puede revelar la imagen de rayos X de contraste de fase que los rayos X convencionales no pueden?",
          de: "Was kann die Phasenkontrast-Röntgenbildgebung enthüllen, was herkömmliche Röntgenstrahlen nicht können?",
          nl: "Wat kan fascontrast röntgenbeeldvorming onthullen dat conventionele röntgenstralen niet kunnen?"
        },
        options: [
          { en: "Soft tissues and low-density materials with enhanced contrast", es: "Tejidos blandos y materiales de baja densidad con contraste mejorado", de: "Weichgewebe und Materialien geringer Dichte mit verbessertem Kontrast", nl: "Zachte weefsels en materialen met lage dichtheid met verbeterd contrast" },
          { en: "The age of the fossil in exact years", es: "La edad del fósil en años exactos", de: "Das Alter des Fossils in genauen Jahren", nl: "De leeftijd van het fossiel in exacte jaren" },
          { en: "The location where the fossil was found", es: "La ubicación donde se encontró el fósil", de: "Der Ort, wo das Fossil gefunden wurde", nl: "De locatie waar het fossiel werd gevonden" },
          { en: "The weather conditions during fossilization", es: "Las condiciones climáticas durante la fosilización", de: "Die Wetterbedingungen während der Fossilisation", nl: "De weersomstandigheden tijdens fossilisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Phase-contrast imaging detects differences in how X-rays are refracted rather than just absorbed, revealing soft tissues, cartilage, and organic materials that have similar density to surrounding rock but different optical properties.",
          es: "La imagen de contraste de fase detecta diferencias en cómo se refractan los rayos X en lugar de solo ser absorbidos, revelando tejidos blandos, cartílago y materiales orgánicos que tienen densidad similar a la roca circundante pero diferentes propiedades ópticas.",
          de: "Die Phasenkontrastbildgebung erkennt Unterschiede in der Brechung von Röntgenstrahlen anstatt nur in der Absorption und enthüllt Weichgewebe, Knorpel und organische Materialien, die ähnliche Dichte wie das umgebende Gestein haben, aber unterschiedliche optische Eigenschaften.",
          nl: "Fase-contrastbeeldvorming detecteert verschillen in hoe röntgenstralen worden gebroken in plaats van alleen geabsorbeerd, waarbij zachte weefsels, kraakbeen en organische materialen worden onthuld die vergelijkbare dichtheid hebben als omliggend gesteente maar verschillende optische eigenschappen."
        }
      },
      {
        question: {
          en: "What is the primary advantage of time-of-flight secondary ion mass spectrometry (ToF-SIMS) in fossil research?",
          es: "¿Cuál es la ventaja principal de la espectrometría de masas de iones secundarios de tiempo de vuelo (ToF-SIMS) en la investigación de fósiles?",
          de: "Was ist der Hauptvorteil der Flugzeit-Sekundärionen-Massenspektrometrie (ToF-SIMS) in der Fossilforschung?",
          nl: "Wat is het primaire voordeel van time-of-flight secundaire ion massaspectrometrie (ToF-SIMS) in fossielonderzoek?"
        },
        options: [
          { en: "Molecular imaging and organic compound identification", es: "Imagen molecular e identificación de compuestos orgánicos", de: "Molekulare Bildgebung und Identifikation organischer Verbindungen", nl: "Moleculaire beeldvorming en identificatie van organische verbindingen" },
          { en: "Measuring fossil temperature", es: "Midiendo temperatura del fósil", de: "Messung der Fossiltemperatur", nl: "Meten van fossieltemperatuur" },
          { en: "Determining fossil elasticity", es: "Determinando elasticidad del fósil", de: "Bestimmung der Fossilienlastizität", nl: "Bepalen van fossielasticiteit" },
          { en: "Calculating burial depth", es: "Calculando profundidad de entierro", de: "Berechnung der Begrabungstiefe", nl: "Berekenen van begraafdiepte" }
        ],
        correct: 0,
        explanation: {
          en: "ToF-SIMS can create molecular maps showing the distribution of organic compounds across fossil surfaces, identifying amino acids, lipids, and other biomolecules that provide insights into original biochemistry and preservation processes.",
          es: "ToF-SIMS puede crear mapas moleculares mostrando la distribución de compuestos orgánicos a través de superficies fósiles, identificando aminoácidos, lípidos y otras biomoléculas que proporcionan información sobre bioquímica original y procesos de preservación.",
          de: "ToF-SIMS kann molekulare Karten erstellen, die die Verteilung organischer Verbindungen auf Fossiloberflächen zeigen und Aminosäuren, Lipide und andere Biomoleküle identifizieren, die Einblicke in die ursprüngliche Biochemie und Erhaltungsprozesse geben.",
          nl: "ToF-SIMS kan moleculaire kaarten creëren die de verdeling van organische verbindingen over fossieloppervlakken tonen, waarbij aminozuren, lipiden en andere biomoleculen worden geïdentificeerd die inzicht geven in oorspronkelijke biochemie en bewaringsprocessen."
        }
      },
      {
        question: {
          en: "How does Raman spectroscopy contribute to dinosaur fossil analysis?",
          es: "¿Cómo contribuye la espectroscopía Raman al análisis de fósiles de dinosaurios?",
          de: "Wie trägt die Raman-Spektroskopie zur Dinosaurier-Fossilanalyse bei?",
          nl: "Hoe draagt Raman-spectroscopie bij aan dinosaurusfossielanalyse?"
        },
        options: [
          { en: "Non-destructive molecular identification and pigment detection", es: "Identificación molecular no destructiva y detección de pigmentos", de: "Zerstörungsfreie molekulare Identifikation und Pigmentnachweis", nl: "Niet-destructieve moleculaire identificatie en pigmentdetectie" },
          { en: "Measuring fossil radioactivity levels", es: "Midiendo niveles de radiactividad del fósil", de: "Messung der Fossilradioaktivitätsniveaus", nl: "Meten van fossielradioactiviteitsniveaus" },
          { en: "Determining fossil porosity", es: "Determinando porosidad del fósil", de: "Bestimmung der Fossilporosität", nl: "Bepalen van fossielporositeit" },
          { en: "Calculating thermal conductivity", es: "Calculando conductividad térmica", de: "Berechnung der Wärmeleitfähigkeit", nl: "Berekenen van thermische geleidbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "Raman spectroscopy analyzes molecular vibrations to identify specific compounds without sample preparation, making it ideal for detecting preserved pigments like melanin, keratins, and other biomolecules in fossil specimens.",
          es: "La espectroscopía Raman analiza vibraciones moleculares para identificar compuestos específicos sin preparación de muestra, lo que la hace ideal para detectar pigmentos preservados como melanina, queratinas y otras biomoléculas en especímenes fósiles.",
          de: "Die Raman-Spektroskopie analysiert molekulare Vibrationen, um spezifische Verbindungen ohne Probenvorbereitung zu identifizieren, was sie ideal für die Erkennung erhaltener Pigmente wie Melanin, Keratine und andere Biomoleküle in Fossilexemplaren macht.",
          nl: "Raman-spectroscopie analyseert moleculaire trillingen om specifieke verbindingen te identificeren zonder monstervoorbereiding, waardoor het ideaal is voor het detecteren van bewaarde pigmenten zoals melanine, keratines en andere biomoleculen in fossielspecimens."
        }
      },
      {
        question: {
          en: "What information can photogrammetry provide in dinosaur fossil documentation?",
          es: "¿Qué información puede proporcionar la fotogrametría en la documentación de fósiles de dinosaurios?",
          de: "Welche Informationen kann die Fotogrammetrie bei der Dinosaurier-Fossildokumentation liefern?",
          nl: "Welke informatie kan fotogrammetrie verschaffen bij dinosaurusfossieldocumentatie?"
        },
        options: [
          { en: "Precise 3D models and morphometric measurements", es: "Modelos 3D precisos y mediciones morfométricas", de: "Präzise 3D-Modelle und morphometrische Messungen", nl: "Precieze 3D-modellen en morfometrische metingen" },
          { en: "Chemical composition analysis", es: "Análisis de composición química", de: "Chemische Zusammensetzungsanalyse", nl: "Chemische samenstellingsanalyse" },
          { en: "Age determination through decay", es: "Determinación de edad a través de descomposición", de: "Altersbestimmung durch Zerfall", nl: "Leeftijdbepaling door verval" },
          { en: "Internal organ reconstruction", es: "Reconstrucción de órganos internos", de: "Rekonstruktion innerer Organe", nl: "Reconstructie van interne organen" }
        ],
        correct: 0,
        explanation: {
          en: "Photogrammetry uses multiple photographs taken from different angles to create detailed 3D digital models, enabling accurate measurements, virtual dissection, and sharing of specimens worldwide for collaborative research.",
          es: "La fotogrametría utiliza múltiples fotografías tomadas desde diferentes ángulos para crear modelos digitales 3D detallados, permitiendo mediciones precisas, disección virtual y compartir especímenes mundialmente para investigación colaborativa.",
          de: "Die Fotogrammetrie verwendet mehrere Fotografien aus verschiedenen Winkeln, um detaillierte digitale 3D-Modelle zu erstellen, die genaue Messungen, virtuelle Sektion und weltweites Teilen von Exemplaren für kollaborative Forschung ermöglichen.",
          nl: "Fotogrammetrie gebruikt meerdere foto's genomen vanuit verschillende hoeken om gedetailleerde digitale 3D-modellen te creëren, waardoor nauwkeurige metingen, virtuele dissectie en wereldwijde deling van specimens voor collaboratief onderzoek mogelijk wordt."
        }
      },
      {
        question: {
          en: "How does micro-CT scanning enhance our understanding of dinosaur fossil preservation?",
          es: "¿Cómo mejora el escaneo micro-CT nuestro entendimiento de la preservación de fósiles de dinosaurios?",
          de: "Wie verbessert Mikro-CT-Scanning unser Verständnis der Dinosaurier-Fossilerhaltung?",
          nl: "Hoe verbetert micro-CT-scanning ons begrip van dinosaurusfossielpreservatie?"
        },
        options: [
          { en: "Reveals detailed internal structures without physical sectioning", es: "Revela estructuras internas detalladas sin secciones físicas", de: "Enthüllt detaillierte interne Strukturen ohne physische Schnitte", nl: "Onthult gedetailleerde interne structuren zonder fysieke doorsnedes" },
          { en: "Only shows surface texture", es: "Solo muestra textura superficial", de: "Zeigt nur Oberflächentextur", nl: "Toont alleen oppervlaktetextuur" },
          { en: "Measures fossil weight accurately", es: "Mide peso del fósil con precisión", de: "Misst Fossilgewicht genau", nl: "Meet fossielgewicht nauwkeurig" },
          { en: "Determines fossil color composition", es: "Determina composición de color del fósil", de: "Bestimmt Fossilfarbzusammensetzung", nl: "Bepaalt fossielkleursamenstelling" }
        ],
        correct: 0,
        explanation: {
          en: "Micro-CT scanning provides high-resolution 3D images of internal fossil structures, revealing hidden anatomical details, growth patterns, and preservation quality without damaging specimens.",
          es: "El escaneo micro-CT proporciona imágenes 3D de alta resolución de estructuras fósiles internas, revelando detalles anatómicos ocultos, patrones de crecimiento y calidad de preservación sin dañar especímenes.",
          de: "Mikro-CT-Scanning liefert hochauflösende 3D-Bilder interner Fossilstrukturen und enthüllt verborgene anatomische Details, Wachstumsmuster und Erhaltungsqualität ohne Beschädigung der Exemplare.",
          nl: "Micro-CT-scanning biedt hoge-resolutie 3D-beelden van interne fossilstructuren, waarbij verborgen anatomische details, groeipatronen en preservatiekwaliteit worden onthuld zonder specimens te beschadigen."
        }
      },
      {
        question: {
          en: "What role does mass spectrometry play in advanced dinosaur fossil analysis?",
          es: "¿Qué papel juega la espectrometría de masas en el análisis avanzado de fósiles de dinosaurios?",
          de: "Welche Rolle spielt die Massenspektrometrie bei der fortgeschrittenen Dinosaurier-Fossilanalyse?",
          nl: "Welke rol speelt massaspectrometrie in geavanceerde dinosaurusfossielanalyse?"
        },
        options: [
          { en: "Precise identification of trace organic compounds and isotopic analysis", es: "Identificación precisa de compuestos orgánicos traza y análisis isotópico", de: "Präzise Identifikation von Spurenorganischen Verbindungen und Isotopenanalyse", nl: "Precieze identificatie van spororganische verbindingen en isotopische analyse" },
          { en: "Measuring fossil hardness values", es: "Midiendo valores de dureza del fósil", de: "Messung fossiler Härtewerte", nl: "Meten van fossielhardheidwaarden" },
          { en: "Determining fossil magnetic properties", es: "Determinando propiedades magnéticas del fósil", de: "Bestimmung fossiler magnetischer Eigenschaften", nl: "Bepalen van fossiele magnetische eigenschappen" },
          { en: "Calculating fossil thermal expansion", es: "Calculando expansión térmica del fósil", de: "Berechnung fossiler Wärmeausdehnung", nl: "Berekenen van fossiele thermische uitzetting" }
        ],
        correct: 0,
        explanation: {
          en: "Mass spectrometry can detect and identify minute quantities of preserved biomolecules, analyze stable isotope ratios for paleoenvironmental reconstruction, and study diagenetic processes in fossil formation.",
          es: "La espectrometría de masas puede detectar e identificar cantidades mínimas de biomoléculas preservadas, analizar proporciones de isótopos estables para reconstrucción paleoambiental y estudiar procesos diagenéticos en formación fósil.",
          de: "Massenspektrometrie kann winzige Mengen erhaltener Biomoleküle nachweisen und identifizieren, stabile Isotopenverhältnisse für paläoumweltliche Rekonstruktion analysieren und diagenetische Prozesse in der Fossilbildung studieren.",
          nl: "Massaspectrometrie kan minuscule hoeveelheden bewaarde biomoleculen detecteren en identificeren, stabiele isotopenverhoudingen analyseren voor paleomilieureconstructie en diagenetische processen in fossilvorming bestuderen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();