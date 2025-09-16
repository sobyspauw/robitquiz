// Biology - Level 4: Advanced Genetics and Molecular Biology
(function() {
  const level4 = {
    name: {
      en: "Advanced Genetics and Molecular Biology",
      es: "Genética Avanzada y Biología Molecular",
      de: "Erweiterte Genetik und Molekularbiologie",
      nl: "Geavanceerde Genetica en Moleculaire Biologie"
    },
    questions: [
      {
        question: {
          en: "Which mechanism explains the phenomenon of genomic imprinting in mammals?",
          es: "¿Qué mecanismo explica el fenómeno de la impronta genómica en mamíferos?",
          de: "Welcher Mechanismus erklärt das Phänomen des genomischen Imprintings bei Säugetieren?",
          nl: "Welk mechanisme verklaart het fenomeen van genomische imprinting bij zoogdieren?"
        },
        options: [
          { en: "Parent-specific DNA methylation patterns", es: "Patrones de metilación del ADN específicos del progenitor", de: "Elternspezifische DNA-Methylierungsmuster", nl: "Ouder-specifieke DNA-methyleringspatronen" },
          { en: "Random X-chromosome inactivation", es: "Inactivación aleatoria del cromosoma X", de: "Zufällige X-Chromosom-Inaktivierung", nl: "Willekeurige X-chromosoom inactivering" },
          { en: "Histone acetylation only", es: "Solo acetilación de histonas", de: "Nur Histonacetylierung", nl: "Alleen histon acetylering" },
          { en: "DNA sequence mutations", es: "Mutaciones en la secuencia de ADN", de: "DNA-Sequenzmutationen", nl: "DNA-sequentie mutaties" }
        ],
        correct: 0,
        explanation: {
          en: "Genomic imprinting involves parent-specific DNA methylation patterns that silence specific alleles based on their parent of origin, creating monoallelic gene expression that persists through development.",
          es: "La impronta genómica involucra patrones de metilación del ADN específicos del progenitor que silencian alelos específicos basándose en su progenitor de origen, creando expresión génica monoalélica que persiste durante el desarrollo.",
          de: "Genomisches Imprinting beinhaltet elternspezifische DNA-Methylierungsmuster, die spezifische Allele basierend auf ihrem Ursprungselternteil stilllegen, wodurch monoallelische Genexpression entsteht, die durch die Entwicklung bestehen bleibt.",
          nl: "Genomische imprinting omvat ouder-specifieke DNA-methyleringspatronen die specifieke allelen stilleggen gebaseerd op hun ouder van oorsprong, wat monoallelische genexpressie creëert die door de ontwikkeling voortduurt."
        }
      },
      {
        question: {
          en: "What is the molecular basis of the position effect in gene expression?",
          es: "¿Cuál es la base molecular del efecto de posición en la expresión génica?",
          de: "Was ist die molekulare Grundlage des Positionseffekts in der Genexpression?",
          nl: "Wat is de moleculaire basis van het positie-effect in genexpressie?"
        },
        options: [
          { en: "Chromatin context and enhancer-silencer interactions", es: "Contexto de cromatina e interacciones potenciador-silenciador", de: "Chromatinkontext und Enhancer-Silencer-Interaktionen", nl: "Chromatine context en enhancer-silencer interacties" },
          { en: "Gene sequence changes only", es: "Solo cambios en la secuencia génica", de: "Nur Gensequenzänderungen", nl: "Alleen gensequentie veranderingen" },
          { en: "Protein coding capacity", es: "Capacidad de codificación proteica", de: "Proteinkodierkapazität", nl: "Eiwit coderende capaciteit" },
          { en: "mRNA stability differences", es: "Diferencias de estabilidad del ARNm", de: "mRNA-Stabilitätsunterschiede", nl: "mRNA stabiliteit verschillen" }
        ],
        correct: 0,
        explanation: {
          en: "Position effects result from the chromatin environment surrounding a gene, including proximity to heterochromatin, enhancers, silencers, and chromatin domain boundaries that influence accessibility and transcriptional activity.",
          es: "Los efectos de posición resultan del ambiente de cromatina que rodea un gen, incluyendo proximidad a heterocromatina, potenciadores, silenciadores y límites de dominios de cromatina que influyen accesibilidad y actividad transcripcional.",
          de: "Positionseffekte resultieren aus der Chromatinumgebung um ein Gen, einschließlich Nähe zu Heterochromatin, Enhancern, Silencern und Chromatindomänengrenzen, die Zugänglichkeit und Transkriptionsaktivität beeinflussen.",
          nl: "Positie-effecten resulteren uit de chromatine omgeving rond een gen, inclusief nabijheid tot heterochromatine, enhancers, silencers en chromatine domein grenzen die toegankelijkheid en transcriptionele activiteit beïnvloeden."
        }
      },
      {
        question: {
          en: "Which molecular mechanism underlies RNA interference (RNAi) in gene silencing?",
          es: "¿Qué mecanismo molecular subyace a la interferencia de ARN (ARNi) en el silenciamiento génico?",
          de: "Welcher molekulare Mechanismus liegt der RNA-Interferenz (RNAi) beim Gen-Silencing zugrunde?",
          nl: "Welk moleculair mechanisme ligt ten grondslag aan RNA interferentie (RNAi) bij gen stillegging?"
        },
        options: [
          { en: "RISC complex and target mRNA cleavage", es: "Complejo RISC y escisión de ARNm objetivo", de: "RISC-Komplex und Ziel-mRNA-Spaltung", nl: "RISC complex en doel-mRNA klieven" },
          { en: "DNA methylation of promoters", es: "Metilación de ADN de promotores", de: "DNA-Methylierung von Promotoren", nl: "DNA methylering van promotors" },
          { en: "Histone deacetylation", es: "Deacetilación de histonas", de: "Histondeacetylierung", nl: "Histon deacetylering" },
          { en: "Transcriptional repression only", es: "Solo represión transcripcional", de: "Nur transkriptionale Repression", nl: "Alleen transcriptionele repressie" }
        ],
        correct: 0,
        explanation: {
          en: "RNAi operates through the RNA-induced silencing complex (RISC), where small interfering RNAs guide the complex to complementary mRNA sequences, leading to target mRNA cleavage and degradation.",
          es: "La ARNi opera a través del complejo de silenciamiento inducido por ARN (RISC), donde ARNs interferentes pequeños guían el complejo a secuencias de ARNm complementarias, llevando a escisión y degradación del ARNm objetivo.",
          de: "RNAi arbeitet über den RNA-induzierten Silencing-Komplex (RISC), wo kleine interferierende RNAs den Komplex zu komplementären mRNA-Sequenzen führen, was zu Ziel-mRNA-Spaltung und -Abbau führt.",
          nl: "RNAi werkt via het RNA-geïnduceerde stillegging complex (RISC), waarbij kleine interfererende RNAs het complex naar complementaire mRNA sequenties leiden, wat leidt tot doel-mRNA klieven en afbraak."
        }
      },
      {
        question: {
          en: "What is the molecular basis of alternative splicing regulation?",
          es: "¿Cuál es la base molecular de la regulación del empalme alternativo?",
          de: "Was ist die molekulare Grundlage der alternativen Spleißregulation?",
          nl: "Wat is de moleculaire basis van alternatieve splicing regulatie?"
        },
        options: [
          { en: "Splicing enhancers, silencers, and SR proteins", es: "Potenciadores de empalme, silenciadores y proteínas SR", de: "Spleißenhancer, -silencer und SR-Proteine", nl: "Splicing enhancers, silencers en SR eiwitten" },
          { en: "DNA polymerase variants", es: "Variantes de ADN polimerasa", de: "DNA-Polymerase-Varianten", nl: "DNA polymerase varianten" },
          { en: "Ribosome binding differences", es: "Diferencias de unión ribosomal", de: "Ribosombindungsunterschiede", nl: "Ribosoom bindings verschillen" },
          { en: "tRNA availability only", es: "Solo disponibilidad de ARNt", de: "Nur tRNA-Verfügbarkeit", nl: "Alleen tRNA beschikbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "Alternative splicing is regulated by splicing enhancers and silencers (regulatory sequences) that recruit SR proteins and other splicing factors, which compete to determine which splice sites are used in different cellular contexts.",
          es: "El empalme alternativo es regulado por potenciadores y silenciadores de empalme (secuencias regulatorias) que reclutan proteínas SR y otros factores de empalme, que compiten para determinar qué sitios de empalme se usan en diferentes contextos celulares.",
          de: "Alternatives Spleißen wird durch Spleißenhancer und -silencer (regulatorische Sequenzen) reguliert, die SR-Proteine und andere Spleißfaktoren rekrutieren, welche konkurrieren, um zu bestimmen, welche Spleißstellen in verschiedenen zellulären Kontexten verwendet werden.",
          nl: "Alternatieve splicing wordt gereguleerd door splicing enhancers en silencers (regulatoire sequenties) die SR eiwitten en andere splicing factoren rekruteren, die concurreren om te bepalen welke splice sites gebruikt worden in verschillende cellulaire contexten."
        }
      },
      {
        question: {
          en: "Which mechanism explains the molecular basis of trinucleotide repeat expansion diseases?",
          es: "¿Qué mecanismo explica la base molecular de las enfermedades de expansión de repeticiones trinucleótidas?",
          de: "Welcher Mechanismus erklärt die molekulare Grundlage von Trinukleotid-Repeat-Expansionskrankheiten?",
          nl: "Welk mechanisme verklaart de moleculaire basis van trinucleotide repeat expansie ziekten?"
        },
        options: [
          { en: "DNA replication slippage and repair failures", es: "Deslizamiento de replicación del ADN y fallas de reparación", de: "DNA-Replikationsschlupf und Reparaturversagen", nl: "DNA replicatie slippage en reparatie falen" },
          { en: "Random point mutations", es: "Mutaciones puntuales aleatorias", de: "Zufällige Punktmutationen", nl: "Willekeurige puntmutaties" },
          { en: "Chromosomal translocations", es: "Translocaciones cromosómicas", de: "Chromosomale Translokationen", nl: "Chromosomale translocaties" },
          { en: "Viral integration events", es: "Eventos de integración viral", de: "Virale Integrationsereignisse", nl: "Virale integratie gebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "Trinucleotide repeat expansions occur through DNA replication slippage, where repetitive sequences form secondary structures that cause polymerase slippage, coupled with failures in DNA repair mechanisms to correct these errors.",
          es: "Las expansiones de repeticiones trinucleótidas ocurren a través de deslizamiento de replicación del ADN, donde secuencias repetitivas forman estructuras secundarias que causan deslizamiento de polimerasa, junto con fallas en mecanismos de reparación del ADN para corregir estos errores.",
          de: "Trinukleotid-Repeat-Expansionen treten durch DNA-Replikationsschlupf auf, wo repetitive Sequenzen Sekundärstrukturen bilden, die Polymerase-Schlupf verursachen, gekoppelt mit Versagen der DNA-Reparaturmechanismen, diese Fehler zu korrigieren.",
          nl: "Trinucleotide repeat expansies treden op door DNA replicatie slippage, waarbij repetitieve sequenties secundaire structuren vormen die polymerase slippage veroorzaken, gekoppeld aan falen van DNA reparatie mechanismen om deze fouten te corrigeren."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of CRISPR-Cas9 gene editing?",
          es: "¿Cuál es el mecanismo molecular de la edición génica CRISPR-Cas9?",
          de: "Was ist der molekulare Mechanismus der CRISPR-Cas9-Genbearbeitung?",
          nl: "Wat is het moleculaire mechanisme van CRISPR-Cas9 gen bewerking?"
        },
        options: [
          { en: "Guide RNA-directed DNA cleavage and repair", es: "Escisión de ADN dirigida por ARN guía y reparación", de: "Guide-RNA-gerichtete DNA-Spaltung und Reparatur", nl: "Gids RNA-gerichte DNA klieven en herstel" },
          { en: "Random DNA integration", es: "Integración aleatoria de ADN", de: "Zufällige DNA-Integration", nl: "Willekeurige DNA integratie" },
          { en: "Transcriptional activation only", es: "Solo activación transcripcional", de: "Nur transkriptionale Aktivierung", nl: "Alleen transcriptionele activering" },
          { en: "Protein degradation pathways", es: "Vías de degradación proteica", de: "Proteinabbauwege", nl: "Eiwit afbraak routes" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas9 uses a guide RNA to direct the Cas9 endonuclease to specific DNA sequences, creating double-strand breaks that are then repaired by cellular mechanisms, allowing precise insertions, deletions, or replacements.",
          es: "CRISPR-Cas9 usa un ARN guía para dirigir la endonucleasa Cas9 a secuencias específicas de ADN, creando roturas de doble cadena que luego son reparadas por mecanismos celulares, permitiendo inserciones, deleciones o reemplazos precisos.",
          de: "CRISPR-Cas9 verwendet eine Guide-RNA, um die Cas9-Endonuklease zu spezifischen DNA-Sequenzen zu dirigieren, wodurch Doppelstrangbrüche entstehen, die dann durch zelluläre Mechanismen repariert werden, was präzise Insertionen, Deletionen oder Ersetzungen ermöglicht.",
          nl: "CRISPR-Cas9 gebruikt een gids RNA om het Cas9 endonuclease naar specifieke DNA sequenties te leiden, wat dubbelstreng breuken creëert die vervolgens worden hersteld door cellulaire mechanismen, wat precieze inserties, deleties of vervangingen mogelijk maakt."
        }
      },
      {
        question: {
          en: "Which molecular process underlies the phenomenon of genetic anticipation?",
          es: "¿Qué proceso molecular subyace al fenómeno de anticipación genética?",
          de: "Welcher molekulare Prozess liegt dem Phänomen der genetischen Antizipation zugrunde?",
          nl: "Welk moleculair proces ligt ten grondslag aan het fenomeen van genetische anticipatie?"
        },
        options: [
          { en: "Progressive expansion of unstable repeat sequences", es: "Expansión progresiva de secuencias repetitivas inestables", de: "Progressive Expansion instabiler Repeat-Sequenzen", nl: "Progressieve expansie van instabiele repeat sequenties" },
          { en: "Accumulation of point mutations", es: "Acumulación de mutaciones puntuales", de: "Ansammlung von Punktmutationen", nl: "Ophoping van puntmutaties" },
          { en: "Chromosomal rearrangements", es: "Reordenamientos cromosómicos", de: "Chromosomale Umordnungen", nl: "Chromosomale herschikkingen" },
          { en: "Environmental mutagenesis", es: "Mutagénesis ambiental", de: "Umweltmutagenese", nl: "Omgevingsmutagenese" }
        ],
        correct: 0,
        explanation: {
          en: "Genetic anticipation results from the progressive expansion of unstable DNA repeat sequences through successive generations, leading to earlier onset and increased severity of disease with each transmission.",
          es: "La anticipación genética resulta de la expansión progresiva de secuencias repetitivas inestables de ADN a través de generaciones sucesivas, llevando a inicio más temprano y mayor severidad de enfermedad con cada transmisión.",
          de: "Genetische Antizipation resultiert aus der progressiven Expansion instabiler DNA-Repeat-Sequenzen durch aufeinanderfolgende Generationen, was zu früherem Auftreten und erhöhter Schwere der Krankheit bei jeder Übertragung führt.",
          nl: "Genetische anticipatie resulteert uit de progressieve expansie van instabiele DNA repeat sequenties door opeenvolgende generaties, wat leidt tot eerder begin en verhoogde ernst van ziekte bij elke overdracht."
        }
      },
      {
        question: {
          en: "What is the molecular basis of X-chromosome inactivation in female mammals?",
          es: "¿Cuál es la base molecular de la inactivación del cromosoma X en mamíferos hembras?",
          de: "Was ist die molekulare Grundlage der X-Chromosom-Inaktivierung bei weiblichen Säugetieren?",
          nl: "Wat is de moleculaire basis van X-chromosoom inactivering bij vrouwelijke zoogdieren?"
        },
        options: [
          { en: "XIST RNA coating and chromatin silencing", es: "Recubrimiento de ARN XIST y silenciamiento de cromatina", de: "XIST-RNA-Beschichtung und Chromatin-Silencing", nl: "XIST RNA bekleding en chromatine stillegging" },
          { en: "DNA deletion mechanisms", es: "Mecanismos de deleción del ADN", de: "DNA-Deletionsmechanismen", nl: "DNA deletie mechanismen" },
          { en: "Protein synthesis inhibition", es: "Inhibición de síntesis proteica", de: "Proteinsynthesehemmung", nl: "Eiwitsynthese inhibitie" },
          { en: "Mitochondrial dysfunction", es: "Disfunción mitocondrial", de: "Mitochondriale Dysfunktion", nl: "Mitochondriale disfunctie" }
        ],
        correct: 0,
        explanation: {
          en: "X-chromosome inactivation involves the XIST long non-coding RNA that coats one X chromosome, recruiting chromatin-modifying complexes that establish heterochromatin and silence gene expression across the entire chromosome.",
          es: "La inactivación del cromosoma X involucra el ARN largo no codificante XIST que recubre un cromosoma X, reclutando complejos modificadores de cromatina que establecen heterocromatina y silencian expresión génica a través de todo el cromosoma.",
          de: "X-Chromosom-Inaktivierung beinhaltet die XIST-lange nicht-kodierende RNA, die ein X-Chromosom beschichtet und Chromatin-modifizierende Komplexe rekrutiert, die Heterochromatin etablieren und Genexpression über das gesamte Chromosom stilllegen.",
          nl: "X-chromosoom inactivering omvat het XIST lange niet-coderende RNA dat een X-chromosoom bedekt, waarbij chromatine-modificerende complexen worden gerekruteerd die heterochromatine vormen en genexpressie over het hele chromosoom stilleggen."
        }
      },
      {
        question: {
          en: "Which mechanism explains the molecular basis of gene conversion in homologous recombination?",
          es: "¿Qué mecanismo explica la base molecular de la conversión génica en recombinación homóloga?",
          de: "Welcher Mechanismus erklärt die molekulare Grundlage der Genkonversion in homologer Rekombination?",
          nl: "Welk mechanisme verklaart de moleculaire basis van gen conversie in homologe recombinatie?"
        },
        options: [
          { en: "DNA mismatch repair in heteroduplex formation", es: "Reparación de desapareamientos de ADN en formación de heterodúplex", de: "DNA-Mismatch-Reparatur in Heteroduplex-Bildung", nl: "DNA mismatch reparatie bij heteroduplex vorming" },
          { en: "Random DNA recombination", es: "Recombinación aleatoria de ADN", de: "Zufällige DNA-Rekombination", nl: "Willekeurige DNA recombinatie" },
          { en: "Viral DNA integration", es: "Integración de ADN viral", de: "Virale DNA-Integration", nl: "Virale DNA integratie" },
          { en: "Chromosomal duplication errors", es: "Errores de duplicación cromosómica", de: "Chromosomale Duplikationsfehler", nl: "Chromosomale duplicatie fouten" }
        ],
        correct: 0,
        explanation: {
          en: "Gene conversion occurs when heteroduplex DNA forms during homologous recombination, and mismatch repair mechanisms resolve mismatched base pairs by converting one allele to match the other, resulting in non-reciprocal genetic transfer.",
          es: "La conversión génica ocurre cuando se forma ADN heterodúplex durante recombinación homóloga, y mecanismos de reparación de desapareamientos resuelven pares de bases desapareados convirtiendo un alelo para igualar el otro, resultando en transferencia genética no recíproca.",
          de: "Genkonversion tritt auf, wenn Heteroduplex-DNA während homologer Rekombination gebildet wird, und Mismatch-Reparaturmechanismen fehlgepaarte Basenpaare auflösen, indem sie ein Allel konvertieren, um dem anderen zu entsprechen, was zu nicht-reziprokem Gentransfer führt.",
          nl: "Gen conversie treedt op wanneer heteroduplex DNA vormt tijdens homologe recombinatie, en mismatch reparatie mechanismen lossen verkeerd gepaarde basenparen op door een allel te converteren om overeen te komen met het andere, wat resulteert in niet-reciproke genetische overdracht."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of nonsense-mediated mRNA decay (NMD)?",
          es: "¿Cuál es el mecanismo molecular de la degradación de ARNm mediada por sinsentido (NMD)?",
          de: "Was ist der molekulare Mechanismus des nonsense-vermittelten mRNA-Abbaus (NMD)?",
          nl: "Wat is het moleculaire mechanisme van nonsense-gemedieerde mRNA afbraak (NMD)?"
        },
        options: [
          { en: "Recognition of premature stop codons by surveillance complexes", es: "Reconocimiento de codones de parada prematuros por complejos de vigilancia", de: "Erkennung vorzeitiger Stopp-Codons durch Überwachungskomplexe", nl: "Herkenning van premature stop codons door surveillance complexen" },
          { en: "Random mRNA degradation", es: "Degradación aleatoria de ARNm", de: "Zufälliger mRNA-Abbau", nl: "Willekeurige mRNA afbraak" },
          { en: "Ribosome stalling only", es: "Solo parada de ribosomas", de: "Nur Ribosomen-Stillstand", nl: "Alleen ribosoom stilstand" },
          { en: "DNA damage responses", es: "Respuestas a daño del ADN", de: "DNA-Schadenreaktionen", nl: "DNA schade responsen" }
        ],
        correct: 0,
        explanation: {
          en: "NMD is triggered when ribosomes encounter premature stop codons, detected by the presence of exon junction complexes downstream of the stop codon, leading to recruitment of decay factors that degrade the aberrant mRNA.",
          es: "NMD se desencadena cuando ribosomas encuentran codones de parada prematuros, detectados por la presencia de complejos de unión de exones río abajo del codón de parada, llevando a reclutamiento de factores de degradación que degradan el ARNm aberrante.",
          de: "NMD wird ausgelöst, wenn Ribosomen auf vorzeitige Stopp-Codons treffen, die durch das Vorhandensein von Exon-Junction-Komplexen stromabwärts des Stopp-Codons erkannt werden, was zur Rekrutierung von Abbaupfaktoren führt, die die aberrante mRNA abbauen.",
          nl: "NMD wordt getriggerd wanneer ribosomen premature stop codons tegenkomen, gedetecteerd door de aanwezigheid van exon junction complexen stroomafwaarts van het stop codon, wat leidt tot rekrutering van afbraak factoren die de aberrante mRNA afbreken."
        }
      },
      {
        question: {
          en: "Which molecular mechanism underlies the process of DNA damage checkpoint activation?",
          es: "¿Qué mecanismo molecular subyace al proceso de activación de puntos de control de daño al ADN?",
          de: "Welcher molekulare Mechanismus liegt dem Prozess der DNA-Schaden-Checkpoint-Aktivierung zugrunde?",
          nl: "Welk moleculair mechanisme ligt ten grondslag aan het proces van DNA schade checkpoint activering?"
        },
        options: [
          { en: "ATM/ATR kinase signaling cascades", es: "Cascadas de señalización de quinasas ATM/ATR", de: "ATM/ATR-Kinase-Signalkaskaden", nl: "ATM/ATR kinase signalering cascades" },
          { en: "Direct DNA repair only", es: "Solo reparación directa del ADN", de: "Nur direkte DNA-Reparatur", nl: "Alleen directe DNA reparatie" },
          { en: "mRNA processing changes", es: "Cambios en el procesamiento de ARNm", de: "mRNA-Verarbeitungsänderungen", nl: "mRNA verwerkingsveranderingen" },
          { en: "Protein folding stress", es: "Estrés de plegamiento proteico", de: "Proteinfaltungsstress", nl: "Eiwitvouwing stress" }
        ],
        correct: 0,
        explanation: {
          en: "DNA damage checkpoints are activated by ATM and ATR kinases that detect DNA damage and replication stress, phosphorylating downstream effectors like p53 and Chk1/Chk2 to halt cell cycle progression and activate repair pathways.",
          es: "Los puntos de control de daño al ADN son activados por quinasas ATM y ATR que detectan daño al ADN y estrés de replicación, fosforilando efectores río abajo como p53 y Chk1/Chk2 para detener progresión del ciclo celular y activar vías de reparación.",
          de: "DNA-Schaden-Checkpoints werden durch ATM- und ATR-Kinasen aktiviert, die DNA-Schäden und Replikationsstress erkennen, nachgelagerte Effektoren wie p53 und Chk1/Chk2 phosphorylieren, um Zellzyklusprogression zu stoppen und Reparaturwege zu aktivieren.",
          nl: "DNA schade checkpoints worden geactiveerd door ATM en ATR kinasen die DNA schade en replicatie stress detecteren, waarbij downstream effectoren zoals p53 en Chk1/Chk2 worden gefosforyleerd om celcyclus progressie te stoppen en reparatie routes te activeren."
        }
      },
      {
        question: {
          en: "What is the molecular basis of epigenetic inheritance across generations?",
          es: "¿Cuál es la base molecular de la herencia epigenética a través de generaciones?",
          de: "Was ist die molekulare Grundlage epigenetischer Vererbung über Generationen?",
          nl: "Wat is de moleculaire basis van epigenetische overerving door generaties?"
        },
        options: [
          { en: "Maintenance of DNA methylation and chromatin marks", es: "Mantenimiento de metilación del ADN y marcas de cromatina", de: "Aufrechterhaltung von DNA-Methylierung und Chromatinmarkierungen", nl: "Behoud van DNA methylering en chromatine markeringen" },
          { en: "DNA sequence mutations", es: "Mutaciones en la secuencia de ADN", de: "DNA-Sequenzmutationen", nl: "DNA sequentie mutaties" },
          { en: "Protein degradation patterns", es: "Patrones de degradación proteica", de: "Proteinabbaupatter", nl: "Eiwit afbraak patronen" },
          { en: "Metabolic pathway changes", es: "Cambios en vías metabólicas", de: "Stoffwechselwegänderungen", nl: "Metabole route veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Epigenetic inheritance involves the transmission of DNA methylation patterns and histone modifications through cell divisions and sometimes across generations, mediated by maintenance methyltransferases and chromatin remodeling complexes.",
          es: "La herencia epigenética involucra la transmisión de patrones de metilación del ADN y modificaciones de histonas a través de divisiones celulares y a veces a través de generaciones, mediada por metiltransferasas de mantenimiento y complejos de remodelación de cromatina.",
          de: "Epigenetische Vererbung beinhaltet die Übertragung von DNA-Methylierungsmustern und Histonmodifikationen durch Zellteilungen und manchmal über Generationen, vermittelt durch Maintenance-Methyltransferasen und Chromatin-Remodeling-Komplexe.",
          nl: "Epigenetische overerving omvat de overdracht van DNA methyleringspatronen en histon modificaties door celdelingen en soms door generaties, gemedieerd door onderhouds methyltransferasen en chromatine remodeling complexen."
        }
      },
      {
        question: {
          en: "Which mechanism explains the molecular basis of co-transcriptional gene regulation?",
          es: "¿Qué mecanismo explica la base molecular de la regulación génica co-transcripcional?",
          de: "Welcher Mechanismus erklärt die molekulare Grundlage der co-transkriptionellen Genregulation?",
          nl: "Welk mechanisme verklaart de moleculaire basis van co-transcriptionele genregulatie?"
        },
        options: [
          { en: "RNA polymerase II CTD phosphorylation and factor recruitment", es: "Fosforilación del CTD de ARN polimerasa II y reclutamiento de factores", de: "RNA-Polymerase-II-CTD-Phosphorylierung und Faktorrekrutierung", nl: "RNA polymerase II CTD fosforylering en factor rekrutering" },
          { en: "Post-translational modifications only", es: "Solo modificaciones post-traduccionales", de: "Nur posttranslationale Modifikationen", nl: "Alleen posttranslationele modificaties" },
          { en: "DNA replication coupling", es: "Acoplamiento de replicación del ADN", de: "DNA-Replikationskopplung", nl: "DNA replicatie koppeling" },
          { en: "Membrane transport regulation", es: "Regulación del transporte de membrana", de: "Membrantransportregulation", nl: "Membraan transport regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Co-transcriptional regulation occurs through dynamic phosphorylation of RNA polymerase II C-terminal domain, which recruits specific factors for mRNA capping, splicing, and 3' end processing during transcription elongation.",
          es: "La regulación co-transcripcional ocurre a través de fosforilación dinámica del dominio C-terminal de ARN polimerasa II, que recluta factores específicos para encapsulado de ARNm, empalme y procesamiento del extremo 3' durante elongación transcripcional.",
          de: "Co-transkriptionelle Regulation erfolgt durch dynamische Phosphorylierung der C-terminalen Domäne der RNA-Polymerase II, die spezifische Faktoren für mRNA-Capping, Spleißen und 3'-Ende-Verarbeitung während Transkriptionselongation rekrutiert.",
          nl: "Co-transcriptionele regulatie treedt op door dynamische fosforylering van de RNA polymerase II C-terminale domein, die specifieke factoren rekruteert voor mRNA capping, splicing en 3' eind verwerking tijdens transcriptie elongatie."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of telomerase-independent telomere maintenance (ALT)?",
          es: "¿Cuál es el mecanismo molecular del mantenimiento de telómeros independiente de telomerasa (ALT)?",
          de: "Was ist der molekulare Mechanismus der Telomerase-unabhängigen Telomer-Maintenance (ALT)?",
          nl: "Wat is het moleculaire mechanisme van telomerase-onafhankelijk telomeer onderhoud (ALT)?"
        },
        options: [
          { en: "Homologous recombination between telomeric sequences", es: "Recombinación homóloga entre secuencias teloméricas", de: "Homologe Rekombination zwischen telomeren Sequenzen", nl: "Homologe recombinatie tussen telomere sequenties" },
          { en: "DNA polymerase extension", es: "Extensión de ADN polimerasa", de: "DNA-Polymerase-Extension", nl: "DNA polymerase extensie" },
          { en: "Histone deacetylation", es: "Deacetilación de histonas", de: "Histondeacetylierung", nl: "Histon deacetylering" },
          { en: "mRNA splicing changes", es: "Cambios en el empalme de ARNm", de: "mRNA-Spleißänderungen", nl: "mRNA splicing veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "ALT pathway maintains telomeres through homologous recombination mechanisms that use existing telomeric DNA as templates for extension, involving break-induced replication and formation of ALT-associated PML bodies.",
          es: "La vía ALT mantiene telómeros a través de mecanismos de recombinación homóloga que usan ADN telomérico existente como plantillas para extensión, involucrando replicación inducida por ruptura y formación de cuerpos PML asociados a ALT.",
          de: "Der ALT-Weg erhält Telomere durch homologe Rekombinationsmechanismen aufrecht, die vorhandene telomere DNA als Vorlagen für Verlängerung verwenden, wobei bruchinduzierten Replikation und Bildung ALT-assoziierter PML-Körper beteiligt sind.",
          nl: "ALT route houdt telomeren in stand door homologe recombinatie mechanismen die bestaand telomeer DNA gebruiken als templates voor extensie, waarbij breuk-geïnduceerde replicatie en vorming van ALT-geassocieerde PML lichamen betrokken zijn."
        }
      },
      {
        question: {
          en: "Which molecular mechanism underlies the process of chromatin looping in gene regulation?",
          es: "¿Qué mecanismo molecular subyace al proceso de formación de bucles de cromatina en regulación génica?",
          de: "Welcher molekulare Mechanismus liegt dem Prozess der Chromatin-Schleifenbildung in der Genregulation zugrunde?",
          nl: "Welk moleculair mechanisme ligt ten grondslag aan het proces van chromatine looping bij genregulatie?"
        },
        options: [
          { en: "Cohesion and condensin complex-mediated interactions", es: "Interacciones mediadas por complejos de cohesina y condensina", de: "Kohäsin- und Kondensin-Komplex-vermittelte Interaktionen", nl: "Cohesine en condensin complex-gemedieerde interacties" },
          { en: "Random DNA bending", es: "Curvatura aleatoria del ADN", de: "Zufällige DNA-Biegung", nl: "Willekeurige DNA buiging" },
          { en: "Protein degradation cycles", es: "Ciclos de degradación proteica", de: "Proteinabbauzyklen", nl: "Eiwit afbraak cycli" },
          { en: "RNA polymerase backtracking", es: "Retroceso de ARN polimerasa", de: "RNA-Polymerase-Backtracking", nl: "RNA polymerase backtracking" }
        ],
        correct: 0,
        explanation: {
          en: "Chromatin looping brings distant regulatory elements into proximity through cohesion and condensin complexes, along with CTCF and mediator proteins, creating topologically associating domains that facilitate enhancer-promoter interactions.",
          es: "La formación de bucles de cromatina acerca elementos regulatorios distantes a través de complejos de cohesina y condensina, junto con proteínas CTCF y mediadoras, creando dominios de asociación topológica que facilitan interacciones potenciador-promotor.",
          de: "Chromatin-Schleifenbildung bringt entfernte regulatorische Elemente durch Kohäsin- und Kondensin-Komplexe zusammen mit CTCF- und Mediator-Proteinen in Nähe, wodurch topologisch assoziierenden Domänen entstehen, die Enhancer-Promotor-Interaktionen erleichtern.",
          nl: "Chromatine looping brengt verre regulatoire elementen dichterbij door cohesine en condensin complexen, samen met CTCF en mediator eiwitten, wat topologisch associërende domeinen creëert die enhancer-promotor interacties faciliteren."
        }
      },
      {
        question: {
          en: "What is the molecular basis of RNA editing in gene expression regulation?",
          es: "¿Cuál es la base molecular de la edición de ARN en la regulación de expresión génica?",
          de: "Was ist die molekulare Grundlage der RNA-Editierung in der Genexpressionsregulation?",
          nl: "Wat is de moleculaire basis van RNA bewerking bij genexpressie regulatie?"
        },
        options: [
          { en: "ADAR enzymes catalyzing adenosine to inosine conversion", es: "Enzimas ADAR catalizando conversión de adenosina a inosina", de: "ADAR-Enzyme katalysieren Adenosin-zu-Inosin-Konversion", nl: "ADAR enzymen katalyseren adenosine naar inosine conversie" },
          { en: "DNA methylation changes", es: "Cambios en metilación del ADN", de: "DNA-Methylierungsänderungen", nl: "DNA methylering veranderingen" },
          { en: "Histone modification patterns", es: "Patrones de modificación de histonas", de: "Histonmodifikationspatter", nl: "Histon modificatie patronen" },
          { en: "Ribosome assembly defects", es: "Defectos de ensamblaje ribosomal", de: "Ribosomen-Assemblierungsdefekte", nl: "Ribosoom assemblage defecten" }
        ],
        correct: 0,
        explanation: {
          en: "RNA editing involves ADAR enzymes that convert adenosine to inosine in double-stranded RNA regions, which is read as guanosine during translation, potentially altering amino acid sequences and creating protein diversity.",
          es: "La edición de ARN involucra enzimas ADAR que convierten adenosina a inosina en regiones de ARN de doble cadena, que se lee como guanosina durante traducción, alterando potencialmente secuencias de aminoácidos y creando diversidad proteica.",
          de: "RNA-Editierung beinhaltet ADAR-Enzyme, die Adenosin zu Inosin in doppelsträngigen RNA-Regionen konvertieren, was als Guanosin während der Translation gelesen wird, was potentiell Aminosäuresequenzen verändert und Proteindiversität schafft.",
          nl: "RNA bewerking omvat ADAR enzymen die adenosine naar inosine converteren in dubbelstreng RNA regio's, wat gelezen wordt als guanosine tijdens translatie, wat mogelijk aminozuursequenties verandert en eiwit diversiteit creëert."
        }
      },
      {
        question: {
          en: "Which mechanism explains the molecular basis of dosage compensation in sex determination?",
          es: "¿Qué mecanismo explica la base molecular de la compensación de dosis en determinación sexual?",
          de: "Welcher Mechanismus erklärt die molekulare Grundlage der Dosiskompensation in der Geschlechtsbestimmung?",
          nl: "Welk mechanisme verklaart de moleculaire basis van dosering compensatie bij geslachtsbepaling?"
        },
        options: [
          { en: "X-chromosome inactivation and dosage-sensitive gene regulation", es: "Inactivación del cromosoma X y regulación génica sensible a dosis", de: "X-Chromosom-Inaktivierung und dosisempfindliche Genregulation", nl: "X-chromosoom inactivering en dosering-gevoelige genregulatie" },
          { en: "Random gene deletion", es: "Deleción génica aleatoria", de: "Zufällige Gendeletion", nl: "Willekeurige gen deletie" },
          { en: "Mitochondrial inheritance", es: "Herencia mitocondrial", de: "Mitochondriale Vererbung", nl: "Mitochondriale overerving" },
          { en: "Cytoplasmic streaming", es: "Corriente citoplasmática", de: "Zytoplasmaströmung", nl: "Cytoplasmatische stroming" }
        ],
        correct: 0,
        explanation: {
          en: "Dosage compensation equalizes X-linked gene expression between sexes through mechanisms like X-chromosome inactivation in mammals, ensuring that dosage-sensitive genes maintain proper stoichiometry despite different X-chromosome numbers.",
          es: "La compensación de dosis iguala expresión de genes ligados al X entre sexos a través de mecanismos como inactivación del cromosoma X en mamíferos, asegurando que genes sensibles a dosis mantengan estequiometría adecuada a pesar de diferentes números de cromosomas X.",
          de: "Dosiskompensation gleicht X-gebundene Genexpression zwischen Geschlechtern durch Mechanismen wie X-Chromosom-Inaktivierung bei Säugetieren aus, wodurch sichergestellt wird, dass dosisempfindliche Gene trotz unterschiedlicher X-Chromosomenzahlen die richtige Stöchiometrie beibehalten.",
          nl: "Dosering compensatie brengt X-gebonden genexpressie tussen geslachten in evenwicht door mechanismen zoals X-chromosoom inactivering bij zoogdieren, wat verzekert dat dosering-gevoelige genen juiste stoichiometrie behouden ondanks verschillende X-chromosoom aantallen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of ribosome-associated quality control (RQC)?",
          es: "¿Cuál es el mecanismo molecular del control de calidad asociado al ribosoma (RQC)?",
          de: "Was ist der molekulare Mechanismus der Ribosom-assoziierten Qualitätskontrolle (RQC)?",
          nl: "Wat is het moleculaire mechanisme van ribosoom-geassocieerde kwaliteitscontrole (RQC)?"
        },
        options: [
          { en: "Ribosome rescue and nascent protein degradation", es: "Rescate de ribosomas y degradación de proteínas nacientes", de: "Ribosom-Rettung und nascente Proteinabbau", nl: "Ribosoom redding en beginnende eiwit afbraak" },
          { en: "DNA repair activation", es: "Activación de reparación del ADN", de: "DNA-Reparaturaktivierung", nl: "DNA reparatie activering" },
          { en: "mRNA cap modifications", es: "Modificaciones del cap de ARNm", de: "mRNA-Cap-Modifikationen", nl: "mRNA cap modificaties" },
          { en: "Histone deacetylation", es: "Deacetilación de histonas", de: "Histondeacetylierung", nl: "Histon deacetylering" }
        ],
        correct: 0,
        explanation: {
          en: "RQC monitors stalled ribosomes and aberrant translation, triggering ribosome rescue mechanisms and targeting nascent polypeptides for degradation through the ubiquitin-proteasome system to prevent toxic protein accumulation.",
          es: "RQC monitorea ribosomas estancados y traducción aberrante, desencadenando mecanismos de rescate ribosomal y dirigiendo polipéptidos nacientes para degradación a través del sistema ubiquitina-proteasoma para prevenir acumulación de proteínas tóxicas.",
          de: "RQC überwacht stillgelegte Ribosomen und aberrante Translation, löst Ribosom-Rettungsmechanismen aus und zielt nascente Polypeptide für Abbau durch das Ubiquitin-Proteasom-System ab, um toxische Proteinakkumulation zu verhindern.",
          nl: "RQC monitort vastgelopen ribosomen en aberrante translatie, wat ribosoom redding mechanismen triggert en beginnende polypeptiden richt voor afbraak via het ubiquitine-proteasoom systeem om toxische eiwit ophoping te voorkomen."
        }
      },
      {
        question: {
          en: "Which molecular process underlies the phenomenon of genetic suppression?",
          es: "¿Qué proceso molecular subyace al fenómeno de supresión genética?",
          de: "Welcher molekulare Prozess liegt dem Phänomen der genetischen Suppression zugrunde?",
          nl: "Welk moleculair proces ligt ten grondslag aan het fenomeen van genetische suppressie?"
        },
        options: [
          { en: "Compensatory mutations restoring protein function", es: "Mutaciones compensatorias restaurando función proteica", de: "Kompensatorische Mutationen, die Proteinfunktion wiederherstellen", nl: "Compensatoire mutaties die eiwitfunctie herstellen" },
          { en: "Gene silencing mechanisms", es: "Mecanismos de silenciamiento génico", de: "Gen-Silencing-Mechanismen", nl: "Gen stillegging mechanismen" },
          { en: "Chromosome segregation errors", es: "Errores de segregación cromosómica", de: "Chromosomensegregationsfehler", nl: "Chromosoom segregatie fouten" },
          { en: "Metabolic pathway inhibition", es: "Inhibición de vías metabólicas", de: "Stoffwechselweginhibition", nl: "Metabole route inhibitie" }
        ],
        correct: 0,
        explanation: {
          en: "Genetic suppression occurs when secondary mutations compensate for the effects of primary mutations, either by restoring protein structure/function (intragenic) or by affecting interacting proteins/pathways (intergenic suppression).",
          es: "La supresión genética ocurre cuando mutaciones secundarias compensan los efectos de mutaciones primarias, ya sea restaurando estructura/función proteica (intragénica) o afectando proteínas/vías interactuantes (supresión intergénica).",
          de: "Genetische Suppression tritt auf, wenn sekundäre Mutationen die Effekte primärer Mutationen kompensieren, entweder durch Wiederherstellung von Proteinstruktur/-funktion (intragen) oder durch Beeinflussung interagierender Proteine/Wege (intergene Suppression).",
          nl: "Genetische suppressie treedt op wanneer secundaire mutaties de effecten van primaire mutaties compenseren, ofwel door eiwit structuur/functie te herstellen (intrageen) of door interacterende eiwitten/routes te beïnvloeden (intergene suppressie)."
        }
      },
      {
        question: {
          en: "What is the molecular basis of transcriptional memory in gene expression?",
          es: "¿Cuál es la base molecular de la memoria transcripcional en expresión génica?",
          de: "Was ist die molekulare Grundlage des transkriptionellen Gedächtnisses in der Genexpression?",
          nl: "Wat is de moleculaire basis van transcriptioneel geheugen bij genexpressie?"
        },
        options: [
          { en: "Persistent chromatin modifications and poised RNA polymerase", es: "Modificaciones persistentes de cromatina y ARN polimerasa preparada", de: "Persistente Chromatinmodifikationen und bereite RNA-Polymerase", nl: "Persistente chromatine modificaties en poised RNA polymerase" },
          { en: "DNA sequence amplification", es: "Amplificación de secuencia de ADN", de: "DNA-Sequenzverstärkung", nl: "DNA sequentie amplificatie" },
          { en: "Protein synthesis rates", es: "Tasas de síntesis proteica", de: "Proteinsyntheserate", nl: "Eiwitsynthese snelheden" },
          { en: "Mitochondrial biogenesis", es: "Biogénesis mitocondrial", de: "Mitochondriale Biogenese", nl: "Mitochondriale biogenese" }
        ],
        correct: 0,
        explanation: {
          en: "Transcriptional memory involves persistent chromatin modifications (H3K4me3, H3K27ac) and poised RNA polymerase II at previously active genes, enabling rapid reactivation upon appropriate signals while maintaining gene expression history.",
          es: "La memoria transcripcional involucra modificaciones persistentes de cromatina (H3K4me3, H3K27ac) y ARN polimerasa II preparada en genes previamente activos, permitiendo reactivación rápida ante señales apropiadas mientras mantiene historial de expresión génica.",
          de: "Transkriptionelles Gedächtnis beinhaltet persistente Chromatinmodifikationen (H3K4me3, H3K27ac) und bereite RNA-Polymerase II an zuvor aktiven Genen, was schnelle Reaktivierung bei geeigneten Signalen ermöglicht, während Genexpressionsgeschichte erhalten bleibt.",
          nl: "Transcriptioneel geheugen omvat persistente chromatine modificaties (H3K4me3, H3K27ac) en poised RNA polymerase II bij voorheen actieve genen, wat snelle reactivering mogelijk maakt bij juiste signalen terwijl genexpressie geschiedenis wordt behouden."
        }
      },
      {
        question: {
          en: "Which mechanism explains the molecular basis of position-effect variegation?",
          es: "¿Qué mecanismo explica la base molecular de la variegación por efecto de posición?",
          de: "Welcher Mechanismus erklärt die molekulare Grundlage der Positionseffekt-Variegation?",
          nl: "Welk mechanisme verklaart de moleculaire basis van positie-effect variegatie?"
        },
        options: [
          { en: "Heterochromatin spreading and stochastic silencing", es: "Propagación de heterocromatina y silenciamiento estocástico", de: "Heterochromatinausbreitung und stochastisches Silencing", nl: "Heterochromatine verspreiding en stochastische stillegging" },
          { en: "DNA replication errors", es: "Errores de replicación del ADN", de: "DNA-Replikationsfehler", nl: "DNA replicatie fouten" },
          { en: "Translation fidelity changes", es: "Cambios en fidelidad de traducción", de: "Änderungen der Translationstreue", nl: "Translatie trouwheid veranderingen" },
          { en: "Metabolic enzyme regulation", es: "Regulación de enzimas metabólicas", de: "Regulation metabolischer Enzyme", nl: "Metabole enzym regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Position-effect variegation results from stochastic spreading of heterochromatin from nearby repetitive elements, causing variegated silencing of euchromatic genes that are relocated near heterochromatic regions through chromosomal rearrangements.",
          es: "La variegación por efecto de posición resulta de propagación estocástica de heterocromatina de elementos repetitivos cercanos, causando silenciamiento variegado de genes eucromáticos que son reubicados cerca de regiones hetrocromáticas a través de reordenamientos cromosómicos.",
          de: "Positionseffekt-Variegation resultiert aus stochastischer Ausbreitung von Heterochromatin von nahen repetitiven Elementen, was variegierte Stilllegung euchromater Gene verursacht, die durch chromosomale Umordnungen in die Nähe heterochromatischer Regionen verlagert werden.",
          nl: "Positie-effect variegatie resulteert uit stochastische verspreiding van heterochromatine van nabije repetitieve elementen, wat gevarieerde stillegging veroorzaakt van euchromatische genen die door chromosomale herschikkingen worden verplaatst naar heterochromatische regio's."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of DNA damage-induced mutagenesis?",
          es: "¿Cuál es el mecanismo molecular de la mutagénesis inducida por daño al ADN?",
          de: "Was ist der molekulare Mechanismus der DNA-schadeninduzierten Mutagenese?",
          nl: "Wat is het moleculaire mechanisme van DNA schade-geïnduceerde mutagenese?"
        },
        options: [
          { en: "Error-prone repair and translesion synthesis", es: "Reparación propensa a errores y síntesis translesional", de: "Fehleranfällige Reparatur und Transläsionssynthese", nl: "Foutgevoelige reparatie en translesie synthese" },
          { en: "Perfect DNA repair always", es: "Siempre reparación perfecta del ADN", de: "Immer perfekte DNA-Reparatur", nl: "Altijd perfecte DNA reparatie" },
          { en: "mRNA degradation pathways", es: "Vías de degradación de ARNm", de: "mRNA-Abbauwege", nl: "mRNA afbraak routes" },
          { en: "Protein quality control", es: "Control de calidad proteica", de: "Proteinqualitätskontrolle", nl: "Eiwit kwaliteitscontrole" }
        ],
        correct: 0,
        explanation: {
          en: "DNA damage can induce mutations through error-prone repair mechanisms and translesion synthesis polymerases that bypass lesions but introduce errors, or through misrepair of damage that creates permanent sequence changes.",
          es: "El daño al ADN puede inducir mutaciones a través de mecanismos de reparación propensos a errores y polimerasas de síntesis translesional que sortean lesiones pero introducen errores, o a través de reparación errónea de daño que crea cambios permanentes de secuencia.",
          de: "DNA-Schäden können Mutationen durch fehleranfällige Reparaturmechanismen und Transläsionssynthese-Polymerasen induzieren, die Läsionen umgehen aber Fehler einführen, oder durch Fehlreparatur von Schäden, die permanente Sequenzänderungen verursacht.",
          nl: "DNA schade kan mutaties induceren door foutgevoelige reparatie mechanismen en translesie synthese polymerasen die lesies omzeilen maar fouten introduceren, of door verkeerde reparatie van schade die permanente sequentie veranderingen creëert."
        }
      },
      {
        question: {
          en: "Which molecular process underlies the phenomenon of chromosomal instability in cancer?",
          es: "¿Qué proceso molecular subyace al fenómeno de inestabilidad cromosómica en cáncer?",
          de: "Welcher molekulare Prozess liegt dem Phänomen chromosomaler Instabilität bei Krebs zugrunde?",
          nl: "Welk moleculair proces ligt ten grondslag aan het fenomeen van chromosomale instabiliteit bij kanker?"
        },
        options: [
          { en: "Defective DNA repair and checkpoint pathways", es: "Vías defectuosas de reparación del ADN y puntos de control", de: "Defekte DNA-Reparatur- und Checkpoint-Wege", nl: "Defecte DNA reparatie en checkpoint routes" },
          { en: "Enhanced protein synthesis", es: "Síntesis proteica mejorada", de: "Verbesserte Proteinsynthese", nl: "Verbeterde eiwitsynthese" },
          { en: "Increased metabolic activity", es: "Actividad metabólica aumentada", de: "Erhöhte metabolische Aktivität", nl: "Verhoogde metabolische activiteit" },
          { en: "Normal cell division control", es: "Control normal de división celular", de: "Normale Zellteilungskontrolle", nl: "Normale celdelings controle" }
        ],
        correct: 0,
        explanation: {
          en: "Chromosomal instability in cancer results from defects in DNA repair pathways (BRCA1/2, MMR), cell cycle checkpoints (p53, ATM), and chromosome segregation machinery, leading to accumulation of genomic alterations that drive tumorigenesis.",
          es: "La inestabilidad cromosómica en cáncer resulta de defectos en vías de reparación del ADN (BRCA1/2, MMR), puntos de control del ciclo celular (p53, ATM), y maquinaria de segregación cromosómica, llevando a acumulación de alteraciones genómicas que impulsan tumorigénesis.",
          de: "Chromosomale Instabilität bei Krebs resultiert aus Defekten in DNA-Reparaturwegen (BRCA1/2, MMR), Zellzyklus-Checkpoints (p53, ATM) und Chromosomensegregationsmaschinerie, was zur Akkumulation genomischer Alterationen führt, die Tumorigenese antreiben.",
          nl: "Chromosomale instabiliteit bij kanker resulteert uit defecten in DNA reparatie routes (BRCA1/2, MMR), celcyclus checkpoints (p53, ATM), en chromosoom segregatie machinerie, wat leidt tot ophoping van genomische alteraties die tumorigenese aandrijven."
        }
      },
      {
        question: {
          en: "What is the molecular basis of RNA polymerase II pausing in transcriptional regulation?",
          es: "¿Cuál es la base molecular de la pausa de ARN polimerasa II en regulación transcripcional?",
          de: "Was ist die molekulare Grundlage des RNA-Polymerase-II-Pausierens in der transkriptionellen Regulation?",
          nl: "Wat is de moleculaire basis van RNA polymerase II pauzeren bij transcriptionele regulatie?"
        },
        options: [
          { en: "NELF and DSIF factor-mediated promoter-proximal pausing", es: "Pausa proximal al promotor mediada por factores NELF y DSIF", de: "NELF- und DSIF-Faktor-vermittelte Promotor-proximale Pausierung", nl: "NELF en DSIF factor-gemedieerde promotor-proximale pauzering" },
          { en: "DNA methylation only", es: "Solo metilación del ADN", de: "Nur DNA-Methylierung", nl: "Alleen DNA methylering" },
          { en: "Ribosome collision", es: "Colisión de ribosomas", de: "Ribosomkollision", nl: "Ribosoom botsing" },
          { en: "mRNA capping defects", es: "Defectos de encapsulado de ARNm", de: "mRNA-Capping-Defekte", nl: "mRNA capping defecten" }
        ],
        correct: 0,
        explanation: {
          en: "RNA polymerase II pausing occurs through NELF and DSIF factors that cause polymerase to pause shortly after transcription initiation, providing a regulatory checkpoint for gene expression control and co-transcriptional processes.",
          es: "La pausa de ARN polimerasa II ocurre a través de factores NELF y DSIF que causan que la polimerasa haga pausa poco después de iniciación transcripcional, proporcionando un punto de control regulatorio para control de expresión génica y procesos co-transcripcionales.",
          de: "RNA-Polymerase-II-Pausierung erfolgt durch NELF- und DSIF-Faktoren, die die Polymerase kurz nach Transkriptionsinitiation pausieren lassen, wodurch ein regulatorischer Checkpoint für Genexpressionskontrolle und co-transkriptionelle Prozesse bereitgestellt wird.",
          nl: "RNA polymerase II pauzering treedt op via NELF en DSIF factoren die de polymerase kort na transcriptie initiatie laten pauzeren, wat een regulatoir controlepunt biedt voor genexpressie controle en co-transcriptionele processen."
        }
      },
      {
        question: {
          en: "Which mechanism explains the molecular basis of hybrid incompatibility in speciation?",
          es: "¿Qué mecanismo explica la base molecular de incompatibilidad híbrida en especiación?",
          de: "Welcher Mechanismus erklärt die molekulare Grundlage der Hybridinkompatibilität in der Speziation?",
          nl: "Welk mechanisme verklaart de moleculaire basis van hybride incompatibiliteit bij soortvorming?"
        },
        options: [
          { en: "Dobzhansky-Muller incompatibilities and gene interaction networks", es: "Incompatibilidades de Dobzhansky-Muller y redes de interacción génica", de: "Dobzhansky-Muller-Inkompatibilitäten und Geninteraktionsnetzwerke", nl: "Dobzhansky-Muller incompatibiliteiten en gen interactie netwerken" },
          { en: "Simple dominance effects", es: "Efectos simples de dominancia", de: "Einfache Dominanzeffekte", nl: "Eenvoudige dominantie effecten" },
          { en: "Environmental adaptation only", es: "Solo adaptación ambiental", de: "Nur Umweltanpassung", nl: "Alleen omgevings aanpassing" },
          { en: "Random genetic drift", es: "Deriva genética aleatoria", de: "Zufällige genetische Drift", nl: "Willekeurige genetische drift" }
        ],
        correct: 0,
        explanation: {
          en: "Hybrid incompatibility arises from Dobzhansky-Muller incompatibilities where independently evolved alleles in separate populations create negative epistatic interactions when brought together in hybrids, disrupting essential cellular processes.",
          es: "La incompatibilidad híbrida surge de incompatibilidades de Dobzhansky-Muller donde alelos evolucionados independientemente en poblaciones separadas crean interacciones epistáticas negativas cuando se juntan en híbridos, interrumpiendo procesos celulares esenciales.",
          de: "Hybridinkompatibilität entsteht aus Dobzhansky-Muller-Inkompatibilitäten, wo unabhängig evolvierte Allele in getrennten Populationen negative epistatische Interaktionen schaffen, wenn sie in Hybriden zusammengebracht werden, wodurch wesentliche zelluläre Prozesse gestört werden.",
          nl: "Hybride incompatibiliteit ontstaat uit Dobzhansky-Muller incompatibiliteiten waarbij onafhankelijk geëvolueerde allelen in gescheiden populaties negatieve epistatische interacties creëren wanneer ze samenkomen in hybriden, wat essentiële cellulaire processen verstoort."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of stress-induced mutagenesis?",
          es: "¿Cuál es el mecanismo molecular de la mutagénesis inducida por estrés?",
          de: "Was ist der molekulare Mechanismus der stressinduzierten Mutagenese?",
          nl: "Wat is het moleculaire mechanisme van stress-geïnduceerde mutagenese?"
        },
        options: [
          { en: "Error-prone DNA polymerases and SOS response activation", es: "Polimerasas de ADN propensas a errores y activación de respuesta SOS", de: "Fehleranfällige DNA-Polymerasen und SOS-Antwortaktivierung", nl: "Foutgevoelige DNA polymerasen en SOS respons activering" },
          { en: "Perfect DNA replication fidelity", es: "Fidelidad perfecta de replicación del ADN", de: "Perfekte DNA-Replikationstreue", nl: "Perfecte DNA replicatie trouwheid" },
          { en: "Enhanced proofreading mechanisms", es: "Mecanismos de corrección mejorados", de: "Verbesserte Korrekturmechanismen", nl: "Verbeterde correctie mechanismen" },
          { en: "Reduced metabolic activity", es: "Actividad metabólica reducida", de: "Reduzierte metabolische Aktivität", nl: "Verminderde metabolische activiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Stress-induced mutagenesis involves activation of error-prone DNA polymerases (Pol V, Pol IV in bacteria) through SOS response pathways, deliberately increasing mutation rates to generate genetic diversity for potential stress adaptation.",
          es: "La mutagénesis inducida por estrés involucra activación de polimerasas de ADN propensas a errores (Pol V, Pol IV en bacterias) a través de vías de respuesta SOS, aumentando deliberadamente tasas de mutación para generar diversidad genética para adaptación potencial al estrés.",
          de: "Stressinduzierte Mutagenese beinhaltet Aktivierung fehleranfälliger DNA-Polymerasen (Pol V, Pol IV in Bakterien) durch SOS-Antwortwege, wodurch Mutationsraten bewusst erhöht werden, um genetische Diversität für potentielle Stressanpassung zu erzeugen.",
          nl: "Stress-geïnduceerde mutagenese omvat activering van foutgevoelige DNA polymerasen (Pol V, Pol IV in bacteriën) via SOS respons routes, waarbij mutatiepercentages bewust worden verhoogd om genetische diversiteit te genereren voor potentiële stress aanpassing."
        }
      },
      {
        question: {
          en: "Which molecular process underlies the regulation of alternative polyadenylation?",
          es: "¿Qué proceso molecular subyace a la regulación de poliadenilación alternativa?",
          de: "Welcher molekulare Prozess liegt der Regulation alternativer Polyadenylierung zugrunde?",
          nl: "Welk moleculair proces ligt ten grondslag aan de regulatie van alternatieve polyadenylering?"
        },
        options: [
          { en: "Competition between cleavage and polyadenylation factors", es: "Competencia entre factores de escisión y poliadenilación", de: "Konkurrenz zwischen Spaltungs- und Polyadenylierungsfaktoren", nl: "Competitie tussen klieven en polyadenylering factoren" },
          { en: "DNA methylation changes", es: "Cambios en metilación del ADN", de: "DNA-Methylierungsänderungen", nl: "DNA methylering veranderingen" },
          { en: "Histone modification patterns", es: "Patrones de modificación de histonas", de: "Histonmodifikationspatter", nl: "Histon modificatie patronen" },
          { en: "Translation initiation control", es: "Control de iniciación de traducción", de: "Translationsinitiationskontrolle", nl: "Translatie initiatie controle" }
        ],
        correct: 0,
        explanation: {
          en: "Alternative polyadenylation is regulated by competition between different cleavage and polyadenylation factors (CFI, CFII, CstF, CPF) that recognize different polyadenylation signals, influenced by RNA-binding proteins and cellular context.",
          es: "La poliadenilación alternativa es regulada por competencia entre diferentes factores de escisión y poliadenilación (CFI, CFII, CstF, CPF) que reconocen diferentes señales de poliadenilación, influenciados por proteínas de unión a ARN y contexto celular.",
          de: "Alternative Polyadenylierung wird durch Konkurrenz zwischen verschiedenen Spaltungs- und Polyadenylierungsfaktoren (CFI, CFII, CstF, CPF) reguliert, die verschiedene Polyadenylierungssignale erkennen, beeinflusst durch RNA-bindende Proteine und zellulären Kontext.",
          nl: "Alternatieve polyadenylering wordt gereguleerd door competitie tussen verschillende klieven en polyadenylering factoren (CFI, CFII, CstF, CPF) die verschillende polyadenylering signalen herkennen, beïnvloed door RNA-bindende eiwitten en cellulaire context."
        }
      },
      {
        question: {
          en: "What is the molecular basis of transgenerational epigenetic inheritance?",
          es: "¿Cuál es la base molecular de la herencia epigenética transgeneracional?",
          de: "Was ist die molekulare Grundlage transgenerationaler epigenetischer Vererbung?",
          nl: "Wat is de moleculaire basis van transgenerationele epigenetische overerving?"
        },
        options: [
          { en: "Germline-transmitted chromatin modifications and small RNAs", es: "Modificaciones de cromatina transmitidas por línea germinal y ARNs pequeños", de: "Keimbahn-übertragene Chromatinmodifikationen und kleine RNAs", nl: "Kiembaan-overgedragen chromatine modificaties en kleine RNAs" },
          { en: "DNA sequence mutations only", es: "Solo mutaciones en secuencia de ADN", de: "Nur DNA-Sequenzmutationen", nl: "Alleen DNA sequentie mutaties" },
          { en: "Protein aggregation inheritance", es: "Herencia de agregación proteica", de: "Proteinaggregationsvererbung", nl: "Eiwit aggregatie overerving" },
          { en: "Metabolic pathway transmission", es: "Transmisión de vías metabólicas", de: "Stoffwechselwegübertragung", nl: "Metabole route overdracht" }
        ],
        correct: 0,
        explanation: {
          en: "Transgenerational epigenetic inheritance involves transmission of chromatin modifications and small RNAs through gametes that escape reprogramming, allowing parental environmental experiences to influence offspring phenotypes across generations.",
          es: "La herencia epigenética transgeneracional involucra transmisión de modificaciones de cromatina y ARNs pequeños a través de gametos que escapan reprogramación, permitiendo que experiencias ambientales parentales influyan fenotipos de descendencia a través de generaciones.",
          de: "Transgenerationale epigenetische Vererbung beinhaltet Übertragung von Chromatinmodifikationen und kleinen RNAs durch Gameten, die der Reprogrammierung entgehen, wodurch elterliche Umwelterfahrungen Nachkommensphänotypen über Generationen beeinflussen können.",
          nl: "Transgenerationele epigenetische overerving omvat overdracht van chromatine modificaties en kleine RNAs via gameten die herprogrammering ontsnappen, waardoor ouderlijke omgevingservaringen nakomelingen fenotypes door generaties kunnen beïnvloeden."
        }
      },
      {
        question: {
          en: "Which mechanism explains the molecular basis of RNA-directed DNA methylation (RdDM)?",
          es: "¿Qué mecanismo explica la base molecular de la metilación del ADN dirigida por ARN (RdDM)?",
          de: "Welcher Mechanismus erklärt die molekulare Grundlage der RNA-dirigierten DNA-Methylierung (RdDM)?",
          nl: "Welk mechanisme verklaart de moleculaire basis van RNA-gerichte DNA methylering (RdDM)?"
        },
        options: [
          { en: "Small RNA-guided recruitment of methyltransferases", es: "Reclutamiento de metiltransferasas guiado por ARNs pequeños", de: "Kleine RNA-geführte Rekrutierung von Methyltransferasen", nl: "Kleine RNA-geleide rekrutering van methyltransferasen" },
          { en: "Random DNA methylation", es: "Metilación aleatoria del ADN", de: "Zufällige DNA-Methylierung", nl: "Willekeurige DNA methylering" },
          { en: "Protein-directed methylation only", es: "Solo metilación dirigida por proteínas", de: "Nur Protein-dirigierte Methylierung", nl: "Alleen eiwit-gerichte methylering" },
          { en: "DNA damage responses", es: "Respuestas a daño del ADN", de: "DNA-Schadenreaktionen", nl: "DNA schade responsen" }
        ],
        correct: 0,
        explanation: {
          en: "RdDM involves small interfering RNAs that guide Argonaute proteins to complementary DNA sequences, recruiting DNA methyltransferases and chromatin-modifying complexes to establish de novo methylation patterns for gene silencing.",
          es: "RdDM involucra ARNs interferentes pequeños que guían proteínas Argonaute a secuencias de ADN complementarias, reclutando metiltransferasas de ADN y complejos modificadores de cromatina para establecer patrones de metilación de novo para silenciamiento génico.",
          de: "RdDM beinhaltet kleine interferierende RNAs, die Argonaute-Proteine zu komplementären DNA-Sequenzen führen, DNA-Methyltransferasen und Chromatin-modifizierende Komplexe rekrutieren, um de novo Methylierungsmuster für Gen-Silencing zu etablieren.",
          nl: "RdDM omvat kleine interfererende RNAs die Argonaute eiwitten naar complementaire DNA sequenties leiden, waarbij DNA methyltransferasen en chromatine-modificerende complexen worden gerekruteerd om de novo methylering patronen voor gen stillegging te vestigen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism underlying liquid-liquid phase separation in cellular condensates?",
          es: "¿Cuál es el mecanismo molecular subyacente a la separación de fases líquido-líquido en condensados celulares?",
          de: "Was ist der molekulare Mechanismus der Flüssig-Flüssig-Phasentrennung in zellulären Kondensaten?",
          nl: "Wat is het moleculaire mechanisme dat ten grondslag ligt aan vloeistof-vloeistof fasescheiding in cellulaire condensaten?"
        },
        options: [
          { en: "Multivalent weak interactions and intrinsically disordered regions", es: "Interacciones débiles multivalentes y regiones intrínsecamente desordenadas", de: "Multivalente schwache Wechselwirkungen und intrinsisch ungeordnete Regionen", nl: "Multivalente zwakke interacties en intrinsiek wanordelijke regio's" },
          { en: "Strong covalent bonding only", es: "Solo enlaces covalentes fuertes", de: "Nur starke kovalente Bindung", nl: "Alleen sterke covalente binding" },
          { en: "Membrane-enclosed compartments", es: "Compartimentos encerrados por membranas", de: "Membranumschlossene Kompartimente", nl: "Membraan-omsloten compartimenten" },
          { en: "Crystalline protein structures", es: "Estructuras proteicas cristalinas", de: "Kristalline Proteinstrukturen", nl: "Kristallijne eiwitstructuren" }
        ],
        correct: 0,
        explanation: {
          en: "Biomolecular condensates form through liquid-liquid phase separation driven by multivalent weak interactions between proteins and nucleic acids, often involving intrinsically disordered regions that provide conformational flexibility and multiple binding sites.",
          es: "Los condensados biomoleculares se forman a través de separación de fases líquido-líquido impulsada por interacciones débiles multivalentes entre proteínas y ácidos nucleicos, a menudo involucrando regiones intrínsecamente desordenadas que proporcionan flexibilidad conformacional y múltiples sitios de unión.",
          de: "Biomolekulare Kondensate bilden sich durch Flüssig-Flüssig-Phasentrennung, angetrieben von multivalenten schwachen Wechselwirkungen zwischen Proteinen und Nukleinsäuren, oft unter Beteiligung intrinsisch ungeordneter Regionen, die konformationelle Flexibilität und mehrere Bindungsstellen bieten.",
          nl: "Biomoleculaire condensaten vormen zich door vloeistof-vloeistof fasescheiding gedreven door multivalente zwakke interacties tussen eiwitten en nucleïnezuren, vaak met betrokkenheid van intrinsiek wanordelijke regio's die conformationele flexibiliteit en meerdere bindingsplaatsen bieden."
        }
      },
      {
        question: {
          en: "How does the chromatin remodeling complex SWI/SNF facilitate transcriptional activation?",
          es: "¿Cómo facilita el complejo remodelador de cromatina SWI/SNF la activación transcripcional?",
          de: "Wie erleichtert der Chromatin-Remodellierungskomplex SWI/SNF die transkriptionelle Aktivierung?",
          nl: "Hoe faciliteert het chromatine hermodelleringscomplex SWI/SNF transcriptionele activatie?"
        },
        options: [
          { en: "ATP-dependent nucleosome sliding and histone ejection", es: "Deslizamiento de nucleosomas dependiente de ATP y expulsión de histonas", de: "ATP-abhängiges Nukleosomverschieben und Histon-Auswurf", nl: "ATP-afhankelijke nucleosoom verschuiving en histon uitwerping" },
          { en: "DNA methylation changes", es: "Cambios en metilación del ADN", de: "DNA-Methylierungsänderungen", nl: "DNA methyleringsveranderingen" },
          { en: "Protein synthesis inhibition", es: "Inhibición de síntesis proteica", de: "Proteinsynthese-Hemmung", nl: "Eiwitsynthese remming" },
          { en: "mRNA degradation", es: "Degradación de ARNm", de: "mRNA-Degradation", nl: "mRNA afbraak" }
        ],
        correct: 0,
        explanation: {
          en: "SWI/SNF uses ATP hydrolysis to slide nucleosomes along DNA or eject histones, making promoter and enhancer regions accessible to transcription factors and RNA polymerase, thereby facilitating gene expression.",
          es: "SWI/SNF usa hidrólisis de ATP para deslizar nucleosomas a lo largo del ADN o expulsar histonas, haciendo regiones promotoras y potenciadoras accesibles a factores de transcripción y ARN polimerasa, facilitando así expresión génica.",
          de: "SWI/SNF nutzt ATP-Hydrolyse, um Nukleosomen entlang der DNA zu verschieben oder Histone auszuwerfen, wodurch Promotor- und Enhancer-Regionen für Transkriptionsfaktoren und RNA-Polymerase zugänglich werden und Genexpression erleichtert wird.",
          nl: "SWI/SNF gebruikt ATP hydrolyse om nucleosomen langs DNA te verschuiven of histonen uit te werpen, waardoor promotor en versterker regio's toegankelijk worden voor transcriptiefactoren en RNA polymerase, waardoor genexpressie wordt gefaciliteerd."
        }
      },
      {
        question: {
          en: "What mechanism underlies the specificity of CRISPR-Cas9 target recognition?",
          es: "¿Qué mecanismo subyace a la especificidad del reconocimiento de objetivos de CRISPR-Cas9?",
          de: "Welcher Mechanismus liegt der Spezifität der CRISPR-Cas9-Zielerkennung zugrunde?",
          nl: "Welk mechanisme ligt ten grondslag aan de specificiteit van CRISPR-Cas9 doelherkenning?"
        },
        options: [
          { en: "PAM recognition and guide RNA complementarity", es: "Reconocimiento PAM y complementariedad del ARN guía", de: "PAM-Erkennung und Leit-RNA-Komplementarität", nl: "PAM herkenning en gids RNA complementariteit" },
          { en: "Random DNA binding", es: "Unión aleatoria al ADN", de: "Zufällige DNA-Bindung", nl: "Willekeurige DNA binding" },
          { en: "Protein-protein interactions only", es: "Solo interacciones proteína-proteína", de: "Nur Protein-Protein-Wechselwirkungen", nl: "Alleen eiwit-eiwit interacties" },
          { en: "Histone modifications", es: "Modificaciones de histonas", de: "Histon-Modifikationen", nl: "Histon modificaties" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas9 specificity depends on recognition of the protospacer adjacent motif (PAM) by Cas9 protein and complementary base pairing between the guide RNA and target DNA sequence, with both elements required for precise targeting.",
          es: "La especificidad de CRISPR-Cas9 depende del reconocimiento del motivo adyacente al protoespaciador (PAM) por la proteína Cas9 y apareamiento de bases complementarias entre el ARN guía y secuencia de ADN objetivo, con ambos elementos requeridos para targeting preciso.",
          de: "CRISPR-Cas9-Spezifität hängt von der Erkennung des Protospacer-benachbarten Motivs (PAM) durch das Cas9-Protein und komplementärer Basenpaarung zwischen Leit-RNA und Ziel-DNA-Sequenz ab, wobei beide Elemente für präzises Targeting erforderlich sind.",
          nl: "CRISPR-Cas9 specificiteit hangt af van herkenning van het protospacer aangrenzende motief (PAM) door Cas9 eiwit en complementaire basenparing tussen de gids RNA en doel DNA sequentie, waarbij beide elementen vereist zijn voor precieze targeting."
        }
      },
      {
        question: {
          en: "How does the unfolded protein response (UPR) maintain ER homeostasis?",
          es: "¿Cómo mantiene la respuesta a proteínas no plegadas (UPR) la homeostasis del RE?",
          de: "Wie erhält die Ungefaltete-Protein-Antwort (UPR) die ER-Homöostase aufrecht?",
          nl: "Hoe behoudt de ongevouwen eiwit respons (UPR) ER homeostase?"
        },
        options: [
          { en: "Sensor activation, translation attenuation, and chaperone upregulation", es: "Activación de sensores, atenuación de traducción y regulación positiva de chaperonas", de: "Sensoraktivierung, Translationsabschwächung und Chaperon-Hochregulation", nl: "Sensor activatie, translatie verzwakking, en chaperone opregulatie" },
          { en: "Increased protein synthesis only", es: "Solo aumento de síntesis proteica", de: "Nur erhöhte Proteinsynthese", nl: "Alleen verhoogde eiwitsynthese" },
          { en: "Random protein degradation", es: "Degradación aleatoria de proteínas", de: "Zufällige Proteindegradation", nl: "Willekeurige eiwitafbraak" },
          { en: "Membrane lipid changes only", es: "Solo cambios de lípidos de membrana", de: "Nur Membranlipidenveränderungen", nl: "Alleen membraan lipide veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "The UPR involves three sensor pathways (IRE1, PERK, ATF6) that detect misfolded proteins, attenuate translation to reduce ER load, upregulate molecular chaperones and folding enzymes, and activate degradation pathways to restore ER function.",
          es: "La UPR involucra tres vías de sensores (IRE1, PERK, ATF6) que detectan proteínas mal plegadas, atenúan traducción para reducir carga del RE, regulan positivamente chaperonas moleculares y enzimas de plegamiento, y activan vías de degradación para restaurar función del RE.",
          de: "Die UPR umfasst drei Sensorwege (IRE1, PERK, ATF6), die fehlgefaltete Proteine erkennen, Translation abschwächen um ER-Last zu reduzieren, molekulare Chaperone und Faltungsenzyme hochregulieren und Abbauwege aktivieren, um ER-Funktion wiederherzustellen.",
          nl: "De UPR omvat drie sensor paden (IRE1, PERK, ATF6) die misgevouwen eiwitten detecteren, translatie verzwakken om ER belasting te verminderen, moleculaire chaperones en vouwingsenzymen opreguleren, en afbraakpaden activeren om ER functie te herstellen."
        }
      },
      {
        question: {
          en: "What molecular mechanism drives the formation of stress granules during cellular stress?",
          es: "¿Qué mecanismo molecular impulsa la formación de gránulos de estrés durante estrés celular?",
          de: "Welcher molekulare Mechanismus treibt die Bildung von Stress-Granula während zellulärem Stress an?",
          nl: "Welk moleculair mechanisme drijft de vorming van stress granules aan tijdens cellulaire stress?"
        },
        options: [
          { en: "Translation inhibition and RNA-protein condensation", es: "Inhibición de traducción y condensación ARN-proteína", de: "Translationshemmung und RNA-Protein-Kondensation", nl: "Translatie inhibitie en RNA-eiwit condensatie" },
          { en: "Increased protein synthesis", es: "Aumento de síntesis proteica", de: "Erhöhte Proteinsynthese", nl: "Verhoogde eiwitsynthese" },
          { en: "DNA replication errors", es: "Errores de replicación del ADN", de: "DNA-Replikationsfehler", nl: "DNA replicatie fouten" },
          { en: "Mitochondrial dysfunction", es: "Disfunción mitocondrial", de: "Mitochondriale Dysfunktion", nl: "Mitochondriale dysfunctie" }
        ],
        correct: 0,
        explanation: {
          en: "Stress granules form when translation initiation is blocked, causing mRNAs and associated proteins to aggregate into membrane-less organelles through liquid-liquid phase separation, sequestering specific mRNAs from translation machinery.",
          es: "Los gránulos de estrés se forman cuando se bloquea iniciación de traducción, causando que ARNms y proteínas asociadas se agreguen en orgánulos sin membrana a través de separación de fases líquido-líquido, secuestrando ARNms específicos de la maquinaria de traducción.",
          de: "Stress-Granula bilden sich, wenn Translationsinitiation blockiert ist, wodurch mRNAs und assoziierte Proteine durch Flüssig-Flüssig-Phasentrennung zu membranlosen Organellen aggregieren und spezifische mRNAs von der Translationsmaschinerie sequestrieren.",
          nl: "Stress granules vormen zich wanneer translatie initiatie wordt geblokkeerd, waardoor mRNAs en geassocieerde eiwitten aggregeren in membraan-loze organellen door vloeistof-vloeistof fasescheiding, waarbij specifieke mRNAs worden weggenomen van translatie machinerie."
        }
      },
      {
        question: {
          en: "How does the spindle checkpoint ensure accurate chromosome segregation?",
          es: "¿Cómo asegura el punto de control del huso la segregación precisa de cromosomas?",
          de: "Wie stellt der Spindelcheckpoint eine genaue Chromosomentrennung sicher?",
          nl: "Hoe verzekert het spindel controlepunt nauwkeurige chromosoom segregatie?"
        },
        options: [
          { en: "Kinetochore attachment monitoring and APC/C inhibition", es: "Monitoreo de unión de cinetocoro e inhibición APC/C", de: "Kinetochor-Bindungsüberwachung und APC/C-Hemmung", nl: "Kinetochoor attachement monitoring en APC/C inhibitie" },
          { en: "Random chromosome movement", es: "Movimiento aleatorio de cromosomas", de: "Zufällige Chromosomenbewegung", nl: "Willekeurige chromosoom beweging" },
          { en: "DNA repair mechanisms", es: "Mecanismos de reparación del ADN", de: "DNA-Reparaturmechanismen", nl: "DNA reparatie mechanismen" },
          { en: "Protein synthesis regulation", es: "Regulación de síntesis proteica", de: "Proteinsynthese-Regulation", nl: "Eiwitsynthese regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "The spindle checkpoint monitors kinetochore-microtubule attachments and inhibits the anaphase-promoting complex (APC/C) until all chromosomes are properly bi-oriented, preventing premature sister chromatid separation and maintaining genomic stability.",
          es: "El punto de control del huso monitorea uniones cinetocoro-microtúbulo e inhibe el complejo promotor de anafase (APC/C) hasta que todos los cromosomas estén apropiadamente bi-orientados, previniendo separación prematura de cromátidas hermanas y manteniendo estabilidad genómica.",
          de: "Der Spindelcheckpoint überwacht Kinetochor-Mikrotubuli-Verbindungen und hemmt den Anaphase-fördernden Komplex (APC/C), bis alle Chromosomen ordnungsgemäß bi-orientiert sind, verhindert vorzeitige Schwesterchromatid-Trennung und erhält genomische Stabilität.",
          nl: "Het spindel controlepunt monitort kinetochoor-microtubuli attachementen en remt het anafase-bevorderende complex (APC/C) tot alle chromosomen goed bi-georiënteerd zijn, waardoor voortijdige zuster chromatide scheiding wordt voorkomen en genomische stabiliteit behouden blijft."
        }
      },
      {
        question: {
          en: "What is the molecular basis of RNA interference (RNAi) pathway specificity?",
          es: "¿Cuál es la base molecular de la especificidad de la vía de interferencia de ARN (RNAi)?",
          de: "Was ist die molekulare Grundlage der RNA-Interferenz (RNAi) Wegspezifität?",
          nl: "Wat is de moleculaire basis van RNA interferentie (RNAi) pad specificiteit?"
        },
        options: [
          { en: "Small RNA guide strand complementarity and RISC complex loading", es: "Complementariedad de cadena guía de ARN pequeño y carga del complejo RISC", de: "Kleine RNA-Leitstrang-Komplementarität und RISC-Komplex-Beladung", nl: "Kleine RNA gids streng complementariteit en RISC complex lading" },
          { en: "Random mRNA targeting", es: "Targeting aleatorio de ARNm", de: "Zufälliges mRNA-Targeting", nl: "Willekeurige mRNA targeting" },
          { en: "Protein degradation only", es: "Solo degradación de proteínas", de: "Nur Proteindegradation", nl: "Alleen eiwitafbraak" },
          { en: "Transcriptional activation", es: "Activación transcripcional", de: "Transkriptionelle Aktivierung", nl: "Transcriptionele activatie" }
        ],
        correct: 0,
        explanation: {
          en: "RNAi specificity depends on the guide strand of small RNAs (siRNA/miRNA) loaded into RISC complex, which uses Watson-Crick base pairing to recognize complementary target mRNAs, with perfect matches leading to cleavage and imperfect matches causing translational repression.",
          es: "La especificidad de RNAi depende de la cadena guía de ARNs pequeños (siRNA/miRNA) cargados en complejo RISC, que usa apareamiento de bases Watson-Crick para reconocer ARNms objetivo complementarios, con emparejamientos perfectos llevando a corte y emparejamientos imperfectos causando represión traduccional.",
          de: "RNAi-Spezifität hängt vom Leitstrang kleiner RNAs (siRNA/miRNA) ab, die in den RISC-Komplex geladen werden, der Watson-Crick-Basenpaarung verwendet, um komplementäre Ziel-mRNAs zu erkennen, wobei perfekte Paarungen zur Spaltung und unvollkommene Paarungen zur Translationsrepression führen.",
          nl: "RNAi specificiteit hangt af van de gids streng van kleine RNAs (siRNA/miRNA) geladen in RISC complex, dat Watson-Crick basenparing gebruikt om complementaire doel mRNAs te herkennen, waarbij perfecte matches leiden tot knippen en imperfecte matches translationele repressie veroorzaken."
        }
      },
      {
        question: {
          en: "How does the DNA damage checkpoint coordinate cell cycle arrest with repair mechanisms?",
          es: "¿Cómo coordina el punto de control de daño del ADN el arresto del ciclo celular con mecanismos de reparación?",
          de: "Wie koordiniert der DNA-Schaden-Checkpoint Zellzyklusarrest mit Reparaturmechanismen?",
          nl: "Hoe coördineert het DNA schade controlepunt celcyclus arrest met reparatie mechanismen?"
        },
        options: [
          { en: "ATM/ATR kinase signaling and p53-mediated transcriptional response", es: "Señalización de quinasas ATM/ATR y respuesta transcripcional mediada por p53", de: "ATM/ATR-Kinase-Signaling und p53-vermittelte transkriptionelle Antwort", nl: "ATM/ATR kinase signalering en p53-gemedieerde transcriptionele respons" },
          { en: "Random cell division halt", es: "Parada aleatoria de división celular", de: "Zufälliger Zellteilungsstopp", nl: "Willekeurige celdeling stop" },
          { en: "Protein synthesis shutdown", es: "Cierre de síntesis proteica", de: "Proteinsynthese-Herunterfahren", nl: "Eiwitsynthese afsluiting" },
          { en: "Mitochondrial dysfunction", es: "Disfunción mitocondrial", de: "Mitochondriale Dysfunktion", nl: "Mitochondriale dysfunctie" }
        ],
        correct: 0,
        explanation: {
          en: "DNA damage checkpoints involve ATM/ATR kinases that detect DNA breaks, phosphorylate p53 to stabilize it, leading to transcriptional activation of cell cycle inhibitors like p21 and DNA repair genes, coordinating arrest with repair processes.",
          es: "Los puntos de control de daño del ADN involucran quinasas ATM/ATR que detectan roturas de ADN, fosforilan p53 para estabilizarlo, llevando a activación transcripcional de inhibidores del ciclo celular como p21 y genes de reparación del ADN, coordinando arresto con procesos de reparación.",
          de: "DNA-Schaden-Checkpoints umfassen ATM/ATR-Kinasen, die DNA-Brüche erkennen, p53 phosphorylieren um es zu stabilisieren, was zur transkriptionellen Aktivierung von Zellzyklusinhibitoren wie p21 und DNA-Reparaturgenen führt und Arrest mit Reparaturprozessen koordiniert.",
          nl: "DNA schade controlepunten omvatten ATM/ATR kinasen die DNA breuken detecteren, p53 fosforyleren om het te stabiliseren, leidend tot transcriptionele activatie van celcyclus remmers zoals p21 en DNA reparatie genen, waardoor arrest wordt gecoördineerd met reparatie processen."
        }
      },
      {
        question: {
          en: "What mechanism underlies the allosteric regulation of metabolic enzymes?",
          es: "¿Qué mecanismo subyace a la regulación alostérica de enzimas metabólicas?",
          de: "Welcher Mechanismus liegt der allosterischen Regulation metabolischer Enzyme zugrunde?",
          nl: "Welk mechanisme ligt ten grondslag aan de allosterische regulatie van metabole enzymen?"
        },
        options: [
          { en: "Conformational changes upon effector binding", es: "Cambios conformacionales upon unión de efector", de: "Konformationsänderungen bei Effektorbindung", nl: "Conformationele veranderingen bij effector binding" },
          { en: "Competitive inhibition only", es: "Solo inhibición competitiva", de: "Nur kompetitive Hemmung", nl: "Alleen competitieve inhibitie" },
          { en: "Enzyme degradation", es: "Degradación de enzima", de: "Enzymabbau", nl: "Enzym afbraak" },
          { en: "Transcriptional control only", es: "Solo control transcripcional", de: "Nur transkriptionelle Kontrolle", nl: "Alleen transcriptionele controle" }
        ],
        correct: 0,
        explanation: {
          en: "Allosteric regulation involves effector molecules binding to sites distinct from the active site, inducing conformational changes that alter enzyme activity, enabling rapid metabolic control through cooperative binding and feedback mechanisms.",
          es: "La regulación alostérica involucra moléculas efectoras uniéndose a sitios distintos del sitio activo, induciendo cambios conformacionales que alteran actividad enzimática, permitiendo control metabólico rápido a través de unión cooperativa y mecanismos de retroalimentación.",
          de: "Allosterische Regulation beinhaltet Effektormoleküle, die an Stellen getrennt von der aktiven Stelle binden, Konformationsänderungen induzieren, die Enzymaktivität verändern und schnelle metabolische Kontrolle durch kooperative Bindung und Rückkopplungsmechanismen ermöglichen.",
          nl: "Allosterische regulatie omvat effector moleculen die binden aan plaatsen gescheiden van de actieve plaats, conformationele veranderingen inducerend die enzymactiviteit veranderen, waardoor snelle metabole controle mogelijk wordt door coöperatieve binding en feedback mechanismen."
        }
      },
      {
        question: {
          en: "How does the ribosome achieve translational fidelity during protein synthesis?",
          es: "¿Cómo logra el ribosoma fidelidad traduccional durante síntesis proteica?",
          de: "Wie erreicht das Ribosom Translationstreue während der Proteinsynthese?",
          nl: "Hoe bereikt het ribosoom translationele betrouwbaarheid tijdens eiwitsynthese?"
        },
        options: [
          { en: "Proofreading mechanisms and induced fit selection", es: "Mecanismos de corrección de pruebas y selección de ajuste inducido", de: "Korrekturmechanismen und induzierte Anpassungsselektion", nl: "Proeflezingsmechanismen en geïnduceerde fit selectie" },
          { en: "Random amino acid incorporation", es: "Incorporación aleatoria de aminoácidos", de: "Zufällige Aminosäure-Inkorporation", nl: "Willekeurige aminozuur incorporatie" },
          { en: "DNA repair during translation", es: "Reparación del ADN durante traducción", de: "DNA-Reparatur während Translation", nl: "DNA reparatie tijdens translatie" },
          { en: "Post-translational modification only", es: "Solo modificación post-traduccional", de: "Nur post-translationale Modifikation", nl: "Alleen post-translationele modificatie" }
        ],
        correct: 0,
        explanation: {
          en: "Ribosomal fidelity involves initial selection based on codon-anticodon geometry, proofreading that allows incorrect tRNAs to dissociate before peptide bond formation, and post-peptidyl transfer proofreading that can hydrolyze incorrect aminoacyl-tRNAs.",
          es: "La fidelidad ribosomal involucra selección inicial basada en geometría codón-anticodón, corrección de pruebas que permite a tRNAs incorrectos disociarse antes de formación de enlace peptídico, y corrección de pruebas post-transferencia peptidil que puede hidrolizar aminoacil-tRNAs incorrectos.",
          de: "Ribosomale Treue umfasst anfängliche Selektion basierend auf Codon-Anticodon-Geometrie, Korrekturlesen, das falschen tRNAs erlaubt vor Peptidbindungsbildung zu dissoziieren, und Post-Peptidyltransfer-Korrekturlesen, das falsche Aminoacyl-tRNAs hydrolysieren kann.",
          nl: "Ribosomale betrouwbaarheid omvat initiële selectie gebaseerd op codon-anticodon geometrie, proeflezen dat incorrecte tRNAs toestaat te dissociëren voor peptide binding formatie, en post-peptidyl transfer proeflezen dat incorrecte aminoacyl-tRNAs kan hydrolyseren."
        }
      },
      {
        question: {
          en: "What molecular mechanism drives the asymmetric division of stem cells?",
          es: "¿Qué mecanismo molecular impulsa la división asimétrica de células madre?",
          de: "Welcher molekulare Mechanismus treibt die asymmetrische Teilung von Stammzellen an?",
          nl: "Welk moleculair mechanisme drijft de asymmetrische deling van stamcellen aan?"
        },
        options: [
          { en: "Polarized distribution of cell fate determinants", es: "Distribución polarizada de determinantes del destino celular", de: "Polarisierte Verteilung von Zellschicksals-Determinanten", nl: "Gepolariseerde distributie van celbestemming determinanten" },
          { en: "Random chromosome segregation", es: "Segregación aleatoria de cromosomas", de: "Zufällige Chromosomentrennung", nl: "Willekeurige chromosoom segregatie" },
          { en: "Equal division of cellular contents", es: "División equitativa de contenidos celulares", de: "Gleichmäßige Teilung zellulärer Inhalte", nl: "Gelijke deling van cellulaire inhoud" },
          { en: "External signaling only", es: "Solo señalización externa", de: "Nur externe Signalübertragung", nl: "Alleen externe signalering" }
        ],
        correct: 0,
        explanation: {
          en: "Asymmetric stem cell division involves polarized localization of cell fate determinants like transcription factors and signaling molecules to one side of the cell, ensuring differential inheritance by daughter cells and maintenance of stem cell identity in one lineage.",
          es: "La división asimétrica de células madre involucra localización polarizada de determinantes del destino celular como factores de transcripción y moléculas de señalización a un lado de la célula, asegurando herencia diferencial por células hijas y mantenimiento de identidad de célula madre en un linaje.",
          de: "Asymmetrische Stammzellteilung beinhaltet polarisierte Lokalisierung von Zellschicksals-Determinanten wie Transkriptionsfaktoren und Signalmolekülen zu einer Seite der Zelle, wodurch differentielle Vererbung durch Tochterzellen und Aufrechterhaltung der Stammzellidentität in einer Linie sichergestellt wird.",
          nl: "Asymmetrische stamcel deling omvat gepolariseerde localisatie van celbestemming determinanten zoals transcriptiefactoren en signaal moleculen naar één kant van de cel, waardoor differentiële overerving door dochtercellen en behoud van stamcel identiteit in één lijn wordt verzekerd."
        }
      },
      {
        question: {
          en: "How does the proteasome achieve substrate specificity for protein degradation?",
          es: "¿Cómo logra el proteasoma especificidad de sustrato para degradación de proteínas?",
          de: "Wie erreicht das Proteasom Substratspezifität für Proteinabbau?",
          nl: "Hoe bereikt het proteasoom substraat specificiteit voor eiwitafbraak?"
        },
        options: [
          { en: "Ubiquitin tagging and specific recognition receptors", es: "Etiquetado con ubiquitina y receptores de reconocimiento específicos", de: "Ubiquitin-Markierung und spezifische Erkennungsrezeptoren", nl: "Ubiquitine tagging en specifieke herkenningsreceptoren" },
          { en: "Random protein selection", es: "Selección aleatoria de proteínas", de: "Zufällige Proteinauswahl", nl: "Willekeurige eiwitselectie" },
          { en: "Size-based exclusion only", es: "Solo exclusión basada en tamaño", de: "Nur größenbasierter Ausschluss", nl: "Alleen grootte-gebaseerde uitsluiting" },
          { en: "Transcriptional control", es: "Control transcripcional", de: "Transkriptionelle Kontrolle", nl: "Transcriptionele controle" }
        ],
        correct: 0,
        explanation: {
          en: "Proteasome specificity relies on ubiquitin tagging of target proteins by specific E3 ligases, recognition by shuttle factors and proteasome-associated receptors, and unfolding machinery that selectively processes ubiquitinated substrates for degradation.",
          es: "La especificidad del proteasoma depende del etiquetado con ubiquitina de proteínas objetivo por ligasas E3 específicas, reconocimiento por factores lanzadera y receptores asociados al proteasoma, y maquinaria de desplegamiento que procesa selectivamente sustratos ubiquitinados para degradación.",
          de: "Proteasom-Spezifität beruht auf Ubiquitin-Markierung von Zielproteinen durch spezifische E3-Ligasen, Erkennung durch Shuttle-Faktoren und Proteasom-assoziierte Rezeptoren, und Entfaltungsmaschinerie, die ubiquitinierte Substrate selektiv für Abbau verarbeitet.",
          nl: "Proteasoom specificiteit is afhankelijk van ubiquitine tagging van doel eiwitten door specifieke E3 ligasen, herkenning door shuttle factoren en proteasoom-geassocieerde receptoren, en ontvouwingsmachinerie die selectief geubiquitineerde substraten verwerkt voor afbraak."
        }
      },
      {
        question: {
          en: "What mechanism underlies the cooperative binding of transcription factors to enhancers?",
          es: "¿Qué mecanismo subyace a la unión cooperativa de factores de transcripción a potenciadores?",
          de: "Welcher Mechanismus liegt der kooperativen Bindung von Transkriptionsfaktoren an Enhancer zugrunde?",
          nl: "Welk mechanisme ligt ten grondslag aan de coöperatieve binding van transcriptiefactoren aan enhancers?"
        },
        options: [
          { en: "Protein-protein interactions and DNA looping", es: "Interacciones proteína-proteína y formación de bucles de ADN", de: "Protein-Protein-Wechselwirkungen und DNA-Schleifenbildung", nl: "Eiwit-eiwit interacties en DNA lus vorming" },
          { en: "Independent factor binding", es: "Unión independiente de factores", de: "Unabhängige Faktorbindung", nl: "Onafhankelijke factor binding" },
          { en: "Random DNA association", es: "Asociación aleatoria al ADN", de: "Zufällige DNA-Assoziation", nl: "Willekeurige DNA associatie" },
          { en: "Competitive exclusion", es: "Exclusión competitiva", de: "Kompetitive Exklusion", nl: "Competitieve uitsluiting" }
        ],
        correct: 0,
        explanation: {
          en: "Cooperative transcription factor binding involves protein-protein interactions that stabilize factor occupancy, DNA looping that brings distant regulatory elements together, and chromatin remodeling that creates accessible binding platforms for multiple factors.",
          es: "La unión cooperativa de factores de transcripción involucra interacciones proteína-proteína que estabilizan ocupación de factores, formación de bucles de ADN que juntan elementos reguladores distantes, y remodelación de cromatina que crea plataformas de unión accesibles para múltiples factores.",
          de: "Kooperative Transkriptionsfaktor-Bindung umfasst Protein-Protein-Wechselwirkungen, die Faktor-Besetzung stabilisieren, DNA-Schleifenbildung, die entfernte regulatorische Elemente zusammenbringt, und Chromatin-Remodellierung, die zugängliche Bindungsplattformen für mehrere Faktoren schafft.",
          nl: "Coöperatieve transcriptiefactor binding omvat eiwit-eiwit interacties die factor bezetting stabiliseren, DNA lus vorming die verre regulatoire elementen samenbrengt, en chromatine hermodellering die toegankelijke bindingsplatforms creëert voor meerdere factoren."
        }
      },
      {
        question: {
          en: "How does the spliceosome ensure accurate pre-mRNA splicing?",
          es: "¿Cómo asegura el espliceosoma el empalme preciso del pre-ARNm?",
          de: "Wie stellt das Spliceosom genaues Prä-mRNA-Spleißen sicher?",
          nl: "Hoe verzekert het spliceosome nauwkeurige pre-mRNA splicing?"
        },
        options: [
          { en: "Dynamic snRNP assembly and exon junction recognition", es: "Ensamblaje dinámico de snRNP y reconocimiento de unión de exones", de: "Dynamische snRNP-Assemblierung und Exon-Verbindungserkennung", nl: "Dynamische snRNP assemblage en exon junctie herkenning" },
          { en: "Random RNA cleavage", es: "Corte aleatorio de ARN", de: "Zufällige RNA-Spaltung", nl: "Willekeurige RNA knippen" },
          { en: "Protein-only mechanisms", es: "Solo mecanismos de proteínas", de: "Nur Protein-Mechanismen", nl: "Alleen eiwit mechanismen" },
          { en: "DNA-mediated splicing", es: "Empalme mediado por ADN", de: "DNA-vermitteltes Spleißen", nl: "DNA-gemedieerde splicing" }
        ],
        correct: 0,
        explanation: {
          en: "Spliceosome accuracy depends on sequential assembly of snRNPs that recognize splice sites through base pairing, proofreading mechanisms that reject incorrect substrates, and dynamic conformational changes that position catalytic sites for precise transesterification reactions.",
          es: "La precisión del espliceosoma depende del ensamblaje secuencial de snRNPs que reconocen sitios de empalme a través de apareamiento de bases, mecanismos de corrección de pruebas que rechazan sustratos incorrectos, y cambios conformacionales dinámicos que posicionan sitios catalíticos para reacciones de transesterificación precisas.",
          de: "Spliceosom-Genauigkeit hängt von sequenzieller Assemblierung von snRNPs ab, die Spleißstellen durch Basenpaarung erkennen, Korrekturmechanismen, die falsche Substrate ablehnen, und dynamischen Konformationsänderungen, die katalytische Stellen für präzise Transesterifizierungsreaktionen positionieren.",
          nl: "Spliceosome nauwkeurigheid hangt af van sequentiële assemblage van snRNPs die splice sites herkennen door basenparing, proeflezingsmechanismen die incorrecte substraten afwijzen, en dynamische conformationele veranderingen die katalytische sites positioneren voor precieze transesterificatie reacties."
        }
      },
      {
        question: {
          en: "What molecular mechanism regulates the cell cycle-dependent nuclear envelope breakdown?",
          es: "¿Qué mecanismo molecular regula la ruptura de la envoltura nuclear dependiente del ciclo celular?",
          de: "Welcher molekulare Mechanismus reguliert den zellzyklusabhängigen Kernhüllenabbau?",
          nl: "Welk moleculair mechanisme reguleert de celcyclus-afhankelijke kernomhulsel afbraak?"
        },
        options: [
          { en: "CDK1-mediated phosphorylation of nuclear envelope proteins", es: "Fosforilación mediada por CDK1 de proteínas de la envoltura nuclear", de: "CDK1-vermittelte Phosphorylierung von Kernhüllenproteinen", nl: "CDK1-gemedieerde fosforylering van kernomhulsel eiwitten" },
          { en: "Random membrane fragmentation", es: "Fragmentación aleatoria de membranas", de: "Zufällige Membranfragmentierung", nl: "Willekeurige membraan fragmentatie" },
          { en: "Protein synthesis inhibition", es: "Inhibición de síntesis proteica", de: "Proteinsynthese-Hemmung", nl: "Eiwitsynthese inhibitie" },
          { en: "DNA replication initiation", es: "Iniciación de replicación del ADN", de: "DNA-Replikationsinitiierung", nl: "DNA replicatie initiatie" }
        ],
        correct: 0,
        explanation: {
          en: "Nuclear envelope breakdown is triggered by CDK1 (cyclin B-Cdk1) phosphorylation of nuclear lamins and nuclear pore complex components, causing disassembly of the nuclear lamina and fragmentation of nuclear membranes during mitotic entry.",
          es: "La ruptura de la envoltura nuclear es desencadenada por fosforilación de CDK1 (ciclina B-Cdk1) de láminas nucleares y componentes del complejo de poro nuclear, causando desensamblaje de la lámina nuclear y fragmentación de membranas nucleares durante entrada mitótica.",
          de: "Kernhüllenabbau wird durch CDK1 (Cyclin B-Cdk1) Phosphorylierung von Kernlaminen und Kernporenkomplexkomponenten ausgelöst, was Zerlegung der Kernlamina und Fragmentierung von Kernmembranen während mitotischem Eintritt verursacht.",
          nl: "Kernomhulsel afbraak wordt getriggerd door CDK1 (cycline B-Cdk1) fosforylering van kern lamines en kern porie complex componenten, veroorzakend demontage van de kern lamina en fragmentatie van kern membranen tijdens mitotische toegang."
        }
      },
      {
        question: {
          en: "How does telomerase maintain chromosome stability at telomeres?",
          es: "¿Cómo mantiene la telomerasa estabilidad cromosómica en telómeros?",
          de: "Wie erhält Telomerase Chromosomenstabilität an Telomeren aufrecht?",
          nl: "Hoe behoudt telomerase chromosoom stabiliteit bij telomeren?"
        },
        options: [
          { en: "Reverse transcription using RNA template and processivity", es: "Transcripción inversa usando plantilla de ARN y procesividad", de: "Reverse Transkription mit RNA-Vorlage und Prozessivität", nl: "Reverse transcriptie gebruik makend van RNA template en processiviteit" },
          { en: "DNA recombination only", es: "Solo recombinación del ADN", de: "Nur DNA-Rekombination", nl: "Alleen DNA recombinatie" },
          { en: "Random nucleotide addition", es: "Adición aleatoria de nucleótidos", de: "Zufällige Nukleotidaddition", nl: "Willekeurige nucleotide toevoeging" },
          { en: "Chromosome fusion mechanisms", es: "Mecanismos de fusión cromosómica", de: "Chromosomenfusionsmechanismen", nl: "Chromosoom fusie mechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Telomerase extends telomeres through reverse transcription, using its integral RNA component as template to add telomeric DNA repeats, with processivity allowing multiple rounds of extension to compensate for end-replication problems and prevent chromosome fusion.",
          es: "La telomerasa extiende telómeros a través de transcripción inversa, usando su componente de ARN integral como plantilla para añadir repeticiones de ADN telomérico, con procesividad permitiendo múltiples rondas de extensión para compensar problemas de replicación terminal y prevenir fusión cromosómica.",
          de: "Telomerase verlängert Telomere durch reverse Transkription, verwendet ihre integrale RNA-Komponente als Vorlage zur Hinzufügung telomerischer DNA-Wiederholungen, mit Prozessivität, die mehrere Verlängerungsrunden ermöglicht, um End-Replikationsprobleme zu kompensieren und Chromosomenfusion zu verhindern.",
          nl: "Telomerase verlengt telomeren door reverse transcriptie, gebruik makend van zijn integrale RNA component als template om telomere DNA herhalingen toe te voegen, met processiviteit die meerdere rondes van verlenging toestaat om eind-replicatie problemen te compenseren en chromosoom fusie te voorkomen."
        }
      },
      {
        question: {
          en: "What mechanism underlies the specificity of microRNA target recognition?",
          es: "¿Qué mecanismo subyace a la especificidad del reconocimiento de objetivos de microARN?",
          de: "Welcher Mechanismus liegt der Spezifität der microRNA-Zielerkennung zugrunde?",
          nl: "Welk mechanisme ligt ten grondslag aan de specificiteit van microRNA doel herkenning?"
        },
        options: [
          { en: "Seed sequence complementarity and 3' UTR binding", es: "Complementariedad de secuencia semilla y unión a 3' UTR", de: "Seed-Sequenz-Komplementarität und 3' UTR-Bindung", nl: "Zaad sequentie complementariteit en 3' UTR binding" },
          { en: "Perfect sequence matching only", es: "Solo emparejamiento perfecto de secuencias", de: "Nur perfekte Sequenzanpassung", nl: "Alleen perfecte sequentie matching" },
          { en: "Protein domain recognition", es: "Reconocimiento de dominio de proteína", de: "Proteindomänen-Erkennung", nl: "Eiwit domein herkenning" },
          { en: "Random mRNA association", es: "Asociación aleatoria de ARNm", de: "Zufällige mRNA-Assoziation", nl: "Willekeurige mRNA associatie" }
        ],
        correct: 0,
        explanation: {
          en: "MicroRNA specificity is primarily determined by complementarity between the miRNA seed sequence (nucleotides 2-7) and target sites in mRNA 3' UTRs, with additional contributions from 3' compensatory sites and target site context effects.",
          es: "La especificidad de microARN está determinada principalmente por complementariedad entre la secuencia semilla de miARN (nucleótidos 2-7) y sitios objetivo en 3' UTR de ARNm, con contribuciones adicionales de sitios compensatorios 3' y efectos de contexto del sitio objetivo.",
          de: "MicroRNA-Spezifität wird hauptsächlich durch Komplementarität zwischen der miRNA-Seed-Sequenz (Nukleotide 2-7) und Zielstellen in mRNA 3' UTRs bestimmt, mit zusätzlichen Beiträgen von 3' kompensatorischen Stellen und Zielstellen-Kontexteffekten.",
          nl: "MicroRNA specificiteit wordt voornamelijk bepaald door complementariteit tussen de miRNA zaad sequentie (nucleotiden 2-7) en doel sites in mRNA 3' UTRs, met aanvullende bijdragen van 3' compensatoire sites en doel site context effecten."
        }
      },
      {
        question: {
          en: "How does the anaphase-promoting complex (APC/C) ensure proper cell cycle progression?",
          es: "¿Cómo asegura el complejo promotor de anafase (APC/C) progresión apropiada del ciclo celular?",
          de: "Wie stellt der Anaphase-fördernde Komplex (APC/C) ordnungsgemäße Zellzyklusprogression sicher?",
          nl: "Hoe verzekert het anafase-bevorderende complex (APC/C) juiste celcyclus progressie?"
        },
        options: [
          { en: "Ubiquitin ligase activity and substrate specificity switches", es: "Actividad ubiquitina ligasa y cambios de especificidad de sustrato", de: "Ubiquitin-Ligase-Aktivität und Substratspezifitätswechsel", nl: "Ubiquitine ligase activiteit en substraat specificiteit wissels" },
          { en: "Random protein degradation", es: "Degradación aleatoria de proteínas", de: "Zufällige Proteindegradation", nl: "Willekeurige eiwitafbraak" },
          { en: "DNA synthesis promotion", es: "Promoción de síntesis de ADN", de: "DNA-Synthese-Förderung", nl: "DNA synthese bevordering" },
          { en: "Mitochondrial regulation", es: "Regulación mitocondrial", de: "Mitochondriale Regulation", nl: "Mitochondriale regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "APC/C functions as a ubiquitin ligase that targets specific cyclins and cell cycle regulators for degradation, with its substrate specificity controlled by co-activators Cdc20 and Cdh1 that determine timing of different cell cycle transitions.",
          es: "APC/C funciona como ubiquitina ligasa que apunta ciclinas específicas y reguladores del ciclo celular para degradación, con su especificidad de sustrato controlada por co-activadores Cdc20 y Cdh1 que determinan timing de diferentes transiciones del ciclo celular.",
          de: "APC/C funktioniert als Ubiquitin-Ligase, die spezifische Cycline und Zellzyklusregulatoren zur Degradation markiert, wobei ihre Substratspezifität durch Co-Aktivatoren Cdc20 und Cdh1 kontrolliert wird, die das Timing verschiedener Zellzyklusübergänge bestimmen.",
          nl: "APC/C functioneert als ubiquitine ligase die specifieke cyclinen en celcyclus regulatoren markeert voor afbraak, waarbij zijn substraat specificiteit wordt gecontroleerd door co-activatoren Cdc20 en Cdh1 die timing van verschillende celcyclus overgangen bepalen."
        }
      },
      {
        question: {
          en: "What molecular mechanism drives the formation and resolution of Holliday junctions during DNA recombination?",
          es: "¿Qué mecanismo molecular impulsa la formación y resolución de uniones de Holliday durante recombinación del ADN?",
          de: "Welcher molekulare Mechanismus treibt die Bildung und Auflösung von Holliday-Kreuzungen während DNA-Rekombination an?",
          nl: "Welk moleculair mechanisme drijft de vorming en resolutie van Holliday juncties aan tijdens DNA recombinatie?"
        },
        options: [
          { en: "Strand invasion, branch migration, and nuclease resolution", es: "Invasión de cadena, migración de rama y resolución por nucleasa", de: "Strangeinfall, Zweiginvasion und Nukleaseauflösung", nl: "Streng invasie, tak migratie, en nuclease resolutie" },
          { en: "Random DNA breakage only", es: "Solo ruptura aleatoria del ADN", de: "Nur zufällige DNA-Brüche", nl: "Alleen willekeurige DNA breuk" },
          { en: "Transcriptional activation", es: "Activación transcripcional", de: "Transkriptionelle Aktivierung", nl: "Transcriptionele activatie" },
          { en: "Protein folding mechanisms", es: "Mecanismos de plegamiento de proteínas", de: "Proteinfaltunssmechanismen", nl: "Eiwit vouwingsmechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Holliday junction formation involves strand invasion by recombinases, branch migration that extends heteroduplex regions, and resolution by specific nucleases (resolvases) that cleave junctions to generate recombinant or non-recombinant products depending on cleavage orientation.",
          es: "La formación de uniones de Holliday involucra invasión de cadena por recombinasas, migración de rama que extiende regiones heterodúplex, y resolución por nucleasas específicas (resolvasas) que cortan uniones para generar productos recombinantes o no-recombinantes dependiendo de orientación de corte.",
          de: "Holliday-Kreuzungsbildung umfasst Stranginvasion durch Rekombinasen, Zweiginvasion, die Heteroduplexregionen erweitert, und Auflösung durch spezifische Nuklearsen (Resolvasen), die Kreuzungen spalten, um rekombinante oder nicht-rekombinante Produkte je nach Spaltungsorientierung zu erzeugen.",
          nl: "Holliday junctie vorming omvat streng invasie door recombinasen, tak migratie die heteroduplex regio's uitbreidt, en resolutie door specifieke nucleasen (resolvasen) die juncties knippen om recombinante of niet-recombinante producten te genereren afhankelijk van knip oriëntatie."
        }
      },
      {
        question: {
          en: "How does the endoplasmic reticulum-associated degradation (ERAD) system maintain protein quality control?",
          es: "¿Cómo mantiene el sistema de degradación asociado al retículo endoplásmico (ERAD) control de calidad de proteínas?",
          de: "Wie erhält das endoplasmatische Retikulum-assoziierte Degradationssystem (ERAD) Proteinqualitätskontrolle aufrecht?",
          nl: "Hoe behoudt het endoplasmatisch reticulum-geassocieerde degradatie (ERAD) systeem eiwit kwaliteitscontrole?"
        },
        options: [
          { en: "Misfolded protein recognition, retrotranslocation, and proteasomal degradation", es: "Reconocimiento de proteínas mal plegadas, retrotranslocación y degradación proteasomal", de: "Erkennung fehlgefalteter Proteine, Retrotranslokation und proteasomaler Abbau", nl: "Misgevouwen eiwit herkenning, retrotranslocatie, en proteasomale afbraak" },
          { en: "Random protein elimination", es: "Eliminación aleatoria de proteínas", de: "Zufällige Proteinelimination", nl: "Willekeurige eiwit eliminatie" },
          { en: "Increased protein synthesis", es: "Aumento de síntesis proteica", de: "Erhöhte Proteinsynthese", nl: "Verhoogde eiwitsynthese" },
          { en: "Membrane lipid changes", es: "Cambios de lípidos de membrana", de: "Membranlipidenveränderungen", nl: "Membraan lipide veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "ERAD involves recognition of misfolded proteins by ER chaperones and lectins, retrotranslocation across the ER membrane through protein channels, ubiquitination by cytosolic E3 ligases, and targeting to the proteasome for degradation.",
          es: "ERAD involucra reconocimiento de proteínas mal plegadas por chaperonas y lectinas del RE, retrotranslocación a través de la membrana del RE por canales de proteína, ubiquitinación por ligasas E3 citosólicas, y targeting al proteasoma para degradación.",
          de: "ERAD umfasst Erkennung fehlgefalteter Proteine durch ER-Chaperone und Lektine, Retrotranslokation durch die ER-Membran über Proteinkanäle, Ubiquitinierung durch zytosolische E3-Ligasen und Targeting zum Proteasom für Abbau.",
          nl: "ERAD omvat herkenning van misgevouwen eiwitten door ER chaperones en lectines, retrotranslocatie over het ER membraan door eiwit kanalen, ubiquitinering door cytosolische E3 ligasen, en targeting naar het proteasoom voor afbraak."
        }
      },
      {
        question: {
          en: "What mechanism underlies the regulation of alternative splicing in tissue-specific gene expression?",
          es: "¿Qué mecanismo subyace a la regulación del empalme alternativo en expresión génica específica de tejido?",
          de: "Welcher Mechanismus liegt der Regulation des alternativen Spleißens bei gewebespezifischer Genexpression zugrunde?",
          nl: "Welk mechanisme ligt ten grondslag aan de regulatie van alternatieve splicing in weefsel-specifieke genexpressie?"
        },
        options: [
          { en: "Tissue-specific splicing regulators and enhancer/silencer elements", es: "Reguladores de empalme específicos de tejido y elementos potenciadores/silenciadores", de: "Gewebsspezifische Spleißregulatoren und Enhancer/Silencer-Elemente", nl: "Weefsel-specifieke splicing regulatoren en versterker/silencer elementen" },
          { en: "Random exon inclusion patterns", es: "Patrones aleatorios de inclusión de exones", de: "Zufällige Exoneinschlußmuster", nl: "Willekeurige exon inclusie patronen" },
          { en: "Universal splicing mechanisms only", es: "Solo mecanismos universales de empalme", de: "Nur universelle Spleißmechanismen", nl: "Alleen universele splicing mechanismen" },
          { en: "DNA methylation changes only", es: "Solo cambios en metilación del ADN", de: "Nur DNA-Methylierungsänderungen", nl: "Alleen DNA methyleringsveranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Alternative splicing regulation involves tissue-specific splicing factors that bind to exonic or intronic enhancer/silencer elements, competing with or cooperating with each other to determine exon inclusion patterns and create protein diversity across different cell types.",
          es: "La regulación del empalme alternativo involucra factores de empalme específicos de tejido que se unen a elementos potenciadores/silenciadores exónicos o intrónicos, compitiendo con o cooperando entre sí para determinar patrones de inclusión de exones y crear diversidad proteica a través de diferentes tipos celulares.",
          de: "Alternative Spleißregulation umfasst gewebsspezifische Spleißfaktoren, die an exonische oder intronische Enhancer/Silencer-Elemente binden, miteinander konkurrieren oder kooperieren, um Exoneinschlußmuster zu bestimmen und Proteindiversität über verschiedene Zelltypen zu schaffen.",
          nl: "Alternatieve splicing regulatie omvat weefsel-specifieke splicing factoren die binden aan exonische of intronische versterker/silencer elementen, concurrerend met of coöpererend met elkaar om exon inclusie patronen te bepalen en eiwit diversiteit te creëren over verschillende celtypen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/biology', level4);
  }
})();