// Molecular Biology - Level 4: Cell Signaling and Communication
(function() {
  const level4 = {
    name: {
      en: "Cell Signaling and Communication",
      es: "Señalización y Comunicación Celular",
      de: "Zellsignalisierung und Kommunikation",
      nl: "Celsignalering en Communicatie"
    },
    questions: [
      {
        question: {
          en: "What is the general process of cell signaling?",
          es: "¿Cuál es el proceso general de señalización celular?",
          de: "Was ist der allgemeine Prozess der Zellsignalisierung?",
          nl: "Wat is het algemene proces van celsignalering?"
        },
        options: [
          {
            en: "Signal detection → Transduction → Response",
            es: "Detección de señal → Transducción → Respuesta",
            de: "Signalerkennung → Transduktion → Antwort",
            nl: "Signaaldetectie → Transductie → Respons"
          },
          {
            en: "Response → Detection → Transduction",
            es: "Respuesta → Detección → Transducción",
            de: "Antwort → Erkennung → Transduktion",
            nl: "Respons → Detectie → Transductie"
          },
          {
            en: "Transduction → Response → Detection",
            es: "Transducción → Respuesta → Detección",
            de: "Transduktion → Antwort → Erkennung",
            nl: "Transductie → Respons → Detectie"
          },
          {
            en: "Detection → Response → Transduction",
            es: "Detección → Respuesta → Transducción",
            de: "Erkennung → Antwort → Transduktion",
            nl: "Detectie → Respons → Transductie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cell signaling involves three main steps: detection of the signal by a receptor, transduction of the signal through signaling pathways, and cellular response to the signal.",
          es: "La señalización celular involucra tres pasos principales: detección de la señal por un receptor, transducción de la señal a través de vías de señalización, y respuesta celular a la señal.",
          de: "Zellsignalisierung umfasst drei Hauptschritte: Erkennung des Signals durch einen Rezeptor, Transduktion des Signals durch Signalwege und zelluläre Antwort auf das Signal.",
          nl: "Celsignalering omvat drie hoofdstappen: detectie van het signaal door een receptor, transductie van het signaal via signaalpaden, en cellulaire respons op het signaal."
        }
      },
      {
        question: {
          en: "What are G-protein coupled receptors (GPCRs)?",
          es: "¿Qué son los receptores acoplados a proteína G (GPCRs)?",
          de: "Was sind G-Protein-gekoppelte Rezeptoren (GPCRs)?",
          nl: "Wat zijn G-eiwit gekoppelde receptoren (GPCR's)?"
        },
        options: [
          {
            en: "Seven-transmembrane receptors that activate G-proteins upon ligand binding",
            es: "Receptores de siete transmembranas que activan proteínas G al unirse al ligando",
            de: "Sieben-Transmembran-Rezeptoren, die G-Proteine bei Ligandenbindung aktivieren",
            nl: "Zeven-transmembraan receptoren die G-eiwitten activeren bij ligand binding"
          },
          {
            en: "Single-pass membrane proteins that bind directly to DNA",
            es: "Proteínas de membrana de un solo paso que se unen directamente al ADN",
            de: "Einzel-Pass-Membranproteine, die direkt an DNA binden",
            nl: "Enkel-doorgang membraaneiwitten die direct aan DNA binden"
          },
          {
            en: "Cytoplasmic enzymes that phosphorylate proteins",
            es: "Enzimas citoplásmicas que fosforilan proteínas",
            de: "Zytoplasmatische Enzyme, die Proteine phosphorylieren",
            nl: "Cytoplasmatische enzymen die eiwitten fosforyleren"
          },
          {
            en: "Nuclear receptors that regulate transcription",
            es: "Receptores nucleares que regulan la transcripción",
            de: "Kernrezeptoren, die die Transkription regulieren",
            nl: "Nucleaire receptoren die transcriptie reguleren"
          }
        ],
        correct: 0,
        explanation: {
          en: "GPCRs are the largest family of cell surface receptors, characterized by seven transmembrane domains that undergo conformational changes upon ligand binding, activating intracellular G-proteins.",
          es: "Los GPCRs son la familia más grande de receptores de superficie celular, caracterizados por siete dominios transmembrana que sufren cambios conformacionales al unirse al ligando, activando proteínas G intracelulares.",
          de: "GPCRs sind die größte Familie von Zelloberflächenrezeptoren, charakterisiert durch sieben Transmembrandomänen, die bei Ligandenbindung Konformationsänderungen durchlaufen und intrazelluläre G-Proteine aktivieren.",
          nl: "GPCR's zijn de grootste familie van celoppervlak receptoren, gekenmerkt door zeven transmembraan domeinen die conformatieveranderingen ondergaan bij ligand binding, waardoor intracellulaire G-eiwitten worden geactiveerd."
        }
      },
      {
        question: {
          en: "What is the role of cyclic AMP (cAMP) in cell signaling?",
          es: "¿Cuál es el papel del AMP cíclico (cAMP) en la señalización celular?",
          de: "Was ist die Rolle von zyklischem AMP (cAMP) in der Zellsignalisierung?",
          nl: "Wat is de rol van cyclisch AMP (cAMP) bij celsignalering?"
        },
        options: [
          {
            en: "It acts as a second messenger to activate protein kinase A",
            es: "Actúa como segundo mensajero para activar la proteína quinasa A",
            de: "Es wirkt als zweiter Botenstoff zur Aktivierung der Proteinkinase A",
            nl: "Het werkt als tweede boodschapper om proteïne kinase A te activeren"
          },
          {
            en: "It directly binds to DNA to regulate transcription",
            es: "Se une directamente al ADN para regular la transcripción",
            de: "Es bindet direkt an DNA zur Regulierung der Transkription",
            nl: "Het bindt direct aan DNA om transcriptie te reguleren"
          },
          {
            en: "It serves as an energy source for cellular metabolism",
            es: "Sirve como fuente de energía para el metabolismo celular",
            de: "Es dient als Energiequelle für den Zellstoffwechsel",
            nl: "Het dient als energiebron voor celmetabolisme"
          },
          {
            en: "It functions as a structural component of cell membranes",
            es: "Funciona como componente estructural de las membranas celulares",
            de: "Es funktioniert als strukturelle Komponente der Zellmembranen",
            nl: "Het functioneert als structurele component van celmembranen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cyclic AMP is a crucial second messenger that is produced by adenylyl cyclase and activates protein kinase A (PKA), which then phosphorylates target proteins to mediate cellular responses.",
          es: "El AMP cíclico es un segundo mensajero crucial que es producido por la adenilil ciclasa y activa la proteína quinasa A (PKA), que luego fosforila proteínas objetivo para mediar respuestas celulares.",
          de: "Zyklisches AMP ist ein entscheidender zweiter Botenstoff, der von Adenylylzyklase produziert wird und Proteinkinase A (PKA) aktiviert, die dann Zielproteine phosphoryliert, um zelluläre Antworten zu vermitteln.",
          nl: "Cyclisch AMP is een cruciale tweede boodschapper die wordt geproduceerd door adenylyl cyclase en proteïne kinase A (PKA) activeert, die vervolgens doeleiwitten fosforyleert om cellulaire responsen te bemiddelen."
        }
      },
      {
        question: {
          en: "What is the function of receptor tyrosine kinases (RTKs)?",
          es: "¿Cuál es la función de las tirosina quinasas receptoras (RTKs)?",
          de: "Was ist die Funktion von Rezeptortyrosinkinasen (RTKs)?",
          nl: "Wat is de functie van receptor tyrosine kinases (RTK's)?"
        },
        options: [
          {
            en: "They undergo dimerization and autophosphorylation to initiate signaling cascades",
            es: "Sufren dimerización y autofosforilación para iniciar cascadas de señalización",
            de: "Sie durchlaufen Dimerisierung und Autophosphorylierung zur Initiierung von Signalkaskaden",
            nl: "Ze ondergaan dimerisatie en autofosforylatie om signaaltransductiecascades te initiëren"
          },
          {
            en: "They directly regulate gene transcription in the nucleus",
            es: "Regulan directamente la transcripción génica en el núcleo",
            de: "Sie regulieren direkt die Gentranskription im Kern",
            nl: "Ze reguleren direct gentranscriptie in de kern"
          },
          {
            en: "They transport molecules across cell membranes",
            es: "Transportan moléculas a través de las membranas celulares",
            de: "Sie transportieren Moleküle über Zellmembranen",
            nl: "Ze transporteren moleculen over celmembranen"
          },
          {
            en: "They degrade extracellular matrix components",
            es: "Degradan componentes de la matriz extracelular",
            de: "Sie bauen extrazelluläre Matrixkomponenten ab",
            nl: "Ze breken extracellulaire matrix componenten af"
          }
        ],
        correct: 0,
        explanation: {
          en: "RTKs are single-pass transmembrane receptors that dimerize upon ligand binding, leading to autophosphorylation of tyrosine residues and activation of downstream signaling pathways involved in cell growth and differentiation.",
          es: "Los RTKs son receptores transmembrana de un solo paso que se dimerizan al unirse al ligando, llevando a autofosforilación de residuos de tirosina y activación de vías de señalización descendentes involucradas en crecimiento y diferenciación celular.",
          de: "RTKs sind Einzel-Pass-Transmembranrezeptoren, die sich bei Ligandenbindung dimerisieren, was zur Autophosphorylierung von Tyrosinresten und Aktivierung nachgelagerter Signalwege führt, die an Zellwachstum und -differenzierung beteiligt sind.",
          nl: "RTK's zijn enkel-doorgang transmembraan receptoren die dimeriseren bij ligand binding, wat leidt tot autofosforylatie van tyrosine residuen en activatie van downstream signaalpaden betrokken bij celgroei en differentiatie."
        }
      },
      {
        question: {
          en: "What is the phosphoinositide signaling pathway?",
          es: "¿Qué es la vía de señalización de fosfoinositoles?",
          de: "Was ist der Phosphoinositid-Signalweg?",
          nl: "Wat is het fosfoinositide signaalpad?"
        },
        options: [
          {
            en: "A pathway where PIP2 is cleaved to produce IP3 and DAG as second messengers",
            es: "Una vía donde PIP2 se escinde para producir IP3 y DAG como segundos mensajeros",
            de: "Ein Weg, bei dem PIP2 gespalten wird, um IP3 und DAG als zweite Botenstoffe zu produzieren",
            nl: "Een pad waarbij PIP2 wordt gesplitst om IP3 en DAG te produceren als tweede boodschappers"
          },
          {
            en: "A pathway that directly activates gene transcription",
            es: "Una vía que activa directamente la transcripción génica",
            de: "Ein Weg, der direkt die Gentranskription aktiviert",
            nl: "Een pad dat direct gentranscriptie activeert"
          },
          {
            en: "A pathway involved in DNA replication",
            es: "Una vía involucrada en la replicación del ADN",
            de: "Ein Weg, der an der DNA-Replikation beteiligt ist",
            nl: "Een pad betrokken bij DNA-replicatie"
          },
          {
            en: "A pathway that regulates protein degradation",
            es: "Una vía que regula la degradación proteica",
            de: "Ein Weg, der den Proteinabbau reguliert",
            nl: "Een pad dat eiwitafbraak reguleert"
          }
        ],
        correct: 0,
        explanation: {
          en: "The phosphoinositide pathway involves phospholipase C cleaving PIP2 into IP3 (which releases Ca²⁺ from intracellular stores) and DAG (which activates protein kinase C), both serving as important second messengers.",
          es: "La vía de fosfoinositoles involucra a la fosfolipasa C escindiendo PIP2 en IP3 (que libera Ca²⁺ de almacenes intracelulares) y DAG (que activa la proteína quinasa C), ambos sirviendo como segundos mensajeros importantes.",
          de: "Der Phosphoinositid-Weg beinhaltet Phospholipase C, die PIP2 in IP3 (das Ca²⁺ aus intrazellulären Speichern freisetzt) und DAG (das Proteinkinase C aktiviert) spaltet, wobei beide als wichtige zweite Botenstoffe dienen.",
          nl: "Het fosfoinositide pad behelst fosfolipase C die PIP2 splitst in IP3 (dat Ca²⁺ vrijmaakt uit intracellulaire opslagplaatsen) en DAG (dat proteïne kinase C activeert), beide dienend als belangrijke tweede boodschappers."
        }
      },
      {
        question: {
          en: "What is the role of calcium ions (Ca²⁺) in cell signaling?",
          es: "¿Cuál es el papel de los iones calcio (Ca²⁺) en la señalización celular?",
          de: "Was ist die Rolle von Calciumionen (Ca²⁺) in der Zellsignalisierung?",
          nl: "Wat is de rol van calciumionen (Ca²⁺) bij celsignalering?"
        },
        options: [
          {
            en: "They serve as a universal second messenger that activates various cellular processes",
            es: "Sirven como segundo mensajero universal que activa varios procesos celulares",
            de: "Sie dienen als universeller zweiter Botenstoff, der verschiedene zelluläre Prozesse aktiviert",
            nl: "Ze dienen als universele tweede boodschapper die verschillende cellulaire processen activeert"
          },
          {
            en: "They only function in muscle contraction",
            es: "Solo funcionan en la contracción muscular",
            de: "Sie funktionieren nur bei der Muskelkontraktion",
            nl: "Ze functioneren alleen bij spiercontractie"
          },
          {
            en: "They directly bind to DNA to regulate transcription",
            es: "Se unen directamente al ADN para regular la transcripción",
            de: "Sie binden direkt an DNA zur Regulierung der Transkription",
            nl: "Ze binden direct aan DNA om transcriptie te reguleren"
          },
          {
            en: "They serve only as structural components of bones",
            es: "Sirven solo como componentes estructurales de los huesos",
            de: "Sie dienen nur als strukturelle Komponenten der Knochen",
            nl: "Ze dienen alleen als structurele componenten van botten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Calcium ions act as a versatile second messenger, regulating numerous cellular processes including muscle contraction, neurotransmitter release, enzyme activation, and gene expression through calcium-binding proteins like calmodulin.",
          es: "Los iones calcio actúan como segundo mensajero versátil, regulando numerosos procesos celulares incluyendo contracción muscular, liberación de neurotransmisores, activación enzimática y expresión génica a través de proteínas que unen calcio como la calmodulina.",
          de: "Calciumionen wirken als vielseitiger zweiter Botenstoff und regulieren zahlreiche zelluläre Prozesse einschließlich Muskelkontraktion, Neurotransmitterfreisetzung, Enzymaktivierung und Genexpression durch calciumbindende Proteine wie Calmodulin.",
          nl: "Calciumionen werken als veelzijdige tweede boodschapper, die talloze cellulaire processen reguleren inclusief spiercontractie, neurotransmitter vrijmaking, enzymactivatie en genexpressie via calcium-bindende eiwitten zoals calmoduline."
        }
      },
      {
        question: {
          en: "What are kinase cascades in cell signaling?",
          es: "¿Qué son las cascadas de quinasas en la señalización celular?",
          de: "Was sind Kinase-Kaskaden in der Zellsignalisierung?",
          nl: "Wat zijn kinase cascades bij celsignalering?"
        },
        options: [
          {
            en: "Sequential activation of protein kinases that amplify and transmit signals",
            es: "Activación secuencial de proteína quinasas que amplifican y transmiten señales",
            de: "Sequenzielle Aktivierung von Proteinkinasen, die Signale verstärken und übertragen",
            nl: "Sequentiële activatie van proteïne kinases die signalen versterken en doorgeven"
          },
          {
            en: "Simultaneous degradation of multiple proteins",
            es: "Degradación simultánea de múltiples proteínas",
            de: "Gleichzeitige Degradation mehrerer Proteine",
            nl: "Gelijktijdige afbraak van meerdere eiwitten"
          },
          {
            en: "Direct phosphorylation of DNA molecules",
            es: "Fosforilación directa de moléculas de ADN",
            de: "Direkte Phosphorylierung von DNA-Molekülen",
            nl: "Directe fosforylatie van DNA-moleculen"
          },
          {
            en: "Random activation of cellular enzymes",
            es: "Activación aleatoria de enzimas celulares",
            de: "Zufällige Aktivierung zellulärer Enzyme",
            nl: "Willekeurige activatie van cellulaire enzymen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Kinase cascades involve a series of protein kinases that phosphorylate and activate each other in sequence, creating signal amplification and allowing precise control of cellular responses. The MAPK pathway is a classic example.",
          es: "Las cascadas de quinasas involucran una serie de proteína quinasas que se fosforilan y activan mutuamente en secuencia, creando amplificación de señales y permitiendo control preciso de respuestas celulares. La vía MAPK es un ejemplo clásico.",
          de: "Kinase-Kaskaden umfassen eine Reihe von Proteinkinasen, die sich sequenziell phosphorylieren und aktivieren, wodurch Signalverstärkung entsteht und präzise Kontrolle zellulärer Antworten ermöglicht wird. Der MAPK-Weg ist ein klassisches Beispiel.",
          nl: "Kinase cascades omvatten een reeks proteïne kinases die elkaar sequentieel fosforyleren en activeren, wat signaalversterking creëert en precieze controle van cellulaire responsen mogelijk maakt. Het MAPK pad is een klassiek voorbeeld."
        }
      },
      {
        question: {
          en: "What is the MAP kinase (MAPK) pathway?",
          es: "¿Qué es la vía de la quinasa MAP (MAPK)?",
          de: "Was ist der MAP-Kinase (MAPK)-Weg?",
          nl: "Wat is het MAP kinase (MAPK) pad?"
        },
        options: [
          {
            en: "A three-tier kinase cascade involving MAPKKK → MAPKK → MAPK",
            es: "Una cascada de quinasas de tres niveles que involucra MAPKKK → MAPKK → MAPK",
            de: "Eine dreistufige Kinase-Kaskade mit MAPKKK → MAPKK → MAPK",
            nl: "Een drie-laags kinase cascade met MAPKKK → MAPKK → MAPK"
          },
          {
            en: "A pathway that only regulates DNA repair",
            es: "Una vía que solo regula la reparación del ADN",
            de: "Ein Weg, der nur die DNA-Reparatur reguliert",
            nl: "Een pad dat alleen DNA-reparatie reguleert"
          },
          {
            en: "A single-step phosphorylation reaction",
            es: "Una reacción de fosforilación de un solo paso",
            de: "Eine einstufige Phosphorylierungsreaktion",
            nl: "Een eenstaps fosforylatieratie"
          },
          {
            en: "A pathway involved only in cell death",
            es: "Una vía involucrada solo en la muerte celular",
            de: "Ein Weg, der nur am Zelltod beteiligt ist",
            nl: "Een pad alleen betrokken bij celdood"
          }
        ],
        correct: 0,
        explanation: {
          en: "The MAPK pathway is a highly conserved three-tier cascade where a MAP kinase kinase kinase (MAPKKK) activates a MAP kinase kinase (MAPKK), which then activates a MAP kinase (MAPK), regulating diverse cellular processes including growth, differentiation, and stress responses.",
          es: "La vía MAPK es una cascada de tres niveles altamente conservada donde una quinasa quinasa quinasa MAP (MAPKKK) activa una quinasa quinasa MAP (MAPKK), que luego activa una quinasa MAP (MAPK), regulando diversos procesos celulares incluyendo crecimiento, diferenciación y respuestas al estrés.",
          de: "Der MAPK-Weg ist eine hochkonservierte dreistufige Kaskade, bei der eine MAP-Kinase-Kinase-Kinase (MAPKKK) eine MAP-Kinase-Kinase (MAPKK) aktiviert, die dann eine MAP-Kinase (MAPK) aktiviert und verschiedene zelluläre Prozesse einschließlich Wachstum, Differenzierung und Stressantworten reguliert.",
          nl: "Het MAPK pad is een sterk geconserveerde drie-laags cascade waarbij een MAP kinase kinase kinase (MAPKKK) een MAP kinase kinase (MAPKK) activeert, die vervolgens een MAP kinase (MAPK) activeert, wat diverse cellulaire processen reguleert inclusief groei, differentiatie en stressresponsen."
        }
      },
      {
        question: {
          en: "What is apoptosis and how is it regulated?",
          es: "¿Qué es la apoptosis y cómo se regula?",
          de: "Was ist Apoptose und wie wird sie reguliert?",
          nl: "Wat is apoptose en hoe wordt het gereguleerd?"
        },
        options: [
          {
            en: "Programmed cell death regulated by pro-apoptotic and anti-apoptotic signals",
            es: "Muerte celular programada regulada por señales pro-apoptóticas y anti-apoptóticas",
            de: "Programmierter Zelltod, reguliert durch pro-apoptotische und anti-apoptotische Signale",
            nl: "Geprogrammeerde celdood gereguleerd door pro-apoptotische en anti-apoptotische signalen"
          },
          {
            en: "Uncontrolled cell division leading to cancer",
            es: "División celular descontrolada que lleva al cáncer",
            de: "Unkontrollierte Zellteilung, die zu Krebs führt",
            nl: "Ongecontroleerde celdeling die tot kanker leidt"
          },
          {
            en: "Random cell death due to external damage",
            es: "Muerte celular aleatoria debido a daño externo",
            de: "Zufälliger Zelltod aufgrund äußerer Schäden",
            nl: "Willekeurige celdood door externe schade"
          },
          {
            en: "Cell growth without division",
            es: "Crecimiento celular sin división",
            de: "Zellwachstum ohne Teilung",
            nl: "Celgroei zonder deling"
          }
        ],
        correct: 0,
        explanation: {
          en: "Apoptosis is a highly regulated form of programmed cell death essential for development and homeostasis, controlled by the balance between pro-apoptotic signals (like p53, Bax) and anti-apoptotic signals (like Bcl-2), ultimately leading to caspase activation.",
          es: "La apoptosis es una forma altamente regulada de muerte celular programada esencial para el desarrollo y homeostasis, controlada por el equilibrio entre señales pro-apoptóticas (como p53, Bax) y señales anti-apoptóticas (como Bcl-2), llevando finalmente a la activación de caspasas.",
          de: "Apoptose ist eine hochregulierte Form des programmierten Zelltods, die für Entwicklung und Homöostase wesentlich ist, kontrolliert durch das Gleichgewicht zwischen pro-apoptotischen Signalen (wie p53, Bax) und anti-apoptotischen Signalen (wie Bcl-2), was letztendlich zur Caspase-Aktivierung führt.",
          nl: "Apoptose is een sterk gereguleerde vorm van geprogrammeerde celdood essentieel voor ontwikkeling en homeostase, gecontroleerd door de balans tussen pro-apoptotische signalen (zoals p53, Bax) en anti-apoptotische signalen (zoals Bcl-2), wat uiteindelijk tot caspase activatie leidt."
        }
      },
      {
        question: {
          en: "What are growth factors and their signaling mechanisms?",
          es: "¿Qué son los factores de crecimiento y sus mecanismos de señalización?",
          de: "Was sind Wachstumsfaktoren und ihre Signalmechanismen?",
          nl: "Wat zijn groeifactoren en hun signaalmechanismen?"
        },
        options: [
          {
            en: "Proteins that stimulate cell proliferation and differentiation through RTK activation",
            es: "Proteínas que estimulan la proliferación y diferenciación celular a través de la activación de RTK",
            de: "Proteine, die Zellproliferation und -differenzierung durch RTK-Aktivierung stimulieren",
            nl: "Eiwitten die celproliferatie en differentiatie stimuleren via RTK activatie"
          },
          {
            en: "Molecules that only inhibit cell division",
            es: "Moléculas que solo inhiben la división celular",
            de: "Moleküle, die nur die Zellteilung hemmen",
            nl: "Moleculen die alleen celdeling remmen"
          },
          {
            en: "Enzymes that break down cellular components",
            es: "Enzimas que descomponen componentes celulares",
            de: "Enzyme, die zelluläre Komponenten abbauen",
            nl: "Enzymen die cellulaire componenten afbreken"
          },
          {
            en: "Structural proteins of the cytoskeleton",
            es: "Proteínas estructurales del citoesqueleto",
            de: "Strukturproteine des Zytoskeletts",
            nl: "Structurele eiwitten van het cytoskelet"
          }
        ],
        correct: 0,
        explanation: {
          en: "Growth factors are signaling molecules that regulate cell growth, proliferation, and differentiation by binding to receptor tyrosine kinases (RTKs), triggering cascades like the PI3K/Akt and MAPK pathways.",
          es: "Los factores de crecimiento son moléculas de señalización que regulan el crecimiento, proliferación y diferenciación celular al unirse a tirosina quinasas receptoras (RTKs), desencadenando cascadas como las vías PI3K/Akt y MAPK.",
          de: "Wachstumsfaktoren sind Signalmoleküle, die Zellwachstum, Proliferation und Differenzierung regulieren, indem sie an Rezeptortyrosinkinasen (RTKs) binden und Kaskaden wie die PI3K/Akt- und MAPK-Wege auslösen.",
          nl: "Groeifactoren zijn signaalmoleculen die celgroei, proliferatie en differentiatie reguleren door binding aan receptor tyrosine kinases (RTK's), wat cascades zoals de PI3K/Akt en MAPK paden triggert."
        }
      },
      {
        question: {
          en: "What is the p53 tumor suppressor pathway?",
          es: "¿Qué es la vía del supresor tumoral p53?",
          de: "Was ist der p53-Tumorsuppressor-Weg?",
          nl: "Wat is het p53 tumor suppressor pad?"
        },
        options: [
          {
            en: "A pathway that detects DNA damage and induces cell cycle arrest or apoptosis",
            es: "Una vía que detecta daño al ADN e induce arresto del ciclo celular o apoptosis",
            de: "Ein Weg, der DNA-Schäden erkennt und Zellzyklusarrest oder Apoptose induziert",
            nl: "Een pad dat DNA-schade detecteert en celcyclus arrest of apoptose induceert"
          },
          {
            en: "A pathway that promotes uncontrolled cell growth",
            es: "Una vía que promueve crecimiento celular descontrolado",
            de: "Ein Weg, der unkontrolliertes Zellwachstum fördert",
            nl: "Een pad dat ongecontroleerde celgroei bevordert"
          },
          {
            en: "A pathway involved only in normal cell division",
            es: "Una vía involucrada solo en la división celular normal",
            de: "Ein Weg, der nur an normaler Zellteilung beteiligt ist",
            nl: "Een pad alleen betrokken bij normale celdeling"
          },
          {
            en: "A pathway that regulates metabolism exclusively",
            es: "Una vía que regula exclusivamente el metabolismo",
            de: "Ein Weg, der ausschließlich den Stoffwechsel reguliert",
            nl: "Een pad dat uitsluitend het metabolisme reguleert"
          }
        ],
        correct: 0,
        explanation: {
          en: "p53 is known as the 'guardian of the genome' because it responds to DNA damage by either halting cell division to allow repair or triggering apoptosis if damage is too severe, preventing cancerous transformation.",
          es: "p53 es conocido como el 'guardián del genoma' porque responde al daño del ADN deteniendo la división celular para permitir reparación o desencadenando apoptosis si el daño es demasiado severo, previniendo transformación cancerosa.",
          de: "p53 ist als 'Wächter des Genoms' bekannt, weil es auf DNA-Schäden reagiert, indem es entweder die Zellteilung anhält, um Reparaturen zu ermöglichen, oder Apoptose auslöst, wenn der Schaden zu schwerwiegend ist, wodurch krebsartige Transformation verhindert wird.",
          nl: "p53 staat bekend als de 'bewaker van het genoom' omdat het reageert op DNA-schade door ofwel celdeling te stoppen om reparatie toe te staan of apoptose te triggeren als schade te ernstig is, wat kankerachtige transformatie voorkomt."
        }
      },
      {
        question: {
          en: "What are hormone receptors and their classification?",
          es: "¿Qué son los receptores hormonales y su clasificación?",
          de: "Was sind Hormonrezeptoren und ihre Klassifizierung?",
          nl: "Wat zijn hormoonreceptoren en hun classificatie?"
        },
        options: [
          {
            en: "Cell surface receptors for water-soluble hormones and nuclear receptors for lipid-soluble hormones",
            es: "Receptores de superficie celular para hormonas hidrosolubles y receptores nucleares para hormonas liposolubles",
            de: "Zelloberflächenrezeptoren für wasserlösliche Hormone und Kernrezeptoren für lipidlösliche Hormone",
            nl: "Celoppervlak receptoren voor wateroplosbare hormonen en nucleaire receptoren voor lipide-oplosbare hormonen"
          },
          {
            en: "All hormone receptors are located in the cytoplasm",
            es: "Todos los receptores hormonales están ubicados en el citoplasma",
            de: "Alle Hormonrezeptoren befinden sich im Zytoplasma",
            nl: "Alle hormoonreceptoren bevinden zich in het cytoplasma"
          },
          {
            en: "All hormone receptors are membrane-bound",
            es: "Todos los receptores hormonales están unidos a la membrana",
            de: "Alle Hormonrezeptoren sind membrangebunden",
            nl: "Alle hormoonreceptoren zijn membraangebonden"
          },
          {
            en: "Hormone receptors only exist in endocrine glands",
            es: "Los receptores hormonales solo existen en glándulas endocrinas",
            de: "Hormonrezeptoren existieren nur in endokrinen Drüsen",
            nl: "Hormoonreceptoren bestaan alleen in endocriene klieren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hormone receptors are classified based on hormone solubility: water-soluble hormones (like insulin, adrenaline) bind to cell surface receptors, while lipid-soluble hormones (like steroid hormones, thyroid hormones) bind to intracellular nuclear receptors.",
          es: "Los receptores hormonales se clasifican basándose en la solubilidad hormonal: hormonas hidrosolubles (como insulina, adrenalina) se unen a receptores de superficie celular, mientras que hormonas liposolubles (como hormonas esteroideas, hormonas tiroideas) se unen a receptores nucleares intracelulares.",
          de: "Hormonrezeptoren werden basierend auf der Hormonlöslichkeit klassifiziert: wasserlösliche Hormone (wie Insulin, Adrenalin) binden an Zelloberflächenrezeptoren, während lipidlösliche Hormone (wie Steroidhormone, Schilddrüsenhormone) an intrazelluläre Kernrezeptoren binden.",
          nl: "Hormoonreceptoren worden geclassificeerd op basis van hormoon oplosbaarheid: wateroplosbare hormonen (zoals insuline, adrenaline) binden aan celoppervlak receptoren, terwijl lipide-oplosbare hormonen (zoals steroïde hormonen, schildklierhormonen) binden aan intracellulaire nucleaire receptoren."
        }
      },
      {
        question: {
          en: "What is the insulin signaling pathway?",
          es: "¿Qué es la vía de señalización de la insulina?",
          de: "Was ist der Insulin-Signalweg?",
          nl: "Wat is het insuline signaalpad?"
        },
        options: [
          {
            en: "Insulin binds to RTK, activating PI3K/Akt pathway to regulate glucose metabolism",
            es: "La insulina se une a RTK, activando la vía PI3K/Akt para regular el metabolismo de glucosa",
            de: "Insulin bindet an RTK und aktiviert den PI3K/Akt-Weg zur Regulierung des Glukosestoffwechsels",
            nl: "Insuline bindt aan RTK, activeert PI3K/Akt pad om glucose metabolisme te reguleren"
          },
          {
            en: "Insulin directly enters cells and binds to DNA",
            es: "La insulina entra directamente a las células y se une al ADN",
            de: "Insulin tritt direkt in Zellen ein und bindet an DNA",
            nl: "Insuline gaat direct cellen binnen en bindt aan DNA"
          },
          {
            en: "Insulin only activates cAMP signaling",
            es: "La insulina solo activa señalización de cAMP",
            de: "Insulin aktiviert nur cAMP-Signaling",
            nl: "Insuline activeert alleen cAMP signalering"
          },
          {
            en: "Insulin works independently of any receptors",
            es: "La insulina funciona independientemente de cualquier receptor",
            de: "Insulin funktioniert unabhängig von Rezeptoren",
            nl: "Insuline werkt onafhankelijk van receptoren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Insulin binds to the insulin receptor (a receptor tyrosine kinase), triggering autophosphorylation and activation of the PI3K/Akt pathway, which promotes glucose uptake, glycogen synthesis, and inhibits gluconeogenesis.",
          es: "La insulina se une al receptor de insulina (una tirosina quinasa receptora), desencadenando autofosforilación y activación de la vía PI3K/Akt, que promueve la captación de glucosa, síntesis de glucógeno e inhibe la gluconeogénesis.",
          de: "Insulin bindet an den Insulinrezeptor (eine Rezeptortyrosinkinase) und löst Autophosphorylierung und Aktivierung des PI3K/Akt-Wegs aus, was die Glukoseaufnahme und Glykogensynthese fördert und die Glukoneogenese hemmt.",
          nl: "Insuline bindt aan de insuline receptor (een receptor tyrosine kinase), wat autofosforylatie en activatie van het PI3K/Akt pad triggert, wat glucose opname, glycogeen synthese bevordert en gluconeogenese remt."
        }
      },
      {
        question: {
          en: "What is the Notch signaling pathway?",
          es: "¿Qué es la vía de señalización Notch?",
          de: "Was ist der Notch-Signalweg?",
          nl: "Wat is het Notch signaalpad?"
        },
        options: [
          {
            en: "A cell-cell communication pathway where receptor cleavage releases transcriptional activators",
            es: "Una vía de comunicación célula-célula donde la escisión del receptor libera activadores transcripcionales",
            de: "Ein Zell-Zell-Kommunikationsweg, bei dem Rezeptorspaltung Transkriptionsaktivatoren freisetzt",
            nl: "Een cel-cel communicatiepad waarbij receptor splitsing transcriptionele activatoren vrijmaakt"
          },
          {
            en: "A pathway that only functions during DNA replication",
            es: "Una vía que solo funciona durante la replicación del ADN",
            de: "Ein Weg, der nur während der DNA-Replikation funktioniert",
            nl: "Een pad dat alleen functioneert tijdens DNA-replicatie"
          },
          {
            en: "A metabolic pathway for energy production",
            es: "Una vía metabólica para producción de energía",
            de: "Ein Stoffwechselweg für Energieproduktion",
            nl: "Een metabole pad voor energieproductie"
          },
          {
            en: "A pathway involved only in muscle contraction",
            es: "Una vía involucrada solo en contracción muscular",
            de: "Ein Weg, der nur an Muskelkontraktion beteiligt ist",
            nl: "Een pad alleen betrokken bij spiercontractie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Notch pathway is crucial for cell fate determination and involves direct cell-cell contact where ligand binding causes proteolytic cleavage of the Notch receptor, releasing its intracellular domain to act as a transcriptional activator.",
          es: "La vía Notch es crucial para la determinación del destino celular e involucra contacto directo célula-célula donde la unión del ligando causa escisión proteolítica del receptor Notch, liberando su dominio intracelular para actuar como activador transcripcional.",
          de: "Der Notch-Weg ist entscheidend für die Zellschicksalsbestimmung und beinhaltet direkten Zell-Zell-Kontakt, bei dem Ligandenbindung proteolytische Spaltung des Notch-Rezeptors verursacht und seine intrazelluläre Domäne als Transkriptionsaktivator freisetzt.",
          nl: "Het Notch pad is cruciaal voor cellotsbepalingen en omvat direct cel-cel contact waarbij ligand binding proteolytische splitsing van de Notch receptor veroorzaakt, wat zijn intracellulaire domein vrijmaakt om als transcriptionele activator te werken."
        }
      },
      {
        question: {
          en: "What are gap junctions and their role in cell communication?",
          es: "¿Qué son las uniones gap y su papel en la comunicación celular?",
          de: "Was sind Gap Junctions und ihre Rolle in der Zellkommunikation?",
          nl: "Wat zijn gap junctions en hun rol bij celcommunicatie?"
        },
        options: [
          {
            en: "Channels that allow direct transfer of small molecules between adjacent cells",
            es: "Canales que permiten transferencia directa de moléculas pequeñas entre células adyacentes",
            de: "Kanäle, die direkten Transfer kleiner Moleküle zwischen benachbarten Zellen ermöglichen",
            nl: "Kanalen die directe overdracht van kleine moleculen tussen aangrenzende cellen mogelijk maken"
          },
          {
            en: "Proteins that bind cells to the extracellular matrix",
            es: "Proteínas que unen células a la matriz extracelular",
            de: "Proteine, die Zellen an die extrazelluläre Matrix binden",
            nl: "Eiwitten die cellen aan de extracellulaire matrix binden"
          },
          {
            en: "Receptors for growth factor signaling",
            es: "Receptores para señalización de factores de crecimiento",
            de: "Rezeptoren für Wachstumsfaktor-Signaling",
            nl: "Receptoren voor groeifactor signalering"
          },
          {
            en: "Enzymes that modify cell surface proteins",
            es: "Enzimas que modifican proteínas de superficie celular",
            de: "Enzyme, die Zelloberflächenproteine modifizieren",
            nl: "Enzymen die celoppervlakte eiwitten modificeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Gap junctions are intercellular channels formed by connexin proteins that allow direct communication between cells by permitting the passage of ions, small metabolites, and signaling molecules up to about 1000 Da.",
          es: "Las uniones gap son canales intercelulares formados por proteínas conexinas que permiten comunicación directa entre células permitiendo el paso de iones, metabolitos pequeños y moléculas de señalización hasta aproximadamente 1000 Da.",
          de: "Gap Junctions sind interzelluläre Kanäle, die von Connexin-Proteinen gebildet werden und direkte Kommunikation zwischen Zellen ermöglichen, indem sie den Durchgang von Ionen, kleinen Metaboliten und Signalmolekülen bis etwa 1000 Da erlauben.",
          nl: "Gap junctions zijn intercellulaire kanalen gevormd door connexine eiwitten die directe communicatie tussen cellen mogelijk maken door de doorgang van ionen, kleine metabolieten en signaalmoleculen tot ongeveer 1000 Da toe te staan."
        }
      },
      {
        question: {
          en: "What is the Wnt signaling pathway?",
          es: "¿Qué es la vía de señalización Wnt?",
          de: "Was ist der Wnt-Signalweg?",
          nl: "Wat is het Wnt signaalpad?"
        },
        options: [
          {
            en: "A pathway that regulates β-catenin levels to control gene expression and cell fate",
            es: "Una vía que regula los niveles de β-catenina para controlar la expresión génica y el destino celular",
            de: "Ein Weg, der β-Catenin-Spiegel reguliert, um Genexpression und Zellschicksal zu kontrollieren",
            nl: "Een pad dat β-catenine niveaus reguleert om genexpressie en celbestemming te controleren"
          },
          {
            en: "A pathway involved only in DNA repair",
            es: "Una vía involucrada solo en reparación de ADN",
            de: "Ein Weg, der nur an DNA-Reparatur beteiligt ist",
            nl: "Een pad alleen betrokken bij DNA-reparatie"
          },
          {
            en: "A metabolic pathway for lipid synthesis",
            es: "Una vía metabólica para síntesis de lípidos",
            de: "Ein Stoffwechselweg für Lipidsynthese",
            nl: "Een metabole pad voor lipide synthese"
          },
          {
            en: "A pathway that regulates only muscle development",
            es: "Una vía que regula solo el desarrollo muscular",
            de: "Ein Weg, der nur die Muskelentwicklung reguliert",
            nl: "Een pad dat alleen spierontwikkeling reguleert"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Wnt pathway is essential for development and stem cell maintenance. When active, it prevents β-catenin degradation, allowing it to enter the nucleus and activate target genes involved in cell proliferation and differentiation.",
          es: "La vía Wnt es esencial para el desarrollo y mantenimiento de células madre. Cuando está activa, previene la degradación de β-catenina, permitiéndole entrar al núcleo y activar genes objetivo involucrados en proliferación y diferenciación celular.",
          de: "Der Wnt-Weg ist wesentlich für Entwicklung und Stammzellerhaltung. Wenn aktiv, verhindert er β-Catenin-Abbau und ermöglicht es ihm, in den Kern einzutreten und Zielgene zu aktivieren, die an Zellproliferation und -differenzierung beteiligt sind.",
          nl: "Het Wnt pad is essentieel voor ontwikkeling en stamcel onderhoud. Wanneer actief, voorkomt het β-catenine afbraak, waardoor het de kern kan binnengaan en doelgenen kan activeren betrokken bij celproliferatie en differentiatie."
        }
      },
      {
        question: {
          en: "What are caspases and their role in apoptosis?",
          es: "¿Qué son las caspasas y su papel en la apoptosis?",
          de: "Was sind Caspasen und ihre Rolle in der Apoptose?",
          nl: "Wat zijn caspasen en hun rol bij apoptose?"
        },
        options: [
          {
            en: "Cysteine proteases that execute apoptosis by cleaving cellular proteins",
            es: "Cisteína proteasas que ejecutan apoptosis escindiendo proteínas celulares",
            de: "Cysteinproteasen, die Apoptose durch Spaltung zellulärer Proteine ausführen",
            nl: "Cysteïne proteasen die apoptose uitvoeren door cellulaire eiwitten te klieven"
          },
          {
            en: "Kinases that phosphorylate apoptotic proteins",
            es: "Quinasas que fosforilan proteínas apoptóticas",
            de: "Kinasen, die apoptotische Proteine phosphorylieren",
            nl: "Kinases die apoptotische eiwitten fosforyleren"
          },
          {
            en: "Receptors that bind death signals",
            es: "Receptores que unen señales de muerte",
            de: "Rezeptoren, die Todessignale binden",
            nl: "Receptoren die doodsignalen binden"
          },
          {
            en: "Transcription factors that activate death genes",
            es: "Factores de transcripción que activan genes de muerte",
            de: "Transkriptionsfaktoren, die Todesgene aktivieren",
            nl: "Transcriptiefactoren die doodgenen activeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Caspases are cysteine-aspartic proteases that are the central executioners of apoptosis. They exist as inactive precursors and are activated through proteolytic cleavage, leading to systematic dismantling of cellular components.",
          es: "Las caspasas son cisteína-aspártico proteasas que son los ejecutores centrales de la apoptosis. Existen como precursores inactivos y se activan a través de escisión proteolítica, llevando al desmantelamiento sistemático de componentes celulares.",
          de: "Caspasen sind Cystein-Aspartat-Proteasen, die die zentralen Vollstrecker der Apoptose sind. Sie existieren als inaktive Vorläufer und werden durch proteolytische Spaltung aktiviert, was zum systematischen Abbau zellulärer Komponenten führt.",
          nl: "Caspasen zijn cysteïne-aspartaat proteasen die de centrale uitvoerders van apoptose zijn. Ze bestaan als inactieve voorlopers en worden geactiveerd door proteolytische splijting, wat leidt tot systematische ontmanteling van cellulaire componenten."
        }
      },
      {
        question: {
          en: "What is the JAK-STAT signaling pathway?",
          es: "¿Qué es la vía de señalización JAK-STAT?",
          de: "Was ist der JAK-STAT-Signalweg?",
          nl: "Wat is het JAK-STAT signaalpad?"
        },
        options: [
          {
            en: "A pathway where cytokine binding activates JAKs that phosphorylate STATs for gene regulation",
            es: "Una vía donde la unión de citoquinas activa JAKs que fosforilan STATs para regulación génica",
            de: "Ein Weg, bei dem Zytokinbindung JAKs aktiviert, die STATs für Genregulation phosphorylieren",
            nl: "Een pad waarbij cytokine binding JAK's activeert die STAT's fosforyleren voor genregulatie"
          },
          {
            en: "A pathway that only regulates metabolism",
            es: "Una vía que solo regula el metabolismo",
            de: "Ein Weg, der nur den Stoffwechsel reguliert",
            nl: "Een pad dat alleen metabolisme reguleert"
          },
          {
            en: "A pathway involved only in DNA replication",
            es: "Una vía involucrada solo en replicación de ADN",
            de: "Ein Weg, der nur an DNA-Replikation beteiligt ist",
            nl: "Een pad alleen betrokken bij DNA-replicatie"
          },
          {
            en: "A pathway that regulates only cell adhesion",
            es: "Una vía que regula solo la adhesión celular",
            de: "Ein Weg, der nur Zelladhäsion reguliert",
            nl: "Een pad dat alleen celadhesie reguleert"
          }
        ],
        correct: 0,
        explanation: {
          en: "The JAK-STAT pathway is a rapid signaling mechanism for cytokines and growth factors. Binding to receptors activates Janus kinases (JAKs), which phosphorylate Signal Transducers and Activators of Transcription (STATs), allowing them to dimerize, translocate to the nucleus, and regulate gene expression.",
          es: "La vía JAK-STAT es un mecanismo de señalización rápido para citoquinas y factores de crecimiento. La unión a receptores activa quinasas Janus (JAKs), que fosforilan Transductores de Señales y Activadores de Transcripción (STATs), permitiéndoles dimerizarse, traslocarse al núcleo y regular la expresión génica.",
          de: "Der JAK-STAT-Weg ist ein schneller Signalmechanismus für Zytokine und Wachstumsfaktoren. Bindung an Rezeptoren aktiviert Janus-Kinasen (JAKs), die Signal Transducers and Activators of Transcription (STATs) phosphorylieren, wodurch sie dimerisieren, in den Kern translozieren und Genexpression regulieren können.",
          nl: "Het JAK-STAT pad is een snelle signaalmechanisme voor cytokines en groeifactoren. Binding aan receptoren activeert Janus kinases (JAK's), die Signal Transducers and Activators of Transcription (STAT's) fosforyleren, waardoor ze kunnen dimeriseren, transloceren naar de kern en genexpressie reguleren."
        }
      },
      {
        question: {
          en: "What is the role of protein phosphatases in cell signaling?",
          es: "¿Cuál es el papel de las proteína fosfatasas en la señalización celular?",
          de: "Was ist die Rolle von Proteinphosphatasen in der Zellsignalisierung?",
          nl: "Wat is de rol van proteïne fosfatasen bij celsignalering?"
        },
        options: [
          {
            en: "They remove phosphate groups to terminate or modulate signaling pathways",
            es: "Remueven grupos fosfato para terminar o modular vías de señalización",
            de: "Sie entfernen Phosphatgruppen, um Signalwege zu beenden oder zu modulieren",
            nl: "Ze verwijderen fosfaatgroepen om signaalpaden te beëindigen of moduleren"
          },
          {
            en: "They add phosphate groups to activate proteins",
            es: "Añaden grupos fosfato para activar proteínas",
            de: "Sie fügen Phosphatgruppen zur Proteinaktivierung hinzu",
            nl: "Ze voegen fosfaatgroepen toe om eiwitten te activeren"
          },
          {
            en: "They only function in protein synthesis",
            es: "Solo funcionan en síntesis proteica",
            de: "Sie funktionieren nur bei der Proteinsynthese",
            nl: "Ze functioneren alleen bij eiwitsynthese"
          },
          {
            en: "They break down signaling proteins completely",
            es: "Descomponen completamente proteínas de señalización",
            de: "Sie bauen Signalproteine vollständig ab",
            nl: "Ze breken signaaleiwitten volledig af"
          }
        ],
        correct: 0,
        explanation: {
          en: "Protein phosphatases are essential for signal termination and regulation by removing phosphate groups from proteins, providing balance to kinase activity and ensuring proper timing of cellular responses.",
          es: "Las proteína fosfatasas son esenciales para la terminación y regulación de señales removiendo grupos fosfato de proteínas, proporcionando equilibrio a la actividad de quinasas y asegurando el tiempo adecuado de respuestas celulares.",
          de: "Proteinphosphatasen sind wesentlich für Signalbeendigung und -regulation durch Entfernung von Phosphatgruppen von Proteinen, wodurch sie ein Gleichgewicht zur Kinaseaktivität schaffen und das richtige Timing zellulärer Antworten gewährleisten.",
          nl: "Proteïne fosfatasen zijn essentieel voor signaalbeëindiging en regulatie door fosfaatgroepen van eiwitten te verwijderen, wat balans biedt aan kinase activiteit en zorgt voor juiste timing van cellulaire responsen."
        }
      },
      {
        question: {
          en: "What is signal amplification in cellular communication?",
          es: "¿Qué es la amplificación de señales en la comunicación celular?",
          de: "Was ist Signalverstärkung in der zellulären Kommunikation?",
          nl: "Wat is signaalversterking bij cellulaire communicatie?"
        },
        options: [
          {
            en: "The process where a single signal molecule triggers multiple downstream responses",
            es: "El proceso donde una sola molécula de señal desencadena múltiples respuestas downstream",
            de: "Der Prozess, bei dem ein einzelnes Signalmolekül mehrere nachgelagerte Antworten auslöst",
            nl: "Het proces waarbij een enkel signaalmolecuul meerdere downstream responsen triggert"
          },
          {
            en: "The process of making signal molecules larger",
            es: "El proceso de hacer las moléculas de señal más grandes",
            de: "Der Prozess, Signalmoleküle größer zu machen",
            nl: "Het proces van signaalmoleculen groter maken"
          },
          {
            en: "The process of increasing signal molecule concentration",
            es: "El proceso de aumentar la concentración de moléculas de señal",
            de: "Der Prozess der Erhöhung der Signalmolekülkonzentration",
            nl: "Het proces van verhogen van signaalmolecuul concentratie"
          },
          {
            en: "The process of signal molecule degradation",
            es: "El proceso de degradación de moléculas de señal",
            de: "Der Prozess des Signalmolekülabbaus",
            nl: "Het proces van signaalmolecuul afbraak"
          }
        ],
        correct: 0,
        explanation: {
          en: "Signal amplification occurs through enzymatic cascades where each activated enzyme can activate multiple downstream targets, creating exponential amplification. For example, one activated adenylyl cyclase can produce thousands of cAMP molecules.",
          es: "La amplificación de señales ocurre a través de cascadas enzimáticas donde cada enzima activada puede activar múltiples objetivos downstream, creando amplificación exponencial. Por ejemplo, una adenilil ciclasa activada puede producir miles de moléculas de cAMP.",
          de: "Signalverstärkung erfolgt durch enzymatische Kaskaden, bei denen jedes aktivierte Enzym mehrere nachgelagerte Ziele aktivieren kann, wodurch exponenzielle Verstärkung entsteht. Zum Beispiel kann eine aktivierte Adenylylzyklase Tausende von cAMP-Molekülen produzieren.",
          nl: "Signaalversterking vindt plaats door enzymatische cascades waarbij elk geactiveerd enzym meerdere downstream doelen kan activeren, wat exponentiële versterking creëert. Bijvoorbeeld, één geactiveerd adenylyl cyclase kan duizenden cAMP moleculen produceren."
        }
      },
      {
        question: {
          en: "What are scaffold proteins in signaling pathways?",
          es: "¿Qué son las proteínas andamio en las vías de señalización?",
          de: "Was sind Gerüstproteine in Signalwegen?",
          nl: "Wat zijn scaffold eiwitten in signaalpaden?"
        },
        options: [
          {
            en: "Organizing proteins that bring signaling components together for efficient signal transduction",
            es: "Proteínas organizadoras que reúnen componentes de señalización para transducción eficiente",
            de: "Organisierende Proteine, die Signalkomponenten für effiziente Signaltransduktion zusammenbringen",
            nl: "Organiserende eiwitten die signaalcomponenten samenbrengen voor efficiënte signaaltransductie"
          },
          {
            en: "Structural proteins that form the cell skeleton",
            es: "Proteínas estructurales que forman el esqueleto celular",
            de: "Strukturproteine, die das Zellskelett bilden",
            nl: "Structurele eiwitten die het celskelet vormen"
          },
          {
            en: "Enzymes that break down signaling molecules",
            es: "Enzimas que descomponen moléculas de señalización",
            de: "Enzyme, die Signalmoleküle abbauen",
            nl: "Enzymen die signaalmoleculen afbreken"
          },
          {
            en: "Membrane proteins that transport signals",
            es: "Proteínas de membrana que transportan señales",
            de: "Membranproteine, die Signale transportieren",
            nl: "Membraaneiwitten die signalen transporteren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Scaffold proteins serve as molecular platforms that organize signaling complexes, bringing together specific kinases, phosphatases, and other signaling molecules to enhance specificity, efficiency, and localization of signal transduction.",
          es: "Las proteínas andamio sirven como plataformas moleculares que organizan complejos de señalización, reuniendo quinasas específicas, fosfatasas y otras moléculas de señalización para mejorar especificidad, eficiencia y localización de transducción de señales.",
          de: "Gerüstproteine dienen als molekulare Plattformen, die Signalkomplexe organisieren und spezifische Kinasen, Phosphatasen und andere Signalmoleküle zusammenbringen, um Spezifität, Effizienz und Lokalisation der Signaltransduktion zu verbessern.",
          nl: "Scaffold eiwitten dienen als moleculaire platforms die signaalcomplexen organiseren, specifieke kinases, fosfatasen en andere signaalmoleculen samenbrengen om specificiteit, efficiëntie en lokalisatie van signaaltransductie te verbeteren."
        }
      },
      {
        question: {
          en: "What is the NF-κB signaling pathway?",
          es: "¿Qué es la vía de señalización NF-κB?",
          de: "Was ist der NF-κB-Signalweg?",
          nl: "Wat is het NF-κB signaalpad?"
        },
        options: [
          {
            en: "A pathway that regulates inflammatory and immune responses through transcription factor activation",
            es: "Una vía que regula respuestas inflamatorias e inmunes a través de activación de factores de transcripción",
            de: "Ein Weg, der entzündliche und immune Antworten durch Transkriptionsfaktoraktivierung reguliert",
            nl: "Een pad dat ontstekings- en immuunresponsen reguleert via transcriptiefactor activatie"
          },
          {
            en: "A pathway involved only in cell division",
            es: "Una vía involucrada solo en división celular",
            de: "Ein Weg, der nur an Zellteilung beteiligt ist",
            nl: "Een pad alleen betrokken bij celdeling"
          },
          {
            en: "A pathway that regulates only metabolism",
            es: "Una vía que regula solo el metabolismo",
            de: "Ein Weg, der nur den Stoffwechsel reguliert",
            nl: "Een pad dat alleen metabolisme reguleert"
          },
          {
            en: "A pathway involved only in DNA repair",
            es: "Una vía involucrada solo en reparación de ADN",
            de: "Ein Weg, der nur an DNA-Reparatur beteiligt ist",
            nl: "Een pad alleen betrokken bij DNA-reparatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The NF-κB pathway is a key regulator of innate and adaptive immunity, inflammation, and cell survival. Upon activation, NF-κB transcription factors translocate to the nucleus and activate genes involved in immune responses and inflammation.",
          es: "La vía NF-κB es un regulador clave de la inmunidad innata y adaptativa, inflamación y supervivencia celular. Al activarse, los factores de transcripción NF-κB se translocan al núcleo y activan genes involucrados en respuestas inmunes e inflamación.",
          de: "Der NF-κB-Weg ist ein Schlüsselregulator der angeborenen und adaptiven Immunität, Entzündung und Zellüberleben. Bei Aktivierung translozieren NF-κB-Transkriptionsfaktoren in den Kern und aktivieren Gene, die an Immunantworten und Entzündung beteiligt sind.",
          nl: "Het NF-κB pad is een sleutelregulator van aangeboren en adaptieve immuniteit, ontsteking en celoverleving. Bij activatie transloceren NF-κB transcriptiefactoren naar de kern en activeren genen betrokken bij immuunresponsen en ontsteking."
        }
      },
      {
        question: {
          en: "What is crosstalk in cell signaling?",
          es: "¿Qué es la comunicación cruzada en señalización celular?",
          de: "Was ist Crosstalk in der Zellsignalisierung?",
          nl: "Wat is crosstalk bij celsignalering?"
        },
        options: [
          {
            en: "The interaction and integration of multiple signaling pathways to coordinate cellular responses",
            es: "La interacción e integración de múltiples vías de señalización para coordinar respuestas celulares",
            de: "Die Interaktion und Integration mehrerer Signalwege zur Koordination zellulärer Antworten",
            nl: "De interactie en integratie van meerdere signaalpaden om cellulaire responsen te coördineren"
          },
          {
            en: "The random activation of signaling pathways",
            es: "La activación aleatoria de vías de señalización",
            de: "Die zufällige Aktivierung von Signalwegen",
            nl: "De willekeurige activatie van signaalpaden"
          },
          {
            en: "The complete separation of signaling pathways",
            es: "La separación completa de vías de señalización",
            de: "Die vollständige Trennung von Signalwegen",
            nl: "De volledige scheiding van signaalpaden"
          },
          {
            en: "The degradation of signaling molecules",
            es: "La degradación de moléculas de señalización",
            de: "Der Abbau von Signalmolekülen",
            nl: "De afbraak van signaalmoleculen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Crosstalk refers to the complex interactions between different signaling pathways that allow cells to integrate multiple signals and generate appropriate, coordinated responses. This can involve shared components, competing pathways, or synergistic interactions.",
          es: "La comunicación cruzada se refiere a las interacciones complejas entre diferentes vías de señalización que permiten a las células integrar múltiples señales y generar respuestas apropiadas y coordinadas. Esto puede involucrar componentes compartidos, vías competidoras o interacciones sinérgicas.",
          de: "Crosstalk bezieht sich auf die komplexen Interaktionen zwischen verschiedenen Signalwegen, die es Zellen ermöglichen, mehrere Signale zu integrieren und angemessene, koordinierte Antworten zu generieren. Dies kann geteilte Komponenten, konkurrierende Wege oder synergistische Interaktionen umfassen.",
          nl: "Crosstalk verwijst naar de complexe interacties tussen verschillende signaalpaden die cellen toestaan meerdere signalen te integreren en passende, gecoördineerde responsen te genereren. Dit kan gedeelde componenten, concurrerende paden of synergistische interacties omvatten."
        }
      },
      {
        question: {
          en: "What are the key characteristics of steroid hormone signaling?",
          es: "¿Cuáles son las características clave de la señalización de hormonas esteroideas?",
          de: "Was sind die Schlüsselmerkmale der Steroidhormonsignalisierung?",
          nl: "Wat zijn de belangrijkste kenmerken van steroïde hormoon signalering?"
        },
        options: [
          {
            en: "Lipid-soluble hormones that bind to intracellular receptors and directly regulate transcription",
            es: "Hormonas liposolubles que se unen a receptores intracelulares y regulan directamente la transcripción",
            de: "Lipidlösliche Hormone, die an intrazelluläre Rezeptoren binden und direkt die Transkription regulieren",
            nl: "Lipide-oplosbare hormonen die binden aan intracellulaire receptoren en direct transcriptie reguleren"
          },
          {
            en: "Water-soluble hormones that activate membrane receptors",
            es: "Hormonas hidrosolubles que activan receptores de membrana",
            de: "Wasserlösliche Hormone, die Membranrezeptoren aktivieren",
            nl: "Wateroplosbare hormonen die membraanreceptoren activeren"
          },
          {
            en: "Hormones that only activate kinase cascades",
            es: "Hormonas que solo activan cascadas de quinasas",
            de: "Hormone, die nur Kinase-Kaskaden aktivieren",
            nl: "Hormonen die alleen kinase cascades activeren"
          },
          {
            en: "Hormones that function only through second messengers",
            es: "Hormonas que funcionan solo a través de segundos mensajeros",
            de: "Hormone, die nur über zweite Botenstoffe funktionieren",
            nl: "Hormonen die alleen functioneren via tweede boodschappers"
          }
        ],
        correct: 0,
        explanation: {
          en: "Steroid hormones are lipophilic molecules that can pass through cell membranes and bind to intracellular nuclear receptors, forming hormone-receptor complexes that act as transcription factors to directly regulate gene expression.",
          es: "Las hormonas esteroideas son moléculas lipofílicas que pueden pasar a través de membranas celulares y unirse a receptores nucleares intracelulares, formando complejos hormona-receptor que actúan como factores de transcripción para regular directamente la expresión génica.",
          de: "Steroidhormone sind lipophile Moleküle, die durch Zellmembranen passieren und an intrazelluläre Kernrezeptoren binden können, wodurch Hormon-Rezeptor-Komplexe entstehen, die als Transkriptionsfaktoren wirken und direkt die Genexpression regulieren.",
          nl: "Steroïde hormonen zijn lipofiele moleculen die door celmembranen kunnen passeren en binden aan intracellulaire nucleaire receptoren, wat hormoon-receptor complexen vormt die werken als transcriptiefactoren om direct genexpressie te reguleren."
        }
      },
      {
        question: {
          en: "What is the role of ubiquitin in cell signaling regulation?",
          es: "¿Cuál es el papel de la ubiquitina en la regulación de señalización celular?",
          de: "Was ist die Rolle von Ubiquitin in der Zellsignalisierungsregulation?",
          nl: "Wat is de rol van ubiquitine bij celsignalering regulatie?"
        },
        options: [
          {
            en: "It tags proteins for degradation to terminate signaling or modify protein function",
            es: "Marca proteínas para degradación para terminar señalización o modificar función proteica",
            de: "Es markiert Proteine für den Abbau, um die Signalübertragung zu beenden oder die Proteinfunktion zu modifizieren",
            nl: "Het markeert eiwitten voor afbraak om signalering te beëindigen of eiwitfunctie te modificeren"
          },
          {
            en: "It directly activates all signaling pathways",
            es: "Activa directamente todas las vías de señalización",
            de: "Es aktiviert direkt alle Signalwege",
            nl: "Het activeert direct alle signaalpaden"
          },
          {
            en: "It serves as a second messenger molecule",
            es: "Sirve como molécula de segundo mensajero",
            de: "Es dient als zweiter Botenstoff",
            nl: "Het dient als tweede boodschappermolecuul"
          },
          {
            en: "It transports signals between cells",
            es: "Transporta señales entre células",
            de: "Es transportiert Signale zwischen Zellen",
            nl: "Het transporteert signalen tussen cellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Ubiquitin is a small regulatory protein that tags other proteins for degradation by the proteasome or modifies their function, localization, or interactions, providing crucial regulation of signaling pathway components.",
          es: "La ubiquitina es una pequeña proteína regulatoria que marca otras proteínas para degradación por el proteasoma o modifica su función, localización o interacciones, proporcionando regulación crucial de componentes de vías de señalización.",
          de: "Ubiquitin ist ein kleines regulatorisches Protein, das andere Proteine für den Abbau durch das Proteasom markiert oder deren Funktion, Lokalisation oder Interaktionen modifiziert und damit eine entscheidende Regulierung von Signalwegkomponenten ermöglicht.",
          nl: "Ubiquitine is een klein regulatoir eiwit dat andere eiwitten markeert voor afbraak door het proteasoom of hun functie, lokalisatie of interacties modificeert, wat cruciale regulatie biedt van signaalpad componenten."
        }
      },
      {
        question: {
          en: "What is the difference between autocrine, paracrine, and endocrine signaling?",
          es: "¿Cuál es la diferencia entre señalización autocrina, paracrina y endocrina?",
          de: "Was ist der Unterschied zwischen autokriner, parakriner und endokriner Signalisierung?",
          nl: "Wat is het verschil tussen autocriene, paracriene en endocriene signalering?"
        },
        options: [
          {
            en: "Autocrine: self-signaling; Paracrine: local signaling; Endocrine: long-distance signaling",
            es: "Autocrina: auto-señalización; Paracrina: señalización local; Endocrina: señalización a larga distancia",
            de: "Autokrin: Selbstsignalisierung; Parakrin: lokale Signalisierung; Endokrin: Fernbereichssignalisierung",
            nl: "Autocriene: zelf-signalering; Paracriene: lokale signalering; Endocriene: lange-afstand signalering"
          },
          {
            en: "All three are identical signaling mechanisms",
            es: "Los tres son mecanismos de señalización idénticos",
            de: "Alle drei sind identische Signalmechanismen",
            nl: "Alle drie zijn identieke signaalmechanismen"
          },
          {
            en: "They differ only in the type of molecules used",
            es: "Solo difieren en el tipo de moléculas usadas",
            de: "Sie unterscheiden sich nur in der Art der verwendeten Moleküle",
            nl: "Ze verschillen alleen in het type gebruikte moleculen"
          },
          {
            en: "They occur only in different types of organisms",
            es: "Ocurren solo en diferentes tipos de organismos",
            de: "Sie treten nur in verschiedenen Organismustypen auf",
            nl: "Ze komen alleen voor in verschillende soorten organismen"
          }
        ],
        correct: 0,
        explanation: {
          en: "These represent different modes of cellular communication based on distance: autocrine signaling affects the same cell that produced the signal, paracrine affects nearby cells, and endocrine involves hormones traveling through the bloodstream to distant target cells.",
          es: "Estos representan diferentes modos de comunicación celular basados en distancia: señalización autocrina afecta la misma célula que produjo la señal, paracrina afecta células cercanas, y endocrina involucra hormonas viajando por el torrente sanguíneo a células objetivo distantes.",
          de: "Diese repräsentieren verschiedene Modi der zellulären Kommunikation basierend auf Entfernung: autokrine Signalisierung beeinflusst dieselbe Zelle, die das Signal produziert hat, parakrine beeinflusst nahegelegene Zellen, und endokrine beinhaltet Hormone, die durch den Blutkreislauf zu entfernten Zielzellen reisen.",
          nl: "Deze vertegenwoordigen verschillende modi van cellulaire communicatie gebaseerd op afstand: autocriene signalering beïnvloedt dezelfde cel die het signaal produceerde, paracriene beïnvloedt nabije cellen, en endocriene behelst hormonen die via de bloedbaan naar verre doelcellen reizen."
        }
      },
      {
        question: {
          en: "What are the main components of a signal transduction pathway?",
          es: "¿Cuáles son los componentes principales de una vía de transducción de señales?",
          de: "Was sind die Hauptkomponenten eines Signaltransduktionswegs?",
          nl: "Wat zijn de hoofdcomponenten van een signaaltransductiepad?"
        },
        options: [
          {
            en: "Signal molecule, receptor, intracellular signaling proteins, and target proteins",
            es: "Molécula de señal, receptor, proteínas de señalización intracelular y proteínas objetivo",
            de: "Signalmolekül, Rezeptor, intrazelluläre Signalproteine und Zielproteine",
            nl: "Signaalmolecuul, receptor, intracellulaire signaaleiwitten en doeleiwitten"
          },
          {
            en: "Only the signal molecule and receptor",
            es: "Solo la molécula de señal y el receptor",
            de: "Nur das Signalmolekül und der Rezeptor",
            nl: "Alleen het signaalmolecuul en receptor"
          },
          {
            en: "Only intracellular proteins",
            es: "Solo proteínas intracelulares",
            de: "Nur intrazelluläre Proteine",
            nl: "Alleen intracellulaire eiwitten"
          },
          {
            en: "Only membrane-bound components",
            es: "Solo componentes unidos a la membrana",
            de: "Nur membrangebundene Komponenten",
            nl: "Alleen membraangebonden componenten"
          }
        ],
        correct: 0,
        explanation: {
          en: "A complete signal transduction pathway includes: (1) a signal molecule (ligand), (2) a receptor that binds the signal, (3) intracellular signaling proteins that relay and amplify the signal, and (4) target proteins that produce the cellular response.",
          es: "Una vía completa de transducción de señales incluye: (1) una molécula de señal (ligando), (2) un receptor que une la señal, (3) proteínas de señalización intracelular que retransmiten y amplifican la señal, y (4) proteínas objetivo que producen la respuesta celular.",
          de: "Ein vollständiger Signaltransduktionsweg umfasst: (1) ein Signalmolekül (Ligand), (2) einen Rezeptor, der das Signal bindet, (3) intrazelluläre Signalproteine, die das Signal weiterleiten und verstärken, und (4) Zielproteine, die die zelluläre Antwort produzieren.",
          nl: "Een compleet signaaltransductiepad omvat: (1) een signaalmolecuul (ligand), (2) een receptor die het signaal bindt, (3) intracellulaire signaaleiwitten die het signaal doorsturen en versterken, en (4) doeleiwitten die de cellulaire respons produceren."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/molecular-biology', level4);
  }
})();