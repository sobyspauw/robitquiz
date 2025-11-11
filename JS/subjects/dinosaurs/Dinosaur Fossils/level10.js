// Dinosaur Fossils Quiz - Level 10: Very Advanced/Specialist Knowledge
(function() {
  const level10 = {
    name: {
      en: "Dinosaur Fossils Level 10",
      es: "Fosiles de Dinosaurios Nivel 10",
      de: "Dinosaurier Fossilien Stufe 10",
      nl: "Dino Fossielen Level 10"
    },
    questions: [
      {
        question: {
          en: "How do Bayesian phylogenetic inference methods address temporal inconsistencies in morphological character evolution?",
          es: "¿Cómo abordan los métodos de inferencia filogenética bayesiana las inconsistencias temporales en la evolución de caracteres morfológicos?",
          de: "Wie gehen bayesianische phylogenetische Inferenzmethoden mit zeitlichen Inkonsistenzen in der morphologischen Charakterevolution um?",
          nl: "Hoe pakken Bayesiaanse fylogenetische inferentiemethoden temporele inconsistenties in morfologische karakterevolutie aan?"
        },
        options: [
          { en: "Through tip-dating models incorporating stratigraphic uncertainty and morphological clock calibration", es: "A través de modelos de datación de puntas incorporando incertidumbre estratigráfica y calibración de reloj morfológico", de: "Durch Tip-Dating-Modelle mit Einbeziehung stratigraphischer Unsicherheit und morphologischer Uhren-Kalibrierung", nl: "Door tip-dating modellen die stratigrafische onzekerheid en morfologische klokkaalibratie incorporeren" },
          { en: "By ignoring temporal data entirely", es: "Ignorando completamente los datos temporales", de: "Durch vollständige Ignorierung temporaler Daten", nl: "Door temporale data volledig te negeren" },
          { en: "Using only molecular clock estimates", es: "Usando solo estimaciones de reloj molecular", de: "Nur mit molekularen Uhren-Schätzungen", nl: "Alleen moleculaire klokschattingen gebruikend" },
          { en: "Through manual adjustment of branch lengths", es: "Mediante ajuste manual de longitudes de ramas", de: "Durch manuelle Anpassung der Astlängen", nl: "Door handmatige aanpassing van taklengte" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced Bayesian methods use tip-dating approaches that simultaneously estimate phylogeny and divergence times while incorporating stratigraphic age uncertainties and allowing for variable rates of morphological evolution across different character types and lineages.",
          es: "Los métodos bayesianos avanzados usan enfoques de datación de puntas que simultáneamente estiman filogenia y tiempos de divergencia mientras incorporan incertidumbres de edad estratigráfica y permiten tasas variables de evolución morfológica a través de diferentes tipos de caracteres y linajes.",
          de: "Fortgeschrittene bayesianische Methoden verwenden Tip-Dating-Ansätze, die gleichzeitig Phylogenie und Divergenzzeiten schätzen, während sie stratigraphische Altersunsicherheiten einbeziehen und variable Raten morphologischer Evolution über verschiedene Charaktertypen und Linien hinweg ermöglichen.",
          nl: "Geavanceerde Bayesiaanse methoden gebruiken tip-dating benaderingen die gelijktijdig fylogenenie en divergentietijden schatten terwijl ze stratigrafische leeftijdsoncertainties incorporeren en variabele snelheden van morfologische evolutie over verschillende karaktertypen en lijnen toestaan."
        }
      },
      {
        question: {
          en: "What theoretical framework underlies the application of geometric morphometric shape spaces to dinosaur systematics?",
          es: "¿Qué marco teórico subyace la aplicación de espacios de forma morfométrica geométrica a la sistemática de dinosaurios?",
          de: "Welcher theoretische Rahmen liegt der Anwendung geometrischer morphometrischer Formräume auf die Dinosaurier-Systematik zugrunde?",
          nl: "Welk theoretisch raamwerk ligt ten grondslag aan de toepassing van geometrische morfometrische vormruimtes op dinosaurussystematiek?"
        },
        options: [
          { en: "Riemannian geometry of shape manifolds and statistical shape analysis", es: "Geometría riemanniana de variedades de forma y análisis estadístico de forma", de: "Riemannsche Geometrie von Formmannigfaltigkeiten und statistische Formanalyse", nl: "Riemann geometrie van vormmanifolds en statistische vormanalyse" },
          { en: "Simple Euclidean distance measurements", es: "Mediciones simples de distancia euclidiana", de: "Einfache euklidische Distanzmessungen", nl: "Eenvoudige Euclidische afstandsmetingen" },
          { en: "Basic linear regression analysis", es: "Análisis básico de regresión lineal", de: "Grundlegende lineare Regressionsanalyse", nl: "Basis lineaire regressieanalyse" },
          { en: "Traditional qualitative morphology only", es: "Solo morfología cualitativa tradicional", de: "Nur traditionelle qualitative Morphologie", nl: "Alleen traditionele kwalitatieve morfologie" }
        ],
        correct: 0,
        explanation: {
          en: "Geometric morphometrics operates in non-Euclidean shape spaces (Kendall shape spaces) using differential geometry principles, where shape variation is analyzed on curved manifolds, requiring sophisticated statistical methods for proper inference about evolutionary trajectories.",
          es: "La morfometría geométrica opera en espacios de forma no euclidiana (espacios de forma de Kendall) usando principios de geometría diferencial, donde la variación de forma se analiza en variedades curvas, requiriendo métodos estadísticos sofisticados para inferencia apropiada sobre trayectorias evolutivas.",
          de: "Geometrische Morphometrie operiert in nicht-euklidischen Formräumen (Kendall-Formräume) unter Verwendung differentialgeometrischer Prinzipien, wo Formvariation auf gekrümmten Mannigfaltigkeiten analysiert wird, was ausgeklügelte statistische Methoden für angemessene Inferenz über evolutionäre Trajektorien erfordert.",
          nl: "Geometrische morfometrie opereert in niet-Euclidische vormruimtes (Kendall vormruimtes) gebruikmakend van differentiaalgeometrie-principes, waar vormvariatie wordt geanalyseerd op gekromde manifolds, wat geavanceerde statistische methoden vereist voor juiste inferentie over evolutionaire trajecten."
        }
      },
      {
        question: {
          en: "How do stochastic differential equations model continuous trait evolution in deep time phylogenetic analysis?",
          es: "¿Cómo modelan las ecuaciones diferenciales estocásticas la evolución continua de rasgos en análisis filogenético de tiempo profundo?",
          de: "Wie modellieren stochastische Differentialgleichungen die kontinuierliche Merkmalsentwicklung in tiefzeitlichen phylogenetischen Analysen?",
          nl: "Hoe modelleren stochastische differentiaalvergelijkingen continue eigenschap evolutie in deep time fylogenetische analyse?"
        },
        options: [
          { en: "Through Ornstein-Uhlenbeck processes capturing adaptive optima and constraint parameters", es: "A través de procesos de Ornstein-Uhlenbeck capturando óptimos adaptativos y parámetros de restricción", de: "Durch Ornstein-Uhlenbeck-Prozesse, die adaptive Optima und Restriktionsparameter erfassen", nl: "Door Ornstein-Uhlenbeck processen die adaptieve optima en beperking parameters vastleggen" },
          { en: "Using simple linear growth models", es: "Usando modelos simples de crecimiento lineal", de: "Mit einfachen linearen Wachstumsmodellen", nl: "Gebruikmakend van eenvoudige lineaire groeimodellen" },
          { en: "Through deterministic evolutionary pathways only", es: "Solo a través de vías evolutivas determinísticas", de: "Nur durch deterministische evolutionäre Pfade", nl: "Alleen door deterministische evolutionaire paden" },
          { en: "By assuming constant evolutionary rates", es: "Asumiendo tasas evolutivas constantes", de: "Durch Annahme konstanter Evolutionsraten", nl: "Door constante evolutionaire snelheden aan te nemen" }
        ],
        correct: 0,
        explanation: {
          en: "Ornstein-Uhlenbeck models incorporate both stochastic drift and deterministic forces toward adaptive optima, allowing inference of selection strength, trait optima, and phylogenetic inertia while accounting for measurement error and incomplete fossil sampling.",
          es: "Los modelos de Ornstein-Uhlenbeck incorporan tanto deriva estocástica como fuerzas determinísticas hacia óptimos adaptativos, permitiendo inferencia de fuerza de selección, óptimos de rasgo e inercia filogenética mientras consideran error de medición y muestreo fósil incompleto.",
          de: "Ornstein-Uhlenbeck-Modelle integrieren sowohl stochastische Drift als auch deterministische Kräfte zu adaptiven Optima hin und ermöglichen Inferenz der Selektionsstärke, Merkmalsoptima und phylogenetischer Trägheit unter Berücksichtigung von Messfehlern und unvollständiger Fossil-Stichprobennahme.",
          nl: "Ornstein-Uhlenbeck modellen incorporeren zowel stochastische drift als deterministische krachten richting adaptieve optima, wat inferentie van selectiesterkte, eigenschap optima en fylogenetische traagheid mogelijk maakt terwijl rekening wordt gehouden met meetfouten en onvolledige fossiele bemonstering."
        }
      },
      {
        question: {
          en: "What computational challenges arise in maximum likelihood estimation for large-scale morphological phylogenetic matrices?",
          es: "¿Qué desafíos computacionales surgen en la estimación de máxima verosimilitud para matrices filogenéticas morfológicas a gran escala?",
          de: "Welche rechnerischen Herausforderungen entstehen bei der Maximum-Likelihood-Schätzung für großskalige morphologische phylogenetische Matrizen?",
          nl: "Welke computationele uitdagingen ontstaan bij maximum likelihood schatting voor grootschalige morfologische fylogenetische matrices?"
        },
        options: [
          { en: "Computational complexity scaling and parameter space dimensionality with missing data imputation", es: "Escalamiento de complejidad computacional y dimensionalidad del espacio de parámetros con imputación de datos faltantes", de: "Skalierung der rechnerischen Komplexität und Parameterraum-Dimensionalität mit fehlender Datenimputation", nl: "Computationele complexiteitsschaling en parameterruimte-dimensionaliteit met ontbrekende data-imputatie" },
          { en: "Simple matrix multiplication only", es: "Solo multiplicación simple de matrices", de: "Nur einfache Matrixmultiplikation", nl: "Alleen eenvoudige matrixvermenigvuldiging" },
          { en: "Linear time complexity algorithms", es: "Algoritmos de complejidad de tiempo lineal", de: "Algorithmen mit linearer Zeitkomplexität", nl: "Lineaire tijdcomplexiteit algoritmen" },
          { en: "No computational limitations exist", es: "No existen limitaciones computacionales", de: "Es bestehen keine rechnerischen Einschränkungen", nl: "Er bestaan geen computationele beperkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Large morphological matrices create exponentially scaling likelihood calculations, requiring advanced algorithms for handling high-dimensional parameter spaces, missing data patterns, and rate heterogeneity while maintaining computational tractability through approximation methods.",
          es: "Las matrices morfológicas grandes crean cálculos de verosimilitud que escalan exponencialmente, requiriendo algoritmos avanzados para manejar espacios de parámetros de alta dimensión, patrones de datos faltantes y heterogeneidad de tasas mientras mantienen tratabilidad computacional a través de métodos de aproximación.",
          de: "Große morphologische Matrizen erzeugen exponentiell skalierende Likelihood-Berechnungen, die fortgeschrittene Algorithmen für hochdimensionale Parameterräume, fehlende Datenmuster und Ratenheterogenität erfordern, während die rechnerische Handhabbarkeit durch Approximationsmethoden aufrechterhalten wird.",
          nl: "Grote morfologische matrices creëren exponentieel schakende likelihood-berekeningen, wat geavanceerde algoritmen vereist voor het hanteren van hoog-dimensionale parameterruimtes, ontbrekende datapatronen en snelheidsheterogeniteit terwijl computationele hanteerbaarheid wordt behouden door approximatiemethoden."
        }
      },
      {
        question: {
          en: "How do hidden Markov models address rate heterogeneity in morphological character evolution across deep phylogenetic time?",
          es: "¿Cómo abordan los modelos ocultos de Markov la heterogeneidad de tasas en la evolución de caracteres morfológicos a través del tiempo filogenético profundo?",
          de: "Wie gehen versteckte Markov-Modelle mit Ratenheterogenität in der morphologischen Charakterevolution über tiefe phylogenetische Zeiten um?",
          nl: "Hoe pakken verborgen Markov-modellen snelheidsheterogeniteit aan in morfologische karakterevolutie over diepe fylogenetische tijd?"
        },
        options: [
          { en: "Through discrete rate categories with gamma-distributed variation and invariant sites", es: "A través de categorías discretas de tasas con variación distribuida gamma y sitios invariantes", de: "Durch diskrete Ratenkategorien mit gamma-verteilter Variation und invarianten Stellen", nl: "Door discrete snelheidscategorieën met gamma-verdeelde variatie en invariante sites" },
          { en: "By assuming uniform rates across all characters", es: "Asumiendo tasas uniformes a través de todos los caracteres", de: "Durch Annahme einheitlicher Raten über alle Charaktere", nl: "Door uniforme snelheden over alle karakters aan te nemen" },
          { en: "Using only binary character states", es: "Usando solo estados de carácter binario", de: "Nur mit binären Charakterzuständen", nl: "Alleen binaire karaktertoestanden gebruikend" },
          { en: "Through manual rate assignment", es: "Mediante asignación manual de tasas", de: "Durch manuelle Ratenzuteilung", nl: "Door handmatige snelheidstoewijzing" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden Markov models partition morphological sites into discrete rate classes following gamma distributions, accounting for among-site rate variation while allowing for invariant character positions, essential for modeling evolutionary processes over geological timescales.",
          es: "Los modelos ocultos de Markov particionan sitios morfológicos en clases discretas de tasas siguiendo distribuciones gamma, considerando variación de tasas entre sitios mientras permiten posiciones de carácter invariantes, esencial para modelar procesos evolutivos sobre escalas de tiempo geológicas.",
          de: "Versteckte Markov-Modelle partitionieren morphologische Stellen in diskrete Ratenklassen nach Gamma-Verteilungen, berücksichtigen Ratenvariation zwischen Stellen und erlauben invariante Charakterpositionen, wesentlich für die Modellierung evolutionärer Prozesse über geologische Zeitskalen.",
          nl: "Verborgen Markov-modellen verdelen morfologische sites in discrete snelheidsklassen volgens gamma-verdelingen, waarbij rekening wordt gehouden met snelheidsvariatie tussen sites terwijl invariante karakterposities mogelijk blijven, essentieel voor het modelleren van evolutionaire processen over geologische tijdschalen."
        }
      },
      {
        question: {
          en: "What statistical frameworks address the 'Lewis Mk bias' in morphological phylogenetic inference?",
          es: "¿Qué marcos estadísticos abordan el 'sesgo Mk de Lewis' en la inferencia filogenética morfológica?",
          de: "Welche statistischen Rahmen adressieren den 'Lewis Mk-Bias' in der morphologischen phylogenetischen Inferenz?",
          nl: "Welke statistische raamwerken pakken de 'Lewis Mk bias' aan in morfologische fylogenetische inferentie?"
        },
        options: [
          { en: "Ascertainment bias correction through conditional likelihood calculations on variable sites", es: "Corrección de sesgo de determinación a través de cálculos de verosimilitud condicional en sitios variables", de: "Ascertainment-Bias-Korrektur durch bedingte Likelihood-Berechnungen auf variablen Stellen", nl: "Ascertainment bias correctie door conditionele likelihood berekeningen op variabele sites" },
          { en: "Ignoring invariant characters completely", es: "Ignorando caracteres invariantes completamente", de: "Vollständiges Ignorieren invarianter Charaktere", nl: "Invariante karakters volledig negeren" },
          { en: "Using only parsimony methods", es: "Usando solo métodos de parsimonia", de: "Nur Parsimonie-Methoden verwenden", nl: "Alleen parsimonie-methoden gebruiken" },
          { en: "Random character selection procedures", es: "Procedimientos aleatorios de selección de caracteres", de: "Zufällige Charakter-Auswahlverfahren", nl: "Willekeurige karakterselectieprocedures" }
        ],
        correct: 0,
        explanation: {
          en: "The Lewis Mk model corrects for ascertainment bias by conditioning likelihood calculations on observing variable characters, since morphological datasets systematically exclude invariant traits, requiring statistical adjustments to avoid systematic errors in evolutionary rate estimation.",
          es: "El modelo Mk de Lewis corrige el sesgo de determinación condicionando cálculos de verosimilitud en observar caracteres variables, ya que los conjuntos de datos morfológicos excluyen sistemáticamente rasgos invariantes, requiriendo ajustes estadísticos para evitar errores sistemáticos en estimación de tasas evolutivas.",
          de: "Das Lewis Mk-Modell korrigiert Ascertainment-Bias durch Konditionierung der Likelihood-Berechnungen auf die Beobachtung variabler Charaktere, da morphologische Datensätze systematisch invariante Merkmale ausschließen, was statistische Anpassungen erfordert, um systematische Fehler bei der Evolutionsraten-Schätzung zu vermeiden.",
          nl: "Het Lewis Mk-model corrigeert voor ascertainment bias door likelihood-berekeningen te conditioneren op het observeren van variabele karakters, omdat morfologische datasets systematisch invariante eigenschappen uitsluiten, wat statistische aanpassingen vereist om systematische fouten in evolutionaire snelheidschatting te vermijden."
        }
      },
      {
        question: {
          en: "How do fossilized birth-death models incorporate sampling heterogeneity in deep-time diversification analysis?",
          es: "¿Cómo incorporan los modelos de nacimiento-muerte fosilizados la heterogeneidad de muestreo en análisis de diversificación de tiempo profundo?",
          de: "Wie integrieren versteinerte Geburt-Tod-Modelle Stichproben-Heterogenität in die Diversifikationsanalyse tiefer Zeit?",
          nl: "Hoe incorporeren gefossiliseerde birth-death modellen bemonsteringsheterogeniteit in deep-time diversificatieanalyse?"
        },
        options: [
          { en: "Through time-variable preservation rates and sampling intensity functions", es: "A través de tasas de preservación variables en el tiempo y funciones de intensidad de muestreo", de: "Durch zeitvariable Erhaltungsraten und Stichproben-Intensitätsfunktionen", nl: "Door tijdvariabele bewaringsnelheden en bemonsteringsintensiteitsfuncties" },
          { en: "By assuming constant sampling rates", es: "Asumiendo tasas de muestreo constantes", de: "Durch Annahme konstanter Stichprobenraten", nl: "Door constante bemonsteringssnelheden aan te nemen" },
          { en: "Using uniform preservation across all taxa", es: "Usando preservación uniforme a través de todos los taxa", de: "Mit einheitlicher Erhaltung über alle Taxa", nl: "Uniforme bewaring over alle taxa gebruikend" },
          { en: "Through simple random sampling models", es: "A través de modelos simples de muestreo aleatorio", de: "Durch einfache zufällige Stichprobenmodelle", nl: "Door eenvoudige willekeurige bemonsteringsmodellen" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced fossilized birth-death models account for temporal and taxonomic variation in preservation probability, sampling effort, and taphonomic processes, using piecewise-constant or continuous functions to model how fossilization rates change through geological time and across different environments.",
          es: "Los modelos avanzados de nacimiento-muerte fosilizados consideran variación temporal y taxonómica en probabilidad de preservación, esfuerzo de muestreo y procesos tafonómicos, usando funciones constantes por piezas o continuas para modelar cómo las tasas de fosilización cambian a través del tiempo geológico y diferentes ambientes.",
          de: "Fortgeschrittene versteinerte Geburt-Tod-Modelle berücksichtigen zeitliche und taxonomische Variation in Erhaltungswahrscheinlichkeit, Stichprobenaufwand und taphonomischen Prozessen, verwenden stückweise konstante oder kontinuierliche Funktionen zur Modellierung, wie sich Fossilisationsraten durch geologische Zeit und verschiedene Umgebungen ändern.",
          nl: "Geavanceerde gefossiliseerde birth-death modellen houden rekening met temporele en taxonomische variatie in bewaringswaarschijnlijkheid, bemonsteringsinspanning en tafonomische processen, gebruikmakend van stuksgewijs-constante of continue functies om te modelleren hoe fossilisatiesnelheden veranderen door geologische tijd en over verschillende omgevingen."
        }
      },
      {
        question: {
          en: "What mathematical principles underlie the application of persistent homology to morphological shape analysis?",
          es: "¿Qué principios matemáticos subyacen la aplicación de homología persistente al análisis de forma morfológica?",
          de: "Welche mathematischen Prinzipien liegen der Anwendung persistenter Homologie auf morphologische Formanalyse zugrunde?",
          nl: "Welke wiskundige principes liggen ten grondslag aan de toepassing van persistente homologie op morfologische vormanalyse?"
        },
        options: [
          { en: "Topological data analysis through filtration complexes and Betti number computation", es: "Análisis topológico de datos a través de complejos de filtración y cálculo de números de Betti", de: "Topologische Datenanalyse durch Filtrationskomplexe und Betti-Zahl-Berechnung", nl: "Topologische data-analyse door filtratiecomplexen en Betti-nummerberekening" },
          { en: "Simple geometric distance measurements", es: "Mediciones simples de distancia geométrica", de: "Einfache geometrische Distanzmessungen", nl: "Eenvoudige geometrische afstandsmetingen" },
          { en: "Basic statistical correlation analysis", es: "Análisis básico de correlación estadística", de: "Grundlegende statistische Korrelationsanalyse", nl: "Basis statistische correlatieanalyse" },
          { en: "Linear algebraic operations only", es: "Solo operaciones algebraicas lineales", de: "Nur lineare algebraische Operationen", nl: "Alleen lineaire algebraïsche operaties" }
        ],
        correct: 0,
        explanation: {
          en: "Persistent homology applies algebraic topology to quantify shape features across multiple scales, creating persistence diagrams that capture topological invariants (holes, loops, voids) robust to noise and deformation, providing novel shape descriptors for morphological analysis.",
          es: "La homología persistente aplica topología algebraica para cuantificar características de forma a través de múltiples escalas, creando diagramas de persistencia que capturan invariantes topológicos (huecos, bucles, vacíos) robustos al ruido y deformación, proporcionando descriptores de forma novedosos para análisis morfológico.",
          de: "Persistente Homologie wendet algebraische Topologie an, um Formmerkmale über mehrere Skalen zu quantifizieren, erstellt Persistenz-Diagramme, die topologische Invarianten (Löcher, Schleifen, Hohlräume) erfassen, die robust gegen Rauschen und Verformung sind, und bietet neuartige Form-Deskriptoren für morphologische Analyse.",
          nl: "Persistente homologie past algebraïsche topologie toe om vormkenmerken over meerdere schalen te kwantificeren, waarbij persistentiediagrammen worden gecreëerd die topologische invarianten (gaten, lussen, holtes) vastleggen die robuust zijn tegen ruis en vervorming, wat nieuwe vormbeschrijvers voor morfologische analyse biedt."
        }
      },
      {
        question: {
          en: "How do multivariate Ornstein-Uhlenbeck models capture correlated trait evolution in morphological systems?",
          es: "¿Cómo capturan los modelos multivariados de Ornstein-Uhlenbeck la evolución correlacionada de rasgos en sistemas morfológicos?",
          de: "Wie erfassen multivariate Ornstein-Uhlenbeck-Modelle korrelierte Merkmalsentwicklung in morphologischen Systemen?",
          nl: "Hoe vangen multivariate Ornstein-Uhlenbeck modellen gecorreleerde eigenschap evolutie op in morfologische systemen?"
        },
        options: [
          { en: "Through covariance matrices modeling trait correlations and selection strength matrices", es: "A través de matrices de covarianza modelando correlaciones de rasgos y matrices de fuerza de selección", de: "Durch Kovarianzmatrizen, die Merkmalkorrelationen und Selektionsstärke-Matrizen modellieren", nl: "Door covariantiematrices die eigenschap correlaties en selectiesterktematrices modelleren" },
          { en: "By treating all traits as independent", es: "Tratando todos los rasgos como independientes", de: "Durch Behandlung aller Merkmale als unabhängig", nl: "Door alle eigenschappen als onafhankelijk te behandelen" },
          { en: "Using simple linear correlation only", es: "Usando solo correlación lineal simple", de: "Nur mit einfacher linearer Korrelation", nl: "Alleen eenvoudige lineaire correlatie gebruikend" },
          { en: "Through univariate analysis of each trait", es: "A través de análisis univariado de cada rasgo", de: "Durch univariate Analyse jedes Merkmals", nl: "Door univariate analyse van elke eigenschap" }
        ],
        correct: 0,
        explanation: {
          en: "Multivariate OU models use evolutionary covariance matrices that simultaneously estimate trait correlations, selection strength, and adaptive optima while accounting for phylogenetic structure, enabling inference about evolutionary constraints and adaptive landscapes in high-dimensional trait spaces.",
          es: "Los modelos OU multivariados usan matrices de covarianza evolutiva que simultáneamente estiman correlaciones de rasgos, fuerza de selección y óptimos adaptativos mientras consideran estructura filogenética, permitiendo inferencia sobre restricciones evolutivas y paisajes adaptativos en espacios de rasgos de alta dimensión.",
          de: "Multivariate OU-Modelle verwenden evolutionäre Kovarianzmatrizen, die gleichzeitig Merkmalkorrelationen, Selektionsstärke und adaptive Optima schätzen, während sie phylogenetische Struktur berücksichtigen, und ermöglichen Inferenz über evolutionäre Beschränkungen und adaptive Landschaften in hochdimensionalen Merkmalsräumen.",
          nl: "Multivariate OU-modellen gebruiken evolutionaire covariantiematrices die gelijktijdig eigenschap correlaties, selectiesterkte en adaptieve optima schatten terwijl fylogenetische structuur wordt meegenomen, wat inferentie over evolutionaire beperkingen en adaptieve landschappen in hoog-dimensionale eigenschap ruimtes mogelijk maakt."
        }
      },
      {
        question: {
          en: "What computational frameworks address the 'tree space' problem in Bayesian phylogenetic MCMC analysis?",
          es: "¿Qué marcos computacionales abordan el problema del 'espacio de árboles' en el análisis MCMC filogenético bayesiano?",
          de: "Welche rechnerischen Rahmen adressieren das 'Baumraum'-Problem in der bayesianischen phylogenetischen MCMC-Analyse?",
          nl: "Welke computationele raamwerken pakken het 'boom ruimte' probleem aan in Bayesiaanse fylogenetische MCMC-analyse?"
        },
        options: [
          { en: "Advanced proposal mechanisms with adaptive tuning and parallel tempering strategies", es: "Mecanismos de propuesta avanzados con ajuste adaptativo y estrategias de templado paralelo", de: "Fortgeschrittene Vorschlagsmechanismen mit adaptiver Abstimmung und parallelen Tempering-Strategien", nl: "Geavanceerde voorstelmechanismen met adaptieve afstemming en parallelle tempering strategieën" },
          { en: "Simple random tree proposals only", es: "Solo propuestas aleatorias simples de árboles", de: "Nur einfache zufällige Baumvorschläge", nl: "Alleen eenvoudige willekeurige boomvoorstellen" },
          { en: "Fixed topology searches", es: "Búsquedas de topología fija", de: "Feste Topologie-Suchvorgänge", nl: "Vaste topologie-zoekacties" },
          { en: "Exhaustive tree enumeration", es: "Enumeración exhaustiva de árboles", de: "Erschöpfende Baumaufzählung", nl: "Uitputtende boomopsomming" }
        ],
        correct: 0,
        explanation: {
          en: "Modern MCMC implementations use sophisticated proposal distributions including subtree pruning-regrafting with adaptive tuning parameters, parallel tempering across heated chains, and advanced operators that efficiently explore high-dimensional tree topology spaces while maintaining detailed balance.",
          es: "Las implementaciones MCMC modernas usan distribuciones de propuesta sofisticadas incluyendo poda-reinjerto de subárboles con parámetros de ajuste adaptativo, templado paralelo a través de cadenas calentadas y operadores avanzados que exploran eficientemente espacios de topología de árboles de alta dimensión mientras mantienen balance detallado.",
          de: "Moderne MCMC-Implementierungen verwenden ausgeklügelte Vorschlagsverteilungen einschließlich Unterbaum-Beschneiden-Wiederpfropfen mit adaptiven Abstimmungsparametern, paralleles Tempering über erhitzte Ketten und fortgeschrittene Operatoren, die effizient hochdimensionale Baum-Topologie-Räume erkunden und dabei detailliertes Gleichgewicht aufrechterhalten.",
          nl: "Moderne MCMC-implementaties gebruiken geavanceerde voorstelverdelingen inclusief deelboom-snoeien-herplanteren met adaptieve afstemparameters, parallel tempering over verhitte ketens, en geavanceerde operators die efficiënt hoog-dimensionale boom-topologie ruimtes verkennen terwijl gedetailleerd evenwicht wordt behouden."
        }
      },
      {
        question: {
          en: "How do information-theoretic approaches optimize morphological character coding strategies for phylogenetic analysis?",
          es: "¿Cómo optimizan los enfoques teóricos de información las estrategias de codificación de caracteres morfológicos para análisis filogenético?",
          de: "Wie optimieren informationstheoretische Ansätze morphologische Charakter-Kodierungsstrategien für phylogenetische Analyse?",
          nl: "Hoe optimaliseren informatietheorie-benaderingen morfologische karakter-coderingsstrategieën voor fylogenetische analyse?"
        },
        options: [
          { en: "Through mutual information maximization and entropy-based character weighting", es: "A través de maximización de información mutua y ponderación de caracteres basada en entropía", de: "Durch Maximierung gegenseitiger Information und entropie-basierte Charaktergewichtung", nl: "Door wederzijdse informatie-maximalisatie en entropie-gebaseerde karakterweging" },
          { en: "Using random character selection only", es: "Usando solo selección aleatoria de caracteres", de: "Nur mit zufälliger Charakterauswahl", nl: "Alleen willekeurige karakterselectie gebruikend" },
          { en: "Through expert opinion weighting", es: "A través de ponderación de opinión experta", de: "Durch Expertenmeinung-Gewichtung", nl: "Door expertmening-weging" },
          { en: "By equal weighting of all characters", es: "Ponderando igualmente todos los caracteres", de: "Durch gleichmäßige Gewichtung aller Charaktere", nl: "Door gelijke weging van alle karakters" }
        ],
        correct: 0,
        explanation: {
          en: "Information theory provides objective criteria for character optimization by quantifying phylogenetic information content, identifying redundant characters through mutual information analysis, and developing entropy-based weighting schemes that maximize signal-to-noise ratios in morphological datasets.",
          es: "La teoría de información proporciona criterios objetivos para optimización de caracteres cuantificando contenido de información filogenética, identificando caracteres redundantes a través de análisis de información mutua y desarrollando esquemas de ponderación basados en entropía que maximizan relaciones señal-ruido en conjuntos de datos morfológicos.",
          de: "Informationstheorie bietet objektive Kriterien für Charakteroptimierung durch Quantifizierung phylogenetischen Informationsgehalts, Identifikation redundanter Charaktere durch gegenseitige Informationsanalyse und Entwicklung entropie-basierter Gewichtungsschemata, die Signal-zu-Rausch-Verhältnisse in morphologischen Datensätzen maximieren.",
          nl: "Informatietheorie biedt objectieve criteria voor karakteroptimalisatie door fylogenetische informatie-inhoud te kwantificeren, redundante karakters te identificeren door wederzijdse informatieanalyse, en entropie-gebaseerde wegingschema's te ontwikkelen die signaal-ruis verhoudingen maximaliseren in morfologische datasets."
        }
      },
      {
        question: {
          en: "What statistical methods address non-independence in morphological trait data due to developmental constraints?",
          es: "¿Qué métodos estadísticos abordan la no independencia en datos de rasgos morfológicos debido a restricciones de desarrollo?",
          de: "Welche statistischen Methoden adressieren Nicht-Unabhängigkeit in morphologischen Merkmalsdaten aufgrund von Entwicklungsbeschränkungen?",
          nl: "Welke statistische methoden pakken niet-onafhankelijkheid aan in morfologische eigenschap data door ontwikkelingsbeperkingen?"
        },
        options: [
          { en: "Structured covariance models and latent variable approaches for developmental modules", es: "Modelos de covarianza estructurada y enfoques de variables latentes para módulos de desarrollo", de: "Strukturierte Kovarianzmodelle und latente Variable-Ansätze für Entwicklungsmodule", nl: "Gestructureerde covariantiemodellen en latente variabele benaderingen voor ontwikkelingsmodules" },
          { en: "Independent analysis of each trait", es: "Análisis independiente de cada rasgo", de: "Unabhängige Analyse jedes Merkmals", nl: "Onafhankelijke analyse van elke eigenschap" },
          { en: "Simple correlation removal", es: "Eliminación simple de correlación", de: "Einfache Korrelationsentfernung", nl: "Eenvoudige correlatieweglating" },
          { en: "Random trait permutation", es: "Permutación aleatoria de rasgos", de: "Zufällige Merkmalspermutatiu", nl: "Willekeurige eigenschap permutatie" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced statistical frameworks model developmental covariance structure using factor analysis, structural equation models, and hierarchical approaches that explicitly account for shared developmental pathways and integration patterns within morphological modules.",
          es: "Los marcos estadísticos avanzados modelan estructura de covarianza de desarrollo usando análisis factorial, modelos de ecuaciones estructurales y enfoques jerárquicos que explícitamente consideran vías de desarrollo compartidas y patrones de integración dentro de módulos morfológicos.",
          de: "Fortgeschrittene statistische Rahmen modellieren Entwicklungs-Kovarianzstruktur mit Faktorenanalyse, strukturellen Gleichungsmodellen und hierarchischen Ansätzen, die explizit geteilte Entwicklungswege und Integrationsmuster innerhalb morphologischer Module berücksichtigen.",
          nl: "Geavanceerde statistische raamwerken modelleren ontwikkelingscovariäntiestructuur gebruikmakend van factoranalyse, structurele vergelijkingsmodellen en hiërarchische benaderingen die expliciet rekening houden met gedeelde ontwikkelingswegen en integratie-patronen binnen morfologische modules."
        }
      },
      {
        question: {
          en: "How do machine learning approaches to automated morphological character extraction address feature engineering challenges?",
          es: "¿Cómo abordan los enfoques de aprendizaje automático para extracción automática de caracteres morfológicos los desafíos de ingeniería de características?",
          de: "Wie gehen maschinelle Lernansätze zur automatisierten morphologischen Charakter-Extraktion mit Feature-Engineering-Herausforderungen um?",
          nl: "Hoe pakken machine learning benaderingen voor geautomatiseerde morfologische karakterextractie feature engineering uitdagingen aan?"
        },
        options: [
          { en: "Through deep convolutional architectures with learned feature representations and transfer learning", es: "A través de arquitecturas convolucionales profundas con representaciones de características aprendidas y aprendizaje de transferencia", de: "Durch tiefe Faltungs-Architekturen mit gelernten Merkmaldarstellungen und Transfer-Learning", nl: "Door diepe convolutionaire architecturen met geleerde feature representaties en transfer learning" },
          { en: "Manual feature selection only", es: "Solo selección manual de características", de: "Nur manuelle Merkmalauswahl", nl: "Alleen handmatige featureselectie" },
          { en: "Simple linear measurements", es: "Mediciones lineales simples", de: "Einfache lineare Messungen", nl: "Eenvoudige lineaire metingen" },
          { en: "Expert-defined character states", es: "Estados de carácter definidos por expertos", de: "Experten-definierte Charakterzustände", nl: "Expert-gedefinieerde karaktertoestanden" }
        ],
        correct: 0,
        explanation: {
          en: "Deep learning approaches use convolutional neural networks to automatically learn hierarchical feature representations from morphological images, employing transfer learning from pre-trained networks and attention mechanisms to identify phylogenetically informative morphological patterns without manual feature engineering.",
          es: "Los enfoques de aprendizaje profundo usan redes neuronales convolucionales para aprender automáticamente representaciones jerárquicas de características de imágenes morfológicas, empleando aprendizaje de transferencia de redes pre-entrenadas y mecanismos de atención para identificar patrones morfológicos filogenéticamente informativos sin ingeniería manual de características.",
          de: "Deep Learning-Ansätze verwenden Faltungsneurale Netzwerke zum automatischen Erlernen hierarchischer Merkmaldarstellungen aus morphologischen Bildern, nutzen Transfer Learning von vortrainierten Netzwerken und Aufmerksamkeitsmechanismen zur Identifikation phylogenetisch informativer morphologischer Muster ohne manuelle Merkmalsentwicklung.",
          nl: "Deep learning benaderingen gebruiken convolutionaire neurale netwerken om automatisch hiërarchische feature representaties van morfologische afbeeldingen te leren, waarbij transfer learning van voorgtrainde netwerken en aandachtsmechanismen worden gebruikt om fylogenetisch informatieve morfologische patronen te identificeren zonder handmatige feature engineering."
        }
      },
      {
        question: {
          en: "What theoretical frameworks underlie the application of category theory to phylogenetic reconstruction problems?",
          es: "¿Qué marcos teóricos subyacen la aplicación de teoría de categorías a problemas de reconstrucción filogenética?",
          de: "Welche theoretischen Rahmen liegen der Anwendung der Kategorientheorie auf phylogenetische Rekonstruktionsprobleme zugrunde?",
          nl: "Welke theoretische raamwerken liggen ten grondslag aan de toepassing van categorietheorie op fylogenetische reconstructieproblemen?"
        },
        options: [
          { en: "Functorial relationships between tree spaces and morphism-preserving transformations", es: "Relaciones functoriales entre espacios de árboles y transformaciones que preservan morfismos", de: "Funktorielle Beziehungen zwischen Baumräumen und morphismus-erhaltenden Transformationen", nl: "Functoriële relaties tussen boomruimtes en morfisme-behoudende transformaties" },
          { en: "Simple graph theory applications", es: "Aplicaciones simples de teoría de grafos", de: "Einfache Graphentheorie-Anwendungen", nl: "Eenvoudige grafiektheorie toepassingen" },
          { en: "Basic set theory operations", es: "Operaciones básicas de teoría de conjuntos", de: "Grundlegende Mengentheorie-Operationen", nl: "Basis verzamelingtheorie operaties" },
          { en: "Elementary combinatorial methods", es: "Métodos combinatorios elementales", de: "Elementare kombinatorische Methoden", nl: "Elementaire combinatorische methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Category theory provides abstract mathematical frameworks for phylogenetic analysis through functors that preserve structural relationships between different tree representations, natural transformations between phylogenetic methods, and topos-theoretic approaches to handling uncertainty in evolutionary reconstructions.",
          es: "La teoría de categorías proporciona marcos matemáticos abstractos para análisis filogenético a través de functores que preservan relaciones estructurales entre diferentes representaciones de árboles, transformaciones naturales entre métodos filogenéticos y enfoques teóricos de topos para manejar incertidumbre en reconstrucciones evolutivas.",
          de: "Kategorientheorie bietet abstrakte mathematische Rahmen für phylogenetische Analyse durch Funktoren, die strukturelle Beziehungen zwischen verschiedenen Baumdarstellungen bewahren, natürliche Transformationen zwischen phylogenetischen Methoden und topos-theoretische Ansätze zur Behandlung von Unsicherheit in evolutionären Rekonstruktionen.",
          nl: "Categorietheorie biedt abstracte wiskundige raamwerken voor fylogenetische analyse door functors die structurele relaties tussen verschillende boomrepresentaties bewaren, natuurlijke transformaties tussen fylogenetische methoden, en topos-theoretische benaderingen voor het hanteren van onzekerheid in evolutionaire reconstructies."
        }
      },
      {
        question: {
          en: "How do regularization techniques address overfitting in high-dimensional morphometric phylogenetic analysis?",
          es: "¿Cómo abordan las técnicas de regularización el sobreajuste en análisis filogenético morfométrico de alta dimensión?",
          de: "Wie gehen Regularisierungstechniken mit Überanpassung in hochdimensionaler morphometrischer phylogenetischer Analyse um?",
          nl: "Hoe pakken regularisatietechnieken overfitting aan in hoog-dimensionale morfometrische fylogenetische analyse?"
        },
        options: [
          { en: "Through L1/L2 penalty functions and cross-validation model selection with sparsity constraints", es: "A través de funciones de penalización L1/L2 y selección de modelo de validación cruzada con restricciones de escasez", de: "Durch L1/L2-Straffunktionen und Kreuzvalidierung-Modellauswahl mit Spärlichkeitsbeschränkungen", nl: "Door L1/L2 strafuncties en kruisvalidatie model selectie met sparsity beperkingen" },
          { en: "Using all available parameters", es: "Usando todos los parámetros disponibles", de: "Mit allen verfügbaren Parametern", nl: "Alle beschikbare parameters gebruikend" },
          { en: "Ignoring model complexity entirely", es: "Ignorando completamente la complejidad del modelo", de: "Vollständiges Ignorieren der Modellkomplexität", nl: "Modelcomplexiteit volledig negerend" },
          { en: "Simple data reduction only", es: "Solo reducción simple de datos", de: "Nur einfache Datenreduktion", nl: "Alleen eenvoudige datareductie" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization methods apply penalty terms (LASSO, Ridge, Elastic Net) to prevent overfitting in high-dimensional spaces, using cross-validation to optimize regularization parameters and enforce sparsity to identify the most phylogenetically informative morphological features while maintaining generalization performance.",
          es: "Los métodos de regularización aplican términos de penalización (LASSO, Ridge, Elastic Net) para prevenir sobreajuste en espacios de alta dimensión, usando validación cruzada para optimizar parámetros de regularización y forzar escasez para identificar las características morfológicas más filogenéticamente informativas mientras mantienen rendimiento de generalización.",
          de: "Regularisierungsmethoden wenden Strafterme (LASSO, Ridge, Elastic Net) an, um Überanpassung in hochdimensionalen Räumen zu verhindern, verwenden Kreuzvalidierung zur Optimierung von Regularisierungsparametern und erzwingen Spärlichkeit zur Identifikation der phylogenetisch informativsten morphologischen Merkmale bei Aufrechterhaltung der Generalisierungsleistung.",
          nl: "Regularisatiemethoden passen straftermen (LASSO, Ridge, Elastic Net) toe om overfitting in hoog-dimensionale ruimtes te voorkomen, gebruikmakend van kruisvalidatie om regularisatieparameters te optimaliseren en sparsity af te dwingen om de meest fylogenetisch informatieve morfologische kenmerken te identificeren terwijl generalisatieprestaties worden behouden."
        }
      },
      {
        question: {
          en: "What computational complexity challenges arise in exact algorithms for the Maximum Parsimony problem on large morphological datasets?",
          es: "¿Qué desafíos de complejidad computacional surgen en algoritmos exactos para el problema de Máxima Parsimonia en conjuntos de datos morfológicos grandes?",
          de: "Welche rechnerischen Komplexitäts-Herausforderungen entstehen bei exakten Algorithmen für das Maximum-Parsimonie-Problem auf großen morphologischen Datensätzen?",
          nl: "Welke computationele complexiteitsuitdagingen ontstaan bij exacte algoritmen voor het Maximum Parsimonie probleem op grote morfologische datasets?"
        },
        options: [
          { en: "NP-hard computational complexity requiring exponential-time algorithms and heuristic approximations", es: "Complejidad computacional NP-difícil requiriendo algoritmos de tiempo exponencial y aproximaciones heurísticas", de: "NP-schwere rechnerische Komplexität erfordert Exponential-Zeit-Algorithmen und heuristische Approximationen", nl: "NP-hard computationele complexiteit die exponentiële-tijd algoritmen en heuristische benaderingen vereist" },
          { en: "Linear time complexity solutions", es: "Soluciones de complejidad de tiempo lineal", de: "Lösungen mit linearer Zeitkomplexität", nl: "Lineaire tijdcomplexiteit oplossingen" },
          { en: "Polynomial time guaranteed algorithms", es: "Algoritmos garantizados de tiempo polinomial", de: "Garantierte polynomielle Zeit-Algorithmen", nl: "Polynomiële tijd gegarandeerde algoritmen" },
          { en: "No computational limitations", es: "Sin limitaciones computacionales", de: "Keine rechnerischen Einschränkungen", nl: "Geen computationele beperkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Maximum Parsimony is NP-hard, with the number of possible tree topologies growing super-exponentially with taxa count, requiring sophisticated algorithms including branch-and-bound, dynamic programming approaches, and advanced heuristics for practical analysis of large morphological datasets.",
          es: "La Máxima Parsimonia es NP-difícil, con el número de topologías de árbol posibles creciendo super-exponencialmente con el conteo de taxa, requiriendo algoritmos sofisticados incluyendo ramificación y acotamiento, enfoques de programación dinámica y heurísticas avanzadas para análisis práctico de grandes conjuntos de datos morfológicos.",
          de: "Maximum Parsimonie ist NP-schwer, wobei die Anzahl möglicher Baumtopologien super-exponentiell mit der Taxa-Anzahl wächst, was ausgeklügelte Algorithmen einschließlich Branch-and-Bound, dynamische Programmierung und fortgeschrittene Heuristiken für praktische Analyse großer morphologischer Datensätze erfordert.",
          nl: "Maximum Parsimonie is NP-hard, waarbij het aantal mogelijke boomtopologieën super-exponentieel groeit met taxa-aantal, wat geavanceerde algoritmen vereist inclusief branch-and-bound, dynamische programmering benaderingen, en geavanceerde heuristieken voor praktische analyse van grote morfologische datasets."
        }
      },
      {
        question: {
          en: "How do stochastic character mapping algorithms quantify evolutionary uncertainty in ancestral state reconstruction?",
          es: "¿Cómo cuantifican los algoritmos de mapeo estocástico de caracteres la incertidumbre evolutiva en reconstrucción de estados ancestrales?",
          de: "Wie quantifizieren stochastische Charakter-Mapping-Algorithmen evolutionäre Unsicherheit in der Rekonstruktion ancestraler Zustände?",
          nl: "Hoe kwantificeren stochastische karakter mapping algoritmen evolutionaire onzekerheid in voorouderlijke toestanden reconstructie?"
        },
        options: [
          { en: "Through Monte Carlo simulation of character histories with posterior probability distributions", es: "A través de simulación Monte Carlo de historias de caracteres con distribuciones de probabilidad posterior", de: "Durch Monte-Carlo-Simulation von Charaktergeschichten mit posterioren Wahrscheinlichkeitsverteilungen", nl: "Door Monte Carlo simulatie van karakter geschiedenissen met posterieure waarschijnlijkheidverdelingen" },
          { en: "Using single optimal reconstructions only", es: "Usando solo reconstrucciones óptimas únicas", de: "Nur mit einzelnen optimalen Rekonstruktionen", nl: "Alleen enkele optimale reconstructies gebruikend" },
          { en: "Through deterministic state assignments", es: "A través de asignaciones determinísticas de estado", de: "Durch deterministische Zustandszuweisungen", nl: "Door deterministische toestandstoewijzingen" },
          { en: "By ignoring phylogenetic uncertainty", es: "Ignorando incertidumbre filogenética", de: "Durch Ignorieren phylogenetischer Unsicherheit", nl: "Door fylogenetische onzekerheid te negeren" }
        ],
        correct: 0,
        explanation: {
          en: "Stochastic character mapping uses continuous-time Markov chains to simulate multiple possible evolutionary histories, generating posterior distributions over ancestral states that quantify uncertainty arising from phylogenetic ambiguity, rate variation, and incomplete character data.",
          es: "El mapeo estocástico de caracteres usa cadenas de Markov de tiempo continuo para simular múltiples historias evolutivas posibles, generando distribuciones posteriores sobre estados ancestrales que cuantifican incertidumbre resultante de ambigüedad filogenética, variación de tasas y datos de caracteres incompletos.",
          de: "Stochastisches Charakter-Mapping verwendet kontinuierliche Markov-Ketten zur Simulation mehrerer möglicher evolutionärer Geschichten und generiert posteriore Verteilungen über ancestrale Zustände, die Unsicherheit quantifizieren, die aus phylogenetischer Mehrdeutigkeit, Ratenvariation und unvollständigen Charakterdaten resultiert.",
          nl: "Stochastische karakter mapping gebruikt continue-tijd Markov-ketens om meerdere mogelijke evolutionaire geschiedenissen te simuleren, waarbij posterieure verdelingen over voorouderlijke toestanden worden gegenereerd die onzekerheid kwantificeren voortvloeiend uit fylogenetische ambiguïteit, snelheidsvariatie en onvolledige karakter data."
        }
      },
      {
        question: {
          en: "What mathematical foundations support the use of tensor methods in morphological shape analysis?",
          es: "¿Qué fundamentos matemáticos apoyan el uso de métodos de tensores en análisis de forma morfológica?",
          de: "Welche mathematischen Grundlagen unterstützen die Verwendung von Tensor-Methoden in der morphologischen Formanalyse?",
          nl: "Welke wiskundige fundamenten ondersteunen het gebruik van tensormethoden in morfologische vormanalyse?"
        },
        options: [
          { en: "Multilinear algebra and tensor decomposition for high-order data structures", es: "Álgebra multilineal y descomposición de tensores para estructuras de datos de alto orden", de: "Multilineare Algebra und Tensor-Zerlegung für hochordige Datenstrukturen", nl: "Multilineaire algebra en tensordecompositie voor hoge-orde datastructuren" },
          { en: "Simple matrix operations only", es: "Solo operaciones simples de matrices", de: "Nur einfache Matrixoperationen", nl: "Alleen eenvoudige matrix operaties" },
          { en: "Basic vector arithmetic", es: "Aritmética básica de vectores", de: "Grundlegende Vektorarithmetik", nl: "Basis vectorarithmetiek" },
          { en: "Standard statistical methods", es: "Métodos estadísticos estándar", de: "Standard-statistische Methoden", nl: "Standaard statistische methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Tensor methods extend morphological analysis beyond matrices to handle multi-way arrays capturing complex shape relationships, using decompositions like CANDECOMP/PARAFAC and Tucker models to identify latent morphological patterns and reduce dimensionality while preserving higher-order structure.",
          es: "Los métodos de tensores extienden el análisis morfológico más allá de matrices para manejar arreglos multi-direccionales capturando relaciones complejas de forma, usando descomposiciones como CANDECOMP/PARAFAC y modelos Tucker para identificar patrones morfológicos latentes y reducir dimensionalidad mientras preservan estructura de orden superior.",
          de: "Tensor-Methoden erweitern morphologische Analyse über Matrizen hinaus zur Behandlung mehrwegiger Arrays, die komplexe Formbeziehungen erfassen, mit Zerlegungen wie CANDECOMP/PARAFAC und Tucker-Modellen zur Identifikation latenter morphologischer Muster und Dimensionsreduktion unter Bewahrung höherordiger Struktur.",
          nl: "Tensormethoden breiden morfologische analyse uit voorbij matrices om multi-weg arrays te hanteren die complexe vormrelaties vastleggen, gebruikmakend van decomposities zoals CANDECOMP/PARAFAC en Tucker-modellen om latente morfologische patronen te identificeren en dimensionaliteit te reduceren terwijl hogere-orde structuur wordt behouden."
        }
      },
      {
        question: {
          en: "How do variational inference methods approximate intractable posterior distributions in Bayesian phylogenetic models?",
          es: "¿Cómo aproximan los métodos de inferencia variacional distribuciones posteriores intratables en modelos filogenéticos bayesianos?",
          de: "Wie approximieren Variational-Inference-Methoden unlösbare posteriore Verteilungen in bayesianischen phylogenetischen Modellen?",
          nl: "Hoe benaderen variationele inferentiemethoden onhandelbare posterieure verdelingen in Bayesiaanse fylogenetische modellen?"
        },
        options: [
          { en: "Through optimization-based approximation using KL divergence minimization and mean-field assumptions", es: "A través de aproximación basada en optimización usando minimización de divergencia KL y suposiciones de campo medio", de: "Durch optimierungsbasierte Approximation mit KL-Divergenz-Minimierung und Mean-Field-Annahmen", nl: "Door optimalisatie-gebaseerde benadering gebruikmakend van KL-divergentie minimalisatie en mean-field aannames" },
          { en: "Using exact analytical solutions only", es: "Usando solo soluciones analíticas exactas", de: "Nur mit exakten analytischen Lösungen", nl: "Alleen exacte analytische oplossingen gebruikend" },
          { en: "Through simple point estimates", es: "A través de estimaciones puntuales simples", de: "Durch einfache Punktschätzungen", nl: "Door eenvoudige puntschattingen" },
          { en: "By uniform distribution assumptions", es: "Mediante suposiciones de distribución uniforme", de: "Durch einheitliche Verteilungsannahmen", nl: "Door uniforme verdelingaannames" }
        ],
        correct: 0,
        explanation: {
          en: "Variational inference transforms sampling-based posterior exploration into optimization problems, using mean-field approximations and automatic differentiation to minimize KL divergence between approximate and true posteriors, providing faster alternatives to MCMC for complex phylogenetic models.",
          es: "La inferencia variacional transforma exploración posterior basada en muestreo en problemas de optimización, usando aproximaciones de campo medio y diferenciación automática para minimizar divergencia KL entre posteriores aproximados y verdaderos, proporcionando alternativas más rápidas a MCMC para modelos filogenéticos complejos.",
          de: "Variational Inference transformiert stichprobenbasierte posteriore Exploration in Optimierungsprobleme, verwendet Mean-Field-Approximationen und automatische Differentiation zur Minimierung der KL-Divergenz zwischen approximierten und wahren Posterioren und bietet schnellere Alternativen zu MCMC für komplexe phylogenetische Modelle.",
          nl: "Variationele inferentie transformeert steekproef-gebaseerde posterieure exploratie naar optimalisatieproblemen, gebruikmakend van mean-field benaderingen en automatische differentiatie om KL-divergentie tussen benaderens en ware posterieure te minimaliseren, wat snellere alternatieven voor MCMC biedt voor complexe fylogenetische modellen."
        }
      },
      {
        question: {
          en: "What role do Riemannian optimization algorithms play in phylogenetic tree space exploration?",
          es: "¿Qué papel juegan los algoritmos de optimización riemanniana en la exploración del espacio de árboles filogenético?",
          de: "Welche Rolle spielen riemannsche Optimierungsalgorithmen bei der Erforschung phylogenetischer Baumräume?",
          nl: "Welke rol spelen Riemann optimalisatiealgoritmen in fylogenetische boomruimte exploratie?"
        },
        options: [
          { en: "Efficient optimization on non-Euclidean manifolds with geodesic-based search strategies", es: "Optimización eficiente en variedades no euclidianas con estrategias de búsqueda basadas en geodésicas", de: "Effiziente Optimierung auf nicht-euklidischen Mannigfaltigkeiten mit geodäsischen-basierten Suchstrategien", nl: "Efficiënte optimalisatie op niet-Euclidische manifolds met geodetische-gebaseerde zoekstrategieën" },
          { en: "Simple gradient descent in Euclidean space", es: "Descenso de gradiente simple en espacio euclidiano", de: "Einfacher Gradientenabstieg im euklidischen Raum", nl: "Eenvoudige gradiënt daling in Euclidische ruimte" },
          { en: "Random search without geometric structure", es: "Búsqueda aleatoria sin estructura geométrica", de: "Zufällige Suche ohne geometrische Struktur", nl: "Willekeurige zoektocht zonder geometrische structuur" },
          { en: "Linear programming approaches", es: "Enfoques de programación lineal", de: "Lineare Programmieransätze", nl: "Lineaire programmering benaderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Tree spaces have non-Euclidean geometric structure requiring Riemannian optimization that respects the underlying manifold geometry, using geodesics and exponential maps for efficient navigation while maintaining the intrinsic geometric constraints of phylogenetic tree topologies.",
          es: "Los espacios de árboles tienen estructura geométrica no euclidiana requiriendo optimización riemanniana que respete la geometría de variedad subyacente, usando geodésicas y mapas exponenciales para navegación eficiente mientras mantiene restricciones geométricas intrínsecas de topologías de árbol filogenético.",
          de: "Baumräume haben nicht-euklidische geometrische Struktur und erfordern riemannsche Optimierung, die die zugrundeliegende Mannigfaltigkeitsgeometrie respektiert, mit Geodäten und exponentiellen Karten für effiziente Navigation bei Aufrechterhaltung der intrinsischen geometrischen Beschränkungen phylogenetischer Baumtopologien.",
          nl: "Boomruimtes hebben niet-Euclidische geometrische structuur die Riemann optimalisatie vereist die de onderliggende manifold geometrie respecteert, gebruikmakend van geodeten en exponentiële kaarten voor efficiënte navigatie terwijl intrinsieke geometrische beperkingen van fylogenetische boomtopologieën behouden blijven."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();