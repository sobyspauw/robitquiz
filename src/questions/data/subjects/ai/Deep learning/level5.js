// Deep Learning Quiz - Level 5: Recurrent Neural Networks and Sequences
(function() {
  const level5 = {
    name: {
      en: "Deep Learning Level 5",
      es: "Aprendizaje Profundo Nivel 5",
      de: "Deep Learning Stufe 5",
      nl: "Deep Learning Level 5"
    },
    questions: [
      {
        question: {
          en: "What are Recurrent Neural Networks (RNNs) specifically designed to handle?",
          es: "¿Qué están específicamente diseñadas a manejar las Redes Neuronales Recurrentes (RNN)?",
          de: "Wofür sind Recurrent Neural Networks (RNNs) spezifisch entworfen?",
          nl: "Waarvoor zijn Recurrent Neural Networks (RNNs) specifiek ontworpen?"
        },
        options: [
          { en: "Sequential data where current output depends on previous inputs", es: "Datos secuenciales donde la salida actual depende de entradas previas", de: "Sequenzielle Daten wo aktuelle Ausgabe von vorherigen Eingaben abhängt", nl: "Sequentiële data waarbij huidige output afhangt van voorgaande inputs" },
          { en: "Only image processing tasks", es: "Solo tareas de procesamiento de imágenes", de: "Nur Bildverarbeitungsaufgaben", nl: "Alleen beeldverwerkingstaken" },
          { en: "Static data without temporal relationships", es: "Datos estáticos sin relaciones temporales", de: "Statische Daten ohne zeitliche Beziehungen", nl: "Statische data zonder temporele relaties" },
          { en: "Parallel processing of independent inputs", es: "Procesamiento paralelo de entradas independientes", de: "Parallele Verarbeitung unabhängiger Eingaben", nl: "Parallelle verwerking van onafhankelijke inputs" }
        ],
        correct: 0,
        explanation: {
          en: "RNNs have memory that allows them to process sequences like text, speech, or time series data where context from previous time steps is crucial for understanding.",
          es: "Las RNN tienen memoria que les permite procesar secuencias como texto, habla o datos de series temporales donde el contexto de pasos temporales previos es crucial para la comprensión.",
          de: "RNNs haben Gedächtnis das ihnen ermöglicht Sequenzen wie Text, Sprache oder Zeitreihendaten zu verarbeiten wo Kontext aus vorherigen Zeitschritten entscheidend für das Verständnis ist.",
          nl: "RNNs hebben geheugen waardoor ze sequenties kunnen verwerken zoals tekst, spraak of tijdreeksdata waarbij context van vorige tijdstappen cruciaal is voor begrip."
        }
      },
      {
        question: {
          en: "What problem do LSTMs (Long Short-Term Memory) solve compared to traditional RNNs?",
          es: "¿Qué problema resuelven las LSTM (Memoria a Largo y Corto Plazo) comparadas con RNN tradicionales?",
          de: "Welches Problem lösen LSTMs (Long Short-Term Memory) im Vergleich zu traditionellen RNNs?",
          nl: "Welk probleem lossen LSTMs (Long Short-Term Memory) op vergeleken met traditionele RNNs?"
        },
        options: [
          { en: "They can remember information for much longer sequences without forgetting", es: "Pueden recordar información por secuencias mucho más largas sin olvidar", de: "Sie können Informationen für viel längere Sequenzen ohne Vergessen behalten", nl: "Ze kunnen informatie voor veel langere sequenties onthouden zonder te vergeten" },
          { en: "They process data faster than regular RNNs", es: "Procesan datos más rápido que RNN regulares", de: "Sie verarbeiten Daten schneller als normale RNNs", nl: "Ze verwerken data sneller dan reguliere RNNs" },
          { en: "They require less computational power", es: "Requieren menos poder computacional", de: "Sie benötigen weniger Rechenleistung", nl: "Ze hebben minder rekenkracht nodig" },
          { en: "They work only with shorter sequences", es: "Trabajan solo con secuencias más cortas", de: "Sie arbeiten nur mit kürzeren Sequenzen", nl: "Ze werken alleen met kortere sequenties" }
        ],
        correct: 0,
        explanation: {
          en: "LSTMs use gates to control information flow, solving the vanishing gradient problem that prevents traditional RNNs from learning long-term dependencies in sequences.",
          es: "Las LSTM usan compuertas para controlar el flujo de información, resolviendo el problema del gradiente que desaparece que previene a RNN tradicionales de aprender dependencias a largo plazo en secuencias.",
          de: "LSTMs verwenden Gates um Informationsfluss zu kontrollieren, lösen das Problem verschwindender Gradienten das traditionelle RNNs daran hindert langfristige Abhängigkeiten in Sequenzen zu lernen.",
          nl: "LSTMs gebruiken gates om informatiestromen te controleren, lossen het verdwijnende gradiënt probleem op dat traditionele RNNs verhindert om lange termijn afhankelijkheden in sequenties te leren."
        }
      },
      {
        question: {
          en: "What is attention mechanism in deep learning?",
          es: "¿Qué es el mecanismo de atención en aprendizaje profundo?",
          de: "Was ist der Aufmerksamkeitsmechanismus in Deep Learning?",
          nl: "Wat is attention mechanisme in deep learning?"
        },
        options: [
          { en: "A way for models to focus on different parts of input when making predictions", es: "Una forma para que modelos se enfoquen en diferentes partes de entrada al hacer predicciones", de: "Ein Weg für Modelle sich auf verschiedene Teile der Eingabe beim Treffen von Vorhersagen zu konzentrieren", nl: "Een manier voor modellen om zich te focussen op verschillende delen van input bij het maken van voorspellingen" },
          { en: "A method to get human attention for model training", es: "Un método para obtener atención humana para entrenamiento de modelos", de: "Eine Methode um menschliche Aufmerksamkeit für Modelltraining zu erhalten", nl: "Een methode om menselijke aandacht te krijgen voor modeltraining" },
          { en: "A technique to make models pay attention to errors", es: "Una técnica para hacer que modelos presten atención a errores", de: "Eine Technik um Modelle auf Fehler aufmerksam zu machen", nl: "Een techniek om modellen aandacht te laten besteden aan fouten" },
          { en: "A way to focus computational resources", es: "Una forma de enfocar recursos computacionales", de: "Ein Weg um Rechenressourcen zu fokussieren", nl: "Een manier om computationele bronnen te focussen" }
        ],
        correct: 0,
        explanation: {
          en: "Attention allows models to dynamically weight different parts of the input sequence, enabling better performance on tasks like translation where different input words are relevant for different outputs.",
          es: "La atención permite a modelos ponderar dinámicamente diferentes partes de la secuencia de entrada, permitiendo mejor rendimiento en tareas como traducción donde diferentes palabras de entrada son relevantes para diferentes salidas.",
          de: "Aufmerksamkeit erlaubt Modellen verschiedene Teile der Eingabesequenz dynamisch zu gewichten, ermöglicht bessere Leistung bei Aufgaben wie Übersetzung wo verschiedene Eingabewörter für verschiedene Ausgaben relevant sind.",
          nl: "Attention stelt modellen in staat om verschillende delen van de inputsequentie dynamisch te wegen, maakt betere prestaties mogelijk bij taken zoals vertaling waarbij verschillende inputwoorden relevant zijn voor verschillende outputs."
        }
      },
      {
        question: {
          en: "What are autoencoders used for in deep learning?",
          es: "¿Para qué se usan los autocodificadores en aprendizaje profundo?",
          de: "Wofür werden Autoencoder in Deep Learning verwendet?",
          nl: "Waarvoor worden autoencoders gebruikt in deep learning?"
        },
        options: [
          { en: "Learning compressed representations of data for dimensionality reduction and reconstruction", es: "Aprender representaciones comprimidas de datos para reducción de dimensionalidad y reconstrucción", de: "Komprimierte Darstellungen von Daten für Dimensionalitätsreduktion und Rekonstruktion lernen", nl: "Gecomprimeerde representaties van data leren voor dimensionaliteitsreductie en reconstructie" },
          { en: "Automatically encoding text into different languages", es: "Codificar automáticamente texto en diferentes idiomas", de: "Text automatisch in verschiedene Sprachen kodieren", nl: "Automatisch tekst coderen naar verschillende talen" },
          { en: "Creating automatic code generators", es: "Crear generadores de código automático", de: "Automatische Code-Generatoren erstellen", nl: "Automatische codegeneratoren maken" },
          { en: "Encoding data for secure transmission", es: "Codificar datos para transmisión segura", de: "Daten für sichere Übertragung kodieren", nl: "Data coderen voor veilige transmissie" }
        ],
        correct: 0,
        explanation: {
          en: "Autoencoders learn to compress input data into a lower-dimensional representation and then reconstruct it, useful for noise reduction, feature learning, and anomaly detection.",
          es: "Los autocodificadores aprenden a comprimir datos de entrada en una representación de menor dimensión y luego reconstruirla, útil para reducción de ruido, aprendizaje de características y detección de anomalías.",
          de: "Autoencoder lernen Eingabedaten in eine niedrigerdimensionale Darstellung zu komprimieren und dann zu rekonstruieren, nützlich für Rauschreduktion, Feature-Learning und Anomalieerkennung.",
          nl: "Autoencoders leren inputdata te comprimeren tot een lagerdimensionale representatie en deze dan te reconstrueren, nuttig voor ruisreductie, feature learning en anomaliedetectie."
        }
      },
      {
        question: {
          en: "What is the main advantage of using pre-trained embeddings like Word2Vec or GloVe?",
          es: "¿Cuál es la principal ventaja de usar embeddings pre-entrenados como Word2Vec o GloVe?",
          de: "Was ist der Hauptvorteil der Verwendung vortrainierter Embeddings wie Word2Vec oder GloVe?",
          nl: "Wat is het hoofdvoordeel van het gebruik van voorgetrainde embeddings zoals Word2Vec of GloVe?"
        },
        options: [
          { en: "They provide rich semantic representations of words based on large text corpora", es: "Proporcionan representaciones semánticas ricas de palabras basadas en grandes corpus de texto", de: "Sie bieten reiche semantische Darstellungen von Wörtern basierend auf großen Textkorpora", nl: "Ze bieden rijke semantische representaties van woorden gebaseerd op grote tekstcorpora" },
          { en: "They make text processing faster", es: "Hacen el procesamiento de texto más rápido", de: "Sie machen Textverarbeitung schneller", nl: "Ze maken tekstverwerking sneller" },
          { en: "They convert all words to the same format", es: "Convierten todas las palabras al mismo formato", de: "Sie konvertieren alle Wörter in dasselbe Format", nl: "Ze converteren alle woorden naar hetzelfde formaat" },
          { en: "They reduce the vocabulary size", es: "Reducen el tamaño del vocabulario", de: "Sie reduzieren die Vokabulargröße", nl: "Ze verminderen de vocabulaire grootte" }
        ],
        correct: 0,
        explanation: {
          en: "Pre-trained embeddings capture semantic relationships between words learned from vast text datasets, providing meaningful vector representations that improve performance on downstream NLP tasks.",
          es: "Los embeddings pre-entrenados capturan relaciones semánticas entre palabras aprendidas de vastos conjuntos de datos de texto, proporcionando representaciones vectoriales significativas que mejoran rendimiento en tareas NLP posteriores.",
          de: "Vortrainierte Embeddings erfassen semantische Beziehungen zwischen Wörtern die aus umfangreichen Textdatensätzen gelernt wurden, bieten bedeutungsvolle Vektordarstellungen die Leistung bei nachgelagerten NLP-Aufgaben verbessern.",
          nl: "Voorgetrainde embeddings leggen semantische relaties tussen woorden vast geleerd uit uitgebreide tekstdatasets, bieden betekenisvolle vectorrepresentaties die prestaties bij downstream NLP taken verbeteren."
        }
      },
      {
        question: {
          en: "What is the main limitation of traditional RNNs that LSTMs address?",
          es: "¿Cuál es la principal limitación de RNNs tradicionales que las LSTM abordan?",
          de: "Was ist die Hauptbeschränkung traditioneller RNNs die LSTMs angehen?",
          nl: "Wat is de hoofdbeperking van traditionele RNNs die LSTMs aanpakken?"
        },
        options: [
          { en: "Vanishing gradients prevent learning of long-term dependencies in sequences", es: "Los gradientes que desaparecen previenen el aprendizaje de dependencias a largo plazo en secuencias", de: "Verschwindende Gradienten verhindern das Lernen langfristiger Abhängigkeiten in Sequenzen", nl: "Verdwijnende gradiënten voorkomen het leren van lange termijn afhankelijkheden in sequenties" },
          { en: "RNNs cannot process variable-length sequences", es: "Las RNNs no pueden procesar secuencias de longitud variable", de: "RNNs können keine Sequenzen variabler Länge verarbeiten", nl: "RNNs kunnen geen sequenties van variabele lengte verwerken" },
          { en: "Traditional RNNs are too slow to train", es: "Las RNNs tradicionales son muy lentas para entrenar", de: "Traditionelle RNNs sind zu langsam zu trainieren", nl: "Traditionele RNNs zijn te langzaam om te trainen" },
          { en: "RNNs require too much memory", es: "Las RNNs requieren demasiada memoria", de: "RNNs benötigen zu viel Speicher", nl: "RNNs vereisen te veel geheugen" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional RNNs suffer from vanishing gradients, making it difficult to learn dependencies between distant time steps. LSTMs solve this with their gating mechanisms that allow selective memory retention.",
          es: "Las RNNs tradicionales sufren de gradientes que desaparecen, dificultando aprender dependencias entre pasos temporales distantes. Las LSTM resuelven esto con sus mecanismos de compuertas que permiten retención selectiva de memoria.",
          de: "Traditionelle RNNs leiden unter verschwindenden Gradienten, erschweren das Lernen von Abhängigkeiten zwischen entfernten Zeitschritten. LSTMs lösen dies mit ihren Gating-Mechanismen die selektive Speicherretention ermöglichen.",
          nl: "Traditionele RNNs lijden onder verdwijnende gradiënten, maken het leren van afhankelijkheden tussen verre tijdstappen moeilijk. LSTMs lossen dit op met hun gating mechanismen die selectieve geheugenretentie mogelijk maken."
        }
      },
      {
        question: {
          en: "What are the three main gates in an LSTM cell?",
          es: "¿Cuáles son las tres compuertas principales en una celda LSTM?",
          de: "Was sind die drei Hauptgates in einer LSTM-Zelle?",
          nl: "Wat zijn de drie hoofdgates in een LSTM cel?"
        },
        options: [
          { en: "Forget gate, input gate, and output gate", es: "Compuerta de olvido, compuerta de entrada y compuerta de salida", de: "Forget Gate, Input Gate und Output Gate", nl: "Forget gate, input gate en output gate" },
          { en: "Memory gate, processing gate, and transfer gate", es: "Compuerta de memoria, compuerta de procesamiento y compuerta de transferencia", de: "Memory Gate, Processing Gate und Transfer Gate", nl: "Memory gate, processing gate en transfer gate" },
          { en: "Read gate, write gate, and delete gate", es: "Compuerta de lectura, compuerta de escritura y compuerta de eliminación", de: "Read Gate, Write Gate und Delete Gate", nl: "Read gate, write gate en delete gate" },
          { en: "Forward gate, backward gate, and lateral gate", es: "Compuerta hacia adelante, compuerta hacia atrás y compuerta lateral", de: "Forward Gate, Backward Gate und Lateral Gate", nl: "Forward gate, backward gate en lateral gate" }
        ],
        correct: 0,
        explanation: {
          en: "The forget gate decides what information to discard, the input gate determines what new information to store, and the output gate controls what parts of the cell state to output.",
          es: "La compuerta de olvido decide qué información descartar, la compuerta de entrada determina qué nueva información almacenar, y la compuerta de salida controla qué partes del estado celular producir.",
          de: "Das Forget Gate entscheidet welche Informationen verworfen werden, das Input Gate bestimmt welche neuen Informationen gespeichert werden, und das Output Gate kontrolliert welche Teile des Zellzustands ausgegeben werden.",
          nl: "De forget gate beslist welke informatie weg te gooien, de input gate bepaalt welke nieuwe informatie op te slaan, en de output gate controleert welke delen van de celstaat uit te voeren."
        }
      },
      {
        question: {
          en: "What is a GRU (Gated Recurrent Unit) and how does it differ from LSTM?",
          es: "¿Qué es una GRU (Unidad Recurrente con Compuertas) y cómo difiere de LSTM?",
          de: "Was ist eine GRU (Gated Recurrent Unit) und wie unterscheidet sie sich von LSTM?",
          nl: "Wat is een GRU (Gated Recurrent Unit) en hoe verschilt het van LSTM?"
        },
        options: [
          { en: "GRU has only two gates (reset and update) instead of three, making it simpler and faster while maintaining similar performance", es: "GRU tiene solo dos compuertas (reset y actualización) en lugar de tres, haciéndola más simple y rápida manteniendo rendimiento similar", de: "GRU hat nur zwei Gates (Reset und Update) anstatt drei, macht sie einfacher und schneller bei ähnlicher Leistung", nl: "GRU heeft slechts twee gates (reset en update) in plaats van drie, maakt het eenvoudiger en sneller met vergelijkbare prestaties" },
          { en: "GRU is designed specifically for computer vision tasks", es: "GRU está diseñada específicamente para tareas de visión computacional", de: "GRU ist speziell für Computer Vision Aufgaben entworfen", nl: "GRU is specifiek ontworpen voor computer vision taken" },
          { en: "GRU cannot handle variable-length sequences", es: "GRU no puede manejar secuencias de longitud variable", de: "GRU kann keine Sequenzen variabler Länge handhaben", nl: "GRU kan geen sequenties van variabele lengte verwerken" },
          { en: "GRU is an older version of LSTM", es: "GRU es una versión anterior de LSTM", de: "GRU ist eine ältere Version von LSTM", nl: "GRU is een oudere versie van LSTM" }
        ],
        correct: 0,
        explanation: {
          en: "GRUs simplify LSTM architecture by combining the forget and input gates into an update gate, and merging cell state and hidden state, resulting in fewer parameters and faster computation.",
          es: "Las GRU simplifican la arquitectura LSTM combinando las compuertas de olvido y entrada en una compuerta de actualización, y fusionando estado celular y estado oculto, resultando en menos parámetros y computación más rápida.",
          de: "GRUs vereinfachen LSTM-Architektur durch Kombination der Forget- und Input-Gates zu einem Update-Gate, und Verschmelzung von Zellzustand und verborgenem Zustand, resultiert in weniger Parametern und schnellerer Berechnung.",
          nl: "GRUs vereenvoudigen LSTM architectuur door forget en input gates te combineren tot een update gate, en cel staat en verborgen staat samen te voegen, resulteert in minder parameters en snellere berekening."
        }
      },
      {
        question: {
          en: "What is bidirectional RNN and when is it useful?",
          es: "¿Qué es una RNN bidireccional y cuándo es útil?",
          de: "Was ist eine bidirektionale RNN und wann ist sie nützlich?",
          nl: "Wat is een bidirectionele RNN en wanneer is het nuttig?"
        },
        options: [
          { en: "Processes sequences in both forward and backward directions to capture context from both past and future", es: "Procesa secuencias en direcciones hacia adelante y hacia atrás para capturar contexto del pasado y futuro", de: "Verarbeitet Sequenzen in Vorwärts- und Rückwärtsrichtung um Kontext aus Vergangenheit und Zukunft zu erfassen", nl: "Verwerkt sequenties in zowel voorwaartse als achterwaartse richting om context van zowel verleden als toekomst vast te leggen" },
          { en: "Can train on two different datasets simultaneously", es: "Puede entrenar en dos conjuntos de datos diferentes simultáneamente", de: "Kann auf zwei verschiedenen Datensätzen gleichzeitig trainieren", nl: "Kan gelijktijdig trainen op twee verschillende datasets" },
          { en: "Uses two different types of RNN cells", es: "Usa dos tipos diferentes de celdas RNN", de: "Verwendet zwei verschiedene Arten von RNN-Zellen", nl: "Gebruikt twee verschillende soorten RNN cellen" },
          { en: "Processes input and output in both directions", es: "Procesa entrada y salida en ambas direcciones", de: "Verarbeitet Eingabe und Ausgabe in beide Richtungen", nl: "Verwerkt input en output in beide richtingen" }
        ],
        correct: 0,
        explanation: {
          en: "Bidirectional RNNs are particularly useful for tasks where the full sequence is available (like machine translation or sentiment analysis) as they can access information from both directions at each time step.",
          es: "Las RNN bidireccionales son particularmente útiles para tareas donde la secuencia completa está disponible (como traducción automática o análisis de sentimientos) ya que pueden acceder información de ambas direcciones en cada paso temporal.",
          de: "Bidirektionale RNNs sind besonders nützlich für Aufgaben wo die vollständige Sequenz verfügbar ist (wie maschinelle Übersetzung oder Sentimentanalyse) da sie Informationen aus beiden Richtungen bei jedem Zeitschritt zugreifen können.",
          nl: "Bidirectionele RNNs zijn bijzonder nuttig voor taken waar de volledige sequentie beschikbaar is (zoals machinevertaling of sentimentanalyse) omdat ze informatie uit beide richtingen kunnen benaderen bij elke tijdstap."
        }
      },
      {
        question: {
          en: "What is sequence-to-sequence (seq2seq) learning?",
          es: "¿Qué es el aprendizaje secuencia a secuencia (seq2seq)?",
          de: "Was ist Sequenz-zu-Sequenz (seq2seq) Lernen?",
          nl: "Wat is sequence-to-sequence (seq2seq) leren?"
        },
        options: [
          { en: "A framework using encoder-decoder architecture to transform input sequences into output sequences of potentially different lengths", es: "Marco con arquitectura codificador-decodificador para transformar secuencias de entrada en salida de diferentes longitudes", de: "Framework mit Encoder-Decoder-Architektur um Eingabesequenzen in Ausgabesequenzen verschiedener Längen zu transformieren", nl: "Framework met encoder-decoder architectuur om invoersequenties te transformeren naar uitvoersequenties van verschillende lengtes" },
          { en: "Learning to recognize patterns in sequential data only", es: "Aprender a reconocer patrones solo en datos secuenciales", de: "Lernen Muster nur in sequenziellen Daten zu erkennen", nl: "Leren om patronen alleen in sequentiële data te herkennen" },
          { en: "Converting sequences to fixed-length vectors", es: "Convertir secuencias a vectores de longitud fija", de: "Sequenzen in Vektoren fester Länge umwandeln", nl: "Sequenties converteren naar vectoren van vaste lengte" },
          { en: "Training RNNs on multiple sequences simultaneously", es: "Entrenar RNNs en múltiples secuencias simultáneamente", de: "RNNs auf mehreren Sequenzen gleichzeitig trainieren", nl: "RNNs trainen op meerdere sequenties tegelijkertijd" }
        ],
        correct: 0,
        explanation: {
          en: "Seq2seq models use an encoder RNN to compress input sequences into fixed-size representations, then a decoder RNN to generate output sequences, enabling tasks like translation and summarization.",
          es: "Los modelos seq2seq usan una RNN codificadora para comprimir secuencias de entrada en representaciones de tamaño fijo, luego una RNN decodificadora para generar secuencias de salida, habilitando tareas como traducción y resumen.",
          de: "Seq2seq-Modelle verwenden eine Encoder-RNN um Eingabesequenzen in Repräsentationen fester Größe zu komprimieren, dann eine Decoder-RNN um Ausgabesequenzen zu generieren, ermöglichen Aufgaben wie Übersetzung und Zusammenfassung.",
          nl: "Seq2seq modellen gebruiken een encoder RNN om invoersequenties te comprimeren tot representaties van vaste grootte, dan een decoder RNN om uitvoersequenties te genereren, maken taken zoals vertaling en samenvatting mogelijk."
        }
      },
      {
        question: {
          en: "What is teacher forcing in RNN training?",
          es: "¿Qué es teacher forcing en entrenamiento de RNN?",
          de: "Was ist Teacher Forcing im RNN-Training?",
          nl: "Wat is teacher forcing in RNN training?"
        },
        options: [
          { en: "Using ground truth outputs as inputs during training instead of the model's own predictions to stabilize learning", es: "Usar salidas de verdad fundamental como entradas durante entrenamiento en lugar de predicciones del modelo para estabilizar", de: "Verwendung von Ground Truth Ausgaben als Eingaben während Training anstatt eigener Vorhersagen um Lernen zu stabilisieren", nl: "Gebruik van ground truth outputs als inputs tijdens training in plaats van eigen voorspellingen om leren te stabiliseren" },
          { en: "A method where the teacher manually adjusts RNN weights", es: "Un método donde el maestro ajusta manualmente pesos de RNN", de: "Eine Methode wo der Lehrer RNN-Gewichte manuell anpasst", nl: "Een methode waarbij de leraar handmatig RNN gewichten aanpast" },
          { en: "Forcing the model to learn only from positive examples", es: "Forzar al modelo a aprender solo de ejemplos positivos", de: "Das Modell zwingen nur aus positiven Beispielen zu lernen", nl: "Het model dwingen om alleen van positieve voorbeelden te leren" },
          { en: "Training RNNs with multiple teachers simultaneously", es: "Entrenar RNNs con múltiples maestros simultáneamente", de: "RNNs mit mehreren Lehrern gleichzeitig trainieren", nl: "RNNs trainen met meerdere leraren tegelijkertijd" }
        ],
        correct: 0,
        explanation: {
          en: "Teacher forcing accelerates training by providing correct inputs at each step, but can create exposure bias where the model becomes dependent on perfect inputs and struggles with its own predictions during inference.",
          es: "Teacher forcing acelera entrenamiento proporcionando entradas correctas en cada paso, pero puede crear sesgo de exposición donde el modelo se vuelve dependiente de entradas perfectas y lucha con sus propias predicciones durante inferencia.",
          de: "Teacher Forcing beschleunigt Training durch Bereitstellung korrekter Eingaben bei jedem Schritt, kann aber Exposure Bias erzeugen wo das Modell abhängig von perfekten Eingaben wird und mit eigenen Vorhersagen während Inferenz kämpft.",
          nl: "Teacher forcing versnelt training door correcte inputs bij elke stap te bieden, maar kan exposure bias creëren waarbij het model afhankelijk wordt van perfecte inputs en worstelt met eigen voorspellingen tijdens inferentie."
        }
      },
      {
        question: {
          en: "What is the exploding gradient problem in RNNs and how is it addressed?",
          es: "¿Cuál es el problema del gradiente que explota en RNNs y cómo se aborda?",
          de: "Was ist das Problem explodierender Gradienten in RNNs und wie wird es angegangen?",
          nl: "Wat is het exploderende gradiënt probleem in RNNs en hoe wordt het aangepakt?"
        },
        options: [
          { en: "Gradients become extremely large during backpropagation, solved by gradient clipping to limit their magnitude", es: "Los gradientes se vuelven extremadamente grandes durante retropropagación, resuelto por recorte de gradientes para limitar su magnitud", de: "Gradienten werden extrem groß während Backpropagation, gelöst durch Gradient Clipping um ihre Größe zu begrenzen", nl: "Gradiënten worden extreem groot tijdens backpropagation, opgelost door gradient clipping om hun magnitude te beperken" },
          { en: "RNN cells explode due to too much data", es: "Las celdas RNN explotan debido a demasiados datos", de: "RNN-Zellen explodieren wegen zu vieler Daten", nl: "RNN cellen exploderen door te veel data" },
          { en: "The network becomes unstable and crashes", es: "La red se vuelve inestable y falla", de: "Das Netzwerk wird instabil und stürzt ab", nl: "Het netwerk wordt instabiel en crasht" },
          { en: "Memory usage increases exponentially", es: "El uso de memoria aumenta exponencialmente", de: "Speicherverbrauch steigt exponentiell", nl: "Geheugengebruik stijgt exponentieel" }
        ],
        correct: 0,
        explanation: {
          en: "Exploding gradients occur when gradients grow exponentially during backpropagation through time. Gradient clipping sets a threshold to prevent gradients from exceeding a maximum value, maintaining training stability.",
          es: "Los gradientes que explotan ocurren cuando gradientes crecen exponencialmente durante retropropagación a través del tiempo. El recorte de gradientes establece un umbral para prevenir que gradientes excedan un valor máximo, manteniendo estabilidad de entrenamiento.",
          de: "Explodierende Gradienten treten auf wenn Gradienten exponentiell während Backpropagation durch Zeit wachsen. Gradient Clipping setzt eine Schwelle um zu verhindern dass Gradienten einen maximalen Wert überschreiten, erhält Trainingsstabilität.",
          nl: "Exploderende gradiënten treden op wanneer gradiënten exponentieel groeien tijdens backpropagation door tijd. Gradient clipping stelt een drempel in om te voorkomen dat gradiënten een maximale waarde overschrijden, behoudt trainingsstabiliteit."
        }
      },
      {
        question: {
          en: "What are embedding layers and why are they important for sequence modeling?",
          es: "¿Qué son las capas de embedding y por qué son importantes para modelado de secuencias?",
          de: "Was sind Embedding-Schichten und warum sind sie wichtig für Sequenzmodellierung?",
          nl: "Wat zijn embedding layers en waarom zijn ze belangrijk voor sequentiemodellering?"
        },
        options: [
          { en: "Dense vector representations of discrete tokens that capture semantic relationships and are learned during training", es: "Representaciones vectoriales densas de tokens discretos que capturan relaciones semánticas y se aprenden durante entrenamiento", de: "Dichte Vektorrepräsentationen diskreter Token die semantische Beziehungen erfassen und während Training gelernt werden", nl: "Dichte vectorrepresentaties van discrete tokens die semantische relaties vastleggen en geleerd worden tijdens training" },
          { en: "Layers that embed the network into hardware", es: "Capas que embeben la red en hardware", de: "Schichten die das Netzwerk in Hardware einbetten", nl: "Lagen die het netwerk in hardware inbedden" },
          { en: "Hidden layers that store sequence information", es: "Capas ocultas que almacenan información de secuencia", de: "Versteckte Schichten die Sequenzinformationen speichern", nl: "Verborgen lagen die sequentie-informatie opslaan" },
          { en: "Layers that compress input sequences", es: "Capas que comprimen secuencias de entrada", de: "Schichten die Eingabesequenzen komprimieren", nl: "Lagen die invoersequenties comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "Embedding layers convert discrete tokens (like words) into continuous vector spaces where similar items are close together, enabling neural networks to work with categorical data and learn meaningful representations.",
          es: "Las capas de embedding convierten tokens discretos (como palabras) en espacios vectoriales continuos donde elementos similares están cerca, permitiendo a redes neuronales trabajar con datos categóricos y aprender representaciones significativas.",
          de: "Embedding-Schichten konvertieren diskrete Token (wie Wörter) in kontinuierliche Vektorräume wo ähnliche Elemente nah beieinander sind, ermöglichen neuronalen Netzwerken mit kategorialen Daten zu arbeiten und bedeutungsvolle Repräsentationen zu lernen.",
          nl: "Embedding layers converteren discrete tokens (zoals woorden) naar continue vectorruimtes waar vergelijkbare items dicht bij elkaar zijn, stellen neurale netwerken in staat om met categorische data te werken en betekenisvolle representaties te leren."
        }
      },
      {
        question: {
          en: "What is the difference between many-to-one, one-to-many, and many-to-many RNN architectures?",
          es: "¿Cuál es la diferencia entre arquitecturas RNN muchos-a-uno, uno-a-muchos y muchos-a-muchos?",
          de: "Was ist der Unterschied zwischen Viele-zu-Eins, Eins-zu-Viele und Viele-zu-Viele RNN-Architekturen?",
          nl: "Wat is het verschil tussen veel-naar-één, één-naar-veel en veel-naar-veel RNN architecturen?"
        },
        options: [
          { en: "Many-to-one: sequence to single output (sentiment), one-to-many: single to sequence (captioning), many-to-many: sequence to sequence (translation)", es: "Muchos-a-uno: secuencia a salida (sentimiento), uno-a-muchos: único a secuencia (subtítulos), muchos-a-muchos: secuencia a secuencia", de: "Viele-zu-Eins: Sequenz zu Ausgabe (Sentiment), Eins-zu-Viele: Einzel zu Sequenz (Beschriftung), Viele-zu-Viele: Sequenz zu Sequenz", nl: "Veel-naar-één: sequentie naar output (sentiment), één-naar-veel: enkel naar sequentie (bijschrift), veel-naar-veel: sequentie naar sequentie" },
          { en: "They refer to the number of layers in the network", es: "Se refieren al número de capas en la red", de: "Sie beziehen sich auf die Anzahl der Schichten im Netzwerk", nl: "Ze verwijzen naar het aantal lagen in het netwerk" },
          { en: "They describe different training strategies", es: "Describen diferentes estrategias de entrenamiento", de: "Sie beschreiben verschiedene Trainingsstrategien", nl: "Ze beschrijven verschillende trainingsstrategieën" },
          { en: "They indicate the size of the input data", es: "Indican el tamaño de los datos de entrada", de: "Sie zeigen die Größe der Eingabedaten an", nl: "Ze geven de grootte van de invoerdata aan" }
        ],
        correct: 0,
        explanation: {
          en: "These architectures define the input-output relationship: many-to-one aggregates sequence information to single decision, one-to-many expands single input to sequence, many-to-many transforms one sequence to another.",
          es: "Estas arquitecturas definen la relación entrada-salida: muchos-a-uno agrega información de secuencia a decisión única, uno-a-muchos expande entrada única a secuencia, muchos-a-muchos transforma una secuencia a otra.",
          de: "Diese Architekturen definieren die Eingabe-Ausgabe-Beziehung: Viele-zu-Eins aggregiert Sequenzinformationen zu einzelner Entscheidung, Eins-zu-Viele erweitert einzelne Eingabe zu Sequenz, Viele-zu-Viele transformiert eine Sequenz zu einer anderen.",
          nl: "Deze architecturen definiëren de input-output relatie: veel-naar-één aggregeert sequentie-informatie tot enkele beslissing, één-naar-veel breidt enkele input uit tot sequentie, veel-naar-veel transformeert één sequentie naar een andere."
        }
      },
      {
        question: {
          en: "What is backpropagation through time (BPTT) in RNNs?",
          es: "¿Qué es la retropropagación a través del tiempo (BPTT) en RNNs?",
          de: "Was ist Backpropagation durch Zeit (BPTT) in RNNs?",
          nl: "Wat is backpropagation through time (BPTT) in RNNs?"
        },
        options: [
          { en: "The algorithm for training RNNs by unfolding the network through time and applying standard backpropagation", es: "El algoritmo para entrenar RNNs desplegando la red a través del tiempo y aplicando retropropagación estándar", de: "Der Algorithmus zum Trainieren von RNNs durch Entfalten des Netzwerks durch Zeit und Anwenden von Standard-Backpropagation", nl: "Het algoritme voor het trainen van RNNs door het netwerk door tijd te ontvouwen en standaard backpropagation toe te passen" },
          { en: "A method for predicting future time series values", es: "Un método para predecir valores futuros de series temporales", de: "Eine Methode zur Vorhersage zukünftiger Zeitreihenwerte", nl: "Een methode voor het voorspellen van toekomstige tijdreekswaarden" },
          { en: "Training RNNs backwards in time", es: "Entrenar RNNs hacia atrás en el tiempo", de: "RNNs rückwärts in der Zeit trainieren", nl: "RNNs achterwaarts in tijd trainen" },
          { en: "A technique for real-time RNN training", es: "Una técnica para entrenamiento de RNN en tiempo real", de: "Eine Technik für RNN-Training in Echtzeit", nl: "Een techniek voor real-time RNN training" }
        ],
        correct: 0,
        explanation: {
          en: "BPTT unfolds the RNN into a feedforward network across time steps, then computes gradients by backpropagating through each time step to update the shared parameters across all time steps.",
          es: "BPTT despliega la RNN en una red feedforward a través de pasos temporales, luego computa gradientes retropropagando a través de cada paso temporal para actualizar parámetros compartidos en todos los pasos temporales.",
          de: "BPTT entfaltet das RNN in ein Feedforward-Netzwerk über Zeitschritte, berechnet dann Gradienten durch Backpropagation durch jeden Zeitschritt um die geteilten Parameter über alle Zeitschritte zu aktualisieren.",
          nl: "BPTT ontvouwt het RNN tot een feedforward netwerk over tijdstappen, berekent dan gradiënten door backpropagation door elke tijdstap om de gedeelde parameters over alle tijdstappen bij te werken."
        }
      },
      {
        question: {
          en: "What is beam search and when is it used with RNNs?",
          es: "¿Qué es beam search y cuándo se usa con RNNs?",
          de: "Was ist Beam Search und wann wird es mit RNNs verwendet?",
          nl: "Wat is beam search en wanneer wordt het gebruikt met RNNs?"
        },
        options: [
          { en: "A decoding algorithm that maintains multiple candidate sequences during generation, used for better quality outputs in text generation and translation", es: "Algoritmo de decodificación que mantiene múltiples secuencias candidatas, usado para mejor calidad en generación de texto y traducción", de: "Dekodierungsalgorithmus der mehrere Kandidatensequenzen beibehält, für bessere Qualität in Textgenerierung und Übersetzung", nl: "Decodeeralgoritme dat meerdere kandidaatsequenties behoudt, gebruikt voor betere kwaliteit in tekstgeneratie en vertaling" },
          { en: "A method for searching through RNN architecture space", es: "Un método para buscar a través del espacio de arquitectura RNN", de: "Eine Methode zur Suche durch RNN-Architekturraum", nl: "Een methode voor het zoeken door RNN architectuurruimte" },
          { en: "A technique for finding optimal learning rates", es: "Una técnica para encontrar tasas de aprendizaje óptimas", de: "Eine Technik zum Finden optimaler Lernraten", nl: "Een techniek voor het vinden van optimale learning rates" },
          { en: "A way to search for the best RNN hyperparameters", es: "Una forma de buscar los mejores hiperparámetros de RNN", de: "Ein Weg die besten RNN-Hyperparameter zu suchen", nl: "Een manier om de beste RNN hyperparameters te zoeken" }
        ],
        correct: 0,
        explanation: {
          en: "Beam search explores multiple possible sequences simultaneously instead of greedily selecting the most probable token at each step, leading to better overall sequence quality by considering broader context.",
          es: "Beam search explora múltiples secuencias posibles simultáneamente en lugar de seleccionar codiciosamente el token más probable en cada paso, llevando a mejor calidad general de secuencia considerando contexto más amplio.",
          de: "Beam Search erkundet mehrere mögliche Sequenzen gleichzeitig anstatt gierig das wahrscheinlichste Token bei jedem Schritt zu wählen, führt zu besserer Gesamtsequenzqualität durch Berücksichtigung breiteren Kontexts.",
          nl: "Beam search verkent meerdere mogelijke sequenties tegelijkertijd in plaats van gretig het meest waarschijnlijke token bij elke stap te selecteren, leidt tot betere algemene sequentiekwaliteit door bredere context te overwegen."
        }
      },
      {
        question: {
          en: "What is the role of hidden states in RNNs?",
          es: "¿Cuál es el papel de los estados ocultos en RNNs?",
          de: "Was ist die Rolle versteckter Zustände in RNNs?",
          nl: "Wat is de rol van verborgen toestanden in RNNs?"
        },
        options: [
          { en: "Hidden states carry information from previous time steps, acting as the network's memory to capture temporal dependencies", es: "Estados ocultos llevan información de pasos previos, actuando como memoria de la red para capturar dependencias temporales", de: "Versteckte Zustände tragen Informationen von vorherigen Zeitschritten, fungieren als Netzwerkgedächtnis für zeitliche Abhängigkeiten", nl: "Verborgen toestanden dragen informatie van vorige tijdstappen, fungeren als netwerkgeheugen voor temporele afhankelijkheden" },
          { en: "Hidden states store the final output of the network", es: "Los estados ocultos almacenan la salida final de la red", de: "Versteckte Zustände speichern die finale Ausgabe des Netzwerks", nl: "Verborgen toestanden slaan de finale output van het netwerk op" },
          { en: "Hidden states contain the input data for each time step", es: "Los estados ocultos contienen los datos de entrada para cada paso temporal", de: "Versteckte Zustände enthalten die Eingabedaten für jeden Zeitschritt", nl: "Verborgen toestanden bevatten de invoerdata voor elke tijdstap" },
          { en: "Hidden states control the learning rate during training", es: "Los estados ocultos controlan la tasa de aprendizaje durante entrenamiento", de: "Versteckte Zustände kontrollieren die Lernrate während Training", nl: "Verborgen toestanden controleren de learning rate tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Hidden states are the internal memory mechanism that allows RNNs to maintain information across time steps, enabling the network to learn from sequential patterns and make predictions based on historical context.",
          es: "Los estados ocultos son el mecanismo de memoria interno que permite a las RNNs mantener información a través de pasos temporales, habilitando a la red aprender de patrones secuenciales y hacer predicciones basadas en contexto histórico.",
          de: "Versteckte Zustände sind der interne Gedächtnismechanismus der RNNs ermöglicht Informationen über Zeitschritte zu behalten, ermöglicht dem Netzwerk aus sequenziellen Mustern zu lernen und Vorhersagen basierend auf historischem Kontext zu machen.",
          nl: "Verborgen toestanden zijn het interne geheugenmechanisme dat RNNs in staat stelt informatie over tijdstappen te behouden, stelt het netwerk in staat om van sequentiële patronen te leren en voorspellingen te maken gebaseerd op historische context."
        }
      },
      {
        question: {
          en: "What is truncated backpropagation through time and why is it used?",
          es: "¿Qué es la retropropagación truncada a través del tiempo y por qué se usa?",
          de: "Was ist truncated Backpropagation durch Zeit und warum wird es verwendet?",
          nl: "Wat is truncated backpropagation through time en waarom wordt het gebruikt?"
        },
        options: [
          { en: "Limiting backpropagation to a fixed number of time steps to reduce computational cost and memory usage while maintaining training effectiveness", es: "Limitar retropropagación a número fijo de pasos para reducir costo computacional y memoria manteniendo efectividad", de: "Backpropagation auf feste Anzahl Zeitschritte begrenzen um Rechenkosten und Speicher zu reduzieren", nl: "Backpropagation beperken tot vast aantal tijdstappen om kosten en geheugen te verminderen" },
          { en: "Cutting off the RNN after a certain time to prevent overfitting", es: "Cortar la RNN después de cierto tiempo para prevenir sobreajuste", de: "Das RNN nach einer bestimmten Zeit abschneiden um Overfitting zu verhindern", nl: "Het RNN na een bepaalde tijd afkappen om overfitting te voorkomen" },
          { en: "Using only part of the training data for efficiency", es: "Usar solo parte de los datos de entrenamiento para eficiencia", de: "Nur einen Teil der Trainingsdaten für Effizienz verwenden", nl: "Alleen een deel van de trainingsdata gebruiken voor efficiëntie" },
          { en: "Randomly skipping time steps during training", es: "Saltear aleatoriamente pasos temporales durante entrenamiento", de: "Zufällig Zeitschritte während Training überspringen", nl: "Willekeurig tijdstappen overslaan tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Truncated BPTT processes sequences in chunks, only backpropagating gradients through a limited window of time steps, making training of long sequences computationally feasible while still learning temporal dependencies.",
          es: "BPTT truncada procesa secuencias en fragmentos, solo retropropagando gradientes a través de una ventana limitada de pasos temporales, haciendo entrenamiento de secuencias largas computacionalmente factible mientras aún aprende dependencias temporales.",
          de: "Truncated BPTT verarbeitet Sequenzen in Stücken, propagiert nur Gradienten durch ein begrenztes Fenster von Zeitschritten zurück, macht Training langer Sequenzen rechnerisch machbar während immer noch zeitliche Abhängigkeiten gelernt werden.",
          nl: "Truncated BPTT verwerkt sequenties in stukken, propageert alleen gradiënten terug door een beperkt venster van tijdstappen, maakt training van lange sequenties computationeel haalbaar terwijl nog steeds temporele afhankelijkheden worden geleerd."
        }
      },
      {
        question: {
          en: "What are the key differences between CNN and RNN architectures?",
          es: "¿Cuáles son las diferencias clave entre arquitecturas CNN y RNN?",
          de: "Was sind die Hauptunterschiede zwischen CNN- und RNN-Architekturen?",
          nl: "Wat zijn de belangrijkste verschillen tussen CNN en RNN architecturen?"
        },
        options: [
          { en: "CNNs excel at spatial patterns in grid data using convolution/pooling, RNNs handle sequential data with temporal dependencies via recurrent connections", es: "CNNs sobresalen en patrones espaciales con convolución/pooling, RNNs manejan datos secuenciales con dependencias temporales", de: "CNNs glänzen bei räumlichen Mustern mit Faltung/Pooling, RNNs handhaben sequenzielle Daten mit zeitlichen Abhängigkeiten", nl: "CNNs blinken uit in ruimtelijke patronen met convolutie/pooling, RNNs hanteren sequentiële data met temporele afhankelijkheden" },
          { en: "CNNs are faster to train than RNNs in all cases", es: "Las CNNs son más rápidas de entrenar que las RNNs en todos los casos", de: "CNNs sind in allen Fällen schneller zu trainieren als RNNs", nl: "CNNs zijn in alle gevallen sneller te trainen dan RNNs" },
          { en: "RNNs can only process fixed-length inputs while CNNs handle variable lengths", es: "Las RNNs solo pueden procesar entradas de longitud fija mientras las CNNs manejan longitudes variables", de: "RNNs können nur Eingaben fester Länge verarbeiten während CNNs variable Längen handhaben", nl: "RNNs kunnen alleen inputs van vaste lengte verwerken terwijl CNNs variabele lengtes hanteren" },
          { en: "CNNs use recurrent connections while RNNs use convolutions", es: "Las CNNs usan conexiones recurrentes mientras las RNNs usan convoluciones", de: "CNNs verwenden rekurrente Verbindungen während RNNs Faltungen verwenden", nl: "CNNs gebruiken recurrente verbindingen terwijl RNNs convoluties gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "CNNs are designed for spatial hierarchies in data like images using local receptive fields and parameter sharing, while RNNs are built for temporal sequences with memory mechanisms to capture dependencies across time.",
          es: "Las CNNs están diseñadas para jerarquías espaciales en datos como imágenes usando campos receptivos locales y compartir parámetros, mientras las RNNs están construidas para secuencias temporales con mecanismos de memoria para capturar dependencias a través del tiempo.",
          de: "CNNs sind für räumliche Hierarchien in Daten wie Bildern mit lokalen rezeptiven Feldern und Parameterfreigabe entworfen, während RNNs für zeitliche Sequenzen mit Gedächtnismechanismen gebaut sind um Abhängigkeiten über Zeit zu erfassen.",
          nl: "CNNs zijn ontworpen voor ruimtelijke hiërarchieën in data zoals afbeeldingen met lokale receptieve velden en parameter delen, terwijl RNNs gebouwd zijn voor temporele sequenties met geheugenmechanismen om afhankelijkheden over tijd vast te leggen."
        }
      },
      {
        question: {
          en: "How does batch normalization address the internal covariate shift problem?",
          es: "¿Cómo aborda la normalización por lotes el problema del cambio de covariables internas?",
          de: "Wie adressiert Batch Normalization das Problem der internen Kovariatenverschiebung?",
          nl: "Hoe pakt batch normalisatie het internal covariate shift probleem aan?"
        },
        options: [
          { en: "By normalizing layer inputs to have zero mean and unit variance, reducing input distribution changes during training", es: "Normalizando entradas de capa para tener media cero y varianza unitaria, reduciendo cambios de distribución de entrada durante entrenamiento", de: "Durch Normalisierung von Schichteingaben auf Null-Mittelwert und Einheitsvarianz, reduziert Eingabeverteilungsänderungen während Training", nl: "Door laaginputs te normaliseren naar nul gemiddelde en eenheidvariantie, vermindert inputdistributie veranderingen tijdens training" },
          { en: "By changing the batch size dynamically during training", es: "Cambiando el tamaño del lote dinámicamente durante entrenamiento", de: "Durch dynamisches Ändern der Batch-Größe während Training", nl: "Door batchgrootte dynamisch te veranderen tijdens training" },
          { en: "By normalizing only the final layer outputs", es: "Normalizando solo las salidas de la capa final", de: "Durch Normalisierung nur der finalen Schichtausgaben", nl: "Door alleen de finale laaguitgangen te normaliseren" },
          { en: "By batching training examples differently", es: "Agrupando ejemplos de entrenamiento de manera diferente", de: "Durch verschiedenes Batching von Trainingsbeispielen", nl: "Door trainingsvoorbeelden anders te batchen" }
        ],
        correct: 0,
        explanation: {
          en: "Batch normalization normalizes the inputs to each layer by subtracting the batch mean and dividing by the batch standard deviation, stabilizing the learning process and allowing higher learning rates.",
          es: "La normalización por lotes normaliza las entradas a cada capa restando la media del lote y dividiendo por la desviación estándar del lote, estabilizando el proceso de aprendizaje y permitiendo tasas de aprendizaje más altas.",
          de: "Batch Normalization normalisiert die Eingaben zu jeder Schicht durch Subtrahieren des Batch-Mittelwerts und Teilen durch die Batch-Standardabweichung, stabilisiert den Lernprozess und ermöglicht höhere Lernraten.",
          nl: "Batch normalisatie normaliseert de inputs naar elke laag door het batch gemiddelde af te trekken en te delen door de batch standaarddeviatie, stabiliseert het leerproces en maakt hogere leersnelheden mogelijk."
        }
      },
      {
        question: {
          en: "What is the encoder-decoder architecture in seq2seq models?",
          es: "¿Qué es la arquitectura codificador-decodificador en modelos seq2seq?",
          de: "Was ist die Encoder-Decoder-Architektur in seq2seq-Modellen?",
          nl: "Wat is de encoder-decoder architectuur in seq2seq modellen?"
        },
        options: [
          { en: "Encoder compresses input sequence into fixed context vector, decoder generates output sequence from this representation", es: "El codificador comprime secuencia de entrada en vector de contexto fijo, decodificador genera secuencia de salida de esta representación", de: "Encoder komprimiert Eingabesequenz in festen Kontextvektor, Decoder generiert Ausgabesequenz aus dieser Repräsentation", nl: "Encoder comprimeert invoersequentie tot vaste contextvector, decoder genereert uitvoersequentie uit deze representatie" },
          { en: "Two separate networks that work independently", es: "Dos redes separadas que trabajan independientemente", de: "Zwei separate Netzwerke die unabhängig arbeiten", nl: "Twee aparte netwerken die onafhankelijk werken" },
          { en: "A method for encrypting and decrypting data", es: "Un método para cifrar y descifrar datos", de: "Eine Methode zum Verschlüsseln und Entschlüsseln von Daten", nl: "Een methode voor het versleutelen en ontsleutelen van data" },
          { en: "Parallel processing of encoding and decoding", es: "Procesamiento paralelo de codificación y decodificación", de: "Parallele Verarbeitung von Kodierung und Dekodierung", nl: "Parallelle verwerking van codering en decodering" }
        ],
        correct: 0,
        explanation: {
          en: "The encoder RNN reads the input sequence and creates a context vector summarizing it, which the decoder RNN uses to generate the output sequence token by token.",
          es: "La RNN codificadora lee la secuencia de entrada y crea un vector de contexto resumiéndola, que la RNN decodificadora usa para generar la secuencia de salida token por token.",
          de: "Der Encoder-RNN liest die Eingabesequenz und erstellt einen Kontextvektor der sie zusammenfasst, den der Decoder-RNN verwendet um die Ausgabesequenz Token für Token zu generieren.",
          nl: "De encoder RNN leest de invoersequentie en creëert een contextvector die het samenvat, die de decoder RNN gebruikt om de uitvoersequentie token voor token te genereren."
        }
      },
      {
        question: {
          en: "What problem does attention mechanism solve in seq2seq models?",
          es: "¿Qué problema resuelve el mecanismo de atención en modelos seq2seq?",
          de: "Welches Problem löst der Aufmerksamkeitsmechanismus in seq2seq-Modellen?",
          nl: "Welk probleem lost het attention mechanisme op in seq2seq modellen?"
        },
        options: [
          { en: "The bottleneck of compressing entire input into single fixed context vector, allowing decoder to focus on relevant input parts", es: "El cuello de botella de comprimir entrada en vector fijo, permitiendo al decodificador enfocarse en partes relevantes", de: "Der Flaschenhals des Komprimierens der Eingabe in festen Kontextvektor, ermöglicht Decoder-Fokus auf relevante Teile", nl: "Het knelpunt van comprimeren van invoer in vaste contextvector, stelt decoder in staat te focussen op relevante delen" },
          { en: "Making training faster by parallel processing", es: "Hacer entrenamiento más rápido con procesamiento paralelo", de: "Training schneller machen durch parallele Verarbeitung", nl: "Training sneller maken door parallelle verwerking" },
          { en: "Reducing the number of parameters needed", es: "Reducir el número de parámetros necesarios", de: "Die Anzahl der benötigten Parameter reduzieren", nl: "Het aantal benodigde parameters verminderen" },
          { en: "Preventing overfitting in long sequences", es: "Prevenir sobreajuste en secuencias largas", de: "Overfitting in langen Sequenzen verhindern", nl: "Overfitting voorkomen in lange sequenties" }
        ],
        correct: 0,
        explanation: {
          en: "Attention allows the decoder to access all encoder hidden states rather than just a single context vector, dynamically weighting which input positions are most relevant for each output.",
          es: "La atención permite al decodificador acceder a todos los estados ocultos del codificador en lugar de solo un vector de contexto, ponderando dinámicamente qué posiciones de entrada son más relevantes para cada salida.",
          de: "Aufmerksamkeit erlaubt dem Decoder auf alle Encoder-Hidden-States zuzugreifen anstatt nur einen Kontextvektor, gewichtet dynamisch welche Eingabepositionen für jede Ausgabe am relevantesten sind.",
          nl: "Attention stelt de decoder in staat om alle encoder verborgen toestanden te benaderen in plaats van slechts een enkele contextvector, weegt dynamisch welke invoerposities het meest relevant zijn voor elke uitvoer."
        }
      },
      {
        question: {
          en: "What are peephole connections in LSTM cells?",
          es: "¿Qué son las conexiones de mirilla en celdas LSTM?",
          de: "Was sind Peephole-Verbindungen in LSTM-Zellen?",
          nl: "Wat zijn peephole verbindingen in LSTM cellen?"
        },
        options: [
          { en: "Connections allowing gates to inspect the cell state directly, improving timing and counting tasks", es: "Conexiones que permiten a las compuertas inspeccionar el estado celular directamente, mejorando tareas de temporización y conteo", de: "Verbindungen die Gates ermöglichen den Zellzustand direkt zu inspizieren, verbessern Timing- und Zählaufgaben", nl: "Verbindingen die gates in staat stellen de celstaat direct te inspecteren, verbeteren timing en teltaken" },
          { en: "Security features to prevent information leakage", es: "Características de seguridad para prevenir fuga de información", de: "Sicherheitsfunktionen um Informationslecks zu verhindern", nl: "Beveiligingsfuncties om informatielekken te voorkomen" },
          { en: "Connections between different LSTM layers", es: "Conexiones entre diferentes capas LSTM", de: "Verbindungen zwischen verschiedenen LSTM-Schichten", nl: "Verbindingen tussen verschillende LSTM lagen" },
          { en: "Shortcuts for faster computation", es: "Atajos para computación más rápida", de: "Abkürzungen für schnellere Berechnung", nl: "Snelkoppelingen voor snellere berekening" }
        ],
        correct: 0,
        explanation: {
          en: "Peephole connections add the cell state as input to the gate calculations, allowing gates to make more informed decisions about what information to keep, forget, or output.",
          es: "Las conexiones de mirilla añaden el estado celular como entrada a cálculos de compuerta, permitiendo a las compuertas tomar decisiones más informadas sobre qué información mantener, olvidar o producir.",
          de: "Peephole-Verbindungen fügen den Zellzustand als Eingabe zu Gate-Berechnungen hinzu, ermöglichen Gates informiertere Entscheidungen zu treffen über welche Informationen zu behalten, vergessen oder ausgeben.",
          nl: "Peephole verbindingen voegen de celstaat toe als input aan de gate berekeningen, stellen gates in staat om meer geïnformeerde beslissingen te nemen over welke informatie te behouden, vergeten of uit te voeren."
        }
      },
      {
        question: {
          en: "What is scheduled sampling in sequence generation?",
          es: "¿Qué es el muestreo programado en generación de secuencias?",
          de: "Was ist Scheduled Sampling in Sequenzgenerierung?",
          nl: "Wat is scheduled sampling in sequentiegeneratie?"
        },
        options: [
          { en: "Gradually transitioning from teacher forcing to using model predictions during training to reduce exposure bias", es: "Transición gradual de teacher forcing a usar predicciones del modelo durante entrenamiento para reducir sesgo de exposición", de: "Allmählicher Übergang von Teacher Forcing zur Verwendung von Modellvorhersagen während Training um Exposure Bias zu reduzieren", nl: "Geleidelijke overgang van teacher forcing naar het gebruik van modelvoorspellingen tijdens training om exposure bias te verminderen" },
          { en: "Scheduling when to sample from the training data", es: "Programar cuándo muestrear de los datos de entrenamiento", de: "Planen wann aus den Trainingsdaten gesampelt wird", nl: "Plannen wanneer te samplen uit de trainingsdata" },
          { en: "Randomly sampling sequences at different times", es: "Muestrear aleatoriamente secuencias en diferentes momentos", de: "Zufällig Sequenzen zu verschiedenen Zeiten sampeln", nl: "Willekeurig sequenties op verschillende tijden samplen" },
          { en: "Creating a sampling schedule for batch selection", es: "Crear un programa de muestreo para selección de lotes", de: "Einen Sampling-Zeitplan für Batch-Auswahl erstellen", nl: "Een samplingschema maken voor batch selectie" }
        ],
        correct: 0,
        explanation: {
          en: "Scheduled sampling mixes ground truth inputs with model predictions according to a schedule, helping the model learn to handle its own errors during inference while maintaining training stability.",
          es: "El muestreo programado mezcla entradas de verdad fundamental con predicciones del modelo según un programa, ayudando al modelo a aprender a manejar sus propios errores durante inferencia mientras mantiene estabilidad de entrenamiento.",
          de: "Scheduled Sampling mischt Ground Truth Eingaben mit Modellvorhersagen nach einem Zeitplan, hilft dem Modell zu lernen seine eigenen Fehler während Inferenz zu handhaben während Trainingsstabilität beibehalten wird.",
          nl: "Scheduled sampling mengt ground truth inputs met modelvoorspellingen volgens een schema, helpt het model te leren om zijn eigen fouten tijdens inferentie te hanteren terwijl trainingsstabiliteit behouden blijft."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem specifically in RNNs?",
          es: "¿Cuál es el problema del gradiente que desaparece específicamente en RNNs?",
          de: "Was ist das Problem verschwindender Gradienten speziell in RNNs?",
          nl: "Wat is het verdwijnende gradiënt probleem specifiek in RNNs?"
        },
        options: [
          { en: "Gradients decay exponentially when backpropagating through many time steps, preventing learning of long-term dependencies", es: "Gradienten decaen exponencialmente al retropropagar por muchos pasos, previniendo aprendizaje de dependencias largo plazo", de: "Gradienten verfallen exponentiell beim Backpropagation durch viele Zeitschritte, verhindert Lernen langfristiger Abhängigkeiten", nl: "Gradiënten vervallen exponentieel bij backpropagation door veel tijdstappen, voorkomt leren lange termijn afhankelijkheden" },
          { en: "Gradients disappear completely after training", es: "Los gradientes desaparecen completamente después del entrenamiento", de: "Gradienten verschwinden vollständig nach Training", nl: "Gradiënten verdwijnen volledig na training" },
          { en: "The network forgets all previous inputs", es: "La red olvida todas las entradas previas", de: "Das Netzwerk vergisst alle vorherigen Eingaben", nl: "Het netwerk vergeet alle vorige inputs" },
          { en: "Training becomes slower over time", es: "El entrenamiento se vuelve más lento con el tiempo", de: "Training wird langsamer über Zeit", nl: "Training wordt langzamer in de tijd" }
        ],
        correct: 0,
        explanation: {
          en: "Due to repeated multiplication of weight matrices during BPTT, gradients become exponentially smaller for earlier time steps, making it difficult for traditional RNNs to learn dependencies spanning many steps.",
          es: "Debido a multiplicación repetida de matrices de peso durante BPTT, los gradientes se vuelven exponencialmente más pequeños para pasos temporales anteriores, dificultando a RNNs tradicionales aprender dependencias que abarcan muchos pasos.",
          de: "Aufgrund wiederholter Multiplikation von Gewichtsmatrizen während BPTT werden Gradienten exponentiell kleiner für frühere Zeitschritte, erschwert traditionellen RNNs Abhängigkeiten über viele Schritte zu lernen.",
          nl: "Door herhaalde vermenigvuldiging van gewichtsmatrices tijdens BPTT worden gradiënten exponentieel kleiner voor eerdere tijdstappen, maakt het moeilijk voor traditionele RNNs om afhankelijkheden over veel stappen te leren."
        }
      },
      {
        question: {
          en: "What are variational autoencoders (VAEs)?",
          es: "¿Qué son los autocodificadores variacionales (VAE)?",
          de: "Was sind Variational Autoencoders (VAEs)?",
          nl: "Wat zijn variational autoencoders (VAEs)?"
        },
        options: [
          { en: "Generative models that learn a probabilistic latent space distribution, enabling both data reconstruction and generation of new samples", es: "Modelos generativos que aprenden distribución latente probabilística, habilitando reconstrucción de datos y generación de muestras", de: "Generative Modelle die probabilistische latente Raumverteilung lernen, ermöglichen Datenrekonstruktion und neue Sample-Generierung", nl: "Generatieve modellen die probabilistische latente ruimteverdeling leren, maken datareconstruktie en nieuwe sample generatie mogelijk" },
          { en: "Autoencoders with variable layer sizes", es: "Autocodificadores con tamaños de capa variables", de: "Autoencoder mit variablen Schichtgrößen", nl: "Autoencoders met variabele laaggroottes" },
          { en: "Autoencoders that vary their learning rate", es: "Autocodificadores que varían su tasa de aprendizaje", de: "Autoencoder die ihre Lernrate variieren", nl: "Autoencoders die hun leersnelheid variëren" },
          { en: "Multiple autoencoders working together", es: "Múltiples autocodificadores trabajando juntos", de: "Mehrere Autoencoder die zusammenarbeiten", nl: "Meerdere autoencoders die samenwerken" }
        ],
        correct: 0,
        explanation: {
          en: "VAEs encode data into a distribution (mean and variance) rather than fixed points, using the reparameterization trick to enable backpropagation while sampling from this distribution for generation.",
          es: "Los VAE codifican datos en una distribución (media y varianza) en lugar de puntos fijos, usando el truco de reparametrización para habilitar retropropagación mientras muestrea de esta distribución para generación.",
          de: "VAEs kodieren Daten in eine Verteilung (Mittelwert und Varianz) anstatt feste Punkte, verwenden den Reparametrisierungstrick um Backpropagation zu ermöglichen während aus dieser Verteilung für Generierung gesampelt wird.",
          nl: "VAEs coderen data in een distributie (gemiddelde en variantie) in plaats van vaste punten, gebruiken de reparametrisatie truc om backpropagation mogelijk te maken terwijl sampling uit deze distributie voor generatie."
        }
      },
      {
        question: {
          en: "What is the cell state in LSTM networks?",
          es: "¿Qué es el estado celular en redes LSTM?",
          de: "Was ist der Zellzustand in LSTM-Netzwerken?",
          nl: "Wat is de celstaat in LSTM netwerken?"
        },
        options: [
          { en: "A separate memory path running through the cell that gates can read from and write to, enabling long-term information storage", es: "Camino de memoria separado a través de la celda que compuertas pueden leer y escribir, habilita almacenamiento largo plazo", de: "Separater Gedächtnispfad durch die Zelle den Gates lesen und schreiben können, ermöglicht langfristige Informationsspeicherung", nl: "Apart geheugenpad door de cel waarvan gates kunnen lezen en schrijven, maakt langetermijn informatieopslag mogelijk" },
          { en: "The current activation state of the cell", es: "El estado de activación actual de la celda", de: "Der aktuelle Aktivierungszustand der Zelle", nl: "De huidige activatietoestand van de cel" },
          { en: "The final output of the LSTM", es: "La salida final del LSTM", de: "Die finale Ausgabe des LSTM", nl: "De finale output van het LSTM" },
          { en: "The input at the current time step", es: "La entrada en el paso temporal actual", de: "Die Eingabe beim aktuellen Zeitschritt", nl: "De input bij de huidige tijdstap" }
        ],
        correct: 0,
        explanation: {
          en: "The cell state acts as a conveyor belt carrying information across time steps with minimal transformations, while gates decide what to add, remove, or output from this state.",
          es: "El estado celular actúa como una cinta transportadora llevando información a través de pasos temporales con transformaciones mínimas, mientras las compuertas deciden qué añadir, remover o producir de este estado.",
          de: "Der Zellzustand fungiert als Förderband das Informationen über Zeitschritte mit minimalen Transformationen trägt, während Gates entscheiden was zu diesem Zustand hinzuzufügen, zu entfernen oder auszugeben ist.",
          nl: "De celstaat fungeert als een lopende band die informatie over tijdstappen draagt met minimale transformaties, terwijl gates beslissen wat toe te voegen, te verwijderen of uit te voeren van deze staat."
        }
      },
      {
        question: {
          en: "What is the purpose of the reset gate in GRU cells?",
          es: "¿Cuál es el propósito de la compuerta de reset en celdas GRU?",
          de: "Was ist der Zweck des Reset-Gates in GRU-Zellen?",
          nl: "Wat is het doel van de reset gate in GRU cellen?"
        },
        options: [
          { en: "Controls how much past information to forget when computing new candidate state", es: "Controla cuánta información pasada olvidar al computar nuevo estado candidato", de: "Kontrolliert wie viel vergangene Informationen vergessen werden beim Berechnen neuen Kandidatenzustands", nl: "Controleert hoeveel verleden informatie te vergeten bij het berekenen van nieuwe kandidaatstaat" },
          { en: "Resets the entire network to initial state", es: "Reinicia toda la red al estado inicial", de: "Setzt das gesamte Netzwerk auf Anfangszustand zurück", nl: "Reset het hele netwerk naar initiële staat" },
          { en: "Controls when to reset the learning rate", es: "Controla cuándo reiniciar la tasa de aprendizaje", de: "Kontrolliert wann die Lernrate zurückgesetzt wird", nl: "Controleert wanneer de leersnelheid te resetten" },
          { en: "Determines when to start a new sequence", es: "Determina cuándo iniciar una nueva secuencia", de: "Bestimmt wann eine neue Sequenz gestartet wird", nl: "Bepaalt wanneer een nieuwe sequentie te starten" }
        ],
        correct: 0,
        explanation: {
          en: "The reset gate allows the GRU to drop irrelevant past information by controlling which parts of the previous hidden state influence the candidate activation, enabling the cell to 'reset' and capture new patterns.",
          es: "La compuerta de reset permite al GRU eliminar información pasada irrelevante controlando qué partes del estado oculto previo influyen la activación candidata, habilitando a la celda 'reiniciar' y capturar nuevos patrones.",
          de: "Das Reset-Gate ermöglicht dem GRU irrelevante vergangene Informationen zu verwerfen durch Kontrolle welche Teile des vorherigen Hidden State die Kandidatenaktivierung beeinflussen, ermöglicht der Zelle zu 'resetten' und neue Muster zu erfassen.",
          nl: "De reset gate stelt de GRU in staat om irrelevante verleden informatie weg te gooien door te controleren welke delen van de vorige verborgen staat de kandidaat activatie beïnvloeden, stelt de cel in staat om te 'resetten' en nieuwe patronen vast te leggen."
        }
      },
      {
        question: {
          en: "What is the update gate in GRU cells?",
          es: "¿Qué es la compuerta de actualización en celdas GRU?",
          de: "Was ist das Update-Gate in GRU-Zellen?",
          nl: "Wat is de update gate in GRU cellen?"
        },
        options: [
          { en: "Controls the balance between retaining previous state and accepting new candidate state", es: "Controla el balance entre retener estado previo y aceptar nuevo estado candidato", de: "Kontrolliert die Balance zwischen Beibehaltung vorherigen Zustands und Akzeptanz neuen Kandidatenzustands", nl: "Controleert de balans tussen het behouden van vorige staat en het accepteren van nieuwe kandidaatstaat" },
          { en: "Updates the network weights during training", es: "Actualiza los pesos de la red durante entrenamiento", de: "Aktualisiert die Netzwerkgewichte während Training", nl: "Werkt de netwerkgewichten bij tijdens training" },
          { en: "Determines when to update the learning rate", es: "Determina cuándo actualizar la tasa de aprendizaje", de: "Bestimmt wann die Lernrate aktualisiert wird", nl: "Bepaalt wanneer de leersnelheid bij te werken" },
          { en: "Signals when new data is available", es: "Señala cuándo nuevos datos están disponibles", de: "Signalisiert wann neue Daten verfügbar sind", nl: "Signaleert wanneer nieuwe data beschikbaar is" }
        ],
        correct: 0,
        explanation: {
          en: "The update gate decides how much of the previous hidden state to keep and how much of the new candidate state to use, effectively combining the forget and input gates of LSTMs into one mechanism.",
          es: "La compuerta de actualización decide cuánto del estado oculto previo mantener y cuánto del nuevo estado candidato usar, efectivamente combinando las compuertas de olvido y entrada de LSTMs en un mecanismo.",
          de: "Das Update-Gate entscheidet wie viel vom vorherigen Hidden State zu behalten ist und wie viel vom neuen Kandidatenzustand zu verwenden ist, kombiniert effektiv die Forget- und Input-Gates von LSTMs in einen Mechanismus.",
          nl: "De update gate beslist hoeveel van de vorige verborgen staat te behouden en hoeveel van de nieuwe kandidaatstaat te gebruiken, combineert effectief de forget en input gates van LSTMs in één mechanisme."
        }
      },
      {
        question: {
          en: "What is context vector in encoder-decoder models?",
          es: "¿Qué es el vector de contexto en modelos codificador-decodificador?",
          de: "Was ist der Kontextvektor in Encoder-Decoder-Modellen?",
          nl: "Wat is de contextvector in encoder-decoder modellen?"
        },
        options: [
          { en: "A fixed-size representation summarizing the entire input sequence, passed from encoder to decoder", es: "Una representación de tamaño fijo resumiendo toda la secuencia de entrada, pasada del codificador al decodificador", de: "Eine Repräsentation fester Größe die die gesamte Eingabesequenz zusammenfasst, vom Encoder zum Decoder übergeben", nl: "Een representatie van vaste grootte die de hele invoersequentie samenvat, doorgegeven van encoder naar decoder" },
          { en: "The surrounding text of a word", es: "El texto circundante de una palabra", de: "Der umgebende Text eines Wortes", nl: "De omringende tekst van een woord" },
          { en: "The current state of the decoder", es: "El estado actual del decodificador", de: "Der aktuelle Zustand des Decoders", nl: "De huidige staat van de decoder" },
          { en: "Additional information about the task", es: "Información adicional sobre la tarea", de: "Zusätzliche Informationen über die Aufgabe", nl: "Aanvullende informatie over de taak" }
        ],
        correct: 0,
        explanation: {
          en: "The context vector is typically the final hidden state of the encoder, compressing all input information into a single vector that initializes or informs the decoder's generation process.",
          es: "El vector de contexto es típicamente el estado oculto final del codificador, comprimiendo toda la información de entrada en un solo vector que inicializa o informa el proceso de generación del decodificador.",
          de: "Der Kontextvektor ist typischerweise der finale Hidden State des Encoders, komprimiert alle Eingabeinformationen in einen einzelnen Vektor der den Generierungsprozess des Decoders initialisiert oder informiert.",
          nl: "De contextvector is typisch de finale verborgen staat van de encoder, comprimeert alle invoer informatie in een enkele vector die het generatieproces van de decoder initialiseert of informeert."
        }
      },
      {
        question: {
          en: "What is the difference between greedy decoding and beam search?",
          es: "¿Cuál es la diferencia entre decodificación codiciosa y beam search?",
          de: "Was ist der Unterschied zwischen gierigem Dekodieren und Beam Search?",
          nl: "Wat is het verschil tussen greedy decoding en beam search?"
        },
        options: [
          { en: "Greedy picks highest probability token at each step, beam search maintains multiple candidate sequences to find better overall sequences", es: "Codicioso elige token de mayor probabilidad cada paso, beam search mantiene múltiples candidatas para mejores secuencias", de: "Gierig wählt Token höchster Wahrscheinlichkeit, Beam Search behält mehrere Kandidatensequenzen für bessere Gesamtsequenzen", nl: "Greedy kiest hoogste waarschijnlijkheid token, beam search behoudt meerdere kandidaten voor betere algemene sequenties" },
          { en: "Greedy is faster, beam search uses more memory", es: "Codicioso es más rápido, beam search usa más memoria", de: "Gierig ist schneller, Beam Search verwendet mehr Speicher", nl: "Greedy is sneller, beam search gebruikt meer geheugen" },
          { en: "They produce identical results", es: "Producen resultados idénticos", de: "Sie produzieren identische Ergebnisse", nl: "Ze produceren identieke resultaten" },
          { en: "Greedy works for all tasks, beam search only for translation", es: "Codicioso funciona para todas tareas, beam search solo para traducción", de: "Gierig funktioniert für alle Aufgaben, Beam Search nur für Übersetzung", nl: "Greedy werkt voor alle taken, beam search alleen voor vertaling" }
        ],
        correct: 0,
        explanation: {
          en: "Greedy decoding can miss better sequences by committing to local optima early, while beam search explores multiple paths simultaneously (controlled by beam width) to find globally better solutions.",
          es: "La decodificación codiciosa puede perder mejores secuencias comprometiéndose a óptimos locales temprano, mientras beam search explora múltiples caminos simultáneamente (controlado por ancho de beam) para encontrar soluciones globalmente mejores.",
          de: "Gieriges Dekodieren kann bessere Sequenzen verpassen durch frühes Festlegen auf lokale Optima, während Beam Search mehrere Pfade gleichzeitig erkundet (kontrolliert durch Beam-Breite) um global bessere Lösungen zu finden.",
          nl: "Greedy decoding kan betere sequenties missen door zich vroeg vast te leggen op lokale optima, terwijl beam search meerdere paden tegelijkertijd verkent (gecontroleerd door beam breedte) om globaal betere oplossingen te vinden."
        }
      },
      {
        question: {
          en: "What is the purpose of layer normalization in RNNs?",
          es: "¿Cuál es el propósito de la normalización de capa en RNNs?",
          de: "Was ist der Zweck der Layer Normalization in RNNs?",
          nl: "Wat is het doel van layer normalisatie in RNNs?"
        },
        options: [
          { en: "Normalizes activations across features for each time step independently, stabilizing training in recurrent architectures", es: "Normaliza activaciones a través de características para cada paso independientemente, estabilizando entrenamiento recurrente", de: "Normalisiert Aktivierungen über Features für jeden Zeitschritt unabhängig, stabilisiert rekurrentes Training", nl: "Normaliseert activaties over features voor elke tijdstap onafhankelijk, stabiliseert recurrent training" },
          { en: "Makes all layers the same size", es: "Hace todas las capas del mismo tamaño", de: "Macht alle Schichten gleich groß", nl: "Maakt alle lagen dezelfde grootte" },
          { en: "Normalizes only the output layer", es: "Normaliza solo la capa de salida", de: "Normalisiert nur die Ausgabeschicht", nl: "Normaliseert alleen de outputlaag" },
          { en: "Reduces the number of layers needed", es: "Reduce el número de capas necesarias", de: "Reduziert die Anzahl der benötigten Schichten", nl: "Vermindert het aantal benodigde lagen" }
        ],
        correct: 0,
        explanation: {
          en: "Layer normalization computes mean and variance across features (not batch) for each sample, making it well-suited for RNNs where batch statistics can vary significantly across time steps.",
          es: "La normalización de capa computa media y varianza a través de características (no lote) para cada muestra, haciéndola adecuada para RNNs donde estadísticas de lote pueden variar significativamente a través de pasos temporales.",
          de: "Layer Normalization berechnet Mittelwert und Varianz über Features (nicht Batch) für jedes Sample, macht sie gut geeignet für RNNs wo Batch-Statistiken signifikant über Zeitschritte variieren können.",
          nl: "Layer normalisatie berekent gemiddelde en variantie over features (niet batch) voor elk sample, maakt het goed geschikt voor RNNs waar batch statistieken significant kunnen variëren over tijdstappen."
        }
      },
      {
        question: {
          en: "What is the role of the forget gate in LSTM cells?",
          es: "¿Cuál es el papel de la compuerta de olvido en celdas LSTM?",
          de: "Was ist die Rolle des Forget-Gates in LSTM-Zellen?",
          nl: "Wat is de rol van de forget gate in LSTM cellen?"
        },
        options: [
          { en: "Decides what information from the cell state should be discarded or retained based on current input and previous hidden state", es: "Decide qué información del estado celular descartar o retener basado en entrada actual y estado oculto previo", de: "Entscheidet welche Informationen aus Zellzustand verworfen oder behalten werden basierend auf aktueller Eingabe und Hidden State", nl: "Beslist welke informatie van celstaat weggegooid of behouden moet worden op basis van huidige input en vorige verborgen staat" },
          { en: "Erases all memory after each time step", es: "Borra toda la memoria después de cada paso temporal", de: "Löscht alle Erinnerung nach jedem Zeitschritt", nl: "Wist alle geheugen na elke tijdstap" },
          { en: "Prevents the network from learning", es: "Previene que la red aprenda", de: "Verhindert dass das Netzwerk lernt", nl: "Voorkomt dat het netwerk leert" },
          { en: "Controls the learning rate dynamically", es: "Controla la tasa de aprendizaje dinámicamente", de: "Kontrolliert die Lernrate dynamisch", nl: "Controleert de leersnelheid dynamisch" }
        ],
        correct: 0,
        explanation: {
          en: "The forget gate outputs values between 0 and 1 for each element in the cell state, where 1 means 'keep this' and 0 means 'forget this', allowing selective memory retention.",
          es: "La compuerta de olvido produce valores entre 0 y 1 para cada elemento en el estado celular, donde 1 significa 'mantener esto' y 0 significa 'olvidar esto', permitiendo retención selectiva de memoria.",
          de: "Das Forget-Gate gibt Werte zwischen 0 und 1 für jedes Element im Zellzustand aus, wobei 1 'behalte dies' bedeutet und 0 'vergiss dies', ermöglicht selektive Gedächtnisretention.",
          nl: "De forget gate geeft waarden tussen 0 en 1 voor elk element in de celstaat, waarbij 1 betekent 'behoud dit' en 0 betekent 'vergeet dit', maakt selectieve geheugenretentie mogelijk."
        }
      },
      {
        question: {
          en: "What is sequence padding and why is it necessary?",
          es: "¿Qué es el relleno de secuencia y por qué es necesario?",
          de: "Was ist Sequence Padding und warum ist es notwendig?",
          nl: "Wat is sequence padding en waarom is het noodzakelijk?"
        },
        options: [
          { en: "Adding special tokens to make sequences in a batch the same length for efficient parallel processing", es: "Añadir tokens especiales para hacer secuencias en un lote de la misma longitud para procesamiento paralelo eficiente", de: "Spezielle Tokens hinzufügen um Sequenzen in einem Batch gleich lang zu machen für effiziente parallele Verarbeitung", nl: "Speciale tokens toevoegen om sequenties in een batch dezelfde lengte te maken voor efficiënte parallelle verwerking" },
          { en: "Adding extra layers to the network", es: "Añadir capas extra a la red", de: "Zusätzliche Schichten zum Netzwerk hinzufügen", nl: "Extra lagen toevoegen aan het netwerk" },
          { en: "Making sequences longer for better accuracy", es: "Hacer secuencias más largas para mejor precisión", de: "Sequenzen länger machen für bessere Genauigkeit", nl: "Sequenties langer maken voor betere nauwkeurigheid" },
          { en: "Removing short sequences from training", es: "Remover secuencias cortas del entrenamiento", de: "Kurze Sequenzen aus dem Training entfernen", nl: "Korte sequenties verwijderen uit training" }
        ],
        correct: 0,
        explanation: {
          en: "Padding (typically with zeros or special tokens) enables batch processing of variable-length sequences by making them uniform, though masking is often used to ignore padded positions in loss calculation.",
          es: "El relleno (típicamente con ceros o tokens especiales) habilita procesamiento por lotes de secuencias de longitud variable haciéndolas uniformes, aunque enmascaramiento frecuentemente se usa para ignorar posiciones rellenadas en cálculo de pérdida.",
          de: "Padding (typischerweise mit Nullen oder speziellen Tokens) ermöglicht Batch-Verarbeitung variabler Sequenzlängen durch Vereinheitlichung, obwohl Maskierung oft verwendet wird um gepolsterte Positionen in Verlustberechnung zu ignorieren.",
          nl: "Padding (typisch met nullen of speciale tokens) maakt batch verwerking van variabele-lengte sequenties mogelijk door ze uniform te maken, hoewel masking vaak wordt gebruikt om gevulde posities te negeren in loss berekening."
        }
      },
      {
        question: {
          en: "What is the input gate in LSTM cells?",
          es: "¿Qué es la compuerta de entrada en celdas LSTM?",
          de: "Was ist das Input-Gate in LSTM-Zellen?",
          nl: "Wat is de input gate in LSTM cellen?"
        },
        options: [
          { en: "Controls what new information should be added to the cell state from the current input and previous hidden state", es: "Controla qué nueva información debería añadirse al estado celular desde la entrada actual y estado oculto previo", de: "Kontrolliert welche neuen Informationen dem Zellzustand aus aktueller Eingabe und vorherigem Hidden State hinzugefügt werden sollten", nl: "Controleert welke nieuwe informatie toegevoegd moet worden aan de celstaat vanuit de huidige input en vorige verborgen staat" },
          { en: "Receives the initial input to the network", es: "Recibe la entrada inicial a la red", de: "Empfängt die anfängliche Eingabe zum Netzwerk", nl: "Ontvangt de initiële input aan het netwerk" },
          { en: "Opens and closes to control data flow", es: "Abre y cierra para controlar flujo de datos", de: "Öffnet und schließt um Datenfluss zu kontrollieren", nl: "Opent en sluit om datastroom te controleren" },
          { en: "Determines the size of input sequences", es: "Determina el tamaño de secuencias de entrada", de: "Bestimmt die Größe von Eingabesequenzen", nl: "Bepaalt de grootte van invoersequenties" }
        ],
        correct: 0,
        explanation: {
          en: "The input gate works with a candidate cell state to determine which new values to store in the cell state, enabling selective updating of memory based on relevance.",
          es: "La compuerta de entrada trabaja con un estado celular candidato para determinar qué nuevos valores almacenar en el estado celular, habilitando actualización selectiva de memoria basada en relevancia.",
          de: "Das Input-Gate arbeitet mit einem Kandidaten-Zellzustand um zu bestimmen welche neuen Werte im Zellzustand gespeichert werden sollen, ermöglicht selektive Aktualisierung von Gedächtnis basierend auf Relevanz.",
          nl: "De input gate werkt met een kandidaat celstaat om te bepalen welke nieuwe waarden op te slaan in de celstaat, maakt selectieve update van geheugen mogelijk gebaseerd op relevantie."
        }
      },
      {
        question: {
          en: "What is the output gate in LSTM cells?",
          es: "¿Qué es la compuerta de salida en celdas LSTM?",
          de: "Was ist das Output-Gate in LSTM-Zellen?",
          nl: "Wat is de output gate in LSTM cellen?"
        },
        options: [
          { en: "Determines which parts of the cell state to output as the hidden state for the next time step and for predictions", es: "Determina qué partes del estado celular producir como estado oculto para el siguiente paso temporal y para predicciones", de: "Bestimmt welche Teile des Zellzustands als Hidden State für den nächsten Zeitschritt und für Vorhersagen ausgegeben werden", nl: "Bepaalt welke delen van de celstaat uit te voeren als verborgen staat voor de volgende tijdstap en voor voorspellingen" },
          { en: "Controls the final output of the entire network", es: "Controla la salida final de toda la red", de: "Kontrolliert die finale Ausgabe des gesamten Netzwerks", nl: "Controleert de finale output van het hele netwerk" },
          { en: "Sends data to external systems", es: "Envía datos a sistemas externos", de: "Sendet Daten an externe Systeme", nl: "Stuurt data naar externe systemen" },
          { en: "Determines when to stop generation", es: "Determina cuándo detener generación", de: "Bestimmt wann Generierung gestoppt wird", nl: "Bepaalt wanneer generatie te stoppen" }
        ],
        correct: 0,
        explanation: {
          en: "The output gate filters the cell state (after applying tanh) to produce the hidden state, controlling what information from the cell's memory influences the current output and next time step.",
          es: "La compuerta de salida filtra el estado celular (después de aplicar tanh) para producir el estado oculto, controlando qué información de la memoria de la celda influye la salida actual y siguiente paso temporal.",
          de: "Das Output-Gate filtert den Zellzustand (nach Anwendung von tanh) um den Hidden State zu produzieren, kontrolliert welche Informationen aus dem Gedächtnis der Zelle die aktuelle Ausgabe und nächsten Zeitschritt beeinflussen.",
          nl: "De output gate filtert de celstaat (na toepassing van tanh) om de verborgen staat te produceren, controleert welke informatie uit het geheugen van de cel de huidige output en volgende tijdstap beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the difference between stateful and stateless RNNs?",
          es: "¿Cuál es la diferencia entre RNNs con estado y sin estado?",
          de: "Was ist der Unterschied zwischen Stateful und Stateless RNNs?",
          nl: "Wat is het verschil tussen stateful en stateless RNNs?"
        },
        options: [
          { en: "Stateful RNNs maintain hidden state across batches, stateless reset state between batches", es: "RNNs con estado mantienen estado oculto a través de lotes, sin estado reinician estado entre lotes", de: "Stateful RNNs behalten Hidden State über Batches, Stateless setzen Zustand zwischen Batches zurück", nl: "Stateful RNNs behouden verborgen staat over batches, stateless resetten staat tussen batches" },
          { en: "Stateful use LSTM cells, stateless use GRU cells", es: "Con estado usan celdas LSTM, sin estado usan celdas GRU", de: "Stateful verwenden LSTM-Zellen, Stateless verwenden GRU-Zellen", nl: "Stateful gebruiken LSTM cellen, stateless gebruiken GRU cellen" },
          { en: "Stateful are faster, stateless more accurate", es: "Con estado son más rápidas, sin estado más precisas", de: "Stateful sind schneller, Stateless genauer", nl: "Stateful zijn sneller, stateless nauwkeuriger" },
          { en: "There is no practical difference", es: "No hay diferencia práctica", de: "Es gibt keinen praktischen Unterschied", nl: "Er is geen praktisch verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Stateful RNNs carry the hidden state from the end of one batch to the beginning of the next, useful for long sequences split across batches, while stateless RNNs always start fresh.",
          es: "Las RNNs con estado llevan el estado oculto del final de un lote al inicio del siguiente, útil para secuencias largas divididas en lotes, mientras RNNs sin estado siempre inician de nuevo.",
          de: "Stateful RNNs tragen den Hidden State vom Ende eines Batches zum Beginn des nächsten, nützlich für lange Sequenzen über Batches verteilt, während Stateless RNNs immer frisch starten.",
          nl: "Stateful RNNs dragen de verborgen staat van het einde van een batch naar het begin van de volgende, nuttig voor lange sequenties verdeeld over batches, terwijl stateless RNNs altijd opnieuw beginnen."
        }
      },
      {
        question: {
          en: "What is the perplexity metric in language modeling?",
          es: "¿Qué es la métrica de perplejidad en modelado de lenguaje?",
          de: "Was ist die Perplexity-Metrik in Sprachmodellierung?",
          nl: "Wat is de perplexity metric in taalmodellering?"
        },
        options: [
          { en: "Measures how well a model predicts sequences, with lower values indicating better prediction and less uncertainty", es: "Mide qué tan bien un modelo predice secuencias, con valores más bajos indicando mejor predicción y menos incertidumbre", de: "Misst wie gut ein Modell Sequenzen vorhersagt, mit niedrigeren Werten die bessere Vorhersage und weniger Unsicherheit anzeigen", nl: "Meet hoe goed een model sequenties voorspelt, met lagere waarden die betere voorspelling en minder onzekerheid aangeven" },
          { en: "The complexity of the model architecture", es: "La complejidad de la arquitectura del modelo", de: "Die Komplexität der Modellarchitektur", nl: "De complexiteit van de modelarchitectuur" },
          { en: "How confused humans are by the model output", es: "Qué tan confundidos están humanos por la salida del modelo", de: "Wie verwirrt Menschen von der Modellausgabe sind", nl: "Hoe verward mensen zijn door de modeloutput" },
          { en: "The training time required", es: "El tiempo de entrenamiento requerido", de: "Die benötigte Trainingszeit", nl: "De vereiste trainingstijd" }
        ],
        correct: 0,
        explanation: {
          en: "Perplexity is the exponential of the average negative log-likelihood, representing the weighted average branching factor of predictions - a perplexity of 100 means the model is as confused as if choosing uniformly from 100 options.",
          es: "La perplejidad es el exponencial del logaritmo negativo promedio de verosimilitud, representando el factor de ramificación promedio ponderado de predicciones - una perplejidad de 100 significa que el modelo está tan confundido como si eligiera uniformemente de 100 opciones.",
          de: "Perplexity ist das Exponential der durchschnittlichen negativen Log-Likelihood, repräsentiert den gewichteten durchschnittlichen Verzweigungsfaktor von Vorhersagen - eine Perplexity von 100 bedeutet das Modell ist so verwirrt als würde es uniform aus 100 Optionen wählen.",
          nl: "Perplexity is de exponentiële van de gemiddelde negatieve log-likelihood, vertegenwoordigt de gewogen gemiddelde vertakkingsfactor van voorspellingen - een perplexity van 100 betekent dat het model zo verward is alsof het uniform kiest uit 100 opties."
        }
      },
      {
        question: {
          en: "What is the purpose of word embeddings in NLP tasks?",
          es: "¿Cuál es el propósito de los embeddings de palabras en tareas de NLP?",
          de: "Was ist der Zweck von Word Embeddings in NLP-Aufgaben?",
          nl: "Wat is het doel van word embeddings in NLP taken?"
        },
        options: [
          { en: "Converting discrete words into continuous vector representations that capture semantic and syntactic relationships", es: "Convertir palabras discretas en representaciones vectoriales continuas que capturan relaciones semánticas y sintácticas", de: "Diskrete Wörter in kontinuierliche Vektorrepräsentationen umwandeln die semantische und syntaktische Beziehungen erfassen", nl: "Discrete woorden converteren naar continue vectorrepresentaties die semantische en syntactische relaties vastleggen" },
          { en: "Making text shorter for faster processing", es: "Hacer texto más corto para procesamiento más rápido", de: "Text kürzer machen für schnellere Verarbeitung", nl: "Tekst korter maken voor snellere verwerking" },
          { en: "Encrypting text for security", es: "Cifrar texto para seguridad", de: "Text für Sicherheit verschlüsseln", nl: "Tekst versleutelen voor beveiliging" },
          { en: "Translating words to different languages", es: "Traducir palabras a diferentes idiomas", de: "Wörter in verschiedene Sprachen übersetzen", nl: "Woorden vertalen naar verschillende talen" }
        ],
        correct: 0,
        explanation: {
          en: "Embeddings map words to dense vectors where semantically similar words are close in vector space, enabling neural networks to leverage word meanings and relationships learned from large text corpora.",
          es: "Los embeddings mapean palabras a vectores densos donde palabras semánticamente similares están cerca en espacio vectorial, habilitando redes neuronales a aprovechar significados de palabras y relaciones aprendidas de grandes corpus de texto.",
          de: "Embeddings bilden Wörter auf dichte Vektoren ab wo semantisch ähnliche Wörter nah im Vektorraum sind, ermöglichen neuronalen Netzwerken Wortbedeutungen und Beziehungen aus großen Textkorpora gelernt zu nutzen.",
          nl: "Embeddings mappen woorden naar dichte vectoren waar semantisch vergelijkbare woorden dicht bij elkaar zijn in vectorruimte, stellen neurale netwerken in staat om woordbetekenissen en relaties geleerd uit grote tekstcorpora te benutten."
        }
      },
      {
        question: {
          en: "What is zero-shot, one-shot, and few-shot learning in sequence models?",
          es: "¿Qué es el aprendizaje zero-shot, one-shot y few-shot en modelos de secuencia?",
          de: "Was ist Zero-Shot, One-Shot und Few-Shot Lernen in Sequenzmodellen?",
          nl: "Wat is zero-shot, one-shot en few-shot leren in sequentiemodellen?"
        },
        options: [
          { en: "Learning to perform tasks with zero, one, or a few examples respectively, leveraging pre-trained knowledge", es: "Aprender a realizar tareas con cero, uno o pocos ejemplos respectivamente, aprovechando conocimiento pre-entrenado", de: "Lernen Aufgaben mit null, einem oder wenigen Beispielen jeweils durchzuführen, nutzt vortrainiertes Wissen", nl: "Leren om taken uit te voeren met nul, één of enkele voorbeelden respectievelijk, benut voorgetrainde kennis" },
          { en: "Different training speeds for models", es: "Diferentes velocidades de entrenamiento para modelos", de: "Verschiedene Trainingsgeschwindigkeiten für Modelle", nl: "Verschillende trainingssnelheden voor modellen" },
          { en: "The number of shots needed for data augmentation", es: "El número de disparos necesarios para aumentación de datos", de: "Die Anzahl der Shots die für Datenaugmentation benötigt werden", nl: "Het aantal shots nodig voor data augmentatie" },
          { en: "Different batch sizes during training", es: "Diferentes tamaños de lote durante entrenamiento", de: "Verschiedene Batch-Größen während Training", nl: "Verschillende batch groottes tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "These paradigms test a model's ability to generalize: zero-shot requires performing new tasks without examples, one-shot with a single example, and few-shot with a handful, all without fine-tuning.",
          es: "Estos paradigmas prueban la capacidad de un modelo para generalizar: zero-shot requiere realizar tareas nuevas sin ejemplos, one-shot con un solo ejemplo, y few-shot con unos pocos, todos sin ajuste fino.",
          de: "Diese Paradigmen testen die Fähigkeit eines Modells zu generalisieren: Zero-Shot erfordert neue Aufgaben ohne Beispiele durchzuführen, One-Shot mit einem einzelnen Beispiel, und Few-Shot mit wenigen, alle ohne Fine-Tuning.",
          nl: "Deze paradigma's testen het vermogen van een model om te generaliseren: zero-shot vereist het uitvoeren van nieuwe taken zonder voorbeelden, one-shot met een enkel voorbeeld, en few-shot met een handvol, allemaal zonder fine-tuning."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();