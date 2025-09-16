// Artificial Intelligence - Level 3: Advanced Deep Learning & Computer Vision
(function() {
  const level3 = {
    name: {
      en: "Advanced Deep Learning & Computer Vision",
      es: "Aprendizaje Profundo Avanzado y Visión por Computadora",
      de: "Fortgeschrittenes Deep Learning und Computer Vision",
      nl: "Geavanceerd Deep Learning en Computer Vision"
    },
    questions: [
      {
        question: {
          en: "What is the key innovation of ResNet (Residual Networks) architecture?",
          es: "¿Cuál es la innovación clave de la arquitectura ResNet (Redes Residuales)?",
          de: "Was ist die Schlüsselinnovation der ResNet (Residual Networks) Architektur?",
          nl: "Wat is de belangrijkste innovatie van de ResNet (Residual Networks) architectuur?"
        },
        options: [
          { en: "Skip connections that allow gradients to flow directly to earlier layers", es: "Conexiones de salto que permiten que los gradientes fluyan directamente a capas anteriores", de: "Skip-Verbindungen, die es Gradienten ermöglichen, direkt zu früheren Schichten zu fließen", nl: "Skip connections die gradiënten toestaan direct naar eerdere lagen te stromen" },
          { en: "Using only convolutional layers without pooling", es: "Usar solo capas convolucionales sin pooling", de: "Nur Faltungsschichten ohne Pooling verwenden", nl: "Alleen convolutielagen gebruiken zonder pooling" },
          { en: "Implementing variable learning rates per layer", es: "Implementar tasas de aprendizaje variables por capa", de: "Variable Lernraten pro Schicht implementieren", nl: "Variabele leersnelheden per laag implementeren" },
          { en: "Using recursive neural network structures", es: "Usar estructuras de redes neuronales recursivas", de: "Rekursive neuronale Netzwerkstrukturen verwenden", nl: "Recursieve neurale netwerkstructuren gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "ResNet introduces skip connections (residual connections) that allow information to bypass layers and flow directly to subsequent layers. This helps mitigate the vanishing gradient problem and enables training of much deeper networks.",
          es: "ResNet introduce conexiones de salto (conexiones residuales) que permiten que la información evite capas y fluya directamente a capas subsecuentes. Esto ayuda a mitigar el problema del gradiente que desaparece y permite el entrenamiento de redes mucho más profundas.",
          de: "ResNet führt Skip-Verbindungen (residuale Verbindungen) ein, die es Informationen ermöglichen, Schichten zu umgehen und direkt zu nachfolgenden Schichten zu fließen. Dies hilft, das Problem des verschwindenden Gradienten zu mildern und ermöglicht das Training viel tieferer Netzwerke.",
          nl: "ResNet introduceert skip connections (residuele verbindingen) die informatie toestaan om lagen te omzeilen en direct naar volgende lagen te stromen. Dit helpt het verdwijnende gradiënt probleem te verminderen en maakt training van veel diepere netwerken mogelijk."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind capsule networks?",
          es: "¿Cuál es el principio fundamental detrás de las redes de cápsulas?",
          de: "Was ist das grundlegende Prinzip hinter Kapsel-Netzwerken?",
          nl: "Wat is het fundamentele principe achter capsule networks?"
        },
        options: [
          { en: "Encoding spatial relationships and pose information using vector outputs", es: "Codificar relaciones espaciales e información de pose usando salidas vectoriales", de: "Räumliche Beziehungen und Positionsinformationen mit Vektorausgaben kodieren", nl: "Ruimtelijke relaties en pose informatie coderen met vector outputs" },
          { en: "Using only linear transformations without activation functions", es: "Usar solo transformaciones lineales sin funciones de activación", de: "Nur lineare Transformationen ohne Aktivierungsfunktionen verwenden", nl: "Alleen lineaire transformaties gebruiken zonder activatiefuncties" },
          { en: "Implementing memory-based learning mechanisms", es: "Implementar mecanismos de aprendizaje basados en memoria", de: "Gedächtnisbasierte Lernmechanismen implementieren", nl: "Geheugengebaseerde leermechanismen implementeren" },
          { en: "Reducing computational complexity through pruning", es: "Reducir la complejidad computacional mediante poda", de: "Rechenkomplexität durch Pruning reduzieren", nl: "Computationele complexiteit verminderen door pruning" }
        ],
        correct: 0,
        explanation: {
          en: "Capsule networks use vector outputs instead of scalar outputs to encode both the presence and instantiation parameters (pose, lighting, etc.) of features, better preserving spatial relationships and hierarchical structure in data.",
          es: "Las redes de cápsulas usan salidas vectoriales en lugar de salidas escalares para codificar tanto la presencia como los parámetros de instanciación (pose, iluminación, etc.) de características, preservando mejor las relaciones espaciales y la estructura jerárquica en los datos.",
          de: "Kapsel-Netzwerke verwenden Vektorausgaben anstelle von Skalarausgaben, um sowohl die Präsenz als auch die Instantiierungsparameter (Pose, Beleuchtung, etc.) von Merkmalen zu kodieren, wodurch räumliche Beziehungen und hierarchische Struktur in Daten besser erhalten bleiben.",
          nl: "Capsule networks gebruiken vector outputs in plaats van scalaire outputs om zowel de aanwezigheid als instantiatieparameters (pose, belichting, etc.) van features te coderen, waardoor ruimtelijke relaties en hiërarchische structuur in data beter behouden blijven."
        }
      },
      {
        question: {
          en: "What is the purpose of adversarial training in neural networks?",
          es: "¿Cuál es el propósito del entrenamiento adversarial en las redes neuronales?",
          de: "Was ist der Zweck des adversariellen Trainings in neuronalen Netzwerken?",
          nl: "Wat is het doel van adversarial training in neurale netwerken?"
        },
        options: [
          { en: "Improving robustness by training on intentionally perturbed examples", es: "Mejorar la robustez entrenando en ejemplos intencionalmente perturbados", de: "Robustheit durch Training auf absichtlich gestörten Beispielen verbessern", nl: "Robuustheid verbeteren door training op opzettelijk verstoorde voorbeelden" },
          { en: "Accelerating convergence by using competing loss functions", es: "Acelerar la convergencia usando funciones de pérdida competidoras", de: "Konvergenz durch konkurrierende Verlustfunktionen beschleunigen", nl: "Convergentie versnellen door concurrerende verliesfuncties te gebruiken" },
          { en: "Reducing overfitting through random weight initialization", es: "Reducir el sobreajuste mediante inicialización aleatoria de pesos", de: "Überanpassung durch zufällige Gewichtsinitialisierung reduzieren", nl: "Overfitting verminderen door willekeurige gewichtinitialisatie" },
          { en: "Implementing multi-task learning objectives", es: "Implementar objetivos de aprendizaje multitarea", de: "Multi-Task-Learning-Ziele implementieren", nl: "Multi-task learning doelstellingen implementeren" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial training involves training models on adversarially perturbed examples (inputs with small, carefully crafted perturbations) to improve robustness against adversarial attacks and increase generalization performance.",
          es: "El entrenamiento adversarial involucra entrenar modelos en ejemplos adversarialmente perturbados (entradas con pequeñas perturbaciones cuidadosamente elaboradas) para mejorar la robustez contra ataques adversariales y aumentar el rendimiento de generalización.",
          de: "Adversarielles Training beinhaltet das Training von Modellen auf adversariell gestörten Beispielen (Eingaben mit kleinen, sorgfältig gestalteten Störungen), um die Robustheit gegen adversarielle Angriffe zu verbessern und die Generalisierungsleistung zu erhöhen.",
          nl: "Adversarial training houdt in het trainen van modellen op adversarieel verstoorde voorbeelden (inputs met kleine, zorgvuldig vervaardigde verstoringen) om robuustheid tegen adversarial attacks te verbeteren en generalisatieprestaties te verhogen."
        }
      },
      {
        question: {
          en: "What is the key concept behind neural architecture search (NAS)?",
          es: "¿Cuál es el concepto clave detrás de la búsqueda de arquitectura neuronal (NAS)?",
          de: "Was ist das Schlüsselkonzept hinter Neural Architecture Search (NAS)?",
          nl: "Wat is het belangrijkste concept achter neural architecture search (NAS)?"
        },
        options: [
          { en: "Automatically discovering optimal neural network architectures through search algorithms", es: "Descubrir automáticamente arquitecturas de redes neuronales óptimas a través de algoritmos de búsqueda", de: "Automatisches Entdecken optimaler neuronaler Netzwerkarchitekturen durch Suchalgorithmen", nl: "Automatisch optimale neurale netwerkarchitecturen ontdekken door zoekalgoritmen" },
          { en: "Manually designing architectures based on domain expertise", es: "Diseñar manualmente arquitecturas basándose en experiencia del dominio", de: "Manuelles Entwerfen von Architekturen basierend auf Domänenexpertise", nl: "Handmatig architecturen ontwerpen gebaseerd op domeinexpertise" },
          { en: "Using pre-trained models without modification", es: "Usar modelos preentrenados sin modificación", de: "Vortrainierte Modelle ohne Modifikation verwenden", nl: "Voorgetrainde modellen gebruiken zonder wijziging" },
          { en: "Implementing fixed-depth neural networks", es: "Implementar redes neuronales de profundidad fija", de: "Neuronale Netzwerke mit fester Tiefe implementieren", nl: "Neurale netwerken met vaste diepte implementeren" }
        ],
        correct: 0,
        explanation: {
          en: "NAS uses automated search methods (reinforcement learning, evolutionary algorithms, or gradient-based methods) to discover neural network architectures that perform better than human-designed ones, often finding novel architectural patterns.",
          es: "NAS usa métodos de búsqueda automatizada (aprendizaje por refuerzo, algoritmos evolutivos o métodos basados en gradientes) para descubrir arquitecturas de redes neuronales que funcionan mejor que las diseñadas por humanos, a menudo encontrando patrones arquitectónicos novedosos.",
          de: "NAS verwendet automatisierte Suchmethoden (Reinforcement Learning, evolutionäre Algorithmen oder gradientenbasierte Methoden), um neuronale Netzwerkarchitekturen zu entdecken, die besser funktionieren als von Menschen entworfene, oft neuartige architektonische Muster findend.",
          nl: "NAS gebruikt geautomatiseerde zoekmethoden (reinforcement learning, evolutionaire algoritmen of gradient-gebaseerde methoden) om neurale netwerkarchitecturen te ontdekken die beter presteren dan door mensen ontworpen architecturen, vaak nieuwe architecturale patronen vindend."
        }
      },
      {
        question: {
          en: "What is the purpose of feature pyramid networks (FPN) in object detection?",
          es: "¿Cuál es el propósito de las redes de pirámide de características (FPN) en la detección de objetos?",
          de: "Was ist der Zweck von Feature Pyramid Networks (FPN) in der Objekterkennung?",
          nl: "Wat is het doel van feature pyramid networks (FPN) in objectdetectie?"
        },
        options: [
          { en: "Combining multi-scale features to detect objects of different sizes effectively", es: "Combinar características multiescala para detectar objetos de diferentes tamaños efectivamente", de: "Multi-Skala-Merkmale kombinieren, um Objekte verschiedener Größen effektiv zu erkennen", nl: "Multi-schaal features combineren om objecten van verschillende groottes effectief te detecteren" },
          { en: "Reducing computational complexity by using fewer layers", es: "Reducir la complejidad computacional usando menos capas", de: "Rechenkomplexität durch Verwendung weniger Schichten reduzieren", nl: "Computationele complexiteit verminderen door minder lagen te gebruiken" },
          { en: "Implementing attention mechanisms for better focus", es: "Implementar mecanismos de atención para mejor enfoque", de: "Aufmerksamkeitsmechanismen für besseren Fokus implementieren", nl: "Aandachtsmechanismen implementeren voor betere focus" },
          { en: "Converting 2D features to 3D representations", es: "Convertir características 2D a representaciones 3D", de: "2D-Merkmale in 3D-Darstellungen umwandeln", nl: "2D features omzetten naar 3D representaties" }
        ],
        correct: 0,
        explanation: {
          en: "FPN builds feature pyramids by combining low-resolution, semantically strong features with high-resolution, semantically weak features, enabling effective detection of objects at multiple scales within a single network.",
          es: "FPN construye pirámides de características combinando características de baja resolución y semánticamente fuertes con características de alta resolución y semánticamente débiles, permitiendo detección efectiva de objetos en múltiples escalas dentro de una sola red.",
          de: "FPN baut Feature-Pyramiden auf, indem es niedrigauflösende, semantisch starke Merkmale mit hochauflösenden, semantisch schwachen Merkmalen kombiniert, was eine effektive Erkennung von Objekten in mehreren Skalen innerhalb eines einzigen Netzwerks ermöglicht.",
          nl: "FPN bouwt feature pyramides door lage-resolutie, semantisch sterke features te combineren met hoge-resolutie, semantisch zwakke features, wat effectieve detectie van objecten op meerdere schalen binnen één netwerk mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the fundamental difference between one-stage and two-stage object detectors?",
          es: "¿Cuál es la diferencia fundamental entre detectores de objetos de una etapa y dos etapas?",
          de: "Was ist der grundlegende Unterschied zwischen einstufigen und zweistufigen Objektdetektoren?",
          nl: "Wat is het fundamentele verschil tussen eenfase en tweefase object detectors?"
        },
        options: [
          { en: "One-stage detectors predict classes and locations simultaneously, two-stage detectors first propose regions then classify", es: "Los detectores de una etapa predicen clases y ubicaciones simultáneamente, los de dos etapas primero proponen regiones luego clasifican", de: "Einstufige Detektoren sagen Klassen und Positionen gleichzeitig vorher, zweistufige Detektoren schlagen erst Regionen vor, dann klassifizieren sie", nl: "Eenfase detectors voorspellen klassen en locaties tegelijkertijd, tweefase detectors stellen eerst regio's voor en classificeren dan" },
          { en: "One-stage detectors work only with small images", es: "Los detectores de una etapa funcionan solo con imágenes pequeñas", de: "Einstufige Detektoren funktionieren nur mit kleinen Bildern", nl: "Eenfase detectors werken alleen met kleine afbeeldingen" },
          { en: "Two-stage detectors are always more accurate than one-stage", es: "Los detectores de dos etapas son siempre más precisos que los de una etapa", de: "Zweistufige Detektoren sind immer genauer als einstufige", nl: "Tweefase detectors zijn altijd nauwkeuriger dan eenfase" },
          { en: "One-stage detectors require more training data", es: "Los detectores de una etapa requieren más datos de entrenamiento", de: "Einstufige Detektoren benötigen mehr Trainingsdaten", nl: "Eenfase detectors vereisen meer trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "One-stage detectors (like YOLO, SSD) directly predict object classes and bounding box coordinates in a single forward pass. Two-stage detectors (like R-CNN family) first generate region proposals, then classify and refine these proposals.",
          es: "Los detectores de una etapa (como YOLO, SSD) predicen directamente clases de objetos y coordenadas de cajas delimitadoras en un solo pase hacia adelante. Los detectores de dos etapas (como la familia R-CNN) primero generan propuestas de regiones, luego clasifican y refinan estas propuestas.",
          de: "Einstufige Detektoren (wie YOLO, SSD) sagen Objektklassen und Begrenzungsrahmen-Koordinaten direkt in einem einzigen Vorwärtsdurchlauf vorher. Zweistufige Detektoren (wie die R-CNN-Familie) generieren erst Regionsvorschläge, dann klassifizieren und verfeinern sie diese Vorschläge.",
          nl: "Eenfase detectors (zoals YOLO, SSD) voorspellen direct objectklassen en bounding box coördinaten in één enkele forward pass. Tweefase detectors (zoals R-CNN familie) genereren eerst regio voorstellen, classificeren dan en verfijnen deze voorstellen."
        }
      },
      {
        question: {
          en: "What is the key innovation of Vision Transformers (ViTs) in computer vision?",
          es: "¿Cuál es la innovación clave de los Vision Transformers (ViTs) en visión por computadora?",
          de: "Was ist die Schlüsselinnovation von Vision Transformers (ViTs) in der Computer Vision?",
          nl: "Wat is de belangrijkste innovatie van Vision Transformers (ViTs) in computer vision?"
        },
        options: [
          { en: "Applying transformer architecture directly to image patches without convolutions", es: "Aplicar la arquitectura transformer directamente a parches de imagen sin convoluciones", de: "Transformer-Architektur direkt auf Bildpatches ohne Faltungen anwenden", nl: "Transformer architectuur direct toepassen op afbeeldingspatches zonder convoluties" },
          { en: "Using only recurrent connections for image processing", es: "Usar solo conexiones recurrentes para procesamiento de imágenes", de: "Nur rekurrente Verbindungen für Bildverarbeitung verwenden", nl: "Alleen recurrente verbindingen gebruiken voor beeldverwerking" },
          { en: "Implementing variable-size convolutional kernels", es: "Implementar núcleos convolucionales de tamaño variable", de: "Variable Faltungskerne implementieren", nl: "Variabele grootte convolutionele kernels implementeren" },
          { en: "Creating hierarchical feature representations automatically", es: "Crear representaciones de características jerárquicas automáticamente", de: "Hierarchische Merkmaldarstellungen automatisch erstellen", nl: "Hiërarchische feature representaties automatisch creëren" }
        ],
        correct: 0,
        explanation: {
          en: "ViTs treat images as sequences of patches, applying the transformer architecture (originally designed for NLP) directly to vision tasks, demonstrating that attention mechanisms alone can achieve competitive performance with CNNs.",
          es: "Los ViTs tratan las imágenes como secuencias de parches, aplicando la arquitectura transformer (originalmente diseñada para NLP) directamente a tareas de visión, demostrando que los mecanismos de atención solos pueden lograr rendimiento competitivo con las CNN.",
          de: "ViTs behandeln Bilder als Sequenzen von Patches und wenden die Transformer-Architektur (ursprünglich für NLP entwickelt) direkt auf Vision-Aufgaben an, wodurch gezeigt wird, dass Aufmerksamkeitsmechanismen allein eine wettbewerbsfähige Leistung mit CNNs erreichen können.",
          nl: "ViTs behandelen afbeeldingen als sequenties van patches, waarbij de transformer architectuur (oorspronkelijk ontworpen voor NLP) direct wordt toegepast op vision taken, wat aantoont dat aandachtsmechanismen alleen competitieve prestaties kunnen behalen met CNN's."
        }
      },
      {
        question: {
          en: "What is the primary advantage of using dilated (atrous) convolutions in semantic segmentation?",
          es: "¿Cuál es la ventaja principal de usar convoluciones dilatadas (atrous) en segmentación semántica?",
          de: "Was ist der Hauptvorteil der Verwendung von dilatierter (atrous) Faltung in der semantischen Segmentierung?",
          nl: "Wat is het hoofdvoordeel van het gebruik van dilated (atrous) convoluties in semantische segmentatie?"
        },
        options: [
          { en: "Increasing receptive field without losing spatial resolution or adding parameters", es: "Aumentar el campo receptivo sin perder resolución espacial o agregar parámetros", de: "Rezeptives Feld vergrößern ohne räumliche Auflösung zu verlieren oder Parameter hinzuzufügen", nl: "Receptief veld vergroten zonder ruimtelijke resolutie te verliezen of parameters toe te voegen" },
          { en: "Reducing computational complexity by skipping pixels", es: "Reducir la complejidad computacional saltando píxeles", de: "Rechenkomplexität durch Überspringen von Pixeln reduzieren", nl: "Computationele complexiteit verminderen door pixels over te slaan" },
          { en: "Implementing non-linear transformations more efficiently", es: "Implementar transformaciones no lineales más eficientemente", de: "Nichtlineare Transformationen effizienter implementieren", nl: "Niet-lineaire transformaties efficiënter implementeren" },
          { en: "Converting RGB images to grayscale automatically", es: "Convertir imágenes RGB a escala de grises automáticamente", de: "RGB-Bilder automatisch in Graustufen umwandeln", nl: "RGB afbeeldingen automatisch omzetten naar grijswaarden" }
        ],
        correct: 0,
        explanation: {
          en: "Dilated convolutions introduce gaps between kernel elements, allowing the network to capture larger receptive fields without downsampling or increasing the number of parameters, which is crucial for dense prediction tasks like semantic segmentation.",
          es: "Las convoluciones dilatadas introducen espacios entre elementos del núcleo, permitiendo a la red capturar campos receptivos más grandes sin submuestreo o aumentar el número de parámetros, lo que es crucial para tareas de predicción densa como segmentación semántica.",
          de: "Dilatierte Faltungen führen Lücken zwischen Kernelementen ein, wodurch das Netzwerk größere rezeptive Felder erfassen kann, ohne Downsampling oder Erhöhung der Parameteranzahl, was für dichte Vorhersageaufgaben wie semantische Segmentierung entscheidend ist.",
          nl: "Dilated convoluties introduceren gaten tussen kernel elementen, waardoor het netwerk grotere receptieve velden kan vastleggen zonder downsampling of het verhogen van het aantal parameters, wat cruciaal is voor dense voorspellingstaken zoals semantische segmentatie."
        }
      },
      {
        question: {
          en: "What is the concept of knowledge distillation in neural networks?",
          es: "¿Qué es el concepto de destilación de conocimiento en las redes neuronales?",
          de: "Was ist das Konzept der Wissensdestillation in neuronalen Netzwerken?",
          nl: "Wat is het concept van knowledge distillation in neurale netwerken?"
        },
        options: [
          { en: "Training a smaller student network to mimic a larger teacher network's behavior", es: "Entrenar una red estudiante más pequeña para imitar el comportamiento de una red profesor más grande", de: "Ein kleineres Studenten-Netzwerk trainieren, um das Verhalten eines größeren Lehrer-Netzwerks nachzuahmen", nl: "Een kleiner student netwerk trainen om het gedrag van een groter teacher netwerk na te bootsen" },
          { en: "Extracting the most important features from trained networks", es: "Extraer las características más importantes de redes entrenadas", de: "Die wichtigsten Merkmale aus trainierten Netzwerken extrahieren", nl: "De belangrijkste features uit getrainde netwerken extraheren" },
          { en: "Compressing network weights using quantization techniques", es: "Comprimir pesos de red usando técnicas de cuantización", de: "Netzwerkgewichte mit Quantisierungstechniken komprimieren", nl: "Netwerkgewichten comprimeren met quantisatietechnieken" },
          { en: "Removing redundant layers from deep networks", es: "Eliminar capas redundantes de redes profundas", de: "Redundante Schichten aus tiefen Netzwerken entfernen", nl: "Redundante lagen uit diepe netwerken verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation transfers knowledge from a complex teacher model to a simpler student model by training the student to match the teacher's soft outputs (probability distributions) rather than just the hard labels, often achieving similar performance with fewer parameters.",
          es: "La destilación de conocimiento transfiere conocimiento de un modelo profesor complejo a un modelo estudiante más simple entrenando al estudiante para igualar las salidas suaves del profesor (distribuciones de probabilidad) en lugar de solo las etiquetas duras, a menudo logrando rendimiento similar con menos parámetros.",
          de: "Wissensdestillation überträgt Wissen von einem komplexen Lehrer-Modell zu einem einfacheren Studenten-Modell, indem das Studenten-Modell trainiert wird, die weichen Ausgaben des Lehrers (Wahrscheinlichkeitsverteilungen) anstatt nur die harten Labels zu entsprechen, oft ähnliche Leistung mit weniger Parametern erreichend.",
          nl: "Knowledge distillation draagt kennis over van een complex teacher model naar een eenvoudiger student model door de student te trainen om de zachte outputs van de teacher (waarschijnlijkheidsverdelingen) te evenaren in plaats van alleen de harde labels, vaak vergelijkbare prestaties behalend met minder parameters."
        }
      },
      {
        question: {
          en: "What is the purpose of spatial transformer networks (STNs) in computer vision?",
          es: "¿Cuál es el propósito de las redes de transformación espacial (STN) en visión por computadora?",
          de: "Was ist der Zweck von Spatial Transformer Networks (STNs) in der Computer Vision?",
          nl: "Wat is het doel van spatial transformer networks (STN's) in computer vision?"
        },
        options: [
          { en: "Learning to apply spatial transformations to input images automatically", es: "Aprender a aplicar transformaciones espaciales a imágenes de entrada automáticamente", de: "Automatisches Lernen der Anwendung räumlicher Transformationen auf Eingabebilder", nl: "Leren om ruimtelijke transformaties automatisch op invoer afbeeldingen toe te passen" },
          { en: "Converting 2D images to 3D representations", es: "Convertir imágenes 2D a representaciones 3D", de: "2D-Bilder in 3D-Darstellungen umwandeln", nl: "2D afbeeldingen omzetten naar 3D representaties" },
          { en: "Implementing recurrent connections for temporal modeling", es: "Implementar conexiones recurrentes para modelado temporal", de: "Rekurrente Verbindungen für zeitliche Modellierung implementieren", nl: "Recurrente verbindingen implementeren voor temporale modellering" },
          { en: "Reducing image noise through filtering operations", es: "Reducir ruido de imagen mediante operaciones de filtrado", de: "Bildrauschen durch Filteroperationen reduzieren", nl: "Beeldruis verminderen door filteroperaties" }
        ],
        correct: 0,
        explanation: {
          en: "STNs can learn to perform spatial transformations (rotation, scaling, cropping, etc.) on input feature maps in a differentiable way, allowing networks to become spatially invariant and focus on relevant parts of the input automatically.",
          es: "Las STN pueden aprender a realizar transformaciones espaciales (rotación, escalado, recorte, etc.) en mapas de características de entrada de manera diferenciable, permitiendo que las redes se vuelvan espacialmente invariantes y se enfoquen en partes relevantes de la entrada automáticamente.",
          de: "STNs können lernen, räumliche Transformationen (Rotation, Skalierung, Zuschneiden, etc.) auf Eingabe-Feature-Maps auf differenzierbare Weise durchzuführen, wodurch Netzwerke räumlich invariant werden und sich automatisch auf relevante Teile der Eingabe konzentrieren können.",
          nl: "STN's kunnen leren om ruimtelijke transformaties (rotatie, schaling, bijsnijden, etc.) uit te voeren op invoer feature maps op een differentieerbare manier, waardoor netwerken ruimtelijk invariant kunnen worden en zich automatisch kunnen richten op relevante delen van de invoer."
        }
      },
      {
        question: {
          en: "What is the key concept behind Few-Shot Learning in deep learning?",
          es: "¿Cuál es el concepto clave detrás del Aprendizaje de Pocos Ejemplos en aprendizaje profundo?",
          de: "Was ist das Schlüsselkonzept hinter Few-Shot Learning im Deep Learning?",
          nl: "Wat is het belangrijkste concept achter Few-Shot Learning in deep learning?"
        },
        options: [
          { en: "Learning to recognize new classes with only a few training examples per class", es: "Aprender a reconocer nuevas clases con solo unos pocos ejemplos de entrenamiento por clase", de: "Lernen, neue Klassen mit nur wenigen Trainingsbeispielen pro Klasse zu erkennen", nl: "Leren om nieuwe klassen te herkennen met slechts een paar trainingsvoorbeelden per klasse" },
          { en: "Training networks with reduced computational resources", es: "Entrenar redes con recursos computacionales reducidos", de: "Netzwerke mit reduzierten Rechenressourcen trainieren", nl: "Netwerken trainen met verminderde computationele middelen" },
          { en: "Implementing networks with fewer layers than usual", es: "Implementar redes con menos capas de lo usual", de: "Netzwerke mit weniger Schichten als üblich implementieren", nl: "Netwerken implementeren met minder lagen dan gebruikelijk" },
          { en: "Using only a subset of available features", es: "Usar solo un subconjunto de características disponibles", de: "Nur eine Teilmenge verfügbarer Merkmale verwenden", nl: "Alleen een subset van beschikbare features gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning aims to train models that can quickly adapt to new tasks or recognize new classes with minimal training data, often using meta-learning approaches, prototypical networks, or metric learning techniques.",
          es: "El aprendizaje de pocos ejemplos busca entrenar modelos que puedan adaptarse rápidamente a nuevas tareas o reconocer nuevas clases con datos de entrenamiento mínimos, a menudo usando enfoques de meta-aprendizaje, redes prototípicas o técnicas de aprendizaje métrico.",
          de: "Few-Shot Learning zielt darauf ab, Modelle zu trainieren, die sich schnell an neue Aufgaben anpassen oder neue Klassen mit minimalen Trainingsdaten erkennen können, oft unter Verwendung von Meta-Learning-Ansätzen, prototypischen Netzwerken oder metrischen Lerntechniken.",
          nl: "Few-shot learning heeft tot doel modellen te trainen die zich snel kunnen aanpassen aan nieuwe taken of nieuwe klassen kunnen herkennen met minimale trainingsdata, vaak met behulp van meta-learning benaderingen, prototypische netwerken of metrische leertechnieken."
        }
      },
      {
        question: {
          en: "What is the purpose of Group Normalization in neural networks?",
          es: "¿Cuál es el propósito de la Normalización por Grupos en las redes neuronales?",
          de: "Was ist der Zweck der Gruppennormalisierung in neuronalen Netzwerken?",
          nl: "Wat is het doel van Group Normalization in neurale netwerken?"
        },
        options: [
          { en: "Normalizing activations across channel groups to reduce batch size dependency", es: "Normalizar activaciones a través de grupos de canales para reducir dependencia del tamaño de lote", de: "Aktivierungen über Kanalgruppen normalisieren, um die Abhängigkeit von der Batch-Größe zu reduzieren", nl: "Activaties normaliseren over kanaalgroepen om afhankelijkheid van batch grootte te verminderen" },
          { en: "Grouping similar neurons together for efficient computation", es: "Agrupar neuronas similares para computación eficiente", de: "Ähnliche Neuronen für effiziente Berechnung gruppieren", nl: "Vergelijkbare neuronen groeperen voor efficiënte berekening" },
          { en: "Implementing parallel processing across multiple GPUs", es: "Implementar procesamiento paralelo a través de múltiples GPUs", de: "Parallele Verarbeitung über mehrere GPUs implementieren", nl: "Parallelle verwerking implementeren over meerdere GPU's" },
          { en: "Reducing memory usage by sharing weights", es: "Reducir uso de memoria compartiendo pesos", de: "Speicherverbrauch durch Gewichtsteilung reduzieren", nl: "Geheugengebruik verminderen door gewichten te delen" }
        ],
        correct: 0,
        explanation: {
          en: "Group Normalization divides channels into groups and normalizes within each group, making it less dependent on batch size compared to batch normalization, which is particularly useful for small batch scenarios or when batch statistics are unreliable.",
          es: "La Normalización por Grupos divide los canales en grupos y normaliza dentro de cada grupo, haciéndola menos dependiente del tamaño de lote comparado con la normalización por lotes, lo que es particularmente útil para escenarios de lotes pequeños o cuando las estadísticas de lote no son confiables.",
          de: "Gruppennormalisierung teilt Kanäle in Gruppen auf und normalisiert innerhalb jeder Gruppe, wodurch sie weniger abhängig von der Batch-Größe im Vergleich zur Batch-Normalisierung wird, was besonders nützlich für kleine Batch-Szenarien oder wenn Batch-Statistiken unzuverlässig sind.",
          nl: "Group Normalization verdeelt kanalen in groepen en normaliseert binnen elke groep, waardoor het minder afhankelijk is van batch grootte vergeleken met batch normalisatie, wat vooral nuttig is voor kleine batch scenario's of wanneer batch statistieken onbetrouwbaar zijn."
        }
      },
      {
        question: {
          en: "What is the key innovation of EfficientNet architecture?",
          es: "¿Cuál es la innovación clave de la arquitectura EfficientNet?",
          de: "Was ist die Schlüsselinnovation der EfficientNet-Architektur?",
          nl: "Wat is de belangrijkste innovatie van de EfficientNet architectuur?"
        },
        options: [
          { en: "Compound scaling that uniformly scales depth, width, and resolution together", es: "Escalado compuesto que escala uniformemente profundidad, anchura y resolución juntas", de: "Zusammengesetzte Skalierung, die Tiefe, Breite und Auflösung gleichmäßig zusammen skaliert", nl: "Samengestelde schaling die diepte, breedte en resolutie uniform samen schaalt" },
          { en: "Using only depthwise separable convolutions", es: "Usar solo convoluciones separables en profundidad", de: "Nur tiefenweise trennbare Faltungen verwenden", nl: "Alleen depthwise separable convoluties gebruiken" },
          { en: "Implementing variable activation functions per layer", es: "Implementar funciones de activación variables por capa", de: "Variable Aktivierungsfunktionen pro Schicht implementieren", nl: "Variabele activatiefuncties per laag implementeren" },
          { en: "Using attention mechanisms in all layers", es: "Usar mecanismos de atención en todas las capas", de: "Aufmerksamkeitsmechanismen in allen Schichten verwenden", nl: "Aandachtsmechanismen gebruiken in alle lagen" }
        ],
        correct: 0,
        explanation: {
          en: "EfficientNet introduces compound scaling, which systematically scales network depth, width, and input resolution using a set of fixed scaling coefficients, achieving better accuracy and efficiency trade-offs than scaling individual dimensions.",
          es: "EfficientNet introduce el escalado compuesto, que escala sistemáticamente la profundidad de la red, anchura y resolución de entrada usando un conjunto de coeficientes de escalado fijos, logrando mejores compensaciones entre precisión y eficiencia que escalar dimensiones individuales.",
          de: "EfficientNet führt zusammengesetzte Skalierung ein, die systematisch Netzwerktiefe, -breite und Eingabeauflösung unter Verwendung eines Satzes fester Skalierungskoeffizienten skaliert, wodurch bessere Genauigkeits- und Effizienz-Kompromisse als bei der Skalierung einzelner Dimensionen erreicht werden.",
          nl: "EfficientNet introduceert samengestelde schaling, die systematisch netwerkdiepte, -breedte en invoerresolutie schaalt met behulp van een set vaste schalingcoëfficiënten, waardoor betere nauwkeurigheid en efficiëntie afwegingen worden bereikt dan het schalen van individuele dimensies."
        }
      },
      {
        question: {
          en: "What is the concept of progressive training in deep learning?",
          es: "¿Cuál es el concepto de entrenamiento progresivo en aprendizaje profundo?",
          de: "Was ist das Konzept des progressiven Trainings im Deep Learning?",
          nl: "Wat is het concept van progressieve training in deep learning?"
        },
        options: [
          { en: "Gradually increasing model complexity or input resolution during training", es: "Aumentar gradualmente la complejidad del modelo o resolución de entrada durante el entrenamiento", de: "Modellkomplexität oder Eingabeauflösung während des Trainings schrittweise erhöhen", nl: "Geleidelijk modelcomplexiteit of invoerresolutie verhogen tijdens training" },
          { en: "Training multiple models simultaneously on different datasets", es: "Entrenar múltiples modelos simultáneamente en diferentes conjuntos de datos", de: "Mehrere Modelle gleichzeitig auf verschiedenen Datensätzen trainieren", nl: "Meerdere modellen tegelijkertijd trainen op verschillende datasets" },
          { en: "Using progressively smaller learning rates", es: "Usar tasas de aprendizaje progresivamente más pequeñas", de: "Progressiv kleinere Lernraten verwenden", nl: "Progressief kleinere leersnelheden gebruiken" },
          { en: "Adding more layers sequentially during training", es: "Agregar más capas secuencialmente durante el entrenamiento", de: "Mehr Schichten sequenziell während des Trainings hinzufügen", nl: "Meer lagen sequentieel toevoegen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Progressive training involves gradually increasing the difficulty or complexity of the training process, such as starting with low-resolution images and progressively increasing resolution, or starting with simpler tasks and adding complexity over time.",
          es: "El entrenamiento progresivo involucra aumentar gradualmente la dificultad o complejidad del proceso de entrenamiento, como comenzar con imágenes de baja resolución y aumentar progresivamente la resolución, o comenzar con tareas más simples y agregar complejidad con el tiempo.",
          de: "Progressives Training beinhaltet die schrittweise Erhöhung der Schwierigkeit oder Komplexität des Trainingsprozesses, wie das Beginnen mit niedrigauflösenden Bildern und progressives Erhöhen der Auflösung, oder das Beginnen mit einfacheren Aufgaben und Hinzufügen von Komplexität im Laufe der Zeit.",
          nl: "Progressieve training houdt in dat de moeilijkheid of complexiteit van het trainingsproces geleidelijk wordt verhoogd, zoals beginnen met lage-resolutie afbeeldingen en geleidelijk de resolutie verhogen, of beginnen met eenvoudigere taken en complexiteit toevoegen over tijd."
        }
      },
      {
        question: {
          en: "What is the purpose of multi-scale training in computer vision models?",
          es: "¿Cuál es el propósito del entrenamiento multiescala en modelos de visión por computadora?",
          de: "Was ist der Zweck des Multi-Skala-Trainings in Computer-Vision-Modellen?",
          nl: "Wat is het doel van multi-schaal training in computer vision modellen?"
        },
        options: [
          { en: "Improving model robustness to different input scales and sizes", es: "Mejorar la robustez del modelo a diferentes escalas y tamaños de entrada", de: "Modellrobustheit gegenüber verschiedenen Eingabeskalen und -größen verbessern", nl: "Modelrobuustheid verbeteren voor verschillende invoerschalen en -groottes" },
          { en: "Reducing computational cost by using smaller images", es: "Reducir costo computacional usando imágenes más pequeñas", de: "Rechenkosten durch Verwendung kleinerer Bilder reduzieren", nl: "Computationele kosten verminderen door kleinere afbeeldingen te gebruiken" },
          { en: "Implementing hierarchical feature learning automatically", es: "Implementar aprendizaje jerárquico de características automáticamente", de: "Hierarchisches Merkmallernen automatisch implementieren", nl: "Hiërarchisch feature leren automatisch implementeren" },
          { en: "Converting color images to grayscale for faster processing", es: "Convertir imágenes a color a escala de grises para procesamiento más rápido", de: "Farbbilder in Graustufen für schnellere Verarbeitung umwandeln", nl: "Kleurafbeeldingen omzetten naar grijswaarden voor snellere verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-scale training exposes the model to inputs of varying scales during training, helping it learn scale-invariant representations and perform better on images with objects of different sizes or when deployed at different input resolutions.",
          es: "El entrenamiento multiescala expone al modelo a entradas de escalas variables durante el entrenamiento, ayudándolo a aprender representaciones invariantes a escala y funcionar mejor en imágenes con objetos de diferentes tamaños o cuando se despliega en diferentes resoluciones de entrada.",
          de: "Multi-Skala-Training setzt das Modell während des Trainings Eingaben verschiedener Skalen aus, wodurch es skalieninvariante Darstellungen lernen und bei Bildern mit Objekten verschiedener Größen oder bei der Bereitstellung mit verschiedenen Eingabeauflösungen besser funktionieren kann.",
          nl: "Multi-schaal training stelt het model bloot aan invoer van verschillende schalen tijdens training, waardoor het schaal-invariante representaties kan leren en beter kan presteren op afbeeldingen met objecten van verschillende groottes of wanneer ingezet bij verschillende invoerresoluties."
        }
      },
      {
        question: {
          en: "What is the key concept behind Neural Ordinary Differential Equations (NODEs)?",
          es: "¿Cuál es el concepto clave detrás de las Ecuaciones Diferenciales Ordinarias Neuronales (NODE)?",
          de: "Was ist das Schlüsselkonzept hinter Neural Ordinary Differential Equations (NODEs)?",
          nl: "Wat is het belangrijkste concept achter Neural Ordinary Differential Equations (NODE's)?"
        },
        options: [
          { en: "Treating neural network layers as continuous transformations described by ODEs", es: "Tratar las capas de redes neuronales como transformaciones continuas descritas por EDOs", de: "Neuronale Netzwerkschichten als kontinuierliche Transformationen behandeln, die durch ODEs beschrieben werden", nl: "Neurale netwerklagen behandelen als continue transformaties beschreven door ODEs" },
          { en: "Using differential equations to optimize hyperparameters", es: "Usar ecuaciones diferenciales para optimizar hiperparámetros", de: "Differentialgleichungen zur Hyperparameter-Optimierung verwenden", nl: "Differentiaalvergelijkingen gebruiken om hyperparameters te optimaliseren" },
          { en: "Implementing time-varying activation functions", es: "Implementar funciones de activación que varían con el tiempo", de: "Zeitvariable Aktivierungsfunktionen implementieren", nl: "Tijd-variërende activatiefuncties implementeren" },
          { en: "Converting discrete networks to analog circuits", es: "Convertir redes discretas a circuitos analógicos", de: "Diskrete Netzwerke in analoge Schaltkreise umwandeln", nl: "Discrete netwerken omzetten naar analoge circuits" }
        ],
        correct: 0,
        explanation: {
          en: "NODEs replace discrete layers with continuous dynamics governed by ordinary differential equations, allowing for adaptive computation, memory-efficient training, and the ability to evaluate the network at arbitrary time points.",
          es: "Los NODE reemplazan capas discretas con dinámicas continuas gobernadas por ecuaciones diferenciales ordinarias, permitiendo computación adaptativa, entrenamiento eficiente en memoria y la capacidad de evaluar la red en puntos temporales arbitrarios.",
          de: "NODEs ersetzen diskrete Schichten durch kontinuierliche Dynamiken, die von gewöhnlichen Differentialgleichungen regiert werden, wodurch adaptive Berechnung, speichereffizientes Training und die Fähigkeit, das Netzwerk an beliebigen Zeitpunkten zu bewerten, ermöglicht werden.",
          nl: "NODE's vervangen discrete lagen door continue dynamiek die wordt geregeerd door gewone differentiaalvergelijkingen, wat adaptieve berekening, geheugenefficiënte training en het vermogen om het netwerk op willekeurige tijdstippen te evalueren mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the purpose of focal loss in object detection?",
          es: "¿Cuál es el propósito de la pérdida focal en detección de objetos?",
          de: "Was ist der Zweck des Focal Loss in der Objekterkennung?",
          nl: "Wat is het doel van focal loss in object detectie?"
        },
        options: [
          { en: "Addressing class imbalance by focusing on hard-to-classify examples", es: "Abordar el desequilibrio de clases enfocándose en ejemplos difíciles de clasificar", de: "Klassenungleichgewicht durch Fokussierung auf schwer zu klassifizierende Beispiele angehen", nl: "Klasse-onbalans aanpakken door te focussen op moeilijk te classificeren voorbeelden" },
          { en: "Improving computational efficiency by reducing loss calculations", es: "Mejorar eficiencia computacional reduciendo cálculos de pérdida", de: "Recheneffizienz durch Reduzierung von Verlustberechnungen verbessern", nl: "Computationele efficiëntie verbeteren door loss berekeningen te verminderen" },
          { en: "Implementing attention mechanisms in loss functions", es: "Implementar mecanismos de atención en funciones de pérdida", de: "Aufmerksamkeitsmechanismen in Verlustfunktionen implementieren", nl: "Aandachtsmechanismen implementeren in verliesfuncties" },
          { en: "Converting regression problems to classification tasks", es: "Convertir problemas de regresión a tareas de clasificación", de: "Regressionsprobleme in Klassifikationsaufgaben umwandeln", nl: "Regressieproblemen omzetten naar classificatietaken" }
        ],
        correct: 0,
        explanation: {
          en: "Focal loss modifies standard cross-entropy loss by adding a focusing parameter that reduces the weight of well-classified examples and increases focus on hard examples, effectively addressing the class imbalance problem common in object detection.",
          es: "La pérdida focal modifica la pérdida de entropía cruzada estándar agregando un parámetro de enfoque que reduce el peso de ejemplos bien clasificados y aumenta el enfoque en ejemplos difíciles, abordando efectivamente el problema de desequilibrio de clases común en detección de objetos.",
          de: "Focal Loss modifiziert den Standard-Kreuzentropie-Verlust durch Hinzufügung eines Fokussierungsparameters, der das Gewicht gut klassifizierter Beispiele reduziert und den Fokus auf schwierige Beispiele erhöht, wodurch das in der Objekterkennung häufige Klassenungleichgewichtsproblem effektiv angegangen wird.",
          nl: "Focal loss wijzigt standaard cross-entropy loss door een focusparameter toe te voegen die het gewicht van goed geclassificeerde voorbeelden vermindert en de focus op moeilijke voorbeelden verhoogt, waardoor het klasse-onbalans probleem dat veel voorkomt in object detectie effectief wordt aangepakt."
        }
      },
      {
        question: {
          en: "What is the concept of self-supervised learning in computer vision?",
          es: "¿Cuál es el concepto de aprendizaje auto-supervisado en visión por computadora?",
          de: "Was ist das Konzept des selbstüberwachten Lernens in der Computer Vision?",
          nl: "Wat is het concept van self-supervised learning in computer vision?"
        },
        options: [
          { en: "Learning representations from unlabeled data using pretext tasks derived from the data itself", es: "Aprender representaciones de datos sin etiquetar usando tareas pretexto derivadas de los datos mismos", de: "Darstellungen aus ungelabelten Daten mittels Vorwandaufgaben lernen, die aus den Daten selbst abgeleitet werden", nl: "Representaties leren van ongelabelde data met behulp van pretekst taken afgeleid van de data zelf" },
          { en: "Training networks without any human supervision or intervention", es: "Entrenar redes sin ninguna supervisión o intervención humana", de: "Netzwerke ohne jede menschliche Aufsicht oder Intervention trainieren", nl: "Netwerken trainen zonder enige menselijke supervisie of interventie" },
          { en: "Implementing reinforcement learning for visual tasks", es: "Implementar aprendizaje por refuerzo para tareas visuales", de: "Reinforcement Learning für visuelle Aufgaben implementieren", nl: "Reinforcement learning implementeren voor visuele taken" },
          { en: "Using multiple supervised signals simultaneously", es: "Usar múltiples señales supervisadas simultáneamente", de: "Mehrere überwachte Signale gleichzeitig verwenden", nl: "Meerdere supervised signalen tegelijkertijd gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning creates supervisory signals from the input data itself through pretext tasks like image rotation prediction, jigsaw puzzle solving, or masked region prediction, enabling learning of useful representations without manual labels.",
          es: "El aprendizaje auto-supervisado crea señales supervisorias de los datos de entrada mismos a través de tareas pretexto como predicción de rotación de imagen, resolución de rompecabezas o predicción de región enmascarada, permitiendo el aprendizaje de representaciones útiles sin etiquetas manuales.",
          de: "Selbstüberwachtes Lernen erstellt Überwachungssignale aus den Eingabedaten selbst durch Vorwandaufgaben wie Bildrotationsvorhersage, Puzzle-Lösung oder maskierte Regionenvorhersage, wodurch das Lernen nützlicher Darstellungen ohne manuelle Labels ermöglicht wird.",
          nl: "Self-supervised learning creëert toezichtsignalen van de invoerdata zelf door middel van pretekst taken zoals beeldrotatie voorspelling, puzzel oplossen of gemaskeerde regio voorspelling, waardoor het leren van nuttige representaties mogelijk is zonder handmatige labels."
        }
      },
      {
        question: {
          en: "What is the key innovation of MobileNets for efficient neural networks?",
          es: "¿Cuál es la innovación clave de MobileNets para redes neuronales eficientes?",
          de: "Was ist die Schlüsselinnovation von MobileNets für effiziente neuronale Netzwerke?",
          nl: "Wat is de belangrijkste innovatie van MobileNets voor efficiënte neurale netwerken?"
        },
        options: [
          { en: "Depthwise separable convolutions that factorize standard convolutions", es: "Convoluciones separables en profundidad que factorizan convoluciones estándar", de: "Tiefenweise trennbare Faltungen, die Standardfaltungen faktorisieren", nl: "Depthwise separable convoluties die standaard convoluties factoriseren" },
          { en: "Using only 1x1 convolutions throughout the network", es: "Usar solo convoluciones 1x1 en toda la red", de: "Nur 1x1-Faltungen im gesamten Netzwerk verwenden", nl: "Alleen 1x1 convoluties gebruiken in het hele netwerk" },
          { en: "Implementing variable-precision arithmetic for each layer", es: "Implementar aritmética de precisión variable para cada capa", de: "Variable-Präzision-Arithmetik für jede Schicht implementieren", nl: "Variabele precisie rekenkunde implementeren voor elke laag" },
          { en: "Using recursive network structures to reduce parameters", es: "Usar estructuras de red recursivas para reducir parámetros", de: "Rekursive Netzwerkstrukturen zur Parameterreduzierung verwenden", nl: "Recursieve netwerkstructuren gebruiken om parameters te verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "MobileNets use depthwise separable convolutions, which factorize a standard convolution into a depthwise convolution (filtering) followed by a pointwise convolution (combining), significantly reducing computational cost and parameters while maintaining reasonable accuracy.",
          es: "MobileNets usan convoluciones separables en profundidad, que factorizan una convolución estándar en una convolución en profundidad (filtrado) seguida por una convolución puntual (combinación), reduciendo significativamente el costo computacional y parámetros manteniendo precisión razonable.",
          de: "MobileNets verwenden tiefenweise trennbare Faltungen, die eine Standardfaltung in eine tiefenweise Faltung (Filterung) gefolgt von einer punktweisen Faltung (Kombination) faktorisieren, wodurch Rechenkosten und Parameter erheblich reduziert werden, während eine angemessene Genauigkeit beibehalten wird.",
          nl: "MobileNets gebruiken depthwise separable convoluties, die een standaard convolutie factoriseren in een depthwise convolutie (filtering) gevolgd door een pointwise convolutie (combineren), waardoor computationele kosten en parameters aanzienlijk worden verminderd terwijl redelijke nauwkeurigheid behouden blijft."
        }
      },
      {
        question: {
          en: "What is the purpose of squeeze-and-excitation (SE) blocks in neural networks?",
          es: "¿Cuál es el propósito de los bloques de squeeze-and-excitation (SE) en las redes neuronales?",
          de: "Was ist der Zweck von Squeeze-and-Excitation (SE) Blöcken in neuronalen Netzwerken?",
          nl: "Wat is het doel van squeeze-and-excitation (SE) blokken in neurale netwerken?"
        },
        options: [
          { en: "Adaptively recalibrating channel-wise feature responses through attention", es: "Recalibrar adaptativamente las respuestas de características por canal a través de atención", de: "Kanalweise Feature-Antworten durch Aufmerksamkeit adaptiv rekalibrieren", nl: "Adaptief kanaalgewijze feature responses herkaliberen door aandacht" },
          { en: "Compressing and decompressing feature maps to save memory", es: "Comprimir y descomprimir mapas de características para ahorrar memoria", de: "Feature-Maps komprimieren und dekomprimieren, um Speicher zu sparen", nl: "Feature maps comprimeren en decomprimeren om geheugen te besparen" },
          { en: "Implementing non-linear activation functions efficiently", es: "Implementar funciones de activación no lineales eficientemente", de: "Nichtlineare Aktivierungsfunktionen effizient implementieren", nl: "Niet-lineaire activatiefuncties efficiënt implementeren" },
          { en: "Reducing computational complexity through layer pruning", es: "Reducir complejidad computacional mediante poda de capas", de: "Rechenkomplexität durch Schichtentrimmen reduzieren", nl: "Computationele complexiteit verminderen door laagpruning" }
        ],
        correct: 0,
        explanation: {
          en: "SE blocks enhance the representational power of networks by explicitly modeling interdependencies between channels, using global information to selectively emphasize informative features and suppress less useful ones through learned channel attention weights.",
          es: "Los bloques SE mejoran el poder representacional de las redes modelando explícitamente interdependencias entre canales, usando información global para enfatizar selectivamente características informativas y suprimir las menos útiles a través de pesos de atención de canal aprendidos.",
          de: "SE-Blöcke verbessern die Darstellungskraft von Netzwerken durch explizite Modellierung von Interdependenzen zwischen Kanälen, wobei globale Informationen verwendet werden, um informative Merkmale selektiv zu betonen und weniger nützliche durch gelernte Kanal-Aufmerksamkeitsgewichte zu unterdrücken.",
          nl: "SE blokken verbeteren de representatiekracht van netwerken door expliciet interdependenties tussen kanalen te modelleren, waarbij globale informatie wordt gebruikt om informatieve features selectief te benadrukken en minder nuttige te onderdrukken door geleerde kanaal aandachtsgewichten."
        }
      },
      {
        question: {
          en: "What is the concept of neural style transfer?",
          es: "¿Cuál es el concepto de transferencia de estilo neuronal?",
          de: "Was ist das Konzept des neuronalen Stiltransfers?",
          nl: "Wat is het concept van neural style transfer?"
        },
        options: [
          { en: "Combining the content of one image with the artistic style of another using CNN features", es: "Combinar el contenido de una imagen con el estilo artístico de otra usando características CNN", de: "Inhalt eines Bildes mit dem künstlerischen Stil eines anderen unter Verwendung von CNN-Merkmalen kombinieren", nl: "Inhoud van één afbeelding combineren met de artistieke stijl van een andere met behulp van CNN features" },
          { en: "Transferring learned weights between different network architectures", es: "Transferir pesos aprendidos entre diferentes arquitecturas de red", de: "Gelernte Gewichte zwischen verschiedenen Netzwerkarchitekturen übertragen", nl: "Geleerde gewichten overdragen tussen verschillende netwerkarchitecturen" },
          { en: "Converting images from one color space to another", es: "Convertir imágenes de un espacio de color a otro", de: "Bilder von einem Farbraum in einen anderen umwandeln", nl: "Afbeeldingen omzetten van één kleurruimte naar een andere" },
          { en: "Implementing domain adaptation for different image datasets", es: "Implementar adaptación de dominio para diferentes conjuntos de datos de imágenes", de: "Domain-Adaptation für verschiedene Bilddatensätze implementieren", nl: "Domeinaanpassing implementeren voor verschillende afbeeldingsdatasets" }
        ],
        correct: 0,
        explanation: {
          en: "Neural style transfer uses pre-trained CNNs to separate and recombine content and style representations of images, optimizing a new image to match the content of one image while adopting the artistic style characteristics of another.",
          es: "La transferencia de estilo neuronal usa CNN preentrenadas para separar y recombinar representaciones de contenido y estilo de imágenes, optimizando una nueva imagen para coincidir con el contenido de una imagen mientras adopta las características de estilo artístico de otra.",
          de: "Neuronaler Stiltransfer verwendet vortrainierte CNNs, um Inhalts- und Stil-Darstellungen von Bildern zu trennen und zu rekombinieren, wobei ein neues Bild optimiert wird, um dem Inhalt eines Bildes zu entsprechen, während die künstlerischen Stilcharakteristika eines anderen übernommen werden.",
          nl: "Neural style transfer gebruikt voorgetrainde CNN's om inhoud en stijl representaties van afbeeldingen te scheiden en te recombineren, waarbij een nieuwe afbeelding wordt geoptimaliseerd om overeen te komen met de inhoud van één afbeelding terwijl de artistieke stijlkenmerken van een andere worden overgenomen."
        }
      },
      {
        question: {
          en: "What is the key principle behind adversarial examples in neural networks?",
          es: "¿Cuál es el principio clave detrás de los ejemplos adversarios en las redes neuronales?",
          de: "Was ist das Schlüsselprinzip hinter adversariellen Beispielen in neuronalen Netzwerken?",
          nl: "Wat is het belangrijkste principe achter adversarial examples in neurale netwerken?"
        },
        options: [
          { en: "Small, imperceptible perturbations can cause significant misclassifications", es: "Pequeñas perturbaciones imperceptibles pueden causar clasificaciones erróneas significativas", de: "Kleine, unmerkliche Störungen können erhebliche Fehlklassifikationen verursachen", nl: "Kleine, onmerkbare verstoringen kunnen aanzienlijke misclassificaties veroorzaken" },
          { en: "Networks require adversarial training to converge properly", es: "Las redes requieren entrenamiento adversarial para converger apropiadamente", de: "Netzwerke benötigen adversarielles Training für ordnungsgemäße Konvergenz", nl: "Netwerken hebben adversarial training nodig om goed te convergeren" },
          { en: "Competing networks always produce better results", es: "Las redes competidoras siempre producen mejores resultados", de: "Konkurrierende Netzwerke produzieren immer bessere Ergebnisse", nl: "Concurrerende netwerken produceren altijd betere resultaten" },
          { en: "Random noise improves network generalization", es: "El ruido aleatorio mejora la generalización de la red", de: "Zufälliges Rauschen verbessert die Netzwerkgeneralisierung", nl: "Willekeurige ruis verbetert netwerkgeneralisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial examples demonstrate that neural networks can be fooled by adding carefully crafted, often imperceptible perturbations to inputs, revealing vulnerabilities in learned decision boundaries and highlighting the need for robust training methods.",
          es: "Los ejemplos adversarios demuestran que las redes neuronales pueden ser engañadas agregando perturbaciones cuidadosamente elaboradas y a menudo imperceptibles a las entradas, revelando vulnerabilidades en los límites de decisión aprendidos y resaltando la necesidad de métodos de entrenamiento robustos.",
          de: "Adversarielle Beispiele zeigen, dass neuronale Netzwerke durch Hinzufügung sorgfältig gestalteter, oft unmerklicher Störungen zu Eingaben getäuscht werden können, wodurch Vulnerabilitäten in gelernten Entscheidungsgrenzen offenbart und die Notwendigkeit robuster Trainingsmethoden hervorgehoben wird.",
          nl: "Adversarial examples tonen aan dat neurale netwerken kunnen worden misleid door zorgvuldig vervaardigde, vaak onmerkbare verstoringen toe te voegen aan inputs, wat kwetsbaarheden in geleerde beslissingsgrenzen onthult en de behoefte aan robuuste trainingsmethoden benadrukt."
        }
      },
      {
        question: {
          en: "What is the purpose of instance normalization in neural networks?",
          es: "¿Cuál es el propósito de la normalización de instancia en las redes neuronales?",
          de: "Was ist der Zweck der Instanznormalisierung in neuronalen Netzwerken?",
          nl: "Wat is het doel van instance normalization in neurale netwerken?"
        },
        options: [
          { en: "Normalizing each feature map independently to remove instance-specific contrast information", es: "Normalizar cada mapa de características independientemente para eliminar información de contraste específica de la instancia", de: "Jede Feature-Map unabhängig normalisieren, um instanzspezifische Kontrastinformationen zu entfernen", nl: "Elke feature map onafhankelijk normaliseren om instantie-specifieke contrastinformatie te verwijderen" },
          { en: "Grouping similar instances together for batch processing", es: "Agrupar instancias similares para procesamiento por lotes", de: "Ähnliche Instanzen für Batch-Verarbeitung gruppieren", nl: "Vergelijkbare instanties groeperen voor batch verwerking" },
          { en: "Implementing dropout at the instance level", es: "Implementar dropout a nivel de instancia", de: "Dropout auf Instanzebene implementieren", nl: "Dropout implementeren op instantieniveau" },
          { en: "Converting multiple instances into a single representation", es: "Convertir múltiples instancias en una sola representación", de: "Mehrere Instanzen in eine einzige Darstellung umwandeln", nl: "Meerdere instanties omzetten naar één enkele representatie" }
        ],
        correct: 0,
        explanation: {
          en: "Instance normalization normalizes across spatial dimensions for each channel and each instance independently, effectively removing instance-specific contrast while preserving style information, making it particularly useful for style transfer and similar tasks.",
          es: "La normalización de instancia normaliza a través de dimensiones espaciales para cada canal y cada instancia independientemente, eliminando efectivamente el contraste específico de la instancia mientras preserva la información de estilo, haciéndola particularmente útil para transferencia de estilo y tareas similares.",
          de: "Instanznormalisierung normalisiert über räumliche Dimensionen für jeden Kanal und jede Instanz unabhängig, wodurch instanzspezifischer Kontrast effektiv entfernt wird, während Stilinformationen erhalten bleiben, was sie besonders nützlich für Stiltransfer und ähnliche Aufgaben macht.",
          nl: "Instance normalization normaliseert over ruimtelijke dimensies voor elk kanaal en elke instantie onafhankelijk, waardoor instantie-specifiek contrast effectief wordt weggenomen terwijl stijlinformatie behouden blijft, wat het bijzonder nuttig maakt voor style transfer en vergelijkbare taken."
        }
      },
      {
        question: {
          en: "What is the concept of curriculum learning in deep neural networks?",
          es: "¿Cuál es el concepto de aprendizaje por currículo en las redes neuronales profundas?",
          de: "Was ist das Konzept des Curriculum Learning in tiefen neuronalen Netzwerken?",
          nl: "Wat is het concept van curriculum learning in diepe neurale netwerken?"
        },
        options: [
          { en: "Training on easy examples first, then gradually increasing difficulty", es: "Entrenar primero en ejemplos fáciles, luego aumentar gradualmente la dificultad", de: "Erst auf einfachen Beispielen trainieren, dann die Schwierigkeit allmählich steigern", nl: "Eerst trainen op makkelijke voorbeelden, dan geleidelijk moeilijkheid verhogen" },
          { en: "Using different curricula for different network layers", es: "Usar diferentes currículos para diferentes capas de la red", de: "Verschiedene Lehrpläne für verschiedene Netzwerkschichten verwenden", nl: "Verschillende curricula gebruiken voor verschillende netwerklagen" },
          { en: "Implementing multi-task learning with shared curricula", es: "Implementar aprendizaje multitarea con currículos compartidos", de: "Multi-Task-Learning mit gemeinsamen Lehrplänen implementieren", nl: "Multi-task learning implementeren met gedeelde curricula" },
          { en: "Teaching networks to design their own architectures", es: "Enseñar a las redes a diseñar sus propias arquitecturas", de: "Netzwerken beibringen, ihre eigenen Architekturen zu entwerfen", nl: "Netwerken leren hun eigen architecturen te ontwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "Curriculum learning presents training examples in a meaningful order, typically starting with easier examples and gradually introducing more complex ones, mimicking how humans learn and often leading to better convergence and final performance.",
          es: "El aprendizaje por currículo presenta ejemplos de entrenamiento en un orden significativo, típicamente comenzando con ejemplos más fáciles y gradualmente introduciendo otros más complejos, imitando cómo aprenden los humanos y a menudo llevando a mejor convergencia y rendimiento final.",
          de: "Curriculum Learning präsentiert Trainingsbeispiele in einer sinnvollen Reihenfolge, typischerweise beginnend mit einfacheren Beispielen und allmählich komplexere einführend, wodurch menschliches Lernen nachgeahmt wird und oft zu besserer Konvergenz und Endleistung führt.",
          nl: "Curriculum learning presenteert trainingsvoorbeelden in een betekenisvolle volgorde, typisch beginnend met makkelijkere voorbeelden en geleidelijk complexere introducerend, wat menselijk leren nabootst en vaak leidt tot betere convergentie en eindprestaties."
        }
      },
      {
        question: {
          en: "What is the key innovation of DenseNet (Densely Connected Networks)?",
          es: "¿Cuál es la innovación clave de DenseNet (Redes Densamente Conectadas)?",
          de: "Was ist die Schlüsselinnovation von DenseNet (Dicht Verbundene Netzwerke)?",
          nl: "Wat is de belangrijkste innovatie van DenseNet (Densely Connected Networks)?"
        },
        options: [
          { en: "Each layer connects to all subsequent layers in a feed-forward fashion", es: "Cada capa se conecta a todas las capas subsecuentes de manera feed-forward", de: "Jede Schicht verbindet sich mit allen nachfolgenden Schichten in Feed-Forward-Manier", nl: "Elke laag verbindt met alle volgende lagen op een feed-forward manier" },
          { en: "Using only dense (fully connected) layers throughout", es: "Usar solo capas densas (completamente conectadas) en toda la red", de: "Nur dichte (vollständig verbundene) Schichten durchgehend verwenden", nl: "Alleen dense (volledig verbonden) lagen gebruiken doorheen" },
          { en: "Implementing variable connection patterns per layer", es: "Implementar patrones de conexión variables por capa", de: "Variable Verbindungsmuster pro Schicht implementieren", nl: "Variabele verbindingspatronen per laag implementeren" },
          { en: "Creating circular connections between layers", es: "Crear conexiones circulares entre capas", de: "Kreisförmige Verbindungen zwischen Schichten erstellen", nl: "Circulaire verbindingen tussen lagen creëren" }
        ],
        correct: 0,
        explanation: {
          en: "DenseNet connects each layer to every other layer in a feed-forward fashion, where each layer receives feature maps from all preceding layers and passes its own feature maps to all subsequent layers, promoting feature reuse and reducing parameters.",
          es: "DenseNet conecta cada capa a cada otra capa de manera feed-forward, donde cada capa recibe mapas de características de todas las capas precedentes y pasa sus propios mapas de características a todas las capas subsecuentes, promoviendo la reutilización de características y reduciendo parámetros.",
          de: "DenseNet verbindet jede Schicht mit jeder anderen Schicht in Feed-Forward-Manier, wobei jede Schicht Feature-Maps von allen vorhergehenden Schichten erhält und ihre eigenen Feature-Maps an alle nachfolgenden Schichten weitergibt, wodurch Feature-Wiederverwendung gefördert und Parameter reduziert werden.",
          nl: "DenseNet verbindt elke laag met elke andere laag op een feed-forward manier, waarbij elke laag feature maps ontvangt van alle voorgaande lagen en zijn eigen feature maps doorgeeft aan alle volgende lagen, wat feature hergebruik bevordert en parameters vermindert."
        }
      },
      {
        question: {
          en: "What is the purpose of channel attention mechanisms in CNN architectures?",
          es: "¿Cuál es el propósito de los mecanismos de atención de canal en arquitecturas CNN?",
          de: "Was ist der Zweck von Kanal-Aufmerksamkeitsmechanismen in CNN-Architekturen?",
          nl: "Wat is het doel van kanaal aandachtsmechanismen in CNN architecturen?"
        },
        options: [
          { en: "Selectively emphasizing important channels while suppressing less relevant ones", es: "Enfatizar selectivamente canales importantes mientras se suprimen los menos relevantes", de: "Wichtige Kanäle selektiv betonen, während weniger relevante unterdrückt werden", nl: "Selectief belangrijke kanalen benadrukken terwijl minder relevante worden onderdrukt" },
          { en: "Reducing the number of channels to decrease memory usage", es: "Reducir el número de canales para disminuir el uso de memoria", de: "Anzahl der Kanäle reduzieren, um Speicherverbrauch zu verringern", nl: "Het aantal kanalen verminderen om geheugengebruik te verlagen" },
          { en: "Converting RGB channels to grayscale automatically", es: "Convertir canales RGB a escala de grises automáticamente", de: "RGB-Kanäle automatisch in Graustufen umwandeln", nl: "RGB kanalen automatisch omzetten naar grijswaarden" },
          { en: "Implementing parallel processing across different channels", es: "Implementar procesamiento paralelo a través de diferentes canales", de: "Parallele Verarbeitung über verschiedene Kanäle implementieren", nl: "Parallelle verwerking implementeren over verschillende kanalen" }
        ],
        correct: 0,
        explanation: {
          en: "Channel attention mechanisms learn to weight different feature channels based on their importance for the current task, allowing the network to adaptively focus on the most informative channels while reducing the influence of less relevant ones.",
          es: "Los mecanismos de atención de canal aprenden a ponderar diferentes canales de características basándose en su importancia para la tarea actual, permitiendo que la red se enfoque adaptativamente en los canales más informativos mientras reduce la influencia de los menos relevantes.",
          de: "Kanal-Aufmerksamkeitsmechanismen lernen, verschiedene Feature-Kanäle basierend auf ihrer Wichtigkeit für die aktuelle Aufgabe zu gewichten, wodurch das Netzwerk sich adaptiv auf die informativsten Kanäle konzentrieren kann, während der Einfluss weniger relevanter reduziert wird.",
          nl: "Kanaal aandachtsmechanismen leren verschillende feature kanalen te wegen gebaseerd op hun belang voor de huidige taak, waardoor het netwerk zich adaptief kan richten op de meest informatieve kanalen terwijl de invloed van minder relevante wordt verminderd."
        }
      },
      {
        question: {
          en: "What is the concept of meta-learning in the context of neural networks?",
          es: "¿Cuál es el concepto de meta-aprendizaje en el contexto de las redes neuronales?",
          de: "Was ist das Konzept des Meta-Lernens im Kontext neuronaler Netzwerke?",
          nl: "Wat is het concept van meta-learning in de context van neurale netwerken?"
        },
        options: [
          { en: "Learning how to learn by training on multiple tasks to quickly adapt to new ones", es: "Aprender cómo aprender entrenando en múltiples tareas para adaptarse rápidamente a nuevas", de: "Lernen, wie man lernt, indem man auf mehreren Aufgaben trainiert, um sich schnell an neue anzupassen", nl: "Leren hoe te leren door te trainen op meerdere taken om snel aan te passen aan nieuwe" },
          { en: "Learning about the network's own architecture and parameters", es: "Aprender sobre la propia arquitectura y parámetros de la red", de: "Über die eigene Architektur und Parameter des Netzwerks lernen", nl: "Leren over de eigen architectuur en parameters van het netwerk" },
          { en: "Implementing hierarchical learning with multiple abstraction levels", es: "Implementar aprendizaje jerárquico con múltiples niveles de abstracción", de: "Hierarchisches Lernen mit mehreren Abstraktionsebenen implementieren", nl: "Hiërarchisch leren implementeren met meerdere abstractieniveaus" },
          { en: "Using metadata to improve training efficiency", es: "Usar metadatos para mejorar la eficiencia de entrenamiento", de: "Metadaten zur Verbesserung der Trainingseffizienz verwenden", nl: "Metadata gebruiken om trainingsefficiëntie te verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-learning trains models to acquire new skills quickly by learning from a distribution of related tasks, enabling rapid adaptation to new tasks with minimal examples - essentially learning the learning process itself.",
          es: "El meta-aprendizaje entrena modelos para adquirir nuevas habilidades rápidamente aprendiendo de una distribución de tareas relacionadas, permitiendo adaptación rápida a nuevas tareas con ejemplos mínimos - esencialmente aprendiendo el proceso de aprendizaje mismo.",
          de: "Meta-Learning trainiert Modelle, um neue Fähigkeiten schnell zu erwerben, indem es aus einer Verteilung verwandter Aufgaben lernt, wodurch schnelle Anpassung an neue Aufgaben mit minimalen Beispielen ermöglicht wird - im Wesentlichen das Lernen des Lernprozesses selbst.",
          nl: "Meta-learning traint modellen om snel nieuwe vaardigheden te verkrijgen door te leren van een verdeling van gerelateerde taken, wat snelle aanpassing aan nieuwe taken met minimale voorbeelden mogelijk maakt - in wezen het leren van het leerproces zelf."
        }
      },
      {
        question: {
          en: "What is the main advantage of using dilated convolutions in CNNs?",
          es: "¿Cuál es la ventaja principal de usar convoluciones dilatadas en CNN?",
          de: "Was ist der Hauptvorteil der Verwendung von dilatierten Faltungen in CNNs?",
          nl: "Wat is het hoofdvoordeel van het gebruik van dilated convolutions in CNNs?"
        },
        options: [
          { en: "Increases receptive field without reducing spatial resolution", es: "Aumenta el campo receptivo sin reducir la resolución espacial", de: "Vergrößert das rezeptive Feld ohne räumliche Auflösung zu reduzieren", nl: "Vergroot het receptieve veld zonder ruimtelijke resolutie te verminderen" },
          { en: "Reduces computational complexity", es: "Reduce la complejidad computacional", de: "Reduziert die rechnerische Komplexität", nl: "Vermindert computationele complexiteit" },
          { en: "Prevents overfitting", es: "Previene el sobreajuste", de: "Verhindert Overfitting", nl: "Voorkomt overfitting" },
          { en: "Increases training speed", es: "Aumenta la velocidad de entrenamiento", de: "Erhöht die Trainingsgeschwindigkeit", nl: "Verhoogt trainingssnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Dilated convolutions allow the network to have a larger receptive field while maintaining the same spatial resolution. This is particularly useful in tasks like semantic segmentation where both global context and fine details are important.",
          es: "Las convoluciones dilatadas permiten que la red tenga un campo receptivo más grande manteniendo la misma resolución espacial. Esto es particularmente útil en tareas como segmentación semántica donde tanto el contexto global como los detalles finos son importantes.",
          de: "Dilatierte Faltungen ermöglichen es dem Netzwerk, ein größeres rezeptives Feld zu haben, während die gleiche räumliche Auflösung beibehalten wird. Dies ist besonders nützlich bei Aufgaben wie der semantischen Segmentierung, wo sowohl der globale Kontext als auch feine Details wichtig sind.",
          nl: "Dilated convolutions stellen het netwerk in staat om een groter receptief veld te hebben terwijl dezelfde ruimtelijke resolutie behouden blijft. Dit is bijzonder nuttig bij taken zoals semantische segmentatie waar zowel globale context als fijne details belangrijk zijn."
        }
      },
      {
        question: {
          en: "What is the purpose of Feature Pyramid Networks (FPN)?",
          es: "¿Cuál es el propósito de las Feature Pyramid Networks (FPN)?",
          de: "Was ist der Zweck von Feature Pyramid Networks (FPN)?",
          nl: "Wat is het doel van Feature Pyramid Networks (FPN)?"
        },
        options: [
          { en: "Combine multi-scale features for better object detection at different scales", es: "Combinar características multiescala para mejor detección de objetos a diferentes escalas", de: "Multi-Scale-Features für bessere Objekterkennung auf verschiedenen Skalen kombinieren", nl: "Multi-schaal kenmerken combineren voor betere objectdetectie op verschillende schalen" },
          { en: "Reduce network parameters", es: "Reducir los parámetros de la red", de: "Netzwerkparameter reduzieren", nl: "Netwerkparameters verminderen" },
          { en: "Speed up training", es: "Acelerar el entrenamiento", de: "Training beschleunigen", nl: "Training versnellen" },
          { en: "Prevent gradient vanishing", es: "Prevenir el desvanecimiento del gradiente", de: "Gradientenschwund verhindern", nl: "Gradient vanishing voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Feature Pyramid Networks create a pyramid of features at different scales by combining high-resolution features with semantically strong features from deeper layers. This enables effective detection of objects at various sizes in a single forward pass.",
          es: "Las Feature Pyramid Networks crean una pirámide de características a diferentes escalas combinando características de alta resolución con características semánticamente fuertes de capas más profundas. Esto permite la detección efectiva de objetos de varios tamaños en una sola pasada directa.",
          de: "Feature Pyramid Networks erstellen eine Pyramide von Features auf verschiedenen Skalen, indem sie hochauflösende Features mit semantisch starken Features aus tieferen Schichten kombinieren. Dies ermöglicht die effektive Erkennung von Objekten verschiedener Größen in einem einzigen Vorwärtsdurchlauf.",
          nl: "Feature Pyramid Networks creëren een piramide van kenmerken op verschillende schalen door hoge-resolutie kenmerken te combineren met semantisch sterke kenmerken uit diepere lagen. Dit maakt effectieve detectie van objecten van verschillende groottes mogelijk in één voorwaartse doorgang."
        }
      },
      {
        question: {
          en: "What is the main contribution of Vision Transformer (ViT) to computer vision?",
          es: "¿Cuál es la contribución principal del Vision Transformer (ViT) a la visión por computadora?",
          de: "Was ist der Hauptbeitrag des Vision Transformers (ViT) zur Computer Vision?",
          nl: "Wat is de hoofdbijdrage van Vision Transformer (ViT) aan computer vision?"
        },
        options: [
          { en: "Applies transformer architecture directly to image patches without convolutions", es: "Aplica la arquitectura transformer directamente a parches de imagen sin convoluciones", de: "Wendet Transformer-Architektur direkt auf Bildausschnitte ohne Faltungen an", nl: "Past transformer architectuur direct toe op beeldpatches zonder convoluties" },
          { en: "Improves convolutional neural network efficiency", es: "Mejora la eficiencia de las redes neuronales convolucionales", de: "Verbessert die Effizienz von Convolutional Neural Networks", nl: "Verbetert de efficiëntie van convolutionele neurale netwerken" },
          { en: "Introduces new pooling strategies", es: "Introduce nuevas estrategias de pooling", de: "Führt neue Pooling-Strategien ein", nl: "Introduceert nieuwe pooling strategieën" },
          { en: "Reduces memory requirements for image processing", es: "Reduce los requisitos de memoria para procesamiento de imágenes", de: "Reduziert Speicheranforderungen für Bildverarbeitung", nl: "Vermindert geheugen vereisten voor beeldverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Vision Transformer revolutionized computer vision by showing that pure transformer architectures, originally designed for NLP, can achieve excellent performance on image classification tasks by treating image patches as tokens and using self-attention mechanisms.",
          es: "Vision Transformer revolucionó la visión por computadora mostrando que las arquitecturas transformer puras, originalmente diseñadas para PLN, pueden lograr un excelente rendimiento en tareas de clasificación de imágenes tratando los parches de imagen como tokens y usando mecanismos de auto-atención.",
          de: "Vision Transformer revolutionierte Computer Vision, indem es zeigte, dass reine Transformer-Architekturen, ursprünglich für NLP entworfen, ausgezeichnete Leistung bei Bildklassifikationsaufgaben erreichen können, indem Bildausschnitte als Tokens behandelt und Selbstaufmerksamkeitsmechanismen verwendet werden.",
          nl: "Vision Transformer revolutioneerde computer vision door te tonen dat pure transformer architecturen, oorspronkelijk ontworpen voor NLP, uitstekende prestaties kunnen behalen bij beeldclassificatie taken door beeldpatches als tokens te behandelen en self-attention mechanismen te gebruiken."
        }
      },
      {
        question: {
          en: "What is the purpose of Non-Maximum Suppression (NMS) in object detection?",
          es: "¿Cuál es el propósito de Non-Maximum Suppression (NMS) en detección de objetos?",
          de: "Was ist der Zweck von Non-Maximum Suppression (NMS) in der Objekterkennung?",
          nl: "Wat is het doel van Non-Maximum Suppression (NMS) in objectdetectie?"
        },
        options: [
          { en: "Remove duplicate detections of the same object", es: "Eliminar detecciones duplicadas del mismo objeto", de: "Doppelte Erkennungen desselben Objekts entfernen", nl: "Dubbele detecties van hetzelfde object verwijderen" },
          { en: "Increase detection accuracy", es: "Aumentar la precisión de detección", de: "Erkennungsgenauigkeit erhöhen", nl: "Detectie nauwkeurigheid verhogen" },
          { en: "Speed up inference time", es: "Acelerar el tiempo de inferencia", de: "Inferenzzeit beschleunigen", nl: "Inferentietijd versnellen" },
          { en: "Reduce false negative detections", es: "Reducir detecciones de falsos negativos", de: "Falsch-Negativ-Erkennungen reduzieren", nl: "Vals-negatieve detecties verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Non-Maximum Suppression eliminates redundant bounding boxes by keeping only the detection with the highest confidence score among overlapping detections of the same object, preventing multiple detections of the same instance.",
          es: "Non-Maximum Suppression elimina cajas delimitadoras redundantes manteniendo solo la detección con la puntuación de confianza más alta entre detecciones superpuestas del mismo objeto, previniendo múltiples detecciones de la misma instancia.",
          de: "Non-Maximum Suppression eliminiert redundante Bounding Boxes, indem nur die Erkennung mit der höchsten Konfidenzpunktzahl unter überlappenden Erkennungen desselben Objekts beibehalten wird, wodurch mehrfache Erkennungen derselben Instanz verhindert werden.",
          nl: "Non-Maximum Suppression elimineert redundante bounding boxes door alleen de detectie met de hoogste confidence score te behouden onder overlappende detecties van hetzelfde object, wat meerdere detecties van dezelfde instantie voorkomt."
        }
      },
      {
        question: {
          en: "What is the main innovation of EfficientNet architecture?",
          es: "¿Cuál es la innovación principal de la arquitectura EfficientNet?",
          de: "Was ist die Hauptinnovation der EfficientNet-Architektur?",
          nl: "Wat is de hoofdinnovatie van EfficientNet architectuur?"
        },
        options: [
          { en: "Compound scaling method that balances width, depth, and resolution", es: "Método de escalado compuesto que equilibra ancho, profundidad y resolución", de: "Compound-Skalierungsmethode, die Breite, Tiefe und Auflösung ausbalanciert", nl: "Compound scaling methode die breedte, diepte en resolutie balanceert" },
          { en: "Novel activation function", es: "Nueva función de activación", de: "Neue Aktivierungsfunktion", nl: "Nieuwe activatiefunctie" },
          { en: "Advanced data augmentation techniques", es: "Técnicas avanzadas de aumento de datos", de: "Erweiterte Datenaugmentierungstechniken", nl: "Geavanceerde data augmentatie technieken" },
          { en: "New optimization algorithm", es: "Nuevo algoritmo de optimización", de: "Neuer Optimierungsalgorithmus", nl: "Nieuw optimalisatie algoritme" }
        ],
        correct: 0,
        explanation: {
          en: "EfficientNet introduces compound scaling that uniformly scales network width (channels), depth (layers), and input resolution using a simple compound coefficient. This achieves better efficiency and accuracy trade-offs compared to scaling only one dimension.",
          es: "EfficientNet introduce escalado compuesto que escala uniformemente el ancho de red (canales), profundidad (capas) y resolución de entrada usando un coeficiente compuesto simple. Esto logra mejores compromisos entre eficiencia y precisión comparado con escalar solo una dimensión.",
          de: "EfficientNet führt Compound-Skalierung ein, die Netzwerkbreite (Kanäle), Tiefe (Schichten) und Eingabeauflösung gleichmäßig unter Verwendung eines einfachen Compound-Koeffizienten skaliert. Dies erreicht bessere Effizienz-Genauigkeits-Kompromisse im Vergleich zur Skalierung nur einer Dimension.",
          nl: "EfficientNet introduceert compound scaling dat netwerk breedte (kanalen), diepte (lagen) en invoer resolutie uniform schaalt met een eenvoudige compound coëfficiënt. Dit bereikt betere efficiëntie en nauwkeurigheid trade-offs vergeleken met het schalen van slechts één dimensie."
        }
      },
      {
        question: {
          en: "What is the key advantage of MobileNet architecture?",
          es: "¿Cuál es la ventaja clave de la arquitectura MobileNet?",
          de: "Was ist der Schlüsselvorteil der MobileNet-Architektur?",
          nl: "Wat is het belangrijkste voordeel van MobileNet architectuur?"
        },
        options: [
          { en: "Uses depthwise separable convolutions to reduce computational cost", es: "Usa convoluciones separables en profundidad para reducir el costo computacional", de: "Verwendet tiefenweise trennbare Faltungen zur Reduzierung der Rechenkosten", nl: "Gebruikt depthwise separable convolutions om computationele kosten te verminderen" },
          { en: "Achieves higher accuracy than ResNet", es: "Logra mayor precisión que ResNet", de: "Erreicht höhere Genauigkeit als ResNet", nl: "Bereikt hogere nauwkeurigheid dan ResNet" },
          { en: "Requires less training data", es: "Requiere menos datos de entrenamiento", de: "Benötigt weniger Trainingsdaten", nl: "Vereist minder trainingsdata" },
          { en: "Trains faster than traditional CNNs", es: "Entrena más rápido que las CNN tradicionales", de: "Trainiert schneller als traditionelle CNNs", nl: "Traint sneller dan traditionele CNNs" }
        ],
        correct: 0,
        explanation: {
          en: "MobileNet uses depthwise separable convolutions which factorize standard convolutions into depthwise and pointwise convolutions, significantly reducing the number of parameters and computational cost while maintaining reasonable accuracy for mobile deployment.",
          es: "MobileNet usa convoluciones separables en profundidad que factorizan convoluciones estándar en convoluciones en profundidad y puntuales, reduciendo significativamente el número de parámetros y costo computacional mientras mantiene precisión razonable para despliegue móvil.",
          de: "MobileNet verwendet tiefenweise trennbare Faltungen, die Standard-Faltungen in tiefenweise und punktweise Faltungen faktorisieren, wodurch die Anzahl der Parameter und Rechenkosten erheblich reduziert werden, während eine angemessene Genauigkeit für mobile Bereitstellung beibehalten wird.",
          nl: "MobileNet gebruikt depthwise separable convolutions die standaard convoluties factoreren in depthwise en pointwise convoluties, wat het aantal parameters en computationele kosten significant vermindert terwijl redelijke nauwkeurigheid behouden blijft voor mobiele implementatie."
        }
      },
      {
        question: {
          en: "What is the purpose of Region Proposal Networks (RPN) in Faster R-CNN?",
          es: "¿Cuál es el propósito de las Region Proposal Networks (RPN) en Faster R-CNN?",
          de: "Was ist der Zweck von Region Proposal Networks (RPN) in Faster R-CNN?",
          nl: "Wat is het doel van Region Proposal Networks (RPN) in Faster R-CNN?"
        },
        options: [
          { en: "Generate object proposals by predicting objectness and bounding box coordinates", es: "Generar propuestas de objetos prediciendo objetividad y coordenadas de cajas delimitadoras", de: "Objektvorschläge durch Vorhersage von Objekthaftigkeit und Bounding-Box-Koordinaten generieren", nl: "Object voorstellen genereren door objectness en bounding box coördinaten te voorspellen" },
          { en: "Classify detected objects into categories", es: "Clasificar objetos detectados en categorías", de: "Erkannte Objekte in Kategorien klassifizieren", nl: "Gedetecteerde objecten classificeren in categorieën" },
          { en: "Extract features from input images", es: "Extraer características de imágenes de entrada", de: "Features aus Eingabebildern extrahieren", nl: "Kenmerken extraheren uit invoer afbeeldingen" },
          { en: "Perform non-maximum suppression", es: "Realizar supresión de no-máximos", de: "Non-Maximum-Suppression durchführen", nl: "Non-maximum suppression uitvoeren" }
        ],
        correct: 0,
        explanation: {
          en: "Region Proposal Networks generate object proposals by sliding a network over the feature map and predicting whether each location contains an object (objectness) and the corresponding bounding box coordinates, eliminating the need for external proposal methods.",
          es: "Las Region Proposal Networks generan propuestas de objetos deslizando una red sobre el mapa de características y prediciendo si cada ubicación contiene un objeto (objetividad) y las coordenadas correspondientes de la caja delimitadora, eliminando la necesidad de métodos externos de propuestas.",
          de: "Region Proposal Networks generieren Objektvorschläge, indem sie ein Netzwerk über die Feature-Map gleiten lassen und vorhersagen, ob jede Position ein Objekt enthält (Objekthaftigkeit) und die entsprechenden Bounding-Box-Koordinaten, wodurch externe Vorschlagsmethoden überflüssig werden.",
          nl: "Region Proposal Networks genereren object voorstellen door een netwerk over de feature map te schuiven en te voorspellen of elke locatie een object bevat (objectness) en de bijbehorende bounding box coördinaten, waardoor externe voorstelmethoden overbodig worden."
        }
      },
      {
        question: {
          en: "What is the main advantage of using self-supervised learning in computer vision?",
          es: "¿Cuál es la ventaja principal de usar aprendizaje auto-supervisado en visión por computadora?",
          de: "Was ist der Hauptvorteil der Verwendung von selbstüberwachtem Lernen in Computer Vision?",
          nl: "Wat is het hoofdvoordeel van het gebruik van self-supervised learning in computer vision?"
        },
        options: [
          { en: "Learns useful representations from unlabeled data without human annotations", es: "Aprende representaciones útiles de datos no etiquetados sin anotaciones humanas", de: "Lernt nützliche Repräsentationen aus ungelabelten Daten ohne menschliche Annotationen", nl: "Leert nuttige representaties van ongelabelde data zonder menselijke annotaties" },
          { en: "Always achieves better accuracy than supervised learning", es: "Siempre logra mejor precisión que el aprendizaje supervisado", de: "Erreicht immer bessere Genauigkeit als überwachtes Lernen", nl: "Bereikt altijd betere nauwkeurigheid dan supervised learning" },
          { en: "Requires less computational resources", es: "Requiere menos recursos computacionales", de: "Benötigt weniger Rechenressourcen", nl: "Vereist minder computationele resources" },
          { en: "Trains faster than supervised methods", es: "Entrena más rápido que métodos supervisados", de: "Trainiert schneller als überwachte Methoden", nl: "Traint sneller dan supervised methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning can leverage vast amounts of unlabeled data by creating pretext tasks that generate supervision signals from the data itself, learning meaningful representations that can be transferred to downstream tasks without expensive manual labeling.",
          es: "El aprendizaje auto-supervisado puede aprovechar vastas cantidades de datos no etiquetados creando tareas de pretexto que generan señales de supervisión de los datos mismos, aprendiendo representaciones significativas que pueden transferirse a tareas posteriores sin etiquetado manual costoso.",
          de: "Selbstüberwachtes Lernen kann große Mengen ungelabelter Daten nutzen, indem es Vorwand-Aufgaben erstellt, die Überwachungssignale aus den Daten selbst generieren und bedeutungsvolle Repräsentationen lernen, die auf nachgelagerte Aufgaben ohne teure manuelle Beschriftung übertragen werden können.",
          nl: "Self-supervised learning kan grote hoeveelheden ongelabelde data benutten door pretext taken te creëren die supervisie signalen genereren uit de data zelf, waarbij betekenisvolle representaties geleerd worden die overgedragen kunnen worden naar downstream taken zonder dure handmatige labeling."
        }
      },
      {
        question: {
          en: "What is the primary purpose of Batch Normalization layers in CNNs?",
          es: "¿Cuál es el propósito principal de las capas de Normalización por Lotes en las CNN?",
          de: "Was ist der Hauptzweck von Batch-Normalisierungsschichten in CNNs?",
          nl: "Wat is het primaire doel van Batch Normalization lagen in CNNs?"
        },
        options: [
          { en: "Normalize layer inputs to stabilize training and enable higher learning rates", es: "Normalizar entradas de capa para estabilizar el entrenamiento y permitir tasas de aprendizaje más altas", de: "Schichteingaben normalisieren, um Training zu stabilisieren und höhere Lernraten zu ermöglichen", nl: "Laag invoer normaliseren om training te stabiliseren en hogere leersnelheden mogelijk te maken" },
          { en: "Reduce the number of parameters", es: "Reducir el número de parámetros", de: "Die Anzahl der Parameter reduzieren", nl: "Het aantal parameters verminderen" },
          { en: "Increase spatial resolution", es: "Aumentar la resolución espacial", de: "Räumliche Auflösung erhöhen", nl: "Ruimtelijke resolutie verhogen" },
          { en: "Perform feature selection", es: "Realizar selección de características", de: "Feature-Auswahl durchführen", nl: "Feature selectie uitvoeren" }
        ],
        correct: 0,
        explanation: {
          en: "Batch Normalization normalizes the inputs to each layer, reducing internal covariate shift and allowing for higher learning rates, faster convergence, and acting as a regularizer. This makes deep networks easier to train and more stable.",
          es: "La Normalización por Lotes normaliza las entradas a cada capa, reduciendo el desplazamiento de covariables internas y permitiendo tasas de aprendizaje más altas, convergencia más rápida y actuando como regularizador. Esto hace que las redes profundas sean más fáciles de entrenar y más estables.",
          de: "Batch-Normalisierung normalisiert die Eingaben zu jeder Schicht, reduziert interne Kovariatenverschiebung und ermöglicht höhere Lernraten, schnellere Konvergenz und wirkt als Regularisierer. Dies macht tiefe Netzwerke einfacher zu trainieren und stabiler.",
          nl: "Batch Normalization normaliseert de invoer naar elke laag, vermindert interne covariate shift en maakt hogere leersnelheden mogelijk, snellere convergentie en werkt als regularisator. Dit maakt diepe netwerken makkelijker te trainen en stabieler."
        }
      },
      {
        question: {
          en: "What is the key innovation of YOLO (You Only Look Once) object detection?",
          es: "¿Cuál es la innovación clave de la detección de objetos YOLO (You Only Look Once)?",
          de: "Was ist die Schlüsselinnovation der YOLO (You Only Look Once) Objekterkennung?",
          nl: "Wat is de belangrijkste innovatie van YOLO (You Only Look Once) objectdetectie?"
        },
        options: [
          { en: "Performs object detection as a single regression problem predicting bounding boxes and class probabilities", es: "Realiza detección de objetos como un problema de regresión único prediciendo cajas delimitadoras y probabilidades de clase", de: "Führt Objekterkennung als einzelnes Regressionsproblem durch, das Bounding Boxes und Klassenwahrscheinlichkeiten vorhersagt", nl: "Voert objectdetectie uit als één regressieprobleem dat bounding boxes en klasse waarschijnlijkheden voorspelt" },
          { en: "Uses multiple stages for better accuracy", es: "Usa múltiples etapas para mejor precisión", de: "Verwendet mehrere Stufen für bessere Genauigkeit", nl: "Gebruikt meerdere stadia voor betere nauwkeurigheid" },
          { en: "Focuses only on large objects", es: "Se enfoca solo en objetos grandes", de: "Konzentriert sich nur auf große Objekte", nl: "Richt zich alleen op grote objecten" },
          { en: "Requires pre-computed proposals", es: "Requiere propuestas pre-computadas", de: "Benötigt vorberechnete Vorschläge", nl: "Vereist vooraf berekende voorstellen" }
        ],
        correct: 0,
        explanation: {
          en: "YOLO reframes object detection as a single regression problem, directly predicting bounding box coordinates and class probabilities from full images in one evaluation. This makes it extremely fast compared to region-based methods while maintaining reasonable accuracy.",
          es: "YOLO reenmarca la detección de objetos como un problema de regresión único, prediciendo directamente coordenadas de cajas delimitadoras y probabilidades de clase de imágenes completas en una evaluación. Esto lo hace extremadamente rápido comparado con métodos basados en regiones mientras mantiene precisión razonable.",
          de: "YOLO rahmt Objekterkennung als einzelnes Regressionsproblem neu, indem es direkt Bounding-Box-Koordinaten und Klassenwahrscheinlichkeiten aus vollständigen Bildern in einer Auswertung vorhersagt. Dies macht es im Vergleich zu regionenbasierten Methoden extrem schnell bei angemessener Genauigkeit.",
          nl: "YOLO herformuleert objectdetectie als een enkel regressieprobleem, direct voorspellend van bounding box coördinaten en klasse waarschijnlijkheden uit volledige afbeeldingen in één evaluatie. Dit maakt het extreem snel vergeleken met regio-gebaseerde methoden terwijl redelijke nauwkeurigheid behouden blijft."
        }
      },
      {
        question: {
          en: "What is the main advantage of using Group Normalization over Batch Normalization?",
          es: "¿Cuál es la ventaja principal de usar Normalización por Grupos sobre Normalización por Lotes?",
          de: "Was ist der Hauptvorteil der Verwendung von Gruppennormalisierung gegenüber Batch-Normalisierung?",
          nl: "Wat is het hoofdvoordeel van het gebruik van Group Normalization over Batch Normalization?"
        },
        options: [
          { en: "Works effectively with small batch sizes and is independent of batch size", es: "Funciona efectivamente con tamaños de lote pequeños y es independiente del tamaño del lote", de: "Funktioniert effektiv mit kleinen Batch-Größen und ist unabhängig von der Batch-Größe", nl: "Werkt effectief met kleine batch groottes en is onafhankelijk van batch grootte" },
          { en: "Requires less computational resources", es: "Requiere menos recursos computacionales", de: "Benötigt weniger Rechenressourcen", nl: "Vereist minder computationele resources" },
          { en: "Always provides better accuracy", es: "Siempre proporciona mejor precisión", de: "Bietet immer bessere Genauigkeit", nl: "Biedt altijd betere nauwkeurigheid" },
          { en: "Trains faster than batch normalization", es: "Entrena más rápido que la normalización por lotes", de: "Trainiert schneller als Batch-Normalisierung", nl: "Traint sneller dan batch normalization" }
        ],
        correct: 0,
        explanation: {
          en: "Group Normalization divides channels into groups and normalizes within each group, making it independent of batch size. This is particularly useful when training with small batches or during inference, where batch statistics might not be reliable.",
          es: "La Normalización por Grupos divide los canales en grupos y normaliza dentro de cada grupo, haciéndola independiente del tamaño del lote. Esto es particularmente útil cuando se entrena con lotes pequeños o durante la inferencia, donde las estadísticas del lote podrían no ser confiables.",
          de: "Gruppennormalisierung teilt Kanäle in Gruppen auf und normalisiert innerhalb jeder Gruppe, wodurch sie unabhängig von der Batch-Größe wird. Dies ist besonders nützlich beim Training mit kleinen Batches oder während der Inferenz, wo Batch-Statistiken möglicherweise nicht zuverlässig sind.",
          nl: "Group Normalization verdeelt kanalen in groepen en normaliseert binnen elke groep, waardoor het onafhankelijk wordt van batch grootte. Dit is bijzonder nuttig bij training met kleine batches of tijdens inferentie, waar batch statistieken mogelijk niet betrouwbaar zijn."
        }
      },
      {
        question: {
          en: "What is the purpose of skip connections in neural networks?",
          es: "¿Cuál es el propósito de las conexiones de salto en las redes neuronales?",
          de: "Was ist der Zweck von Skip-Verbindungen in neuronalen Netzwerken?",
          nl: "Wat is het doel van skip connections in neurale netwerken?"
        },
        options: [
          { en: "Allow gradients to flow directly to earlier layers, preventing vanishing gradient problem", es: "Permiten que los gradientes fluyan directamente a capas anteriores, previniendo el problema del gradiente que se desvanece", de: "Ermöglichen Gradienten, direkt zu früheren Schichten zu fließen und verhindern das Problem verschwindender Gradienten", nl: "Laten gradiënten direct naar eerdere lagen stromen, wat het vanishing gradient probleem voorkomt" },
          { en: "Reduce computational complexity", es: "Reducir la complejidad computacional", de: "Rechnerische Komplexität reduzieren", nl: "Computationele complexiteit verminderen" },
          { en: "Increase the number of parameters", es: "Aumentar el número de parámetros", de: "Die Anzahl der Parameter erhöhen", nl: "Het aantal parameters verhogen" },
          { en: "Perform feature selection", es: "Realizar selección de características", de: "Feature-Auswahl durchführen", nl: "Feature selectie uitvoeren" }
        ],
        correct: 0,
        explanation: {
          en: "Skip connections create direct pathways for gradients to flow from later layers to earlier ones, helping to maintain gradient magnitude during backpropagation in very deep networks. This enables training of much deeper architectures like ResNet.",
          es: "Las conexiones de salto crean caminos directos para que los gradientes fluyan de capas posteriores a anteriores, ayudando a mantener la magnitud del gradiente durante la retropropagación en redes muy profundas. Esto permite el entrenamiento de arquitecturas mucho más profundas como ResNet.",
          de: "Skip-Verbindungen schaffen direkte Pfade für Gradienten, um von späteren zu früheren Schichten zu fließen, und helfen dabei, die Gradientenstärke während der Rückwärtspropagation in sehr tiefen Netzwerken aufrechtzuerhalten. Dies ermöglicht das Training viel tieferer Architekturen wie ResNet.",
          nl: "Skip connections creëren directe paden voor gradiënten om van latere naar eerdere lagen te stromen, wat helpt om gradiënt magnitude tijdens backpropagation in zeer diepe netwerken te behouden. Dit maakt training van veel diepere architecturen zoals ResNet mogelijk."
        }
      },
      {
        question: {
          en: "What is the main contribution of DenseNet architecture?",
          es: "¿Cuál es la contribución principal de la arquitectura DenseNet?",
          de: "Was ist der Hauptbeitrag der DenseNet-Architektur?",
          nl: "Wat is de hoofdbijdrage van DenseNet architectuur?"
        },
        options: [
          { en: "Connects each layer to all subsequent layers with dense connections", es: "Conecta cada capa a todas las capas subsiguientes con conexiones densas", de: "Verbindet jede Schicht mit allen nachfolgenden Schichten durch dichte Verbindungen", nl: "Verbindt elke laag met alle volgende lagen met dichte verbindingen" },
          { en: "Uses only 1x1 convolutions", es: "Usa solo convoluciones 1x1", de: "Verwendet nur 1x1-Faltungen", nl: "Gebruikt alleen 1x1 convoluties" },
          { en: "Eliminates all pooling layers", es: "Elimina todas las capas de pooling", de: "Eliminiert alle Pooling-Schichten", nl: "Elimineert alle pooling lagen" },
          { en: "Uses adaptive learning rates", es: "Usa tasas de aprendizaje adaptativas", de: "Verwendet adaptive Lernraten", nl: "Gebruikt adaptieve leersnelheden" }
        ],
        correct: 0,
        explanation: {
          en: "DenseNet introduces dense connections where each layer receives feature maps from all preceding layers and passes its own feature maps to all subsequent layers. This promotes feature reuse, reduces the number of parameters, and improves gradient flow.",
          es: "DenseNet introduce conexiones densas donde cada capa recibe mapas de características de todas las capas precedentes y pasa sus propios mapas de características a todas las capas subsiguientes. Esto promueve la reutilización de características, reduce el número de parámetros y mejora el flujo de gradientes.",
          de: "DenseNet führt dichte Verbindungen ein, bei denen jede Schicht Feature-Maps von allen vorhergehenden Schichten erhält und ihre eigenen Feature-Maps an alle nachfolgenden Schichten weitergibt. Dies fördert Feature-Wiederverwendung, reduziert Parameter und verbessert den Gradientenfluss.",
          nl: "DenseNet introduceert dichte verbindingen waarbij elke laag feature maps ontvangt van alle voorgaande lagen en zijn eigen feature maps doorgeeft aan alle volgende lagen. Dit bevordert feature hergebruik, vermindert het aantal parameters en verbetert gradiënt flow."
        }
      },
      {
        question: {
          en: "What is the primary advantage of using Focal Loss in object detection?",
          es: "¿Cuál es la ventaja principal de usar Focal Loss en detección de objetos?",
          de: "Was ist der Hauptvorteil der Verwendung von Focal Loss in der Objekterkennung?",
          nl: "Wat is het primaire voordeel van het gebruik van Focal Loss in objectdetectie?"
        },
        options: [
          { en: "Addresses class imbalance by down-weighting easy examples and focusing on hard examples", es: "Aborda el desequilibrio de clases reduciendo el peso de ejemplos fáciles y enfocándose en ejemplos difíciles", de: "Behandelt Klassenungleichgewicht durch Herabgewichtung einfacher Beispiele und Fokussierung auf schwere Beispiele", nl: "Pakt klasse onbalans aan door het gewicht van makkelijke voorbeelden te verminderen en te focussen op moeilijke voorbeelden" },
          { en: "Reduces computational requirements", es: "Reduce los requisitos computacionales", de: "Reduziert Rechenanforderungen", nl: "Vermindert computationele vereisten" },
          { en: "Improves training speed", es: "Mejora la velocidad de entrenamiento", de: "Verbessert die Trainingsgeschwindigkeit", nl: "Verbetert trainingssnelheid" },
          { en: "Prevents overfitting", es: "Previene el sobreajuste", de: "Verhindert Overfitting", nl: "Voorkomt overfitting" }
        ],
        correct: 0,
        explanation: {
          en: "Focal Loss modifies the standard cross-entropy loss by adding a modulating term that reduces the relative loss for well-classified examples. This helps the model focus learning on hard negatives and addresses the extreme class imbalance in dense object detection.",
          es: "Focal Loss modifica la pérdida de entropía cruzada estándar agregando un término modulador que reduce la pérdida relativa para ejemplos bien clasificados. Esto ayuda al modelo a enfocar el aprendizaje en negativos difíciles y aborda el desequilibrio extremo de clases en detección densa de objetos.",
          de: "Focal Loss modifiziert den Standard-Cross-Entropy-Loss durch Hinzufügung eines modulierenden Terms, der den relativen Loss für gut klassifizierte Beispiele reduziert. Dies hilft dem Modell, das Lernen auf schwierige Negative zu fokussieren und behandelt das extreme Klassenungleichgewicht bei dichter Objekterkennung.",
          nl: "Focal Loss modificeert de standaard cross-entropy loss door een modulerende term toe te voegen die de relatieve loss voor goed geclassificeerde voorbeelden vermindert. Dit helpt het model om het leren te richten op moeilijke negatieven en pakt de extreme klasse onbalans aan in dichte objectdetectie."
        }
      },
      {
        question: {
          en: "What is the main purpose of data augmentation in deep learning?",
          es: "¿Cuál es el propósito principal del aumento de datos en aprendizaje profundo?",
          de: "Was ist der Hauptzweck der Datenaugmentierung im Deep Learning?",
          nl: "Wat is het hoofddoel van data augmentatie in deep learning?"
        },
        options: [
          { en: "Increase training data diversity to improve generalization and reduce overfitting", es: "Aumentar la diversidad de datos de entrenamiento para mejorar la generalización y reducir el sobreajuste", de: "Trainingsdatenvielfalt erhöhen, um Generalisierung zu verbessern und Overfitting zu reduzieren", nl: "Trainingsdata diversiteit verhogen om generalisatie te verbeteren en overfitting te verminderen" },
          { en: "Speed up training convergence", es: "Acelerar la convergencia del entrenamiento", de: "Trainingskonvergenz beschleunigen", nl: "Training convergentie versnellen" },
          { en: "Reduce memory usage", es: "Reducir el uso de memoria", de: "Speicherverbrauch reduzieren", nl: "Geheugengebruik verminderen" },
          { en: "Improve computational efficiency", es: "Mejorar la eficiencia computacional", de: "Rechnerische Effizienz verbessern", nl: "Computationele efficiëntie verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Data augmentation artificially increases the size and diversity of the training dataset by applying various transformations like rotation, scaling, cropping, and color changes. This helps models generalize better to unseen data and reduces overfitting.",
          es: "El aumento de datos aumenta artificialmente el tamaño y diversidad del conjunto de datos de entrenamiento aplicando varias transformaciones como rotación, escalado, recorte y cambios de color. Esto ayuda a los modelos a generalizar mejor a datos no vistos y reduce el sobreajuste.",
          de: "Datenaugmentierung erhöht künstlich die Größe und Vielfalt des Trainingsdatensatzes durch Anwendung verschiedener Transformationen wie Rotation, Skalierung, Zuschneiden und Farbänderungen. Dies hilft Modellen, besser auf ungesehene Daten zu generalisieren und reduziert Overfitting.",
          nl: "Data augmentatie verhoogt kunstmatig de grootte en diversiteit van de trainingsdataset door verschillende transformaties toe te passen zoals rotatie, schaling, bijsnijden en kleurveranderingen. Dit helpt modellen beter te generaliseren naar onzichtbare data en vermindert overfitting."
        }
      },
      {
        question: {
          en: "What is the key innovation of Transformer architecture in computer vision?",
          es: "¿Cuál es la innovación clave de la arquitectura Transformer en visión por computadora?",
          de: "Was ist die Schlüsselinnovation der Transformer-Architektur in Computer Vision?",
          nl: "Wat is de belangrijkste innovatie van Transformer architectuur in computer vision?"
        },
        options: [
          { en: "Uses self-attention mechanisms to model long-range dependencies in images", es: "Usa mecanismos de auto-atención para modelar dependencias de largo alcance en imágenes", de: "Verwendet Selbstaufmerksamkeitsmechanismen zur Modellierung weitreichender Abhängigkeiten in Bildern", nl: "Gebruikt self-attention mechanismen om lange-afstand afhankelijkheden in afbeeldingen te modelleren" },
          { en: "Eliminates the need for convolutional layers", es: "Elimina la necesidad de capas convolucionales", de: "Eliminiert die Notwendigkeit für Faltungsschichten", nl: "Elimineert de noodzaak voor convolutionele lagen" },
          { en: "Reduces training time significantly", es: "Reduce significativamente el tiempo de entrenamiento", de: "Reduziert Trainingszeit erheblich", nl: "Vermindert trainingstijd aanzienlijk" },
          { en: "Works only with high-resolution images", es: "Funciona solo con imágenes de alta resolución", de: "Funktioniert nur mit hochauflösenden Bildern", nl: "Werkt alleen met hoge-resolutie afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Transformers in computer vision use self-attention mechanisms that allow each patch in an image to attend to all other patches, capturing global dependencies and relationships. This enables modeling of complex spatial relationships that CNNs might struggle with due to their local receptive fields.",
          es: "Los Transformers en visión por computadora usan mecanismos de auto-atención que permiten a cada parche en una imagen atender a todos los otros parches, capturando dependencias y relaciones globales. Esto permite modelar relaciones espaciales complejas con las que las CNN podrían tener dificultades debido a sus campos receptivos locales.",
          de: "Transformer in Computer Vision verwenden Selbstaufmerksamkeitsmechanismen, die es jedem Patch in einem Bild ermöglichen, auf alle anderen Patches zu achten und globale Abhängigkeiten und Beziehungen zu erfassen. Dies ermöglicht die Modellierung komplexer räumlicher Beziehungen, mit denen CNNs aufgrund ihrer lokalen rezeptiven Felder Schwierigkeiten haben könnten.",
          nl: "Transformers in computer vision gebruiken self-attention mechanismen die elke patch in een afbeelding in staat stellen om naar alle andere patches te kijken, waarbij globale afhankelijkheden en relaties gevangen worden. Dit maakt het mogelijk om complexe ruimtelijke relaties te modelleren waar CNNs moeite mee zouden kunnen hebben vanwege hun lokale receptieve velden."
        }
      },
      {
        question: {
          en: "What is the main advantage of using residual connections in very deep networks?",
          es: "¿Cuál es la ventaja principal de usar conexiones residuales en redes muy profundas?",
          de: "Was ist der Hauptvorteil der Verwendung von residualen Verbindungen in sehr tiefen Netzwerken?",
          nl: "Wat is het hoofdvoordeel van het gebruik van residual connections in zeer diepe netwerken?"
        },
        options: [
          { en: "Enables training of much deeper networks by providing gradient flow shortcuts", es: "Permite el entrenamiento de redes mucho más profundas proporcionando atajos de flujo de gradiente", de: "Ermöglicht Training viel tieferer Netzwerke durch Bereitstellung von Gradientenfluss-Abkürzungen", nl: "Maakt training van veel diepere netwerken mogelijk door gradiënt flow shortcuts te bieden" },
          { en: "Reduces the number of parameters significantly", es: "Reduce significativamente el número de parámetros", de: "Reduziert die Anzahl der Parameter erheblich", nl: "Vermindert het aantal parameters aanzienlijk" },
          { en: "Increases training speed dramatically", es: "Aumenta dramáticamente la velocidad de entrenamiento", de: "Erhöht die Trainingsgeschwindigkeit dramatisch", nl: "Verhoogt trainingssnelheid dramatisch" },
          { en: "Eliminates the need for normalization layers", es: "Elimina la necesidad de capas de normalización", de: "Eliminiert die Notwendigkeit für Normalisierungsschichten", nl: "Elimineert de behoefte aan normalisatielagen" }
        ],
        correct: 0,
        explanation: {
          en: "Residual connections allow gradients to flow directly through shortcut paths, preventing the vanishing gradient problem that typically occurs in very deep networks. This enables successful training of networks with hundreds of layers, as demonstrated by ResNet architectures.",
          es: "Las conexiones residuales permiten que los gradientes fluyan directamente a través de caminos de atajo, previniendo el problema del gradiente que se desvanece que típicamente ocurre en redes muy profundas. Esto permite el entrenamiento exitoso de redes con cientos de capas, como demuestra las arquitecturas ResNet.",
          de: "Residuale Verbindungen ermöglichen es Gradienten, direkt durch Abkürzungspfade zu fließen, wodurch das Problem verschwindender Gradienten verhindert wird, das typischerweise in sehr tiefen Netzwerken auftritt. Dies ermöglicht erfolgreiches Training von Netzwerken mit Hunderten von Schichten, wie ResNet-Architekturen zeigen.",
          nl: "Residual connections stellen gradiënten in staat om direct door shortcut paden te stromen, wat het vanishing gradient probleem voorkomt dat typisch optreedt in zeer diepe netwerken. Dit maakt succesvol trainen van netwerken met honderden lagen mogelijk, zoals aangetoond door ResNet architecturen."
        }
      },
      {
        question: {
          en: "What is the primary benefit of using multi-scale training in object detection?",
          es: "¿Cuál es el beneficio principal de usar entrenamiento multi-escala en detección de objetos?",
          de: "Was ist der Hauptvorteil der Verwendung von Multi-Scale-Training in der Objekterkennung?",
          nl: "Wat is het primaire voordeel van het gebruik van multi-scale training in objectdetectie?"
        },
        options: [
          { en: "Improves detection performance for objects at different scales", es: "Mejora el rendimiento de detección para objetos a diferentes escalas", de: "Verbessert die Erkennungsleistung für Objekte auf verschiedenen Skalen", nl: "Verbetert detectieprestaties voor objecten op verschillende schalen" },
          { en: "Reduces training time", es: "Reduce el tiempo de entrenamiento", de: "Reduziert Trainingszeit", nl: "Vermindert trainingstijd" },
          { en: "Decreases memory usage", es: "Disminuye el uso de memoria", de: "Reduziert Speicherverbrauch", nl: "Vermindert geheugengebruik" },
          { en: "Simplifies network architecture", es: "Simplifica la arquitectura de red", de: "Vereinfacht Netzwerkarchitektur", nl: "Vereenvoudigt netwerkarchitectuur" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-scale training exposes the model to objects at various scales during training by using images of different sizes. This helps the model become more robust to scale variations and improves detection performance across different object sizes.",
          es: "El entrenamiento multi-escala expone al modelo a objetos de varias escalas durante el entrenamiento usando imágenes de diferentes tamaños. Esto ayuda al modelo a volverse más robusto a variaciones de escala y mejora el rendimiento de detección a través de diferentes tamaños de objetos.",
          de: "Multi-Scale-Training setzt das Modell während des Trainings Objekten verschiedener Skalen aus, indem Bilder unterschiedlicher Größen verwendet werden. Dies hilft dem Modell, robuster gegenüber Skalenvariationen zu werden und verbessert die Erkennungsleistung bei verschiedenen Objektgrößen.",
          nl: "Multi-scale training stelt het model tijdens training bloot aan objecten op verschillende schalen door afbeeldingen van verschillende groottes te gebruiken. Dit helpt het model om robuuster te worden tegen schaal variaties en verbetert detectieprestaties over verschillende objectgroottes."
        }
      },
      {
        question: {
          en: "What is the main purpose of using anchor boxes in object detection?",
          es: "¿Cuál es el propósito principal de usar cajas ancla en detección de objetos?",
          de: "Was ist der Hauptzweck der Verwendung von Ankerboxen in der Objekterkennung?",
          nl: "Wat is het hoofddoel van het gebruik van anchor boxes in objectdetectie?"
        },
        options: [
          { en: "Provide reference shapes and sizes for predicting bounding boxes at different scales and aspect ratios", es: "Proporcionar formas y tamaños de referencia para predecir cajas delimitadoras en diferentes escalas y proporciones de aspecto", de: "Referenzformen und -größen für die Vorhersage von Bounding Boxes bei verschiedenen Skalen und Seitenverhältnissen bereitstellen", nl: "Referentie vormen en groottes bieden voor het voorspellen van bounding boxes op verschillende schalen en aspect ratio's" },
          { en: "Speed up the detection process", es: "Acelerar el proceso de detección", de: "Den Erkennungsprozess beschleunigen", nl: "Het detectieproces versnellen" },
          { en: "Reduce false positive detections", es: "Reducir detecciones de falsos positivos", de: "Falsch-Positiv-Erkennungen reduzieren", nl: "Vals-positieve detecties verminderen" },
          { en: "Simplify the loss function", es: "Simplificar la función de pérdida", de: "Die Loss-Funktion vereinfachen", nl: "De loss functie vereenvoudigen" }
        ],
        correct: 0,
        explanation: {
          en: "Anchor boxes serve as reference templates of different shapes and sizes at each spatial location in the feature map. The model learns to refine these anchors to better fit actual objects, handling multiple scales and aspect ratios effectively.",
          es: "Las cajas ancla sirven como plantillas de referencia de diferentes formas y tamaños en cada ubicación espacial en el mapa de características. El modelo aprende a refinar estas anclas para ajustarse mejor a objetos reales, manejando múltiples escalas y proporciones de aspecto efectivamente.",
          de: "Ankerboxen dienen als Referenzvorlagen verschiedener Formen und Größen an jeder räumlichen Position in der Feature-Map. Das Modell lernt, diese Anker zu verfeinern, um besser zu tatsächlichen Objekten zu passen und mehrere Skalen und Seitenverhältnisse effektiv zu handhaben.",
          nl: "Anchor boxes dienen als referentie templates van verschillende vormen en groottes op elke ruimtelijke locatie in de feature map. Het model leert deze ankers te verfijnen om beter te passen bij werkelijke objecten, waarbij meerdere schalen en aspect ratio's effectief behandeld worden."
        }
      },
      {
        question: {
          en: "What is the key advantage of using separable convolutions?",
          es: "¿Cuál es la ventaja clave de usar convoluciones separables?",
          de: "Was ist der Schlüsselvorteil der Verwendung von trennbaren Faltungen?",
          nl: "Wat is het belangrijkste voordeel van het gebruik van separable convolutions?"
        },
        options: [
          { en: "Reduces computational cost and parameters while maintaining similar performance", es: "Reduce el costo computacional y parámetros manteniendo rendimiento similar", de: "Reduziert Rechenkosten und Parameter bei ähnlicher Leistung", nl: "Vermindert computationele kosten en parameters terwijl vergelijkbare prestaties behouden blijven" },
          { en: "Increases accuracy significantly", es: "Aumenta la precisión significativamente", de: "Erhöht die Genauigkeit erheblich", nl: "Verhoogt nauwkeurigheid aanzienlijk" },
          { en: "Prevents overfitting completely", es: "Previene completamente el sobreajuste", de: "Verhindert Overfitting vollständig", nl: "Voorkomt overfitting volledig" },
          { en: "Enables training without normalization", es: "Permite entrenamiento sin normalización", de: "Ermöglicht Training ohne Normalisierung", nl: "Maakt training zonder normalisatie mogelijk" }
        ],
        correct: 0,
        explanation: {
          en: "Separable convolutions factorize standard convolutions into depthwise and pointwise operations, dramatically reducing the number of parameters and computations. This makes networks more efficient for mobile and edge deployment while maintaining competitive accuracy.",
          es: "Las convoluciones separables factorizan convoluciones estándar en operaciones en profundidad y puntuales, reduciendo dramáticamente el número de parámetros y computaciones. Esto hace las redes más eficientes para despliegue móvil y de borde manteniendo precisión competitiva.",
          de: "Trennbare Faltungen faktorisieren Standard-Faltungen in tiefenweise und punktweise Operationen, wodurch die Anzahl der Parameter und Berechnungen dramatisch reduziert wird. Dies macht Netzwerke effizienter für mobile und Edge-Bereitstellung bei wettbewerbsfähiger Genauigkeit.",
          nl: "Separable convolutions factoreren standaard convoluties in depthwise en pointwise operaties, wat het aantal parameters en berekeningen dramatisch vermindert. Dit maakt netwerken efficiënter voor mobiele en edge implementatie terwijl competitieve nauwkeurigheid behouden blijft."
        }
      },
      {
        question: {
          en: "What is the purpose of Layer Normalization in transformer architectures?",
          es: "¿Cuál es el propósito de la Normalización de Capa en arquitecturas transformer?",
          de: "Was ist der Zweck der Layer-Normalisierung in Transformer-Architekturen?",
          nl: "Wat is het doel van Layer Normalization in transformer architecturen?"
        },
        options: [
          { en: "Normalizes across feature dimensions for each sequence position independently", es: "Normaliza a través de dimensiones de características para cada posición de secuencia independientemente", de: "Normalisiert über Feature-Dimensionen für jede Sequenzposition unabhängig", nl: "Normaliseert over feature dimensies voor elke sequentiepositie onafhankelijk" },
          { en: "Reduces computational complexity", es: "Reduce la complejidad computacional", de: "Reduziert rechnerische Komplexität", nl: "Vermindert computationele complexiteit" },
          { en: "Prevents attention weights from becoming too large", es: "Previene que los pesos de atención se vuelvan demasiado grandes", de: "Verhindert, dass Aufmerksamkeitsgewichte zu groß werden", nl: "Voorkomt dat attention gewichten te groot worden" },
          { en: "Speeds up training convergence only", es: "Solo acelera la convergencia del entrenamiento", de: "Beschleunigt nur die Trainingskonvergenz", nl: "Versnelt alleen training convergentie" }
        ],
        correct: 0,
        explanation: {
          en: "Layer Normalization in transformers normalizes activations across the feature dimension for each sequence position independently, unlike batch normalization which normalizes across the batch dimension. This makes it suitable for variable-length sequences and provides stable training dynamics.",
          es: "La Normalización de Capa en transformers normaliza activaciones a través de la dimensión de características para cada posición de secuencia independientemente, a diferencia de la normalización por lotes que normaliza a través de la dimensión del lote. Esto la hace adecuada para secuencias de longitud variable y proporciona dinámicas de entrenamiento estables.",
          de: "Layer-Normalisierung in Transformern normalisiert Aktivierungen über die Feature-Dimension für jede Sequenzposition unabhängig, im Gegensatz zur Batch-Normalisierung, die über die Batch-Dimension normalisiert. Dies macht sie geeignet für Sequenzen variabler Länge und bietet stabile Trainingsdynamik.",
          nl: "Layer Normalization in transformers normaliseert activaties over de feature dimensie voor elke sequentiepositie onafhankelijk, in tegenstelling tot batch normalization die over de batch dimensie normaliseert. Dit maakt het geschikt voor sequenties van variabele lengte en biedt stabiele training dynamiek."
        }
      },
      {
        question: {
          en: "What is the main advantage of using Squeeze-and-Excitation (SE) blocks?",
          es: "¿Cuál es la ventaja principal de usar bloques Squeeze-and-Excitation (SE)?",
          de: "Was ist der Hauptvorteil der Verwendung von Squeeze-and-Excitation (SE) Blöcken?",
          nl: "Wat is het hoofdvoordeel van het gebruik van Squeeze-and-Excitation (SE) blokken?"
        },
        options: [
          { en: "Adaptively recalibrates channel-wise feature responses by modeling interdependencies", es: "Recalibra adaptativamente las respuestas de características por canal modelando interdependencias", de: "Kalibriert kanalweise Feature-Antworten adaptiv durch Modellierung von Interdependenzen neu", nl: "Herkalibereert adaptief kanaalgewijze feature responses door interdependenties te modelleren" },
          { en: "Reduces the number of parameters significantly", es: "Reduce significativamente el número de parámetros", de: "Reduziert die Anzahl der Parameter erheblich", nl: "Vermindert het aantal parameters aanzienlijk" },
          { en: "Increases spatial resolution", es: "Aumenta la resolución espacial", de: "Erhöht die räumliche Auflösung", nl: "Verhoogt ruimtelijke resolutie" },
          { en: "Eliminates the need for pooling layers", es: "Elimina la necesidad de capas de pooling", de: "Eliminiert die Notwendigkeit für Pooling-Schichten", nl: "Elimineert de behoefte aan pooling lagen" }
        ],
        correct: 0,
        explanation: {
          en: "Squeeze-and-Excitation blocks explicitly model channel interdependencies by first squeezing spatial dimensions through global pooling, then exciting channels through a small neural network that learns to emphasize informative features and suppress less useful ones.",
          es: "Los bloques Squeeze-and-Excitation modelan explícitamente las interdependencias de canales primero comprimiendo dimensiones espaciales a través de pooling global, luego excitando canales a través de una pequeña red neuronal que aprende a enfatizar características informativas y suprimir las menos útiles.",
          de: "Squeeze-and-Excitation-Blöcke modellieren explizit Kanal-Interdependenzen, indem sie zuerst räumliche Dimensionen durch globales Pooling komprimieren, dann Kanäle durch ein kleines neuronales Netzwerk anregen, das lernt, informative Features zu betonen und weniger nützliche zu unterdrücken.",
          nl: "Squeeze-and-Excitation blokken modelleren expliciet kanaal interdependenties door eerst ruimtelijke dimensies te comprimeren via global pooling, dan kanalen te exciteren via een klein neuraal netwerk dat leert informatieve features te benadrukken en minder nuttige te onderdrukken."
        }
      },
      {
        question: {
          en: "What is the key innovation of Capsule Networks?",
          es: "¿Cuál es la innovación clave de las Redes de Cápsulas?",
          de: "Was ist die Schlüsselinnovation von Kapsel-Netzwerken?",
          nl: "Wat is de belangrijkste innovatie van Capsule Networks?"
        },
        options: [
          { en: "Uses vector outputs (capsules) to represent instantiation parameters of features", es: "Usa salidas vectoriales (cápsulas) para representar parámetros de instanciación de características", de: "Verwendet Vektorausgaben (Kapseln) zur Darstellung von Instanziierungsparametern von Features", nl: "Gebruikt vector outputs (capsules) om instantiatie parameters van features te representeren" },
          { en: "Eliminates the need for backpropagation", es: "Elimina la necesidad de retropropagación", de: "Eliminiert die Notwendigkeit für Rückwärtspropagation", nl: "Elimineert de behoefte aan backpropagation" },
          { en: "Works only with 3D data", es: "Funciona solo con datos 3D", de: "Funktioniert nur mit 3D-Daten", nl: "Werkt alleen met 3D data" },
          { en: "Uses only linear transformations", es: "Usa solo transformaciones lineales", de: "Verwendet nur lineare Transformationen", nl: "Gebruikt alleen lineaire transformaties" }
        ],
        correct: 0,
        explanation: {
          en: "Capsule Networks represent features as vectors (capsules) rather than scalars, where the vector's length represents the probability of feature presence and its orientation encodes instantiation parameters like pose, texture, or deformation, enabling better representation of spatial hierarchies.",
          es: "Las Redes de Cápsulas representan características como vectores (cápsulas) en lugar de escalares, donde la longitud del vector representa la probabilidad de presencia de la característica y su orientación codifica parámetros de instanciación como pose, textura o deformación, permitiendo mejor representación de jerarquías espaciales.",
          de: "Kapsel-Netzwerke repräsentieren Features als Vektoren (Kapseln) anstatt als Skalare, wobei die Vektorlänge die Wahrscheinlichkeit des Feature-Vorhandenseins darstellt und seine Orientierung Instanziierungsparameter wie Pose, Textur oder Deformation kodiert, was eine bessere Darstellung räumlicher Hierarchien ermöglicht.",
          nl: "Capsule Networks representeren features als vectoren (capsules) in plaats van scalaire waarden, waarbij de vectorlengte de waarschijnlijkheid van feature aanwezigheid weergeeft en de oriëntatie instantiatie parameters zoals pose, textuur of deformatie codeert, wat betere representatie van ruimtelijke hiërarchieën mogelijk maakt."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/artificial-intelligence', level3);
  }
})();