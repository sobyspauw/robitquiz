module.exports = {
  questions: [
    {
      question: {
        en: "What is the purpose of the reparameterization trick in VAEs?",
        es: "¿Cuál es el propósito del truco de reparametrización en VAEs?",
        de: "Was ist der Zweck des Reparametrisierungstricks in VAEs?",
        nl: "Wat is het doel van de reparametrisatie truc in VAEs?"
      },
      options: [
        {
          en: "Enable backpropagation through sampling",
          es: "Permitir retropropagación a través del muestreo",
          de: "Backpropagation durch Sampling ermöglichen",
          nl: "Backpropagation door sampling mogelijk maken"
        },
        {
          en: "Reduce model size",
          es: "Reducir tamaño del modelo",
          de: "Modellgröße reduzieren",
          nl: "Modelgrootte verminderen"
        },
        {
          en: "Speed up training",
          es: "Acelerar entrenamiento",
          de: "Training beschleunigen",
          nl: "Training versnellen"
        },
        {
          en: "Improve accuracy",
          es: "Mejorar precisión",
          de: "Genauigkeit verbessern",
          nl: "Nauwkeurigheid verbeteren"
        }
      ],
      correct: 0,
      explanation: {
        en: "The reparameterization trick allows gradients to flow through the sampling operation in VAEs by expressing the random sample as a deterministic function of the parameters and a separate noise variable.",
        es: "El truco de reparametrización permite que los gradientes fluyan a través de la operación de muestreo en VAEs expresando la muestra aleatoria como una función determinista.",
        de: "Der Reparametrisierungstrick ermöglicht Gradientenfluss durch die Sampling-Operation in VAEs durch Ausdruck der Zufallsstichprobe als deterministische Funktion.",
        nl: "De reparametrisatie truc laat gradiënten stromen door de sampling operatie in VAEs door de random sample uit te drukken als deterministische functie."
      }
    },
    {
      question: {
        en: "What does the Evidence Lower BOund (ELBO) optimize in variational inference?",
        es: "¿Qué optimiza el límite inferior de evidencia (ELBO) en inferencia variacional?",
        de: "Was optimiert die Evidence Lower Bound (ELBO) in der Variationsinferenz?",
        nl: "Wat optimaliseert de Evidence Lower BOund (ELBO) in variationele inferentie?"
      },
      options: [
        {
          en: "Lower bound of log-likelihood",
          es: "Límite inferior de log-verosimilitud",
          de: "Untere Schranke der Log-Likelihood",
          nl: "Ondergrens van log-likelihood"
        },
        {
          en: "Upper bound of error",
          es: "Límite superior del error",
          de: "Obere Fehlergrenze",
          nl: "Bovengrens van fout"
        },
        {
          en: "Model complexity",
          es: "Complejidad del modelo",
          de: "Modellkomplexität",
          nl: "Model complexiteit"
        },
        {
          en: "Training speed",
          es: "Velocidad de entrenamiento",
          de: "Trainingsgeschwindigkeit",
          nl: "Trainingssnelheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "ELBO provides a tractable lower bound on the log marginal likelihood, consisting of reconstruction loss minus KL divergence between approximate and prior distributions.",
        es: "ELBO proporciona un límite inferior manejable en la log-verosimilitud marginal, consistiendo en pérdida de reconstrucción menos divergencia KL.",
        de: "ELBO bietet eine handhabbare untere Schranke der Log-Marginal-Likelihood, bestehend aus Rekonstruktionsverlust minus KL-Divergenz.",
        nl: "ELBO biedt een hanteerbare ondergrens voor log marginale likelihood, bestaande uit reconstructieverlies minus KL-divergentie."
      }
    },
    {
      question: {
        en: "Which technique addresses exposure bias in sequence generation?",
        es: "¿Qué técnica aborda el sesgo de exposición en generación de secuencias?",
        de: "Welche Technik adressiert Exposure Bias bei der Sequenzgenerierung?",
        nl: "Welke techniek behandelt exposure bias in sequentiegeneratie?"
      },
      options: [
        {
          en: "Scheduled sampling",
          es: "Muestreo programado",
          de: "Geplantes Sampling",
          nl: "Scheduled sampling"
        },
        {
          en: "Batch normalization",
          es: "Normalización por lotes",
          de: "Batch-Normalisierung",
          nl: "Batch normalisatie"
        },
        {
          en: "Dropout",
          es: "Dropout",
          de: "Dropout",
          nl: "Dropout"
        },
        {
          en: "Weight decay",
          es: "Decaimiento de peso",
          de: "Gewichtsabnahme",
          nl: "Gewichtsverval"
        }
      ],
      correct: 0,
      explanation: {
        en: "Scheduled sampling gradually transitions from teacher forcing to using model predictions during training, reducing the mismatch between training and inference.",
        es: "El muestreo programado transiciona gradualmente del forzado del maestro a usar predicciones del modelo, reduciendo la discrepancia entre entrenamiento e inferencia.",
        de: "Geplantes Sampling wechselt allmählich von Teacher Forcing zu Modellvorhersagen während des Trainings und reduziert die Diskrepanz.",
        nl: "Scheduled sampling gaat geleidelijk over van teacher forcing naar model voorspellingen tijdens training, vermindert mismatch tussen training en inferentie."
      }
    },
    {
      question: {
        en: "What is the main advantage of using Transformers over RNNs for long sequences?",
        es: "¿Cuál es la ventaja principal de usar Transformers sobre RNNs para secuencias largas?",
        de: "Was ist der Hauptvorteil von Transformern gegenüber RNNs für lange Sequenzen?",
        nl: "Wat is het hoofdvoordeel van Transformers boven RNNs voor lange sequenties?"
      },
      options: [
        {
          en: "Parallel processing capability",
          es: "Capacidad de procesamiento paralelo",
          de: "Parallele Verarbeitungsfähigkeit",
          nl: "Parallelle verwerkingscapaciteit"
        },
        {
          en: "Less memory usage",
          es: "Menos uso de memoria",
          de: "Weniger Speichernutzung",
          nl: "Minder geheugengebruik"
        },
        {
          en: "Simpler architecture",
          es: "Arquitectura más simple",
          de: "Einfachere Architektur",
          nl: "Simpelere architectuur"
        },
        {
          en: "Fewer parameters",
          es: "Menos parámetros",
          de: "Weniger Parameter",
          nl: "Minder parameters"
        }
      ],
      correct: 0,
      explanation: {
        en: "Transformers process all positions in parallel using self-attention, eliminating sequential dependencies that make RNNs slow for long sequences.",
        es: "Los Transformers procesan todas las posiciones en paralelo usando auto-atención, eliminando dependencias secuenciales que hacen lentos a los RNNs.",
        de: "Transformer verarbeiten alle Positionen parallel mit Selbst-Aufmerksamkeit und eliminieren sequentielle Abhängigkeiten, die RNNs langsam machen.",
        nl: "Transformers verwerken alle posities parallel met self-attention, elimineren sequentiële afhankelijkheden die RNNs traag maken voor lange sequenties."
      }
    },
    {
      question: {
        en: "What does the Gini impurity measure in decision trees?",
        es: "¿Qué mide la impureza de Gini en árboles de decisión?",
        de: "Was misst die Gini-Unreinheit in Entscheidungsbäumen?",
        nl: "Wat meet de Gini impurity in beslisbomen?"
      },
      options: [
        {
          en: "Node heterogeneity",
          es: "Heterogeneidad del nodo",
          de: "Knotenheterogenität",
          nl: "Node heterogeniteit"
        },
        {
          en: "Tree depth",
          es: "Profundidad del árbol",
          de: "Baumtiefe",
          nl: "Boomdiepte"
        },
        {
          en: "Prediction accuracy",
          es: "Precisión de predicción",
          de: "Vorhersagegenauigkeit",
          nl: "Voorspellingsnauwkeurigheid"
        },
        {
          en: "Feature importance",
          es: "Importancia de características",
          de: "Merkmalswichtigkeit",
          nl: "Feature belangrijkheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gini impurity measures how heterogeneous or impure a node is, ranging from 0 (pure, all same class) to 0.5 (maximum impurity for binary classification).",
        es: "La impureza de Gini mide qué tan heterogéneo o impuro es un nodo, variando de 0 (puro, toda la misma clase) a 0.5 (máxima impureza).",
        de: "Gini-Unreinheit misst, wie heterogen oder unrein ein Knoten ist, von 0 (rein, alle gleiche Klasse) bis 0,5 (maximale Unreinheit).",
        nl: "Gini impurity meet hoe heterogeen of onzuiver een node is, van 0 (puur, allemaal dezelfde klasse) tot 0.5 (maximale onzuiverheid)."
      }
    },
    {
      question: {
        en: "Which optimizer combines momentum with adaptive learning rates?",
        es: "¿Qué optimizador combina momentum con tasas de aprendizaje adaptativas?",
        de: "Welcher Optimierer kombiniert Momentum mit adaptiven Lernraten?",
        nl: "Welke optimizer combineert momentum met adaptieve leersnelheden?"
      },
      options: [
        {
          en: "Adam",
          es: "Adam",
          de: "Adam",
          nl: "Adam"
        },
        {
          en: "SGD",
          es: "SGD",
          de: "SGD",
          nl: "SGD"
        },
        {
          en: "AdaGrad",
          es: "AdaGrad",
          de: "AdaGrad",
          nl: "AdaGrad"
        },
        {
          en: "RMSProp",
          es: "RMSProp",
          de: "RMSProp",
          nl: "RMSProp"
        }
      ],
      correct: 0,
      explanation: {
        en: "Adam (Adaptive Moment Estimation) combines the benefits of momentum (first moment) and RMSProp (second moment) for adaptive learning rates per parameter.",
        es: "Adam combina los beneficios del momentum (primer momento) y RMSProp (segundo momento) para tasas de aprendizaje adaptativas por parámetro.",
        de: "Adam kombiniert die Vorteile von Momentum (erstes Moment) und RMSProp (zweites Moment) für adaptive Lernraten pro Parameter.",
        nl: "Adam combineert de voordelen van momentum (eerste moment) en RMSProp (tweede moment) voor adaptieve leersnelheden per parameter."
      }
    },
    {
      question: {
        en: "What is the purpose of using Monte Carlo Tree Search in AlphaGo?",
        es: "¿Cuál es el propósito de usar búsqueda de árbol Monte Carlo en AlphaGo?",
        de: "Was ist der Zweck der Monte-Carlo-Baumsuche in AlphaGo?",
        nl: "Wat is het doel van Monte Carlo Tree Search in AlphaGo?"
      },
      options: [
        {
          en: "Explore future game states",
          es: "Explorar estados futuros del juego",
          de: "Zukünftige Spielzustände erkunden",
          nl: "Toekomstige speltoestanden verkennen"
        },
        {
          en: "Train neural networks",
          es: "Entrenar redes neuronales",
          de: "Neuronale Netze trainieren",
          nl: "Neurale netwerken trainen"
        },
        {
          en: "Reduce memory usage",
          es: "Reducir uso de memoria",
          de: "Speichernutzung reduzieren",
          nl: "Geheugengebruik verminderen"
        },
        {
          en: "Speed up inference",
          es: "Acelerar inferencia",
          de: "Inferenz beschleunigen",
          nl: "Inferentie versnellen"
        }
      ],
      correct: 0,
      explanation: {
        en: "MCTS in AlphaGo explores possible future game states by simulating many games, balancing exploration of new moves with exploitation of promising paths.",
        es: "MCTS en AlphaGo explora posibles estados futuros del juego simulando muchas partidas, equilibrando exploración de nuevos movimientos con explotación.",
        de: "MCTS in AlphaGo erkundet mögliche zukünftige Spielzustände durch Simulation vieler Spiele und balanciert Erkundung mit Ausbeutung.",
        nl: "MCTS in AlphaGo verkent mogelijke toekomstige speltoestanden door vele games te simuleren, balanceert exploratie met exploitatie."
      }
    },
    {
      question: {
        en: "What problem does batch renormalization solve?",
        es: "¿Qué problema resuelve la renormalización por lotes?",
        de: "Welches Problem löst Batch-Renormalisierung?",
        nl: "Welk probleem lost batch renormalization op?"
      },
      options: [
        {
          en: "Small batch size issues",
          es: "Problemas de tamaño de lote pequeño",
          de: "Probleme mit kleiner Batch-Größe",
          nl: "Kleine batch grootte problemen"
        },
        {
          en: "Vanishing gradients",
          es: "Gradientes que desaparecen",
          de: "Verschwindende Gradienten",
          nl: "Verdwijnende gradiënten"
        },
        {
          en: "Overfitting",
          es: "Sobreajuste",
          de: "Überanpassung",
          nl: "Overfitting"
        },
        {
          en: "Slow convergence",
          es: "Convergencia lenta",
          de: "Langsame Konvergenz",
          nl: "Trage convergentie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Batch renormalization addresses the issues of batch normalization with small or non-i.i.d. batches by introducing correction terms that account for batch statistics deviation.",
        es: "La renormalización por lotes aborda los problemas de normalización con lotes pequeños o no i.i.d. introduciendo términos de corrección.",
        de: "Batch-Renormalisierung behandelt Probleme der Batch-Normalisierung mit kleinen oder nicht-i.i.d. Batches durch Korrekturterme.",
        nl: "Batch renormalization behandelt problemen van batch normalisatie met kleine of niet-i.i.d. batches door correctietermen te introduceren."
      }
    },
    {
      question: {
        en: "What is the advantage of using dilated convolutions?",
        es: "¿Cuál es la ventaja de usar convoluciones dilatadas?",
        de: "Was ist der Vorteil von dilatierten Faltungen?",
        nl: "Wat is het voordeel van dilated convolutions?"
      },
      options: [
        {
          en: "Larger receptive field",
          es: "Campo receptivo más grande",
          de: "Größeres rezeptives Feld",
          nl: "Groter receptief veld"
        },
        {
          en: "Fewer parameters",
          es: "Menos parámetros",
          de: "Weniger Parameter",
          nl: "Minder parameters"
        },
        {
          en: "Faster training",
          es: "Entrenamiento más rápido",
          de: "Schnelleres Training",
          nl: "Sneller trainen"
        },
        {
          en: "Better accuracy",
          es: "Mejor precisión",
          de: "Bessere Genauigkeit",
          nl: "Betere nauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Dilated convolutions exponentially expand the receptive field without increasing parameters or computation, by introducing gaps between kernel elements.",
        es: "Las convoluciones dilatadas expanden exponencialmente el campo receptivo sin aumentar parámetros, introduciendo espacios entre elementos del kernel.",
        de: "Dilatierte Faltungen erweitern das rezeptive Feld exponentiell ohne mehr Parameter durch Lücken zwischen Kernel-Elementen.",
        nl: "Dilated convolutions vergroten het receptieve veld exponentieel zonder meer parameters door gaten tussen kernel elementen te introduceren."
      }
    },
    {
      question: {
        en: "What does mutual information measure between variables?",
        es: "¿Qué mide la información mutua entre variables?",
        de: "Was misst die gegenseitige Information zwischen Variablen?",
        nl: "Wat meet mutual information tussen variabelen?"
      },
      options: [
        {
          en: "Shared information content",
          es: "Contenido de información compartida",
          de: "Geteilter Informationsgehalt",
          nl: "Gedeelde informatie-inhoud"
        },
        {
          en: "Linear correlation",
          es: "Correlación lineal",
          de: "Lineare Korrelation",
          nl: "Lineaire correlatie"
        },
        {
          en: "Causal relationship",
          es: "Relación causal",
          de: "Kausale Beziehung",
          nl: "Causale relatie"
        },
        {
          en: "Distance metric",
          es: "Métrica de distancia",
          de: "Distanzmetrik",
          nl: "Afstandsmetriek"
        }
      ],
      correct: 0,
      explanation: {
        en: "Mutual information quantifies the amount of information obtained about one variable by observing another, measuring statistical dependence beyond just linear correlation.",
        es: "La información mutua cuantifica la cantidad de información obtenida sobre una variable al observar otra, midiendo dependencia estadística más allá de correlación.",
        de: "Gegenseitige Information quantifiziert die erhaltene Information über eine Variable durch Beobachtung einer anderen, misst statistische Abhängigkeit.",
        nl: "Mutual information kwantificeert de hoeveelheid informatie verkregen over één variabele door een andere te observeren, meet statistische afhankelijkheid."
      }
    },
    {
      question: {
        en: "Which method learns disentangled representations?",
        es: "¿Qué método aprende representaciones desenredadas?",
        de: "Welche Methode lernt entwirrte Repräsentationen?",
        nl: "Welke methode leert disentangled representaties?"
      },
      options: [
        {
          en: "β-VAE",
          es: "β-VAE",
          de: "β-VAE",
          nl: "β-VAE"
        },
        {
          en: "Standard VAE",
          es: "VAE estándar",
          de: "Standard-VAE",
          nl: "Standaard VAE"
        },
        {
          en: "Basic GAN",
          es: "GAN básico",
          de: "Basis-GAN",
          nl: "Basis GAN"
        },
        {
          en: "Simple autoencoder",
          es: "Autoencoder simple",
          de: "Einfacher Autoencoder",
          nl: "Simpele autoencoder"
        }
      ],
      correct: 0,
      explanation: {
        en: "β-VAE modifies the VAE objective by increasing the weight on the KL divergence term, encouraging the model to learn disentangled latent representations.",
        es: "β-VAE modifica el objetivo VAE aumentando el peso en el término de divergencia KL, alentando al modelo a aprender representaciones latentes desenredadas.",
        de: "β-VAE modifiziert das VAE-Ziel durch Erhöhung des Gewichts auf den KL-Divergenz-Term und fördert entwirrte latente Repräsentationen.",
        nl: "β-VAE modificeert het VAE doel door het gewicht op de KL-divergentie term te verhogen, moedigt disentangled latente representaties aan."
      }
    },
    {
      question: {
        en: "What is the main purpose of using importance sampling?",
        es: "¿Cuál es el propósito principal de usar muestreo de importancia?",
        de: "Was ist der Hauptzweck von Importance Sampling?",
        nl: "Wat is het hoofddoel van importance sampling?"
      },
      options: [
        {
          en: "Sample from difficult distributions",
          es: "Muestrear de distribuciones difíciles",
          de: "Aus schwierigen Verteilungen sampeln",
          nl: "Samplen uit moeilijke distributies"
        },
        {
          en: "Reduce model size",
          es: "Reducir tamaño del modelo",
          de: "Modellgröße reduzieren",
          nl: "Modelgrootte verminderen"
        },
        {
          en: "Speed up training",
          es: "Acelerar entrenamiento",
          de: "Training beschleunigen",
          nl: "Training versnellen"
        },
        {
          en: "Improve accuracy",
          es: "Mejorar precisión",
          de: "Genauigkeit verbessern",
          nl: "Nauwkeurigheid verbeteren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Importance sampling allows estimation of properties of a target distribution using samples from a different proposal distribution, correcting with importance weights.",
        es: "El muestreo de importancia permite estimar propiedades de una distribución objetivo usando muestras de una distribución propuesta diferente, corrigiendo con pesos.",
        de: "Importance Sampling ermöglicht die Schätzung von Eigenschaften einer Zielverteilung mit Proben aus einer anderen Vorschlagsverteilung.",
        nl: "Importance sampling maakt schatting van eigenschappen van een doeldistributie mogelijk met samples uit een andere proposal distributie."
      }
    },
    {
      question: {
        en: "What does the Hessian matrix represent in optimization?",
        es: "¿Qué representa la matriz Hessiana en optimización?",
        de: "Was stellt die Hesse-Matrix in der Optimierung dar?",
        nl: "Wat representeert de Hessian matrix in optimalisatie?"
      },
      options: [
        {
          en: "Second-order derivatives",
          es: "Derivadas de segundo orden",
          de: "Ableitungen zweiter Ordnung",
          nl: "Tweede-orde afgeleiden"
        },
        {
          en: "First-order gradients",
          es: "Gradientes de primer orden",
          de: "Gradienten erster Ordnung",
          nl: "Eerste-orde gradiënten"
        },
        {
          en: "Loss values",
          es: "Valores de pérdida",
          de: "Verlustwerte",
          nl: "Verlieswaarden"
        },
        {
          en: "Weight matrices",
          es: "Matrices de peso",
          de: "Gewichtsmatrizen",
          nl: "Gewichtsmatrices"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Hessian matrix contains all second-order partial derivatives of a function, providing information about curvature used in second-order optimization methods.",
        es: "La matriz Hessiana contiene todas las derivadas parciales de segundo orden de una función, proporcionando información sobre curvatura para optimización.",
        de: "Die Hesse-Matrix enthält alle partiellen Ableitungen zweiter Ordnung einer Funktion und liefert Krümmungsinformation für Optimierung.",
        nl: "De Hessian matrix bevat alle tweede-orde partiële afgeleiden van een functie, geeft informatie over kromming voor optimalisatie."
      }
    },
    {
      question: {
        en: "Which technique uses trust regions for optimization?",
        es: "¿Qué técnica usa regiones de confianza para optimización?",
        de: "Welche Technik nutzt Vertrauensbereiche für Optimierung?",
        nl: "Welke techniek gebruikt trust regions voor optimalisatie?"
      },
      options: [
        {
          en: "TRPO",
          es: "TRPO",
          de: "TRPO",
          nl: "TRPO"
        },
        {
          en: "Adam",
          es: "Adam",
          de: "Adam",
          nl: "Adam"
        },
        {
          en: "SGD",
          es: "SGD",
          de: "SGD",
          nl: "SGD"
        },
        {
          en: "RMSProp",
          es: "RMSProp",
          de: "RMSProp",
          nl: "RMSProp"
        }
      ],
      correct: 0,
      explanation: {
        en: "Trust Region Policy Optimization (TRPO) constrains policy updates to stay within a trust region, ensuring monotonic improvement in reinforcement learning.",
        es: "TRPO restringe las actualizaciones de política para permanecer dentro de una región de confianza, asegurando mejora monotónica en aprendizaje por refuerzo.",
        de: "TRPO beschränkt Policy-Updates auf einen Vertrauensbereich und gewährleistet monotone Verbesserung im Verstärkungslernen.",
        nl: "TRPO beperkt policy updates tot binnen een trust region, verzekert monotone verbetering in reinforcement learning."
      }
    },
    {
      question: {
        en: "What is the purpose of using Polyak averaging?",
        es: "¿Cuál es el propósito de usar promedio de Polyak?",
        de: "Was ist der Zweck der Polyak-Mittelung?",
        nl: "Wat is het doel van Polyak averaging?"
      },
      options: [
        {
          en: "Stabilize parameter updates",
          es: "Estabilizar actualizaciones de parámetros",
          de: "Parameteraktualisierungen stabilisieren",
          nl: "Parameter updates stabiliseren"
        },
        {
          en: "Speed up training",
          es: "Acelerar entrenamiento",
          de: "Training beschleunigen",
          nl: "Training versnellen"
        },
        {
          en: "Reduce memory",
          es: "Reducir memoria",
          de: "Speicher reduzieren",
          nl: "Geheugen verminderen"
        },
        {
          en: "Increase capacity",
          es: "Aumentar capacidad",
          de: "Kapazität erhöhen",
          nl: "Capaciteit verhogen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Polyak averaging (exponential moving average) maintains a running average of parameters, providing more stable and often better-performing models than the raw parameters.",
        es: "El promedio de Polyak mantiene un promedio móvil de parámetros, proporcionando modelos más estables y con mejor rendimiento que los parámetros crudos.",
        de: "Polyak-Mittelung hält einen laufenden Durchschnitt der Parameter und bietet stabilere und oft besser funktionierende Modelle.",
        nl: "Polyak averaging houdt een lopend gemiddelde van parameters bij, geeft stabielere en vaak beter presterende modellen dan ruwe parameters."
      }
    },
    {
      question: {
        en: "What does the Fisher information matrix measure?",
        es: "¿Qué mide la matriz de información de Fisher?",
        de: "Was misst die Fisher-Informationsmatrix?",
        nl: "Wat meet de Fisher informatie matrix?"
      },
      options: [
        {
          en: "Information about parameters",
          es: "Información sobre parámetros",
          de: "Information über Parameter",
          nl: "Informatie over parameters"
        },
        {
          en: "Model accuracy",
          es: "Precisión del modelo",
          de: "Modellgenauigkeit",
          nl: "Model nauwkeurigheid"
        },
        {
          en: "Training loss",
          es: "Pérdida de entrenamiento",
          de: "Trainingsverlust",
          nl: "Trainingsverlies"
        },
        {
          en: "Data distribution",
          es: "Distribución de datos",
          de: "Datenverteilung",
          nl: "Data distributie"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Fisher information matrix quantifies the amount of information that observable data carries about unknown parameters, measuring parameter sensitivity.",
        es: "La matriz de información de Fisher cuantifica la cantidad de información que los datos observables llevan sobre parámetros desconocidos.",
        de: "Die Fisher-Informationsmatrix quantifiziert die Information, die beobachtbare Daten über unbekannte Parameter tragen.",
        nl: "De Fisher informatie matrix kwantificeert de hoeveelheid informatie die waarneembare data draagt over onbekende parameters."
      }
    },
    {
      question: {
        en: "Which method addresses the problem of covariate shift?",
        es: "¿Qué método aborda el problema del cambio de covariables?",
        de: "Welche Methode behandelt das Problem der Kovariablenverschiebung?",
        nl: "Welke methode behandelt het probleem van covariate shift?"
      },
      options: [
        {
          en: "Domain adaptation",
          es: "Adaptación de dominio",
          de: "Domänenanpassung",
          nl: "Domain adaptatie"
        },
        {
          en: "Data augmentation",
          es: "Aumento de datos",
          de: "Datenaugmentation",
          nl: "Data augmentatie"
        },
        {
          en: "Regularization",
          es: "Regularización",
          de: "Regularisierung",
          nl: "Regularisatie"
        },
        {
          en: "Ensemble learning",
          es: "Aprendizaje en conjunto",
          de: "Ensemble-Lernen",
          nl: "Ensemble leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Domain adaptation techniques address covariate shift where training and test data come from different distributions, aligning features or reweighting samples.",
        es: "Las técnicas de adaptación de dominio abordan el cambio de covariables donde los datos de entrenamiento y prueba vienen de diferentes distribuciones.",
        de: "Domänenanpassungstechniken behandeln Kovariablenverschiebung, bei der Trainings- und Testdaten aus verschiedenen Verteilungen stammen.",
        nl: "Domain adaptatie technieken behandelen covariate shift waar training en test data uit verschillende distributies komen."
      }
    },
    {
      question: {
        en: "What is the purpose of using capsule networks?",
        es: "¿Cuál es el propósito de usar redes de cápsulas?",
        de: "Was ist der Zweck von Kapsel-Netzwerken?",
        nl: "Wat is het doel van capsule networks?"
      },
      options: [
        {
          en: "Preserve spatial relationships",
          es: "Preservar relaciones espaciales",
          de: "Räumliche Beziehungen bewahren",
          nl: "Ruimtelijke relaties behouden"
        },
        {
          en: "Reduce parameters",
          es: "Reducir parámetros",
          de: "Parameter reduzieren",
          nl: "Parameters verminderen"
        },
        {
          en: "Speed up training",
          es: "Acelerar entrenamiento",
          de: "Training beschleunigen",
          nl: "Training versnellen"
        },
        {
          en: "Simplify architecture",
          es: "Simplificar arquitectura",
          de: "Architektur vereinfachen",
          nl: "Architectuur vereenvoudigen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Capsule networks preserve spatial relationships between parts using vector outputs and dynamic routing, addressing limitations of CNNs with pooling.",
        es: "Las redes de cápsulas preservan relaciones espaciales entre partes usando salidas vectoriales y enrutamiento dinámico, abordando limitaciones de CNNs.",
        de: "Kapsel-Netzwerke bewahren räumliche Beziehungen zwischen Teilen mit Vektorausgaben und dynamischem Routing.",
        nl: "Capsule networks behouden ruimtelijke relaties tussen delen met vector outputs en dynamic routing, behandelen beperkingen van CNNs."
      }
    },
    {
      question: {
        en: "What does PPO use instead of hard constraints?",
        es: "¿Qué usa PPO en lugar de restricciones duras?",
        de: "Was verwendet PPO anstelle harter Einschränkungen?",
        nl: "Wat gebruikt PPO in plaats van harde beperkingen?"
      },
      options: [
        {
          en: "Clipped objective",
          es: "Objetivo recortado",
          de: "Geclipptes Ziel",
          nl: "Geclipte doelfunctie"
        },
        {
          en: "L2 regularization",
          es: "Regularización L2",
          de: "L2-Regularisierung",
          nl: "L2 regularisatie"
        },
        {
          en: "Dropout",
          es: "Dropout",
          de: "Dropout",
          nl: "Dropout"
        },
        {
          en: "Batch norm",
          es: "Norm por lotes",
          de: "Batch-Norm",
          nl: "Batch norm"
        }
      ],
      correct: 0,
      explanation: {
        en: "Proximal Policy Optimization (PPO) uses a clipped surrogate objective instead of the hard KL constraint in TRPO, simplifying implementation while maintaining stability.",
        es: "PPO usa un objetivo sustituto recortado en lugar de la restricción KL dura en TRPO, simplificando la implementación mientras mantiene estabilidad.",
        de: "PPO verwendet ein geclipptes Surrogate-Ziel anstelle der harten KL-Beschränkung in TRPO und vereinfacht die Implementierung.",
        nl: "PPO gebruikt een geclipte surrogate doelfunctie in plaats van de harde KL beperking in TRPO, vereenvoudigt implementatie met behoud van stabiliteit."
      }
    },
    {
      question: {
        en: "What is the computational advantage of depthwise separable convolutions?",
        es: "¿Cuál es la ventaja computacional de convoluciones separables en profundidad?",
        de: "Was ist der rechnerische Vorteil von tiefenweise separierbaren Faltungen?",
        nl: "Wat is het computationele voordeel van depthwise separable convolutions?"
      },
      options: [
        {
          en: "Reduced computation",
          es: "Computación reducida",
          de: "Reduzierte Berechnung",
          nl: "Verminderde berekening"
        },
        {
          en: "Better accuracy",
          es: "Mejor precisión",
          de: "Bessere Genauigkeit",
          nl: "Betere nauwkeurigheid"
        },
        {
          en: "More parameters",
          es: "Más parámetros",
          de: "Mehr Parameter",
          nl: "Meer parameters"
        },
        {
          en: "Deeper networks",
          es: "Redes más profundas",
          de: "Tiefere Netzwerke",
          nl: "Diepere netwerken"
        }
      ],
      correct: 0,
      explanation: {
        en: "Depthwise separable convolutions factorize standard convolution into depthwise and pointwise operations, reducing computation by approximately k² where k is kernel size.",
        es: "Las convoluciones separables en profundidad factorizan la convolución estándar en operaciones en profundidad y puntuales, reduciendo computación.",
        de: "Tiefenweise separierbare Faltungen faktorisieren Standard-Faltung in tiefenweise und punktweise Operationen und reduzieren Berechnung.",
        nl: "Depthwise separable convolutions factoriseren standaard convolutie in depthwise en pointwise operaties, vermindert berekening met ongeveer k²."
      }
    },
    {
      question: {
        en: "What does graph attention networks (GATs) learn?",
        es: "¿Qué aprenden las redes de atención de grafos (GATs)?",
        de: "Was lernen Graph Attention Networks (GATs)?",
        nl: "Wat leren graph attention networks (GATs)?"
      },
      options: [
        {
          en: "Adaptive edge weights",
          es: "Pesos de borde adaptativos",
          de: "Adaptive Kantengewichte",
          nl: "Adaptieve edge gewichten"
        },
        {
          en: "Node positions",
          es: "Posiciones de nodos",
          de: "Knotenpositionen",
          nl: "Node posities"
        },
        {
          en: "Graph structure",
          es: "Estructura del grafo",
          de: "Graphstruktur",
          nl: "Graaf structuur"
        },
        {
          en: "Feature dimensions",
          es: "Dimensiones de características",
          de: "Merkmalsdimensionen",
          nl: "Feature dimensies"
        }
      ],
      correct: 0,
      explanation: {
        en: "GATs learn adaptive attention weights for edges in graphs, allowing different importance to be assigned to different neighbors based on their features.",
        es: "Los GATs aprenden pesos de atención adaptativos para bordes en grafos, permitiendo asignar diferente importancia a diferentes vecinos.",
        de: "GATs lernen adaptive Aufmerksamkeitsgewichte für Kanten in Graphen und ermöglichen unterschiedliche Wichtigkeit für verschiedene Nachbarn.",
        nl: "GATs leren adaptieve attention gewichten voor edges in grafen, maken verschillende belangrijkheid voor verschillende buren mogelijk."
      }
    },
    {
      question: {
        en: "What is the purpose of using normalizing flows?",
        es: "¿Cuál es el propósito de usar flujos de normalización?",
        de: "Was ist der Zweck von Normalizing Flows?",
        nl: "Wat is het doel van normalizing flows?"
      },
      options: [
        {
          en: "Model complex distributions",
          es: "Modelar distribuciones complejas",
          de: "Komplexe Verteilungen modellieren",
          nl: "Complexe distributies modelleren"
        },
        {
          en: "Reduce training time",
          es: "Reducir tiempo de entrenamiento",
          de: "Trainingszeit reduzieren",
          nl: "Trainingstijd verminderen"
        },
        {
          en: "Simplify architecture",
          es: "Simplificar arquitectura",
          de: "Architektur vereinfachen",
          nl: "Architectuur vereenvoudigen"
        },
        {
          en: "Decrease parameters",
          es: "Disminuir parámetros",
          de: "Parameter verringern",
          nl: "Parameters verminderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Normalizing flows transform simple distributions into complex ones through invertible transformations, enabling exact likelihood computation and flexible generative modeling.",
        es: "Los flujos de normalización transforman distribuciones simples en complejas a través de transformaciones invertibles, permitiendo cálculo exacto de verosimilitud.",
        de: "Normalizing Flows transformieren einfache Verteilungen in komplexe durch invertierbare Transformationen und ermöglichen exakte Likelihood-Berechnung.",
        nl: "Normalizing flows transformeren simpele distributies naar complexe via inverteerbare transformaties, maken exacte likelihood berekening mogelijk."
      }
    },
    {
      question: {
        en: "Which technique uses score matching for training?",
        es: "¿Qué técnica usa coincidencia de puntuación para entrenamiento?",
        de: "Welche Technik nutzt Score Matching für Training?",
        nl: "Welke techniek gebruikt score matching voor training?"
      },
      options: [
        {
          en: "Diffusion models",
          es: "Modelos de difusión",
          de: "Diffusionsmodelle",
          nl: "Diffusie modellen"
        },
        {
          en: "Basic GANs",
          es: "GANs básicos",
          de: "Basis-GANs",
          nl: "Basis GANs"
        },
        {
          en: "Standard VAEs",
          es: "VAEs estándar",
          de: "Standard-VAEs",
          nl: "Standaard VAEs"
        },
        {
          en: "Simple RNNs",
          es: "RNNs simples",
          de: "Einfache RNNs",
          nl: "Simpele RNNs"
        }
      ],
      correct: 0,
      explanation: {
        en: "Diffusion models use score matching to learn the gradient of the data distribution, enabling generation through iterative denoising from random noise.",
        es: "Los modelos de difusión usan coincidencia de puntuación para aprender el gradiente de la distribución de datos, permitiendo generación por desruido iterativo.",
        de: "Diffusionsmodelle nutzen Score Matching um den Gradienten der Datenverteilung zu lernen und ermöglichen Generierung durch iteratives Entrauschen.",
        nl: "Diffusie modellen gebruiken score matching om de gradiënt van de data distributie te leren, maken generatie mogelijk door iteratieve denoising."
      }
    },
    {
      question: {
        en: "What problem does spectral clustering solve better than k-means?",
        es: "¿Qué problema resuelve mejor el agrupamiento espectral que k-means?",
        de: "Welches Problem löst spektrales Clustering besser als k-means?",
        nl: "Welk probleem lost spectral clustering beter op dan k-means?"
      },
      options: [
        {
          en: "Non-convex clusters",
          es: "Grupos no convexos",
          de: "Nicht-konvexe Cluster",
          nl: "Niet-convexe clusters"
        },
        {
          en: "Large datasets",
          es: "Conjuntos de datos grandes",
          de: "Große Datensätze",
          nl: "Grote datasets"
        },
        {
          en: "High dimensions",
          es: "Altas dimensiones",
          de: "Hohe Dimensionen",
          nl: "Hoge dimensies"
        },
        {
          en: "Missing data",
          es: "Datos faltantes",
          de: "Fehlende Daten",
          nl: "Missende data"
        }
      ],
      correct: 0,
      explanation: {
        en: "Spectral clustering uses eigenvalues of similarity matrices to perform dimensionality reduction before clustering, handling non-convex and complex-shaped clusters.",
        es: "El agrupamiento espectral usa valores propios de matrices de similitud para reducción dimensional antes del agrupamiento, manejando grupos no convexos.",
        de: "Spektrales Clustering nutzt Eigenwerte von Ähnlichkeitsmatrizen zur Dimensionsreduktion vor dem Clustering und behandelt nicht-konvexe Cluster.",
        nl: "Spectral clustering gebruikt eigenwaarden van similariteitsmatrices voor dimensiereductie vóór clustering, behandelt niet-convexe clusters."
      }
    },
    {
      question: {
        en: "What is the advantage of using multi-head attention?",
        es: "¿Cuál es la ventaja de usar atención multi-cabeza?",
        de: "Was ist der Vorteil von Multi-Head Attention?",
        nl: "Wat is het voordeel van multi-head attention?"
      },
      options: [
        {
          en: "Multiple representation subspaces",
          es: "Múltiples subespacios de representación",
          de: "Mehrere Repräsentationsunterräume",
          nl: "Meerdere representatie subruimtes"
        },
        {
          en: "Faster computation",
          es: "Computación más rápida",
          de: "Schnellere Berechnung",
          nl: "Snellere berekening"
        },
        {
          en: "Less memory",
          es: "Menos memoria",
          de: "Weniger Speicher",
          nl: "Minder geheugen"
        },
        {
          en: "Simpler gradients",
          es: "Gradientes más simples",
          de: "Einfachere Gradienten",
          nl: "Simpelere gradiënten"
        }
      ],
      correct: 0,
      explanation: {
        en: "Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions, learning diverse relationships.",
        es: "La atención multi-cabeza permite al modelo atender conjuntamente a información de diferentes subespacios de representación, aprendiendo relaciones diversas.",
        de: "Multi-Head Attention ermöglicht dem Modell, gemeinsam auf Informationen aus verschiedenen Repräsentationsunterräumen zu achten.",
        nl: "Multi-head attention laat het model gezamenlijk informatie uit verschillende representatie subruimtes bekijken, leert diverse relaties."
      }
    },
    {
      question: {
        en: "Which loss function is robust to outliers?",
        es: "¿Qué función de pérdida es robusta a valores atípicos?",
        de: "Welche Verlustfunktion ist robust gegenüber Ausreißern?",
        nl: "Welke verliesfunctie is robuust tegen outliers?"
      },
      options: [
        {
          en: "Huber loss",
          es: "Pérdida Huber",
          de: "Huber-Verlust",
          nl: "Huber verlies"
        },
        {
          en: "MSE",
          es: "MSE",
          de: "MSE",
          nl: "MSE"
        },
        {
          en: "Cross-entropy",
          es: "Entropía cruzada",
          de: "Kreuzentropie",
          nl: "Kruisentropie"
        },
        {
          en: "KL divergence",
          es: "Divergencia KL",
          de: "KL-Divergenz",
          nl: "KL divergentie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Huber loss is quadratic for small errors but linear for large errors, making it less sensitive to outliers than squared error while maintaining differentiability.",
        es: "La pérdida Huber es cuadrática para errores pequeños pero lineal para errores grandes, haciéndola menos sensible a valores atípicos que el error cuadrático.",
        de: "Huber-Verlust ist quadratisch für kleine Fehler aber linear für große Fehler, weniger empfindlich gegenüber Ausreißern als quadratischer Fehler.",
        nl: "Huber verlies is kwadratisch voor kleine fouten maar lineair voor grote fouten, minder gevoelig voor outliers dan kwadratische fout."
      }
    },
    {
      question: {
        en: "What does contrastive predictive coding learn?",
        es: "¿Qué aprende la codificación predictiva contrastiva?",
        de: "Was lernt Contrastive Predictive Coding?",
        nl: "Wat leert contrastive predictive coding?"
      },
      options: [
        {
          en: "Future representations",
          es: "Representaciones futuras",
          de: "Zukünftige Repräsentationen",
          nl: "Toekomstige representaties"
        },
        {
          en: "Past states",
          es: "Estados pasados",
          de: "Vergangene Zustände",
          nl: "Verleden toestanden"
        },
        {
          en: "Current features",
          es: "Características actuales",
          de: "Aktuelle Merkmale",
          nl: "Huidige features"
        },
        {
          en: "Static patterns",
          es: "Patrones estáticos",
          de: "Statische Muster",
          nl: "Statische patronen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Contrastive predictive coding learns representations by predicting future observations in latent space, maximizing mutual information across time.",
        es: "La codificación predictiva contrastiva aprende representaciones prediciendo observaciones futuras en espacio latente, maximizando información mutua en el tiempo.",
        de: "Contrastive Predictive Coding lernt Repräsentationen durch Vorhersage zukünftiger Beobachtungen im latenten Raum.",
        nl: "Contrastive predictive coding leert representaties door toekomstige observaties in latente ruimte te voorspellen, maximaliseert mutual information."
      }
    },
    {
      question: {
        en: "What is the purpose of reservoir computing?",
        es: "¿Cuál es el propósito de la computación de reservorio?",
        de: "Was ist der Zweck von Reservoir Computing?",
        nl: "Wat is het doel van reservoir computing?"
      },
      options: [
        {
          en: "Fixed random dynamics",
          es: "Dinámicas aleatorias fijas",
          de: "Feste zufällige Dynamik",
          nl: "Vaste willekeurige dynamiek"
        },
        {
          en: "Deep learning",
          es: "Aprendizaje profundo",
          de: "Deep Learning",
          nl: "Deep learning"
        },
        {
          en: "Feature extraction",
          es: "Extracción de características",
          de: "Merkmalsextraktion",
          nl: "Feature extractie"
        },
        {
          en: "Dimensionality reduction",
          es: "Reducción de dimensionalidad",
          de: "Dimensionsreduktion",
          nl: "Dimensiereductie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Reservoir computing uses a fixed random recurrent neural network (reservoir) with only output weights trained, exploiting complex dynamics for temporal processing.",
        es: "La computación de reservorio usa una red neuronal recurrente aleatoria fija con solo pesos de salida entrenados, explotando dinámicas complejas.",
        de: "Reservoir Computing nutzt ein festes zufälliges rekurrentes neuronales Netz mit nur trainierten Ausgangsgewichten.",
        nl: "Reservoir computing gebruikt een vast willekeurig recurrent neuraal netwerk met alleen output gewichten getraind, benut complexe dynamiek."
      }
    },
    {
      question: {
        en: "Which method generates synthetic data to augment training?",
        es: "¿Qué método genera datos sintéticos para aumentar entrenamiento?",
        de: "Welche Methode generiert synthetische Daten zur Trainingsergänzung?",
        nl: "Welke methode genereert synthetische data voor training augmentatie?"
      },
      options: [
        {
          en: "SMOTE",
          es: "SMOTE",
          de: "SMOTE",
          nl: "SMOTE"
        },
        {
          en: "PCA",
          es: "PCA",
          de: "PCA",
          nl: "PCA"
        },
        {
          en: "t-SNE",
          es: "t-SNE",
          de: "t-SNE",
          nl: "t-SNE"
        },
        {
          en: "LDA",
          es: "LDA",
          de: "LDA",
          nl: "LDA"
        }
      ],
      correct: 0,
      explanation: {
        en: "SMOTE (Synthetic Minority Over-sampling Technique) generates synthetic examples by interpolating between minority class samples to address class imbalance.",
        es: "SMOTE genera ejemplos sintéticos interpolando entre muestras de clase minoritaria para abordar el desequilibrio de clases.",
        de: "SMOTE generiert synthetische Beispiele durch Interpolation zwischen Minderheitsklassen-Proben zur Behandlung von Klassenungleichgewicht.",
        nl: "SMOTE genereert synthetische voorbeelden door interpolatie tussen minderheidsklasse samples om klasse-onbalans aan te pakken."
      }
    },
    {
      question: {
        en: "What problem does gradient accumulation solve?",
        es: "¿Qué problema resuelve la acumulación de gradientes?",
        de: "Welches Problem löst Gradientenakkumulation?",
        nl: "Welk probleem lost gradient accumulation op?"
      },
      options: [
        {
          en: "Large batch training with limited memory",
          es: "Entrenamiento de lote grande con memoria limitada",
          de: "Training mit großen Batches bei begrenztem Speicher",
          nl: "Grote batch training met beperkt geheugen"
        },
        {
          en: "Vanishing gradients",
          es: "Gradientes que desaparecen",
          de: "Verschwindende Gradienten",
          nl: "Verdwijnende gradiënten"
        },
        {
          en: "Overfitting",
          es: "Sobreajuste",
          de: "Überanpassung",
          nl: "Overfitting"
        },
        {
          en: "Slow convergence",
          es: "Convergencia lenta",
          de: "Langsame Konvergenz",
          nl: "Trage convergentie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gradient accumulation simulates large batch training by accumulating gradients over multiple small batches before updating, overcoming memory limitations.",
        es: "La acumulación de gradientes simula entrenamiento de lote grande acumulando gradientes sobre múltiples lotes pequeños antes de actualizar.",
        de: "Gradientenakkumulation simuliert Training mit großen Batches durch Akkumulation über mehrere kleine Batches vor der Aktualisierung.",
        nl: "Gradient accumulation simuleert grote batch training door gradiënten over meerdere kleine batches te accumuleren voor update."
      }
    },
    {
      question: {
        en: "What is the purpose of using reversible layers?",
        es: "¿Cuál es el propósito de usar capas reversibles?",
        de: "Was ist der Zweck von reversiblen Schichten?",
        nl: "Wat is het doel van reversible layers?"
      },
      options: [
        {
          en: "Memory efficiency",
          es: "Eficiencia de memoria",
          de: "Speichereffizienz",
          nl: "Geheugenefficiëntie"
        },
        {
          en: "Faster training",
          es: "Entrenamiento más rápido",
          de: "Schnelleres Training",
          nl: "Sneller trainen"
        },
        {
          en: "Better accuracy",
          es: "Mejor precisión",
          de: "Bessere Genauigkeit",
          nl: "Betere nauwkeurigheid"
        },
        {
          en: "Simpler architecture",
          es: "Arquitectura más simple",
          de: "Einfachere Architektur",
          nl: "Simpelere architectuur"
        }
      ],
      correct: 0,
      explanation: {
        en: "Reversible layers allow reconstruction of activations during backpropagation instead of storing them, dramatically reducing memory usage in deep networks.",
        es: "Las capas reversibles permiten reconstruir activaciones durante retropropagación en lugar de almacenarlas, reduciendo dramáticamente el uso de memoria.",
        de: "Reversible Schichten ermöglichen die Rekonstruktion von Aktivierungen während der Backpropagation statt sie zu speichern.",
        nl: "Reversible layers maken reconstructie van activaties tijdens backpropagation mogelijk in plaats van opslaan, vermindert geheugengebruik dramatisch."
      }
    },
    {
      question: {
        en: "What does the Wasserstein distance measure?",
        es: "¿Qué mide la distancia de Wasserstein?",
        de: "Was misst die Wasserstein-Distanz?",
        nl: "Wat meet de Wasserstein afstand?"
      },
      options: [
        {
          en: "Optimal transport cost",
          es: "Costo de transporte óptimo",
          de: "Optimale Transportkosten",
          nl: "Optimale transportkosten"
        },
        {
          en: "KL divergence",
          es: "Divergencia KL",
          de: "KL-Divergenz",
          nl: "KL divergentie"
        },
        {
          en: "Euclidean distance",
          es: "Distancia euclidiana",
          de: "Euklidische Distanz",
          nl: "Euclidische afstand"
        },
        {
          en: "Cosine similarity",
          es: "Similitud coseno",
          de: "Kosinus-Ähnlichkeit",
          nl: "Cosinus similariteit"
        }
      ],
      correct: 0,
      explanation: {
        en: "Wasserstein distance (Earth Mover's Distance) measures the minimum cost of transporting mass from one distribution to another, providing smooth gradients for optimization.",
        es: "La distancia de Wasserstein mide el costo mínimo de transportar masa de una distribución a otra, proporcionando gradientes suaves para optimización.",
        de: "Wasserstein-Distanz misst die minimalen Kosten für den Massentransport von einer Verteilung zur anderen und bietet glatte Gradienten.",
        nl: "Wasserstein afstand meet de minimale kosten van massa transport van één distributie naar een andere, geeft gladde gradiënten voor optimalisatie."
      }
    },
    {
      question: {
        en: "Which technique uses implicit differentiation for optimization?",
        es: "¿Qué técnica usa diferenciación implícita para optimización?",
        de: "Welche Technik nutzt implizite Differentiation für Optimierung?",
        nl: "Welke techniek gebruikt impliciete differentiatie voor optimalisatie?"
      },
      options: [
        {
          en: "Deep equilibrium models",
          es: "Modelos de equilibrio profundo",
          de: "Deep Equilibrium Modelle",
          nl: "Deep equilibrium modellen"
        },
        {
          en: "Standard CNNs",
          es: "CNNs estándar",
          de: "Standard-CNNs",
          nl: "Standaard CNNs"
        },
        {
          en: "Basic RNNs",
          es: "RNNs básicos",
          de: "Basis-RNNs",
          nl: "Basis RNNs"
        },
        {
          en: "Simple MLPs",
          es: "MLPs simples",
          de: "Einfache MLPs",
          nl: "Simpele MLPs"
        }
      ],
      correct: 0,
      explanation: {
        en: "Deep equilibrium models find fixed points of layer iterations and use implicit differentiation for gradients, achieving infinite depth with constant memory.",
        es: "Los modelos de equilibrio profundo encuentran puntos fijos de iteraciones de capas y usan diferenciación implícita para gradientes.",
        de: "Deep Equilibrium Modelle finden Fixpunkte von Schichtiterationen und nutzen implizite Differentiation für Gradienten.",
        nl: "Deep equilibrium modellen vinden vaste punten van laag iteraties en gebruiken impliciete differentiatie voor gradiënten."
      }
    },
    {
      question: {
        en: "What is the advantage of using mixture density networks?",
        es: "¿Cuál es la ventaja de usar redes de densidad mixta?",
        de: "Was ist der Vorteil von Mixture Density Networks?",
        nl: "Wat is het voordeel van mixture density networks?"
      },
      options: [
        {
          en: "Model multimodal distributions",
          es: "Modelar distribuciones multimodales",
          de: "Multimodale Verteilungen modellieren",
          nl: "Multimodale distributies modelleren"
        },
        {
          en: "Faster training",
          es: "Entrenamiento más rápido",
          de: "Schnelleres Training",
          nl: "Sneller trainen"
        },
        {
          en: "Less parameters",
          es: "Menos parámetros",
          de: "Weniger Parameter",
          nl: "Minder parameters"
        },
        {
          en: "Simpler loss",
          es: "Pérdida más simple",
          de: "Einfacherer Verlust",
          nl: "Simpelere verlies"
        }
      ],
      correct: 0,
      explanation: {
        en: "Mixture density networks output parameters of a mixture distribution, allowing them to model multimodal conditional distributions unlike standard regression.",
        es: "Las redes de densidad mixta emiten parámetros de una distribución mixta, permitiendo modelar distribuciones condicionales multimodales.",
        de: "Mixture Density Networks geben Parameter einer Mischverteilung aus und können multimodale bedingte Verteilungen modellieren.",
        nl: "Mixture density networks geven parameters van een mengdistributie uit, kunnen multimodale conditionele distributies modelleren."
      }
    },
    {
      question: {
        en: "What does influence function measure in ML?",
        es: "¿Qué mide la función de influencia en ML?",
        de: "Was misst die Einflussfunktion im ML?",
        nl: "Wat meet de influence function in ML?"
      },
      options: [
        {
          en: "Training point impact",
          es: "Impacto del punto de entrenamiento",
          de: "Einfluss von Trainingspunkten",
          nl: "Impact van trainingspunt"
        },
        {
          en: "Model complexity",
          es: "Complejidad del modelo",
          de: "Modellkomplexität",
          nl: "Model complexiteit"
        },
        {
          en: "Feature importance",
          es: "Importancia de características",
          de: "Merkmalswichtigkeit",
          nl: "Feature belangrijkheid"
        },
        {
          en: "Loss value",
          es: "Valor de pérdida",
          de: "Verlustwert",
          nl: "Verlieswaarde"
        }
      ],
      correct: 0,
      explanation: {
        en: "Influence functions approximate how model parameters or predictions would change if a training point were upweighted, useful for understanding model decisions.",
        es: "Las funciones de influencia aproximan cómo cambiarían los parámetros o predicciones si un punto de entrenamiento tuviera más peso.",
        de: "Einflussfunktionen approximieren, wie sich Modellparameter ändern würden, wenn ein Trainingspunkt höher gewichtet würde.",
        nl: "Influence functions benaderen hoe modelparameters zouden veranderen als een trainingspunt meer gewicht kreeg, nuttig voor model begrip."
      }
    },
    {
      question: {
        en: "Which method addresses label noise in training data?",
        es: "¿Qué método aborda el ruido de etiquetas en datos de entrenamiento?",
        de: "Welche Methode behandelt Label-Rauschen in Trainingsdaten?",
        nl: "Welke methode behandelt label ruis in trainingsdata?"
      },
      options: [
        {
          en: "Co-teaching",
          es: "Co-enseñanza",
          de: "Co-Teaching",
          nl: "Co-teaching"
        },
        {
          en: "Basic SGD",
          es: "SGD básico",
          de: "Basis-SGD",
          nl: "Basis SGD"
        },
        {
          en: "Standard dropout",
          es: "Dropout estándar",
          de: "Standard-Dropout",
          nl: "Standaard dropout"
        },
        {
          en: "Regular batch norm",
          es: "Norm por lotes regular",
          de: "Reguläre Batch-Norm",
          nl: "Reguliere batch norm"
        }
      ],
      correct: 0,
      explanation: {
        en: "Co-teaching uses two networks that teach each other by selecting clean samples based on small loss, reducing the impact of noisy labels during training.",
        es: "Co-enseñanza usa dos redes que se enseñan mutuamente seleccionando muestras limpias basadas en pérdida pequeña, reduciendo el impacto del ruido.",
        de: "Co-Teaching nutzt zwei Netzwerke, die sich gegenseitig lehren durch Auswahl sauberer Proben basierend auf kleinem Verlust.",
        nl: "Co-teaching gebruikt twee netwerken die elkaar leren door schone samples te selecteren op basis van klein verlies, vermindert impact van ruis."
      }
    },
    {
      question: {
        en: "What is the purpose of using Hopfield networks?",
        es: "¿Cuál es el propósito de usar redes de Hopfield?",
        de: "Was ist der Zweck von Hopfield-Netzwerken?",
        nl: "Wat is het doel van Hopfield netwerken?"
      },
      options: [
        {
          en: "Associative memory",
          es: "Memoria asociativa",
          de: "Assoziativspeicher",
          nl: "Associatief geheugen"
        },
        {
          en: "Classification",
          es: "Clasificación",
          de: "Klassifikation",
          nl: "Classificatie"
        },
        {
          en: "Regression",
          es: "Regresión",
          de: "Regression",
          nl: "Regressie"
        },
        {
          en: "Clustering",
          es: "Agrupamiento",
          de: "Clustering",
          nl: "Clustering"
        }
      ],
      correct: 0,
      explanation: {
        en: "Hopfield networks function as associative memory systems, storing patterns as energy minima and retrieving complete patterns from partial or noisy inputs.",
        es: "Las redes de Hopfield funcionan como sistemas de memoria asociativa, almacenando patrones como mínimos de energía y recuperando patrones completos.",
        de: "Hopfield-Netzwerke funktionieren als assoziative Speichersysteme, speichern Muster als Energieminima und rufen vollständige Muster ab.",
        nl: "Hopfield netwerken functioneren als associatieve geheugensystemen, slaan patronen op als energie minima en halen complete patronen op."
      }
    },
    {
      question: {
        en: "What does Neural ODE model?",
        es: "¿Qué modela Neural ODE?",
        de: "Was modelliert Neural ODE?",
        nl: "Wat modelleert Neural ODE?"
      },
      options: [
        {
          en: "Continuous dynamics",
          es: "Dinámicas continuas",
          de: "Kontinuierliche Dynamik",
          nl: "Continue dynamiek"
        },
        {
          en: "Discrete steps",
          es: "Pasos discretos",
          de: "Diskrete Schritte",
          nl: "Discrete stappen"
        },
        {
          en: "Static features",
          es: "Características estáticas",
          de: "Statische Merkmale",
          nl: "Statische features"
        },
        {
          en: "Fixed architectures",
          es: "Arquitecturas fijas",
          de: "Feste Architekturen",
          nl: "Vaste architecturen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Neural ODEs parameterize the derivative of hidden states using neural networks, modeling continuous dynamics with adaptive computation and memory efficiency.",
        es: "Neural ODEs parametrizan la derivada de estados ocultos usando redes neuronales, modelando dinámicas continuas con computación adaptativa.",
        de: "Neural ODEs parametrisieren die Ableitung verborgener Zustände mit neuronalen Netzen und modellieren kontinuierliche Dynamik.",
        nl: "Neural ODEs parametriseren de afgeleide van verborgen toestanden met neurale netwerken, modelleren continue dynamiek met adaptieve berekening."
      }
    },
    {
      question: {
        en: "Which technique improves sample efficiency in RL?",
        es: "¿Qué técnica mejora la eficiencia de muestra en RL?",
        de: "Welche Technik verbessert die Sample-Effizienz in RL?",
        nl: "Welke techniek verbetert sample efficiency in RL?"
      },
      options: [
        {
          en: "Model-based RL",
          es: "RL basado en modelo",
          de: "Modellbasiertes RL",
          nl: "Model-gebaseerde RL"
        },
        {
          en: "Random exploration",
          es: "Exploración aleatoria",
          de: "Zufällige Exploration",
          nl: "Willekeurige exploratie"
        },
        {
          en: "Greedy policy",
          es: "Política codiciosa",
          de: "Gierige Politik",
          nl: "Greedy beleid"
        },
        {
          en: "Fixed learning rate",
          es: "Tasa de aprendizaje fija",
          de: "Feste Lernrate",
          nl: "Vaste leersnelheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Model-based RL learns a model of environment dynamics, allowing planning and simulation to improve sample efficiency compared to model-free methods.",
        es: "RL basado en modelo aprende un modelo de dinámicas del entorno, permitiendo planificación y simulación para mejorar eficiencia de muestra.",
        de: "Modellbasiertes RL lernt ein Modell der Umgebungsdynamik und ermöglicht Planung und Simulation für bessere Sample-Effizienz.",
        nl: "Model-gebaseerde RL leert een model van omgevingsdynamiek, maakt planning en simulatie mogelijk voor betere sample efficiency."
      }
    },
    {
      question: {
        en: "What is the purpose of using reversible layers?",
        es: "¿Cuál es el propósito de usar capas reversibles?",
        de: "Was ist der Zweck von reversiblen Schichten?",
        nl: "Wat is het doel van reversible layers?"
      },
      options: [
        {
          en: "Memory efficiency",
          es: "Eficiencia de memoria",
          de: "Speichereffizienz",
          nl: "Geheugenefficiëntie"
        },
        {
          en: "Faster training",
          es: "Entrenamiento más rápido",
          de: "Schnelleres Training",
          nl: "Sneller trainen"
        },
        {
          en: "Better accuracy",
          es: "Mejor precisión",
          de: "Bessere Genauigkeit",
          nl: "Betere nauwkeurigheid"
        },
        {
          en: "Simpler architecture",
          es: "Arquitectura más simple",
          de: "Einfachere Architektur",
          nl: "Simpelere architectuur"
        }
      ],
      correct: 0,
      explanation: {
        en: "Reversible layers allow reconstruction of activations during backpropagation instead of storing them, dramatically reducing memory usage in deep networks.",
        es: "Las capas reversibles permiten reconstruir activaciones durante retropropagación en lugar de almacenarlas, reduciendo dramáticamente el uso de memoria.",
        de: "Reversible Schichten ermöglichen die Rekonstruktion von Aktivierungen während der Backpropagation statt sie zu speichern.",
        nl: "Reversible layers maken reconstructie van activaties tijdens backpropagation mogelijk in plaats van opslaan, vermindert geheugengebruik dramatisch."
      }
    },
    {
      question: {
        en: "What does the Wasserstein distance measure?",
        es: "¿Qué mide la distancia de Wasserstein?",
        de: "Was misst die Wasserstein-Distanz?",
        nl: "Wat meet de Wasserstein afstand?"
      },
      options: [
        {
          en: "Optimal transport cost",
          es: "Costo de transporte óptimo",
          de: "Optimale Transportkosten",
          nl: "Optimale transportkosten"
        },
        {
          en: "KL divergence",
          es: "Divergencia KL",
          de: "KL-Divergenz",
          nl: "KL divergentie"
        },
        {
          en: "Euclidean distance",
          es: "Distancia euclidiana",
          de: "Euklidische Distanz",
          nl: "Euclidische afstand"
        },
        {
          en: "Cosine similarity",
          es: "Similitud coseno",
          de: "Kosinus-Ähnlichkeit",
          nl: "Cosinus similariteit"
        }
      ],
      correct: 0,
      explanation: {
        en: "Wasserstein distance (Earth Mover's Distance) measures the minimum cost of transporting mass from one distribution to another, providing smooth gradients for optimization.",
        es: "La distancia de Wasserstein mide el costo mínimo de transportar masa de una distribución a otra, proporcionando gradientes suaves para optimización.",
        de: "Wasserstein-Distanz misst die minimalen Kosten für den Massentransport von einer Verteilung zur anderen und bietet glatte Gradienten.",
        nl: "Wasserstein afstand meet de minimale kosten van massa transport van één distributie naar een andere, geeft gladde gradiënten voor optimalisatie."
      }
    },
    {
      question: {
        en: "Which technique uses implicit differentiation for optimization?",
        es: "¿Qué técnica usa diferenciación implícita para optimización?",
        de: "Welche Technik nutzt implizite Differentiation für Optimierung?",
        nl: "Welke techniek gebruikt impliciete differentiatie voor optimalisatie?"
      },
      options: [
        {
          en: "Deep equilibrium models",
          es: "Modelos de equilibrio profundo",
          de: "Deep Equilibrium Modelle",
          nl: "Deep equilibrium modellen"
        },
        {
          en: "Standard CNNs",
          es: "CNNs estándar",
          de: "Standard-CNNs",
          nl: "Standaard CNNs"
        },
        {
          en: "Basic RNNs",
          es: "RNNs básicos",
          de: "Basis-RNNs",
          nl: "Basis RNNs"
        },
        {
          en: "Simple MLPs",
          es: "MLPs simples",
          de: "Einfache MLPs",
          nl: "Simpele MLPs"
        }
      ],
      correct: 0,
      explanation: {
        en: "Deep equilibrium models find fixed points of layer iterations and use implicit differentiation for gradients, achieving infinite depth with constant memory.",
        es: "Los modelos de equilibrio profundo encuentran puntos fijos de iteraciones de capas y usan diferenciación implícita para gradientes.",
        de: "Deep Equilibrium Modelle finden Fixpunkte von Schichtiterationen und nutzen implizite Differentiation für Gradienten.",
        nl: "Deep equilibrium modellen vinden vaste punten van laag iteraties en gebruiken impliciete differentiatie voor gradiënten."
      }
    },
    {
      question: {
        en: "What is the advantage of using mixture density networks?",
        es: "¿Cuál es la ventaja de usar redes de densidad mixta?",
        de: "Was ist der Vorteil von Mixture Density Networks?",
        nl: "Wat is het voordeel van mixture density networks?"
      },
      options: [
        {
          en: "Model multimodal distributions",
          es: "Modelar distribuciones multimodales",
          de: "Multimodale Verteilungen modellieren",
          nl: "Multimodale distributies modelleren"
        },
        {
          en: "Faster training",
          es: "Entrenamiento más rápido",
          de: "Schnelleres Training",
          nl: "Sneller trainen"
        },
        {
          en: "Less parameters",
          es: "Menos parámetros",
          de: "Weniger Parameter",
          nl: "Minder parameters"
        },
        {
          en: "Simpler loss",
          es: "Pérdida más simple",
          de: "Einfacherer Verlust",
          nl: "Simpelere verlies"
        }
      ],
      correct: 0,
      explanation: {
        en: "Mixture density networks output parameters of a mixture distribution, allowing them to model multimodal conditional distributions unlike standard regression.",
        es: "Las redes de densidad mixta emiten parámetros de una distribución mixta, permitiendo modelar distribuciones condicionales multimodales.",
        de: "Mixture Density Networks geben Parameter einer Mischverteilung aus und können multimodale bedingte Verteilungen modellieren.",
        nl: "Mixture density networks geven parameters van een mengdistributie uit, kunnen multimodale conditionele distributies modelleren."
      }
    },
    {
      question: {
        en: "What does influence function measure in ML?",
        es: "¿Qué mide la función de influencia en ML?",
        de: "Was misst die Einflussfunktion im ML?",
        nl: "Wat meet de influence function in ML?"
      },
      options: [
        {
          en: "Training point impact",
          es: "Impacto del punto de entrenamiento",
          de: "Einfluss von Trainingspunkten",
          nl: "Impact van trainingspunt"
        },
        {
          en: "Model complexity",
          es: "Complejidad del modelo",
          de: "Modellkomplexität",
          nl: "Model complexiteit"
        },
        {
          en: "Feature importance",
          es: "Importancia de características",
          de: "Merkmalswichtigkeit",
          nl: "Feature belangrijkheid"
        },
        {
          en: "Loss value",
          es: "Valor de pérdida",
          de: "Verlustwert",
          nl: "Verlieswaarde"
        }
      ],
      correct: 0,
      explanation: {
        en: "Influence functions approximate how model parameters or predictions would change if a training point were upweighted, useful for understanding model decisions.",
        es: "Las funciones de influencia aproximan cómo cambiarían los parámetros o predicciones si un punto de entrenamiento tuviera más peso.",
        de: "Einflussfunktionen approximieren, wie sich Modellparameter ändern würden, wenn ein Trainingspunkt höher gewichtet würde.",
        nl: "Influence functions benaderen hoe modelparameters zouden veranderen als een trainingspunt meer gewicht kreeg, nuttig voor model begrip."
      }
    },
    {
      question: {
        en: "Which method addresses label noise in training data?",
        es: "¿Qué método aborda el ruido de etiquetas en datos de entrenamiento?",
        de: "Welche Methode behandelt Label-Rauschen in Trainingsdaten?",
        nl: "Welke methode behandelt label ruis in trainingsdata?"
      },
      options: [
        {
          en: "Co-teaching",
          es: "Co-enseñanza",
          de: "Co-Teaching",
          nl: "Co-teaching"
        },
        {
          en: "Basic SGD",
          es: "SGD básico",
          de: "Basis-SGD",
          nl: "Basis SGD"
        },
        {
          en: "Standard dropout",
          es: "Dropout estándar",
          de: "Standard-Dropout",
          nl: "Standaard dropout"
        },
        {
          en: "Regular batch norm",
          es: "Norm por lotes regular",
          de: "Reguläre Batch-Norm",
          nl: "Reguliere batch norm"
        }
      ],
      correct: 0,
      explanation: {
        en: "Co-teaching uses two networks that teach each other by selecting clean samples based on small loss, reducing the impact of noisy labels during training.",
        es: "Co-enseñanza usa dos redes que se enseñan mutuamente seleccionando muestras limpias basadas en pérdida pequeña, reduciendo el impacto del ruido.",
        de: "Co-Teaching nutzt zwei Netzwerke, die sich gegenseitig lehren durch Auswahl sauberer Proben basierend auf kleinem Verlust.",
        nl: "Co-teaching gebruikt twee netwerken die elkaar leren door schone samples te selecteren op basis van klein verlies, vermindert impact van ruis."
      }
    },
    {
      question: {
        en: "What is the purpose of using Hopfield networks?",
        es: "¿Cuál es el propósito de usar redes de Hopfield?",
        de: "Was ist der Zweck von Hopfield-Netzwerken?",
        nl: "Wat is het doel van Hopfield netwerken?"
      },
      options: [
        {
          en: "Associative memory",
          es: "Memoria asociativa",
          de: "Assoziativspeicher",
          nl: "Associatief geheugen"
        },
        {
          en: "Classification",
          es: "Clasificación",
          de: "Klassifikation",
          nl: "Classificatie"
        },
        {
          en: "Regression",
          es: "Regresión",
          de: "Regression",
          nl: "Regressie"
        },
        {
          en: "Clustering",
          es: "Agrupamiento",
          de: "Clustering",
          nl: "Clustering"
        }
      ],
      correct: 0,
      explanation: {
        en: "Hopfield networks function as associative memory systems, storing patterns as energy minima and retrieving complete patterns from partial or noisy inputs.",
        es: "Las redes de Hopfield funcionan como sistemas de memoria asociativa, almacenando patrones como mínimos de energía y recuperando patrones completos.",
        de: "Hopfield-Netzwerke funktionieren als assoziative Speichersysteme, speichern Muster als Energieminima und rufen vollständige Muster ab.",
        nl: "Hopfield netwerken functioneren als associatieve geheugensystemen, slaan patronen op als energie minima en halen complete patronen op."
      }
    },
    {
      question: {
        en: "What does Neural ODE model?",
        es: "¿Qué modela Neural ODE?",
        de: "Was modelliert Neural ODE?",
        nl: "Wat modelleert Neural ODE?"
      },
      options: [
        {
          en: "Continuous dynamics",
          es: "Dinámicas continuas",
          de: "Kontinuierliche Dynamik",
          nl: "Continue dynamiek"
        },
        {
          en: "Discrete steps",
          es: "Pasos discretos",
          de: "Diskrete Schritte",
          nl: "Discrete stappen"
        },
        {
          en: "Static features",
          es: "Características estáticas",
          de: "Statische Merkmale",
          nl: "Statische features"
        },
        {
          en: "Fixed architectures",
          es: "Arquitecturas fijas",
          de: "Feste Architekturen",
          nl: "Vaste architecturen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Neural ODEs parameterize the derivative of hidden states using neural networks, modeling continuous dynamics with adaptive computation and memory efficiency.",
        es: "Neural ODEs parametrizan la derivada de estados ocultos usando redes neuronales, modelando dinámicas continuas con computación adaptativa.",
        de: "Neural ODEs parametrisieren die Ableitung verborgener Zustände mit neuronalen Netzen und modellieren kontinuierliche Dynamik.",
        nl: "Neural ODEs parametriseren de afgeleide van verborgen toestanden met neurale netwerken, modelleren continue dynamiek met adaptieve berekening."
      }
    },
    {
      question: {
        en: "Which technique improves sample efficiency in RL?",
        es: "¿Qué técnica mejora la eficiencia de muestra en RL?",
        de: "Welche Technik verbessert die Sample-Effizienz in RL?",
        nl: "Welke techniek verbetert sample efficiency in RL?"
      },
      options: [
        {
          en: "Model-based RL",
          es: "RL basado en modelo",
          de: "Modellbasiertes RL",
          nl: "Model-gebaseerde RL"
        },
        {
          en: "Random exploration",
          es: "Exploración aleatoria",
          de: "Zufällige Exploration",
          nl: "Willekeurige exploratie"
        },
        {
          en: "Greedy policy",
          es: "Política codiciosa",
          de: "Gierige Politik",
          nl: "Greedy beleid"
        },
        {
          en: "Fixed learning rate",
          es: "Tasa de aprendizaje fija",
          de: "Feste Lernrate",
          nl: "Vaste leersnelheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Model-based RL learns a model of environment dynamics, allowing planning and simulation to improve sample efficiency compared to model-free methods.",
        es: "RL basado en modelo aprende un modelo de dinámicas del entorno, permitiendo planificación y simulación para mejorar eficiencia de muestra.",
        de: "Modellbasiertes RL lernt ein Modell der Umgebungsdynamik und ermöglicht Planung und Simulation für bessere Sample-Effizienz.",
        nl: "Model-gebaseerde RL leert een model van omgevingsdynamiek, maakt planning en simulatie mogelijk voor betere sample efficiency."
      }
    }
  ]
};