module.exports = {
  questions: [
    {
      question: {
        en: "What is the kernel trick in SVM?",
        es: "¿Qué es el truco del kernel en SVM?",
        de: "Was ist der Kernel-Trick bei SVM?",
        nl: "Wat is de kernel trick in SVM?"
      },
      options: [
        {
          en: "Maps data to higher dimensions implicitly",
          es: "Mapea datos a dimensiones superiores implícitamente",
          de: "Bildet Daten implizit auf höhere Dimensionen ab",
          nl: "Brengt data impliciet naar hogere dimensies"
        },
        {
          en: "Reduces computational complexity",
          es: "Reduce complejidad computacional",
          de: "Reduziert Rechenkomplexität",
          nl: "Vermindert computationele complexiteit"
        },
        {
          en: "Speeds up training time",
          es: "Acelera tiempo de entrenamiento",
          de: "Beschleunigt Trainingszeit",
          nl: "Versnelt trainingstijd"
        },
        {
          en: "Simplifies the model",
          es: "Simplifica el modelo",
          de: "Vereinfacht das Modell",
          nl: "Vereenvoudigt het model"
        }
      ],
      correct: 0,
      explanation: {
        en: "The kernel trick allows SVMs to operate in high-dimensional feature spaces without explicitly computing the coordinates, making non-linear classification efficient.",
        es: "El truco del kernel permite a las SVM operar en espacios de características de alta dimensión sin calcular explícitamente las coordenadas.",
        de: "Der Kernel-Trick ermöglicht SVMs, in hochdimensionalen Merkmalsräumen zu arbeiten, ohne die Koordinaten explizit zu berechnen.",
        nl: "De kernel trick stelt SVM's in staat om in hoogdimensionale kenmerkenruimtes te werken zonder expliciet de coördinaten te berekenen."
      }
    },
    {
      question: {
        en: "What is the difference between bagging and boosting?",
        es: "¿Cuál es la diferencia entre bagging y boosting?",
        de: "Was ist der Unterschied zwischen Bagging und Boosting?",
        nl: "Wat is het verschil tussen bagging en boosting?"
      },
      options: [
        {
          en: "Bagging trains in parallel, boosting sequentially",
          es: "Bagging entrena en paralelo, boosting secuencialmente",
          de: "Bagging trainiert parallel, Boosting sequenziell",
          nl: "Bagging traint parallel, boosting sequentieel"
        },
        {
          en: "Both train models in parallel",
          es: "Ambos entrenan modelos en paralelo",
          de: "Beide trainieren Modelle parallel",
          nl: "Beide trainen modellen parallel"
        },
        {
          en: "Both train models sequentially",
          es: "Ambos entrenan modelos secuencialmente",
          de: "Beide trainieren Modelle sequenziell",
          nl: "Beide trainen modellen sequentieel"
        },
        {
          en: "No significant difference",
          es: "Sin diferencia significativa",
          de: "Kein signifikanter Unterschied",
          nl: "Geen significant verschil"
        }
      ],
      correct: 0,
      explanation: {
        en: "Bagging trains multiple models independently in parallel on different data subsets, while boosting trains models sequentially, each learning from previous mistakes.",
        es: "Bagging entrena múltiples modelos independientemente en paralelo en diferentes subconjuntos de datos, mientras boosting entrena modelos secuencialmente.",
        de: "Bagging trainiert mehrere Modelle unabhängig parallel auf verschiedenen Datenuntermengen, während Boosting Modelle sequenziell trainiert.",
        nl: "Bagging traint meerdere modellen onafhankelijk parallel op verschillende data subsets, terwijl boosting modellen sequentieel traint."
      }
    },
    {
      question: {
        en: "What is AdaBoost algorithm?",
        es: "¿Qué es el algoritmo AdaBoost?",
        de: "Was ist der AdaBoost-Algorithmus?",
        nl: "Wat is het AdaBoost algoritme?"
      },
      options: [
        {
          en: "Adaptive Boosting ensemble method",
          es: "Método de conjunto Boosting Adaptativo",
          de: "Adaptive Boosting Ensemble-Methode",
          nl: "Adaptive Boosting ensemble methode"
        },
        {
          en: "Advanced Database Boost",
          es: "Impulso de Base de Datos Avanzado",
          de: "Erweiterte Datenbank-Verstärkung",
          nl: "Geavanceerde Database Boost"
        },
        {
          en: "Automated Data Boost",
          es: "Impulso de Datos Automatizado",
          de: "Automatisierte Datenverstärkung",
          nl: "Geautomatiseerde Data Boost"
        },
        {
          en: "Artificial Deep Boost",
          es: "Impulso Profundo Artificial",
          de: "Künstliche Tiefe Verstärkung",
          nl: "Kunstmatige Diepe Boost"
        }
      ],
      correct: 0,
      explanation: {
        en: "AdaBoost (Adaptive Boosting) is an ensemble method that combines weak learners sequentially, adjusting weights based on errors to create a strong classifier.",
        es: "AdaBoost es un método de conjunto que combina aprendices débiles secuencialmente, ajustando pesos basados en errores para crear un clasificador fuerte.",
        de: "AdaBoost ist eine Ensemble-Methode, die schwache Lerner sequenziell kombiniert und Gewichte basierend auf Fehlern anpasst.",
        nl: "AdaBoost is een ensemble methode die zwakke leerders sequentieel combineert, past gewichten aan op basis van fouten."
      }
    },
    {
      question: {
        en: "What is the expectation-maximization (EM) algorithm?",
        es: "¿Qué es el algoritmo de expectativa-maximización?",
        de: "Was ist der Erwartungs-Maximierungs-Algorithmus?",
        nl: "Wat is het expectation-maximization algoritme?"
      },
      options: [
        {
          en: "Iterative method for finding maximum likelihood",
          es: "Método iterativo para encontrar máxima verosimilitud",
          de: "Iterative Methode zur Maximum-Likelihood-Schätzung",
          nl: "Iteratieve methode voor maximum likelihood"
        },
        {
          en: "Direct optimization technique",
          es: "Técnica de optimización directa",
          de: "Direkte Optimierungstechnik",
          nl: "Directe optimalisatietechniek"
        },
        {
          en: "Clustering algorithm only",
          es: "Solo algoritmo de agrupamiento",
          de: "Nur Clustering-Algorithmus",
          nl: "Alleen clustering-algoritme"
        },
        {
          en: "Regression method",
          es: "Método de regresión",
          de: "Regressionsmethode",
          nl: "Regressiemethode"
        }
      ],
      correct: 0,
      explanation: {
        en: "EM algorithm iteratively estimates parameters in models with latent variables by alternating between expectation (E) and maximization (M) steps.",
        es: "El algoritmo EM estima iterativamente parámetros en modelos con variables latentes alternando entre pasos de expectativa y maximización.",
        de: "Der EM-Algorithmus schätzt iterativ Parameter in Modellen mit latenten Variablen durch Wechsel zwischen Erwartungs- und Maximierungsschritten.",
        nl: "Het EM-algoritme schat iteratief parameters in modellen met latente variabelen door te wisselen tussen verwachting en maximalisatie stappen."
      }
    },
    {
      question: {
        en: "What is Gaussian Mixture Model (GMM)?",
        es: "¿Qué es el Modelo de Mezcla Gaussiana?",
        de: "Was ist ein Gaußsches Mischmodell?",
        nl: "Wat is een Gaussian Mixture Model?"
      },
      options: [
        {
          en: "Probabilistic model using multiple Gaussians",
          es: "Modelo probabilístico usando múltiples Gaussianas",
          de: "Probabilistisches Modell mit mehreren Gaußverteilungen",
          nl: "Probabilistisch model met meerdere Gaussians"
        },
        {
          en: "Single Gaussian distribution",
          es: "Distribución Gaussiana única",
          de: "Einzelne Gaußverteilung",
          nl: "Enkele Gaussische distributie"
        },
        {
          en: "Linear regression variant",
          es: "Variante de regresión lineal",
          de: "Lineare Regressionsvariante",
          nl: "Lineaire regressie variant"
        },
        {
          en: "Neural network type",
          es: "Tipo de red neuronal",
          de: "Neuronaler Netzwerktyp",
          nl: "Type neuraal netwerk"
        }
      ],
      correct: 0,
      explanation: {
        en: "GMM represents data as a mixture of multiple Gaussian distributions, useful for clustering and density estimation when data has multiple modes.",
        es: "GMM representa datos como una mezcla de múltiples distribuciones Gaussianas, útil para agrupamiento y estimación de densidad.",
        de: "GMM stellt Daten als Mischung mehrerer Gaußverteilungen dar, nützlich für Clustering und Dichteschätzung.",
        nl: "GMM representeert data als een mengsel van meerdere Gaussische distributies, nuttig voor clustering en dichtheidsschatting."
      }
    },
    {
      question: {
        en: "What is hierarchical clustering?",
        es: "¿Qué es el agrupamiento jerárquico?",
        de: "Was ist hierarchisches Clustering?",
        nl: "Wat is hiërarchisch clusteren?"
      },
      options: [
        {
          en: "Building tree of clusters",
          es: "Construir árbol de grupos",
          de: "Baum von Clustern aufbauen",
          nl: "Boom van clusters bouwen"
        },
        {
          en: "Flat clustering method",
          es: "Método de agrupamiento plano",
          de: "Flache Clustering-Methode",
          nl: "Platte clusteringmethode"
        },
        {
          en: "Random cluster assignment",
          es: "Asignación aleatoria de grupos",
          de: "Zufällige Clusterzuweisung",
          nl: "Willekeurige cluster toewijzing"
        },
        {
          en: "Single-level clustering",
          es: "Agrupamiento de un nivel",
          de: "Einstufiges Clustering",
          nl: "Enkellaags clustering"
        }
      ],
      correct: 0,
      explanation: {
        en: "Hierarchical clustering creates a tree of clusters (dendrogram) by either merging smaller clusters (agglomerative) or dividing larger ones (divisive).",
        es: "El agrupamiento jerárquico crea un árbol de grupos (dendrograma) fusionando grupos pequeños o dividiendo grandes.",
        de: "Hierarchisches Clustering erstellt einen Baum von Clustern (Dendrogramm) durch Verschmelzen kleinerer oder Teilen größerer Cluster.",
        nl: "Hiërarchisch clusteren creëert een boom van clusters (dendrogram) door kleinere clusters samen te voegen of grotere te splitsen."
      }
    },
    {
      question: {
        en: "What is DBSCAN clustering?",
        es: "¿Qué es el agrupamiento DBSCAN?",
        de: "Was ist DBSCAN-Clustering?",
        nl: "Wat is DBSCAN clustering?"
      },
      options: [
        {
          en: "Density-based spatial clustering",
          es: "Agrupamiento espacial basado en densidad",
          de: "Dichtebasiertes räumliches Clustering",
          nl: "Dichtheid-gebaseerd ruimtelijk clusteren"
        },
        {
          en: "Distance-based simple clustering",
          es: "Agrupamiento simple basado en distancia",
          de: "Distanzbasiertes einfaches Clustering",
          nl: "Afstand-gebaseerd simpel clusteren"
        },
        {
          en: "Database scanning method",
          es: "Método de escaneo de base de datos",
          de: "Datenbank-Scan-Methode",
          nl: "Database scan methode"
        },
        {
          en: "Deep belief network clustering",
          es: "Agrupamiento de red de creencia profunda",
          de: "Deep Belief Network Clustering",
          nl: "Deep belief netwerk clustering"
        }
      ],
      correct: 0,
      explanation: {
        en: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) finds clusters based on density, handling arbitrary shapes and identifying outliers.",
        es: "DBSCAN encuentra grupos basados en densidad, manejando formas arbitrarias e identificando valores atípicos.",
        de: "DBSCAN findet Cluster basierend auf Dichte, behandelt beliebige Formen und identifiziert Ausreißer.",
        nl: "DBSCAN vindt clusters gebaseerd op dichtheid, behandelt willekeurige vormen en identificeert uitschieters."
      }
    },
    {
      question: {
        en: "What is t-SNE?",
        es: "¿Qué es t-SNE?",
        de: "Was ist t-SNE?",
        nl: "Wat is t-SNE?"
      },
      options: [
        {
          en: "t-distributed Stochastic Neighbor Embedding",
          es: "Incrustación de Vecinos Estocásticos t-distribuidos",
          de: "t-verteilte stochastische Nachbarschaftseinbettung",
          nl: "t-distributed Stochastic Neighbor Embedding"
        },
        {
          en: "Time Series Network Estimation",
          es: "Estimación de Red de Series Temporales",
          de: "Zeitreihen-Netzwerkschätzung",
          nl: "Tijd Series Netwerk Schatting"
        },
        {
          en: "Temporal Statistical Neural Embedding",
          es: "Incrustación Neural Estadística Temporal",
          de: "Zeitliche statistische neuronale Einbettung",
          nl: "Temporele Statistische Neurale Embedding"
        },
        {
          en: "Training Sample Network Evaluation",
          es: "Evaluación de Red de Muestra de Entrenamiento",
          de: "Training-Sample-Netzwerk-Bewertung",
          nl: "Training Sample Netwerk Evaluatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "t-SNE is a dimensionality reduction technique particularly good at visualizing high-dimensional data in 2D or 3D by preserving local structure.",
        es: "t-SNE es una técnica de reducción de dimensionalidad particularmente buena para visualizar datos de alta dimensión en 2D o 3D.",
        de: "t-SNE ist eine Dimensionsreduktionstechnik, die besonders gut hochdimensionale Daten in 2D oder 3D visualisiert.",
        nl: "t-SNE is een dimensionaliteitsreductietechniek bijzonder goed in het visualiseren van hoogdimensionale data in 2D of 3D."
      }
    },
    {
      question: {
        en: "What is L1 vs L2 regularization?",
        es: "¿Qué es regularización L1 vs L2?",
        de: "Was ist L1 vs L2 Regularisierung?",
        nl: "Wat is L1 vs L2 regularisatie?"
      },
      options: [
        {
          en: "L1 creates sparsity, L2 shrinks weights",
          es: "L1 crea escasez, L2 reduce pesos",
          de: "L1 erzeugt Sparsamkeit, L2 verkleinert Gewichte",
          nl: "L1 creëert sparsity, L2 verkleint gewichten"
        },
        {
          en: "Both create sparsity",
          es: "Ambos crean escasez",
          de: "Beide erzeugen Sparsamkeit",
          nl: "Beide creëren sparsity"
        },
        {
          en: "Both shrink weights equally",
          es: "Ambos reducen pesos igualmente",
          de: "Beide verkleinern Gewichte gleich",
          nl: "Beide verkleinen gewichten gelijk"
        },
        {
          en: "No practical difference",
          es: "Sin diferencia práctica",
          de: "Kein praktischer Unterschied",
          nl: "Geen praktisch verschil"
        }
      ],
      correct: 0,
      explanation: {
        en: "L1 regularization (Lasso) tends to create sparse models by driving some weights to zero, while L2 (Ridge) shrinks all weights proportionally.",
        es: "La regularización L1 (Lasso) tiende a crear modelos escasos llevando algunos pesos a cero, mientras L2 (Ridge) reduce todos los pesos proporcionalmente.",
        de: "L1-Regularisierung (Lasso) erzeugt sparsame Modelle durch Nullsetzung einiger Gewichte, während L2 (Ridge) alle Gewichte proportional verkleinert.",
        nl: "L1 regularisatie (Lasso) creëert sparse modellen door sommige gewichten naar nul te drijven, terwijl L2 (Ridge) alle gewichten proportioneel verkleint."
      }
    },
    {
      question: {
        en: "What is elastic net regularization?",
        es: "¿Qué es la regularización elastic net?",
        de: "Was ist Elastic Net Regularisierung?",
        nl: "Wat is elastic net regularisatie?"
      },
      options: [
        {
          en: "Combination of L1 and L2 penalties",
          es: "Combinación de penalizaciones L1 y L2",
          de: "Kombination von L1 und L2 Strafen",
          nl: "Combinatie van L1 en L2 penalties"
        },
        {
          en: "Only L1 penalty",
          es: "Solo penalización L1",
          de: "Nur L1 Strafe",
          nl: "Alleen L1 penalty"
        },
        {
          en: "Only L2 penalty",
          es: "Solo penalización L2",
          de: "Nur L2 Strafe",
          nl: "Alleen L2 penalty"
        },
        {
          en: "No regularization",
          es: "Sin regularización",
          de: "Keine Regularisierung",
          nl: "Geen regularisatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Elastic net combines L1 and L2 regularization, balancing feature selection (L1) with handling correlated features (L2) for optimal performance.",
        es: "Elastic net combina regularización L1 y L2, equilibrando selección de características (L1) con manejo de características correlacionadas (L2).",
        de: "Elastic Net kombiniert L1 und L2 Regularisierung, balanciert Merkmalsauswahl (L1) mit Handhabung korrelierter Merkmale (L2).",
        nl: "Elastic net combineert L1 en L2 regularisatie, balanceert kenmerk selectie (L1) met behandeling van gecorreleerde kenmerken (L2)."
      }
    },
    {
      question: {
        en: "What is the ROC curve?",
        es: "¿Qué es la curva ROC?",
        de: "Was ist die ROC-Kurve?",
        nl: "Wat is de ROC curve?"
      },
      options: [
        {
          en: "Receiver Operating Characteristic curve",
          es: "Curva Característica Operativa del Receptor",
          de: "Receiver Operating Characteristic Kurve",
          nl: "Receiver Operating Characteristic curve"
        },
        {
          en: "Random Observation Curve",
          es: "Curva de Observación Aleatoria",
          de: "Zufällige Beobachtungskurve",
          nl: "Willekeurige Observatie Curve"
        },
        {
          en: "Regression Output Curve",
          es: "Curva de Salida de Regresión",
          de: "Regressionsausgabekurve",
          nl: "Regressie Output Curve"
        },
        {
          en: "Rate of Change curve",
          es: "Curva de Tasa de Cambio",
          de: "Änderungsratenkurve",
          nl: "Veranderingssnelheid curve"
        }
      ],
      correct: 0,
      explanation: {
        en: "ROC curve plots true positive rate vs false positive rate at various thresholds, with area under curve (AUC) measuring classifier performance.",
        es: "La curva ROC grafica tasa de verdaderos positivos vs tasa de falsos positivos en varios umbrales, con área bajo la curva midiendo rendimiento.",
        de: "ROC-Kurve plottet wahre Positivrate gegen falsche Positivrate bei verschiedenen Schwellenwerten, mit Fläche unter Kurve als Leistungsmaß.",
        nl: "ROC curve plot true positive rate vs false positive rate bij verschillende drempels, met oppervlakte onder curve als prestatiemaat."
      }
    },
    {
      question: {
        en: "What is F1 score?",
        es: "¿Qué es la puntuación F1?",
        de: "Was ist der F1-Score?",
        nl: "Wat is de F1 score?"
      },
      options: [
        {
          en: "Harmonic mean of precision and recall",
          es: "Media armónica de precisión y recall",
          de: "Harmonisches Mittel von Präzision und Recall",
          nl: "Harmonisch gemiddelde van precision en recall"
        },
        {
          en: "Arithmetic mean of precision and recall",
          es: "Media aritmética de precisión y recall",
          de: "Arithmetisches Mittel von Präzision und Recall",
          nl: "Rekenkundig gemiddelde van precision en recall"
        },
        {
          en: "Maximum of precision and recall",
          es: "Máximo de precisión y recall",
          de: "Maximum von Präzision und Recall",
          nl: "Maximum van precision en recall"
        },
        {
          en: "Minimum of precision and recall",
          es: "Mínimo de precisión y recall",
          de: "Minimum von Präzision und Recall",
          nl: "Minimum van precision en recall"
        }
      ],
      correct: 0,
      explanation: {
        en: "F1 score is the harmonic mean of precision and recall, providing a single metric that balances both, especially useful for imbalanced datasets.",
        es: "La puntuación F1 es la media armónica de precisión y recall, proporcionando una métrica única que equilibra ambas.",
        de: "F1-Score ist das harmonische Mittel von Präzision und Recall, bietet eine einzige Metrik die beide ausbalanciert.",
        nl: "F1 score is het harmonisch gemiddelde van precision en recall, biedt één metriek die beide balanceert."
      }
    },
    {
      question: {
        en: "What is stratified k-fold cross-validation?",
        es: "¿Qué es la validación cruzada k-fold estratificada?",
        de: "Was ist stratifizierte k-fache Kreuzvalidierung?",
        nl: "Wat is gestratificeerde k-fold kruisvalidatie?"
      },
      options: [
        {
          en: "Preserves class distribution in each fold",
          es: "Preserva distribución de clases en cada pliegue",
          de: "Erhält Klassenverteilung in jeder Falte",
          nl: "Behoudt klasse distributie in elke fold"
        },
        {
          en: "Randomly splits data",
          es: "Divide datos aleatoriamente",
          de: "Teilt Daten zufällig",
          nl: "Splitst data willekeurig"
        },
        {
          en: "Uses time-based splits",
          es: "Usa divisiones basadas en tiempo",
          de: "Verwendet zeitbasierte Aufteilungen",
          nl: "Gebruikt tijd-gebaseerde splits"
        },
        {
          en: "Groups similar samples",
          es: "Agrupa muestras similares",
          de: "Gruppiert ähnliche Proben",
          nl: "Groepeert vergelijkbare samples"
        }
      ],
      correct: 0,
      explanation: {
        en: "Stratified k-fold ensures each fold has approximately the same class distribution as the full dataset, important for imbalanced data.",
        es: "K-fold estratificado asegura que cada pliegue tenga aproximadamente la misma distribución de clases que el conjunto completo.",
        de: "Stratifizierte k-fache Validierung stellt sicher, dass jede Falte ungefähr die gleiche Klassenverteilung wie der vollständige Datensatz hat.",
        nl: "Gestratificeerde k-fold zorgt dat elke fold ongeveer dezelfde klasse distributie heeft als de volledige dataset."
      }
    },
    {
      question: {
        en: "What is the Naive Bayes assumption?",
        es: "¿Cuál es la suposición de Naive Bayes?",
        de: "Was ist die Naive Bayes Annahme?",
        nl: "Wat is de Naive Bayes aanname?"
      },
      options: [
        {
          en: "Features are conditionally independent",
          es: "Características son condicionalmente independientes",
          de: "Merkmale sind bedingt unabhängig",
          nl: "Kenmerken zijn conditioneel onafhankelijk"
        },
        {
          en: "Features are completely dependent",
          es: "Características son completamente dependientes",
          de: "Merkmale sind vollständig abhängig",
          nl: "Kenmerken zijn volledig afhankelijk"
        },
        {
          en: "Data is normally distributed",
          es: "Datos están normalmente distribuidos",
          de: "Daten sind normalverteilt",
          nl: "Data is normaal verdeeld"
        },
        {
          en: "Classes are balanced",
          es: "Clases están equilibradas",
          de: "Klassen sind ausgewogen",
          nl: "Klassen zijn gebalanceerd"
        }
      ],
      correct: 0,
      explanation: {
        en: "Naive Bayes assumes features are conditionally independent given the class label, simplifying probability calculations despite being 'naive'.",
        es: "Naive Bayes asume que las características son condicionalmente independientes dada la etiqueta de clase, simplificando cálculos de probabilidad.",
        de: "Naive Bayes nimmt an, dass Merkmale bedingt unabhängig sind gegeben das Klassenlabel, vereinfacht Wahrscheinlichkeitsberechnungen.",
        nl: "Naive Bayes neemt aan dat kenmerken conditioneel onafhankelijk zijn gegeven het klasse label, vereenvoudigt waarschijnlijkheidsberekeningen."
      }
    },
    {
      question: {
        en: "What is the difference between generative and discriminative models?",
        es: "¿Cuál es la diferencia entre modelos generativos y discriminativos?",
        de: "Was ist der Unterschied zwischen generativen und diskriminativen Modellen?",
        nl: "Wat is het verschil tussen generatieve en discriminatieve modellen?"
      },
      options: [
        {
          en: "Generative models P(X,Y), discriminative P(Y|X)",
          es: "Modelos generativos P(X,Y), discriminativos P(Y|X)",
          de: "Generative Modelle P(X,Y), diskriminative P(Y|X)",
          nl: "Generatieve modellen P(X,Y), discriminatieve P(Y|X)"
        },
        {
          en: "Both model P(Y|X)",
          es: "Ambos modelan P(Y|X)",
          de: "Beide modellieren P(Y|X)",
          nl: "Beide modelleren P(Y|X)"
        },
        {
          en: "Both model P(X,Y)",
          es: "Ambos modelan P(X,Y)",
          de: "Beide modellieren P(X,Y)",
          nl: "Beide modelleren P(X,Y)"
        },
        {
          en: "No mathematical difference",
          es: "Sin diferencia matemática",
          de: "Kein mathematischer Unterschied",
          nl: "Geen wiskundig verschil"
        }
      ],
      correct: 0,
      explanation: {
        en: "Generative models learn joint probability P(X,Y) and can generate new data, while discriminative models directly learn decision boundary P(Y|X).",
        es: "Modelos generativos aprenden probabilidad conjunta P(X,Y) y pueden generar nuevos datos, mientras discriminativos aprenden directamente P(Y|X).",
        de: "Generative Modelle lernen gemeinsame Wahrscheinlichkeit P(X,Y) und können neue Daten generieren, diskriminative lernen direkt P(Y|X).",
        nl: "Generatieve modellen leren gezamenlijke waarschijnlijkheid P(X,Y) en kunnen nieuwe data genereren, discriminatieve leren direct P(Y|X)."
      }
    },
    {
      question: {
        en: "What is manifold learning?",
        es: "¿Qué es el aprendizaje de variedades?",
        de: "Was ist Mannigfaltigkeitslernen?",
        nl: "Wat is manifold learning?"
      },
      options: [
        {
          en: "Learning low-dimensional structure in high-dim data",
          es: "Aprender estructura de baja dimensión en datos de alta dim",
          de: "Lernen niedrigdimensionaler Struktur in hochdim Daten",
          nl: "Leren van laagdimensionale structuur in hoogdim data"
        },
        {
          en: "Learning multiple models",
          es: "Aprender múltiples modelos",
          de: "Mehrere Modelle lernen",
          nl: "Meerdere modellen leren"
        },
        {
          en: "Learning from manifests",
          es: "Aprender de manifiestos",
          de: "Aus Manifesten lernen",
          nl: "Leren van manifesten"
        },
        {
          en: "Learning fold structures",
          es: "Aprender estructuras de pliegue",
          de: "Faltenstrukturen lernen",
          nl: "Vouw structuren leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Manifold learning assumes high-dimensional data lies on a lower-dimensional manifold, finding this structure for dimensionality reduction.",
        es: "El aprendizaje de variedades asume que datos de alta dimensión yacen en una variedad de menor dimensión, encontrando esta estructura.",
        de: "Mannigfaltigkeitslernen nimmt an, dass hochdimensionale Daten auf einer niedrigdimensionalen Mannigfaltigkeit liegen.",
        nl: "Manifold learning neemt aan dat hoogdimensionale data op een laagdimensionale manifold ligt, vindt deze structuur."
      }
    },
    {
      question: {
        en: "What is the VC dimension?",
        es: "¿Qué es la dimensión VC?",
        de: "Was ist die VC-Dimension?",
        nl: "Wat is de VC dimensie?"
      },
      options: [
        {
          en: "Vapnik-Chervonenkis complexity measure",
          es: "Medida de complejidad Vapnik-Chervonenkis",
          de: "Vapnik-Chervonenkis Komplexitätsmaß",
          nl: "Vapnik-Chervonenkis complexiteitsmaat"
        },
        {
          en: "Virtual Component dimension",
          es: "Dimensión de Componente Virtual",
          de: "Virtuelle Komponenten-Dimension",
          nl: "Virtuele Component dimensie"
        },
        {
          en: "Variable Coefficient dimension",
          es: "Dimensión de Coeficiente Variable",
          de: "Variable Koeffizienten-Dimension",
          nl: "Variabele Coëfficiënt dimensie"
        },
        {
          en: "Vector Calculation dimension",
          es: "Dimensión de Cálculo Vectorial",
          de: "Vektor-Berechnungs-Dimension",
          nl: "Vector Berekening dimensie"
        }
      ],
      correct: 0,
      explanation: {
        en: "VC dimension measures the capacity of a classification model - the maximum number of points it can shatter (classify in all possible ways).",
        es: "La dimensión VC mide la capacidad de un modelo de clasificación - el número máximo de puntos que puede fragmentar.",
        de: "VC-Dimension misst die Kapazität eines Klassifikationsmodells - die maximale Anzahl von Punkten die es zertrümmern kann.",
        nl: "VC dimensie meet de capaciteit van een classificatiemodel - het maximum aantal punten dat het kan verbrijzelen."
      }
    },
    {
      question: {
        en: "What is the bias term in neural networks?",
        es: "¿Qué es el término de sesgo en redes neuronales?",
        de: "Was ist der Bias-Term in neuronalen Netzen?",
        nl: "Wat is de bias term in neurale netwerken?"
      },
      options: [
        {
          en: "Shifts activation function",
          es: "Desplaza función de activación",
          de: "Verschiebt Aktivierungsfunktion",
          nl: "Verschuift activatiefunctie"
        },
        {
          en: "Reduces overfitting",
          es: "Reduce sobreajuste",
          de: "Reduziert Überanpassung",
          nl: "Vermindert overfitting"
        },
        {
          en: "Speeds up training",
          es: "Acelera entrenamiento",
          de: "Beschleunigt Training",
          nl: "Versnelt training"
        },
        {
          en: "Normalizes inputs",
          es: "Normaliza entradas",
          de: "Normalisiert Eingaben",
          nl: "Normaliseert inputs"
        }
      ],
      correct: 0,
      explanation: {
        en: "Bias term allows neurons to shift their activation function, enabling the model to fit data that doesn't pass through the origin.",
        es: "El término de sesgo permite a las neuronas desplazar su función de activación, permitiendo al modelo ajustar datos que no pasan por el origen.",
        de: "Bias-Term erlaubt Neuronen ihre Aktivierungsfunktion zu verschieben, ermöglicht dem Modell Daten anzupassen die nicht durch den Ursprung gehen.",
        nl: "Bias term stelt neuronen in staat hun activatiefunctie te verschuiven, maakt het model mogelijk data te fitten die niet door de oorsprong gaat."
      }
    },
    {
      question: {
        en: "What is weight initialization importance?",
        es: "¿Cuál es la importancia de inicialización de pesos?",
        de: "Was ist die Bedeutung der Gewichtsinitialisierung?",
        nl: "Wat is het belang van gewicht initialisatie?"
      },
      options: [
        {
          en: "Prevents vanishing/exploding gradients",
          es: "Previene gradientes que desaparecen/explotan",
          de: "Verhindert verschwindende/explodierende Gradienten",
          nl: "Voorkomt verdwijnende/exploderende gradiënten"
        },
        {
          en: "Only affects training speed",
          es: "Solo afecta velocidad de entrenamiento",
          de: "Beeinflusst nur Trainingsgeschwindigkeit",
          nl: "Beïnvloedt alleen trainingssnelheid"
        },
        {
          en: "Not important",
          es: "No es importante",
          de: "Nicht wichtig",
          nl: "Niet belangrijk"
        },
        {
          en: "Only for deep networks",
          es: "Solo para redes profundas",
          de: "Nur für tiefe Netze",
          nl: "Alleen voor diepe netwerken"
        }
      ],
      correct: 0,
      explanation: {
        en: "Proper weight initialization prevents vanishing/exploding gradients, ensures effective gradient flow, and helps networks converge faster.",
        es: "La inicialización adecuada de pesos previene gradientes que desaparecen/explotan, asegura flujo efectivo de gradientes.",
        de: "Richtige Gewichtsinitialisierung verhindert verschwindende/explodierende Gradienten, sichert effektiven Gradientenfluss.",
        nl: "Goede gewicht initialisatie voorkomt verdwijnende/exploderende gradiënten, zorgt voor effectieve gradiënt flow."
      }
    },
    {
      question: {
        en: "What is Xavier/Glorot initialization?",
        es: "¿Qué es la inicialización Xavier/Glorot?",
        de: "Was ist Xavier/Glorot-Initialisierung?",
        nl: "Wat is Xavier/Glorot initialisatie?"
      },
      options: [
        {
          en: "Scales weights based on layer size",
          es: "Escala pesos basado en tamaño de capa",
          de: "Skaliert Gewichte basierend auf Schichtgröße",
          nl: "Schaalt gewichten gebaseerd op laaggrootte"
        },
        {
          en: "Random uniform initialization",
          es: "Inicialización uniforme aleatoria",
          de: "Zufällige gleichmäßige Initialisierung",
          nl: "Willekeurige uniforme initialisatie"
        },
        {
          en: "Zero initialization",
          es: "Inicialización en cero",
          de: "Null-Initialisierung",
          nl: "Nul initialisatie"
        },
        {
          en: "One initialization",
          es: "Inicialización en uno",
          de: "Eins-Initialisierung",
          nl: "Één initialisatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Xavier initialization scales weights based on the number of input and output neurons, maintaining variance across layers for better gradient flow.",
        es: "La inicialización Xavier escala pesos basándose en el número de neuronas de entrada y salida, manteniendo varianza entre capas.",
        de: "Xavier-Initialisierung skaliert Gewichte basierend auf Anzahl der Ein- und Ausgabeneuronen, erhält Varianz über Schichten.",
        nl: "Xavier initialisatie schaalt gewichten gebaseerd op aantal input en output neuronen, behoudt variantie over lagen."
      }
    },
    {
      question: {
        en: "What is He initialization?",
        es: "¿Qué es la inicialización He?",
        de: "Was ist He-Initialisierung?",
        nl: "Wat is He initialisatie?"
      },
      options: [
        {
          en: "Initialization for ReLU networks",
          es: "Inicialización para redes ReLU",
          de: "Initialisierung für ReLU-Netze",
          nl: "Initialisatie voor ReLU netwerken"
        },
        {
          en: "For sigmoid networks",
          es: "Para redes sigmoide",
          de: "Für Sigmoid-Netze",
          nl: "Voor sigmoid netwerken"
        },
        {
          en: "For linear networks",
          es: "Para redes lineales",
          de: "Für lineare Netze",
          nl: "Voor lineaire netwerken"
        },
        {
          en: "For tanh networks",
          es: "Para redes tanh",
          de: "Für Tanh-Netze",
          nl: "Voor tanh netwerken"
        }
      ],
      correct: 0,
      explanation: {
        en: "He initialization is designed for ReLU activation functions, accounting for the fact that ReLU outputs zero for half of its inputs.",
        es: "La inicialización He está diseñada para funciones de activación ReLU, considerando que ReLU produce cero para la mitad de sus entradas.",
        de: "He-Initialisierung ist für ReLU-Aktivierungsfunktionen konzipiert, berücksichtigt dass ReLU für die Hälfte seiner Eingaben Null ausgibt.",
        nl: "He initialisatie is ontworpen voor ReLU activatiefuncties, houdt rekening dat ReLU nul uitvoert voor de helft van zijn inputs."
      }
    },
    {
      question: {
        en: "What is the difference between SGD and mini-batch GD?",
        es: "¿Cuál es la diferencia entre SGD y GD mini-lote?",
        de: "Was ist der Unterschied zwischen SGD und Mini-Batch GD?",
        nl: "Wat is het verschil tussen SGD en mini-batch GD?"
      },
      options: [
        {
          en: "SGD uses one sample, mini-batch uses subset",
          es: "SGD usa una muestra, mini-lote usa subconjunto",
          de: "SGD nutzt eine Probe, Mini-Batch nutzt Teilmenge",
          nl: "SGD gebruikt één sample, mini-batch gebruikt subset"
        },
        {
          en: "Both use all samples",
          es: "Ambos usan todas las muestras",
          de: "Beide nutzen alle Proben",
          nl: "Beide gebruiken alle samples"
        },
        {
          en: "Both use one sample",
          es: "Ambos usan una muestra",
          de: "Beide nutzen eine Probe",
          nl: "Beide gebruiken één sample"
        },
        {
          en: "No difference",
          es: "Sin diferencia",
          de: "Kein Unterschied",
          nl: "Geen verschil"
        }
      ],
      correct: 0,
      explanation: {
        en: "SGD updates weights after each sample (noisy but fast), mini-batch uses small batches (balanced noise and stability), batch uses all data.",
        es: "SGD actualiza pesos después de cada muestra (ruidoso pero rápido), mini-lote usa lotes pequeños (equilibra ruido y estabilidad).",
        de: "SGD aktualisiert Gewichte nach jeder Probe (verrauscht aber schnell), Mini-Batch nutzt kleine Chargen (ausgewogen).",
        nl: "SGD update gewichten na elke sample (noisy maar snel), mini-batch gebruikt kleine batches (gebalanceerd)."
      }
    },
    {
      question: {
        en: "What is momentum in optimization?",
        es: "¿Qué es el momento en optimización?",
        de: "Was ist Momentum in der Optimierung?",
        nl: "Wat is momentum in optimalisatie?"
      },
      options: [
        {
          en: "Accumulates gradient history",
          es: "Acumula historial de gradientes",
          de: "Akkumuliert Gradientenverlauf",
          nl: "Accumuleert gradiënt geschiedenis"
        },
        {
          en: "Increases learning rate",
          es: "Aumenta tasa de aprendizaje",
          de: "Erhöht Lernrate",
          nl: "Verhoogt learning rate"
        },
        {
          en: "Decreases learning rate",
          es: "Disminuye tasa de aprendizaje",
          de: "Verringert Lernrate",
          nl: "Verlaagt learning rate"
        },
        {
          en: "Randomizes gradients",
          es: "Aleatoriza gradientes",
          de: "Randomisiert Gradienten",
          nl: "Randomiseert gradiënten"
        }
      ],
      correct: 0,
      explanation: {
        en: "Momentum accumulates gradient history to accelerate convergence in consistent directions and dampens oscillations, like a ball rolling downhill.",
        es: "El momento acumula historial de gradientes para acelerar convergencia en direcciones consistentes y amortigua oscilaciones.",
        de: "Momentum akkumuliert Gradientenverlauf um Konvergenz in konsistenten Richtungen zu beschleunigen und Oszillationen zu dämpfen.",
        nl: "Momentum accumuleert gradiënt geschiedenis om convergentie in consistente richtingen te versnellen en oscillaties te dempen."
      }
    },
    {
      question: {
        en: "What is Nesterov accelerated gradient?",
        es: "¿Qué es el gradiente acelerado de Nesterov?",
        de: "Was ist Nesterov beschleunigter Gradient?",
        nl: "Wat is Nesterov versnelde gradiënt?"
      },
      options: [
        {
          en: "Looks ahead before computing gradient",
          es: "Mira adelante antes de calcular gradiente",
          de: "Schaut voraus vor Gradientenberechnung",
          nl: "Kijkt vooruit voor gradiënt berekening"
        },
        {
          en: "Standard momentum",
          es: "Momento estándar",
          de: "Standard-Momentum",
          nl: "Standaard momentum"
        },
        {
          en: "No momentum",
          es: "Sin momento",
          de: "Kein Momentum",
          nl: "Geen momentum"
        },
        {
          en: "Random lookahead",
          es: "Mirada adelante aleatoria",
          de: "Zufälliges Vorausschauen",
          nl: "Willekeurige vooruitblik"
        }
      ],
      correct: 0,
      explanation: {
        en: "Nesterov momentum first makes a jump based on accumulated gradient, then computes gradient at that position for more accurate updates.",
        es: "El momento de Nesterov primero hace un salto basado en gradiente acumulado, luego calcula gradiente en esa posición.",
        de: "Nesterov-Momentum macht zuerst einen Sprung basierend auf akkumuliertem Gradienten, berechnet dann Gradient an dieser Position.",
        nl: "Nesterov momentum maakt eerst een sprong gebaseerd op geaccumuleerde gradiënt, berekent dan gradiënt op die positie."
      }
    },
    {
      question: {
        en: "What is RMSProp optimizer?",
        es: "¿Qué es el optimizador RMSProp?",
        de: "Was ist der RMSProp-Optimierer?",
        nl: "Wat is de RMSProp optimizer?"
      },
      options: [
        {
          en: "Adapts learning rate per parameter",
          es: "Adapta tasa de aprendizaje por parámetro",
          de: "Passt Lernrate pro Parameter an",
          nl: "Past learning rate per parameter aan"
        },
        {
          en: "Fixed learning rate",
          es: "Tasa de aprendizaje fija",
          de: "Feste Lernrate",
          nl: "Vaste learning rate"
        },
        {
          en: "Random learning rate",
          es: "Tasa de aprendizaje aleatoria",
          de: "Zufällige Lernrate",
          nl: "Willekeurige learning rate"
        },
        {
          en: "No learning rate",
          es: "Sin tasa de aprendizaje",
          de: "Keine Lernrate",
          nl: "Geen learning rate"
        }
      ],
      correct: 0,
      explanation: {
        en: "RMSProp (Root Mean Square Propagation) adapts learning rates for each parameter using moving average of squared gradients, preventing oscillations.",
        es: "RMSProp adapta tasas de aprendizaje para cada parámetro usando promedio móvil de gradientes cuadrados, previniendo oscilaciones.",
        de: "RMSProp passt Lernraten für jeden Parameter an mittels gleitendem Durchschnitt quadrierter Gradienten, verhindert Oszillationen.",
        nl: "RMSProp past learning rates voor elke parameter aan met voortschrijdend gemiddelde van gekwadrateerde gradiënten."
      }
    },
    {
      question: {
        en: "What is learning rate scheduling?",
        es: "¿Qué es la programación de tasa de aprendizaje?",
        de: "Was ist Lernraten-Scheduling?",
        nl: "Wat is learning rate scheduling?"
      },
      options: [
        {
          en: "Changing learning rate during training",
          es: "Cambiar tasa de aprendizaje durante entrenamiento",
          de: "Lernrate während Training ändern",
          nl: "Learning rate veranderen tijdens training"
        },
        {
          en: "Fixed learning rate",
          es: "Tasa de aprendizaje fija",
          de: "Feste Lernrate",
          nl: "Vaste learning rate"
        },
        {
          en: "Random learning rate",
          es: "Tasa de aprendizaje aleatoria",
          de: "Zufällige Lernrate",
          nl: "Willekeurige learning rate"
        },
        {
          en: "No learning rate",
          es: "Sin tasa de aprendizaje",
          de: "Keine Lernrate",
          nl: "Geen learning rate"
        }
      ],
      correct: 0,
      explanation: {
        en: "Learning rate scheduling adjusts the learning rate during training, typically decreasing it over time for fine-tuning as the model converges.",
        es: "La programación de tasa de aprendizaje ajusta la tasa durante el entrenamiento, típicamente disminuyéndola con el tiempo.",
        de: "Lernraten-Scheduling passt die Lernrate während des Trainings an, typischerweise abnehmend über Zeit für Feinabstimmung.",
        nl: "Learning rate scheduling past de learning rate aan tijdens training, typisch afnemend over tijd voor fine-tuning."
      }
    },
    {
      question: {
        en: "What is cosine annealing?",
        es: "¿Qué es el recocido coseno?",
        de: "Was ist Kosinus-Annealing?",
        nl: "Wat is cosine annealing?"
      },
      options: [
        {
          en: "Learning rate follows cosine curve",
          es: "Tasa de aprendizaje sigue curva coseno",
          de: "Lernrate folgt Kosinuskurve",
          nl: "Learning rate volgt cosinus curve"
        },
        {
          en: "Linear decay",
          es: "Decaimiento lineal",
          de: "Linearer Zerfall",
          nl: "Lineair verval"
        },
        {
          en: "Exponential decay",
          es: "Decaimiento exponencial",
          de: "Exponentieller Zerfall",
          nl: "Exponentieel verval"
        },
        {
          en: "Step decay",
          es: "Decaimiento por pasos",
          de: "Stufenweiser Zerfall",
          nl: "Stap verval"
        }
      ],
      correct: 0,
      explanation: {
        en: "Cosine annealing schedules learning rate following a cosine curve, allowing periodic warm restarts for escaping local minima.",
        es: "El recocido coseno programa la tasa de aprendizaje siguiendo una curva coseno, permitiendo reinicios cálidos periódicos.",
        de: "Kosinus-Annealing plant Lernrate nach einer Kosinuskurve, erlaubt periodische Warmstarts zum Entkommen aus lokalen Minima.",
        nl: "Cosine annealing plant learning rate volgens een cosinus curve, staat periodieke warme herstarts toe."
      }
    },
    {
      question: {
        en: "What is curriculum learning?",
        es: "¿Qué es el aprendizaje curricular?",
        de: "Was ist Curriculum-Lernen?",
        nl: "Wat is curriculum learning?"
      },
      options: [
        {
          en: "Training on easy samples first",
          es: "Entrenar en muestras fáciles primero",
          de: "Zuerst auf einfachen Proben trainieren",
          nl: "Trainen op makkelijke samples eerst"
        },
        {
          en: "Random sample order",
          es: "Orden de muestra aleatorio",
          de: "Zufällige Probenreihenfolge",
          nl: "Willekeurige sample volgorde"
        },
        {
          en: "Hard samples first",
          es: "Muestras difíciles primero",
          de: "Schwere Proben zuerst",
          nl: "Moeilijke samples eerst"
        },
        {
          en: "All samples equally",
          es: "Todas las muestras igualmente",
          de: "Alle Proben gleich",
          nl: "Alle samples gelijk"
        }
      ],
      correct: 0,
      explanation: {
        en: "Curriculum learning presents training samples in order of increasing difficulty, mimicking human learning for better convergence.",
        es: "El aprendizaje curricular presenta muestras de entrenamiento en orden de dificultad creciente, imitando aprendizaje humano.",
        de: "Curriculum-Lernen präsentiert Trainingsproben in steigender Schwierigkeit, ahmt menschliches Lernen nach.",
        nl: "Curriculum learning presenteert trainingssamples in oplopende moeilijkheidsgraad, bootst menselijk leren na."
      }
    },
    {
      question: {
        en: "What is few-shot learning?",
        es: "¿Qué es el aprendizaje de pocos ejemplos?",
        de: "Was ist Few-Shot-Lernen?",
        nl: "Wat is few-shot learning?"
      },
      options: [
        {
          en: "Learning from very few examples",
          es: "Aprender de muy pocos ejemplos",
          de: "Aus sehr wenigen Beispielen lernen",
          nl: "Leren van zeer weinig voorbeelden"
        },
        {
          en: "Learning from many examples",
          es: "Aprender de muchos ejemplos",
          de: "Aus vielen Beispielen lernen",
          nl: "Leren van veel voorbeelden"
        },
        {
          en: "Learning without examples",
          es: "Aprender sin ejemplos",
          de: "Ohne Beispiele lernen",
          nl: "Leren zonder voorbeelden"
        },
        {
          en: "Learning from infinite examples",
          es: "Aprender de ejemplos infinitos",
          de: "Aus unendlichen Beispielen lernen",
          nl: "Leren van oneindige voorbeelden"
        }
      ],
      correct: 0,
      explanation: {
        en: "Few-shot learning trains models to generalize from very few examples per class, crucial when labeled data is scarce or expensive.",
        es: "El aprendizaje de pocos ejemplos entrena modelos para generalizar desde muy pocos ejemplos por clase.",
        de: "Few-Shot-Lernen trainiert Modelle zur Generalisierung aus sehr wenigen Beispielen pro Klasse.",
        nl: "Few-shot learning traint modellen om te generaliseren van zeer weinig voorbeelden per klasse."
      }
    },
    {
      question: {
        en: "What is meta-learning?",
        es: "¿Qué es el meta-aprendizaje?",
        de: "Was ist Meta-Lernen?",
        nl: "Wat is meta-learning?"
      },
      options: [
        {
          en: "Learning to learn",
          es: "Aprender a aprender",
          de: "Lernen zu lernen",
          nl: "Leren te leren"
        },
        {
          en: "Learning metadata",
          es: "Aprender metadatos",
          de: "Metadaten lernen",
          nl: "Metadata leren"
        },
        {
          en: "Learning about metals",
          es: "Aprender sobre metales",
          de: "Über Metalle lernen",
          nl: "Leren over metalen"
        },
        {
          en: "Learning metrics",
          es: "Aprender métricas",
          de: "Metriken lernen",
          nl: "Metrieken leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Meta-learning or 'learning to learn' trains models to adapt quickly to new tasks using experience from previous tasks.",
        es: "El meta-aprendizaje o 'aprender a aprender' entrena modelos para adaptarse rápidamente a nuevas tareas usando experiencia previa.",
        de: "Meta-Lernen oder 'Lernen zu lernen' trainiert Modelle sich schnell an neue Aufgaben anzupassen mittels Erfahrung.",
        nl: "Meta-learning of 'leren te leren' traint modellen om zich snel aan te passen aan nieuwe taken met ervaring."
      }
    },
    {
      question: {
        en: "What is MAML algorithm?",
        es: "¿Qué es el algoritmo MAML?",
        de: "Was ist der MAML-Algorithmus?",
        nl: "Wat is het MAML algoritme?"
      },
      options: [
        {
          en: "Model-Agnostic Meta-Learning",
          es: "Meta-Aprendizaje Agnóstico al Modelo",
          de: "Modell-agnostisches Meta-Lernen",
          nl: "Model-Agnostisch Meta-Leren"
        },
        {
          en: "Maximum Absolute Machine Learning",
          es: "Aprendizaje Automático Máximo Absoluto",
          de: "Maximales absolutes maschinelles Lernen",
          nl: "Maximum Absolute Machine Learning"
        },
        {
          en: "Multi-Agent Machine Learning",
          es: "Aprendizaje Automático Multi-Agente",
          de: "Multi-Agenten maschinelles Lernen",
          nl: "Multi-Agent Machine Learning"
        },
        {
          en: "Minimal Adaptive Machine Learning",
          es: "Aprendizaje Automático Adaptativo Mínimo",
          de: "Minimales adaptives maschinelles Lernen",
          nl: "Minimaal Adaptief Machine Learning"
        }
      ],
      correct: 0,
      explanation: {
        en: "MAML finds model initialization that can be quickly fine-tuned for new tasks with few gradient steps, enabling fast adaptation.",
        es: "MAML encuentra inicialización del modelo que puede ser rápidamente ajustada para nuevas tareas con pocos pasos de gradiente.",
        de: "MAML findet Modellinitialisierung die schnell für neue Aufgaben mit wenigen Gradientenschritten feinabgestimmt werden kann.",
        nl: "MAML vindt model initialisatie die snel gefinetuned kan worden voor nieuwe taken met weinig gradiënt stappen."
      }
    },
    {
      question: {
        en: "What is contrastive learning?",
        es: "¿Qué es el aprendizaje contrastivo?",
        de: "Was ist kontrastives Lernen?",
        nl: "Wat is contrastief leren?"
      },
      options: [
        {
          en: "Learning by comparing similar and different samples",
          es: "Aprender comparando muestras similares y diferentes",
          de: "Lernen durch Vergleich ähnlicher und verschiedener Proben",
          nl: "Leren door vergelijken van vergelijkbare en verschillende samples"
        },
        {
          en: "Learning contrasts in images",
          es: "Aprender contrastes en imágenes",
          de: "Kontraste in Bildern lernen",
          nl: "Contrasten in afbeeldingen leren"
        },
        {
          en: "Contradictory learning",
          es: "Aprendizaje contradictorio",
          de: "Widersprüchliches Lernen",
          nl: "Tegenstrijdig leren"
        },
        {
          en: "Controlled learning",
          es: "Aprendizaje controlado",
          de: "Kontrolliertes Lernen",
          nl: "Gecontroleerd leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Contrastive learning learns representations by pulling similar samples together and pushing different samples apart in embedding space.",
        es: "El aprendizaje contrastivo aprende representaciones acercando muestras similares y alejando muestras diferentes en el espacio de incrustación.",
        de: "Kontrastives Lernen lernt Repräsentationen durch Zusammenziehen ähnlicher und Abstoßen verschiedener Proben im Einbettungsraum.",
        nl: "Contrastief leren leert representaties door vergelijkbare samples samen te trekken en verschillende uit elkaar te duwen."
      }
    },
    {
      question: {
        en: "What is SimCLR?",
        es: "¿Qué es SimCLR?",
        de: "Was ist SimCLR?",
        nl: "Wat is SimCLR?"
      },
      options: [
        {
          en: "Simple Contrastive Learning framework",
          es: "Marco de Aprendizaje Contrastivo Simple",
          de: "Einfaches kontrastives Lern-Framework",
          nl: "Simpel Contrastief Leren framework"
        },
        {
          en: "Simulation Classifier",
          es: "Clasificador de Simulación",
          de: "Simulationsklassifikator",
          nl: "Simulatie Classifier"
        },
        {
          en: "Similar Clustering",
          es: "Agrupamiento Similar",
          de: "Ähnliches Clustering",
          nl: "Vergelijkbaar Clusteren"
        },
        {
          en: "Simple Clear Learning",
          es: "Aprendizaje Claro Simple",
          de: "Einfaches klares Lernen",
          nl: "Simpel Duidelijk Leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "SimCLR (Simple Contrastive Learning of Representations) learns visual representations by maximizing agreement between augmented views of same data.",
        es: "SimCLR aprende representaciones visuales maximizando acuerdo entre vistas aumentadas de los mismos datos.",
        de: "SimCLR lernt visuelle Repräsentationen durch Maximierung der Übereinstimmung zwischen erweiterten Ansichten derselben Daten.",
        nl: "SimCLR leert visuele representaties door overeenkomst tussen geaugmenteerde views van dezelfde data te maximaliseren."
      }
    },
    {
      question: {
        en: "What is knowledge graph embedding?",
        es: "¿Qué es la incrustación de grafo de conocimiento?",
        de: "Was ist Wissensgraph-Einbettung?",
        nl: "Wat is knowledge graph embedding?"
      },
      options: [
        {
          en: "Representing entities and relations as vectors",
          es: "Representar entidades y relaciones como vectores",
          de: "Entitäten und Relationen als Vektoren darstellen",
          nl: "Entiteiten en relaties als vectoren representeren"
        },
        {
          en: "Drawing knowledge graphs",
          es: "Dibujar grafos de conocimiento",
          de: "Wissensgraphen zeichnen",
          nl: "Kennisgrafieken tekenen"
        },
        {
          en: "Storing knowledge in graphs",
          es: "Almacenar conocimiento en grafos",
          de: "Wissen in Graphen speichern",
          nl: "Kennis opslaan in grafieken"
        },
        {
          en: "Graphing knowledge metrics",
          es: "Graficar métricas de conocimiento",
          de: "Wissensmetriken grafisch darstellen",
          nl: "Kennismetrieken grafieken"
        }
      ],
      correct: 0,
      explanation: {
        en: "Knowledge graph embedding represents entities and relations in continuous vector spaces, enabling reasoning and link prediction in knowledge graphs.",
        es: "La incrustación de grafo de conocimiento representa entidades y relaciones en espacios vectoriales continuos.",
        de: "Wissensgraph-Einbettung stellt Entitäten und Relationen in kontinuierlichen Vektorräumen dar.",
        nl: "Knowledge graph embedding representeert entiteiten en relaties in continue vectorruimtes."
      }
    },
    {
      question: {
        en: "What is graph neural network (GNN)?",
        es: "¿Qué es una red neuronal de grafos?",
        de: "Was ist ein Graph Neural Network?",
        nl: "Wat is een graph neuraal netwerk?"
      },
      options: [
        {
          en: "Neural network for graph-structured data",
          es: "Red neuronal para datos estructurados en grafos",
          de: "Neuronales Netz für graphstrukturierte Daten",
          nl: "Neuraal netwerk voor graaf-gestructureerde data"
        },
        {
          en: "Network for creating graphs",
          es: "Red para crear grafos",
          de: "Netzwerk zum Erstellen von Graphen",
          nl: "Netwerk voor het maken van grafieken"
        },
        {
          en: "Graphical neural interface",
          es: "Interfaz neural gráfica",
          de: "Grafische neuronale Schnittstelle",
          nl: "Grafische neurale interface"
        },
        {
          en: "General neural network",
          es: "Red neuronal general",
          de: "Allgemeines neuronales Netz",
          nl: "Algemeen neuraal netwerk"
        }
      ],
      correct: 0,
      explanation: {
        en: "GNNs process graph-structured data by aggregating information from node neighbors, capturing both node features and graph topology.",
        es: "Las GNN procesan datos estructurados en grafos agregando información de vecinos de nodos.",
        de: "GNNs verarbeiten graphstrukturierte Daten durch Aggregation von Information von Knotennachbarn.",
        nl: "GNN's verwerken graaf-gestructureerde data door informatie van node buren te aggregeren."
      }
    },
    {
      question: {
        en: "What is attention mechanism?",
        es: "¿Qué es el mecanismo de atención?",
        de: "Was ist der Aufmerksamkeitsmechanismus?",
        nl: "Wat is het attentiemechanisme?"
      },
      options: [
        {
          en: "Focusing on relevant parts of input",
          es: "Enfocarse en partes relevantes de entrada",
          de: "Fokussierung auf relevante Teile der Eingabe",
          nl: "Focussen op relevante delen van input"
        },
        {
          en: "Paying attention to user",
          es: "Prestar atención al usuario",
          de: "Aufmerksamkeit auf Benutzer",
          nl: "Aandacht geven aan gebruiker"
        },
        {
          en: "Attention deficit detection",
          es: "Detección de déficit de atención",
          de: "Aufmerksamkeitsdefizit-Erkennung",
          nl: "Aandachtstekort detectie"
        },
        {
          en: "Attending to errors",
          es: "Atender a errores",
          de: "Fehler beachten",
          nl: "Aandacht voor fouten"
        }
      ],
      correct: 0,
      explanation: {
        en: "Attention mechanism allows models to focus on relevant parts of input when producing output, weighing different parts by importance.",
        es: "El mecanismo de atención permite a los modelos enfocarse en partes relevantes de entrada al producir salida.",
        de: "Aufmerksamkeitsmechanismus erlaubt Modellen sich auf relevante Teile der Eingabe zu fokussieren bei der Ausgabeerzeugung.",
        nl: "Attentiemechanisme stelt modellen in staat te focussen op relevante delen van input bij het produceren van output."
      }
    },
    {
      question: {
        en: "What is self-attention?",
        es: "¿Qué es la autoatención?",
        de: "Was ist Selbstaufmerksamkeit?",
        nl: "Wat is zelf-attentie?"
      },
      options: [
        {
          en: "Attention within same sequence",
          es: "Atención dentro de misma secuencia",
          de: "Aufmerksamkeit innerhalb derselben Sequenz",
          nl: "Attentie binnen dezelfde sequentie"
        },
        {
          en: "Model attending to itself",
          es: "Modelo atendiéndose a sí mismo",
          de: "Modell beachtet sich selbst",
          nl: "Model dat op zichzelf let"
        },
        {
          en: "Selfish attention",
          es: "Atención egoísta",
          de: "Egoistische Aufmerksamkeit",
          nl: "Egoïstische attentie"
        },
        {
          en: "Automatic attention",
          es: "Atención automática",
          de: "Automatische Aufmerksamkeit",
          nl: "Automatische attentie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Self-attention computes attention weights between all positions in the same sequence, capturing dependencies regardless of distance.",
        es: "La autoatención calcula pesos de atención entre todas las posiciones en la misma secuencia.",
        de: "Selbstaufmerksamkeit berechnet Aufmerksamkeitsgewichte zwischen allen Positionen in derselben Sequenz.",
        nl: "Zelf-attentie berekent attentie gewichten tussen alle posities in dezelfde sequentie."
      }
    },
    {
      question: {
        en: "What is multi-head attention?",
        es: "¿Qué es la atención multicabeza?",
        de: "Was ist Multi-Head-Aufmerksamkeit?",
        nl: "Wat is multi-head attentie?"
      },
      options: [
        {
          en: "Multiple parallel attention operations",
          es: "Múltiples operaciones de atención paralelas",
          de: "Mehrere parallele Aufmerksamkeitsoperationen",
          nl: "Meerdere parallelle attentie operaties"
        },
        {
          en: "Attention with multiple outputs",
          es: "Atención con múltiples salidas",
          de: "Aufmerksamkeit mit mehreren Ausgängen",
          nl: "Attentie met meerdere outputs"
        },
        {
          en: "Multiple model heads",
          es: "Múltiples cabezas de modelo",
          de: "Mehrere Modellköpfe",
          nl: "Meerdere model hoofden"
        },
        {
          en: "Headed attention list",
          es: "Lista de atención encabezada",
          de: "Überschriftete Aufmerksamkeitsliste",
          nl: "Gekopte attentie lijst"
        }
      ],
      correct: 0,
      explanation: {
        en: "Multi-head attention runs multiple attention operations in parallel with different projections, capturing various types of relationships.",
        es: "La atención multicabeza ejecuta múltiples operaciones de atención en paralelo con diferentes proyecciones.",
        de: "Multi-Head-Aufmerksamkeit führt mehrere Aufmerksamkeitsoperationen parallel mit verschiedenen Projektionen aus.",
        nl: "Multi-head attentie voert meerdere attentie operaties parallel uit met verschillende projecties."
      }
    },
    {
      question: {
        en: "What is positional encoding?",
        es: "¿Qué es la codificación posicional?",
        de: "Was ist Positionskodierung?",
        nl: "Wat is positionele codering?"
      },
      options: [
        {
          en: "Adding position information to embeddings",
          es: "Agregar información de posición a incrustaciones",
          de: "Positionsinformation zu Einbettungen hinzufügen",
          nl: "Positie-informatie toevoegen aan embeddings"
        },
        {
          en: "Encoding GPS positions",
          es: "Codificar posiciones GPS",
          de: "GPS-Positionen kodieren",
          nl: "GPS posities coderen"
        },
        {
          en: "Position tracking",
          es: "Seguimiento de posición",
          de: "Positionsverfolgung",
          nl: "Positie tracking"
        },
        {
          en: "Positive encoding only",
          es: "Solo codificación positiva",
          de: "Nur positive Kodierung",
          nl: "Alleen positieve codering"
        }
      ],
      correct: 0,
      explanation: {
        en: "Positional encoding adds position information to input embeddings in Transformers, since self-attention lacks inherent position awareness.",
        es: "La codificación posicional agrega información de posición a las incrustaciones de entrada en Transformers.",
        de: "Positionskodierung fügt Positionsinformation zu Eingabeeinbettungen in Transformers hinzu.",
        nl: "Positionele codering voegt positie-informatie toe aan input embeddings in Transformers."
      }
    },
    {
      question: {
        en: "What is masked language modeling?",
        es: "¿Qué es el modelado de lenguaje enmascarado?",
        de: "Was ist maskierte Sprachmodellierung?",
        nl: "Wat is gemaskeerde taalmodellering?"
      },
      options: [
        {
          en: "Predicting masked tokens in text",
          es: "Predecir tokens enmascarados en texto",
          de: "Maskierte Token im Text vorhersagen",
          nl: "Gemaskeerde tokens in tekst voorspellen"
        },
        {
          en: "Hiding language models",
          es: "Ocultar modelos de lenguaje",
          de: "Sprachmodelle verstecken",
          nl: "Taalmodellen verbergen"
        },
        {
          en: "Masking bad language",
          es: "Enmascarar lenguaje malo",
          de: "Schlechte Sprache maskieren",
          nl: "Slechte taal maskeren"
        },
        {
          en: "Language with masks",
          es: "Lenguaje con máscaras",
          de: "Sprache mit Masken",
          nl: "Taal met maskers"
        }
      ],
      correct: 0,
      explanation: {
        en: "Masked language modeling trains models by randomly masking tokens and predicting them from context, used in BERT pre-training.",
        es: "El modelado de lenguaje enmascarado entrena modelos enmascarando tokens aleatoriamente y prediciendo desde contexto.",
        de: "Maskierte Sprachmodellierung trainiert Modelle durch zufälliges Maskieren von Token und Vorhersage aus Kontext.",
        nl: "Gemaskeerde taalmodellering traint modellen door willekeurig tokens te maskeren en te voorspellen uit context."
      }
    },
    {
      question: {
        en: "What is next sentence prediction?",
        es: "¿Qué es la predicción de siguiente oración?",
        de: "Was ist Nächste-Satz-Vorhersage?",
        nl: "Wat is volgende zin voorspelling?"
      },
      options: [
        {
          en: "Predicting if sentences follow each other",
          es: "Predecir si oraciones siguen entre sí",
          de: "Vorhersagen ob Sätze aufeinander folgen",
          nl: "Voorspellen of zinnen elkaar volgen"
        },
        {
          en: "Generating next sentence",
          es: "Generar siguiente oración",
          de: "Nächsten Satz generieren",
          nl: "Volgende zin genereren"
        },
        {
          en: "Sentence completion",
          es: "Completar oración",
          de: "Satz vervollständigen",
          nl: "Zin voltooien"
        },
        {
          en: "Next word prediction",
          es: "Predicción de siguiente palabra",
          de: "Nächstes-Wort-Vorhersage",
          nl: "Volgend woord voorspelling"
        }
      ],
      correct: 0,
      explanation: {
        en: "Next sentence prediction trains models to determine if two sentences are consecutive in original text, improving understanding of relationships.",
        es: "La predicción de siguiente oración entrena modelos para determinar si dos oraciones son consecutivas en texto original.",
        de: "Nächste-Satz-Vorhersage trainiert Modelle zu bestimmen ob zwei Sätze im Originaltext aufeinander folgen.",
        nl: "Volgende zin voorspelling traint modellen om te bepalen of twee zinnen opeenvolgend zijn in originele tekst."
      }
    },
    {
      question: {
        en: "What is GPT architecture based on?",
        es: "¿En qué se basa la arquitectura GPT?",
        de: "Worauf basiert die GPT-Architektur?",
        nl: "Waar is GPT architectuur op gebaseerd?"
      },
      options: [
        {
          en: "Transformer decoder only",
          es: "Solo decodificador Transformer",
          de: "Nur Transformer-Decoder",
          nl: "Alleen Transformer decoder"
        },
        {
          en: "Transformer encoder only",
          es: "Solo codificador Transformer",
          de: "Nur Transformer-Encoder",
          nl: "Alleen Transformer encoder"
        },
        {
          en: "Both encoder and decoder",
          es: "Ambos codificador y decodificador",
          de: "Sowohl Encoder als auch Decoder",
          nl: "Zowel encoder als decoder"
        },
        {
          en: "CNN architecture",
          es: "Arquitectura CNN",
          de: "CNN-Architektur",
          nl: "CNN architectuur"
        }
      ],
      correct: 0,
      explanation: {
        en: "GPT (Generative Pre-trained Transformer) uses only the decoder part of Transformer architecture with masked self-attention for autoregressive generation.",
        es: "GPT usa solo la parte decodificadora de la arquitectura Transformer con autoatención enmascarada para generación autorregresiva.",
        de: "GPT nutzt nur den Decoder-Teil der Transformer-Architektur mit maskierter Selbstaufmerksamkeit für autoregressive Generierung.",
        nl: "GPT gebruikt alleen het decoder deel van Transformer architectuur met gemaskeerde zelf-attentie voor autoregressieve generatie."
      }
    },
    {
      question: {
        en: "What is prompt engineering?",
        es: "¿Qué es la ingeniería de prompts?",
        de: "Was ist Prompt-Engineering?",
        nl: "Wat is prompt engineering?"
      },
      options: [
        {
          en: "Designing effective input prompts",
          es: "Diseñar prompts de entrada efectivos",
          de: "Effektive Eingabeaufforderungen entwerfen",
          nl: "Effectieve input prompts ontwerpen"
        },
        {
          en: "Engineering fast responses",
          es: "Ingeniería de respuestas rápidas",
          de: "Schnelle Antworten entwickeln",
          nl: "Snelle antwoorden engineeren"
        },
        {
          en: "Prompt delivery system",
          es: "Sistema de entrega de prompts",
          de: "Prompt-Liefersystem",
          nl: "Prompt leveringssysteem"
        },
        {
          en: "Engineering prompts only",
          es: "Solo prompts de ingeniería",
          de: "Nur Ingenieur-Prompts",
          nl: "Alleen engineering prompts"
        }
      ],
      correct: 0,
      explanation: {
        en: "Prompt engineering designs effective input prompts to guide language models toward desired outputs without retraining.",
        es: "La ingeniería de prompts diseña prompts de entrada efectivos para guiar modelos de lenguaje hacia salidas deseadas.",
        de: "Prompt-Engineering entwirft effektive Eingabeaufforderungen um Sprachmodelle zu gewünschten Ausgaben zu führen.",
        nl: "Prompt engineering ontwerpt effectieve input prompts om taalmodellen naar gewenste outputs te leiden."
      }
    },
    {
      question: {
        en: "What is in-context learning?",
        es: "¿Qué es el aprendizaje en contexto?",
        de: "Was ist In-Context-Lernen?",
        nl: "Wat is in-context leren?"
      },
      options: [
        {
          en: "Learning from examples in prompt",
          es: "Aprender de ejemplos en prompt",
          de: "Aus Beispielen im Prompt lernen",
          nl: "Leren van voorbeelden in prompt"
        },
        {
          en: "Learning context only",
          es: "Aprender solo contexto",
          de: "Nur Kontext lernen",
          nl: "Alleen context leren"
        },
        {
          en: "Contextual training",
          es: "Entrenamiento contextual",
          de: "Kontextuelles Training",
          nl: "Contextuele training"
        },
        {
          en: "Learning in context menu",
          es: "Aprender en menú contextual",
          de: "Im Kontextmenü lernen",
          nl: "Leren in context menu"
        }
      ],
      correct: 0,
      explanation: {
        en: "In-context learning allows language models to learn new tasks from examples provided in the prompt without updating parameters.",
        es: "El aprendizaje en contexto permite a modelos de lenguaje aprender nuevas tareas de ejemplos proporcionados en el prompt.",
        de: "In-Context-Lernen erlaubt Sprachmodellen neue Aufgaben aus Beispielen im Prompt zu lernen ohne Parameter zu aktualisieren.",
        nl: "In-context leren stelt taalmodellen in staat nieuwe taken te leren van voorbeelden in de prompt zonder parameters bij te werken."
      }
    },
    {
      question: {
        en: "What is chain-of-thought prompting?",
        es: "¿Qué es el prompting de cadena de pensamiento?",
        de: "Was ist Chain-of-Thought-Prompting?",
        nl: "Wat is chain-of-thought prompting?"
      },
      options: [
        {
          en: "Prompting model to show reasoning steps",
          es: "Solicitar al modelo mostrar pasos de razonamiento",
          de: "Modell auffordern Denkschritte zu zeigen",
          nl: "Model vragen redeneerstappen te tonen"
        },
        {
          en: "Chaining multiple prompts",
          es: "Encadenar múltiples prompts",
          de: "Mehrere Prompts verketten",
          nl: "Meerdere prompts ketenen"
        },
        {
          en: "Thoughtful prompting",
          es: "Prompting reflexivo",
          de: "Durchdachtes Prompting",
          nl: "Doordacht prompten"
        },
        {
          en: "Chain of commands",
          es: "Cadena de comandos",
          de: "Befehlskette",
          nl: "Keten van commando's"
        }
      ],
      correct: 0,
      explanation: {
        en: "Chain-of-thought prompting encourages models to show intermediate reasoning steps, improving performance on complex reasoning tasks.",
        es: "El prompting de cadena de pensamiento anima a modelos a mostrar pasos intermedios de razonamiento.",
        de: "Chain-of-Thought-Prompting ermutigt Modelle Zwischenschritte des Denkens zu zeigen.",
        nl: "Chain-of-thought prompting moedigt modellen aan tussenliggende redeneerstappen te tonen."
      }
    },
    {
      question: {
        en: "What is instruction tuning?",
        es: "¿Qué es el ajuste de instrucciones?",
        de: "Was ist Instruktions-Tuning?",
        nl: "Wat is instructie tuning?"
      },
      options: [
        {
          en: "Fine-tuning on instruction-following data",
          es: "Ajuste fino en datos de seguimiento de instrucciones",
          de: "Feinabstimmung auf instruktionsfolgende Daten",
          nl: "Fine-tuning op instructie-volgende data"
        },
        {
          en: "Tuning instructions only",
          es: "Ajustar solo instrucciones",
          de: "Nur Anweisungen abstimmen",
          nl: "Alleen instructies tunen"
        },
        {
          en: "Musical instruction tuning",
          es: "Afinación de instrucción musical",
          de: "Musikalische Anweisungsabstimmung",
          nl: "Muzikale instructie tuning"
        },
        {
          en: "Tuning for instructors",
          es: "Ajuste para instructores",
          de: "Abstimmung für Ausbilder",
          nl: "Tuning voor instructeurs"
        }
      ],
      correct: 0,
      explanation: {
        en: "Instruction tuning fine-tunes language models on datasets of instructions and responses, improving their ability to follow user instructions.",
        es: "El ajuste de instrucciones afina modelos de lenguaje en conjuntos de datos de instrucciones y respuestas.",
        de: "Instruktions-Tuning stimmt Sprachmodelle auf Datensätzen von Anweisungen und Antworten ab.",
        nl: "Instructie tuning fine-tunet taalmodellen op datasets van instructies en antwoorden."
      }
    },
    {
      question: {
        en: "What is RLHF?",
        es: "¿Qué es RLHF?",
        de: "Was ist RLHF?",
        nl: "Wat is RLHF?"
      },
      options: [
        {
          en: "Reinforcement Learning from Human Feedback",
          es: "Aprendizaje por Refuerzo con Retroalimentación Humana",
          de: "Verstärkungslernen aus menschlichem Feedback",
          nl: "Reinforcement Learning van Menselijke Feedback"
        },
        {
          en: "Really Large High Frequency",
          es: "Frecuencia Alta Realmente Grande",
          de: "Wirklich große hohe Frequenz",
          nl: "Echt Grote Hoge Frequentie"
        },
        {
          en: "Recursive Learning Hybrid Function",
          es: "Función Híbrida de Aprendizaje Recursivo",
          de: "Rekursive Lern-Hybrid-Funktion",
          nl: "Recursieve Leer Hybride Functie"
        },
        {
          en: "Random Learning High Features",
          es: "Características Altas de Aprendizaje Aleatorio",
          de: "Zufällige Lern-High-Features",
          nl: "Willekeurige Leer Hoge Kenmerken"
        }
      ],
      correct: 0,
      explanation: {
        en: "RLHF uses human feedback to train a reward model, then uses reinforcement learning to align language models with human preferences.",
        es: "RLHF usa retroalimentación humana para entrenar un modelo de recompensa, luego usa aprendizaje por refuerzo para alinear modelos.",
        de: "RLHF nutzt menschliches Feedback um ein Belohnungsmodell zu trainieren, dann Verstärkungslernen zur Ausrichtung.",
        nl: "RLHF gebruikt menselijke feedback om een beloningsmodel te trainen, gebruikt dan reinforcement learning voor afstemming."
      }
    },
    {
      question: {
        en: "What is constitutional AI?",
        es: "¿Qué es la IA constitucional?",
        de: "Was ist konstitutionelle KI?",
        nl: "Wat is constitutionele AI?"
      },
      options: [
        {
          en: "AI trained with principles and self-critique",
          es: "IA entrenada con principios y autocrítica",
          de: "KI trainiert mit Prinzipien und Selbstkritik",
          nl: "AI getraind met principes en zelfkritiek"
        },
        {
          en: "AI for constitutional law",
          es: "IA para derecho constitucional",
          de: "KI für Verfassungsrecht",
          nl: "AI voor constitutioneel recht"
        },
        {
          en: "Government AI systems",
          es: "Sistemas de IA gubernamentales",
          de: "Regierungs-KI-Systeme",
          nl: "Overheids AI-systemen"
        },
        {
          en: "Constitutional rights for AI",
          es: "Derechos constitucionales para IA",
          de: "Verfassungsrechte für KI",
          nl: "Constitutionele rechten voor AI"
        }
      ],
      correct: 0,
      explanation: {
        en: "Constitutional AI trains models using a set of principles, having the AI critique and revise its own outputs to align with these principles.",
        es: "La IA constitucional entrena modelos usando un conjunto de principios, haciendo que la IA critique y revise sus propias salidas.",
        de: "Konstitutionelle KI trainiert Modelle mit einer Reihe von Prinzipien, lässt die KI ihre eigenen Ausgaben kritisieren und überarbeiten.",
        nl: "Constitutionele AI traint modellen met een set principes, laat de AI zijn eigen outputs bekritiseren en herzien."
      }
    },
    {
      question: {
        en: "What is mixture of experts (MoE)?",
        es: "¿Qué es la mezcla de expertos?",
        de: "Was ist Mixture of Experts?",
        nl: "Wat is mixture of experts?"
      },
      options: [
        {
          en: "Multiple specialized sub-networks",
          es: "Múltiples subredes especializadas",
          de: "Mehrere spezialisierte Teilnetze",
          nl: "Meerdere gespecialiseerde sub-netwerken"
        },
        {
          en: "Mixing expert opinions",
          es: "Mezclar opiniones de expertos",
          de: "Expertenmeinungen mischen",
          nl: "Expert meningen mixen"
        },
        {
          en: "Expert system mixture",
          es: "Mezcla de sistema experto",
          de: "Expertensystem-Mischung",
          nl: "Expert systeem mengsel"
        },
        {
          en: "Mixed expertise model",
          es: "Modelo de experiencia mixta",
          de: "Gemischtes Expertise-Modell",
          nl: "Gemengd expertise model"
        }
      ],
      correct: 0,
      explanation: {
        en: "MoE uses multiple specialized sub-networks (experts) and a gating network to route inputs to relevant experts, increasing model capacity efficiently.",
        es: "MoE usa múltiples subredes especializadas (expertos) y una red de compuerta para dirigir entradas a expertos relevantes.",
        de: "MoE nutzt mehrere spezialisierte Teilnetze (Experten) und ein Gating-Netzwerk um Eingaben an relevante Experten zu leiten.",
        nl: "MoE gebruikt meerdere gespecialiseerde sub-netwerken (experts) en een gating netwerk om inputs naar relevante experts te leiden."
      }
    },
    {
      question: {
        en: "What is sparse activation in neural networks?",
        es: "¿Qué es la activación escasa en redes neuronales?",
        de: "Was ist spärliche Aktivierung in neuronalen Netzen?",
        nl: "Wat is sparse activatie in neurale netwerken?"
      },
      options: [
        {
          en: "Only activating subset of neurons",
          es: "Solo activar subconjunto de neuronas",
          de: "Nur Teilmenge von Neuronen aktivieren",
          nl: "Alleen subset van neuronen activeren"
        },
        {
          en: "Activating all neurons sparsely",
          es: "Activar todas las neuronas escasamente",
          de: "Alle Neuronen spärlich aktivieren",
          nl: "Alle neuronen spaarzaam activeren"
        },
        {
          en: "Sparse matrix activation",
          es: "Activación de matriz escasa",
          de: "Spärliche Matrix-Aktivierung",
          nl: "Sparse matrix activatie"
        },
        {
          en: "Rarely activating network",
          es: "Red que se activa raramente",
          de: "Selten aktivierendes Netzwerk",
          nl: "Zelden activerend netwerk"
        }
      ],
      correct: 0,
      explanation: {
        en: "Sparse activation only activates a subset of neurons for each input, reducing computation while maintaining model capacity.",
        es: "La activación escasa solo activa un subconjunto de neuronas para cada entrada, reduciendo computación mientras mantiene capacidad.",
        de: "Spärliche Aktivierung aktiviert nur eine Teilmenge von Neuronen für jede Eingabe, reduziert Berechnung bei erhaltener Kapazität.",
        nl: "Sparse activatie activeert alleen een subset van neuronen voor elke input, vermindert berekening terwijl capaciteit behouden blijft."
      }
    },
    {
      question: {
        en: "What is model quantization?",
        es: "¿Qué es la cuantización de modelos?",
        de: "Was ist Modellquantisierung?",
        nl: "Wat is model kwantisatie?"
      },
      options: [
        {
          en: "Reducing precision of weights",
          es: "Reducir precisión de pesos",
          de: "Präzision von Gewichten reduzieren",
          nl: "Precisie van gewichten verminderen"
        },
        {
          en: "Counting model parameters",
          es: "Contar parámetros del modelo",
          de: "Modellparameter zählen",
          nl: "Model parameters tellen"
        },
        {
          en: "Quantifying model performance",
          es: "Cuantificar rendimiento del modelo",
          de: "Modellleistung quantifizieren",
          nl: "Model prestaties kwantificeren"
        },
        {
          en: "Quantum model computing",
          es: "Computación de modelo cuántico",
          de: "Quanten-Modell-Computing",
          nl: "Quantum model computing"
        }
      ],
      correct: 0,
      explanation: {
        en: "Quantization reduces the precision of model weights (e.g., from 32-bit to 8-bit), decreasing model size and speeding up inference.",
        es: "La cuantización reduce la precisión de los pesos del modelo (ej. de 32-bit a 8-bit), disminuyendo tamaño y acelerando inferencia.",
        de: "Quantisierung reduziert die Präzision der Modellgewichte (z.B. von 32-Bit auf 8-Bit), verringert Modellgröße und beschleunigt Inferenz.",
        nl: "Kwantisatie vermindert de precisie van modelgewichten (bijv. van 32-bit naar 8-bit), verkleint model en versnelt inferentie."
      }
    },
    {
      question: {
        en: "What is neural architecture search (NAS)?",
        es: "¿Qué es la búsqueda de arquitectura neural?",
        de: "Was ist neuronale Architektursuche?",
        nl: "Wat is neural architecture search?"
      },
      options: [
        {
          en: "Automatically designing neural network architectures",
          es: "Diseñar automáticamente arquitecturas de redes neuronales",
          de: "Automatisches Entwerfen neuronaler Netzwerkarchitekturen",
          nl: "Automatisch ontwerpen van neurale netwerkarchitecturen"
        },
        {
          en: "Searching through neural networks",
          es: "Buscar a través de redes neuronales",
          de: "Durch neuronale Netze suchen",
          nl: "Zoeken door neurale netwerken"
        },
        {
          en: "Neural search engine",
          es: "Motor de búsqueda neural",
          de: "Neuronale Suchmaschine",
          nl: "Neurale zoekmachine"
        },
        {
          en: "Architecture documentation search",
          es: "Búsqueda de documentación de arquitectura",
          de: "Architekturdokumentation-Suche",
          nl: "Architectuur documentatie zoeken"
        }
      ],
      correct: 0,
      explanation: {
        en: "NAS automatically searches for optimal neural network architectures for a given task, often outperforming human-designed architectures.",
        es: "NAS busca automáticamente arquitecturas óptimas de redes neuronales para una tarea dada, superando a menudo arquitecturas diseñadas por humanos.",
        de: "NAS sucht automatisch nach optimalen neuronalen Netzwerkarchitekturen für eine gegebene Aufgabe.",
        nl: "NAS zoekt automatisch naar optimale neurale netwerkarchitecturen voor een gegeven taak."
      }
    },
    {
      question: {
        en: "What is pruning in neural networks?",
        es: "¿Qué es la poda en redes neuronales?",
        de: "Was ist Pruning in neuronalen Netzen?",
        nl: "Wat is pruning in neurale netwerken?"
      },
      options: [
        {
          en: "Removing unnecessary connections",
          es: "Eliminar conexiones innecesarias",
          de: "Unnötige Verbindungen entfernen",
          nl: "Onnodige verbindingen verwijderen"
        },
        {
          en: "Trimming input data",
          es: "Recortar datos de entrada",
          de: "Eingabedaten trimmen",
          nl: "Input data trimmen"
        },
        {
          en: "Pruning training data",
          es: "Podar datos de entrenamiento",
          de: "Trainingsdaten beschneiden",
          nl: "Trainingsdata snoeien"
        },
        {
          en: "Network gardening",
          es: "Jardinería de red",
          de: "Netzwerk-Gärtnerei",
          nl: "Netwerk tuinieren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Pruning removes unnecessary weights or neurons from trained networks, reducing size and computation while maintaining performance.",
        es: "La poda elimina pesos o neuronas innecesarias de redes entrenadas, reduciendo tamaño y computación mientras mantiene rendimiento.",
        de: "Pruning entfernt unnötige Gewichte oder Neuronen aus trainierten Netzen, reduziert Größe und Berechnung bei erhaltener Leistung.",
        nl: "Pruning verwijdert onnodige gewichten of neuronen uit getrainde netwerken, vermindert grootte en berekening met behoud van prestaties."
      }
    },
    {
      question: {
        en: "What is lottery ticket hypothesis?",
        es: "¿Qué es la hipótesis del billete de lotería?",
        de: "Was ist die Lotterie-Ticket-Hypothese?",
        nl: "Wat is de loterij ticket hypothese?"
      },
      options: [
        {
          en: "Dense networks contain sparse winning subnetworks",
          es: "Redes densas contienen subredes ganadoras escasas",
          de: "Dichte Netze enthalten spärliche gewinnende Teilnetze",
          nl: "Dichte netwerken bevatten sparse winnende subnetwerken"
        },
        {
          en: "Random initialization wins",
          es: "Inicialización aleatoria gana",
          de: "Zufällige Initialisierung gewinnt",
          nl: "Willekeurige initialisatie wint"
        },
        {
          en: "Lottery determines success",
          es: "Lotería determina éxito",
          de: "Lotterie bestimmt Erfolg",
          nl: "Loterij bepaalt succes"
        },
        {
          en: "Tickets for training",
          es: "Boletos para entrenamiento",
          de: "Tickets für Training",
          nl: "Tickets voor training"
        }
      ],
      correct: 0,
      explanation: {
        en: "The lottery ticket hypothesis states that dense networks contain sparse subnetworks that can achieve comparable accuracy when trained in isolation.",
        es: "La hipótesis del billete de lotería establece que redes densas contienen subredes escasas que pueden lograr precisión comparable.",
        de: "Die Lotterie-Ticket-Hypothese besagt, dass dichte Netze spärliche Teilnetze enthalten, die vergleichbare Genauigkeit erreichen können.",
        nl: "De loterij ticket hypothese stelt dat dichte netwerken sparse subnetwerken bevatten die vergelijkbare nauwkeurigheid kunnen bereiken."
      }
    }
  ]
};