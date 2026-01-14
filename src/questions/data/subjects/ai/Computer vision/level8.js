// Computer vision Quiz - Level 8
(function() {
  const level8 = {
    name: {
          "en": "Computer Vision Level 8",
          "es": "Visión por Computadora Nivel 8",
          "de": "Computer Vision Stufe 8",
          "nl": "Computer Vision Level 8"
    },
    questions: [
      {
        question: {
                  "en": "What are Generative Adversarial Networks (GANs) primarily used for in computer vision?",
                  "es": "¿Para qué se usan principalmente las Redes Adversarias Generativas (GANs) en visión por computadora?",
                  "de": "Wofür werden Generative Adversarial Networks (GANs) hauptsächlich in Computer Vision verwendet?",
                  "nl": "Waarvoor worden Generative Adversarial Networks (GANs) hoofdzakelijk gebruikt in computer vision?"
        },
        options: [
        {
                  "en": "Generating realistic synthetic images and improving existing images",
                  "es": "Generar imágenes sintéticas realistas y mejorar imágenes existentes",
                  "de": "Realistische synthetische Bilder generieren und bestehende Bilder verbessern",
                  "nl": "Realistische synthetische afbeeldingen genereren en bestaande afbeeldingen verbeteren"
        },
        {
                  "en": "Only for adversarial attacks on networks",
                  "es": "Solo para ataques adversarios en redes",
                  "de": "Nur für adversarielle Angriffe auf Netzwerke",
                  "nl": "Alleen voor adversariële aanvallen op netwerken"
        },
        {
                  "en": "Analyzing network performance",
                  "es": "Analizar rendimiento de red",
                  "de": "Netzwerk-Performance analysieren",
                  "nl": "Netwerkprestaties analyseren"
        },
        {
                  "en": "General purpose image classification",
                  "es": "Clasificación de imágenes de propósito general",
                  "de": "Allgemeine Bildklassifizierung",
                  "nl": "Algemene beeldclassificatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "GANs consist of a generator and discriminator competing against each other, enabling creation of high-quality synthetic images, image-to-image translation, and data augmentation.",
                  "es": "Las GANs consisten en un generador y discriminador compitiendo uno contra otro, permitiendo creación de imágenes sintéticas de alta calidad, traducción imagen-a-imagen y aumento de datos.",
                  "de": "GANs bestehen aus einem Generator und Diskriminator die gegeneinander konkurrieren, ermöglichen Erstellung hochwertiger synthetischer Bilder, Bild-zu-Bild-Übersetzung und Datenaugmentation.",
                  "nl": "GANs bestaan uit een generator en discriminator die tegen elkaar concurreren, waardoor creatie van hoogwaardige synthetische afbeeldingen, beeld-naar-beeld vertaling en data augmentatie mogelijk wordt."
        }
      },
      {
        question: {
                  "en": "What is the fundamental challenge in 3D computer vision compared to 2D?",
                  "es": "¿Cuál es el desafío fundamental en visión por computadora 3D comparada con 2D?",
                  "de": "Was ist die grundlegende Herausforderung in 3D Computer Vision verglichen mit 2D?",
                  "nl": "Wat is de fundamentele uitdaging in 3D computer vision vergeleken met 2D?"
        },
        options: [
        {
                  "en": "3D requires special viewing equipment",
                  "es": "3D requiere equipo de visualización especial",
                  "de": "3D erfordert spezielle Anzeigeausrüstung",
                  "nl": "3D vereist speciale kijkapparatuur"
        },
        {
                  "en": "Recovering depth information and spatial relationships from 2D projections",
                  "es": "Recuperar información de profundidad y relaciones espaciales de proyecciones 2D",
                  "de": "Tiefeninformationen und räumliche Beziehungen aus 2D-Projektionen wiederherstellen",
                  "nl": "Diepte-informatie en ruimtelijke relaties herstellen uit 2D projecties"
        },
        {
                  "en": "3D images are always larger file sizes",
                  "es": "Las imágenes 3D siempre tienen tamaños de archivo más grandes",
                  "de": "3D-Bilder haben immer größere Dateigrößen",
                  "nl": "3D afbeeldingen hebben altijd grotere bestandsgroottes"
        },
        {
                  "en": "Processing 3D graphics cards only",
                  "es": "Procesar solo tarjetas gráficas 3D",
                  "de": "Nur 3D-Grafikkarten verarbeiten",
                  "nl": "Alleen 3D grafische kaarten verwerken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "3D computer vision must infer three-dimensional structure from 2D images, dealing with occlusions, perspective distortions, and the loss of depth information inherent in camera projections.",
                  "es": "La visión por computadora 3D debe inferir estructura tridimensional de imágenes 2D, lidiando con oclusiones, distorsiones perspectivas y pérdida de información de profundidad inherente en proyecciones de cámara.",
                  "de": "3D Computer Vision muss dreidimensionale Struktur aus 2D-Bildern ableiten, mit Verdeckungen, Perspektivverzerrungen und Verlust von Tiefeninformationen umgehen die Kameraprojektionen innewohnen.",
                  "nl": "3D computer vision moet driedimensionale structuur afleiden uit 2D afbeeldingen, omgaan met occlusies, perspectief verstoringen en verlies van diepte-informatie inherent aan camera projecties."
        }
      },
      {
        question: {
                  "en": "What is instance segmentation in computer vision?",
                  "es": "¿Qué es la segmentación de instancia en visión por computadora?",
                  "de": "Was ist Instanzsegmentierung in Computer Vision?",
                  "nl": "Wat is instance segmentatie in computer vision?"
        },
        options: [
        {
                  "en": "Segmenting images into fixed instances",
                  "es": "Segmentar imágenes en instancias fijas",
                  "de": "Bilder in feste Instanzen segmentieren",
                  "nl": "Afbeeldingen segmenteren in vaste instanties"
        },
        {
                  "en": "Creating instances of segmentation algorithms",
                  "es": "Crear instancias de algoritmos de segmentación",
                  "de": "Instanzen von Segmentierungsalgorithmen erstellen",
                  "nl": "Instanties van segmentatie-algoritmes maken"
        },
        {
                  "en": "Distinguishing individual objects of the same class with pixel-level precision",
                  "es": "Distinguir objetos individuales de la misma clase con precisión a nivel de píxel",
                  "de": "Individuelle Objekte derselben Klasse mit Pixel-Präzision unterscheiden",
                  "nl": "Individuele objecten van dezelfde klasse onderscheiden met pixel-niveau precisie"
        },
        {
                  "en": "Random segmentation examples",
                  "es": "Ejemplos de segmentación aleatoria",
                  "de": "Zufällige Segmentierungsbeispiele",
                  "nl": "Willekeurige segmentatie voorbeelden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Instance segmentation combines object detection and semantic segmentation, providing pixel-level masks for each individual object instance, even when multiple objects of the same class overlap.",
                  "es": "La segmentación de instancia combina detección de objetos y segmentación semántica, proporcionando máscaras a nivel de píxel para cada instancia de objeto individual, incluso cuando múltiples objetos de la misma clase se superponen.",
                  "de": "Instanzsegmentierung kombiniert Objekterkennung und semantische Segmentierung, bietet Pixel-Level-Masken für jede individuelle Objektinstanz, auch wenn mehrere Objekte derselben Klasse überlappen.",
                  "nl": "Instance segmentatie combineert objectdetectie en semantische segmentatie, biedt pixel-niveau maskers voor elke individuele object instantie, zelfs wanneer meerdere objecten van dezelfde klasse overlappen."
        }
      },
      {
        question: {
                  "en": "What is neural style transfer achieving in computer vision?",
                  "es": "¿Qué está logrando la transferencia de estilo neuronal en visión por computadora?",
                  "de": "Was erreicht neuronaler Stiltransfer in Computer Vision?",
                  "nl": "Wat bereikt neural style transfer in computer vision?"
        },
        options: [
        {
                  "en": "Applying artistic styles from one image to the content of another while preserving structure",
                  "es": "Aplicar estilos artísticos de una imagen al contenido de otra mientras preserva la estructura",
                  "de": "Künstlerische Stile von einem Bild auf den Inhalt eines anderen anwenden während Struktur bewahrt wird",
                  "nl": "Artistieke stijlen van één afbeelding toepassen op de inhoud van een andere terwijl structuur behouden blijft"
        },
        {
                  "en": "Moving styles between different neural architectures",
                  "es": "Mover estilos entre diferentes arquitecturas neuronales",
                  "de": "Stile zwischen verschiedenen neuronalen Architekturen bewegen",
                  "nl": "Stijlen verplaatsen tussen verschillende neurale architecturen"
        },
        {
                  "en": "Transferring neural networks between computers",
                  "es": "Transferir redes neuronales entre computadoras",
                  "de": "Neuronale Netzwerke zwischen Computern übertragen",
                  "nl": "Neurale netwerken overbrengen tussen computers"
        },
        {
                  "en": "Transferring learning styles to students",
                  "es": "Transferir estilos de aprendizaje a estudiantes",
                  "de": "Lernstile an Studenten übertragen",
                  "nl": "Leerstijlen overdragen aan studenten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Neural style transfer uses deep CNNs to separate and recombine content and style representations, creating artistic renditions by applying the texture and color patterns of style images to content images.",
                  "es": "La transferencia de estilo neuronal usa CNN profundas para separar y recombinar representaciones de contenido y estilo, creando representaciones artísticas aplicando patrones de textura y color de imágenes de estilo a imágenes de contenido.",
                  "de": "Neuronaler Stiltransfer verwendet tiefe CNNs um Inhalts- und Stilrepräsentationen zu trennen und zu rekombinieren, erstellt künstlerische Darstellungen durch Anwendung von Textur- und Farbmustern von Stilbildern auf Inhaltsbilder.",
                  "nl": "Neural style transfer gebruikt diepe CNNs om inhoud- en stijlrepresentaties te scheiden en te recombineren, creëert artistieke weergaven door textuur- en kleurpatronen van stijlbeelden toe te passen op inhoudsbeelden."
        }
      },
      {
        question: {
                  "en": "What is the key advantage of using point clouds in 3D computer vision?",
                  "es": "¿Cuál es la ventaja clave de usar nubes de puntos en visión por computadora 3D?",
                  "de": "Was ist der Hauptvorteil der Verwendung von Punktwolken in 3D Computer Vision?",
                  "nl": "Wat is het belangrijkste voordeel van het gebruik van puntwolken in 3D computer vision?"
        },
        options: [
        {
                  "en": "Points are easier to see than other shapes",
                  "es": "Los puntos son más fáciles de ver que otras formas",
                  "de": "Punkte sind einfacher zu sehen als andere Formen",
                  "nl": "Punten zijn gemakkelijker te zien dan andere vormen"
        },
        {
                  "en": "Point clouds use less memory than images",
                  "es": "Las nubes de puntos usan menos memoria que las imágenes",
                  "de": "Punktwolken verwenden weniger Speicher als Bilder",
                  "nl": "Puntwolken gebruiken minder geheugen dan afbeeldingen"
        },
        {
                  "en": "They only work with cloud computing",
                  "es": "Solo funcionan con computación en la nube",
                  "de": "Sie funktionieren nur mit Cloud Computing",
                  "nl": "Ze werken alleen met cloud computing"
        },
        {
                  "en": "Direct representation of 3D spatial coordinates without grid discretization",
                  "es": "Representación directa de coordenadas espaciales 3D sin discretización de rejilla",
                  "de": "Direkte Darstellung von 3D-Raumkoordinaten ohne Gitterdiskretisierung",
                  "nl": "Directe representatie van 3D ruimtelijke coördinaten zonder raster discretisatie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Point clouds provide unstructured 3D data that preserves precise spatial relationships without forcing data into regular grids, making them ideal for processing LiDAR scans and 3D object recognition.",
                  "es": "Las nubes de puntos proporcionan datos 3D no estructurados que preservan relaciones espaciales precisas sin forzar datos en rejillas regulares, haciéndolas ideales para procesar escaneos LiDAR y reconocimiento de objetos 3D.",
                  "de": "Punktwolken bieten unstrukturierte 3D-Daten die präzise räumliche Beziehungen bewahren ohne Daten in regelmäßige Gitter zu zwingen, macht sie ideal für LiDAR-Scan-Verarbeitung und 3D-Objekterkennung.",
                  "nl": "Puntwolken bieden ongestructureerde 3D data die precieze ruimtelijke relaties behoudt zonder data te dwingen in reguliere rasters, waardoor ze ideaal zijn voor LiDAR-scan verwerking en 3D objectherkenning."
        }
      },
      {
        question: {
                  "en": "What is transfer learning's main advantage in computer vision applications?",
                  "es": "¿Cuál es la principal ventaja del aprendizaje de transferencia en aplicaciones de visión por computadora?",
                  "de": "Was ist der Hauptvorteil von Transfer Learning in Computer Vision Anwendungen?",
                  "nl": "Wat is het hoofdvoordeel van transfer learning bij computer vision toepassingen?"
        },
        options: [
        {
                  "en": "Transferring images between different formats",
                  "es": "Transferir imágenes entre diferentes formatos",
                  "de": "Bilder zwischen verschiedenen Formaten übertragen",
                  "nl": "Afbeeldingen overbrengen tussen verschillende formaten"
        },
        {
                  "en": "Moving models between different computers",
                  "es": "Mover modelos entre diferentes computadoras",
                  "de": "Modelle zwischen verschiedenen Computern bewegen",
                  "nl": "Modellen verplaatsen tussen verschillende computers"
        },
        {
                  "en": "Leveraging pre-trained features to achieve good performance with limited training data",
                  "es": "Aprovechar características pre-entrenadas para lograr buen rendimiento con datos de entrenamiento limitados",
                  "de": "Vortrainierte Features nutzen um gute Leistung mit begrenzten Trainingsdaten zu erreichen",
                  "nl": "Voorgetrainde features gebruiken om goede prestaties te bereiken met beperkte trainingsdata"
        },
        {
                  "en": "Learning only from labeled data",
                  "es": "Aprender solo de datos etiquetados",
                  "de": "Nur aus beschrifteten Daten lernen",
                  "nl": "Alleen leren van gelabelde data"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Transfer learning allows models trained on large datasets like ImageNet to be fine-tuned for specific tasks, reducing training time and data requirements while achieving high performance.",
                  "es": "El aprendizaje de transferencia permite que modelos entrenados en grandes conjuntos de datos como ImageNet sean ajustados para tareas específicas, reduciendo tiempo de entrenamiento y requisitos de datos mientras logra alto rendimiento.",
                  "de": "Transfer Learning ermöglicht es Modellen die auf großen Datensätzen wie ImageNet trainiert wurden für spezifische Aufgaben feinabgestimmt zu werden, reduziert Trainingszeit und Datenanforderungen bei hoher Leistung.",
                  "nl": "Transfer learning stelt modellen getraind op grote datasets zoals ImageNet in staat te worden afgestemd voor specifieke taken, vermindert trainingstijd en datavereisten terwijl hoge prestaties worden bereikt."
        }
      },
      {
        question: {
                  "en": "What is the purpose of batch normalization in CNNs?",
                  "es": "¿Cuál es el propósito de la normalización por lotes en CNNs?",
                  "de": "Was ist der Zweck von Batch Normalization in CNNs?",
                  "nl": "Wat is het doel van batch normalisatie in CNNs?"
        },
        options: [
        {
                  "en": "Normalizing image brightness",
                  "es": "Normalizar brillo de imagen",
                  "de": "Bildhelligkeit normalisieren",
                  "nl": "Beeldhelderheid normaliseren"
        },
        {
                  "en": "Grouping similar images together",
                  "es": "Agrupar imágenes similares juntas",
                  "de": "Ähnliche Bilder zusammengruppieren",
                  "nl": "Vergelijkbare afbeeldingen groeperen"
        },
        {
                  "en": "Processing images in batches only",
                  "es": "Procesar imágenes solo en lotes",
                  "de": "Bilder nur in Stapeln verarbeiten",
                  "nl": "Afbeeldingen alleen in batches verwerken"
        },
        {
                  "en": "Normalizing layer inputs to accelerate training and improve stability",
                  "es": "Normalizar entradas de capa para acelerar entrenamiento y mejorar estabilidad",
                  "de": "Schichteingaben normalisieren um Training zu beschleunigen und Stabilität zu verbessern",
                  "nl": "Laaginputs normaliseren om training te versnellen en stabiliteit te verbeteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Batch normalization normalizes the inputs to each layer by subtracting the batch mean and dividing by batch standard deviation, reducing internal covariate shift and enabling higher learning rates.",
                  "es": "La normalización por lotes normaliza las entradas a cada capa restando la media del lote y dividiendo por la desviación estándar del lote, reduciendo el cambio de covariables internas y permitiendo tasas de aprendizaje más altas.",
                  "de": "Batch Normalization normalisiert die Eingaben zu jeder Schicht durch Subtrahieren des Batch-Mittelwerts und Teilen durch Batch-Standardabweichung, reduziert interne Kovariatenverschiebung und ermöglicht höhere Lernraten.",
                  "nl": "Batch normalisatie normaliseert de inputs naar elke laag door het batch gemiddelde af te trekken en te delen door batch standaarddeviatie, vermindert interne covariate shift en maakt hogere leersnelheden mogelijk."
        }
      },
      {
        question: {
                  "en": "What is the vanishing gradient problem in deep neural networks?",
                  "es": "¿Qué es el problema del gradiente que desaparece en redes neuronales profundas?",
                  "de": "Was ist das Vanishing Gradient Problem in tiefen neuronalen Netzwerken?",
                  "nl": "Wat is het vanishing gradient probleem in diepe neurale netwerken?"
        },
        options: [
        {
                  "en": "Network weights become invisible",
                  "es": "Los pesos de la red se vuelven invisibles",
                  "de": "Netzwerkgewichte werden unsichtbar",
                  "nl": "Netwerkgewichten worden onzichtbaar"
        },
        {
                  "en": "Gradients become exponentially smaller in earlier layers, hindering learning",
                  "es": "Los gradientes se vuelven exponencialmente más pequeños en capas anteriores, obstaculizando el aprendizaje",
                  "de": "Gradienten werden in früheren Schichten exponentiell kleiner, behindern das Lernen",
                  "nl": "Gradiënten worden exponentieel kleiner in eerdere lagen, belemmeren het leren"
        },
        {
                  "en": "Training data gradually reduces",
                  "es": "Los datos de entrenamiento se reducen gradualmente",
                  "de": "Trainingsdaten reduzieren sich allmählich",
                  "nl": "Trainingsdata neemt geleidelijk af"
        },
        {
                  "en": "Gradients disappear from computer memory",
                  "es": "Los gradientes desaparecen de la memoria de la computadora",
                  "de": "Gradienten verschwinden aus dem Computerspeicher",
                  "nl": "Gradiënten verdwijnen uit computergeheugen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "During backpropagation in deep networks, gradients are multiplied by weights repeatedly, causing them to shrink exponentially as they reach earlier layers, making those layers learn very slowly.",
                  "es": "Durante la retropropagación en redes profundas, los gradientes se multiplican por pesos repetidamente, causando que se reduzcan exponencialmente al llegar a capas anteriores, haciendo que esas capas aprendan muy lentamente.",
                  "de": "Während Backpropagation in tiefen Netzwerken werden Gradienten wiederholt mit Gewichten multipliziert, was dazu führt dass sie exponentiell schrumpfen wenn sie frühere Schichten erreichen, macht diese Schichten sehr langsam lernend.",
                  "nl": "Tijdens backpropagatie in diepe netwerken worden gradiënten herhaaldelijk vermenigvuldigd met gewichten, waardoor ze exponentieel krimpen wanneer ze eerdere lagen bereiken, waardoor die lagen zeer langzaam leren."
        }
      },
      {
        question: {
                  "en": "What innovation do ResNet architectures introduce to address the degradation problem?",
                  "es": "¿Qué innovación introducen las arquitecturas ResNet para abordar el problema de degradación?",
                  "de": "Welche Innovation führen ResNet-Architekturen ein um das Degradationsproblem zu adressieren?",
                  "nl": "Welke innovatie introduceren ResNet architecturen om het degradatieprobleem aan te pakken?"
        },
        options: [
        {
                  "en": "Using only residual computations",
                  "es": "Usar solo computaciones residuales",
                  "de": "Nur Residualberechnungen verwenden",
                  "nl": "Alleen residuele berekeningen gebruiken"
        },
        {
                  "en": "Skip connections that allow gradients to flow directly to earlier layers",
                  "es": "Conexiones de salto que permiten que los gradientes fluyan directamente a capas anteriores",
                  "de": "Skip-Verbindungen die Gradienten ermöglichen direkt zu früheren Schichten zu fließen",
                  "nl": "Skip verbindingen die gradiënten toestaan direct naar eerdere lagen te stromen"
        },
        {
                  "en": "Eliminating activation functions",
                  "es": "Eliminar funciones de activación",
                  "de": "Aktivierungsfunktionen eliminieren",
                  "nl": "Activatiefuncties elimineren"
        },
        {
                  "en": "Reducing network depth significantly",
                  "es": "Reducir significativamente la profundidad de la red",
                  "de": "Netzwerktiefe signifikant reduzieren",
                  "nl": "Netwerkdiepte significant verminderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "ResNet's skip connections create identity mappings that allow gradients to bypass layers during backpropagation, enabling training of much deeper networks without degradation in performance.",
                  "es": "Las conexiones de salto de ResNet crean mapeos de identidad que permiten que los gradientes eviten capas durante la retropropagación, permitiendo entrenamiento de redes mucho más profundas sin degradación en rendimiento.",
                  "de": "ResNets Skip-Verbindungen erstellen Identitätsmappings die Gradienten ermöglichen Schichten während Backpropagation zu umgehen, ermöglichen Training viel tieferer Netzwerke ohne Leistungsdegradation.",
                  "nl": "ResNet's skip verbindingen creëren identiteitsmappings die gradiënten toestaan lagen te omzeilen tijdens backpropagatie, maken training van veel diepere netwerken mogelijk zonder prestatievermindering."
        }
      },
      {
        question: {
                  "en": "What is data augmentation's role in training computer vision models?",
                  "es": "¿Cuál es el papel del aumento de datos en el entrenamiento de modelos de visión por computadora?",
                  "de": "Welche Rolle spielt Datenaugmentation beim Training von Computer Vision Modellen?",
                  "nl": "Wat is de rol van data augmentatie bij het trainen van computer vision modellen?"
        },
        options: [
        {
                  "en": "Increasing model complexity only",
                  "es": "Solo aumentar complejidad del modelo",
                  "de": "Nur Modellkomplexität erhöhen",
                  "nl": "Alleen modelcomplexiteit verhogen"
        },
        {
                  "en": "Augmenting computational resources",
                  "es": "Aumentar recursos computacionales",
                  "de": "Rechenressourcen erweitern",
                  "nl": "Computationele bronnen uitbreiden"
        },
        {
                  "en": "Adding more training epochs",
                  "es": "Agregar más épocas de entrenamiento",
                  "de": "Mehr Trainingsepochen hinzufügen",
                  "nl": "Meer trainingsepochen toevoegen"
        },
        {
                  "en": "Artificially increasing dataset size and diversity to improve generalization",
                  "es": "Aumentar artificialmente el tamaño y diversidad del conjunto de datos para mejorar la generalización",
                  "de": "Datensatzgröße und -vielfalt künstlich erhöhen um Generalisierung zu verbessern",
                  "nl": "Dataset grootte en diversiteit kunstmatig verhogen om generalisatie te verbeteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Data augmentation applies transformations like rotation, scaling, cropping, and color changes to existing images, creating variations that help models learn invariant features and reduce overfitting.",
                  "es": "El aumento de datos aplica transformaciones como rotación, escalado, recorte y cambios de color a imágenes existentes, creando variaciones que ayudan a modelos aprender características invariantes y reducir sobreajuste.",
                  "de": "Datenaugmentation wendet Transformationen wie Rotation, Skalierung, Zuschneiden und Farbänderungen auf bestehende Bilder an, erstellt Variationen die Modellen helfen invariante Features zu lernen und Overfitting zu reduzieren.",
                  "nl": "Data augmentatie past transformaties toe zoals rotatie, schaling, bijsnijden en kleurveranderingen op bestaande afbeeldingen, creëert variaties die modellen helpen invariante kenmerken te leren en overfitting te verminderen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of pooling layers in CNNs?",
                  "es": "¿Cuál es el propósito de las capas de pooling en CNNs?",
                  "de": "Was ist der Zweck von Pooling-Schichten in CNNs?",
                  "nl": "Wat is het doel van pooling lagen in CNNs?"
        },
        options: [
        {
                  "en": "Increasing feature map resolution",
                  "es": "Aumentar resolución de mapa de características",
                  "de": "Feature Map Auflösung erhöhen",
                  "nl": "Feature map resolutie verhogen"
        },
        {
                  "en": "Creating swimming pool-like structures",
                  "es": "Crear estructuras similares a piscinas",
                  "de": "Schwimmbecken-ähnliche Strukturen erstellen",
                  "nl": "Zwembad-achtige structuren maken"
        },
        {
                  "en": "Pooling computational resources together",
                  "es": "Agrupar recursos computacionales juntos",
                  "de": "Rechenressourcen zusammenbündeln",
                  "nl": "Computationele bronnen samenvoegen"
        },
        {
                  "en": "Downsampling feature maps to reduce spatial dimensions and computational cost",
                  "es": "Submuestrear mapas de características para reducir dimensiones espaciales y costo computacional",
                  "de": "Feature Maps downsampeln um räumliche Dimensionen und Rechenkosten zu reduzieren",
                  "nl": "Feature maps downsamplen om ruimtelijke dimensies en computationele kosten te verminderen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pooling layers aggregate neighboring pixels to create smaller, more manageable feature maps while preserving important information, providing translation invariance and reducing overfitting.",
                  "es": "Las capas de pooling agregan píxeles vecinos para crear mapas de características más pequeños y manejables mientras preservan información importante, proporcionando invariancia de traducción y reduciendo sobreajuste.",
                  "de": "Pooling-Schichten aggregieren benachbarte Pixel um kleinere, handlichere Feature Maps zu erstellen während wichtige Informationen bewahrt werden, bieten Translationsinvarianz und reduzieren Overfitting.",
                  "nl": "Pooling lagen aggregeren naburige pixels om kleinere, beter hanteerbare feature maps te maken terwijl belangrijke informatie behouden blijft, bieden translatie-invariantie en verminderen overfitting."
        }
      },
      {
        question: {
                  "en": "What is the difference between fine-tuning and feature extraction in transfer learning?",
                  "es": "¿Cuál es la diferencia entre ajuste fino y extracción de características en aprendizaje de transferencia?",
                  "de": "Was ist der Unterschied zwischen Fine-Tuning und Feature Extraction im Transfer Learning?",
                  "nl": "Wat is het verschil tussen fine-tuning en feature extractie bij transfer learning?"
        },
        options: [
        {
                  "en": "Feature extraction is faster than fine-tuning",
                  "es": "La extracción de características es más rápida que el ajuste fino",
                  "de": "Feature Extraction ist schneller als Fine-Tuning",
                  "nl": "Feature extractie is sneller dan fine-tuning"
        },
        {
                  "en": "Fine-tuning updates pre-trained weights while feature extraction freezes them",
                  "es": "El ajuste fino actualiza pesos pre-entrenados mientras la extracción de características los congela",
                  "de": "Fine-Tuning aktualisiert vortrainierte Gewichte während Feature Extraction sie einfriert",
                  "nl": "Fine-tuning werkt voorgetrainde gewichten bij terwijl feature extractie ze bevriest"
        },
        {
                  "en": "Fine-tuning only works with small datasets",
                  "es": "El ajuste fino solo funciona con conjuntos de datos pequeños",
                  "de": "Fine-Tuning funktioniert nur mit kleinen Datensätzen",
                  "nl": "Fine-tuning werkt alleen met kleine datasets"
        },
        {
                  "en": "They are exactly the same approach",
                  "es": "Son exactamente el mismo enfoque",
                  "de": "Sie sind genau derselbe Ansatz",
                  "nl": "Ze zijn precies dezelfde aanpak"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Feature extraction uses pre-trained CNN layers as fixed feature extractors, only training the final classifier. Fine-tuning allows gradual updates to pre-trained weights, adapting the entire network to the new task.",
                  "es": "La extracción de características usa capas CNN pre-entrenadas como extractores de características fijos, solo entrenando el clasificador final. El ajuste fino permite actualizaciones graduales a pesos pre-entrenados, adaptando toda la red a la nueva tarea.",
                  "de": "Feature Extraction verwendet vortrainierte CNN-Schichten als feste Feature-Extraktoren, trainiert nur den finalen Klassifizierer. Fine-Tuning ermöglicht graduelle Updates vortrainierter Gewichte, passt das gesamte Netzwerk an die neue Aufgabe an.",
                  "nl": "Feature extractie gebruikt voorgetrainde CNN lagen als vaste feature extractors, traint alleen de finale classifier. Fine-tuning staat geleidelijke updates van voorgetrainde gewichten toe, past het hele netwerk aan de nieuwe taak aan."
        }
      },
      {
        question: {
                  "en": "What is the role of dropout regularization in neural networks?",
                  "es": "¿Cuál es el papel de la regularización dropout en redes neuronales?",
                  "de": "Welche Rolle spielt Dropout-Regularisierung in neuronalen Netzwerken?",
                  "nl": "Wat is de rol van dropout regularisatie in neurale netwerken?"
        },
        options: [
        {
                  "en": "Randomly setting neurons to zero during training to prevent overfitting",
                  "es": "Establecer aleatoriamente neuronas en cero durante entrenamiento para prevenir sobreajuste",
                  "de": "Zufällig Neuronen auf Null setzen während Training um Overfitting zu verhindern",
                  "nl": "Willekeurig neuronen op nul zetten tijdens training om overfitting te voorkomen"
        },
        {
                  "en": "Removing training samples randomly",
                  "es": "Eliminar muestras de entrenamiento aleatoriamente",
                  "de": "Trainingsstichproben zufällig entfernen",
                  "nl": "Trainingsmonsters willekeurig verwijderen"
        },
        {
                  "en": "Dropping out poor performing layers",
                  "es": "Eliminar capas de bajo rendimiento",
                  "de": "Schlecht performende Schichten entfernen",
                  "nl": "Slecht presterende lagen weglaten"
        },
        {
                  "en": "Dropping network connections permanently",
                  "es": "Eliminar conexiones de red permanentemente",
                  "de": "Netzwerkverbindungen dauerhaft entfernen",
                  "nl": "Netwerkverbindingen permanent verwijderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dropout randomly disables a fraction of neurons during each training iteration, forcing the network to learn redundant representations and reducing dependence on specific neurons, thus preventing overfitting.",
                  "es": "Dropout desactiva aleatoriamente una fracción de neuronas durante cada iteración de entrenamiento, forzando a la red a aprender representaciones redundantes y reduciendo dependencia en neuronas específicas, previniendo así sobreajuste.",
                  "de": "Dropout deaktiviert zufällig einen Bruchteil von Neuronen während jeder Trainingsiteration, zwingt das Netzwerk redundante Repräsentationen zu lernen und reduziert Abhängigkeit von spezifischen Neuronen, verhindert so Overfitting.",
                  "nl": "Dropout schakelt willekeurig een fractie van neuronen uit tijdens elke trainingiteratie, dwingt het netwerk redundante representaties te leren en vermindert afhankelijkheid van specifieke neuronen, voorkomt zo overfitting."
        }
      },
      {
        question: {
                  "en": "What is the primary advantage of using pre-trained ImageNet weights?",
                  "es": "¿Cuál es la principal ventaja de usar pesos pre-entrenados de ImageNet?",
                  "de": "Was ist der Hauptvorteil der Verwendung vortrainierter ImageNet-Gewichte?",
                  "nl": "Wat is het hoofdvoordeel van het gebruik van voorgetrainde ImageNet gewichten?"
        },
        options: [
        {
                  "en": "They only work with natural images",
                  "es": "Solo funcionan con imágenes naturales",
                  "de": "Sie funktionieren nur mit natürlichen Bildern",
                  "nl": "Ze werken alleen met natuurlijke afbeeldingen"
        },
        {
                  "en": "Models have learned general visual features useful across many computer vision tasks",
                  "es": "Los modelos han aprendido características visuales generales útiles en muchas tareas de visión por computadora",
                  "de": "Modelle haben allgemeine visuelle Features gelernt die für viele Computer Vision Aufgaben nützlich sind",
                  "nl": "Modellen hebben algemene visuele kenmerken geleerd die nuttig zijn voor veel computer vision taken"
        },
        {
                  "en": "ImageNet weights are always more accurate",
                  "es": "Los pesos de ImageNet siempre son más precisos",
                  "de": "ImageNet-Gewichte sind immer genauer",
                  "nl": "ImageNet gewichten zijn altijd nauwkeuriger"
        },
        {
                  "en": "ImageNet models are smaller in size",
                  "es": "Los modelos ImageNet son más pequeños en tamaño",
                  "de": "ImageNet-Modelle sind kleiner in der Größe",
                  "nl": "ImageNet modellen zijn kleiner van omvang"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "ImageNet training on millions of diverse images teaches networks to extract fundamental visual features like edges, textures, and shapes that transfer well to specialized domains, even medical or satellite imagery.",
                  "es": "El entrenamiento en ImageNet con millones de imágenes diversas enseña a las redes a extraer características visuales fundamentales como bordes, texturas y formas que se transfieren bien a dominios especializados, incluso imágenes médicas o satelitales.",
                  "de": "ImageNet-Training auf Millionen vielfältiger Bilder lehrt Netzwerke fundamentale visuelle Features wie Kanten, Texturen und Formen zu extrahieren die sich gut auf spezialisierte Domänen übertragen, sogar medizinische oder Satellitenbilder.",
                  "nl": "ImageNet training op miljoenen diverse afbeeldingen leert netwerken fundamentele visuele kenmerken zoals randen, texturen en vormen te extraheren die goed overdragen naar gespecialiseerde domeinen, zelfs medische of satellietbeelden."
        }
      },
      {
        question: {
                  "en": "What is the exploding gradient problem and how is it typically addressed?",
                  "es": "¿Qué es el problema del gradiente explosivo y cómo se aborda típicamente?",
                  "de": "Was ist das Exploding Gradient Problem und wie wird es typischerweise adressiert?",
                  "nl": "Wat is het exploding gradient probleem en hoe wordt het typisch aangepakt?"
        },
        options: [
        {
                  "en": "Networks become too complex automatically",
                  "es": "Las redes se vuelven demasiado complejas automáticamente",
                  "de": "Netzwerke werden automatisch zu komplex",
                  "nl": "Netwerken worden automatisch te complex"
        },
        {
                  "en": "Training data becomes corrupted",
                  "es": "Los datos de entrenamiento se corrompen",
                  "de": "Trainingsdaten werden beschädigt",
                  "nl": "Trainingsdata raakt beschadigd"
        },
        {
                  "en": "Gradients become too large, addressed by gradient clipping or proper weight initialization",
                  "es": "Los gradientes se vuelven demasiado grandes, abordado por recorte de gradiente o inicialización adecuada de pesos",
                  "de": "Gradienten werden zu groß, adressiert durch Gradient Clipping oder ordnungsgemäße Gewichtsinitialisierung",
                  "nl": "Gradiënten worden te groot, aangepakt door gradient clipping of juiste gewichtinitialisatie"
        },
        {
                  "en": "Computer memory explodes during training",
                  "es": "La memoria de la computadora explota durante entrenamiento",
                  "de": "Computerspeicher explodiert während Training",
                  "nl": "Computergeheugen explodeert tijdens training"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Exploding gradients occur when gradients accumulate and become extremely large during backpropagation, causing unstable training. Gradient clipping limits gradient magnitude, while proper initialization prevents the problem.",
                  "es": "Los gradientes explosivos ocurren cuando los gradientes se acumulan y se vuelven extremadamente grandes durante la retropropagación, causando entrenamiento inestable. El recorte de gradiente limita la magnitud del gradiente, mientras la inicialización adecuada previene el problema.",
                  "de": "Explodierende Gradienten treten auf wenn sich Gradienten während Backpropagation akkumulieren und extrem groß werden, verursachen instabiles Training. Gradient Clipping begrenzt Gradientenmagnitude, während ordnungsgemäße Initialisierung das Problem verhindert.",
                  "nl": "Exploderende gradiënten treden op wanneer gradiënten accumuleren en extreem groot worden tijdens backpropagatie, veroorzaken instabiele training. Gradient clipping beperkt gradiëntmagnitude, terwijl juiste initialisatie het probleem voorkomt."
        }
      },
      {
        question: {
                  "en": "What is the purpose of learning rate scheduling in CNN training?",
                  "es": "¿Cuál es el propósito de la programación de tasa de aprendizaje en entrenamiento de CNN?",
                  "de": "Was ist der Zweck von Learning Rate Scheduling im CNN-Training?",
                  "nl": "Wat is het doel van learning rate scheduling bij CNN training?"
        },
        options: [
        {
                  "en": "Increasing learning rate continuously",
                  "es": "Aumentar la tasa de aprendizaje continuamente",
                  "de": "Lernrate kontinuierlich erhöhen",
                  "nl": "Leersnelheid continu verhogen"
        },
        {
                  "en": "Scheduling training sessions at specific times",
                  "es": "Programar sesiones de entrenamiento en horarios específicos",
                  "de": "Trainingssitzungen zu bestimmten Zeiten planen",
                  "nl": "Trainingssessies plannen op specifieke tijden"
        },
        {
                  "en": "Organizing learning materials systematically",
                  "es": "Organizar materiales de aprendizaje sistemáticamente",
                  "de": "Lernmaterialien systematisch organisieren",
                  "nl": "Leermateriaal systematisch organiseren"
        },
        {
                  "en": "Gradually reducing learning rate to fine-tune convergence and avoid overshooting minima",
                  "es": "Reducir gradualmente la tasa de aprendizaje para ajustar convergencia y evitar sobrepasar mínimos",
                  "de": "Lernrate allmählich reduzieren um Konvergenz feinabzustimmen und Überschreiten von Minima zu vermeiden",
                  "nl": "Geleidelijk leersnelheid verminderen om convergentie af te stemmen en overschrijden van minima te voorkomen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Learning rate scheduling starts with higher rates for rapid initial learning, then gradually decreases to allow fine-grained adjustments near convergence, preventing oscillation around optimal weights.",
                  "es": "La programación de tasa de aprendizaje comienza con tasas más altas para aprendizaje inicial rápido, luego disminuye gradualmente para permitir ajustes de grano fino cerca de convergencia, previniendo oscilación alrededor de pesos óptimos.",
                  "de": "Learning Rate Scheduling beginnt mit höheren Raten für schnelles anfängliches Lernen, reduziert dann allmählich um feinkörnige Anpassungen nahe Konvergenz zu ermöglichen, verhindert Oszillation um optimale Gewichte.",
                  "nl": "Learning rate scheduling begint met hogere snelheden voor snelle initiële learning, vermindert dan geleidelijk om fijnmazige aanpassingen nabij convergentie toe te staan, voorkomt oscillatie rond optimale gewichten."
        }
      },
      {
        question: {
                  "en": "What is the main benefit of using deeper CNN architectures?",
                  "es": "¿Cuál es el principal beneficio de usar arquitecturas CNN más profundas?",
                  "de": "Was ist der Hauptvorteil tieferer CNN-Architekturen?",
                  "nl": "Wat is het hoofdvoordeel van diepere CNN architecturen?"
        },
        options: [
        {
                  "en": "Always achieving higher accuracy",
                  "es": "Siempre lograr mayor precisión",
                  "de": "Immer höhere Genauigkeit erreichen",
                  "nl": "Altijd hogere nauwkeurigheid bereiken"
        },
        {
                  "en": "Processing larger input images only",
                  "es": "Procesar solo imágenes de entrada más grandes",
                  "de": "Nur größere Eingabebilder verarbeiten",
                  "nl": "Alleen grotere invoer afbeeldingen verwerken"
        },
        {
                  "en": "Learning increasingly complex and abstract feature representations",
                  "es": "Aprender representaciones de características cada vez más complejas y abstractas",
                  "de": "Zunehmend komplexe und abstrakte Feature-Repräsentationen lernen",
                  "nl": "Steeds complexere en abstractere feature representaties leren"
        },
        {
                  "en": "Reducing computational requirements",
                  "es": "Reducir requisitos computacionales",
                  "de": "Rechenanforderungen reduzieren",
                  "nl": "Computationele vereisten verminderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Deeper networks create hierarchical feature learning - early layers detect edges and textures, middle layers combine them into patterns, and deeper layers learn complex object parts and semantic concepts.",
                  "es": "Las redes más profundas crean aprendizaje jerárquico de características - capas tempranas detectan bordes y texturas, capas medias las combinan en patrones, y capas más profundas aprenden partes complejas de objetos y conceptos semánticos.",
                  "de": "Tiefere Netzwerke erstellen hierarchisches Feature-Lernen - frühe Schichten erkennen Kanten und Texturen, mittlere Schichten kombinieren sie zu Mustern, und tiefere Schichten lernen komplexe Objektteile und semantische Konzepte.",
                  "nl": "Diepere netwerken creëren hiërarchisch feature leren - vroege lagen detecteren randen en texturen, middelste lagen combineren ze tot patronen, en diepere lagen leren complexe objectonderdelen en semantische concepten."
        }
      },
      {
        question: {
                  "en": "What is curriculum learning in the context of computer vision training?",
                  "es": "¿Qué es el aprendizaje curricular en el contexto del entrenamiento de visión por computadora?",
                  "de": "Was ist Curriculum Learning im Kontext von Computer Vision Training?",
                  "nl": "Wat is curriculum learning in de context van computer vision training?"
        },
        options: [
        {
                  "en": "Training models progressively from easy to hard examples to improve learning efficiency",
                  "es": "Entrenar modelos progresivamente de ejemplos fáciles a difíciles para mejorar eficiencia de aprendizaje",
                  "de": "Modelle progressiv von einfachen zu schweren Beispielen trainieren um Lerneffizienz zu verbessern",
                  "nl": "Modellen progressief trainen van makkelijke naar moeilijke voorbeelden om leerefficiëntie te verbeteren"
        },
        {
                  "en": "Training networks in academic institutions",
                  "es": "Entrenar redes en instituciones académicas",
                  "de": "Netzwerke in akademischen Institutionen trainieren",
                  "nl": "Netwerken trainen in academische instellingen"
        },
        {
                  "en": "Learning only from textbook examples",
                  "es": "Aprender solo de ejemplos de libros de texto",
                  "de": "Nur aus Lehrbuchbeispielen lernen",
                  "nl": "Alleen leren van leerboekvoorbeelden"
        },
        {
                  "en": "Creating educational curricula for students",
                  "es": "Crear currículos educativos para estudiantes",
                  "de": "Bildungslehrpläne für Studenten erstellen",
                  "nl": "Educatieve curricula maken voor studenten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Curriculum learning mimics human learning by starting with simpler examples and gradually increasing difficulty, helping models build foundational understanding before tackling complex cases, often improving convergence and final performance.",
                  "es": "El aprendizaje curricular imita el aprendizaje humano comenzando con ejemplos más simples y aumentando gradualmente la dificultad, ayudando a modelos construir comprensión fundamental antes de abordar casos complejos, a menudo mejorando convergencia y rendimiento final.",
                  "de": "Curriculum Learning imitiert menschliches Lernen durch Beginnen mit einfacheren Beispielen und allmähliche Steigerung der Schwierigkeit, hilft Modellen fundamentales Verständnis aufzubauen bevor komplexe Fälle angegangen werden, verbessert oft Konvergenz und Endleistung.",
                  "nl": "Curriculum learning imiteert menselijk leren door te beginnen met eenvoudigere voorbeelden en geleidelijk moeilijkheid te verhogen, helpt modellen fundamenteel begrip op te bouwen voordat complexe gevallen worden aangepakt, verbetert vaak convergentie en eindprestaties."
        }
      },
      {
        question: {
                  "en": "What is knowledge distillation in deep learning?",
                  "es": "¿Qué es la destilación de conocimiento en aprendizaje profundo?",
                  "de": "Was ist Knowledge Distillation im Deep Learning?",
                  "nl": "Wat is knowledge distillation in deep learning?"
        },
        options: [
        {
                  "en": "Training a smaller student model to mimic the behavior of a larger teacher model",
                  "es": "Entrenar un modelo estudiante más pequeño para imitar el comportamiento de un modelo maestro más grande",
                  "de": "Ein kleineres Schüler-Modell trainieren um das Verhalten eines größeren Lehrer-Modells nachzuahmen",
                  "nl": "Een kleiner student model trainen om het gedrag van een groter leraar model na te bootsen"
        },
        {
                  "en": "Extracting pure knowledge from data",
                  "es": "Extraer conocimiento puro de los datos",
                  "de": "Reines Wissen aus Daten extrahieren",
                  "nl": "Zuivere kennis extraheren uit data"
        },
        {
                  "en": "Distilling learning algorithms chemically",
                  "es": "Destilar algoritmos de aprendizaje químicamente",
                  "de": "Lernalgorithmen chemisch destillieren",
                  "nl": "Leeralgoritmes chemisch distilleren"
        },
        {
                  "en": "Reducing dataset size systematically",
                  "es": "Reducir el tamaño del conjunto de datos sistemáticamente",
                  "de": "Datensatzgröße systematisch reduzieren",
                  "nl": "Dataset grootte systematisch verminderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Knowledge distillation transfers the learned representations from a complex teacher network to a simpler student network, enabling deployment of efficient models that retain much of the teacher's performance.",
                  "es": "La destilación de conocimiento transfiere las representaciones aprendidas de una red maestra compleja a una red estudiante más simple, permitiendo despliegue de modelos eficientes que retienen mucho del rendimiento del maestro.",
                  "de": "Knowledge Distillation überträgt gelernte Repräsentationen von einem komplexen Lehrer-Netzwerk zu einem einfacheren Schüler-Netzwerk, ermöglicht Deployment effizienter Modelle die viel der Lehrer-Performance beibehalten.",
                  "nl": "Knowledge distillation draagt geleerde representaties over van een complex leraar netwerk naar een eenvoudiger student netwerk, maakt deployment mogelijk van efficiënte modellen die veel van de leraar prestaties behouden."
        }
      },
      {
        question: {
                  "en": "What is the key innovation that Vision Transformers (ViTs) brought to computer vision?",
                  "es": "¿Cuál es la innovación clave que los Vision Transformers (ViTs) trajeron a la visión por computadora?",
                  "de": "Was ist die Schlüsselinnovation die Vision Transformers (ViTs) in Computer Vision brachten?",
                  "nl": "Wat is de belangrijkste innovatie die Vision Transformers (ViTs) naar computer vision brachten?"
        },
        options: [
        {
                  "en": "Using only pooling layers for feature extraction",
                  "es": "Usar solo capas de pooling para extracción de características",
                  "de": "Nur Pooling-Schichten für Feature-Extraktion verwenden",
                  "nl": "Alleen pooling lagen gebruiken voor feature extractie"
        },
        {
                  "en": "Applying self-attention mechanisms to image patches instead of using convolutions",
                  "es": "Aplicar mecanismos de auto-atención a parches de imagen en lugar de usar convoluciones",
                  "de": "Selbstaufmerksamkeitsmechanismen auf Bildpatches anwenden statt Konvolutionen zu verwenden",
                  "nl": "Zelf-aandacht mechanismen toepassen op beeldpatches in plaats van convoluties te gebruiken"
        },
        {
                  "en": "Eliminating all forms of attention mechanisms",
                  "es": "Eliminar todas las formas de mecanismos de atención",
                  "de": "Alle Formen von Aufmerksamkeitsmechanismen eliminieren",
                  "nl": "Alle vormen van aandachtsmechanismen elimineren"
        },
        {
                  "en": "Creating deeper convolutional networks",
                  "es": "Crear redes convolucionales más profundas",
                  "de": "Tiefere Konvolutionsnetzwerke erstellen",
                  "nl": "Diepere convolutionele netwerken maken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Vision Transformers treat images as sequences of patches and use self-attention to model relationships between patches, demonstrating that attention-based architectures can match or exceed CNN performance without convolutions.",
                  "es": "Los Vision Transformers tratan las imágenes como secuencias de parches y usan auto-atención para modelar relaciones entre parches, demostrando que arquitecturas basadas en atención pueden igualar o superar el rendimiento de CNN sin convoluciones.",
                  "de": "Vision Transformers behandeln Bilder als Sequenzen von Patches und verwenden Selbstaufmerksamkeit um Beziehungen zwischen Patches zu modellieren, demonstrieren dass aufmerksamkeitsbasierte Architekturen CNN-Leistung erreichen oder übertreffen können ohne Konvolutionen.",
                  "nl": "Vision Transformers behandelen afbeeldingen als sequenties van patches en gebruiken zelf-aandacht om relaties tussen patches te modelleren, tonen aan dat aandacht-gebaseerde architecturen CNN prestaties kunnen evenaren of overtreffen zonder convoluties."
        }
      },
      {
        question: {
                  "en": "What is multi-task learning in computer vision?",
                  "es": "¿Qué es el aprendizaje multi-tarea en visión por computadora?",
                  "de": "Was ist Multi-Task Learning in Computer Vision?",
                  "nl": "Wat is multi-task learning in computer vision?"
        },
        options: [
        {
                  "en": "Running multiple tasks on different computers",
                  "es": "Ejecutar múltiples tareas en diferentes computadoras",
                  "de": "Mehrere Aufgaben auf verschiedenen Computern ausführen",
                  "nl": "Meerdere taken uitvoeren op verschillende computers"
        },
        {
                  "en": "Training separate models for each task",
                  "es": "Entrenar modelos separados para cada tarea",
                  "de": "Separate Modelle für jede Aufgabe trainieren",
                  "nl": "Afzonderlijke modellen trainen voor elke taak"
        },
        {
                  "en": "Training a single model to perform multiple related tasks simultaneously",
                  "es": "Entrenar un solo modelo para realizar múltiples tareas relacionadas simultáneamente",
                  "de": "Ein einzelnes Modell trainieren um mehrere verwandte Aufgaben gleichzeitig durchzuführen",
                  "nl": "Een enkel model trainen om meerdere gerelateerde taken tegelijkertijd uit te voeren"
        },
        {
                  "en": "Learning to multitask efficiently",
                  "es": "Aprender a hacer multitarea eficientemente",
                  "de": "Lernen effizient Multitasking zu betreiben",
                  "nl": "Leren efficiënt multitasken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Multi-task learning shares representations across related tasks (e.g., detection + segmentation), leveraging commonalities to improve generalization and efficiency compared to training separate single-task models.",
                  "es": "El aprendizaje multi-tarea comparte representaciones a través de tareas relacionadas (ej., detección + segmentación), aprovechando similitudes para mejorar generalización y eficiencia comparado con entrenar modelos de tarea única separados.",
                  "de": "Multi-Task Learning teilt Repräsentationen über verwandte Aufgaben (z.B. Erkennung + Segmentierung), nutzt Gemeinsamkeiten um Generalisierung und Effizienz zu verbessern verglichen mit Training separater Einzelaufgaben-Modelle.",
                  "nl": "Multi-task learning deelt representaties over gerelateerde taken (bijv. detectie + segmentatie), benut overeenkomsten om generalisatie en efficiëntie te verbeteren vergeleken met training van afzonderlijke enkele-taak modellen."
        }
      },
      {
        question: {
                  "en": "What is active learning in computer vision?",
                  "es": "¿Qué es el aprendizaje activo en visión por computadora?",
                  "de": "Was ist Active Learning in Computer Vision?",
                  "nl": "Wat is actief leren in computer vision?"
        },
        options: [
        {
                  "en": "Learning while being physically active",
                  "es": "Aprender mientras se está físicamente activo",
                  "de": "Lernen während körperlich aktiv sein",
                  "nl": "Leren terwijl fysiek actief zijn"
        },
        {
                  "en": "Iteratively selecting most informative samples for labeling to maximize learning efficiency",
                  "es": "Seleccionar iterativamente las muestras más informativas para etiquetar para maximizar eficiencia de aprendizaje",
                  "de": "Iterativ die informativsten Proben zur Beschriftung auswählen um Lerneffizienz zu maximieren",
                  "nl": "Iteratief de meest informatieve samples selecteren voor labeling om leerefficiëntie te maximaliseren"
        },
        {
                  "en": "Training models that are actively running",
                  "es": "Entrenar modelos que están ejecutándose activamente",
                  "de": "Modelle trainieren die aktiv laufen",
                  "nl": "Modellen trainen die actief draaien"
        },
        {
                  "en": "Using active neurons only during training",
                  "es": "Usar solo neuronas activas durante entrenamiento",
                  "de": "Nur aktive Neuronen während Training verwenden",
                  "nl": "Alleen actieve neuronen gebruiken tijdens training"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Active learning strategically queries the most uncertain or informative unlabeled samples for annotation, reducing labeling costs by focusing human effort on examples that most improve the model.",
                  "es": "El aprendizaje activo consulta estratégicamente las muestras sin etiquetar más inciertas o informativas para anotación, reduciendo costos de etiquetado enfocando esfuerzo humano en ejemplos que más mejoran el modelo.",
                  "de": "Active Learning fragt strategisch die unsichersten oder informativsten unbeschrifteten Proben zur Annotation ab, reduziert Beschriftungskosten durch Fokussierung menschlicher Anstrengung auf Beispiele die das Modell am meisten verbessern.",
                  "nl": "Actief leren bevraagt strategisch de meest onzekere of informatieve ongelabelde samples voor annotatie, vermindert labelingskosten door menselijke inspanning te focussen op voorbeelden die het model het meest verbeteren."
        }
      },
      {
        question: {
                  "en": "What is the purpose of Generative Adversarial Networks (GANs) in computer vision?",
                  "es": "¿Cuál es el propósito de las Redes Adversarias Generativas (GANs) en visión por computadora?",
                  "de": "Was ist der Zweck von Generative Adversarial Networks (GANs) in Computer Vision?",
                  "nl": "Wat is het doel van Generative Adversarial Networks (GANs) in computer vision?"
        },
        options: [
        {
                  "en": "Generate network architectures automatically",
                  "es": "Generar arquitecturas de red automáticamente",
                  "de": "Netzwerkarchitekturen automatisch generieren",
                  "nl": "Netwerkarchitecturen automatisch genereren"
        },
        {
                  "en": "Adversarially compete with other networks",
                  "es": "Competir adversarialmente con otras redes",
                  "de": "Adversarial mit anderen Netzwerken konkurrieren",
                  "nl": "Adversarieel concurreren met andere netwerken"
        },
        {
                  "en": "Create adversarial examples to fool networks",
                  "es": "Crear ejemplos adversarios para engañar redes",
                  "de": "Adversariale Beispiele erstellen um Netzwerke zu täuschen",
                  "nl": "Adversarial voorbeelden maken om netwerken te misleiden"
        },
        {
                  "en": "Generate realistic synthetic images through adversarial training of generator and discriminator",
                  "es": "Generar imágenes sintéticas realistas mediante entrenamiento adversario de generador y discriminador",
                  "de": "Realistische synthetische Bilder durch adversariales Training von Generator und Diskriminator generieren",
                  "nl": "Realistische synthetische afbeeldingen genereren door adversarial training van generator en discriminator"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "GANs pit a generator (creating fake images) against a discriminator (distinguishing real from fake), iteratively improving both until the generator produces highly realistic images useful for data augmentation, synthesis, and creative applications.",
                  "es": "Las GANs enfrentan un generador (creando imágenes falsas) contra un discriminador (distinguiendo real de falso), mejorando iterativamente ambos hasta que el generador produce imágenes altamente realistas útiles para aumento de datos, síntesis y aplicaciones creativas.",
                  "de": "GANs stellen einen Generator (erstellt gefälschte Bilder) gegen einen Diskriminator (unterscheidet echt von gefälscht), verbessern iterativ beide bis der Generator hochrealistische Bilder produziert nützlich für Datenaugmentation, Synthese und kreative Anwendungen.",
                  "nl": "GANs zetten een generator (maakt nep afbeeldingen) tegen een discriminator (onderscheidt echt van nep), verbeteren iteratief beide totdat de generator zeer realistische afbeeldingen produceert nuttig voor data augmentatie, synthese en creatieve toepassingen."
        }
      },
      {
        question: {
                  "en": "What is the CycleGAN architecture used for?",
                  "es": "¿Para qué se usa la arquitectura CycleGAN?",
                  "de": "Wofür wird die CycleGAN-Architektur verwendet?",
                  "nl": "Waarvoor wordt de CycleGAN architectuur gebruikt?"
        },
        options: [
        {
                  "en": "Training GANs in cycles repeatedly",
                  "es": "Entrenar GANs en ciclos repetidamente",
                  "de": "GANs in Zyklen wiederholt trainieren",
                  "nl": "GANs in cycli herhaaldelijk trainen"
        },
        {
                  "en": "Cycling through different GAN architectures",
                  "es": "Alternar entre diferentes arquitecturas GAN",
                  "de": "Durch verschiedene GAN-Architekturen durchlaufen",
                  "nl": "Cyclen door verschillende GAN architecturen"
        },
        {
                  "en": "Unpaired image-to-image translation between domains without paired training data",
                  "es": "Traducción imagen-a-imagen no emparejada entre dominios sin datos de entrenamiento emparejados",
                  "de": "Ungepaarte Bild-zu-Bild-Übersetzung zwischen Domänen ohne gepaarte Trainingsdaten",
                  "nl": "Ongepaarde beeld-naar-beeld vertaling tussen domeinen zonder gepaarde trainingsdata"
        },
        {
                  "en": "Creating cyclical patterns in images",
                  "es": "Crear patrones cíclicos en imágenes",
                  "de": "Zyklische Muster in Bildern erstellen",
                  "nl": "Cyclische patronen maken in afbeeldingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "CycleGAN learns mappings between two domains (e.g., photos↔paintings, summer↔winter) without paired examples using cycle consistency loss, enabling style transfer and domain translation with unpaired datasets.",
                  "es": "CycleGAN aprende mapeos entre dos dominios (ej., fotos↔pinturas, verano↔invierno) sin ejemplos emparejados usando pérdida de consistencia cíclica, permitiendo transferencia de estilo y traducción de dominio con conjuntos de datos no emparejados.",
                  "de": "CycleGAN lernt Abbildungen zwischen zwei Domänen (z.B. Fotos↔Gemälde, Sommer↔Winter) ohne gepaarte Beispiele unter Verwendung von Zyklus-Konsistenzverlust, ermöglicht Stiltransfer und Domänenübersetzung mit ungepaarten Datensätzen.",
                  "nl": "CycleGAN leert mappings tussen twee domeinen (bijv. foto's↔schilderijen, zomer↔winter) zonder gepaarde voorbeelden met cycle consistency loss, maakt stijloverdracht en domeinvertaling mogelijk met ongepaarde datasets."
        }
      },
      {
        question: {
                  "en": "What is weakly supervised learning in computer vision?",
                  "es": "¿Qué es el aprendizaje débilmente supervisado en visión por computadora?",
                  "de": "Was ist schwach überwachtes Lernen in Computer Vision?",
                  "nl": "Wat is zwak gesuperviseerd leren in computer vision?"
        },
        options: [
        {
                  "en": "Supervised learning with low confidence",
                  "es": "Aprendizaje supervisado con baja confianza",
                  "de": "Überwachtes Lernen mit niedrigem Vertrauen",
                  "nl": "Supervised learning met laag vertrouwen"
        },
        {
                  "en": "Using weaker neural network architectures",
                  "es": "Usar arquitecturas de red neuronal más débiles",
                  "de": "Schwächere neuronale Netzwerkarchitekturen verwenden",
                  "nl": "Zwakkere neurale netwerkarchitecturen gebruiken"
        },
        {
                  "en": "Training with weak computational resources",
                  "es": "Entrenar con recursos computacionales débiles",
                  "de": "Training mit schwachen Rechenressourcen",
                  "nl": "Trainen met zwakke computationele bronnen"
        },
        {
                  "en": "Learning from incomplete, inexact, or inaccurate annotations instead of full pixel-level labels",
                  "es": "Aprender de anotaciones incompletas, inexactas o imprecisas en lugar de etiquetas completas a nivel de píxel",
                  "de": "Lernen von unvollständigen, ungenauen oder unkorrekten Annotationen statt vollständiger Pixel-Level-Labels",
                  "nl": "Leren van onvolledige, onnauwkeurige of onjuiste annotaties in plaats van volledige pixel-niveau labels"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Weakly supervised learning uses coarse annotations (image-level labels, bounding boxes, scribbles) instead of expensive dense labels, leveraging techniques to infer detailed predictions from limited supervision, reducing annotation costs.",
                  "es": "El aprendizaje débilmente supervisado usa anotaciones gruesas (etiquetas a nivel de imagen, cajas delimitadoras, garabatos) en lugar de etiquetas densas costosas, aprovechando técnicas para inferir predicciones detalladas de supervisión limitada, reduciendo costos de anotación.",
                  "de": "Schwach überwachtes Lernen verwendet grobe Annotationen (Bild-Level-Labels, Bounding Boxes, Kritzeleien) statt teurer dichter Labels, nutzt Techniken um detaillierte Vorhersagen aus begrenzter Überwachung zu folgern, reduziert Annotationskosten.",
                  "nl": "Zwak gesuperviseerd leren gebruikt grove annotaties (beeld-niveau labels, bounding boxes, krabbels) in plaats van dure dichte labels, benut technieken om gedetailleerde voorspellingen af te leiden uit beperkte supervisie, vermindert annotatiekosten."
        }
      },
      {
        question: {
                  "en": "What is 3D reconstruction from images?",
                  "es": "¿Qué es la reconstrucción 3D desde imágenes?",
                  "de": "Was ist 3D-Rekonstruktion aus Bildern?",
                  "nl": "Wat is 3D reconstructie uit afbeeldingen?"
        },
        options: [
        {
                  "en": "Building three-dimensional image databases",
                  "es": "Construir bases de datos de imágenes tridimensionales",
                  "de": "Dreidimensionale Bilddatenbanken aufbauen",
                  "nl": "Driedimensionale beelddatabases bouwen"
        },
        {
                  "en": "Estimating 3D geometry and structure from 2D image observations",
                  "es": "Estimar geometría y estructura 3D desde observaciones de imagen 2D",
                  "de": "3D-Geometrie und -Struktur aus 2D-Bildbeobachtungen schätzen",
                  "nl": "3D geometrie en structuur schatten uit 2D beeldobservaties"
        },
        {
                  "en": "Reconstructing damaged 3D objects",
                  "es": "Reconstruir objetos 3D dañados",
                  "de": "Beschädigte 3D-Objekte rekonstruieren",
                  "nl": "Beschadigde 3D objecten reconstrueren"
        },
        {
                  "en": "Converting 3D models to images",
                  "es": "Convertir modelos 3D a imágenes",
                  "de": "3D-Modelle in Bilder konvertieren",
                  "nl": "3D modellen converteren naar afbeeldingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "3D reconstruction infers depth, shape, and spatial relationships from multiple 2D views using techniques like structure-from-motion, multi-view stereo, or neural rendering, enabling applications in AR/VR, robotics, and scene understanding.",
                  "es": "La reconstrucción 3D infiere profundidad, forma y relaciones espaciales desde múltiples vistas 2D usando técnicas como structure-from-motion, estéreo multi-vista o renderizado neuronal, permitiendo aplicaciones en AR/VR, robótica y comprensión de escenas.",
                  "de": "3D-Rekonstruktion folgert Tiefe, Form und räumliche Beziehungen aus mehreren 2D-Ansichten unter Verwendung von Techniken wie Structure-from-Motion, Multi-View-Stereo oder neuronales Rendering, ermöglicht Anwendungen in AR/VR, Robotik und Szenenverständnis.",
                  "nl": "3D reconstructie leidt diepte, vorm en ruimtelijke relaties af uit meerdere 2D weergaven met technieken zoals structure-from-motion, multi-view stereo of neuraal rendering, maakt toepassingen mogelijk in AR/VR, robotica en scènebegrip."
        }
      },
      {
        question: {
                  "en": "What is Neural Radiance Fields (NeRF)?",
                  "es": "¿Qué son los Neural Radiance Fields (NeRF)?",
                  "de": "Was sind Neural Radiance Fields (NeRF)?",
                  "nl": "Wat zijn Neural Radiance Fields (NeRF)?"
        },
        options: [
        {
                  "en": "Radial feature extraction from images",
                  "es": "Extracción de características radiales de imágenes",
                  "de": "Radiale Feature-Extraktion aus Bildern",
                  "nl": "Radiale feature extractie uit afbeeldingen"
        },
        {
                  "en": "Representing 3D scenes as continuous volumetric functions learned by neural networks",
                  "es": "Representar escenas 3D como funciones volumétricas continuas aprendidas por redes neuronales",
                  "de": "3D-Szenen als kontinuierliche volumetrische Funktionen dargestellt gelernt von neuronalen Netzwerken",
                  "nl": "3D scènes representeren als continue volumetrische functies geleerd door neurale netwerken"
        },
        {
                  "en": "Network fields for neural processing",
                  "es": "Campos de red para procesamiento neuronal",
                  "de": "Netzwerkfelder für neuronale Verarbeitung",
                  "nl": "Netwerkvelden voor neurale verwerking"
        },
        {
                  "en": "Neural networks for detecting radiation fields",
                  "es": "Redes neuronales para detectar campos de radiación",
                  "de": "Neuronale Netzwerke zur Erkennung von Strahlungsfeldern",
                  "nl": "Neurale netwerken voor detectie van stralingsgebieden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "NeRF uses MLPs to map 3D coordinates to color and density, enabling photorealistic novel view synthesis through volumetric rendering from sparse input images, revolutionizing 3D scene representation.",
                  "es": "NeRF usa MLPs para mapear coordenadas 3D a color y densidad, permitiendo síntesis fotorrealista de vistas novedosas mediante renderizado volumétrico desde imágenes de entrada escasas, revolucionando representación de escenas 3D.",
                  "de": "NeRF verwendet MLPs um 3D-Koordinaten auf Farbe und Dichte abzubilden, ermöglicht fotorealistische neuartige Ansichtssynthese durch volumetrisches Rendering aus spärlichen Eingabebildern, revolutioniert 3D-Szenenrepräsentation.",
                  "nl": "NeRF gebruikt MLPs om 3D coördinaten te mappen naar kleur en dichtheid, maakt fotorealistische nieuwe weergavesynthese mogelijk door volumetrisch rendering uit schaarse invoer afbeeldingen, revolutioneert 3D scène representatie."
        }
      },
      {
        question: {
                  "en": "What is diffusion models' approach to image generation?",
                  "es": "¿Cuál es el enfoque de los modelos de difusión para generación de imágenes?",
                  "de": "Was ist der Ansatz von Diffusionsmodellen zur Bildgenerierung?",
                  "nl": "Wat is de benadering van diffusiemodellen voor beeldgeneratie?"
        },
        options: [
        {
                  "en": "Gradually denoising random noise into coherent images through iterative refinement",
                  "es": "Gradualmente eliminar ruido de ruido aleatorio en imágenes coherentes mediante refinamiento iterativo",
                  "de": "Allmählich zufälliges Rauschen in kohärente Bilder entrauschen durch iterative Verfeinerung",
                  "nl": "Geleidelijk willekeurige ruis ontruisen tot coherente afbeeldingen door iteratieve verfijning"
        },
        {
                  "en": "Diffusing style across image regions",
                  "es": "Difundir estilo a través de regiones de imagen",
                  "de": "Stil über Bildbereiche diffundieren",
                  "nl": "Stijl verspreiden over beeldregio's"
        },
        {
                  "en": "Spreading pixel values uniformly",
                  "es": "Distribuir valores de píxeles uniformemente",
                  "de": "Pixelwerte gleichmäßig verteilen",
                  "nl": "Pixelwaarden uniform verspreiden"
        },
        {
                  "en": "Diffusing images across multiple layers",
                  "es": "Difundir imágenes a través de múltiples capas",
                  "de": "Bilder über mehrere Schichten diffundieren",
                  "nl": "Afbeeldingen verspreiden over meerdere lagen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Diffusion models learn to reverse a noise-adding process, starting from pure noise and progressively removing it to generate high-quality images, offering stable training and impressive results in text-to-image generation.",
                  "es": "Los modelos de difusión aprenden a revertir un proceso de adición de ruido, comenzando desde ruido puro y eliminándolo progresivamente para generar imágenes de alta calidad, ofreciendo entrenamiento estable y resultados impresionantes en generación texto-a-imagen.",
                  "de": "Diffusionsmodelle lernen einen Rausch-Hinzufügungs-Prozess umzukehren, beginnend von purem Rauschen und progressiv entfernen um hochqualitative Bilder zu generieren, bieten stabiles Training und beeindruckende Ergebnisse in Text-zu-Bild-Generierung.",
                  "nl": "Diffusiemodellen leren een ruis-toevoegingsproces om te keren, beginnend vanaf pure ruis en progressief verwijderen om hoge-kwaliteit afbeeldingen te genereren, bieden stabiele training en indrukwekkende resultaten in tekst-naar-beeld generatie."
        }
      },
      {
        question: {
                  "en": "What is video action recognition?",
                  "es": "¿Qué es el reconocimiento de acción en video?",
                  "de": "Was ist Video-Aktionserkennung?",
                  "nl": "Wat is video actieherkenning?"
        },
        options: [
        {
                  "en": "Detecting action scenes in movies",
                  "es": "Detectar escenas de acción en películas",
                  "de": "Actionszenen in Filmen erkennen",
                  "nl": "Actiescènes detecteren in films"
        },
        {
                  "en": "Recognizing video file formats",
                  "es": "Reconocer formatos de archivo de video",
                  "de": "Videodateiformate erkennen",
                  "nl": "Video bestandsformaten herkennen"
        },
        {
                  "en": "Recording actions taken on videos",
                  "es": "Registrar acciones tomadas en videos",
                  "de": "Aktionen auf Videos aufzeichnen",
                  "nl": "Acties op video's registreren"
        },
        {
                  "en": "Classifying human activities and actions from video sequences",
                  "es": "Clasificar actividades y acciones humanas desde secuencias de video",
                  "de": "Menschliche Aktivitäten und Aktionen aus Videosequenzen klassifizieren",
                  "nl": "Menselijke activiteiten en acties classificeren uit videosequenties"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Action recognition analyzes temporal patterns in videos to classify activities like running, jumping, or cooking, using architectures like 3D CNNs, two-stream networks, or temporal transformers to capture motion dynamics.",
                  "es": "El reconocimiento de acción analiza patrones temporales en videos para clasificar actividades como correr, saltar o cocinar, usando arquitecturas como CNNs 3D, redes de dos flujos o transformadores temporales para capturar dinámicas de movimiento.",
                  "de": "Aktionserkennung analysiert zeitliche Muster in Videos um Aktivitäten wie Laufen, Springen oder Kochen zu klassifizieren, verwendet Architekturen wie 3D-CNNs, Zwei-Strom-Netzwerke oder temporale Transformers um Bewegungsdynamik zu erfassen.",
                  "nl": "Actieherkenning analyseert temporele patronen in video's om activiteiten zoals rennen, springen of koken te classificeren, gebruikt architecturen zoals 3D CNNs, twee-stroom netwerken of temporele transformers om bewegingsdynamiek vast te leggen."
        }
      },
      {
        question: {
                  "en": "What is object tracking in video?",
                  "es": "¿Qué es el seguimiento de objetos en video?",
                  "de": "Was ist Objektverfolgung in Video?",
                  "nl": "Wat is objectvolging in video?"
        },
        options: [
        {
                  "en": "Recording object trajectories manually",
                  "es": "Registrar trayectorias de objetos manualmente",
                  "de": "Objekttrajektorien manuell aufzeichnen",
                  "nl": "Objecttrajecten handmatig registreren"
        },
        {
                  "en": "Keeping track of video metadata",
                  "es": "Mantener registro de metadatos de video",
                  "de": "Video-Metadaten verfolgen",
                  "nl": "Video metadata bijhouden"
        },
        {
                  "en": "Tracking the number of objects in video",
                  "es": "Rastrear el número de objetos en video",
                  "de": "Anzahl der Objekte im Video verfolgen",
                  "nl": "Aantal objecten in video volgen"
        },
        {
                  "en": "Following specific objects across frames maintaining identity through motion and occlusions",
                  "es": "Seguir objetos específicos a través de fotogramas manteniendo identidad a través de movimiento y oclusiones",
                  "de": "Spezifische Objekte über Frames verfolgen Identität durch Bewegung und Verdeckungen beibehalten",
                  "nl": "Specifieke objecten volgen door frames heen identiteit behouden door beweging en occlusies"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Object tracking maintains consistent identities of detected objects across video frames, handling challenges like occlusions, appearance changes, and camera motion using techniques like Kalman filters, correlation filters, or Siamese networks.",
                  "es": "El seguimiento de objetos mantiene identidades consistentes de objetos detectados a través de fotogramas de video, manejando desafíos como oclusiones, cambios de apariencia y movimiento de cámara usando técnicas como filtros de Kalman, filtros de correlación o redes Siamesas.",
                  "de": "Objektverfolgung hält konsistente Identitäten erkannter Objekte über Video-Frames aufrecht, behandelt Herausforderungen wie Verdeckungen, Erscheinungsänderungen und Kamerabewegung unter Verwendung von Techniken wie Kalman-Filtern, Korrelationsfiltern oder Siamesischen Netzwerken.",
                  "nl": "Objectvolging handhaaft consistente identiteiten van gedetecteerde objecten door video frames, behandelt uitdagingen zoals occlusies, uiterlijkveranderingen en camerabeweging met technieken zoals Kalman filters, correlatie filters of Siamese netwerken."
        }
      },
      {
        question: {
                  "en": "What is pose estimation in computer vision?",
                  "es": "¿Qué es la estimación de pose en visión por computadora?",
                  "de": "Was ist Pose-Schätzung in Computer Vision?",
                  "nl": "Wat is pose schatting in computer vision?"
        },
        options: [
        {
                  "en": "Detecting people posing for cameras",
                  "es": "Detectar personas posando para cámaras",
                  "de": "Personen erkennen die für Kameras posieren",
                  "nl": "Mensen detecteren die poseren voor camera's"
        },
        {
                  "en": "Detecting and localizing body joints and skeletal keypoints in images or videos",
                  "es": "Detectar y localizar articulaciones del cuerpo y puntos clave esqueléticos en imágenes o videos",
                  "de": "Körpergelenke und skelettale Schlüsselpunkte in Bildern oder Videos erkennen und lokalisieren",
                  "nl": "Lichaamsgewrichten en skeletale keypoints detecteren en lokaliseren in afbeeldingen of video's"
        },
        {
                  "en": "Estimating camera positions only",
                  "es": "Estimar solo posiciones de cámara",
                  "de": "Nur Kamerapositionen schätzen",
                  "nl": "Alleen cameraposities schatten"
        },
        {
                  "en": "Estimating artistic poses in photographs",
                  "es": "Estimar poses artísticas en fotografías",
                  "de": "Künstlerische Posen in Fotografien schätzen",
                  "nl": "Artistieke poses schatten in foto's"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pose estimation localizes anatomical keypoints (shoulders, elbows, knees, etc.) to understand body configuration, enabling applications in sports analysis, animation, human-computer interaction, and activity recognition.",
                  "es": "La estimación de pose localiza puntos clave anatómicos (hombros, codos, rodillas, etc.) para entender configuración del cuerpo, permitiendo aplicaciones en análisis deportivo, animación, interacción humano-computadora y reconocimiento de actividades.",
                  "de": "Pose-Schätzung lokalisiert anatomische Schlüsselpunkte (Schultern, Ellbogen, Knie, etc.) um Körperkonfiguration zu verstehen, ermöglicht Anwendungen in Sportanalyse, Animation, Mensch-Computer-Interaktion und Aktivitätserkennung.",
                  "nl": "Pose schatting lokaliseert anatomische keypoints (schouders, ellebogen, knieën, etc.) om lichaamsconfiguratie te begrijpen, maakt toepassingen mogelijk in sportanalyse, animatie, mens-computer interactie en activiteitenherkenning."
        }
      },
      {
        question: {
                  "en": "What is face recognition versus face verification?",
                  "es": "¿Qué es el reconocimiento facial versus la verificación facial?",
                  "de": "Was ist Gesichtserkennung versus Gesichtsverifizierung?",
                  "nl": "Wat is gezichtsherkenning versus gezichtsverificatie?"
        },
        options: [
        {
                  "en": "Recognition identifies who someone is from database, verification confirms if two faces match",
                  "es": "Reconocimiento identifica quién es alguien desde base de datos, verificación confirma si dos rostros coinciden",
                  "de": "Erkennung identifiziert wer jemand ist aus Datenbank, Verifizierung bestätigt ob zwei Gesichter übereinstimmen",
                  "nl": "Herkenning identificeert wie iemand is uit database, verificatie bevestigt of twee gezichten overeenkomen"
        },
        {
                  "en": "Recognition is faster than verification",
                  "es": "Reconocimiento es más rápido que verificación",
                  "de": "Erkennung ist schneller als Verifizierung",
                  "nl": "Herkenning is sneller dan verificatie"
        },
        {
                  "en": "Verification uses higher resolution images",
                  "es": "Verificación usa imágenes de mayor resolución",
                  "de": "Verifizierung verwendet höherauflösende Bilder",
                  "nl": "Verificatie gebruikt hogere resolutie afbeeldingen"
        },
        {
                  "en": "They are exactly the same task",
                  "es": "Son exactamente la misma tarea",
                  "de": "Sie sind genau dieselbe Aufgabe",
                  "nl": "Ze zijn precies dezelfde taak"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Face verification is a 1:1 matching problem (is this person who they claim to be?), while face recognition is a 1:N identification problem (who is this person among N known individuals?), requiring different system designs.",
                  "es": "La verificación facial es un problema de coincidencia 1:1 (¿es esta persona quien dice ser?), mientras que el reconocimiento facial es un problema de identificación 1:N (¿quién es esta persona entre N individuos conocidos?), requiriendo diseños de sistema diferentes.",
                  "de": "Gesichtsverifizierung ist ein 1:1-Matching-Problem (ist diese Person wer sie vorgibt zu sein?), während Gesichtserkennung ein 1:N-Identifikationsproblem ist (wer ist diese Person unter N bekannten Individuen?), erfordert verschiedene Systemdesigns.",
                  "nl": "Gezichtsverificatie is een 1:1 matching probleem (is deze persoon wie ze beweren te zijn?), terwijl gezichtsherkenning een 1:N identificatie probleem is (wie is deze persoon onder N bekende individuen?), vereist verschillende systeemontwerpen."
        }
      },
      {
        question: {
                  "en": "What is the Siamese network architecture used for?",
                  "es": "¿Para qué se usa la arquitectura de red Siamesa?",
                  "de": "Wofür wird die Siamesische Netzwerkarchitektur verwendet?",
                  "nl": "Waarvoor wordt de Siamese netwerkarchitectuur gebruikt?"
        },
        options: [
        {
                  "en": "Processing Siamese cat images",
                  "es": "Procesar imágenes de gatos Siameses",
                  "de": "Siamesische Katzenbilder verarbeiten",
                  "nl": "Siamese kattenafbeeldingen verwerken"
        },
        {
                  "en": "Learning similarity metrics by comparing paired inputs through weight-shared networks",
                  "es": "Aprender métricas de similitud comparando entradas emparejadas a través de redes con pesos compartidos",
                  "de": "Ähnlichkeitsmetriken lernen durch Vergleich gepaarter Eingaben durch gewichtsteilende Netzwerke",
                  "nl": "Gelijkenis metrieken leren door gepaarde inputs te vergelijken via gewicht-gedeelde netwerken"
        },
        {
                  "en": "Connecting two separate networks",
                  "es": "Conectar dos redes separadas",
                  "de": "Zwei separate Netzwerke verbinden",
                  "nl": "Twee afzonderlijke netwerken verbinden"
        },
        {
                  "en": "Training twin networks independently",
                  "es": "Entrenar redes gemelas independientemente",
                  "de": "Zwillingsnetzwerke unabhängig trainieren",
                  "nl": "Tweelingnetwerken onafhankelijk trainen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Siamese networks use identical twin branches with shared weights to process two inputs, learning embeddings where similar inputs are close and dissimilar inputs are far apart, used in face verification, signature verification, and tracking.",
                  "es": "Las redes Siamesas usan ramas gemelas idénticas con pesos compartidos para procesar dos entradas, aprendiendo embeddings donde entradas similares están cerca y entradas diferentes están lejos, usadas en verificación facial, verificación de firma y seguimiento.",
                  "de": "Siamesische Netzwerke verwenden identische Zwillingszweige mit geteilten Gewichten um zwei Eingaben zu verarbeiten, lernen Embeddings wo ähnliche Eingaben nah und unähnliche Eingaben weit auseinander sind, verwendet in Gesichtsverifizierung, Signaturverifizierung und Tracking.",
                  "nl": "Siamese netwerken gebruiken identieke tweelingtakken met gedeelde gewichten om twee inputs te verwerken, leren embeddings waar vergelijkbare inputs dichtbij en ongelijke inputs ver uit elkaar zijn, gebruikt in gezichtsverificatie, handtekeningverificatie en tracking."
        }
      },
      {
        question: {
                  "en": "What is attention mechanism's role in Transformers?",
                  "es": "¿Cuál es el papel del mecanismo de atención en los Transformers?",
                  "de": "Was ist die Rolle des Aufmerksamkeitsmechanismus in Transformers?",
                  "nl": "Wat is de rol van het attention mechanisme in Transformers?"
        },
        options: [
        {
                  "en": "Reducing attention span of networks",
                  "es": "Reducir lapso de atención de redes",
                  "de": "Aufmerksamkeitsspanne von Netzwerken reduzieren",
                  "nl": "Aandachtsspanne van netwerken verminderen"
        },
        {
                  "en": "Focusing only on important pixels",
                  "es": "Enfocarse solo en píxeles importantes",
                  "de": "Nur auf wichtige Pixel fokussieren",
                  "nl": "Alleen focussen op belangrijke pixels"
        },
        {
                  "en": "Attending to training progress",
                  "es": "Atender al progreso de entrenamiento",
                  "de": "Auf Trainingsfortschritt achten",
                  "nl": "Letten op trainingvooruitgang"
        },
        {
                  "en": "Computing weighted relationships between all input elements simultaneously",
                  "es": "Calcular relaciones ponderadas entre todos los elementos de entrada simultáneamente",
                  "de": "Gewichtete Beziehungen zwischen allen Eingabeelementen gleichzeitig berechnen",
                  "nl": "Gewogen relaties berekenen tussen alle invoerelementen tegelijkertijd"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Self-attention computes query-key-value relationships allowing each position to attend to all other positions, capturing long-range dependencies and context more effectively than fixed-receptive-field convolutions.",
                  "es": "La auto-atención calcula relaciones consulta-clave-valor permitiendo que cada posición atienda a todas las demás posiciones, capturando dependencias y contexto de largo alcance más efectivamente que convoluciones de campo receptivo fijo.",
                  "de": "Selbstaufmerksamkeit berechnet Query-Key-Value-Beziehungen die jeder Position ermöglichen alle anderen Positionen zu beachten, erfasst Langstrecken-Abhängigkeiten und Kontext effektiver als Faltungen mit festem rezeptivem Feld.",
                  "nl": "Zelf-aandacht berekent query-key-value relaties waardoor elke positie alle andere posities kan bezoeken, legt lange-afstands afhankelijkheden en context effectiever vast dan convoluties met vast receptief veld."
        }
      },
      {
        question: {
                  "en": "What is the CLIP model architecture?",
                  "es": "¿Qué es la arquitectura del modelo CLIP?",
                  "de": "Was ist die CLIP-Modellarchitektur?",
                  "nl": "Wat is de CLIP model architectuur?"
        },
        options: [
        {
                  "en": "Clipping gradients during training",
                  "es": "Recortar gradientes durante entrenamiento",
                  "de": "Gradienten während Training clippen",
                  "nl": "Gradiënten clippen tijdens training"
        },
        {
                  "en": "Clipping image borders",
                  "es": "Recortar bordes de imagen",
                  "de": "Bildränder clippen",
                  "nl": "Beeldranden knippen"
        },
        {
                  "en": "Creating image clips from videos",
                  "es": "Crear clips de imagen desde videos",
                  "de": "Bildclips aus Videos erstellen",
                  "nl": "Beeldclips maken uit video's"
        },
        {
                  "en": "Jointly training image and text encoders to learn aligned multimodal representations",
                  "es": "Entrenar conjuntamente codificadores de imagen y texto para aprender representaciones multimodales alineadas",
                  "de": "Gemeinsam Bild- und Text-Encoder trainieren um ausgerichtete multimodale Repräsentationen zu lernen",
                  "nl": "Gezamenlijk beeld en tekst encoders trainen om uitgelijnde multimodale representaties te leren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "CLIP (Contrastive Language-Image Pre-training) learns visual concepts from natural language supervision by matching images with their textual descriptions, enabling zero-shot transfer to downstream vision tasks through text prompts.",
                  "es": "CLIP (Pre-entrenamiento Contrastivo Lenguaje-Imagen) aprende conceptos visuales de supervisión de lenguaje natural emparejando imágenes con sus descripciones textuales, permitiendo transferencia de cero ejemplos a tareas de visión posteriores mediante indicaciones de texto.",
                  "de": "CLIP (Contrastive Language-Image Pre-training) lernt visuelle Konzepte aus natürlicher Sprachüberwachung durch Matching von Bildern mit ihren Textbeschreibungen, ermöglicht Zero-Shot-Transfer zu nachgelagerten Vision-Aufgaben durch Text-Prompts.",
                  "nl": "CLIP (Contrastive Language-Image Pre-training) leert visuele concepten van natuurlijke taal supervisie door afbeeldingen te matchen met hun tekstuele beschrijvingen, maakt zero-shot transfer mogelijk naar downstream vision taken via tekst prompts."
        }
      },
      {
        question: {
                  "en": "What is mean teacher method in semi-supervised learning?",
                  "es": "¿Qué es el método de maestro promedio en aprendizaje semi-supervisado?",
                  "de": "Was ist die Mean Teacher Methode im semi-überwachten Lernen?",
                  "nl": "Wat is de mean teacher methode in semi-supervised learning?"
        },
        options: [
        {
                  "en": "Training with mean values only",
                  "es": "Entrenar solo con valores promedio",
                  "de": "Nur mit Mittelwerten trainieren",
                  "nl": "Alleen trainen met gemiddelde waarden"
        },
        {
                  "en": "Using exponential moving average of student model as teacher for consistency regularization",
                  "es": "Usar promedio móvil exponencial del modelo estudiante como maestro para regularización de consistencia",
                  "de": "Exponentieller gleitender Durchschnitt des Schüler-Modells als Lehrer für Konsistenz-Regularisierung verwenden",
                  "nl": "Exponentieel voortschrijdend gemiddelde van student model gebruiken als leraar voor consistentie regularisatie"
        },
        {
                  "en": "Teaching models average concepts",
                  "es": "Enseñar a modelos conceptos promedio",
                  "de": "Modellen durchschnittliche Konzepte beibringen",
                  "nl": "Modellen gemiddelde concepten leren"
        },
        {
                  "en": "Averaging predictions from multiple teachers",
                  "es": "Promediar predicciones de múltiples maestros",
                  "de": "Vorhersagen von mehreren Lehrern mitteln",
                  "nl": "Voorspellingen van meerdere leraren middelen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Mean teacher maintains a teacher model as exponential moving average of student weights, providing more stable targets for consistency loss on unlabeled data, improving semi-supervised learning performance.",
                  "es": "Mean teacher mantiene un modelo maestro como promedio móvil exponencial de pesos de estudiante, proporcionando objetivos más estables para pérdida de consistencia en datos sin etiquetar, mejorando rendimiento de aprendizaje semi-supervisado.",
                  "de": "Mean Teacher hält ein Lehrer-Modell als exponentiellen gleitenden Durchschnitt von Schüler-Gewichten, bietet stabilere Ziele für Konsistenzverlust auf unbeschrifteten Daten, verbessert semi-überwachte Lernleistung.",
                  "nl": "Mean teacher handhaaft een leraar model als exponentieel voortschrijdend gemiddelde van student gewichten, biedt stabielere doelen voor consistentie verlies op ongelabelde data, verbetert semi-supervised learning prestaties."
        }
      },
      {
        question: {
                  "en": "What is occlusion handling in computer vision?",
                  "es": "¿Qué es el manejo de oclusión en visión por computadora?",
                  "de": "Was ist Okklusionsbehandlung in Computer Vision?",
                  "nl": "Wat is occlusie behandeling in computer vision?"
        },
        options: [
        {
                  "en": "Occluding irrelevant regions",
                  "es": "Ocluir regiones irrelevantes",
                  "de": "Irrelevante Regionen okkludieren",
                  "nl": "Irrelevante regio's occluderen"
        },
        {
                  "en": "Closing openings in images",
                  "es": "Cerrar aperturas en imágenes",
                  "de": "Öffnungen in Bildern schließen",
                  "nl": "Openingen in afbeeldingen sluiten"
        },
        {
                  "en": "Handling occluded pixels only",
                  "es": "Manejar solo píxeles ocluidos",
                  "de": "Nur okkludierte Pixel behandeln",
                  "nl": "Alleen geoccludeerde pixels behandelen"
        },
        {
                  "en": "Dealing with partially hidden objects blocked by other objects or scene elements",
                  "es": "Lidiar con objetos parcialmente ocultos bloqueados por otros objetos o elementos de escena",
                  "de": "Umgang mit teilweise verdeckten Objekten blockiert durch andere Objekte oder Szenenelemente",
                  "nl": "Omgaan met gedeeltelijk verborgen objecten geblokkeerd door andere objecten of scène-elementen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Occlusion handling addresses challenges when objects are partially blocked from view, using techniques like part-based models, context reasoning, or temporal information in videos to infer complete object structure despite visibility limitations.",
                  "es": "El manejo de oclusión aborda desafíos cuando objetos están parcialmente bloqueados de la vista, usando técnicas como modelos basados en partes, razonamiento de contexto o información temporal en videos para inferir estructura completa de objeto a pesar de limitaciones de visibilidad.",
                  "de": "Okklusionsbehandlung adressiert Herausforderungen wenn Objekte teilweise von Sicht blockiert sind, verwendet Techniken wie teilbasierte Modelle, Kontextrasonieren oder temporale Information in Videos um vollständige Objektstruktur trotz Sichtbarkeitsbeschränkungen zu folgern.",
                  "nl": "Occlusie behandeling pakt uitdagingen aan wanneer objecten gedeeltelijk geblokkeerd zijn van zicht, gebruikt technieken zoals deel-gebaseerde modellen, context redenering of temporele informatie in video's om complete objectstructuur af te leiden ondanks zichtbaarheidsbeperkingen."
        }
      },
      {
        question: {
                  "en": "What is model compression in deep learning?",
                  "es": "¿Qué es la compresión de modelo en aprendizaje profundo?",
                  "de": "Was ist Modellkompression im Deep Learning?",
                  "nl": "Wat is modelcompressie in deep learning?"
        },
        options: [
        {
                  "en": "Reducing training time only",
                  "es": "Reducir solo tiempo de entrenamiento",
                  "de": "Nur Trainingszeit reduzieren",
                  "nl": "Alleen trainingstijd verminderen"
        },
        {
                  "en": "Storing models in compressed files",
                  "es": "Almacenar modelos en archivos comprimidos",
                  "de": "Modelle in komprimierten Dateien speichern",
                  "nl": "Modellen opslaan in gecomprimeerde bestanden"
        },
        {
                  "en": "Compressing images before model processing",
                  "es": "Comprimir imágenes antes del procesamiento del modelo",
                  "de": "Bilder vor Modellverarbeitung komprimieren",
                  "nl": "Afbeeldingen comprimeren voor modelverwerking"
        },
        {
                  "en": "Reducing model size and computational requirements while preserving performance",
                  "es": "Reducir tamaño de modelo y requisitos computacionales mientras se preserva rendimiento",
                  "de": "Modellgröße und Rechenanforderungen reduzieren während Leistung bewahrt wird",
                  "nl": "Modelgrootte en computationele vereisten verminderen terwijl prestaties behouden blijven"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Model compression uses techniques like pruning, quantization, knowledge distillation, and low-rank factorization to create smaller, faster models deployable on resource-constrained devices while maintaining acceptable accuracy.",
                  "es": "La compresión de modelo usa técnicas como poda, cuantización, destilación de conocimiento y factorización de bajo rango para crear modelos más pequeños y rápidos desplegables en dispositivos con recursos limitados mientras mantiene precisión aceptable.",
                  "de": "Modellkompression verwendet Techniken wie Pruning, Quantisierung, Knowledge Distillation und Niedrig-Rang-Faktorisierung um kleinere, schnellere Modelle zu erstellen die auf ressourcenbeschränkten Geräten einsetzbar sind während akzeptable Genauigkeit beibehalten wird.",
                  "nl": "Modelcompressie gebruikt technieken zoals pruning, kwantisatie, knowledge distillation en lage-rang factorisatie om kleinere, snellere modellen te maken implementeerbaar op apparaten met beperkte bronnen terwijl acceptabele nauwkeurigheid behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is test-time augmentation (TTA)?",
                  "es": "¿Qué es el aumento en tiempo de prueba (TTA)?",
                  "de": "Was ist Test-Time Augmentation (TTA)?",
                  "nl": "Wat is test-time augmentation (TTA)?"
        },
        options: [
        {
                  "en": "Testing augmentation techniques",
                  "es": "Probar técnicas de aumento",
                  "de": "Augmentationstechniken testen",
                  "nl": "Augmentatietechnieken testen"
        },
        {
                  "en": "Measuring time taken for augmentation",
                  "es": "Medir tiempo tomado para aumento",
                  "de": "Zeit für Augmentation messen",
                  "nl": "Tijd meten voor augmentatie"
        },
        {
                  "en": "Making predictions on multiple augmented versions of test samples and averaging results",
                  "es": "Hacer predicciones en múltiples versiones aumentadas de muestras de prueba y promediar resultados",
                  "de": "Vorhersagen auf mehreren augmentierten Versionen von Testproben machen und Ergebnisse mitteln",
                  "nl": "Voorspellingen maken op meerdere geaugmenteerde versies van testmonsters en resultaten middelen"
        },
        {
                  "en": "Augmenting only during testing phase",
                  "es": "Aumentar solo durante fase de prueba",
                  "de": "Nur während Testphase augmentieren",
                  "nl": "Alleen augmenteren tijdens testfase"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "TTA applies transformations (flips, rotations, crops) to test images, generates predictions for each variant, then aggregates results (typically averaging). This ensemble approach often improves accuracy at cost of inference time.",
                  "es": "TTA aplica transformaciones (volteos, rotaciones, recortes) a imágenes de prueba, genera predicciones para cada variante, luego agrega resultados (típicamente promediando). Este enfoque de ensamble a menudo mejora precisión a costa de tiempo de inferencia.",
                  "de": "TTA wendet Transformationen (Flips, Rotationen, Crops) auf Testbilder an, generiert Vorhersagen für jede Variante, aggregiert dann Ergebnisse (typischerweise Mittelung). Dieser Ensemble-Ansatz verbessert oft Genauigkeit auf Kosten der Inferenzzeit.",
                  "nl": "TTA past transformaties (flips, rotaties, crops) toe op testafbeeldingen, genereert voorspellingen voor elke variant, aggregeert dan resultaten (typisch middeling). Deze ensemble-aanpak verbetert vaak nauwkeurigheid ten koste van inferentietijd."
        }
      },
      {
        question: {
                  "en": "What is visual attention in computer vision models?",
                  "es": "¿Qué es la atención visual en modelos de visión por computadora?",
                  "de": "Was ist visuelle Aufmerksamkeit in Computer Vision Modellen?",
                  "nl": "Wat is visuele aandacht in computer vision modellen?"
        },
        options: [
        {
                  "en": "Looking at visual outputs carefully",
                  "es": "Mirar salidas visuales cuidadosamente",
                  "de": "Visuelle Ausgaben sorgfältig betrachten",
                  "nl": "Visuele outputs zorgvuldig bekijken"
        },
        {
                  "en": "Attention span of visual processors",
                  "es": "Lapso de atención de procesadores visuales",
                  "de": "Aufmerksamkeitsspanne visueller Prozessoren",
                  "nl": "Aandachtsspanne van visuele processors"
        },
        {
                  "en": "Mechanisms that weight different spatial regions or features based on their importance for the task",
                  "es": "Mecanismos que ponderan diferentes regiones espaciales o características basado en su importancia para la tarea",
                  "de": "Mechanismen die verschiedene räumliche Regionen oder Features basierend auf ihrer Wichtigkeit für die Aufgabe gewichten",
                  "nl": "Mechanismen die verschillende ruimtelijke regio's of features wegen op basis van hun belang voor de taak"
        },
        {
                  "en": "Making models pay attention during training",
                  "es": "Hacer que modelos presten atención durante entrenamiento",
                  "de": "Modelle während Training aufmerksam machen",
                  "nl": "Modellen aandacht laten besteden tijdens training"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Visual attention modules learn to emphasize informative regions while suppressing irrelevant areas, enabling models to focus computational resources on important features. Examples include SE blocks, CBAM, and spatial attention in transformers.",
                  "es": "Módulos de atención visual aprenden a enfatizar regiones informativas mientras suprimen áreas irrelevantes, permitiendo a modelos enfocar recursos computacionales en características importantes. Ejemplos incluyen bloques SE, CBAM y atención espacial en transformers.",
                  "de": "Visuelle Aufmerksamkeitsmodule lernen informative Regionen zu betonen während irrelevante Bereiche unterdrückt werden, ermöglichen Modellen Rechenressourcen auf wichtige Features zu fokussieren. Beispiele umfassen SE-Blöcke, CBAM und räumliche Aufmerksamkeit in Transformern.",
                  "nl": "Visuele aandachtsmodules leren informatieve regio's te benadrukken terwijl irrelevante gebieden onderdrukt worden, stellen modellen in staat computationele resources te focussen op belangrijke features. Voorbeelden omvatten SE blocks, CBAM en ruimtelijke aandacht in transformers."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
})();