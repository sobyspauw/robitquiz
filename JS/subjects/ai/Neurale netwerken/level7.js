// Neural Networks Quiz - Level 7: Convolutional and Recurrent Networks
(function() {
  const level7 = {
    name: {
      en: "Convolutional and Recurrent Networks",
      es: "Redes Convolucionales y Recurrentes",
      de: "Faltungs- und Rekurrente Netzwerke",
      nl: "Convolutionele en Recurrente Netwerken"
    },
    questions: [
      {
        question: {
          en: "What is the primary purpose of convolution operations in CNNs?",
          es: "¿Cuál es el propósito principal de las operaciones de convolución en las CNNs?",
          de: "Was ist der Hauptzweck von Faltungsoperationen in CNNs?",
          nl: "Wat is het hoofddoel van convolutie-operaties in CNN's?"
        },
        options: [
          { en: "Extract local features while preserving spatial relationships", es: "Extraer características locales preservando relaciones espaciales", de: "Lokale Merkmale extrahieren unter Beibehaltung räumlicher Beziehungen", nl: "Lokale kenmerken extraheren terwijl ruimtelijke relaties behouden blijven" },
          { en: "Reduce computational complexity by matrix multiplication", es: "Reducir complejidad computacional mediante multiplicación de matrices", de: "Rechenaufwand durch Matrixmultiplikation reduzieren", nl: "Rekenkundige complexiteit verminderen door matrixvermenigvuldiging" },
          { en: "Normalize input data for better convergence", es: "Normalizar datos de entrada para mejor convergencia", de: "Eingabedaten für bessere Konvergenz normalisieren", nl: "Invoerdata normaliseren voor betere convergentie" },
          { en: "Connect every neuron to every other neuron", es: "Conectar cada neurona con todas las demás neuronas", de: "Jedes Neuron mit jedem anderen Neuron verbinden", nl: "Elk neuron verbinden met elk ander neuron" }
        ],
        correct: 0,
        explanation: {
          en: "Convolution operations apply filters (kernels) across input data to detect local patterns and features while maintaining spatial relationships. This operation allows CNNs to recognize patterns regardless of their position in the input, achieving translation invariance.",
          es: "Las operaciones de convolución aplican filtros (núcleos) a través de los datos de entrada para detectar patrones y características locales manteniendo las relaciones espaciales. Esta operación permite a las CNNs reconocer patrones independientemente de su posición en la entrada, logrando invarianza de traslación.",
          de: "Faltungsoperationen wenden Filter (Kernel) auf Eingabedaten an um lokale Muster und Merkmale zu erkennen während räumliche Beziehungen erhalten bleiben. Diese Operation ermöglicht CNNs Muster unabhängig von ihrer Position in der Eingabe zu erkennen und erreicht Translationsinvarianz.",
          nl: "Convolutie-operaties passen filters (kernels) toe op invoerdata om lokale patronen en kenmerken te detecteren terwijl ruimtelijke relaties behouden blijven. Deze operatie stelt CNN's in staat patronen te herkennen ongeacht hun positie in de invoer, waardoor translatie-invariantie wordt bereikt."
        }
      },
      {
        question: {
          en: "What is the difference between valid and same padding in convolutions?",
          es: "¿Cuál es la diferencia entre padding válido y mismo en convoluciones?",
          de: "Was ist der Unterschied zwischen gültigem und gleichem Padding bei Faltungen?",
          nl: "Wat is het verschil tussen valid en same padding in convoluties?"
        },
        options: [
          { en: "Valid padding produces smaller output, same padding preserves input dimensions", es: "Padding válido produce salida más pequeña, mismo padding preserva dimensiones de entrada", de: "Gültiges Padding erzeugt kleinere Ausgabe, gleiches Padding erhält Eingabedimensionen", nl: "Valid padding produceert kleinere output, same padding behoudt invoerdimensies" },
          { en: "Valid padding adds zeros, same padding adds ones", es: "Padding válido agrega ceros, mismo padding agrega unos", de: "Gültiges Padding fügt Nullen hinzu, gleiches Padding fügt Einsen hinzu", nl: "Valid padding voegt nullen toe, same padding voegt enen toe" },
          { en: "Valid padding is for training, same padding is for testing", es: "Padding válido es para entrenamiento, mismo padding es para pruebas", de: "Gültiges Padding ist für Training, gleiches Padding ist für Tests", nl: "Valid padding is voor training, same padding is voor testen" },
          { en: "Valid padding uses larger kernels, same padding uses smaller kernels", es: "Padding válido usa núcleos más grandes, mismo padding usa núcleos más pequeños", de: "Gültiges Padding verwendet größere Kernel, gleiches Padding verwendet kleinere Kernel", nl: "Valid padding gebruikt grotere kernels, same padding gebruikt kleinere kernels" }
        ],
        correct: 0,
        explanation: {
          en: "Valid padding applies convolution only where the filter completely overlaps the input, resulting in smaller output dimensions. Same padding adds zeros around the input to ensure the output has the same spatial dimensions as the input.",
          es: "El padding válido aplica convolución solo donde el filtro se superpone completamente con la entrada, resultando en dimensiones de salida más pequeñas. El mismo padding agrega ceros alrededor de la entrada para asegurar que la salida tenga las mismas dimensiones espaciales que la entrada.",
          de: "Gültiges Padding wendet Faltung nur dort an wo der Filter vollständig mit der Eingabe überlappt, was zu kleineren Ausgabedimensionen führt. Gleiches Padding fügt Nullen um die Eingabe hinzu um sicherzustellen dass die Ausgabe dieselben räumlichen Dimensionen wie die Eingabe hat.",
          nl: "Valid padding past convolutie alleen toe waar de filter volledig overlapt met de invoer, resulterend in kleinere outputdimensies. Same padding voegt nullen toe rond de invoer om ervoor te zorgen dat de output dezelfde ruimtelijke dimensies heeft als de invoer."
        }
      },
      {
        question: {
          en: "What is the main purpose of pooling layers in CNNs?",
          es: "¿Cuál es el propósito principal de las capas de pooling en las CNNs?",
          de: "Was ist der Hauptzweck von Pooling-Schichten in CNNs?",
          nl: "Wat is het hoofddoel van pooling-lagen in CNN's?"
        },
        options: [
          { en: "Reduce spatial dimensions and provide translation invariance", es: "Reducir dimensiones espaciales y proporcionar invarianza de traslación", de: "Räumliche Dimensionen reduzieren und Translationsinvarianz bieten", nl: "Ruimtelijke dimensies verkleinen en translatie-invariantie bieden" },
          { en: "Increase the number of feature maps", es: "Aumentar el número de mapas de características", de: "Die Anzahl der Feature-Maps erhöhen", nl: "Het aantal feature maps verhogen" },
          { en: "Add non-linearity to the network", es: "Agregar no linealidad a la red", de: "Nicht-Linearität zum Netzwerk hinzufügen", nl: "Non-lineariteit toevoegen aan het netwerk" },
          { en: "Normalize feature values across channels", es: "Normalizar valores de características entre canales", de: "Feature-Werte über Kanäle normalisieren", nl: "Feature-waarden normaliseren over kanalen" }
        ],
        correct: 0,
        explanation: {
          en: "Pooling layers downsample feature maps by summarizing regions (max pooling takes maximum, average pooling takes mean). This reduces computational load, prevents overfitting, and provides some translation invariance by making the network less sensitive to small spatial shifts.",
          es: "Las capas de pooling reducen el muestreo de los mapas de características resumiendo regiones (max pooling toma el máximo, average pooling toma la media). Esto reduce la carga computacional, previene el sobreajuste y proporciona algo de invarianza de traslación haciendo la red menos sensible a pequeños desplazamientos espaciales.",
          de: "Pooling-Schichten verringern Feature-Maps durch Zusammenfassung von Regionen (Max-Pooling nimmt Maximum, Average-Pooling nimmt Mittelwert). Dies reduziert Rechenaufwand, verhindert Overfitting und bietet etwas Translationsinvarianz indem das Netzwerk weniger empfindlich für kleine räumliche Verschiebungen wird.",
          nl: "Pooling-lagen verkleinen feature maps door regio's samen te vatten (max pooling neemt maximum, average pooling neemt gemiddelde). Dit vermindert de rekenbelasting, voorkomt overfitting en biedt enige translatie-invariantie door het netwerk minder gevoelig te maken voor kleine ruimtelijke verschuivingen."
        }
      },
      {
        question: {
          en: "What makes LSTM cells superior to basic RNN cells?",
          es: "¿Qué hace que las células LSTM sean superiores a las células RNN básicas?",
          de: "Was macht LSTM-Zellen besser als grundlegende RNN-Zellen?",
          nl: "Wat maakt LSTM-cellen beter dan basale RNN-cellen?"
        },
        options: [
          { en: "Gate mechanisms that control information flow and solve vanishing gradients", es: "Mecanismos de compuerta que controlan el flujo de información y resuelven gradientes evanescentes", de: "Gate-Mechanismen die Informationsfluss steuern und verschwindende Gradienten lösen", nl: "Poortmechanismen die informatiestroom controleren en verdwijnende gradiënten oplossen" },
          { en: "Larger hidden state dimensions for more memory", es: "Dimensiones de estado oculto más grandes para más memoria", de: "Größere versteckte Zustandsdimensionen für mehr Speicher", nl: "Grotere verborgen toestandsdimensies voor meer geheugen" },
          { en: "Multiple parallel processing units", es: "Múltiples unidades de procesamiento en paralelo", de: "Mehrere parallele Verarbeitungseinheiten", nl: "Meerdere parallelle verwerkingseenheden" },
          { en: "Convolutional operations for spatial processing", es: "Operaciones convolucionales para procesamiento espacial", de: "Faltungsoperationen für räumliche Verarbeitung", nl: "Convolutionele operaties voor ruimtelijke verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "LSTM cells use forget, input, and output gates to selectively control what information to store, update, or output. This gating mechanism allows LSTMs to maintain long-term dependencies and mitigates the vanishing gradient problem that affects basic RNNs in long sequences.",
          es: "Las células LSTM usan compuertas de olvido, entrada y salida para controlar selectivamente qué información almacenar, actualizar o emitir. Este mecanismo de compuerta permite a las LSTMs mantener dependencias a largo plazo y mitiga el problema del gradiente evanescente que afecta a las RNNs básicas en secuencias largas.",
          de: "LSTM-Zellen verwenden Forget-, Input- und Output-Gates um selektiv zu steuern welche Informationen gespeichert, aktualisiert oder ausgegeben werden. Dieser Gate-Mechanismus ermöglicht LSTMs langfristige Abhängigkeiten zu erhalten und mildert das Problem verschwindender Gradienten das grundlegende RNNs in langen Sequenzen betrifft.",
          nl: "LSTM-cellen gebruiken forget-, input- en output-poorten om selectief te controleren welke informatie op te slaan, bij te werken of uit te voeren. Dit poortmechanisme stelt LSTM's in staat om langetermijnafhankelijkheden te behouden en vermindert het probleem van verdwijnende gradiënten dat basis-RNN's beïnvloedt in lange sequenties."
        }
      },
      {
        question: {
          en: "How do GRU (Gated Recurrent Unit) cells differ from LSTM cells?",
          es: "¿En qué se diferencian las células GRU (Unidad Recurrente con Compuerta) de las células LSTM?",
          de: "Wie unterscheiden sich GRU (Gated Recurrent Unit) Zellen von LSTM-Zellen?",
          nl: "Hoe verschillen GRU (Gated Recurrent Unit) cellen van LSTM-cellen?"
        },
        options: [
          { en: "GRUs have fewer gates (reset and update) and simpler architecture", es: "GRUs tienen menos compuertas (reset y update) y arquitectura más simple", de: "GRUs haben weniger Gates (Reset und Update) und einfachere Architektur", nl: "GRU's hebben minder poorten (reset en update) en eenvoudigere architectuur" },
          { en: "GRUs process sequences in parallel while LSTMs process sequentially", es: "GRUs procesan secuencias en paralelo mientras LSTMs procesan secuencialmente", de: "GRUs verarbeiten Sequenzen parallel während LSTMs sequenziell verarbeiten", nl: "GRU's verwerken sequenties parallel terwijl LSTM's sequentieel verwerken" },
          { en: "GRUs use convolutional gates while LSTMs use fully connected gates", es: "GRUs usan compuertas convolucionales mientras LSTMs usan compuertas completamente conectadas", de: "GRUs verwenden Faltungs-Gates während LSTMs vollständig verbundene Gates verwenden", nl: "GRU's gebruiken convolutionele poorten terwijl LSTM's volledig verbonden poorten gebruiken" },
          { en: "GRUs handle longer sequences while LSTMs handle shorter sequences", es: "GRUs manejan secuencias más largas mientras LSTMs manejan secuencias más cortas", de: "GRUs handhaben längere Sequenzen während LSTMs kürzere Sequenzen handhaben", nl: "GRU's hanteren langere sequenties terwijl LSTM's kortere sequenties hanteren" }
        ],
        correct: 0,
        explanation: {
          en: "GRUs simplify LSTM architecture by combining the forget and input gates into a single update gate, and merging the cell state and hidden state. This results in fewer parameters and faster training while maintaining similar performance for many tasks.",
          es: "Las GRUs simplifican la arquitectura LSTM combinando las compuertas de olvido y entrada en una sola compuerta de actualización, y fusionando el estado de celda y el estado oculto. Esto resulta en menos parámetros y entrenamiento más rápido manteniendo rendimiento similar para muchas tareas.",
          de: "GRUs vereinfachen die LSTM-Architektur durch Kombination der Forget- und Input-Gates zu einem einzigen Update-Gate und Verschmelzung von Zellzustand und verborgenem Zustand. Dies resultiert in weniger Parametern und schnellerem Training bei ähnlicher Leistung für viele Aufgaben.",
          nl: "GRU's vereenvoudigen LSTM-architectuur door forget- en input-poorten te combineren tot één update-poort, en de celstaat en verborgen staat samen te voegen. Dit resulteert in minder parameters en snellere training terwijl vergelijkbare prestaties voor veel taken behouden blijven."
        }
      },
      {
        question: {
          en: "What is the receptive field in CNNs?",
          es: "¿Qué es el campo receptivo en las CNNs?",
          de: "Was ist das rezeptive Feld in CNNs?",
          nl: "Wat is het receptieve veld in CNN's?"
        },
        options: [
          { en: "The region of input that influences a particular output neuron", es: "La región de entrada que influye en una neurona de salida particular", de: "Der Eingabebereich der einen bestimmten Ausgabeneuron beeinflusst", nl: "Het gebied van invoer dat een bepaald uitvoerneuron beïnvloedt" },
          { en: "The size of the convolutional filter kernel", es: "El tamaño del núcleo del filtro convolucional", de: "Die Größe des Faltungsfilter-Kernels", nl: "De grootte van de convolutiefilterkernel" },
          { en: "The number of channels in each layer", es: "El número de canales en cada capa", de: "Die Anzahl der Kanäle in jeder Schicht", nl: "Het aantal kanalen in elke laag" },
          { en: "The range of activation values in a layer", es: "El rango de valores de activación en una capa", de: "Der Bereich der Aktivierungswerte in einer Schicht", nl: "Het bereik van activatiewaarden in een laag" }
        ],
        correct: 0,
        explanation: {
          en: "The receptive field refers to the spatial extent of input pixels that can influence the computation of a particular output neuron. As layers go deeper, the receptive field increases, allowing neurons to see larger regions of the input image.",
          es: "El campo receptivo se refiere a la extensión espacial de píxeles de entrada que pueden influir en el cálculo de una neurona de salida particular. A medida que las capas se vuelven más profundas, el campo receptivo aumenta, permitiendo a las neuronas ver regiones más grandes de la imagen de entrada.",
          de: "Das rezeptive Feld bezieht sich auf die räumliche Ausdehnung von Eingabepixeln die die Berechnung eines bestimmten Ausgabeneurons beeinflussen können. Während Schichten tiefer werden erhöht sich das rezeptive Feld und ermöglicht Neuronen größere Bereiche des Eingabebildes zu sehen.",
          nl: "Het receptieve veld verwijst naar de ruimtelijke uitgestrektheid van invoerpixels die de berekening van een bepaald uitvoerneuron kunnen beïnvloeden. Naarmate lagen dieper worden, neemt het receptieve veld toe, waardoor neuronen grotere gebieden van het invoerbeeld kunnen zien."
        }
      },
      {
        question: {
          en: "What is the purpose of stride in convolution operations?",
          es: "¿Cuál es el propósito del stride en las operaciones de convolución?",
          de: "Was ist der Zweck der Schrittweite bei Faltungsoperationen?",
          nl: "Wat is het doel van stride in convolutie-operaties?"
        },
        options: [
          { en: "Control how many pixels the filter moves at each step", es: "Controlar cuántos píxeles se mueve el filtro en cada paso", de: "Steuern wie viele Pixel der Filter bei jedem Schritt bewegt", nl: "Controleren hoeveel pixels de filter bij elke stap beweegt" },
          { en: "Determine the number of filters applied to input", es: "Determinar el número de filtros aplicados a la entrada", de: "Die Anzahl der auf die Eingabe angewandten Filter bestimmen", nl: "Bepalen hoeveel filters op de invoer worden toegepast" },
          { en: "Set the learning rate for filter weights", es: "Establecer la tasa de aprendizaje para los pesos del filtro", de: "Die Lernrate für Filtergewichte festlegen", nl: "De leersnelheid voor filtergewichten instellen" },
          { en: "Control the depth of feature maps", es: "Controlar la profundidad de los mapas de características", de: "Die Tiefe der Feature-Maps steuern", nl: "De diepte van feature maps controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Stride determines the step size when sliding the convolutional filter across the input. A stride of 1 moves the filter one pixel at a time, while larger strides skip pixels, resulting in smaller output dimensions and computational savings.",
          es: "El stride determina el tamaño del paso al deslizar el filtro convolucional a través de la entrada. Un stride de 1 mueve el filtro un píxel a la vez, mientras que strides más grandes saltan píxeles, resultando en dimensiones de salida más pequeñas y ahorros computacionales.",
          de: "Die Schrittweite bestimmt die Schrittgröße beim Gleiten des Faltungsfilters über die Eingabe. Eine Schrittweite von 1 bewegt den Filter einen Pixel auf einmal, während größere Schrittweiten Pixel überspringen und zu kleineren Ausgabedimensionen und Recheneinsparungen führen.",
          nl: "Stride bepaalt de stapgrootte bij het schuiven van de convolutiefilter over de invoer. Een stride van 1 beweegt de filter één pixel tegelijk, terwijl grotere strides pixels overslaan, resulterend in kleinere outputdimensies en rekenbesparing."
        }
      },
      {
        question: {
          en: "What is dilated (atrous) convolution and why is it useful?",
          es: "¿Qué es la convolución dilatada (atrous) y por qué es útil?",
          de: "Was ist dilatierte (atrous) Faltung und warum ist sie nützlich?",
          nl: "Wat is gedilateerde (atrous) convolutie en waarom is het nuttig?"
        },
        options: [
          { en: "Expands receptive field without increasing parameters or losing resolution", es: "Expande el campo receptivo sin aumentar parámetros o perder resolución", de: "Erweitert rezeptives Feld ohne Parameter zu erhöhen oder Auflösung zu verlieren", nl: "Vergroot receptief veld zonder parameters te verhogen of resolutie te verliezen" },
          { en: "Increases the number of filters by dilating kernel size", es: "Aumenta el número de filtros dilatando el tamaño del núcleo", de: "Erhöht die Anzahl der Filter durch Dilatierung der Kernel-Größe", nl: "Verhoogt het aantal filters door kernelgrootte te dilateren" },
          { en: "Applies convolution multiple times to the same region", es: "Aplica convolución múltiples veces a la misma región", de: "Wendet Faltung mehrfach auf dieselbe Region an", nl: "Past convolutie meerdere keren toe op hetzelfde gebied" },
          { en: "Reduces computational cost by skipping certain operations", es: "Reduce el costo computacional saltando ciertas operaciones", de: "Reduziert Rechenkosten durch Überspringen bestimmter Operationen", nl: "Vermindert rekenkosten door bepaalde operaties over te slaan" }
        ],
        correct: 0,
        explanation: {
          en: "Dilated convolution inserts gaps (holes) between kernel elements, effectively increasing the receptive field without adding parameters. This is particularly useful in semantic segmentation where you need large receptive fields while maintaining spatial resolution.",
          es: "La convolución dilatada inserta espacios (huecos) entre elementos del núcleo, aumentando efectivamente el campo receptivo sin agregar parámetros. Esto es particularmente útil en segmentación semántica donde necesitas campos receptivos grandes manteniendo resolución espacial.",
          de: "Dilatierte Faltung fügt Lücken zwischen Kernel-Elementen ein und erhöht effektiv das rezeptive Feld ohne Parameter hinzuzufügen. Dies ist besonders nützlich bei semantischer Segmentierung wo große rezeptive Felder bei Beibehaltung räumlicher Auflösung benötigt werden.",
          nl: "Gedilateerde convolutie voegt gaten in tussen kernelelementen, waardoor het receptieve veld effectief wordt vergroot zonder parameters toe te voegen. Dit is bijzonder nuttig bij semantische segmentatie waar je grote receptieve velden nodig hebt terwijl ruimtelijke resolutie behouden blijft."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in RNNs?",
          es: "¿Qué es el problema del gradiente evanescente en las RNNs?",
          de: "Was ist das Problem verschwindender Gradienten in RNNs?",
          nl: "Wat is het probleem van verdwijnende gradiënten in RNN's?"
        },
        options: [
          { en: "Gradients become exponentially small in long sequences, preventing learning of long-term dependencies", es: "Los gradientes se vuelven exponencialmente pequeños en secuencias largas, impidiendo aprender dependencias a largo plazo", de: "Gradienten werden exponentiell klein bei langen Sequenzen und verhindern Lernen langfristiger Abhängigkeiten", nl: "Gradiënten worden exponentieel klein in lange sequenties, waardoor leren van langetermijnafhankelijkheden wordt voorkomen" },
          { en: "The gradient calculation becomes too complex for the optimizer", es: "El cálculo del gradiente se vuelve demasiado complejo para el optimizador", de: "Die Gradientenberechnung wird zu komplex für den Optimierer", nl: "De gradiëntberekening wordt te complex voor de optimizer" },
          { en: "Gradients are lost due to numerical precision errors", es: "Los gradientes se pierden debido a errores de precisión numérica", de: "Gradienten gehen durch numerische Präzisionsfehler verloren", nl: "Gradiënten gaan verloren door numerieke precisiefouten" },
          { en: "The network forgets previously learned patterns", es: "La red olvida patrones aprendidos previamente", de: "Das Netzwerk vergisst zuvor gelernte Muster", nl: "Het netwerk vergeet eerder geleerde patronen" }
        ],
        correct: 0,
        explanation: {
          en: "In RNNs, gradients are backpropagated through time by repeatedly multiplying by the same weight matrix. If eigenvalues are less than 1, gradients shrink exponentially with sequence length, making it difficult to learn dependencies between distant time steps.",
          es: "En las RNNs, los gradientes se retropropagan a través del tiempo multiplicando repetidamente por la misma matriz de pesos. Si los valores propios son menores que 1, los gradientes se reducen exponencialmente con la longitud de la secuencia, dificultando aprender dependencias entre pasos de tiempo distantes.",
          de: "In RNNs werden Gradienten durch Zeit rückpropagiert durch wiederholte Multiplikation mit derselben Gewichtsmatrix. Wenn Eigenwerte kleiner als 1 sind schrumpfen Gradienten exponentiell mit Sequenzlänge und erschweren das Lernen von Abhängigkeiten zwischen entfernten Zeitschritten.",
          nl: "In RNN's worden gradiënten door de tijd heen gebackpropageerd door herhaald vermenigvuldigen met dezelfde gewichtsmatrix. Als eigenwaarden kleiner zijn dan 1, krimpen gradiënten exponentieel met sequentielengte, waardoor het leren van afhankelijkheden tussen verre tijdstappen moeilijk wordt."
        }
      },
      {
        question: {
          en: "What is the purpose of depth-wise separable convolution?",
          es: "¿Cuál es el propósito de la convolución separable en profundidad?",
          de: "Was ist der Zweck tiefentrennbarer Faltung?",
          nl: "Wat is het doel van diepte-scheidbare convolutie?"
        },
        options: [
          { en: "Reduce parameters and computations by separating spatial and channel-wise filtering", es: "Reducir parámetros y cálculos separando filtrado espacial y por canales", de: "Parameter und Berechnungen reduzieren durch Trennung räumlicher und kanalweiser Filterung", nl: "Parameters en berekeningen verminderen door ruimtelijke en kanaalgewijze filtering te scheiden" },
          { en: "Apply different depths of convolution to different input channels", es: "Aplicar diferentes profundidades de convolución a diferentes canales de entrada", de: "Verschiedene Faltungstiefen auf verschiedene Eingabekanäle anwenden", nl: "Verschillende convolutiedieptes toepassen op verschillende invoerkanalen" },
          { en: "Enable parallel processing of convolution operations", es: "Habilitar procesamiento paralelo de operaciones de convolución", de: "Parallele Verarbeitung von Faltungsoperationen ermöglichen", nl: "Parallelle verwerking van convolutie-operaties mogelijk maken" },
          { en: "Increase the number of learnable parameters for better accuracy", es: "Aumentar el número de parámetros aprendibles para mejor precisión", de: "Die Anzahl lernbarer Parameter für bessere Genauigkeit erhöhen", nl: "Het aantal leerbare parameters verhogen voor betere nauwkeurigheid" }
        ],
        correct: 0,
        explanation: {
          en: "Depth-wise separable convolution splits standard convolution into two steps: depth-wise convolution (applies one filter per input channel) followed by point-wise convolution (1x1 convolution to combine channels). This dramatically reduces parameters and computations while maintaining similar performance.",
          es: "La convolución separable en profundidad divide la convolución estándar en dos pasos: convolución en profundidad (aplica un filtro por canal de entrada) seguida de convolución puntual (convolución 1x1 para combinar canales). Esto reduce dramáticamente parámetros y cálculos manteniendo rendimiento similar.",
          de: "Tiefentrennbare Faltung teilt Standard-Faltung in zwei Schritte: tiefenweise Faltung (wendet einen Filter pro Eingabekanal an) gefolgt von punktweiser Faltung (1x1-Faltung zum Kombinieren von Kanälen). Dies reduziert Parameter und Berechnungen drastisch bei ähnlicher Leistung.",
          nl: "Diepte-scheidbare convolutie splitst standaard convolutie in twee stappen: dieptegewijze convolutie (past één filter per invoerkanaal toe) gevolgd door puntgewijze convolutie (1x1 convolutie om kanalen te combineren). Dit vermindert parameters en berekeningen drastisch terwijl vergelijkbare prestaties behouden blijven."
        }
      },
      {
        question: {
          en: "What is the difference between bidirectional and unidirectional RNNs?",
          es: "¿Cuál es la diferencia entre RNNs bidireccionales y unidireccionales?",
          de: "Was ist der Unterschied zwischen bidirektionalen und unidirektionalen RNNs?",
          nl: "Wat is het verschil tussen bidirectionele en unidirectionele RNN's?"
        },
        options: [
          { en: "Bidirectional RNNs process sequences in both forward and backward directions", es: "RNNs bidireccionales procesan secuencias en direcciones hacia adelante y hacia atrás", de: "Bidirektionale RNNs verarbeiten Sequenzen in Vorwärts- und Rückwärtsrichtung", nl: "Bidirectionele RNN's verwerken sequenties in zowel voorwaartse als achterwaartse richting" },
          { en: "Bidirectional RNNs have twice as many layers as unidirectional RNNs", es: "RNNs bidireccionales tienen el doble de capas que las RNNs unidireccionales", de: "Bidirektionale RNNs haben doppelt so viele Schichten wie unidirektionale RNNs", nl: "Bidirectionele RNN's hebben twee keer zoveel lagen als unidirectionele RNN's" },
          { en: "Bidirectional RNNs can process two different sequences simultaneously", es: "RNNs bidireccionales pueden procesar dos secuencias diferentes simultáneamente", de: "Bidirektionale RNNs können zwei verschiedene Sequenzen gleichzeitig verarbeiten", nl: "Bidirectionele RNN's kunnen twee verschillende sequenties tegelijkertijd verwerken" },
          { en: "Bidirectional RNNs alternate between forward and backward processing", es: "RNNs bidireccionales alternan entre procesamiento hacia adelante y hacia atrás", de: "Bidirektionale RNNs wechseln zwischen Vorwärts- und Rückwärtsverarbeitung", nl: "Bidirectionele RNN's wisselen af tussen voorwaartse en achterwaartse verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Bidirectional RNNs use two separate hidden layers: one processes the sequence from beginning to end (forward), another from end to beginning (backward). The outputs are typically concatenated or summed, allowing the network to access both past and future context for each time step.",
          es: "Las RNNs bidireccionales usan dos capas ocultas separadas: una procesa la secuencia de principio a fin (hacia adelante), otra de fin a principio (hacia atrás). Las salidas típicamente se concatenan o suman, permitiendo a la red acceder tanto al contexto pasado como futuro para cada paso de tiempo.",
          de: "Bidirektionale RNNs verwenden zwei separate versteckte Schichten: eine verarbeitet die Sequenz von Anfang bis Ende (vorwärts), eine andere von Ende bis Anfang (rückwärts). Die Ausgaben werden typischerweise verkettet oder summiert, wodurch das Netzwerk sowohl vergangenen als auch zukünftigen Kontext für jeden Zeitschritt nutzen kann.",
          nl: "Bidirectionele RNN's gebruiken twee afzonderlijke verborgen lagen: één verwerkt de sequentie van begin tot eind (voorwaarts), een andere van eind tot begin (achterwaarts). De outputs worden meestal samengevoegd of opgeteld, waardoor het netwerk toegang heeft tot zowel verleden als toekomstige context voor elke tijdstap."
        }
      },
      {
        question: {
          en: "What is the purpose of batch normalization in CNNs?",
          es: "¿Cuál es el propósito de la normalización por lotes en las CNNs?",
          de: "Was ist der Zweck der Batch-Normalisierung in CNNs?",
          nl: "Wat is het doel van batch-normalisatie in CNN's?"
        },
        options: [
          { en: "Normalize layer inputs to stabilize training and enable higher learning rates", es: "Normalizar entradas de capa para estabilizar entrenamiento y permitir tasas de aprendizaje más altas", de: "Schichteingaben normalisieren um Training zu stabilisieren und höhere Lernraten zu ermöglichen", nl: "Laagtoegang normaliseren om training te stabiliseren en hogere leersnelheden mogelijk te maken" },
          { en: "Reduce the total number of parameters in the network", es: "Reducir el número total de parámetros en la red", de: "Die Gesamtzahl der Parameter im Netzwerk reduzieren", nl: "Het totale aantal parameters in het netwerk verminderen" },
          { en: "Group input samples into batches for parallel processing", es: "Agrupar muestras de entrada en lotes para procesamiento paralelo", de: "Eingabeproben in Batches für parallele Verarbeitung gruppieren", nl: "Invoermonsters groeperen in batches voor parallelle verwerking" },
          { en: "Normalize the final output predictions", es: "Normalizar las predicciones de salida final", de: "Die endgültigen Ausgabevorhersagen normalisieren", nl: "De finale uitvoervoorspellingen normaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes inputs to each layer by subtracting the batch mean and dividing by batch standard deviation. This reduces internal covariate shift, allows higher learning rates, acts as regularization, and often eliminates the need for dropout.",
          es: "La normalización por lotes normaliza las entradas a cada capa restando la media del lote y dividiendo por la desviación estándar del lote. Esto reduce el cambio de covarianza interna, permite tasas de aprendizaje más altas, actúa como regularización y a menudo elimina la necesidad de dropout.",
          de: "Batch-Normalisierung normalisiert Eingaben zu jeder Schicht durch Subtraktion des Batch-Mittelwerts und Division durch Batch-Standardabweichung. Dies reduziert interne Kovarianzverschiebung, ermöglicht höhere Lernraten, wirkt als Regularisierung und eliminiert oft die Notwendigkeit für Dropout.",
          nl: "Batch-normalisatie normaliseert invoer naar elke laag door het batch-gemiddelde af te trekken en te delen door de batch-standaarddeviatie. Dit vermindert interne covariantieverschuiving, maakt hogere leersnelheden mogelijk, werkt als regularisatie en elimineert vaak de noodzaak voor dropout."
        }
      },
      {
        question: {
          en: "What is the role of attention mechanisms in sequence-to-sequence models?",
          es: "¿Cuál es el papel de los mecanismos de atención en modelos secuencia-a-secuencia?",
          de: "Was ist die Rolle von Aufmerksamkeitsmechanismen in Sequenz-zu-Sequenz-Modellen?",
          nl: "Wat is de rol van aandachtsmechanismen in sequentie-naar-sequentie modellen?"
        },
        options: [
          { en: "Allow decoder to focus on different parts of input sequence for each output", es: "Permitir al decodificador enfocarse en diferentes partes de la secuencia de entrada para cada salida", de: "Ermöglichen dem Decoder sich auf verschiedene Teile der Eingabesequenz für jede Ausgabe zu konzentrieren", nl: "Stellen de decoder in staat om zich te richten op verschillende delen van de invoersequentie voor elke output" },
          { en: "Reduce the computational complexity of sequence processing", es: "Reducir la complejidad computacional del procesamiento de secuencias", de: "Die rechnerische Komplexität der Sequenzverarbeitung reduzieren", nl: "De rekenkundige complexiteit van sequentieverwerking verminderen" },
          { en: "Enable parallel processing of all sequence elements", es: "Habilitar procesamiento paralelo de todos los elementos de secuencia", de: "Parallele Verarbeitung aller Sequenzelemente ermöglichen", nl: "Parallelle verwerking van alle sequentie-elementen mogelijk maken" },
          { en: "Automatically determine the optimal sequence length", es: "Determinar automáticamente la longitud óptima de secuencia", de: "Automatisch die optimale Sequenzlänge bestimmen", nl: "Automatisch de optimale sequentielengte bepalen" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms allow the decoder to dynamically focus on different parts of the input sequence when generating each output token. This eliminates the information bottleneck of encoding the entire input into a fixed-size vector and improves performance on long sequences.",
          es: "Los mecanismos de atención permiten al decodificador enfocarse dinámicamente en diferentes partes de la secuencia de entrada al generar cada token de salida. Esto elimina el cuello de botella de información de codificar toda la entrada en un vector de tamaño fijo y mejora el rendimiento en secuencias largas.",
          de: "Aufmerksamkeitsmechanismen ermöglichen dem Decoder sich dynamisch auf verschiedene Teile der Eingabesequenz zu konzentrieren bei der Generierung jedes Ausgabe-Tokens. Dies eliminiert den Informationsengpass der Kodierung der gesamten Eingabe in einen Vektor fester Größe und verbessert die Leistung bei langen Sequenzen.",
          nl: "Aandachtsmechanismen stellen de decoder in staat om zich dynamisch te richten op verschillende delen van de invoersequentie bij het genereren van elk uitvoertoken. Dit elimineert het informatieknelpunt van het coderen van de hele invoer in een vector van vaste grootte en verbetert prestaties bij lange sequenties."
        }
      },
      {
        question: {
          en: "What is the difference between global and local pooling?",
          es: "¿Cuál es la diferencia entre pooling global y local?",
          de: "Was ist der Unterschied zwischen globalem und lokalem Pooling?",
          nl: "Wat is het verschil tussen globale en lokale pooling?"
        },
        options: [
          { en: "Global pooling reduces each feature map to a single value, local pooling operates on small regions", es: "Pooling global reduce cada mapa de características a un solo valor, pooling local opera en regiones pequeñas", de: "Globales Pooling reduziert jede Feature-Map auf einen einzelnen Wert, lokales Pooling operiert auf kleinen Regionen", nl: "Globale pooling reduceert elke feature map tot één waarde, lokale pooling werkt op kleine gebieden" },
          { en: "Global pooling uses max operation, local pooling uses average operation", es: "Pooling global usa operación máximo, pooling local usa operación promedio", de: "Globales Pooling verwendet Max-Operation, lokales Pooling verwendet Durchschnittsoperation", nl: "Globale pooling gebruikt max-operatie, lokale pooling gebruikt gemiddelde operatie" },
          { en: "Global pooling processes all channels, local pooling processes one channel", es: "Pooling global procesa todos los canales, pooling local procesa un canal", de: "Globales Pooling verarbeitet alle Kanäle, lokales Pooling verarbeitet einen Kanal", nl: "Globale pooling verwerkt alle kanalen, lokale pooling verwerkt één kanaal" },
          { en: "Global pooling is used in training, local pooling is used in inference", es: "Pooling global se usa en entrenamiento, pooling local se usa en inferencia", de: "Globales Pooling wird im Training verwendet, lokales Pooling wird in der Inferenz verwendet", nl: "Globale pooling wordt gebruikt bij training, lokale pooling wordt gebruikt bij inferentie" }
        ],
        correct: 0,
        explanation: {
          en: "Global pooling operations (Global Average Pooling, Global Max Pooling) aggregate each entire feature map into a single value, often used before final classification layers. Local pooling operations (like 2x2 max pooling) aggregate small spatial regions while preserving spatial structure.",
          es: "Las operaciones de pooling global (Global Average Pooling, Global Max Pooling) agregan cada mapa de características completo en un solo valor, a menudo usado antes de capas de clasificación final. Las operaciones de pooling local (como max pooling 2x2) agregan pequeñas regiones espaciales preservando estructura espacial.",
          de: "Globale Pooling-Operationen (Global Average Pooling, Global Max Pooling) aggregieren jede gesamte Feature-Map zu einem einzelnen Wert, oft vor finalen Klassifizierungsschichten verwendet. Lokale Pooling-Operationen (wie 2x2 Max-Pooling) aggregieren kleine räumliche Regionen unter Beibehaltung räumlicher Struktur.",
          nl: "Globale pooling-operaties (Global Average Pooling, Global Max Pooling) aggregeren elke volledige feature map tot één waarde, vaak gebruikt voor finale classificatielagen. Lokale pooling-operaties (zoals 2x2 max pooling) aggregeren kleine ruimtelijke gebieden terwijl ruimtelijke structuur behouden blijft."
        }
      },
      {
        question: {
          en: "What is teacher forcing in RNN training?",
          es: "¿Qué es teacher forcing en el entrenamiento de RNN?",
          de: "Was ist Teacher Forcing beim RNN-Training?",
          nl: "Wat is teacher forcing bij RNN-training?"
        },
        options: [
          { en: "Using ground truth tokens as inputs during training instead of model predictions", es: "Usar tokens de verdad fundamental como entradas durante entrenamiento en lugar de predicciones del modelo", de: "Verwendung von Ground-Truth-Tokens als Eingaben während des Trainings anstelle von Modellvorhersagen", nl: "Ground truth tokens gebruiken als invoer tijdens training in plaats van modelvoorspellingen" },
          { en: "Training the model to copy the teacher network's weights", es: "Entrenar el modelo para copiar los pesos de la red del profesor", de: "Das Modell trainieren um die Gewichte des Lehrernetzwerks zu kopieren", nl: "Het model trainen om de gewichten van het lerarennetwerk te kopiëren" },
          { en: "Forcing the model to learn from expert demonstrations", es: "Forzar al modelo a aprender de demostraciones expertas", de: "Das Modell zwingen von Expertenvorführungen zu lernen", nl: "Het model dwingen om te leren van expertdemonstraties" },
          { en: "Using a pre-trained teacher model to guide training", es: "Usar un modelo profesor pre-entrenado para guiar el entrenamiento", de: "Ein vortrainiertes Lehrermodell zur Trainingsleitung verwenden", nl: "Een voorgetraind lerarenmodel gebruiken om training te begeleiden" }
        ],
        correct: 0,
        explanation: {
          en: "Teacher forcing is a training technique where the model receives the actual target sequence as input during training, rather than its own predictions. This speeds up training and provides more stable gradients, but can lead to exposure bias where the model struggles with its own errors during inference.",
          es: "Teacher forcing es una técnica de entrenamiento donde el modelo recibe la secuencia objetivo real como entrada durante el entrenamiento, en lugar de sus propias predicciones. Esto acelera el entrenamiento y proporciona gradientes más estables, pero puede llevar a sesgo de exposición donde el modelo lucha con sus propios errores durante la inferencia.",
          de: "Teacher Forcing ist eine Trainingstechnik bei der das Modell die tatsächliche Zielsequenz als Eingabe während des Trainings erhält, anstatt seiner eigenen Vorhersagen. Dies beschleunigt das Training und bietet stabilere Gradienten, kann aber zu Exposure Bias führen wo das Modell mit seinen eigenen Fehlern während der Inferenz kämpft.",
          nl: "Teacher forcing is een trainingstechniek waarbij het model de werkelijke doelsequentie als invoer ontvangt tijdens training, in plaats van zijn eigen voorspellingen. Dit versnelt training en biedt stabielere gradiënten, maar kan leiden tot exposure bias waarbij het model worstelt met zijn eigen fouten tijdens inferentie."
        }
      },
      {
        question: {
          en: "What is the purpose of skip connections in CNN architectures?",
          es: "¿Cuál es el propósito de las conexiones de salto en las arquitecturas CNN?",
          de: "Was ist der Zweck von Skip-Verbindungen in CNN-Architekturen?",
          nl: "Wat is het doel van skip-verbindingen in CNN-architecturen?"
        },
        options: [
          { en: "Enable gradient flow and identity mapping for training very deep networks", es: "Habilitar flujo de gradientes y mapeo de identidad para entrenar redes muy profundas", de: "Gradientenfluss und Identitätsabbildung für Training sehr tiefer Netzwerke ermöglichen", nl: "Gradiëntenstroom en identiteitsafbeelding mogelijk maken voor training van zeer diepe netwerken" },
          { en: "Reduce the number of parameters by skipping certain layers", es: "Reducir el número de parámetros saltando ciertas capas", de: "Die Anzahl der Parameter durch Überspringen bestimmter Schichten reduzieren", nl: "Het aantal parameters verminderen door bepaalde lagen over te slaan" },
          { en: "Enable parallel processing of different network paths", es: "Habilitar procesamiento paralelo de diferentes rutas de red", de: "Parallele Verarbeitung verschiedener Netzwerkpfade ermöglichen", nl: "Parallelle verwerking van verschillende netwerkpaden mogelijk maken" },
          { en: "Connect layers that are not adjacent to each other", es: "Conectar capas que no son adyacentes entre sí", de: "Schichten verbinden die nicht nebeneinander liegen", nl: "Lagen verbinden die niet naast elkaar liggen" }
        ],
        correct: 0,
        explanation: {
          en: "Skip connections add the input of a layer to its output, creating shortcuts that allow gradients to flow directly through the network. This helps train very deep networks by mitigating vanishing gradients and enabling the network to learn identity mappings when needed.",
          es: "Las conexiones de salto agregan la entrada de una capa a su salida, creando atajos que permiten a los gradientes fluir directamente a través de la red. Esto ayuda a entrenar redes muy profundas mitigando gradientes evanescentes y habilitando la red para aprender mapeos de identidad cuando es necesario.",
          de: "Skip-Verbindungen addieren die Eingabe einer Schicht zu ihrer Ausgabe und schaffen Abkürzungen die Gradienten direkt durch das Netzwerk fließen lassen. Dies hilft beim Training sehr tiefer Netzwerke durch Milderung verschwindender Gradienten und ermöglicht dem Netzwerk Identitätsabbildungen zu lernen wenn nötig.",
          nl: "Skip-verbindingen voegen de invoer van een laag toe aan zijn uitvoer, waardoor snelkoppelingen ontstaan die gradiënten direct door het netwerk laten stromen. Dit helpt bij het trainen van zeer diepe netwerken door verdwijnende gradiënten te verminderen en het netwerk in staat te stellen identiteitsafbeeldingen te leren wanneer nodig."
        }
      },
      {
        question: {
          en: "What is the advantage of using 1D convolutions for sequence processing?",
          es: "¿Cuál es la ventaja de usar convoluciones 1D para procesamiento de secuencias?",
          de: "Was ist der Vorteil der Verwendung von 1D-Faltungen für Sequenzverarbeitung?",
          nl: "Wat is het voordeel van het gebruik van 1D convoluties voor sequentieverwerking?"
        },
        options: [
          { en: "Parallel processing and local pattern detection in sequences", es: "Procesamiento paralelo y detección de patrones locales en secuencias", de: "Parallele Verarbeitung und lokale Mustererkennung in Sequenzen", nl: "Parallelle verwerking en lokale patroondetectie in sequenties" },
          { en: "Reduced memory usage compared to 2D convolutions", es: "Uso reducido de memoria comparado con convoluciones 2D", de: "Reduzierter Speicherverbrauch im Vergleich zu 2D-Faltungen", nl: "Verminderd geheugengebruik vergeleken met 2D convoluties" },
          { en: "Better handling of variable length sequences", es: "Mejor manejo de secuencias de longitud variable", de: "Bessere Handhabung von Sequenzen variabler Länge", nl: "Betere behandeling van sequenties van variabele lengte" },
          { en: "Automatic feature extraction without manual engineering", es: "Extracción automática de características sin ingeniería manual", de: "Automatische Feature-Extraktion ohne manuelle Entwicklung", nl: "Automatische feature-extractie zonder handmatige engineering" }
        ],
        correct: 0,
        explanation: {
          en: "1D convolutions can process sequences in parallel (unlike RNNs which are sequential) while capturing local temporal patterns through learnable filters. This combines the efficiency of parallel processing with the ability to detect local motifs and patterns in sequence data.",
          es: "Las convoluciones 1D pueden procesar secuencias en paralelo (a diferencia de las RNNs que son secuenciales) mientras capturan patrones temporales locales a través de filtros aprendibles. Esto combina la eficiencia del procesamiento paralelo con la capacidad de detectar motivos y patrones locales en datos de secuencia.",
          de: "1D-Faltungen können Sequenzen parallel verarbeiten (im Gegensatz zu RNNs die sequenziell sind) während sie lokale temporale Muster durch lernbare Filter erfassen. Dies kombiniert die Effizienz paralleler Verarbeitung mit der Fähigkeit lokale Motive und Muster in Sequenzdaten zu erkennen.",
          nl: "1D convoluties kunnen sequenties parallel verwerken (in tegenstelling tot RNN's die sequentieel zijn) terwijl ze lokale temporele patronen vastleggen via leerbare filters. Dit combineert de efficiëntie van parallelle verwerking met het vermogen om lokale motieven en patronen in sequentiedata te detecteren."
        }
      },
      {
        question: {
          en: "What is the key difference between CNN and RNN information processing?",
          es: "¿Cuál es la diferencia clave entre el procesamiento de información de CNN y RNN?",
          de: "Was ist der Hauptunterschied zwischen CNN- und RNN-Informationsverarbeitung?",
          nl: "Wat is het belangrijkste verschil tussen CNN en RNN informatieverwerking?"
        },
        options: [
          { en: "CNNs process spatial relationships, RNNs process temporal/sequential relationships", es: "CNNs procesan relaciones espaciales, RNNs procesan relaciones temporales/secuenciales", de: "CNNs verarbeiten räumliche Beziehungen, RNNs verarbeiten zeitliche/sequenzielle Beziehungen", nl: "CNN's verwerken ruimtelijke relaties, RNN's verwerken temporele/sequentiële relaties" },
          { en: "CNNs use linear activations, RNNs use non-linear activations", es: "CNNs usan activaciones lineales, RNNs usan activaciones no lineales", de: "CNNs verwenden lineare Aktivierungen, RNNs verwenden nicht-lineare Aktivierungen", nl: "CNN's gebruiken lineaire activeringen, RNN's gebruiken niet-lineaire activeringen" },
          { en: "CNNs process fixed-size inputs, RNNs process variable-size inputs", es: "CNNs procesan entradas de tamaño fijo, RNNs procesan entradas de tamaño variable", de: "CNNs verarbeiten Eingaben fester Größe, RNNs verarbeiten Eingaben variabler Größe", nl: "CNN's verwerken invoer van vaste grootte, RNN's verwerken invoer van variabele grootte" },
          { en: "CNNs are unsupervised, RNNs are supervised learning methods", es: "CNNs son métodos de aprendizaje no supervisado, RNNs son supervisados", de: "CNNs sind unüberwachte, RNNs sind überwachte Lernmethoden", nl: "CNN's zijn ongesuperviseerd, RNN's zijn gesuperviseerde leermethoden" }
        ],
        correct: 0,
        explanation: {
          en: "CNNs are designed to capture spatial hierarchies and local patterns in data like images, using convolution and pooling operations. RNNs are designed to model sequential dependencies and temporal patterns in data like text or time series, using recurrent connections and memory.",
          es: "Las CNNs están diseñadas para capturar jerarquías espaciales y patrones locales en datos como imágenes, usando operaciones de convolución y pooling. Las RNNs están diseñadas para modelar dependencias secuenciales y patrones temporales en datos como texto o series de tiempo, usando conexiones recurrentes y memoria.",
          de: "CNNs sind entworfen um räumliche Hierarchien und lokale Muster in Daten wie Bildern zu erfassen, unter Verwendung von Faltungs- und Pooling-Operationen. RNNs sind entworfen um sequenzielle Abhängigkeiten und zeitliche Muster in Daten wie Text oder Zeitserien zu modellieren, unter Verwendung rekurrenter Verbindungen und Speicher.",
          nl: "CNN's zijn ontworpen om ruimtelijke hiërarchieën en lokale patronen in data zoals beelden vast te leggen, met behulp van convolutie- en pooling-operaties. RNN's zijn ontworpen om sequentiële afhankelijkheden en temporele patronen in data zoals tekst of tijdseries te modelleren, met behulp van recurrente verbindingen en geheugen."
        }
      },
      {
        question: {
          en: "What is the purpose of residual connections (skip connections) in deep CNN architectures?",
          es: "¿Cuál es el propósito de las conexiones residuales (conexiones de salto) en arquitecturas CNN profundas?",
          de: "Was ist der Zweck von Residualverbindungen (Skip-Verbindungen) in tiefen CNN-Architekturen?",
          nl: "Wat is het doel van residuele verbindingen (skip-verbindingen) in diepe CNN-architecturen?"
        },
        options: [
          { en: "Combat vanishing gradients and enable training of much deeper networks", es: "Combatir gradientes evanescentes y permitir entrenamiento de redes mucho más profundas", de: "Verschwindende Gradienten bekämpfen und Training viel tieferer Netzwerke ermöglichen", nl: "Verdwijnende gradiënten bestrijden en training van veel diepere netwerken mogelijk maken" },
          { en: "Reduce computational complexity by skipping layers", es: "Reducir complejidad computacional saltando capas", de: "Rechenaufwand durch Überspringen von Schichten reduzieren", nl: "Rekenkundige complexiteit verminderen door lagen over te slaan" },
          { en: "Increase the number of learnable parameters", es: "Aumentar el número de parámetros aprendibles", de: "Die Anzahl lernbarer Parameter erhöhen", nl: "Het aantal leerbare parameters verhogen" },
          { en: "Enable dynamic selection of network depth during inference", es: "Habilitar selección dinámica de profundidad de red durante inferencia", de: "Dynamische Auswahl der Netzwerktiefe während der Inferenz ermöglichen", nl: "Dynamische selectie van netwerkdiepte tijdens inferentie mogelijk maken" }
        ],
        correct: 0,
        explanation: {
          en: "Residual connections allow information and gradients to flow directly from earlier layers to later layers by adding the input to the output of a block. This helps mitigate the vanishing gradient problem and enables successful training of networks with hundreds of layers, like ResNet-152.",
          es: "Las conexiones residuales permiten que la información y los gradientes fluyan directamente desde capas anteriores a capas posteriores agregando la entrada a la salida de un bloque. Esto ayuda a mitigar el problema del gradiente evanescente y permite entrenamiento exitoso de redes con cientos de capas, como ResNet-152.",
          de: "Residualverbindungen ermöglichen Informationen und Gradienten direkt von früheren zu späteren Schichten zu fließen indem die Eingabe zur Ausgabe eines Blocks hinzugefügt wird. Dies hilft das Problem verschwindender Gradienten zu mildern und ermöglicht erfolgreiches Training von Netzwerken mit Hunderten von Schichten, wie ResNet-152.",
          nl: "Residuele verbindingen stellen informatie en gradiënten in staat om direct van eerdere naar latere lagen te stromen door de invoer toe te voegen aan de uitvoer van een blok. Dit helpt het probleem van verdwijnende gradiënten te verminderen en maakt succesvolle training mogelijk van netwerken met honderden lagen, zoals ResNet-152."
        }
      },
      {
        question: {
          en: "What is the exploding gradient problem in RNNs and how is it typically addressed?",
          es: "¿Qué es el problema del gradiente explosivo en las RNNs y cómo se aborda típicamente?",
          de: "Was ist das Problem explodierender Gradienten in RNNs und wie wird es typischerweise angegangen?",
          nl: "Wat is het probleem van exploderende gradiënten in RNN's en hoe wordt dit doorgaans aangepakt?"
        },
        options: [
          { en: "Gradients become too large during backpropagation; addressed using gradient clipping", es: "Los gradientes se vuelven demasiado grandes durante retropropagación; se aborda usando recorte de gradientes", de: "Gradienten werden während der Rückpropagation zu groß; wird durch Gradient Clipping angegangen", nl: "Gradiënten worden te groot tijdens backpropagatie; aangepakt met gradiënt clipping" },
          { en: "Network explodes due to too many parameters; addressed by reducing network size", es: "La red explota debido a demasiados parámetros; se aborda reduciendo el tamaño de la red", de: "Netzwerk explodiert durch zu viele Parameter; wird durch Reduzierung der Netzwerkgröße angegangen", nl: "Netwerk explodeert vanwege te veel parameters; aangepakt door netwerkgrootte te verminderen" },
          { en: "Memory usage explodes with sequence length; addressed using truncated backpropagation", es: "El uso de memoria explota con la longitud de secuencia; se aborda usando retropropagación truncada", de: "Speicherverbrauch explodiert mit Sequenzlänge; wird durch abgeschnittene Rückpropagation angegangen", nl: "Geheugengebruik explodeert met sequentielengte; aangepakt met afgeknotte backpropagatie" },
          { en: "Computational time explodes exponentially; addressed using parallel processing", es: "El tiempo computacional explota exponencialmente; se aborda usando procesamiento paralelo", de: "Rechenzeit explodiert exponentiell; wird durch parallele Verarbeitung angegangen", nl: "Rekentijd explodeert exponentieel; aangepakt met parallelle verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "The exploding gradient problem occurs when gradients become exponentially large during backpropagation through time, causing unstable training and weight updates. Gradient clipping is the most common solution, where gradients are scaled down when their norm exceeds a threshold.",
          es: "El problema del gradiente explosivo ocurre cuando los gradientes se vuelven exponencialmente grandes durante la retropropagación a través del tiempo, causando entrenamiento inestable y actualizaciones de pesos. El recorte de gradientes es la solución más común, donde los gradientes se reducen cuando su norma excede un umbral.",
          de: "Das Problem explodierender Gradienten tritt auf wenn Gradienten während der Rückpropagation durch Zeit exponentiell groß werden und instabiles Training und Gewichtsaktualisierungen verursachen. Gradient Clipping ist die häufigste Lösung, wo Gradienten herunterskaliert werden wenn ihre Norm einen Schwellenwert überschreitet.",
          nl: "Het probleem van exploderende gradiënten treedt op wanneer gradiënten exponentieel groot worden tijdens backpropagatie door de tijd, wat instabiele training en gewichtupdates veroorzaakt. Gradiënt clipping is de meest voorkomende oplossing, waarbij gradiënten worden geschaald wanneer hun norm een drempel overschrijdt."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
