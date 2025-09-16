(function() {
  const level5 = {
    name: {
      en: "Advanced Epigenomics & Chromatin Dynamics",
      es: "Epigenómica Avanzada y Dinámicas de Cromatina",
      de: "Fortgeschrittene Epigenomik & Chromatin-Dynamik",
      nl: "Geavanceerde Epigenomics & Chromatine Dynamiek"
    },
    questions: [
      {
        question: {
          en: "How does chromatin remodeling by SWI/SNF complexes facilitate transcription factor binding?",
          es: "¿Cómo facilita la remodelación de cromatina por complejos SWI/SNF la unión de factores de transcripción?",
          de: "Wie erleichtert Chromatin-Remodeling durch SWI/SNF-Komplexe die Transkriptionsfaktor-Bindung?",
          nl: "Hoe faciliteert chromatine hermodellering door SWI/SNF complexen transcriptiefactor binding?"
        },
        options: [
          { en: "ATP-dependent nucleosome sliding and ejection exposes transcription factor binding sites", es: "Deslizamiento y expulsión de nucleosomas dependiente de ATP expone sitios de unión de factores de transcripción", de: "ATP-abhängiges Nukleosom-Gleiten und -Ausstoß enthüllt Transkriptionsfaktor-Bindungsstellen", nl: "ATP-afhankelijk nucleosoom glijden en uitstoting blootleggen transcriptiefactor bindingsplaatsen" },
          { en: "Direct histone modification only", es: "Solo modificación directa de histonas", de: "Nur direkte Histon-Modifikation", nl: "Alleen directe histon modificatie" },
          { en: "DNA methylation changes", es: "Cambios de metilación de ADN", de: "DNA-Methylierungsänderungen", nl: "DNA methylatie veranderingen" },
          { en: "RNA polymerase recruitment", es: "Reclutamiento de ARN polimerasa", de: "RNA-Polymerase-Rekrutierung", nl: "RNA polymerase rekrutering" }
        ],
        correct: 0,
        explanation: {
          en: "SWI/SNF chromatin remodeling complexes use ATP hydrolysis to slide, eject, or restructure nucleosomes, making DNA accessible to transcription factors and other regulatory proteins by overcoming chromatin-mediated repression.",
          es: "Los complejos remodeladores de cromatina SWI/SNF usan hidrólisis de ATP para deslizar, expulsar o reestructurar nucleosomas, haciendo el ADN accesible a factores de transcripción.",
          de: "SWI/SNF Chromatin-Remodeling-Komplexe verwenden ATP-Hydrolyse zum Gleiten, Ausstoßen oder Umstrukturieren von Nukleosomen, machen DNA für Transkriptionsfaktoren zugänglich.",
          nl: "SWI/SNF chromatine hermodellering complexen gebruiken ATP hydrolyse om nucleosomen te laten glijden, uit te stoten of herstructureren, DNA toegankelijk makend voor transcriptiefactoren."
        }
      },
      {
        question: {
          en: "What mechanism drives DNA demethylation through TET enzyme activity?",
          es: "¿Qué mecanismo impulsa la desmetilación de ADN a través de actividad de enzima TET?",
          de: "Welcher Mechanismus treibt DNA-Demethylierung durch TET-Enzym-Aktivität an?",
          nl: "Welk mechanisme drijft DNA demethylering aan door TET enzym activiteit?"
        },
        options: [
          { en: "Iterative oxidation of 5-methylcytosine through 5-hydroxymethylcytosine and 5-carboxylcytosine to facilitate base excision repair", es: "Oxidación iterativa de 5-metilcitosina a través de 5-hidroximetilcitosina y 5-carboxilcitosina para facilitar reparación por escisión de bases", de: "Iterative Oxidation von 5-Methylcytosin über 5-Hydroxymethylcytosin und 5-Carboxylcytosin zur Erleichterung der Basen-Exzisions-Reparatur", nl: "Iteratieve oxidatie van 5-methylcytosine door 5-hydroxymethylcytosine en 5-carboxylcytosine om base excisie reparatie te faciliteren" },
          { en: "Direct methyl group removal", es: "Eliminación directa de grupo metilo", de: "Direkte Methylgruppen-Entfernung", nl: "Directe methylgroep verwijdering" },
          { en: "Histone deacetylation only", es: "Solo desacetilación de histonas", de: "Nur Histon-Deacetylierung", nl: "Alleen histon deacetylering" },
          { en: "DNA strand break formation", es: "Formación de rupturas de cadena de ADN", de: "DNA-Strangbruch-Bildung", nl: "DNA streng breuk vorming" }
        ],
        correct: 0,
        explanation: {
          en: "TET enzymes catalyze the step-wise oxidation of 5-methylcytosine to 5-hydroxymethylcytosine, 5-formylcytosine, and 5-carboxylcytosine, which can be excised by thymine DNA glycosylase and replaced with unmethylated cytosine through base excision repair.",
          es: "Las enzimas TET catalizan la oxidación escalonada de 5-metilcitosina a 5-hidroximetilcitosina, 5-formilcitosina y 5-carboxilcitosina, que puede ser escindida por timina ADN glicosilasa.",
          de: "TET-Enzyme katalysieren die schrittweise Oxidation von 5-Methylcytosin zu 5-Hydroxymethylcytosin, 5-Formylcytosin und 5-Carboxylcytosin, die durch Thymin-DNA-Glykosylase excidiert werden können.",
          nl: "TET enzymen katalyseren de stapsgewijze oxidatie van 5-methylcytosine naar 5-hydroxymethylcytosine, 5-formylcytosine en 5-carboxylcytosine, die kunnen worden weggenomen door thymine DNA glycosylase."
        }
      },
      {
        question: {
          en: "How does the PRC2 complex establish repressive chromatin domains?",
          es: "¿Cómo establece el complejo PRC2 dominios de cromatina represivos?",
          de: "Wie etabliert der PRC2-Komplex repressive Chromatin-Domänen?",
          nl: "Hoe vestigt het PRC2 complex repressieve chromatine domeinen?"
        },
        options: [
          { en: "EZH2 methyltransferase activity creates H3K27me3 marks that spread through chromatin and recruit PRC1 for gene silencing", es: "Actividad metiltransferasa EZH2 crea marcas H3K27me3 que se extienden a través de cromatina y reclutan PRC1 para silenciamiento génico", de: "EZH2-Methyltransferase-Aktivität schafft H3K27me3-Markierungen, die sich durch Chromatin ausbreiten und PRC1 für Gen-Silencing rekrutieren", nl: "EZH2 methyltransferase activiteit creëert H3K27me3 markeringen die zich verspreiden door chromatine en PRC1 rekruteren voor gen onderdrukking" },
          { en: "Direct DNA binding only", es: "Solo unión directa al ADN", de: "Nur direkte DNA-Bindung", nl: "Alleen directe DNA binding" },
          { en: "RNA polymerase inhibition", es: "Inhibición de ARN polimerasa", de: "RNA-Polymerase-Hemmung", nl: "RNA polymerase inhibitie" },
          { en: "Chromatin condensation through linker histones", es: "Condensación de cromatina a través de histonas conectoras", de: "Chromatin-Kondensation durch Linker-Histone", nl: "Chromatine condensatie door linker histonen" }
        ],
        correct: 0,
        explanation: {
          en: "PRC2 contains EZH2 methyltransferase that catalyzes H3K27me3, creating a repressive chromatin mark that can spread across gene clusters. H3K27me3 then recruits PRC1 complex, which ubiquitylates H2AK119 and compacts chromatin for stable gene silencing.",
          es: "PRC2 contiene metiltransferasa EZH2 que cataliza H3K27me3, creando una marca de cromatina represiva que puede extenderse a través de grupos de genes.",
          de: "PRC2 enthält EZH2-Methyltransferase, die H3K27me3 katalysiert, schafft eine repressive Chromatin-Markierung, die sich über Gen-Cluster ausbreiten kann.",
          nl: "PRC2 bevat EZH2 methyltransferase die H3K27me3 katalyseert, een repressieve chromatine markering creërend die zich kan verspreiden over gen clusters."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables enhancer-promoter looping through mediator complex function?",
          es: "¿Qué mecanismo molecular permite el bucle potenciador-promotor a través de función del complejo mediador?",
          de: "Welcher molekulare Mechanismus ermöglicht Enhancer-Promotor-Schleifenbildung durch Mediator-Komplex-Funktion?",
          nl: "Welk moleculair mechanisme maakt enhancer-promotor lussen mogelijk door mediator complex functie?"
        },
        options: [
          { en: "Mediator serves as a bridge between enhancer-bound activators and promoter-bound RNA polymerase II, stabilizing chromatin loops", es: "Mediador sirve como puente entre activadores unidos a potenciador y ARN polimerasa II unida a promotor, estabilizando bucles de cromatina", de: "Mediator dient als Brücke zwischen Enhancer-gebundenen Aktivatoren und Promotor-gebundener RNA-Polymerase II, stabilisiert Chromatin-Schleifen", nl: "Mediator dient als brug tussen enhancer-gebonden activatoren en promotor-gebonden RNA polymerase II, chromatine lussen stabiliserend" },
          { en: "Direct DNA binding without protein intermediates", es: "Unión directa al ADN sin intermediarios proteicos", de: "Direkte DNA-Bindung ohne Protein-Intermediate", nl: "Directe DNA binding zonder eiwit tussenschakels" },
          { en: "Histone acetylation only", es: "Solo acetilación de histonas", de: "Nur Histon-Acetylierung", nl: "Alleen histon acetylering" },
          { en: "DNA methylation changes", es: "Cambios de metilación de ADN", de: "DNA-Methylierungsänderungen", nl: "DNA methylatie veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "The Mediator complex acts as a molecular bridge that connects sequence-specific transcription factors bound at enhancers with RNA polymerase II and general transcription factors at promoters, facilitating long-range regulatory interactions through chromatin looping.",
          es: "El complejo Mediador actúa como un puente molecular que conecta factores de transcripción específicos de secuencia unidos en potenciadores con ARN polimerasa II en promotores.",
          de: "Der Mediator-Komplex wirkt als molekulare Brücke, die sequenzspezifische Transkriptionsfaktoren an Enhancern mit RNA-Polymerase II an Promotoren verbindet.",
          nl: "Het Mediator complex werkt als een moleculaire brug die sequentie-specifieke transcriptiefactoren gebonden op enhancers verbindt met RNA polymerase II op promotors."
        }
      },
      {
        question: {
          en: "How does pioneer transcription factor Oct4 establish pluripotency through chromatin remodeling?",
          es: "¿Cómo establece el factor de transcripción pionero Oct4 pluripotencia a través de remodelación de cromatina?",
          de: "Wie etabliert der Pioneer-Transkriptionsfaktor Oct4 Pluripotenz durch Chromatin-Remodeling?",
          nl: "Hoe vestigt pioneer transcriptiefactor Oct4 pluripotentie door chromatine hermodellering?"
        },
        options: [
          { en: "Oct4 binds closed chromatin and recruits chromatin remodeling complexes to establish accessible regulatory landscapes", es: "Oct4 se une a cromatina cerrada y recluta complejos remodeladores de cromatina para establecer paisajes regulatorios accesibles", de: "Oct4 bindet geschlossenes Chromatin und rekrutiert Chromatin-Remodeling-Komplexe zur Etablierung zugänglicher regulatorischer Landschaften", nl: "Oct4 bindt gesloten chromatine en rekruteert chromatine hermodellering complexen om toegankelijke regulatoire landschappen te vestigen" },
          { en: "Only binds to already open chromatin", es: "Solo se une a cromatina ya abierta", de: "Bindet nur an bereits offenes Chromatin", nl: "Bindt alleen aan reeds open chromatine" },
          { en: "Functions through DNA methylation only", es: "Funciona solo a través de metilación de ADN", de: "Funktioniert nur durch DNA-Methylierung", nl: "Functioneert alleen door DNA methylatie" },
          { en: "Inhibits all gene expression", es: "Inhibe toda expresión génica", de: "Hemmt alle Genexpression", nl: "Remt alle genexpressie" }
        ],
        correct: 0,
        explanation: {
          en: "Oct4 is a pioneer transcription factor that can bind to nucleosomal DNA and closed chromatin regions, recruiting chromatin remodeling complexes like SWI/SNF and establishing accessible chromatin states that enable other pluripotency factors to bind and maintain stem cell identity.",
          es: "Oct4 es un factor de transcripción pionero que puede unirse a ADN nucleosomal y regiones de cromatina cerradas, reclutando complejos remodeladores de cromatina y estableciendo estados de cromatina accesibles.",
          de: "Oct4 ist ein Pioneer-Transkriptionsfaktor, der an nukleosomale DNA und geschlossene Chromatin-Regionen binden kann, rekrutiert Chromatin-Remodeling-Komplexe und etabliert zugängliche Chromatin-Zustände.",
          nl: "Oct4 is een pioneer transcriptiefactor die kan binden aan nucleosomaal DNA en gesloten chromatine regio's, chromatine hermodellering complexen rekruterend en toegankelijke chromatine toestanden vestigend."
        }
      },
      {
        question: {
          en: "What mechanism drives transcriptional memory through H3K4me3 inheritance?",
          es: "¿Qué mecanismo impulsa la memoria transcripcional a través de herencia H3K4me3?",
          de: "Welcher Mechanismus treibt transkriptionelles Gedächtnis durch H3K4me3-Vererbung an?",
          nl: "Welk mechanisme drijft transcriptioneel geheugen aan door H3K4me3 overerving?"
        },
        options: [
          { en: "COMPASS/Set1 complexes maintain H3K4me3 at active promoters through replication, preserving transcriptional states", es: "Complejos COMPASS/Set1 mantienen H3K4me3 en promotores activos a través de replicación, preservando estados transcripcionales", de: "COMPASS/Set1-Komplexe erhalten H3K4me3 an aktiven Promotoren durch Replikation, bewahren transkriptionelle Zustände", nl: "COMPASS/Set1 complexen onderhouden H3K4me3 op actieve promotors door replicatie, transcriptionele toestanden bewarend" },
          { en: "DNA methylation changes only", es: "Solo cambios de metilación de ADN", de: "Nur DNA-Methylierungsänderungen", nl: "Alleen DNA methylatie veranderingen" },
          { en: "Histone deacetylation", es: "Desacetilación de histonas", de: "Histon-Deacetylierung", nl: "Histon deacetylering" },
          { en: "Chromatin condensation", es: "Condensación de cromatina", de: "Chromatin-Kondensation", nl: "Chromatine condensatie" }
        ],
        correct: 0,
        explanation: {
          en: "COMPASS/Set1 methyltransferase complexes maintain H3K4me3 marks at actively transcribed gene promoters through DNA replication cycles, serving as an epigenetic memory mechanism that preserves transcriptional competence and facilitates rapid reactivation.",
          es: "Los complejos metiltransferasa COMPASS/Set1 mantienen marcas H3K4me3 en promotores de genes activamente transcritos a través de ciclos de replicación de ADN, sirviendo como mecanismo de memoria epigenética.",
          de: "COMPASS/Set1-Methyltransferase-Komplexe erhalten H3K4me3-Markierungen an aktiv transkribierten Gen-Promotoren durch DNA-Replikationszyklen, dienen als epigenetischer Gedächtnismechanismus.",
          nl: "COMPASS/Set1 methyltransferase complexen onderhouden H3K4me3 markeringen op actief getranscribeerde gen promotors door DNA replicatie cycli, dienend als epigenetisch geheugen mechanisme."
        }
      },
      {
        question: {
          en: "How does X-chromosome inactivation spread through the XIST lncRNA mechanism?",
          es: "¿Cómo se extiende la inactivación del cromosoma X a través del mecanismo lncRNA XIST?",
          de: "Wie breitet sich X-Chromosom-Inaktivierung durch den XIST lncRNA-Mechanismus aus?",
          nl: "Hoe verspreidt X-chromosoom inactivatie zich door het XIST lncRNA mechanisme?"
        },
        options: [
          { en: "XIST RNA coats the inactive X-chromosome and recruits Polycomb complexes for chromosome-wide silencing", es: "ARN XIST cubre el cromosoma X inactivo y recluta complejos Polycomb para silenciamiento en todo el cromosoma", de: "XIST-RNA überzieht das inaktive X-Chromosom und rekrutiert Polycomb-Komplexe für chromosomweites Silencing", nl: "XIST RNA bedekt het inactieve X-chromosoom en rekruteert Polycomb complexen voor chromosoom-brede onderdrukking" },
          { en: "Direct DNA binding and cutting", es: "Unión directa y corte de ADN", de: "Direkte DNA-Bindung und -Schneiden", nl: "Directe DNA binding en snijden" },
          { en: "Protein synthesis inhibition", es: "Inhibición de síntesis proteica", de: "Proteinsynthese-Hemmung", nl: "Eiwit synthese inhibitie" },
          { en: "Chromosomal translocation", es: "Translocación cromosómica", de: "Chromosomentranslokation", nl: "Chromosomale translocatie" }
        ],
        correct: 0,
        explanation: {
          en: "XIST long non-coding RNA is expressed from the inactive X-chromosome and spreads in cis to coat the entire chromosome, recruiting Polycomb repressive complexes, DNMT3A, and other chromatin modifiers to establish stable heterochromatin and gene silencing.",
          es: "El ARN largo no codificante XIST se expresa desde el cromosoma X inactivo y se extiende en cis para cubrir todo el cromosoma, reclutando complejos represivos Polycomb.",
          de: "XIST lange nicht-kodierende RNA wird vom inaktiven X-Chromosom exprimiert und breitet sich in cis aus, um das gesamte Chromosom zu überziehen, rekrutiert Polycomb-repressive Komplexe.",
          nl: "XIST lange niet-coderende RNA wordt uitgedrukt vanaf het inactieve X-chromosoom en verspreidt zich in cis om het gehele chromosoom te bedekken, Polycomb repressieve complexen rekruterend."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables enhancer RNA (eRNA) function in transcriptional regulation?",
          es: "¿Qué mecanismo molecular permite la función del ARN potenciador (eRNA) en regulación transcripcional?",
          de: "Welcher molekulare Mechanismus ermöglicht Enhancer-RNA (eRNA) Funktion in transkriptioneller Regulation?",
          nl: "Welk moleculair mechanisme stelt enhancer RNA (eRNA) functie mogelijk in transcriptionele regulatie?"
        },
        options: [
          { en: "eRNAs facilitate enhancer-promoter looping and recruit transcriptional machinery through RNA-protein interactions", es: "eRNAs facilitan bucles potenciador-promotor y reclutan maquinaria transcripcional a través de interacciones ARN-proteína", de: "eRNAs erleichtern Enhancer-Promotor-Schleifenbildung und rekrutieren Transkriptionsmaschinerie durch RNA-Protein-Interaktionen", nl: "eRNAs faciliteren enhancer-promotor lussen en rekruteren transcriptionele machinerie door RNA-eiwit interacties" },
          { en: "Direct protein coding function", es: "Función directa de codificación proteica", de: "Direkte Protein-kodierende Funktion", nl: "Directe eiwit coderende functie" },
          { en: "DNA replication initiation", es: "Iniciación de replicación de ADN", de: "DNA-Replikations-Initiation", nl: "DNA replicatie initiatie" },
          { en: "Chromosome condensation", es: "Condensación cromosómica", de: "Chromosomen-Kondensation", nl: "Chromosoom condensatie" }
        ],
        correct: 0,
        explanation: {
          en: "Enhancer RNAs are transcribed from active enhancers and function to stabilize enhancer-promoter chromatin loops, recruit RNA polymerase II and transcriptional cofactors, and facilitate efficient transcriptional activation of target genes.",
          es: "Los ARNs potenciadores se transcriben desde potenciadores activos y funcionan para estabilizar bucles de cromatina potenciador-promotor, reclutar ARN polimerasa II y cofactores transcripcionales.",
          de: "Enhancer-RNAs werden von aktiven Enhancern transkribiert und funktionieren zur Stabilisierung von Enhancer-Promotor-Chromatin-Schleifen, rekrutieren RNA-Polymerase II und transkriptionelle Kofaktoren.",
          nl: "Enhancer RNAs worden getranscribeerd vanaf actieve enhancers en functioneren om enhancer-promotor chromatine lussen te stabiliseren, RNA polymerase II en transcriptionele cofactoren te rekruteren."
        }
      },
      {
        question: {
          en: "How does DNA methylation maintenance occur during replication through DNMT1 and PCNA?",
          es: "¿Cómo ocurre el mantenimiento de metilación de ADN durante replicación a través de DNMT1 y PCNA?",
          de: "Wie erfolgt DNA-Methylierungs-Erhaltung während Replikation durch DNMT1 und PCNA?",
          nl: "Hoe treedt DNA methylatie onderhoud op tijdens replicatie door DNMT1 en PCNA?"
        },
        options: [
          { en: "PCNA recruits DNMT1 to replication foci where UHRF1 recognizes hemimethylated CpG sites for methylation restoration", es: "PCNA recluta DNMT1 a focos de replicación donde UHRF1 reconoce sitios CpG hemimetilados para restauración de metilación", de: "PCNA rekrutiert DNMT1 zu Replikationsfoci wo UHRF1 hemimethylierte CpG-Stellen für Methylierungs-Wiederherstellung erkennt", nl: "PCNA rekruteert DNMT1 naar replicatie foci waar UHRF1 hemimethyleerde CpG plaatsen herkent voor methylatie herstel" },
          { en: "Random methylation of all cytosines", es: "Metilación aleatoria de todas las citosinas", de: "Zufällige Methylierung aller Cytosine", nl: "Willekeurige methylatie van alle cytosines" },
          { en: "Complete demethylation during replication", es: "Desmetilación completa durante replicación", de: "Vollständige Demethylierung während Replikation", nl: "Volledige demethylatie tijdens replicatie" },
          { en: "Histone modification only", es: "Solo modificación de histonas", de: "Nur Histon-Modifikation", nl: "Alleen histon modificatie" }
        ],
        correct: 0,
        explanation: {
          en: "During DNA replication, PCNA (proliferating cell nuclear antigen) recruits DNMT1 to replication foci. UHRF1 recognizes hemimethylated CpG dinucleotides on the parental strand and targets DNMT1 to methylate the newly synthesized strand, maintaining methylation patterns.",
          es: "Durante la replicación de ADN, PCNA (antígeno nuclear de célula proliferante) recluta DNMT1 a focos de replicación. UHRF1 reconoce dinucleótidos CpG hemimetilados y dirige DNMT1.",
          de: "Während DNA-Replikation rekrutiert PCNA (proliferierendes Zellkern-Antigen) DNMT1 zu Replikationsfoci. UHRF1 erkennt hemimethylierte CpG-Dinukleotide und richtet DNMT1 aus.",
          nl: "Tijdens DNA replicatie rekruteert PCNA (prolifererend cel nucleair antigen) DNMT1 naar replicatie foci. UHRF1 herkent hemimethyleerde CpG dinucleotiden en richt DNMT1."
        }
      },
      {
        question: {
          en: "What mechanism drives insulator function through CTCF and cohesin interactions?",
          es: "¿Qué mecanismo impulsa la función de aislador a través de interacciones CTCF y cohesina?",
          de: "Welcher Mechanismus treibt Insulator-Funktion durch CTCF- und Cohesin-Interaktionen an?",
          nl: "Welk mechanisme drijft isolator functie aan door CTCF en cohesin interacties?"
        },
        options: [
          { en: "CTCF-cohesin complexes form chromatin loops that block enhancer-promoter interactions and organize topological domains", es: "Complejos CTCF-cohesina forman bucles de cromatina que bloquean interacciones potenciador-promotor y organizan dominios topológicos", de: "CTCF-Cohesin-Komplexe bilden Chromatin-Schleifen, die Enhancer-Promotor-Interaktionen blockieren und topologische Domänen organisieren", nl: "CTCF-cohesin complexen vormen chromatine lussen die enhancer-promotor interacties blokkeren en topologische domeinen organiseren" },
          { en: "Direct DNA cutting and rejoining", es: "Corte directo y reunión de ADN", de: "Direktes DNA-Schneiden und -Verbinden", nl: "Direct DNA snijden en herverbinden" },
          { en: "Histone acetylation only", es: "Solo acetilación de histonas", de: "Nur Histon-Acetylierung", nl: "Alleen histon acetylering" },
          { en: "RNA interference mechanisms", es: "Mecanismos de interferencia de ARN", de: "RNA-Interferenz-Mechanismen", nl: "RNA interferentie mechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "CTCF binds to insulator sequences and recruits cohesin complexes to form chromatin loops that partition the genome into topologically associating domains (TADs), preventing inappropriate enhancer-promoter interactions and organizing higher-order chromatin structure.",
          es: "CTCF se une a secuencias aisladoras y recluta complejos de cohesina para formar bucles de cromatina que dividen el genoma en dominios de asociación topológica.",
          de: "CTCF bindet an Insulator-Sequenzen und rekrutiert Cohesin-Komplexe zur Bildung von Chromatin-Schleifen, die das Genom in topologisch assoziierte Domänen unterteilen.",
          nl: "CTCF bindt aan isolator sequenties en rekruteert cohesin complexen om chromatine lussen te vormen die het genoom verdelen in topologisch associërende domeinen."
        }
      },
      {
        question: {
          en: "How does chromatin accessibility profiling through ATAC-seq reveal regulatory landscapes?",
          es: "¿Cómo revela el perfilado de accesibilidad de cromatina a través de ATAC-seq paisajes regulatorios?",
          de: "Wie enthüllt Chromatin-Zugänglichkeits-Profiling durch ATAC-seq regulatorische Landschaften?",
          nl: "Hoe onthult chromatine toegankelijkheid profilering door ATAC-seq regulatoire landschappen?"
        },
        options: [
          { en: "Tn5 transposase preferentially inserts into accessible chromatin regions, identifying open regulatory elements", es: "Transposasa Tn5 se inserta preferentemente en regiones de cromatina accesibles, identificando elementos regulatorios abiertos", de: "Tn5-Transposase inseriert bevorzugt in zugängliche Chromatin-Regionen und identifiziert offene regulatorische Elemente", nl: "Tn5 transposase invoegt bij voorkeur in toegankelijke chromatine regio's, open regulatoire elementen identificerend" },
          { en: "Random DNA fragmentation", es: "Fragmentación aleatoria de ADN", de: "Zufällige DNA-Fragmentierung", nl: "Willekeurige DNA fragmentatie" },
          { en: "Protein immunoprecipitation", es: "Inmunoprecipitación de proteínas", de: "Protein-Immunpräzipitation", nl: "Eiwit immunoprecipitatie" },
          { en: "RNA sequencing only", es: "Solo secuenciación de ARN", de: "Nur RNA-Sequenzierung", nl: "Alleen RNA sequencing" }
        ],
        correct: 0,
        explanation: {
          en: "ATAC-seq (Assay for Transposase-Accessible Chromatin using sequencing) uses hyperactive Tn5 transposase to preferentially fragment and tag accessible chromatin regions, providing genome-wide maps of open chromatin and active regulatory elements.",
          es: "ATAC-seq (Ensayo para Cromatina Accesible a Transposasa usando secuenciación) usa transposasa Tn5 hiperactiva para fragmentar y marcar preferentemente regiones de cromatina accesibles.",
          de: "ATAC-seq (Assay für Transposase-zugängliches Chromatin mit Sequenzierung) verwendet hyperaktive Tn5-Transposase zur bevorzugten Fragmentierung und Markierung zugänglicher Chromatin-Regionen.",
          nl: "ATAC-seq (Assay voor Transposase-Toegankelijk Chromatine met sequencing) gebruikt hyperactieve Tn5 transposase om bij voorkeur toegankelijke chromatine regio's te fragmenteren en markeren."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables epigenetic reprogramming during induced pluripotency?",
          es: "¿Qué mecanismo molecular permite reprogramación epigenética durante pluripotencia inducida?",
          de: "Welcher molekulare Mechanismus ermöglicht epigenetische Reprogrammierung während induzierter Pluripotenz?",
          nl: "Welk moleculair mechanisme stelt epigenetische herprogrammering mogelijk tijdens geïnduceerde pluripotentie?"
        },
        options: [
          { en: "Yamanaka factors recruit chromatin remodeling complexes and TET enzymes to erase somatic epigenetic marks", es: "Factores Yamanaka reclutan complejos remodeladores de cromatina y enzimas TET para borrar marcas epigenéticas somáticas", de: "Yamanaka-Faktoren rekrutieren Chromatin-Remodeling-Komplexe und TET-Enzyme zur Löschung somatischer epigenetischer Markierungen", nl: "Yamanaka factoren rekruteren chromatine hermodellering complexen en TET enzymen om somatische epigenetische markeringen te wissen" },
          { en: "Direct DNA sequence changes", es: "Cambios directos de secuencia de ADN", de: "Direkte DNA-Sequenzänderungen", nl: "Directe DNA sequentie veranderingen" },
          { en: "Chromosome number alterations", es: "Alteraciones del número cromosómico", de: "Chromosomenzahl-Veränderungen", nl: "Chromosoom aantal veranderingen" },
          { en: "Protein degradation only", es: "Solo degradación proteica", de: "Nur Protein-Abbau", nl: "Alleen eiwit degradatie" }
        ],
        correct: 0,
        explanation: {
          en: "During iPSC reprogramming, Yamanaka factors (Oct4, Sox2, Klf4, c-Myc) recruit chromatin remodeling complexes like SWI/SNF, activate TET enzymes for DNA demethylation, and reorganize chromatin architecture to erase somatic cell identity and establish pluripotent epigenetic states.",
          es: "Durante la reprogramación de iPSC, los factores Yamanaka reclutan complejos remodeladores de cromatina como SWI/SNF, activan enzimas TET para desmetilación de ADN.",
          de: "Während iPSC-Reprogrammierung rekrutieren Yamanaka-Faktoren Chromatin-Remodeling-Komplexe wie SWI/SNF, aktivieren TET-Enzyme für DNA-Demethylierung.",
          nl: "Tijdens iPSC herprogrammering rekruteren Yamanaka factoren chromatine hermodellering complexen zoals SWI/SNF, activeren TET enzymen voor DNA demethylering."
        }
      },
      {
        question: {
          en: "How does RNA polymerase II carboxy-terminal domain (CTD) coordinate transcription and RNA processing?",
          es: "¿Cómo coordina el dominio carboxi-terminal (CTD) de ARN polimerasa II la transcripción y procesamiento de ARN?",
          de: "Wie koordiniert die Carboxy-terminale Domäne (CTD) der RNA-Polymerase II Transkription und RNA-Verarbeitung?",
          nl: "Hoe coördineert RNA polymerase II carboxy-terminale domein (CTD) transcriptie en RNA verwerking?"
        },
        options: [
          { en: "CTD phosphorylation patterns recruit specific RNA processing factors at different stages of transcription", es: "Patrones de fosforilación CTD reclutan factores específicos de procesamiento de ARN en diferentes etapas de transcripción", de: "CTD-Phosphorylierungsmuster rekrutieren spezifische RNA-Verarbeitungsfaktoren in verschiedenen Transkriptionsstadien", nl: "CTD fosforylering patronen rekruteren specifieke RNA verwerkingsfactoren in verschillende transcriptie stadia" },
          { en: "Direct RNA binding only", es: "Solo unión directa al ARN", de: "Nur direkte RNA-Bindung", nl: "Alleen directe RNA binding" },
          { en: "DNA methylation recognition", es: "Reconocimiento de metilación de ADN", de: "DNA-Methylierungs-Erkennung", nl: "DNA methylatie herkenning" },
          { en: "Histone modification only", es: "Solo modificación de histonas", de: "Nur Histon-Modifikation", nl: "Alleen histon modificatie" }
        ],
        correct: 0,
        explanation: {
          en: "The RNA polymerase II CTD contains heptapeptide repeats that undergo dynamic phosphorylation. Ser5 phosphorylation recruits capping enzymes during initiation, while Ser2 phosphorylation during elongation recruits splicing factors and 3' processing machinery, coupling transcription with RNA processing.",
          es: "El CTD de ARN polimerasa II contiene repeticiones heptapeptídicas que experimentan fosforilación dinámica. La fosforilación Ser5 recluta enzimas de encapsulación durante iniciación.",
          de: "Das RNA-Polymerase II CTD enthält Heptapeptid-Wiederholungen, die dynamische Phosphorylierung erfahren. Ser5-Phosphorylierung rekrutiert Capping-Enzyme während Initiation.",
          nl: "Het RNA polymerase II CTD bevat heptapeptide herhalingen die dynamische fosforylering ondergaan. Ser5 fosforylering rekruteert capping enzymen tijdens initiatie."
        }
      },
      {
        question: {
          en: "What mechanism drives super-enhancer formation through transcriptional condensates?",
          es: "¿Qué mecanismo impulsa la formación de súper-potenciadores a través de condensados transcripcionales?",
          de: "Welcher Mechanismus treibt Super-Enhancer-Bildung durch transkriptionelle Kondensate an?",
          nl: "Welk mechanisme drijft super-enhancer vorming aan door transcriptionele condensaten?"
        },
        options: [
          { en: "Phase separation of transcriptional machinery creates high-concentration regulatory hubs at clustered enhancers", es: "Separación de fases de maquinaria transcripcional crea centros regulatorios de alta concentración en potenciadores agrupados", de: "Phasentrennung der Transkriptionsmaschinerie schafft hochkonzentrierte regulatorische Zentren an geclusterten Enhancern", nl: "Fase scheiding van transcriptionele machinerie creëert hoge-concentratie regulatoire hubs bij geclusterde enhancers" },
          { en: "Direct DNA binding without proteins", es: "Unión directa al ADN sin proteínas", de: "Direkte DNA-Bindung ohne Proteine", nl: "Directe DNA binding zonder eiwitten" },
          { en: "Histone removal only", es: "Solo eliminación de histonas", de: "Nur Histon-Entfernung", nl: "Alleen histon verwijdering" },
          { en: "DNA methylation clustering", es: "Agrupamiento de metilación de ADN", de: "DNA-Methylierungs-Clusterung", nl: "DNA methylatie clustering" }
        ],
        correct: 0,
        explanation: {
          en: "Super-enhancers form through liquid-liquid phase separation of transcriptional machinery, creating high-concentration condensates of RNA polymerase II, Mediator, and transcription factors that drive robust gene expression at key cell identity genes.",
          es: "Los súper-potenciadores se forman a través de separación de fases líquido-líquido de maquinaria transcripcional, creando condensados de alta concentración de ARN polimerasa II.",
          de: "Super-Enhancer bilden sich durch Flüssig-Flüssig-Phasentrennung der Transkriptionsmaschinerie, schaffen hochkonzentrierte Kondensate von RNA-Polymerase II.",
          nl: "Super-enhancers vormen door vloeistof-vloeistof fase scheiding van transcriptionele machinerie, hoge-concentratie condensaten van RNA polymerase II creërend."
        }
      },
      {
        question: {
          en: "How does BRD4 function as a chromatin reader in transcriptional activation?",
          es: "¿Cómo funciona BRD4 como lector de cromatina en activación transcripcional?",
          de: "Wie funktioniert BRD4 als Chromatin-Leser in transkriptioneller Aktivierung?",
          nl: "Hoe functioneert BRD4 als chromatine lezer in transcriptionele activatie?"
        },
        options: [
          { en: "BRD4 bromodomains recognize acetylated histones and recruit RNA polymerase II and transcriptional machinery", es: "Bromodominios BRD4 reconocen histonas acetiladas y reclutan ARN polimerasa II y maquinaria transcripcional", de: "BRD4-Bromodomänen erkennen acetylierte Histone und rekrutieren RNA-Polymerase II und Transkriptionsmaschinerie", nl: "BRD4 bromodomeinen herkennen geacetyleerde histonen en rekruteren RNA polymerase II en transcriptionele machinerie" },
          { en: "Direct DNA methylation activity", es: "Actividad directa de metilación de ADN", de: "Direkte DNA-Methylierungs-Aktivität", nl: "Directe DNA methylatie activiteit" },
          { en: "Histone deacetylation function", es: "Función de desacetilación de histonas", de: "Histon-Deacetylierungs-Funktion", nl: "Histon deacetylering functie" },
          { en: "Chromatin condensation activity", es: "Actividad de condensación de cromatina", de: "Chromatin-Kondensations-Aktivität", nl: "Chromatine condensatie activiteit" }
        ],
        correct: 0,
        explanation: {
          en: "BRD4 contains tandem bromodomains that specifically recognize and bind to acetylated lysine residues on histones H3 and H4. Upon binding acetylated chromatin, BRD4 recruits RNA polymerase II, Mediator complex, and transcriptional machinery to promote active transcription.",
          es: "BRD4 contiene bromodominios en tándem que reconocen específicamente y se unen a residuos de lisina acetilados en histonas H3 y H4.",
          de: "BRD4 enthält Tandem-Bromodomänen, die spezifisch acetylierte Lysin-Reste an Histonen H3 und H4 erkennen und binden.",
          nl: "BRD4 bevat tandem bromodomeinen die specifiek geacetyleerde lysine residuen op histonen H3 en H4 herkennen en binden."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables maternal effect inheritance through oocyte chromatin modifications?",
          es: "¿Qué mecanismo molecular permite herencia de efecto materno a través de modificaciones de cromatina de ovocito?",
          de: "Welcher molekulare Mechanismus ermöglicht maternale Effekt-Vererbung durch Oozyt-Chromatin-Modifikationen?",
          nl: "Welk moleculair mechanisme stelt maternaal effect overerving mogelijk door eicel chromatine modificaties?"
        },
        options: [
          { en: "Maternally deposited chromatin modifiers and transcription factors establish early embryonic gene expression programs", es: "Modificadores de cromatina y factores de transcripción depositados maternalmente establecen programas de expresión génica embrionaria temprana", de: "Maternal deponierte Chromatin-Modifikatoren und Transkriptionsfaktoren etablieren frühe embryonale Genexpressionsprogramme", nl: "Maternaal gedeponeerde chromatine modificeerders en transcriptiefactoren vestigen vroege embryonale genexpressie programma's" },
          { en: "Direct DNA sequence inheritance", es: "Herencia directa de secuencia de ADN", de: "Direkte DNA-Sequenz-Vererbung", nl: "Directe DNA sequentie overerving" },
          { en: "Cytoplasmic protein degradation", es: "Degradación de proteínas citoplásmicas", de: "Zytoplasmatischer Protein-Abbau", nl: "Cytoplasmatische eiwit degradatie" },
          { en: "Mitochondrial inheritance only", es: "Solo herencia mitocondrial", de: "Nur mitochondriale Vererbung", nl: "Alleen mitochondriale overerving" }
        ],
        correct: 0,
        explanation: {
          en: "During oogenesis, the oocyte accumulates chromatin modifying enzymes, transcription factors, and regulatory RNAs that are deposited in the egg cytoplasm. These maternal factors establish initial chromatin states and gene expression programs in the early embryo before zygotic genome activation.",
          es: "Durante la ovogénesis, el ovocito acumula enzimas modificadoras de cromatina, factores de transcripción y ARNs regulatorios que se depositan en el citoplasma del huevo.",
          de: "Während der Oogenese akkumuliert die Oozyt Chromatin-modifizierende Enzyme, Transkriptionsfaktoren und regulatorische RNAs, die im Ei-Zytoplasma deponiert werden.",
          nl: "Tijdens oogenese accumuleert de eicel chromatine modificerende enzymen, transcriptiefactoren en regulatoire RNAs die worden gedeponeerd in het ei cytoplasma."
        }
      },
      {
        question: {
          en: "How does chromatin replication timing control gene expression domains?",
          es: "¿Cómo controla el tiempo de replicación de cromatina los dominios de expresión génica?",
          de: "Wie kontrolliert Chromatin-Replikations-Timing Genexpressions-Domänen?",
          nl: "Hoe controleert chromatine replicatie timing genexpressie domeinen?"
        },
        options: [
          { en: "Early replicating domains correlate with active chromatin and gene expression, while late domains are repressive", es: "Dominios de replicación temprana se correlacionan con cromatina activa y expresión génica, mientras dominios tardíos son represivos", de: "Früh replizierende Domänen korrelieren mit aktivem Chromatin und Genexpression, während späte Domänen repressiv sind", nl: "Vroeg replicerende domeinen correleren met actief chromatine en genexpressie, terwijl late domeinen repressief zijn" },
          { en: "All genes replicate simultaneously", es: "Todos los genes se replican simultáneamente", de: "Alle Gene replizieren gleichzeitig", nl: "Alle genen repliceren gelijktijdig" },
          { en: "Replication timing is random", es: "El tiempo de replicación es aleatorio", de: "Replikations-Timing ist zufällig", nl: "Replicatie timing is willekeurig" },
          { en: "Only affects chromosome structure", es: "Solo afecta estructura cromosómica", de: "Beeinflusst nur Chromosomenstruktur", nl: "Beïnvloedt alleen chromosoom structuur" }
        ],
        correct: 0,
        explanation: {
          en: "Replication timing is highly regulated, with euchromatic, gene-rich regions replicating early in S phase, while heterochromatic, gene-poor regions replicate late. This timing correlates with chromatin accessibility, histone modifications, and transcriptional activity patterns.",
          es: "El tiempo de replicación está altamente regulado, con regiones eucromatínicas ricas en genes replicándose temprano en fase S, mientras regiones heterocromatínicas pobres en genes se replican tarde.",
          de: "Replikations-Timing ist hochreguliert, mit euchromatischen, genreichen Regionen, die früh in S-Phase replizieren, während heterochromatische, genarme Regionen spät replizieren.",
          nl: "Replicatie timing is sterk gereguleerd, met euchromatische, gen-rijke regio's die vroeg in S fase repliceren, terwijl heterochromatische, gen-arme regio's laat repliceren."
        }
      },
      {
        question: {
          en: "What mechanism drives enhancer hijacking in cancer through chromosomal rearrangements?",
          es: "¿Qué mecanismo impulsa el secuestro de potenciadores en cáncer a través de reordenamientos cromosómicos?",
          de: "Welcher Mechanismus treibt Enhancer-Entführung in Krebs durch chromosomale Umstellungen an?",
          nl: "Welk mechanisme drijft enhancer kaping aan in kanker door chromosomale herrangschikkingen?"
        },
        options: [
          { en: "Translocations place oncogenes under control of strong enhancers, leading to inappropriate overexpression", es: "Translocaciones ponen oncogenes bajo control de potenciadores fuertes, llevando a sobreexpresión inapropiada", de: "Translokationen stellen Onkogene unter Kontrolle starker Enhancer, führen zu unangemessener Überexpression", nl: "Translocaties plaatsen oncogenen onder controle van sterke enhancers, leidend tot ongepaste overexpressie" },
          { en: "Direct DNA damage only", es: "Solo daño directo al ADN", de: "Nur direkter DNA-Schaden", nl: "Alleen directe DNA schade" },
          { en: "Protein misfolding", es: "Mal plegamiento de proteínas", de: "Protein-Fehlfaltung", nl: "Eiwit misvouwing" },
          { en: "Metabolic dysfunction", es: "Disfunción metabólica", de: "Metabolische Dysfunktion", nl: "Metabole disfunctie" }
        ],
        correct: 0,
        explanation: {
          en: "Enhancer hijacking occurs when chromosomal rearrangements like translocations or inversions place proto-oncogenes under the regulatory control of strong enhancers from other loci, leading to oncogene overexpression and tumorigenesis without direct gene disruption.",
          es: "El secuestro de potenciadores ocurre cuando reordenamientos cromosómicos como translocaciones o inversiones ponen proto-oncogenes bajo control regulatorio de potenciadores fuertes.",
          de: "Enhancer-Entführung tritt auf wenn chromosomale Umstellungen wie Translokationen oder Inversionen Proto-Onkogene unter regulatorische Kontrolle starker Enhancer stellen.",
          nl: "Enhancer kaping treedt op wanneer chromosomale herrangschikkingen zoals translocaties of inversies proto-oncogenen onder regulatoire controle van sterke enhancers plaatsen."
        }
      },
      {
        question: {
          en: "How does polycomb group protein recruitment establish repressive chromatin domains?",
          es: "¿Cómo establece el reclutamiento de proteínas del grupo polycomb dominios de cromatina represivos?",
          de: "Wie etabliert Polycomb-Gruppen-Protein-Rekrutierung repressive Chromatin-Domänen?",
          nl: "Hoe vestigt polycomb groep eiwit rekrutering repressieve chromatine domeinen?"
        },
        options: [
          { en: "CpG islands and polycomb response elements recruit PRC2 complexes that spread H3K27me3 across gene clusters", es: "Islas CpG y elementos de respuesta polycomb reclutan complejos PRC2 que extienden H3K27me3 a través de grupos de genes", de: "CpG-Inseln und Polycomb-Antwort-Elemente rekrutieren PRC2-Komplexe, die H3K27me3 über Gen-Cluster ausbreiten", nl: "CpG eilanden en polycomb respons elementen rekruteren PRC2 complexen die H3K27me3 verspreiden over gen clusters" },
          { en: "Random protein binding", es: "Unión proteica aleatoria", de: "Zufällige Protein-Bindung", nl: "Willekeurige eiwit binding" },
          { en: "DNA methylation only", es: "Solo metilación de ADN", de: "Nur DNA-Methylierung", nl: "Alleen DNA methylatie" },
          { en: "Chromatin condensation", es: "Condensación de cromatina", de: "Chromatin-Kondensation", nl: "Chromatine condensatie" }
        ],
        correct: 0,
        explanation: {
          en: "Polycomb recruitment occurs at CpG islands and polycomb response elements (PREs) where PRC2 is recruited and catalyzes H3K27me3. This repressive mark spreads across neighboring regions and recruits PRC1, which ubiquitylates H2AK119 and compacts chromatin for stable gene silencing.",
          es: "El reclutamiento de Polycomb ocurre en islas CpG y elementos de respuesta polycomb donde PRC2 es reclutado y cataliza H3K27me3.",
          de: "Polycomb-Rekrutierung erfolgt an CpG-Inseln und Polycomb-Antwort-Elementen wo PRC2 rekrutiert wird und H3K27me3 katalysiert.",
          nl: "Polycomb rekrutering treedt op bij CpG eilanden en polycomb respons elementen waar PRC2 wordt gerekruteerd en H3K27me3 katalyseert."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables transcriptional bursting regulation through chromatin accessibility?",
          es: "¿Qué mecanismo molecular permite regulación de estallido transcripcional a través de accesibilidad de cromatina?",
          de: "Welcher molekulare Mechanismus ermöglicht transkriptionelle Burst-Regulation durch Chromatin-Zugänglichkeit?",
          nl: "Welk moleculair mechanisme stelt transcriptionele burst regulatie mogelijk door chromatine toegankelijkheid?"
        },
        options: [
          { en: "Stochastic chromatin opening creates temporal windows for transcription factor binding and RNA polymerase recruitment", es: "Apertura estocástica de cromatina crea ventanas temporales para unión de factores de transcripción y reclutamiento de ARN polimerasa", de: "Stochastische Chromatin-Öffnung schafft zeitliche Fenster für Transkriptionsfaktor-Bindung und RNA-Polymerase-Rekrutierung", nl: "Stochastische chromatine opening creëert temporele vensters voor transcriptiefactor binding en RNA polymerase rekrutering" },
          { en: "Constant gene expression levels", es: "Niveles constantes de expresión génica", de: "Konstante Genexpressions-Level", nl: "Constante genexpressie niveaus" },
          { en: "Protein degradation only", es: "Solo degradación proteica", de: "Nur Protein-Abbau", nl: "Alleen eiwit degradatie" },
          { en: "DNA replication timing", es: "Tiempo de replicación de ADN", de: "DNA-Replikations-Timing", nl: "DNA replicatie timing" }
        ],
        correct: 0,
        explanation: {
          en: "Transcriptional bursting occurs when chromatin undergoes stochastic transitions between closed and open states. During open periods, transcription factors can bind and recruit RNA polymerase, leading to bursts of transcription followed by periods of silence when chromatin is inaccessible.",
          es: "El estallido transcripcional ocurre cuando la cromatina experimenta transiciones estocásticas entre estados cerrados y abiertos. Durante períodos abiertos, factores de transcripción pueden unirse.",
          de: "Transkriptionelles Bursting tritt auf wenn Chromatin stochastische Übergänge zwischen geschlossenen und offenen Zuständen erfahrt. Während offener Perioden können Transkriptionsfaktoren binden.",
          nl: "Transcriptionele bursting treedt op wanneer chromatine stochastische overgangen ondergaat tussen gesloten en open toestanden. Tijdens open perioden kunnen transcriptiefactoren binden."
        }
      },
      {
        question: {
          en: "How does locus control region (LCR) function regulate tissue-specific gene expression?",
          es: "¿Cómo regula la función de región de control de locus (LCR) la expresión génica específica de tejido?",
          de: "Wie reguliert Locus-Kontroll-Region (LCR) Funktion gewebespezifische Genexpression?",
          nl: "Hoe reguleert locus controle regio (LCR) functie weefsel-specifieke genexpressie?"
        },
        options: [
          { en: "LCRs contain multiple enhancer elements that establish chromatin domains and coordinate expression of linked gene clusters", es: "LCRs contienen múltiples elementos potenciadores que establecen dominios de cromatina y coordinan expresión de grupos de genes ligados", de: "LCRs enthalten multiple Enhancer-Elemente, die Chromatin-Domänen etablieren und Expression verknüpfter Gen-Cluster koordinieren", nl: "LCRs bevatten meerdere enhancer elementen die chromatine domeinen vestigen en expressie van gekoppelde gen clusters coördineren" },
          { en: "Single enhancer activity only", es: "Solo actividad de potenciador único", de: "Nur einzelne Enhancer-Aktivität", nl: "Alleen enkele enhancer activiteit" },
          { en: "DNA methylation changes", es: "Cambios de metilación de ADN", de: "DNA-Methylierungsänderungen", nl: "DNA methylatie veranderingen" },
          { en: "Histone removal", es: "Eliminación de histonas", de: "Histon-Entfernung", nl: "Histon verwijdering" }
        ],
        correct: 0,
        explanation: {
          en: "Locus control regions like the β-globin LCR contain clusters of DNase I hypersensitive sites with multiple enhancer elements. They establish open chromatin domains, overcome position effects, and coordinate tissue-specific expression of linked genes through long-range interactions.",
          es: "Las regiones de control de locus como el LCR β-globina contienen grupos de sitios hipersensibles a DNasa I con múltiples elementos potenciadores.",
          de: "Locus-Kontroll-Regionen wie das β-Globin LCR enthalten Cluster von DNase I-hypersensitiven Stellen mit multiplen Enhancer-Elementen.",
          nl: "Locus controle regio's zoals het β-globine LCR bevatten clusters van DNase I hypergevoelige plaatsen met meerdere enhancer elementen."
        }
      },
      {
        question: {
          en: "What mechanism drives nucleosome positioning at transcription start sites?",
          es: "¿Qué mecanismo impulsa el posicionamiento de nucleosomas en sitios de inicio de transcripción?",
          de: "Welcher Mechanismus treibt Nukleosom-Positionierung an Transkriptions-Start-Stellen an?",
          nl: "Welk mechanisme drijft nucleosoom positionering aan bij transcriptie start plaatsen?"
        },
        options: [
          { en: "ATP-dependent chromatin remodelers and transcription factor binding create nucleosome-free regions at promoters", es: "Remodeladores de cromatina dependientes de ATP y unión de factores de transcripción crean regiones libres de nucleosomas en promotores", de: "ATP-abhängige Chromatin-Remodeler und Transkriptionsfaktor-Bindung schaffen nucleosomfreie Regionen an Promotoren", nl: "ATP-afhankelijke chromatine hermodelleerders en transcriptiefactor binding creëren nucleosoom-vrije regio's bij promotors" },
          { en: "Random nucleosome distribution", es: "Distribución aleatoria de nucleosomas", de: "Zufällige Nukleosom-Verteilung", nl: "Willekeurige nucleosoom distributie" },
          { en: "DNA methylation only", es: "Solo metilación de ADN", de: "Nur DNA-Methylierung", nl: "Alleen DNA methylatie" },
          { en: "Histone acetylation alone", es: "Solo acetilación de histonas", de: "Nur Histon-Acetylierung", nl: "Alleen histon acetylering" }
        ],
        correct: 0,
        explanation: {
          en: "At active promoters, transcription factors compete with histones for DNA binding, while ATP-dependent chromatin remodelers like SWI/SNF slide nucleosomes away from transcription start sites, creating nucleosome-free regions that facilitate RNA polymerase binding and transcription initiation.",
          es: "En promotores activos, factores de transcripción compiten con histonas por unión al ADN, mientras remodeladores de cromatina dependientes de ATP deslizan nucleosomas.",
          de: "An aktiven Promotoren konkurrieren Transkriptionsfaktoren mit Histonen um DNA-Bindung, während ATP-abhängige Chromatin-Remodeler Nukleosomen wegschieben.",
          nl: "Bij actieve promotors concurreren transcriptiefactoren met histonen om DNA binding, terwijl ATP-afhankelijke chromatine hermodelleerders nucleosomen wegschuiven."
        }
      },
      {
        question: {
          en: "How does chromatin immunoprecipitation sequencing (ChIP-seq) map protein-DNA interactions genome-wide?",
          es: "¿Cómo mapea la secuenciación de inmunoprecipitación de cromatina (ChIP-seq) interacciones proteína-ADN a nivel del genoma?",
          de: "Wie kartiert Chromatin-Immunpräzipitations-Sequenzierung (ChIP-seq) Protein-DNA-Interaktionen genomweit?",
          nl: "Hoe brengt chromatine immunoprecipitatie sequencing (ChIP-seq) eiwit-DNA interacties genoom-breed in kaart?"
        },
        options: [
          { en: "Crosslinking fixes protein-DNA complexes, immunoprecipitation enriches target proteins, and sequencing identifies binding sites", es: "Entrecruzamiento fija complejos proteína-ADN, inmunoprecipitación enriquece proteínas objetivo, y secuenciación identifica sitios de unión", de: "Quervernetzung fixiert Protein-DNA-Komplexe, Immunpräzipitation reichert Ziel-Proteine an, und Sequenzierung identifiziert Bindungsstellen", nl: "Crosslinking fixeert eiwit-DNA complexen, immunoprecipitatie verrijkt doel eiwitten, en sequencing identificeert bindingsplaatsen" },
          { en: "Direct protein sequencing", es: "Secuenciación directa de proteínas", de: "Direkte Protein-Sequenzierung", nl: "Directe eiwit sequencing" },
          { en: "RNA analysis only", es: "Solo análisis de ARN", de: "Nur RNA-Analyse", nl: "Alleen RNA analyse" },
          { en: "Metabolic labeling", es: "Marcaje metabólico", de: "Metabolische Markierung", nl: "Metabole labeling" }
        ],
        correct: 0,
        explanation: {
          en: "ChIP-seq involves formaldehyde crosslinking to fix protein-DNA interactions, chromatin fragmentation, immunoprecipitation with specific antibodies to enrich the protein of interest, followed by DNA purification and high-throughput sequencing to map binding sites genome-wide.",
          es: "ChIP-seq involucra entrecruzamiento con formaldehído para fijar interacciones proteína-ADN, fragmentación de cromatina, inmunoprecipitación con anticuerpos específicos.",
          de: "ChIP-seq umfasst Formaldehyd-Quervernetzung zur Fixierung von Protein-DNA-Interaktionen, Chromatin-Fragmentierung, Immunpräzipitation mit spezifischen Antikörpern.",
          nl: "ChIP-seq behelst formaldehyde crosslinking om eiwit-DNA interacties te fixeren, chromatine fragmentatie, immunoprecipitatie met specifieke antilichamen."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables imprinting through allele-specific DNA methylation?",
          es: "¿Qué mecanismo molecular permite impronta a través de metilación de ADN específica de alelo?",
          de: "Welcher molekulare Mechanismus ermöglicht Imprinting durch allel-spezifische DNA-Methylierung?",
          nl: "Welk moleculair mechanisme stelt imprinting mogelijk door allel-specifieke DNA methylatie?"
        },
        options: [
          { en: "Imprinting control regions acquire differential methylation during gametogenesis, leading to parent-of-origin gene expression", es: "Regiones de control de impronta adquieren metilación diferencial durante gametogénesis, llevando a expresión génica de origen parental", de: "Imprinting-Kontroll-Regionen erwerben differentielle Methylierung während Gametogenese, führen zu elterlicher Ursprungs-Genexpression", nl: "Imprinting controle regio's verkrijgen differentiële methylatie tijdens gametogenese, leidend tot ouder-van-oorsprong genexpressie" },
          { en: "Random DNA methylation", es: "Metilación aleatoria de ADN", de: "Zufällige DNA-Methylierung", nl: "Willekeurige DNA methylatie" },
          { en: "Histone modifications only", es: "Solo modificaciones de histonas", de: "Nur Histon-Modifikationen", nl: "Alleen histon modificaties" },
          { en: "Chromosome segregation", es: "Segregación cromosómica", de: "Chromosomen-Segregation", nl: "Chromosoom segregatie" }
        ],
        correct: 0,
        explanation: {
          en: "Genomic imprinting involves imprinting control regions (ICRs) that acquire allele-specific DNA methylation during gametogenesis. These differentially methylated regions control parent-of-origin-specific gene expression through interaction with chromatin modifiers and transcriptional machinery.",
          es: "La impronta genómica involucra regiones de control de impronta (ICRs) que adquieren metilación de ADN específica de alelo durante gametogénesis.",
          de: "Genomisches Imprinting umfasst Imprinting-Kontroll-Regionen (ICRs), die allel-spezifische DNA-Methylierung während Gametogenese erwerben.",
          nl: "Genomische imprinting behelst imprinting controle regio's (ICRs) die allel-specifieke DNA methylatie verkrijgen tijdens gametogenese."
        }
      },
      {
        question: {
          en: "How does trithorax group function counteract polycomb-mediated repression?",
          es: "¿Cómo contrarresta la función del grupo trithorax la represión mediada por polycomb?",
          de: "Wie wirkt Trithorax-Gruppen-Funktion der Polycomb-vermittelten Repression entgegen?",
          nl: "Hoe werkt trithorax groep functie polycomb-gemedieerde onderdrukking tegen?"
        },
        options: [
          { en: "Trithorax complexes catalyze H3K4me3 and recruit chromatin remodelers to maintain active chromatin states", es: "Complejos trithorax catalizan H3K4me3 y reclutan remodeladores de cromatina para mantener estados de cromatina activos", de: "Trithorax-Komplexe katalysieren H3K4me3 und rekrutieren Chromatin-Remodeler zur Erhaltung aktiver Chromatin-Zustände", nl: "Trithorax complexen katalyseren H3K4me3 en rekruteren chromatine hermodelleerders om actieve chromatine toestanden te onderhouden" },
          { en: "Direct polycomb protein degradation", es: "Degradación directa de proteínas polycomb", de: "Direkte Polycomb-Protein-Abbau", nl: "Directe polycomb eiwit degradatie" },
          { en: "DNA methylation only", es: "Solo metilación de ADN", de: "Nur DNA-Methylierung", nl: "Alleen DNA methylatie" },
          { en: "Chromosome condensation", es: "Condensación cromosómica", de: "Chromosomen-Kondensation", nl: "Chromosoom condensatie" }
        ],
        correct: 0,
        explanation: {
          en: "Trithorax group proteins like MLL complexes catalyze H3K4me3 at active gene promoters, directly opposing H3K27me3 established by Polycomb. Trithorax complexes also recruit chromatin remodelers and transcriptional machinery to maintain genes in an active, accessible state.",
          es: "Las proteínas del grupo trithorax como complejos MLL catalizan H3K4me3 en promotores de genes activos, oponiéndose directamente a H3K27me3 establecido por Polycomb.",
          de: "Trithorax-Gruppen-Proteine wie MLL-Komplexe katalysieren H3K4me3 an aktiven Gen-Promotoren, wirken direkt H3K27me3 entgegen, das von Polycomb etabliert wird.",
          nl: "Trithorax groep eiwitten zoals MLL complexen katalyseren H3K4me3 bij actieve gen promotors, direct tegenwerkend H3K27me3 gevestigd door Polycomb."
        }
      },
      {
        question: {
          en: "What mechanism drives chromatin compartmentalization through liquid-liquid phase separation?",
          es: "¿Qué mecanismo impulsa la compartimentalización de cromatina a través de separación de fases líquido-líquido?",
          de: "Welcher Mechanismus treibt Chromatin-Kompartimentierung durch Flüssig-Flüssig-Phasentrennung an?",
          nl: "Welk mechanisme drijft chromatine compartimentalisatie aan door vloeistof-vloeistof fase scheiding?"
        },
        options: [
          { en: "Intrinsically disordered regions in chromatin proteins drive phase separation to organize nuclear compartments", es: "Regiones intrínsecamente desordenadas en proteínas de cromatina impulsan separación de fases para organizar compartimentos nucleares", de: "Intrinsisch ungeordnete Regionen in Chromatin-Proteinen treiben Phasentrennung zur Organisation nuklearer Kompartimente an", nl: "Intrinsiek ongeordende regio's in chromatine eiwitten drijven fase scheiding aan om nucleaire compartimenten te organiseren" },
          { en: "Direct protein-protein interactions only", es: "Solo interacciones directas proteína-proteína", de: "Nur direkte Protein-Protein-Interaktionen", nl: "Alleen directe eiwit-eiwit interacties" },
          { en: "DNA methylation changes", es: "Cambios de metilación de ADN", de: "DNA-Methylierungsänderungen", nl: "DNA methylatie veranderingen" },
          { en: "Histone deacetylation", es: "Desacetilación de histonas", de: "Histon-Deacetylierung", nl: "Histon deacetylering" }
        ],
        correct: 0,
        explanation: {
          en: "Intrinsically disordered regions in chromatin-associated proteins like HP1, PRC1, and FUS undergo liquid-liquid phase separation to form biomolecular condensates that organize chromatin into distinct nuclear compartments with specialized functions.",
          es: "Las regiones intrínsecamente desordenadas en proteínas asociadas a cromatina como HP1, PRC1 y FUS experimentan separación de fases líquido-líquido para formar condensados biomoleculares.",
          de: "Intrinsisch ungeordnete Regionen in Chromatin-assoziierten Proteinen wie HP1, PRC1 und FUS erfahren Flüssig-Flüssig-Phasentrennung zur Bildung biomolekularer Kondensate.",
          nl: "Intrinsiek ongeordende regio's in chromatine-geassocieerde eiwitten zoals HP1, PRC1 en FUS ondergaan vloeistof-vloeistof fase scheiding om biomoleculaire condensaten te vormen."
        }
      },
      {
        question: {
          en: "How does chromatin bridging through condensin complexes organize mitotic chromosomes?",
          es: "¿Cómo organiza el puenteo de cromatina a través de complejos condensina los cromosomas mitóticos?",
          de: "Wie organisiert Chromatin-Brückenbildung durch Condensin-Komplexe mitotische Chromosomen?",
          nl: "Hoe organiseert chromatine overbrugging door condensin complexen mitotische chromosomen?"
        },
        options: [
          { en: "Condensin forms chromatin loops and bridges between sister chromatids to facilitate chromosome condensation and segregation", es: "Condensina forma bucles de cromatina y puentes entre cromátidas hermanas para facilitar condensación y segregación cromosómica", de: "Condensin bildet Chromatin-Schleifen und Brücken zwischen Schwesterchromatiden zur Erleichterung von Chromosomen-Kondensation und -Segregation", nl: "Condensin vormt chromatine lussen en bruggen tussen zuster chromatiden om chromosoom condensatie en segregatie te faciliteren" },
          { en: "Direct histone removal", es: "Eliminación directa de histonas", de: "Direkte Histon-Entfernung", nl: "Directe histon verwijdering" },
          { en: "DNA methylation only", es: "Solo metilación de ADN", de: "Nur DNA-Methylierung", nl: "Alleen DNA methylatie" },
          { en: "Protein synthesis inhibition", es: "Inhibición de síntesis proteica", de: "Proteinsynthese-Hemmung", nl: "Eiwit synthese inhibitie" }
        ],
        correct: 0,
        explanation: {
          en: "Condensin complexes use ATP hydrolysis to extrude chromatin loops and create bridges between different chromosomal regions, compacting DNA into highly condensed mitotic chromosomes and facilitating proper sister chromatid separation during cell division.",
          es: "Los complejos condensina usan hidrólisis de ATP para extrudir bucles de cromatina y crear puentes entre diferentes regiones cromosómicas, compactando ADN en cromosomas mitóticos altamente condensados.",
          de: "Condensin-Komplexe verwenden ATP-Hydrolyse zur Extrusion von Chromatin-Schleifen und Schaffung von Brücken zwischen verschiedenen chromosomalen Regionen, verdichten DNA in hochkondensierte mitotische Chromosomen.",
          nl: "Condensin complexen gebruiken ATP hydrolyse om chromatine lussen te extruderen en bruggen te creëren tussen verschillende chromosomale regio's, DNA verdichtend in sterk gecondenseerde mitotische chromosomen."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables chromatin-mediated transcriptional memory across generations?",
          es: "¿Qué mecanismo molecular permite memoria transcripcional mediada por cromatina a través de generaciones?",
          de: "Welcher molekulare Mechanismus ermöglicht Chromatin-vermittelte transkriptionelle Erinnerung über Generationen?",
          nl: "Welk moleculair mechanisme stelt chromatine-gemedieerd transcriptioneel geheugen mogelijk over generaties?"
        },
        options: [
          { en: "Transgenerational inheritance of chromatin modifications bypassing complete epigenetic reprogramming during development", es: "Herencia transgeneracional de modificaciones de cromatina evitando reprogramación epigenética completa durante desarrollo", de: "Transgenerationale Vererbung von Chromatin-Modifikationen unter Umgehung vollständiger epigenetischer Reprogrammierung während Entwicklung", nl: "Transgenerationele overerving van chromatine modificaties die volledige epigenetische herprogrammering tijdens ontwikkeling omzeilt" },
          { en: "Direct DNA sequence changes", es: "Cambios directos de secuencia de ADN", de: "Direkte DNA-Sequenzänderungen", nl: "Directe DNA sequentie veranderingen" },
          { en: "Cytoplasmic inheritance only", es: "Solo herencia citoplasmática", de: "Nur zytoplasmatische Vererbung", nl: "Alleen cytoplasmatische overerving" },
          { en: "Random epigenetic changes", es: "Cambios epigenéticos aleatorios", de: "Zufällige epigenetische Veränderungen", nl: "Willekeurige epigenetische veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Some chromatin modifications can escape reprogramming during gametogenesis and early development, allowing chromatin states to be transmitted across generations. This involves specialized mechanisms at imprinted loci and repetitive elements that maintain epigenetic information.",
          es: "Algunas modificaciones de cromatina pueden escapar a la reprogramación durante gametogénesis y desarrollo temprano, permitiendo que estados de cromatina se transmitan a través de generaciones.",
          de: "Einige Chromatin-Modifikationen können der Reprogrammierung während Gametogenese und früher Entwicklung entkommen, ermöglichen Chromatin-Zustände über Generationen zu übertragen.",
          nl: "Sommige chromatine modificaties kunnen ontsnappen aan herprogrammering tijdens gametogenese en vroege ontwikkeling, chromatine toestanden over generaties te laten overdragen."
        }
      },
      {
        question: {
          en: "How does histone variant H3.3 incorporation regulate transcriptional plasticity?",
          es: "¿Cómo regula la incorporación de variante de histona H3.3 la plasticidad transcripcional?",
          de: "Wie reguliert Histon-Variante H3.3-Inkorporation transkriptionelle Plastizität?",
          nl: "Hoe reguleert histon variant H3.3 incorporatie transcriptionele plasticiteit?"
        },
        options: [
          { en: "HIRA and DAXX chaperones deposit H3.3 at active genes and heterochromatin to facilitate chromatin dynamics", es: "Chaperonas HIRA y DAXX depositan H3.3 en genes activos y heterocromatina para facilitar dinámicas de cromatina", de: "HIRA- und DAXX-Chaperone deponieren H3.3 an aktiven Genen und Heterochromatin zur Erleichterung von Chromatin-Dynamik", nl: "HIRA en DAXX chaperones deponeren H3.3 bij actieve genen en heterochromatine om chromatine dynamiek te faciliteren" },
          { en: "Random histone incorporation", es: "Incorporación aleatoria de histonas", de: "Zufällige Histon-Inkorporation", nl: "Willekeurige histon incorporatie" },
          { en: "DNA methylation changes only", es: "Solo cambios de metilación de ADN", de: "Nur DNA-Methylierungsänderungen", nl: "Alleen DNA methylatie veranderingen" },
          { en: "Protein degradation", es: "Degradación proteica", de: "Protein-Abbau", nl: "Eiwit degradatie" }
        ],
        correct: 0,
        explanation: {
          en: "H3.3 is incorporated by HIRA chaperone at active genes and regulatory elements, and by DAXX/ATRX at heterochromatic regions. H3.3 incorporation is replication-independent and facilitates chromatin plasticity by replacing canonical H3 at dynamic chromatin regions.",
          es: "H3.3 es incorporado por chaperona HIRA en genes activos y elementos regulatorios, y por DAXX/ATRX en regiones heterocromatínicas. La incorporación de H3.3 es independiente de replicación.",
          de: "H3.3 wird durch HIRA-Chaperon an aktiven Genen und regulatorischen Elementen inkorporiert, und durch DAXX/ATRX an heterochromatischen Regionen. H3.3-Inkorporation ist replikationsunabhängig.",
          nl: "H3.3 wordt geïncorporeerd door HIRA chaperone bij actieve genen en regulatoire elementen, en door DAXX/ATRX bij heterochromatische regio's. H3.3 incorporatie is replicatie-onafhankelijk."
        }
      },
      {
        question: {
          en: "What mechanism drives chromatin fiber compaction through nucleosome clutches?",
          es: "¿Qué mecanismo impulsa la compactación de fibra de cromatina a través de embragues de nucleosomas?",
          de: "Welcher Mechanismus treibt Chromatin-Faser-Verdichtung durch Nukleosom-Cluster an?",
          nl: "Welk mechanisme drijft chromatine vezel compactie aan door nucleosoom clusters?"
        },
        options: [
          { en: "Histone tail interactions and linker histone H1 organize nucleosomes into compact fiber structures", es: "Interacciones de colas de histonas e histona conectora H1 organizan nucleosomas en estructuras de fibra compactas", de: "Histon-Schwanz-Interaktionen und Linker-Histon H1 organisieren Nukleosomen in kompakte Faserstrukturen", nl: "Histon staart interacties en linker histon H1 organiseren nucleosomen in compacte vezel structuren" },
          { en: "Random nucleosome positioning", es: "Posicionamiento aleatorio de nucleosomas", de: "Zufällige Nukleosom-Positionierung", nl: "Willekeurige nucleosoom positionering" },
          { en: "DNA methylation only", es: "Solo metilación de ADN", de: "Nur DNA-Methylierung", nl: "Alleen DNA methylatie" },
          { en: "Protein synthesis", es: "Síntesis proteica", de: "Proteinsynthese", nl: "Eiwit synthese" }
        ],
        correct: 0,
        explanation: {
          en: "Nucleosome clutches form through histone tail-tail interactions and binding of linker histone H1, which neutralizes negative DNA charges and promotes chromatin fiber compaction into 30nm fibers and higher-order structures essential for chromosome organization.",
          es: "Los embragues de nucleosomas se forman a través de interacciones cola-cola de histonas y unión de histona conectora H1, que neutraliza cargas negativas de ADN.",
          de: "Nukleosom-Cluster bilden sich durch Histon-Schwanz-Schwanz-Interaktionen und Bindung von Linker-Histon H1, das negative DNA-Ladungen neutralisiert.",
          nl: "Nucleosoom clusters vormen door histon staart-staart interacties en binding van linker histon H1, dat negatieve DNA ladingen neutraliseert."
        }
      },
      {
        question: {
          en: "How does chromatin topology regulation control gene expression timing during development?",
          es: "¿Cómo controla la regulación de topología de cromatina el tiempo de expresión génica durante desarrollo?",
          de: "Wie kontrolliert Chromatin-Topologie-Regulation Genexpressions-Timing während Entwicklung?",
          nl: "Hoe controleert chromatine topologie regulatie genexpressie timing tijdens ontwikkeling?"
        },
        options: [
          { en: "Sequential chromatin domain opening and TAD reorganization coordinate temporal gene expression programs", es: "Apertura secuencial de dominios de cromatina y reorganización TAD coordinan programas temporales de expresión génica", de: "Sequenzielle Chromatin-Domänen-Öffnung und TAD-Reorganisation koordinieren zeitliche Genexpressionsprogramme", nl: "Sequentiële chromatine domein opening en TAD herorganisatie coördineren temporele genexpressie programma's" },
          { en: "Random gene activation", es: "Activación génica aleatoria", de: "Zufällige Gen-Aktivierung", nl: "Willekeurige gen activatie" },
          { en: "Constant chromatin structure", es: "Estructura de cromatina constante", de: "Konstante Chromatin-Struktur", nl: "Constante chromatine structuur" },
          { en: "DNA replication timing only", es: "Solo tiempo de replicación de ADN", de: "Nur DNA-Replikations-Timing", nl: "Alleen DNA replicatie timing" }
        ],
        correct: 0,
        explanation: {
          en: "During development, chromatin topology undergoes dynamic reorganization with sequential opening of chromatin domains and TAD restructuring. This temporal control ensures appropriate timing of gene expression cascades that drive cell fate specification and differentiation.",
          es: "Durante el desarrollo, la topología de cromatina experimenta reorganización dinámica con apertura secuencial de dominios de cromatina y reestructuración TAD.",
          de: "Während der Entwicklung erfährt Chromatin-Topologie dynamische Reorganisation mit sequenzieller Öffnung von Chromatin-Domänen und TAD-Umstrukturierung.",
          nl: "Tijdens ontwikkeling ondergaat chromatine topologie dynamische herorganisatie met sequentiële opening van chromatine domeinen en TAD herstructurering."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables epigenetic inheritance through chromatin-based templates?",
          es: "¿Qué mecanismo molecular permite herencia epigenética a través de plantillas basadas en cromatina?",
          de: "Welcher molekulare Mechanismus ermöglicht epigenetische Vererbung durch Chromatin-basierte Vorlagen?",
          nl: "Welk moleculair mechanisme stelt epigenetische overerving mogelijk door chromatine-gebaseerde templates?"
        },
        options: [
          { en: "Parental histones carry modifications through replication to template daughter chromatin assembly", es: "Histonas parentales llevan modificaciones a través de replicación para plantillar ensamblaje de cromatina hija", de: "Elterliche Histone tragen Modifikationen durch Replikation zur Vorlagenbildung der Tochter-Chromatin-Assemblierung", nl: "Ouderlijke histonen dragen modificaties door replicatie om dochter chromatine assemblage te templaten" },
          { en: "Complete histone replacement", es: "Reemplazo completo de histonas", de: "Vollständiger Histon-Ersatz", nl: "Volledige histon vervanging" },
          { en: "DNA sequence changes", es: "Cambios de secuencia de ADN", de: "DNA-Sequenzänderungen", nl: "DNA sequentie veranderingen" },
          { en: "Random chromatin assembly", es: "Ensamblaje aleatorio de cromatina", de: "Zufällige Chromatin-Assemblierung", nl: "Willekeurige chromatine assemblage" }
        ],
        correct: 0,
        explanation: {
          en: "During replication, parental histones carrying epigenetic modifications are recycled to daughter DNA strands, serving as templates for chromatin assembly. Chromatin maturation factors then restore full modification patterns, maintaining epigenetic states through cell divisions.",
          es: "Durante la replicación, histonas parentales que llevan modificaciones epigenéticas son recicladas a cadenas de ADN hijas, sirviendo como plantillas para ensamblaje de cromatina.",
          de: "Während der Replikation werden elterliche Histone mit epigenetischen Modifikationen zu Tochter-DNA-Strängen recycelt, dienen als Vorlagen für Chromatin-Assemblierung.",
          nl: "Tijdens replicatie worden ouderlijke histonen die epigenetische modificaties dragen gerecycled naar dochter DNA strengen, dienend als templates voor chromatine assemblage."
        }
      },
      {
        question: {
          en: "How does chromatin accessibility profiling reveal cell-type-specific regulatory networks?",
          es: "¿Cómo revela el perfilado de accesibilidad de cromatina redes regulatorias específicas de tipo celular?",
          de: "Wie enthüllt Chromatin-Zugänglichkeits-Profiling zelltyp-spezifische regulatorische Netzwerke?",
          nl: "Hoe onthult chromatine toegankelijkheid profilering celtype-specifieke regulatoire netwerken?"
        },
        options: [
          { en: "Cell-type-specific transcription factors create unique chromatin accessibility landscapes that define regulatory programs", es: "Factores de transcripción específicos de tipo celular crean paisajes únicos de accesibilidad de cromatina que definen programas regulatorios", de: "Zelltyp-spezifische Transkriptionsfaktoren schaffen einzigartige Chromatin-Zugänglichkeits-Landschaften, die regulatorische Programme definieren", nl: "Celtype-specifieke transcriptiefactoren creëren unieke chromatine toegankelijkheid landschappen die regulatoire programma's definiëren" },
          { en: "Universal chromatin accessibility", es: "Accesibilidad universal de cromatina", de: "Universelle Chromatin-Zugänglichkeit", nl: "Universele chromatine toegankelijkheid" },
          { en: "Random DNA accessibility", es: "Accesibilidad aleatoria de ADN", de: "Zufällige DNA-Zugänglichkeit", nl: "Willekeurige DNA toegankelijkheid" },
          { en: "Constant regulatory networks", es: "Redes regulatorias constantes", de: "Konstante regulatorische Netzwerke", nl: "Constante regulatoire netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Cell-type-specific transcription factors bind to their cognate sequences and recruit chromatin remodeling complexes, creating unique patterns of chromatin accessibility. These accessibility landscapes reveal active regulatory elements and transcriptional networks that define cellular identity.",
          es: "Los factores de transcripción específicos de tipo celular se unen a sus secuencias afines y reclutan complejos remodeladores de cromatina, creando patrones únicos de accesibilidad.",
          de: "Zelltyp-spezifische Transkriptionsfaktoren binden an ihre verwandten Sequenzen und rekrutieren Chromatin-Remodeling-Komplexe, schaffen einzigartige Muster der Chromatin-Zugänglichkeit.",
          nl: "Celtype-specifieke transcriptiefactoren binden aan hun cognate sequenties en rekruteren chromatine hermodellering complexen, unieke patronen van chromatine toegankelijkheid creërend."
        }
      },
      {
        question: {
          en: "What mechanism drives chromatin loop extrusion through cohesin motor activity?",
          es: "¿Qué mecanismo impulsa la extrusión de bucles de cromatina a través de actividad motora de cohesina?",
          de: "Welcher Mechanismus treibt Chromatin-Schleifen-Extrusion durch Cohesin-Motor-Aktivität an?",
          nl: "Welk mechanisme drijft chromatine lus extrusie aan door cohesin motor activiteit?"
        },
        options: [
          { en: "Cohesin complexes actively translocate along chromatin fibers, extruding DNA loops until encountering CTCF boundaries", es: "Complejos de cohesina se translocan activamente a lo largo de fibras de cromatina, extruyendo bucles de ADN hasta encontrar límites CTCF", de: "Cohesin-Komplexe translozieren aktiv entlang Chromatin-Fasern, extrudieren DNA-Schleifen bis zum Antreffen von CTCF-Grenzen", nl: "Cohesin complexen transloceren actief langs chromatine vezels, DNA lussen extruderend totdat CTCF grenzen worden aangetroffen" },
          { en: "Static DNA binding only", es: "Solo unión estática al ADN", de: "Nur statische DNA-Bindung", nl: "Alleen statische DNA binding" },
          { en: "Histone modification changes", es: "Cambios de modificación de histonas", de: "Histon-Modifikations-Änderungen", nl: "Histon modificatie veranderingen" },
          { en: "DNA methylation patterns", es: "Patrones de metilación de ADN", de: "DNA-Methylierungsmuster", nl: "DNA methylatie patronen" }
        ],
        correct: 0,
        explanation: {
          en: "The cohesin complex acts as a molecular motor that actively translocates along chromatin fibers, progressively extruding DNA loops. This process continues until cohesin encounters CTCF-bound sites with appropriate orientation, where loop extrusion stops and stable chromatin loops are formed.",
          es: "El complejo de cohesina actúa como un motor molecular que se transloca activamente a lo largo de fibras de cromatina, extruyendo progresivamente bucles de ADN.",
          de: "Der Cohesin-Komplex wirkt als molekularer Motor, der sich aktiv entlang Chromatin-Fasern transloziert, progressiv DNA-Schleifen extrudiert.",
          nl: "Het cohesin complex werkt als een moleculaire motor die actief transloceert langs chromatine vezels, progressief DNA lussen extruderend."
        }
      },
      {
        question: {
          en: "How does epigenetic priming prepare chromatin for developmental transitions?",
          es: "¿Cómo prepara la cebadura epigenética la cromatina para transiciones del desarrollo?",
          de: "Wie bereitet epigenetisches Priming Chromatin auf Entwicklungsübergänge vor?",
          nl: "Hoe bereidt epigenetische priming chromatine voor op ontwikkelingsovergangen?"
        },
        options: [
          { en: "Bivalent chromatin domains with both H3K4me3 and H3K27me3 poise developmental genes for rapid activation or repression", es: "Dominios de cromatina bivalentes con H3K4me3 y H3K27me3 preparan genes del desarrollo para activación o represión rápida", de: "Bivalente Chromatin-Domänen mit sowohl H3K4me3 als auch H3K27me3 bereiten Entwicklungsgene auf schnelle Aktivierung oder Repression vor", nl: "Bivalente chromatine domeinen met zowel H3K4me3 als H3K27me3 bereiden ontwikkelingsgenen voor op snelle activatie of onderdrukking" },
          { en: "Complete gene silencing", es: "Silenciamiento génico completo", de: "Vollständige Gen-Silencing", nl: "Volledige gen onderdrukking" },
          { en: "Constitutive gene activation", es: "Activación génica constitutiva", de: "Konstitutive Gen-Aktivierung", nl: "Constitutieve gen activatie" },
          { en: "Random chromatin modifications", es: "Modificaciones aleatorias de cromatina", de: "Zufällige Chromatin-Modifikationen", nl: "Willekeurige chromatine modificaties" }
        ],
        correct: 0,
        explanation: {
          en: "Bivalent chromatin domains contain both activating (H3K4me3) and repressive (H3K27me3) histone modifications, keeping developmental genes in a poised state. This allows for rapid transcriptional activation or silencing in response to developmental signals, facilitating cell fate transitions.",
          es: "Los dominios de cromatina bivalentes contienen modificaciones de histonas tanto activadoras (H3K4me3) como represivas (H3K27me3), manteniendo genes del desarrollo en estado preparado.",
          de: "Bivalente Chromatin-Domänen enthalten sowohl aktivierende (H3K4me3) als auch repressive (H3K27me3) Histon-Modifikationen, halten Entwicklungsgene in einem bereiten Zustand.",
          nl: "Bivalente chromatine domeinen bevatten zowel activerende (H3K4me3) als repressieve (H3K27me3) histon modificaties, ontwikkelingsgenen in een gereedstaande toestand houdend."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables chromatin-mediated dosage compensation in mammals?",
          es: "¿Qué mecanismo molecular permite compensación de dosis mediada por cromatina en mamíferos?",
          de: "Welcher molekulare Mechanismus ermöglicht Chromatin-vermittelte Dosiskompensation in Säugetieren?",
          nl: "Welk moleculair mechanisme stelt chromatine-gemedieerde dosering compensatie mogelijk in zoogdieren?"
        },
        options: [
          { en: "X-chromosome inactivation through XIST lncRNA coating and heterochromatin formation balances X-linked gene expression", es: "Inactivación del cromosoma X a través de recubrimiento lncRNA XIST y formación de heterocromatina equilibra expresión génica ligada a X", de: "X-Chromosom-Inaktivierung durch XIST lncRNA-Beschichtung und Heterochromatin-Bildung gleicht X-verknüpfte Genexpression aus", nl: "X-chromosoom inactivatie door XIST lncRNA coating en heterochromatine vorming balanceert X-gekoppelde genexpressie" },
          { en: "Random gene silencing", es: "Silenciamiento génico aleatorio", de: "Zufälliges Gen-Silencing", nl: "Willekeurige gen onderdrukking" },
          { en: "Chromosome duplication", es: "Duplicación cromosómica", de: "Chromosomen-Duplikation", nl: "Chromosoom duplicatie" },
          { en: "Protein degradation only", es: "Solo degradación proteica", de: "Nur Protein-Abbau", nl: "Alleen eiwit degradatie" }
        ],
        correct: 0,
        explanation: {
          en: "In mammalian dosage compensation, one X chromosome is randomly inactivated in female cells through XIST long non-coding RNA expression. XIST coats the chromosome and recruits chromatin modifiers to form facultative heterochromatin, balancing X-linked gene expression between XX females and XY males.",
          es: "En compensación de dosis de mamíferos, un cromosoma X es aleatoriamente inactivado en células femeninas a través de expresión de ARN largo no codificante XIST.",
          de: "In Säugetier-Dosiskompensation wird ein X-Chromosom zufällig in weiblichen Zellen durch XIST lange nicht-kodierende RNA-Expression inaktiviert.",
          nl: "In zoogdier dosering compensatie wordt één X-chromosoom willekeurig geïnactiveerd in vrouwelijke cellen door XIST lange niet-coderende RNA expressie."
        }
      },
      {
        question: {
          en: "How does chromatin remodeling by INO80 complex facilitate DNA repair?",
          es: "¿Cómo facilita la remodelación de cromatina por complejo INO80 la reparación de ADN?",
          de: "Wie erleichtert Chromatin-Remodeling durch INO80-Komplex DNA-Reparatur?",
          nl: "Hoe faciliteert chromatine hermodellering door INO80 complex DNA reparatie?"
        },
        options: [
          { en: "INO80 slides nucleosomes to expose DNA damage sites and facilitate recruitment of repair machinery", es: "INO80 desliza nucleosomas para exponer sitios de daño al ADN y facilitar reclutamiento de maquinaria de reparación", de: "INO80 schiebt Nukleosomen zur Enthüllung von DNA-Schadensstellen und erleichtert Rekrutierung von Reparaturmaschinerie", nl: "INO80 schuift nucleosomen om DNA schade plaatsen bloot te leggen en rekrutering van reparatie machinerie te faciliteren" },
          { en: "Direct DNA repair activity", es: "Actividad directa de reparación de ADN", de: "Direkte DNA-Reparatur-Aktivität", nl: "Directe DNA reparatie activiteit" },
          { en: "Histone synthesis only", es: "Solo síntesis de histonas", de: "Nur Histon-Synthese", nl: "Alleen histon synthese" },
          { en: "Protein degradation", es: "Degradación proteica", de: "Protein-Abbau", nl: "Eiwit degradatie" }
        ],
        correct: 0,
        explanation: {
          en: "The INO80 chromatin remodeling complex uses ATP hydrolysis to slide nucleosomes and create accessible chromatin regions around DNA double-strand breaks. This nucleosome mobility facilitates recruitment and assembly of DNA repair factors for homologous recombination and non-homologous end joining.",
          es: "El complejo remodelador de cromatina INO80 usa hidrólisis de ATP para deslizar nucleosomas y crear regiones de cromatina accesibles alrededor de rupturas de doble cadena de ADN.",
          de: "Der INO80-Chromatin-Remodeling-Komplex verwendet ATP-Hydrolyse zum Schieben von Nukleosomen und Schaffung zugänglicher Chromatin-Regionen um DNA-Doppelstrangbrüche.",
          nl: "Het INO80 chromatine hermodellering complex gebruikt ATP hydrolyse om nucleosomen te schuiven en toegankelijke chromatine regio's te creëren rond DNA dubbelstreng breuken."
        }
      },
      {
        question: {
          en: "What mechanism drives heterochromatin spreading through HP1 protein interactions?",
          es: "¿Qué mecanismo impulsa la extensión de heterocromatina a través de interacciones de proteína HP1?",
          de: "Welcher Mechanismus treibt Heterochromatin-Ausbreitung durch HP1-Protein-Interaktionen an?",
          nl: "Welk mechanisme drijft heterochromatine verspreiding aan door HP1 eiwit interacties?"
        },
        options: [
          { en: "HP1 binds H3K9me3 and oligomerizes to spread heterochromatin while recruiting additional chromatin modifiers", es: "HP1 se une a H3K9me3 y oligomeriza para extender heterocromatina mientras recluta modificadores adicionales de cromatina", de: "HP1 bindet H3K9me3 und oligomerisiert zur Ausbreitung von Heterochromatin während Rekrutierung zusätzlicher Chromatin-Modifikatoren", nl: "HP1 bindt H3K9me3 en oligomeriseert om heterochromatine te verspreiden terwijl het additionele chromatine modificeerders rekruteert" },
          { en: "Random protein binding", es: "Unión proteica aleatoria", de: "Zufällige Protein-Bindung", nl: "Willekeurige eiwit binding" },
          { en: "DNA methylation only", es: "Solo metilación de ADN", de: "Nur DNA-Methylierung", nl: "Alleen DNA methylatie" },
          { en: "Histone deacetylation alone", es: "Solo desacetilación de histonas", de: "Nur Histon-Deacetylierung", nl: "Alleen histon deacetylering" }
        ],
        correct: 0,
        explanation: {
          en: "HP1 proteins recognize and bind to H3K9me3 marks through their chromodomain, then oligomerize through their chromoshadow domain to form extended heterochromatin domains. HP1 also recruits additional repressive factors like SUV39H1 methyltransferase to maintain and spread heterochromatic states.",
          es: "Las proteínas HP1 reconocen y se unen a marcas H3K9me3 a través de su cromodominio, luego oligomerizan a través de su dominio cromosombra para formar dominios extendidos de heterocromatina.",
          de: "HP1-Proteine erkennen und binden H3K9me3-Markierungen durch ihre Chromodomäne, oligomerisieren dann durch ihre Chromoshadow-Domäne zur Bildung ausgedehnter Heterochromatin-Domänen.",
          nl: "HP1 eiwitten herkennen en binden aan H3K9me3 markeringen door hun chromodomein, oligomeriseren dan door hun chromoshadow domein om uitgebreide heterochromatine domeinen te vormen."
        }
      },
      {
        question: {
          en: "How does chromatin context influence transcription factor binding specificity?",
          es: "¿Cómo influye el contexto de cromatina en la especificidad de unión de factores de transcripción?",
          de: "Wie beeinflusst Chromatin-Kontext Transkriptionsfaktor-Bindungs-Spezifität?",
          nl: "Hoe beïnvloedt chromatine context transcriptiefactor binding specificiteit?"
        },
        options: [
          { en: "Chromatin accessibility, nucleosome positioning, and histone modifications collectively determine transcription factor binding sites", es: "Accesibilidad de cromatina, posicionamiento de nucleosomas y modificaciones de histonas determinan colectivamente sitios de unión de factores de transcripción", de: "Chromatin-Zugänglichkeit, Nukleosom-Positionierung und Histon-Modifikationen bestimmen kollektiv Transkriptionsfaktor-Bindungsstellen", nl: "Chromatine toegankelijkheid, nucleosoom positionering en histon modificaties bepalen collectief transcriptiefactor bindingsplaatsen" },
          { en: "DNA sequence alone", es: "Solo secuencia de ADN", de: "Nur DNA-Sequenz", nl: "Alleen DNA sequentie" },
          { en: "Protein concentration only", es: "Solo concentración proteica", de: "Nur Protein-Konzentration", nl: "Alleen eiwit concentratie" },
          { en: "Random binding events", es: "Eventos de unión aleatorios", de: "Zufällige Bindungsereignisse", nl: "Willekeurige binding gebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "Transcription factor binding is determined by the combination of DNA sequence recognition, chromatin accessibility, nucleosome occupancy, and local histone modifications. Pioneer factors can bind nucleosomal DNA, while others require pre-existing chromatin opening for access to their recognition sequences.",
          es: "La unión de factores de transcripción está determinada por la combinación de reconocimiento de secuencia de ADN, accesibilidad de cromatina, ocupación de nucleosomas y modificaciones locales de histonas.",
          de: "Transkriptionsfaktor-Bindung wird durch die Kombination von DNA-Sequenzerkennung, Chromatin-Zugänglichkeit, Nukleosom-Besetzung und lokalen Histon-Modifikationen bestimmt.",
          nl: "Transcriptiefactor binding wordt bepaald door de combinatie van DNA sequentie herkenning, chromatine toegankelijkheid, nucleosoom bezetting en lokale histon modificaties."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables chromatin-mediated gene bookmarking through mitosis?",
          es: "¿Qué mecanismo molecular permite marcaje génico mediado por cromatina a través de mitosis?",
          de: "Welcher molekulare Mechanismus ermöglicht Chromatin-vermittelte Gen-Markierung durch Mitose?",
          nl: "Welk moleculair mechanisme stelt chromatine-gemedieerde gen bookmarking mogelijk door mitose?"
        },
        options: [
          { en: "Mitotic bookmarking factors remain bound to condensed chromosomes to facilitate rapid gene reactivation in daughter cells", es: "Factores de marcaje mitóticos permanecen unidos a cromosomas condensados para facilitar reactivación génica rápida en células hijas", de: "Mitotische Markierungs-Faktoren bleiben an kondensierte Chromosomen gebunden zur Erleichterung schneller Gen-Reaktivierung in Tochterzellen", nl: "Mitotische bookmarking factoren blijven gebonden aan gecondenseerde chromosomen om snelle gen reactivatie in dochtercellen te faciliteren" },
          { en: "Complete transcription factor removal", es: "Eliminación completa de factores de transcripción", de: "Vollständige Transkriptionsfaktor-Entfernung", nl: "Volledige transcriptiefactor verwijdering" },
          { en: "Random gene reactivation", es: "Reactivación génica aleatoria", de: "Zufällige Gen-Reaktivierung", nl: "Willekeurige gen reactivatie" },
          { en: "DNA sequence changes", es: "Cambios de secuencia de ADN", de: "DNA-Sequenzänderungen", nl: "DNA sequentie veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "During mitosis, most transcription factors are displaced from chromatin, but certain bookmarking factors like FoxA1 and GATA1 remain bound to condensed chromosomes. These factors maintain chromatin accessibility and facilitate rapid transcriptional reactivation when cells exit mitosis.",
          es: "Durante la mitosis, la mayoría de factores de transcripción son desplazados de la cromatina, pero ciertos factores de marcaje como FoxA1 y GATA1 permanecen unidos a cromosomas condensados.",
          de: "Während der Mitose werden die meisten Transkriptionsfaktoren von Chromatin verdrängt, aber bestimmte Markierungs-Faktoren wie FoxA1 und GATA1 bleiben an kondensierte Chromosomen gebunden.",
          nl: "Tijdens mitose worden de meeste transcriptiefactoren verdreven van chromatine, maar bepaalde bookmarking factoren zoals FoxA1 en GATA1 blijven gebonden aan gecondenseerde chromosomen."
        }
      },
      {
        question: {
          en: "How does chromatin-mediated allelic exclusion regulate immunoglobulin gene expression?",
          es: "¿Cómo regula la exclusión alélica mediada por cromatina la expresión de genes de inmunoglobulina?",
          de: "Wie reguliert Chromatin-vermittelte allelische Ausschluss Immunoglobulin-Genexpression?",
          nl: "Hoe reguleert chromatine-gemedieerde allelische exclusie immunoglobuline genexpressie?"
        },
        options: [
          { en: "Monoallelic chromatin accessibility and V(D)J recombination ensure single allele expression per B cell", es: "Accesibilidad de cromatina monoalélica y recombinación V(D)J aseguran expresión de alelo único por célula B", de: "Monoallelische Chromatin-Zugänglichkeit und V(D)J-Rekombination stellen einzelne Allel-Expression pro B-Zelle sicher", nl: "Monoallelische chromatine toegankelijkheid en V(D)J recombinatie verzekeren enkele allel expressie per B cel" },
          { en: "Biallelic expression", es: "Expresión bialélica", de: "Biallelische Expression", nl: "Biallelische expressie" },
          { en: "Random gene silencing", es: "Silenciamiento génico aleatorio", de: "Zufälliges Gen-Silencing", nl: "Willekeurige gen onderdrukking" },
          { en: "Chromosome loss", es: "Pérdida cromosómica", de: "Chromosomen-Verlust", nl: "Chromosoom verlies" }
        ],
        correct: 0,
        explanation: {
          en: "Allelic exclusion in B cells involves stochastic chromatin opening of immunoglobulin heavy chain loci. Once V(D)J recombination occurs successfully on one allele, feedback mechanisms suppress accessibility of the other allele, ensuring each B cell expresses only one functional immunoglobulin.",
          es: "La exclusión alélica en células B involucra apertura estocástica de cromatina de loci de cadena pesada de inmunoglobulina. Una vez que recombinación V(D)J ocurre exitosamente en un alelo.",
          de: "Allelischer Ausschluss in B-Zellen umfasst stochastische Chromatin-Öffnung von Immunoglobulin-Schwerketten-Loci. Sobald V(D)J-Rekombination erfolgreich auf einem Allel auftritt.",
          nl: "Allelische exclusie in B cellen behelst stochastische chromatine opening van immunoglobuline zware keten loci. Zodra V(D)J recombinatie succesvol optreedt op één allel."
        }
      },
      {
        question: {
          en: "What mechanism drives chromatin reorganization during cellular reprogramming?",
          es: "¿Qué mecanismo impulsa la reorganización de cromatina durante reprogramación celular?",
          de: "Welcher Mechanismus treibt Chromatin-Reorganisation während zellulärer Reprogrammierung an?",
          nl: "Welk mechanisme drijft chromatine herorganisatie aan tijdens cellulaire herprogrammering?"
        },
        options: [
          { en: "Pioneer transcription factors disrupt chromatin structure and recruit remodeling complexes to establish new epigenetic landscapes", es: "Factores de transcripción pioneros rompen estructura de cromatina y reclutan complejos remodeladores para establecer nuevos paisajes epigenéticos", de: "Pioneer-Transkriptionsfaktoren stören Chromatin-Struktur und rekrutieren Remodeling-Komplexe zur Etablierung neuer epigenetischer Landschaften", nl: "Pioneer transcriptiefactoren verstoren chromatine structuur en rekruteren hermodellering complexen om nieuwe epigenetische landschappen te vestigen" },
          { en: "Random chromatin changes", es: "Cambios aleatorios de cromatina", de: "Zufällige Chromatin-Änderungen", nl: "Willekeurige chromatine veranderingen" },
          { en: "DNA sequence mutations", es: "Mutaciones de secuencia de ADN", de: "DNA-Sequenz-Mutationen", nl: "DNA sequentie mutaties" },
          { en: "Protein degradation only", es: "Solo degradación proteica", de: "Nur Protein-Abbau", nl: "Alleen eiwit degradatie" }
        ],
        correct: 0,
        explanation: {
          en: "During cellular reprogramming, pioneer transcription factors like the Yamanaka factors bind to closed chromatin and recruit ATP-dependent remodeling complexes, TET demethylases, and other chromatin modifiers. This sequential chromatin opening and modification establishes new transcriptional programs characteristic of the target cell type.",
          es: "Durante la reprogramación celular, factores de transcripción pioneros como los factores Yamanaka se unen a cromatina cerrada y reclutan complejos remodeladores dependientes de ATP.",
          de: "Während zellulärer Reprogrammierung binden Pioneer-Transkriptionsfaktoren wie die Yamanaka-Faktoren an geschlossenes Chromatin und rekrutieren ATP-abhängige Remodeling-Komplexe.",
          nl: "Tijdens cellulaire herprogrammering binden pioneer transcriptiefactoren zoals de Yamanaka factoren aan gesloten chromatine en rekruteren ATP-afhankelijke hermodellering complexen."
        }
      },
      {
        question: {
          en: "How does chromatin structure influence alternative splicing regulation?",
          es: "¿Cómo influye la estructura de cromatina en la regulación de splicing alternativo?",
          de: "Wie beeinflusst Chromatin-Struktur alternative Splicing-Regulation?",
          nl: "Hoe beïnvloedt chromatine structuur alternatieve splicing regulatie?"
        },
        options: [
          { en: "RNA polymerase II elongation rate and histone modifications recruit specific splicing regulators to influence exon inclusion", es: "Tasa de elongación de ARN polimerasa II y modificaciones de histonas reclutan reguladores específicos de splicing para influir inclusión de exones", de: "RNA-Polymerase II Elongations-Rate und Histon-Modifikationen rekrutieren spezifische Splicing-Regulatoren zur Beeinflussung der Exon-Inklusion", nl: "RNA polymerase II elongatie snelheid en histon modificaties rekruteren specifieke splicing regulatoren om exon inclusie te beïnvloeden" },
          { en: "Random splicing events", es: "Eventos de splicing aleatorios", de: "Zufällige Splicing-Ereignisse", nl: "Willekeurige splicing gebeurtenissen" },
          { en: "DNA methylation alone", es: "Solo metilación de ADN", de: "Nur DNA-Methylierung", nl: "Alleen DNA methylatie" },
          { en: "Protein synthesis regulation", es: "Regulación de síntesis proteica", de: "Proteinsynthese-Regulation", nl: "Eiwit synthese regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Chromatin structure influences alternative splicing through multiple mechanisms: RNA polymerase II CTD phosphorylation patterns recruit specific splicing factors, histone modifications like H3K36me3 mark exons and recruit splicing enhancers, and nucleosome positioning can affect splice site accessibility.",
          es: "La estructura de cromatina influye en el splicing alternativo a través de múltiples mecanismos: patrones de fosforilación CTD de ARN polimerasa II reclutan factores específicos de splicing.",
          de: "Chromatin-Struktur beeinflusst alternatives Splicing durch multiple Mechanismen: RNA-Polymerase II CTD-Phosphorylierungsmuster rekrutieren spezifische Splicing-Faktoren.",
          nl: "Chromatine structuur beïnvloedt alternatieve splicing door meerdere mechanismen: RNA polymerase II CTD fosforylering patronen rekruteren specifieke splicing factoren."
        }
      },
      {
        question: {
          en: "What molecular mechanism enables chromatin-based transcriptional co-activation?",
          es: "¿Qué mecanismo molecular permite co-activación transcripcional basada en cromatina?",
          de: "Welcher molekulare Mechanismus ermöglicht Chromatin-basierte transkriptionelle Ko-Aktivierung?",
          nl: "Welk moleculair mechanisme stelt chromatine-gebaseerde transcriptionele co-activatie mogelijk?"
        },
        options: [
          { en: "Mediator and coactivator complexes bridge enhancer-bound activators with promoter-bound RNA polymerase II", es: "Complejos mediador y coactivador conectan activadores unidos a potenciadores con ARN polimerasa II unida a promotor", de: "Mediator- und Koaktivator-Komplexe überbrücken Enhancer-gebundene Aktivatoren mit Promotor-gebundener RNA-Polymerase II", nl: "Mediator en coactivator complexen overbruggen enhancer-gebonden activatoren met promotor-gebonden RNA polymerase II" },
          { en: "Direct DNA binding only", es: "Solo unión directa al ADN", de: "Nur direkte DNA-Bindung", nl: "Alleen directe DNA binding" },
          { en: "Histone removal", es: "Eliminación de histonas", de: "Histon-Entfernung", nl: "Histon verwijdering" },
          { en: "DNA methylation changes", es: "Cambios de metilación de ADN", de: "DNA-Methylierungsänderungen", nl: "DNA methylatie veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Transcriptional co-activation involves multiple chromatin-associated complexes: Mediator connects sequence-specific activators to RNA polymerase II, p300/CBP provides histone acetyltransferase activity, and chromatin remodeling complexes create accessible chromatin. These factors work together in large multi-protein complexes.",
          es: "La co-activación transcripcional involucra múltiples complejos asociados a cromatina: Mediador conecta activadores específicos de secuencia con ARN polimerasa II.",
          de: "Transkriptionelle Ko-Aktivierung umfasst multiple Chromatin-assoziierte Komplexe: Mediator verbindet sequenzspezifische Aktivatoren mit RNA-Polymerase II.",
          nl: "Transcriptionele co-activatie behelst meerdere chromatine-geassocieerde complexen: Mediator verbindt sequentie-specifieke activatoren met RNA polymerase II."
        }
      },
      {
        question: {
          en: "How does nuclear architecture coordinate chromatin organization with gene expression?",
          es: "¿Cómo coordina la arquitectura nuclear la organización de cromatina con expresión génica?",
          de: "Wie koordiniert Kern-Architektur Chromatin-Organisation mit Genexpression?",
          nl: "Hoe coördineert nucleaire architectuur chromatine organisatie met genexpressie?"
        },
        options: [
          { en: "Spatial compartmentalization segregates active and inactive chromatin into distinct nuclear territories", es: "Compartimentalización espacial segrega cromatina activa e inactiva en territorios nucleares distintos", de: "Räumliche Kompartimentierung segregiert aktives und inaktives Chromatin in unterschiedliche Kernteritorien", nl: "Ruimtelijke compartimentalisatie segregeert actief en inactief chromatine in onderscheidende nucleaire territoria" },
          { en: "Random chromatin distribution", es: "Distribución aleatoria de cromatina", de: "Zufällige Chromatin-Verteilung", nl: "Willekeurige chromatine distributie" },
          { en: "Uniform nuclear organization", es: "Organización nuclear uniforme", de: "Einheitliche Kern-Organisation", nl: "Uniforme nucleaire organisatie" },
          { en: "Cytoplasmic gene regulation", es: "Regulación génica citoplasmática", de: "Zytoplasmatische Gen-Regulation", nl: "Cytoplasmatische gen regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Nuclear architecture organizes chromatin into functionally distinct compartments: active genes cluster near nuclear speckles rich in transcriptional machinery, while heterochromatin associates with the nuclear periphery and nucleoli. This spatial organization facilitates efficient transcriptional regulation.",
          es: "La arquitectura nuclear organiza la cromatina en compartimentos funcionalmente distintos: genes activos se agrupan cerca de manchas nucleares ricas en maquinaria transcripcional.",
          de: "Kern-Architektur organisiert Chromatin in funktionell unterschiedliche Kompartimente: aktive Gene clustern nahe nuklearen Flecken reich an Transkriptionsmaschinerie.",
          nl: "Nucleaire architectuur organiseert chromatine in functioneel onderscheidende compartimenten: actieve genen clusteren nabij nucleaire speckles rijk aan transcriptionele machinerie."
        }
      },
      {
        question: {
          en: "What mechanism drives chromatin-mediated position effect variegation?",
          es: "¿Qué mecanismo impulsa variegación de efecto de posición mediada por cromatina?",
          de: "Welcher Mechanismus treibt Chromatin-vermittelte Positions-Effekt-Variegation an?",
          nl: "Welk mechanisme drijft chromatine-gemedieerde positie effect variegatie aan?"
        },
        options: [
          { en: "Stochastic heterochromatin spreading from repetitive elements silences nearby genes in a mosaic pattern", es: "Extensión estocástica de heterocromatina desde elementos repetitivos silencia genes cercanos en patrón de mosaico", de: "Stochastische Heterochromatin-Ausbreitung von repetitiven Elementen silenziert nahe Gene in Mosaik-Muster", nl: "Stochastische heterochromatine verspreiding van repetitieve elementen onderdrukt nabije genen in mozaïek patroon" },
          { en: "Uniform gene expression", es: "Expresión génica uniforme", de: "Einheitliche Genexpression", nl: "Uniforme genexpressie" },
          { en: "DNA sequence mutations", es: "Mutaciones de secuencia de ADN", de: "DNA-Sequenz-Mutationen", nl: "DNA sequentie mutaties" },
          { en: "Protein synthesis errors", es: "Errores de síntesis proteica", de: "Proteinsynthese-Fehler", nl: "Eiwit synthese fouten" }
        ],
        correct: 0,
        explanation: {
          en: "Position effect variegation occurs when genes are relocated near heterochromatic regions. Heterochromatin spreading from repetitive elements is stochastic, leading to mosaic expression patterns where some cells express the gene while others have it silenced, demonstrating the influence of chromatin context on gene expression.",
          es: "La variegación de efecto de posición ocurre cuando genes son reubicados cerca de regiones heterocromatínicas. La extensión de heterocromatina desde elementos repetitivos es estocástica.",
          de: "Positions-Effekt-Variegation tritt auf wenn Gene nahe heterochromatischen Regionen verlagert werden. Heterochromatin-Ausbreitung von repetitiven Elementen ist stochastisch.",
          nl: "Positie effect variegatie treedt op wanneer genen worden herplaatst nabij heterochromatische regio's. Heterochromatine verspreiding van repetitieve elementen is stochastisch."
        }
      },
      {
        question: {
          en: "How does the CRISPR-Cas12 system differ from Cas9 in its precision for genomic engineering?",
          es: "¿Cómo difiere el sistema CRISPR-Cas12 de Cas9 en su precisión para ingeniería genómica?",
          de: "Wie unterscheidet sich das CRISPR-Cas12 System von Cas9 in seiner Präzision für genomische Technik?",
          nl: "Hoe verschilt het CRISPR-Cas12 systeem van Cas9 in zijn precisie voor genomische engineering?"
        },
        options: [
          { en: "Cas12 creates staggered cuts with 5' overhangs and exhibits reduced off-target binding due to its longer PAM requirement", es: "Cas12 crea cortes escalonados con salientes 5' y exhibe unión fuera del objetivo reducida debido a su requisito PAM más largo", de: "Cas12 erzeugt versetzte Schnitte mit 5' Überhängen und zeigt reduzierte Off-Target-Bindung aufgrund längerer PAM-Anforderung", nl: "Cas12 creëert getrapte snedes met 5' overhangen en vertoont verminderde off-target binding door langere PAM vereiste" },
          { en: "Identical cutting patterns", es: "Patrones de corte idénticos", de: "Identische Schnittmuster", nl: "Identieke snijpatronen" },
          { en: "Lower efficiency", es: "Menor eficiencia", de: "Geringere Effizienz", nl: "Lagere efficiëntie" },
          { en: "Only works in prokaryotes", es: "Solo funciona en procariotas", de: "Funktioniert nur in Prokaryoten", nl: "Werkt alleen in prokaryoten" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas12 offers superior precision through staggered double-strand breaks creating 5' sticky ends, facilitating more precise insertions. Its longer PAM sequence (typically 5-6 nucleotides) provides enhanced specificity and reduced off-target effects compared to Cas9's shorter PAM requirements.",
          es: "CRISPR-Cas12 ofrece precisión superior a través de roturas de doble cadena escalonadas creando extremos pegajosos 5', facilitando inserciones más precisas.",
          de: "CRISPR-Cas12 bietet überlegene Präzision durch versetzte Doppelstrangbrüche, die 5' klebrige Enden erzeugen, was präzisere Insertionen erleichtert.",
          nl: "CRISPR-Cas12 biedt superieure precisie door getrapte dubbelstreng breuken die 5' kleverige uiteinden creëren, waardoor preciezere inserties worden gefaciliteerd."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism underlying genetic anticipation in trinucleotide repeat disorders?",
          es: "¿Cuál es el mecanismo molecular subyacente a la anticipación genética en trastornos de repetición trinucleótida?",
          de: "Was ist der molekulare Mechanismus der genetischen Antizipation bei Trinukleotid-Repeat-Störungen?",
          nl: "Wat is het moleculaire mechanisme dat ten grondslag ligt aan genetische anticipatie bij trinucleotide repeat stoornissen?"
        },
        options: [
          { en: "Replication slippage during meiosis causes expansion of unstable trinucleotide repeats, with expansion probability increasing with repeat length", es: "Deslizamiento de replicación durante meiosis causa expansión de repeticiones trinucleótidas inestables, con probabilidad de expansión aumentando con longitud", de: "Replikationsschlupf während Meiose verursacht Expansion instabiler Trinukleotid-Repeats, wobei Expansionswahrscheinlichkeit mit Repeat-Länge steigt", nl: "Replicatie uitglijding tijdens meiose veroorzaakt expansie van instabiele trinucleotide repeats, met expansiekans toenemend met repeat lengte" },
          { en: "Simple Mendelian inheritance", es: "Herencia mendeliana simple", de: "Einfache Mendel'sche Vererbung", nl: "Eenvoudige Mendeliaanse erfelijkheid" },
          { en: "Environmental factors only", es: "Solo factores ambientales", de: "Nur Umweltfaktoren", nl: "Alleen omgevingsfactoren" },
          { en: "Random mutations", es: "Mutaciones aleatorias", de: "Zufällige Mutationen", nl: "Willekeurige mutaties" }
        ],
        correct: 0,
        explanation: {
          en: "Genetic anticipation in trinucleotide repeat disorders results from intergenerational expansion of unstable DNA repeats through replication slippage. Longer repeats have higher expansion probability, leading to earlier onset and increased severity in successive generations.",
          es: "La anticipación genética en trastornos de repetición trinucleótida resulta de expansión intergeneracional de repeticiones de ADN inestables a través de deslizamiento de replicación.",
          de: "Genetische Antizipation bei Trinukleotid-Repeat-Störungen resultiert aus intergenerationaler Expansion instabiler DNA-Repeats durch Replikationsschlupf.",
          nl: "Genetische anticipatie bij trinucleotide repeat stoornissen resulteert uit intergenerationele expansie van instabiele DNA repeats door replicatie uitglijding."
        }
      },
      {
        question: {
          en: "How do topologically associating domains (TADs) regulate tissue-specific gene expression programs?",
          es: "¿Cómo regulan los dominios de asociación topológica (TADs) programas de expresión génica específicos de tejido?",
          de: "Wie regulieren topologisch assoziierenden Domänen (TADs) gewebsspezifische Genexpressionsprogramme?",
          nl: "Hoe reguleren topologisch associërende domeinen (TADs) weefsel-specifieke genexpressie programma's?"
        },
        options: [
          { en: "TADs create insulated neighborhoods where enhancer-promoter interactions are constrained, allowing tissue-specific regulatory circuits through differential enhancer usage", es: "TADs crean vecindarios aislados donde interacciones enhancer-promotor están restringidas, permitiendo circuitos regulatorios específicos de tejido", de: "TADs schaffen isolierte Nachbarschaften wo Enhancer-Promoter-Interaktionen begrenzt sind, ermöglichen gewebsspezifische Regulationskreise", nl: "TADs creëren geïsoleerde buurten waar enhancer-promoter interacties beperkt zijn, waardoor weefsel-specifieke regulatoire circuits mogelijk zijn" },
          { en: "TADs prevent all gene interactions", es: "TADs previenen todas las interacciones génicas", de: "TADs verhindern alle Gen-Interaktionen", nl: "TADs voorkomen alle gen interacties" },
          { en: "TADs are tissue-independent", es: "TADs son independientes de tejido", de: "TADs sind gewebsunabhängig", nl: "TADs zijn weefsel-onafhankelijk" },
          { en: "TADs only affect housekeeping genes", es: "TADs solo afectan genes de mantenimiento", de: "TADs betreffen nur Haushaltsgene", nl: "TADs beïnvloeden alleen huishoudgenen" }
        ],
        correct: 0,
        explanation: {
          en: "TADs function as regulatory units that constrain enhancer-promoter interactions within their boundaries. This topological organization enables tissue-specific gene expression by allowing different enhancer elements to be active in different cell types while preventing inappropriate cross-talk between regulatory regions.",
          es: "TADs funcionan como unidades regulatorias que restringen interacciones enhancer-promotor dentro de sus límites. Esta organización topológica permite expresión génica específica de tejido.",
          de: "TADs fungieren als regulatorische Einheiten, die Enhancer-Promoter-Interaktionen innerhalb ihrer Grenzen einschränken. Diese topologische Organisation ermöglicht gewebsspezifische Genexpression.",
          nl: "TADs functioneren als regulatoire eenheden die enhancer-promoter interacties binnen hun grenzen beperken. Deze topologische organisatie maakt weefsel-specifieke genexpressie mogelijk."
        }
      },
      {
        question: {
          en: "What drives the phenomenon of genomic imprinting and its parent-of-origin effects?",
          es: "¿Qué impulsa el fenómeno de impronta genómica y sus efectos de origen parental?",
          de: "Was treibt das Phänomen genomischer Prägung und ihre Eltern-Herkunfts-Effekte an?",
          nl: "Wat drijft het fenomeen van genomische imprinting en zijn ouder-van-oorsprong effecten aan?"
        },
        options: [
          { en: "Differential DNA methylation at imprinting control regions established during gametogenesis creates parent-specific expression patterns", es: "Metilación diferencial de ADN en regiones de control de impronta establecida durante gametogénesis crea patrones de expresión específicos parentales", de: "Differentielle DNA-Methylierung an Prägungskontrollregionen etabliert während Gametogenese schafft elternspezifische Expressionsmuster", nl: "Differentiële DNA methylatie bij imprinting controle regio's vastgelegd tijdens gametogenese creëert ouder-specifieke expressie patronen" },
          { en: "Random gene expression", es: "Expresión génica aleatoria", de: "Zufällige Genexpression", nl: "Willekeurige genexpressie" },
          { en: "Environmental influences only", es: "Solo influencias ambientales", de: "Nur Umwelteinflüsse", nl: "Alleen omgevingsinvloeden" },
          { en: "Simple dominant inheritance", es: "Herencia dominante simple", de: "Einfache dominante Vererbung", nl: "Eenvoudige dominante overerving" }
        ],
        correct: 0,
        explanation: {
          en: "Genomic imprinting results from differential methylation patterns established at imprinting control regions during male and female gametogenesis. These methylation marks are maintained through development, creating parent-of-origin-specific gene expression that regulates growth, behavior, and development.",
          es: "La impronta genómica resulta de patrones de metilación diferencial establecidos en regiones de control durante gametogénesis masculina y femenina.",
          de: "Genomische Prägung resultiert aus differentiellen Methylierungsmustern, die an Prägungskontrollregionen während männlicher und weiblicher Gametogenese etabliert werden.",
          nl: "Genomische imprinting resulteert uit differentiële methylatie patronen vastgesteld bij imprinting controle regio's tijdens mannelijke en vrouwelijke gametogenese."
        }
      }
    ]
  };
  
  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/genetics', level5);
  }
})();