(function() {
  const level8 = {
    name: {
      en: "CRISPR Technologies & Genome Engineering",
      es: "Tecnologías CRISPR e Ingeniería del Genoma",
      de: "CRISPR-Technologien und Genom-Engineering",
      nl: "CRISPR-technologieën en Genoom-engineering"
    },
  questions: [
    {
      question: {
        en: "What is developmental biology?",
        es: "¿Qué es la biología del desarrollo?",
        de: "Was ist Entwicklungsbiologie?",
        nl: "Wat is ontwikkelingsbiologie?"
      },
      options: [
        { en: "Study of how organisms grow and develop from fertilization to maturity", es: "Estudio de cómo los organismos crecen y se desarrollan desde la fertilización hasta la madurez", de: "Studie darüber, wie Organismen von der Befruchtung bis zur Reife wachsen und sich entwickeln", nl: "Studie van hoe organismen groeien en ontwikkelen van bevruchting tot volwassenheid" },
        { en: "Analysis of adult organism structure only", es: "Análisis solo de estructura de organismos adultos", de: "Nur Analyse der Struktur erwachsener Organismen", nl: "Alleen analyse van volwassen organisme structuur" },
        { en: "Study of genetic mutations", es: "Estudio de mutaciones genéticas", de: "Studie genetischer Mutationen", nl: "Studie van genetische mutaties" },
        { en: "Investigation of protein synthesis", es: "Investigación de síntesis de proteínas", de: "Untersuchung der Proteinsynthese", nl: "Onderzoek naar eiwitynthese" }
      ],
      correct: 0,
      explanation: {
        en: "Developmental biology studies the processes by which organisms grow and develop, including cell differentiation, pattern formation, and morphogenesis.",
        es: "La biología del desarrollo estudia los procesos por los cuales los organismos crecen y se desarrollan, incluyendo diferenciación celular y morfogénesis.",
        de: "Entwicklungsbiologie untersucht die Prozesse, durch die Organismen wachsen und sich entwickeln, einschließlich Zelldifferenzierung und Morphogenese.",
        nl: "Ontwikkelingsbiologie bestudeert de processen waardoor organismen groeien en ontwikkelen, inclusief celdifferentiatie en morfogenese."
      }
    },
    {
      question: {
        en: "What are homeotic genes?",
        es: "¿Qué son los genes homeóticos?",
        de: "Was sind homeotische Gene?",
        nl: "Wat zijn homeotische genen?"
      },
      options: [
        { en: "Genes that control body segment identity and pattern formation", es: "Genes que controlan la identidad de segmentos corporales y formación de patrones", de: "Gene, die die Identität von Körpersegmenten und Musterbildung kontrollieren", nl: "Genen die lichaamsegmentidentiteit en patroonvorming controleren" },
        { en: "Genes involved in DNA replication", es: "Genes involucrados en replicación de ADN", de: "Gene, die an der DNA-Replikation beteiligt sind", nl: "Genen betrokken bij DNA-replicatie" },
        { en: "Genes that regulate metabolism", es: "Genes que regulan el metabolismo", de: "Gene, die den Stoffwechsel regulieren", nl: "Genen die metabolisme reguleren" },
        { en: "Genes responsible for cell division", es: "Genes responsables de la división celular", de: "Gene, die für Zellteilung verantwortlich sind", nl: "Genen verantwoordelijk voor celdeling" }
      ],
      correct: 0,
      explanation: {
        en: "Homeotic genes are master regulatory genes that determine the identity of body segments during development, with mutations causing transformations of one body part into another.",
        es: "Los genes homeóticos son genes reguladores maestros que determinan la identidad de segmentos corporales durante el desarrollo.",
        de: "Homeotische Gene sind master-regulatorische Gene, die die Identität von Körpersegmenten während der Entwicklung bestimmen.",
        nl: "Homeotische genen zijn hoofdregulerende genen die de identiteit van lichaamssegmenten tijdens ontwikkeling bepalen."
      }
    },
    {
      question: {
        en: "What is the homeobox?",
        es: "¿Qué es la caja homeótica?",
        de: "Was ist die Homeobox?",
        nl: "Wat is de homeobox?"
      },
      options: [
        { en: "DNA sequence encoding helix-turn-helix DNA-binding domain in homeotic genes", es: "Secuencia de ADN que codifica dominio de unión al ADN hélice-vuelta-hélice en genes homeóticos", de: "DNA-Sequenz, die eine Helix-Turn-Helix-DNA-Bindungsdomäne in homeotischen Genen kodiert", nl: "DNA-sequentie die helix-draai-helix DNA-bindend domein in homeotische genen codeert" },
        { en: "Organelle containing genetic material", es: "Organelo que contiene material genético", de: "Organell, das genetisches Material enthält", nl: "Organel dat genetisch materiaal bevat" },
        { en: "Cellular structure for protein synthesis", es: "Estructura celular para síntesis de proteínas", de: "Zelluläre Struktur für Proteinsynthese", nl: "Cellulaire structuur voor eiwitvynthese" },
        { en: "Chromosome packaging unit", es: "Unidad de empaquetado de cromosomas", de: "Chromosomen-Verpackungseinheit", nl: "Chromosoomverpakkingseenheid" }
      ],
      correct: 0,
      explanation: {
        en: "The homeobox is a highly conserved 180-nucleotide DNA sequence found in homeotic genes that encodes a 60-amino acid helix-turn-helix DNA-binding domain called the homeodomain.",
        es: "La caja homeótica es una secuencia de ADN altamente conservada de 180 nucleótidos encontrada en genes homeóticos que codifica un dominio de unión al ADN.",
        de: "Die Homeobox ist eine hoch konservierte 180-Nukleotid-DNA-Sequenz in homeotischen Genen, die eine DNA-Bindungsdomäne kodiert.",
        nl: "De homeobox is een zeer geconserveerde 180-nucleotide DNA-sequentie in homeotische genen die een DNA-bindend domein codeert."
      }
    },
    {
      question: {
        en: "What are Hox genes?",
        es: "¿Qué son los genes Hox?",
        de: "Was sind Hox-Gene?",
        nl: "Wat zijn Hox-genen?"
      },
      options: [
        { en: "Homeotic genes that determine anterior-posterior axis development", es: "Genes homeóticos que determinan el desarrollo del eje anterior-posterior", de: "Homeotische Gene, die die anterior-posteriore Achsenentwicklung bestimmen", nl: "Homeotische genen die anterior-posterieure as-ontwikkeling bepalen" },
        { en: "Genes controlling cell cycle progression", es: "Genes que controlan la progresión del ciclo celular", de: "Gene, die die Zellzyklusprogression kontrollieren", nl: "Genen die celcyclus progressie controleren" },
        { en: "Genes involved in energy metabolism", es: "Genes involucrados en metabolismo energético", de: "Gene, die am Energiestoffwechsel beteiligt sind", nl: "Genen betrokken bij energiemetabolisme" },
        { en: "Genes regulating immune responses", es: "Genes que regulan respuestas inmunes", de: "Gene, die Immunantworten regulieren", nl: "Genen die immuunreacties reguleren" }
      ],
      correct: 0,
      explanation: {
        en: "Hox genes are a subset of homeotic genes that control the anterior-posterior body axis development and are organized in clusters with colinear expression patterns.",
        es: "Los genes Hox son un subconjunto de genes homeóticos que controlan el desarrollo del eje corporal anterior-posterior y están organizados en clusters.",
        de: "Hox-Gene sind eine Untergruppe homeotischer Gene, die die anterior-posteriore Körperachsenentwicklung kontrollieren und in Clustern organisiert sind.",
        nl: "Hox-genen zijn een subset van homeotische genen die anterior-posterieure lichaamsas-ontwikkeling controleren en georganiseerd zijn in clusters."
      }
    },
    {
      question: {
        en: "What is morphogenesis?",
        es: "¿Qué es la morfogénesis?",
        de: "Was ist Morphogenese?",
        nl: "Wat is morfogenese?"
      },
      options: [
        { en: "Process by which organisms develop their shape and structure", es: "Proceso por el cual los organismos desarrollan su forma y estructura", de: "Prozess, durch den Organismen ihre Form und Struktur entwickeln", nl: "Proces waardoor organismen hun vorm en structuur ontwikkelen" },
        { en: "Formation of genetic mutations", es: "Formación de mutaciones genéticas", de: "Bildung genetischer Mutationen", nl: "Vorming van genetische mutaties" },
        { en: "Process of cell division only", es: "Proceso solo de división celular", de: "Nur Prozess der Zellteilung", nl: "Alleen proces van celdeling" },
        { en: "Synthesis of new proteins", es: "Síntesis de nuevas proteínas", de: "Synthese neuer Proteine", nl: "Synthese van nieuwe eiwitten" }
      ],
      correct: 0,
      explanation: {
        en: "Morphogenesis is the biological process that causes an organism to develop its shape and structure through coordinated cell movements, growth, and differentiation.",
        es: "La morfogénesis es el proceso biológico que causa que un organismo desarrolle su forma y estructura a través de movimientos celulares coordinados.",
        de: "Morphogenese ist der biologische Prozess, der bewirkt, dass ein Organismus seine Form und Struktur durch koordinierte Zellbewegungen entwickelt.",
        nl: "Morfogenese is het biologische proces dat een organisme zijn vorm en structuur doet ontwikkelen door gecoördineerde celbewegin."
      }
    },
    {
      question: {
        en: "What is cell differentiation?",
        es: "¿Qué es la diferenciación celular?",
        de: "Was ist Zelldifferenzierung?",
        nl: "Wat is celdifferentiatie?"
      },
      options: [
        { en: "Process by which cells become specialized for specific functions", es: "Proceso por el cual las células se especializan para funciones específicas", de: "Prozess, durch den Zellen für spezifische Funktionen spezialisiert werden", nl: "Proces waardoor cellen gespecialiseerd worden voor specifieke functies" },
        { en: "Division of cells into two identical copies", es: "División de células en dos copias idénticas", de: "Teilung von Zellen in zwei identische Kopien", nl: "Deling van cellen in twee identieke kopieën" },
        { en: "Random changes in cell structure", es: "Cambios aleatorios en estructura celular", de: "Zufällige Änderungen in der Zellstruktur", nl: "Willekeurige veranderingen in celstructuur" },
        { en: "Cell death and removal", es: "Muerte celular y eliminación", de: "Zelltod und Entfernung", nl: "Celdood en verwijdering" }
      ],
      correct: 0,
      explanation: {
        en: "Cell differentiation is the process where less specialized cells become more specialized cell types with distinct functions, morphology, and gene expression patterns.",
        es: "La diferenciación celular es el proceso donde células menos especializadas se convierten en tipos celulares más especializados con funciones distintas.",
        de: "Zelldifferenzierung ist der Prozess, bei dem weniger spezialisierte Zellen zu spezialisierten Zelltypen mit unterschiedlichen Funktionen werden.",
        nl: "Celdifferentiatie is het proces waarbij minder gespecialiseerde cellen meer gespecialiseerde celtypen worden met verschillende functies."
      }
    },
    {
      question: {
        en: "What is gastrulation?",
        es: "¿Qué es la gastrulación?",
        de: "Was ist Gastrulation?",
        nl: "Wat is gastrulatie?"
      },
      options: [
        { en: "Embryonic process forming three primary germ layers", es: "Proceso embrionario formando tres capas germinales primarias", de: "Embryonaler Prozess, der drei primäre Keimschichten bildet", nl: "Embryonaal proces dat drie primaire kiemlagen vormt" },
        { en: "Formation of nervous system only", es: "Formación solo del sistema nervioso", de: "Nur Bildung des Nervensystems", nl: "Alleen vorming van zenuwstelsel" },
        { en: "Development of reproductive organs", es: "Desarrollo de órganos reproductivos", de: "Entwicklung der Fortpflanzungsorgane", nl: "Ontwikkeling van voortplantingsorganen" },
        { en: "Final stage of embryonic development", es: "Etapa final del desarrollo embrionario", de: "Finale Phase der embryonalen Entwicklung", nl: "Finale fase van embryonale ontwikkeling" }
      ],
      correct: 0,
      explanation: {
        en: "Gastrulation is a crucial early embryonic process where the blastula reorganizes into three primary germ layers: ectoderm, mesoderm, and endoderm.",
        es: "La gastrulación es un proceso embrionario temprano crucial donde la blástula se reorganiza en tres capas germinales primarias: ectodermo, mesodermo y endodermo.",
        de: "Gastrulation ist ein entscheidender früher embryonaler Prozess, bei dem sich die Blastula in drei primäre Keimschichten reorganisiert.",
        nl: "Gastrulatie is een cruciaal vroeg embryonaal proces waarbij de blastula zich reorganiseert in drie primaire kiemlagen."
      }
    },
    {
      question: {
        en: "What is neurulation?",
        es: "¿Qué es la neurulación?",
        de: "Was ist Neurulation?",
        nl: "Wat is neurulatie?"
      },
      options: [
        { en: "Formation of neural tube from neural plate during embryonic development", es: "Formación del tubo neural a partir de la placa neural durante el desarrollo embrionario", de: "Bildung des Neuralrohrs aus der Neuralplatte während der embryonalen Entwicklung", nl: "Vorming van neuraalbuist uit neuraalplaat tijdens embryonale ontwikkeling" },
        { en: "Development of muscle tissue", es: "Desarrollo de tejido muscular", de: "Entwicklung von Muskelgewebe", nl: "Ontwikkeling van spierweefsel" },
        { en: "Formation of blood vessels", es: "Formación de vasos sanguíneos", de: "Bildung von Blutgefäßen", nl: "Vorming van bloedvaten" },
        { en: "Growth of limb buds", es: "Crecimiento de yemas de extremidades", de: "Wachstum von Gliedmaßenknospen", nl: "Groei van ledematenknopen" }
      ],
      correct: 0,
      explanation: {
        en: "Neurulation is the process where the neural plate folds and fuses to form the neural tube, which will develop into the central nervous system.",
        es: "La neurulación es el proceso donde la placa neural se pliega y fusiona para formar el tubo neural, que se desarrollará en el sistema nervioso central.",
        de: "Neurulation ist der Prozess, bei dem sich die Neuralplatte faltet und fusioniert, um das Neuralrohr zu bilden, das sich zum zentralen Nervensystem entwickelt.",
        nl: "Neurulatie is het proces waarbij de neuraalplaat vouwt en fuseert om de neuraalbuist te vormen, die zich tot het centrale zenuwstelsel ontwikkelt."
      }
    },
    {
      question: {
        en: "What are germ layers?",
        es: "¿Qué son las capas germinales?",
        de: "Was sind Keimschichten?",
        nl: "Wat zijn kiemlagen?"
      },
      options: [
        { en: "Three primary tissue layers formed during gastrulation", es: "Tres capas de tejido primarias formadas durante la gastrulación", de: "Drei primäre Gewebeschichten, die während der Gastrulation gebildet werden", nl: "Drie primaire weefsellagen gevormd tijdens gastrulatie" },
        { en: "Protective layers around embryo", es: "Capas protectoras alrededor del embrión", de: "Schutzschichten um den Embryo", nl: "Beschermende lagen rond embryo" },
        { en: "Reproductive cell types only", es: "Solo tipos de células reproductivas", de: "Nur reproduktive Zelltypen", nl: "Alleen reproductieve celtypen" },
        { en: "Final differentiated tissues", es: "Tejidos diferenciados finales", de: "Final differenzierte Gewebe", nl: "Finale gedifferentieerde weefsels" }
      ],
      correct: 0,
      explanation: {
        en: "Germ layers are the three primary tissue layers (ectoderm, mesoderm, endoderm) formed during gastrulation that give rise to all organs and tissues in the body.",
        es: "Las capas germinales son las tres capas de tejido primarias (ectodermo, mesodermo, endodermo) formadas durante la gastrulación que dan lugar a todos los órganos.",
        de: "Keimschichten sind die drei primären Gewebeschichten (Ektoderm, Mesoderm, Endoderm), die während der Gastrulation gebildet werden.",
        nl: "Kiemlagen zijn de drie primaire weefsellagen (ectoderm, mesoderm, endoderm) gevormd tijdens gastrulatie die aanleiding geven tot alle organen."
      }
    },
    {
      question: {
        en: "What does the ectoderm give rise to?",
        es: "¿A qué da lugar el ectodermo?",
        de: "Was entwickelt sich aus dem Ektoderm?",
        nl: "Waartoe leidt het ectoderm?"
      },
      options: [
        { en: "Nervous system, epidermis, and sensory organs", es: "Sistema nervioso, epidermis y órganos sensoriales", de: "Nervensystem, Epidermis und Sinnesorgane", nl: "Zenuwstelsel, epidermis en zintuigorganen" },
        { en: "Digestive tract and lungs", es: "Tracto digestivo y pulmones", de: "Verdauungstrakt und Lungen", nl: "Spijsverteringskanaal en longen" },
        { en: "Muscles and bones", es: "Músculos y huesos", de: "Muskeln und Knochen", nl: "Spieren en botten" },
        { en: "Circulatory system only", es: "Solo sistema circulatorio", de: "Nur Kreislaufsystem", nl: "Alleen circulatiesysteem" }
      ],
      correct: 0,
      explanation: {
        en: "The ectoderm is the outermost germ layer that develops into the central and peripheral nervous systems, epidermis of the skin, and sensory organs.",
        es: "El ectodermo es la capa germinal más externa que se desarrolla en los sistemas nerviosos central y periférico, epidermis de la piel y órganos sensoriales.",
        de: "Das Ektoderm ist die äußerste Keimschicht, die sich zu zentralen und peripheren Nervensystemen, Epidermis der Haut und Sinnesorganen entwickelt.",
        nl: "Het ectoderm is de buitenste kiemlaag die zich ontwikkelt tot centrale en perifere zenuwstelsels, epidermis van de huid en zintuigorganen."
      }
    },
    {
      question: {
        en: "What does the mesoderm give rise to?",
        es: "¿A qué da lugar el mesodermo?",
        de: "Was entwickelt sich aus dem Mesoderm?",
        nl: "Waartoe leidt het mesoderm?"
      },
      options: [
        { en: "Muscles, bones, circulatory system, and kidneys", es: "Músculos, huesos, sistema circulatorio y riñones", de: "Muskeln, Knochen, Kreislaufsystem und Nieren", nl: "Spieren, botten, circulatiesysteem en nieren" },
        { en: "Nervous system and skin", es: "Sistema nervioso y piel", de: "Nervensystem und Haut", nl: "Zenuwstelsel en huid" },
        { en: "Digestive tract lining only", es: "Solo revestimiento del tracto digestivo", de: "Nur Verdauungstraktauskleidung", nl: "Alleen spijsverteringskanaal bekleding" },
        { en: "Reproductive organs only", es: "Solo órganos reproductivos", de: "Nur Fortpflanzungsorgane", nl: "Alleen voortplantingsorganen" }
      ],
      correct: 0,
      explanation: {
        en: "The mesoderm is the middle germ layer that develops into muscles, bones, cartilage, circulatory system, kidneys, and reproductive organs.",
        es: "El mesodermo es la capa germinal media que se desarrolla en músculos, huesos, cartílago, sistema circulatorio, riñones y órganos reproductivos.",
        de: "Das Mesoderm ist die mittlere Keimschicht, die sich zu Muskeln, Knochen, Knorpel, Kreislaufsystem, Nieren und Fortpflanzungsorganen entwickelt.",
        nl: "Het mesoderm is de middelste kiemlaag die zich ontwikkelt tot spieren, botten, kraakbeen, circulatiesysteem, nieren en voortplantingsorganen."
      }
    },
    {
      question: {
        en: "What does the endoderm give rise to?",
        es: "¿A qué da lugar el endodermo?",
        de: "Was entwickelt sich aus dem Endoderm?",
        nl: "Waartoe leidt het endoderm?"
      },
      options: [
        { en: "Digestive tract, lungs, liver, and pancreas", es: "Tracto digestivo, pulmones, hígado y páncreas", de: "Verdauungstrakt, Lungen, Leber und Pankreas", nl: "Spijsverteringskanaal, longen, lever en alvleesklier" },
        { en: "Nervous system and sensory organs", es: "Sistema nervioso y órganos sensoriales", de: "Nervensystem und Sinnesorgane", nl: "Zenuwstelsel en zintuigorganen" },
        { en: "Skeletal and muscular systems", es: "Sistemas esquelético y muscular", de: "Skelett- und Muskelsysteme", nl: "Skelet- en spierstelsels" },
        { en: "Skin and hair only", es: "Solo piel y cabello", de: "Nur Haut und Haare", nl: "Alleen huid en haar" }
      ],
      correct: 0,
      explanation: {
        en: "The endoderm is the innermost germ layer that develops into the lining of the digestive tract, respiratory system, liver, pancreas, and other internal organs.",
        es: "El endodermo es la capa germinal más interna que se desarrolla en el revestimiento del tracto digestivo, sistema respiratorio, hígado y páncreas.",
        de: "Das Endoderm ist die innerste Keimschicht, die sich zur Auskleidung des Verdauungstrakts, Atmungssystems, der Leber und des Pankreas entwickelt.",
        nl: "Het endoderm is de binnenste kiemlaag die zich ontwikkelt tot de bekleding van het spijsverteringskanaal, ademhalingssysteem, lever en alvleesklier."
      }
    },
    {
      question: {
        en: "What is pattern formation?",
        es: "¿Qué es la formación de patrones?",
        de: "Was ist Musterbildung?",
        nl: "Wat is patroonvorming?"
      },
      options: [
        { en: "Process establishing spatial organization of tissues and organs during development", es: "Proceso estableciendo organización espacial de tejidos y órganos durante el desarrollo", de: "Prozess, der die räumliche Organisation von Geweben und Organen während der Entwicklung etabliert", nl: "Proces dat ruimtelijke organisatie van weefsels en organen tijdens ontwikkeling vestigt" },
        { en: "Random arrangement of cells", es: "Arreglo aleatorio de células", de: "Zufällige Anordnung von Zellen", nl: "Willekeurige rangschikking van cellen" },
        { en: "Formation of genetic mutations", es: "Formación de mutaciones genéticas", de: "Bildung genetischer Mutationen", nl: "Vorming van genetische mutaties" },
        { en: "Cell division patterns only", es: "Solo patrones de división celular", de: "Nur Zellteilungsmuster", nl: "Alleen celdelingspatronen" }
      ],
      correct: 0,
      explanation: {
        en: "Pattern formation is the process by which cells acquire positional information and organize into specific spatial arrangements to form tissues and organs.",
        es: "La formación de patrones es el proceso por el cual las células adquieren información posicional y se organizan en arreglos espaciales específicos.",
        de: "Musterbildung ist der Prozess, durch den Zellen Positionsinformationen erwerben und sich in spezifische räumliche Anordnungen organisieren.",
        nl: "Patroonvorming is het proces waarbij cellen positie-informatie verkrijgen en zich organiseren in specifieke ruimtelijke arrangementen."
      }
    },
    {
      question: {
        en: "What are morphogens?",
        es: "¿Qué son los morfógenos?",
        de: "Was sind Morphogene?",
        nl: "Wat zijn morfogenen?"
      },
      options: [
        { en: "Signaling molecules that provide positional information in developing tissues", es: "Moléculas de señalización que proporcionan información posicional en tejidos en desarrollo", de: "Signalmoleküle, die Positionsinformationen in sich entwickelnden Geweben liefern", nl: "Signaalmoleculen die positie-informatie verschaffen in ontwikkelende weefsels" },
        { en: "Structural proteins in cell membranes", es: "Proteínas estructurales en membranas celulares", de: "Strukturproteine in Zellmembranen", nl: "Structurele eiwitten in celmembranen" },
        { en: "Enzymes for DNA replication", es: "Enzimas para replicación de ADN", de: "Enzyme für DNA-Replikation", nl: "Enzymen voor DNA-replicatie" },
        { en: "Transport proteins only", es: "Solo proteínas de transporte", de: "Nur Transportproteine", nl: "Alleen transporteiwitten" }
      ],
      correct: 0,
      explanation: {
        en: "Morphogens are signaling molecules that form concentration gradients and provide positional information to cells, instructing them on their developmental fate.",
        es: "Los morfógenos son moléculas de señalización que forman gradientes de concentración y proporcionan información posicional a las células.",
        de: "Morphogene sind Signalmoleküle, die Konzentrationsgradienten bilden und Zellen Positionsinformationen liefern, die sie über ihr Entwicklungsschicksal informieren.",
        nl: "Morfogenen zijn signaalmoleculen die concentratiegradiënten vormen en positie-informatie aan cellen verschaffen, hen instructies gevend over hun ontwikkelingsbestemming."
      }
    },
    {
      question: {
        en: "What is induction in development?",
        es: "¿Qué es la inducción en el desarrollo?",
        de: "Was ist Induktion in der Entwicklung?",
        nl: "Wat is inductie in ontwikkeling?"
      },
      options: [
        { en: "Process where one group of cells influences the development of neighboring cells", es: "Proceso donde un grupo de células influye en el desarrollo de células vecinas", de: "Prozess, bei dem eine Zellgruppe die Entwicklung benachbarter Zellen beeinflusst", nl: "Proces waarbij een groep cellen de ontwikkeling van naburige cellen beïnvloedt" },
        { en: "Spontaneous cell differentiation", es: "Diferenciación celular espontánea", de: "Spontane Zelldifferenzierung", nl: "Spontane celdifferentiatie" },
        { en: "Cell death mechanism", es: "Mecanismo de muerte celular", de: "Zellsterbemechanismus", nl: "Celsterftmechanisme" },
        { en: "DNA replication process", es: "Proceso de replicación de ADN", de: "DNA-Replikationsprozess", nl: "DNA-replicatieproces" }
      ],
      correct: 0,
      explanation: {
        en: "Induction is a fundamental developmental process where signaling from one group of cells (the inducer) causes changes in gene expression and fate in neighboring cells.",
        es: "La inducción es un proceso de desarrollo fundamental donde la señalización de un grupo de células (el inductor) causa cambios en expresión génica en células vecinas.",
        de: "Induktion ist ein fundamentaler Entwicklungsprozess, bei dem Signale von einer Zellgruppe (dem Induktor) Änderungen in der Genexpression in Nachbarzellen bewirken.",
        nl: "Inductie is een fundamenteel ontwikkelingsproces waarbij signalering van een groep cellen (de inductor) veranderingen in genexpressie in naburige cellen veroorzaakt."
      }
    },
    {
      question: {
        en: "What is apoptosis?",
        es: "¿Qué es la apoptosis?",
        de: "Was ist Apoptose?",
        nl: "Wat is apoptose?"
      },
      options: [
        { en: "Programmed cell death that plays essential roles in development", es: "Muerte celular programada que juega papeles esenciales en el desarrollo", de: "Programmierter Zelltod, der wesentliche Rollen in der Entwicklung spielt", nl: "Geprogrammeerde celdood die essentiële rollen speelt in ontwikkeling" },
        { en: "Uncontrolled cell division", es: "División celular descontrolada", de: "Unkontrollierte Zellteilung", nl: "Ongecontroleerde celdeling" },
        { en: "Cell fusion process", es: "Proceso de fusión celular", de: "Zellverschmelzungsprozess", nl: "Celfusieproces" },
        { en: "Cellular energy production", es: "Producción de energía celular", de: "Zelluläre Energieproduktion", nl: "Cellulaire energieproductie" }
      ],
      correct: 0,
      explanation: {
        en: "Apoptosis is programmed cell death that removes unnecessary or damaged cells during development, helping to sculpt tissues and eliminate structures.",
        es: "La apoptosis es muerte celular programada que remueve células innecesarias o dañadas durante el desarrollo, ayudando a esculpir tejidos.",
        de: "Apoptose ist programmierter Zelltod, der unnötige oder beschädigte Zellen während der Entwicklung entfernt und dabei hilft, Gewebe zu formen.",
        nl: "Apoptose is geprogrammeerde celdood die onnodige of beschadigde cellen tijdens ontwikkeling verwijdert, helpend om weefsels te vormen."
      }
    },
    {
      question: {
        en: "What are stem cells?",
        es: "¿Qué son las células madre?",
        de: "Was sind Stammzellen?",
        nl: "Wat zijn stamcellen?"
      },
      options: [
        { en: "Undifferentiated cells capable of self-renewal and differentiation", es: "Células no diferenciadas capaces de auto-renovación y diferenciación", de: "Undifferenzierte Zellen, die zur Selbsterneuerung und Differenzierung fähig sind", nl: "Ongedifferentieerde cellen die tot zelfvernieuwing en differentiatie in staat zijn" },
        { en: "Fully differentiated adult cells", es: "Células adultas completamente diferenciadas", de: "Vollständig differenzierte erwachsene Zellen", nl: "Volledig gedifferentieerde volwassen cellen" },
        { en: "Dead cells in tissues", es: "Células muertas en tejidos", de: "Tote Zellen in Geweben", nl: "Dode cellen in weefsels" },
        { en: "Reproductive cells only", es: "Solo células reproductivas", de: "Nur reproduktive Zellen", nl: "Alleen reproductieve cellen" }
      ],
      correct: 0,
      explanation: {
        en: "Stem cells are undifferentiated cells that can undergo self-renewal to maintain their population and differentiate into specialized cell types.",
        es: "Las células madre son células no diferenciadas que pueden sufrir auto-renovación para mantener su población y diferenciarse en tipos celulares especializados.",
        de: "Stammzellen sind undifferenzierte Zellen, die Selbsterneuerung durchlaufen können, um ihre Population zu erhalten und sich zu spezialisierten Zelltypen zu differenzieren.",
        nl: "Stamcellen zijn ongedifferentieerde cellen die zelfvernieuwing kunnen ondergaan om hun populatie te behouden en kunnen differentiëren in gespecialiseerde celtypen."
      }
    },
    {
      question: {
        en: "What is totipotency?",
        es: "¿Qué es la totipotencia?",
        de: "Was ist Totipotenz?",
        nl: "Wat is totipotentie?"
      },
      options: [
        { en: "Ability of a cell to develop into any cell type including extraembryonic tissues", es: "Capacidad de una célula para desarrollarse en cualquier tipo celular incluyendo tejidos extraembrionarios", de: "Fähigkeit einer Zelle, sich zu jedem Zelltyp einschließlich extraembryonaler Gewebe zu entwickeln", nl: "Vermogen van een cel om zich te ontwikkelen tot elk celtype inclusief extra-embryonale weefsels" },
        { en: "Ability to form only neural tissues", es: "Capacidad de formar solo tejidos neurales", de: "Fähigkeit, nur Neuralgewebe zu bilden", nl: "Vermogen om alleen neuraal weefsel te vormen" },
        { en: "Inability to differentiate", es: "Incapacidad para diferenciarse", de: "Unfähigkeit zu differenzieren", nl: "Onvermogen om te differentiëren" },
        { en: "Limited to blood cell formation", es: "Limitado a formación de células sanguíneas", de: "Begrenzt auf Blutzellenbildung", nl: "Beperkt tot bloedcelvorming" }
      ],
      correct: 0,
      explanation: {
        en: "Totipotency is the highest level of stem cell potency, where cells can develop into any cell type in the organism, including extraembryonic tissues like the placenta.",
        es: "La totipotencia es el nivel más alto de potencia de células madre, donde las células pueden desarrollarse en cualquier tipo celular en el organismo.",
        de: "Totipotenz ist der höchste Grad der Stammzellpotenz, bei dem sich Zellen zu jedem Zelltyp im Organismus entwickeln können.",
        nl: "Totipotentie is het hoogste niveau van stamcelpotentie, waarbij cellen zich kunnen ontwikkelen tot elk celtype in het organisme."
      }
    },
    {
      question: {
        en: "What is pluripotency?",
        es: "¿Qué es la pluripotencia?",
        de: "Was ist Pluripotenz?",
        nl: "Wat is pluripotentie?"
      },
      options: [
        { en: "Ability to differentiate into any of the three germ layers", es: "Capacidad de diferenciarse en cualquiera de las tres capas germinales", de: "Fähigkeit, sich in jede der drei Keimschichten zu differenzieren", nl: "Vermogen om te differentiëren in elk van de drie kiemlagen" },
        { en: "Ability to form only one cell type", es: "Capacidad de formar solo un tipo celular", de: "Fähigkeit, nur einen Zelltyp zu bilden", nl: "Vermogen om slechts één celtype te vormen" },
        { en: "Complete loss of differentiation potential", es: "Pérdida completa de potencial de diferenciación", de: "Vollständiger Verlust des Differenzierungspotentials", nl: "Volledig verlies van differentiatiepotentiaal" },
        { en: "Ability to form extraembryonic tissues only", es: "Capacidad de formar solo tejidos extraembrionarios", de: "Fähigkeit, nur extraembryonale Gewebe zu bilden", nl: "Vermogen om alleen extra-embryonale weefsels te vormen" }
      ],
      correct: 0,
      explanation: {
        en: "Pluripotent stem cells can differentiate into any cell type derived from the three primary germ layers but cannot form extraembryonic tissues.",
        es: "Las células madre pluripotentes pueden diferenciarse en cualquier tipo celular derivado de las tres capas germinales primarias pero no pueden formar tejidos extraembrionarios.",
        de: "Pluripotente Stammzellen können sich zu jedem Zelltyp differenzieren, der von den drei primären Keimschichten abgeleitet ist.",
        nl: "Pluripotente stamcellen kunnen differentiëren in elk celtype afgeleid van de drie primaire kiemlagen maar kunnen geen extra-embryonale weefsels vormen."
      }
    },
    {
      question: {
        en: "What is multipotency?",
        es: "¿Qué es la multipotencia?",
        de: "Was ist Multipotenz?",
        nl: "Wat is multipotentie?"
      },
      options: [
        { en: "Ability to differentiate into a limited number of related cell types", es: "Capacidad de diferenciarse en un número limitado de tipos celulares relacionados", de: "Fähigkeit, sich in eine begrenzte Anzahl verwandter Zelltypen zu differenzieren", nl: "Vermogen om te differentiëren in een beperkt aantal gerelateerde celtypen" },
        { en: "Ability to form any cell type in the body", es: "Capacidad de formar cualquier tipo celular en el cuerpo", de: "Fähigkeit, jeden Zelltyp im Körper zu bilden", nl: "Vermogen om elk celtype in het lichaam te vormen" },
        { en: "Inability to differentiate at all", es: "Incapacidad total para diferenciarse", de: "Völlige Unfähigkeit zu differenzieren", nl: "Volledig onvermogen om te differentiëren" },
        { en: "Ability to form embryos", es: "Capacidad de formar embriones", de: "Fähigkeit, Embryonen zu bilden", nl: "Vermogen om embryo's te vormen" }
      ],
      correct: 0,
      explanation: {
        en: "Multipotent stem cells have a restricted differentiation potential and can only give rise to a limited number of cell types within a specific tissue or organ system.",
        es: "Las células madre multipotentes tienen potencial de diferenciación restringido y solo pueden dar lugar a un número limitado de tipos celulares dentro de un sistema específico.",
        de: "Multipotente Stammzellen haben ein eingeschränktes Differenzierungspotential und können nur eine begrenzte Anzahl von Zelltypen innerhalb eines spezifischen Systems bilden.",
        nl: "Multipotente stamcellen hebben een beperkt differentiatiepotentiaal en kunnen slechts een beperkt aantal celtypen binnen een specifiek systeem vormen."
      }
    },
    {
      question: {
        en: "What are transcription factors in development?",
        es: "¿Qué son los factores de transcripción en el desarrollo?",
        de: "Was sind Transkriptionsfaktoren in der Entwicklung?",
        nl: "Wat zijn transcriptiefactoren in ontwikkeling?"
      },
      options: [
        { en: "Proteins that regulate gene expression during developmental processes", es: "Proteínas que regulan la expresión génica durante procesos de desarrollo", de: "Proteine, die die Genexpression während Entwicklungsprozessen regulieren", nl: "Eiwitten die genexpressie reguleren tijdens ontwikkelingsprocessen" },
        { en: "Structural components of chromosomes", es: "Componentes estructurales de cromosomas", de: "Strukturelle Komponenten der Chromosomen", nl: "Structurele componenten van chromosomen" },
        { en: "Enzymes for DNA replication", es: "Enzimas para replicación de ADN", de: "Enzyme für DNA-Replikation", nl: "Enzymen voor DNA-replicatie" },
        { en: "Transport proteins in cells", es: "Proteínas de transporte en células", de: "Transportproteine in Zellen", nl: "Transporteiwitten in cellen" }
      ],
      correct: 0,
      explanation: {
        en: "Developmental transcription factors are regulatory proteins that bind to specific DNA sequences and control the expression of genes responsible for cell fate determination and differentiation.",
        es: "Los factores de transcripción del desarrollo son proteínas reguladoras que se unen a secuencias específicas de ADN y controlan la expresión de genes responsables de la determinación del destino celular.",
        de: "Entwicklungs-Transkriptionsfaktoren sind regulatorische Proteine, die an spezifische DNA-Sequenzen binden und die Expression von Genen kontrollieren, die für Zellfatbestimmung verantwortlich sind.",
        nl: "Ontwikkelings-transcriptiefactoren zijn regulatoire eiwitten die binden aan specifieke DNA-sequenties en de expressie van genen controleren die verantwoordelijk zijn voor celbesteming."
      }
    },
    {
      question: {
        en: "What is the role of signaling pathways in development?",
        es: "¿Cuál es el papel de las vías de señalización en el desarrollo?",
        de: "Was ist die Rolle von Signalwegen in der Entwicklung?",
        nl: "Wat is de rol van signaalroutes in ontwikkeling?"
      },
      options: [
        { en: "Coordinate cell communication and developmental decisions", es: "Coordinan comunicación celular y decisiones de desarrollo", de: "Koordinieren Zellkommunikation und Entwicklungsentscheidungen", nl: "Coördineren celcommunicatie en ontwikkelingsbeslissingen" },
        { en: "Only involved in adult tissue maintenance", es: "Solo involucradas en mantenimiento de tejidos adultos", de: "Nur an der Wartung erwachsener Gewebe beteiligt", nl: "Alleen betrokken bij volwassen weefselonderhoud" },
        { en: "Function independently of cell-cell communication", es: "Funcionan independientemente de comunicación célula-célula", de: "Funktionieren unabhängig von Zell-Zell-Kommunikation", nl: "Functioneren onafhankelijk van cel-cel communicatie" },
        { en: "Regulate metabolism only", es: "Regulan solo el metabolismo", de: "Regulieren nur den Stoffwechsel", nl: "Reguleren alleen metabolisme" }
      ],
      correct: 0,
      explanation: {
        en: "Signaling pathways in development coordinate cell-to-cell communication, allowing cells to respond to positional cues and make appropriate developmental decisions.",
        es: "Las vías de señalización en el desarrollo coordinan la comunicación célula a célula, permitiendo a las células responder a señales posicionales y tomar decisiones de desarrollo apropiadas.",
        de: "Signalwege in der Entwicklung koordinieren Zell-zu-Zell-Kommunikation, wodurch Zellen auf Positionssignale reagieren und angemessene Entwicklungsentscheidungen treffen können.",
        nl: "Signaalroutes in ontwikkeling coördineren cel-tot-cel communicatie, waardoor cellen kunnen reageren op positie-aanwijzingen en juiste ontwikkelingsbeslissingen maken."
      }
    },
    {
      question: {
        en: "What is regenerative medicine?",
        es: "¿Qué es la medicina regenerativa?",
        de: "Was ist regenerative Medizin?",
        nl: "Wat is regeneratieve geneeskunde?"
      },
      options: [
        { en: "Medical field using stem cells and developmental biology to repair tissues", es: "Campo médico usando células madre y biología del desarrollo para reparar tejidos", de: "Medizinisches Feld, das Stammzellen und Entwicklungsbiologie zur Gewebereparatur nutzt", nl: "Medisch veld dat stamcellen en ontwikkelingsbiologie gebruikt om weefsels te repareren" },
        { en: "Traditional surgery techniques only", es: "Solo técnicas quirúrgicas tradicionales", de: "Nur traditionelle Chirurgietechniken", nl: "Alleen traditionele chirurgische technieken" },
        { en: "Drug-based treatments exclusively", es: "Exclusivamente tratamientos basados en medicamentos", de: "Ausschließlich medikamentenbasierte Behandlungen", nl: "Uitsluitend medicijn-gebaseerde behandelingen" },
        { en: "Preventive healthcare measures", es: "Medidas preventivas de atención médica", de: "Vorbeugende Gesundheitsmaßnahmen", nl: "Preventieve gezondheidszorgmaatregelen" }
      ],
      correct: 0,
      explanation: {
        en: "Regenerative medicine applies principles of developmental biology and stem cell research to develop therapies that can repair, replace, or regenerate damaged tissues and organs.",
        es: "La medicina regenerativa aplica principios de biología del desarrollo e investigación de células madre para desarrollar terapias que puedan reparar, reemplazar o regenerar tejidos dañados.",
        de: "Regenerative Medizin wendet Prinzipien der Entwicklungsbiologie und Stammzellforschung an, um Therapien zu entwickeln, die beschädigte Gewebe reparieren können.",
        nl: "Regeneratieve geneeskunde past principes van ontwikkelingsbiologie en stamcelonderzoek toe om therapieën te ontwikkelen die beschadigde weefsels kunnen repareren."
      }
    },
    {
      question: {
        en: "What is the significance of model organisms in developmental biology?",
        es: "¿Cuál es la importancia de los organismos modelo en biología del desarrollo?",
        de: "Was ist die Bedeutung von Modellorganismen in der Entwicklungsbiologie?",
        nl: "Wat is het belang van modelorganismen in ontwikkelingsbiologie?"
      },
      options: [
        { en: "They provide accessible systems to study fundamental developmental processes", es: "Proporcionan sistemas accesibles para estudiar procesos fundamentales de desarrollo", de: "Sie bieten zugängliche Systeme zur Untersuchung grundlegender Entwicklungsprozesse", nl: "Ze bieden toegankelijke systemen om fundamentele ontwikkelingsprocessen te bestuderen" },
        { en: "They are only used for genetic engineering", es: "Solo se usan para ingeniería genética", de: "Sie werden nur für Gentechnik verwendet", nl: "Ze worden alleen gebruikt voor genetische manipulatie" },
        { en: "They replace the need for human studies entirely", es: "Reemplazan completamente la necesidad de estudios humanos", de: "Sie ersetzen die Notwendigkeit menschlicher Studien vollständig", nl: "Ze vervangen de behoefte aan menselijke studies volledig" },
        { en: "They are used only for drug testing", es: "Se usan solo para pruebas de medicamentos", de: "Sie werden nur für Medikamententests verwendet", nl: "Ze worden alleen gebruikt voor medicijntesten" }
      ],
      correct: 0,
      explanation: {
        en: "Model organisms like Drosophila, C. elegans, zebrafish, and mice provide experimentally tractable systems to study conserved developmental mechanisms that apply across species.",
        es: "Los organismos modelo como Drosophila, C. elegans, pez cebra y ratones proporcionan sistemas experimentalmente manejables para estudiar mecanismos de desarrollo conservados.",
        de: "Modellorganismen wie Drosophila, C. elegans, Zebrafisch und Mäuse bieten experimentell handhabbare Systeme zur Untersuchung konservierter Entwicklungsmechanismen.",
        nl: "Modelorganismen zoals Drosophila, C. elegans, zebravis en muizen bieden experimenteel hanteerbare systemen om geconserveerde ontwikkelingsmechanismen te bestuderen."
      }
    },
    {
      question: {
        en: "What is CRISPR?",
        es: "¿Qué es CRISPR?",
        de: "Was ist CRISPR?",
        nl: "Wat is CRISPR?"
      },
      options: [
        { en: "Clustered Regularly Interspaced Short Palindromic Repeats - a prokaryotic adaptive immune system", es: "Repeticiones Palindrómicas Cortas Agrupadas y Regularmente Interespaciadas - sistema inmune adaptativo procariota", de: "Clustered Regularly Interspaced Short Palindromic Repeats - ein prokaryotisches adaptives Immunsystem", nl: "Clustered Regularly Interspaced Short Palindromic Repeats - een prokaryotisch adaptief immuunsysteem" },
        { en: "A type of DNA sequencing technology", es: "Un tipo de tecnología de secuenciación de ADN", de: "Eine Art DNA-Sequenzierungstechnologie", nl: "Een type DNA-sequencingtechnologie" },
        { en: "A protein involved in DNA repair", es: "Una proteína involucrada en reparación de ADN", de: "Ein Protein, das an der DNA-Reparatur beteiligt ist", nl: "Een eiwit betrokken bij DNA-reparatie" },
        { en: "A method for cloning genes", es: "Un método para clonar genes", de: "Eine Methode zum Klonen von Genen", nl: "Een methode voor het klonen van genen" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPR is a natural prokaryotic adaptive immune system that has been adapted as a powerful genome editing tool, consisting of DNA sequences with palindromic repeats.",
        es: "CRISPR es un sistema inmune adaptativo procariota natural que ha sido adaptado como una herramienta poderosa de edición del genoma, consistiendo en secuencias de ADN con repeticiones palindrómicas.",
        de: "CRISPR ist ein natürliches prokaryotisches adaptives Immunsystem, das als mächtiges Genom-Editierungswerkzeug adaptiert wurde, bestehend aus DNA-Sequenzen mit palindromischen Wiederholungen.",
        nl: "CRISPR is een natuurlijk prokaryotisch adaptief immuunsysteem dat is aangepast als een krachtig genoombewerking instrument, bestaande uit DNA-sequenties met palindromische herhalingen."
      }
    },
    {
      question: {
        en: "What is Cas9?",
        es: "¿Qué es Cas9?",
        de: "Was ist Cas9?",
        nl: "Wat is Cas9?"
      },
      options: [
        { en: "CRISPR-associated endonuclease that cuts DNA at specific sequences", es: "Endonucleasa asociada a CRISPR que corta ADN en secuencias específicas", de: "CRISPR-assoziierte Endonuklease, die DNA an spezifischen Sequenzen schneidet", nl: "CRISPR-geassocieerde endonuclease die DNA op specifieke sequenties knipt" },
        { en: "A type of guide RNA molecule", es: "Un tipo de molécula de ARN guía", de: "Eine Art Guide-RNA-Molekül", nl: "Een type gids-RNA molecuul" },
        { en: "A DNA repair enzyme", es: "Una enzima de reparación de ADN", de: "Ein DNA-Reparaturenzym", nl: "Een DNA-reparatie enzym" },
        { en: "A transcription factor", es: "Un factor de transcripción", de: "Ein Transkriptionsfaktor", nl: "Een transcriptiefactor" }
      ],
      correct: 0,
      explanation: {
        en: "Cas9 is a CRISPR-associated protein that functions as an RNA-guided DNA endonuclease, creating double-strand breaks at target sequences specified by guide RNAs.",
        es: "Cas9 es una proteína asociada a CRISPR que funciona como endonucleasa de ADN guiada por ARN, creando roturas de doble cadena en secuencias objetivo especificadas por ARNs guía.",
        de: "Cas9 ist ein CRISPR-assoziiertes Protein, das als RNA-geführte DNA-Endonuklease fungiert und Doppelstrangbrüche an Zielsequenzen erzeugt, die von Guide-RNAs spezifiziert werden.",
        nl: "Cas9 is een CRISPR-geassocieerd eiwit dat functioneert als RNA-geleide DNA-endonuclease, dubbelstrengs breuken creërend op doelsequenties gespecificeerd door gids-RNA's."
      }
    },
    {
      question: {
        en: "What is a guide RNA (gRNA)?",
        es: "¿Qué es un ARN guía (gRNA)?",
        de: "Was ist eine Guide-RNA (gRNA)?",
        nl: "Wat is een gids-RNA (gRNA)?"
      },
      options: [
        { en: "Small RNA that directs Cas proteins to specific DNA sequences", es: "ARN pequeño que dirige proteínas Cas a secuencias específicas de ADN", de: "Kleine RNA, die Cas-Proteine zu spezifischen DNA-Sequenzen dirigiert", nl: "Klein RNA dat Cas-eiwitten naar specifieke DNA-sequenties dirigeert" },
        { en: "Messenger RNA that codes for Cas proteins", es: "ARN mensajero que codifica proteínas Cas", de: "Messenger-RNA, die für Cas-Proteine kodiert", nl: "Messenger-RNA dat codeert voor Cas-eiwitten" },
        { en: "Transfer RNA for protein synthesis", es: "ARN de transferencia para síntesis de proteínas", de: "Transfer-RNA für Proteinsynthese", nl: "Transfer-RNA voor eiwitynthese" },
        { en: "Ribosomal RNA component", es: "Componente de ARN ribosomal", de: "Ribosomale RNA-Komponente", nl: "Ribosomale RNA-component" }
      ],
      correct: 0,
      explanation: {
        en: "Guide RNAs are synthetic RNA molecules designed to be complementary to target DNA sequences, directing Cas proteins to make precise cuts at desired genomic locations.",
        es: "Los ARNs guía son moléculas de ARN sintéticas diseñadas para ser complementarias a secuencias de ADN objetivo, dirigiendo proteínas Cas para hacer cortes precisos en ubicaciones genómicas deseadas.",
        de: "Guide-RNAs sind synthetische RNA-Moleküle, die so entworfen sind, dass sie komplementär zu Ziel-DNA-Sequenzen sind und Cas-Proteine dirigieren, um präzise Schnitte an gewünschten genomischen Orten zu machen.",
        nl: "Gids-RNA's zijn synthetische RNA-moleculen ontworpen om complementair te zijn aan doel-DNA-sequenties, Cas-eiwitten dirigerend om precieze knipplaatsen op gewenste genomische locaties te maken."
      }
    },
    {
      question: {
        en: "What is a protospacer adjacent motif (PAM)?",
        es: "¿Qué es un motivo adyacente al protoespaciador (PAM)?",
        de: "Was ist ein Protospacer Adjacent Motif (PAM)?",
        nl: "Wat is een protospacer adjacent motif (PAM)?"
      },
      options: [
        { en: "Short DNA sequence required next to the target site for Cas9 recognition and binding", es: "Secuencia corta de ADN requerida junto al sitio objetivo para reconocimiento y unión de Cas9", de: "Kurze DNA-Sequenz, die neben der Zielstelle für Cas9-Erkennung und -Bindung erforderlich ist", nl: "Korte DNA-sequentie vereist naast de doelplaats voor Cas9-herkenning en binding" },
        { en: "The guide RNA binding site", es: "El sitio de unión del ARN guía", de: "Die Guide-RNA-Bindungsstelle", nl: "De gids-RNA bindingsplaats" },
        { en: "A protein domain in Cas9", es: "Un dominio proteico en Cas9", de: "Eine Proteindomäne in Cas9", nl: "Een eiwitdomein in Cas9" },
        { en: "The DNA repair template", es: "La plantilla de reparación de ADN", de: "Die DNA-Reparaturvorlage", nl: "Het DNA-reparatiesjabloon" }
      ],
      correct: 0,
      explanation: {
        en: "PAM sequences are short DNA motifs (typically 2-6 nucleotides) that must be present adjacent to the target sequence for Cas9 to bind and cleave DNA effectively.",
        es: "Las secuencias PAM son motivos cortos de ADN (típicamente 2-6 nucleótidos) que deben estar presentes adyacentes a la secuencia objetivo para que Cas9 se una y corte ADN efectivamente.",
        de: "PAM-Sequenzen sind kurze DNA-Motive (typischerweise 2-6 Nukleotide), die neben der Zielsequenz vorhanden sein müssen, damit Cas9 effektiv binden und DNA spalten kann.",
        nl: "PAM-sequenties zijn korte DNA-motieven (typisch 2-6 nucleotiden) die aanwezig moeten zijn naast de doelsequentie voor Cas9 om effectief te binden en DNA te knippen."
      }
    },
    {
      question: {
        en: "What is homology-directed repair (HDR)?",
        es: "¿Qué es la reparación dirigida por homología (HDR)?",
        de: "Was ist Homology-directed Repair (HDR)?",
        nl: "Wat is homology-directed repair (HDR)?"
      },
      options: [
        { en: "DNA repair mechanism that uses a template to make precise insertions or corrections", es: "Mecanismo de reparación de ADN que usa una plantilla para hacer inserciones o correcciones precisas", de: "DNA-Reparaturmechanismus, der eine Vorlage verwendet, um präzise Insertionen oder Korrekturen zu machen", nl: "DNA-reparatiemechanisme dat een sjabloon gebruikt om precieze inserties of correcties te maken" },
        { en: "Random DNA repair without template", es: "Reparación aleatoria de ADN sin plantilla", de: "Zufällige DNA-Reparatur ohne Vorlage", nl: "Willekeurige DNA-reparatie zonder sjabloon" },
        { en: "Process of DNA replication", es: "Proceso de replicación de ADN", de: "Prozess der DNA-Replikation", nl: "Proces van DNA-replicatie" },
        { en: "Mechanism for DNA degradation", es: "Mecanismo para degradación de ADN", de: "Mechanismus für DNA-Abbau", nl: "Mechanisme voor DNA-afbraak" }
      ],
      correct: 0,
      explanation: {
        en: "HDR is a high-fidelity DNA repair pathway that can be exploited in CRISPR applications to introduce precise changes by providing a donor DNA template with desired modifications.",
        es: "HDR es una vía de reparación de ADN de alta fidelidad que puede explotarse en aplicaciones CRISPR para introducir cambios precisos proporcionando una plantilla de ADN donador con modificaciones deseadas.",
        de: "HDR ist ein hochpräziser DNA-Reparaturweg, der in CRISPR-Anwendungen ausgenutzt werden kann, um präzise Änderungen einzuführen, indem eine Donor-DNA-Vorlage mit gewünschten Modifikationen bereitgestellt wird.",
        nl: "HDR is een hoge-betrouwbaarheid DNA-reparatieroute die kan worden uitgebuit in CRISPR-toepassingen om precieze veranderingen in te voeren door een donor-DNA-sjabloon met gewenste modificaties te verstrekken."
      }
    },
    {
      question: {
        en: "What is non-homologous end joining (NHEJ)?",
        es: "¿Qué es la unión de extremos no homólogos (NHEJ)?",
        de: "Was ist Non-homologous End Joining (NHEJ)?",
        nl: "Wat is non-homologous end joining (NHEJ)?"
      },
      options: [
        { en: "Error-prone DNA repair mechanism that can create insertions or deletions", es: "Mecanismo de reparación de ADN propenso a errores que puede crear inserciones o deleciones", de: "Fehleranfälliger DNA-Reparaturmechanismus, der Insertionen oder Deletionen erzeugen kann", nl: "Foutgevoelig DNA-reparatiemechanisme dat inserties of deleties kan creëren" },
        { en: "High-fidelity DNA repair using templates", es: "Reparación de ADN de alta fidelidad usando plantillas", de: "Hochpräzise DNA-Reparatur mit Vorlagen", nl: "Hoge-betrouwbaarheid DNA-reparatie met sjablonen" },
        { en: "Process of DNA replication", es: "Proceso de replicación de ADN", de: "Prozess der DNA-Replikation", nl: "Proces van DNA-replicatie" },
        { en: "Mechanism for chromosome segregation", es: "Mecanismo para segregación cromosómica", de: "Mechanismus für Chromosomensegregation", nl: "Mechanisme voor chromosoomscheiding" }
      ],
      correct: 0,
      explanation: {
        en: "NHEJ is the predominant repair pathway for double-strand breaks in mammalian cells, often resulting in small insertions or deletions that can disrupt gene function - useful for gene knockout.",
        es: "NHEJ es la vía de reparación predominante para roturas de doble cadena en células de mamíferos, a menudo resultando en pequeñas inserciones o deleciones que pueden interrumpir la función génica.",
        de: "NHEJ ist der vorherrschende Reparaturweg für Doppelstrangbrüche in Säugetierzellen, der oft zu kleinen Insertionen oder Deletionen führt, die die Genfunktion stören können.",
        nl: "NHEJ is de overheersende reparatieroute voor dubbelstrengs breuken in zoogdiercellen, vaak resulterend in kleine inserties of deleties die genfunctie kunnen verstoren."
      }
    },
    {
      question: {
        en: "What is CRISPR-Cas12?",
        es: "¿Qué es CRISPR-Cas12?",
        de: "Was ist CRISPR-Cas12?",
        nl: "Wat is CRISPR-Cas12?"
      },
      options: [
        { en: "CRISPR nuclease that creates staggered cuts and recognizes T-rich PAM sequences", es: "Nucleasa CRISPR que crea cortes escalonados y reconoce secuencias PAM ricas en T", de: "CRISPR-Nuklease, die gestaffelte Schnitte erzeugt und T-reiche PAM-Sequenzen erkennt", nl: "CRISPR-nuclease die verspringende knipplaatsen creëert en T-rijke PAM-sequenties herkent" },
        { en: "A more advanced version of Cas9", es: "Una versión más avanzada de Cas9", de: "Eine fortgeschrittenere Version von Cas9", nl: "Een meer geavanceerde versie van Cas9" },
        { en: "A base editing system only", es: "Solo un sistema de edición de bases", de: "Nur ein Base-Editing-System", nl: "Alleen een base-editing systeem" },
        { en: "A DNA sequencing technology", es: "Una tecnología de secuenciación de ADN", de: "Eine DNA-Sequenzierungstechnologie", nl: "Een DNA-sequencingtechnologie" }
      ],
      correct: 0,
      explanation: {
        en: "Cas12 (formerly Cpf1) is a Class 2 Type V CRISPR nuclease that creates staggered cuts leaving sticky ends, requires only crRNA (not tracrRNA), and recognizes T-rich PAM sequences.",
        es: "Cas12 (anteriormente Cpf1) es una nucleasa CRISPR Clase 2 Tipo V que crea cortes escalonados dejando extremos cohesivos, requiere solo crRNA (no tracrRNA), y reconoce secuencias PAM ricas en T.",
        de: "Cas12 (früher Cpf1) ist eine Klasse 2 Typ V CRISPR-Nuklease, die gestaffelte Schnitte mit klebrigen Enden erzeugt, nur crRNA (nicht tracrRNA) benötigt und T-reiche PAM-Sequenzen erkennt.",
        nl: "Cas12 (voorheen Cpf1) is een Klasse 2 Type V CRISPR-nuclease die verspringende knipplaatsen met kleverige uiteinden creëert, alleen crRNA (niet tracrRNA) vereist en T-rijke PAM-sequenties herkent."
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
        { en: "CRISPR technology that changes single DNA bases without creating double-strand breaks", es: "Tecnología CRISPR que cambia bases únicas de ADN sin crear roturas de doble cadena", de: "CRISPR-Technologie, die einzelne DNA-Basen ändert, ohne Doppelstrangbrüche zu erzeugen", nl: "CRISPR-technologie die enkele DNA-basen verandert zonder dubbelstrengs breuken te creëren" },
        { en: "Method for large DNA insertions", es: "Método para grandes inserciones de ADN", de: "Methode für große DNA-Insertionen", nl: "Methode voor grote DNA-inserties" },
        { en: "Technique for chromosome rearrangement", es: "Técnica para reordenamiento cromosómico", de: "Technik für Chromosomenumlagerung", nl: "Techniek voor chromosoomherschikking" },
        { en: "System for gene expression regulation", es: "Sistema para regulación de expresión génica", de: "System für Genexpressionsregulation", nl: "Systeem voor genexpressie-regulatie" }
      ],
      correct: 0,
      explanation: {
        en: "Base editing uses modified Cas proteins fused to deaminase enzymes to convert one DNA base to another (e.g., C to T or A to G) without requiring double-strand breaks or donor templates.",
        es: "La edición de bases usa proteínas Cas modificadas fusionadas a enzimas desaminasas para convertir una base de ADN en otra (ej., C a T o A a G) sin requerir roturas de doble cadena.",
        de: "Base-Editing nutzt modifizierte Cas-Proteine, die mit Deaminase-Enzymen fusioniert sind, um eine DNA-Base in eine andere umzuwandeln (z.B. C zu T oder A zu G) ohne Doppelstrangbrüche zu benötigen.",
        nl: "Base-editing gebruikt gemodificeerde Cas-eiwitten gefuseerd met deaminase-enzymen om één DNA-base om te zetten naar een andere (bijv. C naar T of A naar G) zonder dubbelstrengs breuken te vereisen."
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
        { en: "Advanced CRISPR technique enabling precise insertions, deletions, and replacements using reverse transcription", es: "Técnica CRISPR avanzada que permite inserciones, deleciones y reemplazos precisos usando transcripción reversa", de: "Fortgeschrittene CRISPR-Technik, die präzise Insertionen, Deletionen und Ersetzungen mittels reverser Transkription ermöglicht", nl: "Geavanceerde CRISPR-techniek die precieze inserties, deleties en vervangingen mogelijk maakt met behulp van reverse transcriptie" },
        { en: "The original CRISPR-Cas9 system", es: "El sistema CRISPR-Cas9 original", de: "Das ursprüngliche CRISPR-Cas9-System", nl: "Het originele CRISPR-Cas9 systeem" },
        { en: "A method for protein engineering", es: "Un método para ingeniería de proteínas", de: "Eine Methode für Protein-Engineering", nl: "Een methode voor eiwit-engineering" },
        { en: "A DNA amplification technique", es: "Una técnica de amplificación de ADN", de: "Eine DNA-Amplifikationstechnik", nl: "Een DNA-amplificatietechniek" }
      ],
      correct: 0,
      explanation: {
        en: "Prime editing uses a modified Cas9 nickase fused to reverse transcriptase and a prime editing guide RNA (pegRNA) to make precise edits without double-strand breaks or donor DNA templates.",
        es: "La edición principal usa una nickasa Cas9 modificada fusionada a transcriptasa reversa y un ARN guía de edición principal (pegRNA) para hacer ediciones precisas sin roturas de doble cadena.",
        de: "Prime-Editing nutzt eine modifizierte Cas9-Nickase, die mit reverser Transkriptase fusioniert ist, und eine Prime-Editing-Guide-RNA (pegRNA) für präzise Editierungen ohne Doppelstrangbrüche.",
        nl: "Prime-editing gebruikt een gemodificeerde Cas9-nickase gefuseerd met reverse transcriptase en een prime editing gids-RNA (pegRNA) om precieze bewerkingen te maken zonder dubbelstrengs breuken."
      }
    },
    {
      question: {
        en: "What is CRISPR interference (CRISPRi)?",
        es: "¿Qué es la interferencia CRISPR (CRISPRi)?",
        de: "Was ist CRISPR-Interferenz (CRISPRi)?",
        nl: "Wat is CRISPR-interferentie (CRISPRi)?"
      },
      options: [
        { en: "Method using catalytically inactive Cas9 (dCas9) to repress gene expression without cutting DNA", es: "Método usando Cas9 catalíticamente inactiva (dCas9) para reprimir expresión génica sin cortar ADN", de: "Methode mit katalytisch inaktiver Cas9 (dCas9) zur Repression der Genexpression ohne DNA-Schneiden", nl: "Methode die katalytisch inactieve Cas9 (dCas9) gebruikt om genexpressie te onderdrukken zonder DNA te knippen" },
        { en: "Technique for enhancing CRISPR cutting efficiency", es: "Técnica para mejorar la eficiencia de corte CRISPR", de: "Technik zur Verbesserung der CRISPR-Schneideffizienkt", nl: "Techniek voor het verbeteren van CRISPR-knipefficiëntie" },
        { en: "Method for amplifying CRISPR signals", es: "Método para amplificar señales CRISPR", de: "Methode zur Verstärkung von CRISPR-Signalen", nl: "Methode voor het versterken van CRISPR-signalen" },
        { en: "System for CRISPR quality control", es: "Sistema para control de calidad CRISPR", de: "System für CRISPR-Qualitätskontrolle", nl: "Systeem voor CRISPR-kwaliteitscontrole" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPRi uses catalytically dead Cas9 (dCas9) that retains DNA binding but loses nuclease activity, allowing targeted gene silencing by blocking transcription or RNA polymerase access.",
        es: "CRISPRi usa Cas9 catalíticamente muerta (dCas9) que retiene unión al ADN pero pierde actividad nucleasa, permitiendo silenciamiento génico dirigido bloqueando transcripción.",
        de: "CRISPRi nutzt katalytisch tote Cas9 (dCas9), die DNA-Bindung behält, aber Nuklease-Aktivität verliert, ermöglicht gezielte Gensilencing durch Blockierung der Transkription.",
        nl: "CRISPRi gebruikt katalytisch dode Cas9 (dCas9) die DNA-binding behoudt maar nuclease-activiteit verliest, gerichte gensilencing mogelijk makend door transcriptie te blokkeren."
      }
    },
    {
      question: {
        en: "What is CRISPR activation (CRISPRa)?",
        es: "¿Qué es la activación CRISPR (CRISPRa)?",
        de: "Was ist CRISPR-Aktivierung (CRISPRa)?",
        nl: "Wat is CRISPR-activatie (CRISPRa)?"
      },
      options: [
        { en: "Method using dCas9 fused to transcriptional activators to enhance gene expression", es: "Método usando dCas9 fusionada a activadores transcripcionales para mejorar expresión génica", de: "Methode mit dCas9 fusioniert mit Transkriptionsaktivators zur Verstärkung der Genexpression", nl: "Methode die dCas9 gefuseerd met transcriptionele activators gebruikt om genexpressie te versterken" },
        { en: "Process of activating Cas9 enzyme activity", es: "Proceso de activar actividad enzimática Cas9", de: "Prozess der Aktivierung der Cas9-Enzymaktivität", nl: "Proces van het activeren van Cas9-enzymactiviteit" },
        { en: "Technique for CRISPR system assembly", es: "Técnica para ensamblaje del sistema CRISPR", de: "Technik für CRISPR-System-Assemblierung", nl: "Techniek voor CRISPR-systeemassemblage" },
        { en: "Method for increasing cutting frequency", es: "Método para aumentar frecuencia de corte", de: "Methode zur Erhöhung der Schnittfrequenz", nl: "Methode voor het verhogen van knipfrequentie" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPRa uses dCas9 fused to transcriptional activation domains (like VP64, p65, or Rta) to recruit RNA polymerase and enhance transcription of target genes without DNA modification.",
        es: "CRISPRa usa dCas9 fusionada a dominios de activación transcripcional (como VP64, p65, o Rta) para reclutar ARN polimerasa y mejorar transcripción de genes objetivo.",
        de: "CRISPRa nutzt dCas9 fusioniert mit Transkriptionsaktivierungsdomänen (wie VP64, p65 oder Rta) zur Rekrutierung der RNA-Polymerase und Verstärkung der Transkription.",
        nl: "CRISPRa gebruikt dCas9 gefuseerd met transcriptionele activatiedomeinen (zoals VP64, p65, of Rta) om RNA-polymerase te rekruteren en transcriptie van doelgenen te versterken."
      }
    },
    {
      question: {
        en: "What is multiplexed CRISPR?",
        es: "¿Qué es CRISPR multiplexado?",
        de: "Was ist multiplexiertes CRISPR?",
        nl: "Wat is gemultiplexed CRISPR?"
      },
      options: [
        { en: "Simultaneous editing of multiple genes or genomic loci using multiple guide RNAs", es: "Edición simultánea de múltiples genes o loci genómicos usando múltiples ARNs guía", de: "Simultane Editierung mehrerer Gene oder genomischer Loci mit mehreren Guide-RNAs", nl: "Gelijktijdige bewerking van meerdere genen of genomische loci met behulp van meerdere gids-RNA's" },
        { en: "Sequential editing of genes one at a time", es: "Edición secuencial de genes uno a la vez", de: "Sequentielle Editierung von Genen einzeln", nl: "Sequentiële bewerking van genen één voor één" },
        { en: "Using multiple Cas proteins simultaneously", es: "Usar múltiples proteínas Cas simultáneamente", de: "Verwendung mehrerer Cas-Proteine gleichzeitig", nl: "Gelijktijdig gebruik van meerdere Cas-eiwitten" },
        { en: "Amplifying CRISPR signals", es: "Amplificar señales CRISPR", de: "Verstärkung von CRISPR-Signalen", nl: "Versterking van CRISPR-signalen" }
      ],
      correct: 0,
      explanation: {
        en: "Multiplexed CRISPR allows researchers to target multiple genomic loci simultaneously by delivering multiple guide RNAs, enabling complex genetic modifications and large-scale functional studies.",
        es: "CRISPR multiplexado permite a investigadores dirigirse a múltiples loci genómicos simultáneamente entregando múltiples ARNs guía, permitiendo modificaciones genéticas complejas.",
        de: "Multiplexiertes CRISPR ermöglicht es Forschern, mehrere genomische Loci gleichzeitig zu targeten, indem mehrere Guide-RNAs bereitgestellt werden, was komplexe genetische Modifikationen ermöglicht.",
        nl: "Gemultiplexed CRISPR stelt onderzoekers in staat om meerdere genomische loci gelijktijdig te targeten door meerdere gids-RNA's te leveren, complexe genetische modificaties mogelijk makend."
      }
    },
    {
      question: {
        en: "What are CRISPR libraries?",
        es: "¿Qué son las bibliotecas CRISPR?",
        de: "Was sind CRISPR-Bibliotheken?",
        nl: "Wat zijn CRISPR-bibliotheken?"
      },
      options: [
        { en: "Collections of guide RNAs targeting multiple genes for functional genomics screens", es: "Colecciones de ARNs guía dirigidos a múltiples genes para cribados de genómica funcional", de: "Sammlungen von Guide-RNAs, die mehrere Gene für funktionale Genomik-Screens targeten", nl: "Verzamelingen van gids-RNA's die meerdere genen targeten voor functionele genomica screens" },
        { en: "Databases of CRISPR research papers", es: "Bases de datos de artículos de investigación CRISPR", de: "Datenbanken mit CRISPR-Forschungsartikeln", nl: "Databases van CRISPR-onderzoeksartikelen" },
        { en: "Collections of Cas protein variants", es: "Colecciones de variantes de proteínas Cas", de: "Sammlungen von Cas-Protein-Varianten", nl: "Verzamelingen van Cas-eiwitvarianten" },
        { en: "Storage systems for CRISPR reagents", es: "Sistemas de almacenamiento para reactivos CRISPR", de: "Lagerungssysteme für CRISPR-Reagenzien", nl: "Opslagsystemen voor CRISPR-reagentia" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPR libraries contain thousands of guide RNAs designed to target every gene in the genome, enabling large-scale loss-of-function or gain-of-function screens to identify gene functions.",
        es: "Las bibliotecas CRISPR contienen miles de ARNs guía diseñados para dirigirse a cada gen en el genoma, permitiendo cribados de pérdida o ganancia de función a gran escala.",
        de: "CRISPR-Bibliotheken enthalten Tausende von Guide-RNAs, die darauf ausgelegt sind, jedes Gen im Genom zu targeten, wodurch groß angelegte Loss-of-Function-Screens ermöglicht werden.",
        nl: "CRISPR-bibliotheken bevatten duizenden gids-RNA's ontworpen om elk gen in het genoom te targeten, grootschalige functieverlies- of functiewinst-screens mogelijk makend."
      }
    },
    {
      question: {
        en: "What is CRISPR-Cas13?",
        es: "¿Qué es CRISPR-Cas13?",
        de: "Was ist CRISPR-Cas13?",
        nl: "Wat is CRISPR-Cas13?"
      },
      options: [
        { en: "RNA-targeting CRISPR system that can cleave and edit RNA molecules", es: "Sistema CRISPR dirigido a ARN que puede cortar y editar moléculas de ARN", de: "RNA-targetierendes CRISPR-System, das RNA-Moleküle spalten und editieren kann", nl: "RNA-targetend CRISPR-systeem dat RNA-moleculen kan knippen en bewerken" },
        { en: "Advanced DNA-editing system", es: "Sistema avanzado de edición de ADN", de: "Fortgeschrittenes DNA-Editierungssystem", nl: "Geavanceerd DNA-bewerkingssysteem" },
        { en: "Protein purification system", es: "Sistema de purificación de proteínas", de: "Proteinreinigungssystem", nl: "Eiwitpurificatiesysteem" },
        { en: "Gene expression reporter system", es: "Sistema reportero de expresión génica", de: "Genexpression-Reportersystem", nl: "Genexpressie-reportersysteem" }
      ],
      correct: 0,
      explanation: {
        en: "Cas13 is an RNA-guided RNA nuclease that can be programmed to target and cleave specific RNA sequences, enabling RNA knockdown, RNA editing, and RNA detection applications.",
        es: "Cas13 es una nucleasa de ARN guiada por ARN que puede programarse para dirigirse y cortar secuencias específicas de ARN, permitiendo silenciamiento, edición y detección de ARN.",
        de: "Cas13 ist eine RNA-geführte RNA-Nuklease, die programmiert werden kann, um spezifische RNA-Sequenzen zu targeten und zu spalten, wodurch RNA-Knockdown-Anwendungen ermöglicht werden.",
        nl: "Cas13 is een RNA-geleide RNA-nuclease die kan worden geprogrammeerd om specifieke RNA-sequenties te targeten en te knippen, RNA-knockdown, RNA-bewerking en RNA-detectie mogelijk makend."
      }
    },
    {
      question: {
        en: "What is SHERLOCK?",
        es: "¿Qué es SHERLOCK?",
        de: "Was ist SHERLOCK?",
        nl: "Wat is SHERLOCK?"
      },
      options: [
        { en: "CRISPR-based diagnostic platform using Cas13 for nucleic acid detection", es: "Plataforma diagnóstica basada en CRISPR usando Cas13 para detección de ácidos nucleicos", de: "CRISPR-basierte Diagnostikplattform mit Cas13 für Nukleinsäure-Detektion", nl: "CRISPR-gebaseerd diagnostisch platform dat Cas13 gebruikt voor nucleinezuurdetectie" },
        { en: "A type of CRISPR screening method", es: "Un tipo de método de cribado CRISPR", de: "Eine Art CRISPR-Screening-Methode", nl: "Een type CRISPR-screeningsmethode" },
        { en: "A gene editing algorithm", es: "Un algoritmo de edición génica", de: "Ein Gen-Editierungs-Algorithmus", nl: "Een genbewerking-algoritme" },
        { en: "A DNA sequencing technology", es: "Una tecnología de secuenciación de ADN", de: "Eine DNA-Sequenzierungstechnologie", nl: "Een DNA-sequencingtechnologie" }
      ],
      correct: 0,
      explanation: {
        en: "SHERLOCK (Specific High-sensitivity Enzymatic Reporter unLOCKing) uses Cas13's collateral cleavage activity to detect specific nucleic acid sequences with high sensitivity for diagnostic applications.",
        es: "SHERLOCK usa la actividad de corte colateral de Cas13 para detectar secuencias específicas de ácidos nucleicos con alta sensibilidad para aplicaciones diagnósticas.",
        de: "SHERLOCK nutzt Cas13's kollaterale Spaltungsaktivität zur Detektion spezifischer Nukleinsäure-Sequenzen mit hoher Sensitivität für diagnostische Anwendungen.",
        nl: "SHERLOCK gebruikt Cas13's collaterale knipactiviteit om specifieke nucleinezuursequenties te detecteren met hoge gevoeligheid voor diagnostische toepassingen."
      }
    },
    {
      question: {
        en: "What is DETECTR?",
        es: "¿Qué es DETECTR?",
        de: "Was ist DETECTR?",
        nl: "Wat is DETECTR?"
      },
      options: [
        { en: "CRISPR-Cas12-based diagnostic system for rapid nucleic acid detection", es: "Sistema diagnóstico basado en CRISPR-Cas12 para detección rápida de ácidos nucleicos", de: "CRISPR-Cas12-basiertes Diagnosesystem für schnelle Nukleinsäure-Detektion", nl: "CRISPR-Cas12-gebaseerd diagnostisch systeem voor snelle nucleinezuurdetectie" },
        { en: "Method for detecting off-target effects", es: "Método para detectar efectos fuera del objetivo", de: "Methode zur Detektion von Off-Target-Effekten", nl: "Methode voor het detecteren van off-target effecten" },
        { en: "System for tracking CRISPR efficiency", es: "Sistema para rastrear eficiencia CRISPR", de: "System zur Verfolgung der CRISPR-Effizienz", nl: "Systeem voor het volgen van CRISPR-efficiëntie" },
        { en: "Algorithm for guide RNA design", es: "Algoritmo para diseño de ARN guía", de: "Algorithmus für Guide-RNA-Design", nl: "Algoritme voor gids-RNA ontwerp" }
      ],
      correct: 0,
      explanation: {
        en: "DETECTR (DNA Endonuclease-Targeted CRISPR Trans Reporter) uses Cas12a's trans-cleavage activity for rapid, sensitive detection of specific DNA sequences in clinical samples.",
        es: "DETECTR usa la actividad trans-corte de Cas12a para detección rápida y sensible de secuencias específicas de ADN en muestras clínicas.",
        de: "DETECTR nutzt Cas12a's Trans-Spaltungsaktivität für schnelle, sensitive Detektion spezifischer DNA-Sequenzen in klinischen Proben.",
        nl: "DETECTR gebruikt Cas12a's trans-knipactiviteit voor snelle, gevoelige detectie van specifieke DNA-sequenties in klinische monsters."
      }
    },
    {
      question: {
        en: "What are off-target effects in CRISPR?",
        es: "¿Qué son los efectos fuera del objetivo en CRISPR?",
        de: "Was sind Off-Target-Effekte bei CRISPR?",
        nl: "Wat zijn off-target effecten bij CRISPR?"
      },
      options: [
        { en: "Unintended DNA cleavage at genomic sites similar to the intended target", es: "Corte no deseado de ADN en sitios genómicos similares al objetivo deseado", de: "Unbeabsichtigte DNA-Spaltung an genomischen Stellen ähnlich dem beabsichtigten Ziel", nl: "Onbedoelde DNA-knipping op genomische plaatsen vergelijkbaar met het beoogde doel" },
        { en: "Enhanced efficiency of CRISPR cutting", es: "Eficiencia mejorada del corte CRISPR", de: "Verbesserte Effizienz des CRISPR-Schneidens", nl: "Verbeterde efficiëntie van CRISPR-knippen" },
        { en: "Desired secondary modifications", es: "Modificaciones secundarias deseadas", de: "Gewünschte sekundäre Modifikationen", nl: "Gewenste secundaire modificaties" },
        { en: "Improved specificity of targeting", es: "Especificidad mejorada del objetivo", de: "Verbesserte Targeting-Spezifität", nl: "Verbeterde doelspecificiteit" }
      ],
      correct: 0,
      explanation: {
        en: "Off-target effects occur when CRISPR systems cut DNA at unintended genomic locations that share sequence similarity with the target site, potentially causing unwanted mutations.",
        es: "Los efectos fuera del objetivo ocurren cuando sistemas CRISPR cortan ADN en ubicaciones genómicas no deseadas que comparten similaridad de secuencia con el sitio objetivo.",
        de: "Off-Target-Effekte treten auf, wenn CRISPR-Systeme DNA an unbeabsichtigten genomischen Orten schneiden, die Sequenzähnlichkeit mit der Zielstelle teilen.",
        nl: "Off-target effecten treden op wanneer CRISPR-systemen DNA knippen op onbedoelde genomische locaties die sequentiegelijkenis delen met de doelplaats."
      }
    },
    {
      question: {
        en: "What is CIRCLE-seq?",
        es: "¿Qué es CIRCLE-seq?",
        de: "Was ist CIRCLE-seq?",
        nl: "Wat is CIRCLE-seq?"
      },
      options: [
        { en: "Method for comprehensive detection of CRISPR off-target effects genome-wide", es: "Método para detección comprensiva de efectos fuera del objetivo CRISPR en todo el genoma", de: "Methode für umfassende Detektion von CRISPR-Off-Target-Effekten genomweit", nl: "Methode voor uitgebreide detectie van CRISPR off-target effecten genoomwijd" },
        { en: "Circular DNA amplification technique", es: "Técnica de amplificación de ADN circular", de: "Zirkuläre DNA-Amplifikationstechnik", nl: "Circulaire DNA-amplificatietechniek" },
        { en: "Method for guide RNA synthesis", es: "Método para síntesis de ARN guía", de: "Methode für Guide-RNA-Synthese", nl: "Methode voor gids-RNA synthese" },
        { en: "System for CRISPR delivery", es: "Sistema para entrega CRISPR", de: "System für CRISPR-Lieferung", nl: "Systeem voor CRISPR-levering" }
      ],
      correct: 0,
      explanation: {
        en: "CIRCLE-seq (Circularization for In vitro Reporting of CLeavage Effects by Sequencing) is an unbiased method to identify all potential off-target sites of CRISPR nucleases across the genome.",
        es: "CIRCLE-seq es un método no sesgado para identificar todos los sitios potenciales fuera del objetivo de nucleasas CRISPR a través del genoma.",
        de: "CIRCLE-seq ist eine unvoreingenommene Methode zur Identifizierung aller potentiellen Off-Target-Stellen von CRISPR-Nukleasen im Genom.",
        nl: "CIRCLE-seq is een onbevooroordeelde methode om alle potentiële off-target plaatsen van CRISPR-nucleasen door het hele genoom te identificeren."
      }
    },
    {
      question: {
        en: "What is DISCOVER-seq?",
        es: "¿Qué es DISCOVER-seq?",
        de: "Was ist DISCOVER-seq?",
        nl: "Wat is DISCOVER-seq?"
      },
      options: [
        { en: "Method that uses DNA damage markers to identify CRISPR off-target sites in living cells", es: "Método que usa marcadores de daño al ADN para identificar sitios fuera del objetivo CRISPR en células vivas", de: "Methode, die DNA-Schadensmärker verwendet, um CRISPR-Off-Target-Stellen in lebenden Zellen zu identifizieren", nl: "Methode die DNA-schadesmarkers gebruikt om CRISPR off-target plaatsen in levende cellen te identificeren" },
        { en: "DNA sequencing improvement method", es: "Método de mejora de secuenciación de ADN", de: "DNA-Sequenzierungsverbesserungsmethode", nl: "DNA-sequencing verbeteringsmethode" },
        { en: "System for discovering new Cas proteins", es: "Sistema para descubrir nuevas proteínas Cas", de: "System zur Entdeckung neuer Cas-Proteine", nl: "Systeem voor het ontdekken van nieuwe Cas-eiwitten" },
        { en: "Method for optimizing guide RNA design", es: "Método para optimizar diseño de ARN guía", de: "Methode zur Optimierung des Guide-RNA-Designs", nl: "Methode voor het optimaliseren van gids-RNA ontwerp" }
      ],
      correct: 0,
      explanation: {
        en: "DISCOVER-seq detects CRISPR off-target effects by identifying sites where MRE11 (a DNA damage response protein) is recruited, providing a sensitive method for off-target detection in cells.",
        es: "DISCOVER-seq detecta efectos fuera del objetivo CRISPR identificando sitios donde MRE11 (una proteína de respuesta al daño del ADN) es reclutada.",
        de: "DISCOVER-seq detektiert CRISPR-Off-Target-Effekte durch Identifizierung von Stellen, wo MRE11 (ein DNA-Schadensantwort-Protein) rekrutiert wird.",
        nl: "DISCOVER-seq detecteert CRISPR off-target effecten door plaatsen te identificeren waar MRE11 (een DNA-schade respons eiwit) wordt gerekruteerd."
      }
    },
    {
      question: {
        en: "What is SpRY-Cas9?",
        es: "¿Qué es SpRY-Cas9?",
        de: "Was ist SpRY-Cas9?",
        nl: "Wat is SpRY-Cas9?"
      },
      options: [
        { en: "Engineered Cas9 variant with relaxed PAM requirements, enabling broader targeting", es: "Variante Cas9 diseñada con requerimientos PAM relajados, permitiendo objetivo más amplio", de: "Entwickelte Cas9-Variante mit gelockerten PAM-Anforderungen, die breiteres Targeting ermöglicht", nl: "Gemanipuleerde Cas9-variant met versoepelde PAM-vereisten, breder targeten mogelijk makend" },
        { en: "Smaller version of Cas9 for easier delivery", es: "Versión más pequeña de Cas9 para entrega más fácil", de: "Kleinere Version von Cas9 für einfachere Lieferung", nl: "Kleinere versie van Cas9 voor gemakkelijkere levering" },
        { en: "Cas9 with enhanced cutting activity", es: "Cas9 con actividad de corte mejorada", de: "Cas9 mit verstärkter Schneidaktivität", nl: "Cas9 met verbeterde knipactiviteit" },
        { en: "Temperature-resistant Cas9 variant", es: "Variante Cas9 resistente a temperatura", de: "Temperaturresistente Cas9-Variante", nl: "Temperatuurbestendige Cas9-variant" }
      ],
      correct: 0,
      explanation: {
        en: "SpRY-Cas9 is an engineered variant that recognizes a minimal NYN PAM sequence (where N = any nucleotide, Y = pyrimidine), dramatically expanding the number of targetable sites in the genome.",
        es: "SpRY-Cas9 es una variante diseñada que reconoce una secuencia PAM mínima NYN (donde N = cualquier nucleótido, Y = pirimidina), expandiendo dramáticamente sitios objetivo en el genoma.",
        de: "SpRY-Cas9 ist eine entwickelte Variante, die eine minimale NYN-PAM-Sequenz erkennt (wo N = jedes Nukleotid, Y = Pyrimidin), wodurch die Anzahl targeter-fähiger Stellen dramatisch erweitert wird.",
        nl: "SpRY-Cas9 is een gemanipuleerde variant die een minimale NYN PAM-sequentie herkent (waar N = elk nucleotide, Y = pyrimidine), het aantal targeteerbare plaatsen dramatisch uitbreidend."
      }
    },
    {
      question: {
        en: "What is miniaturized CRISPR?",
        es: "¿Qué es CRISPR miniaturizado?",
        de: "Was ist miniaturisiertes CRISPR?",
        nl: "Wat is geminiaturiseerd CRISPR?"
      },
      options: [
        { en: "Compact CRISPR systems like CasX and Cas14 that are smaller than traditional Cas9", es: "Sistemas CRISPR compactos como CasX y Cas14 que son más pequeños que Cas9 tradicional", de: "Kompakte CRISPR-Systeme wie CasX und Cas14, die kleiner sind als traditionelles Cas9", nl: "Compacte CRISPR-systemen zoals CasX en Cas14 die kleiner zijn dan traditionele Cas9" },
        { en: "CRISPR systems for single-cell applications", es: "Sistemas CRISPR para aplicaciones de células individuales", de: "CRISPR-Systeme für Einzelzell-Anwendungen", nl: "CRISPR-systemen voor enkele-cel toepassingen" },
        { en: "Reduced-power CRISPR systems", es: "Sistemas CRISPR de potencia reducida", de: "CRISPR-Systeme mit reduzierter Leistung", nl: "CRISPR-systemen met verminderd vermogen" },
        { en: "CRISPR for targeting small RNAs", es: "CRISPR para dirigirse a ARNs pequeños", de: "CRISPR für die Zielerfassung kleiner RNAs", nl: "CRISPR voor het targeten van kleine RNA's" }
      ],
      correct: 0,
      explanation: {
        en: "Miniaturized CRISPR systems use smaller Cas proteins that can fit into delivery vectors with size constraints, such as adeno-associated virus (AAV), expanding therapeutic applications.",
        es: "Los sistemas CRISPR miniaturizados usan proteínas Cas más pequeñas que pueden encajar en vectores de entrega con limitaciones de tamaño, como virus adenoasociados.",
        de: "Miniaturisierte CRISPR-Systeme nutzen kleinere Cas-Proteine, die in Liefervektoren mit Größenbeschränkungen passen, wie Adeno-assoziierte Viren, wodurch therapeutische Anwendungen erweitert werden.",
        nl: "Geminiaturiseerde CRISPR-systemen gebruiken kleinere Cas-eiwitten die passen in leveringsvectoren met groottebeperkingen, zoals adeno-geassocieerde virussen, therapeutische toepassingen uitbreidend."
      }
    },
    {
      question: {
        en: "What is epigenome editing with CRISPR?",
        es: "¿Qué es la edición del epigenoma con CRISPR?",
        de: "Was ist Epigenom-Editierung mit CRISPR?",
        nl: "Wat is epigenoom-bewerking met CRISPR?"
      },
      options: [
        { en: "Using dCas9 fused to epigenetic modifiers to alter DNA methylation or histone modifications", es: "Usar dCas9 fusionada a modificadores epigenéticos para alterar metilación de ADN o modificaciones de histonas", de: "Verwendung von dCas9 fusioniert mit epigenetischen Modifikatoren zur Änderung von DNA-Methylierung oder Histon-Modifikationen", nl: "Gebruik van dCas9 gefuseerd met epigenetische modificators om DNA-methylering of histonmodificaties te veranderen" },
        { en: "Direct editing of histone proteins", es: "Edición directa de proteínas histonas", de: "Direkte Editierung von Histon-Proteinen", nl: "Directe bewerking van histone-eiwitten" },
        { en: "Modifying chromosome structure mechanically", es: "Modificar estructura cromosómica mecánicamente", de: "Chromosomenstruktur mechanisch modifizieren", nl: "Chromosoomstructuur mechanisch modificeren" },
        { en: "Changing gene expression through RNA editing", es: "Cambiar expresión génica através de edición de ARN", de: "Genexpression durch RNA-Editierung ändern", nl: "Genexpressie veranderen door RNA-bewerking" }
      ],
      correct: 0,
      explanation: {
        en: "Epigenome editing uses catalytically inactive Cas9 (dCas9) fused to epigenetic enzymes like DNA methyltransferases or histone modifying enzymes to alter gene expression without changing DNA sequence.",
        es: "La edición del epigenoma usa Cas9 catalíticamente inactiva (dCas9) fusionada a enzimas epigenéticas como metiltransferasas de ADN para alterar expresión génica sin cambiar secuencia.",
        de: "Epigenom-Editierung nutzt katalytisch inaktive Cas9 (dCas9) fusioniert mit epigenetischen Enzymen wie DNA-Methyltransferasen zur Änderung der Genexpression ohne DNA-Sequenzänderung.",
        nl: "Epigenoom-bewerking gebruikt katalytisch inactieve Cas9 (dCas9) gefuseerd met epigenetische enzymen zoals DNA-methyltransferases om genexpressie te veranderen zonder DNA-sequentie te wijzigen."
      }
    },
    {
      question: {
        en: "What is in vivo CRISPR delivery?",
        es: "¿Qué es la entrega CRISPR in vivo?",
        de: "Was ist In-vivo-CRISPR-Lieferung?",
        nl: "Wat is in vivo CRISPR-levering?"
      },
      options: [
        { en: "Methods for delivering CRISPR components directly into living organisms for therapeutic applications", es: "Métodos para entregar componentes CRISPR directamente en organismos vivos para aplicaciones terapéuticas", de: "Methoden zur direkten Lieferung von CRISPR-Komponenten in lebende Organismen für therapeutische Anwendungen", nl: "Methoden voor het direct leveren van CRISPR-componenten in levende organismen voor therapeutische toepassingen" },
        { en: "Laboratory cell culture editing only", es: "Solo edición de cultivos celulares de laboratorio", de: "Nur Labor-Zellkultur-Editierung", nl: "Alleen laboratorium celkweek bewerking" },
        { en: "Computational modeling of CRISPR", es: "Modelado computacional de CRISPR", de: "Computermodellierung von CRISPR", nl: "Computationele modellering van CRISPR" },
        { en: "Manufacturing CRISPR reagents", es: "Fabricar reactivos CRISPR", de: "CRISPR-Reagenzien herstellen", nl: "CRISPR-reagentia produceren" }
      ],
      correct: 0,
      explanation: {
        en: "In vivo CRISPR delivery involves methods like viral vectors (AAV, lentivirus), lipid nanoparticles, or direct injection to deliver CRISPR components into tissues for gene therapy applications.",
        es: "La entrega CRISPR in vivo involucra métodos como vectores virales (AAV, lentivirus), nanopartículas lipídicas, o inyección directa para entregar componentes CRISPR en tejidos.",
        de: "In-vivo-CRISPR-Lieferung umfasst Methoden wie Virusvektoren (AAV, Lentivirus), Lipid-Nanopartikel oder direkte Injektion zur Lieferung von CRISPR-Komponenten in Gewebe.",
        nl: "In vivo CRISPR-levering behelst methoden zoals virale vectoren (AAV, lentivirus), lipide nanodeeltjes, of directe injectie om CRISPR-componenten in weefsels te leveren."
      }
    },
    {
      question: {
        en: "What are the therapeutic applications of CRISPR?",
        es: "¿Cuáles son las aplicaciones terapéuticas de CRISPR?",
        de: "Was sind die therapeutischen Anwendungen von CRISPR?",
        nl: "Wat zijn de therapeutische toepassingen van CRISPR?"
      },
      options: [
        { en: "Treating genetic diseases, cancer, infectious diseases, and regenerative medicine", es: "Tratar enfermedades genéticas, cáncer, enfermedades infecciosas y medicina regenerativa", de: "Behandlung genetischer Krankheiten, Krebs, Infektionskrankheiten und regenerative Medizin", nl: "Behandeling van genetische ziekten, kanker, infectieziekten en regeneratieve geneeskunde" },
        { en: "Only basic research applications", es: "Solo aplicaciones de investigación básica", de: "Nur grundlegende Forschungsanwendungen", nl: "Alleen basisonderzoek toepassingen" },
        { en: "Agricultural improvement exclusively", es: "Exclusivamente mejora agrícola", de: "Ausschließlich landwirtschaftliche Verbesserung", nl: "Uitsluitend landbouwverbetering" },
        { en: "Environmental monitoring only", es: "Solo monitoreo ambiental", de: "Nur Umweltüberwachung", nl: "Alleen milieumonitoring" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPR has diverse therapeutic applications including correcting genetic mutations causing diseases, engineering T-cells for cancer immunotherapy, eliminating viral infections, and creating tissue models for drug testing.",
        es: "CRISPR tiene aplicaciones terapéuticas diversas incluyendo corregir mutaciones genéticas causantes de enfermedades, diseñar células T para inmunoterapia de cáncer, eliminar infecciones virales.",
        de: "CRISPR hat vielfältige therapeutische Anwendungen, einschließlich Korrektur genetischer Mutationen, die Krankheiten verursachen, Engineering von T-Zellen für Krebs-Immuntherapie.",
        nl: "CRISPR heeft diverse therapeutische toepassingen inclusief het corrigeren van genetische mutaties die ziekten veroorzaken, het engineeren van T-cellen voor kanker-immunotherapie."
      }
    },
    {
      question: {
        en: "What are the ethical considerations of CRISPR technology?",
        es: "¿Cuáles son las consideraciones éticas de la tecnología CRISPR?",
        de: "Was sind die ethischen Überlegungen der CRISPR-Technologie?",
        nl: "Wat zijn de ethische overwegingen van CRISPR-technologie?"
      },
      options: [
        { en: "Safety, consent, germline editing, enhancement vs treatment, and equitable access concerns", es: "Preocupaciones de seguridad, consentimiento, edición de línea germinal, mejora vs tratamiento, y acceso equitativo", de: "Sicherheits-, Einverständnis-, Keimbahn-Editierungs-, Enhancement-vs-Behandlungs- und gerechte Zugangs-Bedenken", nl: "Veiligheids-, toestemming-, kiemcelijn-bewerking-, verbetering vs behandeling-, en eerlijke toegang zorgen" },
        { en: "Only technical optimization issues", es: "Solo problemas de optimización técnica", de: "Nur technische Optimierungsprobleme", nl: "Alleen technische optimalisatieproblemen" },
        { en: "Cost considerations exclusively", es: "Exclusivamente consideraciones de costo", de: "Ausschließlich Kostenüberlegungen", nl: "Uitsluitend kostenoverwegin" },
        { en: "Patent and intellectual property only", es: "Solo patentes y propiedad intelectual", de: "Nur Patente und geistiges Eigentum", nl: "Alleen patent en intellectueel eigendom" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPR raises significant ethical questions about safety, informed consent, germline editing effects on future generations, enhancement vs treatment, social equity, and responsible research conduct.",
        es: "CRISPR plantea preguntas éticas significativas sobre seguridad, consentimiento informado, efectos de edición de línea germinal en futuras generaciones, mejora vs tratamiento, equidad social.",
        de: "CRISPR wirft bedeutende ethische Fragen zu Sicherheit, informierter Zustimmung, Keimbahn-Editierungs-Effekten auf zukünftige Generationen, Enhancement vs Behandlung auf.",
        nl: "CRISPR roept significante ethische vragen op over veiligheid, geïnformeerde toestemming, kiemcelijn-bewerking effecten op toekomstige generaties, verbetering vs behandeling."
      }
    },
    {
      question: {
        en: "What is the mechanism of prime editing in genome engineering?",
        es: "¿Cuál es el mecanismo de la edición prima en la ingeniería del genoma?",
        de: "Was ist der Mechanismus des Prime Editing in der Genom-Engineering?",
        nl: "Wat is het mechanisme van prime editing in genoommanipulatie?"
      },
      options: [
        { en: "A pegRNA directs Cas9-H840A nickase to create a nick, reverse transcriptase synthesizes new DNA using pegRNA template, flap endonuclease processes the intermediate", es: "Un pegRNA dirige la nickasa Cas9-H840A para crear una mella, la transcriptasa inversa sintetiza nuevo ADN usando plantilla pegRNA, la endonucleasa de solapa procesa el intermedio", de: "Eine pegRNA lenkt Cas9-H840A Nickase zur Erzeugung eines Nicks, Reverse Transkriptase synthetisiert neue DNA unter Verwendung der pegRNA-Vorlage, Flap-Endonuklease verarbeitet das Zwischenprodukt", nl: "Een pegRNA stuurt Cas9-H840A nickase om een breuk te maken, reverse transcriptase synthetiseert nieuw DNA met pegRNA-template, flap endonuclease verwerkt het tussenproduct" },
        { en: "Direct insertion of double-strand breaks followed by random repair", es: "Inserción directa de roturas de doble cadena seguida de reparación aleatoria", de: "Direkte Einfügung von Doppelstrangbrüchen gefolgt von zufälliger Reparatur", nl: "Directe invoeging van dubbelstreng breuken gevolgd door willekeurige reparatie" },
        { en: "Homologous recombination with large donor templates only", es: "Recombinación homóloga solo con plantillas donantes grandes", de: "Homologe Rekombination nur mit großen Donor-Templates", nl: "Homologe recombinatie alleen met grote donor-templates" },
        { en: "Base editing through cytidine deaminase activity alone", es: "Edición de bases solo a través de actividad de citidina desaminasa", de: "Base-Editing nur durch Cytidin-Deaminase-Aktivität", nl: "Base editing alleen door cytidine deaminase activiteit" }
      ],
      correct: 0,
      explanation: {
        en: "Prime editing uses a prime editing guide RNA (pegRNA) containing target and template sequences to direct a Cas9-H840A nickase-reverse transcriptase fusion protein, enabling precise insertions, deletions, and replacements without double-strand breaks or donor DNA templates.",
        es: "La edición prima usa un ARN guía de edición prima (pegRNA) que contiene secuencias objetivo y plantilla para dirigir una proteína de fusión nickasa Cas9-H840A-transcriptasa inversa.",
        de: "Prime Editing verwendet eine Prime-Editing-Guide-RNA (pegRNA) mit Ziel- und Template-Sequenzen zur Lenkung eines Cas9-H840A Nickase-Reverse Transkriptase-Fusionsproteins.",
        nl: "Prime editing gebruikt een prime editing guide RNA (pegRNA) met doel- en template-sequenties om een Cas9-H840A nickase-reverse transcriptase fusie-eiwit te sturen."
      }
    }
  ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/genetics', level8);
  }
})();
