module.exports = {
  questions: [
    {
      question: {
        en: "What is the computational complexity of training SVM?",
        es: "¿Cuál es la complejidad computacional de entrenar SVM?",
        de: "Was ist die Rechenkomplexität beim Training von SVM?",
        nl: "Wat is de computationele complexiteit van SVM training?"
      },
      options: [
        {
          en: "O(n³) worst case",
          es: "O(n³) peor caso",
          de: "O(n³) schlimmster Fall",
          nl: "O(n³) slechtste geval"
        },
        {
          en: "O(n log n)",
          es: "O(n log n)",
          de: "O(n log n)",
          nl: "O(n log n)"
        },
        {
          en: "O(n²)",
          es: "O(n²)",
          de: "O(n²)",
          nl: "O(n²)"
        },
        {
          en: "O(n)",
          es: "O(n)",
          de: "O(n)",
          nl: "O(n)"
        }
      ],
      correct: 0,
      explanation: {
        en: "SVM training has O(n³) worst-case complexity due to quadratic programming. In practice, optimized algorithms like SMO achieve better performance around O(n²).",
        es: "El entrenamiento SVM tiene complejidad O(n³) en el peor caso debido a la programación cuadrática. En la práctica, algoritmos como SMO logran mejor rendimiento.",
        de: "SVM-Training hat O(n³) Worst-Case-Komplexität wegen quadratischer Programmierung. In der Praxis erreichen Algorithmen wie SMO bessere Leistung.",
        nl: "SVM-training heeft O(n³) slechtste-geval complexiteit door kwadratisch programmeren. In de praktijk bereiken algoritmen zoals SMO betere prestaties."
      }
    },
    {
      question: {
        en: "What does the Kullback-Leibler divergence measure?",
        es: "¿Qué mide la divergencia de Kullback-Leibler?",
        de: "Was misst die Kullback-Leibler-Divergenz?",
        nl: "Wat meet de Kullback-Leibler divergentie?"
      },
      options: [
        {
          en: "Difference between probability distributions",
          es: "Diferencia entre distribuciones de probabilidad",
          de: "Unterschied zwischen Wahrscheinlichkeitsverteilungen",
          nl: "Verschil tussen kansverdelingen"
        },
        {
          en: "Model accuracy",
          es: "Precisión del modelo",
          de: "Modellgenauigkeit",
          nl: "Model nauwkeurigheid"
        },
        {
          en: "Feature importance",
          es: "Importancia de características",
          de: "Merkmalswichtigkeit",
          nl: "Kenmerk belangrijkheid"
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
        en: "KL divergence measures how one probability distribution differs from a reference distribution. It's not symmetric and is often used in variational inference and information theory.",
        es: "La divergencia KL mide cómo una distribución de probabilidad difiere de una distribución de referencia. No es simétrica y se usa en inferencia variacional.",
        de: "KL-Divergenz misst, wie eine Wahrscheinlichkeitsverteilung von einer Referenzverteilung abweicht. Sie ist nicht symmetrisch und wird oft verwendet.",
        nl: "KL-divergentie meet hoe een kansverdeling afwijkt van een referentieverdeling. Het is niet symmetrisch en wordt vaak gebruikt in variationele inferentie."
      }
    },
    {
      question: {
        en: "Which technique helps prevent mode collapse in GANs?",
        es: "¿Qué técnica ayuda a prevenir el colapso de modo en GANs?",
        de: "Welche Technik verhindert Modenkollaps in GANs?",
        nl: "Welke techniek helpt mode collapse in GANs voorkomen?"
      },
      options: [
        {
          en: "Wasserstein loss",
          es: "Pérdida Wasserstein",
          de: "Wasserstein-Verlust",
          nl: "Wasserstein verlies"
        },
        {
          en: "Mean squared error",
          es: "Error cuadrático medio",
          de: "Mittlerer quadratischer Fehler",
          nl: "Gemiddelde kwadratische fout"
        },
        {
          en: "Cross-entropy",
          es: "Entropía cruzada",
          de: "Kreuzentropie",
          nl: "Kruisentropie"
        },
        {
          en: "Hinge loss",
          es: "Pérdida bisagra",
          de: "Scharnierverlust",
          nl: "Hinge verlies"
        }
      ],
      correct: 0,
      explanation: {
        en: "Wasserstein loss (used in WGAN) provides smoother gradients and helps prevent mode collapse by measuring Earth Mover's Distance between distributions.",
        es: "La pérdida Wasserstein (usada en WGAN) proporciona gradientes más suaves y ayuda a prevenir el colapso de modo midiendo la distancia de transporte.",
        de: "Wasserstein-Verlust (in WGAN) liefert glattere Gradienten und verhindert Modenkollaps durch Messung der Earth Mover's Distance.",
        nl: "Wasserstein verlies (gebruikt in WGAN) geeft gladdere gradiënten en helpt mode collapse voorkomen door Earth Mover's Distance te meten."
      }
    },
    {
      question: {
        en: "What is the purpose of layer normalization?",
        es: "¿Cuál es el propósito de la normalización de capa?",
        de: "Was ist der Zweck der Schichtnormalisierung?",
        nl: "Wat is het doel van layer normalization?"
      },
      options: [
        {
          en: "Normalize across features",
          es: "Normalizar entre características",
          de: "Normalisierung über Merkmale",
          nl: "Normaliseren over features"
        },
        {
          en: "Normalize across batch",
          es: "Normalizar entre lote",
          de: "Normalisierung über Batch",
          nl: "Normaliseren over batch"
        },
        {
          en: "Reduce parameters",
          es: "Reducir parámetros",
          de: "Parameter reduzieren",
          nl: "Parameters verminderen"
        },
        {
          en: "Increase depth",
          es: "Aumentar profundidad",
          de: "Tiefe erhöhen",
          nl: "Diepte verhogen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Layer normalization normalizes across features for each sample independently, unlike batch normalization. It's particularly useful in RNNs and when batch size is small.",
        es: "La normalización de capa normaliza entre características para cada muestra independientemente. Es útil en RNNs y cuando el tamaño del lote es pequeño.",
        de: "Layer Normalization normalisiert über Merkmale für jede Probe unabhängig. Es ist besonders nützlich in RNNs und bei kleiner Batch-Größe.",
        nl: "Layer normalization normaliseert over features voor elk sample onafhankelijk. Het is vooral nuttig in RNNs en bij kleine batch grootte."
      }
    },
    {
      question: {
        en: "What is the main advantage of using LSTM over vanilla RNN?",
        es: "¿Cuál es la ventaja principal de usar LSTM sobre RNN vanilla?",
        de: "Was ist der Hauptvorteil von LSTM gegenüber Vanilla RNN?",
        nl: "Wat is het hoofdvoordeel van LSTM boven vanilla RNN?"
      },
      options: [
        {
          en: "Handles long-term dependencies",
          es: "Maneja dependencias a largo plazo",
          de: "Behandelt Langzeitabhängigkeiten",
          nl: "Behandelt lange-termijn afhankelijkheden"
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
          en: "Simpler architecture",
          es: "Arquitectura más simple",
          de: "Einfachere Architektur",
          nl: "Simpelere architectuur"
        }
      ],
      correct: 0,
      explanation: {
        en: "LSTMs solve the vanishing gradient problem through gates that control information flow, allowing them to capture long-term dependencies better than vanilla RNNs.",
        es: "Los LSTM resuelven el problema del gradiente que desaparece mediante puertas que controlan el flujo de información, capturando dependencias a largo plazo.",
        de: "LSTMs lösen das Vanishing Gradient Problem durch Gates, die den Informationsfluss steuern und Langzeitabhängigkeiten besser erfassen.",
        nl: "LSTMs lossen het vanishing gradient probleem op via gates die informatieflow controleren, waardoor ze lange-termijn afhankelijkheden beter vastleggen."
      }
    },
    {
      question: {
        en: "What does the attention mechanism compute?",
        es: "¿Qué calcula el mecanismo de atención?",
        de: "Was berechnet der Aufmerksamkeitsmechanismus?",
        nl: "Wat berekent het attention mechanisme?"
      },
      options: [
        {
          en: "Weighted importance scores",
          es: "Puntuaciones de importancia ponderadas",
          de: "Gewichtete Wichtigkeitswerte",
          nl: "Gewogen belangrijkheidsscores"
        },
        {
          en: "Gradient updates",
          es: "Actualizaciones de gradiente",
          de: "Gradientenaktualisierungen",
          nl: "Gradiënt updates"
        },
        {
          en: "Loss values",
          es: "Valores de pérdida",
          de: "Verlustwerte",
          nl: "Verlieswaarden"
        },
        {
          en: "Learning rates",
          es: "Tasas de aprendizaje",
          de: "Lernraten",
          nl: "Leersnelheden"
        }
      ],
      correct: 0,
      explanation: {
        en: "Attention mechanisms compute weighted importance scores that determine how much focus to place on different parts of the input when producing each output element.",
        es: "Los mecanismos de atención calculan puntuaciones de importancia ponderadas que determinan cuánto enfoque poner en diferentes partes de la entrada.",
        de: "Aufmerksamkeitsmechanismen berechnen gewichtete Wichtigkeitswerte, die bestimmen, wie viel Fokus auf verschiedene Eingabeteile gelegt wird.",
        nl: "Attention mechanismen berekenen gewogen belangrijkheidsscores die bepalen hoeveel focus op verschillende delen van de input wordt gelegd."
      }
    },
    {
      question: {
        en: "Which optimizer adapts learning rate per parameter?",
        es: "¿Qué optimizador adapta la tasa de aprendizaje por parámetro?",
        de: "Welcher Optimierer passt die Lernrate pro Parameter an?",
        nl: "Welke optimizer past leersnelheid per parameter aan?"
      },
      options: [
        {
          en: "AdaGrad",
          es: "AdaGrad",
          de: "AdaGrad",
          nl: "AdaGrad"
        },
        {
          en: "SGD",
          es: "SGD",
          de: "SGD",
          nl: "SGD"
        },
        {
          en: "Momentum",
          es: "Momentum",
          de: "Momentum",
          nl: "Momentum"
        },
        {
          en: "Batch GD",
          es: "Batch GD",
          de: "Batch GD",
          nl: "Batch GD"
        }
      ],
      correct: 0,
      explanation: {
        en: "AdaGrad adapts the learning rate for each parameter based on historical gradients, performing smaller updates for frequently updated parameters.",
        es: "AdaGrad adapta la tasa de aprendizaje para cada parámetro basándose en gradientes históricos, haciendo actualizaciones más pequeñas para parámetros frecuentes.",
        de: "AdaGrad passt die Lernrate für jeden Parameter basierend auf historischen Gradienten an, mit kleineren Updates für häufig aktualisierte Parameter.",
        nl: "AdaGrad past de leersnelheid voor elke parameter aan op basis van historische gradiënten, met kleinere updates voor vaak bijgewerkte parameters."
      }
    },
    {
      question: {
        en: "What is the purpose of skip connections in ResNet?",
        es: "¿Cuál es el propósito de las conexiones de salto en ResNet?",
        de: "Was ist der Zweck von Skip-Verbindungen in ResNet?",
        nl: "Wat is het doel van skip connections in ResNet?"
      },
      options: [
        {
          en: "Enable gradient flow",
          es: "Permitir flujo de gradiente",
          de: "Gradientenfluss ermöglichen",
          nl: "Gradiëntenstroom mogelijk maken"
        },
        {
          en: "Reduce parameters",
          es: "Reducir parámetros",
          de: "Parameter reduzieren",
          nl: "Parameters verminderen"
        },
        {
          en: "Increase width",
          es: "Aumentar anchura",
          de: "Breite erhöhen",
          nl: "Breedte verhogen"
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
        en: "Skip connections allow gradients to flow directly through shortcuts, solving the vanishing gradient problem and enabling training of very deep networks (100+ layers).",
        es: "Las conexiones de salto permiten que los gradientes fluyan directamente a través de atajos, resolviendo el problema del gradiente que desaparece.",
        de: "Skip-Verbindungen ermöglichen direkten Gradientenfluss durch Abkürzungen und lösen das Vanishing Gradient Problem für sehr tiefe Netze.",
        nl: "Skip connections laten gradiënten direct doorstromen via shortcuts, wat het vanishing gradient probleem oplost voor zeer diepe netwerken."
      }
    },
    {
      question: {
        en: "What type of regularization does dropout implement?",
        es: "¿Qué tipo de regularización implementa dropout?",
        de: "Welche Art von Regularisierung implementiert Dropout?",
        nl: "Welk type regularisatie implementeert dropout?"
      },
      options: [
        {
          en: "Ensemble averaging",
          es: "Promedio de conjunto",
          de: "Ensemble-Mittelung",
          nl: "Ensemble middeling"
        },
        {
          en: "Weight decay",
          es: "Decaimiento de peso",
          de: "Gewichtsabnahme",
          nl: "Gewichtsverval"
        },
        {
          en: "Early stopping",
          es: "Parada temprana",
          de: "Frühes Stoppen",
          nl: "Vroeg stoppen"
        },
        {
          en: "Data augmentation",
          es: "Aumento de datos",
          de: "Datenaugmentation",
          nl: "Data augmentatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Dropout can be interpreted as training an ensemble of neural networks with shared weights, where each network sees a different subset of neurons.",
        es: "Dropout se puede interpretar como entrenar un conjunto de redes neuronales con pesos compartidos, donde cada red ve un subconjunto diferente de neuronas.",
        de: "Dropout kann als Training eines Ensembles neuronaler Netze mit geteilten Gewichten interpretiert werden, wobei jedes Netz andere Neuronen sieht.",
        nl: "Dropout kan gezien worden als het trainen van een ensemble neurale netwerken met gedeelde gewichten, waarbij elk netwerk andere neuronen ziet."
      }
    },
    {
      question: {
        en: "What is the main challenge in training deep networks?",
        es: "¿Cuál es el principal desafío al entrenar redes profundas?",
        de: "Was ist die Hauptherausforderung beim Training tiefer Netze?",
        nl: "Wat is de hoofduitdaging bij het trainen van diepe netwerken?"
      },
      options: [
        {
          en: "Vanishing/exploding gradients",
          es: "Gradientes que desaparecen/explotan",
          de: "Verschwindende/explodierende Gradienten",
          nl: "Verdwijnende/exploderende gradiënten"
        },
        {
          en: "Too few parameters",
          es: "Muy pocos parámetros",
          de: "Zu wenige Parameter",
          nl: "Te weinig parameters"
        },
        {
          en: "Limited data",
          es: "Datos limitados",
          de: "Begrenzte Daten",
          nl: "Beperkte data"
        },
        {
          en: "Slow inference",
          es: "Inferencia lenta",
          de: "Langsame Inferenz",
          nl: "Trage inferentie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Vanishing/exploding gradients occur when gradients become extremely small or large as they backpropagate through many layers, making training unstable.",
        es: "Los gradientes que desaparecen/explotan ocurren cuando los gradientes se vuelven extremadamente pequeños o grandes al retropropagarse por muchas capas.",
        de: "Verschwindende/explodierende Gradienten treten auf, wenn Gradienten beim Backpropagation durch viele Schichten extrem klein oder groß werden.",
        nl: "Verdwijnende/exploderende gradiënten ontstaan wanneer gradiënten extreem klein of groot worden bij backpropagation door veel lagen."
      }
    },
    {
      question: {
        en: "What does the F-beta score emphasize when beta > 1?",
        es: "¿Qué enfatiza la puntuación F-beta cuando beta > 1?",
        de: "Was betont der F-Beta-Score wenn Beta > 1?",
        nl: "Wat benadrukt de F-beta score als beta > 1?"
      },
      options: [
        {
          en: "Recall over precision",
          es: "Recall sobre precisión",
          de: "Recall über Präzision",
          nl: "Recall boven precisie"
        },
        {
          en: "Precision over recall",
          es: "Precisión sobre recall",
          de: "Präzision über Recall",
          nl: "Precisie boven recall"
        },
        {
          en: "Equal weight",
          es: "Peso igual",
          de: "Gleiches Gewicht",
          nl: "Gelijk gewicht"
        },
        {
          en: "Accuracy only",
          es: "Solo precisión",
          de: "Nur Genauigkeit",
          nl: "Alleen nauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "When beta > 1, F-beta score gives more weight to recall. Beta = 2 means recall is twice as important as precision. F1 score uses beta = 1 for equal weight.",
        es: "Cuando beta > 1, la puntuación F-beta da más peso al recall. Beta = 2 significa que recall es dos veces más importante que la precisión.",
        de: "Bei Beta > 1 gewichtet der F-Beta-Score Recall stärker. Beta = 2 bedeutet, dass Recall doppelt so wichtig ist wie Präzision.",
        nl: "Als beta > 1 geeft F-beta score meer gewicht aan recall. Beta = 2 betekent dat recall twee keer zo belangrijk is als precisie."
      }
    },
    {
      question: {
        en: "What is the purpose of beam search in sequence generation?",
        es: "¿Cuál es el propósito de búsqueda de haz en generación de secuencias?",
        de: "Was ist der Zweck der Strahlsuche bei der Sequenzgenerierung?",
        nl: "Wat is het doel van beam search bij sequentiegeneratie?"
      },
      options: [
        {
          en: "Find better sequences",
          es: "Encontrar mejores secuencias",
          de: "Bessere Sequenzen finden",
          nl: "Betere sequenties vinden"
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
          en: "Simplify model",
          es: "Simplificar modelo",
          de: "Modell vereinfachen",
          nl: "Model vereenvoudigen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Beam search explores multiple candidate sequences simultaneously, keeping the k most probable partial sequences at each step, finding better outputs than greedy search.",
        es: "La búsqueda de haz explora múltiples secuencias candidatas simultáneamente, manteniendo las k secuencias parciales más probables en cada paso.",
        de: "Strahlsuche erkundet mehrere Kandidatensequenzen gleichzeitig und behält die k wahrscheinlichsten Teilsequenzen bei jedem Schritt.",
        nl: "Beam search verkent meerdere kandidaatsequenties tegelijk, houdt de k meest waarschijnlijke deelsequenties bij elke stap voor betere output."
      }
    },
    {
      question: {
        en: "Which method reduces internal covariate shift?",
        es: "¿Qué método reduce el cambio de covarianza interno?",
        de: "Welche Methode reduziert interne Kovarianzverschiebung?",
        nl: "Welke methode vermindert interne covariate shift?"
      },
      options: [
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
        },
        {
          en: "Data shuffling",
          es: "Mezcla de datos",
          de: "Datenmischung",
          nl: "Data shuffling"
        }
      ],
      correct: 0,
      explanation: {
        en: "Batch normalization reduces internal covariate shift by normalizing layer inputs, stabilizing the distribution of activations during training.",
        es: "La normalización por lotes reduce el cambio de covarianza interno normalizando las entradas de capa, estabilizando la distribución de activaciones.",
        de: "Batch-Normalisierung reduziert interne Kovarianzverschiebung durch Normalisierung der Schichteingaben und stabilisiert die Aktivierungsverteilung.",
        nl: "Batch normalisatie vermindert interne covariate shift door laaginputs te normaliseren, wat de distributie van activaties stabiliseert."
      }
    },
    {
      question: {
        en: "What is the advantage of using GRU over LSTM?",
        es: "¿Cuál es la ventaja de usar GRU sobre LSTM?",
        de: "Was ist der Vorteil von GRU gegenüber LSTM?",
        nl: "Wat is het voordeel van GRU boven LSTM?"
      },
      options: [
        {
          en: "Fewer parameters",
          es: "Menos parámetros",
          de: "Weniger Parameter",
          nl: "Minder parameters"
        },
        {
          en: "Better accuracy",
          es: "Mejor precisión",
          de: "Bessere Genauigkeit",
          nl: "Betere nauwkeurigheid"
        },
        {
          en: "Longer memory",
          es: "Memoria más larga",
          de: "Längeres Gedächtnis",
          nl: "Langer geheugen"
        },
        {
          en: "More gates",
          es: "Más puertas",
          de: "Mehr Gates",
          nl: "Meer gates"
        }
      ],
      correct: 0,
      explanation: {
        en: "GRU (Gated Recurrent Unit) has fewer parameters than LSTM as it uses only 2 gates instead of 3, making it faster to train while maintaining similar performance.",
        es: "GRU tiene menos parámetros que LSTM ya que usa solo 2 puertas en lugar de 3, haciéndolo más rápido de entrenar con rendimiento similar.",
        de: "GRU hat weniger Parameter als LSTM, da es nur 2 statt 3 Gates verwendet, was schnelleres Training bei ähnlicher Leistung ermöglicht.",
        nl: "GRU heeft minder parameters dan LSTM omdat het slechts 2 gates gebruikt in plaats van 3, wat sneller trainen mogelijk maakt met vergelijkbare prestaties."
      }
    },
    {
      question: {
        en: "What does curriculum learning optimize?",
        es: "¿Qué optimiza el aprendizaje curricular?",
        de: "Was optimiert Curriculum Learning?",
        nl: "Wat optimaliseert curriculum learning?"
      },
      options: [
        {
          en: "Training sample order",
          es: "Orden de muestras de entrenamiento",
          de: "Reihenfolge der Trainingsproben",
          nl: "Trainingsample volgorde"
        },
        {
          en: "Model architecture",
          es: "Arquitectura del modelo",
          de: "Modellarchitektur",
          nl: "Model architectuur"
        },
        {
          en: "Loss function",
          es: "Función de pérdida",
          de: "Verlustfunktion",
          nl: "Verliesfunctie"
        },
        {
          en: "Feature selection",
          es: "Selección de características",
          de: "Merkmalsauswahl",
          nl: "Feature selectie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Curriculum learning optimizes the order of training samples, starting with easier examples and gradually introducing more complex ones, mimicking human learning.",
        es: "El aprendizaje curricular optimiza el orden de las muestras de entrenamiento, comenzando con ejemplos más fáciles e introduciendo gradualmente más complejos.",
        de: "Curriculum Learning optimiert die Reihenfolge der Trainingsproben, beginnend mit einfachen Beispielen und schrittweise komplexeren.",
        nl: "Curriculum learning optimaliseert de volgorde van trainingssamples, beginnend met makkelijke voorbeelden en geleidelijk complexere introducerend."
      }
    },
    {
      question: {
        en: "What is mixup augmentation in deep learning?",
        es: "¿Qué es la augmentación mixup en deep learning?",
        de: "Was ist Mixup-Augmentation im Deep Learning?",
        nl: "Wat is mixup augmentatie in deep learning?"
      },
      options: [
        {
          en: "Linear interpolation of samples",
          es: "Interpolación lineal de muestras",
          de: "Lineare Interpolation von Proben",
          nl: "Lineaire interpolatie van samples"
        },
        {
          en: "Random cropping",
          es: "Recorte aleatorio",
          de: "Zufälliges Zuschneiden",
          nl: "Willekeurig bijsnijden"
        },
        {
          en: "Color jittering",
          es: "Variación de color",
          de: "Farbvariation",
          nl: "Kleurvariatie"
        },
        {
          en: "Rotation",
          es: "Rotación",
          de: "Rotation",
          nl: "Rotatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Mixup creates virtual training examples by taking linear interpolations of pairs of examples and their labels, improving generalization and robustness.",
        es: "Mixup crea ejemplos de entrenamiento virtuales tomando interpolaciones lineales de pares de ejemplos y sus etiquetas, mejorando la generalización.",
        de: "Mixup erstellt virtuelle Trainingsbeispiele durch lineare Interpolation von Beispielpaaren und deren Labels, was die Generalisierung verbessert.",
        nl: "Mixup creëert virtuele trainingsvoorbeelden door lineaire interpolaties van paren voorbeelden en hun labels, wat generalisatie verbetert."
      }
    },
    {
      question: {
        en: "What is the purpose of spectral normalization?",
        es: "¿Cuál es el propósito de la normalización espectral?",
        de: "Was ist der Zweck der Spektralnormalisierung?",
        nl: "Wat is het doel van spectrale normalisatie?"
      },
      options: [
        {
          en: "Stabilize GAN training",
          es: "Estabilizar entrenamiento GAN",
          de: "GAN-Training stabilisieren",
          nl: "GAN training stabiliseren"
        },
        {
          en: "Speed up convergence",
          es: "Acelerar convergencia",
          de: "Konvergenz beschleunigen",
          nl: "Convergentie versnellen"
        },
        {
          en: "Reduce overfitting",
          es: "Reducir sobreajuste",
          de: "Überanpassung reduzieren",
          nl: "Overfitting verminderen"
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
        en: "Spectral normalization constrains the Lipschitz constant of the discriminator by normalizing weight matrices by their spectral norm, stabilizing GAN training.",
        es: "La normalización espectral restringe la constante de Lipschitz del discriminador normalizando matrices de peso por su norma espectral.",
        de: "Spektralnormalisierung beschränkt die Lipschitz-Konstante des Diskriminators durch Normalisierung der Gewichtsmatrizen mit ihrer Spektralnorm.",
        nl: "Spectrale normalisatie beperkt de Lipschitz constante van de discriminator door gewichtsmatrices te normaliseren met hun spectrale norm."
      }
    },
    {
      question: {
        en: "Which technique uses pseudo-labels for semi-supervised learning?",
        es: "¿Qué técnica usa pseudo-etiquetas para aprendizaje semi-supervisado?",
        de: "Welche Technik nutzt Pseudo-Labels für semi-überwachtes Lernen?",
        nl: "Welke techniek gebruikt pseudo-labels voor semi-supervised learning?"
      },
      options: [
        {
          en: "Self-training",
          es: "Auto-entrenamiento",
          de: "Selbsttraining",
          nl: "Zelf-training"
        },
        {
          en: "Transfer learning",
          es: "Aprendizaje por transferencia",
          de: "Transfer-Lernen",
          nl: "Transfer learning"
        },
        {
          en: "Meta-learning",
          es: "Meta-aprendizaje",
          de: "Meta-Lernen",
          nl: "Meta-learning"
        },
        {
          en: "Active learning",
          es: "Aprendizaje activo",
          de: "Aktives Lernen",
          nl: "Actief leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Self-training generates pseudo-labels for unlabeled data using a model trained on labeled data, then retrains including these pseudo-labeled examples.",
        es: "El auto-entrenamiento genera pseudo-etiquetas para datos no etiquetados usando un modelo entrenado en datos etiquetados, luego reentrena incluyéndolos.",
        de: "Selbsttraining erzeugt Pseudo-Labels für ungelabelte Daten mit einem auf gelabelten Daten trainierten Modell und trainiert dann neu.",
        nl: "Zelf-training genereert pseudo-labels voor ongelabelde data met een model getraind op gelabelde data, en hertraint dan met deze voorbeelden."
      }
    },
    {
      question: {
        en: "What is the key idea behind contrastive learning?",
        es: "¿Cuál es la idea clave detrás del aprendizaje contrastivo?",
        de: "Was ist die Schlüsselidee hinter kontrastivem Lernen?",
        nl: "Wat is het kernidee achter contrastief leren?"
      },
      options: [
        {
          en: "Learn by comparing samples",
          es: "Aprender comparando muestras",
          de: "Lernen durch Vergleichen von Proben",
          nl: "Leren door samples te vergelijken"
        },
        {
          en: "Minimize all losses",
          es: "Minimizar todas las pérdidas",
          de: "Alle Verluste minimieren",
          nl: "Alle verliezen minimaliseren"
        },
        {
          en: "Maximize accuracy",
          es: "Maximizar precisión",
          de: "Genauigkeit maximieren",
          nl: "Nauwkeurigheid maximaliseren"
        },
        {
          en: "Reduce complexity",
          es: "Reducir complejidad",
          de: "Komplexität reduzieren",
          nl: "Complexiteit verminderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Contrastive learning learns representations by comparing similar (positive) and dissimilar (negative) pairs, pulling positives together and pushing negatives apart.",
        es: "El aprendizaje contrastivo aprende representaciones comparando pares similares (positivos) y disímiles (negativos), acercando positivos y alejando negativos.",
        de: "Kontrastives Lernen lernt Repräsentationen durch Vergleich ähnlicher (positiver) und unähnlicher (negativer) Paare.",
        nl: "Contrastief leren leert representaties door vergelijking van gelijke (positieve) en ongelijke (negatieve) paren, positieven samen, negatieven apart."
      }
    },
    {
      question: {
        en: "What does knowledge distillation transfer?",
        es: "¿Qué transfiere la destilación de conocimiento?",
        de: "Was überträgt Wissensdestillation?",
        nl: "Wat draagt knowledge distillation over?"
      },
      options: [
        {
          en: "Soft predictions",
          es: "Predicciones suaves",
          de: "Weiche Vorhersagen",
          nl: "Zachte voorspellingen"
        },
        {
          en: "Raw weights",
          es: "Pesos crudos",
          de: "Rohe Gewichte",
          nl: "Ruwe gewichten"
        },
        {
          en: "Architecture",
          es: "Arquitectura",
          de: "Architektur",
          nl: "Architectuur"
        },
        {
          en: "Training data",
          es: "Datos de entrenamiento",
          de: "Trainingsdaten",
          nl: "Trainingsdata"
        }
      ],
      correct: 0,
      explanation: {
        en: "Knowledge distillation transfers soft predictions (probability distributions) from a teacher model to train a smaller student model, preserving dark knowledge.",
        es: "La destilación de conocimiento transfiere predicciones suaves (distribuciones de probabilidad) de un modelo maestro para entrenar un modelo estudiante más pequeño.",
        de: "Wissensdestillation überträgt weiche Vorhersagen (Wahrscheinlichkeitsverteilungen) von einem Lehrermodell auf ein kleineres Schülermodell.",
        nl: "Knowledge distillation draagt zachte voorspellingen (kansverdelingen) over van een teacher model naar een kleiner student model."
      }
    },
    {
      question: {
        en: "What is the main benefit of using residual connections?",
        es: "¿Cuál es el principal beneficio de usar conexiones residuales?",
        de: "Was ist der Hauptvorteil von Residualverbindungen?",
        nl: "Wat is het hoofdvoordeel van residual connections?"
      },
      options: [
        {
          en: "Enable very deep networks",
          es: "Permitir redes muy profundas",
          de: "Sehr tiefe Netze ermöglichen",
          nl: "Zeer diepe netwerken mogelijk maken"
        },
        {
          en: "Reduce parameters",
          es: "Reducir parámetros",
          de: "Parameter reduzieren",
          nl: "Parameters verminderen"
        },
        {
          en: "Speed up inference",
          es: "Acelerar inferencia",
          de: "Inferenz beschleunigen",
          nl: "Inferentie versnellen"
        },
        {
          en: "Simplify training",
          es: "Simplificar entrenamiento",
          de: "Training vereinfachen",
          nl: "Training vereenvoudigen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Residual connections enable training of very deep networks (100+ layers) by providing direct gradient paths and allowing layers to learn residual functions.",
        es: "Las conexiones residuales permiten entrenar redes muy profundas (100+ capas) proporcionando caminos directos de gradiente y aprendiendo funciones residuales.",
        de: "Residualverbindungen ermöglichen das Training sehr tiefer Netze (100+ Schichten) durch direkte Gradientenpfade und Lernen von Residualfunktionen.",
        nl: "Residual connections maken training van zeer diepe netwerken (100+ lagen) mogelijk door directe gradiëntpaden en het leren van residuele functies."
      }
    },
    {
      question: {
        en: "What problem does gradient clipping solve?",
        es: "¿Qué problema resuelve el recorte de gradientes?",
        de: "Welches Problem löst Gradient Clipping?",
        nl: "Welk probleem lost gradient clipping op?"
      },
      options: [
        {
          en: "Exploding gradients",
          es: "Gradientes explosivos",
          de: "Explodierende Gradienten",
          nl: "Exploderende gradiënten"
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
          en: "Underfitting",
          es: "Subajuste",
          de: "Unteranpassung",
          nl: "Underfitting"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gradient clipping prevents exploding gradients by limiting the maximum norm or value of gradients during backpropagation, stabilizing training in RNNs.",
        es: "El recorte de gradientes previene gradientes explosivos limitando la norma o valor máximo de gradientes durante la retropropagación.",
        de: "Gradient Clipping verhindert explodierende Gradienten durch Begrenzung der maximalen Norm oder des Wertes während der Backpropagation.",
        nl: "Gradient clipping voorkomt exploderende gradiënten door de maximale norm of waarde van gradiënten tijdens backpropagation te beperken."
      }
    },
    {
      question: {
        en: "What is the computational complexity of self-attention?",
        es: "¿Cuál es la complejidad computacional de auto-atención?",
        de: "Was ist die Rechenkomplexität von Selbst-Aufmerksamkeit?",
        nl: "Wat is de computationele complexiteit van self-attention?"
      },
      options: [
        {
          en: "O(n²d)",
          es: "O(n²d)",
          de: "O(n²d)",
          nl: "O(n²d)"
        },
        {
          en: "O(nd)",
          es: "O(nd)",
          de: "O(nd)",
          nl: "O(nd)"
        },
        {
          en: "O(n log n)",
          es: "O(n log n)",
          de: "O(n log n)",
          nl: "O(n log n)"
        },
        {
          en: "O(n³)",
          es: "O(n³)",
          de: "O(n³)",
          nl: "O(n³)"
        }
      ],
      correct: 0,
      explanation: {
        en: "Self-attention has O(n²d) complexity where n is sequence length and d is dimension, as it computes attention between all pairs of positions.",
        es: "La auto-atención tiene complejidad O(n²d) donde n es la longitud de secuencia y d es la dimensión, calculando atención entre todos los pares.",
        de: "Selbst-Aufmerksamkeit hat O(n²d) Komplexität, wobei n die Sequenzlänge und d die Dimension ist, da Aufmerksamkeit zwischen allen Paaren berechnet wird.",
        nl: "Self-attention heeft O(n²d) complexiteit waar n de sequentielengte is en d de dimensie, omdat het attention tussen alle paren posities berekent."
      }
    },
    {
      question: {
        en: "Which regularization technique adds noise to gradients?",
        es: "¿Qué técnica de regularización añade ruido a los gradientes?",
        de: "Welche Regularisierungstechnik fügt Rauschen zu Gradienten hinzu?",
        nl: "Welke regularisatietechniek voegt ruis toe aan gradiënten?"
      },
      options: [
        {
          en: "Gradient noise",
          es: "Ruido de gradiente",
          de: "Gradientenrauschen",
          nl: "Gradiënt ruis"
        },
        {
          en: "Dropout",
          es: "Dropout",
          de: "Dropout",
          nl: "Dropout"
        },
        {
          en: "L2 regularization",
          es: "Regularización L2",
          de: "L2-Regularisierung",
          nl: "L2 regularisatie"
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
        en: "Gradient noise adds Gaussian noise to gradients during training, helping escape sharp minima and find flatter, more generalizable solutions.",
        es: "El ruido de gradiente añade ruido gaussiano a los gradientes durante el entrenamiento, ayudando a escapar de mínimos agudos y encontrar soluciones más planas.",
        de: "Gradientenrauschen fügt während des Trainings Gaußsches Rauschen zu Gradienten hinzu und hilft, schärfere Minima zu vermeiden.",
        nl: "Gradiënt ruis voegt Gaussische ruis toe aan gradiënten tijdens training, helpt scherpe minima te ontsnappen voor vlakkere, generaliseerbare oplossingen."
      }
    },
    {
      question: {
        en: "What is the purpose of warmup in learning rate scheduling?",
        es: "¿Cuál es el propósito del calentamiento en la programación de tasa de aprendizaje?",
        de: "Was ist der Zweck von Warmup beim Learning Rate Scheduling?",
        nl: "Wat is het doel van warmup in learning rate scheduling?"
      },
      options: [
        {
          en: "Stabilize early training",
          es: "Estabilizar entrenamiento temprano",
          de: "Frühes Training stabilisieren",
          nl: "Vroege training stabiliseren"
        },
        {
          en: "Speed up convergence",
          es: "Acelerar convergencia",
          de: "Konvergenz beschleunigen",
          nl: "Convergentie versnellen"
        },
        {
          en: "Reduce overfitting",
          es: "Reducir sobreajuste",
          de: "Überanpassung reduzieren",
          nl: "Overfitting verminderen"
        },
        {
          en: "Save memory",
          es: "Ahorrar memoria",
          de: "Speicher sparen",
          nl: "Geheugen besparen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Warmup gradually increases learning rate from zero to target value, stabilizing early training when gradients are large and model is rapidly changing.",
        es: "El calentamiento aumenta gradualmente la tasa de aprendizaje desde cero hasta el valor objetivo, estabilizando el entrenamiento temprano con gradientes grandes.",
        de: "Warmup erhöht die Lernrate schrittweise von null auf den Zielwert und stabilisiert das frühe Training bei großen Gradienten.",
        nl: "Warmup verhoogt geleidelijk de leersnelheid van nul naar doelwaarde, stabiliseert vroege training wanneer gradiënten groot zijn."
      }
    },
    {
      question: {
        en: "What type of learning uses reward signals?",
        es: "¿Qué tipo de aprendizaje usa señales de recompensa?",
        de: "Welche Art des Lernens verwendet Belohnungssignale?",
        nl: "Welk type leren gebruikt beloningssignalen?"
      },
      options: [
        {
          en: "Reinforcement learning",
          es: "Aprendizaje por refuerzo",
          de: "Verstärkungslernen",
          nl: "Reinforcement learning"
        },
        {
          en: "Supervised learning",
          es: "Aprendizaje supervisado",
          de: "Überwachtes Lernen",
          nl: "Gesuperviseerd leren"
        },
        {
          en: "Unsupervised learning",
          es: "Aprendizaje no supervisado",
          de: "Unüberwachtes Lernen",
          nl: "Ongesuperviseerd leren"
        },
        {
          en: "Transfer learning",
          es: "Aprendizaje por transferencia",
          de: "Transfer-Lernen",
          nl: "Transfer learning"
        }
      ],
      correct: 0,
      explanation: {
        en: "Reinforcement learning uses reward signals to train agents to take actions that maximize cumulative reward through trial and error interaction with environment.",
        es: "El aprendizaje por refuerzo usa señales de recompensa para entrenar agentes a tomar acciones que maximicen la recompensa acumulada mediante prueba y error.",
        de: "Verstärkungslernen verwendet Belohnungssignale, um Agenten zu trainieren, Aktionen zu wählen, die kumulative Belohnung maximieren.",
        nl: "Reinforcement learning gebruikt beloningssignalen om agenten te trainen acties te nemen die cumulatieve beloning maximaliseren via trial and error."
      }
    },
    {
      question: {
        en: "What is the main idea behind few-shot learning?",
        es: "¿Cuál es la idea principal del aprendizaje de pocos ejemplos?",
        de: "Was ist die Hauptidee hinter Few-Shot Learning?",
        nl: "Wat is het hoofdidee achter few-shot learning?"
      },
      options: [
        {
          en: "Learn from limited examples",
          es: "Aprender de ejemplos limitados",
          de: "Aus wenigen Beispielen lernen",
          nl: "Leren van beperkte voorbeelden"
        },
        {
          en: "Use many models",
          es: "Usar muchos modelos",
          de: "Viele Modelle verwenden",
          nl: "Veel modellen gebruiken"
        },
        {
          en: "Train faster",
          es: "Entrenar más rápido",
          de: "Schneller trainieren",
          nl: "Sneller trainen"
        },
        {
          en: "Reduce dimensions",
          es: "Reducir dimensiones",
          de: "Dimensionen reduzieren",
          nl: "Dimensies verminderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Few-shot learning aims to recognize new classes from only a few labeled examples, often using meta-learning or similarity metrics learned from related tasks.",
        es: "El aprendizaje de pocos ejemplos busca reconocer nuevas clases con solo unos pocos ejemplos etiquetados, usando meta-aprendizaje o métricas de similitud.",
        de: "Few-Shot Learning zielt darauf ab, neue Klassen aus nur wenigen beschrifteten Beispielen zu erkennen, oft mit Meta-Learning oder Ähnlichkeitsmetriken.",
        nl: "Few-shot learning beoogt nieuwe klassen te herkennen uit slechts enkele gelabelde voorbeelden, vaak met meta-learning of similariteitsmetrieken."
      }
    },
    {
      question: {
        en: "What does the BLEU score evaluate?",
        es: "¿Qué evalúa la puntuación BLEU?",
        de: "Was bewertet der BLEU-Score?",
        nl: "Wat evalueert de BLEU score?"
      },
      options: [
        {
          en: "Translation quality",
          es: "Calidad de traducción",
          de: "Übersetzungsqualität",
          nl: "Vertaalkwaliteit"
        },
        {
          en: "Model size",
          es: "Tamaño del modelo",
          de: "Modellgröße",
          nl: "Modelgrootte"
        },
        {
          en: "Training speed",
          es: "Velocidad de entrenamiento",
          de: "Trainingsgeschwindigkeit",
          nl: "Trainingssnelheid"
        },
        {
          en: "Memory usage",
          es: "Uso de memoria",
          de: "Speichernutzung",
          nl: "Geheugengebruik"
        }
      ],
      correct: 0,
      explanation: {
        en: "BLEU (Bilingual Evaluation Understudy) measures translation quality by comparing n-gram overlap between machine translation and human reference translations.",
        es: "BLEU mide la calidad de traducción comparando la superposición de n-gramas entre traducción automática y traducciones de referencia humanas.",
        de: "BLEU misst die Übersetzungsqualität durch Vergleich der N-Gramm-Überlappung zwischen maschineller und menschlicher Referenzübersetzung.",
        nl: "BLEU meet vertaalkwaliteit door n-gram overlap te vergelijken tussen machinevertaling en menselijke referentievertalingen."
      }
    },
    {
      question: {
        en: "What is the purpose of positional encoding in Transformers?",
        es: "¿Cuál es el propósito de la codificación posicional en Transformers?",
        de: "Was ist der Zweck der Positionskodierung in Transformern?",
        nl: "Wat is het doel van positional encoding in Transformers?"
      },
      options: [
        {
          en: "Provide sequence order",
          es: "Proporcionar orden de secuencia",
          de: "Sequenzreihenfolge bereitstellen",
          nl: "Sequentievolgorde bieden"
        },
        {
          en: "Reduce parameters",
          es: "Reducir parámetros",
          de: "Parameter reduzieren",
          nl: "Parameters verminderen"
        },
        {
          en: "Speed up attention",
          es: "Acelerar atención",
          de: "Aufmerksamkeit beschleunigen",
          nl: "Attention versnellen"
        },
        {
          en: "Normalize inputs",
          es: "Normalizar entradas",
          de: "Eingaben normalisieren",
          nl: "Inputs normaliseren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Positional encoding adds position information to embeddings since self-attention is permutation-invariant and doesn't inherently capture sequence order.",
        es: "La codificación posicional añade información de posición a los embeddings ya que la auto-atención es invariante a permutaciones y no captura orden.",
        de: "Positionskodierung fügt Positionsinformationen zu Embeddings hinzu, da Selbst-Aufmerksamkeit permutationsinvariant ist.",
        nl: "Positional encoding voegt positie-informatie toe aan embeddings omdat self-attention permutatie-invariant is en geen sequentievolgorde vastlegt."
      }
    },
    {
      question: {
        en: "Which technique prevents catastrophic forgetting?",
        es: "¿Qué técnica previene el olvido catastrófico?",
        de: "Welche Technik verhindert katastrophales Vergessen?",
        nl: "Welke techniek voorkomt catastrofaal vergeten?"
      },
      options: [
        {
          en: "Elastic weight consolidation",
          es: "Consolidación elástica de pesos",
          de: "Elastische Gewichtskonsolidierung",
          nl: "Elastische gewichtsconsolidatie"
        },
        {
          en: "Dropout",
          es: "Dropout",
          de: "Dropout",
          nl: "Dropout"
        },
        {
          en: "Batch normalization",
          es: "Normalización por lotes",
          de: "Batch-Normalisierung",
          nl: "Batch normalisatie"
        },
        {
          en: "Data augmentation",
          es: "Aumento de datos",
          de: "Datenaugmentation",
          nl: "Data augmentatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Elastic weight consolidation (EWC) prevents catastrophic forgetting in continual learning by constraining important weights from previous tasks using Fisher information.",
        es: "La consolidación elástica de pesos previene el olvido catastrófico en aprendizaje continuo restringiendo pesos importantes de tareas previas.",
        de: "Elastische Gewichtskonsolidierung verhindert katastrophales Vergessen im kontinuierlichen Lernen durch Einschränkung wichtiger Gewichte.",
        nl: "Elastische gewichtsconsolidatie voorkomt catastrofaal vergeten in continual learning door belangrijke gewichten van vorige taken te beperken."
      }
    },
    {
      question: {
        en: "What is model pruning used for?",
        es: "¿Para qué se usa la poda de modelos?",
        de: "Wofür wird Modell-Pruning verwendet?",
        nl: "Waarvoor wordt model pruning gebruikt?"
      },
      options: [
        {
          en: "Reduce model size",
          es: "Reducir tamaño del modelo",
          de: "Modellgröße reduzieren",
          nl: "Modelgrootte verminderen"
        },
        {
          en: "Improve accuracy",
          es: "Mejorar precisión",
          de: "Genauigkeit verbessern",
          nl: "Nauwkeurigheid verbeteren"
        },
        {
          en: "Add features",
          es: "Añadir características",
          de: "Merkmale hinzufügen",
          nl: "Features toevoegen"
        },
        {
          en: "Increase depth",
          es: "Aumentar profundidad",
          de: "Tiefe erhöhen",
          nl: "Diepte verhogen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Model pruning removes redundant weights or neurons to reduce model size and computational requirements while maintaining performance, enabling deployment on edge devices.",
        es: "La poda de modelos elimina pesos o neuronas redundantes para reducir el tamaño del modelo y requisitos computacionales manteniendo el rendimiento.",
        de: "Modell-Pruning entfernt redundante Gewichte oder Neuronen, um die Modellgröße zu reduzieren und dabei die Leistung beizubehalten.",
        nl: "Model pruning verwijdert redundante gewichten of neuronen om modelgrootte en computationele vereisten te verminderen met behoud van prestaties."
      }
    },
    {
      question: {
        en: "What is the advantage of using focal loss?",
        es: "¿Cuál es la ventaja de usar pérdida focal?",
        de: "Was ist der Vorteil von Focal Loss?",
        nl: "Wat is het voordeel van focal loss?"
      },
      options: [
        {
          en: "Handles class imbalance",
          es: "Maneja desequilibrio de clases",
          de: "Behandelt Klassenungleichgewicht",
          nl: "Behandelt klasse-onbalans"
        },
        {
          en: "Faster convergence",
          es: "Convergencia más rápida",
          de: "Schnellere Konvergenz",
          nl: "Snellere convergentie"
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
        en: "Focal loss addresses class imbalance by down-weighting easy examples and focusing training on hard negatives, particularly useful in object detection.",
        es: "La pérdida focal aborda el desequilibrio de clases reduciendo el peso de ejemplos fáciles y enfocándose en negativos difíciles.",
        de: "Focal Loss behandelt Klassenungleichgewicht durch Gewichtsreduktion einfacher Beispiele und Fokus auf schwere negative Beispiele.",
        nl: "Focal loss behandelt klasse-onbalans door makkelijke voorbeelden minder gewicht te geven en te focussen op moeilijke negatieven."
      }
    },
    {
      question: {
        en: "What does the Gumbel-Softmax enable?",
        es: "¿Qué permite el Gumbel-Softmax?",
        de: "Was ermöglicht Gumbel-Softmax?",
        nl: "Wat maakt Gumbel-Softmax mogelijk?"
      },
      options: [
        {
          en: "Differentiable sampling",
          es: "Muestreo diferenciable",
          de: "Differenzierbares Sampling",
          nl: "Differentieerbare sampling"
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
          en: "Less overfitting",
          es: "Menos sobreajuste",
          de: "Weniger Überanpassung",
          nl: "Minder overfitting"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gumbel-Softmax provides a differentiable approximation to categorical sampling, allowing gradient-based optimization through discrete random variables.",
        es: "Gumbel-Softmax proporciona una aproximación diferenciable al muestreo categórico, permitiendo optimización basada en gradientes a través de variables discretas.",
        de: "Gumbel-Softmax bietet eine differenzierbare Näherung für kategorisches Sampling und ermöglicht gradientenbasierte Optimierung.",
        nl: "Gumbel-Softmax biedt een differentieerbare benadering van categorische sampling, wat gradiënt-gebaseerde optimalisatie door discrete variabelen mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is the purpose of label smoothing?",
        es: "¿Cuál es el propósito del suavizado de etiquetas?",
        de: "Was ist der Zweck von Label Smoothing?",
        nl: "Wat is het doel van label smoothing?"
      },
      options: [
        {
          en: "Prevent overconfidence",
          es: "Prevenir sobreconfianza",
          de: "Überconfidence verhindern",
          nl: "Overconfidence voorkomen"
        },
        {
          en: "Speed up training",
          es: "Acelerar entrenamiento",
          de: "Training beschleunigen",
          nl: "Training versnellen"
        },
        {
          en: "Reduce parameters",
          es: "Reducir parámetros",
          de: "Parameter reduzieren",
          nl: "Parameters verminderen"
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
        en: "Label smoothing prevents overconfidence by replacing hard targets (0,1) with soft targets like (0.1,0.9), improving generalization and calibration.",
        es: "El suavizado de etiquetas previene la sobreconfianza reemplazando objetivos duros (0,1) con objetivos suaves como (0.1,0.9), mejorando la generalización.",
        de: "Label Smoothing verhindert Überconfidence durch Ersetzen harter Ziele (0,1) mit weichen Zielen wie (0.1,0.9) für bessere Generalisierung.",
        nl: "Label smoothing voorkomt overconfidence door harde targets (0,1) te vervangen met zachte targets zoals (0.1,0.9), wat generalisatie verbetert."
      }
    },
    {
      question: {
        en: "What does neural architecture search optimize?",
        es: "¿Qué optimiza la búsqueda de arquitectura neuronal?",
        de: "Was optimiert Neural Architecture Search?",
        nl: "Wat optimaliseert neural architecture search?"
      },
      options: [
        {
          en: "Model structure",
          es: "Estructura del modelo",
          de: "Modellstruktur",
          nl: "Modelstructuur"
        },
        {
          en: "Training data",
          es: "Datos de entrenamiento",
          de: "Trainingsdaten",
          nl: "Trainingsdata"
        },
        {
          en: "Loss function",
          es: "Función de pérdida",
          de: "Verlustfunktion",
          nl: "Verliesfunctie"
        },
        {
          en: "Hardware usage",
          es: "Uso de hardware",
          de: "Hardware-Nutzung",
          nl: "Hardware gebruik"
        }
      ],
      correct: 0,
      explanation: {
        en: "Neural Architecture Search (NAS) automatically designs optimal neural network architectures for specific tasks, searching through architecture space using various strategies.",
        es: "La búsqueda de arquitectura neuronal diseña automáticamente arquitecturas óptimas de redes neuronales para tareas específicas, buscando en el espacio de arquitecturas.",
        de: "Neural Architecture Search entwirft automatisch optimale neuronale Netzwerkarchitekturen für spezifische Aufgaben durch Durchsuchen des Architekturraums.",
        nl: "Neural Architecture Search ontwerpt automatisch optimale neurale netwerk architecturen voor specifieke taken door de architectuurruimte te doorzoeken."
      }
    },
    {
      question: {
        en: "What is the lottery ticket hypothesis about?",
        es: "¿De qué trata la hipótesis del billete de lotería?",
        de: "Worum geht es bei der Lottery Ticket Hypothese?",
        nl: "Waar gaat de lottery ticket hypothese over?"
      },
      options: [
        {
          en: "Sparse trainable subnetworks",
          es: "Subredes entrenables dispersas",
          de: "Sparse trainierbare Subnetzwerke",
          nl: "Sparse trainbare subnetwerken"
        },
        {
          en: "Random initialization",
          es: "Inicialización aleatoria",
          de: "Zufällige Initialisierung",
          nl: "Willekeurige initialisatie"
        },
        {
          en: "Ensemble methods",
          es: "Métodos de conjunto",
          de: "Ensemble-Methoden",
          nl: "Ensemble methoden"
        },
        {
          en: "Transfer learning",
          es: "Aprendizaje por transferencia",
          de: "Transfer-Lernen",
          nl: "Transfer learning"
        }
      ],
      correct: 0,
      explanation: {
        en: "The lottery ticket hypothesis states that dense networks contain sparse subnetworks (winning tickets) that can achieve comparable accuracy when trained in isolation.",
        es: "La hipótesis del billete de lotería afirma que las redes densas contienen subredes dispersas que pueden lograr precisión comparable cuando se entrenan aisladas.",
        de: "Die Lottery Ticket Hypothese besagt, dass dichte Netze sparse Subnetzwerke enthalten, die vergleichbare Genauigkeit erreichen können.",
        nl: "De lottery ticket hypothese stelt dat dichte netwerken sparse subnetwerken bevatten die vergelijkbare nauwkeurigheid kunnen bereiken bij geïsoleerde training."
      }
    },
    {
      question: {
        en: "What is the purpose of group normalization?",
        es: "¿Cuál es el propósito de la normalización de grupo?",
        de: "Was ist der Zweck der Gruppennormalisierung?",
        nl: "Wat is het doel van group normalization?"
      },
      options: [
        {
          en: "Work with small batches",
          es: "Trabajar con lotes pequeños",
          de: "Mit kleinen Batches arbeiten",
          nl: "Werken met kleine batches"
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
          en: "Improve accuracy",
          es: "Mejorar precisión",
          de: "Genauigkeit verbessern",
          nl: "Nauwkeurigheid verbeteren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Group normalization divides channels into groups and normalizes within each group, working effectively with small batch sizes unlike batch normalization.",
        es: "La normalización de grupo divide canales en grupos y normaliza dentro de cada grupo, funcionando efectivamente con tamaños de lote pequeños.",
        de: "Gruppennormalisierung teilt Kanäle in Gruppen und normalisiert innerhalb jeder Gruppe, funktioniert effektiv mit kleinen Batch-Größen.",
        nl: "Group normalization verdeelt kanalen in groepen en normaliseert binnen elke groep, werkt effectief met kleine batch groottes."
      }
    },
    {
      question: {
        en: "What does curriculum learning optimize?",
        es: "¿Qué optimiza el aprendizaje curricular?",
        de: "Was optimiert Curriculum Learning?",
        nl: "Wat optimaliseert curriculum learning?"
      },
      options: [
        {
          en: "Training sample order",
          es: "Orden de muestras de entrenamiento",
          de: "Reihenfolge der Trainingsproben",
          nl: "Trainingsample volgorde"
        },
        {
          en: "Model architecture",
          es: "Arquitectura del modelo",
          de: "Modellarchitektur",
          nl: "Model architectuur"
        },
        {
          en: "Loss function",
          es: "Función de pérdida",
          de: "Verlustfunktion",
          nl: "Verliesfunctie"
        },
        {
          en: "Feature selection",
          es: "Selección de características",
          de: "Merkmalsauswahl",
          nl: "Feature selectie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Curriculum learning optimizes the order of training samples, starting with easier examples and gradually introducing more complex ones, mimicking human learning.",
        es: "El aprendizaje curricular optimiza el orden de las muestras de entrenamiento, comenzando con ejemplos más fáciles e introduciendo gradualmente más complejos.",
        de: "Curriculum Learning optimiert die Reihenfolge der Trainingsproben, beginnend mit einfachen Beispielen und schrittweise komplexeren.",
        nl: "Curriculum learning optimaliseert de volgorde van trainingssamples, beginnend met makkelijke voorbeelden en geleidelijk complexere introducerend."
      }
    },
    {
      question: {
        en: "What is mixup augmentation in deep learning?",
        es: "¿Qué es la augmentación mixup en deep learning?",
        de: "Was ist Mixup-Augmentation im Deep Learning?",
        nl: "Wat is mixup augmentatie in deep learning?"
      },
      options: [
        {
          en: "Linear interpolation of samples",
          es: "Interpolación lineal de muestras",
          de: "Lineare Interpolation von Proben",
          nl: "Lineaire interpolatie van samples"
        },
        {
          en: "Random cropping",
          es: "Recorte aleatorio",
          de: "Zufälliges Zuschneiden",
          nl: "Willekeurig bijsnijden"
        },
        {
          en: "Color jittering",
          es: "Variación de color",
          de: "Farbvariation",
          nl: "Kleurvariatie"
        },
        {
          en: "Rotation",
          es: "Rotación",
          de: "Rotation",
          nl: "Rotatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Mixup creates virtual training examples by taking linear interpolations of pairs of examples and their labels, improving generalization and robustness.",
        es: "Mixup crea ejemplos de entrenamiento virtuales tomando interpolaciones lineales de pares de ejemplos y sus etiquetas, mejorando la generalización.",
        de: "Mixup erstellt virtuelle Trainingsbeispiele durch lineare Interpolation von Beispielpaaren und deren Labels, was die Generalisierung verbessert.",
        nl: "Mixup creëert virtuele trainingsvoorbeelden door lineaire interpolaties van paren voorbeelden en hun labels, wat generalisatie verbetert."
      }
    },
    {
      question: {
        en: "What is the purpose of spectral normalization?",
        es: "¿Cuál es el propósito de la normalización espectral?",
        de: "Was ist der Zweck der Spektralnormalisierung?",
        nl: "Wat is het doel van spectrale normalisatie?"
      },
      options: [
        {
          en: "Stabilize GAN training",
          es: "Estabilizar entrenamiento GAN",
          de: "GAN-Training stabilisieren",
          nl: "GAN training stabiliseren"
        },
        {
          en: "Speed up convergence",
          es: "Acelerar convergencia",
          de: "Konvergenz beschleunigen",
          nl: "Convergentie versnellen"
        },
        {
          en: "Reduce overfitting",
          es: "Reducir sobreajuste",
          de: "Überanpassung reduzieren",
          nl: "Overfitting verminderen"
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
        en: "Spectral normalization constrains the Lipschitz constant of the discriminator by normalizing weight matrices by their spectral norm, stabilizing GAN training.",
        es: "La normalización espectral restringe la constante de Lipschitz del discriminador normalizando matrices de peso por su norma espectral.",
        de: "Spektralnormalisierung beschränkt die Lipschitz-Konstante des Diskriminators durch Normalisierung der Gewichtsmatrizen mit ihrer Spektralnorm.",
        nl: "Spectrale normalisatie beperkt de Lipschitz constante van de discriminator door gewichtsmatrices te normaliseren met hun spectrale norm."
      }
    },
    {
      question: {
        en: "Which technique uses pseudo-labels for semi-supervised learning?",
        es: "¿Qué técnica usa pseudo-etiquetas para aprendizaje semi-supervisado?",
        de: "Welche Technik nutzt Pseudo-Labels für semi-überwachtes Lernen?",
        nl: "Welke techniek gebruikt pseudo-labels voor semi-supervised learning?"
      },
      options: [
        {
          en: "Self-training",
          es: "Auto-entrenamiento",
          de: "Selbsttraining",
          nl: "Zelf-training"
        },
        {
          en: "Transfer learning",
          es: "Aprendizaje por transferencia",
          de: "Transfer-Lernen",
          nl: "Transfer learning"
        },
        {
          en: "Meta-learning",
          es: "Meta-aprendizaje",
          de: "Meta-Lernen",
          nl: "Meta-learning"
        },
        {
          en: "Active learning",
          es: "Aprendizaje activo",
          de: "Aktives Lernen",
          nl: "Actief leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Self-training generates pseudo-labels for unlabeled data using a model trained on labeled data, then retrains including these pseudo-labeled examples.",
        es: "El auto-entrenamiento genera pseudo-etiquetas para datos no etiquetados usando un modelo entrenado en datos etiquetados, luego reentrena incluyéndolos.",
        de: "Selbsttraining erzeugt Pseudo-Labels für ungelabelte Daten mit einem auf gelabelten Daten trainierten Modell und trainiert dann neu.",
        nl: "Zelf-training genereert pseudo-labels voor ongelabelde data met een model getraind op gelabelde data, en hertraint dan met deze voorbeelden."
      }
    },
    {
      question: {
        en: "What is the key idea behind contrastive learning?",
        es: "¿Cuál es la idea clave detrás del aprendizaje contrastivo?",
        de: "Was ist die Schlüsselidee hinter kontrastivem Lernen?",
        nl: "Wat is het kernidee achter contrastief leren?"
      },
      options: [
        {
          en: "Learn by comparing samples",
          es: "Aprender comparando muestras",
          de: "Lernen durch Vergleichen von Proben",
          nl: "Leren door samples te vergelijken"
        },
        {
          en: "Minimize all losses",
          es: "Minimizar todas las pérdidas",
          de: "Alle Verluste minimieren",
          nl: "Alle verliezen minimaliseren"
        },
        {
          en: "Maximize accuracy",
          es: "Maximizar precisión",
          de: "Genauigkeit maximieren",
          nl: "Nauwkeurigheid maximaliseren"
        },
        {
          en: "Reduce complexity",
          es: "Reducir complejidad",
          de: "Komplexität reduzieren",
          nl: "Complexiteit verminderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Contrastive learning learns representations by comparing similar (positive) and dissimilar (negative) pairs, pulling positives together and pushing negatives apart.",
        es: "El aprendizaje contrastivo aprende representaciones comparando pares similares (positivos) y disímiles (negativos), acercando positivos y alejando negativos.",
        de: "Kontrastives Lernen lernt Repräsentationen durch Vergleich ähnlicher (positiver) und unähnlicher (negativer) Paare.",
        nl: "Contrastief leren leert representaties door vergelijking van gelijke (positieve) en ongelijke (negatieve) paren, positieven samen, negatieven apart."
      }
    },
    {
      question: {
        en: "What does knowledge distillation transfer?",
        es: "¿Qué transfiere la destilación de conocimiento?",
        de: "Was überträgt Wissensdestillation?",
        nl: "Wat draagt knowledge distillation over?"
      },
      options: [
        {
          en: "Soft predictions",
          es: "Predicciones suaves",
          de: "Weiche Vorhersagen",
          nl: "Zachte voorspellingen"
        },
        {
          en: "Raw weights",
          es: "Pesos crudos",
          de: "Rohe Gewichte",
          nl: "Ruwe gewichten"
        },
        {
          en: "Architecture",
          es: "Arquitectura",
          de: "Architektur",
          nl: "Architectuur"
        },
        {
          en: "Training data",
          es: "Datos de entrenamiento",
          de: "Trainingsdaten",
          nl: "Trainingsdata"
        }
      ],
      correct: 0,
      explanation: {
        en: "Knowledge distillation transfers soft predictions (probability distributions) from a teacher model to train a smaller student model, preserving dark knowledge.",
        es: "La destilación de conocimiento transfiere predicciones suaves (distribuciones de probabilidad) de un modelo maestro para entrenar un modelo estudiante más pequeño.",
        de: "Wissensdestillation überträgt weiche Vorhersagen (Wahrscheinlichkeitsverteilungen) von einem Lehrermodell auf ein kleineres Schülermodell.",
        nl: "Knowledge distillation draagt zachte voorspellingen (kansverdelingen) over van een teacher model naar een kleiner student model."
      }
    },
    {
      question: {
        en: "What is the main benefit of using residual connections?",
        es: "¿Cuál es el principal beneficio de usar conexiones residuales?",
        de: "Was ist der Hauptvorteil von Residualverbindungen?",
        nl: "Wat is het hoofdvoordeel van residual connections?"
      },
      options: [
        {
          en: "Enable very deep networks",
          es: "Permitir redes muy profundas",
          de: "Sehr tiefe Netze ermöglichen",
          nl: "Zeer diepe netwerken mogelijk maken"
        },
        {
          en: "Reduce parameters",
          es: "Reducir parámetros",
          de: "Parameter reduzieren",
          nl: "Parameters verminderen"
        },
        {
          en: "Speed up inference",
          es: "Acelerar inferencia",
          de: "Inferenz beschleunigen",
          nl: "Inferentie versnellen"
        },
        {
          en: "Simplify training",
          es: "Simplificar entrenamiento",
          de: "Training vereinfachen",
          nl: "Training vereenvoudigen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Residual connections enable training of very deep networks (100+ layers) by providing direct gradient paths and allowing layers to learn residual functions.",
        es: "Las conexiones residuales permiten entrenar redes muy profundas (100+ capas) proporcionando caminos directos de gradiente y aprendiendo funciones residuales.",
        de: "Residualverbindungen ermöglichen das Training sehr tiefer Netze (100+ Schichten) durch direkte Gradientenpfade und Lernen von Residualfunktionen.",
        nl: "Residual connections maken training van zeer diepe netwerken (100+ lagen) mogelijk door directe gradiëntpaden en het leren van residuele functies."
      }
    },
    {
      question: {
        en: "What problem does gradient clipping solve?",
        es: "¿Qué problema resuelve el recorte de gradientes?",
        de: "Welches Problem löst Gradient Clipping?",
        nl: "Welk probleem lost gradient clipping op?"
      },
      options: [
        {
          en: "Exploding gradients",
          es: "Gradientes explosivos",
          de: "Explodierende Gradienten",
          nl: "Exploderende gradiënten"
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
          en: "Underfitting",
          es: "Subajuste",
          de: "Unteranpassung",
          nl: "Underfitting"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gradient clipping prevents exploding gradients by limiting the maximum norm or value of gradients during backpropagation, stabilizing training in RNNs.",
        es: "El recorte de gradientes previene gradientes explosivos limitando la norma o valor máximo de gradientes durante la retropropagación.",
        de: "Gradient Clipping verhindert explodierende Gradienten durch Begrenzung der maximalen Norm oder des Wertes während der Backpropagation.",
        nl: "Gradient clipping voorkomt exploderende gradiënten door de maximale norm of waarde van gradiënten tijdens backpropagation te beperken."
      }
    },
    {
      question: {
        en: "What is the computational complexity of self-attention?",
        es: "¿Cuál es la complejidad computacional de auto-atención?",
        de: "Was ist die Rechenkomplexität von Selbst-Aufmerksamkeit?",
        nl: "Wat is de computationele complexiteit van self-attention?"
      },
      options: [
        {
          en: "O(n²d)",
          es: "O(n²d)",
          de: "O(n²d)",
          nl: "O(n²d)"
        },
        {
          en: "O(nd)",
          es: "O(nd)",
          de: "O(nd)",
          nl: "O(nd)"
        },
        {
          en: "O(n log n)",
          es: "O(n log n)",
          de: "O(n log n)",
          nl: "O(n log n)"
        },
        {
          en: "O(n³)",
          es: "O(n³)",
          de: "O(n³)",
          nl: "O(n³)"
        }
      ],
      correct: 0,
      explanation: {
        en: "Self-attention has O(n²d) complexity where n is sequence length and d is dimension, as it computes attention between all pairs of positions.",
        es: "La auto-atención tiene complejidad O(n²d) donde n es la longitud de secuencia y d es la dimensión, calculando atención entre todos los pares.",
        de: "Selbst-Aufmerksamkeit hat O(n²d) Komplexität, wobei n die Sequenzlänge und d die Dimension ist, da Aufmerksamkeit zwischen allen Paaren berechnet wird.",
        nl: "Self-attention heeft O(n²d) complexiteit waar n de sequentielengte is en d de dimensie, omdat het attention tussen alle paren posities berekent."
      }
    },
    {
      question: {
        en: "Which regularization technique adds noise to gradients?",
        es: "¿Qué técnica de regularización añade ruido a los gradientes?",
        de: "Welche Regularisierungstechnik fügt Rauschen zu Gradienten hinzu?",
        nl: "Welke regularisatietechniek voegt ruis toe aan gradiënten?"
      },
      options: [
        {
          en: "Gradient noise",
          es: "Ruido de gradiente",
          de: "Gradientenrauschen",
          nl: "Gradiënt ruis"
        },
        {
          en: "Dropout",
          es: "Dropout",
          de: "Dropout",
          nl: "Dropout"
        },
        {
          en: "L2 regularization",
          es: "Regularización L2",
          de: "L2-Regularisierung",
          nl: "L2 regularisatie"
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
        en: "Gradient noise adds Gaussian noise to gradients during training, helping escape sharp minima and find flatter, more generalizable solutions.",
        es: "El ruido de gradiente añade ruido gaussiano a los gradientes durante el entrenamiento, ayudando a escapar de mínimos agudos y encontrar soluciones más planas.",
        de: "Gradientenrauschen fügt während des Trainings Gaußsches Rauschen zu Gradienten hinzu und hilft, schärfere Minima zu vermeiden.",
        nl: "Gradiënt ruis voegt Gaussische ruis toe aan gradiënten tijdens training, helpt scherpe minima te ontsnappen voor vlakkere, generaliseerbare oplossingen."
      }
    },
    {
      question: {
        en: "What is the purpose of warmup in learning rate scheduling?",
        es: "¿Cuál es el propósito del calentamiento en la programación de tasa de aprendizaje?",
        de: "Was ist der Zweck von Warmup beim Learning Rate Scheduling?",
        nl: "Wat is het doel van warmup in learning rate scheduling?"
      },
      options: [
        {
          en: "Stabilize early training",
          es: "Estabilizar entrenamiento temprano",
          de: "Frühes Training stabilisieren",
          nl: "Vroege training stabiliseren"
        },
        {
          en: "Speed up convergence",
          es: "Acelerar convergencia",
          de: "Konvergenz beschleunigen",
          nl: "Convergentie versnellen"
        },
        {
          en: "Reduce overfitting",
          es: "Reducir sobreajuste",
          de: "Überanpassung reduzieren",
          nl: "Overfitting verminderen"
        },
        {
          en: "Save memory",
          es: "Ahorrar memoria",
          de: "Speicher sparen",
          nl: "Geheugen besparen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Warmup gradually increases learning rate from zero to target value, stabilizing early training when gradients are large and model is rapidly changing.",
        es: "El calentamiento aumenta gradualmente la tasa de aprendizaje desde cero hasta el valor objetivo, estabilizando el entrenamiento temprano con gradientes grandes.",
        de: "Warmup erhöht die Lernrate schrittweise von null auf den Zielwert und stabilisiert das frühe Training bei großen Gradienten.",
        nl: "Warmup verhoogt geleidelijk de leersnelheid van nul naar doelwaarde, stabiliseert vroege training wanneer gradiënten groot zijn."
      }
    },
    {
      question: {
        en: "What type of learning uses reward signals?",
        es: "¿Qué tipo de aprendizaje usa señales de recompensa?",
        de: "Welche Art des Lernens verwendet Belohnungssignale?",
        nl: "Welk type leren gebruikt beloningssignalen?"
      },
      options: [
        {
          en: "Reinforcement learning",
          es: "Aprendizaje por refuerzo",
          de: "Verstärkungslernen",
          nl: "Reinforcement learning"
        },
        {
          en: "Supervised learning",
          es: "Aprendizaje supervisado",
          de: "Überwachtes Lernen",
          nl: "Gesuperviseerd leren"
        },
        {
          en: "Unsupervised learning",
          es: "Aprendizaje no supervisado",
          de: "Unüberwachtes Lernen",
          nl: "Ongesuperviseerd leren"
        },
        {
          en: "Transfer learning",
          es: "Aprendizaje por transferencia",
          de: "Transfer-Lernen",
          nl: "Transfer learning"
        }
      ],
      correct: 0,
      explanation: {
        en: "Reinforcement learning uses reward signals to train agents to take actions that maximize cumulative reward through trial and error interaction with environment.",
        es: "El aprendizaje por refuerzo usa señales de recompensa para entrenar agentes a tomar acciones que maximicen la recompensa acumulada mediante prueba y error.",
        de: "Verstärkungslernen verwendet Belohnungssignale, um Agenten zu trainieren, Aktionen zu wählen, die kumulative Belohnung maximieren.",
        nl: "Reinforcement learning gebruikt beloningssignalen om agenten te trainen acties te nemen die cumulatieve beloning maximaliseren via trial and error."
      }
    },
    {
      question: {
        en: "What is the main idea behind few-shot learning?",
        es: "¿Cuál es la idea principal del aprendizaje de pocos ejemplos?",
        de: "Was ist die Hauptidee hinter Few-Shot Learning?",
        nl: "Wat is het hoofdidee achter few-shot learning?"
      },
      options: [
        {
          en: "Learn from limited examples",
          es: "Aprender de ejemplos limitados",
          de: "Aus wenigen Beispielen lernen",
          nl: "Leren van beperkte voorbeelden"
        },
        {
          en: "Use many models",
          es: "Usar muchos modelos",
          de: "Viele Modelle verwenden",
          nl: "Veel modellen gebruiken"
        },
        {
          en: "Train faster",
          es: "Entrenar más rápido",
          de: "Schneller trainieren",
          nl: "Sneller trainen"
        },
        {
          en: "Reduce dimensions",
          es: "Reducir dimensiones",
          de: "Dimensionen reduzieren",
          nl: "Dimensies verminderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Few-shot learning aims to recognize new classes from only a few labeled examples, often using meta-learning or similarity metrics learned from related tasks.",
        es: "El aprendizaje de pocos ejemplos busca reconocer nuevas clases con solo unos pocos ejemplos etiquetados, usando meta-aprendizaje o métricas de similitud.",
        de: "Few-Shot Learning zielt darauf ab, neue Klassen aus nur wenigen beschrifteten Beispielen zu erkennen, oft mit Meta-Learning oder Ähnlichkeitsmetriken.",
        nl: "Few-shot learning beoogt nieuwe klassen te herkennen uit slechts enkele gelabelde voorbeelden, vaak met meta-learning of similariteitsmetrieken."
      }
    },
    {
      question: {
        en: "What does the BLEU score evaluate?",
        es: "¿Qué evalúa la puntuación BLEU?",
        de: "Was bewertet der BLEU-Score?",
        nl: "Wat evalueert de BLEU score?"
      },
      options: [
        {
          en: "Translation quality",
          es: "Calidad de traducción",
          de: "Übersetzungsqualität",
          nl: "Vertaalkwaliteit"
        },
        {
          en: "Model size",
          es: "Tamaño del modelo",
          de: "Modellgröße",
          nl: "Modelgrootte"
        },
        {
          en: "Training speed",
          es: "Velocidad de entrenamiento",
          de: "Trainingsgeschwindigkeit",
          nl: "Trainingssnelheid"
        },
        {
          en: "Memory usage",
          es: "Uso de memoria",
          de: "Speichernutzung",
          nl: "Geheugengebruik"
        }
      ],
      correct: 0,
      explanation: {
        en: "BLEU (Bilingual Evaluation Understudy) measures translation quality by comparing n-gram overlap between machine translation and human reference translations.",
        es: "BLEU mide la calidad de traducción comparando la superposición de n-gramas entre traducción automática y traducciones de referencia humanas.",
        de: "BLEU misst die Übersetzungsqualität durch Vergleich der N-Gramm-Überlappung zwischen maschineller und menschlicher Referenzübersetzung.",
        nl: "BLEU meet vertaalkwaliteit door n-gram overlap te vergelijken tussen machinevertaling en menselijke referentievertalingen."
      }
    },
    {
      question: {
        en: "What is the purpose of positional encoding in Transformers?",
        es: "¿Cuál es el propósito de la codificación posicional en Transformers?",
        de: "Was ist der Zweck der Positionskodierung in Transformern?",
        nl: "Wat is het doel van positional encoding in Transformers?"
      },
      options: [
        {
          en: "Provide sequence order",
          es: "Proporcionar orden de secuencia",
          de: "Sequenzreihenfolge bereitstellen",
          nl: "Sequentievolgorde bieden"
        },
        {
          en: "Reduce parameters",
          es: "Reducir parámetros",
          de: "Parameter reduzieren",
          nl: "Parameters verminderen"
        },
        {
          en: "Speed up attention",
          es: "Acelerar atención",
          de: "Aufmerksamkeit beschleunigen",
          nl: "Attention versnellen"
        },
        {
          en: "Normalize inputs",
          es: "Normalizar entradas",
          de: "Eingaben normalisieren",
          nl: "Inputs normaliseren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Positional encoding adds position information to embeddings since self-attention is permutation-invariant and doesn't inherently capture sequence order.",
        es: "La codificación posicional añade información de posición a los embeddings ya que la auto-atención es invariante a permutaciones y no captura orden.",
        de: "Positionskodierung fügt Positionsinformationen zu Embeddings hinzu, da Selbst-Aufmerksamkeit permutationsinvariant ist.",
        nl: "Positional encoding voegt positie-informatie toe aan embeddings omdat self-attention permutatie-invariant is en geen sequentievolgorde vastlegt."
      }
    },
    {
      question: {
        en: "Which technique prevents catastrophic forgetting?",
        es: "¿Qué técnica previene el olvido catastrófico?",
        de: "Welche Technik verhindert katastrophales Vergessen?",
        nl: "Welke techniek voorkomt catastrofaal vergeten?"
      },
      options: [
        {
          en: "Elastic weight consolidation",
          es: "Consolidación elástica de pesos",
          de: "Elastische Gewichtskonsolidierung",
          nl: "Elastische gewichtsconsolidatie"
        },
        {
          en: "Dropout",
          es: "Dropout",
          de: "Dropout",
          nl: "Dropout"
        },
        {
          en: "Batch normalization",
          es: "Normalización por lotes",
          de: "Batch-Normalisierung",
          nl: "Batch normalisatie"
        },
        {
          en: "Data augmentation",
          es: "Aumento de datos",
          de: "Datenaugmentation",
          nl: "Data augmentatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Elastic weight consolidation (EWC) prevents catastrophic forgetting in continual learning by constraining important weights from previous tasks using Fisher information.",
        es: "La consolidación elástica de pesos previene el olvido catastrófico en aprendizaje continuo restringiendo pesos importantes de tareas previas.",
        de: "Elastische Gewichtskonsolidierung verhindert katastrophales Vergessen im kontinuierlichen Lernen durch Einschränkung wichtiger Gewichte.",
        nl: "Elastische gewichtsconsolidatie voorkomt catastrofaal vergeten in continual learning door belangrijke gewichten van vorige taken te beperken."
      }
    }
  ]
};