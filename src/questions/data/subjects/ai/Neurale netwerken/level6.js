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
      },
      {
        question: {
          en: "What is the main idea behind ResNeXt architecture?",
          es: "¿Cuál es la idea principal detrás de la arquitectura ResNeXt?",
          de: "Was ist die Hauptidee hinter der ResNeXt-Architektur?",
          nl: "Wat is het belangrijkste idee achter de ResNeXt-architectuur?"
        },
        options: [
          { en: "Aggregating transformations through multiple parallel pathways with the same topology", es: "Agregar transformaciones a través de múltiples vías paralelas con la misma topología", de: "Aggregierung von Transformationen durch mehrere parallele Pfade mit gleicher Topologie", nl: "Transformaties aggregeren via meerdere parallelle paden met dezelfde topologie" },
          { en: "Making ResNet even deeper with more layers", es: "Hacer ResNet aún más profunda con más capas", de: "ResNet noch tiefer machen mit mehr Schichten", nl: "ResNet nog dieper maken met meer lagen" },
          { en: "Extending ResNet with attention mechanisms", es: "Extender ResNet con mecanismos de atención", de: "ResNet mit Aufmerksamkeitsmechanismen erweitern", nl: "ResNet uitbreiden met aandachtmechanismen" },
          { en: "Adding next-generation skip connections", es: "Agregar conexiones de salto de próxima generación", de: "Next-Generation Skip-Verbindungen hinzufügen", nl: "Volgende generatie skip-verbindingen toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "ResNeXt introduces cardinality (the number of parallel paths) as a new dimension besides depth and width. It uses multiple parallel pathways with identical topology, aggregating their outputs. This split-transform-merge strategy improves performance while maintaining computational efficiency.",
          es: "ResNeXt introduce cardinalidad (el número de vías paralelas) como una nueva dimensión además de profundidad y ancho. Usa múltiples vías paralelas con topología idéntica, agregando sus salidas. Esta estrategia dividir-transformar-fusionar mejora el rendimiento mientras mantiene eficiencia computacional.",
          de: "ResNeXt führt Kardinalität (die Anzahl paralleler Pfade) als neue Dimension neben Tiefe und Breite ein. Es verwendet mehrere parallele Pfade mit identischer Topologie und aggregiert ihre Ausgaben. Diese Split-Transform-Merge-Strategie verbessert die Leistung bei gleichbleibender rechnerischer Effizienz.",
          nl: "ResNeXt introduceert cardinaliteit (het aantal parallelle paden) als een nieuwe dimensie naast diepte en breedte. Het gebruikt meerdere parallelle paden met identieke topologie, waarbij hun outputs worden geaggregeerd. Deze split-transform-merge strategie verbetert prestaties terwijl rekenkundige efficiëntie behouden blijft."
        }
      },
      {
        question: {
          en: "What is the key innovation of DPN (Dual Path Networks)?",
          es: "¿Cuál es la innovación clave de DPN (Redes de Doble Camino)?",
          de: "Was ist die Schlüsselinnovation von DPN (Dual Path Networks)?",
          nl: "Wat is de belangrijkste innovatie van DPN (Dual Path Networks)?"
        },
        options: [
          { en: "Combines ResNet's residual learning with DenseNet's dense connectivity in a unified framework", es: "Combina el aprendizaje residual de ResNet con la conectividad densa de DenseNet en un marco unificado", de: "Kombiniert ResNets residuales Lernen mit DenseNets dichter Konnektivität in einem einheitlichen Framework", nl: "Combineert ResNet's residueel leren met DenseNet's dichte connectiviteit in een uniform framework" },
          { en: "Uses two separate networks for different tasks", es: "Usa dos redes separadas para diferentes tareas", de: "Verwendet zwei separate Netzwerke für verschiedene Aufgaben", nl: "Gebruikt twee aparte netwerken voor verschillende taken" },
          { en: "Implements bidirectional information flow", es: "Implementa flujo de información bidireccional", de: "Implementiert bidirektionalen Informationsfluss", nl: "Implementeert bidirectionele informatiestroom" },
          { en: "Creates dual pathways for training and inference", es: "Crea vías duales para entrenamiento e inferencia", de: "Erstellt duale Pfade für Training und Inferenz", nl: "Creëert dubbele paden voor training en inferentie" }
        ],
        correct: 0,
        explanation: {
          en: "DPN unifies ResNet and DenseNet by sharing features through residual connections (for feature reuse) and dense connections (for new feature exploration) simultaneously. This dual-path architecture enables both efficient feature reuse and the ability to extract new features.",
          es: "DPN unifica ResNet y DenseNet compartiendo características a través de conexiones residuales (para reutilización de características) y conexiones densas (para exploración de nuevas características) simultáneamente. Esta arquitectura de doble camino permite tanto reutilización eficiente de características como capacidad de extraer nuevas características.",
          de: "DPN vereint ResNet und DenseNet durch gleichzeitiges Teilen von Features durch residuale Verbindungen (für Feature-Wiederverwendung) und dichte Verbindungen (für neue Feature-Erkundung). Diese Dual-Path-Architektur ermöglicht sowohl effiziente Feature-Wiederverwendung als auch die Fähigkeit neue Features zu extrahieren.",
          nl: "DPN verenigt ResNet en DenseNet door features te delen via residuele verbindingen (voor feature-hergebruik) en dichte verbindingen (voor nieuwe feature-exploratie) tegelijkertijd. Deze dual-path architectuur maakt zowel efficiënt feature-hergebruik als het vermogen om nieuwe features te extraheren mogelijk."
        }
      },
      {
        question: {
          en: "What distinguishes SqueezeNet from other efficient architectures?",
          es: "¿Qué distingue a SqueezeNet de otras arquitecturas eficientes?",
          de: "Was unterscheidet SqueezeNet von anderen effizienten Architekturen?",
          nl: "Wat onderscheidt SqueezeNet van andere efficiënte architecturen?"
        },
        options: [
          { en: "Fire modules that squeeze with 1x1 filters then expand with mixed 1x1 and 3x3 filters", es: "Módulos Fire que comprimen con filtros 1x1 y luego expanden con filtros mixtos 1x1 y 3x3", de: "Fire-Module die mit 1x1-Filtern komprimieren dann mit gemischten 1x1- und 3x3-Filtern erweitern", nl: "Fire modules die samenpersen met 1x1 filters en dan uitbreiden met gemengde 1x1 en 3x3 filters" },
          { en: "Aggressive pruning of network connections", es: "Poda agresiva de conexiones de red", de: "Aggressive Beschneidung von Netzwerkverbindungen", nl: "Agressief snoeien van netwerkverbindingen" },
          { en: "Quantization of all network weights", es: "Cuantización de todos los pesos de la red", de: "Quantisierung aller Netzwerkgewichte", nl: "Quantisatie van alle netwerkgewichten" },
          { en: "Knowledge distillation from larger networks", es: "Destilación de conocimiento de redes más grandes", de: "Wissensdestillation von größeren Netzwerken", nl: "Kennisdistillatie van grotere netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "SqueezeNet uses Fire modules consisting of a squeeze layer (1x1 convolutions to reduce channels) followed by an expand layer (mix of 1x1 and 3x3 convolutions). This design achieves AlexNet-level accuracy with 50x fewer parameters and smaller model size.",
          es: "SqueezeNet usa módulos Fire que consisten en una capa de compresión (convoluciones 1x1 para reducir canales) seguida de una capa de expansión (mezcla de convoluciones 1x1 y 3x3). Este diseño logra precisión nivel AlexNet con 50 veces menos parámetros y tamaño de modelo más pequeño.",
          de: "SqueezeNet verwendet Fire-Module bestehend aus einer Squeeze-Schicht (1x1-Faltungen um Kanäle zu reduzieren) gefolgt von einer Expand-Schicht (Mix aus 1x1- und 3x3-Faltungen). Dieses Design erreicht AlexNet-Level-Genauigkeit mit 50x weniger Parametern und kleinerer Modellgröße.",
          nl: "SqueezeNet gebruikt Fire modules bestaande uit een squeeze-laag (1x1 convoluties om kanalen te verminderen) gevolgd door een expand-laag (mix van 1x1 en 3x3 convoluties). Dit ontwerp bereikt AlexNet-niveau nauwkeurigheid met 50x minder parameters en kleinere modelgrootte."
        }
      },
      {
        question: {
          en: "What is the main concept behind Neural Fabrics?",
          es: "¿Cuál es el concepto principal detrás de Neural Fabrics?",
          de: "Was ist das Hauptkonzept hinter Neural Fabrics?",
          nl: "Wat is het belangrijkste concept achter Neural Fabrics?"
        },
        options: [
          { en: "A trellis of interconnected layers allowing multiple path selections through the network", es: "Un enrejado de capas interconectadas que permite múltiples selecciones de ruta a través de la red", de: "Ein Gitter vernetzter Schichten das mehrere Pfadauswahlen durch das Netzwerk ermöglicht", nl: "Een trellis van onderling verbonden lagen die meerdere padselecties door het netwerk mogelijk maakt" },
          { en: "Weaving multiple neural networks together", es: "Tejer múltiples redes neuronales juntas", de: "Weben mehrerer neuronaler Netzwerke zusammen", nl: "Meerdere neurale netwerken samenweven" },
          { en: "Using textile-inspired convolution patterns", es: "Usar patrones de convolución inspirados en textiles", de: "Verwendung textilinspi rierter Faltungsmuster", nl: "Textiel-geïnspireerde convolutiepatronen gebruiken" },
          { en: "Creating flexible network architectures through fabric-like connections", es: "Crear arquitecturas de red flexibles a través de conexiones tipo tela", de: "Erstellung flexibler Netzwerkarchitekturen durch stoffartige Verbindungen", nl: "Flexibele netwerkarchitecturen creëren via stofachtige verbindingen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural Fabrics create a 3D trellis structure where each node can connect to multiple predecessors and successors. This allows the network to learn which paths through the fabric are most useful, effectively learning both the architecture and parameters simultaneously.",
          es: "Neural Fabrics crean una estructura de enrejado 3D donde cada nodo puede conectarse a múltiples predecesores y sucesores. Esto permite a la red aprender qué rutas a través del fabric son más útiles, aprendiendo efectivamente tanto la arquitectura como los parámetros simultáneamente.",
          de: "Neural Fabrics erstellen eine 3D-Gitterstruktur wo jeder Knoten sich mit mehreren Vorgängern und Nachfolgern verbinden kann. Dies ermöglicht dem Netzwerk zu lernen welche Pfade durch das Fabric am nützlichsten sind, lernt effektiv sowohl Architektur als auch Parameter gleichzeitig.",
          nl: "Neural Fabrics creëren een 3D-trellisstructuur waarbij elk knooppunt kan verbinden met meerdere voorgangers en opvolgers. Dit stelt het netwerk in staat te leren welke paden door de fabric het meest nuttig zijn, waardoor effectief zowel de architectuur als parameters tegelijkertijd worden geleerd."
        }
      },
      {
        question: {
          en: "What is the key feature of Vision Transformer (ViT)?",
          es: "¿Cuál es la característica clave de Vision Transformer (ViT)?",
          de: "Was ist das Schlüsselmerkmal von Vision Transformer (ViT)?",
          nl: "Wat is het belangrijkste kenmerk van Vision Transformer (ViT)?"
        },
        options: [
          { en: "Treating image patches as sequences and applying transformer architecture directly to them", es: "Tratar parches de imagen como secuencias y aplicar arquitectura transformer directamente a ellos", de: "Behandeln von Bild-Patches als Sequenzen und direktes Anwenden der Transformer-Architektur darauf", nl: "Beeldpatches behandelen als sequenties en transformer-architectuur er direct op toepassen" },
          { en: "Combining transformers with convolutional layers", es: "Combinar transformers con capas convolucionales", de: "Kombinieren von Transformers mit Faltungsschichten", nl: "Transformers combineren met convolutionele lagen" },
          { en: "Using transformers only for the classification head", es: "Usar transformers solo para la cabeza de clasificación", de: "Verwendung von Transformers nur für den Klassifikationskopf", nl: "Transformers alleen gebruiken voor de classificatiekop" },
          { en: "Applying temporal transformers to video frames", es: "Aplicar transformers temporales a fotogramas de video", de: "Anwendung zeitlicher Transformer auf Video-Frames", nl: "Temporele transformers toepassen op videoframes" }
        ],
        correct: 0,
        explanation: {
          en: "ViT splits images into fixed-size patches, linearly embeds them, and processes the sequence of patches through a standard transformer architecture. This approach eliminates the inductive biases of CNNs and can outperform them when trained on sufficient data.",
          es: "ViT divide imágenes en parches de tamaño fijo, los incrusta linealmente y procesa la secuencia de parches a través de una arquitectura transformer estándar. Este enfoque elimina los sesgos inductivos de las CNN y puede superarlas cuando se entrena con datos suficientes.",
          de: "ViT teilt Bilder in Patches fester Größe auf, bettet sie linear ein und verarbeitet die Sequenz von Patches durch eine Standard-Transformer-Architektur. Dieser Ansatz eliminiert die induktiven Vorurteile von CNNs und kann sie übertreffen wenn mit ausreichenden Daten trainiert.",
          nl: "ViT splitst afbeeldingen in patches van vaste grootte, bedt ze lineair in en verwerkt de sequentie van patches via een standaard transformer-architectuur. Deze benadering elimineert de inductieve vooroordelen van CNN's en kan ze overtreffen wanneer getraind op voldoende data."
        }
      },
      {
        question: {
          en: "What is the main innovation of ConvNeXt?",
          es: "¿Cuál es la principal innovación de ConvNeXt?",
          de: "Was ist die Hauptinnovation von ConvNeXt?",
          nl: "Wat is de belangrijkste innovatie van ConvNeXt?"
        },
        options: [
          { en: "Modernizing ResNet architecture using design choices from Vision Transformers while keeping convolutions", es: "Modernizar arquitectura ResNet usando elecciones de diseño de Vision Transformers mientras se mantienen convoluciones", de: "Modernisierung der ResNet-Architektur unter Verwendung von Design-Entscheidungen aus Vision Transformers bei Beibehaltung von Faltungen", nl: "ResNet-architectuur moderniseren met ontwerpkeuzes van Vision Transformers terwijl convoluties behouden blijven" },
          { en: "Next-generation convolution operations", es: "Operaciones de convolución de próxima generación", de: "Next-Generation-Faltungsoperationen", nl: "Volgende generatie convolutie-operaties" },
          { en: "Combining convolutions with attention mechanisms", es: "Combinar convoluciones con mecanismos de atención", de: "Kombinieren von Faltungen mit Aufmerksamkeitsmechanismen", nl: "Convoluties combineren met aandachtmechanismen" },
          { en: "Using larger convolutional kernels throughout", es: "Usar kernels convolucionales más grandes en todas partes", de: "Verwendung größerer Faltungskerne durchweg", nl: "Grotere convolutionele kernels overal gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "ConvNeXt systematically studies and adopts design choices from Vision Transformers (like larger kernels, fewer activations, LayerNorm) while maintaining a pure convolutional architecture. It demonstrates that properly designed ConvNets can compete with transformers in accuracy and efficiency.",
          es: "ConvNeXt estudia sistemáticamente y adopta elecciones de diseño de Vision Transformers (como kernels más grandes, menos activaciones, LayerNorm) mientras mantiene una arquitectura puramente convolucional. Demuestra que ConvNets correctamente diseñadas pueden competir con transformers en precisión y eficiencia.",
          de: "ConvNeXt untersucht systematisch und übernimmt Design-Entscheidungen von Vision Transformers (wie größere Kernel, weniger Aktivierungen, LayerNorm) bei Beibehaltung einer rein konvolutionalen Architektur. Es zeigt dass richtig entworfene ConvNets mit Transformers in Genauigkeit und Effizienz konkurrieren können.",
          nl: "ConvNeXt bestudeert systematisch en adopteert ontwerpkeuzes van Vision Transformers (zoals grotere kernels, minder activeringen, LayerNorm) terwijl een pure convolutionele architectuur behouden blijft. Het toont aan dat goed ontworpen ConvNets kunnen concurreren met transformers in nauwkeurigheid en efficiëntie."
        }
      },
      {
        question: {
          en: "What characterizes Mixed Depthwise Convolutional Kernels (MixConv)?",
          es: "¿Qué caracteriza a los Kernels Convolucionales Depthwise Mixtos (MixConv)?",
          de: "Was charakterisiert Mixed Depthwise Convolutional Kernels (MixConv)?",
          nl: "Wat kenmerkt Mixed Depthwise Convolutional Kernels (MixConv)?"
        },
        options: [
          { en: "Using multiple kernel sizes within a single depthwise convolution layer", es: "Usar múltiples tamaños de kernel dentro de una sola capa de convolución depthwise", de: "Verwendung mehrerer Kernel-Größen innerhalb einer einzigen Depthwise-Faltungsschicht", nl: "Meerdere kernelgroottes gebruiken binnen een enkele depthwise convolutielaag" },
          { en: "Mixing different types of convolutions randomly", es: "Mezclar diferentes tipos de convoluciones aleatoriamente", de: "Zufälliges Mischen verschiedener Faltungstypen", nl: "Verschillende convolutietypes willekeurig mengen" },
          { en: "Combining standard and dilated convolutions", es: "Combinar convoluciones estándar y dilatadas", de: "Kombinieren von Standard- und dilatierten Faltungen", nl: "Standaard en gedilateerde convoluties combineren" },
          { en: "Alternating between different convolution strategies", es: "Alternar entre diferentes estrategias de convolución", de: "Alternieren zwischen verschiedenen Faltungsstrategien", nl: "Afwisselen tussen verschillende convolutiestrategieën" }
        ],
        correct: 0,
        explanation: {
          en: "MixConv splits channel groups and applies different kernel sizes (e.g., 3x3, 5x5, 7x7) to different groups within the same depthwise layer. This heterogeneous kernel approach captures multi-scale features more effectively while maintaining computational efficiency.",
          es: "MixConv divide grupos de canales y aplica diferentes tamaños de kernel (ej. 3x3, 5x5, 7x7) a diferentes grupos dentro de la misma capa depthwise. Este enfoque de kernel heterogéneo captura características multi-escala más efectivamente mientras mantiene eficiencia computacional.",
          de: "MixConv teilt Kanalgruppen auf und wendet verschiedene Kernel-Größen (z.B. 3x3, 5x5, 7x7) auf verschiedene Gruppen innerhalb derselben Depthwise-Schicht an. Dieser heterogene Kernel-Ansatz erfasst Multi-Skala-Features effektiver bei gleichbleibender rechnerischer Effizienz.",
          nl: "MixConv splitst kanaalgroepen en past verschillende kernelgroottes (bijv. 3x3, 5x5, 7x7) toe op verschillende groepen binnen dezelfde depthwise laag. Deze heterogene kernel-benadering vangt multi-schaal features effectiever vast terwijl rekenkundige efficiëntie behouden blijft."
        }
      },
      {
        question: {
          en: "What is the key concept behind CoAtNet (Convolution and Attention Network)?",
          es: "¿Cuál es el concepto clave detrás de CoAtNet (Red de Convolución y Atención)?",
          de: "Was ist das Schlüsselkonzept hinter CoAtNet (Convolution and Attention Network)?",
          nl: "Wat is het kernconceptachter CoAtNet (Convolution and Attention Network)?"
        },
        options: [
          { en: "Strategically combining convolutional and self-attention layers to leverage strengths of both", es: "Combinar estratégicamente capas convolucionales y de auto-atención para aprovechar fortalezas de ambas", de: "Strategisches Kombinieren von Faltungs- und Selbstaufmerksamkeitsschichten um Stärken beider zu nutzen", nl: "Strategisch convolutionele en self-attention lagen combineren om sterke punten van beide te benutten" },
          { en: "Using attention only for coarse features", es: "Usar atención solo para características gruesas", de: "Verwendung von Aufmerksamkeit nur für grobe Features", nl: "Aandacht alleen gebruiken voor grove features" },
          { en: "Alternating between convolution and attention randomly", es: "Alternar entre convolución y atención aleatoriamente", de: "Zufälliges Alternieren zwischen Faltung und Aufmerksamkeit", nl: "Willekeurig afwisselen tussen convolutie en aandacht" },
          { en: "Replacing all convolutions with attention gradually", es: "Reemplazar todas las convoluciones con atención gradualmente", de: "Allmähliches Ersetzen aller Faltungen durch Aufmerksamkeit", nl: "Alle convoluties geleidelijk vervangen door aandacht" }
        ],
        correct: 0,
        explanation: {
          en: "CoAtNet combines the translation invariance and efficiency of convolutions with the dynamic modeling capacity of self-attention. It uses convolutions in early stages for efficient spatial processing and self-attention in later stages for global context, achieving state-of-the-art performance.",
          es: "CoAtNet combina la invariancia de traducción y eficiencia de convoluciones con la capacidad de modelado dinámico de auto-atención. Usa convoluciones en etapas tempranas para procesamiento espacial eficiente y auto-atención en etapas posteriores para contexto global, logrando rendimiento estado del arte.",
          de: "CoAtNet kombiniert die Translationsinvarianz und Effizienz von Faltungen mit der dynamischen Modellierungskapazität von Selbstaufmerksamkeit. Es verwendet Faltungen in frühen Stadien für effiziente räumliche Verarbeitung und Selbstaufmerksamkeit in späteren Stadien für globalen Kontext, erreicht State-of-the-Art-Leistung.",
          nl: "CoAtNet combineert de translatie-invariantie en efficiëntie van convoluties met de dynamische modelleercapaciteit van self-attention. Het gebruikt convoluties in vroege stadia voor efficiënte ruimtelijke verwerking en self-attention in latere stadia voor globale context, en bereikt state-of-the-art prestaties."
        }
      },
      {
        question: {
          en: "What is neural network pruning?",
          es: "¿Qué es la poda de redes neuronales?",
          de: "Was ist neuronales Netzwerk-Pruning?",
          nl: "Wat is neuraal netwerk pruning?"
        },
        options: [
          { en: "Removing less important weights or neurons to reduce model size while maintaining performance", es: "Eliminar pesos o neuronas menos importantes para reducir tamaño de modelo mientras mantiene rendimiento", de: "Entfernen weniger wichtiger Gewichte oder Neuronen um Modellgröße zu reduzieren bei Erhalt der Leistung", nl: "Verwijderen van minder belangrijke gewichten of neuronen om modelgrootte te reduceren terwijl prestaties behouden blijven" },
          { en: "Training networks on pruned datasets", es: "Entrenar redes en conjuntos de datos podados", de: "Training von Netzwerken auf beschnittenen Datensätzen", nl: "Netwerken trainen op gesnoede datasets" },
          { en: "Cutting branches in decision trees", es: "Cortar ramas en árboles de decisión", de: "Schneiden von Zweigen in Entscheidungsbäumen", nl: "Takken snoeien in beslisbomen" },
          { en: "Removing outliers from training data", es: "Eliminar valores atípicos de datos de entrenamiento", de: "Entfernen von Ausreißern aus Trainingsdaten", nl: "Uitschieters verwijderen uit trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "Pruning removes redundant or less important connections, filters, or entire neurons from trained networks. Techniques include magnitude-based pruning (removing smallest weights), structured pruning (removing entire channels/layers), and iterative pruning with fine-tuning. This creates smaller, faster models with minimal accuracy loss.",
          es: "La poda elimina conexiones redundantes o menos importantes, filtros o neuronas enteras de redes entrenadas. Técnicas incluyen poda basada en magnitud (eliminar pesos más pequeños), poda estructurada (eliminar canales/capas enteros) y poda iterativa con ajuste fino. Esto crea modelos más pequeños y rápidos con pérdida mínima de precisión.",
          de: "Pruning entfernt redundante oder weniger wichtige Verbindungen, Filter oder ganze Neuronen aus trainierten Netzwerken. Techniken umfassen magnitudenbasiertes Pruning (Entfernen kleinster Gewichte), strukturiertes Pruning (Entfernen ganzer Kanäle/Schichten) und iteratives Pruning mit Fine-Tuning. Dies erzeugt kleinere, schnellere Modelle mit minimalem Genauigkeitsverlust.",
          nl: "Pruning verwijdert redundante of minder belangrijke verbindingen, filters of hele neuronen uit getrainde netwerken. Technieken zijn magnitude-gebaseerd pruning (kleinste gewichten verwijderen), gestructureerd pruning (hele kanalen/lagen verwijderen) en iteratief pruning met fine-tuning. Dit creëert kleinere, snellere modellen met minimaal nauwkeurigheidsverlies."
        }
      },
      {
        question: {
          en: "What is quantization in neural networks?",
          es: "¿Qué es la cuantización en redes neuronales?",
          de: "Was ist Quantisierung in neuronalen Netzwerken?",
          nl: "Wat is quantisatie in neurale netwerken?"
        },
        options: [
          { en: "Reducing precision of weights and activations from float32 to lower bit representations like int8", es: "Reducir precisión de pesos y activaciones de float32 a representaciones de bits más bajas como int8", de: "Reduzieren der Präzision von Gewichten und Aktivierungen von float32 zu niedrigeren Bit-Darstellungen wie int8", nl: "Precisie van gewichten en activaties reduceren van float32 naar lagere bit representaties zoals int8" },
          { en: "Quantifying model performance metrics", es: "Cuantificar métricas de rendimiento del modelo", de: "Quantifizieren von Modell-Leistungsmetriken", nl: "Modelprestatiemetrieken kwantificeren" },
          { en: "Converting continuous outputs to discrete classes", es: "Convertir salidas continuas a clases discretas", de: "Konvertieren kontinuierlicher Ausgaben zu diskreten Klassen", nl: "Continue uitvoer converteren naar discrete klassen" },
          { en: "Measuring computational requirements", es: "Medir requisitos computacionales", de: "Messen von Rechenanforderungen", nl: "Rekenvereisten meten" }
        ],
        correct: 0,
        explanation: {
          en: "Quantization compresses models by representing weights and activations with fewer bits (e.g., 8-bit integers instead of 32-bit floats). This reduces model size by ~4x and speeds up inference, especially on mobile/edge devices. Post-training quantization and quantization-aware training are common approaches.",
          es: "La cuantización comprime modelos representando pesos y activaciones con menos bits (ej. enteros de 8 bits en lugar de flotantes de 32 bits). Esto reduce tamaño de modelo ~4x y acelera inferencia, especialmente en dispositivos móviles/edge. Cuantización post-entrenamiento y entrenamiento consciente de cuantización son enfoques comunes.",
          de: "Quantisierung komprimiert Modelle durch Darstellung von Gewichten und Aktivierungen mit weniger Bits (z.B. 8-Bit-Ganzzahlen statt 32-Bit-Floats). Dies reduziert Modellgröße um ~4x und beschleunigt Inferenz, besonders auf mobilen/Edge-Geräten. Post-Training-Quantisierung und quantisierungsbewusstes Training sind gängige Ansätze.",
          nl: "Quantisatie comprimeert modellen door gewichten en activaties te representeren met minder bits (bijv. 8-bit integers in plaats van 32-bit floats). Dit reduceert modelgrootte met ~4x en versnelt inferentie, vooral op mobiele/edge apparaten. Post-training quantisatie en quantisatie-bewuste training zijn veelvoorkomende benaderingen."
        }
      },
      {
        question: {
          en: "What is a neural network ensemble?",
          es: "¿Qué es un ensemble de redes neuronales?",
          de: "Was ist ein neuronales Netzwerk-Ensemble?",
          nl: "Wat is een neuraal netwerk ensemble?"
        },
        options: [
          { en: "Combining predictions from multiple independently trained models to improve accuracy and robustness", es: "Combinar predicciones de múltiples modelos entrenados independientemente para mejorar precisión y robustez", de: "Kombinieren von Vorhersagen mehrerer unabhängig trainierter Modelle um Genauigkeit und Robustheit zu verbessern", nl: "Voorspellingen combineren van meerdere onafhankelijk getrainde modellen om nauwkeurigheid en robuustheid te verbeteren" },
          { en: "A collection of training datasets", es: "Colección de conjuntos de datos de entrenamiento", de: "Sammlung von Trainingsdatensätzen", nl: "Verzameling van trainingsdatasets" },
          { en: "Multiple layers in a single network", es: "Múltiples capas en una sola red", de: "Mehrere Schichten in einem einzigen Netzwerk", nl: "Meerdere lagen in één netwerk" },
          { en: "A team of researchers working on networks", es: "Equipo de investigadores trabajando en redes", de: "Team von Forschern die an Netzwerken arbeiten", nl: "Team van onderzoekers die aan netwerken werken" }
        ],
        correct: 0,
        explanation: {
          en: "Ensembles combine multiple models (trained with different initializations, architectures, or data subsets) by averaging or voting on predictions. This reduces variance, improves generalization, and increases robustness to individual model weaknesses. Methods include bagging, boosting, and stacking.",
          es: "Los ensembles combinan múltiples modelos (entrenados con diferentes inicializaciones, arquitecturas o subconjuntos de datos) promediando o votando predicciones. Esto reduce varianza, mejora generalización y aumenta robustez a debilidades de modelos individuales. Métodos incluyen bagging, boosting y stacking.",
          de: "Ensembles kombinieren mehrere Modelle (trainiert mit verschiedenen Initialisierungen, Architekturen oder Daten-Teilmengen) durch Mitteln oder Abstimmen über Vorhersagen. Dies reduziert Varianz, verbessert Generalisierung und erhöht Robustheit gegenüber individuellen Modellschwächen. Methoden umfassen Bagging, Boosting und Stacking.",
          nl: "Ensembles combineren meerdere modellen (getraind met verschillende initialisaties, architecturen of data subsets) door voorspellingen te middelen of te stemmen. Dit reduceert variantie, verbetert generalisatie en verhoogt robuustheid tegen individuele modelzwaktes. Methoden zijn bagging, boosting en stacking."
        }
      },
      {
        question: {
          en: "What is the lottery ticket hypothesis?",
          es: "¿Qué es la hipótesis del boleto de lotería?",
          de: "Was ist die Lottery Ticket Hypothese?",
          nl: "Wat is de lottery ticket hypothese?"
        },
        options: [
          { en: "Dense networks contain sparse subnetworks that when trained in isolation can match full network performance", es: "Redes densas contienen subredes dispersas que cuando se entrenan aisladamente pueden igualar rendimiento de red completa", de: "Dichte Netzwerke enthalten sparsame Teilnetzwerke die wenn isoliert trainiert die volle Netzwerkleistung erreichen können", nl: "Dense netwerken bevatten sparse subnetwerken die wanneer geïsoleerd getraind volledige netwerkprestaties kunnen evenaren" },
          { en: "Random initialization determines training success", es: "Inicialización aleatoria determina éxito de entrenamiento", de: "Zufällige Initialisierung bestimmt Trainingserfolg", nl: "Willekeurige initialisatie bepaalt trainingsucces" },
          { en: "Only a few training examples are needed", es: "Solo se necesitan unos pocos ejemplos de entrenamiento", de: "Nur wenige Trainingsbeispiele werden benötigt", nl: "Slechts enkele trainingsvoorbeelden zijn nodig" },
          { en: "Winning models are determined by chance", es: "Modelos ganadores se determinan por azar", de: "Gewinnende Modelle werden durch Zufall bestimmt", nl: "Winnende modellen worden bepaald door toeval" }
        ],
        correct: 0,
        explanation: {
          en: "The lottery ticket hypothesis states that randomly initialized dense networks contain small subnetworks (winning tickets) that, when trained in isolation with the same initialization, can achieve comparable accuracy to the full network. This has implications for understanding network training and developing efficient architectures.",
          es: "La hipótesis del boleto de lotería establece que redes densas inicializadas aleatoriamente contienen pequeñas subredes (boletos ganadores) que, cuando se entrenan aisladamente con misma inicialización, pueden lograr precisión comparable a red completa. Esto tiene implicaciones para entender entrenamiento de redes y desarrollar arquitecturas eficientes.",
          de: "Die Lottery Ticket Hypothese besagt dass zufällig initialisierte dichte Netzwerke kleine Teilnetzwerke (Gewinnertickets) enthalten die, wenn mit derselben Initialisierung isoliert trainiert, vergleichbare Genauigkeit zum vollen Netzwerk erreichen können. Dies hat Implikationen für Verständnis von Netzwerktraining und Entwicklung effizienter Architekturen.",
          nl: "De lottery ticket hypothese stelt dat willekeurig geïnitialiseerde dense netwerken kleine subnetwerken (winnende tickets) bevatten die, wanneer geïsoleerd getraind met dezelfde initialisatie, vergelijkbare nauwkeurigheid kunnen bereiken als het volledige netwerk. Dit heeft implicaties voor begrip van netwerktraining en ontwikkeling van efficiënte architecturen."
        }
      },
      {
        question: {
          en: "What is neural architecture distillation?",
          es: "¿Qué es la destilación de arquitectura neuronal?",
          de: "Was ist neuronale Architektur-Destillation?",
          nl: "Wat is neurale architectuur distillatie?"
        },
        options: [
          { en: "Using knowledge distillation to transfer learning from complex to simpler architectures", es: "Usar destilación de conocimiento para transferir aprendizaje de arquitecturas complejas a más simples", de: "Verwendung von Knowledge Distillation um Lernen von komplexen zu einfacheren Architekturen zu übertragen", nl: "Knowledge distillation gebruiken om leren over te dragen van complexe naar eenvoudigere architecturen" },
          { en: "Extracting the core architecture from networks", es: "Extraer arquitectura central de redes", de: "Extrahieren der Kernarchitektur aus Netzwerken", nl: "Kernarchitectuur extraheren uit netwerken" },
          { en: "Simplifying network design diagrams", es: "Simplificar diagramas de diseño de red", de: "Vereinfachen von Netzwerk-Entwurfsdiagrammen", nl: "Netwerkontwerp diagrammen vereenvoudigen" },
          { en: "Creating architecture documentation", es: "Crear documentación de arquitectura", de: "Erstellen von Architekturdokumentation", nl: "Architectuurdocumentatie creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Neural architecture distillation applies knowledge distillation principles specifically to transfer capabilities from large, complex architectures (like transformers) to smaller, more efficient ones (like CNNs). This enables deploying powerful models on resource-constrained devices while maintaining much of the original performance.",
          es: "La destilación de arquitectura neuronal aplica principios de destilación de conocimiento específicamente para transferir capacidades de arquitecturas grandes y complejas (como transformers) a más pequeñas y eficientes (como CNN). Esto permite desplegar modelos poderosos en dispositivos con recursos limitados mientras mantiene mucho del rendimiento original.",
          de: "Neuronale Architektur-Destillation wendet Knowledge Distillation Prinzipien speziell an um Fähigkeiten von großen, komplexen Architekturen (wie Transformers) zu kleineren, effizienteren (wie CNNs) zu übertragen. Dies ermöglicht Bereitstellung leistungsstarker Modelle auf ressourcenbeschränkten Geräten bei Erhalt viel der ursprünglichen Leistung.",
          nl: "Neurale architectuur distillatie past knowledge distillation principes specifiek toe om capaciteiten over te dragen van grote, complexe architecturen (zoals transformers) naar kleinere, efficiëntere (zoals CNNs). Dit maakt deployment mogelijk van krachtige modellen op resource-beperkte apparaten terwijl veel van originele prestaties behouden blijft."
        }
      },
      {
        question: {
          en: "What is neural network compression?",
          es: "¿Qué es la compresión de redes neuronales?",
          de: "Was ist neuronale Netzwerk-Kompression?",
          nl: "Wat is neuraal netwerk compressie?"
        },
        options: [
          { en: "Umbrella term for techniques reducing model size including pruning, quantization, distillation and low-rank factorization", es: "Término general para técnicas que reducen tamaño de modelo incluyendo poda, cuantización, destilación y factorización de bajo rango", de: "Oberbegriff für Techniken zur Modellgrößenreduzierung einschließlich Pruning, Quantisierung, Destillation und Low-Rank-Faktorisierung", nl: "Overkoepelende term voor technieken die modelgrootte reduceren inclusief pruning, quantisatie, distillatie en low-rank factorisatie" },
          { en: "Compressing input images before processing", es: "Comprimir imágenes de entrada antes de procesar", de: "Komprimieren von Eingabebildern vor Verarbeitung", nl: "Invoerafbeeldingen comprimeren voor verwerking" },
          { en: "Reducing training time only", es: "Reducir solo tiempo de entrenamiento", de: "Nur Trainingszeit reduzieren", nl: "Alleen trainingstijd reduceren" },
          { en: "Storing models in compressed file formats", es: "Almacenar modelos en formatos de archivo comprimidos", de: "Speichern von Modellen in komprimierten Dateiformaten", nl: "Modellen opslaan in gecomprimeerde bestandsformaten" }
        ],
        correct: 0,
        explanation: {
          en: "Neural network compression encompasses various techniques to reduce model size and computational requirements while preserving accuracy. Key methods include pruning (removing connections), quantization (reducing precision), knowledge distillation (training smaller models), and low-rank decomposition. These enable deployment on edge devices and faster inference.",
          es: "La compresión de redes neuronales abarca varias técnicas para reducir tamaño de modelo y requisitos computacionales mientras preserva precisión. Métodos clave incluyen poda (eliminar conexiones), cuantización (reducir precisión), destilación de conocimiento (entrenar modelos más pequeños) y descomposición de bajo rango. Estos permiten despliegue en dispositivos edge e inferencia más rápida.",
          de: "Neuronale Netzwerk-Kompression umfasst verschiedene Techniken zur Reduzierung von Modellgröße und Rechenanforderungen bei Erhalt der Genauigkeit. Schlüsselmethoden umfassen Pruning (Entfernen von Verbindungen), Quantisierung (Reduzierung der Präzision), Knowledge Distillation (Training kleinerer Modelle) und Low-Rank-Zerlegung. Diese ermöglichen Bereitstellung auf Edge-Geräten und schnellere Inferenz.",
          nl: "Neuraal netwerk compressie omvat verschillende technieken om modelgrootte en rekenvereisten te reduceren terwijl nauwkeurigheid behouden blijft. Belangrijke methoden zijn pruning (verbindingen verwijderen), quantisatie (precisie reduceren), knowledge distillation (kleinere modellen trainen) en low-rank decompositie. Deze maken deployment mogelijk op edge apparaten en snellere inferentie."
        }
      },
      {
        question: {
          en: "What is the concept of receptive field in CNNs?",
          es: "¿Qué es el concepto de campo receptivo en CNN?",
          de: "Was ist das Konzept des rezeptiven Feldes in CNNs?",
          nl: "Wat is het concept van receptief veld in CNNs?"
        },
        options: [
          { en: "The region in the input image that influences a particular neuron's activation in deeper layers", es: "Región en imagen de entrada que influye en activación de neurona particular en capas más profundas", de: "Region im Eingabebild die Aktivierung eines bestimmten Neurons in tieferen Schichten beeinflusst", nl: "Regio in invoerafbeelding die activatie van bepaald neuron in diepere lagen beïnvloedt" },
          { en: "The field of view of the camera capturing images", es: "Campo de visión de cámara que captura imágenes", de: "Sichtfeld der Kamera die Bilder aufnimmt", nl: "Gezichtsveld van camera die afbeeldingen vastlegt" },
          { en: "The area where neurons receive signals", es: "Área donde neuronas reciben señales", de: "Bereich wo Neuronen Signale empfangen", nl: "Gebied waar neuronen signalen ontvangen" },
          { en: "The input layer dimensions", es: "Dimensiones de capa de entrada", de: "Eingabeschicht-Dimensionen", nl: "Invoerlaag dimensies" }
        ],
        correct: 0,
        explanation: {
          en: "A neuron's receptive field is the spatial extent of input pixels it 'sees'. As we go deeper in a CNN, receptive fields grow larger through successive convolutions and pooling. Larger receptive fields allow neurons to capture more context, crucial for understanding complex patterns. Techniques like dilated convolutions efficiently increase receptive field size.",
          es: "El campo receptivo de neurona es extensión espacial de píxeles de entrada que 've'. A medida que profundizamos en CNN, campos receptivos crecen mediante convoluciones y pooling sucesivos. Campos receptivos más grandes permiten a neuronas capturar más contexto, crucial para entender patrones complejos. Técnicas como convoluciones dilatadas aumentan eficientemente tamaño de campo receptivo.",
          de: "Das rezeptive Feld eines Neurons ist räumliche Ausdehnung der Eingabepixel die es 'sieht'. Wenn wir tiefer in CNN gehen, wachsen rezeptive Felder durch aufeinanderfolgende Faltungen und Pooling. Größere rezeptive Felder ermöglichen Neuronen mehr Kontext zu erfassen, entscheidend für Verständnis komplexer Muster. Techniken wie dilatierte Faltungen erhöhen effizient rezeptive Feldgröße.",
          nl: "Het receptieve veld van een neuron is ruimtelijke omvang van invoerpixels die het 'ziet'. Naarmate we dieper gaan in CNN, groeien receptieve velden door opeenvolgende convoluties en pooling. Grotere receptieve velden stellen neuronen in staat meer context vast te leggen, cruciaal voor begrip van complexe patronen. Technieken zoals gedilateerde convoluties verhogen efficiënt receptieve veldgrootte."
        }
      },
      {
        question: {
          en: "What is feature visualization in neural networks?",
          es: "¿Qué es la visualización de características en redes neuronales?",
          de: "Was ist Feature-Visualisierung in neuronalen Netzwerken?",
          nl: "Wat is feature visualisatie in neurale netwerken?"
        },
        options: [
          { en: "Techniques to understand what patterns or features neurons have learned to detect", es: "Técnicas para entender qué patrones o características neuronas han aprendido a detectar", de: "Techniken um zu verstehen welche Muster oder Features Neuronen gelernt haben zu erkennen", nl: "Technieken om te begrijpen welke patronen of features neuronen geleerd hebben te detecteren" },
          { en: "Plotting training curves and metrics", es: "Trazar curvas y métricas de entrenamiento", de: "Plotten von Trainingskurven und Metriken", nl: "Training curves en metrieken plotten" },
          { en: "Displaying network architecture diagrams", es: "Mostrar diagramas de arquitectura de red", de: "Anzeigen von Netzwerkarchitektur-Diagrammen", nl: "Netwerkarchitectuur diagrammen weergeven" },
          { en: "Visualizing the input dataset", es: "Visualizar conjunto de datos de entrada", de: "Visualisieren des Eingabedatensatzes", nl: "Invoerdataset visualiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Feature visualization reveals what specific neurons or layers respond to by generating synthetic images that maximally activate them. Techniques include activation maximization, DeepDream, and gradient-based methods. This helps interpret black-box models, debug networks, and understand hierarchical feature learning.",
          es: "La visualización de características revela a qué responden neuronas o capas específicas generando imágenes sintéticas que las activan maximalmente. Técnicas incluyen maximización de activación, DeepDream y métodos basados en gradiente. Esto ayuda interpretar modelos caja negra, depurar redes y entender aprendizaje de características jerárquico.",
          de: "Feature-Visualisierung zeigt worauf spezifische Neuronen oder Schichten reagieren durch Generierung synthetischer Bilder die sie maximal aktivieren. Techniken umfassen Aktivierungsmaximierung, DeepDream und gradientenbasierte Methoden. Dies hilft Black-Box-Modelle zu interpretieren, Netzwerke zu debuggen und hierarchisches Feature-Learning zu verstehen.",
          nl: "Feature visualisatie onthult waarop specifieke neuronen of lagen reageren door synthetische afbeeldingen te genereren die ze maximaal activeren. Technieken zijn activatiemaximalisatie, DeepDream en gradiënt-gebaseerde methoden. Dit helpt black-box modellen interpreteren, netwerken debuggen en hiërarchisch feature leren begrijpen."
        }
      },
      {
        question: {
          en: "What is Class Activation Mapping (CAM)?",
          es: "¿Qué es el Mapeo de Activación de Clase (CAM)?",
          de: "Was ist Class Activation Mapping (CAM)?",
          nl: "Wat is Class Activation Mapping (CAM)?"
        },
        options: [
          { en: "Visualization technique showing which image regions contributed most to a classification decision", es: "Técnica de visualización que muestra qué regiones de imagen contribuyeron más a decisión de clasificación", de: "Visualisierungstechnik die zeigt welche Bildbereiche am meisten zu Klassifikationsentscheidung beitrugen", nl: "Visualisatietechniek die toont welke afbeeldingsregio's het meest bijdroegen aan classificatiebeslissing" },
          { en: "Mapping class labels to activation functions", es: "Mapear etiquetas de clase a funciones de activación", de: "Zuordnen von Klassenbezeichnungen zu Aktivierungsfunktionen", nl: "Klasselabels mappen naar activatiefuncties" },
          { en: "Creating activation heatmaps for all layers", es: "Crear mapas de calor de activación para todas las capas", de: "Erstellen von Aktivierungs-Heatmaps für alle Schichten", nl: "Activatie heatmaps maken voor alle lagen" },
          { en: "Categorizing different activation patterns", es: "Categorizar diferentes patrones de activación", de: "Kategorisieren verschiedener Aktivierungsmuster", nl: "Verschillende activatiepatronen categoriseren" }
        ],
        correct: 0,
        explanation: {
          en: "CAM generates heatmaps highlighting discriminative regions for a predicted class by projecting back the weights from the final classification layer to the last convolutional feature maps. Grad-CAM extends this to any layer using gradients. These techniques provide visual explanations for model predictions.",
          es: "CAM genera mapas de calor destacando regiones discriminativas para clase predicha proyectando hacia atrás pesos de capa de clasificación final a mapas de características convolucionales finales. Grad-CAM extiende esto a cualquier capa usando gradientes. Estas técnicas proporcionan explicaciones visuales para predicciones de modelo.",
          de: "CAM generiert Heatmaps die diskriminative Regionen für vorhergesagte Klasse hervorheben durch Rückprojektion der Gewichte von finaler Klassifikationsschicht zu letzten Faltungs-Feature-Maps. Grad-CAM erweitert dies auf beliebige Schicht unter Verwendung von Gradienten. Diese Techniken bieten visuelle Erklärungen für Modellvorhersagen.",
          nl: "CAM genereert heatmaps die discriminatieve regio's markeren voor voorspelde klasse door gewichten van finale classificatielaag terug te projecteren naar laatste convolutionele feature maps. Grad-CAM breidt dit uit naar elke laag met gradiënten. Deze technieken bieden visuele verklaringen voor modelvoorspellingen."
        }
      },
      {
        question: {
          en: "What is adversarial training?",
          es: "¿Qué es el entrenamiento adversarial?",
          de: "Was ist adversariales Training?",
          nl: "Wat is adversarial training?"
        },
        options: [
          { en: "Training networks on adversarial examples to improve robustness against adversarial attacks", es: "Entrenar redes en ejemplos adversariales para mejorar robustez contra ataques adversariales", de: "Training von Netzwerken auf adversarialen Beispielen um Robustheit gegen adversariale Angriffe zu verbessern", nl: "Netwerken trainen op adversarial voorbeelden om robuustheid tegen adversarial aanvallen te verbeteren" },
          { en: "Training two networks to compete against each other", es: "Entrenar dos redes para competir entre sí", de: "Training von zwei Netzwerken um gegeneinander zu konkurrieren", nl: "Twee netwerken trainen om tegen elkaar te concurreren" },
          { en: "Training in adversarial conditions", es: "Entrenar en condiciones adversas", de: "Training unter widrigen Bedingungen", nl: "Trainen onder vijandige omstandigheden" },
          { en: "Using negative examples only", es: "Usar solo ejemplos negativos", de: "Nur negative Beispiele verwenden", nl: "Alleen negatieve voorbeelden gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial training augments the training set with adversarial examples - inputs with small, carefully crafted perturbations that fool the network. By training on these challenging examples, networks become more robust to adversarial attacks and often generalize better. This is a key defense mechanism against adversarial vulnerabilities.",
          es: "El entrenamiento adversarial aumenta conjunto de entrenamiento con ejemplos adversariales - entradas con perturbaciones pequeñas y cuidadosamente elaboradas que engañan a red. Entrenando en estos ejemplos desafiantes, redes se vuelven más robustas a ataques adversariales y a menudo generalizan mejor. Este es mecanismo de defensa clave contra vulnerabilidades adversariales.",
          de: "Adversariales Training erweitert Trainingssatz mit adversarialen Beispielen - Eingaben mit kleinen, sorgfältig gestalteten Störungen die Netzwerk täuschen. Durch Training auf diesen herausfordernden Beispielen werden Netzwerke robuster gegen adversariale Angriffe und generalisieren oft besser. Dies ist Schlüsselabwehrmechanismus gegen adversariale Schwachstellen.",
          nl: "Adversarial training vergroot trainingsset met adversarial voorbeelden - invoer met kleine, zorgvuldig geconstrueerde verstoringen die netwerk misleiden. Door te trainen op deze uitdagende voorbeelden worden netwerken robuuster tegen adversarial aanvallen en generaliseren vaak beter. Dit is belangrijkste verdedigingsmechanisme tegen adversarial kwetsbaarheden."
        }
      },
      {
        question: {
          en: "What is meta-learning in neural networks?",
          es: "¿Qué es el meta-aprendizaje en redes neuronales?",
          de: "Was ist Meta-Learning in neuronalen Netzwerken?",
          nl: "Wat is meta-learning in neurale netwerken?"
        },
        options: [
          { en: "Learning how to learn - training models to quickly adapt to new tasks with minimal data", es: "Aprender cómo aprender - entrenar modelos para adaptarse rápidamente a nuevas tareas con datos mínimos", de: "Lernen wie man lernt - Training von Modellen um sich schnell an neue Aufgaben mit minimalen Daten anzupassen", nl: "Leren hoe te leren - modellen trainen om snel aan te passen aan nieuwe taken met minimale data" },
          { en: "Learning metadata about training datasets", es: "Aprender metadatos sobre conjuntos de datos de entrenamiento", de: "Lernen von Metadaten über Trainingsdatensätze", nl: "Metadata leren over trainingsdatasets" },
          { en: "High-level abstraction of learning", es: "Abstracción de alto nivel de aprendizaje", de: "Hochstufige Abstraktion von Lernen", nl: "Hoog-niveau abstractie van leren" },
          { en: "Learning network architectures", es: "Aprender arquitecturas de red", de: "Lernen von Netzwerkarchitekturen", nl: "Netwerkarchitecturen leren" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-learning or 'learning to learn' trains models on a distribution of tasks so they can rapidly adapt to new but related tasks with few examples. Approaches like MAML (Model-Agnostic Meta-Learning) learn good parameter initializations that enable fast fine-tuning. This is crucial for few-shot learning scenarios.",
          es: "El meta-aprendizaje o 'aprender a aprender' entrena modelos en distribución de tareas para que puedan adaptarse rápidamente a tareas nuevas pero relacionadas con pocos ejemplos. Enfoques como MAML (Meta-Aprendizaje Agnóstico al Modelo) aprenden buenas inicializaciones de parámetros que permiten ajuste fino rápido. Esto es crucial para escenarios de aprendizaje de pocos disparos.",
          de: "Meta-Learning oder 'Lernen zu lernen' trainiert Modelle auf Verteilung von Aufgaben damit sie sich schnell an neue aber verwandte Aufgaben mit wenigen Beispielen anpassen können. Ansätze wie MAML (Model-Agnostic Meta-Learning) lernen gute Parameter-Initialisierungen die schnelles Fine-Tuning ermöglichen. Dies ist entscheidend für Few-Shot-Learning-Szenarien.",
          nl: "Meta-learning of 'leren te leren' traint modellen op verdeling van taken zodat ze snel kunnen aanpassen aan nieuwe maar gerelateerde taken met weinig voorbeelden. Benaderingen zoals MAML (Model-Agnostic Meta-Learning) leren goede parameter initialisaties die snelle fine-tuning mogelijk maken. Dit is cruciaal voor few-shot learning scenario's."
        }
      },
      {
        question: {
          en: "What is continual learning?",
          es: "¿Qué es el aprendizaje continuo?",
          de: "Was ist kontinuierliches Lernen?",
          nl: "Wat is continu leren?"
        },
        options: [
          { en: "Training models sequentially on multiple tasks while avoiding catastrophic forgetting of previous tasks", es: "Entrenar modelos secuencialmente en múltiples tareas mientras evita olvido catastrófico de tareas previas", de: "Training von Modellen sequenziell auf mehreren Aufgaben während Vermeidung katastrophalen Vergessens vorheriger Aufgaben", nl: "Modellen sequentieel trainen op meerdere taken terwijl catastrofaal vergeten van eerdere taken vermeden wordt" },
          { en: "Training networks without stopping", es: "Entrenar redes sin detenerse", de: "Training von Netzwerken ohne Unterbrechung", nl: "Netwerken trainen zonder te stoppen" },
          { en: "Continuous data augmentation during training", es: "Aumento de datos continuo durante entrenamiento", de: "Kontinuierliche Datenaugmentierung während Training", nl: "Continue data augmentatie tijdens training" },
          { en: "Learning from streaming data only", es: "Aprender solo de datos de streaming", de: "Nur von Streaming-Daten lernen", nl: "Alleen leren van streaming data" }
        ],
        correct: 0,
        explanation: {
          en: "Continual learning (lifelong learning) enables models to learn new tasks sequentially without forgetting previously learned ones. Techniques include elastic weight consolidation (protecting important weights), experience replay (storing past examples), and progressive neural networks (adding capacity for new tasks). This mimics human learning and is crucial for deployed systems.",
          es: "El aprendizaje continuo (aprendizaje de por vida) permite a modelos aprender nuevas tareas secuencialmente sin olvidar las aprendidas previamente. Técnicas incluyen consolidación elástica de pesos (proteger pesos importantes), replay de experiencia (almacenar ejemplos pasados) y redes neuronales progresivas (agregar capacidad para nuevas tareas). Esto imita aprendizaje humano y es crucial para sistemas desplegados.",
          de: "Kontinuierliches Lernen (lebenslanges Lernen) ermöglicht Modellen neue Aufgaben sequenziell zu lernen ohne zuvor gelernte zu vergessen. Techniken umfassen elastische Gewichtskonsolidierung (wichtige Gewichte schützen), Experience Replay (vergangene Beispiele speichern) und progressive neuronale Netzwerke (Kapazität für neue Aufgaben hinzufügen). Dies ahmt menschliches Lernen nach und ist entscheidend für bereitgestellte Systeme.",
          nl: "Continu leren (levenslang leren) stelt modellen in staat nieuwe taken sequentieel te leren zonder eerder geleerde te vergeten. Technieken zijn elastische gewichtsconsolidatie (belangrijke gewichten beschermen), experience replay (verleden voorbeelden opslaan) en progressieve neurale netwerken (capaciteit toevoegen voor nieuwe taken). Dit bootst menselijk leren na en is cruciaal voor gedeployde systemen."
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
