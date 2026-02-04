module.exports = {
  questions: [
    {
      question: {
        en: "What is the primary purpose of Layer Normalization compared to Batch Normalization?",
        es: "¿Cuál es el propósito principal de Layer Normalization comparado con Batch Normalization?",
        de: "Was ist der Hauptzweck von Layer Normalization im Vergleich zu Batch Normalization?",
        nl: "Wat is het hoofddoel van Layer Normalization vergeleken met Batch Normalization?"
      },
      options: [
        {
          en: "Works better for sequence models and small batches",
          es: "Funciona mejor para modelos de secuencia y lotes pequeños",
          de: "Funktioniert besser für Sequenzmodelle und kleine Batches",
          nl: "Werkt beter voor sequentiemodellen en kleine batches"
        },
        {
          en: "Requires less computation",
          es: "Requiere menos computación",
          de: "Benötigt weniger Berechnung",
          nl: "Vereist minder berekening"
        },
        {
          en: "Increases model size",
          es: "Aumenta el tamaño del modelo",
          de: "Erhöht die Modellgröße",
          nl: "Vergroot de modelgrootte"
        },
        {
          en: "Only works with CNNs",
          es: "Solo funciona con CNN",
          de: "Funktioniert nur mit CNNs",
          nl: "Werkt alleen met CNN's"
        }
      ],
      correct: 0,
      explanation: {
        en: "Layer Normalization normalizes across features instead of batch dimension, making it ideal for RNNs and Transformers where batch statistics may be unreliable or unavailable during inference.",
        es: "Layer Normalization normaliza a través de características en lugar de la dimensión del lote, ideal para RNN y Transformers donde las estadísticas del lote pueden ser poco confiables.",
        de: "Layer Normalization normalisiert über Features statt Batch-Dimension, ideal für RNNs und Transformers wo Batch-Statistiken unzuverlässig sein können.",
        nl: "Layer Normalization normaliseert over features in plaats van batch-dimensie, ideaal voor RNN's en Transformers waar batch-statistieken onbetrouwbaar kunnen zijn."
      }
    },
    {
      question: {
        en: "What is the purpose of the Gumbel-Max trick in discrete sampling?",
        es: "¿Cuál es el propósito del truco Gumbel-Max en muestreo discreto?",
        de: "Was ist der Zweck des Gumbel-Max-Tricks beim diskreten Sampling?",
        nl: "Wat is het doel van de Gumbel-Max truc bij discreet samplen?"
      },
      options: [
        {
          en: "Enables differentiable sampling from categorical distributions",
          es: "Permite muestreo diferenciable de distribuciones categóricas",
          de: "Ermöglicht differenzierbares Sampling aus kategorialen Verteilungen",
          nl: "Maakt differentieerbaar samplen uit categorische verdelingen mogelijk"
        },
        {
          en: "Reduces sampling variance",
          es: "Reduce la varianza del muestreo",
          de: "Reduziert die Sampling-Varianz",
          nl: "Vermindert sampling-variantie"
        },
        {
          en: "Increases sampling speed",
          es: "Aumenta la velocidad de muestreo",
          de: "Erhöht die Sampling-Geschwindigkeit",
          nl: "Verhoogt de sampling-snelheid"
        },
        {
          en: "Improves accuracy",
          es: "Mejora la precisión",
          de: "Verbessert die Genauigkeit",
          nl: "Verbetert de nauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Gumbel-Max trick allows sampling from categorical distributions in a way that's differentiable using the reparameterization trick. This is crucial for training models with discrete latent variables.",
        es: "El truco Gumbel-Max permite muestrear distribuciones categóricas de forma diferenciable usando el truco de reparametrización, crucial para modelos con variables latentes discretas.",
        de: "Der Gumbel-Max-Trick ermöglicht differenzierbares Sampling aus kategorialen Verteilungen mittels Reparametrisierung, wichtig für Modelle mit diskreten latenten Variablen.",
        nl: "De Gumbel-Max truc maakt differentieerbaar samplen uit categorische verdelingen mogelijk via reparametrisatie, cruciaal voor modellen met discrete latente variabelen."
      }
    },
    {
      question: {
        en: "What is the main advantage of using gradient checkpointing in deep networks?",
        es: "¿Cuál es la ventaja principal de usar gradient checkpointing en redes profundas?",
        de: "Was ist der Hauptvorteil von Gradient Checkpointing in tiefen Netzen?",
        nl: "Wat is het hoofdvoordeel van gradient checkpointing in diepe netwerken?"
      },
      options: [
        {
          en: "Reduces memory usage at the cost of computation",
          es: "Reduce el uso de memoria a costa de computación",
          de: "Reduziert Speichernutzung auf Kosten der Berechnung",
          nl: "Vermindert geheugengebruik ten koste van berekening"
        },
        {
          en: "Speeds up training",
          es: "Acelera el entrenamiento",
          de: "Beschleunigt das Training",
          nl: "Versnelt training"
        },
        {
          en: "Improves accuracy",
          es: "Mejora la precisión",
          de: "Verbessert die Genauigkeit",
          nl: "Verbetert nauwkeurigheid"
        },
        {
          en: "Prevents overfitting",
          es: "Previene el sobreajuste",
          de: "Verhindert Überanpassung",
          nl: "Voorkomt overfitting"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gradient checkpointing trades computation for memory by not storing all intermediate activations. During backprop, it recomputes them as needed, enabling training of much deeper networks.",
        es: "Gradient checkpointing intercambia computación por memoria al no almacenar todas las activaciones intermedias, recalculándolas cuando sea necesario para entrenar redes más profundas.",
        de: "Gradient Checkpointing tauscht Berechnung gegen Speicher, indem nicht alle Zwischenaktivierungen gespeichert werden, ermöglicht Training tieferer Netze.",
        nl: "Gradient checkpointing ruilt berekening voor geheugen door niet alle tussenactivaties op te slaan, maakt training van diepere netwerken mogelijk."
      }
    },
    {
      question: {
        en: "What is the computational complexity of self-attention in Transformers?",
        es: "¿Cuál es la complejidad computacional de self-attention en Transformers?",
        de: "Was ist die Rechenkomplexität von Self-Attention in Transformern?",
        nl: "Wat is de computationele complexiteit van self-attention in Transformers?"
      },
      options: [
        {
          en: "O(n²d) where n is sequence length, d is dimension",
          es: "O(n²d) donde n es longitud de secuencia, d es dimensión",
          de: "O(n²d) wobei n die Sequenzlänge, d die Dimension ist",
          nl: "O(n²d) waar n de sequentielengte is, d de dimensie"
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
        en: "Self-attention computes attention scores between all pairs of positions (n²) and each score involves d-dimensional vectors, resulting in O(n²d) complexity. This quadratic scaling limits sequence length.",
        es: "Self-attention calcula puntuaciones de atención entre todos los pares de posiciones (n²) y cada puntuación involucra vectores d-dimensionales, resultando en complejidad O(n²d).",
        de: "Self-Attention berechnet Attention-Scores zwischen allen Positionspaaren (n²) mit d-dimensionalen Vektoren, was zu O(n²d) Komplexität führt.",
        nl: "Self-attention berekent aandachtsscores tussen alle positieparen (n²) met d-dimensionale vectoren, wat resulteert in O(n²d) complexiteit."
      }
    },
    {
      question: {
        en: "What problem does Spectral Normalization address in GANs?",
        es: "¿Qué problema aborda la Normalización Espectral en GANs?",
        de: "Welches Problem löst Spectral Normalization in GANs?",
        nl: "Welk probleem lost Spectral Normalization op in GANs?"
      },
      options: [
        {
          en: "Stabilizes discriminator training by constraining Lipschitz constant",
          es: "Estabiliza el entrenamiento del discriminador restringiendo la constante de Lipschitz",
          de: "Stabilisiert Diskriminator-Training durch Einschränkung der Lipschitz-Konstante",
          nl: "Stabiliseert discriminator-training door Lipschitz-constante te beperken"
        },
        {
          en: "Speeds up convergence",
          es: "Acelera la convergencia",
          de: "Beschleunigt Konvergenz",
          nl: "Versnelt convergentie"
        },
        {
          en: "Reduces model size",
          es: "Reduce el tamaño del modelo",
          de: "Reduziert Modellgröße",
          nl: "Vermindert modelgrootte"
        },
        {
          en: "Improves image quality",
          es: "Mejora la calidad de imagen",
          de: "Verbessert Bildqualität",
          nl: "Verbetert beeldkwaliteit"
        }
      ],
      correct: 0,
      explanation: {
        en: "Spectral Normalization constrains the spectral norm of weight matrices, ensuring the discriminator is 1-Lipschitz. This stabilizes GAN training and helps prevent mode collapse.",
        es: "La Normalización Espectral restringe la norma espectral de matrices de pesos, asegurando que el discriminador sea 1-Lipschitz, estabilizando el entrenamiento GAN.",
        de: "Spectral Normalization beschränkt die Spektralnorm von Gewichtsmatrizen, stellt sicher dass der Diskriminator 1-Lipschitz ist und stabilisiert GAN-Training.",
        nl: "Spectral Normalization beperkt de spectrale norm van gewichtsmatrices, zorgt dat de discriminator 1-Lipschitz is en stabiliseert GAN-training."
      }
    },
    {
      question: {
        en: "What is the purpose of teacher forcing in sequence-to-sequence models?",
        es: "¿Cuál es el propósito de teacher forcing en modelos secuencia a secuencia?",
        de: "Was ist der Zweck von Teacher Forcing in Sequence-to-Sequence-Modellen?",
        nl: "Wat is het doel van teacher forcing in sequence-to-sequence modellen?"
      },
      options: [
        {
          en: "Uses ground truth as input during training for faster convergence",
          es: "Usa la verdad fundamental como entrada durante el entrenamiento para convergencia más rápida",
          de: "Nutzt Ground Truth als Eingabe beim Training für schnellere Konvergenz",
          nl: "Gebruikt ground truth als input tijdens training voor snellere convergentie"
        },
        {
          en: "Prevents overfitting",
          es: "Previene el sobreajuste",
          de: "Verhindert Überanpassung",
          nl: "Voorkomt overfitting"
        },
        {
          en: "Reduces memory usage",
          es: "Reduce el uso de memoria",
          de: "Reduziert Speichernutzung",
          nl: "Vermindert geheugengebruik"
        },
        {
          en: "Improves generalization",
          es: "Mejora la generalización",
          de: "Verbessert Generalisierung",
          nl: "Verbetert generalisatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Teacher forcing feeds the ground truth output from previous time steps as input during training, rather than the model's own predictions. This speeds up training but can cause exposure bias.",
        es: "Teacher forcing alimenta la salida verdadera de pasos anteriores como entrada durante el entrenamiento, acelerando el entrenamiento pero puede causar sesgo de exposición.",
        de: "Teacher Forcing nutzt die wahre Ausgabe vorheriger Zeitschritte als Eingabe beim Training, beschleunigt das Training aber kann Exposure Bias verursachen.",
        nl: "Teacher forcing gebruikt de werkelijke output van vorige tijdstappen als input tijdens training, versnelt training maar kan exposure bias veroorzaken."
      }
    },
    {
      question: {
        en: "What is mixup data augmentation and how does it work?",
        es: "¿Qué es la augmentación de datos mixup y cómo funciona?",
        de: "Was ist Mixup-Datenaugmentierung und wie funktioniert sie?",
        nl: "Wat is mixup data-augmentatie en hoe werkt het?"
      },
      options: [
        {
          en: "Linearly interpolates between training examples and their labels",
          es: "Interpola linealmente entre ejemplos de entrenamiento y sus etiquetas",
          de: "Interpoliert linear zwischen Trainingsbeispielen und ihren Labels",
          nl: "Interpoleert lineair tussen trainingsvoorbeelden en hun labels"
        },
        {
          en: "Randomly crops images",
          es: "Recorta imágenes aleatoriamente",
          de: "Schneidet Bilder zufällig zu",
          nl: "Snijdt willekeurig afbeeldingen bij"
        },
        {
          en: "Rotates data points",
          es: "Rota puntos de datos",
          de: "Rotiert Datenpunkte",
          nl: "Roteert datapunten"
        },
        {
          en: "Adds noise to inputs",
          es: "Añade ruido a las entradas",
          de: "Fügt Rauschen zu Eingaben hinzu",
          nl: "Voegt ruis toe aan inputs"
        }
      ],
      correct: 0,
      explanation: {
        en: "Mixup creates virtual training examples by linearly interpolating between pairs of examples and their labels. This regularization technique improves generalization and robustness to adversarial examples.",
        es: "Mixup crea ejemplos de entrenamiento virtuales interpolando linealmente entre pares de ejemplos y sus etiquetas, mejorando la generalización y robustez.",
        de: "Mixup erzeugt virtuelle Trainingsbeispiele durch lineare Interpolation zwischen Beispielpaaren und ihren Labels, verbessert Generalisierung und Robustheit.",
        nl: "Mixup creëert virtuele trainingsvoorbeelden door lineair te interpoleren tussen paren voorbeelden en hun labels, verbetert generalisatie en robuustheid."
      }
    },
    {
      question: {
        en: "What is the key innovation of BERT compared to earlier language models?",
        es: "¿Cuál es la innovación clave de BERT comparado con modelos anteriores?",
        de: "Was ist die Schlüsselinnovation von BERT im Vergleich zu früheren Modellen?",
        nl: "Wat is de belangrijkste innovatie van BERT vergeleken met eerdere modellen?"
      },
      options: [
        {
          en: "Bidirectional pre-training using masked language modeling",
          es: "Pre-entrenamiento bidireccional usando modelado de lenguaje enmascarado",
          de: "Bidirektionales Pre-Training mit maskierter Sprachmodellierung",
          nl: "Bidirectionele pre-training met gemaskeerde taalmodellering"
        },
        {
          en: "Uses attention mechanism",
          es: "Usa mecanismo de atención",
          de: "Nutzt Attention-Mechanismus",
          nl: "Gebruikt aandachtsmechanisme"
        },
        {
          en: "Larger model size",
          es: "Mayor tamaño del modelo",
          de: "Größere Modellgröße",
          nl: "Grotere modelgrootte"
        },
        {
          en: "Faster training",
          es: "Entrenamiento más rápido",
          de: "Schnelleres Training",
          nl: "Snellere training"
        }
      ],
      correct: 0,
      explanation: {
        en: "BERT introduced bidirectional pre-training through masked language modeling, allowing the model to see context from both directions simultaneously, unlike GPT's left-to-right approach.",
        es: "BERT introdujo el pre-entrenamiento bidireccional mediante modelado de lenguaje enmascarado, permitiendo ver contexto desde ambas direcciones simultáneamente.",
        de: "BERT führte bidirektionales Pre-Training durch maskierte Sprachmodellierung ein, ermöglicht Kontext aus beiden Richtungen gleichzeitig zu sehen.",
        nl: "BERT introduceerde bidirectionele pre-training via gemaskeerde taalmodellering, waardoor context uit beide richtingen tegelijk gezien kan worden."
      }
    },
    {
      question: {
        en: "What is the purpose of positional encoding in Transformers?",
        es: "¿Cuál es el propósito de la codificación posicional en Transformers?",
        de: "Was ist der Zweck der Positionskodierung in Transformern?",
        nl: "Wat is het doel van positionele codering in Transformers?"
      },
      options: [
        {
          en: "Provides sequence order information to the model",
          es: "Proporciona información del orden de secuencia al modelo",
          de: "Liefert Sequenzreihenfolge-Information an das Modell",
          nl: "Geeft sequentievolgorde-informatie aan het model"
        },
        {
          en: "Reduces computation",
          es: "Reduce la computación",
          de: "Reduziert Berechnung",
          nl: "Vermindert berekening"
        },
        {
          en: "Improves accuracy",
          es: "Mejora la precisión",
          de: "Verbessert Genauigkeit",
          nl: "Verbetert nauwkeurigheid"
        },
        {
          en: "Prevents overfitting",
          es: "Previene el sobreajuste",
          de: "Verhindert Überanpassung",
          nl: "Voorkomt overfitting"
        }
      ],
      correct: 0,
      explanation: {
        en: "Since self-attention is permutation-invariant, positional encodings are added to input embeddings to give the model information about the position of tokens in the sequence.",
        es: "Como la self-attention es invariante a permutaciones, se añaden codificaciones posicionales para dar al modelo información sobre la posición de tokens.",
        de: "Da Self-Attention permutationsinvariant ist, werden Positionskodierungen hinzugefügt um dem Modell Positionsinformation zu geben.",
        nl: "Omdat self-attention permutatie-invariant is, worden positionele coderingen toegevoegd om het model positie-informatie te geven."
      }
    },
    {
      question: {
        en: "What is the advantage of using residual connections in deep networks?",
        es: "¿Cuál es la ventaja de usar conexiones residuales en redes profundas?",
        de: "Was ist der Vorteil von Residualverbindungen in tiefen Netzen?",
        nl: "Wat is het voordeel van residuele verbindingen in diepe netwerken?"
      },
      options: [
        {
          en: "Enables training of much deeper networks by mitigating vanishing gradients",
          es: "Permite entrenar redes mucho más profundas mitigando gradientes que desaparecen",
          de: "Ermöglicht Training viel tieferer Netze durch Minderung verschwindender Gradienten",
          nl: "Maakt training van veel diepere netwerken mogelijk door verdwijnende gradiënten te verminderen"
        },
        {
          en: "Reduces model size",
          es: "Reduce el tamaño del modelo",
          de: "Reduziert Modellgröße",
          nl: "Vermindert modelgrootte"
        },
        {
          en: "Speeds up inference",
          es: "Acelera la inferencia",
          de: "Beschleunigt Inferenz",
          nl: "Versnelt inferentie"
        },
        {
          en: "Improves interpretability",
          es: "Mejora la interpretabilidad",
          de: "Verbessert Interpretierbarkeit",
          nl: "Verbetert interpreteerbaarheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Residual connections create shortcuts that allow gradients to flow directly through the network, solving the vanishing gradient problem and enabling training of networks with hundreds of layers.",
        es: "Las conexiones residuales crean atajos que permiten que los gradientes fluyan directamente, resolviendo el problema de gradientes que desaparecen.",
        de: "Residualverbindungen schaffen Abkürzungen für direkten Gradientenfluss, lösen das Problem verschwindender Gradienten und ermöglichen sehr tiefe Netze.",
        nl: "Residuele verbindingen creëren shortcuts voor directe gradiëntenstroom, lossen het verdwijnende gradiënten probleem op en maken zeer diepe netwerken mogelijk."
      }
    },
    {
      question: {
        en: "What is the main purpose of attention mechanisms in neural networks?",
        es: "¿Cuál es el propósito principal de los mecanismos de atención en redes neuronales?",
        de: "Was ist der Hauptzweck von Attention-Mechanismen in neuronalen Netzen?",
        nl: "Wat is het hoofddoel van aandachtsmechanismen in neurale netwerken?"
      },
      options: [
        {
          en: "Dynamically weight importance of different input parts",
          es: "Ponderar dinámicamente la importancia de diferentes partes de entrada",
          de: "Dynamisch die Wichtigkeit verschiedener Eingabeteile gewichten",
          nl: "Dynamisch het belang van verschillende inputdelen wegen"
        },
        {
          en: "Reduce memory usage",
          es: "Reducir el uso de memoria",
          de: "Speichernutzung reduzieren",
          nl: "Geheugengebruik verminderen"
        },
        {
          en: "Speed up training",
          es: "Acelerar el entrenamiento",
          de: "Training beschleunigen",
          nl: "Training versnellen"
        },
        {
          en: "Prevent overfitting",
          es: "Prevenir el sobreajuste",
          de: "Überanpassung verhindern",
          nl: "Overfitting voorkomen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Attention mechanisms allow models to dynamically focus on relevant parts of the input by computing weighted averages, where weights represent the importance of each element.",
        es: "Los mecanismos de atención permiten a los modelos enfocarse dinámicamente en partes relevantes calculando promedios ponderados según la importancia.",
        de: "Attention-Mechanismen ermöglichen Modellen, sich dynamisch auf relevante Teile zu fokussieren durch gewichtete Durchschnitte nach Wichtigkeit.",
        nl: "Aandachtsmechanismen laten modellen dynamisch focussen op relevante delen door gewogen gemiddelden te berekenen naar belangrijkheid."
      }
    },
    {
      question: {
        en: "What is the difference between SGD with momentum and Adam optimizer?",
        es: "¿Cuál es la diferencia entre SGD con momentum y el optimizador Adam?",
        de: "Was ist der Unterschied zwischen SGD mit Momentum und Adam-Optimierer?",
        nl: "Wat is het verschil tussen SGD met momentum en Adam optimizer?"
      },
      options: [
        {
          en: "Adam uses adaptive learning rates per parameter and second moments",
          es: "Adam usa tasas de aprendizaje adaptativas por parámetro y segundos momentos",
          de: "Adam nutzt adaptive Lernraten pro Parameter und zweite Momente",
          nl: "Adam gebruikt adaptieve leersnelheden per parameter en tweede momenten"
        },
        {
          en: "Adam is always faster",
          es: "Adam es siempre más rápido",
          de: "Adam ist immer schneller",
          nl: "Adam is altijd sneller"
        },
        {
          en: "SGD uses more memory",
          es: "SGD usa más memoria",
          de: "SGD nutzt mehr Speicher",
          nl: "SGD gebruikt meer geheugen"
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
        en: "Adam combines momentum (first moment) with RMSprop's adaptive learning rates (second moment), automatically adjusting learning rates for each parameter based on gradient history.",
        es: "Adam combina momentum (primer momento) con tasas adaptativas de RMSprop (segundo momento), ajustando automáticamente tasas para cada parámetro.",
        de: "Adam kombiniert Momentum (erstes Moment) mit RMSprops adaptiven Lernraten (zweites Moment), passt Lernraten automatisch pro Parameter an.",
        nl: "Adam combineert momentum (eerste moment) met RMSprop's adaptieve leersnelheden (tweede moment), past leersnelheden automatisch per parameter aan."
      }
    },
    {
      question: {
        en: "What is the purpose of dropout in neural networks?",
        es: "¿Cuál es el propósito del dropout en redes neuronales?",
        de: "Was ist der Zweck von Dropout in neuronalen Netzen?",
        nl: "Wat is het doel van dropout in neurale netwerken?"
      },
      options: [
        {
          en: "Regularization by randomly deactivating neurons during training",
          es: "Regularización desactivando neuronas aleatoriamente durante el entrenamiento",
          de: "Regularisierung durch zufälliges Deaktivieren von Neuronen beim Training",
          nl: "Regularisatie door willekeurig neuronen te deactiveren tijdens training"
        },
        {
          en: "Speed up training",
          es: "Acelerar el entrenamiento",
          de: "Training beschleunigen",
          nl: "Training versnellen"
        },
        {
          en: "Reduce model size",
          es: "Reducir el tamaño del modelo",
          de: "Modellgröße reduzieren",
          nl: "Modelgrootte verminderen"
        },
        {
          en: "Improve accuracy",
          es: "Mejorar la precisión",
          de: "Genauigkeit verbessern",
          nl: "Nauwkeurigheid verbeteren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Dropout randomly sets a fraction of neurons to zero during training, preventing co-adaptation and acting as an ensemble method. This regularization technique reduces overfitting.",
        es: "Dropout establece aleatoriamente una fracción de neuronas a cero durante el entrenamiento, previniendo co-adaptación y actuando como método ensemble.",
        de: "Dropout setzt zufällig einen Teil der Neuronen auf null beim Training, verhindert Ko-Adaptation und wirkt als Ensemble-Methode.",
        nl: "Dropout zet willekeurig een fractie neuronen op nul tijdens training, voorkomt co-adaptatie en werkt als ensemble-methode."
      }
    },
    {
      question: {
        en: "What is the vanishing gradient problem in deep networks?",
        es: "¿Qué es el problema del gradiente que desaparece en redes profundas?",
        de: "Was ist das Problem verschwindender Gradienten in tiefen Netzen?",
        nl: "Wat is het verdwijnende gradiënten probleem in diepe netwerken?"
      },
      options: [
        {
          en: "Gradients become exponentially small in early layers during backprop",
          es: "Los gradientes se vuelven exponencialmente pequeños en capas tempranas",
          de: "Gradienten werden exponentiell klein in frühen Schichten bei Backprop",
          nl: "Gradiënten worden exponentieel klein in vroege lagen tijdens backprop"
        },
        {
          en: "Gradients become too large",
          es: "Los gradientes se vuelven demasiado grandes",
          de: "Gradienten werden zu groß",
          nl: "Gradiënten worden te groot"
        },
        {
          en: "Gradients oscillate",
          es: "Los gradientes oscilan",
          de: "Gradienten oszillieren",
          nl: "Gradiënten oscilleren"
        },
        {
          en: "Gradients become negative",
          es: "Los gradientes se vuelven negativos",
          de: "Gradienten werden negativ",
          nl: "Gradiënten worden negatief"
        }
      ],
      correct: 0,
      explanation: {
        en: "In deep networks, gradients can become exponentially small as they propagate backward, making it difficult to train early layers. This is often caused by activation functions like sigmoid.",
        es: "En redes profundas, los gradientes pueden volverse exponencialmente pequeños al propagarse hacia atrás, dificultando entrenar capas tempranas.",
        de: "In tiefen Netzen können Gradienten exponentiell klein werden bei Rückwärtspropagierung, was das Training früher Schichten erschwert.",
        nl: "In diepe netwerken kunnen gradiënten exponentieel klein worden bij achterwaartse propagatie, wat training van vroege lagen bemoeilijkt."
      }
    },
    {
      question: {
        en: "What is transfer learning in deep learning?",
        es: "¿Qué es el aprendizaje por transferencia en deep learning?",
        de: "Was ist Transfer Learning im Deep Learning?",
        nl: "Wat is transfer learning in deep learning?"
      },
      options: [
        {
          en: "Using pre-trained models as starting point for new tasks",
          es: "Usar modelos pre-entrenados como punto de partida para nuevas tareas",
          de: "Vortrainierte Modelle als Ausgangspunkt für neue Aufgaben nutzen",
          nl: "Voorgetrainde modellen gebruiken als startpunt voor nieuwe taken"
        },
        {
          en: "Training multiple models",
          es: "Entrenar múltiples modelos",
          de: "Mehrere Modelle trainieren",
          nl: "Meerdere modellen trainen"
        },
        {
          en: "Transferring data between models",
          es: "Transferir datos entre modelos",
          de: "Daten zwischen Modellen übertragen",
          nl: "Data overdragen tussen modellen"
        },
        {
          en: "Learning from unlabeled data",
          es: "Aprender de datos sin etiquetar",
          de: "Aus ungelabelten Daten lernen",
          nl: "Leren van ongelabelde data"
        }
      ],
      correct: 0,
      explanation: {
        en: "Transfer learning leverages knowledge from models trained on large datasets by fine-tuning them for specific tasks, significantly reducing training time and data requirements.",
        es: "El aprendizaje por transferencia aprovecha el conocimiento de modelos entrenados en grandes conjuntos de datos, reduciendo tiempo y requisitos de datos.",
        de: "Transfer Learning nutzt Wissen aus auf großen Datensätzen trainierten Modellen, reduziert erheblich Trainingszeit und Datenanforderungen.",
        nl: "Transfer learning benut kennis uit modellen getraind op grote datasets, vermindert aanzienlijk trainingstijd en datavereisten."
      }
    },
    {
      question: {
        en: "What is batch normalization and why is it useful?",
        es: "¿Qué es la normalización por lotes y por qué es útil?",
        de: "Was ist Batch-Normalisierung und warum ist sie nützlich?",
        nl: "Wat is batch normalisatie en waarom is het nuttig?"
      },
      options: [
        {
          en: "Normalizes inputs to each layer, stabilizing and accelerating training",
          es: "Normaliza entradas a cada capa, estabilizando y acelerando el entrenamiento",
          de: "Normalisiert Eingaben jeder Schicht, stabilisiert und beschleunigt Training",
          nl: "Normaliseert inputs naar elke laag, stabiliseert en versnelt training"
        },
        {
          en: "Reduces model size",
          es: "Reduce el tamaño del modelo",
          de: "Reduziert Modellgröße",
          nl: "Vermindert modelgrootte"
        },
        {
          en: "Prevents gradient explosion",
          es: "Previene explosión de gradientes",
          de: "Verhindert Gradientenexplosion",
          nl: "Voorkomt gradiënt-explosie"
        },
        {
          en: "Improves accuracy",
          es: "Mejora la precisión",
          de: "Verbessert Genauigkeit",
          nl: "Verbetert nauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Batch normalization normalizes layer inputs to have zero mean and unit variance, reducing internal covariate shift. This allows higher learning rates and faster convergence.",
        es: "La normalización por lotes normaliza entradas para tener media cero y varianza unitaria, reduciendo el cambio de covarianza interno y permitiendo tasas más altas.",
        de: "Batch-Normalisierung normalisiert Schichteingaben auf Nullmittelwert und Einheitsvarianz, reduziert interne Kovarianzverschiebung.",
        nl: "Batch normalisatie normaliseert laaginputs naar nul gemiddelde en eenheidsvariantie, vermindert interne covariantieverschuiving."
      }
    },
    {
      question: {
        en: "What is the exploding gradient problem and how is it addressed?",
        es: "¿Qué es el problema del gradiente explosivo y cómo se aborda?",
        de: "Was ist das Problem explodierender Gradienten und wie wird es gelöst?",
        nl: "Wat is het exploderende gradiënten probleem en hoe wordt het aangepakt?"
      },
      options: [
        {
          en: "Gradients grow exponentially; solved by gradient clipping",
          es: "Los gradientes crecen exponencialmente; resuelto por recorte de gradientes",
          de: "Gradienten wachsen exponentiell; gelöst durch Gradient Clipping",
          nl: "Gradiënten groeien exponentieel; opgelost door gradiënt clipping"
        },
        {
          en: "Gradients vanish; solved by ReLU",
          es: "Los gradientes desaparecen; resuelto por ReLU",
          de: "Gradienten verschwinden; gelöst durch ReLU",
          nl: "Gradiënten verdwijnen; opgelost door ReLU"
        },
        {
          en: "Weights explode; solved by dropout",
          es: "Los pesos explotan; resuelto por dropout",
          de: "Gewichte explodieren; gelöst durch Dropout",
          nl: "Gewichten exploderen; opgelost door dropout"
        },
        {
          en: "Loss increases; solved by momentum",
          es: "La pérdida aumenta; resuelto por momentum",
          de: "Verlust steigt; gelöst durch Momentum",
          nl: "Verlies neemt toe; opgelost door momentum"
        }
      ],
      correct: 0,
      explanation: {
        en: "Exploding gradients occur when gradients grow exponentially during backpropagation, causing unstable training. Gradient clipping limits gradient magnitude to prevent this.",
        es: "Los gradientes explosivos ocurren cuando crecen exponencialmente durante la retropropagación. El recorte de gradientes limita su magnitud.",
        de: "Explodierende Gradienten entstehen bei exponentiellem Wachstum während Backpropagation. Gradient Clipping begrenzt die Gradientengröße.",
        nl: "Exploderende gradiënten ontstaan bij exponentiële groei tijdens backpropagatie. Gradiënt clipping beperkt de gradiëntgrootte."
      }
    },
    {
      question: {
        en: "What is early stopping in machine learning?",
        es: "¿Qué es la detención temprana en aprendizaje automático?",
        de: "Was ist Early Stopping im maschinellen Lernen?",
        nl: "Wat is early stopping in machine learning?"
      },
      options: [
        {
          en: "Stop training when validation performance stops improving",
          es: "Detener entrenamiento cuando el rendimiento de validación deja de mejorar",
          de: "Training stoppen wenn Validierungsleistung nicht mehr verbessert",
          nl: "Training stoppen wanneer validatieprestatie niet meer verbetert"
        },
        {
          en: "Stop when loss is zero",
          es: "Detener cuando la pérdida es cero",
          de: "Stoppen wenn Verlust null ist",
          nl: "Stoppen wanneer verlies nul is"
        },
        {
          en: "Train for fixed epochs",
          es: "Entrenar por épocas fijas",
          de: "Für feste Epochen trainieren",
          nl: "Trainen voor vaste epochs"
        },
        {
          en: "Stop at random times",
          es: "Detener en momentos aleatorios",
          de: "Zu zufälligen Zeiten stoppen",
          nl: "Stoppen op willekeurige tijden"
        }
      ],
      correct: 0,
      explanation: {
        en: "Early stopping monitors validation performance and stops training when it plateaus or degrades, preventing overfitting. It acts as a form of regularization.",
        es: "La detención temprana monitorea el rendimiento de validación y detiene el entrenamiento cuando se estanca o degrada, previniendo sobreajuste.",
        de: "Early Stopping überwacht Validierungsleistung und stoppt Training bei Stagnation oder Verschlechterung, verhindert Überanpassung.",
        nl: "Early stopping monitort validatieprestatie en stopt training bij stagnatie of verslechtering, voorkomt overfitting."
      }
    },
    {
      question: {
        en: "What is the purpose of weight decay in neural network training?",
        es: "¿Cuál es el propósito del weight decay en el entrenamiento de redes neuronales?",
        de: "Was ist der Zweck von Weight Decay beim Training neuronaler Netze?",
        nl: "Wat is het doel van weight decay bij neurale netwerk training?"
      },
      options: [
        {
          en: "L2 regularization that penalizes large weights",
          es: "Regularización L2 que penaliza pesos grandes",
          de: "L2-Regularisierung die große Gewichte bestraft",
          nl: "L2-regularisatie die grote gewichten bestraft"
        },
        {
          en: "Makes weights smaller over time",
          es: "Hace los pesos más pequeños con el tiempo",
          de: "Macht Gewichte kleiner über Zeit",
          nl: "Maakt gewichten kleiner over tijd"
        },
        {
          en: "Speeds up training",
          es: "Acelera el entrenamiento",
          de: "Beschleunigt Training",
          nl: "Versnelt training"
        },
        {
          en: "Reduces memory usage",
          es: "Reduce el uso de memoria",
          de: "Reduziert Speichernutzung",
          nl: "Vermindert geheugengebruik"
        }
      ],
      correct: 0,
      explanation: {
        en: "Weight decay adds an L2 penalty term to the loss function, encouraging smaller weights. This regularization technique helps prevent overfitting and improves generalization.",
        es: "Weight decay añade un término de penalización L2 a la función de pérdida, fomentando pesos más pequeños y previniendo sobreajuste.",
        de: "Weight Decay fügt einen L2-Strafterm zur Verlustfunktion hinzu, fördert kleinere Gewichte und verhindert Überanpassung.",
        nl: "Weight decay voegt een L2-strafterm toe aan de verliesfunctie, moedigt kleinere gewichten aan en voorkomt overfitting."
      }
    },
    {
      question: {
        en: "What is curriculum learning in machine learning?",
        es: "¿Qué es el aprendizaje curricular en aprendizaje automático?",
        de: "Was ist Curriculum Learning im maschinellen Lernen?",
        nl: "Wat is curriculum learning in machine learning?"
      },
      options: [
        {
          en: "Training on progressively harder examples",
          es: "Entrenar con ejemplos progresivamente más difíciles",
          de: "Training mit progressiv schwierigeren Beispielen",
          nl: "Trainen op progressief moeilijkere voorbeelden"
        },
        {
          en: "Using multiple curricula",
          es: "Usar múltiples currículos",
          de: "Mehrere Curricula verwenden",
          nl: "Meerdere curricula gebruiken"
        },
        {
          en: "Learning from textbooks",
          es: "Aprender de libros de texto",
          de: "Aus Lehrbüchern lernen",
          nl: "Leren uit tekstboeken"
        },
        {
          en: "Training in schools",
          es: "Entrenar en escuelas",
          de: "In Schulen trainieren",
          nl: "Trainen in scholen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Curriculum learning presents training examples in order of increasing difficulty, mimicking human learning. This can lead to faster convergence and better final performance.",
        es: "El aprendizaje curricular presenta ejemplos en orden de dificultad creciente, imitando el aprendizaje humano para mejor convergencia.",
        de: "Curriculum Learning präsentiert Trainingsbeispiele in steigender Schwierigkeit, ahmt menschliches Lernen nach für bessere Konvergenz.",
        nl: "Curriculum learning presenteert voorbeelden in oplopende moeilijkheid, bootst menselijk leren na voor betere convergentie."
      }
    },
    {
      question: {
        en: "What is the main advantage of using gradient checkpointing in deep networks?",
        es: "¿Cuál es la ventaja principal de usar gradient checkpointing en redes profundas?",
        de: "Was ist der Hauptvorteil von Gradient Checkpointing in tiefen Netzen?",
        nl: "Wat is het hoofdvoordeel van gradient checkpointing in diepe netwerken?"
      },
      options: [
        {
          en: "Reduces memory usage at the cost of computation",
          es: "Reduce el uso de memoria a costa de computación",
          de: "Reduziert Speichernutzung auf Kosten der Berechnung",
          nl: "Vermindert geheugengebruik ten koste van berekening"
        },
        {
          en: "Speeds up training",
          es: "Acelera el entrenamiento",
          de: "Beschleunigt das Training",
          nl: "Versnelt training"
        },
        {
          en: "Improves accuracy",
          es: "Mejora la precisión",
          de: "Verbessert die Genauigkeit",
          nl: "Verbetert nauwkeurigheid"
        },
        {
          en: "Prevents overfitting",
          es: "Previene el sobreajuste",
          de: "Verhindert Überanpassung",
          nl: "Voorkomt overfitting"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gradient checkpointing trades computation for memory by not storing all intermediate activations. During backprop, it recomputes them as needed, enabling training of much deeper networks.",
        es: "Gradient checkpointing intercambia computación por memoria al no almacenar todas las activaciones intermedias, recalculándolas cuando sea necesario.",
        de: "Gradient Checkpointing tauscht Berechnung gegen Speicher, indem nicht alle Zwischenaktivierungen gespeichert werden.",
        nl: "Gradient checkpointing ruilt berekening voor geheugen door niet alle tussenactivaties op te slaan."
      }
    },
    {
      question: {
        en: "What is knowledge distillation in neural networks?",
        es: "¿Qué es la destilación de conocimiento en redes neuronales?",
        de: "Was ist Knowledge Distillation in neuronalen Netzen?",
        nl: "Wat is knowledge distillation in neurale netwerken?"
      },
      options: [
        {
          en: "Training smaller models to mimic larger teacher models",
          es: "Entrenar modelos más pequeños para imitar modelos maestros más grandes",
          de: "Kleinere Modelle trainieren um größere Lehrermodelle nachzuahmen",
          nl: "Kleinere modellen trainen om grotere teacher-modellen na te bootsen"
        },
        {
          en: "Extracting features from data",
          es: "Extraer características de datos",
          de: "Features aus Daten extrahieren",
          nl: "Features extraheren uit data"
        },
        {
          en: "Removing unnecessary weights",
          es: "Eliminar pesos innecesarios",
          de: "Unnötige Gewichte entfernen",
          nl: "Onnodige gewichten verwijderen"
        },
        {
          en: "Combining multiple models",
          es: "Combinar múltiples modelos",
          de: "Mehrere Modelle kombinieren",
          nl: "Meerdere modellen combineren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Knowledge distillation trains a smaller student model to match the soft outputs of a larger teacher model, transferring knowledge while reducing model size and inference cost.",
        es: "La destilación de conocimiento entrena un modelo estudiante más pequeño para igualar las salidas suaves de un modelo maestro más grande.",
        de: "Knowledge Distillation trainiert ein kleineres Schülermodell um die weichen Ausgaben eines größeren Lehrermodells nachzubilden.",
        nl: "Knowledge distillation traint een kleiner studentmodel om de zachte outputs van een groter teachermodel te matchen."
      }
    },
    {
      question: {
        en: "What is the computational complexity of self-attention in Transformers?",
        es: "¿Cuál es la complejidad computacional de self-attention en Transformers?",
        de: "Was ist die Rechenkomplexität von Self-Attention in Transformern?",
        nl: "Wat is de computationele complexiteit van self-attention in Transformers?"
      },
      options: [
        {
          en: "O(n²d) where n is sequence length, d is dimension",
          es: "O(n²d) donde n es longitud de secuencia, d es dimensión",
          de: "O(n²d) wobei n die Sequenzlänge, d die Dimension ist",
          nl: "O(n²d) waar n de sequentielengte is, d de dimensie"
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
        en: "Self-attention computes attention scores between all pairs of positions (n²) and each score involves d-dimensional vectors, resulting in O(n²d) complexity.",
        es: "Self-attention calcula puntuaciones de atención entre todos los pares de posiciones (n²) con vectores d-dimensionales, resultando en O(n²d).",
        de: "Self-Attention berechnet Attention-Scores zwischen allen Positionspaaren (n²) mit d-dimensionalen Vektoren, was zu O(n²d) führt.",
        nl: "Self-attention berekent aandachtsscores tussen alle positieparen (n²) met d-dimensionale vectoren, resulterend in O(n²d)."
      }
    },
    {
      question: {
        en: "What is the Gumbel-Max trick used for in machine learning?",
        es: "¿Para qué se usa el truco Gumbel-Max en aprendizaje automático?",
        de: "Wofür wird der Gumbel-Max-Trick im maschinellen Lernen verwendet?",
        nl: "Waarvoor wordt de Gumbel-Max truc gebruikt in machine learning?"
      },
      options: [
        {
          en: "Differentiable sampling from categorical distributions",
          es: "Muestreo diferenciable de distribuciones categóricas",
          de: "Differenzierbares Sampling aus kategorialen Verteilungen",
          nl: "Differentieerbaar samplen uit categorische verdelingen"
        },
        {
          en: "Maximizing likelihood",
          es: "Maximizar verosimilitud",
          de: "Likelihood maximieren",
          nl: "Likelihood maximaliseren"
        },
        {
          en: "Reducing variance",
          es: "Reducir varianza",
          de: "Varianz reduzieren",
          nl: "Variantie verminderen"
        },
        {
          en: "Speeding up sampling",
          es: "Acelerar muestreo",
          de: "Sampling beschleunigen",
          nl: "Sampling versnellen"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Gumbel-Max trick enables differentiable sampling from categorical distributions using the reparameterization trick, crucial for training models with discrete variables.",
        es: "El truco Gumbel-Max permite muestreo diferenciable de distribuciones categóricas usando reparametrización, crucial para variables discretas.",
        de: "Der Gumbel-Max-Trick ermöglicht differenzierbares Sampling aus kategorialen Verteilungen mittels Reparametrisierung.",
        nl: "De Gumbel-Max truc maakt differentieerbaar samplen uit categorische verdelingen mogelijk via reparametrisatie."
      }
    },
    {
      question: {
        en: "What is Layer Normalization and how does it differ from Batch Normalization?",
        es: "¿Qué es Layer Normalization y cómo difiere de Batch Normalization?",
        de: "Was ist Layer Normalization und wie unterscheidet sie sich von Batch Normalization?",
        nl: "Wat is Layer Normalization en hoe verschilt het van Batch Normalization?"
      },
      options: [
        {
          en: "Normalizes across features instead of batch dimension",
          es: "Normaliza a través de características en lugar de dimensión de lote",
          de: "Normalisiert über Features statt Batch-Dimension",
          nl: "Normaliseert over features in plaats van batch-dimensie"
        },
        {
          en: "Normalizes across time",
          es: "Normaliza a través del tiempo",
          de: "Normalisiert über Zeit",
          nl: "Normaliseert over tijd"
        },
        {
          en: "Uses different statistics",
          es: "Usa estadísticas diferentes",
          de: "Nutzt andere Statistiken",
          nl: "Gebruikt andere statistieken"
        },
        {
          en: "Only works with RNNs",
          es: "Solo funciona con RNN",
          de: "Funktioniert nur mit RNNs",
          nl: "Werkt alleen met RNN's"
        }
      ],
      correct: 0,
      explanation: {
        en: "Layer Normalization normalizes across the feature dimension for each sample independently, making it suitable for RNNs and small batch sizes where batch statistics are unreliable.",
        es: "Layer Normalization normaliza a través de la dimensión de características para cada muestra independientemente, ideal para RNN y lotes pequeños.",
        de: "Layer Normalization normalisiert über die Feature-Dimension für jede Probe unabhängig, geeignet für RNNs und kleine Batch-Größen.",
        nl: "Layer Normalization normaliseert over de feature-dimensie voor elk sample onafhankelijk, geschikt voor RNN's en kleine batch-groottes."
      }
    },
    {
      question: {
        en: "What is the purpose of teacher forcing in sequence models?",
        es: "¿Cuál es el propósito de teacher forcing en modelos de secuencia?",
        de: "Was ist der Zweck von Teacher Forcing in Sequenzmodellen?",
        nl: "Wat is het doel van teacher forcing in sequentiemodellen?"
      },
      options: [
        {
          en: "Uses ground truth as input during training",
          es: "Usa la verdad fundamental como entrada durante entrenamiento",
          de: "Nutzt Ground Truth als Eingabe beim Training",
          nl: "Gebruikt ground truth als input tijdens training"
        },
        {
          en: "Forces model to learn faster",
          es: "Fuerza al modelo a aprender más rápido",
          de: "Zwingt Modell schneller zu lernen",
          nl: "Dwingt model sneller te leren"
        },
        {
          en: "Teaches multiple models",
          es: "Enseña múltiples modelos",
          de: "Lehrt mehrere Modelle",
          nl: "Leert meerdere modellen"
        },
        {
          en: "Prevents mode collapse",
          es: "Previene colapso de modo",
          de: "Verhindert Mode Collapse",
          nl: "Voorkomt mode collapse"
        }
      ],
      correct: 0,
      explanation: {
        en: "Teacher forcing feeds ground truth outputs as inputs during training rather than model predictions, speeding up training but potentially causing exposure bias at inference.",
        es: "Teacher forcing alimenta salidas verdaderas como entradas durante entrenamiento en lugar de predicciones, acelerando pero causando sesgo.",
        de: "Teacher Forcing nutzt wahre Ausgaben als Eingaben beim Training statt Vorhersagen, beschleunigt Training aber kann Bias verursachen.",
        nl: "Teacher forcing gebruikt werkelijke outputs als inputs tijdens training in plaats van voorspellingen, versnelt training maar kan bias veroorzaken."
      }
    },
    {
      question: {
        en: "What is mixup augmentation in deep learning?",
        es: "¿Qué es la augmentación mixup en deep learning?",
        de: "Was ist Mixup-Augmentierung im Deep Learning?",
        nl: "Wat is mixup-augmentatie in deep learning?"
      },
      options: [
        {
          en: "Linear interpolation between training examples",
          es: "Interpolación lineal entre ejemplos de entrenamiento",
          de: "Lineare Interpolation zwischen Trainingsbeispielen",
          nl: "Lineaire interpolatie tussen trainingsvoorbeelden"
        },
        {
          en: "Mixing different datasets",
          es: "Mezclar diferentes conjuntos de datos",
          de: "Verschiedene Datensätze mischen",
          nl: "Verschillende datasets mengen"
        },
        {
          en: "Combining models",
          es: "Combinar modelos",
          de: "Modelle kombinieren",
          nl: "Modellen combineren"
        },
        {
          en: "Random cropping",
          es: "Recorte aleatorio",
          de: "Zufälliges Zuschneiden",
          nl: "Willekeurig bijsnijden"
        }
      ],
      correct: 0,
      explanation: {
        en: "Mixup creates virtual training examples by linearly interpolating between pairs of examples and their labels, improving generalization and robustness to adversarial attacks.",
        es: "Mixup crea ejemplos virtuales interpolando linealmente entre pares de ejemplos y etiquetas, mejorando generalización y robustez.",
        de: "Mixup erzeugt virtuelle Trainingsbeispiele durch lineare Interpolation zwischen Beispielpaaren und Labels, verbessert Generalisierung.",
        nl: "Mixup creëert virtuele trainingsvoorbeelden door lineair te interpoleren tussen paren voorbeelden en labels, verbetert generalisatie."
      }
    },
    {
      question: {
        en: "What is BERT's masked language modeling objective?",
        es: "¿Cuál es el objetivo de modelado de lenguaje enmascarado de BERT?",
        de: "Was ist BERTs maskiertes Sprachmodellierungsziel?",
        nl: "Wat is BERT's gemaskeerde taalmodellering doelstelling?"
      },
      options: [
        {
          en: "Predict randomly masked tokens using bidirectional context",
          es: "Predecir tokens enmascarados aleatoriamente usando contexto bidireccional",
          de: "Zufällig maskierte Token mit bidirektionalem Kontext vorhersagen",
          nl: "Willekeurig gemaskeerde tokens voorspellen met bidirectionele context"
        },
        {
          en: "Generate text left-to-right",
          es: "Generar texto de izquierda a derecha",
          de: "Text von links nach rechts generieren",
          nl: "Tekst van links naar rechts genereren"
        },
        {
          en: "Classify sentences",
          es: "Clasificar oraciones",
          de: "Sätze klassifizieren",
          nl: "Zinnen classificeren"
        },
        {
          en: "Translate languages",
          es: "Traducir idiomas",
          de: "Sprachen übersetzen",
          nl: "Talen vertalen"
        }
      ],
      correct: 0,
      explanation: {
        en: "BERT masks 15% of tokens randomly and trains to predict them using bidirectional context, allowing it to learn deep bidirectional representations unlike GPT's unidirectional approach.",
        es: "BERT enmascara 15% de tokens aleatoriamente y entrena para predecirlos usando contexto bidireccional, aprendiendo representaciones profundas.",
        de: "BERT maskiert 15% der Token zufällig und trainiert sie vorherzusagen mit bidirektionalem Kontext für tiefe Repräsentationen.",
        nl: "BERT maskeert 15% van tokens willekeurig en traint om ze te voorspellen met bidirectionele context voor diepe representaties."
      }
    },
    {
      question: {
        en: "What is positional encoding in Transformers?",
        es: "¿Qué es la codificación posicional en Transformers?",
        de: "Was ist Positionskodierung in Transformern?",
        nl: "Wat is positionele codering in Transformers?"
      },
      options: [
        {
          en: "Adds position information to embeddings",
          es: "Añade información de posición a embeddings",
          de: "Fügt Positionsinformation zu Embeddings hinzu",
          nl: "Voegt positie-informatie toe aan embeddings"
        },
        {
          en: "Encodes word meanings",
          es: "Codifica significados de palabras",
          de: "Kodiert Wortbedeutungen",
          nl: "Codeert woordbetekenissen"
        },
        {
          en: "Compresses sequences",
          es: "Comprime secuencias",
          de: "Komprimiert Sequenzen",
          nl: "Comprimeert sequenties"
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
        en: "Since self-attention is permutation-invariant, positional encodings add position information to input embeddings using sinusoidal functions, allowing the model to utilize sequence order.",
        es: "Como self-attention es invariante a permutaciones, las codificaciones posicionales añaden información de posición usando funciones sinusoidales.",
        de: "Da Self-Attention permutationsinvariant ist, fügen Positionskodierungen Positionsinformation mit sinusförmigen Funktionen hinzu.",
        nl: "Omdat self-attention permutatie-invariant is, voegen positionele coderingen positie-informatie toe met sinusoïdale functies."
      }
    },
    {
      question: {
        en: "What are residual connections in deep networks?",
        es: "¿Qué son las conexiones residuales en redes profundas?",
        de: "Was sind Residualverbindungen in tiefen Netzen?",
        nl: "Wat zijn residuele verbindingen in diepe netwerken?"
      },
      options: [
        {
          en: "Skip connections that add input to output",
          es: "Conexiones de salto que añaden entrada a salida",
          de: "Skip-Verbindungen die Eingabe zu Ausgabe addieren",
          nl: "Skip-verbindingen die input bij output optellen"
        },
        {
          en: "Connections between layers",
          es: "Conexiones entre capas",
          de: "Verbindungen zwischen Schichten",
          nl: "Verbindingen tussen lagen"
        },
        {
          en: "Leftover connections",
          es: "Conexiones sobrantes",
          de: "Übriggebliebene Verbindungen",
          nl: "Overgebleven verbindingen"
        },
        {
          en: "Random connections",
          es: "Conexiones aleatorias",
          de: "Zufällige Verbindungen",
          nl: "Willekeurige verbindingen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Residual connections add the input of a layer directly to its output, creating shortcuts that help gradients flow and enable training of very deep networks like ResNet.",
        es: "Las conexiones residuales añaden la entrada de una capa directamente a su salida, creando atajos que ayudan al flujo de gradientes.",
        de: "Residualverbindungen addieren die Eingabe einer Schicht direkt zur Ausgabe, schaffen Abkürzungen für Gradientenfluss.",
        nl: "Residuele verbindingen tellen de input van een laag direct op bij de output, creëren shortcuts voor gradiëntenstroom."
      }
    },
    {
      question: {
        en: "What is attention mechanism in neural networks?",
        es: "¿Qué es el mecanismo de atención en redes neuronales?",
        de: "Was ist der Attention-Mechanismus in neuronalen Netzen?",
        nl: "Wat is het aandachtsmechanisme in neurale netwerken?"
      },
      options: [
        {
          en: "Weighted averaging based on relevance",
          es: "Promediado ponderado basado en relevancia",
          de: "Gewichtete Mittelung basierend auf Relevanz",
          nl: "Gewogen middeling gebaseerd op relevantie"
        },
        {
          en: "Focus on one input",
          es: "Enfoque en una entrada",
          de: "Fokus auf eine Eingabe",
          nl: "Focus op één input"
        },
        {
          en: "Attention to details",
          es: "Atención a los detalles",
          de: "Aufmerksamkeit für Details",
          nl: "Aandacht voor details"
        },
        {
          en: "Memory mechanism",
          es: "Mecanismo de memoria",
          de: "Speichermechanismus",
          nl: "Geheugenmechanisme"
        }
      ],
      correct: 0,
      explanation: {
        en: "Attention computes weighted averages of values where weights represent relevance scores, allowing models to dynamically focus on important parts of the input.",
        es: "La atención calcula promedios ponderados de valores donde los pesos representan puntuaciones de relevancia para enfocarse dinámicamente.",
        de: "Attention berechnet gewichtete Mittelwerte wobei Gewichte Relevanzwerte darstellen für dynamischen Fokus.",
        nl: "Aandacht berekent gewogen gemiddelden waarbij gewichten relevantiescores vertegenwoordigen voor dynamische focus."
      }
    },
    {
      question: {
        en: "What is the difference between SGD and Adam optimizer?",
        es: "¿Cuál es la diferencia entre SGD y el optimizador Adam?",
        de: "Was ist der Unterschied zwischen SGD und Adam-Optimierer?",
        nl: "Wat is het verschil tussen SGD en Adam optimizer?"
      },
      options: [
        {
          en: "Adam uses adaptive learning rates and momentum",
          es: "Adam usa tasas de aprendizaje adaptativas y momentum",
          de: "Adam nutzt adaptive Lernraten und Momentum",
          nl: "Adam gebruikt adaptieve leersnelheden en momentum"
        },
        {
          en: "SGD is faster",
          es: "SGD es más rápido",
          de: "SGD ist schneller",
          nl: "SGD is sneller"
        },
        {
          en: "Adam uses more memory",
          es: "Adam usa más memoria",
          de: "Adam nutzt mehr Speicher",
          nl: "Adam gebruikt meer geheugen"
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
        en: "Adam combines momentum with adaptive learning rates per parameter using first and second moment estimates, while SGD uses a fixed learning rate for all parameters.",
        es: "Adam combina momentum con tasas adaptativas por parámetro usando estimaciones de primer y segundo momento, SGD usa tasa fija.",
        de: "Adam kombiniert Momentum mit adaptiven Lernraten pro Parameter mittels Momentschätzungen, SGD nutzt feste Lernrate.",
        nl: "Adam combineert momentum met adaptieve leersnelheden per parameter via momentschattingen, SGD gebruikt vaste leersnelheid."
      }
    },
    {
      question: {
        en: "What is dropout regularization?",
        es: "¿Qué es la regularización dropout?",
        de: "Was ist Dropout-Regularisierung?",
        nl: "Wat is dropout-regularisatie?"
      },
      options: [
        {
          en: "Randomly deactivating neurons during training",
          es: "Desactivar neuronas aleatoriamente durante entrenamiento",
          de: "Zufälliges Deaktivieren von Neuronen beim Training",
          nl: "Willekeurig deactiveren van neuronen tijdens training"
        },
        {
          en: "Dropping out of training",
          es: "Abandonar el entrenamiento",
          de: "Training abbrechen",
          nl: "Training stoppen"
        },
        {
          en: "Removing bad neurons",
          es: "Eliminar neuronas malas",
          de: "Schlechte Neuronen entfernen",
          nl: "Slechte neuronen verwijderen"
        },
        {
          en: "Reducing learning rate",
          es: "Reducir tasa de aprendizaje",
          de: "Lernrate reduzieren",
          nl: "Leersnelheid verminderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Dropout randomly sets neurons to zero during training with probability p, preventing co-adaptation and acting as ensemble learning to reduce overfitting.",
        es: "Dropout establece neuronas a cero aleatoriamente durante entrenamiento con probabilidad p, previniendo co-adaptación y sobreajuste.",
        de: "Dropout setzt Neuronen zufällig auf null beim Training mit Wahrscheinlichkeit p, verhindert Ko-Adaptation und Überanpassung.",
        nl: "Dropout zet neuronen willekeurig op nul tijdens training met waarschijnlijkheid p, voorkomt co-adaptatie en overfitting."
      }
    },
    {
      question: {
        en: "What causes vanishing gradients in deep networks?",
        es: "¿Qué causa gradientes que desaparecen en redes profundas?",
        de: "Was verursacht verschwindende Gradienten in tiefen Netzen?",
        nl: "Wat veroorzaakt verdwijnende gradiënten in diepe netwerken?"
      },
      options: [
        {
          en: "Repeated multiplication of small derivatives",
          es: "Multiplicación repetida de derivadas pequeñas",
          de: "Wiederholte Multiplikation kleiner Ableitungen",
          nl: "Herhaalde vermenigvuldiging van kleine afgeleiden"
        },
        {
          en: "Large learning rates",
          es: "Tasas de aprendizaje grandes",
          de: "Große Lernraten",
          nl: "Grote leersnelheden"
        },
        {
          en: "Too many parameters",
          es: "Demasiados parámetros",
          de: "Zu viele Parameter",
          nl: "Te veel parameters"
        },
        {
          en: "Insufficient data",
          es: "Datos insuficientes",
          de: "Unzureichende Daten",
          nl: "Onvoldoende data"
        }
      ],
      correct: 0,
      explanation: {
        en: "Vanishing gradients occur when small derivatives (like sigmoid's) are multiplied many times during backpropagation, causing gradients to approach zero in early layers.",
        es: "Los gradientes que desaparecen ocurren cuando derivadas pequeñas se multiplican muchas veces durante retropropagación.",
        de: "Verschwindende Gradienten entstehen wenn kleine Ableitungen vielfach multipliziert werden bei Rückwärtspropagierung.",
        nl: "Verdwijnende gradiënten ontstaan wanneer kleine afgeleiden vaak vermenigvuldigd worden tijdens backpropagatie."
      }
    },
    {
      question: {
        en: "What is transfer learning?",
        es: "¿Qué es el aprendizaje por transferencia?",
        de: "Was ist Transfer Learning?",
        nl: "Wat is transfer learning?"
      },
      options: [
        {
          en: "Using pre-trained models for new tasks",
          es: "Usar modelos pre-entrenados para nuevas tareas",
          de: "Vortrainierte Modelle für neue Aufgaben nutzen",
          nl: "Voorgetrainde modellen gebruiken voor nieuwe taken"
        },
        {
          en: "Transferring data between models",
          es: "Transferir datos entre modelos",
          de: "Daten zwischen Modellen übertragen",
          nl: "Data overdragen tussen modellen"
        },
        {
          en: "Learning to transfer",
          es: "Aprender a transferir",
          de: "Lernen zu übertragen",
          nl: "Leren overdragen"
        },
        {
          en: "Moving models to new hardware",
          es: "Mover modelos a nuevo hardware",
          de: "Modelle auf neue Hardware verschieben",
          nl: "Modellen naar nieuwe hardware verplaatsen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Transfer learning leverages knowledge from models pre-trained on large datasets by fine-tuning them for specific tasks, reducing training time and data requirements.",
        es: "El aprendizaje por transferencia aprovecha conocimiento de modelos pre-entrenados en grandes conjuntos de datos para tareas específicas.",
        de: "Transfer Learning nutzt Wissen aus auf großen Datensätzen vortrainierten Modellen für spezifische Aufgaben.",
        nl: "Transfer learning benut kennis uit voorgetrainde modellen op grote datasets voor specifieke taken."
      }
    },
    {
      question: {
        en: "What is batch normalization?",
        es: "¿Qué es la normalización por lotes?",
        de: "Was ist Batch-Normalisierung?",
        nl: "Wat is batch normalisatie?"
      },
      options: [
        {
          en: "Normalizing layer inputs across batch dimension",
          es: "Normalizar entradas de capa a través de dimensión de lote",
          de: "Normalisierung von Schichteingaben über Batch-Dimension",
          nl: "Normaliseren van laaginputs over batch-dimensie"
        },
        {
          en: "Making batches the same size",
          es: "Hacer lotes del mismo tamaño",
          de: "Batches gleich groß machen",
          nl: "Batches even groot maken"
        },
        {
          en: "Normalizing weights",
          es: "Normalizar pesos",
          de: "Gewichte normalisieren",
          nl: "Gewichten normaliseren"
        },
        {
          en: "Batch processing",
          es: "Procesamiento por lotes",
          de: "Batch-Verarbeitung",
          nl: "Batch-verwerking"
        }
      ],
      correct: 0,
      explanation: {
        en: "Batch normalization normalizes inputs to have zero mean and unit variance across the batch dimension, reducing internal covariate shift and enabling higher learning rates.",
        es: "La normalización por lotes normaliza entradas para tener media cero y varianza unitaria, reduciendo cambio de covarianza interno.",
        de: "Batch-Normalisierung normalisiert Eingaben auf Nullmittelwert und Einheitsvarianz, reduziert interne Kovarianzverschiebung.",
        nl: "Batch normalisatie normaliseert inputs naar nul gemiddelde en eenheidsvariantie, vermindert interne covariantieverschuiving."
      }
    },
    {
      question: {
        en: "What is gradient clipping?",
        es: "¿Qué es el recorte de gradientes?",
        de: "Was ist Gradient Clipping?",
        nl: "Wat is gradiënt clipping?"
      },
      options: [
        {
          en: "Limiting gradient magnitude to prevent explosion",
          es: "Limitar magnitud de gradientes para prevenir explosión",
          de: "Gradientengröße begrenzen um Explosion zu verhindern",
          nl: "Gradiëntgrootte beperken om explosie te voorkomen"
        },
        {
          en: "Cutting gradients in half",
          es: "Cortar gradientes por la mitad",
          de: "Gradienten halbieren",
          nl: "Gradiënten halveren"
        },
        {
          en: "Removing gradients",
          es: "Eliminar gradientes",
          de: "Gradienten entfernen",
          nl: "Gradiënten verwijderen"
        },
        {
          en: "Saving gradients",
          es: "Guardar gradientes",
          de: "Gradienten speichern",
          nl: "Gradiënten opslaan"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gradient clipping limits the magnitude of gradients during backpropagation to a maximum value, preventing exploding gradients and stabilizing training in RNNs.",
        es: "El recorte de gradientes limita la magnitud durante retropropagación a un valor máximo, previniendo explosión y estabilizando RNNs.",
        de: "Gradient Clipping begrenzt die Gradientengröße bei Rückwärtspropagierung auf einen Maximalwert, stabilisiert RNN-Training.",
        nl: "Gradiënt clipping beperkt de grootte tijdens backpropagatie tot een maximumwaarde, stabiliseert RNN-training."
      }
    },
    {
      question: {
        en: "What is early stopping?",
        es: "¿Qué es la detención temprana?",
        de: "Was ist Early Stopping?",
        nl: "Wat is early stopping?"
      },
      options: [
        {
          en: "Stop training when validation error increases",
          es: "Detener entrenamiento cuando error de validación aumenta",
          de: "Training stoppen wenn Validierungsfehler steigt",
          nl: "Training stoppen wanneer validatiefout toeneemt"
        },
        {
          en: "Stop early in the day",
          es: "Detener temprano en el día",
          de: "Früh am Tag stoppen",
          nl: "Vroeg op de dag stoppen"
        },
        {
          en: "Use fewer epochs",
          es: "Usar menos épocas",
          de: "Weniger Epochen nutzen",
          nl: "Minder epochs gebruiken"
        },
        {
          en: "Train quickly",
          es: "Entrenar rápidamente",
          de: "Schnell trainieren",
          nl: "Snel trainen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Early stopping monitors validation performance and stops training when it stops improving or starts degrading, acting as regularization to prevent overfitting.",
        es: "La detención temprana monitorea rendimiento de validación y detiene cuando deja de mejorar, actuando como regularización.",
        de: "Early Stopping überwacht Validierungsleistung und stoppt wenn sie nicht mehr verbessert, wirkt als Regularisierung.",
        nl: "Early stopping monitort validatieprestatie en stopt wanneer deze niet meer verbetert, werkt als regularisatie."
      }
    },
    {
      question: {
        en: "What is weight decay?",
        es: "¿Qué es el weight decay?",
        de: "Was ist Weight Decay?",
        nl: "Wat is weight decay?"
      },
      options: [
        {
          en: "L2 regularization penalty on weights",
          es: "Penalización de regularización L2 en pesos",
          de: "L2-Regularisierungsstrafe auf Gewichten",
          nl: "L2-regularisatiestraf op gewichten"
        },
        {
          en: "Weights getting smaller",
          es: "Pesos haciéndose más pequeños",
          de: "Gewichte werden kleiner",
          nl: "Gewichten worden kleiner"
        },
        {
          en: "Decaying learning rate",
          es: "Tasa de aprendizaje decreciente",
          de: "Abnehmende Lernrate",
          nl: "Afnemende leersnelheid"
        },
        {
          en: "Old weights",
          es: "Pesos viejos",
          de: "Alte Gewichte",
          nl: "Oude gewichten"
        }
      ],
      correct: 0,
      explanation: {
        en: "Weight decay adds an L2 penalty term to the loss function proportional to the square of weights, encouraging smaller weights and preventing overfitting.",
        es: "Weight decay añade término de penalización L2 a la pérdida proporcional al cuadrado de pesos, fomentando pesos menores.",
        de: "Weight Decay fügt L2-Strafterm zum Verlust proportional zum Quadrat der Gewichte hinzu, fördert kleinere Gewichte.",
        nl: "Weight decay voegt L2-strafterm toe aan verlies proportioneel aan kwadraat van gewichten, moedigt kleinere gewichten aan."
      }
    },
    {
      question: {
        en: "What is curriculum learning?",
        es: "¿Qué es el aprendizaje curricular?",
        de: "Was ist Curriculum Learning?",
        nl: "Wat is curriculum learning?"
      },
      options: [
        {
          en: "Training on progressively harder examples",
          es: "Entrenar con ejemplos progresivamente más difíciles",
          de: "Training mit progressiv schwierigeren Beispielen",
          nl: "Trainen op progressief moeilijkere voorbeelden"
        },
        {
          en: "Learning from curriculum",
          es: "Aprender del currículo",
          de: "Aus dem Lehrplan lernen",
          nl: "Leren uit curriculum"
        },
        {
          en: "School-based learning",
          es: "Aprendizaje escolar",
          de: "Schulbasiertes Lernen",
          nl: "School-gebaseerd leren"
        },
        {
          en: "Structured learning",
          es: "Aprendizaje estructurado",
          de: "Strukturiertes Lernen",
          nl: "Gestructureerd leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Curriculum learning presents training examples in order of increasing difficulty, mimicking human learning patterns for potentially faster convergence and better performance.",
        es: "El aprendizaje curricular presenta ejemplos en orden de dificultad creciente, imitando patrones humanos para mejor convergencia.",
        de: "Curriculum Learning präsentiert Trainingsbeispiele in steigender Schwierigkeit, ahmt menschliche Lernmuster nach.",
        nl: "Curriculum learning presenteert voorbeelden in oplopende moeilijkheid, bootst menselijke leerpatronen na voor betere convergentie."
      }
    },
    {
      question: {
        en: "What is the purpose of Layer Normalization compared to Batch Normalization?",
        es: "¿Cuál es el propósito de Layer Normalization comparado con Batch Normalization?",
        de: "Was ist der Zweck von Layer Normalization im Vergleich zu Batch Normalization?",
        nl: "Wat is het doel van Layer Normalization vergeleken met Batch Normalization?"
      },
      options: [
        {
          en: "Works better for sequence models and small batches",
          es: "Funciona mejor para modelos de secuencia y lotes pequeños",
          de: "Funktioniert besser für Sequenzmodelle und kleine Batches",
          nl: "Werkt beter voor sequentiemodellen en kleine batches"
        },
        {
          en: "Requires less computation",
          es: "Requiere menos computación",
          de: "Benötigt weniger Berechnung",
          nl: "Vereist minder berekening"
        },
        {
          en: "Increases model size",
          es: "Aumenta el tamaño del modelo",
          de: "Erhöht die Modellgröße",
          nl: "Vergroot de modelgrootte"
        },
        {
          en: "Only works with CNNs",
          es: "Solo funciona con CNN",
          de: "Funktioniert nur mit CNNs",
          nl: "Werkt alleen met CNN's"
        }
      ],
      correct: 0,
      explanation: {
        en: "Layer Normalization normalizes across features instead of batch dimension, making it ideal for RNNs and Transformers where batch statistics may be unreliable.",
        es: "Layer Normalization normaliza a través de características en lugar de dimensión del lote, ideal para RNN y Transformers.",
        de: "Layer Normalization normalisiert über Features statt Batch-Dimension, ideal für RNNs und Transformers.",
        nl: "Layer Normalization normaliseert over features in plaats van batch-dimensie, ideaal voor RNN's en Transformers."
      }
    },
    {
      question: {
        en: "What is the purpose of the Gumbel-Max trick in discrete sampling?",
        es: "¿Cuál es el propósito del truco Gumbel-Max en muestreo discreto?",
        de: "Was ist der Zweck des Gumbel-Max-Tricks beim diskreten Sampling?",
        nl: "Wat is het doel van de Gumbel-Max truc bij discreet samplen?"
      },
      options: [
        {
          en: "Enables differentiable sampling from categorical distributions",
          es: "Permite muestreo diferenciable de distribuciones categóricas",
          de: "Ermöglicht differenzierbares Sampling aus kategorialen Verteilungen",
          nl: "Maakt differentieerbaar samplen uit categorische verdelingen mogelijk"
        },
        {
          en: "Reduces sampling variance",
          es: "Reduce la varianza del muestreo",
          de: "Reduziert die Sampling-Varianz",
          nl: "Vermindert sampling-variantie"
        },
        {
          en: "Increases sampling speed",
          es: "Aumenta la velocidad de muestreo",
          de: "Erhöht die Sampling-Geschwindigkeit",
          nl: "Verhoogt de sampling-snelheid"
        },
        {
          en: "Improves accuracy",
          es: "Mejora la precisión",
          de: "Verbessert die Genauigkeit",
          nl: "Verbetert de nauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Gumbel-Max trick allows sampling from categorical distributions in a differentiable way using reparameterization, crucial for training models with discrete variables.",
        es: "El truco Gumbel-Max permite muestreo diferenciable de distribuciones categóricas usando reparametrización para variables discretas.",
        de: "Der Gumbel-Max-Trick ermöglicht differenzierbares Sampling aus kategorialen Verteilungen für diskrete Variablen.",
        nl: "De Gumbel-Max truc maakt differentieerbaar samplen uit categorische verdelingen mogelijk voor discrete variabelen."
      }
    },
    {
      question: {
        en: "What problem does Spectral Normalization address in GANs?",
        es: "¿Qué problema aborda la Normalización Espectral en GANs?",
        de: "Welches Problem löst Spectral Normalization in GANs?",
        nl: "Welk probleem lost Spectral Normalization op in GANs?"
      },
      options: [
        {
          en: "Stabilizes discriminator training by constraining Lipschitz constant",
          es: "Estabiliza el entrenamiento del discriminador restringiendo la constante de Lipschitz",
          de: "Stabilisiert Diskriminator-Training durch Einschränkung der Lipschitz-Konstante",
          nl: "Stabiliseert discriminator-training door Lipschitz-constante te beperken"
        },
        {
          en: "Speeds up convergence",
          es: "Acelera la convergencia",
          de: "Beschleunigt Konvergenz",
          nl: "Versnelt convergentie"
        },
        {
          en: "Reduces model size",
          es: "Reduce el tamaño del modelo",
          de: "Reduziert Modellgröße",
          nl: "Vermindert modelgrootte"
        },
        {
          en: "Improves image quality",
          es: "Mejora la calidad de imagen",
          de: "Verbessert Bildqualität",
          nl: "Verbetert beeldkwaliteit"
        }
      ],
      correct: 0,
      explanation: {
        en: "Spectral Normalization constrains the spectral norm of weight matrices, ensuring the discriminator is 1-Lipschitz and stabilizing GAN training.",
        es: "La Normalización Espectral restringe la norma espectral de matrices de pesos, asegurando que el discriminador sea 1-Lipschitz.",
        de: "Spectral Normalization beschränkt die Spektralnorm von Gewichtsmatrizen, stellt 1-Lipschitz-Diskriminator sicher.",
        nl: "Spectral Normalization beperkt de spectrale norm van gewichtsmatrices, zorgt voor 1-Lipschitz discriminator."
      }
    },
    {
      question: {
        en: "What is knowledge distillation in neural networks?",
        es: "¿Qué es la destilación de conocimiento en redes neuronales?",
        de: "Was ist Knowledge Distillation in neuronalen Netzen?",
        nl: "Wat is knowledge distillation in neurale netwerken?"
      },
      options: [
        {
          en: "Training smaller models to mimic larger teacher models",
          es: "Entrenar modelos más pequeños para imitar modelos maestros más grandes",
          de: "Kleinere Modelle trainieren um größere Lehrermodelle nachzuahmen",
          nl: "Kleinere modellen trainen om grotere teacher-modellen na te bootsen"
        },
        {
          en: "Extracting features from data",
          es: "Extraer características de datos",
          de: "Features aus Daten extrahieren",
          nl: "Features extraheren uit data"
        },
        {
          en: "Removing unnecessary weights",
          es: "Eliminar pesos innecesarios",
          de: "Unnötige Gewichte entfernen",
          nl: "Onnodige gewichten verwijderen"
        },
        {
          en: "Combining multiple models",
          es: "Combinar múltiples modelos",
          de: "Mehrere Modelle kombinieren",
          nl: "Meerdere modellen combineren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Knowledge distillation trains a smaller student model to match the soft outputs of a larger teacher model, transferring knowledge while reducing model size.",
        es: "La destilación de conocimiento entrena un modelo estudiante para igualar las salidas suaves de un modelo maestro más grande.",
        de: "Knowledge Distillation trainiert ein kleineres Schülermodell um die weichen Ausgaben eines Lehrermodells nachzubilden.",
        nl: "Knowledge distillation traint een kleiner studentmodel om de zachte outputs van een groter teachermodel te matchen."
      }
    }
  ]
};