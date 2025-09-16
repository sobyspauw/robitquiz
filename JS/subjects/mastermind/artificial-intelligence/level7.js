// Artificial Intelligence - Level 7: Computer Vision
(function() {
  const level7 = {
    name: {
      en: "Computer Vision",
      es: "Visión por Computador",
      de: "Computer Vision",
      nl: "Computer Vision"
    },
    questions: [
      {
        question: {
          en: "What is the primary purpose of convolutional layers in computer vision models?",
          es: "¿Cuál es el propósito principal de las capas convolucionales en los modelos de visión por computador?",
          de: "Was ist der Hauptzweck von Faltungsschichten in Computer Vision Modellen?",
          nl: "Wat is het primaire doel van convolutielagen in computer vision modellen?"
        },
        options: [
          { en: "Extract spatial features through local pattern detection", es: "Extraer características espaciales a través de detección de patrones locales", de: "Räumliche Merkmale durch lokale Mustererkennung extrahieren", nl: "Ruimtelijke kenmerken extraheren door lokale patroondetectie" },
          { en: "Reduce computational complexity", es: "Reducir complejidad computacional", de: "Rechenkomplexität reduzieren", nl: "Computationele complexiteit verminderen" },
          { en: "Increase image resolution", es: "Aumentar resolución de imagen", de: "Bildauflösung erhöhen", nl: "Beeldresolutie verhogen" },
          { en: "Compress image data", es: "Comprimir datos de imagen", de: "Bilddaten komprimieren", nl: "Beelddata comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "Convolutional layers apply learned filters across image regions to detect local features like edges, textures, and patterns. The spatial locality and parameter sharing properties make them ideal for processing visual data.",
          es: "Las capas convolucionales aplican filtros aprendidos a través de regiones de imagen para detectar características locales como bordes, texturas y patrones. Las propiedades de localidad espacial y compartición de parámetros las hacen ideales para procesar datos visuales.",
          de: "Faltungsschichten wenden gelernte Filter über Bildbereiche an, um lokale Merkmale wie Kanten, Texturen und Muster zu erkennen. Die räumliche Lokalität und Parameter-Sharing-Eigenschaften machen sie ideal für die Verarbeitung visueller Daten.",
          nl: "Convolutielagen passen geleerde filters toe over beeldregio's om lokale kenmerken zoals randen, texturen en patronen te detecteren. De ruimtelijke lokaliteit en parameter-delingeigenschappen maken ze ideaal voor het verwerken van visuele data."
        }
      },
      {
        question: {
          en: "What is the main challenge that object detection addresses compared to image classification?",
          es: "¿Cuál es el principal desafío que aborda la detección de objetos comparado con la clasificación de imágenes?",
          de: "Was ist die Hauptherausforderung, die Objekterkennung im Vergleich zur Bildklassifikation angeht?",
          nl: "Wat is de belangrijkste uitdaging die objectdetectie aanpakt vergeleken met beeldclassificatie?"
        },
        options: [
          { en: "Locate and classify multiple objects simultaneously within images", es: "Localizar y clasificar múltiples objetos simultáneamente dentro de imágenes", de: "Mehrere Objekte gleichzeitig in Bildern lokalisieren und klassifizieren", nl: "Meerdere objecten tegelijkertijd lokaliseren en classificeren binnen beelden" },
          { en: "Process higher resolution images", es: "Procesar imágenes de mayor resolución", de: "Bilder mit höherer Auflösung verarbeiten", nl: "Beelden met hogere resolutie verwerken" },
          { en: "Reduce training time significantly", es: "Reducir significativamente el tiempo de entrenamiento", de: "Trainingszeit erheblich reduzieren", nl: "Trainingstijd aanzienlijk verminderen" },
          { en: "Work with grayscale images only", es: "Trabajar solo con imágenes en escala de grises", de: "Nur mit Graustufenbildern arbeiten", nl: "Werken met alleen grijswaardenbeelden" }
        ],
        correct: 0,
        explanation: {
          en: "Object detection must both classify what objects are present and determine their precise locations within the image using bounding boxes or segmentation masks, making it more complex than simple image classification.",
          es: "La detección de objetos debe tanto clasificar qué objetos están presentes como determinar sus ubicaciones precisas dentro de la imagen usando cajas delimitadoras o máscaras de segmentación, haciéndola más compleja que la clasificación simple de imágenes.",
          de: "Objekterkennung muss sowohl klassifizieren, welche Objekte vorhanden sind, als auch ihre genauen Positionen im Bild durch Begrenzungsrahmen oder Segmentierungsmasken bestimmen, was sie komplexer als einfache Bildklassifikation macht.",
          nl: "Objectdetectie moet zowel classificeren welke objecten aanwezig zijn als hun precieze locaties binnen het beeld bepalen met behulp van bounding boxes of segmentatiemaskers, waardoor het complexer is dan eenvoudige beeldclassificatie."
        }
      },
      {
        question: {
          en: "What is the key innovation of YOLO (You Only Look Once) in real-time object detection?",
          es: "¿Cuál es la innovación clave de YOLO (You Only Look Once) en detección de objetos en tiempo real?",
          de: "Was ist die Schlüsselinnovation von YOLO (You Only Look Once) in der Echtzeit-Objekterkennung?",
          nl: "Wat is de belangrijkste innovatie van YOLO (You Only Look Once) in real-time objectdetectie?"
        },
        options: [
          { en: "Single forward pass for both classification and localization", es: "Pase único hacia adelante para clasificación y localización", de: "Einzelner Vorwärtspass für sowohl Klassifikation als auch Lokalisierung", nl: "Enkele voorwaartse doorgang voor zowel classificatie als lokalisatie" },
          { en: "Uses multiple neural networks in parallel", es: "Usa múltiples redes neuronales en paralelo", de: "Verwendet mehrere neuronale Netzwerke parallel", nl: "Gebruikt meerdere neurale netwerken parallel" },
          { en: "Requires pre-computed region proposals", es: "Requiere propuestas de región pre-computadas", de: "Benötigt vorberechnete Regionsvorschläge", nl: "Vereist vooraf berekende regiovoorstellen" },
          { en: "Works only with square images", es: "Funciona solo con imágenes cuadradas", de: "Funktioniert nur mit quadratischen Bildern", nl: "Werkt alleen met vierkante beelden" }
        ],
        correct: 0,
        explanation: {
          en: "YOLO revolutionized object detection by treating it as a single regression problem, processing the entire image in one forward pass to simultaneously predict bounding boxes and class probabilities, enabling real-time performance.",
          es: "YOLO revolucionó la detección de objetos al tratarla como un solo problema de regresión, procesando toda la imagen en un pase hacia adelante para simultáneamente predecir cajas delimitadoras y probabilidades de clase, habilitando rendimiento en tiempo real.",
          de: "YOLO revolutionierte die Objekterkennung, indem es sie als ein einziges Regressionsproblem behandelte, das gesamte Bild in einem Vorwärtspass verarbeitete, um gleichzeitig Begrenzungsrahmen und Klassenwahrscheinlichkeiten vorherzusagen, wodurch Echtzeitleistung ermöglicht wurde.",
          nl: "YOLO revolutioneerde objectdetectie door het te behandelen als een enkel regressieprobleem, waarbij het hele beeld in één voorwaartse doorgang wordt verwerkt om tegelijkertijd bounding boxes en klaswaarschijnlijkheden te voorspellen, waardoor real-time prestaties mogelijk werden."
        }
      },
      {
        question: {
          en: "What is the primary function of pooling layers in CNNs for computer vision?",
          es: "¿Cuál es la función principal de las capas de pooling en las CNN para visión por computador?",
          de: "Was ist die Hauptfunktion von Pooling-Schichten in CNNs für Computer Vision?",
          nl: "Wat is de primaire functie van pooling lagen in CNNs voor computer vision?"
        },
        options: [
          { en: "Reduce spatial dimensions while retaining important features", es: "Reducir dimensiones espaciales mientras se retienen características importantes", de: "Räumliche Dimensionen reduzieren unter Beibehaltung wichtiger Merkmale", nl: "Ruimtelijke dimensies verminderen terwijl belangrijke kenmerken behouden blijven" },
          { en: "Increase the number of feature maps", es: "Aumentar el número de mapas de características", de: "Anzahl der Merkmalskarten erhöhen", nl: "Het aantal feature maps verhogen" },
          { en: "Add non-linear activation", es: "Agregar activación no lineal", de: "Nichtlineare Aktivierung hinzufügen", nl: "Niet-lineaire activatie toevoegen" },
          { en: "Perform convolution operations", es: "Realizar operaciones de convolución", de: "Faltungsoperationen durchführen", nl: "Convolutie-operaties uitvoeren" }
        ],
        correct: 0,
        explanation: {
          en: "Pooling layers downsample feature maps by aggregating values in local neighborhoods, reducing computational load and memory requirements while making the network more robust to small translations and providing translation invariance.",
          es: "Las capas de pooling submuestrean mapas de características agregando valores en vecindarios locales, reduciendo carga computacional y requisitos de memoria mientras hacen la red más robusta a pequeñas traslaciones y proporcionan invariancia a traslación.",
          de: "Pooling-Schichten verkleinern Merkmalskarten durch Aggregation von Werten in lokalen Nachbarschaften, reduzieren Rechenlast und Speicheranforderungen, während sie das Netzwerk robuster gegenüber kleinen Verschiebungen machen und Verschiebungsinvarianz bieten.",
          nl: "Pooling lagen verkleinen feature maps door waarden in lokale buurten te aggregeren, waarbij computationele belasting en geheugenvereisten worden verminderd terwijl het netwerk robuuster wordt tegen kleine verplaatsingen en translatie-invariantie wordt geboden."
        }
      },
      {
        question: {
          en: "What is the main advantage of transfer learning in computer vision tasks?",
          es: "¿Cuál es la principal ventaja del aprendizaje por transferencia en tareas de visión por computador?",
          de: "Was ist der Hauptvorteil von Transfer Learning in Computer Vision Aufgaben?",
          nl: "Wat is het belangrijkste voordeel van transfer learning in computer vision taken?"
        },
        options: [
          { en: "Leverage pre-trained features from large datasets for new visual tasks", es: "Aprovechar características preentrenadas de grandes conjuntos de datos para nuevas tareas visuales", de: "Vortrainierte Merkmale aus großen Datensätzen für neue visuelle Aufgaben nutzen", nl: "Vooraf getrainde kenmerken van grote datasets benutten voor nieuwe visuele taken" },
          { en: "Eliminate need for data augmentation", es: "Eliminar necesidad de aumento de datos", de: "Notwendigkeit der Datenaugmentation eliminieren", nl: "Behoefte aan data-augmentatie elimineren" },
          { en: "Reduce image resolution requirements", es: "Reducir requisitos de resolución de imagen", de: "Bildauflösungsanforderungen reduzieren", nl: "Beeldresolutievereisten verminderen" },
          { en: "Work only with grayscale images", es: "Trabajar solo con imágenes en escala de grises", de: "Nur mit Graustufenbildern arbeiten", nl: "Werken alleen met grijswaardenbeelden" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning allows models pre-trained on large image datasets (like ImageNet) to be fine-tuned for specific vision tasks, leveraging learned low-level features like edges and textures that generalize across different visual domains.",
          es: "El aprendizaje por transferencia permite que modelos preentrenados en grandes conjuntos de datos de imágenes (como ImageNet) sean ajustados finamente para tareas específicas de visión, aprovechando características de bajo nivel aprendidas como bordes y texturas que se generalizan a través de diferentes dominios visuales.",
          de: "Transfer Learning ermöglicht es, auf großen Bilddatensätzen (wie ImageNet) vortrainierte Modelle für spezifische Vision-Aufgaben zu fine-tunen, wobei gelernte Low-Level-Merkmale wie Kanten und Texturen genutzt werden, die sich über verschiedene visuelle Domänen generalisieren lassen.",
          nl: "Transfer learning stelt modellen die vooraf getraind zijn op grote beelddatasets (zoals ImageNet) in staat om fijn afgesteld te worden voor specifieke vision taken, waarbij geleerde low-level kenmerken zoals randen en texturen worden benut die generaliseren over verschillende visuele domeinen."
        }
      },
      {
        question: {
          en: "What is the key concept behind semantic segmentation in computer vision?",
          es: "¿Cuál es el concepto clave detrás de la segmentación semántica en visión por computador?",
          de: "Was ist das Schlüsselkonzept hinter semantischer Segmentierung in Computer Vision?",
          nl: "Wat is het belangrijkste concept achter semantische segmentatie in computer vision?"
        },
        options: [
          { en: "Classify each pixel in the image according to object categories", es: "Clasificar cada píxel en la imagen según categorías de objetos", de: "Jedes Pixel im Bild nach Objektkategorien klassifizieren", nl: "Elke pixel in het beeld classificeren volgens objectcategorieën" },
          { en: "Detect object boundaries only", es: "Detectar solo límites de objetos", de: "Nur Objektgrenzen erkennen", nl: "Alleen objectgrenzen detecteren" },
          { en: "Reduce image noise", es: "Reducir ruido de imagen", de: "Bildrauschen reduzieren", nl: "Beeldruis verminderen" },
          { en: "Compress image data", es: "Comprimir datos de imagen", de: "Bilddaten komprimieren", nl: "Beelddata comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "Semantic segmentation assigns a class label to every pixel in an image, creating dense predictions that identify which object category each pixel belongs to, enabling precise understanding of scene composition.",
          es: "La segmentación semántica asigna una etiqueta de clase a cada píxel en una imagen, creando predicciones densas que identifican a qué categoría de objeto pertenece cada píxel, habilitando comprensión precisa de la composición de escena.",
          de: "Semantische Segmentierung weist jedem Pixel in einem Bild eine Klassenlabel zu, erstellt dichte Vorhersagen, die identifizieren, zu welcher Objektkategorie jedes Pixel gehört, wodurch präzises Verständnis der Szenenzusammensetzung ermöglicht wird.",
          nl: "Semantische segmentatie wijst een klaslabel toe aan elke pixel in een beeld, waarbij dichte voorspellingen worden gecreëerd die identificeren tot welke objectcategorie elke pixel behoort, waardoor nauwkeurig begrip van scènesamenstelling mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the primary innovation of Vision Transformers (ViTs) in computer vision?",
          es: "¿Cuál es la principal innovación de los Vision Transformers (ViT) en visión por computador?",
          de: "Was ist die Hauptinnovation der Vision Transformers (ViTs) in Computer Vision?",
          nl: "Wat is de primaire innovatie van Vision Transformers (ViTs) in computer vision?"
        },
        options: [
          { en: "Apply transformer architecture to image patches as sequence tokens", es: "Aplicar arquitectura transformer a parches de imagen como tokens de secuencia", de: "Transformer-Architektur auf Bildpatches als Sequenz-Tokens anwenden", nl: "Transformer architectuur toepassen op beeldpatches als sequentietokens" },
          { en: "Use recurrent connections for image processing", es: "Usar conexiones recurrentes para procesamiento de imágenes", de: "Rekurrente Verbindungen für Bildverarbeitung verwenden", nl: "Recurrente verbindingen gebruiken voor beeldverwerking" },
          { en: "Eliminate the need for labeled data", es: "Eliminar la necesidad de datos etiquetados", de: "Notwendigkeit beschrifteter Daten eliminieren", nl: "Behoefte aan gelabelde data elimineren" },
          { en: "Process only black and white images", es: "Procesar solo imágenes en blanco y negro", de: "Nur Schwarz-Weiß-Bilder verarbeiten", nl: "Alleen zwart-wit beelden verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Vision Transformers treat images as sequences of patches, applying self-attention mechanisms from NLP to computer vision, demonstrating that convolutions are not always necessary for effective image understanding.",
          es: "Los Vision Transformers tratan las imágenes como secuencias de parches, aplicando mecanismos de auto-atención del NLP a la visión por computador, demostrando que las convoluciones no siempre son necesarias para comprensión efectiva de imágenes.",
          de: "Vision Transformers behandeln Bilder als Sequenzen von Patches und wenden Selbstaufmerksamkeitsmechanismen aus NLP auf Computer Vision an, wodurch gezeigt wird, dass Faltungen nicht immer für effektives Bildverständnis notwendig sind.",
          nl: "Vision Transformers behandelen beelden als sequenties van patches, waarbij zelf-aandacht mechanismen uit NLP worden toegepast op computer vision, waarmee wordt aangetoond dat convoluties niet altijd noodzakelijk zijn voor effectief beeldbegrip."
        }
      },
      {
        question: {
          en: "What is the main challenge addressed by Generative Adversarial Networks (GANs) in computer vision?",
          es: "¿Cuál es el principal desafío abordado por las Redes Generativas Adversariales (GAN) en visión por computador?",
          de: "Was ist die Hauptherausforderung, die Generative Adversarial Networks (GANs) in Computer Vision angehen?",
          nl: "Wat is de belangrijkste uitdaging die Generative Adversarial Networks (GANs) aanpakken in computer vision?"
        },
        options: [
          { en: "Generate realistic synthetic images through adversarial training", es: "Generar imágenes sintéticas realistas a través de entrenamiento adversarial", de: "Realistische synthetische Bilder durch adversariales Training generieren", nl: "Realistische synthetische beelden genereren door adversariële training" },
          { en: "Classify images with perfect accuracy", es: "Clasificar imágenes con precisión perfecta", de: "Bilder mit perfekter Genauigkeit klassifizieren", nl: "Beelden classificeren met perfecte nauwkeurigheid" },
          { en: "Compress images without loss", es: "Comprimir imágenes sin pérdida", de: "Bilder verlustfrei komprimieren", nl: "Beelden comprimeren zonder verlies" },
          { en: "Detect edges in images", es: "Detectar bordes en imágenes", de: "Kanten in Bildern erkennen", nl: "Randen in beelden detecteren" }
        ],
        correct: 0,
        explanation: {
          en: "GANs address image generation by training two networks in competition: a generator creates synthetic images while a discriminator tries to distinguish real from fake, resulting in increasingly realistic generated images.",
          es: "Las GAN abordan la generación de imágenes entrenando dos redes en competencia: un generador crea imágenes sintéticas mientras que un discriminador trata de distinguir lo real de lo falso, resultando en imágenes generadas cada vez más realistas.",
          de: "GANs gehen die Bildgenerierung an, indem sie zwei Netzwerke im Wettbewerb trainieren: ein Generator erstellt synthetische Bilder, während ein Diskriminator versucht, echte von gefälschten zu unterscheiden, was zu zunehmend realistischen generierten Bildern führt.",
          nl: "GANs pakken beeldgeneratie aan door twee netwerken in competitie te trainen: een generator creëert synthetische beelden terwijl een discriminator probeert echt van nep te onderscheiden, wat resulteert in steeds realistischere gegenereerde beelden."
        }
      },
      {
        question: {
          en: "What is the primary purpose of data augmentation in computer vision training?",
          es: "¿Cuál es el propósito principal del aumento de datos en el entrenamiento de visión por computador?",
          de: "Was ist der Hauptzweck der Datenaugmentation im Computer Vision Training?",
          nl: "Wat is het primaire doel van data-augmentatie in computer vision training?"
        },
        options: [
          { en: "Increase dataset diversity and improve model generalization", es: "Aumentar diversidad del conjunto de datos y mejorar generalización del modelo", de: "Datensatzvielfalt erhöhen und Modellgeneralisierung verbessern", nl: "Dataset diversiteit verhogen en modelgeneralisatie verbeteren" },
          { en: "Reduce training time", es: "Reducir tiempo de entrenamiento", de: "Trainingszeit reduzieren", nl: "Trainingstijd verminderen" },
          { en: "Compress image files", es: "Comprimir archivos de imagen", de: "Bilddateien komprimieren", nl: "Beeldbestanden comprimeren" },
          { en: "Increase image resolution", es: "Aumentar resolución de imagen", de: "Bildauflösung erhöhen", nl: "Beeldresolutie verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Data augmentation artificially increases training data variety through transformations like rotation, scaling, flipping, and color adjustments, helping models become more robust and reducing overfitting by exposing them to more diverse examples.",
          es: "El aumento de datos aumenta artificialmente la variedad de datos de entrenamiento a través de transformaciones como rotación, escalado, volteo y ajustes de color, ayudando a los modelos a volverse más robustos y reduciendo el sobreajuste al exponerlos a ejemplos más diversos.",
          de: "Datenaugmentation erhöht künstlich die Trainingsdatenvielfalt durch Transformationen wie Rotation, Skalierung, Spiegelung und Farbanpassungen, hilft Modellen robuster zu werden und reduziert Überanpassung, indem sie vielfältigeren Beispielen ausgesetzt werden.",
          nl: "Data-augmentatie verhoogt kunstmatig de trainingsdata variëteit door transformaties zoals rotatie, schaling, spiegeling en kleuaanpassingen, waardoor modellen robuuster worden en overfitting wordt verminderd door ze bloot te stellen aan meer diverse voorbeelden."
        }
      },
      {
        question: {
          en: "What is the key concept behind attention mechanisms in computer vision models?",
          es: "¿Cuál es el concepto clave detrás de los mecanismos de atención en los modelos de visión por computador?",
          de: "Was ist das Schlüsselkonzept hinter Aufmerksamkeitsmechanismen in Computer Vision Modellen?",
          nl: "Wat is het belangrijkste concept achter attention mechanismen in computer vision modellen?"
        },
        options: [
          { en: "Focus on relevant spatial regions when processing visual information", es: "Enfocarse en regiones espaciales relevantes al procesar información visual", de: "Fokus auf relevante räumliche Bereiche bei der Verarbeitung visueller Informationen", nl: "Focussen op relevante ruimtelijke regio's bij het verwerken van visuele informatie" },
          { en: "Reduce computational complexity", es: "Reducir complejidad computacional", de: "Rechenkomplexität reduzieren", nl: "Computationele complexiteit verminderen" },
          { en: "Increase image resolution", es: "Aumentar resolución de imagen", de: "Bildauflösung erhöhen", nl: "Beeldresolutie verhogen" },
          { en: "Compress visual data", es: "Comprimir datos visuales", de: "Visuelle Daten komprimieren", nl: "Visuele data comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms in computer vision allow models to dynamically focus on the most relevant parts of an image for a given task, improving performance by weighting different spatial locations based on their importance for the current prediction.",
          es: "Los mecanismos de atención en visión por computador permiten a los modelos enfocarse dinámicamente en las partes más relevantes de una imagen para una tarea dada, mejorando el rendimiento al ponderar diferentes ubicaciones espaciales basándose en su importancia para la predicción actual.",
          de: "Aufmerksamkeitsmechanismen in Computer Vision ermöglichen es Modellen, sich dynamisch auf die relevantesten Teile eines Bildes für eine gegebene Aufgabe zu konzentrieren, wodurch die Leistung verbessert wird, indem verschiedene räumliche Positionen basierend auf ihrer Wichtigkeit für die aktuelle Vorhersage gewichtet werden.",
          nl: "Attention mechanismen in computer vision stellen modellen in staat om dynamisch te focussen op de meest relevante delen van een beeld voor een gegeven taak, waarbij prestaties worden verbeterd door verschillende ruimtelijke locaties te wegen op basis van hun belang voor de huidige voorspelling."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/artificial-intelligence', level7);
  }
})();
