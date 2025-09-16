// Artificial Intelligence - Level 4: Machine Learning Algorithms
(function() {
  const level4 = {
    name: {
      en: "Machine Learning Algorithms",
      es: "Algoritmos de Aprendizaje Automático",
      de: "Maschinelle Lernalgorithmen",
      nl: "Machine Learning Algoritmen"
    },
    questions: [
      {
        question: {
          en: "What is the primary difference between batch gradient descent and stochastic gradient descent?",
          es: "¿Cuál es la diferencia principal entre el descenso de gradiente por lotes y el descenso de gradiente estocástico?",
          de: "Was ist der Hauptunterschied zwischen Batch-Gradientenabstieg und stochastischem Gradientenabstieg?",
          nl: "Wat is het primaire verschil tussen batch gradient descent en stochastic gradient descent?"
        },
        options: [
          { en: "Batch uses entire dataset per update, SGD uses single samples", es: "Batch usa todo el conjunto de datos por actualización, SGD usa muestras individuales", de: "Batch verwendet den gesamten Datensatz pro Update, SGD verwendet einzelne Stichproben", nl: "Batch gebruikt de hele dataset per update, SGD gebruikt enkele samples" },
          { en: "Batch is faster than SGD", es: "Batch es más rápido que SGD", de: "Batch ist schneller als SGD", nl: "Batch is sneller dan SGD" },
          { en: "SGD always converges to global minimum", es: "SGD siempre converge al mínimo global", de: "SGD konvergiert immer zum globalen Minimum", nl: "SGD convergeert altijd naar het globale minimum" },
          { en: "They use different loss functions", es: "Usan diferentes funciones de pérdida", de: "Sie verwenden verschiedene Verlustfunktionen", nl: "Ze gebruiken verschillende verliesfuncties" }
        ],
        correct: 0,
        explanation: {
          en: "Batch gradient descent computes gradients using the entire training dataset for each parameter update, while stochastic gradient descent uses only one training example at a time, making it faster but more noisy.",
          es: "El descenso de gradiente por lotes calcula gradientes usando todo el conjunto de datos de entrenamiento para cada actualización de parámetros, mientras que el descenso de gradiente estocástico usa solo un ejemplo de entrenamiento a la vez, haciéndolo más rápido pero más ruidoso.",
          de: "Batch-Gradientenabstieg berechnet Gradienten mit dem gesamten Trainingsdatensatz für jedes Parameter-Update, während stochastischer Gradientenabstieg nur ein Trainingsbeispiel gleichzeitig verwendet, was ihn schneller, aber rauschiger macht.",
          nl: "Batch gradient descent berekent gradiënten met de hele trainingsdataset voor elke parameterupdate, terwijl stochastic gradient descent slechts één trainingsvoorbeeld tegelijk gebruikt, waardoor het sneller maar ruiziger wordt."
        }
      },
      {
        question: {
          en: "In support vector machines, what is the role of the kernel trick?",
          es: "En las máquinas de vectores de soporte, ¿cuál es el papel del truco del kernel?",
          de: "Was ist die Rolle des Kernel-Tricks in Support Vector Machines?",
          nl: "Wat is de rol van de kernel trick in support vector machines?"
        },
        options: [
          { en: "Map data to higher dimensions for linear separation", es: "Mapear datos a dimensiones superiores para separación lineal", de: "Daten in höhere Dimensionen für lineare Trennung abbilden", nl: "Data naar hogere dimensies mappen voor lineaire scheiding" },
          { en: "Reduce computational complexity", es: "Reducir la complejidad computacional", de: "Rechenkomplexität reduzieren", nl: "Computationele complexiteit verminderen" },
          { en: "Normalize input features", es: "Normalizar características de entrada", de: "Eingabemerkmale normalisieren", nl: "Invoerkenmerken normaliseren" },
          { en: "Remove outliers from training data", es: "Eliminar valores atípicos de los datos de entrenamiento", de: "Ausreißer aus Trainingsdaten entfernen", nl: "Uitbijters uit trainingsdata verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "The kernel trick allows SVMs to implicitly map input data into higher-dimensional feature spaces without explicitly computing the transformation, enabling linear separation of non-linearly separable data.",
          es: "El truco del kernel permite a las SVM mapear implícitamente datos de entrada a espacios de características de mayor dimensión sin calcular explícitamente la transformación, permitiendo la separación lineal de datos no separables linealmente.",
          de: "Der Kernel-Trick ermöglicht es SVMs, Eingabedaten implizit in höherdimensionale Merkmalsräume abzubilden, ohne die Transformation explizit zu berechnen, wodurch lineare Trennung nicht-linear trennbarer Daten ermöglicht wird.",
          nl: "De kernel trick stelt SVMs in staat om invoerdata impliciet naar hogerdimensionale feature ruimten te mappen zonder de transformatie expliciet te berekenen, waardoor lineaire scheiding van niet-lineair scheidbare data mogelijk wordt."
        }
      },
      {
        question: {
          en: "What distinguishes Random Forest from a simple decision tree ensemble?",
          es: "¿Qué distingue a Random Forest de un simple conjunto de árboles de decisión?",
          de: "Was unterscheidet Random Forest von einem einfachen Entscheidungsbaum-Ensemble?",
          nl: "Wat onderscheidt Random Forest van een eenvoudige decision tree ensemble?"
        },
        options: [
          { en: "Bootstrap sampling and random feature selection", es: "Muestreo bootstrap y selección aleatoria de características", de: "Bootstrap-Sampling und zufällige Merkmalsselektion", nl: "Bootstrap sampling en willekeurige feature selectie" },
          { en: "Use of different loss functions", es: "Uso de diferentes funciones de pérdida", de: "Verwendung verschiedener Verlustfunktionen", nl: "Gebruik van verschillende verliesfuncties" },
          { en: "Different pruning strategies", es: "Diferentes estrategias de poda", de: "Verschiedene Beschneidungsstrategien", nl: "Verschillende snoeimethoden" },
          { en: "Weighted voting mechanism", es: "Mecanismo de votación ponderada", de: "Gewichteter Abstimmungsmechanismus", nl: "Gewogen stemmechanisme" }
        ],
        correct: 0,
        explanation: {
          en: "Random Forest uses bootstrap sampling to create diverse training sets and selects random subsets of features at each split, introducing controlled randomness that reduces overfitting and improves generalization.",
          es: "Random Forest usa muestreo bootstrap para crear conjuntos de entrenamiento diversos y selecciona subconjuntos aleatorios de características en cada división, introduciendo aleatoriedad controlada que reduce el sobreajuste y mejora la generalización.",
          de: "Random Forest verwendet Bootstrap-Sampling, um diverse Trainingssätze zu erstellen und wählt zufällige Teilmengen von Merkmalen bei jeder Aufteilung aus, wodurch kontrollierte Zufälligkeit eingeführt wird, die Überanpassung reduziert und die Generalisierung verbessert.",
          nl: "Random Forest gebruikt bootstrap sampling om diverse trainingssets te creëren en selecteert willekeurige subsets van features bij elke split, waarbij gecontroleerde willekeur wordt geïntroduceerd die overfitting vermindert en generalisatie verbetert."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in deep neural networks?",
          es: "¿Qué es el problema del gradiente que desaparece en las redes neuronales profundas?",
          de: "Was ist das Problem des verschwindenden Gradienten in tiefen neuronalen Netzwerken?",
          nl: "Wat is het vanishing gradient probleem in diepe neurale netwerken?"
        },
        options: [
          { en: "Gradients become exponentially small in early layers during backpropagation", es: "Los gradientes se vuelven exponencialmente pequeños en las capas tempranas durante la retropropagación", de: "Gradienten werden exponentiell klein in frühen Schichten während der Rückpropagation", nl: "Gradiënten worden exponentieel klein in vroege lagen tijdens backpropagation" },
          { en: "Gradients become too large causing instability", es: "Los gradientes se vuelven demasiado grandes causando inestabilidad", de: "Gradienten werden zu groß und verursachen Instabilität", nl: "Gradiënten worden te groot en veroorzaken instabiliteit" },
          { en: "Network forgets previous training examples", es: "La red olvida ejemplos de entrenamiento anteriores", de: "Das Netzwerk vergisst vorherige Trainingsbeispiele", nl: "Het netwerk vergeet vorige trainingsvoorbeelden" },
          { en: "Loss function becomes non-convex", es: "La función de pérdida se vuelve no convexa", de: "Die Verlustfunktion wird nicht-konvex", nl: "De verliesfunctie wordt niet-convex" }
        ],
        correct: 0,
        explanation: {
          en: "The vanishing gradient problem occurs when gradients become exponentially smaller as they propagate back through deep networks, making it difficult to train early layers effectively and leading to slow or stalled learning.",
          es: "El problema del gradiente que desaparece ocurre cuando los gradientes se vuelven exponencialmente más pequeños mientras se propagan hacia atrás a través de redes profundas, dificultando el entrenamiento efectivo de las capas tempranas y llevando a un aprendizaje lento o estancado.",
          de: "Das Problem des verschwindenden Gradienten tritt auf, wenn Gradienten exponentiell kleiner werden, während sie sich durch tiefe Netzwerke zurück propagieren, was das effektive Training früher Schichten erschwert und zu langsamem oder stockendem Lernen führt.",
          nl: "Het vanishing gradient probleem treedt op wanneer gradiënten exponentieel kleiner worden terwijl ze terug propageren door diepe netwerken, waardoor het moeilijk wordt om vroege lagen effectief te trainen en dit leidt tot langzaam of vastgelopen leren."
        }
      },
      {
        question: {
          en: "What is the key innovation of the attention mechanism in neural networks?",
          es: "¿Cuál es la innovación clave del mecanismo de atención en las redes neuronales?",
          de: "Was ist die Schlüsselinnovation des Aufmerksamkeitsmechanismus in neuronalen Netzwerken?",
          nl: "Wat is de belangrijkste innovatie van het attention mechanisme in neurale netwerken?"
        },
        options: [
          { en: "Allows models to focus on relevant parts of input dynamically", es: "Permite a los modelos enfocarse en partes relevantes de la entrada dinámicamente", de: "Ermöglicht es Modellen, sich dynamisch auf relevante Teile der Eingabe zu konzentrieren", nl: "Stelt modellen in staat om dynamisch te focussen op relevante delen van de invoer" },
          { en: "Reduces computational complexity", es: "Reduce la complejidad computacional", de: "Reduziert die Rechenkomplexität", nl: "Vermindert computationele complexiteit" },
          { en: "Eliminates need for recurrent connections", es: "Elimina la necesidad de conexiones recurrentes", de: "Beseitigt die Notwendigkeit rekurrenter Verbindungen", nl: "Elimineert de behoefte aan recurrente verbindingen" },
          { en: "Improves gradient flow", es: "Mejora el flujo de gradiente", de: "Verbessert den Gradientenfluss", nl: "Verbetert gradient flow" }
        ],
        correct: 0,
        explanation: {
          en: "The attention mechanism allows neural networks to dynamically focus on different parts of the input sequence when processing each output, enabling better handling of long sequences and improving performance on tasks like machine translation.",
          es: "El mecanismo de atención permite a las redes neuronales enfocarse dinámicamente en diferentes partes de la secuencia de entrada al procesar cada salida, permitiendo un mejor manejo de secuencias largas y mejorando el rendimiento en tareas como la traducción automática.",
          de: "Der Aufmerksamkeitsmechanismus ermöglicht es neuronalen Netzwerken, sich bei der Verarbeitung jeder Ausgabe dynamisch auf verschiedene Teile der Eingabesequenz zu konzentrieren, was eine bessere Handhabung langer Sequenzen ermöglicht und die Leistung bei Aufgaben wie maschineller Übersetzung verbessert.",
          nl: "Het attention mechanisme stelt neurale netwerken in staat om dynamisch te focussen op verschillende delen van de invoersequentie bij het verwerken van elke uitvoer, waardoor langere sequenties beter kunnen worden behandeld en de prestaties bij taken zoals machinevertaling worden verbeterd."
        }
      },
      {
        question: {
          en: "What is the primary advantage of using Principal Component Analysis (PCA) for dimensionality reduction?",
          es: "¿Cuál es la ventaja principal de usar el Análisis de Componentes Principales (PCA) para reducción de dimensionalidad?",
          de: "Was ist der Hauptvorteil der Verwendung der Hauptkomponentenanalyse (PCA) zur Dimensionalitätsreduktion?",
          nl: "Wat is het primaire voordeel van het gebruik van Principal Component Analysis (PCA) voor dimensionaliteitsreductie?"
        },
        options: [
          { en: "Preserves maximum variance in lower-dimensional space", es: "Preserva la máxima varianza en el espacio de menor dimensión", de: "Bewahrt maximale Varianz im niedrigdimensionalen Raum", nl: "Behoudt maximale variantie in lagerdimensionale ruimte" },
          { en: "Maintains all original features", es: "Mantiene todas las características originales", de: "Behält alle ursprünglichen Merkmale bei", nl: "Behoudt alle oorspronkelijke features" },
          { en: "Increases computational complexity", es: "Aumenta la complejidad computacional", de: "Erhöht die Rechenkomplexität", nl: "Verhoogt computationele complexiteit" },
          { en: "Requires labeled training data", es: "Requiere datos de entrenamiento etiquetados", de: "Benötigt beschriftete Trainingsdaten", nl: "Vereist gelabelde trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "PCA finds the directions of maximum variance in high-dimensional data and projects it onto a lower-dimensional subspace that preserves as much variance as possible, effectively capturing the most important information while reducing dimensionality.",
          es: "PCA encuentra las direcciones de máxima varianza en datos de alta dimensión y los proyecta en un subespacio de menor dimensión que preserva tanta varianza como sea posible, capturando efectivamente la información más importante mientras reduce la dimensionalidad.",
          de: "PCA findet die Richtungen maximaler Varianz in hochdimensionalen Daten und projiziert sie auf einen niedrigdimensionalen Unterraum, der so viel Varianz wie möglich bewahrt, wodurch die wichtigsten Informationen erfasst werden, während die Dimensionalität reduziert wird.",
          nl: "PCA vindt de richtingen van maximale variantie in hoogdimensionale data en projecteert deze op een lagerdimensionale subruimte die zoveel mogelijk variantie behoudt, waarbij effectief de belangrijkste informatie wordt vastgelegd terwijl de dimensionaliteit wordt gereduceerd."
        }
      },
      {
        question: {
          en: "What distinguishes Q-learning from other reinforcement learning algorithms?",
          es: "¿Qué distingue al Q-learning de otros algoritmos de aprendizaje por refuerzo?",
          de: "Was unterscheidet Q-Learning von anderen Reinforcement-Learning-Algorithmen?",
          nl: "Wat onderscheidt Q-learning van andere reinforcement learning algoritmen?"
        },
        options: [
          { en: "It's model-free and learns optimal action-value function directly", es: "Es libre de modelo y aprende la función de valor-acción óptima directamente", de: "Es ist modellfrei und lernt die optimale Aktions-Wert-Funktion direkt", nl: "Het is model-vrij en leert de optimale actie-waarde functie direct" },
          { en: "It requires a perfect model of the environment", es: "Requiere un modelo perfecto del entorno", de: "Es erfordert ein perfektes Modell der Umgebung", nl: "Het vereist een perfect model van de omgeving" },
          { en: "It only works with continuous action spaces", es: "Solo funciona con espacios de acción continuos", de: "Es funktioniert nur mit kontinuierlichen Aktionsräumen", nl: "Het werkt alleen met continue actieruimten" },
          { en: "It uses policy gradients", es: "Usa gradientes de política", de: "Es verwendet Policy-Gradients", nl: "Het gebruikt policy gradiënten" }
        ],
        correct: 0,
        explanation: {
          en: "Q-learning is a model-free reinforcement learning algorithm that learns the optimal action-value function (Q-function) directly from experience without requiring a model of the environment, using temporal difference learning to update Q-values.",
          es: "Q-learning es un algoritmo de aprendizaje por refuerzo libre de modelo que aprende la función de valor-acción óptima (función Q) directamente de la experiencia sin requerir un modelo del entorno, usando aprendizaje de diferencia temporal para actualizar los valores Q.",
          de: "Q-Learning ist ein modellfreier Reinforcement-Learning-Algorithmus, der die optimale Aktions-Wert-Funktion (Q-Funktion) direkt aus Erfahrung lernt, ohne ein Modell der Umgebung zu benötigen, und temporales Differenzlernen verwendet, um Q-Werte zu aktualisieren.",
          nl: "Q-learning is een model-vrij reinforcement learning algoritme dat de optimale actie-waarde functie (Q-functie) direct leert van ervaring zonder een model van de omgeving te vereisen, waarbij temporeel verschil leren wordt gebruikt om Q-waarden bij te werken."
        }
      },
      {
        question: {
          en: "What is the main purpose of regularization techniques like L1 and L2 in machine learning?",
          es: "¿Cuál es el propósito principal de las técnicas de regularización como L1 y L2 en aprendizaje automático?",
          de: "Was ist der Hauptzweck von Regularisierungstechniken wie L1 und L2 im maschinellen Lernen?",
          nl: "Wat is het hoofddoel van regularisatietechnieken zoals L1 en L2 in machine learning?"
        },
        options: [
          { en: "Prevent overfitting by penalizing large weights", es: "Prevenir sobreajuste penalizando pesos grandes", de: "Überanpassung verhindern durch Bestrafung großer Gewichte", nl: "Overfitting voorkomen door grote gewichten te bestraffen" },
          { en: "Increase training speed", es: "Aumentar la velocidad de entrenamiento", de: "Trainingsgeschwindigkeit erhöhen", nl: "Trainingssnelheid verhogen" },
          { en: "Add more features to the model", es: "Agregar más características al modelo", de: "Mehr Merkmale zum Modell hinzufügen", nl: "Meer features aan het model toevoegen" },
          { en: "Normalize input data", es: "Normalizar datos de entrada", de: "Eingabedaten normalisieren", nl: "Invoerdata normaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "L1 and L2 regularization add penalty terms to the loss function that discourage large weight values, helping prevent overfitting by constraining model complexity and encouraging simpler, more generalizable models.",
          es: "La regularización L1 y L2 agregan términos de penalización a la función de pérdida que desalientan valores de peso grandes, ayudando a prevenir el sobreajuste al restringir la complejidad del modelo y fomentar modelos más simples y generalizables.",
          de: "L1- und L2-Regularisierung fügen Strafterme zur Verlustfunktion hinzu, die große Gewichtswerte abschrecken und helfen, Überanpassung zu verhindern, indem sie die Modellkomplexität begrenzen und einfachere, generalisierbarere Modelle fördern.",
          nl: "L1 en L2 regularisatie voegen straftermen toe aan de verliesfunctie die grote gewichtswaarden ontmoedigen, waardoor overfitting wordt voorkomen door modelcomplexiteit te beperken en eenvoudigere, meer generaliseerbare modellen aan te moedigen."
        }
      },
      {
        question: {
          en: "What is the key insight behind ensemble methods like AdaBoost?",
          es: "¿Cuál es la idea clave detrás de métodos de conjunto como AdaBoost?",
          de: "Was ist die Schlüsseleinsicht hinter Ensemble-Methoden wie AdaBoost?",
          nl: "Wat is het belangrijkste inzicht achter ensemble methoden zoals AdaBoost?"
        },
        options: [
          { en: "Combine weak learners sequentially, focusing on previously misclassified examples", es: "Combinar aprendices débiles secuencialmente, enfocándose en ejemplos previamente mal clasificados", de: "Schwache Lerner sequenziell kombinieren, fokussiert auf zuvor falsch klassifizierte Beispiele", nl: "Zwakke learners opeenvolgend combineren, gericht op eerder foutief geclassificeerde voorbeelden" },
          { en: "Use only the best performing individual model", es: "Usar solo el modelo individual de mejor rendimiento", de: "Nur das beste individuelle Modell verwenden", nl: "Alleen het best presterende individuele model gebruiken" },
          { en: "Average predictions from independent models", es: "Promediar predicciones de modelos independientes", de: "Vorhersagen unabhängiger Modelle mitteln", nl: "Voorspellingen van onafhankelijke modellen middelen" },
          { en: "Train multiple models on the same data", es: "Entrenar múltiples modelos en los mismos datos", de: "Mehrere Modelle auf denselben Daten trainieren", nl: "Meerdere modellen trainen op dezelfde data" }
        ],
        correct: 0,
        explanation: {
          en: "AdaBoost combines weak learners by training them sequentially, where each new learner focuses on examples that were misclassified by previous learners, gradually building a strong classifier through adaptive boosting.",
          es: "AdaBoost combina aprendices débiles entrenándolos secuencialmente, donde cada nuevo aprendiz se enfoca en ejemplos que fueron mal clasificados por aprendices anteriores, construyendo gradualmente un clasificador fuerte a través de impulso adaptativo.",
          de: "AdaBoost kombiniert schwache Lerner, indem es sie sequenziell trainiert, wobei sich jeder neue Lerner auf Beispiele konzentriert, die von vorherigen Lernern falsch klassifiziert wurden, und allmählich einen starken Klassifikator durch adaptives Boosting aufbaut.",
          nl: "AdaBoost combineert zwakke learners door ze opeenvolgend te trainen, waarbij elke nieuwe learner focust op voorbeelden die foutief zijn geclassificeerd door vorige learners, waarbij geleidelijk een sterke classifier wordt opgebouwd door adaptieve boosting."
        }
      },
      {
        question: {
          en: "What is the primary challenge that Generative Adversarial Networks (GANs) aim to solve?",
          es: "¿Cuál es el desafío principal que las Redes Generativas Adversariales (GAN) buscan resolver?",
          de: "Was ist die primäre Herausforderung, die Generative Adversarial Networks (GANs) lösen wollen?",
          nl: "Wat is de primaire uitdaging die Generative Adversarial Networks (GANs) proberen op te lossen?"
        },
        options: [
          { en: "Generate realistic data by training generator and discriminator in adversarial setup", es: "Generar datos realistas entrenando generador y discriminador en configuración adversarial", de: "Realistische Daten generieren durch Training von Generator und Diskriminator in adversariellem Setup", nl: "Realistische data genereren door generator en discriminator te trainen in adversariële opstelling" },
          { en: "Classify images with higher accuracy", es: "Clasificar imágenes con mayor precisión", de: "Bilder mit höherer Genauigkeit klassifizieren", nl: "Afbeeldingen met hogere nauwkeurigheid classificeren" },
          { en: "Reduce training time for neural networks", es: "Reducir el tiempo de entrenamiento para redes neuronales", de: "Trainingszeit für neuronale Netzwerke reduzieren", nl: "Trainingstijd voor neurale netwerken verminderen" },
          { en: "Compress large datasets efficiently", es: "Comprimir grandes conjuntos de datos eficientemente", de: "Große Datensätze effizient komprimieren", nl: "Grote datasets efficiënt comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "GANs solve the problem of generating realistic synthetic data by training two neural networks in competition: a generator creates fake data while a discriminator tries to distinguish real from fake, leading to increasingly realistic generated samples.",
          es: "Las GAN resuelven el problema de generar datos sintéticos realistas entrenando dos redes neuronales en competencia: un generador crea datos falsos mientras que un discriminador trata de distinguir lo real de lo falso, llevando a muestras generadas cada vez más realistas.",
          de: "GANs lösen das Problem der Generierung realistischer synthetischer Daten, indem sie zwei neuronale Netzwerke im Wettbewerb trainieren: ein Generator erstellt gefälschte Daten, während ein Diskriminator versucht, echte von gefälschten zu unterscheiden, was zu zunehmend realistischen generierten Proben führt.",
          nl: "GANs lossen het probleem op van het genereren van realistische synthetische data door twee neurale netwerken in competitie te trainen: een generator creëert nep-data terwijl een discriminator probeert echt van nep te onderscheiden, wat leidt tot steeds realistischere gegenereerde samples."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/artificial-intelligence', level4);
  }
})();
