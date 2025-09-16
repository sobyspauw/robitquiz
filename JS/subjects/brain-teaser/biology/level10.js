// Biology - Level 10: Advanced Molecular Biology and Complex Systems
window.addLevel('brain-teaser/biology', {
  name: { 
    en: 'Advanced Molecular Biology', 
    es: 'Biología Molecular Avanzada', 
    de: 'Fortgeschrittene Molekularbiologie', 
    nl: 'Geavanceerde Moleculaire Biologie' 
  },
  questions: [
    {
      question: {
        en: "Which enzyme is responsible for unwinding the DNA double helix during replication?",
        es: "¿Qué enzima es responsable de desenrollar la doble hélice de ADN durante la replicación?",
        de: "Welches Enzym ist für das Aufwinden der DNA-Doppelhelix während der Replikation verantwortlich?",
        nl: "Welk enzym is verantwoordelijk voor het ontwinden van de DNA-dubbele helix tijdens replicatie?"
      },
      options: [
        { en: "DNA polymerase", es: "ADN polimerasa", de: "DNA-Polymerase", nl: "DNA-polymerase" },
        { en: "Helicase", es: "Helicasa", de: "Helikase", nl: "Helicase" },
        { en: "Ligase", es: "Ligasa", de: "Ligase", nl: "Ligase" },
        { en: "Primase", es: "Primasa", de: "Primase", nl: "Primase" }
      ],
      correct: 1,
      explanation: {
        en: "Helicase is the enzyme that unwinds the DNA double helix by breaking the hydrogen bonds between base pairs, creating the replication fork necessary for DNA synthesis.",
        es: "La helicasa es la enzima que desenrolla la doble hélice de ADN rompiendo los enlaces de hidrógeno entre pares de bases, creando la horquilla de replicación necesaria para la síntesis de ADN.",
        de: "Helikase ist das Enzym, das die DNA-Doppelhelix aufwindet, indem es die Wasserstoffbrücken zwischen Basenpaaren aufbricht und die für die DNA-Synthese notwendige Replikationsgabel schafft.",
        nl: "Helicase is het enzym dat de DNA-dubbele helix ontwindt door waterstofbruggen tussen basenparen te verbreken, waardoor de replicatievork ontstaat die nodig is voor DNA-synthese."
      }
    },
    {
      question: {
        en: "What is the function of the ribosomal P-site during protein synthesis?",
        es: "¿Cuál es la función del sitio P ribosomal durante la síntesis de proteínas?",
        de: "Was ist die Funktion der ribosomalen P-Stelle während der Proteinsynthese?",
        nl: "Wat is de functie van de ribosomale P-site tijdens eiwitsynthese?"
      },
      options: [
        { en: "Holds the growing peptide chain", es: "Sostiene la cadena peptídica en crecimiento", de: "Hält die wachsende Peptidkette", nl: "Houdt de groeiende peptideketen vast" },
        { en: "Binds incoming aminoacyl-tRNA", es: "Une el aminoacil-ARNt entrante", de: "Bindet eingehende Aminoacyl-tRNA", nl: "Bindt inkomende aminoacyl-tRNA" },
        { en: "Releases completed proteins", es: "Libera proteínas completadas", de: "Setzt fertige Proteine frei", nl: "Geeft voltooide eiwitten vrij" },
        { en: "Initiates translation", es: "Inicia la traducción", de: "Initiiert die Translation", nl: "Initieert translatie" }
      ],
      correct: 0,
      explanation: {
        en: "The P-site (peptidyl site) of the ribosome holds the tRNA carrying the growing peptide chain. The peptide bond forms between the amino acid in the P-site and the new amino acid in the A-site.",
        es: "El sitio P (sitio peptidil) del ribosoma sostiene el ARNt que lleva la cadena peptídica en crecimiento. El enlace peptídico se forma entre el aminoácido en el sitio P y el nuevo aminoácido en el sitio A.",
        de: "Die P-Stelle (Peptidyl-Stelle) des Ribosoms hält die tRNA, die die wachsende Peptidkette trägt. Die Peptidbindung bildet sich zwischen der Aminosäure in der P-Stelle und der neuen Aminosäure in der A-Stelle.",
        nl: "De P-site (peptidyl site) van het ribosoom houdt de tRNA vast die de groeiende peptideketen draagt. De peptidebinding vormt zich tussen het aminozuur in de P-site en het nieuwe aminozuur in de A-site."
      }
    },
    {
      question: {
        en: "Which type of RNA interference mechanism uses small interfering RNAs to silence gene expression?",
        es: "¿Qué tipo de mecanismo de interferencia de ARN usa ARN interferentes pequeños para silenciar la expresión génica?",
        de: "Welcher Typ von RNA-Interferenz-Mechanismus verwendet kleine interferierende RNAs, um die Genexpression zu silencing?",
        nl: "Welk type RNA-interferentie mechanisme gebruikt kleine interfererende RNA's om genexpressie te onderdrukken?"
      },
      options: [
        { en: "miRNA pathway", es: "Vía de miARN", de: "miRNA-Pathway", nl: "miRNA-pathway" },
        { en: "siRNA pathway", es: "Vía de siARN", de: "siRNA-Pathway", nl: "siRNA-pathway" },
        { en: "lncRNA regulation", es: "Regulación de lncARN", de: "lncRNA-Regulation", nl: "lncRNA-regulatie" },
        { en: "tRNA modification", es: "Modificación de tARN", de: "tRNA-Modifikation", nl: "tRNA-modificatie" }
      ],
      correct: 1,
      explanation: {
        en: "The siRNA (small interfering RNA) pathway uses double-stranded RNA molecules that are processed into 21-23 nucleotide siRNAs, which guide the RISC complex to cleave complementary mRNAs, effectively silencing gene expression.",
        es: "La vía siARN (ARN interferente pequeño) usa moléculas de ARN de doble cadena que se procesan en siARN de 21-23 nucleótidos, que guían al complejo RISC para cortar ARNm complementarios, silenciando efectivamente la expresión génica.",
        de: "Der siRNA-Pathway (kleine interferierende RNA) verwendet doppelsträngige RNA-Moleküle, die zu 21-23 Nukleotid-siRNAs verarbeitet werden, welche den RISC-Komplex zur Spaltung komplementärer mRNAs leiten und so die Genexpression effektiv zum Schweigen bringen.",
        nl: "De siRNA-pathway (small interfering RNA) gebruikt dubbelstrengs RNA-moleculen die worden verwerkt tot 21-23 nucleotide siRNA's, die het RISC-complex begeleiden om complementaire mRNA's te klieven, waardoor genexpressie effectief wordt onderdrukt."
      }
    },
    {
      question: {
        en: "What is the primary role of histone acetyltransferases (HATs) in gene regulation?",
        es: "¿Cuál es el papel principal de las histona acetiltransferasas (HATs) en la regulación génica?",
        de: "Was ist die primäre Rolle der Histonacetyltransferasen (HATs) in der Genregulation?",
        nl: "Wat is de primaire rol van histon acetyltransferases (HATs) in genregulatie?"
      },
      options: [
        { en: "Condense chromatin structure", es: "Condensar la estructura de cromatina", de: "Chromatin-Struktur kondensieren", nl: "Chromatinestructuur verdichten" },
        { en: "Add acetyl groups to histones, promoting transcription", es: "Agregar grupos acetilo a histonas, promoviendo la transcripción", de: "Acetylgruppen zu Histonen hinzufügen, Transkription fördern", nl: "Acetylgroepen toevoegen aan histonen, transcriptie bevorderen" },
        { en: "Remove methyl groups from DNA", es: "Eliminar grupos metilo del ADN", de: "Methylgruppen von DNA entfernen", nl: "Methylgroepen van DNA verwijderen" },
        { en: "Recruit DNA methyltransferases", es: "Reclutar metiltransferasas de ADN", de: "DNA-Methyltransferasen rekrutieren", nl: "DNA-methyltransferases rekruteren" }
      ],
      correct: 1,
      explanation: {
        en: "Histone acetyltransferases (HATs) add acetyl groups to lysine residues on histone tails, which neutralizes the positive charge and weakens histone-DNA interactions, leading to chromatin relaxation and enhanced gene transcription.",
        es: "Las histona acetiltransferasas (HATs) agregan grupos acetilo a residuos de lisina en colas de histonas, lo que neutraliza la carga positiva y debilita las interacciones histona-ADN, llevando a la relajación de cromatina y mejora de la transcripción génica.",
        de: "Histonacetyltransferasen (HATs) fügen Acetylgruppen zu Lysinresten an Histonschwänzen hinzu, was die positive Ladung neutralisiert und Histon-DNA-Interaktionen schwächt, was zu Chromatinrelaxation und verbesserter Gentranskription führt.",
        nl: "Histon acetyltransferases (HATs) voegen acetylgroepen toe aan lysine-residuen op histonstaarten, wat de positieve lading neutraliseert en histon-DNA-interacties verzwakt, leidend tot chromatine-ontspanning en verbeterde gentranscriptie."
      }
    },
    {
      question: {
        en: "Which cellular structure is responsible for the post-translational modification and sorting of proteins?",
        es: "¿Qué estructura celular es responsable de la modificación post-traduccional y clasificación de proteínas?",
        de: "Welche zelluläre Struktur ist für die post-translationale Modifikation und Sortierung von Proteinen verantwortlich?",
        nl: "Welke cellulaire structuur is verantwoordelijk voor post-translationele modificatie en sortering van eiwitten?"
      },
      options: [
        { en: "Rough endoplasmic reticulum", es: "Retículo endoplásmico rugoso", de: "Raues endoplasmatisches Retikulum", nl: "Ruw endoplasmatisch reticulum" },
        { en: "Golgi apparatus", es: "Aparato de Golgi", de: "Golgi-Apparat", nl: "Golgi-apparaat" },
        { en: "Mitochondrial matrix", es: "Matriz mitocondrial", de: "Mitochondriale Matrix", nl: "Mitochondriale matrix" },
        { en: "Nuclear pores", es: "Poros nucleares", de: "Kernporen", nl: "Kernporiën" }
      ],
      correct: 1,
      explanation: {
        en: "The Golgi apparatus is the cellular 'post office' where proteins undergo extensive post-translational modifications (glycosylation, phosphorylation, etc.) and are sorted and packaged for transport to their final cellular destinations.",
        es: "El aparato de Golgi es el 'correo' celular donde las proteínas sufren modificaciones post-traduccionales extensas (glicosilación, fosforilación, etc.) y son clasificadas y empaquetadas para transporte a sus destinos celulares finales.",
        de: "Der Golgi-Apparat ist das zelluläre 'Postamt', wo Proteine umfangreiche post-translationale Modifikationen (Glykosylierung, Phosphorylierung, etc.) durchlaufen und für den Transport zu ihren endgültigen zellulären Bestimmungsorten sortiert und verpackt werden.",
        nl: "Het Golgi-apparaat is het cellulaire 'postkantoor' waar eiwitten uitgebreide post-translationele modificaties ondergaan (glycosylering, fosforylering, etc.) en worden gesorteerd en verpakt voor transport naar hun uiteindelijke cellulaire bestemmingen."
      }
    },
    {
      question: {
        en: "What is the molecular basis of the lac operon's negative regulation in E. coli?",
        es: "¿Cuál es la base molecular de la regulación negativa del operón lac en E. coli?",
        de: "Was ist die molekulare Basis der negativen Regulation des lac-Operons in E. coli?",
        nl: "Wat is de moleculaire basis van de negatieve regulatie van het lac-operon in E. coli?"
      },
      options: [
        { en: "CAP-cAMP complex inhibits transcription", es: "El complejo CAP-AMPc inhibe la transcripción", de: "CAP-cAMP-Komplex hemmt die Transkription", nl: "CAP-cAMP-complex remt transcriptie" },
        { en: "LacI repressor binds to operator in absence of lactose", es: "El represor LacI se une al operador en ausencia de lactosa", de: "LacI-Repressor bindet an Operator bei Abwesenheit von Laktose", nl: "LacI-repressor bindt aan operator bij afwezigheid van lactose" },
        { en: "RNA polymerase cannot bind to promoter", es: "La ARN polimerasa no puede unirse al promotor", de: "RNA-Polymerase kann nicht an Promotor binden", nl: "RNA-polymerase kan niet binden aan promotor" },
        { en: "Allolactose degrades mRNA", es: "La alolactosa degrada el ARNm", de: "Allolaktose baut mRNA ab", nl: "Allolactose breekt mRNA af" }
      ],
      correct: 1,
      explanation: {
        en: "In the absence of lactose, the LacI repressor protein binds to the lac operator sequence, physically blocking RNA polymerase access to the structural genes, thus preventing transcription of the lactose-metabolizing enzymes.",
        es: "En ausencia de lactosa, la proteína represora LacI se une a la secuencia operadora lac, bloqueando físicamente el acceso de la ARN polimerasa a los genes estructurales, previniendo así la transcripción de las enzimas metabolizadoras de lactosa.",
        de: "Bei Abwesenheit von Laktose bindet das LacI-Repressorprotein an die lac-Operatorsequenz und blockiert physisch den Zugang der RNA-Polymerase zu den strukturellen Genen, wodurch die Transkription der laktosemetabolisierenden Enzyme verhindert wird.",
        nl: "Bij afwezigheid van lactose bindt het LacI-repressorproteïne aan de lac-operatorsequentie, waardoor fysiek de toegang van RNA-polymerase tot de structurele genen wordt geblokkeerd, dus transcriptie van de lactose-metaboliserende enzymen wordt voorkomen."
      }
    },
    {
      question: {
        en: "Which mechanism allows for alternative splicing to increase protein diversity from a single gene?",
        es: "¿Qué mecanismo permite el empalme alternativo para aumentar la diversidad de proteínas de un solo gen?",
        de: "Welcher Mechanismus ermöglicht alternatives Splicing zur Erhöhung der Proteinvielfalt aus einem einzigen Gen?",
        nl: "Welk mechanisme maakt alternatieve splicing mogelijk om eiwitdiversiteit van een enkel gen te verhogen?"
      },
      options: [
        { en: "Differential polyadenylation", es: "Poliadenilación diferencial", de: "Differentielle Polyadenylierung", nl: "Differentiële polyadenylering" },
        { en: "Tissue-specific splicing factors", es: "Factores de empalme tejido-específicos", de: "Gewebespezifische Splicing-Faktoren", nl: "Weefselspecifieke splicing-factoren" },
        { en: "DNA recombination", es: "Recombinación de ADN", de: "DNA-Rekombination", nl: "DNA-recombinatie" },
        { en: "Ribosomal frameshifting", es: "Cambio de marco ribosomal", de: "Ribosomale Frameshift", nl: "Ribosomale frameshift" }
      ],
      correct: 1,
      explanation: {
        en: "Tissue-specific splicing factors regulate which exons are included or excluded during pre-mRNA processing, allowing the same gene to produce different protein isoforms with distinct functions in different cell types.",
        es: "Los factores de empalme tejido-específicos regulan qué exones se incluyen o excluyen durante el procesamiento del pre-ARNm, permitiendo que el mismo gen produzca diferentes isoformas de proteínas con funciones distintas en diferentes tipos celulares.",
        de: "Gewebespezifische Splicing-Faktoren regulieren, welche Exons während der prä-mRNA-Verarbeitung eingeschlossen oder ausgeschlossen werden, wodurch dasselbe Gen verschiedene Proteinisoformen mit unterschiedlichen Funktionen in verschiedenen Zelltypen produzieren kann.",
        nl: "Weefselspecifieke splicing-factoren reguleren welke exonen worden ingesloten of uitgesloten tijdens pre-mRNA-verwerking, waardoor hetzelfde gen verschillende eiwit-isovormen kan produceren met verschillende functies in verschillende celtypen."
      }
    },
    {
      question: {
        en: "What is the primary function of telomerase in cellular aging and cancer?",
        es: "¿Cuál es la función principal de la telomerasa en el envejecimiento celular y el cáncer?",
        de: "Was ist die primäre Funktion der Telomerase bei zellulärer Alterung und Krebs?",
        nl: "Wat is de primaire functie van telomerase bij cellulaire veroudering en kanker?"
      },
      options: [
        { en: "Repairs DNA double-strand breaks", es: "Repara roturas de doble cadena de ADN", de: "Repariert DNA-Doppelstrangbrüche", nl: "Repareert DNA-dubbelstrengsbreuken" },
        { en: "Extends telomeres to prevent chromosome degradation", es: "Extiende los telómeros para prevenir la degradación cromosómica", de: "Verlängert Telomere zur Verhinderung von Chromosomendegradation", nl: "Verlengt telomeren om chromosoomdegradatie te voorkomen" },
        { en: "Removes damaged proteins", es: "Elimina proteínas dañadas", de: "Entfernt beschädigte Proteine", nl: "Verwijdert beschadigde eiwitten" },
        { en: "Regulates cell cycle checkpoints", es: "Regula los puntos de control del ciclo celular", de: "Reguliert Zellzyklus-Kontrollpunkte", nl: "Reguleert celcyclus controlepunten" }
      ],
      correct: 1,
      explanation: {
        en: "Telomerase adds telomeric DNA sequences to chromosome ends, preventing the progressive shortening that occurs with each cell division. Its reactivation in cancer cells allows unlimited replicative potential, contributing to immortalization.",
        es: "La telomerasa agrega secuencias de ADN telomérico a los extremos cromosómicos, previniendo el acortamiento progresivo que ocurre con cada división celular. Su reactivación en células cancerosas permite potencial replicativo ilimitado, contribuyendo a la inmortalización.",
        de: "Telomerase fügt telomerische DNA-Sequenzen zu Chromosomenenden hinzu und verhindert die progressive Verkürzung, die bei jeder Zellteilung auftritt. Ihre Reaktivierung in Krebszellen ermöglicht unbegrenztes replikatives Potenzial und trägt zur Immortalisierung bei.",
        nl: "Telomerase voegt telomerische DNA-sequenties toe aan chromosoomuiteinden, waardoor de progressieve verkorting wordt voorkomen die optreedt bij elke celdeling. Haar reactivatie in kankercellen maakt onbeperkt replicatief potentieel mogelijk, wat bijdraagt aan immortalisatie."
      }
    },
    {
      question: {
        en: "Which process describes the phenomenon where maternal and paternal alleles are expressed differently based on their parent of origin?",
        es: "¿Qué proceso describe el fenómeno donde los alelos maternos y paternos se expresan de manera diferente basándose en su progenitor de origen?",
        de: "Welcher Prozess beschreibt das Phänomen, bei dem mütterliche und väterliche Allele basierend auf ihrem Ursprungselternteil unterschiedlich exprimiert werden?",
        nl: "Welk proces beschrijft het fenomeen waarbij maternale en paternale allelen verschillend tot expressie komen gebaseerd op hun ouder van oorsprong?"
      },
      options: [
        { en: "Genetic imprinting", es: "Impronta genética", de: "Genetische Prägung", nl: "Genetische imprinting" },
        { en: "X-inactivation", es: "Inactivación de X", de: "X-Inaktivierung", nl: "X-inactivatie" },
        { en: "Chromatin remodeling", es: "Remodelación de cromatina", de: "Chromatin-Remodellierung", nl: "Chromatine-hermodellering" },
        { en: "Gene conversion", es: "Conversión génica", de: "Genkonversion", nl: "Genconversie" }
      ],
      correct: 0,
      explanation: {
        en: "Genetic imprinting is an epigenetic mechanism where the expression of genes depends on whether they were inherited from the mother or father, often through differential DNA methylation patterns established during gametogenesis.",
        es: "La impronta genética es un mecanismo epigenético donde la expresión de genes depende de si fueron heredados de la madre o del padre, a menudo a través de patrones de metilación del ADN diferencial establecidos durante la gametogénesis.",
        de: "Genetische Prägung ist ein epigenetischer Mechanismus, bei dem die Expression von Genen davon abhängt, ob sie von der Mutter oder dem Vater vererbt wurden, oft durch differentielle DNA-Methylierungsmuster, die während der Gametogenese etabliert werden.",
        nl: "Genetische imprinting is een epigenetisch mechanisme waarbij de expressie van genen afhangt van of ze werden geërfd van de moeder of vader, vaak door differentiële DNA-methyleringspatronen die tijdens gametogenese worden vastgesteld."
      }
    },
    {
      question: {
        en: "What is the molecular mechanism by which CRISPR-Cas9 achieves targeted gene editing?",
        es: "¿Cuál es el mecanismo molecular por el cual CRISPR-Cas9 logra la edición génica dirigida?",
        de: "Was ist der molekulare Mechanismus, durch den CRISPR-Cas9 gezielte Genbearbeitung erreicht?",
        nl: "Wat is het moleculaire mechanisme waarmee CRISPR-Cas9 gerichte genbewerking bereikt?"
      },
      options: [
        { en: "Guide RNA directs Cas9 to specific DNA sequences for cleavage", es: "El ARN guía dirige Cas9 a secuencias específicas de ADN para escisión", de: "Guide-RNA leitet Cas9 zu spezifischen DNA-Sequenzen zur Spaltung", nl: "Gids-RNA stuurt Cas9 naar specifieke DNA-sequenties voor splitsing" },
        { en: "Cas9 randomly cuts DNA and repairs are made", es: "Cas9 corta ADN aleatoriamente y se hacen reparaciones", de: "Cas9 schneidet DNA zufällig und Reparaturen werden gemacht", nl: "Cas9 knipt DNA willekeurig en reparaties worden gemaakt" },
        { en: "DNA polymerase synthesizes new genes", es: "ADN polimerasa sintetiza nuevos genes", de: "DNA-Polymerase synthetisiert neue Gene", nl: "DNA-polymerase synthetiseert nieuwe genen" },
        { en: "Restriction enzymes cut at specific sites", es: "Enzimas de restricción cortan en sitios específicos", de: "Restriktionsenzyme schneiden an spezifischen Stellen", nl: "Restrictie-enzymen knippen op specifieke plaatsen" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPR-Cas9 uses a programmable guide RNA (gRNA) that base-pairs with complementary DNA sequences, directing the Cas9 nuclease to make precise double-strand breaks at target loci, which can then be repaired with desired modifications.",
        es: "CRISPR-Cas9 usa un ARN guía programable (gRNA) que se empareja con secuencias de ADN complementarias, dirigiendo la nucleasa Cas9 para hacer roturas precisas de doble cadena en loci objetivo, que luego pueden ser reparadas con modificaciones deseadas.",
        de: "CRISPR-Cas9 verwendet eine programmierbare Guide-RNA (gRNA), die mit komplementären DNA-Sequenzen base-paart und die Cas9-Nuklease zu präzisen Doppelstrangbrüchen an Zielorten leitet, die dann mit gewünschten Modifikationen repariert werden können.",
        nl: "CRISPR-Cas9 gebruikt een programmeerbare gids-RNA (gRNA) die basenparen vormt met complementaire DNA-sequenties, waardoor de Cas9-nuclease wordt geleid om precieze dubbelstrengbreuken te maken op doellocaties, die vervolgens kunnen worden gerepareerd met gewenste modificaties."
      }
    },
    {
      question: {
        en: "Which cellular process is primarily responsible for maintaining proteostasis under stress conditions?",
        es: "¿Qué proceso celular es principalmente responsable de mantener la proteostasis bajo condiciones de estrés?",
        de: "Welcher zelluläre Prozess ist primär für die Aufrechterhaltung der Proteostase unter Stressbedingungen verantwortlich?",
        nl: "Welk cellulair proces is primair verantwoordelijk voor het handhaven van proteostase onder stressomstandigheden?"
      },
      options: [
        { en: "Autophagy", es: "Autofagia", de: "Autophagie", nl: "Autofagie" },
        { en: "Unfolded protein response", es: "Respuesta de proteínas desplegadas", de: "Ungefaltete Protein-Antwort", nl: "Ontvouwen eiwit respons" },
        { en: "Heat shock response", es: "Respuesta de choque térmico", de: "Hitzeschock-Antwort", nl: "Hitteschok respons" },
        { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
      ],
      correct: 3,
      explanation: {
        en: "Proteostasis is maintained through multiple interconnected pathways: autophagy removes damaged proteins, the unfolded protein response handles ER stress, and heat shock response produces chaperones to refold proteins. All work together to maintain protein homeostasis.",
        es: "La proteostasis se mantiene a través de múltiples vías interconectadas: la autofagia elimina proteínas dañadas, la respuesta de proteínas desplegadas maneja el estrés del RE, y la respuesta de choque térmico produce chaperonas para replegar proteínas. Todas trabajan juntas para mantener la homeostasis proteica.",
        de: "Proteostase wird durch mehrere miteinander verbundene Wege aufrechterhalten: Autophagie entfernt beschädigte Proteine, die ungefaltete Protein-Antwort behandelt ER-Stress, und Hitzeschock-Antwort produziert Chaperone zur Proteinfaltung. Alle arbeiten zusammen zur Aufrechterhaltung der Proteinhomöostase.",
        nl: "Proteostase wordt gehandhaafd door meerdere onderling verbonden pathways: autofagie verwijdert beschadigde eiwitten, de ontvouwen eiwit respons behandelt ER-stress, en hitteschok respons produceert chaperones om eiwitten te herplooien. Alle werken samen om eiwithomeostase te handhaven."
      }
    },
    {
      question: {
        en: "What is the primary mechanism of action of morphogens in developmental biology?",
        es: "¿Cuál es el mecanismo de acción principal de los morfógenos en biología del desarrollo?",
        de: "Was ist der primäre Wirkungsmechanismus von Morphogenen in der Entwicklungsbiologie?",
        nl: "Wat is het primaire werkingsmechanisme van morfogenen in ontwikkelingsbiologie?"
      },
      options: [
        { en: "Form concentration gradients that specify cell fate", es: "Forman gradientes de concentración que especifican el destino celular", de: "Bilden Konzentrationsgradienten, die Zellschicksal spezifizieren", nl: "Vormen concentratiegradiënten die celbestemming specificeren" },
        { en: "Directly trigger cell division", es: "Desencadenan directamente la división celular", de: "Lösen direkt Zellteilung aus", nl: "Triggeren direct celdeling" },
        { en: "Degrade cellular components", es: "Degradan componentes celulares", de: "Bauen zelluläre Komponenten ab", nl: "Breken cellulaire componenten af" },
        { en: "Transport nutrients between cells", es: "Transportan nutrientes entre células", de: "Transportieren Nährstoffe zwischen Zellen", nl: "Transporteren voedingsstoffen tussen cellen" }
      ],
      correct: 0,
      explanation: {
        en: "Morphogens are signaling molecules that form concentration gradients across developing tissues. Cells interpret their position within this gradient to adopt specific fates, establishing spatial patterns during embryonic development.",
        es: "Los morfógenos son moléculas señalizadoras que forman gradientes de concentración a través de tejidos en desarrollo. Las células interpretan su posición dentro de este gradiente para adoptar destinos específicos, estableciendo patrones espaciales durante el desarrollo embrionario.",
        de: "Morphogene sind Signalmoleküle, die Konzentrationsgradienten über sich entwickelnde Gewebe bilden. Zellen interpretieren ihre Position innerhalb dieses Gradienten, um spezifische Schicksale anzunehmen und räumliche Muster während der embryonalen Entwicklung zu etablieren.",
        nl: "Morfogenen zijn signaalmoleculen die concentratiegradiënten vormen over zich ontwikkelende weefsels. Cellen interpreteren hun positie binnen deze gradiënt om specifieke bestemmingen aan te nemen, waardoor ruimtelijke patronen tijdens embryonale ontwikkeling worden vastgesteld."
      }
    },
    {
      question: {
        en: "Which molecular mechanism underlies the formation of amyloid fibrils in neurodegenerative diseases?",
        es: "¿Qué mecanismo molecular subyace a la formación de fibrillas amiloides en enfermedades neurodegenerativas?",
        de: "Welcher molekulare Mechanismus liegt der Bildung von Amyloidfibrillen bei neurodegenerativen Erkrankungen zugrunde?",
        nl: "Welk moleculair mechanisme ligt ten grondslag aan de vorming van amyloïde fibrillen bij neurodegeneratieve ziekten?"
      },
      options: [
        { en: "Protein misfolding and aggregation", es: "Plegamiento incorrecto y agregación de proteínas", de: "Proteinfehlfaltung und Aggregation", nl: "Eiwitmisvouwing en aggregatie" },
        { en: "DNA mutations in structural genes", es: "Mutaciones de ADN en genes estructurales", de: "DNA-Mutationen in Strukturgenen", nl: "DNA-mutaties in structurele genen" },
        { en: "Excessive protein synthesis", es: "Síntesis excesiva de proteínas", de: "Übermäßige Proteinsynthese", nl: "Excessieve eiwitsynthese" },
        { en: "Rapid protein degradation", es: "Degradación rápida de proteínas", de: "Schnelle Proteinabbau", nl: "Snelle eiwitafbraak" }
      ],
      correct: 0,
      explanation: {
        en: "Amyloid fibrils form when normally soluble proteins undergo conformational changes, adopting β-sheet-rich structures that stack into insoluble aggregates. This process involves nucleation and elongation phases, leading to characteristic fibrillar deposits.",
        es: "Las fibrillas amiloides se forman cuando proteínas normalmente solubles sufren cambios conformacionales, adoptando estructuras ricas en láminas β que se apilan en agregados insolubles. Este proceso involucra fases de nucleación y elongación, llevando a depósitos fibrilares característicos.",
        de: "Amyloidfibrillen entstehen, wenn normalerweise lösliche Proteine Konformationsänderungen durchlaufen und β-Faltblatt-reiche Strukturen annehmen, die sich zu unlöslichen Aggregaten stapeln. Dieser Prozess umfasst Nukleations- und Elongationsphasen, die zu charakteristischen fibrillären Ablagerungen führen.",
        nl: "Amyloïde fibrillen vormen zich wanneer normaal oplosbare eiwitten conformationele veranderingen ondergaan, waarbij ze β-sheet-rijke structuren aannemen die opstapelen tot onoplosbare aggregaten. Dit proces omvat nucleatie- en elongatiefasen, leidend tot karakteristieke fibrillaire afzettingen."
      }
    },
    {
      question: {
        en: "What is the primary function of the anaphase-promoting complex (APC/C) in cell division?",
        es: "¿Cuál es la función principal del complejo promotor de anafase (APC/C) en la división celular?",
        de: "Was ist die primäre Funktion des Anaphase-fördernden Komplexes (APC/C) bei der Zellteilung?",
        nl: "Wat is de primaire functie van het anafase-bevorderend complex (APC/C) bij celdeling?"
      },
      options: [
        { en: "Initiates DNA replication", es: "Inicia la replicación del ADN", de: "Initiiert DNA-Replikation", nl: "Initieert DNA-replicatie" },
        { en: "Promotes chromosome condensation", es: "Promueve la condensación cromosómica", de: "Fördert Chromosomenkondensation", nl: "Bevordert chromosoomcondensatie" },
        { en: "Triggers sister chromatid separation", es: "Desencadena la separación de cromátidas hermanas", de: "Löst Schwesterchromatid-Trennung aus", nl: "Triggert zusterchromatide scheiding" },
        { en: "Forms the mitotic spindle", es: "Forma el huso mitótico", de: "Bildet die mitotische Spindel", nl: "Vormt de mitotische spoel" }
      ],
      correct: 2,
      explanation: {
        en: "The APC/C is an E3 ubiquitin ligase that targets securin for degradation, releasing separase to cleave cohesin proteins holding sister chromatids together, thus triggering anaphase and chromatid separation.",
        es: "El APC/C es una ligasa de ubiquitina E3 que marca la securina para degradación, liberando la separasa para cortar las proteínas cohesinas que mantienen unidas las cromátidas hermanas, desencadenando así la anafase y la separación de cromátidas.",
        de: "Der APC/C ist eine E3-Ubiquitin-Ligase, die Securin zur Degradation markiert, Separase freisetzt, um Cohesin-Proteine zu spalten, die Schwesterchromatiden zusammenhalten, und so Anaphase und Chromatid-Trennung auslöst.",
        nl: "Het APC/C is een E3-ubiquitineligase dat securine markeert voor degradatie, separase vrijgeeft om cohesine-eiwitten te splitsen die zusterchromatiden bij elkaar houden, waardoor anafase en chromatidescheiding wordt getriggerd."
      }
    },
    {
      question: {
        en: "Which type of cell junction allows for direct cytoplasmic communication between adjacent cells?",
        es: "¿Qué tipo de unión celular permite comunicación citoplásmica directa entre células adyacentes?",
        de: "Welche Art von Zellverbindung ermöglicht direkte zytoplasmatische Kommunikation zwischen benachbarten Zellen?",
        nl: "Welk type celjunctie maakt directe cytoplasmatische communicatie tussen aangrenzende cellen mogelijk?"
      },
      options: [
        { en: "Tight junctions", es: "Uniones estrechas", de: "Tight Junctions", nl: "Tight junctions" },
        { en: "Gap junctions", es: "Uniones gap", de: "Gap Junctions", nl: "Gap junctions" },
        { en: "Adherens junctions", es: "Uniones adherentes", de: "Adherens Junctions", nl: "Adherens junctions" },
        { en: "Desmosomes", es: "Desmosomas", de: "Desmosomen", nl: "Desmosomen" }
      ],
      correct: 1,
      explanation: {
        en: "Gap junctions consist of connexin proteins that form channels directly connecting the cytoplasm of adjacent cells, allowing passage of small molecules, ions, and electrical signals for intercellular communication.",
        es: "Las uniones gap consisten en proteínas conexinas que forman canales conectando directamente el citoplasma de células adyacentes, permitiendo el paso de moléculas pequeñas, iones y señales eléctricas para comunicación intercelular.",
        de: "Gap Junctions bestehen aus Connexin-Proteinen, die Kanäle bilden, welche das Zytoplasma benachbarter Zellen direkt verbinden und den Durchtritt kleiner Moleküle, Ionen und elektrischer Signale für interzelluläre Kommunikation ermöglichen.",
        nl: "Gap junctions bestaan uit connexine-eiwitten die kanalen vormen die het cytoplasma van aangrenzende cellen direct verbinden, waardoor passage van kleine moleculen, ionen en elektrische signalen voor intercellulaire communicatie mogelijk is."
      }
    },
    {
      question: {
        en: "What is the molecular basis of insulin resistance in type 2 diabetes?",
        es: "¿Cuál es la base molecular de la resistencia a la insulina en la diabetes tipo 2?",
        de: "Was ist die molekulare Basis der Insulinresistenz bei Typ-2-Diabetes?",
        nl: "Wat is de moleculaire basis van insulineresistentie bij type 2 diabetes?"
      },
      options: [
        { en: "Defective insulin receptor signaling pathways", es: "Vías de señalización del receptor de insulina defectuosas", de: "Defekte Insulinrezeptor-Signalwege", nl: "Defecte insulinereceptor signaalpaden" },
        { en: "Absence of insulin production", es: "Ausencia de producción de insulina", de: "Fehlen der Insulinproduktion", nl: "Afwezigheid van insulineproductie" },
        { en: "Excessive glucose absorption", es: "Absorción excesiva de glucosa", de: "Übermäßige Glukoseabsorption", nl: "Excessieve glucose-absorptie" },
        { en: "Rapid insulin degradation", es: "Degradación rápida de insulina", de: "Schnelle Insulindegradation", nl: "Snelle insuline-afbraak" }
      ],
      correct: 0,
      explanation: {
        en: "Insulin resistance occurs when insulin receptor signaling becomes impaired, often due to receptor phosphorylation defects, downstream kinase dysfunction (like IRS-1 phosphorylation), or reduced GLUT4 translocation to the cell membrane.",
        es: "La resistencia a la insulina ocurre cuando la señalización del receptor de insulina se ve afectada, a menudo debido a defectos de fosforilación del receptor, disfunción de quinasas aguas abajo (como fosforilación de IRS-1), o reducción de la translocación de GLUT4 a la membrana celular.",
        de: "Insulinresistenz tritt auf, wenn die Insulinrezeptor-Signalübertragung beeinträchtigt wird, oft aufgrund von Rezeptorphosphorylierungsdefekten, nachgeschalteter Kinase-Dysfunktion (wie IRS-1-Phosphorylierung) oder reduzierter GLUT4-Translokation zur Zellmembran.",
        nl: "Insulineresistentie treedt op wanneer insulinereceptor-signalering wordt verstoord, vaak door receptorfosforylering defecten, stroomafwaartse kinase-disfunctie (zoals IRS-1-fosforylering), of verminderde GLUT4-translocatie naar het celmembraan."
      }
    },
    {
      question: {
        en: "Which molecular mechanism allows certain bacteria to survive antibiotic treatment?",
        es: "¿Qué mecanismo molecular permite a ciertas bacterias sobrevivir al tratamiento con antibióticos?",
        de: "Welcher molekulare Mechanismus ermöglicht es bestimmten Bakterien, eine Antibiotikatherapie zu überleben?",
        nl: "Welk moleculair mechanisme maakt het mogelijk dat bepaalde bacteriën antibioticabehandeling overleven?"
      },
      options: [
        { en: "Enhanced DNA repair mechanisms", es: "Mecanismos de reparación de ADN mejorados", de: "Verbesserte DNA-Reparaturmechanismen", nl: "Verbeterde DNA-reparatiemechanismen" },
        { en: "β-lactamase enzyme production", es: "Producción de enzima β-lactamasa", de: "β-Lactamase-Enzymproduktion", nl: "β-lactamase enzymproductie" },
        { en: "Increased protein synthesis", es: "Síntesis de proteínas aumentada", de: "Erhöhte Proteinsynthese", nl: "Verhoogde eiwitsynthese" },
        { en: "Faster cell division", es: "División celular más rápida", de: "Schnellere Zellteilung", nl: "Snellere celdeling" }
      ],
      correct: 1,
      explanation: {
        en: "β-lactamase enzymes cleave the β-lactam ring structure found in penicillins and related antibiotics, rendering them inactive. This is one of the primary mechanisms of antibiotic resistance in many pathogenic bacteria.",
        es: "Las enzimas β-lactamasa cortan la estructura del anillo β-lactámico encontrada en penicilinas y antibióticos relacionados, volviéndolos inactivos. Este es uno de los mecanismos primarios de resistencia antibiótica en muchas bacterias patógenas.",
        de: "β-Lactamase-Enzyme spalten die β-Lactam-Ringstruktur, die in Penicillinen und verwandten Antibiotika gefunden wird, und machen sie inaktiv. Dies ist einer der primären Mechanismen der Antibiotikaresistenz bei vielen pathogenen Bakterien.",
        nl: "β-lactamase enzymen splitsen de β-lactam ringstructuur die wordt gevonden in penicillines en gerelateerde antibiotica, waardoor ze inactief worden. Dit is een van de primaire mechanismen van antibioticaresistentie bij veel pathogene bacteriën."
      }
    },
    {
      question: {
        en: "What is the primary mechanism by which tumor suppressor genes prevent cancer development?",
        es: "¿Cuál es el mecanismo principal por el cual los genes supresores de tumores previenen el desarrollo del cáncer?",
        de: "Was ist der primäre Mechanismus, durch den Tumorsuppressorgene die Krebsentwicklung verhindern?",
        nl: "Wat is het primaire mechanisme waarmee tumorsuppressor-genen kankerontwikkeling voorkomen?"
      },
      options: [
        { en: "Promote rapid cell division", es: "Promueven división celular rápida", de: "Fördern schnelle Zellteilung", nl: "Bevorderen snelle celdeling" },
        { en: "Control cell cycle checkpoints and induce apoptosis", es: "Controlan puntos de control del ciclo celular e inducen apoptosis", de: "Kontrollieren Zellzyklus-Kontrollpunkte und induzieren Apoptose", nl: "Controleren celcyclus controlepunten en induceren apoptose" },
        { en: "Increase DNA mutation rates", es: "Aumentan las tasas de mutación del ADN", de: "Erhöhen DNA-Mutationsraten", nl: "Verhogen DNA-mutatiepercentages" },
        { en: "Enhance angiogenesis", es: "Mejoran la angiogénesis", de: "Verbessern Angiogenese", nl: "Verbeteren angiogenese" }
      ],
      correct: 1,
      explanation: {
        en: "Tumor suppressor genes like p53 and Rb act as 'gatekeepers' by monitoring DNA integrity, halting cell division at checkpoints when damage is detected, and triggering apoptosis if the damage cannot be repaired, preventing malignant transformation.",
        es: "Los genes supresores de tumores como p53 y Rb actúan como 'guardianes' monitoreando la integridad del ADN, deteniendo la división celular en puntos de control cuando se detecta daño, y desencadenando apoptosis si el daño no puede ser reparado, previniendo la transformación maligna.",
        de: "Tumorsuppressorgene wie p53 und Rb fungieren als 'Torwächter', indem sie DNA-Integrität überwachen, Zellteilung an Kontrollpunkten stoppen, wenn Schäden erkannt werden, und Apoptose auslösen, wenn der Schaden nicht repariert werden kann, wodurch maligne Transformation verhindert wird.",
        nl: "Tumorsuppressor-genen zoals p53 en Rb fungeren als 'poortwachters' door DNA-integriteit te bewaken, celdeling bij controlepunten te stoppen wanneer schade wordt gedetecteerd, en apoptose te triggeren als de schade niet kan worden gerepareerd, waardoor maligne transformatie wordt voorkomen."
      }
    },
    {
      question: {
        en: "Which process describes the conversion of atmospheric nitrogen into biologically available forms?",
        es: "¿Qué proceso describe la conversión del nitrógeno atmosférico en formas biológicamente disponibles?",
        de: "Welcher Prozess beschreibt die Umwandlung von atmosphärischem Stickstoff in biologisch verfügbare Formen?",
        nl: "Welk proces beschrijft de omzetting van atmosferische stikstof in biologisch beschikbare vormen?"
      },
      options: [
        { en: "Denitrification", es: "Desnitrificación", de: "Denitrifikation", nl: "Denitrificatie" },
        { en: "Nitrogen fixation", es: "Fijación de nitrógeno", de: "Stickstoff-Fixierung", nl: "Stikstoffixatie" },
        { en: "Nitrification", es: "Nitrificación", de: "Nitrifikation", nl: "Nitrificatie" },
        { en: "Ammonification", es: "Amonificación", de: "Ammonifikation", nl: "Ammonificatie" }
      ],
      correct: 1,
      explanation: {
        en: "Nitrogen fixation is the process by which atmospheric N₂ gas is converted into ammonia (NH₃) by specialized bacteria containing nitrogenase enzyme, making nitrogen available for biological processes in ecosystems.",
        es: "La fijación de nitrógeno es el proceso por el cual el gas N₂ atmosférico se convierte en amoníaco (NH₃) por bacterias especializadas que contienen la enzima nitrogenasa, haciendo el nitrógeno disponible para procesos biológicos en ecosistemas.",
        de: "Stickstoff-Fixierung ist der Prozess, durch den atmosphärisches N₂-Gas in Ammoniak (NH₃) durch spezialisierte Bakterien mit Nitrogenase-Enzym umgewandelt wird, wodurch Stickstoff für biologische Prozesse in Ökosystemen verfügbar gemacht wird.",
        nl: "Stikstoffixatie is het proces waarbij atmosferisch N₂-gas wordt omgezet in ammoniak (NH₃) door gespecialiseerde bacteriën die nitrogenase-enzym bevatten, waardoor stikstof beschikbaar wordt gemaakt voor biologische processen in ecosystemen."
      }
    },
    {
      question: {
        en: "What is the molecular mechanism underlying the action potential in neurons?",
        es: "¿Cuál es el mecanismo molecular que subyace al potencial de acción en las neuronas?",
        de: "Was ist der molekulare Mechanismus, der dem Aktionspotenzial in Neuronen zugrunde liegt?",
        nl: "Wat is het moleculaire mechanisme dat ten grondslag ligt aan het actiepotentiaal in neuronen?"
      },
      options: [
        { en: "Sequential opening and closing of voltage-gated ion channels", es: "Apertura y cierre secuencial de canales iónicos dependientes de voltaje", de: "Sequenzielles Öffnen und Schließen spannungsgesteuerter Ionenkanäle", nl: "Sequentiële opening en sluiting van spanningsafhankelijke ionkanalen" },
        { en: "Continuous Na⁺ influx", es: "Influjo continuo de Na⁺", de: "Kontinuierlicher Na⁺-Einstrom", nl: "Continue Na⁺-instroom" },
        { en: "ATP hydrolysis", es: "Hidrólisis de ATP", de: "ATP-Hydrolyse", nl: "ATP-hydrolyse" },
        { en: "Protein phosphorylation", es: "Fosforilación de proteínas", de: "Proteinphosphorylierung", nl: "Eiwitfosforylering" }
      ],
      correct: 0,
      explanation: {
        en: "Action potentials result from the sequential activation of voltage-gated sodium channels (depolarization), followed by voltage-gated potassium channels (repolarization), creating a propagating electrical signal along the axon membrane.",
        es: "Los potenciales de acción resultan de la activación secuencial de canales de sodio dependientes de voltaje (despolarización), seguida por canales de potasio dependientes de voltaje (repolarización), creando una señal eléctrica que se propaga a lo largo de la membrana del axón.",
        de: "Aktionspotenziale entstehen durch sequenzielle Aktivierung spannungsgesteuerter Natriumkanäle (Depolarisation), gefolgt von spannungsgesteuerten Kaliumkanälen (Repolarisation), wodurch ein sich ausbreitendes elektrisches Signal entlang der Axonmembran entsteht.",
        nl: "Actiepotentialen ontstaan door sequentiële activatie van spanningsafhankelijke natriumkanalen (depolarisatie), gevolgd door spanningsafhankelijke kaliumkanalen (repolarisatie), waardoor een zich voortplantend elektrisch signaal langs het axonmembraan ontstaat."
      }
    },
    {
      question: {
        en: "Which molecular pathway is primarily responsible for cellular energy sensing and metabolic regulation?",
        es: "¿Qué vía molecular es principalmente responsable del sensor de energía celular y la regulación metabólica?",
        de: "Welcher molekulare Pathway ist primär für zelluläre Energiewahrnehmung und Stoffwechselregulation verantwortlich?",
        nl: "Welke moleculaire pathway is primair verantwoordelijk voor cellulaire energiedetectie en metabolische regulatie?"
      },
      options: [
        { en: "AMPK pathway", es: "Vía AMPK", de: "AMPK-Pathway", nl: "AMPK-pathway" },
        { en: "p53 pathway", es: "Vía p53", de: "p53-Pathway", nl: "p53-pathway" },
        { en: "Wnt signaling", es: "Señalización Wnt", de: "Wnt-Signaling", nl: "Wnt-signalering" },
        { en: "Notch pathway", es: "Vía Notch", de: "Notch-Pathway", nl: "Notch-pathway" }
      ],
      correct: 0,
      explanation: {
        en: "AMPK (AMP-activated protein kinase) acts as a cellular energy sensor, activated when ATP levels drop and AMP levels rise, triggering catabolic pathways to generate ATP while inhibiting anabolic processes to conserve energy.",
        es: "AMPK (proteína quinasa activada por AMP) actúa como un sensor de energía celular, activado cuando los niveles de ATP bajan y los niveles de AMP suben, desencadenando vías catabólicas para generar ATP mientras inhibe procesos anabólicos para conservar energía.",
        de: "AMPK (AMP-aktivierte Proteinkinase) fungiert als zellulärer Energiesensor, aktiviert wenn ATP-Spiegel sinken und AMP-Spiegel steigen, löst katabolische Wege zur ATP-Generierung aus, während anabolische Prozesse zur Energiekonservierung gehemmt werden.",
        nl: "AMPK (AMP-geactiveerd proteïnekinase) fungeert als cellulaire energiesensor, geactiveerd wanneer ATP-niveaus dalen en AMP-niveaus stijgen, triggert katabolische pathways om ATP te genereren terwijl anabolische processen worden geremd om energie te conserveren."
      }
    },
    {
      question: {
        en: "What is the primary mechanism of viral RNA interference suppression?",
        es: "¿Cuál es el mecanismo principal de supresión de interferencia de ARN viral?",
        de: "Was ist der primäre Mechanismus der viralen RNA-Interferenz-Unterdrückung?",
        nl: "Wat is het primaire mechanisme van virale RNA-interferentie suppressie?"
      },
      options: [
        { en: "Viral proteins bind and sequester miRNAs", es: "Proteínas virales se unen y secuestran miARNs", de: "Virale Proteine binden und sequestrieren miRNAs", nl: "Virale eiwitten binden en sequestreren miRNA's" },
        { en: "Viruses produce their own miRNAs", es: "Los virus producen sus propios miARNs", de: "Viren produzieren ihre eigenen miRNAs", nl: "Virussen produceren hun eigen miRNA's" },
        { en: "Viral enzymes degrade RISC complex", es: "Enzimas virales degradan el complejo RISC", de: "Virale Enzyme bauen RISC-Komplex ab", nl: "Virale enzymen breken RISC-complex af" },
        { en: "Viruses block dicer processing", es: "Los virus bloquean el procesamiento de dicer", de: "Viren blockieren Dicer-Verarbeitung", nl: "Virussen blokkeren dicer-verwerking" }
      ],
      correct: 0,
      explanation: {
        en: "Many viruses encode suppressor proteins that bind to small RNAs (miRNAs/siRNAs) and sequester them, preventing their incorporation into RISC complexes and thereby suppressing the host's RNAi defense mechanism.",
        es: "Muchos virus codifican proteínas supresoras que se unen a ARNs pequeños (miARNs/siARNs) y los secuestran, previniendo su incorporación en complejos RISC y suprimiendo así el mecanismo de defensa RNAi del huésped.",
        de: "Viele Viren kodieren Suppressorproteine, die an kleine RNAs (miRNAs/siRNAs) binden und sie sequestrieren, ihre Einbindung in RISC-Komplexe verhindern und damit den RNAi-Abwehrmechanismus des Wirts unterdrücken.",
        nl: "Veel virussen coderen suppressoreiwitten die binden aan kleine RNA's (miRNA's/siRNA's) en ze sequestreren, waardoor hun incorporatie in RISC-complexen wordt voorkomen en daarmee het RNAi-verdedigingsmechanisme van de gastheer wordt onderdrukt."
      }
    },
    {
      question: {
        en: "Which cellular structure is responsible for the assembly of ribosomal subunits?",
        es: "¿Qué estructura celular es responsable del ensamblaje de subunidades ribosomales?",
        de: "Welche zelluläre Struktur ist für die Assemblierung ribosomaler Untereinheiten verantwortlich?",
        nl: "Welke cellulaire structuur is verantwoordelijk voor de assemblage van ribosomale subeenheden?"
      },
      options: [
        { en: "Endoplasmic reticulum", es: "Retículo endoplásmico", de: "Endoplasmatisches Retikulum", nl: "Endoplasmatisch reticulum" },
        { en: "Nucleolus", es: "Nucléolo", de: "Nucleolus", nl: "Nucleolus" },
        { en: "Golgi apparatus", es: "Aparato de Golgi", de: "Golgi-Apparat", nl: "Golgi-apparaat" },
        { en: "Peroxisome", es: "Peroxisoma", de: "Peroxisom", nl: "Peroxisoom" }
      ],
      correct: 1,
      explanation: {
        en: "The nucleolus is the specialized nuclear subdomain where ribosomal RNA (rRNA) is transcribed, processed, and assembled with ribosomal proteins to form the large and small ribosomal subunits before export to the cytoplasm.",
        es: "El nucléolo es el subdominio nuclear especializado donde el ARN ribosomal (ARNr) se transcribe, procesa y ensambla con proteínas ribosomales para formar las subunidades ribosomales grandes y pequeñas antes de exportarse al citoplasma.",
        de: "Der Nucleolus ist die spezialisierte nukleare Subdomäne, wo ribosomale RNA (rRNA) transkribiert, verarbeitet und mit ribosomalen Proteinen zu großen und kleinen ribosomalen Untereinheiten assembliert wird, bevor sie ins Zytoplasma exportiert werden.",
        nl: "De nucleolus is het gespecialiseerde nucleaire subdomein waar ribosomaal RNA (rRNA) wordt getranscribeerd, verwerkt en geassembleerd met ribosomale eiwitten om de grote en kleine ribosomale subeenheden te vormen voordat ze naar het cytoplasma worden geëxporteerd."
      }
    },
    {
      question: {
        en: "What is the molecular basis of allosteric regulation in enzymes?",
        es: "¿Cuál es la base molecular de la regulación alostérica en enzimas?",
        de: "Was ist die molekulare Basis der allosterischen Regulation in Enzymen?",
        nl: "Wat is de moleculaire basis van allosterische regulatie in enzymen?"
      },
      options: [
        { en: "Competitive inhibition at active site", es: "Inhibición competitiva en sitio activo", de: "Kompetitive Hemmung am aktiven Zentrum", nl: "Competitieve remming op actieve site" },
        { en: "Conformational changes upon effector binding", es: "Cambios conformacionales al unirse el efector", de: "Konformationsänderungen bei Effektor-Bindung", nl: "Conformationele veranderingen bij effector-binding" },
        { en: "Enzyme degradation", es: "Degradación de enzima", de: "Enzymabbau", nl: "Enzymafbraak" },
        { en: "Gene transcription changes", es: "Cambios en transcripción génica", de: "Gentranskriptionsänderungen", nl: "Gentranskriptieveranderingen" }
      ],
      correct: 1,
      explanation: {
        en: "Allosteric regulation occurs when an effector molecule binds to a site distinct from the active site, causing conformational changes that either increase (positive allosterism) or decrease (negative allosterism) enzyme activity.",
        es: "La regulación alostérica ocurre cuando una molécula efectora se une a un sitio distinto del sitio activo, causando cambios conformacionales que aumentan (alosterismo positivo) o disminuyen (alosterismo negativo) la actividad enzimática.",
        de: "Allosterische Regulation tritt auf, wenn ein Effektormolekül an eine vom aktiven Zentrum verschiedene Stelle bindet und Konformationsänderungen verursacht, die Enzymaktivität entweder erhöhen (positive Allosterie) oder verringern (negative Allosterie).",
        nl: "Allosterische regulatie treedt op wanneer een effectormolecuul bindt aan een site die verschilt van de actieve site, waardoor conformationele veranderingen ontstaan die enzymactiviteit verhogen (positieve allosterie) of verlagen (negatieve allosterie)."
      }
    },
    {
      question: {
        en: "Which molecular mechanism underlies the specificity of antigen-antibody interactions?",
        es: "¿Qué mecanismo molecular subyace a la especificidad de las interacciones antígeno-anticuerpo?",
        de: "Welcher molekulare Mechanismus liegt der Spezifität von Antigen-Antikörper-Interaktionen zugrunde?",
        nl: "Welk moleculair mechanisme ligt ten grondslag aan de specificiteit van antigeen-antilichaam interacties?"
      },
      options: [
        { en: "Complementary shape and chemical interactions", es: "Forma complementaria e interacciones químicas", de: "Komplementäre Form und chemische Interaktionen", nl: "Complementaire vorm en chemische interacties" },
        { en: "Covalent bond formation", es: "Formación de enlaces covalentes", de: "Kovalente Bindungsbildung", nl: "Covalente bindingsvorming" },
        { en: "Electrostatic repulsion", es: "Repulsión electrostática", de: "Elektrostatische Abstoßung", nl: "Elektrostatische afstoting" },
        { en: "Random molecular collision", es: "Colisión molecular aleatoria", de: "Zufällige molekulare Kollision", nl: "Willekeurige moleculaire botsing" }
      ],
      correct: 0,
      explanation: {
        en: "Antigen-antibody specificity arises from complementary molecular surfaces involving shape complementarity and multiple weak interactions (hydrogen bonds, van der Waals forces, electrostatic interactions) between the antibody's antigen-binding site and the epitope.",
        es: "La especificidad antígeno-anticuerpo surge de superficies moleculares complementarias que involucran complementariedad de forma e interacciones débiles múltiples (enlaces de hidrógeno, fuerzas de van der Waals, interacciones electrostáticas) entre el sitio de unión al antígeno del anticuerpo y el epítope.",
        de: "Antigen-Antikörper-Spezifität entsteht durch komplementäre molekulare Oberflächen mit Formkomplementarität und mehreren schwachen Interaktionen (Wasserstoffbrücken, van der Waals-Kräfte, elektrostatische Interaktionen) zwischen der Antigenbindungsstelle des Antikörpers und dem Epitop.",
        nl: "Antigeen-antilichaam specificiteit ontstaat door complementaire moleculaire oppervlakken met vormcomplementariteit en meerdere zwakke interacties (waterstofbruggen, van der Waals-krachten, elektrostatische interacties) tussen de antigeenbindingssite van het antilichaam en het epitoop."
      }
    },
    {
      question: {
        en: "What is the primary mechanism of horizontal gene transfer in bacteria?",
        es: "¿Cuál es el mecanismo principal de transferencia horizontal de genes en bacterias?",
        de: "Was ist der primäre Mechanismus des horizontalen Gentransfers in Bakterien?",
        nl: "Wat is het primaire mechanisme van horizontale genoverdracht in bacteriën?"
      },
      options: [
        { en: "Conjugation via pili", es: "Conjugación vía pili", de: "Konjugation über Pili", nl: "Conjugatie via pili" },
        { en: "Mitotic recombination", es: "Recombinación mitótica", de: "Mitotische Rekombination", nl: "Mitotische recombinatie" },
        { en: "Chromosome duplication", es: "Duplicación cromosómica", de: "Chromosomenduplikation", nl: "Chromosoomduplicatie" },
        { en: "Viral integration only", es: "Solo integración viral", de: "Nur virale Integration", nl: "Alleen virale integratie" }
      ],
      correct: 0,
      explanation: {
        en: "Bacterial conjugation involves direct cell-to-cell contact via pili, allowing transfer of plasmids and genetic material between bacteria. This, along with transformation and transduction, enables horizontal gene transfer and rapid spread of traits like antibiotic resistance.",
        es: "La conjugación bacteriana involucra contacto directo célula-célula vía pili, permitiendo transferencia de plásmidos y material genético entre bacterias. Esto, junto con transformación y transducción, permite transferencia horizontal de genes y propagación rápida de rasgos como resistencia antibiótica.",
        de: "Bakterielle Konjugation beinhaltet direkten Zell-zu-Zell-Kontakt über Pili, wodurch Transfer von Plasmiden und genetischem Material zwischen Bakterien ermöglicht wird. Dies, zusammen mit Transformation und Transduktion, ermöglicht horizontalen Gentransfer und schnelle Ausbreitung von Eigenschaften wie Antibiotikaresistenz.",
        nl: "Bacteriële conjugatie behelst direct cel-tot-cel contact via pili, waardoor overdracht van plasmiden en genetisch materiaal tussen bacteriën mogelijk is. Dit, samen met transformatie en transductie, maakt horizontale genoverdracht mogelijk en snelle verspreiding van eigenschappen zoals antibioticaresistentie."
      }
    },
    {
      question: {
        en: "Which molecular process is responsible for the formation of heterochromatin?",
        es: "¿Qué proceso molecular es responsable de la formación de heterocromatina?",
        de: "Welcher molekulare Prozess ist für die Bildung von Heterochromatin verantwortlich?",
        nl: "Welk moleculair proces is verantwoordelijk voor de vorming van heterochromatine?"
      },
      options: [
        { en: "Histone acetylation", es: "Acetilación de histonas", de: "Histonacetylierung", nl: "Histonacetylering" },
        { en: "Histone methylation and DNA methylation", es: "Metilación de histonas y metilación del ADN", de: "Histonmethylierung und DNA-Methylierung", nl: "Histonmethylering en DNA-methylering" },
        { en: "Histone phosphorylation", es: "Fosforilación de histonas", de: "Histonphosphorylierung", nl: "Histonfosforylering" },
        { en: "Chromatin remodeling complexes", es: "Complejos de remodelación de cromatina", de: "Chromatin-Remodellierungskomplexe", nl: "Chromatine-hermodelleringscomplexen" }
      ],
      correct: 1,
      explanation: {
        en: "Heterochromatin formation involves specific histone modifications (like H3K9 trimethylation) and DNA methylation that create a condensed, transcriptionally inactive chromatin structure, often involving HP1 protein binding and spreading.",
        es: "La formación de heterocromatina involucra modificaciones específicas de histonas (como trimetilación de H3K9) y metilación del ADN que crean una estructura de cromatina condensada y transcripcionalmente inactiva, a menudo involucrando unión y propagación de proteína HP1.",
        de: "Heterochromatin-Bildung beinhaltet spezifische Histonmodifikationen (wie H3K9-Trimethylierung) und DNA-Methylierung, die eine kondensierte, transkriptional inaktive Chromatinstruktur schaffen, oft mit HP1-Proteinbindung und -ausbreitung.",
        nl: "Heterochromatine-vorming behelst specifieke histonmodificaties (zoals H3K9-trimethylering) en DNA-methylering die een gecondenseerde, transcriptioneel inactieve chromatinestructuur creëren, vaak met HP1-eiwit binding en verspreiding."
      }
    },
    {
      question: {
        en: "What is the molecular mechanism of quorum sensing in bacterial communication?",
        es: "¿Cuál es el mecanismo molecular de detección de quórum en la comunicación bacteriana?",
        de: "Was ist der molekulare Mechanismus des Quorum Sensing in der bakteriellen Kommunikation?",
        nl: "Wat is het moleculaire mechanisme van quorum sensing in bacteriële communicatie?"
      },
      options: [
        { en: "Direct physical contact between cells", es: "Contacto físico directo entre células", de: "Direkter physischer Kontakt zwischen Zellen", nl: "Direct fysiek contact tussen cellen" },
        { en: "Accumulation of signaling molecules until threshold concentration", es: "Acumulación de moléculas señalizadoras hasta concentración umbral", de: "Akkumulation von Signalmolekülen bis Schwellenkonzentration", nl: "Accumulatie van signaalmoleculen tot drempelconcentratie" },
        { en: "Random molecular diffusion", es: "Difusión molecular aleatoria", de: "Zufällige molekulare Diffusion", nl: "Willekeurige moleculaire diffusie" },
        { en: "Electromagnetic field detection", es: "Detección de campo electromagnético", de: "Elektromagnetische Felderkennung", nl: "Elektromagnetische velddetectie" }
      ],
      correct: 1,
      explanation: {
        en: "Quorum sensing involves bacteria producing and releasing signaling molecules (autoinducers) that accumulate proportionally to cell density. When threshold concentrations are reached, these molecules bind to receptors and trigger coordinated gene expression changes.",
        es: "La detección de quórum involucra bacterias produciendo y liberando moléculas señalizadoras (autoinductores) que se acumulan proporcionalmente a la densidad celular. Cuando se alcanzan concentraciones umbral, estas moléculas se unen a receptores y desencadenan cambios coordinados de expresión génica.",
        de: "Quorum Sensing beinhaltet, dass Bakterien Signalmoleküle (Autoinducer) produzieren und freisetzen, die sich proportional zur Zelldichte ansammeln. Wenn Schwellenkonzentrationen erreicht werden, binden diese Moleküle an Rezeptoren und lösen koordinierte Genexpressionsänderungen aus.",
        nl: "Quorum sensing behelst bacteriën die signaalmoleculen (autoinducers) produceren en vrijgeven die zich proportioneel ophopen met celdichtheid. Wanneer drempelconcentraties worden bereikt, binden deze moleculen aan receptoren en triggeren gecoördineerde genexpressie-veranderingen."
      }
    },
    {
      question: {
        en: "Which cellular pathway is activated in response to endoplasmic reticulum stress?",
        es: "¿Qué vía celular se activa en respuesta al estrés del retículo endoplásmico?",
        de: "Welcher zelluläre Pathway wird als Antwort auf Endoplasmatisches-Retikulum-Stress aktiviert?",
        nl: "Welke cellulaire pathway wordt geactiveerd als reactie op endoplasmatisch reticulum stress?"
      },
      options: [
        { en: "p53 pathway", es: "Vía p53", de: "p53-Pathway", nl: "p53-pathway" },
        { en: "Unfolded protein response (UPR)", es: "Respuesta de proteínas desplegadas (UPR)", de: "Ungefaltete Protein-Antwort (UPR)", nl: "Ontvouwen eiwit respons (UPR)" },
        { en: "NF-κB pathway", es: "Vía NF-κB", de: "NF-κB-Pathway", nl: "NF-κB-pathway" },
        { en: "MAPK cascade", es: "Cascada MAPK", de: "MAPK-Kaskade", nl: "MAPK-cascade" }
      ],
      correct: 1,
      explanation: {
        en: "The Unfolded Protein Response (UPR) is activated when misfolded proteins accumulate in the ER, involving three sensors (IRE1, PERK, ATF6) that coordinate responses to reduce protein load, enhance folding capacity, or trigger apoptosis if stress persists.",
        es: "La Respuesta de Proteínas Desplegadas (UPR) se activa cuando proteínas mal plegadas se acumulan en el RE, involucrando tres sensores (IRE1, PERK, ATF6) que coordinan respuestas para reducir carga proteica, mejorar capacidad de plegamiento, o desencadenar apoptosis si el estrés persiste.",
        de: "Die Ungefaltete Protein-Antwort (UPR) wird aktiviert, wenn falsch gefaltete Proteine im ER akkumulieren, mit drei Sensoren (IRE1, PERK, ATF6), die Antworten koordinieren, um Proteinlast zu reduzieren, Faltkapazität zu erhöhen oder Apoptose auszulösen, wenn Stress anhält.",
        nl: "De Ontvouwen Eiwit Respons (UPR) wordt geactiveerd wanneer verkeerd gevouwen eiwitten ophopen in het ER, met drie sensoren (IRE1, PERK, ATF6) die responsen coördineren om eiwitlast te verminderen, vouwcapaciteit te verbeteren, of apoptose te triggeren als stress aanhoudt."
      }
    },
    {
      question: {
        en: "What is the primary function of the proteasome in protein quality control?",
        es: "¿Cuál es la función principal del proteasoma en el control de calidad de proteínas?",
        de: "Was ist die primäre Funktion des Proteasoms in der Proteinqualitätskontrolle?",
        nl: "Wat is de primaire functie van het proteasoom in eiwitwaliteitcontrole?"
      },
      options: [
        { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitsynthese" },
        { en: "Degradation of ubiquitinated proteins", es: "Degradación de proteínas ubiquitinadas", de: "Abbau ubiquitinierter Proteine", nl: "Afbraak van geubiquitineerde eiwitten" },
        { en: "Protein folding assistance", es: "Asistencia en plegamiento de proteínas", de: "Proteinfaltungsassistenz", nl: "Eiwitvouwingsassistentie" },
        { en: "Protein transport", es: "Transporte de proteínas", de: "Proteintransport", nl: "Eiwittransport" }
      ],
      correct: 1,
      explanation: {
        en: "The 26S proteasome is a multi-subunit complex that degrades proteins tagged with ubiquitin chains, serving as the cell's primary mechanism for controlled protein degradation and maintaining proteostasis by removing misfolded or damaged proteins.",
        es: "El proteasoma 26S es un complejo multi-subunidad que degrada proteínas marcadas con cadenas de ubiquitina, sirviendo como el mecanismo primario de la célula para degradación controlada de proteínas y mantenimiento de proteostasis al eliminar proteínas mal plegadas o dañadas.",
        de: "Das 26S-Proteasom ist ein Multi-Untereinheiten-Komplex, der mit Ubiquitinketten markierte Proteine abbauen, als primärer Mechanismus der Zelle für kontrollierten Proteinabbau dient und Proteostase durch Entfernung falsch gefalteter oder beschädigter Proteine aufrechterhält.",
        nl: "Het 26S-proteasoom is een multi-subeenheid complex dat eiwitten afbreekt die gemarkeerd zijn met ubiquitineketens, dienend als het primaire mechanisme van de cel voor gecontroleerde eiwitafbraak en handhaving van proteostase door het verwijderen van verkeerd gevouwen of beschadigde eiwitten."
      }
    },
    {
      question: {
        en: "Which mechanism allows for DNA repair of double-strand breaks through homologous recombination?",
        es: "¿Qué mecanismo permite la reparación del ADN de roturas de doble cadena a través de recombinación homóloga?",
        de: "Welcher Mechanismus ermöglicht DNA-Reparatur von Doppelstrangbrüchen durch homologe Rekombination?",
        nl: "Welk mechanisme maakt DNA-reparatie van dubbelstrengsbreuken mogelijk door homologe recombinatie?"
      },
      options: [
        { en: "Non-homologous end joining (NHEJ)", es: "Unión de extremos no homólogos (NHEJ)", de: "Nicht-homologe Endverknüpfung (NHEJ)", nl: "Niet-homologe uiteinde verbinding (NHEJ)" },
        { en: "Base excision repair", es: "Reparación por escisión de bases", de: "Basenexzisionsreparatur", nl: "Base-excisie reparatie" },
        { en: "RAD51-mediated strand invasion", es: "Invasión de cadena mediada por RAD51", de: "RAD51-vermittelte Stranginvasion", nl: "RAD51-gemedieerde strenginvasie" },
        { en: "Mismatch repair", es: "Reparación de desemparejamiento", de: "Mismatch-Reparatur", nl: "Mismatch-reparatie" }
      ],
      correct: 2,
      explanation: {
        en: "RAD51 protein forms nucleoprotein filaments on single-stranded DNA that facilitate homology search and strand invasion into homologous DNA templates, enabling high-fidelity repair of double-strand breaks through homologous recombination.",
        es: "La proteína RAD51 forma filamentos nucleoproteicos en ADN de cadena sencilla que facilitan la búsqueda de homología e invasión de cadena en plantillas de ADN homólogos, permitiendo reparación de alta fidelidad de roturas de doble cadena a través de recombinación homóloga.",
        de: "RAD51-Protein bildet Nukleoproteinfliamente auf einzelsträngiger DNA, die Homologiesuche und Stranginvasion in homologe DNA-Templates ermöglichen und hochspezifische Reparatur von Doppelstrangbrüchen durch homologe Rekombination ermöglichen.",
        nl: "RAD51-eiwit vormt nucleoproteïnefilamenten op enkelstrengs-DNA die homologiezoektocht en strenginvasie in homologe DNA-templates faciliteren, waardoor hoge-fideliteit reparatie van dubbelstrengsbreuken door homologe recombinatie mogelijk wordt."
      }
    },
    {
      question: {
        en: "What is the molecular basis of immunological memory in adaptive immunity?",
        es: "¿Cuál es la base molecular de la memoria inmunológica en inmunidad adaptativa?",
        de: "Was ist die molekulare Basis des immunologischen Gedächtnisses in der adaptiven Immunität?",
        nl: "Wat is de moleculaire basis van immunologisch geheugen in adaptieve immuniteit?"
      },
      options: [
        { en: "Long-lived memory B and T cells with rapid response capacity", es: "Células B y T de memoria de larga duración con capacidad de respuesta rápida", de: "Langlebige Gedächtnis-B- und T-Zellen mit schneller Reaktionsfähigkeit", nl: "Langlevende geheugen-B- en T-cellen met snelle responscapaciteit" },
        { en: "Permanent DNA modifications", es: "Modificaciones permanentes del ADN", de: "Permanente DNA-Modifikationen", nl: "Permanente DNA-modificaties" },
        { en: "Antibody storage in tissues", es: "Almacenamiento de anticuerpos en tejidos", de: "Antikörperspeicherung in Geweben", nl: "Antilichaamopslag in weefsels" },
        { en: "Inherited immune responses", es: "Respuestas inmunes heredadas", de: "Vererbte Immunantworten", nl: "Geërfde immuunresponsen" }
      ],
      correct: 0,
      explanation: {
        en: "Immunological memory is mediated by long-lived memory B and T cells that persist after initial antigen exposure, maintaining the ability to rapidly differentiate into effector cells upon re-encounter with the same antigen, providing faster and stronger secondary responses.",
        es: "La memoria inmunológica está mediada por células B y T de memoria de larga duración que persisten después de la exposición inicial al antígeno, manteniendo la capacidad de diferenciarse rápidamente en células efectoras al re-encontrar el mismo antígeno, proporcionando respuestas secundarias más rápidas y fuertes.",
        de: "Immunologisches Gedächtnis wird durch langlebige Gedächtnis-B- und T-Zellen vermittelt, die nach initialer Antigenexposition bestehen bleiben, die Fähigkeit zur schnellen Differenzierung in Effektorzellen bei erneutem Antigen-Kontakt beibehalten und schnellere und stärkere Sekundärantworten ermöglichen.",
        nl: "Immunologisch geheugen wordt gemedieerd door langlevende geheugen-B- en T-cellen die persisteren na initiële antigeenblootstelling, waarbij ze het vermogen behouden om snel te differentiëren naar effectorcellen bij hernieuwde ontmoeting met hetzelfde antigeen, wat snellere en sterkere secundaire responsen biedt."
      }
    },
    {
      question: {
        en: "Which molecular mechanism underlies the phenomenon of RNA editing?",
        es: "¿Qué mecanismo molecular subyace al fenómeno de edición de ARN?",
        de: "Welcher molekulare Mechanismus liegt dem Phänomen der RNA-Editierung zugrunde?",
        nl: "Welk moleculair mechanisme ligt ten grondslag aan het fenomeen van RNA-editie?"
      },
      options: [
        { en: "Base modification by specific enzymes", es: "Modificación de bases por enzimas específicas", de: "Basenmodifikation durch spezifische Enzyme", nl: "Basemodificatie door specifieke enzymen" },
        { en: "Alternative splicing", es: "Empalme alternativo", de: "Alternatives Splicing", nl: "Alternatieve splicing" },
        { en: "DNA methylation", es: "Metilación del ADN", de: "DNA-Methylierung", nl: "DNA-methylering" },
        { en: "Ribosomal frameshifting", es: "Cambio de marco ribosomal", de: "Ribosomale Frameshift", nl: "Ribosomale frameshift" }
      ],
      correct: 0,
      explanation: {
        en: "RNA editing involves post-transcriptional base modifications, primarily C-to-U editing by APOBEC enzymes and A-to-I editing by ADAR enzymes, which can change the amino acid sequence of the resulting protein and create functional diversity.",
        es: "La edición de ARN involucra modificaciones post-transcripcionales de bases, principalmente edición C-a-U por enzimas APOBEC y edición A-a-I por enzimas ADAR, que pueden cambiar la secuencia de aminoácidos de la proteína resultante y crear diversidad funcional.",
        de: "RNA-Editierung beinhaltet post-transkriptionale Basenmodifikationen, hauptsächlich C-zu-U-Editierung durch APOBEC-Enzyme und A-zu-I-Editierung durch ADAR-Enzyme, die die Aminosäuresequenz des resultierenden Proteins ändern und funktionale Vielfalt schaffen können.",
        nl: "RNA-editie behelst post-transcriptionele basemodificaties, voornamelijk C-naar-U-editie door APOBEC-enzymen en A-naar-I-editie door ADAR-enzymen, die de aminozuursequentie van het resulterende eiwit kunnen veranderen en functionele diversiteit creëren."
      }
    },
    {
      question: {
        en: "What is the primary mechanism by which oncogenes promote cancer development?",
        es: "¿Cuál es el mecanismo principal por el cual los oncogenes promueven el desarrollo del cáncer?",
        de: "Was ist der primäre Mechanismus, durch den Onkogene die Krebsentwicklung fördern?",
        nl: "Wat is het primaire mechanisme waarmee oncogenen kankerontwikkeling bevorderen?"
      },
      options: [
        { en: "Inhibit cell division", es: "Inhiben la división celular", de: "Hemmen Zellteilung", nl: "Remmen celdeling" },
        { en: "Promote uncontrolled cell proliferation", es: "Promueven proliferación celular descontrolada", de: "Fördern unkontrollierte Zellproliferation", nl: "Bevorderen ongecontroleerde celproliferatie" },
        { en: "Enhance DNA repair", es: "Mejoran la reparación del ADN", de: "Verbessern DNA-Reparatur", nl: "Verbeteren DNA-reparatie" },
        { en: "Trigger immediate apoptosis", es: "Desencadenan apoptosis inmediata", de: "Lösen sofortige Apoptose aus", nl: "Triggeren onmiddellijke apoptose" }
      ],
      correct: 1,
      explanation: {
        en: "Oncogenes are mutated or overexpressed versions of normal proto-oncogenes that promote cell division. When activated, they drive uncontrolled cell proliferation by stimulating growth signals, inhibiting growth inhibitory signals, or promoting cell survival pathways.",
        es: "Los oncogenes son versiones mutadas o sobreexpresadas de proto-oncogenes normales que promueven la división celular. Cuando se activan, impulsan la proliferación celular descontrolada estimulando señales de crecimiento, inhibiendo señales inhibitorias de crecimiento, o promoviendo vías de supervivencia celular.",
        de: "Onkogene sind mutierte oder überexprimierte Versionen normaler Proto-Onkogene, die Zellteilung fördern. Wenn aktiviert, treiben sie unkontrollierte Zellproliferation an, indem sie Wachstumssignale stimulieren, wachstumsinhibitorische Signale hemmen oder Zellüberlebenswege fördern.",
        nl: "Oncogenen zijn gemuteerde of overgeëxpresseerde versies van normale proto-oncogenen die celdeling bevorderen. Wanneer geactiveerd, drijven ze ongecontroleerde celproliferatie aan door groeisignalen te stimuleren, groeiremmende signalen te inhiberen, of celoverlevingspaden te bevorderen."
      }
    },
    {
      question: {
        en: "Which cellular process is responsible for the elimination of damaged mitochondria?",
        es: "¿Qué proceso celular es responsable de la eliminación de mitocondrias dañadas?",
        de: "Welcher zelluläre Prozess ist für die Eliminierung beschädigter Mitochondrien verantwortlich?",
        nl: "Welk cellulair proces is verantwoordelijk voor de eliminatie van beschadigde mitochondriën?"
      },
      options: [
        { en: "General autophagy", es: "Autofagia general", de: "Allgemeine Autophagie", nl: "Algemene autofagie" },
        { en: "Mitophagy", es: "Mitofagia", de: "Mitophagie", nl: "Mitofagie" },
        { en: "Apoptosis", es: "Apoptosis", de: "Apoptose", nl: "Apoptose" },
        { en: "Necrosis", es: "Necrosis", de: "Nekrose", nl: "Necrose" }
      ],
      correct: 1,
      explanation: {
        en: "Mitophagy is a selective autophagy process that specifically targets damaged or dysfunctional mitochondria for degradation. It involves PINK1 and Parkin proteins that mark damaged mitochondria for autophagic removal, maintaining mitochondrial quality control.",
        es: "La mitofagia es un proceso de autofagia selectiva que específicamente apunta a mitocondrias dañadas o disfuncionales para degradación. Involucra proteínas PINK1 y Parkin que marcan mitocondrias dañadas para eliminación autofágica, manteniendo el control de calidad mitocondrial.",
        de: "Mitophagie ist ein selektiver Autophagie-Prozess, der spezifisch beschädigte oder dysfunktionale Mitochondrien zur Degradation anvisiert. Es beinhaltet PINK1- und Parkin-Proteine, die beschädigte Mitochondrien für autophagische Entfernung markieren und mitochondriale Qualitätskontrolle aufrechterhalten.",
        nl: "Mitofagie is een selectief autofagie-proces dat specifiek beschadigde of dysfunctionele mitochondriën richt voor degradatie. Het behelst PINK1- en Parkin-eiwitten die beschadigde mitochondriën markeren voor autofagische verwijdering, waarbij mitochondriale kwaliteitscontrole wordt gehandhaafd."
      }
    },
    {
      question: {
        en: "What is the molecular mechanism of action of CRISPR interference (CRISPRi)?",
        es: "¿Cuál es el mecanismo de acción molecular de la interferencia CRISPR (CRISPRi)?",
        de: "Was ist der molekulare Wirkungsmechanismus der CRISPR-Interferenz (CRISPRi)?",
        nl: "Wat is het moleculaire werkingsmechanisme van CRISPR-interferentie (CRISPRi)?"
      },
      options: [
        { en: "Cuts DNA to knockout genes", es: "Corta ADN para eliminar genes", de: "Schneidet DNA zum Gen-Knockout", nl: "Knipt DNA om genen uit te schakelen" },
        { en: "Blocks transcription through catalytically inactive Cas9", es: "Bloquea transcripción a través de Cas9 catalíticamente inactivo", de: "Blockiert Transkription durch katalytisch inaktive Cas9", nl: "Blokkeert transcriptie door katalytisch inactieve Cas9" },
        { en: "Enhances gene expression", es: "Mejora la expresión génica", de: "Verstärkt Genexpression", nl: "Versterkt genexpressie" },
        { en: "Repairs mutated genes", es: "Repara genes mutados", de: "Repariert mutierte Gene", nl: "Repareert gemuteerde genen" }
      ],
      correct: 1,
      explanation: {
        en: "CRISPRi uses a catalytically inactive Cas9 (dCas9) guided by gRNA to bind to target DNA sequences without cutting, physically blocking RNA polymerase access and inhibiting transcription, providing a reversible method for gene silencing.",
        es: "CRISPRi usa un Cas9 catalíticamente inactivo (dCas9) guiado por gRNA para unirse a secuencias objetivo de ADN sin cortar, bloqueando físicamente el acceso de ARN polimerasa e inhibiendo la transcripción, proporcionando un método reversible para silenciamiento génico.",
        de: "CRISPRi verwendet eine katalytisch inaktive Cas9 (dCas9), die durch gRNA geleitet wird, um an Ziel-DNA-Sequenzen zu binden ohne zu schneiden, blockiert physisch RNA-Polymerase-Zugang und hemmt Transkription, wodurch eine reversible Methode für Gen-Silencing bereitgestellt wird.",
        nl: "CRISPRi gebruikt een katalytisch inactieve Cas9 (dCas9) geleid door gRNA om te binden aan doel-DNA-sequenties zonder te knippen, blokkeert fysiek RNA-polymerase toegang en remt transcriptie, wat een omkeerbare methode biedt voor gen-silencing."
      }
    },
    {
      question: {
        en: "Which molecular pathway regulates circadian rhythms at the cellular level?",
        es: "¿Qué vía molecular regula los ritmos circadianos a nivel celular?",
        de: "Welcher molekulare Pathway reguliert zirkadiane Rhythmen auf zellulärer Ebene?",
        nl: "Welke moleculaire pathway reguleert circadiane ritmes op cellulair niveau?"
      },
      options: [
        { en: "CLOCK-BMAL1 transcriptional feedback loop", es: "Bucle de retroalimentación transcripcional CLOCK-BMAL1", de: "CLOCK-BMAL1 transkriptionale Rückkopplungsschleife", nl: "CLOCK-BMAL1 transcriptionele terugkoppelingsloop" },
        { en: "p53-MDM2 pathway", es: "Vía p53-MDM2", de: "p53-MDM2-Pathway", nl: "p53-MDM2-pathway" },
        { en: "mTOR signaling", es: "Señalización mTOR", de: "mTOR-Signaling", nl: "mTOR-signalering" },
        { en: "Wnt/β-catenin pathway", es: "Vía Wnt/β-catenina", de: "Wnt/β-Catenin-Pathway", nl: "Wnt/β-catenine-pathway" }
      ],
      correct: 0,
      explanation: {
        en: "Circadian rhythms are driven by a transcriptional-translational feedback loop where CLOCK-BMAL1 heterodimers activate transcription of Period (PER) and Cryptochrome (CRY) genes, whose protein products then inhibit CLOCK-BMAL1 activity, creating oscillatory gene expression.",
        es: "Los ritmos circadianos están impulsados por un bucle de retroalimentación transcripcional-traduccional donde heterodímeros CLOCK-BMAL1 activan la transcripción de genes Period (PER) y Cryptochrome (CRY), cuyos productos proteicos luego inhiben la actividad CLOCK-BMAL1, creando expresión génica oscilatoria.",
        de: "Zirkadiane Rhythmen werden durch eine transkriptional-translationale Rückkopplungsschleife angetrieben, wo CLOCK-BMAL1-Heterodimere die Transkription von Period (PER)- und Cryptochrome (CRY)-Genen aktivieren, deren Proteinprodukte dann CLOCK-BMAL1-Aktivität hemmen und oszillatorische Genexpression schaffen.",
        nl: "Circadiane ritmes worden gedreven door een transcriptioneel-translationele terugkoppelingsloop waar CLOCK-BMAL1-heterodimeren transcriptie van Period (PER)- en Cryptochrome (CRY)-genen activeren, waarvan de eiwitproducten vervolgens CLOCK-BMAL1-activiteit remmen, wat oscillatorische genexpressie creëert."
      }
    },
    {
      question: {
        en: "What is the primary molecular mechanism of enzymatic catalysis?",
        es: "¿Cuál es el mecanismo molecular principal de la catálisis enzimática?",
        de: "Was ist der primäre molekulare Mechanismus der enzymatischen Katalyse?",
        nl: "Wat is het primaire moleculaire mechanisme van enzymatische katalyse?"
      },
      options: [
        { en: "Increasing reaction temperature", es: "Aumentando la temperatura de reacción", de: "Erhöhung der Reaktionstemperatur", nl: "Verhogen van reactietemperatuur" },
        { en: "Lowering activation energy through transition state stabilization", es: "Reduciendo energía de activación a través de estabilización del estado de transición", de: "Senkung der Aktivierungsenergie durch Übergangszustandsstabilisierung", nl: "Verlagen van activeringsenergie door overgangstoestand-stabilisatie" },
        { en: "Adding more substrate", es: "Agregando más sustrato", de: "Hinzufügen von mehr Substrat", nl: "Toevoegen van meer substraat" },
        { en: "Changing reaction pH only", es: "Cambiando solo el pH de reacción", de: "Nur Reaktions-pH ändern", nl: "Alleen reactie-pH veranderen" }
      ],
      correct: 1,
      explanation: {
        en: "Enzymes accelerate reactions by lowering the activation energy required for the reaction to proceed. They achieve this by stabilizing the transition state, making it easier for substrates to reach the activated complex and form products.",
        es: "Las enzimas aceleran reacciones reduciendo la energía de activación requerida para que la reacción proceda. Logran esto estabilizando el estado de transición, facilitando que los sustratos alcancen el complejo activado y formen productos.",
        de: "Enzyme beschleunigen Reaktionen, indem sie die für den Reaktionsverlauf erforderliche Aktivierungsenergie senken. Sie erreichen dies durch Stabilisierung des Übergangszustands, wodurch es für Substrate einfacher wird, den aktivierten Komplex zu erreichen und Produkte zu bilden.",
        nl: "Enzymen versnellen reacties door de activeringsenergie die nodig is voor de reactie te verlagen. Ze bereiken dit door de overgangstoestand te stabiliseren, waardoor het gemakkelijker wordt voor substraten om het geactiveerde complex te bereiken en producten te vormen."
      }
    },
    {
      question: {
        en: "Which mechanism allows certain viruses to integrate their genetic material into the host genome?",
        es: "¿Qué mecanismo permite a ciertos virus integrar su material genético en el genoma del huésped?",
        de: "Welcher Mechanismus ermöglicht es bestimmten Viren, ihr genetisches Material in das Wirtsgenom zu integrieren?",
        nl: "Welk mechanisme maakt het mogelijk dat bepaalde virussen hun genetisch materiaal integreren in het gastheergenoom?"
      },
      options: [
        { en: "Direct membrane fusion", es: "Fusión directa de membrana", de: "Direkte Membranfusion", nl: "Directe membraanfusie" },
        { en: "Reverse transcription and integrase activity", es: "Transcripción inversa y actividad integrasa", de: "Reverse Transkription und Integrase-Aktivität", nl: "Reverse transcriptie en integrase-activiteit" },
        { en: "Host cell division", es: "División de célula huésped", de: "Wirtszell-Teilung", nl: "Gastheercel deling" },
        { en: "Protein synthesis inhibition", es: "Inhibición de síntesis de proteínas", de: "Proteinsynthese-Hemmung", nl: "Eiwitsynthese-remming" }
      ],
      correct: 1,
      explanation: {
        en: "Retroviruses like HIV use reverse transcriptase to synthesize DNA from their RNA genome, then employ integrase enzyme to insert this proviral DNA into the host cell's chromosome, establishing persistent infection and allowing viral replication with host cell division.",
        es: "Los retrovirus como VIH usan transcriptasa inversa para sintetizar ADN de su genoma ARN, luego emplean la enzima integrasa para insertar este ADN proviral en el cromosoma de la célula huésped, estableciendo infección persistente y permitiendo replicación viral con división celular del huésped.",
        de: "Retroviren wie HIV nutzen Reverse Transkriptase zur DNA-Synthese aus ihrem RNA-Genom, verwenden dann Integrase-Enzym zur Insertion dieser proviralen DNA in das Chromosom der Wirtszelle, etablieren persistente Infektion und ermöglichen virale Replikation mit Wirtszellteilung.",
        nl: "Retrovirussen zoals HIV gebruiken reverse transcriptase om DNA te synthetiseren uit hun RNA-genoom, gebruiken vervolgens integrase-enzym om dit provirale DNA in het chromosoom van de gastheercel in te voegen, waardoor persistente infectie wordt gevestigd en virale replicatie mogelijk wordt met gastheercel deling."
      }
    },
    {
      question: {
        en: "What is the molecular basis of epigenetic inheritance across generations?",
        es: "¿Cuál es la base molecular de la herencia epigenética a través de generaciones?",
        de: "Was ist die molekulare Basis der epigenetischen Vererbung über Generationen?",
        nl: "Wat is de moleculaire basis van epigenetische overerving over generaties?"
      },
      options: [
        { en: "DNA sequence mutations", es: "Mutaciones de secuencia de ADN", de: "DNA-Sequenzmutationen", nl: "DNA-sequentiemutaties" },
        { en: "Maintenance of DNA methylation and histone modifications", es: "Mantenimiento de metilación del ADN y modificaciones de histonas", de: "Aufrechterhaltung von DNA-Methylierung und Histonmodifikationen", nl: "Handhaving van DNA-methylering en histonmodificaties" },
        { en: "Chromosomal rearrangements", es: "Reordenamientos cromosómicos", de: "Chromosomale Umordnungen", nl: "Chromosomale herrangschikkingen" },
        { en: "Protein degradation", es: "Degradación de proteínas", de: "Proteinabbau", nl: "Eiwitafbraak" }
      ],
      correct: 1,
      explanation: {
        en: "Epigenetic inheritance involves the transmission of chromatin modifications (DNA methylation, histone modifications) through cell divisions and sometimes across generations. DNA methyltransferases and chromatin-modifying enzymes maintain these marks during replication and meiosis.",
        es: "La herencia epigenética involucra la transmisión de modificaciones de cromatina (metilación del ADN, modificaciones de histonas) a través de divisiones celulares y a veces a través de generaciones. Las metiltransferasas de ADN y enzimas modificadoras de cromatina mantienen estas marcas durante replicación y meiosis.",
        de: "Epigenetische Vererbung beinhaltet die Übertragung von Chromatinmodifikationen (DNA-Methylierung, Histonmodifikationen) durch Zellteilungen und manchmal über Generationen. DNA-Methyltransferasen und chromatin-modifizierende Enzyme erhalten diese Markierungen während Replikation und Meiose aufrecht.",
        nl: "Epigenetische overerving behelst de overdracht van chromatinemodificaties (DNA-methylering, histonmodificaties) door celdelingen en soms over generaties. DNA-methyltransferases en chromatine-modificerende enzymen handhaven deze markeringen tijdens replicatie en meiose."
      },
    {
      question: {
        en: "What is the mechanism of CRISPR-mediated genome editing and its therapeutic applications?",
        es: "¿Cuál es el mecanismo de la edición genómica mediada por CRISPR y sus aplicaciones terapéuticas?",
        de: "Was ist der Mechanismus der CRISPR-vermittelten Genombearbeitung und ihre therapeutischen Anwendungen?",
        nl: "Wat is het mechanisme van CRISPR-gemedieerde genoom bewerking en zijn therapeutische toepassingen?"
      },
      options: [
        { en: "gRNA guides Cas proteins to specific DNA sequences for precise double-strand breaks enabling targeted gene therapy", es: "gARN guía proteínas Cas a secuencias específicas de ADN para rupturas precisas de doble cadena permitiendo terapia génica dirigida", de: "gRNA lenkt Cas-Proteine zu spezifischen DNA-Sequenzen für präzise Doppelstrangbrüche, die gezielte Gentherapie ermöglichen", nl: "gRNA stuurt Cas eiwitten naar specifieke DNA sequenties voor precieze dubbelstreng breuken die gerichte gentherapie mogelijk maken" },
        { en: "Only works in bacterial cells", es: "Solo funciona en células bacterianas", de: "Funktioniert nur in bakteriellen Zellen", nl: "Werkt alleen in bacteriële cellen" },
        { en: "Cannot repair genetic defects", es: "No puede reparar defectos genéticos", de: "Kann genetische Defekte nicht reparieren", nl: "Kan genetische defecten niet repareren" },
        { en: "Only degrades RNA molecules", es: "Solo degrada moléculas de ARN", de: "Baut nur RNA-Moleküle ab", nl: "Breekt alleen RNA moleculen af" }
      ],
      correct: 0,
      explanation: {
        en: "CRISPR-Cas9 uses guide RNA to direct Cas9 nuclease to specific genomic loci, creating precise double-strand breaks. Cellular repair mechanisms then either insert new genetic material (homology-directed repair) or create targeted deletions (non-homologous end joining), enabling treatment of genetic diseases, cancer, and inherited disorders.",
        es: "CRISPR-Cas9 usa ARN guía para dirigir la nucleasa Cas9 a loci genómicos específicos, creando rupturas precisas de doble cadena. Los mecanismos de reparación celular entonces insertan nuevo material genético (reparación dirigida por homología) o crean deleciones dirigidas (unión de extremos no homólogos), permitiendo tratamiento de enfermedades genéticas, cáncer y trastornos heredados.",
        de: "CRISPR-Cas9 nutzt Guide-RNA zur Lenkung der Cas9-Nuklease zu spezifischen genomischen Loci und erzeugt präzise Doppelstrangbrüche. Zelluläre Reparaturmechanismen fügen dann entweder neues genetisches Material ein (homologie-gerichtete Reparatur) oder erzeugen gezielte Deletionen (nicht-homologe Endverknüpfung), ermöglicht Behandlung genetischer Krankheiten, Krebs und Erbkrankheiten.",
        nl: "CRISPR-Cas9 gebruikt gids-RNA om Cas9 nuclease te sturen naar specifieke genomische loci, creërend precieze dubbelstreng breuken. Cellulaire reparatie mechanismen voegen dan nieuw genetisch materiaal in (homologie-gerichte reparatie) of creëren gerichte deleties (niet-homologe eind-joining), mogelijk maken behandeling van genetische ziektes, kanker en erfelijke aandoeningen."
      }
    },
    {
      question: {
        en: "How do induced pluripotent stem cells (iPSCs) revolutionize regenerative medicine?",
        es: "¿Cómo revolucionan las células madre pluripotentes inducidas (iPSCs) la medicina regenerativa?",
        de: "Wie revolutionieren induzierte pluripotente Stammzellen (iPSCs) die regenerative Medizin?",
        nl: "Hoe revolutioneren geïnduceerde pluripotente stamcellen (iPSCs) regeneratieve geneeskunde?"
      },
      options: [
        { en: "Reprogramming adult cells to pluripotency using transcription factors enables patient-specific therapeutic cells", es: "Reprogramar células adultas a pluripotencia usando factores de transcripción permite células terapéuticas específicas del paciente", de: "Reprogrammierung adulter Zellen zur Pluripotenz mit Transkriptionsfaktoren ermöglicht patientenspezifische therapeutische Zellen", nl: "Herprogrammeren van volwassen cellen tot pluripotentie met transcriptiefactoren maakt patiënt-specifieke therapeutische cellen mogelijk" },
        { en: "Only derived from embryonic tissue", es: "Solo derivadas de tejido embrionario", de: "Nur aus embryonalem Gewebe abgeleitet", nl: "Alleen afgeleid van embryonaal weefsel" },
        { en: "Cannot differentiate into specific cell types", es: "No pueden diferenciarse en tipos celulares específicos", de: "Können nicht in spezifische Zelltypen differenzieren", nl: "Kunnen niet differentiëren in specifieke celtypen" },
        { en: "Have limited therapeutic potential", es: "Tienen potencial terapéutico limitado", de: "Haben begrenztes therapeutisches Potenzial", nl: "Hebben beperkt therapeutisch potentieel" }
      ],
      correct: 0,
      explanation: {
        en: "iPSCs are generated by introducing specific transcription factors (Oct4, Sox2, Klf4, c-Myc) into adult somatic cells, reprogramming them to an embryonic-like pluripotent state. These cells can differentiate into any cell type, offering personalized regenerative therapies without immune rejection and ethical concerns of embryonic stem cells.",
        es: "Las iPSCs se generan introduciendo factores de transcripción específicos (Oct4, Sox2, Klf4, c-Myc) en células somáticas adultas, reprogramándolas a un estado pluripotente similar al embrionario. Estas células pueden diferenciarse en cualquier tipo celular, ofreciendo terapias regenerativas personalizadas sin rechazo inmune y preocupaciones éticas de células madre embrionarias.",
        de: "iPSCs werden durch Einführung spezifischer Transkriptionsfaktoren (Oct4, Sox2, Klf4, c-Myc) in adulte somatische Zellen erzeugt und programmieren sie zu einem embryonalen-ähnlichen pluripotenten Zustand um. Diese Zellen können in jeden Zelltyp differenzieren und bieten personalisierte regenerative Therapien ohne Immunabstoßung und ethische Bedenken embryonaler Stammzellen.",
        nl: "iPSCs worden gegenereerd door specifieke transcriptiefactoren (Oct4, Sox2, Klf4, c-Myc) in volwassen somatische cellen te introduceren, ze herprogrammerend naar een embryonale-achtige pluripotente staat. Deze cellen kunnen differentiëren in elk celtype, biedend gepersonaliseerde regeneratieve therapieën zonder immuunafwijzing en ethische bezwaren van embryonale stamcellen."
      }
    },
    {
      question: {
        en: "What is the molecular basis of aging and cellular senescence?",
        es: "¿Cuál es la base molecular del envejecimiento y la senescencia celular?",
        de: "Was ist die molekulare Basis des Alterns und der zellulären Seneszenz?",
        nl: "Wat is de moleculaire basis van veroudering en cellulaire senescentie?"
      },
      options: [
        { en: "Telomere shortening, oxidative damage, protein aggregation, and mitochondrial dysfunction drive cellular aging", es: "Acortamiento de telómeros, daño oxidativo, agregación de proteínas y disfunción mitocondrial impulsan el envejecimiento celular", de: "Telomerverkürzung, oxidative Schäden, Proteinaggregation und mitochondriale Dysfunktion treiben zelluläres Altern an", nl: "Telomeer verkorting, oxidatieve schade, eiwit aggregatie en mitochondriale disfunctie drijven cellulaire veroudering aan" },
        { en: "Only genetic mutations cause aging", es: "Solo las mutaciones genéticas causan envejecimiento", de: "Nur genetische Mutationen verursachen Alterung", nl: "Alleen genetische mutaties veroorzaken veroudering" },
        { en: "Aging is purely environmental", es: "El envejecimiento es puramente ambiental", de: "Altern ist rein umweltbedingt", nl: "Veroudering is puur omgevingsgebonden" },
        { en: "Cell division always prevents aging", es: "La división celular siempre previene el envejecimiento", de: "Zellteilung verhindert immer Alterung", nl: "Celdeling voorkomt altijd veroudering" }
      ],
      correct: 0,
      explanation: {
        en: "Aging involves multiple interconnected mechanisms including telomere erosion limiting replicative capacity, accumulation of oxidative damage from reactive oxygen species, protein misfolding and aggregation, mitochondrial dysfunction reducing ATP production, and cellular senescence where cells stop dividing but remain metabolically active, secreting inflammatory factors.",
        es: "El envejecimiento involucra múltiples mecanismos interconectados incluyendo erosión de telómeros limitando capacidad replicativa, acumulación de daño oxidativo de especies reactivas de oxígeno, mal plegamiento y agregación de proteínas, disfunción mitocondrial reduciendo producción de ATP, y senescencia celular donde células dejan de dividirse pero permanecen metabólicamente activas, secretando factores inflamatorios.",
        de: "Altern beinhaltet mehrere vernetzte Mechanismen einschließlich Telomererosion, die replikative Kapazität begrenzt, Akkumulation oxidativer Schäden durch reaktive Sauerstoffspezies, Proteinfehlfaltung und -aggregation, mitochondriale Dysfunktion, die ATP-Produktion reduziert, und zelluläre Seneszenz, wo Zellen aufhören sich zu teilen, aber metabolisch aktiv bleiben und entzündliche Faktoren sezernieren.",
        nl: "Veroudering behelst meerdere onderling verbonden mechanismen inclusief telomeer erosie die replicatieve capaciteit beperkt, accumulatie van oxidatieve schade van reactieve zuurstof species, eiwit verkeerde vouwing en aggregatie, mitochondriale disfunctie die ATP productie vermindert, en cellulaire senescentie waar cellen stoppen met delen maar metabolisch actief blijven, inflammatoire factoren uitscheidend."
      }
    },
    {
      question: {
        en: "How do cancer stem cells contribute to tumor progression and treatment resistance?",
        es: "¿Cómo contribuyen las células madre cancerosas a la progresión tumoral y resistencia al tratamiento?",
        de: "Wie tragen Krebsstammzellen zur Tumorprogression und Behandlungsresistenz bei?",
        nl: "Hoe dragen kanker stamcellen bij aan tumor progressie en behandelingsresistentie?"
      },
      options: [
        { en: "Self-renewal, differentiation capacity, enhanced DNA repair, and drug efflux mechanisms enable tumor initiation and recurrence", es: "Autorenovación, capacidad de diferenciación, reparación mejorada de ADN y mecanismos de eflujo de fármacos permiten iniciación tumoral y recurrencia", de: "Selbsterneuerung, Differenzierungskapazität, verstärkte DNA-Reparatur und Arzneimittel-Efflux-Mechanismen ermöglichen Tumorinitiierung und Rezidiv", nl: "Zelfvernieuwing, differentiatie capaciteit, verbeterde DNA reparatie en medicijn efflux mechanismen maken tumor initiatie en recidief mogelijk" },
        { en: "Only normal cells can form tumors", es: "Solo células normales pueden formar tumores", de: "Nur normale Zellen können Tumoren bilden", nl: "Alleen normale cellen kunnen tumoren vormen" },
        { en: "Cancer stem cells are always sensitive to chemotherapy", es: "Las células madre cancerosas siempre son sensibles a quimioterapia", de: "Krebsstammzellen sind immer empfindlich für Chemotherapie", nl: "Kanker stamcellen zijn altijd gevoelig voor chemotherapie" },
        { en: "They cannot metastasize", es: "No pueden hacer metástasis", de: "Sie können nicht metastasieren", nl: "Ze kunnen niet metastaseren" }
      ],
      correct: 0,
      explanation: {
        en: "Cancer stem cells possess stem-like properties including self-renewal, multipotent differentiation, enhanced DNA repair mechanisms, overexpression of drug efflux pumps, and resistance to apoptosis. These characteristics enable them to survive treatments that eliminate bulk tumor cells, drive metastasis, and cause tumor recurrence after therapy.",
        es: "Las células madre cancerosas poseen propiedades similares a células madre incluyendo autorenovación, diferenciación multipotente, mecanismos mejorados de reparación de ADN, sobreexpresión de bombas de eflujo de fármacos y resistencia a apoptosis. Estas características les permiten sobrevivir tratamientos que eliminan células tumorales principales, impulsar metástasis y causar recurrencia tumoral después de terapia.",
        de: "Krebsstammzellen besitzen stammzellähnliche Eigenschaften einschließlich Selbsterneuerung, multipotenter Differenzierung, verstärkter DNA-Reparaturmechanismen, Überexpression von Arzneimittel-Efflux-Pumpen und Resistenz gegen Apoptose. Diese Eigenschaften ermöglichen es ihnen, Behandlungen zu überleben, die Haupttumorzellen eliminieren, Metastasierung anzutreiben und Tumorrezidiv nach Therapie zu verursachen.",
        nl: "Kanker stamcellen bezitten stamcel-achtige eigenschappen inclusief zelfvernieuwing, multipotente differentiatie, verbeterde DNA reparatie mechanismen, overexpressie van medicijn efflux pompen en resistentie tegen apoptose. Deze eigenschappen stellen ze in staat behandelingen te overleven die hoofd tumor cellen elimineren, metastase aan te drijven en tumor recidief na therapie te veroorzaken."
      }
    },
    {
      question: {
        en: "What is the role of liquid-liquid phase separation in cellular organization?",
        es: "¿Cuál es el papel de la separación de fases líquido-líquido en la organización celular?",
        de: "Was ist die Rolle der Flüssig-Flüssig-Phasentrennung in der zellulären Organisation?",
        nl: "Wat is de rol van vloeistof-vloeistof fase scheiding in cellulaire organisatie?"
      },
      options: [
        { en: "Forms membrane-less organelles and condensates that concentrate biomolecules for specific cellular functions", es: "Forma orgánulos sin membrana y condensados que concentran biomoléculas para funciones celulares específicas", de: "Bildet membranlose Organellen und Kondensate, die Biomoleküle für spezifische zelluläre Funktionen konzentrieren", nl: "Vormt membraan-loze organellen en condensaten die biomoleculen concentreren voor specifieke cellulaire functies" },
        { en: "Only occurs in diseased cells", es: "Solo ocurre en células enfermas", de: "Tritt nur in kranken Zellen auf", nl: "Komt alleen voor in zieke cellen" },
        { en: "Always requires membrane structures", es: "Siempre requiere estructuras de membrana", de: "Erfordert immer Membranstrukturen", nl: "Vereist altijd membraanstructuren" },
        { en: "Cannot be regulated by cells", es: "No puede ser regulado por células", de: "Kann nicht von Zellen reguliert werden", nl: "Kan niet gereguleerd worden door cellen" }
      ],
      correct: 0,
      explanation: {
        en: "Liquid-liquid phase separation creates dynamic, membrane-less compartments (biomolecular condensates) that organize cellular space and concentrate specific proteins, nucleic acids, and other molecules. Examples include stress granules, P-bodies, nucleoli, and transcriptional condensates, which facilitate specialized functions while maintaining cellular organization without requiring lipid membranes.",
        es: "La separación de fases líquido-líquido crea compartimientos dinámicos sin membrana (condensados biomoleculares) que organizan el espacio celular y concentran proteínas específicas, ácidos nucleicos y otras moléculas. Los ejemplos incluyen gránulos de estrés, cuerpos P, nucléolos y condensados transcripcionales, que facilitan funciones especializadas mientras mantienen organización celular sin requerir membranas lipídicas.",
        de: "Flüssig-Flüssig-Phasentrennung erzeugt dynamische, membranlose Kompartimente (biomolekulare Kondensate), die zellulären Raum organisieren und spezifische Proteine, Nukleinsäuren und andere Moleküle konzentrieren. Beispiele umfassen Stress-Granula, P-Bodies, Nukleoli und transkriptionelle Kondensate, die spezialisierte Funktionen erleichtern während zelluläre Organisation ohne Lipidmembranen erhalten bleibt.",
        nl: "Vloeistof-vloeistof fase scheiding creëert dynamische, membraan-loze compartimenten (biomoleculaire condensaten) die cellulaire ruimte organiseren en specifieke eiwitten, nucleïnezuren en andere moleculen concentreren. Voorbeelden zijn stress granules, P-bodies, nucleoli en transcriptionele condensaten, die gespecialiseerde functies faciliteren terwijl cellulaire organisatie wordt behouden zonder lipide membranen te vereisen."
      }
    },
    {
      question: {
        en: "How does the gut microbiome influence human health and disease?",
        es: "¿Cómo influye el microbioma intestinal en la salud humana y la enfermedad?",
        de: "Wie beeinflusst das Darmmikrobiom die menschliche Gesundheit und Krankheit?",
        nl: "Hoe beïnvloedt het darm microbioom menselijke gezondheid en ziekte?"
      },
      options: [
        { en: "Metabolite production, immune modulation, pathogen resistance, and gut-brain axis communication affect systemic physiology", es: "Producción de metabolitos, modulación inmune, resistencia a patógenos y comunicación del eje intestino-cerebro afectan fisiología sistémica", de: "Metabolitproduktion, Immunmodulation, Pathogenresistenz und Darm-Hirn-Achsen-Kommunikation beeinflussen systemische Physiologie", nl: "Metaboliet productie, immuun modulatie, pathogeen resistentie en darm-brein as communicatie beïnvloeden systemische fysiologie" },
        { en: "Only affects local intestinal function", es: "Solo afecta función intestinal local", de: "Betrifft nur lokale Darmfunktion", nl: "Beïnvloedt alleen lokale darmfunctie" },
        { en: "Has no impact on immunity", es: "No tiene impacto en inmunidad", de: "Hat keinen Einfluss auf Immunität", nl: "Heeft geen impact op immuniteit" },
        { en: "Cannot influence brain function", es: "No puede influenciar función cerebral", de: "Kann Gehirnfunktion nicht beeinflussen", nl: "Kan hersenfunctie niet beïnvloeden" }
      ],
      correct: 0,
      explanation: {
        en: "The gut microbiome produces essential metabolites (short-chain fatty acids, vitamins), trains the immune system, prevents pathogen colonization, and communicates with the brain via the gut-brain axis through neural, hormonal, and immune pathways. Dysbiosis is linked to inflammatory bowel disease, metabolic disorders, allergies, depression, and autoimmune conditions.",
        es: "El microbioma intestinal produce metabolitos esenciales (ácidos grasos de cadena corta, vitaminas), entrena el sistema inmune, previene colonización de patógenos y se comunica con el cerebro vía el eje intestino-cerebro a través de vías neurales, hormonales e inmunes. La disbiosis está vinculada a enfermedad inflamatoria intestinal, trastornos metabólicos, alergias, depresión y condiciones autoinmunes.",
        de: "Das Darmmikrobiom produziert essentielle Metaboliten (kurzkettige Fettsäuren, Vitamine), trainiert das Immunsystem, verhindert Pathogenkolonisation und kommuniziert mit dem Gehirn über die Darm-Hirn-Achse durch neurale, hormonelle und immune Wege. Dysbiose ist mit entzündlichen Darmerkrankungen, Stoffwechselstörungen, Allergien, Depression und Autoimmunerkrankungen verbunden.",
        nl: "Het darm microbioom produceert essentiële metabolieten (korte-keten vetzuren, vitamines), traint het immuunsysteem, voorkomt pathogeen kolonisatie en communiceert met de hersenen via de darm-brein as door neurale, hormonale en immuun routes. Dysbiose is gelinkt aan inflammatoire darmziekte, metabole aandoeningen, allergieën, depressie en auto-immuun condities."
      }
    },
    {
      question: {
        en: "What is the mechanism of optogenetics and its applications in neuroscience?",
        es: "¿Cuál es el mecanismo de la optogenética y sus aplicaciones en neurociencia?",
        de: "Was ist der Mechanismus der Optogenetik und ihre Anwendungen in der Neurowissenschaft?",
        nl: "Wat is het mechanisme van optogenetica en zijn toepassingen in de neurowetenschappen?"
      },
      options: [
        { en: "Light-activated ion channels control neuronal activity enabling precise spatiotemporal manipulation of neural circuits", es: "Canales iónicos activados por luz controlan actividad neuronal permitiendo manipulación espaciotemporal precisa de circuitos neurales", de: "Lichtaktivierte Ionenkanäle kontrollieren neuronale Aktivität und ermöglichen präzise räumlich-zeitliche Manipulation neuraler Schaltkreise", nl: "Licht-geactiveerde ionkanalen controleren neuronale activiteit mogelijk makend precieze ruimte-tijdelijke manipulatie van neurale circuits" },
        { en: "Only works in bacterial cells", es: "Solo funciona en células bacterianas", de: "Funktioniert nur in bakteriellen Zellen", nl: "Werkt alleen in bacteriële cellen" },
        { en: "Cannot control individual neurons", es: "No puede controlar neuronas individuales", de: "Kann einzelne Neuronen nicht kontrollieren", nl: "Kan individuele neuronen niet controleren" },
        { en: "Requires surgical electrode implantation", es: "Requiere implantación quirúrgica de electrodos", de: "Erfordert chirurgische Elektrodenimplantation", nl: "Vereist chirurgische elektrode implantatie" }
      ],
      correct: 0,
      explanation: {
        en: "Optogenetics uses genetically encoded, light-sensitive proteins (opsins like ChR2, NpHR) that function as ion channels or pumps. When exposed to specific wavelengths of light, these proteins rapidly depolarize or hyperpolarize neurons, allowing researchers to control neural activity with millisecond precision and study causal relationships between neural circuits and behavior.",
        es: "La optogenética usa proteínas sensibles a luz genéticamente codificadas (opsinas como ChR2, NpHR) que funcionan como canales iónicos o bombas. Cuando se exponen a longitudes de onda específicas de luz, estas proteínas despolarizen o hiperpolarizen neuronas rápidamente, permitiendo a investigadores controlar actividad neural con precisión de milisegundos y estudiar relaciones causales entre circuitos neurales y comportamiento.",
        de: "Optogenetik nutzt genetisch kodierte, lichtempfindliche Proteine (Opsine wie ChR2, NpHR), die als Ionenkanäle oder Pumpen funktionieren. Wenn spezifischen Lichtwellenlängen ausgesetzt, depolarisieren oder hyperpolarisieren diese Proteine Neuronen schnell und ermöglichen Forschern, neuronale Aktivität mit Millisekundenpräzision zu kontrollieren und kausale Beziehungen zwischen neuralen Schaltkreisen und Verhalten zu studieren.",
        nl: "Optogenetica gebruikt genetisch gecodeerde, lichtgevoelige eiwitten (opsines zoals ChR2, NpHR) die functioneren als ionkanalen of pompen. Wanneer blootgesteld aan specifieke golflengtes van licht, depolariseren of hyperpolariseren deze eiwitten neuronen snel, onderzoekers in staat stellend neurale activiteit te controleren met milliseconde precisie en causale relaties tussen neurale circuits en gedrag te bestuderen."
      }
    },
    {
      question: {
        en: "How do molecular chaperones prevent protein aggregation in neurodegenerative diseases?",
        es: "¿Cómo previenen las chaperonas moleculares la agregación de proteínas en enfermedades neurodegenerativas?",
        de: "Wie verhindern molekulare Chaperone Proteinaggregation bei neurodegenerativen Erkrankungen?",
        nl: "Hoe voorkomen moleculaire chaperonnes eiwit aggregatie in neurodegeneratieve ziekten?"
      },
      options: [
        { en: "Assist proper folding, prevent misfolding, disaggregate protein clumps, and target damaged proteins for degradation", es: "Asisten plegamiento adecuado, previenen mal plegamiento, desagregan grupos de proteínas y dirigen proteínas dañadas para degradación", de: "Unterstützen ordnungsgemäße Faltung, verhindern Fehlfaltung, disaggregieren Proteinverklumpungen und zielen beschädigte Proteine für Abbau", nl: "Assisteren juiste vouwing, voorkomen verkeerde vouwing, disaggregeren eiwit klompen en richten beschadigde eiwitten voor afbraak" },
        { en: "Only promote protein aggregation", es: "Solo promueven agregación de proteínas", de: "Fördern nur Proteinaggregation", nl: "Bevorderen alleen eiwit aggregatie" },
        { en: "Cannot function in neurons", es: "No pueden funcionar en neuronas", de: "Können in Neuronen nicht funktionieren", nl: "Kunnen niet functioneren in neuronen" },
        { en: "Are unrelated to disease progression", es: "No están relacionadas con progresión de enfermedad", de: "Sind nicht mit Krankheitsprogression verbunden", nl: "Zijn niet gerelateerd aan ziekte progressie" }
      ],
      correct: 0,
      explanation: {
        en: "Molecular chaperones like HSP70, HSP90, and chaperonins help maintain protein homeostasis by facilitating proper folding, preventing aggregation of disease proteins (amyloid-β, tau, α-synuclein), breaking up existing aggregates, and working with the ubiquitin-proteasome system to clear damaged proteins. Their dysfunction contributes to Alzheimer's, Parkinson's, and Huntington's diseases.",
        es: "Las chaperonas moleculares como HSP70, HSP90 y chaperoninas ayudan a mantener homeostasis proteica facilitando plegamiento adecuado, previniendo agregación de proteínas de enfermedad (amiloide-β, tau, α-sinucleína), rompiendo agregados existentes y trabajando con el sistema ubiquitina-proteasoma para eliminar proteínas dañadas. Su disfunción contribuye a enfermedades de Alzheimer, Parkinson y Huntington.",
        de: "Molekulare Chaperone wie HSP70, HSP90 und Chaperonine helfen Protein-Homöostase zu erhalten durch Erleichterung ordnungsgemäßer Faltung, Verhinderung von Aggregation von Krankheitsproteinen (Amyloid-β, Tau, α-Synuklein), Aufbrechen existierender Aggregate und Zusammenarbeit mit dem Ubiquitin-Proteasom-System zur Entfernung beschädigter Proteine. Ihre Dysfunktion trägt zu Alzheimer-, Parkinson- und Huntington-Krankheiten bei.",
        nl: "Moleculaire chaperonnes zoals HSP70, HSP90 en chaperonines helpen eiwit homeostase te behouden door juiste vouwing te faciliteren, aggregatie van ziekte eiwitten (amyloïd-β, tau, α-synucleïne) te voorkomen, bestaande aggregaten op te breken en samen te werken met het ubiquitine-proteasoom systeem om beschadigde eiwitten te klaren. Hun disfunctie draagt bij aan Alzheimer, Parkinson en Huntington ziekten."
      }
    },
    {
      question: {
        en: "What is the role of extracellular vesicles in intercellular communication?",
        es: "¿Cuál es el papel de las vesículas extracelulares en la comunicación intercelular?",
        de: "Was ist die Rolle extrazellulärer Vesikel in der interzellulären Kommunikation?",
        nl: "Wat is de rol van extracellulaire blaasjes in intercellulaire communicatie?"
      },
      options: [
        { en: "Transport proteins, lipids, and nucleic acids between cells enabling long-distance cellular communication", es: "Transportan proteínas, lípidos y ácidos nucleicos entre células permitiendo comunicación celular a larga distancia", de: "Transportieren Proteine, Lipide und Nukleinsäuren zwischen Zellen und ermöglichen Fernkommunikation zwischen Zellen", nl: "Transporteren eiwitten, lipiden en nucleïnezuren tussen cellen mogelijk makend lange-afstand cellulaire communicatie" },
        { en: "Only remove cellular waste", es: "Solo eliminan desechos celulares", de: "Entfernen nur zellulären Abfall", nl: "Verwijderen alleen cellulaire afval" },
        { en: "Cannot cross tissue boundaries", es: "No pueden cruzar límites tisulares", de: "Können Gewebegrenzen nicht überschreiten", nl: "Kunnen weefsselgrenzen niet overschrijden" },
        { en: "Are always pathological", es: "Siempre son patológicas", de: "Sind immer pathologisch", nl: "Zijn altijd pathologisch" }
      ],
      correct: 0,
      explanation: {
        en: "Extracellular vesicles (exosomes, microvesicles, apoptotic bodies) are membrane-bound particles released by cells containing bioactive cargo including proteins, lipids, mRNAs, and microRNAs. They facilitate intercellular communication over short and long distances, influence recipient cell behavior, play roles in development, immune responses, tissue repair, and disease progression including cancer metastasis.",
        es: "Las vesículas extracelulares (exosomas, microvesículas, cuerpos apoptóticos) son partículas unidas a membrana liberadas por células que contienen carga bioactiva incluyendo proteínas, lípidos, ARNm y microARNs. Facilitan comunicación intercelular a distancias cortas y largas, influencian comportamiento de células receptoras, juegan papeles en desarrollo, respuestas inmunes, reparación tisular y progresión de enfermedad incluyendo metástasis de cáncer.",
        de: "Extrazelluläre Vesikel (Exosomen, Mikrovesikel, apoptotische Körper) sind membrangebundene Partikel, die von Zellen freigesetzt werden und bioaktive Fracht enthalten, einschließlich Proteine, Lipide, mRNAs und microRNAs. Sie erleichtern interzelluläre Kommunikation über kurze und lange Distanzen, beeinflussen Empfängerzellverhalten, spielen Rollen in Entwicklung, Immunantworten, Gewebereparatur und Krankheitsprogression einschließlich Krebsmetastasierung.",
        nl: "Extracellulaire blaasjes (exosomen, microvesikels, apoptotische lichamen) zijn membraan-gebonden deeltjes vrijgegeven door cellen die bioactieve lading bevatten inclusief eiwitten, lipiden, mRNA's en microRNA's. Ze faciliteren intercellulaire communicatie over korte en lange afstanden, beïnvloeden ontvanger celgedrag, spelen rollen in ontwikkeling, immuun responsen, weefsel reparatie en ziekte progressie inclusief kanker metastase."
      }
    },
    {
      question: {
        en: "How do organoids revolutionize disease modeling and drug discovery?",
        es: "¿Cómo revolucionan los organoides el modelado de enfermedades y descubrimiento de fármacos?",
        de: "Wie revolutionieren Organoide Krankheitsmodellierung und Wirkstoffforschung?",
        nl: "Hoe revolutioneren organoïden ziekte modellering en medicijn ontdekking?"
      },
      options: [
        { en: "3D cell cultures recapitulate organ architecture and function enabling patient-specific disease models and drug screening", es: "Cultivos celulares 3D recapitulan arquitectura y función de órganos permitiendo modelos de enfermedad específicos del paciente y cribado de fármacos", de: "3D-Zellkulturen rekapitulieren Organarchitektur und -funktion und ermöglichen patientenspezifische Krankheitsmodelle und Wirkstoffscreening", nl: "3D celkweken recapituleren orgaan architectuur en functie mogelijk makend patiënt-specifieke ziekte modellen en medicijn screening" },
        { en: "Are identical to 2D cell cultures", es: "Son idénticos a cultivos celulares 2D", de: "Sind identisch mit 2D-Zellkulturen", nl: "Zijn identiek aan 2D celkweken" },
        { en: "Cannot model human diseases", es: "No pueden modelar enfermedades humanas", de: "Können menschliche Krankheiten nicht modellieren", nl: "Kunnen menselijke ziekten niet modelleren" },
        { en: "Only work with cancer cells", es: "Solo funcionan con células cancerosas", de: "Funktionieren nur mit Krebszellen", nl: "Werken alleen met kankercellen" }
      ],
      correct: 0,
      explanation: {
        en: "Organoids are 3D cell cultures derived from stem cells or patient tissues that self-organize into organ-like structures with physiologically relevant architecture and cellular diversity. They better recapitulate human organ function than 2D cultures, enable personalized medicine approaches, model genetic diseases, viral infections, and cancer, and provide platforms for drug screening and toxicity testing.",
        es: "Los organoides son cultivos celulares 3D derivados de células madre o tejidos de pacientes que se autoorganizan en estructuras similares a órganos con arquitectura fisiológicamente relevante y diversidad celular. Recapitulan mejor función de órganos humanos que cultivos 2D, permiten enfoques de medicina personalizada, modelan enfermedades genéticas, infecciones virales y cáncer, y proporcionan plataformas para cribado de fármacos y pruebas de toxicidad.",
        de: "Organoide sind 3D-Zellkulturen, die aus Stammzellen oder Patientengeweben stammen und sich selbst in organähnliche Strukturen mit physiologisch relevanter Architektur und zellulärer Vielfalt organisieren. Sie rekapitulieren menschliche Organfunktion besser als 2D-Kulturen, ermöglichen personalisierte Medizinansätze, modellieren genetische Krankheiten, virale Infektionen und Krebs und bieten Plattformen für Wirkstoffscreening und Toxizitätstests.",
        nl: "Organoïden zijn 3D celkweken afgeleid van stamcellen of patiënt weefsels die zichzelf organiseren in orgaan-achtige structuren met fysiologisch relevante architectuur en cellulaire diversiteit. Ze recapituleren menselijke orgaan functie beter dan 2D kweken, maken gepersonaliseerde geneeskunde benaderingen mogelijk, modelleren genetische ziekten, virale infecties en kanker, en bieden platforms voor medicijn screening en toxiciteit testen."
      }
    }
  ]
});