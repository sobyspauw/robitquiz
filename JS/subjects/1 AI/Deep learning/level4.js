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
          { en: "A mathematical operation that slides a filter over input data to detect features by computing element-wise products and sums", es: "Una operación matemática que desliza un filtro sobre datos de entrada para detectar características computando productos elemento por elemento y sumas", de: "Eine mathematische Operation die einen Filter über Eingabedaten schiebt um Merkmale durch Berechnung elementweiser Produkte und Summen zu erkennen", nl: "Een wiskundige operatie die een filter over inputdata schuift om kenmerken te detecteren door element-gewijs producten en sommen te berekenen" },
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
          { en: "Adding zeros or values around the input borders to control output size and preserve edge information", es: "Agregar ceros o valores alrededor de los bordes de entrada para controlar el tamaño de salida y preservar información de bordes", de: "Hinzufügen von Nullen oder Werten um die Eingaberänder um Ausgabegröße zu kontrollieren und Randinformationen zu bewahren", nl: "Het toevoegen van nullen of waarden rond de inputranden om outputgrootte te controleren en randinformatie te behouden" },
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
          { en: "Artificially expanding the training dataset by applying transformations like rotation, scaling, or flipping to existing images", es: "Expandir artificialmente el conjunto de datos de entrenamiento aplicando transformaciones como rotación, escalado o volteo a imágenes existentes", de: "Künstliches Erweitern des Trainingsdatensatzes durch Anwendung von Transformationen wie Rotation, Skalierung oder Spiegelung auf bestehende Bilder", nl: "Kunstmatig uitbreiden van de trainingsdataset door transformaties zoals rotatie, schaling of spiegeling toe te passen op bestaande afbeeldingen" },
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
          { en: "The region of the input image that influences a particular feature in the output", es: "La región de la imagen de entrada que influye en una característica particular en la salida", de: "Die Region des Eingabebildes die ein bestimmtes Merkmal in der Ausgabe beeinflusst", nl: "Het gebied van het invoerbeeld dat een bepaald kenmerk in de output beïnvloedt" },
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
          { en: "A dense layer where every neuron connects to every neuron in the previous layer, typically used for final classification", es: "Una capa densa donde cada neurona se conecta a cada neurona en la capa anterior, típicamente usada para clasificación final", de: "Eine dichte Schicht wo jedes Neuron mit jedem Neuron der vorherigen Schicht verbunden ist, typischerweise für finale Klassifikation verwendet", nl: "Een dichte laag waar elk neuron verbonden is met elk neuron in de vorige laag, typisch gebruikt voor finale classificatie" },
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
          { en: "To visualize what features the network has learned and which parts of the input activate specific neurons", es: "Para visualizar qué características ha aprendido la red y qué partes de la entrada activan neuronas específicas", de: "Um zu visualisieren welche Merkmale das Netzwerk gelernt hat und welche Teile der Eingabe spezifische Neuronen aktivieren", nl: "Om te visualiseren welke kenmerken het netwerk heeft geleerd en welke delen van de input specifieke neuronen activeren" },
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
          { en: "One of the first successful CNN architectures, pioneering the use of convolutional layers for handwritten digit recognition", es: "Una de las primeras arquitecturas CNN exitosas, pionera en el uso de capas convolucionales para reconocimiento de dígitos manuscritos", de: "Eine der ersten erfolgreichen CNN-Architekturen, Pionier in der Verwendung von Faltungsschichten für handgeschriebene Ziffernerkennung", nl: "Een van de eerste succesvolle CNN architecturen, pionier in het gebruik van convolutielagen voor handgeschreven cijferherkenning" },
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
          { en: "Gradients become exponentially smaller in earlier layers during backpropagation, making deep networks hard to train effectively", es: "Los gradientes se vuelven exponencialmente más pequeños en capas anteriores durante retropropagación, haciendo redes profundas difíciles de entrenar efectivamente", de: "Gradienten werden exponentiell kleiner in früheren Schichten während Backpropagation, macht tiefe Netzwerke schwer effektiv zu trainieren", nl: "Gradiënten worden exponentieel kleiner in eerdere lagen tijdens backpropagation, maakt diepe netwerken moeilijk effectief te trainen" },
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
          { en: "1x1 convolutions reduce dimensions and compute linear combinations across channels, while larger kernels capture spatial patterns", es: "Las convoluciones 1x1 reducen dimensiones y calculan combinaciones lineales a través de canales, mientras kernels más grandes capturan patrones espaciales", de: "1x1 Faltungen reduzieren Dimensionen und berechnen lineare Kombinationen über Kanäle, während größere Kernels räumliche Muster erfassen", nl: "1x1 convoluties verminderen dimensies en berekenen lineaire combinaties over kanalen, terwijl grotere kernels ruimtelijke patronen vastleggen" },
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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();