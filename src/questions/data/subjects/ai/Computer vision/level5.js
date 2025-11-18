// Computer Vision Quiz - Level 5: Deep Learning and CNNs
(function() {
  const level5 = {
    name: {
      en: "Computer Vision Level 5",
      es: "Visión por Computadora Nivel 5",
      de: "Computer Vision Stufe 5",
      nl: "Computer Vision Level 5"
    },
    questions: [
      {
        question: {
          en: "What do the layers in a Convolutional Neural Network (CNN) typically learn?",
          es: "¿Qué aprenden típicamente las capas en una Red Neuronal Convolucional (CNN)?",
          de: "Was lernen die Schichten in einem Convolutional Neural Network (CNN) typischerweise?",
          nl: "Wat leren de lagen in een Convolutional Neural Network (CNN) doorgaans?"
        },
        options: [
          { en: "Early layers detect simple features, deeper layers combine them into complex patterns", es: "Las capas tempranas detectan características simples, las capas más profundas las combinan en patrones complejos", de: "Frühe Schichten erkennen einfache Merkmale, tiefere Schichten kombinieren sie zu komplexen Mustern", nl: "Vroege lagen detecteren eenvoudige kenmerken, diepere lagen combineren ze tot complexe patronen" },
          { en: "All layers learn the same features", es: "Todas las capas aprenden las mismas características", de: "Alle Schichten lernen dieselben Merkmale", nl: "Alle lagen leren dezelfde kenmerken" },
          { en: "Layers only process image colors", es: "Las capas solo procesan colores de imagen", de: "Schichten verarbeiten nur Bildfarben", nl: "Lagen verwerken alleen beeldkleuren" },
          { en: "Each layer reduces image quality", es: "Cada capa reduce la calidad de imagen", de: "Jede Schicht reduziert die Bildqualität", nl: "Elke laag vermindert de beeldkwaliteit" }
        ],
        correct: 0,
        explanation: {
          en: "CNNs learn hierarchically: initial layers detect edges and textures, middle layers recognize shapes and parts, and final layers identify complete objects and complex scenes.",
          es: "Las CNN aprenden jerárquicamente: las capas iniciales detectan bordes y texturas, las capas medias reconocen formas y partes, y las capas finales identifican objetos completos y escenas complejas.",
          de: "CNNs lernen hierarchisch: anfängliche Schichten erkennen Kanten und Texturen, mittlere Schichten erkennen Formen und Teile, und finale Schichten identifizieren vollständige Objekte und komplexe Szenen.",
          nl: "CNNs leren hiërarchisch: initiële lagen detecteren randen en texturen, middelste lagen herkennen vormen en delen, en finale lagen identificeren complete objecten en complexe scènes."
        }
      },
      {
        question: {
          en: "What is the purpose of pooling layers in CNNs?",
          es: "¿Cuál es el propósito de las capas de pooling en las CNN?",
          de: "Was ist der Zweck von Pooling-Schichten in CNNs?",
          nl: "Wat is het doel van pooling lagen in CNNs?"
        },
        options: [
          { en: "Reduce spatial dimensions while retaining important features", es: "Reducir dimensiones espaciales mientras retienen características importantes", de: "Räumliche Dimensionen reduzieren während wichtige Merkmale beibehalten werden", nl: "Ruimtelijke dimensies verkleinen terwijl belangrijke kenmerken behouden blijven" },
          { en: "Add more colors to images", es: "Agregar más colores a las imágenes", de: "Mehr Farben zu Bildern hinzufügen", nl: "Meer kleuren aan afbeeldingen toevoegen" },
          { en: "Store images in memory pools", es: "Almacenar imágenes en pools de memoria", de: "Bilder in Speicherpools speichern", nl: "Afbeeldingen opslaan in geheugen pools" },
          { en: "Connect to swimming pools", es: "Conectar a piscinas", de: "Mit Schwimmbädern verbinden", nl: "Verbinden met zwembaden" }
        ],
        correct: 0,
        explanation: {
          en: "Pooling layers downsample feature maps by taking maximum or average values from small regions, reducing computational requirements while preserving essential information.",
          es: "Las capas de pooling reducen el muestreo de mapas de características tomando valores máximos o promedio de pequeñas regiones, reduciendo requisitos computacionales mientras preservan información esencial.",
          de: "Pooling-Schichten reduzieren Feature-Maps durch Nehmen von Maximum- oder Durchschnittswerten aus kleinen Regionen, reduzieren Berechnungsanforderungen während wesentliche Informationen bewahrt werden.",
          nl: "Pooling lagen verkleinen feature maps door maximum of gemiddelde waarden te nemen uit kleine regio's, waardoor computationele vereisten worden verminderd terwijl essentiële informatie behouden blijft."
        }
      },
      {
        question: {
          en: "What is transfer learning in computer vision?",
          es: "¿Qué es el aprendizaje por transferencia en visión por computadora?",
          de: "Was ist Transfer Learning in Computer Vision?",
          nl: "Wat is transfer learning in computer vision?"
        },
        options: [
          { en: "Using a pre-trained model as a starting point for new tasks", es: "Usar un modelo pre-entrenado como punto de partida para nuevas tareas", de: "Ein vortrainiertes Modell als Ausgangspunkt für neue Aufgaben verwenden", nl: "Een voorgetraind model gebruiken als uitgangspunt voor nieuwe taken" },
          { en: "Transferring images between computers", es: "Transferir imágenes entre computadoras", de: "Bilder zwischen Computern übertragen", nl: "Afbeeldingen overbrengen tussen computers" },
          { en: "Moving learning algorithms physically", es: "Mover algoritmos de aprendizaje físicamente", de: "Lernalgorithmen physisch bewegen", nl: "Leeralgoritmes fysiek verplaatsen" },
          { en: "Converting knowledge to data files", es: "Convertir conocimiento a archivos de datos", de: "Wissen zu Datendateien konvertieren", nl: "Kennis converteren naar databestanden" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning leverages knowledge from models trained on large datasets like ImageNet, adapting them for specific tasks with less training data and computational resources.",
          es: "El aprendizaje por transferencia aprovecha conocimiento de modelos entrenados en grandes conjuntos de datos como ImageNet, adaptándolos para tareas específicas con menos datos de entrenamiento y recursos computacionales.",
          de: "Transfer Learning nutzt Wissen von Modellen die auf großen Datensätzen wie ImageNet trainiert wurden, passt sie für spezifische Aufgaben mit weniger Trainingsdaten und Rechenressourcen an.",
          nl: "Transfer learning benut kennis van modellen getraind op grote datasets zoals ImageNet, past ze aan voor specifieke taken met minder trainingsdata en computationele bronnen."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in deep neural networks?",
          es: "¿Qué es el problema del gradiente que desaparece en redes neuronales profundas?",
          de: "Was ist das Problem des verschwindenden Gradienten in tiefen neuronalen Netzwerken?",
          nl: "Wat is het verdwijnende gradiënt probleem in diepe neurale netwerken?"
        },
        options: [
          { en: "Gradients become too small to effectively train early layers", es: "Los gradientes se vuelven muy pequeños para entrenar efectivamente las capas tempranas", de: "Gradienten werden zu klein um frühe Schichten effektiv zu trainieren", nl: "Gradiënten worden te klein om vroege lagen effectief te trainen" },
          { en: "Neural networks forget their training", es: "Las redes neuronales olvidan su entrenamiento", de: "Neuronale Netzwerke vergessen ihr Training", nl: "Neurale netwerken vergeten hun training" },
          { en: "Images gradually disappear during processing", es: "Las imágenes desaparecen gradualmente durante el procesamiento", de: "Bilder verschwinden allmählich während der Verarbeitung", nl: "Afbeeldingen verdwijnen geleidelijk tijdens verwerking" },
          { en: "The network becomes invisible", es: "La red se vuelve invisible", de: "Das Netzwerk wird unsichtbar", nl: "Het netwerk wordt onzichtbaar" }
        ],
        correct: 0,
        explanation: {
          en: "In very deep networks, gradients can become exponentially smaller as they propagate backward, making it difficult for early layers to learn effectively during backpropagation.",
          es: "En redes muy profundas, los gradientes pueden volverse exponencialmente más pequeños mientras se propagan hacia atrás, dificultando que las capas tempranas aprendan efectivamente durante la retropropagación.",
          de: "In sehr tiefen Netzwerken können Gradienten exponentiell kleiner werden während sie sich rückwärts ausbreiten, was es für frühe Schichten schwer macht während der Rückpropagation effektiv zu lernen.",
          nl: "In zeer diepe netwerken kunnen gradiënten exponentieel kleiner worden terwijl ze achterwaarts propageren, waardoor het moeilijk wordt voor vroege lagen om effectief te leren tijdens backpropagation."
        }
      },
      {
        question: {
          en: "What advantage do Residual Networks (ResNets) provide for training very deep CNNs?",
          es: "¿Qué ventaja proporcionan las Redes Residuales (ResNets) para entrenar CNN muy profundas?",
          de: "Welchen Vorteil bieten Residual Networks (ResNets) für das Training sehr tiefer CNNs?",
          nl: "Welk voordeel bieden Residual Networks (ResNets) voor het trainen van zeer diepe CNNs?"
        },
        options: [
          { en: "Skip connections allow gradients to flow directly to earlier layers", es: "Las conexiones de salto permiten que los gradientes fluyan directamente a capas anteriores", de: "Skip-Verbindungen ermöglichen Gradienten direkt zu früheren Schichten zu fließen", nl: "Skip verbindingen stellen gradiënten in staat direct naar eerdere lagen te vloeien" },
          { en: "They use less computer memory", es: "Usan menos memoria de computadora", de: "Sie verwenden weniger Computerspeicher", nl: "Ze gebruiken minder computergeheugen" },
          { en: "They only work with residual images", es: "Solo funcionan con imágenes residuales", de: "Sie funktionieren nur mit Restbildern", nl: "Ze werken alleen met residuele afbeeldingen" },
          { en: "They process images faster", es: "Procesan imágenes más rápido", de: "Sie verarbeiten Bilder schneller", nl: "Ze verwerken afbeeldingen sneller" }
        ],
        correct: 0,
        explanation: {
          en: "ResNets introduce skip connections that bypass intermediate layers, enabling gradient flow and allowing the training of networks with hundreds of layers without degradation.",
          es: "Las ResNets introducen conexiones de salto que evitan capas intermedias, permitiendo el flujo de gradientes y permitiendo el entrenamiento de redes con cientos de capas sin degradación.",
          de: "ResNets führen Skip-Verbindungen ein die Zwischenschichten umgehen, ermöglichen Gradientenfluss und erlauben das Training von Netzwerken mit Hunderten von Schichten ohne Degradation.",
          nl: "ResNets introduceren skip verbindingen die tussenliggende lagen omzeilen, gradiëntstroom mogelijk maken en het trainen van netwerken met honderden lagen zonder degradatie toestaan."
        }
      },
      {
        question: {
          en: "What is the primary purpose of dropout layers in neural networks?",
          es: "¿Cuál es el propósito principal de las capas de dropout en redes neuronales?",
          de: "Was ist der Hauptzweck von Dropout-Schichten in neuronalen Netzwerken?",
          nl: "Wat is het primaire doel van dropout lagen in neurale netwerken?"
        },
        options: [
          { en: "Prevent overfitting by randomly disabling neurons during training", es: "Prevenir sobreajuste deshabilitando aleatoriamente neuronas durante el entrenamiento", de: "Overfitting verhindern durch zufälliges Deaktivieren von Neuronen während des Trainings", nl: "Overfitting voorkomen door neuronen willekeurig uit te schakelen tijdens training" },
          { en: "Speed up training by reducing network size", es: "Acelerar entrenamiento reduciendo el tamaño de la red", de: "Training beschleunigen durch Reduzierung der Netzwerkgröße", nl: "Training versnellen door netwerkgrootte te verminderen" },
          { en: "Remove corrupted data from the dataset", es: "Eliminar datos corruptos del conjunto de datos", de: "Beschädigte Daten aus dem Datensatz entfernen", nl: "Beschadigde data uit de dataset verwijderen" },
          { en: "Drop low-quality images from processing", es: "Descartar imágenes de baja calidad del procesamiento", de: "Niedrigqualitative Bilder aus der Verarbeitung ausschließen", nl: "Afbeeldingen van lage kwaliteit uit verwerking weglaten" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout randomly sets a fraction of neurons to zero during training, forcing the network to learn more robust representations and reducing dependency on specific neurons, which helps prevent overfitting.",
          es: "Dropout establece aleatoriamente una fracción de neuronas a cero durante el entrenamiento, forzando a la red a aprender representaciones más robustas y reduciendo la dependencia de neuronas específicas, lo que ayuda a prevenir el sobreajuste.",
          de: "Dropout setzt zufällig einen Bruchteil der Neuronen auf null während des Trainings, zwingt das Netzwerk robustere Repräsentationen zu lernen und reduziert Abhängigkeit von spezifischen Neuronen, was Overfitting verhindert.",
          nl: "Dropout stelt willekeurig een fractie van neuronen in op nul tijdens training, dwingt het netwerk robuustere representaties te leren en vermindert afhankelijkheid van specifieke neuronen, wat overfitting helpt voorkomen."
        }
      },
      {
        question: {
          en: "What does the F1-score measure in classification tasks?",
          es: "¿Qué mide el F1-score en tareas de clasificación?",
          de: "Was misst der F1-Score in Klassifikationsaufgaben?",
          nl: "Wat meet de F1-score bij classificatietaken?"
        },
        options: [
          { en: "Harmonic mean of precision and recall", es: "Media armónica de precisión y recall", de: "Harmonischer Mittelwert von Präzision und Recall", nl: "Harmonisch gemiddelde van precision en recall" },
          { en: "Number of correct predictions out of total predictions", es: "Número de predicciones correctas del total de predicciones", de: "Anzahl korrekter Vorhersagen von Gesamtvorhersagen", nl: "Aantal correcte voorspellingen van totale voorspellingen" },
          { en: "Processing time for one complete forward pass", es: "Tiempo de procesamiento para un pase hacia adelante completo", de: "Verarbeitungszeit für einen vollständigen Vorwärtsdurchgang", nl: "Verwerkingstijd voor één complete forward pass" },
          { en: "Memory usage during model training", es: "Uso de memoria durante entrenamiento del modelo", de: "Speicherverbrauch während Modelltraining", nl: "Geheugengebruik tijdens modeltraining" }
        ],
        correct: 0,
        explanation: {
          en: "F1-score combines precision (ratio of true positives to predicted positives) and recall (ratio of true positives to actual positives) into a single metric, useful for evaluating performance on imbalanced datasets.",
          es: "El F1-score combina precisión (ratio de verdaderos positivos a positivos predichos) y recall (ratio de verdaderos positivos a positivos reales) en una sola métrica, útil para evaluar rendimiento en conjuntos de datos desbalanceados.",
          de: "F1-Score kombiniert Präzision (Verhältnis von wahren Positiven zu vorhergesagten Positiven) und Recall (Verhältnis von wahren Positiven zu tatsächlichen Positiven) in eine einzelne Metrik, nützlich zur Bewertung der Leistung bei unausgewogenen Datensätzen.",
          nl: "F1-score combineert precision (verhouding van true positives tot voorspelde positives) en recall (verhouding van true positives tot werkelijke positives) in één metriek, nuttig voor het evalueren van prestaties op ongebalanceerde datasets."
        }
      },
      {
        question: {
          en: "What is the purpose of batch normalization in deep neural networks?",
          es: "¿Cuál es el propósito de la normalización por lotes en redes neuronales profundas?",
          de: "Was ist der Zweck der Batch-Normalisierung in tiefen neuronalen Netzwerken?",
          nl: "Wat is het doel van batch normalization in diepe neurale netwerken?"
        },
        options: [
          { en: "Normalize layer inputs to accelerate training and improve stability", es: "Normalizar entradas de capas para acelerar entrenamiento y mejorar estabilidad", de: "Schichteingaben normalisieren um Training zu beschleunigen und Stabilität zu verbessern", nl: "Laaginputs normaliseren om training te versnellen en stabiliteit te verbeteren" },
          { en: "Group training data into equal-sized batches", es: "Agrupar datos de entrenamiento en lotes de igual tamaño", de: "Trainingsdaten in gleichgroße Batches gruppieren", nl: "Trainingsdata groeperen in gelijk grote batches" },
          { en: "Standardize image sizes before processing", es: "Estandarizar tamaños de imagen antes del procesamiento", de: "Bildgrößen vor der Verarbeitung standardisieren", nl: "Beeldgroottes standaardiseren voor verwerking" },
          { en: "Balance the number of classes in the dataset", es: "Equilibrar el número de clases en el conjunto de datos", de: "Anzahl der Klassen im Datensatz ausbalancieren", nl: "Het aantal klassen in de dataset balanceren" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes the inputs to each layer, reducing internal covariate shift, allowing higher learning rates, and making training more stable and faster to converge.",
          es: "La normalización por lotes normaliza las entradas a cada capa, reduciendo el cambio covariado interno, permitiendo tasas de aprendizaje más altas, y haciendo el entrenamiento más estable y rápido para converger.",
          de: "Batch-Normalisierung normalisiert die Eingaben zu jeder Schicht, reduziert interne Kovariatenverschiebung, erlaubt höhere Lernraten und macht Training stabiler und schneller konvergierend.",
          nl: "Batch normalization normaliseert de inputs naar elke laag, vermindert interne covariate shift, staat hogere learning rates toe en maakt training stabieler en sneller convergerend."
        }
      },
      {
        question: {
          en: "What is the difference between fine-tuning and feature extraction in transfer learning?",
          es: "¿Cuál es la diferencia entre fine-tuning y extracción de características en aprendizaje por transferencia?",
          de: "Was ist der Unterschied zwischen Fine-Tuning und Merkmalsextraktion beim Transfer Learning?",
          nl: "Wat is het verschil tussen fine-tuning en feature extraction bij transfer learning?"
        },
        options: [
          { en: "Fine-tuning updates pre-trained weights, feature extraction freezes them", es: "Fine-tuning actualiza pesos pre-entrenados, extracción de características los congela", de: "Fine-Tuning aktualisiert vortrainierte Gewichte, Merkmalsextraktion friert sie ein", nl: "Fine-tuning werkt voorgetrainde gewichten bij, feature extraction bevriest ze" },
          { en: "Both methods work exactly the same way", es: "Ambos métodos funcionan exactamente de la misma manera", de: "Beide Methoden funktionieren genau gleich", nl: "Beide methodes werken precies hetzelfde" },
          { en: "Fine-tuning is faster than feature extraction", es: "Fine-tuning es más rápido que extracción de características", de: "Fine-Tuning ist schneller als Merkmalsextraktion", nl: "Fine-tuning is sneller dan feature extraction" },
          { en: "Feature extraction requires more computational power", es: "Extracción de características requiere más poder computacional", de: "Merkmalsextraktion benötigt mehr Rechenleistung", nl: "Feature extraction vereist meer rekenkracht" }
        ],
        correct: 0,
        explanation: {
          en: "In feature extraction, pre-trained layers are frozen and used as fixed feature extractors, while fine-tuning allows gradual updating of pre-trained weights to adapt to the new task.",
          es: "En extracción de características, las capas pre-entrenadas se congelan y se usan como extractores de características fijos, mientras que fine-tuning permite actualización gradual de pesos pre-entrenados para adaptarse a la nueva tarea.",
          de: "Bei Merkmalsextraktion werden vortrainierte Schichten eingefroren und als feste Merkmalsextraktoren verwendet, während Fine-Tuning graduelle Aktualisierung vortrainierter Gewichte zur Anpassung an die neue Aufgabe erlaubt.",
          nl: "Bij feature extraction worden voorgetrainde lagen bevroren en gebruikt als vaste feature extractors, terwijl fine-tuning geleidelijke update van voorgetrainde gewichten toestaat om aan te passen aan de nieuwe taak."
        }
      },
      {
        question: {
          en: "What is the purpose of data normalization before training neural networks?",
          es: "¿Cuál es el propósito de la normalización de datos antes de entrenar redes neuronales?",
          de: "Was ist der Zweck der Datennormalisierung vor dem Training neuronaler Netzwerke?",
          nl: "Wat is het doel van datanormalisatie voor het trainen van neurale netwerken?"
        },
        options: [
          { en: "Scale inputs to similar ranges for faster and more stable convergence", es: "Escalar entradas a rangos similares para convergencia más rápida y estable", de: "Eingaben auf ähnliche Bereiche skalieren für schnellere und stabilere Konvergenz", nl: "Inputs schalen naar vergelijkbare bereiken voor snellere en stabielere convergentie" },
          { en: "Remove duplicate images from the dataset", es: "Eliminar imágenes duplicadas del conjunto de datos", de: "Doppelte Bilder aus dem Datensatz entfernen", nl: "Dubbele afbeeldingen uit de dataset verwijderen" },
          { en: "Convert all images to the same file format", es: "Convertir todas las imágenes al mismo formato de archivo", de: "Alle Bilder in dasselbe Dateiformat konvertieren", nl: "Alle afbeeldingen naar hetzelfde bestandsformaat converteren" },
          { en: "Organize images by classification category", es: "Organizar imágenes por categoría de clasificación", de: "Bilder nach Klassifikationskategorie organisieren", nl: "Afbeeldingen organiseren per classificatiecategorie" }
        ],
        correct: 0,
        explanation: {
          en: "Normalization (e.g., scaling pixel values to 0-1 range) ensures all input features have similar scales, preventing features with larger ranges from dominating training and enabling faster convergence.",
          es: "La normalización (ej., escalar valores de píxeles al rango 0-1) asegura que todas las características de entrada tengan escalas similares, previniendo que características con rangos más grandes dominen el entrenamiento y permitiendo convergencia más rápida.",
          de: "Normalisierung (z.B. Skalierung von Pixelwerten auf den Bereich 0-1) stellt sicher dass alle Eingabemerkmale ähnliche Skalen haben, verhindert dass Merkmale mit größeren Bereichen das Training dominieren und ermöglicht schnellere Konvergenz.",
          nl: "Normalisatie (bijv. pixelwaarden schalen naar 0-1 bereik) zorgt ervoor dat alle input features vergelijkbare schalen hebben, voorkomt dat features met grotere bereiken training domineren en maakt snellere convergentie mogelijk."
        }
      },
      {
        question: {
          en: "What is the purpose of stride in convolutional layers?",
          es: "¿Cuál es el propósito del stride en capas convolucionales?",
          de: "Was ist der Zweck der Schrittweite in Faltungsschichten?",
          nl: "Wat is het doel van stride in convolutional layers?"
        },
        options: [
          { en: "Controls how many pixels the filter moves across the input", es: "Controla cuántos píxeles se mueve el filtro a través de la entrada", de: "Kontrolliert wie viele Pixel der Filter über die Eingabe bewegt", nl: "Controleert hoeveel pixels de filter over de input beweegt" },
          { en: "Determines the number of filters in the layer", es: "Determina el número de filtros en la capa", de: "Bestimmt die Anzahl der Filter in der Schicht", nl: "Bepaalt het aantal filters in de laag" },
          { en: "Sets the depth of the convolutional layer", es: "Establece la profundidad de la capa convolucional", de: "Setzt die Tiefe der Faltungsschicht", nl: "Stelt de diepte van de convolutional layer in" },
          { en: "Controls the activation function used", es: "Controla la función de activación utilizada", de: "Kontrolliert die verwendete Aktivierungsfunktion", nl: "Controleert de gebruikte activatiefunctie" }
        ],
        correct: 0,
        explanation: {
          en: "Stride determines the step size of the convolution operation. A stride of 1 moves the filter one pixel at a time, while larger strides skip pixels, reducing output dimensions and computational load.",
          es: "El stride determina el tamaño del paso de la operación de convolución. Un stride de 1 mueve el filtro un píxel a la vez, mientras que strides más grandes saltan píxeles, reduciendo dimensiones de salida y carga computacional.",
          de: "Schrittweite bestimmt die Schrittgröße der Faltungsoperation. Eine Schrittweite von 1 bewegt den Filter jeweils einen Pixel, während größere Schrittweiten Pixel überspringen, Ausgabedimensionen und Rechenlast reduzieren.",
          nl: "Stride bepaalt de stapgrootte van de convolutie-operatie. Een stride van 1 beweegt de filter één pixel per keer, terwijl grotere strides pixels overslaan, output dimensies en computationele belasting verminderen."
        }
      },
      {
        question: {
          en: "What is the confusion matrix used for in classification evaluation?",
          es: "¿Para qué se usa la matriz de confusión en evaluación de clasificación?",
          de: "Wofür wird die Konfusionsmatrix in der Klassifikationsbewertung verwendet?",
          nl: "Waarvoor wordt de confusion matrix gebruikt bij classificatie-evaluatie?"
        },
        options: [
          { en: "Visualize true vs predicted classifications for each class", es: "Visualizar clasificaciones verdaderas vs predichas para cada clase", de: "Wahre vs. vorhergesagte Klassifikationen für jede Klasse visualisieren", nl: "Werkelijke vs voorspelde classificaties voor elke klasse visualiseren" },
          { en: "Measure training time for each epoch", es: "Medir tiempo de entrenamiento para cada época", de: "Trainingszeit für jede Epoche messen", nl: "Trainingstijd voor elke epoch meten" },
          { en: "Track memory usage during training", es: "Rastrear uso de memoria durante entrenamiento", de: "Speicherverbrauch während des Trainings verfolgen", nl: "Geheugengebruik tijdens training bijhouden" },
          { en: "Display network architecture layers", es: "Mostrar capas de arquitectura de red", de: "Netzwerkarchitektur-Schichten anzeigen", nl: "Netwerkarchitectuur lagen weergeven" }
        ],
        correct: 0,
        explanation: {
          en: "A confusion matrix shows the count of true vs predicted classifications, revealing which classes are often confused with each other and helping identify specific model weaknesses.",
          es: "Una matriz de confusión muestra el conteo de clasificaciones verdaderas vs predichas, revelando qué clases se confunden frecuentemente entre sí y ayudando a identificar debilidades específicas del modelo.",
          de: "Eine Konfusionsmatrix zeigt die Anzahl wahrer vs. vorhergesagter Klassifikationen, offenbart welche Klassen oft miteinander verwechselt werden und hilft spezifische Modellschwächen zu identifizieren.",
          nl: "Een confusion matrix toont de telling van werkelijke vs voorspelde classificaties, onthult welke klassen vaak met elkaar worden verward en helpt specifieke modelzwaktes te identificeren."
        }
      },
      {
        question: {
          en: "What does the term 'receptive field' refer to in CNNs?",
          es: "¿A qué se refiere el término 'campo receptivo' en las CNN?",
          de: "Worauf bezieht sich der Begriff 'rezeptives Feld' in CNNs?",
          nl: "Waar verwijst de term 'receptive field' naar in CNNs?"
        },
        options: [
          { en: "The region of input image that influences a particular neuron's output", es: "La región de imagen de entrada que influye en la salida de una neurona particular", de: "Die Region des Eingabebildes die die Ausgabe eines bestimmten Neurons beeinflusst", nl: "Het gebied van de inputafbeelding dat de output van een bepaald neuron beïnvloedt" },
          { en: "The size of convolutional filters used", es: "El tamaño de filtros convolucionales utilizados", de: "Die Größe der verwendeten Faltungsfilter", nl: "De grootte van gebruikte convolutional filters" },
          { en: "The number of connections between layers", es: "El número de conexiones entre capas", de: "Die Anzahl der Verbindungen zwischen Schichten", nl: "Het aantal verbindingen tussen lagen" },
          { en: "The activation area of pooling operations", es: "El área de activación de operaciones de pooling", de: "Der Aktivierungsbereich von Pooling-Operationen", nl: "Het activatiegebied van pooling operaties" }
        ],
        correct: 0,
        explanation: {
          en: "The receptive field represents the spatial area in the original input image that can influence the computation of a specific feature or neuron in deeper layers of the network.",
          es: "El campo receptivo representa el área espacial en la imagen de entrada original que puede influir en el cálculo de una característica o neurona específica en capas más profundas de la red.",
          de: "Das rezeptive Feld repräsentiert den räumlichen Bereich im ursprünglichen Eingabebild der die Berechnung eines spezifischen Merkmals oder Neurons in tieferen Schichten des Netzwerks beeinflussen kann.",
          nl: "Het receptive field vertegenwoordigt het ruimtelijke gebied in de originele inputafbeelding dat de berekening van een specifieke feature of neuron in diepere lagen van het netwerk kan beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the primary advantage of using Adam optimizer over standard gradient descent?",
          es: "¿Cuál es la ventaja principal de usar el optimizador Adam sobre el descenso de gradiente estándar?",
          de: "Was ist der Hauptvorteil der Verwendung des Adam-Optimizers gegenüber standardmäßigem Gradientenabstieg?",
          nl: "Wat is het primaire voordeel van het gebruik van Adam optimizer boven standaard gradient descent?"
        },
        options: [
          { en: "Adapts learning rates individually for each parameter automatically", es: "Adapta tasas de aprendizaje individualmente para cada parámetro automáticamente", de: "Passt Lernraten individuell für jeden Parameter automatisch an", nl: "Past learning rates individueel voor elke parameter automatisch aan" },
          { en: "Uses less memory during training", es: "Usa menos memoria durante entrenamiento", de: "Verwendet weniger Speicher während des Trainings", nl: "Gebruikt minder geheugen tijdens training" },
          { en: "Processes images faster than other optimizers", es: "Procesa imágenes más rápido que otros optimizadores", de: "Verarbeitet Bilder schneller als andere Optimizer", nl: "Verwerkt afbeeldingen sneller dan andere optimizers" },
          { en: "Works only with convolutional layers", es: "Funciona solo con capas convolucionales", de: "Funktioniert nur mit Faltungsschichten", nl: "Werkt alleen met convolutional layers" }
        ],
        correct: 0,
        explanation: {
          en: "Adam combines the advantages of momentum and adaptive learning rates, maintaining separate learning rates for each parameter and automatically adjusting them based on gradient history and magnitude.",
          es: "Adam combina las ventajas de momentum y tasas de aprendizaje adaptativas, manteniendo tasas de aprendizaje separadas para cada parámetro y ajustándolas automáticamente basado en historial y magnitud de gradientes.",
          de: "Adam kombiniert die Vorteile von Momentum und adaptiven Lernraten, behält separate Lernraten für jeden Parameter bei und passt sie automatisch basierend auf Gradientenhistorie und -größe an.",
          nl: "Adam combineert de voordelen van momentum en adaptieve learning rates, houdt aparte learning rates voor elke parameter bij en past ze automatisch aan gebaseerd op gradiëntgeschiedenis en grootte."
        }
      },
      {
        question: {
          en: "What is the purpose of padding in convolutional layers?",
          es: "¿Cuál es el propósito del padding en capas convolucionales?",
          de: "Was ist der Zweck von Padding in Faltungsschichten?",
          nl: "Wat is het doel van padding in convolutional layers?"
        },
        options: [
          { en: "Preserve spatial dimensions and process edge information", es: "Preservar dimensiones espaciales y procesar información de bordes", de: "Räumliche Dimensionen bewahren und Randinformationen verarbeiten", nl: "Ruimtelijke dimensies behouden en randinformatie verwerken" },
          { en: "Add extra training data to the dataset", es: "Agregar datos de entrenamiento extra al conjunto", de: "Zusätzliche Trainingsdaten zum Datensatz hinzufügen", nl: "Extra trainingsdata toevoegen aan de dataset" },
          { en: "Increase the number of filters", es: "Aumentar el número de filtros", de: "Die Anzahl der Filter erhöhen", nl: "Het aantal filters verhogen" },
          { en: "Speed up convolution operations", es: "Acelerar operaciones de convolución", de: "Faltungsoperationen beschleunigen", nl: "Convolutie-operaties versnellen" }
        ],
        correct: 0,
        explanation: {
          en: "Padding adds zeros (or other values) around the input edges, allowing the convolution to maintain the original spatial dimensions and ensuring edge pixels receive equal attention during processing.",
          es: "El padding agrega ceros (u otros valores) alrededor de los bordes de entrada, permitiendo que la convolución mantenga las dimensiones espaciales originales y asegurando que los píxeles de borde reciban igual atención durante el procesamiento.",
          de: "Padding fügt Nullen (oder andere Werte) um die Eingaberänder hinzu, ermöglicht der Faltung die ursprünglichen räumlichen Dimensionen beizubehalten und stellt sicher dass Randpixel gleiche Aufmerksamkeit während der Verarbeitung erhalten.",
          nl: "Padding voegt nullen (of andere waarden) toe rondom de inputranden, stelt de convolutie in staat de originele ruimtelijke dimensies te behouden en zorgt ervoor dat randpixels gelijke aandacht krijgen tijdens verwerking."
        }
      },
      {
        question: {
          en: "What is the difference between precision and recall in classification metrics?",
          es: "¿Cuál es la diferencia entre precisión y recall en métricas de clasificación?",
          de: "Was ist der Unterschied zwischen Präzision und Recall in Klassifikationsmetriken?",
          nl: "Wat is het verschil tussen precision en recall bij classificatiemetrieken?"
        },
        options: [
          { en: "Precision measures positive prediction accuracy, recall measures positive detection completeness", es: "Precisión mide exactitud de predicción positiva, recall mide completitud de detección positiva", de: "Präzision misst positive Vorhersagegenauigkeit, Recall misst positive Erkennungsvollständigkeit", nl: "Precision meet positieve voorspellingsnauwkeurigheid, recall meet positieve detectievolledigheid" },
          { en: "Precision is always higher than recall", es: "Precisión es siempre mayor que recall", de: "Präzision ist immer höher als Recall", nl: "Precision is altijd hoger dan recall" },
          { en: "They measure the same thing with different names", es: "Miden lo mismo con nombres diferentes", de: "Sie messen dasselbe mit verschiedenen Namen", nl: "Ze meten hetzelfde met verschillende namen" },
          { en: "Precision measures speed, recall measures accuracy", es: "Precisión mide velocidad, recall mide exactitud", de: "Präzision misst Geschwindigkeit, Recall misst Genauigkeit", nl: "Precision meet snelheid, recall meet nauwkeurigheid" }
        ],
        correct: 0,
        explanation: {
          en: "Precision = TP/(TP+FP) measures how many positive predictions were correct, while recall = TP/(TP+FN) measures how many actual positives were correctly identified. High precision means few false positives, high recall means few false negatives.",
          es: "Precisión = VP/(VP+FP) mide cuántas predicciones positivas fueron correctas, mientras recall = VP/(VP+FN) mide cuántos positivos reales fueron identificados correctamente. Alta precisión significa pocos falsos positivos, alto recall significa pocos falsos negativos.",
          de: "Präzision = TP/(TP+FP) misst wie viele positive Vorhersagen korrekt waren, während Recall = TP/(TP+FN) misst wie viele tatsächliche Positive korrekt identifiziert wurden. Hohe Präzision bedeutet wenige falsche Positive, hoher Recall bedeutet wenige falsche Negative.",
          nl: "Precision = TP/(TP+FP) meet hoeveel positieve voorspellingen correct waren, terwijl recall = TP/(TP+FN) meet hoeveel werkelijke positieven correct werden geïdentificeerd. Hoge precision betekent weinig false positives, hoge recall betekent weinig false negatives."
        }
      },
      {
        question: {
          en: "What is the purpose of early stopping in neural network training?",
          es: "¿Cuál es el propósito de la parada temprana en el entrenamiento de redes neuronales?",
          de: "Was ist der Zweck des frühen Stoppens beim Training neuronaler Netzwerke?",
          nl: "Wat is het doel van early stopping bij het trainen van neurale netwerken?"
        },
        options: [
          { en: "Prevent overfitting by stopping when validation performance plateaus", es: "Prevenir sobreajuste parando cuando el rendimiento de validación se estabiliza", de: "Overfitting verhindern durch Stoppen wenn Validierungsleistung stagniert", nl: "Overfitting voorkomen door te stoppen wanneer validatieprestaties stabiliseren" },
          { en: "Save computational time by stopping after fixed iterations", es: "Ahorrar tiempo computacional parando después de iteraciones fijas", de: "Rechenzeit sparen durch Stoppen nach festen Iterationen", nl: "Computatietijd besparen door te stoppen na vaste iteraties" },
          { en: "Stop training when accuracy reaches 100%", es: "Parar entrenamiento cuando exactitud alcanza 100%", de: "Training stoppen wenn Genauigkeit 100% erreicht", nl: "Training stoppen wanneer nauwkeurigheid 100% bereikt" },
          { en: "End training due to hardware limitations", es: "Terminar entrenamiento debido a limitaciones de hardware", de: "Training aufgrund von Hardware-Einschränkungen beenden", nl: "Training beëindigen vanwege hardwarebeperkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Early stopping monitors validation performance and stops training when it stops improving for a certain number of epochs, preventing the model from overfitting to training data.",
          es: "La parada temprana monitorea el rendimiento de validación y para el entrenamiento cuando deja de mejorar por cierto número de épocas, previniendo que el modelo sobreajuste a los datos de entrenamiento.",
          de: "Frühes Stoppen überwacht Validierungsleistung und stoppt Training wenn es für eine bestimmte Anzahl von Epochen aufhört sich zu verbessern, verhindert dass das Modell auf Trainingsdaten überanpasst.",
          nl: "Early stopping monitort validatieprestaties en stopt training wanneer het voor een bepaald aantal epochs stopt met verbeteren, voorkomt dat het model overfit op trainingsdata."
        }
      },
      {
        question: {
          en: "What is the main purpose of data shuffling during training?",
          es: "¿Cuál es el propósito principal de mezclar datos durante el entrenamiento?",
          de: "Was ist der Hauptzweck des Datenmischens während des Trainings?",
          nl: "Wat is het hoofddoel van data shuffling tijdens training?"
        },
        options: [
          { en: "Prevent the model from learning the order of examples", es: "Prevenir que el modelo aprenda el orden de los ejemplos", de: "Verhindern dass das Modell die Reihenfolge der Beispiele lernt", nl: "Voorkomen dat het model de volgorde van voorbeelden leert" },
          { en: "Speed up the training process", es: "Acelerar el proceso de entrenamiento", de: "Den Trainingsprozess beschleunigen", nl: "Het trainingsproces versnellen" },
          { en: "Reduce memory usage", es: "Reducir uso de memoria", de: "Speicherverbrauch reduzieren", nl: "Geheugengebruik verminderen" },
          { en: "Improve image quality", es: "Mejorar calidad de imagen", de: "Bildqualität verbessern", nl: "Beeldkwaliteit verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Shuffling randomizes the order of training examples, ensuring the model doesn't learn patterns based on data sequence and helping achieve better generalization by exposing varied combinations during training.",
          es: "Mezclar aleatoriza el orden de ejemplos de entrenamiento, asegurando que el modelo no aprenda patrones basados en secuencia de datos y ayudando a lograr mejor generalización exponiendo combinaciones variadas durante el entrenamiento.",
          de: "Mischen randomisiert die Reihenfolge von Trainingsbeispielen, stellt sicher dass das Modell keine Muster basierend auf Datensequenz lernt und hilft bessere Generalisierung zu erreichen durch Exposition verschiedener Kombinationen während des Trainings.",
          nl: "Shuffling randomiseert de volgorde van trainingsvoorbeelden, zorgt ervoor dat het model geen patronen leert gebaseerd op datavolgorde en helpt betere generalisatie te bereiken door gevarieerde combinaties bloot te stellen tijdens training."
        }
      },
      {
        question: {
          en: "What is the key difference between VGG and ResNet architectures?",
          es: "¿Cuál es la diferencia clave entre las arquitecturas VGG y ResNet?",
          de: "Was ist der Hauptunterschied zwischen VGG- und ResNet-Architekturen?",
          nl: "Wat is het belangrijkste verschil tussen VGG en ResNet architecturen?"
        },
        options: [
          { en: "ResNet uses skip connections while VGG uses only sequential layers", es: "ResNet usa conexiones de salto mientras VGG usa solo capas secuenciales", de: "ResNet verwendet Skip-Verbindungen während VGG nur sequenzielle Schichten verwendet", nl: "ResNet gebruikt skip verbindingen terwijl VGG alleen sequentiële lagen gebruikt" },
          { en: "VGG is newer than ResNet", es: "VGG es más nuevo que ResNet", de: "VGG ist neuer als ResNet", nl: "VGG is nieuwer dan ResNet" },
          { en: "ResNet only works with grayscale images", es: "ResNet solo funciona con imágenes en escala de grises", de: "ResNet funktioniert nur mit Graustufenbildern", nl: "ResNet werkt alleen met grijswaardenafbeeldingen" },
          { en: "VGG uses larger filters than ResNet", es: "VGG usa filtros más grandes que ResNet", de: "VGG verwendet größere Filter als ResNet", nl: "VGG gebruikt grotere filters dan ResNet" }
        ],
        correct: 0,
        explanation: {
          en: "ResNet introduced skip connections (residual connections) that allow information to bypass layers, enabling training of much deeper networks, while VGG follows a traditional sequential architecture without skip connections.",
          es: "ResNet introdujo conexiones de salto (conexiones residuales) que permiten que la información evite capas, permitiendo el entrenamiento de redes mucho más profundas, mientras que VGG sigue una arquitectura secuencial tradicional sin conexiones de salto.",
          de: "ResNet führte Skip-Verbindungen (Residualverbindungen) ein die Informationen ermöglichen Schichten zu umgehen, ermöglicht Training viel tieferer Netzwerke, während VGG einer traditionellen sequenziellen Architektur ohne Skip-Verbindungen folgt.",
          nl: "ResNet introduceerde skip verbindingen (residual verbindingen) die informatie toestaan lagen te omzeilen, waardoor training van veel diepere netwerken mogelijk wordt, terwijl VGG een traditionele sequentiële architectuur volgt zonder skip verbindingen."
        }
      },
      {
        question: {
          en: "What is the purpose of learning rate scheduling in training?",
          es: "¿Cuál es el propósito de la programación de tasa de aprendizaje en el entrenamiento?",
          de: "Was ist der Zweck der Lernraten-Planung beim Training?",
          nl: "Wat is het doel van learning rate scheduling bij training?"
        },
        options: [
          { en: "Adjust learning rate during training to improve convergence", es: "Ajustar tasa de aprendizaje durante entrenamiento para mejorar convergencia", de: "Lernrate während Training anpassen um Konvergenz zu verbessern", nl: "Learning rate aanpassen tijdens training om convergentie te verbeteren" },
          { en: "Schedule when to start and stop training", es: "Programar cuándo iniciar y parar entrenamiento", de: "Planen wann Training startet und stoppt", nl: "Plannen wanneer training start en stopt" },
          { en: "Determine the training batch schedule", es: "Determinar el horario de lotes de entrenamiento", de: "Den Trainings-Batch-Zeitplan bestimmen", nl: "Het training batch schema bepalen" },
          { en: "Schedule data augmentation operations", es: "Programar operaciones de aumento de datos", de: "Datenaugmentations-Operationen planen", nl: "Data augmentation operaties plannen" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate scheduling gradually reduces the learning rate during training (e.g., step decay, exponential decay), allowing faster initial learning and fine-tuned convergence to optimal parameters later.",
          es: "La programación de tasa de aprendizaje reduce gradualmente la tasa de aprendizaje durante el entrenamiento (ej., decaimiento por pasos, decaimiento exponencial), permitiendo aprendizaje inicial más rápido y convergencia afinada a parámetros óptimos después.",
          de: "Lernraten-Planung reduziert allmählich die Lernrate während des Trainings (z.B. Schritt-Zerfall, exponentieller Zerfall), ermöglicht schnelleres anfängliches Lernen und fein abgestimmte Konvergenz zu optimalen Parametern später.",
          nl: "Learning rate scheduling vermindert geleidelijk de learning rate tijdens training (bijv. step decay, exponential decay), staat sneller initieel leren en fijn afgestemde convergentie naar optimale parameters later toe."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();