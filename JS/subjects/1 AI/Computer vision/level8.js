// Computer Vision Quiz - Level 8: Generative Models and 3D Computer Vision
(function() {
  const level8 = {
    name: {
      en: "Computer Vision Level 8",
      es: "Visión por Computadora Nivel 8",
      de: "Computer Vision Stufe 8",
      nl: "Computer Vision Level 8"
    },
    questions: [
      {
        question: {
          en: "What are Generative Adversarial Networks (GANs) primarily used for in computer vision?",
          es: "¿Para qué se usan principalmente las Redes Adversarias Generativas (GANs) en visión por computadora?",
          de: "Wofür werden Generative Adversarial Networks (GANs) hauptsächlich in Computer Vision verwendet?",
          nl: "Waarvoor worden Generative Adversarial Networks (GANs) hoofdzakelijk gebruikt in computer vision?"
        },
        options: [
          { en: "Generating realistic synthetic images and improving existing images", es: "Generar imágenes sintéticas realistas y mejorar imágenes existentes", de: "Realistische synthetische Bilder generieren und bestehende Bilder verbessern", nl: "Realistische synthetische afbeeldingen genereren en bestaande afbeeldingen verbeteren" },
          { en: "Only for adversarial attacks on networks", es: "Solo para ataques adversarios en redes", de: "Nur für adversarielle Angriffe auf Netzwerke", nl: "Alleen voor adversariële aanvallen op netwerken" },
          { en: "General purpose image classification", es: "Clasificación de imágenes de propósito general", de: "Allgemeine Bildklassifizierung", nl: "Algemene beeldclassificatie" },
          { en: "Analyzing network performance", es: "Analizar rendimiento de red", de: "Netzwerk-Performance analysieren", nl: "Netwerkprestaties analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "GANs consist of a generator and discriminator competing against each other, enabling creation of high-quality synthetic images, image-to-image translation, and data augmentation.",
          es: "Las GANs consisten en un generador y discriminador compitiendo uno contra otro, permitiendo creación de imágenes sintéticas de alta calidad, traducción imagen-a-imagen y aumento de datos.",
          de: "GANs bestehen aus einem Generator und Diskriminator die gegeneinander konkurrieren, ermöglichen Erstellung hochwertiger synthetischer Bilder, Bild-zu-Bild-Übersetzung und Datenaugmentation.",
          nl: "GANs bestaan uit een generator en discriminator die tegen elkaar concurreren, waardoor creatie van hoogwaardige synthetische afbeeldingen, beeld-naar-beeld vertaling en data augmentatie mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the fundamental challenge in 3D computer vision compared to 2D?",
          es: "¿Cuál es el desafío fundamental en visión por computadora 3D comparada con 2D?",
          de: "Was ist die grundlegende Herausforderung in 3D Computer Vision verglichen mit 2D?",
          nl: "Wat is de fundamentele uitdaging in 3D computer vision vergeleken met 2D?"
        },
        options: [
          { en: "Recovering depth information and spatial relationships from 2D projections", es: "Recuperar información de profundidad y relaciones espaciales de proyecciones 2D", de: "Tiefeninformationen und räumliche Beziehungen aus 2D-Projektionen wiederherstellen", nl: "Diepte-informatie en ruimtelijke relaties herstellen uit 2D projecties" },
          { en: "3D images are always larger file sizes", es: "Las imágenes 3D siempre tienen tamaños de archivo más grandes", de: "3D-Bilder haben immer größere Dateigrößen", nl: "3D afbeeldingen hebben altijd grotere bestandsgroottes" },
          { en: "3D requires special viewing equipment", es: "3D requiere equipo de visualización especial", de: "3D erfordert spezielle Anzeigeausrüstung", nl: "3D vereist speciale kijkapparatuur" },
          { en: "Processing 3D graphics cards only", es: "Procesar solo tarjetas gráficas 3D", de: "Nur 3D-Grafikkarten verarbeiten", nl: "Alleen 3D grafische kaarten verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "3D computer vision must infer three-dimensional structure from 2D images, dealing with occlusions, perspective distortions, and the loss of depth information inherent in camera projections.",
          es: "La visión por computadora 3D debe inferir estructura tridimensional de imágenes 2D, lidiando con oclusiones, distorsiones perspectivas y pérdida de información de profundidad inherente en proyecciones de cámara.",
          de: "3D Computer Vision muss dreidimensionale Struktur aus 2D-Bildern ableiten, mit Verdeckungen, Perspektivverzerrungen und Verlust von Tiefeninformationen umgehen die Kameraprojektionen innewohnen.",
          nl: "3D computer vision moet driedimensionale structuur afleiden uit 2D afbeeldingen, omgaan met occlusies, perspectief verstoringen en verlies van diepte-informatie inherent aan camera projecties."
        }
      },
      {
        question: {
          en: "What is instance segmentation in computer vision?",
          es: "¿Qué es la segmentación de instancia en visión por computadora?",
          de: "Was ist Instanzsegmentierung in Computer Vision?",
          nl: "Wat is instance segmentatie in computer vision?"
        },
        options: [
          { en: "Distinguishing individual objects of the same class with pixel-level precision", es: "Distinguir objetos individuales de la misma clase con precisión a nivel de píxel", de: "Individuelle Objekte derselben Klasse mit Pixel-Präzision unterscheiden", nl: "Individuele objecten van dezelfde klasse onderscheiden met pixel-niveau precisie" },
          { en: "Creating instances of segmentation algorithms", es: "Crear instancias de algoritmos de segmentación", de: "Instanzen von Segmentierungsalgorithmen erstellen", nl: "Instanties van segmentatie-algoritmes maken" },
          { en: "Segmenting images into fixed instances", es: "Segmentar imágenes en instancias fijas", de: "Bilder in feste Instanzen segmentieren", nl: "Afbeeldingen segmenteren in vaste instanties" },
          { en: "Random segmentation examples", es: "Ejemplos de segmentación aleatoria", de: "Zufällige Segmentierungsbeispiele", nl: "Willekeurige segmentatie voorbeelden" }
        ],
        correct: 0,
        explanation: {
          en: "Instance segmentation combines object detection and semantic segmentation, providing pixel-level masks for each individual object instance, even when multiple objects of the same class overlap.",
          es: "La segmentación de instancia combina detección de objetos y segmentación semántica, proporcionando máscaras a nivel de píxel para cada instancia de objeto individual, incluso cuando múltiples objetos de la misma clase se superponen.",
          de: "Instanzsegmentierung kombiniert Objekterkennung und semantische Segmentierung, bietet Pixel-Level-Masken für jede individuelle Objektinstanz, auch wenn mehrere Objekte derselben Klasse überlappen.",
          nl: "Instance segmentatie combineert objectdetectie en semantische segmentatie, biedt pixel-niveau maskers voor elke individuele object instantie, zelfs wanneer meerdere objecten van dezelfde klasse overlappen."
        }
      },
      {
        question: {
          en: "What is neural style transfer achieving in computer vision?",
          es: "¿Qué está logrando la transferencia de estilo neuronal en visión por computadora?",
          de: "Was erreicht neuronaler Stiltransfer in Computer Vision?",
          nl: "Wat bereikt neural style transfer in computer vision?"
        },
        options: [
          { en: "Applying artistic styles from one image to the content of another while preserving structure", es: "Aplicar estilos artísticos de una imagen al contenido de otra mientras preserva la estructura", de: "Künstlerische Stile von einem Bild auf den Inhalt eines anderen anwenden während Struktur bewahrt wird", nl: "Artistieke stijlen van één afbeelding toepassen op de inhoud van een andere terwijl structuur behouden blijft" },
          { en: "Transferring neural networks between computers", es: "Transferir redes neuronales entre computadoras", de: "Neuronale Netzwerke zwischen Computern übertragen", nl: "Neurale netwerken overbrengen tussen computers" },
          { en: "Moving styles between different neural architectures", es: "Mover estilos entre diferentes arquitecturas neuronales", de: "Stile zwischen verschiedenen neuronalen Architekturen bewegen", nl: "Stijlen verplaatsen tussen verschillende neurale architecturen" },
          { en: "Transferring learning styles to students", es: "Transferir estilos de aprendizaje a estudiantes", de: "Lernstile an Studenten übertragen", nl: "Leerstijlen overdragen aan studenten" }
        ],
        correct: 0,
        explanation: {
          en: "Neural style transfer uses deep CNNs to separate and recombine content and style representations, creating artistic renditions by applying the texture and color patterns of style images to content images.",
          es: "La transferencia de estilo neuronal usa CNN profundas para separar y recombinar representaciones de contenido y estilo, creando representaciones artísticas aplicando patrones de textura y color de imágenes de estilo a imágenes de contenido.",
          de: "Neuronaler Stiltransfer verwendet tiefe CNNs um Inhalts- und Stilrepräsentationen zu trennen und zu rekombinieren, erstellt künstlerische Darstellungen durch Anwendung von Textur- und Farbmustern von Stilbildern auf Inhaltsbilder.",
          nl: "Neural style transfer gebruikt diepe CNNs om inhoud- en stijlrepresentaties te scheiden en te recombineren, creëert artistieke weergaven door textuur- en kleurpatronen van stijlbeelden toe te passen op inhoudsbeelden."
        }
      },
      {
        question: {
          en: "What is the key advantage of using point clouds in 3D computer vision?",
          es: "¿Cuál es la ventaja clave de usar nubes de puntos en visión por computadora 3D?",
          de: "Was ist der Hauptvorteil der Verwendung von Punktwolken in 3D Computer Vision?",
          nl: "Wat is het belangrijkste voordeel van het gebruik van puntwolken in 3D computer vision?"
        },
        options: [
          { en: "Direct representation of 3D spatial coordinates without grid discretization", es: "Representación directa de coordenadas espaciales 3D sin discretización de rejilla", de: "Direkte Darstellung von 3D-Raumkoordinaten ohne Gitterdiskretisierung", nl: "Directe representatie van 3D ruimtelijke coördinaten zonder raster discretisatie" },
          { en: "Points are easier to see than other shapes", es: "Los puntos son más fáciles de ver que otras formas", de: "Punkte sind einfacher zu sehen als andere Formen", nl: "Punten zijn gemakkelijker te zien dan andere vormen" },
          { en: "Point clouds use less memory than images", es: "Las nubes de puntos usan menos memoria que las imágenes", de: "Punktwolken verwenden weniger Speicher als Bilder", nl: "Puntwolken gebruiken minder geheugen dan afbeeldingen" },
          { en: "They only work with cloud computing", es: "Solo funcionan con computación en la nube", de: "Sie funktionieren nur mit Cloud Computing", nl: "Ze werken alleen met cloud computing" }
        ],
        correct: 0,
        explanation: {
          en: "Point clouds provide unstructured 3D data that preserves precise spatial relationships without forcing data into regular grids, making them ideal for processing LiDAR scans and 3D object recognition.",
          es: "Las nubes de puntos proporcionan datos 3D no estructurados que preservan relaciones espaciales precisas sin forzar datos en rejillas regulares, haciéndolas ideales para procesar escaneos LiDAR y reconocimiento de objetos 3D.",
          de: "Punktwolken bieten unstrukturierte 3D-Daten die präzise räumliche Beziehungen bewahren ohne Daten in regelmäßige Gitter zu zwingen, macht sie ideal für LiDAR-Scan-Verarbeitung und 3D-Objekterkennung.",
          nl: "Puntwolken bieden ongestructureerde 3D data die precieze ruimtelijke relaties behoudt zonder data te dwingen in reguliere rasters, waardoor ze ideaal zijn voor LiDAR-scan verwerking en 3D objectherkenning."
        }
      },
      {
        question: {
          en: "What is transfer learning's main advantage in computer vision applications?",
          es: "¿Cuál es la principal ventaja del aprendizaje de transferencia en aplicaciones de visión por computadora?",
          de: "Was ist der Hauptvorteil von Transfer Learning in Computer Vision Anwendungen?",
          nl: "Wat is het hoofdvoordeel van transfer learning bij computer vision toepassingen?"
        },
        options: [
          { en: "Leveraging pre-trained features to achieve good performance with limited training data", es: "Aprovechar características pre-entrenadas para lograr buen rendimiento con datos de entrenamiento limitados", de: "Vortrainierte Features nutzen um gute Leistung mit begrenzten Trainingsdaten zu erreichen", nl: "Voorgetrainde features gebruiken om goede prestaties te bereiken met beperkte trainingsdata" },
          { en: "Transferring images between different formats", es: "Transferir imágenes entre diferentes formatos", de: "Bilder zwischen verschiedenen Formaten übertragen", nl: "Afbeeldingen overbrengen tussen verschillende formaten" },
          { en: "Moving models between different computers", es: "Mover modelos entre diferentes computadoras", de: "Modelle zwischen verschiedenen Computern bewegen", nl: "Modellen verplaatsen tussen verschillende computers" },
          { en: "Learning only from labeled data", es: "Aprender solo de datos etiquetados", de: "Nur aus beschrifteten Daten lernen", nl: "Alleen leren van gelabelde data" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning allows models trained on large datasets like ImageNet to be fine-tuned for specific tasks, reducing training time and data requirements while achieving high performance.",
          es: "El aprendizaje de transferencia permite que modelos entrenados en grandes conjuntos de datos como ImageNet sean ajustados para tareas específicas, reduciendo tiempo de entrenamiento y requisitos de datos mientras logra alto rendimiento.",
          de: "Transfer Learning ermöglicht es Modellen die auf großen Datensätzen wie ImageNet trainiert wurden für spezifische Aufgaben feinabgestimmt zu werden, reduziert Trainingszeit und Datenanforderungen bei hoher Leistung.",
          nl: "Transfer learning stelt modellen getraind op grote datasets zoals ImageNet in staat te worden afgestemd voor specifieke taken, vermindert trainingstijd en datavereisten terwijl hoge prestaties worden bereikt."
        }
      },
      {
        question: {
          en: "What is the purpose of batch normalization in CNNs?",
          es: "¿Cuál es el propósito de la normalización por lotes en CNNs?",
          de: "Was ist der Zweck von Batch Normalization in CNNs?",
          nl: "Wat is het doel van batch normalisatie in CNNs?"
        },
        options: [
          { en: "Normalizing layer inputs to accelerate training and improve stability", es: "Normalizar entradas de capa para acelerar entrenamiento y mejorar estabilidad", de: "Schichteingaben normalisieren um Training zu beschleunigen und Stabilität zu verbessern", nl: "Laaginputs normaliseren om training te versnellen en stabiliteit te verbeteren" },
          { en: "Processing images in batches only", es: "Procesar imágenes solo en lotes", de: "Bilder nur in Stapeln verarbeiten", nl: "Afbeeldingen alleen in batches verwerken" },
          { en: "Normalizing image brightness", es: "Normalizar brillo de imagen", de: "Bildhelligkeit normalisieren", nl: "Beeldhelderheid normaliseren" },
          { en: "Grouping similar images together", es: "Agrupar imágenes similares juntas", de: "Ähnliche Bilder zusammengruppieren", nl: "Vergelijkbare afbeeldingen groeperen" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes the inputs to each layer by subtracting the batch mean and dividing by batch standard deviation, reducing internal covariate shift and enabling higher learning rates.",
          es: "La normalización por lotes normaliza las entradas a cada capa restando la media del lote y dividiendo por la desviación estándar del lote, reduciendo el cambio de covariables internas y permitiendo tasas de aprendizaje más altas.",
          de: "Batch Normalization normalisiert die Eingaben zu jeder Schicht durch Subtrahieren des Batch-Mittelwerts und Teilen durch Batch-Standardabweichung, reduziert interne Kovariatenverschiebung und ermöglicht höhere Lernraten.",
          nl: "Batch normalisatie normaliseert de inputs naar elke laag door het batch gemiddelde af te trekken en te delen door batch standaarddeviatie, vermindert interne covariate shift en maakt hogere leersnelheden mogelijk."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in deep neural networks?",
          es: "¿Qué es el problema del gradiente que desaparece en redes neuronales profundas?",
          de: "Was ist das Vanishing Gradient Problem in tiefen neuronalen Netzwerken?",
          nl: "Wat is het vanishing gradient probleem in diepe neurale netwerken?"
        },
        options: [
          { en: "Gradients become exponentially smaller in earlier layers, hindering learning", es: "Los gradientes se vuelven exponencialmente más pequeños en capas anteriores, obstaculizando el aprendizaje", de: "Gradienten werden in früheren Schichten exponentiell kleiner, behindern das Lernen", nl: "Gradiënten worden exponentieel kleiner in eerdere lagen, belemmeren het leren" },
          { en: "Gradients disappear from computer memory", es: "Los gradientes desaparecen de la memoria de la computadora", de: "Gradienten verschwinden aus dem Computerspeicher", nl: "Gradiënten verdwijnen uit computergeheugen" },
          { en: "Network weights become invisible", es: "Los pesos de la red se vuelven invisibles", de: "Netzwerkgewichte werden unsichtbar", nl: "Netwerkgewichten worden onzichtbaar" },
          { en: "Training data gradually reduces", es: "Los datos de entrenamiento se reducen gradualmente", de: "Trainingsdaten reduzieren sich allmählich", nl: "Trainingsdata neemt geleidelijk af" }
        ],
        correct: 0,
        explanation: {
          en: "During backpropagation in deep networks, gradients are multiplied by weights repeatedly, causing them to shrink exponentially as they reach earlier layers, making those layers learn very slowly.",
          es: "Durante la retropropagación en redes profundas, los gradientes se multiplican por pesos repetidamente, causando que se reduzcan exponencialmente al llegar a capas anteriores, haciendo que esas capas aprendan muy lentamente.",
          de: "Während Backpropagation in tiefen Netzwerken werden Gradienten wiederholt mit Gewichten multipliziert, was dazu führt dass sie exponentiell schrumpfen wenn sie frühere Schichten erreichen, macht diese Schichten sehr langsam lernend.",
          nl: "Tijdens backpropagatie in diepe netwerken worden gradiënten herhaaldelijk vermenigvuldigd met gewichten, waardoor ze exponentieel krimpen wanneer ze eerdere lagen bereiken, waardoor die lagen zeer langzaam leren."
        }
      },
      {
        question: {
          en: "What innovation do ResNet architectures introduce to address the degradation problem?",
          es: "¿Qué innovación introducen las arquitecturas ResNet para abordar el problema de degradación?",
          de: "Welche Innovation führen ResNet-Architekturen ein um das Degradationsproblem zu adressieren?",
          nl: "Welke innovatie introduceren ResNet architecturen om het degradatieprobleem aan te pakken?"
        },
        options: [
          { en: "Skip connections that allow gradients to flow directly to earlier layers", es: "Conexiones de salto que permiten que los gradientes fluyan directamente a capas anteriores", de: "Skip-Verbindungen die Gradienten ermöglichen direkt zu früheren Schichten zu fließen", nl: "Skip verbindingen die gradiënten toestaan direct naar eerdere lagen te stromen" },
          { en: "Reducing network depth significantly", es: "Reducir significativamente la profundidad de la red", de: "Netzwerktiefe signifikant reduzieren", nl: "Netwerkdiepte significant verminderen" },
          { en: "Using only residual computations", es: "Usar solo computaciones residuales", de: "Nur Residualberechnungen verwenden", nl: "Alleen residuele berekeningen gebruiken" },
          { en: "Eliminating activation functions", es: "Eliminar funciones de activación", de: "Aktivierungsfunktionen eliminieren", nl: "Activatiefuncties elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "ResNet's skip connections create identity mappings that allow gradients to bypass layers during backpropagation, enabling training of much deeper networks without degradation in performance.",
          es: "Las conexiones de salto de ResNet crean mapeos de identidad que permiten que los gradientes eviten capas durante la retropropagación, permitiendo entrenamiento de redes mucho más profundas sin degradación en rendimiento.",
          de: "ResNets Skip-Verbindungen erstellen Identitätsmappings die Gradienten ermöglichen Schichten während Backpropagation zu umgehen, ermöglichen Training viel tieferer Netzwerke ohne Leistungsdegradation.",
          nl: "ResNet's skip verbindingen creëren identiteitsmappings die gradiënten toestaan lagen te omzeilen tijdens backpropagatie, maken training van veel diepere netwerken mogelijk zonder prestatievermindering."
        }
      },
      {
        question: {
          en: "What is data augmentation's role in training computer vision models?",
          es: "¿Cuál es el papel del aumento de datos en el entrenamiento de modelos de visión por computadora?",
          de: "Welche Rolle spielt Datenaugmentation beim Training von Computer Vision Modellen?",
          nl: "Wat is de rol van data augmentatie bij het trainen van computer vision modellen?"
        },
        options: [
          { en: "Artificially increasing dataset size and diversity to improve generalization", es: "Aumentar artificialmente el tamaño y diversidad del conjunto de datos para mejorar la generalización", de: "Datensatzgröße und -vielfalt künstlich erhöhen um Generalisierung zu verbessern", nl: "Dataset grootte en diversiteit kunstmatig verhogen om generalisatie te verbeteren" },
          { en: "Adding more training epochs", es: "Agregar más épocas de entrenamiento", de: "Mehr Trainingsepochen hinzufügen", nl: "Meer trainingsepochen toevoegen" },
          { en: "Increasing model complexity only", es: "Solo aumentar complejidad del modelo", de: "Nur Modellkomplexität erhöhen", nl: "Alleen modelcomplexiteit verhogen" },
          { en: "Augmenting computational resources", es: "Aumentar recursos computacionales", de: "Rechenressourcen erweitern", nl: "Computationele bronnen uitbreiden" }
        ],
        correct: 0,
        explanation: {
          en: "Data augmentation applies transformations like rotation, scaling, cropping, and color changes to existing images, creating variations that help models learn invariant features and reduce overfitting.",
          es: "El aumento de datos aplica transformaciones como rotación, escalado, recorte y cambios de color a imágenes existentes, creando variaciones que ayudan a modelos aprender características invariantes y reducir sobreajuste.",
          de: "Datenaugmentation wendet Transformationen wie Rotation, Skalierung, Zuschneiden und Farbänderungen auf bestehende Bilder an, erstellt Variationen die Modellen helfen invariante Features zu lernen und Overfitting zu reduzieren.",
          nl: "Data augmentatie past transformaties toe zoals rotatie, schaling, bijsnijden en kleurveranderingen op bestaande afbeeldingen, creëert variaties die modellen helpen invariante kenmerken te leren en overfitting te verminderen."
        }
      },
      {
        question: {
          en: "What is the purpose of pooling layers in CNNs?",
          es: "¿Cuál es el propósito de las capas de pooling en CNNs?",
          de: "Was ist der Zweck von Pooling-Schichten in CNNs?",
          nl: "Wat is het doel van pooling lagen in CNNs?"
        },
        options: [
          { en: "Downsampling feature maps to reduce spatial dimensions and computational cost", es: "Submuestrear mapas de características para reducir dimensiones espaciales y costo computacional", de: "Feature Maps downsampeln um räumliche Dimensionen und Rechenkosten zu reduzieren", nl: "Feature maps downsamplen om ruimtelijke dimensies en computationele kosten te verminderen" },
          { en: "Pooling computational resources together", es: "Agrupar recursos computacionales juntos", de: "Rechenressourcen zusammenbündeln", nl: "Computationele bronnen samenvoegen" },
          { en: "Creating swimming pool-like structures", es: "Crear estructuras similares a piscinas", de: "Schwimmbecken-ähnliche Strukturen erstellen", nl: "Zwembad-achtige structuren maken" },
          { en: "Increasing feature map resolution", es: "Aumentar resolución de mapa de características", de: "Feature Map Auflösung erhöhen", nl: "Feature map resolutie verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Pooling layers aggregate neighboring pixels to create smaller, more manageable feature maps while preserving important information, providing translation invariance and reducing overfitting.",
          es: "Las capas de pooling agregan píxeles vecinos para crear mapas de características más pequeños y manejables mientras preservan información importante, proporcionando invariancia de traducción y reduciendo sobreajuste.",
          de: "Pooling-Schichten aggregieren benachbarte Pixel um kleinere, handlichere Feature Maps zu erstellen während wichtige Informationen bewahrt werden, bieten Translationsinvarianz und reduzieren Overfitting.",
          nl: "Pooling lagen aggregeren naburige pixels om kleinere, beter hanteerbare feature maps te maken terwijl belangrijke informatie behouden blijft, bieden translatie-invariantie en verminderen overfitting."
        }
      },
      {
        question: {
          en: "What is the difference between fine-tuning and feature extraction in transfer learning?",
          es: "¿Cuál es la diferencia entre ajuste fino y extracción de características en aprendizaje de transferencia?",
          de: "Was ist der Unterschied zwischen Fine-Tuning und Feature Extraction im Transfer Learning?",
          nl: "Wat is het verschil tussen fine-tuning en feature extractie bij transfer learning?"
        },
        options: [
          { en: "Fine-tuning updates pre-trained weights while feature extraction freezes them", es: "El ajuste fino actualiza pesos pre-entrenados mientras la extracción de características los congela", de: "Fine-Tuning aktualisiert vortrainierte Gewichte während Feature Extraction sie einfriert", nl: "Fine-tuning werkt voorgetrainde gewichten bij terwijl feature extractie ze bevriest" },
          { en: "They are exactly the same approach", es: "Son exactamente el mismo enfoque", de: "Sie sind genau derselbe Ansatz", nl: "Ze zijn precies dezelfde aanpak" },
          { en: "Feature extraction is faster than fine-tuning", es: "La extracción de características es más rápida que el ajuste fino", de: "Feature Extraction ist schneller als Fine-Tuning", nl: "Feature extractie is sneller dan fine-tuning" },
          { en: "Fine-tuning only works with small datasets", es: "El ajuste fino solo funciona con conjuntos de datos pequeños", de: "Fine-Tuning funktioniert nur mit kleinen Datensätzen", nl: "Fine-tuning werkt alleen met kleine datasets" }
        ],
        correct: 0,
        explanation: {
          en: "Feature extraction uses pre-trained CNN layers as fixed feature extractors, only training the final classifier. Fine-tuning allows gradual updates to pre-trained weights, adapting the entire network to the new task.",
          es: "La extracción de características usa capas CNN pre-entrenadas como extractores de características fijos, solo entrenando el clasificador final. El ajuste fino permite actualizaciones graduales a pesos pre-entrenados, adaptando toda la red a la nueva tarea.",
          de: "Feature Extraction verwendet vortrainierte CNN-Schichten als feste Feature-Extraktoren, trainiert nur den finalen Klassifizierer. Fine-Tuning ermöglicht graduelle Updates vortrainierter Gewichte, passt das gesamte Netzwerk an die neue Aufgabe an.",
          nl: "Feature extractie gebruikt voorgetrainde CNN lagen als vaste feature extractors, traint alleen de finale classifier. Fine-tuning staat geleidelijke updates van voorgetrainde gewichten toe, past het hele netwerk aan de nieuwe taak aan."
        }
      },
      {
        question: {
          en: "What is the role of dropout regularization in neural networks?",
          es: "¿Cuál es el papel de la regularización dropout en redes neuronales?",
          de: "Welche Rolle spielt Dropout-Regularisierung in neuronalen Netzwerken?",
          nl: "Wat is de rol van dropout regularisatie in neurale netwerken?"
        },
        options: [
          { en: "Randomly setting neurons to zero during training to prevent overfitting", es: "Establecer aleatoriamente neuronas en cero durante entrenamiento para prevenir sobreajuste", de: "Zufällig Neuronen auf Null setzen während Training um Overfitting zu verhindern", nl: "Willekeurig neuronen op nul zetten tijdens training om overfitting te voorkomen" },
          { en: "Dropping out poor performing layers", es: "Eliminar capas de bajo rendimiento", de: "Schlecht performende Schichten entfernen", nl: "Slecht presterende lagen weglaten" },
          { en: "Removing training samples randomly", es: "Eliminar muestras de entrenamiento aleatoriamente", de: "Trainingsstichproben zufällig entfernen", nl: "Trainingsmonsters willekeurig verwijderen" },
          { en: "Dropping network connections permanently", es: "Eliminar conexiones de red permanentemente", de: "Netzwerkverbindungen dauerhaft entfernen", nl: "Netwerkverbindingen permanent verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout randomly disables a fraction of neurons during each training iteration, forcing the network to learn redundant representations and reducing dependence on specific neurons, thus preventing overfitting.",
          es: "Dropout desactiva aleatoriamente una fracción de neuronas durante cada iteración de entrenamiento, forzando a la red a aprender representaciones redundantes y reduciendo dependencia en neuronas específicas, previniendo así sobreajuste.",
          de: "Dropout deaktiviert zufällig einen Bruchteil von Neuronen während jeder Trainingsiteration, zwingt das Netzwerk redundante Repräsentationen zu lernen und reduziert Abhängigkeit von spezifischen Neuronen, verhindert so Overfitting.",
          nl: "Dropout schakelt willekeurig een fractie van neuronen uit tijdens elke trainingiteratie, dwingt het netwerk redundante representaties te leren en vermindert afhankelijkheid van specifieke neuronen, voorkomt zo overfitting."
        }
      },
      {
        question: {
          en: "What is the primary advantage of using pre-trained ImageNet weights?",
          es: "¿Cuál es la principal ventaja de usar pesos pre-entrenados de ImageNet?",
          de: "Was ist der Hauptvorteil der Verwendung vortrainierter ImageNet-Gewichte?",
          nl: "Wat is het hoofdvoordeel van het gebruik van voorgetrainde ImageNet gewichten?"
        },
        options: [
          { en: "Models have learned general visual features useful across many computer vision tasks", es: "Los modelos han aprendido características visuales generales útiles en muchas tareas de visión por computadora", de: "Modelle haben allgemeine visuelle Features gelernt die für viele Computer Vision Aufgaben nützlich sind", nl: "Modellen hebben algemene visuele kenmerken geleerd die nuttig zijn voor veel computer vision taken" },
          { en: "ImageNet weights are always more accurate", es: "Los pesos de ImageNet siempre son más precisos", de: "ImageNet-Gewichte sind immer genauer", nl: "ImageNet gewichten zijn altijd nauwkeuriger" },
          { en: "They only work with natural images", es: "Solo funcionan con imágenes naturales", de: "Sie funktionieren nur mit natürlichen Bildern", nl: "Ze werken alleen met natuurlijke afbeeldingen" },
          { en: "ImageNet models are smaller in size", es: "Los modelos ImageNet son más pequeños en tamaño", de: "ImageNet-Modelle sind kleiner in der Größe", nl: "ImageNet modellen zijn kleiner van omvang" }
        ],
        correct: 0,
        explanation: {
          en: "ImageNet training on millions of diverse images teaches networks to extract fundamental visual features like edges, textures, and shapes that transfer well to specialized domains, even medical or satellite imagery.",
          es: "El entrenamiento en ImageNet con millones de imágenes diversas enseña a las redes a extraer características visuales fundamentales como bordes, texturas y formas que se transfieren bien a dominios especializados, incluso imágenes médicas o satelitales.",
          de: "ImageNet-Training auf Millionen vielfältiger Bilder lehrt Netzwerke fundamentale visuelle Features wie Kanten, Texturen und Formen zu extrahieren die sich gut auf spezialisierte Domänen übertragen, sogar medizinische oder Satellitenbilder.",
          nl: "ImageNet training op miljoenen diverse afbeeldingen leert netwerken fundamentele visuele kenmerken zoals randen, texturen en vormen te extraheren die goed overdragen naar gespecialiseerde domeinen, zelfs medische of satellietbeelden."
        }
      },
      {
        question: {
          en: "What is the exploding gradient problem and how is it typically addressed?",
          es: "¿Qué es el problema del gradiente explosivo y cómo se aborda típicamente?",
          de: "Was ist das Exploding Gradient Problem und wie wird es typischerweise adressiert?",
          nl: "Wat is het exploding gradient probleem en hoe wordt het typisch aangepakt?"
        },
        options: [
          { en: "Gradients become too large, addressed by gradient clipping or proper weight initialization", es: "Los gradientes se vuelven demasiado grandes, abordado por recorte de gradiente o inicialización adecuada de pesos", de: "Gradienten werden zu groß, adressiert durch Gradient Clipping oder ordnungsgemäße Gewichtsinitialisierung", nl: "Gradiënten worden te groot, aangepakt door gradient clipping of juiste gewichtinitialisatie" },
          { en: "Computer memory explodes during training", es: "La memoria de la computadora explota durante entrenamiento", de: "Computerspeicher explodiert während Training", nl: "Computergeheugen explodeert tijdens training" },
          { en: "Training data becomes corrupted", es: "Los datos de entrenamiento se corrompen", de: "Trainingsdaten werden beschädigt", nl: "Trainingsdata raakt beschadigd" },
          { en: "Networks become too complex automatically", es: "Las redes se vuelven demasiado complejas automáticamente", de: "Netzwerke werden automatisch zu komplex", nl: "Netwerken worden automatisch te complex" }
        ],
        correct: 0,
        explanation: {
          en: "Exploding gradients occur when gradients accumulate and become extremely large during backpropagation, causing unstable training. Gradient clipping limits gradient magnitude, while proper initialization prevents the problem.",
          es: "Los gradientes explosivos ocurren cuando los gradientes se acumulan y se vuelven extremadamente grandes durante la retropropagación, causando entrenamiento inestable. El recorte de gradiente limita la magnitud del gradiente, mientras la inicialización adecuada previene el problema.",
          de: "Explodierende Gradienten treten auf wenn sich Gradienten während Backpropagation akkumulieren und extrem groß werden, verursachen instabiles Training. Gradient Clipping begrenzt Gradientenmagnitude, während ordnungsgemäße Initialisierung das Problem verhindert.",
          nl: "Exploderende gradiënten treden op wanneer gradiënten accumuleren en extreem groot worden tijdens backpropagatie, veroorzaken instabiele training. Gradient clipping beperkt gradiëntmagnitude, terwijl juiste initialisatie het probleem voorkomt."
        }
      },
      {
        question: {
          en: "What is the purpose of learning rate scheduling in CNN training?",
          es: "¿Cuál es el propósito de la programación de tasa de aprendizaje en entrenamiento de CNN?",
          de: "Was ist der Zweck von Learning Rate Scheduling im CNN-Training?",
          nl: "Wat is het doel van learning rate scheduling bij CNN training?"
        },
        options: [
          { en: "Gradually reducing learning rate to fine-tune convergence and avoid overshooting minima", es: "Reducir gradualmente la tasa de aprendizaje para ajustar convergencia y evitar sobrepasar mínimos", de: "Lernrate allmählich reduzieren um Konvergenz feinabzustimmen und Überschreiten von Minima zu vermeiden", nl: "Geleidelijk leersnelheid verminderen om convergentie af te stemmen en overschrijden van minima te voorkomen" },
          { en: "Scheduling training sessions at specific times", es: "Programar sesiones de entrenamiento en horarios específicos", de: "Trainingssitzungen zu bestimmten Zeiten planen", nl: "Trainingssessies plannen op specifieke tijden" },
          { en: "Organizing learning materials systematically", es: "Organizar materiales de aprendizaje sistemáticamente", de: "Lernmaterialien systematisch organisieren", nl: "Leermateriaal systematisch organiseren" },
          { en: "Increasing learning rate continuously", es: "Aumentar la tasa de aprendizaje continuamente", de: "Lernrate kontinuierlich erhöhen", nl: "Leersnelheid continu verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate scheduling starts with higher rates for rapid initial learning, then gradually decreases to allow fine-grained adjustments near convergence, preventing oscillation around optimal weights.",
          es: "La programación de tasa de aprendizaje comienza con tasas más altas para aprendizaje inicial rápido, luego disminuye gradualmente para permitir ajustes de grano fino cerca de convergencia, previniendo oscilación alrededor de pesos óptimos.",
          de: "Learning Rate Scheduling beginnt mit höheren Raten für schnelles anfängliches Lernen, reduziert dann allmählich um feinkörnige Anpassungen nahe Konvergenz zu ermöglichen, verhindert Oszillation um optimale Gewichte.",
          nl: "Learning rate scheduling begint met hogere snelheden voor snelle initiële learning, vermindert dan geleidelijk om fijnmazige aanpassingen nabij convergentie toe te staan, voorkomt oscillatie rond optimale gewichten."
        }
      },
      {
        question: {
          en: "What is the main benefit of using deeper CNN architectures?",
          es: "¿Cuál es el principal beneficio de usar arquitecturas CNN más profundas?",
          de: "Was ist der Hauptvorteil tieferer CNN-Architekturen?",
          nl: "Wat is het hoofdvoordeel van diepere CNN architecturen?"
        },
        options: [
          { en: "Learning increasingly complex and abstract feature representations", es: "Aprender representaciones de características cada vez más complejas y abstractas", de: "Zunehmend komplexe und abstrakte Feature-Repräsentationen lernen", nl: "Steeds complexere en abstractere feature representaties leren" },
          { en: "Always achieving higher accuracy", es: "Siempre lograr mayor precisión", de: "Immer höhere Genauigkeit erreichen", nl: "Altijd hogere nauwkeurigheid bereiken" },
          { en: "Reducing computational requirements", es: "Reducir requisitos computacionales", de: "Rechenanforderungen reduzieren", nl: "Computationele vereisten verminderen" },
          { en: "Processing larger input images only", es: "Procesar solo imágenes de entrada más grandes", de: "Nur größere Eingabebilder verarbeiten", nl: "Alleen grotere invoer afbeeldingen verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Deeper networks create hierarchical feature learning - early layers detect edges and textures, middle layers combine them into patterns, and deeper layers learn complex object parts and semantic concepts.",
          es: "Las redes más profundas crean aprendizaje jerárquico de características - capas tempranas detectan bordes y texturas, capas medias las combinan en patrones, y capas más profundas aprenden partes complejas de objetos y conceptos semánticos.",
          de: "Tiefere Netzwerke erstellen hierarchisches Feature-Lernen - frühe Schichten erkennen Kanten und Texturen, mittlere Schichten kombinieren sie zu Mustern, und tiefere Schichten lernen komplexe Objektteile und semantische Konzepte.",
          nl: "Diepere netwerken creëren hiërarchisch feature leren - vroege lagen detecteren randen en texturen, middelste lagen combineren ze tot patronen, en diepere lagen leren complexe objectonderdelen en semantische concepten."
        }
      },
      {
        question: {
          en: "What is curriculum learning in the context of computer vision training?",
          es: "¿Qué es el aprendizaje curricular en el contexto del entrenamiento de visión por computadora?",
          de: "Was ist Curriculum Learning im Kontext von Computer Vision Training?",
          nl: "Wat is curriculum learning in de context van computer vision training?"
        },
        options: [
          { en: "Training models progressively from easy to hard examples to improve learning efficiency", es: "Entrenar modelos progresivamente de ejemplos fáciles a difíciles para mejorar eficiencia de aprendizaje", de: "Modelle progressiv von einfachen zu schweren Beispielen trainieren um Lerneffizienz zu verbessern", nl: "Modellen progressief trainen van makkelijke naar moeilijke voorbeelden om leerefficiëntie te verbeteren" },
          { en: "Creating educational curricula for students", es: "Crear currículos educativos para estudiantes", de: "Bildungslehrpläne für Studenten erstellen", nl: "Educatieve curricula maken voor studenten" },
          { en: "Learning only from textbook examples", es: "Aprender solo de ejemplos de libros de texto", de: "Nur aus Lehrbuchbeispielen lernen", nl: "Alleen leren van leerboekvoorbeelden" },
          { en: "Training networks in academic institutions", es: "Entrenar redes en instituciones académicas", de: "Netzwerke in akademischen Institutionen trainieren", nl: "Netwerken trainen in academische instellingen" }
        ],
        correct: 0,
        explanation: {
          en: "Curriculum learning mimics human learning by starting with simpler examples and gradually increasing difficulty, helping models build foundational understanding before tackling complex cases, often improving convergence and final performance.",
          es: "El aprendizaje curricular imita el aprendizaje humano comenzando con ejemplos más simples y aumentando gradualmente la dificultad, ayudando a modelos construir comprensión fundamental antes de abordar casos complejos, a menudo mejorando convergencia y rendimiento final.",
          de: "Curriculum Learning imitiert menschliches Lernen durch Beginnen mit einfacheren Beispielen und allmähliche Steigerung der Schwierigkeit, hilft Modellen fundamentales Verständnis aufzubauen bevor komplexe Fälle angegangen werden, verbessert oft Konvergenz und Endleistung.",
          nl: "Curriculum learning imiteert menselijk leren door te beginnen met eenvoudigere voorbeelden en geleidelijk moeilijkheid te verhogen, helpt modellen fundamenteel begrip op te bouwen voordat complexe gevallen worden aangepakt, verbetert vaak convergentie en eindprestaties."
        }
      },
      {
        question: {
          en: "What is knowledge distillation in deep learning?",
          es: "¿Qué es la destilación de conocimiento en aprendizaje profundo?",
          de: "Was ist Knowledge Distillation im Deep Learning?",
          nl: "Wat is knowledge distillation in deep learning?"
        },
        options: [
          { en: "Training a smaller student model to mimic the behavior of a larger teacher model", es: "Entrenar un modelo estudiante más pequeño para imitar el comportamiento de un modelo maestro más grande", de: "Ein kleineres Schüler-Modell trainieren um das Verhalten eines größeren Lehrer-Modells nachzuahmen", nl: "Een kleiner student model trainen om het gedrag van een groter leraar model na te bootsen" },
          { en: "Extracting pure knowledge from data", es: "Extraer conocimiento puro de los datos", de: "Reines Wissen aus Daten extrahieren", nl: "Zuivere kennis extraheren uit data" },
          { en: "Distilling learning algorithms chemically", es: "Destilar algoritmos de aprendizaje químicamente", de: "Lernalgorithmen chemisch destillieren", nl: "Leeralgoritmes chemisch distilleren" },
          { en: "Reducing dataset size systematically", es: "Reducir el tamaño del conjunto de datos sistemáticamente", de: "Datensatzgröße systematisch reduzieren", nl: "Dataset grootte systematisch verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation transfers the learned representations from a complex teacher network to a simpler student network, enabling deployment of efficient models that retain much of the teacher's performance.",
          es: "La destilación de conocimiento transfiere las representaciones aprendidas de una red maestra compleja a una red estudiante más simple, permitiendo despliegue de modelos eficientes que retienen mucho del rendimiento del maestro.",
          de: "Knowledge Distillation überträgt gelernte Repräsentationen von einem komplexen Lehrer-Netzwerk zu einem einfacheren Schüler-Netzwerk, ermöglicht Deployment effizienter Modelle die viel der Lehrer-Performance beibehalten.",
          nl: "Knowledge distillation draagt geleerde representaties over van een complex leraar netwerk naar een eenvoudiger student netwerk, maakt deployment mogelijk van efficiënte modellen die veel van de leraar prestaties behouden."
        }
      },
      {
        question: {
          en: "What is the key innovation that Vision Transformers (ViTs) brought to computer vision?",
          es: "¿Cuál es la innovación clave que los Vision Transformers (ViTs) trajeron a la visión por computadora?",
          de: "Was ist die Schlüsselinnovation die Vision Transformers (ViTs) in Computer Vision brachten?",
          nl: "Wat is de belangrijkste innovatie die Vision Transformers (ViTs) naar computer vision brachten?"
        },
        options: [
          { en: "Applying self-attention mechanisms to image patches instead of using convolutions", es: "Aplicar mecanismos de auto-atención a parches de imagen en lugar de usar convoluciones", de: "Selbstaufmerksamkeitsmechanismen auf Bildpatches anwenden statt Konvolutionen zu verwenden", nl: "Zelf-aandacht mechanismen toepassen op beeldpatches in plaats van convoluties te gebruiken" },
          { en: "Creating deeper convolutional networks", es: "Crear redes convolucionales más profundas", de: "Tiefere Konvolutionsnetzwerke erstellen", nl: "Diepere convolutionele netwerken maken" },
          { en: "Using only pooling layers for feature extraction", es: "Usar solo capas de pooling para extracción de características", de: "Nur Pooling-Schichten für Feature-Extraktion verwenden", nl: "Alleen pooling lagen gebruiken voor feature extractie" },
          { en: "Eliminating all forms of attention mechanisms", es: "Eliminar todas las formas de mecanismos de atención", de: "Alle Formen von Aufmerksamkeitsmechanismen eliminieren", nl: "Alle vormen van aandachtsmechanismen elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Vision Transformers treat images as sequences of patches and use self-attention to model relationships between patches, demonstrating that attention-based architectures can match or exceed CNN performance without convolutions.",
          es: "Los Vision Transformers tratan las imágenes como secuencias de parches y usan auto-atención para modelar relaciones entre parches, demostrando que arquitecturas basadas en atención pueden igualar o superar el rendimiento de CNN sin convoluciones.",
          de: "Vision Transformers behandeln Bilder als Sequenzen von Patches und verwenden Selbstaufmerksamkeit um Beziehungen zwischen Patches zu modellieren, demonstrieren dass aufmerksamkeitsbasierte Architekturen CNN-Leistung erreichen oder übertreffen können ohne Konvolutionen.",
          nl: "Vision Transformers behandelen afbeeldingen als sequenties van patches en gebruiken zelf-aandacht om relaties tussen patches te modelleren, tonen aan dat aandacht-gebaseerde architecturen CNN prestaties kunnen evenaren of overtreffen zonder convoluties."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();