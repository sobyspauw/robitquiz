// Computer Vision Quiz - Level 4: Machine Learning in Computer Vision
(function() {
  const level4 = {
    name: {
      en: "Computer Vision Level 4",
      es: "Visión por Computadora Nivel 4",
      de: "Computer Vision Stufe 4",
      nl: "Computer Vision Level 4"
    },
    questions: [
      {
        question: {
          en: "What is the main advantage of machine learning in computer vision?",
          es: "¿Cuál es la principal ventaja del aprendizaje automático en visión por computadora?",
          de: "Was ist der Hauptvorteil von maschinellem Lernen in Computer Vision?",
          nl: "Wat is het hoofdvoordeel van machine learning in computer vision?"
        },
        options: [
          { en: "Automatically learning patterns from data without manual programming", es: "Aprender automáticamente patrones de datos sin programación manual", de: "Automatisches Lernen von Mustern aus Daten ohne manuelle Programmierung", nl: "Automatisch patronen leren uit data zonder handmatige programmering" },
          { en: "Making images look better", es: "Hacer que las imágenes se vean mejor", de: "Bilder besser aussehen lassen", nl: "Afbeeldingen er beter uit laten zien" },
          { en: "Reducing image file sizes", es: "Reducir tamaños de archivo de imagen", de: "Bilddateigrößen reduzieren", nl: "Beeldbestandsgroottes verkleinen" },
          { en: "Converting images to different formats", es: "Convertir imágenes a diferentes formatos", de: "Bilder in verschiedene Formate konvertieren", nl: "Afbeeldingen naar verschillende formaten converteren" }
        ],
        correct: 0,
        explanation: {
          en: "Machine learning algorithms can automatically discover and learn complex patterns in visual data, adapting to new situations without explicit programming for each scenario.",
          es: "Los algoritmos de aprendizaje automático pueden descubrir y aprender automáticamente patrones complejos en datos visuales, adaptándose a nuevas situaciones sin programación explícita para cada escenario.",
          de: "Maschinelle Lernalgorithmen können automatisch komplexe Muster in visuellen Daten entdecken und lernen, sich an neue Situationen anpassen ohne explizite Programmierung für jedes Szenario.",
          nl: "Machine learning algoritmes kunnen automatisch complexe patronen in visuele data ontdekken en leren, zich aanpassen aan nieuwe situaties zonder expliciete programmering voor elk scenario."
        }
      },
      {
        question: {
          en: "What are convolutional neural networks (CNNs) particularly good at in computer vision?",
          es: "¿En qué son particularmente buenas las redes neuronales convolucionales (CNN) en visión por computadora?",
          de: "Wofür sind Convolutional Neural Networks (CNNs) in Computer Vision besonders gut?",
          nl: "Waar zijn convolutional neural networks (CNNs) bijzonder goed in bij computer vision?"
        },
        options: [
          { en: "Recognizing spatial patterns and hierarchical features in images", es: "Reconocer patrones espaciales y características jerárquicas en imágenes", de: "Räumliche Muster und hierarchische Merkmale in Bildern erkennen", nl: "Ruimtelijke patronen en hiërarchische kenmerken in afbeeldingen herkennen" },
          { en: "Processing text documents", es: "Procesar documentos de texto", de: "Textdokumente verarbeiten", nl: "Tekstdocumenten verwerken" },
          { en: "Calculating mathematical equations", es: "Calcular ecuaciones matemáticas", de: "Mathematische Gleichungen berechnen", nl: "Wiskundige vergelijkingen berekenen" },
          { en: "Playing music files", es: "Reproducir archivos de música", de: "Musikdateien abspielen", nl: "Muziekbestanden afspelen" }
        ],
        correct: 0,
        explanation: {
          en: "CNNs use convolution operations to detect local features like edges and textures, then combine them hierarchically to recognize complex objects and scenes.",
          es: "Las CNN usan operaciones de convolución para detectar características locales como bordes y texturas, luego las combinan jerárquicamente para reconocer objetos y escenas complejas.",
          de: "CNNs verwenden Faltungsoperationen um lokale Merkmale wie Kanten und Texturen zu erkennen, kombinieren sie dann hierarchisch um komplexe Objekte und Szenen zu erkennen.",
          nl: "CNNs gebruiken convolutie-operaties om lokale kenmerken zoals randen en texturen te detecteren, combineren ze vervolgens hiërarchisch om complexe objecten en scènes te herkennen."
        }
      },
      {
        question: {
          en: "What is the purpose of training data in computer vision machine learning?",
          es: "¿Cuál es el propósito de los datos de entrenamiento en aprendizaje automático de visión por computadora?",
          de: "Was ist der Zweck von Trainingsdaten in Computer Vision Machine Learning?",
          nl: "Wat is het doel van trainingsdata in computer vision machine learning?"
        },
        options: [
          { en: "Teaching the algorithm to recognize patterns by showing examples", es: "Enseñar al algoritmo a reconocer patrones mostrando ejemplos", de: "Dem Algorithmus beibringen Muster zu erkennen indem Beispiele gezeigt werden", nl: "Het algoritme leren patronen te herkennen door voorbeelden te tonen" },
          { en: "Storing images for future use", es: "Almacenar imágenes para uso futuro", de: "Bilder für zukünftige Nutzung speichern", nl: "Afbeeldingen opslaan voor toekomstig gebruik" },
          { en: "Testing computer hardware", es: "Probar hardware de computadora", de: "Computer-Hardware testen", nl: "Computerhardware testen" },
          { en: "Creating backup copies", es: "Crear copias de respaldo", de: "Backup-Kopien erstellen", nl: "Back-upkopieën maken" }
        ],
        correct: 0,
        explanation: {
          en: "Training data consists of labeled examples that help machine learning models learn the relationship between input images and desired outputs, enabling accurate predictions on new data.",
          es: "Los datos de entrenamiento consisten en ejemplos etiquetados que ayudan a los modelos de aprendizaje automático a aprender la relación entre imágenes de entrada y salidas deseadas, permitiendo predicciones precisas en datos nuevos.",
          de: "Trainingsdaten bestehen aus beschrifteten Beispielen die maschinellen Lernmodellen helfen die Beziehung zwischen Eingabebildern und gewünschten Ausgaben zu lernen, ermöglichen genaue Vorhersagen auf neuen Daten.",
          nl: "Trainingsdata bestaat uit gelabelde voorbeelden die machine learning modellen helpen de relatie tussen invoerbeelden en gewenste outputs te leren, waardoor nauwkeurige voorspellingen op nieuwe data mogelijk worden."
        }
      },
      {
        question: {
          en: "What does 'overfitting' mean in computer vision machine learning?",
          es: "¿Qué significa 'sobreajuste' en aprendizaje automático de visión por computadora?",
          de: "Was bedeutet 'Overfitting' in Computer Vision Machine Learning?",
          nl: "Wat betekent 'overfitting' in computer vision machine learning?"
        },
        options: [
          { en: "When a model learns training data too specifically and fails on new images", es: "Cuando un modelo aprende datos de entrenamiento muy específicamente y falla en imágenes nuevas", de: "Wenn ein Modell Trainingsdaten zu spezifisch lernt und bei neuen Bildern versagt", nl: "Wanneer een model trainingsdata te specifiek leert en faalt bij nieuwe afbeeldingen" },
          { en: "When images are too large for processing", es: "Cuando las imágenes son muy grandes para procesar", de: "Wenn Bilder zu groß für die Verarbeitung sind", nl: "Wanneer afbeeldingen te groot zijn voor verwerking" },
          { en: "When there are too many pixels in an image", es: "Cuando hay demasiados píxeles en una imagen", de: "Wenn es zu viele Pixel in einem Bild gibt", nl: "Wanneer er te veel pixels in een afbeelding zijn" },
          { en: "When the computer runs out of memory", es: "Cuando la computadora se queda sin memoria", de: "Wenn dem Computer der Speicher ausgeht", nl: "Wanneer de computer geen geheugen meer heeft" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting occurs when a model memorizes specific details of training images rather than learning generalizable patterns, resulting in poor performance on new, unseen data.",
          es: "El sobreajuste ocurre cuando un modelo memoriza detalles específicos de imágenes de entrenamiento en lugar de aprender patrones generalizables, resultando en mal rendimiento en datos nuevos no vistos.",
          de: "Overfitting tritt auf wenn ein Modell spezifische Details von Trainingsbildern auswendig lernt anstatt verallgemeinerbare Muster zu lernen, was zu schlechter Leistung bei neuen, ungesehenen Daten führt.",
          nl: "Overfitting treedt op wanneer een model specifieke details van trainingsafbeeldingen uit het hoofd leert in plaats van generaliseerbare patronen te leren, wat resulteert in slechte prestaties op nieuwe, ongeziene data."
        }
      },
      {
        question: {
          en: "Which technique helps improve computer vision model accuracy by artificially expanding the training dataset?",
          es: "¿Qué técnica ayuda a mejorar la precisión del modelo de visión por computadora expandiendo artificialmente el conjunto de datos de entrenamiento?",
          de: "Welche Technik hilft die Genauigkeit von Computer Vision Modellen zu verbessern indem der Trainingsdatensatz künstlich erweitert wird?",
          nl: "Welke techniek helpt de nauwkeurigheid van computer vision modellen te verbeteren door de trainingsdataset kunstmatig uit te breiden?"
        },
        options: [
          { en: "Data augmentation through rotations, crops, and color changes", es: "Aumento de datos a través de rotaciones, recortes y cambios de color", de: "Datenaugmentation durch Rotationen, Zuschnitte und Farbveränderungen", nl: "Data augmentation door rotaties, crops en kleurveranderingen" },
          { en: "Deleting duplicate images", es: "Eliminar imágenes duplicadas", de: "Doppelte Bilder löschen", nl: "Dubbele afbeeldingen verwijderen" },
          { en: "Using only high-resolution images", es: "Usar solo imágenes de alta resolución", de: "Nur hochauflösende Bilder verwenden", nl: "Alleen hoge resolutie afbeeldingen gebruiken" },
          { en: "Converting all images to black and white", es: "Convertir todas las imágenes a blanco y negro", de: "Alle Bilder zu Schwarz-Weiß konvertieren", nl: "Alle afbeeldingen naar zwart-wit converteren" }
        ],
        correct: 0,
        explanation: {
          en: "Data augmentation creates variations of existing training images through transformations like rotation, scaling, flipping, and color adjustment, helping models generalize better to new data.",
          es: "El aumento de datos crea variaciones de imágenes de entrenamiento existentes a través de transformaciones como rotación, escalado, volteo y ajuste de color, ayudando a los modelos a generalizar mejor a nuevos datos.",
          de: "Datenaugmentation erstellt Variationen existierender Trainingsbilder durch Transformationen wie Rotation, Skalierung, Spiegelung und Farbanpassung, hilft Modellen besser auf neue Daten zu generalisieren.",
          nl: "Data augmentation creëert variaties van bestaande trainingsafbeeldingen door transformaties zoals rotatie, schaling, spiegeling en kleureaanpassing, waardoor modellen beter generaliseren naar nieuwe data."
        }
      },
      {
        question: {
          en: "What is supervised learning in computer vision?",
          es: "¿Qué es el aprendizaje supervisado en visión por computadora?",
          de: "Was ist überwachtes Lernen in Computer Vision?",
          nl: "Wat is supervised learning in computer vision?"
        },
        options: [
          { en: "Training with labeled examples where correct answers are provided", es: "Entrenamiento con ejemplos etiquetados donde se proporcionan respuestas correctas", de: "Training mit beschrifteten Beispielen wo korrekte Antworten bereitgestellt werden", nl: "Trainen met gelabelde voorbeelden waar correcte antwoorden worden gegeven" },
          { en: "Learning without any human supervision", es: "Aprender sin supervisión humana", de: "Lernen ohne menschliche Aufsicht", nl: "Leren zonder menselijke supervisie" },
          { en: "Watching videos to learn patterns", es: "Ver videos para aprender patrones", de: "Videos schauen um Muster zu lernen", nl: "Video's kijken om patronen te leren" },
          { en: "Having a teacher physically present", es: "Tener un maestro físicamente presente", de: "Einen Lehrer physisch anwesend haben", nl: "Een leraar fysiek aanwezig hebben" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised learning uses datasets with input-output pairs, where images are paired with correct labels, allowing the algorithm to learn the mapping between visual features and classifications.",
          es: "El aprendizaje supervisado usa conjuntos de datos con pares de entrada-salida, donde las imágenes se emparejan con etiquetas correctas, permitiendo al algoritmo aprender el mapeo entre características visuales y clasificaciones.",
          de: "Überwachtes Lernen verwendet Datensätze mit Eingabe-Ausgabe-Paaren, wo Bilder mit korrekten Labels gepaart werden, wodurch der Algorithmus die Zuordnung zwischen visuellen Merkmalen und Klassifikationen lernen kann.",
          nl: "Supervised learning gebruikt datasets met input-output paren, waar afbeeldingen gekoppeld zijn aan correcte labels, waardoor het algoritme de mapping tussen visuele kenmerken en classificaties kan leren."
        }
      },
      {
        question: {
          en: "Which of these is a common feature extraction technique in traditional computer vision?",
          es: "¿Cuál de estas es una técnica común de extracción de características en visión por computadora tradicional?",
          de: "Welche davon ist eine gängige Merkmalsextraktionstechnik in traditioneller Computer Vision?",
          nl: "Welke van deze is een veelgebruikte feature extraction techniek in traditionele computer vision?"
        },
        options: [
          { en: "SIFT (Scale-Invariant Feature Transform)", es: "SIFT (Transformada de Características Invariante a Escala)", de: "SIFT (Skalierungs-invariante Merkmalstransformation)", nl: "SIFT (Scale-Invariant Feature Transform)" },
          { en: "Image compression", es: "Compresión de imagen", de: "Bildkompression", nl: "Beeldcompressie" },
          { en: "Color inversion", es: "Inversión de color", de: "Farbinversion", nl: "Kleuromkering" },
          { en: "Brightness adjustment", es: "Ajuste de brillo", de: "Helligkeitsanpassung", nl: "Helderheidsaanpassing" }
        ],
        correct: 0,
        explanation: {
          en: "SIFT detects and describes local features in images that are invariant to scale, rotation, and illumination changes, making it valuable for object recognition and image matching.",
          es: "SIFT detecta y describe características locales en imágenes que son invariantes a cambios de escala, rotación e iluminación, haciéndolo valioso para reconocimiento de objetos y coincidencia de imágenes.",
          de: "SIFT erkennt und beschreibt lokale Merkmale in Bildern die invariant gegenüber Skalierungs-, Rotations- und Beleuchtungsänderungen sind, was es wertvoll für Objekterkennung und Bildabgleich macht.",
          nl: "SIFT detecteert en beschrijft lokale kenmerken in afbeeldingen die invariant zijn voor schaal-, rotatie- en verlichtingsveranderingen, waardoor het waardevol is voor objectherkenning en beeldmatching."
        }
      },
      {
        question: {
          en: "What is the purpose of a validation dataset in machine learning?",
          es: "¿Cuál es el propósito de un conjunto de datos de validación en aprendizaje automático?",
          de: "Was ist der Zweck eines Validierungsdatensatzes in maschinellem Lernen?",
          nl: "Wat is het doel van een validatie dataset in machine learning?"
        },
        options: [
          { en: "To evaluate model performance during training without using test data", es: "Evaluar el rendimiento del modelo durante el entrenamiento sin usar datos de prueba", de: "Modellleistung während des Trainings bewerten ohne Testdaten zu verwenden", nl: "Modelprestaties evalueren tijdens training zonder testdata te gebruiken" },
          { en: "To store backup copies of images", es: "Almacenar copias de respaldo de imágenes", de: "Backup-Kopien von Bildern speichern", nl: "Back-upkopieën van afbeeldingen opslaan" },
          { en: "To validate image file formats", es: "Validar formatos de archivo de imagen", de: "Bilddateiformate validieren", nl: "Beeldbestandsformaten valideren" },
          { en: "To check if images are corrupted", es: "Verificar si las imágenes están corruptas", de: "Prüfen ob Bilder beschädigt sind", nl: "Controleren of afbeeldingen beschadigd zijn" }
        ],
        correct: 0,
        explanation: {
          en: "The validation set helps tune hyperparameters and monitor training progress, providing an unbiased evaluation metric while preserving the test set for final assessment.",
          es: "El conjunto de validación ayuda a ajustar hiperparámetros y monitorear el progreso del entrenamiento, proporcionando una métrica de evaluación imparcial mientras preserva el conjunto de prueba para la evaluación final.",
          de: "Der Validierungssatz hilft Hyperparameter zu justieren und Trainingsfortschritt zu überwachen, bietet eine unvoreingenommene Bewertungsmetrik während der Testsatz für die finale Bewertung bewahrt wird.",
          nl: "De validatieset helpt hyperparameters af te stellen en trainingsvoortgang te monitoren, en biedt een onbevooroordeelde evaluatiemetriek terwijl de testset bewaard blijft voor finale beoordeling."
        }
      },
      {
        question: {
          en: "What is a neural network activation function's primary role?",
          es: "¿Cuál es el papel principal de la función de activación de una red neuronal?",
          de: "Was ist die Hauptrolle einer Aktivierungsfunktion eines neuronalen Netzwerks?",
          nl: "Wat is de primaire rol van een activatiefunctie van een neuraal netwerk?"
        },
        options: [
          { en: "Introduce non-linearity to enable learning complex patterns", es: "Introducir no linealidad para permitir el aprendizaje de patrones complejos", de: "Nichtlinearität einführen um das Lernen komplexer Muster zu ermöglichen", nl: "Non-lineariteit introduceren om het leren van complexe patronen mogelijk te maken" },
          { en: "Store neuron values in memory", es: "Almacenar valores de neuronas en memoria", de: "Neuronenwerte im Speicher speichern", nl: "Neuron waarden in geheugen opslaan" },
          { en: "Connect neurons physically", es: "Conectar neuronas físicamente", de: "Neuronen physisch verbinden", nl: "Neuronen fysiek verbinden" },
          { en: "Speed up image processing", es: "Acelerar el procesamiento de imágenes", de: "Bildverarbeitung beschleunigen", nl: "Beeldverwerking versnellen" }
        ],
        correct: 0,
        explanation: {
          en: "Activation functions like ReLU, sigmoid, or tanh add non-linear transformations to neural networks, allowing them to learn complex, non-linear relationships in data that linear functions cannot capture.",
          es: "Las funciones de activación como ReLU, sigmoid o tanh agregan transformaciones no lineales a las redes neuronales, permitiéndoles aprender relaciones complejas y no lineales en datos que las funciones lineales no pueden capturar.",
          de: "Aktivierungsfunktionen wie ReLU, Sigmoid oder Tanh fügen nichtlineare Transformationen zu neuronalen Netzwerken hinzu, ermöglichen ihnen komplexe, nichtlineare Beziehungen in Daten zu lernen die lineare Funktionen nicht erfassen können.",
          nl: "Activatiefuncties zoals ReLU, sigmoid of tanh voegen non-lineaire transformaties toe aan neurale netwerken, waardoor ze complexe, non-lineaire relaties in data kunnen leren die lineaire functies niet kunnen vastleggen."
        }
      },
      {
        question: {
          en: "What does 'gradient descent' accomplish in neural network training?",
          es: "¿Qué logra el 'descenso de gradiente' en el entrenamiento de redes neuronales?",
          de: "Was erreicht 'Gradientenabstieg' beim Training neuronaler Netzwerke?",
          nl: "Wat bereikt 'gradient descent' bij het trainen van neurale netwerken?"
        },
        options: [
          { en: "Iteratively adjusts weights to minimize prediction errors", es: "Ajusta iterativamente los pesos para minimizar errores de predicción", de: "Passt iterativ Gewichte an um Vorhersagefehler zu minimieren", nl: "Past iteratief gewichten aan om voorspellingsfouten te minimaliseren" },
          { en: "Downloads gradients from the internet", es: "Descarga gradientes de internet", de: "Lädt Gradienten aus dem Internet herunter", nl: "Downloadt gradiënten van het internet" },
          { en: "Reduces image resolution gradually", es: "Reduce la resolución de imagen gradualmente", de: "Reduziert Bildauflösung allmählich", nl: "Vermindert beeldresolutie geleidelijk" },
          { en: "Moves data down processing pipelines", es: "Mueve datos hacia abajo en pipelines de procesamiento", de: "Bewegt Daten in Verarbeitungspipelines nach unten", nl: "Verplaatst data naar beneden in verwerkingspipelines" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient descent calculates the gradient of the loss function with respect to model parameters and updates weights in the direction that reduces error, gradually improving model performance.",
          es: "El descenso de gradiente calcula el gradiente de la función de pérdida con respecto a los parámetros del modelo y actualiza los pesos en la dirección que reduce el error, mejorando gradualmente el rendimiento del modelo.",
          de: "Gradientenabstieg berechnet den Gradienten der Verlustfunktion bezüglich Modellparametern und aktualisiert Gewichte in die Richtung die Fehler reduziert, verbessert allmählich Modellleistung.",
          nl: "Gradient descent berekent de gradiënt van de verliesfunctie ten opzichte van modelparameters en werkt gewichten bij in de richting die fouten vermindert, waardoor modelprestaties geleidelijk verbeteren."
        }
      },
      {
        question: {
          en: "What is the purpose of a loss function in machine learning?",
          es: "¿Cuál es el propósito de una función de pérdida en aprendizaje automático?",
          de: "Was ist der Zweck einer Verlustfunktion in maschinellem Lernen?",
          nl: "Wat is het doel van een verliesfunctie in machine learning?"
        },
        options: [
          { en: "Measure the difference between predicted and actual outputs", es: "Medir la diferencia entre salidas predichas y reales", de: "Die Differenz zwischen vorhergesagten und tatsächlichen Ausgaben messen", nl: "Het verschil meten tussen voorspelde en werkelijke outputs" },
          { en: "Count lost or missing data points", es: "Contar puntos de datos perdidos o faltantes", de: "Verlorene oder fehlende Datenpunkte zählen", nl: "Verloren of ontbrekende datapunten tellen" },
          { en: "Reduce computational processing time", es: "Reducir tiempo de procesamiento computacional", de: "Rechnerische Verarbeitungszeit reduzieren", nl: "Computationele verwerkingstijd verminderen" },
          { en: "Compress image files for storage", es: "Comprimir archivos de imagen para almacenamiento", de: "Bilddateien für Speicherung komprimieren", nl: "Beeldbestanden comprimeren voor opslag" }
        ],
        correct: 0,
        explanation: {
          en: "Loss functions quantify how far the model's predictions are from the true values, providing a signal for optimization algorithms to adjust parameters and improve accuracy.",
          es: "Las funciones de pérdida cuantifican qué tan lejos están las predicciones del modelo de los valores verdaderos, proporcionando una señal para que los algoritmos de optimización ajusten parámetros y mejoren la precisión.",
          de: "Verlustfunktionen quantifizieren wie weit die Vorhersagen des Modells von den wahren Werten entfernt sind, bieten ein Signal für Optimierungsalgorithmen um Parameter anzupassen und Genauigkeit zu verbessern.",
          nl: "Verliesfuncties kwantificeren hoe ver de voorspellingen van het model zijn van de werkelijke waarden, en bieden een signaal voor optimalisatie-algoritmes om parameters aan te passen en nauwkeurigheid te verbeteren."
        }
      },
      {
        question: {
          en: "What is the main difference between classification and regression in computer vision?",
          es: "¿Cuál es la principal diferencia entre clasificación y regresión en visión por computadora?",
          de: "Was ist der Hauptunterschied zwischen Klassifikation und Regression in Computer Vision?",
          nl: "Wat is het hoofdverschil tussen classificatie en regressie in computer vision?"
        },
        options: [
          { en: "Classification predicts categories, regression predicts continuous values", es: "La clasificación predice categorías, la regresión predice valores continuos", de: "Klassifikation sagt Kategorien vorher, Regression sagt kontinuierliche Werte vorher", nl: "Classificatie voorspelt categorieën, regressie voorspelt continue waarden" },
          { en: "Classification is faster than regression", es: "La clasificación es más rápida que la regresión", de: "Klassifikation ist schneller als Regression", nl: "Classificatie is sneller dan regressie" },
          { en: "Classification works with color images, regression with grayscale", es: "La clasificación funciona con imágenes a color, la regresión con escala de grises", de: "Klassifikation funktioniert mit Farbbildern, Regression mit Graustufen", nl: "Classificatie werkt met kleurenafbeeldingen, regressie met grijswaarden" },
          { en: "They are exactly the same thing", es: "Son exactamente lo mismo", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" }
        ],
        correct: 0,
        explanation: {
          en: "Classification tasks assign discrete labels (e.g., 'cat', 'dog', 'car'), while regression tasks predict numerical values (e.g., age estimation, distance measurement, probability scores).",
          es: "Las tareas de clasificación asignan etiquetas discretas (ej., 'gato', 'perro', 'auto'), mientras que las tareas de regresión predicen valores numéricos (ej., estimación de edad, medición de distancia, puntuaciones de probabilidad).",
          de: "Klassifikationsaufgaben weisen diskrete Labels zu (z.B. 'Katze', 'Hund', 'Auto'), während Regressionsaufgaben numerische Werte vorhersagen (z.B. Altersschätzung, Entfernungsmessung, Wahrscheinlichkeitswerte).",
          nl: "Classificatietaken wijzen discrete labels toe (bijv. 'kat', 'hond', 'auto'), terwijl regressietaken numerieke waarden voorspellen (bijv. leeftijdschatting, afstandsmeting, waarschijnlijkheidsscores)."
        }
      },
      {
        question: {
          en: "What is a common challenge when working with small training datasets in computer vision?",
          es: "¿Cuál es un desafío común al trabajar con pequeños conjuntos de datos de entrenamiento en visión por computadora?",
          de: "Was ist eine häufige Herausforderung beim Arbeiten mit kleinen Trainingsdatensätzen in Computer Vision?",
          nl: "Wat is een veelvoorkomende uitdaging bij het werken met kleine trainingsdatasets in computer vision?"
        },
        options: [
          { en: "Insufficient data leads to poor generalization and overfitting", es: "Datos insuficientes llevan a mala generalización y sobreajuste", de: "Unzureichende Daten führen zu schlechter Generalisierung und Overfitting", nl: "Onvoldoende data leidt tot slechte generalisatie en overfitting" },
          { en: "Small datasets process too quickly", es: "Los conjuntos de datos pequeños se procesan muy rápido", de: "Kleine Datensätze verarbeiten zu schnell", nl: "Kleine datasets verwerken te snel" },
          { en: "They require more storage space", es: "Requieren más espacio de almacenamiento", de: "Sie benötigen mehr Speicherplatz", nl: "Ze hebben meer opslagruimte nodig" },
          { en: "They are harder to organize", es: "Son más difíciles de organizar", de: "Sie sind schwerer zu organisieren", nl: "Ze zijn moeilijker te organiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Small datasets don't provide enough diverse examples for models to learn robust patterns, often resulting in memorization of training data rather than true understanding.",
          es: "Los conjuntos de datos pequeños no proporcionan suficientes ejemplos diversos para que los modelos aprendan patrones robustos, a menudo resultando en memorización de datos de entrenamiento en lugar de verdadera comprensión.",
          de: "Kleine Datensätze bieten nicht genügend diverse Beispiele für Modelle um robuste Muster zu lernen, führen oft zu Auswendiglernen von Trainingsdaten anstatt wahrem Verständnis.",
          nl: "Kleine datasets bieden niet genoeg diverse voorbeelden voor modellen om robuuste patronen te leren, wat vaak resulteert in het uit het hoofd leren van trainingsdata in plaats van echt begrip."
        }
      },
      {
        question: {
          en: "What does 'feature engineering' involve in traditional machine learning approaches?",
          es: "¿Qué implica la 'ingeniería de características' en enfoques tradicionales de aprendizaje automático?",
          de: "Was beinhaltet 'Feature Engineering' in traditionellen maschinellen Lernansätzen?",
          nl: "Wat houdt 'feature engineering' in bij traditionele machine learning benaderingen?"
        },
        options: [
          { en: "Manually designing and selecting relevant image features for the algorithm", es: "Diseñar y seleccionar manualmente características de imagen relevantes para el algoritmo", de: "Manuelles Entwerfen und Auswählen relevanter Bildmerkmale für den Algorithmus", nl: "Handmatig ontwerpen en selecteren van relevante beeldkenmerken voor het algoritme" },
          { en: "Building hardware components for faster processing", es: "Construir componentes de hardware para procesamiento más rápido", de: "Hardware-Komponenten für schnellere Verarbeitung bauen", nl: "Hardwarecomponenten bouwen voor snellere verwerking" },
          { en: "Creating user interfaces for image viewers", es: "Crear interfaces de usuario para visualizadores de imágenes", de: "Benutzeroberflächen für Bildbetrachter erstellen", nl: "Gebruikersinterfaces maken voor beeldkijkers" },
          { en: "Programming automatic image download features", es: "Programar características de descarga automática de imágenes", de: "Automatische Bild-Download-Features programmieren", nl: "Automatische beelddownload functies programmeren" }
        ],
        correct: 0,
        explanation: {
          en: "Feature engineering requires domain experts to manually identify and extract meaningful characteristics from images (edges, textures, shapes) that traditional algorithms can use for classification.",
          es: "La ingeniería de características requiere que expertos del dominio identifiquen y extraigan manualmente características significativas de imágenes (bordes, texturas, formas) que los algoritmos tradicionales pueden usar para clasificación.",
          de: "Feature Engineering erfordert Domänenexperten um manuell bedeutsame Eigenschaften aus Bildern zu identifizieren und zu extrahieren (Kanten, Texturen, Formen) die traditionelle Algorithmen für Klassifikation verwenden können.",
          nl: "Feature engineering vereist domeinexperts om handmatig betekenisvolle kenmerken uit afbeeldingen te identificeren en extraheren (randen, texturen, vormen) die traditionele algoritmes kunnen gebruiken voor classificatie."
        }
      },
      {
        question: {
          en: "What is the primary benefit of using pre-trained models in computer vision projects?",
          es: "¿Cuál es el beneficio principal de usar modelos pre-entrenados en proyectos de visión por computadora?",
          de: "Was ist der Hauptnutzen der Verwendung vortrainierter Modelle in Computer Vision Projekten?",
          nl: "Wat is het primaire voordeel van het gebruik van voorgetrainde modellen in computer vision projecten?"
        },
        options: [
          { en: "Leverage knowledge learned from large datasets to accelerate training", es: "Aprovechar conocimiento aprendido de grandes conjuntos de datos para acelerar el entrenamiento", de: "Wissen aus großen Datensätzen nutzen um Training zu beschleunigen", nl: "Kennis benut die geleerd is van grote datasets om training te versnellen" },
          { en: "They require no additional training at all", es: "No requieren entrenamiento adicional en absoluto", de: "Sie benötigen überhaupt kein zusätzliches Training", nl: "Ze hebben helemaal geen aanvullende training nodig" },
          { en: "They are always more accurate than custom models", es: "Siempre son más precisos que modelos personalizados", de: "Sie sind immer genauer als benutzerdefinierte Modelle", nl: "Ze zijn altijd nauwkeuriger dan aangepaste modellen" },
          { en: "They work only with specific image formats", es: "Funcionan solo con formatos de imagen específicos", de: "Sie funktionieren nur mit spezifischen Bildformaten", nl: "Ze werken alleen met specifieke beeldformaten" }
        ],
        correct: 0,
        explanation: {
          en: "Pre-trained models have already learned useful feature representations from massive datasets, allowing faster convergence and better performance especially when working with limited training data.",
          es: "Los modelos pre-entrenados ya han aprendido representaciones de características útiles de conjuntos de datos masivos, permitiendo convergencia más rápida y mejor rendimiento especialmente al trabajar con datos de entrenamiento limitados.",
          de: "Vortrainierte Modelle haben bereits nützliche Merkmalsrepräsentationen aus massiven Datensätzen gelernt, ermöglichen schnellere Konvergenz und bessere Leistung besonders beim Arbeiten mit begrenzten Trainingsdaten.",
          nl: "Voorgetrainde modellen hebben al nuttige feature representaties geleerd van massieve datasets, waardoor snellere convergentie en betere prestaties mogelijk zijn, vooral bij het werken met beperkte trainingsdata."
        }
      },
      {
        question: {
          en: "What role do epochs play in neural network training?",
          es: "¿Qué papel juegan las épocas en el entrenamiento de redes neuronales?",
          de: "Welche Rolle spielen Epochen beim Training neuronaler Netzwerke?",
          nl: "Welke rol spelen epochs bij het trainen van neurale netwerken?"
        },
        options: [
          { en: "Each epoch represents one complete pass through the entire training dataset", es: "Cada época representa un pase completo por todo el conjunto de datos de entrenamiento", de: "Jede Epoche repräsentiert einen vollständigen Durchgang durch den gesamten Trainingsdatensatz", nl: "Elke epoch vertegenwoordigt één complete doorgang door de hele trainingsdataset" },
          { en: "Epochs measure processing speed in milliseconds", es: "Las épocas miden velocidad de procesamiento en milisegundos", de: "Epochen messen Verarbeitungsgeschwindigkeit in Millisekunden", nl: "Epochs meten verwerkingssnelheid in milliseconden" },
          { en: "They represent different historical time periods", es: "Representan diferentes períodos históricos de tiempo", de: "Sie repräsentieren verschiedene historische Zeitperioden", nl: "Ze vertegenwoordigen verschillende historische tijdperioden" },
          { en: "Epochs count the number of images in the dataset", es: "Las épocas cuentan el número de imágenes en el conjunto de datos", de: "Epochen zählen die Anzahl der Bilder im Datensatz", nl: "Epochs tellen het aantal afbeeldingen in de dataset" }
        ],
        correct: 0,
        explanation: {
          en: "An epoch is completed when the model has seen and learned from every example in the training set once. Multiple epochs allow the model to refine its understanding iteratively.",
          es: "Una época se completa cuando el modelo ha visto y aprendido de cada ejemplo en el conjunto de entrenamiento una vez. Múltiples épocas permiten al modelo refinar su comprensión iterativamente.",
          de: "Eine Epoche ist abgeschlossen wenn das Modell jedes Beispiel im Trainingssatz einmal gesehen und daraus gelernt hat. Mehrere Epochen ermöglichen dem Modell sein Verständnis iterativ zu verfeinern.",
          nl: "Een epoch is voltooid wanneer het model elk voorbeeld in de trainingsset één keer heeft gezien en daarvan heeft geleerd. Meerdere epochs stellen het model in staat zijn begrip iteratief te verfijnen."
        }
      },
      {
        question: {
          en: "What is the purpose of a learning rate in neural network optimization?",
          es: "¿Cuál es el propósito de una tasa de aprendizaje en la optimización de redes neuronales?",
          de: "Was ist der Zweck einer Lernrate in der Optimierung neuronaler Netzwerke?",
          nl: "Wat is het doel van een learning rate in neurale netwerk optimalisatie?"
        },
        options: [
          { en: "Controls how much weights are adjusted during each training step", es: "Controla cuánto se ajustan los pesos durante cada paso de entrenamiento", de: "Kontrolliert wie stark Gewichte während jedem Trainingsschritt angepasst werden", nl: "Controleert hoeveel gewichten worden aangepast tijdens elke trainingsstap" },
          { en: "Determines how fast images are processed", es: "Determina qué tan rápido se procesan las imágenes", de: "Bestimmt wie schnell Bilder verarbeitet werden", nl: "Bepaalt hoe snel afbeeldingen worden verwerkt" },
          { en: "Sets the maximum number of epochs", es: "Establece el número máximo de épocas", de: "Setzt die maximale Anzahl von Epochen", nl: "Stelt het maximum aantal epochs in" },
          { en: "Measures student performance in learning", es: "Mide el rendimiento del estudiante en el aprendizaje", de: "Misst Schülerleistung beim Lernen", nl: "Meet studentenprestaties bij het leren" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate determines the step size when updating model parameters. Too high leads to unstable training, too low results in slow convergence or getting stuck in local minima.",
          es: "La tasa de aprendizaje determina el tamaño del paso al actualizar parámetros del modelo. Muy alta lleva a entrenamiento inestable, muy baja resulta en convergencia lenta o quedarse atascado en mínimos locales.",
          de: "Die Lernrate bestimmt die Schrittgröße beim Aktualisieren von Modellparametern. Zu hoch führt zu instabilem Training, zu niedrig resultiert in langsamer Konvergenz oder Steckenbleiben in lokalen Minima.",
          nl: "De learning rate bepaalt de stapgrootte bij het updaten van modelparameters. Te hoog leidt tot instabiele training, te laag resulteert in langzame convergentie of vastlopen in lokale minima."
        }
      },
      {
        question: {
          en: "What is batch size in neural network training?",
          es: "¿Qué es el tamaño de lote en el entrenamiento de redes neuronales?",
          de: "Was ist die Batch-Größe beim Training neuronaler Netzwerke?",
          nl: "Wat is batch size bij het trainen van neurale netwerken?"
        },
        options: [
          { en: "Number of training examples processed together before updating weights", es: "Número de ejemplos de entrenamiento procesados juntos antes de actualizar pesos", de: "Anzahl der Trainingsbeispiele die zusammen verarbeitet werden bevor Gewichte aktualisiert werden", nl: "Aantal trainingsvoorbeelden dat samen wordt verwerkt voordat gewichten worden geüpdatet" },
          { en: "Physical size of image files in megabytes", es: "Tamaño físico de archivos de imagen en megabytes", de: "Physische Größe von Bilddateien in Megabytes", nl: "Fysieke grootte van beeldbestanden in megabytes" },
          { en: "Number of layers in the neural network", es: "Número de capas en la red neuronal", de: "Anzahl der Schichten im neuronalen Netzwerk", nl: "Aantal lagen in het neurale netwerk" },
          { en: "Total number of images in the dataset", es: "Número total de imágenes en el conjunto de datos", de: "Gesamtzahl der Bilder im Datensatz", nl: "Totaal aantal afbeeldingen in de dataset" }
        ],
        correct: 0,
        explanation: {
          en: "Batch size affects training stability and speed. Larger batches provide more stable gradients but require more memory, while smaller batches update weights more frequently but with noisier gradients.",
          es: "El tamaño de lote afecta la estabilidad y velocidad del entrenamiento. Lotes más grandes proporcionan gradientes más estables pero requieren más memoria, mientras que lotes más pequeños actualizan pesos más frecuentemente pero con gradientes más ruidosos.",
          de: "Batch-Größe beeinflusst Trainingsstabilität und -geschwindigkeit. Größere Batches bieten stabilere Gradienten aber benötigen mehr Speicher, während kleinere Batches Gewichte häufiger aktualisieren aber mit rauschigeren Gradienten.",
          nl: "Batch size beïnvloedt trainingsstabiliteit en snelheid. Grotere batches bieden stabielere gradiënten maar vereisen meer geheugen, terwijl kleinere batches gewichten vaker updaten maar met ruisiger gradiënten."
        }
      },
      {
        question: {
          en: "What is cross-validation used for in machine learning model evaluation?",
          es: "¿Para qué se usa la validación cruzada en la evaluación de modelos de aprendizaje automático?",
          de: "Wofür wird Kreuzvalidierung in der Bewertung von maschinellen Lernmodellen verwendet?",
          nl: "Waarvoor wordt cross-validation gebruikt bij de evaluatie van machine learning modellen?"
        },
        options: [
          { en: "Assess model performance more reliably by testing on multiple data splits", es: "Evaluar el rendimiento del modelo de manera más confiable probando en múltiples divisiones de datos", de: "Modellleistung zuverlässiger bewerten durch Testen auf mehreren Datenteilungen", nl: "Modelprestaties betrouwbaarder beoordelen door te testen op meerdere datasplitsingen" },
          { en: "Validate that images are correctly formatted", es: "Validar que las imágenes estén correctamente formateadas", de: "Validieren dass Bilder korrekt formatiert sind", nl: "Valideren dat afbeeldingen correct geformatteerd zijn" },
          { en: "Cross-reference multiple datasets simultaneously", es: "Hacer referencia cruzada de múltiples conjuntos de datos simultáneamente", de: "Mehrere Datensätze gleichzeitig querverweisen", nl: "Meerdere datasets tegelijkertijd kruislings refereren" },
          { en: "Validate network connections during training", es: "Validar conexiones de red durante el entrenamiento", de: "Netzwerkverbindungen während des Trainings validieren", nl: "Netwerkverbindingen valideren tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-validation divides data into multiple folds, training and testing on different combinations to get a more robust estimate of model performance and reduce dependence on specific train-test splits.",
          es: "La validación cruzada divide los datos en múltiples pliegues, entrenando y probando en diferentes combinaciones para obtener una estimación más robusta del rendimiento del modelo y reducir la dependencia de divisiones específicas de entrenamiento-prueba.",
          de: "Kreuzvalidierung teilt Daten in mehrere Falten, trainiert und testet auf verschiedenen Kombinationen um eine robustere Schätzung der Modellleistung zu erhalten und Abhängigkeit von spezifischen Train-Test-Teilungen zu reduzieren.",
          nl: "Cross-validation verdeelt data in meerdere vouwen, traint en test op verschillende combinaties om een robuustere schatting van modelprestaties te krijgen en afhankelijkheid van specifieke train-test splitsingen te verminderen."
        }
      },
      {
        question: {
          en: "What is the main difference between unsupervised and supervised learning in computer vision?",
          es: "¿Cuál es la principal diferencia entre aprendizaje no supervisado y supervisado en visión por computadora?",
          de: "Was ist der Hauptunterschied zwischen unüberwachtem und überwachtem Lernen in Computer Vision?",
          nl: "Wat is het belangrijkste verschil tussen unsupervised en supervised learning in computer vision?"
        },
        options: [
          { en: "Supervised learning uses labeled data, unsupervised finds hidden patterns without labels", es: "Aprendizaje supervisado usa datos etiquetados, no supervisado encuentra patrones ocultos sin etiquetas", de: "Überwachtes Lernen verwendet beschriftete Daten, unüberwachtes findet versteckte Muster ohne Labels", nl: "Supervised learning gebruikt gelabelde data, unsupervised vindt verborgen patronen zonder labels" },
          { en: "Unsupervised learning is always more accurate", es: "Aprendizaje no supervisado es siempre más preciso", de: "Unüberwachtes Lernen ist immer genauer", nl: "Unsupervised learning is altijd nauwkeuriger" },
          { en: "Supervised learning requires more memory", es: "Aprendizaje supervisado requiere más memoria", de: "Überwachtes Lernen benötigt mehr Speicher", nl: "Supervised learning vereist meer geheugen" },
          { en: "They are exactly the same approach", es: "Son exactamente el mismo enfoque", de: "Sie sind genau derselbe Ansatz", nl: "Ze zijn precies dezelfde benadering" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised learning trains on input-output pairs with known correct answers, while unsupervised learning discovers structure in data without predetermined labels, such as clustering similar images or finding latent features.",
          es: "El aprendizaje supervisado entrena en pares entrada-salida con respuestas correctas conocidas, mientras que el aprendizaje no supervisado descubre estructura en datos sin etiquetas predeterminadas, como agrupar imágenes similares o encontrar características latentes.",
          de: "Überwachtes Lernen trainiert auf Eingabe-Ausgabe-Paaren mit bekannten korrekten Antworten, während unüberwachtes Lernen Struktur in Daten ohne vorbestimmte Labels entdeckt, wie das Gruppieren ähnlicher Bilder oder Finden latenter Merkmale.",
          nl: "Supervised learning traint op input-output paren met bekende correcte antwoorden, terwijl unsupervised learning structuur in data ontdekt zonder vooraf bepaalde labels, zoals het clusteren van vergelijkbare afbeeldingen of het vinden van latente kenmerken."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();