// Neural Networks Quiz - Level 6: Deep Learning Architectures
(function() {
  const level6 = {
    name: {
      en: "Deep Learning Architectures",
      es: "Arquitecturas de Aprendizaje Profundo",
      de: "Deep Learning Architekturen",
      nl: "Deep Learning Architecturen"
    },
    questions: [
      {
        question: {
          en: "What is the main innovation of ResNet (Residual Networks)?",
          es: "¿Cuál es la principal innovación de ResNet (Redes Residuales)?",
          de: "Was ist die Hauptinnovation von ResNet (Residuale Netzwerke)?",
          nl: "Wat is de belangrijkste innovatie van ResNet (Residuele Netwerken)?"
        },
        options: [
          { en: "Skip connections that allow gradients to flow directly to earlier layers", es: "Conexiones de salto que permiten que los gradientes fluyan directamente a capas anteriores", de: "Sprungverbindungen die Gradienten direkt zu früheren Schichten fließen lassen", nl: "Skip-verbindingen die gradiënten direct naar eerdere lagen laten stromen" },
          { en: "Using convolutional layers instead of fully connected layers", es: "Usar capas convolucionales en lugar de capas completamente conectadas", de: "Verwendung von Faltungsschichten anstelle von vollständig verbundenen Schichten", nl: "Het gebruik van convolutionele lagen in plaats van volledig verbonden lagen" },
          { en: "Adding dropout layers for regularization", es: "Agregar capas de dropout para regularización", de: "Hinzufügen von Dropout-Schichten zur Regularisierung", nl: "Het toevoegen van dropout-lagen voor regularisatie" },
          { en: "Using batch normalization between layers", es: "Usar normalización por lotes entre capas", de: "Verwendung von Batch-Normalisierung zwischen Schichten", nl: "Het gebruik van batch-normalisatie tussen lagen" }
        ],
        correct: 0,
        explanation: {
          en: "ResNet introduced skip connections (also called residual connections) that allow the network to learn residual mappings. This helps solve the vanishing gradient problem in very deep networks by providing direct paths for gradients to flow to earlier layers.",
          es: "ResNet introdujo conexiones de salto (también llamadas conexiones residuales) que permiten a la red aprender mapeos residuales. Esto ayuda a resolver el problema del gradiente evanescente en redes muy profundas proporcionando caminos directos para que los gradientes fluyan a capas anteriores.",
          de: "ResNet führte Sprungverbindungen (auch residuale Verbindungen genannt) ein, die es dem Netzwerk ermöglichen, residuale Abbildungen zu lernen. Dies hilft beim Lösen des Problems verschwindender Gradienten in sehr tiefen Netzwerken durch direkte Pfade für Gradienten zu früheren Schichten.",
          nl: "ResNet introduceerde skip-verbindingen (ook wel residuele verbindingen genoemd) die het netwerk in staat stellen om residuele afbeeldingen te leren. Dit helpt het probleem van verdwijnende gradiënten in zeer diepe netwerken op te lossen door directe paden voor gradiënten naar eerdere lagen te bieden."
        }
      },
      {
        question: {
          en: "What characterizes a DenseNet (Densely Connected Network)?",
          es: "¿Qué caracteriza a una DenseNet (Red Densamente Conectada)?",
          de: "Was charakterisiert ein DenseNet (Dicht Verbundenes Netzwerk)?",
          nl: "Wat kenmerkt een DenseNet (Dicht Verbonden Netwerk)?"
        },
        options: [
          { en: "Each layer connects to every other layer in a feed-forward fashion", es: "Cada capa se conecta a todas las demás capas de manera feed-forward", de: "Jede Schicht verbindet sich mit jeder anderen Schicht in einer Vorwärts-Weise", nl: "Elke laag verbindt zich met elke andere laag op een feed-forward manier" },
          { en: "Layers have more neurons than traditional networks", es: "Las capas tienen más neuronas que las redes tradicionales", de: "Schichten haben mehr Neuronen als traditionelle Netzwerke", nl: "Lagen hebben meer neuronen dan traditionele netwerken" },
          { en: "All layers use dense (fully connected) connections", es: "Todas las capas usan conexiones densas (completamente conectadas)", de: "Alle Schichten verwenden dichte (vollständig verbundene) Verbindungen", nl: "Alle lagen gebruiken dichte (volledig verbonden) verbindingen" },
          { en: "The network has a very deep architecture with many layers", es: "La red tiene una arquitectura muy profunda con muchas capas", de: "Das Netzwerk hat eine sehr tiefe Architektur mit vielen Schichten", nl: "Het netwerk heeft een zeer diepe architectuur met veel lagen" }
        ],
        correct: 0,
        explanation: {
          en: "In DenseNet, each layer receives feature maps from all preceding layers and passes its own feature maps to all subsequent layers. This creates dense connectivity patterns that strengthen feature propagation and reduce the number of parameters.",
          es: "En DenseNet, cada capa recibe mapas de características de todas las capas precedentes y pasa sus propios mapas de características a todas las capas subsiguientes. Esto crea patrones de conectividad densa que fortalecen la propagación de características y reducen el número de parámetros.",
          de: "In DenseNet erhält jede Schicht Feature-Maps von allen vorhergehenden Schichten und gibt ihre eigenen Feature-Maps an alle nachfolgenden Schichten weiter. Dies schafft dichte Konnektivitätsmuster die Feature-Propagation stärken und die Anzahl der Parameter reduzieren.",
          nl: "In DenseNet ontvangt elke laag feature maps van alle voorafgaande lagen en geeft zijn eigen feature maps door aan alle volgende lagen. Dit creëert dichte connectiviteitspatronen die feature-propagatie versterken en het aantal parameters verminderen."
        }
      },
      {
        question: {
          en: "What is the main purpose of inception modules in GoogLeNet?",
          es: "¿Cuál es el propósito principal de los módulos inception en GoogLeNet?",
          de: "Was ist der Hauptzweck von Inception-Modulen in GoogLeNet?",
          nl: "Wat is het hoofddoel van inception-modules in GoogLeNet?"
        },
        options: [
          { en: "To apply multiple filter sizes in parallel and concatenate results", es: "Aplicar múltiples tamaños de filtro en paralelo y concatenar resultados", de: "Mehrere Filtergrößen parallel anzuwenden und Ergebnisse zu verketten", nl: "Meerdere filtergroottes parallel toepassen en resultaten samenvoegen" },
          { en: "To reduce overfitting through dropout", es: "Reducir el sobreajuste mediante dropout", de: "Overfitting durch Dropout zu reduzieren", nl: "Overfitting verminderen door dropout" },
          { en: "To normalize inputs between layers", es: "Normalizar las entradas entre capas", de: "Eingaben zwischen Schichten zu normalisieren", nl: "Invoer tussen lagen normaliseren" },
          { en: "To increase the depth of the network", es: "Aumentar la profundidad de la red", de: "Die Tiefe des Netzwerks zu erhöhen", nl: "De diepte van het netwerk vergroten" }
        ],
        correct: 0,
        explanation: {
          en: "Inception modules use multiple convolution filters of different sizes (1x1, 3x3, 5x5) and pooling operations in parallel on the same input, then concatenate all outputs. This allows the network to capture features at multiple scales simultaneously.",
          es: "Los módulos inception usan múltiples filtros de convolución de diferentes tamaños (1x1, 3x3, 5x5) y operaciones de pooling en paralelo en la misma entrada, luego concatenan todas las salidas. Esto permite a la red capturar características en múltiples escalas simultáneamente.",
          de: "Inception-Module verwenden mehrere Faltungsfilter verschiedener Größen (1x1, 3x3, 5x5) und Pooling-Operationen parallel auf derselben Eingabe, dann verketten sie alle Ausgaben. Dies ermöglicht dem Netzwerk gleichzeitig Features in mehreren Skalen zu erfassen.",
          nl: "Inception-modules gebruiken meerdere convolutiefilters van verschillende groottes (1x1, 3x3, 5x5) en pooling-operaties parallel op dezelfde invoer, en voegen vervolgens alle outputs samen. Dit stelt het netwerk in staat om gelijktijdig features op meerdere schalen vast te leggen."
        }
      },
      {
        question: {
          en: "What is the role of 1x1 convolutions in modern CNN architectures?",
          es: "¿Cuál es el papel de las convoluciones 1x1 en las arquitecturas CNN modernas?",
          de: "Was ist die Rolle von 1x1-Faltungen in modernen CNN-Architekturen?",
          nl: "Wat is de rol van 1x1 convoluties in moderne CNN-architecturen?"
        },
        options: [
          { en: "Dimensionality reduction and feature map transformation", es: "Reducción de dimensionalidad y transformación de mapas de características", de: "Dimensionalitätsreduktion und Feature-Map-Transformation", nl: "Dimensionaliteitsreductie en feature map transformatie" },
          { en: "Spatial feature extraction like regular convolutions", es: "Extracción de características espaciales como convoluciones regulares", de: "Räumliche Feature-Extraktion wie reguläre Faltungen", nl: "Ruimtelijke feature-extractie zoals reguliere convoluties" },
          { en: "Pooling operations to reduce feature map size", es: "Operaciones de pooling para reducir el tamaño del mapa de características", de: "Pooling-Operationen zur Reduzierung der Feature-Map-Größe", nl: "Pooling-operaties om feature map grootte te verkleinen" },
          { en: "Adding non-linearity without changing spatial dimensions", es: "Agregar no linealidad sin cambiar las dimensiones espaciales", de: "Nicht-Linearität hinzufügen ohne räumliche Dimensionen zu ändern", nl: "Non-lineariteit toevoegen zonder ruimtelijke dimensies te veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "1x1 convolutions act as a channel-wise linear transformation, effectively reducing or expanding the number of feature channels without affecting spatial dimensions. They're often called 'network in network' and are crucial for parameter efficiency in modern architectures.",
          es: "Las convoluciones 1x1 actúan como una transformación lineal por canal, reduciendo o expandiendo efectivamente el número de canales de características sin afectar las dimensiones espaciales. A menudo se llaman 'red en red' y son cruciales para la eficiencia de parámetros en arquitecturas modernas.",
          de: "1x1-Faltungen wirken als kanalweise lineare Transformation und reduzieren oder erweitern effektiv die Anzahl der Feature-Kanäle ohne räumliche Dimensionen zu beeinflussen. Sie werden oft 'Netzwerk im Netzwerk' genannt und sind entscheidend für Parametereffizienz in modernen Architekturen.",
          nl: "1x1 convoluties werken als een kanaalgewijze lineaire transformatie, waardoor het aantal feature-kanalen effectief wordt verkleind of uitgebreid zonder ruimtelijke dimensies te beïnvloeden. Ze worden vaak 'netwerk in netwerk' genoemd en zijn cruciaal voor parameterefficiëntie in moderne architecturen."
        }
      },
      {
        question: {
          en: "What distinguishes MobileNet architectures from traditional CNNs?",
          es: "¿Qué distingue las arquitecturas MobileNet de las CNN tradicionales?",
          de: "Was unterscheidet MobileNet-Architekturen von traditionellen CNNs?",
          nl: "Wat onderscheidt MobileNet-architecturen van traditionele CNN's?"
        },
        options: [
          { en: "Use of depthwise separable convolutions for efficiency", es: "Uso de convoluciones separables en profundidad para eficiencia", de: "Verwendung von tiefentrennbaren Faltungen für Effizienz", nl: "Gebruik van diepte-scheidbare convoluties voor efficiëntie" },
          { en: "Deeper networks with more layers", es: "Redes más profundas con más capas", de: "Tiefere Netzwerke mit mehr Schichten", nl: "Diepere netwerken met meer lagen" },
          { en: "Larger filter sizes for better feature extraction", es: "Tamaños de filtro más grandes para mejor extracción de características", de: "Größere Filtergrößen für bessere Feature-Extraktion", nl: "Grotere filtergroottes voor betere feature-extractie" },
          { en: "More dense connections between layers", es: "Más conexiones densas entre capas", de: "Mehr dichte Verbindungen zwischen Schichten", nl: "Meer dichte verbindingen tussen lagen" }
        ],
        correct: 0,
        explanation: {
          en: "MobileNets use depthwise separable convolutions, which split standard convolution into depthwise convolution (filtering) and pointwise convolution (combining). This dramatically reduces computational cost and parameters while maintaining accuracy, making them ideal for mobile devices.",
          es: "MobileNets usan convoluciones separables en profundidad, que dividen la convolución estándar en convolución en profundidad (filtrado) y convolución puntual (combinación). Esto reduce dramáticamente el costo computacional y los parámetros mientras mantiene la precisión, haciéndolas ideales para dispositivos móviles.",
          de: "MobileNets verwenden tiefentrennbare Faltungen, die Standard-Faltung in tiefenweise Faltung (Filterung) und punktweise Faltung (Kombination) aufteilen. Dies reduziert dramatisch Rechenkosten und Parameter bei gleichbleibender Genauigkeit, was sie ideal für mobile Geräte macht.",
          nl: "MobileNets gebruiken diepte-scheidbare convoluties, die standaard convolutie opsplitsen in dieptegewijze convolutie (filteren) en puntgewijze convolutie (combineren). Dit vermindert dramatisch de rekenkosten en parameters terwijl de nauwkeurigheid behouden blijft, waardoor ze ideaal zijn voor mobiele apparaten."
        }
      },
      {
        question: {
          en: "What is the key concept behind Squeeze-and-Excitation (SE) blocks?",
          es: "¿Cuál es el concepto clave detrás de los bloques Squeeze-and-Excitation (SE)?",
          de: "Was ist das Schlüsselkonzept hinter Squeeze-and-Excitation (SE) Blöcken?",
          nl: "Wat is het kernconceptachter Squeeze-and-Excitation (SE) blokken?"
        },
        options: [
          { en: "Channel-wise attention to recalibrate feature importance", es: "Atención por canal para recalibrar la importancia de las características", de: "Kanalweise Aufmerksamkeit zur Neukalibrierung der Feature-Wichtigkeit", nl: "Kanaalgewijze aandacht om feature-belangrijkheid te herkaliberen" },
          { en: "Spatial attention to focus on important regions", es: "Atención espacial para enfocarse en regiones importantes", de: "Räumliche Aufmerksamkeit um sich auf wichtige Regionen zu konzentrieren", nl: "Ruimtelijke aandacht om te focussen op belangrijke gebieden" },
          { en: "Temporal attention for sequence modeling", es: "Atención temporal para modelado de secuencias", de: "Zeitliche Aufmerksamkeit für Sequenzmodellierung", nl: "Temporele aandacht voor sequentiemodellering" },
          { en: "Multi-head attention like in transformers", es: "Atención multi-cabeza como en transformers", de: "Multi-Head-Aufmerksamkeit wie in Transformers", nl: "Multi-head aandacht zoals in transformers" }
        ],
        correct: 0,
        explanation: {
          en: "SE blocks implement channel attention by first squeezing spatial dimensions through global pooling, then exciting (recalibrating) channels through a small neural network. This allows the model to emphasize informative channels and suppress less useful ones.",
          es: "Los bloques SE implementan atención de canal primero comprimiendo las dimensiones espaciales a través de pooling global, luego excitando (recalibrando) los canales a través de una pequeña red neuronal. Esto permite al modelo enfatizar canales informativos y suprimir los menos útiles.",
          de: "SE-Blöcke implementieren Kanalaufmerksamkeit indem sie zuerst räumliche Dimensionen durch globales Pooling komprimieren, dann Kanäle durch ein kleines neuronales Netzwerk anregen (neukalibrieren). Dies ermöglicht dem Modell informative Kanäle zu betonen und weniger nützliche zu unterdrücken.",
          nl: "SE-blokken implementeren kanaal-aandacht door eerst ruimtelijke dimensies samen te persen via globale pooling, en vervolgens kanalen te prikkelen (herkaliberen) via een klein neuraal netwerk. Dit stelt het model in staat om informatieve kanalen te benadrukken en minder nuttige te onderdrukken."
        }
      },
      {
        question: {
          en: "What characterizes EfficientNet's approach to network scaling?",
          es: "¿Qué caracteriza el enfoque de EfficientNet para el escalado de redes?",
          de: "Was charakterisiert EfficientNets Ansatz zur Netzwerkskalierung?",
          nl: "Wat kenmerkt EfficientNet's benadering van netwerk-schaling?"
        },
        options: [
          { en: "Compound scaling of depth, width, and resolution simultaneously", es: "Escalado compuesto de profundidad, ancho y resolución simultáneamente", de: "Zusammengesetzte Skalierung von Tiefe, Breite und Auflösung gleichzeitig", nl: "Samengestelde schaling van diepte, breedte en resolutie tegelijkertijd" },
          { en: "Only increasing network depth for better performance", es: "Solo aumentar la profundidad de la red para mejor rendimiento", de: "Nur Netzwerktiefe für bessere Leistung erhöhen", nl: "Alleen netwerkdiepte verhogen voor betere prestaties" },
          { en: "Using wider layers with more channels", es: "Usar capas más anchas con más canales", de: "Breitere Schichten mit mehr Kanälen verwenden", nl: "Bredere lagen met meer kanalen gebruiken" },
          { en: "Higher input resolution without architectural changes", es: "Mayor resolución de entrada sin cambios arquitectónicos", de: "Höhere Eingabeauflösung ohne architektonische Änderungen", nl: "Hogere invoerresolutie zonder architecturale veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "EfficientNet introduces compound scaling, which simultaneously scales network depth (number of layers), width (number of channels), and input resolution using a fixed ratio. This balanced scaling approach achieves better accuracy and efficiency than scaling any single dimension.",
          es: "EfficientNet introduce escalado compuesto, que escala simultáneamente la profundidad de la red (número de capas), el ancho (número de canales) y la resolución de entrada usando una proporción fija. Este enfoque de escalado equilibrado logra mejor precisión y eficiencia que escalar cualquier dimensión individual.",
          de: "EfficientNet führt zusammengesetzte Skalierung ein, die gleichzeitig Netzwerktiefe (Anzahl Schichten), Breite (Anzahl Kanäle) und Eingabeauflösung mit einem festen Verhältnis skaliert. Dieser ausgewogene Skalierungsansatz erreicht bessere Genauigkeit und Effizienz als die Skalierung einzelner Dimensionen.",
          nl: "EfficientNet introduceert samengestelde schaling, die gelijktijdig netwerkdiepte (aantal lagen), breedte (aantal kanalen) en invoerresolutie schaalt met een vaste verhouding. Deze gebalanceerde schalingsbenadering bereikt betere nauwkeurigheid en efficiëntie dan het schalen van een enkele dimensie."
        }
      },
      {
        question: {
          en: "What is the main advantage of using bottleneck layers in ResNet?",
          es: "¿Cuál es la principal ventaja de usar capas de cuello de botella en ResNet?",
          de: "Was ist der Hauptvorteil der Verwendung von Flaschenhals-Schichten in ResNet?",
          nl: "Wat is het hoofdvoordeel van het gebruik van bottleneck-lagen in ResNet?"
        },
        options: [
          { en: "Reducing computational complexity while maintaining performance", es: "Reducir la complejidad computacional mientras se mantiene el rendimiento", de: "Reduzierung der rechnerischen Komplexität bei gleichbleibender Leistung", nl: "Rekenkundige complexiteit verminderen terwijl prestaties behouden blijven" },
          { en: "Increasing the receptive field of the network", es: "Aumentar el campo receptivo de la red", de: "Vergrößerung des rezeptiven Feldes des Netzwerks", nl: "Het receptieve veld van het netwerk vergroten" },
          { en: "Adding more non-linear activations", es: "Agregar más activaciones no lineales", de: "Mehr nicht-lineare Aktivierungen hinzufügen", nl: "Meer niet-lineaire activeringen toevoegen" },
          { en: "Improving gradient flow through the network", es: "Mejorar el flujo de gradientes a través de la red", de: "Verbesserung des Gradientenflusses durch das Netzwerk", nl: "Gradiëntenstroom door het netwerk verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Bottleneck layers use 1x1 convolutions to first reduce the number of channels, then apply 3x3 convolution, then expand channels again. This design reduces the number of parameters and computations while maintaining similar performance to the full-width alternative.",
          es: "Las capas de cuello de botella usan convoluciones 1x1 para primero reducir el número de canales, luego aplicar convolución 3x3, luego expandir los canales nuevamente. Este diseño reduce el número de parámetros y cálculos mientras mantiene un rendimiento similar a la alternativa de ancho completo.",
          de: "Flaschenhals-Schichten verwenden 1x1-Faltungen um zuerst die Anzahl der Kanäle zu reduzieren, dann 3x3-Faltung anzuwenden, dann Kanäle wieder zu erweitern. Dieses Design reduziert die Anzahl der Parameter und Berechnungen bei ähnlicher Leistung zur vollbreiten Alternative.",
          nl: "Bottleneck-lagen gebruiken 1x1 convoluties om eerst het aantal kanalen te verminderen, dan 3x3 convolutie toe te passen, en vervolgens kanalen weer uit te breiden. Dit ontwerp vermindert het aantal parameters en berekeningen terwijl vergelijkbare prestaties worden behouden als het volledig brede alternatief."
        }
      },
      {
        question: {
          en: "What is the purpose of Group Normalization compared to Batch Normalization?",
          es: "¿Cuál es el propósito de la Normalización de Grupo comparada con la Normalización por Lotes?",
          de: "Was ist der Zweck der Gruppennormalisierung im Vergleich zur Batch-Normalisierung?",
          nl: "Wat is het doel van Groepsnormalisatie vergeleken met Batch-normalisatie?"
        },
        options: [
          { en: "Better performance with small batch sizes by normalizing within channel groups", es: "Mejor rendimiento con tamaños de lote pequeños normalizando dentro de grupos de canales", de: "Bessere Leistung bei kleinen Batch-Größen durch Normalisierung innerhalb von Kanalgruppen", nl: "Betere prestaties met kleine batch-groottes door normalisatie binnen kanaalgroepen" },
          { en: "Faster training by reducing internal covariate shift", es: "Entrenamiento más rápido reduciendo el cambio de covarianza interna", de: "Schnelleres Training durch Reduzierung der internen Kovarianzverschiebung", nl: "Snellere training door vermindering van interne covariantieverschuiving" },
          { en: "Better generalization by adding regularization", es: "Mejor generalización agregando regularización", de: "Bessere Generalisierung durch Hinzufügen von Regularisierung", nl: "Betere generalisatie door regularisatie toe te voegen" },
          { en: "Reducing overfitting in deep networks", es: "Reducir el sobreajuste en redes profundas", de: "Reduzierung von Overfitting in tiefen Netzwerken", nl: "Overfitting verminderen in diepe netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Group Normalization divides channels into groups and normalizes within each group independently of batch size. This makes it more stable for small batch sizes compared to Batch Normalization, which can be unstable when batch statistics are unreliable.",
          es: "La Normalización de Grupo divide los canales en grupos y normaliza dentro de cada grupo independientemente del tamaño del lote. Esto la hace más estable para tamaños de lote pequeños comparado con la Normalización por Lotes, que puede ser inestable cuando las estadísticas del lote no son confiables.",
          de: "Gruppennormalisierung teilt Kanäle in Gruppen auf und normalisiert innerhalb jeder Gruppe unabhängig von der Batch-Größe. Dies macht sie stabiler für kleine Batch-Größen im Vergleich zur Batch-Normalisierung, die instabil sein kann wenn Batch-Statistiken unzuverlässig sind.",
          nl: "Groepsnormalisatie verdeelt kanalen in groepen en normaliseert binnen elke groep onafhankelijk van batch-grootte. Dit maakt het stabieler voor kleine batch-groottes vergeleken met Batch-normalisatie, die instabiel kan zijn wanneer batch-statistieken onbetrouwbaar zijn."
        }
      },
      {
        question: {
          en: "What distinguishes NASNet (Neural Architecture Search) from manually designed networks?",
          es: "¿Qué distingue a NASNet (Búsqueda de Arquitectura Neural) de las redes diseñadas manualmente?",
          de: "Was unterscheidet NASNet (Neural Architecture Search) von manuell entworfenen Netzwerken?",
          nl: "Wat onderscheidt NASNet (Neural Architecture Search) van handmatig ontworpen netwerken?"
        },
        options: [
          { en: "Architecture discovered through automated search algorithms", es: "Arquitectura descubierta a través de algoritmos de búsqueda automatizada", de: "Architektur entdeckt durch automatisierte Suchalgorithmen", nl: "Architectuur ontdekt door geautomatiseerde zoekalgoritmen" },
          { en: "Uses only standard convolution and pooling layers", es: "Usa solo capas de convolución y pooling estándar", de: "Verwendet nur Standard-Faltungs- und Pooling-Schichten", nl: "Gebruikt alleen standaard convolutie- en pooling-lagen" },
          { en: "Optimized specifically for image classification tasks", es: "Optimizada específicamente para tareas de clasificación de imágenes", de: "Speziell für Bildklassifizierungsaufgaben optimiert", nl: "Specifiek geoptimaliseerd voor beeldclassificatietaken" },
          { en: "Based on transformer architecture principles", es: "Basada en principios de arquitectura transformer", de: "Basiert auf Transformer-Architekturprinzipien", nl: "Gebaseerd op transformer-architectuurprincipes" }
        ],
        correct: 0,
        explanation: {
          en: "NASNet uses Neural Architecture Search (NAS) to automatically discover optimal network architectures through reinforcement learning. Instead of manual design, algorithms search through architecture space to find configurations that achieve high performance on specific tasks.",
          es: "NASNet usa Búsqueda de Arquitectura Neural (NAS) para descubrir automáticamente arquitecturas de red óptimas a través de aprendizaje por refuerzo. En lugar de diseño manual, los algoritmos buscan a través del espacio de arquitectura para encontrar configuraciones que logren alto rendimiento en tareas específicas.",
          de: "NASNet verwendet Neural Architecture Search (NAS) um automatisch optimale Netzwerkarchitekturen durch Verstärkungslernen zu entdecken. Anstatt manueller Gestaltung suchen Algorithmen durch den Architekturraum um Konfigurationen zu finden die hohe Leistung bei spezifischen Aufgaben erreichen.",
          nl: "NASNet gebruikt Neural Architecture Search (NAS) om automatisch optimale netwerkarchitecturen te ontdekken via reinforcement learning. In plaats van handmatig ontwerp zoeken algoritmen door de architectuurruimte om configuraties te vinden die hoge prestaties behalen bij specifieke taken."
        }
      },
      {
        question: {
          en: "What is the main innovation of Highway Networks?",
          es: "¿Cuál es la principal innovación de las Highway Networks?",
          de: "Was ist die Hauptinnovation von Highway Networks?",
          nl: "Wat is de belangrijkste innovatie van Highway Networks?"
        },
        options: [
          { en: "Learnable gating mechanisms to control information flow", es: "Mecanismos de compuerta aprendibles para controlar el flujo de información", de: "Lernbare Gating-Mechanismen zur Steuerung des Informationsflusses", nl: "Leerbare poortvormingsmechanismen om informatiestroom te controleren" },
          { en: "Multiple parallel pathways for feature extraction", es: "Múltiples vías paralelas para extracción de características", de: "Mehrere parallele Pfade für Feature-Extraktion", nl: "Meerdere parallelle paden voor feature-extractie" },
          { en: "Adaptive pooling operations", es: "Operaciones de pooling adaptativo", de: "Adaptive Pooling-Operationen", nl: "Adaptieve pooling-operaties" },
          { en: "Dynamic filter generation", es: "Generación de filtros dinámicos", de: "Dynamische Filter-Generierung", nl: "Dynamische filtergeneratie" }
        ],
        correct: 0,
        explanation: {
          en: "Highway Networks introduce gating mechanisms with transform and carry gates that learn to control the flow of information through the network. This allows unimpeded information flow when needed and was a precursor to the gating mechanisms used in LSTMs and later ResNets.",
          es: "Las Highway Networks introducen mecanismos de compuerta con compuertas de transformación y transporte que aprenden a controlar el flujo de información a través de la red. Esto permite flujo de información sin obstáculos cuando es necesario y fue un precursor de los mecanismos de compuerta usados en LSTMs y posteriormente ResNets.",
          de: "Highway Networks führen Gating-Mechanismen mit Transform- und Carry-Gates ein die lernen den Informationsfluss durch das Netzwerk zu steuern. Dies ermöglicht ungehinderten Informationsfluss wenn nötig und war ein Vorläufer der Gating-Mechanismen in LSTMs und später ResNets.",
          nl: "Highway Networks introduceren poortvormingsmechanismen met transform- en carry-poorten die leren de informatiestroom door het netwerk te controleren. Dit maakt onbelemmerde informatiestroom mogelijk wanneer nodig en was een voorloper van de poortvormingsmechanismen gebruikt in LSTM's en later ResNets."
        }
      },
      {
        question: {
          en: "What characterizes ShuffleNet's approach to efficiency?",
          es: "¿Qué caracteriza el enfoque de ShuffleNet hacia la eficiencia?",
          de: "Was charakterisiert ShuffleNets Ansatz zur Effizienz?",
          nl: "Wat kenmerkt ShuffleNet's benadering van efficiëntie?"
        },
        options: [
          { en: "Channel shuffle operations with group convolutions", es: "Operaciones de mezcla de canales con convoluciones de grupo", de: "Kanal-Shuffle-Operationen mit Gruppenfaltungen", nl: "Kanaal-shuffle operaties met groepsconvoluties" },
          { en: "Depthwise separable convolutions", es: "Convoluciones separables en profundidad", de: "Tiefentrennbare Faltungen", nl: "Diepte-scheidbare convoluties" },
          { en: "Pruning of redundant connections", es: "Poda de conexiones redundantes", de: "Beschneidung redundanter Verbindungen", nl: "Snoeien van redundante verbindingen" },
          { en: "Knowledge distillation from larger models", es: "Destilación de conocimiento de modelos más grandes", de: "Wissensdestillation von größeren Modellen", nl: "Kennisdistillatie van grotere modellen" }
        ],
        correct: 0,
        explanation: {
          en: "ShuffleNet uses pointwise group convolutions and channel shuffle operations. The channel shuffle redistributes feature maps across groups, allowing information exchange between different channel groups while maintaining computational efficiency through group convolutions.",
          es: "ShuffleNet usa convoluciones de grupo puntuales y operaciones de mezcla de canales. La mezcla de canales redistribuye los mapas de características entre grupos, permitiendo intercambio de información entre diferentes grupos de canales mientras mantiene eficiencia computacional a través de convoluciones de grupo.",
          de: "ShuffleNet verwendet punktweise Gruppenfaltungen und Kanal-Shuffle-Operationen. Das Kanal-Shuffle verteilt Feature-Maps zwischen Gruppen um, ermöglicht Informationsaustausch zwischen verschiedenen Kanalgruppen bei gleichzeitiger rechnerischer Effizienz durch Gruppenfaltungen.",
          nl: "ShuffleNet gebruikt puntgewijze groepsconvoluties en kanaal-shuffle operaties. De kanaal-shuffle herverdeelt feature maps tussen groepen, waardoor informatie-uitwisseling tussen verschillende kanaalgroepen mogelijk is terwijl rekenkundige efficiëntie behouden blijft door groepsconvoluties."
        }
      },
      {
        question: {
          en: "What is the key principle behind Feature Pyramid Networks (FPN)?",
          es: "¿Cuál es el principio clave detrás de las Feature Pyramid Networks (FPN)?",
          de: "Was ist das Schlüsselprinzip hinter Feature Pyramid Networks (FPN)?",
          nl: "Wat is het kernprincipe achter Feature Pyramid Networks (FPN)?"
        },
        options: [
          { en: "Combining multi-scale features through top-down and lateral connections", es: "Combinar características multi-escala a través de conexiones descendentes y laterales", de: "Kombination von Multi-Skala-Features durch Top-Down- und Lateral-Verbindungen", nl: "Multi-schaal features combineren via top-down en laterale verbindingen" },
          { en: "Stacking multiple networks of different sizes", es: "Apilar múltiples redes de diferentes tamaños", de: "Stapeln mehrerer Netzwerke verschiedener Größen", nl: "Meerdere netwerken van verschillende groottes stapelen" },
          { en: "Using pyramid pooling for feature extraction", es: "Usar pooling piramidal para extracción de características", de: "Verwendung von Pyramiden-Pooling für Feature-Extraktion", nl: "Pyramid pooling gebruiken voor feature-extractie" },
          { en: "Progressive feature refinement through multiple stages", es: "Refinamiento progresivo de características a través de múltiples etapas", de: "Progressive Feature-Verfeinerung durch mehrere Stufen", nl: "Progressieve feature-verfijning door meerdere stadia" }
        ],
        correct: 0,
        explanation: {
          en: "FPN builds feature pyramids with high-level semantic and low-level spatial information by combining features from different network depths. It uses top-down pathways and lateral connections to merge strong semantic features with high-resolution features.",
          es: "FPN construye pirámides de características con información semántica de alto nivel y espacial de bajo nivel combinando características de diferentes profundidades de red. Usa vías descendentes y conexiones laterales para fusionar características semánticas fuertes con características de alta resolución.",
          de: "FPN baut Feature-Pyramiden mit hochrangiger semantischer und niederrangiger räumlicher Information durch Kombination von Features verschiedener Netzwerktiefen. Es verwendet Top-Down-Pfade und Lateral-Verbindungen um starke semantische Features mit hochauflösenden Features zu verschmelzen.",
          nl: "FPN bouwt feature-pyramides met hoog-niveau semantische en laag-niveau ruimtelijke informatie door features van verschillende netwerkdieptes te combineren. Het gebruikt top-down paden en laterale verbindingen om sterke semantische features te mengen met hoge-resolutie features."
        }
      },
      {
        question: {
          en: "What distinguishes Xception from traditional Inception architectures?",
          es: "¿Qué distingue a Xception de las arquitecturas Inception tradicionales?",
          de: "Was unterscheidet Xception von traditionellen Inception-Architekturen?",
          nl: "Wat onderscheidt Xception van traditionele Inception-architecturen?"
        },
        options: [
          { en: "Replaces Inception modules with depthwise separable convolutions", es: "Reemplaza módulos Inception con convoluciones separables en profundidad", de: "Ersetzt Inception-Module durch tiefentrennbare Faltungen", nl: "Vervangt Inception-modules door diepte-scheidbare convoluties" },
          { en: "Uses only 1x1 convolutions throughout the network", es: "Usa solo convoluciones 1x1 en toda la red", de: "Verwendet nur 1x1-Faltungen im gesamten Netzwerk", nl: "Gebruikt alleen 1x1 convoluties door het hele netwerk" },
          { en: "Implements extreme inception with many parallel branches", es: "Implementa inception extremo con muchas ramas paralelas", de: "Implementiert extreme Inception mit vielen parallelen Zweigen", nl: "Implementeert extreme inception met veel parallelle takken" },
          { en: "Adds residual connections to inception modules", es: "Agrega conexiones residuales a módulos inception", de: "Fügt residuale Verbindungen zu Inception-Modulen hinzu", nl: "Voegt residuele verbindingen toe aan inception-modules" }
        ],
        correct: 0,
        explanation: {
          en: "Xception (Extreme Inception) takes the Inception hypothesis to its extreme by replacing Inception modules entirely with depthwise separable convolutions. This approach completely decouples cross-channel and spatial correlations, achieving better performance with fewer parameters.",
          es: "Xception (Extreme Inception) lleva la hipótesis de Inception a su extremo reemplazando completamente los módulos Inception con convoluciones separables en profundidad. Este enfoque desacopla completamente las correlaciones cruzadas de canal y espaciales, logrando mejor rendimiento con menos parámetros.",
          de: "Xception (Extreme Inception) führt die Inception-Hypothese zum Extrem indem es Inception-Module vollständig durch tiefentrennbare Faltungen ersetzt. Dieser Ansatz entkoppelt vollständig kanalübergreifende und räumliche Korrelationen und erreicht bessere Leistung mit weniger Parametern.",
          nl: "Xception (Extreme Inception) brengt de Inception-hypothese tot het uiterste door Inception-modules volledig te vervangen door diepte-scheidbare convoluties. Deze benadering ontkoppelt volledig cross-kanaal en ruimtelijke correlaties, en bereikt betere prestaties met minder parameters."
        }
      },
      {
        question: {
          en: "What is the main purpose of Ghost modules in GhostNet?",
          es: "¿Cuál es el propósito principal de los módulos Ghost en GhostNet?",
          de: "Was ist der Hauptzweck von Ghost-Modulen in GhostNet?",
          nl: "Wat is het hoofddoel van Ghost-modules in GhostNet?"
        },
        options: [
          { en: "Generate redundant feature maps using cheap linear operations", es: "Generar mapas de características redundantes usando operaciones lineales baratas", de: "Redundante Feature-Maps mit günstigen linearen Operationen generieren", nl: "Redundante feature maps genereren met goedkope lineaire operaties" },
          { en: "Remove ghost gradients during backpropagation", es: "Eliminar gradientes fantasma durante la retropropagación", de: "Ghost-Gradienten während der Rückpropagation entfernen", nl: "Ghost-gradiënten verwijderen tijdens backpropagation" },
          { en: "Create phantom connections between layers", es: "Crear conexiones fantasma entre capas", de: "Phantom-Verbindungen zwischen Schichten erstellen", nl: "Fantoomverbindingen tussen lagen creëren" },
          { en: "Implement spectral normalization for stability", es: "Implementar normalización espectral para estabilidad", de: "Spektrale Normalisierung für Stabilität implementieren", nl: "Spectrale normalisatie implementeren voor stabiliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Ghost modules exploit redundancy in feature maps by generating some feature maps through cheap linear operations (like depthwise convolutions) instead of expensive standard convolutions. This reduces computational cost while maintaining similar representational power.",
          es: "Los módulos Ghost explotan la redundancia en los mapas de características generando algunos mapas de características a través de operaciones lineales baratas (como convoluciones en profundidad) en lugar de convoluciones estándar costosas. Esto reduce el costo computacional mientras mantiene un poder representacional similar.",
          de: "Ghost-Module nutzen Redundanz in Feature-Maps indem sie einige Feature-Maps durch günstige lineare Operationen (wie tiefenweise Faltungen) anstatt teure Standard-Faltungen generieren. Dies reduziert Rechenkosten bei ähnlicher Repräsentationskraft.",
          nl: "Ghost-modules maken gebruik van redundantie in feature maps door sommige feature maps te genereren via goedkope lineaire operaties (zoals dieptegewijze convoluties) in plaats van dure standaard convoluties. Dit vermindert rekenkosten terwijl vergelijkbare representatiekracht behouden blijft."
        }
      },
      {
        question: {
          en: "What characterizes Progressive Growing of GANs (ProGAN) training methodology?",
          es: "¿Qué caracteriza la metodología de entrenamiento de Progressive Growing of GANs (ProGAN)?",
          de: "Was charakterisiert die Progressive Growing of GANs (ProGAN) Trainingsmethodik?",
          nl: "Wat kenmerkt de Progressive Growing of GANs (ProGAN) trainingsmethodiek?"
        },
        options: [
          { en: "Gradually increasing image resolution during training", es: "Aumentar gradualmente la resolución de imagen durante el entrenamiento", de: "Schrittweise Erhöhung der Bildauflösung während des Trainings", nl: "Geleidelijk verhogen van beeldresolutie tijdens training" },
          { en: "Progressive pruning of network connections", es: "Poda progresiva de conexiones de red", de: "Progressive Beschneidung von Netzwerkverbindungen", nl: "Progressief snoeien van netwerkverbindingen" },
          { en: "Gradually increasing batch size during training", es: "Aumentar gradualmente el tamaño del lote durante el entrenamiento", de: "Schrittweise Erhöhung der Batch-Größe während des Trainings", nl: "Geleidelijk verhogen van batch-grootte tijdens training" },
          { en: "Progressive feature selection and elimination", es: "Selección y eliminación progresiva de características", de: "Progressive Feature-Auswahl und -Elimination", nl: "Progressieve feature-selectie en eliminatie" }
        ],
        correct: 0,
        explanation: {
          en: "ProGAN trains by starting with low-resolution images and progressively adding new layers to generate higher resolution images. This approach stabilizes training and allows generation of high-quality, high-resolution images by building complexity gradually.",
          es: "ProGAN entrena comenzando con imágenes de baja resolución y agregando progresivamente nuevas capas para generar imágenes de mayor resolución. Este enfoque estabiliza el entrenamiento y permite la generación de imágenes de alta calidad y alta resolución construyendo complejidad gradualmente.",
          de: "ProGAN trainiert indem es mit niedrigauflösenden Bildern beginnt und progressiv neue Schichten hinzufügt um höherauflösende Bilder zu generieren. Dieser Ansatz stabilisiert das Training und ermöglicht Generierung hochwertiger, hochauflösender Bilder durch schrittweisen Komplexitätsaufbau.",
          nl: "ProGAN traint door te beginnen met lage-resolutie beelden en progressief nieuwe lagen toe te voegen om hogere resolutie beelden te genereren. Deze benadering stabiliseert training en maakt generatie van hoge-kwaliteit, hoge-resolutie beelden mogelijk door complexiteit geleidelijk op te bouwen."
        }
      },
      {
        question: {
          en: "What is the key innovation of Capsule Networks compared to CNNs?",
          es: "¿Cuál es la innovación clave de las Capsule Networks comparadas con las CNNs?",
          de: "Was ist die Schlüsselinnovation von Kapsel-Netzwerken im Vergleich zu CNNs?",
          nl: "Wat is de belangrijkste innovatie van Capsule Networks vergeleken met CNN's?"
        },
        options: [
          { en: "Encoding spatial relationships and part-whole hierarchies explicitly", es: "Codificar relaciones espaciales y jerarquías parte-todo explícitamente", de: "Explizite Kodierung räumlicher Beziehungen und Teil-Ganzes-Hierarchien", nl: "Ruimtelijke relaties en deel-geheel hiërarchieën expliciet coderen" },
          { en: "Using larger convolutional filters for better feature extraction", es: "Usar filtros convolucionales más grandes para mejor extracción de características", de: "Verwendung größerer Faltungsfilter für bessere Feature-Extraktion", nl: "Grotere convolutiefilters gebruiken voor betere feature-extractie" },
          { en: "Implementing deeper architectures with more layers", es: "Implementar arquitecturas más profundas con más capas", de: "Implementierung tieferer Architekturen mit mehr Schichten", nl: "Diepere architecturen implementeren met meer lagen" },
          { en: "Adding attention mechanisms to focus on important features", es: "Agregar mecanismos de atención para enfocarse en características importantes", de: "Hinzufügen von Aufmerksamkeitsmechanismen zur Fokussierung auf wichtige Features", nl: "Aandachtsmechanismen toevoegen om te focussen op belangrijke features" }
        ],
        correct: 0,
        explanation: {
          en: "Capsule Networks use capsules (groups of neurons) that output vectors instead of scalars, encoding both the presence and properties of features. Dynamic routing between capsules preserves spatial relationships and part-whole hierarchies that traditional CNNs lose through pooling.",
          es: "Las Capsule Networks usan cápsulas (grupos de neuronas) que emiten vectores en lugar de escalares, codificando tanto la presencia como las propiedades de las características. El enrutamiento dinámico entre cápsulas preserva relaciones espaciales y jerarquías parte-todo que las CNNs tradicionales pierden a través del pooling.",
          de: "Kapsel-Netzwerke verwenden Kapseln (Neuronengruppen) die Vektoren anstatt Skalare ausgeben und sowohl Präsenz als auch Eigenschaften von Features kodieren. Dynamisches Routing zwischen Kapseln erhält räumliche Beziehungen und Teil-Ganzes-Hierarchien die traditionelle CNNs durch Pooling verlieren.",
          nl: "Capsule Networks gebruiken capsules (groepen neuronen) die vectoren uitvoeren in plaats van scalairs, waarbij zowel de aanwezigheid als eigenschappen van features worden gecodeerd. Dynamische routering tussen capsules behoudt ruimtelijke relaties en deel-geheel hiërarchieën die traditionele CNN's verliezen door pooling."
        }
      },
      {
        question: {
          en: "What distinguishes Wide ResNet from standard ResNet architectures?",
          es: "¿Qué distingue Wide ResNet de las arquitecturas ResNet estándar?",
          de: "Was unterscheidet Wide ResNet von Standard-ResNet-Architekturen?",
          nl: "Wat onderscheidt Wide ResNet van standaard ResNet-architecturen?"
        },
        options: [
          { en: "Fewer layers but wider (more channels per layer)", es: "Menos capas pero más anchas (más canales por capa)", de: "Weniger Schichten aber breiter (mehr Kanäle pro Schicht)", nl: "Minder lagen maar breder (meer kanalen per laag)" },
          { en: "More layers with standard width", es: "Más capas con ancho estándar", de: "Mehr Schichten mit Standardbreite", nl: "Meer lagen met standaardbreedte" },
          { en: "Varying width throughout the network", es: "Ancho variable a través de la red", de: "Variierende Breite durch das Netzwerk", nl: "Variërende breedte door het netwerk" },
          { en: "Multiple parallel branches of different widths", es: "Múltiples ramas paralelas de diferentes anchos", de: "Mehrere parallele Zweige verschiedener Breiten", nl: "Meerdere parallelle takken van verschillende breedtes" }
        ],
        correct: 0,
        explanation: {
          en: "Wide ResNet demonstrates that increasing network width (channels per layer) can be more effective than increasing depth. It achieves better performance with fewer layers by making each layer wider, which also reduces training time and improves parallelization.",
          es: "Wide ResNet demuestra que aumentar el ancho de la red (canales por capa) puede ser más efectivo que aumentar la profundidad. Logra mejor rendimiento con menos capas haciendo cada capa más ancha, lo que también reduce el tiempo de entrenamiento y mejora la paralelización.",
          de: "Wide ResNet zeigt dass die Erhöhung der Netzwerkbreite (Kanäle pro Schicht) effektiver sein kann als die Erhöhung der Tiefe. Es erreicht bessere Leistung mit weniger Schichten indem jede Schicht breiter gemacht wird, was auch Trainingszeit reduziert und Parallelisierung verbessert.",
          nl: "Wide ResNet toont aan dat het verhogen van netwerkbreedte (kanalen per laag) effectiever kan zijn dan het verhogen van diepte. Het bereikt betere prestaties met minder lagen door elke laag breder te maken, wat ook trainingstijd vermindert en parallelisatie verbetert."
        }
      },
      {
        question: {
          en: "What is the main contribution of PyramidNet to deep learning architectures?",
          es: "¿Cuál es la principal contribución de PyramidNet a las arquitecturas de aprendizaje profundo?",
          de: "Was ist der Hauptbeitrag von PyramidNet zu Deep Learning-Architekturen?",
          nl: "Wat is de belangrijkste bijdrage van PyramidNet aan deep learning-architecturen?"
        },
        options: [
          { en: "Gradually increasing channel dimensions throughout the network", es: "Aumentar gradualmente las dimensiones de canal a lo largo de la red", de: "Schrittweise Erhöhung der Kanaldimensionen durch das Netzwerk", nl: "Geleidelijk verhogen van kanaaldimensies door het netwerk" },
          { en: "Using pyramid-shaped filters in convolutions", es: "Usar filtros en forma de pirámide en convoluciones", de: "Verwendung pyramidenförmiger Filter in Faltungen", nl: "Pyramid-vormige filters gebruiken in convoluties" },
          { en: "Stacking multiple resolution pyramids", es: "Apilar múltiples pirámides de resolución", de: "Stapeln mehrerer Auflösungspyramiden", nl: "Meerdere resolutie-pyramides stapelen" },
          { en: "Implementing hierarchical feature extraction", es: "Implementar extracción de características jerárquicas", de: "Implementierung hierarchischer Feature-Extraktion", nl: "Hiërarchische feature-extractie implementeren" }
        ],
        correct: 0,
        explanation: {
          en: "PyramidNet gradually increases the number of channels (width) as the network goes deeper, creating a pyramid-like shape. This design provides a more systematic way to scale network capacity and has shown to improve performance over abrupt width changes in traditional architectures.",
          es: "PyramidNet aumenta gradualmente el número de canales (ancho) a medida que la red se vuelve más profunda, creando una forma piramidal. Este diseño proporciona una forma más sistemática de escalar la capacidad de la red y ha demostrado mejorar el rendimiento sobre cambios abruptos de ancho en arquitecturas tradicionales.",
          de: "PyramidNet erhöht schrittweise die Anzahl der Kanäle (Breite) während das Netzwerk tiefer wird und schafft eine pyramidenähnliche Form. Dieses Design bietet eine systematischere Art die Netzwerkkapazität zu skalieren und hat gezeigt die Leistung über abrupte Breitenänderungen in traditionellen Architekturen zu verbessern.",
          nl: "PyramidNet verhoogt geleidelijk het aantal kanalen (breedte) naarmate het netwerk dieper wordt, waardoor een piramide-achtige vorm ontstaat. Dit ontwerp biedt een systematischere manier om netwerkcapaciteit te schalen en heeft aangetoond prestaties te verbeteren ten opzichte van abrupte breedteveranderingen in traditionele architecturen."
        }
      },
      {
        question: {
          en: "What characterizes the RegNet (Regularized Network) design philosophy?",
          es: "¿Qué caracteriza la filosofía de diseño de RegNet (Red Regularizada)?",
          de: "Was charakterisiert die RegNet (Regularized Network) Design-Philosophie?",
          nl: "Wat kenmerkt de RegNet (Regularized Network) ontwerpfilosofie?"
        },
        options: [
          { en: "Designing network architectures based on empirical scaling rules and design space optimization", es: "Diseñar arquitecturas de red basadas en reglas de escalado empíricas y optimización del espacio de diseño", de: "Entwurf von Netzwerkarchitekturen basierend auf empirischen Skalierungsregeln und Design-Raum-Optimierung", nl: "Netwerkarchitecturen ontwerpen gebaseerd op empirische schalingsregels en ontwerpruimte-optimalisatie" },
          { en: "Using regular grid patterns for convolutional filters", es: "Usar patrones de cuadrícula regulares para filtros convolucionales", de: "Verwendung regelmäßiger Gittermuster für Faltungsfilter", nl: "Reguliere rasterpatronen gebruiken voor convolutiefilters" },
          { en: "Implementing strict regularization techniques throughout training", es: "Implementar técnicas de regularización estrictas durante todo el entrenamiento", de: "Implementierung strenger Regularisierungstechniken während des gesamten Trainings", nl: "Strikte regularisatietechnieken implementeren gedurende de training" },
          { en: "Creating networks with perfectly regular layer patterns", es: "Crear redes con patrones de capa perfectamente regulares", de: "Erstellung von Netzwerken mit perfekt regelmäßigen Schichtmustern", nl: "Netwerken creëren met perfect reguliere laagpatronen" }
        ],
        correct: 0,
        explanation: {
          en: "RegNet uses a systematic approach to network design by analyzing the design space of network architectures and identifying simple, regular design principles. It discovers that good networks can be characterized by simple scaling rules that govern width, depth, and resolution.",
          es: "RegNet usa un enfoque sistemático para el diseño de redes analizando el espacio de diseño de arquitecturas de red e identificando principios de diseño simples y regulares. Descubre que las buenas redes pueden caracterizarse por reglas de escalado simples que gobiernan ancho, profundidad y resolución.",
          de: "RegNet verwendet einen systematischen Ansatz zum Netzwerkdesign durch Analyse des Design-Raums von Netzwerkarchitekturen und Identifikation einfacher, regelmäßiger Design-Prinzipien. Es entdeckt dass gute Netzwerke durch einfache Skalierungsregeln charakterisiert werden können die Breite, Tiefe und Auflösung regeln.",
          nl: "RegNet gebruikt een systematische benadering voor netwerkontwerp door de ontwerpruimte van netwerkarchitecturen te analyseren en eenvoudige, reguliere ontwerpprincipes te identificeren. Het ontdekt dat goede netwerken gekarakteriseerd kunnen worden door eenvoudige schalingsregels die breedte, diepte en resolutie regelen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
