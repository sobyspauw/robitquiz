// Neural Networks Quiz - Level 8: Advanced Architectures - Transformers & Attention
(function() {
  const level8 = {
    name: {
      en: "Advanced Architectures - Transformers & Attention",
      es: "Arquitecturas Avanzadas - Transformers y Atención",
      de: "Erweiterte Architekturen - Transformers & Aufmerksamkeit",
      nl: "Geavanceerde Architecturen - Transformers & Aandacht"
    },
    questions: [
      {
        question: {
          en: "What is the key innovation that makes Transformers different from RNNs?",
          es: "¿Cuál es la innovación clave que hace a los Transformers diferentes de las RNNs?",
          de: "Was ist die Schlüsselinnovation die Transformers von RNNs unterscheidet?",
          nl: "Wat is de belangrijkste innovatie die Transformers anders maakt dan RNN's?"
        },
        options: [
          { en: "Self-attention mechanism that processes all positions in parallel", es: "Mecanismo de auto-atención que procesa todas las posiciones en paralelo", de: "Selbstaufmerksamkeitsmechanismus der alle Positionen parallel verarbeitet", nl: "Zelf-aandachtsmechanisme dat alle posities parallel verwerkt" },
          { en: "Using convolutional layers instead of recurrent layers", es: "Usar capas convolucionales en lugar de capas recurrentes", de: "Verwendung von Faltungsschichten anstelle von rekurrenten Schichten", nl: "Het gebruik van convolutionele lagen in plaats van recurrente lagen" },
          { en: "Having deeper networks with more parameters", es: "Tener redes más profundas con más parámetros", de: "Tiefere Netzwerke mit mehr Parametern haben", nl: "Diepere netwerken hebben met meer parameters" },
          { en: "Processing sequences backwards from end to beginning", es: "Procesar secuencias hacia atrás de fin a principio", de: "Sequenzen rückwärts von Ende zu Anfang verarbeiten", nl: "Sequenties achterwaarts verwerken van eind naar begin" }
        ],
        correct: 0,
        explanation: {
          en: "Transformers use self-attention to compute representations of all positions in a sequence simultaneously, unlike RNNs which process sequentially. This allows for better parallelization and the ability to capture long-range dependencies more effectively.",
          es: "Los Transformers usan auto-atención para calcular representaciones de todas las posiciones en una secuencia simultáneamente, a diferencia de las RNNs que procesan secuencialmente. Esto permite mejor paralelización y la capacidad de capturar dependencias de largo alcance más efectivamente.",
          de: "Transformers verwenden Selbstaufmerksamkeit um Repräsentationen aller Positionen in einer Sequenz gleichzeitig zu berechnen, im Gegensatz zu RNNs die sequenziell verarbeiten. Dies ermöglicht bessere Parallelisierung und die Fähigkeit langreichweitige Abhängigkeiten effektiver zu erfassen.",
          nl: "Transformers gebruiken zelf-aandacht om representaties van alle posities in een sequentie tegelijkertijd te berekenen, in tegenstelling tot RNN's die sequentieel verwerken. Dit maakt betere parallelisatie mogelijk en het vermogen om langafstandsafhankelijkheden effectiever vast te leggen."
        }
      },
      {
        question: {
          en: "What is the purpose of multi-head attention in Transformers?",
          es: "¿Cuál es el propósito de la atención multi-cabeza en los Transformers?",
          de: "Was ist der Zweck von Multi-Head-Aufmerksamkeit in Transformers?",
          nl: "Wat is het doel van multi-head aandacht in Transformers?"
        },
        options: [
          { en: "Allow the model to attend to different representation subspaces simultaneously", es: "Permitir al modelo atender a diferentes subespacios de representación simultáneamente", de: "Dem Modell ermöglichen gleichzeitig verschiedene Repräsentations-Unterräume zu beachten", nl: "Het model in staat stellen om gelijktijdig aandacht te schenken aan verschillende representatie-subspaces" },
          { en: "Process multiple sequences in parallel", es: "Procesar múltiples secuencias en paralelo", de: "Mehrere Sequenzen parallel verarbeiten", nl: "Meerdere sequenties parallel verwerken" },
          { en: "Increase the depth of the attention mechanism", es: "Aumentar la profundidad del mecanismo de atención", de: "Die Tiefe des Aufmerksamkeitsmechanismus erhöhen", nl: "De diepte van het aandachtsmechanisme verhogen" },
          { en: "Apply attention to multiple input modalities", es: "Aplicar atención a múltiples modalidades de entrada", de: "Aufmerksamkeit auf mehrere Eingabemodalitäten anwenden", nl: "Aandacht toepassen op meerdere invoermodaliteiten" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-head attention runs multiple attention functions in parallel, each focusing on different representation subspaces. This allows the model to jointly attend to information from different positions and representation subspaces, capturing various types of relationships.",
          es: "La atención multi-cabeza ejecuta múltiples funciones de atención en paralelo, cada una enfocándose en diferentes subespacios de representación. Esto permite al modelo atender conjuntamente a información de diferentes posiciones y subespacios de representación, capturando varios tipos de relaciones.",
          de: "Multi-Head-Aufmerksamkeit führt mehrere Aufmerksamkeitsfunktionen parallel aus, die sich jeweils auf verschiedene Repräsentations-Unterräume konzentrieren. Dies ermöglicht dem Modell gemeinsam auf Informationen von verschiedenen Positionen und Repräsentations-Unterräumen zu achten und verschiedene Arten von Beziehungen zu erfassen.",
          nl: "Multi-head aandacht voert meerdere aandachtsfuncties parallel uit, elk gericht op verschillende representatie-subspaces. Dit stelt het model in staat om gezamenlijk aandacht te schenken aan informatie van verschillende posities en representatie-subspaces, waarbij verschillende soorten relaties worden vastgelegd."
        }
      },
      {
        question: {
          en: "What role do positional encodings play in Transformer architectures?",
          es: "¿Qué papel juegan las codificaciones posicionales en las arquitecturas Transformer?",
          de: "Welche Rolle spielen Positionskodierungen in Transformer-Architekturen?",
          nl: "Welke rol spelen positionele coderingen in Transformer-architecturen?"
        },
        options: [
          { en: "Provide sequence order information since attention is permutation-invariant", es: "Proporcionar información del orden de secuencia ya que la atención es invariante a permutaciones", de: "Sequenzreihenfolgen-Information bereitstellen da Aufmerksamkeit permutationsinvariant ist", nl: "Volgorde-informatie van sequenties verstrekken omdat aandacht permutatie-invariant is" },
          { en: "Encode the absolute positions of words in the vocabulary", es: "Codificar las posiciones absolutas de palabras en el vocabulario", de: "Absolute Positionen von Wörtern im Vokabular kodieren", nl: "Absolute posities van woorden in de woordenschat coderen" },
          { en: "Determine which tokens should receive more attention", es: "Determinar qué tokens deben recibir más atención", de: "Bestimmen welche Token mehr Aufmerksamkeit erhalten sollten", nl: "Bepalen welke tokens meer aandacht moeten krijgen" },
          { en: "Control the learning rate for different sequence positions", es: "Controlar la tasa de aprendizaje para diferentes posiciones de secuencia", de: "Lernrate für verschiedene Sequenzpositionen steuern", nl: "Leersnelheid controleren voor verschillende sequentieposities" }
        ],
        correct: 0,
        explanation: {
          en: "Since self-attention operations are permutation-invariant (they treat input as a set), positional encodings are added to input embeddings to inject information about the relative or absolute position of tokens in the sequence.",
          es: "Dado que las operaciones de auto-atención son invariantes a permutaciones (tratan la entrada como un conjunto), las codificaciones posicionales se agregan a las incrustaciones de entrada para inyectar información sobre la posición relativa o absoluta de los tokens en la secuencia.",
          de: "Da Selbstaufmerksamkeitsoperationen permutationsinvariant sind (sie behandeln Eingabe als Menge), werden Positionskodierungen zu Eingabeeinbettungen hinzugefügt um Informationen über relative oder absolute Position von Token in der Sequenz einzufügen.",
          nl: "Omdat zelf-aandachtsoperaties permutatie-invariant zijn (ze behandelen invoer als een set), worden positionele coderingen toegevoegd aan invoer-embeddings om informatie in te voegen over de relatieve of absolute positie van tokens in de sequentie."
        }
      },
      {
        question: {
          en: "What is the main difference between BERT and GPT architectures?",
          es: "¿Cuál es la principal diferencia entre las arquitecturas BERT y GPT?",
          de: "Was ist der Hauptunterschied zwischen BERT- und GPT-Architekturen?",
          nl: "Wat is het belangrijkste verschil tussen BERT en GPT architecturen?"
        },
        options: [
          { en: "BERT is bidirectional (encoder-only), GPT is unidirectional (decoder-only)", es: "BERT es bidireccional (solo codificador), GPT es unidireccional (solo decodificador)", de: "BERT ist bidirektional (nur Encoder), GPT ist unidirektional (nur Decoder)", nl: "BERT is bidirectioneel (alleen encoder), GPT is unidirectioneel (alleen decoder)" },
          { en: "BERT uses convolutional layers, GPT uses only attention", es: "BERT usa capas convolucionales, GPT usa solo atención", de: "BERT verwendet Faltungsschichten, GPT verwendet nur Aufmerksamkeit", nl: "BERT gebruikt convolutionele lagen, GPT gebruikt alleen aandacht" },
          { en: "BERT is for classification, GPT is for generation", es: "BERT es para clasificación, GPT es para generación", de: "BERT ist für Klassifizierung, GPT ist für Generierung", nl: "BERT is voor classificatie, GPT is voor generatie" },
          { en: "BERT processes text, GPT processes images", es: "BERT procesa texto, GPT procesa imágenes", de: "BERT verarbeitet Text, GPT verarbeitet Bilder", nl: "BERT verwerkt tekst, GPT verwerkt beelden" }
        ],
        correct: 0,
        explanation: {
          en: "BERT uses only the encoder part of the Transformer and can attend to tokens in both directions (bidirectional), making it suitable for understanding tasks. GPT uses only the decoder part with causal (masked) attention, making it suitable for autoregressive text generation.",
          es: "BERT usa solo la parte del codificador del Transformer y puede atender a tokens en ambas direcciones (bidireccional), haciéndolo adecuado para tareas de comprensión. GPT usa solo la parte del decodificador con atención causal (enmascarada), haciéndolo adecuado para generación autoregresiva de texto.",
          de: "BERT verwendet nur den Encoder-Teil des Transformers und kann Token in beide Richtungen beachten (bidirektional), was es für Verständnisaufgaben geeignet macht. GPT verwendet nur den Decoder-Teil mit kausaler (maskierter) Aufmerksamkeit, was es für autoregressive Textgenerierung geeignet macht.",
          nl: "BERT gebruikt alleen het encoder-deel van de Transformer en kan aandacht schenken aan tokens in beide richtingen (bidirectioneel), waardoor het geschikt is voor begrip-taken. GPT gebruikt alleen het decoder-deel met causale (gemaskeerde) aandacht, waardoor het geschikt is voor autoregressieve tekstgeneratie."
        }
      },
      {
        question: {
          en: "What is the scaled dot-product attention formula's scaling factor and why is it used?",
          es: "¿Cuál es el factor de escala de la fórmula de atención producto escalar escalado y por qué se usa?",
          de: "Was ist der Skalierungsfaktor der skalierten Punkt-Produkt-Aufmerksamkeitsformel und warum wird er verwendet?",
          nl: "Wat is de schaalfactor van de geschaalde dot-product aandachtsformule en waarom wordt deze gebruikt?"
        },
        options: [
          { en: "1/√dk to prevent gradients from becoming too small when dk is large", es: "1/√dk para prevenir que los gradientes se vuelvan muy pequeños cuando dk es grande", de: "1/√dk um zu verhindern dass Gradienten zu klein werden wenn dk groß ist", nl: "1/√dk om te voorkomen dat gradiënten te klein worden wanneer dk groot is" },
          { en: "dk to amplify attention weights for better performance", es: "dk para amplificar pesos de atención para mejor rendimiento", de: "dk um Aufmerksamkeitsgewichte für bessere Leistung zu verstärken", nl: "dk om aandachtsgewichten te versterken voor betere prestaties" },
          { en: "√dk to normalize attention weights to unit variance", es: "√dk para normalizar pesos de atención a varianza unitaria", de: "√dk um Aufmerksamkeitsgewichte auf Einheitsvarianz zu normalisieren", nl: "√dk om aandachtsgewichten te normaliseren tot eenheidsvariatie" },
          { en: "1/dk to ensure attention weights sum to 1", es: "1/dk para asegurar que los pesos de atención sumen 1", de: "1/dk um sicherzustellen dass Aufmerksamkeitsgewichte zu 1 summieren", nl: "1/dk om ervoor te zorgen dat aandachtsgewichten optellen tot 1" }
        ],
        correct: 0,
        explanation: {
          en: "The scaling factor 1/√dk prevents the dot products from growing too large when the key dimension dk is large. Large dot products push the softmax function into regions with extremely small gradients, making training difficult.",
          es: "El factor de escala 1/√dk previene que los productos punto crezcan demasiado cuando la dimensión de clave dk es grande. Productos punto grandes empujan la función softmax hacia regiones con gradientes extremadamente pequeños, dificultando el entrenamiento.",
          de: "Der Skalierungsfaktor 1/√dk verhindert dass Punkt-Produkte zu groß werden wenn die Schlüsseldimension dk groß ist. Große Punkt-Produkte drängen die Softmax-Funktion in Bereiche mit extrem kleinen Gradienten und erschweren das Training.",
          nl: "De schaalfactor 1/√dk voorkomt dat dot-producten te groot worden wanneer de sleuteldimensie dk groot is. Grote dot-producten duwen de softmax-functie naar gebieden met extreem kleine gradiënten, wat training moeilijk maakt."
        }
      },
      {
        question: {
          en: "What is the purpose of layer normalization in Transformers?",
          es: "¿Cuál es el propósito de la normalización de capa en los Transformers?",
          de: "Was ist der Zweck der Schichtnormalisierung in Transformers?",
          nl: "Wat is het doel van laagnormalisatie in Transformers?"
        },
        options: [
          { en: "Stabilize training by normalizing inputs across the feature dimension", es: "Estabilizar entrenamiento normalizando entradas a través de la dimensión de características", de: "Training stabilisieren durch Normalisierung von Eingaben über die Feature-Dimension", nl: "Training stabiliseren door invoer te normaliseren over de feature-dimensie" },
          { en: "Reduce the number of parameters in each layer", es: "Reducir el número de parámetros en cada capa", de: "Die Anzahl der Parameter in jeder Schicht reduzieren", nl: "Het aantal parameters in elke laag verminderen" },
          { en: "Prevent overfitting by adding regularization", es: "Prevenir sobreajuste agregando regularización", de: "Overfitting durch Hinzufügen von Regularisierung verhindern", nl: "Overfitting voorkomen door regularisatie toe te voegen" },
          { en: "Enable parallel processing of different layers", es: "Habilitar procesamiento paralelo de diferentes capas", de: "Parallele Verarbeitung verschiedener Schichten ermöglichen", nl: "Parallelle verwerking van verschillende lagen mogelijk maken" }
        ],
        correct: 0,
        explanation: {
          en: "Layer normalization normalizes inputs across the feature dimension for each individual example, helping to stabilize training dynamics and enabling the use of higher learning rates. Unlike batch normalization, it doesn't depend on batch statistics.",
          es: "La normalización de capa normaliza entradas a través de la dimensión de características para cada ejemplo individual, ayudando a estabilizar la dinámica de entrenamiento y habilitando el uso de tasas de aprendizaje más altas. A diferencia de la normalización por lotes, no depende de estadísticas de lote.",
          de: "Schichtnormalisierung normalisiert Eingaben über die Feature-Dimension für jedes einzelne Beispiel, hilft Trainingsdynamiken zu stabilisieren und ermöglicht die Verwendung höherer Lernraten. Im Gegensatz zur Batch-Normalisierung hängt sie nicht von Batch-Statistiken ab.",
          nl: "Laagnormalisatie normaliseert invoer over de feature-dimensie voor elk individueel voorbeeld, wat helpt trainingsdynamiek te stabiliseren en het gebruik van hogere leersnelheden mogelijk maakt. In tegenstelling tot batch-normalisatie hangt het niet af van batch-statistieken."
        }
      },
      {
        question: {
          en: "What is the masked language modeling objective used in BERT training?",
          es: "¿Cuál es el objetivo de modelado de lenguaje enmascarado usado en el entrenamiento de BERT?",
          de: "Was ist das maskierte Sprachmodellierungsziel das im BERT-Training verwendet wird?",
          nl: "Wat is de gemaskeerde taalmodellering doelstelling gebruikt in BERT training?"
        },
        options: [
          { en: "Predict randomly masked tokens using bidirectional context", es: "Predecir tokens aleatoriamente enmascarados usando contexto bidireccional", de: "Zufällig maskierte Token unter Verwendung bidirektionalen Kontexts vorhersagen", nl: "Willekeurig gemaskeerde tokens voorspellen met behulp van bidirectionele context" },
          { en: "Generate the next word in a sequence from left to right", es: "Generar la siguiente palabra en una secuencia de izquierda a derecha", de: "Das nächste Wort in einer Sequenz von links nach rechts generieren", nl: "Het volgende woord in een sequentie genereren van links naar rechts" },
          { en: "Classify whether two sentences are semantically similar", es: "Clasificar si dos oraciones son semánticamente similares", de: "Klassifizieren ob zwei Sätze semantisch ähnlich sind", nl: "Classificeren of twee zinnen semantisch vergelijkbaar zijn" },
          { en: "Translate masked tokens from one language to another", es: "Traducir tokens enmascarados de un idioma a otro", de: "Maskierte Token von einer Sprache in eine andere übersetzen", nl: "Gemaskeerde tokens vertalen van de ene taal naar de andere" }
        ],
        correct: 0,
        explanation: {
          en: "BERT uses masked language modeling where approximately 15% of input tokens are randomly masked, and the model must predict these masked tokens using the surrounding bidirectional context. This enables the model to learn rich bidirectional representations.",
          es: "BERT usa modelado de lenguaje enmascarado donde aproximadamente 15% de los tokens de entrada son aleatoriamente enmascarados, y el modelo debe predecir estos tokens enmascarados usando el contexto bidireccional circundante. Esto permite al modelo aprender representaciones bidireccionales ricas.",
          de: "BERT verwendet maskierte Sprachmodellierung bei der etwa 15% der Eingabe-Token zufällig maskiert werden und das Modell diese maskierten Token unter Verwendung des umgebenden bidirektionalen Kontexts vorhersagen muss. Dies ermöglicht dem Modell reiche bidirektionale Repräsentationen zu lernen.",
          nl: "BERT gebruikt gemaskeerde taalmodellering waarbij ongeveer 15% van de invoertokens willekeurig gemaskeerd worden, en het model moet deze gemaskeerde tokens voorspellen met behulp van de omringende bidirectionele context. Dit stelt het model in staat om rijke bidirectionele representaties te leren."
        }
      },
      {
        question: {
          en: "How do Vision Transformers (ViTs) adapt the Transformer architecture for images?",
          es: "¿Cómo adaptan los Vision Transformers (ViTs) la arquitectura Transformer para imágenes?",
          de: "Wie passen Vision Transformers (ViTs) die Transformer-Architektur für Bilder an?",
          nl: "Hoe passen Vision Transformers (ViTs) de Transformer-architectuur aan voor beelden?"
        },
        options: [
          { en: "Split images into patches and treat them as sequence tokens", es: "Dividir imágenes en parches y tratarlos como tokens de secuencia", de: "Bilder in Patches aufteilen und sie als Sequenz-Token behandeln", nl: "Beelden opdelen in patches en ze behandelen als sequentie-tokens" },
          { en: "Apply 3D convolutions before the attention layers", es: "Aplicar convoluciones 3D antes de las capas de atención", de: "3D-Faltungen vor den Aufmerksamkeitsschichten anwenden", nl: "3D convoluties toepassen voor de aandachtslagen" },
          { en: "Use recurrent connections to process spatial relationships", es: "Usar conexiones recurrentes para procesar relaciones espaciales", de: "Rekurrente Verbindungen zur Verarbeitung räumlicher Beziehungen verwenden", nl: "Recurrente verbindingen gebruiken om ruimtelijke relaties te verwerken" },
          { en: "Replace attention with pooling operations for efficiency", es: "Reemplazar atención con operaciones de pooling para eficiencia", de: "Aufmerksamkeit durch Pooling-Operationen für Effizienz ersetzen", nl: "Aandacht vervangen door pooling-operaties voor efficiëntie" }
        ],
        correct: 0,
        explanation: {
          en: "Vision Transformers divide input images into fixed-size patches (e.g., 16x16 pixels), linearly embed each patch, and treat the sequence of patch embeddings as tokens for the Transformer. A learnable classification token is typically prepended to the sequence.",
          es: "Los Vision Transformers dividen imágenes de entrada en parches de tamaño fijo (ej., 16x16 píxeles), incrustan linealmente cada parche, y tratan la secuencia de incrustaciones de parches como tokens para el Transformer. Un token de clasificación aprendible típicamente se antepone a la secuencia.",
          de: "Vision Transformers teilen Eingabebilder in Patches fester Größe (z.B. 16x16 Pixel), betten jeden Patch linear ein und behandeln die Sequenz von Patch-Einbettungen als Token für den Transformer. Ein lernbarer Klassifizierungs-Token wird typischerweise der Sequenz vorangestellt.",
          nl: "Vision Transformers verdelen invoerbeelden in patches van vaste grootte (bijv. 16x16 pixels), embedden elke patch lineair, en behandelen de sequentie van patch-embeddings als tokens voor de Transformer. Een leerbare classificatie-token wordt typisch vooraan de sequentie geplaatst."
        }
      },
      {
        question: {
          en: "What is the purpose of the feed-forward network (FFN) in each Transformer layer?",
          es: "¿Cuál es el propósito de la red feed-forward (FFN) en cada capa Transformer?",
          de: "Was ist der Zweck des Feed-Forward-Netzwerks (FFN) in jeder Transformer-Schicht?",
          nl: "Wat is het doel van het feed-forward netwerk (FFN) in elke Transformer-laag?"
        },
        options: [
          { en: "Apply position-wise nonlinear transformations after attention", es: "Aplicar transformaciones no lineales por posición después de la atención", de: "Positionsweise nichtlineare Transformationen nach der Aufmerksamkeit anwenden", nl: "Positiegewijze niet-lineaire transformaties toepassen na aandacht" },
          { en: "Connect different attention heads together", es: "Conectar diferentes cabezas de atención juntas", de: "Verschiedene Aufmerksamkeits-Köpfe miteinander verbinden", nl: "Verschillende aandachtskoppen met elkaar verbinden" },
          { en: "Normalize the attention weights", es: "Normalizar los pesos de atención", de: "Die Aufmerksamkeitsgewichte normalisieren", nl: "De aandachtsgewichten normaliseren" },
          { en: "Reduce the dimensionality of the hidden states", es: "Reducir la dimensionalidad de los estados ocultos", de: "Die Dimensionalität der versteckten Zustände reduzieren", nl: "De dimensionaliteit van de verborgen toestanden verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "The FFN applies two linear transformations with a ReLU activation in between, processed independently and identically at each position. This provides additional non-linear processing power and typically expands and then contracts the dimensionality.",
          es: "La FFN aplica dos transformaciones lineales con una activación ReLU en el medio, procesadas independiente e idénticamente en cada posición. Esto proporciona poder de procesamiento no lineal adicional y típicamente expande y luego contrae la dimensionalidad.",
          de: "Das FFN wendet zwei lineare Transformationen mit einer ReLU-Aktivierung dazwischen an, die unabhängig und identisch an jeder Position verarbeitet werden. Dies bietet zusätzliche nichtlineare Verarbeitungsleistung und erweitert und verkleinert typischerweise die Dimensionalität.",
          nl: "Het FFN past twee lineaire transformaties toe met een ReLU-activering ertussen, onafhankelijk en identiek verwerkt op elke positie. Dit biedt extra niet-lineaire verwerkingskracht en breidt typisch de dimensionaliteit uit en krimpt deze vervolgens."
        }
      },
      {
        question: {
          en: "What is the key difference between encoder and decoder layers in Transformers?",
          es: "¿Cuál es la diferencia clave entre capas codificador y decodificador en Transformers?",
          de: "Was ist der Hauptunterschied zwischen Encoder- und Decoder-Schichten in Transformers?",
          nl: "Wat is het belangrijkste verschil tussen encoder- en decoder-lagen in Transformers?"
        },
        options: [
          { en: "Decoder layers have masked self-attention to prevent looking at future tokens", es: "Las capas decodificador tienen auto-atención enmascarada para prevenir mirar tokens futuros", de: "Decoder-Schichten haben maskierte Selbstaufmerksamkeit um das Betrachten zukünftiger Token zu verhindern", nl: "Decoder-lagen hebben gemaskeerde zelf-aandacht om te voorkomen dat naar toekomstige tokens wordt gekeken" },
          { en: "Encoder layers use different activation functions", es: "Las capas codificador usan diferentes funciones de activación", de: "Encoder-Schichten verwenden verschiedene Aktivierungsfunktionen", nl: "Encoder-lagen gebruiken verschillende activatiefuncties" },
          { en: "Decoder layers have more parameters than encoder layers", es: "Las capas decodificador tienen más parámetros que las capas codificador", de: "Decoder-Schichten haben mehr Parameter als Encoder-Schichten", nl: "Decoder-lagen hebben meer parameters dan encoder-lagen" },
          { en: "Encoder layers process inputs sequentially while decoders are parallel", es: "Las capas codificador procesan entradas secuencialmente mientras decodificadores son paralelos", de: "Encoder-Schichten verarbeiten Eingaben sequenziell während Decoder parallel sind", nl: "Encoder-lagen verwerken invoer sequentieel terwijl decoders parallel zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Decoder layers use masked (causal) self-attention that prevents positions from attending to subsequent positions, ensuring that predictions for position i depend only on known outputs at positions less than i. Encoder layers use full bidirectional self-attention.",
          es: "Las capas decodificador usan auto-atención enmascarada (causal) que previene que las posiciones atiendan a posiciones subsecuentes, asegurando que las predicciones para la posición i dependan solo de salidas conocidas en posiciones menores que i. Las capas codificador usan auto-atención bidireccional completa.",
          de: "Decoder-Schichten verwenden maskierte (kausale) Selbstaufmerksamkeit die verhindert dass Positionen auf nachfolgende Positionen achten, wodurch sichergestellt wird dass Vorhersagen für Position i nur von bekannten Ausgaben an Positionen kleiner als i abhängen. Encoder-Schichten verwenden vollständige bidirektionale Selbstaufmerksamkeit.",
          nl: "Decoder-lagen gebruiken gemaskeerde (causale) zelf-aandacht die voorkomt dat posities aandacht schenken aan volgende posities, waardoor wordt gegarandeerd dat voorspellingen voor positie i alleen afhangen van bekende outputs op posities kleiner dan i. Encoder-lagen gebruiken volledige bidirectionele zelf-aandacht."
        }
      },
      {
        question: {
          en: "What is the purpose of cross-attention in the Transformer decoder?",
          es: "¿Cuál es el propósito de la atención cruzada en el decodificador Transformer?",
          de: "Was ist der Zweck der Kreuzaufmerksamkeit im Transformer-Decoder?",
          nl: "Wat is het doel van kruisaandacht in de Transformer-decoder?"
        },
        options: [
          { en: "Allow decoder to attend to encoder outputs for context information", es: "Permitir al decodificador atender a salidas del codificador para información de contexto", de: "Dem Decoder ermöglichen auf Encoder-Ausgaben für Kontextinformationen zu achten", nl: "De decoder in staat stellen om aandacht te schenken aan encoder-outputs voor contextinformatie" },
          { en: "Connect different layers of the decoder together", es: "Conectar diferentes capas del decodificador juntas", de: "Verschiedene Schichten des Decoders miteinander verbinden", nl: "Verschillende lagen van de decoder met elkaar verbinden" },
          { en: "Apply attention across different attention heads", es: "Aplicar atención a través de diferentes cabezas de atención", de: "Aufmerksamkeit über verschiedene Aufmerksamkeits-Köpfe anwenden", nl: "Aandacht toepassen over verschillende aandachtskoppen" },
          { en: "Enable parallel processing of decoder computations", es: "Habilitar procesamiento paralelo de cálculos del decodificador", de: "Parallele Verarbeitung von Decoder-Berechnungen ermöglichen", nl: "Parallelle verwerking van decoder-berekeningen mogelijk maken" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-attention allows the decoder to attend to the encoder's output representations. The queries come from the decoder, while keys and values come from the encoder output, enabling the decoder to access information from the input sequence.",
          es: "La atención cruzada permite al decodificador atender a las representaciones de salida del codificador. Las consultas vienen del decodificador, mientras que claves y valores vienen de la salida del codificador, habilitando al decodificador acceder a información de la secuencia de entrada.",
          de: "Kreuzaufmerksamkeit ermöglicht dem Decoder auf die Ausgaberepräsentationen des Encoders zu achten. Die Anfragen kommen vom Decoder, während Schlüssel und Werte von der Encoder-Ausgabe kommen, wodurch der Decoder auf Informationen aus der Eingabesequenz zugreifen kann.",
          nl: "Kruisaandacht stelt de decoder in staat om aandacht te schenken aan de output-representaties van de encoder. De queries komen van de decoder, terwijl sleutels en waarden komen van de encoder-output, waardoor de decoder toegang krijgt tot informatie uit de invoersequentie."
        }
      },
      {
        question: {
          en: "What is the difference between absolute and relative positional encoding?",
          es: "¿Cuál es la diferencia entre codificación posicional absoluta y relativa?",
          de: "Was ist der Unterschied zwischen absoluter und relativer Positionskodierung?",
          nl: "Wat is het verschil tussen absolute en relatieve positionele codering?"
        },
        options: [
          { en: "Absolute encodes fixed positions, relative encodes distances between positions", es: "Absoluta codifica posiciones fijas, relativa codifica distancias entre posiciones", de: "Absolute kodiert feste Positionen, relative kodiert Abstände zwischen Positionen", nl: "Absolute codeert vaste posities, relatieve codeert afstanden tussen posities" },
          { en: "Absolute is learned, relative is fixed", es: "Absoluta es aprendida, relativa es fija", de: "Absolute ist gelernt, relative ist fest", nl: "Absolute is geleerd, relatieve is vast" },
          { en: "Absolute works with any sequence length, relative has fixed limits", es: "Absoluta funciona con cualquier longitud de secuencia, relativa tiene límites fijos", de: "Absolute funktioniert mit jeder Sequenzlänge, relative hat feste Grenzen", nl: "Absolute werkt met elke sequentielengte, relatieve heeft vaste limieten" },
          { en: "Absolute is used in encoders, relative is used in decoders", es: "Absoluta se usa en codificadores, relativa se usa en decodificadores", de: "Absolute wird in Encodern verwendet, relative wird in Decodern verwendet", nl: "Absolute wordt gebruikt in encoders, relatieve wordt gebruikt in decoders" }
        ],
        correct: 0,
        explanation: {
          en: "Absolute positional encoding assigns a unique embedding to each position (1, 2, 3, ...), while relative positional encoding focuses on the relative distance between positions (-2, -1, 0, +1, +2, ...), which can better capture relational patterns.",
          es: "La codificación posicional absoluta asigna una incrustación única a cada posición (1, 2, 3, ...), mientras que la codificación posicional relativa se enfoca en la distancia relativa entre posiciones (-2, -1, 0, +1, +2, ...), que puede capturar mejor patrones relacionales.",
          de: "Absolute Positionskodierung weist jeder Position eine eindeutige Einbettung zu (1, 2, 3, ...), während relative Positionskodierung sich auf den relativen Abstand zwischen Positionen konzentriert (-2, -1, 0, +1, +2, ...), was relationale Muster besser erfassen kann.",
          nl: "Absolute positionele codering wijst een unieke embedding toe aan elke positie (1, 2, 3, ...), terwijl relatieve positionele codering zich richt op de relatieve afstand tussen posities (-2, -1, 0, +1, +2, ...), wat relationele patronen beter kan vastleggen."
        }
      },
      {
        question: {
          en: "What is the primary advantage of the Transformer's parallelizable architecture?",
          es: "¿Cuál es la ventaja principal de la arquitectura paralelizable del Transformer?",
          de: "Was ist der Hauptvorteil der parallelisierbaren Architektur des Transformers?",
          nl: "Wat is het belangrijkste voordeel van de paralleliseerbare architectuur van de Transformer?"
        },
        options: [
          { en: "Faster training on modern hardware compared to sequential RNNs", es: "Entrenamiento más rápido en hardware moderno comparado con RNNs secuenciales", de: "Schnelleres Training auf moderner Hardware im Vergleich zu sequenziellen RNNs", nl: "Snellere training op moderne hardware vergeleken met sequentiële RNN's" },
          { en: "Better accuracy on all natural language tasks", es: "Mejor precisión en todas las tareas de lenguaje natural", de: "Bessere Genauigkeit bei allen natürlichen Sprachaufgaben", nl: "Betere nauwkeurigheid bij alle natuurlijke taaltaken" },
          { en: "Lower memory requirements during inference", es: "Menores requerimientos de memoria durante la inferencia", de: "Geringere Speicheranforderungen während der Inferenz", nl: "Lagere geheugenvereisten tijdens inferentie" },
          { en: "Simpler implementation with fewer parameters", es: "Implementación más simple con menos parámetros", de: "Einfachere Implementierung mit weniger Parametern", nl: "Eenvoudigere implementatie met minder parameters" }
        ],
        correct: 0,
        explanation: {
          en: "Transformers can process all positions in a sequence simultaneously using self-attention, unlike RNNs which must process sequentially. This makes them highly efficient on parallel hardware like GPUs, significantly reducing training time for long sequences.",
          es: "Los Transformers pueden procesar todas las posiciones en una secuencia simultáneamente usando auto-atención, a diferencia de las RNNs que deben procesar secuencialmente. Esto los hace altamente eficientes en hardware paralelo como GPUs, reduciendo significativamente el tiempo de entrenamiento para secuencias largas.",
          de: "Transformers können alle Positionen in einer Sequenz gleichzeitig unter Verwendung von Selbstaufmerksamkeit verarbeiten, im Gegensatz zu RNNs die sequenziell verarbeiten müssen. Dies macht sie hocheffizient auf paralleler Hardware wie GPUs und reduziert die Trainingszeit für lange Sequenzen erheblich.",
          nl: "Transformers kunnen alle posities in een sequentie gelijktijdig verwerken met behulp van zelf-aandacht, in tegenstelling tot RNN's die sequentieel moeten verwerken. Dit maakt ze zeer efficiënt op parallelle hardware zoals GPU's, wat de trainingstijd voor lange sequenties aanzienlijk vermindert."
        }
      },
      {
        question: {
          en: "What is the autoregressive generation process used by GPT models?",
          es: "¿Cuál es el proceso de generación autoregresiva usado por los modelos GPT?",
          de: "Was ist der autoregressive Generierungsprozess der von GPT-Modellen verwendet wird?",
          nl: "Wat is het autoregressieve generatieproces gebruikt door GPT-modellen?"
        },
        options: [
          { en: "Generate one token at a time, using previous tokens as context", es: "Generar un token a la vez, usando tokens previos como contexto", de: "Ein Token nach dem anderen generieren, wobei vorherige Token als Kontext verwendet werden", nl: "Eén token tegelijk genereren, waarbij vorige tokens als context worden gebruikt" },
          { en: "Generate all tokens in parallel using bidirectional attention", es: "Generar todos los tokens en paralelo usando atención bidireccional", de: "Alle Token parallel unter Verwendung bidirektionaler Aufmerksamkeit generieren", nl: "Alle tokens parallel genereren met behulp van bidirectionele aandacht" },
          { en: "Use a separate model to generate each word position", es: "Usar un modelo separado para generar cada posición de palabra", de: "Ein separates Modell zur Generierung jeder Wortposition verwenden", nl: "Een apart model gebruiken om elke woordpositie te genereren" },
          { en: "Generate tokens backwards from end to beginning", es: "Generar tokens hacia atrás de fin a principio", de: "Token rückwärts von Ende zu Anfang generieren", nl: "Tokens achterwaarts genereren van eind naar begin" }
        ],
        correct: 0,
        explanation: {
          en: "GPT models use autoregressive generation where they predict the next token given all previous tokens in the sequence. During generation, the model runs iteratively, adding the predicted token to the sequence and using it to predict the next token.",
          es: "Los modelos GPT usan generación autoregresiva donde predicen el siguiente token dado todos los tokens previos en la secuencia. Durante la generación, el modelo ejecuta iterativamente, agregando el token predicho a la secuencia y usándolo para predecir el siguiente token.",
          de: "GPT-Modelle verwenden autoregressive Generierung bei der sie das nächste Token anhand aller vorherigen Token in der Sequenz vorhersagen. Während der Generierung läuft das Modell iterativ, fügt das vorhergesagte Token zur Sequenz hinzu und verwendet es um das nächste Token vorherzusagen.",
          nl: "GPT-modellen gebruiken autoregressieve generatie waarbij ze het volgende token voorspellen gegeven alle vorige tokens in de sequentie. Tijdens generatie loopt het model iteratief, voegt het voorspelde token toe aan de sequentie en gebruikt het om het volgende token te voorspellen."
        }
      },
      {
        question: {
          en: "What is the purpose of the [CLS] token in BERT?",
          es: "¿Cuál es el propósito del token [CLS] en BERT?",
          de: "Was ist der Zweck des [CLS]-Tokens in BERT?",
          nl: "Wat is het doel van de [CLS] token in BERT?"
        },
        options: [
          { en: "Provide a sequence-level representation for classification tasks", es: "Proporcionar una representación a nivel de secuencia para tareas de clasificación", de: "Eine Sequenz-Level-Repräsentation für Klassifizierungsaufgaben bereitstellen", nl: "Een sequentie-niveau representatie bieden voor classificatietaken" },
          { en: "Mark the beginning of each sentence in the input", es: "Marcar el inicio de cada oración en la entrada", de: "Den Beginn jedes Satzes in der Eingabe markieren", nl: "Het begin van elke zin in de invoer markeren" },
          { en: "Separate different languages in multilingual text", es: "Separar diferentes idiomas en texto multilingüe", de: "Verschiedene Sprachen in mehrsprachigem Text trennen", nl: "Verschillende talen scheiden in meertalige tekst" },
          { en: "Indicate which tokens should be masked during training", es: "Indicar qué tokens deben ser enmascarados durante el entrenamiento", de: "Anzeigen welche Token während des Trainings maskiert werden sollen", nl: "Aangeven welke tokens gemaskeerd moeten worden tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "The [CLS] (classification) token is prepended to every input sequence in BERT. Its final hidden state is used as the aggregate sequence representation for classification tasks, as it has attended to all other tokens in the sequence through self-attention.",
          es: "El token [CLS] (clasificación) se antepone a cada secuencia de entrada en BERT. Su estado oculto final se usa como la representación agregada de secuencia para tareas de clasificación, ya que ha atendido a todos los otros tokens en la secuencia a través de auto-atención.",
          de: "Das [CLS] (Klassifizierungs)-Token wird jeder Eingabesequenz in BERT vorangestellt. Sein finaler versteckter Zustand wird als aggregierte Sequenzrepräsentation für Klassifizierungsaufgaben verwendet, da es durch Selbstaufmerksamkeit auf alle anderen Token in der Sequenz geachtet hat.",
          nl: "De [CLS] (classificatie) token wordt vooraan elke invoersequentie in BERT geplaatst. Zijn finale verborgen toestand wordt gebruikt als de geaggregeerde sequentierepresentatie voor classificatietaken, omdat het via zelf-aandacht aandacht heeft geschonken aan alle andere tokens in de sequentie."
        }
      },
      {
        question: {
          en: "What is the key innovation of the Swin Transformer for computer vision?",
          es: "¿Cuál es la innovación clave del Swin Transformer para visión por computadora?",
          de: "Was ist die Schlüsselinnovation des Swin Transformers für Computer Vision?",
          nl: "Wat is de belangrijkste innovatie van de Swin Transformer voor computer vision?"
        },
        options: [
          { en: "Hierarchical representation with shifted windows for computational efficiency", es: "Representación jerárquica con ventanas desplazadas para eficiencia computacional", de: "Hierarchische Repräsentation mit verschobenen Fenstern für rechnerische Effizienz", nl: "Hiërarchische representatie met verschoven vensters voor rekenkundige efficiëntie" },
          { en: "Using 3D convolutions instead of standard patches", es: "Usar convoluciones 3D en lugar de parches estándar", de: "Verwendung von 3D-Faltungen anstelle von Standard-Patches", nl: "Het gebruik van 3D convoluties in plaats van standaard patches" },
          { en: "Processing images at multiple scales simultaneously", es: "Procesar imágenes en múltiples escalas simultáneamente", de: "Bilder gleichzeitig in mehreren Skalen verarbeiten", nl: "Beelden op meerdere schalen tegelijkertijd verwerken" },
          { en: "Combining transformer layers with convolutional layers", es: "Combinar capas transformer con capas convolucionales", de: "Transformer-Schichten mit Faltungsschichten kombinieren", nl: "Transformer-lagen combineren met convolutionele lagen" }
        ],
        correct: 0,
        explanation: {
          en: "Swin Transformer uses shifted windows to limit self-attention computation to local windows while allowing cross-window connections. This creates a hierarchical representation similar to CNNs and significantly reduces computational complexity compared to global attention.",
          es: "Swin Transformer usa ventanas desplazadas para limitar el cálculo de auto-atención a ventanas locales mientras permite conexiones entre ventanas. Esto crea una representación jerárquica similar a las CNNs y reduce significativamente la complejidad computacional comparado con atención global.",
          de: "Swin Transformer verwendet verschobene Fenster um Selbstaufmerksamkeitsberechnung auf lokale Fenster zu begrenzen während fensterübergreifende Verbindungen ermöglicht werden. Dies schafft eine hierarchische Repräsentation ähnlich CNNs und reduziert die rechnerische Komplexität erheblich im Vergleich zu globaler Aufmerksamkeit.",
          nl: "Swin Transformer gebruikt verschoven vensters om zelf-aandachtsberekening te beperken tot lokale vensters terwijl verbindingen tussen vensters worden toegestaan. Dit creëert een hiërarchische representatie vergelijkbaar met CNN's en vermindert de rekenkundige complexiteit aanzienlijk vergeleken met globale aandacht."
        }
      },
      {
        question: {
          en: "What is the attention mechanism's computational complexity with respect to sequence length?",
          es: "¿Cuál es la complejidad computacional del mecanismo de atención con respecto a la longitud de secuencia?",
          de: "Was ist die rechnerische Komplexität des Aufmerksamkeitsmechanismus bezüglich der Sequenzlänge?",
          nl: "Wat is de rekenkundige complexiteit van het aandachtsmechanisme ten opzichte van sequentielengte?"
        },
        options: [
          { en: "O(n²) where n is the sequence length", es: "O(n²) donde n es la longitud de secuencia", de: "O(n²) wobei n die Sequenzlänge ist", nl: "O(n²) waarbij n de sequentielengte is" },
          { en: "O(n) where n is the sequence length", es: "O(n) donde n es la longitud de secuencia", de: "O(n) wobei n die Sequenzlänge ist", nl: "O(n) waarbij n de sequentielengte is" },
          { en: "O(n log n) where n is the sequence length", es: "O(n log n) donde n es la longitud de secuencia", de: "O(n log n) wobei n die Sequenzlänge ist", nl: "O(n log n) waarbij n de sequentielengte is" },
          { en: "O(1) independent of sequence length", es: "O(1) independiente de la longitud de secuencia", de: "O(1) unabhängig von der Sequenzlänge", nl: "O(1) onafhankelijk van sequentielengte" }
        ],
        correct: 0,
        explanation: {
          en: "Self-attention has O(n²) complexity because it computes attention weights between every pair of positions in the sequence. This quadratic scaling becomes problematic for very long sequences, leading to research on efficient attention mechanisms.",
          es: "La auto-atención tiene complejidad O(n²) porque calcula pesos de atención entre cada par de posiciones en la secuencia. Este escalado cuadrático se vuelve problemático para secuencias muy largas, llevando a investigación en mecanismos de atención eficientes.",
          de: "Selbstaufmerksamkeit hat O(n²)-Komplexität weil sie Aufmerksamkeitsgewichte zwischen jedem Positionspaar in der Sequenz berechnet. Diese quadratische Skalierung wird problematisch für sehr lange Sequenzen und führt zu Forschung an effizienten Aufmerksamkeitsmechanismen.",
          nl: "Zelf-aandacht heeft O(n²) complexiteit omdat het aandachtsgewichten berekent tussen elk paar posities in de sequentie. Deze kwadratische schaling wordt problematisch voor zeer lange sequenties, wat leidt tot onderzoek naar efficiënte aandachtsmechanismen."
        }
      },
      {
        question: {
          en: "What is the purpose of dropout in Transformer architectures?",
          es: "¿Cuál es el propósito del dropout en las arquitecturas Transformer?",
          de: "Was ist der Zweck von Dropout in Transformer-Architekturen?",
          nl: "Wat is het doel van dropout in Transformer-architecturen?"
        },
        options: [
          { en: "Prevent overfitting by randomly setting some activations to zero during training", es: "Prevenir sobreajuste estableciendo aleatoriamente algunas activaciones a cero durante entrenamiento", de: "Overfitting verhindern durch zufälliges Setzen einiger Aktivierungen auf Null während des Trainings", nl: "Overfitting voorkomen door willekeurig sommige activeringen op nul te zetten tijdens training" },
          { en: "Reduce the computational cost of attention calculations", es: "Reducir el costo computacional de cálculos de atención", de: "Die rechnerischen Kosten von Aufmerksamkeitsberechnungen reduzieren", nl: "De rekenkosten van aandachtsberekeningen verminderen" },
          { en: "Normalize the attention weights to sum to 1", es: "Normalizar los pesos de atención para que sumen 1", de: "Die Aufmerksamkeitsgewichte normalisieren um zu 1 zu summieren", nl: "De aandachtsgewichten normaliseren zodat ze optellen tot 1" },
          { en: "Allow the model to handle variable sequence lengths", es: "Permitir al modelo manejar longitudes de secuencia variables", de: "Dem Modell ermöglichen variable Sequenzlängen zu handhaben", nl: "Het model in staat stellen om variabele sequentielengtes te hanteren" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout is applied to various components in Transformers (attention weights, FFN outputs, residual connections) during training to prevent overfitting. It randomly sets a fraction of inputs to zero, forcing the model to be more robust and generalize better.",
          es: "El dropout se aplica a varios componentes en Transformers (pesos de atención, salidas FFN, conexiones residuales) durante entrenamiento para prevenir sobreajuste. Establece aleatoriamente una fracción de entradas a cero, forzando al modelo a ser más robusto y generalizar mejor.",
          de: "Dropout wird auf verschiedene Komponenten in Transformers (Aufmerksamkeitsgewichte, FFN-Ausgaben, residuale Verbindungen) während des Trainings angewandt um Overfitting zu verhindern. Es setzt zufällig einen Bruchteil der Eingaben auf Null und zwingt das Modell robuster zu sein und besser zu generalisieren.",
          nl: "Dropout wordt toegepast op verschillende componenten in Transformers (aandachtsgewichten, FFN-outputs, residuele verbindingen) tijdens training om overfitting te voorkomen. Het zet willekeurig een fractie van invoer op nul, wat het model dwingt robuuster te zijn en beter te generaliseren."
        }
      },
      {
        question: {
          en: "What is the key innovation of the Linformer and similar efficient attention mechanisms?",
          es: "¿Cuál es la innovación clave del Linformer y mecanismos de atención eficientes similares?",
          de: "Was ist die Schlüsselinnovation des Linformers und ähnlicher effizienter Aufmerksamkeitsmechanismen?",
          nl: "Wat is de belangrijkste innovatie van de Linformer en vergelijkbare efficiënte aandachtsmechanismen?"
        },
        options: [
          { en: "Reduce attention complexity from O(n²) to O(n) using low-rank projections", es: "Reducir complejidad de atención de O(n²) a O(n) usando proyecciones de bajo rango", de: "Aufmerksamkeitskomplexität von O(n²) auf O(n) durch niedrigrangige Projektionen reduzieren", nl: "Aandachtscomplexiteit verminderen van O(n²) naar O(n) met behulp van lage-rang projecties" },
          { en: "Use linear activation functions instead of softmax", es: "Usar funciones de activación lineales en lugar de softmax", de: "Lineare Aktivierungsfunktionen anstelle von Softmax verwenden", nl: "Lineaire activatiefuncties gebruiken in plaats van softmax" },
          { en: "Process sequences in linear order without parallelization", es: "Procesar secuencias en orden lineal sin paralelización", de: "Sequenzen in linearer Reihenfolge ohne Parallelisierung verarbeiten", nl: "Sequenties in lineaire volgorde verwerken zonder parallelisatie" },
          { en: "Apply linear transformations to positional encodings", es: "Aplicar transformaciones lineales a codificaciones posicionales", de: "Lineare Transformationen auf Positionskodierungen anwenden", nl: "Lineaire transformaties toepassen op positionele coderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Linformer and similar methods address the quadratic complexity of self-attention by using low-rank projections to reduce the sequence length dimension before computing attention. This achieves linear complexity O(n) while maintaining most of the benefits of full attention.",
          es: "Linformer y métodos similares abordan la complejidad cuadrática de la auto-atención usando proyecciones de bajo rango para reducir la dimensión de longitud de secuencia antes de calcular atención. Esto logra complejidad lineal O(n) manteniendo la mayoría de los beneficios de atención completa.",
          de: "Linformer und ähnliche Methoden adressieren die quadratische Komplexität der Selbstaufmerksamkeit durch niedrigrangige Projektionen um die Sequenzlängendimension vor der Aufmerksamkeitsberechnung zu reduzieren. Dies erreicht lineare Komplexität O(n) bei Beibehaltung der meisten Vorteile voller Aufmerksamkeit.",
          nl: "Linformer en vergelijkbare methoden pakken de kwadratische complexiteit van zelf-aandacht aan door lage-rang projecties te gebruiken om de sequentielengte-dimensie te verminderen voordat aandacht wordt berekend. Dit bereikt lineaire complexiteit O(n) terwijl de meeste voordelen van volledige aandacht behouden blijven."
        }
      },
      {
        question: {
          en: "What is the main innovation of the Reformer architecture?",
          es: "¿Cuál es la principal innovación de la arquitectura Reformer?",
          de: "Was ist die Hauptinnovation der Reformer-Architektur?",
          nl: "Wat is de belangrijkste innovatie van de Reformer-architectuur?"
        },
        options: [
          { en: "Locality-sensitive hashing (LSH) attention and reversible layers for memory efficiency", es: "Atención con hashing sensible a localidad (LSH) y capas reversibles para eficiencia de memoria", de: "Lokalisierungsempfindliche Hash-Aufmerksamkeit (LSH) und reversible Schichten für Speichereffizienz", nl: "Locality-sensitive hashing (LSH) aandacht en omkeerbare lagen voor geheugenefficiëntie" },
          { en: "Using reformulated positional encodings for better sequence understanding", es: "Usar codificaciones posicionales reformuladas para mejor comprensión de secuencias", de: "Reformulierte Positionskodierungen für besseres Sequenzverständnis verwenden", nl: "Geherformuleerde positionele coderingen gebruiken voor beter sequentiebegrip" },
          { en: "Reforming the attention mechanism to use convolutional operations", es: "Reformar el mecanismo de atención para usar operaciones convolucionales", de: "Den Aufmerksamkeitsmechanismus reformieren um Faltungsoperationen zu verwenden", nl: "Het aandachtsmechanisme hervormen om convolutionele operaties te gebruiken" },
          { en: "Dynamic reformulation of network architecture during training", es: "Reformulación dinámica de arquitectura de red durante entrenamiento", de: "Dynamische Reformulierung der Netzwerkarchitektur während des Trainings", nl: "Dynamische herformulering van netwerkarchitectuur tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Reformer introduces two key innovations: LSH attention that reduces attention complexity by only attending to similar tokens found through hashing, and reversible layers that allow gradient computation without storing all activations, dramatically reducing memory usage for long sequences.",
          es: "Reformer introduce dos innovaciones clave: atención LSH que reduce complejidad de atención atendiendo solo a tokens similares encontrados a través de hashing, y capas reversibles que permiten cálculo de gradientes sin almacenar todas las activaciones, reduciendo dramáticamente el uso de memoria para secuencias largas.",
          de: "Reformer führt zwei Schlüsselinnovationen ein: LSH-Aufmerksamkeit die Aufmerksamkeitskomplexität reduziert indem nur auf ähnliche durch Hashing gefundene Token geachtet wird, und reversible Schichten die Gradientenberechnung ohne Speicherung aller Aktivierungen ermöglichen und Speicherverbrauch für lange Sequenzen drastisch reduzieren.",
          nl: "Reformer introduceert twee belangrijke innovaties: LSH-aandacht die aandachtscomplexiteit vermindert door alleen aandacht te schenken aan vergelijkbare tokens gevonden via hashing, en omkeerbare lagen die gradiëntberekening mogelijk maken zonder alle activeringen op te slaan, wat geheugengebruik voor lange sequenties drastisch vermindert."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
