(function() {
  const level2 = {
    name: {
      en: "Advanced Molecular Genetics & Genomic Regulation",
      es: "Genética Molecular Avanzada y Regulación Genómica",
      de: "Erweiterte Molekulargenetik & Genomische Regulation",
      nl: "Geavanceerde Moleculaire Genetica & Genomische Regulatie"
    },
    questions: [
      {
        question: {
          en: "Which epigenetic mechanism involves histone methylation at lysine 27 of histone H3?",
          es: "¿Qué mecanismo epigenético involucra metilación de histonas en lisina 27 de la histona H3?",
          de: "Welcher epigenetische Mechanismus umfasst Histon-Methylierung an Lysin 27 von Histon H3?",
          nl: "Welk epigenetisch mechanisme betreft histon methylatie op lysine 27 van histon H3?"
        },
        options: [
          { en: "Polycomb-mediated gene silencing", es: "Silenciamiento génico mediado por Polycomb", de: "Polycomb-vermittelte Genstilllegung", nl: "Polycomb-gemedieerde gen silencing" },
          { en: "Trithorax-mediated activation", es: "Activación mediada por Trithorax", de: "Trithorax-vermittelte Aktivierung", nl: "Trithorax-gemedieerde activatie" },
          { en: "DNA methylation", es: "Metilación del ADN", de: "DNA-Methylierung", nl: "DNA methylatie" },
          { en: "Chromatin remodeling", es: "Remodelación de cromatina", de: "Chromatin-Remodellierung", nl: "Chromatine hermodellering" }
        ],
        correct: 0,
        explanation: {
          en: "H3K27me3 (trimethylation of lysine 27 on histone H3) is a key repressive chromatin mark established by Polycomb repressive complexes, leading to transcriptional silencing of developmental genes.",
          es: "H3K27me3 (trimetilación de lisina 27 en histona H3) es una marca represiva clave de cromatina establecida por complejos represivos Polycomb, llevando al silenciamiento transcripcional de genes de desarrollo.",
          de: "H3K27me3 (Trimethylierung von Lysin 27 an Histon H3) ist eine wichtige repressive Chromatin-Markierung, die durch Polycomb-repressive Komplexe etabliert wird und zur transkriptionellen Stilllegung von Entwicklungsgenen führt.",
          nl: "H3K27me3 (trimethylatie van lysine 27 op histon H3) is een belangrijke repressieve chromatine markering geëtableerd door Polycomb repressieve complexen, leidend tot transcriptionele stillegging van ontwikkelingsgenen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of X-chromosome inactivation in mammalian females?",
          es: "¿Cuál es el mecanismo molecular de inactivación del cromosoma X en hembras de mamíferos?",
          de: "Was ist der molekulare Mechanismus der X-Chromosom-Inaktivierung bei Säugetierweibchen?",
          nl: "Wat is het moleculaire mechanisme van X-chromosoom inactivatie bij vrouwelijke zoogdieren?"
        },
        options: [
          { en: "Xist lncRNA coating with PRC2 recruitment and H3K27me3 spreading", es: "Recubrimiento de ARNlnc Xist con reclutamiento de PRC2 y extensión de H3K27me3", de: "Xist-lncRNA-Beschichtung mit PRC2-Rekrutierung und H3K27me3-Ausbreitung", nl: "Xist lncRNA coating met PRC2 rekrutering en H3K27me3 verspreiding" },
          { en: "DNA methylation of promoter regions", es: "Metilación del ADN de regiones promotoras", de: "DNA-Methylierung von Promotorregionen", nl: "DNA methylatie van promotor regio's" },
          { en: "Histone deacetylation only", es: "Solo desacetilación de histonas", de: "Nur Histon-Deacetylierung", nl: "Alleen histon deacetylatie" },
          { en: "Chromosomal deletion", es: "Deleción cromosómica", de: "Chromosomale Deletion", nl: "Chromosomale deletie" }
        ],
        correct: 0,
        explanation: {
          en: "X-inactivation involves Xist long non-coding RNA coating the inactive X chromosome, recruiting Polycomb Repressive Complex 2 (PRC2) to deposit H3K27me3 marks, leading to chromosome-wide transcriptional silencing.",
          es: "La inactivación X involucra ARN largo no codificante Xist recubriendo el cromosoma X inactivo, reclutando Complejo Represivo Polycomb 2 (PRC2) para depositar marcas H3K27me3, llevando a silenciamiento transcripcional a nivel cromosómico.",
          de: "X-Inaktivierung umfasst Xist-lange nicht-kodierende RNA, die das inaktive X-Chromosom beschichtet und Polycomb Repressive Complex 2 (PRC2) rekrutiert, um H3K27me3-Markierungen zu setzen und chromosomweite transkriptionelle Stilllegung zu bewirken.",
          nl: "X-inactivatie behelst Xist lange niet-coderende RNA die het inactieve X-chromosoom bedekt, Polycomb Repressieve Complex 2 (PRC2) rekruterend om H3K27me3 markeringen te deponeren, leidend tot chromosoom-brede transcriptionele silencing."
        }
      },
      {
        question: {
          en: "Which RNA interference mechanism utilizes RISC complex for post-transcriptional gene silencing?",
          es: "¿Qué mecanismo de interferencia de ARN utiliza el complejo RISC para silenciamiento génico post-transcripcional?",
          de: "Welcher RNA-Interferenz-Mechanismus nutzt den RISC-Komplex für posttranskriptionelle Genstilllegung?",
          nl: "Welk RNA interferentie mechanisme gebruikt RISC complex voor post-transcriptionele gen silencing?"
        },
        options: [
          { en: "MicroRNA-mediated mRNA degradation with Argonaute endonuclease activity", es: "Degradación de ARNm mediada por microARN con actividad endonucleasa de Argonauta", de: "MicroRNA-vermittelte mRNA-Abbau mit Argonaute-Endonuklease-Aktivität", nl: "MicroRNA-gemedieerde mRNA degradatie met Argonaute endonuclease activiteit" },
          { en: "DNA methylation silencing", es: "Silenciamiento por metilación del ADN", de: "DNA-Methylierungssilencing", nl: "DNA methylatie silencing" },
          { en: "Histone modification", es: "Modificación de histonas", de: "Histon-Modifikation", nl: "Histon modificatie" },
          { en: "Transcriptional repression", es: "Represión transcripcional", de: "Transkriptionelle Repression", nl: "Transcriptionele repressie" }
        ],
        correct: 0,
        explanation: {
          en: "RNA interference through microRNAs operates via the RISC (RNA-Induced Silencing Complex) containing Argonaute proteins with endonuclease activity that cleave target mRNAs based on sequence complementarity.",
          es: "La interferencia de ARN a través de microARNs opera vía RISC (Complejo de Silenciamiento Inducido por ARN) conteniendo proteínas Argonauta con actividad endonucleasa que escinden ARNm objetivo basado en complementariedad de secuencia.",
          de: "RNA-Interferenz durch microRNAs funktioniert über RISC (RNA-Induced Silencing Complex) mit Argonaute-Proteinen mit Endonuklease-Aktivität, die Ziel-mRNAs basierend auf Sequenzkomplementarität spalten.",
          nl: "RNA interferentie door microRNA's werkt via RISC (RNA-Induced Silencing Complex) bevattend Argonaute eiwitten met endonuclease activiteit die doel-mRNA's klieven gebaseerd op sequentie complementariteit."
        }
      },
      {
        question: {
          en: "What is the molecular basis of genomic imprinting through differential DNA methylation?",
          es: "¿Cuál es la base molecular de la impronta genómica a través de metilación diferencial del ADN?",
          de: "Was ist die molekulare Basis der genomischen Prägung durch differentielle DNA-Methylierung?",
          nl: "Wat is de moleculaire basis van genomische imprinting door differentiële DNA methylatie?"
        },
        options: [
          { en: "Parent-of-origin methylation at imprinting control regions with allele-specific expression", es: "Metilación parental-de-origen en regiones de control de impronta con expresión específica de alelo", de: "Eltern-spezifische Methylierung an Prägungskontrollregionen mit allel-spezifischer Expression", nl: "Ouder-van-origine methylatie bij imprinting controle regio's met allel-specifieke expressie" },
          { en: "Random methylation patterns", es: "Patrones de metilación aleatorios", de: "Zufällige Methylierungsmuster", nl: "Willekeurige methylatie patronen" },
          { en: "Tissue-specific methylation", es: "Metilación específica de tejido", de: "Gewebespezifische Methylierung", nl: "Weefsel-specifieke methylatie" },
          { en: "Age-related methylation", es: "Metilación relacionada con la edad", de: "Altersbedingte Methylierung", nl: "Leeftijd-gerelateerde methylatie" }
        ],
        correct: 0,
        explanation: {
          en: "Genomic imprinting involves parent-of-origin-specific DNA methylation at imprinting control regions (ICRs) that results in monoallelic expression of genes, where only the maternal or paternal allele is expressed.",
          es: "La impronta genómica involucra metilación del ADN específica del origen parental en regiones de control de impronta (ICRs) que resulta en expresión monoalélica de genes, donde solo el alelo materno o paterno se expresa.",
          de: "Genomische Prägung umfasst eltern-spezifische DNA-Methylierung an Prägungskontrollregionen (ICRs), die zu monoallelischer Genexpression führt, bei der nur das mütterliche oder väterliche Allel exprimiert wird.",
          nl: "Genomische imprinting behelst ouder-van-origine-specifieke DNA methylatie bij imprinting controle regio's (ICR's) die resulteert in monoallelische expressie van genen, waarbij alleen het moederlijke of vaderlijke allel wordt geëxpresseerd."
        }
      },
      {
        question: {
          en: "Which chromatin remodeling complex utilizes ATP hydrolysis for nucleosome repositioning?",
          es: "¿Qué complejo de remodelación de cromatina utiliza hidrólisis de ATP para reposicionamiento de nucleosomas?",
          de: "Welcher Chromatin-Remodellierungskomplex nutzt ATP-Hydrolyse für Nukleosom-Repositionierung?",
          nl: "Welk chromatine hermodelleringscomplex gebruikt ATP hydrolyse voor nucleosoom herpositionering?"
        },
        options: [
          { en: "SWI/SNF complex with ATPase subunit for sliding nucleosomes", es: "Complejo SWI/SNF con subunidad ATPasa para deslizar nucleosomas", de: "SWI/SNF-Komplex mit ATPase-Untereinheit zum Gleiten von Nukleosomen", nl: "SWI/SNF complex met ATPase subeenheid voor glijdende nucleosomen" },
          { en: "DNA polymerase complex", es: "Complejo de ADN polimerasa", de: "DNA-Polymerase-Komplex", nl: "DNA polymerase complex" },
          { en: "Histone acetyltransferase", es: "Histona acetiltransferasa", de: "Histon-Acetyltransferase", nl: "Histon acetyltransferase" },
          { en: "DNA methyltransferase", es: "ADN metiltransferasa", de: "DNA-Methyltransferase", nl: "DNA methyltransferase" }
        ],
        correct: 0,
        explanation: {
          en: "SWI/SNF chromatin remodeling complexes contain ATPase subunits that use energy from ATP hydrolysis to slide, eject, or restructure nucleosomes, making DNA more accessible for transcription factors.",
          es: "Los complejos de remodelación de cromatina SWI/SNF contienen subunidades ATPasa que usan energía de hidrólisis de ATP para deslizar, expulsar o reestructurar nucleosomas, haciendo el ADN más accesible para factores de transcripción.",
          de: "SWI/SNF-Chromatin-Remodellierungskomplexe enthalten ATPase-Untereinheiten, die Energie aus ATP-Hydrolyse nutzen, um Nukleosomen zu verschieben, auszustoßen oder umzustrukturieren und DNA für Transkriptionsfaktoren zugänglicher zu machen.",
          nl: "SWI/SNF chromatine hermodelleringscomplexen bevatten ATPase subeenheden die energie van ATP hydrolyse gebruiken om nucleosomen te verschuiven, uit te stoten of te herstructureren, DNA toegankelijker makend voor transcriptiefactoren."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of alternative splicing regulation by splicing enhancers and silencers?",
          es: "¿Cuál es el mecanismo molecular de regulación del empalme alternativo por potenciadores y silenciadores de empalme?",
          de: "Was ist der molekulare Mechanismus der alternativen Spleißregulation durch Spleißverstärker und -silencer?",
          nl: "Wat is het moleculaire mechanisme van alternatieve splicing regulatie door splicing enhancers en silencers?"
        },
        options: [
          { en: "SR proteins and hnRNPs competing for binding sites to modulate spliceosome assembly", es: "Proteínas SR y hnRNPs compitiendo por sitios de unión para modular ensamble de espliceosoma", de: "SR-Proteine und hnRNPs konkurrieren um Bindungsstellen zur Modulation der Spliceosom-Assemblierung", nl: "SR eiwitten en hnRNP's concurrerend om bindingsplaatsen om spliceosome assemblage te moduleren" },
          { en: "DNA methylation changes", es: "Cambios de metilación del ADN", de: "DNA-Methylierungsänderungen", nl: "DNA methylatie veranderingen" },
          { en: "Histone modifications only", es: "Solo modificaciones de histonas", de: "Nur Histon-Modifikationen", nl: "Alleen histon modificaties" },
          { en: "Chromatin remodeling", es: "Remodelación de cromatina", de: "Chromatin-Remodellierung", nl: "Chromatine hermodellering" }
        ],
        correct: 0,
        explanation: {
          en: "Alternative splicing is regulated by serine/arginine-rich (SR) proteins that enhance splicing and heterogeneous nuclear ribonucleoproteins (hnRNPs) that can inhibit splicing, competing for regulatory sequences in pre-mRNA.",
          es: "El empalme alternativo es regulado por proteínas ricas en serina/arginina (SR) que mejoran el empalme y ribonucleoproteínas nucleares heterogéneas (hnRNPs) que pueden inhibir el empalme, compitiendo por secuencias regulatorias en pre-ARNm.",
          de: "Alternatives Spleißen wird durch Serin/Arginin-reiche (SR) Proteine reguliert, die das Spleißen verstärken, und heterogene nukleäre Ribonukleoproteine (hnRNPs), die das Spleißen hemmen können, wobei sie um regulatorische Sequenzen in der prä-mRNA konkurrieren.",
          nl: "Alternatieve splicing wordt gereguleerd door serine/arginine-rijke (SR) eiwitten die splicing verbeteren en heterogene nucleaire ribonucleoproteïnen (hnRNP's) die splicing kunnen remmen, concurrerend om regulatorische sequenties in pre-mRNA."
        }
      },
      {
        question: {
          en: "Which mechanism describes CRISPR-Cas9 programmable genome editing through guide RNA targeting?",
          es: "¿Qué mecanismo describe la edición genómica programable CRISPR-Cas9 a través de direccionamiento de ARN guía?",
          de: "Welcher Mechanismus beschreibt die programmierbare Genom-Editierung durch CRISPR-Cas9 mittels Guide-RNA-Targeting?",
          nl: "Welk mechanisme beschrijft CRISPR-Cas9 programmeerbare genoom editing door guide RNA targeting?"
        },
        options: [
          { en: "PAM-dependent DNA binding with Cas9 endonuclease creating double-strand breaks", es: "Unión a ADN dependiente de PAM con endonucleasa Cas9 creando roturas de doble cadena", de: "PAM-abhängige DNA-Bindung mit Cas9-Endonuklease, die Doppelstrangbrüche erzeugt", nl: "PAM-afhankelijke DNA binding met Cas9 endonuclease creërend dubbelstrengs breuken" },
          { en: "Random DNA cleavage", es: "Escisión aleatoria de ADN", de: "Zufällige DNA-Spaltung", nl: "Willekeurige DNA klieven" },
          { en: "Protein-based targeting only", es: "Solo direccionamiento basado en proteínas", de: "Nur proteinbasiertes Targeting", nl: "Alleen eiwit-gebaseerde targeting" },
          { en: "Chemical modification", es: "Modificación química", de: "Chemische Modifikation", nl: "Chemische modificatie" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas9 uses guide RNAs complementary to target DNA sequences adjacent to PAM (Protospacer Adjacent Motif) sites, directing Cas9 endonuclease to create precise double-strand breaks for genome editing.",
          es: "CRISPR-Cas9 usa ARNs guía complementarios a secuencias de ADN objetivo adyacentes a sitios PAM (Motivo Adyacente a Protoespaciador), dirigiendo la endonucleasa Cas9 a crear roturas precisas de doble cadena para edición genómica.",
          de: "CRISPR-Cas9 verwendet Guide-RNAs, die komplementär zu Ziel-DNA-Sequenzen neben PAM (Protospacer Adjacent Motif)-Stellen sind und die Cas9-Endonuklease zu präzisen Doppelstrangbrüchen für Genom-Editierung dirigieren.",
          nl: "CRISPR-Cas9 gebruikt guide RNA's complementair aan doel-DNA sequenties naast PAM (Protospacer Adjacent Motif) sites, Cas9 endonuclease dirigerend om precieze dubbelstrengs breuken te creëren voor genoom editing."
        }
      },
      {
        question: {
          en: "What is the molecular basis of transcriptional memory through chromatin bookmarking?",
          es: "¿Cuál es la base molecular de la memoria transcripcional a través de marcado de cromatina?",
          de: "Was ist die molekulare Basis des transkriptionellen Gedächtnisses durch Chromatin-Bookmarking?",
          nl: "Wat is de moleculaire basis van transcriptioneel geheugen door chromatine bookmarking?"
        },
        options: [
          { en: "Pioneer transcription factors maintaining open chromatin during cell division", es: "Factores de transcripción pioneros manteniendo cromatina abierta durante división celular", de: "Pioneer-Transkriptionsfaktoren, die während der Zellteilung offenes Chromatin aufrechterhalten", nl: "Pioneer transcriptiefactoren die open chromatine onderhouden tijdens celdeling" },
          { en: "DNA methylation inheritance", es: "Herencia de metilación del ADN", de: "DNA-Methylierungsvererbung", nl: "DNA methylatie erfelijkheid" },
          { en: "Histone degradation", es: "Degradación de histonas", de: "Histon-Abbau", nl: "Histon afbraak" },
          { en: "Chromosome condensation", es: "Condensación cromosómica", de: "Chromosomenkondensation", nl: "Chromosoom condensatie" }
        ],
        correct: 0,
        explanation: {
          en: "Transcriptional memory involves pioneer transcription factors that remain bound to chromatin during mitosis, bookmarking active genes and facilitating rapid reactivation in daughter cells.",
          es: "La memoria transcripcional involucra factores de transcripción pioneros que permanecen unidos a cromatina durante mitosis, marcando genes activos y facilitando reactivación rápida en células hijas.",
          de: "Transkriptionelles Gedächtnis umfasst Pioneer-Transkriptionsfaktoren, die während der Mitose an Chromatin gebunden bleiben, aktive Gene markieren und schnelle Reaktivierung in Tochterzellen erleichtern.",
          nl: "Transcriptioneel geheugen behelst pioneer transcriptiefactoren die gebonden blijven aan chromatine tijdens mitose, actieve genen markerend en snelle heractivatie in dochtercellen faciliterend."
        }
      },
      {
        question: {
          en: "Which post-transcriptional modification involves N6-methyladenosine (m6A) RNA methylation?",
          es: "¿Qué modificación post-transcripcional involucra metilación de ARN N6-metiladenina (m6A)?",
          de: "Welche posttranskriptionelle Modifikation umfasst N6-Methyladenosin (m6A) RNA-Methylierung?",
          nl: "Welke post-transcriptionele modificatie betreft N6-methyladenosine (m6A) RNA methylatie?"
        },
        options: [
          { en: "mRNA stability and translation regulation by METTL3/METTL14 methyltransferase complex", es: "Estabilidad de ARNm y regulación de traducción por complejo metiltransferasa METTL3/METTL14", de: "mRNA-Stabilität und Translationsregulation durch METTL3/METTL14-Methyltransferase-Komplex", nl: "mRNA stabiliteit en translatie regulatie door METTL3/METTL14 methyltransferase complex" },
          { en: "DNA repair mechanism", es: "Mecanismo de reparación del ADN", de: "DNA-Reparaturmechanismus", nl: "DNA reparatie mechanisme" },
          { en: "Histone modification", es: "Modificación de histonas", de: "Histon-Modifikation", nl: "Histon modificatie" },
          { en: "Protein folding", es: "Plegamiento de proteínas", de: "Proteinfaltung", nl: "Eiwit vouwing" }
        ],
        correct: 0,
        explanation: {
          en: "m6A RNA methylation by METTL3/METTL14 writers affects mRNA stability, localization, and translation efficiency, with FTO and ALKBH5 demethylases providing dynamic regulation of this epitranscriptomic mark.",
          es: "La metilación de ARN m6A por escritores METTL3/METTL14 afecta estabilidad, localización y eficiencia de traducción del ARNm, con desmetilasas FTO y ALKBH5 proporcionando regulación dinámica de esta marca epitranscriptómica.",
          de: "m6A-RNA-Methylierung durch METTL3/METTL14-Writer beeinflusst mRNA-Stabilität, Lokalisation und Translationseffizienz, wobei FTO- und ALKBH5-Demethylasen dynamische Regulation dieser epitranscriptomischen Markierung bieten.",
          nl: "m6A RNA methylatie door METTL3/METTL14 writers beïnvloedt mRNA stabiliteit, localisatie en translatie efficiëntie, met FTO en ALKBH5 demethylases die dynamische regulatie van deze epitranscriptomische markering bieden."
        }
      },
      {
        question: {
          en: "What is the mechanism of nonsense-mediated mRNA decay (NMD) quality control?",
          es: "¿Cuál es el mecanismo de control de calidad de degradación de ARNm mediada por sinsentido (NMD)?",
          de: "Was ist der Mechanismus der nonsense-vermittelten mRNA-Abbau (NMD) Qualitätskontrolle?",
          nl: "Wat is het mechanisme van nonsense-gemedieerde mRNA verval (NMD) kwaliteitscontrole?"
        },
        options: [
          { en: "UPF1 phosphorylation triggering mRNA degradation upon premature stop codon recognition", es: "Fosforilación de UPF1 desencadenando degradación de ARNm al reconocer codón de parada prematuro", de: "UPF1-Phosphorylierung, die mRNA-Abbau bei vorzeitiger Stopp-Codon-Erkennung auslöst", nl: "UPF1 fosforylatie triggerd mRNA degradatie bij vroegtijdige stop codon herkenning" },
          { en: "DNA repair pathway", es: "Vía de reparación del ADN", de: "DNA-Reparaturweg", nl: "DNA reparatie pathway" },
          { en: "Protein degradation", es: "Degradación de proteínas", de: "Proteinabbau", nl: "Eiwit degradatie" },
          { en: "Chromatin modification", es: "Modificación de cromatina", de: "Chromatin-Modifikation", nl: "Chromatine modificatie" }
        ],
        correct: 0,
        explanation: {
          en: "NMD involves UPF1 kinase phosphorylation when ribosomes encounter premature termination codons upstream of exon-exon junctions, triggering SMG6/7-mediated mRNA cleavage and degradation to prevent translation of truncated proteins.",
          es: "NMD involucra fosforilación de la cinasa UPF1 cuando ribosomas encuentran codones de terminación prematuros río arriba de uniones exón-exón, desencadenando escisión y degradación de ARNm mediada por SMG6/7 para prevenir traducción de proteínas truncadas.",
          de: "NMD umfasst UPF1-Kinase-Phosphorylierung, wenn Ribosomen vorzeitige Terminationscodons stromaufwärts von Exon-Exon-Verbindungen antreffen und SMG6/7-vermittelte mRNA-Spaltung und -Abbau auslösen, um Translation verkürzter Proteine zu verhindern.",
          nl: "NMD behelst UPF1 kinase fosforylatie wanneer ribosomen vroegtijdige terminatie codons tegenkomen stroomopwaarts van exon-exon juncties, SMG6/7-gemedieerde mRNA klieven en degradatie triggerend om translatie van afgekapte eiwitten te voorkomen."
        }
      },
      {
        question: {
          en: "Which mechanism describes telomerase-mediated chromosome end protection through telomeric DNA synthesis?",
          es: "¿Qué mecanismo describe la protección de extremos cromosómicos mediada por telomerasa a través de síntesis de ADN telomérico?",
          de: "Welcher Mechanismus beschreibt Telomerase-vermittelten Chromosomenendschutz durch telomere DNA-Synthese?",
          nl: "Welk mechanisme beschrijft telomerase-gemedieerde chromosoom eind bescherming door telomere DNA synthese?"
        },
        options: [
          { en: "TERT reverse transcriptase extending 3' telomeric overhangs using TERC RNA template", es: "Transcriptasa reversa TERT extendiendo salientes teloméricas 3' usando plantilla de ARN TERC", de: "TERT-Reverse-Transkriptase verlängert 3'-telomere Überhänge mit TERC-RNA-Vorlage", nl: "TERT reverse transcriptase verlengend 3' telomere overhangs gebruikend TERC RNA sjabloon" },
          { en: "DNA polymerase replication", es: "Replicación de ADN polimerasa", de: "DNA-Polymerase-Replikation", nl: "DNA polymerase replicatie" },
          { en: "Homologous recombination", es: "Recombinación homóloga", de: "Homologe Rekombination", nl: "Homologe recombinatie" },
          { en: "Non-homologous end joining", es: "Unión de extremos no homólogos", de: "Nicht-homologe Endverknüpfung", nl: "Niet-homologe eind verbinding" }
        ],
        correct: 0,
        explanation: {
          en: "Telomerase contains TERT (telomerase reverse transcriptase) that uses TERC (telomerase RNA component) as a template to add TTAGGG repeats to chromosome 3' ends, compensating for the end-replication problem.",
          es: "La telomerasa contiene TERT (transcriptasa reversa de telomerasa) que usa TERC (componente de ARN de telomerasa) como plantilla para añadir repeticiones TTAGGG a extremos 3' cromosómicos, compensando el problema de replicación terminal.",
          de: "Telomerase enthält TERT (Telomerase-Reverse-Transkriptase), die TERC (Telomerase-RNA-Komponente) als Vorlage verwendet, um TTAGGG-Wiederholungen zu Chromosomen-3'-Enden hinzuzufügen und das End-Replikations-Problem zu kompensieren.",
          nl: "Telomerase bevat TERT (telomerase reverse transcriptase) die TERC (telomerase RNA component) gebruikt als sjabloon om TTAGGG herhalingen toe te voegen aan chromosoom 3' einden, compenserend voor het eind-replicatie probleem."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of RNA polymerase II carboxy-terminal domain (CTD) phosphorylation cycling?",
          es: "¿Cuál es el mecanismo molecular del ciclo de fosforilación del dominio carboxilo-terminal (CTD) de la ARN polimerasa II?",
          de: "Was ist der molekulare Mechanismus der RNA-Polymerase II Carboxy-terminale Domäne (CTD) Phosphorylierungszyklus?",
          nl: "Wat is het moleculaire mechanisme van RNA polymerase II carboxy-terminale domein (CTD) fosforylatie cyclus?"
        },
        options: [
          { en: "Sequential Ser2/Ser5 phosphorylation coordinating transcription initiation, elongation, and RNA processing", es: "Fosforilación secuencial Ser2/Ser5 coordinando iniciación de transcripción, elongación y procesamiento de ARN", de: "Sequentielle Ser2/Ser5-Phosphorylierung koordiniert Transkriptionsinitiierung, Elongation und RNA-Verarbeitung", nl: "Sequentiële Ser2/Ser5 fosforylatie coördinerend transcriptie initiatie, elongatie en RNA verwerking" },
          { en: "Random phosphorylation", es: "Fosforilación aleatoria", de: "Zufällige Phosphorylierung", nl: "Willekeurige fosforylatie" },
          { en: "Single phosphorylation event", es: "Evento de fosforilación único", de: "Einmaliges Phosphorylierungsereignis", nl: "Enkele fosforylatie gebeurtenis" },
          { en: "Protein degradation", es: "Degradación de proteínas", de: "Proteinabbau", nl: "Eiwit degradatie" }
        ],
        correct: 0,
        explanation: {
          en: "RNA polymerase II CTD undergoes dynamic phosphorylation of serine residues, with Ser5 phosphorylation by TFIIH during initiation and Ser2 phosphorylation by P-TEFb during elongation, coordinating co-transcriptional RNA processing events.",
          es: "El CTD de ARN polimerasa II experimenta fosforilación dinámica de residuos de serina, con fosforilación Ser5 por TFIIH durante iniciación y fosforilación Ser2 por P-TEFb durante elongación, coordinando eventos de procesamiento de ARN co-transcripcional.",
          de: "RNA-Polymerase II CTD durchläuft dynamische Phosphorylierung von Serin-Resten, mit Ser5-Phosphorylierung durch TFIIH während der Initiierung und Ser2-Phosphorylierung durch P-TEFb während der Elongation, koordiniert co-transkriptionelle RNA-Verarbeitungsereignisse.",
          nl: "RNA polymerase II CTD ondergaat dynamische fosforylatie van serine residuen, met Ser5 fosforylatie door TFIIH tijdens initiatie en Ser2 fosforylatie door P-TEFb tijdens elongatie, co-transcriptionele RNA verwerking gebeurtenissen coördinerend."
        }
      },
      {
        question: {
          en: "Which DNA repair mechanism involves PARP1-mediated recruitment of repair factors to single-strand breaks?",
          es: "¿Qué mecanismo de reparación del ADN involucra reclutamiento mediado por PARP1 de factores de reparación a roturas de cadena simple?",
          de: "Welcher DNA-Reparaturmechanismus umfasst PARP1-vermittelte Rekrutierung von Reparaturfaktoren zu Einzelstrangbrüchen?",
          nl: "Welk DNA reparatie mechanisme betreft PARP1-gemedieerde rekrutering van reparatie factoren naar enkelstrengs breuken?"
        },
        options: [
          { en: "Base excision repair with XRCC1 scaffold assembly", es: "Reparación por escisión de bases con ensamble de andamio XRCC1", de: "Basenexzisionsreparatur mit XRCC1-Gerüst-Assemblierung", nl: "Base excisie reparatie met XRCC1 steiger assemblage" },
          { en: "Homologous recombination", es: "Recombinación homóloga", de: "Homologe Rekombination", nl: "Homologe recombinatie" },
          { en: "Non-homologous end joining", es: "Unión de extremos no homólogos", de: "Nicht-homologe Endverknüpfung", nl: "Niet-homologe eind verbinding" },
          { en: "Mismatch repair", es: "Reparación de apareamiento erróneo", de: "Mismatch-Reparatur", nl: "Mismatch reparatie" }
        ],
        correct: 0,
        explanation: {
          en: "PARP1 (Poly-ADP-ribose polymerase 1) detects single-strand breaks and synthesizes PAR chains that recruit XRCC1 scaffold protein, which coordinates assembly of base excision repair machinery including DNA polymerase β and ligase III.",
          es: "PARP1 (Poli-ADP-ribosa polimerasa 1) detecta roturas de cadena simple y sintetiza cadenas PAR que reclutan proteína andamio XRCC1, que coordina ensamble de maquinaria de reparación por escisión de bases incluyendo ADN polimerasa β y ligasa III.",
          de: "PARP1 (Poly-ADP-ribose Polymerase 1) erkennt Einzelstrangbrüche und synthetisiert PAR-Ketten, die XRCC1-Gerüstprotein rekrutieren, das die Assemblierung der Basenexzisionsreparatur-Maschinerie einschließlich DNA-Polymerase β und Ligase III koordiniert.",
          nl: "PARP1 (Poly-ADP-ribose polymerase 1) detecteert enkelstrengs breuken en synthetiseert PAR ketens die XRCC1 steiger eiwit rekruteren, dat assemblage van base excisie reparatie machinerie inclusief DNA polymerase β en ligase III coördineert."
        }
      },
      {
        question: {
          en: "What is the molecular basis of locus control region (LCR) function in gene cluster regulation?",
          es: "¿Cuál es la base molecular de la función de región de control de locus (LCR) en regulación de clúster de genes?",
          de: "Was ist die molekulare Basis der Locus-Kontrollregion (LCR) Funktion in Gencluster-Regulation?",
          nl: "Wat is de moleculaire basis van locus controle regio (LCR) functie in gen cluster regulatie?"
        },
        options: [
          { en: "Long-range chromatin looping establishing active chromatin domains with DNase I hypersensitive sites", es: "Formación de bucles de cromatina de largo alcance estableciendo dominios de cromatina activa con sitios hipersensibles a DNasa I", de: "Langreichweite Chromatin-Looping etabliert aktive Chromatin-Domänen mit DNase I-hypersensitiven Stellen", nl: "Lange-afstand chromatine looping etablisserend actieve chromatine domeinen met DNase I hypersensitieve sites" },
          { en: "Simple promoter activation", es: "Activación simple de promotor", de: "Einfache Promotor-Aktivierung", nl: "Eenvoudige promotor activatie" },
          { en: "DNA methylation", es: "Metilación del ADN", de: "DNA-Methylierung", nl: "DNA methylatie" },
          { en: "Histone deacetylation", es: "Desacetilación de histonas", de: "Histon-Deacetylierung", nl: "Histon deacetylatie" }
        ],
        correct: 0,
        explanation: {
          en: "Locus control regions function through long-range chromatin interactions, forming loops that bring regulatory elements into contact with gene promoters and establishing large active chromatin domains marked by DNase I hypersensitive sites.",
          es: "Las regiones de control de locus funcionan a través de interacciones de cromatina de largo alcance, formando bucles que ponen elementos regulatorios en contacto con promotores de genes y estableciendo dominios grandes de cromatina activa marcados por sitios hipersensibles a DNasa I.",
          de: "Locus-Kontrollregionen funktionieren durch Langreichweite-Chromatin-Interaktionen, bilden Schleifen, die regulatorische Elemente mit Genpromotoren in Kontakt bringen und große aktive Chromatin-Domänen etablieren, die durch DNase I-hypersensitive Stellen markiert sind.",
          nl: "Locus controle regio's functioneren door lange-afstand chromatine interacties, loops vormend die regulatorische elementen in contact brengen met gen promotors en grote actieve chromatine domeinen etablisseren gemarkeerd door DNase I hypersensitieve sites."
        }
      },
      {
        question: {
          en: "Which mechanism describes ribosome biogenesis through rRNA processing and assembly?",
          es: "¿Qué mecanismo describe la biogénesis de ribosomas a través de procesamiento de ARNr y ensamble?",
          de: "Welcher Mechanismus beschreibt Ribosom-Biogenese durch rRNA-Verarbeitung und -Assemblierung?",
          nl: "Welk mechanisme beschrijft ribosoom biogenese door rRNA verwerking en assemblage?"
        },
        options: [
          { en: "Nucleolar pre-rRNA transcription with snoRNA-guided chemical modifications and ribosomal subunit assembly", es: "Transcripción de pre-ARNr nucleolar con modificaciones químicas guiadas por snoARN y ensamble de subunidades ribosómicas", de: "Nukleoläre prä-rRNA-Transkription mit snoRNA-geführten chemischen Modifikationen und ribosomaler Untereinheits-Assemblierung", nl: "Nucleolaire pre-rRNA transcriptie met snoRNA-geleide chemische modificaties en ribosomale subeenheid assemblage" },
          { en: "Cytoplasmic protein synthesis", es: "Síntesis de proteínas citoplásmicas", de: "Zytoplasmatische Proteinsynthese", nl: "Cytoplasmatische eiwitsynthese" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA replicatie" },
          { en: "mRNA processing", es: "Procesamiento de ARNm", de: "mRNA-Verarbeitung", nl: "mRNA verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Ribosome biogenesis involves transcription of 47S pre-rRNA in the nucleolus, extensive processing guided by small nucleolar RNAs (snoRNAs) for pseudouridylation and methylation, followed by assembly with ribosomal proteins into functional subunits.",
          es: "La biogénesis de ribosomas involucra transcripción de pre-ARNr 47S en el nucleolo, procesamiento extenso guiado por ARNs nucleolares pequeños (snoARNs) para pseudouridilación y metilación, seguido por ensamble con proteínas ribosómicas en subunidades funcionales.",
          de: "Ribosom-Biogenese umfasst Transkription von 47S-prä-rRNA im Nukleolus, extensive Verarbeitung geführt durch kleine nukleolare RNAs (snoRNAs) für Pseudouridylierung und Methylierung, gefolgt von Assemblierung mit ribosomalen Proteinen zu funktionalen Untereinheiten.",
          nl: "Ribosoom biogenese behelst transcriptie van 47S pre-rRNA in de nucleolus, uitgebreide verwerking geleid door kleine nucleolaire RNA's (snoRNA's) voor pseudouridylatie en methylatie, gevolgd door assemblage met ribosomale eiwitten tot functionele subeenheden."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of stress granule formation during cellular stress response?",
          es: "¿Cuál es el mecanismo molecular de formación de gránulos de estrés durante la respuesta al estrés celular?",
          de: "Was ist der molekulare Mechanismus der Stress-Granulum-Bildung während der zellulären Stressantwort?",
          nl: "Wat is het moleculaire mechanisme van stress granule formatie tijdens cellulaire stress respons?"
        },
        options: [
          { en: "eIF2α phosphorylation triggering mRNP condensation and translational arrest", es: "Fosforilación de eIF2α desencadenando condensación de mRNP y arresto traduccional", de: "eIF2α-Phosphorylierung löst mRNP-Kondensation und Translationsarrest aus", nl: "eIF2α fosforylatie triggerend mRNP condensatie en translationele arrest" },
          { en: "DNA damage response", es: "Respuesta al daño del ADN", de: "DNA-Schadens-Antwort", nl: "DNA schade respons" },
          { en: "Cell cycle checkpoint", es: "Punto de control del ciclo celular", de: "Zellzyklus-Checkpoint", nl: "Celcyclus checkpoint" },
          { en: "Protein folding", es: "Plegamiento de proteínas", de: "Proteinfaltung", nl: "Eiwit vouwing" }
        ],
        correct: 0,
        explanation: {
          en: "Stress granules form when eIF2α phosphorylation by stress-activated kinases inhibits translation initiation, causing stalled mRNPs to undergo liquid-liquid phase separation and form membrane-less organelles that sequester mRNAs and RNA-binding proteins.",
          es: "Los gránulos de estrés se forman cuando la fosforilación de eIF2α por cinasas activadas por estrés inhibe la iniciación de traducción, causando que mRNPs estancados experimenten separación de fases líquido-líquido y formen organelos sin membrana que secuestran ARNms y proteínas de unión a ARN.",
          de: "Stress-Granula bilden sich, wenn eIF2α-Phosphorylierung durch stress-aktivierte Kinasen die Translationsinitiierung hemmt und blockierte mRNPs eine Flüssig-Flüssig-Phasentrennung durchlaufen und membranlose Organellen bilden, die mRNAs und RNA-bindende Proteine sequestrieren.",
          nl: "Stress granules vormen zich wanneer eIF2α fosforylatie door stress-geactiveerde kinases translatie initiatie remt, veroorzakend dat vastgelopen mRNP's vloeistof-vloeistof fase scheiding ondergaan en membraan-loze organellen vormen die mRNA's en RNA-bindende eiwitten sequestreren."
        }
      },
      {
        question: {
          en: "Which epigenetic mechanism involves DNA demethylation through TET enzyme oxidation?",
          es: "¿Qué mecanismo epigenético involucra desmetilación del ADN a través de oxidación por enzimas TET?",
          de: "Welcher epigenetische Mechanismus umfasst DNA-Demethylierung durch TET-Enzym-Oxidation?",
          nl: "Welk epigenetisch mechanisme betreft DNA demethylatie door TET enzym oxidatie?"
        },
        options: [
          { en: "5-methylcytosine oxidation to 5-hydroxymethylcytosine followed by base excision repair", es: "Oxidación de 5-metilcitosina a 5-hidroximetilcitosina seguida por reparación por escisión de bases", de: "5-Methylcytosin-Oxidation zu 5-Hydroxymethylcytosin gefolgt von Basenexzisionsreparatur", nl: "5-methylcytosine oxidatie tot 5-hydroxymethylcytosine gevolgd door base excisie reparatie" },
          { en: "Direct demethylation", es: "Desmetilación directa", de: "Direkte Demethylierung", nl: "Directe demethylatie" },
          { en: "Histone modification", es: "Modificación de histonas", de: "Histon-Modifikation", nl: "Histon modificatie" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA replicatie" }
        ],
        correct: 0,
        explanation: {
          en: "TET (Ten-eleven translocation) enzymes oxidize 5-methylcytosine to 5-hydroxymethylcytosine, 5-formylcytosine, and 5-carboxylcytosine, which can be removed by thymine DNA glycosylase and base excision repair to restore unmethylated cytosine.",
          es: "Las enzimas TET (Translocación diez-once) oxidan 5-metilcitosina a 5-hidroximetilcitosina, 5-formilcitosina y 5-carboxicitosina, que pueden ser removidas por timina ADN glicosilasa y reparación por escisión de bases para restaurar citosina no metilada.",
          de: "TET (Ten-eleven translocation) Enzyme oxidieren 5-Methylcytosin zu 5-Hydroxymethylcytosin, 5-Formylcytosin und 5-Carboxylcytosin, die durch Thymin-DNA-Glykosylase und Basenexzisionsreparatur entfernt werden können, um unmethyliertes Cytosin wiederherzustellen.",
          nl: "TET (Ten-eleven translocation) enzymen oxideren 5-methylcytosine tot 5-hydroxymethylcytosine, 5-formylcytosine en 5-carboxylcytosine, die kunnen worden verwijderd door thymine DNA glycosylase en base excisie reparatie om ongemethyleerd cytosine te herstellen."
        }
      },
      {
        question: {
          en: "What is the molecular basis of RNA editing through ADAR enzyme activity?",
          es: "¿Cuál es la base molecular de la edición de ARN a través de la actividad de enzimas ADAR?",
          de: "Was ist die molekulare Basis der RNA-Editierung durch ADAR-Enzym-Aktivität?",
          nl: "Wat is de moleculaire basis van RNA editing door ADAR enzym activiteit?"
        },
        options: [
          { en: "Adenosine-to-inosine conversion in double-stranded RNA structures affecting codon meaning", es: "Conversión de adenosina a inosina en estructuras de ARN de doble cadena afectando significado de codones", de: "Adenosin-zu-Inosin-Umwandlung in doppelsträngigen RNA-Strukturen beeinflusst Codon-Bedeutung", nl: "Adenosine-naar-inosine conversie in dubbelstrengs RNA structuren beïnvloedend codon betekenis" },
          { en: "DNA sequence changes", es: "Cambios en secuencia de ADN", de: "DNA-Sequenzänderungen", nl: "DNA sequentie veranderingen" },
          { en: "Protein modifications", es: "Modificaciones de proteínas", de: "Protein-Modifikationen", nl: "Eiwit modificaties" },
          { en: "Histone changes", es: "Cambios de histonas", de: "Histon-Änderungen", nl: "Histon veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "ADAR (Adenosine Deaminase Acting on RNA) enzymes convert adenosine to inosine in double-stranded RNA regions, where inosine is read as guanosine during translation, effectively changing codon meaning and protein sequences.",
          es: "Las enzimas ADAR (Adenosina Desaminasa Actuando sobre ARN) convierten adenosina a inosina en regiones de ARN de doble cadena, donde inosina se lee como guanosina durante traducción, cambiando efectivamente significado de codones y secuencias proteicas.",
          de: "ADAR (Adenosine Deaminase Acting on RNA) Enzyme wandeln Adenosin zu Inosin in doppelsträngigen RNA-Regionen um, wo Inosin während der Translation als Guanosin gelesen wird und effektiv Codon-Bedeutung und Proteinsequenzen ändert.",
          nl: "ADAR (Adenosine Deaminase Acting on RNA) enzymen converteren adenosine naar inosine in dubbelstrengs RNA regio's, waar inosine wordt gelezen als guanosine tijdens translatie, effectief codon betekenis en eiwit sequenties veranderend."
        }
      },
      {
        question: {
          en: "Which mechanism describes enhancer-promoter interactions through chromatin looping mediated by cohesin?",
          es: "¿Qué mecanismo describe las interacciones potenciador-promotor a través de formación de bucles de cromatina mediada por cohesina?",
          de: "Welcher Mechanismus beschreibt Enhancer-Promotor-Interaktionen durch Chromatin-Looping vermittelt durch Cohesin?",
          nl: "Welk mechanisme beschrijft enhancer-promotor interacties door chromatine looping gemedieerd door cohesin?"
        },
        options: [
          { en: "CTCF-cohesin complex mediating long-range DNA contacts within topologically associating domains", es: "Complejo CTCF-cohesina mediando contactos de ADN de largo alcance dentro de dominios de asociación topológica", de: "CTCF-Cohesin-Komplex vermittelt Langstrecken-DNA-Kontakte innerhalb topologisch assoziierender Domänen", nl: "CTCF-cohesin complex medierend lange-afstand DNA contacten binnen topologisch associërende domeinen" },
          { en: "Direct protein-protein interactions", es: "Interacciones directas proteína-proteína", de: "Direkte Protein-Protein-Interaktionen", nl: "Directe eiwit-eiwit interacties" },
          { en: "DNA recombination", es: "Recombinación de ADN", de: "DNA-Rekombination", nl: "DNA recombinatie" },
          { en: "RNA polymerase tracking", es: "Rastreo de ARN polimerasa", de: "RNA-Polymerase-Verfolgung", nl: "RNA polymerase tracking" }
        ],
        correct: 0,
        explanation: {
          en: "CTCF (CCCTC-binding factor) binds to insulator sequences and recruits cohesin complexes to form chromatin loops, enabling enhancer-promoter interactions within topologically associating domains (TADs) while preventing inappropriate contacts between domains.",
          es: "CTCF (factor de unión CCCTC) se une a secuencias aisladoras y recluta complejos de cohesina para formar bucles de cromatina, permitiendo interacciones potenciador-promotor dentro de dominios de asociación topológica (TADs) mientras previene contactos inapropiados entre dominios.",
          de: "CTCF (CCCTC-binding factor) bindet an Isolator-Sequenzen und rekrutiert Cohesin-Komplexe zur Bildung von Chromatin-Schleifen, ermöglicht Enhancer-Promotor-Interaktionen innerhalb topologisch assoziierender Domänen (TADs) und verhindert unangemessene Kontakte zwischen Domänen.",
          nl: "CTCF (CCCTC-binding factor) bindt aan isolator sequenties en rekruteert cohesin complexen om chromatine loops te vormen, enhancer-promotor interacties mogelijk makend binnen topologisch associërende domeinen (TAD's) terwijl ongepaste contacten tussen domeinen wordt voorkomen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of circadian clock gene regulation through CLOCK-BMAL1 heterodimers?",
          es: "¿Cuál es el mecanismo molecular de regulación de genes del reloj circadiano a través de heterodímeros CLOCK-BMAL1?",
          de: "Was ist der molekulare Mechanismus der circadianen Uhren-Genregulation durch CLOCK-BMAL1-Heterodimere?",
          nl: "Wat is het moleculaire mechanisme van circadiane klok gen regulatie door CLOCK-BMAL1 heterodimeren?"
        },
        options: [
          { en: "E-box binding driving Period and Cryptochrome transcription with negative feedback repression", es: "Unión a E-box impulsando transcripción de Period y Cryptochrome con represión por retroalimentación negativa", de: "E-box-Bindung treibt Period- und Cryptochrome-Transkription mit negativer Feedback-Repression an", nl: "E-box binding aandrijvend Period en Cryptochrome transcriptie met negatieve feedback repressie" },
          { en: "Random gene expression", es: "Expresión génica aleatoria", de: "Zufällige Genexpression", nl: "Willekeurige genexpressie" },
          { en: "Constitutive activation", es: "Activación constitutiva", de: "Konstitutive Aktivierung", nl: "Constitutieve activatie" },
          { en: "Metabolic regulation only", es: "Solo regulación metabólica", de: "Nur metabolische Regulation", nl: "Alleen metabolische regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "CLOCK-BMAL1 heterodimers bind to E-box elements in promoters to activate transcription of Period and Cryptochrome genes, which then form repressor complexes that inhibit CLOCK-BMAL1 activity, creating the core negative feedback loop of circadian rhythm.",
          es: "Los heterodímeros CLOCK-BMAL1 se unen a elementos E-box en promotores para activar transcripción de genes Period y Cryptochrome, que luego forman complejos represores que inhiben actividad CLOCK-BMAL1, creando el bucle de retroalimentación negativa central del ritmo circadiano.",
          de: "CLOCK-BMAL1-Heterodimere binden an E-box-Elemente in Promotoren zur Aktivierung der Transkription von Period- und Cryptochrome-Genen, die dann Repressor-Komplexe bilden, die CLOCK-BMAL1-Aktivität hemmen und die zentrale negative Feedback-Schleife des circadianen Rhythmus schaffen.",
          nl: "CLOCK-BMAL1 heterodimeren binden aan E-box elementen in promotors om transcriptie van Period en Cryptochrome genen te activeren, die dan repressor complexen vormen die CLOCK-BMAL1 activiteit remmen, de kern negatieve feedback loop van circadiane ritme creërend."
        }
      },
      {
        question: {
          en: "Which post-translational modification involves SUMOylation for transcriptional regulation?",
          es: "¿Qué modificación post-traduccional involucra SUMOilación para regulación transcripcional?",
          de: "Welche posttranslationale Modifikation umfasst SUMOylierung für transkriptionelle Regulation?",
          nl: "Welke post-translationele modificatie betreft SUMOylatie voor transcriptionele regulatie?"
        },
        options: [
          { en: "Small Ubiquitin-like Modifier conjugation altering protein interactions and nuclear localization", es: "Conjugación de Modificador Pequeño Similar a Ubiquitina alterando interacciones proteicas y localización nuclear", de: "Small Ubiquitin-like Modifier-Konjugation verändert Proteininteraktionen und nukleäre Lokalisation", nl: "Small Ubiquitin-like Modifier conjugatie veranderend eiwit interacties en nucleaire localisatie" },
          { en: "Protein degradation", es: "Degradación de proteínas", de: "Proteinabbau", nl: "Eiwit degradatie" },
          { en: "Enzyme activation", es: "Activación de enzimas", de: "Enzym-Aktivierung", nl: "Enzym activatie" },
          { en: "Membrane targeting", es: "Direccionamiento a membrana", de: "Membran-Targeting", nl: "Membraan targeting" }
        ],
        correct: 0,
        explanation: {
          en: "SUMOylation involves covalent attachment of Small Ubiquitin-like Modifier (SUMO) proteins to lysine residues in target proteins, often regulating transcription by altering protein-protein interactions, nuclear localization, and chromatin binding properties.",
          es: "La SUMOilación involucra unión covalente de proteínas Modificador Pequeño Similar a Ubiquitina (SUMO) a residuos de lisina en proteínas objetivo, a menudo regulando transcripción alterando interacciones proteína-proteína, localización nuclear y propiedades de unión a cromatina.",
          de: "SUMOylierung umfasst kovalente Anheftung von Small Ubiquitin-like Modifier (SUMO) Proteinen an Lysin-Reste in Zielproteinen und reguliert oft Transkription durch Veränderung von Protein-Protein-Interaktionen, nukleärer Lokalisation und Chromatin-Bindungseigenschaften.",
          nl: "SUMOylatie behelst covalente aanhechting van Small Ubiquitin-like Modifier (SUMO) eiwitten aan lysine residuen in doel eiwitten, vaak transcriptie regulerend door eiwit-eiwit interacties, nucleaire localisatie en chromatine bindingseigenschappen te veranderen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of autophagy-mediated protein quality control through selective cargo recognition?",
          es: "¿Cuál es el mecanismo molecular del control de calidad proteica mediado por autofagia a través del reconocimiento selectivo de carga?",
          de: "Was ist der molekulare Mechanismus der Autophagie-vermittelten Proteinqualitätskontrolle durch selektive Cargo-Erkennung?",
          nl: "Wat is het moleculaire mechanisme van autofagie-gemedieerde eiwit kwaliteitscontrole door selectieve cargo herkenning?"
        },
        options: [
          { en: "p62/SQSTM1 adaptor linking ubiquitinated cargo to LC3-decorated autophagosomes", es: "Adaptador p62/SQSTM1 conectando carga ubiquitinada a autofagosomas decorados con LC3", de: "p62/SQSTM1-Adapter verknüpft ubiquitinierte Cargo mit LC3-dekorierten Autophagosomen", nl: "p62/SQSTM1 adaptor verbindend geubiquitineerde cargo aan LC3-gedecoreerde autofagosomen" },
          { en: "Random protein degradation", es: "Degradación aleatoria de proteínas", de: "Zufälliger Proteinabbau", nl: "Willekeurige eiwit degradatie" },
          { en: "Lysosomal membrane fusion", es: "Fusión de membrana lisosomal", de: "Lysosomale Membranfusion", nl: "Lysosomale membraan fusie" },
          { en: "Proteasome assembly", es: "Ensamble de proteasoma", de: "Proteasom-Assemblierung", nl: "Proteasoom assemblage" }
        ],
        correct: 0,
        explanation: {
          en: "Selective autophagy uses adaptor proteins like p62/SQSTM1 that contain both ubiquitin-binding domains and LC3-interacting regions, targeting ubiquitinated misfolded proteins or protein aggregates for autophagic degradation.",
          es: "La autofagia selectiva usa proteínas adaptadoras como p62/SQSTM1 que contienen dominios de unión a ubiquitina y regiones de interacción con LC3, dirigiendo proteínas mal plegadas ubiquitinadas o agregados proteicos para degradación autofágica.",
          de: "Selektive Autophagie nutzt Adapter-Proteine wie p62/SQSTM1, die sowohl Ubiquitin-bindende Domänen als auch LC3-interagierende Regionen enthalten und ubiquitinierte fehlgefaltete Proteine oder Proteinaggregate für autophagischen Abbau anvisieren.",
          nl: "Selectieve autofagie gebruikt adaptor eiwitten zoals p62/SQSTM1 die zowel ubiquitine-bindende domeinen als LC3-interacterende regio's bevatten, geubiquitineerde misgeplooide eiwitten of eiwit aggregaten targettend voor autofagische degradatie."
        }
      },
      {
        question: {
          en: "Which mechanism describes mRNA cap methylation through RNMT enzyme activity for translation regulation?",
          es: "¿Qué mecanismo describe la metilación de caperuza de ARNm a través de la actividad de la enzima RNMT para regulación de traducción?",
          de: "Welcher Mechanismus beschreibt mRNA-Cap-Methylierung durch RNMT-Enzym-Aktivität für Translationsregulation?",
          nl: "Welk mechanisme beschrijft mRNA cap methylatie door RNMT enzym activiteit voor translatie regulatie?"
        },
        options: [
          { en: "N7-methylguanosine cap structure formation enhancing mRNA stability and ribosome binding", es: "Formación de estructura de caperuza N7-metilguanosina mejorando estabilidad de ARNm y unión a ribosoma", de: "N7-Methylguanosin-Cap-Struktur-Bildung verstärkt mRNA-Stabilität und Ribosom-Bindung", nl: "N7-methylguanosine cap structuur formatie verbeterend mRNA stabiliteit en ribosoom binding" },
          { en: "RNA degradation", es: "Degradación de ARN", de: "RNA-Abbau", nl: "RNA afbraak" },
          { en: "DNA methylation", es: "Metilación del ADN", de: "DNA-Methylierung", nl: "DNA methylatie" },
          { en: "Protein synthesis inhibition", es: "Inhibición de síntesis de proteínas", de: "Proteinsynthese-Hemmung", nl: "Eiwitsynthese remming" }
        ],
        correct: 0,
        explanation: {
          en: "mRNA cap methylation by RNA (guanine-N7)-methyltransferase (RNMT) creates the N7-methylguanosine cap structure that protects mRNA from degradation and is recognized by cap-binding proteins for efficient translation initiation.",
          es: "La metilación de caperuza de ARNm por ARN (guanina-N7)-metiltransferasa (RNMT) crea la estructura de caperuza N7-metilguanosina que protege el ARNm de degradación y es reconocida por proteínas de unión a caperuza para iniciación eficiente de traducción.",
          de: "mRNA-Cap-Methylierung durch RNA (Guanin-N7)-Methyltransferase (RNMT) schafft die N7-Methylguanosin-Cap-Struktur, die mRNA vor Abbau schützt und von Cap-bindenden Proteinen für effiziente Translationsinitiierung erkannt wird.",
          nl: "mRNA cap methylatie door RNA (guanine-N7)-methyltransferase (RNMT) creëert de N7-methylguanosine cap structuur die mRNA beschermt tegen degradatie en wordt herkend door cap-bindende eiwitten voor efficiënte translatie initiatie."
        }
      },
      {
        question: {
          en: "What is the molecular basis of phase separation in nuclear condensates like transcriptional hubs?",
          es: "¿Cuál es la base molecular de la separación de fases en condensados nucleares como centros transcripcionales?",
          de: "Was ist die molekulare Basis der Phasentrennung in nukleären Kondensaten wie transkriptionellen Hubs?",
          nl: "Wat is de moleculaire basis van fase scheiding in nucleaire condensaten zoals transcriptionele hubs?"
        },
        options: [
          { en: "Intrinsically disordered regions in transcription factors driving liquid-liquid phase separation", es: "Regiones intrínsecamente desordenadas en factores de transcripción impulsando separación de fases líquido-líquido", de: "Intrinsisch ungeordnete Regionen in Transkriptionsfaktoren treiben Flüssig-Flüssig-Phasentrennung an", nl: "Intrinsiek wanordelijke regio's in transcriptiefactoren aandrijvend vloeistof-vloeistof fase scheiding" },
          { en: "Membrane formation", es: "Formación de membranas", de: "Membranbildung", nl: "Membraan formatie" },
          { en: "Protein crystallization", es: "Cristalización de proteínas", de: "Proteinkristallisation", nl: "Eiwit kristallisatie" },
          { en: "DNA compaction", es: "Compactación del ADN", de: "DNA-Kompaktierung", nl: "DNA compactie" }
        ],
        correct: 0,
        explanation: {
          en: "Nuclear condensates form through liquid-liquid phase separation driven by weak multivalent interactions between proteins containing intrinsically disordered regions (IDRs), creating concentrated environments that enhance transcriptional activity and RNA processing.",
          es: "Los condensados nucleares se forman a través de separación de fases líquido-líquido impulsada por interacciones multivalentes débiles entre proteínas conteniendo regiones intrínsecamente desordenadas (IDRs), creando ambientes concentrados que mejoran actividad transcripcional y procesamiento de ARN.",
          de: "Nukleäre Kondensate bilden sich durch Flüssig-Flüssig-Phasentrennung, angetrieben durch schwache multivalente Interaktionen zwischen Proteinen mit intrinsisch ungeordneten Regionen (IDRs), wodurch konzentrierte Umgebungen entstehen, die transkriptionelle Aktivität und RNA-Verarbeitung verstärken.",
          nl: "Nucleaire condensaten vormen zich door vloeistof-vloeistof fase scheiding aangedreven door zwakke multivalente interacties tussen eiwitten bevattend intrinsiek wanordelijke regio's (IDR's), geconcentreerde omgevingen creërend die transcriptionele activiteit en RNA verwerking verbeteren."
        }
      },
      {
        question: {
          en: "Which DNA repair mechanism involves homology-directed repair through RAD51 nucleofilament formation?",
          es: "¿Qué mecanismo de reparación del ADN involucra reparación dirigida por homología a través de formación de nucleofilamento RAD51?",
          de: "Welcher DNA-Reparaturmechanismus umfasst homologie-gerichtete Reparatur durch RAD51-Nukleofilament-Bildung?",
          nl: "Welk DNA reparatie mechanisme betreft homologie-geleide reparatie door RAD51 nucleofilament formatie?"
        },
        options: [
          { en: "Homologous recombination with RAD51-ssDNA filaments searching for homologous sequences", es: "Recombinación homóloga con filamentos RAD51-ADNss buscando secuencias homólogas", de: "Homologe Rekombination mit RAD51-ssDNA-Filamenten sucht nach homologen Sequenzen", nl: "Homologe recombinatie met RAD51-ssDNA filamenten zoekend naar homologe sequenties" },
          { en: "Base excision repair", es: "Reparación por escisión de bases", de: "Basenexzisionsreparatur", nl: "Base excisie reparatie" },
          { en: "Mismatch repair", es: "Reparación de apareamiento erróneo", de: "Mismatch-Reparatur", nl: "Mismatch reparatie" },
          { en: "Nucleotide excision repair", es: "Reparación por escisión de nucleótidos", de: "Nukleotidexzisionsreparatur", nl: "Nucleotide excisie reparatie" }
        ],
        correct: 0,
        explanation: {
          en: "Homologous recombination repair involves RAD51 coating single-strand DNA to form nucleofilaments that search for homologous DNA sequences, enabling accurate repair of double-strand breaks using sister chromatids or homologous chromosomes as templates.",
          es: "La reparación por recombinación homóloga involucra RAD51 recubriendo ADN de cadena simple para formar nucleofilamentos que buscan secuencias de ADN homólogas, permitiendo reparación precisa de roturas de doble cadena usando cromátidas hermanas o cromosomas homólogos como plantillas.",
          de: "Homologe Rekombinations-Reparatur umfasst RAD51-Beschichtung von Einzelstrang-DNA zur Bildung von Nukleofilamenten, die nach homologen DNA-Sequenzen suchen und präzise Reparatur von Doppelstrangbrüchen unter Verwendung von Schwesterchromatiden oder homologen Chromosomen als Vorlagen ermöglichen.",
          nl: "Homologe recombinatie reparatie behelst RAD51 coating enkelstrengs DNA om nucleofilamenten te vormen die zoeken naar homologe DNA sequenties, nauwkeurige reparatie van dubbelstrengs breuken mogelijk makend gebruikmakend van zuster chromatiden of homologe chromosomen als sjablonen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of miRNA biogenesis from pri-miRNA to mature miRNA?",
          es: "¿Cuál es el mecanismo molecular de la biogénesis de microARN desde pri-microARN hasta microARN maduro?",
          de: "Was ist der molekulare Mechanismus der miRNA-Biogenese von pri-miRNA zu reifer miRNA?",
          nl: "Wat is het moleculaire mechanisme van miRNA biogenese van pri-miRNA naar mature miRNA?"
        },
        options: [
          { en: "Drosha-DGCR8 nuclear processing followed by Dicer cytoplasmic cleavage to generate guide strands", es: "Procesamiento nuclear Drosha-DGCR8 seguido por escisión citoplásmica de Dicer para generar cadenas guía", de: "Drosha-DGCR8 nukleäre Verarbeitung gefolgt von Dicer-zytoplasmatischer Spaltung zur Erzeugung von Leitsträngen", nl: "Drosha-DGCR8 nucleaire verwerking gevolgd door Dicer cytoplasmatische klieven om guide strengen te genereren" },
          { en: "Direct transcription of mature miRNA", es: "Transcripción directa de microARN maduro", de: "Direkte Transkription von reifer miRNA", nl: "Directe transcriptie van mature miRNA" },
          { en: "mRNA processing pathway", es: "Vía de procesamiento de ARNm", de: "mRNA-Verarbeitungsweg", nl: "mRNA verwerkingsweg" },
          { en: "tRNA maturation process", es: "Proceso de maduración de ARNt", de: "tRNA-Reifungsprozess", nl: "tRNA rijpingsproces" }
        ],
        correct: 0,
        explanation: {
          en: "miRNA biogenesis involves Drosha-DGCR8 microprocessor complex cleaving pri-miRNA in the nucleus to produce pre-miRNA, which is exported to the cytoplasm where Dicer cleaves it into mature miRNA duplex, with one strand loaded into RISC complex.",
          es: "La biogénesis de microARN involucra el complejo microprocesador Drosha-DGCR8 escindiendo pri-microARN en el núcleo para producir pre-microARN, que se exporta al citoplasma donde Dicer lo escinde en dúplex de microARN maduro, con una cadena cargada en el complejo RISC.",
          de: "miRNA-Biogenese umfasst Drosha-DGCR8-Mikroprocessor-Komplex, der pri-miRNA im Kern spaltet, um prä-miRNA zu produzieren, die ins Zytoplasma exportiert wird, wo Dicer sie in reife miRNA-Duplex spaltet, wobei ein Strang in RISC-Komplex geladen wird.",
          nl: "miRNA biogenese behelst Drosha-DGCR8 microprocessor complex klievend pri-miRNA in de nucleus om pre-miRNA te produceren, die wordt geëxporteerd naar het cytoplasma waar Dicer het klieft tot mature miRNA duplex, met één streng geladen in RISC complex."
        }
      },
      {
        question: {
          en: "Which epigenetic mechanism involves chromatin boundary elements preventing heterochromatin spreading?",
          es: "¿Qué mecanismo epigenético involucra elementos de frontera de cromatina previniendo la expansión de heterocromatina?",
          de: "Welcher epigenetische Mechanismus umfasst Chromatin-Grenzelemente, die Heterochromatin-Ausbreitung verhindern?",
          nl: "Welk epigenetisch mechanisme betreft chromatine grens elementen die heterochromatine verspreiding voorkomen?"
        },
        options: [
          { en: "Insulator proteins like CTCF blocking the spread of repressive histone modifications", es: "Proteínas aisladoras como CTCF bloqueando la expansión de modificaciones represivas de histonas", de: "Isolator-Proteine wie CTCF blockieren die Ausbreitung repressiver Histon-Modifikationen", nl: "Isolator eiwitten zoals CTCF blokkerend de verspreiding van repressieve histon modificaties" },
          { en: "DNA methylation gradients", es: "Gradientes de metilación del ADN", de: "DNA-Methylierungsgradienten", nl: "DNA methylatie gradiënten" },
          { en: "Histone acetylation waves", es: "Ondas de acetilación de histonas", de: "Histon-Acetylierungswellen", nl: "Histon acetylatie golven" },
          { en: "Chromatin compaction", es: "Compactación de cromatina", de: "Chromatin-Kompaktierung", nl: "Chromatine compactie" }
        ],
        correct: 0,
        explanation: {
          en: "Chromatin boundary elements contain insulator proteins like CTCF that block the spreading of heterochromatin and repressive histone marks, creating distinct chromatin domains and protecting active genes from silencing by adjacent heterochromatic regions.",
          es: "Los elementos de frontera de cromatina contienen proteínas aisladoras como CTCF que bloquean la expansión de heterocromatina y marcas represivas de histonas, creando dominios de cromatina distintos y protegiendo genes activos del silenciamiento por regiones heterocromáticas adyacentes.",
          de: "Chromatin-Grenzelemente enthalten Isolator-Proteine wie CTCF, die die Ausbreitung von Heterochromatin und repressiven Histon-Markierungen blockieren, unterschiedliche Chromatin-Domänen schaffen und aktive Gene vor Stilllegung durch benachbarte heterochromatische Regionen schützen.",
          nl: "Chromatine grens elementen bevatten isolator eiwitten zoals CTCF die de verspreiding van heterochromatine en repressieve histon markeringen blokkeren, verschillende chromatine domeinen creërend en actieve genen beschermend tegen stillegging door aangrenzende heterochromatische regio's."
        }
      },
      {
        question: {
          en: "What is the molecular basis of ribosome rescue through tmRNA trans-translation mechanism?",
          es: "¿Cuál es la base molecular del rescate de ribosomas a través del mecanismo de trans-traducción de ARNtm?",
          de: "Was ist die molekulare Basis der Ribosom-Rettung durch tmRNA-Trans-Translations-Mechanismus?",
          nl: "Wat is de moleculaire basis van ribosoom redding door tmRNA trans-translatie mechanisme?"
        },
        options: [
          { en: "tmRNA acting as both tRNA and mRNA to rescue stalled ribosomes and tag incomplete proteins", es: "ARNtm actuando como ARNt y ARNm para rescatar ribosomas estancados y marcar proteínas incompletas", de: "tmRNA fungiert als sowohl tRNA als auch mRNA, um blockierte Ribosomen zu retten und unvollständige Proteine zu markieren", nl: "tmRNA handelend als zowel tRNA als mRNA om vastgelopen ribosomen te redden en onvolledige eiwitten te taggen" },
          { en: "Ribosome recycling only", es: "Solo reciclaje de ribosomas", de: "Nur Ribosom-Recycling", nl: "Alleen ribosoom recycling" },
          { en: "mRNA degradation", es: "Degradación de ARNm", de: "mRNA-Abbau", nl: "mRNA degradatie" },
          { en: "Protein folding assistance", es: "Asistencia en plegamiento de proteínas", de: "Proteinfaltungsassistenz", nl: "Eiwit vouwing assistentie" }
        ],
        correct: 0,
        explanation: {
          en: "tmRNA (transfer-messenger RNA) has dual function as both tRNA and mRNA, entering stalled ribosomes to resume translation with its own coding sequence that adds a degradation tag to incomplete proteins, allowing both ribosome rescue and quality control.",
          es: "El ARNtm (ARN transferencia-mensajero) tiene función dual como ARNt y ARNm, entrando en ribosomas estancados para reanudar traducción con su propia secuencia codificante que añade una etiqueta de degradación a proteínas incompletas, permitiendo tanto rescate de ribosomas como control de calidad.",
          de: "tmRNA (transfer-messenger RNA) hat eine doppelte Funktion als sowohl tRNA als auch mRNA, tritt in blockierte Ribosomen ein, um Translation mit seiner eigenen kodierenden Sequenz fortzusetzen, die ein Abbau-Tag zu unvollständigen Proteinen hinzufügt und sowohl Ribosom-Rettung als auch Qualitätskontrolle ermöglicht.",
          nl: "tmRNA (transfer-messenger RNA) heeft dubbele functie als zowel tRNA als mRNA, vastzittende ribosomen binnengaand om translatie te hervatten met zijn eigen coderende sequentie die een degradatie tag toevoegt aan onvolledige eiwitten, zowel ribosoom redding als kwaliteitscontrole mogelijk makend."
        }
      },
      {
        question: {
          en: "Which mechanism describes DNA damage checkpoint signaling through ATM kinase activation?",
          es: "¿Qué mecanismo describe la señalización de punto de control de daño al ADN a través de la activación de cinasa ATM?",
          de: "Welcher Mechanismus beschreibt DNA-Schadens-Checkpoint-Signaling durch ATM-Kinase-Aktivierung?",
          nl: "Welk mechanisme beschrijft DNA schade checkpoint signalering door ATM kinase activatie?"
        },
        options: [
          { en: "ATM autophosphorylation upon DNA double-strand break recognition triggering p53-mediated cell cycle arrest", es: "Autofosforilación de ATM al reconocer roturas de doble cadena de ADN desencadenando arresto del ciclo celular mediado por p53", de: "ATM-Autophosphorylierung bei DNA-Doppelstrangbruch-Erkennung löst p53-vermittelten Zellzyklus-Arrest aus", nl: "ATM autofosforylatie bij DNA dubbelstrengs breuk herkenning triggerend p53-gemedieerde celcyclus arrest" },
          { en: "Random cell death", es: "Muerte celular aleatoria", de: "Zufälliger Zelltod", nl: "Willekeurige celdood" },
          { en: "DNA replication restart", es: "Reinicio de replicación del ADN", de: "DNA-Replikations-Neustart", nl: "DNA replicatie herstart" },
          { en: "Protein synthesis increase", es: "Aumento de síntesis de proteínas", de: "Proteinsynthese-Steigerung", nl: "Eiwitsynthese toename" }
        ],
        correct: 0,
        explanation: {
          en: "ATM (Ataxia Telangiectasia Mutated) kinase undergoes autophosphorylation when recruited to DNA double-strand breaks, then phosphorylates downstream targets including p53, CHK2, and BRCA1 to activate DNA damage checkpoints and coordinate repair responses.",
          es: "La cinasa ATM (Mutada en Ataxia Telangiectasia) experimenta autofosforilación cuando es reclutada a roturas de doble cadena de ADN, luego fosforila objetivos río abajo incluyendo p53, CHK2 y BRCA1 para activar puntos de control de daño al ADN y coordinar respuestas de reparación.",
          de: "ATM (Ataxia Telangiectasia Mutated) Kinase durchläuft Autophosphorylierung bei Rekrutierung zu DNA-Doppelstrangbrüchen, phosphoryliert dann nachgeschaltete Ziele einschließlich p53, CHK2 und BRCA1, um DNA-Schadens-Checkpoints zu aktivieren und Reparaturantworten zu koordinieren.",
          nl: "ATM (Ataxia Telangiectasia Mutated) kinase ondergaat autofosforylatie wanneer gerekruteerd naar DNA dubbelstrengs breuken, fosforylerend dan stroomafwaartse doelen inclusief p53, CHK2 en BRCA1 om DNA schade checkpoints te activeren en reparatie responsen te coördineren."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of retrotransposon mobility through reverse transcription?",
          es: "¿Cuál es el mecanismo molecular de la movilidad de retrotransposones a través de transcripción reversa?",
          de: "Was ist der molekulare Mechanismus der Retrotransposon-Mobilität durch Reverse Transkription?",
          nl: "Wat is het moleculaire mechanisme van retrotransposon mobiliteit door reverse transcriptie?"
        },
        options: [
          { en: "LINE-1 ORF2 reverse transcriptase copying RNA transcripts back into genomic DNA at target sites", es: "Transcriptasa reversa ORF2 de LINE-1 copiando transcritos de ARN de vuelta al ADN genómico en sitios objetivo", de: "LINE-1 ORF2-Reverse-Transkriptase kopiert RNA-Transkripte zurück in genomische DNA an Zielstellen", nl: "LINE-1 ORF2 reverse transcriptase kopiërend RNA transcripten terug naar genomisch DNA op doelplaatsen" },
          { en: "DNA replication errors", es: "Errores de replicación del ADN", de: "DNA-Replikationsfehler", nl: "DNA replicatie fouten" },
          { en: "Homologous recombination", es: "Recombinación homóloga", de: "Homologe Rekombination", nl: "Homologe recombinatie" },
          { en: "Transposase-mediated excision", es: "Escisión mediada por transposasa", de: "Transposase-vermittelte Exzision", nl: "Transposase-gemedieerde excisie" }
        ],
        correct: 0,
        explanation: {
          en: "Retrotransposons like LINE-1 elements mobilize through a 'copy-and-paste' mechanism where their ORF2-encoded reverse transcriptase copies their RNA transcripts back into DNA, inserting new copies into the genome through target-primed reverse transcription (TPRT).",
          es: "Los retrotransposones como elementos LINE-1 se movilizan a través de un mecanismo de 'copiar-y-pegar' donde su transcriptasa reversa codificada por ORF2 copia sus transcritos de ARN de vuelta a ADN, insertando nuevas copias en el genoma a través de transcripción reversa iniciada por objetivo (TPRT).",
          de: "Retrotransposons wie LINE-1-Elemente mobilisieren durch einen 'Kopieren-und-Einfügen'-Mechanismus, bei dem ihre ORF2-kodierte Reverse Transkriptase ihre RNA-Transkripte zurück in DNA kopiert und neue Kopien durch zielgerichtete Reverse Transkription (TPRT) ins Genom einfügt.",
          nl: "Retrotransposons zoals LINE-1 elementen mobiliseren door een 'kopiëren-en-plakken' mechanisme waarbij hun ORF2-gecodeerde reverse transcriptase hun RNA transcripten terug kopieert naar DNA, nieuwe kopieën invoegend in het genoom door target-primed reverse transcriptie (TPRT)."
        }
      },
      {
        question: {
          en: "Which post-transcriptional regulation involves riboswitches responding to metabolite binding?",
          es: "¿Qué regulación post-transcripcional involucra ribointerruptores respondiendo a la unión de metabolitos?",
          de: "Welche posttranskriptionelle Regulation umfasst Riboswitches, die auf Metabolit-Bindung reagieren?",
          nl: "Welke post-transcriptionele regulatie betreft riboswitches reageren op metaboliet binding?"
        },
        options: [
          { en: "Conformational changes in 5' UTR structures modulating translation initiation upon ligand binding", es: "Cambios conformacionales en estructuras 5' UTR modulando iniciación de traducción al unirse ligando", de: "Konformationsänderungen in 5' UTR-Strukturen modulieren Translationsinitiierung bei Ligandenbindung", nl: "Conformationele veranderingen in 5' UTR structuren modulerend translatie initiatie bij ligand binding" },
          { en: "Protein-based regulation only", es: "Solo regulación basada en proteínas", de: "Nur proteinbasierte Regulation", nl: "Alleen eiwit-gebaseerde regulatie" },
          { en: "DNA methylation changes", es: "Cambios de metilación del ADN", de: "DNA-Methylierungsänderungen", nl: "DNA methylatie veranderingen" },
          { en: "Chromatin modifications", es: "Modificaciones de cromatina", de: "Chromatin-Modifikationen", nl: "Chromatine modificaties" }
        ],
        correct: 0,
        explanation: {
          en: "Riboswitches are structured RNA elements in 5' UTRs that undergo conformational changes upon direct binding of specific metabolites, regulating gene expression through effects on translation initiation, mRNA stability, or transcription termination without requiring protein factors.",
          es: "Los ribointerruptores son elementos de ARN estructurados en 5' UTRs que experimentan cambios conformacionales al unirse directamente metabolitos específicos, regulando expresión génica a través de efectos en iniciación de traducción, estabilidad de ARNm o terminación de transcripción sin requerir factores proteicos.",
          de: "Riboswitches sind strukturierte RNA-Elemente in 5' UTRs, die bei direkter Bindung spezifischer Metaboliten Konformationsänderungen durchlaufen und Genexpression durch Effekte auf Translationsinitiierung, mRNA-Stabilität oder Transkriptionstermination regulieren, ohne Proteinfaktoren zu benötigen.",
          nl: "Riboswitches zijn gestructureerde RNA elementen in 5' UTR's die conformationele veranderingen ondergaan bij directe binding van specifieke metabolieten, genexpressie regulerend door effecten op translatie initiatie, mRNA stabiliteit of transcriptie terminatie zonder eiwit factoren nodig te hebben."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of DNA replication fork stalling and restart through RecA-mediated recombinational repair?",
          es: "¿Cuál es el mecanismo molecular del estancamiento y reinicio de la horquilla de replicación del ADN a través de reparación recombinacional mediada por RecA?",
          de: "Was ist der molekulare Mechanismus des DNA-Replikations-Fork-Stillstands und -Neustarts durch RecA-vermittelte rekombinationelle Reparatur?",
          nl: "Wat is het moleculaire mechanisme van DNA replicatie fork stalling en herstart door RecA-gemedieerde recombinationele reparatie?"
        },
        options: [
          { en: "RecA nucleofilament formation on stalled fork enabling homologous recombination to restore replication", es: "Formación de nucleofilamento RecA en horquilla estancada permitiendo recombinación homóloga para restaurar replicación", de: "RecA-Nukleofilament-Bildung an blockierter Fork ermöglicht homologe Rekombination zur Wiederherstellung der Replikation", nl: "RecA nucleofilament formatie op vastgelopen fork mogelijk makend homologe recombinatie om replicatie te herstellen" },
          { en: "Simple DNA polymerase restart", es: "Reinicio simple de ADN polimerasa", de: "Einfacher DNA-Polymerase-Neustart", nl: "Eenvoudige DNA polymerase herstart" },
          { en: "Histone removal only", es: "Solo remoción de histonas", de: "Nur Histon-Entfernung", nl: "Alleen histon verwijdering" },
          { en: "Transcription coupling", es: "Acoplamiento de transcripción", de: "Transkriptionskopplung", nl: "Transcriptie koppeling" }
        ],
        correct: 0,
        explanation: {
          en: "When replication forks encounter obstacles and stall, RecA protein forms nucleofilaments on exposed single-strand DNA, promoting homologous recombination with sister chromosomes to bypass lesions and restart replication through recombination-mediated fork restart mechanisms.",
          es: "Cuando las horquillas de replicación encuentran obstáculos y se estancan, la proteína RecA forma nucleofilamentos en ADN de cadena simple expuesto, promoviendo recombinación homóloga con cromosomas hermanos para eludir lesiones y reiniciar replicación a través de mecanismos de reinicio de horquilla mediado por recombinación.",
          de: "Wenn Replikations-Forks auf Hindernisse treffen und blockieren, bildet RecA-Protein Nukleofilamente auf exponierter Einzelstrang-DNA, fördert homologe Rekombination mit Schwestrechromosomen, um Läsionen zu umgehen und Replikation durch rekombinationsvermittelte Fork-Neustart-Mechanismen zu starten.",
          nl: "Wanneer replicatie forks obstakels tegenkomen en vastlopen, vormt RecA eiwit nucleofilamenten op blootgesteld enkelstrengs DNA, homologe recombinatie met zuster chromosomen promovend om lesies te omzeilen en replicatie te herstarten door recombinatie-gemedieerde fork herstart mechanismen."
        }
      },
      {
        question: {
          en: "Which mechanism describes co-transcriptional recruitment of RNA processing machinery to RNA polymerase II?",
          es: "¿Qué mecanismo describe el reclutamiento co-transcripcional de maquinaria de procesamiento de ARN a la ARN polimerasa II?",
          de: "Welcher Mechanismus beschreibt ko-transkriptionelle Rekrutierung von RNA-Verarbeitungsmaschinen zur RNA-Polymerase II?",
          nl: "Welk mechanisme beschrijft co-transcriptionele rekrutering van RNA verwerkingsmachinerie naar RNA polymerase II?"
        },
        options: [
          { en: "CTD phosphorylation-dependent recruitment of capping, splicing, and polyadenylation complexes", es: "Reclutamiento dependiente de fosforilación de CTD de complejos de encapsulado, empalme y poliadenilación", de: "CTD-phosphorylierungsabhängige Rekrutierung von Capping-, Splicing- und Polyadenylierungskomplexen", nl: "CTD fosforylatie-afhankelijke rekrutering van capping, splicing en polyadenylatie complexen" },
          { en: "Random protein binding", es: "Unión aleatoria de proteínas", de: "Zufällige Proteinbindung", nl: "Willekeurige eiwit binding" },
          { en: "DNA-dependent recruitment", es: "Reclutamiento dependiente de ADN", de: "DNA-abhängige Rekrutierung", nl: "DNA-afhankelijke rekrutering" },
          { en: "Chromatin-mediated targeting", es: "Direccionamiento mediado por cromatina", de: "Chromatin-vermitteltes Targeting", nl: "Chromatine-gemedieerde targeting" }
        ],
        correct: 0,
        explanation: {
          en: "RNA polymerase II C-terminal domain (CTD) undergoes dynamic phosphorylation that recruits specific RNA processing factors: Ser5 phosphorylation recruits capping enzymes, Ser2 phosphorylation recruits splicing factors and polyadenylation machinery, ensuring co-transcriptional mRNA processing.",
          es: "El dominio C-terminal (CTD) de ARN polimerasa II experimenta fosforilación dinámica que recluta factores específicos de procesamiento de ARN: fosforilación Ser5 recluta enzimas de encapsulado, fosforilación Ser2 recluta factores de empalme y maquinaria de poliadenilación, asegurando procesamiento co-transcripcional de ARNm.",
          de: "RNA-Polymerase II C-terminale Domäne (CTD) durchläuft dynamische Phosphorylierung, die spezifische RNA-Verarbeitungsfaktoren rekrutiert: Ser5-Phosphorylierung rekrutiert Capping-Enzyme, Ser2-Phosphorylierung rekrutiert Splicing-Faktoren und Polyadenylierungsmaschinerie, gewährleistet ko-transkriptionelle mRNA-Verarbeitung.",
          nl: "RNA polymerase II C-terminale domein (CTD) ondergaat dynamische fosforylatie die specifieke RNA verwerkingsfactoren rekruteert: Ser5 fosforylatie rekruteert capping enzymen, Ser2 fosforylatie rekruteert splicing factoren en polyadenylatie machinerie, co-transcriptionele mRNA verwerking verzekerd."
        }
      },
      {
        question: {
          en: "What is the molecular basis of RNA polymerase pausing and anti-termination through elongation factors?",
          es: "¿Cuál es la base molecular de la pausa de ARN polimerasa y anti-terminación a través de factores de elongación?",
          de: "Was ist die molekulare Basis der RNA-Polymerase-Pausierung und Anti-Termination durch Elongationsfaktoren?",
          nl: "Wat is de moleculaire basis van RNA polymerase pauzeren en anti-terminatie door elongatiefactoren?"
        },
        options: [
          { en: "P-TEFb kinase phosphorylating NELF and DSIF to release paused polymerase for productive elongation", es: "Cinasa P-TEFb fosforilando NELF y DSIF para liberar polimerasa pausada para elongación productiva", de: "P-TEFb-Kinase phosphoryliert NELF und DSIF zur Freisetzung pausierter Polymerase für produktive Elongation", nl: "P-TEFb kinase fosforylerend NELF en DSIF om gepauzeerde polymerase vrij te geven voor productieve elongatie" },
          { en: "Random transcription restart", es: "Reinicio aleatorio de transcripción", de: "Zufälliger Transkriptions-Neustart", nl: "Willekeurige transcriptie herstart" },
          { en: "DNA repair mechanisms", es: "Mecanismos de reparación del ADN", de: "DNA-Reparaturmechanismen", nl: "DNA reparatie mechanismen" },
          { en: "Chromatin remodeling only", es: "Solo remodelación de cromatina", de: "Nur Chromatin-Remodellierung", nl: "Alleen chromatine hermodellering" }
        ],
        correct: 0,
        explanation: {
          en: "RNA polymerase II pauses at promoter-proximal sites due to NELF and DSIF factors. P-TEFb (positive transcription elongation factor b) kinase phosphorylates these pause factors and RNA pol II CTD to release pausing and promote efficient transcriptional elongation.",
          es: "La ARN polimerasa II se pausa en sitios proximales al promotor debido a factores NELF y DSIF. La cinasa P-TEFb (factor b de elongación transcripcional positiva) fosforila estos factores de pausa y el CTD de ARN pol II para liberar la pausa y promover elongación transcripcional eficiente.",
          de: "RNA-Polymerase II pausiert an Promotor-proximalen Stellen aufgrund von NELF- und DSIF-Faktoren. P-TEFb (positive transcription elongation factor b) Kinase phosphoryliert diese Pause-Faktoren und RNA-pol II CTD, um Pausierung aufzuheben und effiziente transkriptionelle Elongation zu fördern.",
          nl: "RNA polymerase II pauzeert op promotor-proximale plaatsen door NELF en DSIF factoren. P-TEFb (positive transcription elongation factor b) kinase fosforylereerd deze pauze factoren en RNA pol II CTD om pauzeren op te heffen en efficiënte transcriptionele elongatie te bevorderen."
        }
      },
      {
        question: {
          en: "Which DNA methylation mechanism involves maintenance methylation through DNMT1 during replication?",
          es: "¿Qué mecanismo de metilación del ADN involucra metilación de mantenimiento a través de DNMT1 durante replicación?",
          de: "Welcher DNA-Methylierungsmechanismus umfasst Erhaltungsmethylierung durch DNMT1 während der Replikation?",
          nl: "Welk DNA methylatie mechanisme betreft onderhouds methylatie door DNMT1 tijdens replicatie?"
        },
        options: [
          { en: "PCNA-DNMT1-UHRF1 complex recognizing hemimethylated CpG sites to restore full methylation", es: "Complejo PCNA-DNMT1-UHRF1 reconociendo sitios CpG hemimetilados para restaurar metilación completa", de: "PCNA-DNMT1-UHRF1-Komplex erkennt hemimethylierte CpG-Stellen zur Wiederherstellung vollständiger Methylierung", nl: "PCNA-DNMT1-UHRF1 complex herkenning hemimethyleerde CpG sites om volledige methylatie te herstellen" },
          { en: "Random methylation", es: "Metilación aleatoria", de: "Zufällige Methylierung", nl: "Willekeurige methylatie" },
          { en: "Demethylation pathway", es: "Vía de desmetilación", de: "Demethylierungsweg", nl: "Demethylatie pathway" },
          { en: "Histone modification", es: "Modificación de histonas", de: "Histon-Modifikation", nl: "Histon modificatie" }
        ],
        correct: 0,
        explanation: {
          en: "Maintenance methylation involves DNMT1 (DNA methyltransferase 1) being recruited by UHRF1 (Ubiquitin PHD and RING Finger domains 1) to hemimethylated CpG sites during replication, where PCNA facilitates the process to restore symmetric methylation patterns in daughter DNA strands.",
          es: "La metilación de mantenimiento involucra DNMT1 (ADN metiltransferasa 1) siendo reclutada por UHRF1 (Dominios Ubiquitina PHD y RING Finger 1) a sitios CpG hemimetilados durante replicación, donde PCNA facilita el proceso para restaurar patrones de metilación simétrica en cadenas de ADN hijas.",
          de: "Erhaltungsmethylierung umfasst DNMT1 (DNA-Methyltransferase 1), die durch UHRF1 (Ubiquitin PHD and RING Finger domains 1) zu hemimethylierten CpG-Stellen während der Replikation rekrutiert wird, wo PCNA den Prozess erleichtert, um symmetrische Methylierungsmuster in Tochter-DNA-Strängen wiederherzustellen.",
          nl: "Onderhouds methylatie behelst DNMT1 (DNA methyltransferase 1) gerekruteerd door UHRF1 (Ubiquitin PHD and RING Finger domains 1) naar hemimethyleerde CpG sites tijdens replicatie, waar PCNA het proces faciliteert om symmetrische methylatie patronen in dochter DNA strengen te herstellen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of peroxisome biogenesis through PEX protein import machinery?",
          es: "¿Cuál es el mecanismo molecular de la biogénesis de peroxisomas a través de maquinaria de importación de proteínas PEX?",
          de: "Was ist der molekulare Mechanismus der Peroxisom-Biogenese durch PEX-Protein-Import-Maschinerie?",
          nl: "Wat is het moleculaire mechanisme van peroxisoom biogenese door PEX eiwit import machinerie?"
        },
        options: [
          { en: "PTS1/PTS2 targeting signals directing proteins to peroxisomes via PEX5/PEX7 receptors and PEX translocons", es: "Señales de direccionamiento PTS1/PTS2 dirigiendo proteínas a peroxisomas vía receptores PEX5/PEX7 y translocones PEX", de: "PTS1/PTS2-Targeting-Signale dirigieren Proteine zu Peroxisomen über PEX5/PEX7-Rezeptoren und PEX-Translocons", nl: "PTS1/PTS2 targeting signalen dirigerend eiwitten naar peroxisomen via PEX5/PEX7 receptoren en PEX translocons" },
          { en: "ER-derived vesicle fusion", es: "Fusión de vesículas derivadas del RE", de: "ER-abgeleitete Vesikelfusion", nl: "ER-afgeleide vesikel fusie" },
          { en: "Mitochondrial division", es: "División mitocondrial", de: "Mitochondriale Teilung", nl: "Mitochondriale deling" },
          { en: "Golgi trafficking", es: "Tráfico del Golgi", de: "Golgi-Trafficking", nl: "Golgi trafficking" }
        ],
        correct: 0,
        explanation: {
          en: "Peroxisome biogenesis involves targeting peroxisomal proteins containing PTS1 (SKL) or PTS2 signal sequences to the organelle via cytosolic receptors PEX5 and PEX7, respectively, which dock at PEX translocon complexes in the peroxisomal membrane for protein import.",
          es: "La biogénesis de peroxisomas involucra dirigir proteínas peroxisomales conteniendo secuencias señal PTS1 (SKL) o PTS2 al organelo vía receptores citosólicos PEX5 y PEX7, respectivamente, que se acoplan en complejos translocón PEX en la membrana peroxisomal para importación de proteínas.",
          de: "Peroxisom-Biogenese umfasst die Ausrichtung peroxisomaler Proteine mit PTS1 (SKL) oder PTS2-Signalsequenzen auf das Organell über zytosöliche Rezeptoren PEX5 und PEX7, die an PEX-Translocon-Komplexen in der peroxisomalen Membran für Proteinimport andocken.",
          nl: "Peroxisoom biogenese behelst targeting van peroxisomale eiwitten bevattend PTS1 (SKL) of PTS2 signaal sequenties naar het organel via cytosolic receptoren PEX5 en PEX7, respectievelijk, die dokken aan PEX translocon complexen in het peroxisomale membraan voor eiwit import."
        }
      },
      {
        question: {
          en: "Which mechanism describes bacterial stringent response through (p)ppGpp alarmone signaling?",
          es: "¿Qué mecanismo describe la respuesta estricta bacteriana a través de señalización de alarmonas (p)ppGpp?",
          de: "Welcher Mechanismus beschreibt bakterielle stringente Antwort durch (p)ppGpp-Alarmon-Signaling?",
          nl: "Welk mechanisme beschrijft bacteriële stringent response door (p)ppGpp alarmoon signalering?"
        },
        options: [
          { en: "RelA/SpoT enzymes synthesizing (p)ppGpp during amino acid starvation to reprogram transcription", es: "Enzimas RelA/SpoT sintetizando (p)ppGpp durante inanición de aminoácidos para reprogramar transcripción", de: "RelA/SpoT-Enzyme synthetisieren (p)ppGpp während Aminosäure-Hunger zur Transkriptionsprogrammierung", nl: "RelA/SpoT enzymen synthetiserend (p)ppGpp tijdens aminozuur hongering om transcriptie te herprogrammeren" },
          { en: "Random metabolic shutdown", es: "Cierre metabólico aleatorio", de: "Zufälliger metabolischer Stillstand", nl: "Willekeurige metabolische shutdown" },
          { en: "Cell division arrest", es: "Arresto de división celular", de: "Zellteilungsarrest", nl: "Celdeling arrest" },
          { en: "DNA damage response", es: "Respuesta al daño del ADN", de: "DNA-Schadens-Antwort", nl: "DNA schade respons" }
        ],
        correct: 0,
        explanation: {
          en: "The bacterial stringent response involves RelA synthetase detecting uncharged tRNAs at ribosomal A sites and synthesizing (p)ppGpp alarmones that bind RNA polymerase to redirect transcription from growth genes to stress survival genes during nutrient limitation.",
          es: "La respuesta estricta bacteriana involucra la sintetasa RelA detectando ARNts descargados en sitios A ribosómicos y sintetizando alarmonas (p)ppGpp que se unen a ARN polimerasa para redirigir transcripción de genes de crecimiento a genes de supervivencia de estrés durante limitación de nutrientes.",
          de: "Die bakterielle stringente Antwort umfasst RelA-Synthetase, die unbeladene tRNAs an ribosomalen A-Stellen erkennt und (p)ppGpp-Alarmone synthetisiert, die RNA-Polymerase binden, um Transkription von Wachstumsgenen zu Stress-Überlebensgenen während Nährstofflimitation umzulenken.",
          nl: "De bacteriële stringent response behelst RelA synthetase detecterend ongeladen tRNA's op ribosomale A sites en synthetiserend (p)ppGpp alarmonen die RNA polymerase binden om transcriptie om te leiden van groeigenen naar stress overlevingsgenen tijdens nutriënt limitatie."
        }
      },
      {
        question: {
          en: "What is the molecular basis of nucleotide excision repair through dual incision by XPF-ERCC1 and XPG endonucleases?",
          es: "¿Cuál es la base molecular de la reparación por escisión de nucleótidos a través de incisión dual por endonucleasas XPF-ERCC1 y XPG?",
          de: "Was ist die molekulare Basis der Nukleotidexzisionsreparatur durch duale Inzision durch XPF-ERCC1- und XPG-Endonukleasen?",
          nl: "Wat is de moleculaire basis van nucleotide excisie reparatie door dubbele incisie door XPF-ERCC1 en XPG endonucleases?"
        },
        options: [
          { en: "DNA damage recognition by XPC-RAD23B followed by coordinated 5' and 3' incisions to remove oligonucleotide", es: "Reconocimiento de daño al ADN por XPC-RAD23B seguido por incisiones coordinadas 5' y 3' para remover oligonucleótido", de: "DNA-Schadenserkennung durch XPC-RAD23B gefolgt von koordinierten 5'- und 3'-Inzisionen zur Oligonukleotid-Entfernung", nl: "DNA schade herkenning door XPC-RAD23B gevolgd door gecoördineerde 5' en 3' incisies om oligonucleotide te verwijderen" },
          { en: "Single nucleotide replacement", es: "Reemplazo de nucleótido único", de: "Einzelnukleotid-Ersatz", nl: "Enkele nucleotide vervanging" },
          { en: "Homologous recombination", es: "Recombinación homóloga", de: "Homologe Rekombination", nl: "Homologe recombinatie" },
          { en: "Base excision only", es: "Solo escisión de bases", de: "Nur Basenexzision", nl: "Alleen base excisie" }
        ],
        correct: 0,
        explanation: {
          en: "Nucleotide excision repair involves XPC-RAD23B recognizing bulky DNA lesions, recruiting transcription factor TFIIH for DNA unwinding, followed by structure-specific endonucleases XPF-ERCC1 (5' incision) and XPG (3' incision) excising a 22-30 nucleotide oligomer containing the damage.",
          es: "La reparación por escisión de nucleótidos involucra XPC-RAD23B reconociendo lesiones voluminosas de ADN, reclutando factor de transcripción TFIIH para desenrollado de ADN, seguido por endonucleasas específicas de estructura XPF-ERCC1 (incisión 5') y XPG (incisión 3') escindiendo un oligómero de 22-30 nucleótidos conteniendo el daño.",
          de: "Nukleotidexzisionsreparatur umfasst XPC-RAD23B-Erkennung sperriger DNA-Läsionen, Rekrutierung des Transkriptionsfaktors TFIIH für DNA-Entwindung, gefolgt von strukturspezifischen Endonukleasen XPF-ERCC1 (5'-Inzision) und XPG (3'-Inzision), die ein 22-30 Nukleotid-Oligomer mit Schaden ausschneiden.",
          nl: "Nucleotide excisie reparatie behelst XPC-RAD23B herkenning van omvangrijke DNA lesies, rekrutering van transcriptiefactor TFIIH voor DNA onwinding, gevolgd door structuur-specifieke endonucleases XPF-ERCC1 (5' incisie) en XPG (3' incisie) exciserend een 22-30 nucleotide oligomeer bevattend de schade."
        }
      },
      {
        question: {
          en: "Which epigenetic mechanism involves DNA demethylation through base excision repair of oxidized methylcytosines?",
          es: "¿Qué mecanismo epigenético involucra desmetilación del ADN a través de reparación por escisión de bases de metilcitosinas oxidadas?",
          de: "Welcher epigenetische Mechanismus umfasst DNA-Demethylierung durch Basenexzisionsreparatur oxidierter Methylcytosine?",
          nl: "Welk epigenetisch mechanisme betreft DNA demethylatie door base excisie reparatie van geoxideerde methylcytosines?"
        },
        options: [
          { en: "TET-mediated 5mC oxidation followed by TDG glycosylase excision and BER pathway completion", es: "Oxidación de 5mC mediada por TET seguida por escisión de glicosilasa TDG y completación de vía BER", de: "TET-vermittelte 5mC-Oxidation gefolgt von TDG-Glykosylase-Exzision und BER-Weg-Vollendung", nl: "TET-gemedieerde 5mC oxidatie gevolgd door TDG glycosylase excisie en BER pathway voltooiing" },
          { en: "Direct demethylase activity", es: "Actividad directa de desmetilasa", de: "Direkte Demethylase-Aktivität", nl: "Directe demethylase activiteit" },
          { en: "Replication-dependent dilution", es: "Dilución dependiente de replicación", de: "Replikationsabhängige Verdünnung", nl: "Replicatie-afhankelijke verdunning" },
          { en: "Chromatin remodeling", es: "Remodelación de cromatina", de: "Chromatin-Remodellierung", nl: "Chromatine hermodellering" }
        ],
        correct: 0,
        explanation: {
          en: "Active DNA demethylation involves TET enzymes oxidizing 5-methylcytosine to 5-hydroxymethylcytosine, 5-formylcytosine, and 5-carboxylcytosine, which are then recognized by thymine DNA glycosylase (TDG) for excision and replacement through the base excision repair pathway.",
          es: "La desmetilación activa del ADN involucra enzimas TET oxidando 5-metilcitosina a 5-hidroximetilcitosina, 5-formilcitosina y 5-carboxicitosina, que luego son reconocidas por timina ADN glicosilasa (TDG) para escisión y reemplazo a través de la vía de reparación por escisión de bases.",
          de: "Aktive DNA-Demethylierung umfasst TET-Enzyme, die 5-Methylcytosin zu 5-Hydroxymethylcytosin, 5-Formylcytosin und 5-Carboxylcytosin oxidieren, die dann von Thymin-DNA-Glykosylase (TDG) für Exzision und Ersatz durch den Basenexzisions-Reparaturweg erkannt werden.",
          nl: "Actieve DNA demethylatie behelst TET enzymen oxiderend 5-methylcytosine tot 5-hydroxymethylcytosine, 5-formylcytosine en 5-carboxylcytosine, die dan worden herkend door thymine DNA glycosylase (TDG) voor excisie en vervanging door de base excisie reparatie pathway."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of R-loop formation and resolution in transcription-replication conflicts?",
          es: "¿Cuál es el mecanismo molecular de formación y resolución de bucles R en conflictos de transcripción-replicación?",
          de: "Was ist der molekulare Mechanismus der R-Loop-Bildung und -Auflösung in Transkriptions-Replikations-Konflikten?",
          nl: "Wat is het moleculaire mechanisme van R-loop formatie en resolutie in transcriptie-replicatie conflicten?"
        },
        options: [
          { en: "RNA-DNA hybrids formation with RNase H1 resolution preventing genomic instability", es: "Formación de híbridos ARN-ADN con resolución de RNasa H1 previniendo inestabilidad genómica", de: "RNA-DNA-Hybrid-Bildung mit RNase H1-Auflösung verhindert genomische Instabilität", nl: "RNA-DNA hybride formatie met RNase H1 resolutie genomische instabiliteit voorkomen" },
          { en: "Protein aggregate formation", es: "Formación de agregados proteicos", de: "Proteinaggregat-Bildung", nl: "Eiwit aggregaat formatie" },
          { en: "Chromosome condensation", es: "Condensación cromosómica", de: "Chromosomenkondensation", nl: "Chromosoom condensatie" },
          { en: "Histone modification", es: "Modificación de histonas", de: "Histon-Modifikation", nl: "Histon modificatie" }
        ],
        correct: 0,
        explanation: {
          en: "R-loops form when nascent RNA remains hybridized to template DNA, creating RNA-DNA hybrids that can block replication forks. RNase H1 and H2 enzymes resolve these structures by degrading the RNA component, while helicases like SETX can also unwind problematic R-loops to prevent conflicts.",
          es: "Los bucles R se forman cuando ARN naciente permanece hibridizado al ADN plantilla, creando híbridos ARN-ADN que pueden bloquear horquillas de replicación. Las enzimas RNasa H1 y H2 resuelven estas estructuras degradando el componente de ARN, mientras que helicasas como SETX también pueden desenrollar bucles R problemáticos para prevenir conflictos.",
          de: "R-Loops bilden sich, wenn neuzugängige RNA mit Template-DNA hybridisiert bleibt und RNA-DNA-Hybride schafft, die Replikations-Forks blockieren können. RNase H1- und H2-Enzyme lösen diese Strukturen durch RNA-Komponenten-Abbau, während Helikasen wie SETX auch problematische R-Loops entwinden können, um Konflikte zu verhindern.",
          nl: "R-loops vormen zich wanneer nascent RNA gehybridiseerd blijft aan template DNA, RNA-DNA hybriden creërend die replicatie forks kunnen blokkeren. RNase H1 en H2 enzymen lossen deze structuren op door de RNA component af te breken, terwijl helicases zoals SETX ook problematische R-loops kunnen ontwinden om conflicten te voorkomen."
        }
      },
      {
        question: {
          en: "Which mechanism describes translational control through upstream open reading frames (uORFs) in 5' UTRs?",
          es: "¿Qué mecanismo describe el control traduccional a través de marcos de lectura abiertos río arriba (uORFs) en 5' UTRs?",
          de: "Welcher Mechanismus beschreibt Translationskontrolle durch stromaufwärts offene Leserahmen (uORFs) in 5' UTRs?",
          nl: "Welk mechanisme beschrijft translationele controle door upstream open reading frames (uORF's) in 5' UTR's?"
        },
        options: [
          { en: "Ribosome reinitiation regulation after uORF translation affecting main ORF accessibility", es: "Regulación de reiniciación ribosómica después de traducción de uORF afectando accesibilidad del ORF principal", de: "Ribosom-Reinitiationsregulation nach uORF-Translation beeinflusst Haupt-ORF-Zugänglichkeit", nl: "Ribosoom herinitiatie regulatie na uORF translatie beïnvloedend hoofdORF toegankelijkheid" },
          { en: "mRNA degradation", es: "Degradación de ARNm", de: "mRNA-Abbau", nl: "mRNA degradatie" },
          { en: "Transcriptional silencing", es: "Silenciamiento transcripcional", de: "Transkriptionelle Stilllegung", nl: "Transcriptionele silencing" },
          { en: "Protein folding", es: "Plegamiento de proteínas", de: "Proteinfaltung", nl: "Eiwit vouwing" }
        ],
        correct: 0,
        explanation: {
          en: "Upstream open reading frames (uORFs) in 5' UTRs regulate translation by competing with main ORFs for ribosome binding. After translating short uORF peptides, ribosome reinitiation efficiency determines whether translation proceeds to the main coding sequence, providing a mechanism for translational control.",
          es: "Los marcos de lectura abiertos río arriba (uORFs) en 5' UTRs regulan traducción compitiendo con ORFs principales por unión ribosómica. Después de traducir péptidos cortos de uORF, la eficiencia de reiniciación ribosómica determina si la traducción procede a la secuencia codificante principal, proporcionando un mecanismo de control traduccional.",
          de: "Upstream open reading frames (uORFs) in 5' UTRs regulieren Translation durch Konkurrenz mit Haupt-ORFs um Ribosom-Bindung. Nach Translation kurzer uORF-Peptide bestimmt Ribosom-Reinitiations-Effizienz, ob Translation zur Haupt-Kodierungssequenz fortschreitet und bietet einen Translationskontrollmechanismus.",
          nl: "Upstream open reading frames (uORF's) in 5' UTR's reguleren translatie door te concurreren met hoofd-ORF's om ribosoom binding. Na translatie van korte uORF peptiden, bepaalt ribosoom herinitiatie efficiëntie of translatie voortgaat naar de hoofdcoderende sequentie, een mechanisme voor translationele controle biedend."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of p53-mediated cell cycle checkpoint control through MDM2 regulation?",
          es: "¿Cuál es el mecanismo molecular del control de punto de control del ciclo celular mediado por p53 a través de la regulación de MDM2?",
          de: "Was ist der molekulare Mechanismus der p53-vermittelten Zellzyklus-Checkpoint-Kontrolle durch MDM2-Regulation?",
          nl: "Wat is het moleculaire mechanisme van p53-gemedieerde celcyclus checkpoint controle door MDM2 regulatie?"
        },
        options: [
          { en: "ATM/ATR phosphorylation stabilizing p53 by disrupting MDM2-mediated ubiquitination and degradation", es: "Fosforilación ATM/ATR estabilizando p53 al interrumpir ubiquitinación y degradación mediada por MDM2", de: "ATM/ATR-Phosphorylierung stabilisiert p53 durch Störung MDM2-vermittelter Ubiquitinierung und Abbau", nl: "ATM/ATR fosforylatie stabiliserend p53 door verstoring van MDM2-gemedieerde ubiquitinatie en degradatie" },
          { en: "Direct p53 activation only", es: "Solo activación directa de p53", de: "Nur direkte p53-Aktivierung", nl: "Alleen directe p53 activatie" },
          { en: "MDM2-independent pathway", es: "Vía independiente de MDM2", de: "MDM2-unabhängiger Weg", nl: "MDM2-onafhankelijke pathway" },
          { en: "Constitutive p53 expression", es: "Expresión constitutiva de p53", de: "Konstitutive p53-Expression", nl: "Constitutieve p53 expressie" }
        ],
        correct: 0,
        explanation: {
          en: "p53 checkpoint control involves DNA damage kinases ATM/ATR phosphorylating p53 at Ser15 and other sites, preventing MDM2-mediated ubiquitination and proteasomal degradation, thereby stabilizing p53 to induce cell cycle arrest or apoptosis.",
          es: "El control de punto de control p53 involucra cinasas de daño al ADN ATM/ATR fosforilando p53 en Ser15 y otros sitios, previniendo ubiquitinación mediada por MDM2 y degradación proteasomal, estabilizando así p53 para inducir arresto del ciclo celular o apoptosis.",
          de: "p53-Checkpoint-Kontrolle umfasst DNA-Schadens-Kinasen ATM/ATR, die p53 an Ser15 und anderen Stellen phosphorylieren, MDM2-vermittelte Ubiquitinierung und proteasomalen Abbau verhindern und dadurch p53 stabilisieren, um Zellzyklus-Arrest oder Apoptose zu induzieren.",
          nl: "p53 checkpoint controle behelst DNA schade kinases ATM/ATR fosforylerend p53 op Ser15 en andere plaatsen, MDM2-gemedieerde ubiquitinatie en proteasomale degradatie voorkomen, daardoor p53 stabiliserend om celcyclus arrest of apoptose te induceren."
        }
      },
      {
        question: {
          en: "Which mechanism describes DNA polymerase proofreading through 3' to 5' exonuclease activity?",
          es: "¿Qué mecanismo describe la corrección de pruebas de ADN polimerasa a través de actividad exonucleasa 3' a 5'?",
          de: "Welcher Mechanismus beschreibt DNA-Polymerase-Korrekturlesen durch 3' zu 5' Exonuklease-Aktivität?",
          nl: "Welk mechanisme beschrijft DNA polymerase proofreading door 3' naar 5' exonuclease activiteit?"
        },
        options: [
          { en: "Immediate removal of misincorporated nucleotides by intrinsic 3'-5' exonuclease domain", es: "Remoción inmediata de nucleótidos mal incorporados por dominio exonucleasa 3'-5' intrínseco", de: "Sofortige Entfernung falsch eingebauter Nukleotide durch intrinsische 3'-5' Exonuklease-Domäne", nl: "Onmiddellijke verwijdering van verkeerd ingebouwde nucleotiden door intrinsiek 3'-5' exonuclease domein" },
          { en: "Post-replication repair only", es: "Solo reparación post-replicación", de: "Nur Post-Replikations-Reparatur", nl: "Alleen post-replicatie reparatie" },
          { en: "5' to 3' exonuclease activity", es: "Actividad exonucleasa 5' a 3'", de: "5' zu 3' Exonuklease-Aktivität", nl: "5' naar 3' exonuclease activiteit" },
          { en: "External proofreading proteins", es: "Proteínas de corrección externas", de: "Externe Korrekturproteine", nl: "Externe proofreading eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "DNA polymerase proofreading involves the intrinsic 3' to 5' exonuclease activity that immediately removes misincorporated nucleotides during replication, reducing error rates from ~10⁻⁵ to ~10⁻⁷ per nucleotide incorporated.",
          es: "La corrección de pruebas de ADN polimerasa involucra actividad exonucleasa 3' a 5' intrínseca que inmediatamente remueve nucleótidos mal incorporados durante replicación, reduciendo tasas de error de ~10⁻⁵ a ~10⁻⁷ por nucleótido incorporado.",
          de: "DNA-Polymerase-Korrekturlesen umfasst die intrinsische 3' zu 5' Exonuklease-Aktivität, die sofort falsch eingebaute Nukleotide während der Replikation entfernt und Fehlerquoten von ~10⁻⁵ auf ~10⁻⁷ pro eingebautem Nukleotid reduziert.",
          nl: "DNA polymerase proofreading behelst de intrinsieke 3' naar 5' exonuclease activiteit die onmiddellijk verkeerd ingebouwde nucleotiden tijdens replicatie verwijdert, foutpercentages reducerend van ~10⁻⁵ naar ~10⁻⁷ per ingebouwd nucleotide."
        }
      },
      {
        question: {
          en: "What is the molecular basis of transcriptional interference through collision of RNA polymerases?",
          es: "¿Cuál es la base molecular de la interferencia transcripcional a través de colisión de ARN polimerasas?",
          de: "Was ist die molekulare Basis der transkriptionellen Interferenz durch Kollision von RNA-Polymerasen?",
          nl: "Wat is de moleculaire basis van transcriptionele interferentie door botsing van RNA polymerasen?"
        },
        options: [
          { en: "Head-on collisions between converging RNA polymerases causing transcriptional repression and replication conflicts", es: "Colisiones frontales entre ARN polimerasas convergentes causando represión transcripcional y conflictos de replicación", de: "Kopf-an-Kopf-Kollisionen zwischen konvergierenden RNA-Polymerasen verursachen transkriptionelle Repression und Replikationskonflikte", nl: "Frontale botsingen tussen convergerende RNA polymerasen veroorzakend transcriptionele repressie en replicatie conflicten" },
          { en: "Cooperative transcription enhancement", es: "Mejoramiento cooperativo de transcripción", de: "Kooperative Transkriptionsverstärkung", nl: "Coöperatieve transcriptie verbetering" },
          { en: "Simultaneous bidirectional transcription", es: "Transcripción bidireccional simultánea", de: "Gleichzeitige bidirektionale Transkription", nl: "Gelijktijdige bidirectionele transcriptie" },
          { en: "RNA polymerase recycling", es: "Reciclaje de ARN polimerasa", de: "RNA-Polymerase-Recycling", nl: "RNA polymerase recycling" }
        ],
        correct: 0,
        explanation: {
          en: "Transcriptional interference occurs when RNA polymerases transcribing in opposite directions collide head-on, leading to transcriptional repression of one or both genes, polymerase stalling, and potential conflicts with DNA replication machinery.",
          es: "La interferencia transcripcional ocurre cuando ARN polimerasas transcribiendo en direcciones opuestas colisionan frontalmente, llevando a represión transcripcional de uno o ambos genes, estancamiento de polimerasa y conflictos potenciales con maquinaria de replicación de ADN.",
          de: "Transkriptionelle Interferenz tritt auf, wenn RNA-Polymerasen, die in entgegengesetzten Richtungen transkribieren, frontal kollidieren und zu transkriptioneller Repression eines oder beider Gene, Polymerase-Stillstand und potentiellen Konflikten mit DNA-Replikationsmaschinerie führen.",
          nl: "Transcriptionele interferentie treedt op wanneer RNA polymerasen transcriberende in tegengestelde richtingen frontaal botsen, leidend tot transcriptionele repressie van één of beide genen, polymerase stilstand en potentiële conflicten met DNA replicatie machinerie."
        }
      },
      {
        question: {
          en: "Which epigenetic mechanism involves histone variant H3.3 incorporation at active genes?",
          es: "¿Qué mecanismo epigenético involucra incorporación de variante de histona H3.3 en genes activos?",
          de: "Welcher epigenetische Mechanismus umfasst Histon-Variante H3.3-Inkorporation bei aktiven Genen?",
          nl: "Welk epigenetisch mechanisme betreft histon variant H3.3 incorporatie bij actieve genen?"
        },
        options: [
          { en: "Replication-independent chromatin assembly by HIRA and DAXX/ATRX complexes at transcriptionally active regions", es: "Ensamble de cromatina independiente de replicación por complejos HIRA y DAXX/ATRX en regiones transcripcionalmente activas", de: "Replikationsunabhängige Chromatin-Assemblierung durch HIRA- und DAXX/ATRX-Komplexe an transkriptionell aktiven Regionen", nl: "Replicatie-onafhankelijke chromatine assemblage door HIRA en DAXX/ATRX complexen bij transcriptioneel actieve regio's" },
          { en: "Canonical histone deposition", es: "Deposición canónica de histonas", de: "Kanonische Histon-Ablagerung", nl: "Canonieke histon depositie" },
          { en: "Histone acetylation only", es: "Solo acetilación de histonas", de: "Nur Histon-Acetylierung", nl: "Alleen histon acetylatie" },
          { en: "DNA methylation targeting", es: "Direccionamiento de metilación del ADN", de: "DNA-Methylierungs-Targeting", nl: "DNA methylatie targeting" }
        ],
        correct: 0,
        explanation: {
          en: "H3.3 histone variant is incorporated into nucleosomes at transcriptionally active genes through replication-independent mechanisms involving HIRA complex at gene bodies and promoters, and DAXX/ATRX complex at heterochromatic regions and repetitive elements.",
          es: "La variante de histona H3.3 se incorpora en nucleosomas en genes transcripcionalmente activos a través de mecanismos independientes de replicación involucrando complejo HIRA en cuerpos génicos y promotores, y complejo DAXX/ATRX en regiones heterocromáticas y elementos repetitivos.",
          de: "H3.3-Histon-Variante wird durch replikationsunabhängige Mechanismen in Nukleosomen bei transkriptionell aktiven Genen eingebaut, wobei HIRA-Komplex bei Genkörpern und Promotoren und DAXX/ATRX-Komplex bei heterochromatischen Regionen und repetitiven Elementen beteiligt sind.",
          nl: "H3.3 histon variant wordt geïncorporeerd in nucleosomen bij transcriptioneel actieve genen door replicatie-onafhankelijke mechanismen betreffend HIRA complex bij genlichamen en promotors, en DAXX/ATRX complex bij heterochromatische regio's en repetitieve elementen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of DNA mismatch repair through MutS and MutL protein complexes?",
          es: "¿Cuál es el mecanismo molecular de la reparación de apareamiento erróneo del ADN a través de complejos proteicos MutS y MutL?",
          de: "Was ist der molekulare Mechanismus der DNA-Mismatch-Reparatur durch MutS- und MutL-Proteinkomplexe?",
          nl: "Wat is het moleculaire mechanisme van DNA mismatch reparatie door MutS en MutL eiwit complexen?"
        },
        options: [
          { en: "MutS recognition of base-base mismatches with MutL-mediated excision and strand-specific repair", es: "Reconocimiento MutS de apareamientos erróneos base-base con escisión mediada por MutL y reparación específica de cadena", de: "MutS-Erkennung von Base-Base-Fehlpaarungen mit MutL-vermittelter Exzision und strangspezifischer Reparatur", nl: "MutS herkenning van base-base mismatches met MutL-gemedieerde excisie en streng-specifieke reparatie" },
          { en: "Base excision repair pathway", es: "Vía de reparación por escisión de bases", de: "Basenexzisions-Reparaturweg", nl: "Base excisie reparatie pathway" },
          { en: "Nucleotide excision repair", es: "Reparación por escisión de nucleótidos", de: "Nukleotidexzisionsreparatur", nl: "Nucleotide excisie reparatie" },
          { en: "Homologous recombination", es: "Recombinación homóloga", de: "Homologe Rekombination", nl: "Homologe recombinatie" }
        ],
        correct: 0,
        explanation: {
          en: "DNA mismatch repair involves MutS proteins recognizing base-base mismatches and insertion/deletion loops, recruiting MutL proteins that coordinate with exonuclease activity to excise the error-containing DNA strand, followed by resynthesis and ligation.",
          es: "La reparación de apareamiento erróneo del ADN involucra proteínas MutS reconociendo apareamientos erróneos base-base y bucles de inserción/deleción, reclutando proteínas MutL que coordinan con actividad exonucleasa para escindir la cadena de ADN conteniendo error, seguido por resíntesis y ligación.",
          de: "DNA-Mismatch-Reparatur umfasst MutS-Proteine, die Base-Base-Fehlpaarungen und Insertions-/Deletionsschleifen erkennen, MutL-Proteine rekrutieren, die mit Exonuklease-Aktivität koordinieren, um den fehlerhaften DNA-Strang zu entfernen, gefolgt von Resynthese und Ligation.",
          nl: "DNA mismatch reparatie behelst MutS eiwitten herkenning van base-base mismatches en insertie/deletie loops, MutL eiwitten rekruterend die coördineren met exonuclease activiteit om de fout-bevattende DNA streng te exciseren, gevolgd door resynthese en ligatie."
        }
      },
      {
        question: {
          en: "Which mechanism describes viral immune evasion through interferon pathway inhibition?",
          es: "¿Qué mecanismo describe la evasión inmune viral a través de inhibición de la vía de interferón?",
          de: "Welcher Mechanismus beschreibt virale Immunevasion durch Interferon-Weg-Hemmung?",
          nl: "Welk mechanisme beschrijft virale immuun ontwijking door interferon pathway remming?"
        },
        options: [
          { en: "Viral proteins blocking JAK-STAT signaling and ISG expression to suppress antiviral responses", es: "Proteínas virales bloqueando señalización JAK-STAT y expresión ISG para suprimir respuestas antivirales", de: "Virale Proteine blockieren JAK-STAT-Signaling und ISG-Expression zur Unterdrückung antiviraler Reaktionen", nl: "Virale eiwitten blokkerend JAK-STAT signalering en ISG expressie om antivirale responsen te onderdrukken" },
          { en: "Enhanced interferon production", es: "Producción mejorada de interferón", de: "Verstärkte Interferon-Produktion", nl: "Verhoogde interferon productie" },
          { en: "Immune system activation", es: "Activación del sistema inmune", de: "Immunsystem-Aktivierung", nl: "Immuunsysteem activatie" },
          { en: "Antibody-mediated response", es: "Respuesta mediada por anticuerpos", de: "Antikörper-vermittelte Antwort", nl: "Antilichaam-gemedieerde respons" }
        ],
        correct: 0,
        explanation: {
          en: "Many viruses evade interferon responses by producing proteins that inhibit JAK-STAT signaling pathways, preventing interferon-stimulated gene (ISG) expression and allowing viral replication to proceed despite innate immune activation.",
          es: "Muchos virus evaden respuestas de interferón produciendo proteínas que inhiben vías de señalización JAK-STAT, previniendo expresión de genes estimulados por interferón (ISG) y permitiendo que replicación viral proceda a pesar de activación inmune innata.",
          de: "Viele Viren umgehen Interferon-Reaktionen durch Produktion von Proteinen, die JAK-STAT-Signalwege hemmen, Interferon-stimulierte Gen (ISG) Expression verhindern und virale Replikation trotz angeborener Immunaktivierung ermöglichen.",
          nl: "Veel virussen ontwijken interferon responsen door eiwitten te produceren die JAK-STAT signaleringsroutes remmen, interferon-gestimuleerde gen (ISG) expressie voorkomen en virale replicatie toestaan ondanks aangeboren immuun activatie."
        }
      },
      {
        question: {
          en: "What is the molecular basis of mitochondrial DNA inheritance and heteroplasmy?",
          es: "¿Cuál es la base molecular de la herencia del ADN mitocondrial y heteroplasmia?",
          de: "Was ist die molekulare Basis der mitochondrialen DNA-Vererbung und Heteroplasmie?",
          nl: "Wat is de moleculaire basis van mitochondriale DNA erfelijkheid en heteroplasmie?"
        },
        options: [
          { en: "Maternal inheritance with random mtDNA segregation during cell divisions creating variable ratios", es: "Herencia materna con segregación aleatoria de ADNmt durante divisiones celulares creando proporciones variables", de: "Mütterliche Vererbung mit zufälliger mtDNA-Segregation während Zellteilungen schafft variable Verhältnisse", nl: "Maternale erfelijkheid met willekeurige mtDNA segregatie tijdens celdelingen creërend variabele verhoudingen" },
          { en: "Biparental inheritance pattern", es: "Patrón de herencia biparental", de: "Biparentales Vererbungsmuster", nl: "Biparentaal erfelijkheidspatroon" },
          { en: "Nuclear DNA control", es: "Control de ADN nuclear", de: "Nukleäre DNA-Kontrolle", nl: "Nucleaire DNA controle" },
          { en: "Mendelian inheritance", es: "Herencia mendeliana", de: "Mendelsche Vererbung", nl: "Mendeliaanse erfelijkheid" }
        ],
        correct: 0,
        explanation: {
          en: "Mitochondrial DNA is maternally inherited through egg cytoplasm and exhibits heteroplasmy when cells contain mixtures of wild-type and mutant mtDNA molecules that segregate randomly during cell divisions, creating variable phenotypic expression patterns.",
          es: "El ADN mitocondrial se hereda maternalmente a través del citoplasma del óvulo y exhibe heteroplasmia cuando las células contienen mezclas de moléculas de ADNmt tipo salvaje y mutante que se segregan aleatoriamente durante divisiones celulares, creando patrones variables de expresión fenotípica.",
          de: "Mitochondriale DNA wird mütterlich durch Eizellen-Zytoplasma vererbt und zeigt Heteroplasmie, wenn Zellen Mischungen aus Wildtyp- und mutierten mtDNA-Molekülen enthalten, die sich zufällig während Zellteilungen segregieren und variable phänotypische Expressionsmuster schaffen.",
          nl: "Mitochondriale DNA wordt maternaal geërfd door ei cytoplasma en vertoont heteroplasmie wanneer cellen mengsels bevatten van wildtype en mutante mtDNA moleculen die willekeurig segregeren tijdens celdelingen, variabele fenotypische expressie patronen creërend."
        }
      },
      {
        question: {
          en: "Which post-translational modification involves neddylation for protein regulation?",
          es: "¿Qué modificación post-traduccional involucra nedilación para regulación proteica?",
          de: "Welche posttranslationale Modifikation umfasst Neddylierung für Proteinregulation?",
          nl: "Welke post-translationele modificatie betreft neddylatie voor eiwit regulatie?"
        },
        options: [
          { en: "NEDD8 conjugation to cullin proteins activating ubiquitin ligase complexes for substrate degradation", es: "Conjugación NEDD8 a proteínas cullina activando complejos ligasa de ubiquitina para degradación de sustrato", de: "NEDD8-Konjugation an Cullin-Proteine aktiviert Ubiquitin-Ligase-Komplexe für Substrat-Abbau", nl: "NEDD8 conjugatie aan cullin eiwitten activerend ubiquitine ligase complexen voor substraat degradatie" },
          { en: "Protein acetylation", es: "Acetilación de proteínas", de: "Protein-Acetylierung", nl: "Eiwit acetylatie" },
          { en: "Methylation reaction", es: "Reacción de metilación", de: "Methylierungsreaktion", nl: "Methylatie reactie" },
          { en: "Phosphorylation cascade", es: "Cascada de fosforilación", de: "Phosphorylierungskaskade", nl: "Fosforylatie cascade" }
        ],
        correct: 0,
        explanation: {
          en: "Neddylation involves conjugation of NEDD8 (Neural precursor cell Expressed Developmentally Down-regulated protein 8) to cullin proteins in SCF and other ubiquitin ligase complexes, activating these E3 ligases to promote substrate ubiquitination and proteasomal degradation.",
          es: "La nedilación involucra conjugación de NEDD8 (proteína 8 regulada hacia abajo en desarrollo expresada en células precursoras neurales) a proteínas cullina en SCF y otros complejos ligasa de ubiquitina, activando estas E3 ligasas para promover ubiquitinación de sustrato y degradación proteasomal.",
          de: "Neddylierung umfasst Konjugation von NEDD8 (Neural precursor cell Expressed Developmentally Down-regulated protein 8) an Cullin-Proteine in SCF- und anderen Ubiquitin-Ligase-Komplexen, aktiviert diese E3-Ligasen zur Förderung von Substrat-Ubiquitinierung und proteasomalem Abbau.",
          nl: "Neddylatie behelst conjugatie van NEDD8 (Neural precursor cell Expressed Developmentally Down-regulated protein 8) aan cullin eiwitten in SCF en andere ubiquitine ligase complexen, deze E3 ligases activerend om substraat ubiquitinatie en proteasomale degradatie te bevorderen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of prokaryotic transcription termination through Rho-dependent termination?",
          es: "¿Cuál es el mecanismo molecular de terminación de transcripción procariota a través de terminación dependiente de Rho?",
          de: "Was ist der molekulare Mechanismus der prokaryotischen Transkriptionstermination durch Rho-abhängige Termination?",
          nl: "Wat is het moleculaire mechanisme van prokaryotische transcriptie terminatie door Rho-afhankelijke terminatie?"
        },
        options: [
          { en: "Rho helicase chasing RNA polymerase and unwinding RNA-DNA hybrid to terminate transcription", es: "Helicasa Rho persiguiendo ARN polimerasa y desenrollando híbrido ARN-ADN para terminar transcripción", de: "Rho-Helikase verfolgt RNA-Polymerase und entwirrt RNA-DNA-Hybrid zur Transkriptionstermination", nl: "Rho helicase achtervolging RNA polymerase en ontwinding RNA-DNA hybride om transcriptie te termineren" },
          { en: "Intrinsic termination hairpins", es: "Horquillas de terminación intrínseca", de: "Intrinsische Terminations-Haarnadeln", nl: "Intrinsieke terminatie hairpins" },
          { en: "RNA polymerase dissociation", es: "Disociación de ARN polimerasa", de: "RNA-Polymerase-Dissoziation", nl: "RNA polymerase dissociatie" },
          { en: "Ribosome collision", es: "Colisión de ribosomas", de: "Ribosom-Kollision", nl: "Ribosoom botsing" }
        ],
        correct: 0,
        explanation: {
          en: "Rho-dependent termination involves Rho protein, an ATP-dependent helicase, binding to nascent RNA and pursuing RNA polymerase. When Rho catches up to the polymerase, it unwinds the RNA-DNA hybrid, destabilizing the transcription complex and causing termination.",
          es: "La terminación dependiente de Rho involucra la proteína Rho, una helicasa dependiente de ATP, uniéndose a ARN naciente y persiguiendo ARN polimerasa. Cuando Rho alcanza la polimerasa, desenrolla el híbrido ARN-ADN, desestabilizando el complejo de transcripción y causando terminación.",
          de: "Rho-abhängige Termination umfasst Rho-Protein, eine ATP-abhängige Helikase, die sich an neugebildete RNA bindet und RNA-Polymerase verfolgt. Wenn Rho die Polymerase einholt, entwirrt sie das RNA-DNA-Hybrid, destabilisiert den Transkriptionskomplex und verursacht Termination.",
          nl: "Rho-afhankelijke terminatie behelst Rho eiwit, een ATP-afhankelijke helicase, bindend aan nascent RNA en RNA polymerase achtervolgende. Wanneer Rho de polymerase inhaalt, ontwint het de RNA-DNA hybride, het transcriptie complex destabiliserend en terminatie veroorzakend."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/genetics', level2);
  }
})();