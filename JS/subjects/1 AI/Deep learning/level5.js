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
          { en: "A framework using encoder-decoder architecture to transform input sequences into output sequences of potentially different lengths", es: "Un marco usando arquitectura codificador-decodificador para transformar secuencias de entrada en secuencias de salida de longitudes potencialmente diferentes", de: "Ein Framework mit Encoder-Decoder-Architektur um Eingabesequenzen in Ausgabesequenzen potenziell verschiedener Längen zu transformieren", nl: "Een framework dat encoder-decoder architectuur gebruikt om invoersequenties te transformeren naar uitvoersequenties van mogelijk verschillende lengtes" },
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
          { en: "Using ground truth outputs as inputs during training instead of the model's own predictions to stabilize learning", es: "Usar salidas de verdad fundamental como entradas durante entrenamiento en lugar de las predicciones del modelo para estabilizar aprendizaje", de: "Verwendung von Ground Truth Ausgaben als Eingaben während Training anstatt der eigenen Vorhersagen des Modells um Lernen zu stabilisieren", nl: "Het gebruik van ground truth outputs als inputs tijdens training in plaats van de eigen voorspellingen van het model om leren te stabiliseren" },
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
          { en: "Many-to-one produces single output from sequence (sentiment analysis), one-to-many generates sequence from single input (image captioning), many-to-many maps sequences to sequences (translation)", es: "Muchos-a-uno produce salida única de secuencia (análisis de sentimientos), uno-a-muchos genera secuencia de entrada única (subtitulado de imagen), muchos-a-muchos mapea secuencias a secuencias (traducción)", de: "Viele-zu-Eins produziert einzelne Ausgabe aus Sequenz (Sentimentanalyse), Eins-zu-Viele generiert Sequenz aus einzelner Eingabe (Bildbeschriftung), Viele-zu-Viele mappt Sequenzen zu Sequenzen (Übersetzung)", nl: "Veel-naar-één produceert enkele output uit sequentie (sentimentanalyse), één-naar-veel genereert sequentie uit enkele input (beeldbijschrift), veel-naar-veel mapt sequenties naar sequenties (vertaling)" },
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
          { en: "A decoding algorithm that maintains multiple candidate sequences during generation, used for better quality outputs in text generation and translation", es: "Un algoritmo de decodificación que mantiene múltiples secuencias candidatas durante generación, usado para salidas de mejor calidad en generación de texto y traducción", de: "Ein Dekodierungsalgorithmus der mehrere Kandidatensequenzen während Generierung beibehält, verwendet für bessere Qualität von Ausgaben in Textgenerierung und Übersetzung", nl: "Een decodeeralgoritme dat meerdere kandidaatsequenties behoudt tijdens generatie, gebruikt voor betere kwaliteit outputs in tekstgeneratie en vertaling" },
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
          { en: "Hidden states carry information from previous time steps, acting as the network's memory to capture temporal dependencies", es: "Los estados ocultos llevan información de pasos temporales previos, actuando como memoria de la red para capturar dependencias temporales", de: "Versteckte Zustände tragen Informationen von vorherigen Zeitschritten, fungieren als Gedächtnis des Netzwerks um zeitliche Abhängigkeiten zu erfassen", nl: "Verborgen toestanden dragen informatie van vorige tijdstappen, fungeren als het geheugen van het netwerk om temporele afhankelijkheden vast te leggen" },
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
          { en: "Limiting backpropagation to a fixed number of time steps to reduce computational cost and memory usage while maintaining training effectiveness", es: "Limitar retropropagación a un número fijo de pasos temporales para reducir costo computacional y uso de memoria mientras mantiene efectividad de entrenamiento", de: "Backpropagation auf eine feste Anzahl von Zeitschritten begrenzen um rechnerische Kosten und Speicherverbrauch zu reduzieren während Trainingseffektivität beibehalten wird", nl: "Backpropagation beperken tot een vast aantal tijdstappen om computationele kosten en geheugengebruik te verminderen terwijl trainingseffectiviteit behouden blijft" },
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
          { en: "CNNs excel at spatial patterns in grid-like data using convolution and pooling, while RNNs handle sequential data with temporal dependencies using recurrent connections", es: "Las CNNs sobresalen en patrones espaciales en datos tipo rejilla usando convolución y pooling, mientras las RNNs manejan datos secuenciales con dependencias temporales usando conexiones recurrentes", de: "CNNs glänzen bei räumlichen Mustern in gitterartigen Daten mit Faltung und Pooling, während RNNs sequenzielle Daten mit zeitlichen Abhängigkeiten mit rekurrenten Verbindungen handhaben", nl: "CNNs blinken uit in ruimtelijke patronen in rasterachtige data met convolutie en pooling, terwijl RNNs sequentiële data met temporele afhankelijkheden hanteren met recurrente verbindingen" },
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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();