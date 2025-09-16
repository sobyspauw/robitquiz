(function() {
  const level6 = {
    name: {
      en: "Advanced Molecular Genetics & Gene Regulation",
      es: "Genética Molecular Avanzada y Regulación Génica",
      de: "Fortgeschrittene Molekulargenetik und Genregulation",
      nl: "Geavanceerde Moleculaire Genetica en Genregulatie"
    },
  questions: [
    {
      question: {
        en: "What is genomics?",
        es: "¿Qué es la genómica?",
        de: "Was ist Genomik?",
        nl: "Wat is genomica?"
      },
      options: [
        { en: "Study of entire genomes including all genes and DNA sequences", es: "Estudio de genomas completos incluyendo todos los genes y secuencias de ADN", de: "Studie ganzer Genome einschließlich aller Gene und DNA-Sequenzen", nl: "Studie van hele genomen inclusief alle genen en DNA-sequenties" },
        { en: "Study of individual genes only", es: "Estudio solo de genes individuales", de: "Studie nur einzelner Gene", nl: "Studie van alleen individuele genen" },
        { en: "Analysis of protein structure", es: "Análisis de estructura de proteínas", de: "Analyse der Proteinstruktur", nl: "Analyse van eiwitstructuur" },
        { en: "Study of cell division", es: "Estudio de división celular", de: "Studie der Zellteilung", nl: "Studie van celdeling" }
      ],
      correct: 0,
      explanation: {
        en: "Genomics is the comprehensive study of an organism's entire genome, including all DNA sequences, genes, and their interactions, using high-throughput technologies.",
        es: "La genómica es el estudio comprensivo del genoma completo de un organismo, incluyendo todas las secuencias de ADN, genes y sus interacciones.",
        de: "Genomik ist die umfassende Studie des gesamten Genoms eines Organismus, einschließlich aller DNA-Sequenzen, Gene und ihrer Interaktionen.",
        nl: "Genomica is de uitgebreide studie van het hele genoom van een organisme, inclusief alle DNA-sequenties, genen en hun interacties."
      }
    },
    {
      question: {
        en: "What is DNA sequencing?",
        es: "¿Qué es la secuenciación de ADN?",
        de: "Was ist DNA-Sequenzierung?",
        nl: "Wat is DNA-sequencing?"
      },
      options: [
        { en: "Determining the exact order of nucleotides in DNA molecules", es: "Determinar el orden exacto de nucleótidos en moléculas de ADN", de: "Bestimmung der exakten Reihenfolge von Nukleotiden in DNA-Molekülen", nl: "Het bepalen van de exacte volgorde van nucleotiden in DNA-moleculen" },
        { en: "Amplifying DNA fragments", es: "Amplificar fragmentos de ADN", de: "Amplifikation von DNA-Fragmenten", nl: "Amplificeren van DNA-fragmenten" },
        { en: "Cutting DNA with restriction enzymes", es: "Cortar ADN con enzimas de restricción", de: "DNA-Schneiden mit Restriktionsenzymen", nl: "DNA knippen met restrictie-enzymen" },
        { en: "Separating DNA by size", es: "Separar ADN por tamaño", de: "DNA-Trennung nach Größe", nl: "DNA scheiden op grootte" }
      ],
      correct: 0,
      explanation: {
        en: "DNA sequencing is the process of determining the precise sequence of nucleotides (A, T, G, C) in a DNA molecule, fundamental to genomics and molecular biology.",
        es: "La secuenciación de ADN es el proceso de determinar la secuencia precisa de nucleótidos (A, T, G, C) en una molécula de ADN.",
        de: "DNA-Sequenzierung ist der Prozess der Bestimmung der präzisen Sequenz von Nukleotiden (A, T, G, C) in einem DNA-Molekül.",
        nl: "DNA-sequencing is het proces van het bepalen van de precieze volgorde van nucleotiden (A, T, G, C) in een DNA-molecuul."
      }
    },
    {
      question: {
        en: "What is next-generation sequencing (NGS)?",
        es: "¿Qué es la secuenciación de nueva generación (NGS)?",
        de: "Was ist Next-Generation-Sequencing (NGS)?",
        nl: "Wat is next-generation sequencing (NGS)?"
      },
      options: [
        { en: "High-throughput DNA sequencing technologies enabling massive parallel sequencing", es: "Tecnologías de secuenciación de ADN de alto rendimiento que permiten secuenciación masivamente paralela", de: "Hochdurchsatz-DNA-Sequenzierungstechnologien, die massiv parallele Sequenzierung ermöglichen", nl: "Hoge-doorvoer DNA-sequencingtechnologieën die massaal parallelle sequencing mogelijk maken" },
        { en: "Traditional Sanger sequencing method", es: "Método tradicional de secuenciación Sanger", de: "Traditionelle Sanger-Sequenzierungsmethode", nl: "Traditionele Sanger-sequencingmethode" },
        { en: "Manual DNA sequencing technique", es: "Técnica manual de secuenciación de ADN", de: "Manuelle DNA-Sequenzierungstechnik", nl: "Handmatige DNA-sequencingtechniek" },
        { en: "Protein sequencing method", es: "Método de secuenciación de proteínas", de: "Proteinsequenzierungsmethode", nl: "Eiwitsequencingmethode" }
      ],
      correct: 0,
      explanation: {
        en: "NGS refers to modern DNA sequencing technologies that can sequence millions of DNA fragments simultaneously, dramatically reducing cost and time compared to traditional methods.",
        es: "NGS se refiere a tecnologías modernas de secuenciación de ADN que pueden secuenciar millones de fragmentos de ADN simultáneamente.",
        de: "NGS bezieht sich auf moderne DNA-Sequenzierungstechnologien, die Millionen von DNA-Fragmenten gleichzeitig sequenzieren können.",
        nl: "NGS verwijst naar moderne DNA-sequencingtechnologieën die miljoenen DNA-fragmenten tegelijkertijd kunnen sequencen."
      }
    },
    {
      question: {
        en: "What is genome-wide association study (GWAS)?",
        es: "¿Qué es un estudio de asociación del genoma completo (GWAS)?",
        de: "Was ist eine genomweite Assoziationsstudie (GWAS)?",
        nl: "Wat is een genoomwijde associatiestudie (GWAS)?"
      },
      options: [
        { en: "Study linking genetic variants across the genome to diseases or traits", es: "Estudio vinculando variantes genéticas a través del genoma con enfermedades o rasgos", de: "Studie, die genetische Varianten im gesamten Genom mit Krankheiten oder Eigenschaften verknüpft", nl: "Studie die genetische varianten door het hele genoom koppelt aan ziekten of eigenschappen" },
        { en: "Analysis of single gene mutations", es: "Análisis de mutaciones de un solo gen", de: "Analyse einzelner Genmutationen", nl: "Analyse van enkelvoudige genmutaties" },
        { en: "Study of protein interactions", es: "Estudio de interacciones de proteínas", de: "Studie von Proteininteraktionen", nl: "Studie van eiwitinteracties" },
        { en: "Chromosome counting method", es: "Método de conteo de cromosomas", de: "Chromosomenzählmethode", nl: "Chromosoomtelmethode" }
      ],
      correct: 0,
      explanation: {
        en: "GWAS examines genetic variants (SNPs) across the entire genome in large populations to identify associations with diseases, traits, or drug responses.",
        es: "GWAS examina variantes genéticas (SNPs) a través del genoma completo en grandes poblaciones para identificar asociaciones con enfermedades o rasgos.",
        de: "GWAS untersucht genetische Varianten (SNPs) im gesamten Genom in großen Populationen, um Assoziationen mit Krankheiten, Eigenschaften oder Arzneimittelreaktionen zu identifizieren.",
        nl: "GWAS onderzoekt genetische varianten (SNPs) door het hele genoom in grote populaties om associaties met ziekten, eigenschappen of medicijnreacties te identificeren."
      }
    },
    {
      question: {
        en: "What are single nucleotide polymorphisms (SNPs)?",
        es: "¿Qué son los polimorfismos de nucleótido simple (SNPs)?",
        de: "Was sind Einzelnukleotid-Polymorphismen (SNPs)?",
        nl: "Wat zijn enkelvoudige nucleotidepolymorfismen (SNPs)?"
      },
      options: [
        { en: "DNA sequence variations where single nucleotides differ between individuals", es: "Variaciones en la secuencia de ADN donde nucleótidos individuales difieren entre individuos", de: "DNA-Sequenzvariationen, bei denen einzelne Nukleotide zwischen Individuen unterschiedlich sind", nl: "DNA-sequentievariaties waarbij enkele nucleotiden verschillen tussen individuen" },
        { en: "Large chromosomal deletions", es: "Deleciones cromosómicas grandes", de: "Große chromosomale Deletionen", nl: "Grote chromosomale deleties" },
        { en: "Gene duplication events", es: "Eventos de duplicación génica", de: "Genduplikationsereignisse", nl: "Genduplicatiegebeurtenissen" },
        { en: "Protein structure changes", es: "Cambios en estructura de proteínas", de: "Änderungen der Proteinstruktur", nl: "Eiwitstructuurveranderingen" }
      ],
      correct: 0,
      explanation: {
        en: "SNPs are the most common type of genetic variation among people, occurring when a single nucleotide is substituted for another at the same position in the DNA sequence.",
        es: "Los SNPs son el tipo más común de variación genética entre personas, ocurriendo cuando un nucleótido individual es sustituido por otro.",
        de: "SNPs sind die häufigste Art genetischer Variation zwischen Menschen, die auftritt, wenn ein einzelnes Nukleotid durch ein anderes an derselben Position ersetzt wird.",
        nl: "SNPs zijn het meest voorkomende type genetische variatie tussen mensen, optredend wanneer één nucleotide wordt vervangen door een ander op dezelfde positie."
      }
    },
    {
      question: {
        en: "What is copy number variation (CNV)?",
        es: "¿Qué es la variación del número de copias (CNV)?",
        de: "Was ist Kopienzahlvariation (CNV)?",
        nl: "Wat is kopieaantalvariatie (CNV)?"
      },
      options: [
        { en: "Segments of DNA with variable copy numbers between individuals", es: "Segmentos de ADN con números variables de copias entre individuos", de: "DNA-Segmente mit variablen Kopienzahlen zwischen Individuen", nl: "DNA-segmenten met variabele kopieaantallen tussen individuen" },
        { en: "Point mutations in single nucleotides", es: "Mutaciones puntuales en nucleótidos individuales", de: "Punktmutationen in einzelnen Nukleotiden", nl: "Puntmutaties in enkele nucleotiden" },
        { en: "Changes in protein folding", es: "Cambios en plegamiento de proteínas", de: "Änderungen in der Proteinfaltung", nl: "Veranderingen in eiwitvouwing" },
        { en: "Altered gene expression patterns", es: "Patrones alterados de expresión génica", de: "Veränderte Genexpressionsmuster", nl: "Veranderde genexpressiepatronen" }
      ],
      correct: 0,
      explanation: {
        en: "CNVs are DNA segments of 1kb or larger that vary in copy number between individuals, potentially affecting gene expression and contributing to disease susceptibility.",
        es: "Los CNVs son segmentos de ADN de 1kb o más que varían en número de copias entre individuos, potencialmente afectando la expresión génica.",
        de: "CNVs sind DNA-Segmente von 1kb oder größer, die in der Kopienzahl zwischen Individuen variieren, möglicherweise die Genexpression beeinflussen.",
        nl: "CNVs zijn DNA-segmenten van 1kb of groter die variëren in kopieaantal tussen individuen, mogelijk genexpressie beïnvloedend."
      }
    },
    {
      question: {
        en: "What is functional genomics?",
        es: "¿Qué es la genómica funcional?",
        de: "Was ist funktionale Genomik?",
        nl: "Wat is functionele genomica?"
      },
      options: [
        { en: "Study of gene and protein functions and interactions within genomes", es: "Estudio de funciones e interacciones de genes y proteínas dentro de genomas", de: "Studie von Gen- und Proteinfunktionen und -interaktionen innerhalb von Genomen", nl: "Studie van gen- en eiwitfuncties en interacties binnen genomen" },
        { en: "DNA sequence determination only", es: "Solo determinación de secuencia de ADN", de: "Nur DNA-Sequenzbestimmung", nl: "Alleen DNA-sequentiebepaling" },
        { en: "Chromosome counting methods", es: "Métodos de conteo de cromosomas", de: "Chromosomenzählmethoden", nl: "Chromosoomtelmethoden" },
        { en: "Cell division analysis", es: "Análisis de división celular", de: "Zellteilungsanalyse", nl: "Celdelingsanalyse" }
      ],
      correct: 0,
      explanation: {
        en: "Functional genomics focuses on understanding how genes and their products function, interact, and contribute to biological processes and phenotypes.",
        es: "La genómica funcional se enfoca en entender cómo los genes y sus productos funcionan, interactúan y contribuyen a procesos biológicos y fenotipos.",
        de: "Funktionale Genomik konzentriert sich auf das Verständnis, wie Gene und ihre Produkte funktionieren, interagieren und zu biologischen Prozessen beitragen.",
        nl: "Functionele genomica richt zich op het begrijpen hoe genen en hun producten functioneren, interacteren en bijdragen aan biologische processen."
      }
    },
    {
      question: {
        en: "What is RNA sequencing (RNA-seq)?",
        es: "¿Qué es la secuenciación de ARN (RNA-seq)?",
        de: "Was ist RNA-Sequenzierung (RNA-seq)?",
        nl: "Wat is RNA-sequencing (RNA-seq)?"
      },
      options: [
        { en: "Technique to sequence and quantify all RNA molecules in cells", es: "Técnica para secuenciar y cuantificar todas las moléculas de ARN en células", de: "Technik zur Sequenzierung und Quantifizierung aller RNA-Moleküle in Zellen", nl: "Techniek om alle RNA-moleculen in cellen te sequencen en kwantificeren" },
        { en: "Method for DNA amplification", es: "Método para amplificación de ADN", de: "Methode zur DNA-Amplifikation", nl: "Methode voor DNA-amplificatie" },
        { en: "Protein sequencing approach", es: "Enfoque de secuenciación de proteínas", de: "Proteinsequenzierungsansatz", nl: "Eiwitsequencingbenadering" },
        { en: "Chromosome visualization technique", es: "Técnica de visualización de cromosomas", de: "Chromosomenvisualisierungstechnik", nl: "Chromosoomvisualisatietechniek" }
      ],
      correct: 0,
      explanation: {
        en: "RNA-seq is a powerful technique that sequences all RNA molecules in a sample, allowing comprehensive analysis of gene expression, transcript isoforms, and novel RNA species.",
        es: "RNA-seq es una técnica poderosa que secuencia todas las moléculas de ARN en una muestra, permitiendo análisis comprensivo de expresión génica.",
        de: "RNA-seq ist eine mächtige Technik, die alle RNA-Moleküle in einer Probe sequenziert und umfassende Analyse der Genexpression ermöglicht.",
        nl: "RNA-seq is een krachtige techniek die alle RNA-moleculen in een monster sequenct, uitgebreide analyse van genexpressie mogelijk makend."
      }
    },
    {
      question: {
        en: "What is ChIP-seq?",
        es: "¿Qué es ChIP-seq?",
        de: "Was ist ChIP-seq?",
        nl: "Wat is ChIP-seq?"
      },
      options: [
        { en: "Technique combining chromatin immunoprecipitation with sequencing to map protein-DNA interactions", es: "Técnica combinando inmunoprecipitación de cromatina con secuenciación para mapear interacciones proteína-ADN", de: "Technik, die Chromatin-Immunprezipitation mit Sequenzierung kombiniert, um Protein-DNA-Interaktionen zu kartieren", nl: "Techniek die chromatine-immunoprecipitatie combineert met sequencing om eiwit-DNA-interacties in kaart te brengen" },
        { en: "RNA expression analysis method", es: "Método de análisis de expresión de ARN", de: "RNA-Expressionsanalysemethode", nl: "RNA-expressiemethode" },
        { en: "DNA amplification technique", es: "Técnica de amplificación de ADN", de: "DNA-Amplifikationstechnik", nl: "DNA-amplificatietechniek" },
        { en: "Protein purification protocol", es: "Protocolo de purificación de proteínas", de: "Proteinreinigungsprotokoll", nl: "Eiwitpurificatieprotocol" }
      ],
      correct: 0,
      explanation: {
        en: "ChIP-seq combines chromatin immunoprecipitation with DNA sequencing to identify genome-wide binding sites of transcription factors and histone modifications.",
        es: "ChIP-seq combina inmunoprecipitación de cromatina con secuenciación de ADN para identificar sitios de unión de factores de transcripción en todo el genoma.",
        de: "ChIP-seq kombiniert Chromatin-Immunprezipitation mit DNA-Sequenzierung, um genomweite Bindungsstellen von Transkriptionsfaktoren zu identifizieren.",
        nl: "ChIP-seq combineert chromatine-immunoprecipitatie met DNA-sequencing om genoomwijde bindingsplaatsen van transcriptiefactoren te identificeren."
      }
    },
    {
      question: {
        en: "What is CRISPR-Cas technology?",
        es: "¿Qué es la tecnología CRISPR-Cas?",
        de: "Was ist CRISPR-Cas-Technologie?",
        nl: "Wat is CRISPR-Cas-technologie?"
      },
      options: [
        { en: "Programmable genome editing system using guide RNAs and nucleases", es: "Sistema de edición del genoma programable usando ARNs guía y nucleasas", de: "Programmierbares Genom-Editierungssystem mit Guide-RNAs und Nukleasen", nl: "Programmeerbaar genoombewerking systeem met gids-RNA's en nucleasen" },
        { en: "DNA sequencing platform", es: "Plataforma de secuenciación de ADN", de: "DNA-Sequenzierungsplattform", nl: "DNA-sequencingplatform" },
        { en: "Protein expression system", es: "Sistema de expresión de proteínas", de: "Proteinexpressionssystem", nl: "Eiwitexpressiesysteem" },
        { en: "Cell culture methodology", es: "Metodología de cultivo celular", de: "Zellkulturmethodologie", nl: "Celkweekmethodologie" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPR-Cas is a revolutionary genome editing technology that allows precise modification of DNA sequences using programmable guide RNAs to direct nuclease activity.",
        es: "CRISPR-Cas es una tecnología revolucionaria de edición del genoma que permite modificación precisa de secuencias de ADN usando ARNs guía programables.",
        de: "CRISPR-Cas ist eine revolutionäre Genom-Editierungstechnologie, die präzise Modifikation von DNA-Sequenzen mit programmierbaren Guide-RNAs ermöglicht.",
        nl: "CRISPR-Cas is een revolutionaire genoombewerking technologie die precieze modificatie van DNA-sequenties mogelijk maakt met programmeerbare gids-RNA's."
      }
    },
    {
      question: {
        en: "What is pharmacogenomics?",
        es: "¿Qué es la farmacogenómica?",
        de: "Was ist Pharmakogenomik?",
        nl: "Wat is farmacogenomica?"
      },
      options: [
        { en: "Study of how genetic variations affect drug responses", es: "Estudio de cómo las variaciones genéticas afectan las respuestas a medicamentos", de: "Studie, wie genetische Variationen Arzneimittelreaktionen beeinflussen", nl: "Studie van hoe genetische variaties medicijnreacties beïnvloeden" },
        { en: "Development of new pharmaceuticals", es: "Desarrollo de nuevos farmacéuticos", de: "Entwicklung neuer Pharmazeutika", nl: "Ontwikkeling van nieuwe farmaceutica" },
        { en: "Analysis of drug manufacturing processes", es: "Análisis de procesos de fabricación de medicamentos", de: "Analyse von Arzneimittelherstellungsprozessen", nl: "Analyse van medicijnproductieprocessen" },
        { en: "Study of drug delivery systems", es: "Estudio de sistemas de entrega de medicamentos", de: "Studie von Arzneimittel-Verabreichungssystemen", nl: "Studie van medicijnafgiftesystemen" }
      ],
      correct: 0,
      explanation: {
        en: "Pharmacogenomics studies how genetic variations influence individual responses to drugs, enabling personalized medicine and optimized treatment strategies.",
        es: "La farmacogenómica estudia cómo las variaciones genéticas influyen en las respuestas individuales a los medicamentos, permitiendo medicina personalizada.",
        de: "Pharmakogenomik untersucht, wie genetische Variationen individuelle Arzneimittelreaktionen beeinflussen, um personalisierte Medizin zu ermöglichen.",
        nl: "Farmacogenomica bestudeert hoe genetische variaties individuele medicijnreacties beïnvloeden, gepersonaliseerde geneeskunde mogelijk makend."
      }
    },
    {
      question: {
        en: "What is precision medicine?",
        es: "¿Qué es la medicina de precisión?",
        de: "Was ist Präzisionsmedizin?",
        nl: "Wat is precisiemedicijn?"
      },
      options: [
        { en: "Medical approach tailored to individual genetic, environmental, and lifestyle factors", es: "Enfoque médico adaptado a factores genéticos, ambientales y de estilo de vida individuales", de: "Medizinischer Ansatz, der auf individuelle genetische, umwelt- und lifestyle-Faktoren zugeschnitten ist", nl: "Medische benadering afgestemd op individuele genetische, omgevings- en levensstijlfactoren" },
        { en: "One-size-fits-all treatment approach", es: "Enfoque de tratamiento de talla única", de: "Einheitsgröße-Behandlungsansatz", de: "Een-maat-past-alle behandelbenadering" },
        { en: "Generic drug prescription method", es: "Método de prescripción de medicamentos genéricos", de: "Generische Medikamentenverschreibungsmethode", nl: "Generieke medicijnvoorschrijfmethode" },
        { en: "Traditional diagnostic approach", es: "Enfoque diagnóstico tradicional", de: "Traditioneller Diagnoseansatz", nl: "Traditionele diagnostische benadering" }
      ],
      correct: 0,
      explanation: {
        en: "Precision medicine uses genetic, environmental, and lifestyle information to customize healthcare decisions and treatments for individual patients.",
        es: "La medicina de precisión usa información genética, ambiental y de estilo de vida para personalizar decisiones de atención médica para pacientes individuales.",
        de: "Präzisionsmedizin nutzt genetische, umwelt- und Lifestyle-Informationen, um Gesundheitsentscheidungen für individuelle Patienten anzupassen.",
        nl: "Precisiemedicijn gebruikt genetische, omgevings- en levensstijlinformatie om zorgbeslissingen voor individuele patiënten aan te passen."
      }
    },
    {
      question: {
        en: "What is gene therapy?",
        es: "¿Qué es la terapia génica?",
        de: "Was ist Gentherapie?",
        nl: "Wat is gentherapie?"
      },
      options: [
        { en: "Introduction of genetic material into patient cells to treat disease", es: "Introducción de material genético en células de pacientes para tratar enfermedades", de: "Einführung genetischen Materials in Patientenzellen zur Krankheitsbehandlung", nl: "Introductie van genetisch materiaal in patiënten cellen om ziekten te behandelen" },
        { en: "Traditional pharmaceutical treatment", es: "Tratamiento farmacéutico tradicional", de: "Traditionelle pharmazeutische Behandlung", nl: "Traditionele farmaceutische behandeling" },
        { en: "Surgical intervention method", es: "Método de intervención quirúrgica", de: "Chirurgische Interventionsmethode", nl: "Chirurgische interventiemethode" },
        { en: "Physical therapy technique", es: "Técnica de terapia física", de: "Physiotherapie-Technik", nl: "Fysiotherapietechniek" }
      ],
      correct: 0,
      explanation: {
        en: "Gene therapy involves introducing genetic material (genes, gene fragments, or gene-editing tools) into patient cells to correct defective genes or provide new cellular functions.",
        es: "La terapia génica involucra introducir material genético en células de pacientes para corregir genes defectuosos o proporcionar nuevas funciones celulares.",
        de: "Gentherapie beinhaltet die Einführung genetischen Materials in Patientenzellen, um defekte Gene zu korrigieren oder neue zelluläre Funktionen bereitzustellen.",
        nl: "Gentherapie behelst het introduceren van genetisch materiaal in patiënten cellen om defecte genen te corrigeren of nieuwe cellulaire functies te bieden."
      }
    },
    {
      question: {
        en: "What are induced pluripotent stem cells (iPSCs)?",
        es: "¿Qué son las células madre pluripotentes inducidas (iPSCs)?",
        de: "Was sind induzierte pluripotente Stammzellen (iPSCs)?",
        nl: "Wat zijn geïnduceerde pluripotente stamcellen (iPSCs)?"
      },
      options: [
        { en: "Adult cells reprogrammed to embryonic stem cell-like state", es: "Células adultas reprogramadas a estado similar a células madre embrionarias", de: "Erwachsene Zellen, die zu embryonalen Stammzell-ähnlichem Zustand umprogrammiert wurden", nl: "Volwassen cellen geherprogrammeerd naar embryonale stamcel-achtige toestand" },
        { en: "Naturally occurring stem cells", es: "Células madre que ocurren naturalmente", de: "Natürlich vorkommende Stammzellen", nl: "Natuurlijk voorkomende stamcellen" },
        { en: "Cancer stem cells", es: "Células madre cancerosas", de: "Krebs-Stammzellen", nl: "Kanker stamcellen" },
        { en: "Differentiated somatic cells", es: "Células somáticas diferenciadas", de: "Differenzierte somatische Zellen", nl: "Gedifferentieerde somatische cellen" }
      ],
      correct: 0,
      explanation: {
        en: "iPSCs are adult somatic cells that have been genetically reprogrammed to an embryonic stem cell-like state, capable of differentiating into any cell type.",
        es: "Las iPSCs son células somáticas adultas que han sido genéticamente reprogramadas a un estado similar a células madre embrionarias.",
        de: "iPSCs sind erwachsene somatische Zellen, die genetisch zu einem embryonalen Stammzell-ähnlichen Zustand umprogrammiert wurden.",
        nl: "iPSCs zijn volwassen somatische cellen die genetisch zijn geherprogrammeerd naar een embryonale stamcel-achtige toestand."
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
        { en: "Engineering approach to design and construct new biological systems", es: "Enfoque de ingeniería para diseñar y construir nuevos sistemas biológicos", de: "Ingenieurstechnischer Ansatz zur Gestaltung und Konstruktion neuer biologischer Systeme", nl: "Engineeringbenadering om nieuwe biologische systemen te ontwerpen en bouwen" },
        { en: "Study of natural biological processes only", es: "Estudio solo de procesos biológicos naturales", de: "Studie nur natürlicher biologischer Prozesse", nl: "Studie van alleen natuurlijke biologische processen" },
        { en: "Traditional biochemistry methods", es: "Métodos tradicionales de bioquímica", de: "Traditionelle Biochemie-Methoden", nl: "Traditionele biochemie methoden" },
        { en: "Observational life science research", es: "Investigación observacional de ciencias de la vida", de: "Beobachtende Lebenswissenschaftsforschung", nl: "Observationeel levenswetenschappenonderzoek" }
      ],
      correct: 0,
      explanation: {
        en: "Synthetic biology applies engineering principles to biology, designing and constructing new biological parts, devices, and systems or redesigning existing natural systems.",
        es: "La biología sintética aplica principios de ingeniería a la biología, diseñando y construyendo nuevas partes, dispositivos y sistemas biológicos.",
        de: "Synthetische Biologie wendet Ingenieursprinzipien auf die Biologie an, entwirft und konstruiert neue biologische Teile, Geräte und Systeme.",
        nl: "Synthetische biologie past engineeringprincipes toe op biologie, nieuwe biologische onderdelen, apparaten en systemen ontwerpend en bouwend."
      }
    },
    {
      question: {
        en: "What is metagenomics?",
        es: "¿Qué es la metagenómica?",
        de: "Was ist Metagenomik?",
        nl: "Wat is metagenomics?"
      },
      options: [
        { en: "Study of genetic material from environmental microbial communities", es: "Estudio de material genético de comunidades microbianas ambientales", de: "Studie genetischen Materials aus Umwelt-Mikrobengemeinschaften", nl: "Studie van genetisch materiaal uit omgevingsmicrobiële gemeenschappen" },
        { en: "Analysis of individual genome sequences", es: "Análisis de secuencias de genomas individuales", de: "Analyse individueller Genomsequenzen", nl: "Analyse van individuele genoomsequenties" },
        { en: "Study of protein interactions only", es: "Estudio solo de interacciones de proteínas", de: "Studie nur von Proteininteraktionen", nl: "Studie van alleen eiwitinteracties" },
        { en: "Traditional microbiology methods", es: "Métodos tradicionales de microbiología", de: "Traditionelle Mikrobiologie-Methoden", nl: "Traditionele microbiologie methoden" }
      ],
      correct: 0,
      explanation: {
        en: "Metagenomics analyzes genetic material recovered directly from environmental samples, studying entire microbial communities without culturing individual organisms.",
        es: "La metagenómica analiza material genético recuperado directamente de muestras ambientales, estudiando comunidades microbianas completas sin cultivar organismos individuales.",
        de: "Metagenomik analysiert genetisches Material, das direkt aus Umweltproben gewonnen wird, und untersucht ganze Mikrobengemeinschaften ohne Kultivierung.",
        nl: "Metagenomics analyseert genetisch materiaal direct verkregen uit omgevingsmonsters, hele microbiële gemeenschappen bestuderend zonder individuele organismen te kweken."
      }
    },
    {
      question: {
        en: "What is proteomics?",
        es: "¿Qué es la proteómica?",
        de: "Was ist Proteomik?",
        nl: "Wat is proteomics?"
      },
      options: [
        { en: "Large-scale study of proteins and their functions", es: "Estudio a gran escala de proteínas y sus funciones", de: "Großangelegte Studie von Proteinen und ihren Funktionen", nl: "Grootschalige studie van eiwitten en hun functies" },
        { en: "DNA sequencing methodology", es: "Metodología de secuenciación de ADN", de: "DNA-Sequenzierungsmethodologie", nl: "DNA-sequencingmethodologie" },
        { en: "Study of individual genes only", es: "Estudio solo de genes individuales", de: "Studie nur einzelner Gene", nl: "Studie van alleen individuele genen" },
        { en: "Chromosome analysis technique", es: "Técnica de análisis de cromosomas", de: "Chromosomenanalysetechnik", nl: "Chromosoomanalysetechniek" }
      ],
      correct: 0,
      explanation: {
        en: "Proteomics is the comprehensive study of the entire set of proteins produced by an organism, including their structures, functions, and interactions.",
        es: "La proteómica es el estudio comprensivo del conjunto completo de proteínas producidas por un organismo, incluyendo sus estructuras, funciones e interacciones.",
        de: "Proteomik ist die umfassende Studie des gesamten Satzes von Proteinen, die von einem Organismus produziert werden, einschließlich ihrer Strukturen und Funktionen.",
        nl: "Proteomics is de uitgebreide studie van de complete set eiwitten geproduceerd door een organisme, inclusief hun structuren, functies en interacties."
      }
    },
    {
      question: {
        en: "What is metabolomics?",
        es: "¿Qué es la metabolómica?",
        de: "Was ist Metabolomik?",
        nl: "Wat is metabolomics?"
      },
      options: [
        { en: "Study of all metabolites in biological systems", es: "Estudio de todos los metabolitos en sistemas biológicos", de: "Studie aller Metaboliten in biologischen Systemen", nl: "Studie van alle metabolieten in biologische systemen" },
        { en: "Analysis of gene expression patterns", es: "Análisis de patrones de expresión génica", de: "Analyse von Genexpressionsmustern", nl: "Analyse van genexpressiepatronen" },
        { en: "Protein structure determination", es: "Determinación de estructura de proteínas", de: "Proteinstrukturbestimmung", nl: "Eiwitstructuurbepaling" },
        { en: "DNA modification analysis", es: "Análisis de modificaciones del ADN", de: "DNA-Modifikationsanalyse", nl: "DNA-modificatieanalyse" }
      ],
      correct: 0,
      explanation: {
        en: "Metabolomics studies the complete set of small molecule metabolites in biological samples, providing insights into cellular processes and disease states.",
        es: "La metabolómica estudia el conjunto completo de metabolitos de moléculas pequeñas en muestras biológicas, proporcionando información sobre procesos celulares.",
        de: "Metabolomik untersucht den vollständigen Satz kleiner Molekül-Metaboliten in biologischen Proben und gibt Einblicke in zelluläre Prozesse.",
        nl: "Metabolomics bestudeert de complete set kleine molecuul-metabolieten in biologische monsters, inzichten gevend in cellulaire processen."
      }
    },
    {
      question: {
        en: "What are organoids?",
        es: "¿Qué son los organoides?",
        de: "Was sind Organoide?",
        nl: "Wat zijn organoïden?"
      },
      options: [
        { en: "3D tissue cultures that mimic organ structure and function", es: "Cultivos tisulares 3D que imitan la estructura y función de órganos", de: "3D-Gewebekulturen, die Organstruktur und -funktion nachahmen", nl: "3D-weefselkweken die orgaanstructuur en -functie nabootsen" },
        { en: "2D cell culture systems", es: "Sistemas de cultivo celular 2D", de: "2D-Zellkultursysteme", nl: "2D-celkweeksystemen" },
        { en: "Artificial organ implants", es: "Implantes de órganos artificiales", de: "Künstliche Organersatz", nl: "Kunstmatige orgaanimplantaten" },
        { en: "Single cell analysis methods", es: "Métodos de análisis de célula única", de: "Einzelzellanalysemethoden", nl: "Enkele cel analysemethoden" }
      ],
      correct: 0,
      explanation: {
        en: "Organoids are 3D multicellular tissue cultures derived from stem cells that self-organize to recapitulate key structural and functional aspects of organs.",
        es: "Los organoides son cultivos tisulares multicelulares 3D derivados de células madre que se auto-organizan para recapitular aspectos estructurales y funcionales clave.",
        de: "Organoide sind 3D-multizelluläre Gewebekulturen aus Stammzellen, die sich selbst organisieren, um wichtige strukturelle und funktionale Aspekte zu rekapitulieren.",
        nl: "Organoïden zijn 3D-multicellulaire weefselkweken afgeleid van stamcellen die zichzelf organiseren om belangrijke structurele en functionele aspecten te recapituleren."
      }
    },
    {
      question: {
        en: "What is single-cell sequencing?",
        es: "¿Qué es la secuenciación de célula única?",
        de: "Was ist Einzelzell-Sequenzierung?",
        nl: "Wat is enkele cel sequencing?"
      },
      options: [
        { en: "Sequencing technique analyzing individual cells rather than bulk samples", es: "Técnica de secuenciación analizando células individuales en lugar de muestras masivas", de: "Sequenzierungstechnik, die einzelne Zellen statt Bulk-Proben analysiert", nl: "Sequencingtechniek die individuele cellen analyseert in plaats van bulk monsters" },
        { en: "Traditional population-level sequencing", es: "Secuenciación tradicional a nivel poblacional", de: "Traditionelle Sequenzierung auf Populationsebene", nl: "Traditionele populatie-niveau sequencing" },
        { en: "Protein sequencing method", es: "Método de secuenciación de proteínas", de: "Proteinsequenzierungsmethode", nl: "Eiwitsequencingmethode" },
        { en: "Chromosome analysis technique", es: "Técnica de análisis de cromosomas", de: "Chromosomenanalysetechnik", nl: "Chromosoomanalysetechniek" }
      ],
      correct: 0,
      explanation: {
        en: "Single-cell sequencing analyzes nucleic acids from individual cells, revealing cellular heterogeneity and rare cell types that are masked in bulk sequencing.",
        es: "La secuenciación de célula única analiza ácidos nucleicos de células individuales, revelando heterogeneidad celular y tipos celulares raros.",
        de: "Einzelzell-Sequenzierung analysiert Nukleinsäuren aus einzelnen Zellen und enthüllt zelluläre Heterogenität und seltene Zelltypen.",
        nl: "Enkele cel sequencing analyseert nucleinezuren van individuele cellen, cellulaire heterogeniteit en zeldzame celtypen onthullend."
      }
    },
    {
      question: {
        en: "What is liquid biopsy?",
        es: "¿Qué es la biopsia líquida?",
        de: "Was ist flüssige Biopsie?",
        nl: "Wat is vloeibare biopsie?"
      },
      options: [
        { en: "Detection of circulating tumor DNA and cells in blood samples", es: "Detección de ADN tumoral circulante y células en muestras de sangre", de: "Nachweis zirkulierender Tumor-DNA und -Zellen in Blutproben", nl: "Detectie van circulerend tumor-DNA en cellen in bloedmonsters" },
        { en: "Traditional tissue biopsy method", es: "Método tradicional de biopsia tisular", de: "Traditionelle Gewebebiopsiemethode", nl: "Traditionele weefselbiopsie methode" },
        { en: "Surgical removal of organs", es: "Extracción quirúrgica de órganos", de: "Chirurgische Organentfernung", nl: "Chirurgische orgaanverwijdering" },
        { en: "Imaging-based diagnosis only", es: "Diagnóstico basado solo en imágenes", de: "Nur bildgebungsbasierte Diagnose", nl: "Alleen beeldvormingsgebaseerde diagnose" }
      ],
      correct: 0,
      explanation: {
        en: "Liquid biopsy is a minimally invasive diagnostic approach that detects circulating tumor DNA, RNA, or cells in blood or other body fluids to diagnose and monitor cancer.",
        es: "La biopsia líquida es un enfoque diagnóstico mínimamente invasivo que detecta ADN, ARN o células tumorales circulantes en sangre u otros fluidos corporales.",
        de: "Flüssige Biopsie ist ein minimal-invasiver diagnostischer Ansatz, der zirkulierende Tumor-DNA, -RNA oder -Zellen in Blut oder anderen Körperflüssigkeiten nachweist.",
        nl: "Vloeibare biopsie is een minimaal invasieve diagnostische benadering die circulerend tumor-DNA, RNA of cellen detecteert in bloed of andere lichaamsvloeistoffen."
      }
    },
    {
      question: {
        en: "What is biobanking?",
        es: "¿Qué es la biobancos?",
        de: "Was ist Biobanking?",
        nl: "Wat is biobanking?"
      },
      options: [
        { en: "Systematic collection, processing, and storage of biological samples for research", es: "Colección, procesamiento y almacenamiento sistemático de muestras biológicas para investigación", de: "Systematische Sammlung, Verarbeitung und Lagerung biologischer Proben für die Forschung", nl: "Systematische verzameling, verwerking en opslag van biologische monsters voor onderzoek" },
        { en: "Financial investment in biotechnology", es: "Inversión financiera en biotecnología", de: "Finanzielle Investition in Biotechnologie", nl: "Financiële investering in biotechnologie" },
        { en: "Digital storage of genetic data only", es: "Almacenamiento digital solo de datos genéticos", de: "Nur digitale Speicherung genetischer Daten", nl: "Alleen digitale opslag van genetische data" },
        { en: "Laboratory equipment rental", es: "Alquiler de equipos de laboratorio", de: "Laborausrüstungsverleih", nl: "Laboratoriumapparatuurverhuur" }
      ],
      correct: 0,
      explanation: {
        en: "Biobanking involves the systematic collection, processing, storage, and distribution of biological samples and associated data for scientific research and clinical applications.",
        es: "Los biobancos involucran la colección, procesamiento, almacenamiento y distribución sistemática de muestras biológicas y datos asociados para investigación científica.",
        de: "Biobanking umfasst die systematische Sammlung, Verarbeitung, Lagerung und Verteilung biologischer Proben und zugehöriger Daten für wissenschaftliche Forschung.",
        nl: "Biobanking behelst de systematische verzameling, verwerking, opslag en distributie van biologische monsters en geassocieerde data voor wetenschappelijk onderzoek."
      }
    },
    {
      question: {
        en: "What is comparative genomics?",
        es: "¿Qué es la genómica comparativa?",
        de: "Was ist vergleichende Genomik?",
        nl: "Wat is vergelijkende genomica?"
      },
      options: [
        { en: "Analysis comparing genome sequences and structures across species", es: "Análisis comparando secuencias y estructuras de genomas entre especies", de: "Analyse, die Genomsequenzen und -strukturen zwischen Arten vergleicht", nl: "Analyse die genoomsequenties en -structuren tussen soorten vergelijkt" },
        { en: "Study of individual genome variations", es: "Estudio de variaciones de genomas individuales", de: "Studie individueller Genomvariationen", nl: "Studie van individuele genoomvariaties" },
        { en: "Analysis of protein structures only", es: "Análisis solo de estructuras de proteínas", de: "Nur Analyse von Proteinstrukturen", nl: "Alleen analyse van eiwitstructuren" },
        { en: "Single species genome analysis", es: "Análisis de genoma de una sola especie", de: "Genomanalyse einer einzigen Art", nl: "Enkele soort genoomanalyse" }
      ],
      correct: 0,
      explanation: {
        en: "Comparative genomics compares genome sequences, structures, and functions across different species to understand evolutionary relationships and identify conserved elements.",
        es: "La genómica comparativa compara secuencias, estructuras y funciones de genomas entre diferentes especies para entender relaciones evolutivas.",
        de: "Vergleichende Genomik vergleicht Genomsequenzen, -strukturen und -funktionen zwischen verschiedenen Arten, um evolutionäre Beziehungen zu verstehen.",
        nl: "Vergelijkende genomica vergelijkt genoomsequenties, -structuren en -functies tussen verschillende soorten om evolutionaire relaties te begrijpen."
      }
    },
    {
      question: {
        en: "What is structural variation in genomes?",
        es: "¿Qué es la variación estructural en genomas?",
        de: "Was ist strukturelle Variation in Genomen?",
        nl: "Wat is structurele variatie in genomen?"
      },
      options: [
        { en: "Large-scale genomic alterations including deletions, duplications, and inversions", es: "Alteraciones genómicas a gran escala incluyendo deleciones, duplicaciones e inversiones", de: "Großangelegte genomische Veränderungen einschließlich Deletionen, Duplikationen und Inversionen", nl: "Grootschalige genomische veranderingen inclusief deleties, duplicaties en inversies" },
        { en: "Single nucleotide changes only", es: "Solo cambios de nucleótidos individuales", de: "Nur einzelne Nukleotidänderungen", nl: "Alleen enkele nucleotideveranderingen" },
        { en: "Protein sequence modifications", es: "Modificaciones de secuencias de proteínas", de: "Proteinsequenzmodifikationen", nl: "Eiwitsequentiemodificaties" },
        { en: "Gene expression changes", es: "Cambios en expresión génica", de: "Genexpressionsveränderungen", nl: "Genexpressieveranderingen" }
      ],
      correct: 0,
      explanation: {
        en: "Structural variations are large-scale genomic alterations (>50bp) including deletions, insertions, duplications, inversions, and translocations that can affect gene function.",
        es: "Las variaciones estructurales son alteraciones genómicas a gran escala (>50bp) incluyendo deleciones, inserciones, duplicaciones, inversiones y translocaciones.",
        de: "Strukturelle Variationen sind großangelegte genomische Veränderungen (>50bp) einschließlich Deletionen, Insertionen, Duplikationen, Inversionen und Translokationen.",
        nl: "Structurele variaties zijn grootschalige genomische veranderingen (>50bp) inclusief deleties, inserties, duplicaties, inversies en translocaties."
      }
    },
    {
      question: {
        en: "What is the role of ethical considerations in genomics?",
        es: "¿Cuál es el papel de las consideraciones éticas en la genómica?",
        de: "Was ist die Rolle ethischer Überlegungen in der Genomik?",
        nl: "Wat is de rol van ethische overwegingen in genomica?"
      },
      options: [
        { en: "Ensuring privacy, informed consent, and equitable access to genetic technologies", es: "Asegurar privacidad, consentimiento informado y acceso equitativo a tecnologías genéticas", de: "Gewährleistung von Privatsphäre, informierter Zustimmung und gerechtem Zugang zu genetischen Technologien", nl: "Zorgen voor privacy, geïnformeerde toestemming en eerlijke toegang tot genetische technologieën" },
        { en: "Accelerating research without restrictions", es: "Acelerar la investigación sin restricciones", de: "Forschung ohne Einschränkungen beschleunigen", nl: "Onderzoek versnellen zonder beperkingen" },
        { en: "Maximizing commercial profits only", es: "Solo maximizar ganancias comerciales", de: "Nur kommerzielle Gewinne maximieren", nl: "Alleen commerciële winsten maximaliseren" },
        { en: "Limiting access to genetic information", es: "Limitar el acceso a información genética", de: "Zugang zu genetischen Informationen begrenzen", nl: "Toegang tot genetische informatie beperken" }
      ],
      correct: 0,
      explanation: {
        en: "Ethical considerations in genomics address issues of privacy, informed consent, genetic discrimination, equitable access, and responsible use of genetic information and technologies.",
        es: "Las consideraciones éticas en genómica abordan temas de privacidad, consentimiento informado, discriminación genética y acceso equitativo.",
        de: "Ethische Überlegungen in der Genomik behandeln Fragen der Privatsphäre, informierter Zustimmung, genetischer Diskriminierung und gerechtem Zugang.",
        nl: "Ethische overwegingen in genomica behandelen kwesties van privacy, geïnformeerde toestemming, genetische discriminatie en eerlijke toegang."
      }
    },
    {
      question: {
        en: "What is transcriptomics?",
        es: "¿Qué es la transcriptómica?",
        de: "Was ist Transkriptomik?",
        nl: "Wat is transcriptomics?"
      },
      options: [
        { en: "Study of all RNA transcripts produced by the genome under specific conditions", es: "Estudio de todos los transcriptos de ARN producidos por el genoma bajo condiciones específicas", de: "Studie aller RNA-Transkripte, die vom Genom unter spezifischen Bedingungen produziert werden", nl: "Studie van alle RNA-transcripten geproduceerd door het genoom onder specifieke omstandigheden" },
        { en: "Analysis of DNA sequences only", es: "Análisis solo de secuencias de ADN", de: "Nur Analyse von DNA-Sequenzen", nl: "Alleen analyse van DNA-sequenties" },
        { en: "Study of protein structures", es: "Estudio de estructuras de proteínas", de: "Studie von Proteinstrukturen", nl: "Studie van eiwitstructuren" },
        { en: "Investigation of cellular metabolism", es: "Investigación del metabolismo celular", de: "Untersuchung des Zellstoffwechsels", nl: "Onderzoek naar cellulair metabolisme" }
      ],
      correct: 0,
      explanation: {
        en: "Transcriptomics analyzes the complete set of RNA transcripts produced by the genome, providing insights into gene expression patterns and regulatory mechanisms.",
        es: "La transcriptómica analiza el conjunto completo de transcriptos de ARN producidos por el genoma, proporcionando información sobre patrones de expresión génica.",
        de: "Transkriptomik analysiert den vollständigen Satz von RNA-Transkripten, die vom Genom produziert werden, und gibt Einblicke in Genexpressionsmuster.",
        nl: "Transcriptomics analyseert de complete set RNA-transcripten geproduceerd door het genoom, inzichten verschaffend in genexpressiepatronen."
      }
    },
    {
      question: {
        en: "What is alternative splicing?",
        es: "¿Qué es el empalme alternativo?",
        de: "Was ist alternatives Splicing?",
        nl: "Wat is alternatieve splicing?"
      },
      options: [
        { en: "Process where one gene produces multiple protein isoforms by differential exon inclusion", es: "Proceso donde un gen produce múltiples isoformas de proteínas por inclusión diferencial de exones", de: "Prozess, bei dem ein Gen mehrere Proteinisoformen durch differentielle Exon-Inklusion produziert", nl: "Proces waarbij één gen meerdere eiwitisovormen produceert door differentiële exon-inclusie" },
        { en: "DNA repair mechanism", es: "Mecanismo de reparación de ADN", de: "DNA-Reparaturmechanismus", nl: "DNA-reparatiemechanisme" },
        { en: "Chromosome segregation process", es: "Proceso de segregación cromosómica", de: "Chromosomensegregationsprozess", nl: "Chromosoomscheidingsproces" },
        { en: "Protein folding pathway", es: "Vía de plegamiento de proteínas", de: "Proteinfaltungsweg", nl: "Eiwitvouwingsroute" }
      ],
      correct: 0,
      explanation: {
        en: "Alternative splicing allows one gene to produce multiple protein isoforms with different functions by including or excluding different combinations of exons during mRNA processing.",
        es: "El empalme alternativo permite que un gen produzca múltiples isoformas de proteínas con diferentes funciones incluyendo o excluyendo diferentes combinaciones de exones.",
        de: "Alternatives Splicing ermöglicht es einem Gen, mehrere Proteinisoformen mit verschiedenen Funktionen zu produzieren, indem verschiedene Exon-Kombinationen eingeschlossen oder ausgeschlossen werden.",
        nl: "Alternatieve splicing stelt één gen in staat meerdere eiwitisovormen met verschillende functies te produceren door verschillende combinaties van exonen in of uit te sluiten."
      }
    },
    {
      question: {
        en: "What are enhancers in gene regulation?",
        es: "¿Qué son los potenciadores en la regulación génica?",
        de: "Was sind Enhancer in der Genregulation?",
        nl: "Wat zijn enhancers in genregulatie?"
      },
      options: [
        { en: "DNA regulatory sequences that increase gene transcription from a distance", es: "Secuencias reguladoras de ADN que aumentan la transcripción génica a distancia", de: "DNA-Regulatorsequenzen, die die Gentranskription aus der Ferne erhöhen", nl: "DNA-regulatorische sequenties die gentranscriptie van een afstand verhogen" },
        { en: "Proteins that bind to promoters", es: "Proteínas que se unen a promotores", de: "Proteine, die an Promotoren binden", nl: "Eiwitten die binden aan promotors" },
        { en: "RNA molecules involved in splicing", es: "Moléculas de ARN involucradas en empalme", de: "RNA-Moleküle, die am Splicing beteiligt sind", nl: "RNA-moleculen betrokken bij splicing" },
        { en: "Enzymes that modify histones", es: "Enzimas que modifican histonas", de: "Enzyme, die Histone modifizieren", nl: "Enzymen die histonen modificeren" }
      ],
      correct: 0,
      explanation: {
        en: "Enhancers are regulatory DNA sequences that can increase gene transcription when bound by transcription factors, functioning regardless of their distance or orientation relative to the gene.",
        es: "Los potenciadores son secuencias reguladoras de ADN que pueden aumentar la transcripción génica cuando son unidos por factores de transcripción, funcionando independientemente de su distancia.",
        de: "Enhancer sind regulatorische DNA-Sequenzen, die die Gentranskription erhöhen können, wenn sie von Transkriptionsfaktoren gebunden werden, unabhängig von Distanz oder Orientierung.",
        nl: "Enhancers zijn regulatoire DNA-sequenties die gentranscriptie kunnen verhogen wanneer gebonden door transcriptiefactoren, functionerend ongeacht hun afstand of oriëntatie."
      }
    },
    {
      question: {
        en: "What are silencers in gene regulation?",
        es: "¿Qué son los silenciadores en la regulación génica?",
        de: "Was sind Silencer in der Genregulation?",
        nl: "Wat zijn silencers in genregulatie?"
      },
      options: [
        { en: "DNA regulatory sequences that decrease or inhibit gene transcription", es: "Secuencias reguladoras de ADN que disminuyen o inhiben la transcripción génica", de: "DNA-Regulatorsequenzen, die die Gentranskription verringern oder hemmen", nl: "DNA-regulatorische sequenties die gentranscriptie verminderen of remmen" },
        { en: "Proteins that activate transcription", es: "Proteínas que activan la transcripción", de: "Proteine, die Transkription aktivieren", nl: "Eiwitten die transcriptie activeren" },
        { en: "RNA editing mechanisms", es: "Mecanismos de edición de ARN", de: "RNA-Editierungsmechanismen", nl: "RNA-bewerkingsmechanismen" },
        { en: "DNA replication origins", es: "Orígenes de replicación de ADN", de: "DNA-Replikationsursprünge", nl: "DNA-replicatie-oorsprongen" }
      ],
      correct: 0,
      explanation: {
        en: "Silencers are regulatory DNA elements that bind repressor proteins and decrease gene transcription, playing crucial roles in tissue-specific and temporal gene expression control.",
        es: "Los silenciadores son elementos reguladores de ADN que unen proteínas represoras y disminuyen la transcripción génica, jugando papeles cruciales en control de expresión génica.",
        de: "Silencer sind regulatorische DNA-Elemente, die Repressor-Proteine binden und die Gentranskription verringern, spielen entscheidende Rollen in gewebsspezifischer Genexpressionskontrolle.",
        nl: "Silencers zijn regulatoire DNA-elementen die repressor-eiwitten binden en gentranscriptie verminderen, cruciale rollen spelend in weefselspecifieke genexpressiecontrole."
      }
    },
    {
      question: {
        en: "What is chromatin remodeling?",
        es: "¿Qué es la remodelación de la cromatina?",
        de: "Was ist Chromatin-Remodeling?",
        nl: "Wat is chromatine-remodellering?"
      },
      options: [
        { en: "ATP-dependent process that alters chromatin structure to regulate gene accessibility", es: "Proceso dependiente de ATP que altera la estructura de la cromatina para regular la accesibilidad génica", de: "ATP-abhängiger Prozess, der die Chromatinstruktur verändert, um die Genzugänglichkeit zu regulieren", nl: "ATP-afhankelijk proces dat chromatinestructuur verandert om gentoegankelijkheid te reguleren" },
        { en: "DNA replication mechanism", es: "Mecanismo de replicación de ADN", de: "DNA-Replikationsmechanismus", nl: "DNA-replicatiemechanisme" },
        { en: "Protein synthesis pathway", es: "Vía de síntesis de proteínas", de: "Proteinsynthese-Pathway", nl: "Eiwitsynthesepad" },
        { en: "Cell division checkpoint", es: "Punto de control de división celular", de: "Zellteilungs-Checkpoint", nl: "Celdelingscontrolepunt" }
      ],
      correct: 0,
      explanation: {
        en: "Chromatin remodeling complexes use ATP hydrolysis to slide, eject, or exchange nucleosomes, making DNA more or less accessible to transcription machinery and regulatory proteins.",
        es: "Los complejos de remodelación de cromatina usan hidrólisis de ATP para deslizar, expulsar o intercambiar nucleosomas, haciendo el ADN más o menos accesible.",
        de: "Chromatin-Remodeling-Komplexe nutzen ATP-Hydrolyse, um Nukleosomen zu verschieben, auszustoßen oder auszutauschen, wodurch DNA für Transkriptionsmaschinerie zugänglicher wird.",
        nl: "Chromatine-remodellering complexen gebruiken ATP-hydrolyse om nucleosomen te verschuiven, uit te stoten of uit te wisselen, DNA meer of minder toegankelijk makend."
      }
    },
    {
      question: {
        en: "What are transcription factors?",
        es: "¿Qué son los factores de transcripción?",
        de: "Was sind Transkriptionsfaktoren?",
        nl: "Wat zijn transcriptiefactoren?"
      },
      options: [
        { en: "Proteins that regulate gene expression by binding to specific DNA sequences", es: "Proteínas que regulan la expresión génica uniéndose a secuencias específicas de ADN", de: "Proteine, die die Genexpression durch Bindung an spezifische DNA-Sequenzen regulieren", nl: "Eiwitten die genexpressie reguleren door te binden aan specifieke DNA-sequenties" },
        { en: "Enzymes that synthesize RNA", es: "Enzimas que sintetizan ARN", de: "Enzyme, die RNA synthetisieren", nl: "Enzymen die RNA synthetiseren" },
        { en: "Structural components of ribosomes", es: "Componentes estructurales de ribosomas", de: "Strukturelle Komponenten von Ribosomen", nl: "Structurele componenten van ribosomen" },
        { en: "DNA repair proteins", es: "Proteínas de reparación de ADN", de: "DNA-Reparaturproteine", nl: "DNA-reparatie eiwitten" }
      ],
      correct: 0,
      explanation: {
        en: "Transcription factors are regulatory proteins that bind to specific DNA sequences to control gene transcription, either activating or repressing gene expression in response to cellular signals.",
        es: "Los factores de transcripción son proteínas reguladoras que se unen a secuencias específicas de ADN para controlar la transcripción génica, activando o reprimiendo la expresión.",
        de: "Transkriptionsfaktoren sind regulatorische Proteine, die an spezifische DNA-Sequenzen binden, um die Gentranskription zu kontrollieren, Genexpression aktivierend oder reprimierend.",
        nl: "Transcriptiefactoren zijn regulatoire eiwitten die binden aan specifieke DNA-sequenties om gentranscriptie te controleren, genexpressie activerend of onderdrukkend."
      }
    },
    {
      question: {
        en: "What is the mediator complex in transcription?",
        es: "¿Qué es el complejo mediador en la transcripción?",
        de: "Was ist der Mediator-Komplex in der Transkription?",
        nl: "Wat is het mediator-complex in transcriptie?"
      },
      options: [
        { en: "Multi-protein complex that facilitates communication between transcription factors and RNA polymerase II", es: "Complejo multi-proteína que facilita la comunicación entre factores de transcripción y ARN polimerasa II", de: "Multi-Protein-Komplex, der die Kommunikation zwischen Transkriptionsfaktoren und RNA-Polymerase II erleichtert", nl: "Multi-eiwit complex dat communicatie tussen transcriptiefactoren en RNA-polymerase II faciliteert" },
        { en: "DNA-binding protein that blocks transcription", es: "Proteína de unión a ADN que bloquea la transcripción", de: "DNA-bindendes Protein, das Transkription blockiert", nl: "DNA-bindend eiwit dat transcriptie blokkeert" },
        { en: "RNA processing enzyme", es: "Enzima de procesamiento de ARN", de: "RNA-Verarbeitungsenzym", nl: "RNA-verwerkingsenzym" },
        { en: "Chromatin packaging protein", es: "Proteína de empaquetado de cromatina", de: "Chromatin-Verpackungsprotein", nl: "Chromatine-verpakkingseiwit" }
      ],
      correct: 0,
      explanation: {
        en: "The mediator complex serves as a bridge between gene-specific transcription factors bound to enhancers/silencers and the RNA polymerase II transcription machinery at promoters.",
        es: "El complejo mediador sirve como puente entre factores de transcripción específicos de genes unidos a potenciadores/silenciadores y la maquinaria de transcripción de ARN polimerasa II.",
        de: "Der Mediator-Komplex dient als Brücke zwischen genspezifischen Transkriptionsfaktoren, die an Enhancer/Silencer gebunden sind, und der RNA-Polymerase-II-Transkriptionsmaschinerie.",
        nl: "Het mediator-complex dient als brug tussen genspecifieke transcriptiefactoren gebonden aan enhancers/silencers en de RNA-polymerase II transcriptiemachinerie."
      }
    },
    {
      question: {
        en: "What are long non-coding RNAs (lncRNAs)?",
        es: "¿Qué son los ARNs largos no codificantes (lncRNAs)?",
        de: "Was sind lange nicht-kodierende RNAs (lncRNAs)?",
        nl: "Wat zijn lange niet-coderende RNA's (lncRNAs)?"
      },
      options: [
        { en: "RNA molecules longer than 200 nucleotides that regulate gene expression without encoding proteins", es: "Moléculas de ARN de más de 200 nucleótidos que regulan la expresión génica sin codificar proteínas", de: "RNA-Moleküle länger als 200 Nukleotide, die Genexpression regulieren, ohne Proteine zu kodieren", nl: "RNA-moleculen langer dan 200 nucleotiden die genexpressie reguleren zonder eiwitten te coderen" },
        { en: "Small regulatory RNAs like microRNAs", es: "ARNs reguladores pequeños como microARNs", de: "Kleine regulatorische RNAs wie microRNAs", nl: "Kleine regulatoire RNA's zoals microRNA's" },
        { en: "Protein-coding messenger RNAs", es: "ARNs mensajeros codificantes de proteínas", de: "Protein-kodierende Messenger-RNAs", nl: "Eiwit-coderende messenger-RNA's" },
        { en: "Transfer RNAs used in translation", es: "ARNs de transferencia usados en traducción", de: "Transfer-RNAs, die in der Translation verwendet werden", nl: "Transfer-RNA's gebruikt in translatie" }
      ],
      correct: 0,
      explanation: {
        en: "lncRNAs are regulatory RNA molecules that don't code for proteins but play important roles in gene expression control through various mechanisms including chromatin modification and transcriptional regulation.",
        es: "Los lncRNAs son moléculas de ARN reguladoras que no codifican proteínas pero juegan papeles importantes en el control de expresión génica através de varios mecanismos.",
        de: "lncRNAs sind regulatorische RNA-Moleküle, die nicht für Proteine kodieren, aber wichtige Rollen in der Genexpressionskontrolle durch verschiedene Mechanismen spielen.",
        nl: "lncRNAs zijn regulatoire RNA-moleculen die niet coderen voor eiwitten maar belangrijke rollen spelen in genexpressiecontrole door verschillende mechanismen."
      }
    },
    {
      question: {
        en: "What is RNA interference (RNAi)?",
        es: "¿Qué es la interferencia por ARN (RNAi)?",
        de: "Was ist RNA-Interferenz (RNAi)?",
        nl: "Wat is RNA-interferentie (RNAi)?"
      },
      options: [
        { en: "Post-transcriptional gene silencing mechanism mediated by small RNAs", es: "Mecanismo de silenciamiento génico post-transcripcional mediado por ARNs pequeños", de: "Post-transkriptioneller Gensilencing-Mechanismus, der von kleinen RNAs vermittelt wird", nl: "Post-transcriptioneel gensilencing-mechanisme gemedieerd door kleine RNA's" },
        { en: "DNA methylation process", es: "Proceso de metilación de ADN", de: "DNA-Methylierungsprozess", nl: "DNA-methyleringsproces" },
        { en: "Transcriptional activation pathway", es: "Vía de activación transcripcional", de: "Transkriptioneller Aktivierungsweg", nl: "Transcriptionele activeringsroute" },
        { en: "Protein degradation mechanism", es: "Mecanismo de degradación de proteínas", de: "Proteinabbaumechanismus", nl: "Eiwitafbraakmechanisme" }
      ],
      correct: 0,
      explanation: {
        en: "RNAi is a conserved regulatory mechanism where small RNAs (siRNAs and miRNAs) guide the silencing of target mRNAs through base-pairing, leading to mRNA degradation or translation inhibition.",
        es: "RNAi es un mecanismo regulador conservado donde ARNs pequeños (siRNAs y miRNAs) guían el silenciamiento de ARNm diana através de apareamiento de bases.",
        de: "RNAi ist ein konservierter Regulationsmechanismus, bei dem kleine RNAs (siRNAs und miRNAs) das Silencing von Ziel-mRNAs durch Basenpaarung leiten.",
        nl: "RNAi is een geconserveerd regulatiemechanisme waarbij kleine RNA's (siRNA's en miRNA's) het silencing van doel-mRNA's leiden door baseparing."
      }
    },
    {
      question: {
        en: "What are microRNAs (miRNAs)?",
        es: "¿Qué son los microARNs (miRNAs)?",
        de: "Was sind microRNAs (miRNAs)?",
        nl: "Wat zijn microRNA's (miRNA's)?"
      },
      options: [
        { en: "Small non-coding RNAs that regulate gene expression by targeting mRNAs", es: "ARNs pequeños no codificantes que regulan la expresión génica dirigiéndose a ARNm", de: "Kleine nicht-kodierende RNAs, die Genexpression durch Targeting von mRNAs regulieren", nl: "Kleine niet-coderende RNA's die genexpressie reguleren door mRNA's te targeten" },
        { en: "Small subunits of ribosomes", es: "Subunidades pequeñas de ribosomas", de: "Kleine Untereinheiten von Ribosomen", nl: "Kleine subeenheden van ribosomen" },
        { en: "Transfer RNAs for amino acid delivery", es: "ARNs de transferencia para entrega de aminoácidos", de: "Transfer-RNAs für Aminosäure-Lieferung", nl: "Transfer-RNA's voor aminozuurlevering" },
        { en: "Catalytic RNA enzymes", es: "Enzimas de ARN catalíticas", de: "Katalytische RNA-Enzyme", nl: "Katalytische RNA-enzymen" }
      ],
      correct: 0,
      explanation: {
        en: "miRNAs are ~22 nucleotide regulatory RNAs that bind to complementary sequences in target mRNAs, typically in the 3' UTR, leading to mRNA degradation or translation repression.",
        es: "Los miRNAs son ARNs reguladores de ~22 nucleótidos que se unen a secuencias complementarias en ARNm diana, típicamente en la región 3' UTR.",
        de: "miRNAs sind ~22 Nukleotid regulatorische RNAs, die an komplementäre Sequenzen in Ziel-mRNAs binden, typischerweise in der 3' UTR.",
        nl: "miRNA's zijn ~22 nucleotide regulatoire RNA's die binden aan complementaire sequenties in doel-mRNA's, typisch in de 3' UTR."
      }
    },
    {
      question: {
        en: "What is the TATA box?",
        es: "¿Qué es la caja TATA?",
        de: "Was ist die TATA-Box?",
        nl: "Wat is de TATA-box?"
      },
      options: [
        { en: "DNA sequence in gene promoters that helps position RNA polymerase II for transcription initiation", es: "Secuencia de ADN en promotores de genes que ayuda a posicionar la ARN polimerasa II para iniciación de transcripción", de: "DNA-Sequenz in Genpromotoren, die hilft, RNA-Polymerase II für Transkriptionsinitiation zu positionieren", nl: "DNA-sequentie in genpromotors die helpt RNA-polymerase II te positioneren voor transcriptie-initiatie" },
        { en: "Protein that binds to enhancers", es: "Proteína que se une a potenciadores", de: "Protein, das an Enhancer bindet", nl: "Eiwit dat bindt aan enhancers" },
        { en: "RNA sequence that signals splicing", es: "Secuencia de ARN que señala empalme", de: "RNA-Sequenz, die Splicing signalisiert", nl: "RNA-sequentie die splicing signaleert" },
        { en: "Chromosome packaging structure", es: "Estructura de empaquetado cromosómico", de: "Chromosomen-Verpackungsstruktur", nl: "Chromosoomverpakkingsstructuur" }
      ],
      correct: 0,
      explanation: {
        en: "The TATA box is a conserved AT-rich DNA sequence found ~25-30 bp upstream of transcription start sites in many gene promoters, serving as a binding site for TATA-binding protein (TBP).",
        es: "La caja TATA es una secuencia de ADN rica en AT conservada encontrada ~25-30 pb corriente arriba de sitios de inicio de transcripción en muchos promotores de genes.",
        de: "Die TATA-Box ist eine konservierte AT-reiche DNA-Sequenz, die ~25-30 bp stromaufwärts von Transkriptionsstartpunkten in vielen Genpromotoren gefunden wird.",
        nl: "De TATA-box is een geconserveerde AT-rijke DNA-sequentie gevonden ~25-30 bp stroomopwaarts van transcriptiestartpunten in veel genpromotors."
      }
    },
    {
      question: {
        en: "What are CpG islands?",
        es: "¿Qué son las islas CpG?",
        de: "Was sind CpG-Inseln?",
        nl: "Wat zijn CpG-eilanden?"
      },
      options: [
        { en: "Genomic regions with high frequency of CpG dinucleotides, often found in gene promoters", es: "Regiones genómicas con alta frecuencia de dinucleótidos CpG, a menudo encontradas en promotores de genes", de: "Genomische Regionen mit hoher Häufigkeit von CpG-Dinukleotiden, oft in Genpromotoren gefunden", nl: "Genomische regio's met hoge frequentie van CpG-dinucleotiden, vaak gevonden in genpromotors" },
        { en: "Physical islands in the ocean", es: "Islas físicas en el océano", de: "Physische Inseln im Ozean", nl: "Fysieke eilanden in de oceaan" },
        { en: "Protein domains in enzymes", es: "Dominios de proteínas en enzimas", de: "Proteindomänen in Enzymen", nl: "Eiwitdomeinen in enzymen" },
        { en: "Cellular organelles for metabolism", es: "Orgánulos celulares para metabolismo", de: "Zelluläre Organellen für Stoffwechsel", nl: "Cellulaire organellen voor metabolisme" }
      ],
      correct: 0,
      explanation: {
        en: "CpG islands are genomic regions with elevated CpG content that resist DNA methylation and are associated with gene promoters, playing important roles in gene regulation and chromatin structure.",
        es: "Las islas CpG son regiones genómicas con contenido elevado de CpG que resisten la metilación de ADN y están asociadas con promotores de genes.",
        de: "CpG-Inseln sind genomische Regionen mit erhöhtem CpG-Gehalt, die DNA-Methylierung widerstehen und mit Genpromotoren assoziiert sind.",
        nl: "CpG-eilanden zijn genomische regio's met verhoogd CpG-gehalte die DNA-methylering weerstaan en geassocieerd zijn met genpromotors."
      }
    },
    {
      question: {
        en: "What is the role of pioneer transcription factors?",
        es: "¿Cuál es el papel de los factores de transcripción pioneros?",
        de: "Was ist die Rolle von Pioneer-Transkriptionsfaktoren?",
        nl: "Wat is de rol van pionier-transcriptiefactoren?"
      },
      options: [
        { en: "Transcription factors that can bind to and open condensed chromatin regions", es: "Factores de transcripción que pueden unirse y abrir regiones de cromatina condensada", de: "Transkriptionsfaktoren, die sich an kondensierte Chromatinregionen binden und diese öffnen können", nl: "Transcriptiefactoren die kunnen binden aan en gecondenseerde chromatineregio's kunnen openen" },
        { en: "The first transcription factors discovered historically", es: "Los primeros factores de transcripción descubiertos históricamente", de: "Die ersten historisch entdeckten Transkriptionsfaktoren", nl: "De eerste historisch ontdekte transcriptiefactoren" },
        { en: "Factors that only work during development", es: "Factores que solo funcionan durante el desarrollo", de: "Faktoren, die nur während der Entwicklung arbeiten", nl: "Factoren die alleen tijdens ontwikkeling werken" },
        { en: "Proteins that degrade other transcription factors", es: "Proteínas que degradan otros factores de transcripción", de: "Proteine, die andere Transkriptionsfaktoren abbauen", nl: "Eiwitten die andere transcriptiefactoren afbreken" }
      ],
      correct: 0,
      explanation: {
        en: "Pioneer transcription factors have the unique ability to bind to nucleosomal DNA in closed chromatin and initiate chromatin remodeling, making genes accessible for other regulatory factors.",
        es: "Los factores de transcripción pioneros tienen la capacidad única de unirse al ADN nucleosomal en cromatina cerrada e iniciar la remodelación de cromatina.",
        de: "Pioneer-Transkriptionsfaktoren haben die einzigartige Fähigkeit, sich an nukleosomale DNA in geschlossenem Chromatin zu binden und Chromatin-Remodeling zu initiieren.",
        nl: "Pionier-transcriptiefactoren hebben het unieke vermogen om te binden aan nucleosomaal DNA in gesloten chromatine en chromatine-remodellering te initiëren."
      }
    },
    {
      question: {
        en: "What is genomic imprinting?",
        es: "¿Qué es la impronta genómica?",
        de: "Was ist genomische Prägung?",
        nl: "Wat is genomische imprinting?"
      },
      options: [
        { en: "Epigenetic phenomenon where gene expression depends on the parent of origin", es: "Fenómeno epigenético donde la expresión génica depende del progenitor de origen", de: "Epigenetisches Phänomen, bei dem Genexpression vom Ursprungselternteil abhängt", nl: "Epigenetisch fenomeen waarbij genexpressie afhangt van de ouder van oorsprong" },
        { en: "Process of DNA replication", es: "Proceso de replicación de ADN", de: "Prozess der DNA-Replikation", nl: "Proces van DNA-replicatie" },
        { en: "Physical marking of chromosomes", es: "Marcado físico de cromosomas", de: "Physische Markierung von Chromosomen", nl: "Fysieke markering van chromosomen" },
        { en: "Genetic recombination mechanism", es: "Mecanismo de recombinación genética", de: "Genetischer Rekombinationsmechanismus", nl: "Genetisch recombinatiemechanisme" }
      ],
      correct: 0,
      explanation: {
        en: "Genomic imprinting results in mono-allelic gene expression based on the parent of origin, established by differential DNA methylation and maintained through cell divisions.",
        es: "La impronta genómica resulta en expresión génica mono-alélica basada en el progenitor de origen, establecida por metilación diferencial de ADN.",
        de: "Genomische Prägung führt zu mono-allelischer Genexpression basierend auf dem Ursprungselternteil, etabliert durch differentielle DNA-Methylierung.",
        nl: "Genomische imprinting resulteert in mono-allelische genexpressie gebaseerd op de ouder van oorsprong, vastgesteld door differentiële DNA-methylering."
      }
    },
    {
      question: {
        en: "What are topologically associating domains (TADs)?",
        es: "¿Qué son los dominios de asociación topológica (TADs)?",
        de: "Was sind topologisch assoziierte Domänen (TADs)?",
        nl: "Wat zijn topologisch geassocieerde domeinen (TADs)?"
      },
      options: [
        { en: "Chromatin structures that spatially organize gene regulation by constraining enhancer-promoter interactions", es: "Estructuras de cromatina que organizan espacialmente la regulación génica restringiendo las interacciones potenciador-promotor", de: "Chromatinstrukturen, die Genregulation räumlich organisieren, indem sie Enhancer-Promotor-Interaktionen einschränken", nl: "Chromatinestructuren die genregulatie ruimtelijk organiseren door enhancer-promotor interacties te beperken" },
        { en: "DNA repair complexes", es: "Complejos de reparación de ADN", de: "DNA-Reparaturkomplexe", nl: "DNA-reparatiecomplexen" },
        { en: "Ribosomal RNA processing units", es: "Unidades de procesamiento de ARN ribosomal", de: "Ribosomale RNA-Verarbeitungseinheiten", nl: "Ribosomale RNA-verwerkingseenheden" },
        { en: "Mitochondrial genetic compartments", es: "Compartimientos genéticos mitocondriales", de: "Mitochondriale genetische Kompartimente", nl: "Mitochondriale genetische compartimenten" }
      ],
      correct: 0,
      explanation: {
        en: "TADs are self-interacting chromatin domains that create insulated neighborhoods for gene regulation, ensuring enhancers preferentially contact promoters within the same domain.",
        es: "Los TADs son dominios de cromatina que interactúan consigo mismos y crean vecindarios aislados para la regulación génica, asegurando que los potenciadores contacten preferentemente promotores dentro del mismo dominio.",
        de: "TADs sind selbst-interagierende Chromatindomänen, die isolierte Nachbarschaften für Genregulation schaffen, wodurch Enhancer bevorzugt Promotoren innerhalb derselben Domäne kontaktieren.",
        nl: "TADs zijn zelf-interacterende chromatinedomeinen die geïsoleerde buurten creëren voor genregulatie, ervoor zorgend dat enhancers bij voorkeur promotors binnen hetzelfde domein contacteren."
      }
    },
    {
      question: {
        en: "What is the role of CTCF in genome organization?",
        es: "¿Cuál es el papel de CTCF en la organización del genoma?",
        de: "Was ist die Rolle von CTCF in der Genomorganisation?",
        nl: "Wat is de rol van CTCF in genoomorganisatie?"
      },
      options: [
        { en: "Insulator protein that establishes chromatin boundaries and organizes 3D genome architecture", es: "Proteína aisladora que establece límites de cromatina y organiza la arquitectura 3D del genoma", de: "Isolator-Protein, das Chromatingrezen etabliert und 3D-Genomarchitektur organisiert", nl: "Isolator-eiwit dat chromatinegrenzen vestigt en 3D-genoomarchitectuur organiseert" },
        { en: "DNA polymerase accessory factor", es: "Factor accesorio de ADN polimerasa", de: "DNA-Polymerase-Hilfsfaktor", nl: "DNA-polymerase hulpfactor" },
        { en: "RNA processing enzyme", es: "Enzima de procesamiento de ARN", de: "RNA-Verarbeitungsenzym", nl: "RNA-verwerkingsenzym" },
        { en: "Histone modification writer", es: "Escritor de modificaciones de histonas", de: "Histon-Modifikations-Writer", nl: "Histonmodificatie-schrijver" }
      ],
      correct: 0,
      explanation: {
        en: "CTCF is a key architectural protein that binds to specific DNA sequences and, together with cohesin, forms chromatin loops and establishes TAD boundaries, organizing the 3D genome structure.",
        es: "CTCF es una proteína arquitectónica clave que se une a secuencias específicas de ADN y, junto con cohesina, forma bucles de cromatina y establece límites de TAD.",
        de: "CTCF ist ein wichtiges architektonisches Protein, das an spezifische DNA-Sequenzen bindet und zusammen mit Cohesin Chromatinschleifen bildet und TAD-Grenzen etabliert.",
        nl: "CTCF is een belangrijk architectonisch eiwit dat bindt aan specifieke DNA-sequenties en samen met cohesine chromatinelussen vormt en TAD-grenzen vestigt."
      }
    },
    {
      question: {
        en: "What is allele-specific expression (ASE)?",
        es: "¿Qué es la expresión específica de alelo (ASE)?",
        de: "Was ist allel-spezifische Expression (ASE)?",
        nl: "Wat is allel-specifieke expressie (ASE)?"
      },
      options: [
        { en: "Differential expression of maternal and paternal alleles of the same gene", es: "Expresión diferencial de alelos maternos y paternos del mismo gen", de: "Differentielle Expression mütterlicher und väterlicher Allele desselben Gens", nl: "Differentiële expressie van moederlijke en vaderlijke allelen van hetzelfde gen" },
        { en: "Expression of genes only during specific developmental stages", es: "Expresión de genes solo durante etapas específicas del desarrollo", de: "Expression von Genen nur während spezifischer Entwicklungsstadien", nl: "Expressie van genen alleen tijdens specifieke ontwikkelingsstadia" },
        { en: "Tissue-specific gene expression patterns", es: "Patrones de expresión génica específicos de tejido", de: "Gewebsspezifische Genexpressionsmuster", nl: "Weefselspecifieke genexpressiepatronen" },
        { en: "Expression changes in response to environmental stimuli", es: "Cambios de expresión en respuesta a estímulos ambientales", de: "Expressionsänderungen als Reaktion auf Umweltreize", nl: "Expressieveranderingen in reactie op omgevingsprikkels" }
      ],
      correct: 0,
      explanation: {
        en: "ASE occurs when the maternal and paternal alleles of a gene show unequal expression levels, often due to genetic variants affecting transcription, chromatin structure, or RNA stability.",
        es: "ASE ocurre cuando los alelos maternos y paternos de un gen muestran niveles de expresión desiguales, a menudo debido a variantes genéticas que afectan la transcripción.",
        de: "ASE tritt auf, wenn die mütterlichen und väterlichen Allele eines Gens ungleiche Expressionsniveaus zeigen, oft aufgrund genetischer Varianten, die Transkription beeinflussen.",
        nl: "ASE treedt op wanneer de moederlijke en vaderlijke allelen van een gen ongelijke expressieniveaus tonen, vaak door genetische varianten die transcriptie beïnvloeden."
      }
    },
    {
      question: {
        en: "What are expression quantitative trait loci (eQTLs)?",
        es: "¿Qué son los loci de rasgos cuantitativos de expresión (eQTLs)?",
        de: "Was sind Expressions-Quantitative-Trait-Loci (eQTLs)?",
        nl: "Wat zijn expressie-kwantitatieve eigenschaploci (eQTLs)?"
      },
      options: [
        { en: "Genetic variants that influence the expression level of genes", es: "Variantes genéticas que influyen en el nivel de expresión de genes", de: "Genetische Varianten, die das Expressionsniveau von Genen beeinflussen", nl: "Genetische varianten die het expressieniveau van genen beïnvloeden" },
        { en: "Genes that control the expression of other genes", es: "Genes que controlan la expresión de otros genes", de: "Gene, die die Expression anderer Gene kontrollieren", nl: "Genen die de expressie van andere genen controleren" },
        { en: "Chromosomal regions with high mutation rates", es: "Regiones cromosómicas con altas tasas de mutación", de: "Chromosomale Regionen mit hohen Mutationsraten", nl: "Chromosomale regio's met hoge mutatiesnelheden" },
        { en: "Protein domains involved in gene regulation", es: "Dominios de proteínas involucrados en regulación génica", de: "Proteindomänen, die an Genregulation beteiligt sind", nl: "Eiwitdomeinen betrokken bij genregulatie" }
      ],
      correct: 0,
      explanation: {
        en: "eQTLs are DNA sequence variants (usually SNPs) that are associated with variation in gene expression levels, helping to understand the genetic basis of expression differences between individuals.",
        es: "Los eQTLs son variantes de secuencia de ADN (usualmente SNPs) que están asociadas con variación en niveles de expresión génica, ayudando a entender la base genética de diferencias de expresión.",
        de: "eQTLs sind DNA-Sequenzvarianten (meist SNPs), die mit Variation in Genexpressionsniveaus assoziiert sind und helfen, die genetische Basis von Expressionsunterschieden zu verstehen.",
        nl: "eQTLs zijn DNA-sequentievarianten (meestal SNPs) die geassocieerd zijn met variatie in genexpressieniveaus, helpend om de genetische basis van expressieverschillen te begrijpen."
      }
    },
    {
      question: {
        en: "What is the function of insulators in gene regulation?",
        es: "¿Cuál es la función de los aisladores en la regulación génica?",
        de: "Was ist die Funktion von Insulatoren in der Genregulation?",
        nl: "Wat is de functie van isolators in genregulatie?"
      },
      options: [
        { en: "DNA elements that block inappropriate enhancer-promoter interactions and establish chromatin boundaries", es: "Elementos de ADN que bloquean interacciones inapropiadas potenciador-promotor y establecen límites de cromatina", de: "DNA-Elemente, die ungeeignete Enhancer-Promotor-Interaktionen blockieren und Chromatingrenzen etablieren", nl: "DNA-elementen die ongepaste enhancer-promotor interacties blokkeren en chromatinegrenzen vestigen" },
        { en: "Proteins that enhance gene transcription", es: "Proteínas que mejoran la transcripción génica", de: "Proteine, die Gentranskription verstärken", nl: "Eiwitten die gentranscriptie versterken" },
        { en: "RNA molecules that silence gene expression", es: "Moléculas de ARN que silencian la expresión génica", de: "RNA-Moleküle, die Genexpression stillegen", nl: "RNA-moleculen die genexpressie stilleggen" },
        { en: "Histone modifications that activate transcription", es: "Modificaciones de histonas que activan la transcripción", de: "Histon-Modifikationen, die Transkription aktivieren", nl: "Histonmodificaties die transcriptie activeren" }
      ],
      correct: 0,
      explanation: {
        en: "Insulators are regulatory DNA elements that act as barriers to prevent enhancers from inappropriately activating distant genes, helping to maintain proper gene expression domains and chromatin organization.",
        es: "Los aisladores son elementos reguladores de ADN que actúan como barreras para prevenir que los potenciadores activen inapropiadamente genes distantes, ayudando a mantener dominios apropiados de expresión génica.",
        de: "Insulatoren sind regulatorische DNA-Elemente, die als Barrieren wirken, um zu verhindern, dass Enhancer unangemessen entfernte Gene aktivieren, und helfen, ordnungsgemäße Genexpressionsdomänen aufrechtzuerhalten.",
        nl: "Isolators zijn regulatoire DNA-elementen die als barrières werken om te voorkomen dat enhancers ongepast verre genen activeren, helpend om juiste genexpressiedomeinen te behouden."
      }
    },
    {
      question: {
        en: "What is the role of nuclear organization in gene regulation?",
        es: "¿Cuál es el papel de la organización nuclear en la regulación génica?",
        de: "Was ist die Rolle der Kernorganisation in der Genregulation?",
        nl: "Wat is de rol van nucleaire organisatie in genregulatie?"
      },
      options: [
        { en: "Spatial organization of chromosomes and genes within the nucleus influences transcriptional activity", es: "La organización espacial de cromosomas y genes dentro del núcleo influye en la actividad transcripcional", de: "Räumliche Organisation von Chromosomen und Genen im Kern beeinflusst Transkriptionsaktivität", nl: "Ruimtelijke organisatie van chromosomen en genen binnen de nucleus beïnvloedt transcriptionele activiteit" },
        { en: "Nuclear organization only affects DNA replication", es: "La organización nuclear solo afecta la replicación de ADN", de: "Kernorganisation beeinflusst nur DNA-Replikation", nl: "Nucleaire organisatie beïnvloedt alleen DNA-replicatie" },
        { en: "Chromosome positioning is random and has no regulatory role", es: "El posicionamiento cromosómico es aleatorio y no tiene papel regulador", de: "Chromosomenpositionierung ist zufällig und hat keine regulatorische Rolle", nl: "Chromosoompositionering is willekeurig en heeft geen regulatoire rol" },
        { en: "Nuclear structure only provides mechanical support", es: "La estructura nuclear solo proporciona soporte mecánico", de: "Kernstruktur bietet nur mechanische Unterstützung", nl: "Nucleaire structuur biedt alleen mechanische ondersteuning" }
      ],
      correct: 0,
      explanation: {
        en: "Nuclear organization creates distinct subnuclear compartments and territories that influence gene expression through proximity effects, concentration of regulatory factors, and formation of transcription factories.",
        es: "La organización nuclear crea compartimientos subnucleares distintos y territorios que influyen en la expresión génica através de efectos de proximidad, concentración de factores reguladores.",
        de: "Kernorganisation schafft unterschiedliche subnukleare Kompartimente und Territorien, die Genexpression durch Nähe-Effekte und Konzentration regulatorischer Faktoren beeinflussen.",
        nl: "Nucleaire organisatie creëert verschillende subnucleaire compartimenten en territoria die genexpressie beïnvloeden door nabijheidseffecten en concentratie van regulatoire factoren."
      }
    },
    {
      question: {
        en: "What is the mechanism of chromothripsis in cancer genetics?",
        es: "¿Cuál es el mecanismo de cromotripsis en la genética del cáncer?",
        de: "Was ist der Mechanismus der Chromothripsis in der Krebsgenetik?",
        nl: "Wat is het mechanisme van chromothripsis in kankergenética?"
      },
      options: [
        { en: "Massive local chromosome shattering and random reassembly leading to complex rearrangements", es: "Fragmentación masiva local de cromosomas y reensamblaje aleatorio que lleva a reordenamientos complejos", de: "Massive lokale Chromosomenzersplitterung und zufällige Neuanordnung führt zu komplexen Umlagerungen", nl: "Massieve lokale chromosoomvernietiging en willekeurige herassemblage leidend tot complexe herrangschikkingen" },
        { en: "Gradual accumulation of point mutations", es: "Acumulación gradual de mutaciones puntuales", de: "Allmähliche Anhäufung von Punktmutationen", nl: "Geleidelijke ophoping van puntmutaties" },
        { en: "Systematic deletion of tumor suppressor genes", es: "Deleción sistemática de genes supresores de tumores", de: "Systematische Deletion von Tumorsuppressorgenen", nl: "Systematische deletie van tumorsuppressorgenen" },
        { en: "Progressive telomere shortening", es: "Acortamiento progresivo de telómeros", de: "Progressive Telomerverkürzung", nl: "Progressieve telomeerverkorting" }
      ],
      correct: 0,
      explanation: {
        en: "Chromothripsis is a catastrophic mutational process where one or few chromosomes undergo massive local shattering in a single event, followed by random reassembly, creating complex structural variations often seen in cancer.",
        es: "La cromotripsis es un proceso mutacional catastrófico donde uno o pocos cromosomas sufren fragmentación masiva local en un evento único, seguido de reensamblaje aleatorio.",
        de: "Chromothripsis ist ein katastrophaler Mutationsprozess, bei dem ein oder wenige Chromosomen massive lokale Zersplitterung in einem einzigen Ereignis erleiden, gefolgt von zufälliger Neuanordnung.",
        nl: "Chromothripsis is een catastrofaal mutatieproces waarbij één of enkele chromosomen massieve lokale vernietiging ondergaan in één gebeurtenis, gevolgd door willekeurige herassemblage."
      }
    },
    {
      question: {
        en: "What is the role of topologically associating domains (TADs) in genome organization?",
        es: "¿Cuál es el papel de los dominios asociativos topológicos (TADs) en la organización del genoma?",
        de: "Was ist die Rolle topologisch assoziierender Domänen (TADs) in der Genomorganisation?",
        nl: "Wat is de rol van topologisch associërende domeinen (TADs) in genoomorganisatie?"
      },
      options: [
        { en: "Self-interacting chromatin domains that constrain enhancer-promoter interactions and maintain regulatory landscapes", es: "Dominios de cromatina autointeractuantes que restringen interacciones potenciador-promotor y mantienen paisajes reguladores", de: "Selbstinteragierende Chromatin-Domänen, die Enhancer-Promotor-Interaktionen einschränken und regulatorische Landschaften aufrechterhalten", nl: "Zelf-interacterende chromatinedomeinen die enhancer-promotor interacties beperken en regulatoire landschappen behouden" },
        { en: "Regions of highly expressed genes only", es: "Regiones solo de genes altamente expresados", de: "Regionen nur hochexprimierter Gene", nl: "Regio's van alleen sterk tot expressie gebrachte genen" },
        { en: "Areas where DNA replication initiates", es: "Áreas donde se inicia la replicación del ADN", de: "Bereiche, wo DNA-Replikation beginnt", nl: "Gebieden waar DNA-replicatie begint" },
        { en: "Heterochromatin condensation sites", es: "Sitios de condensación de heterocromatina", de: "Heterochromatin-Kondensationsstellen", nl: "Heterochromatine condensatiesites" }
      ],
      correct: 0,
      explanation: {
        en: "TADs are megabase-sized chromatin domains where DNA sequences preferentially interact with each other, serving as regulatory units that constrain enhancer-promoter contacts and help maintain proper gene expression patterns.",
        es: "Los TADs son dominios de cromatina de tamaño megabase donde las secuencias de ADN interactúan preferentemente entre sí, sirviendo como unidades reguladoras.",
        de: "TADs sind Megabase-große Chromatin-Domänen, wo DNA-Sequenzen bevorzugt miteinander interagieren und als regulatorische Einheiten dienen.",
        nl: "TADs zijn megabase-grote chromatinedomeinen waar DNA-sequenties bij voorkeur met elkaar interageren, dienend als regulatoire eenheden."
      }
    },
    {
      question: {
        en: "What is the mechanism of RNA interference (RNAi) pathway regulation?",
        es: "¿Cuál es el mecanismo de regulación de la vía de interferencia de ARN (RNAi)?",
        de: "Was ist der Mechanismus der RNA-Interferenz (RNAi) Pathway-Regulation?",
        nl: "Wat is het mechanisme van RNA-interferentie (RNAi) pathway-regulatie?"
      },
      options: [
        { en: "Small RNAs guide Argonaute proteins to complementary mRNA targets for cleavage or translational repression", es: "ARNs pequeños guían proteínas Argonauta hacia objetivos de ARNm complementarios para escisión o represión traduccional", de: "Kleine RNAs leiten Argonaute-Proteine zu komplementären mRNA-Zielen für Spaltung oder translationale Repression", nl: "Kleine RNAs leiden Argonaute-eiwitten naar complementaire mRNA-doelen voor splitsing of translationele repressie" },
        { en: "Large RNA molecules bind directly to DNA promoters", es: "Moléculas de ARN grandes se unen directamente a promotores de ADN", de: "Große RNA-Moleküle binden direkt an DNA-Promotoren", nl: "Grote RNA-moleculen binden direct aan DNA-promotors" },
        { en: "Proteins degrade all cellular RNA non-specifically", es: "Las proteínas degradan todo el ARN celular de forma no específica", de: "Proteine degradieren alle zelluläre RNA unspezifisch", nl: "Eiwitten degraderen alle cellulaire RNA niet-specifiek" },
        { en: "DNA methylation silences target genes permanently", es: "La metilación del ADN silencia genes objetivo permanentemente", de: "DNA-Methylierung schaltet Zielgene dauerhaft stumm", nl: "DNA-methylering zet doelgenen permanent stil" }
      ],
      correct: 0,
      explanation: {
        en: "The RNAi pathway involves small interfering RNAs (siRNAs) or microRNAs (miRNAs) that guide RNA-induced silencing complex (RISC) containing Argonaute proteins to target mRNAs based on sequence complementarity for post-transcriptional gene silencing.",
        es: "La vía RNAi involucra ARNs interferentes pequeños (siRNAs) o microARNs (miRNAs) que guían el complejo silenciador inducido por ARN (RISC) que contiene proteínas Argonauta.",
        de: "Der RNAi-Pathway beinhaltet kleine interferierende RNAs (siRNAs) oder microRNAs (miRNAs), die RNA-induzierten Silencing-Komplex (RISC) mit Argonaute-Proteinen leiten.",
        nl: "De RNAi-pathway behelst kleine interfererende RNAs (siRNAs) of microRNAs (miRNAs) die het RNA-geïnduceerde silencing-complex (RISC) met Argonaute-eiwitten leiden."
      }
    },
    {
      question: {
        en: "What is the molecular basis of genomic imprinting disorders?",
        es: "¿Cuál es la base molecular de los trastornos de impronta genómica?",
        de: "Was ist die molekulare Basis genomischer Prägungsstörungen?",
        nl: "Wat is de moleculaire basis van genomische imprintingstoornissen?"
      },
      options: [
        { en: "Disruption of parent-of-origin specific DNA methylation patterns at imprinting control regions affecting monoallelic gene expression", es: "Disrupción de patrones de metilación de ADN específicos del origen parental en regiones de control de impronta afectando expresión génica monoalélica", de: "Störung eltern-spezifischer DNA-Methylierungsmuster an Prägungskontrollregionen, die monoallelische Genexpression beeinträchtigt", nl: "Verstoring van ouder-specifieke DNA-methyleringspatronen bij imprintingcontrolegebieden die monoallelische genexpressie beïnvloedt" },
        { en: "Random mutations in coding sequences only", es: "Mutaciones aleatorias solo en secuencias codificantes", de: "Zufällige Mutationen nur in kodierenden Sequenzen", nl: "Willekeurige mutaties alleen in coderende sequenties" },
        { en: "Chromosomal deletions affecting both alleles equally", es: "Deleciones cromosómicas que afectan ambos alelos igualmente", de: "Chromosomale Deletionen, die beide Allele gleich betreffen", nl: "Chromosomale deletes die beide allelen gelijk beïnvloeden" },
        { en: "Overexpression of all genes in the region", es: "Sobreexpresión de todos los genes en la región", de: "Überexpression aller Gene in der Region", nl: "Overexpressie van alle genen in de regio" }
      ],
      correct: 0,
      explanation: {
        en: "Genomic imprinting disorders result from abnormal DNA methylation at imprinting control regions (ICRs), disrupting the normal parent-of-origin specific expression patterns of imprinted genes, leading to diseases like Beckwith-Wiedemann and Prader-Willi syndromes.",
        es: "Los trastornos de impronta genómica resultan de metilación anormal del ADN en regiones de control de impronta (ICRs), disrumpiendo patrones normales de expresión específicos del origen parental.",
        de: "Genomische Prägungsstörungen resultieren aus abnormaler DNA-Methylierung an Prägungskontrollregionen (ICRs), die normale eltern-spezifische Expressionsmuster stören.",
        nl: "Genomische imprintingstoornissen resulteren uit abnormale DNA-methylering bij imprintingcontrolegebieden (ICRs), verstorend de normale ouder-specifieke expressiepatronen."
      }
    },
    {
      question: {
        en: "What is the role of lncRNAs in X-chromosome inactivation?",
        es: "¿Cuál es el papel de los lncRNAs en la inactivación del cromosoma X?",
        de: "Was ist die Rolle von lncRNAs in der X-Chromosom-Inaktivierung?",
        nl: "Wat is de rol van lncRNAs in X-chromosoom inactivatie?"
      },
      options: [
        { en: "XIST lncRNA coats the inactive X chromosome and recruits chromatin-modifying complexes for heterochromatin formation", es: "El lncRNA XIST recubre el cromosoma X inactivo y recluta complejos modificadores de cromatina para formación de heterocromatina", de: "XIST lncRNA bedeckt das inaktive X-Chromosom und rekrutiert Chromatin-modifizierende Komplexe für Heterochromatin-Bildung", nl: "XIST lncRNA bedekt het inactieve X-chromosoom en rekruteert chromatine-modificerende complexen voor heterochromatinevorming" },
        { en: "lncRNAs only regulate autosomal gene expression", es: "Los lncRNAs solo regulan la expresión génica autosómica", de: "lncRNAs regulieren nur autosomale Genexpression", nl: "lncRNAs reguleren alleen autosomale genexpressie" },
        { en: "Long non-coding RNAs activate both X chromosomes equally", es: "Los ARNs largos no codificantes activan ambos cromosomas X igualmente", de: "Lange nicht-kodierende RNAs aktivieren beide X-Chromosomen gleich", nl: "Lange niet-coderende RNAs activeren beide X-chromosomen gelijk" },
        { en: "lncRNAs have no role in epigenetic regulation", es: "Los lncRNAs no tienen papel en la regulación epigenética", de: "lncRNAs haben keine Rolle in epigenetischer Regulation", nl: "lncRNAs hebben geen rol in epigenetische regulatie" }
      ],
      correct: 0,
      explanation: {
        en: "The XIST (X-inactive specific transcript) long non-coding RNA is essential for X-chromosome inactivation, coating the future inactive X chromosome and recruiting Polycomb complexes and other chromatin modifiers to establish and maintain heterochromatin.",
        es: "El ARN largo no codificante XIST (transcrito específico X-inactivo) es esencial para la inactivación del cromosoma X, recubriendo el futuro cromosoma X inactivo.",
        de: "Die XIST (X-inaktiver spezifischer Transkript) lange nicht-kodierende RNA ist essentiell für X-Chromosom-Inaktivierung und rekrutiert Polycomb-Komplexe.",
        nl: "Het XIST (X-inactieve specifieke transcript) lange niet-coderende RNA is essentieel voor X-chromosoom inactivatie, bedekkend het toekomstige inactieve X-chromosoom."
      }
    }
  ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/genetics', level6);
  }
})();
