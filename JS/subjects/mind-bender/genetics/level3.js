(function() {
  const level3 = {
    name: {
      en: "Systems Genomics & Molecular Evolution",
      es: "Genómica de Sistemas y Evolución Molecular",
      de: "Systemgenomik & Molekulare Evolution",
      nl: "Systeemgenomics & Moleculaire Evolutie"
    },
    questions: [
      {
        question: {
          en: "What is the molecular mechanism of gene regulatory network evolution through cis-regulatory element divergence?",
          es: "¿Cuál es el mecanismo molecular de la evolución de redes reguladoras de genes a través de divergencia de elementos cis-reguladores?",
          de: "Was ist der molekulare Mechanismus der Genregulationsnetzwerk-Evolution durch cis-regulatorische Element-Divergenz?",
          nl: "Wat is het moleculaire mechanisme van gen regulatoire netwerk evolutie door cis-regulatoire element divergentie?"
        },
        options: [
          { en: "Transcription factor binding site mutations altering gene expression patterns without coding changes", es: "Mutaciones en sitios de unión de factores de transcripción alterando patrones de expresión génica sin cambios codificantes", de: "Transkriptionsfaktor-Bindungsstellen-Mutationen verändern Genexpressionsmuster ohne kodierende Änderungen", nl: "Transcriptiefactor bindingsplaats mutaties veranderend genexpressie patronen zonder coderende veranderingen" },
          { en: "Protein sequence evolution only", es: "Solo evolución de secuencia proteica", de: "Nur Proteinsequenz-Evolution", nl: "Alleen eiwit sequentie evolutie" },
          { en: "Chromosome rearrangements", es: "Reordenamientos cromosómicos", de: "Chromosomenumstellungen", nl: "Chromosoom herrangschikkingen" },
          { en: "Gene duplication events", es: "Eventos de duplicación génica", de: "Genduplikations-Ereignisse", nl: "Gen duplicatie gebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "Regulatory network evolution occurs primarily through changes in cis-regulatory elements (promoters, enhancers, silencers) that alter transcription factor binding and gene expression patterns, enabling phenotypic diversification without disrupting protein function.",
          es: "La evolución de redes regulatorias ocurre principalmente a través de cambios en elementos cis-reguladores (promotores, potenciadores, silenciadores) que alteran unión de factores de transcripción y patrones de expresión génica, permitiendo diversificación fenotípica sin interrumpir función proteica.",
          de: "Regulationsnetzwerk-Evolution erfolgt hauptsächlich durch Änderungen in cis-regulatorischen Elementen (Promotoren, Enhancer, Silencer), die Transkriptionsfaktor-Bindung und Genexpressionsmuster verändern und phänotypische Diversifikation ohne Störung der Proteinfunktion ermöglichen.",
          nl: "Regulatoir netwerk evolutie treedt hoofdzakelijk op door veranderingen in cis-regulatoire elementen (promotors, enhancers, silencers) die transcriptiefactor binding en genexpressie patronen veranderen, fenotypische diversificatie mogelijk makend zonder eiwit functie te verstoren."
        }
      },
      {
        question: {
          en: "Which mechanism describes horizontal gene transfer through conjugative plasmids in bacteria?",
          es: "¿Qué mecanismo describe la transferencia horizontal de genes a través de plásmidos conjugativos en bacterias?",
          de: "Welcher Mechanismus beschreibt horizontalen Gentransfer durch konjugative Plasmide in Bakterien?",
          nl: "Welk mechanisme beschrijft horizontale gentransfer door conjugatieve plasmiden in bacteriën?"
        },
        options: [
          { en: "Direct cell-to-cell DNA transfer via pilus-mediated conjugation with relaxosome complex mobilization", es: "Transferencia directa célula-a-célula de ADN vía conjugación mediada por pilus con movilización de complejo relaxosoma", de: "Direkter Zell-zu-Zell DNA-Transfer über Pilus-vermittelte Konjugation mit Relaxosome-Komplex-Mobilisierung", nl: "Directe cel-tot-cel DNA transfer via pilus-gemedieerde conjugatie met relaxosome complex mobilisatie" },
          { en: "Viral-mediated transduction", es: "Transducción mediada por virus", de: "Virus-vermittelte Transduktion", nl: "Virus-gemedieerde transductie" },
          { en: "DNA uptake from environment", es: "Captación de ADN del ambiente", de: "DNA-Aufnahme aus der Umwelt", nl: "DNA opname uit omgeving" },
          { en: "Chromosome integration", es: "Integración cromosómica", de: "Chromosomen-Integration", nl: "Chromosoom integratie" }
        ],
        correct: 0,
        explanation: {
          en: "Bacterial conjugation involves direct transfer of DNA through physical contact via conjugative pili, where relaxosome complexes process the DNA for transfer from donor to recipient cells, facilitating rapid spread of antibiotic resistance and other traits.",
          es: "La conjugación bacteriana involucra transferencia directa de ADN a través de contacto físico vía pili conjugativos, donde complejos relaxosoma procesan el ADN para transferencia de células donantes a receptoras, facilitando propagación rápida de resistencia a antibióticos y otros rasgos.",
          de: "Bakterielle Konjugation umfasst direkten DNA-Transfer durch physischen Kontakt über konjugative Pili, wobei Relaxosome-Komplexe die DNA für Transfer von Spender- zu Empfängerzellen verarbeiten und schnelle Ausbreitung von Antibiotikaresistenz und anderen Eigenschaften erleichtern.",
          nl: "Bacteriële conjugatie behelst directe DNA transfer door fysiek contact via conjugatieve pili, waarbij relaxosome complexen de DNA verwerken voor transfer van donor naar ontvanger cellen, snelle verspreiding van antibiotica resistentie en andere eigenschappen faciliterend."
        }
      },
      {
        question: {
          en: "What is the molecular basis of chromatin-mediated transcriptional memory through histone modifications?",
          es: "¿Cuál es la base molecular de la memoria transcripcional mediada por cromatina a través de modificaciones de histonas?",
          de: "Was ist die molekulare Basis des Chromatin-vermittelten transkriptionellen Gedächtnisses durch Histon-Modifikationen?",
          nl: "Wat is de moleculaire basis van chromatine-gemedieerd transcriptioneel geheugen door histon modificaties?"
        },
        options: [
          { en: "Heritable epigenetic marks like H3K4me3 and H3K27me3 maintaining gene expression states across cell divisions", es: "Marcas epigenéticas heredables como H3K4me3 y H3K27me3 manteniendo estados de expresión génica a través de divisiones celulares", de: "Vererbbare epigenetische Markierungen wie H3K4me3 und H3K27me3 erhalten Genexpressionszustände über Zellteilungen hinweg", nl: "Erfelijke epigenetische markeringen zoals H3K4me3 en H3K27me3 onderhoudend genexpressie toestanden over celdelingen heen" },
          { en: "DNA sequence mutations", es: "Mutaciones de secuencia de ADN", de: "DNA-Sequenz-Mutationen", nl: "DNA sequentie mutaties" },
          { en: "Cytoplasmic factors", es: "Factores citoplásmicos", de: "Zytoplasmatische Faktoren", nl: "Cytoplasmatische factoren" },
          { en: "mRNA stability changes", es: "Cambios de estabilidad de ARNm", de: "mRNA-Stabilitäts-Änderungen", nl: "mRNA stabiliteitsveranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Transcriptional memory relies on stable histone modifications that persist through DNA replication, with active marks (H3K4me3, H3K36me3) maintaining active gene states and repressive marks (H3K27me3, H3K9me3) maintaining silenced states across cell generations.",
          es: "La memoria transcripcional depende de modificaciones estables de histonas que persisten a través de replicación de ADN, con marcas activas (H3K4me3, H3K36me3) manteniendo estados génicos activos y marcas represivas (H3K27me3, H3K9me3) manteniendo estados silenciados a través de generaciones celulares.",
          de: "Transkriptionelles Gedächtnis beruht auf stabilen Histon-Modifikationen, die durch DNA-Replikation bestehen, wobei aktive Markierungen (H3K4me3, H3K36me3) aktive Genzustände aufrechterhalten und repressive Markierungen (H3K27me3, H3K9me3) stillgelegte Zustände über Zellgenerationen hinweg beibehalten.",
          nl: "Transcriptioneel geheugen berust op stabiele histon modificaties die aanhouden door DNA replicatie, met actieve markeringen (H3K4me3, H3K36me3) actieve gen toestanden onderhoudend en repressieve markeringen (H3K27me3, H3K9me3) stilgelegde toestanden over celgeneraties onderhoudend."
        }
      },
      {
        question: {
          en: "Which mechanism describes CRISPR-dCas9 epigenome editing for targeted gene regulation?",
          es: "¿Qué mecanismo describe la edición de epigenoma CRISPR-dCas9 para regulación génica dirigida?",
          de: "Welcher Mechanismus beschreibt CRISPR-dCas9-Epigenom-Editierung für gezielte Genregulation?",
          nl: "Welk mechanisme beschrijft CRISPR-dCas9 epigenoom editing voor gerichte genregulatie?"
        },
        options: [
          { en: "Catalytically dead Cas9 fused to epigenetic modifiers for locus-specific chromatin modifications", es: "Cas9 catalíticamente inactiva fusionada a modificadores epigenéticos para modificaciones de cromatina específicas de locus", de: "Katalytisch inaktive Cas9 fusioniert mit epigenetischen Modifikatoren für locus-spezifische Chromatin-Modifikationen", nl: "Katalytisch dode Cas9 gefuseerd aan epigenetische modificeermiddelen voor locus-specifieke chromatine modificaties" },
          { en: "DNA double-strand break formation", es: "Formación de roturas de doble cadena de ADN", de: "DNA-Doppelstrangbruch-Bildung", nl: "DNA dubbelstrengs breuk formatie" },
          { en: "Random chromatin alterations", es: "Alteraciones aleatorias de cromatina", de: "Zufällige Chromatin-Änderungen", nl: "Willekeurige chromatine veranderingen" },
          { en: "Transcriptional activation only", es: "Solo activación transcripcional", de: "Nur transkriptionelle Aktivierung", nl: "Alleen transcriptionele activatie" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-dCas9 systems use catalytically inactive Cas9 (dead Cas9) fused to epigenetic enzymes like DNMT3A, TET1, or histone modifying enzymes to precisely target specific loci for methylation, demethylation, or histone modifications without DNA cutting.",
          es: "Los sistemas CRISPR-dCas9 usan Cas9 catalíticamente inactiva (Cas9 muerta) fusionada a enzimas epigenéticas como DNMT3A, TET1 o enzimas modificadoras de histonas para dirigir precisamente loci específicos para metilación, desmetilación o modificaciones de histonas sin corte de ADN.",
          de: "CRISPR-dCas9-Systeme verwenden katalytisch inaktive Cas9 (tote Cas9) fusioniert mit epigenetischen Enzymen wie DNMT3A, TET1 oder Histon-modifizierenden Enzymen, um spezifische Loci präzise für Methylierung, Demethylierung oder Histon-Modifikationen ohne DNA-Schneiden zu targeten.",
          nl: "CRISPR-dCas9 systemen gebruiken katalytisch inactieve Cas9 (dode Cas9) gefuseerd aan epigenetische enzymen zoals DNMT3A, TET1 of histon modificerende enzymen om specifiek loci precies te targetten voor methylatie, demethylatie of histon modificaties zonder DNA knippen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of synthetic biology through standardized BioBrick assembly?",
          es: "¿Cuál es el mecanismo molecular de biología sintética a través de ensamble estandarizado BioBrick?",
          de: "Was ist der molekulare Mechanismus der synthetischen Biologie durch standardisierte BioBrick-Assemblierung?",
          nl: "Wat is het moleculaire mechanisme van synthetische biologie door gestandaardiseerde BioBrick assemblage?"
        },
        options: [
          { en: "Modular genetic parts with standardized interfaces enabling predictable biological circuit construction", es: "Partes genéticas modulares con interfaces estandarizadas permitiendo construcción predecible de circuitos biológicos", de: "Modulare genetische Teile mit standardisierten Schnittstellen ermöglichen vorhersagbare biologische Schaltkreiskonstruktion", nl: "Modulaire genetische onderdelen met gestandaardiseerde interfaces mogelijk makend voorspelbare biologische circuit constructie" },
          { en: "Random DNA recombination", es: "Recombinación aleatoria de ADN", de: "Zufällige DNA-Rekombination", nl: "Willekeurige DNA recombinatie" },
          { en: "Natural evolution processes", es: "Procesos de evolución natural", de: "Natürliche Evolutionsprozesse", nl: "Natuurlijke evolutie processen" },
          { en: "Protein folding optimization", es: "Optimización de plegamiento proteico", de: "Proteinfaltungs-Optimierung", nl: "Eiwit vouwing optimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "BioBrick standard biological parts use standardized prefix and suffix sequences for assembly-compatible genetic modules (promoters, RBS, coding sequences, terminators) that can be combined predictably to engineer synthetic biological systems and circuits.",
          es: "Las partes biológicas estándar BioBrick usan secuencias de prefijo y sufijo estandarizadas para módulos genéticos compatibles con ensamble (promotores, RBS, secuencias codificantes, terminadores) que pueden combinarse predeciblemente para diseñar sistemas y circuitos biológicos sintéticos.",
          de: "BioBrick-Standard-Biologische-Teile verwenden standardisierte Präfix- und Suffix-Sequenzen für assemblierungskompatible genetische Module (Promotoren, RBS, kodierende Sequenzen, Terminatoren), die vorhersagbar kombiniert werden können, um synthetische biologische Systeme und Schaltkreise zu konstruieren.",
          nl: "BioBrick standaard biologische onderdelen gebruiken gestandaardiseerde prefix en suffix sequenties voor assemblage-compatibele genetische modules (promotors, RBS, coderende sequenties, terminators) die voorspelbaar gecombineerd kunnen worden om synthetische biologische systemen en circuits te construeren."
        }
      },
      {
        question: {
          en: "Which molecular mechanism underlies pharmacogenomics through cytochrome P450 polymorphisms?",
          es: "¿Qué mecanismo molecular subyace a la farmacogenómica a través de polimorfismos de citocromo P450?",
          de: "Welcher molekulare Mechanismus liegt der Pharmakogenomik durch Cytochrom-P450-Polymorphismen zugrunde?",
          nl: "Welk moleculair mechanisme ligt ten grondslag aan farmacogenomics door cytochroom P450 polymorfismen?"
        },
        options: [
          { en: "Genetic variants affecting drug metabolizing enzyme activity and substrate specificity patterns", es: "Variantes genéticas afectando actividad de enzimas metabolizadoras de fármacos y patrones de especificidad de sustrato", de: "Genetische Varianten beeinflussen Arzneimittel-metabolisierende Enzymaktivität und Substrat-Spezifitätsmuster", nl: "Genetische varianten beïnvloedend geneesmiddel metaboliserende enzym activiteit en substraat specificiteitspatronen" },
          { en: "Universal drug responses", es: "Respuestas universales a fármacos", de: "Universelle Arzneimittelantworten", nl: "Universele geneesmiddel responsen" },
          { en: "Environmental factors only", es: "Solo factores ambientales", de: "Nur Umweltfaktoren", nl: "Alleen omgevingsfactoren" },
          { en: "Age-related metabolism", es: "Metabolismo relacionado con edad", de: "Altersbedingter Stoffwechsel", nl: "Leeftijd-gerelateerd metabolisme" }
        ],
        correct: 0,
        explanation: {
          en: "Pharmacogenomics relies on genetic polymorphisms in drug-metabolizing enzymes like CYP2D6, CYP2C19, and CYP3A4 that create poor, intermediate, extensive, or ultrarapid metabolizer phenotypes, dramatically affecting drug efficacy and toxicity.",
          es: "La farmacogenómica se basa en polimorfismos genéticos en enzimas metabolizadoras de fármacos como CYP2D6, CYP2C19 y CYP3A4 que crean fenotipos metabolizadores pobres, intermedios, extensivos o ultra-rápidos, afectando dramáticamente eficacia y toxicidad de fármacos.",
          de: "Pharmakogenomik beruht auf genetischen Polymorphismen in Arzneimittel-metabolisierenden Enzymen wie CYP2D6, CYP2C19 und CYP3A4, die schlechte, mittlere, extensive oder ultraschnelle Metabolisierer-Phänotypen schaffen und Arzneimittelwirksamkeit und -toxizität dramatisch beeinflussen.",
          nl: "Farmacogenomics berust op genetische polymorfismen in geneesmiddel-metaboliserende enzymen zoals CYP2D6, CYP2C19 en CYP3A4 die slechte, intermediaire, uitgebreide of ultrasnelle metaboliseerder fenotypes creëren, geneesmiddel werkzaamheid en toxiciteit dramatisch beïnvloedend."
        }
      },
      {
        question: {
          en: "What is the molecular basis of RNA-protein interaction networks in post-transcriptional regulation?",
          es: "¿Cuál es la base molecular de redes de interacción ARN-proteína en regulación post-transcripcional?",
          de: "Was ist die molekulare Basis von RNA-Protein-Interaktionsnetzwerken in der posttranskriptionellen Regulation?",
          nl: "Wat is de moleculaire basis van RNA-eiwit interactie netwerken in post-transcriptionele regulatie?"
        },
        options: [
          { en: "RNA-binding proteins recognizing specific sequence and structural motifs to coordinate mRNA fate decisions", es: "Proteínas de unión a ARN reconociendo motivos específicos de secuencia y estructurales para coordinar decisiones de destino de ARNm", de: "RNA-bindende Proteine erkennen spezifische Sequenz- und Strukturmotive zur Koordinierung von mRNA-Schicksalsentscheidungen", nl: "RNA-bindende eiwitten herkenning specifieke sequentie en structurele motieven om mRNA lot beslissingen te coördineren" },
          { en: "Random protein aggregation", es: "Agregación aleatoria de proteínas", de: "Zufällige Proteinaggregation", nl: "Willekeurige eiwit aggregatie" },
          { en: "Transcriptional control only", es: "Solo control transcripcional", de: "Nur transkriptionelle Kontrolle", nl: "Alleen transcriptionele controle" },
          { en: "DNA-protein interactions", es: "Interacciones ADN-proteína", de: "DNA-Protein-Interaktionen", nl: "DNA-eiwit interacties" }
        ],
        correct: 0,
        explanation: {
          en: "RNA-binding protein networks use sequence-specific and structure-specific recognition to regulate mRNA processing, localization, stability, and translation, with proteins like ELAV, NOVA, and hnRNPs forming complex regulatory circuits.",
          es: "Las redes de proteínas de unión a ARN usan reconocimiento específico de secuencia y estructura para regular procesamiento, localización, estabilidad y traducción de ARNm, con proteínas como ELAV, NOVA y hnRNPs formando circuitos regulatorios complejos.",
          de: "RNA-bindende Protein-Netzwerke verwenden sequenz-spezifische und struktur-spezifische Erkennung zur Regulation von mRNA-Verarbeitung, -Lokalisation, -Stabilität und -Translation, wobei Proteine wie ELAV, NOVA und hnRNPs komplexe regulatorische Schaltkreise bilden.",
          nl: "RNA-bindende eiwit netwerken gebruiken sequentie-specifieke en structuur-specifieke herkenning om mRNA verwerking, localisatie, stabiliteit en translatie te reguleren, met eiwitten zoals ELAV, NOVA en hnRNP's complexe regulatoire circuits vormend."
        }
      },
      {
        question: {
          en: "Which mechanism describes long non-coding RNA function through chromatin scaffolding complexes?",
          es: "¿Qué mecanismo describe la función de ARN largo no codificante a través de complejos de andamiaje de cromatina?",
          de: "Welcher Mechanismus beschreibt lange nicht-kodierende RNA-Funktion durch Chromatin-Gerüstkomplexe?",
          nl: "Welk mechanisme beschrijft lange niet-coderende RNA functie door chromatine steiger complexen?"
        },
        options: [
          { en: "lncRNAs serving as molecular scaffolds recruiting multiple chromatin-modifying complexes to target loci", es: "ARNlncs sirviendo como andamios moleculares reclutando múltiples complejos modificadores de cromatina a loci objetivo", de: "lncRNAs dienen als molekulare Gerüste und rekrutieren mehrere Chromatin-modifizierende Komplexe zu Ziel-Loci", nl: "lncRNA's dienend als moleculaire steigers rekruterend meerdere chromatine-modificerende complexen naar doel loci" },
          { en: "Protein coding function", es: "Función codificante de proteínas", de: "Protein-kodierende Funktion", nl: "Eiwit coderende functie" },
          { en: "mRNA processing only", es: "Solo procesamiento de ARNm", de: "Nur mRNA-Verarbeitung", nl: "Alleen mRNA verwerking" },
          { en: "Ribosome biogenesis", es: "Biogénesis de ribosomas", de: "Ribosom-Biogenese", nl: "Ribosoom biogenese" }
        ],
        correct: 0,
        explanation: {
          en: "Long non-coding RNAs like HOTAIR and Xist function as scaffolds that simultaneously bind multiple protein complexes (PRC2, LSD1, CoREST) to coordinate complex chromatin modifications at target genomic loci for gene regulation.",
          es: "Los ARNs largos no codificantes como HOTAIR y Xist funcionan como andamios que simultáneamente unen múltiples complejos proteicos (PRC2, LSD1, CoREST) para coordinar modificaciones complejas de cromatina en loci genómicos objetivo para regulación génica.",
          de: "Lange nicht-kodierende RNAs wie HOTAIR und Xist fungieren als Gerüste, die gleichzeitig mehrere Proteinkomplexe (PRC2, LSD1, CoREST) binden, um komplexe Chromatin-Modifikationen an genomischen Ziel-Loci für Genregulation zu koordinieren.",
          nl: "Lange niet-coderende RNA's zoals HOTAIR en Xist functioneren als steigers die gelijktijdig meerdere eiwit complexen (PRC2, LSD1, CoREST) binden om complexe chromatine modificaties bij doel genomische loci voor genregulatie te coördineren."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of single-cell genomics through droplet microfluidics?",
          es: "¿Cuál es el mecanismo molecular de genómica de célula única a través de microfluídica de gotas?",
          de: "Was ist der molekulare Mechanismus der Einzelzell-Genomik durch Tröpfchen-Mikrofluidik?",
          nl: "Wat is het moleculaire mechanisme van single-cell genomics door druppel microfluïdica?"
        },
        options: [
          { en: "Individual cell encapsulation in droplets enabling parallel single-cell RNA sequencing with cellular barcoding", es: "Encapsulación individual de células en gotas permitiendo secuenciación de ARN de célula única en paralelo con códigos de barras celulares", de: "Individuelle Zellverkapselung in Tröpfchen ermöglicht parallele Einzelzell-RNA-Sequenzierung mit zellulärer Barcoding", nl: "Individuele cel inkapseling in druppels mogelijk makend parallelle single-cell RNA sequencing met cellulaire barcoding" },
          { en: "Bulk cell analysis", es: "Análisis de células en masa", de: "Bulk-Zellanalyse", nl: "Bulk cel analyse" },
          { en: "Tissue-level sequencing", es: "Secuenciación a nivel de tejido", de: "Gewebe-Ebene-Sequenzierung", nl: "Weefsel-niveau sequencing" },
          { en: "Protein analysis only", es: "Solo análisis de proteínas", de: "Nur Proteinanalyse", nl: "Alleen eiwit analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Droplet microfluidics enables single-cell RNA sequencing by encapsulating individual cells in picoliter droplets with unique molecular identifiers, allowing massively parallel analysis of gene expression heterogeneity within cell populations.",
          es: "La microfluídica de gotas permite secuenciación de ARN de célula única encapsulando células individuales en gotas de picolitros con identificadores moleculares únicos, permitiendo análisis masivamente paralelo de heterogeneidad de expresión génica dentro de poblaciones celulares.",
          de: "Tröpfchen-Mikrofluidik ermöglicht Einzelzell-RNA-Sequenzierung durch Verkapselung einzelner Zellen in Pikoliter-Tröpfchen mit einzigartigen molekularen Identifikatoren und erlaubt massiv parallele Analyse der Genexpressions-Heterogenität innerhalb von Zellpopulationen.",
          nl: "Druppel microfluïdica maakt single-cell RNA sequencing mogelijk door individuele cellen in picoliter druppels in te kapselen met unieke moleculaire identificatoren, massaal parallelle analyse van genexpressie heterogeniteit binnen celpopulaties mogelijk makend."
        }
      },
      {
        question: {
          en: "Which mechanism describes proteome evolution through gene fusion and domain shuffling events?",
          es: "¿Qué mecanismo describe la evolución del proteoma a través de eventos de fusión génica y reorganización de dominios?",
          de: "Welcher Mechanismus beschreibt Proteom-Evolution durch Genfusions- und Domänen-Shuffling-Ereignisse?",
          nl: "Welk mechanisme beschrijft proteoom evolutie door gen fusie en domein shuffling gebeurtenissen?"
        },
        options: [
          { en: "Exon recombination creating chimeric proteins with novel domain combinations and functions", es: "Recombinación de exones creando proteínas quiméricas con combinaciones y funciones de dominios novedosas", de: "Exon-Rekombination schafft chimäre Proteine mit neuartigen Domänen-Kombinationen und -Funktionen", nl: "Exon recombinatie creërend chimere eiwitten met nieuwe domein combinaties en functies" },
          { en: "Point mutations only", es: "Solo mutaciones puntuales", de: "Nur Punktmutationen", nl: "Alleen puntmutaties" },
          { en: "Gene duplication alone", es: "Solo duplicación génica", de: "Nur Genduplikation", nl: "Alleen gen duplicatie" },
          { en: "Chromosomal inversions", es: "Inversiones cromosómicas", de: "Chromosomale Inversionen", nl: "Chromosomale inversies" }
        ],
        correct: 0,
        explanation: {
          en: "Protein evolution occurs through exon shuffling and gene fusion events that recombine functional domains between genes, creating multidomain proteins with new combinations of catalytic, binding, and regulatory functions.",
          es: "La evolución proteica ocurre a través de eventos de reorganización de exones y fusión génica que recombinan dominios funcionales entre genes, creando proteínas multidominio con nuevas combinaciones de funciones catalíticas, de unión y regulatorias.",
          de: "Protein-Evolution erfolgt durch Exon-Shuffling und Genfusions-Ereignisse, die funktionale Domänen zwischen Genen rekombinieren und Multidomänen-Proteine mit neuen Kombinationen katalytischer, bindender und regulatorischer Funktionen schaffen.",
          nl: "Eiwit evolutie treedt op door exon shuffling en gen fusie gebeurtenissen die functionele domeinen tussen genen recombineren, multidomein eiwitten creërend met nieuwe combinaties van katalytische, bindende en regulatoire functies."
        }
      },
      {
        question: {
          en: "What is the molecular basis of circadian genomics through clock-controlled gene networks?",
          es: "¿Cuál es la base molecular de la genómica circadiana a través de redes génicas controladas por reloj?",
          de: "Was ist die molekulare Basis der circadianen Genomik durch uhrgesteuerte Gennetzwerke?",
          nl: "Wat is de moleculaire basis van circadiane genomics door klok-gecontroleerde gen netwerken?"
        },
        options: [
          { en: "Rhythmic chromatin accessibility and transcription factor binding driving tissue-specific circadian gene expression", es: "Accesibilidad rítmica de cromatina y unión de factores de transcripción impulsando expresión génica circadiana específica de tejido", de: "Rhythmische Chromatin-Zugänglichkeit und Transkriptionsfaktor-Bindung treiben gewebespezifische circadiane Genexpression an", nl: "Ritmische chromatine toegankelijkheid en transcriptiefactor binding aandrijvend weefsel-specifieke circadiane genexpressie" },
          { en: "Constant gene expression", es: "Expresión génica constante", de: "Konstante Genexpression", nl: "Constante genexpressie" },
          { en: "Random transcriptional activity", es: "Actividad transcripcional aleatoria", de: "Zufällige transkriptionelle Aktivität", nl: "Willekeurige transcriptionele activiteit" },
          { en: "Metabolic regulation only", es: "Solo regulación metabólica", de: "Nur metabolische Regulation", nl: "Alleen metabolische regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Circadian genomics reveals that ~40% of the transcriptome oscillates in 24-hour cycles through rhythmic chromatin remodeling, transcription factor binding (CLOCK, BMAL1, REV-ERB), and tissue-specific clock-controlled gene networks.",
          es: "La genómica circadiana revela que ~40% del transcriptoma oscila en ciclos de 24 horas a través de remodelación rítmica de cromatina, unión de factores de transcripción (CLOCK, BMAL1, REV-ERB) y redes génicas controladas por reloj específicas de tejido.",
          de: "Circadiane Genomik zeigt, dass ~40% des Transkriptoms in 24-Stunden-Zyklen durch rhythmische Chromatin-Remodellierung, Transkriptionsfaktor-Bindung (CLOCK, BMAL1, REV-ERB) und gewebespezifische uhrgesteuerte Gennetzwerke oszilliert.",
          nl: "Circadiane genomics toont dat ~40% van het transcriptoom oscilleert in 24-uurs cycli door ritmische chromatine hermodellering, transcriptiefactor binding (CLOCK, BMAL1, REV-ERB) en weefsel-specifieke klok-gecontroleerde gen netwerken."
        }
      },
      {
        question: {
          en: "Which mechanism underlies genome-wide association studies (GWAS) through linkage disequilibrium mapping?",
          es: "¿Qué mecanismo subyace a los estudios de asociación de genoma completo (GWAS) a través de mapeo de desequilibrio de ligamiento?",
          de: "Welcher Mechanismus liegt genomweiten Assoziationsstudien (GWAS) durch Linkage-Disequilibrium-Mapping zugrunde?",
          nl: "Welk mechanisme ligt ten grondslag aan genome-wide association studies (GWAS) door linkage disequilibrium mapping?"
        },
        options: [
          { en: "Statistical association between SNP markers and phenotypes leveraging population-specific haplotype structure", es: "Asociación estadística entre marcadores SNP y fenotipos aprovechando estructura de haplotipo específica de población", de: "Statistische Assoziation zwischen SNP-Markern und Phänotypen nutzt populationsspezifische Haplotyp-Struktur", nl: "Statistische associatie tussen SNP markers en fenotypes gebruikmakend van populatie-specifieke haplotype structuur" },
          { en: "Direct causal variant identification", es: "Identificación directa de variante causal", de: "Direkte kausale Varianten-Identifikation", nl: "Directe causale variant identificatie" },
          { en: "Family-based linkage analysis", es: "Análisis de ligamiento basado en familias", de: "Familienbasierte Linkage-Analyse", nl: "Familie-gebaseerde linkage analyse" },
          { en: "Protein functional studies", es: "Estudios funcionales de proteínas", de: "Protein-Funktionsstudien", nl: "Eiwit functionele studies" }
        ],
        correct: 0,
        explanation: {
          en: "GWAS relies on linkage disequilibrium patterns where SNP markers are statistically associated with disease phenotypes due to co-inheritance with nearby causal variants, requiring population-specific haplotype maps for interpretation.",
          es: "GWAS se basa en patrones de desequilibrio de ligamiento donde marcadores SNP están estadísticamente asociados con fenotipos de enfermedad debido a co-herencia con variantes causales cercanas, requiriendo mapas de haplotipos específicos de población para interpretación.",
          de: "GWAS beruht auf Linkage-Disequilibrium-Mustern, wo SNP-Marker statistisch mit Krankheitsphänotypen assoziiert sind aufgrund von Co-Vererbung mit nahegelegenen kausalen Varianten und populationsspezifische Haplotyp-Karten für Interpretation erfordern.",
          nl: "GWAS berust op linkage disequilibrium patronen waarbij SNP markers statistisch geassocieerd zijn met ziekte fenotypes door co-erfelijkheid met nabijgelegen causale varianten, populatie-specifieke haplotype kaarten voor interpretatie vereisend."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of RNA velocity analysis in single-cell transcriptomics?",
          es: "¿Cuál es el mecanismo molecular del análisis de velocidad de ARN en transcriptómica de célula única?",
          de: "Was ist der molekulare Mechanismus der RNA-Geschwindigkeitsanalyse in der Einzelzell-Transkriptomik?",
          nl: "Wat is het moleculaire mechanisme van RNA velocity analyse in single-cell transcriptomics?"
        },
        options: [
          { en: "Spliced versus unspliced mRNA ratios predicting future cell states and differentiation trajectories", es: "Proporciones de ARNm empalmado versus no empalmado prediciendo estados celulares futuros y trayectorias de diferenciación", de: "Gespleißte versus ungespleißte mRNA-Verhältnisse vorhersagen zukünftige Zellzustände und Differenzierungs-Trajektorien", nl: "Gesplicete versus ongesplicete mRNA verhoudingen voorspellend toekomstige celtoestanden en differentiatie trajecten" },
          { en: "Protein expression levels", es: "Niveles de expresión proteica", de: "Protein-Expressionsniveaus", nl: "Eiwit expressie niveaus" },
          { en: "DNA methylation patterns", es: "Patrones de metilación del ADN", de: "DNA-Methylierungsmuster", nl: "DNA methylatie patronen" },
          { en: "Chromatin accessibility", es: "Accesibilidad de cromatina", de: "Chromatin-Zugänglichkeit", nl: "Chromatine toegankelijkheid" }
        ],
        correct: 0,
        explanation: {
          en: "RNA velocity leverages the temporal dynamics of pre-mRNA splicing by comparing unspliced (intronic) and spliced (exonic) reads to infer transcriptional activity and predict cellular differentiation trajectories in pseudotime.",
          es: "La velocidad de ARN aprovecha las dinámicas temporales del empalme de pre-ARNm comparando lecturas no empalmadas (intrónicas) y empalmadas (exónicas) para inferir actividad transcripcional y predecir trayectorias de diferenciación celular en pseudotiempo.",
          de: "RNA-Geschwindigkeit nutzt die zeitlichen Dynamiken des prä-mRNA-Spleißens durch Vergleich ungespleißter (intronischer) und gespleißter (exonischer) Reads zur Inferenz transkriptioneller Aktivität und Vorhersage zellulärer Differenzierungs-Trajektorien in Pseudozeit.",
          nl: "RNA velocity benut de temporele dynamiek van pre-mRNA splicing door ongesplicete (intronische) en gesplicete (exonische) reads te vergelijken om transcriptionele activiteit te infereren en cellulaire differentiatie trajecten in pseudotijd te voorspellen."
        }
      },
      {
        question: {
          en: "Which mechanism describes ancient genome duplications through paleopolyploidy events?",
          es: "¿Qué mecanismo describe duplicaciones genómicas antiguas a través de eventos de paleopoliploidía?",
          de: "Welcher Mechanismus beschreibt alte Genomduplikationen durch Paläopolyploidie-Ereignisse?",
          nl: "Welk mechanisme beschrijft oude genoom duplicaties door paleopolyploïdie gebeurtenissen?"
        },
        options: [
          { en: "Whole genome duplications followed by gene loss and subfunctionalization creating evolutionary novelty", es: "Duplicaciones completas del genoma seguidas por pérdida génica y subfuncionalización creando novedad evolutiva", de: "Vollständige Genomduplikationen gefolgt von Genverlust und Subfunktionalisierung schaffen evolutionäre Neuheit", nl: "Hele genoom duplicaties gevolgd door genverlies en subfunctionalisatie creërend evolutionaire nieuwheid" },
          { en: "Single gene duplications only", es: "Solo duplicaciones de genes únicos", de: "Nur Einzelgen-Duplikationen", nl: "Alleen enkele gen duplicaties" },
          { en: "Horizontal gene transfer", es: "Transferencia horizontal de genes", de: "Horizontaler Gentransfer", nl: "Horizontale gentransfer" },
          { en: "Chromosomal rearrangements", es: "Reordenamientos cromosómicos", de: "Chromosomenumstellungen", nl: "Chromosoom herrangschikkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Paleopolyploidy involves ancient whole-genome duplication events that created polyploid ancestors, followed by gene loss, neofunctionalization, and subfunctionalization, contributing significantly to evolutionary complexity in plants and some animals.",
          es: "La paleopoliploidía involucra eventos antiguos de duplicación completa del genoma que crearon ancestros poliploides, seguidos por pérdida génica, neofuncionalización y subfuncionalización, contribuyendo significativamente a complejidad evolutiva en plantas y algunos animales.",
          de: "Paläopolyploidie umfasst alte Vollgenom-Duplikations-Ereignisse, die polyploide Vorfahren schufen, gefolgt von Genverlust, Neofunktionalisierung und Subfunktionalisierung, was erheblich zur evolutionären Komplexität in Pflanzen und einigen Tieren beiträgt.",
          nl: "Paleopolyploïdie behelst oude hele-genoom duplicatie gebeurtenissen die polyploïde voorouders creeerden, gevolgd door genverlies, neofunctionalisatie en subfunctionalisatie, significant bijdragend aan evolutionaire complexiteit in planten en enkele dieren."
        }
      },
      {
        question: {
          en: "What is the molecular basis of spatial transcriptomics through in situ sequencing technologies?",
          es: "¿Cuál es la base molecular de la transcriptómica espacial a través de tecnologías de secuenciación in situ?",
          de: "Was ist die molekulare Basis der räumlichen Transkriptomik durch in situ Sequenzierungs-Technologien?",
          nl: "Wat is de moleculaire basis van ruimtelijke transcriptomics door in situ sequencing technologieën?"
        },
        options: [
          { en: "Spatially-barcoded capture arrays or tissue-embedded sequencing preserving cellular positional information", es: "Matrices de captura con códigos de barras espaciales o secuenciación embebida en tejido preservando información posicional celular", de: "Räumlich-barcoded Capture-Arrays oder gewebeeingebettete Sequenzierung erhält zelluläre Positionsinformationen", nl: "Ruimtelijk-gebarcodeerde capture arrays of weefsel-ingesloten sequencing behoudend cellulaire positionele informatie" },
          { en: "Bulk tissue sequencing", es: "Secuenciación de tejido en masa", de: "Bulk-Gewebe-Sequenzierung", nl: "Bulk weefsel sequencing" },
          { en: "Cell sorting methods", es: "Métodos de clasificación celular", de: "Zellsortierungs-Methoden", nl: "Cel sorteer methoden" },
          { en: "Protein immunostaining", es: "Inmunotinción de proteínas", de: "Protein-Immunfärbung", nl: "Eiwit immunokleuring" }
        ],
        correct: 0,
        explanation: {
          en: "Spatial transcriptomics uses technologies like 10x Visium with spatially-barcoded spots or in situ sequencing methods that maintain the relationship between gene expression profiles and tissue architecture for understanding cellular organization and communication.",
          es: "La transcriptómica espacial usa tecnologías como 10x Visium con puntos con códigos de barras espaciales o métodos de secuenciación in situ que mantienen la relación entre perfiles de expresión génica y arquitectura de tejido para entender organización y comunicación celular.",
          de: "Räumliche Transkriptomik nutzt Technologien wie 10x Visium mit räumlich-barcodierten Spots oder in situ Sequenzierungs-Methoden, die die Beziehung zwischen Genexpressionsprofilen und Gewebearchitektur für das Verständnis zellulärer Organisation und Kommunikation aufrechterhalten.",
          nl: "Ruimtelijke transcriptomics gebruikt technologieën zoals 10x Visium met ruimtelijk-gebarcodeerde spots of in situ sequencing methoden die de relatie tussen genexpressie profielen en weefsel architectuur onderhouden voor begrip van cellulaire organisatie en communicatie."
        }
      },
      {
        question: {
          en: "Which mechanism describes enhancer-promoter communication through chromosomal looping domains?",
          es: "¿Qué mecanismo describe la comunicación potenciador-promotor a través de dominios de bucle cromosómico?",
          de: "Welcher Mechanismus beschreibt Enhancer-Promotor-Kommunikation durch chromosomale Looping-Domänen?",
          nl: "Welk mechanisme beschrijft enhancer-promotor communicatie door chromosomale looping domeinen?"
        },
        options: [
          { en: "Topologically associating domains (TADs) organizing three-dimensional chromatin architecture for regulatory contacts", es: "Dominios de asociación topológica (TADs) organizando arquitectura tridimensional de cromatina para contactos regulatorios", de: "Topologisch assoziierende Domänen (TADs) organisieren dreidimensionale Chromatin-Architektur für regulatorische Kontakte", nl: "Topologisch associërende domeinen (TAD's) organiserend driedimensionale chromatine architectuur voor regulatoire contacten" },
          { en: "Linear DNA proximity only", es: "Solo proximidad lineal de ADN", de: "Nur lineare DNA-Nähe", nl: "Alleen lineaire DNA nabijheid" },
          { en: "Random chromatin interactions", es: "Interacciones aleatorias de cromatina", de: "Zufällige Chromatin-Interaktionen", nl: "Willekeurige chromatine interacties" },
          { en: "Histone modifications alone", es: "Solo modificaciones de histonas", de: "Nur Histon-Modifikationen", nl: "Alleen histon modificaties" }
        ],
        correct: 0,
        explanation: {
          en: "Topologically associating domains (TADs) are megabase-scale chromatin structures bounded by CTCF and cohesin that organize enhancer-promoter interactions within constrained three-dimensional nuclear domains, enabling precise gene regulation.",
          es: "Los dominios de asociación topológica (TADs) son estructuras de cromatina de escala de megabases delimitadas por CTCF y cohesina que organizan interacciones potenciador-promotor dentro de dominios nucleares tridimensionales restringidos, permitiendo regulación génica precisa.",
          de: "Topologisch assoziierende Domänen (TADs) sind megabasen-skalige Chromatin-Strukturen, die von CTCF und Cohesin begrenzt werden und Enhancer-Promotor-Interaktionen innerhalb begrenzter dreidimensionaler Kerndomänen organisieren und präzise Genregulation ermöglichen.",
          nl: "Topologisch associërende domeinen (TAD's) zijn megabase-schaal chromatine structuren begrensd door CTCF en cohesin die enhancer-promotor interacties organiseren binnen beperkte driedimensionale nucleaire domeinen, precieze genregulatie mogelijk makend."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of optogenetic control through light-activated transcription factors?",
          es: "¿Cuál es el mecanismo molecular del control optogenético a través de factores de transcripción activados por luz?",
          de: "Was ist der molekulare Mechanismus der optogenetischen Kontrolle durch lichtaktivierte Transkriptionsfaktoren?",
          nl: "Wat is het moleculaire mechanisme van optogenetische controle door licht-geactiveerde transcriptiefactoren?"
        },
        options: [
          { en: "Light-induced protein dimerization or conformational changes enabling temporal control of gene expression", es: "Dimerización proteica inducida por luz o cambios conformacionales permitiendo control temporal de expresión génica", de: "Licht-induzierte Protein-Dimerisierung oder konformationelle Änderungen ermöglichen zeitliche Kontrolle der Genexpression", nl: "Licht-geïnduceerde eiwit dimerisatie of conformationele veranderingen mogelijk makend temporele controle van genexpressie" },
          { en: "Direct DNA binding by light", es: "Unión directa a ADN por luz", de: "Direkte DNA-Bindung durch Licht", nl: "Directe DNA binding door licht" },
          { en: "Heat-activated transcription", es: "Transcripción activada por calor", de: "Hitze-aktivierte Transkription", nl: "Warmte-geactiveerde transcriptie" },
          { en: "Chemical inducer systems", es: "Sistemas de inductores químicos", de: "Chemische Induktor-Systeme", nl: "Chemische inductor systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Optogenetic transcription systems use light-responsive proteins like OptoFos/OptoJun or CRY2/CIB1 that undergo light-induced dimerization or conformational changes to control transcriptional activator assembly and gene expression with precise temporal resolution.",
          es: "Los sistemas de transcripción optogenética usan proteínas responsivas a luz como OptoFos/OptoJun o CRY2/CIB1 que experimentan dimerización inducida por luz o cambios conformacionales para controlar ensamble de activadores transcripcionales y expresión génica con resolución temporal precisa.",
          de: "Optogenetische Transkriptionssysteme verwenden lichtresponsive Proteine wie OptoFos/OptoJun oder CRY2/CIB1, die lichtinduzierte Dimerisierung oder konformationelle Änderungen durchlaufen, um transkriptionelle Aktivator-Assemblierung und Genexpression mit präziser zeitlicher Auflösung zu kontrollieren.",
          nl: "Optogenetische transcriptie systemen gebruiken licht-responsieve eiwitten zoals OptoFos/OptoJun of CRY2/CIB1 die licht-geïnduceerde dimerisatie of conformationele veranderingen ondergaan om transcriptionele activator assemblage en genexpressie met precieze temporele resolutie te controleren."
        }
      },
      {
        question: {
          en: "Which mechanism underlies RNA editing diversity through ADAR enzyme specificity?",
          es: "¿Qué mecanismo subyace a la diversidad de edición de ARN a través de la especificidad de enzimas ADAR?",
          de: "Welcher Mechanismus liegt der RNA-Editierungs-Diversität durch ADAR-Enzym-Spezifität zugrunde?",
          nl: "Welk mechanisme ligt ten grondslag aan RNA editing diversiteit door ADAR enzym specificiteit?"
        },
        options: [
          { en: "Tissue-specific ADAR expression and substrate recognition creating RNA sequence diversity and protein isoforms", es: "Expresión específica de tejido de ADAR y reconocimiento de sustrato creando diversidad de secuencia de ARN e isoformas proteicas", de: "Gewebespezifische ADAR-Expression und Substrat-Erkennung schaffen RNA-Sequenz-Diversität und Protein-Isoformen", nl: "Weefsel-specifieke ADAR expressie en substraat herkenning creërend RNA sequentie diversiteit en eiwit isovormen" },
          { en: "Random RNA modifications", es: "Modificaciones aleatorias de ARN", de: "Zufällige RNA-Modifikationen", nl: "Willekeurige RNA modificaties" },
          { en: "DNA sequence changes", es: "Cambios en secuencia de ADN", de: "DNA-Sequenzänderungen", nl: "DNA sequentie veranderingen" },
          { en: "Splicing variations", es: "Variaciones de empalme", de: "Spleißvariationen", nl: "Splicing variaties" }
        ],
        correct: 0,
        explanation: {
          en: "ADAR enzymes (ADAR1, ADAR2, ADAR3) exhibit tissue-specific expression and substrate preferences for A-to-I editing in double-stranded RNA regions, creating transcriptomic and proteomic diversity particularly important in nervous system function.",
          es: "Las enzimas ADAR (ADAR1, ADAR2, ADAR3) exhiben expresión específica de tejido y preferencias de sustrato para edición A-a-I en regiones de ARN de doble cadena, creando diversidad transcriptómica y proteómica particularmente importante en función del sistema nervioso.",
          de: "ADAR-Enzyme (ADAR1, ADAR2, ADAR3) zeigen gewebespezifische Expression und Substrat-Präferenzen für A-zu-I-Editierung in doppelsträngigen RNA-Regionen und schaffen transkriptomische und proteomische Diversität, die besonders wichtig für Nervensystem-Funktion ist.",
          nl: "ADAR enzymen (ADAR1, ADAR2, ADAR3) vertonen weefsel-specifieke expressie en substraat voorkeuren voor A-naar-I editing in dubbelstrengs RNA regio's, transcriptomische en proteomische diversiteit creërend bijzonder belangrijk in zenuwstelsel functie."
        }
      },
      {
        question: {
          en: "What is the molecular basis of multi-omics integration in systems biology approaches?",
          es: "¿Cuál es la base molecular de la integración multi-ómica en enfoques de biología de sistemas?",
          de: "Was ist die molekulare Basis der Multi-Omics-Integration in systembiologischen Ansätzen?",
          nl: "Wat is de moleculaire basis van multi-omics integratie in systeembiologie benaderingen?"
        },
        options: [
          { en: "Computational integration of genomics, transcriptomics, proteomics, and metabolomics data for systems-level understanding", es: "Integración computacional de datos genómicos, transcriptómicos, proteómicos y metabolómicos para entendimiento a nivel de sistemas", de: "Rechnerische Integration von Genomik-, Transkriptomik-, Proteomik- und Metabolomik-Daten für systemisches Verständnis", nl: "Computationele integratie van genomics, transcriptomics, proteomics en metabolomics data voor systeem-niveau begrip" },
          { en: "Single data type analysis", es: "Análisis de un solo tipo de datos", de: "Einzeldatentyp-Analyse", nl: "Enkele datatype analyse" },
          { en: "Protein analysis only", es: "Solo análisis de proteínas", de: "Nur Proteinanalyse", nl: "Alleen eiwit analyse" },
          { en: "Metabolite measurement alone", es: "Solo medición de metabolitos", de: "Nur Metabolit-Messung", nl: "Alleen metaboliet meting" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-omics integration combines genomic variants, transcriptomic expression, proteomic abundance, and metabolomic profiles to model biological networks and understand complex phenotypes through systems-level computational approaches.",
          es: "La integración multi-ómica combina variantes genómicas, expresión transcriptómica, abundancia proteómica y perfiles metabolómicos para modelar redes biológicas y entender fenotipos complejos a través de enfoques computacionales a nivel de sistemas.",
          de: "Multi-Omics-Integration kombiniert genomische Varianten, transkriptomische Expression, proteomische Häufigkeit und metabolomische Profile zur Modellierung biologischer Netzwerke und zum Verständnis komplexer Phänotypen durch systemische rechnerische Ansätze.",
          nl: "Multi-omics integratie combineert genomische varianten, transcriptomische expressie, proteomische abundantie en metabolomische profielen om biologische netwerken te modelleren en complexe fenotypes te begrijpen door systeem-niveau computationele benaderingen."
        }
      },
      {
        question: {
          en: "Which mechanism describes liquid-liquid phase separation in gene regulation and nuclear organization?",
          es: "¿Qué mecanismo describe la separación de fases líquido-líquido en regulación génica y organización nuclear?",
          de: "Welcher Mechanismus beschreibt Flüssig-Flüssig-Phasentrennung in Genregulation und nuklearer Organisation?",
          nl: "Welk mechanisme beschrijft vloeistof-vloeistof fase scheiding in genregulatie en nucleaire organisatie?"
        },
        options: [
          { en: "Intrinsically disordered protein domains forming membraneless organelles that concentrate transcriptional machinery", es: "Dominios proteicos intrínsecamente desordenados formando organelos sin membrana que concentran maquinaria transcripcional", de: "Intrinsisch ungeordnete Protein-Domänen bilden membranlose Organellen, die transkriptionelle Maschinerie konzentrieren", nl: "Intrinsiek wanordelijke eiwit domeinen vormend membraan-loze organellen die transcriptionele machinerie concentreren" },
          { en: "Membrane-bound compartments", es: "Compartimentos unidos a membrana", de: "Membrangebundene Kompartimente", nl: "Membraan-gebonden compartimenten" },
          { en: "Crystalline protein structures", es: "Estructuras proteicas cristalinas", de: "Kristalline Proteinstrukturen", nl: "Kristallijne eiwit structuren" },
          { en: "Lipid bilayer formation", es: "Formación de bicapa lipídica", de: "Lipiddoppelschicht-Bildung", nl: "Lipide dubbellaag formatie" }
        ],
        correct: 0,
        explanation: {
          en: "Liquid-liquid phase separation involves proteins with intrinsically disordered regions forming dynamic, membraneless nuclear condensates like transcriptional hubs and splicing speckles that concentrate regulatory factors for enhanced activity.",
          es: "La separación de fases líquido-líquido involucra proteínas con regiones intrínsecamente desordenadas formando condensados nucleares dinámicos sin membrana como centros transcripcionales y motas de empalme que concentran factores regulatorios para actividad mejorada.",
          de: "Flüssig-Flüssig-Phasentrennung umfasst Proteine mit intrinsisch ungeordneten Regionen, die dynamische, membranlose nukleäre Kondensate wie transkriptionelle Hubs und Splicing-Speckles bilden, die regulatorische Faktoren für verstärkte Aktivität konzentrieren.",
          nl: "Vloeistof-vloeistof fase scheiding behelst eiwitten met intrinsiek wanordelijke regio's vormend dynamische, membraan-loze nucleaire condensaten zoals transcriptionele hubs en splicing speckles die regulatoire factoren concentreren voor verhoogde activiteit."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of immune system genomics through V(D)J recombination diversity?",
          es: "¿Cuál es el mecanismo molecular de la genómica del sistema inmune a través de la diversidad de recombinación V(D)J?",
          de: "Was ist der molekulare Mechanismus der Immunsystem-Genomik durch V(D)J-Rekombinations-Diversität?",
          nl: "Wat is het moleculaire mechanisme van immuunsysteem genomics door V(D)J recombinatie diversiteit?"
        },
        options: [
          { en: "RAG-mediated somatic recombination generating billions of unique antibody and T-cell receptor combinations", es: "Recombinación somática mediada por RAG generando billones de combinaciones únicas de anticuerpos y receptores de células T", de: "RAG-vermittelte somatische Rekombination erzeugt Milliarden einzigartiger Antikörper- und T-Zell-Rezeptor-Kombinationen", nl: "RAG-gemedieerde somatische recombinatie generend miljarden unieke antilichaam en T-cel receptor combinaties" },
          { en: "Germline diversity only", es: "Solo diversidad germinal", de: "Nur Keimbahn-Diversität", nl: "Alleen germline diversiteit" },
          { en: "Point mutations alone", es: "Solo mutaciones puntuales", de: "Nur Punktmutationen", nl: "Alleen puntmutaties" },
          { en: "Gene duplication events", es: "Eventos de duplicación génica", de: "Genduplikations-Ereignisse", nl: "Gen duplicatie gebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "V(D)J recombination uses RAG1/RAG2 enzymes to somatically recombine variable (V), diversity (D), and joining (J) gene segments in developing lymphocytes, creating over 10^11 possible antibody and T-cell receptor specificities for antigen recognition.",
          es: "La recombinación V(D)J usa enzimas RAG1/RAG2 para recombinar somáticamente segmentos génicos variables (V), de diversidad (D) y de unión (J) en linfocitos en desarrollo, creando más de 10^11 especificidades posibles de anticuerpos y receptores de células T para reconocimiento de antígenos.",
          de: "V(D)J-Rekombination verwendet RAG1/RAG2-Enzyme zur somatischen Rekombination variabler (V), Diversitäts- (D) und Verbindungs- (J) Gensegmente in sich entwickelnden Lymphozyten und schafft über 10^11 mögliche Antikörper- und T-Zell-Rezeptor-Spezifitäten für Antigen-Erkennung.",
          nl: "V(D)J recombinatie gebruikt RAG1/RAG2 enzymen om somatisch variabele (V), diversiteit (D) en verbindende (J) gen segmenten te recombineren in ontwikkelende lymfocyten, over 10^11 mogelijke antilichaam en T-cel receptor specificiteiten creërend voor antigeen herkenning."
        }
      },
      {
        question: {
          en: "Which mechanism describes transgenerational epigenetic inheritance through germline reprogramming escape?",
          es: "¿Qué mecanismo describe la herencia epigenética transgeneracional a través del escape de reprogramación de línea germinal?",
          de: "Welcher Mechanismus beschreibt transgenerationelle epigenetische Vererbung durch Keimbahn-Reprogrammierungs-Umgehung?",
          nl: "Welk mechanisme beschrijft transgenerationele epigenetische erfelijkheid door germline herprogrammering ontsnapping?"
        },
        options: [
          { en: "Incomplete erasure of DNA methylation and chromatin modifications during primordial germ cell reprogramming", es: "Borrado incompleto de metilación de ADN y modificaciones de cromatina durante reprogramación de células germinales primordiales", de: "Unvollständige Löschung von DNA-Methylierung und Chromatin-Modifikationen während primordialer Keimzell-Reprogrammierung", nl: "Onvolledige uitwissing van DNA methylatie en chromatine modificaties tijdens primordiale germcel herprogrammering" },
          { en: "Direct DNA sequence inheritance", es: "Herencia directa de secuencia de ADN", de: "Direkte DNA-Sequenz-Vererbung", nl: "Directe DNA sequentie erfelijkheid" },
          { en: "Cytoplasmic factor transmission", es: "Transmisión de factores citoplásmicos", de: "Zytoplasmatische Faktor-Übertragung", nl: "Cytoplasmatische factor transmissie" },
          { en: "Protein inheritance patterns", es: "Patrones de herencia proteica", de: "Protein-Vererbungsmuster", nl: "Eiwit erfelijkheidspatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Transgenerational epigenetic inheritance occurs when some epigenetic marks escape the extensive reprogramming that occurs in primordial germ cells, allowing environmentally-induced chromatin states to be transmitted across generations.",
          es: "La herencia epigenética transgeneracional ocurre cuando algunas marcas epigenéticas escapan de la reprogramación extensiva que ocurre en células germinales primordiales, permitiendo que estados de cromatina inducidos ambientalmente se transmitan a través de generaciones.",
          de: "Transgenerationelle epigenetische Vererbung tritt auf, wenn einige epigenetische Markierungen der umfangreichen Reprogrammierung entgehen, die in primordialen Keimzellen auftritt, und umweltinduzierte Chromatin-Zustände über Generationen übertragen werden können.",
          nl: "Transgenerationele epigenetische erfelijkheid treedt op wanneer enkele epigenetische markeringen ontsnappen aan de uitgebreide herprogrammering die voorkomt in primordiale germcellen, omgevings-geïnduceerde chromatine toestanden mogelijk makend om over generaties te worden overgedragen."
        }
      },
      {
        question: {
          en: "What is the molecular basis of cellular reprogramming through transcription factor-induced pluripotency?",
          es: "¿Cuál es la base molecular de la reprogramación celular a través de pluripotencia inducida por factores de transcripción?",
          de: "Was ist die molekulare Basis der zellulären Reprogrammierung durch Transkriptionsfaktor-induzierte Pluripotenz?",
          nl: "Wat is de moleculaire basis van cellulaire herprogrammering door transcriptiefactor-geïnduceerde pluripotentie?"
        },
        options: [
          { en: "Yamanaka factors (Oct4, Sox2, Klf4, c-Myc) overriding somatic cell identity to establish embryonic-like state", es: "Factores Yamanaka (Oct4, Sox2, Klf4, c-Myc) superando identidad de células somáticas para establecer estado similar a embrionario", de: "Yamanaka-Faktoren (Oct4, Sox2, Klf4, c-Myc) überwinden somatische Zellidentität zur Etablierung embryonaler-ähnlicher Zustände", nl: "Yamanaka factoren (Oct4, Sox2, Klf4, c-Myc) overwinnend somatische cel identiteit om embryonaal-achtige toestand te vestigen" },
          { en: "Random gene activation", es: "Activación génica aleatoria", de: "Zufällige Genaktivierung", nl: "Willekeurige genactivatie" },
          { en: "Cell fusion processes", es: "Procesos de fusión celular", de: "Zellfusions-Prozesse", nl: "Cel fusie processen" },
          { en: "Mitochondrial reprogramming", es: "Reprogramación mitocondrial", de: "Mitochondriale Reprogrammierung", nl: "Mitochondriale herprogrammering" }
        ],
        correct: 0,
        explanation: {
          en: "Induced pluripotent stem cells (iPSCs) are generated by overexpressing four transcription factors (Oct4, Sox2, Klf4, c-Myc) that reset the epigenetic landscape and gene expression networks to reprogram differentiated somatic cells back to an embryonic-like pluripotent state.",
          es: "Las células madre pluripotentes inducidas (iPSCs) se generan sobreexpresando cuatro factores de transcripción (Oct4, Sox2, Klf4, c-Myc) que resetean el paisaje epigenético y redes de expresión génica para reprogramar células somáticas diferenciadas de vuelta a un estado pluripotente similar a embrionario.",
          de: "Induzierte pluripotente Stammzellen (iPSCs) werden durch Überexpression von vier Transkriptionsfaktoren (Oct4, Sox2, Klf4, c-Myc) erzeugt, die die epigenetische Landschaft und Genexpressionsnetzwerke zurücksetzen, um differenzierte somatische Zellen zu einem embryonalen-ähnlichen pluripotenten Zustand zu reprogrammieren.",
          nl: "Geïnduceerde pluripotente stamcellen (iPSC's) worden gegenereerd door overexpressie van vier transcriptiefactoren (Oct4, Sox2, Klf4, c-Myc) die het epigenetische landschap en genexpressie netwerken resetten om gedifferentieerde somatische cellen terug te programmeren naar een embryonaal-achtige pluripotente toestand."
        }
      },
      {
        question: {
          en: "Which molecular mechanism underlies cancer genomics through tumor suppressor gene inactivation?",
          es: "¿Qué mecanismo molecular subyace a la genómica del cáncer a través de la inactivación de genes supresores de tumores?",
          de: "Welcher molekulare Mechanismus liegt der Krebsgenomik durch Tumorsuppressor-Gen-Inaktivierung zugrunde?",
          nl: "Welk moleculair mechanisme ligt ten grondslag aan kanker genomics door tumor suppressor gen inactivatie?"
        },
        options: [
          { en: "Knudson's two-hit hypothesis requiring biallelic loss of function through mutations and epigenetic silencing", es: "Hipótesis de dos golpes de Knudson requiriendo pérdida de función bialélica a través de mutaciones y silenciamiento epigenético", de: "Knudsons Zwei-Treffer-Hypothese erfordert biallelischen Funktionsverlust durch Mutationen und epigenetische Stilllegung", nl: "Knudson's twee-hit hypothese vereisend biallelisch functieverlies door mutaties en epigenetische silencing" },
          { en: "Oncogene amplification only", es: "Solo amplificación de oncogenes", de: "Nur Onkogen-Amplifikation", nl: "Alleen oncogen amplificatie" },
          { en: "Single mutation events", es: "Eventos de mutación única", de: "Einzelmutations-Ereignisse", nl: "Enkele mutatie gebeurtenissen" },
          { en: "Viral integration effects", es: "Efectos de integración viral", de: "Virale Integrations-Effekte", nl: "Virale integratie effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Knudson's two-hit hypothesis explains that tumor suppressor genes like RB1, TP53, and BRCA1/2 require inactivation of both alleles through various mechanisms including point mutations, deletions, chromosomal rearrangements, or epigenetic silencing to contribute to cancer development.",
          es: "La hipótesis de dos golpes de Knudson explica que los genes supresores de tumores como RB1, TP53 y BRCA1/2 requieren inactivación de ambos alelos a través de varios mecanismos incluyendo mutaciones puntuales, deleciones, reordenamientos cromosómicos o silenciamiento epigenético para contribuir al desarrollo del cáncer.",
          de: "Knudsons Zwei-Treffer-Hypothese erklärt, dass Tumorsuppressor-Gene wie RB1, TP53 und BRCA1/2 die Inaktivierung beider Allele durch verschiedene Mechanismen einschließlich Punktmutationen, Deletionen, chromosomalen Umstellungen oder epigenetischer Stilllegung erfordern, um zur Krebsentwicklung beizutragen.",
          nl: "Knudson's twee-hit hypothese verklaart dat tumor suppressor genen zoals RB1, TP53 en BRCA1/2 inactivatie van beide allelen vereisen door verschillende mechanismen inclusief puntmutaties, deleties, chromosomale herrangschikkingen of epigenetische silencing om bij te dragen aan kankerontwikkeling."
        }
      },
      {
        question: {
          en: "What is the molecular basis of chromatin memory in epigenetic inheritance?",
          es: "¿Cuál es la base molecular de la memoria de cromatina en herencia epigenética?",
          de: "Was ist die molekulare Basis des Chromatin-Gedächtnisses in epigenetischer Vererbung?",
          nl: "Wat is de moleculaire basis van chromatine geheugen in epigenetische overerving?"
        },
        options: [
          { en: "Polycomb/Trithorax protein complexes maintaining histone modifications through DNA replication", es: "Complejos proteicos Polycomb/Trithorax manteniendo modificaciones de histonas a través de replicación de ADN", de: "Polycomb/Trithorax-Proteinkomplexe erhalten Histon-Modifikationen durch DNA-Replikation", nl: "Polycomb/Trithorax eiwit complexen onderhoudend histon modificaties door DNA replicatie" },
          { en: "Direct DNA methylation only", es: "Solo metilación directa de ADN", de: "Nur direkte DNA-Methylierung", nl: "Alleen directe DNA methylatie" },
          { en: "RNA interference mechanisms", es: "Mecanismos de interferencia de ARN", de: "RNA-Interferenz-Mechanismen", nl: "RNA interferentie mechanismen" },
          { en: "Protein synthesis regulation", es: "Regulación de síntesis proteica", de: "Proteinsynthese-Regulation", nl: "Eiwit synthese regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Chromatin memory involves Polycomb and Trithorax protein complexes that maintain repressive and active histone marks respectively through cell divisions, ensuring stable inheritance of gene expression states.",
          es: "La memoria de cromatina involucra complejos proteicos Polycomb y Trithorax que mantienen marcas de histonas represivas y activas respectivamente a través de divisiones celulares, asegurando herencia estable de estados de expresión génica.",
          de: "Chromatin-Gedächtnis umfasst Polycomb- und Trithorax-Proteinkomplexe, die repressive bzw. aktive Histon-Markierungen durch Zellteilungen aufrechterhalten und stabile Vererbung von Genexpressionszuständen gewährleisten.",
          nl: "Chromatine geheugen behelst Polycomb en Trithorax eiwit complexen die respectievelijk repressieve en actieve histon markeringen onderhouden door celdelingen, stabiele overerving van genexpressie toestanden verzekerd."
        }
      },
      {
        question: {
          en: "How does CRISPR-dCas9 enable epigenome editing without DNA cleavage?",
          es: "¿Cómo permite CRISPR-dCas9 la edición del epigenoma sin corte de ADN?",
          de: "Wie ermöglicht CRISPR-dCas9 Epigenom-Bearbeitung ohne DNA-Spaltung?",
          nl: "Hoe maakt CRISPR-dCas9 epigenoom bewerking mogelijk zonder DNA klieven?"
        },
        options: [
          { en: "Catalytically dead Cas9 fused to epigenetic modifiers targets specific loci for chromatin modification", es: "Cas9 catalíticamente muerto fusionado a modificadores epigenéticos dirige loci específicos para modificación de cromatina", de: "Katalytisch totes Cas9, fusioniert mit epigenetischen Modifikatoren, zielt auf spezifische Loci für Chromatin-Modifikation", nl: "Katalytisch dood Cas9 gefuseerd aan epigenetische modificeerders richt specifieke loci voor chromatine modificatie" },
          { en: "Enhanced DNA cutting precision", es: "Precisión mejorada de corte de ADN", de: "Verbesserte DNA-Schnitt-Präzision", nl: "Verbeterde DNA snijprecisie" },
          { en: "Increased protein expression", es: "Expresión proteica aumentada", de: "Erhöhte Proteinexpression", nl: "Verhoogde eiwit expressie" },
          { en: "Direct gene knockout", es: "Knockout génico directo", de: "Direkter Gen-Knockout", nl: "Directe gen knockout" }
        ],
        correct: 0,
        explanation: {
          en: "dCas9 (dead Cas9) lacks endonuclease activity but retains DNA binding capability. When fused to epigenetic modifiers like DNMT3L or TET2, it can precisely target and modify chromatin states at specific genomic loci.",
          es: "dCas9 (Cas9 muerto) carece de actividad endonucleasa pero retiene capacidad de unión a ADN. Cuando se fusiona a modificadores epigenéticos como DNMT3L o TET2, puede dirigir y modificar precisamente estados de cromatina en loci genómicos específicos.",
          de: "dCas9 (totes Cas9) fehlt Endonuklease-Aktivität, behält aber DNA-Bindungsfähigkeit. Wenn mit epigenetischen Modifikatoren wie DNMT3L oder TET2 fusioniert, kann es Chromatin-Zustände an spezifischen genomischen Loci präzise anvisieren und modifizieren.",
          nl: "dCas9 (dood Cas9) mist endonuclease activiteit maar behoudt DNA bindingsvermogen. Wanneer gefuseerd met epigenetische modificeerders zoals DNMT3L of TET2, kan het chromatine toestanden op specifieke genomische loci precies targeten en modificeren."
        }
      },
      {
        question: {
          en: "What drives synthetic biology's orthogonal genetic circuits in engineered organisms?",
          es: "¿Qué impulsa los circuitos genéticos ortogonales de biología sintética en organismos modificados?",
          de: "Was treibt orthogonale Genkreise der synthetischen Biologie in entwickelten Organismen an?",
          nl: "Wat drijft synthetische biologie's orthogonale genetische circuits in gemodificeerde organismen aan?"
        },
        options: [
          { en: "Non-natural amino acids and xenobiological components isolated from host cellular machinery", es: "Aminoácidos no naturales y componentes xenobiológicos aislados de maquinaria celular huésped", de: "Unnatürliche Aminosäuren und xenobiologische Komponenten, isoliert von Wirts-Zellmaschinerie", nl: "Niet-natuurlijke aminozuren en xenobiologische componenten geïsoleerd van gastheer cellulaire machinerie" },
          { en: "Standard protein synthesis", es: "Síntesis proteica estándar", de: "Standard-Proteinsynthese", nl: "Standaard eiwit synthese" },
          { en: "Natural metabolic pathways", es: "Vías metabólicas naturales", de: "Natürliche Stoffwechselwege", nl: "Natuurlijke metabole paden" },
          { en: "Conventional genetic codes", es: "Códigos genéticos convencionales", de: "Konventionelle genetische Codes", nl: "Conventionele genetische codes" }
        ],
        correct: 0,
        explanation: {
          en: "Orthogonal circuits use non-natural components like amber suppressor tRNAs charging non-canonical amino acids, ensuring synthetic genetic programs operate independently of host biology and prevent unwanted interactions.",
          es: "Circuitos ortogonales usan componentes no naturales como tRNAs supresores amber cargando aminoácidos no canónicos, asegurando que programas genéticos sintéticos operen independientemente de biología huésped y prevengan interacciones no deseadas.",
          de: "Orthogonale Schaltkreise verwenden unnatürliche Komponenten wie Amber-Suppressor-tRNAs, die nicht-kanonische Aminosäuren laden, wodurch synthetische genetische Programme unabhängig von der Wirtsbiologie arbeiten und unerwünschte Interaktionen verhindern.",
          nl: "Orthogonale circuits gebruiken niet-natuurlijke componenten zoals amber suppressor tRNAs ladend niet-canonieke aminozuren, verzekerd dat synthetische genetische programma's onafhankelijk van gastheer biologie opereren en ongewenste interacties voorkomen."
        }
      },
      {
        question: {
          en: "Which pharmacogenomic mechanism explains warfarin dosing variability through CYP2C9 polymorphisms?",
          es: "¿Qué mecanismo farmacogenómico explica variabilidad de dosificación de warfarina a través de polimorfismos CYP2C9?",
          de: "Welcher pharmakogenomische Mechanismus erklärt Warfarin-Dosierungsvariabilität durch CYP2C9-Polymorphismen?",
          nl: "Welk farmacogenomisch mechanisme verklaart warfarine dosering variabiliteit door CYP2C9 polymorfismen?"
        },
        options: [
          { en: "Cytochrome P450 enzyme variants alter S-warfarin metabolism kinetics affecting anticoagulation response", es: "Variantes de enzima citocromo P450 alteran cinética de metabolismo de S-warfarina afectando respuesta anticoagulante", de: "Cytochrom-P450-Enzymvarianten verändern S-Warfarin-Stoffwechselkinetik und beeinflussen Antikoagulations-Antwort", nl: "Cytochroom P450 enzym varianten veranderen S-warfarine metabolisme kinetiek beïnvloedend anticoagulatie respons" },
          { en: "Direct protein binding changes", es: "Cambios directos de unión proteica", de: "Direkte Proteinbindungsänderungen", nl: "Directe eiwit binding veranderingen" },
          { en: "Gene expression regulation only", es: "Solo regulación de expresión génica", de: "Nur Genexpressionsregulation", nl: "Alleen genexpressie regulatie" },
          { en: "Chromosome structural variants", es: "Variantes estructurales cromosómicas", de: "Chromosomale Strukturvarianten", nl: "Chromosomale structurele varianten" }
        ],
        correct: 0,
        explanation: {
          en: "CYP2C9 genetic variants (*2, *3) reduce enzyme activity for S-warfarin metabolism, leading to prolonged drug half-life and increased bleeding risk, requiring personalized dosing based on genotype.",
          es: "Variantes genéticas CYP2C9 (*2, *3) reducen actividad enzimática para metabolismo de S-warfarina, llevando a vida media prolongada del fármaco y mayor riesgo de sangrado, requiriendo dosificación personalizada basada en genotipo.",
          de: "CYP2C9-Genvarianten (*2, *3) reduzieren Enzymaktivität für S-Warfarin-Stoffwechsel, führen zu verlängerter Arzneimittel-Halbwertszeit und erhöhtem Blutungsrisiko, erfordern personalisierte Dosierung basierend auf Genotyp.",
          nl: "CYP2C9 genetische varianten (*2, *3) verminderen enzym activiteit voor S-warfarine metabolisme, leidend tot verlengde medicijn halfwaardetijd en verhoogd bloedingsrisico, vereisend gepersonaliseerde dosering gebaseerd op genotype."
        }
      },
      {
        question: {
          en: "How do RNA-protein granules regulate translation through liquid-liquid phase separation?",
          es: "¿Cómo regulan los gránulos ARN-proteína la traducción a través de separación de fases líquido-líquido?",
          de: "Wie regulieren RNA-Protein-Granula Translation durch Flüssig-Flüssig-Phasentrennung?",
          nl: "Hoe reguleren RNA-eiwit korrels translatie door vloeistof-vloeistof fase scheiding?"
        },
        options: [
          { en: "Intrinsically disordered regions create membraneless organelles concentrating ribonucleoprotein complexes", es: "Regiones intrínsecamente desordenadas crean orgánulos sin membrana concentrando complejos ribonucleoproteicos", de: "Intrinsisch ungeordnete Regionen schaffen membranlose Organellen, die Ribonukleoprotein-Komplexe konzentrieren", nl: "Intrinsiek wanordelijke regio's creëren membraanloze organellen concentreerd ribonucleoproteïne complexen" },
          { en: "Direct mRNA degradation", es: "Degradación directa de mRNA", de: "Direkte mRNA-Degradation", nl: "Directe mRNA degradatie" },
          { en: "Ribosome assembly changes", es: "Cambios de ensamblaje ribosomal", de: "Ribosom-Assemblierungsänderungen", nl: "Ribosoom assemblage veranderingen" },
          { en: "DNA replication control", es: "Control de replicación de ADN", de: "DNA-Replikationskontrolle", nl: "DNA replicatie controle" }
        ],
        correct: 0,
        explanation: {
          en: "RNA-protein granules like P-bodies and stress granules form through liquid-liquid phase separation of proteins with intrinsically disordered regions, creating dynamic compartments that sequester and regulate mRNA translation.",
          es: "Gránulos ARN-proteína como P-bodies y gránulos de estrés se forman a través de separación de fases líquido-líquido de proteínas con regiones intrínsecamente desordenadas, creando compartimentos dinámicos que secuestran y regulan traducción de mRNA.",
          de: "RNA-Protein-Granula wie P-Bodies und Stress-Granula bilden sich durch Flüssig-Flüssig-Phasentrennung von Proteinen mit intrinsisch ungeordneten Regionen und schaffen dynamische Kompartimente, die mRNA-Translation sequestrieren und regulieren.",
          nl: "RNA-eiwit korrels zoals P-bodies en stress korrels vormen door vloeistof-vloeistof fase scheiding van eiwitten met intrinsiek wanordelijke regio's, dynamische compartimenten creërend die mRNA translatie sequestreren en reguleren."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables lncRNA XIST to inactivate the X chromosome?",
          es: "¿Qué mecanismo molecular permite al lncRNA XIST inactivar el cromosoma X?",
          de: "Welcher molekulare Mechanismus ermöglicht lncRNA XIST, das X-Chromosom zu inaktivieren?",
          nl: "Welk moleculair mechanisme stelt lncRNA XIST in staat het X chromosoom te inactiveren?"
        },
        options: [
          { en: "RNA scaffolding recruits chromatin modifying complexes for chromosome-wide heterochromatin formation", es: "Andamiaje de ARN recluta complejos modificadores de cromatina para formación de heterocromatina en todo el cromosoma", de: "RNA-Gerüstbildung rekrutiert Chromatin-modifizierende Komplexe für chromosomweite Heterochromatin-Bildung", nl: "RNA steigerbouw rekruteert chromatine modificerende complexen voor chromosoom-brede heterochromatine vorming" },
          { en: "Direct DNA binding and cleavage", es: "Unión directa y corte de ADN", de: "Direkte DNA-Bindung und -Spaltung", nl: "Directe DNA binding en klieven" },
          { en: "Protein synthesis inhibition", es: "Inhibición de síntesis proteica", de: "Proteinsynthese-Hemmung", nl: "Eiwit synthese inhibitie" },
          { en: "Chromosome translocation", es: "Translocación cromosómica", de: "Chromosomentranslokation", nl: "Chromosoom translocatie" }
        ],
        correct: 0,
        explanation: {
          en: "XIST lncRNA acts as a molecular scaffold, coating the inactive X chromosome and recruiting Polycomb repressive complexes, DNMT3A, and other chromatin modifiers to establish stable gene silencing across the entire chromosome.",
          es: "El lncRNA XIST actúa como andamio molecular, cubriendo el cromosoma X inactivo y reclutando complejos represivos Polycomb, DNMT3A y otros modificadores de cromatina para establecer silenciamiento génico estable a través de todo el cromosoma.",
          de: "XIST lncRNA wirkt als molekulares Gerüst, überzieht das inaktive X-Chromosom und rekrutiert Polycomb-repressive Komplexe, DNMT3A und andere Chromatin-Modifikatoren, um stabiles Gen-Silencing über das gesamte Chromosom zu etablieren.",
          nl: "XIST lncRNA werkt als moleculair steiger, bedekkend het inactieve X chromosoom en rekruterend Polycomb repressieve complexen, DNMT3A en andere chromatine modificeerders om stabiele gen stillegging over het gehele chromosoom te vestigen."
        }
      },
      {
        question: {
          en: "How does single-cell RNA sequencing reveal cellular heterogeneity in tissues?",
          es: "¿Cómo revela la secuenciación de ARN de célula única la heterogeneidad celular en tejidos?",
          de: "Wie enthüllt Einzelzell-RNA-Sequenzierung zelluläre Heterogenität in Geweben?",
          nl: "Hoe onthult single-cel RNA sequencing cellulaire heterogeniteit in weefsels?"
        },
        options: [
          { en: "Droplet microfluidics isolates individual cells for transcriptome profiling revealing distinct expression signatures", es: "Microfluídica de gotas aísla células individuales para perfilado de transcriptoma revelando firmas de expresión distintas", de: "Tröpfchen-Mikrofluidik isoliert einzelne Zellen für Transkriptom-Profiling und enthüllt unterschiedliche Expressionssignaturen", nl: "Druppel microfluïdica isoleert individuele cellen voor transcriptoom profilering onthullend onderscheidende expressie handtekeningen" },
          { en: "Bulk tissue homogenization", es: "Homogeneización de tejido en masa", de: "Bulk-Gewebe-Homogenisierung", nl: "Bulk weefsel homogenisatie" },
          { en: "Protein immunostaining only", es: "Solo inmunomarcaje proteico", de: "Nur Protein-Immunfärbung", nl: "Alleen eiwit immunokleuring" },
          { en: "DNA methylation analysis", es: "Análisis de metilación de ADN", de: "DNA-Methylierungsanalyse", nl: "DNA methylatie analyse" }
        ],
        correct: 0,
        explanation: {
          en: "scRNA-seq uses droplet microfluidics to encapsulate individual cells with barcoded beads, enabling transcriptome analysis of thousands of single cells simultaneously and revealing previously hidden cellular subpopulations and states.",
          es: "scRNA-seq usa microfluídica de gotas para encapsular células individuales con perlas codificadas, permitiendo análisis de transcriptoma de miles de células individuales simultáneamente y revelando subpoblaciones y estados celulares previamente ocultos.",
          de: "scRNA-seq verwendet Tröpfchen-Mikrofluidik, um einzelne Zellen mit Barcode-Perlen zu verkapseln, ermöglicht Transkriptom-Analyse von Tausenden einzelner Zellen gleichzeitig und enthüllt zuvor verborgene zelluläre Subpopulationen und Zustände.",
          nl: "scRNA-seq gebruikt druppel microfluïdica om individuele cellen te inkapselen met barcode kralen, transcriptoom analyse van duizenden enkele cellen tegelijkertijd mogelijk makend en voorheen verborgen cellulaire subpopulaties en toestanden onthullend."
        }
      },
      {
        question: {
          en: "What drives protein domain evolution through exon shuffling mechanisms?",
          es: "¿Qué impulsa la evolución de dominios proteicos a través de mecanismos de reorganización de exones?",
          de: "Was treibt Proteindomänen-Evolution durch Exon-Shuffling-Mechanismen an?",
          nl: "Wat drijft eiwit domein evolutie aan door exon shuffling mechanismen?"
        },
        options: [
          { en: "Intronic recombination events exchange functional domains between genes creating novel protein architectures", es: "Eventos de recombinación intrónica intercambian dominios funcionales entre genes creando arquitecturas proteicas nuevas", de: "Intronische Rekombinationsereignisse tauschen funktionale Domänen zwischen Genen aus und schaffen neue Proteinarchitekturen", nl: "Intronische recombinatie gebeurtenissen wisselen functionele domeinen tussen genen uit creërend nieuwe eiwit architecturen" },
          { en: "Point mutations only", es: "Solo mutaciones puntuales", de: "Nur Punktmutationen", nl: "Alleen punt mutaties" },
          { en: "Gene duplication events", es: "Eventos de duplicación génica", de: "Genduplikations-Ereignisse", nl: "Gen duplicatie gebeurtenissen" },
          { en: "Chromosomal inversions", es: "Inversiones cromosómicas", de: "Chromosomale Inversionen", nl: "Chromosomale inversies" }
        ],
        correct: 0,
        explanation: {
          en: "Exon shuffling occurs through recombination in intronic regions, allowing functional protein domains to be exchanged between genes, creating evolutionary innovation through modular domain rearrangement.",
          es: "La reorganización de exones ocurre a través de recombinación en regiones intrónicas, permitiendo que dominios proteicos funcionales se intercambien entre genes, creando innovación evolutiva a través de reordenamiento modular de dominios.",
          de: "Exon-Shuffling tritt durch Rekombination in intronischen Regionen auf, ermöglicht funktionalen Proteindomänen zwischen Genen ausgetauscht zu werden und schafft evolutionäre Innovation durch modulare Domänen-Neuanordnung.",
          nl: "Exon shuffling treedt op door recombinatie in intronische regio's, functionele eiwit domeinen tussen genen uitgewisseld worden mogelijk makend, evolutionaire innovatie creërend door modulaire domein herrangschikking."
        }
      },
      {
        question: {
          en: "How do circadian clock genes regulate genome-wide transcription timing?",
          es: "¿Cómo regulan los genes del reloj circadiano el tiempo de transcripción a nivel del genoma?",
          de: "Wie regulieren zirkadiane Uhrgene genomweites Transkriptions-Timing?",
          nl: "Hoe reguleren circadiaanse klok genen genoom-breed transcriptie timing?"
        },
        options: [
          { en: "CLOCK-BMAL1 transcriptional oscillators create chromatin accessibility rhythms through cyclic enhancer activation", es: "Osciladores transcripcionales CLOCK-BMAL1 crean ritmos de accesibilidad de cromatina a través de activación cíclica de potenciadores", de: "CLOCK-BMAL1 Transkriptions-Oszillatoren schaffen Chromatin-Zugänglichkeits-Rhythmen durch zyklische Enhancer-Aktivierung", nl: "CLOCK-BMAL1 transcriptionele oscillatoren creëren chromatine toegankelijkheid ritmes door cyclische enhancer activatie" },
          { en: "Direct DNA methylation cycles", es: "Ciclos directos de metilación de ADN", de: "Direkte DNA-Methylierungszyklen", nl: "Directe DNA methylatie cycli" },
          { en: "Histone synthesis regulation", es: "Regulación de síntesis de histonas", de: "Histon-Synthese-Regulation", nl: "Histon synthese regulatie" },
          { en: "Chromosome condensation cycles", es: "Ciclos de condensación cromosómica", de: "Chromosomen-Kondensationszyklen", nl: "Chromosoom condensatie cycli" }
        ],
        correct: 0,
        explanation: {
          en: "CLOCK-BMAL1 heterodimers function as core oscillators, binding to E-box sequences and creating 24-hour cycles of chromatin remodeling that coordinate temporal gene expression across metabolic and physiological pathways.",
          es: "Heterodímeros CLOCK-BMAL1 funcionan como osciladores centrales, uniéndose a secuencias E-box y creando ciclos de 24 horas de remodelación de cromatina que coordinan expresión génica temporal a través de vías metabólicas y fisiológicas.",
          de: "CLOCK-BMAL1-Heterodimere fungieren als zentrale Oszillatoren, binden an E-Box-Sequenzen und schaffen 24-Stunden-Zyklen der Chromatin-Umgestaltung, die zeitliche Genexpression über metabolische und physiologische Wege koordinieren.",
          nl: "CLOCK-BMAL1 heterodimeren functioneren als kern oscillatoren, bindend aan E-box sequenties en 24-uurs cycli van chromatine hermodellering creërend die temporele genexpressie over metabole en fysiologische paden coördineren."
        }
      },
      {
        question: {
          en: "What mechanism enables GWAS to identify disease-associated genetic variants?",
          es: "¿Qué mecanismo permite a GWAS identificar variantes genéticas asociadas a enfermedades?",
          de: "Welcher Mechanismus ermöglicht GWAS, krankheitsassoziierte genetische Varianten zu identifizieren?",
          nl: "Welk mechanisme stelt GWAS in staat ziekte-geassocieerde genetische varianten te identificeren?"
        },
        options: [
          { en: "Linkage disequilibrium patterns across populations enable statistical association testing of SNP markers with phenotypes", es: "Patrones de desequilibrio de ligamiento a través de poblaciones permiten pruebas de asociación estadística de marcadores SNP con fenotipos", de: "Kopplungsungleichgewichts-Muster über Populationen ermöglichen statistische Assoziationstests von SNP-Markern mit Phänotypen", nl: "Linkage disequilibrium patronen over populaties stellen statistische associatie testen van SNP markers met fenotypes mogelijk" },
          { en: "Direct gene sequencing only", es: "Solo secuenciación directa de genes", de: "Nur direkte Gensequenzierung", nl: "Alleen directe gen sequencing" },
          { en: "Protein expression analysis", es: "Análisis de expresión proteica", de: "Proteinexpressionsanalyse", nl: "Eiwit expressie analyse" },
          { en: "Chromosomal karyotyping", es: "Cariotipado cromosómico", de: "Chromosomales Karyotyping", nl: "Chromosomale karyotypering" }
        ],
        correct: 0,
        explanation: {
          en: "GWAS leverages linkage disequilibrium between SNPs and causal variants to perform population-scale statistical tests, identifying genomic regions where genetic variation correlates with disease susceptibility across large cohorts.",
          es: "GWAS aprovecha el desequilibrio de ligamiento entre SNPs y variantes causales para realizar pruebas estadísticas a escala poblacional, identificando regiones genómicas donde variación genética se correlaciona con susceptibilidad a enfermedades a través de grandes cohortes.",
          de: "GWAS nutzt Kopplungsungleichgewicht zwischen SNPs und kausalen Varianten für populationsweite statistische Tests und identifiziert genomische Regionen, wo genetische Variation mit Krankheitsanfälligkeit über große Kohorten korreliert.",
          nl: "GWAS benut linkage disequilibrium tussen SNPs en causale varianten om populatie-schaal statistische testen uit te voeren, genomische regio's identificerend waar genetische variatie correleert met ziekte gevoeligheid over grote cohorten."
        }
      },
      {
        question: {
          en: "How does RNA velocity analysis reveal cellular differentiation dynamics?",
          es: "¿Cómo revela el análisis de velocidad de ARN la dinámica de diferenciación celular?",
          de: "Wie enthüllt RNA-Geschwindigkeitsanalyse zelluläre Differenzierungsdynamik?",
          nl: "Hoe onthult RNA snelheids analyse cellulaire differentiatie dynamiek?"
        },
        options: [
          { en: "Spliced/unspliced mRNA ratios predict future transcriptional states in single cells revealing lineage trajectories", es: "Proporciones de mRNA empalmado/no empalmado predicen estados transcripcionales futuros en células individuales revelando trayectorias de linaje", de: "Gespleißte/ungespleißte mRNA-Verhältnisse sagen zukünftige Transkriptionszustände in einzelnen Zellen vorher und enthüllen Abstammungsverläufe", nl: "Gesplitste/ongesplitste mRNA verhoudingen voorspellen toekomstige transcriptionele toestanden in enkele cellen lijnage trajecten onthullend" },
          { en: "Protein degradation rates", es: "Tasas de degradación proteica", de: "Proteinabbau-Raten", nl: "Eiwit degradatie snelheden" },
          { en: "DNA replication timing", es: "Tiempo de replicación de ADN", de: "DNA-Replikations-Timing", nl: "DNA replicatie timing" },
          { en: "Chromosome segregation patterns", es: "Patrones de segregación cromosómica", de: "Chromosomen-Segregationsmuster", nl: "Chromosoom segregatie patronen" }
        ],
        correct: 0,
        explanation: {
          en: "RNA velocity uses the ratio of spliced to unspliced transcripts to infer transcriptional kinetics, enabling prediction of cellular future states and reconstruction of developmental trajectories from single-cell snapshots.",
          es: "La velocidad de ARN usa la proporción de transcritos empalmados a no empalmados para inferir cinética transcripcional, permitiendo predicción de estados futuros celulares y reconstrucción de trayectorias de desarrollo desde instantáneas de células individuales.",
          de: "RNA-Geschwindigkeit verwendet das Verhältnis von gespleißten zu ungespleißten Transkripten, um Transkriptionskinetik zu schließen, ermöglicht Vorhersage zukünftiger Zellzustände und Rekonstruktion von Entwicklungsverläufen aus Einzelzell-Momentaufnahmen.",
          nl: "RNA snelheid gebruikt de verhouding van gesplitste tot ongesplitste transcripten om transcriptionele kinetiek af te leiden, voorspelling van cellulaire toekomstige toestanden en reconstructie van ontwikkelings trajecten uit single-cel momentopnames mogelijk makend."
        }
      },
      {
        question: {
          en: "What evolutionary process explains paleopolyploidy signatures in plant genomes?",
          es: "¿Qué proceso evolutivo explica las firmas de paleopoliploidía en genomas de plantas?",
          de: "Welcher evolutionäre Prozess erklärt Paleopolyploidy-Signaturen in Pflanzengenomen?",
          nl: "Welk evolutionair proces verklaart paleopolyploïdie handtekeningen in planten genomen?"
        },
        options: [
          { en: "Ancient whole genome duplications followed by selective gene loss and chromosomal rearrangements over millions of years", es: "Duplicaciones antiguas de genoma completo seguidas por pérdida selectiva de genes y reordenamientos cromosómicos durante millones de años", de: "Uralte Ganzgenom-Duplikationen gefolgt von selektiver Genverlusten und chromosomalen Umstellungen über Millionen Jahre", nl: "Oude hele genoom duplicaties gevolgd door selectief gen verlies en chromosomale herrangschikkingen over miljoenen jaren" },
          { en: "Recent point mutations", es: "Mutaciones puntuales recientes", de: "Kürzliche Punktmutationen", nl: "Recente punt mutaties" },
          { en: "Transposon insertions", es: "Inserciones de transposones", de: "Transposon-Insertionen", nl: "Transposon inserties" },
          { en: "Viral integrations", es: "Integraciones virales", de: "Virus-Integrationen", nl: "Virale integraties" }
        ],
        correct: 0,
        explanation: {
          en: "Paleopolyploidy results from ancient whole genome duplication events, visible today as syntenic gene blocks and 4:1 synonymous substitution ratios, indicating species underwent polyploidy followed by extensive gene loss and chromosome restructuring.",
          es: "La paleopoliploidía resulta de eventos antiguos de duplicación de genoma completo, visible hoy como bloques de genes sintónicos y proporciones de sustitución sinónima 4:1, indicando que especies sufrieron poliploidía seguida por pérdida extensiva de genes y reestructuración cromosómica.",
          de: "Paleopolyploidy resultiert aus uralten Ganzgenom-Duplikationsereignissen, heute sichtbar als syntenische Genblöcke und 4:1 synonyme Substitutionsverhältnisse, zeigend dass Arten Polyploidy erfuhren gefolgt von extensivem Genverlust und Chromosomen-Umstrukturierung.",
          nl: "Paleopolyploïdie resulteert uit oude hele genoom duplicatie gebeurtenissen, vandaag zichtbaar als syntenische gen blokken en 4:1 synonyme substitutie verhoudingen, indicerend dat soorten polyploïdie ondergingen gevolgd door extensief gen verlies en chromosoom herstructurering."
        }
      },
      {
        question: {
          en: "How do spatial transcriptomics technologies map gene expression in tissue architecture?",
          es: "¿Cómo mapean las tecnologías de transcriptómica espacial la expresión génica en arquitectura tisular?",
          de: "Wie kartieren räumliche Transkriptomik-Technologien Genexpression in Gewebearchitektur?",
          nl: "Hoe brengen ruimtelijke transcriptomics technologieën genexpressie in weefsel architectuur in kaart?"
        },
        options: [
          { en: "Barcoded capture arrays and in situ sequencing preserve spatial coordinates while profiling transcriptomes", es: "Arrays de captura codificados y secuenciación in situ preservan coordenadas espaciales mientras perfilan transcriptomas", de: "Barcode-Capture-Arrays und In-situ-Sequenzierung bewahren räumliche Koordinaten während Transkriptom-Profiling", nl: "Barcode capture arrays en in situ sequencing behouden ruimtelijke coördinaten terwijl transcriptomen geprofileerd worden" },
          { en: "Single cell dissociation only", es: "Solo disociación de células individuales", de: "Nur Einzelzell-Dissoziation", nl: "Alleen single cel dissociatie" },
          { en: "Protein immunofluorescence", es: "Inmunofluorescencia proteica", de: "Protein-Immunfluoreszenz", nl: "Eiwit immunofluorescentie" },
          { en: "DNA methylation mapping", es: "Mapeo de metilación de ADN", de: "DNA-Methylierungs-Kartierung", nl: "DNA methylatie kartering" }
        ],
        correct: 0,
        explanation: {
          en: "Spatial transcriptomics uses tissue sections on barcoded arrays or direct RNA detection methods to maintain positional information, enabling analysis of gene expression patterns within native tissue architecture and cellular neighborhoods.",
          es: "La transcriptómica espacial usa secciones de tejido en arrays codificados o métodos directos de detección de ARN para mantener información posicional, permitiendo análisis de patrones de expresión génica dentro de arquitectura tisular nativa y vecindarios celulares.",
          de: "Räumliche Transkriptomik verwendet Gewebeschnitte auf Barcode-Arrays oder direkte RNA-Detektionsmethoden, um Positionsinformationen zu erhalten und ermöglicht Analyse von Genexpressionsmustern innerhalb nativer Gewebearchitektur und zellulärer Nachbarschaften.",
          nl: "Ruimtelijke transcriptomics gebruikt weefsel secties op barcode arrays of directe RNA detectie methoden om positionele informatie te behouden, analyse van genexpressie patronen binnen natuurlijke weefsel architectuur en cellulaire buurten mogelijk makend."
        }
      },
      {
        question: {
          en: "What mechanism drives enhancer-promoter looping in 3D chromatin organization?",
          es: "¿Qué mecanismo impulsa el bucle potenciador-promotor en organización de cromatina 3D?",
          de: "Welcher Mechanismus treibt Enhancer-Promotor-Schleifenbildung in 3D-Chromatin-Organisation an?",
          nl: "Welk mechanisme drijft enhancer-promotor lussen aan in 3D chromatine organisatie?"
        },
        options: [
          { en: "CTCF-cohesin complexes form topologically associating domains enabling long-range regulatory interactions", es: "Complejos CTCF-cohesina forman dominios de asociación topológica permitiendo interacciones regulatorias de largo alcance", de: "CTCF-Cohesin-Komplexe bilden topologisch assoziierte Domänen und ermöglichen weitreichende regulatorische Interaktionen", nl: "CTCF-cohesin complexen vormen topologisch associërende domeinen lange-afstands regulatoire interacties mogelijk makend" },
          { en: "DNA supercoiling only", es: "Solo superenrollamiento de ADN", de: "Nur DNA-Supercoiling", nl: "Alleen DNA supercoiling" },
          { en: "Histone modifications alone", es: "Solo modificaciones de histonas", de: "Nur Histon-Modifikationen", nl: "Alleen histon modificaties" },
          { en: "RNA polymerase tracking", es: "Seguimiento de ARN polimerasa", de: "RNA-Polymerase-Verfolgung", nl: "RNA polymerase tracking" }
        ],
        correct: 0,
        explanation: {
          en: "CTCF proteins bind to insulator sequences and recruit cohesin complexes, creating chromatin loops that organize topologically associating domains (TADs) and facilitate specific enhancer-promoter contacts across large genomic distances.",
          es: "Las proteínas CTCF se unen a secuencias aisladoras y reclutan complejos de cohesina, creando bucles de cromatina que organizan dominios de asociación topológica (TADs) y facilitan contactos específicos potenciador-promotor a través de grandes distancias genómicas.",
          de: "CTCF-Proteine binden an Isolator-Sequenzen und rekrutieren Cohesin-Komplexe, schaffen Chromatin-Schleifen, die topologisch assoziierte Domänen (TADs) organisieren und spezifische Enhancer-Promotor-Kontakte über große genomische Distanzen erleichtern.",
          nl: "CTCF eiwitten binden aan isolator sequenties en rekruteren cohesin complexen, chromatine lussen creërend die topologisch associërende domeinen (TADs) organiseren en specifieke enhancer-promotor contacten over grote genomische afstanden faciliteren."
        }
      },
      {
        question: {
          en: "How does optogenetics enable precise temporal control of gene expression?",
          es: "¿Cómo permite la optogenética control temporal preciso de expresión génica?",
          de: "Wie ermöglicht Optogenetik präzise zeitliche Kontrolle der Genexpression?",
          nl: "Hoe maakt optogenetica precieze temporele controle van genexpressie mogelijk?"
        },
        options: [
          { en: "Light-activated protein domains modulate transcription factor activity through reversible conformational changes", es: "Dominios proteicos activados por luz modulan actividad de factores de transcripción a través de cambios conformacionales reversibles", de: "Lichtaktivierte Proteindomänen modulieren Transkriptionsfaktor-Aktivität durch reversible Konformationsänderungen", nl: "Licht-geactiveerde eiwit domeinen moduleren transcriptiefactor activiteit door reversibele conformationele veranderingen" },
          { en: "Direct DNA photodamage", es: "Fotodaño directo del ADN", de: "Direkter DNA-Photoschaden", nl: "Directe DNA foto schade" },
          { en: "RNA degradation by light", es: "Degradación de ARN por luz", de: "RNA-Abbau durch Licht", nl: "RNA degradatie door licht" },
          { en: "Protein synthesis inhibition", es: "Inhibición de síntesis proteica", de: "Proteinsynthese-Hemmung", nl: "Eiwit synthese inhibitie" }
        ],
        correct: 0,
        explanation: {
          en: "Optogenetic systems use light-responsive domains like LOV or CRY2 fused to transcriptional regulators, enabling rapid, reversible, and spatially precise control of gene expression through blue light illumination.",
          es: "Sistemas optogenéticos usan dominios responsivos a luz como LOV o CRY2 fusionados a reguladores transcripcionales, permitiendo control rápido, reversible y espacialmente preciso de expresión génica a través de iluminación con luz azul.",
          de: "Optogenetische Systeme verwenden lichtresponsive Domänen wie LOV oder CRY2, fusioniert mit Transkriptionsregulatoren, ermöglichen schnelle, reversible und räumlich präzise Kontrolle der Genexpression durch Blaulicht-Beleuchtung.",
          nl: "Optogenetische systemen gebruiken licht-responsieve domeinen zoals LOV of CRY2 gefuseerd aan transcriptionele regulatoren, snelle, reversibele en ruimtelijk precieze controle van genexpressie door blauw licht belichting mogelijk makend."
        }
      },
      {
        question: {
          en: "What drives RNA editing diversity in neural transcriptomes?",
          es: "¿Qué impulsa la diversidad de edición de ARN en transcriptomas neuronales?",
          de: "Was treibt RNA-Editing-Diversität in neuronalen Transkriptomen an?",
          nl: "Wat drijft RNA bewerkings diversiteit aan in neuronale transcriptomen?"
        },
        options: [
          { en: "ADAR enzymes perform tissue-specific A-to-I editing creating recoding events that alter protein sequences", es: "Enzimas ADAR realizan edición específica de tejido A-a-I creando eventos de recodificación que alteran secuencias proteicas", de: "ADAR-Enzyme führen gewebespezifisches A-zu-I-Editing durch und schaffen Rekodierungsereignisse, die Proteinsequenzen verändern", nl: "ADAR enzymen voeren weefsel-specifieke A-naar-I bewerking uit creërend hercodering gebeurtenissen die eiwit sequenties veranderen" },
          { en: "DNA polymerase errors", es: "Errores de ADN polimerasa", de: "DNA-Polymerase-Fehler", nl: "DNA polymerase fouten" },
          { en: "Ribosome frameshifting", es: "Cambio de marco ribosomal", de: "Ribosom-Frameshift", nl: "Ribosoom frameshift" },
          { en: "tRNA modifications only", es: "Solo modificaciones de tRNA", de: "Nur tRNA-Modifikationen", nl: "Alleen tRNA modificaties" }
        ],
        correct: 0,
        explanation: {
          en: "ADAR (Adenosine Deaminase Acting on RNA) enzymes convert adenosine to inosine in dsRNA structures, leading to A-to-G changes in transcripts that can recode amino acids, particularly prevalent in nervous system transcripts.",
          es: "Enzimas ADAR (Adenosina Deaminasa Actuando sobre ARN) convierten adenosina a inosina en estructuras dsRNA, llevando a cambios A-a-G en transcritos que pueden recodificar aminoácidos, particularmente prevalente en transcritos del sistema nervioso.",
          de: "ADAR (Adenosin-Deaminase, die auf RNA wirkt) Enzyme konvertieren Adenosin zu Inosin in dsRNA-Strukturen, führen zu A-zu-G-Änderungen in Transkripten, die Aminosäuren rekodieren können, besonders häufig in Nervensystem-Transkripten.",
          nl: "ADAR (Adenosine Deaminase Acting on RNA) enzymen converteren adenosine naar inosine in dsRNA structuren, leidend tot A-naar-G veranderingen in transcripten die aminozuren kunnen hercoderen, bijzonder prevalent in zenuwstelsel transcripten."
        }
      },
      {
        question: {
          en: "How does multi-omics integration reveal disease mechanisms?",
          es: "¿Cómo revela la integración multi-ómicas mecanismos de enfermedades?",
          de: "Wie enthüllt Multi-Omik-Integration Krankheitsmechanismen?",
          nl: "Hoe onthult multi-omics integratie ziekte mechanismen?"
        },
        options: [
          { en: "Combining genomics, transcriptomics, proteomics, and metabolomics data identifies pathway perturbations across molecular layers", es: "Combinar datos de genómica, transcriptómica, proteómica y metabolómica identifica perturbaciones de vías a través de capas moleculares", de: "Kombination von Genomik-, Transkriptomik-, Proteomik- und Metabolomik-Daten identifiziert Weg-Störungen über molekulare Schichten", nl: "Combineren van genomics, transcriptomics, proteomics en metabolomics data identificeert pathway verstoringen over moleculaire lagen" },
          { en: "Single data type analysis", es: "Análisis de tipo de dato único", de: "Einzeldatentyp-Analyse", nl: "Enkele data type analyse" },
          { en: "Protein structure prediction", es: "Predicción de estructura proteica", de: "Proteinstruktur-Vorhersage", nl: "Eiwit structuur voorspelling" },
          { en: "Gene expression profiling only", es: "Solo perfilado de expresión génica", de: "Nur Genexpressions-Profiling", nl: "Alleen genexpressie profilering" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-omics approaches integrate genetic variants, gene expression, protein abundance, and metabolite levels to construct comprehensive molecular networks, revealing how genetic changes propagate through biological systems to cause disease.",
          es: "Enfoques multi-ómicos integran variantes genéticas, expresión génica, abundancia proteica y niveles de metabolitos para construir redes moleculares integrales, revelando cómo cambios genéticos se propagan a través de sistemas biológicos para causar enfermedad.",
          de: "Multi-Omik-Ansätze integrieren genetische Varianten, Genexpression, Proteinabundanz und Metabolit-Level, um umfassende molekulare Netzwerke zu konstruieren und zu enthüllen, wie genetische Änderungen sich durch biologische Systeme ausbreiten und Krankheiten verursachen.",
          nl: "Multi-omics benaderingen integreren genetische varianten, genexpressie, eiwit abundantie en metaboliet niveaus om uitgebreide moleculaire netwerken te construeren, onthullend hoe genetische veranderingen door biologische systemen propageren om ziekte te veroorzaken."
        }
      },
      {
        question: {
          en: "What mechanism enables liquid-liquid phase separation in cellular organization?",
          es: "¿Qué mecanismo permite la separación de fases líquido-líquido en organización celular?",
          de: "Welcher Mechanismus ermöglicht Flüssig-Flüssig-Phasentrennung in zellulärer Organisation?",
          nl: "Welk mechanisme maakt vloeistof-vloeistof fase scheiding mogelijk in cellulaire organisatie?"
        },
        options: [
          { en: "Intrinsically disordered protein regions and multivalent interactions drive biomolecular condensate formation", es: "Regiones proteicas intrínsecamente desordenadas e interacciones multivalentes impulsan formación de condensados biomoleculares", de: "Intrinsisch ungeordnete Proteinregionen und multivalente Interaktionen treiben biomolekulare Kondensat-Bildung an", nl: "Intrinsiek wanordelijke eiwit regio's en multivalente interacties drijven biomoleculaire condensaat vorming aan" },
          { en: "Membrane lipid composition", es: "Composición lipídica de membrana", de: "Membran-Lipid-Zusammensetzung", nl: "Membraan lipide samenstelling" },
          { en: "ATP hydrolysis energy", es: "Energía de hidrólisis de ATP", de: "ATP-Hydrolyse-Energie", nl: "ATP hydrolyse energie" },
          { en: "Protein folding dynamics", es: "Dinámicas de plegamiento proteico", de: "Proteinfaltungs-Dynamik", nl: "Eiwit vouwing dynamiek" }
        ],
        correct: 0,
        explanation: {
          en: "Biomolecular condensates form through weak multivalent interactions between intrinsically disordered regions (IDRs) and nucleic acids, creating membrane-less organelles that compartmentalize cellular processes like transcription and RNA processing.",
          es: "Condensados biomoleculares se forman a través de interacciones multivalentes débiles entre regiones intrínsecamente desordenadas (IDRs) y ácidos nucleicos, creando orgánulos sin membrana que compartimentalizan procesos celulares como transcripción y procesamiento de ARN.",
          de: "Biomolekulare Kondensate bilden sich durch schwache multivalente Interaktionen zwischen intrinsisch ungeordneten Regionen (IDRs) und Nukleinsäuren und schaffen membranlose Organellen, die zelluläre Prozesse wie Transkription und RNA-Verarbeitung kompartimentieren.",
          nl: "Biomoleculaire condensaten vormen door zwakke multivalente interacties tussen intrinsiek wanordelijke regio's (IDRs) en nucleïnezuren, membraanloze organellen creërend die cellulaire processen zoals transcriptie en RNA verwerking compartimenteren."
        }
      },
      {
        question: {
          en: "How do adaptive immune receptor repertoires achieve diversity through V(D)J recombination?",
          es: "¿Cómo logran los repertorios de receptores inmunes adaptativos diversidad a través de recombinación V(D)J?",
          de: "Wie erreichen adaptive Immunrezeptor-Repertoires Diversität durch V(D)J-Rekombination?",
          nl: "Hoe bereiken adaptieve immuun receptor repertoires diversiteit door V(D)J recombinatie?"
        },
        options: [
          { en: "RAG endonucleases create combinatorial diversity through random gene segment joining and junctional modifications", es: "Endonucleasas RAG crean diversidad combinatorial a través de unión aleatoria de segmentos génicos y modificaciones juncionales", de: "RAG-Endonukleasen schaffen kombinatorische Diversität durch zufällige Gensegment-Verbindung und junktionelle Modifikationen", nl: "RAG endonucleasen creëren combinatorische diversiteit door willekeurige gen segment verbinding en junctionele modificaties" },
          { en: "Point mutation accumulation", es: "Acumulación de mutaciones puntuales", de: "Punktmutations-Akkumulation", nl: "Punt mutatie accumulatie" },
          { en: "Gene duplication events", es: "Eventos de duplicación génica", de: "Genduplikations-Ereignisse", nl: "Gen duplicatie gebeurtenissen" },
          { en: "Alternative splicing only", es: "Solo empalme alternativo", de: "Nur alternatives Spleißen", nl: "Alleen alternatieve splicing" }
        ],
        correct: 0,
        explanation: {
          en: "V(D)J recombination uses RAG1/RAG2 endonucleases to randomly join variable (V), diversity (D), and joining (J) gene segments, combined with terminal deoxynucleotidyl transferase adding random nucleotides, generating >10^11 unique receptor combinations.",
          es: "La recombinación V(D)J usa endonucleasas RAG1/RAG2 para unir aleatoriamente segmentos génicos variables (V), diversidad (D) y unión (J), combinado con transferasa desoxinucleotidil terminal agregando nucleótidos aleatorios, generando >10^11 combinaciones únicas de receptores.",
          de: "V(D)J-Rekombination verwendet RAG1/RAG2-Endonukleasen, um variable (V), Diversitäts- (D) und Verbindungs- (J) Gensegmente zufällig zu verbinden, kombiniert mit terminaler Desoxynukleotidyl-Transferase, die zufällige Nukleotide hinzufügt und >10^11 einzigartige Rezeptor-Kombinationen generiert.",
          nl: "V(D)J recombinatie gebruikt RAG1/RAG2 endonucleasen om willekeurig variabele (V), diversiteit (D) en verbindings (J) gen segmenten te verbinden, gecombineerd met terminale deoxynucleotidyl transferase toevoegend willekeurige nucleotiden, >10^11 unieke receptor combinaties genererend."
        }
      },
      {
        question: {
          en: "What molecular mechanism drives transgenerational epigenetic inheritance in mammals?",
          es: "¿Qué mecanismo molecular impulsa la herencia epigenética transgeneracional en mamíferos?",
          de: "Welcher molekulare Mechanismus treibt transgenerationale epigenetische Vererbung in Säugetieren an?",
          nl: "Welk moleculair mechanisme drijft transgenerationele epigenetische overerving aan in zoogdieren?"
        },
        options: [
          { en: "Gametic DNA methylation escape during epigenetic reprogramming preserves environmental memory", es: "Escape de metilación de ADN gamético durante reprogramación epigenética preserva memoria ambiental", de: "Gametische DNA-Methylierungs-Flucht während epigenetischer Reprogrammierung bewahrt Umwelt-Gedächtnis", nl: "Gametische DNA methylatie ontsnapping tijdens epigenetische herprogrammering bewaart omgevings geheugen" },
          { en: "Direct DNA sequence changes", es: "Cambios directos de secuencia de ADN", de: "Direkte DNA-Sequenzänderungen", nl: "Directe DNA sequentie veranderingen" },
          { en: "Protein inheritance only", es: "Solo herencia proteica", de: "Nur Protein-Vererbung", nl: "Alleen eiwit overerving" },
          { en: "Chromosome number variations", es: "Variaciones en número cromosómico", de: "Chromosomen-Zahl-Variationen", nl: "Chromosoom aantal variaties" }
        ],
        correct: 0,
        explanation: {
          en: "Some CpG sites in sperm and oocytes escape global DNA demethylation during embryonic development, allowing environmentally-induced methylation patterns to be transmitted across generations and influence offspring phenotypes.",
          es: "Algunos sitios CpG en espermatozoides y ovocitos escapan la desmetilación global de ADN durante desarrollo embrionario, permitiendo que patrones de metilación inducidos ambientalmente se transmitan a través de generaciones e influencien fenotipos de descendencia.",
          de: "Einige CpG-Stellen in Spermien und Eizellen entgehen globaler DNA-Demethylierung während embryonaler Entwicklung, ermöglichen umwelt-induzierte Methylierungsmuster über Generationen übertragen zu werden und Nachkommen-Phänotypen zu beeinflussen.",
          nl: "Sommige CpG plaatsen in spermacellen en eicellen ontsnappen globale DNA demethylering tijdens embryonale ontwikkeling, omgevings-geïnduceerde methylatie patronen over generaties overgedragen worden en nakomelingen fenotypes beïnvloeden mogelijk makend."
        }
      },
      {
        question: {
          en: "How does cellular reprogramming overcome epigenetic barriers to pluripotency?",
          es: "¿Cómo supera la reprogramación celular las barreras epigenéticas a la pluripotencia?",
          de: "Wie überwindet zelluläre Reprogrammierung epigenetische Barrieren zur Pluripotenz?",
          nl: "Hoe overwint cellulaire herprogrammering epigenetische barrières naar pluripotentie?"
        },
        options: [
          { en: "Yamanaka factors remodel chromatin landscapes by recruiting pioneer transcription factors and chromatin remodeling complexes", es: "Factores Yamanaka remodelan paisajes de cromatina reclutando factores de transcripción pioneros y complejos remodeladores de cromatina", de: "Yamanaka-Faktoren remodellieren Chromatin-Landschaften durch Rekrutierung von Pioneer-Transkriptionsfaktoren und Chromatin-Remodelling-Komplexen", nl: "Yamanaka factoren hermodelleren chromatine landschappen door pioneer transcriptiefactoren en chromatine hermodellering complexen te rekruteren" },
          { en: "Direct DNA editing", es: "Edición directa de ADN", de: "Direkte DNA-Bearbeitung", nl: "Directe DNA bewerking" },
          { en: "Protein degradation pathways", es: "Vías de degradación proteica", de: "Proteinabbau-Wege", nl: "Eiwit degradatie paden" },
          { en: "Cell cycle arrest mechanisms", es: "Mecanismos de arresto del ciclo celular", de: "Zellzyklus-Arrest-Mechanismen", nl: "Celcyclus arrest mechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Oct4, Sox2, Klf4, and c-Myc (Yamanaka factors) act as pioneer transcription factors that bind closed chromatin, recruit chromatin remodeling complexes like SWI/SNF, and establish new transcriptional programs that erase somatic cell identity.",
          es: "Oct4, Sox2, Klf4 y c-Myc (factores Yamanaka) actúan como factores de transcripción pioneros que se unen a cromatina cerrada, reclutan complejos remodeladores de cromatina como SWI/SNF y establecen nuevos programas transcripcionales que borran identidad celular somática.",
          de: "Oct4, Sox2, Klf4 und c-Myc (Yamanaka-Faktoren) wirken als Pioneer-Transkriptionsfaktoren, die geschlossenes Chromatin binden, Chromatin-Remodelling-Komplexe wie SWI/SNF rekrutieren und neue Transkriptionsprogramme etablieren, die somatische Zellidentität löschen.",
          nl: "Oct4, Sox2, Klf4 en c-Myc (Yamanaka factoren) werken als pioneer transcriptiefactoren die gesloten chromatine binden, chromatine hermodellering complexen zoals SWI/SNF rekruteren en nieuwe transcriptionele programma's vestigen die somatische cel identiteit wissen."
        }
      },
      {
        question: {
          en: "What drives cancer genome evolution through chromothripsis events?",
          es: "¿Qué impulsa la evolución del genoma del cáncer a través de eventos de cromotripsis?",
          de: "Was treibt Krebsgenom-Evolution durch Chromothripsis-Ereignisse an?",
          nl: "Wat drijft kanker genoom evolutie aan door chromothripsis gebeurtenissen?"
        },
        options: [
          { en: "Localized chromosome shattering followed by random DNA fragment reassembly creates complex rearrangements", es: "Fragmentación cromosómica localizada seguida por reensamblaje aleatorio de fragmentos de ADN crea reordenamientos complejos", de: "Lokalisierte Chromosomen-Zersplitterung gefolgt von zufälliger DNA-Fragment-Zusammensetzung schafft komplexe Umstellungen", nl: "Gelokaliseerde chromosoom verbrijzeling gevolgd door willekeurige DNA fragment herassemblage creëert complexe herrangschikkingen" },
          { en: "Gradual point mutation accumulation", es: "Acumulación gradual de mutaciones puntuales", de: "Allmähliche Punktmutations-Akkumulation", nl: "Geleidelijke punt mutatie accumulatie" },
          { en: "Viral insertion sequences", es: "Secuencias de inserción viral", de: "Virus-Insertionssequenzen", nl: "Virale insertie sequenties" },
          { en: "Normal DNA replication errors", es: "Errores normales de replicación de ADN", de: "Normale DNA-Replikationsfehler", nl: "Normale DNA replicatie fouten" }
        ],
        correct: 0,
        explanation: {
          en: "Chromothripsis involves catastrophic local chromosome pulverization in a single event, followed by imprecise non-homologous end joining repair, generating tens to hundreds of rearrangements clustered in specific genomic regions that can activate oncogenes or inactivate tumor suppressors.",
          es: "La cromotripsis involucra pulverización catastrófica de cromosomas locales en un solo evento, seguida por reparación imprecisa de unión de extremos no homólogos, generando decenas a cientos de reordenamientos agrupados en regiones genómicas específicas que pueden activar oncogenes o inactivar supresores tumorales.",
          de: "Chromothripsis umfasst katastrophale lokale Chromosomen-Pulverisierung in einem einzigen Ereignis, gefolgt von ungenauer nicht-homologer Endverbindungs-Reparatur, generiert Dutzende bis Hunderte von Umstellungen, die in spezifischen genomischen Regionen geclustert sind und Onkogene aktivieren oder Tumorsuppressoren inaktivieren können.",
          nl: "Chromothripsis behelst catastrofale lokale chromosoom verbrijzeling in een enkele gebeurtenis, gevolgd door onprecieze niet-homologe uiteinde verbindings reparatie, tientallen tot honderden herrangschikkingen genererend geclusterd in specifieke genomische regio's die oncogenen kunnen activeren of tumor suppressors inactiveren."
        }
      },
      {
        question: {
          en: "What mechanism enables telomere maintenance through alternative lengthening in cancer cells?",
          es: "¿Qué mecanismo permite el mantenimiento de telómeros a través de alargamiento alternativo en células cancerosas?",
          de: "Welcher Mechanismus ermöglicht Telomer-Erhaltung durch alternative Verlängerung in Krebszellen?",
          nl: "Welk mechanisme maakt telomeer onderhoud mogelijk door alternatieve verlenging in kankercellen?"
        },
        options: [
          { en: "Homologous recombination-based DNA repair mechanisms extend telomeres independently of telomerase activity", es: "Mecanismos de reparación de ADN basados en recombinación homóloga extienden telómeros independientemente de actividad de telomerasa", de: "Homologe Rekombinations-basierte DNA-Reparaturmechanismen verlängern Telomere unabhängig von Telomerase-Aktivität", nl: "Homologe recombinatie-gebaseerde DNA reparatie mechanismen verlengen telomeren onafhankelijk van telomerase activiteit" },
          { en: "Direct DNA synthesis only", es: "Solo síntesis directa de ADN", de: "Nur direkte DNA-Synthese", nl: "Alleen directe DNA synthese" },
          { en: "Protein complex assembly", es: "Ensamblaje de complejos proteicos", de: "Proteinkomplex-Assemblierung", nl: "Eiwit complex assemblage" },
          { en: "RNA interference pathways", es: "Vías de interferencia de ARN", de: "RNA-Interferenz-Wege", nl: "RNA interferentie paden" }
        ],
        correct: 0,
        explanation: {
          en: "Alternative Lengthening of Telomeres (ALT) uses RAD51-mediated homologous recombination and DNA repair machinery to extend telomeres through inter-telomeric recombination, allowing cancer cells to bypass senescence without telomerase reactivation.",
          es: "El Alargamiento Alternativo de Telómeros (ALT) usa recombinación homóloga mediada por RAD51 y maquinaria de reparación de ADN para extender telómeros a través de recombinación inter-telomérica, permitiendo que células cancerosas eviten senescencia sin reactivación de telomerasa.",
          de: "Alternative Telomer-Verlängerung (ALT) verwendet RAD51-vermittelte homologe Rekombination und DNA-Reparatur-Maschinerie, um Telomere durch inter-telomerische Rekombination zu verlängern, ermöglicht Krebszellen Seneszenz ohne Telomerase-Reaktivierung zu umgehen.",
          nl: "Alternatieve Telomeer Verlenging (ALT) gebruikt RAD51-gemedieerde homologe recombinatie en DNA reparatie machinerie om telomeren te verlengen door inter-telomerische recombinatie, kankercellen toestaan senescentie te omzeilen zonder telomerase reactivatie."
        }
      },
      {
        question: {
          en: "How do nuclear lamins organize chromatin domains and gene expression?",
          es: "¿Cómo organizan las laminas nucleares los dominios de cromatina y expresión génica?",
          de: "Wie organisieren Kernlamins Chromatin-Domänen und Genexpression?",
          nl: "Hoe organiseren nucleaire lamines chromatine domeinen en genexpressie?"
        },
        options: [
          { en: "Lamin-associated domains create repressive nuclear compartments through chromatin tethering to the nuclear envelope", es: "Dominios asociados a lamina crean compartimentos nucleares represivos a través de anclaje de cromatina al envoltorio nuclear", de: "Lamin-assoziierte Domänen schaffen repressive Kernkompartimente durch Chromatin-Verankerung an der Kernhülle", nl: "Lamine-geassocieerde domeinen creëren repressieve nucleaire compartimenten door chromatine verankering aan het nucleaire omhulsel" },
          { en: "Direct transcription factor binding", es: "Unión directa de factores de transcripción", de: "Direkte Transkriptionsfaktor-Bindung", nl: "Directe transcriptiefactor binding" },
          { en: "Histone methylation changes only", es: "Solo cambios de metilación de histonas", de: "Nur Histon-Methylierungsänderungen", nl: "Alleen histon methylatie veranderingen" },
          { en: "RNA polymerase recruitment", es: "Reclutamiento de ARN polimerasa", de: "RNA-Polymerase-Rekrutierung", nl: "RNA polymerase rekrutering" }
        ],
        correct: 0,
        explanation: {
          en: "Lamin-associated domains (LADs) represent large heterochromatic regions that interact with A-type and B-type lamins at the nuclear periphery, creating repressive environments that silence genes through spatial sequestration and reduced transcriptional accessibility.",
          es: "Los dominios asociados a lamina (LADs) representan grandes regiones heterocromáticas que interactúan con laminas tipo A y tipo B en la periferia nuclear, creando ambientes represivos que silencian genes a través de secuestro espacial y accesibilidad transcripcional reducida.",
          de: "Lamin-assoziierte Domänen (LADs) repräsentieren große heterochromatische Regionen, die mit A-Typ- und B-Typ-Lamins an der Kernperipherie interagieren und repressive Umgebungen schaffen, die Gene durch räumliche Sequestrierung und reduzierte Transkriptionszugänglichkeit zum Schweigen bringen.",
          nl: "Lamine-geassocieerde domeinen (LADs) vertegenwoordigen grote heterochromatische regio's die interacteren met A-type en B-type lamines op de nucleaire periferie, repressieve omgevingen creërend die genen stilleggen door ruimtelijke sequestratie en verminderde transcriptionele toegankelijkheid."
        }
      },
      {
        question: {
          en: "What drives ribosome specialization through ribosomal protein composition changes?",
          es: "¿Qué impulsa la especialización de ribosomas a través de cambios en composición de proteínas ribosomales?",
          de: "Was treibt Ribosom-Spezialisierung durch ribosomale Proteinzusammensetzungs-Änderungen an?",
          nl: "Wat drijft ribosoom specialisatie aan door ribosomale eiwit samenstelling veranderingen?"
        },
        options: [
          { en: "Paralog switching and ribosomal protein variants create functionally distinct ribosomes with altered mRNA selectivity", es: "Cambio de parálogos y variantes de proteínas ribosomales crean ribosomas funcionalmente distintos con selectividad de mRNA alterada", de: "Paralog-Wechsel und ribosomale Proteinvarianten schaffen funktional unterschiedliche Ribosomen mit veränderter mRNA-Selektivität", nl: "Paraloog switching en ribosomale eiwit varianten creëren functioneel onderscheidende ribosomen met veranderde mRNA selectiviteit" },
          { en: "rRNA modification patterns only", es: "Solo patrones de modificación de rRNA", de: "Nur rRNA-Modifikationsmuster", nl: "Alleen rRNA modificatie patronen" },
          { en: "Translation initiation factor changes", es: "Cambios en factores de iniciación de traducción", de: "Änderungen der Translationsinitiationsfaktoren", nl: "Translatie initiatie factor veranderingen" },
          { en: "mRNA stability regulation", es: "Regulación de estabilidad de mRNA", de: "mRNA-Stabilitätsregulation", nl: "mRNA stabiliteit regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Ribosome heterogeneity arises from paralogous ribosomal proteins (e.g., RPL10A/RPL10L) and tissue-specific expression patterns, creating specialized ribosomes that preferentially translate specific mRNA subsets, regulating gene expression post-transcriptionally.",
          es: "La heterogeneidad ribosomal surge de proteínas ribosomales parálogas (ej., RPL10A/RPL10L) y patrones de expresión específicos de tejido, creando ribosomas especializados que traducen preferentemente subconjuntos específicos de mRNA, regulando expresión génica post-transcripcionalmente.",
          de: "Ribosom-Heterogenität entsteht aus paralogen ribosomalen Proteinen (z.B. RPL10A/RPL10L) und gewebespezifischen Expressionsmustern und schafft spezialisierte Ribosomen, die spezifische mRNA-Untergruppen bevorzugt übersetzen und Genexpression post-transkriptional regulieren.",
          nl: "Ribosoom heterogeniteit ontstaat uit paraloge ribosomale eiwitten (bijv. RPL10A/RPL10L) en weefsel-specifieke expressie patronen, gespecialiseerde ribosomen creërend die bij voorkeur specifieke mRNA subsets vertalen, genexpressie post-transcriptioneel regulerend."
        }
      },
      {
        question: {
          en: "How does m6A RNA methylation regulate mRNA fate through reader protein interactions?",
          es: "¿Cómo regula la metilación m6A de ARN el destino del mRNA a través de interacciones con proteínas lectoras?",
          de: "Wie reguliert m6A-RNA-Methylierung mRNA-Schicksal durch Leserprotein-Interaktionen?",
          nl: "Hoe reguleert m6A RNA methylatie mRNA lot door lezer eiwit interacties?"
        },
        options: [
          { en: "YTH domain proteins recognize m6A modifications to control mRNA stability, translation, and nuclear export", es: "Proteínas de dominio YTH reconocen modificaciones m6A para controlar estabilidad, traducción y exportación nuclear de mRNA", de: "YTH-Domänen-Proteine erkennen m6A-Modifikationen zur Kontrolle von mRNA-Stabilität, Translation und Kernexport", nl: "YTH domein eiwitten herkennen m6A modificaties om mRNA stabiliteit, translatie en nucleaire export te controleren" },
          { en: "Direct ribosome binding changes", es: "Cambios directos de unión ribosomal", de: "Direkte Ribosom-Bindungsänderungen", nl: "Directe ribosoom binding veranderingen" },
          { en: "Splicing machinery recruitment", es: "Reclutamiento de maquinaria de empalme", de: "Spleißmaschinerie-Rekrutierung", nl: "Splicing machinerie rekrutering" },
          { en: "Chromatin remodeling activity", es: "Actividad de remodelación de cromatina", de: "Chromatin-Remodelling-Aktivität", nl: "Chromatine hermodellering activiteit" }
        ],
        correct: 0,
        explanation: {
          en: "N6-methyladenosine (m6A) modifications are recognized by YTH domain-containing proteins (YTHDF1/2/3, YTHDC1/2) that determine mRNA fate: YTHDF1 promotes translation, YTHDF2 enhances degradation, and YTHDC1 affects nuclear processing and export.",
          es: "Las modificaciones N6-metiladenosina (m6A) son reconocidas por proteínas que contienen dominio YTH (YTHDF1/2/3, YTHDC1/2) que determinan el destino del mRNA: YTHDF1 promueve traducción, YTHDF2 mejora degradación, y YTHDC1 afecta procesamiento nuclear y exportación.",
          de: "N6-Methyladenosin (m6A) Modifikationen werden von YTH-Domänen-enthaltenden Proteinen (YTHDF1/2/3, YTHDC1/2) erkannt, die mRNA-Schicksal bestimmen: YTHDF1 fördert Translation, YTHDF2 verstärkt Abbau, und YTHDC1 beeinflusst Kernverarbeitung und Export.",
          nl: "N6-methyladenosine (m6A) modificaties worden herkend door YTH domein-bevattende eiwitten (YTHDF1/2/3, YTHDC1/2) die mRNA lot bepalen: YTHDF1 bevordert translatie, YTHDF2 verhoogt degradatie, en YTHDC1 beïnvloedt nucleaire verwerking en export."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/genetics', level3);
  }
})();