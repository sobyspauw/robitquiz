// Deep Learning Quiz - Level 4: Advanced Architectures and CNNs
(function() {
  const level4 = {
    name: {
      en: "Deep Learning Level 4",
      es: "Aprendizaje Profundo Nivel 4",
      de: "Deep Learning Stufe 4",
      nl: "Deep Learning Level 4"
    },
    questions: [
      {
        question: {
          en: "What is a Convolutional Neural Network (CNN) specifically designed for?",
          es: "¿Para qué está específicamente diseñada una Red Neuronal Convolucional (CNN)?",
          de: "Wofür ist ein Convolutional Neural Network (CNN) spezifisch entworfen?",
          nl: "Waarvoor is een Convolutional Neural Network (CNN) specifiek ontworpen?"
        },
        options: [
          { en: "Processing grid-like data such as images by detecting spatial patterns", es: "Procesar datos tipo rejilla como imágenes detectando patrones espaciales", de: "Gitterartige Daten wie Bilder durch Erkennung räumlicher Muster verarbeiten", nl: "Rasterachtige data zoals afbeeldingen verwerken door ruimtelijke patronen te detecteren" },
          { en: "Processing sequential text data only", es: "Procesar solo datos de texto secuencial", de: "Nur sequenzielle Textdaten verarbeiten", nl: "Alleen sequentiële tekstdata verwerken" },
          { en: "Creating convolutions in mathematical equations", es: "Crear convoluciones en ecuaciones matemáticas", de: "Faltungen in mathematischen Gleichungen erstellen", nl: "Convoluties creëren in wiskundige vergelijkingen" },
          { en: "Converting neural networks to different formats", es: "Convertir redes neuronales a diferentes formatos", de: "Neuronale Netzwerke in verschiedene Formate konvertieren", nl: "Neurale netwerken converteren naar verschillende formaten" }
        ],
        correct: 0,
        explanation: {
          en: "CNNs use convolution and pooling operations to efficiently process images by detecting local features like edges, shapes, and textures while preserving spatial relationships.",
          es: "Las CNN usan operaciones de convolución y pooling para procesar eficientemente imágenes detectando características locales como bordes, formas y texturas mientras preservan relaciones espaciales.",
          de: "CNNs verwenden Faltungs- und Pooling-Operationen um Bilder effizient zu verarbeiten durch Erkennung lokaler Merkmale wie Kanten, Formen und Texturen während räumliche Beziehungen erhalten bleiben.",
          nl: "CNNs gebruiken convolutie en pooling operaties om afbeeldingen efficiënt te verwerken door lokale kenmerken zoals randen, vormen en texturen te detecteren terwijl ruimtelijke relaties behouden blijven."
        }
      },
      {
        question: {
          en: "What is the purpose of pooling layers in a CNN?",
          es: "¿Cuál es el propósito de las capas de pooling en una CNN?",
          de: "Was ist der Zweck von Pooling-Schichten in einem CNN?",
          nl: "Wat is het doel van pooling layers in een CNN?"
        },
        options: [
          { en: "Reduce spatial dimensions while retaining important features", es: "Reducir dimensiones espaciales mientras retienen características importantes", de: "Räumliche Dimensionen reduzieren während wichtige Merkmale beibehalten werden", nl: "Ruimtelijke dimensies verkleinen terwijl belangrijke kenmerken behouden blijven" },
          { en: "Increase the number of parameters in the network", es: "Aumentar el número de parámetros en la red", de: "Die Anzahl der Parameter im Netzwerk erhöhen", nl: "Het aantal parameters in het netwerk verhogen" },
          { en: "Add more layers to the network", es: "Agregar más capas a la red", de: "Mehr Schichten zum Netzwerk hinzufügen", nl: "Meer lagen toevoegen aan het netwerk" },
          { en: "Store data in memory pools", es: "Almacenar datos en pools de memoria", de: "Daten in Speicherpools speichern", nl: "Data opslaan in geheugenpools" }
        ],
        correct: 0,
        explanation: {
          en: "Pooling layers downsample feature maps, reducing computational complexity and making the network more robust to small translations and distortions in the input.",
          es: "Las capas de pooling reducen la muestra de mapas de características, reduciendo la complejidad computacional y haciendo la red más robusta a pequeñas traslaciones y distorsiones en la entrada.",
          de: "Pooling-Schichten verkleinern Feature-Maps, reduzieren rechnerische Komplexität und machen das Netzwerk robuster gegen kleine Verschiebungen und Verzerrungen in der Eingabe.",
          nl: "Pooling layers verkleinen feature maps, verminderen computationele complexiteit en maken het netwerk robuuster tegen kleine verschuivingen en verstoringen in de input."
        }
      },
      {
        question: {
          en: "What is transfer learning in deep learning?",
          es: "¿Qué es el aprendizaje por transferencia en aprendizaje profundo?",
          de: "Was ist Transfer Learning in Deep Learning?",
          nl: "Wat is transfer learning in deep learning?"
        },
        options: [
          { en: "Using pre-trained models on new tasks by adapting learned features", es: "Usar modelos pre-entrenados en nuevas tareas adaptando características aprendidas", de: "Vortrainierte Modelle für neue Aufgaben verwenden durch Anpassung gelernter Merkmale", nl: "Voorgetrainde modellen gebruiken voor nieuwe taken door geleerde kenmerken aan te passen" },
          { en: "Transferring data between different computers", es: "Transferir datos entre diferentes computadoras", de: "Daten zwischen verschiedenen Computern übertragen", nl: "Data overdragen tussen verschillende computers" },
          { en: "Moving neural networks to different hardware", es: "Mover redes neuronales a diferentes hardware", de: "Neuronale Netzwerke auf verschiedene Hardware verschieben", nl: "Neurale netwerken verplaatsen naar verschillende hardware" },
          { en: "Converting one learning algorithm to another", es: "Convertir un algoritmo de aprendizaje a otro", de: "Einen Lernalgorithmus in einen anderen umwandeln", nl: "Een leeralgoritme converteren naar een ander" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning leverages knowledge from pre-trained models, allowing faster training and better performance on new tasks with limited data by reusing learned representations.",
          es: "El aprendizaje por transferencia aprovecha conocimiento de modelos pre-entrenados, permitiendo entrenamiento más rápido y mejor rendimiento en nuevas tareas con datos limitados reutilizando representaciones aprendidas.",
          de: "Transfer Learning nutzt Wissen aus vortrainierten Modellen, ermöglicht schnelleres Training und bessere Leistung bei neuen Aufgaben mit begrenzten Daten durch Wiederverwendung gelernter Repräsentationen.",
          nl: "Transfer learning benut kennis van voorgetrainde modellen, maakt snellere training en betere prestaties mogelijk bij nieuwe taken met beperkte data door hergebruik van geleerde representaties."
        }
      },
      {
        question: {
          en: "What is the difference between overfitting and underfitting in deep learning?",
          es: "¿Cuál es la diferencia entre sobreajuste y subajuste en aprendizaje profundo?",
          de: "Was ist der Unterschied zwischen Overfitting und Underfitting in Deep Learning?",
          nl: "Wat is het verschil tussen overfitting en underfitting in deep learning?"
        },
        options: [
          { en: "Overfitting memorizes training data poorly generalizing, underfitting fails to learn underlying patterns", es: "Sobreajuste memoriza datos de entrenamiento generalizando mal, subajuste falla en aprender patrones subyacentes", de: "Overfitting memoriert Trainingsdaten schlecht generalisierend, Underfitting versagt zugrundeliegende Muster zu lernen", nl: "Overfitting memoriseert trainingsdata met slechte generalisatie, underfitting faalt onderliggende patronen te leren" },
          { en: "Overfitting uses too few parameters, underfitting uses too many", es: "Sobreajuste usa muy pocos parámetros, subajuste usa demasiados", de: "Overfitting verwendet zu wenige Parameter, Underfitting verwendet zu viele", nl: "Overfitting gebruikt te weinig parameters, underfitting gebruikt te veel" },
          { en: "Overfitting trains too slowly, underfitting trains too quickly", es: "Sobreajuste entrena muy lentamente, subajuste entrena muy rápidamente", de: "Overfitting trainiert zu langsam, Underfitting trainiert zu schnell", nl: "Overfitting traint te langzaam, underfitting traint te snel" },
          { en: "Both terms refer to the same concept", es: "Ambos términos se refieren al mismo concepto", de: "Beide Begriffe beziehen sich auf dasselbe Konzept", nl: "Beide termen verwijzen naar hetzelfde concept" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting occurs when a model learns training data too well but fails on new data, while underfitting happens when a model is too simple to capture the underlying data patterns.",
          es: "Sobreajuste ocurre cuando un modelo aprende datos de entrenamiento muy bien pero falla en datos nuevos, mientras subajuste sucede cuando un modelo es muy simple para capturar patrones de datos subyacentes.",
          de: "Overfitting tritt auf wenn ein Modell Trainingsdaten zu gut lernt aber bei neuen Daten versagt, während Underfitting passiert wenn ein Modell zu einfach ist um zugrundeliegende Datenmuster zu erfassen.",
          nl: "Overfitting treedt op wanneer een model trainingsdata te goed leert maar faalt bij nieuwe data, terwijl underfitting gebeurt wanneer een model te simpel is om onderliggende datapatronen vast te leggen."
        }
      },
      {
        question: {
          en: "What is the purpose of the ReLU activation function in deep learning?",
          es: "¿Cuál es el propósito de la función de activación ReLU en aprendizaje profundo?",
          de: "Was ist der Zweck der ReLU-Aktivierungsfunktion in Deep Learning?",
          nl: "Wat is het doel van de ReLU activatiefunctie in deep learning?"
        },
        options: [
          { en: "Introduces non-linearity while being computationally efficient and reducing vanishing gradient problems", es: "Introduce no linealidad siendo computacionalmente eficiente y reduciendo problemas de gradiente que desaparece", de: "Führt Nichtlinearität ein während es rechnerisch effizient ist und Probleme mit verschwindenden Gradienten reduziert", nl: "Introduceert non-lineariteit terwijl het computationeel efficiënt is en verdwijnende gradiënt problemen vermindert" },
          { en: "Reduces the learning rate automatically", es: "Reduce la tasa de aprendizaje automáticamente", de: "Reduziert die Lernrate automatisch", nl: "Vermindert de learning rate automatisch" },
          { en: "Converts all negative values to positive", es: "Convierte todos los valores negativos a positivos", de: "Wandelt alle negativen Werte in positive um", nl: "Converteert alle negatieve waarden naar positieve" },
          { en: "Normalizes all outputs to between 0 and 1", es: "Normaliza todas las salidas entre 0 y 1", de: "Normalisiert alle Ausgaben zwischen 0 und 1", nl: "Normaliseert alle outputs tussen 0 en 1" }
        ],
        correct: 0,
        explanation: {
          en: "ReLU (Rectified Linear Unit) outputs the input if positive, zero otherwise. It's simple, fast to compute, and helps mitigate vanishing gradients in deep networks.",
          es: "ReLU (Unidad Lineal Rectificada) produce la entrada si es positiva, cero en caso contrario. Es simple, rápido de calcular y ayuda a mitigar gradientes que desaparecen en redes profundas.",
          de: "ReLU (Rectified Linear Unit) gibt die Eingabe aus wenn positiv, sonst Null. Es ist einfach, schnell zu berechnen und hilft verschwindende Gradienten in tiefen Netzwerken zu mildern.",
          nl: "ReLU (Rectified Linear Unit) geeft de input als output indien positief, anders nul. Het is eenvoudig, snel te berekenen en helpt verdwijnende gradiënten in diepe netwerken te verminderen."
        }
      },
      {
        question: {
          en: "What is a convolution operation in CNNs?",
          es: "¿Qué es una operación de convolución en CNNs?",
          de: "Was ist eine Faltungsoperation in CNNs?",
          nl: "Wat is een convolutie operatie in CNNs?"
        },
        options: [
          { en: "A mathematical operation that slides a filter over input data to detect features by computing element-wise products and sums", es: "Una operación matemática que desliza filtro sobre datos para detectar características computando productos y sumas", de: "Eine mathematische Operation die Filter über Daten schiebt um Merkmale durch Berechnung elementweiser Produkte zu erkennen", nl: "Een wiskundige operatie die filter over data schuift om kenmerken te detecteren door element-gewijs producten te berekenen" },
          { en: "A process of combining multiple images together", es: "Un proceso de combinar múltiples imágenes juntas", de: "Ein Prozess zur Kombination mehrerer Bilder", nl: "Een proces van het combineren van meerdere afbeeldingen" },
          { en: "A method for rotating images", es: "Un método para rotar imágenes", de: "Eine Methode zum Drehen von Bildern", nl: "Een methode voor het roteren van afbeeldingen" },
          { en: "A technique for changing image colors", es: "Una técnica para cambiar colores de imagen", de: "Eine Technik zum Ändern von Bildfarben", nl: "Een techniek voor het veranderen van afbeeldingskleuren" }
        ],
        correct: 0,
        explanation: {
          en: "Convolution applies filters (kernels) across input images to create feature maps that highlight specific patterns like edges, textures, or shapes through local receptive fields.",
          es: "La convolución aplica filtros (kernels) a través de imágenes de entrada para crear mapas de características que resaltan patrones específicos como bordes, texturas o formas a través de campos receptivos locales.",
          de: "Faltung wendet Filter (Kernels) über Eingabebilder an um Feature-Maps zu erstellen die spezifische Muster wie Kanten, Texturen oder Formen durch lokale rezeptive Felder hervorheben.",
          nl: "Convolutie past filters (kernels) toe over invoerbeelden om feature maps te creëren die specifieke patronen zoals randen, texturen of vormen benadrukken door lokale receptieve velden."
        }
      },
      {
        question: {
          en: "What is a kernel or filter in convolutional layers?",
          es: "¿Qué es un kernel o filtro en capas convolucionales?",
          de: "Was ist ein Kernel oder Filter in Faltungsschichten?",
          nl: "Wat is een kernel of filter in convolutielagen?"
        },
        options: [
          { en: "A small matrix of weights that detects specific features when convolved with input data", es: "Una matriz pequeña de pesos que detecta características específicas cuando se convoluciona con datos de entrada", de: "Eine kleine Matrix von Gewichten die spezifische Merkmale erkennt wenn sie mit Eingabedaten gefaltet wird", nl: "Een kleine matrix van gewichten die specifieke kenmerken detecteert wanneer geconvolueerd met inputdata" },
          { en: "The core processing unit of the computer", es: "La unidad de procesamiento central de la computadora", de: "Die zentrale Verarbeitungseinheit des Computers", nl: "De centrale verwerkingseenheid van de computer" },
          { en: "A file containing the entire neural network", es: "Un archivo que contiene toda la red neuronal", de: "Eine Datei die das gesamte neuronale Netzwerk enthält", nl: "Een bestand dat het gehele neurale netwerk bevat" },
          { en: "A layer that filters out bad data", es: "Una capa que filtra datos malos", de: "Eine Schicht die schlechte Daten herausfiltert", nl: "Een laag die slechte data filtert" }
        ],
        correct: 0,
        explanation: {
          en: "Kernels are learnable parameter matrices that act as feature detectors, with different kernels learning to recognize different patterns like horizontal edges, vertical edges, or more complex features.",
          es: "Los kernels son matrices de parámetros aprendibles que actúan como detectores de características, con diferentes kernels aprendiendo a reconocer diferentes patrones como bordes horizontales, verticales o características más complejas.",
          de: "Kernels sind lernbare Parametermatrizen die als Feature-Detektoren fungieren, wobei verschiedene Kernels lernen verschiedene Muster wie horizontale Kanten, vertikale Kanten oder komplexere Merkmale zu erkennen.",
          nl: "Kernels zijn leerbare parametermatrices die fungeren als kenmerkdetectors, waarbij verschillende kernels leren verschillende patronen te herkennen zoals horizontale randen, verticale randen of complexere kenmerken."
        }
      },
      {
        question: {
          en: "What is max pooling and how does it work?",
          es: "¿Qué es max pooling y cómo funciona?",
          de: "Was ist Max Pooling und wie funktioniert es?",
          nl: "Wat is max pooling en hoe werkt het?"
        },
        options: [
          { en: "A downsampling operation that takes the maximum value from each region of the feature map", es: "Una operación de submuestreo que toma el valor máximo de cada región del mapa de características", de: "Eine Downsampling-Operation die den maximalen Wert aus jeder Region der Feature-Map nimmt", nl: "Een downsampling operatie die de maximale waarde neemt uit elke regio van de feature map" },
          { en: "Finding the maximum number of pools in the network", es: "Encontrar el número máximo de pools en la red", de: "Die maximale Anzahl von Pools im Netzwerk finden", nl: "Het maximale aantal pools in het netwerk vinden" },
          { en: "Combining all pooling layers together", es: "Combinar todas las capas de pooling juntas", de: "Alle Pooling-Schichten zusammenfassen", nl: "Alle pooling lagen samencombineren" },
          { en: "Setting the maximum size for memory pools", es: "Establecer el tamaño máximo para pools de memoria", de: "Die maximale Größe für Speicherpools festlegen", nl: "De maximale grootte instellen voor geheugenpools" }
        ],
        correct: 0,
        explanation: {
          en: "Max pooling reduces spatial dimensions by keeping only the strongest activation in each pooling window, making the network invariant to small translations and reducing computational load.",
          es: "Max pooling reduce dimensiones espaciales manteniendo solo la activación más fuerte en cada ventana de pooling, haciendo la red invariante a pequeñas traslaciones y reduciendo carga computacional.",
          de: "Max Pooling reduziert räumliche Dimensionen durch Behalten nur der stärksten Aktivierung in jedem Pooling-Fenster, macht das Netzwerk invariant gegen kleine Verschiebungen und reduziert rechnerische Last.",
          nl: "Max pooling vermindert ruimtelijke dimensies door alleen de sterkste activatie in elk pooling venster te behouden, maakt het netwerk invariant voor kleine verschuivingen en vermindert computationele belasting."
        }
      },
      {
        question: {
          en: "What is padding in convolutional layers?",
          es: "¿Qué es el padding en capas convolucionales?",
          de: "Was ist Padding in Faltungsschichten?",
          nl: "Wat is padding in convolutielagen?"
        },
        options: [
          { en: "Adding zeros or values around the input borders to control output size and preserve edge information", es: "Agregar ceros alrededor de bordes de entrada para controlar tamaño de salida y preservar información de bordes", de: "Nullen um Eingaberänder hinzufügen um Ausgabegröße zu kontrollieren und Randinformationen zu bewahren", nl: "Nullen of waarden rond inputranden toevoegen om outputgrootte te controleren en randinformatie te behouden" },
          { en: "Extra layers added for more processing", es: "Capas extra agregadas para más procesamiento", de: "Zusätzliche Schichten für mehr Verarbeitung hinzugefügt", nl: "Extra lagen toegevoegd voor meer verwerking" },
          { en: "Soft material to protect the neural network", es: "Material suave para proteger la red neuronal", de: "Weiches Material zum Schutz des neuronalen Netzwerks", nl: "Zacht materiaal om het neurale netwerk te beschermen" },
          { en: "Empty space between network layers", es: "Espacio vacío entre capas de red", de: "Leerer Raum zwischen Netzwerkschichten", nl: "Lege ruimte tussen netwerklagen" }
        ],
        correct: 0,
        explanation: {
          en: "Padding allows control over output dimensions and ensures edge pixels receive equal treatment during convolution, with 'same' padding maintaining input size and 'valid' padding reducing it.",
          es: "El padding permite control sobre dimensiones de salida y asegura que píxeles de borde reciban tratamiento igual durante convolución, con padding 'same' manteniendo tamaño de entrada y 'valid' reduciéndolo.",
          de: "Padding ermöglicht Kontrolle über Ausgabedimensionen und stellt sicher dass Randpixel gleichbehandelt werden während Faltung, mit 'same' Padding Eingabegröße beibehaltend und 'valid' sie reduzierend.",
          nl: "Padding maakt controle over outputdimensies mogelijk en zorgt ervoor dat randpixels gelijke behandeling krijgen tijdens convolutie, met 'same' padding die inputgrootte behoudt en 'valid' die het verkleint."
        }
      },
      {
        question: {
          en: "What is stride in convolutional operations?",
          es: "¿Qué es el stride en operaciones convolucionales?",
          de: "Was ist Stride in Faltungsoperationen?",
          nl: "Wat is stride in convolutieoperaties?"
        },
        options: [
          { en: "The step size by which the filter moves across the input, controlling output dimensions", es: "El tamaño de paso por el cual el filtro se mueve a través de la entrada, controlando dimensiones de salida", de: "Die Schrittgröße mit der sich der Filter über die Eingabe bewegt, kontrolliert Ausgabedimensionen", nl: "De stapgrootte waarmee de filter over de input beweegt, controleert outputdimensies" },
          { en: "The number of steps in the training process", es: "El número de pasos en el proceso de entrenamiento", de: "Die Anzahl der Schritte im Trainingsprozess", nl: "Het aantal stappen in het trainingsproces" },
          { en: "The speed at which the network processes data", es: "La velocidad a la que la red procesa datos", de: "Die Geschwindigkeit mit der das Netzwerk Daten verarbeitet", nl: "De snelheid waarmee het netwerk data verwerkt" },
          { en: "The distance between layers in the network", es: "La distancia entre capas en la red", de: "Der Abstand zwischen Schichten im Netzwerk", nl: "De afstand tussen lagen in het netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "Stride determines how much the convolution window moves each step - larger strides create smaller output feature maps and provide downsampling effect similar to pooling.",
          es: "El stride determina cuánto se mueve la ventana de convolución cada paso - strides más grandes crean mapas de características de salida más pequeños y proporcionan efecto de submuestreo similar al pooling.",
          de: "Stride bestimmt wie viel sich das Faltungsfenster jeden Schritt bewegt - größere Strides erstellen kleinere Ausgabe-Feature-Maps und bieten Downsampling-Effekt ähnlich dem Pooling.",
          nl: "Stride bepaalt hoeveel het convolutievenster elke stap beweegt - grotere strides creëren kleinere output feature maps en bieden downsampling effect vergelijkbaar met pooling."
        }
      },
      {
        question: {
          en: "What are feature maps in CNNs?",
          es: "¿Qué son los mapas de características en CNNs?",
          de: "Was sind Feature-Maps in CNNs?",
          nl: "Wat zijn feature maps in CNNs?"
        },
        options: [
          { en: "The output of convolutional layers showing spatial locations of detected features", es: "La salida de capas convolucionales mostrando ubicaciones espaciales de características detectadas", de: "Die Ausgabe von Faltungsschichten die räumliche Positionen erkannter Merkmale zeigen", nl: "De output van convolutielagen die ruimtelijke locaties van gedetecteerde kenmerken tonen" },
          { en: "Maps showing the geographic features of training data", es: "Mapas mostrando características geográficas de datos de entrenamiento", de: "Karten die geografische Merkmale von Trainingsdaten zeigen", nl: "Kaarten die geografische kenmerken van trainingsdata tonen" },
          { en: "Documentation of all features in the network", es: "Documentación de todas las características en la red", de: "Dokumentation aller Merkmale im Netzwerk", nl: "Documentatie van alle kenmerken in het netwerk" },
          { en: "Visual representations of network architecture", es: "Representaciones visuales de arquitectura de red", de: "Visuelle Darstellungen der Netzwerkarchitektur", nl: "Visuele representaties van netwerkarchitectuur" }
        ],
        correct: 0,
        explanation: {
          en: "Feature maps are 2D or 3D arrays produced by applying filters to input data, with each map highlighting different aspects like edges, textures, or complex patterns at various spatial locations.",
          es: "Los mapas de características son arrays 2D o 3D producidos al aplicar filtros a datos de entrada, con cada mapa resaltando diferentes aspectos como bordes, texturas o patrones complejos en varias ubicaciones espaciales.",
          de: "Feature-Maps sind 2D- oder 3D-Arrays die durch Anwendung von Filtern auf Eingabedaten produziert werden, wobei jede Map verschiedene Aspekte wie Kanten, Texturen oder komplexe Muster an verschiedenen räumlichen Positionen hervorhebt.",
          nl: "Feature maps zijn 2D of 3D arrays geproduceerd door filters toe te passen op inputdata, waarbij elke map verschillende aspecten benadrukt zoals randen, texturen of complexe patronen op verschillende ruimtelijke locaties."
        }
      },
      {
        question: {
          en: "What is the difference between same and valid padding?",
          es: "¿Cuál es la diferencia entre padding same y valid?",
          de: "Was ist der Unterschied zwischen same und valid Padding?",
          nl: "Wat is het verschil tussen same en valid padding?"
        },
        options: [
          { en: "Same padding keeps output size equal to input size, valid padding reduces output size", es: "Same padding mantiene tamaño de salida igual al tamaño de entrada, valid padding reduce tamaño de salida", de: "Same Padding hält Ausgabegröße gleich Eingabegröße, valid Padding reduziert Ausgabegröße", nl: "Same padding houdt outputgrootte gelijk aan inputgrootte, valid padding vermindert outputgrootte" },
          { en: "Same padding uses zeros, valid padding uses ones", es: "Same padding usa ceros, valid padding usa unos", de: "Same Padding verwendet Nullen, valid Padding verwendet Einsen", nl: "Same padding gebruikt nullen, valid padding gebruikt enen" },
          { en: "Same padding is for training, valid padding is for testing", es: "Same padding es para entrenamiento, valid padding es para pruebas", de: "Same Padding ist für Training, valid Padding ist für Testen", nl: "Same padding is voor training, valid padding is voor testen" },
          { en: "They are the same thing with different names", es: "Son lo mismo con nombres diferentes", de: "Sie sind dasselbe mit verschiedenen Namen", nl: "Het zijn hetzelfde met verschillende namen" }
        ],
        correct: 0,
        explanation: {
          en: "Same padding adds enough zeros to maintain input dimensions after convolution, while valid padding applies no padding, resulting in smaller output dimensions.",
          es: "Same padding añade suficientes ceros para mantener dimensiones de entrada después de convolución, mientras valid padding no aplica padding, resultando en dimensiones de salida más pequeñas.",
          de: "Same Padding fügt genug Nullen hinzu um Eingabedimensionen nach Faltung beizubehalten, während valid Padding kein Padding anwendet, resultiert in kleineren Ausgabedimensionen.",
          nl: "Same padding voegt genoeg nullen toe om inputdimensies na convolutie te behouden, terwijl valid padding geen padding toepast, resulterend in kleinere outputdimensies."
        }
      },
      {
        question: {
          en: "What is data augmentation in the context of CNNs?",
          es: "¿Qué es la aumentación de datos en el contexto de CNNs?",
          de: "Was ist Datenaugmentation im Kontext von CNNs?",
          nl: "Wat is data augmentation in de context van CNNs?"
        },
        options: [
          { en: "Artificially expanding the training dataset by applying transformations like rotation, scaling, or flipping to existing images", es: "Expandir dataset de entrenamiento aplicando transformaciones como rotación, escalado o volteo a imágenes", de: "Trainingsdatensatz erweitern durch Transformationen wie Rotation, Skalierung oder Spiegelung auf Bilder", nl: "Trainingsdataset uitbreiden door transformaties zoals rotatie, schaling of spiegeling op beelden toe te passen" },
          { en: "Adding more layers to make the network bigger", es: "Agregar más capas para hacer la red más grande", de: "Mehr Schichten hinzufügen um das Netzwerk größer zu machen", nl: "Meer lagen toevoegen om het netwerk groter te maken" },
          { en: "Increasing the resolution of input images", es: "Aumentar la resolución de imágenes de entrada", de: "Die Auflösung von Eingabebildern erhöhen", nl: "De resolutie van invoerbeelden verhogen" },
          { en: "Using more powerful computers for training", es: "Usar computadoras más poderosas para entrenamiento", de: "Leistungsstärkere Computer für Training verwenden", nl: "Krachtigere computers gebruiken voor training" }
        ],
        correct: 0,
        explanation: {
          en: "Data augmentation helps prevent overfitting and improves generalization by creating diverse variations of training images, teaching the model to be robust to different conditions.",
          es: "La aumentación de datos ayuda a prevenir sobreajuste y mejora generalización creando variaciones diversas de imágenes de entrenamiento, enseñando al modelo a ser robusto a diferentes condiciones.",
          de: "Datenaugmentation hilft Overfitting zu verhindern und verbessert Generalisierung durch Erstellen vielfältiger Variationen von Trainingsbildern, lehrt das Modell robust gegenüber verschiedenen Bedingungen zu sein.",
          nl: "Data augmentation helpt overfitting voorkomen en verbetert generalisatie door diverse variaties van trainingsbeelden te creëren, leert het model robuust te zijn voor verschillende omstandigheden."
        }
      },
      {
        question: {
          en: "What is a receptive field in CNNs?",
          es: "¿Qué es un campo receptivo en CNNs?",
          de: "Was ist ein rezeptives Feld in CNNs?",
          nl: "Wat is een receptief veld in CNNs?"
        },
        options: [
          { en: "The region of the input image that influences a particular feature in the output", es: "La región de la imagen de entrada que influye en una característica particular en la salida", de: "Die Region des Eingabebildes die ein Merkmal in der Ausgabe beeinflusst", nl: "Het gebied van het invoerbeeld dat een bepaald kenmerk in de output beïnvloedt" },
          { en: "A field where the network receives training data", es: "Un campo donde la red recibe datos de entrenamiento", de: "Ein Feld wo das Netzwerk Trainingsdaten empfängt", nl: "Een veld waar het netwerk trainingsdata ontvangt" },
          { en: "The area of memory used for data reception", es: "El área de memoria usada para recepción de datos", de: "Der Speicherbereich für Datenempfang verwendet", nl: "Het geheugengebied gebruikt voor data-ontvangst" },
          { en: "The network's ability to receive new information", es: "La capacidad de la red para recibir nueva información", de: "Die Fähigkeit des Netzwerks neue Informationen zu empfangen", nl: "Het vermogen van het netwerk om nieuwe informatie te ontvangen" }
        ],
        correct: 0,
        explanation: {
          en: "Receptive field size grows with network depth - deeper layers see larger portions of the input, allowing detection of increasingly complex and global patterns.",
          es: "El tamaño del campo receptivo crece con la profundidad de la red - capas más profundas ven porciones más grandes de la entrada, permitiendo detección de patrones cada vez más complejos y globales.",
          de: "Die Größe des rezeptiven Feldes wächst mit der Netzwerktiefe - tiefere Schichten sehen größere Teile der Eingabe, ermöglichen Erkennung zunehmend komplexer und globaler Muster.",
          nl: "Receptief veldgrootte groeit met netwerkdiepte - diepere lagen zien grotere delen van de input, maken detectie van steeds complexere en globale patronen mogelijk."
        }
      },
      {
        question: {
          en: "What is a fully connected layer in CNNs?",
          es: "¿Qué es una capa completamente conectada en CNNs?",
          de: "Was ist eine vollständig verbundene Schicht in CNNs?",
          nl: "Wat is een volledig verbonden laag in CNNs?"
        },
        options: [
          { en: "A dense layer where every neuron connects to every neuron in the previous layer, typically used for final classification", es: "Una capa densa donde cada neurona se conecta a cada neurona en la capa anterior, típicamente usada para clasificación final", de: "Dichte Schicht wo jedes Neuron mit jedem Neuron der vorherigen Schicht verbunden ist, für finale Klassifikation", nl: "Een dichte laag waar elk neuron verbonden is met elk neuron in de vorige laag, typisch gebruikt voor finale classificatie" },
          { en: "A layer where all connections are the same strength", es: "Una capa donde todas las conexiones tienen la misma fuerza", de: "Eine Schicht wo alle Verbindungen dieselbe Stärke haben", nl: "Een laag waar alle verbindingen dezelfde sterkte hebben" },
          { en: "A convolutional layer with full coverage", es: "Una capa convolucional con cobertura completa", de: "Eine Faltungsschicht mit vollständiger Abdeckung", nl: "Een convolutielaag met volledige dekking" },
          { en: "A layer that connects to the internet", es: "Una capa que se conecta a internet", de: "Eine Schicht die sich mit dem Internet verbindet", nl: "Een laag die verbindt met het internet" }
        ],
        correct: 0,
        explanation: {
          en: "Fully connected layers flatten the spatial feature maps from convolutional layers and learn global patterns for final decision making, often used before output layers.",
          es: "Las capas completamente conectadas aplanan los mapas de características espaciales de capas convolucionales y aprenden patrones globales para toma de decisiones final, frecuentemente usadas antes de capas de salida.",
          de: "Vollständig verbundene Schichten glätten die räumlichen Feature-Maps von Faltungsschichten und lernen globale Muster für finale Entscheidungsfindung, oft vor Ausgabeschichten verwendet.",
          nl: "Volledig verbonden lagen vlakken de ruimtelijke feature maps van convolutielagen af en leren globale patronen voor finale besluitvorming, vaak gebruikt voor outputlagen."
        }
      },
      {
        question: {
          en: "What is the purpose of activation maps in CNNs?",
          es: "¿Cuál es el propósito de los mapas de activación en CNNs?",
          de: "Was ist der Zweck von Aktivierungskarten in CNNs?",
          nl: "Wat is het doel van activatiekaarten in CNNs?"
        },
        options: [
          { en: "To visualize what features the network has learned and which parts of the input activate specific neurons", es: "Visualizar qué características aprendió la red y qué partes de entrada activan neuronas específicas", de: "Visualisieren welche Merkmale das Netzwerk lernte und welche Eingabeteile Neuronen aktivieren", nl: "Visualiseren welke kenmerken het netwerk leerde en welke inputdelen specifieke neuronen activeren" },
          { en: "To activate the network for training", es: "Para activar la red para entrenamiento", de: "Um das Netzwerk für Training zu aktivieren", nl: "Om het netwerk te activeren voor training" },
          { en: "To map the network topology", es: "Para mapear la topología de la red", de: "Um die Netzwerktopologie zu kartieren", nl: "Om de netwerktopologie in kaart te brengen" },
          { en: "To show the geographical locations of data", es: "Para mostrar las ubicaciones geográficas de datos", de: "Um die geografischen Standorte von Daten zu zeigen", nl: "Om de geografische locaties van data te tonen" }
        ],
        correct: 0,
        explanation: {
          en: "Activation maps help interpret CNN behavior by showing which spatial regions and features trigger strong responses, providing insights into the model's decision-making process.",
          es: "Los mapas de activación ayudan a interpretar el comportamiento de CNN mostrando qué regiones espaciales y características desencadenan respuestas fuertes, proporcionando perspectivas sobre el proceso de toma de decisiones del modelo.",
          de: "Aktivierungskarten helfen CNN-Verhalten zu interpretieren durch Zeigen welche räumlichen Regionen und Merkmale starke Reaktionen auslösen, bieten Einblicke in den Entscheidungsprozess des Modells.",
          nl: "Activatiekaarten helpen CNN gedrag te interpreteren door te tonen welke ruimtelijke regio's en kenmerken sterke reacties veroorzaken, bieden inzichten in het besluitvormingsproces van het model."
        }
      },
      {
        question: {
          en: "What is the LeNet architecture and its significance?",
          es: "¿Qué es la arquitectura LeNet y su significancia?",
          de: "Was ist die LeNet-Architektur und ihre Bedeutung?",
          nl: "Wat is de LeNet architectuur en de betekenis ervan?"
        },
        options: [
          { en: "One of the first successful CNN architectures, pioneering the use of convolutional layers for handwritten digit recognition", es: "Una de las primeras arquitecturas CNN exitosas, pionera en capas convolucionales para dígitos manuscritos", de: "Eine der ersten erfolgreichen CNN-Architekturen, Pionier für handgeschriebene Ziffernerkennung", nl: "Een van de eerste succesvolle CNN architecturen, pionier in convolutielagen voor cijferherkenning" },
          { en: "A network architecture used only for color image processing", es: "Una arquitectura de red usada solo para procesamiento de imágenes en color", de: "Eine Netzwerkarchitektur nur für Farbbildverarbeitung verwendet", nl: "Een netwerkarchitectuur alleen gebruikt voor kleurbeeldverwerking" },
          { en: "The most modern CNN architecture available today", es: "La arquitectura CNN más moderna disponible hoy", de: "Die modernste CNN-Architektur die heute verfügbar ist", nl: "De meest moderne CNN architectuur die vandaag beschikbaar is" },
          { en: "A network designed specifically for natural language processing", es: "Una red diseñada específicamente para procesamiento de lenguaje natural", de: "Ein Netzwerk speziell für natürliche Sprachverarbeitung entworfen", nl: "Een netwerk specifiek ontworpen voor natuurlijke taalverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "LeNet-5, developed by Yann LeCun, established the fundamental CNN architecture pattern of convolution-pooling-convolution-pooling-fully connected, influencing all subsequent CNN designs.",
          es: "LeNet-5, desarrollada por Yann LeCun, estableció el patrón fundamental de arquitectura CNN de convolución-pooling-convolución-pooling-completamente conectada, influyendo todos los diseños CNN subsecuentes.",
          de: "LeNet-5, entwickelt von Yann LeCun, etablierte das fundamentale CNN-Architekturmuster von Faltung-Pooling-Faltung-Pooling-vollständig verbunden, beeinflusste alle nachfolgenden CNN-Designs.",
          nl: "LeNet-5, ontwikkeld door Yann LeCun, vestigde het fundamentele CNN architectuurpatroon van convolutie-pooling-convolutie-pooling-volledig verbonden, beïnvloedde alle volgende CNN ontwerpen."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem specific to deep CNNs?",
          es: "¿Cuál es el problema del gradiente que desaparece específico para CNNs profundas?",
          de: "Was ist das Problem verschwindender Gradienten spezifisch für tiefe CNNs?",
          nl: "Wat is het verdwijnende gradiënt probleem specifiek voor diepe CNNs?"
        },
        options: [
          { en: "Gradients become exponentially smaller in earlier layers during backpropagation, making deep networks hard to train effectively", es: "Gradienten se vuelven exponencialmente más pequeños en capas anteriores, haciendo difícil entrenar redes profundas", de: "Gradienten werden exponentiell kleiner in früheren Schichten, macht tiefe Netzwerke schwer trainierbar", nl: "Gradiënten worden exponentieel kleiner in eerdere lagen, maakt diepe netwerken moeilijk trainbaar" },
          { en: "CNNs lose their convolution properties over time", es: "Las CNNs pierden sus propiedades de convolución con el tiempo", de: "CNNs verlieren ihre Faltungseigenschaften über die Zeit", nl: "CNNs verliezen hun convolutie-eigenschappen na verloop van tijd" },
          { en: "The network gradually forgets learned features", es: "La red gradualmente olvida características aprendidas", de: "Das Netzwerk vergisst graduell gelernte Merkmale", nl: "Het netwerk vergeet geleidelijk geleerde kenmerken" },
          { en: "Image quality decreases through the layers", es: "La calidad de imagen disminuye a través de las capas", de: "Bildqualität nimmt durch die Schichten ab", nl: "Beeldkwaliteit neemt af door de lagen" }
        ],
        correct: 0,
        explanation: {
          en: "In deep CNNs, repeated multiplication of small gradients during backpropagation causes them to shrink exponentially, preventing early layers from learning effectively despite their importance for basic feature detection.",
          es: "En CNNs profundas, multiplicación repetida de gradientes pequeños durante retropropagación causa que se reduzcan exponencialmente, previniendo que capas tempranas aprendan efectivamente a pesar de su importancia para detección básica de características.",
          de: "In tiefen CNNs verursacht wiederholte Multiplikation kleiner Gradienten während Backpropagation dass sie exponentiell schrumpfen, verhindert dass frühe Schichten effektiv lernen trotz ihrer Wichtigkeit für grundlegende Merkmalserkennung.",
          nl: "In diepe CNNs veroorzaakt herhaalde vermenigvuldiging van kleine gradiënten tijdens backpropagation dat ze exponentieel krimpen, voorkomt dat vroege lagen effectief leren ondanks hun belang voor basis kenmerkdetectie."
        }
      },
      {
        question: {
          en: "What is the difference between 1x1 convolutions and larger kernel convolutions?",
          es: "¿Cuál es la diferencia entre convoluciones 1x1 y convoluciones de kernel más grandes?",
          de: "Was ist der Unterschied zwischen 1x1 Faltungen und größeren Kernel-Faltungen?",
          nl: "Wat is het verschil tussen 1x1 convoluties en grotere kernel convoluties?"
        },
        options: [
          { en: "1x1 convolutions reduce dimensions and compute linear combinations across channels, while larger kernels capture spatial patterns", es: "Convoluties 1x1 reducen dimensies y calculan combinaciones lineales, kernels grandes capturan patrones espaciales", de: "1x1 Faltungen reduzieren Dimensionen und berechnen lineare Kombinationen, größere Kernels erfassen räumliche Muster", nl: "1x1 convoluties verminderen dimensies en berekenen lineaire combinaties, grotere kernels vastleggen ruimtelijke patronen" },
          { en: "1x1 convolutions are faster but less accurate", es: "Las convoluciones 1x1 son más rápidas pero menos precisas", de: "1x1 Faltungen sind schneller aber weniger genau", nl: "1x1 convoluties zijn sneller maar minder nauwkeurig" },
          { en: "1x1 convolutions only work with grayscale images", es: "Las convoluciones 1x1 solo funcionan con imágenes en escala de grises", de: "1x1 Faltungen funktionieren nur mit Graustufenbildern", nl: "1x1 convoluties werken alleen met grijsschaalbeelden" },
          { en: "There is no practical difference between them", es: "No hay diferencia práctica entre ellas", de: "Es gibt keinen praktischen Unterschied zwischen ihnen", nl: "Er is geen praktisch verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "1x1 convolutions act as learned linear transformations across feature channels without spatial mixing, often used for dimensionality reduction and feature fusion in architectures like Inception.",
          es: "Las convoluciones 1x1 actúan como transformaciones lineales aprendidas a través de canales de características sin mezcla espacial, frecuentemente usadas para reducción de dimensionalidad y fusión de características en arquitecturas como Inception.",
          de: "1x1 Faltungen fungieren als gelernte lineare Transformationen über Feature-Kanäle ohne räumliche Mischung, oft verwendet für Dimensionalitätsreduktion und Feature-Fusion in Architekturen wie Inception.",
          nl: "1x1 convoluties fungeren als geleerde lineaire transformaties over feature kanalen zonder ruimtelijke menging, vaak gebruikt voor dimensionaliteitsreductie en feature fusie in architecturen zoals Inception."
        }
      },
      {
        question: {
          en: "What is the key innovation that Transformer architecture introduced to deep learning?",
          es: "¿Cuál es la innovación clave que la arquitectura Transformer introdujo al aprendizaje profundo?",
          de: "Was ist die Schlüsselinnovation die die Transformer-Architektur im Deep Learning einführte?",
          nl: "Wat is de belangrijkste innovatie die de Transformer architectuur in deep learning introduceerde?"
        },
        options: [
          { en: "Self-attention mechanism that processes all sequence positions simultaneously", es: "Mecanismo de auto-atención que procesa todas las posiciones de secuencia simultáneamente", de: "Selbstaufmerksamkeitsmechanismus der alle Sequenzpositionen gleichzeitig verarbeitet", nl: "Zelf-aandacht mechanisme dat alle sequentieposities tegelijkertijd verwerkt" },
          { en: "Using only convolutional layers for sequence processing", es: "Usar solo capas convolucionales para procesamiento de secuencias", de: "Nur Konvolutionsschichten für Sequenzverarbeitung verwenden", nl: "Alleen convolutionele lagen gebruiken voor sequentieverwerking" },
          { en: "Eliminating all forms of neural connections", es: "Eliminar todas las formas de conexiones neuronales", de: "Alle Formen neuronaler Verbindungen eliminieren", nl: "Alle vormen van neurale verbindingen elimineren" },
          { en: "Processing sequences one element at a time only", es: "Procesar secuencias solo un elemento a la vez", de: "Sequenzen nur ein Element nach dem anderen verarbeiten", nl: "Sequenties slechts één element tegelijk verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Transformers revolutionized deep learning by replacing recurrent and convolutional layers with self-attention mechanisms, enabling parallel processing of entire sequences and better long-range dependency modeling.",
          es: "Los Transformers revolucionaron el aprendizaje profundo reemplazando capas recurrentes y convolucionales con mecanismos de auto-atención, permitiendo procesamiento paralelo de secuencias enteras y mejor modelado de dependencias de largo alcance.",
          de: "Transformers revolutionierten Deep Learning durch Ersetzen rekurrenter und konvolutionaler Schichten mit Selbstaufmerksamkeitsmechanismen, ermöglichen parallele Verarbeitung ganzer Sequenzen und bessere Langstrecken-Abhängigkeitsmodellierung.",
          nl: "Transformers revolutioneerden deep learning door recurrente en convolutionele lagen te vervangen met zelf-aandacht mechanismen, maken parallelle verwerking van hele sequenties mogelijk en betere lange-afstand afhankelijkheidsmodellering."
        }
      },
      {
        question: {
          en: "What is the purpose of batch normalization in CNNs?",
          es: "¿Cuál es el propósito de la normalización por lotes en CNNs?",
          de: "Was ist der Zweck der Batch-Normalisierung in CNNs?",
          nl: "Wat is het doel van batch normalisatie in CNNs?"
        },
        options: [
          { en: "Normalize layer inputs to stabilize training and allow higher learning rates", es: "Normalizar entradas de capa para estabilizar entrenamiento y permitir tasas de aprendizaje más altas", de: "Schichteingaben normalisieren um Training zu stabilisieren und höhere Lernraten zu ermöglichen", nl: "Laagin inputs normaliseren om training te stabiliseren en hogere learning rates mogelijk te maken" },
          { en: "Process multiple batches simultaneously", es: "Procesar múltiples lotes simultáneamente", de: "Mehrere Batches gleichzeitig verarbeiten", nl: "Meerdere batches tegelijkertijd verwerken" },
          { en: "Normalize only the output layer", es: "Normalizar solo la capa de salida", de: "Nur die Ausgabeschicht normalisieren", nl: "Alleen de outputlaag normaliseren" },
          { en: "Combine batches into single training examples", es: "Combinar lotes en ejemplos de entrenamiento únicos", de: "Batches zu einzelnen Trainingsbeispielen kombinieren", nl: "Batches combineren tot enkele trainingsvoorbeelden" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes activations using batch statistics, reducing internal covariate shift and enabling faster convergence with less sensitivity to initialization.",
          es: "La normalización por lotes normaliza activaciones usando estadísticas de lote, reduciendo cambio de covariable interno y permitiendo convergencia más rápida con menos sensibilidad a inicialización.",
          de: "Batch-Normalisierung normalisiert Aktivierungen mit Batch-Statistiken, reduziert interne Kovariatverschiebung und ermöglicht schnellere Konvergenz mit weniger Empfindlichkeit gegenüber Initialisierung.",
          nl: "Batch normalisatie normaliseert activaties met batch statistieken, vermindert interne covariate verschuiving en maakt snellere convergentie mogelijk met minder gevoeligheid voor initialisatie."
        }
      },
      {
        question: {
          en: "What is the VGG architecture known for?",
          es: "¿Por qué es conocida la arquitectura VGG?",
          de: "Wofür ist die VGG-Architektur bekannt?",
          nl: "Waarvoor staat de VGG architectuur bekend?"
        },
        options: [
          { en: "Using very deep networks with small 3x3 filters consistently throughout", es: "Usar redes muy profundas con filtros pequeños 3x3 consistentemente en toda la red", de: "Sehr tiefe Netzwerke mit kleinen 3x3 Filtern durchgehend verwenden", nl: "Zeer diepe netwerken gebruiken met kleine 3x3 filters consistent door heel het netwerk" },
          { en: "Being the first CNN ever created", es: "Ser la primera CNN jamás creada", de: "Das erste CNN sein das jemals erstellt wurde", nl: "Het eerste CNN zijn dat ooit is gemaakt" },
          { en: "Using only 1x1 convolutions", es: "Usar solo convoluciones 1x1", de: "Nur 1x1 Faltungen verwenden", nl: "Alleen 1x1 convoluties gebruiken" },
          { en: "Having the smallest number of parameters", es: "Tener el menor número de parámetros", de: "Die kleinste Anzahl von Parametern haben", nl: "Het kleinste aantal parameters hebben" }
        ],
        correct: 0,
        explanation: {
          en: "VGG networks demonstrated that stacking multiple small 3x3 convolution layers achieves similar receptive fields as larger filters while using fewer parameters and more non-linearity.",
          es: "Las redes VGG demostraron que apilar múltiples capas de convolución pequeñas 3x3 logra campos receptivos similares a filtros más grandes mientras usa menos parámetros y más no linealidad.",
          de: "VGG-Netzwerke zeigten dass Stapeln mehrerer kleiner 3x3 Faltungsschichten ähnliche rezeptive Felder wie größere Filter erreicht während weniger Parameter und mehr Nichtlinearität verwendet werden.",
          nl: "VGG netwerken toonden aan dat stapelen van meerdere kleine 3x3 convolutielagen vergelijkbare receptieve velden bereikt als grotere filters terwijl minder parameters en meer non-lineariteit worden gebruikt."
        }
      },
      {
        question: {
          en: "What is average pooling and when is it typically used?",
          es: "¿Qué es el average pooling y cuándo se usa típicamente?",
          de: "Was ist Average Pooling und wann wird es typischerweise verwendet?",
          nl: "Wat is average pooling en wanneer wordt het typisch gebruikt?"
        },
        options: [
          { en: "Takes the mean of values in each pooling region, often used in final layers before classification", es: "Toma la media de valores en cada región de pooling, frecuentemente usado en capas finales antes de clasificación", de: "Nimmt den Mittelwert von Werten in jeder Pooling-Region, oft in finalen Schichten vor Klassifikation verwendet", nl: "Neemt het gemiddelde van waarden in elke pooling regio, vaak gebruikt in finale lagen voor classificatie" },
          { en: "Calculates the average network performance", es: "Calcula el rendimiento promedio de la red", de: "Berechnet die durchschnittliche Netzwerkleistung", nl: "Berekent de gemiddelde netwerkprestatie" },
          { en: "Pools data from average quality images only", es: "Hace pooling de datos solo de imágenes de calidad promedio", de: "Pooling von Daten nur aus durchschnittlichen Qualitätsbildern", nl: "Pool data alleen van gemiddelde kwaliteit beelden" },
          { en: "Uses median values instead of maximum", es: "Usa valores medianos en lugar de máximos", de: "Verwendet Medianwerte anstelle von Maximums", nl: "Gebruikt mediaan waarden in plaats van maximum" }
        ],
        correct: 0,
        explanation: {
          en: "Average pooling computes the mean activation in each region, providing smoother downsampling than max pooling and often used in global average pooling layers for spatial dimension reduction.",
          es: "Average pooling calcula la activación media en cada región, proporcionando submuestreo más suave que max pooling y frecuentemente usado en capas de global average pooling para reducción de dimensión espacial.",
          de: "Average Pooling berechnet die mittlere Aktivierung in jeder Region, bietet glatteres Downsampling als Max Pooling und wird oft in Global Average Pooling Schichten für räumliche Dimensionsreduktion verwendet.",
          nl: "Average pooling berekent de gemiddelde activatie in elke regio, biedt vloeiendere downsampling dan max pooling en wordt vaak gebruikt in global average pooling lagen voor ruimtelijke dimensiereductie."
        }
      },
      {
        question: {
          en: "What problem does dropout help solve in neural networks?",
          es: "¿Qué problema ayuda a resolver el dropout en redes neuronales?",
          de: "Welches Problem hilft Dropout in neuronalen Netzwerken zu lösen?",
          nl: "Welk probleem helpt dropout oplossen in neurale netwerken?"
        },
        options: [
          { en: "Overfitting by randomly deactivating neurons during training to prevent co-adaptation", es: "Sobreajuste desactivando aleatoriamente neuronas durante entrenamiento para prevenir co-adaptación", de: "Overfitting durch zufälliges Deaktivieren von Neuronen während Training um Ko-Adaptation zu verhindern", nl: "Overfitting door willekeurig neuronen te deactiveren tijdens training om co-adaptatie te voorkomen" },
          { en: "Slow training by removing unnecessary layers", es: "Entrenamiento lento removiendo capas innecesarias", de: "Langsames Training durch Entfernen unnötiger Schichten", nl: "Langzame training door onnodige lagen te verwijderen" },
          { en: "Network crashes by backing up neurons", es: "Fallos de red respaldando neuronas", de: "Netzwerkabstürze durch Sichern von Neuronen", nl: "Netwerk crashes door neuronen te back-uppen" },
          { en: "Memory issues by compressing weights", es: "Problemas de memoria comprimiendo pesos", de: "Speicherprobleme durch Komprimierung von Gewichten", nl: "Geheugenproblemen door gewichten te comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout randomly sets a fraction of neuron outputs to zero during training, forcing the network to learn redundant representations and preventing over-reliance on specific neurons.",
          es: "Dropout establece aleatoriamente una fracción de salidas de neuronas a cero durante entrenamiento, forzando la red a aprender representaciones redundantes y previniendo dependencia excesiva en neuronas específicas.",
          de: "Dropout setzt zufällig einen Bruchteil der Neuronenausgaben auf Null während Training, zwingt das Netzwerk redundante Repräsentationen zu lernen und verhindert übermäßige Abhängigkeit von spezifischen Neuronen.",
          nl: "Dropout stelt willekeurig een fractie van neuron outputs in op nul tijdens training, dwingt het netwerk redundante representaties te leren en voorkomt overmatige afhankelijkheid van specifieke neuronen."
        }
      },
      {
        question: {
          en: "What is the AlexNet architecture's main contribution to deep learning?",
          es: "¿Cuál es la contribución principal de la arquitectura AlexNet al aprendizaje profundo?",
          de: "Was ist der Hauptbeitrag der AlexNet-Architektur zum Deep Learning?",
          nl: "Wat is de belangrijkste bijdrage van de AlexNet architectuur aan deep learning?"
        },
        options: [
          { en: "Demonstrating that deep CNNs trained on GPUs could significantly outperform traditional methods on ImageNet", es: "Demostrar que CNNs profundas entrenadas en GPUs podían superar significativamente métodos tradicionales en ImageNet", de: "Zeigen dass tiefe CNNs auf GPUs trainiert traditionelle Methoden auf ImageNet deutlich übertreffen konnten", nl: "Aantonen dat diepe CNNs getraind op GPUs traditionele methoden op ImageNet significant konden overtreffen" },
          { en: "Being the smallest CNN architecture", es: "Ser la arquitectura CNN más pequeña", de: "Die kleinste CNN-Architektur sein", nl: "De kleinste CNN architectuur zijn" },
          { en: "Using only average pooling layers", es: "Usar solo capas de average pooling", de: "Nur Average Pooling Schichten verwenden", nl: "Alleen average pooling lagen gebruiken" },
          { en: "Eliminating all activation functions", es: "Eliminar todas las funciones de activación", de: "Alle Aktivierungsfunktionen eliminieren", nl: "Alle activatiefuncties elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "AlexNet won ImageNet 2012 by a large margin, proving deep learning's potential and popularizing techniques like ReLU activation, dropout, and GPU acceleration for training CNNs.",
          es: "AlexNet ganó ImageNet 2012 por un gran margen, probando el potencial del aprendizaje profundo y popularizando técnicas como activación ReLU, dropout y aceleración GPU para entrenar CNNs.",
          de: "AlexNet gewann ImageNet 2012 mit großem Vorsprung, bewies das Potenzial von Deep Learning und popularisierte Techniken wie ReLU-Aktivierung, Dropout und GPU-Beschleunigung für CNN-Training.",
          nl: "AlexNet won ImageNet 2012 met grote voorsprong, bewees het potentieel van deep learning en populariseerde technieken zoals ReLU activatie, dropout en GPU versnelling voor het trainen van CNNs."
        }
      },
      {
        question: {
          en: "What is a skip connection in neural networks?",
          es: "¿Qué es una conexión de salto en redes neuronales?",
          de: "Was ist eine Skip-Verbindung in neuronalen Netzwerken?",
          nl: "Wat is een skip verbinding in neurale netwerken?"
        },
        options: [
          { en: "A direct path that bypasses one or more layers, allowing gradient flow and feature reuse", es: "Un camino directo que evita una o más capas, permitiendo flujo de gradiente y reutilización de características", de: "Ein direkter Pfad der eine oder mehrere Schichten umgeht, ermöglicht Gradientenfluss und Feature-Wiederverwendung", nl: "Een direct pad dat een of meer lagen omzeilt, maakt gradiënt flow en feature hergebruik mogelijk" },
          { en: "Skipping training iterations to save time", es: "Saltar iteraciones de entrenamiento para ahorrar tiempo", de: "Trainingsiterationen überspringen um Zeit zu sparen", nl: "Trainingsiteraties overslaan om tijd te besparen" },
          { en: "Removing unnecessary connections permanently", es: "Remover conexiones innecesarias permanentemente", de: "Unnötige Verbindungen dauerhaft entfernen", nl: "Onnodige verbindingen permanent verwijderen" },
          { en: "Connections that activate only sometimes", es: "Conexiones que se activan solo a veces", de: "Verbindungen die nur manchmal aktivieren", nl: "Verbindingen die soms activeren" }
        ],
        correct: 0,
        explanation: {
          en: "Skip connections add the input of a layer directly to its output, enabling training of much deeper networks by mitigating vanishing gradients and allowing identity mappings.",
          es: "Las conexiones de salto añaden la entrada de una capa directamente a su salida, permitiendo entrenamiento de redes mucho más profundas mitigando gradientes que desaparecen y permitiendo mapeos de identidad.",
          de: "Skip-Verbindungen fügen die Eingabe einer Schicht direkt zu ihrer Ausgabe hinzu, ermöglichen Training viel tieferer Netzwerke durch Milderung verschwindender Gradienten und Ermöglichung von Identitätsabbildungen.",
          nl: "Skip verbindingen voegen de input van een laag direct toe aan zijn output, maken training van veel diepere netwerken mogelijk door verdwijnende gradiënten te verminderen en identiteit mappings toe te staan."
        }
      },
      {
        question: {
          en: "What is the Inception module's key design principle?",
          es: "¿Cuál es el principio de diseño clave del módulo Inception?",
          de: "Was ist das Schlüsseldesignprinzip des Inception-Moduls?",
          nl: "Wat is het belangrijkste ontwerpprincipe van de Inception module?"
        },
        options: [
          { en: "Using multiple filter sizes in parallel within the same layer to capture features at different scales", es: "Usar múltiples tamaños de filtro en paralelo dentro de la misma capa para capturar características en diferentes escalas", de: "Mehrere Filtergrößen parallel in derselben Schicht verwenden um Merkmale in verschiedenen Skalen zu erfassen", nl: "Meerdere filter groottes parallel gebruiken binnen dezelfde laag om kenmerken op verschillende schalen vast te leggen" },
          { en: "Processing images at the moment of inception", es: "Procesar imágenes en el momento de inicio", de: "Bilder zum Zeitpunkt des Beginns verarbeiten", nl: "Beelden verwerken op het moment van begin" },
          { en: "Using only the largest possible filters", es: "Usar solo los filtros más grandes posibles", de: "Nur die größtmöglichen Filter verwenden", nl: "Alleen de grootst mogelijke filters gebruiken" },
          { en: "Eliminating all pooling operations", es: "Eliminar todas las operaciones de pooling", de: "Alle Pooling-Operationen eliminieren", nl: "Alle pooling operaties elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Inception modules apply 1x1, 3x3, and 5x5 convolutions plus pooling simultaneously, concatenating results to learn multi-scale features efficiently while reducing computational cost with 1x1 bottleneck layers.",
          es: "Los módulos Inception aplican convoluciones 1x1, 3x3 y 5x5 más pooling simultáneamente, concatenando resultados para aprender características multi-escala eficientemente mientras reduce costo computacional con capas de cuello de botella 1x1.",
          de: "Inception-Module wenden 1x1, 3x3 und 5x5 Faltungen plus Pooling gleichzeitig an, verketten Ergebnisse um Multi-Skalen-Merkmale effizient zu lernen während rechnerische Kosten mit 1x1 Flaschenhals-Schichten reduziert werden.",
          nl: "Inception modules passen 1x1, 3x3 en 5x5 convoluties plus pooling tegelijkertijd toe, concateneren resultaten om multi-schaal kenmerken efficiënt te leren terwijl computationele kosten worden verminderd met 1x1 flessenhals lagen."
        }
      },
      {
        question: {
          en: "What is global average pooling?",
          es: "¿Qué es el global average pooling?",
          de: "Was ist Global Average Pooling?",
          nl: "Wat is global average pooling?"
        },
        options: [
          { en: "Computing the average of each entire feature map to produce a single value per channel", es: "Calcular el promedio de cada mapa de características completo para producir un solo valor por canal", de: "Den Durchschnitt jeder gesamten Feature-Map berechnen um einen einzelnen Wert pro Kanal zu erzeugen", nl: "Het gemiddelde berekenen van elke hele feature map om een enkele waarde per kanaal te produceren" },
          { en: "Averaging all pooling layers together", es: "Promediar todas las capas de pooling juntas", de: "Alle Pooling-Schichten zusammen mitteln", nl: "Alle pooling lagen samen middelen" },
          { en: "Using average pooling globally across networks", es: "Usar average pooling globalmente a través de redes", de: "Average Pooling global über Netzwerke verwenden", nl: "Average pooling globaal over netwerken gebruiken" },
          { en: "Pooling from multiple datasets simultaneously", es: "Hacer pooling de múltiples conjuntos de datos simultáneamente", de: "Pooling aus mehreren Datensätzen gleichzeitig", nl: "Pooling van meerdere datasets tegelijkertijd" }
        ],
        correct: 0,
        explanation: {
          en: "Global average pooling reduces each feature map to a single number by averaging all spatial positions, eliminating fully connected layers and reducing overfitting while maintaining spatial invariance.",
          es: "Global average pooling reduce cada mapa de características a un solo número promediando todas las posiciones espaciales, eliminando capas completamente conectadas y reduciendo sobreajuste mientras mantiene invariancia espacial.",
          de: "Global Average Pooling reduziert jede Feature-Map auf eine einzelne Zahl durch Mitteln aller räumlichen Positionen, eliminiert vollständig verbundene Schichten und reduziert Overfitting während räumliche Invarianz beibehalten wird.",
          nl: "Global average pooling vermindert elke feature map tot een enkel getal door alle ruimtelijke posities te middelen, elimineert volledig verbonden lagen en vermindert overfitting terwijl ruimtelijke invariantie behouden blijft."
        }
      },
      {
        question: {
          en: "What is weight decay in neural network training?",
          es: "¿Qué es el decaimiento de peso en entrenamiento de redes neuronales?",
          de: "Was ist Weight Decay im Training neuronaler Netzwerke?",
          nl: "Wat is weight decay in neural network training?"
        },
        options: [
          { en: "A regularization technique that adds a penalty proportional to weight magnitudes to the loss function", es: "Una técnica de regularización que añade una penalización proporcional a magnitudes de peso a la función de pérdida", de: "Eine Regularisierungstechnik die eine Strafe proportional zu Gewichtsmagnitude zur Verlustfunktion hinzufügt", nl: "Een regularisatietechniek die een penalty proportioneel aan gewicht magnitudes toevoegt aan de loss functie" },
          { en: "Weights gradually becoming corrupt over time", es: "Los pesos gradualmente corrompiéndose con el tiempo", de: "Gewichte werden allmählich korrupt über die Zeit", nl: "Gewichten geleidelijk corrupt worden in de tijd" },
          { en: "Reducing the number of weights each epoch", es: "Reducir el número de pesos cada época", de: "Die Anzahl der Gewichte jede Epoche reduzieren", nl: "Het aantal gewichten elke epoch verminderen" },
          { en: "Weights losing precision during calculations", es: "Los pesos perdiendo precisión durante cálculos", de: "Gewichte verlieren Präzision während Berechnungen", nl: "Gewichten verliezen precisie tijdens berekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Weight decay (L2 regularization) prevents overfitting by penalizing large weights, encouraging the network to distribute learning across parameters and find simpler solutions.",
          es: "Weight decay (regularización L2) previene sobreajuste penalizando pesos grandes, alentando la red a distribuir aprendizaje a través de parámetros y encontrar soluciones más simples.",
          de: "Weight Decay (L2-Regularisierung) verhindert Overfitting durch Bestrafen großer Gewichte, ermutigt das Netzwerk Lernen über Parameter zu verteilen und einfachere Lösungen zu finden.",
          nl: "Weight decay (L2 regularisatie) voorkomt overfitting door grote gewichten te bestraffen, moedigt het netwerk aan om leren over parameters te verdelen en eenvoudigere oplossingen te vinden."
        }
      },
      {
        question: {
          en: "What are depthwise separable convolutions?",
          es: "¿Qué son las convoluciones separables en profundidad?",
          de: "Was sind tiefenweise trennbare Faltungen?",
          nl: "Wat zijn depthwise separable convoluties?"
        },
        options: [
          { en: "Factorizing standard convolutions into depthwise and pointwise operations to reduce parameters and computation", es: "Factorizar convoluciones estándar en operaciones depthwise y pointwise para reducir parámetros y computación", de: "Standardfaltungen in tiefenweise und punktweise Operationen faktorisieren um Parameter und Berechnung zu reduzieren", nl: "Standaard convoluties factoriseren in depthwise en pointwise operaties om parameters en berekening te verminderen" },
          { en: "Convolutions that only process image depth", es: "Convoluciones que solo procesan profundidad de imagen", de: "Faltungen die nur Bildtiefe verarbeiten", nl: "Convoluties die alleen beelddiepte verwerken" },
          { en: "Separating training and testing convolutions", es: "Separar convoluciones de entrenamiento y prueba", de: "Trainings- und Testfaltungen trennen", nl: "Trainings- en test convoluties scheiden" },
          { en: "Using different convolutions for different depths", es: "Usar diferentes convoluciones para diferentes profundidades", de: "Verschiedene Faltungen für verschiedene Tiefen verwenden", nl: "Verschillende convoluties gebruiken voor verschillende dieptes" }
        ],
        correct: 0,
        explanation: {
          en: "Depthwise separable convolutions first apply spatial filtering per channel (depthwise), then combine channels with 1x1 convolutions (pointwise), achieving similar results with far fewer parameters than standard convolutions.",
          es: "Las convoluciones separables en profundidad primero aplican filtrado espacial por canal (depthwise), luego combinan canales con convoluciones 1x1 (pointwise), logrando resultados similares con muchos menos parámetros que convoluciones estándar.",
          de: "Tiefenweise trennbare Faltungen wenden zuerst räumliche Filterung pro Kanal an (depthwise), kombinieren dann Kanäle mit 1x1 Faltungen (pointwise), erreichen ähnliche Ergebnisse mit weit weniger Parametern als Standardfaltungen.",
          nl: "Depthwise separable convoluties passen eerst ruimtelijke filtering per kanaal toe (depthwise), combineren dan kanalen met 1x1 convoluties (pointwise), bereiken vergelijkbare resultaten met veel minder parameters dan standaard convoluties."
        }
      },
      {
        question: {
          en: "What is the purpose of learning rate scheduling?",
          es: "¿Cuál es el propósito de la programación de tasa de aprendizaje?",
          de: "Was ist der Zweck von Learning Rate Scheduling?",
          nl: "Wat is het doel van learning rate scheduling?"
        },
        options: [
          { en: "Adjusting the learning rate during training to improve convergence and fine-tune the model", es: "Ajustar la tasa de aprendizaje durante entrenamiento para mejorar convergencia y afinar el modelo", de: "Die Lernrate während Training anpassen um Konvergenz zu verbessern und das Modell feinzujustieren", nl: "De learning rate aanpassen tijdens training om convergentie te verbeteren en het model fijn af te stellen" },
          { en: "Scheduling when the network should learn", es: "Programar cuándo la red debería aprender", de: "Planen wann das Netzwerk lernen sollte", nl: "Plannen wanneer het netwerk moet leren" },
          { en: "Setting the same learning rate for all epochs", es: "Establecer la misma tasa de aprendizaje para todas las épocas", de: "Dieselbe Lernrate für alle Epochen festlegen", nl: "Dezelfde learning rate instellen voor alle epochs" },
          { en: "Determining how long training should take", es: "Determinar cuánto tiempo debería tomar el entrenamiento", de: "Bestimmen wie lange Training dauern sollte", nl: "Bepalen hoe lang training moet duren" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate schedules like step decay, exponential decay, or cosine annealing reduce the learning rate over time, allowing the model to make large initial updates then fine-tune with smaller steps.",
          es: "Los programas de tasa de aprendizaje como step decay, exponential decay o cosine annealing reducen la tasa de aprendizaje con el tiempo, permitiendo al modelo hacer actualizaciones iniciales grandes luego afinar con pasos más pequeños.",
          de: "Learning Rate Schedules wie Step Decay, Exponential Decay oder Cosine Annealing reduzieren die Lernrate über Zeit, ermöglichen dem Modell große anfängliche Updates dann Feinabstimmung mit kleineren Schritten.",
          nl: "Learning rate schema's zoals step decay, exponential decay of cosine annealing verminderen de learning rate in de tijd, maken het model mogelijk grote initiële updates te doen en dan fijn af te stemmen met kleinere stappen."
        }
      },
      {
        question: {
          en: "What is the difference between semantic segmentation and instance segmentation?",
          es: "¿Cuál es la diferencia entre segmentación semántica y segmentación de instancias?",
          de: "Was ist der Unterschied zwischen semantischer Segmentierung und Instanzsegmentierung?",
          nl: "Wat is het verschil tussen semantische segmentatie en instance segmentatie?"
        },
        options: [
          { en: "Semantic assigns class to each pixel, instance distinguishes individual objects of the same class", es: "Semántica asigna clase a cada píxel, instancia distingue objetos individuales de la misma clase", de: "Semantisch weist jedem Pixel eine Klasse zu, Instanz unterscheidet einzelne Objekte derselben Klasse", nl: "Semantisch wijst klasse toe aan elk pixel, instance onderscheidt individuele objecten van dezelfde klasse" },
          { en: "Semantic is for images, instance is for videos", es: "Semántica es para imágenes, instancia es para videos", de: "Semantisch ist für Bilder, Instanz ist für Videos", nl: "Semantisch is voor beelden, instance is voor video's" },
          { en: "They are the same technique", es: "Son la misma técnica", de: "Sie sind dieselbe Technik", nl: "Het zijn dezelfde techniek" },
          { en: "Semantic uses CNNs, instance uses RNNs", es: "Semántica usa CNNs, instancia usa RNNs", de: "Semantisch verwendet CNNs, Instanz verwendet RNNs", nl: "Semantisch gebruikt CNNs, instance gebruikt RNNs" }
        ],
        correct: 0,
        explanation: {
          en: "Semantic segmentation labels each pixel with a class (all cars = 'car'), while instance segmentation additionally differentiates between individual objects (car1, car2, car3), requiring both classification and object detection.",
          es: "La segmentación semántica etiqueta cada píxel con una clase (todos los autos = 'auto'), mientras segmentación de instancias adicionalmente diferencia entre objetos individuales (auto1, auto2, auto3), requiriendo clasificación y detección de objetos.",
          de: "Semantische Segmentierung beschriftet jedes Pixel mit einer Klasse (alle Autos = 'Auto'), während Instanzsegmentierung zusätzlich zwischen einzelnen Objekten unterscheidet (Auto1, Auto2, Auto3), erfordert Klassifikation und Objekterkennung.",
          nl: "Semantische segmentatie labelt elk pixel met een klasse (alle auto's = 'auto'), terwijl instance segmentatie bovendien onderscheid maakt tussen individuele objecten (auto1, auto2, auto3), vereist classificatie en objectdetectie."
        }
      },
      {
        question: {
          en: "What is the gradient clipping technique?",
          es: "¿Qué es la técnica de recorte de gradiente?",
          de: "Was ist die Gradient Clipping Technik?",
          nl: "Wat is de gradient clipping techniek?"
        },
        options: [
          { en: "Limiting gradient magnitudes to prevent exploding gradients during backpropagation", es: "Limitar magnitudes de gradiente para prevenir gradientes que explotan durante retropropagación", de: "Gradientenmagnitude begrenzen um explodierende Gradienten während Backpropagation zu verhindern", nl: "Gradiënt magnitudes beperken om exploderende gradiënten tijdens backpropagation te voorkomen" },
          { en: "Removing gradients completely from training", es: "Remover gradientes completamente del entrenamiento", de: "Gradienten vollständig aus dem Training entfernen", nl: "Gradiënten volledig verwijderen uit training" },
          { en: "Cutting training short when gradients appear", es: "Cortar entrenamiento cuando aparecen gradientes", de: "Training abbrechen wenn Gradienten erscheinen", nl: "Training afkappen wanneer gradiënten verschijnen" },
          { en: "Copying gradients to multiple layers", es: "Copiar gradientes a múltiples capas", de: "Gradienten auf mehrere Schichten kopieren", nl: "Gradiënten kopiëren naar meerdere lagen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient clipping caps gradient values at a threshold (e.g., norm-based or value-based), preventing numerical instability from extremely large gradients that can cause training to diverge.",
          es: "Gradient clipping limita valores de gradiente en un umbral (ej. basado en norma o valor), previniendo inestabilidad numérica de gradientes extremadamente grandes que pueden causar que el entrenamiento diverja.",
          de: "Gradient Clipping begrenzt Gradientenwerte an einer Schwelle (z.B. norm-basiert oder wert-basiert), verhindert numerische Instabilität von extrem großen Gradienten die Training divergieren lassen können.",
          nl: "Gradient clipping beperkt gradiënt waarden op een drempel (bijv. norm-gebaseerd of waarde-gebaseerd), voorkomt numerieke instabiliteit van extreem grote gradiënten die training kunnen laten divergeren."
        }
      },
      {
        question: {
          en: "What are residual blocks in ResNet?",
          es: "¿Qué son los bloques residuales en ResNet?",
          de: "Was sind Residualblöcke in ResNet?",
          nl: "Wat zijn residual blocks in ResNet?"
        },
        options: [
          { en: "Blocks with skip connections that learn residual functions F(x) added to the input x", es: "Bloques con conexiones de salto que aprenden funciones residuales F(x) añadidas a la entrada x", de: "Blöcke mit Skip-Verbindungen die Residualfunktionen F(x) lernen die zur Eingabe x addiert werden", nl: "Blokken met skip verbindingen die residual functies F(x) leren toegevoegd aan de input x" },
          { en: "Blocks that contain leftover unused neurons", es: "Bloques que contienen neuronas no usadas sobrantes", de: "Blöcke die übrig gebliebene ungenutzte Neuronen enthalten", nl: "Blokken die overblijvende ongebruikte neuronen bevatten" },
          { en: "The final layers that produce residual errors", es: "Las capas finales que producen errores residuales", de: "Die finalen Schichten die Restfehler produzieren", nl: "De finale lagen die residuele fouten produceren" },
          { en: "Blocks used only during testing phase", es: "Bloques usados solo durante fase de prueba", de: "Blöcke nur während Testphase verwendet", nl: "Blokken alleen gebruikt tijdens testfase" }
        ],
        correct: 0,
        explanation: {
          en: "Residual blocks implement y = F(x) + x where F(x) represents the learned transformation. This reformulation makes it easier to learn identity mappings and train very deep networks (100+ layers).",
          es: "Los bloques residuales implementan y = F(x) + x donde F(x) representa la transformación aprendida. Esta reformulación facilita aprender mapeos de identidad y entrenar redes muy profundas (100+ capas).",
          de: "Residualblöcke implementieren y = F(x) + x wobei F(x) die gelernte Transformation darstellt. Diese Umformulierung erleichtert Lernen von Identitätsabbildungen und Training sehr tiefer Netzwerke (100+ Schichten).",
          nl: "Residual blocks implementeren y = F(x) + x waar F(x) de geleerde transformatie vertegenwoordigt. Deze herformulering maakt het makkelijker om identiteit mappings te leren en zeer diepe netwerken te trainen (100+ lagen)."
        }
      },
      {
        question: {
          en: "What is the purpose of data normalization before training CNNs?",
          es: "¿Cuál es el propósito de la normalización de datos antes de entrenar CNNs?",
          de: "Was ist der Zweck der Datennormalisierung vor dem Training von CNNs?",
          nl: "Wat is het doel van data normalisatie voor het trainen van CNNs?"
        },
        options: [
          { en: "Scaling input values to similar ranges improves gradient flow and convergence speed", es: "Escalar valores de entrada a rangos similares mejora flujo de gradiente y velocidad de convergencia", de: "Eingabewerte auf ähnliche Bereiche skalieren verbessert Gradientenfluss und Konvergenzgeschwindigkeit", nl: "Inputwaarden schalen naar vergelijkbare bereiken verbetert gradiënt flow en convergentiesnelheid" },
          { en: "Making all images the same size", es: "Hacer todas las imágenes del mismo tamaño", de: "Alle Bilder gleich groß machen", nl: "Alle beelden dezelfde grootte maken" },
          { en: "Removing outliers from the dataset", es: "Remover valores atípicos del conjunto de datos", de: "Ausreißer aus dem Datensatz entfernen", nl: "Uitbijters verwijderen uit de dataset" },
          { en: "Converting images to grayscale", es: "Convertir imágenes a escala de grises", de: "Bilder in Graustufen umwandeln", nl: "Beelden converteren naar grijsschaal" }
        ],
        correct: 0,
        explanation: {
          en: "Normalization (e.g., zero-centering, standardization) ensures features have similar scales, preventing some features from dominating training and allowing more stable optimization with higher learning rates.",
          es: "La normalización (ej. centrado en cero, estandarización) asegura que características tengan escalas similares, previniendo que algunas características dominen entrenamiento y permitiendo optimización más estable con tasas de aprendizaje más altas.",
          de: "Normalisierung (z.B. Null-Zentrierung, Standardisierung) stellt sicher dass Merkmale ähnliche Skalen haben, verhindert dass einige Merkmale Training dominieren und ermöglicht stabilere Optimierung mit höheren Lernraten.",
          nl: "Normalisatie (bijv. zero-centering, standaardisatie) zorgt ervoor dat kenmerken vergelijkbare schalen hebben, voorkomt dat sommige kenmerken training domineren en maakt stabielere optimalisatie mogelijk met hogere learning rates."
        }
      },
      {
        question: {
          en: "What is feature extraction in the context of transfer learning?",
          es: "¿Qué es la extracción de características en el contexto del aprendizaje por transferencia?",
          de: "Was ist Feature-Extraktion im Kontext von Transfer Learning?",
          nl: "Wat is feature extractie in de context van transfer learning?"
        },
        options: [
          { en: "Using pre-trained CNN layers as fixed feature extractors, training only new final layers for the target task", es: "Usar capas CNN pre-entrenadas como extractores fijos, entrenar solo capas finales para la tarea objetivo", de: "Vortrainierte CNN-Schichten als Feature-Extraktoren verwenden, nur neue finale Schichten trainieren", nl: "Voorgetrainde CNN lagen als vaste feature extractors gebruiken, alleen finale lagen trainen voor de taak" },
          { en: "Manually selecting important features from images", es: "Seleccionar manualmente características importantes de imágenes", de: "Wichtige Merkmale aus Bildern manuell auswählen", nl: "Handmatig belangrijke kenmerken selecteren uit beelden" },
          { en: "Extracting raw pixel values from images", es: "Extraer valores de píxeles crudos de imágenes", de: "Rohe Pixelwerte aus Bildern extrahieren", nl: "Ruwe pixelwaarden extraheren uit beelden" },
          { en: "Removing unnecessary layers from networks", es: "Remover capas innecesarias de redes", de: "Unnötige Schichten aus Netzwerken entfernen", nl: "Onnodige lagen verwijderen uit netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Feature extraction freezes pre-trained convolutional layers which have learned generic features (edges, textures, patterns), then trains new classification layers on top for the specific task with limited data.",
          es: "La extracción de características congela capas convolucionales pre-entrenadas que han aprendido características genéricas (bordes, texturas, patrones), luego entrena nuevas capas de clasificación encima para la tarea específica con datos limitados.",
          de: "Feature-Extraktion friert vortrainierte Faltungsschichten ein die generische Merkmale gelernt haben (Kanten, Texturen, Muster), trainiert dann neue Klassifikationsschichten oben drauf für die spezifische Aufgabe mit begrenzten Daten.",
          nl: "Feature extractie bevriest voorgetrainde convolutionele lagen die generieke kenmerken hebben geleerd (randen, texturen, patronen), traint dan nieuwe classificatielagen bovenop voor de specifieke taak met beperkte data."
        }
      },
      {
        question: {
          en: "What is early stopping in neural network training?",
          es: "¿Qué es la detención temprana en entrenamiento de redes neuronales?",
          de: "Was ist Early Stopping im Training neuronaler Netzwerke?",
          nl: "Wat is early stopping in neural network training?"
        },
        options: [
          { en: "Halting training when validation performance stops improving to prevent overfitting", es: "Detener entrenamiento cuando rendimiento de validación deja de mejorar para prevenir sobreajuste", de: "Training stoppen wenn Validierungsleistung aufhört sich zu verbessern um Overfitting zu verhindern", nl: "Training stoppen wanneer validatieprestatie stopt met verbeteren om overfitting te voorkomen" },
          { en: "Stopping training after a fixed number of epochs", es: "Detener entrenamiento después de un número fijo de épocas", de: "Training nach einer festen Anzahl von Epochen stoppen", nl: "Training stoppen na een vast aantal epochs" },
          { en: "Terminating training due to errors", es: "Terminar entrenamiento debido a errores", de: "Training aufgrund von Fehlern beenden", nl: "Training beëindigen vanwege fouten" },
          { en: "Starting training earlier than scheduled", es: "Comenzar entrenamiento antes de lo programado", de: "Training früher als geplant beginnen", nl: "Training eerder dan gepland beginnen" }
        ],
        correct: 0,
        explanation: {
          en: "Early stopping monitors validation loss during training and stops when it hasn't improved for a specified number of epochs (patience), saving the best model and preventing overfitting to training data.",
          es: "La detención temprana monitorea pérdida de validación durante entrenamiento y se detiene cuando no ha mejorado por un número especificado de épocas (paciencia), guardando el mejor modelo y previniendo sobreajuste a datos de entrenamiento.",
          de: "Early Stopping überwacht Validierungsverlust während Training und stoppt wenn er sich für eine bestimmte Anzahl von Epochen nicht verbessert hat (Geduld), speichert das beste Modell und verhindert Overfitting auf Trainingsdaten.",
          nl: "Early stopping monitort validation loss tijdens training en stopt wanneer het zich niet heeft verbeterd voor een gespecificeerd aantal epochs (patience), slaat het beste model op en voorkomt overfitting op trainingsdata."
        }
      },
      {
        question: {
          en: "What is fine-tuning in transfer learning?",
          es: "¿Qué es el ajuste fino en aprendizaje por transferencia?",
          de: "Was ist Fine-Tuning in Transfer Learning?",
          nl: "Wat is fine-tuning in transfer learning?"
        },
        options: [
          { en: "Unfreezing and retraining some pre-trained layers with a low learning rate for the new task", es: "Descongelar y reentrenar algunas capas pre-entrenadas con una tasa de aprendizaje baja para la nueva tarea", de: "Einige vortrainierte Schichten auftauen und mit niedriger Lernrate für die neue Aufgabe neu trainieren", nl: "Sommige voorgetrainde lagen ontdooien en opnieuw trainen met een lage learning rate voor de nieuwe taak" },
          { en: "Making small adjustments to hyperparameters only", es: "Hacer solo pequeños ajustes a hiperparámetros", de: "Nur kleine Anpassungen an Hyperparametern vornehmen", nl: "Alleen kleine aanpassingen maken aan hyperparameters" },
          { en: "Training the entire network from scratch with careful tuning", es: "Entrenar toda la red desde cero con ajuste cuidadoso", de: "Das gesamte Netzwerk von Grund auf mit sorgfältiger Abstimmung trainieren", nl: "Het hele netwerk vanaf nul trainen met zorgvuldige afstemming" },
          { en: "Reducing model size for better performance", es: "Reducir tamaño del modelo para mejor rendimiento", de: "Modellgröße reduzieren für bessere Leistung", nl: "Modelgrootte verkleinen voor betere prestaties" }
        ],
        correct: 0,
        explanation: {
          en: "Fine-tuning adapts pre-trained features to the new task by allowing later layers (and sometimes earlier ones) to update their weights slightly, balancing retention of learned features with task-specific adaptation.",
          es: "El ajuste fino adapta características pre-entrenadas a la nueva tarea permitiendo que capas posteriores (y a veces anteriores) actualicen ligeramente sus pesos, equilibrando retención de características aprendidas con adaptación específica de tarea.",
          de: "Fine-Tuning passt vortrainierte Merkmale an die neue Aufgabe an durch Erlauben dass spätere Schichten (und manchmal frühere) ihre Gewichte leicht aktualisieren, balanciert Beibehaltung gelernter Merkmale mit aufgabenspezifischer Anpassung.",
          nl: "Fine-tuning past voorgetrainde kenmerken aan de nieuwe taak aan door latere lagen (en soms eerdere) hun gewichten licht te laten updaten, balanceert behoud van geleerde kenmerken met taak-specifieke aanpassing."
        }
      },
      {
        question: {
          en: "What is atrous/dilated convolution?",
          es: "¿Qué es la convolución atrous/dilatada?",
          de: "Was ist Atrous/Dilated Convolution?",
          nl: "Wat is atrous/dilated convolutie?"
        },
        options: [
          { en: "Convolution with gaps between kernel elements to increase receptive field without adding parameters", es: "Convolución con espacios entre elementos de kernel para aumentar campo receptivo sin agregar parámetros", de: "Faltung mit Lücken zwischen Kernel-Elementen um rezeptives Feld zu vergrößern ohne Parameter hinzuzufügen", nl: "Convolutie met gaten tussen kernel elementen om receptief veld te vergroten zonder parameters toe te voegen" },
          { en: "Convolution that processes diluted images", es: "Convolución que procesa imágenes diluidas", de: "Faltung die verdünnte Bilder verarbeitet", nl: "Convolutie die verdunde beelden verwerkt" },
          { en: "A type of pooling operation", es: "Un tipo de operación de pooling", de: "Eine Art von Pooling-Operation", nl: "Een type pooling operatie" },
          { en: "Convolution with expanded output dimensions", es: "Convolución con dimensiones de salida expandidas", de: "Faltung mit erweiterten Ausgabedimensionen", nl: "Convolutie met uitgebreide outputdimensies" }
        ],
        correct: 0,
        explanation: {
          en: "Dilated convolution inserts spaces (holes) between kernel values controlled by a dilation rate, enabling larger receptive fields for capturing context without increasing computational cost or reducing resolution.",
          es: "La convolución dilatada inserta espacios (agujeros) entre valores de kernel controlados por una tasa de dilatación, permitiendo campos receptivos más grandes para capturar contexto sin aumentar costo computacional o reducir resolución.",
          de: "Dilated Convolution fügt Lücken zwischen Kernel-Werten ein gesteuert durch eine Dilatationsrate, ermöglicht größere rezeptive Felder für Kontexterfassung ohne rechnerische Kosten zu erhöhen oder Auflösung zu reduzieren.",
          nl: "Dilated convolutie voegt ruimtes (gaten) tussen kernel waarden in gecontroleerd door een dilatatie rate, maakt grotere receptieve velden mogelijk voor het vastleggen van context zonder computationele kosten te verhogen of resolutie te verminderen."
        }
      },
      {
        question: {
          en: "What is the purpose of the softmax activation function in CNNs?",
          es: "¿Cuál es el propósito de la función de activación softmax en CNNs?",
          de: "Was ist der Zweck der Softmax-Aktivierungsfunktion in CNNs?",
          nl: "Wat is het doel van de softmax activatiefunctie in CNNs?"
        },
        options: [
          { en: "Converting raw output scores into a probability distribution over multiple classes that sum to 1", es: "Convertir puntuaciones de salida crudas en una distribución de probabilidad sobre múltiples clases que suman 1", de: "Rohe Ausgabescores in eine Wahrscheinlichkeitsverteilung über mehrere Klassen umwandeln die zu 1 summieren", nl: "Ruwe output scores converteren naar een waarschijnlijkheidsverdeling over meerdere klassen die optellen tot 1" },
          { en: "Making the network train more softly", es: "Hacer que la red entrene más suavemente", de: "Das Netzwerk weicher trainieren lassen", nl: "Het netwerk zachter laten trainen" },
          { en: "Reducing the maximum values in outputs", es: "Reducir los valores máximos en salidas", de: "Maximale Werte in Ausgaben reduzieren", nl: "Maximale waarden in outputs verminderen" },
          { en: "Softening hard decision boundaries", es: "Suavizar límites de decisión duros", de: "Harte Entscheidungsgrenzen weicher machen", nl: "Harde beslissingsgrenzen verzachten" }
        ],
        correct: 0,
        explanation: {
          en: "Softmax exponentiates and normalizes the final layer outputs, producing interpretable class probabilities for multi-class classification where each output represents the model's confidence in each class.",
          es: "Softmax exponencia y normaliza las salidas de capa final, produciendo probabilidades de clase interpretables para clasificación multi-clase donde cada salida representa la confianza del modelo en cada clase.",
          de: "Softmax potenziert und normalisiert die finalen Schichtausgaben, produziert interpretierbare Klassenwahrscheinlichkeiten für Multi-Klassen-Klassifikation wo jede Ausgabe das Modellvertrauen in jede Klasse darstellt.",
          nl: "Softmax verheft tot macht en normaliseert de finale laag outputs, produceert interpreteerbare klasse waarschijnlijkheden voor multi-klasse classificatie waar elke output het modelvertrouwen in elke klasse vertegenwoordigt."
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