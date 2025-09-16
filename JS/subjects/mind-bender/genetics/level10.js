(function() {
  const level10 = {
    name: {
      en: "Systems Genetics & Synthetic Biology",
      es: "Genética de Sistemas y Biología Sintética",
      de: "Systemgenetik und Synthetische Biologie",
      nl: "Systeemgenetica en Synthetische Biologie"
    },
    questions: [
    {
      question: {
        en: "What is optogenetics?",
        es: "¿Qué es la optogenética?",
        de: "Was ist Optogenetik?",
        nl: "Wat is optogenetica?"
      },
      options: [
        { en: "Technique using light to control genetically modified neurons", es: "Técnica usando luz para controlar neuronas genéticamente modificadas", de: "Technik mit Licht zur Kontrolle genetisch modifizierter Neuronen", nl: "Techniek die licht gebruikt om genetisch gemodificeerde neuronen te controleren" },
        { en: "Gene therapy using optical fibers", es: "Terapia génica usando fibras ópticas", de: "Gentherapie mit optischen Fasern", nl: "Gentherapie met optische vezels" },
        { en: "DNA sequencing with laser light", es: "Secuenciación de ADN con luz láser", de: "DNA-Sequenzierung mit Laserlicht", nl: "DNA-sequencing met laserlicht" },
        { en: "Microscopy technique for genetic analysis", es: "Técnica de microscopía para análisis genético", de: "Mikroskopie-Technik für genetische Analyse", nl: "Microscopietechniek voor genetische analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Optogenetics combines optics and genetics to control genetically modified neurons with light, enabling precise manipulation of neural activity in living organisms.",
        es: "La optogenética combina óptica y genética para controlar neuronas genéticamente modificadas con luz, permitiendo manipulación precisa de actividad neural en organismos vivos.",
        de: "Optogenetik kombiniert Optik und Genetik zur Kontrolle genetisch modifizierter Neuronen mit Licht, ermöglicht präzise Manipulation neuronaler Aktivität in lebenden Organismen.",
        nl: "Optogenetica combineert optica en genetica om genetisch gemodificeerde neuronen met licht te controleren, precieze manipulatie van neurale activiteit in levende organismen mogelijk makend."
      }
    },
    {
      question: {
        en: "What is base editing?",
        es: "¿Qué es la edición de bases?",
        de: "Was ist Base-Editing?",
        nl: "Wat is base-editing?"
      },
      options: [
        { en: "Precise genome editing technique that changes single DNA bases without double-strand breaks", es: "Técnica de edición del genoma precisa que cambia bases únicas de ADN sin roturas de doble cadena", de: "Präzise Genom-Editierungstechnik, die einzelne DNA-Basen ohne Doppelstrangbrüche ändert", nl: "Precieze genoombewerking techniek die enkele DNA-basen verandert zonder dubbelstrengs breuken" },
        { en: "DNA sequencing method", es: "Método de secuenciación de ADN", de: "DNA-Sequenzierungsmethode", nl: "DNA-sequencingmethode" },
        { en: "Protein purification technique", es: "Técnica de purificación de proteínas", de: "Proteinreinigungstechnik", nl: "Eiwitpurificatietechniek" },
        { en: "Cell culture methodology", es: "Metodología de cultivo celular", de: "Zellkulturmethodologie", nl: "Celkweekmethodologie" }
      ],
      correct: 0,
      explanation: {
        en: "Base editing enables precise conversion of one DNA base to another without creating double-strand breaks, offering safer and more controlled genome editing than traditional methods.",
        es: "La edición de bases permite conversión precisa de una base de ADN a otra sin crear roturas de doble cadena, ofreciendo edición del genoma más segura y controlada.",
        de: "Base-Editing ermöglicht präzise Umwandlung einer DNA-Base in eine andere ohne Doppelstrangbrüche zu erzeugen, bietet sicherere und kontrolliertere Genom-Editierung.",
        nl: "Base-editing maakt precieze conversie van één DNA-base naar een andere mogelijk zonder dubbelstrengs breuken te creëren, veiligere en meer gecontroleerde genoombewerking biedend."
      }
    },
    {
      question: {
        en: "What is prime editing?",
        es: "¿Qué es la edición principal?",
        de: "Was ist Prime-Editing?",
        nl: "Wat is prime-editing?"
      },
      options: [
        { en: "Advanced CRISPR technique enabling precise insertions, deletions, and replacements", es: "Técnica CRISPR avanzada que permite inserciones, deleciones y reemplazos precisos", de: "Fortgeschrittene CRISPR-Technik, die präzise Insertionen, Deletionen und Ersetzungen ermöglicht", nl: "Geavanceerde CRISPR-techniek die precieze inserties, deleties en vervangingen mogelijk maakt" },
        { en: "First generation of gene editing tools", es: "Primera generación de herramientas de edición génica", de: "Erste Generation von Gen-Editierungstools", nl: "Eerste generatie genbewerking tools" },
        { en: "Primary DNA replication mechanism", es: "Mecanismo primario de replicación de ADN", de: "Primärer DNA-Replikationsmechanismus", nl: "Primair DNA-replicatiemechanisme" },
        { en: "Basic laboratory technique", es: "Técnica básica de laboratorio", de: "Grundlegende Labortechnik", nl: "Basislaboratoriumtechniek" }
      ],
      correct: 0,
      explanation: {
        en: "Prime editing is a versatile genome editing approach that can perform targeted insertions, deletions, and base-to-base conversions with minimal off-target effects.",
        es: "La edición principal es un enfoque versátil de edición del genoma que puede realizar inserciones, deleciones y conversiones base-a-base dirigidas con efectos fuera del objetivo mínimos.",
        de: "Prime-Editing ist ein vielseitiger Genom-Editierungsansatz, der gezielte Insertionen, Deletionen und Base-zu-Base-Konversionen mit minimalen Off-Target-Effekten durchführen kann.",
        nl: "Prime-editing is een veelzijdige genoombewerking benadering die gerichte inserties, deleties en base-naar-base conversies kan uitvoeren met minimale off-target effecten."
      }
    },
    {
      question: {
        en: "What are epigenome editors?",
        es: "¿Qué son los editores del epigenoma?",
        de: "Was sind Epigenom-Editoren?",
        nl: "Wat zijn epigenoom-editors?"
      },
      options: [
        { en: "Tools that modify epigenetic marks without changing DNA sequence", es: "Herramientas que modifican marcas epigenéticas sin cambiar la secuencia de ADN", de: "Werkzeuge, die epigenetische Markierungen ohne Änderung der DNA-Sequenz modifizieren", nl: "Tools die epigenetische markeringen modificeren zonder DNA-sequentie te veranderen" },
        { en: "Software for analyzing genetic data", es: "Software para analizar datos genéticos", de: "Software zur Analyse genetischer Daten", nl: "Software voor het analyseren van genetische data" },
        { en: "Microscopes for viewing chromosomes", es: "Microscopios para ver cromosomas", de: "Mikroskope zur Chromosomendarstellung", nl: "Microscopen voor het bekijken van chromosomen" },
        { en: "Machines for DNA synthesis", es: "Máquinas para síntesis de ADN", de: "Maschinen für DNA-Synthese", nl: "Machines voor DNA-synthese" }
      ],
      correct: 0,
      explanation: {
        en: "Epigenome editors use modified CRISPR systems to add or remove epigenetic modifications like DNA methylation or histone marks, allowing control of gene expression without DNA changes.",
        es: "Los editores del epigenoma usan sistemas CRISPR modificados para agregar o remover modificaciones epigenéticas como metilación de ADN o marcas de histonas.",
        de: "Epigenom-Editoren nutzen modifizierte CRISPR-Systeme zum Hinzufügen oder Entfernen epigenetischer Modifikationen wie DNA-Methylierung oder Histon-Markierungen.",
        nl: "Epigenoom-editors gebruiken gemodificeerde CRISPR-systemen om epigenetische modificaties zoals DNA-methylering of histonmarkeringen toe te voegen of te verwijderen."
      }
    },
    {
      question: {
        en: "What is single-cell genomics?",
        es: "¿Qué es la genómica de célula única?",
        de: "Was ist Einzelzell-Genomik?",
        nl: "Wat is enkele cel genomics?"
      },
      options: [
        { en: "Analysis of genetic material from individual cells rather than bulk populations", es: "Análisis de material genético de células individuales en lugar de poblaciones masivas", de: "Analyse genetischen Materials aus einzelnen Zellen statt aus Bulk-Populationen", nl: "Analyse van genetisch materiaal uit individuele cellen in plaats van bulk populaties" },
        { en: "Study of single genes only", es: "Estudio solo de genes individuales", de: "Studie nur einzelner Gene", nl: "Studie van alleen enkele genen" },
        { en: "Isolation of one cell type", es: "Aislamiento de un tipo celular", de: "Isolation eines Zelltyps", nl: "Isolatie van één celtype" },
        { en: "Analysis of unicellular organisms", es: "Análisis de organismos unicelulares", de: "Analyse einzelliger Organismen", nl: "Analyse van eencellige organismen" }
      ],
      correct: 0,
      explanation: {
        en: "Single-cell genomics enables analysis of genetic and transcriptional profiles of individual cells, revealing cellular heterogeneity and rare cell populations previously masked in bulk analyses.",
        es: "La genómica de célula única permite análisis de perfiles genéticos y transcripcionales de células individuales, revelando heterogeneidad celular y poblaciones celulares raras.",
        de: "Einzelzell-Genomik ermöglicht Analyse genetischer und transkriptionaler Profile einzelner Zellen, enthüllt zelluläre Heterogenität und seltene Zellpopulationen.",
        nl: "Enkele cel genomics maakt analyse van genetische en transcriptionele profielen van individuele cellen mogelijk, cellulaire heterogeniteit en zeldzame celpopulaties onthullend."
      }
    },
    {
      question: {
        en: "What is spatial transcriptomics?",
        es: "¿Qué es la transcriptómica espacial?",
        de: "Was ist räumliche Transkriptomik?",
        nl: "Wat is ruimtelijke transcriptomics?"
      },
      options: [
        { en: "Technology that maps gene expression to specific tissue locations", es: "Tecnología que mapea la expresión génica a ubicaciones específicas de tejido", de: "Technologie, die Genexpression auf spezifische Gewebeorte abbildet", nl: "Technologie die genexpressie naar specifieke weefsellocaties in kaart brengt" },
        { en: "Analysis of RNA in test tubes only", es: "Análisis de ARN solo en tubos de ensayo", de: "Analyse von RNA nur in Reagenzgläsern", nl: "Analyse van RNA alleen in reageerbuizen" },
        { en: "Study of transcript length", es: "Estudio de longitud de transcriptos", de: "Studie der Transkriptlänge", nl: "Studie van transcriptlengte" },
        { en: "Temporal analysis of gene expression", es: "Análisis temporal de expresión génica", de: "Zeitliche Analyse der Genexpression", nl: "Temporele analyse van genexpressie" }
      ],
      correct: 0,
      explanation: {
        en: "Spatial transcriptomics combines gene expression profiling with spatial information, revealing how gene activity varies across different regions within tissues and organs.",
        es: "La transcriptómica espacial combina perfilado de expresión génica con información espacial, revelando cómo varía la actividad génica en diferentes regiones de tejidos.",
        de: "Räumliche Transkriptomik kombiniert Genexpressionsprofilierung mit räumlichen Informationen, enthüllt wie Genaktivität in verschiedenen Gewebsregionen variiert.",
        nl: "Ruimtelijke transcriptomics combineert genexpressie profilering met ruimtelijke informatie, onthullend hoe genactiviteit variëert over verschillende regio's binnen weefsels."
      }
    },
    {
      question: {
        en: "What is long-read sequencing?",
        es: "¿Qué es la secuenciación de lectura larga?",
        de: "Was ist Long-Read-Sequenzierung?",
        nl: "Wat is long-read sequencing?"
      },
      options: [
        { en: "Sequencing technology producing reads thousands of bases long", es: "Tecnología de secuenciación produciendo lecturas de miles de bases de longitud", de: "Sequenzierungstechnologie, die Reads von tausenden Basen Länge produziert", nl: "Sequencingtechnologie die reads van duizenden basen lang produceert" },
        { en: "Time-consuming sequencing method", es: "Método de secuenciación que consume tiempo", de: "Zeitaufwendige Sequenzierungsmethode", nl: "Tijdrovende sequencingmethode" },
        { en: "Analysis of long genes only", es: "Análisis solo de genes largos", de: "Analyse nur langer Gene", nl: "Analyse van alleen lange genen" },
        { en: "Extended laboratory procedures", es: "Procedimientos de laboratorio extendidos", de: "Erweiterte Laborverfahren", nl: "Uitgebreide laboratoriumproc.dures" }
      ],
      correct: 0,
      explanation: {
        en: "Long-read sequencing technologies like PacBio and Oxford Nanopore can sequence DNA fragments thousands of bases long, enabling better genome assembly and structural variant detection.",
        es: "Las tecnologías de secuenciación de lectura larga como PacBio y Oxford Nanopore pueden secuenciar fragmentos de ADN de miles de bases de longitud.",
        de: "Long-Read-Sequenzierungstechnologien wie PacBio und Oxford Nanopore können DNA-Fragmente von tausenden Basen Länge sequenzieren.",
        nl: "Long-read sequencingtechnologieën zoals PacBio en Oxford Nanopore kunnen DNA-fragmenten van duizenden basen lang sequencen."
      }
    },
    {
      question: {
        en: "What is digital PCR?",
        es: "¿Qué es la PCR digital?",
        de: "Was ist digitale PCR?",
        nl: "Wat is digitale PCR?"
      },
      options: [
        { en: "PCR technique that provides absolute quantification by partitioning samples into many small reactions", es: "Técnica PCR que proporciona cuantificación absoluta dividiendo muestras en muchas reacciones pequeñas", de: "PCR-Technik, die absolute Quantifizierung durch Aufteilung von Proben in viele kleine Reaktionen bietet", nl: "PCR-techniek die absolute kwantificatie biedt door monsters op te delen in vele kleine reacties" },
        { en: "Computer simulation of PCR", es: "Simulación por computadora de PCR", de: "Computersimulation von PCR", nl: "Computersimulatie van PCR" },
        { en: "PCR using electronic primers", es: "PCR usando primers electrónicos", de: "PCR mit elektronischen Primern", nl: "PCR met elektronische primers" },
        { en: "Automated PCR machine", es: "Máquina PCR automatizada", de: "Automatisierte PCR-Maschine", nl: "Geautomatiseerde PCR-machine" }
      ],
      correct: 0,
      explanation: {
        en: "Digital PCR partitions samples into thousands of individual PCR reactions, enabling precise absolute quantification of nucleic acids without requiring standard curves.",
        es: "La PCR digital divide muestras en miles de reacciones PCR individuales, permitiendo cuantificación absoluta precisa de ácidos nucleicos sin requerir curvas estándar.",
        de: "Digitale PCR teilt Proben in tausende einzelne PCR-Reaktionen auf, ermöglicht präzise absolute Quantifizierung von Nukleinsäuren ohne Standardkurven.",
        nl: "Digitale PCR verdeelt monsters in duizenden individuele PCR-reacties, precieze absolute kwantificatie van nucleinezuren mogelijk makend zonder standaardcurves."
      }
    },
    {
      question: {
        en: "What is CRISPR screening?",
        es: "¿Qué es el cribado CRISPR?",
        de: "Was ist CRISPR-Screening?",
        nl: "Wat is CRISPR-screening?"
      },
      options: [
        { en: "Systematic approach to study gene function using CRISPR libraries", es: "Enfoque sistemático para estudiar función génica usando bibliotecas CRISPR", de: "Systematischer Ansatz zur Untersuchung der Genfunktion mit CRISPR-Bibliotheken", nl: "Systematische benadering om genfunctie te bestuderen met CRISPR-bibliotheken" },
        { en: "Quality control for CRISPR experiments", es: "Control de calidad para experimentos CRISPR", de: "Qualitätskontrolle für CRISPR-Experimente", nl: "Kwaliteitscontrole voor CRISPR-experimenten" },
        { en: "Testing CRISPR component purity", es: "Prueba de pureza de componentes CRISPR", de: "Test der CRISPR-Komponenten-Reinheit", nl: "Testen van CRISPR-componentzuiverheid" },
        { en: "Detecting CRISPR off-target effects", es: "Detectar efectos fuera del objetivo de CRISPR", de: "Erkennung von CRISPR-Off-Target-Effekten", nl: "Detecteren van CRISPR off-target effecten" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPR screening uses pooled libraries of guide RNAs to systematically knock out or modulate thousands of genes, enabling large-scale functional genomics studies.",
        es: "El cribado CRISPR usa bibliotecas agrupadas de ARNs guía para sistemáticamente eliminar o modular miles de genes, permitiendo estudios de genómica funcional a gran escala.",
        de: "CRISPR-Screening nutzt gepoolte Bibliotheken von Guide-RNAs, um systematisch tausende Gene zu knocken oder zu modulieren, ermöglicht großangelegte funktionale Genomikstudien.",
        nl: "CRISPR-screening gebruikt gepoolde bibliotheken van gids-RNA's om systematisch duizenden genen uit te schakelen of te moduleren, grootschalige functionele genomica studies mogelijk makend."
      }
    },
    {
      question: {
        en: "What is chromatin accessibility profiling?",
        es: "¿Qué es el perfilado de accesibilidad de cromatina?",
        de: "Was ist Chromatin-Zugangsprofiling?",
        nl: "Wat is chromatine-toegankelijkheidsprofiling?"
      },
      options: [
        { en: "Techniques that map open chromatin regions accessible to transcription factors", es: "Técnicas que mapean regiones de cromatina abiertas accesibles a factores de transcripción", de: "Techniken, die offene Chromatinregionen kartieren, die für Transkriptionsfaktoren zugänglich sind", nl: "Technieken die open chromatineregio's in kaart brengen die toegankelijk zijn voor transcriptiefactoren" },
        { en: "Analysis of chromosome structure only", es: "Análisis solo de estructura cromosómica", de: "Nur Analyse der Chromosomenstruktur", nl: "Alleen analyse van chromosoomstructuur" },
        { en: "Study of chromatin condensation", es: "Estudio de condensación de cromatina", de: "Studie der Chromatin-Kondensation", nl: "Studie van chromatinecondensatie" },
        { en: "Measurement of DNA packaging density", es: "Medición de densidad de empaquetado de ADN", de: "Messung der DNA-Verpackungsdichte", nl: "Meting van DNA-verpakkingsdichtheid" }
      ],
      correct: 0,
      explanation: {
        en: "Chromatin accessibility profiling techniques like ATAC-seq identify regions of open chromatin where regulatory proteins can bind, revealing active regulatory elements.",
        es: "Las técnicas de perfilado de accesibilidad de cromatina como ATAC-seq identifican regiones de cromatina abierta donde proteínas reguladoras pueden unirse.",
        de: "Chromatin-Zugangsprofiling-Techniken wie ATAC-seq identifizieren offene Chromatinregionen, wo regulatorische Proteine binden können.",
        nl: "Chromatine-toegankelijkheidsprofiling technieken zoals ATAC-seq identificeren regio's van open chromatine waar regulatoire eiwitten kunnen binden."
      }
    },
    {
      question: {
        en: "What is multi-omics integration?",
        es: "¿Qué es la integración multi-ómica?",
        de: "Was ist Multi-Omics-Integration?",
        nl: "Wat is multi-omics integratie?"
      },
      options: [
        { en: "Computational approach combining genomics, transcriptomics, proteomics, and other omics data", es: "Enfoque computacional combinando genómica, transcriptómica, proteómica y otros datos ómicos", de: "Computeransatz, der Genomik, Transkriptomik, Proteomik und andere Omik-Daten kombiniert", nl: "Computationele benadering die genomics, transcriptomics, proteomics en andere omics-data combineert" },
        { en: "Analysis of multiple organisms", es: "Análisis de múltiples organismos", de: "Analyse mehrerer Organismen", nl: "Analyse van meerdere organismen" },
        { en: "Study of many cell types", es: "Estudio de muchos tipos celulares", de: "Studie vieler Zelltypen", nl: "Studie van vele celtypen" },
        { en: "Collection of diverse samples", es: "Colección de muestras diversas", de: "Sammlung diverser Proben", nl: "Verzameling van diverse monsters" }
      ],
      correct: 0,
      explanation: {
        en: "Multi-omics integration combines different molecular data types to provide comprehensive understanding of biological systems, revealing relationships between genotype and phenotype.",
        es: "La integración multi-ómica combina diferentes tipos de datos moleculares para proporcionar comprensión comprensiva de sistemas biológicos.",
        de: "Multi-Omics-Integration kombiniert verschiedene molekulare Datentypen, um umfassendes Verständnis biologischer Systeme zu liefern.",
        nl: "Multi-omics integratie combineert verschillende moleculaire datatypes om uitgebreid begrip van biologische systemen te bieden."
      }
    },
    {
      question: {
        en: "What is artificial intelligence in genetics?",
        es: "¿Qué es la inteligencia artificial en genética?",
        de: "Was ist künstliche Intelligenz in der Genetik?",
        nl: "Wat is kunstmatige intelligentie in genetica?"
      },
      options: [
        { en: "Machine learning and AI methods applied to genetic data analysis and interpretation", es: "Métodos de aprendizaje automático e IA aplicados al análisis e interpretación de datos genéticos", de: "Maschinenlern- und KI-Methoden angewandt auf genetische Datenanalyse und -interpretation", nl: "Machine learning en AI-methoden toegepast op genetische data-analyse en -interpretatie" },
        { en: "Robots performing laboratory experiments", es: "Robots realizando experimentos de laboratorio", de: "Roboter, die Laborexperimente durchführen", nl: "Robots die laboratoriumexperimenten uitvoeren" },
        { en: "Computer-generated synthetic genes", es: "Genes sintéticos generados por computadora", de: "Computergenerierte synthetische Gene", nl: "Computergegenereerde synthetische genen" },
        { en: "Automated DNA sequencing machines", es: "Máquinas automatizadas de secuenciación de ADN", de: "Automatisierte DNA-Sequenzierungsmaschinen", nl: "Geautomatiseerde DNA-sequencingmachines" }
      ],
      correct: 0,
      explanation: {
        en: "AI in genetics uses machine learning algorithms to analyze complex genomic datasets, predict gene function, identify disease-causing variants, and accelerate discovery.",
        es: "La IA en genética usa algoritmos de aprendizaje automático para analizar conjuntos de datos genómicos complejos, predecir función génica e identificar variantes causantes de enfermedades.",
        de: "KI in der Genetik nutzt Maschinenlernalgorithmen zur Analyse komplexer genomischer Datensätze, Vorhersage von Genfunktionen und Identifizierung krankheitsverursachender Varianten.",
        nl: "AI in genetica gebruikt machine learning algoritmen om complexe genomische datasets te analyseren, genfunctie te voorspellen en ziekteveroorzakende varianten te identificeren."
      }
    },
    {
      question: {
        en: "What is polygenic risk scoring?",
        es: "¿Qué es la puntuación de riesgo poligénico?",
        de: "Was ist polygene Risikobewertung?",
        nl: "Wat is polygene risicoberekening?"
      },
      options: [
        { en: "Method calculating disease risk based on many genetic variants across the genome", es: "Método calculando riesgo de enfermedad basado en muchas variantes genéticas a través del genoma", de: "Methode zur Berechnung des Krankheitsrisikos basierend auf vielen genetischen Varianten im Genom", nl: "Methode die ziekterisico berekent gebaseerd op vele genetische varianten door het genoom" },
        { en: "Analysis of single gene mutations only", es: "Análisis solo de mutaciones de un solo gen", de: "Nur Analyse einzelner Genmutationen", nl: "Alleen analyse van enkele genmutaties" },
        { en: "Assessment of environmental risk factors", es: "Evaluación de factores de riesgo ambientales", de: "Bewertung von Umweltrisikofaktoren", nl: "Beoordeling van omgevingsrisicofactoren" },
        { en: "Calculation of family history risk", es: "Cálculo de riesgo de historia familiar", de: "Berechnung des Familiengeschichtsrisikos", nl: "Berekening van familiegeschiedenisrisico" }
      ],
      correct: 0,
      explanation: {
        en: "Polygenic risk scores aggregate effects of thousands of genetic variants to estimate individual risk for complex diseases like diabetes, heart disease, or psychiatric disorders.",
        es: "Las puntuaciones de riesgo poligénico agregan efectos de miles de variantes genéticas para estimar riesgo individual de enfermedades complejas como diabetes.",
        de: "Polygene Risikoscores aggregieren Effekte tausender genetischer Varianten, um individuelles Risiko für komplexe Krankheiten wie Diabetes zu schätzen.",
        nl: "Polygene risicoscores aggregeren effecten van duizenden genetische varianten om individueel risico voor complexe ziekten zoals diabetes te schatten."
      }
    },
    {
      question: {
        en: "What is tissue engineering using genetic approaches?",
        es: "¿Qué es la ingeniería de tejidos usando enfoques genéticos?",
        de: "Was ist Tissue Engineering mit genetischen Ansätzen?",
        nl: "Wat is weefselengineering met genetische benaderingen?"
      },
      options: [
        { en: "Creating functional tissues by genetically modifying cells and using scaffolds", es: "Crear tejidos funcionales modificando genéticamente células y usando andamios", de: "Erzeugung funktionaler Gewebe durch genetische Modifikation von Zellen und Verwendung von Gerüsten", nl: "Functionele weefsels creëren door cellen genetisch te modificeren en scaffolds te gebruiken" },
        { en: "Surgical transplantation procedures", es: "Procedimientos de trasplante quirúrgico", de: "Chirurgische Transplantationsverfahren", nl: "Chirurgische transplantatieprocedures" },
        { en: "3D printing of artificial organs", es: "Impresión 3D de órganos artificiales", de: "3D-Druck künstlicher Organe", nl: "3D-printen van kunstmatige organen" },
        { en: "Traditional wound healing methods", es: "Métodos tradicionales de curación de heridas", de: "Traditionelle Wundheilungsmethoden", nl: "Traditionele wondgenezingsmethoden" }
      ],
      correct: 0,
      explanation: {
        en: "Genetic tissue engineering combines genetic modification of cells with biomaterial scaffolds to create functional replacement tissues for transplantation and regenerative medicine.",
        es: "La ingeniería de tejidos genética combina modificación genética de células con andamios de biomaterial para crear tejidos de reemplazo funcionales.",
        de: "Genetisches Tissue Engineering kombiniert genetische Modifikation von Zellen mit Biomaterial-Gerüsten, um funktionale Ersatzgewebe zu schaffen.",
        nl: "Genetische weefselengineering combineert genetische modificatie van cellen met biomateriaalscaffolds om functionele vervangingsweefsels te creëren."
      }
    },
    {
      question: {
        en: "What is xenotransplantation?",
        es: "¿Qué es la xenotransplantación?",
        de: "Was ist Xenotransplantation?",
        nl: "Wat is xenotransplantatie?"
      },
      options: [
        { en: "Transplantation of genetically modified animal organs into humans", es: "Trasplante de órganos animales genéticamente modificados en humanos", de: "Transplantation genetisch modifizierter Tierorgane in Menschen", nl: "Transplantatie van genetisch gemodificeerde dierlijke organen in mensen" },
        { en: "Transplantation between different human populations", es: "Trasplante entre diferentes poblaciones humanas", de: "Transplantation zwischen verschiedenen menschlichen Populationen", nl: "Transplantatie tussen verschillende menselijke populaties" },
        { en: "Transplantation of artificial organs only", es: "Trasplante solo de órganos artificiales", de: "Nur Transplantation künstlicher Organe", nl: "Alleen transplantatie van kunstmatige organen" },
        { en: "Cell transplantation procedures", es: "Procedimientos de trasplante celular", de: "Zelltransplantationsverfahren", nl: "Celtransplantatieprocedures" }
      ],
      correct: 0,
      explanation: {
        en: "Xenotransplantation involves transplanting genetically modified animal organs (typically pig) into humans to address organ shortage, requiring extensive genetic modifications to prevent rejection.",
        es: "La xenotransplantación involucra trasplantar órganos animales genéticamente modificados (típicamente cerdo) en humanos para abordar la escasez de órganos.",
        de: "Xenotransplantation beinhaltet die Transplantation genetisch modifizierter Tierorgane (typischerweise Schwein) in Menschen, um Organmangel zu adressieren.",
        nl: "Xenotransplantatie behelst het transplanteren van genetisch gemodificeerde dierlijke organen (typisch varken) in mensen om orgaantekort aan te pakken."
      }
    },
    {
      question: {
        en: "What is cellular reprogramming?",
        es: "¿Qué es la reprogramación celular?",
        de: "Was ist zelluläre Reprogrammierung?",
        nl: "Wat is cellulaire herprogrammering?"
      },
      options: [
        { en: "Process of converting differentiated cells back to pluripotent state or different cell types", es: "Proceso de convertir células diferenciadas de vuelta al estado pluripotente o diferentes tipos celulares", de: "Prozess der Umwandlung differenzierter Zellen zurück in den pluripotenten Zustand oder in verschiedene Zelltypen", nl: "Proces van het converteren van gedifferentieerde cellen terug naar pluripotente toestand of verschillende celtypen" },
        { en: "Computer programming for cell analysis", es: "Programación de computadora para análisis celular", de: "Computerprogrammierung für Zellanalyse", nl: "Computerprogrammering voor celanalyse" },
        { en: "Software for controlling laboratory equipment", es: "Software para controlar equipo de laboratorio", de: "Software zur Steuerung von Laborgeräten", nl: "Software voor het besturen van laboratoriumapparatuur" },
        { en: "Training cells to perform new functions", es: "Entrenar células para realizar nuevas funciones", de: "Training von Zellen zur Durchführung neuer Funktionen", nl: "Trainen van cellen om nieuwe functies uit te voeren" }
      ],
      correct: 0,
      explanation: {
        en: "Cellular reprogramming uses defined factors to reprogram somatic cells into induced pluripotent stem cells or directly convert them into other cell types for research and therapy.",
        es: "La reprogramación celular usa factores definidos para reprogramar células somáticas en células madre pluripotentes inducidas o convertirlas directamente en otros tipos celulares.",
        de: "Zelluläre Reprogrammierung nutzt definierte Faktoren, um somatische Zellen in induzierte pluripotente Stammzellen zu reprogrammieren oder direkt in andere Zelltypen umzuwandeln.",
        nl: "Cellulaire herprogrammering gebruikt gedefinieerde factoren om somatische cellen te herprogrammeren tot geïnduceerde pluripotente stamcellen of direct te converteren naar andere celtypen."
      }
    },
    {
      question: {
        en: "What is organ-on-a-chip technology?",
        es: "¿Qué es la tecnología de órgano en un chip?",
        de: "Was ist Organ-auf-Chip-Technologie?",
        nl: "Wat is orgaan-op-een-chip-technologie?"
      },
      options: [
        { en: "Microfluidic devices containing human cells that mimic organ functions", es: "Dispositivos microflúidicos conteniendo células humanas que imitan funciones de órganos", de: "Mikrofluidische Geräte mit menschlichen Zellen, die Organfunktionen nachahmen", nl: "Microfluidische apparaten met menselijke cellen die orgaanfuncties nabootsen" },
        { en: "Computer chips implanted in organs", es: "Chips de computadora implantados en órganos", de: "Computerchips, die in Organe implantiert werden", nl: "Computerchips geïmplanteerd in organen" },
        { en: "Digital simulations of organ systems", es: "Simulaciones digitales de sistemas de órganos", de: "Digitale Simulationen von Organsystemen", nl: "Digitale simulaties van orgaansystemen" },
        { en: "Electronic sensors for organ monitoring", es: "Sensores electrónicos para monitoreo de órganos", de: "Elektronische Sensoren zur Organüberwachung", nl: "Elektronische sensoren voor orgaanmonitoring" }
      ],
      correct: 0,
      explanation: {
        en: "Organ-on-a-chip devices use microfluidics and human cells to recreate tissue and organ-level functions, providing more physiologically relevant models for research and drug testing.",
        es: "Los dispositivos de órgano en un chip usan microflúidica y células humanas para recrear funciones a nivel de tejido y órgano, proporcionando modelos más fisiológicamente relevantes.",
        de: "Organ-auf-Chip-Geräte nutzen Mikrofluidik und menschliche Zellen, um Gewebe- und Organfunktionen nachzustellen, physiologisch relevantere Modelle bereitstellend.",
        nl: "Orgaan-op-een-chip-apparaten gebruiken microfluidica en menselijke cellen om weefsel- en orgaanniveau-functies na te maken, fysiologisch relevantere modellen biedend."
      }
    },
    {
      question: {
        en: "What is the future potential of genetic technologies?",
        es: "¿Cuál es el potencial futuro de las tecnologías genéticas?",
        de: "Was ist das zukünftige Potenzial genetischer Technologien?",
        nl: "Wat is het toekomstige potentieel van genetische technologieën?"
      },
      options: [
        { en: "Personalized medicine, disease eradication, enhanced human capabilities, and sustainable biotechnology", es: "Medicina personalizada, erradicación de enfermedades, capacidades humanas mejoradas y biotecnología sostenible", de: "Personalisierte Medizin, Krankheitsausrottung, verbesserte menschliche Fähigkeiten und nachhaltige Biotechnologie", nl: "Gepersonaliseerde geneeskunde, ziekte-uitroeiing, verbeterde menselijke capaciteiten en duurzame biotechnologie" },
        { en: "Complete replacement of natural evolution", es: "Reemplazo completo de la evolución natural", de: "Vollständiger Ersatz der natürlichen Evolution", nl: "Volledige vervanging van natuurlijke evolutie" },
        { en: "Elimination of all genetic variation", es: "Eliminación de toda variación genética", de: "Eliminierung aller genetischen Variation", nl: "Eliminatie van alle genetische variatie" },
        { en: "Creating artificial life forms only", es: "Crear solo formas de vida artificiales", de: "Nur Schaffung künstlicher Lebensformen", nl: "Alleen het creëren van kunstmatige levensvormen" }
      ],
      correct: 0,
      explanation: {
        en: "Future genetic technologies hold promise for treating genetic diseases, developing personalized therapies, enhancing agricultural sustainability, and potentially augmenting human capabilities while raising important ethical considerations.",
        es: "Las tecnologías genéticas futuras prometen tratar enfermedades genéticas, desarrollar terapias personalizadas, mejorar la sostenibilidad agrícola y potencialmente aumentar capacidades humanas.",
        de: "Zukünftige Gentechnologien versprechen die Behandlung genetischer Krankheiten, Entwicklung personalisierter Therapien, Verbesserung der landwirtschaftlichen Nachhaltigkeit.",
        nl: "Toekomstige genetische technologieën beloven genetische ziekten te behandelen, gepersonaliseerde therapieën te ontwikkelen, landbouwduurzaamheid te verbeteren."
      }
    },
    {
      question: {
        en: "What are the ethical considerations in advanced genetic technologies?",
        es: "¿Cuáles son las consideraciones éticas en tecnologías genéticas avanzadas?",
        de: "Was sind die ethischen Überlegungen bei fortgeschrittenen Gentechnologien?",
        nl: "Wat zijn de ethische overwegingen bij geavanceerde genetische technologieën?"
      },
      options: [
        { en: "Safety, equity, consent, privacy, and societal implications of genetic modifications", es: "Seguridad, equidad, consentimiento, privacidad e implicaciones sociales de modificaciones genéticas", de: "Sicherheit, Gerechtigkeit, Zustimmung, Privatsphäre und gesellschaftliche Auswirkungen genetischer Modifikationen", nl: "Veiligheid, gelijkheid, toestemming, privacy en maatschappelijke implicaties van genetische modificaties" },
        { en: "Only scientific accuracy considerations", es: "Solo consideraciones de precisión científica", de: "Nur Betrachtungen wissenschaftlicher Genauigkeit", nl: "Alleen wetenschappelijke nauwkeurigheidsoverwegingen" },
        { en: "Commercial profitability aspects only", es: "Solo aspectos de rentabilidad comercial", de: "Nur kommerzielle Rentabilitätsaspekte", nl: "Alleen commerciële winstgevendheidsaspecten" },
        { en: "Technical feasibility concerns exclusively", es: "Exclusivamente preocupaciones de factibilidad técnica", de: "Ausschließlich technische Machbarkeitsbel.nge", nl: "Uitsluitend technische haalbaarheidsaangelegenheden" }
      ],
      correct: 0,
      explanation: {
        en: "Advanced genetic technologies raise complex ethical questions about safety, equitable access, informed consent, genetic privacy, potential for enhancement, and long-term societal consequences.",
        es: "Las tecnologías genéticas avanzadas plantean cuestiones éticas complejas sobre seguridad, acceso equitativo, consentimiento informado, privacidad genética y consecuencias sociales.",
        de: "Fortgeschrittene Gentechnologien werfen komplexe ethische Fragen zu Sicherheit, gleichberechtigtem Zugang, informierter Zustimmung, genetischer Privatsphäre auf.",
        nl: "Geavanceerde genetische technologieën roepen complexe ethische vragen op over veiligheid, gelijke toegang, geïnformeerde toestemming, genetische privacy."
      }
    },
    {
      question: {
        en: "What is the significance of international collaboration in genetics?",
        es: "¿Cuál es la importancia de la colaboración internacional en genética?",
        de: "Was ist die Bedeutung internationaler Zusammenarbeit in der Genetik?",
        nl: "Wat is het belang van internationale samenwerking in genetica?"
      },
      options: [
        { en: "Sharing resources, data, and expertise to accelerate discoveries and ensure global benefits", es: "Compartir recursos, datos y experiencia para acelerar descubrimientos y asegurar beneficios globales", de: "Teilen von Ressourcen, Daten und Expertise, um Entdeckungen zu beschleunigen und globale Vorteile zu sichern", nl: "Delen van middelen, data en expertise om ontdekkingen te versnellen en mondiale voordelen te verzekeren" },
        { en: "Competing for scientific supremacy only", es: "Solo competir por supremacía científica", de: "Nur Konkurrenz um wissenschaftliche Vorherrschaft", nl: "Alleen concurreren om wetenschappelijke suprematie" },
        { en: "Protecting national genetic advantages", es: "Proteger ventajas genéticas nacionales", de: "Schutz nationaler genetischer Vorteile", nl: "Beschermen van nationale genetische voordelen" },
        { en: "Limiting technology transfer between countries", es: "Limitar transferencia de tecnología entre países", de: "Begrenzung des Technologietransfers zwischen Ländern", nl: "Beperken van technologieoverdracht tussen landen" }
      ],
      correct: 0,
      explanation: {
        en: "International collaboration in genetics enables sharing of diverse genetic resources, pooling expertise, addressing global health challenges, and ensuring equitable access to genetic technologies worldwide.",
        es: "La colaboración internacional en genética permite compartir recursos genéticos diversos, combinar experiencia, abordar desafíos de salud globales y asegurar acceso equitativo.",
        de: "Internationale Zusammenarbeit in der Genetik ermöglicht das Teilen diverser genetischer Ressourcen, Bündelung von Expertise, Bewältigung globaler Gesundheitsherausforderungen.",
        nl: "Internationale samenwerking in genetica maakt het delen van diverse genetische middelen mogelijk, bundeling van expertise, aanpak van mondiale gezondheidsuitdagingen."
      }
    },
    {
      question: {
        en: "What is systems genetics?",
        es: "¿Qué es la genética de sistemas?",
        de: "Was ist Systemgenetik?",
        nl: "Wat is systeemgenetica?"
      },
      options: [
        { en: "Approach integrating genetics with systems biology to understand complex biological networks", es: "Enfoque integrando genética con biología de sistemas para entender redes biológicas complejas", de: "Ansatz, der Genetik mit Systembiologie integriert, um komplexe biologische Netzwerke zu verstehen", nl: "Benadering die genetica integreert met systeembiologie om complexe biologische netwerken te begrijpen" },
        { en: "Study of single genetic systems only", es: "Estudio solo de sistemas genéticos individuales", de: "Studie nur einzelner genetischer Systeme", nl: "Studie van alleen enkele genetische systemen" },
        { en: "Computer systems for genetic analysis", es: "Sistemas computacionales para análisis genético", de: "Computersysteme für genetische Analyse", nl: "Computersystemen voor genetische analyse" },
        { en: "Classification of genetic disorders", es: "Clasificación de trastornos genéticos", de: "Klassifizierung genetischer Störungen", nl: "Classificatie van genetische aandoeningen" }
      ],
      correct: 0,
      explanation: {
        en: "Systems genetics combines genetic analysis with systems biology approaches to understand how genetic variations affect complex biological networks and phenotypes at a systems level.",
        es: "La genética de sistemas combina análisis genético con enfoques de biología de sistemas para entender cómo variaciones genéticas afectan redes biológicas complejas.",
        de: "Systemgenetik kombiniert genetische Analyse mit systembiologischen Ansätzen, um zu verstehen, wie genetische Variationen komplexe biologische Netzwerke beeinflussen.",
        nl: "Systeemgenetica combineert genetische analyse met systeembiologische benaderingen om te begrijpen hoe genetische variaties complexe biologische netwerken beïnvloeden."
      }
    },
    {
      question: {
        en: "What is synthetic biology?",
        es: "¿Qué es la biología sintética?",
        de: "Was ist synthetische Biologie?",
        nl: "Wat is synthetische biologie?"
      },
      options: [
        { en: "Engineering discipline designing and constructing new biological parts, devices, and systems", es: "Disciplina de ingeniería diseñando y construyendo nuevas partes, dispositivos y sistemas biológicos", de: "Ingenieurdisziplin, die neue biologische Teile, Geräte und Systeme entwirft und konstruiert", nl: "Ingenieursdiscipline die nieuwe biologische onderdelen, apparaten en systemen ontwerpt en construeert" },
        { en: "Study of artificially created organisms only", es: "Estudio solo de organismos creados artificialmente", de: "Studie nur künstlich geschaffener Organismen", nl: "Studie van alleen kunstmatig gecreëerde organismen" },
        { en: "Manufacturing of synthetic chemicals", es: "Manufactura de químicos sintéticos", de: "Herstellung synthetischer Chemikalien", nl: "Vervaardiging van synthetische chemicaliën" },
        { en: "Computer modeling of biological processes", es: "Modelado por computadora de procesos biológicos", de: "Computermodellierung biologischer Prozesse", nl: "Computermodellering van biologische processen" }
      ],
      correct: 0,
      explanation: {
        en: "Synthetic biology is an interdisciplinary field that applies engineering principles to biology, designing and constructing new biological parts, devices, and systems for useful purposes.",
        es: "La biología sintética es un campo interdisciplinario que aplica principios de ingeniería a la biología, diseñando y construyendo nuevas partes, dispositivos y sistemas biológicos.",
        de: "Synthetische Biologie ist ein interdisziplinäres Feld, das Ingenieursprinzipien auf die Biologie anwendet und neue biologische Teile, Geräte und Systeme entwirft.",
        nl: "Synthetische biologie is een interdisciplinair veld dat ingenieursprincipes toepast op biologie, nieuwe biologische onderdelen, apparaten en systemen ontwerpend."
      }
    },
    {
      question: {
        en: "What are BioBricks?",
        es: "¿Qué son los BioBricks?",
        de: "Was sind BioBricks?",
        nl: "Wat zijn BioBricks?"
      },
      options: [
        { en: "Standardized biological parts that can be assembled to build biological systems", es: "Partes biológicas estandarizadas que pueden ensamblarse para construir sistemas biológicos", de: "Standardisierte biologische Teile, die zusammengesetzt werden können, um biologische Systeme zu bauen", nl: "Gestandaardiseerde biologische onderdelen die kunnen worden geassembleerd om biologische systemen te bouwen" },
        { en: "Physical building materials made from biological waste", es: "Materiales de construcción físicos hechos de desechos biológicos", de: "Physische Baumaterialien aus biologischen Abfällen", nl: "Fysieke bouwmaterialen gemaakt van biologisch afval" },
        { en: "Computer programs for biological modeling", es: "Programas de computadora para modelado biológico", de: "Computerprogramme für biologische Modellierung", nl: "Computerprogramma's voor biologische modellering" },
        { en: "Laboratory instruments for DNA analysis", es: "Instrumentos de laboratorio para análisis de ADN", de: "Laborinstrumente für DNA-Analyse", nl: "Laboratoriuminstrumenten voor DNA-analyse" }
      ],
      correct: 0,
      explanation: {
        en: "BioBricks are standardized biological parts with defined functions that can be mixed and matched to build biological systems, forming the foundation of the Registry of Standard Biological Parts.",
        es: "Los BioBricks son partes biológicas estandarizadas con funciones definidas que pueden mezclarse y combinarse para construir sistemas biológicos.",
        de: "BioBricks sind standardisierte biologische Teile mit definierten Funktionen, die gemischt und kombiniert werden können, um biologische Systeme zu bauen.",
        nl: "BioBricks zijn gestandaardiseerde biologische onderdelen met gedefinieerde functies die kunnen worden gemengd en gecombineerd om biologische systemen te bouwen."
      }
    },
    {
      question: {
        en: "What is a genetic oscillator?",
        es: "¿Qué es un oscilador genético?",
        de: "Was ist ein genetischer Oszillator?",
        nl: "Wat is een genetische oscillator?"
      },
      options: [
        { en: "Synthetic genetic circuit that produces periodic oscillations in gene expression", es: "Circuito genético sintético que produce oscilaciones periódicas en expresión génica", de: "Synthetischer genetischer Schaltkreis, der periodische Schwingungen in der Genexpression erzeugt", nl: "Synthetisch genetisch circuit dat periodieke oscillaties in genexpressie produceert" },
        { en: "Device that measures genetic mutations", es: "Dispositivo que mide mutaciones genéticas", de: "Gerät, das genetische Mutationen misst", nl: "Apparaat dat genetische mutaties meet" },
        { en: "Instrument for DNA amplification", es: "Instrumento para amplificación de ADN", de: "Instrument für DNA-Amplifikation", nl: "Instrument voor DNA-amplificatie" },
        { en: "Tool for chromosome visualization", es: "Herramienta para visualización de cromosomas", de: "Werkzeug zur Chromosomenvisualisierung", nl: "Tool voor chromosoomvisualisatie" }
      ],
      correct: 0,
      explanation: {
        en: "A genetic oscillator is an engineered genetic circuit that exhibits periodic behavior, similar to a biological clock, demonstrating how synthetic biology can create predictable dynamic behaviors.",
        es: "Un oscilador genético es un circuito genético ingenierizado que exhibe comportamiento periódico, similar a un reloj biológico, demostrando cómo la biología sintética puede crear comportamientos dinámicos predecibles.",
        de: "Ein genetischer Oszillator ist ein konstruierter genetischer Schaltkreis, der periodisches Verhalten zeigt, ähnlich einer biologischen Uhr.",
        nl: "Een genetische oscillator is een geëngineerd genetisch circuit dat periodiek gedrag vertoont, vergelijkbaar met een biologische klok."
      }
    },
    {
      question: {
        en: "What is a genetic toggle switch?",
        es: "¿Qué es un interruptor genético de palanca?",
        de: "Was ist ein genetischer Toggle-Schalter?",
        nl: "Wat is een genetische toggle-schakelaar?"
      },
      options: [
        { en: "Bistable genetic circuit that can exist in two stable states", es: "Circuito genético biestable que puede existir en dos estados estables", de: "Bistabiler genetischer Schaltkreis, der in zwei stabilen Zuständen existieren kann", nl: "Bistabiel genetisch circuit dat in twee stabiele toestanden kan bestaan" },
        { en: "Physical switch for controlling genetic experiments", es: "Interruptor físico para controlar experimentos genéticos", de: "Physischer Schalter zur Kontrolle genetischer Experimente", nl: "Fysieke schakelaar voor het besturen van genetische experimenten" },
        { en: "Method for turning genes on and off randomly", es: "Método para encender y apagar genes aleatoriamente", de: "Methode zum zufälligen Ein- und Ausschalten von Genen", nl: "Methode voor het willekeurig aan- en uitzetten van genen" },
        { en: "Software for genetic data analysis", es: "Software para análisis de datos genéticos", de: "Software für genetische Datenanalyse", nl: "Software voor genetische data-analyse" }
      ],
      correct: 0,
      explanation: {
        en: "A genetic toggle switch is a synthetic genetic circuit with two mutually inhibitory genes that can maintain either of two stable expression states, functioning like a biological memory device.",
        es: "Un interruptor genético de palanca es un circuito genético sintético con dos genes mutuamente inhibitorios que pueden mantener cualquiera de dos estados de expresión estables.",
        de: "Ein genetischer Toggle-Schalter ist ein synthetischer genetischer Schaltkreis mit zwei sich gegenseitig hemmenden Genen, der beide stabilen Expressionszustände aufrechterhalten kann.",
        nl: "Een genetische toggle-schakelaar is een synthetisch genetisch circuit met twee wederzijds remmende genen dat beide stabiele expressietoestanden kan behouden."
      }
    },
    {
      question: {
        en: "What is protein design and engineering?",
        es: "¿Qué es el diseño e ingeniería de proteínas?",
        de: "Was ist Proteindesign und -engineering?",
        nl: "Wat is eiwitontwerp en -engineering?"
      },
      options: [
        { en: "Computational and experimental approaches to create proteins with novel functions", es: "Enfoques computacionales y experimentales para crear proteínas con funciones novedosas", de: "Computational und experimentelle Ansätze zur Entwicklung von Proteinen mit neuen Funktionen", nl: "Computationele en experimentele benaderingen om eiwitten met nieuwe functies te creëren" },
        { en: "Manufacturing proteins in industrial quantities", es: "Manufactura de proteínas en cantidades industriales", de: "Herstellung von Proteinen in industriellen Mengen", nl: "Vervaardiging van eiwitten in industriële hoeveelheden" },
        { en: "Purification of natural proteins only", es: "Purificación solo de proteínas naturales", de: "Nur Reinigung natürlicher Proteine", nl: "Alleen zuivering van natuurlijke eiwitten" },
        { en: "Analysis of protein sequences", es: "Análisis de secuencias de proteínas", de: "Analyse von Proteinsequenzen", nl: "Analyse van eiwitsequenties" }
      ],
      correct: 0,
      explanation: {
        en: "Protein design and engineering involves creating proteins with desired properties and functions through computational design, directed evolution, and rational engineering approaches.",
        es: "El diseño e ingeniería de proteínas involucra crear proteínas con propiedades y funciones deseadas a través de diseño computacional, evolución dirigida y enfoques de ingeniería racional.",
        de: "Proteindesign und -engineering beinhaltet die Erstellung von Proteinen mit gewünschten Eigenschaften und Funktionen durch computational Design, gerichtete Evolution und rationale Ansätze.",
        nl: "Eiwitontwerp en -engineering behelst het creëren van eiwitten met gewenste eigenschappen en functies door computationeel ontwerp, gerichte evolutie en rationele benaderingen."
      }
    },
    {
      question: {
        en: "What are metabolic pathways in synthetic biology?",
        es: "¿Qué son las vías metabólicas en biología sintética?",
        de: "Was sind Stoffwechselwege in der synthetischen Biologie?",
        nl: "Wat zijn metabole routes in synthetische biologie?"
      },
      options: [
        { en: "Engineered biochemical networks designed to produce specific compounds", es: "Redes bioquímicas ingenierizadas diseñadas para producir compuestos específicos", de: "Konstruierte biochemische Netzwerke, die zur Produktion spezifischer Verbindungen entwickelt wurden", nl: "Geëngineerde biochemische netwerken ontworpen om specifieke verbindingen te produceren" },
        { en: "Natural metabolic processes only", es: "Solo procesos metabólicos naturales", de: "Nur natürliche Stoffwechselprozesse", nl: "Alleen natuurlijke metabole processen" },
        { en: "Pathways for genetic information flow", es: "Vías para flujo de información genética", de: "Wege für genetischen Informationsfluss", nl: "Routes voor genetische informatiestroming" },
        { en: "Methods for studying metabolism", es: "Métodos para estudiar metabolismo", de: "Methoden zur Untersuchung des Stoffwechsels", nl: "Methoden voor het bestuderen van metabolisme" }
      ],
      correct: 0,
      explanation: {
        en: "In synthetic biology, metabolic pathways are engineered to reprogram cellular metabolism for producing valuable compounds like pharmaceuticals, biofuels, and specialty chemicals.",
        es: "En biología sintética, las vías metabólicas son ingenierizadas para reprogramar el metabolismo celular para producir compuestos valiosos como farmacéuticos, biocombustibles.",
        de: "In der synthetischen Biologie werden Stoffwechselwege konstruiert, um den Zellstoffwechsel zur Produktion wertvoller Verbindungen wie Arzneimittel und Biokraftstoffe umzuprogrammieren.",
        nl: "In synthetische biologie worden metabole routes geëngineered om celmetabolisme te herprogrammeren voor de productie van waardevolle verbindingen zoals farmaceutica."
      }
    },
    {
      question: {
        en: "What is directed evolution?",
        es: "¿Qué es la evolución dirigida?",
        de: "Was ist gerichtete Evolution?",
        nl: "Wat is gerichte evolutie?"
      },
      options: [
        { en: "Laboratory technique that accelerates natural evolution to develop proteins with desired properties", es: "Técnica de laboratorio que acelera la evolución natural para desarrollar proteínas con propiedades deseadas", de: "Labortechnik, die natürliche Evolution beschleunigt, um Proteine mit gewünschten Eigenschaften zu entwickeln", nl: "Laboratoriumtechniek die natuurlijke evolutie versnelt om eiwitten met gewenste eigenschappen te ontwikkelen" },
        { en: "Computer simulation of evolutionary processes", es: "Simulación por computadora de procesos evolutivos", de: "Computersimulation evolutionärer Prozesse", nl: "Computersimulatie van evolutionaire processen" },
        { en: "Manual selection of genetic variants", es: "Selección manual de variantes genéticas", de: "Manuelle Auswahl genetischer Varianten", nl: "Handmatige selectie van genetische varianten" },
        { en: "Breeding programs for organisms", es: "Programas de reproducción para organismos", de: "Zuchtprogramme für Organismen", nl: "Fokprogramma's voor organismen" }
      ],
      correct: 0,
      explanation: {
        en: "Directed evolution mimics natural evolutionary processes in the laboratory through repeated rounds of mutagenesis and selection to evolve biomolecules with improved or novel functions.",
        es: "La evolución dirigida imita procesos evolutivos naturales en el laboratorio a través de rondas repetidas de mutagénesis y selección para evolucionar biomoléculas con funciones mejoradas.",
        de: "Gerichtete Evolution ahmt natürliche Evolutionsprozesse im Labor durch wiederholte Runden von Mutagenese und Selektion nach, um Biomoleküle mit verbesserten Funktionen zu entwickeln.",
        nl: "Gerichte evolutie bootst natuurlijke evolutionaire processen na in het laboratorium door herhaalde rondes van mutagenese en selectie om biomoleculen met verbeterde functies te ontwikkelen."
      }
    },
    {
      question: {
        en: "What is chassis engineering in synthetic biology?",
        es: "¿Qué es la ingeniería de chasis en biología sintética?",
        de: "Was ist Chassis-Engineering in der synthetischen Biologie?",
        nl: "Wat is chassis-engineering in synthetische biologie?"
      },
      options: [
        { en: "Modifying host organisms to serve as platforms for synthetic biological systems", es: "Modificar organismos huésped para servir como plataformas para sistemas biológicos sintéticos", de: "Modifikation von Wirtsorganismen als Plattformen für synthetische biologische Systeme", nl: "Modificeren van gastheerorganismen om als platforms voor synthetische biologische systemen te dienen" },
        { en: "Building physical supports for laboratory equipment", es: "Construir soportes físicos para equipo de laboratorio", de: "Bau physischer Stützen für Laborgeräte", nl: "Bouwen van fysieke ondersteuningen voor laboratoriumapparatuur" },
        { en: "Designing cell culture containers", es: "Diseñar contenedores de cultivo celular", de: "Design von Zellkultur-Behältern", nl: "Ontwerpen van celkweekcontainers" },
        { en: "Creating software frameworks", es: "Crear marcos de software", de: "Erstellung von Software-Frameworks", nl: "Creëren van software-frameworks" }
      ],
      correct: 0,
      explanation: {
        en: "Chassis engineering involves optimizing host organisms (like E. coli or yeast) by removing unnecessary genes and adding beneficial features to create better platforms for synthetic biology applications.",
        es: "La ingeniería de chasis involucra optimizar organismos huésped (como E. coli o levadura) removiendo genes innecesarios y agregando características beneficiosas.",
        de: "Chassis-Engineering beinhaltet die Optimierung von Wirtsorganismen (wie E. coli oder Hefe) durch Entfernung unnötiger Gene und Hinzufügung vorteilhafter Eigenschaften.",
        nl: "Chassis-engineering behelst het optimaliseren van gastheerorganismen (zoals E. coli of gist) door onnodige genen te verwijderen en gunstige eigenschappen toe te voegen."
      }
    },
    {
      question: {
        en: "What are biological circuits?",
        es: "¿Qué son los circuitos biológicos?",
        de: "Was sind biologische Schaltkreise?",
        nl: "Wat zijn biologische circuits?"
      },
      options: [
        { en: "Networks of interacting biomolecules that process information and perform computations", es: "Redes de biomoléculas interactuantes que procesan información y realizan computaciones", de: "Netzwerke interagierender Biomoleküle, die Informationen verarbeiten und Berechnungen durchführen", nl: "Netwerken van interacterende biomoleculen die informatie verwerken en berekeningen uitvoeren" },
        { en: "Electrical circuits inside living cells", es: "Circuitos eléctricos dentro de células vivas", de: "Elektrische Schaltkreise in lebenden Zellen", nl: "Elektrische circuits binnen levende cellen" },
        { en: "Physical pathways for molecular transport", es: "Vías físicas para transporte molecular", de: "Physische Wege für molekularen Transport", nl: "Fysieke routes voor moleculair transport" },
        { en: "Laboratory equipment for biological studies", es: "Equipo de laboratorio para estudios biológicos", de: "Laborgeräte für biologische Studien", nl: "Laboratoriumapparatuur voor biologische studies" }
      ],
      correct: 0,
      explanation: {
        en: "Biological circuits are engineered networks of genes, proteins, and other biomolecules that can process inputs, make decisions, and generate outputs, similar to electronic circuits.",
        es: "Los circuitos biológicos son redes ingenierizadas de genes, proteínas y otras biomoléculas que pueden procesar entradas, tomar decisiones y generar salidas.",
        de: "Biologische Schaltkreise sind konstruierte Netzwerke aus Genen, Proteinen und anderen Biomolekülen, die Eingaben verarbeiten, Entscheidungen treffen und Ausgaben generieren können.",
        nl: "Biologische circuits zijn geëngineerde netwerken van genen, eiwitten en andere biomoleculen die inputs kunnen verwerken, beslissingen kunnen nemen en outputs kunnen genereren."
      }
    },
    {
      question: {
        en: "What is quantitative synthetic biology?",
        es: "¿Qué es la biología sintética cuantitativa?",
        de: "Was ist quantitative synthetische Biologie?",
        nl: "Wat is kwantitatieve synthetische biologie?"
      },
      options: [
        { en: "Approach using mathematical modeling and quantitative measurements to design biological systems", es: "Enfoque usando modelado matemático y mediciones cuantitativas para diseñar sistemas biológicos", de: "Ansatz mit mathematischer Modellierung und quantitativen Messungen zur Gestaltung biologischer Systeme", nl: "Benadering die mathematische modellering en kwantitatieve metingen gebruikt om biologische systemen te ontwerpen" },
        { en: "Counting the number of biological components", es: "Contar el número de componentes biológicos", de: "Zählung der Anzahl biologischer Komponenten", nl: "Tellen van het aantal biologische componenten" },
        { en: "Statistical analysis of genetic data only", es: "Análisis estadístico solo de datos genéticos", de: "Nur statistische Analyse genetischer Daten", nl: "Alleen statistische analyse van genetische data" },
        { en: "Measurement of laboratory reagent concentrations", es: "Medición de concentraciones de reactivos de laboratorio", de: "Messung von Laborreagenzikonzentrationen", nl: "Meting van laboratoriumreagentconcentraties" }
      ],
      correct: 0,
      explanation: {
        en: "Quantitative synthetic biology integrates mathematical modeling, computational analysis, and precise measurements to design predictable biological systems with defined behaviors.",
        es: "La biología sintética cuantitativa integra modelado matemático, análisis computacional y mediciones precisas para diseñar sistemas biológicos predecibles con comportamientos definidos.",
        de: "Quantitative synthetische Biologie integriert mathematische Modellierung, computergestützte Analyse und präzise Messungen zur Gestaltung vorhersagbarer biologischer Systeme.",
        nl: "Kwantitatieve synthetische biologie integreert mathematische modellering, computationele analyse en precieze metingen om voorspelbare biologische systemen te ontwerpen."
      }
    },
    {
      question: {
        en: "What are genetic logic gates?",
        es: "¿Qué son las puertas lógicas genéticas?",
        de: "Was sind genetische Logikgatter?",
        nl: "Wat zijn genetische logische poorten?"
      },
      options: [
        { en: "Biological circuits that implement Boolean logic operations using genetic components", es: "Circuitos biológicos que implementan operaciones lógicas booleanas usando componentes genéticos", de: "Biologische Schaltkreise, die boolesche Logikoperationen mit genetischen Komponenten implementieren", nl: "Biologische circuits die Booleaanse logische operaties implementeren met genetische componenten" },
        { en: "Physical barriers controlling gene access", es: "Barreras físicas controlando acceso génico", de: "Physische Barrieren zur Kontrolle des Genzugangs", nl: "Fysieke barrières die gentoegang controleren" },
        { en: "Software programs for genetic analysis", es: "Programas de software para análisis genético", de: "Softwareprogramme für genetische Analyse", nl: "Softwareprogramma's voor genetische analyse" },
        { en: "Laboratory techniques for gene isolation", es: "Técnicas de laboratorio para aislamiento génico", de: "Labortechniken zur Genisolation", nl: "Laboratoriumtechnieken voor geïsolatie" }
      ],
      correct: 0,
      explanation: {
        en: "Genetic logic gates are engineered biological systems that perform logical operations (AND, OR, NOT) using molecular interactions, enabling computation within living cells.",
        es: "Las puertas lógicas genéticas son sistemas biológicos ingenierizados que realizan operaciones lógicas (AND, OR, NOT) usando interacciones moleculares.",
        de: "Genetische Logikgatter sind konstruierte biologische Systeme, die logische Operationen (AND, OR, NOT) mit molekularen Wechselwirkungen durchführen.",
        nl: "Genetische logische poorten zijn geëngineerde biologische systemen die logische operaties (AND, OR, NOT) uitvoeren met moleculaire interacties."
      }
    },
    {
      question: {
        en: "What is biocontainment in synthetic biology?",
        es: "¿Qué es la biocontención en biología sintética?",
        de: "Was ist Biocontainment in der synthetischen Biologie?",
        nl: "Wat is biocontainment in synthetische biologie?"
      },
      options: [
        { en: "Safety measures designed to prevent engineered organisms from surviving outside laboratory conditions", es: "Medidas de seguridad diseñadas para prevenir que organismos ingenierizados sobrevivan fuera de condiciones de laboratorio", de: "Sicherheitsmaßnahmen zur Verhinderung des Überlebens konstruierter Organismen außerhalb von Laborbedingungen", nl: "Veiligheidsmaatregelen ontworpen om te voorkomen dat geëngineerde organismen overleven buiten laboratoriumomstandigheden" },
        { en: "Physical containers for biological samples", es: "Contenedores físicos para muestras biológicas", de: "Physische Behälter für biologische Proben", nl: "Fysieke containers voor biologische monsters" },
        { en: "Isolation of different cell types", es: "Aislamiento de diferentes tipos celulares", de: "Isolation verschiedener Zelltypen", nl: "Isolatie van verschillende celtypen" },
        { en: "Storage systems for genetic materials", es: "Sistemas de almacenamiento para materiales genéticos", de: "Speichersysteme für genetische Materialien", nl: "Opslagsystemen voor genetische materialen" }
      ],
      correct: 0,
      explanation: {
        en: "Biocontainment strategies include kill switches, auxotrophy (dependency on artificial nutrients), and other mechanisms to ensure synthetic organisms cannot survive or reproduce outside controlled environments.",
        es: "Las estrategias de biocontención incluyen interruptores de eliminación, auxotrofia (dependencia de nutrientes artificiales) y otros mecanismos para asegurar que organismos sintéticos no puedan sobrevivir.",
        de: "Biocontainment-Strategien umfassen Kill-Switches, Auxotrophie (Abhängigkeit von künstlichen Nährstoffen) und andere Mechanismen zur Sicherstellung, dass synthetische Organismen nicht überleben können.",
        nl: "Biocontainment strategieën omvatten kill switches, auxotrofie (afhankelijkheid van kunstmatige voedingsstoffen) en andere mechanismen om ervoor te zorgen dat synthetische organismen niet kunnen overleven."
      }
    },
    {
      question: {
        en: "What is genome-scale modeling?",
        es: "¿Qué es el modelado a escala del genoma?",
        de: "Was ist genomweite Modellierung?",
        nl: "Wat is genoomschaalmodellering?"
      },
      options: [
        { en: "Computational approach modeling all genes and metabolic reactions in an organism", es: "Enfoque computacional modelando todos los genes y reacciones metabólicas en un organismo", de: "Computeransatz zur Modellierung aller Gene und Stoffwechselreaktionen in einem Organismus", nl: "Computationele benadering die alle genen en metabole reacties in een organisme modelleert" },
        { en: "Physical scaling of genome size", es: "Escalamiento físico del tamaño del genoma", de: "Physische Skalierung der Genomgröße", nl: "Fysieke schaling van genoomgrootte" },
        { en: "Measuring genome weight and volume", es: "Medir peso y volumen del genoma", de: "Messung von Genomgewicht und -volumen", nl: "Meten van genoomgewicht en -volume" },
        { en: "Comparing genome sizes across species", es: "Comparar tamaños de genoma entre especies", de: "Vergleich von Genomgrößen zwischen Arten", nl: "Vergelijken van genoomgroottes tussen soorten" }
      ],
      correct: 0,
      explanation: {
        en: "Genome-scale modeling creates comprehensive mathematical models of cellular metabolism, enabling prediction of cellular behavior and optimization of metabolic engineering strategies.",
        es: "El modelado a escala del genoma crea modelos matemáticos comprensivos del metabolismo celular, permitiendo predicción del comportamiento celular y optimización de estrategias de ingeniería metabólica.",
        de: "Genomweite Modellierung erstellt umfassende mathematische Modelle des Zellstoffwechsels, ermöglicht Vorhersage des Zellverhaltens und Optimierung von Stoffwechsel-Engineering-Strategien.",
        nl: "Genoomschaalmodellering creëert uitgebreide mathematische modellen van celmetabolisme, voorspelling van celgedrag en optimalisatie van metabole engineering strategieën mogelijk makend."
      }
    },
    {
      question: {
        en: "What are biosensors in synthetic biology?",
        es: "¿Qué son los biosensores en biología sintética?",
        de: "Was sind Biosensoren in der synthetischen Biologie?",
        nl: "Wat zijn biosensoren in synthetische biologie?"
      },
      options: [
        { en: "Engineered biological systems that detect and respond to specific molecular targets", es: "Sistemas biológicos ingenierizados que detectan y responden a objetivos moleculares específicos", de: "Konstruierte biologische Systeme, die spezifische molekulare Ziele erkennen und darauf reagieren", nl: "Geëngineerde biologische systemen die specifieke moleculaire doelen detecteren en erop reageren" },
        { en: "Physical sensors attached to biological samples", es: "Sensores físicos unidos a muestras biológicas", de: "Physische Sensoren an biologischen Proben befestigt", nl: "Fysieke sensoren bevestigd aan biologische monsters" },
        { en: "Computer programs analyzing biological data", es: "Programas de computadora analizando datos biológicos", de: "Computerprogramme zur Analyse biologischer Daten", nl: "Computerprogramma's die biologische data analyseren" },
        { en: "Laboratory instruments for biological measurements", es: "Instrumentos de laboratorio para mediciones biológicas", de: "Laborinstrumente für biologische Messungen", nl: "Laboratoriuminstrumenten voor biologische metingen" }
      ],
      correct: 0,
      explanation: {
        en: "Synthetic biosensors use engineered proteins or genetic circuits to detect specific molecules and generate measurable outputs, enabling real-time monitoring of environmental or cellular conditions.",
        es: "Los biosensores sintéticos usan proteínas ingenierizadas o circuitos genéticos para detectar moléculas específicas y generar salidas medibles.",
        de: "Synthetische Biosensoren nutzen konstruierte Proteine oder genetische Schaltkreise, um spezifische Moleküle zu erkennen und messbare Ausgaben zu generieren.",
        nl: "Synthetische biosensoren gebruiken geëngineerde eiwitten of genetische circuits om specifieke moleculen te detecteren en meetbare outputs te genereren."
      }
    },
    {
      question: {
        en: "What is metabolic engineering?",
        es: "¿Qué es la ingeniería metabólica?",
        de: "Was ist Metabolic Engineering?",
        nl: "Wat is metabole engineering?"
      },
      options: [
        { en: "Engineering cellular metabolism to optimize production of desired compounds", es: "Ingeniería del metabolismo celular para optimizar producción de compuestos deseados", de: "Engineering des Zellstoffwechsels zur Optimierung der Produktion gewünschter Verbindungen", nl: "Engineering van celmetabolisme om productie van gewenste verbindingen te optimaliseren" },
        { en: "Studying natural metabolic processes only", es: "Estudiar solo procesos metabólicos naturales", de: "Nur Studium natürlicher Stoffwechselprozesse", nl: "Alleen bestuderen van natuurlijke metabole processen" },
        { en: "Measuring metabolite concentrations", es: "Medir concentraciones de metabolitos", de: "Messung von Metabolitkonzentrationen", nl: "Meten van metabolietconcentraties" },
        { en: "Analyzing metabolic disorders", es: "Analizar trastornos metabólicos", de: "Analyse von Stoffwechselstörungen", nl: "Analyseren van stofwisselingsstoornissen" }
      ],
      correct: 0,
      explanation: {
        en: "Metabolic engineering involves modifying cellular metabolism through genetic and biochemical approaches to enhance production of pharmaceuticals, chemicals, fuels, and other valuable products.",
        es: "La ingeniería metabólica involucra modificar el metabolismo celular a través de enfoques genéticos y bioquímicos para mejorar producción de farmacéuticos, químicos, combustibles.",
        de: "Metabolic Engineering beinhaltet die Modifikation des Zellstoffwechsels durch genetische und biochemische Ansätze zur Verbesserung der Produktion von Arzneimitteln, Chemikalien, Kraftstoffen.",
        nl: "Metabole engineering behelst het modificeren van celmetabolisme door genetische en biochemische benaderingen om productie van farmaceutica, chemicaliën, brandstoffen te verbeteren."
      }
    },
    {
      question: {
        en: "What is orthogonal biology?",
        es: "¿Qué es la biología ortogonal?",
        de: "Was ist orthogonale Biologie?",
        nl: "Wat is orthogonale biologie?"
      },
      options: [
        { en: "Design of biological systems that operate independently of natural biological processes", es: "Diseño de sistemas biológicos que operan independientemente de procesos biológicos naturales", de: "Design biologischer Systeme, die unabhängig von natürlichen biologischen Prozessen funktionieren", nl: "Ontwerp van biologische systemen die onafhankelijk van natuurlijke biologische processen werken" },
        { en: "Study of perpendicular cellular structures", es: "Estudio de estructuras celulares perpendiculares", de: "Studie senkrechter zellulärer Strukturen", nl: "Studie van loodrechte cellulaire structuren" },
        { en: "Mathematical approach to biology", es: "Enfoque matemático a la biología", de: "Mathematischer Ansatz zur Biologie", nl: "Mathematische benadering van biologie" },
        { en: "Linear biological pathway analysis", es: "Análisis de vías biológicas lineales", de: "Analyse linearer biologischer Pfade", nl: "Lineaire biologische route-analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Orthogonal biology creates synthetic biological systems that function alongside but independently of natural cellular processes, minimizing interference and enabling precise control.",
        es: "La biología ortogonal crea sistemas biológicos sintéticos que funcionan junto pero independientemente de procesos celulares naturales, minimizando interferencia.",
        de: "Orthogonale Biologie erschafft synthetische biologische Systeme, die neben aber unabhängig von natürlichen zellulären Prozessen funktionieren, Interferenzen minimierend.",
        nl: "Orthogonale biologie creëert synthetische biologische systemen die naast maar onafhankelijk van natuurlijke cellulaire processen functioneren, interferentie minimaliserend."
      }
    },
    {
      question: {
        en: "What is systems-level design?",
        es: "¿Qué es el diseño a nivel de sistemas?",
        de: "Was ist systemweites Design?",
        nl: "Wat is systeemniveau-ontwerp?"
      },
      options: [
        { en: "Holistic approach designing entire biological systems rather than individual components", es: "Enfoque holístico diseñando sistemas biológicos enteros en lugar de componentes individuales", de: "Ganzheitlicher Ansatz zur Gestaltung ganzer biologischer Systeme statt einzelner Komponenten", nl: "Holistische benadering die hele biologische systemen ontwerpt in plaats van individuele componenten" },
        { en: "Designing computer systems only", es: "Diseñar solo sistemas de computadora", de: "Nur Design von Computersystemen", nl: "Alleen ontwerpen van computersystemen" },
        { en: "Creating hierarchical classifications", es: "Crear clasificaciones jerárquicas", de: "Erstellung hierarchischer Klassifizierungen", nl: "Creëren van hiërarchische classificaties" },
        { en: "Organizing laboratory workflows", es: "Organizar flujos de trabajo de laboratorio", de: "Organisation von Laborabläufen", nl: "Organiseren van laboratoriumworkflows" }
      ],
      correct: 0,
      explanation: {
        en: "Systems-level design in synthetic biology considers interactions between multiple components and layers of regulation to create robust, predictable biological systems with emergent properties.",
        es: "El diseño a nivel de sistemas en biología sintética considera interacciones entre múltiples componentes y capas de regulación para crear sistemas biológicos robustos y predecibles.",
        de: "Systemweites Design in der synthetischen Biologie berücksichtigt Wechselwirkungen zwischen mehreren Komponenten und Regulationsebenen zur Schaffung robuster, vorhersagbarer biologischer Systeme.",
        nl: "Systeemniveau-ontwerp in synthetische biologie beschouwt interacties tussen meerdere componenten en regulatielagen om robuuste, voorspelbare biologische systemen te creëren."
      }
    },
    {
      question: {
        en: "What are biological computers?",
        es: "¿Qué son las computadoras biológicas?",
        de: "Was sind biologische Computer?",
        nl: "Wat zijn biologische computers?"
      },
      options: [
        { en: "Living systems engineered to perform computational tasks using biological components", es: "Sistemas vivos ingenierizados para realizar tareas computacionales usando componentes biológicos", de: "Lebende Systeme, die zur Durchführung rechnerischer Aufgaben mit biologischen Komponenten entwickelt wurden", nl: "Levende systemen geëngineered om computationele taken uit te voeren met biologische componenten" },
        { en: "Computers made from biological materials", es: "Computadoras hechas de materiales biológicos", de: "Computer aus biologischen Materialien", nl: "Computers gemaakt van biologische materialen" },
        { en: "Software programs simulating biology", es: "Programas de software simulando biología", de: "Softwareprogramme zur Biologie-Simulation", nl: "Softwareprogramma's die biologie simuleren" },
        { en: "Electronic devices for biological research", es: "Dispositivos electrónicos para investigación biológica", de: "Elektronische Geräte für biologische Forschung", nl: "Elektronische apparaten voor biologisch onderzoek" }
      ],
      correct: 0,
      explanation: {
        en: "Biological computers use DNA, proteins, and cellular machinery to process information and perform calculations, potentially offering advantages in biocompatibility and parallel processing.",
        es: "Las computadoras biológicas usan ADN, proteínas y maquinaria celular para procesar información y realizar cálculos, potencialmente ofreciendo ventajas en biocompatibilidad.",
        de: "Biologische Computer nutzen DNA, Proteine und zelluläre Maschinerie zur Informationsverarbeitung und Durchführung von Berechnungen, bieten möglicherweise Vorteile in Biokompatibilität.",
        nl: "Biologische computers gebruiken DNA, eiwitten en cellulaire machinerie om informatie te verwerken en berekeningen uit te voeren, mogelijk voordelen biedend in biocompatibiliteit."
      }
    },
    {
      question: {
        en: "What is the role of standardization in synthetic biology?",
        es: "¿Cuál es el papel de la estandarización en biología sintética?",
        de: "Was ist die Rolle der Standardisierung in der synthetischen Biologie?",
        nl: "Wat is de rol van standaardisatie in synthetische biologie?"
      },
      options: [
        { en: "Creating interchangeable biological parts and standardized measurement methods", es: "Crear partes biológicas intercambiables y métodos de medición estandarizados", de: "Erstellung austauschbarer biologischer Teile und standardisierter Messmethoden", nl: "Creëren van uitwisselbare biologische onderdelen en gestandaardiseerde meetmethoden" },
        { en: "Enforcing regulatory compliance only", es: "Solo hacer cumplir el cumplimiento regulatorio", de: "Nur Durchsetzung regulatorischer Compliance", nl: "Alleen afdwingen van regelgevingsnaleving" },
        { en: "Maintaining laboratory equipment", es: "Mantener equipo de laboratorio", de: "Wartung von Laborgeräten", nl: "Onderhouden van laboratoriumapparatuur" },
        { en: "Training laboratory personnel", es: "Entrenar personal de laboratorio", de: "Ausbildung von Laborpersonal", nl: "Trainen van laboratoriumpersoneel" }
      ],
      correct: 0,
      explanation: {
        en: "Standardization in synthetic biology involves creating well-characterized, interoperable biological parts and establishing common measurement standards to enable reliable engineering of biological systems.",
        es: "La estandarización en biología sintética involucra crear partes biológicas bien caracterizadas e interoperables y establecer estándares de medición comunes.",
        de: "Standardisierung in der synthetischen Biologie beinhaltet die Erstellung gut charakterisierter, interoperabler biologischer Teile und die Etablierung gemeinsamer Messstandards.",
        nl: "Standaardisatie in synthetische biologie behelst het creëren van goed gekarakteriseerde, interoperabele biologische onderdelen en het vaststellen van gemeenschappelijke meetstandaarden."
      }
    },
    {
      question: {
        en: "What is cell-free synthetic biology?",
        es: "¿Qué es la biología sintética libre de células?",
        de: "Was ist zellfreie synthetische Biologie?",
        nl: "Wat is celvrije synthetische biologie?"
      },
      options: [
        { en: "Performing biological reactions and biosynthesis outside living cells using purified components", es: "Realizar reacciones biológicas y biosíntesis fuera de células vivas usando componentes purificados", de: "Durchführung biologischer Reaktionen und Biosynthese außerhalb lebender Zellen mit gereinigten Komponenten", nl: "Uitvoeren van biologische reacties en biosynthese buiten levende cellen met gezuiverde componenten" },
        { en: "Studying organisms that lack cellular structure", es: "Estudiar organismos que carecen de estructura celular", de: "Studie von Organismen ohne zelluläre Struktur", nl: "Bestuderen van organismen zonder cellulaire structuur" },
        { en: "Creating synthetic materials without biology", es: "Crear materiales sintéticos sin biología", de: "Erstellung synthetischer Materialien ohne Biologie", nl: "Creëren van synthetische materialen zonder biologie" },
        { en: "Computer modeling without experimental work", es: "Modelado por computadora sin trabajo experimental", de: "Computermodellierung ohne experimentelle Arbeit", nl: "Computermodellering zonder experimenteel werk" }
      ],
      correct: 0,
      explanation: {
        en: "Cell-free synthetic biology uses extracted cellular machinery (ribosomes, enzymes, etc.) to perform biological processes in controlled environments, offering advantages in speed, control, and accessibility.",
        es: "La biología sintética libre de células usa maquinaria celular extraída (ribosomas, enzimas, etc.) para realizar procesos biológicos en ambientes controlados.",
        de: "Zellfreie synthetische Biologie nutzt extrahierte zelluläre Maschinerie (Ribosomen, Enzyme, etc.) zur Durchführung biologischer Prozesse in kontrollierten Umgebungen.",
        nl: "Celvrije synthetische biologie gebruikt geëxtraheerde cellulaire machinerie (ribosomen, enzymen, etc.) om biologische processen uit te voeren in gecontroleerde omgevingen."
      }
    },
    {
      question: {
        en: "What is temporal control in synthetic biology?",
        es: "¿Qué es el control temporal en biología sintética?",
        de: "Was ist zeitliche Kontrolle in der synthetischen Biologie?",
        nl: "Wat is temporele controle in synthetische biologie?"
      },
      options: [
        { en: "Engineering biological systems with precise timing of gene expression and cellular functions", es: "Ingeniería de sistemas biológicos con timing preciso de expresión génica y funciones celulares", de: "Engineering biologischer Systeme mit präzisem Timing von Genexpression und zellulären Funktionen", nl: "Engineering van biologische systemen met precieze timing van genexpressie en cellulaire functies" },
        { en: "Measuring the duration of biological processes", es: "Medir la duración de procesos biológicos", de: "Messung der Dauer biologischer Prozesse", nl: "Meten van de duur van biologische processen" },
        { en: "Scheduling laboratory experiments", es: "Programar experimentos de laboratorio", de: "Planung von Laborexperimenten", nl: "Plannen van laboratoriumexperimenten" },
        { en: "Controlling laboratory equipment timing", es: "Controlar timing de equipo de laboratorio", de: "Kontrolle des Timings von Laborgeräten", nl: "Controleren van laboratoriumapparatuur timing" }
      ],
      correct: 0,
      explanation: {
        en: "Temporal control involves designing genetic circuits and regulatory mechanisms that can be activated, deactivated, or modulated at specific times, enabling dynamic control of biological processes.",
        es: "El control temporal involucra diseñar circuitos genéticos y mecanismos regulatorios que pueden activarse, desactivarse o modularse en tiempos específicos.",
        de: "Zeitliche Kontrolle beinhaltet die Gestaltung genetischer Schaltkreise und regulatorischer Mechanismen, die zu bestimmten Zeiten aktiviert, deaktiviert oder moduliert werden können.",
        nl: "Temporele controle behelst het ontwerpen van genetische circuits en regulatoire mechanismen die op specifieke tijden geactiveerd, gedeactiveerd of gemoduleerd kunnen worden."
      }
    },
    {
      question: {
        en: "What is spatial control in synthetic biology?",
        es: "¿Qué es el control espacial en biología sintética?",
        de: "Was ist räumliche Kontrolle in der synthetischen Biologie?",
        nl: "Wat is ruimtelijke controle in synthetische biologie?"
      },
      options: [
        { en: "Controlling where biological processes occur within cells, tissues, or organisms", es: "Controlar dónde ocurren procesos biológicos dentro de células, tejidos u organismos", de: "Kontrolle, wo biologische Prozesse innerhalb von Zellen, Geweben oder Organismen auftreten", nl: "Controleren waar biologische processen plaatsvinden binnen cellen, weefsels of organismen" },
        { en: "Organizing laboratory space layout", es: "Organizar diseño de espacio de laboratorio", de: "Organisation des Laborraum-Layouts", nl: "Organiseren van laboratoriumruimte-indeling" },
        { en: "Measuring physical dimensions of cells", es: "Medir dimensiones físicas de células", de: "Messung physischer Zelldimensionen", nl: "Meten van fysieke celafmetingen" },
        { en: "Positioning laboratory equipment", es: "Posicionar equipo de laboratorio", de: "Positionierung von Laborgeräten", nl: "Positioneren van laboratoriumapparatuur" }
      ],
      correct: 0,
      explanation: {
        en: "Spatial control in synthetic biology involves engineering subcellular localization signals, tissue-specific expression, and spatial organization of biological functions to create precise spatial patterns.",
        es: "El control espacial en biología sintética involucra ingeniería de señales de localización subcelular, expresión específica de tejido y organización espacial de funciones biológicas.",
        de: "Räumliche Kontrolle in der synthetischen Biologie beinhaltet Engineering subzellulärer Lokalisationssignale, gewebespezifischer Expression und räumlicher Organisation biologischer Funktionen.",
        nl: "Ruimtelijke controle in synthetische biologie behelst engineering van subcellulaire localisatiesignalen, weefselspecifieke expressie en ruimtelijke organisatie van biologische functies."
      }
    },
    {
      question: {
        en: "What are the applications of synthetic biology?",
        es: "¿Cuáles son las aplicaciones de la biología sintética?",
        de: "Was sind die Anwendungen der synthetischen Biologie?",
        nl: "Wat zijn de toepassingen van synthetische biologie?"
      },
      options: [
        { en: "Medicine, biotechnology, agriculture, environmental remediation, and manufacturing", es: "Medicina, biotecnología, agricultura, remediación ambiental y manufactura", de: "Medizin, Biotechnologie, Landwirtschaft, Umweltsanierung und Herstellung", nl: "Geneeskunde, biotechnologie, landbouw, milieuherstel en vervaardiging" },
        { en: "Only pharmaceutical development", es: "Solo desarrollo farmacéutico", de: "Nur pharmazeutische Entwicklung", nl: "Alleen farmaceutische ontwikkeling" },
        { en: "Exclusively academic research", es: "Exclusivamente investigación académica", de: "Ausschließlich akademische Forschung", nl: "Uitsluitend academisch onderzoek" },
        { en: "Computer software development only", es: "Solo desarrollo de software de computadora", de: "Nur Computersoftware-Entwicklung", nl: "Alleen computersoftware-ontwikkeling" }
      ],
      correct: 0,
      explanation: {
        en: "Synthetic biology has diverse applications including producing therapeutics, creating sustainable chemicals, engineering crops, developing biosensors, and designing environmental solutions.",
        es: "La biología sintética tiene aplicaciones diversas incluyendo producir terapéuticos, crear químicos sostenibles, ingeniería de cultivos, desarrollar biosensores y diseñar soluciones ambientales.",
        de: "Synthetische Biologie hat diverse Anwendungen einschließlich Produktion von Therapeutika, Schaffung nachhaltiger Chemikalien, Engineering von Nutzpflanzen und Entwicklung von Biosensoren.",
        nl: "Synthetische biologie heeft diverse toepassingen waaronder het produceren van therapeutica, creëren van duurzame chemicaliën, engineering van gewassen en ontwikkelen van biosensoren."
      }
    },
    {
      question: {
        en: "What are the challenges in synthetic biology?",
        es: "¿Cuáles son los desafíos en biología sintética?",
        de: "Was sind die Herausforderungen in der synthetischen Biologie?",
        nl: "Wat zijn de uitdagingen in synthetische biologie?"
      },
      options: [
        { en: "Complexity of biological systems, unpredictable interactions, safety concerns, and ethical considerations", es: "Complejidad de sistemas biológicos, interacciones impredecibles, preocupaciones de seguridad y consideraciones éticas", de: "Komplexität biologischer Systeme, unvorhersagbare Wechselwirkungen, Sicherheitsbedenken und ethische Überlegungen", nl: "Complexiteit van biologische systemen, onvoorspelbare interacties, veiligheidszorgen en ethische overwegingen" },
        { en: "Only technical difficulties", es: "Solo dificultades técnicas", de: "Nur technische Schwierigkeiten", nl: "Alleen technische moeilijkheden" },
        { en: "Lack of funding exclusively", es: "Exclusivamente falta de financiamiento", de: "Ausschließlich Mangel an Finanzierung", nl: "Uitsluitend gebrek aan financiering" },
        { en: "Insufficient laboratory equipment only", es: "Solo equipo de laboratorio insuficiente", de: "Nur unzureichende Laborausstattung", nl: "Alleen onvoldoende laboratoriumapparatuur" }
      ],
      correct: 0,
      explanation: {
        en: "Synthetic biology faces challenges including biological complexity, design-build-test-learn cycles, containment of engineered organisms, regulatory frameworks, and public acceptance.",
        es: "La biología sintética enfrenta desafíos incluyendo complejidad biológica, ciclos de diseño-construcción-prueba-aprendizaje, contención de organismos ingenierizados, marcos regulatorios.",
        de: "Synthetische Biologie steht vor Herausforderungen einschließlich biologischer Komplexität, Design-Build-Test-Learn-Zyklen, Eindämmung konstruierter Organismen und regulatorischen Rahmen.",
        nl: "Synthetische biologie staat voor uitdagingen waaronder biologische complexiteit, ontwerp-bouw-test-leer cycli, inperking van geëngineeerde organismen en regulatoire kaders."
      }
    },
    {
      question: {
        en: "What is the future of synthetic biology?",
        es: "¿Cuál es el futuro de la biología sintética?",
        de: "Was ist die Zukunft der synthetischen Biologie?",
        nl: "Wat is de toekomst van synthetische biologie?"
      },
      options: [
        { en: "Automated design tools, programmable organisms, personalized medicine, and sustainable biotechnology", es: "Herramientas de diseño automatizadas, organismos programables, medicina personalizada y biotecnología sostenible", de: "Automatisierte Design-Tools, programmierbare Organismen, personalisierte Medizin und nachhaltige Biotechnologie", nl: "Geautomatiseerde ontwerptools, programmeerbare organismen, gepersonaliseerde geneeskunde en duurzame biotechnologie" },
        { en: "Complete replacement of traditional biology", es: "Reemplazo completo de la biología tradicional", de: "Vollständiger Ersatz traditioneller Biologie", nl: "Volledige vervanging van traditionele biologie" },
        { en: "Only commercial applications", es: "Solo aplicaciones comerciales", de: "Nur kommerzielle Anwendungen", nl: "Alleen commerciële toepassingen" },
        { en: "Elimination of all natural organisms", es: "Eliminación de todos los organismos naturales", de: "Eliminierung aller natürlichen Organismen", nl: "Eliminatie van alle natuurlijke organismen" }
      ],
      correct: 0,
      explanation: {
        en: "The future of synthetic biology involves increasingly sophisticated design tools, programmable living systems, integration with AI and robotics, and solutions to global challenges in health, environment, and sustainability.",
        es: "El futuro de la biología sintética involucra herramientas de diseño cada vez más sofisticadas, sistemas vivos programables, integración con IA y robótica.",
        de: "Die Zukunft der synthetischen Biologie beinhaltet zunehmend anspruchsvolle Design-Tools, programmierbare lebende Systeme, Integration mit KI und Robotik.",
        nl: "De toekomst van synthetische biologie behelst steeds geavanceerdere ontwerptools, programmeerbare levende systemen, integratie met AI en robotica."
      }
    },
    {
      question: {
        en: "What is the mechanism of directed evolution in protein engineering?",
        es: "¿Cuál es el mecanismo de evolución dirigida en ingeniería de proteínas?",
        de: "Was ist der Mechanismus der gerichteten Evolution in der Proteinentwicklung?",
        nl: "Wat is het mechanisme van gerichte evolutie in eiwittechnologie?"
      },
      options: [
        { en: "Iterative cycles of random mutagenesis, selection/screening for desired properties, and amplification of successful variants to evolve proteins with enhanced functions", es: "Ciclos iterativos de mutagénesis aleatoria, selección/cribado de propiedades deseadas y amplificación de variantes exitosas para evolucionar proteínas con funciones mejoradas", de: "Iterative Zyklen zufälliger Mutagenese, Selektion/Screening für gewünschte Eigenschaften und Amplifikation erfolgreicher Varianten zur Evolution von Proteinen", nl: "Iteratieve cycli van willekeurige mutagenese, selectie/screening voor gewenste eigenschappen en amplificatie van succesvolle varianten om eiwitten te evolueren" },
        { en: "Direct rational design without experimental testing", es: "Diseño racional directo sin pruebas experimentales", de: "Direktes rationales Design ohne experimentelle Tests", nl: "Direct rationeel ontwerp zonder experimentele testing" },
        { en: "Computer modeling alone without laboratory work", es: "Solo modelado computacional sin trabajo de laboratorio", de: "Nur Computermodellierung ohne Laborarbeit", nl: "Alleen computermodellering zonder laboratoriumwerk" },
        { en: "Random insertion of amino acids without selection", es: "Inserción aleatoria de aminoácidos sin selección", de: "Zufällige Aminosäure-Insertion ohne Selektion", nl: "Willekeurige insertie van aminozuren zonder selectie" }
      ],
      correct: 0,
      explanation: {
        en: "Directed evolution mimics natural evolution by creating genetic diversity through random mutagenesis, then selecting for improved protein functions through multiple rounds of mutation and selection, enabling the development of proteins with desired characteristics.",
        es: "La evolución dirigida imita la evolución natural creando diversidad genética através de mutagénesis aleatoria, luego seleccionando funciones de proteínas mejoradas através de múltiples rondas.",
        de: "Gerichtete Evolution ahmt natürliche Evolution nach, indem sie genetische Diversität durch zufällige Mutagenese schafft und dann für verbesserte Proteinfunktionen selektiert.",
        nl: "Gerichte evolutie imiteert natuurlijke evolutie door genetische diversiteit te creëren via willekeurige mutagenese, dan selecterend voor verbeterde eiwitfuncties."
      }
    },
    {
      question: {
        en: "What is the principle of optogenetics in neurobiology research?",
        es: "¿Cuál es el principio de la optogenética en la investigación neurobiológica?",
        de: "Was ist das Prinzip der Optogenetik in der neurobiologischen Forschung?",
        nl: "Wat is het principe van optogenetica in neurobiologisch onderzoek?"
      },
      options: [
        { en: "Light-activated proteins like channelrhodopsin and halorhodopsin enable precise temporal and spatial control of neuronal activity using specific wavelengths", es: "Proteínas activadas por luz como canalrodopsina y halorrodopsina permiten control preciso temporal y espacial de actividad neuronal usando longitudes de onda específicas", de: "Lichtaktivierte Proteine wie Channelrhodopsin und Halorhodopsin ermöglichen präzise zeitliche und räumliche Kontrolle neuronaler Aktivität mit spezifischen Wellenlängen", nl: "Licht-geactiveerde eiwitten zoals channelrhodopsin en halorhodopsin maken precieze temporele en ruimtelijke controle van neuronale activiteit mogelijk met specifieke golflengtes" },
        { en: "Electrical stimulation of brain regions only", es: "Solo estimulación eléctrica de regiones cerebrales", de: "Nur elektrische Stimulation von Hirnregionen", nl: "Alleen elektrische stimulatie van hersengebieden" },
        { en: "Chemical inhibition of neurotransmitter release", es: "Inhibición química de liberación de neurotransmisores", de: "Chemische Hemmung der Neurotransmitter-Freisetzung", nl: "Chemische inhibitie van neurotransmitter vrijgave" },
        { en: "Magnetic field modulation of neural circuits", es: "Modulación de circuitos neurales por campo magnético", de: "Magnetfeld-Modulation neuraler Schaltkreise", nl: "Magnetische veld modulatie van neurale circuits" }
      ],
      correct: 0,
      explanation: {
        en: "Optogenetics uses genetically encoded light-sensitive proteins to control specific neurons with millisecond precision, allowing researchers to causally link neural circuit activity to behavior and study brain function with unprecedented temporal and spatial resolution.",
        es: "La optogenética usa proteínas fotosensibles codificadas genéticamente para controlar neuronas específicas con precisión de milisegundo, permitiendo vincular causalmente actividad de circuitos neurales.",
        de: "Optogenetik verwendet genetisch kodierte lichtempfindliche Proteine zur Kontrolle spezifischer Neuronen mit Millisekunden-Präzision, ermöglicht kausale Verknüpfung neuraler Schaltkreisaktivität.",
        nl: "Optogenetica gebruikt genetisch gecodeerde lichtgevoelige eiwitten om specifieke neuronen te controleren met milliseconde precisie, onderzoekers toestaan causaal neurale circuitactiviteit te verbinden."
      }
    },
    {
      question: {
        en: "What is the mechanism of base editing systems like BE3 and ABE?",
        es: "¿Cuál es el mecanismo de sistemas de edición de bases como BE3 y ABE?",
        de: "Was ist der Mechanismus von Base-Editing-Systemen wie BE3 und ABE?",
        nl: "Wat is het mechanisme van base editing-systemen zoals BE3 en ABE?"
      },
      options: [
        { en: "Deactivated Cas9 fused to cytidine or adenine deaminases enables C→T or A→G conversions without double-strand breaks, using single guide RNAs for targeting", es: "Cas9 desactivado fusionado a desaminasas de citidina o adenina permite conversiones C→T o A→G sin roturas de doble cadena, usando ARNs guía únicos para direccionamiento", de: "Deaktiviertes Cas9 fusioniert mit Cytidin- oder Adenin-Deaminasen ermöglicht C→T oder A→G Konversionen ohne Doppelstrangbrüche unter Verwendung von Guide-RNAs", nl: "Gedeactiveerd Cas9 gefuseerd aan cytidine of adenine deaminases maakt C→T of A→G conversies mogelijk zonder dubbelstreng breuken, met guide RNAs voor targeting" },
        { en: "Direct DNA synthesis using polymerase chain reaction", es: "Síntesis directa de ADN usando reacción en cadena de la polimerasa", de: "Direkte DNA-Synthese unter Verwendung der Polymerase-Kettenreaktion", nl: "Directe DNA-synthese met polymerase kettingreactie" },
        { en: "Homologous recombination with large template molecules", es: "Recombinación homóloga con moléculas plantilla grandes", de: "Homologe Rekombination mit großen Template-Molekülen", nl: "Homologe recombinatie met grote template-moleculen" },
        { en: "RNA interference targeting mRNA transcripts", es: "Interferencia de ARN dirigida a transcritos de ARNm", de: "RNA-Interferenz zielend auf mRNA-Transkripte", nl: "RNA-interferentie gericht op mRNA-transcripten" }
      ],
      correct: 0,
      explanation: {
        en: "Base editors use catalytically dead Cas9 (dCas9) fused to DNA base deaminases to directly convert one base to another without creating double-strand breaks, enabling precise single nucleotide changes with minimal off-target effects and indel formation.",
        es: "Los editores de bases usan Cas9 catalíticamente muerto (dCas9) fusionado a desaminasas de bases de ADN para convertir directamente una base a otra sin crear roturas de doble cadena.",
        de: "Base-Editoren verwenden katalytisch totes Cas9 (dCas9) fusioniert mit DNA-Base-Deaminasen zur direkten Konversion einer Base zu einer anderen ohne Doppelstrangbruch-Erzeugung.",
        nl: "Base editors gebruiken katalytisch dood Cas9 (dCas9) gefuseerd aan DNA base deaminases om direct één base naar een andere te converteren zonder dubbelstreng breuken."
      }
    },
    {
      question: {
        en: "What is the concept of chromatin remodeling complexes in gene regulation?",
        es: "¿Cuál es el concepto de complejos remodeladores de cromatina en la regulación génica?",
        de: "Was ist das Konzept der Chromatin-Remodeling-Komplexe in der Genregulation?",
        nl: "Wat is het concept van chromatin remodeling-complexen in genregulatie?"
      },
      options: [
        { en: "ATP-dependent multiprotein complexes that alter nucleosome positioning, composition, and accessibility to regulate transcription factor binding and gene expression", es: "Complejos multiproteicos dependientes de ATP que alteran posicionamiento, composición y accesibilidad de nucleosomas para regular unión de factores de transcripción y expresión génica", de: "ATP-abhängige Multiprotein-Komplexe, die Nukleosom-Positionierung, -Zusammensetzung und -Zugänglichkeit verändern, um Transkriptionsfaktor-Bindung zu regulieren", nl: "ATP-afhankelijke multi-eiwit complexen die nucleosoompositie, -samenstelling en -toegankelijkheid veranderen om transcriptiefactorbinding en genexpressie te reguleren" },
        { en: "Simple histone acetylation enzymes only", es: "Solo enzimas simples de acetilación de histonas", de: "Nur einfache Histon-Acetylierungs-Enzyme", nl: "Alleen eenvoudige histon acetylatie-enzymen" },
        { en: "DNA repair mechanisms without regulatory function", es: "Mecanismos de reparación de ADN sin función reguladora", de: "DNA-Reparaturmechanismen ohne regulatorische Funktion", nl: "DNA-reparatiemechanismen zonder regulatoire functie" },
        { en: "mRNA processing and splicing machinery", es: "Maquinaria de procesamiento y empalme de ARNm", de: "mRNA-Verarbeitungs- und Splicing-Maschinerie", nl: "mRNA-verwerkings- en splicing-machinerie" }
      ],
      correct: 0,
      explanation: {
        en: "Chromatin remodeling complexes like SWI/SNF, ISWI, and CHD families use ATP hydrolysis to slide, eject, or restructure nucleosomes, creating dynamic chromatin landscapes that facilitate or restrict transcription factor access and gene expression programs.",
        es: "Los complejos remodeladores de cromatina como familias SWI/SNF, ISWI y CHD usan hidrólisis de ATP para deslizar, expulsar o reestructurar nucleosomas, creando paisajes dinámicos de cromatina.",
        de: "Chromatin-Remodeling-Komplexe wie SWI/SNF-, ISWI- und CHD-Familien nutzen ATP-Hydrolyse zum Verschieben, Auswerfen oder Umstrukturieren von Nukleosomen.",
        nl: "Chromatin remodeling-complexen zoals SWI/SNF, ISWI en CHD families gebruiken ATP-hydrolyse om nucleosomen te schuiven, uitwerpen of herstructureren."
      }
    }
  ]
};

if (typeof window.addLevel === 'function') {
  window.addLevel('mind-bender/genetics', level10);
}
})();
