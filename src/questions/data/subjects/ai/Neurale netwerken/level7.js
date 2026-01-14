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
      },
      {
        question: {
          en: "What are transposed convolutions (deconvolutions) used for?",
          es: "¿Para qué se usan las convoluciones transpuestas (deconvoluciones)?",
          de: "Wofür werden transponierte Faltungen (Dekonvolutionen) verwendet?",
          nl: "Waarvoor worden getransponeerde convoluties (deconvoluties) gebruikt?"
        },
        options: [
          { en: "Upsampling feature maps to increase spatial dimensions, often in image generation and segmentation", es: "Aumentar muestreo de mapas características para incrementar dimensiones espaciales, menudo en generación y segmentación imágenes", de: "Upsampling von Feature-Maps um räumliche Dimensionen zu erhöhen, oft bei Bildgenerierung und Segmentierung", nl: "Upsampling van feature maps om ruimtelijke dimensies te verhogen, vaak bij beeldgeneratie en segmentatie" },
          { en: "Reversing convolution operations to recover original input", es: "Revertir operaciones de convolución para recuperar entrada original", de: "Umkehren von Faltungsoperationen um ursprüngliche Eingabe wiederherzustellen", nl: "Convolutie-operaties omkeren om originele invoer te herstellen" },
          { en: "Computing matrix transposes of convolution kernels", es: "Calcular transpuestas de matriz de núcleos de convolución", de: "Berechnung von Matrixtransposen von Faltungskernen", nl: "Matrixtransposes van convolutiekernels berekenen" },
          { en: "Performing dimensional reduction like pooling", es: "Realizar reducción dimensional como pooling", de: "Durchführung dimensionaler Reduktion wie Pooling", nl: "Dimensionale reductie uitvoeren zoals pooling" }
        ],
        correct: 0,
        explanation: {
          en: "Transposed convolutions (also called fractionally-strided convolutions) upsample feature maps by learning how to expand spatial dimensions. They're commonly used in decoder networks for tasks like semantic segmentation, image generation (GANs), and autoencoders to reconstruct or generate high-resolution outputs.",
          es: "Las convoluciones transpuestas (también llamadas convoluciones con stride fraccionario) aumentan el muestreo de mapas de características aprendiendo cómo expandir dimensiones espaciales. Se usan comúnmente en redes decodificadoras para tareas como segmentación semántica, generación de imágenes (GANs) y autoencoders para reconstruir o generar salidas de alta resolución.",
          de: "Transponierte Faltungen (auch fraktional gestreifte Faltungen genannt) führen Upsampling von Feature-Maps durch indem sie lernen räumliche Dimensionen zu erweitern. Sie werden häufig in Decoder-Netzwerken für Aufgaben wie semantische Segmentierung, Bildgenerierung (GANs) und Autoencoder verwendet um hochauflösende Ausgaben zu rekonstruieren oder zu generieren.",
          nl: "Getransponeerde convoluties (ook wel fractioneel-gestrikte convoluties genoemd) upsamples feature maps door te leren hoe ruimtelijke dimensies uit te breiden. Ze worden veel gebruikt in decoder-netwerken voor taken zoals semantische segmentatie, beeldgeneratie (GANs) en autoencoders om hoge-resolutie outputs te reconstrueren of te genereren."
        }
      },
      {
        question: {
          en: "What is sequence-to-sequence (seq2seq) learning with RNNs?",
          es: "¿Qué es el aprendizaje secuencia-a-secuencia (seq2seq) con RNNs?",
          de: "Was ist Sequenz-zu-Sequenz (Seq2Seq) Lernen mit RNNs?",
          nl: "Wat is sequentie-naar-sequentie (seq2seq) leren met RNN's?"
        },
        options: [
          { en: "Using encoder RNN to process input sequence and decoder RNN to generate output sequence", es: "Usar RNN codificador para procesar secuencia entrada y RNN decodificador para generar secuencia salida", de: "Verwendung eines Encoder-RNN um Eingabesequenz zu verarbeiten und Decoder-RNN um Ausgabesequenz zu generieren", nl: "Een encoder RNN gebruiken om invoersequentie te verwerken en decoder RNN om uitvoersequentie te genereren" },
          { en: "Processing two sequences simultaneously in parallel", es: "Procesar dos secuencias simultáneamente en paralelo", de: "Gleichzeitige parallele Verarbeitung zweier Sequenzen", nl: "Twee sequenties tegelijkertijd parallel verwerken" },
          { en: "Converting sequences from one format to another", es: "Convertir secuencias de un formato a otro", de: "Konvertierung von Sequenzen von einem Format in ein anderes", nl: "Sequenties converteren van het ene formaat naar het andere" },
          { en: "Training on sequences of length 2 only", es: "Entrenar solo en secuencias de longitud 2", de: "Training nur auf Sequenzen der Länge 2", nl: "Alleen trainen op sequenties van lengte 2" }
        ],
        correct: 0,
        explanation: {
          en: "Seq2seq models use an encoder RNN to compress the input sequence into a context vector, then a decoder RNN to generate the output sequence from this context. This architecture is fundamental for tasks like machine translation, text summarization, and dialogue systems where input and output are both variable-length sequences.",
          es: "Los modelos seq2seq usan una RNN codificadora para comprimir la secuencia de entrada en un vector de contexto, luego una RNN decodificadora para generar la secuencia de salida desde este contexto. Esta arquitectura es fundamental para tareas como traducción automática, resumen de texto y sistemas de diálogo donde entrada y salida son ambas secuencias de longitud variable.",
          de: "Seq2Seq-Modelle verwenden ein Encoder-RNN um die Eingabesequenz in einen Kontextvektor zu komprimieren, dann ein Decoder-RNN um die Ausgabesequenz aus diesem Kontext zu generieren. Diese Architektur ist fundamental für Aufgaben wie maschinelle Übersetzung, Textzusammenfassung und Dialogsysteme wo Eingabe und Ausgabe beide Sequenzen variabler Länge sind.",
          nl: "Seq2seq-modellen gebruiken een encoder RNN om de invoersequentie te comprimeren tot een contextvector, dan een decoder RNN om de uitvoersequentie uit deze context te genereren. Deze architectuur is fundamenteel voor taken zoals machinevertaling, tekstsamenvatting en dialoogsystemen waarbij invoer en uitvoer beide sequenties van variabele lengte zijn."
        }
      },
      {
        question: {
          en: "What is feature map in the context of CNNs?",
          es: "¿Qué es un mapa de características en el contexto de CNNs?",
          de: "Was ist eine Feature-Map im Kontext von CNNs?",
          nl: "Wat is een feature map in de context van CNN's?"
        },
        options: [
          { en: "Output activation of applying a specific filter across the input", es: "Activación salida aplicar filtro específico a través entrada", de: "Ausgabeaktivierung beim Anwenden eines spezifischen Filters über die Eingabe", nl: "Uitvoeractiv atie van het toepassen van een specifieke filter over de invoer" },
          { en: "A visual map showing where features are located", es: "Un mapa visual mostrando dónde están ubicadas las características", de: "Eine visuelle Karte die zeigt wo Features sich befinden", nl: "Een visuele kaart die toont waar features zich bevinden" },
          { en: "A database of all learned features in the network", es: "Una base de datos de todas las características aprendidas en la red", de: "Eine Datenbank aller gelernten Features im Netzwerk", nl: "Een database van alle geleerde features in het netwerk" },
          { en: "The spatial dimensions of the input image", es: "Las dimensiones espaciales de la imagen de entrada", de: "Die räumlichen Dimensionen des Eingabebildes", nl: "De ruimtelijke dimensies van het invoerbeeld" }
        ],
        correct: 0,
        explanation: {
          en: "A feature map is the result of applying a convolutional filter to the input or previous layer. Each filter produces one feature map that highlights certain patterns or features in the data. Multiple filters create multiple feature maps, forming the channels of the next layer.",
          es: "Un mapa de características es el resultado de aplicar un filtro convolucional a la entrada o capa anterior. Cada filtro produce un mapa de características que resalta ciertos patrones o características en los datos. Múltiples filtros crean múltiples mapas de características, formando los canales de la siguiente capa.",
          de: "Eine Feature-Map ist das Ergebnis der Anwendung eines Faltungsfilters auf die Eingabe oder vorherige Schicht. Jeder Filter produziert eine Feature-Map die bestimmte Muster oder Features in den Daten hervorhebt. Mehrere Filter erstellen mehrere Feature-Maps und bilden die Kanäle der nächsten Schicht.",
          nl: "Een feature map is het resultaat van het toepassen van een convolutiefilter op de invoer of vorige laag. Elke filter produceert één feature map die bepaalde patronen of features in de data benadrukt. Meerdere filters creëren meerdere feature maps, die de kanalen van de volgende laag vormen."
        }
      },
      {
        question: {
          en: "What is the purpose of peephole connections in LSTM cells?",
          es: "¿Cuál es el propósito de las conexiones peephole en celdas LSTM?",
          de: "Was ist der Zweck von Peephole-Verbindungen in LSTM-Zellen?",
          nl: "Wat is het doel van peephole-verbindingen in LSTM-cellen?"
        },
        options: [
          { en: "Allow gates to access cell state directly for more precise control over information flow", es: "Permitir compuertas acceder estado celda directamente para control más preciso sobre flujo información", de: "Ermöglichen Gates direkten Zugriff auf Zellzustand für präzisere Kontrolle des Informationsflusses", nl: "Gates toestaan direct toegang tot celstaat te krijgen voor preciezere controle over informatiestroom" },
          { en: "Create connections that peek at future time steps", es: "Crear conexiones que espían pasos de tiempo futuros", de: "Verbindungen erstellen die zukünftige Zeitschritte voraussehen", nl: "Verbindingen creëren die toekomstige tijdstappen inkijken" },
          { en: "Reduce the number of parameters in LSTM", es: "Reducir el número de parámetros en LSTM", de: "Reduzierung der Anzahl von Parametern in LSTM", nl: "Het aantal parameters in LSTM verminderen" },
          { en: "Enable parallel processing of LSTM operations", es: "Habilitar procesamiento paralelo de operaciones LSTM", de: "Parallele Verarbeitung von LSTM-Operationen ermöglichen", nl: "Parallelle verwerking van LSTM-operaties mogelijk maken" }
        ],
        correct: 0,
        explanation: {
          en: "Peephole connections allow the forget, input, and output gates to look directly at the cell state (not just the hidden state) when making gating decisions. This can help the LSTM make more informed decisions about what information to keep, update, or output, particularly for tasks requiring precise timing.",
          es: "Las conexiones peephole permiten a las compuertas de olvido, entrada y salida mirar directamente al estado de la celda (no solo al estado oculto) al tomar decisiones de compuerta. Esto puede ayudar a la LSTM tomar decisiones más informadas sobre qué información mantener, actualizar o emitir, particularmente para tareas que requieren temporización precisa.",
          de: "Peephole-Verbindungen ermöglichen den Forget-, Input- und Output-Gates direkt auf den Zellzustand (nicht nur den verborgenen Zustand) zu schauen beim Treffen von Gating-Entscheidungen. Dies kann der LSTM helfen informiertere Entscheidungen zu treffen über welche Informationen behalten, aktualisieren oder ausgeben werden, besonders für Aufgaben die präzises Timing erfordern.",
          nl: "Peephole-verbindingen stellen forget-, input- en output-poorten in staat direct naar de celstaat te kijken (niet alleen de verborgen staat) bij het nemen van poortbeslissingen. Dit kan de LSTM helpen beter geïnformeerde beslissingen te nemen over welke informatie te behouden, bij te werken of uit te voeren, vooral voor taken die nauwkeurige timing vereisen."
        }
      },
      {
        question: {
          en: "What is spatial pyramid pooling?",
          es: "¿Qué es el pooling de pirámide espacial?",
          de: "Was ist Spatial Pyramid Pooling?",
          nl: "Wat is spatial pyramid pooling?"
        },
        options: [
          { en: "Pooling at multiple scales to create fixed-length representation regardless of input size", es: "Pooling múltiples escalas para crear representación longitud fija independiente tamaño entrada", de: "Pooling auf mehreren Skalen um Darstellung fester Länge unabhängig von Eingabegröße zu erstellen", nl: "Pooling op meerdere schalen om representatie van vaste lengte te creëren ongeacht invoergrootte" },
          { en: "Creating pyramid-shaped pooling windows", es: "Crear ventanas de pooling en forma de pirámide", de: "Erstellung pyramidenförmiger Pooling-Fenster", nl: "Pyramide-vormige pooling-vensters creëren" },
          { en: "Stacking multiple pooling layers vertically", es: "Apilar múltiples capas de pooling verticalmente", de: "Vertikales Stapeln mehrerer Pooling-Schichten", nl: "Meerdere pooling-lagen verticaal stapelen" },
          { en: "Hierarchical pooling from coarse to fine", es: "Pooling jerárquico de grueso a fino", de: "Hierarchisches Pooling von grob zu fein", nl: "Hiërarchische pooling van grof naar fijn" }
        ],
        correct: 0,
        explanation: {
          en: "Spatial pyramid pooling divides the feature map into grids of different sizes (e.g., 1x1, 2x2, 4x4) and pools each region, then concatenates the results. This creates a fixed-length output regardless of input size, enabling CNNs to handle variable-size inputs without resizing.",
          es: "El pooling de pirámide espacial divide el mapa de características en cuadrículas de diferentes tamaños (ej. 1x1, 2x2, 4x4) y agrupa cada región, luego concatena los resultados. Esto crea una salida de longitud fija independiente del tamaño de entrada, permitiendo a las CNNs manejar entradas de tamaño variable sin redimensionar.",
          de: "Spatial Pyramid Pooling teilt die Feature-Map in Gitter verschiedener Größen (z.B. 1x1, 2x2, 4x4) und poolet jede Region, dann verkettet die Ergebnisse. Dies erstellt eine Ausgabe fester Länge unabhängig von der Eingabegröße und ermöglicht CNNs Eingaben variabler Größe ohne Größenänderung zu handhaben.",
          nl: "Spatial pyramid pooling verdeelt de feature map in rasters van verschillende groottes (bijv. 1x1, 2x2, 4x4) en poolt elk gebied, voegt dan de resultaten samen. Dit creëert een uitvoer van vaste lengte ongeacht invoergrootte, waardoor CNN's invoer van variabele grootte kunnen verwerken zonder te herschalen."
        }
      },
      {
        question: {
          en: "What is truncated backpropagation through time (TBPTT)?",
          es: "¿Qué es la retropropagación truncada a través del tiempo (TBPTT)?",
          de: "Was ist Truncated Backpropagation Through Time (TBPTT)?",
          nl: "Wat is truncated backpropagation through time (TBPTT)?"
        },
        options: [
          { en: "Limiting backpropagation to fixed number of time steps to reduce memory and computation", es: "Limitar retropropagación número fijo pasos tiempo para reducir memoria y computación", de: "Begrenzung der Rückpropagation auf feste Anzahl Zeitschritte um Speicher und Berechnung zu reduzieren", nl: "Backpropagatie beperken tot vast aantal tijdstappen om geheugen en berekening te verminderen" },
          { en: "Stopping backpropagation when gradients become too small", es: "Detener retropropagación cuando gradientes se vuelven demasiado pequeños", de: "Stoppen der Rückpropagation wenn Gradienten zu klein werden", nl: "Backpropagatie stoppen wanneer gradiënten te klein worden" },
          { en: "Removing parts of the sequence during training", es: "Eliminar partes de la secuencia durante el entrenamiento", de: "Entfernen von Teilen der Sequenz während des Trainings", nl: "Delen van de sequentie verwijderen tijdens training" },
          { en: "Using shorter sequences for faster training", es: "Usar secuencias más cortas para entrenamiento más rápido", de: "Verwendung kürzerer Sequenzen für schnelleres Training", nl: "Kortere sequenties gebruiken voor snellere training" }
        ],
        correct: 0,
        explanation: {
          en: "TBPTT limits backpropagation to a fixed number of time steps (e.g., 20-50 steps) instead of the entire sequence. This makes training long sequences computationally feasible by reducing memory requirements, though it means the network can only learn dependencies within the truncation window.",
          es: "TBPTT limita la retropropagación a un número fijo de pasos de tiempo (ej. 20-50 pasos) en lugar de toda la secuencia. Esto hace el entrenamiento de secuencias largas computacionalmente factible reduciendo requisitos de memoria, aunque significa que la red solo puede aprender dependencias dentro de la ventana de truncamiento.",
          de: "TBPTT begrenzt die Rückpropagation auf eine feste Anzahl von Zeitschritten (z.B. 20-50 Schritte) anstelle der gesamten Sequenz. Dies macht das Training langer Sequenzen rechnerisch machbar durch Reduzierung der Speicheranforderungen, obwohl es bedeutet dass das Netzwerk nur Abhängigkeiten innerhalb des Truncation-Fensters lernen kann.",
          nl: "TBPTT beperkt backpropagatie tot een vast aantal tijdstappen (bijv. 20-50 stappen) in plaats van de hele sequentie. Dit maakt training van lange sequenties computationeel haalbaar door geheugenvereisten te verminderen, hoewel het betekent dat het netwerk alleen afhankelijkheden binnen het truncatie-venster kan leren."
        }
      },
      {
        question: {
          en: "What are Neural ODEs (Ordinary Differential Equations)?",
          es: "¿Qué son las ODEs Neuronales (Ecuaciones Diferenciales Ordinarias)?",
          de: "Was sind Neuronale ODEs (Gewöhnliche Differentialgleichungen)?",
          nl: "Wat zijn Neural ODEs (Gewone Differentiaalvergelijkingen)?"
        },
        options: [
          { en: "Treating neural network layers as continuous transformations described by differential equations", es: "Tratar capas de red neuronal como transformaciones continuas descritas por ecuaciones diferenciales", de: "Behandlung neuronaler Netzwerkschichten als kontinuierliche Transformationen beschrieben durch Differentialgleichungen", nl: "Neurale netwerklagen behandelen als continue transformaties beschreven door differentiaalvergelijkingen" },
          { en: "Networks that solve differential equations", es: "Redes que resuelven ecuaciones diferenciales", de: "Netzwerke die Differentialgleichungen lösen", nl: "Netwerken die differentiaalvergelijkingen oplossen" },
          { en: "Ordinary networks trained on differential data", es: "Redes ordinarias entrenadas en datos diferenciales", de: "Gewöhnliche Netzwerke trainiert auf differentiellen Daten", nl: "Gewone netwerken getraind op differentiële data" },
          { en: "Mathematical notation for neural networks", es: "Notación matemática para redes neuronales", de: "Mathematische Notation für neuronale Netzwerke", nl: "Wiskundige notatie voor neurale netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Neural ODEs parameterize the continuous dynamics of hidden states using differential equations rather than discrete layers. Instead of stacking layers, they model depth as continuous time evolution. This enables memory-efficient training, adaptive computation, and continuous-time modeling, useful for irregularly-sampled time series.",
          es: "Las ODEs neuronales parametrizan la dinámica continua de estados ocultos usando ecuaciones diferenciales en lugar de capas discretas. En lugar de apilar capas, modelan profundidad como evolución temporal continua. Esto permite entrenamiento eficiente en memoria, computación adaptativa y modelado de tiempo continuo, útil para series temporales muestreadas irregularmente.",
          de: "Neuronale ODEs parametrisieren die kontinuierliche Dynamik versteckter Zustände mit Differentialgleichungen statt diskreter Schichten. Statt Schichten zu stapeln modellieren sie Tiefe als kontinuierliche Zeitentwicklung. Dies ermöglicht speichereffizientes Training, adaptive Berechnung und kontinuierliche Zeitmodellierung, nützlich für unregelmäßig gesampelte Zeitreihen.",
          nl: "Neural ODEs parametriseren de continue dynamica van verborgen toestanden met differentiaalvergelijkingen in plaats van discrete lagen. In plaats van lagen te stapelen modelleren ze diepte als continue tijdsevolutie. Dit maakt geheugen-efficiënte training mogelijk, adaptieve berekening en continue-tijd modellering, nuttig voor onregelmatig gesamplede tijdreeksen."
        }
      },
      {
        question: {
          en: "What is weight tying in neural networks?",
          es: "¿Qué es el enlace de pesos en redes neuronales?",
          de: "Was ist Weight Tying in neuronalen Netzwerken?",
          nl: "Wat is weight tying in neurale netwerken?"
        },
        options: [
          { en: "Sharing weights between different parts of the network to reduce parameters and improve generalization", es: "Compartir pesos entre diferentes partes de la red para reducir parámetros y mejorar generalización", de: "Teilen von Gewichten zwischen verschiedenen Teilen des Netzwerks um Parameter zu reduzieren und Generalisierung zu verbessern", nl: "Gewichten delen tussen verschillende delen van het netwerk om parameters te reduceren en generalisatie te verbeteren" },
          { en: "Tying weights together to prevent them from changing", es: "Atar pesos juntos para evitar que cambien", de: "Gewichte zusammenbinden um zu verhindern dass sie sich ändern", nl: "Gewichten samenbinden om te voorkomen dat ze veranderen" },
          { en: "Constraining weight values to specific ranges", es: "Restringir valores de peso a rangos específicos", de: "Beschränken von Gewichtswerten auf bestimmte Bereiche", nl: "Gewichtswaarden beperken tot specifieke bereiken" },
          { en: "Initializing weights with identical values", es: "Inicializar pesos con valores idénticos", de: "Initialisieren von Gewichten mit identischen Werten", nl: "Gewichten initialiseren met identieke waarden" }
        ],
        correct: 0,
        explanation: {
          en: "Weight tying shares the same weights across different network components. Common examples include tying embedding and softmax weights in language models, or using the same filters across time steps in RNNs. This reduces model size, prevents overfitting, and enforces useful constraints based on domain knowledge.",
          es: "El enlace de pesos comparte los mismos pesos entre diferentes componentes de red. Ejemplos comunes incluyen enlazar pesos de embedding y softmax en modelos de lenguaje, o usar mismos filtros a través de pasos de tiempo en RNN. Esto reduce tamaño de modelo, previene sobreajuste y aplica restricciones útiles basadas en conocimiento del dominio.",
          de: "Weight Tying teilt dieselben Gewichte über verschiedene Netzwerkkomponenten. Häufige Beispiele umfassen Binden von Embedding- und Softmax-Gewichten in Sprachmodellen, oder Verwendung derselben Filter über Zeitschritte in RNNs. Dies reduziert Modellgröße, verhindert Überanpassung und erzwingt nützliche Beschränkungen basierend auf Domänenwissen.",
          nl: "Weight tying deelt dezelfde gewichten over verschillende netwerkcomponenten. Veelvoorkomende voorbeelden zijn het binden van embedding en softmax gewichten in taalmodellen, of gebruik van dezelfde filters over tijdstappen in RNNs. Dit reduceert modelgrootte, voorkomt overfitting en dwingt nuttige beperkingen af gebaseerd op domeinkennis."
        }
      },
      {
        question: {
          en: "What is multi-task learning?",
          es: "¿Qué es el aprendizaje multi-tarea?",
          de: "Was ist Multi-Task-Learning?",
          nl: "Wat is multi-task learning?"
        },
        options: [
          { en: "Training a single model simultaneously on multiple related tasks to improve generalization through shared representations", es: "Entrenar un solo modelo simultáneamente en múltiples tareas relacionadas para mejorar generalización mediante representaciones compartidas", de: "Training eines einzelnen Modells gleichzeitig auf mehreren verwandten Aufgaben um Generalisierung durch gemeinsame Repräsentationen zu verbessern", nl: "Één model gelijktijdig trainen op meerdere gerelateerde taken om generalisatie te verbeteren door gedeelde representaties" },
          { en: "Training multiple separate models for different tasks", es: "Entrenar múltiples modelos separados para diferentes tareas", de: "Training mehrerer separater Modelle für verschiedene Aufgaben", nl: "Meerdere afzonderlijke modellen trainen voor verschillende taken" },
          { en: "Teaching networks to multitask efficiently", es: "Enseñar a redes a realizar múltiples tareas eficientemente", de: "Netzwerke lehren effizient Multitasking durchzuführen", nl: "Netwerken leren efficiënt te multitasken" },
          { en: "Running multiple training jobs in parallel", es: "Ejecutar múltiples trabajos de entrenamiento en paralelo", de: "Mehrere Trainingsjobs parallel ausführen", nl: "Meerdere trainingsjobs parallel uitvoeren" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-task learning trains one network on several related tasks simultaneously, sharing most of the architecture. Tasks benefit from shared low-level features while task-specific heads handle unique aspects. This improves sample efficiency, reduces overfitting, and often outperforms single-task models, especially when data is scarce.",
          es: "El aprendizaje multi-tarea entrena una red en varias tareas relacionadas simultáneamente, compartiendo la mayoría de la arquitectura. Las tareas se benefician de características de bajo nivel compartidas mientras cabezales específicos de tarea manejan aspectos únicos. Esto mejora eficiencia de muestras, reduce sobreajuste y a menudo supera a modelos de tarea única, especialmente cuando datos son escasos.",
          de: "Multi-Task-Learning trainiert ein Netzwerk gleichzeitig auf mehreren verwandten Aufgaben, teilt den Großteil der Architektur. Aufgaben profitieren von gemeinsamen Low-Level-Features während aufgabenspezifische Köpfe einzigartige Aspekte handhaben. Dies verbessert Stichprobeneffizienz, reduziert Überanpassung und übertrifft oft Einzelaufgaben-Modelle, besonders wenn Daten knapp sind.",
          nl: "Multi-task learning traint één netwerk op meerdere gerelateerde taken tegelijk, deelt het grootste deel van de architectuur. Taken profiteren van gedeelde low-level features terwijl taak-specifieke hoofden unieke aspecten behandelen. Dit verbetert sample-efficiëntie, vermindert overfitting en presteert vaak beter dan single-task modellen, vooral wanneer data schaars is."
        }
      },
      {
        question: {
          en: "What is a hyper-network?",
          es: "¿Qué es una hiper-red?",
          de: "Was ist ein Hyper-Netzwerk?",
          nl: "Wat is een hyper-netwerk?"
        },
        options: [
          { en: "A neural network that generates weights for another network, enabling dynamic architectures", es: "Red neuronal que genera pesos para otra red, permitiendo arquitecturas dinámicas", de: "Neuronales Netzwerk das Gewichte für ein anderes Netzwerk generiert, ermöglicht dynamische Architekturen", nl: "Neuraal netwerk dat gewichten genereert voor een ander netwerk, maakt dynamische architecturen mogelijk" },
          { en: "A very large network with many parameters", es: "Red muy grande con muchos parámetros", de: "Sehr großes Netzwerk mit vielen Parametern", nl: "Zeer groot netwerk met veel parameters" },
          { en: "Network for hyperparameter optimization", es: "Red para optimización de hiperparámetros", de: "Netzwerk für Hyperparameter-Optimierung", nl: "Netwerk voor hyperparameter optimalisatie" },
          { en: "Network with hyperbolic activation functions", es: "Red con funciones de activación hiperbólicas", de: "Netzwerk mit hyperbolischen Aktivierungsfunktionen", nl: "Netwerk met hyperbolische activatiefuncties" }
        ],
        correct: 0,
        explanation: {
          en: "Hyper-networks use one network to generate the weights of another network. The hyper-network takes as input some conditioning information (like task description, sample features, or layer index) and outputs weight parameters. This enables weight sharing, fast adaptation to new tasks, and compression through factorization.",
          es: "Las hiper-redes usan una red para generar los pesos de otra red. La hiper-red toma como entrada información de condicionamiento (como descripción de tarea, características de muestra o índice de capa) y produce parámetros de peso. Esto permite compartir pesos, adaptación rápida a nuevas tareas y compresión mediante factorización.",
          de: "Hyper-Netzwerke verwenden ein Netzwerk um Gewichte eines anderen Netzwerks zu generieren. Das Hyper-Netzwerk nimmt als Eingabe Konditionierungsinformation (wie Aufgabenbeschreibung, Stichprobenmerkmale oder Schichtindex) und gibt Gewichtsparameter aus. Dies ermöglicht Gewichtsteilung, schnelle Anpassung an neue Aufgaben und Kompression durch Faktorisierung.",
          nl: "Hyper-netwerken gebruiken één netwerk om gewichten van een ander netwerk te genereren. Het hyper-netwerk neemt als invoer conditioneringsinformatie (zoals taakbeschrijving, sample features of laagindex) en voert gewichtsparameters uit. Dit maakt gewichtsdeling mogelijk, snelle aanpassing aan nieuwe taken en compressie door factorisatie."
        }
      },
      {
        question: {
          en: "What is the difference between online and offline learning?",
          es: "¿Cuál es la diferencia entre aprendizaje en línea y offline?",
          de: "Was ist der Unterschied zwischen Online- und Offline-Lernen?",
          nl: "Wat is het verschil tussen online en offline leren?"
        },
        options: [
          { en: "Online learning updates model incrementally as new data arrives, offline learning uses entire dataset at once", es: "Aprendizaje en línea actualiza modelo incrementalmente cuando llegan nuevos datos, offline usa todo conjunto de datos a la vez", de: "Online-Lernen aktualisiert Modell inkrementell wenn neue Daten ankommen, Offline-Lernen verwendet gesamten Datensatz auf einmal", nl: "Online leren update model incrementeel wanneer nieuwe data arriveert, offline leren gebruikt hele dataset ineens" },
          { en: "Online learning requires internet, offline doesn't", es: "Aprendizaje en línea requiere internet, offline no", de: "Online-Lernen erfordert Internet, Offline nicht", nl: "Online leren vereist internet, offline niet" },
          { en: "Online learning is faster than offline learning", es: "Aprendizaje en línea es más rápido que offline", de: "Online-Lernen ist schneller als Offline-Lernen", nl: "Online leren is sneller dan offline leren" },
          { en: "They are the same thing", es: "Son lo mismo", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" }
        ],
        correct: 0,
        explanation: {
          en: "Online learning processes data sequentially and updates the model after each example or small batch, adapting to streaming data. Offline (batch) learning trains on the entire fixed dataset before deployment. Online learning is crucial for scenarios with evolving data distributions or when re-training on full datasets is impractical.",
          es: "El aprendizaje en línea procesa datos secuencialmente y actualiza modelo después de cada ejemplo o pequeño lote, adaptándose a datos de streaming. Aprendizaje offline (por lotes) entrena en todo conjunto de datos fijo antes de despliegue. Aprendizaje en línea es crucial para escenarios con distribuciones de datos en evolución o cuando reentrenamiento en conjuntos completos es impracticable.",
          de: "Online-Lernen verarbeitet Daten sequenziell und aktualisiert Modell nach jedem Beispiel oder kleinem Batch, passt sich Streaming-Daten an. Offline-(Batch-)Lernen trainiert auf gesamtem festen Datensatz vor Bereitstellung. Online-Lernen ist entscheidend für Szenarien mit sich entwickelnden Datenverteilungen oder wenn Neutraining auf vollen Datensätzen unpraktisch ist.",
          nl: "Online leren verwerkt data sequentieel en update model na elk voorbeeld of kleine batch, past zich aan aan streaming data. Offline (batch) leren traint op hele vaste dataset voor deployment. Online leren is cruciaal voor scenario's met evoluerende dataverdelingen of wanneer hertrainen op volledige datasets onpraktisch is."
        }
      },
      {
        question: {
          en: "What is neural tangent kernel (NTK) theory?",
          es: "¿Qué es la teoría del kernel tangente neuronal (NTK)?",
          de: "Was ist die Neural Tangent Kernel (NTK) Theorie?",
          nl: "Wat is neural tangent kernel (NTK) theorie?"
        },
        options: [
          { en: "Mathematical framework showing wide neural networks behave like kernel methods during training", es: "Marco matemático que muestra que redes neuronales anchas se comportan como métodos de kernel durante entrenamiento", de: "Mathematischer Rahmen der zeigt dass breite neuronale Netzwerke sich wie Kernel-Methoden während Training verhalten", nl: "Wiskundig raamwerk dat toont dat brede neurale netwerken zich gedragen als kernel methoden tijdens training" },
          { en: "Theory about neural network kernels in operating systems", es: "Teoría sobre kernels de redes neuronales en sistemas operativos", de: "Theorie über neuronale Netzwerk-Kernel in Betriebssystemen", nl: "Theorie over neurale netwerk kernels in besturingssystemen" },
          { en: "Method for tangent plane optimization", es: "Método para optimización de plano tangente", de: "Methode für Tangentialebenenoptimierung", nl: "Methode voor tangent vlak optimalisatie" },
          { en: "Tangential approach to neural architecture", es: "Enfoque tangencial a arquitectura neuronal", de: "Tangentialer Ansatz zur neuronalen Architektur", nl: "Tangentiële benadering van neurale architectuur" }
        ],
        correct: 0,
        explanation: {
          en: "NTK theory provides a theoretical lens for understanding infinitely wide neural networks by showing they converge to kernel regression with a specific kernel (the neural tangent kernel). This connects deep learning to classical kernel methods and helps explain generalization, training dynamics, and architecture choices.",
          es: "La teoría NTK proporciona lente teórica para entender redes neuronales infinitamente anchas mostrando que convergen a regresión kernel con kernel específico (kernel tangente neuronal). Esto conecta aprendizaje profundo con métodos de kernel clásicos y ayuda explicar generalización, dinámicas de entrenamiento y elecciones de arquitectura.",
          de: "NTK-Theorie bietet theoretische Linse zum Verständnis unendlich breiter neuronaler Netzwerke durch Zeigen dass sie zu Kernel-Regression mit spezifischem Kernel (neuronaler Tangenten-Kernel) konvergieren. Dies verbindet Deep Learning mit klassischen Kernel-Methoden und hilft Generalisierung, Trainingsdynamik und Architekturwahlen zu erklären.",
          nl: "NTK theorie biedt theoretische lens voor begrip van oneindig brede neurale netwerken door te tonen dat ze convergeren naar kernel regressie met specifieke kernel (neural tangent kernel). Dit verbindt deep learning met klassieke kernel methoden en helpt generalisatie, trainingsdynamica en architectuurkeuzes verklaren."
        }
      },
      {
        question: {
          en: "What is the double descent phenomenon?",
          es: "¿Qué es el fenómeno de doble descenso?",
          de: "Was ist das Double Descent Phänomen?",
          nl: "Wat is het double descent fenomeen?"
        },
        options: [
          { en: "Test error first decreases, then increases with model complexity, then decreases again in overparameterized regime", es: "Error de prueba primero disminuye, luego aumenta con complejidad de modelo, luego disminuye nuevamente en régimen sobreparametrizado", de: "Testfehler nimmt zuerst ab, dann zu mit Modellkomplexität, dann wieder ab im überparametrisierten Regime", nl: "Test error neemt eerst af, dan toe met modelcomplexiteit, dan weer af in overparametrized regime" },
          { en: "Training loss decreasing twice during training", es: "Pérdida de entrenamiento disminuyendo dos veces durante entrenamiento", de: "Trainingsverlust nimmt zweimal während Training ab", nl: "Trainingsverlies twee keer afnemen tijdens training" },
          { en: "Using gradient descent twice on same data", es: "Usar descenso de gradiente dos veces en mismos datos", de: "Gradientenabstieg zweimal auf denselben Daten verwenden", nl: "Gradient descent twee keer gebruiken op dezelfde data" },
          { en: "Two separate phases of model convergence", es: "Dos fases separadas de convergencia de modelo", de: "Zwei separate Phasen der Modellkonvergenz", nl: "Twee afzonderlijke fasen van modelconvergentie" }
        ],
        correct: 0,
        explanation: {
          en: "Double descent challenges classical bias-variance tradeoff by showing test error can decrease again when models become heavily overparameterized. After the interpolation threshold where models fit training data perfectly, further increasing capacity improves generalization. This phenomenon helps explain why huge overparameterized models (like GPT) work so well.",
          es: "El doble descenso desafía compensación clásica sesgo-varianza mostrando que error de prueba puede disminuir nuevamente cuando modelos se vuelven fuertemente sobreparametrizados. Después del umbral de interpolación donde modelos ajustan datos de entrenamiento perfectamente, aumentar más capacidad mejora generalización. Este fenómeno ayuda explicar por qué modelos sobreparametrizados enormes (como GPT) funcionan tan bien.",
          de: "Double Descent fordert klassischen Bias-Varianz-Tradeoff heraus durch Zeigen dass Testfehler wieder abnehmen kann wenn Modelle stark überparametrisiert werden. Nach Interpolationsschwelle wo Modelle Trainingsdaten perfekt anpassen, verbessert weitere Kapazitätserhöhung Generalisierung. Dieses Phänomen hilft erklären warum riesige überparametrisierte Modelle (wie GPT) so gut funktionieren.",
          nl: "Double descent daagt klassieke bias-variance tradeoff uit door te tonen dat test error opnieuw kan afnemen wanneer modellen zwaar overparameterized worden. Na interpolatie drempel waar modellen trainingsdata perfect fitten, verbetert verdere capaciteitsverhoging generalisatie. Dit fenomeen helpt verklaren waarom enorme overparameterized modellen (zoals GPT) zo goed werken."
        }
      },
      {
        question: {
          en: "What is neural network interpretation?",
          es: "¿Qué es la interpretación de redes neuronales?",
          de: "Was ist neuronale Netzwerk-Interpretation?",
          nl: "Wat is neuraal netwerk interpretatie?"
        },
        options: [
          { en: "Methods to understand and explain how neural networks make decisions and what they learn", es: "Métodos para entender y explicar cómo redes neuronales toman decisiones y qué aprenden", de: "Methoden um zu verstehen und zu erklären wie neuronale Netzwerke Entscheidungen treffen und was sie lernen", nl: "Methoden om te begrijpen en verklaren hoe neurale netwerken beslissingen nemen en wat ze leren" },
          { en: "Translating neural network outputs to human language", es: "Traducir salidas de red neuronal a lenguaje humano", de: "Übersetzen von neuronalen Netzwerk-Ausgaben in menschliche Sprache", nl: "Neurale netwerk outputs vertalen naar menselijke taal" },
          { en: "Reading neural network architecture diagrams", es: "Leer diagramas de arquitectura de red neuronal", de: "Lesen von neuronalen Netzwerkarchitektur-Diagrammen", nl: "Neurale netwerkarchitectuur diagrammen lezen" },
          { en: "Converting network predictions to probabilities", es: "Convertir predicciones de red a probabilidades", de: "Netzwerkvorhersagen zu Wahrscheinlichkeiten konvertieren", nl: "Netwerkvoorspellingen converteren naar waarschijnlijkheden" }
        ],
        correct: 0,
        explanation: {
          en: "Neural network interpretation (explainability/interpretability) encompasses techniques to make black-box models understandable. Methods include attention visualization, saliency maps, LIME, SHAP, concept activation vectors, and probing classifiers. This is crucial for trust, debugging, fairness auditing, and deployment in high-stakes domains like healthcare and finance.",
          es: "La interpretación de redes neuronales (explicabilidad/interpretabilidad) abarca técnicas para hacer modelos caja negra comprensibles. Métodos incluyen visualización de atención, mapas de saliencia, LIME, SHAP, vectores de activación de conceptos y clasificadores de sondeo. Esto es crucial para confianza, depuración, auditoría de equidad y despliegue en dominios de alto riesgo como salud y finanzas.",
          de: "Neuronale Netzwerk-Interpretation (Erklärbarkeit/Interpretierbarkeit) umfasst Techniken um Black-Box-Modelle verständlich zu machen. Methoden umfassen Aufmerksamkeitsvisualisierung, Saliency Maps, LIME, SHAP, Konzeptaktivierungsvektoren und Probing-Klassifikatoren. Dies ist entscheidend für Vertrauen, Debugging, Fairness-Auditing und Bereitstellung in risikoreichen Domänen wie Gesundheitswesen und Finanzen.",
          nl: "Neuraal netwerk interpretatie (verklaarbaar heid/interpreteerbaarheid) omvat technieken om black-box modellen begrijpelijk te maken. Methoden zijn attention visualisatie, saliency maps, LIME, SHAP, concept activation vectors en probing classifiers. Dit is cruciaal voor vertrouwen, debugging, fairness auditing en deployment in high-stakes domeinen zoals gezondheidszorg en financiën."
        }
      },
      {
        question: {
          en: "What is the bias-variance tradeoff?",
          es: "¿Qué es la compensación sesgo-varianza?",
          de: "Was ist der Bias-Varianz-Tradeoff?",
          nl: "Wat is de bias-variance tradeoff?"
        },
        options: [
          { en: "Balance between model's ability to fit training data (low bias) and generalize to new data (low variance)", es: "Equilibrio entre capacidad de modelo para ajustar datos entrenamiento (bajo sesgo) y generalizar a nuevos datos (baja varianza)", de: "Balance zwischen Fähigkeit des Modells Trainingsdaten anzupassen (niedriger Bias) und auf neue Daten zu generalisieren (niedrige Varianz)", nl: "Balans tussen vermogen van model om trainingsdata te fitten (lage bias) en generaliseren naar nieuwe data (lage variantie)" },
          { en: "Choice between biased and unbiased datasets", es: "Elección entre conjuntos de datos sesgados y no sesgados", de: "Wahl zwischen voreingenommenen und unvoreingenommenen Datensätzen", nl: "Keuze tussen bevooroordeelde en onbevooroordeelde datasets" },
          { en: "Trading off bias in activation functions", es: "Compensar sesgo en funciones de activación", de: "Kompromiss bei Bias in Aktivierungsfunktionen", nl: "Afwegen van bias in activatiefuncties" },
          { en: "Balancing model fairness and accuracy", es: "Equilibrar equidad y precisión del modelo", de: "Ausbalancieren von Modell-Fairness und Genauigkeit", nl: "Balanceren van model eerlijkheid en nauwkeurigheid" }
        ],
        correct: 0,
        explanation: {
          en: "The bias-variance tradeoff describes the balance between underfitting (high bias - model too simple) and overfitting (high variance - model too complex). Simple models have high bias but low variance; complex models have low bias but high variance. The goal is finding the sweet spot that minimizes total error on unseen data.",
          es: "La compensación sesgo-varianza describe el equilibrio entre subajuste (alto sesgo - modelo demasiado simple) y sobreajuste (alta varianza - modelo demasiado complejo). Modelos simples tienen alto sesgo pero baja varianza; modelos complejos tienen bajo sesgo pero alta varianza. El objetivo es encontrar punto óptimo que minimiza error total en datos no vistos.",
          de: "Der Bias-Varianz-Tradeoff beschreibt Balance zwischen Underfitting (hoher Bias - Modell zu einfach) und Overfitting (hohe Varianz - Modell zu komplex). Einfache Modelle haben hohen Bias aber niedrige Varianz; komplexe Modelle haben niedrigen Bias aber hohe Varianz. Ziel ist Sweet Spot zu finden der Gesamtfehler auf ungesehenen Daten minimiert.",
          nl: "De bias-variance tradeoff beschrijft de balans tussen underfitting (hoge bias - model te simpel) en overfitting (hoge variantie - model te complex). Eenvoudige modellen hebben hoge bias maar lage variantie; complexe modellen hebben lage bias maar hoge variantie. Doel is sweet spot vinden die totale fout op ongeziene data minimaliseert."
        }
      },
      {
        question: {
          en: "What is gradient accumulation?",
          es: "¿Qué es la acumulación de gradiente?",
          de: "Was ist Gradientenakkumulation?",
          nl: "Wat is gradiënt accumulatie?"
        },
        options: [
          { en: "Summing gradients over multiple mini-batches before updating weights to simulate larger batch sizes", es: "Sumar gradientes sobre múltiples mini-lotes antes de actualizar pesos para simular tamaños de lote más grandes", de: "Summieren von Gradienten über mehrere Mini-Batches vor Gewichtsaktualisierung um größere Batch-Größen zu simulieren", nl: "Gradiënten optellen over meerdere mini-batches voor gewicht update om grotere batchgroottes te simuleren" },
          { en: "Storing all gradients throughout training", es: "Almacenar todos los gradientes durante todo el entrenamiento", de: "Speichern aller Gradienten während gesamtem Training", nl: "Alle gradiënten opslaan gedurende hele training" },
          { en: "Gradients increasing over time", es: "Gradientes aumentando con el tiempo", de: "Gradienten die im Laufe der Zeit zunehmen", nl: "Gradiënten die toenemen over tijd" },
          { en: "Accumulating momentum in optimization", es: "Acumular momento en optimización", de: "Akkumulieren von Momentum in Optimierung", nl: "Momentum accumuleren in optimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient accumulation computes gradients on small batches but accumulates them over several iterations before updating weights. This allows training with effectively larger batch sizes than GPU memory permits, useful for large models or high-resolution images. The effective batch size equals mini-batch size × accumulation steps.",
          es: "La acumulación de gradiente calcula gradientes en lotes pequeños pero los acumula sobre varias iteraciones antes de actualizar pesos. Esto permite entrenar con tamaños de lote efectivamente más grandes que lo que permite memoria GPU, útil para modelos grandes o imágenes de alta resolución. Tamaño de lote efectivo igual tamaño mini-lote × pasos acumulación.",
          de: "Gradientenakkumulation berechnet Gradienten auf kleinen Batches aber akkumuliert sie über mehrere Iterationen vor Gewichtsaktualisierung. Dies ermöglicht Training mit effektiv größeren Batch-Größen als GPU-Speicher erlaubt, nützlich für große Modelle oder hochauflösende Bilder. Effektive Batch-Größe gleich Mini-Batch-Größe × Akkumulationsschritte.",
          nl: "Gradiënt accumulatie berekent gradiënten op kleine batches maar accumuleert ze over meerdere iteraties voor gewicht update. Dit maakt training mogelijk met effectief grotere batchgroottes dan GPU geheugen toelaat, nuttig voor grote modellen of hoge-resolutie afbeeldingen. Effectieve batchgrootte gelijk aan mini-batch grootte × accumulatiestappen."
        }
      },
      {
        question: {
          en: "What is gradient checkpointing?",
          es: "¿Qué es el punto de control de gradiente?",
          de: "Was ist Gradient Checkpointing?",
          nl: "Wat is gradiënt checkpointing?"
        },
        options: [
          { en: "Trading computation for memory by recomputing intermediate activations during backpropagation instead of storing them", es: "Intercambiar computación por memoria recomputando activaciones intermedias durante retropropagación en lugar de almacenarlas", de: "Tauschen von Berechnung gegen Speicher durch Neuberechnung intermediärer Aktivierungen während Rückpropagation statt sie zu speichern", nl: "Berekening ruilen voor geheugen door tussenactivaties opnieuw te berekenen tijdens backpropagation in plaats van ze op te slaan" },
          { en: "Saving model checkpoints at gradient thresholds", es: "Guardar puntos de control de modelo en umbrales de gradiente", de: "Speichern von Modell-Checkpoints bei Gradienten-Schwellenwerten", nl: "Model checkpoints opslaan bij gradiënt drempels" },
          { en: "Checking gradient values before updating", es: "Verificar valores de gradiente antes de actualizar", de: "Prüfen von Gradientenwerten vor Aktualisierung", nl: "Gradiëntwaarden controleren voor update" },
          { en: "Storing gradient history for analysis", es: "Almacenar historial de gradiente para análisis", de: "Speichern von Gradientenverlauf für Analyse", nl: "Gradiëntgeschiedenis opslaan voor analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient checkpointing reduces memory usage during training by not storing all intermediate activations. Instead, it saves only selected checkpoints and recomputes activations as needed during backpropagation. This memory-computation tradeoff enables training much larger models or using bigger batch sizes on limited hardware.",
          es: "El punto de control de gradiente reduce uso de memoria durante entrenamiento no almacenando todas las activaciones intermedias. En cambio, guarda solo puntos de control seleccionados y recomputa activaciones según sea necesario durante retropropagación. Esta compensación memoria-computación permite entrenar modelos mucho más grandes o usar tamaños de lote más grandes en hardware limitado.",
          de: "Gradient Checkpointing reduziert Speichernutzung während Training durch Nichtspeichern aller intermediären Aktivierungen. Stattdessen speichert es nur ausgewählte Checkpoints und berechnet Aktivierungen bei Bedarf während Rückpropagation neu. Dieser Speicher-Berechnung-Tradeoff ermöglicht Training viel größerer Modelle oder Verwendung größerer Batch-Größen auf begrenzter Hardware.",
          nl: "Gradiënt checkpointing vermindert geheugengebruik tijdens training door niet alle tussenactivaties op te slaan. In plaats daarvan slaat het alleen geselecteerde checkpoints op en herberekent activeringen indien nodig tijdens backpropagation. Deze geheugen-berekening tradeoff maakt training mogelijk van veel grotere modellen of gebruik van grotere batchgroottes op beperkte hardware."
        }
      },
      {
        question: {
          en: "What is mixed precision training?",
          es: "¿Qué es el entrenamiento de precisión mixta?",
          de: "Was ist Mixed-Precision-Training?",
          nl: "Wat is mixed precision training?"
        },
        options: [
          { en: "Using both float16 and float32 data types during training to speed up computation while maintaining accuracy", es: "Usar tipos de datos float16 y float32 durante entrenamiento para acelerar computación mientras mantiene precisión", de: "Verwendung von float16 und float32 Datentypen während Training um Berechnung zu beschleunigen bei Erhalt der Genauigkeit", nl: "Zowel float16 als float32 datatypen gebruiken tijdens training om berekening te versnellen terwijl nauwkeurigheid behouden blijft" },
          { en: "Training with varying levels of precision across layers", es: "Entrenar con niveles variables de precisión entre capas", de: "Training mit variierenden Präzisionsniveaus über Schichten", nl: "Trainen met variërende precisieniveaus over lagen" },
          { en: "Combining different accuracy metrics", es: "Combinar diferentes métricas de precisión", de: "Kombinieren verschiedener Genauigkeitsmetriken", nl: "Verschillende nauwkeurigheidsmetrieken combineren" },
          { en: "Using approximate and exact calculations together", es: "Usar cálculos aproximados y exactos juntos", de: "Verwendung approximativer und exakter Berechnungen zusammen", nl: "Gebruik van benaderende en exacte berekeningen samen" }
        ],
        correct: 0,
        explanation: {
          en: "Mixed precision training uses float16 (half precision) for most operations to leverage faster tensor cores and reduce memory, while keeping critical operations and master weights in float32 to prevent numerical instability. Loss scaling prevents gradient underflow. This can train models 2-3x faster with minimal accuracy loss.",
          es: "El entrenamiento de precisión mixta usa float16 (media precisión) para mayoría de operaciones para aprovechar tensor cores más rápidos y reducir memoria, mientras mantiene operaciones críticas y pesos maestros en float32 para prevenir inestabilidad numérica. Escalado de pérdida previene underflow de gradiente. Esto puede entrenar modelos 2-3x más rápido con pérdida mínima de precisión.",
          de: "Mixed-Precision-Training verwendet float16 (halbe Präzision) für meisten Operationen um schnellere Tensor-Cores zu nutzen und Speicher zu reduzieren, während kritische Operationen und Master-Gewichte in float32 gehalten werden um numerische Instabilität zu verhindern. Loss Scaling verhindert Gradienten-Underflow. Dies kann Modelle 2-3x schneller trainieren mit minimalem Genauigkeitsverlust.",
          nl: "Mixed precision training gebruikt float16 (halve precisie) voor meeste operaties om snellere tensor cores te benutten en geheugen te reduceren, terwijl kritieke operaties en master gewichten in float32 gehouden worden om numerieke instabiliteit te voorkomen. Loss scaling voorkomt gradiënt underflow. Dit kan modellen 2-3x sneller trainen met minimaal nauwkeurigheidsverlies."
        }
      },
      {
        question: {
          en: "What is automatic differentiation (autodiff)?",
          es: "¿Qué es la diferenciación automática (autodiff)?",
          de: "Was ist automatische Differenzierung (autodiff)?",
          nl: "Wat is automatische differentiatie (autodiff)?"
        },
        options: [
          { en: "Technique to automatically compute gradients of functions by applying chain rule to computational graphs", es: "Técnica para computar automáticamente gradientes de funciones aplicando regla de la cadena a grafos computacionales", de: "Technik zum automatischen Berechnen von Gradienten von Funktionen durch Anwendung der Kettenregel auf Berechnungsgraphen", nl: "Techniek om automatisch gradiënten van functies te berekenen door kettingregel toe te passen op computational graphs" },
          { en: "Automatically detecting differences between models", es: "Detectar automáticamente diferencias entre modelos", de: "Automatisches Erkennen von Unterschieden zwischen Modellen", nl: "Automatisch detecteren van verschillen tussen modellen" },
          { en: "Differentiation that requires no manual intervention", es: "Diferenciación que no requiere intervención manual", de: "Differenzierung die keine manuelle Intervention erfordert", nl: "Differentiatie die geen handmatige interventie vereist" },
          { en: "Computing derivatives symbolically", es: "Computar derivadas simbólicamente", de: "Berechnen von Ableitungen symbolisch", nl: "Afgeleiden symbolisch berekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Automatic differentiation is the foundation of modern deep learning frameworks. It builds a computational graph of operations and automatically computes exact gradients using the chain rule (backpropagation). Unlike numerical differentiation (slow, approximate) or symbolic differentiation (expression explosion), autodiff is fast, exact, and handles complex computations efficiently.",
          es: "La diferenciación automática es fundamento de frameworks modernos de aprendizaje profundo. Construye grafo computacional de operaciones y calcula automáticamente gradientes exactos usando regla de la cadena (retropropagación). A diferencia de diferenciación numérica (lenta, aproximada) o simbólica (explosión de expresiones), autodiff es rápida, exacta y maneja computaciones complejas eficientemente.",
          de: "Automatische Differenzierung ist Grundlage moderner Deep-Learning-Frameworks. Sie baut Berechnungsgraph von Operationen und berechnet automatisch exakte Gradienten mit Kettenregel (Rückpropagation). Anders als numerische Differenzierung (langsam, approximativ) oder symbolische Differenzierung (Ausdrucksexplosion), ist Autodiff schnell, exakt und handhabt komplexe Berechnungen effizient.",
          nl: "Automatische differentiatie is de basis van moderne deep learning frameworks. Het bouwt een computational graph van operaties en berekent automatisch exacte gradiënten met kettingregel (backpropagation). In tegenstelling tot numerieke differentiatie (traag, benaderend) of symbolische differentiatie (expressie explosie), is autodiff snel, exact en behandelt complexe berekeningen efficiënt."
        }
      },
      {
        question: {
          en: "What is the purpose of batch size in training?",
          es: "¿Cuál es el propósito del tamaño de lote en entrenamiento?",
          de: "Was ist der Zweck der Batch-Größe beim Training?",
          nl: "Wat is het doel van batchgrootte in training?"
        },
        options: [
          { en: "Determines number of samples processed together before updating weights, affecting training speed and stability", es: "Determina número de muestras procesadas juntas antes de actualizar pesos, afectando velocidad y estabilidad de entrenamiento", de: "Bestimmt Anzahl Proben die zusammen verarbeitet werden vor Gewichtsaktualisierung, beeinflusst Trainingsgeschwindigkeit und Stabilität", nl: "Bepaalt aantal samples verwerkt samen voor gewicht update, beïnvloedt trainingssnelheid en stabiliteit" },
          { en: "Sets the total number of training examples", es: "Establece número total de ejemplos de entrenamiento", de: "Legt Gesamtzahl der Trainingsbeispiele fest", nl: "Stelt totaal aantal trainingsvoorbeelden in" },
          { en: "Controls how many epochs to train", es: "Controla cuántas épocas entrenar", de: "Steuert wie viele Epochen zu trainieren", nl: "Bepaalt hoeveel epochs te trainen" },
          { en: "Defines network architecture size", es: "Define tamaño de arquitectura de red", de: "Definiert Netzwerkarchitekturgröße", nl: "Definieert netwerkarchitectuur grootte" }
        ],
        correct: 0,
        explanation: {
          en: "Batch size balances computational efficiency, memory usage, and optimization dynamics. Larger batches provide more stable gradients and better hardware utilization but need more memory and may generalize worse. Smaller batches add noise to gradients (regularization effect) but are less stable. Typical sizes range from 32 to 1024 depending on task and hardware.",
          es: "El tamaño de lote equilibra eficiencia computacional, uso de memoria y dinámicas de optimización. Lotes más grandes proporcionan gradientes más estables y mejor utilización de hardware pero necesitan más memoria y pueden generalizar peor. Lotes más pequeños añaden ruido a gradientes (efecto de regularización) pero son menos estables. Tamaños típicos varían de 32 a 1024 dependiendo de tarea y hardware.",
          de: "Batch-Größe balanciert rechnerische Effizienz, Speichernutzung und Optimierungsdynamik. Größere Batches bieten stabilere Gradienten und bessere Hardware-Auslastung aber brauchen mehr Speicher und können schlechter generalisieren. Kleinere Batches fügen Rauschen zu Gradienten hinzu (Regularisierungseffekt) aber sind weniger stabil. Typische Größen reichen von 32 bis 1024 abhängig von Aufgabe und Hardware.",
          nl: "Batchgrootte balanceert computationele efficiëntie, geheugengebruik en optimalisatiedynamica. Grotere batches bieden stabielere gradiënten en beter hardwaregebruik maar hebben meer geheugen nodig en kunnen slechter generaliseren. Kleinere batches voegen ruis toe aan gradiënten (regularisatie-effect) maar zijn minder stabiel. Typische groottes variëren van 32 tot 1024 afhankelijk van taak en hardware."
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
