module.exports = {
  questions: [
    {
      question: {
        en: "What is the lottery ticket hypothesis in neural network pruning?",
        es: "¿Qué es la hipótesis del billete de lotería en poda de redes neuronales?",
        de: "Was ist die Lotterielos-Hypothese beim Pruning neuronaler Netze?",
        nl: "Wat is de loterijticket-hypothese bij neural network pruning?"
      },
      options: [
        {
          en: "Dense networks contain sparse subnetworks that train to comparable accuracy",
          es: "Redes densas contienen subredes dispersas que entrenan con precisión comparable",
          de: "Dichte Netze enthalten spärliche Teilnetze mit vergleichbarer Genauigkeit",
          nl: "Dichte netwerken bevatten sparse subnetwerken met vergelijkbare nauwkeurigheid"
        },
        {
          en: "Random initialization determines final model performance",
          es: "La inicialización aleatoria determina el rendimiento final del modelo",
          de: "Zufällige Initialisierung bestimmt die finale Modellleistung",
          nl: "Willekeurige initialisatie bepaalt uiteindelijke modelprestaties"
        },
        {
          en: "Pruning always improves model generalization",
          es: "La poda siempre mejora la generalización del modelo",
          de: "Pruning verbessert immer die Modellgeneralisierung",
          nl: "Pruning verbetert altijd modelgeneralisatie"
        },
        {
          en: "Network depth is more important than width",
          es: "La profundidad de la red es más importante que el ancho",
          de: "Netzwerktiefe ist wichtiger als Breite",
          nl: "Netwerkdiepte is belangrijker dan breedte"
        }
      ],
      correct: 0,
      explanation: {
        en: "The lottery ticket hypothesis states that dense, randomly-initialized networks contain sparse subnetworks ('winning tickets') that, when trained in isolation, reach comparable test accuracy.",
        es: "La hipótesis del billete de lotería establece que las redes densas contienen subredes dispersas que alcanzan precisión comparable cuando se entrenan aisladas.",
        de: "Die Lotterielos-Hypothese besagt, dass dichte Netze spärliche Teilnetze enthalten, die isoliert trainiert vergleichbare Genauigkeit erreichen.",
        nl: "De loterijticket-hypothese stelt dat dichte netwerken sparse subnetwerken bevatten die geïsoleerd getraind vergelijkbare nauwkeurigheid bereiken."
      }
    },
    {
      question: {
        en: "What is the role of the Evidence Lower Bound (ELBO) in variational autoencoders?",
        es: "¿Cuál es el rol del límite inferior de evidencia (ELBO) en autoencoders variacionales?",
        de: "Was ist die Rolle der Evidence Lower Bound (ELBO) in VAEs?",
        nl: "Wat is de rol van de Evidence Lower Bound (ELBO) in VAEs?"
      },
      options: [
        {
          en: "Provides tractable lower bound for log-likelihood optimization",
          es: "Proporciona límite inferior manejable para optimización de log-verosimilitud",
          de: "Bietet handhabbaren unteren Grenzwert für Log-Likelihood-Optimierung",
          nl: "Biedt hanteerbare ondergrens voor log-likelihood optimalisatie"
        },
        {
          en: "Measures reconstruction error only",
          es: "Mide solo el error de reconstrucción",
          de: "Misst nur den Rekonstruktionsfehler",
          nl: "Meet alleen reconstructiefout"
        },
        {
          en: "Controls latent space dimensionality",
          es: "Controla la dimensionalidad del espacio latente",
          de: "Kontrolliert die Dimensionalität des latenten Raums",
          nl: "Controleert latente ruimte dimensionaliteit"
        },
        {
          en: "Prevents mode collapse in generation",
          es: "Previene el colapso de modos en generación",
          de: "Verhindert Moduskollaps bei der Generierung",
          nl: "Voorkomt mode collapse bij generatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "ELBO provides a tractable lower bound for the intractable log-likelihood in VAEs, combining reconstruction loss and KL divergence between prior and posterior distributions.",
        es: "ELBO proporciona un límite inferior manejable para la log-verosimilitud intratable en VAEs, combinando pérdida de reconstrucción y divergencia KL.",
        de: "ELBO bietet eine handhabbare untere Schranke für die intraktable Log-Likelihood in VAEs, kombiniert Rekonstruktionsverlust und KL-Divergenz.",
        nl: "ELBO biedt een hanteerbare ondergrens voor de intractable log-likelihood in VAEs, combineert reconstructieverlies en KL-divergentie."
      }
    },
    {
      question: {
        en: "What is Gumbel-Softmax used for in neural networks?",
        es: "¿Para qué se usa Gumbel-Softmax en redes neuronales?",
        de: "Wofür wird Gumbel-Softmax in neuronalen Netzen verwendet?",
        nl: "Waarvoor wordt Gumbel-Softmax gebruikt in neurale netwerken?"
      },
      options: [
        {
          en: "Differentiable sampling from categorical distributions",
          es: "Muestreo diferenciable de distribuciones categóricas",
          de: "Differenzierbares Sampling aus kategorialen Verteilungen",
          nl: "Differentieerbare sampling uit categorische distributies"
        },
        {
          en: "Regularization of weight matrices",
          es: "Regularización de matrices de pesos",
          de: "Regularisierung von Gewichtsmatrizen",
          nl: "Regularisatie van gewichtsmatrices"
        },
        {
          en: "Activation function for deep networks",
          es: "Función de activación para redes profundas",
          de: "Aktivierungsfunktion für tiefe Netze",
          nl: "Activatiefunctie voor diepe netwerken"
        },
        {
          en: "Optimization algorithm for convex problems",
          es: "Algoritmo de optimización para problemas convexos",
          de: "Optimierungsalgorithmus für konvexe Probleme",
          nl: "Optimalisatie-algoritme voor convexe problemen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gumbel-Softmax provides a continuous differentiable approximation to categorical distributions, enabling gradient-based optimization through discrete choices in neural networks.",
        es: "Gumbel-Softmax proporciona una aproximación diferenciable continua a distribuciones categóricas, permitiendo optimización basada en gradientes.",
        de: "Gumbel-Softmax bietet eine kontinuierliche differenzierbare Approximation kategorialer Verteilungen für gradientenbasierte Optimierung.",
        nl: "Gumbel-Softmax biedt een continue differentieerbare benadering van categorische distributies voor gradiënt-gebaseerde optimalisatie."
      }
    },
    {
      question: {
        en: "What is the Hessian-vector product used for in second-order optimization?",
        es: "¿Para qué se usa el producto Hessiano-vector en optimización de segundo orden?",
        de: "Wofür wird das Hesse-Vektor-Produkt in Second-Order-Optimierung verwendet?",
        nl: "Waarvoor wordt het Hessian-vector product gebruikt in tweede-orde optimalisatie?"
      },
      options: [
        {
          en: "Efficient computation without forming full Hessian matrix",
          es: "Cálculo eficiente sin formar matriz Hessiana completa",
          de: "Effiziente Berechnung ohne vollständige Hesse-Matrix",
          nl: "Efficiënte berekening zonder volledige Hessian matrix"
        },
        {
          en: "Computing exact eigenvalues of Hessian",
          es: "Calcular valores propios exactos del Hessiano",
          de: "Berechnung exakter Eigenwerte der Hesse-Matrix",
          nl: "Exacte eigenwaarden van Hessian berekenen"
        },
        {
          en: "Gradient clipping in deep networks",
          es: "Recorte de gradientes en redes profundas",
          de: "Gradientenbeschneidung in tiefen Netzen",
          nl: "Gradiënt clipping in diepe netwerken"
        },
        {
          en: "Batch normalization computation",
          es: "Cálculo de normalización por lotes",
          de: "Batch-Normalisierung Berechnung",
          nl: "Batch normalisatie berekening"
        }
      ],
      correct: 0,
      explanation: {
        en: "Hessian-vector products enable efficient second-order optimization methods like truncated Newton without explicitly computing or storing the full Hessian matrix.",
        es: "Los productos Hessiano-vector permiten métodos de optimización de segundo orden eficientes sin calcular explícitamente la matriz Hessiana completa.",
        de: "Hesse-Vektor-Produkte ermöglichen effiziente Second-Order-Optimierung ohne explizite Berechnung der vollständigen Hesse-Matrix.",
        nl: "Hessian-vector producten maken efficiënte tweede-orde optimalisatie mogelijk zonder expliciete berekening van de volledige Hessian matrix."
      }
    },
    {
      question: {
        en: "What is Neural Tangent Kernel (NTK) theory's main insight?",
        es: "¿Cuál es la principal idea de la teoría del kernel tangente neuronal (NTK)?",
        de: "Was ist die Haupterkenntnis der Neural Tangent Kernel (NTK) Theorie?",
        nl: "Wat is het hoofdinzicht van Neural Tangent Kernel (NTK) theorie?"
      },
      options: [
        {
          en: "Infinite-width networks behave like linear models during training",
          es: "Redes de ancho infinito se comportan como modelos lineales durante entrenamiento",
          de: "Unendlich breite Netze verhalten sich wie lineare Modelle beim Training",
          nl: "Oneindig brede netwerken gedragen zich als lineaire modellen tijdens training"
        },
        {
          en: "Deep networks always outperform shallow ones",
          es: "Redes profundas siempre superan a las superficiales",
          de: "Tiefe Netze übertreffen immer flache",
          nl: "Diepe netwerken presteren altijd beter dan ondiepe"
        },
        {
          en: "Kernel methods are superior to neural networks",
          es: "Los métodos kernel son superiores a las redes neuronales",
          de: "Kernel-Methoden sind neuronalen Netzen überlegen",
          nl: "Kernel methoden zijn superieur aan neurale netwerken"
        },
        {
          en: "Width is more important than depth",
          es: "El ancho es más importante que la profundidad",
          de: "Breite ist wichtiger als Tiefe",
          nl: "Breedte is belangrijker dan diepte"
        }
      ],
      correct: 0,
      explanation: {
        en: "NTK theory shows that infinitely wide neural networks converge to a kernel regime where they behave like linear models with a fixed kernel during gradient descent training.",
        es: "La teoría NTK muestra que redes neuronales infinitamente anchas convergen a un régimen kernel donde se comportan como modelos lineales.",
        de: "NTK-Theorie zeigt, dass unendlich breite neuronale Netze zu einem Kernel-Regime konvergieren und sich wie lineare Modelle verhalten.",
        nl: "NTK-theorie toont dat oneindig brede neurale netwerken convergeren naar een kernel-regime waar ze zich als lineaire modellen gedragen."
      }
    },
    {
      question: {
        en: "What is the purpose of Spectral Normalization in GANs?",
        es: "¿Cuál es el propósito de la normalización espectral en GANs?",
        de: "Was ist der Zweck der Spektralnormalisierung in GANs?",
        nl: "Wat is het doel van Spectral Normalization in GANs?"
      },
      options: [
        {
          en: "Constrains Lipschitz constant of discriminator",
          es: "Restringe la constante de Lipschitz del discriminador",
          de: "Beschränkt Lipschitz-Konstante des Diskriminators",
          nl: "Beperkt Lipschitz-constante van discriminator"
        },
        {
          en: "Speeds up generator training",
          es: "Acelera el entrenamiento del generador",
          de: "Beschleunigt Generator-Training",
          nl: "Versnelt generator training"
        },
        {
          en: "Reduces memory usage",
          es: "Reduce el uso de memoria",
          de: "Reduziert Speicherverbrauch",
          nl: "Vermindert geheugengebruik"
        },
        {
          en: "Improves image resolution",
          es: "Mejora la resolución de imagen",
          de: "Verbessert Bildauflösung",
          nl: "Verbetert beeldresolutie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Spectral Normalization constrains the Lipschitz constant of the discriminator by normalizing weight matrices by their spectral norm, stabilizing GAN training.",
        es: "La normalización espectral restringe la constante de Lipschitz del discriminador normalizando matrices de pesos por su norma espectral.",
        de: "Spektralnormalisierung beschränkt die Lipschitz-Konstante des Diskriminators durch Normalisierung der Gewichtsmatrizen.",
        nl: "Spectral Normalization beperkt de Lipschitz-constante van de discriminator door gewichtsmatrices te normaliseren."
      }
    },
    {
      question: {
        en: "What is contrastive predictive coding (CPC) designed to learn?",
        es: "¿Qué está diseñado para aprender el código predictivo contrastivo (CPC)?",
        de: "Was soll Contrastive Predictive Coding (CPC) lernen?",
        nl: "Wat is contrastive predictive coding (CPC) ontworpen om te leren?"
      },
      options: [
        {
          en: "Representations by predicting future in latent space",
          es: "Representaciones prediciendo el futuro en espacio latente",
          de: "Repräsentationen durch Vorhersage der Zukunft im latenten Raum",
          nl: "Representaties door toekomst te voorspellen in latente ruimte"
        },
        {
          en: "Optimal hyperparameters automatically",
          es: "Hiperparámetros óptimos automáticamente",
          de: "Optimale Hyperparameter automatisch",
          nl: "Optimale hyperparameters automatisch"
        },
        {
          en: "Causal relationships in data",
          es: "Relaciones causales en datos",
          de: "Kausale Beziehungen in Daten",
          nl: "Causale relaties in data"
        },
        {
          en: "Minimum description length",
          es: "Longitud mínima de descripción",
          de: "Minimale Beschreibungslänge",
          nl: "Minimale beschrijvingslengte"
        }
      ],
      correct: 0,
      explanation: {
        en: "CPC learns representations by maximizing mutual information between different parts of high-dimensional data, predicting future representations in latent space.",
        es: "CPC aprende representaciones maximizando información mutua entre diferentes partes de datos, prediciendo representaciones futuras en espacio latente.",
        de: "CPC lernt Repräsentationen durch Maximierung der gegenseitigen Information, indem zukünftige Repräsentationen im latenten Raum vorhergesagt werden.",
        nl: "CPC leert representaties door wederzijdse informatie te maximaliseren, door toekomstige representaties in latente ruimte te voorspellen."
      }
    },
    {
      question: {
        en: "What is the Information Bottleneck principle in deep learning?",
        es: "¿Qué es el principio del cuello de botella de información en deep learning?",
        de: "Was ist das Information Bottleneck Prinzip im Deep Learning?",
        nl: "Wat is het Information Bottleneck principe in deep learning?"
      },
      options: [
        {
          en: "Networks compress input while preserving task-relevant information",
          es: "Redes comprimen entrada preservando información relevante para la tarea",
          de: "Netze komprimieren Eingabe und bewahren aufgabenrelevante Information",
          nl: "Netwerken comprimeren input terwijl taakrelevante informatie behouden blijft"
        },
        {
          en: "Information flow is restricted by activation functions",
          es: "El flujo de información está restringido por funciones de activación",
          de: "Informationsfluss wird durch Aktivierungsfunktionen beschränkt",
          nl: "Informatiestroom wordt beperkt door activatiefuncties"
        },
        {
          en: "Bottleneck layers improve generalization",
          es: "Las capas cuello de botella mejoran la generalización",
          de: "Bottleneck-Schichten verbessern Generalisierung",
          nl: "Bottleneck-lagen verbeteren generalisatie"
        },
        {
          en: "Data compression reduces training time",
          es: "La compresión de datos reduce el tiempo de entrenamiento",
          de: "Datenkompression reduziert Trainingszeit",
          nl: "Datacompressie vermindert trainingstijd"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Information Bottleneck principle suggests deep networks learn by compressing input information while preserving information relevant to the output task.",
        es: "El principio del cuello de botella de información sugiere que las redes profundas aprenden comprimiendo información de entrada preservando lo relevante.",
        de: "Das Information Bottleneck Prinzip besagt, dass tiefe Netze durch Kompression der Eingabe bei Erhaltung aufgabenrelevanter Information lernen.",
        nl: "Het Information Bottleneck principe suggereert dat diepe netwerken leren door input te comprimeren terwijl taakrelevante informatie behouden blijft."
      }
    },
    {
      question: {
        en: "What is double descent phenomenon in modern deep learning?",
        es: "¿Qué es el fenómeno de doble descenso en deep learning moderno?",
        de: "Was ist das Double Descent Phänomen im modernen Deep Learning?",
        nl: "Wat is het double descent fenomeen in modern deep learning?"
      },
      options: [
        {
          en: "Test error decreases, increases, then decreases again with model size",
          es: "Error de prueba disminuye, aumenta, luego disminuye de nuevo con tamaño del modelo",
          de: "Testfehler sinkt, steigt, dann sinkt wieder mit Modellgröße",
          nl: "Testfout daalt, stijgt, dan daalt weer met modelgrootte"
        },
        {
          en: "Training requires two optimization phases",
          es: "El entrenamiento requiere dos fases de optimización",
          de: "Training erfordert zwei Optimierungsphasen",
          nl: "Training vereist twee optimalisatiefases"
        },
        {
          en: "Gradients descend twice per iteration",
          es: "Los gradientes descienden dos veces por iteración",
          de: "Gradienten steigen zweimal pro Iteration ab",
          nl: "Gradiënten dalen twee keer per iteratie"
        },
        {
          en: "Loss function has two local minima",
          es: "La función de pérdida tiene dos mínimos locales",
          de: "Verlustfunktion hat zwei lokale Minima",
          nl: "Verliesfunctie heeft twee lokale minima"
        }
      ],
      correct: 0,
      explanation: {
        en: "Double descent shows test error first follows classical U-curve, then decreases again in overparameterized regime, challenging traditional bias-variance tradeoff.",
        es: "El doble descenso muestra que el error de prueba sigue la curva U clásica, luego disminuye de nuevo en régimen sobreparametrizado.",
        de: "Double Descent zeigt, dass der Testfehler erst der klassischen U-Kurve folgt, dann im überparametrisierten Bereich wieder sinkt.",
        nl: "Double descent toont dat testfout eerst klassieke U-curve volgt, dan weer daalt in overgepar ametriseerd regime."
      }
    },
    {
      question: {
        en: "What is the role of Polyak averaging in optimization?",
        es: "¿Cuál es el rol del promediado de Polyak en optimización?",
        de: "Was ist die Rolle von Polyak-Mittelung in der Optimierung?",
        nl: "Wat is de rol van Polyak averaging in optimalisatie?"
      },
      options: [
        {
          en: "Maintains exponential moving average of parameters for stability",
          es: "Mantiene promedio móvil exponencial de parámetros para estabilidad",
          de: "Hält exponentiellen gleitenden Durchschnitt der Parameter für Stabilität",
          nl: "Houdt exponentieel voortschrijdend gemiddelde van parameters voor stabiliteit"
        },
        {
          en: "Accelerates convergence in convex optimization",
          es: "Acelera convergencia en optimización convexa",
          de: "Beschleunigt Konvergenz in konvexer Optimierung",
          nl: "Versnelt convergentie in convexe optimalisatie"
        },
        {
          en: "Prevents gradient explosion",
          es: "Previene explosión de gradientes",
          de: "Verhindert Gradientenexplosion",
          nl: "Voorkomt gradiënt explosie"
        },
        {
          en: "Reduces memory consumption",
          es: "Reduce consumo de memoria",
          de: "Reduziert Speicherverbrauch",
          nl: "Vermindert geheugengebruik"
        }
      ],
      correct: 0,
      explanation: {
        en: "Polyak averaging (EMA) maintains an exponential moving average of parameters during training, often yielding more stable models with better generalization.",
        es: "El promediado de Polyak (EMA) mantiene un promedio móvil exponencial de parámetros durante entrenamiento, dando modelos más estables.",
        de: "Polyak-Mittelung (EMA) hält einen exponentiellen gleitenden Durchschnitt der Parameter, was stabilere Modelle ergibt.",
        nl: "Polyak averaging (EMA) houdt een exponentieel voortschrijdend gemiddelde van parameters, wat stabielere modellen oplevert."
      }
    },
    {
      question: {
        en: "What is learned in Model-Agnostic Meta-Learning (MAML)?",
        es: "¿Qué se aprende en Meta-Aprendizaje Agnóstico al Modelo (MAML)?",
        de: "Was wird in Model-Agnostic Meta-Learning (MAML) gelernt?",
        nl: "Wat wordt geleerd in Model-Agnostic Meta-Learning (MAML)?"
      },
      options: [
        {
          en: "Initialization that enables fast adaptation to new tasks",
          es: "Inicialización que permite adaptación rápida a nuevas tareas",
          de: "Initialisierung die schnelle Anpassung an neue Aufgaben ermöglicht",
          nl: "Initialisatie die snelle adaptatie aan nieuwe taken mogelijk maakt"
        },
        {
          en: "Optimal architecture for all tasks",
          es: "Arquitectura óptima para todas las tareas",
          de: "Optimale Architektur für alle Aufgaben",
          nl: "Optimale architectuur voor alle taken"
        },
        {
          en: "Feature extractors for transfer learning",
          es: "Extractores de características para transfer learning",
          de: "Feature-Extraktoren für Transfer Learning",
          nl: "Feature extractors voor transfer learning"
        },
        {
          en: "Task-specific hyperparameters",
          es: "Hiperparámetros específicos de tarea",
          de: "Aufgabenspezifische Hyperparameter",
          nl: "Taakspecifieke hyperparameters"
        }
      ],
      correct: 0,
      explanation: {
        en: "MAML learns model initialization parameters that can be quickly fine-tuned with few gradient steps to adapt to new tasks with limited data.",
        es: "MAML aprende parámetros de inicialización que pueden ajustarse rápidamente con pocos pasos de gradiente para adaptarse a nuevas tareas.",
        de: "MAML lernt Initialisierungsparameter, die mit wenigen Gradientenschritten schnell an neue Aufgaben angepasst werden können.",
        nl: "MAML leert initialisatieparameters die snel kunnen worden verfijnd met weinig gradiëntstappen voor adaptatie aan nieuwe taken."
      }
    },
    {
      question: {
        en: "What is the purpose of gradient checkpointing in training?",
        es: "¿Cuál es el propósito del checkpointing de gradientes en entrenamiento?",
        de: "Was ist der Zweck von Gradient Checkpointing beim Training?",
        nl: "Wat is het doel van gradient checkpointing bij training?"
      },
      options: [
        {
          en: "Trade computation for memory by recomputing activations",
          es: "Intercambiar cómputo por memoria recalculando activaciones",
          de: "Tauscht Berechnung gegen Speicher durch Neuberechnung von Aktivierungen",
          nl: "Ruilt berekening voor geheugen door activaties opnieuw te berekenen"
        },
        {
          en: "Save model checkpoints during training",
          es: "Guardar checkpoints del modelo durante entrenamiento",
          de: "Modell-Checkpoints während des Trainings speichern",
          nl: "Model checkpoints opslaan tijdens training"
        },
        {
          en: "Verify gradient correctness",
          es: "Verificar corrección de gradientes",
          de: "Gradienten-Korrektheit überprüfen",
          nl: "Gradiënt correctheid verifiëren"
        },
        {
          en: "Prevent gradient explosion",
          es: "Prevenir explosión de gradientes",
          de: "Gradientenexplosion verhindern",
          nl: "Gradiënt explosie voorkomen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gradient checkpointing reduces memory usage by not storing all activations, instead recomputing them during backpropagation, trading computation time for memory.",
        es: "El checkpointing de gradientes reduce uso de memoria no almacenando todas las activaciones, recalculándolas durante retropropagación.",
        de: "Gradient Checkpointing reduziert Speicherverbrauch durch Neuberechnung von Aktivierungen während Backpropagation statt Speicherung.",
        nl: "Gradient checkpointing vermindert geheugengebruik door activaties opnieuw te berekenen tijdens backpropagation in plaats van opslag."
      }
    },
    {
      question: {
        en: "What is the key innovation in Reformer architecture?",
        es: "¿Cuál es la innovación clave en la arquitectura Reformer?",
        de: "Was ist die Schlüsselinnovation in der Reformer-Architektur?",
        nl: "Wat is de belangrijkste innovatie in Reformer architectuur?"
      },
      options: [
        {
          en: "LSH attention and reversible layers for efficiency",
          es: "Atención LSH y capas reversibles para eficiencia",
          de: "LSH-Attention und reversible Schichten für Effizienz",
          nl: "LSH-aandacht en omkeerbare lagen voor efficiëntie"
        },
        {
          en: "Deeper networks with skip connections",
          es: "Redes más profundas con conexiones de salto",
          de: "Tiefere Netze mit Skip-Verbindungen",
          nl: "Diepere netwerken met skip-verbindingen"
        },
        {
          en: "Improved positional encodings",
          es: "Codificaciones posicionales mejoradas",
          de: "Verbesserte Positionskodierungen",
          nl: "Verbeterde positionele coderingen"
        },
        {
          en: "Better initialization strategies",
          es: "Mejores estrategias de inicialización",
          de: "Bessere Initialisierungsstrategien",
          nl: "Betere initialisatiestrategieën"
        }
      ],
      correct: 0,
      explanation: {
        en: "Reformer uses locality-sensitive hashing (LSH) for efficient attention and reversible layers to reduce memory usage, enabling training of much longer sequences.",
        es: "Reformer usa hashing sensible a localidad (LSH) para atención eficiente y capas reversibles para reducir uso de memoria.",
        de: "Reformer nutzt Locality-Sensitive Hashing (LSH) für effiziente Attention und reversible Schichten zur Speicherreduktion.",
        nl: "Reformer gebruikt locality-sensitive hashing (LSH) voor efficiënte aandacht en omkeerbare lagen voor geheugenreductie."
      }
    },
    {
      question: {
        en: "What is mixup data augmentation's mathematical operation?",
        es: "¿Cuál es la operación matemática del aumento de datos mixup?",
        de: "Was ist die mathematische Operation der Mixup-Datenaugmentierung?",
        nl: "Wat is de wiskundige operatie van mixup data-augmentatie?"
      },
      options: [
        {
          en: "Linear interpolation between training examples",
          es: "Interpolación lineal entre ejemplos de entrenamiento",
          de: "Lineare Interpolation zwischen Trainingsbeispielen",
          nl: "Lineaire interpolatie tussen trainingsvoorbeelden"
        },
        {
          en: "Random cropping and rotation",
          es: "Recorte y rotación aleatoria",
          de: "Zufälliges Zuschneiden und Rotation",
          nl: "Willekeurig bijsnijden en rotatie"
        },
        {
          en: "Gaussian noise addition",
          es: "Adición de ruido gaussiano",
          de: "Gaußsches Rauschen hinzufügen",
          nl: "Gaussische ruis toevoeging"
        },
        {
          en: "Feature space transformation",
          es: "Transformación del espacio de características",
          de: "Feature-Raum-Transformation",
          nl: "Feature-ruimte transformatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Mixup creates virtual training examples through linear interpolation: x̃ = λx_i + (1-λ)x_j, where λ ~ Beta(α, α), improving generalization and robustness.",
        es: "Mixup crea ejemplos virtuales mediante interpolación lineal: x̃ = λx_i + (1-λ)x_j, donde λ ~ Beta(α, α), mejorando generalización.",
        de: "Mixup erzeugt virtuelle Trainingsbeispiele durch lineare Interpolation: x̃ = λx_i + (1-λ)x_j, verbessert Generalisierung.",
        nl: "Mixup creëert virtuele trainingsvoorbeelden via lineaire interpolatie: x̃ = λx_i + (1-λ)x_j, verbetert generalisatie."
      }
    },
    {
      question: {
        en: "What distinguishes Neural ODEs from standard neural networks?",
        es: "¿Qué distingue las ODEs neuronales de las redes neuronales estándar?",
        de: "Was unterscheidet Neural ODEs von Standard-Neuronalen Netzen?",
        nl: "Wat onderscheidt Neural ODEs van standaard neurale netwerken?"
      },
      options: [
        {
          en: "Continuous-depth models using ODE solvers for forward pass",
          es: "Modelos de profundidad continua usando solucionadores ODE",
          de: "Kontinuierliche Tiefe mit ODE-Lösern für Forward Pass",
          nl: "Continue-diepte modellen met ODE-solvers voor forward pass"
        },
        {
          en: "Discrete layers with skip connections",
          es: "Capas discretas con conexiones de salto",
          de: "Diskrete Schichten mit Skip-Verbindungen",
          nl: "Discrete lagen met skip-verbindingen"
        },
        {
          en: "Binary weights for efficiency",
          es: "Pesos binarios para eficiencia",
          de: "Binäre Gewichte für Effizienz",
          nl: "Binaire gewichten voor efficiëntie"
        },
        {
          en: "Quantum computing integration",
          es: "Integración de computación cuántica",
          de: "Quantencomputing-Integration",
          nl: "Quantum computing integratie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Neural ODEs parameterize hidden state dynamics as ODEs, using numerical ODE solvers for forward pass, enabling continuous-depth models with constant memory cost.",
        es: "Las ODEs neuronales parametrizan dinámicas de estado oculto como ODEs, usando solucionadores numéricos, permitiendo modelos de profundidad continua.",
        de: "Neural ODEs parametrisieren versteckte Zustandsdynamik als ODEs, nutzen numerische Löser für kontinuierliche Tiefe mit konstantem Speicher.",
        nl: "Neural ODEs parametriseren verborgen toestandsdynamiek als ODEs, gebruiken numerieke solvers voor continue diepte met constant geheugen."
      }
    },
    {
      question: {
        en: "What is the Grokking phenomenon in neural network training?",
        es: "¿Qué es el fenómeno Grokking en entrenamiento de redes neuronales?",
        de: "Was ist das Grokking-Phänomen beim Training neuronaler Netze?",
        nl: "Wat is het Grokking-fenomeen bij neural network training?"
      },
      options: [
        {
          en: "Delayed generalization long after memorization",
          es: "Generalización retrasada mucho después de memorización",
          de: "Verzögerte Generalisierung lange nach Memorierung",
          nl: "Vertraagde generalisatie lang na memorisatie"
        },
        {
          en: "Immediate perfect accuracy on test set",
          es: "Precisión perfecta inmediata en conjunto de prueba",
          de: "Sofortige perfekte Genauigkeit auf Testset",
          nl: "Onmiddellijke perfecte nauwkeurigheid op testset"
        },
        {
          en: "Catastrophic forgetting of previous tasks",
          es: "Olvido catastrófico de tareas previas",
          de: "Katastrophales Vergessen vorheriger Aufgaben",
          nl: "Catastrofaal vergeten van eerdere taken"
        },
        {
          en: "Gradient explosion during training",
          es: "Explosión de gradientes durante entrenamiento",
          de: "Gradientenexplosion während des Trainings",
          nl: "Gradiënt explosie tijdens training"
        }
      ],
      correct: 0,
      explanation: {
        en: "Grokking is when neural networks suddenly achieve good generalization performance long after perfectly memorizing training data, often requiring extended training.",
        es: "Grokking es cuando las redes neuronales logran buena generalización mucho después de memorizar perfectamente los datos de entrenamiento.",
        de: "Grokking ist wenn neuronale Netze plötzlich gute Generalisierung erreichen, lange nachdem sie Trainingsdaten perfekt memoriert haben.",
        nl: "Grokking is wanneer neurale netwerken plotseling goede generalisatie bereiken lang na het perfect memoriseren van trainingsdata."
      }
    },
    {
      question: {
        en: "What is the purpose of Sharpness-Aware Minimization (SAM)?",
        es: "¿Cuál es el propósito de la Minimización Consciente de Nitidez (SAM)?",
        de: "Was ist der Zweck von Sharpness-Aware Minimization (SAM)?",
        nl: "Wat is het doel van Sharpness-Aware Minimization (SAM)?"
      },
      options: [
        {
          en: "Find flat minima for better generalization",
          es: "Encontrar mínimos planos para mejor generalización",
          de: "Flache Minima für bessere Generalisierung finden",
          nl: "Vlakke minima vinden voor betere generalisatie"
        },
        {
          en: "Sharpen image outputs",
          es: "Agudizar salidas de imagen",
          de: "Bildausgaben schärfen",
          nl: "Beelduitvoer verscherpen"
        },
        {
          en: "Accelerate convergence speed",
          es: "Acelerar velocidad de convergencia",
          de: "Konvergenzgeschwindigkeit beschleunigen",
          nl: "Convergentiesnelheid versnellen"
        },
        {
          en: "Reduce computational cost",
          es: "Reducir costo computacional",
          de: "Rechenkosten reduzieren",
          nl: "Rekenkosten verminderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "SAM seeks parameters that lie in neighborhoods with uniformly low loss (flat minima) rather than sharp minima, improving generalization by optimizing both loss value and sharpness.",
        es: "SAM busca parámetros en vecindarios con pérdida uniformemente baja (mínimos planos), mejorando generalización optimizando valor y nitidez.",
        de: "SAM sucht Parameter in Nachbarschaften mit gleichmäßig niedrigem Verlust (flache Minima), verbessert Generalisierung durch Optimierung von Wert und Schärfe.",
        nl: "SAM zoekt parameters in buurten met uniform laag verlies (vlakke minima), verbetert generalisatie door waarde en scherpte te optimaliseren."
      }
    },
    {
      question: {
        en: "What is the Fisher Information Matrix used for in neural networks?",
        es: "¿Para qué se usa la Matriz de Información de Fisher en redes neuronales?",
        de: "Wofür wird die Fisher-Informationsmatrix in neuronalen Netzen verwendet?",
        nl: "Waarvoor wordt de Fisher Information Matrix gebruikt in neurale netwerken?"
      },
      options: [
        {
          en: "Natural gradient descent and pruning importance",
          es: "Descenso de gradiente natural e importancia de poda",
          de: "Natürlicher Gradientenabstieg und Pruning-Wichtigkeit",
          nl: "Natural gradient descent en pruning-belangrijkheid"
        },
        {
          en: "Computing exact Hessian matrix",
          es: "Calcular matriz Hessiana exacta",
          de: "Exakte Hesse-Matrix berechnen",
          nl: "Exacte Hessian matrix berekenen"
        },
        {
          en: "Batch normalization statistics",
          es: "Estadísticas de normalización por lotes",
          de: "Batch-Normalisierung Statistiken",
          nl: "Batch normalisatie statistieken"
        },
        {
          en: "Random weight initialization",
          es: "Inicialización aleatoria de pesos",
          de: "Zufällige Gewichtsinitialisierung",
          nl: "Willekeurige gewichtsinitialisatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Fisher Information Matrix approximates the curvature of loss landscape, enabling natural gradient descent and measuring parameter importance for pruning or regularization.",
        es: "La Matriz de Información de Fisher aproxima la curvatura del paisaje de pérdida, permitiendo descenso de gradiente natural y medición de importancia.",
        de: "Fisher-Informationsmatrix approximiert Krümmung der Verlustlandschaft, ermöglicht natürlichen Gradientenabstieg und Wichtigkeitsmessung.",
        nl: "Fisher Information Matrix benadert kromming van verlieslandschap, maakt natural gradient descent mogelijk en meet parameter-belangrijkheid."
      }
    },
    {
      question: {
        en: "What are Normalizing Flows in generative modeling?",
        es: "¿Qué son los Flujos de Normalización en modelado generativo?",
        de: "Was sind Normalizing Flows in der generativen Modellierung?",
        nl: "Wat zijn Normalizing Flows in generatief modelleren?"
      },
      options: [
        {
          en: "Invertible transformations for exact likelihood computation",
          es: "Transformaciones invertibles para cálculo exacto de verosimilitud",
          de: "Invertierbare Transformationen für exakte Likelihood-Berechnung",
          nl: "Inverteerbare transformaties voor exacte likelihood-berekening"
        },
        {
          en: "Approximate inference methods",
          es: "Métodos de inferencia aproximada",
          de: "Approximative Inferenzmethoden",
          nl: "Benaderende inferentiemethoden"
        },
        {
          en: "Data normalization techniques",
          es: "Técnicas de normalización de datos",
          de: "Datennormalisierungstechniken",
          nl: "Data-normalisatietechnieken"
        },
        {
          en: "Gradient flow optimization",
          es: "Optimización de flujo de gradiente",
          de: "Gradientenfluss-Optimierung",
          nl: "Gradiënt flow optimalisatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Normalizing Flows use sequences of invertible transformations with tractable Jacobians to transform simple distributions into complex ones, enabling exact likelihood computation.",
        es: "Los Flujos de Normalización usan secuencias de transformaciones invertibles con Jacobianos tratables para transformar distribuciones simples en complejas.",
        de: "Normalizing Flows nutzen Sequenzen invertierbarer Transformationen mit handhabbaren Jacobi-Matrizen für exakte Likelihood-Berechnung.",
        nl: "Normalizing Flows gebruiken reeksen inverteerbare transformaties met hanteerbare Jacobianen voor exacte likelihood-berekening."
      }
    },
    {
      question: {
        en: "What is curriculum learning's core principle?",
        es: "¿Cuál es el principio central del aprendizaje curricular?",
        de: "Was ist das Kernprinzip des Curriculum Learning?",
        nl: "Wat is het kernprincipe van curriculum learning?"
      },
      options: [
        {
          en: "Train on easy examples first, gradually increase difficulty",
          es: "Entrenar primero con ejemplos fáciles, aumentar dificultad gradualmente",
          de: "Erst mit einfachen Beispielen trainieren, Schwierigkeit schrittweise erhöhen",
          nl: "Train eerst op makkelijke voorbeelden, verhoog geleidelijk moeilijkheid"
        },
        {
          en: "Random sampling of training data",
          es: "Muestreo aleatorio de datos de entrenamiento",
          de: "Zufälliges Sampling von Trainingsdaten",
          nl: "Willekeurige sampling van trainingsdata"
        },
        {
          en: "Focus only on hardest examples",
          es: "Enfocarse solo en ejemplos más difíciles",
          de: "Nur auf schwierigste Beispiele fokussieren",
          nl: "Focus alleen op moeilijkste voorbeelden"
        },
        {
          en: "Uniform difficulty distribution",
          es: "Distribución uniforme de dificultad",
          de: "Gleichmäßige Schwierigkeitsverteilung",
          nl: "Uniforme moeilijkheidsverdeling"
        }
      ],
      correct: 0,
      explanation: {
        en: "Curriculum learning mimics human learning by starting with easy examples and gradually increasing difficulty, often improving convergence speed and final performance.",
        es: "El aprendizaje curricular imita el aprendizaje humano comenzando con ejemplos fáciles y aumentando gradualmente la dificultad.",
        de: "Curriculum Learning ahmt menschliches Lernen nach, beginnt mit einfachen Beispielen und erhöht schrittweise die Schwierigkeit.",
        nl: "Curriculum learning bootst menselijk leren na door te beginnen met makkelijke voorbeelden en geleidelijk moeilijkheid te verhogen."
      }
    },
    {
      question: {
        en: "What is the lottery ticket hypothesis in neural network pruning?",
        es: "¿Qué es la hipótesis del billete de lotería en poda de redes neuronales?",
        de: "Was ist die Lotterielos-Hypothese beim Pruning neuronaler Netze?",
        nl: "Wat is de loterijticket-hypothese bij neural network pruning?"
      },
      options: [
        {
          en: "Dense networks contain sparse subnetworks that train to comparable accuracy",
          es: "Redes densas contienen subredes dispersas que entrenan con precisión comparable",
          de: "Dichte Netze enthalten spärliche Teilnetze mit vergleichbarer Genauigkeit",
          nl: "Dichte netwerken bevatten sparse subnetwerken met vergelijkbare nauwkeurigheid"
        },
        {
          en: "Random initialization determines final model performance",
          es: "La inicialización aleatoria determina el rendimiento final del modelo",
          de: "Zufällige Initialisierung bestimmt die finale Modellleistung",
          nl: "Willekeurige initialisatie bepaalt uiteindelijke modelprestaties"
        },
        {
          en: "Pruning always improves model generalization",
          es: "La poda siempre mejora la generalización del modelo",
          de: "Pruning verbessert immer die Modellgeneralisierung",
          nl: "Pruning verbetert altijd modelgeneralisatie"
        },
        {
          en: "Network depth is more important than width",
          es: "La profundidad de la red es más importante que el ancho",
          de: "Netzwerktiefe ist wichtiger als Breite",
          nl: "Netwerkdiepte is belangrijker dan breedte"
        }
      ],
      correct: 0,
      explanation: {
        en: "The lottery ticket hypothesis states that dense, randomly-initialized networks contain sparse subnetworks ('winning tickets') that, when trained in isolation, reach comparable test accuracy.",
        es: "La hipótesis del billete de lotería establece que las redes densas contienen subredes dispersas que alcanzan precisión comparable cuando se entrenan aisladas.",
        de: "Die Lotterielos-Hypothese besagt, dass dichte Netze spärliche Teilnetze enthalten, die isoliert trainiert vergleichbare Genauigkeit erreichen.",
        nl: "De loterijticket-hypothese stelt dat dichte netwerken sparse subnetwerken bevatten die geïsoleerd getraind vergelijkbare nauwkeurigheid bereiken."
      }
    },
    {
      question: {
        en: "What is the role of the Evidence Lower Bound (ELBO) in variational autoencoders?",
        es: "¿Cuál es el rol del límite inferior de evidencia (ELBO) en autoencoders variacionales?",
        de: "Was ist die Rolle der Evidence Lower Bound (ELBO) in VAEs?",
        nl: "Wat is de rol van de Evidence Lower Bound (ELBO) in VAEs?"
      },
      options: [
        {
          en: "Provides tractable lower bound for log-likelihood optimization",
          es: "Proporciona límite inferior manejable para optimización de log-verosimilitud",
          de: "Bietet handhabbaren unteren Grenzwert für Log-Likelihood-Optimierung",
          nl: "Biedt hanteerbare ondergrens voor log-likelihood optimalisatie"
        },
        {
          en: "Measures reconstruction error only",
          es: "Mide solo el error de reconstrucción",
          de: "Misst nur den Rekonstruktionsfehler",
          nl: "Meet alleen reconstructiefout"
        },
        {
          en: "Controls latent space dimensionality",
          es: "Controla la dimensionalidad del espacio latente",
          de: "Kontrolliert die Dimensionalität des latenten Raums",
          nl: "Controleert latente ruimte dimensionaliteit"
        },
        {
          en: "Prevents mode collapse in generation",
          es: "Previene el colapso de modos en generación",
          de: "Verhindert Moduskollaps bei der Generierung",
          nl: "Voorkomt mode collapse bij generatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "ELBO provides a tractable lower bound for the intractable log-likelihood in VAEs, combining reconstruction loss and KL divergence between prior and posterior distributions.",
        es: "ELBO proporciona un límite inferior manejable para la log-verosimilitud intratable en VAEs, combinando pérdida de reconstrucción y divergencia KL.",
        de: "ELBO bietet eine handhabbare untere Schranke für die intraktable Log-Likelihood in VAEs, kombiniert Rekonstruktionsverlust und KL-Divergenz.",
        nl: "ELBO biedt een hanteerbare ondergrens voor de intractable log-likelihood in VAEs, combineert reconstructieverlies en KL-divergentie."
      }
    },
    {
      question: {
        en: "What is Gumbel-Softmax used for in neural networks?",
        es: "¿Para qué se usa Gumbel-Softmax en redes neuronales?",
        de: "Wofür wird Gumbel-Softmax in neuronalen Netzen verwendet?",
        nl: "Waarvoor wordt Gumbel-Softmax gebruikt in neurale netwerken?"
      },
      options: [
        {
          en: "Differentiable sampling from categorical distributions",
          es: "Muestreo diferenciable de distribuciones categóricas",
          de: "Differenzierbares Sampling aus kategorialen Verteilungen",
          nl: "Differentieerbare sampling uit categorische distributies"
        },
        {
          en: "Regularization of weight matrices",
          es: "Regularización de matrices de pesos",
          de: "Regularisierung von Gewichtsmatrizen",
          nl: "Regularisatie van gewichtsmatrices"
        },
        {
          en: "Activation function for deep networks",
          es: "Función de activación para redes profundas",
          de: "Aktivierungsfunktion für tiefe Netze",
          nl: "Activatiefunctie voor diepe netwerken"
        },
        {
          en: "Optimization algorithm for convex problems",
          es: "Algoritmo de optimización para problemas convexos",
          de: "Optimierungsalgorithmus für konvexe Probleme",
          nl: "Optimalisatie-algoritme voor convexe problemen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gumbel-Softmax provides a continuous differentiable approximation to categorical distributions, enabling gradient-based optimization through discrete choices in neural networks.",
        es: "Gumbel-Softmax proporciona una aproximación diferenciable continua a distribuciones categóricas, permitiendo optimización basada en gradientes.",
        de: "Gumbel-Softmax bietet eine kontinuierliche differenzierbare Approximation kategorialer Verteilungen für gradientenbasierte Optimierung.",
        nl: "Gumbel-Softmax biedt een continue differentieerbare benadering van categorische distributies voor gradiënt-gebaseerde optimalisatie."
      }
    },
    {
      question: {
        en: "What is the Hessian-vector product used for in second-order optimization?",
        es: "¿Para qué se usa el producto Hessiano-vector en optimización de segundo orden?",
        de: "Wofür wird das Hesse-Vektor-Produkt in Second-Order-Optimierung verwendet?",
        nl: "Waarvoor wordt het Hessian-vector product gebruikt in tweede-orde optimalisatie?"
      },
      options: [
        {
          en: "Efficient computation without forming full Hessian matrix",
          es: "Cálculo eficiente sin formar matriz Hessiana completa",
          de: "Effiziente Berechnung ohne vollständige Hesse-Matrix",
          nl: "Efficiënte berekening zonder volledige Hessian matrix"
        },
        {
          en: "Computing exact eigenvalues of Hessian",
          es: "Calcular valores propios exactos del Hessiano",
          de: "Berechnung exakter Eigenwerte der Hesse-Matrix",
          nl: "Exacte eigenwaarden van Hessian berekenen"
        },
        {
          en: "Gradient clipping in deep networks",
          es: "Recorte de gradientes en redes profundas",
          de: "Gradientenbeschneidung in tiefen Netzen",
          nl: "Gradiënt clipping in diepe netwerken"
        },
        {
          en: "Batch normalization computation",
          es: "Cálculo de normalización por lotes",
          de: "Batch-Normalisierung Berechnung",
          nl: "Batch normalisatie berekening"
        }
      ],
      correct: 0,
      explanation: {
        en: "Hessian-vector products enable efficient second-order optimization methods like truncated Newton without explicitly computing or storing the full Hessian matrix.",
        es: "Los productos Hessiano-vector permiten métodos de optimización de segundo orden eficientes sin calcular explícitamente la matriz Hessiana completa.",
        de: "Hesse-Vektor-Produkte ermöglichen effiziente Second-Order-Optimierung ohne explizite Berechnung der vollständigen Hesse-Matrix.",
        nl: "Hessian-vector producten maken efficiënte tweede-orde optimalisatie mogelijk zonder expliciete berekening van de volledige Hessian matrix."
      }
    },
    {
      question: {
        en: "What is Neural Tangent Kernel (NTK) theory's main insight?",
        es: "¿Cuál es la principal idea de la teoría del kernel tangente neuronal (NTK)?",
        de: "Was ist die Haupterkenntnis der Neural Tangent Kernel (NTK) Theorie?",
        nl: "Wat is het hoofdinzicht van Neural Tangent Kernel (NTK) theorie?"
      },
      options: [
        {
          en: "Infinite-width networks behave like linear models during training",
          es: "Redes de ancho infinito se comportan como modelos lineales durante entrenamiento",
          de: "Unendlich breite Netze verhalten sich wie lineare Modelle beim Training",
          nl: "Oneindig brede netwerken gedragen zich als lineaire modellen tijdens training"
        },
        {
          en: "Deep networks always outperform shallow ones",
          es: "Redes profundas siempre superan a las superficiales",
          de: "Tiefe Netze übertreffen immer flache",
          nl: "Diepe netwerken presteren altijd beter dan ondiepe"
        },
        {
          en: "Kernel methods are superior to neural networks",
          es: "Los métodos kernel son superiores a las redes neuronales",
          de: "Kernel-Methoden sind neuronalen Netzen überlegen",
          nl: "Kernel methoden zijn superieur aan neurale netwerken"
        },
        {
          en: "Width is more important than depth",
          es: "El ancho es más importante que la profundidad",
          de: "Breite ist wichtiger als Tiefe",
          nl: "Breedte is belangrijker dan diepte"
        }
      ],
      correct: 0,
      explanation: {
        en: "NTK theory shows that infinitely wide neural networks converge to a kernel regime where they behave like linear models with a fixed kernel during gradient descent training.",
        es: "La teoría NTK muestra que redes neuronales infinitamente anchas convergen a un régimen kernel donde se comportan como modelos lineales.",
        de: "NTK-Theorie zeigt, dass unendlich breite neuronale Netze zu einem Kernel-Regime konvergieren und sich wie lineare Modelle verhalten.",
        nl: "NTK-theorie toont dat oneindig brede neurale netwerken convergeren naar een kernel-regime waar ze zich als lineaire modellen gedragen."
      }
    },
    {
      question: {
        en: "What is the purpose of Spectral Normalization in GANs?",
        es: "¿Cuál es el propósito de la normalización espectral en GANs?",
        de: "Was ist der Zweck der Spektralnormalisierung in GANs?",
        nl: "Wat is het doel van Spectral Normalization in GANs?"
      },
      options: [
        {
          en: "Constrains Lipschitz constant of discriminator",
          es: "Restringe la constante de Lipschitz del discriminador",
          de: "Beschränkt Lipschitz-Konstante des Diskriminators",
          nl: "Beperkt Lipschitz-constante van discriminator"
        },
        {
          en: "Speeds up generator training",
          es: "Acelera el entrenamiento del generador",
          de: "Beschleunigt Generator-Training",
          nl: "Versnelt generator training"
        },
        {
          en: "Reduces memory usage",
          es: "Reduce el uso de memoria",
          de: "Reduziert Speicherverbrauch",
          nl: "Vermindert geheugengebruik"
        },
        {
          en: "Improves image resolution",
          es: "Mejora la resolución de imagen",
          de: "Verbessert Bildauflösung",
          nl: "Verbetert beeldresolutie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Spectral Normalization constrains the Lipschitz constant of the discriminator by normalizing weight matrices by their spectral norm, stabilizing GAN training.",
        es: "La normalización espectral restringe la constante de Lipschitz del discriminador normalizando matrices de pesos por su norma espectral.",
        de: "Spektralnormalisierung beschränkt die Lipschitz-Konstante des Diskriminators durch Normalisierung der Gewichtsmatrizen.",
        nl: "Spectral Normalization beperkt de Lipschitz-constante van de discriminator door gewichtsmatrices te normaliseren."
      }
    },
    {
      question: {
        en: "What is contrastive predictive coding (CPC) designed to learn?",
        es: "¿Qué está diseñado para aprender el código predictivo contrastivo (CPC)?",
        de: "Was soll Contrastive Predictive Coding (CPC) lernen?",
        nl: "Wat is contrastive predictive coding (CPC) ontworpen om te leren?"
      },
      options: [
        {
          en: "Representations by predicting future in latent space",
          es: "Representaciones prediciendo el futuro en espacio latente",
          de: "Repräsentationen durch Vorhersage der Zukunft im latenten Raum",
          nl: "Representaties door toekomst te voorspellen in latente ruimte"
        },
        {
          en: "Optimal hyperparameters automatically",
          es: "Hiperparámetros óptimos automáticamente",
          de: "Optimale Hyperparameter automatisch",
          nl: "Optimale hyperparameters automatisch"
        },
        {
          en: "Causal relationships in data",
          es: "Relaciones causales en datos",
          de: "Kausale Beziehungen in Daten",
          nl: "Causale relaties in data"
        },
        {
          en: "Minimum description length",
          es: "Longitud mínima de descripción",
          de: "Minimale Beschreibungslänge",
          nl: "Minimale beschrijvingslengte"
        }
      ],
      correct: 0,
      explanation: {
        en: "CPC learns representations by maximizing mutual information between different parts of high-dimensional data, predicting future representations in latent space.",
        es: "CPC aprende representaciones maximizando información mutua entre diferentes partes de datos, prediciendo representaciones futuras en espacio latente.",
        de: "CPC lernt Repräsentationen durch Maximierung der gegenseitigen Information, indem zukünftige Repräsentationen im latenten Raum vorhergesagt werden.",
        nl: "CPC leert representaties door wederzijdse informatie te maximaliseren, door toekomstige representaties in latente ruimte te voorspellen."
      }
    },
    {
      question: {
        en: "What is the Information Bottleneck principle in deep learning?",
        es: "¿Qué es el principio del cuello de botella de información en deep learning?",
        de: "Was ist das Information Bottleneck Prinzip im Deep Learning?",
        nl: "Wat is het Information Bottleneck principe in deep learning?"
      },
      options: [
        {
          en: "Networks compress input while preserving task-relevant information",
          es: "Redes comprimen entrada preservando información relevante para la tarea",
          de: "Netze komprimieren Eingabe und bewahren aufgabenrelevante Information",
          nl: "Netwerken comprimeren input terwijl taakrelevante informatie behouden blijft"
        },
        {
          en: "Information flow is restricted by activation functions",
          es: "El flujo de información está restringido por funciones de activación",
          de: "Informationsfluss wird durch Aktivierungsfunktionen beschränkt",
          nl: "Informatiestroom wordt beperkt door activatiefuncties"
        },
        {
          en: "Bottleneck layers improve generalization",
          es: "Las capas cuello de botella mejoran la generalización",
          de: "Bottleneck-Schichten verbessern Generalisierung",
          nl: "Bottleneck-lagen verbeteren generalisatie"
        },
        {
          en: "Data compression reduces training time",
          es: "La compresión de datos reduce el tiempo de entrenamiento",
          de: "Datenkompression reduziert Trainingszeit",
          nl: "Datacompressie vermindert trainingstijd"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Information Bottleneck principle suggests deep networks learn by compressing input information while preserving information relevant to the output task.",
        es: "El principio del cuello de botella de información sugiere que las redes profundas aprenden comprimiendo información de entrada preservando lo relevante.",
        de: "Das Information Bottleneck Prinzip besagt, dass tiefe Netze durch Kompression der Eingabe bei Erhaltung aufgabenrelevanter Information lernen.",
        nl: "Het Information Bottleneck principe suggereert dat diepe netwerken leren door input te comprimeren terwijl taakrelevante informatie behouden blijft."
      }
    },
    {
      question: {
        en: "What is double descent phenomenon in modern deep learning?",
        es: "¿Qué es el fenómeno de doble descenso en deep learning moderno?",
        de: "Was ist das Double Descent Phänomen im modernen Deep Learning?",
        nl: "Wat is het double descent fenomeen in modern deep learning?"
      },
      options: [
        {
          en: "Test error decreases, increases, then decreases again with model size",
          es: "Error de prueba disminuye, aumenta, luego disminuye de nuevo con tamaño del modelo",
          de: "Testfehler sinkt, steigt, dann sinkt wieder mit Modellgröße",
          nl: "Testfout daalt, stijgt, dan daalt weer met modelgrootte"
        },
        {
          en: "Training requires two optimization phases",
          es: "El entrenamiento requiere dos fases de optimización",
          de: "Training erfordert zwei Optimierungsphasen",
          nl: "Training vereist twee optimalisatiefases"
        },
        {
          en: "Gradients descend twice per iteration",
          es: "Los gradientes descienden dos veces por iteración",
          de: "Gradienten steigen zweimal pro Iteration ab",
          nl: "Gradiënten dalen twee keer per iteratie"
        },
        {
          en: "Loss function has two local minima",
          es: "La función de pérdida tiene dos mínimos locales",
          de: "Verlustfunktion hat zwei lokale Minima",
          nl: "Verliesfunctie heeft twee lokale minima"
        }
      ],
      correct: 0,
      explanation: {
        en: "Double descent shows test error first follows classical U-curve, then decreases again in overparameterized regime, challenging traditional bias-variance tradeoff.",
        es: "El doble descenso muestra que el error de prueba sigue la curva U clásica, luego disminuye de nuevo en régimen sobreparametrizado.",
        de: "Double Descent zeigt, dass der Testfehler erst der klassischen U-Kurve folgt, dann im überparametrisierten Bereich wieder sinkt.",
        nl: "Double descent toont dat testfout eerst klassieke U-curve volgt, dan weer daalt in overgeparametriseerd regime."
      }
    },
    {
      question: {
        en: "What is the role of Polyak averaging in optimization?",
        es: "¿Cuál es el rol del promediado de Polyak en optimización?",
        de: "Was ist die Rolle von Polyak-Mittelung in der Optimierung?",
        nl: "Wat is de rol van Polyak averaging in optimalisatie?"
      },
      options: [
        {
          en: "Maintains exponential moving average of parameters for stability",
          es: "Mantiene promedio móvil exponencial de parámetros para estabilidad",
          de: "Hält exponentiellen gleitenden Durchschnitt der Parameter für Stabilität",
          nl: "Houdt exponentieel voortschrijdend gemiddelde van parameters voor stabiliteit"
        },
        {
          en: "Accelerates convergence in convex optimization",
          es: "Acelera convergencia en optimización convexa",
          de: "Beschleunigt Konvergenz in konvexer Optimierung",
          nl: "Versnelt convergentie in convexe optimalisatie"
        },
        {
          en: "Prevents gradient explosion",
          es: "Previene explosión de gradientes",
          de: "Verhindert Gradientenexplosion",
          nl: "Voorkomt gradiënt explosie"
        },
        {
          en: "Reduces memory consumption",
          es: "Reduce consumo de memoria",
          de: "Reduziert Speicherverbrauch",
          nl: "Vermindert geheugengebruik"
        }
      ],
      correct: 0,
      explanation: {
        en: "Polyak averaging (EMA) maintains an exponential moving average of parameters during training, often yielding more stable models with better generalization.",
        es: "El promediado de Polyak (EMA) mantiene un promedio móvil exponencial de parámetros durante entrenamiento, dando modelos más estables.",
        de: "Polyak-Mittelung (EMA) hält einen exponentiellen gleitenden Durchschnitt der Parameter, was stabilere Modelle ergibt.",
        nl: "Polyak averaging (EMA) houdt een exponentieel voortschrijdend gemiddelde van parameters, wat stabielere modellen oplevert."
      }
    },
    {
      question: {
        en: "What is learned in Model-Agnostic Meta-Learning (MAML)?",
        es: "¿Qué se aprende en Meta-Aprendizaje Agnóstico al Modelo (MAML)?",
        de: "Was wird in Model-Agnostic Meta-Learning (MAML) gelernt?",
        nl: "Wat wordt geleerd in Model-Agnostic Meta-Learning (MAML)?"
      },
      options: [
        {
          en: "Initialization that enables fast adaptation to new tasks",
          es: "Inicialización que permite adaptación rápida a nuevas tareas",
          de: "Initialisierung die schnelle Anpassung an neue Aufgaben ermöglicht",
          nl: "Initialisatie die snelle adaptatie aan nieuwe taken mogelijk maakt"
        },
        {
          en: "Optimal architecture for all tasks",
          es: "Arquitectura óptima para todas las tareas",
          de: "Optimale Architektur für alle Aufgaben",
          nl: "Optimale architectuur voor alle taken"
        },
        {
          en: "Feature extractors for transfer learning",
          es: "Extractores de características para transfer learning",
          de: "Feature-Extraktoren für Transfer Learning",
          nl: "Feature extractors voor transfer learning"
        },
        {
          en: "Task-specific hyperparameters",
          es: "Hiperparámetros específicos de tarea",
          de: "Aufgabenspezifische Hyperparameter",
          nl: "Taakspecifieke hyperparameters"
        }
      ],
      correct: 0,
      explanation: {
        en: "MAML learns model initialization parameters that can be quickly fine-tuned with few gradient steps to adapt to new tasks with limited data.",
        es: "MAML aprende parámetros de inicialización que pueden ajustarse rápidamente con pocos pasos de gradiente para adaptarse a nuevas tareas.",
        de: "MAML lernt Initialisierungsparameter, die mit wenigen Gradientenschritten schnell an neue Aufgaben angepasst werden können.",
        nl: "MAML leert initialisatieparameters die snel kunnen worden verfijnd met weinig gradiëntstappen voor adaptatie aan nieuwe taken."
      }
    },
    {
      question: {
        en: "What is the purpose of gradient checkpointing in training?",
        es: "¿Cuál es el propósito del checkpointing de gradientes en entrenamiento?",
        de: "Was ist der Zweck von Gradient Checkpointing beim Training?",
        nl: "Wat is het doel van gradient checkpointing bij training?"
      },
      options: [
        {
          en: "Trade computation for memory by recomputing activations",
          es: "Intercambiar cómputo por memoria recalculando activaciones",
          de: "Tauscht Berechnung gegen Speicher durch Neuberechnung von Aktivierungen",
          nl: "Ruilt berekening voor geheugen door activaties opnieuw te berekenen"
        },
        {
          en: "Save model checkpoints during training",
          es: "Guardar checkpoints del modelo durante entrenamiento",
          de: "Modell-Checkpoints während des Trainings speichern",
          nl: "Model checkpoints opslaan tijdens training"
        },
        {
          en: "Verify gradient correctness",
          es: "Verificar corrección de gradientes",
          de: "Gradienten-Korrektheit überprüfen",
          nl: "Gradiënt correctheid verifiëren"
        },
        {
          en: "Prevent gradient explosion",
          es: "Prevenir explosión de gradientes",
          de: "Gradientenexplosion verhindern",
          nl: "Gradiënt explosie voorkomen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Gradient checkpointing reduces memory usage by not storing all activations, instead recomputing them during backpropagation, trading computation time for memory.",
        es: "El checkpointing de gradientes reduce uso de memoria no almacenando todas las activaciones, recalculándolas durante retropropagación.",
        de: "Gradient Checkpointing reduziert Speicherverbrauch durch Neuberechnung von Aktivierungen während Backpropagation statt Speicherung.",
        nl: "Gradient checkpointing vermindert geheugengebruik door activaties opnieuw te berekenen tijdens backpropagation in plaats van opslag."
      }
    },
    {
      question: {
        en: "What is the key innovation in Reformer architecture?",
        es: "¿Cuál es la innovación clave en la arquitectura Reformer?",
        de: "Was ist die Schlüsselinnovation in der Reformer-Architektur?",
        nl: "Wat is de belangrijkste innovatie in Reformer architectuur?"
      },
      options: [
        {
          en: "LSH attention and reversible layers for efficiency",
          es: "Atención LSH y capas reversibles para eficiencia",
          de: "LSH-Attention und reversible Schichten für Effizienz",
          nl: "LSH-aandacht en omkeerbare lagen voor efficiëntie"
        },
        {
          en: "Deeper networks with skip connections",
          es: "Redes más profundas con conexiones de salto",
          de: "Tiefere Netze mit Skip-Verbindungen",
          nl: "Diepere netwerken met skip-verbindingen"
        },
        {
          en: "Improved positional encodings",
          es: "Codificaciones posicionales mejoradas",
          de: "Verbesserte Positionskodierungen",
          nl: "Verbeterde positionele coderingen"
        },
        {
          en: "Better initialization strategies",
          es: "Mejores estrategias de inicialización",
          de: "Bessere Initialisierungsstrategien",
          nl: "Betere initialisatiestrategieën"
        }
      ],
      correct: 0,
      explanation: {
        en: "Reformer uses locality-sensitive hashing (LSH) for efficient attention and reversible layers to reduce memory usage, enabling training of much longer sequences.",
        es: "Reformer usa hashing sensible a localidad (LSH) para atención eficiente y capas reversibles para reducir uso de memoria.",
        de: "Reformer nutzt Locality-Sensitive Hashing (LSH) für effiziente Attention und reversible Schichten zur Speicherreduktion.",
        nl: "Reformer gebruikt locality-sensitive hashing (LSH) voor efficiënte aandacht en omkeerbare lagen voor geheugenreductie."
      }
    },
    {
      question: {
        en: "What is mixup data augmentation's mathematical operation?",
        es: "¿Cuál es la operación matemática del aumento de datos mixup?",
        de: "Was ist die mathematische Operation der Mixup-Datenaugmentierung?",
        nl: "Wat is de wiskundige operatie van mixup data-augmentatie?"
      },
      options: [
        {
          en: "Linear interpolation between training examples",
          es: "Interpolación lineal entre ejemplos de entrenamiento",
          de: "Lineare Interpolation zwischen Trainingsbeispielen",
          nl: "Lineaire interpolatie tussen trainingsvoorbeelden"
        },
        {
          en: "Random cropping and rotation",
          es: "Recorte y rotación aleatoria",
          de: "Zufälliges Zuschneiden und Rotation",
          nl: "Willekeurig bijsnijden en rotatie"
        },
        {
          en: "Gaussian noise addition",
          es: "Adición de ruido gaussiano",
          de: "Gaußsches Rauschen hinzufügen",
          nl: "Gaussische ruis toevoeging"
        },
        {
          en: "Feature space transformation",
          es: "Transformación del espacio de características",
          de: "Feature-Raum-Transformation",
          nl: "Feature-ruimte transformatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Mixup creates virtual training examples through linear interpolation: x̃ = λx_i + (1-λ)x_j, where λ ~ Beta(α, α), improving generalization and robustness.",
        es: "Mixup crea ejemplos virtuales mediante interpolación lineal: x̃ = λx_i + (1-λ)x_j, donde λ ~ Beta(α, α), mejorando generalización.",
        de: "Mixup erzeugt virtuelle Trainingsbeispiele durch lineare Interpolation: x̃ = λx_i + (1-λ)x_j, verbessert Generalisierung.",
        nl: "Mixup creëert virtuele trainingsvoorbeelden via lineaire interpolatie: x̃ = λx_i + (1-λ)x_j, verbetert generalisatie."
      }
    },
    {
      question: {
        en: "What distinguishes Neural ODEs from standard neural networks?",
        es: "¿Qué distingue las ODEs neuronales de las redes neuronales estándar?",
        de: "Was unterscheidet Neural ODEs von Standard-Neuronalen Netzen?",
        nl: "Wat onderscheidt Neural ODEs van standaard neurale netwerken?"
      },
      options: [
        {
          en: "Continuous-depth models using ODE solvers for forward pass",
          es: "Modelos de profundidad continua usando solucionadores ODE",
          de: "Kontinuierliche Tiefe mit ODE-Lösern für Forward Pass",
          nl: "Continue-diepte modellen met ODE-solvers voor forward pass"
        },
        {
          en: "Discrete layers with skip connections",
          es: "Capas discretas con conexiones de salto",
          de: "Diskrete Schichten mit Skip-Verbindungen",
          nl: "Discrete lagen met skip-verbindingen"
        },
        {
          en: "Binary weights for efficiency",
          es: "Pesos binarios para eficiencia",
          de: "Binäre Gewichte für Effizienz",
          nl: "Binaire gewichten voor efficiëntie"
        },
        {
          en: "Quantum computing integration",
          es: "Integración de computación cuántica",
          de: "Quantencomputing-Integration",
          nl: "Quantum computing integratie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Neural ODEs parameterize hidden state dynamics as ODEs, using numerical ODE solvers for forward pass, enabling continuous-depth models with constant memory cost.",
        es: "Las ODEs neuronales parametrizan dinámicas de estado oculto como ODEs, usando solucionadores numéricos, permitiendo modelos de profundidad continua.",
        de: "Neural ODEs parametrisieren versteckte Zustandsdynamik als ODEs, nutzen numerische Löser für kontinuierliche Tiefe mit konstantem Speicher.",
        nl: "Neural ODEs parametriseren verborgen toestandsdynamiek als ODEs, gebruiken numerieke solvers voor continue diepte met constant geheugen."
      }
    },
    {
      question: {
        en: "What is the Grokking phenomenon in neural network training?",
        es: "¿Qué es el fenómeno Grokking en entrenamiento de redes neuronales?",
        de: "Was ist das Grokking-Phänomen beim Training neuronaler Netze?",
        nl: "Wat is het Grokking-fenomeen bij neural network training?"
      },
      options: [
        {
          en: "Delayed generalization long after memorization",
          es: "Generalización retrasada mucho después de memorización",
          de: "Verzögerte Generalisierung lange nach Memorierung",
          nl: "Vertraagde generalisatie lang na memorisatie"
        },
        {
          en: "Immediate perfect accuracy on test set",
          es: "Precisión perfecta inmediata en conjunto de prueba",
          de: "Sofortige perfekte Genauigkeit auf Testset",
          nl: "Onmiddellijke perfecte nauwkeurigheid op testset"
        },
        {
          en: "Catastrophic forgetting of previous tasks",
          es: "Olvido catastrófico de tareas previas",
          de: "Katastrophales Vergessen vorheriger Aufgaben",
          nl: "Catastrofaal vergeten van eerdere taken"
        },
        {
          en: "Gradient explosion during training",
          es: "Explosión de gradientes durante entrenamiento",
          de: "Gradientenexplosion während des Trainings",
          nl: "Gradiënt explosie tijdens training"
        }
      ],
      correct: 0,
      explanation: {
        en: "Grokking is when neural networks suddenly achieve good generalization performance long after perfectly memorizing training data, often requiring extended training.",
        es: "Grokking es cuando las redes neuronales logran buena generalización mucho después de memorizar perfectamente los datos de entrenamiento.",
        de: "Grokking ist wenn neuronale Netze plötzlich gute Generalisierung erreichen, lange nachdem sie Trainingsdaten perfekt memoriert haben.",
        nl: "Grokking is wanneer neurale netwerken plotseling goede generalisatie bereiken lang na het perfect memoriseren van trainingsdata."
      }
    },
    {
      question: {
        en: "What is the purpose of Sharpness-Aware Minimization (SAM)?",
        es: "¿Cuál es el propósito de la Minimización Consciente de Nitidez (SAM)?",
        de: "Was ist der Zweck von Sharpness-Aware Minimization (SAM)?",
        nl: "Wat is het doel van Sharpness-Aware Minimization (SAM)?"
      },
      options: [
        {
          en: "Find flat minima for better generalization",
          es: "Encontrar mínimos planos para mejor generalización",
          de: "Flache Minima für bessere Generalisierung finden",
          nl: "Vlakke minima vinden voor betere generalisatie"
        },
        {
          en: "Sharpen image outputs",
          es: "Agudizar salidas de imagen",
          de: "Bildausgaben schärfen",
          nl: "Beelduitvoer verscherpen"
        },
        {
          en: "Accelerate convergence speed",
          es: "Acelerar velocidad de convergencia",
          de: "Konvergenzgeschwindigkeit beschleunigen",
          nl: "Convergentiesnelheid versnellen"
        },
        {
          en: "Reduce computational cost",
          es: "Reducir costo computacional",
          de: "Rechenkosten reduzieren",
          nl: "Rekenkosten verminderen"
        }
      ],
      correct: 0,
      explanation: {
        en: "SAM seeks parameters that lie in neighborhoods with uniformly low loss (flat minima) rather than sharp minima, improving generalization by optimizing both loss value and sharpness.",
        es: "SAM busca parámetros en vecindarios con pérdida uniformemente baja (mínimos planos), mejorando generalización optimizando valor y nitidez.",
        de: "SAM sucht Parameter in Nachbarschaften mit gleichmäßig niedrigem Verlust (flache Minima), verbessert Generalisierung durch Optimierung von Wert und Schärfe.",
        nl: "SAM zoekt parameters in buurten met uniform laag verlies (vlakke minima), verbetert generalisatie door waarde en scherpte te optimaliseren."
      }
    },
    {
      question: {
        en: "What is the Fisher Information Matrix used for in neural networks?",
        es: "¿Para qué se usa la Matriz de Información de Fisher en redes neuronales?",
        de: "Wofür wird die Fisher-Informationsmatrix in neuronalen Netzen verwendet?",
        nl: "Waarvoor wordt de Fisher Information Matrix gebruikt in neurale netwerken?"
      },
      options: [
        {
          en: "Natural gradient descent and pruning importance",
          es: "Descenso de gradiente natural e importancia de poda",
          de: "Natürlicher Gradientenabstieg und Pruning-Wichtigkeit",
          nl: "Natural gradient descent en pruning-belangrijkheid"
        },
        {
          en: "Computing exact Hessian matrix",
          es: "Calcular matriz Hessiana exacta",
          de: "Exakte Hesse-Matrix berechnen",
          nl: "Exacte Hessian matrix berekenen"
        },
        {
          en: "Batch normalization statistics",
          es: "Estadísticas de normalización por lotes",
          de: "Batch-Normalisierung Statistiken",
          nl: "Batch normalisatie statistieken"
        },
        {
          en: "Random weight initialization",
          es: "Inicialización aleatoria de pesos",
          de: "Zufällige Gewichtsinitialisierung",
          nl: "Willekeurige gewichtsinitialisatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Fisher Information Matrix approximates the curvature of loss landscape, enabling natural gradient descent and measuring parameter importance for pruning or regularization.",
        es: "La Matriz de Información de Fisher aproxima la curvatura del paisaje de pérdida, permitiendo descenso de gradiente natural y medición de importancia.",
        de: "Fisher-Informationsmatrix approximiert Krümmung der Verlustlandschaft, ermöglicht natürlichen Gradientenabstieg und Wichtigkeitsmessung.",
        nl: "Fisher Information Matrix benadert kromming van verlieslandschap, maakt natural gradient descent mogelijk en meet parameter-belangrijkheid."
      }
    },
    {
      question: {
        en: "What are Normalizing Flows in generative modeling?",
        es: "¿Qué son los Flujos de Normalización en modelado generativo?",
        de: "Was sind Normalizing Flows in der generativen Modellierung?",
        nl: "Wat zijn Normalizing Flows in generatief modelleren?"
      },
      options: [
        {
          en: "Invertible transformations for exact likelihood computation",
          es: "Transformaciones invertibles para cálculo exacto de verosimilitud",
          de: "Invertierbare Transformationen für exakte Likelihood-Berechnung",
          nl: "Inverteerbare transformaties voor exacte likelihood-berekening"
        },
        {
          en: "Approximate inference methods",
          es: "Métodos de inferencia aproximada",
          de: "Approximative Inferenzmethoden",
          nl: "Benaderende inferentiemethoden"
        },
        {
          en: "Data normalization techniques",
          es: "Técnicas de normalización de datos",
          de: "Datennormalisierungstechniken",
          nl: "Data-normalisatietechnieken"
        },
        {
          en: "Gradient flow optimization",
          es: "Optimización de flujo de gradiente",
          de: "Gradientenfluss-Optimierung",
          nl: "Gradiënt flow optimalisatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Normalizing Flows use sequences of invertible transformations with tractable Jacobians to transform simple distributions into complex ones, enabling exact likelihood computation.",
        es: "Los Flujos de Normalización usan secuencias de transformaciones invertibles con Jacobianos tratables para transformar distribuciones simples en complejas.",
        de: "Normalizing Flows nutzen Sequenzen invertierbarer Transformationen mit handhabbaren Jacobi-Matrizen für exakte Likelihood-Berechnung.",
        nl: "Normalizing Flows gebruiken reeksen inverteerbare transformaties met hanteerbare Jacobianen voor exacte likelihood-berekening."
      }
    },
    {
      question: {
        en: "What is curriculum learning's core principle?",
        es: "¿Cuál es el principio central del aprendizaje curricular?",
        de: "Was ist das Kernprinzip des Curriculum Learning?",
        nl: "Wat is het kernprincipe van curriculum learning?"
      },
      options: [
        {
          en: "Train on easy examples first, gradually increase difficulty",
          es: "Entrenar primero con ejemplos fáciles, aumentar dificultad gradualmente",
          de: "Erst mit einfachen Beispielen trainieren, Schwierigkeit schrittweise erhöhen",
          nl: "Train eerst op makkelijke voorbeelden, verhoog geleidelijk moeilijkheid"
        },
        {
          en: "Random sampling of training data",
          es: "Muestreo aleatorio de datos de entrenamiento",
          de: "Zufälliges Sampling von Trainingsdaten",
          nl: "Willekeurige sampling van trainingsdata"
        },
        {
          en: "Focus only on hardest examples",
          es: "Enfocarse solo en ejemplos más difíciles",
          de: "Nur auf schwierigste Beispiele fokussieren",
          nl: "Focus alleen op moeilijkste voorbeelden"
        },
        {
          en: "Uniform difficulty distribution",
          es: "Distribución uniforme de dificultad",
          de: "Gleichmäßige Schwierigkeitsverteilung",
          nl: "Uniforme moeilijkheidsverdeling"
        }
      ],
      correct: 0,
      explanation: {
        en: "Curriculum learning mimics human learning by starting with easy examples and gradually increasing difficulty, often improving convergence speed and final performance.",
        es: "El aprendizaje curricular imita el aprendizaje humano comenzando con ejemplos fáciles y aumentando gradualmente la dificultad.",
        de: "Curriculum Learning ahmt menschliches Lernen nach, beginnt mit einfachen Beispielen und erhöht schrittweise die Schwierigkeit.",
        nl: "Curriculum learning bootst menselijk leren na door te beginnen met makkelijke voorbeelden en geleidelijk moeilijkheid te verhogen."
      }
    }
  ]
};