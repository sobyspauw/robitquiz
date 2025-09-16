// Molecular Biology - Level 8: Systems Biology and Computational Approaches
(function() {
  const level8 = {
    name: {
      en: "Systems Biology and Computational Approaches",
      es: "Biología de Sistemas y Enfoques Computacionales",
      de: "Systembiologie und Computergestützte Ansätze",
      nl: "Systeembiologie en Computationele Benaderingen"
    },
    questions: [
      {
        question: {
          en: "What is the primary goal of systems biology?",
          es: "¿Cuál es el objetivo principal de la biología de sistemas?",
          de: "Was ist das Hauptziel der Systembiologie?",
          nl: "Wat is het hoofddoel van systeembiologie?"
        },
        options: [
          {
            en: "Understanding emergent properties of biological networks",
            es: "Comprender las propiedades emergentes de las redes biológicas",
            de: "Verständnis emergenter Eigenschaften biologischer Netzwerke",
            nl: "Begrijpen van emergente eigenschappen van biologische netwerken"
          },
          {
            en: "Studying individual genes in isolation",
            es: "Estudiar genes individuales de forma aislada",
            de: "Individuelle Gene isoliert studieren",
            nl: "Individuele genen geïsoleerd bestuderen"
          },
          {
            en: "Focusing only on protein structures",
            es: "Centrarse solo en estructuras de proteínas",
            de: "Nur auf Proteinstrukturen fokussieren",
            nl: "Alleen focussen op eiwitstructuren"
          },
          {
            en: "Analyzing single cellular processes",
            es: "Analizar procesos celulares únicos",
            de: "Einzelne zelluläre Prozesse analysieren",
            nl: "Enkele cellulaire processen analyseren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Systems biology aims to understand how complex interactions between biological components give rise to emergent properties and behaviors that cannot be predicted from studying individual components alone.",
          es: "La biología de sistemas busca comprender cómo las interacciones complejas entre componentes biológicos dan lugar a propiedades emergentes y comportamientos que no se pueden predecir estudiando componentes individuales por separado.",
          de: "Die Systembiologie zielt darauf ab zu verstehen, wie komplexe Interaktionen zwischen biologischen Komponenten zu emergenten Eigenschaften und Verhaltensweisen führen, die nicht durch das Studium einzelner Komponenten allein vorhergesagt werden können.",
          nl: "Systeembiologie heeft als doel te begrijpen hoe complexe interacties tussen biologische componenten leiden tot emergente eigenschappen en gedragingen die niet voorspeld kunnen worden door individuele componenten alleen te bestuderen."
        }
      },
      {
        question: {
          en: "In network biology, what does the 'scale-free' property refer to?",
          es: "En biología de redes, ¿a qué se refiere la propiedad 'libre de escala'?",
          de: "Worauf bezieht sich die 'skalenfreie' Eigenschaft in der Netzwerkbiologie?",
          nl: "Waar verwijst de 'schaalvrije' eigenschap naar in netwerkbiologie?"
        },
        options: [
          {
            en: "Power-law degree distribution with hub nodes",
            es: "Distribución de grado de ley de potencia con nodos centrales",
            de: "Potenzgesetz-Gradverteilung mit Hub-Knoten",
            nl: "Machtswet graadverdeling met hub knooppunten"
          },
          {
            en: "All nodes having equal connections",
            es: "Todos los nodos tienen conexiones iguales",
            de: "Alle Knoten haben gleiche Verbindungen",
            nl: "Alle knooppunten hebben gelijke verbindingen"
          },
          {
            en: "Networks without any connections",
            es: "Redes sin conexiones",
            de: "Netzwerke ohne Verbindungen",
            nl: "Netwerken zonder verbindingen"
          },
          {
            en: "Random distribution of connections",
            es: "Distribución aleatoria de conexiones",
            de: "Zufällige Verteilung von Verbindungen",
            nl: "Willekeurige distributie van verbindingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Scale-free networks follow a power-law degree distribution where a few highly connected hub nodes coexist with many nodes having few connections, making the network robust to random failures but vulnerable to targeted attacks on hubs.",
          es: "Las redes libres de escala siguen una distribución de grado de ley de potencia donde unos pocos nodos centrales altamente conectados coexisten con muchos nodos que tienen pocas conexiones, haciendo la red robusta a fallas aleatorias pero vulnerable a ataques dirigidos a los centros.",
          de: "Skalenfreie Netzwerke folgen einer Potenzgesetz-Gradverteilung, bei der einige hochvernetzte Hub-Knoten mit vielen Knoten koexistieren, die wenige Verbindungen haben, was das Netzwerk robust gegen zufällige Ausfälle, aber anfällig für gezielte Angriffe auf Hubs macht.",
          nl: "Schaalvrije netwerken volgen een machtswet graadverdeling waarbij een paar zeer verbonden hub knooppunten samenleven met veel knooppunten die weinig verbindingen hebben, waardoor het netwerk robuust is tegen willekeurige storingen maar kwetsbaar voor gerichte aanvallen op hubs."
        }
      },
      {
        question: {
          en: "What is the purpose of Gene Ontology (GO) in bioinformatics?",
          es: "¿Cuál es el propósito de la Ontología Génica (GO) en bioinformática?",
          de: "Was ist der Zweck der Gen-Ontologie (GO) in der Bioinformatik?",
          nl: "Wat is het doel van Gene Ontology (GO) in bioinformatica?"
        },
        options: [
          {
            en: "Standardized annotation of gene function across species",
            es: "Anotación estandarizada de la función génica entre especies",
            de: "Standardisierte Annotation der Genfunktion über Arten hinweg",
            nl: "Gestandaardiseerde annotatie van genfunctie over soorten heen"
          },
          {
            en: "DNA sequence storage database",
            es: "Base de datos de almacenamiento de secuencias de ADN",
            de: "DNA-Sequenz-Speicherdatenbank",
            nl: "DNA-sequentie opslag database"
          },
          {
            en: "Protein structure prediction tool",
            es: "Herramienta de predicción de estructura de proteínas",
            de: "Proteinstruktur-Vorhersage-Tool",
            nl: "Eiwitstructuur voorspelling tool"
          },
          {
            en: "Phylogenetic tree construction",
            es: "Construcción de árboles filogenéticos",
            de: "Phylogenetische Baumkonstruktion",
            nl: "Fylogenetische boom constructie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Gene Ontology provides a controlled vocabulary to describe gene and gene product attributes across all species, enabling consistent functional annotation and comparative analysis of biological processes, molecular functions, and cellular components.",
          es: "La Ontología Génica proporciona un vocabulario controlado para describir atributos de genes y productos génicos en todas las especies, permitiendo anotación funcional consistente y análisis comparativo de procesos biológicos, funciones moleculares y componentes celulares.",
          de: "Die Gen-Ontologie stellt ein kontrolliertes Vokabular zur Beschreibung von Gen- und Genproduktattributen über alle Arten hinweg bereit, was konsistente funktionale Annotation und vergleichende Analyse biologischer Prozesse, molekularer Funktionen und zellulärer Komponenten ermöglicht.",
          nl: "Gene Ontology biedt een gecontroleerd vocabulaire om gen- en genproduct attributen over alle soorten te beschrijven, wat consistente functionele annotatie en vergelijkende analyse van biologische processen, moleculaire functies en cellulaire componenten mogelijk maakt."
        }
      },
      {
        question: {
          en: "In flux balance analysis (FBA), what is being optimized?",
          es: "En análisis de balance de flujos (FBA), ¿qué se está optimizando?",
          de: "Was wird in der Flussbilanzanalyse (FBA) optimiert?",
          nl: "Wat wordt geoptimaliseerd in flux balance analysis (FBA)?"
        },
        options: [
          {
            en: "Metabolic flux distribution under steady-state constraints",
            es: "Distribución de flujo metabólico bajo restricciones de estado estacionario",
            de: "Metabolische Flussverteilung unter stationären Bedingungen",
            nl: "Metabolische fluxverdeling onder steady-state beperkingen"
          },
          {
            en: "Gene expression levels",
            es: "Niveles de expresión génica",
            de: "Genexpressionslevel",
            nl: "Genexpressie niveaus"
          },
          {
            en: "Protein folding pathways",
            es: "Vías de plegamiento de proteínas",
            de: "Proteinfaltungswege",
            nl: "Eiwitvouwing paden"
          },
          {
            en: "DNA replication speed",
            es: "Velocidad de replicación del ADN",
            de: "DNA-Replikationsgeschwindigkeit",
            nl: "DNA-replicatie snelheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "FBA uses linear programming to find optimal flux distributions through metabolic networks under steady-state conditions, typically maximizing biomass production or other cellular objectives while satisfying stoichiometric and thermodynamic constraints.",
          es: "FBA usa programación lineal para encontrar distribuciones óptimas de flujo a través de redes metabólicas en condiciones de estado estacionario, típicamente maximizando la producción de biomasa u otros objetivos celulares mientras satisface restricciones estequiométricas y termodinámicas.",
          de: "FBA verwendet lineare Programmierung, um optimale Flussverteilungen durch metabolische Netzwerke unter stationären Bedingungen zu finden, typischerweise die Biomasseproduktion oder andere zelluläre Ziele maximierend, während stöchiometrische und thermodynamische Einschränkungen erfüllt werden.",
          nl: "FBA gebruikt lineaire programmering om optimale fluxverdelingen door metabolische netwerken onder steady-state omstandigheden te vinden, typisch biomassaproductie of andere cellulaire doelstellingen maximalizend terwijl stoichiometrische en thermodynamische beperkingen worden voldaan."
        }
      },
      {
        question: {
          en: "What is the main advantage of Boolean network models in systems biology?",
          es: "¿Cuál es la principal ventaja de los modelos de redes booleanas en biología de sistemas?",
          de: "Was ist der Hauptvorteil boolescher Netzwerkmodelle in der Systembiologie?",
          nl: "Wat is het hoofdvoordeel van Boolean netwerkmodellen in systeembiologie?"
        },
        options: [
          {
            en: "Simplicity in modeling regulatory network dynamics",
            es: "Simplicidad en el modelado de dinámicas de redes regulatorias",
            de: "Einfachheit bei der Modellierung regulatorischer Netzwerkdynamik",
            nl: "Eenvoud in het modelleren van regulatoire netwerkdynamiek"
          },
          {
            en: "High computational complexity",
            es: "Alta complejidad computacional",
            de: "Hohe rechnerische Komplexität",
            nl: "Hoge computationele complexiteit"
          },
          {
            en: "Requirement for detailed kinetic parameters",
            es: "Requisito de parámetros cinéticos detallados",
            de: "Erfordernis detaillierter kinetischer Parameter",
            nl: "Vereiste voor gedetailleerde kinetische parameters"
          },
          {
            en: "Continuous variable representation",
            es: "Representación de variables continuas",
            de: "Kontinuierliche Variablendarstellung",
            nl: "Continue variabele representatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Boolean networks use binary on/off states to model gene regulatory networks, providing a simple yet powerful framework to understand network dynamics and attractors without requiring detailed kinetic parameters.",
          es: "Las redes booleanas usan estados binarios encendido/apagado para modelar redes regulatorias génicas, proporcionando un marco simple pero poderoso para entender dinámicas de red y atractores sin requerir parámetros cinéticos detallados.",
          de: "Boolesche Netzwerke verwenden binäre Ein/Aus-Zustände zur Modellierung genregulatorischer Netzwerke und bieten ein einfaches, aber mächtiges Framework zum Verständnis von Netzwerkdynamik und Attraktoren ohne detaillierte kinetische Parameter.",
          nl: "Boolean netwerken gebruiken binaire aan/uit toestanden om genregulatienetwerken te modelleren, wat een eenvoudig maar krachtig raamwerk biedt om netwerkdynamiek en attractors te begrijpen zonder gedetailleerde kinetische parameters te vereisen."
        }
      },
      {
        question: {
          en: "In phylogenetic analysis, what does bootstrap support indicate?",
          es: "En análisis filogenético, ¿qué indica el soporte bootstrap?",
          de: "Was zeigt die Bootstrap-Unterstützung in der phylogenetischen Analyse an?",
          nl: "Wat geeft bootstrap ondersteuning aan in fylogenetische analyse?"
        },
        options: [
          {
            en: "Statistical confidence in tree topology",
            es: "Confianza estadística en la topología del árbol",
            de: "Statistische Vertrauen in die Baumtopologie",
            nl: "Statistische betrouwbaarheid in boom topologie"
          },
          {
            en: "Evolutionary distance between species",
            es: "Distancia evolutiva entre especies",
            de: "Evolutionäre Distanz zwischen Arten",
            nl: "Evolutionaire afstand tussen soorten"
          },
          {
            en: "Time of species divergence",
            es: "Tiempo de divergencia de especies",
            de: "Zeit der Artendivergenz",
            nl: "Tijd van soorten divergentie"
          },
          {
            en: "Gene duplication events",
            es: "Eventos de duplicación génica",
            de: "Genduplikationsereignisse",
            nl: "Genduplicatie gebeurtenissen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Bootstrap support values indicate the statistical confidence in phylogenetic tree branches by measuring how often a particular branch appears in trees constructed from resampled datasets, with higher values indicating greater confidence.",
          es: "Los valores de soporte bootstrap indican la confianza estadística en las ramas del árbol filogenético midiendo qué tan a menudo aparece una rama particular en árboles construidos a partir de conjuntos de datos remuestreados, con valores más altos indicando mayor confianza.",
          de: "Bootstrap-Unterstützungswerte zeigen das statistische Vertrauen in phylogenetische Baumäste an, indem sie messen, wie oft ein bestimmter Ast in Bäumen erscheint, die aus neu gesampelten Datensätzen konstruiert wurden, wobei höhere Werte größeres Vertrauen anzeigen.",
          nl: "Bootstrap ondersteuningswaarden geven de statistische betrouwbaarheid in fylogenetische boomtakken aan door te meten hoe vaak een bepaalde tak verschijnt in bomen geconstrueerd uit opnieuw gesamplede datasets, waarbij hogere waarden meer vertrouwen aangeven."
        }
      },
      {
        question: {
          en: "What is the primary purpose of pathway enrichment analysis?",
          es: "¿Cuál es el propósito principal del análisis de enriquecimiento de vías?",
          de: "Was ist der Hauptzweck der Pathway-Enrichment-Analyse?",
          nl: "Wat is het hoofddoel van pathway verrijkingsanalyse?"
        },
        options: [
          {
            en: "Identify overrepresented biological pathways in gene sets",
            es: "Identificar vías biológicas sobrerrepresentadas en conjuntos de genes",
            de: "Überrepräsentierte biologische Pathways in Gensets identifizieren",
            nl: "Oververtegenwoordigde biologische pathways in gensets identificeren"
          },
          {
            en: "Predict protein secondary structure",
            es: "Predecir la estructura secundaria de proteínas",
            de: "Sekundärstruktur von Proteinen vorhersagen",
            nl: "Eiwit secundaire structuur voorspellen"
          },
          {
            en: "Design PCR primers",
            es: "Diseñar primers de PCR",
            de: "PCR-Primer designen",
            nl: "PCR primers ontwerpen"
          },
          {
            en: "Calculate evolutionary distances",
            es: "Calcular distancias evolutivas",
            de: "Evolutionäre Distanzen berechnen",
            nl: "Evolutionaire afstanden berekenen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Pathway enrichment analysis tests whether genes in a specific set (e.g., differentially expressed genes) are overrepresented in known biological pathways, helping identify which cellular processes are most affected in experimental conditions.",
          es: "El análisis de enriquecimiento de vías prueba si los genes en un conjunto específico (p. ej., genes expresados diferencialmente) están sobrerrepresentados en vías biológicas conocidas, ayudando a identificar qué procesos celulares están más afectados en condiciones experimentales.",
          de: "Pathway-Enrichment-Analyse testet, ob Gene in einem spezifischen Set (z.B. differenziell exprimierte Gene) in bekannten biologischen Pathways überrepräsentiert sind, und hilft dabei zu identifizieren, welche zellulären Prozesse unter experimentellen Bedingungen am stärksten betroffen sind.",
          nl: "Pathway verrijkingsanalyse test of genen in een specifieke set (bijv. differentieel tot expressie gebrachte genen) oververtegenwoordigd zijn in bekende biologische pathways, wat helpt identificeren welke cellulaire processen het meest beïnvloed zijn onder experimentele omstandigheden."
        }
      },
      {
        question: {
          en: "In molecular dynamics simulations, what does the RMSD metric measure?",
          es: "En simulaciones de dinámica molecular, ¿qué mide la métrica RMSD?",
          de: "Was misst die RMSD-Metrik in molekulardynamischen Simulationen?",
          nl: "Wat meet de RMSD-metriek in moleculaire dynamica simulaties?"
        },
        options: [
          {
            en: "Root mean square deviation of atomic positions",
            es: "Desviación cuadrática media de las posiciones atómicas",
            de: "Wurzel der mittleren quadratischen Abweichung atomarer Positionen",
            nl: "Wortel van gemiddelde kwadratische afwijking van atomaire posities"
          },
          {
            en: "Reaction rate constant",
            es: "Constante de velocidad de reacción",
            de: "Reaktionsratenkonstante",
            nl: "Reactiesnelheidsconstante"
          },
          {
            en: "Binding affinity strength",
            es: "Fuerza de afinidad de unión",
            de: "Bindungsaffinitätsstärke",
            nl: "Bindingsaffiniteit sterkte"
          },
          {
            en: "Temperature fluctuations",
            es: "Fluctuaciones de temperatura",
            de: "Temperaturschwankungen",
            nl: "Temperatuur fluctuaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "RMSD measures the average distance between corresponding atoms in two molecular structures, commonly used to quantify structural changes during simulations or compare conformations to reference structures.",
          es: "RMSD mide la distancia promedio entre átomos correspondientes en dos estructuras moleculares, comúnmente usado para cuantificar cambios estructurales durante simulaciones o comparar conformaciones con estructuras de referencia.",
          de: "RMSD misst die durchschnittliche Distanz zwischen entsprechenden Atomen in zwei molekularen Strukturen, häufig verwendet zur Quantifizierung struktureller Änderungen während Simulationen oder zum Vergleich von Konformationen mit Referenzstrukturen.",
          nl: "RMSD meet de gemiddelde afstand tussen corresponderende atomen in twee moleculaire structuren, vaak gebruikt om structurele veranderingen tijdens simulaties te kwantificeren of conformaties te vergelijken met referentiestructuren."
        }
      },
      {
        question: {
          en: "What is the main concept behind hidden Markov models (HMMs) in bioinformatics?",
          es: "¿Cuál es el concepto principal detrás de los modelos ocultos de Markov (HMMs) en bioinformática?",
          de: "Was ist das Hauptkonzept hinter versteckten Markov-Modellen (HMMs) in der Bioinformatik?",
          nl: "Wat is het hoofdconcept achter hidden Markov models (HMMs) in bioinformatica?"
        },
        options: [
          {
            en: "Probabilistic modeling of sequential data with hidden states",
            es: "Modelado probabilístico de datos secuenciales con estados ocultos",
            de: "Probabilistische Modellierung sequenzieller Daten mit versteckten Zuständen",
            nl: "Probabilistische modellering van sequentiële data met verborgen toestanden"
          },
          {
            en: "Deterministic sequence alignment",
            es: "Alineación de secuencias determinística",
            de: "Deterministische Sequenzalignment",
            nl: "Deterministische sequentie alignering"
          },
          {
            en: "Linear regression analysis",
            es: "Análisis de regresión lineal",
            de: "Lineare Regressionsanalyse",
            nl: "Lineaire regressie analyse"
          },
          {
            en: "Classification without probability",
            es: "Clasificación sin probabilidad",
            de: "Klassifikation ohne Wahrscheinlichkeit",
            nl: "Classificatie zonder waarschijnlijkheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "HMMs model sequences where observable outputs depend on hidden states that follow Markov properties, widely used for gene finding, sequence alignment, and protein domain identification in biological sequences.",
          es: "Los HMMs modelan secuencias donde las salidas observables dependen de estados ocultos que siguen propiedades de Markov, ampliamente utilizados para búsqueda de genes, alineación de secuencias e identificación de dominios de proteínas en secuencias biológicas.",
          de: "HMMs modellieren Sequenzen, bei denen beobachtbare Ausgaben von versteckten Zuständen abhängen, die Markov-Eigenschaften folgen, weit verbreitet für Gensuche, Sequenzalignment und Proteindomänen-Identifikation in biologischen Sequenzen verwendet.",
          nl: "HMMs modelleren sequenties waarbij waarneembare outputs afhangen van verborgen toestanden die Markov eigenschappen volgen, breed gebruikt voor genen zoeken, sequentie alignering en eiwit domein identificatie in biologische sequenties."
        }
      },
      {
        question: {
          en: "In drug discovery, what is the purpose of virtual screening?",
          es: "En descubrimiento de fármacos, ¿cuál es el propósito del cribado virtual?",
          de: "Was ist der Zweck des virtuellen Screenings in der Arzneimittelforschung?",
          nl: "Wat is het doel van virtuele screening in medicijnontdekking?"
        },
        options: [
          {
            en: "Computationally identify potential drug candidates",
            es: "Identificar computacionalmente candidatos potenciales de fármacos",
            de: "Potenzielle Arzneimittelkandidaten computergestützt identifizieren",
            nl: "Computationeel potentiële medicijnkandidaten identificeren"
          },
          {
            en: "Synthesize new chemical compounds",
            es: "Sintetizar nuevos compuestos químicos",
            de: "Neue chemische Verbindungen synthetisieren",
            nl: "Nieuwe chemische verbindingen synthetiseren"
          },
          {
            en: "Test drug toxicity in animals",
            es: "Probar la toxicidad de fármacos en animales",
            de: "Arzneimitteltoxizität in Tieren testen",
            nl: "Medicijn toxiciteit testen in dieren"
          },
          {
            en: "Monitor patient responses",
            es: "Monitorear respuestas de pacientes",
            de: "Patientenreaktionen überwachen",
            nl: "Patiënt responsen monitoren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Virtual screening uses computational methods to evaluate large chemical databases and identify compounds that are likely to bind to a target protein, significantly reducing the time and cost of experimental screening.",
          es: "El cribado virtual usa métodos computacionales para evaluar grandes bases de datos químicas e identificar compuestos que probablemente se unan a una proteína objetivo, reduciendo significativamente el tiempo y costo del cribado experimental.",
          de: "Virtuelles Screening verwendet rechnerische Methoden zur Bewertung großer chemischer Datenbanken und Identifizierung von Verbindungen, die wahrscheinlich an ein Zielprotein binden, wodurch Zeit und Kosten des experimentellen Screenings erheblich reduziert werden.",
          nl: "Virtuele screening gebruikt computationele methoden om grote chemische databases te evalueren en verbindingen te identificeren die waarschijnlijk binden aan een doeleiwit, wat de tijd en kosten van experimentele screening aanzienlijk vermindert."
        }
      },
      {
        question: {
          en: "What is the main principle of principal component analysis (PCA) in genomics?",
          es: "¿Cuál es el principio principal del análisis de componentes principales (PCA) en genómica?",
          de: "Was ist das Hauptprinzip der Hauptkomponentenanalyse (PCA) in der Genomik?",
          nl: "Wat is het hoofdprincipe van principal component analysis (PCA) in genomics?"
        },
        options: [
          {
            en: "Dimensionality reduction while preserving maximum variance",
            es: "Reducción de dimensionalidad preservando la máxima varianza",
            de: "Dimensionalitätsreduktion unter Beibehaltung maximaler Varianz",
            nl: "Dimensionaliteitsreductie terwijl maximale variantie behouden blijft"
          },
          {
            en: "Increasing data complexity",
            es: "Aumentar la complejidad de los datos",
            de: "Erhöhung der Datenkomplexität",
            nl: "Verhogen van data complexiteit"
          },
          {
            en: "Supervised classification",
            es: "Clasificación supervisada",
            de: "Überwachte Klassifikation",
            nl: "Gesuperviseerde classificatie"
          },
          {
            en: "Gene sequence alignment",
            es: "Alineación de secuencias génicas",
            de: "Gensequenz-Alignment",
            nl: "Gensequentie alignering"
          }
        ],
        correct: 0,
        explanation: {
          en: "PCA transforms high-dimensional genomic data into lower-dimensional space while retaining most of the variance, helping visualize population structure, identify outliers, and reduce computational complexity in genomic analyses.",
          es: "PCA transforma datos genómicos de alta dimensionalidad en espacio de menor dimensionalidad mientras retiene la mayor parte de la varianza, ayudando a visualizar estructura poblacional, identificar valores atípicos y reducir complejidad computacional en análisis genómicos.",
          de: "PCA transformiert hochdimensionale genomische Daten in einen niedrigerdimensionalen Raum, während die meiste Varianz beibehalten wird, hilft bei der Visualisierung von Populationsstrukturen, Identifizierung von Ausreißern und Reduzierung rechnerischer Komplexität in genomischen Analysen.",
          nl: "PCA transformeert hoog-dimensionale genomische data naar een lager-dimensionale ruimte terwijl het meeste van de variantie behouden blijft, wat helpt bij het visualiseren van populatiestructuur, identificeren van uitschieters en verminderen van computationele complexiteit in genomische analyses."
        }
      },
      {
        question: {
          en: "In protein-protein interaction networks, what are 'hubs'?",
          es: "En redes de interacción proteína-proteína, ¿qué son los 'centros'?",
          de: "Was sind 'Hubs' in Protein-Protein-Interaktionsnetzwerken?",
          nl: "Wat zijn 'hubs' in eiwit-eiwit interactie netwerken?"
        },
        options: [
          {
            en: "Highly connected proteins with many interaction partners",
            es: "Proteínas altamente conectadas con muchos compañeros de interacción",
            de: "Hochvernetzte Proteine mit vielen Interaktionspartnern",
            nl: "Zeer verbonden eiwitten met veel interactiepartners"
          },
          {
            en: "Isolated proteins with no interactions",
            es: "Proteínas aisladas sin interacciones",
            de: "Isolierte Proteine ohne Interaktionen",
            nl: "Geïsoleerde eiwitten zonder interacties"
          },
          {
            en: "Proteins involved only in metabolism",
            es: "Proteínas involucradas solo en metabolismo",
            de: "Nur am Stoffwechsel beteiligte Proteine",
            nl: "Eiwitten die alleen betrokken zijn bij metabolisme"
          },
          {
            en: "Membrane-bound proteins exclusively",
            es: "Proteínas de membrana exclusivamente",
            de: "Ausschließlich membrangebundene Proteine",
            nl: "Uitsluitend membraangebonden eiwitten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hub proteins are highly connected nodes in protein interaction networks that interact with many other proteins, often playing critical roles in cellular processes and being more likely to be essential genes when disrupted.",
          es: "Las proteínas centro son nodos altamente conectados en redes de interacción proteica que interactúan con muchas otras proteínas, a menudo jugando roles críticos en procesos celulares y siendo más probables de ser genes esenciales cuando se interrumpen.",
          de: "Hub-Proteine sind hochvernetzte Knoten in Proteininteraktionsnetzwerken, die mit vielen anderen Proteinen interagieren, oft kritische Rollen in zellulären Prozessen spielen und eher essenzielle Gene sind, wenn sie gestört werden.",
          nl: "Hub eiwitten zijn zeer verbonden knooppunten in eiwit interactie netwerken die interageren met veel andere eiwitten, vaak kritische rollen spelen in cellulaire processen en meer waarschijnlijk essentiële genen zijn wanneer verstoord."
        }
      },
      {
        question: {
          en: "What is the purpose of motif discovery in computational biology?",
          es: "¿Cuál es el propósito del descubrimiento de motivos en biología computacional?",
          de: "Was ist der Zweck der Motiventdeckung in der Computerbiologie?",
          nl: "Wat is het doel van motief ontdekking in computationele biologie?"
        },
        options: [
          {
            en: "Identify conserved sequence patterns with functional significance",
            es: "Identificar patrones de secuencia conservados con significado funcional",
            de: "Konservierte Sequenzmuster mit funktionaler Bedeutung identifizieren",
            nl: "Geconserveerde sequentiepatronen met functionele betekenis identificeren"
          },
          {
            en: "Calculate molecular weights",
            es: "Calcular pesos moleculares",
            de: "Molekulargewichte berechnen",
            nl: "Moleculaire gewichten berekenen"
          },
          {
            en: "Predict protein stability",
            es: "Predecir estabilidad de proteínas",
            de: "Proteinstabilität vorhersagen",
            nl: "Eiwit stabiliteit voorspellen"
          },
          {
            en: "Design laboratory protocols",
            es: "Diseñar protocolos de laboratorio",
            de: "Laborprotokolle entwerfen",
            nl: "Laboratorium protocollen ontwerpen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Motif discovery algorithms identify short, conserved sequence patterns in DNA, RNA, or protein sequences that often have functional significance such as transcription factor binding sites, regulatory elements, or conserved protein domains.",
          es: "Los algoritmos de descubrimiento de motivos identifican patrones de secuencia cortos y conservados en secuencias de ADN, ARN o proteínas que a menudo tienen significado funcional como sitios de unión de factores de transcripción, elementos regulatorios o dominios de proteínas conservados.",
          de: "Motiventdeckungsalgorithmen identifizieren kurze, konservierte Sequenzmuster in DNA-, RNA- oder Proteinsequenzen, die oft funktionale Bedeutung haben, wie Transkriptionsfaktorbindungsstellen, regulatorische Elemente oder konservierte Proteindomänen.",
          nl: "Motief ontdekkingsalgoritmen identificeren korte, geconserveerde sequentiepatronen in DNA, RNA of eiwitsequenties die vaak functionele betekenis hebben zoals transcriptiefactor bindingsplaatsen, regulatoire elementen of geconserveerde eiwit domeinen."
        }
      },
      {
        question: {
          en: "In genome-wide association studies (GWAS), what does linkage disequilibrium affect?",
          es: "En estudios de asociación de todo el genoma (GWAS), ¿qué afecta el desequilibrio de ligamiento?",
          de: "Was beeinflusst das Kopplungsungleichgewicht in genomweiten Assoziationsstudien (GWAS)?",
          nl: "Wat beïnvloedt linkage disequilibrium in genome-wide association studies (GWAS)?"
        },
        options: [
          {
            en: "Association signals between nearby variants",
            es: "Señales de asociación entre variantes cercanas",
            de: "Assoziationssignale zwischen nahegelegenen Varianten",
            nl: "Associatie signalen tussen nabije varianten"
          },
          {
            en: "Gene expression levels only",
            es: "Solo niveles de expresión génica",
            de: "Nur Genexpressionslevel",
            nl: "Alleen genexpressie niveaus"
          },
          {
            en: "Protein folding patterns",
            es: "Patrones de plegamiento de proteínas",
            de: "Proteinfaltungsmuster",
            nl: "Eiwitvouwing patronen"
          },
          {
            en: "Chromosome number variations",
            es: "Variaciones en el número de cromosomas",
            de: "Chromosomenzahlvariationen",
            nl: "Chromosoom aantal variaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Linkage disequilibrium describes non-random association of alleles at different loci, meaning that variants that are close together on a chromosome tend to be inherited together, affecting which variants show association signals in GWAS.",
          es: "El desequilibrio de ligamiento describe la asociación no aleatoria de alelos en diferentes loci, lo que significa que las variantes que están cerca en un cromosoma tienden a heredarse juntas, afectando qué variantes muestran señales de asociación en GWAS.",
          de: "Kopplungsungleichgewicht beschreibt die nicht-zufällige Assoziation von Allelen an verschiedenen Loci, was bedeutet, dass Varianten, die auf einem Chromosom nahe beieinander liegen, dazu neigen, gemeinsam vererbt zu werden, was beeinflusst, welche Varianten Assoziationssignale in GWAS zeigen.",
          nl: "Linkage disequilibrium beschrijft niet-willekeurige associatie van allelen op verschillende loci, wat betekent dat varianten die dichtbij elkaar op een chromosoom staan geneigd zijn samen geërfd te worden, wat beïnvloedt welke varianten associatie signalen tonen in GWAS."
        }
      },
      {
        question: {
          en: "What is the main goal of metabolic network reconstruction?",
          es: "¿Cuál es el objetivo principal de la reconstrucción de redes metabólicas?",
          de: "Was ist das Hauptziel der metabolischen Netzwerkrekonstruktion?",
          nl: "Wat is het hoofddoel van metabolische netwerk reconstructie?"
        },
        options: [
          {
            en: "Create comprehensive maps of all metabolic reactions in an organism",
            es: "Crear mapas integrales de todas las reacciones metabólicas en un organismo",
            de: "Umfassende Karten aller metabolischen Reaktionen in einem Organismus erstellen",
            nl: "Uitgebreide kaarten maken van alle metabolische reacties in een organisme"
          },
          {
            en: "Measure enzyme kinetics only",
            es: "Medir solo cinética enzimática",
            de: "Nur Enzymkinetik messen",
            nl: "Alleen enzymkinetiek meten"
          },
          {
            en: "Design new metabolic pathways",
            es: "Diseñar nuevas vías metabólicas",
            de: "Neue metabolische Pathways designen",
            nl: "Nieuwe metabolische pathways ontwerpen"
          },
          {
            en: "Predict protein structures",
            es: "Predecir estructuras de proteínas",
            de: "Proteinstrukturen vorhersagen",
            nl: "Eiwitstructuren voorspellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Metabolic network reconstruction involves systematically cataloging all known metabolic reactions, enzymes, and metabolites in an organism to create genome-scale models that can predict cellular behavior and guide metabolic engineering.",
          es: "La reconstrucción de redes metabólicas involucra catalogar sistemáticamente todas las reacciones metabólicas, enzimas y metabolitos conocidos en un organismo para crear modelos a escala genómica que pueden predecir el comportamiento celular y guiar la ingeniería metabólica.",
          de: "Die metabolische Netzwerkrekonstruktion beinhaltet die systematische Katalogisierung aller bekannten metabolischen Reaktionen, Enzyme und Metaboliten in einem Organismus, um genomweite Modelle zu erstellen, die zelluläres Verhalten vorhersagen und metabolisches Engineering leiten können.",
          nl: "Metabolische netwerk reconstructie houdt systematisch catalogiseren in van alle bekende metabolische reacties, enzymen en metabolieten in een organisme om genoom-schaal modellen te creëren die cellulair gedrag kunnen voorspellen en metabolische engineering kunnen begeleiden."
        }
      },
      {
        question: {
          en: "In codon usage bias analysis, what does the effective number of codons (ENC) measure?",
          es: "En análisis de sesgo de uso de codones, ¿qué mide el número efectivo de codones (ENC)?",
          de: "Was misst die effektive Anzahl von Codons (ENC) in der Codon-Usage-Bias-Analyse?",
          nl: "Wat meet het effectieve aantal codons (ENC) in codon gebruik bias analyse?"
        },
        options: [
          {
            en: "Degree of codon usage deviation from uniform distribution",
            es: "Grado de desviación del uso de codones de la distribución uniforme",
            de: "Grad der Abweichung der Codon-Nutzung von der gleichmäßigen Verteilung",
            nl: "Mate van codon gebruik afwijking van uniforme verdeling"
          },
          {
            en: "Total number of codons in genome",
            es: "Número total de codones en el genoma",
            de: "Gesamtanzahl der Codons im Genom",
            nl: "Totaal aantal codons in genoom"
          },
          {
            en: "Translation efficiency rate",
            es: "Tasa de eficiencia de traducción",
            de: "Translationseffizienzrate",
            nl: "Translatie efficiëntie snelheid"
          },
          {
            en: "Gene expression correlation",
            es: "Correlación de expresión génica",
            de: "Genexpressionskorrelation",
            nl: "Genexpressie correlatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "ENC quantifies how much a gene's codon usage deviates from uniform usage of all synonymous codons, with values ranging from 20 (maximum bias) to 61 (uniform usage), helping identify genes under different selective pressures.",
          es: "ENC cuantifica cuánto se desvía el uso de codones de un gen del uso uniforme de todos los codones sinónimos, con valores que van de 20 (sesgo máximo) a 61 (uso uniforme), ayudando a identificar genes bajo diferentes presiones selectivas.",
          de: "ENC quantifiziert, wie stark die Codon-Nutzung eines Gens von der gleichmäßigen Nutzung aller synonymen Codons abweicht, mit Werten von 20 (maximale Verzerrung) bis 61 (gleichmäßige Nutzung), was hilft, Gene unter verschiedenen Selektionsdrücken zu identifizieren.",
          nl: "ENC kwantificeert hoeveel het codon gebruik van een gen afwijkt van uniform gebruik van alle synonieuze codons, met waarden van 20 (maximale bias) tot 61 (uniform gebruik), wat helpt genen te identificeren onder verschillende selectieve drukken."
        }
      },
      {
        question: {
          en: "What is the primary application of machine learning in drug repositioning?",
          es: "¿Cuál es la aplicación principal del aprendizaje automático en el reposicionamiento de fármacos?",
          de: "Was ist die Hauptanwendung des maschinellen Lernens bei der Arzneimittel-Repositionierung?",
          nl: "Wat is de primaire toepassing van machine learning in medicijn herpositionering?"
        },
        options: [
          {
            en: "Predict new therapeutic uses for existing drugs",
            es: "Predecir nuevos usos terapéuticos para fármacos existentes",
            de: "Neue therapeutische Anwendungen für bestehende Medikamente vorhersagen",
            nl: "Nieuwe therapeutische toepassingen voorspellen voor bestaande medicijnen"
          },
          {
            en: "Synthesize novel chemical compounds",
            es: "Sintetizar nuevos compuestos químicos",
            de: "Neue chemische Verbindungen synthetisieren",
            nl: "Nieuwe chemische verbindingen synthetiseren"
          },
          {
            en: "Determine drug manufacturing costs",
            es: "Determinar costos de fabricación de fármacos",
            de: "Arzneimittelherstellungskosten bestimmen",
            nl: "Medicijn productiekosten bepalen"
          },
          {
            en: "Design clinical trial protocols",
            es: "Diseñar protocolos de ensayos clínicos",
            de: "Klinische Studienprotokolle entwerfen",
            nl: "Klinische studie protocollen ontwerpen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Machine learning algorithms analyze patterns in drug-target interactions, disease similarities, and molecular profiles to identify existing drugs that might be effective for treating different diseases than originally intended, accelerating drug discovery.",
          es: "Los algoritmos de aprendizaje automático analizan patrones en interacciones fármaco-objetivo, similitudes de enfermedades y perfiles moleculares para identificar fármacos existentes que podrían ser efectivos para tratar diferentes enfermedades de las originalmente previstas, acelerando el descubrimiento de fármacos.",
          de: "Maschinelle Lernalgorithmen analysieren Muster in Arzneimittel-Ziel-Interaktionen, Krankheitsähnlichkeiten und molekularen Profilen, um bestehende Medikamente zu identifizieren, die für die Behandlung anderer Krankheiten als ursprünglich beabsichtigt wirksam sein könnten, wodurch die Arzneimittelentdeckung beschleunigt wird.",
          nl: "Machine learning algoritmen analyseren patronen in medicijn-doel interacties, ziekte overeenkomsten en moleculaire profielen om bestaande medicijnen te identificeren die effectief zouden kunnen zijn voor het behandelen van verschillende ziekten dan oorspronkelijk bedoeld, wat medicijnontdekking versnelt."
        }
      },
      {
        question: {
          en: "In structural bioinformatics, what does the Ramachandran plot analyze?",
          es: "En bioinformática estructural, ¿qué analiza el gráfico de Ramachandran?",
          de: "Was analysiert das Ramachandran-Diagramm in der strukturellen Bioinformatik?",
          nl: "Wat analyseert de Ramachandran plot in structurele bioinformatica?"
        },
        options: [
          {
            en: "Backbone dihedral angles in protein structures",
            es: "Ángulos diedros de la cadena principal en estructuras de proteínas",
            de: "Rückgrat-Diederwinkel in Proteinstrukturen",
            nl: "Ruggengraat dihedrale hoeken in eiwitstructuren"
          },
          {
            en: "Side chain interactions only",
            es: "Solo interacciones de cadenas laterales",
            de: "Nur Seitenketten-Interaktionen",
            nl: "Alleen zijketen interacties"
          },
          {
            en: "Hydrogen bond networks",
            es: "Redes de enlaces de hidrógeno",
            de: "Wasserstoffbrückennetzwerke",
            nl: "Waterstofbrug netwerken"
          },
          {
            en: "Disulfide bond patterns",
            es: "Patrones de enlaces disulfuro",
            de: "Disulfidbrückenmuster",
            nl: "Disulfide brug patronen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Ramachandran plots visualize the distribution of phi and psi backbone dihedral angles in protein structures, helping assess structural quality and identify regions with unusual conformations that may indicate errors or interesting structural features.",
          es: "Los gráficos de Ramachandran visualizan la distribución de ángulos diedros phi y psi de la cadena principal en estructuras de proteínas, ayudando a evaluar la calidad estructural e identificar regiones con conformaciones inusuales que pueden indicar errores o características estructurales interesantes.",
          de: "Ramachandran-Diagramme visualisieren die Verteilung von Phi- und Psi-Rückgrat-Diederwinkeln in Proteinstrukturen, helfen bei der Bewertung struktureller Qualität und identifizieren Regionen mit ungewöhnlichen Konformationen, die Fehler oder interessante strukturelle Merkmale anzeigen können.",
          nl: "Ramachandran plots visualiseren de verdeling van phi en psi ruggengraat dihedrale hoeken in eiwitstructuren, wat helpt bij het beoordelen van structurele kwaliteit en het identificeren van regio's met ongewone conformaties die fouten of interessante structurele kenmerken kunnen aangeven."
        }
      },
      {
        question: {
          en: "What is the main advantage of ensemble methods in computational biology?",
          es: "¿Cuál es la principal ventaja de los métodos de conjunto en biología computacional?",
          de: "Was ist der Hauptvorteil von Ensemble-Methoden in der Computerbiologie?",
          nl: "Wat is het hoofdvoordeel van ensemble methoden in computationele biologie?"
        },
        options: [
          {
            en: "Improved prediction accuracy by combining multiple models",
            es: "Precisión de predicción mejorada combinando múltiples modelos",
            de: "Verbesserte Vorhersagegenauigkeit durch Kombination mehrerer Modelle",
            nl: "Verbeterde voorspelling nauwkeurigheid door meerdere modellen te combineren"
          },
          {
            en: "Reduced computational requirements",
            es: "Requisitos computacionales reducidos",
            de: "Reduzierte rechnerische Anforderungen",
            nl: "Verminderde computationele vereisten"
          },
          {
            en: "Simplified model interpretation",
            es: "Interpretación de modelo simplificada",
            de: "Vereinfachte Modellinterpretation",
            nl: "Vereenvoudigde model interpretatie"
          },
          {
            en: "Faster training times",
            es: "Tiempos de entrenamiento más rápidos",
            de: "Schnellere Trainingszeiten",
            nl: "Snellere trainingstijden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble methods combine predictions from multiple models to achieve better performance than any single model alone, reducing overfitting and improving generalization in complex biological prediction tasks like protein function prediction or disease classification.",
          es: "Los métodos de conjunto combinan predicciones de múltiples modelos para lograr mejor rendimiento que cualquier modelo individual, reduciendo el sobreajuste y mejorando la generalización en tareas de predicción biológica complejas como predicción de función de proteínas o clasificación de enfermedades.",
          de: "Ensemble-Methoden kombinieren Vorhersagen von mehreren Modellen, um bessere Leistung als jedes einzelne Modell allein zu erreichen, reduzieren Überanpassung und verbessern die Generalisierung in komplexen biologischen Vorhersageaufgaben wie Proteinfunktionsvorhersage oder Krankheitsklassifikation.",
          nl: "Ensemble methoden combineren voorspellingen van meerdere modellen om betere prestaties te bereiken dan elk enkel model alleen, verminderen overfitting en verbeteren generalisatie in complexe biologische voorspellingstaken zoals eiwitfunctie voorspelling of ziekte classificatie."
        }
      },
      {
        question: {
          en: "In epigenomics, what computational challenge does DNA methylation analysis face?",
          es: "En epigenómica, ¿qué desafío computacional enfrenta el análisis de metilación del ADN?",
          de: "Welche rechnerische Herausforderung stellt die DNA-Methylierungsanalyse in der Epigenomik dar?",
          nl: "Welke computationele uitdaging staat DNA-methylatie analyse tegenover in epigenomics?"
        },
        options: [
          {
            en: "Distinguishing methylated from unmethylated cytosines",
            es: "Distinguir citosinas metiladas de no metiladas",
            de: "Methylierte von unmethylierten Cytosinen unterscheiden",
            nl: "Gemethyleerde van ongemethyleerde cytosines onderscheiden"
          },
          {
            en: "Measuring gene expression levels",
            es: "Medir niveles de expresión génica",
            de: "Genexpressionslevel messen",
            nl: "Genexpressie niveaus meten"
          },
          {
            en: "Predicting protein structures",
            es: "Predecir estructuras de proteínas",
            de: "Proteinstrukturen vorhersagen",
            nl: "Eiwitstructuren voorspellen"
          },
          {
            en: "Identifying coding sequences",
            es: "Identificar secuencias codificantes",
            de: "Codierende Sequenzen identifizieren",
            nl: "Coderende sequenties identificeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA methylation analysis requires specialized algorithms and sequencing approaches to accurately detect and quantify methylation status at individual cytosine bases, as standard sequencing cannot distinguish methylated cytosines from unmethylated ones.",
          es: "El análisis de metilación del ADN requiere algoritmos especializados y enfoques de secuenciación para detectar y cuantificar con precisión el estado de metilación en bases de citosina individuales, ya que la secuenciación estándar no puede distinguir citosinas metiladas de no metiladas.",
          de: "DNA-Methylierungsanalyse erfordert spezialisierte Algorithmen und Sequenzierungsansätze, um den Methylierungsstatus an einzelnen Cytosin-Basen genau zu detektieren und zu quantifizieren, da Standardsequenzierung methylierte Cytosine nicht von unmethylierten unterscheiden kann.",
          nl: "DNA-methylatie analyse vereist gespecialiseerde algoritmen en sequencing benaderingen om methylatie status op individuele cytosine bases accuraat te detecteren en te kwantificeren, omdat standaard sequencing gemethyleerde cytosines niet kan onderscheiden van ongemethyleerde."
        }
      },
      {
        question: {
          en: "What is the primary goal of synthetic biology modeling?",
          es: "¿Cuál es el objetivo principal del modelado de biología sintética?",
          de: "Was ist das Hauptziel der synthetischen Biologiemodellierung?",
          nl: "Wat is het hoofddoel van synthetische biologie modellering?"
        },
        options: [
          {
            en: "Design and predict behavior of engineered biological systems",
            es: "Diseñar y predecir el comportamiento de sistemas biológicos diseñados",
            de: "Verhalten konstruierter biologischer Systeme entwerfen und vorhersagen",
            nl: "Gedrag van ontworpen biologische systemen ontwerpen en voorspellen"
          },
          {
            en: "Study natural evolutionary processes",
            es: "Estudiar procesos evolutivos naturales",
            de: "Natürliche evolutionäre Prozesse studieren",
            nl: "Natuurlijke evolutionaire processen bestuderen"
          },
          {
            en: "Analyze existing metabolic pathways",
            es: "Analizar vías metabólicas existentes",
            de: "Bestehende metabolische Pathways analysieren",
            nl: "Bestaande metabolische pathways analyseren"
          },
          {
            en: "Preserve biodiversity",
            es: "Preservar la biodiversidad",
            de: "Biodiversität bewahren",
            nl: "Biodiversiteit behouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Synthetic biology modeling uses computational approaches to design novel biological circuits, predict their behavior, optimize performance, and guide experimental implementation of engineered biological systems with desired functions.",
          es: "El modelado de biología sintética usa enfoques computacionales para diseñar circuitos biológicos novedosos, predecir su comportamiento, optimizar el rendimiento y guiar la implementación experimental de sistemas biológicos diseñados con funciones deseadas.",
          de: "Die synthetische Biologiemodellierung verwendet rechnerische Ansätze, um neuartige biologische Schaltkreise zu entwerfen, ihr Verhalten vorherzusagen, die Leistung zu optimieren und die experimentelle Implementierung konstruierter biologischer Systeme mit gewünschten Funktionen zu leiten.",
          nl: "Synthetische biologie modellering gebruikt computationele benaderingen om nieuwe biologische circuits te ontwerpen, hun gedrag te voorspellen, prestaties te optimaliseren en experimentele implementatie van ontworpen biologische systemen met gewenste functies te begeleiden."
        }
      },
      {
        question: {
          en: "In phylodynamics, what does the effective population size (Ne) represent?",
          es: "En filodinámicas, ¿qué representa el tamaño efectivo de población (Ne)?",
          de: "Was repräsentiert die effektive Populationsgröße (Ne) in der Phylodynamik?",
          nl: "Wat vertegenwoordigt de effectieve populatiegrootte (Ne) in phylodynamics?"
        },
        options: [
          {
            en: "Number of individuals contributing to genetic diversity",
            es: "Número de individuos que contribuyen a la diversidad genética",
            de: "Anzahl der Individuen, die zur genetischen Vielfalt beitragen",
            nl: "Aantal individuen die bijdragen aan genetische diversiteit"
          },
          {
            en: "Total census population count",
            es: "Recuento total de la población censal",
            de: "Gesamte Volkszählungsbevölkerung",
            nl: "Totale volkstelling populatie aantal"
          },
          {
            en: "Carrying capacity of environment",
            es: "Capacidad de carga del ambiente",
            de: "Tragfähigkeit der Umwelt",
            nl: "Draagkracht van omgeving"
          },
          {
            en: "Migration rate between populations",
            es: "Tasa de migración entre poblaciones",
            de: "Migrationsrate zwischen Populationen",
            nl: "Migratie snelheid tussen populaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Effective population size represents the number of individuals in an idealized population that would experience the same amount of genetic drift as the observed population, often smaller than census size due to factors like non-random mating and population bottlenecks.",
          es: "El tamaño efectivo de población representa el número de individuos en una población idealizada que experimentaría la misma cantidad de deriva genética que la población observada, a menudo menor que el tamaño censal debido a factores como apareamiento no aleatorio y cuellos de botella poblacionales.",
          de: "Die effektive Populationsgröße repräsentiert die Anzahl der Individuen in einer idealisierten Population, die die gleiche Menge an genetischer Drift erfahren würde wie die beobachtete Population, oft kleiner als die Zensuspopulation aufgrund von Faktoren wie nicht-zufälliger Paarung und Populationsengpässen.",
          nl: "Effectieve populatiegrootte vertegenwoordigt het aantal individuen in een geïdealiseerde populatie die dezelfde hoeveelheid genetische drift zou ervaren als de waargenomen populatie, vaak kleiner dan volkstelling grootte door factoren zoals niet-willekeurige paring en populatie knelpunten."
        }
      },
      {
        question: {
          en: "What is the main challenge in multi-omics data integration?",
          es: "¿Cuál es el principal desafío en la integración de datos multi-ómicos?",
          de: "Was ist die Hauptherausforderung bei der Multi-Omics-Datenintegration?",
          nl: "Wat is de hoofduitdaging in multi-omics data integratie?"
        },
        options: [
          {
            en: "Combining heterogeneous data types with different scales and structures",
            es: "Combinar tipos de datos heterogéneos con diferentes escalas y estructuras",
            de: "Heterogene Datentypen mit verschiedenen Skalen und Strukturen kombinieren",
            nl: "Heterogene datatypes met verschillende schalen en structuren combineren"
          },
          {
            en: "Storing large amounts of data",
            es: "Almacenar grandes cantidades de datos",
            de: "Große Datenmengen speichern",
            nl: "Grote hoeveelheden data opslaan"
          },
          {
            en: "Visualizing single datasets",
            es: "Visualizar conjuntos de datos únicos",
            de: "Einzelne Datensätze visualisieren",
            nl: "Enkele datasets visualiseren"
          },
          {
            en: "Performing basic statistical tests",
            es: "Realizar pruebas estadísticas básicas",
            de: "Grundlegende statistische Tests durchführen",
            nl: "Basis statistische tests uitvoeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Multi-omics integration faces the challenge of combining different types of molecular data (genomics, transcriptomics, proteomics, metabolomics) that have different data structures, scales, noise levels, and biological relationships, requiring sophisticated computational approaches.",
          es: "La integración multi-ómica enfrenta el desafío de combinar diferentes tipos de datos moleculares (genómica, transcriptómica, proteómica, metabolómica) que tienen diferentes estructuras de datos, escalas, niveles de ruido y relaciones biológicas, requiriendo enfoques computacionales sofisticados.",
          de: "Multi-Omics-Integration steht vor der Herausforderung, verschiedene Arten molekularer Daten (Genomik, Transkriptomik, Proteomik, Metabolomik) zu kombinieren, die unterschiedliche Datenstrukturen, Skalen, Rauschpegel und biologische Beziehungen haben und anspruchsvolle rechnerische Ansätze erfordern.",
          nl: "Multi-omics integratie staat voor de uitdaging verschillende types moleculaire data (genomics, transcriptomics, proteomics, metabolomics) te combineren die verschillende datastructuren, schalen, ruis niveaus en biologische relaties hebben, wat geavanceerde computationele benaderingen vereist."
        }
      },
      {
        question: {
          en: "In network pharmacology, what is polypharmacology?",
          es: "En farmacología de redes, ¿qué es la polifarmacología?",
          de: "Was ist Polypharmakologie in der Netzwerkpharmakologie?",
          nl: "Wat is polyfarmacologie in netwerkfarmacologie?"
        },
        options: [
          {
            en: "Single drugs targeting multiple molecular targets",
            es: "Fármacos únicos dirigidos a múltiples objetivos moleculares",
            de: "Einzelne Medikamente, die mehrere molekulare Ziele angreifen",
            nl: "Enkele medicijnen die meerdere moleculaire doelen targeten"
          },
          {
            en: "Multiple drugs for single diseases",
            es: "Múltiples fármacos para enfermedades únicas",
            de: "Mehrere Medikamente für einzelne Krankheiten",
            nl: "Meerdere medicijnen voor enkele ziekten"
          },
          {
            en: "Drug-drug interaction studies",
            es: "Estudios de interacción fármaco-fármaco",
            de: "Arzneimittel-Arzneimittel-Interaktionsstudien",
            nl: "Medicijn-medicijn interactie studies"
          },
          {
            en: "Generic drug development",
            es: "Desarrollo de fármacos genéricos",
            de: "Generische Arzneimittelentwicklung",
            nl: "Generieke medicijn ontwikkeling"
          }
        ],
        correct: 0,
        explanation: {
          en: "Polypharmacology refers to the concept that a single drug can interact with multiple molecular targets, which can lead to both therapeutic benefits and adverse effects, requiring network-based approaches to understand these complex interactions.",
          es: "La polifarmacología se refiere al concepto de que un solo fármaco puede interactuar con múltiples objetivos moleculares, lo que puede llevar a beneficios terapéuticos y efectos adversos, requiriendo enfoques basados en redes para entender estas interacciones complejas.",
          de: "Polypharmakologie bezieht sich auf das Konzept, dass ein einzelnes Medikament mit mehreren molekularen Zielen interagieren kann, was sowohl zu therapeutischen Vorteilen als auch zu unerwünschten Wirkungen führen kann und netzwerkbasierte Ansätze zum Verständnis dieser komplexen Interaktionen erfordert.",
          nl: "Polyfarmacologie verwijst naar het concept dat een enkel medicijn kan interageren met meerdere moleculaire doelen, wat kan leiden tot zowel therapeutische voordelen als bijwerkingen, wat netwerkgebaseerde benaderingen vereist om deze complexe interacties te begrijpen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/molecular-biology', level8);
  }
})();
