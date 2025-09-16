// Biology - Level 9: Advanced Molecular Biology and Biotechnology
(function() {
  const level9 = {
    name: {
      en: "Advanced Molecular Biology and Biotechnology",
      es: "Biología Molecular Avanzada y Biotecnología",
      de: "Fortgeschrittene Molekularbiologie und Biotechnologie",
      nl: "Geavanceerde Moleculaire Biologie en Biotechnologie"
    },
    questions: [
      {
        question: {
          en: "What is the mechanism of action of CRISPR-Cas9 gene editing technology?",
          es: "¿Cuál es el mecanismo de acción de la tecnología de edición genética CRISPR-Cas9?",
          de: "Was ist der Wirkungsmechanismus der CRISPR-Cas9-Genbearbeitungstechnologie?",
          nl: "Wat is het werkingsmechanisme van CRISPR-Cas9 gen-editing technologie?"
        },
        options: [
          { en: "RNA-guided DNA cleavage and repair", es: "Escisión y reparación de ADN guiada por ARN", de: "RNA-gesteuerte DNA-Spaltung und -Reparatur", nl: "RNA-geleide DNA-klieven en -reparatie" },
          { en: "Protein-mediated chromosome rearrangement", es: "Reordenamiento cromosómico mediado por proteínas", de: "Protein-vermittelte Chromosomenumordnung", nl: "Eiwit-gemedieerde chromosoomherschikking" },
          { en: "Enzymatic DNA methylation", es: "Metilación enzimática del ADN", de: "Enzymatische DNA-Methylierung", nl: "Enzymatische DNA-methylering" },
          { en: "Transcriptional repressor binding", es: "Unión de represor transcripcional", de: "Transkriptionale Repressor-Bindung", nl: "Transcriptionele repressor binding" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas9 uses a guide RNA (gRNA) to direct the Cas9 nuclease to specific DNA sequences, where it creates double-strand breaks. Cellular repair mechanisms then fix the breaks, allowing for precise gene editing through homologous recombination or non-homologous end joining.",
          es: "CRISPR-Cas9 utiliza un ARN guía (gRNA) para dirigir la nucleasa Cas9 a secuencias específicas de ADN, donde crea roturas de doble cadena. Los mecanismos de reparación celular luego reparan las roturas, permitiendo edición genética precisa a través de recombinación homóloga o unión de extremos no homólogos.",
          de: "CRISPR-Cas9 verwendet eine Leit-RNA (gRNA), um die Cas9-Nuklease zu spezifischen DNA-Sequenzen zu leiten, wo sie Doppelstrangbrüche erzeugt. Zelluläre Reparaturmechanismen reparieren dann die Brüche, wodurch präzise Genbearbeitung durch homologe Rekombination oder nichthomologe Endverknüpfung ermöglicht wird.",
          nl: "CRISPR-Cas9 gebruikt een gids-RNA (gRNA) om de Cas9-nuclease naar specifieke DNA-sequenties te leiden, waar het dubbelstrengige breuken veroorzaakt. Cellulaire reparatiemechanismen herstellen vervolgens de breuken, waardoor precieze genbewerking mogelijk wordt door homologe recombinatie of niet-homologe eindverbinding."
        }
      },
      {
        question: {
          en: "Which technique allows for the visualization of protein-protein interactions in living cells?",
          es: "¿Qué técnica permite la visualización de interacciones proteína-proteína en células vivas?",
          de: "Welche Technik ermöglicht die Visualisierung von Protein-Protein-Wechselwirkungen in lebenden Zellen?",
          nl: "Welke techniek maakt visualisatie van eiwit-eiwit interacties in levende cellen mogelijk?"
        },
        options: [
          { en: "Fluorescence resonance energy transfer (FRET)", es: "Transferencia de energía por resonancia de fluorescencia (FRET)", de: "Fluoreszenz-Resonanz-Energie-Transfer (FRET)", nl: "Fluorescentie resonantie energie overdracht (FRET)" },
          { en: "X-ray crystallography", es: "Cristalografía de rayos X", de: "Röntgenkristallographie", nl: "Röntgenkristallografie" },
          { en: "Mass spectrometry", es: "Espectrometría de masas", de: "Massenspektrometrie", nl: "Massaspectrometrie" },
          { en: "NMR spectroscopy", es: "Espectroscopia RMN", de: "NMR-Spektroskopie", nl: "NMR-spectroscopie" }
        ],
        correct: 0,
        explanation: {
          en: "FRET allows real-time visualization of protein-protein interactions in living cells by measuring energy transfer between fluorophores when proteins are in close proximity (typically <10 nm). Changes in FRET efficiency indicate binding or conformational changes.",
          es: "FRET permite visualización en tiempo real de interacciones proteína-proteína en células vivas midiendo transferencia de energía entre fluoróforos cuando las proteínas están en proximidad cercana (típicamente <10 nm). Cambios en eficiencia FRET indican unión o cambios conformacionales.",
          de: "FRET ermöglicht Echtzeitvisualisierung von Protein-Protein-Wechselwirkungen in lebenden Zellen durch Messung des Energietransfers zwischen Fluorophoren, wenn Proteine in enger Nähe sind (typisch <10 nm). Änderungen in der FRET-Effizienz zeigen Bindung oder Konformationsänderungen an.",
          nl: "FRET maakt real-time visualisatie van eiwit-eiwit interacties in levende cellen mogelijk door energieoverdracht tussen fluoroforen te meten wanneer eiwitten dichtbij zijn (typisch <10 nm). Veranderingen in FRET-efficiëntie duiden op binding of conformationele veranderingen."
        }
      },
      {
        question: {
          en: "What is the primary advantage of induced pluripotent stem cells (iPSCs) over embryonic stem cells?",
          es: "¿Cuál es la ventaja principal de las células madre pluripotentes inducidas (iPSCs) sobre las células madre embrionarias?",
          de: "Was ist der Hauptvorteil von induzierten pluripotenten Stammzellen (iPSCs) gegenüber embryonalen Stammzellen?",
          nl: "Wat is het primaire voordeel van geïnduceerde pluripotente stamcellen (iPSCs) ten opzichte van embryonale stamcellen?"
        },
        options: [
          { en: "Avoid ethical concerns and immune rejection", es: "Evitar preocupaciones éticas y rechazo inmune", de: "Vermeidung ethischer Bedenken und Immunabstoßung", nl: "Vermijden van ethische bezwaren en immuunafstoting" },
          { en: "Higher differentiation potential", es: "Mayor potencial de diferenciación", de: "Höheres Differenzierungspotential", nl: "Hoger differentiatiepotentieel" },
          { en: "Faster proliferation rates", es: "Tasas de proliferación más rápidas", de: "Schnellere Proliferationsraten", nl: "Snellere proliferatiesnelheden" },
          { en: "Better genetic stability", es: "Mejor estabilidad genética", de: "Bessere genetische Stabilität", nl: "Betere genetische stabiliteit" }
        ],
        correct: 0,
        explanation: {
          en: "iPSCs can be generated from adult somatic cells, avoiding ethical issues associated with embryo destruction. Additionally, patient-specific iPSCs eliminate immune rejection concerns for therapeutic applications, making them ideal for personalized medicine approaches.",
          es: "Las iPSCs pueden generarse a partir de células somáticas adultas, evitando problemas éticos asociados con la destrucción de embriones. Además, las iPSCs específicas del paciente eliminan preocupaciones de rechazo inmune para aplicaciones terapéuticas, haciéndolas ideales para enfoques de medicina personalizada.",
          de: "iPSCs können aus adulten somatischen Zellen generiert werden, wodurch ethische Probleme im Zusammenhang mit Embryozerstörung vermieden werden. Zusätzlich eliminieren patientenspezifische iPSCs Immunabstoßungsbedenken für therapeutische Anwendungen, wodurch sie ideal für personalisierte Medizinansätze werden.",
          nl: "iPSCs kunnen gegenereerd worden uit volwassen somatische cellen, waardoor ethische problemen geassocieerd met embryovernietiging worden vermeden. Bovendien elimineren patiënt-specifieke iPSCs immuunafstotingsproblemen voor therapeutische toepassingen, waardoor ze ideaal zijn voor gepersonaliseerde geneeskunde-benaderingen."
        }
      },
      {
        question: {
          en: "Which molecular mechanism underlies the phenomenon of RNA interference (RNAi)?",
          es: "¿Qué mecanismo molecular subyace al fenómeno de interferencia por ARN (RNAi)?",
          de: "Welcher molekulare Mechanismus liegt dem Phänomen der RNA-Interferenz (RNAi) zugrunde?",
          nl: "Welk moleculair mechanisme ligt ten grondslag aan het fenomeen van RNA-interferentie (RNAi)?"
        },
        options: [
          { en: "Small RNA-guided mRNA degradation", es: "Degradación de ARNm guiada por ARN pequeño", de: "Kleine RNA-gesteuerte mRNA-Degradation", nl: "Kleine RNA-geleide mRNA-afbraak" },
          { en: "DNA methylation and silencing", es: "Metilación del ADN y silenciamiento", de: "DNA-Methylierung und Stilllegung", nl: "DNA-methylering en stillegging" },
          { en: "Histone modification", es: "Modificación de histonas", de: "Histonmodifikation", nl: "Histonmodificatie" },
          { en: "Alternative splicing regulation", es: "Regulación del empalme alternativo", de: "Alternative Spleißregulation", nl: "Alternatieve splicing regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "RNAi works through the RISC complex, where small interfering RNAs (siRNAs) or microRNAs (miRNAs) guide the degradation or translation inhibition of complementary target mRNAs, providing sequence-specific gene silencing.",
          es: "RNAi funciona a través del complejo RISC, donde ARNs interferentes pequeños (siRNAs) o microARNs (miRNAs) guían la degradación o inhibición de traducción de ARNms objetivo complementarios, proporcionando silenciamiento génico específico de secuencia.",
          de: "RNAi funktioniert über den RISC-Komplex, wo kleine interferierende RNAs (siRNAs) oder microRNAs (miRNAs) den Abbau oder die Translationshemmung komplementärer Ziel-mRNAs leiten und sequenzspezifische Genstilllegung ermöglichen.",
          nl: "RNAi werkt door het RISC-complex, waar kleine interfererende RNAs (siRNAs) of microRNAs (miRNAs) de afbraak of translatie-inhibitie van complementaire doel-mRNAs leiden, wat sequentie-specifieke genstillegging biedt."
        }
      },
      {
        question: {
          en: "What is the primary function of telomerase in cellular biology?",
          es: "¿Cuál es la función principal de la telomerasa en biología celular?",
          de: "Was ist die Hauptfunktion der Telomerase in der Zellbiologie?",
          nl: "Wat is de primaire functie van telomerase in celbiologie?"
        },
        options: [
          { en: "Extends telomeres to counteract chromosomal shortening", es: "Extiende telómeros para contrarrestar acortamiento cromosómico", de: "Verlängert Telomere um chromosomaler Verkürzung entgegenzuwirken", nl: "Verlengt telomeren om chromosomale verkorting tegen te gaan" },
          { en: "Repairs DNA double-strand breaks", es: "Repara roturas de doble cadena del ADN", de: "Repariert DNA-Doppelstrangbrüche", nl: "Repareert DNA-dubbelstrengbreuken" },
          { en: "Facilitates chromosome condensation", es: "Facilita condensación cromosómica", de: "Erleichtert Chromosomenkondensation", nl: "Faciliteert chromosoomcondensatie" },
          { en: "Regulates cell cycle checkpoints", es: "Regula puntos de control del ciclo celular", de: "Reguliert Zellzyklusprüfpunkte", nl: "Reguleert celcyclus controlepunten" }
        ],
        correct: 0,
        explanation: {
          en: "Telomerase adds TTAGGG repeats to chromosome ends, preventing telomere shortening during DNA replication. This is crucial for maintaining chromosomal integrity and cellular lifespan, particularly in stem cells and cancer cells.",
          es: "La telomerasa añade repeticiones TTAGGG a los extremos cromosómicos, previniendo acortamiento de telómeros durante replicación del ADN. Esto es crucial para mantener integridad cromosómica y vida útil celular, particularmente en células madre y células cancerosas.",
          de: "Telomerase fügt TTAGGG-Wiederholungen an Chromosomenenden hinzu und verhindert Telomerverkürzung während der DNA-Replikation. Dies ist entscheidend für die Aufrechterhaltung der chromosomalen Integrität und Zelllebensdauer, besonders in Stammzellen und Krebszellen.",
          nl: "Telomerase voegt TTAGGG-herhalingen toe aan chromosoomuiteinden, waardoor telomeerverkorting tijdens DNA-replicatie wordt voorkomen. Dit is cruciaal voor het behouden van chromosomale integriteit en cellulaire levensduur, vooral in stamcellen en kankercellen."
        }
      },
      {
        question: {
          en: "Which technique is most suitable for studying genome-wide transcriptional changes?",
          es: "¿Qué técnica es más adecuada para estudiar cambios transcripcionales a nivel del genoma completo?",
          de: "Welche Technik ist am besten geeignet für die Untersuchung genomweiter Transkriptionsveränderungen?",
          nl: "Welke techniek is het meest geschikt voor het bestuderen van genoomwijde transcriptionele veranderingen?"
        },
        options: [
          { en: "RNA sequencing (RNA-seq)", es: "Secuenciación de ARN (RNA-seq)", de: "RNA-Sequenzierung (RNA-seq)", nl: "RNA-sequencing (RNA-seq)" },
          { en: "Western blotting", es: "Western blot", de: "Western-Blot", nl: "Western blotting" },
          { en: "Flow cytometry", es: "Citometría de flujo", de: "Durchflusszytometrie", nl: "Flow cytometrie" },
          { en: "Electron microscopy", es: "Microscopía electrónica", de: "Elektronenmikroskopie", nl: "Elektronenmicroscopie" }
        ],
        correct: 0,
        explanation: {
          en: "RNA-seq provides comprehensive, quantitative, and unbiased analysis of transcriptome-wide gene expression changes, allowing identification of novel transcripts, splice variants, and regulatory elements across the entire genome.",
          es: "RNA-seq proporciona análisis integral, cuantitativo e imparcial de cambios de expresión génica a nivel del transcriptoma, permitiendo identificación de transcriptos noveles, variantes de empalme y elementos regulatorios a través de todo el genoma.",
          de: "RNA-seq bietet umfassende, quantitative und unvoreingenommene Analyse transkriptomweiter Genexpressionveränderungen und ermöglicht die Identifizierung neuer Transkripte, Spleißvarianten und regulatorischer Elemente über das gesamte Genom.",
          nl: "RNA-seq biedt uitgebreide, kwantitatieve en onbevooroordeelde analyse van transcriptoomwijde genexpressieveranderingen, waardoor identificatie van nieuwe transcripten, splice-varianten en regulatoire elementen over het gehele genoom mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the principle behind optogenetics in neuroscience research?",
          es: "¿Cuál es el principio detrás de la optogenética en investigación neurocientífica?",
          de: "Was ist das Prinzip hinter der Optogenetik in der Neurowissenschaftsforschung?",
          nl: "Wat is het principe achter optogenetica in neurowetenschappelijk onderzoek?"
        },
        options: [
          { en: "Light-controlled ion channels for precise neuronal manipulation", es: "Canales iónicos controlados por luz para manipulación neuronal precisa", de: "Lichtgesteuerte Ionenkanäle für präzise neuronale Manipulation", nl: "Lichtgecontroleerde ionkanalen voor precieze neuronale manipulatie" },
          { en: "Magnetic field activation of neurons", es: "Activación de neuronas por campo magnético", de: "Magnetfeldaktivierung von Neuronen", nl: "Magneetveld activatie van neuronen" },
          { en: "Chemical neurotransmitter release", es: "Liberación química de neurotransmisores", de: "Chemische Neurotransmitterfreisetzung", nl: "Chemische neurotransmitter afgifte" },
          { en: "Electrical stimulation of brain regions", es: "Estimulación eléctrica de regiones cerebrales", de: "Elektrische Stimulation von Hirnregionen", nl: "Elektrische stimulatie van hersengebieden" }
        ],
        correct: 0,
        explanation: {
          en: "Optogenetics uses genetically encoded light-sensitive proteins (like channelrhodopsin and halorhodopsin) to control neuronal activity with millisecond precision using light, enabling researchers to investigate neural circuits and behavior with unprecedented temporal and spatial resolution.",
          es: "La optogenética utiliza proteínas fotosensibles genéticamente codificadas (como canalrodopsina y halorodopsina) para controlar actividad neuronal con precisión de milisegundos usando luz, permitiendo a investigadores investigar circuitos neurales y comportamiento con resolución temporal y espacial sin precedentes.",
          de: "Optogenetik verwendet genetisch kodierte lichtempfindliche Proteine (wie Channelrhodopsin und Halorhodopsin) um neuronale Aktivität mit Millisekundenpräzision mittels Licht zu kontrollieren, wodurch Forscher neurale Schaltkreise und Verhalten mit beispielloser zeitlicher und räumlicher Auflösung untersuchen können.",
          nl: "Optogenetica gebruikt genetisch gecodeerde lichtgevoelige eiwitten (zoals channelrhodopsine en halorhodopsine) om neuronale activiteit met millisecondennauwkeurigheid te controleren met licht, waardoor onderzoekers neurale circuits en gedrag kunnen onderzoeken met ongekende temporele en ruimtelijke resolutie."
        }
      },
      {
        question: {
          en: "Which process allows for the production of monoclonal antibodies?",
          es: "¿Qué proceso permite la producción de anticuerpos monoclonales?",
          de: "Welcher Prozess ermöglicht die Produktion monoklonaler Antikörper?",
          nl: "Welk proces maakt de productie van monoklonale antilichamen mogelijk?"
        },
        options: [
          { en: "Hybridoma cell fusion technology", es: "Tecnología de fusión de células hibridoma", de: "Hybridomzell-Fusionstechnologie", nl: "Hybridoma cel fusie technologie" },
          { en: "Bacterial fermentation", es: "Fermentación bacteriana", de: "Bakterielle Fermentation", nl: "Bacteriële fermentatie" },
          { en: "Viral vector transduction", es: "Transducción por vector viral", de: "Virale Vektortransduktion", nl: "Virale vector transductie" },
          { en: "Chemical synthesis", es: "Síntesis química", de: "Chemische Synthese", nl: "Chemische synthese" }
        ],
        correct: 0,
        explanation: {
          en: "Hybridoma technology fuses antibody-producing B cells with immortal myeloma cells, creating hybrid cells that produce specific antibodies indefinitely. This allows mass production of identical antibodies against specific antigens.",
          es: "La tecnología hibridoma fusiona células B productoras de anticuerpos con células de mieloma inmortales, creando células híbridas que producen anticuerpos específicos indefinidamente. Esto permite producción masiva de anticuerpos idénticos contra antígenos específicos.",
          de: "Hybridomtechnologie fusioniert antikörperproduzierende B-Zellen mit unsterblichen Myelomzellen und schafft Hybridzellen, die spezifische Antikörper unbegrenzt produzieren. Dies ermöglicht Massenproduktion identischer Antikörper gegen spezifische Antigene.",
          nl: "Hybridomatechnologie fuseert antilichaam-producerende B-cellen met onsterfelijke myeloomcellen, waardoor hybride cellen ontstaan die specifieke antilichamen oneindig produceren. Dit maakt massaproductie van identieke antilichamen tegen specifieke antigenen mogelijk."
        }
      },
      {
        question: {
          en: "What is the fundamental principle of polymerase chain reaction (PCR)?",
          es: "¿Cuál es el principio fundamental de la reacción en cadena de la polimerasa (PCR)?",
          de: "Was ist das Grundprinzip der Polymerase-Kettenreaktion (PCR)?",
          nl: "Wat is het fundamentele principe van polymerase kettingreactie (PCR)?"
        },
        options: [
          { en: "Exponential DNA amplification through thermal cycling", es: "Amplificación exponencial de ADN a través de ciclado térmico", de: "Exponentielle DNA-Amplifikation durch thermisches Zyklen", nl: "Exponentiële DNA-amplificatie door thermische cyclisering" },
          { en: "Linear DNA replication", es: "Replicación lineal del ADN", de: "Lineare DNA-Replikation", nl: "Lineaire DNA-replicatie" },
          { en: "RNA-directed DNA synthesis", es: "Síntesis de ADN dirigida por ARN", de: "RNA-gesteuerte DNA-Synthese", nl: "RNA-geleide DNA-synthese" },
          { en: "Protein-mediated DNA binding", es: "Unión de ADN mediada por proteínas", de: "Protein-vermittelte DNA-Bindung", nl: "Eiwit-gemedieerde DNA-binding" }
        ],
        correct: 0,
        explanation: {
          en: "PCR uses repeated cycles of denaturation, annealing, and extension to exponentially amplify specific DNA sequences. Each cycle approximately doubles the amount of target DNA, resulting in millions of copies from a single template.",
          es: "PCR utiliza ciclos repetidos de desnaturalización, hibridación y extensión para amplificar exponencialmente secuencias específicas de ADN. Cada ciclo aproximadamente duplica la cantidad de ADN objetivo, resultando en millones de copias de una sola plantilla.",
          de: "PCR verwendet wiederholte Zyklen von Denaturierung, Annealing und Extension um spezifische DNA-Sequenzen exponentiell zu amplifizieren. Jeder Zyklus verdoppelt etwa die Menge der Ziel-DNA und resultiert in Millionen von Kopien aus einer einzelnen Vorlage.",
          nl: "PCR gebruikt herhaalde cycli van denaturatie, annealing en extensie om specifieke DNA-sequenties exponentieel te amplificeren. Elke cyclus verdubbelt ongeveer de hoeveelheid doel-DNA, resulterend in miljoenen kopieën van één enkel sjabloon."
        }
      },
      {
        question: {
          en: "Which molecular marker is most commonly used for phylogenetic analysis of bacteria?",
          es: "¿Qué marcador molecular se usa más comúnmente para análisis filogenético de bacterias?",
          de: "Welcher molekulare Marker wird am häufigsten für phylogenetische Analyse von Bakterien verwendet?",
          nl: "Welke moleculaire marker wordt het meest gebruikt voor fylogenetische analyse van bacteriën?"
        },
        options: [
          { en: "16S ribosomal RNA gene", es: "Gen de ARN ribosomal 16S", de: "16S ribosomale RNA-Gen", nl: "16S ribosomaal RNA-gen" },
          { en: "Mitochondrial DNA", es: "ADN mitocondrial", de: "Mitochondriale DNA", nl: "Mitochondriaal DNA" },
          { en: "Histone genes", es: "Genes de histonas", de: "Histongene", nl: "Histongenen" },
          { en: "Intron sequences", es: "Secuencias de intrones", de: "Intron-Sequenzen", nl: "Intron sequenties" }
        ],
        correct: 0,
        explanation: {
          en: "The 16S rRNA gene is highly conserved across bacteria but contains variable regions that allow species discrimination. Its universal presence, appropriate evolutionary rate, and extensive database make it the gold standard for bacterial phylogenetic studies.",
          es: "El gen de ARNr 16S está altamente conservado a través de bacterias pero contiene regiones variables que permiten discriminación de especies. Su presencia universal, tasa evolutiva apropiada y base de datos extensa lo hacen el estándar de oro para estudios filogenéticos bacterianos.",
          de: "Das 16S rRNA-Gen ist bei Bakterien hochkonserviert, enthält aber variable Regionen, die Artendiskrimination ermöglichen. Seine universelle Präsenz, angemessene Evolutionsrate und umfangreiche Datenbank machen es zum Goldstandard für bakterielle phylogenetische Studien.",
          nl: "Het 16S rRNA-gen is sterk geconserveerd over bacteriën maar bevat variabele regio's die soortenonderscheiding mogelijk maken. Zijn universele aanwezigheid, juiste evolutionaire snelheid en uitgebreide database maken het de gouden standaard voor bacteriële fylogenetische studies."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of restriction endonucleases?",
          es: "¿Cuál es el mecanismo principal de acción de las endonucleasas de restricción?",
          de: "Was ist der primäre Wirkungsmechanismus von Restriktionsendonukleasen?",
          nl: "Wat is het primaire werkingsmechanisme van restrictie-endonucleasen?"
        },
        options: [
          { en: "Sequence-specific DNA cleavage", es: "Escisión de ADN específica de secuencia", de: "Sequenzspezifische DNA-Spaltung", nl: "Sequentie-specifieke DNA-klieven" },
          { en: "Random DNA degradation", es: "Degradación aleatoria del ADN", de: "Zufällige DNA-Degradation", nl: "Willekeurige DNA-afbraak" },
          { en: "DNA methylation", es: "Metilación del ADN", de: "DNA-Methylierung", nl: "DNA-methylering" },
          { en: "Histone modification", es: "Modificación de histonas", de: "Histonmodifikation", nl: "Histonmodificatie" }
        ],
        correct: 0,
        explanation: {
          en: "Restriction endonucleases recognize and cleave DNA at specific palindromic sequences called recognition sites. They cut both strands of DNA, creating either blunt or sticky ends, and are essential tools in molecular cloning and genetic engineering.",
          es: "Las endonucleasas de restricción reconocen y escinden ADN en secuencias palindrómicas específicas llamadas sitios de reconocimiento. Cortan ambas cadenas del ADN, creando extremos romos o cohesivos, y son herramientas esenciales en clonación molecular e ingeniería genética.",
          de: "Restriktionsendonukleasen erkennen und spalten DNA an spezifischen palindromischen Sequenzen, die als Erkennungsstellen bezeichnet werden. Sie schneiden beide DNA-Stränge und schaffen entweder stumpfe oder klebrige Enden und sind wesentliche Werkzeuge in molekularer Klonierung und Gentechnik.",
          nl: "Restrictie-endonucleasen herkennen en klieven DNA bij specifieke palindromische sequenties genaamd herkenningsplaatsen. Ze knippen beide DNA-strengen, waardoor stompe of kleverige uiteinden ontstaan, en zijn essentiële gereedschappen in moleculaire klonering en genetische manipulatie."
        }
      },
      {
        question: {
          en: "Which technique allows for the study of protein structure at atomic resolution?",
          es: "¿Qué técnica permite el estudio de estructura proteica a resolución atómica?",
          de: "Welche Technik ermöglicht die Untersuchung der Proteinstruktur mit atomarer Auflösung?",
          nl: "Welke techniek maakt bestudering van eiwitstructuur op atomaire resolutie mogelijk?"
        },
        options: [
          { en: "X-ray crystallography and cryo-electron microscopy", es: "Cristalografía de rayos X y microscopía electrónica criogénica", de: "Röntgenkristallographie und Kryo-Elektronenmikroskopie", nl: "Röntgenkristallografie en cryo-elektronenmicroscopie" },
          { en: "Light microscopy", es: "Microscopía de luz", de: "Lichtmikroskopie", nl: "Lichtmicroscopie" },
          { en: "Flow cytometry", es: "Citometría de flujo", de: "Durchflusszytometrie", nl: "Flow cytometrie" },
          { en: "Western blotting", es: "Western blot", de: "Western-Blot", nl: "Western blotting" }
        ],
        correct: 0,
        explanation: {
          en: "X-ray crystallography and cryo-EM can determine protein structures at atomic resolution (1-3 Å), revealing detailed molecular architecture including side chain positions, active sites, and conformational changes crucial for understanding protein function.",
          es: "La cristalografía de rayos X y cryo-EM pueden determinar estructuras proteicas a resolución atómica (1-3 Å), revelando arquitectura molecular detallada incluyendo posiciones de cadenas laterales, sitios activos y cambios conformacionales cruciales para entender función proteica.",
          de: "Röntgenkristallographie und Kryo-EM können Proteinstrukturen mit atomarer Auflösung (1-3 Å) bestimmen und detaillierte molekulare Architektur einschließlich Seitenkettenpositionen, aktive Zentren und Konformationsänderungen aufdecken, die für das Verständnis der Proteinfunktion entscheidend sind.",
          nl: "Röntgenkristallografie en cryo-EM kunnen eiwitstructuren bepalen op atomaire resolutie (1-3 Å), waarbij gedetailleerde moleculaire architectuur wordt onthuld inclusief zijketenposities, actieve plaatsen en conformationele veranderingen cruciaal voor het begrijpen van eiwitfunctie."
        }
      },
      {
        question: {
          en: "What is the primary application of chromatin immunoprecipitation (ChIP) sequencing?",
          es: "¿Cuál es la aplicación principal de la secuenciación por inmunoprecipitación de cromatina (ChIP)?",
          de: "Was ist die Hauptanwendung der Chromatin-Immunopräzipitation (ChIP) Sequenzierung?",
          nl: "Wat is de primaire toepassing van chromatine immunoprecipitatie (ChIP) sequencing?"
        },
        options: [
          { en: "Mapping protein-DNA interactions genome-wide", es: "Mapear interacciones proteína-ADN a nivel del genoma", de: "Genomweites Kartieren von Protein-DNA-Wechselwirkungen", nl: "Genoomwijde kartering van eiwit-DNA interacties" },
          { en: "Measuring gene expression levels", es: "Medir niveles de expresión génica", de: "Messung von Genexpressionsniveaus", nl: "Meten van genexpressieniveaus" },
          { en: "Detecting DNA mutations", es: "Detectar mutaciones del ADN", de: "Erkennung von DNA-Mutationen", nl: "Detectie van DNA-mutaties" },
          { en: "Analyzing protein-protein interactions", es: "Analizar interacciones proteína-proteína", de: "Analyse von Protein-Protein-Wechselwirkungen", nl: "Analyse van eiwit-eiwit interacties" }
        ],
        correct: 0,
        explanation: {
          en: "ChIP-seq identifies where specific proteins bind to DNA across the genome by immunoprecipitating protein-DNA complexes and sequencing the associated DNA fragments. This reveals transcription factor binding sites, histone modifications, and chromatin structure.",
          es: "ChIP-seq identifica dónde se unen proteínas específicas al ADN a través del genoma mediante inmunoprecipitación de complejos proteína-ADN y secuenciación de fragmentos de ADN asociados. Esto revela sitios de unión de factores de transcripción, modificaciones de histonas y estructura de cromatina.",
          de: "ChIP-seq identifiziert, wo spezifische Proteine genomweit an DNA binden durch Immunpräzipitation von Protein-DNA-Komplexen und Sequenzierung der assoziierten DNA-Fragmente. Dies enthüllt Transkriptionsfaktor-Bindungsstellen, Histonmodifikationen und Chromatinstruktur.",
          nl: "ChIP-seq identificeert waar specifieke eiwitten binden aan DNA over het genoom door immunoprecipitatie van eiwit-DNA complexen en sequencing van geassocieerde DNA-fragmenten. Dit onthult transcriptiefactor bindingsplaatsen, histonmodificaties en chromatinestructuur."
        }
      },
      {
        question: {
          en: "Which mechanism allows bacteria to rapidly acquire antibiotic resistance genes?",
          es: "¿Qué mecanismo permite a las bacterias adquirir rápidamente genes de resistencia a antibióticos?",
          de: "Welcher Mechanismus ermöglicht es Bakterien, schnell Antibiotikaresistenzgene zu erwerben?",
          nl: "Welk mechanisme stelt bacteriën in staat om snel antibioticaresistentiegenen te verwerven?"
        },
        options: [
          { en: "Horizontal gene transfer through plasmids", es: "Transferencia horizontal de genes a través de plásmidos", de: "Horizontaler Gentransfer durch Plasmide", nl: "Horizontale genoverdracht door plasmiden" },
          { en: "Random mutations only", es: "Solo mutaciones aleatorias", de: "Nur zufällige Mutationen", nl: "Alleen willekeurige mutaties" },
          { en: "Vertical inheritance only", es: "Solo herencia vertical", de: "Nur vertikale Vererbung", nl: "Alleen verticale overerving" },
          { en: "Environmental adaptation", es: "Adaptación ambiental", de: "Umweltanpassung", nl: "Omgevingsaanpassing" }
        ],
        correct: 0,
        explanation: {
          en: "Horizontal gene transfer via plasmids, transposons, and transformation allows bacteria to rapidly acquire resistance genes from other bacterial species, spreading antibiotic resistance much faster than through mutations alone.",
          es: "La transferencia horizontal de genes vía plásmidos, transposones y transformación permite a bacterias adquirir rápidamente genes de resistencia de otras especies bacterianas, propagando resistencia a antibióticos mucho más rápido que solo a través de mutaciones.",
          de: "Horizontaler Gentransfer über Plasmide, Transposons und Transformation ermöglicht es Bakterien, schnell Resistenzgene von anderen Bakterienarten zu erwerben und Antibiotikaresistenz viel schneller zu verbreiten als nur durch Mutationen.",
          nl: "Horizontale genoverdracht via plasmiden, transposons en transformatie stelt bacteriën in staat om snel resistentiegenen van andere bacteriesoorten te verwerven, waardoor antibioticaresistentie veel sneller verspreidt dan alleen door mutaties."
        }
      },
      {
        question: {
          en: "What is the primary advantage of next-generation sequencing (NGS) over traditional Sanger sequencing?",
          es: "¿Cuál es la ventaja principal de la secuenciación de próxima generación (NGS) sobre la secuenciación tradicional de Sanger?",
          de: "Was ist der Hauptvorteil der Next-Generation-Sequenzierung (NGS) gegenüber herkömmlicher Sanger-Sequenzierung?",
          nl: "Wat is het primaire voordeel van next-generation sequencing (NGS) ten opzichte van traditionele Sanger sequencing?"
        },
        options: [
          { en: "Massively parallel sequencing with higher throughput", es: "Secuenciación masivamente paralela con mayor rendimiento", de: "Massiv parallele Sequenzierung mit höherem Durchsatz", nl: "Massaal parallelle sequencing met hogere doorvoer" },
          { en: "Better accuracy per read", es: "Mejor precisión por lectura", de: "Bessere Genauigkeit pro Read", nl: "Betere nauwkeurigheid per read" },
          { en: "Longer read lengths", es: "Longitudes de lectura más largas", de: "Längere Read-Längen", nl: "Langere readlengtes" },
          { en: "Lower cost per base", es: "Menor costo por base", de: "Geringere Kosten pro Base", nl: "Lagere kosten per base" }
        ],
        correct: 0,
        explanation: {
          en: "NGS technologies sequence millions of DNA fragments simultaneously, providing much higher throughput than Sanger sequencing. This enables whole genome sequencing, transcriptomics, and other large-scale genomic analyses at reasonable costs and timeframes.",
          es: "Las tecnologías NGS secuencian millones de fragmentos de ADN simultáneamente, proporcionando rendimiento mucho mayor que secuenciación Sanger. Esto permite secuenciación de genoma completo, transcriptómica y otros análisis genómicos a gran escala con costos y tiempos razonables.",
          de: "NGS-Technologien sequenzieren Millionen von DNA-Fragmenten gleichzeitig und bieten viel höheren Durchsatz als Sanger-Sequenzierung. Dies ermöglicht Vollgenom-Sequenzierung, Transkriptomik und andere großangelegte genomische Analysen zu angemessenen Kosten und Zeitrahmen.",
          nl: "NGS-technologieën sequencen miljoenen DNA-fragmenten tegelijkertijd, wat veel hogere doorvoer biedt dan Sanger sequencing. Dit maakt volledige genoomsequencing, transcriptomics en andere grootschalige genomische analyses mogelijk tegen redelijke kosten en tijdkaders."
        }
      },
      {
        question: {
          en: "Which cellular process is primarily regulated by ubiquitin-mediated protein degradation?",
          es: "¿Qué proceso celular es regulado principalmente por degradación de proteínas mediada por ubiquitina?",
          de: "Welcher Zellprozess wird hauptsächlich durch Ubiquitin-vermittelte Proteindegradation reguliert?",
          nl: "Welk cellulair proces wordt hoofdzakelijk gereguleerd door ubiquitine-gemedieerde eiwitafbraak?"
        },
        options: [
          { en: "Cell cycle progression and protein quality control", es: "Progresión del ciclo celular y control de calidad proteica", de: "Zellzyklusprogression und Proteinqualitätskontrolle", nl: "Celcyclus progressie en eiwit kwaliteitscontrole" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
          { en: "Lipid metabolism", es: "Metabolismo de lípidos", de: "Lipidstoffwechsel", nl: "Lipide metabolisme" },
          { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" }
        ],
        correct: 0,
        explanation: {
          en: "The ubiquitin-proteasome system regulates cell cycle by degrading cyclins and CDK inhibitors at specific time points, and maintains protein homeostasis by eliminating misfolded or damaged proteins, preventing cellular dysfunction.",
          es: "El sistema ubiquitina-proteasoma regula el ciclo celular degradando ciclinas e inhibidores de CDK en momentos específicos, y mantiene homeostasis proteica eliminando proteínas mal plegadas o dañadas, previniendo disfunción celular.",
          de: "Das Ubiquitin-Proteasom-System reguliert den Zellzyklus durch Abbau von Cyclinen und CDK-Inhibitoren zu spezifischen Zeitpunkten und erhält Proteinhomöostase durch Eliminierung fehlgefalteter oder beschädigter Proteine, wodurch Zelldysfunktion verhindert wird.",
          nl: "Het ubiquitine-proteasoom systeem reguleert de celcyclus door afbraak van cyclines en CDK-remmers op specifieke tijdstippen, en houdt eiwithomeostase in stand door eliminatie van verkeerd gevouwen of beschadigde eiwitten, waardoor cellulaire disfunctie wordt voorkomen."
        }
      },
      {
        question: {
          en: "What is the molecular basis of the green fluorescent protein (GFP) fluorescence?",
          es: "¿Cuál es la base molecular de la fluorescencia de la proteína fluorescente verde (GFP)?",
          de: "Was ist die molekulare Grundlage der Fluoreszenz des grün fluoreszierenden Proteins (GFP)?",
          nl: "Wat is de moleculaire basis van de fluorescentie van groen fluorescerend eiwit (GFP)?"
        },
        options: [
          { en: "Autocatalytic chromophore formation from three amino acids", es: "Formación autocatalítica de cromóforo de tres aminoácidos", de: "Autokatalytische Chromophorbildung aus drei Aminosäuren", nl: "Autocatalytische chromofoormvorming uit drie aminozuren" },
          { en: "Binding of external fluorescent cofactors", es: "Unión de cofactores fluorescentes externos", de: "Bindung externer fluoreszierender Cofaktoren", nl: "Binding van externe fluorescente cofactoren" },
          { en: "Metallic ion coordination", es: "Coordinación de iones metálicos", de: "Metallische Ionenkoordination", nl: "Metallische ioncoördinatie" },
          { en: "DNA intercalation", es: "Intercalación del ADN", de: "DNA-Interkalation", nl: "DNA-intercalatie" }
        ],
        correct: 0,
        explanation: {
          en: "GFP fluorescence results from an autocatalytically formed chromophore created by cyclization and oxidation of three amino acids (Ser65-Tyr66-Gly67), creating a conjugated π-electron system that absorbs blue light and emits green fluorescence.",
          es: "La fluorescencia GFP resulta de un cromóforo formado autocatalíticamente creado por ciclización y oxidación de tres aminoácidos (Ser65-Tyr66-Gly67), creando un sistema π-electrónico conjugado que absorbe luz azul y emite fluorescencia verde.",
          de: "GFP-Fluoreszenz resultiert aus einem autokatalytisch gebildeten Chromophor, der durch Zyklisierung und Oxidation drei Aminosäuren (Ser65-Tyr66-Gly67) entsteht und ein konjugiertes π-Elektronensystem schafft, das blaues Licht absorbiert und grüne Fluoreszenz emittiert.",
          nl: "GFP-fluorescentie resulteert uit een autocatalytisch gevormde chromofoor gecreëerd door cyclisatie en oxidatie van drie aminozuren (Ser65-Tyr66-Gly67), wat een geconjugeerd π-elektronensysteem creëert dat blauw licht absorbeert en groene fluorescentie uitzendt."
        }
      },
      {
        question: {
          en: "Which technique is used to study single-cell gene expression profiles?",
          es: "¿Qué técnica se usa para estudiar perfiles de expresión génica de células individuales?",
          de: "Welche Technik wird verwendet, um Einzelzell-Genexpressionprofile zu untersuchen?",
          nl: "Welke techniek wordt gebruikt om genexpressieprofielen van individuele cellen te bestuderen?"
        },
        options: [
          { en: "Single-cell RNA sequencing (scRNA-seq)", es: "Secuenciación de ARN de célula única (scRNA-seq)", de: "Einzelzell-RNA-Sequenzierung (scRNA-seq)", nl: "Enkelvoudige-cel RNA sequencing (scRNA-seq)" },
          { en: "Bulk RNA sequencing", es: "Secuenciación de ARN masiva", de: "Bulk-RNA-Sequenzierung", nl: "Bulk RNA sequencing" },
          { en: "Protein gel electrophoresis", es: "Electroforesis en gel de proteínas", de: "Protein-Gel-Elektrophorese", nl: "Eiwit gel elektroforese" },
          { en: "Fluorescence microscopy", es: "Microscopía de fluorescencia", de: "Fluoreszenzmikroskopie", nl: "Fluorescentie microscopie" }
        ],
        correct: 0,
        explanation: {
          en: "scRNA-seq enables analysis of gene expression in individual cells, revealing cell-to-cell heterogeneity, rare cell populations, developmental trajectories, and cellular states that are masked in bulk RNA-seq experiments.",
          es: "scRNA-seq permite análisis de expresión génica en células individuales, revelando heterogeneidad célula-célula, poblaciones celulares raras, trayectorias de desarrollo y estados celulares que están enmascarados en experimentos de RNA-seq masivo.",
          de: "scRNA-seq ermöglicht die Analyse der Genexpression in einzelnen Zellen und enthüllt Zell-zu-Zell-Heterogenität, seltene Zellpopulationen, Entwicklungstrajektorien und Zellzustände, die in Bulk-RNA-seq-Experimenten maskiert sind.",
          nl: "scRNA-seq maakt analyse van genexpressie in individuele cellen mogelijk, waarbij cel-tot-cel heterogeniteit, zeldzame celpopulaties, ontwikkelingstrajecten en cellulaire toestanden worden onthuld die gemaskeerd zijn in bulk RNA-seq experimenten."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of DNA ligases in molecular biology?",
          es: "¿Cuál es el mecanismo principal de acción de las ligasas de ADN en biología molecular?",
          de: "Was ist der primäre Wirkungsmechanismus von DNA-Ligasen in der Molekularbiologie?",
          nl: "Wat is het primaire werkingsmechanisme van DNA-ligasen in moleculaire biologie?"
        },
        options: [
          { en: "Formation of phosphodiester bonds between DNA fragments", es: "Formación de enlaces fosfodiéster entre fragmentos de ADN", de: "Bildung von Phosphodiesterbindungen zwischen DNA-Fragmenten", nl: "Vorming van fosfodiëster bindingen tussen DNA-fragmenten" },
          { en: "DNA strand separation", es: "Separación de cadenas de ADN", de: "DNA-Strangtrennung", nl: "DNA-streng scheiding" },
          { en: "RNA primer synthesis", es: "Síntesis de cebadores de ARN", de: "RNA-Primer-Synthese", nl: "RNA-primer synthese" },
          { en: "DNA methylation", es: "Metilación del ADN", de: "DNA-Methylierung", nl: "DNA-methylering" }
        ],
        correct: 0,
        explanation: {
          en: "DNA ligases seal nicks in DNA by forming phosphodiester bonds between 3'-hydroxyl and 5'-phosphate groups, joining DNA fragments together. This is essential for DNA replication, repair, and molecular cloning procedures.",
          es: "Las ligasas de ADN sellan cortes en ADN formando enlaces fosfodiéster entre grupos 3'-hidroxilo y 5'-fosfato, uniendo fragmentos de ADN. Esto es esencial para replicación de ADN, reparación y procedimientos de clonación molecular.",
          de: "DNA-Ligasen versiegeln Nicks in DNA durch Bildung von Phosphodiesterbindungen zwischen 3'-Hydroxyl- und 5'-Phosphatgruppen und verbinden DNA-Fragmente miteinander. Dies ist wesentlich für DNA-Replikation, -Reparatur und molekulare Klonierungsverfahren.",
          nl: "DNA-ligasen verzegelen nicks in DNA door vorming van fosfodiëster bindingen tussen 3'-hydroxyl en 5'-fosfaat groepen, waarbij DNA-fragmenten worden verbonden. Dit is essentieel voor DNA-replicatie, -reparatie en moleculaire kloneringsprocedures."
        }
      },
      {
        question: {
          en: "Which molecular process is targeted by RNA interference (RNAi) therapy?",
          es: "¿Qué proceso molecular es objetivo de la terapia de interferencia por ARN (RNAi)?",
          de: "Welcher molekulare Prozess wird durch RNA-Interferenz (RNAi) Therapie angezielt?",
          nl: "Welk moleculair proces wordt getarget door RNA-interferentie (RNAi) therapie?"
        },
        options: [
          { en: "Post-transcriptional gene silencing", es: "Silenciamiento génico post-transcripcional", de: "Post-transkriptionale Genstilllegung", nl: "Post-transcriptionele genstillegging" },
          { en: "DNA methylation", es: "Metilación del ADN", de: "DNA-Methylierung", nl: "DNA-methylering" },
          { en: "Histone acetylation", es: "Acetilación de histonas", de: "Histon-Acetylierung", nl: "Histon acetylering" },
          { en: "Protein phosphorylation", es: "Fosforilación de proteínas", de: "Protein-Phosphorylierung", nl: "Eiwit fosforylering" }
        ],
        correct: 0,
        explanation: {
          en: "RNAi therapy uses small RNA molecules (siRNA or miRNA) to silence specific genes post-transcriptionally by targeting complementary mRNAs for degradation or translational repression, offering therapeutic potential for various diseases.",
          es: "La terapia RNAi utiliza pequeñas moléculas de ARN (siRNA o miRNA) para silenciar genes específicos post-transcripcionalmente dirigiéndose a ARNms complementarios para degradación o represión traduccional, ofreciendo potencial terapéutico para varias enfermedades.",
          de: "RNAi-Therapie verwendet kleine RNA-Moleküle (siRNA oder miRNA) um spezifische Gene post-transkriptional zu silencieren durch Targeting komplementärer mRNAs für Degradation oder Translationsrepression, was therapeutisches Potential für verschiedene Krankheiten bietet.",
          nl: "RNAi-therapie gebruikt kleine RNA-moleculen (siRNA of miRNA) om specifieke genen post-transcriptioneel te silenceren door targeting van complementaire mRNAs voor afbraak of translationele repressie, wat therapeutisch potentieel biedt voor verschillende ziekten."
        }
      },
      {
        question: {
          en: "What is the primary application of the yeast two-hybrid system?",
          es: "¿Cuál es la aplicación principal del sistema de dos híbridos en levadura?",
          de: "Was ist die Hauptanwendung des Hefe-Zwei-Hybrid-Systems?",
          nl: "Wat is de primaire toepassing van het gist twee-hybride systeem?"
        },
        options: [
          { en: "Detecting protein-protein interactions", es: "Detectar interacciones proteína-proteína", de: "Nachweis von Protein-Protein-Wechselwirkungen", nl: "Detectie van eiwit-eiwit interacties" },
          { en: "Gene knockout studies", es: "Estudios de eliminación génica", de: "Gen-Knockout-Studien", nl: "Gen-knockout studies" },
          { en: "Protein purification", es: "Purificación de proteínas", de: "Proteinreinigung", nl: "Eiwitruivering" },
          { en: "DNA sequencing", es: "Secuenciación de ADN", de: "DNA-Sequenzierung", nl: "DNA-sequencing" }
        ],
        correct: 0,
        explanation: {
          en: "The yeast two-hybrid system detects protein-protein interactions by reconstituting a functional transcription factor when two proteins of interest interact, leading to reporter gene expression that can be easily detected and quantified.",
          es: "El sistema de dos híbridos en levadura detecta interacciones proteína-proteína reconstituyendo un factor de transcripción funcional cuando dos proteínas de interés interactúan, llevando a expresión de gen reportero que puede ser fácilmente detectada y cuantificada.",
          de: "Das Hefe-Zwei-Hybrid-System erkennt Protein-Protein-Wechselwirkungen durch Rekonstitution eines funktionalen Transkriptionsfaktors, wenn zwei interessierende Proteine interagieren, was zu Reportergen-Expression führt, die leicht nachgewiesen und quantifiziert werden kann.",
          nl: "Het gist twee-hybride systeem detecteert eiwit-eiwit interacties door reconstitutie van een functionele transcriptiefactor wanneer twee eiwitten van belang interageren, wat leidt tot reportergen-expressie die gemakkelijk gedetecteerd en gekwantificeerd kan worden."
        }
      },
      {
        question: {
          en: "Which technique enables precise temporal control of gene expression?",
          es: "¿Qué técnica permite control temporal preciso de la expresión génica?",
          de: "Welche Technik ermöglicht präzise zeitliche Kontrolle der Genexpression?",
          nl: "Welke techniek maakt precieze temporele controle van genexpressie mogelijk?"
        },
        options: [
          { en: "Inducible expression systems (e.g., doxycycline-inducible)", es: "Sistemas de expresión inducibles (ej., inducibles por doxiciclina)", de: "Induzierbare Expressionssysteme (z.B. Doxycyclin-induzierbar)", nl: "Induceerbare expressiesystemen (bijv. doxycycline-induceerbaar)" },
          { en: "Constitutive promoters", es: "Promotores constitutivos", de: "Konstitutive Promotoren", nl: "Constitutieve promoters" },
          { en: "Gene knockout", es: "Eliminación génica", de: "Gen-Knockout", nl: "Gen-knockout" },
          { en: "Random mutagenesis", es: "Mutagénesis aleatoria", de: "Zufällige Mutagenese", nl: "Willekeurige mutagenese" }
        ],
        correct: 0,
        explanation: {
          en: "Inducible systems like Tet-On/Tet-Off allow researchers to precisely control when genes are expressed by adding or removing small molecule inducers, enabling studies of gene function at specific developmental stages or experimental conditions.",
          es: "Sistemas inducibles como Tet-On/Tet-Off permiten a investigadores controlar precisamente cuándo se expresan genes agregando o removiendo inductores de moléculas pequeñas, permitiendo estudios de función génica en etapas de desarrollo específicas o condiciones experimentales.",
          de: "Induzierbare Systeme wie Tet-On/Tet-Off ermöglichen es Forschern, präzise zu kontrollieren, wann Gene exprimiert werden, indem sie kleine Molekül-Induktoren hinzufügen oder entfernen, wodurch Studien der Genfunktion in spezifischen Entwicklungsstadien oder experimentellen Bedingungen ermöglicht werden.",
          nl: "Induceerbare systemen zoals Tet-On/Tet-Off stellen onderzoekers in staat om precies te controleren wanneer genen tot expressie komen door het toevoegen of verwijderen van kleine molecuul-inducers, wat studies van genfunctie mogelijk maakt in specifieke ontwikkelingsstadia of experimentele condities."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of DNA methylation in gene regulation?",
          es: "¿Cuál es el mecanismo molecular de la metilación del ADN en regulación génica?",
          de: "Was ist der molekulare Mechanismus der DNA-Methylierung in der Genregulation?",
          nl: "Wat is het moleculaire mechanisme van DNA-methylering in genregulatie?"
        },
        options: [
          { en: "Cytosine methylation leading to chromatin compaction and transcriptional silencing", es: "Metilación de citosina llevando a compactación de cromatina y silenciamiento transcripcional", de: "Cytosin-Methylierung führt zu Chromatin-Kompaktierung und transkriptionaler Stilllegung", nl: "Cytosine methylering leidend tot chromatinecompactie en transcriptionele stillegging" },
          { en: "Adenine methylation promoting transcription", es: "Metilación de adenina promoviendo transcripción", de: "Adenin-Methylierung fördert Transkription", nl: "Adenine methylering bevordert transcriptie" },
          { en: "Guanine methylation enhancing translation", es: "Metilación de guanina mejorando traducción", de: "Guanin-Methylierung verbessert Translation", nl: "Guanine methylering verbetert translatie" },
          { en: "Thymine methylation increasing mRNA stability", es: "Metilación de timina aumentando estabilidad del ARNm", de: "Thymin-Methylierung erhöht mRNA-Stabilität", nl: "Thymine methylering verhoogt mRNA-stabiliteit" }
        ],
        correct: 0,
        explanation: {
          en: "DNA methylation typically occurs at cytosine bases in CpG dinucleotides, creating 5-methylcytosine. This modification recruits proteins that promote chromatin compaction and histone modifications, generally leading to transcriptional silencing and gene repression.",
          es: "La metilación del ADN típicamente ocurre en bases de citosina en dinucleótidos CpG, creando 5-metilcitosina. Esta modificación recluta proteínas que promueven compactación de cromatina y modificaciones de histonas, generalmente llevando a silenciamiento transcripcional y represión génica.",
          de: "DNA-Methylierung tritt typischerweise an Cytosinbasen in CpG-Dinukleotiden auf und erzeugt 5-Methylcytosin. Diese Modifikation rekrutiert Proteine, die Chromatin-Kompaktierung und Histonmodifikationen fördern und generell zu transkriptionaler Stilllegung und Genrepression führen.",
          nl: "DNA-methylering treedt typisch op bij cytosinebasen in CpG-dinucleotiden, wat 5-methylcytosine creëert. Deze modificatie recruteert eiwitten die chromatinecompactie en histonmodificaties bevorderen, wat over het algemeen leidt tot transcriptionele stillegging en genrepressie."
        }
      },
      {
        question: {
          en: "Which molecular tool allows for the creation of conditional gene knockouts?",
          es: "¿Qué herramienta molecular permite la creación de eliminaciones génicas condicionales?",
          de: "Welches molekulare Werkzeug ermöglicht die Erstellung konditionaler Gen-Knockouts?",
          nl: "Welk moleculair gereedschap maakt de creatie van conditionele gen-knockouts mogelijk?"
        },
        options: [
          { en: "Cre-lox recombination system", es: "Sistema de recombinación Cre-lox", de: "Cre-lox-Rekombinationssystem", nl: "Cre-lox recombinatie systeem" },
          { en: "Random DNA integration", es: "Integración aleatoria de ADN", de: "Zufällige DNA-Integration", nl: "Willekeurige DNA-integratie" },
          { en: "Chemical mutagenesis", es: "Mutagénesis química", de: "Chemische Mutagenese", nl: "Chemische mutagenese" },
          { en: "Viral transduction", es: "Transducción viral", de: "Virale Transduktion", nl: "Virale transductie" }
        ],
        correct: 0,
        explanation: {
          en: "The Cre-lox system uses Cre recombinase to excise DNA sequences flanked by loxP sites. When expressed in specific cell types or at particular times, Cre enables spatial and temporal control of gene deletion, allowing study of gene function without embryonic lethality.",
          es: "El sistema Cre-lox utiliza recombinasa Cre para escindir secuencias de ADN flanqueadas por sitios loxP. Cuando se expresa en tipos celulares específicos o en momentos particulares, Cre permite control espacial y temporal de deleción génica, permitiendo estudio de función génica sin letalidad embrionaria.",
          de: "Das Cre-lox-System verwendet Cre-Rekombinase um DNA-Sequenzen zu excisieren, die von loxP-Stellen flankiert sind. Wenn es in spezifischen Zelltypen oder zu bestimmten Zeiten exprimiert wird, ermöglicht Cre räumliche und zeitliche Kontrolle der Gendeletion, wodurch Studien der Genfunktion ohne embryonale Letalität möglich werden.",
          nl: "Het Cre-lox systeem gebruikt Cre-recombinase om DNA-sequenties te exciseren die geflankeerd zijn door loxP-sites. Wanneer tot expressie gebracht in specifieke celtypen of op bepaalde tijden, maakt Cre ruimtelijke en temporele controle van gendeletie mogelijk, waardoor studie van genfunctie zonder embryonale letaliteit mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of TALENs (Transcription Activator-Like Effector Nucleases)?",
          es: "¿Cuál es el mecanismo principal de acción de los TALENs (Nucleasas Efectoras Similares a Activadores de Transcripción)?",
          de: "Was ist der primäre Wirkungsmechanismus von TALENs (Transcription Activator-Like Effector Nucleases)?",
          nl: "Wat is het primaire werkingsmechanisme van TALENs (Transcriptie Activator-Achtige Effector Nucleasen)?"
        },
        options: [
          { en: "Programmable DNA binding and cleavage", es: "Unión y escisión programable del ADN", de: "Programmierbare DNA-Bindung und -Spaltung", nl: "Programmeerbare DNA-binding en -klieven" },
          { en: "RNA interference", es: "Interferencia de ARN", de: "RNA-Interferenz", nl: "RNA-interferentie" },
          { en: "Protein degradation", es: "Degradación de proteínas", de: "Proteindegradation", nl: "Eiwitafbraak" },
          { en: "Chromatin remodeling", es: "Remodelación de cromatina", de: "Chromatin-Remodeling", nl: "Chromatine hermodellering" }
        ],
        correct: 0,
        explanation: {
          en: "TALENs use customizable DNA-binding domains derived from plant pathogen proteins, coupled with nuclease domains, to create site-specific double-strand breaks in DNA. This enables precise genome editing through repair mechanisms.",
          es: "Los TALENs utilizan dominios de unión al ADN personalizables derivados de proteínas de patógenos de plantas, acoplados con dominios nucleasa, para crear roturas de doble cadena específicas del sitio en ADN. Esto permite edición genómica precisa a través de mecanismos de reparación.",
          de: "TALENs verwenden anpassbare DNA-Bindungsdomänen, die von Pflanzenpathogen-Proteinen abgeleitet sind, gekoppelt mit Nuklease-Domänen, um ortsspezifische Doppelstrangbrüche in DNA zu erzeugen. Dies ermöglicht präzise Genombearbeitung durch Reparaturmechanismen.",
          nl: "TALENs gebruiken aanpasbare DNA-bindingsdomeinen afgeleid van plantenpathogeeneiwitten, gekoppeld aan nuclease-domeinen, om site-specifieke dubbelstrengbreuken in DNA te creëren. Dit maakt precieze genoombewerking mogelijk door reparatiemechanismen."
        }
      },
      {
        question: {
          en: "Which technique is used to measure real-time gene expression during PCR amplification?",
          es: "¿Qué técnica se usa para medir expresión génica en tiempo real durante amplificación por PCR?",
          de: "Welche Technik wird verwendet, um Echtzeit-Genexpression während PCR-Amplifikation zu messen?",
          nl: "Welke techniek wordt gebruikt om real-time genexpressie te meten tijdens PCR-amplificatie?"
        },
        options: [
          { en: "Quantitative PCR (qPCR) with fluorescent reporters", es: "PCR cuantitativa (qPCR) con reporteros fluorescentes", de: "Quantitative PCR (qPCR) mit fluoreszierenden Reportern", nl: "Kwantitatieve PCR (qPCR) met fluorescente reporters" },
          { en: "Standard gel electrophoresis", es: "Electroforesis en gel estándar", de: "Standard-Gel-Elektrophorese", nl: "Standaard gel elektroforese" },
          { en: "Southern blotting", es: "Southern blot", de: "Southern-Blot", nl: "Southern blotting" },
          { en: "Northern blotting", es: "Northern blot", de: "Northern-Blot", nl: "Northern blotting" }
        ],
        correct: 0,
        explanation: {
          en: "qPCR uses fluorescent dyes or probes (like SYBR Green or TaqMan probes) to monitor DNA amplification in real-time. The fluorescence intensity correlates with the amount of PCR product, enabling quantification of initial template amounts.",
          es: "qPCR utiliza colorantes fluorescentes o sondas (como SYBR Green o sondas TaqMan) para monitorear amplificación de ADN en tiempo real. La intensidad de fluorescencia se correlaciona con la cantidad de producto PCR, permitiendo cuantificación de cantidades de plantilla inicial.",
          de: "qPCR verwendet fluoreszierende Farbstoffe oder Sonden (wie SYBR Green oder TaqMan-Sonden) um DNA-Amplifikation in Echtzeit zu überwachen. Die Fluoreszenzintensität korreliert mit der Menge an PCR-Produkt und ermöglicht Quantifizierung der anfänglichen Template-Mengen.",
          nl: "qPCR gebruikt fluorescente kleurstoffen of probes (zoals SYBR Green of TaqMan probes) om DNA-amplificatie in real-time te monitoren. De fluorescentie-intensiteit correleert met de hoeveelheid PCR-product, wat kwantificering van initiële sjabloonhoeveelheden mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the primary advantage of using adeno-associated virus (AAV) vectors in gene therapy?",
          es: "¿Cuál es la ventaja principal de usar vectores de virus adeno-asociado (AAV) en terapia génica?",
          de: "Was ist der Hauptvorteil der Verwendung von Adeno-assoziierten Virus (AAV) Vektoren in der Gentherapie?",
          nl: "Wat is het primaire voordeel van het gebruik van adeno-geassocieerde virus (AAV) vectoren in gentherapie?"
        },
        options: [
          { en: "Low immunogenicity and broad tissue tropism", es: "Baja inmunogenicidad y tropismo tisular amplio", de: "Geringe Immunogenität und breiter Gewebe-Tropismus", nl: "Lage immunogeniciteit en brede weefsel-tropisme" },
          { en: "High integration efficiency", es: "Alta eficiencia de integración", de: "Hohe Integrationseffizienz", nl: "Hoge integratie-efficiëntie" },
          { en: "Large packaging capacity", es: "Gran capacidad de empaquetamiento", de: "Große Verpackungskapazität", nl: "Grote verpakkingscapaciteit" },
          { en: "Rapid replication", es: "Replicación rápida", de: "Schnelle Replikation", nl: "Snelle replicatie" }
        ],
        correct: 0,
        explanation: {
          en: "AAV vectors are considered safer for gene therapy because they have low immunogenicity, don't integrate into the host genome (reducing insertional mutagenesis risk), and different serotypes show tissue-specific tropism, allowing targeted delivery.",
          es: "Los vectores AAV se consideran más seguros para terapia génica porque tienen baja inmunogenicidad, no se integran en el genoma hospedador (reduciendo riesgo de mutagénesis insercional), y diferentes serotipos muestran tropismo específico de tejido, permitiendo entrega dirigida.",
          de: "AAV-Vektoren gelten als sicherer für Gentherapie, weil sie geringe Immunogenität haben, nicht in das Wirtsgenom integrieren (wodurch das Risiko insertionaler Mutagenese reduziert wird), und verschiedene Serotypen gewebespezifischen Tropismus zeigen, wodurch gezielter Gentransfer ermöglicht wird.",
          nl: "AAV-vectoren worden als veiliger beschouwd voor gentherapie omdat ze lage immunogeniciteit hebben, niet integreren in het gastheer-genoom (wat het risico op insertionele mutagenese vermindert), en verschillende serotypen weefsel-specifiek tropisme tonen, wat gerichte afgifte mogelijk maakt."
        }
      },
      {
        question: {
          en: "Which method allows for the study of chromatin accessibility genome-wide?",
          es: "¿Qué método permite el estudio de accesibilidad de cromatina a nivel del genoma completo?",
          de: "Welche Methode ermöglicht die Untersuchung der Chromatin-Zugänglichkeit genomweit?",
          nl: "Welke methode maakt bestudering van chromatine toegankelijkheid genoomwijd mogelijk?"
        },
        options: [
          { en: "ATAC-seq (Assay for Transposase-Accessible Chromatin)", es: "ATAC-seq (Ensayo para Cromatina Accesible a Transposasa)", de: "ATAC-seq (Assay for Transposase-Accessible Chromatin)", nl: "ATAC-seq (Assay for Transposase-Accessible Chromatin)" },
          { en: "Western blotting", es: "Western blot", de: "Western-Blot", nl: "Western blotting" },
          { en: "Flow cytometry", es: "Citometría de flujo", de: "Durchflusszytometrie", nl: "Flow cytometrie" },
          { en: "Electron microscopy", es: "Microscopía electrónica", de: "Elektronenmikroskopie", nl: "Elektronenmicroscopie" }
        ],
        correct: 0,
        explanation: {
          en: "ATAC-seq uses hyperactive Tn5 transposase to insert sequencing adapters into accessible chromatin regions. Open, transcriptionally active regions are preferentially tagged, allowing genome-wide mapping of regulatory elements and chromatin structure.",
          es: "ATAC-seq utiliza transposasa Tn5 hiperactiva para insertar adaptadores de secuenciación en regiones de cromatina accesible. Regiones abiertas y transcripcionalmente activas son preferencialmente marcadas, permitiendo mapeo a nivel del genoma de elementos regulatorios y estructura de cromatina.",
          de: "ATAC-seq verwendet hyperaktive Tn5-Transposase um Sequenzieradapter in zugängliche Chromatinregionen zu inserieren. Offene, transkriptional aktive Regionen werden bevorzugt markiert, wodurch genomweite Kartierung regulatorischer Elemente und Chromatinstruktur ermöglicht wird.",
          nl: "ATAC-seq gebruikt hyperactieve Tn5-transposase om sequencing-adapters in te voegen in toegankelijke chromatinegebieden. Open, transcriptioneel actieve gebieden worden bij voorkeur getagd, wat genoomwijde kartering van regulatoire elementen en chromatinestructuur mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the molecular basis of fluorescence recovery after photobleaching (FRAP)?",
          es: "¿Cuál es la base molecular de la recuperación de fluorescencia después del fotoblanqueamiento (FRAP)?",
          de: "Was ist die molekulare Grundlage der Fluoreszenzwiederherstellung nach Photobleaching (FRAP)?",
          nl: "Wat is de moleculaire basis van fluorescentie herstel na photobleaching (FRAP)?"
        },
        options: [
          { en: "Molecular mobility and diffusion of fluorescent proteins", es: "Movilidad molecular y difusión de proteínas fluorescentes", de: "Molekulare Mobilität und Diffusion fluoreszierender Proteine", nl: "Moleculaire mobiliteit en diffusie van fluorescente eiwitten" },
          { en: "Chemical regeneration of fluorophores", es: "Regeneración química de fluoróforos", de: "Chemische Regeneration von Fluorophoren", nl: "Chemische regeneratie van fluoroforen" },
          { en: "New protein synthesis", es: "Síntesis de nuevas proteínas", de: "Neue Proteinsynthese", nl: "Nieuwe eiwitsynthese" },
          { en: "Photoactivation of dormant fluorophores", es: "Fotoactivación de fluoróforos dormantes", de: "Photoaktivierung ruhender Fluorophore", nl: "Fotoactivatie van slapende fluoroforen" }
        ],
        correct: 0,
        explanation: {
          en: "FRAP measures the recovery of fluorescence in a photobleached region due to the diffusion and exchange of unbleached fluorescent molecules from surrounding areas. The recovery rate indicates molecular mobility and binding dynamics.",
          es: "FRAP mide la recuperación de fluorescencia en una región fotoblanqueada debido a difusión e intercambio de moléculas fluorescentes no blanqueadas de áreas circundantes. La tasa de recuperación indica movilidad molecular y dinámicas de unión.",
          de: "FRAP misst die Wiederherstellung der Fluoreszenz in einer photogebleichten Region aufgrund der Diffusion und des Austauschs ungebleichter fluoreszierender Moleküle aus umgebenden Bereichen. Die Wiederherstellungsrate zeigt molekulare Mobilität und Bindungsdynamik an.",
          nl: "FRAP meet het herstel van fluorescentie in een photogebleachte regio door diffusie en uitwisseling van ongebleachte fluorescente moleculen uit omringende gebieden. De herstelsnelheid duidt op moleculaire mobiliteit en bindingsdynamiek."
        }
      },
      {
        question: {
          en: "Which technique enables the systematic knockdown of gene expression in C. elegans?",
          es: "¿Qué técnica permite la reducción sistemática de expresión génica en C. elegans?",
          de: "Welche Technik ermöglicht den systematischen Knockdown der Genexpression in C. elegans?",
          nl: "Welke techniek maakt systematische knockdown van genexpressie in C. elegans mogelijk?"
        },
        options: [
          { en: "RNAi feeding with bacteria expressing dsRNA", es: "Alimentación con RNAi usando bacterias que expresan dsRNA", de: "RNAi-Fütterung mit Bakterien, die dsRNA exprimieren", nl: "RNAi voeding met bacteriën die dsRNA tot expressie brengen" },
          { en: "Chemical mutagenesis", es: "Mutagénesis química", de: "Chemische Mutagenese", nl: "Chemische mutagenese" },
          { en: "Radiation treatment", es: "Tratamiento con radiación", de: "Strahlenbehandlung", nl: "Bestraling behandeling" },
          { en: "Heat shock proteins", es: "Proteínas de choque térmico", de: "Hitzeschockproteine", nl: "Hitte shock eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "C. elegans can be fed E. coli bacteria expressing double-stranded RNA (dsRNA) corresponding to target genes. The dsRNA triggers RNAi, leading to sequence-specific gene knockdown. This method allows systematic, high-throughput functional genomics studies.",
          es: "C. elegans puede ser alimentado con bacterias E. coli que expresan ARN de doble cadena (dsRNA) correspondiente a genes objetivo. El dsRNA desencadena RNAi, llevando a reducción génica específica de secuencia. Este método permite estudios de genómica funcional sistemáticos y de alto rendimiento.",
          de: "C. elegans kann mit E. coli-Bakterien gefüttert werden, die doppelsträngige RNA (dsRNA) entsprechend Zielgenen exprimieren. Die dsRNA löst RNAi aus und führt zu sequenzspezifischem Gen-Knockdown. Diese Methode ermöglicht systematische, hochdurchsatz-funktionale Genomikstudien.",
          nl: "C. elegans kan gevoed worden met E. coli bacteriën die dubbelstrengs RNA (dsRNA) tot expressie brengen die overeenkomen met doelgenen. De dsRNA triggert RNAi, wat leidt tot sequentie-specifieke gen-knockdown. Deze methode maakt systematische, high-throughput functionele genomiek studies mogelijk."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of base excision repair (BER) in DNA damage response?",
          es: "¿Cuál es el mecanismo principal de reparación por escisión de bases (BER) en respuesta al daño del ADN?",
          de: "Was ist der primäre Mechanismus der Basenexzisionsreparatur (BER) in der DNA-Schadenresponse?",
          nl: "Wat is het primaire mechanisme van base excisie reparatie (BER) in DNA-schade respons?"
        },
        options: [
          { en: "Removal of damaged bases by DNA glycosylases followed by repair synthesis", es: "Remoción de bases dañadas por glicosilasas de ADN seguida de síntesis de reparación", de: "Entfernung beschädigter Basen durch DNA-Glykosilasen gefolgt von Reparatursynthese", nl: "Verwijdering van beschadigde basen door DNA-glycosylasen gevolgd door reparatie-synthese" },
          { en: "Double-strand break formation", es: "Formación de roturas de doble cadena", de: "Doppelstrangbruch-Bildung", nl: "Dubbelstreng breuk vorming" },
          { en: "DNA methylation changes", es: "Cambios en metilación del ADN", de: "DNA-Methylierungsänderungen", nl: "DNA-methylering veranderingen" },
          { en: "Chromatin remodeling", es: "Remodelación de cromatina", de: "Chromatin-Remodeling", nl: "Chromatine hermodellering" }
        ],
        correct: 0,
        explanation: {
          en: "BER repairs small base lesions like oxidative damage. DNA glycosylases recognize and remove damaged bases, creating abasic sites. AP endonuclease cleaves the DNA backbone, followed by DNA polymerase filling the gap and DNA ligase sealing the nick.",
          es: "BER repara pequeñas lesiones de bases como daño oxidativo. Las glicosilasas de ADN reconocen y remueven bases dañadas, creando sitios abásicos. La endonucleasa AP escinde el esqueleto del ADN, seguida por ADN polimerasa llenando el hueco y ADN ligasa sellando el corte.",
          de: "BER repariert kleine Basenläsionen wie oxidative Schäden. DNA-Glykosilasen erkennen und entfernen beschädigte Basen und schaffen abasische Stellen. AP-Endonuklease spaltet das DNA-Rückgrat, gefolgt von DNA-Polymerase, die die Lücke füllt, und DNA-Ligase, die den Nick versiegelt.",
          nl: "BER repareert kleine base-lesies zoals oxidatieve schade. DNA-glycosylasen herkennen en verwijderen beschadigde basen, waardoor abasische plaatsen ontstaan. AP-endonuclease klieft het DNA-raamwerk, gevolgd door DNA-polymerase die de opening vult en DNA-ligase die de nick dicht."
        }
      },
      {
        question: {
          en: "Which molecular technique is used to study epigenome-wide DNA methylation patterns?",
          es: "¿Qué técnica molecular se usa para estudiar patrones de metilación del ADN a nivel del epigenoma completo?",
          de: "Welche molekulare Technik wird verwendet, um epigenomweite DNA-Methylierungsmuster zu untersuchen?",
          nl: "Welke moleculaire techniek wordt gebruikt om epigenoomwijde DNA-methyleringspatronen te bestuderen?"
        },
        options: [
          { en: "Whole genome bisulfite sequencing (WGBS)", es: "Secuenciación de bisulfito de genoma completo (WGBS)", de: "Ganzgenom-Bisulfit-Sequenzierung (WGBS)", nl: "Volledige genoom bisulfiet sequencing (WGBS)" },
          { en: "ChIP-seq", es: "ChIP-seq", de: "ChIP-seq", nl: "ChIP-seq" },
          { en: "RNA-seq", es: "RNA-seq", de: "RNA-seq", nl: "RNA-seq" },
          { en: "ATAC-seq", es: "ATAC-seq", de: "ATAC-seq", nl: "ATAC-seq" }
        ],
        correct: 0,
        explanation: {
          en: "WGBS uses sodium bisulfite treatment to convert unmethylated cytosines to uracil while leaving 5-methylcytosines unchanged. After PCR and sequencing, this allows genome-wide, single-base resolution mapping of DNA methylation patterns.",
          es: "WGBS utiliza tratamiento con bisulfito de sodio para convertir citosinas no metiladas a uracilo mientras deja 5-metilcitosinas sin cambio. Después de PCR y secuenciación, esto permite mapeo a nivel del genoma completo con resolución de base única de patrones de metilación del ADN.",
          de: "WGBS verwendet Natriumbisulfit-Behandlung um unmethylierte Cytosine zu Uracil zu konvertieren, während 5-Methylcytosine unverändert bleiben. Nach PCR und Sequenzierung ermöglicht dies genomweite, einzelbasen-auflösende Kartierung von DNA-Methylierungsmustern.",
          nl: "WGBS gebruikt natriumbisufliet-behandeling om ongemethyleerde cytosines om te zetten naar uracil terwijl 5-methylcytosines onveranderd blijven. Na PCR en sequencing maakt dit genoomwijde, enkele-base resolutie kartering van DNA-methyleringspatronen mogelijk."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind protein mass spectrometry identification?",
          es: "¿Cuál es el principio fundamental detrás de la identificación por espectrometría de masas de proteínas?",
          de: "Was ist das Grundprinzip hinter der Protein-Massenspektrometrie-Identifikation?",
          nl: "Wat is het fundamentele principe achter eiwit massaspectrometrie identificatie?"
        },
        options: [
          { en: "Peptide fragmentation patterns and mass-to-charge ratios", es: "Patrones de fragmentación de péptidos y relaciones masa-carga", de: "Peptidfragmentierungsmuster und Masse-zu-Ladung-Verhältnisse", nl: "Peptide fragmentatiepatronen en massa-lading verhoudingen" },
          { en: "Protein size determination", es: "Determinación del tamaño de proteínas", de: "Proteingrößenbestimmung", nl: "Eiwit grootte bepaling" },
          { en: "Enzymatic activity measurement", es: "Medición de actividad enzimática", de: "Enzymaktivitätsmessung", nl: "Enzymatische activiteit meting" },
          { en: "Protein folding analysis", es: "Análisis de plegamiento proteico", de: "Proteinfaltungsanalyse", nl: "Eiwit vouwing analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Protein mass spectrometry identifies proteins by analyzing peptide fragments generated by proteolytic digestion. The mass-to-charge ratios and fragmentation patterns of these peptides are matched against databases to determine protein identity and modifications.",
          es: "La espectrometría de masas de proteínas identifica proteínas analizando fragmentos de péptidos generados por digestión proteolítica. Las relaciones masa-carga y patrones de fragmentación de estos péptidos se comparan con bases de datos para determinar identidad proteica y modificaciones.",
          de: "Protein-Massenspektrometrie identifiziert Proteine durch Analyse von Peptidfragmenten, die durch proteolytische Verdauung erzeugt werden. Die Masse-zu-Ladung-Verhältnisse und Fragmentierungsmuster dieser Peptide werden mit Datenbanken abgeglichen, um Proteinidentität und Modifikationen zu bestimmen.",
          nl: "Eiwit massaspectrometrie identificeert eiwitten door analyse van peptide fragmenten gegenereerd door proteolytische vertering. De massa-lading verhoudingen en fragmentatiepatronen van deze peptiden worden vergeleken met databases om eiwit-identiteit en modificaties te bepalen."
        }
      },
      {
        question: {
          en: "Which cellular process is primarily studied using fluorescence lifetime imaging microscopy (FLIM)?",
          es: "¿Qué proceso celular se estudia principalmente usando microscopía de imágenes de tiempo de vida de fluorescencia (FLIM)?",
          de: "Welcher Zellprozess wird hauptsächlich mit Fluoreszenz-Lebensdauer-Imaging-Mikroskopie (FLIM) untersucht?",
          nl: "Welk cellulair proces wordt hoofdzakelijk bestudeerd met fluorescentie levensduur beeldvorming microscopie (FLIM)?"
        },
        options: [
          { en: "Protein-protein interactions and local environment changes", es: "Interacciones proteína-proteína y cambios del entorno local", de: "Protein-Protein-Wechselwirkungen und lokale Umgebungsveränderungen", nl: "Eiwit-eiwit interacties en lokale omgevingsveranderingen" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
          { en: "Cell division", es: "División celular", de: "Zellteilung", nl: "Celdeling" },
          { en: "Membrane transport", es: "Transporte de membrana", de: "Membrantransport", nl: "Membraantransport" }
        ],
        correct: 0,
        explanation: {
          en: "FLIM measures the time a fluorophore remains in the excited state before emitting a photon. Changes in fluorescence lifetime can indicate protein-protein interactions (FRET), changes in local pH, ion concentrations, or molecular environment without being affected by fluorophore concentration.",
          es: "FLIM mide el tiempo que un fluoróforo permanece en estado excitado antes de emitir un fotón. Cambios en tiempo de vida de fluorescencia pueden indicar interacciones proteína-proteína (FRET), cambios en pH local, concentraciones de iones, o entorno molecular sin ser afectado por concentración de fluoróforo.",
          de: "FLIM misst die Zeit, die ein Fluorophor im angeregten Zustand verbleibt, bevor er ein Photon emittiert. Änderungen in der Fluoreszenz-Lebensdauer können Protein-Protein-Wechselwirkungen (FRET), Änderungen im lokalen pH, Ionenkonzentrationen oder molekularer Umgebung anzeigen, ohne von der Fluorophor-Konzentration beeinflusst zu werden.",
          nl: "FLIM meet de tijd dat een fluorofoor in de geëxciteerde toestand blijft voordat het een foton uitzendt. Veranderingen in fluorescentie levensduur kunnen eiwit-eiwit interacties (FRET), veranderingen in lokale pH, ionconcentraties, of moleculaire omgeving aangeven zonder beïnvloed te worden door fluorofoor concentratie."
        }
      },
      {
        question: {
          en: "What is the primary application of proximity ligation assay (PLA) in molecular biology?",
          es: "¿Cuál es la aplicación principal del ensayo de ligación por proximidad (PLA) en biología molecular?",
          de: "Was ist die Hauptanwendung des Proximity Ligation Assays (PLA) in der Molekularbiologie?",
          nl: "Wat is de primaire toepassing van proximity ligation assay (PLA) in moleculaire biologie?"
        },
        options: [
          { en: "Detecting protein-protein interactions with high specificity in situ", es: "Detectar interacciones proteína-proteína con alta especificidad in situ", de: "Nachweis von Protein-Protein-Wechselwirkungen mit hoher Spezifität in situ", nl: "Detectie van eiwit-eiwit interacties met hoge specificiteit in situ" },
          { en: "DNA amplification", es: "Amplificación de ADN", de: "DNA-Amplifikation", nl: "DNA-amplificatie" },
          { en: "RNA sequencing", es: "Secuenciación de ARN", de: "RNA-Sequenzierung", nl: "RNA-sequencing" },
          { en: "Protein purification", es: "Purificación de proteínas", de: "Proteinreinigung", nl: "Eiwitruivering" }
        ],
        correct: 0,
        explanation: {
          en: "PLA uses proximity-dependent DNA ligation to detect protein-protein interactions. When target proteins are close (<40 nm), DNA oligonucleotes attached to secondary antibodies can ligate, creating templates for rolling circle amplification and fluorescent detection.",
          es: "PLA utiliza ligación de ADN dependiente de proximidad para detectar interacciones proteína-proteína. Cuando las proteínas objetivo están cerca (<40 nm), oligonucleótidos de ADN unidos a anticuerpos secundarios pueden ligarse, creando plantillas para amplificación de círculo rodante y detección fluorescente.",
          de: "PLA verwendet proximität-abhängige DNA-Ligation um Protein-Protein-Wechselwirkungen nachzuweisen. Wenn Zielproteine nah sind (<40 nm), können DNA-Oligonukleotide, die an sekundäre Antikörper gebunden sind, ligieren und Templates für Rolling-Circle-Amplifikation und fluoreszierende Detektion schaffen.",
          nl: "PLA gebruikt nabijheid-afhankelijke DNA-ligatie om eiwit-eiwit interacties te detecteren. Wanneer doeleiwitten dichtbij zijn (<40 nm), kunnen DNA-oligonucleotiden gekoppeld aan secundaire antilichamen ligeren, wat templates creëert voor rolling circle amplificatie en fluorescente detectie."
        }
      },
      {
        question: {
          en: "Which advanced imaging technique allows for super-resolution microscopy beyond the diffraction limit?",
          es: "¿Qué técnica de imágenes avanzada permite microscopía de súper-resolución más allá del límite de difracción?",
          de: "Welche fortgeschrittene Imaging-Technik ermöglicht Super-Resolution-Mikroskopie jenseits des Beugungslimits?",
          nl: "Welke geavanceerde beeldvormingstechniek maakt super-resolutie microscopie mogelijk voorbij de diffractielimiet?"
        },
        options: [
          { en: "STORM, PALM, and SIM (structured illumination)", es: "STORM, PALM y SIM (iluminación estructurada)", de: "STORM, PALM und SIM (strukturierte Beleuchtung)", nl: "STORM, PALM en SIM (gestructureerde belichting)" },
          { en: "Standard confocal microscopy", es: "Microscopía confocal estándar", de: "Standard-Konfokalmikroskopie", nl: "Standaard confocale microscopie" },
          { en: "Brightfield microscopy", es: "Microscopía de campo claro", de: "Hellfeldmikroskopie", nl: "Helderveld microscopie" },
          { en: "Phase contrast microscopy", es: "Microscopía de contraste de fase", de: "Phasenkontrastmikroskopie", nl: "Fasecontrast microscopie" }
        ],
        correct: 0,
        explanation: {
          en: "Super-resolution techniques like STORM (Stochastic Optical Reconstruction Microscopy), PALM (Photo-Activated Localization Microscopy), and SIM overcome the ~200 nm diffraction limit, achieving resolutions of 10-50 nm to visualize subcellular structures in unprecedented detail.",
          es: "Técnicas de súper-resolución como STORM (Microscopía de Reconstrucción Óptica Estocástica), PALM (Microscopía de Localización Foto-Activada), y SIM superan el límite de difracción de ~200 nm, logrando resoluciones de 10-50 nm para visualizar estructuras subcelulares con detalle sin precedentes.",
          de: "Super-Resolution-Techniken wie STORM (Stochastic Optical Reconstruction Microscopy), PALM (Photo-Activated Localization Microscopy) und SIM überwinden das ~200 nm Beugungslimit und erreichen Auflösungen von 10-50 nm, um subzelluläre Strukturen in beispielloser Detailgenauigkeit zu visualisieren.",
          nl: "Super-resolutie technieken zoals STORM (Stochastische Optische Reconstructie Microscopie), PALM (Foto-Geactiveerde Lokalisatie Microscopie), en SIM overwinnen de ~200 nm diffractielimiet, waarbij resoluties van 10-50 nm worden bereikt om subcellulaire structuren met ongekend detail te visualiseren."
        }
      },
      {
        question: {
          en: "What is the primary mechanism underlying optogenetics in neurobiology?",
          es: "¿Cuál es el mecanismo principal subyacente a la optogenética en neurobiología?",
          de: "Was ist der Hauptmechanismus der Optogenetik in der Neurobiologie?",
          nl: "Wat is het primaire mechanisme dat ten grondslag ligt aan optogenetica in neurobiologie?"
        },
        options: [
          { en: "Light-activated ion channels controlling neuronal activity", es: "Canales iónicos activados por luz controlando actividad neuronal", de: "Lichtaktivierte Ionenkanäle zur Kontrolle neuronaler Aktivität", nl: "Licht-geactiveerde ionkanalen die neuronale activiteit controleren" },
          { en: "Chemical neurotransmitter release", es: "Liberación química de neurotransmisores", de: "Chemische Neurotransmitter-Freisetzung", nl: "Chemische neurotransmitter vrijgave" },
          { en: "Electrical stimulation of brain tissue", es: "Estimulación eléctrica del tejido cerebral", de: "Elektrische Stimulation von Hirngewebe", nl: "Elektrische stimulatie van hersenweefsel" },
          { en: "Magnetic field manipulation", es: "Manipulación del campo magnético", de: "Magnetfeldmanipulation", nl: "Magnetische veld manipulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Optogenetics uses genetically encoded light-sensitive proteins (like channelrhodopsin and halorhodopsin) to control specific neuronal populations with millisecond precision. Blue light activates channelrhodopsin to depolarize neurons, while yellow light activates halorhodopsin to hyperpolarize them.",
          es: "La optogenética utiliza proteínas fotosensibles codificadas genéticamente (como canalrodopsina y halorrodopsina) para controlar poblaciones neuronales específicas con precisión de milisegundos. La luz azul activa canalrodopsina para despolarizar neuronas, mientras que la luz amarilla activa halorrodopsina para hiperpolarizarlas.",
          de: "Optogenetik verwendet genetisch kodierte lichtempfindliche Proteine (wie Channelrhodopsin und Halorhodopsin) zur Kontrolle spezifischer Neuronenpopulationen mit Millisekunden-Präzision. Blaues Licht aktiviert Channelrhodopsin zur Depolarisation von Neuronen, während gelbes Licht Halorhodopsin zur Hyperpolarisation aktiviert.",
          nl: "Optogenetica gebruikt genetisch gecodeerde lichtgevoelige eiwitten (zoals channelrhodopsin en halorhodopsin) om specifieke neuronale populaties te controleren met milliseconde precisie. Blauw licht activeert channelrhodopsin om neuronen te depolariseren, terwijl geel licht halorhodopsin activeert om ze te hyperpolariseren."
        }
      },
      {
        question: {
          en: "Which advanced technique is used for analyzing single-cell gene expression profiles?",
          es: "¿Qué técnica avanzada se utiliza para analizar perfiles de expresión génica de células individuales?",
          de: "Welche fortgeschrittene Technik wird zur Analyse von Einzelzell-Genexpressionsprofilen verwendet?",
          nl: "Welke geavanceerde techniek wordt gebruikt voor het analyseren van genexpressieprofielen van individuele cellen?"
        },
        options: [
          { en: "Single-cell RNA sequencing (scRNA-seq)", es: "Secuenciación de ARN de célula única (scRNA-seq)", de: "Einzelzell-RNA-Sequenzierung (scRNA-seq)", nl: "Enkel-cel RNA sequencing (scRNA-seq)" },
          { en: "Bulk RNA sequencing", es: "Secuenciación masiva de ARN", de: "Bulk-RNA-Sequenzierung", nl: "Bulk RNA sequencing" },
          { en: "Northern blotting", es: "Northern blot", de: "Northern-Blot", nl: "Northern blotting" },
          { en: "RT-PCR analysis", es: "Análisis RT-PCR", de: "RT-PCR-Analyse", nl: "RT-PCR analyse" }
        ],
        correct: 0,
        explanation: {
          en: "scRNA-seq allows analysis of gene expression in individual cells, revealing cellular heterogeneity, identifying rare cell types, and tracking developmental trajectories. This technique has revolutionized understanding of tissue composition and cellular states.",
          es: "scRNA-seq permite análisis de expresión génica en células individuales, revelando heterogeneidad celular, identificando tipos celulares raros, y rastreando trayectorias de desarrollo. Esta técnica ha revolucionado la comprensión de composición tisular y estados celulares.",
          de: "scRNA-seq ermöglicht die Analyse der Genexpression in einzelnen Zellen, enthüllt zelluläre Heterogenität, identifiziert seltene Zelltypen und verfolgt Entwicklungsverläufe. Diese Technik hat das Verständnis von Gewebezusammensetzung und Zellzuständen revolutioniert.",
          nl: "scRNA-seq maakt analyse van genexpressie in individuele cellen mogelijk, onthult cellulaire heterogeniteit, identificeert zeldzame celtypen, en volgt ontwikkelingstrajecten. Deze techniek heeft het begrip van weefselsamenstelling en cellulaire toestanden gerevolutioneerd."
        }
      },
      {
        question: {
          en: "What is the principle behind CRISPR base editing technology?",
          es: "¿Cuál es el principio detrás de la tecnología de edición de bases CRISPR?",
          de: "Was ist das Prinzip hinter der CRISPR-Basen-Editierungs-Technologie?",
          nl: "Wat is het principe achter CRISPR base editing technologie?"
        },
        options: [
          { en: "Nucleotide conversion without double-strand breaks", es: "Conversión de nucleótidos sin roturas de doble cadena", de: "Nukleotid-Umwandlung ohne Doppelstrangbrüche", nl: "Nucleotide conversie zonder dubbelstrengige breuken" },
          { en: "Complete gene replacement", es: "Reemplazo completo de genes", de: "Kompletter Genersatz", nl: "Complete genvervanging" },
          { en: "Chromosomal rearrangement", es: "Reordenamiento cromosómico", de: "Chromosomale Umordnung", nl: "Chromosomale herschikking" },
          { en: "Large insertion mutagenesis", es: "Mutagénesis por inserción grande", de: "Große Insertionsmutagenese", nl: "Grote insertie mutagenese" }
        ],
        correct: 0,
        explanation: {
          en: "Base editors use catalytically impaired Cas proteins fused to cytidine or adenine deaminases to convert C→T or A→G without creating double-strand breaks. This allows precise point mutations for correcting pathogenic variants or creating specific modifications.",
          es: "Los editores de bases usan proteínas Cas catalíticamente comprometidas fusionadas a deaminasas de citidina o adenina para convertir C→T o A→G sin crear roturas de doble cadena. Esto permite mutaciones puntuales precisas para corregir variantes patogénicas o crear modificaciones específicas.",
          de: "Basen-Editoren verwenden katalytisch beeinträchtigte Cas-Proteine, die mit Cytidin- oder Adenin-Deaminasen fusioniert sind, um C→T oder A→G umzuwandeln, ohne Doppelstrangbrüche zu erzeugen. Dies ermöglicht präzise Punktmutationen zur Korrektur pathogener Varianten oder Erstellung spezifischer Modifikationen.",
          nl: "Base editors gebruiken katalytisch verminderde Cas-eiwitten gefuseerd met cytidine of adenine deaminasen om C→T of A→G conversies uit te voeren zonder dubbelstrengige breuken te creëren. Dit maakt precieze puntmutaties mogelijk voor het corrigeren van pathogene varianten of het creëren van specifieke modificaties."
        }
      },
      {
        question: {
          en: "Which technique allows for real-time monitoring of protein folding dynamics?",
          es: "¿Qué técnica permite el monitoreo en tiempo real de la dinámica del plegamiento de proteínas?",
          de: "Welche Technik ermöglicht die Echtzeitüberwachung der Proteinfaltungsdynamik?",
          nl: "Welke techniek maakt real-time monitoring van eiwit vouwing dynamica mogelijk?"
        },
        options: [
          { en: "Single-molecule fluorescence spectroscopy", es: "Espectroscopía de fluorescencia de molécula única", de: "Einzelmolekül-Fluoreszenzspektroskopie", nl: "Enkel-molecuul fluorescentie spectroscopie" },
          { en: "X-ray crystallography", es: "Cristalografía de rayos X", de: "Röntgenkristallographie", nl: "Röntgenkristallografie" },
          { en: "Electron microscopy", es: "Microscopía electrónica", de: "Elektronenmikroskopie", nl: "Elektronenmicroscopie" },
          { en: "Mass spectrometry", es: "Espectrometría de masas", de: "Massenspektrometrie", nl: "Massaspectrometrie" }
        ],
        correct: 0,
        explanation: {
          en: "Single-molecule fluorescence techniques like FRET can monitor protein folding in real-time by tracking distance changes between fluorescent labels as proteins transition between folded and unfolded states, revealing folding pathways and intermediates.",
          es: "Técnicas de fluorescencia de molécula única como FRET pueden monitorear plegamiento de proteínas en tiempo real rastreando cambios de distancia entre marcadores fluorescentes mientras las proteínas transicionan entre estados plegados y desplegados, revelando vías de plegamiento e intermediarios.",
          de: "Einzelmolekül-Fluoreszenztechniken wie FRET können Proteinfaltung in Echtzeit überwachen, indem sie Distanzänderungen zwischen Fluoreszenzmarkern verfolgen, während Proteine zwischen gefalteten und ungefalteten Zuständen wechseln, und dabei Faltungswege und Zwischenprodukte enthüllen.",
          nl: "Enkel-molecuul fluorescentie technieken zoals FRET kunnen eiwit vouwing in real-time monitoren door afstandsveranderingen tussen fluorescente labels te volgen terwijl eiwitten overgaan tussen gevouwen en ontvouwen toestanden, wat vouwingspaden en intermediairen onthult."
        }
      },
      {
        question: {
          en: "What is the primary advantage of CRISPR prime editing over traditional CRISPR-Cas9?",
          es: "¿Cuál es la ventaja principal de la edición prime CRISPR sobre CRISPR-Cas9 tradicional?",
          de: "Was ist der Hauptvorteil von CRISPR Prime Editing gegenüber traditionellem CRISPR-Cas9?",
          nl: "Wat is het primaire voordeel van CRISPR prime editing ten opzichte van traditionele CRISPR-Cas9?"
        },
        options: [
          { en: "Precise insertions, deletions, and replacements without double-strand breaks", es: "Inserciones, deleciones y reemplazos precisos sin roturas de doble cadena", de: "Präzise Insertionen, Deletionen und Ersetzungen ohne Doppelstrangbrüche", nl: "Precieze inserties, deleties en vervangingen zonder dubbelstrengige breuken" },
          { en: "Faster editing speed", es: "Velocidad de edición más rápida", de: "Schnellere Bearbeitungsgeschwindigkeit", nl: "Snellere bewerkingssnelheid" },
          { en: "Lower cost per edit", es: "Menor costo por edición", de: "Niedrigere Kosten pro Bearbeitung", nl: "Lagere kosten per bewerking" },
          { en: "Higher transformation efficiency", es: "Mayor eficiencia de transformación", de: "Höhere Transformationseffizienz", nl: "Hogere transformatie-efficiëntie" }
        ],
        correct: 0,
        explanation: {
          en: "Prime editing uses a nickase Cas9 fused to reverse transcriptase and a prime editing guide RNA (pegRNA) to make precise insertions, deletions, or replacements up to 300 bp without relying on homologous recombination or creating double-strand breaks.",
          es: "La edición prime utiliza una nickasa Cas9 fusionada con transcriptasa reversa y un ARN guía de edición prime (pegRNA) para hacer inserciones, deleciones o reemplazos precisos hasta 300 pb sin depender de recombinación homóloga o crear roturas de doble cadena.",
          de: "Prime Editing verwendet eine Nickase Cas9, die mit reverser Transkriptase fusioniert ist, und eine Prime-Editing-Leit-RNA (pegRNA), um präzise Insertionen, Deletionen oder Ersetzungen bis zu 300 bp durchzuführen, ohne auf homologe Rekombination angewiesen zu sein oder Doppelstrangbrüche zu erzeugen.",
          nl: "Prime editing gebruikt een nickase Cas9 gefuseerd met reverse transcriptase en een prime editing gids RNA (pegRNA) om precieze inserties, deleties of vervangingen tot 300 bp uit te voeren zonder te vertrouwen op homologe recombinatie of dubbelstrengige breuken te creëren."
        }
      },
      {
        question: {
          en: "Which advanced proteomics technique enables identification of protein-protein interaction networks?",
          es: "¿Qué técnica avanzada de proteómica permite identificar redes de interacción proteína-proteína?",
          de: "Welche fortgeschrittene Proteomik-Technik ermöglicht die Identifikation von Protein-Protein-Interaktionsnetzwerken?",
          nl: "Welke geavanceerde proteomics techniek maakt identificatie van eiwit-eiwit interactienetwerken mogelijk?"
        },
        options: [
          { en: "Affinity purification-mass spectrometry (AP-MS)", es: "Purificación por afinidad-espectrometría de masas (AP-MS)", de: "Affinitätsreinigung-Massenspektrometrie (AP-MS)", nl: "Affiniteit zuivering-massaspectrometrie (AP-MS)" },
          { en: "Standard SDS-PAGE", es: "SDS-PAGE estándar", de: "Standard-SDS-PAGE", nl: "Standaard SDS-PAGE" },
          { en: "Protein crystallization", es: "Cristalización de proteínas", de: "Proteinkristallisation", nl: "Eiwitkristallisatie" },
          { en: "Western blotting", es: "Western blot", de: "Western-Blot", nl: "Western blotting" }
        ],
        correct: 0,
        explanation: {
          en: "AP-MS combines immunoprecipitation or affinity purification of protein complexes with mass spectrometric identification of co-purifying proteins. This approach systematically maps protein interaction networks and identifies novel binding partners under physiological conditions.",
          es: "AP-MS combina inmunoprecipitación o purificación por afinidad de complejos proteicos con identificación por espectrometría de masas de proteínas co-purificadas. Este enfoque mapea sistemáticamente redes de interacción proteica e identifica nuevos compañeros de unión bajo condiciones fisiológicas.",
          de: "AP-MS kombiniert Immunpräzipitation oder Affinitätsreinigung von Proteinkomplexen mit massenspektrometrischer Identifikation co-gereinigter Proteine. Dieser Ansatz kartiert systematisch Protein-Interaktionsnetzwerke und identifiziert neue Bindungspartner unter physiologischen Bedingungen.",
          nl: "AP-MS combineert immunoprecipitatie of affiniteit zuivering van eiwitcomplexen met massaspectrometrische identificatie van mee-gezuiverde eiwitten. Deze benadering brengt systematisch eiwit-interactienetwerken in kaart en identificeert nieuwe bindingspartners onder fysiologische omstandigheden."
        }
      },
      {
        question: {
          en: "What is the mechanism of action of antisense oligonucleotides (ASOs) in gene therapy?",
          es: "¿Cuál es el mecanismo de acción de oligonucleótidos antisentido (ASOs) en terapia génica?",
          de: "Was ist der Wirkungsmechanismus von Antisense-Oligonukleotiden (ASOs) in der Gentherapie?",
          nl: "Wat is het werkingsmechanisme van antisense oligonucleotiden (ASOs) in gentherapie?"
        },
        options: [
          { en: "Sequence-specific binding to target mRNA for modulation", es: "Unión específica de secuencia al ARNm objetivo para modulación", de: "Sequenz-spezifische Bindung an Ziel-mRNA zur Modulation", nl: "Sequentie-specifieke binding aan doel-mRNA voor modulatie" },
          { en: "Random DNA integration", es: "Integración aleatoria de ADN", de: "Zufällige DNA-Integration", nl: "Willekeurige DNA-integratie" },
          { en: "Protein enzyme activation", es: "Activación de enzimas proteicas", de: "Protein-Enzym-Aktivierung", nl: "Eiwit enzym activatie" },
          { en: "Membrane permeabilization", es: "Permeabilización de membrana", de: "Membranpermeabilisierung", nl: "Membraan permeabilisatie" }
        ],
        correct: 0,
        explanation: {
          en: "ASOs are short DNA sequences designed to bind complementary target mRNAs through Watson-Crick base pairing. They can modulate gene expression by inducing mRNA degradation (via RNase H), blocking translation, or modifying splicing patterns.",
          es: "Los ASOs son secuencias cortas de ADN diseñadas para unirse a ARNms objetivo complementarios a través del apareamiento de bases Watson-Crick. Pueden modular expresión génica induciendo degradación de ARNm (vía RNasa H), bloqueando traducción, o modificando patrones de empalme.",
          de: "ASOs sind kurze DNA-Sequenzen, die entwickelt wurden, um sich an komplementäre Ziel-mRNAs durch Watson-Crick-Basenpaarung zu binden. Sie können Genexpression modulieren, indem sie mRNA-Degradation induzieren (via RNase H), Translation blockieren oder Spleißmuster modifizieren.",
          nl: "ASOs zijn korte DNA-sequenties ontworpen om te binden aan complementaire doel-mRNAs door Watson-Crick basenparing. Ze kunnen genexpressie moduleren door mRNA-afbraak te induceren (via RNase H), translatie te blokkeren, of splicingspatronen te modificeren."
        }
      },
      {
        question: {
          en: "Which cutting-edge technique allows for temporal control of protein function in living cells?",
          es: "¿Qué técnica de vanguardia permite control temporal de función proteica en células vivas?",
          de: "Welche hochmoderne Technik ermöglicht zeitliche Kontrolle der Proteinfunktion in lebenden Zellen?",
          nl: "Welke geavanceerde techniek maakt temporele controle van eiwitfunctie in levende cellen mogelijk?"
        },
        options: [
          { en: "Chemically induced dimerization (CID) and optogenetic systems", es: "Dimerización inducida químicamente (CID) y sistemas optogenéticos", de: "Chemisch induzierte Dimerisierung (CID) und optogenetische Systeme", nl: "Chemisch geïnduceerde dimerisatie (CID) en optogenetische systemen" },
          { en: "Standard genetic knockout", es: "Knockout genético estándar", de: "Standard-genetischer Knockout", nl: "Standaard genetische knockout" },
          { en: "Protein overexpression", es: "Sobreexpresión de proteínas", de: "Protein-Überexpression", nl: "Eiwit overexpressie" },
          { en: "RNA interference only", es: "Solo interferencia por ARN", de: "Nur RNA-Interferenz", nl: "Alleen RNA interferentie" }
        ],
        correct: 0,
        explanation: {
          en: "CID systems use small molecules (like rapamycin) to induce protein dimerization and activate signaling pathways on demand. Optogenetic systems use light-inducible proteins (like CRY2/CIB1) for rapid, reversible control of protein interactions and cellular processes with high temporal precision.",
          es: "Los sistemas CID usan moléculas pequeñas (como rapamicina) para inducir dimerización proteica y activar vías de señalización bajo demanda. Los sistemas optogenéticos usan proteínas inducibles por luz (como CRY2/CIB1) para control rápido y reversible de interacciones proteicas y procesos celulares con alta precisión temporal.",
          de: "CID-Systeme verwenden kleine Moleküle (wie Rapamycin), um Proteindimerisierung zu induzieren und Signalwege auf Abruf zu aktivieren. Optogenetische Systeme verwenden lichtinduzierbare Proteine (wie CRY2/CIB1) für schnelle, reversible Kontrolle von Proteininteraktionen und Zellprozessen mit hoher zeitlicher Präzision.",
          nl: "CID-systemen gebruiken kleine moleculen (zoals rapamycine) om eiwitdimerisatie te induceren en signaalwegen op verzoek te activeren. Optogenetische systemen gebruiken licht-induceerbare eiwitten (zoals CRY2/CIB1) voor snelle, omkeerbare controle van eiwitinteracties en cellulaire processen met hoge temporele precisie."
        }
      },
      {
        question: {
          en: "What is the primary application of spatial transcriptomics in modern biology?",
          es: "¿Cuál es la aplicación principal de la transcriptómica espacial en biología moderna?",
          de: "Was ist die Hauptanwendung der räumlichen Transkriptomik in der modernen Biologie?",
          nl: "Wat is de primaire toepassing van ruimtelijke transcriptomica in moderne biologie?"
        },
        options: [
          { en: "Mapping gene expression patterns within tissue architecture", es: "Mapear patrones de expresión génica dentro de arquitectura tisular", de: "Kartierung von Genexpressionsmustern innerhalb der Gewebearchitektur", nl: "Kaarten van genexpressiepatronen binnen weefselarchitectuur" },
          { en: "Bulk RNA quantification", es: "Cuantificación masiva de ARN", de: "Bulk-RNA-Quantifizierung", nl: "Bulk RNA kwantificatie" },
          { en: "Protein purification", es: "Purificación de proteínas", de: "Proteinreinigung", nl: "Eiwitruivering" },
          { en: "DNA methylation analysis", es: "Análisis de metilación de ADN", de: "DNA-Methylierungsanalyse", nl: "DNA-methylering analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Spatial transcriptomics combines histology with RNA sequencing to map gene expression patterns while preserving tissue architecture. This reveals how cell types are organized in tissues, identifies spatially restricted gene programs, and discovers tissue organization principles.",
          es: "La transcriptómica espacial combina histología con secuenciación de ARN para mapear patrones de expresión génica mientras preserva arquitectura tisular. Esto revela cómo se organizan los tipos celulares en tejidos, identifica programas génicos espacialmente restringidos, y descubre principios de organización tisular.",
          de: "Räumliche Transkriptomik kombiniert Histologie mit RNA-Sequenzierung, um Genexpressionsmuster zu kartieren und dabei die Gewebearchitektur zu bewahren. Dies enthüllt, wie Zelltypen in Geweben organisiert sind, identifiziert räumlich beschränkte Genprogramme und entdeckt Gewebeorganisationsprinzipien.",
          nl: "Ruimtelijke transcriptomica combineert histologie met RNA sequencing om genexpressiepatronen in kaart te brengen terwijl weefselarchitectuur behouden blijft. Dit onthult hoe celtypen georganiseerd zijn in weefsels, identificeert ruimtelijk beperkte genprogramma's, en ontdekt weefselorganisatieprincipes."
        }
      },
      {
        question: {
          en: "Which advanced gene delivery system shows promise for in vivo therapeutic applications?",
          es: "¿Qué sistema avanzado de entrega de genes muestra promesa para aplicaciones terapéuticas in vivo?",
          de: "Welches fortgeschrittene Gen-Delivery-System zeigt Potenzial für therapeutische In-vivo-Anwendungen?",
          nl: "Welk geavanceerd gen-afleveringssysteem toont belofte voor in vivo therapeutische toepassingen?"
        },
        options: [
          { en: "Lipid nanoparticles (LNPs) and adeno-associated virus (AAV)", es: "Nanopartículas lipídicas (LNPs) y virus adeno-asociado (AAV)", de: "Lipid-Nanopartikel (LNPs) und Adeno-assoziierte Viren (AAV)", nl: "Lipide nanodeeltjes (LNPs) en adeno-geassocieerd virus (AAV)" },
          { en: "Electroporation only", es: "Solo electroporación", de: "Nur Elektroporation", nl: "Alleen electroporatie" },
          { en: "Calcium phosphate precipitation", es: "Precipitación con fosfato de calcio", de: "Calciumphosphat-Präzipitation", nl: "Calciumfosfaat precipitatie" },
          { en: "Direct DNA injection", es: "Inyección directa de ADN", de: "Direkte DNA-Injektion", nl: "Directe DNA-injectie" }
        ],
        correct: 0,
        explanation: {
          en: "LNPs effectively deliver mRNA therapeutics (as demonstrated by COVID-19 vaccines) with tissue-specific targeting capabilities. AAV vectors provide long-term gene expression with low immunogenicity and can be engineered for specific tissue tropism, making them ideal for gene therapy applications.",
          es: "Las LNPs entregan efectivamente terapéuticos de ARNm (como demostrado por vacunas COVID-19) con capacidades de direccionamiento específico de tejido. Los vectores AAV proporcionan expresión génica a largo plazo con baja inmunogenicidad y pueden diseñarse para tropismo tisular específico, haciéndolos ideales para aplicaciones de terapia génica.",
          de: "LNPs liefern effektiv mRNA-Therapeutika (wie durch COVID-19-Impfstoffe demonstriert) mit gewebespezifischen Targeting-Fähigkeiten. AAV-Vektoren bieten langfristige Genexpression mit geringer Immunogenität und können für spezifischen Gewebetropismus entwickelt werden, wodurch sie ideal für Gentherapie-Anwendungen sind.",
          nl: "LNPs leveren effectief mRNA-therapeutica af (zoals gedemonstreerd door COVID-19 vaccins) met weefsel-specifieke targeting mogelijkheden. AAV-vectoren bieden langdurige genexpressie met lage immunogeniteit en kunnen ontworpen worden voor specifiek weefsel tropisme, waardoor ze ideaal zijn voor gentherapie toepassingen."
        }
      },
      {
        question: {
          en: "What breakthrough technology enables multiplexed gene editing in a single experiment?",
          es: "¿Qué tecnología innovadora permite edición génica multiplexada en un solo experimento?",
          de: "Welche Durchbruchstechnologie ermöglicht multiplexe Genbearbeitung in einem einzigen Experiment?",
          nl: "Welke baanbrekende technologie maakt gemultiplexte genbewerking in een enkel experiment mogelijk?"
        },
        options: [
          { en: "CRISPR multiplexing with multiple guide RNAs", es: "Multiplexado CRISPR con múltiples ARN guía", de: "CRISPR-Multiplexing mit mehreren Leit-RNAs", nl: "CRISPR multiplexing met meerdere gids RNAs" },
          { en: "Sequential single gene editing", es: "Edición secuencial de genes individuales", de: "Sequenzielle Einzelgen-Bearbeitung", nl: "Sequentiële enkele gen bewerking" },
          { en: "Chemical mutagenesis", es: "Mutagénesis química", de: "Chemische Mutagenese", nl: "Chemische mutagenese" },
          { en: "Traditional homologous recombination", es: "Recombinación homóloga tradicional", de: "Traditionelle homologe Rekombination", nl: "Traditionele homologe recombinatie" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR multiplexing uses multiple guide RNAs targeting different genes simultaneously, enabling complex genetic modifications in a single transfection. This approach accelerates research by allowing combinatorial gene knockouts, multiplex screening, and complex pathway analysis.",
          es: "El multiplexado CRISPR usa múltiples ARN guía dirigidos a diferentes genes simultáneamente, permitiendo modificaciones genéticas complejas en una sola transfección. Este enfoque acelera investigación permitiendo knockouts combinatorios, screening multiplex, y análisis de vías complejas.",
          de: "CRISPR-Multiplexing verwendet mehrere Leit-RNAs, die gleichzeitig verschiedene Gene anvisieren und komplexe genetische Modifikationen in einer einzigen Transfektion ermöglichen. Dieser Ansatz beschleunigt die Forschung durch kombinatorische Gen-Knockouts, Multiplex-Screening und komplexe Pathway-Analyse.",
          nl: "CRISPR multiplexing gebruikt meerdere gids RNAs die gelijktijdig verschillende genen targeten, wat complexe genetische modificaties in een enkele transfectie mogelijk maakt. Deze benadering versnelt onderzoek door combinatorische gen knockouts, multiplex screening, en complexe pathway analyse toe te staan."
        }
      },
      {
        question: {
          en: "What is the mechanism behind CRISPR-Cas13 RNA editing technology?",
          es: "¿Cuál es el mecanismo detrás de la tecnología de edición de ARN CRISPR-Cas13?",
          de: "Was ist der Mechanismus hinter der CRISPR-Cas13 RNA-Editierungs-Technologie?",
          nl: "Wat is het mechanisme achter CRISPR-Cas13 RNA editing technologie?"
        },
        options: [
          { en: "RNA-guided RNA cleavage and knockdown", es: "Escisión y silenciamiento de ARN guiado por ARN", de: "RNA-gesteuerte RNA-Spaltung und Knockdown", nl: "RNA-geleide RNA-klieven en knockdown" },
          { en: "DNA double-strand break formation", es: "Formación de roturas de doble cadena de ADN", de: "DNA-Doppelstrangbruch-Bildung", nl: "DNA dubbelstrengige breuk vorming" },
          { en: "Protein degradation", es: "Degradación de proteínas", de: "Protein-Degradation", nl: "Eiwit afbraak" },
          { en: "Chromatin remodeling", es: "Remodelación de cromatina", de: "Chromatin-Remodeling", nl: "Chromatine hermodellering" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas13 targets RNA rather than DNA, using guide RNAs to direct Cas13 nucleases to cleave specific target RNAs. This enables RNA knockdown, alternative splicing modulation, and RNA base editing without altering the underlying genome.",
          es: "CRISPR-Cas13 se dirige al ARN en lugar del ADN, usando ARN guía para dirigir nucleasas Cas13 a escindir ARN objetivo específicos. Esto permite silenciamiento de ARN, modulación de empalme alternativo, y edición de bases de ARN sin alterar el genoma subyacente.",
          de: "CRISPR-Cas13 zielt auf RNA anstatt DNA ab, verwendet Leit-RNAs, um Cas13-Nukleasen zur Spaltung spezifischer Ziel-RNAs zu leiten. Dies ermöglicht RNA-Knockdown, alternative Spleißmodulation und RNA-Basen-Editierung ohne Veränderung des zugrundeliegenden Genoms.",
          nl: "CRISPR-Cas13 richt zich op RNA in plaats van DNA, gebruikt gids-RNAs om Cas13-nucleasen te leiden naar het klieven van specifieke doel-RNAs. Dit maakt RNA-knockdown, alternatieve splicing modulatie, en RNA-base editing mogelijk zonder het onderliggende genoom te veranderen."
        }
      },
      {
        question: {
          en: "Which advanced imaging technique enables visualization of biomolecular interactions in living cells with nanometer resolution?",
          es: "¿Qué técnica de imagen avanzada permite visualizar interacciones biomoleculares en células vivas con resolución nanométrica?",
          de: "Welche fortgeschrittene Imaging-Technik ermöglicht die Visualisierung biomolekularer Wechselwirkungen in lebenden Zellen mit Nanometer-Auflösung?",
          nl: "Welke geavanceerde beeldvormingstechniek maakt visualisatie van biomoleculaire interacties in levende cellen mogelijk met nanometer resolutie?"
        },
        options: [
          { en: "Super-resolution microscopy (STED, PALM, STORM)", es: "Microscopía de súper-resolución (STED, PALM, STORM)", de: "Super-Resolution-Mikroskopie (STED, PALM, STORM)", nl: "Super-resolutie microscopie (STED, PALM, STORM)" },
          { en: "Standard widefield fluorescence", es: "Fluorescencia de campo amplio estándar", de: "Standard-Weitfeld-Fluoreszenz", nl: "Standaard breedeveld fluorescentie" },
          { en: "Transmitted light microscopy", es: "Microscopía de luz transmitida", de: "Durchlichtmikroskopie", nl: "Doorgelicht licht microscopie" },
          { en: "Darkfield microscopy", es: "Microscopía de campo oscuro", de: "Dunkelfeldmikroskopie", nl: "Donkerveld microscopie" }
        ],
        correct: 0,
        explanation: {
          en: "Super-resolution techniques like STED (Stimulated Emission Depletion), PALM, and STORM overcome the diffraction limit of conventional microscopy, achieving <50 nm resolution to visualize protein complexes, membrane dynamics, and subcellular structures in living cells.",
          es: "Técnicas de súper-resolución como STED (Depleción de Emisión Estimulada), PALM, y STORM superan el límite de difracción de microscopía convencional, logrando resolución <50 nm para visualizar complejos proteicos, dinámicas de membrana, y estructuras subcelulares en células vivas.",
          de: "Super-Resolution-Techniken wie STED (Stimulated Emission Depletion), PALM und STORM überwinden das Beugungslimit konventioneller Mikroskopie und erreichen <50 nm Auflösung zur Visualisierung von Proteinkomplexen, Membrandynamik und subzellulären Strukturen in lebenden Zellen.",
          nl: "Super-resolutie technieken zoals STED (Gestimuleerde Emissie Uitputting), PALM, en STORM overwinnen de diffractielimiet van conventionele microscopie, waarbij <50 nm resolutie wordt bereikt om eiwitcomplexen, membraandynamiek, en subcellulaire structuren in levende cellen te visualiseren."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action for CAR-T cell immunotherapy?",
          es: "¿Cuál es el mecanismo de acción principal para la inmunoterapia con células CAR-T?",
          de: "Was ist der Hauptwirkungsmechanismus der CAR-T-Zell-Immuntherapie?",
          nl: "Wat is het primaire werkingsmechanisme voor CAR-T cel immunotherapie?"
        },
        options: [
          { en: "Engineered T cells with synthetic receptors targeting tumor antigens", es: "Células T modificadas con receptores sintéticos dirigidos a antígenos tumorales", de: "Veränderte T-Zellen mit synthetischen Rezeptoren zur Zielerfassung von Tumorantigenen", nl: "Gemodificeerde T-cellen met synthetische receptoren die tumorantigenen targeten" },
          { en: "Antibody-drug conjugates", es: "Conjugados anticuerpo-fármaco", de: "Antikörper-Wirkstoff-Konjugate", nl: "Antilichaam-geneesmiddel conjugaten" },
          { en: "Checkpoint inhibitor blockade", es: "Bloqueo de inhibidores de punto de control", de: "Checkpoint-Inhibitor-Blockade", nl: "Checkpoint inhibitor blokkade" },
          { en: "Dendritic cell vaccines", es: "Vacunas de células dendríticas", de: "Dendritische Zell-Impfstoffe", nl: "Dendritische cel vaccins" }
        ],
        correct: 0,
        explanation: {
          en: "CAR-T therapy involves genetically modifying patient T cells to express chimeric antigen receptors (CARs) that recognize specific tumor surface antigens. These engineered T cells can then directly target and kill cancer cells expressing those antigens, providing personalized cancer immunotherapy.",
          es: "La terapia CAR-T involucra modificar genéticamente las células T del paciente para expresar receptores de antígeno quimérico (CARs) que reconocen antígenos específicos de superficie tumoral. Estas células T modificadas pueden entonces dirigirse directamente y matar células cancerosas que expresan esos antígenos, proporcionando inmunoterapia personalizada contra el cáncer.",
          de: "CAR-T-Therapie beinhaltet die genetische Modifikation von Patienten-T-Zellen zur Expression chimärer Antigenrezeptoren (CARs), die spezifische Tumoroberflächenantigene erkennen. Diese veränderten T-Zellen können dann direkt Krebszellen anvisieren und abtöten, die diese Antigene exprimieren, und bieten personalisierte Krebs-Immuntherapie.",
          nl: "CAR-T therapie houdt genetische modificatie van patiënt T-cellen in om chimerische antigeenreceptoren (CARs) tot expressie te brengen die specifieke tumor oppervlakte-antigenen herkennen. Deze gemodificeerde T-cellen kunnen vervolgens direct kankercellen targeten en doden die deze antigenen tot expressie brengen, wat gepersonaliseerde kanker immunotherapie biedt."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/biology', level9);
  }
})();
