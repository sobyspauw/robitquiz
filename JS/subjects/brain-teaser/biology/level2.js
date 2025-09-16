// Biology - Level 2: Advanced Cellular Processes and Molecular Biology
(function() {
  const level2 = {
    name: {
      en: "Advanced Cellular Processes",
      es: "Procesos Celulares Avanzados",
      de: "Erweiterte Zelluläre Prozesse",
      nl: "Geavanceerde Cellulaire Processen"
    },
    questions: [
      {
        question: {
          en: "Which enzyme is responsible for unwinding the DNA double helix during replication?",
          es: "¿Qué enzima es responsable de desenrollar la doble hélice del ADN durante la replicación?",
          de: "Welches Enzym is verantwortlich für das Entwinden der DNA-Doppelhelix während der Replikation?",
          nl: "Welk enzym is verantwoordelijk voor het ontrollen van de DNA-dubbele helix tijdens replicatie?"
        },
        options: [
          { en: "DNA helicase", es: "ADN helicasa", de: "DNA-Helikase", nl: "DNA helicase" },
          { en: "DNA polymerase", es: "ADN polimerasa", de: "DNA-Polymerase", nl: "DNA polymerase" },
          { en: "DNA ligase", es: "ADN ligasa", de: "DNA-Ligase", nl: "DNA ligase" },
          { en: "Primase", es: "Primasa", de: "Primase", nl: "Primase" }
        ],
        correct: 0,
        explanation: {
          en: "DNA helicase unwinds the double helix by breaking the hydrogen bonds between complementary base pairs, creating the replication fork where DNA synthesis can occur.",
          es: "La ADN helicasa desenrolla la doble hélice rompiendo los enlaces de hidrógeno entre pares de bases complementarias, creando la horquilla de replicación donde puede ocurrir la síntesis de ADN.",
          de: "DNA-Helikase entwindet die Doppelhelix durch Aufbrechen der Wasserstoffbindungen zwischen komplementären Basenpaaren und schafft die Replikationsgabel, wo DNA-Synthese stattfinden kann.",
          nl: "DNA helicase ontrolt de dubbele helix door de waterstofbindingen tussen complementaire basenparen te verbreken, waardoor de replicatievork ontstaat waar DNA-synthese kan plaatsvinden."
        }
      },
      {
        question: {
          en: "What is the term for the process by which cells become specialized for specific functions during development?",
          es: "¿Cuál es el término para el proceso por el cual las células se especializan para funciones específicas durante el desarrollo?",
          de: "Wie nennt man den Prozess, durch den sich Zellen während der Entwicklung für spezifische Funktionen spezialisieren?",
          nl: "Wat is de term voor het proces waarbij cellen gespecialiseerd worden voor specifieke functies tijdens ontwikkeling?"
        },
        options: [
          { en: "Cell differentiation", es: "Diferenciación celular", de: "Zelldifferenzierung", nl: "Celdifferentiatie" },
          { en: "Cell division", es: "División celular", de: "Zellteilung", nl: "Celdeling" },
          { en: "Cell migration", es: "Migración celular", de: "Zellmigration", nl: "Celmigratie" },
          { en: "Cell adhesion", es: "Adhesión celular", de: "Zelladhäsion", nl: "Celadhesie" }
        ],
        correct: 0,
        explanation: {
          en: "Cell differentiation is the process where less specialized cells become more specialized cell types with distinct structures and functions, controlled by gene expression patterns.",
          es: "La diferenciación celular es el proceso donde células menos especializadas se convierten en tipos celulares más especializados con estructuras y funciones distintas, controlado por patrones de expresión génica.",
          de: "Zelldifferenzierung ist der Prozess, bei dem weniger spezialisierte Zellen zu spezialisierteren Zelltypen mit unterschiedlichen Strukturen und Funktionen werden, gesteuert durch Genexpressionsmuster.",
          nl: "Celdifferentiatie is het proces waarbij minder gespecialiseerde cellen meer gespecialiseerde celtypen worden met onderscheidende structuren en functies, gecontroleerd door genexpressiepatronen."
        }
      },
      {
        question: {
          en: "Which cellular process involves the formation of vesicles to transport materials within the cell?",
          es: "¿Qué proceso celular involucra la formación de vesículas para transportar materiales dentro de la célula?",
          de: "Welcher zelluläre Prozess beinhaltet die Bildung von Vesikeln zum Transport von Materialien innerhalb der Zelle?",
          nl: "Welk cellulair proces omvat de vorming van vesikels om materialen binnen de cel te transporteren?"
        },
        options: [
          { en: "Vesicular transport", es: "Transporte vesicular", de: "Vesikulärer Transport", nl: "Vesiculair transport" },
          { en: "Passive diffusion", es: "Difusión pasiva", de: "Passive Diffusion", nl: "Passieve diffusie" },
          { en: "Active transport", es: "Transporte activo", de: "Aktiver Transport", nl: "Actief transport" },
          { en: "Facilitated diffusion", es: "Difusión facilitada", de: "Erleichterte Diffusion", nl: "Gefaciliteerde diffusie" }
        ],
        correct: 0,
        explanation: {
          en: "Vesicular transport uses membrane-bound vesicles to move proteins, lipids, and other materials between organelles and to/from the cell surface, including endocytosis and exocytosis.",
          es: "El transporte vesicular usa vesículas unidas a membrana para mover proteínas, lípidos y otros materiales entre orgánulos y hacia/desde la superficie celular, incluyendo endocitosis y exocitosis.",
          de: "Vesikulärer Transport nutzt membrangebundene Vesikel, um Proteine, Lipide und andere Materialien zwischen Organellen und zur/von der Zelloberfläche zu bewegen, einschließlich Endozytose und Exozytose.",
          nl: "Vesiculair transport gebruikt membraangebonden vesikels om eiwitten, lipiden en andere materialen tussen organellen en naar/van het celoppervlak te verplaatsen, inclusief endocytose en exocytose."
        }
      },
      {
        question: {
          en: "What is the role of telomeres in cellular aging?",
          es: "¿Cuál es el papel de los telómeros en el envejecimiento celular?",
          de: "Welche Rolle spielen Telomere beim zellulären Altern?",
          nl: "Wat is de rol van telomeren bij cellulaire veroudering?"
        },
        options: [
          { en: "They protect chromosome ends and shorten with age", es: "Protegen los extremos cromosómicos y se acortan con la edad", de: "Sie schützen Chromosomenden und verkürzen sich mit dem Alter", nl: "Ze beschermen chromosoomuiteinden en verkorten met leeftijd" },
          { en: "They increase DNA replication speed", es: "Aumentan la velocidad de replicación del ADN", de: "Sie erhöhen die DNA-Replikationsgeschwindigkeit", nl: "Ze verhogen de snelheid van DNA-replicatie" },
          { en: "They prevent all genetic mutations", es: "Previenen todas las mutaciones genéticas", de: "Sie verhindern alle genetischen Mutationen", nl: "Ze voorkomen alle genetische mutaties" },
          { en: "They control cell membrane permeability", es: "Controlan la permeabilidad de la membrana celular", de: "Sie kontrollieren die Zellmembranpermeabilität", nl: "Ze controleren de permeabiliteit van het celmembraan" }
        ],
        correct: 0,
        explanation: {
          en: "Telomeres are protective DNA-protein structures at chromosome ends that shorten with each cell division. When they become critically short, cells can no longer divide properly, contributing to aging.",
          es: "Los telómeros son estructuras protectoras de ADN-proteína en los extremos cromosómicos que se acortan con cada división celular. Cuando se vuelven críticamente cortos, las células ya no pueden dividirse adecuadamente, contribuyendo al envejecimiento.",
          de: "Telomere sind schützende DNA-Protein-Strukturen an Chromosomenden, die sich mit jeder Zellteilung verkürzen. Wenn sie kritisch kurz werden, können sich Zellen nicht mehr ordnungsgemäß teilen, was zum Altern beiträgt.",
          nl: "Telomeren zijn beschermende DNA-eiwitstructuren aan chromosoomuiteinden die verkorten met elke celdeling. Wanneer ze kritiek kort worden, kunnen cellen zich niet meer goed delen, wat bijdraagt aan veroudering."
        }
      },
      {
        question: {
          en: "Which process describes the modification of proteins after translation to make them functional?",
          es: "¿Qué proceso describe la modificación de proteínas después de la traducción para hacerlas funcionales?",
          de: "Welcher Prozess beschreibt die Modifikation von Proteinen nach der Translation, um sie funktional zu machen?",
          nl: "Welk proces beschrijft de modificatie van eiwitten na translatie om ze functioneel te maken?"
        },
        options: [
          { en: "Post-translational modification", es: "Modificación post-traduccional", de: "Posttranslationale Modifikation", nl: "Posttranslationele modificatie" },
          { en: "Transcription", es: "Transcripción", de: "Transkription", nl: "Transcriptie" },
          { en: "Translation", es: "Traducción", de: "Translation", nl: "Translatie" },
          { en: "Replication", es: "Replicación", de: "Replikation", nl: "Replicatie" }
        ],
        correct: 0,
        explanation: {
          en: "Post-translational modifications include phosphorylation, glycosylation, ubiquitination, and acetylation, which alter protein function, localization, stability, and activity.",
          es: "Las modificaciones post-traduccionales incluyen fosforilación, glicosilación, ubiquitinación y acetilación, que alteran la función, localización, estabilidad y actividad de las proteínas.",
          de: "Posttranslationale Modifikationen umfassen Phosphorylierung, Glykosylierung, Ubiquitinierung und Acetylierung, die Proteinfunktion, -lokalisation, -stabilität und -aktivität verändern.",
          nl: "Posttranslationele modificaties omvatten fosforylering, glycosylering, ubiquitinering en acetylering, die eiwitfunctie, lokalisatie, stabiliteit en activiteit veranderen."
        }
      },
      {
        question: {
          en: "What is the primary function of the endoplasmic reticulum signal sequence?",
          es: "¿Cuál es la función primaria de la secuencia señal del retículo endoplásmico?",
          de: "Was ist die primäre Funktion der Endoplasmatischen Retikulum-Signalsequenz?",
          nl: "Wat is de primaire functie van de endoplasmatisch reticulum signaalsequentie?"
        },
        options: [
          { en: "Direct proteins to the ER for processing", es: "Dirigir proteínas al RE para procesamiento", de: "Proteine zum ER für Verarbeitung dirigieren", nl: "Eiwitten naar het ER leiden voor verwerking" },
          { en: "Initiate DNA replication", es: "Iniciar la replicación del ADN", de: "DNA-Replikation initiieren", nl: "DNA-replicatie initiëren" },
          { en: "Regulate cell division", es: "Regular la división celular", de: "Zellteilung regulieren", nl: "Celdeling reguleren" },
          { en: "Control membrane permeability", es: "Controlar la permeabilidad de membrana", de: "Membranpermeabilität kontrollieren", nl: "Membraanpermeabiliteit controleren" }
        ],
        correct: 0,
        explanation: {
          en: "The ER signal sequence is a short peptide sequence that directs ribosomes to the endoplasmic reticulum, where proteins destined for secretion, membrane incorporation, or organelle targeting are synthesized.",
          es: "La secuencia señal del RE es una secuencia peptídica corta que dirige ribosomas al retículo endoplásmico, donde se sintetizan proteínas destinadas a secreción, incorporación a membrana o direccionamiento a orgánulos.",
          de: "Die ER-Signalsequenz ist eine kurze Peptidsequenz, die Ribosomen zum endoplasmatischen Retikulum dirigiert, wo Proteine für Sekretion, Membraninkorporation oder Organellenzielsteuerung synthetisiert werden.",
          nl: "De ER-signaalsequentie is een korte peptidesequentie die ribosomen naar het endoplasmatisch reticulum leidt, waar eiwitten bestemd voor secretie, membraanincorporatie of organeltargeting worden gesynthetiseerd."
        }
      },
      {
        question: {
          en: "Which molecular mechanism prevents the cell cycle from progressing when DNA damage is detected?",
          es: "¿Qué mecanismo molecular previene que el ciclo celular progrese cuando se detecta daño al ADN?",
          de: "Welcher molekulare Mechanismus verhindert, dass der Zellzyklus fortschreitet, wenn DNA-Schäden erkannt werden?",
          nl: "Welk moleculair mechanisme voorkomt dat de celcyclus voortgaat wanneer DNA-schade wordt gedetecteerd?"
        },
        options: [
          { en: "Cell cycle checkpoints", es: "Puntos de control del ciclo celular", de: "Zellzyklus-Kontrollpunkte", nl: "Celcyclus controlepunten" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
          { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitsynthese" },
          { en: "Membrane transport", es: "Transporte de membrana", de: "Membrantransport", nl: "Membraantransport" }
        ],
        correct: 0,
        explanation: {
          en: "Cell cycle checkpoints, particularly the G1/S and G2/M checkpoints, monitor DNA integrity and halt cell division when damage is detected, allowing time for repair or triggering apoptosis.",
          es: "Los puntos de control del ciclo celular, particularmente los puntos G1/S y G2/M, monitorean la integridad del ADN y detienen la división celular cuando se detecta daño, permitiendo tiempo para reparación o desencadenando apoptosis.",
          de: "Zellzyklus-Kontrollpunkte, insbesondere die G1/S- und G2/M-Kontrollpunkte, überwachen die DNA-Integrität und stoppen die Zellteilung, wenn Schäden erkannt werden, was Zeit für Reparatur ermöglicht oder Apoptose auslöst.",
          nl: "Celcyclus controlepunten, vooral de G1/S en G2/M controlepunten, monitoren DNA-integriteit en stoppen celdeling wanneer schade wordt gedetecteerd, wat tijd geeft voor herstel of apoptose triggert."
        }
      },
      {
        question: {
          en: "What is the function of molecular chaperones in protein folding?",
          es: "¿Cuál es la función de las chaperonas moleculares en el plegamiento de proteínas?",
          de: "Was ist die Funktion molekularer Chaperone bei der Proteinfaltung?",
          nl: "Wat is de functie van moleculaire chaperonnes bij eiwitvouwing?"
        },
        options: [
          { en: "Assist proper protein folding and prevent aggregation", es: "Asistir el plegamiento adecuado de proteínas y prevenir agregación", de: "Ordnungsgemäße Proteinfaltung unterstützen und Aggregation verhindern", nl: "Juiste eiwitvouwing ondersteunen en aggregatie voorkomen" },
          { en: "Transport proteins across membranes", es: "Transportar proteínas a través de membranas", de: "Proteine durch Membranen transportieren", nl: "Eiwitten door membranen transporteren" },
          { en: "Degrade misfolded proteins", es: "Degradar proteínas mal plegadas", de: "Fehlgefaltete Proteine abbauen", nl: "Verkeerd gevouwen eiwitten afbreken" },
          { en: "Synthesize new proteins", es: "Sintetizar nuevas proteínas", de: "Neue Proteine synthetisieren", nl: "Nieuwe eiwitten synthetiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular chaperones assist protein folding by providing a controlled environment, preventing aggregation, and helping proteins achieve their correct three-dimensional structure, especially under stress conditions.",
          es: "Las chaperonas moleculares asisten el plegamiento de proteínas proporcionando un ambiente controlado, previniendo agregación y ayudando a las proteínas a lograr su estructura tridimensional correcta, especialmente bajo condiciones de estrés.",
          de: "Molekulare Chaperone unterstützen die Proteinfaltung durch Bereitstellung einer kontrollierten Umgebung, Verhinderung von Aggregation und Hilfe für Proteine, ihre korrekte dreidimensionale Struktur zu erreichen, besonders unter Stressbedingungen.",
          nl: "Moleculaire chaperonnes ondersteunen eiwitvouwing door een gecontroleerde omgeving te bieden, aggregatie te voorkomen en eiwitten te helpen hun juiste driedimensionale structuur te bereiken, vooral onder stresscondities."
        }
      },
      {
        question: {
          en: "Which process allows cells to break down and recycle their own damaged organelles?",
          es: "¿Qué proceso permite a las células descomponer y reciclar sus propios orgánulos dañados?",
          de: "Welcher Prozess ermöglicht es Zellen, ihre eigenen beschädigten Organellen abzubauen und zu recyceln?",
          nl: "Welk proces stelt cellen in staat hun eigen beschadigde organellen af te breken en te recycleren?"
        },
        options: [
          { en: "Autophagy", es: "Autofagia", de: "Autophagie", nl: "Autofagie" },
          { en: "Phagocytosis", es: "Fagocitosis", de: "Phagozytose", nl: "Fagocytose" },
          { en: "Exocytosis", es: "Exocitosis", de: "Exozytose", nl: "Exocytose" },
          { en: "Endocytosis", es: "Endocitosis", de: "Endozytose", nl: "Endocytose" }
        ],
        correct: 0,
        explanation: {
          en: "Autophagy is a cellular process where cells engulf their own damaged organelles or protein aggregates in double-membrane vesicles called autophagosomes, which then fuse with lysosomes for degradation and recycling.",
          es: "La autofagia es un proceso celular donde las células engullen sus propios orgánulos dañados o agregados de proteínas en vesículas de doble membrana llamadas autofagosomas, que luego se fusionan con lisosomas para degradación y reciclaje.",
          de: "Autophagie ist ein zellulärer Prozess, bei dem Zellen ihre eigenen beschädigten Organellen oder Proteinaggregate in doppelmembranigen Vesikeln namens Autophagosomen einschließen, die dann mit Lysosomen für Abbau und Recycling fusionieren.",
          nl: "Autofagie is een cellulair proces waarbij cellen hun eigen beschadigde organellen of eiwitaggregaten omhullen in dubbelmembraanvesikels genaamd autofagosomen, die vervolgens fuseren met lysosomen voor afbraak en recyclering."
        }
      },
      {
        question: {
          en: "What is the role of the nuclear pore complex in eukaryotic cells?",
          es: "¿Cuál es el papel del complejo de poro nuclear en las células eucariotas?",
          de: "Was ist die Rolle des Kernporenkomplexes in eukaryotischen Zellen?",
          nl: "Wat is de rol van het nucleaire porie complex in eukaryotische cellen?"
        },
        options: [
          { en: "Regulate transport between nucleus and cytoplasm", es: "Regular el transporte entre núcleo y citoplasma", de: "Transport zwischen Zellkern und Zytoplasma regulieren", nl: "Transport tussen celkern en cytoplasma reguleren" },
          { en: "Synthesize ribosomal RNA", es: "Sintetizar ARN ribosomal", de: "Ribosomale RNA synthetisieren", nl: "Ribosomaal RNA synthetiseren" },
          { en: "Replicate DNA", es: "Replicar ADN", de: "DNA replizieren", nl: "DNA repliceren" },
          { en: "Produce ATP", es: "Producir ATP", de: "ATP produzieren", nl: "ATP produceren" }
        ],
        correct: 0,
        explanation: {
          en: "Nuclear pore complexes are large protein structures that span the nuclear envelope and selectively regulate the transport of molecules like mRNA, proteins, and ions between the nucleus and cytoplasm.",
          es: "Los complejos de poro nuclear son grandes estructuras proteicas que atraviesan la envoltura nuclear y regulan selectivamente el transporte de moléculas como ARNm, proteínas e iones entre el núcleo y el citoplasma.",
          de: "Kernporenkomplexe sind große Proteinstrukturen, die die Kernhülle durchspannen und selektiv den Transport von Molekülen wie mRNA, Proteinen und Ionen zwischen Zellkern und Zytoplasma regulieren.",
          nl: "Nucleaire porie complexen zijn grote eiwitstructuren die de kernomhulling doorspannen en selectief het transport van moleculen zoals mRNA, eiwitten en ionen tussen celkern en cytoplasma reguleren."
        }
      },
      {
        question: {
          en: "Which phase of mitosis is characterized by chromosome condensation and nuclear envelope breakdown?",
          es: "¿Qué fase de la mitosis se caracteriza por la condensación cromosómica y la ruptura de la envoltura nuclear?",
          de: "Welche Phase der Mitose ist durch Chromosomenkondensation und Kernhüllenabbau gekennzeichnet?",
          nl: "Welke fase van mitose wordt gekenmerkt door chromosoomcondensatie en kernomhulsel afbraak?"
        },
        options: [
          { en: "Prophase", es: "Profase", de: "Prophase", nl: "Profase" },
          { en: "Metaphase", es: "Metafase", de: "Metaphase", nl: "Metafase" },
          { en: "Anaphase", es: "Anafase", de: "Anaphase", nl: "Anafase" },
          { en: "Telophase", es: "Telofase", de: "Telophase", nl: "Telofase" }
        ],
        correct: 0,
        explanation: {
          en: "During prophase, chromosomes condense and become visible, the nuclear envelope breaks down, and the mitotic spindle begins to form. This prepares the cell for chromosome separation.",
          es: "Durante la profase, los cromosomas se condensan y se vuelven visibles, la envoltura nuclear se rompe, y el huso mitótico comienza a formarse. Esto prepara la célula para la separación cromosómica.",
          de: "Während der Prophase kondensieren Chromosomen und werden sichtbar, die Kernhülle bricht zusammen, und die mitotische Spindel beginnt sich zu bilden. Dies bereitet die Zelle auf die Chromosomentrennung vor.",
          nl: "Tijdens profase condenseren chromosomen en worden zichtbaar, breekt de kernomhulsel af, en begint de mitotische spindel zich te vormen. Dit bereidt de cel voor op chromosoomscheiding."
        }
      },
      {
        question: {
          en: "What is the primary function of the electron transport chain in cellular respiration?",
          es: "¿Cuál es la función primaria de la cadena de transporte de electrones en la respiración celular?",
          de: "Was ist die primäre Funktion der Elektronentransportkette in der Zellatmung?",
          nl: "Wat is de primaire functie van de elektronentransportketen in celademhaling?"
        },
        options: [
          { en: "Generate proton gradient for ATP synthesis", es: "Generar gradiente de protones para síntesis de ATP", de: "Protonengradienten für ATP-Synthese erzeugen", nl: "Protongradiënt genereren voor ATP-synthese" },
          { en: "Break down glucose molecules", es: "Descomponer moléculas de glucosa", de: "Glukosemoleküle abbauen", nl: "Glucosemoleculen afbreken" },
          { en: "Synthesize fatty acids", es: "Sintetizar ácidos grasos", de: "Fettsäuren synthetisieren", nl: "Vetzuren synthetiseren" },
          { en: "Replicate DNA", es: "Replicar ADN", de: "DNA replizieren", nl: "DNA repliceren" }
        ],
        correct: 0,
        explanation: {
          en: "The electron transport chain creates a proton gradient across the inner mitochondrial membrane by pumping hydrogen ions. This gradient drives ATP synthase to produce ATP through chemiosmosis.",
          es: "La cadena de transporte de electrones crea un gradiente de protones a través de la membrana mitocondrial interna bombeando iones de hidrógeno. Este gradiente impulsa la ATP sintasa para producir ATP a través de quimiosmosis.",
          de: "Die Elektronentransportkette erzeugt einen Protonengradienten über die innere Mitochondrienmembran durch Pumpen von Wasserstoffionen. Dieser Gradient treibt ATP-Synthase an, um ATP durch Chemiosmose zu produzieren.",
          nl: "De elektronentransportketen creëert een protongradiënt over het binnenste mitochondriale membraan door waterstofionen te pompen. Deze gradiënt drijft ATP-synthase aan om ATP te produceren via chemiosmose."
        }
      },
      {
        question: {
          en: "Which cellular structure is responsible for modifying and packaging proteins from the rough ER?",
          es: "¿Qué estructura celular es responsable de modificar y empaquetar proteínas del RE rugoso?",
          de: "Welche zelluläre Struktur ist für die Modifikation und Verpackung von Proteinen aus dem rauhen ER verantwortlich?",
          nl: "Welke cellulaire structuur is verantwoordelijk voor het modificeren en verpakken van eiwitten van het ruwe ER?"
        },
        options: [
          { en: "Golgi apparatus", es: "Aparato de Golgi", de: "Golgi-Apparat", nl: "Golgi-apparaat" },
          { en: "Smooth ER", es: "RE liso", de: "Glattes ER", nl: "Glad ER" },
          { en: "Ribosomes", es: "Ribosomas", de: "Ribosomen", nl: "Ribosomen" },
          { en: "Peroxisomes", es: "Peroxisomas", de: "Peroxisomen", nl: "Peroxisomen" }
        ],
        correct: 0,
        explanation: {
          en: "The Golgi apparatus receives proteins from the rough ER, modifies them through glycosylation and other processes, packages them into vesicles, and directs them to their final destinations.",
          es: "El aparato de Golgi recibe proteínas del RE rugoso, las modifica a través de glicosilación y otros procesos, las empaqueta en vesículas, y las dirige a sus destinos finales.",
          de: "Der Golgi-Apparat empfängt Proteine vom rauhen ER, modifiziert sie durch Glykosylierung und andere Prozesse, verpackt sie in Vesikel und dirigiert sie zu ihren endgültigen Bestimmungsorten.",
          nl: "Het Golgi-apparaat ontvangt eiwitten van het ruwe ER, modificeert ze door glycosylering en andere processen, verpakt ze in vesikels, en stuurt ze naar hun eindbestemmingen."
        }
      },
      {
        question: {
          en: "What is the role of cyclins in cell cycle regulation?",
          es: "¿Cuál es el papel de las ciclinas en la regulación del ciclo celular?",
          de: "Was ist die Rolle von Cyclinen bei der Zellzyklusregulation?",
          nl: "Wat is de rol van cyclinen bij celcyclusregulatie?"
        },
        options: [
          { en: "Activate cyclin-dependent kinases at specific cell cycle phases", es: "Activar quinasas dependientes de ciclina en fases específicas del ciclo celular", de: "Cyclin-abhängige Kinasen in spezifischen Zellzyklusphasen aktivieren", nl: "Cycline-afhankelijke kinases activeren bij specifieke celcyclusfasen" },
          { en: "Synthesize DNA", es: "Sintetizar ADN", de: "DNA synthetisieren", nl: "DNA synthetiseren" },
          { en: "Form spindle fibers", es: "Formar fibras del huso", de: "Spindelfasern bilden", nl: "Spindelvezels vormen" },
          { en: "Separate chromosomes", es: "Separar cromosomas", de: "Chromosomen trennen", nl: "Chromosomen scheiden" }
        ],
        correct: 0,
        explanation: {
          en: "Cyclins are proteins that regulate cell cycle progression by binding to and activating cyclin-dependent kinases (CDKs) at specific phases, controlling key transitions like G1/S and G2/M checkpoints.",
          es: "Las ciclinas son proteínas que regulan la progresión del ciclo celular uniéndose y activando quinasas dependientes de ciclina (CDKs) en fases específicas, controlando transiciones clave como los puntos de control G1/S y G2/M.",
          de: "Cycline sind Proteine, die den Zellzyklus regulieren, indem sie sich an Cyclin-abhängige Kinasen (CDKs) in spezifischen Phasen binden und sie aktivieren, wodurch Schlüsselübergänge wie G1/S- und G2/M-Kontrollpunkte gesteuert werden.",
          nl: "Cyclinen zijn eiwitten die celcyclusprogressie reguleren door te binden aan en activeren van cycline-afhankelijke kinases (CDKs) bij specifieke fasen, waarbij belangrijke overgangen zoals G1/S en G2/M controlepunten worden gecontroleerd."
        }
      },
      {
        question: {
          en: "Which process allows mRNA to be modified before leaving the nucleus in eukaryotes?",
          es: "¿Qué proceso permite que el ARNm sea modificado antes de salir del núcleo en eucariotas?",
          de: "Welcher Prozess ermöglicht es, dass mRNA modifiziert wird, bevor sie den Zellkern in Eukaryoten verlässt?",
          nl: "Welk proces maakt het mogelijk dat mRNA wordt gemodificeerd voordat het de celkern verlaat in eukaryoten?"
        },
        options: [
          { en: "RNA processing (splicing, capping, polyadenylation)", es: "Procesamiento de ARN (empalme, encapsulado, poliadenilación)", de: "RNA-Verarbeitung (Spleißen, Capping, Polyadenylierung)", nl: "RNA-verwerking (splicing, capping, polyadenylering)" },
          { en: "Translation", es: "Traducción", de: "Translation", nl: "Translatie" },
          { en: "Replication", es: "Replicación", de: "Replikation", nl: "Replicatie" },
          { en: "Transcription", es: "Transcripción", de: "Transkription", nl: "Transcriptie" }
        ],
        correct: 0,
        explanation: {
          en: "RNA processing includes 5' capping, 3' polyadenylation, and splicing to remove introns. These modifications are essential for mRNA stability, transport, and efficient translation.",
          es: "El procesamiento de ARN incluye encapsulado 5', poliadenilación 3', y empalme para remover intrones. Estas modificaciones son esenciales para la estabilidad del ARNm, transporte y traducción eficiente.",
          de: "RNA-Verarbeitung umfasst 5'-Capping, 3'-Polyadenylierung und Spleißen zur Entfernung von Introns. Diese Modifikationen sind für mRNA-Stabilität, Transport und effiziente Translation wesentlich.",
          nl: "RNA-verwerking omvat 5' capping, 3' polyadenylering, en splicing om intronen te verwijderen. Deze modificaties zijn essentieel voor mRNA-stabiliteit, transport en efficiënte translatie."
        }
      },
      {
        question: {
          en: "What is the function of the signal recognition particle (SRP) in protein synthesis?",
          es: "¿Cuál es la función de la partícula de reconocimiento de señal (PRS) en la síntesis de proteínas?",
          de: "Was ist die Funktion des Signalerkennungspartikels (SRP) bei der Proteinsynthese?",
          nl: "Wat is de functie van het signaalherkennende deeltje (SRP) bij eiwitsynthese?"
        },
        options: [
          { en: "Direct ribosomes to the endoplasmic reticulum", es: "Dirigir ribosomas al retículo endoplásmico", de: "Ribosomen zum endoplasmatischen Retikulum dirigieren", nl: "Ribosomen naar het endoplasmatisch reticulum leiden" },
          { en: "Initiate protein degradation", es: "Iniciar degradación de proteínas", de: "Proteinabbau initiieren", nl: "Eiwitafbraak initiëren" },
          { en: "Activate gene transcription", es: "Activar transcripción génica", de: "Gentranskription aktivieren", nl: "Gentranscriptie activeren" },
          { en: "Facilitate DNA replication", es: "Facilitar replicación del ADN", de: "DNA-Replikation erleichtern", nl: "DNA-replicatie faciliteren" }
        ],
        correct: 0,
        explanation: {
          en: "SRP recognizes signal sequences on nascent proteins and temporarily halts translation while directing the ribosome to the ER membrane, ensuring proper protein targeting.",
          es: "La PRS reconoce secuencias señal en proteínas nacientes y detiene temporalmente la traducción mientras dirige el ribosoma a la membrana del RE, asegurando el direccionamiento adecuado de proteínas.",
          de: "SRP erkennt Signalsequenzen auf entstehenden Proteinen und stoppt vorübergehend die Translation, während es das Ribosom zur ER-Membran dirigiert, um ordnungsgemäße Proteinzielsteuerung zu gewährleisten.",
          nl: "SRP herkent signaalsequenties op beginnende eiwitten en stopt tijdelijk translatie terwijl het het ribosoom naar het ER-membraan leidt, wat juiste eiwittargeting verzekert."
        }
      },
      {
        question: {
          en: "Which cellular process is responsible for the formation of new blood vessels?",
          es: "¿Qué proceso celular es responsable de la formación de nuevos vasos sanguíneos?",
          de: "Welcher zelluläre Prozess ist für die Bildung neuer Blutgefäße verantwortlich?",
          nl: "Welk cellulair proces is verantwoordelijk voor de vorming van nieuwe bloedvaten?"
        },
        options: [
          { en: "Angiogenesis", es: "Angiogénesis", de: "Angiogenese", nl: "Angiogenese" },
          { en: "Apoptosis", es: "Apoptosis", de: "Apoptose", nl: "Apoptose" },
          { en: "Mitosis", es: "Mitosis", de: "Mitose", nl: "Mitose" },
          { en: "Meiosis", es: "Meiosis", de: "Meiose", nl: "Meiose" }
        ],
        correct: 0,
        explanation: {
          en: "Angiogenesis is the process by which new blood vessels form from pre-existing vessels, involving endothelial cell proliferation, migration, and tube formation, regulated by growth factors like VEGF.",
          es: "La angiogénesis es el proceso por el cual se forman nuevos vasos sanguíneos a partir de vasos preexistentes, involucrando proliferación, migración y formación de tubos de células endoteliales, regulado por factores de crecimiento como VEGF.",
          de: "Angiogenese ist der Prozess, durch den neue Blutgefäße aus bereits existierenden Gefäßen entstehen, mit Endothelzellproliferation, -migration und -röhrenbildung, reguliert durch Wachstumsfaktoren wie VEGF.",
          nl: "Angiogenese is het proces waarbij nieuwe bloedvaten vormen uit reeds bestaande vaten, waarbij endotheelcelproliferatie, -migratie en buisvorming betrokken zijn, gereguleerd door groeifactoren zoals VEGF."
        }
      },
      {
        question: {
          en: "What is the primary difference between rough and smooth endoplasmic reticulum?",
          es: "¿Cuál es la diferencia primaria entre el retículo endoplásmico rugoso y liso?",
          de: "Was ist der primäre Unterschied zwischen rauhem und glattem endoplasmatischem Retikulum?",
          nl: "Wat is het primaire verschil tussen ruw en glad endoplasmatisch reticulum?"
        },
        options: [
          { en: "Rough ER has ribosomes attached, smooth ER does not", es: "El RE rugoso tiene ribosomas adheridos, el RE liso no", de: "Rauhes ER hat Ribosomen angeheftet, glattes ER nicht", nl: "Ruw ER heeft ribosomen gehecht, glad ER niet" },
          { en: "Smooth ER produces proteins, rough ER produces lipids", es: "El RE liso produce proteínas, el RE rugoso produce lípidos", de: "Glattes ER produziert Proteine, rauhes ER produziert Lipide", nl: "Glad ER produceert eiwitten, ruw ER produceert lipiden" },
          { en: "They have different membrane compositions", es: "Tienen composiciones de membrana diferentes", de: "Sie haben unterschiedliche Membranzusammensetzungen", nl: "Ze hebben verschillende membraansamenstellingen" },
          { en: "Rough ER is found only in plant cells", es: "El RE rugoso se encuentra solo en células vegetales", de: "Rauhes ER findet sich nur in Pflanzenzellen", nl: "Ruw ER wordt alleen gevonden in plantencellen" }
        ],
        correct: 0,
        explanation: {
          en: "Rough ER has ribosomes attached to its surface, giving it a 'rough' appearance and specializing in protein synthesis. Smooth ER lacks ribosomes and functions in lipid synthesis and detoxification.",
          es: "El RE rugoso tiene ribosomas adheridos a su superficie, dándole una apariencia 'rugosa' y especializándose en síntesis de proteínas. El RE liso carece de ribosomas y funciona en síntesis de lípidos y desintoxicación.",
          de: "Rauhes ER hat Ribosomen an seiner Oberfläche angeheftet, was ihm ein 'rauhes' Aussehen verleiht und es auf Proteinsynthese spezialisiert. Glattes ER fehlen Ribosomen und es funktioniert in Lipidsynthese und Entgiftung.",
          nl: "Ruw ER heeft ribosomen gehecht aan zijn oppervlak, wat het een 'ruwe' verschijning geeft en specialiseert in eiwitsynthese. Glad ER mist ribosomen en functioneert in lipidesynthese en ontgifting."
        }
      },
      {
        question: {
          en: "Which molecule serves as the template for protein synthesis during translation?",
          es: "¿Qué molécula sirve como plantilla para la síntesis de proteínas durante la traducción?",
          de: "Welches Molekül dient als Vorlage für die Proteinsynthese während der Translation?",
          nl: "Welk molecuul dient als sjabloon voor eiwitsynthese tijdens translatie?"
        },
        options: [
          { en: "mRNA", es: "ARNm", de: "mRNA", nl: "mRNA" },
          { en: "tRNA", es: "ARNt", de: "tRNA", nl: "tRNA" },
          { en: "rRNA", es: "ARNr", de: "rRNA", nl: "rRNA" },
          { en: "DNA", es: "ADN", de: "DNA", nl: "DNA" }
        ],
        correct: 0,
        explanation: {
          en: "mRNA (messenger RNA) carries the genetic code from DNA and serves as the template that ribosomes read to synthesize proteins by translating codons into amino acid sequences.",
          es: "El ARNm (ARN mensajero) lleva el código genético del ADN y sirve como plantilla que los ribosomas leen para sintetizar proteínas traduciendo codones en secuencias de aminoácidos.",
          de: "mRNA (Boten-RNA) trägt den genetischen Code von der DNA und dient als Vorlage, die Ribosomen lesen, um Proteine zu synthetisieren, indem Codons in Aminosäuresequenzen übersetzt werden.",
          nl: "mRNA (boodschapper-RNA) draagt de genetische code van DNA en dient als sjabloon die ribosomen lezen om eiwitten te synthetiseren door codons te vertalen in aminozuursequenties."
        }
      },
      {
        question: {
          en: "What is the function of tumor suppressor genes in normal cells?",
          es: "¿Cuál es la función de los genes supresores de tumores en células normales?",
          de: "Was ist die Funktion von Tumorsuppressorgenen in normalen Zellen?",
          nl: "Wat is de functie van tumorsuppressorgenen in normale cellen?"
        },
        options: [
          { en: "Prevent uncontrolled cell division and growth", es: "Prevenir división y crecimiento celular descontrolado", de: "Unkontrollierte Zellteilung und Wachstum verhindern", nl: "Ongecontroleerde celdeling en groei voorkomen" },
          { en: "Promote rapid cell proliferation", es: "Promover proliferación celular rápida", de: "Schnelle Zellproliferation fördern", nl: "Snelle celproliferatie bevorderen" },
          { en: "Synthesize growth hormones", es: "Sintetizar hormonas de crecimiento", de: "Wachstumshormone synthetisieren", nl: "Groeihormonen synthetiseren" },
          { en: "Enhance DNA replication speed", es: "Mejorar velocidad de replicación del ADN", de: "DNA-Replikationsgeschwindigkeit verbessern", nl: "DNA-replicatiesnelheid verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Tumor suppressor genes like p53 and Rb regulate cell cycle progression, promote DNA repair, and induce apoptosis when cells are damaged, preventing transformation into cancer cells.",
          es: "Los genes supresores de tumores como p53 y Rb regulan la progresión del ciclo celular, promueven la reparación del ADN e inducen apoptosis cuando las células están dañadas, previniendo transformación en células cancerosas.",
          de: "Tumorsuppressorgene wie p53 und Rb regulieren Zellzyklusprogression, fördern DNA-Reparatur und induzieren Apoptose bei geschädigten Zellen, wodurch Transformation in Krebszellen verhindert wird.",
          nl: "Tumorsuppressorgenen zoals p53 en Rb reguleren celcyclusprogressie, bevorderen DNA-herstel en induceren apoptose wanneer cellen beschadigd zijn, wat transformatie naar kankercellen voorkomt."
        }
      },
      {
        question: {
          en: "Which process describes the synthesis of RNA from a DNA template?",
          es: "¿Qué proceso describe la síntesis de ARN a partir de una plantilla de ADN?",
          de: "Welcher Prozess beschreibt die Synthese von RNA aus einer DNA-Vorlage?",
          nl: "Welk proces beschrijft de synthese van RNA van een DNA-sjabloon?"
        },
        options: [
          { en: "Transcription", es: "Transcripción", de: "Transkription", nl: "Transcriptie" },
          { en: "Translation", es: "Traducción", de: "Translation", nl: "Translatie" },
          { en: "Replication", es: "Replicación", de: "Replikation", nl: "Replicatie" },
          { en: "Reverse transcription", es: "Transcripción inversa", de: "Reverse Transkription", nl: "Omgekeerde transcriptie" }
        ],
        correct: 0,
        explanation: {
          en: "Transcription is the process where RNA polymerase reads DNA template strands and synthesizes complementary RNA molecules, including mRNA, tRNA, and rRNA.",
          es: "La transcripción es el proceso donde la ARN polimerasa lee hebras plantilla de ADN y sintetiza moléculas de ARN complementarias, incluyendo ARNm, ARNt y ARNr.",
          de: "Transkription ist der Prozess, bei dem RNA-Polymerase DNA-Vorlagenstränge liest und komplementäre RNA-Moleküle synthetisiert, einschließlich mRNA, tRNA und rRNA.",
          nl: "Transcriptie is het proces waarbij RNA-polymerase DNA-sjabloonstrengelen leest en complementaire RNA-moleculen synthetiseert, inclusief mRNA, tRNA en rRNA."
        }
      },
      {
        question: {
          en: "What is the role of histone proteins in DNA organization?",
          es: "¿Cuál es el papel de las proteínas histonas en la organización del ADN?",
          de: "Was ist die Rolle von Histonproteinen bei der DNA-Organisation?",
          nl: "Wat is de rol van histoneiwitten bij DNA-organisatie?"
        },
        options: [
          { en: "Package and organize DNA into nucleosomes and chromatin", es: "Empaquetar y organizar ADN en nucleosomas y cromatina", de: "DNA in Nukleosomen und Chromatin verpacken und organisieren", nl: "DNA verpakken en organiseren in nucleosomen en chromatine" },
          { en: "Replicate DNA during cell division", es: "Replicar ADN durante división celular", de: "DNA während Zellteilung replizieren", nl: "DNA repliceren tijdens celdeling" },
          { en: "Repair damaged DNA sequences", es: "Reparar secuencias de ADN dañadas", de: "Beschädigte DNA-Sequenzen reparieren", nl: "Beschadigde DNA-sequenties repareren" },
          { en: "Transport DNA between cells", es: "Transportar ADN entre células", de: "DNA zwischen Zellen transportieren", nl: "DNA tussen cellen transporteren" }
        ],
        correct: 0,
        explanation: {
          en: "Histone proteins form the core around which DNA wraps to form nucleosomes, the basic units of chromatin. This packaging allows long DNA molecules to fit within the nucleus while regulating gene access.",
          es: "Las proteínas histonas forman el núcleo alrededor del cual se envuelve el ADN para formar nucleosomas, las unidades básicas de la cromatina. Este empaquetamiento permite que moléculas largas de ADN caben dentro del núcleo mientras regulan el acceso génico.",
          de: "Histonproteine bilden den Kern, um den sich DNA wickelt, um Nukleosomen zu bilden, die Grundeinheiten des Chromatins. Diese Verpackung ermöglicht es langen DNA-Molekülen, in den Zellkern zu passen, während der Genzugang reguliert wird.",
          nl: "Histoneiwitten vormen de kern waaromheen DNA wikkelt om nucleosomen te vormen, de basiseenheden van chromatine. Deze verpakking stelt lange DNA-moleculen in staat in de celkern te passen terwijl gentoegang wordt gereguleerd."
        }
      },
      {
        question: {
          en: "Which cellular organelle is primarily responsible for calcium storage and release?",
          es: "¿Qué orgánulo celular es principalmente responsable del almacenamiento y liberación de calcio?",
          de: "Welches zelluläre Organell ist hauptsächlich für Kalziumspeicherung und -freisetzung verantwortlich?",
          nl: "Welke cellulaire organelle is hoofdzakelijk verantwoordelijk voor calciumopslag en -afgifte?"
        },
        options: [
          { en: "Sarcoplasmic/Endoplasmic reticulum", es: "Retículo sarcoplásmico/endoplásmico", de: "Sarkoplasmatisches/Endoplasmatisches Retikulum", nl: "Sarcoplasmatisch/Endoplasmatisch reticulum" },
          { en: "Mitochondria", es: "Mitocondrias", de: "Mitochondrien", nl: "Mitochondriën" },
          { en: "Golgi apparatus", es: "Aparato de Golgi", de: "Golgi-Apparat", nl: "Golgi-apparaat" },
          { en: "Peroxisomes", es: "Peroxisomas", de: "Peroxisomen", nl: "Peroxisomen" }
        ],
        correct: 0,
        explanation: {
          en: "The endoplasmic reticulum (particularly the sarcoplasmic reticulum in muscle cells) serves as the primary intracellular calcium storage compartment and regulates calcium release for various cellular functions.",
          es: "El retículo endoplásmico (particularmente el retículo sarcoplásmico en células musculares) sirve como el compartimento primario de almacenamiento de calcio intracelular y regula la liberación de calcio para varias funciones celulares.",
          de: "Das endoplasmatische Retikulum (besonders das sarkoplasmatische Retikulum in Muskelzellen) dient als primäres intrazelluläres Kalziumspeicherkompartiment und reguliert Kalziumfreisetzung für verschiedene zelluläre Funktionen.",
          nl: "Het endoplasmatisch reticulum (vooral het sarcoplasmatisch reticulum in spiercellen) dient als het primaire intracellulaire calciumopslagcompartiment en reguleert calciumafgifte voor verschillende cellulaire functies."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of gene regulation in prokaryotes?",
          es: "¿Cuál es el mecanismo primario de regulación génica en procariotas?",
          de: "Was ist der primäre Mechanismus der Genregulation in Prokaryoten?",
          nl: "Wat is het primaire mechanisme van genregulatie bij prokaryoten?"
        },
        options: [
          { en: "Operons and transcriptional control", es: "Operones y control transcripcional", de: "Operons und Transkriptionskontrolle", nl: "Operons en transcriptionele controle" },
          { en: "DNA methylation", es: "Metilación del ADN", de: "DNA-Methylierung", nl: "DNA-methylering" },
          { en: "Chromatin remodeling", es: "Remodelación de cromatina", de: "Chromatin-Remodeling", nl: "Chromatineremodelling" },
          { en: "MicroRNA regulation", es: "Regulación por microARN", de: "MicroRNA-Regulation", nl: "MicroRNA-regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Prokaryotes primarily use operons (clusters of genes under common control) and transcriptional regulation through activators and repressors to efficiently respond to environmental changes.",
          es: "Los procariotas principalmente usan operones (grupos de genes bajo control común) y regulación transcripcional a través de activadores y represores para responder eficientemente a cambios ambientales.",
          de: "Prokaryoten verwenden hauptsächlich Operons (Gengruppen unter gemeinsamer Kontrolle) und Transkriptionsregulation durch Aktivatoren und Repressoren, um effizient auf Umweltveränderungen zu reagieren.",
          nl: "Prokaryoten gebruiken hoofdzakelijk operons (genclusters onder gemeenschappelijke controle) en transcriptionele regulatie door activatoren en repressoren om efficiënt te reageren op omgevingsveranderingen."
        }
      },
      {
        question: {
          en: "Which process allows cells to respond to external signals and change their behavior?",
          es: "¿Qué proceso permite a las células responder a señales externas y cambiar su comportamiento?",
          de: "Welcher Prozess ermöglicht es Zellen, auf externe Signale zu reagieren und ihr Verhalten zu ändern?",
          nl: "Welk proces stelt cellen in staat te reageren op externe signalen en hun gedrag te veranderen?"
        },
        options: [
          { en: "Signal transduction", es: "Transducción de señales", de: "Signaltransduktion", nl: "Signaaltransductie" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
          { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitsynthese" },
          { en: "Cell division", es: "División celular", de: "Zellteilung", nl: "Celdeling" }
        ],
        correct: 0,
        explanation: {
          en: "Signal transduction involves receptor binding, signal amplification, and cellular responses through cascades of molecular interactions that allow cells to detect, process, and respond to their environment.",
          es: "La transducción de señales involucra unión a receptores, amplificación de señales y respuestas celulares a través de cascadas de interacciones moleculares que permiten a las células detectar, procesar y responder a su ambiente.",
          de: "Signaltransduktion umfasst Rezeptorbindung, Signalverstärkung und zelluläre Antworten durch Kaskaden molekularer Interaktionen, die es Zellen ermöglichen, ihre Umgebung zu erkennen, zu verarbeiten und darauf zu reagieren.",
          nl: "Signaaltransductie omvat receptorbinding, signaalversterking en cellulaire responsen door cascades van moleculaire interacties die cellen in staat stellen hun omgeving te detecteren, verwerken en erop te reageren."
        }
      },
      {
        question: {
          en: "What is the primary function of the proteasome in cells?",
          es: "¿Cuál es la función primaria del proteasoma en las células?",
          de: "Was ist die primäre Funktion des Proteasoms in Zellen?",
          nl: "Wat is de primaire functie van het proteasoom in cellen?"
        },
        options: [
          { en: "Degrade damaged or unwanted proteins", es: "Degradar proteínas dañadas o no deseadas", de: "Beschädigte oder unerwünschte Proteine abbauen", nl: "Beschadigde of ongewenste eiwitten afbreken" },
          { en: "Synthesize new proteins", es: "Sintetizar nuevas proteínas", de: "Neue Proteine synthetisieren", nl: "Nieuwe eiwitten synthetiseren" },
          { en: "Transport proteins between organelles", es: "Transportar proteínas entre orgánulos", de: "Proteine zwischen Organellen transportieren", nl: "Eiwitten tussen organellen transporteren" },
          { en: "Modify protein structure", es: "Modificar estructura de proteínas", de: "Proteinstruktur modifizieren", nl: "Eiwitstructuur modificeren" }
        ],
        correct: 0,
        explanation: {
          en: "The proteasome is a large protein complex that degrades proteins tagged with ubiquitin, maintaining protein homeostasis by removing damaged, misfolded, or regulatory proteins.",
          es: "El proteasoma es un complejo proteico grande que degrada proteínas marcadas con ubiquitina, manteniendo homeostasis proteica al remover proteínas dañadas, mal plegadas o regulatorias.",
          de: "Das Proteasom ist ein großer Proteinkomplex, der mit Ubiquitin markierte Proteine abbaut und Proteinhomöostase durch Entfernung beschädigter, fehlgefalteter oder regulatorischer Proteine aufrechterhält.",
          nl: "Het proteasoom is een groot eiwitcomplex dat eiwitten afbreekt die gemerkt zijn met ubiquitine, waarbij eiwithomeostase wordt behouden door beschadigde, verkeerd gevouwen of regulatoire eiwitten te verwijderen."
        }
      },
      {
        question: {
          en: "Which cellular structure connects adjacent plant cells and allows molecular transport?",
          es: "¿Qué estructura celular conecta células vegetales adyacentes y permite transporte molecular?",
          de: "Welche zelluläre Struktur verbindet benachbarte Pflanzenzellen und ermöglicht molekularen Transport?",
          nl: "Welke cellulaire structuur verbindt aangrenzende plantencellen en maakt moleculair transport mogelijk?"
        },
        options: [
          { en: "Plasmodesmata", es: "Plasmodesmos", de: "Plasmodesmen", nl: "Plasmodesmata" },
          { en: "Gap junctions", es: "Uniones gap", de: "Gap Junctions", nl: "Gap junctions" },
          { en: "Tight junctions", es: "Uniones estrechas", de: "Tight Junctions", nl: "Tight junctions" },
          { en: "Desmosomes", es: "Desmosomas", de: "Desmosomen", nl: "Desmosomen" }
        ],
        correct: 0,
        explanation: {
          en: "Plasmodesmata are cytoplasmic channels that traverse plant cell walls, allowing direct communication and transport of molecules, ions, and small proteins between adjacent cells.",
          es: "Los plasmodesmos son canales citoplasmáticos que atraviesan las paredes celulares vegetales, permitiendo comunicación directa y transporte de moléculas, iones y proteínas pequeñas entre células adyacentes.",
          de: "Plasmodesmen sind zytoplasmatische Kanäle, die Pflanzenzellwände durchqueren und direkte Kommunikation und Transport von Molekülen, Ionen und kleinen Proteinen zwischen benachbarten Zellen ermöglichen.",
          nl: "Plasmodesmata zijn cytoplasmatische kanalen die plantencelwanden doorkruisen, wat directe communicatie en transport van moleculen, ionen en kleine eiwitten tussen aangrenzende cellen mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the primary role of catalase enzyme in peroxisomes?",
          es: "¿Cuál es el papel primario de la enzima catalasa en los peroxisomas?",
          de: "Was ist die primäre Rolle des Enzyms Katalase in Peroxisomen?",
          nl: "Wat is de primaire rol van het enzym catalase in peroxisomen?"
        },
        options: [
          { en: "Break down hydrogen peroxide to water and oxygen", es: "Descomponer peróxido de hidrógeno en agua y oxígeno", de: "Wasserstoffperoxid zu Wasser und Sauerstoff abbauen", nl: "Waterstofperoxide afbreken tot water en zuurstof" },
          { en: "Synthesize fatty acids", es: "Sintetizar ácidos grasos", de: "Fettsäuren synthetisieren", nl: "Vetzuren synthetiseren" },
          { en: "Produce ATP", es: "Producir ATP", de: "ATP produzieren", nl: "ATP produceren" },
          { en: "Replicate DNA", es: "Replicar ADN", de: "DNA replizieren", nl: "DNA repliceren" }
        ],
        correct: 0,
        explanation: {
          en: "Catalase is a key enzyme in peroxisomes that detoxifies hydrogen peroxide (H₂O₂), a harmful byproduct of metabolic reactions, by breaking it down into harmless water and oxygen.",
          es: "La catalasa es una enzima clave en los peroxisomas que desintoxica el peróxido de hidrógeno (H₂O₂), un subproducto dañino de reacciones metabólicas, descomponiéndolo en agua y oxígeno inofensivos.",
          de: "Katalase ist ein Schlüsselenzym in Peroxisomen, das Wasserstoffperoxid (H₂O₂), ein schädliches Nebenprodukt metabolischer Reaktionen, entgiftet, indem es es in harmloses Wasser und Sauerstoff abbaut.",
          nl: "Catalase is een sleutelenzym in peroxisomen dat waterstofperoxide (H₂O₂), een schadelijk bijproduct van metabole reacties, ontgift door het af te breken tot onschadelijk water en zuurstof."
        }
      },
      {
        question: {
          en: "Which process describes the controlled breakdown of cellular components during stress or starvation?",
          es: "¿Qué proceso describe la descomposición controlada de componentes celulares durante estrés o inanición?",
          de: "Welcher Prozess beschreibt den kontrollierten Abbau zellulärer Komponenten während Stress oder Hunger?",
          nl: "Welk proces beschrijft de gecontroleerde afbraak van cellulaire componenten tijdens stress of uithongering?"
        },
        options: [
          { en: "Autophagy", es: "Autofagia", de: "Autophagie", nl: "Autofagie" },
          { en: "Phagocytosis", es: "Fagocitosis", de: "Phagozytose", nl: "Fagocytose" },
          { en: "Pinocytosis", es: "Pinocitosis", de: "Pinozytose", nl: "Pinocytose" },
          { en: "Exocytosis", es: "Exocitosis", de: "Exozytose", nl: "Exocytose" }
        ],
        correct: 0,
        explanation: {
          en: "Autophagy is a catabolic process where cells digest their own organelles and proteins to recycle nutrients during times of stress, starvation, or to remove damaged components.",
          es: "La autofagia es un proceso catabólico donde las células digieren sus propios orgánulos y proteínas para reciclar nutrientes durante tiempos de estrés, inanición, o para remover componentes dañados.",
          de: "Autophagie ist ein katabolischer Prozess, bei dem Zellen ihre eigenen Organellen und Proteine verdauen, um Nährstoffe während Stress, Hunger oder zur Entfernung beschädigter Komponenten zu recyceln.",
          nl: "Autofagie is een katabool proces waarbij cellen hun eigen organellen en eiwitten verteren om voedingsstoffen te recycleren tijdens stress, uithongering, of om beschadigde componenten te verwijderen."
        }
      },
      {
        question: {
          en: "What is the primary function of ribosomes in the cell?",
          es: "¿Cuál es la función primaria de los ribosomas en la célula?",
          de: "Was ist die primäre Funktion von Ribosomen in der Zelle?",
          nl: "Wat is de primaire functie van ribosomen in de cel?"
        },
        options: [
          { en: "Translate mRNA into proteins", es: "Traducir ARNm en proteínas", de: "mRNA in Proteine übersetzen", nl: "mRNA vertalen naar eiwitten" },
          { en: "Replicate DNA", es: "Replicar ADN", de: "DNA replizieren", nl: "DNA repliceren" },
          { en: "Synthesize lipids", es: "Sintetizar lípidos", de: "Lipide synthetisieren", nl: "Lipiden synthetiseren" },
          { en: "Package proteins", es: "Empaquetar proteínas", de: "Proteine verpacken", nl: "Eiwitten verpakken" }
        ],
        correct: 0,
        explanation: {
          en: "Ribosomes are the cellular machinery responsible for translation, reading mRNA codons and assembling corresponding amino acids into polypeptide chains to form functional proteins.",
          es: "Los ribosomas son la maquinaria celular responsable de la traducción, leyendo codones de ARNm y ensamblando aminoácidos correspondientes en cadenas polipeptídicas para formar proteínas funcionales.",
          de: "Ribosomen sind die zelluläre Maschinerie, die für die Translation verantwortlich ist, mRNA-Codons liest und entsprechende Aminosäuren zu Polypeptidketten zusammenfügt, um funktionale Proteine zu bilden.",
          nl: "Ribosomen zijn de cellulaire machinerie verantwoordelijk voor translatie, waarbij mRNA-codons worden gelezen en overeenkomstige aminozuren worden geassembleerd tot polypeptideketens om functionele eiwitten te vormen."
        }
      },
      {
        question: {
          en: "Which cellular junction type provides strong mechanical attachment between cells?",
          es: "¿Qué tipo de unión celular proporciona fuerte adhesión mecánica entre células?",
          de: "Welcher Typ von Zellverbindung bietet starke mechanische Befestigung zwischen Zellen?",
          nl: "Welk type cellulaire verbinding biedt sterke mechanische hechting tussen cellen?"
        },
        options: [
          { en: "Desmosomes", es: "Desmosomas", de: "Desmosomen", nl: "Desmosomen" },
          { en: "Gap junctions", es: "Uniones gap", de: "Gap Junctions", nl: "Gap junctions" },
          { en: "Tight junctions", es: "Uniones estrechas", de: "Tight Junctions", nl: "Tight junctions" },
          { en: "Adherens junctions", es: "Uniones adherentes", de: "Adherens Junctions", nl: "Adherens junctions" }
        ],
        correct: 0,
        explanation: {
          en: "Desmosomes are cell junctions that provide strong mechanical attachment between cells through intermediate filaments, particularly important in tissues subjected to mechanical stress like skin and heart muscle.",
          es: "Los desmosomas son uniones celulares que proporcionan fuerte adhesión mecánica entre células a través de filamentos intermedios, particularmente importantes en tejidos sometidos a estrés mecánico como piel y músculo cardíaco.",
          de: "Desmosomen sind Zellverbindungen, die starke mechanische Befestigung zwischen Zellen durch Intermediärfilamente bieten, besonders wichtig in Geweben, die mechanischem Stress ausgesetzt sind, wie Haut und Herzmuskel.",
          nl: "Desmosomen zijn celverbindingen die sterke mechanische hechting tussen cellen bieden via intermediaire filamenten, vooral belangrijk in weefsels die onderhevig zijn aan mechanische stress zoals huid en hartspier."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of epigenetic gene regulation?",
          es: "¿Cuál es el mecanismo primario de regulación génica epigenética?",
          de: "Was ist der primäre Mechanismus epigenetischer Genregulation?",
          nl: "Wat is het primaire mechanisme van epigenetische genregulatie?"
        },
        options: [
          { en: "DNA methylation and histone modifications", es: "Metilación del ADN y modificaciones de histonas", de: "DNA-Methylierung und Histonmodifikationen", nl: "DNA-methylering en histonmodificaties" },
          { en: "Gene deletion", es: "Deleción génica", de: "Gendeletion", nl: "Gendeletie" },
          { en: "Protein synthesis inhibition", es: "Inhibición de síntesis de proteínas", de: "Proteinsynthesehemmung", nl: "Eiwitsynthese inhibitie" },
          { en: "Chromosome rearrangement", es: "Reordenamiento cromosómico", de: "Chromosomenumordnung", nl: "Chromosoomherschikking" }
        ],
        correct: 0,
        explanation: {
          en: "Epigenetic regulation involves DNA methylation (adding methyl groups to cytosine) and histone modifications (acetylation, methylation) that alter gene expression without changing the DNA sequence.",
          es: "La regulación epigenética involucra metilación del ADN (agregando grupos metilo a citosina) y modificaciones de histonas (acetilación, metilación) que alteran la expresión génica sin cambiar la secuencia de ADN.",
          de: "Epigenetische Regulation umfasst DNA-Methylierung (Hinzufügung von Methylgruppen zu Cytosin) und Histonmodifikationen (Acetylierung, Methylierung), die Genexpression verändern, ohne die DNA-Sequenz zu ändern.",
          nl: "Epigenetische regulatie omvat DNA-methylering (toevoegen van methylgroepen aan cytosine) en histonmodificaties (acetylering, methylering) die genexpressie veranderen zonder de DNA-sequentie te wijzigen."
        }
      },
      {
        question: {
          en: "Which cellular organelle is known as the 'suicide bag' of the cell?",
          es: "¿Qué orgánulo celular es conocido como la 'bolsa suicida' de la célula?",
          de: "Welches zelluläre Organell ist als 'Selbstmordtasche' der Zelle bekannt?",
          nl: "Welke cellulaire organelle staat bekend als de 'zelfmoord zak' van de cel?"
        },
        options: [
          { en: "Lysosome", es: "Lisosoma", de: "Lysosom", nl: "Lysosoom" },
          { en: "Mitochondria", es: "Mitocondrias", de: "Mitochondrien", nl: "Mitochondriën" },
          { en: "Peroxisome", es: "Peroxisoma", de: "Peroxisom", nl: "Peroxisoom" },
          { en: "Ribosome", es: "Ribosoma", de: "Ribosom", nl: "Ribosoom" }
        ],
        correct: 0,
        explanation: {
          en: "Lysosomes are called 'suicide bags' because they contain powerful digestive enzymes that can break down cellular components, and when these enzymes are released, they can cause cell death.",
          es: "Los lisosomas se llaman 'bolsas suicidas' porque contienen enzimas digestivas poderosas que pueden descomponer componentes celulares, y cuando estas enzimas se liberan, pueden causar muerte celular.",
          de: "Lysosomen werden 'Selbstmordtaschen' genannt, weil sie kraftvolle Verdauungsenzyme enthalten, die zelluläre Komponenten abbauen können, und wenn diese Enzyme freigesetzt werden, können sie Zelltod verursachen.",
          nl: "Lysosomen worden 'zelfmoord zakken' genoemd omdat ze krachtige verteringsenzym bevatten die cellulaire componenten kunnen afbreken, en wanneer deze enzymen vrijkomen, kunnen ze celdood veroorzaken."
        }
      },
      {
        question: {
          en: "What is the primary function of the cytoskeleton in animal cells?",
          es: "¿Cuál es la función primaria del citoesqueleto en las células animales?",
          de: "Was ist die primäre Funktion des Zytoskeletts in Tierzellen?",
          nl: "Wat is de primaire functie van het cytoskelet in dierlijke cellen?"
        },
        options: [
          { en: "Provide structural support and enable cell movement", es: "Proporcionar soporte estructural y permitir movimiento celular", de: "Strukturelle Unterstützung bieten und Zellbewegung ermöglichen", nl: "Structurele ondersteuning bieden en celbeweging mogelijk maken" },
          { en: "Synthesize proteins", es: "Sintetizar proteínas", de: "Proteine synthetisieren", nl: "Eiwitten synthetiseren" },
          { en: "Store genetic material", es: "Almacenar material genético", de: "Genetisches Material speichern", nl: "Genetisch materiaal opslaan" },
          { en: "Generate energy", es: "Generar energía", de: "Energie erzeugen", nl: "Energie genereren" }
        ],
        correct: 0,
        explanation: {
          en: "The cytoskeleton, composed of microfilaments, intermediate filaments, and microtubules, maintains cell shape, provides structural support, enables organelle movement, and facilitates cell locomotion.",
          es: "El citoesqueleto, compuesto por microfilamentos, filamentos intermedios y microtúbulos, mantiene la forma celular, proporciona soporte estructural, permite movimiento de orgánulos y facilita locomoción celular.",
          de: "Das Zytoskelett, bestehend aus Mikrofilamenten, Intermediärfilamenten und Mikrotubuli, erhält die Zellform, bietet strukturelle Unterstützung, ermöglicht Organellenbewegung und erleichtert Zellbewegung.",
          nl: "Het cytoskelet, samengesteld uit microfilamenten, intermediaire filamenten en microtubuli, behoudt celvorm, biedt structurele ondersteuning, maakt organelbeweging mogelijk en faciliteert celbeweging."
        }
      },
      {
        question: {
          en: "Which process allows the cell to maintain constant internal conditions despite environmental changes?",
          es: "¿Qué proceso permite a la célula mantener condiciones internas constantes a pesar de cambios ambientales?",
          de: "Welcher Prozess ermöglicht es der Zelle, konstante innere Bedingungen trotz Umweltveränderungen aufrechtzuerhalten?",
          nl: "Welk proces stelt de cel in staat constante interne condities te behouden ondanks omgevingsveranderingen?"
        },
        options: [
          { en: "Homeostasis", es: "Homeostasis", de: "Homöostase", nl: "Homeostase" },
          { en: "Metabolism", es: "Metabolismo", de: "Stoffwechsel", nl: "Metabolisme" },
          { en: "Evolution", es: "Evolución", de: "Evolution", nl: "Evolutie" },
          { en: "Reproduction", es: "Reproducción", de: "Fortpflanzung", nl: "Voortplanting" }
        ],
        correct: 0,
        explanation: {
          en: "Homeostasis is the process by which cells maintain stable internal conditions such as pH, ion concentrations, and temperature through feedback mechanisms and regulatory systems.",
          es: "La homeostasis es el proceso por el cual las células mantienen condiciones internas estables como pH, concentraciones de iones y temperatura a través de mecanismos de retroalimentación y sistemas regulatorios.",
          de: "Homöostase ist der Prozess, durch den Zellen stabile innere Bedingungen wie pH-Wert, Ionenkonzentrationen und Temperatur durch Rückkopplungsmechanismen und regulatorische Systeme aufrechterhalten.",
          nl: "Homeostase is het proces waarbij cellen stabiele interne condities zoals pH, ionconcentraties en temperatuur behouden via feedbackmechanismen en regulatoire systemen."
        }
      },
      {
        question: {
          en: "What is the main difference between facilitated diffusion and active transport?",
          es: "¿Cuál es la principal diferencia entre difusión facilitada y transporte activo?",
          de: "Was ist der Hauptunterschied zwischen erleichterter Diffusion und aktivem Transport?",
          nl: "Wat is het hoofdverschil tussen gefaciliteerde diffusie en actief transport?"
        },
        options: [
          { en: "Active transport requires energy (ATP), facilitated diffusion does not", es: "El transporte activo requiere energía (ATP), la difusión facilitada no", de: "Aktiver Transport benötigt Energie (ATP), erleichterte Diffusion nicht", nl: "Actief transport vereist energie (ATP), gefaciliteerde diffusie niet" },
          { en: "Facilitated diffusion uses proteins, active transport does not", es: "La difusión facilitada usa proteínas, el transporte activo no", de: "Erleichterte Diffusion verwendet Proteine, aktiver Transport nicht", nl: "Gefaciliteerde diffusie gebruikt eiwitten, actief transport niet" },
          { en: "Active transport is faster than facilitated diffusion", es: "El transporte activo es más rápido que la difusión facilitada", de: "Aktiver Transport ist schneller als erleichterte Diffusion", nl: "Actief transport is sneller dan gefaciliteerde diffusie" },
          { en: "They transport different types of molecules", es: "Transportan diferentes tipos de moléculas", de: "Sie transportieren verschiedene Arten von Molekülen", nl: "Ze transporteren verschillende soorten moleculen" }
        ],
        correct: 0,
        explanation: {
          en: "The key difference is energy requirement: active transport uses ATP to move substances against their concentration gradient, while facilitated diffusion moves substances down their gradient without energy input.",
          es: "La diferencia clave es el requerimiento energético: el transporte activo usa ATP para mover sustancias contra su gradiente de concentración, mientras que la difusión facilitada mueve sustancias a favor de su gradiente sin entrada de energía.",
          de: "Der Hauptunterschied ist der Energiebedarf: Aktiver Transport verwendet ATP, um Substanzen gegen ihren Konzentrationsgradienten zu bewegen, während erleichterte Diffusion Substanzen entlang ihres Gradienten ohne Energiezufuhr bewegt.",
          nl: "Het belangrijkste verschil is energievereiste: actief transport gebruikt ATP om stoffen tegen hun concentratiegradiënt in te verplaatsen, terwijl gefaciliteerde diffusie stoffen langs hun gradiënt verplaatst zonder energie-input."
        }
      },
      {
        question: {
          en: "Which cellular process is responsible for maintaining telomere length in stem cells and cancer cells?",
          es: "¿Qué proceso celular es responsable de mantener la longitud de telómeros en células madre y células cancerosas?",
          de: "Welcher zelluläre Prozess ist für die Aufrechterhaltung der Telomerlänge in Stammzellen und Krebszellen verantwortlich?",
          nl: "Welk cellulair proces is verantwoordelijk voor het behouden van telomeerlengte in stamcellen en kankercellen?"
        },
        options: [
          { en: "Telomerase activity", es: "Actividad de telomerasa", de: "Telomerase-Aktivität", nl: "Telomerase activiteit" },
          { en: "DNA polymerase", es: "ADN polimerasa", de: "DNA-Polymerase", nl: "DNA polymerase" },
          { en: "Histone acetylation", es: "Acetilación de histonas", de: "Histonacetylierung", nl: "Histon acetylering" },
          { en: "mRNA processing", es: "Procesamiento de ARNm", de: "mRNA-Verarbeitung", nl: "mRNA verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Telomerase is an enzyme that adds telomeric DNA sequences to chromosome ends, preventing telomere shortening. It's active in stem cells and many cancer cells, allowing unlimited cell divisions.",
          es: "La telomerasa es una enzima que agrega secuencias de ADN telomérico a los extremos cromosómicos, previniendo el acortamiento de telómeros. Está activa en células madre y muchas células cancerosas, permitiendo divisiones celulares ilimitadas.",
          de: "Telomerase ist ein Enzym, das telomere DNA-Sequenzen an Chromosomenden hinzufügt und Telomerverkürzung verhindert. Es ist in Stammzellen und vielen Krebszellen aktiv und ermöglicht unbegrenzte Zellteilungen.",
          nl: "Telomerase is een enzym dat telomere DNA-sequenties toevoegt aan chromosoomuiteinden, wat telomeerverkorting voorkomt. Het is actief in stamcellen en veel kankercellen, waardoor onbeperkte celdelingen mogelijk zijn."
        }
      },
      {
        question: {
          en: "What is the primary role of microRNAs (miRNAs) in gene regulation?",
          es: "¿Cuál es el papel primario de los microARNs (miARNs) en la regulación génica?",
          de: "Was ist die primäre Rolle von microRNAs (miRNAs) bei der Genregulation?",
          nl: "Wat is de primaire rol van microRNAs (miRNAs) bij genregulatie?"
        },
        options: [
          { en: "Post-transcriptional silencing of target mRNAs", es: "Silenciamiento post-transcripcional de ARNms objetivo", de: "Post-transkriptionale Stilllegung von Ziel-mRNAs", nl: "Post-transcriptionele stillegging van doel-mRNAs" },
          { en: "Enhance protein synthesis", es: "Mejorar síntesis de proteínas", de: "Proteinsynthese verbessern", nl: "Eiwitsynthese verbeteren" },
          { en: "Replicate DNA sequences", es: "Replicar secuencias de ADN", de: "DNA-Sequenzen replizieren", nl: "DNA-sequenties repliceren" },
          { en: "Transport proteins across membranes", es: "Transportar proteínas a través de membranas", de: "Proteine durch Membranen transportieren", nl: "Eiwitten door membranen transporteren" }
        ],
        correct: 0,
        explanation: {
          en: "microRNAs are small non-coding RNAs that bind to complementary sequences on target mRNAs, leading to mRNA degradation or translation inhibition, thereby regulating gene expression post-transcriptionally.",
          es: "Los microARNs son ARNs pequeños no codificantes que se unen a secuencias complementarias en ARNms objetivo, llevando a degradación de ARNm o inhibición de traducción, regulando así expresión génica post-transcripcionalmente.",
          de: "microRNAs sind kleine nicht-kodierende RNAs, die an komplementäre Sequenzen auf Ziel-mRNAs binden, was zu mRNA-Abbau oder Translationshemmung führt und dadurch Genexpression post-transkriptional reguliert.",
          nl: "microRNAs zijn kleine niet-coderende RNAs die binden aan complementaire sequenties op doel-mRNAs, wat leidt tot mRNA-afbraak of translatie-inhibitie, waardoor genexpressie post-transcriptioneel wordt gereguleerd."
        }
      },
      {
        question: {
          en: "Which phase of the cell cycle is characterized by DNA synthesis?",
          es: "¿Qué fase del ciclo celular se caracteriza por la síntesis de ADN?",
          de: "Welche Phase des Zellzyklus ist durch DNA-Synthese gekennzeichnet?",
          nl: "Welke fase van de celcyclus wordt gekenmerkt door DNA-synthese?"
        },
        options: [
          { en: "S phase", es: "Fase S", de: "S-Phase", nl: "S-fase" },
          { en: "G1 phase", es: "Fase G1", de: "G1-Phase", nl: "G1-fase" },
          { en: "G2 phase", es: "Fase G2", de: "G2-Phase", nl: "G2-fase" },
          { en: "M phase", es: "Fase M", de: "M-Phase", nl: "M-fase" }
        ],
        correct: 0,
        explanation: {
          en: "The S (synthesis) phase is when DNA replication occurs, resulting in the duplication of the entire genome. This phase occurs between G1 and G2 phases of interphase.",
          es: "La fase S (síntesis) es cuando ocurre la replicación del ADN, resultando en la duplicación de todo el genoma. Esta fase ocurre entre las fases G1 y G2 de la interfase.",
          de: "Die S (Synthese) Phase ist, wenn DNA-Replikation auftritt, was zur Verdopplung des gesamten Genoms führt. Diese Phase tritt zwischen G1- und G2-Phasen der Interphase auf.",
          nl: "De S (synthese) fase is wanneer DNA-replicatie plaatsvindt, wat resulteert in de duplicatie van het hele genoom. Deze fase vindt plaats tussen G1 en G2 fasen van interfase."
        }
      },
      {
        question: {
          en: "What is the primary function of the endoplasmic reticulum in lipid metabolism?",
          es: "¿Cuál es la función primaria del retículo endoplásmico en el metabolismo de lípidos?",
          de: "Was ist die primäre Funktion des endoplasmatischen Retikulums im Lipidstoffwechsel?",
          nl: "Wat is de primaire functie van het endoplasmatisch reticulum bij lipidemetabolisme?"
        },
        options: [
          { en: "Synthesize phospholipids and steroids", es: "Sintetizar fosfolípidos y esteroides", de: "Phospholipide und Steroide synthetisieren", nl: "Fosfolipiden en steroïden synthetiseren" },
          { en: "Break down fatty acids", es: "Descomponer ácidos grasos", de: "Fettsäuren abbauen", nl: "Vetzuren afbreken" },
          { en: "Store lipid molecules", es: "Almacenar moléculas lipídicas", de: "Lipidmoleküle speichern", nl: "Lipidemoleculen opslaan" },
          { en: "Transport lipids to other cells", es: "Transportar lípidos a otras células", de: "Lipide zu anderen Zellen transportieren", nl: "Lipiden naar andere cellen transporteren" }
        ],
        correct: 0,
        explanation: {
          en: "The smooth ER is the primary site for lipid synthesis, including phospholipids for membrane formation and steroids like cholesterol and steroid hormones. It contains the enzymes necessary for these biosynthetic pathways.",
          es: "El RE liso es el sitio primario para síntesis de lípidos, incluyendo fosfolípidos para formación de membranas y esteroides como colesterol y hormonas esteroides. Contiene las enzimas necesarias para estas vías biosintéticas.",
          de: "Das glatte ER ist der primäre Ort für Lipidsynthese, einschließlich Phospholipiden für Membranbildung und Steroiden wie Cholesterin und Steroidhormonen. Es enthält die für diese biosynthetischen Wege notwendigen Enzyme.",
          nl: "Het gladde ER is de primaire plaats voor lipidesynthese, inclusief fosfolipiden voor membraanvorming en steroïden zoals cholesterol en steroïdhormonen. Het bevat de enzymen die nodig zijn voor deze biosynthetische routes."
        }
      },
      {
        question: {
          en: "What is the role of the signal recognition particle (SRP) in protein synthesis?",
          es: "¿Cuál es el papel de la partícula de reconocimiento de señal (SRP) en la síntesis de proteínas?",
          de: "Was ist die Rolle des Signalerkennungspartikels (SRP) bei der Proteinsynthese?",
          nl: "Wat is de rol van het signaalherkenningsdeeltje (SRP) bij eiwittsynthese?"
        },
        options: [
          { en: "Directs ribosomes to the ER for membrane protein synthesis", es: "Dirige ribosomas al RE para síntesis de proteínas de membrana", de: "Leitet Ribosomen zum ER für Membranproteinsynthese", nl: "Stuurt ribosomen naar het ER voor membraaneiwittsynthese" },
          { en: "Initiates translation of mRNA", es: "Inicia traducción de ARNm", de: "Initiiert Translation von mRNA", nl: "Initieert translatie van mRNA" },
          { en: "Cleaves signal sequences from proteins", es: "Corta secuencias señal de proteínas", de: "Spaltet Signalsequenzen von Proteinen", nl: "Knipt signaalsequenties van eiwitten" },
          { en: "Folds newly synthesized proteins", es: "Pliega proteínas recién sintetizadas", de: "Faltet neu synthetisierte Proteine", nl: "Vouwt nieuw gesynthetiseerde eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "The SRP recognizes signal sequences on nascent polypeptide chains and guides the ribosome to the ER surface, where the polypeptide can be inserted into or across the ER membrane.",
          es: "La SRP reconoce secuencias señal en cadenas polipeptídicas nacientes y guía el ribosoma a la superficie del RE, donde el polipéptido puede ser insertado en o a través de la membrana del RE.",
          de: "Das SRP erkennt Signalsequenzen auf entstehenden Polypeptidketten und führt das Ribosom zur ER-Oberfläche, wo das Polypeptid in oder durch die ER-Membran eingefügt werden kann.",
          nl: "Het SRP herkent signaalsequenties op ontstane polypeptideketens en gidst het ribosoom naar het ER-oppervlak, waar het polypeptide kan worden ingevoegd in of door het ER-membraan."
        }
      },
      {
        question: {
          en: "Which checkpoint in the cell cycle monitors chromosome attachment to spindle fibers?",
          es: "¿Qué punto de control en el ciclo celular monitorea la unión de cromosomas a fibras del huso?",
          de: "Welcher Kontrollpunkt im Zellzyklus überwacht die Anheftung von Chromosomen an Spindelfasern?",
          nl: "Welk controlepunt in de celcyclus monitort chromosoomhechting aan spoelfibres?"
        },
        options: [
          { en: "Spindle assembly checkpoint", es: "Punto de control del ensamblaje del huso", de: "Spindelmontage-Kontrollpunkt", nl: "Spoelassemblage controlepunt" },
          { en: "DNA damage checkpoint", es: "Punto de control de daño al ADN", de: "DNA-Schaden-Kontrollpunkt", nl: "DNA-schade controlepunt" },
          { en: "G1/S checkpoint", es: "Punto de control G1/S", de: "G1/S-Kontrollpunkt", nl: "G1/S controlepunt" },
          { en: "G2/M checkpoint", es: "Punto de control G2/M", de: "G2/M-Kontrollpunkt", nl: "G2/M controlepunt" }
        ],
        correct: 0,
        explanation: {
          en: "The spindle assembly checkpoint ensures all chromosomes are properly attached to spindle fibers before allowing progression from metaphase to anaphase, preventing chromosome missegregation.",
          es: "El punto de control del ensamblaje del huso asegura que todos los cromosomas estén apropiadamente unidos a fibras del huso antes de permitir progresión de metafase a anafase, previniendo segregación errónea de cromosomas.",
          de: "Der Spindelmontage-Kontrollpunkt stellt sicher, dass alle Chromosomen ordnungsgemäß an Spindelfasern befestigt sind, bevor der Übergang von Metaphase zu Anaphase ermöglicht wird, wodurch Chromosomenfehlverteilung verhindert wird.",
          nl: "Het spoelassemblage controlepunt zorgt ervoor dat alle chromosomen correct gehecht zijn aan spoelfibres voordat progressie van metafase naar anafase wordt toegestaan, wat chromosoomverkeerde verdeling voorkomt."
        }
      },
      {
        question: {
          en: "What is the function of telomerase in cellular aging?",
          es: "¿Cuál es la función de la telomerasa en el envejecimiento celular?",
          de: "Was ist die Funktion der Telomerase bei der Zellalterung?",
          nl: "Wat is de functie van telomerase bij celveroudering?"
        },
        options: [
          { en: "Extends telomeres to prevent cellular senescence", es: "Extiende telómeros para prevenir senescencia celular", de: "Verlängert Telomere, um zelluläre Seneszenz zu verhindern", nl: "Verlengt telomeren om cellulaire veroudering te voorkomen" },
          { en: "Repairs DNA damage in chromosomes", es: "Repara daño al ADN en cromosomas", de: "Repariert DNA-Schäden in Chromosomen", nl: "Repareert DNA-schade in chromosomen" },
          { en: "Removes damaged organelles", es: "Remueve organelos dañados", de: "Entfernt beschädigte Organellen", nl: "Verwijdert beschadigde organellen" },
          { en: "Degrades misfolded proteins", es: "Degrada proteínas mal plegadas", de: "Baut falsch gefaltete Proteine ab", nl: "Breekt verkeerd gevouwen eiwitten af" }
        ],
        correct: 0,
        explanation: {
          en: "Telomerase adds DNA sequences to the ends of chromosomes (telomeres), counteracting the gradual shortening that occurs with each cell division, thus extending cellular lifespan.",
          es: "La telomerasa añade secuencias de ADN a los extremos de cromosomas (telómeros), contrarrestando el acortamiento gradual que ocurre con cada división celular, extendiendo así la vida celular.",
          de: "Telomerase fügt DNA-Sequenzen an die Enden von Chromosomen (Telomere) hinzu, wirkt der allmählichen Verkürzung entgegen, die bei jeder Zellteilung auftritt, und verlängert damit die zelluläre Lebensdauer.",
          nl: "Telomerase voegt DNA-sequenties toe aan de uiteinden van chromosomen (telomeren), wat de geleidelijke verkorting tegengaat die optreedt bij elke celdeling, en zo de cellulaire levensduur verlengt."
        }
      },
      {
        question: {
          en: "Which process describes the movement of molecules from high to low concentration through membrane proteins?",
          es: "¿Qué proceso describe el movimiento de moléculas de alta a baja concentración a través de proteínas de membrana?",
          de: "Welcher Prozess beschreibt die Bewegung von Molekülen von hoher zu niedriger Konzentration durch Membranproteine?",
          nl: "Welk proces beschrijft de beweging van moleculen van hoge naar lage concentratie door membraaneiwitten?"
        },
        options: [
          { en: "Facilitated diffusion", es: "Difusión facilitada", de: "Erleichterte Diffusion", nl: "Gefaciliteerde diffusie" },
          { en: "Active transport", es: "Transporte activo", de: "Aktiver Transport", nl: "Actief transport" },
          { en: "Endocytosis", es: "Endocitosis", de: "Endozytose", nl: "Endocytose" },
          { en: "Osmosis", es: "Ósmosis", de: "Osmose", nl: "Osmose" }
        ],
        correct: 0,
        explanation: {
          en: "Facilitated diffusion is passive transport where specific membrane proteins (channels or carriers) help molecules cross the membrane down their concentration gradient without energy input.",
          es: "La difusión facilitada es transporte pasivo donde proteínas específicas de membrana (canales o transportadores) ayudan a moléculas cruzar la membrana siguiendo su gradiente de concentración sin entrada de energía.",
          de: "Erleichterte Diffusion ist passiver Transport, bei dem spezifische Membranproteine (Kanäle oder Träger) Molekülen helfen, die Membran entlang ihres Konzentrationsgradients ohne Energiezufuhr zu durchqueren.",
          nl: "Gefaciliteerde diffusie is passief transport waarbij specifieke membraaneiwitten (kanalen of dragers) moleculen helpen het membraan te kruisen langs hun concentratiegradiënt zonder energie-input."
        }
      },
      {
        question: {
          en: "What is the primary role of the nucleolus within the nucleus?",
          es: "¿Cuál es el papel primario del nucléolo dentro del núcleo?",
          de: "Was ist die primäre Rolle des Nukleolus innerhalb des Kerns?",
          nl: "Wat is de primaire rol van de nucleolus binnen de kern?"
        },
        options: [
          { en: "Ribosome assembly and rRNA processing", es: "Ensamblaje de ribosomas y procesamiento de ARNr", de: "Ribosomenassemblierung und rRNA-Verarbeitung", nl: "Ribosoomassemblage en rRNA-verwerking" },
          { en: "DNA replication", es: "Replicación de ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
          { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwittsynthese" },
          { en: "Chromatin packaging", es: "Empaquetamiento de cromatina", de: "Chromatinverpackung", nl: "Chromatine verpakking" }
        ],
        correct: 0,
        explanation: {
          en: "The nucleolus is the site where ribosomal RNA (rRNA) is transcribed, processed, and assembled with ribosomal proteins to form ribosomal subunits before export to the cytoplasm.",
          es: "El nucléolo es el sitio donde el ARN ribosomal (ARNr) es transcrito, procesado y ensamblado con proteínas ribosomales para formar subunidades ribosomales antes de exportación al citoplasma.",
          de: "Der Nukleolus ist der Ort, wo ribosomale RNA (rRNA) transkribiert, verarbeitet und mit ribosomalen Proteinen zu ribosomalen Untereinheiten zusammengebaut wird, bevor sie ins Zytoplasma exportiert werden.",
          nl: "De nucleolus is de plaats waar ribosomaal RNA (rRNA) wordt getranscribeerd, verwerkt en geassembleerd met ribosomale eiwitten om ribosomale subeenheden te vormen vóór export naar het cytoplasma."
        }
      },
      {
        question: {
          en: "Which molecular mechanism allows cells to respond to external signals?",
          es: "¿Qué mecanismo molecular permite a las células responder a señales externas?",
          de: "Welcher molekulare Mechanismus ermöglicht es Zellen, auf externe Signale zu reagieren?",
          nl: "Welk moleculair mechanisme stelt cellen in staat om te reageren op externe signalen?"
        },
        options: [
          { en: "Signal transduction pathways", es: "Vías de transducción de señales", de: "Signaltransduktionswege", nl: "Signaaltransductieroutes" },
          { en: "Gene expression", es: "Expresión génica", de: "Genexpression", nl: "Genexpressie" },
          { en: "Protein folding", es: "Plegamiento de proteínas", de: "Proteinfaltung", nl: "Eiwitvouwing" },
          { en: "Metabolic pathways", es: "Vías metabólicas", de: "Stoffwechselwege", nl: "Metabolische routes" }
        ],
        correct: 0,
        explanation: {
          en: "Signal transduction pathways detect, process, and respond to information from outside the cell through receptor proteins that trigger cascades of molecular events leading to cellular responses.",
          es: "Las vías de transducción de señales detectan, procesan y responden a información del exterior de la célula a través de proteínas receptoras que desencadenan cascadas de eventos moleculares llevando a respuestas celulares.",
          de: "Signaltransduktionswege erkennen, verarbeiten und reagieren auf Informationen von außerhalb der Zelle durch Rezeptorproteine, die Kaskaden molekularer Ereignisse auslösen, die zu zellulären Antworten führen.",
          nl: "Signaaltransductieroutes detecteren, verwerken en reageren op informatie van buiten de cel door receptoreiwitten die cascades van moleculaire gebeurtenissen veroorzaken die leiden tot cellulaire responsen."
        }
      },
      {
        question: {
          en: "What is the function of the proteasome in cellular protein regulation?",
          es: "¿Cuál es la función del proteasoma en la regulación de proteínas celulares?",
          de: "Was ist die Funktion des Proteasoms bei der zellulären Proteinregulation?",
          nl: "Wat is de functie van het proteasoom bij cellulaire eiwitregulatie?"
        },
        options: [
          { en: "Degrades ubiquitin-tagged proteins", es: "Degrada proteínas marcadas con ubiquitina", de: "Baut Ubiquitin-markierte Proteine ab", nl: "Breekt ubiquitine-gelabelde eiwitten af" },
          { en: "Synthesizes new proteins", es: "Sintetiza proteínas nuevas", de: "Synthetisiert neue Proteine", nl: "Synthetiseert nieuwe eiwitten" },
          { en: "Transports proteins to organelles", es: "Transporta proteínas a organelos", de: "Transportiert Proteine zu Organellen", nl: "Transporteert eiwitten naar organellen" },
          { en: "Modifies protein structure", es: "Modifica estructura de proteínas", de: "Modifiziert Proteinstruktur", nl: "Modificeert eiwitstructuur" }
        ],
        correct: 0,
        explanation: {
          en: "The proteasome is a large protein complex that selectively degrades proteins that have been tagged with ubiquitin, serving as the cell's major mechanism for protein quality control and regulation.",
          es: "El proteasoma es un complejo proteico grande que selectivamente degrada proteínas que han sido marcadas con ubiquitina, sirviendo como el mecanismo mayor de la célula para control de calidad y regulación de proteínas.",
          de: "Das Proteasom ist ein großer Proteinkomplex, der selektiv Proteine abbaut, die mit Ubiquitin markiert wurden, und dient als Hauptmechanismus der Zelle für Proteinqualitätskontrolle und -regulation.",
          nl: "Het proteasoom is een groot eiwitcomplex dat selectief eiwitten afbreekt die gelabeld zijn met ubiquitine, en dient als het hoofdmechanisme van de cel voor eiwitkwaliteitscontrole en -regulatie."
        }
      },
      {
        question: {
          en: "Which process describes the packaging of DNA into chromatin structure?",
          es: "¿Qué proceso describe el empaquetamiento de ADN en estructura de cromatina?",
          de: "Welcher Prozess beschreibt die Verpackung von DNA in Chromatinstruktur?",
          nl: "Welk proces beschrijft de verpakking van DNA in chromatinestructuur?"
        },
        options: [
          { en: "Chromatin assembly", es: "Ensamblaje de cromatina", de: "Chromatinassemblierung", nl: "Chromatine assemblage" },
          { en: "DNA methylation", es: "Metilación de ADN", de: "DNA-Methylierung", nl: "DNA-methylering" },
          { en: "Transcription", es: "Transcripción", de: "Transkription", nl: "Transcriptie" },
          { en: "DNA repair", es: "Reparación de ADN", de: "DNA-Reparatur", nl: "DNA-reparatie" }
        ],
        correct: 0,
        explanation: {
          en: "Chromatin assembly involves the organization of DNA around histone proteins to form nucleosomes, which are further compacted to fit the entire genome within the cell nucleus.",
          es: "El ensamblaje de cromatina involucra la organización de ADN alrededor de proteínas histonas para formar nucleosomas, que son compactados adicionalmente para ajustar todo el genoma dentro del núcleo celular.",
          de: "Chromatinassemblierung umfasst die Organisation von DNA um Histonproteine, um Nukleosomen zu bilden, die weiter kompaktiert werden, um das gesamte Genom im Zellkern unterzubringen.",
          nl: "Chromatine assemblage behelst de organisatie van DNA rond histoneiwitten om nucleosomen te vormen, die verder gecompacteerd worden om het hele genoom in de celkern te laten passen."
        }
      },
      {
        question: {
          en: "What is the primary function of chaperone proteins in the cell?",
          es: "¿Cuál es la función primaria de las proteínas chaperonas en la célula?",
          de: "Was ist die primäre Funktion von Chaperon-Proteinen in der Zelle?",
          nl: "Wat is de primaire functie van chaperone-eiwitten in de cel?"
        },
        options: [
          { en: "Assist protein folding and prevent aggregation", es: "Asistir plegamiento de proteínas y prevenir agregación", de: "Proteinfaltung unterstützen und Aggregation verhindern", nl: "Helpen bij eiwitvouwing en voorkomen aggregatie" },
          { en: "Transport proteins across membranes", es: "Transportar proteínas a través de membranas", de: "Proteine durch Membranen transportieren", nl: "Eiwitten door membranen transporteren" },
          { en: "Catalyze enzymatic reactions", es: "Catalizar reacciones enzimáticas", de: "Enzymatische Reaktionen katalysieren", nl: "Katalyseren enzymatische reacties" },
          { en: "Store amino acids for protein synthesis", es: "Almacenar aminoácidos para síntesis de proteínas", de: "Aminosäuren für Proteinsynthese speichern", nl: "Aminozuren opslaan voor eiwittsynthese" }
        ],
        correct: 0,
        explanation: {
          en: "Chaperone proteins help newly synthesized or denatured proteins achieve their correct three-dimensional structure and prevent the formation of potentially harmful protein aggregates.",
          es: "Las proteínas chaperonas ayudan a proteínas recién sintetizadas o desnaturalizadas a alcanzar su estructura tridimensional correcta y prevenir la formación de agregados proteicos potencialmente dañinos.",
          de: "Chaperon-Proteine helfen neu synthetisierten oder denaturierten Proteinen, ihre korrekte dreidimensionale Struktur zu erreichen und verhindern die Bildung potentiell schädlicher Proteinaggregate.",
          nl: "Chaperone-eiwitten helpen nieuw gesynthetiseerde of gedenatureerde eiwitten hun correcte driedimensionale structuur te bereiken en voorkomen de vorming van potentieel schadelijke eiwitaggregaten."
        }
      },
      {
        question: {
          en: "Which mechanism controls the cell cycle progression through checkpoints?",
          es: "¿Qué mecanismo controla la progresión del ciclo celular a través de puntos de control?",
          de: "Welcher Mechanismus kontrolliert das Fortschreiten des Zellzyklus durch Kontrollpunkte?",
          nl: "Welk mechanisme controleert de celcyclusprogressie door controlepunten?"
        },
        options: [
          { en: "Cyclin-dependent kinase regulation", es: "Regulación de quinasas dependientes de ciclinas", de: "Cyclin-abhängige Kinase-Regulation", nl: "Cycline-afhankelijke kinase regulatie" },
          { en: "DNA methylation patterns", es: "Patrones de metilación de ADN", de: "DNA-Methylierungsmuster", nl: "DNA-methyleringspatronen" },
          { en: "Ribosome assembly", es: "Ensamblaje de ribosomas", de: "Ribosomenassemblierung", nl: "Ribosoom assemblage" },
          { en: "Membrane potential changes", es: "Cambios de potencial de membrana", de: "Membranpotentialänderungen", nl: "Membraanpotentiaalveranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Cell cycle progression is regulated by cyclin-dependent kinases (CDKs) whose activity is controlled by cyclins and checkpoint proteins that ensure proper completion of each phase before advancing.",
          es: "La progresión del ciclo celular es regulada por quinasas dependientes de ciclinas (CDKs) cuya actividad es controlada by ciclinas y proteínas de punto de control que aseguran completación apropiada de cada fase antes de avanzar.",
          de: "Der Zellzyklusfortschritt wird durch Cyclin-abhängige Kinasen (CDKs) reguliert, deren Aktivität durch Cycline und Kontrollpunkt-Proteine kontrolliert wird, die den ordnungsgemäßen Abschluss jeder Phase vor dem Fortschritt sicherstellen.",
          nl: "Celcyclusprogressie wordt gereguleerd door cycline-afhankelijke kinasen (CDKs) waarvan de activiteit wordt gecontroleerd door cyclines en controlepunteiwitten die zorgen voor juiste voltooiing van elke fase voordat verder wordt gegaan."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/biology', level2);
  }
})();
