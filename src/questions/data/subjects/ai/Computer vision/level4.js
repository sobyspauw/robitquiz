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
      },
      {
        question: {
          en: "What is transfer learning in computer vision?",
          es: "¿Qué es el aprendizaje por transferencia en visión por computadora?",
          de: "Was ist Transfer Learning in Computer Vision?",
          nl: "Wat is transfer learning in computer vision?"
        },
        options: [
          { en: "Using knowledge from one task to improve performance on a different but related task", es: "Usar conocimiento de una tarea para mejorar el rendimiento en una tarea diferente pero relacionada", de: "Wissen von einer Aufgabe verwenden um Leistung bei einer anderen aber verwandten Aufgabe zu verbessern", nl: "Kennis van één taak gebruiken om prestaties bij een andere maar gerelateerde taak te verbeteren" },
          { en: "Transferring images from one computer to another", es: "Transferir imágenes de una computadora a otra", de: "Bilder von einem Computer zum anderen übertragen", nl: "Afbeeldingen van de ene computer naar de andere overdragen" },
          { en: "Converting image formats during processing", es: "Convertir formatos de imagen durante el procesamiento", de: "Bildformate während der Verarbeitung konvertieren", nl: "Beeldformaten converteren tijdens verwerking" },
          { en: "Moving data between training and testing sets", es: "Mover datos entre conjuntos de entrenamiento y prueba", de: "Daten zwischen Trainings- und Testsätzen verschieben", nl: "Data verplaatsen tussen trainings- en testsets" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning reuses features learned from large datasets (like ImageNet) as starting points for new tasks, dramatically reducing training time and data requirements while improving accuracy.",
          es: "El aprendizaje por transferencia reutiliza características aprendidas de grandes conjuntos de datos (como ImageNet) como puntos de partida para nuevas tareas, reduciendo dramáticamente el tiempo de entrenamiento y requisitos de datos mientras mejora la precisión.",
          de: "Transfer Learning verwendet Features die von großen Datensätzen (wie ImageNet) gelernt wurden als Ausgangspunkte für neue Aufgaben, reduziert dramatisch Trainingszeit und Datenanforderungen während die Genauigkeit verbessert wird.",
          nl: "Transfer learning hergebruikt kenmerken geleerd van grote datasets (zoals ImageNet) als startpunten voor nieuwe taken, waardoor trainingstijd en datavereisten dramatisch worden verminderd terwijl nauwkeurigheid verbetert."
        }
      },
      {
        question: {
          en: "What is fine-tuning in the context of neural networks?",
          es: "¿Qué es el ajuste fino en el contexto de redes neuronales?",
          de: "Was ist Fine-Tuning im Kontext neuronaler Netzwerke?",
          nl: "Wat is fine-tuning in de context van neurale netwerken?"
        },
        options: [
          { en: "Adjusting pre-trained model weights for a specific task using new data", es: "Ajustar pesos de modelo pre-entrenado para una tarea específica usando datos nuevos", de: "Anpassen vortrainierter Modellgewichte für eine spezifische Aufgabe mit neuen Daten", nl: "Aanpassen van voorgetrainde modelgewichten voor een specifieke taak met nieuwe data" },
          { en: "Making minor adjustments to image brightness", es: "Hacer ajustes menores al brillo de la imagen", de: "Kleine Anpassungen an der Bildhelligkeit vornehmen", nl: "Kleine aanpassingen aan beeldhelderheid maken" },
          { en: "Optimizing hardware performance settings", es: "Optimizar configuraciones de rendimiento de hardware", de: "Hardware-Leistungseinstellungen optimieren", nl: "Hardware prestatie-instellingen optimaliseren" },
          { en: "Changing the number of network layers", es: "Cambiar el número de capas de red", de: "Anzahl der Netzwerkschichten ändern", nl: "Aantal netwerklagen wijzigen" }
        ],
        correct: 0,
        explanation: {
          en: "Fine-tuning starts with a pre-trained model and continues training on task-specific data, typically with a lower learning rate, to adapt the learned features to new domains while preserving general knowledge.",
          es: "El ajuste fino comienza con un modelo pre-entrenado y continúa el entrenamiento en datos específicos de la tarea, típicamente con una tasa de aprendizaje más baja, para adaptar las características aprendidas a nuevos dominios mientras preserva el conocimiento general.",
          de: "Fine-Tuning beginnt mit einem vortrainierten Modell und setzt Training auf aufgabenspezifischen Daten fort, typischerweise mit niedrigerer Lernrate, um gelernte Features an neue Domänen anzupassen während allgemeines Wissen bewahrt wird.",
          nl: "Fine-tuning begint met een voorgetraind model en vervolgt training op taak-specifieke data, typisch met een lagere learning rate, om geleerde kenmerken aan te passen aan nieuwe domeinen terwijl algemene kennis behouden blijft."
        }
      },
      {
        question: {
          en: "What does 'ImageNet' represent in the computer vision community?",
          es: "¿Qué representa 'ImageNet' en la comunidad de visión por computadora?",
          de: "Was repräsentiert 'ImageNet' in der Computer Vision Community?",
          nl: "Wat vertegenwoordigt 'ImageNet' in de computer vision gemeenschap?"
        },
        options: [
          { en: "A large-scale visual database with millions of labeled images across thousands of categories", es: "Una base de datos visual a gran escala con millones de imágenes etiquetadas en miles de categorías", de: "Eine großskalige visuelle Datenbank mit Millionen beschrifteter Bilder über Tausende von Kategorien", nl: "Een grootschalige visuele database met miljoenen gelabelde afbeeldingen verspreid over duizenden categorieën" },
          { en: "A network of computers for image processing", es: "Una red de computadoras para procesamiento de imágenes", de: "Ein Netzwerk von Computern für Bildverarbeitung", nl: "Een netwerk van computers voor beeldverwerking" },
          { en: "An internet service provider for images", es: "Un proveedor de servicios de internet para imágenes", de: "Ein Internet-Service-Provider für Bilder", nl: "Een internetprovider voor afbeeldingen" },
          { en: "A software for creating neural networks", es: "Un software para crear redes neuronales", de: "Eine Software zum Erstellen neuronaler Netzwerke", nl: "Een software voor het maken van neurale netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "ImageNet contains over 14 million images organized into 20,000+ categories. The annual ImageNet Large Scale Visual Recognition Challenge (ILSVRC) has driven major advances in deep learning and computer vision.",
          es: "ImageNet contiene más de 14 millones de imágenes organizadas en más de 20,000 categorías. El desafío anual ImageNet Large Scale Visual Recognition Challenge (ILSVRC) ha impulsado grandes avances en aprendizaje profundo y visión por computadora.",
          de: "ImageNet enthält über 14 Millionen Bilder organisiert in über 20,000 Kategorien. Die jährliche ImageNet Large Scale Visual Recognition Challenge (ILSVRC) hat große Fortschritte in Deep Learning und Computer Vision vorangetrieben.",
          nl: "ImageNet bevat meer dan 14 miljoen afbeeldingen georganiseerd in meer dan 20,000 categorieën. De jaarlijkse ImageNet Large Scale Visual Recognition Challenge (ILSVRC) heeft grote vooruitgang in deep learning en computer vision gedreven."
        }
      },
      {
        question: {
          en: "What is the confusion matrix used for in computer vision classification?",
          es: "¿Para qué se usa la matriz de confusión en clasificación de visión por computadora?",
          de: "Wofür wird die Konfusionsmatrix in Computer Vision Klassifikation verwendet?",
          nl: "Waarvoor wordt de confusion matrix gebruikt in computer vision classificatie?"
        },
        options: [
          { en: "Visualizing true positives, false positives, true negatives, and false negatives", es: "Visualizar verdaderos positivos, falsos positivos, verdaderos negativos y falsos negativos", de: "Visualisierung von echten Positiven, falschen Positiven, echten Negativen und falschen Negativen", nl: "Visualiseren van ware positieven, valse positieven, ware negatieven en valse negatieven" },
          { en: "Measuring confusion levels in neural networks", es: "Medir niveles de confusión en redes neuronales", de: "Verwirrungsgrade in neuronalen Netzwerken messen", nl: "Verwarringsniveaus in neurale netwerken meten" },
          { en: "Creating confusing test questions", es: "Crear preguntas de prueba confusas", de: "Verwirrende Testfragen erstellen", nl: "Verwarrende testvragen maken" },
          { en: "Identifying unclear images in datasets", es: "Identificar imágenes poco claras en conjuntos de datos", de: "Unklare Bilder in Datensätzen identifizieren", nl: "Onduidelijke afbeeldingen in datasets identificeren" }
        ],
        correct: 0,
        explanation: {
          en: "A confusion matrix displays model predictions versus actual labels, showing where the model performs well and where it confuses different classes, helping identify specific classification errors.",
          es: "Una matriz de confusión muestra las predicciones del modelo versus las etiquetas reales, mostrando dónde el modelo funciona bien y dónde confunde diferentes clases, ayudando a identificar errores de clasificación específicos.",
          de: "Eine Konfusionsmatrix zeigt Modellvorhersagen versus tatsächliche Labels, zeigt wo das Modell gut funktioniert und wo es verschiedene Klassen verwechselt, hilft spezifische Klassifikationsfehler zu identifizieren.",
          nl: "Een confusion matrix toont modelvoorspellingen versus werkelijke labels, toont waar het model goed presteert en waar het verschillende klassen verwart, helpt specifieke classificatiefouten te identificeren."
        }
      },
      {
        question: {
          en: "What is precision in the context of image classification metrics?",
          es: "¿Qué es la precisión en el contexto de métricas de clasificación de imágenes?",
          de: "Was ist Präzision im Kontext von Bildklassifikationsmetriken?",
          nl: "Wat is precisie in de context van beeldclassificatie metrieken?"
        },
        options: [
          { en: "The proportion of correct positive predictions out of all positive predictions made", es: "La proporción de predicciones positivas correctas de todas las predicciones positivas realizadas", de: "Der Anteil korrekter positiver Vorhersagen von allen gemachten positiven Vorhersagen", nl: "De verhouding van correcte positieve voorspellingen van alle gemaakte positieve voorspellingen" },
          { en: "The overall accuracy of the model", es: "La precisión general del modelo", de: "Die Gesamtgenauigkeit des Modells", nl: "De algehele nauwkeurigheid van het model" },
          { en: "The image resolution in pixels", es: "La resolución de imagen en píxeles", de: "Die Bildauflösung in Pixeln", nl: "De beeldresolutie in pixels" },
          { en: "How precisely images are aligned", es: "Qué tan precisamente están alineadas las imágenes", de: "Wie präzise Bilder ausgerichtet sind", nl: "Hoe nauwkeurig afbeeldingen zijn uitgelijnd" }
        ],
        correct: 0,
        explanation: {
          en: "Precision = True Positives / (True Positives + False Positives). High precision means when the model predicts a class, it's usually correct, minimizing false alarms.",
          es: "Precisión = Verdaderos Positivos / (Verdaderos Positivos + Falsos Positivos). Alta precisión significa que cuando el modelo predice una clase, usualmente es correcto, minimizando falsas alarmas.",
          de: "Präzision = Echte Positive / (Echte Positive + Falsche Positive). Hohe Präzision bedeutet wenn das Modell eine Klasse vorhersagt, ist es meist korrekt, minimiert Fehlalarme.",
          nl: "Precisie = Ware Positieven / (Ware Positieven + Valse Positieven). Hoge precisie betekent dat wanneer het model een klasse voorspelt, dit meestal correct is, waardoor valse alarmen worden geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is recall (also called sensitivity) in classification metrics?",
          es: "¿Qué es el recall (también llamado sensibilidad) en métricas de clasificación?",
          de: "Was ist Recall (auch Sensitivität genannt) in Klassifikationsmetriken?",
          nl: "Wat is recall (ook wel sensitiviteit genoemd) in classificatie metrieken?"
        },
        options: [
          { en: "The proportion of actual positives that were correctly identified", es: "La proporción de positivos reales que fueron identificados correctamente", de: "Der Anteil tatsächlicher Positive die korrekt identifiziert wurden", nl: "De verhouding van werkelijke positieven die correct werden geïdentificeerd" },
          { en: "How well the model remembers training data", es: "Qué tan bien el modelo recuerda datos de entrenamiento", de: "Wie gut das Modell Trainingsdaten erinnert", nl: "Hoe goed het model trainingsdata onthoudt" },
          { en: "The ability to retrieve stored images", es: "La capacidad de recuperar imágenes almacenadas", de: "Die Fähigkeit gespeicherte Bilder abzurufen", nl: "Het vermogen om opgeslagen afbeeldingen op te halen" },
          { en: "Speed of processing recalled from cache", es: "Velocidad de procesamiento recordada desde caché", de: "Verarbeitungsgeschwindigkeit abgerufen aus Cache", nl: "Verwerkingssnelheid opgehaald uit cache" }
        ],
        correct: 0,
        explanation: {
          en: "Recall = True Positives / (True Positives + False Negatives). High recall means the model successfully finds most instances of the target class, minimizing missed detections.",
          es: "Recall = Verdaderos Positivos / (Verdaderos Positivos + Falsos Negativos). Alto recall significa que el modelo encuentra con éxito la mayoría de las instancias de la clase objetivo, minimizando detecciones perdidas.",
          de: "Recall = Echte Positive / (Echte Positive + Falsche Negative). Hoher Recall bedeutet das Modell findet erfolgreich die meisten Instanzen der Zielklasse, minimiert verpasste Erkennungen.",
          nl: "Recall = Ware Positieven / (Ware Positieven + Valse Negatieven). Hoge recall betekent dat het model met succes de meeste instanties van de doelklasse vindt, waardoor gemiste detecties worden geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is the F1 score in machine learning evaluation?",
          es: "¿Qué es el puntaje F1 en evaluación de aprendizaje automático?",
          de: "Was ist der F1-Score in maschineller Lernevaluation?",
          nl: "Wat is de F1 score in machine learning evaluatie?"
        },
        options: [
          { en: "The harmonic mean of precision and recall, balancing both metrics", es: "La media armónica de precisión y recall, equilibrando ambas métricas", de: "Das harmonische Mittel von Präzision und Recall, ausgleichend beide Metriken", nl: "Het harmonisch gemiddelde van precisie en recall, beide metrieken balancerend" },
          { en: "The first level of feature extraction", es: "El primer nivel de extracción de características", de: "Die erste Ebene der Merkmalsextraktion", nl: "Het eerste niveau van feature extraction" },
          { en: "A formula for image compression", es: "Una fórmula para compresión de imagen", de: "Eine Formel für Bildkompression", nl: "Een formule voor beeldcompressie" },
          { en: "The top racing category in machine learning", es: "La categoría de carreras superior en aprendizaje automático", de: "Die Top-Rennkategorie in maschinellem Lernen", nl: "De top racecategorie in machine learning" }
        ],
        correct: 0,
        explanation: {
          en: "F1 = 2 × (Precision × Recall) / (Precision + Recall). This metric is especially useful when you need a balance between precision and recall, particularly with imbalanced datasets.",
          es: "F1 = 2 × (Precisión × Recall) / (Precisión + Recall). Esta métrica es especialmente útil cuando necesitas un equilibrio entre precisión y recall, particularmente con conjuntos de datos desbalanceados.",
          de: "F1 = 2 × (Präzision × Recall) / (Präzision + Recall). Diese Metrik ist besonders nützlich wenn man eine Balance zwischen Präzision und Recall braucht, besonders bei unbalancierten Datensätzen.",
          nl: "F1 = 2 × (Precisie × Recall) / (Precisie + Recall). Deze metriek is vooral nuttig wanneer je een balans nodig hebt tussen precisie en recall, vooral bij ongebalanceerde datasets."
        }
      },
      {
        question: {
          en: "What is dropout in neural network training?",
          es: "¿Qué es el dropout en entrenamiento de redes neuronales?",
          de: "Was ist Dropout beim Training neuronaler Netzwerke?",
          nl: "Wat is dropout bij het trainen van neurale netwerken?"
        },
        options: [
          { en: "Randomly deactivating neurons during training to prevent overfitting", es: "Desactivar aleatoriamente neuronas durante el entrenamiento para prevenir sobreajuste", de: "Zufälliges Deaktivieren von Neuronen während des Trainings um Overfitting zu verhindern", nl: "Willekeurig neuronen deactiveren tijdens training om overfitting te voorkomen" },
          { en: "Removing corrupted images from the dataset", es: "Eliminar imágenes corruptas del conjunto de datos", de: "Beschädigte Bilder aus dem Datensatz entfernen", nl: "Beschadigde afbeeldingen uit de dataset verwijderen" },
          { en: "When students quit neural network courses", es: "Cuando los estudiantes abandonan cursos de redes neuronales", de: "Wenn Studenten neuronale Netzwerkkurse abbrechen", nl: "Wanneer studenten neurale netwerk cursussen stoppen" },
          { en: "Network disconnections during training", es: "Desconexiones de red durante el entrenamiento", de: "Netzwerkunterbrechungen während des Trainings", nl: "Netwerkonderbrekingen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout temporarily removes random neurons and their connections during each training iteration, forcing the network to learn robust features that don't depend on specific neuron combinations, reducing overfitting.",
          es: "Dropout elimina temporalmente neuronas aleatorias y sus conexiones durante cada iteración de entrenamiento, forzando a la red a aprender características robustas que no dependen de combinaciones específicas de neuronas, reduciendo el sobreajuste.",
          de: "Dropout entfernt temporär zufällige Neuronen und ihre Verbindungen während jeder Trainingsiteration, zwingt das Netzwerk robuste Features zu lernen die nicht von spezifischen Neuronenkombinationen abhängen, reduziert Overfitting.",
          nl: "Dropout verwijdert tijdelijk willekeurige neuronen en hun verbindingen tijdens elke trainingiteratie, waardoor het netwerk gedwongen wordt robuuste kenmerken te leren die niet afhankelijk zijn van specifieke neuron combinaties, wat overfitting vermindert."
        }
      },
      {
        question: {
          en: "What is a receptive field in convolutional neural networks?",
          es: "¿Qué es un campo receptivo en redes neuronales convolucionales?",
          de: "Was ist ein rezeptives Feld in Convolutional Neural Networks?",
          nl: "Wat is een receptief veld in convolutional neural networks?"
        },
        options: [
          { en: "The region of the input image that influences a particular neuron's activation", es: "La región de la imagen de entrada que influye en la activación de una neurona particular", de: "Die Region des Eingabebildes die die Aktivierung eines bestimmten Neurons beeinflusst", nl: "De regio van de invoerafbeelding die de activatie van een bepaald neuron beïnvloedt" },
          { en: "The area where images are received for processing", es: "El área donde se reciben imágenes para procesamiento", de: "Der Bereich wo Bilder für Verarbeitung empfangen werden", nl: "Het gebied waar afbeeldingen worden ontvangen voor verwerking" },
          { en: "A field in the database storing image data", es: "Un campo en la base de datos que almacena datos de imagen", de: "Ein Feld in der Datenbank das Bilddaten speichert", nl: "Een veld in de database dat beelddata opslaat" },
          { en: "The physical sensor area of a camera", es: "El área del sensor físico de una cámara", de: "Der physische Sensorbereich einer Kamera", nl: "Het fysieke sensorgebied van een camera" }
        ],
        correct: 0,
        explanation: {
          en: "As you go deeper in a CNN, each neuron's receptive field grows larger, allowing it to integrate information from increasingly larger portions of the input image, enabling hierarchical feature learning.",
          es: "A medida que avanzas más profundo en una CNN, el campo receptivo de cada neurona crece más grande, permitiéndole integrar información de porciones cada vez más grandes de la imagen de entrada, habilitando aprendizaje de características jerárquico.",
          de: "Je tiefer man in einem CNN geht, desto größer wird das rezeptive Feld jedes Neurons, ermöglicht es Informationen von zunehmend größeren Teilen des Eingabebildes zu integrieren, ermöglicht hierarchisches Merkmalslernen.",
          nl: "Naarmate je dieper in een CNN gaat, wordt het receptieve veld van elk neuron groter, waardoor het informatie kan integreren van steeds grotere delen van de invoerafbeelding, wat hiërarchisch feature learning mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in deep neural networks?",
          es: "¿Qué es el problema del gradiente desvaneciente en redes neuronales profundas?",
          de: "Was ist das Problem verschwindender Gradienten in tiefen neuronalen Netzwerken?",
          nl: "Wat is het verdwijnende gradiënt probleem in diepe neurale netwerken?"
        },
        options: [
          { en: "Gradients become extremely small in early layers, preventing effective learning", es: "Los gradientes se vuelven extremadamente pequeños en capas tempranas, previniendo aprendizaje efectivo", de: "Gradienten werden in frühen Schichten extrem klein, verhindern effektives Lernen", nl: "Gradiënten worden extreem klein in vroege lagen, wat effectief leren verhindert" },
          { en: "Gradients disappear from computer memory", es: "Los gradientes desaparecen de la memoria de la computadora", de: "Gradienten verschwinden aus dem Computerspeicher", nl: "Gradiënten verdwijnen uit het computergeheugen" },
          { en: "Visual gradients fade in processed images", es: "Los gradientes visuales se desvanecen en imágenes procesadas", de: "Visuelle Gradienten verblassen in verarbeiteten Bildern", nl: "Visuele gradiënten vervagen in verwerkte afbeeldingen" },
          { en: "Color gradients are removed during training", es: "Los gradientes de color se eliminan durante el entrenamiento", de: "Farbverläufe werden während des Trainings entfernt", nl: "Kleurgradiënten worden verwijderd tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "During backpropagation in very deep networks, gradients can shrink exponentially as they propagate backward through layers, making it nearly impossible to update weights in early layers effectively.",
          es: "Durante la retropropagación en redes muy profundas, los gradientes pueden encogerse exponencialmente mientras se propagan hacia atrás a través de las capas, haciendo casi imposible actualizar los pesos en las capas tempranas efectivamente.",
          de: "Während Backpropagation in sehr tiefen Netzwerken können Gradienten exponentiell schrumpfen während sie rückwärts durch Schichten propagieren, macht es nahezu unmöglich Gewichte in frühen Schichten effektiv zu aktualisieren.",
          nl: "Tijdens backpropagation in zeer diepe netwerken kunnen gradiënten exponentieel krimpen terwijl ze achterwaarts door lagen propageren, waardoor het bijna onmogelijk wordt om gewichten in vroege lagen effectief bij te werken."
        }
      },
      {
        question: {
          en: "What technique helps address the vanishing gradient problem?",
          es: "¿Qué técnica ayuda a abordar el problema del gradiente desvaneciente?",
          de: "Welche Technik hilft das Problem verschwindender Gradienten zu adressieren?",
          nl: "Welke techniek helpt het verdwijnende gradiënt probleem aan te pakken?"
        },
        options: [
          { en: "Residual connections (skip connections) as used in ResNet", es: "Conexiones residuales (conexiones de salto) como se usan en ResNet", de: "Residuale Verbindungen (Skip-Verbindungen) wie in ResNet verwendet", nl: "Residuele verbindingen (skip connections) zoals gebruikt in ResNet" },
          { en: "Increasing image resolution dramatically", es: "Aumentar drásticamente la resolución de imagen", de: "Bildauflösung drastisch erhöhen", nl: "Beeldresolutie drastisch verhogen" },
          { en: "Using only shallow networks", es: "Usar solo redes superficiales", de: "Nur flache Netzwerke verwenden", nl: "Alleen ondiepe netwerken gebruiken" },
          { en: "Converting all images to grayscale", es: "Convertir todas las imágenes a escala de grises", de: "Alle Bilder zu Graustufen konvertieren", nl: "Alle afbeeldingen naar grijswaarden converteren" }
        ],
        correct: 0,
        explanation: {
          en: "Residual connections allow gradients to flow directly through skip connections, bypassing some layers, which maintains stronger gradient signals throughout very deep networks and enables training of networks with hundreds of layers.",
          es: "Las conexiones residuales permiten que los gradientes fluyan directamente a través de conexiones de salto, evitando algunas capas, lo que mantiene señales de gradiente más fuertes a través de redes muy profundas y permite el entrenamiento de redes con cientos de capas.",
          de: "Residuale Verbindungen ermöglichen Gradienten direkt durch Skip-Verbindungen zu fließen, umgehen einige Schichten, was stärkere Gradientsignale durch sehr tiefe Netzwerke aufrechterhält und Training von Netzwerken mit Hunderten von Schichten ermöglicht.",
          nl: "Residuele verbindingen stellen gradiënten in staat direct door skip connections te stromen, waarbij sommige lagen worden omzeild, wat sterkere gradiëntsignalen door zeer diepe netwerken handhaaft en training van netwerken met honderden lagen mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is batch normalization used for in neural networks?",
          es: "¿Para qué se usa la normalización por lotes en redes neuronales?",
          de: "Wofür wird Batch-Normalisierung in neuronalen Netzwerken verwendet?",
          nl: "Waarvoor wordt batch normalization gebruikt in neurale netwerken?"
        },
        options: [
          { en: "Normalizing layer inputs to stabilize and accelerate training", es: "Normalizar entradas de capa para estabilizar y acelerar el entrenamiento", de: "Schichteingaben normalisieren um Training zu stabilisieren und beschleunigen", nl: "Laaginputs normaliseren om training te stabiliseren en versnellen" },
          { en: "Organizing images into batches for storage", es: "Organizar imágenes en lotes para almacenamiento", de: "Bilder in Batches für Speicherung organisieren", nl: "Afbeeldingen in batches organiseren voor opslag" },
          { en: "Normalizing batch processing schedules", es: "Normalizar horarios de procesamiento por lotes", de: "Batch-Verarbeitungszeitpläne normalisieren", nl: "Batch verwerkingsschema's normaliseren" },
          { en: "Making all images the same size", es: "Hacer todas las imágenes del mismo tamaño", de: "Alle Bilder auf dieselbe Größe bringen", nl: "Alle afbeeldingen dezelfde grootte maken" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization standardizes inputs to each layer by normalizing over mini-batches, reducing internal covariate shift, allowing higher learning rates, and acting as a regularizer to reduce overfitting.",
          es: "La normalización por lotes estandariza entradas a cada capa normalizando sobre mini-lotes, reduciendo el cambio de covariable interno, permitiendo tasas de aprendizaje más altas y actuando como regularizador para reducir el sobreajuste.",
          de: "Batch-Normalisierung standardisiert Eingaben zu jeder Schicht durch Normalisierung über Mini-Batches, reduziert interne Kovariatenwechsel, ermöglicht höhere Lernraten und wirkt als Regularisierer um Overfitting zu reduzieren.",
          nl: "Batch normalization standaardiseert inputs naar elke laag door normalisatie over mini-batches, vermindert interne covariate shift, maakt hogere learning rates mogelijk en werkt als regularizer om overfitting te verminderen."
        }
      },
      {
        question: {
          en: "What is a max pooling layer's function in CNNs?",
          es: "¿Cuál es la función de una capa de max pooling en CNNs?",
          de: "Was ist die Funktion einer Max-Pooling-Schicht in CNNs?",
          nl: "Wat is de functie van een max pooling laag in CNNs?"
        },
        options: [
          { en: "Downsample feature maps by selecting maximum values from regions", es: "Submuestrear mapas de características seleccionando valores máximos de regiones", de: "Feature Maps durch Auswahl maximaler Werte aus Regionen heruntersampeln", nl: "Feature maps downsamplen door maximale waarden uit regio's te selecteren" },
          { en: "Pool together the maximum number of images", es: "Agrupar el número máximo de imágenes", de: "Die maximale Anzahl von Bildern zusammenführen", nl: "Het maximale aantal afbeeldingen samenvoegen" },
          { en: "Find the largest swimming pool in images", es: "Encontrar la piscina más grande en imágenes", de: "Den größten Pool in Bildern finden", nl: "Het grootste zwembad in afbeeldingen vinden" },
          { en: "Maximize the depth of the network", es: "Maximizar la profundidad de la red", de: "Die Tiefe des Netzwerks maximieren", nl: "De diepte van het netwerk maximaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Max pooling reduces spatial dimensions by taking the maximum value from each local region, providing translation invariance, reducing computational cost, and helping the network focus on the most salient features.",
          es: "Max pooling reduce dimensiones espaciales tomando el valor máximo de cada región local, proporcionando invariancia de traslación, reduciendo costo computacional y ayudando a la red a enfocarse en las características más prominentes.",
          de: "Max-Pooling reduziert räumliche Dimensionen durch Nehmen des maximalen Werts aus jeder lokalen Region, bietet Translationsinvarianz, reduziert Rechenkosten und hilft dem Netzwerk sich auf die hervorstechendsten Merkmale zu konzentrieren.",
          nl: "Max pooling vermindert ruimtelijke dimensies door de maximale waarde uit elke lokale regio te nemen, biedt translatie-invariantie, vermindert computationele kosten en helpt het netwerk zich te concentreren op de meest opvallende kenmerken."
        }
      },
      {
        question: {
          en: "What is the purpose of padding in convolutional layers?",
          es: "¿Cuál es el propósito del padding en capas convolucionales?",
          de: "Was ist der Zweck von Padding in Faltungsschichten?",
          nl: "Wat is het doel van padding in convolutionele lagen?"
        },
        options: [
          { en: "Preserve spatial dimensions and process edge pixels effectively", es: "Preservar dimensiones espaciales y procesar píxeles de borde efectivamente", de: "Räumliche Dimensionen bewahren und Randpixel effektiv verarbeiten", nl: "Ruimtelijke dimensies behouden en randpixels effectief verwerken" },
          { en: "Add extra storage space for images", es: "Agregar espacio de almacenamiento extra para imágenes", de: "Zusätzlichen Speicherplatz für Bilder hinzufügen", nl: "Extra opslagruimte toevoegen voor afbeeldingen" },
          { en: "Create physical padding around monitors", es: "Crear relleno físico alrededor de monitores", de: "Physische Polsterung um Monitore erstellen", nl: "Fysieke opvulling rond monitoren creëren" },
          { en: "Fill empty database fields", es: "Llenar campos de base de datos vacíos", de: "Leere Datenbankfelder füllen", nl: "Lege databasevelden vullen" }
        ],
        correct: 0,
        explanation: {
          en: "Padding adds border pixels (usually zeros) around the input, allowing convolutions to maintain output size equal to input size and ensuring edge information isn't lost during processing.",
          es: "El padding agrega píxeles de borde (usualmente ceros) alrededor de la entrada, permitiendo que las convoluciones mantengan el tamaño de salida igual al tamaño de entrada y asegurando que la información de borde no se pierda durante el procesamiento.",
          de: "Padding fügt Randpixel (normalerweise Nullen) um die Eingabe herum hinzu, ermöglicht Faltungen Ausgabegröße gleich Eingabegröße beizubehalten und stellt sicher dass Randinformationen während der Verarbeitung nicht verloren gehen.",
          nl: "Padding voegt randpixels (meestal nullen) toe rond de invoer, waardoor convoluties de outputgrootte gelijk aan de inputgrootte kunnen behouden en ervoor zorgen dat randinformatie niet verloren gaat tijdens verwerking."
        }
      },
      {
        question: {
          en: "What is stride in convolutional operations?",
          es: "¿Qué es el stride en operaciones convolucionales?",
          de: "Was ist Stride in Faltungsoperationen?",
          nl: "Wat is stride in convolutionele operaties?"
        },
        options: [
          { en: "The step size by which the filter moves across the input image", es: "El tamaño del paso por el cual el filtro se mueve a través de la imagen de entrada", de: "Die Schrittgröße mit der der Filter sich über das Eingabebild bewegt", nl: "De stapgrootte waarmee het filter over de invoerafbeelding beweegt" },
          { en: "The walking pattern of robots in computer vision", es: "El patrón de caminata de robots en visión por computadora", de: "Das Gehmuster von Robotern in Computer Vision", nl: "Het looppatroon van robots in computer vision" },
          { en: "The length of training iterations", es: "La longitud de iteraciones de entrenamiento", de: "Die Länge von Trainingsiterationen", nl: "De lengte van trainingsiteraties" },
          { en: "Speed of image processing", es: "Velocidad de procesamiento de imagen", de: "Geschwindigkeit der Bildverarbeitung", nl: "Snelheid van beeldverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Stride determines how many pixels the convolutional filter shifts at each step. Stride of 1 produces dense feature maps, while larger strides reduce spatial dimensions more aggressively, similar to pooling.",
          es: "El stride determina cuántos píxeles el filtro convolucional se desplaza en cada paso. Un stride de 1 produce mapas de características densos, mientras que strides más grandes reducen dimensiones espaciales más agresivamente, similar al pooling.",
          de: "Stride bestimmt wie viele Pixel der Faltungsfilter bei jedem Schritt verschiebt. Stride von 1 produziert dichte Feature Maps, während größere Strides räumliche Dimensionen aggressiver reduzieren, ähnlich wie Pooling.",
          nl: "Stride bepaalt hoeveel pixels het convolutionele filter bij elke stap verschuift. Een stride van 1 produceert dichte feature maps, terwijl grotere strides ruimtelijke dimensies agressiever verminderen, vergelijkbaar met pooling."
        }
      },
      {
        question: {
          en: "What is the purpose of using multiple filters in a convolutional layer?",
          es: "¿Cuál es el propósito de usar múltiples filtros en una capa convolucional?",
          de: "Was ist der Zweck der Verwendung mehrerer Filter in einer Faltungsschicht?",
          nl: "Wat is het doel van het gebruik van meerdere filters in een convolutionele laag?"
        },
        options: [
          { en: "Detect different types of features like edges, textures, and patterns simultaneously", es: "Detectar diferentes tipos de características como bordes, texturas y patrones simultáneamente", de: "Verschiedene Arten von Merkmalen wie Kanten, Texturen und Muster gleichzeitig erkennen", nl: "Verschillende soorten kenmerken zoals randen, texturen en patronen tegelijkertijd detecteren" },
          { en: "Filter out noise multiple times for cleaner images", es: "Filtrar ruido múltiples veces para imágenes más limpias", de: "Rauschen mehrfach filtern für sauberere Bilder", nl: "Ruis meerdere keren filteren voor schonere afbeeldingen" },
          { en: "Process images in different color spaces", es: "Procesar imágenes en diferentes espacios de color", de: "Bilder in verschiedenen Farbräumen verarbeiten", nl: "Afbeeldingen in verschillende kleurruimtes verwerken" },
          { en: "Backup the processing in case one filter fails", es: "Respaldar el procesamiento en caso de que falle un filtro", de: "Verarbeitung sichern falls ein Filter ausfällt", nl: "De verwerking back-uppen voor het geval één filter faalt" }
        ],
        correct: 0,
        explanation: {
          en: "Each filter learns to detect specific visual features. Using multiple filters allows the network to extract diverse features from the same input, creating a rich representation with many feature maps (channels).",
          es: "Cada filtro aprende a detectar características visuales específicas. Usar múltiples filtros permite a la red extraer características diversas de la misma entrada, creando una representación rica con muchos mapas de características (canales).",
          de: "Jeder Filter lernt spezifische visuelle Merkmale zu erkennen. Verwendung mehrerer Filter ermöglicht dem Netzwerk diverse Features aus derselben Eingabe zu extrahieren, erstellt eine reiche Repräsentation mit vielen Feature Maps (Kanälen).",
          nl: "Elk filter leert specifieke visuele kenmerken te detecteren. Het gebruik van meerdere filters stelt het netwerk in staat diverse kenmerken uit dezelfde invoer te extraheren, waardoor een rijke representatie met veel feature maps (kanalen) ontstaat."
        }
      },
      {
        question: {
          en: "What is model ensembling in machine learning?",
          es: "¿Qué es el ensamblado de modelos en aprendizaje automático?",
          de: "Was ist Modell-Ensembling in maschinellem Lernen?",
          nl: "Wat is model ensembling in machine learning?"
        },
        options: [
          { en: "Combining predictions from multiple models to improve overall performance", es: "Combinar predicciones de múltiples modelos para mejorar el rendimiento general", de: "Vorhersagen von mehreren Modellen kombinieren um Gesamtleistung zu verbessern", nl: "Voorspellingen van meerdere modellen combineren om algehele prestaties te verbeteren" },
          { en: "Assembling computer hardware for training", es: "Ensamblar hardware de computadora para entrenamiento", de: "Computer-Hardware für Training zusammenbauen", nl: "Computerhardware assembleren voor training" },
          { en: "Creating ensemble casts in image recognition", es: "Crear elencos de conjunto en reconocimiento de imágenes", de: "Ensemble-Besetzungen in Bilderkennung erstellen", nl: "Ensemble casts creëren in beeldherkenning" },
          { en: "Grouping similar images together", es: "Agrupar imágenes similares juntas", de: "Ähnliche Bilder zusammengruppieren", nl: "Vergelijkbare afbeeldingen samen groeperen" }
        ],
        correct: 0,
        explanation: {
          en: "Ensembles aggregate predictions from multiple independent models (often trained with different architectures or data subsets), reducing individual model errors and variance to achieve more robust and accurate predictions.",
          es: "Los ensambles agregan predicciones de múltiples modelos independientes (a menudo entrenados con diferentes arquitecturas o subconjuntos de datos), reduciendo errores y varianza de modelos individuales para lograr predicciones más robustas y precisas.",
          de: "Ensembles aggregieren Vorhersagen von mehreren unabhängigen Modellen (oft trainiert mit verschiedenen Architekturen oder Datenuntergruppen), reduzieren individuelle Modellfehler und Varianz um robustere und genauere Vorhersagen zu erreichen.",
          nl: "Ensembles aggregeren voorspellingen van meerdere onafhankelijke modellen (vaak getraind met verschillende architecturen of data subsets), verminderen individuele modelfouten en variantie om robuustere en nauwkeurigere voorspellingen te bereiken."
        }
      },
      {
        question: {
          en: "What is early stopping in neural network training?",
          es: "¿Qué es la detención temprana en entrenamiento de redes neuronales?",
          de: "Was ist Early Stopping beim Training neuronaler Netzwerke?",
          nl: "Wat is early stopping bij het trainen van neurale netwerken?"
        },
        options: [
          { en: "Halting training when validation performance stops improving to prevent overfitting", es: "Detener el entrenamiento cuando el rendimiento de validación deja de mejorar para prevenir sobreajuste", de: "Training stoppen wenn Validierungsleistung aufhört sich zu verbessern um Overfitting zu verhindern", nl: "Training stoppen wanneer validatieprestaties niet meer verbeteren om overfitting te voorkomen" },
          { en: "Stopping training very early in the process", es: "Detener el entrenamiento muy temprano en el proceso", de: "Training sehr früh im Prozess stoppen", nl: "Training zeer vroeg in het proces stoppen" },
          { en: "Training only in the morning hours", es: "Entrenar solo en horas de la mañana", de: "Nur in den Morgenstunden trainieren", nl: "Alleen in de ochtenduren trainen" },
          { en: "Stopping when the computer overheats", es: "Detener cuando la computadora se sobrecalienta", de: "Stoppen wenn der Computer überhitzt", nl: "Stoppen wanneer de computer oververhit raakt" }
        ],
        correct: 0,
        explanation: {
          en: "Early stopping monitors validation metrics during training and stops when performance plateaus or deteriorates, saving the best model weights and preventing the model from memorizing training data.",
          es: "La detención temprana monitorea métricas de validación durante el entrenamiento y se detiene cuando el rendimiento se estanca o deteriora, guardando los mejores pesos del modelo y previniendo que el modelo memorice datos de entrenamiento.",
          de: "Early Stopping überwacht Validierungsmetriken während des Trainings und stoppt wenn Leistung stagniert oder sich verschlechtert, speichert die besten Modellgewichte und verhindert dass das Modell Trainingsdaten auswendig lernt.",
          nl: "Early stopping monitort validatiemetrieken tijdens training en stopt wanneer prestaties stagneren of verslechteren, bewaart de beste modelgewichten en voorkomt dat het model trainingsdata uit het hoofd leert."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in deep neural networks?",
          es: "¿Cuál es el problema del gradiente que se desvanece en redes neuronales profundas?",
          de: "Was ist das Problem verschwindender Gradienten in tiefen neuronalen Netzwerken?",
          nl: "Wat is het verdwijnende gradiënt probleem in diepe neurale netwerken?"
        },
        options: [
          { en: "Gradients become very small in earlier layers making learning slow or impossible", es: "Gradientes se vuelven muy pequeños en capas anteriores haciendo el aprendizaje lento o imposible", de: "Gradienten werden in früheren Schichten sehr klein und machen Lernen langsam oder unmöglich", nl: "Gradiënten worden zeer klein in eerdere lagen waardoor leren traag of onmogelijk wordt" },
          { en: "Gradients disappear from computer memory", es: "Gradientes desaparecen de la memoria de la computadora", de: "Gradienten verschwinden aus dem Computerspeicher", nl: "Gradiënten verdwijnen uit het computergeheugen" },
          { en: "The gradient descent algorithm stops working", es: "El algoritmo de descenso de gradiente deja de funcionar", de: "Der Gradientenabstiegsalgorithmus hört auf zu funktionieren", nl: "Het gradiënt-descent algoritme stopt met werken" },
          { en: "Visual gradients fade in images", es: "Gradientes visuales se desvanecen en imágenes", de: "Visuelle Gradienten verblassen in Bildern", nl: "Visuele gradiënten vervagen in afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "During backpropagation in deep networks, gradients can shrink exponentially as they propagate backward through layers, especially with sigmoid/tanh activations. This makes early layers learn very slowly. Solutions include ReLU activation, batch normalization, and residual connections.",
          es: "Durante la retropropagación en redes profundas, los gradientes pueden reducirse exponencialmente mientras se propagan hacia atrás a través de las capas, especialmente con activaciones sigmoid/tanh. Esto hace que las capas tempranas aprendan muy lentamente. Las soluciones incluyen activación ReLU, normalización por lotes y conexiones residuales.",
          de: "Während Backpropagation in tiefen Netzwerken können Gradienten exponentiell schrumpfen während sie rückwärts durch Schichten propagieren, besonders mit Sigmoid/Tanh-Aktivierungen. Dies macht frühe Schichten sehr langsam lernend. Lösungen umfassen ReLU-Aktivierung, Batch-Normalisierung und residuale Verbindungen.",
          nl: "Tijdens backpropagation in diepe netwerken kunnen gradiënten exponentieel krimpen terwijl ze achterwaarts door lagen propageren, vooral met sigmoid/tanh activaties. Dit maakt vroege lagen zeer traag leren. Oplossingen omvatten ReLU-activatie, batch-normalisatie en residuele verbindingen."
        }
      },
      {
        question: {
          en: "What is the receptive field of a neuron in a CNN?",
          es: "¿Cuál es el campo receptivo de una neurona en una CNN?",
          de: "Was ist das rezeptive Feld eines Neurons in einem CNN?",
          nl: "Wat is het receptieve veld van een neuron in een CNN?"
        },
        options: [
          { en: "The region in the input image that affects that neuron's activation", es: "La región en la imagen de entrada que afecta la activación de esa neurona", de: "Die Region im Eingabebild die die Aktivierung dieses Neurons beeinflusst", nl: "De regio in de invoerafbeelding die de activatie van dat neuron beïnvloedt" },
          { en: "The area where the neuron receives signals", es: "El área donde la neurona recibe señales", de: "Der Bereich wo das Neuron Signale empfängt", nl: "Het gebied waar het neuron signalen ontvangt" },
          { en: "The physical space occupied by the neuron", es: "El espacio físico ocupado por la neurona", de: "Der physische Raum den das Neuron einnimmt", nl: "De fysieke ruimte die het neuron inneemt" },
          { en: "The set of neurons that receive its output", es: "El conjunto de neuronas que reciben su salida", de: "Die Menge von Neuronen die seine Ausgabe empfangen", nl: "De set neuronen die zijn output ontvangen" }
        ],
        correct: 0,
        explanation: {
          en: "The receptive field grows larger in deeper layers: neurons in later layers can 'see' larger portions of the input image through the accumulated effect of convolutions and pooling from earlier layers. This hierarchical feature detection is fundamental to CNNs.",
          es: "El campo receptivo crece más grande en capas más profundas: las neuronas en capas posteriores pueden 'ver' porciones más grandes de la imagen de entrada a través del efecto acumulado de convoluciones y pooling de capas anteriores. Esta detección de características jerárquica es fundamental para las CNNs.",
          de: "Das rezeptive Feld wird in tieferen Schichten größer: Neuronen in späteren Schichten können größere Teile des Eingabebildes 'sehen' durch den akkumulierten Effekt von Faltungen und Pooling von früheren Schichten. Diese hierarchische Merkmalserkennung ist grundlegend für CNNs.",
          nl: "Het receptieve veld wordt groter in diepere lagen: neuronen in latere lagen kunnen grotere delen van de invoerafbeelding 'zien' door het geaccumuleerde effect van convoluties en pooling van eerdere lagen. Deze hiërarchische feature detectie is fundamenteel voor CNN's."
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