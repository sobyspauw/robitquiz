// Computer vision Quiz - Level 5
(function() {
  const level5 = {
    name: {
          "en": "Computer Vision Level 5",
          "es": "Visión por Computadora Nivel 5",
          "de": "Computer Vision Stufe 5",
          "nl": "Computer Vision Level 5"
    },
    questions: [
      {
        question: {
                  "en": "What do the layers in a Convolutional Neural Network (CNN) typically learn?",
                  "es": "¿Qué aprenden típicamente las capas en una Red Neuronal Convolucional (CNN)?",
                  "de": "Was lernen die Schichten in einem Convolutional Neural Network (CNN) typischerweise?",
                  "nl": "Wat leren de lagen in een Convolutional Neural Network (CNN) doorgaans?"
        },
        options: [
        {
                  "en": "Layers only process image colors",
                  "es": "Las capas solo procesan colores de imagen",
                  "de": "Schichten verarbeiten nur Bildfarben",
                  "nl": "Lagen verwerken alleen beeldkleuren"
        },
        {
                  "en": "Each layer reduces image quality",
                  "es": "Cada capa reduce la calidad de imagen",
                  "de": "Jede Schicht reduziert die Bildqualität",
                  "nl": "Elke laag vermindert de beeldkwaliteit"
        },
        {
                  "en": "Early layers detect simple features, deeper layers combine them into complex patterns",
                  "es": "Las capas tempranas detectan características simples, las capas más profundas las combinan en patrones complejos",
                  "de": "Frühe Schichten erkennen einfache Merkmale, tiefere Schichten kombinieren sie zu komplexen Mustern",
                  "nl": "Vroege lagen detecteren eenvoudige kenmerken, diepere lagen combineren ze tot complexe patronen"
        },
        {
                  "en": "All layers learn the same features",
                  "es": "Todas las capas aprenden las mismas características",
                  "de": "Alle Schichten lernen dieselben Merkmale",
                  "nl": "Alle lagen leren dezelfde kenmerken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "CNNs learn hierarchically: initial layers detect edges and textures, middle layers recognize shapes and parts, and final layers identify complete objects and complex scenes.",
                  "es": "Las CNN aprenden jerárquicamente: las capas iniciales detectan bordes y texturas, las capas medias reconocen formas y partes, y las capas finales identifican objetos completos y escenas complejas.",
                  "de": "CNNs lernen hierarchisch: anfängliche Schichten erkennen Kanten und Texturen, mittlere Schichten erkennen Formen und Teile, und finale Schichten identifizieren vollständige Objekte und komplexe Szenen.",
                  "nl": "CNNs leren hiërarchisch: initiële lagen detecteren randen en texturen, middelste lagen herkennen vormen en delen, en finale lagen identificeren complete objecten en complexe scènes."
        }
      },
      {
        question: {
                  "en": "What is the purpose of pooling layers in CNNs?",
                  "es": "¿Cuál es el propósito de las capas de pooling en las CNN?",
                  "de": "Was ist der Zweck von Pooling-Schichten in CNNs?",
                  "nl": "Wat is het doel van pooling lagen in CNNs?"
        },
        options: [
        {
                  "en": "Store images in memory pools",
                  "es": "Almacenar imágenes en pools de memoria",
                  "de": "Bilder in Speicherpools speichern",
                  "nl": "Afbeeldingen opslaan in geheugen pools"
        },
        {
                  "en": "Add more colors to images",
                  "es": "Agregar más colores a las imágenes",
                  "de": "Mehr Farben zu Bildern hinzufügen",
                  "nl": "Meer kleuren aan afbeeldingen toevoegen"
        },
        {
                  "en": "Connect to swimming pools",
                  "es": "Conectar a piscinas",
                  "de": "Mit Schwimmbädern verbinden",
                  "nl": "Verbinden met zwembaden"
        },
        {
                  "en": "Reduce spatial dimensions while retaining important features",
                  "es": "Reducir dimensiones espaciales mientras retienen características importantes",
                  "de": "Räumliche Dimensionen reduzieren während wichtige Merkmale beibehalten werden",
                  "nl": "Ruimtelijke dimensies verkleinen terwijl belangrijke kenmerken behouden blijven"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pooling layers downsample feature maps by taking maximum or average values from small regions, reducing computational requirements while preserving essential information.",
                  "es": "Las capas de pooling reducen el muestreo de mapas de características tomando valores máximos o promedio de pequeñas regiones, reduciendo requisitos computacionales mientras preservan información esencial.",
                  "de": "Pooling-Schichten reduzieren Feature-Maps durch Nehmen von Maximum- oder Durchschnittswerten aus kleinen Regionen, reduzieren Berechnungsanforderungen während wesentliche Informationen bewahrt werden.",
                  "nl": "Pooling lagen verkleinen feature maps door maximum of gemiddelde waarden te nemen uit kleine regio's, waardoor computationele vereisten worden verminderd terwijl essentiële informatie behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is transfer learning in computer vision?",
                  "es": "¿Qué es el aprendizaje por transferencia en visión por computadora?",
                  "de": "Was ist Transfer Learning in Computer Vision?",
                  "nl": "Wat is transfer learning in computer vision?"
        },
        options: [
        {
                  "en": "Moving learning algorithms physically",
                  "es": "Mover algoritmos de aprendizaje físicamente",
                  "de": "Lernalgorithmen physisch bewegen",
                  "nl": "Leeralgoritmes fysiek verplaatsen"
        },
        {
                  "en": "Converting knowledge to data files",
                  "es": "Convertir conocimiento a archivos de datos",
                  "de": "Wissen zu Datendateien konvertieren",
                  "nl": "Kennis converteren naar databestanden"
        },
        {
                  "en": "Transferring images between computers",
                  "es": "Transferir imágenes entre computadoras",
                  "de": "Bilder zwischen Computern übertragen",
                  "nl": "Afbeeldingen overbrengen tussen computers"
        },
        {
                  "en": "Using a pre-trained model as a starting point for new tasks",
                  "es": "Usar un modelo pre-entrenado como punto de partida para nuevas tareas",
                  "de": "Ein vortrainiertes Modell als Ausgangspunkt für neue Aufgaben verwenden",
                  "nl": "Een voorgetraind model gebruiken als uitgangspunt voor nieuwe taken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Transfer learning leverages knowledge from models trained on large datasets like ImageNet, adapting them for specific tasks with less training data and computational resources.",
                  "es": "El aprendizaje por transferencia aprovecha conocimiento de modelos entrenados en grandes conjuntos de datos como ImageNet, adaptándolos para tareas específicas con menos datos de entrenamiento y recursos computacionales.",
                  "de": "Transfer Learning nutzt Wissen von Modellen die auf großen Datensätzen wie ImageNet trainiert wurden, passt sie für spezifische Aufgaben mit weniger Trainingsdaten und Rechenressourcen an.",
                  "nl": "Transfer learning benut kennis van modellen getraind op grote datasets zoals ImageNet, past ze aan voor specifieke taken met minder trainingsdata en computationele bronnen."
        }
      },
      {
        question: {
                  "en": "What is the vanishing gradient problem in deep neural networks?",
                  "es": "¿Qué es el problema del gradiente que desaparece en redes neuronales profundas?",
                  "de": "Was ist das Problem des verschwindenden Gradienten in tiefen neuronalen Netzwerken?",
                  "nl": "Wat is het verdwijnende gradiënt probleem in diepe neurale netwerken?"
        },
        options: [
        {
                  "en": "Gradients become too small to effectively train early layers",
                  "es": "Los gradientes se vuelven muy pequeños para entrenar efectivamente las capas tempranas",
                  "de": "Gradienten werden zu klein um frühe Schichten effektiv zu trainieren",
                  "nl": "Gradiënten worden te klein om vroege lagen effectief te trainen"
        },
        {
                  "en": "The network becomes invisible",
                  "es": "La red se vuelve invisible",
                  "de": "Das Netzwerk wird unsichtbar",
                  "nl": "Het netwerk wordt onzichtbaar"
        },
        {
                  "en": "Neural networks forget their training",
                  "es": "Las redes neuronales olvidan su entrenamiento",
                  "de": "Neuronale Netzwerke vergessen ihr Training",
                  "nl": "Neurale netwerken vergeten hun training"
        },
        {
                  "en": "Images gradually disappear during processing",
                  "es": "Las imágenes desaparecen gradualmente durante el procesamiento",
                  "de": "Bilder verschwinden allmählich während der Verarbeitung",
                  "nl": "Afbeeldingen verdwijnen geleidelijk tijdens verwerking"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "In very deep networks, gradients can become exponentially smaller as they propagate backward, making it difficult for early layers to learn effectively during backpropagation.",
                  "es": "En redes muy profundas, los gradientes pueden volverse exponencialmente más pequeños mientras se propagan hacia atrás, dificultando que las capas tempranas aprendan efectivamente durante la retropropagación.",
                  "de": "In sehr tiefen Netzwerken können Gradienten exponentiell kleiner werden während sie sich rückwärts ausbreiten, was es für frühe Schichten schwer macht während der Rückpropagation effektiv zu lernen.",
                  "nl": "In zeer diepe netwerken kunnen gradiënten exponentieel kleiner worden terwijl ze achterwaarts propageren, waardoor het moeilijk wordt voor vroege lagen om effectief te leren tijdens backpropagation."
        }
      },
      {
        question: {
                  "en": "What advantage do Residual Networks (ResNets) provide for training very deep CNNs?",
                  "es": "¿Qué ventaja proporcionan las Redes Residuales (ResNets) para entrenar CNN muy profundas?",
                  "de": "Welchen Vorteil bieten Residual Networks (ResNets) für das Training sehr tiefer CNNs?",
                  "nl": "Welk voordeel bieden Residual Networks (ResNets) voor het trainen van zeer diepe CNNs?"
        },
        options: [
        {
                  "en": "They process images faster",
                  "es": "Procesan imágenes más rápido",
                  "de": "Sie verarbeiten Bilder schneller",
                  "nl": "Ze verwerken afbeeldingen sneller"
        },
        {
                  "en": "Skip connections allow gradients to flow directly to earlier layers",
                  "es": "Las conexiones de salto permiten que los gradientes fluyan directamente a capas anteriores",
                  "de": "Skip-Verbindungen ermöglichen Gradienten direkt zu früheren Schichten zu fließen",
                  "nl": "Skip verbindingen stellen gradiënten in staat direct naar eerdere lagen te vloeien"
        },
        {
                  "en": "They only work with residual images",
                  "es": "Solo funcionan con imágenes residuales",
                  "de": "Sie funktionieren nur mit Restbildern",
                  "nl": "Ze werken alleen met residuele afbeeldingen"
        },
        {
                  "en": "They use less computer memory",
                  "es": "Usan menos memoria de computadora",
                  "de": "Sie verwenden weniger Computerspeicher",
                  "nl": "Ze gebruiken minder computergeheugen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "ResNets introduce skip connections that bypass intermediate layers, enabling gradient flow and allowing the training of networks with hundreds of layers without degradation.",
                  "es": "Las ResNets introducen conexiones de salto que evitan capas intermedias, permitiendo el flujo de gradientes y permitiendo el entrenamiento de redes con cientos de capas sin degradación.",
                  "de": "ResNets führen Skip-Verbindungen ein die Zwischenschichten umgehen, ermöglichen Gradientenfluss und erlauben das Training von Netzwerken mit Hunderten von Schichten ohne Degradation.",
                  "nl": "ResNets introduceren skip verbindingen die tussenliggende lagen omzeilen, gradiëntstroom mogelijk maken en het trainen van netwerken met honderden lagen zonder degradatie toestaan."
        }
      },
      {
        question: {
                  "en": "What is the primary purpose of dropout layers in neural networks?",
                  "es": "¿Cuál es el propósito principal de las capas de dropout en redes neuronales?",
                  "de": "Was ist der Hauptzweck von Dropout-Schichten in neuronalen Netzwerken?",
                  "nl": "Wat is het primaire doel van dropout lagen in neurale netwerken?"
        },
        options: [
        {
                  "en": "Drop low-quality images from processing",
                  "es": "Descartar imágenes de baja calidad del procesamiento",
                  "de": "Niedrigqualitative Bilder aus der Verarbeitung ausschließen",
                  "nl": "Afbeeldingen van lage kwaliteit uit verwerking weglaten"
        },
        {
                  "en": "Remove corrupted data from the dataset",
                  "es": "Eliminar datos corruptos del conjunto de datos",
                  "de": "Beschädigte Daten aus dem Datensatz entfernen",
                  "nl": "Beschadigde data uit de dataset verwijderen"
        },
        {
                  "en": "Prevent overfitting by randomly disabling neurons during training",
                  "es": "Prevenir sobreajuste deshabilitando aleatoriamente neuronas durante el entrenamiento",
                  "de": "Overfitting verhindern durch zufälliges Deaktivieren von Neuronen während des Trainings",
                  "nl": "Overfitting voorkomen door neuronen willekeurig uit te schakelen tijdens training"
        },
        {
                  "en": "Speed up training by reducing network size",
                  "es": "Acelerar entrenamiento reduciendo el tamaño de la red",
                  "de": "Training beschleunigen durch Reduzierung der Netzwerkgröße",
                  "nl": "Training versnellen door netwerkgrootte te verminderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Dropout randomly sets a fraction of neurons to zero during training, forcing the network to learn more robust representations and reducing dependency on specific neurons, which helps prevent overfitting.",
                  "es": "Dropout establece aleatoriamente una fracción de neuronas a cero durante el entrenamiento, forzando a la red a aprender representaciones más robustas y reduciendo la dependencia de neuronas específicas, lo que ayuda a prevenir el sobreajuste.",
                  "de": "Dropout setzt zufällig einen Bruchteil der Neuronen auf null während des Trainings, zwingt das Netzwerk robustere Repräsentationen zu lernen und reduziert Abhängigkeit von spezifischen Neuronen, was Overfitting verhindert.",
                  "nl": "Dropout stelt willekeurig een fractie van neuronen in op nul tijdens training, dwingt het netwerk robuustere representaties te leren en vermindert afhankelijkheid van specifieke neuronen, wat overfitting helpt voorkomen."
        }
      },
      {
        question: {
                  "en": "What does the F1-score measure in classification tasks?",
                  "es": "¿Qué mide el F1-score en tareas de clasificación?",
                  "de": "Was misst der F1-Score in Klassifikationsaufgaben?",
                  "nl": "Wat meet de F1-score bij classificatietaken?"
        },
        options: [
        {
                  "en": "Processing time for one complete forward pass",
                  "es": "Tiempo de procesamiento para un pase hacia adelante completo",
                  "de": "Verarbeitungszeit für einen vollständigen Vorwärtsdurchgang",
                  "nl": "Verwerkingstijd voor één complete forward pass"
        },
        {
                  "en": "Number of correct predictions out of total predictions",
                  "es": "Número de predicciones correctas del total de predicciones",
                  "de": "Anzahl korrekter Vorhersagen von Gesamtvorhersagen",
                  "nl": "Aantal correcte voorspellingen van totale voorspellingen"
        },
        {
                  "en": "Memory usage during model training",
                  "es": "Uso de memoria durante entrenamiento del modelo",
                  "de": "Speicherverbrauch während Modelltraining",
                  "nl": "Geheugengebruik tijdens modeltraining"
        },
        {
                  "en": "Harmonic mean of precision and recall",
                  "es": "Media armónica de precisión y recall",
                  "de": "Harmonischer Mittelwert von Präzision und Recall",
                  "nl": "Harmonisch gemiddelde van precision en recall"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "F1-score combines precision (ratio of true positives to predicted positives) and recall (ratio of true positives to actual positives) into a single metric, useful for evaluating performance on imbalanced datasets.",
                  "es": "El F1-score combina precisión (ratio de verdaderos positivos a positivos predichos) y recall (ratio de verdaderos positivos a positivos reales) en una sola métrica, útil para evaluar rendimiento en conjuntos de datos desbalanceados.",
                  "de": "F1-Score kombiniert Präzision (Verhältnis von wahren Positiven zu vorhergesagten Positiven) und Recall (Verhältnis von wahren Positiven zu tatsächlichen Positiven) in eine einzelne Metrik, nützlich zur Bewertung der Leistung bei unausgewogenen Datensätzen.",
                  "nl": "F1-score combineert precision (verhouding van true positives tot voorspelde positives) en recall (verhouding van true positives tot werkelijke positives) in één metriek, nuttig voor het evalueren van prestaties op ongebalanceerde datasets."
        }
      },
      {
        question: {
                  "en": "What is the purpose of batch normalization in deep neural networks?",
                  "es": "¿Cuál es el propósito de la normalización por lotes en redes neuronales profundas?",
                  "de": "Was ist der Zweck der Batch-Normalisierung in tiefen neuronalen Netzwerken?",
                  "nl": "Wat is het doel van batch normalization in diepe neurale netwerken?"
        },
        options: [
        {
                  "en": "Balance the number of classes in the dataset",
                  "es": "Equilibrar el número de clases en el conjunto de datos",
                  "de": "Anzahl der Klassen im Datensatz ausbalancieren",
                  "nl": "Het aantal klassen in de dataset balanceren"
        },
        {
                  "en": "Standardize image sizes before processing",
                  "es": "Estandarizar tamaños de imagen antes del procesamiento",
                  "de": "Bildgrößen vor der Verarbeitung standardisieren",
                  "nl": "Beeldgroottes standaardiseren voor verwerking"
        },
        {
                  "en": "Group training data into equal-sized batches",
                  "es": "Agrupar datos de entrenamiento en lotes de igual tamaño",
                  "de": "Trainingsdaten in gleichgroße Batches gruppieren",
                  "nl": "Trainingsdata groeperen in gelijk grote batches"
        },
        {
                  "en": "Normalize layer inputs to accelerate training and improve stability",
                  "es": "Normalizar entradas de capas para acelerar entrenamiento y mejorar estabilidad",
                  "de": "Schichteingaben normalisieren um Training zu beschleunigen und Stabilität zu verbessern",
                  "nl": "Laaginputs normaliseren om training te versnellen en stabiliteit te verbeteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Batch normalization normalizes the inputs to each layer, reducing internal covariate shift, allowing higher learning rates, and making training more stable and faster to converge.",
                  "es": "La normalización por lotes normaliza las entradas a cada capa, reduciendo el cambio covariado interno, permitiendo tasas de aprendizaje más altas, y haciendo el entrenamiento más estable y rápido para converger.",
                  "de": "Batch-Normalisierung normalisiert die Eingaben zu jeder Schicht, reduziert interne Kovariatenverschiebung, erlaubt höhere Lernraten und macht Training stabiler und schneller konvergierend.",
                  "nl": "Batch normalization normaliseert de inputs naar elke laag, vermindert interne covariate shift, staat hogere learning rates toe en maakt training stabieler en sneller convergerend."
        }
      },
      {
        question: {
                  "en": "What is the difference between fine-tuning and feature extraction in transfer learning?",
                  "es": "¿Cuál es la diferencia entre fine-tuning y extracción de características en aprendizaje por transferencia?",
                  "de": "Was ist der Unterschied zwischen Fine-Tuning und Merkmalsextraktion beim Transfer Learning?",
                  "nl": "Wat is het verschil tussen fine-tuning en feature extraction bij transfer learning?"
        },
        options: [
        {
                  "en": "Feature extraction requires more computational power",
                  "es": "Extracción de características requiere más poder computacional",
                  "de": "Merkmalsextraktion benötigt mehr Rechenleistung",
                  "nl": "Feature extraction vereist meer rekenkracht"
        },
        {
                  "en": "Both methods work exactly the same way",
                  "es": "Ambos métodos funcionan exactamente de la misma manera",
                  "de": "Beide Methoden funktionieren genau gleich",
                  "nl": "Beide methodes werken precies hetzelfde"
        },
        {
                  "en": "Fine-tuning is faster than feature extraction",
                  "es": "Fine-tuning es más rápido que extracción de características",
                  "de": "Fine-Tuning ist schneller als Merkmalsextraktion",
                  "nl": "Fine-tuning is sneller dan feature extraction"
        },
        {
                  "en": "Fine-tuning updates pre-trained weights, feature extraction freezes them",
                  "es": "Fine-tuning actualiza pesos pre-entrenados, extracción de características los congela",
                  "de": "Fine-Tuning aktualisiert vortrainierte Gewichte, Merkmalsextraktion friert sie ein",
                  "nl": "Fine-tuning werkt voorgetrainde gewichten bij, feature extraction bevriest ze"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "In feature extraction, pre-trained layers are frozen and used as fixed feature extractors, while fine-tuning allows gradual updating of pre-trained weights to adapt to the new task.",
                  "es": "En extracción de características, las capas pre-entrenadas se congelan y se usan como extractores de características fijos, mientras que fine-tuning permite actualización gradual de pesos pre-entrenados para adaptarse a la nueva tarea.",
                  "de": "Bei Merkmalsextraktion werden vortrainierte Schichten eingefroren und als feste Merkmalsextraktoren verwendet, während Fine-Tuning graduelle Aktualisierung vortrainierter Gewichte zur Anpassung an die neue Aufgabe erlaubt.",
                  "nl": "Bij feature extraction worden voorgetrainde lagen bevroren en gebruikt als vaste feature extractors, terwijl fine-tuning geleidelijke update van voorgetrainde gewichten toestaat om aan te passen aan de nieuwe taak."
        }
      },
      {
        question: {
                  "en": "What is the purpose of data normalization before training neural networks?",
                  "es": "¿Cuál es el propósito de la normalización de datos antes de entrenar redes neuronales?",
                  "de": "Was ist der Zweck der Datennormalisierung vor dem Training neuronaler Netzwerke?",
                  "nl": "Wat is het doel van datanormalisatie voor het trainen van neurale netwerken?"
        },
        options: [
        {
                  "en": "Scale inputs to similar ranges for faster and more stable convergence",
                  "es": "Escalar entradas a rangos similares para convergencia más rápida y estable",
                  "de": "Eingaben auf ähnliche Bereiche skalieren für schnellere und stabilere Konvergenz",
                  "nl": "Inputs schalen naar vergelijkbare bereiken voor snellere en stabielere convergentie"
        },
        {
                  "en": "Organize images by classification category",
                  "es": "Organizar imágenes por categoría de clasificación",
                  "de": "Bilder nach Klassifikationskategorie organisieren",
                  "nl": "Afbeeldingen organiseren per classificatiecategorie"
        },
        {
                  "en": "Convert all images to the same file format",
                  "es": "Convertir todas las imágenes al mismo formato de archivo",
                  "de": "Alle Bilder in dasselbe Dateiformat konvertieren",
                  "nl": "Alle afbeeldingen naar hetzelfde bestandsformaat converteren"
        },
        {
                  "en": "Remove duplicate images from the dataset",
                  "es": "Eliminar imágenes duplicadas del conjunto de datos",
                  "de": "Doppelte Bilder aus dem Datensatz entfernen",
                  "nl": "Dubbele afbeeldingen uit de dataset verwijderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Normalization (e.g., scaling pixel values to 0-1 range) ensures all input features have similar scales, preventing features with larger ranges from dominating training and enabling faster convergence.",
                  "es": "La normalización (ej., escalar valores de píxeles al rango 0-1) asegura que todas las características de entrada tengan escalas similares, previniendo que características con rangos más grandes dominen el entrenamiento y permitiendo convergencia más rápida.",
                  "de": "Normalisierung (z.B. Skalierung von Pixelwerten auf den Bereich 0-1) stellt sicher dass alle Eingabemerkmale ähnliche Skalen haben, verhindert dass Merkmale mit größeren Bereichen das Training dominieren und ermöglicht schnellere Konvergenz.",
                  "nl": "Normalisatie (bijv. pixelwaarden schalen naar 0-1 bereik) zorgt ervoor dat alle input features vergelijkbare schalen hebben, voorkomt dat features met grotere bereiken training domineren en maakt snellere convergentie mogelijk."
        }
      },
      {
        question: {
                  "en": "What is the purpose of stride in convolutional layers?",
                  "es": "¿Cuál es el propósito del stride en capas convolucionales?",
                  "de": "Was ist der Zweck der Schrittweite in Faltungsschichten?",
                  "nl": "Wat is het doel van stride in convolutional layers?"
        },
        options: [
        {
                  "en": "Determines the number of filters in the layer",
                  "es": "Determina el número de filtros en la capa",
                  "de": "Bestimmt die Anzahl der Filter in der Schicht",
                  "nl": "Bepaalt het aantal filters in de laag"
        },
        {
                  "en": "Sets the depth of the convolutional layer",
                  "es": "Establece la profundidad de la capa convolucional",
                  "de": "Setzt die Tiefe der Faltungsschicht",
                  "nl": "Stelt de diepte van de convolutional layer in"
        },
        {
                  "en": "Controls the activation function used",
                  "es": "Controla la función de activación utilizada",
                  "de": "Kontrolliert die verwendete Aktivierungsfunktion",
                  "nl": "Controleert de gebruikte activatiefunctie"
        },
        {
                  "en": "Controls how many pixels the filter moves across the input",
                  "es": "Controla cuántos píxeles se mueve el filtro a través de la entrada",
                  "de": "Kontrolliert wie viele Pixel der Filter über die Eingabe bewegt",
                  "nl": "Controleert hoeveel pixels de filter over de input beweegt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Stride determines the step size of the convolution operation. A stride of 1 moves the filter one pixel at a time, while larger strides skip pixels, reducing output dimensions and computational load.",
                  "es": "El stride determina el tamaño del paso de la operación de convolución. Un stride de 1 mueve el filtro un píxel a la vez, mientras que strides más grandes saltan píxeles, reduciendo dimensiones de salida y carga computacional.",
                  "de": "Schrittweite bestimmt die Schrittgröße der Faltungsoperation. Eine Schrittweite von 1 bewegt den Filter jeweils einen Pixel, während größere Schrittweiten Pixel überspringen, Ausgabedimensionen und Rechenlast reduzieren.",
                  "nl": "Stride bepaalt de stapgrootte van de convolutie-operatie. Een stride van 1 beweegt de filter één pixel per keer, terwijl grotere strides pixels overslaan, output dimensies en computationele belasting verminderen."
        }
      },
      {
        question: {
                  "en": "What is the confusion matrix used for in classification evaluation?",
                  "es": "¿Para qué se usa la matriz de confusión en evaluación de clasificación?",
                  "de": "Wofür wird die Konfusionsmatrix in der Klassifikationsbewertung verwendet?",
                  "nl": "Waarvoor wordt de confusion matrix gebruikt bij classificatie-evaluatie?"
        },
        options: [
        {
                  "en": "Visualize true vs predicted classifications for each class",
                  "es": "Visualizar clasificaciones verdaderas vs predichas para cada clase",
                  "de": "Wahre vs. vorhergesagte Klassifikationen für jede Klasse visualisieren",
                  "nl": "Werkelijke vs voorspelde classificaties voor elke klasse visualiseren"
        },
        {
                  "en": "Track memory usage during training",
                  "es": "Rastrear uso de memoria durante entrenamiento",
                  "de": "Speicherverbrauch während des Trainings verfolgen",
                  "nl": "Geheugengebruik tijdens training bijhouden"
        },
        {
                  "en": "Display network architecture layers",
                  "es": "Mostrar capas de arquitectura de red",
                  "de": "Netzwerkarchitektur-Schichten anzeigen",
                  "nl": "Netwerkarchitectuur lagen weergeven"
        },
        {
                  "en": "Measure training time for each epoch",
                  "es": "Medir tiempo de entrenamiento para cada época",
                  "de": "Trainingszeit für jede Epoche messen",
                  "nl": "Trainingstijd voor elke epoch meten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A confusion matrix shows the count of true vs predicted classifications, revealing which classes are often confused with each other and helping identify specific model weaknesses.",
                  "es": "Una matriz de confusión muestra el conteo de clasificaciones verdaderas vs predichas, revelando qué clases se confunden frecuentemente entre sí y ayudando a identificar debilidades específicas del modelo.",
                  "de": "Eine Konfusionsmatrix zeigt die Anzahl wahrer vs. vorhergesagter Klassifikationen, offenbart welche Klassen oft miteinander verwechselt werden und hilft spezifische Modellschwächen zu identifizieren.",
                  "nl": "Een confusion matrix toont de telling van werkelijke vs voorspelde classificaties, onthult welke klassen vaak met elkaar worden verward en helpt specifieke modelzwaktes te identificeren."
        }
      },
      {
        question: {
                  "en": "What does the term 'receptive field' refer to in CNNs?",
                  "es": "¿A qué se refiere el término 'campo receptivo' en las CNN?",
                  "de": "Worauf bezieht sich der Begriff 'rezeptives Feld' in CNNs?",
                  "nl": "Waar verwijst de term 'receptive field' naar in CNNs?"
        },
        options: [
        {
                  "en": "The number of connections between layers",
                  "es": "El número de conexiones entre capas",
                  "de": "Die Anzahl der Verbindungen zwischen Schichten",
                  "nl": "Het aantal verbindingen tussen lagen"
        },
        {
                  "en": "The region of input image that influences a particular neuron's output",
                  "es": "La región de imagen de entrada que influye en la salida de una neurona particular",
                  "de": "Die Region des Eingabebildes die die Ausgabe eines bestimmten Neurons beeinflusst",
                  "nl": "Het gebied van de inputafbeelding dat de output van een bepaald neuron beïnvloedt"
        },
        {
                  "en": "The activation area of pooling operations",
                  "es": "El área de activación de operaciones de pooling",
                  "de": "Der Aktivierungsbereich von Pooling-Operationen",
                  "nl": "Het activatiegebied van pooling operaties"
        },
        {
                  "en": "The size of convolutional filters used",
                  "es": "El tamaño de filtros convolucionales utilizados",
                  "de": "Die Größe der verwendeten Faltungsfilter",
                  "nl": "De grootte van gebruikte convolutional filters"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The receptive field represents the spatial area in the original input image that can influence the computation of a specific feature or neuron in deeper layers of the network.",
                  "es": "El campo receptivo representa el área espacial en la imagen de entrada original que puede influir en el cálculo de una característica o neurona específica en capas más profundas de la red.",
                  "de": "Das rezeptive Feld repräsentiert den räumlichen Bereich im ursprünglichen Eingabebild der die Berechnung eines spezifischen Merkmals oder Neurons in tieferen Schichten des Netzwerks beeinflussen kann.",
                  "nl": "Het receptive field vertegenwoordigt het ruimtelijke gebied in de originele inputafbeelding dat de berekening van een specifieke feature of neuron in diepere lagen van het netwerk kan beïnvloeden."
        }
      },
      {
        question: {
                  "en": "What is the primary advantage of using Adam optimizer over standard gradient descent?",
                  "es": "¿Cuál es la ventaja principal de usar el optimizador Adam sobre el descenso de gradiente estándar?",
                  "de": "Was ist der Hauptvorteil der Verwendung des Adam-Optimizers gegenüber standardmäßigem Gradientenabstieg?",
                  "nl": "Wat is het primaire voordeel van het gebruik van Adam optimizer boven standaard gradient descent?"
        },
        options: [
        {
                  "en": "Adapts learning rates individually for each parameter automatically",
                  "es": "Adapta tasas de aprendizaje individualmente para cada parámetro automáticamente",
                  "de": "Passt Lernraten individuell für jeden Parameter automatisch an",
                  "nl": "Past learning rates individueel voor elke parameter automatisch aan"
        },
        {
                  "en": "Works only with convolutional layers",
                  "es": "Funciona solo con capas convolucionales",
                  "de": "Funktioniert nur mit Faltungsschichten",
                  "nl": "Werkt alleen met convolutional layers"
        },
        {
                  "en": "Uses less memory during training",
                  "es": "Usa menos memoria durante entrenamiento",
                  "de": "Verwendet weniger Speicher während des Trainings",
                  "nl": "Gebruikt minder geheugen tijdens training"
        },
        {
                  "en": "Processes images faster than other optimizers",
                  "es": "Procesa imágenes más rápido que otros optimizadores",
                  "de": "Verarbeitet Bilder schneller als andere Optimizer",
                  "nl": "Verwerkt afbeeldingen sneller dan andere optimizers"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Adam combines the advantages of momentum and adaptive learning rates, maintaining separate learning rates for each parameter and automatically adjusting them based on gradient history and magnitude.",
                  "es": "Adam combina las ventajas de momentum y tasas de aprendizaje adaptativas, manteniendo tasas de aprendizaje separadas para cada parámetro y ajustándolas automáticamente basado en historial y magnitud de gradientes.",
                  "de": "Adam kombiniert die Vorteile von Momentum und adaptiven Lernraten, behält separate Lernraten für jeden Parameter bei und passt sie automatisch basierend auf Gradientenhistorie und -größe an.",
                  "nl": "Adam combineert de voordelen van momentum en adaptieve learning rates, houdt aparte learning rates voor elke parameter bij en past ze automatisch aan gebaseerd op gradiëntgeschiedenis en grootte."
        }
      },
      {
        question: {
                  "en": "What is the purpose of padding in convolutional layers?",
                  "es": "¿Cuál es el propósito del padding en capas convolucionales?",
                  "de": "Was ist der Zweck von Padding in Faltungsschichten?",
                  "nl": "Wat is het doel van padding in convolutional layers?"
        },
        options: [
        {
                  "en": "Preserve spatial dimensions and process edge information",
                  "es": "Preservar dimensiones espaciales y procesar información de bordes",
                  "de": "Räumliche Dimensionen bewahren und Randinformationen verarbeiten",
                  "nl": "Ruimtelijke dimensies behouden en randinformatie verwerken"
        },
        {
                  "en": "Speed up convolution operations",
                  "es": "Acelerar operaciones de convolución",
                  "de": "Faltungsoperationen beschleunigen",
                  "nl": "Convolutie-operaties versnellen"
        },
        {
                  "en": "Increase the number of filters",
                  "es": "Aumentar el número de filtros",
                  "de": "Die Anzahl der Filter erhöhen",
                  "nl": "Het aantal filters verhogen"
        },
        {
                  "en": "Add extra training data to the dataset",
                  "es": "Agregar datos de entrenamiento extra al conjunto",
                  "de": "Zusätzliche Trainingsdaten zum Datensatz hinzufügen",
                  "nl": "Extra trainingsdata toevoegen aan de dataset"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Padding adds zeros (or other values) around the input edges, allowing the convolution to maintain the original spatial dimensions and ensuring edge pixels receive equal attention during processing.",
                  "es": "El padding agrega ceros (u otros valores) alrededor de los bordes de entrada, permitiendo que la convolución mantenga las dimensiones espaciales originales y asegurando que los píxeles de borde reciban igual atención durante el procesamiento.",
                  "de": "Padding fügt Nullen (oder andere Werte) um die Eingaberänder hinzu, ermöglicht der Faltung die ursprünglichen räumlichen Dimensionen beizubehalten und stellt sicher dass Randpixel gleiche Aufmerksamkeit während der Verarbeitung erhalten.",
                  "nl": "Padding voegt nullen (of andere waarden) toe rondom de inputranden, stelt de convolutie in staat de originele ruimtelijke dimensies te behouden en zorgt ervoor dat randpixels gelijke aandacht krijgen tijdens verwerking."
        }
      },
      {
        question: {
                  "en": "What is the difference between precision and recall in classification metrics?",
                  "es": "¿Cuál es la diferencia entre precisión y recall en métricas de clasificación?",
                  "de": "Was ist der Unterschied zwischen Präzision und Recall in Klassifikationsmetriken?",
                  "nl": "Wat is het verschil tussen precision en recall bij classificatiemetrieken?"
        },
        options: [
        {
                  "en": "Precision measures positive prediction accuracy, recall measures positive detection completeness",
                  "es": "Precisión mide exactitud de predicción positiva, recall mide completitud de detección positiva",
                  "de": "Präzision misst positive Vorhersagegenauigkeit, Recall misst positive Erkennungsvollständigkeit",
                  "nl": "Precision meet positieve voorspellingsnauwkeurigheid, recall meet positieve detectievolledigheid"
        },
        {
                  "en": "They measure the same thing with different names",
                  "es": "Miden lo mismo con nombres diferentes",
                  "de": "Sie messen dasselbe mit verschiedenen Namen",
                  "nl": "Ze meten hetzelfde met verschillende namen"
        },
        {
                  "en": "Precision measures speed, recall measures accuracy",
                  "es": "Precisión mide velocidad, recall mide exactitud",
                  "de": "Präzision misst Geschwindigkeit, Recall misst Genauigkeit",
                  "nl": "Precision meet snelheid, recall meet nauwkeurigheid"
        },
        {
                  "en": "Precision is always higher than recall",
                  "es": "Precisión es siempre mayor que recall",
                  "de": "Präzision ist immer höher als Recall",
                  "nl": "Precision is altijd hoger dan recall"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Precision = TP/(TP+FP) measures how many positive predictions were correct, while recall = TP/(TP+FN) measures how many actual positives were correctly identified. High precision means few false positives, high recall means few false negatives.",
                  "es": "Precisión = VP/(VP+FP) mide cuántas predicciones positivas fueron correctas, mientras recall = VP/(VP+FN) mide cuántos positivos reales fueron identificados correctamente. Alta precisión significa pocos falsos positivos, alto recall significa pocos falsos negativos.",
                  "de": "Präzision = TP/(TP+FP) misst wie viele positive Vorhersagen korrekt waren, während Recall = TP/(TP+FN) misst wie viele tatsächliche Positive korrekt identifiziert wurden. Hohe Präzision bedeutet wenige falsche Positive, hoher Recall bedeutet wenige falsche Negative.",
                  "nl": "Precision = TP/(TP+FP) meet hoeveel positieve voorspellingen correct waren, terwijl recall = TP/(TP+FN) meet hoeveel werkelijke positieven correct werden geïdentificeerd. Hoge precision betekent weinig false positives, hoge recall betekent weinig false negatives."
        }
      },
      {
        question: {
                  "en": "What is the purpose of early stopping in neural network training?",
                  "es": "¿Cuál es el propósito de la parada temprana en el entrenamiento de redes neuronales?",
                  "de": "Was ist der Zweck des frühen Stoppens beim Training neuronaler Netzwerke?",
                  "nl": "Wat is het doel van early stopping bij het trainen van neurale netwerken?"
        },
        options: [
        {
                  "en": "Prevent overfitting by stopping when validation performance plateaus",
                  "es": "Prevenir sobreajuste parando cuando el rendimiento de validación se estabiliza",
                  "de": "Overfitting verhindern durch Stoppen wenn Validierungsleistung stagniert",
                  "nl": "Overfitting voorkomen door te stoppen wanneer validatieprestaties stabiliseren"
        },
        {
                  "en": "Stop training when accuracy reaches 100%",
                  "es": "Parar entrenamiento cuando exactitud alcanza 100%",
                  "de": "Training stoppen wenn Genauigkeit 100% erreicht",
                  "nl": "Training stoppen wanneer nauwkeurigheid 100% bereikt"
        },
        {
                  "en": "Save computational time by stopping after fixed iterations",
                  "es": "Ahorrar tiempo computacional parando después de iteraciones fijas",
                  "de": "Rechenzeit sparen durch Stoppen nach festen Iterationen",
                  "nl": "Computatietijd besparen door te stoppen na vaste iteraties"
        },
        {
                  "en": "End training due to hardware limitations",
                  "es": "Terminar entrenamiento debido a limitaciones de hardware",
                  "de": "Training aufgrund von Hardware-Einschränkungen beenden",
                  "nl": "Training beëindigen vanwege hardwarebeperkingen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Early stopping monitors validation performance and stops training when it stops improving for a certain number of epochs, preventing the model from overfitting to training data.",
                  "es": "La parada temprana monitorea el rendimiento de validación y para el entrenamiento cuando deja de mejorar por cierto número de épocas, previniendo que el modelo sobreajuste a los datos de entrenamiento.",
                  "de": "Frühes Stoppen überwacht Validierungsleistung und stoppt Training wenn es für eine bestimmte Anzahl von Epochen aufhört sich zu verbessern, verhindert dass das Modell auf Trainingsdaten überanpasst.",
                  "nl": "Early stopping monitort validatieprestaties en stopt training wanneer het voor een bepaald aantal epochs stopt met verbeteren, voorkomt dat het model overfit op trainingsdata."
        }
      },
      {
        question: {
                  "en": "What is the main purpose of data shuffling during training?",
                  "es": "¿Cuál es el propósito principal de mezclar datos durante el entrenamiento?",
                  "de": "Was ist der Hauptzweck des Datenmischens während des Trainings?",
                  "nl": "Wat is het hoofddoel van data shuffling tijdens training?"
        },
        options: [
        {
                  "en": "Speed up the training process",
                  "es": "Acelerar el proceso de entrenamiento",
                  "de": "Den Trainingsprozess beschleunigen",
                  "nl": "Het trainingsproces versnellen"
        },
        {
                  "en": "Reduce memory usage",
                  "es": "Reducir uso de memoria",
                  "de": "Speicherverbrauch reduzieren",
                  "nl": "Geheugengebruik verminderen"
        },
        {
                  "en": "Prevent the model from learning the order of examples",
                  "es": "Prevenir que el modelo aprenda el orden de los ejemplos",
                  "de": "Verhindern dass das Modell die Reihenfolge der Beispiele lernt",
                  "nl": "Voorkomen dat het model de volgorde van voorbeelden leert"
        },
        {
                  "en": "Improve image quality",
                  "es": "Mejorar calidad de imagen",
                  "de": "Bildqualität verbessern",
                  "nl": "Beeldkwaliteit verbeteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Shuffling randomizes the order of training examples, ensuring the model doesn't learn patterns based on data sequence and helping achieve better generalization by exposing varied combinations during training.",
                  "es": "Mezclar aleatoriza el orden de ejemplos de entrenamiento, asegurando que el modelo no aprenda patrones basados en secuencia de datos y ayudando a lograr mejor generalización exponiendo combinaciones variadas durante el entrenamiento.",
                  "de": "Mischen randomisiert die Reihenfolge von Trainingsbeispielen, stellt sicher dass das Modell keine Muster basierend auf Datensequenz lernt und hilft bessere Generalisierung zu erreichen durch Exposition verschiedener Kombinationen während des Trainings.",
                  "nl": "Shuffling randomiseert de volgorde van trainingsvoorbeelden, zorgt ervoor dat het model geen patronen leert gebaseerd op datavolgorde en helpt betere generalisatie te bereiken door gevarieerde combinaties bloot te stellen tijdens training."
        }
      },
      {
        question: {
                  "en": "What is the key difference between VGG and ResNet architectures?",
                  "es": "¿Cuál es la diferencia clave entre las arquitecturas VGG y ResNet?",
                  "de": "Was ist der Hauptunterschied zwischen VGG- und ResNet-Architekturen?",
                  "nl": "Wat is het belangrijkste verschil tussen VGG en ResNet architecturen?"
        },
        options: [
        {
                  "en": "VGG uses larger filters than ResNet",
                  "es": "VGG usa filtros más grandes que ResNet",
                  "de": "VGG verwendet größere Filter als ResNet",
                  "nl": "VGG gebruikt grotere filters dan ResNet"
        },
        {
                  "en": "ResNet uses skip connections while VGG uses only sequential layers",
                  "es": "ResNet usa conexiones de salto mientras VGG usa solo capas secuenciales",
                  "de": "ResNet verwendet Skip-Verbindungen während VGG nur sequenzielle Schichten verwendet",
                  "nl": "ResNet gebruikt skip verbindingen terwijl VGG alleen sequentiële lagen gebruikt"
        },
        {
                  "en": "ResNet only works with grayscale images",
                  "es": "ResNet solo funciona con imágenes en escala de grises",
                  "de": "ResNet funktioniert nur mit Graustufenbildern",
                  "nl": "ResNet werkt alleen met grijswaardenafbeeldingen"
        },
        {
                  "en": "VGG is newer than ResNet",
                  "es": "VGG es más nuevo que ResNet",
                  "de": "VGG ist neuer als ResNet",
                  "nl": "VGG is nieuwer dan ResNet"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "ResNet introduced skip connections (residual connections) that allow information to bypass layers, enabling training of much deeper networks, while VGG follows a traditional sequential architecture without skip connections.",
                  "es": "ResNet introdujo conexiones de salto (conexiones residuales) que permiten que la información evite capas, permitiendo el entrenamiento de redes mucho más profundas, mientras que VGG sigue una arquitectura secuencial tradicional sin conexiones de salto.",
                  "de": "ResNet führte Skip-Verbindungen (Residualverbindungen) ein die Informationen ermöglichen Schichten zu umgehen, ermöglicht Training viel tieferer Netzwerke, während VGG einer traditionellen sequenziellen Architektur ohne Skip-Verbindungen folgt.",
                  "nl": "ResNet introduceerde skip verbindingen (residual verbindingen) die informatie toestaan lagen te omzeilen, waardoor training van veel diepere netwerken mogelijk wordt, terwijl VGG een traditionele sequentiële architectuur volgt zonder skip verbindingen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of learning rate scheduling in training?",
                  "es": "¿Cuál es el propósito de la programación de tasa de aprendizaje en el entrenamiento?",
                  "de": "Was ist der Zweck der Lernraten-Planung beim Training?",
                  "nl": "Wat is het doel van learning rate scheduling bij training?"
        },
        options: [
        {
                  "en": "Adjust learning rate during training to improve convergence",
                  "es": "Ajustar tasa de aprendizaje durante entrenamiento para mejorar convergencia",
                  "de": "Lernrate während Training anpassen um Konvergenz zu verbessern",
                  "nl": "Learning rate aanpassen tijdens training om convergentie te verbeteren"
        },
        {
                  "en": "Schedule data augmentation operations",
                  "es": "Programar operaciones de aumento de datos",
                  "de": "Datenaugmentations-Operationen planen",
                  "nl": "Data augmentation operaties plannen"
        },
        {
                  "en": "Schedule when to start and stop training",
                  "es": "Programar cuándo iniciar y parar entrenamiento",
                  "de": "Planen wann Training startet und stoppt",
                  "nl": "Plannen wanneer training start en stopt"
        },
        {
                  "en": "Determine the training batch schedule",
                  "es": "Determinar el horario de lotes de entrenamiento",
                  "de": "Den Trainings-Batch-Zeitplan bestimmen",
                  "nl": "Het training batch schema bepalen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Learning rate scheduling gradually reduces the learning rate during training (e.g., step decay, exponential decay), allowing faster initial learning and fine-tuned convergence to optimal parameters later.",
                  "es": "La programación de tasa de aprendizaje reduce gradualmente la tasa de aprendizaje durante el entrenamiento (ej., decaimiento por pasos, decaimiento exponencial), permitiendo aprendizaje inicial más rápido y convergencia afinada a parámetros óptimos después.",
                  "de": "Lernraten-Planung reduziert allmählich die Lernrate während des Trainings (z.B. Schritt-Zerfall, exponentieller Zerfall), ermöglicht schnelleres anfängliches Lernen und fein abgestimmte Konvergenz zu optimalen Parametern später.",
                  "nl": "Learning rate scheduling vermindert geleidelijk de learning rate tijdens training (bijv. step decay, exponential decay), staat sneller initieel leren en fijn afgestemde convergentie naar optimale parameters later toe."
        }
      },
      {
        question: {
                  "en": "What is the purpose of global average pooling in CNNs?",
                  "es": "¿Cuál es el propósito del global average pooling en las CNN?",
                  "de": "Was ist der Zweck des globalen Average-Poolings in CNNs?",
                  "nl": "Wat is het doel van global average pooling in CNNs?"
        },
        options: [
        {
                  "en": "Reduce each feature map to a single value by averaging all spatial locations",
                  "es": "Reducir cada mapa de características a un solo valor promediando todas las ubicaciones espaciales",
                  "de": "Jede Feature-Map auf einen einzelnen Wert reduzieren durch Mittelung aller räumlichen Positionen",
                  "nl": "Elke feature map reduceren tot een enkele waarde door alle ruimtelijke locaties te middelen"
        },
        {
                  "en": "Pool features from multiple images together",
                  "es": "Agrupar características de múltiples imágenes juntas",
                  "de": "Features aus mehreren Bildern zusammenführen",
                  "nl": "Features van meerdere afbeeldingen samenvoegen"
        },
        {
                  "en": "Average the weights across all layers",
                  "es": "Promediar los pesos a través de todas las capas",
                  "de": "Die Gewichte über alle Schichten mitteln",
                  "nl": "De gewichten over alle lagen middelen"
        },
        {
                  "en": "Calculate the global average of all pixel values in the image",
                  "es": "Calcular el promedio global de todos los valores de píxeles en la imagen",
                  "de": "Den globalen Durchschnitt aller Pixelwerte im Bild berechnen",
                  "nl": "Het globale gemiddelde van alle pixelwaarden in de afbeelding berekenen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Global average pooling averages each entire feature map into a single value, reducing spatial dimensions completely while maintaining channel count, often used before final classification layers to reduce parameters.",
                  "es": "Global average pooling promedia cada mapa de características completo en un solo valor, reduciendo dimensiones espaciales completamente mientras mantiene el conteo de canales, a menudo usado antes de capas de clasificación final para reducir parámetros.",
                  "de": "Globales Average-Pooling mittelt jede gesamte Feature-Map zu einem einzelnen Wert, reduziert räumliche Dimensionen vollständig während Kanalanzahl beibehalten wird, oft vor finalen Klassifikationsschichten verwendet um Parameter zu reduzieren.",
                  "nl": "Global average pooling middelt elke volledige feature map tot een enkele waarde, vermindert ruimtelijke dimensies volledig terwijl kanaaltellingen behouden blijven, vaak gebruikt voor finale classificatielagen om parameters te verminderen."
        }
      },
      {
        question: {
                  "en": "What is the role of 1x1 convolutions in CNN architectures?",
                  "es": "¿Cuál es el papel de las convoluciones 1x1 en arquitecturas CNN?",
                  "de": "Was ist die Rolle von 1x1-Faltungen in CNN-Architekturen?",
                  "nl": "Wat is de rol van 1x1 convoluties in CNN architecturen?"
        },
        options: [
        {
                  "en": "Initialize all filter weights to one",
                  "es": "Inicializar todos los pesos de filtro a uno",
                  "de": "Alle Filtergewichte auf eins initialisieren",
                  "nl": "Alle filtergewichten initialiseren op één"
        },
        {
                  "en": "Perform edge detection on images",
                  "es": "Realizar detección de bordes en imágenes",
                  "de": "Kantenerkennung auf Bildern durchführen",
                  "nl": "Randdetectie uitvoeren op afbeeldingen"
        },
        {
                  "en": "Always reduce image size to 1x1 pixel",
                  "es": "Siempre reducir tamaño de imagen a 1x1 píxel",
                  "de": "Bildgröße immer auf 1x1 Pixel reduzieren",
                  "nl": "Afbeeldingsgrootte altijd reduceren tot 1x1 pixel"
        },
        {
                  "en": "Reduce or increase channel dimensions without affecting spatial dimensions",
                  "es": "Reducir o aumentar dimensiones de canal sin afectar dimensiones espaciales",
                  "de": "Kanal-Dimensionen reduzieren oder erhöhen ohne räumliche Dimensionen zu beeinflussen",
                  "nl": "Kanaaldimensies verminderen of verhogen zonder ruimtelijke dimensies te beïnvloeden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "1x1 convolutions perform dimensionality reduction or expansion across channels, add non-linearity, and enable efficient cross-channel information mixing, used extensively in architectures like Inception and MobileNet.",
                  "es": "Las convoluciones 1x1 realizan reducción o expansión de dimensionalidad a través de canales, agregan no linealidad y permiten mezcla eficiente de información entre canales, usadas extensivamente en arquitecturas como Inception y MobileNet.",
                  "de": "1x1-Faltungen führen Dimensionsreduktion oder -erweiterung über Kanäle durch, fügen Nichtlinearität hinzu und ermöglichen effiziente kanalübergreifende Informationsmischung, werden extensiv in Architekturen wie Inception und MobileNet verwendet.",
                  "nl": "1x1 convoluties voeren dimensionaliteitsreductie of -uitbreiding uit over kanalen, voegen non-lineariteit toe en maken efficiënte kruiskanaal informatiemenging mogelijk, uitgebreid gebruikt in architecturen zoals Inception en MobileNet."
        }
      },
      {
        question: {
                  "en": "What is the Inception module's key innovation in CNN design?",
                  "es": "¿Cuál es la innovación clave del módulo Inception en diseño de CNN?",
                  "de": "Was ist die Schlüsselinnovation des Inception-Moduls im CNN-Design?",
                  "nl": "Wat is de belangrijkste innovatie van de Inception module in CNN ontwerp?"
        },
        options: [
        {
                  "en": "Training with inception images only",
                  "es": "Entrenar solo con imágenes de inicio",
                  "de": "Nur mit Inception-Bildern trainieren",
                  "nl": "Alleen trainen met inception afbeeldingen"
        },
        {
                  "en": "Using only 3x3 filters throughout the network",
                  "es": "Usar solo filtros 3x3 en toda la red",
                  "de": "Nur 3x3-Filter im gesamten Netzwerk verwenden",
                  "nl": "Alleen 3x3 filters gebruiken door het hele netwerk"
        },
        {
                  "en": "Eliminating all pooling layers",
                  "es": "Eliminar todas las capas de pooling",
                  "de": "Alle Pooling-Schichten eliminieren",
                  "nl": "Alle pooling lagen elimineren"
        },
        {
                  "en": "Applying multiple filter sizes in parallel at the same layer",
                  "es": "Aplicar múltiples tamaños de filtro en paralelo en la misma capa",
                  "de": "Mehrere Filtergrößen parallel in derselben Schicht anwenden",
                  "nl": "Meerdere filtergroottes parallel toepassen in dezelfde laag"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Inception modules apply 1x1, 3x3, and 5x5 convolutions in parallel on the same input, then concatenate the results, capturing features at multiple scales simultaneously and improving network efficiency.",
                  "es": "Los módulos Inception aplican convoluciones 1x1, 3x3 y 5x5 en paralelo en la misma entrada, luego concatenan los resultados, capturando características en múltiples escalas simultáneamente y mejorando la eficiencia de la red.",
                  "de": "Inception-Module wenden 1x1-, 3x3- und 5x5-Faltungen parallel auf dieselbe Eingabe an, verketten dann die Ergebnisse, erfassen Features auf mehreren Skalen gleichzeitig und verbessern Netzwerkeffizienz.",
                  "nl": "Inception modules passen 1x1, 3x3 en 5x5 convoluties parallel toe op dezelfde input, voegen vervolgens de resultaten samen, leggen features op meerdere schalen tegelijkertijd vast en verbeteren netwerkefficiëntie."
        }
      },
      {
        question: {
                  "en": "What is the main advantage of depthwise separable convolutions used in MobileNet?",
                  "es": "¿Cuál es la ventaja principal de las convoluciones separables en profundidad usadas en MobileNet?",
                  "de": "Was ist der Hauptvorteil von depthwise separierbaren Faltungen in MobileNet?",
                  "nl": "Wat is het hoofdvoordeel van depthwise separable convoluties gebruikt in MobileNet?"
        },
        options: [
        {
                  "en": "Process images at higher resolution",
                  "es": "Procesar imágenes a mayor resolución",
                  "de": "Bilder in höherer Auflösung verarbeiten",
                  "nl": "Afbeeldingen op hogere resolutie verwerken"
        },
        {
                  "en": "Work only on mobile phone cameras",
                  "es": "Funcionar solo en cámaras de teléfonos móviles",
                  "de": "Nur auf Handy-Kameras funktionieren",
                  "nl": "Alleen werken op mobiele telefoon camera's"
        },
        {
                  "en": "Drastically reduce computation and parameters while maintaining performance",
                  "es": "Reducir drásticamente computación y parámetros mientras mantienen rendimiento",
                  "de": "Berechnung und Parameter drastisch reduzieren während Leistung beibehalten wird",
                  "nl": "Computatie en parameters drastisch verminderen terwijl prestaties behouden blijven"
        },
        {
                  "en": "Increase network depth to thousands of layers",
                  "es": "Aumentar profundidad de red a miles de capas",
                  "de": "Netzwerktiefe auf Tausende von Schichten erhöhen",
                  "nl": "Netwerkdiepte verhogen tot duizenden lagen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Depthwise separable convolutions split standard convolution into depthwise (spatial filtering per channel) and pointwise (1x1 cross-channel) operations, reducing computational cost by 8-9x with minimal accuracy loss.",
                  "es": "Las convoluciones separables en profundidad dividen la convolución estándar en operaciones depthwise (filtrado espacial por canal) y pointwise (1x1 entre canales), reduciendo costo computacional en 8-9x con pérdida mínima de precisión.",
                  "de": "Depthwise separierbare Faltungen teilen Standard-Faltung in depthwise (räumliche Filterung pro Kanal) und pointwise (1x1 kanalübergreifende) Operationen, reduzieren Rechenkosten um 8-9x mit minimalem Genauigkeitsverlust.",
                  "nl": "Depthwise separable convoluties splitsen standaard convolutie in depthwise (ruimtelijke filtering per kanaal) en pointwise (1x1 kruiskanaal) operaties, verminderen computationele kosten met 8-9x met minimaal nauwkeurigheidsverlies."
        }
      },
      {
        question: {
                  "en": "What is the primary purpose of attention mechanisms in vision transformers?",
                  "es": "¿Cuál es el propósito principal de los mecanismos de atención en transformadores de visión?",
                  "de": "Was ist der Hauptzweck von Aufmerksamkeitsmechanismen in Vision Transformers?",
                  "nl": "Wat is het primaire doel van attention mechanismen in vision transformers?"
        },
        options: [
        {
                  "en": "Highlight images for human viewers",
                  "es": "Resaltar imágenes para espectadores humanos",
                  "de": "Bilder für menschliche Betrachter hervorheben",
                  "nl": "Afbeeldingen markeren voor menselijke kijkers"
        },
        {
                  "en": "Speed up image preprocessing",
                  "es": "Acelerar preprocesamiento de imagen",
                  "de": "Bild-Vorverarbeitung beschleunigen",
                  "nl": "Beeldvoorverwerking versnellen"
        },
        {
                  "en": "Allow the model to focus on relevant image regions dynamically",
                  "es": "Permitir que el modelo se enfoque en regiones de imagen relevantes dinámicamente",
                  "de": "Dem Modell ermöglichen sich dynamisch auf relevante Bildbereiche zu konzentrieren",
                  "nl": "Het model toestaan zich dynamisch te concentreren op relevante afbeeldingsregio's"
        },
        {
                  "en": "Reduce the attention span of neural networks",
                  "es": "Reducir el lapso de atención de redes neuronales",
                  "de": "Die Aufmerksamkeitsspanne neuronaler Netzwerke reduzieren",
                  "nl": "De aandachtsspanne van neurale netwerken verminderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Attention mechanisms compute relationships between different image patches, enabling the model to weigh the importance of different spatial locations adaptively, capturing long-range dependencies better than convolutions.",
                  "es": "Los mecanismos de atención calculan relaciones entre diferentes parches de imagen, permitiendo al modelo ponderar la importancia de diferentes ubicaciones espaciales adaptativamente, capturando dependencias de largo alcance mejor que convoluciones.",
                  "de": "Aufmerksamkeitsmechanismen berechnen Beziehungen zwischen verschiedenen Bild-Patches, ermöglichen dem Modell die Wichtigkeit verschiedener räumlicher Positionen adaptiv zu gewichten, erfassen Langstrecken-Abhängigkeiten besser als Faltungen.",
                  "nl": "Attention mechanismen berekenen relaties tussen verschillende afbeeldingspatches, stellen het model in staat het belang van verschillende ruimtelijke locaties adaptief te wegen, leggen langere-afstands afhankelijkheden beter vast dan convoluties."
        }
      },
      {
        question: {
                  "en": "What problem does batch normalization help address besides training speed?",
                  "es": "¿Qué problema ayuda a abordar la normalización por lotes además de velocidad de entrenamiento?",
                  "de": "Welches Problem hilft Batch-Normalisierung neben Trainingsgeschwindigkeit zu adressieren?",
                  "nl": "Welk probleem helpt batch normalization aanpakken naast trainingssnelheid?"
        },
        options: [
        {
                  "en": "Internal covariate shift caused by changing distributions in layers",
                  "es": "Cambio covariado interno causado por distribuciones cambiantes en capas",
                  "de": "Interne Kovariatenverschiebung verursacht durch sich ändernde Verteilungen in Schichten",
                  "nl": "Interne covariate shift veroorzaakt door veranderende distributies in lagen"
        },
        {
                  "en": "Image format incompatibilities",
                  "es": "Incompatibilidades de formato de imagen",
                  "de": "Bildformat-Inkompatibilitäten",
                  "nl": "Beeldformaat incompatibiliteiten"
        },
        {
                  "en": "External data corruption during preprocessing",
                  "es": "Corrupción de datos externa durante preprocesamiento",
                  "de": "Externe Datenkorruption während Vorverarbeitung",
                  "nl": "Externe datacorruptie tijdens voorverwerking"
        },
        {
                  "en": "Batch size limitations in hardware",
                  "es": "Limitaciones de tamaño de lote en hardware",
                  "de": "Batch-Größen-Einschränkungen in Hardware",
                  "nl": "Batch grootte beperkingen in hardware"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Internal covariate shift occurs when layer input distributions change during training as previous layer parameters update, making learning unstable. Batch normalization normalizes these distributions, stabilizing training.",
                  "es": "El cambio covariado interno ocurre cuando las distribuciones de entrada de capa cambian durante el entrenamiento mientras los parámetros de capa anterior se actualizan, haciendo el aprendizaje inestable. La normalización por lotes normaliza estas distribuciones, estabilizando el entrenamiento.",
                  "de": "Interne Kovariatenverschiebung tritt auf wenn Schichteingabe-Verteilungen sich während Training ändern während vorherige Schichtparameter aktualisiert werden, macht Lernen instabil. Batch-Normalisierung normalisiert diese Verteilungen, stabilisiert Training.",
                  "nl": "Interne covariate shift treedt op wanneer laaginput distributies veranderen tijdens training terwijl vorige laagparameters updaten, maakt leren instabiel. Batch normalization normaliseert deze distributies, stabiliseert training."
        }
      },
      {
        question: {
                  "en": "What is the key idea behind knowledge distillation in neural networks?",
                  "es": "¿Cuál es la idea clave detrás de la destilación de conocimiento en redes neuronales?",
                  "de": "Was ist die Schlüsselidee hinter Wissensdestillation in neuronalen Netzwerken?",
                  "nl": "Wat is het sleutelidee achter knowledge distillation in neurale netwerken?"
        },
        options: [
        {
                  "en": "Compress images before network processing",
                  "es": "Comprimir imágenes antes del procesamiento de red",
                  "de": "Bilder vor Netzwerkverarbeitung komprimieren",
                  "nl": "Afbeeldingen comprimeren voor netwerkverwerking"
        },
        {
                  "en": "Extract pure knowledge from training data",
                  "es": "Extraer conocimiento puro de datos de entrenamiento",
                  "de": "Reines Wissen aus Trainingsdaten extrahieren",
                  "nl": "Zuivere kennis extraheren uit trainingsdata"
        },
        {
                  "en": "Remove unnecessary knowledge from networks",
                  "es": "Eliminar conocimiento innecesario de redes",
                  "de": "Unnötiges Wissen aus Netzwerken entfernen",
                  "nl": "Onnodige kennis uit netwerken verwijderen"
        },
        {
                  "en": "Train a smaller student model to mimic a larger teacher model's behavior",
                  "es": "Entrenar un modelo estudiante más pequeño para imitar el comportamiento de un modelo maestro más grande",
                  "de": "Ein kleineres Schüler-Modell trainieren um das Verhalten eines größeren Lehrer-Modells nachzuahmen",
                  "nl": "Een kleiner student model trainen om het gedrag van een groter teacher model na te bootsen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Knowledge distillation transfers learned representations from a complex, high-performing teacher model to a simpler student model by training the student to match the teacher's soft predictions, achieving similar performance with fewer parameters.",
                  "es": "La destilación de conocimiento transfiere representaciones aprendidas de un modelo maestro complejo y de alto rendimiento a un modelo estudiante más simple entrenando al estudiante para igualar las predicciones suaves del maestro, logrando rendimiento similar con menos parámetros.",
                  "de": "Wissensdestillation überträgt gelernte Repräsentationen von einem komplexen, hochleistenden Lehrer-Modell zu einem einfacheren Schüler-Modell durch Training des Schülers um die weichen Vorhersagen des Lehrers zu entsprechen, erreicht ähnliche Leistung mit weniger Parametern.",
                  "nl": "Knowledge distillation draagt geleerde representaties over van een complex, hoogpresterend teacher model naar een eenvoudiger student model door de student te trainen om de zachte voorspellingen van de teacher te matchen, bereikt vergelijkbare prestaties met minder parameters."
        }
      },
      {
        question: {
                  "en": "What is the purpose of label smoothing in classification tasks?",
                  "es": "¿Cuál es el propósito del suavizado de etiquetas en tareas de clasificación?",
                  "de": "Was ist der Zweck von Label Smoothing in Klassifikationsaufgaben?",
                  "nl": "Wat is het doel van label smoothing bij classificatietaken?"
        },
        options: [
        {
                  "en": "Make label text easier to read",
                  "es": "Hacer que el texto de etiqueta sea más fácil de leer",
                  "de": "Labeltext leichter lesbar machen",
                  "nl": "Labeltekst makkelijker leesbaar maken"
        },
        {
                  "en": "Prevent overconfidence by assigning small probabilities to incorrect classes",
                  "es": "Prevenir exceso de confianza asignando pequeñas probabilidades a clases incorrectas",
                  "de": "Übermäßiges Vertrauen verhindern durch Zuweisen kleiner Wahrscheinlichkeiten zu falschen Klassen",
                  "nl": "Overmatig vertrouwen voorkomen door kleine waarschijnlijkheden toe te wijzen aan incorrecte klassen"
        },
        {
                  "en": "Smooth out jagged edges in images",
                  "es": "Suavizar bordes dentados en imágenes",
                  "de": "Gezackte Kanten in Bildern glätten",
                  "nl": "Gekartelde randen in afbeeldingen gladstrijken"
        },
        {
                  "en": "Average labels across multiple annotators",
                  "es": "Promediar etiquetas entre múltiples anotadores",
                  "de": "Labels über mehrere Annotatoren mitteln",
                  "nl": "Labels middelen over meerdere annotators"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Label smoothing replaces hard targets (e.g., [0,1,0]) with soft targets (e.g., [0.05,0.9,0.05]), preventing the model from becoming overly confident and improving generalization by encouraging less extreme predictions.",
                  "es": "El suavizado de etiquetas reemplaza objetivos duros (ej., [0,1,0]) con objetivos suaves (ej., [0.05,0.9,0.05]), previniendo que el modelo se vuelva excesivamente confiado y mejorando generalización al fomentar predicciones menos extremas.",
                  "de": "Label Smoothing ersetzt harte Ziele (z.B. [0,1,0]) mit weichen Zielen (z.B. [0.05,0.9,0.05]), verhindert dass das Modell übermäßig zuversichtlich wird und verbessert Generalisierung durch Förderung weniger extremer Vorhersagen.",
                  "nl": "Label smoothing vervangt harde doelen (bijv. [0,1,0]) met zachte doelen (bijv. [0.05,0.9,0.05]), voorkomt dat het model te overtuigd wordt en verbetert generalisatie door minder extreme voorspellingen aan te moedigen."
        }
      },
      {
        question: {
                  "en": "What is the exploding gradient problem in deep learning?",
                  "es": "¿Qué es el problema del gradiente explosivo en aprendizaje profundo?",
                  "de": "Was ist das Problem explodierender Gradienten im Deep Learning?",
                  "nl": "Wat is het exploderende gradiënt probleem in deep learning?"
        },
        options: [
        {
                  "en": "Too many gradients are computed simultaneously",
                  "es": "Demasiados gradientes se calculan simultáneamente",
                  "de": "Zu viele Gradienten werden gleichzeitig berechnet",
                  "nl": "Te veel gradiënten worden gelijktijdig berekend"
        },
        {
                  "en": "Gradients spread too widely across layers",
                  "es": "Los gradientes se extienden demasiado ampliamente a través de capas",
                  "de": "Gradienten verbreiten sich zu weit über Schichten",
                  "nl": "Gradiënten verspreiden zich te wijd over lagen"
        },
        {
                  "en": "Network architecture physically explodes during training",
                  "es": "La arquitectura de red explota físicamente durante entrenamiento",
                  "de": "Netzwerkarchitektur explodiert physisch während Training",
                  "nl": "Netwerkarchitectuur explodeert fysiek tijdens training"
        },
        {
                  "en": "Gradients become extremely large, causing unstable weight updates",
                  "es": "Los gradientes se vuelven extremadamente grandes, causando actualizaciones de peso inestables",
                  "de": "Gradienten werden extrem groß, verursachen instabile Gewichtsaktualisierungen",
                  "nl": "Gradiënten worden extreem groot, veroorzaken instabiele gewicht updates"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "When gradients grow exponentially during backpropagation through many layers, weight updates become very large, causing numerical instability and divergence. Gradient clipping is commonly used to address this.",
                  "es": "Cuando los gradientes crecen exponencialmente durante retropropagación a través de muchas capas, las actualizaciones de peso se vuelven muy grandes, causando inestabilidad numérica y divergencia. El recorte de gradientes se usa comúnmente para abordar esto.",
                  "de": "Wenn Gradienten während Backpropagation durch viele Schichten exponentiell wachsen, werden Gewichtsaktualisierungen sehr groß, verursachen numerische Instabilität und Divergenz. Gradienten-Clipping wird häufig verwendet um dies zu adressieren.",
                  "nl": "Wanneer gradiënten exponentieel groeien tijdens backpropagation door vele lagen, worden gewicht updates zeer groot, veroorzaken numerieke instabiliteit en divergentie. Gradient clipping wordt vaak gebruikt om dit aan te pakken."
        }
      },
      {
        question: {
                  "en": "What advantage does mixed precision training provide?",
                  "es": "¿Qué ventaja proporciona el entrenamiento de precisión mixta?",
                  "de": "Welchen Vorteil bietet Mixed-Precision-Training?",
                  "nl": "Welk voordeel biedt mixed precision training?"
        },
        options: [
        {
                  "en": "Train models with mixed accuracy levels",
                  "es": "Entrenar modelos con niveles de precisión mixtos",
                  "de": "Modelle mit gemischten Genauigkeitsstufen trainieren",
                  "nl": "Modellen trainen met gemengde nauwkeurigheidsniveaus"
        },
        {
                  "en": "Combine precise and imprecise training data",
                  "es": "Combinar datos de entrenamiento precisos e imprecisos",
                  "de": "Präzise und unpräzise Trainingsdaten kombinieren",
                  "nl": "Precieze en onprecieze trainingsdata combineren"
        },
        {
                  "en": "Use different precision for different classes",
                  "es": "Usar diferente precisión para diferentes clases",
                  "de": "Verschiedene Präzision für verschiedene Klassen verwenden",
                  "nl": "Verschillende precisie gebruiken voor verschillende klassen"
        },
        {
                  "en": "Faster training and reduced memory usage by using both 16-bit and 32-bit floats",
                  "es": "Entrenamiento más rápido y uso de memoria reducido usando flotantes de 16 y 32 bits",
                  "de": "Schnelleres Training und reduzierter Speicherverbrauch durch Verwendung von 16-Bit und 32-Bit Floats",
                  "nl": "Snellere training en verminderd geheugengebruik door zowel 16-bit als 32-bit floats te gebruiken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Mixed precision training uses float16 for most operations (faster, less memory) while keeping critical operations in float32 (maintaining numerical stability), often speeding up training 2-3x on modern GPUs.",
                  "es": "El entrenamiento de precisión mixta usa float16 para la mayoría de operaciones (más rápido, menos memoria) mientras mantiene operaciones críticas en float32 (manteniendo estabilidad numérica), a menudo acelerando entrenamiento 2-3x en GPUs modernas.",
                  "de": "Mixed-Precision-Training verwendet float16 für die meisten Operationen (schneller, weniger Speicher) während kritische Operationen in float32 gehalten werden (Aufrechterhaltung numerischer Stabilität), beschleunigt oft Training 2-3x auf modernen GPUs.",
                  "nl": "Mixed precision training gebruikt float16 voor de meeste operaties (sneller, minder geheugen) terwijl kritische operaties in float32 worden gehouden (numerieke stabiliteit behouden), versnelt training vaak 2-3x op moderne GPUs."
        }
      },
      {
        question: {
                  "en": "What is the purpose of curriculum learning in training neural networks?",
                  "es": "¿Cuál es el propósito del aprendizaje curricular en el entrenamiento de redes neuronales?",
                  "de": "Was ist der Zweck von Curriculum Learning beim Training neuronaler Netzwerke?",
                  "nl": "Wat is het doel van curriculum learning bij het trainen van neurale netwerken?"
        },
        options: [
        {
                  "en": "Follow a strict curriculum schedule for training hours",
                  "es": "Seguir un horario curricular estricto para horas de entrenamiento",
                  "de": "Einem strengen Lehrplan-Zeitplan für Trainingsstunden folgen",
                  "nl": "Een strikt curriculum schema volgen voor trainingsuren"
        },
        {
                  "en": "Teach the network different subjects sequentially",
                  "es": "Enseñar a la red diferentes materias secuencialmente",
                  "de": "Dem Netzwerk verschiedene Fächer sequenziell beibringen",
                  "nl": "Het netwerk verschillende vakken sequentieel leren"
        },
        {
                  "en": "Train on easier examples first, gradually increasing difficulty",
                  "es": "Entrenar primero con ejemplos más fáciles, aumentando gradualmente la dificultad",
                  "de": "Zuerst auf einfacheren Beispielen trainieren, Schwierigkeit schrittweise erhöhen",
                  "nl": "Eerst trainen op makkelijkere voorbeelden, geleidelijk moeilijkheidsgraad verhogen"
        },
        {
                  "en": "Create educational materials from training data",
                  "es": "Crear materiales educativos a partir de datos de entrenamiento",
                  "de": "Bildungsmaterialien aus Trainingsdaten erstellen",
                  "nl": "Educatieve materialen maken uit trainingsdata"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Curriculum learning mimics human learning by presenting training examples in a meaningful order from simple to complex, often leading to faster convergence, better generalization, and avoiding poor local minima.",
                  "es": "El aprendizaje curricular imita el aprendizaje humano presentando ejemplos de entrenamiento en un orden significativo de simple a complejo, a menudo llevando a convergencia más rápida, mejor generalización y evitando mínimos locales pobres.",
                  "de": "Curriculum Learning ahmt menschliches Lernen nach durch Präsentation von Trainingsbeispielen in sinnvoller Reihenfolge von einfach zu komplex, führt oft zu schnellerer Konvergenz, besserer Generalisierung und Vermeidung schlechter lokaler Minima.",
                  "nl": "Curriculum learning bootst menselijk leren na door trainingsvoorbeelden in een betekenisvolle volgorde te presenteren van eenvoudig naar complex, leidt vaak tot snellere convergentie, betere generalisatie en vermijding van slechte lokale minima."
        }
      },
      {
        question: {
                  "en": "What is the main purpose of using weight decay (L2 regularization) in training?",
                  "es": "¿Cuál es el propósito principal de usar decaimiento de peso (regularización L2) en el entrenamiento?",
                  "de": "Was ist der Hauptzweck der Verwendung von Weight Decay (L2-Regularisierung) beim Training?",
                  "nl": "Wat is het hoofddoel van het gebruik van weight decay (L2 regularisatie) bij training?"
        },
        options: [
        {
                  "en": "Prevent overfitting by penalizing large weight values",
                  "es": "Prevenir sobreajuste penalizando valores de peso grandes",
                  "de": "Overfitting verhindern durch Bestrafung großer Gewichtswerte",
                  "nl": "Overfitting voorkomen door grote gewichtwaarden te straffen"
        },
        {
                  "en": "Make weights decrease over time automatically",
                  "es": "Hacer que los pesos disminuyan automáticamente con el tiempo",
                  "de": "Gewichte automatisch mit der Zeit verringern",
                  "nl": "Gewichten automatisch laten afnemen in de loop van de tijd"
        },
        {
                  "en": "Speed up backpropagation calculations",
                  "es": "Acelerar cálculos de retropropagación",
                  "de": "Backpropagation-Berechnungen beschleunigen",
                  "nl": "Backpropagation berekeningen versnellen"
        },
        {
                  "en": "Reduce the physical weight of neural networks",
                  "es": "Reducir el peso físico de redes neuronales",
                  "de": "Das physische Gewicht neuronaler Netzwerke reduzieren",
                  "nl": "Het fysieke gewicht van neurale netwerken verminderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Weight decay adds a penalty proportional to the square of weight magnitudes to the loss function, encouraging smaller weights and simpler models, which helps prevent overfitting and improves generalization.",
                  "es": "El decaimiento de peso agrega una penalización proporcional al cuadrado de las magnitudes de peso a la función de pérdida, fomentando pesos más pequeños y modelos más simples, lo que ayuda a prevenir el sobreajuste y mejora la generalización.",
                  "de": "Weight Decay fügt eine Strafe proportional zum Quadrat der Gewichtsgrößen zur Verlustfunktion hinzu, fördert kleinere Gewichte und einfachere Modelle, was Overfitting verhindert und Generalisierung verbessert.",
                  "nl": "Weight decay voegt een straf toe proportioneel aan het kwadraat van gewichtgroottes aan de verliesfunctie, moedigt kleinere gewichten en eenvoudigere modellen aan, wat overfitting helpt voorkomen en generalisatie verbetert."
        }
      },
      {
        question: {
                  "en": "What distinguishes object detection from image classification?",
                  "es": "¿Qué distingue la detección de objetos de la clasificación de imágenes?",
                  "de": "Was unterscheidet Objekterkennung von Bildklassifikation?",
                  "nl": "Wat onderscheidt objectdetectie van beeldclassificatie?"
        },
        options: [
        {
                  "en": "Object detection localizes and classifies multiple objects, classification assigns one label",
                  "es": "Detección de objetos localiza y clasifica múltiples objetos, clasificación asigna una etiqueta",
                  "de": "Objekterkennung lokalisiert und klassifiziert mehrere Objekte, Klassifikation weist ein Label zu",
                  "nl": "Objectdetectie lokaliseert en classificeert meerdere objecten, classificatie wijst één label toe"
        },
        {
                  "en": "They are exactly the same task",
                  "es": "Son exactamente la misma tarea",
                  "de": "Sie sind genau dieselbe Aufgabe",
                  "nl": "Ze zijn precies dezelfde taak"
        },
        {
                  "en": "Object detection is always faster than classification",
                  "es": "Detección de objetos es siempre más rápida que clasificación",
                  "de": "Objekterkennung ist immer schneller als Klassifikation",
                  "nl": "Objectdetectie is altijd sneller dan classificatie"
        },
        {
                  "en": "Classification requires more training data",
                  "es": "Clasificación requiere más datos de entrenamiento",
                  "de": "Klassifikation benötigt mehr Trainingsdaten",
                  "nl": "Classificatie vereist meer trainingsdata"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Image classification assigns a single label to an entire image, while object detection identifies and localizes multiple objects with bounding boxes and class labels, providing both 'what' and 'where' information.",
                  "es": "La clasificación de imágenes asigna una sola etiqueta a una imagen completa, mientras que la detección de objetos identifica y localiza múltiples objetos con cajas delimitadoras y etiquetas de clase, proporcionando información de 'qué' y 'dónde'.",
                  "de": "Bildklassifikation weist einem gesamten Bild ein einzelnes Label zu, während Objekterkennung mehrere Objekte mit Begrenzungsrahmen und Klassenlabels identifiziert und lokalisiert, bietet sowohl 'was' als auch 'wo' Informationen.",
                  "nl": "Beeldclassificatie wijst één label toe aan een hele afbeelding, terwijl objectdetectie meerdere objecten identificeert en lokaliseert met bounding boxes en klasselabels, biedt zowel 'wat' als 'waar' informatie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of anchor boxes in object detection models like YOLO and Faster R-CNN?",
                  "es": "¿Cuál es el propósito de las cajas ancla en modelos de detección de objetos como YOLO y Faster R-CNN?",
                  "de": "Was ist der Zweck von Anchor Boxes in Objekterkennungsmodellen wie YOLO und Faster R-CNN?",
                  "nl": "Wat is het doel van anchor boxes in objectdetectie modellen zoals YOLO en Faster R-CNN?"
        },
        options: [
        {
                  "en": "Store detected objects in memory anchors",
                  "es": "Almacenar objetos detectados en anclas de memoria",
                  "de": "Erkannte Objekte in Speicherankern speichern",
                  "nl": "Gedetecteerde objecten opslaan in geheugenankers"
        },
        {
                  "en": "Anchor images to prevent movement during processing",
                  "es": "Anclar imágenes para prevenir movimiento durante procesamiento",
                  "de": "Bilder verankern um Bewegung während Verarbeitung zu verhindern",
                  "nl": "Afbeeldingen verankeren om beweging tijdens verwerking te voorkomen"
        },
        {
                  "en": "Provide reference boxes of various sizes and ratios for detecting objects",
                  "es": "Proporcionar cajas de referencia de varios tamaños y proporciones para detectar objetos",
                  "de": "Referenzboxen verschiedener Größen und Verhältnisse für Objekterkennung bereitstellen",
                  "nl": "Referentieboxen van verschillende groottes en verhoudingen bieden voor objectdetectie"
        },
        {
                  "en": "Create anchor points for image stitching",
                  "es": "Crear puntos de anclaje para unión de imágenes",
                  "de": "Ankerpunkte für Bild-Stitching erstellen",
                  "nl": "Ankerpunten maken voor afbeeldingsteken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Anchor boxes are predefined bounding boxes with different aspect ratios and scales that serve as reference templates. The model predicts offsets from these anchors to better handle objects of various sizes and shapes.",
                  "es": "Las cajas ancla son cajas delimitadoras predefinidas con diferentes proporciones de aspecto y escalas que sirven como plantillas de referencia. El modelo predice desplazamientos desde estos anclas para manejar mejor objetos de varios tamaños y formas.",
                  "de": "Anchor Boxes sind vordefinierte Begrenzungsrahmen mit verschiedenen Seitenverhältnissen und Skalen die als Referenzvorlagen dienen. Das Modell sagt Verschiebungen von diesen Ankern vorher um Objekte verschiedener Größen und Formen besser zu handhaben.",
                  "nl": "Anchor boxes zijn voorgedefinieerde bounding boxes met verschillende aspectverhoudingen en schalen die dienen als referentiesjablonen. Het model voorspelt offsets van deze ankers om objecten van verschillende groottes en vormen beter te behandelen."
        }
      },
      {
        question: {
                  "en": "What is semantic segmentation in computer vision?",
                  "es": "¿Qué es la segmentación semántica en visión por computadora?",
                  "de": "Was ist semantische Segmentierung in Computer Vision?",
                  "nl": "Wat is semantische segmentatie in computer vision?"
        },
        options: [
        {
                  "en": "Dividing images based on semantic meaning only",
                  "es": "Dividir imágenes basándose solo en significado semántico",
                  "de": "Bilder nur basierend auf semantischer Bedeutung teilen",
                  "nl": "Afbeeldingen verdelen op basis van alleen semantische betekenis"
        },
        {
                  "en": "Segmenting text from images",
                  "es": "Segmentar texto de imágenes",
                  "de": "Text aus Bildern segmentieren",
                  "nl": "Tekst uit afbeeldingen segmenteren"
        },
        {
                  "en": "Assigning a class label to every pixel in the image",
                  "es": "Asignar una etiqueta de clase a cada píxel en la imagen",
                  "de": "Jedem Pixel im Bild ein Klassenlabel zuweisen",
                  "nl": "Een klasselabel toewijzen aan elke pixel in de afbeelding"
        },
        {
                  "en": "Organizing image segments alphabetically",
                  "es": "Organizar segmentos de imagen alfabéticamente",
                  "de": "Bildsegmente alphabetisch organisieren",
                  "nl": "Afbeeldingssegmenten alfabetisch organiseren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Semantic segmentation classifies each pixel into predefined categories (e.g., road, car, person), creating a dense pixel-wise prediction map where all pixels belonging to the same class are labeled identically regardless of object instances.",
                  "es": "La segmentación semántica clasifica cada píxel en categorías predefinidas (ej., carretera, auto, persona), creando un mapa de predicción denso por píxel donde todos los píxeles pertenecientes a la misma clase se etiquetan idénticamente independientemente de las instancias de objeto.",
                  "de": "Semantische Segmentierung klassifiziert jeden Pixel in vordefinierte Kategorien (z.B. Straße, Auto, Person), erstellt eine dichte pixelweise Vorhersagekarte wo alle Pixel derselben Klasse identisch gelabelt werden unabhängig von Objektinstanzen.",
                  "nl": "Semantische segmentatie classificeert elke pixel in voorgedefinieerde categorieën (bijv. weg, auto, persoon), creëert een dichte pixel-gewijze voorspellingskaart waar alle pixels behorend tot dezelfde klasse identiek gelabeld worden ongeacht objectinstanties."
        }
      },
      {
        question: {
                  "en": "How does instance segmentation differ from semantic segmentation?",
                  "es": "¿En qué difiere la segmentación de instancias de la segmentación semántica?",
                  "de": "Wie unterscheidet sich Instanzsegmentierung von semantischer Segmentierung?",
                  "nl": "Hoe verschilt instance segmentatie van semantische segmentatie?"
        },
        options: [
        {
                  "en": "Instance segmentation is faster than semantic segmentation",
                  "es": "Segmentación de instancias es más rápida que segmentación semántica",
                  "de": "Instanzsegmentierung ist schneller als semantische Segmentierung",
                  "nl": "Instance segmentatie is sneller dan semantische segmentatie"
        },
        {
                  "en": "They are exactly the same technique",
                  "es": "Son exactamente la misma técnica",
                  "de": "Sie sind genau dieselbe Technik",
                  "nl": "Ze zijn precies dezelfde techniek"
        },
        {
                  "en": "Instance segmentation distinguishes individual objects of the same class",
                  "es": "Segmentación de instancias distingue objetos individuales de la misma clase",
                  "de": "Instanzsegmentierung unterscheidet einzelne Objekte derselben Klasse",
                  "nl": "Instance segmentatie onderscheidt individuele objecten van dezelfde klasse"
        },
        {
                  "en": "Instance segmentation works only on single objects",
                  "es": "Segmentación de instancias funciona solo en objetos únicos",
                  "de": "Instanzsegmentierung funktioniert nur auf einzelnen Objekten",
                  "nl": "Instance segmentatie werkt alleen op enkele objecten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "While semantic segmentation treats all instances of a class identically, instance segmentation identifies and separates each individual object instance, enabling distinction between multiple cars, people, or other objects of the same class.",
                  "es": "Mientras que la segmentación semántica trata todas las instancias de una clase idénticamente, la segmentación de instancias identifica y separa cada instancia de objeto individual, permitiendo distinción entre múltiples autos, personas u otros objetos de la misma clase.",
                  "de": "Während semantische Segmentierung alle Instanzen einer Klasse identisch behandelt, identifiziert und trennt Instanzsegmentierung jede einzelne Objektinstanz, ermöglicht Unterscheidung zwischen mehreren Autos, Personen oder anderen Objekten derselben Klasse.",
                  "nl": "Terwijl semantische segmentatie alle instanties van een klasse identiek behandelt, identificeert en scheidt instance segmentatie elke individuele objectinstantie, maakt onderscheid mogelijk tussen meerdere auto's, mensen of andere objecten van dezelfde klasse."
        }
      },
      {
        question: {
                  "en": "What is a U-Net architecture primarily used for?",
                  "es": "¿Para qué se usa principalmente una arquitectura U-Net?",
                  "de": "Wofür wird eine U-Net-Architektur hauptsächlich verwendet?",
                  "nl": "Waarvoor wordt een U-Net architectuur voornamelijk gebruikt?"
        },
        options: [
        {
                  "en": "Creating U-shaped patterns in images",
                  "es": "Crear patrones en forma de U en imágenes",
                  "de": "U-förmige Muster in Bildern erstellen",
                  "nl": "U-vormige patronen in afbeeldingen maken"
        },
        {
                  "en": "Training underwater image detection models",
                  "es": "Entrenar modelos de detección de imagen submarina",
                  "de": "Unterwasser-Bilderkennungsmodelle trainieren",
                  "nl": "Onderwaterbeelddetectiemodellen trainen"
        },
        {
                  "en": "Image segmentation tasks with encoder-decoder structure and skip connections",
                  "es": "Tareas de segmentación de imagen con estructura codificador-decodificador y conexiones de salto",
                  "de": "Bildsegmentierungsaufgaben mit Encoder-Decoder-Struktur und Skip-Verbindungen",
                  "nl": "Beeldsegmentatietaken met encoder-decoder structuur en skip verbindingen"
        },
        {
                  "en": "University network architectures only",
                  "es": "Solo arquitecturas de red universitarias",
                  "de": "Nur Universitäts-Netzwerkarchitekturen",
                  "nl": "Alleen universiteitsnetwerkarchitecturen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "U-Net has a U-shaped architecture with contracting path (encoder) for context capture and expanding path (decoder) for precise localization, connected by skip connections that preserve spatial information crucial for segmentation.",
                  "es": "U-Net tiene una arquitectura en forma de U con ruta de contracción (codificador) para captura de contexto y ruta de expansión (decodificador) para localización precisa, conectadas por conexiones de salto que preservan información espacial crucial para segmentación.",
                  "de": "U-Net hat eine U-förmige Architektur mit kontrahierendem Pfad (Encoder) für Kontexterfassung und expandierendem Pfad (Decoder) für präzise Lokalisierung, verbunden durch Skip-Verbindungen die räumliche Informationen bewahren die für Segmentierung entscheidend sind.",
                  "nl": "U-Net heeft een U-vormige architectuur met samentrekkend pad (encoder) voor contextvastlegging en uitbreidend pad (decoder) voor precieze lokalisatie, verbonden door skip verbindingen die ruimtelijke informatie bewaren cruciaal voor segmentatie."
        }
      },
      {
        question: {
                  "en": "What is the IoU (Intersection over Union) metric used for in object detection?",
                  "es": "¿Para qué se usa la métrica IoU (Intersección sobre Unión) en detección de objetos?",
                  "de": "Wofür wird die IoU (Intersection over Union) Metrik in Objekterkennung verwendet?",
                  "nl": "Waarvoor wordt de IoU (Intersection over Union) metriek gebruikt bij objectdetectie?"
        },
        options: [
        {
                  "en": "Compute input-output relationships",
                  "es": "Calcular relaciones entrada-salida",
                  "de": "Eingabe-Ausgabe-Beziehungen berechnen",
                  "nl": "Input-output relaties berekenen"
        },
        {
                  "en": "Measure overlap between predicted and ground truth bounding boxes",
                  "es": "Medir superposición entre cajas delimitadoras predichas y verdad fundamental",
                  "de": "Überlappung zwischen vorhergesagten und Ground-Truth Begrenzungsrahmen messen",
                  "nl": "Overlap meten tussen voorspelde en ground truth bounding boxes"
        },
        {
                  "en": "Measure intersection points in neural networks",
                  "es": "Medir puntos de intersección en redes neuronales",
                  "de": "Schnittpunkte in neuronalen Netzwerken messen",
                  "nl": "Intersectiepunten in neurale netwerken meten"
        },
        {
                  "en": "Calculate the union of all detected objects",
                  "es": "Calcular la unión de todos los objetos detectados",
                  "de": "Die Vereinigung aller erkannten Objekte berechnen",
                  "nl": "De unie van alle gedetecteerde objecten berekenen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "IoU = (Area of Intersection) / (Area of Union) measures how well a predicted bounding box matches the ground truth. Values range from 0 (no overlap) to 1 (perfect match), commonly using 0.5 threshold for positive detections.",
                  "es": "IoU = (Área de Intersección) / (Área de Unión) mide qué tan bien una caja delimitadora predicha coincide con la verdad fundamental. Los valores van de 0 (sin superposición) a 1 (coincidencia perfecta), comúnmente usando umbral 0.5 para detecciones positivas.",
                  "de": "IoU = (Schnittfläche) / (Vereinigungsfläche) misst wie gut ein vorhergesagter Begrenzungsrahmen mit Ground Truth übereinstimmt. Werte reichen von 0 (keine Überlappung) bis 1 (perfekte Übereinstimmung), üblicherweise mit 0.5 Schwelle für positive Erkennungen.",
                  "nl": "IoU = (Gebied van Intersectie) / (Gebied van Unie) meet hoe goed een voorspelde bounding box overeenkomt met ground truth. Waarden variëren van 0 (geen overlap) tot 1 (perfecte match), gebruikt vaak 0.5 drempel voor positieve detecties."
        }
      },
      {
        question: {
                  "en": "What is non-maximum suppression (NMS) used for in object detection?",
                  "es": "¿Para qué se usa la supresión no máxima (NMS) en detección de objetos?",
                  "de": "Wofür wird Non-Maximum Suppression (NMS) in Objekterkennung verwendet?",
                  "nl": "Waarvoor wordt non-maximum suppression (NMS) gebruikt bij objectdetectie?"
        },
        options: [
        {
                  "en": "Remove duplicate detections of the same object by keeping highest confidence box",
                  "es": "Eliminar detecciones duplicadas del mismo objeto manteniendo la caja de mayor confianza",
                  "de": "Doppelte Erkennungen desselben Objekts entfernen durch Behalten der Box mit höchster Konfidenz",
                  "nl": "Dubbele detecties van hetzelfde object verwijderen door de box met hoogste vertrouwen te behouden"
        },
        {
                  "en": "Prevent models from being too confident",
                  "es": "Prevenir que los modelos sean muy confiados",
                  "de": "Modelle daran hindern zu zuversichtlich zu sein",
                  "nl": "Modellen voorkomen te overtuigd te zijn"
        },
        {
                  "en": "Reduce the number of maximum pooling layers",
                  "es": "Reducir el número de capas de max pooling",
                  "de": "Anzahl der Max-Pooling-Schichten reduzieren",
                  "nl": "Aantal max pooling lagen verminderen"
        },
        {
                  "en": "Suppress the maximum values in feature maps",
                  "es": "Suprimir los valores máximos en mapas de características",
                  "de": "Maximale Werte in Feature-Maps unterdrücken",
                  "nl": "Maximale waarden in feature maps onderdrukken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "NMS eliminates redundant overlapping bounding boxes for the same object by iteratively selecting the box with highest confidence and removing boxes with high IoU overlap, ensuring each object is detected only once.",
                  "es": "NMS elimina cajas delimitadoras superpuestas redundantes para el mismo objeto seleccionando iterativamente la caja con mayor confianza y eliminando cajas con alta superposición IoU, asegurando que cada objeto se detecte solo una vez.",
                  "de": "NMS eliminiert redundante überlappende Begrenzungsrahmen für dasselbe Objekt durch iteratives Auswählen der Box mit höchster Konfidenz und Entfernen von Boxen mit hoher IoU-Überlappung, stellt sicher dass jedes Objekt nur einmal erkannt wird.",
                  "nl": "NMS elimineert redundante overlappende bounding boxes voor hetzelfde object door iteratief de box met hoogste vertrouwen te selecteren en boxes met hoge IoU overlap te verwijderen, zorgt ervoor dat elk object slechts één keer wordt gedetecteerd."
        }
      },
      {
        question: {
                  "en": "What is anchor-free object detection?",
                  "es": "¿Qué es la detección de objetos sin anclas?",
                  "de": "Was ist ankerfreie Objekterkennung?",
                  "nl": "Wat is anchor-free objectdetectie?"
        },
        options: [
        {
                  "en": "Detecting objects by predicting center points and dimensions directly without predefined anchor boxes",
                  "es": "Detectar objetos prediciendo puntos centrales y dimensiones directamente sin cajas de ancla predefinidas",
                  "de": "Objekte erkennen durch direkte Vorhersage von Mittelpunkten und Dimensionen ohne vordefinierte Anker-Boxen",
                  "nl": "Objecten detecteren door middelpunten en afmetingen direct te voorspellen zonder voorgedefinieerde anchor boxes"
        },
        {
                  "en": "Detection without anchoring models to specific datasets",
                  "es": "Detección sin anclar modelos a conjuntos de datos específicos",
                  "de": "Erkennung ohne Modelle an spezifische Datensätze zu verankern",
                  "nl": "Detectie zonder modellen te verankeren aan specifieke datasets"
        },
        {
                  "en": "Finding objects that are not anchored in place",
                  "es": "Encontrar objetos que no están anclados en su lugar",
                  "de": "Objekte finden die nicht an Ort und Stelle verankert sind",
                  "nl": "Objecten vinden die niet op hun plaats verankerd zijn"
        },
        {
                  "en": "Detection without using HTML anchor tags",
                  "es": "Detección sin usar etiquetas de ancla HTML",
                  "de": "Erkennung ohne Verwendung von HTML-Anker-Tags",
                  "nl": "Detectie zonder HTML anchor tags te gebruiken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Anchor-free detectors like FCOS and CenterNet directly predict object centers and dimensions, avoiding the need for predefined anchor boxes. This simplifies the architecture, reduces hyperparameters, and can improve performance especially for objects with extreme aspect ratios.",
                  "es": "Detectores sin anclas como FCOS y CenterNet predicen directamente centros y dimensiones de objetos, evitando la necesidad de cajas de ancla predefinidas. Esto simplifica la arquitectura, reduce hiperparámetros y puede mejorar el rendimiento especialmente para objetos con proporciones extremas.",
                  "de": "Ankerfreie Detektoren wie FCOS und CenterNet sagen direkt Objektzentren und -dimensionen vorher und vermeiden vordefinierte Anker-Boxen. Dies vereinfacht die Architektur, reduziert Hyperparameter und kann Leistung verbessern besonders für Objekte mit extremen Seitenverhältnissen.",
                  "nl": "Anchor-free detectoren zoals FCOS en CenterNet voorspellen direct objectcentra en -afmetingen, vermijden de behoefte aan voorgedefinieerde anchor boxes. Dit vereenvoudigt de architectuur, vermindert hyperparameters en kan prestaties verbeteren vooral voor objecten met extreme aspectratio's."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
})();