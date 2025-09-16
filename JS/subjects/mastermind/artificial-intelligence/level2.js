// Artificial Intelligence - Level 2: Machine Learning Fundamentals & Neural Networks
(function() {
  const level2 = {
    name: {
      en: "Machine Learning Fundamentals & Neural Networks",
      es: "Fundamentos de Aprendizaje Automático y Redes Neuronales",
      de: "Grundlagen des Maschinellen Lernens und Neuronale Netzwerke",
      nl: "Grondbeginselen van Machine Learning en Neurale Netwerken"
    },
    questions: [
      {
        question: {
          en: "What is the primary difference between supervised and unsupervised learning?",
          es: "¿Cuál es la diferencia principal entre aprendizaje supervisado y no supervisado?",
          de: "Was ist der Hauptunterschied zwischen überwachtem und unüberwachtem Lernen?",
          nl: "Wat is het belangrijkste verschil tussen supervised en unsupervised learning?"
        },
        options: [
          { en: "Supervised learning uses labeled data, unsupervised learning finds patterns in unlabeled data", es: "El aprendizaje supervisado usa datos etiquetados, el no supervisado encuentra patrones en datos sin etiquetar", de: "Überwachtes Lernen verwendet beschriftete Daten, unüberwachtes Lernen findet Muster in unbeschrifteten Daten", nl: "Supervised learning gebruikt gelabelde data, unsupervised learning vindt patronen in ongelabelde data" },
          { en: "Supervised learning is faster than unsupervised learning", es: "El aprendizaje supervisado es más rápido que el no supervisado", de: "Überwachtes Lernen ist schneller als unüberwachtes Lernen", nl: "Supervised learning is sneller dan unsupervised learning" },
          { en: "Supervised learning requires more computational power", es: "El aprendizaje supervisado requiere más poder computacional", de: "Überwachtes Lernen erfordert mehr Rechenleistung", nl: "Supervised learning vereist meer rekenkracht" },
          { en: "Supervised learning only works with numerical data", es: "El aprendizaje supervisado solo funciona con datos numéricos", de: "Überwachtes Lernen funktioniert nur mit numerischen Daten", nl: "Supervised learning werkt alleen met numerieke data" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised learning algorithms learn from input-output pairs (labeled data) to make predictions, while unsupervised learning algorithms discover hidden patterns or structures in data without knowing the correct outputs.",
          es: "Los algoritmos de aprendizaje supervisado aprenden de pares entrada-salida (datos etiquetados) para hacer predicciones, mientras que los algoritmos de aprendizaje no supervisado descubren patrones o estructuras ocultas en datos sin conocer las salidas correctas.",
          de: "Algorithmen des überwachten Lernens lernen aus Input-Output-Paaren (beschriftete Daten) um Vorhersagen zu treffen, während Algorithmen des unüberwachten Lernens verborgene Muster oder Strukturen in Daten entdecken, ohne die korrekten Ausgaben zu kennen.",
          nl: "Supervised learning algoritmes leren van input-output paren (gelabelde data) om voorspellingen te maken, terwijl unsupervised learning algoritmes verborgen patronen of structuren in data ontdekken zonder de juiste outputs te kennen."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in deep neural networks?",
          es: "¿Qué es el problema del gradiente que desaparece en las redes neuronales profundas?",
          de: "Was ist das Problem des verschwindenden Gradienten in tiefen neuronalen Netzwerken?",
          nl: "Wat is het verdwijnende gradiënt probleem in diepe neurale netwerken?"
        },
        options: [
          { en: "Gradients become exponentially small in early layers during backpropagation", es: "Los gradientes se vuelven exponencialmente pequeños en las capas tempranas durante la retropropagación", de: "Gradienten werden exponentiell klein in frühen Schichten während der Rückpropagation", nl: "Gradiënten worden exponentieel klein in vroege lagen tijdens backpropagation" },
          { en: "Neural networks lose connection weights randomly", es: "Las redes neuronales pierden pesos de conexión aleatoriamente", de: "Neuronale Netzwerke verlieren Verbindungsgewichte zufällig", nl: "Neurale netwerken verliezen verbindingsgewichten willekeurig" },
          { en: "Training data becomes corrupted during processing", es: "Los datos de entrenamiento se corrompen durante el procesamiento", de: "Trainingsdaten werden während der Verarbeitung beschädigt", nl: "Trainingsdata raakt beschadigd tijdens verwerking" },
          { en: "The learning rate decreases too rapidly", es: "La tasa de aprendizaje disminuye demasiado rápidamente", de: "Die Lernrate sinkt zu schnell", nl: "De leersnelheid daalt te snel" }
        ],
        correct: 0,
        explanation: {
          en: "During backpropagation, gradients are multiplied through many layers. With certain activation functions and weights, these gradients can become exponentially smaller, making it difficult for early layers to learn effectively.",
          es: "Durante la retropropagación, los gradientes se multiplican a través de muchas capas. Con ciertas funciones de activación y pesos, estos gradientes pueden volverse exponencialmente más pequeños, dificultando que las capas tempranas aprendan efectivamente.",
          de: "Während der Rückpropagation werden Gradienten durch viele Schichten multipliziert. Mit bestimmten Aktivierungsfunktionen und Gewichten können diese Gradienten exponentiell kleiner werden, wodurch es für frühe Schichten schwierig wird, effektiv zu lernen.",
          nl: "Tijdens backpropagation worden gradiënten vermenigvuldigd door vele lagen. Met bepaalde activatiefuncties en gewichten kunnen deze gradiënten exponentieel kleiner worden, waardoor het voor vroege lagen moeilijk wordt om effectief te leren."
        }
      },
      {
        question: {
          en: "What is the purpose of regularization techniques in machine learning?",
          es: "¿Cuál es el propósito de las técnicas de regularización en el aprendizaje automático?",
          de: "Was ist der Zweck von Regularisierungstechniken im maschinellen Lernen?",
          nl: "Wat is het doel van regularisatietechnieken in machine learning?"
        },
        options: [
          { en: "To prevent overfitting by adding penalty terms to the loss function", es: "Prevenir el sobreajuste agregando términos de penalización a la función de pérdida", de: "Überanpassung durch Hinzufügung von Straftermen zur Verlustfunktion verhindern", nl: "Overfitting voorkomen door straftermen toe te voegen aan de verliesfunctie" },
          { en: "To increase the training speed of algorithms", es: "Aumentar la velocidad de entrenamiento de los algoritmos", de: "Die Trainingsgeschwindigkeit von Algorithmen erhöhen", nl: "De trainingssnelheid van algoritmes verhogen" },
          { en: "To reduce the amount of training data needed", es: "Reducir la cantidad de datos de entrenamiento necesarios", de: "Die Menge der benötigten Trainingsdaten reduzieren", nl: "De hoeveelheid benodigde trainingsdata verminderen" },
          { en: "To convert unsupervised problems to supervised ones", es: "Convertir problemas no supervisados en supervisados", de: "Unüberwachte Probleme in überwachte umwandeln", nl: "Unsupervised problemen omzetten naar supervised problemen" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization techniques like L1, L2 regularization, and dropout add constraints or penalties to prevent the model from fitting too closely to training data, thereby improving generalization to new, unseen data.",
          es: "Las técnicas de regularización como la regularización L1, L2 y dropout agregan restricciones o penalizaciones para evitar que el modelo se ajuste demasiado a los datos de entrenamiento, mejorando así la generalización a datos nuevos y no vistos.",
          de: "Regularisierungstechniken wie L1-, L2-Regularisierung und Dropout fügen Beschränkungen oder Strafen hinzu, um zu verhindern, dass das Modell zu eng an die Trainingsdaten angepasst wird, wodurch die Generalisierung auf neue, ungesehene Daten verbessert wird.",
          nl: "Regularisatietechnieken zoals L1, L2 regularisatie en dropout voegen beperkingen of straffen toe om te voorkomen dat het model te nauw aansluit bij de trainingsdata, waardoor de generalisatie naar nieuwe, ongeziene data verbetert."
        }
      },
      {
        question: {
          en: "What distinguishes a convolutional neural network (CNN) from a standard feedforward neural network?",
          es: "¿Qué distingue a una red neuronal convolucional (CNN) de una red neuronal feedforward estándar?",
          de: "Was unterscheidet ein Convolutional Neural Network (CNN) von einem Standard-Feedforward-Neuronalen Netzwerk?",
          nl: "Wat onderscheidt een convolutioneel neuraal netwerk (CNN) van een standaard feedforward neuraal netwerk?"
        },
        options: [
          { en: "CNNs use convolution and pooling operations to exploit spatial relationships in data", es: "Las CNN usan operaciones de convolución y pooling para explotar relaciones espaciales en los datos", de: "CNNs verwenden Faltungs- und Pooling-Operationen, um räumliche Beziehungen in Daten zu nutzen", nl: "CNN's gebruiken convolutie en pooling operaties om ruimtelijke relaties in data te exploiteren" },
          { en: "CNNs can only process grayscale images", es: "Las CNN solo pueden procesar imágenes en escala de grises", de: "CNNs können nur Graustufenbilder verarbeiten", nl: "CNN's kunnen alleen grijswaarden afbeeldingen verwerken" },
          { en: "CNNs require less computational power", es: "Las CNN requieren menos poder computacional", de: "CNNs benötigen weniger Rechenleistung", nl: "CNN's vereisen minder rekenkracht" },
          { en: "CNNs have fewer parameters than feedforward networks", es: "Las CNN tienen menos parámetros que las redes feedforward", de: "CNNs haben weniger Parameter als Feedforward-Netzwerke", nl: "CNN's hebben minder parameters dan feedforward netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "CNNs are specifically designed for data with spatial structure (like images) using convolution operations that detect local features and pooling operations that reduce dimensionality while preserving important information.",
          es: "Las CNN están específicamente diseñadas para datos con estructura espacial (como imágenes) usando operaciones de convolución que detectan características locales y operaciones de pooling que reducen la dimensionalidad preservando información importante.",
          de: "CNNs sind speziell für Daten mit räumlicher Struktur (wie Bilder) entwickelt, die Faltungsoperationen verwenden, um lokale Merkmale zu erkennen, und Pooling-Operationen, die die Dimensionalität reduzieren und dabei wichtige Informationen bewahren.",
          nl: "CNN's zijn speciaal ontworpen voor data met ruimtelijke structuur (zoals afbeeldingen) waarbij convolutie-operaties lokale kenmerken detecteren en pooling-operaties de dimensionaliteit verminderen terwijl belangrijke informatie behouden blijft."
        }
      },
      {
        question: {
          en: "What is the key innovation of transformer architectures in deep learning?",
          es: "¿Cuál es la innovación clave de las arquitecturas transformer en el aprendizaje profundo?",
          de: "Was ist die Schlüsselinnovation von Transformer-Architekturen im Deep Learning?",
          nl: "Wat is de belangrijkste innovatie van transformer architecturen in deep learning?"
        },
        options: [
          { en: "Self-attention mechanisms that process all positions simultaneously", es: "Mecanismos de auto-atención que procesan todas las posiciones simultáneamente", de: "Selbst-Aufmerksamkeitsmechanismen, die alle Positionen gleichzeitig verarbeiten", nl: "Zelf-aandachtsmechanismen die alle posities tegelijkertijd verwerken" },
          { en: "Using only linear layers without activation functions", es: "Usar solo capas lineales sin funciones de activación", de: "Nur lineare Schichten ohne Aktivierungsfunktionen verwenden", nl: "Alleen lineaire lagen gebruiken zonder activatiefuncties" },
          { en: "Eliminating the need for training data", es: "Eliminar la necesidad de datos de entrenamiento", de: "Die Notwendigkeit von Trainingsdaten eliminieren", nl: "De noodzaak voor trainingsdata elimineren" },
          { en: "Processing data in fixed-size chunks only", es: "Procesar datos solo en fragmentos de tamaño fijo", de: "Daten nur in Blöcken fester Größe verarbeiten", nl: "Data alleen in chunks van vaste grootte verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Transformers introduced the self-attention mechanism, which allows the model to weigh the importance of different parts of the input sequence when processing each element, enabling parallel processing and better capture of long-range dependencies.",
          es: "Los transformers introdujeron el mecanismo de auto-atención, que permite al modelo evaluar la importancia de diferentes partes de la secuencia de entrada al procesar cada elemento, habilitando procesamiento paralelo y mejor captura de dependencias de largo alcance.",
          de: "Transformer führten den Selbst-Aufmerksamkeitsmechanismus ein, der es dem Modell ermöglicht, die Wichtigkeit verschiedener Teile der Eingabesequenz beim Verarbeiten jedes Elements zu bewerten, was parallele Verarbeitung und bessere Erfassung langreichweitiger Abhängigkeiten ermöglicht.",
          nl: "Transformers introduceerden het zelf-aandachtsmechanisme, waarmee het model het belang van verschillende delen van de invoersequentie kan wegen bij het verwerken van elk element, wat parallelle verwerking en betere vastlegging van lange-afstand afhankelijkheden mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the bias-variance tradeoff in machine learning?",
          es: "¿Qué es el equilibrio entre sesgo y varianza en el aprendizaje automático?",
          de: "Was ist der Bias-Varianz-Tradeoff im maschinellen Lernen?",
          nl: "Wat is de bias-variantie afweging in machine learning?"
        },
        options: [
          { en: "Bias measures systematic errors, variance measures sensitivity to training data changes", es: "El sesgo mide errores sistemáticos, la varianza mide sensibilidad a cambios en datos de entrenamiento", de: "Bias misst systematische Fehler, Varianz misst Sensitivität gegenüber Änderungen der Trainingsdaten", nl: "Bias meet systematische fouten, variantie meet gevoeligheid voor veranderingen in trainingsdata" },
          { en: "Bias refers to data preprocessing, variance to model selection", es: "El sesgo se refiere al preprocesamiento de datos, la varianza a la selección del modelo", de: "Bias bezieht sich auf Datenvorverarbeitung, Varianz auf Modellauswahl", nl: "Bias verwijst naar data preprocessing, variantie naar modelselectie" },
          { en: "Bias is computational cost, variance is memory usage", es: "El sesgo es costo computacional, la varianza es uso de memoria", de: "Bias sind Berechnungskosten, Varianz ist Speicherverbrauch", nl: "Bias is computationele kost, variantie is geheugengebruik" },
          { en: "Bias relates to supervised learning, variance to unsupervised learning", es: "El sesgo se relaciona con aprendizaje supervisado, la varianza con aprendizaje no supervisado", de: "Bias bezieht sich auf überwachtes Lernen, Varianz auf unüberwachtes Lernen", nl: "Bias heeft betrekking op supervised learning, variantie op unsupervised learning" }
        ],
        correct: 0,
        explanation: {
          en: "Bias is the error from oversimplifying assumptions in the algorithm, while variance is the error from the model's sensitivity to small fluctuations in the training set. The tradeoff involves balancing these two sources of error to minimize total error.",
          es: "El sesgo es el error de suposiciones excesivamente simplificadoras en el algoritmo, mientras que la varianza es el error de la sensibilidad del modelo a pequeñas fluctuaciones en el conjunto de entrenamiento. El equilibrio involucra balancear estas dos fuentes de error para minimizar el error total.",
          de: "Bias ist der Fehler durch zu stark vereinfachende Annahmen im Algorithmus, während Varianz der Fehler durch die Empfindlichkeit des Modells gegenüber kleinen Schwankungen im Trainingssatz ist. Der Tradeoff beinhaltet das Ausbalancieren dieser beiden Fehlerquellen zur Minimierung des Gesamtfehlers.",
          nl: "Bias is de fout van te vereenvoudigende aannames in het algoritme, terwijl variantie de fout is van de gevoeligheid van het model voor kleine fluctuaties in de trainingsset. De afweging houdt in het balanceren van deze twee foutenbronnen om de totale fout te minimaliseren."
        }
      },
      {
        question: {
          en: "What is the purpose of batch normalization in neural networks?",
          es: "¿Cuál es el propósito de la normalización por lotes en las redes neuronales?",
          de: "Was ist der Zweck der Batch-Normalisierung in neuronalen Netzwerken?",
          nl: "Wat is het doel van batch normalisatie in neurale netwerken?"
        },
        options: [
          { en: "To normalize layer inputs to have zero mean and unit variance", es: "Normalizar las entradas de las capas para tener media cero y varianza unitaria", de: "Schichteingaben normalisieren, um Mittelwert null und Einheitsvarianz zu haben", nl: "Laag inputs normaliseren om nul gemiddelde en eenheidsvariantie te hebben" },
          { en: "To reduce the size of training batches", es: "Reducir el tamaño de los lotes de entrenamiento", de: "Die Größe der Trainingsstapel reduzieren", nl: "De grootte van trainingsbatches verminderen" },
          { en: "To convert continuous variables to categorical ones", es: "Convertir variables continuas en categóricas", de: "Kontinuierliche Variablen in kategorische umwandeln", nl: "Continue variabelen omzetten naar categorische" },
          { en: "To eliminate the need for activation functions", es: "Eliminar la necesidad de funciones de activación", de: "Die Notwendigkeit von Aktivierungsfunktionen eliminieren", nl: "De noodzaak voor activatiefuncties elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes the inputs to each layer to have approximately zero mean and unit variance, which helps stabilize training, allows higher learning rates, and reduces the dependence on careful initialization.",
          es: "La normalización por lotes normaliza las entradas de cada capa para tener aproximadamente media cero y varianza unitaria, lo que ayuda a estabilizar el entrenamiento, permite tasas de aprendizaje más altas y reduce la dependencia de una inicialización cuidadosa.",
          de: "Batch-Normalisierung normalisiert die Eingaben jeder Schicht, um ungefähr Mittelwert null und Einheitsvarianz zu haben, was dabei hilft, das Training zu stabilisieren, höhere Lernraten ermöglicht und die Abhängigkeit von sorgfältiger Initialisierung reduziert.",
          nl: "Batch normalisatie normaliseert de inputs naar elke laag om ongeveer nul gemiddelde en eenheidsvariantie te hebben, wat helpt bij het stabiliseren van training, hogere leersnelheden mogelijk maakt en de afhankelijkheid van zorgvuldige initialisatie vermindert."
        }
      },
      {
        question: {
          en: "What is the difference between bagging and boosting ensemble methods?",
          es: "¿Cuál es la diferencia entre los métodos de ensemble bagging y boosting?",
          de: "Was ist der Unterschied zwischen Bagging- und Boosting-Ensemble-Methoden?",
          nl: "Wat is het verschil tussen bagging en boosting ensemble methoden?"
        },
        options: [
          { en: "Bagging trains models in parallel on bootstrap samples, boosting trains models sequentially to correct previous errors", es: "Bagging entrena modelos en paralelo en muestras bootstrap, boosting entrena modelos secuencialmente para corregir errores previos", de: "Bagging trainiert Modelle parallel auf Bootstrap-Stichproben, Boosting trainiert Modelle sequenziell, um vorherige Fehler zu korrigieren", nl: "Bagging traint modellen parallel op bootstrap samples, boosting traint modellen sequentieel om vorige fouten te corrigeren" },
          { en: "Bagging is for classification, boosting is for regression", es: "Bagging es para clasificación, boosting es para regresión", de: "Bagging ist für Klassifikation, Boosting ist für Regression", nl: "Bagging is voor classificatie, boosting is voor regressie" },
          { en: "Bagging uses neural networks, boosting uses decision trees", es: "Bagging usa redes neuronales, boosting usa árboles de decisión", de: "Bagging verwendet neuronale Netzwerke, Boosting verwendet Entscheidungsbäume", nl: "Bagging gebruikt neurale netwerken, boosting gebruikt beslisbomen" },
          { en: "Bagging is faster, boosting is more accurate", es: "Bagging es más rápido, boosting es más preciso", de: "Bagging ist schneller, Boosting ist genauer", nl: "Bagging is sneller, boosting is nauwkeuriger" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging (Bootstrap Aggregating) trains multiple models independently on different bootstrap samples and averages their predictions. Boosting trains models sequentially, with each new model focusing on correcting the errors of previous models.",
          es: "Bagging (Bootstrap Aggregating) entrena múltiples modelos independientemente en diferentes muestras bootstrap y promedia sus predicciones. Boosting entrena modelos secuencialmente, con cada nuevo modelo enfocándose en corregir los errores de modelos previos.",
          de: "Bagging (Bootstrap Aggregating) trainiert mehrere Modelle unabhängig auf verschiedenen Bootstrap-Stichproben und mittelt ihre Vorhersagen. Boosting trainiert Modelle sequenziell, wobei sich jedes neue Modell darauf konzentriert, die Fehler vorheriger Modelle zu korrigieren.",
          nl: "Bagging (Bootstrap Aggregating) traint meerdere modellen onafhankelijk op verschillende bootstrap samples en middelt hun voorspellingen. Boosting traint modellen sequentieel, waarbij elk nieuw model zich richt op het corrigeren van fouten van vorige modellen."
        }
      },
      {
        question: {
          en: "What is the purpose of cross-validation in machine learning?",
          es: "¿Cuál es el propósito de la validación cruzada en el aprendizaje automático?",
          de: "Was ist der Zweck der Kreuzvalidierung im maschinellen Lernen?",
          nl: "Wat is het doel van kruisvalidatie in machine learning?"
        },
        options: [
          { en: "To assess model performance and generalizability using limited data efficiently", es: "Evaluar el rendimiento del modelo y la capacidad de generalización usando datos limitados de manera eficiente", de: "Modellleistung und Generalisierbarkeit mit begrenzten Daten effizient bewerten", nl: "Modelprestaties en generaliseerbaarheid beoordelen met beperkte data efficiënt" },
          { en: "To increase the amount of training data available", es: "Aumentar la cantidad de datos de entrenamiento disponibles", de: "Die Menge der verfügbaren Trainingsdaten erhöhen", nl: "De hoeveelheid beschikbare trainingsdata vergroten" },
          { en: "To convert supervised problems to unsupervised ones", es: "Convertir problemas supervisados en no supervisados", de: "Überwachte Probleme in unüberwachte umwandeln", nl: "Supervised problemen omzetten naar unsupervised problemen" },
          { en: "To eliminate overfitting completely", es: "Eliminar completamente el sobreajuste", de: "Überanpassung vollständig eliminieren", nl: "Overfitting volledig elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-validation divides the dataset into multiple folds, trains and tests the model on different combinations of these folds, providing a more robust estimate of model performance and helping detect overfitting.",
          es: "La validación cruzada divide el conjunto de datos en múltiples pliegues, entrena y prueba el modelo en diferentes combinaciones de estos pliegues, proporcionando una estimación más robusta del rendimiento del modelo y ayudando a detectar sobreajuste.",
          de: "Kreuzvalidierung teilt den Datensatz in mehrere Folds auf, trainiert und testet das Modell auf verschiedenen Kombinationen dieser Folds, wodurch eine robustere Schätzung der Modellleistung bereitgestellt und Überanpassung erkannt wird.",
          nl: "Kruisvalidatie verdeelt de dataset in meerdere folds, traint en test het model op verschillende combinaties van deze folds, wat een robuustere schatting van modelprestaties biedt en helpt bij het detecteren van overfitting."
        }
      },
      {
        question: {
          en: "What is the exploding gradient problem and how is it typically addressed?",
          es: "¿Qué es el problema del gradiente explosivo y cómo se aborda típicamente?",
          de: "Was ist das Problem des explodierenden Gradienten und wie wird es typischerweise angegangen?",
          nl: "Wat is het exploderende gradiënt probleem en hoe wordt dit doorgaans aangepakt?"
        },
        options: [
          { en: "Gradients become too large during training; addressed by gradient clipping", es: "Los gradientes se vuelven demasiado grandes durante el entrenamiento; se aborda mediante recorte de gradientes", de: "Gradienten werden während des Trainings zu groß; durch Gradient Clipping angegangen", nl: "Gradiënten worden te groot tijdens training; aangepakt door gradient clipping" },
          { en: "Training data increases exponentially; addressed by data sampling", es: "Los datos de entrenamiento aumentan exponencialmente; se aborda mediante muestreo de datos", de: "Trainingsdaten wachsen exponentiell; durch Datenstichproben angegangen", nl: "Trainingsdata neemt exponentieel toe; aangepakt door data sampling" },
          { en: "Model complexity grows uncontrollably; addressed by architecture pruning", es: "La complejidad del modelo crece incontrolablemente; se aborda mediante poda de arquitectura", de: "Modellkomplexität wächst unkontrolliert; durch Architektur-Pruning angegangen", nl: "Modelcomplexiteit groeit oncontroleerbaar; aangepakt door architectuur snoeien" },
          { en: "Memory usage increases dramatically; addressed by batch reduction", es: "El uso de memoria aumenta dramáticamente; se aborda mediante reducción de lotes", de: "Speicherverbrauch steigt dramatisch; durch Batch-Reduzierung angegangen", nl: "Geheugengebruik stijgt dramatisch; aangepakt door batch reductie" }
        ],
        correct: 0,
        explanation: {
          en: "The exploding gradient problem occurs when gradients become exponentially large during backpropagation, causing unstable training. Gradient clipping limits the magnitude of gradients to prevent this issue and ensure stable learning.",
          es: "El problema del gradiente explosivo ocurre cuando los gradientes se vuelven exponencialmente grandes durante la retropropagación, causando entrenamiento inestable. El recorte de gradientes limita la magnitud de los gradientes para prevenir este problema y asegurar aprendizaje estable.",
          de: "Das Problem des explodierenden Gradienten tritt auf, wenn Gradienten während der Rückpropagation exponentiell groß werden, was zu instabilem Training führt. Gradient Clipping begrenzt die Größe der Gradienten, um dieses Problem zu verhindern und stabiles Lernen zu gewährleisten.",
          nl: "Het exploderende gradiënt probleem treedt op wanneer gradiënten exponentieel groot worden tijdens backpropagation, wat instabiele training veroorzaakt. Gradient clipping beperkt de grootte van gradiënten om dit probleem te voorkomen en stabiel leren te waarborgen."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind support vector machines (SVMs)?",
          es: "¿Cuál es el principio fundamental detrás de las máquinas de vectores de soporte (SVM)?",
          de: "Was ist das grundlegende Prinzip hinter Support Vector Machines (SVMs)?",
          nl: "Wat is het fundamentele principe achter support vector machines (SVM's)?"
        },
        options: [
          { en: "Find the hyperplane that maximally separates classes with the largest margin", es: "Encontrar el hiperplano que separa maximalmente las clases con el margen más grande", de: "Die Hyperebene finden, die Klassen maximal mit dem größten Rand trennt", nl: "De hyperplane vinden die klassen maximaal scheidt met de grootste marge" },
          { en: "Minimize the number of misclassified training examples", es: "Minimizar el número de ejemplos de entrenamiento mal clasificados", de: "Die Anzahl falsch klassifizierter Trainingsbeispiele minimieren", nl: "Het aantal verkeerd geclassificeerde trainingsvoorbeelden minimaliseren" },
          { en: "Maximize the likelihood of the training data", es: "Maximizar la verosimilitud de los datos de entrenamiento", de: "Die Wahrscheinlichkeit der Trainingsdaten maximieren", nl: "De waarschijnlijkheid van de trainingsdata maximaliseren" },
          { en: "Create the most complex decision boundary possible", es: "Crear el límite de decisión más complejo posible", de: "Die komplexeste mögliche Entscheidungsgrenze erstellen", nl: "De meest complexe beslissingsgrens mogelijk creëren" }
        ],
        correct: 0,
        explanation: {
          en: "SVMs find the optimal hyperplane that separates different classes by maximizing the margin (distance) between the hyperplane and the nearest data points (support vectors) from each class, leading to better generalization.",
          es: "Las SVM encuentran el hiperplano óptimo que separa diferentes clases maximizando el margen (distancia) entre el hiperplano y los puntos de datos más cercanos (vectores de soporte) de cada clase, llevando a una mejor generalización.",
          de: "SVMs finden die optimale Hyperebene, die verschiedene Klassen trennt, indem sie den Rand (Abstand) zwischen der Hyperebene und den nächstgelegenen Datenpunkten (Stützvektoren) jeder Klasse maximieren, was zu besserer Generalisierung führt.",
          nl: "SVM's vinden de optimale hyperplane die verschillende klassen scheidt door de marge (afstand) tussen de hyperplane en de dichtstbijzijnde datapunten (support vectors) van elke klasse te maximaliseren, wat leidt tot betere generalisatie."
        }
      },
      {
        question: {
          en: "What is the key insight behind dimensionality reduction techniques like PCA?",
          es: "¿Cuál es la idea clave detrás de las técnicas de reducción de dimensionalidad como PCA?",
          de: "Was ist die Schlüsselerkenntnis hinter Dimensionsreduktionsverfahren wie PCA?",
          nl: "Wat is het belangrijkste inzicht achter dimensionaliteitsreductie technieken zoals PCA?"
        },
        options: [
          { en: "Most data variation can be captured in fewer dimensions using linear projections", es: "La mayoría de la variación de datos puede ser capturada en menos dimensiones usando proyecciones lineales", de: "Die meiste Datenvariation kann in weniger Dimensionen durch lineare Projektionen erfasst werden", nl: "De meeste datavariatie kan vastgelegd worden in minder dimensies met behulp van lineaire projecties" },
          { en: "Reducing dimensions always improves model accuracy", es: "Reducir dimensiones siempre mejora la precisión del modelo", de: "Dimensionsreduktion verbessert immer die Modellgenauigkeit", nl: "Dimensies verminderen verbetert altijd modelnauwkeurigheid" },
          { en: "High-dimensional data is always noisy and should be avoided", es: "Los datos de alta dimensionalidad siempre son ruidosos y deben evitarse", de: "Hochdimensionale Daten sind immer verrauscht und sollten vermieden werden", nl: "Hoog-dimensionale data is altijd ruis en moet vermeden worden" },
          { en: "All dimensions contribute equally to the data patterns", es: "Todas las dimensiones contribuyen igualmente a los patrones de datos", de: "Alle Dimensionen tragen gleichermaßen zu den Datenmustern bei", nl: "Alle dimensies dragen gelijk bij aan de datapatronen" }
        ],
        correct: 0,
        explanation: {
          en: "PCA identifies the principal components that capture the maximum variance in the data, allowing representation in fewer dimensions while preserving most of the important information. This helps combat the curse of dimensionality and improves computational efficiency.",
          es: "PCA identifica los componentes principales que capturan la máxima varianza en los datos, permitiendo representación en menos dimensiones mientras preserva la mayor parte de la información importante. Esto ayuda a combatir la maldición de la dimensionalidad y mejora la eficiencia computacional.",
          de: "PCA identifiziert die Hauptkomponenten, die die maximale Varianz in den Daten erfassen, was eine Darstellung in weniger Dimensionen ermöglicht, während der Großteil der wichtigen Information erhalten bleibt. Dies hilft gegen den Fluch der Dimensionalität und verbessert die Rechenseffizienz.",
          nl: "PCA identificeert de hoofdcomponenten die de maximale variantie in de data vastleggen, wat representatie in minder dimensies mogelijk maakt terwijl het meeste van de belangrijke informatie behouden blijft. Dit helpt tegen de vloek van de dimensionaliteit en verbetert computationele efficiëntie."
        }
      },
      {
        question: {
          en: "What distinguishes reinforcement learning from supervised and unsupervised learning?",
          es: "¿Qué distingue el aprendizaje por refuerzo del aprendizaje supervisado y no supervisado?",
          de: "Was unterscheidet verstärktes Lernen von überwachtem und unüberwachtem Lernen?",
          nl: "Wat onderscheidt reinforcement learning van supervised en unsupervised learning?"
        },
        options: [
          { en: "Learning through trial and error with rewards and penalties from environment interaction", es: "Aprender mediante prueba y error con recompensas y penalizaciones de la interacción con el entorno", de: "Lernen durch Versuch und Irrtum mit Belohnungen und Strafen aus Umgebungsinteraktion", nl: "Leren door trial and error met beloningen en straffen uit omgevingsinteractie" },
          { en: "Using only numerical data for training", es: "Usar solo datos numéricos para entrenamiento", de: "Nur numerische Daten für das Training verwenden", nl: "Alleen numerieke data gebruiken voor training" },
          { en: "Requiring more computational resources than other methods", es: "Requerir más recursos computacionales que otros métodos", de: "Mehr Rechenressourcen als andere Methoden benötigen", nl: "Meer computationele middelen vereisen dan andere methoden" },
          { en: "Working only with discrete action spaces", es: "Trabajar solo con espacios de acción discretos", de: "Nur mit diskreten Aktionsräumen arbeiten", nl: "Alleen werken met discrete actieruimtes" }
        ],
        correct: 0,
        explanation: {
          en: "Reinforcement learning agents learn by interacting with an environment, receiving rewards or penalties for their actions, and discovering optimal behavior through exploration and exploitation, unlike supervised learning (which uses labeled examples) or unsupervised learning (which finds patterns in data).",
          es: "Los agentes de aprendizaje por refuerzo aprenden interactuando con un entorno, recibiendo recompensas o penalizaciones por sus acciones, y descubriendo comportamiento óptimo a través de exploración y explotación, a diferencia del aprendizaje supervisado (que usa ejemplos etiquetados) o aprendizaje no supervisado (que encuentra patrones en datos).",
          de: "Verstärkende Lern-Agenten lernen durch Interaktion mit einer Umgebung, erhalten Belohnungen oder Strafen für ihre Aktionen und entdecken optimales Verhalten durch Erkundung und Ausnutzung, im Gegensatz zu überwachtem Lernen (das beschriftete Beispiele verwendet) oder unüberwachtem Lernen (das Muster in Daten findet).",
          nl: "Reinforcement learning agenten leren door interactie met een omgeving, ontvangen beloningen of straffen voor hun acties, en ontdekken optimaal gedrag door exploratie en exploitatie, in tegenstelling tot supervised learning (dat gelabelde voorbeelden gebruikt) of unsupervised learning (dat patronen in data vindt)."
        }
      },
      {
        question: {
          en: "What is the purpose of attention mechanisms in neural networks?",
          es: "¿Cuál es el propósito de los mecanismos de atención en las redes neuronales?",
          de: "Was ist der Zweck von Aufmerksamkeitsmechanismen in neuronalen Netzwerken?",
          nl: "Wat is het doel van aandachtsmechanismen in neurale netwerken?"
        },
        options: [
          { en: "To dynamically focus on relevant parts of the input when making predictions", es: "Enfocarse dinámicamente en partes relevantes de la entrada al hacer predicciones", de: "Sich dynamisch auf relevante Teile der Eingabe konzentrieren bei Vorhersagen", nl: "Dynamisch focussen op relevante delen van de input bij het maken van voorspellingen" },
          { en: "To reduce the computational complexity of neural networks", es: "Reducir la complejidad computacional de las redes neuronales", de: "Die Rechenkomplexität neuronaler Netzwerke reduzieren", nl: "De computationele complexiteit van neurale netwerken verminderen" },
          { en: "To eliminate the need for backpropagation", es: "Eliminar la necesidad de retropropagación", de: "Die Notwendigkeit der Rückpropagation eliminieren", nl: "De noodzaak voor backpropagation elimineren" },
          { en: "To convert neural networks into decision trees", es: "Convertir redes neuronales en árboles de decisión", de: "Neuronale Netzwerke in Entscheidungsbäume umwandeln", nl: "Neurale netwerken omzetten naar beslisbomen" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms allow models to selectively focus on different parts of the input sequence, assigning different weights to different elements based on their relevance to the current context, improving performance on tasks involving long sequences.",
          es: "Los mecanismos de atención permiten a los modelos enfocarse selectivamente en diferentes partes de la secuencia de entrada, asignando diferentes pesos a diferentes elementos basándose en su relevancia al contexto actual, mejorando el rendimiento en tareas que involucran secuencias largas.",
          de: "Aufmerksamkeitsmechanismen ermöglichen es Modellen, sich selektiv auf verschiedene Teile der Eingabesequenz zu konzentrieren, verschiedene Gewichte verschiedenen Elementen basierend auf ihrer Relevanz für den aktuellen Kontext zuzuweisen, wodurch die Leistung bei Aufgaben mit langen Sequenzen verbessert wird.",
          nl: "Aandachtsmechanismen stellen modellen in staat om selectief te focussen op verschillende delen van de invoersequentie, verschillende gewichten toe te kennen aan verschillende elementen gebaseerd op hun relevantie voor de huidige context, wat de prestaties verbetert bij taken met lange sequenties."
        }
      },
      {
        question: {
          en: "What is the difference between batch gradient descent and stochastic gradient descent?",
          es: "¿Cuál es la diferencia entre el descenso de gradiente por lotes y el descenso de gradiente estocástico?",
          de: "Was ist der Unterschied zwischen Batch-Gradientenabstieg und stochastischem Gradientenabstieg?",
          nl: "Wat is het verschil tussen batch gradient descent en stochastic gradient descent?"
        },
        options: [
          { en: "Batch uses entire dataset per update, stochastic uses one sample per update", es: "Por lotes usa todo el conjunto de datos por actualización, estocástico usa una muestra por actualización", de: "Batch verwendet den gesamten Datensatz pro Update, stochastisch verwendet eine Stichprobe pro Update", nl: "Batch gebruikt hele dataset per update, stochastic gebruikt één sample per update" },
          { en: "Batch is faster than stochastic gradient descent", es: "Por lotes es más rápido que el descenso de gradiente estocástico", de: "Batch ist schneller als stochastischer Gradientenabstieg", nl: "Batch is sneller dan stochastic gradient descent" },
          { en: "Batch only works with neural networks, stochastic works with any algorithm", es: "Por lotes solo funciona con redes neuronales, estocástico funciona con cualquier algoritmo", de: "Batch funktioniert nur mit neuronalen Netzwerken, stochastisch funktioniert mit jedem Algorithmus", nl: "Batch werkt alleen met neurale netwerken, stochastic werkt met elk algoritme" },
          { en: "Batch guarantees global minimum, stochastic only finds local minimum", es: "Por lotes garantiza mínimo global, estocástico solo encuentra mínimo local", de: "Batch garantiert globales Minimum, stochastisch findet nur lokales Minimum", nl: "Batch garandeert globaal minimum, stochastic vindt alleen lokaal minimum" }
        ],
        correct: 0,
        explanation: {
          en: "Batch gradient descent computes gradients using the entire training dataset for each parameter update, providing stable but slow convergence. Stochastic gradient descent uses one training example at a time, leading to faster but noisier updates.",
          es: "El descenso de gradiente por lotes calcula gradientes usando todo el conjunto de datos de entrenamiento para cada actualización de parámetros, proporcionando convergencia estable pero lenta. El descenso de gradiente estocástico usa un ejemplo de entrenamiento a la vez, llevando a actualizaciones más rápidas pero más ruidosas.",
          de: "Batch-Gradientenabstieg berechnet Gradienten unter Verwendung des gesamten Trainingsdatensatzes für jede Parameteraktualisierung, was stabile aber langsame Konvergenz bietet. Stochastischer Gradientenabstieg verwendet jeweils ein Trainingsbeispiel, was zu schnelleren aber rauschigeren Updates führt.",
          nl: "Batch gradient descent berekent gradiënten met behulp van de hele trainingsdataset voor elke parameterupdate, wat stabiele maar langzame convergentie biedt. Stochastic gradient descent gebruikt één trainingsvoorbeeld tegelijk, wat leidt tot snellere maar ruisigere updates."
        }
      },
      {
        question: {
          en: "What is the key concept behind generative adversarial networks (GANs)?",
          es: "¿Cuál es el concepto clave detrás de las redes generativas antagónicas (GAN)?",
          de: "Was ist das Schlüsselkonzept hinter Generative Adversarial Networks (GANs)?",
          nl: "Wat is het belangrijkste concept achter generative adversarial networks (GAN's)?"
        },
        options: [
          { en: "Two networks compete: generator creates fake data, discriminator tries to detect it", es: "Dos redes compiten: el generador crea datos falsos, el discriminador trata de detectarlos", de: "Zwei Netzwerke konkurrieren: Generator erstellt gefälschte Daten, Diskriminator versucht sie zu erkennen", nl: "Twee netwerken concurreren: generator creëert nep-data, discriminator probeert het te detecteren" },
          { en: "Multiple generators work together to create better samples", es: "Múltiples generadores trabajan juntos para crear mejores muestras", de: "Mehrere Generatoren arbeiten zusammen, um bessere Stichproben zu erstellen", nl: "Meerdere generators werken samen om betere samples te creëren" },
          { en: "One network generates data while another compresses it", es: "Una red genera datos mientras otra los comprime", de: "Ein Netzwerk generiert Daten, während ein anderes sie komprimiert", nl: "Één netwerk genereert data terwijl een ander het comprimeert" },
          { en: "Adversarial training only works with image data", es: "El entrenamiento adversarial solo funciona con datos de imágenes", de: "Adversariales Training funktioniert nur mit Bilddaten", nl: "Adversarial training werkt alleen met afbeeldingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "GANs consist of a generator network that learns to create realistic fake data and a discriminator network that learns to distinguish between real and fake data. They train in an adversarial process where each network improves by trying to outperform the other.",
          es: "Las GAN consisten en una red generadora que aprende a crear datos falsos realistas y una red discriminadora que aprende a distinguir entre datos reales y falsos. Se entrenan en un proceso adversarial donde cada red mejora tratando de superar a la otra.",
          de: "GANs bestehen aus einem Generatornetzwerk, das lernt, realistische gefälschte Daten zu erstellen, und einem Diskriminatornetzwerk, das lernt, zwischen echten und gefälschten Daten zu unterscheiden. Sie trainieren in einem adversariellen Prozess, bei dem sich jedes Netzwerk verbessert, indem es versucht, das andere zu übertreffen.",
          nl: "GAN's bestaan uit een generator netwerk dat leert realistische nep-data te creëren en een discriminator netwerk dat leert onderscheid te maken tussen echte en nep-data. Ze trainen in een adversarial proces waarbij elk netwerk verbetert door te proberen het andere te overtreffen."
        }
      },
      {
        question: {
          en: "What is the curse of dimensionality in machine learning?",
          es: "¿Qué es la maldición de la dimensionalidad en el aprendizaje automático?",
          de: "Was ist der Fluch der Dimensionalität im maschinellen Lernen?",
          nl: "Wat is de vloek van de dimensionaliteit in machine learning?"
        },
        options: [
          { en: "Performance degrades as feature space dimensions increase due to data sparsity", es: "El rendimiento se degrada cuando las dimensiones del espacio de características aumentan debido a la escasez de datos", de: "Leistung verschlechtert sich, wenn Merkmalsraumdimensionen aufgrund von Datenspärlichkeit zunehmen", nl: "Prestaties verslechteren naarmate feature space dimensies toenemen door data spaarheid" },
          { en: "Computing time increases exponentially with more features", es: "El tiempo de computación aumenta exponencialmente con más características", de: "Rechenzeit steigt exponentiell mit mehr Merkmalen", nl: "Rekentijd neemt exponentieel toe met meer features" },
          { en: "Models become too complex to interpret", es: "Los modelos se vuelven demasiado complejos para interpretar", de: "Modelle werden zu komplex für die Interpretation", nl: "Modellen worden te complex om te interpreteren" },
          { en: "Memory requirements grow beyond system capabilities", es: "Los requisitos de memoria crecen más allá de las capacidades del sistema", de: "Speicheranforderungen wachsen über Systemkapazitäten hinaus", nl: "Geheugenvereisten groeien voorbij systeemmogelijkheden" }
        ],
        correct: 0,
        explanation: {
          en: "In high-dimensional spaces, data becomes increasingly sparse, making it difficult to find meaningful patterns or similarities. Distance metrics become less discriminative, and more data is needed to maintain the same density of samples in the feature space.",
          es: "En espacios de alta dimensionalidad, los datos se vuelven cada vez más escasos, dificultando encontrar patrones o similitudes significativas. Las métricas de distancia se vuelven menos discriminativas, y se necesitan más datos para mantener la misma densidad de muestras en el espacio de características.",
          de: "In hochdimensionalen Räumen werden Daten zunehmend spärlich, wodurch es schwierig wird, bedeutungsvolle Muster oder Ähnlichkeiten zu finden. Distanzmetriken werden weniger diskriminativ, und mehr Daten sind erforderlich, um die gleiche Dichte von Stichproben im Merkmalsraum zu erhalten.",
          nl: "In hoog-dimensionale ruimten wordt data steeds meer verspreid, waardoor het moeilijk wordt om betekenisvolle patronen of overeenkomsten te vinden. Afstandsmetrieken worden minder discriminatief, en er is meer data nodig om dezelfde dichtheid van samples in de feature space te behouden."
        }
      },
      {
        question: {
          en: "What is transfer learning and why is it important in deep learning?",
          es: "¿Qué es el aprendizaje por transferencia y por qué es importante en el aprendizaje profundo?",
          de: "Was ist Transfer Learning und warum ist es wichtig im Deep Learning?",
          nl: "Wat is transfer learning en waarom is het belangrijk in deep learning?"
        },
        options: [
          { en: "Using pre-trained models as starting points for new tasks to reduce training time and data requirements", es: "Usar modelos preentrenados como puntos de partida para nuevas tareas para reducir tiempo de entrenamiento y requisitos de datos", de: "Vortrainierte Modelle als Ausgangspunkte für neue Aufgaben verwenden, um Trainingszeit und Datenanforderungen zu reduzieren", nl: "Voorgetrainde modellen gebruiken als startpunten voor nieuwe taken om trainingstijd en datavereisten te verminderen" },
          { en: "Moving data between different storage systems", es: "Mover datos entre diferentes sistemas de almacenamiento", de: "Daten zwischen verschiedenen Speichersystemen bewegen", nl: "Data verplaatsen tussen verschillende opslagsystemen" },
          { en: "Converting models from one programming language to another", es: "Convertir modelos de un lenguaje de programación a otro", de: "Modelle von einer Programmiersprache in eine andere konvertieren", nl: "Modellen omzetten van de ene programmeertaal naar de andere" },
          { en: "Sharing computational resources across multiple training jobs", es: "Compartir recursos computacionales a través de múltiples trabajos de entrenamiento", de: "Rechenressourcen über mehrere Trainingsjobs teilen", nl: "Computationele middelen delen over meerdere training jobs" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning leverages knowledge gained from pre-trained models on large datasets and adapts them to new, often related tasks. This approach significantly reduces training time, data requirements, and computational costs while often achieving better performance than training from scratch.",
          es: "El aprendizaje por transferencia aprovecha el conocimiento obtenido de modelos preentrenados en grandes conjuntos de datos y los adapta a tareas nuevas, a menudo relacionadas. Este enfoque reduce significativamente el tiempo de entrenamiento, los requisitos de datos y los costos computacionales, a menudo logrando mejor rendimiento que entrenar desde cero.",
          de: "Transfer Learning nutzt Wissen aus vortrainierten Modellen auf großen Datensätzen und passt sie an neue, oft verwandte Aufgaben an. Dieser Ansatz reduziert erheblich Trainingszeit, Datenanforderungen und Rechenkosten und erzielt oft bessere Leistung als Training von Grund auf.",
          nl: "Transfer learning maakt gebruik van kennis verkregen uit voorgetrainde modellen op grote datasets en past deze aan voor nieuwe, vaak gerelateerde taken. Deze aanpak vermindert aanzienlijk trainingstijd, datavereisten en computationele kosten en behaalt vaak betere prestaties dan training vanaf nul."
        }
      },
      {
        question: {
          en: "What is the purpose of dropout regularization in neural networks?",
          es: "¿Cuál es el propósito de la regularización por dropout en las redes neuronales?",
          de: "Was ist der Zweck der Dropout-Regularisierung in neuronalen Netzwerken?",
          nl: "Wat is het doel van dropout regularisatie in neurale netwerken?"
        },
        options: [
          { en: "Randomly deactivate neurons during training to prevent overfitting and co-adaptation", es: "Desactivar aleatoriamente neuronas durante el entrenamiento para prevenir sobreajuste y co-adaptación", de: "Zufällig Neuronen während des Trainings deaktivieren, um Überanpassung und Ko-Adaptation zu verhindern", nl: "Willekeurig neuronen deactiveren tijdens training om overfitting en co-adaptatie te voorkomen" },
          { en: "Remove neurons that contribute least to the final output", es: "Eliminar neuronas que menos contribuyen a la salida final", de: "Neuronen entfernen, die am wenigsten zur finalen Ausgabe beitragen", nl: "Neuronen verwijderen die het minst bijdragen aan de finale output" },
          { en: "Decrease the learning rate gradually during training", es: "Disminuir gradualmente la tasa de aprendizaje durante el entrenamiento", de: "Die Lernrate während des Trainings allmählich verringern", nl: "De leersnelheid geleidelijk verlagen tijdens training" },
          { en: "Add noise to the input data to increase robustness", es: "Agregar ruido a los datos de entrada para aumentar la robustez", de: "Rauschen zu den Eingabedaten hinzufügen, um die Robustheit zu erhöhen", nl: "Ruis toevoegen aan de invoerdata om robuustheid te vergroten" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout randomly sets a fraction of neurons to zero during training, forcing the network to not rely on specific neurons and preventing co-adaptation. This creates an ensemble effect and improves generalization by reducing overfitting.",
          es: "El dropout pone aleatoriamente una fracción de neuronas en cero durante el entrenamiento, forzando a la red a no depender de neuronas específicas y previniendo la co-adaptación. Esto crea un efecto de ensemble y mejora la generalización reduciendo el sobreajuste.",
          de: "Dropout setzt zufällig einen Bruchteil der Neuronen während des Trainings auf null, wodurch das Netzwerk gezwungen wird, nicht auf spezifische Neuronen zu vertrauen und Ko-Adaptation verhindert wird. Dies schafft einen Ensemble-Effekt und verbessert die Generalisierung durch Reduzierung der Überanpassung.",
          nl: "Dropout stelt willekeurig een fractie van neuronen in op nul tijdens training, waardoor het netwerk wordt gedwongen niet te vertrouwen op specifieke neuronen en co-adaptatie wordt voorkomen. Dit creëert een ensemble effect en verbetert generalisatie door overfitting te verminderen."
        }
      },
      {
        question: {
          en: "What is the difference between parametric and non-parametric machine learning algorithms?",
          es: "¿Cuál es la diferencia entre algoritmos de aprendizaje automático paramétricos y no paramétricos?",
          de: "Was ist der Unterschied zwischen parametrischen und nicht-parametrischen Machine-Learning-Algorithmen?",
          nl: "Wat is het verschil tussen parametrische en niet-parametrische machine learning algoritmen?"
        },
        options: [
          { en: "Parametric algorithms assume a fixed functional form, non-parametric adapt to data complexity", es: "Los algoritmos paramétricos asumen una forma funcional fija, los no paramétricos se adaptan a la complejidad de los datos", de: "Parametrische Algorithmen nehmen eine feste Funktionsform an, nicht-parametrische passen sich an die Datenkomplexität an", nl: "Parametrische algoritmen veronderstellen een vaste functionele vorm, niet-parametrische passen zich aan aan datacomplexiteit" },
          { en: "Parametric algorithms are always more accurate than non-parametric", es: "Los algoritmos paramétricos son siempre más precisos que los no paramétricos", de: "Parametrische Algorithmen sind immer genauer als nicht-parametrische", nl: "Parametrische algoritmen zijn altijd nauwkeuriger dan niet-parametrische" },
          { en: "Parametric algorithms work only with continuous variables", es: "Los algoritmos paramétricos funcionan solo con variables continuas", de: "Parametrische Algorithmen funktionieren nur mit kontinuierlichen Variablen", nl: "Parametrische algoritmen werken alleen met continue variabelen" },
          { en: "Parametric algorithms require more training data than non-parametric", es: "Los algoritmos paramétricos requieren más datos de entrenamiento que los no paramétricos", de: "Parametrische Algorithmen benötigen mehr Trainingsdaten als nicht-parametrische", nl: "Parametrische algoritmen vereisen meer trainingsdata dan niet-parametrische" }
        ],
        correct: 0,
        explanation: {
          en: "Parametric algorithms make strong assumptions about the functional form of the relationship between inputs and outputs (e.g., linear regression assumes linearity). Non-parametric algorithms make fewer assumptions and can adapt their complexity to the data.",
          es: "Los algoritmos paramétricos hacen suposiciones fuertes sobre la forma funcional de la relación entre entradas y salidas (ej., la regresión lineal asume linealidad). Los algoritmos no paramétricos hacen menos suposiciones y pueden adaptar su complejidad a los datos.",
          de: "Parametrische Algorithmen machen starke Annahmen über die funktionale Form der Beziehung zwischen Eingaben und Ausgaben (z.B. lineare Regression nimmt Linearität an). Nicht-parametrische Algorithmen machen weniger Annahmen und können ihre Komplexität an die Daten anpassen.",
          nl: "Parametrische algoritmen maken sterke aannames over de functionele vorm van de relatie tussen inputs en outputs (bijv. lineaire regressie veronderstelt lineariteit). Niet-parametrische algoritmen maken minder aannames en kunnen hun complexiteit aanpassen aan de data."
        }
      },
      {
        question: {
          en: "What is the concept of feature engineering in machine learning?",
          es: "¿Qué es el concepto de ingeniería de características en el aprendizaje automático?",
          de: "Was ist das Konzept des Feature Engineering im maschinellen Lernen?",
          nl: "Wat is het concept van feature engineering in machine learning?"
        },
        options: [
          { en: "Creating, selecting, and transforming input variables to improve model performance", es: "Crear, seleccionar y transformar variables de entrada para mejorar el rendimiento del modelo", de: "Eingabevariablen erstellen, auswählen und transformieren, um die Modellleistung zu verbessern", nl: "Input variabelen creëren, selecteren en transformeren om modelprestaties te verbeteren" },
          { en: "Designing the architecture of neural networks", es: "Diseñar la arquitectura de las redes neuronales", de: "Die Architektur neuronaler Netzwerke entwerfen", nl: "De architectuur van neurale netwerken ontwerpen" },
          { en: "Optimizing hyperparameters automatically", es: "Optimizar hiperparámetros automáticamente", de: "Hyperparameter automatisch optimieren", nl: "Hyperparameters automatisch optimaliseren" },
          { en: "Converting algorithms between different programming languages", es: "Convertir algoritmos entre diferentes lenguajes de programación", de: "Algorithmen zwischen verschiedenen Programmiersprachen konvertieren", nl: "Algoritmen omzetten tussen verschillende programmeertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Feature engineering involves creating meaningful representations of raw data through transformation, combination, or selection of features. Good feature engineering can significantly improve model performance by making patterns more apparent to the learning algorithm.",
          es: "La ingeniería de características involucra crear representaciones significativas de datos crudos a través de transformación, combinación o selección de características. Una buena ingeniería de características puede mejorar significativamente el rendimiento del modelo haciendo los patrones más aparentes al algoritmo de aprendizaje.",
          de: "Feature Engineering beinhaltet das Erstellen bedeutungsvoller Darstellungen von Rohdaten durch Transformation, Kombination oder Auswahl von Merkmalen. Gutes Feature Engineering kann die Modellleistung erheblich verbessern, indem es Muster für den Lernalgorithmus offensichtlicher macht.",
          nl: "Feature engineering houdt in het creëren van betekenisvolle representaties van ruwe data door transformatie, combinatie of selectie van features. Goede feature engineering kan modelprestaties aanzienlijk verbeteren door patronen duidelijker te maken voor het leeralgoritme."
        }
      },
      {
        question: {
          en: "What is ensemble learning and what are its main advantages?",
          es: "¿Qué es el aprendizaje de ensemble y cuáles son sus principales ventajas?",
          de: "Was ist Ensemble-Lernen und was sind seine Hauptvorteile?",
          nl: "Wat is ensemble learning en wat zijn de belangrijkste voordelen?"
        },
        options: [
          { en: "Combining multiple models to make better predictions through diversity and error reduction", es: "Combinar múltiples modelos para hacer mejores predicciones a través de diversidad y reducción de errores", de: "Mehrere Modelle kombinieren, um bessere Vorhersagen durch Vielfalt und Fehlerreduktion zu machen", nl: "Meerdere modellen combineren om betere voorspellingen te maken door diversiteit en foutreductie" },
          { en: "Training one very large model instead of multiple smaller ones", es: "Entrenar un modelo muy grande en lugar de múltiples más pequeños", de: "Ein sehr großes Modell statt mehrerer kleinerer trainieren", nl: "Één zeer groot model trainen in plaats van meerdere kleinere" },
          { en: "Using different datasets for training the same model", es: "Usar diferentes conjuntos de datos para entrenar el mismo modelo", de: "Verschiedene Datensätze zum Trainieren desselben Modells verwenden", nl: "Verschillende datasets gebruiken voor het trainen van hetzelfde model" },
          { en: "Sequentially training models where each improves on the last", es: "Entrenar modelos secuencialmente donde cada uno mejora sobre el último", de: "Modelle sequenziell trainieren, wobei jedes das letzte verbessert", nl: "Modellen sequentieel trainen waarbij elk verbetert op het laatste" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble learning combines predictions from multiple models to create a stronger predictor than any individual model. Benefits include reduced overfitting, improved generalization, and better performance through the wisdom of crowds principle.",
          es: "El aprendizaje de ensemble combina predicciones de múltiples modelos para crear un predictor más fuerte que cualquier modelo individual. Los beneficios incluyen reducción del sobreajuste, mejor generalización y mejor rendimiento a través del principio de la sabiduría de las multitudes.",
          de: "Ensemble-Lernen kombiniert Vorhersagen mehrerer Modelle, um einen stärkeren Prädiktor als jedes einzelne Modell zu erstellen. Vorteile umfassen reduzierte Überanpassung, verbesserte Generalisierung und bessere Leistung durch das Prinzip der Schwarmintelligenz.",
          nl: "Ensemble learning combineert voorspellingen van meerdere modellen om een sterkere voorspeller te creëren dan elk individueel model. Voordelen omvatten verminderde overfitting, verbeterde generalisatie en betere prestaties door het wijsheid van de massa principe."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem's counterpart and primary cause in modern architectures?",
          es: "¿Cuál es la contraparte del problema del gradiente que desaparece y la causa principal en arquitecturas modernas?",
          de: "Was ist das Gegenstück zum Problem des verschwindenden Gradienten und die Hauptursache in modernen Architekturen?",
          nl: "Wat is de tegenhanger van het verdwijnende gradiënt probleem en de hoofdoorzaak in moderne architecturen?"
        },
        options: [
          { en: "Exploding gradients caused by poor weight initialization and lack of gradient clipping", es: "Gradientes explosivos causados por mala inicialización de pesos y falta de recorte de gradientes", de: "Explodierende Gradienten durch schlechte Gewichtsinitialisierung und fehlende Gradientenbegrenzung", nl: "Exploderende gradiënten veroorzaakt door slechte gewichtinitialisatie en gebrek aan gradient clipping" },
          { en: "Gradient overflow due to excessive learning rates", es: "Desbordamiento de gradientes debido a tasas de aprendizaje excesivas", de: "Gradientenüberlauf aufgrund übermäßiger Lernraten", nl: "Gradiënt overflow door excessieve leersnelheden" },
          { en: "Memory saturation from storing too many gradients", es: "Saturación de memoria por almacenar demasiados gradientes", de: "Speichersättigung durch Speicherung zu vieler Gradienten", nl: "Geheugenverzadiging door het opslaan van te veel gradiënten" },
          { en: "Computational bottlenecks in gradient computation", es: "Cuellos de botella computacionales en el cálculo de gradientes", de: "Rechnerische Engpässe bei der Gradientenberechnung", nl: "Computationele knelpunten in gradiënt berekening" }
        ],
        correct: 0,
        explanation: {
          en: "The exploding gradient problem is the counterpart to vanishing gradients, where gradients become exponentially large during backpropagation. This is often caused by poor weight initialization, deep networks without proper normalization, or high learning rates, and is addressed through gradient clipping and proper initialization schemes.",
          es: "El problema del gradiente explosivo es la contraparte de los gradientes que desaparecen, donde los gradientes se vuelven exponencialmente grandes durante la retropropagación. Esto a menudo es causado por mala inicialización de pesos, redes profundas sin normalización adecuada, o tasas de aprendizaje altas, y se aborda a través del recorte de gradientes y esquemas de inicialización adecuados.",
          de: "Das Problem der explodierenden Gradienten ist das Gegenstück zu verschwindenden Gradienten, bei dem Gradienten während der Rückpropagation exponentiell groß werden. Dies wird oft durch schlechte Gewichtsinitialisierung, tiefe Netzwerke ohne ordnungsgemäße Normalisierung oder hohe Lernraten verursacht und durch Gradientenbegrenzung und ordnungsgemäße Initialisierungsschemata angegangen.",
          nl: "Het exploderende gradiënt probleem is de tegenhanger van verdwijnende gradiënten, waarbij gradiënten exponentieel groot worden tijdens backpropagation. Dit wordt vaak veroorzaakt door slechte gewichtinitialisatie, diepe netwerken zonder juiste normalisatie, of hoge leersnelheden, en wordt aangepakt door gradient clipping en juiste initialisatieschema's."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind backpropagation in neural networks?",
          es: "¿Cuál es el principio fundamental detrás de la retropropagación en las redes neuronales?",
          de: "Was ist das grundlegende Prinzip hinter der Rückpropagation in neuronalen Netzwerken?",
          nl: "Wat is het fundamentele principe achter backpropagation in neurale netwerken?"
        },
        options: [
          { en: "Chain rule of calculus to compute gradients by propagating errors backward through layers", es: "La regla de la cadena del cálculo para computar gradientes propagando errores hacia atrás a través de las capas", de: "Kettenregel der Analysis zur Berechnung von Gradienten durch Rückpropagation von Fehlern durch Schichten", nl: "Kettingregel van calculus om gradiënten te berekenen door fouten achterwaarts door lagen te propageren" },
          { en: "Forward propagation of signals through the network architecture", es: "Propagación hacia adelante de señales a través de la arquitectura de red", de: "Vorwärtspropagation von Signalen durch die Netzwerkarchitektur", nl: "Voorwaartse propagatie van signalen door de netwerkarchitectuur" },
          { en: "Random weight updates based on network performance", es: "Actualizaciones aleatorias de pesos basadas en el rendimiento de la red", de: "Zufällige Gewichtsupdates basierend auf Netzwerkleistung", nl: "Willekeurige gewichtupdates gebaseerd op netwerkprestaties" },
          { en: "Parallel processing of multiple training examples simultaneously", es: "Procesamiento paralelo de múltiples ejemplos de entrenamiento simultáneamente", de: "Parallele Verarbeitung mehrerer Trainingsbeispiele gleichzeitig", nl: "Parallelle verwerking van meerdere trainingsvoorbeelden tegelijkertijd" }
        ],
        correct: 0,
        explanation: {
          en: "Backpropagation uses the chain rule of calculus to efficiently compute the gradient of the loss function with respect to each weight in the network by propagating the error signal backward from the output layer to the input layer, enabling gradient-based optimization.",
          es: "La retropropagación usa la regla de la cadena del cálculo para computar eficientemente el gradiente de la función de pérdida con respecto a cada peso en la red propagando la señal de error hacia atrás desde la capa de salida hasta la capa de entrada, habilitando optimización basada en gradientes.",
          de: "Rückpropagation verwendet die Kettenregel der Analysis, um effizient den Gradienten der Verlustfunktion in Bezug auf jedes Gewicht im Netzwerk zu berechnen, indem das Fehlersignal von der Ausgabeschicht zur Eingabeschicht rückpropagiert wird, was gradientenbasierte Optimierung ermöglicht.",
          nl: "Backpropagation gebruikt de kettingregel van calculus om efficiënt de gradiënt van de verliesfunctie ten opzichte van elk gewicht in het netwerk te berekenen door het foutsignaal achterwaarts van de outputlaag naar de inputlaag te propageren, wat gradient-gebaseerde optimalisatie mogelijk maakt."
        }
      },
      {
        question: {
          en: "What distinguishes recurrent neural networks (RNNs) from feedforward networks?",
          es: "¿Qué distingue a las redes neuronales recurrentes (RNN) de las redes feedforward?",
          de: "Was unterscheidet rekurrente neuronale Netzwerke (RNNs) von Feedforward-Netzwerken?",
          nl: "Wat onderscheidt recurrente neurale netwerken (RNN's) van feedforward netwerken?"
        },
        options: [
          { en: "RNNs have connections that form cycles, allowing information to persist across time steps", es: "Las RNN tienen conexiones que forman ciclos, permitiendo que la información persista a través de pasos de tiempo", de: "RNNs haben Verbindungen, die Zyklen bilden und ermöglichen, dass Information über Zeitschritte hinweg bestehen bleibt", nl: "RNN's hebben verbindingen die cycli vormen, waardoor informatie kan blijven bestaan over tijdstappen" },
          { en: "RNNs process data faster than feedforward networks", es: "Las RNN procesan datos más rápido que las redes feedforward", de: "RNNs verarbeiten Daten schneller als Feedforward-Netzwerke", nl: "RNN's verwerken data sneller dan feedforward netwerken" },
          { en: "RNNs require less training data than feedforward networks", es: "Las RNN requieren menos datos de entrenamiento que las redes feedforward", de: "RNNs benötigen weniger Trainingsdaten als Feedforward-Netzwerke", nl: "RNN's vereisen minder trainingsdata dan feedforward netwerken" },
          { en: "RNNs can only work with numerical data", es: "Las RNN solo pueden trabajar con datos numéricos", de: "RNNs können nur mit numerischen Daten arbeiten", nl: "RNN's kunnen alleen werken met numerieke data" }
        ],
        correct: 0,
        explanation: {
          en: "RNNs contain recurrent connections that create cycles in the network, allowing them to maintain hidden states that capture information from previous time steps. This makes them suitable for sequential data like time series, text, and speech.",
          es: "Las RNN contienen conexiones recurrentes que crean ciclos en la red, permitiéndoles mantener estados ocultos que capturan información de pasos de tiempo previos. Esto las hace adecuadas para datos secuenciales como series de tiempo, texto y habla.",
          de: "RNNs enthalten rekurrente Verbindungen, die Zyklen im Netzwerk erstellen und es ihnen ermöglichen, versteckte Zustände zu erhalten, die Informationen aus vorherigen Zeitschritten erfassen. Dies macht sie geeignet für sequenzielle Daten wie Zeitreihen, Text und Sprache.",
          nl: "RNN's bevatten recurrente verbindingen die cycli in het netwerk creëren, waardoor ze verborgen toestanden kunnen behouden die informatie van vorige tijdstappen vastleggen. Dit maakt ze geschikt voor sequentiële data zoals tijdreeksen, tekst en spraak."
        }
      },
      {
        question: {
          en: "What is the key innovation of Long Short-Term Memory (LSTM) networks?",
          es: "¿Cuál es la innovación clave de las redes Long Short-Term Memory (LSTM)?",
          de: "Was ist die Schlüsselinnovation von Long Short-Term Memory (LSTM) Netzwerken?",
          nl: "Wat is de belangrijkste innovatie van Long Short-Term Memory (LSTM) netwerken?"
        },
        options: [
          { en: "Gating mechanisms that control information flow and solve the vanishing gradient problem", es: "Mecanismos de compuertas que controlan el flujo de información y resuelven el problema del gradiente que desaparece", de: "Gate-Mechanismen, die den Informationsfluss kontrollieren und das Problem des verschwindenden Gradienten lösen", nl: "Gate mechanismen die informatiestromen controleren en het verdwijnende gradiënt probleem oplossen" },
          { en: "Ability to process multiple types of input data simultaneously", es: "Capacidad para procesar múltiples tipos de datos de entrada simultáneamente", de: "Fähigkeit, mehrere Arten von Eingabedaten gleichzeitig zu verarbeiten", nl: "Vermogen om meerdere types invoerdata tegelijkertijd te verwerken" },
          { en: "Faster training compared to standard RNNs", es: "Entrenamiento más rápido comparado con RNN estándar", de: "Schnelleres Training im Vergleich zu Standard-RNNs", nl: "Snellere training vergeleken met standaard RNN's" },
          { en: "Reduced memory requirements during inference", es: "Requisitos de memoria reducidos durante la inferencia", de: "Reduzierte Speicheranforderungen während der Inferenz", nl: "Verminderde geheugenvereisten tijdens inferentie" }
        ],
        correct: 0,
        explanation: {
          en: "LSTMs introduce three gates (forget, input, and output) that control what information to keep, discard, or output from the cell state. This gating mechanism allows LSTMs to capture long-term dependencies and mitigate the vanishing gradient problem that affects standard RNNs.",
          es: "Las LSTM introducen tres compuertas (olvido, entrada y salida) que controlan qué información mantener, descartar o generar del estado celular. Este mecanismo de compuertas permite a las LSTM capturar dependencias a largo plazo y mitigar el problema del gradiente que desaparece que afecta a las RNN estándar.",
          de: "LSTMs führen drei Gates (Forget, Input und Output) ein, die kontrollieren, welche Informationen aus dem Zellzustand behalten, verworfen oder ausgegeben werden. Dieser Gate-Mechanismus ermöglicht es LSTMs, langfristige Abhängigkeiten zu erfassen und das Problem des verschwindenden Gradienten zu mildern, das Standard-RNNs betrifft.",
          nl: "LSTM's introduceren drie gates (vergeet, invoer en uitvoer) die controleren welke informatie behouden, weggegooid of uitgevoerd moet worden uit de celstaat. Dit gate mechanisme stelt LSTM's in staat om lange-termijn afhankelijkheden vast te leggen en het verdwijnende gradiënt probleem te verminderen dat standaard RNN's beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the primary goal of unsupervised learning algorithms?",
          es: "¿Cuál es el objetivo principal de los algoritmos de aprendizaje no supervisado?",
          de: "Was ist das Hauptziel von Algorithmen des unüberwachten Lernens?",
          nl: "Wat is het primaire doel van unsupervised learning algoritmen?"
        },
        options: [
          { en: "Discover hidden patterns and structures in data without labeled examples", es: "Descubrir patrones y estructuras ocultas en los datos sin ejemplos etiquetados", de: "Verborgene Muster und Strukturen in Daten ohne beschriftete Beispiele entdecken", nl: "Verborgen patronen en structuren in data ontdekken zonder gelabelde voorbeelden" },
          { en: "Predict future outcomes based on historical data", es: "Predecir resultados futuros basados en datos históricos", de: "Zukünftige Ergebnisse basierend auf historischen Daten vorhersagen", nl: "Toekomstige uitkomsten voorspellen gebaseerd op historische data" },
          { en: "Classify data points into predefined categories", es: "Clasificar puntos de datos en categorías predefinidas", de: "Datenpunkte in vordefinierte Kategorien klassifizieren", nl: "Datapunten classificeren in voorgedefinieerde categorieën" },
          { en: "Minimize prediction errors on test datasets", es: "Minimizar errores de predicción en conjuntos de datos de prueba", de: "Vorhersagefehler auf Testdatensätzen minimieren", nl: "Voorspellingsfouten op testdatasets minimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised learning aims to find hidden patterns, relationships, or structures in data without access to labeled examples or target outputs. Common tasks include clustering, dimensionality reduction, density estimation, and anomaly detection.",
          es: "El aprendizaje no supervisado tiene como objetivo encontrar patrones, relaciones o estructuras ocultas en los datos sin acceso a ejemplos etiquetados o salidas objetivo. Las tareas comunes incluyen agrupamiento, reducción de dimensionalidad, estimación de densidad y detección de anomalías.",
          de: "Unüberwachtes Lernen zielt darauf ab, verborgene Muster, Beziehungen oder Strukturen in Daten zu finden, ohne Zugang zu beschrifteten Beispielen oder Zielausgaben zu haben. Häufige Aufgaben umfassen Clustering, Dimensionsreduktion, Dichteschätzung und Anomalieerkennung.",
          nl: "Unsupervised learning heeft tot doel verborgen patronen, relaties of structuren in data te vinden zonder toegang tot gelabelde voorbeelden of doeloutputs. Veelvoorkomende taken omvatten clustering, dimensionaliteitsreductie, dichtheidsschatting en anomalie detectie."
        }
      },
      {
        question: {
          en: "What is the significance of the learning rate hyperparameter in gradient descent optimization?",
          es: "¿Cuál es la importancia del hiperparámetro de tasa de aprendizaje en la optimización del descenso de gradiente?",
          de: "Was ist die Bedeutung des Lernraten-Hyperparameters in der Gradientenabstieg-Optimierung?",
          nl: "Wat is de betekenis van de leersnelheid hyperparameter in gradient descent optimalisatie?"
        },
        options: [
          { en: "Controls step size for weight updates, affecting convergence speed and stability", es: "Controla el tamaño del paso para las actualizaciones de pesos, afectando la velocidad de convergencia y estabilidad", de: "Kontrolliert die Schrittgröße für Gewichtsupdates und beeinflusst Konvergenzgeschwindigkeit und Stabilität", nl: "Controleert stapgrootte voor gewichtupdates, beïnvloedt convergentiesnelheid en stabiliteit" },
          { en: "Determines the number of training epochs required", es: "Determina el número de épocas de entrenamiento requeridas", de: "Bestimmt die Anzahl der erforderlichen Trainingsepochen", nl: "Bepaalt het aantal benodigde trainingsepochen" },
          { en: "Sets the complexity of the model architecture", es: "Establece la complejidad de la arquitectura del modelo", de: "Legt die Komplexität der Modellarchitektur fest", nl: "Stelt de complexiteit van de modelarchitectuur in" },
          { en: "Controls the amount of regularization applied", es: "Controla la cantidad de regularización aplicada", de: "Kontrolliert die Menge der angewandten Regularisierung", nl: "Controleert de hoeveelheid regularisatie toegepast" }
        ],
        correct: 0,
        explanation: {
          en: "The learning rate determines how large steps the algorithm takes when updating weights. Too high a learning rate can cause overshooting and instability, while too low a rate leads to slow convergence. Finding the right learning rate is crucial for effective training.",
          es: "La tasa de aprendizaje determina qué tan grandes son los pasos que toma el algoritmo al actualizar los pesos. Una tasa de aprendizaje demasiado alta puede causar sobrepasar y inestabilidad, mientras que una tasa demasiado baja lleva a convergencia lenta. Encontrar la tasa de aprendizaje correcta es crucial para el entrenamiento efectivo.",
          de: "Die Lernrate bestimmt, wie große Schritte der Algorithmus beim Aktualisieren der Gewichte macht. Eine zu hohe Lernrate kann Überschwingen und Instabilität verursachen, während eine zu niedrige Rate zu langsamer Konvergenz führt. Die richtige Lernrate zu finden ist entscheidend für effektives Training.",
          nl: "De leersnelheid bepaalt hoe grote stappen het algoritme neemt bij het updaten van gewichten. Een te hoge leersnelheid kan overshoot en instabiliteit veroorzaken, terwijl een te lage snelheid leidt tot langzame convergentie. Het vinden van de juiste leersnelheid is cruciaal voor effectieve training."
        }
      },
      {
        question: {
          en: "What is the fundamental concept behind clustering algorithms in unsupervised learning?",
          es: "¿Cuál es el concepto fundamental detrás de los algoritmos de clustering en el aprendizaje no supervisado?",
          de: "Was ist das grundlegende Konzept hinter Clustering-Algorithmen im unüberwachten Lernen?",
          nl: "Wat is het fundamentele concept achter clustering algoritmen in unsupervised learning?"
        },
        options: [
          { en: "Grouping similar data points together based on feature similarity or distance metrics", es: "Agrupar puntos de datos similares juntos basándose en similitud de características o métricas de distancia", de: "Ähnliche Datenpunkte basierend auf Merkmalsähnlichkeit oder Distanzmetriken gruppieren", nl: "Soortgelijke datapunten groeperen gebaseerd op feature gelijkenis of afstandsmetrieken" },
          { en: "Predicting class labels for unknown data points", es: "Predecir etiquetas de clase para puntos de datos desconocidos", de: "Klassenlabels für unbekannte Datenpunkte vorhersagen", nl: "Klasselabels voorspellen voor onbekende datapunten" },
          { en: "Reducing the dimensionality of the feature space", es: "Reducir la dimensionalidad del espacio de características", de: "Die Dimensionalität des Merkmalsraums reduzieren", nl: "De dimensionaliteit van de feature ruimte verminderen" },
          { en: "Estimating probability distributions of the data", es: "Estimar distribuciones de probabilidad de los datos", de: "Wahrscheinlichkeitsverteilungen der Daten schätzen", nl: "Waarschijnlijkheidsverdelingen van de data schatten" }
        ],
        correct: 0,
        explanation: {
          en: "Clustering algorithms aim to partition data into groups (clusters) where data points within each cluster are more similar to each other than to points in other clusters. Common methods include k-means, hierarchical clustering, and DBSCAN.",
          es: "Los algoritmos de clustering buscan particionar datos en grupos (clusters) donde los puntos de datos dentro de cada cluster son más similares entre sí que a puntos en otros clusters. Los métodos comunes incluyen k-means, clustering jerárquico y DBSCAN.",
          de: "Clustering-Algorithmen zielen darauf ab, Daten in Gruppen (Cluster) zu partitionieren, wo Datenpunkte innerhalb jedes Clusters einander ähnlicher sind als Punkten in anderen Clustern. Häufige Methoden umfassen k-means, hierarchisches Clustering und DBSCAN.",
          nl: "Clustering algoritmen streven ernaar data te verdelen in groepen (clusters) waar datapunten binnen elke cluster meer op elkaar lijken dan op punten in andere clusters. Veelvoorkomende methoden omvatten k-means, hiërarchische clustering en DBSCAN."
        }
      },
      {
        question: {
          en: "What is the difference between online and batch learning in machine learning?",
          es: "¿Cuál es la diferencia entre aprendizaje en línea y por lotes en el aprendizaje automático?",
          de: "Was ist der Unterschied zwischen Online- und Batch-Lernen im maschinellen Lernen?",
          nl: "Wat is het verschil tussen online en batch learning in machine learning?"
        },
        options: [
          { en: "Online learning updates models continuously with new data, batch learning uses entire dataset at once", es: "El aprendizaje en línea actualiza modelos continuamente con nuevos datos, el aprendizaje por lotes usa todo el conjunto de datos de una vez", de: "Online-Lernen aktualisiert Modelle kontinuierlich mit neuen Daten, Batch-Lernen verwendet den gesamten Datensatz auf einmal", nl: "Online learning update modellen continu met nieuwe data, batch learning gebruikt hele dataset tegelijk" },
          { en: "Online learning is always faster than batch learning", es: "El aprendizaje en línea es siempre más rápido que el aprendizaje por lotes", de: "Online-Lernen ist immer schneller als Batch-Lernen", nl: "Online learning is altijd sneller dan batch learning" },
          { en: "Online learning works only with neural networks", es: "El aprendizaje en línea funciona solo con redes neuronales", de: "Online-Lernen funktioniert nur mit neuronalen Netzwerken", nl: "Online learning werkt alleen met neurale netwerken" },
          { en: "Online learning requires more memory than batch learning", es: "El aprendizaje en línea requiere más memoria que el aprendizaje por lotes", de: "Online-Lernen erfordert mehr Speicher als Batch-Lernen", nl: "Online learning vereist meer geheugen dan batch learning" }
        ],
        correct: 0,
        explanation: {
          en: "Online learning algorithms update the model incrementally as new data arrives, making them suitable for streaming data and changing environments. Batch learning processes the entire dataset at once before updating the model, which is more stable but less adaptive to changes.",
          es: "Los algoritmos de aprendizaje en línea actualizan el modelo incrementalmente cuando llegan nuevos datos, haciéndolos adecuados para datos de streaming y entornos cambiantes. El aprendizaje por lotes procesa todo el conjunto de datos de una vez antes de actualizar el modelo, lo que es más estable pero menos adaptativo a cambios.",
          de: "Online-Lernalgorithmen aktualisieren das Modell schrittweise, wenn neue Daten eintreffen, wodurch sie für Streaming-Daten und sich ändernde Umgebungen geeignet sind. Batch-Lernen verarbeitet den gesamten Datensatz auf einmal, bevor das Modell aktualisiert wird, was stabiler, aber weniger anpassungsfähig an Änderungen ist.",
          nl: "Online learning algoritmen updaten het model incrementeel wanneer nieuwe data arriveert, waardoor ze geschikt zijn voor streaming data en veranderende omgevingen. Batch learning verwerkt de hele dataset tegelijk voordat het model wordt geüpdatet, wat stabieler is maar minder adaptief aan veranderingen."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in deep neural networks?",
          es: "¿Qué es el problema del gradiente que se desvanece en las redes neuronales profundas?",
          de: "Was ist das Problem des verschwindenden Gradienten in tiefen neuronalen Netzwerken?",
          nl: "Wat is het vanishing gradient probleem in diepe neurale netwerken?"
        },
        options: [
          { en: "Gradients become progressively smaller in deeper layers, hindering learning", es: "Los gradientes se vuelven progresivamente más pequeños en capas más profundas, dificultando el aprendizaje", de: "Gradienten werden in tieferen Schichten progressiv kleiner und behindern das Lernen", nl: "Gradiënten worden geleidelijk kleiner in diepere lagen, wat leren belemmert" },
          { en: "The network loses all gradient information", es: "La red pierde toda la información del gradiente", de: "Das Netzwerk verliert alle Gradienteninformationen", nl: "Het netwerk verliest alle gradiënt informatie" },
          { en: "Gradients become too large and cause overflow", es: "Los gradientes se vuelven demasiado grandes y causan desbordamiento", de: "Gradienten werden zu groß und verursachen Überlauf", nl: "Gradiënten worden te groot en veroorzaken overflow" },
          { en: "The gradient calculation becomes computationally impossible", es: "El cálculo del gradiente se vuelve computacionalmente imposible", de: "Die Gradientenberechnung wird rechnerisch unmöglich", nl: "De gradiënt berekening wordt computationeel onmogelijk" }
        ],
        correct: 0,
        explanation: {
          en: "The vanishing gradient problem occurs when gradients become exponentially smaller as they propagate backward through deep networks during backpropagation. This makes it difficult for early layers to learn effectively, as their weight updates become negligibly small.",
          es: "El problema del gradiente que se desvanece ocurre cuando los gradientes se vuelven exponencialmente más pequeños mientras se propagan hacia atrás a través de redes profundas durante la retropropagación. Esto hace difícil que las capas tempranas aprendan efectivamente, ya que sus actualizaciones de peso se vuelven insignificantemente pequeñas.",
          de: "Das Problem des verschwindenden Gradienten tritt auf, wenn Gradienten exponentiell kleiner werden, während sie sich während der Rückwärtspropagation durch tiefe Netzwerke rückwärts ausbreiten. Dies macht es für frühe Schichten schwierig, effektiv zu lernen, da ihre Gewichtsaktualisierungen vernachlässigbar klein werden.",
          nl: "Het vanishing gradient probleem treedt op wanneer gradiënten exponentieel kleiner worden terwijl ze zich achterwaarts door diepe netwerken verspreiden tijdens backpropagation. Dit maakt het moeilijk voor vroege lagen om effectief te leren, omdat hun gewicht updates verwaarloosbaar klein worden."
        }
      },
      {
        question: {
          en: "What is the difference between bagging and boosting ensemble methods?",
          es: "¿Cuál es la diferencia entre los métodos de conjunto bagging y boosting?",
          de: "Was ist der Unterschied zwischen Bagging- und Boosting-Ensemble-Methoden?",
          nl: "Wat is het verschil tussen bagging en boosting ensemble methoden?"
        },
        options: [
          { en: "Bagging trains models in parallel on bootstrap samples, boosting trains models sequentially focusing on previous errors", es: "Bagging entrena modelos en paralelo en muestras bootstrap, boosting entrena modelos secuencialmente enfocándose en errores previos", de: "Bagging trainiert Modelle parallel auf Bootstrap-Stichproben, Boosting trainiert Modelle sequenziell und konzentriert sich auf vorherige Fehler", nl: "Bagging traint modellen parallel op bootstrap samples, boosting traint modellen sequentieel gericht op vorige fouten" },
          { en: "Bagging is always more accurate than boosting", es: "Bagging es siempre más preciso que boosting", de: "Bagging ist immer genauer als Boosting", nl: "Bagging is altijd nauwkeuriger dan boosting" },
          { en: "Bagging uses neural networks, boosting uses decision trees", es: "Bagging usa redes neuronales, boosting usa árboles de decisión", de: "Bagging verwendet neuronale Netzwerke, Boosting verwendet Entscheidungsbäume", nl: "Bagging gebruikt neurale netwerken, boosting gebruikt beslissingsbomen" },
          { en: "Bagging reduces variance, boosting increases bias", es: "Bagging reduce la varianza, boosting aumenta el sesgo", de: "Bagging reduziert Varianz, Boosting erhöht Bias", nl: "Bagging vermindert variantie, boosting verhoogt bias" }
        ],
        correct: 0,
        explanation: {
          en: "Bagging (Bootstrap Aggregating) creates multiple models using bootstrap samples of the training data and combines their predictions, typically reducing variance. Boosting trains models sequentially, with each model trying to correct the errors of previous models, typically reducing bias.",
          es: "Bagging (Bootstrap Aggregating) crea múltiples modelos usando muestras bootstrap de los datos de entrenamiento y combina sus predicciones, típicamente reduciendo la varianza. Boosting entrena modelos secuencialmente, con cada modelo tratando de corregir los errores de modelos previos, típicamente reduciendo el sesgo.",
          de: "Bagging (Bootstrap Aggregating) erstellt mehrere Modelle unter Verwendung von Bootstrap-Stichproben der Trainingsdaten und kombiniert ihre Vorhersagen, wodurch typischerweise die Varianz reduziert wird. Boosting trainiert Modelle sequenziell, wobei jedes Modell versucht, die Fehler früherer Modelle zu korrigieren, wodurch typischerweise der Bias reduziert wird.",
          nl: "Bagging (Bootstrap Aggregating) creëert meerdere modellen met bootstrap samples van de trainingsdata en combineert hun voorspellingen, wat typisch variantie vermindert. Boosting traint modellen sequentieel, waarbij elk model probeert de fouten van vorige modellen te corrigeren, wat typisch bias vermindert."
        }
      },
      {
        question: {
          en: "What is the purpose of batch normalization in neural networks?",
          es: "¿Cuál es el propósito de la normalización por lotes en las redes neuronales?",
          de: "Was ist der Zweck der Batch-Normalisierung in neuronalen Netzwerken?",
          nl: "Wat is het doel van batch normalizatie in neurale netwerken?"
        },
        options: [
          { en: "Normalize inputs to each layer to stabilize training and allow higher learning rates", es: "Normalizar entradas a cada capa para estabilizar el entrenamiento y permitir tasas de aprendizaje más altas", de: "Eingaben zu jeder Schicht normalisieren, um das Training zu stabilisieren und höhere Lernraten zu ermöglichen", nl: "Invoer naar elke laag normaliseren om training te stabiliseren en hogere leersnelheden mogelijk te maken" },
          { en: "Reduce the size of training batches", es: "Reducir el tamaño de los lotes de entrenamiento", de: "Die Größe der Trainingsbatches reduzieren", nl: "De grootte van training batches verminderen" },
          { en: "Normalize the final output predictions", es: "Normalizar las predicciones de salida finales", de: "Die endgültigen Ausgabevorhersagen normalisieren", nl: "De uiteindelijke uitvoer voorspellingen normaliseren" },
          { en: "Convert continuous data to categorical data", es: "Convertir datos continuos a datos categóricos", de: "Kontinuierliche Daten in kategorische Daten umwandeln", nl: "Continue data omzetten naar categorische data" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes the inputs to each layer by adjusting and scaling the activations. This reduces internal covariate shift, stabilizes training, allows for higher learning rates, and often acts as regularization, leading to faster convergence.",
          es: "La normalización por lotes normaliza las entradas a cada capa ajustando y escalando las activaciones. Esto reduce el desplazamiento de covariables internas, estabiliza el entrenamiento, permite tasas de aprendizaje más altas y a menudo actúa como regularización, llevando a una convergencia más rápida.",
          de: "Batch-Normalisierung normalisiert die Eingaben zu jeder Schicht durch Anpassung und Skalierung der Aktivierungen. Dies reduziert die interne Kovariatenverschiebung, stabilisiert das Training, ermöglicht höhere Lernraten und wirkt oft als Regularisierung, was zu schnellerer Konvergenz führt.",
          nl: "Batch normalizatie normaliseert de invoer naar elke laag door het aanpassen en schalen van de activaties. Dit vermindert interne covariate shift, stabiliseert training, maakt hogere leersnelheden mogelijk en werkt vaak als regularisatie, wat leidt tot snellere convergentie."
        }
      },
      {
        question: {
          en: "What is transfer learning in machine learning?",
          es: "¿Qué es el aprendizaje por transferencia en el aprendizaje automático?",
          de: "Was ist Transfer Learning im maschinellen Lernen?",
          nl: "Wat is transfer learning in machine learning?"
        },
        options: [
          { en: "Using knowledge from pre-trained models on related tasks to improve learning on new tasks", es: "Usar conocimiento de modelos pre-entrenados en tareas relacionadas para mejorar el aprendizaje en nuevas tareas", de: "Wissen von vortrainierten Modellen bei verwandten Aufgaben nutzen, um das Lernen bei neuen Aufgaben zu verbessern", nl: "Kennis van voorgetrainde modellen op gerelateerde taken gebruiken om leren op nieuwe taken te verbeteren" },
          { en: "Moving trained models between different computers", es: "Mover modelos entrenados entre diferentes computadoras", de: "Trainierte Modelle zwischen verschiedenen Computern verschieben", nl: "Getrainde modellen verplaatsen tussen verschillende computers" },
          { en: "Converting models from one programming language to another", es: "Convertir modelos de un lenguaje de programación a otro", de: "Modelle von einer Programmiersprache in eine andere konvertieren", nl: "Modellen omzetten van de ene programmeertaal naar de andere" },
          { en: "Transferring data between training and testing sets", es: "Transferir datos entre conjuntos de entrenamiento y prueba", de: "Daten zwischen Trainings- und Testsets übertragen", nl: "Data overdragen tussen trainings- en testsets" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning leverages knowledge gained from pre-trained models on large datasets to solve related but different problems. This approach reduces training time and data requirements, especially effective when the target task has limited data or computational resources.",
          es: "El aprendizaje por transferencia aprovecha el conocimiento obtenido de modelos pre-entrenados en conjuntos de datos grandes para resolver problemas relacionados pero diferentes. Este enfoque reduce el tiempo de entrenamiento y los requisitos de datos, especialmente efectivo cuando la tarea objetivo tiene datos limitados o recursos computacionales.",
          de: "Transfer Learning nutzt Wissen aus vortrainierten Modellen auf großen Datensätzen, um verwandte aber unterschiedliche Probleme zu lösen. Dieser Ansatz reduziert Trainingszeit und Datenanforderungen, besonders effektiv, wenn die Zielaufgabe begrenzte Daten oder Rechenressourcen hat.",
          nl: "Transfer learning maakt gebruik van kennis verkregen uit voorgetrainde modellen op grote datasets om gerelateerde maar verschillende problemen op te lossen. Deze aanpak vermindert trainingstijd en data vereisten, vooral effectief wanneer de doeltaak beperkte data of computationele resources heeft."
        }
      },
      {
        question: {
          en: "What is the difference between precision and recall in classification?",
          es: "¿Cuál es la diferencia entre precisión y recall en clasificación?",
          de: "Was ist der Unterschied zwischen Präzision und Recall bei der Klassifikation?",
          nl: "Wat is het verschil tussen precision en recall in classificatie?"
        },
        options: [
          { en: "Precision: ratio of true positives to predicted positives; Recall: ratio of true positives to actual positives", es: "Precisión: proporción de verdaderos positivos a positivos predichos; Recall: proporción de verdaderos positivos a positivos reales", de: "Präzision: Verhältnis von wahren Positiven zu vorhergesagten Positiven; Recall: Verhältnis von wahren Positiven zu tatsächlichen Positiven", nl: "Precision: verhouding van true positives tot voorspelde positives; Recall: verhouding van true positives tot werkelijke positives" },
          { en: "Precision measures speed, recall measures accuracy", es: "La precisión mide la velocidad, el recall mide la precisión", de: "Präzision misst Geschwindigkeit, Recall misst Genauigkeit", nl: "Precision meet snelheid, recall meet nauwkeurigheid" },
          { en: "Precision is for regression, recall is for classification", es: "La precisión es para regresión, el recall es para clasificación", de: "Präzision ist für Regression, Recall ist für Klassifikation", nl: "Precision is voor regressie, recall is voor classificatie" },
          { en: "Precision and recall are the same metric", es: "La precisión y el recall son la misma métrica", de: "Präzision und Recall sind die gleiche Metrik", nl: "Precision en recall zijn dezelfde metriek" }
        ],
        correct: 0,
        explanation: {
          en: "Precision measures the accuracy of positive predictions (TP/(TP+FP)) - of all instances predicted as positive, how many are actually positive. Recall measures completeness (TP/(TP+FN)) - of all actual positive instances, how many were correctly identified.",
          es: "La precisión mide la exactitud de las predicciones positivas (VP/(VP+FP)) - de todas las instancias predichas como positivas, cuántas son realmente positivas. El recall mide la completitud (VP/(VP+FN)) - de todas las instancias positivas reales, cuántas fueron correctamente identificadas.",
          de: "Präzision misst die Genauigkeit positiver Vorhersagen (TP/(TP+FP)) - von allen als positiv vorhergesagten Instanzen, wie viele sind tatsächlich positiv. Recall misst Vollständigkeit (TP/(TP+FN)) - von allen tatsächlich positiven Instanzen, wie viele wurden korrekt identifiziert.",
          nl: "Precision meet de nauwkeurigheid van positieve voorspellingen (TP/(TP+FP)) - van alle instanties voorspeld als positief, hoeveel zijn werkelijk positief. Recall meet volledigheid (TP/(TP+FN)) - van alle werkelijke positieve instanties, hoeveel werden correct geïdentificeerd."
        }
      },
      {
        question: {
          en: "What is dropout in neural networks used for?",
          es: "¿Para qué se usa el dropout en las redes neuronales?",
          de: "Wofür wird Dropout in neuronalen Netzwerken verwendet?",
          nl: "Waarvoor wordt dropout in neurale netwerken gebruikt?"
        },
        options: [
          { en: "Prevent overfitting by randomly setting some neurons to zero during training", es: "Prevenir el sobreajuste estableciendo aleatoriamente algunas neuronas a cero durante el entrenamiento", de: "Overfitting verhindern, indem einige Neuronen während des Trainings zufällig auf Null gesetzt werden", nl: "Overfitting voorkomen door willekeurig enkele neuronen op nul te zetten tijdens training" },
          { en: "Reduce the number of parameters in the model", es: "Reducir el número de parámetros en el modelo", de: "Die Anzahl der Parameter im Modell reduzieren", nl: "Het aantal parameters in het model verminderen" },
          { en: "Speed up the training process", es: "Acelerar el proceso de entrenamiento", de: "Den Trainingsprozess beschleunigen", nl: "Het trainingsproces versnellen" },
          { en: "Remove unnecessary input features", es: "Eliminar características de entrada innecesarias", de: "Unnötige Eingabefunktionen entfernen", nl: "Onnodige invoer kenmerken verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout is a regularization technique that randomly sets a fraction of neurons to zero during training. This forces the network to not rely too heavily on specific neurons, reducing overfitting and improving generalization to new data.",
          es: "El dropout es una técnica de regularización que establece aleatoriamente una fracción de neuronas a cero durante el entrenamiento. Esto obliga a la red a no depender demasiado de neuronas específicas, reduciendo el sobreajuste y mejorando la generalización a nuevos datos.",
          de: "Dropout ist eine Regularisierungstechnik, die während des Trainings zufällig einen Bruchteil der Neuronen auf Null setzt. Dies zwingt das Netzwerk, sich nicht zu sehr auf bestimmte Neuronen zu verlassen, reduziert Overfitting und verbessert die Generalisierung auf neue Daten.",
          nl: "Dropout is een regularisatietechniek die willekeurig een fractie van neuronen op nul zet tijdens training. Dit dwingt het netwerk om niet te veel te vertrouwen op specifieke neuronen, wat overfitting vermindert en generalisatie naar nieuwe data verbetert."
        }
      },
      {
        question: {
          en: "What is the curse of dimensionality in machine learning?",
          es: "¿Qué es la maldición de la dimensionalidad en el aprendizaje automático?",
          de: "Was ist der Fluch der Dimensionalität im maschinellen Lernen?",
          nl: "Wat is de curse of dimensionality in machine learning?"
        },
        options: [
          { en: "Performance degradation as the number of features increases due to sparse data in high-dimensional space", es: "Degradación del rendimiento cuando aumenta el número de características debido a datos dispersos en el espacio de alta dimensión", de: "Leistungsverschlechterung bei steigender Anzahl von Merkmalen aufgrund spärlicher Daten im hochdimensionalen Raum", nl: "Prestatie degradatie wanneer het aantal kenmerken toeneemt door schaarse data in hoogdimensionale ruimte" },
          { en: "The impossibility of visualizing data with more than 3 dimensions", es: "La imposibilidad de visualizar datos con más de 3 dimensiones", de: "Die Unmöglichkeit, Daten mit mehr als 3 Dimensionen zu visualisieren", nl: "De onmogelijkheid om data met meer dan 3 dimensies te visualiseren" },
          { en: "The exponential increase in computation time with more features", es: "El aumento exponencial en el tiempo de computación con más características", de: "Die exponentiell zunehmende Rechenzeit mit mehr Merkmalen", nl: "De exponentiële toename in rekentijd met meer kenmerken" },
          { en: "The requirement for quantum computers to process high-dimensional data", es: "El requisito de computadoras cuánticas para procesar datos de alta dimensión", de: "Die Anforderung von Quantencomputern zur Verarbeitung hochdimensionaler Daten", nl: "De vereiste van quantumcomputers om hoogdimensionale data te verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "The curse of dimensionality refers to various phenomena that arise when analyzing data in high-dimensional spaces. As dimensions increase, data becomes increasingly sparse, distances between points become less meaningful, and the amount of data needed to maintain the same density grows exponentially.",
          es: "La maldición de la dimensionalidad se refiere a varios fenómenos que surgen al analizar datos en espacios de alta dimensión. Cuando las dimensiones aumentan, los datos se vuelven cada vez más dispersos, las distancias entre puntos se vuelven menos significativas, y la cantidad de datos necesaria para mantener la misma densidad crece exponencialmente.",
          de: "Der Fluch der Dimensionalität bezieht sich auf verschiedene Phänomene, die beim Analysieren von Daten in hochdimensionalen Räumen auftreten. Mit zunehmenden Dimensionen werden Daten zunehmend spärlich, Abstände zwischen Punkten werden weniger bedeutsam, und die Menge der für die gleiche Dichte benötigten Daten wächst exponentiell.",
          nl: "De curse of dimensionality verwijst naar verschillende fenomenen die ontstaan bij het analyseren van data in hoogdimensionale ruimtes. Naarmate dimensies toenemen, wordt data steeds schaarser, worden afstanden tussen punten minder betekenisvol, en groeit de hoeveelheid data exponentieel die nodig is om dezelfde dichtheid te behouden."
        }
      },
      {
        question: {
          en: "What is the role of the activation function in neural networks?",
          es: "¿Cuál es el papel de la función de activación en las redes neuronales?",
          de: "Welche Rolle spielt die Aktivierungsfunktion in neuronalen Netzwerken?",
          nl: "Wat is de rol van de activatiefunctie in neurale netwerken?"
        },
        options: [
          { en: "Introduce non-linearity to enable learning of complex patterns", es: "Introducir no linealidad para permitir el aprendizaje de patrones complejos", de: "Nichtlinearität einführen, um das Lernen komplexer Muster zu ermöglichen", nl: "Non-lineariteit introduceren om het leren van complexe patronen mogelijk te maken" },
          { en: "Control the speed of training", es: "Controlar la velocidad del entrenamiento", de: "Die Geschwindigkeit des Trainings kontrollieren", nl: "De snelheid van training controleren" },
          { en: "Determine the number of hidden layers", es: "Determinar el número de capas ocultas", de: "Die Anzahl der versteckten Schichten bestimmen", nl: "Het aantal verborgen lagen bepalen" },
          { en: "Normalize the input data", es: "Normalizar los datos de entrada", de: "Die Eingabedaten normalisieren", nl: "De invoerdata normaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Activation functions introduce non-linearity into neural networks, allowing them to learn and model complex, non-linear relationships. Without activation functions, neural networks would only be able to learn linear transformations, severely limiting their capability.",
          es: "Las funciones de activación introducen no linealidad en las redes neuronales, permitiéndoles aprender y modelar relaciones complejas y no lineales. Sin funciones de activación, las redes neuronales solo podrían aprender transformaciones lineales, limitando severamente su capacidad.",
          de: "Aktivierungsfunktionen führen Nichtlinearität in neuronale Netzwerke ein und ermöglichen es ihnen, komplexe, nichtlineare Beziehungen zu lernen und zu modellieren. Ohne Aktivierungsfunktionen könnten neuronale Netzwerke nur lineare Transformationen lernen, was ihre Fähigkeiten stark einschränken würde.",
          nl: "Activatiefuncties introduceren non-lineariteit in neurale netwerken, waardoor ze complexe, niet-lineaire relaties kunnen leren en modelleren. Zonder activatiefuncties zouden neurale netwerken alleen lineaire transformaties kunnen leren, wat hun mogelijkheden ernstig zou beperken."
        }
      },
      {
        question: {
          en: "What is cross-validation used for in machine learning?",
          es: "¿Para qué se usa la validación cruzada en el aprendizaje automático?",
          de: "Wofür wird Kreuzvalidierung im maschinellen Lernen verwendet?",
          nl: "Waarvoor wordt cross-validatie gebruikt in machine learning?"
        },
        options: [
          { en: "Assess model performance and generalization ability by testing on multiple data splits", es: "Evaluar el rendimiento del modelo y la capacidad de generalización probando en múltiples divisiones de datos", de: "Modellleistung und Generalisierungsfähigkeit durch Testen auf mehreren Datenaufteilungen bewerten", nl: "Modelprestaties en generalisatievermogen beoordelen door te testen op meerdere data splits" },
          { en: "Combine multiple models into one", es: "Combinar múltiples modelos en uno", de: "Mehrere Modelle zu einem kombinieren", nl: "Meerdere modellen combineren tot één" },
          { en: "Validate the correctness of the training algorithm", es: "Validar la corrección del algoritmo de entrenamiento", de: "Die Korrektheit des Trainingsalgorithmus validieren", nl: "De juistheid van het trainingsalgoritme valideren" },
          { en: "Cross-reference different datasets", es: "Hacer referencia cruzada de diferentes conjuntos de datos", de: "Verschiedene Datensätze querverweisen", nl: "Verschillende datasets kruislings refereren" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-validation divides the dataset into multiple folds, trains the model on some folds and tests on others, rotating through all combinations. This provides a more robust estimate of model performance and helps detect overfitting by testing generalization across different data subsets.",
          es: "La validación cruzada divide el conjunto de datos en múltiples pliegues, entrena el modelo en algunos pliegues y prueba en otros, rotando a través de todas las combinaciones. Esto proporciona una estimación más robusta del rendimiento del modelo y ayuda a detectar sobreajuste probando la generalización a través de diferentes subconjuntos de datos.",
          de: "Kreuzvalidierung teilt den Datensatz in mehrere Falten auf, trainiert das Modell auf einigen Falten und testet auf anderen, wobei alle Kombinationen durchlaufen werden. Dies liefert eine robustere Schätzung der Modellleistung und hilft beim Erkennen von Overfitting durch Testen der Generalisierung über verschiedene Datenuntergruppen.",
          nl: "Cross-validatie verdeelt de dataset in meerdere vouwen, traint het model op enkele vouwen en test op anderen, roterend door alle combinaties. Dit geeft een robuustere schatting van modelprestaties en helpt overfitting te detecteren door generalisatie te testen over verschillende data subsets."
        }
      },
      {
        question: {
          en: "What is the purpose of feature scaling in machine learning?",
          es: "¿Cuál es el propósito del escalado de características en el aprendizaje automático?",
          de: "Was ist der Zweck der Feature-Skalierung im maschinellen Lernen?",
          nl: "Wat is het doel van feature scaling in machine learning?"
        },
        options: [
          { en: "Normalize feature ranges to prevent features with larger scales from dominating the learning process", es: "Normalizar rangos de características para prevenir que características con escalas más grandes dominen el proceso de aprendizaje", de: "Feature-Bereiche normalisieren, um zu verhindern, dass Features mit größeren Skalen den Lernprozess dominieren", nl: "Feature bereiken normaliseren om te voorkomen dat kenmerken met grotere schalen het leerproces domineren" },
          { en: "Increase the number of features in the dataset", es: "Aumentar el número de características en el conjunto de datos", de: "Die Anzahl der Features im Datensatz erhöhen", nl: "Het aantal kenmerken in de dataset verhogen" },
          { en: "Remove irrelevant features from the model", es: "Eliminar características irrelevantes del modelo", de: "Irrelevante Features aus dem Modell entfernen", nl: "Irrelevante kenmerken uit het model verwijderen" },
          { en: "Convert categorical features to numerical features", es: "Convertir características categóricas a características numéricas", de: "Kategorische Features in numerische Features umwandeln", nl: "Categorische kenmerken omzetten naar numerieke kenmerken" }
        ],
        correct: 0,
        explanation: {
          en: "Feature scaling standardizes the ranges of features so that no single feature dominates others due to its scale. This is crucial for algorithms that are sensitive to feature magnitudes, such as gradient descent, SVM, and k-nearest neighbors, ensuring fair contribution from all features.",
          es: "El escalado de características estandariza los rangos de las características para que ninguna característica individual domine a otras debido a su escala. Esto es crucial para algoritmos sensibles a las magnitudes de las características, como descenso de gradiente, SVM y k-vecinos más cercanos, asegurando una contribución justa de todas las características.",
          de: "Feature-Skalierung standardisiert die Bereiche von Features, so dass kein einzelnes Feature andere aufgrund seiner Skala dominiert. Dies ist entscheidend für Algorithmen, die empfindlich auf Feature-Größenordnungen reagieren, wie Gradientenabstieg, SVM und k-nächste-Nachbarn, um eine faire Beitragung aller Features zu gewährleisten.",
          nl: "Feature scaling standaardiseert de bereiken van kenmerken zodat geen enkel kenmerk anderen domineert vanwege zijn schaal. Dit is cruciaal voor algoritmen die gevoelig zijn voor kenmerk groottes, zoals gradient descent, SVM, en k-nearest neighbors, om eerlijke bijdrage van alle kenmerken te verzekeren."
        }
      },
      {
        question: {
          en: "What is the difference between parametric and non-parametric models?",
          es: "¿Cuál es la diferencia entre modelos paramétricos y no paramétricos?",
          de: "Was ist der Unterschied zwischen parametrischen und nicht-parametrischen Modellen?",
          nl: "Wat is het verschil tussen parametrische en niet-parametrische modellen?"
        },
        options: [
          { en: "Parametric models have fixed number of parameters, non-parametric models' complexity can grow with data", es: "Los modelos paramétricos tienen un número fijo de parámetros, la complejidad de los modelos no paramétricos puede crecer con los datos", de: "Parametrische Modelle haben eine feste Anzahl von Parametern, die Komplexität nicht-parametrischer Modelle kann mit den Daten wachsen", nl: "Parametrische modellen hebben een vast aantal parameters, de complexiteit van niet-parametrische modellen kan groeien met data" },
          { en: "Parametric models are always more accurate than non-parametric models", es: "Los modelos paramétricos son siempre más precisos que los modelos no paramétricos", de: "Parametrische Modelle sind immer genauer als nicht-parametrische Modelle", nl: "Parametrische modellen zijn altijd nauwkeuriger dan niet-parametrische modellen" },
          { en: "Parametric models use parameters, non-parametric models don't", es: "Los modelos paramétricos usan parámetros, los no paramétricos no", de: "Parametrische Modelle verwenden Parameter, nicht-parametrische Modelle nicht", nl: "Parametrische modellen gebruiken parameters, niet-parametrische modellen niet" },
          { en: "Parametric models are for regression, non-parametric for classification", es: "Los modelos paramétricos son para regresión, los no paramétricos para clasificación", de: "Parametrische Modelle sind für Regression, nicht-parametrische für Klassifikation", nl: "Parametrische modellen zijn voor regressie, niet-parametrische voor classificatie" }
        ],
        correct: 0,
        explanation: {
          en: "Parametric models assume a specific functional form with a fixed number of parameters (e.g., linear regression). Non-parametric models don't assume a specific form and their complexity can adapt to the data size (e.g., k-NN, decision trees), potentially using more 'parameters' as data increases.",
          es: "Los modelos paramétricos asumen una forma funcional específica con un número fijo de parámetros (ej. regresión lineal). Los modelos no paramétricos no asumen una forma específica y su complejidad puede adaptarse al tamaño de los datos (ej. k-NN, árboles de decisión), potencialmente usando más 'parámetros' cuando los datos aumentan.",
          de: "Parametrische Modelle nehmen eine spezifische Funktionsform mit einer festen Anzahl von Parametern an (z.B. lineare Regression). Nicht-parametrische Modelle nehmen keine spezifische Form an und ihre Komplexität kann sich an die Datengröße anpassen (z.B. k-NN, Entscheidungsbäume), wobei sie potenziell mehr 'Parameter' verwenden, wenn die Daten zunehmen.",
          nl: "Parametrische modellen nemen een specifieke functionele vorm aan met een vast aantal parameters (bijv. lineaire regressie). Niet-parametrische modellen nemen geen specifieke vorm aan en hun complexiteit kan zich aanpassen aan de datagrootte (bijv. k-NN, beslissingsbomen), mogelijk meer 'parameters' gebruikend wanneer data toeneemt."
        }
      },
      {
        question: {
          en: "What is the exploding gradient problem in deep learning?",
          es: "¿Qué es el problema del gradiente explosivo en el aprendizaje profundo?",
          de: "Was ist das Problem der explodierenden Gradienten im Deep Learning?",
          nl: "Wat is het exploding gradient probleem in deep learning?"
        },
        options: [
          { en: "Gradients become exponentially large during backpropagation, causing unstable training", es: "Los gradientes se vuelven exponencialmente grandes durante la retropropagación, causando entrenamiento inestable", de: "Gradienten werden während der Rückwärtspropagation exponentiell groß und verursachen instabiles Training", nl: "Gradiënten worden exponentieel groot tijdens backpropagation, wat onstabiele training veroorzaakt" },
          { en: "The network architecture becomes too complex", es: "La arquitectura de la red se vuelve demasiado compleja", de: "Die Netzwerkarchitektur wird zu komplex", nl: "De netwerkarchitectuur wordt te complex" },
          { en: "The training data contains too many features", es: "Los datos de entrenamiento contienen demasiadas características", de: "Die Trainingsdaten enthalten zu viele Features", nl: "De trainingsdata bevat te veel kenmerken" },
          { en: "The model overfits to the training data", es: "El modelo se sobreajusta a los datos de entrenamiento", de: "Das Modell überpasst sich an die Trainingsdaten", nl: "Het model overfit op de trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "The exploding gradient problem occurs when gradients grow exponentially as they propagate backward through the network layers. This leads to very large weight updates that make training unstable and can cause the model to diverge. Gradient clipping is a common solution.",
          es: "El problema del gradiente explosivo ocurre cuando los gradientes crecen exponencialmente mientras se propagan hacia atrás a través de las capas de la red. Esto lleva a actualizaciones de peso muy grandes que hacen el entrenamiento inestable y pueden causar que el modelo diverja. El recorte de gradiente es una solución común.",
          de: "Das Problem der explodierenden Gradienten tritt auf, wenn Gradienten exponentiell wachsen, während sie sich rückwärts durch die Netzwerkschichten ausbreiten. Dies führt zu sehr großen Gewichtsaktualisierungen, die das Training instabil machen und dazu führen können, dass das Modell divergiert. Gradient Clipping ist eine gängige Lösung.",
          nl: "Het exploding gradient probleem treedt op wanneer gradiënten exponentieel groeien terwijl ze zich achterwaarts door de netwerklagen verspreiden. Dit leidt tot zeer grote gewicht updates die training onstabiel maken en kunnen ervoor zorgen dat het model divergeert. Gradient clipping is een veelvoorkomende oplossing."
        }
      },
      {
        question: {
          en: "What is the purpose of regularization in machine learning?",
          es: "¿Cuál es el propósito de la regularización en el aprendizaje automático?",
          de: "Was ist der Zweck der Regularisierung im maschinellen Lernen?",
          nl: "Wat is het doel van regularisatie in machine learning?"
        },
        options: [
          { en: "Prevent overfitting by adding penalty terms to the loss function", es: "Prevenir el sobreajuste agregando términos de penalización a la función de pérdida", de: "Overfitting verhindern durch Hinzufügen von Straftermen zur Verlustfunktion", nl: "Overfitting voorkomen door penalty termen toe te voegen aan de loss functie" },
          { en: "Make the training process faster", es: "Hacer el proceso de entrenamiento más rápido", de: "Den Trainingsprozess schneller machen", nl: "Het trainingsproces sneller maken" },
          { en: "Increase the model's complexity", es: "Aumentar la complejidad del modelo", de: "Die Komplexität des Modells erhöhen", nl: "De complexiteit van het model verhogen" },
          { en: "Improve the model's training accuracy", es: "Mejorar la precisión de entrenamiento del modelo", de: "Die Trainingsgenauigkeit des Modells verbessern", nl: "De trainingsnauwkeurigheid van het model verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization adds penalty terms to the loss function to discourage overly complex models. Techniques like L1 (Lasso) and L2 (Ridge) regularization help prevent overfitting by constraining model parameters, leading to better generalization on unseen data.",
          es: "La regularización agrega términos de penalización a la función de pérdida para desalentar modelos excesivamente complejos. Técnicas como regularización L1 (Lasso) y L2 (Ridge) ayudan a prevenir el sobreajuste restringiendo los parámetros del modelo, llevando a una mejor generalización en datos no vistos.",
          de: "Regularisierung fügt Strafterme zur Verlustfunktion hinzu, um übermäßig komplexe Modelle zu verhindern. Techniken wie L1 (Lasso) und L2 (Ridge) Regularisierung helfen beim Verhindern von Overfitting durch Beschränkung der Modellparameter, was zu besserer Generalisierung auf ungesehenen Daten führt.",
          nl: "Regularisatie voegt penalty termen toe aan de loss functie om overdreven complexe modellen te ontmoedigen. Technieken zoals L1 (Lasso) en L2 (Ridge) regularisatie helpen overfitting te voorkomen door modelparameters te beperken, wat leidt tot betere generalisatie op onzichtbare data."
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
          { en: "Generative models learn joint probability P(x,y), discriminative models learn conditional probability P(y|x)", es: "Los modelos generativos aprenden probabilidad conjunta P(x,y), los modelos discriminativos aprenden probabilidad condicional P(y|x)", de: "Generative Modelle lernen Verbundwahrscheinlichkeit P(x,y), diskriminative Modelle lernen bedingte Wahrscheinlichkeit P(y|x)", nl: "Generatieve modellen leren gezamenlijke waarschijnlijkheid P(x,y), discriminatieve modellen leren voorwaardelijke waarschijnlijkheid P(y|x)" },
          { en: "Generative models are always more accurate than discriminative models", es: "Los modelos generativos son siempre más precisos que los modelos discriminativos", de: "Generative Modelle sind immer genauer als diskriminative Modelle", nl: "Generatieve modellen zijn altijd nauwkeuriger dan discriminatieve modellen" },
          { en: "Generative models can only be used for generation, discriminative for classification", es: "Los modelos generativos solo pueden usarse para generación, los discriminativos para clasificación", de: "Generative Modelle können nur für Erzeugung verwendet werden, diskriminative für Klassifikation", nl: "Generatieve modellen kunnen alleen gebruikt worden voor generatie, discriminatieve voor classificatie" },
          { en: "Generative models use neural networks, discriminative models use traditional algorithms", es: "Los modelos generativos usan redes neuronales, los modelos discriminativos usan algoritmos tradicionales", de: "Generative Modelle verwenden neuronale Netzwerke, diskriminative Modelle verwenden traditionelle Algorithmen", nl: "Generatieve modellen gebruiken neurale netwerken, discriminatieve modellen gebruiken traditionele algoritmen" }
        ],
        correct: 0,
        explanation: {
          en: "Generative models learn the full joint distribution P(x,y) and can generate new data samples. Discriminative models learn only the conditional distribution P(y|x) for making predictions. Generative models can be used for both generation and classification, while discriminative models focus on decision boundaries.",
          es: "Los modelos generativos aprenden la distribución conjunta completa P(x,y) y pueden generar nuevas muestras de datos. Los modelos discriminativos aprenden solo la distribución condicional P(y|x) para hacer predicciones. Los modelos generativos pueden usarse tanto para generación como clasificación, mientras que los discriminativos se enfocan en límites de decisión.",
          de: "Generative Modelle lernen die vollständige Verbundverteilung P(x,y) und können neue Datenproben erzeugen. Diskriminative Modelle lernen nur die bedingte Verteilung P(y|x) für Vorhersagen. Generative Modelle können sowohl für Erzeugung als auch Klassifikation verwendet werden, während diskriminative Modelle sich auf Entscheidungsgrenzen konzentrieren.",
          nl: "Generatieve modellen leren de volledige gezamenlijke verdeling P(x,y) en kunnen nieuwe data samples genereren. Discriminatieve modellen leren alleen de voorwaardelijke verdeling P(y|x) voor voorspellingen. Generatieve modellen kunnen gebruikt worden voor zowel generatie als classificatie, terwijl discriminatieve modellen focussen op beslissingsgrenzen."
        }
      },
      {
        question: {
          en: "What is early stopping in neural network training?",
          es: "¿Qué es la parada temprana en el entrenamiento de redes neuronales?",
          de: "Was ist Early Stopping beim Training neuronaler Netzwerke?",
          nl: "Wat is early stopping in neural network training?"
        },
        options: [
          { en: "Stopping training when validation performance stops improving to prevent overfitting", es: "Detener el entrenamiento cuando el rendimiento de validación deja de mejorar para prevenir el sobreajuste", de: "Training stoppen, wenn sich die Validierungsleistung nicht mehr verbessert, um Overfitting zu verhindern", nl: "Training stoppen wanneer validatie prestaties stoppen met verbeteren om overfitting te voorkomen" },
          { en: "Stopping training after a fixed number of epochs", es: "Detener el entrenamiento después de un número fijo de épocas", de: "Training nach einer festen Anzahl von Epochen stoppen", nl: "Training stoppen na een vast aantal epochs" },
          { en: "Terminating training when the loss becomes zero", es: "Terminar el entrenamiento cuando la pérdida se vuelve cero", de: "Training beenden, wenn der Verlust null wird", nl: "Training beëindigen wanneer de loss nul wordt" },
          { en: "Stopping training when computational resources are exhausted", es: "Detener el entrenamiento cuando se agotan los recursos computacionales", de: "Training stoppen, wenn die Rechenressourcen erschöpft sind", nl: "Training stoppen wanneer computationele resources uitgeput zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Early stopping monitors validation performance during training and stops when it plateaus or starts degrading, even if training loss continues to decrease. This prevents overfitting by finding the point where the model generalizes best to unseen data.",
          es: "La parada temprana monitorea el rendimiento de validación durante el entrenamiento y se detiene cuando se estanca o comienza a degradarse, incluso si la pérdida de entrenamiento continúa disminuyendo. Esto previene el sobreajuste encontrando el punto donde el modelo generaliza mejor a datos no vistos.",
          de: "Early Stopping überwacht die Validierungsleistung während des Trainings und stoppt, wenn sie stagniert oder sich zu verschlechtern beginnt, auch wenn der Trainingsverlust weiter abnimmt. Dies verhindert Overfitting, indem der Punkt gefunden wird, an dem das Modell am besten auf ungesehene Daten generalisiert.",
          nl: "Early stopping monitort validatie prestaties tijdens training en stopt wanneer deze stabiliseren of beginnen te verslechteren, zelfs als de training loss blijft afnemen. Dit voorkomt overfitting door het punt te vinden waar het model het beste generaliseert naar onzichtbare data."
        }
      },
      {
        question: {
          en: "What is the role of the learning rate in gradient descent optimization?",
          es: "¿Cuál es el papel de la tasa de aprendizaje en la optimización de descenso de gradiente?",
          de: "Welche Rolle spielt die Lernrate bei der Gradientenabstiegsoptimierung?",
          nl: "Wat is de rol van de learning rate in gradient descent optimalisatie?"
        },
        options: [
          { en: "Controls the step size for parameter updates during optimization", es: "Controla el tamaño del paso para las actualizaciones de parámetros durante la optimización", de: "Kontrolliert die Schrittgröße für Parameteraktualisierungen während der Optimierung", nl: "Controleert de stapgrootte voor parameter updates tijdens optimalisatie" },
          { en: "Determines the number of training epochs", es: "Determina el número de épocas de entrenamiento", de: "Bestimmt die Anzahl der Trainingsepochen", nl: "Bepaalt het aantal trainingsepochs" },
          { en: "Controls the batch size during training", es: "Controla el tamaño del lote durante el entrenamiento", de: "Kontrolliert die Batch-Größe während des Trainings", nl: "Controleert de batch size tijdens training" },
          { en: "Sets the network architecture complexity", es: "Establece la complejidad de la arquitectura de red", de: "Legt die Komplexität der Netzwerkarchitektur fest", nl: "Stelt de complexiteit van de netwerkarchitectuur in" }
        ],
        correct: 0,
        explanation: {
          en: "The learning rate determines how large steps the optimizer takes when updating model parameters. Too high learning rates can cause oscillations or divergence, while too low rates lead to slow convergence. Finding the right learning rate is crucial for effective training.",
          es: "La tasa de aprendizaje determina qué tan grandes son los pasos que toma el optimizador al actualizar los parámetros del modelo. Tasas de aprendizaje demasiado altas pueden causar oscilaciones o divergencia, mientras que tasas demasiado bajas llevan a convergencia lenta. Encontrar la tasa de aprendizaje correcta es crucial para un entrenamiento efectivo.",
          de: "Die Lernrate bestimmt, wie große Schritte der Optimierer bei der Aktualisierung der Modellparameter macht. Zu hohe Lernraten können Oszillationen oder Divergenz verursachen, während zu niedrige Raten zu langsamer Konvergenz führen. Die richtige Lernrate zu finden ist entscheidend für effektives Training.",
          nl: "De learning rate bepaalt hoe grote stappen de optimizer neemt bij het updaten van modelparameters. Te hoge learning rates kunnen oscillaties of divergentie veroorzaken, terwijl te lage rates tot langzame convergentie leiden. Het vinden van de juiste learning rate is cruciaal voor effectieve training."
        }
      },
      {
        question: {
          en: "What is the difference between a generative adversarial network (GAN) and a variational autoencoder (VAE)?",
          es: "¿Cuál es la diferencia entre una red generativa adversaria (GAN) y un autoencoder variacional (VAE)?",
          de: "Was ist der Unterschied zwischen einem Generative Adversarial Network (GAN) und einem Variational Autoencoder (VAE)?",
          nl: "Wat is het verschil tussen een generative adversarial network (GAN) en een variational autoencoder (VAE)?"
        },
        options: [
          { en: "GANs use adversarial training with generator vs discriminator, VAEs use probabilistic encoding-decoding with latent variables", es: "Las GAN usan entrenamiento adversario con generador vs discriminador, los VAE usan codificación-decodificación probabilística con variables latentes", de: "GANs verwenden adversariales Training mit Generator vs. Diskriminator, VAEs verwenden probabilistische Kodierung-Dekodierung mit latenten Variablen", nl: "GANs gebruiken adversarial training met generator vs discriminator, VAEs gebruiken probabilistische encoding-decoding met latente variabelen" },
          { en: "GANs are only for images, VAEs are only for text", es: "Las GAN son solo para imágenes, los VAE son solo para texto", de: "GANs sind nur für Bilder, VAEs sind nur für Text", nl: "GANs zijn alleen voor afbeeldingen, VAEs zijn alleen voor tekst" },
          { en: "GANs are supervised, VAEs are unsupervised", es: "Las GAN son supervisadas, los VAE son no supervisados", de: "GANs sind überwacht, VAEs sind unüberwacht", nl: "GANs zijn supervised, VAEs zijn unsupervised" },
          { en: "GANs use convolutional layers, VAEs use fully connected layers", es: "Las GAN usan capas convolucionales, los VAE usan capas completamente conectadas", de: "GANs verwenden Faltungsschichten, VAEs verwenden vollständig verbundene Schichten", nl: "GANs gebruiken convolutionele lagen, VAEs gebruiken volledig verbonden lagen" }
        ],
        correct: 0,
        explanation: {
          en: "GANs train two networks in competition: a generator creates fake data while a discriminator tries to detect it. VAEs learn to encode data into a probabilistic latent space and decode it back, optimizing a combination of reconstruction loss and regularization through the latent distribution.",
          es: "Las GAN entrenan dos redes en competencia: un generador crea datos falsos mientras un discriminador trata de detectarlos. Los VAE aprenden a codificar datos en un espacio latente probabilístico y decodificarlos de vuelta, optimizando una combinación de pérdida de reconstrucción y regularización a través de la distribución latente.",
          de: "GANs trainieren zwei Netzwerke im Wettbewerb: Ein Generator erstellt gefälschte Daten, während ein Diskriminator versucht, diese zu erkennen. VAEs lernen, Daten in einen probabilistischen latenten Raum zu kodieren und sie zurück zu dekodieren, wobei sie eine Kombination aus Rekonstruktionsverlust und Regularisierung durch die latente Verteilung optimieren.",
          nl: "GANs trainen twee netwerken in competitie: een generator creëert nep data terwijl een discriminator probeert het te detecteren. VAEs leren data te coderen naar een probabilistische latente ruimte en het terug te decoderen, optimaliseren van een combinatie van reconstructie loss en regularisatie door de latente distributie."
        }
      },
      {
        question: {
          en: "What is attention mechanism in neural networks?",
          es: "¿Qué es el mecanismo de atención en las redes neuronales?",
          de: "Was ist der Aufmerksamkeitsmechanismus in neuronalen Netzwerken?",
          nl: "Wat is het attention mechanisme in neurale netwerken?"
        },
        options: [
          { en: "Allows models to focus on relevant parts of input when making predictions", es: "Permite a los modelos enfocarse en partes relevantes de la entrada al hacer predicciones", de: "Ermöglicht es Modellen, sich bei Vorhersagen auf relevante Teile der Eingabe zu konzentrieren", nl: "Stelt modellen in staat om zich te richten op relevante delen van de invoer bij het maken van voorspellingen" },
          { en: "Controls the learning rate dynamically", es: "Controla la tasa de aprendizaje dinámicamente", de: "Kontrolliert die Lernrate dynamisch", nl: "Controleert de learning rate dynamisch" },
          { en: "Prevents neurons from activating", es: "Previene que las neuronas se activen", de: "Verhindert, dass Neuronen aktiviert werden", nl: "Voorkomt dat neuronen activeren" },
          { en: "Optimizes memory usage during training", es: "Optimiza el uso de memoria durante el entrenamiento", de: "Optimiert den Speicherverbrauch während des Trainings", nl: "Optimaliseert geheugengebruik tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms allow neural networks to selectively focus on different parts of the input sequence when generating each part of the output. This is particularly important in sequence-to-sequence tasks and has revolutionized NLP through transformer architectures.",
          es: "Los mecanismos de atención permiten a las redes neuronales enfocarse selectivamente en diferentes partes de la secuencia de entrada al generar cada parte de la salida. Esto es particularmente importante en tareas de secuencia a secuencia y ha revolucionado el PLN a través de arquitecturas transformer.",
          de: "Aufmerksamkeitsmechanismen ermöglichen es neuronalen Netzwerken, sich selektiv auf verschiedene Teile der Eingabesequenz zu konzentrieren, wenn sie jeden Teil der Ausgabe generieren. Dies ist besonders wichtig bei Sequenz-zu-Sequenz-Aufgaben und hat die NLP durch Transformer-Architekturen revolutioniert.",
          nl: "Attention mechanismen stellen neurale netwerken in staat om selectief te focussen op verschillende delen van de invoersequentie bij het genereren van elk deel van de uitvoer. Dit is bijzonder belangrijk in sequence-to-sequence taken en heeft NLP gerevolutioneerd door transformer architecturen."
        }
      },
      {
        question: {
          en: "What is the difference between stochastic and mini-batch gradient descent?",
          es: "¿Cuál es la diferencia entre descenso de gradiente estocástico y por mini-lotes?",
          de: "Was ist der Unterschied zwischen stochastischem und Mini-Batch-Gradientenabstieg?",
          nl: "Wat is het verschil tussen stochastic en mini-batch gradient descent?"
        },
        options: [
          { en: "Stochastic uses one sample per update, mini-batch uses small subset of samples", es: "Estocástico usa una muestra por actualización, mini-lote usa un pequeño subconjunto de muestras", de: "Stochastisch verwendet eine Stichprobe pro Aktualisierung, Mini-Batch verwendet eine kleine Untermenge von Stichproben", nl: "Stochastic gebruikt één sample per update, mini-batch gebruikt kleine subset van samples" },
          { en: "Stochastic is faster than mini-batch", es: "Estocástico es más rápido que mini-lote", de: "Stochastisch ist schneller als Mini-Batch", nl: "Stochastic is sneller dan mini-batch" },
          { en: "Stochastic uses random initialization, mini-batch uses fixed initialization", es: "Estocástico usa inicialización aleatoria, mini-lote usa inicialización fija", de: "Stochastisch verwendet zufällige Initialisierung, Mini-Batch verwendet feste Initialisierung", nl: "Stochastic gebruikt willekeurige initialisatie, mini-batch gebruikt vaste initialisatie" },
          { en: "Stochastic works only with neural networks, mini-batch with any algorithm", es: "Estocástico funciona solo con redes neuronales, mini-lote con cualquier algoritmo", de: "Stochastisch funktioniert nur mit neuronalen Netzwerken, Mini-Batch mit jedem Algorithmus", nl: "Stochastic werkt alleen met neurale netwerken, mini-batch met elk algoritme" }
        ],
        correct: 0,
        explanation: {
          en: "Stochastic gradient descent (SGD) updates parameters using the gradient from a single training example, leading to noisy but fast updates. Mini-batch gradient descent uses a small subset of training examples, providing a balance between computational efficiency and gradient accuracy.",
          es: "El descenso de gradiente estocástico (SGD) actualiza parámetros usando el gradiente de un solo ejemplo de entrenamiento, llevando a actualizaciones ruidosas pero rápidas. El descenso de gradiente por mini-lotes usa un pequeño subconjunto de ejemplos de entrenamiento, proporcionando un equilibrio entre eficiencia computacional y precisión del gradiente.",
          de: "Stochastischer Gradientenabstieg (SGD) aktualisiert Parameter unter Verwendung des Gradienten eines einzigen Trainingsbeispiels, was zu rauschenden aber schnellen Aktualisierungen führt. Mini-Batch-Gradientenabstieg verwendet eine kleine Untermenge von Trainingsbeispielen und bietet ein Gleichgewicht zwischen rechnerischer Effizienz und Gradientengenauigkeit.",
          nl: "Stochastic gradient descent (SGD) updatet parameters met de gradiënt van één trainingsvoorbeeld, wat leidt tot rauwe maar snelle updates. Mini-batch gradient descent gebruikt een kleine subset van trainingsvoorbeelden, wat een balans biedt tussen computationele efficiëntie en gradiënt nauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is ensemble learning in machine learning?",
          es: "¿Qué es el aprendizaje de conjunto en el aprendizaje automático?",
          de: "Was ist Ensemble Learning im maschinellen Lernen?",
          nl: "Wat is ensemble learning in machine learning?"
        },
        options: [
          { en: "Combining predictions from multiple models to improve overall performance", es: "Combinar predicciones de múltiples modelos para mejorar el rendimiento general", de: "Vorhersagen mehrerer Modelle kombinieren, um die Gesamtleistung zu verbessern", nl: "Voorspellingen van meerdere modellen combineren om algehele prestaties te verbeteren" },
          { en: "Training multiple versions of the same model", es: "Entrenar múltiples versiones del mismo modelo", de: "Mehrere Versionen desselben Modells trainieren", nl: "Meerdere versies van hetzelfde model trainen" },
          { en: "Using multiple datasets for training", es: "Usar múltiples conjuntos de datos para el entrenamiento", de: "Mehrere Datensätze für das Training verwenden", nl: "Meerdere datasets gebruiken voor training" },
          { en: "Training models in parallel on different machines", es: "Entrenar modelos en paralelo en diferentes máquinas", de: "Modelle parallel auf verschiedenen Maschinen trainieren", nl: "Modellen parallel trainen op verschillende machines" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble learning combines predictions from multiple diverse models to create a stronger predictor than any individual model. Common methods include voting, averaging, stacking, and blending. This approach often reduces both bias and variance, leading to improved generalization.",
          es: "El aprendizaje de conjunto combina predicciones de múltiples modelos diversos para crear un predictor más fuerte que cualquier modelo individual. Los métodos comunes incluyen votación, promediado, apilamiento y mezclado. Este enfoque a menudo reduce tanto el sesgo como la varianza, llevando a una mejor generalización.",
          de: "Ensemble Learning kombiniert Vorhersagen von mehreren unterschiedlichen Modellen, um einen stärkeren Prädiktor zu schaffen als jedes einzelne Modell. Gängige Methoden umfassen Abstimmung, Mittelung, Stacking und Blending. Dieser Ansatz reduziert oft sowohl Bias als auch Varianz und führt zu verbesserter Generalisierung.",
          nl: "Ensemble learning combineert voorspellingen van meerdere diverse modellen om een sterkere voorspeller te creëren dan elk individueel model. Veelgebruikte methoden zijn stemming, gemiddelde berekening, stacking en blending. Deze aanpak vermindert vaak zowel bias als variantie, wat leidt tot verbeterde generalisatie."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/artificial-intelligence', level2);
  }
})();