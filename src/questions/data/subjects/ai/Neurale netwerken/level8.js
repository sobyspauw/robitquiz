// Neurale netwerken Quiz - Level 8
(function() {
  const level8 = {
    name: {
          "en": "Advanced Architectures - Transformers & Attention",
          "es": "Arquitecturas Avanzadas - Transformers y Atención",
          "de": "Erweiterte Architekturen - Transformers & Aufmerksamkeit",
          "nl": "Geavanceerde Architecturen - Transformers & Aandacht"
    },
    questions: [
      {
        question: {
                  "en": "What is the key innovation that makes Transformers different from RNNs?",
                  "es": "¿Cuál es la innovación clave que hace a los Transformers diferentes de las RNNs?",
                  "de": "Was ist die Schlüsselinnovation die Transformers von RNNs unterscheidet?",
                  "nl": "Wat is de belangrijkste innovatie die Transformers anders maakt dan RNN's?"
        },
        options: [
        {
                  "en": "Self-attention mechanism that processes all positions in parallel",
                  "es": "Mecanismo de auto-atención que procesa todas las posiciones en paralelo",
                  "de": "Selbstaufmerksamkeitsmechanismus der alle Positionen parallel verarbeitet",
                  "nl": "Zelf-aandachtsmechanisme dat alle posities parallel verwerkt"
        },
        {
                  "en": "Using convolutional layers instead of recurrent layers",
                  "es": "Usar capas convolucionales en lugar de capas recurrentes",
                  "de": "Verwendung von Faltungsschichten anstelle von rekurrenten Schichten",
                  "nl": "Het gebruik van convolutionele lagen in plaats van recurrente lagen"
        },
        {
                  "en": "Having deeper networks with more parameters",
                  "es": "Tener redes más profundas con más parámetros",
                  "de": "Tiefere Netzwerke mit mehr Parametern haben",
                  "nl": "Diepere netwerken hebben met meer parameters"
        },
        {
                  "en": "Processing sequences backwards from end to beginning",
                  "es": "Procesar secuencias hacia atrás de fin a principio",
                  "de": "Sequenzen rückwärts von Ende zu Anfang verarbeiten",
                  "nl": "Sequenties achterwaarts verwerken van eind naar begin"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Transformers use self-attention to compute representations of all positions in a sequence simultaneously, unlike RNNs which process sequentially. This allows for better parallelization and the ability to capture long-range dependencies more effectively.",
                  "es": "Los Transformers usan auto-atención para calcular representaciones de todas las posiciones en una secuencia simultáneamente, a diferencia de las RNNs que procesan secuencialmente. Esto permite mejor paralelización y la capacidad de capturar dependencias de largo alcance más efectivamente.",
                  "de": "Transformers verwenden Selbstaufmerksamkeit um Repräsentationen aller Positionen in einer Sequenz gleichzeitig zu berechnen, im Gegensatz zu RNNs die sequenziell verarbeiten. Dies ermöglicht bessere Parallelisierung und die Fähigkeit langreichweitige Abhängigkeiten effektiver zu erfassen.",
                  "nl": "Transformers gebruiken zelf-aandacht om representaties van alle posities in een sequentie tegelijkertijd te berekenen, in tegenstelling tot RNN's die sequentieel verwerken. Dit maakt betere parallelisatie mogelijk en het vermogen om langafstandsafhankelijkheden effectiever vast te leggen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of multi-head attention in Transformers?",
                  "es": "¿Cuál es el propósito de la atención multi-cabeza en los Transformers?",
                  "de": "Was ist der Zweck von Multi-Head-Aufmerksamkeit in Transformers?",
                  "nl": "Wat is het doel van multi-head aandacht in Transformers?"
        },
        options: [
        {
                  "en": "Apply attention to multiple input modalities",
                  "es": "Aplicar atención a múltiples modalidades de entrada",
                  "de": "Aufmerksamkeit auf mehrere Eingabemodalitäten anwenden",
                  "nl": "Aandacht toepassen op meerdere invoermodaliteiten"
        },
        {
                  "en": "Allow the model to attend to different representation subspaces simultaneously",
                  "es": "Permitir al modelo atender a diferentes subespacios de representación simultáneamente",
                  "de": "Dem Modell ermöglichen gleichzeitig verschiedene Repräsentations-Unterräume zu beachten",
                  "nl": "Het model in staat stellen om gelijktijdig aandacht te schenken aan verschillende representatie-subspaces"
        },
        {
                  "en": "Increase the depth of the attention mechanism",
                  "es": "Aumentar la profundidad del mecanismo de atención",
                  "de": "Die Tiefe des Aufmerksamkeitsmechanismus erhöhen",
                  "nl": "De diepte van het aandachtsmechanisme verhogen"
        },
        {
                  "en": "Process multiple sequences in parallel",
                  "es": "Procesar múltiples secuencias en paralelo",
                  "de": "Mehrere Sequenzen parallel verarbeiten",
                  "nl": "Meerdere sequenties parallel verwerken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Multi-head attention runs multiple attention functions in parallel, each focusing on different representation subspaces. This allows the model to jointly attend to information from different positions and representation subspaces, capturing various types of relationships.",
                  "es": "La atención multi-cabeza ejecuta múltiples funciones de atención en paralelo, cada una enfocándose en diferentes subespacios de representación. Esto permite al modelo atender conjuntamente a información de diferentes posiciones y subespacios de representación, capturando varios tipos de relaciones.",
                  "de": "Multi-Head-Aufmerksamkeit führt mehrere Aufmerksamkeitsfunktionen parallel aus, die sich jeweils auf verschiedene Repräsentations-Unterräume konzentrieren. Dies ermöglicht dem Modell gemeinsam auf Informationen von verschiedenen Positionen und Repräsentations-Unterräumen zu achten und verschiedene Arten von Beziehungen zu erfassen.",
                  "nl": "Multi-head aandacht voert meerdere aandachtsfuncties parallel uit, elk gericht op verschillende representatie-subspaces. Dit stelt het model in staat om gezamenlijk aandacht te schenken aan informatie van verschillende posities en representatie-subspaces, waarbij verschillende soorten relaties worden vastgelegd."
        }
      },
      {
        question: {
                  "en": "What role do positional encodings play in Transformer architectures?",
                  "es": "¿Qué papel juegan las codificaciones posicionales en las arquitecturas Transformer?",
                  "de": "Welche Rolle spielen Positionskodierungen in Transformer-Architekturen?",
                  "nl": "Welke rol spelen positionele coderingen in Transformer-architecturen?"
        },
        options: [
        {
                  "en": "Control the learning rate for different sequence positions",
                  "es": "Controlar la tasa de aprendizaje para diferentes posiciones de secuencia",
                  "de": "Lernrate für verschiedene Sequenzpositionen steuern",
                  "nl": "Leersnelheid controleren voor verschillende sequentieposities"
        },
        {
                  "en": "Encode the absolute positions of words in the vocabulary",
                  "es": "Codificar las posiciones absolutas de palabras en el vocabulario",
                  "de": "Absolute Positionen von Wörtern im Vokabular kodieren",
                  "nl": "Absolute posities van woorden in de woordenschat coderen"
        },
        {
                  "en": "Provide sequence order information since attention is permutation-invariant",
                  "es": "Proporcionar información del orden de secuencia ya que la atención es invariante a permutaciones",
                  "de": "Sequenzreihenfolgen-Information bereitstellen da Aufmerksamkeit permutationsinvariant ist",
                  "nl": "Volgorde-informatie van sequenties verstrekken omdat aandacht permutatie-invariant is"
        },
        {
                  "en": "Determine which tokens should receive more attention",
                  "es": "Determinar qué tokens deben recibir más atención",
                  "de": "Bestimmen welche Token mehr Aufmerksamkeit erhalten sollten",
                  "nl": "Bepalen welke tokens meer aandacht moeten krijgen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Since self-attention operations are permutation-invariant (they treat input as a set), positional encodings are added to input embeddings to inject information about the relative or absolute position of tokens in the sequence.",
                  "es": "Dado que las operaciones de auto-atención son invariantes a permutaciones (tratan la entrada como un conjunto), las codificaciones posicionales se agregan a las incrustaciones de entrada para inyectar información sobre la posición relativa o absoluta de los tokens en la secuencia.",
                  "de": "Da Selbstaufmerksamkeitsoperationen permutationsinvariant sind (sie behandeln Eingabe als Menge), werden Positionskodierungen zu Eingabeeinbettungen hinzugefügt um Informationen über relative oder absolute Position von Token in der Sequenz einzufügen.",
                  "nl": "Omdat zelf-aandachtsoperaties permutatie-invariant zijn (ze behandelen invoer als een set), worden positionele coderingen toegevoegd aan invoer-embeddings om informatie in te voegen over de relatieve of absolute positie van tokens in de sequentie."
        }
      },
      {
        question: {
                  "en": "What is the main difference between BERT and GPT architectures?",
                  "es": "¿Cuál es la principal diferencia entre las arquitecturas BERT y GPT?",
                  "de": "Was ist der Hauptunterschied zwischen BERT- und GPT-Architekturen?",
                  "nl": "Wat is het belangrijkste verschil tussen BERT en GPT architecturen?"
        },
        options: [
        {
                  "en": "BERT is bidirectional (encoder-only), GPT is unidirectional (decoder-only)",
                  "es": "BERT es bidireccional (solo codificador), GPT es unidireccional (solo decodificador)",
                  "de": "BERT ist bidirektional (nur Encoder), GPT ist unidirektional (nur Decoder)",
                  "nl": "BERT is bidirectioneel (alleen encoder), GPT is unidirectioneel (alleen decoder)"
        },
        {
                  "en": "BERT uses convolutional layers, GPT uses only attention",
                  "es": "BERT usa capas convolucionales, GPT usa solo atención",
                  "de": "BERT verwendet Faltungsschichten, GPT verwendet nur Aufmerksamkeit",
                  "nl": "BERT gebruikt convolutionele lagen, GPT gebruikt alleen aandacht"
        },
        {
                  "en": "BERT processes text, GPT processes images",
                  "es": "BERT procesa texto, GPT procesa imágenes",
                  "de": "BERT verarbeitet Text, GPT verarbeitet Bilder",
                  "nl": "BERT verwerkt tekst, GPT verwerkt beelden"
        },
        {
                  "en": "BERT is for classification, GPT is for generation",
                  "es": "BERT es para clasificación, GPT es para generación",
                  "de": "BERT ist für Klassifizierung, GPT ist für Generierung",
                  "nl": "BERT is voor classificatie, GPT is voor generatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "BERT uses only the encoder part of the Transformer and can attend to tokens in both directions (bidirectional), making it suitable for understanding tasks. GPT uses only the decoder part with causal (masked) attention, making it suitable for autoregressive text generation.",
                  "es": "BERT usa solo la parte del codificador del Transformer y puede atender a tokens en ambas direcciones (bidireccional), haciéndolo adecuado para tareas de comprensión. GPT usa solo la parte del decodificador con atención causal (enmascarada), haciéndolo adecuado para generación autoregresiva de texto.",
                  "de": "BERT verwendet nur den Encoder-Teil des Transformers und kann Token in beide Richtungen beachten (bidirektional), was es für Verständnisaufgaben geeignet macht. GPT verwendet nur den Decoder-Teil mit kausaler (maskierter) Aufmerksamkeit, was es für autoregressive Textgenerierung geeignet macht.",
                  "nl": "BERT gebruikt alleen het encoder-deel van de Transformer en kan aandacht schenken aan tokens in beide richtingen (bidirectioneel), waardoor het geschikt is voor begrip-taken. GPT gebruikt alleen het decoder-deel met causale (gemaskeerde) aandacht, waardoor het geschikt is voor autoregressieve tekstgeneratie."
        }
      },
      {
        question: {
                  "en": "What is the scaled dot-product attention formula's scaling factor and why is it used?",
                  "es": "¿Cuál es el factor de escala de la fórmula de atención producto escalar escalado y por qué se usa?",
                  "de": "Was ist der Skalierungsfaktor der skalierten Punkt-Produkt-Aufmerksamkeitsformel und warum wird er verwendet?",
                  "nl": "Wat is de schaalfactor van de geschaalde dot-product aandachtsformule en waarom wordt deze gebruikt?"
        },
        options: [
        {
                  "en": "dk to amplify attention weights for better performance",
                  "es": "dk para amplificar pesos de atención para mejor rendimiento",
                  "de": "dk um Aufmerksamkeitsgewichte für bessere Leistung zu verstärken",
                  "nl": "dk om aandachtsgewichten te versterken voor betere prestaties"
        },
        {
                  "en": "√dk to normalize attention weights to unit variance",
                  "es": "√dk para normalizar pesos de atención a varianza unitaria",
                  "de": "√dk um Aufmerksamkeitsgewichte auf Einheitsvarianz zu normalisieren",
                  "nl": "√dk om aandachtsgewichten te normaliseren tot eenheidsvariatie"
        },
        {
                  "en": "1/√dk to prevent gradients from becoming too small when dk is large",
                  "es": "1/√dk para prevenir que los gradientes se vuelvan muy pequeños cuando dk es grande",
                  "de": "1/√dk um zu verhindern dass Gradienten zu klein werden wenn dk groß ist",
                  "nl": "1/√dk om te voorkomen dat gradiënten te klein worden wanneer dk groot is"
        },
        {
                  "en": "1/dk to ensure attention weights sum to 1",
                  "es": "1/dk para asegurar que los pesos de atención sumen 1",
                  "de": "1/dk um sicherzustellen dass Aufmerksamkeitsgewichte zu 1 summieren",
                  "nl": "1/dk om ervoor te zorgen dat aandachtsgewichten optellen tot 1"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The scaling factor 1/√dk prevents the dot products from growing too large when the key dimension dk is large. Large dot products push the softmax function into regions with extremely small gradients, making training difficult.",
                  "es": "El factor de escala 1/√dk previene que los productos punto crezcan demasiado cuando la dimensión de clave dk es grande. Productos punto grandes empujan la función softmax hacia regiones con gradientes extremadamente pequeños, dificultando el entrenamiento.",
                  "de": "Der Skalierungsfaktor 1/√dk verhindert dass Punkt-Produkte zu groß werden wenn die Schlüsseldimension dk groß ist. Große Punkt-Produkte drängen die Softmax-Funktion in Bereiche mit extrem kleinen Gradienten und erschweren das Training.",
                  "nl": "De schaalfactor 1/√dk voorkomt dat dot-producten te groot worden wanneer de sleuteldimensie dk groot is. Grote dot-producten duwen de softmax-functie naar gebieden met extreem kleine gradiënten, wat training moeilijk maakt."
        }
      },
      {
        question: {
                  "en": "What is the purpose of layer normalization in Transformers?",
                  "es": "¿Cuál es el propósito de la normalización de capa en los Transformers?",
                  "de": "Was ist der Zweck der Schichtnormalisierung in Transformers?",
                  "nl": "Wat is het doel van laagnormalisatie in Transformers?"
        },
        options: [
        {
                  "en": "Stabilize training by normalizing inputs across the feature dimension",
                  "es": "Estabilizar entrenamiento normalizando entradas a través de la dimensión de características",
                  "de": "Training stabilisieren durch Normalisierung von Eingaben über die Feature-Dimension",
                  "nl": "Training stabiliseren door invoer te normaliseren over de feature-dimensie"
        },
        {
                  "en": "Prevent overfitting by adding regularization",
                  "es": "Prevenir sobreajuste agregando regularización",
                  "de": "Overfitting durch Hinzufügen von Regularisierung verhindern",
                  "nl": "Overfitting voorkomen door regularisatie toe te voegen"
        },
        {
                  "en": "Reduce the number of parameters in each layer",
                  "es": "Reducir el número de parámetros en cada capa",
                  "de": "Die Anzahl der Parameter in jeder Schicht reduzieren",
                  "nl": "Het aantal parameters in elke laag verminderen"
        },
        {
                  "en": "Enable parallel processing of different layers",
                  "es": "Habilitar procesamiento paralelo de diferentes capas",
                  "de": "Parallele Verarbeitung verschiedener Schichten ermöglichen",
                  "nl": "Parallelle verwerking van verschillende lagen mogelijk maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Layer normalization normalizes inputs across the feature dimension for each individual example, helping to stabilize training dynamics and enabling the use of higher learning rates. Unlike batch normalization, it doesn't depend on batch statistics.",
                  "es": "La normalización de capa normaliza entradas a través de la dimensión de características para cada ejemplo individual, ayudando a estabilizar la dinámica de entrenamiento y habilitando el uso de tasas de aprendizaje más altas. A diferencia de la normalización por lotes, no depende de estadísticas de lote.",
                  "de": "Schichtnormalisierung normalisiert Eingaben über die Feature-Dimension für jedes einzelne Beispiel, hilft Trainingsdynamiken zu stabilisieren und ermöglicht die Verwendung höherer Lernraten. Im Gegensatz zur Batch-Normalisierung hängt sie nicht von Batch-Statistiken ab.",
                  "nl": "Laagnormalisatie normaliseert invoer over de feature-dimensie voor elk individueel voorbeeld, wat helpt trainingsdynamiek te stabiliseren en het gebruik van hogere leersnelheden mogelijk maakt. In tegenstelling tot batch-normalisatie hangt het niet af van batch-statistieken."
        }
      },
      {
        question: {
                  "en": "What is the masked language modeling objective used in BERT training?",
                  "es": "¿Cuál es el objetivo de modelado de lenguaje enmascarado usado en el entrenamiento de BERT?",
                  "de": "Was ist das maskierte Sprachmodellierungsziel das im BERT-Training verwendet wird?",
                  "nl": "Wat is de gemaskeerde taalmodellering doelstelling gebruikt in BERT training?"
        },
        options: [
        {
                  "en": "Predict randomly masked tokens using bidirectional context",
                  "es": "Predecir tokens aleatoriamente enmascarados usando contexto bidireccional",
                  "de": "Zufällig maskierte Token unter Verwendung bidirektionalen Kontexts vorhersagen",
                  "nl": "Willekeurig gemaskeerde tokens voorspellen met behulp van bidirectionele context"
        },
        {
                  "en": "Classify whether two sentences are semantically similar",
                  "es": "Clasificar si dos oraciones son semánticamente similares",
                  "de": "Klassifizieren ob zwei Sätze semantisch ähnlich sind",
                  "nl": "Classificeren of twee zinnen semantisch vergelijkbaar zijn"
        },
        {
                  "en": "Generate the next word in a sequence from left to right",
                  "es": "Generar la siguiente palabra en una secuencia de izquierda a derecha",
                  "de": "Das nächste Wort in einer Sequenz von links nach rechts generieren",
                  "nl": "Het volgende woord in een sequentie genereren van links naar rechts"
        },
        {
                  "en": "Translate masked tokens from one language to another",
                  "es": "Traducir tokens enmascarados de un idioma a otro",
                  "de": "Maskierte Token von einer Sprache in eine andere übersetzen",
                  "nl": "Gemaskeerde tokens vertalen van de ene taal naar de andere"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "BERT uses masked language modeling where approximately 15% of input tokens are randomly masked, and the model must predict these masked tokens using the surrounding bidirectional context. This enables the model to learn rich bidirectional representations.",
                  "es": "BERT usa modelado de lenguaje enmascarado donde aproximadamente 15% de los tokens de entrada son aleatoriamente enmascarados, y el modelo debe predecir estos tokens enmascarados usando el contexto bidireccional circundante. Esto permite al modelo aprender representaciones bidireccionales ricas.",
                  "de": "BERT verwendet maskierte Sprachmodellierung bei der etwa 15% der Eingabe-Token zufällig maskiert werden und das Modell diese maskierten Token unter Verwendung des umgebenden bidirektionalen Kontexts vorhersagen muss. Dies ermöglicht dem Modell reiche bidirektionale Repräsentationen zu lernen.",
                  "nl": "BERT gebruikt gemaskeerde taalmodellering waarbij ongeveer 15% van de invoertokens willekeurig gemaskeerd worden, en het model moet deze gemaskeerde tokens voorspellen met behulp van de omringende bidirectionele context. Dit stelt het model in staat om rijke bidirectionele representaties te leren."
        }
      },
      {
        question: {
                  "en": "How do Vision Transformers (ViTs) adapt the Transformer architecture for images?",
                  "es": "¿Cómo adaptan los Vision Transformers (ViTs) la arquitectura Transformer para imágenes?",
                  "de": "Wie passen Vision Transformers (ViTs) die Transformer-Architektur für Bilder an?",
                  "nl": "Hoe passen Vision Transformers (ViTs) de Transformer-architectuur aan voor beelden?"
        },
        options: [
        {
                  "en": "Split images into patches and treat them as sequence tokens",
                  "es": "Dividir imágenes en parches y tratarlos como tokens de secuencia",
                  "de": "Bilder in Patches aufteilen und sie als Sequenz-Token behandeln",
                  "nl": "Beelden opdelen in patches en ze behandelen als sequentie-tokens"
        },
        {
                  "en": "Use recurrent connections to process spatial relationships",
                  "es": "Usar conexiones recurrentes para procesar relaciones espaciales",
                  "de": "Rekurrente Verbindungen zur Verarbeitung räumlicher Beziehungen verwenden",
                  "nl": "Recurrente verbindingen gebruiken om ruimtelijke relaties te verwerken"
        },
        {
                  "en": "Replace attention with pooling operations for efficiency",
                  "es": "Reemplazar atención con operaciones de pooling para eficiencia",
                  "de": "Aufmerksamkeit durch Pooling-Operationen für Effizienz ersetzen",
                  "nl": "Aandacht vervangen door pooling-operaties voor efficiëntie"
        },
        {
                  "en": "Apply 3D convolutions before the attention layers",
                  "es": "Aplicar convoluciones 3D antes de las capas de atención",
                  "de": "3D-Faltungen vor den Aufmerksamkeitsschichten anwenden",
                  "nl": "3D convoluties toepassen voor de aandachtslagen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Vision Transformers divide input images into fixed-size patches (e.g., 16x16 pixels), linearly embed each patch, and treat the sequence of patch embeddings as tokens for the Transformer. A learnable classification token is typically prepended to the sequence.",
                  "es": "Los Vision Transformers dividen imágenes de entrada en parches de tamaño fijo (ej., 16x16 píxeles), incrustan linealmente cada parche, y tratan la secuencia de incrustaciones de parches como tokens para el Transformer. Un token de clasificación aprendible típicamente se antepone a la secuencia.",
                  "de": "Vision Transformers teilen Eingabebilder in Patches fester Größe (z.B. 16x16 Pixel), betten jeden Patch linear ein und behandeln die Sequenz von Patch-Einbettungen als Token für den Transformer. Ein lernbarer Klassifizierungs-Token wird typischerweise der Sequenz vorangestellt.",
                  "nl": "Vision Transformers verdelen invoerbeelden in patches van vaste grootte (bijv. 16x16 pixels), embedden elke patch lineair, en behandelen de sequentie van patch-embeddings als tokens voor de Transformer. Een leerbare classificatie-token wordt typisch vooraan de sequentie geplaatst."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the feed-forward network (FFN) in each Transformer layer?",
                  "es": "¿Cuál es el propósito de la red feed-forward (FFN) en cada capa Transformer?",
                  "de": "Was ist der Zweck des Feed-Forward-Netzwerks (FFN) in jeder Transformer-Schicht?",
                  "nl": "Wat is het doel van het feed-forward netwerk (FFN) in elke Transformer-laag?"
        },
        options: [
        {
                  "en": "Reduce the dimensionality of the hidden states",
                  "es": "Reducir la dimensionalidad de los estados ocultos",
                  "de": "Die Dimensionalität der versteckten Zustände reduzieren",
                  "nl": "De dimensionaliteit van de verborgen toestanden verminderen"
        },
        {
                  "en": "Apply position-wise nonlinear transformations after attention",
                  "es": "Aplicar transformaciones no lineales por posición después de la atención",
                  "de": "Positionsweise nichtlineare Transformationen nach der Aufmerksamkeit anwenden",
                  "nl": "Positiegewijze niet-lineaire transformaties toepassen na aandacht"
        },
        {
                  "en": "Connect different attention heads together",
                  "es": "Conectar diferentes cabezas de atención juntas",
                  "de": "Verschiedene Aufmerksamkeits-Köpfe miteinander verbinden",
                  "nl": "Verschillende aandachtskoppen met elkaar verbinden"
        },
        {
                  "en": "Normalize the attention weights",
                  "es": "Normalizar los pesos de atención",
                  "de": "Die Aufmerksamkeitsgewichte normalisieren",
                  "nl": "De aandachtsgewichten normaliseren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The FFN applies two linear transformations with a ReLU activation in between, processed independently and identically at each position. This provides additional non-linear processing power and typically expands and then contracts the dimensionality.",
                  "es": "La FFN aplica dos transformaciones lineales con una activación ReLU en el medio, procesadas independiente e idénticamente en cada posición. Esto proporciona poder de procesamiento no lineal adicional y típicamente expande y luego contrae la dimensionalidad.",
                  "de": "Das FFN wendet zwei lineare Transformationen mit einer ReLU-Aktivierung dazwischen an, die unabhängig und identisch an jeder Position verarbeitet werden. Dies bietet zusätzliche nichtlineare Verarbeitungsleistung und erweitert und verkleinert typischerweise die Dimensionalität.",
                  "nl": "Het FFN past twee lineaire transformaties toe met een ReLU-activering ertussen, onafhankelijk en identiek verwerkt op elke positie. Dit biedt extra niet-lineaire verwerkingskracht en breidt typisch de dimensionaliteit uit en krimpt deze vervolgens."
        }
      },
      {
        question: {
                  "en": "What is the key difference between encoder and decoder layers in Transformers?",
                  "es": "¿Cuál es la diferencia clave entre capas codificador y decodificador en Transformers?",
                  "de": "Was ist der Hauptunterschied zwischen Encoder- und Decoder-Schichten in Transformers?",
                  "nl": "Wat is het belangrijkste verschil tussen encoder- en decoder-lagen in Transformers?"
        },
        options: [
        {
                  "en": "Encoder layers use different activation functions",
                  "es": "Las capas codificador usan diferentes funciones de activación",
                  "de": "Encoder-Schichten verwenden verschiedene Aktivierungsfunktionen",
                  "nl": "Encoder-lagen gebruiken verschillende activatiefuncties"
        },
        {
                  "en": "Decoder layers have more parameters than encoder layers",
                  "es": "Las capas decodificador tienen más parámetros que las capas codificador",
                  "de": "Decoder-Schichten haben mehr Parameter als Encoder-Schichten",
                  "nl": "Decoder-lagen hebben meer parameters dan encoder-lagen"
        },
        {
                  "en": "Decoder layers have masked self-attention to prevent looking at future tokens",
                  "es": "Las capas decodificador tienen auto-atención enmascarada para prevenir mirar tokens futuros",
                  "de": "Decoder-Schichten haben maskierte Selbstaufmerksamkeit um das Betrachten zukünftiger Token zu verhindern",
                  "nl": "Decoder-lagen hebben gemaskeerde zelf-aandacht om te voorkomen dat naar toekomstige tokens wordt gekeken"
        },
        {
                  "en": "Encoder layers process inputs sequentially while decoders are parallel",
                  "es": "Las capas codificador procesan entradas secuencialmente mientras decodificadores son paralelos",
                  "de": "Encoder-Schichten verarbeiten Eingaben sequenziell während Decoder parallel sind",
                  "nl": "Encoder-lagen verwerken invoer sequentieel terwijl decoders parallel zijn"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Decoder layers use masked (causal) self-attention that prevents positions from attending to subsequent positions, ensuring that predictions for position i depend only on known outputs at positions less than i. Encoder layers use full bidirectional self-attention.",
                  "es": "Las capas decodificador usan auto-atención enmascarada (causal) que previene que las posiciones atiendan a posiciones subsecuentes, asegurando que las predicciones para la posición i dependan solo de salidas conocidas en posiciones menores que i. Las capas codificador usan auto-atención bidireccional completa.",
                  "de": "Decoder-Schichten verwenden maskierte (kausale) Selbstaufmerksamkeit die verhindert dass Positionen auf nachfolgende Positionen achten, wodurch sichergestellt wird dass Vorhersagen für Position i nur von bekannten Ausgaben an Positionen kleiner als i abhängen. Encoder-Schichten verwenden vollständige bidirektionale Selbstaufmerksamkeit.",
                  "nl": "Decoder-lagen gebruiken gemaskeerde (causale) zelf-aandacht die voorkomt dat posities aandacht schenken aan volgende posities, waardoor wordt gegarandeerd dat voorspellingen voor positie i alleen afhangen van bekende outputs op posities kleiner dan i. Encoder-lagen gebruiken volledige bidirectionele zelf-aandacht."
        }
      },
      {
        question: {
                  "en": "What is the purpose of cross-attention in the Transformer decoder?",
                  "es": "¿Cuál es el propósito de la atención cruzada en el decodificador Transformer?",
                  "de": "Was ist der Zweck der Kreuzaufmerksamkeit im Transformer-Decoder?",
                  "nl": "Wat is het doel van kruisaandacht in de Transformer-decoder?"
        },
        options: [
        {
                  "en": "Connect different layers of the decoder together",
                  "es": "Conectar diferentes capas del decodificador juntas",
                  "de": "Verschiedene Schichten des Decoders miteinander verbinden",
                  "nl": "Verschillende lagen van de decoder met elkaar verbinden"
        },
        {
                  "en": "Enable parallel processing of decoder computations",
                  "es": "Habilitar procesamiento paralelo de cálculos del decodificador",
                  "de": "Parallele Verarbeitung von Decoder-Berechnungen ermöglichen",
                  "nl": "Parallelle verwerking van decoder-berekeningen mogelijk maken"
        },
        {
                  "en": "Allow decoder to attend to encoder outputs for context information",
                  "es": "Permitir al decodificador atender a salidas del codificador para información de contexto",
                  "de": "Dem Decoder ermöglichen auf Encoder-Ausgaben für Kontextinformationen zu achten",
                  "nl": "De decoder in staat stellen om aandacht te schenken aan encoder-outputs voor contextinformatie"
        },
        {
                  "en": "Apply attention across different attention heads",
                  "es": "Aplicar atención a través de diferentes cabezas de atención",
                  "de": "Aufmerksamkeit über verschiedene Aufmerksamkeits-Köpfe anwenden",
                  "nl": "Aandacht toepassen over verschillende aandachtskoppen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cross-attention allows the decoder to attend to the encoder's output representations. The queries come from the decoder, while keys and values come from the encoder output, enabling the decoder to access information from the input sequence.",
                  "es": "La atención cruzada permite al decodificador atender a las representaciones de salida del codificador. Las consultas vienen del decodificador, mientras que claves y valores vienen de la salida del codificador, habilitando al decodificador acceder a información de la secuencia de entrada.",
                  "de": "Kreuzaufmerksamkeit ermöglicht dem Decoder auf die Ausgaberepräsentationen des Encoders zu achten. Die Anfragen kommen vom Decoder, während Schlüssel und Werte von der Encoder-Ausgabe kommen, wodurch der Decoder auf Informationen aus der Eingabesequenz zugreifen kann.",
                  "nl": "Kruisaandacht stelt de decoder in staat om aandacht te schenken aan de output-representaties van de encoder. De queries komen van de decoder, terwijl sleutels en waarden komen van de encoder-output, waardoor de decoder toegang krijgt tot informatie uit de invoersequentie."
        }
      },
      {
        question: {
                  "en": "What is the difference between absolute and relative positional encoding?",
                  "es": "¿Cuál es la diferencia entre codificación posicional absoluta y relativa?",
                  "de": "Was ist der Unterschied zwischen absoluter und relativer Positionskodierung?",
                  "nl": "Wat is het verschil tussen absolute en relatieve positionele codering?"
        },
        options: [
        {
                  "en": "Absolute is learned, relative is fixed",
                  "es": "Absoluta es aprendida, relativa es fija",
                  "de": "Absolute ist gelernt, relative ist fest",
                  "nl": "Absolute is geleerd, relatieve is vast"
        },
        {
                  "en": "Absolute works with any sequence length, relative has fixed limits",
                  "es": "Absoluta funciona con cualquier longitud de secuencia, relativa tiene límites fijos",
                  "de": "Absolute funktioniert mit jeder Sequenzlänge, relative hat feste Grenzen",
                  "nl": "Absolute werkt met elke sequentielengte, relatieve heeft vaste limieten"
        },
        {
                  "en": "Absolute is used in encoders, relative is used in decoders",
                  "es": "Absoluta se usa en codificadores, relativa se usa en decodificadores",
                  "de": "Absolute wird in Encodern verwendet, relative wird in Decodern verwendet",
                  "nl": "Absolute wordt gebruikt in encoders, relatieve wordt gebruikt in decoders"
        },
        {
                  "en": "Absolute encodes fixed positions, relative encodes distances between positions",
                  "es": "Absoluta codifica posiciones fijas, relativa codifica distancias entre posiciones",
                  "de": "Absolute kodiert feste Positionen, relative kodiert Abstände zwischen Positionen",
                  "nl": "Absolute codeert vaste posities, relatieve codeert afstanden tussen posities"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Absolute positional encoding assigns a unique embedding to each position (1, 2, 3, ...), while relative positional encoding focuses on the relative distance between positions (-2, -1, 0, +1, +2, ...), which can better capture relational patterns.",
                  "es": "La codificación posicional absoluta asigna una incrustación única a cada posición (1, 2, 3, ...), mientras que la codificación posicional relativa se enfoca en la distancia relativa entre posiciones (-2, -1, 0, +1, +2, ...), que puede capturar mejor patrones relacionales.",
                  "de": "Absolute Positionskodierung weist jeder Position eine eindeutige Einbettung zu (1, 2, 3, ...), während relative Positionskodierung sich auf den relativen Abstand zwischen Positionen konzentriert (-2, -1, 0, +1, +2, ...), was relationale Muster besser erfassen kann.",
                  "nl": "Absolute positionele codering wijst een unieke embedding toe aan elke positie (1, 2, 3, ...), terwijl relatieve positionele codering zich richt op de relatieve afstand tussen posities (-2, -1, 0, +1, +2, ...), wat relationele patronen beter kan vastleggen."
        }
      },
      {
        question: {
                  "en": "What is the primary advantage of the Transformer's parallelizable architecture?",
                  "es": "¿Cuál es la ventaja principal de la arquitectura paralelizable del Transformer?",
                  "de": "Was ist der Hauptvorteil der parallelisierbaren Architektur des Transformers?",
                  "nl": "Wat is het belangrijkste voordeel van de paralleliseerbare architectuur van de Transformer?"
        },
        options: [
        {
                  "en": "Simpler implementation with fewer parameters",
                  "es": "Implementación más simple con menos parámetros",
                  "de": "Einfachere Implementierung mit weniger Parametern",
                  "nl": "Eenvoudigere implementatie met minder parameters"
        },
        {
                  "en": "Faster training on modern hardware compared to sequential RNNs",
                  "es": "Entrenamiento más rápido en hardware moderno comparado con RNNs secuenciales",
                  "de": "Schnelleres Training auf moderner Hardware im Vergleich zu sequenziellen RNNs",
                  "nl": "Snellere training op moderne hardware vergeleken met sequentiële RNN's"
        },
        {
                  "en": "Lower memory requirements during inference",
                  "es": "Menores requerimientos de memoria durante la inferencia",
                  "de": "Geringere Speicheranforderungen während der Inferenz",
                  "nl": "Lagere geheugenvereisten tijdens inferentie"
        },
        {
                  "en": "Better accuracy on all natural language tasks",
                  "es": "Mejor precisión en todas las tareas de lenguaje natural",
                  "de": "Bessere Genauigkeit bei allen natürlichen Sprachaufgaben",
                  "nl": "Betere nauwkeurigheid bij alle natuurlijke taaltaken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Transformers can process all positions in a sequence simultaneously using self-attention, unlike RNNs which must process sequentially. This makes them highly efficient on parallel hardware like GPUs, significantly reducing training time for long sequences.",
                  "es": "Los Transformers pueden procesar todas las posiciones en una secuencia simultáneamente usando auto-atención, a diferencia de las RNNs que deben procesar secuencialmente. Esto los hace altamente eficientes en hardware paralelo como GPUs, reduciendo significativamente el tiempo de entrenamiento para secuencias largas.",
                  "de": "Transformers können alle Positionen in einer Sequenz gleichzeitig unter Verwendung von Selbstaufmerksamkeit verarbeiten, im Gegensatz zu RNNs die sequenziell verarbeiten müssen. Dies macht sie hocheffizient auf paralleler Hardware wie GPUs und reduziert die Trainingszeit für lange Sequenzen erheblich.",
                  "nl": "Transformers kunnen alle posities in een sequentie gelijktijdig verwerken met behulp van zelf-aandacht, in tegenstelling tot RNN's die sequentieel moeten verwerken. Dit maakt ze zeer efficiënt op parallelle hardware zoals GPU's, wat de trainingstijd voor lange sequenties aanzienlijk vermindert."
        }
      },
      {
        question: {
                  "en": "What is the autoregressive generation process used by GPT models?",
                  "es": "¿Cuál es el proceso de generación autoregresiva usado por los modelos GPT?",
                  "de": "Was ist der autoregressive Generierungsprozess der von GPT-Modellen verwendet wird?",
                  "nl": "Wat is het autoregressieve generatieproces gebruikt door GPT-modellen?"
        },
        options: [
        {
                  "en": "Use a separate model to generate each word position",
                  "es": "Usar un modelo separado para generar cada posición de palabra",
                  "de": "Ein separates Modell zur Generierung jeder Wortposition verwenden",
                  "nl": "Een apart model gebruiken om elke woordpositie te genereren"
        },
        {
                  "en": "Generate tokens backwards from end to beginning",
                  "es": "Generar tokens hacia atrás de fin a principio",
                  "de": "Token rückwärts von Ende zu Anfang generieren",
                  "nl": "Tokens achterwaarts genereren van eind naar begin"
        },
        {
                  "en": "Generate all tokens in parallel using bidirectional attention",
                  "es": "Generar todos los tokens en paralelo usando atención bidireccional",
                  "de": "Alle Token parallel unter Verwendung bidirektionaler Aufmerksamkeit generieren",
                  "nl": "Alle tokens parallel genereren met behulp van bidirectionele aandacht"
        },
        {
                  "en": "Generate one token at a time, using previous tokens as context",
                  "es": "Generar un token a la vez, usando tokens previos como contexto",
                  "de": "Ein Token nach dem anderen generieren, wobei vorherige Token als Kontext verwendet werden",
                  "nl": "Eén token tegelijk genereren, waarbij vorige tokens als context worden gebruikt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "GPT models use autoregressive generation where they predict the next token given all previous tokens in the sequence. During generation, the model runs iteratively, adding the predicted token to the sequence and using it to predict the next token.",
                  "es": "Los modelos GPT usan generación autoregresiva donde predicen el siguiente token dado todos los tokens previos en la secuencia. Durante la generación, el modelo ejecuta iterativamente, agregando el token predicho a la secuencia y usándolo para predecir el siguiente token.",
                  "de": "GPT-Modelle verwenden autoregressive Generierung bei der sie das nächste Token anhand aller vorherigen Token in der Sequenz vorhersagen. Während der Generierung läuft das Modell iterativ, fügt das vorhergesagte Token zur Sequenz hinzu und verwendet es um das nächste Token vorherzusagen.",
                  "nl": "GPT-modellen gebruiken autoregressieve generatie waarbij ze het volgende token voorspellen gegeven alle vorige tokens in de sequentie. Tijdens generatie loopt het model iteratief, voegt het voorspelde token toe aan de sequentie en gebruikt het om het volgende token te voorspellen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the [CLS] token in BERT?",
                  "es": "¿Cuál es el propósito del token [CLS] en BERT?",
                  "de": "Was ist der Zweck des [CLS]-Tokens in BERT?",
                  "nl": "Wat is het doel van de [CLS] token in BERT?"
        },
        options: [
        {
                  "en": "Indicate which tokens should be masked during training",
                  "es": "Indicar qué tokens deben ser enmascarados durante el entrenamiento",
                  "de": "Anzeigen welche Token während des Trainings maskiert werden sollen",
                  "nl": "Aangeven welke tokens gemaskeerd moeten worden tijdens training"
        },
        {
                  "en": "Provide a sequence-level representation for classification tasks",
                  "es": "Proporcionar una representación a nivel de secuencia para tareas de clasificación",
                  "de": "Eine Sequenz-Level-Repräsentation für Klassifizierungsaufgaben bereitstellen",
                  "nl": "Een sequentie-niveau representatie bieden voor classificatietaken"
        },
        {
                  "en": "Separate different languages in multilingual text",
                  "es": "Separar diferentes idiomas en texto multilingüe",
                  "de": "Verschiedene Sprachen in mehrsprachigem Text trennen",
                  "nl": "Verschillende talen scheiden in meertalige tekst"
        },
        {
                  "en": "Mark the beginning of each sentence in the input",
                  "es": "Marcar el inicio de cada oración en la entrada",
                  "de": "Den Beginn jedes Satzes in der Eingabe markieren",
                  "nl": "Het begin van elke zin in de invoer markeren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The [CLS] (classification) token is prepended to every input sequence in BERT. Its final hidden state is used as the aggregate sequence representation for classification tasks, as it has attended to all other tokens in the sequence through self-attention.",
                  "es": "El token [CLS] (clasificación) se antepone a cada secuencia de entrada en BERT. Su estado oculto final se usa como la representación agregada de secuencia para tareas de clasificación, ya que ha atendido a todos los otros tokens en la secuencia a través de auto-atención.",
                  "de": "Das [CLS] (Klassifizierungs)-Token wird jeder Eingabesequenz in BERT vorangestellt. Sein finaler versteckter Zustand wird als aggregierte Sequenzrepräsentation für Klassifizierungsaufgaben verwendet, da es durch Selbstaufmerksamkeit auf alle anderen Token in der Sequenz geachtet hat.",
                  "nl": "De [CLS] (classificatie) token wordt vooraan elke invoersequentie in BERT geplaatst. Zijn finale verborgen toestand wordt gebruikt als de geaggregeerde sequentierepresentatie voor classificatietaken, omdat het via zelf-aandacht aandacht heeft geschonken aan alle andere tokens in de sequentie."
        }
      },
      {
        question: {
                  "en": "What is the key innovation of the Swin Transformer for computer vision?",
                  "es": "¿Cuál es la innovación clave del Swin Transformer para visión por computadora?",
                  "de": "Was ist die Schlüsselinnovation des Swin Transformers für Computer Vision?",
                  "nl": "Wat is de belangrijkste innovatie van de Swin Transformer voor computer vision?"
        },
        options: [
        {
                  "en": "Combining transformer layers with convolutional layers",
                  "es": "Combinar capas transformer con capas convolucionales",
                  "de": "Transformer-Schichten mit Faltungsschichten kombinieren",
                  "nl": "Transformer-lagen combineren met convolutionele lagen"
        },
        {
                  "en": "Using 3D convolutions instead of standard patches",
                  "es": "Usar convoluciones 3D en lugar de parches estándar",
                  "de": "Verwendung von 3D-Faltungen anstelle von Standard-Patches",
                  "nl": "Het gebruik van 3D convoluties in plaats van standaard patches"
        },
        {
                  "en": "Hierarchical representation with shifted windows for computational efficiency",
                  "es": "Representación jerárquica con ventanas desplazadas para eficiencia computacional",
                  "de": "Hierarchische Repräsentation mit verschobenen Fenstern für rechnerische Effizienz",
                  "nl": "Hiërarchische representatie met verschoven vensters voor rekenkundige efficiëntie"
        },
        {
                  "en": "Processing images at multiple scales simultaneously",
                  "es": "Procesar imágenes en múltiples escalas simultáneamente",
                  "de": "Bilder gleichzeitig in mehreren Skalen verarbeiten",
                  "nl": "Beelden op meerdere schalen tegelijkertijd verwerken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Swin Transformer uses shifted windows to limit self-attention computation to local windows while allowing cross-window connections. This creates a hierarchical representation similar to CNNs and significantly reduces computational complexity compared to global attention.",
                  "es": "Swin Transformer usa ventanas desplazadas para limitar el cálculo de auto-atención a ventanas locales mientras permite conexiones entre ventanas. Esto crea una representación jerárquica similar a las CNNs y reduce significativamente la complejidad computacional comparado con atención global.",
                  "de": "Swin Transformer verwendet verschobene Fenster um Selbstaufmerksamkeitsberechnung auf lokale Fenster zu begrenzen während fensterübergreifende Verbindungen ermöglicht werden. Dies schafft eine hierarchische Repräsentation ähnlich CNNs und reduziert die rechnerische Komplexität erheblich im Vergleich zu globaler Aufmerksamkeit.",
                  "nl": "Swin Transformer gebruikt verschoven vensters om zelf-aandachtsberekening te beperken tot lokale vensters terwijl verbindingen tussen vensters worden toegestaan. Dit creëert een hiërarchische representatie vergelijkbaar met CNN's en vermindert de rekenkundige complexiteit aanzienlijk vergeleken met globale aandacht."
        }
      },
      {
        question: {
                  "en": "What is the attention mechanism's computational complexity with respect to sequence length?",
                  "es": "¿Cuál es la complejidad computacional del mecanismo de atención con respecto a la longitud de secuencia?",
                  "de": "Was ist die rechnerische Komplexität des Aufmerksamkeitsmechanismus bezüglich der Sequenzlänge?",
                  "nl": "Wat is de rekenkundige complexiteit van het aandachtsmechanisme ten opzichte van sequentielengte?"
        },
        options: [
        {
                  "en": "O(n) where n is the sequence length",
                  "es": "O(n) donde n es la longitud de secuencia",
                  "de": "O(n) wobei n die Sequenzlänge ist",
                  "nl": "O(n) waarbij n de sequentielengte is"
        },
        {
                  "en": "O(n²) where n is the sequence length",
                  "es": "O(n²) donde n es la longitud de secuencia",
                  "de": "O(n²) wobei n die Sequenzlänge ist",
                  "nl": "O(n²) waarbij n de sequentielengte is"
        },
        {
                  "en": "O(1) independent of sequence length",
                  "es": "O(1) independiente de la longitud de secuencia",
                  "de": "O(1) unabhängig von der Sequenzlänge",
                  "nl": "O(1) onafhankelijk van sequentielengte"
        },
        {
                  "en": "O(n log n) where n is the sequence length",
                  "es": "O(n log n) donde n es la longitud de secuencia",
                  "de": "O(n log n) wobei n die Sequenzlänge ist",
                  "nl": "O(n log n) waarbij n de sequentielengte is"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Self-attention has O(n²) complexity because it computes attention weights between every pair of positions in the sequence. This quadratic scaling becomes problematic for very long sequences, leading to research on efficient attention mechanisms.",
                  "es": "La auto-atención tiene complejidad O(n²) porque calcula pesos de atención entre cada par de posiciones en la secuencia. Este escalado cuadrático se vuelve problemático para secuencias muy largas, llevando a investigación en mecanismos de atención eficientes.",
                  "de": "Selbstaufmerksamkeit hat O(n²)-Komplexität weil sie Aufmerksamkeitsgewichte zwischen jedem Positionspaar in der Sequenz berechnet. Diese quadratische Skalierung wird problematisch für sehr lange Sequenzen und führt zu Forschung an effizienten Aufmerksamkeitsmechanismen.",
                  "nl": "Zelf-aandacht heeft O(n²) complexiteit omdat het aandachtsgewichten berekent tussen elk paar posities in de sequentie. Deze kwadratische schaling wordt problematisch voor zeer lange sequenties, wat leidt tot onderzoek naar efficiënte aandachtsmechanismen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of dropout in Transformer architectures?",
                  "es": "¿Cuál es el propósito del dropout en las arquitecturas Transformer?",
                  "de": "Was ist der Zweck von Dropout in Transformer-Architekturen?",
                  "nl": "Wat is het doel van dropout in Transformer-architecturen?"
        },
        options: [
        {
                  "en": "Prevent overfitting by randomly setting some activations to zero during training",
                  "es": "Prevenir sobreajuste estableciendo aleatoriamente algunas activaciones a cero durante entrenamiento",
                  "de": "Overfitting verhindern durch zufälliges Setzen einiger Aktivierungen auf Null während des Trainings",
                  "nl": "Overfitting voorkomen door willekeurig sommige activeringen op nul te zetten tijdens training"
        },
        {
                  "en": "Reduce the computational cost of attention calculations",
                  "es": "Reducir el costo computacional de cálculos de atención",
                  "de": "Die rechnerischen Kosten von Aufmerksamkeitsberechnungen reduzieren",
                  "nl": "De rekenkosten van aandachtsberekeningen verminderen"
        },
        {
                  "en": "Allow the model to handle variable sequence lengths",
                  "es": "Permitir al modelo manejar longitudes de secuencia variables",
                  "de": "Dem Modell ermöglichen variable Sequenzlängen zu handhaben",
                  "nl": "Het model in staat stellen om variabele sequentielengtes te hanteren"
        },
        {
                  "en": "Normalize the attention weights to sum to 1",
                  "es": "Normalizar los pesos de atención para que sumen 1",
                  "de": "Die Aufmerksamkeitsgewichte normalisieren um zu 1 zu summieren",
                  "nl": "De aandachtsgewichten normaliseren zodat ze optellen tot 1"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Dropout is applied to various components in Transformers (attention weights, FFN outputs, residual connections) during training to prevent overfitting. It randomly sets a fraction of inputs to zero, forcing the model to be more robust and generalize better.",
                  "es": "El dropout se aplica a varios componentes en Transformers (pesos de atención, salidas FFN, conexiones residuales) durante entrenamiento para prevenir sobreajuste. Establece aleatoriamente una fracción de entradas a cero, forzando al modelo a ser más robusto y generalizar mejor.",
                  "de": "Dropout wird auf verschiedene Komponenten in Transformers (Aufmerksamkeitsgewichte, FFN-Ausgaben, residuale Verbindungen) während des Trainings angewandt um Overfitting zu verhindern. Es setzt zufällig einen Bruchteil der Eingaben auf Null und zwingt das Modell robuster zu sein und besser zu generalisieren.",
                  "nl": "Dropout wordt toegepast op verschillende componenten in Transformers (aandachtsgewichten, FFN-outputs, residuele verbindingen) tijdens training om overfitting te voorkomen. Het zet willekeurig een fractie van invoer op nul, wat het model dwingt robuuster te zijn en beter te generaliseren."
        }
      },
      {
        question: {
                  "en": "What is the key innovation of the Linformer and similar efficient attention mechanisms?",
                  "es": "¿Cuál es la innovación clave del Linformer y mecanismos de atención eficientes similares?",
                  "de": "Was ist die Schlüsselinnovation des Linformers und ähnlicher effizienter Aufmerksamkeitsmechanismen?",
                  "nl": "Wat is de belangrijkste innovatie van de Linformer en vergelijkbare efficiënte aandachtsmechanismen?"
        },
        options: [
        {
                  "en": "Use linear activation functions instead of softmax",
                  "es": "Usar funciones de activación lineales en lugar de softmax",
                  "de": "Lineare Aktivierungsfunktionen anstelle von Softmax verwenden",
                  "nl": "Lineaire activatiefuncties gebruiken in plaats van softmax"
        },
        {
                  "en": "Process sequences in linear order without parallelization",
                  "es": "Procesar secuencias en orden lineal sin paralelización",
                  "de": "Sequenzen in linearer Reihenfolge ohne Parallelisierung verarbeiten",
                  "nl": "Sequenties in lineaire volgorde verwerken zonder parallelisatie"
        },
        {
                  "en": "Apply linear transformations to positional encodings",
                  "es": "Aplicar transformaciones lineales a codificaciones posicionales",
                  "de": "Lineare Transformationen auf Positionskodierungen anwenden",
                  "nl": "Lineaire transformaties toepassen op positionele coderingen"
        },
        {
                  "en": "Reduce attention complexity from O(n²) to O(n) using low-rank projections",
                  "es": "Reducir complejidad de atención de O(n²) a O(n) usando proyecciones de bajo rango",
                  "de": "Aufmerksamkeitskomplexität von O(n²) auf O(n) durch niedrigrangige Projektionen reduzieren",
                  "nl": "Aandachtscomplexiteit verminderen van O(n²) naar O(n) met behulp van lage-rang projecties"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Linformer and similar methods address the quadratic complexity of self-attention by using low-rank projections to reduce the sequence length dimension before computing attention. This achieves linear complexity O(n) while maintaining most of the benefits of full attention.",
                  "es": "Linformer y métodos similares abordan la complejidad cuadrática de la auto-atención usando proyecciones de bajo rango para reducir la dimensión de longitud de secuencia antes de calcular atención. Esto logra complejidad lineal O(n) manteniendo la mayoría de los beneficios de atención completa.",
                  "de": "Linformer und ähnliche Methoden adressieren die quadratische Komplexität der Selbstaufmerksamkeit durch niedrigrangige Projektionen um die Sequenzlängendimension vor der Aufmerksamkeitsberechnung zu reduzieren. Dies erreicht lineare Komplexität O(n) bei Beibehaltung der meisten Vorteile voller Aufmerksamkeit.",
                  "nl": "Linformer en vergelijkbare methoden pakken de kwadratische complexiteit van zelf-aandacht aan door lage-rang projecties te gebruiken om de sequentielengte-dimensie te verminderen voordat aandacht wordt berekend. Dit bereikt lineaire complexiteit O(n) terwijl de meeste voordelen van volledige aandacht behouden blijven."
        }
      },
      {
        question: {
                  "en": "What is the main innovation of the Reformer architecture?",
                  "es": "¿Cuál es la principal innovación de la arquitectura Reformer?",
                  "de": "Was ist die Hauptinnovation der Reformer-Architektur?",
                  "nl": "Wat is de belangrijkste innovatie van de Reformer-architectuur?"
        },
        options: [
        {
                  "en": "Using reformulated positional encodings for better sequence understanding",
                  "es": "Usar codificaciones posicionales reformuladas para mejor comprensión de secuencias",
                  "de": "Reformulierte Positionskodierungen für besseres Sequenzverständnis verwenden",
                  "nl": "Geherformuleerde positionele coderingen gebruiken voor beter sequentiebegrip"
        },
        {
                  "en": "Reforming the attention mechanism to use convolutional operations",
                  "es": "Reformar el mecanismo de atención para usar operaciones convolucionales",
                  "de": "Den Aufmerksamkeitsmechanismus reformieren um Faltungsoperationen zu verwenden",
                  "nl": "Het aandachtsmechanisme hervormen om convolutionele operaties te gebruiken"
        },
        {
                  "en": "Locality-sensitive hashing (LSH) attention and reversible layers for memory efficiency",
                  "es": "Atención con hashing sensible a localidad (LSH) y capas reversibles para eficiencia de memoria",
                  "de": "Lokalisierungsempfindliche Hash-Aufmerksamkeit (LSH) und reversible Schichten für Speichereffizienz",
                  "nl": "Locality-sensitive hashing (LSH) aandacht en omkeerbare lagen voor geheugenefficiëntie"
        },
        {
                  "en": "Dynamic reformulation of network architecture during training",
                  "es": "Reformulación dinámica de arquitectura de red durante entrenamiento",
                  "de": "Dynamische Reformulierung der Netzwerkarchitektur während des Trainings",
                  "nl": "Dynamische herformulering van netwerkarchitectuur tijdens training"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Reformer introduces two key innovations: LSH attention that reduces attention complexity by only attending to similar tokens found through hashing, and reversible layers that allow gradient computation without storing all activations, dramatically reducing memory usage for long sequences.",
                  "es": "Reformer introduce dos innovaciones clave: atención LSH que reduce complejidad de atención atendiendo solo a tokens similares encontrados a través de hashing, y capas reversibles que permiten cálculo de gradientes sin almacenar todas las activaciones, reduciendo dramáticamente el uso de memoria para secuencias largas.",
                  "de": "Reformer führt zwei Schlüsselinnovationen ein: LSH-Aufmerksamkeit die Aufmerksamkeitskomplexität reduziert indem nur auf ähnliche durch Hashing gefundene Token geachtet wird, und reversible Schichten die Gradientenberechnung ohne Speicherung aller Aktivierungen ermöglichen und Speicherverbrauch für lange Sequenzen drastisch reduzieren.",
                  "nl": "Reformer introduceert twee belangrijke innovaties: LSH-aandacht die aandachtscomplexiteit vermindert door alleen aandacht te schenken aan vergelijkbare tokens gevonden via hashing, en omkeerbare lagen die gradiëntberekening mogelijk maken zonder alle activeringen op te slaan, wat geheugengebruik voor lange sequenties drastisch vermindert."
        }
      },
      {
        question: {
                  "en": "What is the T5 (Text-to-Text Transfer Transformer) model's main design principle?",
                  "es": "¿Cuál es el principio de diseño principal del modelo T5 (Text-to-Text Transfer Transformer)?",
                  "de": "Was ist das Hauptdesignprinzip des T5 (Text-to-Text Transfer Transformer) Modells?",
                  "nl": "Wat is het belangrijkste ontwerpprincipe van het T5 (Text-to-Text Transfer Transformer) model?"
        },
        options: [
        {
                  "en": "Use five separate encoders for different task types",
                  "es": "Usar cinco codificadores separados para diferentes tipos de tareas",
                  "de": "Fünf separate Encoder für verschiedene Aufgabentypen verwenden",
                  "nl": "Vijf afzonderlijke encoders gebruiken voor verschillende taaktypes"
        },
        {
                  "en": "Perform transfer learning with five different pretraining objectives",
                  "es": "Realizar aprendizaje por transferencia con cinco objetivos diferentes de preentrenamiento",
                  "de": "Transfer-Learning mit fünf verschiedenen Vortrainingszielen durchführen",
                  "nl": "Transfer learning uitvoeren met vijf verschillende pretraining-doelstellingen"
        },
        {
                  "en": "Apply five-layer deep attention mechanism for better performance",
                  "es": "Aplicar mecanismo de atención profundo de cinco capas para mejor rendimiento",
                  "de": "Fünfschichtigen tiefen Aufmerksamkeitsmechanismus für bessere Leistung anwenden",
                  "nl": "Vijf-laags diepe aandachtsmechanisme toepassen voor betere prestaties"
        },
        {
                  "en": "Treat every NLP task as text-to-text conversion with unified input/output format",
                  "es": "Tratar cada tarea de PLN como conversión texto-a-texto con formato unificado de entrada/salida",
                  "de": "Jede NLP-Aufgabe als Text-zu-Text-Konvertierung mit einheitlichem Eingabe-/Ausgabeformat behandeln",
                  "nl": "Elke NLP-taak behandelen als tekst-naar-tekst conversie met geünificeerd invoer/uitvoer formaat"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "T5 treats every NLP problem as a text-to-text task. Whether it's translation, summarization, classification, or question answering, the input is text and the output is text. This unified framework simplifies architecture design and enables flexible multi-task learning.",
                  "es": "T5 trata cada problema de PLN como una tarea texto-a-texto. Ya sea traducción, resumen, clasificación o respuesta a preguntas, la entrada es texto y la salida es texto. Este marco unificado simplifica el diseño de arquitectura y permite aprendizaje multi-tarea flexible.",
                  "de": "T5 behandelt jedes NLP-Problem als Text-zu-Text-Aufgabe. Ob Übersetzung, Zusammenfassung, Klassifizierung oder Fragebeantwortung, die Eingabe ist Text und die Ausgabe ist Text. Dieses einheitliche Framework vereinfacht das Architekturdesign und ermöglicht flexibles Multi-Task-Lernen.",
                  "nl": "T5 behandelt elk NLP-probleem als een tekst-naar-tekst taak. Of het nu vertaling, samenvatting, classificatie of vraagbeantwoording is, de invoer is tekst en de uitvoer is tekst. Dit geünificeerde framework vereenvoudigt architectuurontwerp en maakt flexibel multi-task leren mogelijk."
        }
      },
      {
        question: {
                  "en": "What are the Query, Key, and Value matrices in the attention mechanism?",
                  "es": "¿Qué son las matrices Query, Key y Value en el mecanismo de atención?",
                  "de": "Was sind die Query-, Key- und Value-Matrizen im Aufmerksamkeitsmechanismus?",
                  "nl": "Wat zijn de Query, Key en Value matrices in het aandachtsmechanisme?"
        },
        options: [
        {
                  "en": "Learned linear projections of the input used to compute attention weights and output",
                  "es": "Proyecciones lineales aprendidas de la entrada usadas para calcular pesos de atención y salida",
                  "de": "Gelernte lineare Projektionen der Eingabe zur Berechnung von Aufmerksamkeitsgewichten und Ausgabe",
                  "nl": "Geleerde lineaire projecties van de invoer gebruikt om aandachtsgewichten en output te berekenen"
        },
        {
                  "en": "Database components storing attention patterns for reuse",
                  "es": "Componentes de base de datos almacenando patrones de atención para reutilizar",
                  "de": "Datenbankkomponenten die Aufmerksamkeitsmuster zur Wiederverwendung speichern",
                  "nl": "Database-componenten die aandachtspatronen opslaan voor hergebruik"
        },
        {
                  "en": "Three different types of positional encodings",
                  "es": "Tres tipos diferentes de codificaciones posicionales",
                  "de": "Drei verschiedene Arten von Positionskodierungen",
                  "nl": "Drie verschillende types positionele coderingen"
        },
        {
                  "en": "Three separate input sequences processed in parallel",
                  "es": "Tres secuencias de entrada separadas procesadas en paralelo",
                  "de": "Drei separate Eingabesequenzen die parallel verarbeitet werden",
                  "nl": "Drie afzonderlijke invoersequenties parallel verwerkt"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Q, K, and V are learned linear transformations of the input. Attention computes similarity between queries and keys to determine attention weights, then uses these weights to combine values. This mechanism allows the model to selectively focus on relevant information.",
                  "es": "Q, K y V son transformaciones lineales aprendidas de la entrada. La atención calcula similitud entre queries y keys para determinar pesos de atención, luego usa estos pesos para combinar values. Este mecanismo permite al modelo enfocarse selectivamente en información relevante.",
                  "de": "Q, K und V sind gelernte lineare Transformationen der Eingabe. Aufmerksamkeit berechnet Ähnlichkeit zwischen Queries und Keys um Aufmerksamkeitsgewichte zu bestimmen, verwendet dann diese Gewichte um Values zu kombinieren. Dieser Mechanismus ermöglicht dem Modell sich selektiv auf relevante Informationen zu konzentrieren.",
                  "nl": "Q, K en V zijn geleerde lineaire transformaties van de invoer. Aandacht berekent gelijkenis tussen queries en keys om aandachtsgewichten te bepalen, gebruikt dan deze gewichten om values te combineren. Dit mechanisme stelt het model in staat om zich selectief te concentreren op relevante informatie."
        }
      },
      {
        question: {
                  "en": "What is the Performer architecture's approach to efficient attention?",
                  "es": "¿Cuál es el enfoque de la arquitectura Performer para atención eficiente?",
                  "de": "Was ist der Ansatz der Performer-Architektur für effiziente Aufmerksamkeit?",
                  "nl": "Wat is de aanpak van de Performer-architectuur voor efficiënte aandacht?"
        },
        options: [
        {
                  "en": "Execute multiple attention heads in sequential order for better accuracy",
                  "es": "Ejecutar múltiples cabezas de atención en orden secuencial para mejor precisión",
                  "de": "Mehrere Aufmerksamkeits-Köpfe in sequenzieller Reihenfolge für bessere Genauigkeit ausführen",
                  "nl": "Meerdere aandachtskoppen in sequentiële volgorde uitvoeren voor betere nauwkeurigheid"
        },
        {
                  "en": "Approximate attention using random feature maps (kernel methods) for linear complexity",
                  "es": "Aproximar atención usando mapas de características aleatorias (métodos de kernel) para complejidad lineal",
                  "de": "Aufmerksamkeit mittels zufälliger Feature-Maps (Kernel-Methoden) für lineare Komplexität approximieren",
                  "nl": "Aandacht benaderen met behulp van willekeurige feature maps (kernel-methoden) voor lineaire complexiteit"
        },
        {
                  "en": "Dynamically adjust architecture performance based on input characteristics",
                  "es": "Ajustar dinámicamente rendimiento de arquitectura basado en características de entrada",
                  "de": "Architekturleistung dynamisch basierend auf Eingabeeigenschaften anpassen",
                  "nl": "Architectuurprestaties dynamisch aanpassen op basis van invoerkenmerken"
        },
        {
                  "en": "Use performers (actors) to manually label attention patterns",
                  "es": "Usar performers (actores) para etiquetar manualmente patrones de atención",
                  "de": "Performer (Schauspieler) verwenden um Aufmerksamkeitsmuster manuell zu kennzeichnen",
                  "nl": "Performers (acteurs) gebruiken om aandachtspatronen handmatig te labelen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Performer uses Fast Attention Via positive Orthogonal Random features (FAVOR+), which approximates the softmax attention kernel using random feature maps. This reduces complexity from O(n²) to O(n) while maintaining quality, enabling efficient processing of very long sequences.",
                  "es": "Performer usa Fast Attention Via positive Orthogonal Random features (FAVOR+), que aproxima el kernel de atención softmax usando mapas de características aleatorias. Esto reduce complejidad de O(n²) a O(n) manteniendo calidad, permitiendo procesamiento eficiente de secuencias muy largas.",
                  "de": "Performer verwendet Fast Attention Via positive Orthogonal Random features (FAVOR+), das den Softmax-Aufmerksamkeits-Kernel mittels zufälliger Feature-Maps approximiert. Dies reduziert Komplexität von O(n²) auf O(n) bei Beibehaltung der Qualität und ermöglicht effiziente Verarbeitung sehr langer Sequenzen.",
                  "nl": "Performer gebruikt Fast Attention Via positive Orthogonal Random features (FAVOR+), dat de softmax-aandachtskernel benadert met behulp van willekeurige feature maps. Dit vermindert complexiteit van O(n²) naar O(n) terwijl kwaliteit behouden blijft, wat efficiënte verwerking van zeer lange sequenties mogelijk maakt."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the residual connections in Transformer layers?",
                  "es": "¿Cuál es el propósito de las conexiones residuales en las capas Transformer?",
                  "de": "Was ist der Zweck der residualen Verbindungen in Transformer-Schichten?",
                  "nl": "Wat is het doel van de residuele verbindingen in Transformer-lagen?"
        },
        options: [
        {
                  "en": "Connect only the remaining layers after pruning",
                  "es": "Conectar solo las capas restantes después de podar",
                  "de": "Nur die verbleibenden Schichten nach dem Beschneiden verbinden",
                  "nl": "Alleen de resterende lagen verbinden na snoeien"
        },
        {
                  "en": "Enable gradient flow and easier training by creating shortcuts around sublayers",
                  "es": "Habilitar flujo de gradientes y entrenamiento más fácil creando atajos alrededor de subcapas",
                  "de": "Gradientenfluss ermöglichen und Training erleichtern durch Erstellen von Abkürzungen um Unterschichten",
                  "nl": "Gradiëntenstroom mogelijk maken en training vergemakkelijken door snelkoppelingen rond sublagen te creëren"
        },
        {
                  "en": "Residual connections are not used in Transformers",
                  "es": "Las conexiones residuales no se usan en Transformers",
                  "de": "Residuale Verbindungen werden nicht in Transformers verwendet",
                  "nl": "Residuele verbindingen worden niet gebruikt in Transformers"
        },
        {
                  "en": "Store residual errors from previous training iterations",
                  "es": "Almacenar errores residuales de iteraciones de entrenamiento previas",
                  "de": "Residuale Fehler von vorherigen Trainingsiterationen speichern",
                  "nl": "Residuele fouten van eerdere trainingsiteraties opslaan"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Residual connections (skip connections) add the input of a sublayer to its output, allowing gradients to flow directly through the network. This addresses the vanishing gradient problem in deep networks and makes training of very deep Transformers feasible.",
                  "es": "Las conexiones residuales (conexiones de salto) agregan la entrada de una subcapa a su salida, permitiendo que los gradientes fluyan directamente a través de la red. Esto aborda el problema del gradiente desvaneciente en redes profundas y hace factible el entrenamiento de Transformers muy profundos.",
                  "de": "Residuale Verbindungen (Skip-Verbindungen) fügen die Eingabe einer Unterschicht zu ihrer Ausgabe hinzu, wodurch Gradienten direkt durch das Netzwerk fließen können. Dies adressiert das Problem verschwindender Gradienten in tiefen Netzwerken und macht das Training sehr tiefer Transformers machbar.",
                  "nl": "Residuele verbindingen (skip-verbindingen) voegen de invoer van een sublaag toe aan zijn uitvoer, waardoor gradiënten direct door het netwerk kunnen stromen. Dit pakt het verdwijnende gradiëntprobleem aan in diepe netwerken en maakt training van zeer diepe Transformers haalbaar."
        }
      },
      {
        question: {
                  "en": "What is the Longformer's approach to handling long sequences?",
                  "es": "¿Cuál es el enfoque del Longformer para manejar secuencias largas?",
                  "de": "Was ist der Ansatz des Longformers für die Handhabung langer Sequenzen?",
                  "nl": "Wat is de aanpak van de Longformer voor het verwerken van lange sequenties?"
        },
        options: [
        {
                  "en": "Simply increase the maximum sequence length without architectural changes",
                  "es": "Simplemente aumentar la longitud máxima de secuencia sin cambios arquitectónicos",
                  "de": "Einfach die maximale Sequenzlänge ohne architektonische Änderungen erhöhen",
                  "nl": "Simpelweg de maximale sequentielengte verhogen zonder architectuurwijzigingen"
        },
        {
                  "en": "Use longer training times to handle longer input sequences",
                  "es": "Usar tiempos de entrenamiento más largos para manejar secuencias de entrada más largas",
                  "de": "Längere Trainingszeiten verwenden um längere Eingabesequenzen zu handhaben",
                  "nl": "Langere trainingstijden gebruiken om langere invoersequenties te verwerken"
        },
        {
                  "en": "Combine local windowed attention with task-specific global attention patterns",
                  "es": "Combinar atención de ventana local con patrones de atención global específicos de tarea",
                  "de": "Lokale fensterbasierte Aufmerksamkeit mit aufgabenspezifischen globalen Aufmerksamkeitsmustern kombinieren",
                  "nl": "Lokale venster-aandacht combineren met taakspecifieke globale aandachtspatronen"
        },
        {
                  "en": "Break long sequences into shorter segments and process independently",
                  "es": "Dividir secuencias largas en segmentos más cortos y procesar independientemente",
                  "de": "Lange Sequenzen in kürzere Segmente aufteilen und unabhängig verarbeiten",
                  "nl": "Lange sequenties opdelen in kortere segmenten en onafhankelijk verwerken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Longformer introduces an attention mechanism combining sliding window (local) attention for all tokens with global attention for specific task-relevant tokens. This hybrid approach achieves O(n) complexity while maintaining the ability to model both local and long-range dependencies.",
                  "es": "Longformer introduce un mecanismo de atención combinando atención de ventana deslizante (local) para todos los tokens con atención global para tokens específicos relevantes a la tarea. Este enfoque híbrido logra complejidad O(n) manteniendo la capacidad de modelar dependencias tanto locales como de largo alcance.",
                  "de": "Longformer führt einen Aufmerksamkeitsmechanismus ein der gleitende Fenster-(lokale) Aufmerksamkeit für alle Token mit globaler Aufmerksamkeit für spezifische aufgabenrelevante Token kombiniert. Dieser Hybridansatz erreicht O(n)-Komplexität bei Beibehaltung der Fähigkeit sowohl lokale als auch langreichweitige Abhängigkeiten zu modellieren.",
                  "nl": "Longformer introduceert een aandachtsmechanisme dat schuivende venster (lokale) aandacht voor alle tokens combineert met globale aandacht voor specifieke taak-relevante tokens. Deze hybride aanpak bereikt O(n) complexiteit terwijl het vermogen behouden blijft om zowel lokale als langafstandsafhankelijkheden te modelleren."
        }
      },
      {
        question: {
                  "en": "What is the ELECTRA pretraining approach and how does it differ from BERT?",
                  "es": "¿Cuál es el enfoque de preentrenamiento ELECTRA y cómo difiere de BERT?",
                  "de": "Was ist der ELECTRA-Vortrainingsansatz und wie unterscheidet er sich von BERT?",
                  "nl": "Wat is de ELECTRA pretraining-aanpak en hoe verschilt deze van BERT?"
        },
        options: [
        {
                  "en": "Apply electrolysis-inspired weight updates during backpropagation",
                  "es": "Aplicar actualizaciones de peso inspiradas en electrólisis durante retropropagación",
                  "de": "Elektrolyse-inspirierte Gewichtsaktualisierungen während der Rückpropagation anwenden",
                  "nl": "Elektrolyse-geïnspireerde gewichtsupdates toepassen tijdens backpropagation"
        },
        {
                  "en": "Train on electrical engineering textbooks for domain-specific knowledge",
                  "es": "Entrenar en libros de texto de ingeniería eléctrica para conocimiento específico de dominio",
                  "de": "Auf Elektrotechnik-Lehrbüchern für domänenspezifisches Wissen trainieren",
                  "nl": "Trainen op elektrotechnische leerboeken voor domeinspecifieke kennis"
        },
        {
                  "en": "Train discriminator to detect replaced tokens instead of predicting masked tokens",
                  "es": "Entrenar discriminador para detectar tokens reemplazados en lugar de predecir tokens enmascarados",
                  "de": "Diskriminator trainieren um ersetzte Token zu erkennen anstatt maskierte Token vorherzusagen",
                  "nl": "Discriminator trainen om vervangen tokens te detecteren in plaats van gemaskeerde tokens te voorspellen"
        },
        {
                  "en": "Use electrical signals to optimize neural network training",
                  "es": "Usar señales eléctricas para optimizar entrenamiento de red neuronal",
                  "de": "Elektrische Signale zur Optimierung des neuronalen Netzwerktrainings verwenden",
                  "nl": "Elektrische signalen gebruiken om neurale netwerktraining te optimaliseren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "ELECTRA uses replaced token detection: a generator creates plausible replacements for some tokens, and a discriminator learns to identify which tokens were replaced. This is more sample-efficient than masked language modeling because the model learns from all tokens, not just masked ones.",
                  "es": "ELECTRA usa detección de tokens reemplazados: un generador crea reemplazos plausibles para algunos tokens, y un discriminador aprende a identificar qué tokens fueron reemplazados. Esto es más eficiente en muestras que modelado de lenguaje enmascarado porque el modelo aprende de todos los tokens, no solo los enmascarados.",
                  "de": "ELECTRA verwendet Ersatz-Token-Erkennung: ein Generator erstellt plausible Ersetzungen für einige Token, und ein Diskriminator lernt zu identifizieren welche Token ersetzt wurden. Dies ist stichprobeneffizienter als maskierte Sprachmodellierung weil das Modell von allen Token lernt, nicht nur von maskierten.",
                  "nl": "ELECTRA gebruikt vervangen token-detectie: een generator creëert plausibele vervangingen voor sommige tokens, en een discriminator leert te identificeren welke tokens vervangen werden. Dit is steekproef-efficiënter dan gemaskeerde taalmodellering omdat het model van alle tokens leert, niet alleen gemaskeerde."
        }
      },
      {
        question: {
                  "en": "What is the Big Bird architecture's sparse attention pattern?",
                  "es": "¿Cuál es el patrón de atención dispersa de la arquitectura Big Bird?",
                  "de": "Was ist das spärliche Aufmerksamkeitsmuster der Big Bird-Architektur?",
                  "nl": "Wat is het schaarse aandachtspatroon van de Big Bird-architectuur?"
        },
        options: [
        {
                  "en": "Processes only the most important (big) attention weights",
                  "es": "Procesa solo los pesos de atención más importantes (grandes)",
                  "de": "Verarbeitet nur die wichtigsten (großen) Aufmerksamkeitsgewichte",
                  "nl": "Verwerkt alleen de belangrijkste (grote) aandachtsgewichten"
        },
        {
                  "en": "Attention pattern inspired by large bird migration routes",
                  "es": "Patrón de atención inspirado en rutas de migración de aves grandes",
                  "de": "Aufmerksamkeitsmuster inspiriert von großen Vogelzugrouten",
                  "nl": "Aandachtspatroon geïnspireerd door grote vogeltrekroutes"
        },
        {
                  "en": "Uses bird's-eye view perspective for image understanding tasks",
                  "es": "Usa perspectiva de vista de pájaro para tareas de comprensión de imágenes",
                  "de": "Verwendet Vogelperspektive für Bildverständnisaufgaben",
                  "nl": "Gebruikt vogelperspectief voor beeldbegriptaken"
        },
        {
                  "en": "Combines random attention, window attention, and global attention for O(n) complexity",
                  "es": "Combina atención aleatoria, atención de ventana y atención global para complejidad O(n)",
                  "de": "Kombiniert zufällige Aufmerksamkeit, Fenster-Aufmerksamkeit und globale Aufmerksamkeit für O(n)-Komplexität",
                  "nl": "Combineert willekeurige aandacht, vensteraandacht en globale aandacht voor O(n) complexiteit"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Big Bird combines three types of attention: random attention (each token attends to r random tokens), window attention (local neighbors), and global attention (special tokens that attend to all positions). This theoretically-grounded sparse attention achieves linear complexity while preserving approximation guarantees.",
                  "es": "Big Bird combina tres tipos de atención: atención aleatoria (cada token atiende a r tokens aleatorios), atención de ventana (vecinos locales) y atención global (tokens especiales que atienden a todas las posiciones). Esta atención dispersa teóricamente fundamentada logra complejidad lineal preservando garantías de aproximación.",
                  "de": "Big Bird kombiniert drei Arten von Aufmerksamkeit: zufällige Aufmerksamkeit (jeder Token achtet auf r zufällige Token), Fenster-Aufmerksamkeit (lokale Nachbarn) und globale Aufmerksamkeit (spezielle Token die auf alle Positionen achten). Diese theoretisch fundierte spärliche Aufmerksamkeit erreicht lineare Komplexität bei Beibehaltung von Approximationsgarantien.",
                  "nl": "Big Bird combineert drie soorten aandacht: willekeurige aandacht (elke token schenkt aandacht aan r willekeurige tokens), vensteraandacht (lokale buren) en globale aandacht (speciale tokens die aandacht schenken aan alle posities). Deze theoretisch onderbouwde schaarse aandacht bereikt lineaire complexiteit terwijl benaderingsgaranties behouden blijven."
        }
      },
      {
        question: {
                  "en": "What is flash attention and why is it important for large language models?",
                  "es": "¿Qué es flash attention y por qué es importante para grandes modelos de lenguaje?",
                  "de": "Was ist Flash Attention und warum ist es wichtig für große Sprachmodelle?",
                  "nl": "Wat is flash attention en waarom is het belangrijk voor grote taalmodellen?"
        },
        options: [
        {
                  "en": "A technique that briefly shows attention patterns to users",
                  "es": "Una técnica que muestra brevemente patrones de atención a usuarios",
                  "de": "Eine Technik die Aufmerksamkeitsmuster kurz Benutzern zeigt",
                  "nl": "Een techniek die aandachtspatronen kort aan gebruikers toont"
        },
        {
                  "en": "An IO-aware exact attention algorithm that reduces memory reads/writes for faster computation",
                  "es": "Un algoritmo de atención exacta consciente de IO que reduce lecturas/escrituras de memoria para cálculo más rápido",
                  "de": "Ein IO-bewusster exakter Aufmerksamkeitsalgorithmus der Speicherlese-/schreibvorgänge für schnellere Berechnung reduziert",
                  "nl": "Een IO-bewust exact aandachtsalgoritme dat geheugen-lees/schrijfoperaties vermindert voor snellere berekening"
        },
        {
                  "en": "Attention computed using flash memory instead of RAM",
                  "es": "Atención calculada usando memoria flash en lugar de RAM",
                  "de": "Aufmerksamkeit berechnet mit Flash-Speicher anstelle von RAM",
                  "nl": "Aandacht berekend met flash-geheugen in plaats van RAM"
        },
        {
                  "en": "A very fast approximate attention mechanism that sacrifices accuracy",
                  "es": "Un mecanismo de atención aproximado muy rápido que sacrifica precisión",
                  "de": "Ein sehr schneller approximativer Aufmerksamkeitsmechanismus der Genauigkeit opfert",
                  "nl": "Een zeer snel benaderend aandachtsmechanisme dat nauwkeurigheid opoffert"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Flash Attention is an IO-aware algorithm that computes exact attention with fewer memory accesses by fusing operations and using tiling. It achieves the same results as standard attention but is 2-4x faster and uses less memory, crucial for training large models.",
                  "es": "Flash Attention es un algoritmo consciente de IO que calcula atención exacta con menos accesos a memoria fusionando operaciones y usando mosaicos. Logra los mismos resultados que atención estándar pero es 2-4x más rápido y usa menos memoria, crucial para entrenar modelos grandes.",
                  "de": "Flash Attention ist ein IO-bewusster Algorithmus der exakte Aufmerksamkeit mit weniger Speicherzugriffen berechnet indem Operationen fusioniert und Kachelung verwendet werden. Es erzielt dieselben Ergebnisse wie Standard-Aufmerksamkeit ist aber 2-4x schneller und verwendet weniger Speicher, entscheidend für das Training großer Modelle.",
                  "nl": "Flash Attention is een IO-bewust algoritme dat exacte aandacht berekent met minder geheugentoegang door operaties te fuseren en tiling te gebruiken. Het bereikt dezelfde resultaten als standaard aandacht maar is 2-4x sneller en gebruikt minder geheugen, cruciaal voor het trainen van grote modellen."
        }
      },
      {
        question: {
                  "en": "What is the purpose of KV-caching in autoregressive Transformer inference?",
                  "es": "¿Cuál es el propósito del KV-caching en la inferencia autoregresiva de Transformers?",
                  "de": "Was ist der Zweck von KV-Caching bei autoregressiver Transformer-Inferenz?",
                  "nl": "Wat is het doel van KV-caching in autoregressieve Transformer-inferentie?"
        },
        options: [
        {
                  "en": "Temporarily store attention weights between layers",
                  "es": "Almacenar temporalmente pesos de atención entre capas",
                  "de": "Aufmerksamkeitsgewichte zwischen Schichten temporär speichern",
                  "nl": "Aandachtsgewichten tijdelijk opslaan tussen lagen"
        },
        {
                  "en": "Cache the final output predictions for reuse",
                  "es": "Cachear las predicciones de salida finales para reutilizar",
                  "de": "Die finalen Ausgabevorhersagen zum Wiederverwenden cachen",
                  "nl": "De uiteindelijke output-voorspellingen cachen voor hergebruik"
        },
        {
                  "en": "Store the most frequently used vocabulary tokens",
                  "es": "Almacenar los tokens de vocabulario más frecuentemente usados",
                  "de": "Die am häufigsten verwendeten Vokabular-Token speichern",
                  "nl": "De meest gebruikte vocabulaire-tokens opslaan"
        },
        {
                  "en": "Cache key and value computations from previous tokens to avoid recomputing them",
                  "es": "Cachear cálculos de key y value de tokens previos para evitar recalcularlos",
                  "de": "Key- und Value-Berechnungen von vorherigen Token cachen um Neuberechnung zu vermeiden",
                  "nl": "Key en value berekeningen van vorige tokens cachen om herberekening te voorkomen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "During autoregressive generation, the keys and values for previously generated tokens don't change. KV-caching stores these to avoid redundant computation, significantly speeding up inference. Only the new token's KV needs to be computed at each step.",
                  "es": "Durante generación autoregresiva, las keys y values para tokens previamente generados no cambian. KV-caching almacena estos para evitar cálculo redundante, acelerando significativamente la inferencia. Solo la KV del nuevo token necesita calcularse en cada paso.",
                  "de": "Während autoregressiver Generierung ändern sich Keys und Values für zuvor generierte Token nicht. KV-Caching speichert diese um redundante Berechnung zu vermeiden und Inferenz erheblich zu beschleunigen. Nur die KV des neuen Tokens müssen bei jedem Schritt berechnet werden.",
                  "nl": "Tijdens autoregressieve generatie veranderen de keys en values voor eerder gegenereerde tokens niet. KV-caching slaat deze op om redundante berekening te voorkomen, wat inferentie aanzienlijk versnelt. Alleen de KV van de nieuwe token hoeft bij elke stap berekend te worden."
        }
      },
      {
        question: {
                  "en": "What is the difference between encoder-decoder and decoder-only Transformer architectures?",
                  "es": "¿Cuál es la diferencia entre arquitecturas Transformer codificador-decodificador y solo decodificador?",
                  "de": "Was ist der Unterschied zwischen Encoder-Decoder- und reinen Decoder-Transformer-Architekturen?",
                  "nl": "Wat is het verschil tussen encoder-decoder en alleen-decoder Transformer-architecturen?"
        },
        options: [
        {
                  "en": "Encoder-decoder is for classification, decoder-only is for generation",
                  "es": "Codificador-decodificador es para clasificación, solo decodificador es para generación",
                  "de": "Encoder-Decoder ist für Klassifizierung, reiner Decoder ist für Generierung",
                  "nl": "Encoder-decoder is voor classificatie, alleen-decoder is voor generatie"
        },
        {
                  "en": "Encoder-decoder has separate stacks for input/output, decoder-only uses single stack with causal masking",
                  "es": "Codificador-decodificador tiene pilas separadas para entrada/salida, solo decodificador usa pila única con enmascaramiento causal",
                  "de": "Encoder-Decoder hat separate Stapel für Ein-/Ausgabe, reiner Decoder verwendet einzelnen Stapel mit kausaler Maskierung",
                  "nl": "Encoder-decoder heeft aparte stapels voor invoer/uitvoer, alleen-decoder gebruikt enkele stapel met causale maskering"
        },
        {
                  "en": "Encoder-decoder processes sequences sequentially, decoder-only in parallel",
                  "es": "Codificador-decodificador procesa secuencias secuencialmente, solo decodificador en paralelo",
                  "de": "Encoder-Decoder verarbeitet Sequenzen sequenziell, reiner Decoder parallel",
                  "nl": "Encoder-decoder verwerkt sequenties sequentieel, alleen-decoder parallel"
        },
        {
                  "en": "Encoder-decoder has more parameters than decoder-only",
                  "es": "Codificador-decodificador tiene más parámetros que solo decodificador",
                  "de": "Encoder-Decoder hat mehr Parameter als reiner Decoder",
                  "nl": "Encoder-decoder heeft meer parameters dan alleen-decoder"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Encoder-decoder (like T5) has separate encoder and decoder stacks with cross-attention between them, suitable for seq2seq tasks. Decoder-only (like GPT) uses a single stack with causal masking, making it simpler and effective for autoregressive generation.",
                  "es": "Codificador-decodificador (como T5) tiene pilas separadas de codificador y decodificador con atención cruzada entre ellas, adecuado para tareas seq2seq. Solo decodificador (como GPT) usa una pila única con enmascaramiento causal, haciéndolo más simple y efectivo para generación autoregresiva.",
                  "de": "Encoder-Decoder (wie T5) hat separate Encoder- und Decoder-Stapel mit Kreuzaufmerksamkeit zwischen ihnen, geeignet für Seq2Seq-Aufgaben. Reiner Decoder (wie GPT) verwendet einen einzelnen Stapel mit kausaler Maskierung, was es einfacher und effektiv für autoregressive Generierung macht.",
                  "nl": "Encoder-decoder (zoals T5) heeft aparte encoder- en decoder-stapels met kruisaandacht ertussen, geschikt voor seq2seq-taken. Alleen-decoder (zoals GPT) gebruikt een enkele stapel met causale maskering, waardoor het eenvoudiger en effectief is voor autoregressieve generatie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of grouped-query attention (GQA) in modern Transformers?",
                  "es": "¿Cuál es el propósito de la atención de consulta agrupada (GQA) en Transformers modernos?",
                  "de": "Was ist der Zweck von gruppierter Query-Aufmerksamkeit (GQA) in modernen Transformers?",
                  "nl": "Wat is het doel van gegroepeerde-query aandacht (GQA) in moderne Transformers?"
        },
        options: [
        {
                  "en": "Process multiple user queries in batches",
                  "es": "Procesar múltiples consultas de usuario en lotes",
                  "de": "Mehrere Benutzeranfragen in Stapeln verarbeiten",
                  "nl": "Meerdere gebruikersquery's in batches verwerken"
        },
        {
                  "en": "Group similar queries together for faster processing",
                  "es": "Agrupar consultas similares juntas para procesamiento más rápido",
                  "de": "Ähnliche Queries für schnellere Verarbeitung gruppieren",
                  "nl": "Vergelijkbare queries groeperen voor snellere verwerking"
        },
        {
                  "en": "Organize attention heads into semantic groups",
                  "es": "Organizar cabezas de atención en grupos semánticos",
                  "de": "Aufmerksamkeits-Köpfe in semantische Gruppen organisieren",
                  "nl": "Aandachtskoppen organiseren in semantische groepen"
        },
        {
                  "en": "Share key/value projections across query groups to reduce KV cache size while maintaining quality",
                  "es": "Compartir proyecciones de key/value entre grupos de query para reducir tamaño de caché KV manteniendo calidad",
                  "de": "Key/Value-Projektionen über Query-Gruppen teilen um KV-Cache-Größe zu reduzieren bei Beibehaltung der Qualität",
                  "nl": "Key/value projecties delen tussen query-groepen om KV-cache grootte te verminderen terwijl kwaliteit behouden blijft"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "GQA is between multi-head attention (separate KV for each head) and multi-query attention (shared KV for all heads). It groups query heads to share KV projections, significantly reducing memory usage during inference while maintaining better quality than full sharing.",
                  "es": "GQA está entre atención multi-cabeza (KV separadas para cada cabeza) y atención multi-consulta (KV compartida para todas las cabezas). Agrupa cabezas de consulta para compartir proyecciones KV, reduciendo significativamente uso de memoria durante inferencia manteniendo mejor calidad que compartir completamente.",
                  "de": "GQA liegt zwischen Multi-Head-Aufmerksamkeit (separate KV für jeden Kopf) und Multi-Query-Aufmerksamkeit (gemeinsame KV für alle Köpfe). Es gruppiert Query-Köpfe um KV-Projektionen zu teilen, reduziert Speicherverbrauch während Inferenz erheblich bei besserer Qualität als vollständiges Teilen.",
                  "nl": "GQA ligt tussen multi-head aandacht (aparte KV voor elke kop) en multi-query aandacht (gedeelde KV voor alle koppen). Het groepeert query-koppen om KV-projecties te delen, wat geheugengebruik tijdens inferentie aanzienlijk vermindert terwijl betere kwaliteit behouden blijft dan volledig delen."
        }
      },
      {
        question: {
                  "en": "What is rotary position embedding (RoPE) and how does it differ from standard positional encoding?",
                  "es": "¿Qué es el embedding posicional rotatorio (RoPE) y cómo difiere de la codificación posicional estándar?",
                  "de": "Was ist Rotary Position Embedding (RoPE) und wie unterscheidet es sich von Standard-Positionskodierung?",
                  "nl": "Wat is rotary position embedding (RoPE) en hoe verschilt het van standaard positionele codering?"
        },
        options: [
        {
                  "en": "Encodes position by rotating query/key embeddings, providing better extrapolation to longer sequences",
                  "es": "Codifica posición rotando embeddings query/key, proporcionando mejor extrapolación a secuencias más largas",
                  "de": "Kodiert Position durch Rotation von Query/Key-Embeddings und bietet bessere Extrapolation auf längere Sequenzen",
                  "nl": "Codeert positie door query/key embeddings te roteren, wat betere extrapolatie naar langere sequenties biedt"
        },
        {
                  "en": "Randomly rotates positional encodings during training",
                  "es": "Rota aleatoriamente codificaciones posicionales durante entrenamiento",
                  "de": "Rotiert Positionskodierungen zufällig während des Trainings",
                  "nl": "Roteert willekeurig positionele coderingen tijdens training"
        },
        {
                  "en": "Uses circular rotation of tokens in the input sequence",
                  "es": "Usa rotación circular de tokens en la secuencia de entrada",
                  "de": "Verwendet zirkuläre Rotation von Token in der Eingabesequenz",
                  "nl": "Gebruikt circulaire rotatie van tokens in de invoersequentie"
        },
        {
                  "en": "Applies rope-like connections between distant positions",
                  "es": "Aplica conexiones tipo cuerda entre posiciones distantes",
                  "de": "Wendet seilartige Verbindungen zwischen entfernten Positionen an",
                  "nl": "Past touwachtige verbindingen toe tussen verre posities"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "RoPE encodes absolute position with rotation matrices and incorporates relative position information into self-attention via rotation. It provides better length extrapolation than sinusoidal encodings, allowing models trained on shorter sequences to generalize to longer ones.",
                  "es": "RoPE codifica posición absoluta con matrices de rotación e incorpora información de posición relativa en auto-atención vía rotación. Proporciona mejor extrapolación de longitud que codificaciones sinusoidales, permitiendo que modelos entrenados en secuencias más cortas generalicen a más largas.",
                  "de": "RoPE kodiert absolute Position mit Rotationsmatrizen und integriert relative Positionsinformationen in Selbstaufmerksamkeit durch Rotation. Es bietet bessere Längenextrapolation als sinusförmige Kodierungen und ermöglicht auf kürzeren Sequenzen trainierten Modellen auf längere zu generalisieren.",
                  "nl": "RoPE codeert absolute positie met rotatiematrices en integreert relatieve positie-informatie in zelf-aandacht via rotatie. Het biedt betere lengte-extrapolatie dan sinusoïdale coderingen, waardoor modellen getraind op kortere sequenties kunnen generaliseren naar langere."
        }
      },
      {
        question: {
                  "en": "What is the Mixture of Experts (MoE) approach in Transformers?",
                  "es": "¿Qué es el enfoque de Mezcla de Expertos (MoE) en Transformers?",
                  "de": "Was ist der Mixture of Experts (MoE) Ansatz in Transformers?",
                  "nl": "Wat is de Mixture of Experts (MoE) benadering in Transformers?"
        },
        options: [
        {
                  "en": "Use multiple specialized FFN experts and route each token to selected experts dynamically",
                  "es": "Usar múltiples expertos FFN especializados y enrutar cada token a expertos seleccionados dinámicamente",
                  "de": "Mehrere spezialisierte FFN-Experten verwenden und jeden Token dynamisch zu ausgewählten Experten routen",
                  "nl": "Meerdere gespecialiseerde FFN-experts gebruiken en elk token dynamisch naar geselecteerde experts routeren"
        },
        {
                  "en": "Combine outputs from multiple pre-trained models",
                  "es": "Combinar salidas de múltiples modelos preentrenados",
                  "de": "Ausgaben von mehreren vortrainierten Modellen kombinieren",
                  "nl": "Outputs combineren van meerdere voorgetrainde modellen"
        },
        {
                  "en": "Train separate models by different expert researchers",
                  "es": "Entrenar modelos separados por diferentes investigadores expertos",
                  "de": "Separate Modelle von verschiedenen Expertenforschern trainieren",
                  "nl": "Aparte modellen trainen door verschillende expert-onderzoekers"
        },
        {
                  "en": "Use expert human feedback to guide model training",
                  "es": "Usar retroalimentación humana experta para guiar entrenamiento de modelo",
                  "de": "Experten-menschliches Feedback zur Steuerung des Modelltrainings verwenden",
                  "nl": "Expertmenselijke feedback gebruiken om modeltraining te sturen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "MoE replaces the dense FFN with multiple expert networks and a gating mechanism that routes each token to a subset of experts. This allows models to scale parameters without proportionally increasing computation, as only activated experts process each token.",
                  "es": "MoE reemplaza la FFN densa con múltiples redes expertas y un mecanismo de puerta que enruta cada token a un subconjunto de expertos. Esto permite que modelos escalen parámetros sin aumentar proporcionalmente el cálculo, ya que solo expertos activados procesan cada token.",
                  "de": "MoE ersetzt das dichte FFN durch mehrere Expertennetzwerke und einen Gating-Mechanismus der jeden Token zu einer Teilmenge von Experten routet. Dies ermöglicht Modellen Parameter zu skalieren ohne Berechnung proportional zu erhöhen, da nur aktivierte Experten jeden Token verarbeiten.",
                  "nl": "MoE vervangt het dichte FFN door meerdere expertnetwerken en een gating-mechanisme dat elk token naar een subset van experts routeert. Dit stelt modellen in staat om parameters te schalen zonder berekening proportioneel te verhogen, aangezien alleen geactiveerde experts elk token verwerken."
        }
      },
      {
        question: {
                  "en": "What is the purpose of alibi (Attention with Linear Biases) positional encoding?",
                  "es": "¿Cuál es el propósito de la codificación posicional alibi (Atención con Sesgos Lineales)?",
                  "de": "Was ist der Zweck der Alibi (Attention with Linear Biases) Positionskodierung?",
                  "nl": "Wat is het doel van alibi (Attention with Linear Biases) positionele codering?"
        },
        options: [
        {
                  "en": "Provide an alibi for model errors during inference",
                  "es": "Proporcionar una coartada para errores de modelo durante inferencia",
                  "de": "Ein Alibi für Modellfehler während der Inferenz bereitstellen",
                  "nl": "Een alibi bieden voor modelfouten tijdens inferentie"
        },
        {
                  "en": "Implement position awareness through linear transformations only",
                  "es": "Implementar conciencia posicional solo a través de transformaciones lineales",
                  "de": "Positionsbewusstsein nur durch lineare Transformationen implementieren",
                  "nl": "Positiebewustzijn alleen implementeren via lineaire transformaties"
        },
        {
                  "en": "Use aliasing techniques to reduce positional encoding size",
                  "es": "Usar técnicas de aliasing para reducir tamaño de codificación posicional",
                  "de": "Aliasing-Techniken zur Reduzierung der Positionskodierungsgröße verwenden",
                  "nl": "Aliasing-technieken gebruiken om positionele coderingsgrootte te verkleinen"
        },
        {
                  "en": "Add distance-proportional bias to attention scores instead of position embeddings",
                  "es": "Agregar sesgo proporcional a distancia a puntuaciones de atención en lugar de embeddings posicionales",
                  "de": "Abstandsproportionalen Bias zu Aufmerksamkeitswerten hinzufügen anstatt Positionseinbettungen",
                  "nl": "Afstand-proportionele bias toevoegen aan aandachtsscores in plaats van positie-embeddings"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "ALiBi adds a simple linear bias to attention scores based on token distance, penalizing attention to distant tokens. This removes the need for learned position embeddings, reduces parameters, and provides excellent extrapolation to sequences longer than those seen during training.",
                  "es": "ALiBi agrega un sesgo lineal simple a puntuaciones de atención basado en distancia de token, penalizando atención a tokens distantes. Esto elimina la necesidad de embeddings posicionales aprendidos, reduce parámetros y proporciona excelente extrapolación a secuencias más largas que las vistas durante entrenamiento.",
                  "de": "ALiBi fügt Aufmerksamkeitswerten einen einfachen linearen Bias basierend auf Token-Abstand hinzu und bestraft Aufmerksamkeit auf entfernte Token. Dies eliminiert die Notwendigkeit gelernter Positionseinbettungen, reduziert Parameter und bietet ausgezeichnete Extrapolation auf längere Sequenzen als während des Trainings gesehen.",
                  "nl": "ALiBi voegt een eenvoudige lineaire bias toe aan aandachtsscores gebaseerd op token-afstand, waarbij aandacht voor verre tokens wordt bestraft. Dit elimineert de behoefte aan geleerde positie-embeddings, vermindert parameters en biedt uitstekende extrapolatie naar sequenties langer dan die gezien tijdens training."
        }
      },
      {
        question: {
                  "en": "What is sparse Transformer attention and when is it beneficial?",
                  "es": "¿Qué es la atención Transformer dispersa y cuándo es beneficiosa?",
                  "de": "Was ist spärliche Transformer-Aufmerksamkeit und wann ist sie vorteilhaft?",
                  "nl": "Wat is schaarse Transformer-aandacht en wanneer is het voordelig?"
        },
        options: [
        {
                  "en": "Apply sparsity-inducing regularization to attention",
                  "es": "Aplicar regularización inductora de dispersión a la atención",
                  "de": "Spärlichkeit-induzierende Regularisierung auf Aufmerksamkeit anwenden",
                  "nl": "Schaarsheid-inducerende regularisatie toepassen op aandacht"
        },
        {
                  "en": "Use sparse matrices to represent attention weights",
                  "es": "Usar matrices dispersas para representar pesos de atención",
                  "de": "Spärliche Matrizen zur Darstellung von Aufmerksamkeitsgewichten verwenden",
                  "nl": "Schaarse matrices gebruiken om aandachtsgewichten weer te geven"
        },
        {
                  "en": "Limit attention to subset of positions using patterns like strided or fixed attention for efficiency",
                  "es": "Limitar atención a subconjunto de posiciones usando patrones como atención por pasos o fija para eficiencia",
                  "de": "Aufmerksamkeit auf Teilmenge von Positionen mit Mustern wie gestufter oder fester Aufmerksamkeit für Effizienz begrenzen",
                  "nl": "Aandacht beperken tot subset van posities met patronen zoals gestrikte of vaste aandacht voor efficiëntie"
        },
        {
                  "en": "Remove attention heads that contribute little to performance",
                  "es": "Eliminar cabezas de atención que contribuyen poco al rendimiento",
                  "de": "Aufmerksamkeits-Köpfe entfernen die wenig zur Leistung beitragen",
                  "nl": "Aandachtskoppen verwijderen die weinig bijdragen aan prestaties"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sparse attention restricts each token to attend to only a subset of positions (e.g., local window, strided patterns, or learned patterns) rather than all positions. This reduces O(n²) to approximately O(n√n) or O(n), beneficial for very long sequences like images, audio, or long documents.",
                  "es": "La atención dispersa restringe cada token a atender solo un subconjunto de posiciones (ej., ventana local, patrones por pasos, o patrones aprendidos) en lugar de todas las posiciones. Esto reduce O(n²) a aproximadamente O(n√n) u O(n), beneficioso para secuencias muy largas como imágenes, audio o documentos largos.",
                  "de": "Spärliche Aufmerksamkeit beschränkt jeden Token darauf nur auf eine Teilmenge von Positionen zu achten (z.B. lokales Fenster, gestufte Muster oder gelernte Muster) statt auf alle Positionen. Dies reduziert O(n²) auf etwa O(n√n) oder O(n), vorteilhaft für sehr lange Sequenzen wie Bilder, Audio oder lange Dokumente.",
                  "nl": "Schaarse aandacht beperkt elk token tot aandacht voor slechts een subset van posities (bijv. lokaal venster, gestrikte patronen of geleerde patronen) in plaats van alle posities. Dit vermindert O(n²) tot ongeveer O(n√n) of O(n), voordelig voor zeer lange sequenties zoals beelden, audio of lange documenten."
        }
      },
      {
        question: {
                  "en": "What is the cross-attention mechanism in multimodal Transformers like CLIP?",
                  "es": "¿Qué es el mecanismo de atención cruzada en Transformers multimodales como CLIP?",
                  "de": "Was ist der Kreuzaufmerksamkeitsmechanismus in multimodalen Transformers wie CLIP?",
                  "nl": "Wat is het kruisaandachtsmechanisme in multimodale Transformers zoals CLIP?"
        },
        options: [
        {
                  "en": "Allow one modality (e.g., text) to attend to another modality (e.g., image) for alignment",
                  "es": "Permitir que una modalidad (ej., texto) atienda a otra modalidad (ej., imagen) para alineación",
                  "de": "Einer Modalität (z.B. Text) ermöglichen auf eine andere Modalität (z.B. Bild) zur Ausrichtung zu achten",
                  "nl": "Een modaliteit (bijv. tekst) in staat stellen om aandacht te schenken aan een andere modaliteit (bijv. beeld) voor uitlijning"
        },
        {
                  "en": "Cross-validate attention patterns across different training runs",
                  "es": "Validar cruzadamente patrones de atención entre diferentes ejecuciones de entrenamiento",
                  "de": "Aufmerksamkeitsmuster über verschiedene Trainingsläufe kreuzvalidieren",
                  "nl": "Aandachtspatronen kruislings valideren over verschillende trainingsruns"
        },
        {
                  "en": "Apply attention in a cross-shaped pattern across the sequence",
                  "es": "Aplicar atención en un patrón en forma de cruz a través de la secuencia",
                  "de": "Aufmerksamkeit in einem kreuzförmigen Muster über die Sequenz anwenden",
                  "nl": "Aandacht toepassen in een kruisvormig patroon over de sequentie"
        },
        {
                  "en": "Use cross-entropy to weight attention scores",
                  "es": "Usar entropía cruzada para ponderar puntuaciones de atención",
                  "de": "Kreuzentropie zur Gewichtung von Aufmerksamkeitswerten verwenden",
                  "nl": "Kruisentropie gebruiken om aandachtsscores te wegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "In multimodal models, cross-attention allows information exchange between modalities. For example, text tokens (queries) can attend to image patches (keys/values) or vice versa. This enables the model to learn aligned representations across different data types like vision and language.",
                  "es": "En modelos multimodales, la atención cruzada permite intercambio de información entre modalidades. Por ejemplo, tokens de texto (consultas) pueden atender a parches de imagen (keys/values) o viceversa. Esto permite al modelo aprender representaciones alineadas entre diferentes tipos de datos como visión y lenguaje.",
                  "de": "In multimodalen Modellen ermöglicht Kreuzaufmerksamkeit Informationsaustausch zwischen Modalitäten. Zum Beispiel können Text-Token (Queries) auf Bild-Patches (Keys/Values) achten oder umgekehrt. Dies ermöglicht dem Modell ausgerichtete Repräsentationen über verschiedene Datentypen wie Vision und Sprache zu lernen.",
                  "nl": "In multimodale modellen maakt kruisaandacht informatie-uitwisseling tussen modaliteiten mogelijk. Bijvoorbeeld, tekst-tokens (queries) kunnen aandacht schenken aan beeldpatches (keys/values) of omgekeerd. Dit stelt het model in staat om uitgelijnde representaties te leren over verschillende datatypes zoals visie en taal."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the SwiGLU activation function used in some modern Transformers?",
                  "es": "¿Cuál es el propósito de la función de activación SwiGLU usada en algunos Transformers modernos?",
                  "de": "Was ist der Zweck der SwiGLU-Aktivierungsfunktion die in einigen modernen Transformers verwendet wird?",
                  "nl": "Wat is het doel van de SwiGLU-activatiefunctie gebruikt in sommige moderne Transformers?"
        },
        options: [
        {
                  "en": "Apply gated linear units to positional encodings",
                  "es": "Aplicar unidades lineales con puerta a codificaciones posicionales",
                  "de": "Gated Linear Units auf Positionskodierungen anwenden",
                  "nl": "Gated linear units toepassen op positionele coderingen"
        },
        {
                  "en": "Reduce GPU memory usage through activation compression",
                  "es": "Reducir uso de memoria GPU a través de compresión de activación",
                  "de": "GPU-Speicherverbrauch durch Aktivierungskompression reduzieren",
                  "nl": "GPU-geheugengebruik verminderen door activatiecompressie"
        },
        {
                  "en": "Combine Swish and GLU for better FFN performance than standard ReLU",
                  "es": "Combinar Swish y GLU para mejor rendimiento FFN que ReLU estándar",
                  "de": "Swish und GLU für bessere FFN-Leistung als Standard-ReLU kombinieren",
                  "nl": "Swish en GLU combineren voor betere FFN-prestaties dan standaard ReLU"
        },
        {
                  "en": "Swiftly switch between different activation functions during training",
                  "es": "Cambiar rápidamente entre diferentes funciones de activación durante entrenamiento",
                  "de": "Schnell zwischen verschiedenen Aktivierungsfunktionen während des Trainings wechseln",
                  "nl": "Snel schakelen tussen verschillende activatiefuncties tijdens training"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "SwiGLU is a variant of GLU (Gated Linear Unit) using Swish activation. It's been shown to improve model quality compared to standard ReLU or GELU in the FFN layers. Models like PaLM and LLaMA use SwiGLU for better performance despite slightly increased computation.",
                  "es": "SwiGLU es una variante de GLU (Unidad Lineal con Puerta) usando activación Swish. Se ha demostrado que mejora calidad del modelo comparado con ReLU o GELU estándar en capas FFN. Modelos como PaLM y LLaMA usan SwiGLU para mejor rendimiento a pesar de cálculo ligeramente aumentado.",
                  "de": "SwiGLU ist eine Variante von GLU (Gated Linear Unit) die Swish-Aktivierung verwendet. Es wurde gezeigt dass es Modellqualität im Vergleich zu Standard-ReLU oder GELU in FFN-Schichten verbessert. Modelle wie PaLM und LLaMA verwenden SwiGLU für bessere Leistung trotz leicht erhöhter Berechnung.",
                  "nl": "SwiGLU is een variant van GLU (Gated Linear Unit) die Swish-activering gebruikt. Het is aangetoond dat het modelkwaliteit verbetert vergeleken met standaard ReLU of GELU in FFN-lagen. Modellen zoals PaLM en LLaMA gebruiken SwiGLU voor betere prestaties ondanks licht verhoogde berekening."
        }
      },
      {
        question: {
                  "en": "What is the causal language modeling objective and why is it called 'causal'?",
                  "es": "¿Cuál es el objetivo de modelado de lenguaje causal y por qué se llama 'causal'?",
                  "de": "Was ist das kausale Sprachmodellierungsziel und warum wird es 'kausal' genannt?",
                  "nl": "Wat is de causale taalmodellering doelstelling en waarom heet het 'causaal'?"
        },
        options: [
        {
                  "en": "Predict next token using only past/present tokens, respecting temporal causality",
                  "es": "Predecir siguiente token usando solo tokens pasados/presentes, respetando causalidad temporal",
                  "de": "Nächstes Token nur unter Verwendung vergangener/gegenwärtiger Token vorhersagen und zeitliche Kausalität respektieren",
                  "nl": "Volgend token voorspellen met alleen verleden/huidige tokens, temporele causaliteit respecterend"
        },
        {
                  "en": "Use causal inference techniques during training",
                  "es": "Usar técnicas de inferencia causal durante entrenamiento",
                  "de": "Kausale Inferenztechniken während des Trainings verwenden",
                  "nl": "Causale inferentietechnieken gebruiken tijdens training"
        },
        {
                  "en": "Predict which events caused specific text to be written",
                  "es": "Predecir qué eventos causaron que se escribiera texto específico",
                  "de": "Vorhersagen welche Ereignisse spezifischen Text verursacht haben",
                  "nl": "Voorspellen welke gebeurtenissen specifieke tekst veroorzaakten"
        },
        {
                  "en": "Model cause-and-effect relationships in text",
                  "es": "Modelar relaciones de causa-efecto en texto",
                  "de": "Ursache-Wirkungs-Beziehungen in Text modellieren",
                  "nl": "Oorzaak-gevolg relaties in tekst modelleren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Causal language modeling predicts the next token given all previous tokens, using masked (causal) attention that prevents information flow from future tokens. 'Causal' refers to respecting the temporal order where only past can influence future, not vice versa—maintaining causal consistency.",
                  "es": "El modelado de lenguaje causal predice el siguiente token dado todos los tokens previos, usando atención enmascarada (causal) que previene flujo de información de tokens futuros. 'Causal' se refiere a respetar el orden temporal donde solo el pasado puede influenciar el futuro, no viceversa—manteniendo consistencia causal.",
                  "de": "Kausale Sprachmodellierung sagt das nächste Token anhand aller vorherigen Token vorher, unter Verwendung maskierter (kausaler) Aufmerksamkeit die Informationsfluss von zukünftigen Token verhindert. 'Kausal' bezieht sich darauf die zeitliche Ordnung zu respektieren wo nur Vergangenheit Zukunft beeinflussen kann, nicht umgekehrt—kausale Konsistenz wahrend.",
                  "nl": "Causale taalmodellering voorspelt het volgende token gegeven alle vorige tokens, met gemaskeerde (causale) aandacht die informatiestroom van toekomstige tokens voorkomt. 'Causaal' verwijst naar het respecteren van temporele volgorde waarbij alleen verleden toekomst kan beïnvloeden, niet omgekeerd—causale consistentie behoudend."
        }
      },
      {
        question: {
                  "en": "What is the Perceiver architecture's approach to handling variable input sizes?",
                  "es": "¿Cuál es el enfoque de la arquitectura Perceiver para manejar tamaños de entrada variables?",
                  "de": "Was ist der Ansatz der Perceiver-Architektur zur Handhabung variabler Eingabegrößen?",
                  "nl": "Wat is de aanpak van de Perceiver-architectuur voor het verwerken van variabele invoergroottes?"
        },
        options: [
        {
                  "en": "Use learned latent array that cross-attends to inputs, decoupling model size from input size",
                  "es": "Usar arreglo latente aprendido que atiende cruzadamente a entradas, desacoplando tamaño de modelo del tamaño de entrada",
                  "de": "Gelerntes latentes Array verwenden das kreuzweise auf Eingaben achtet und Modellgröße von Eingabegröße entkoppelt",
                  "nl": "Geleerde latente array gebruiken die kruislings aandacht schenkt aan invoer, waarbij modelgrootte ontkoppeld wordt van invoergrootte"
        },
        {
                  "en": "Use different model architectures for different input types",
                  "es": "Usar diferentes arquitecturas de modelo para diferentes tipos de entrada",
                  "de": "Verschiedene Modellarchitekturen für verschiedene Eingabetypen verwenden",
                  "nl": "Verschillende modelarchitecturen gebruiken voor verschillende invoertypes"
        },
        {
                  "en": "Dynamically adjust network depth based on input dimensions",
                  "es": "Ajustar dinámicamente profundidad de red basado en dimensiones de entrada",
                  "de": "Netzwerktiefe dynamisch basierend auf Eingabedimensionen anpassen",
                  "nl": "Netwerkdiepte dynamisch aanpassen op basis van invoerdimensies"
        },
        {
                  "en": "Perceive input patterns and compress them to fixed size",
                  "es": "Percibir patrones de entrada y comprimirlos a tamaño fijo",
                  "de": "Eingabemuster wahrnehmen und auf feste Größe komprimieren",
                  "nl": "Invoerpatronen waarnemen en comprimeren tot vaste grootte"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Perceiver uses a small fixed-size latent array that cross-attends to the (potentially large) input, then processes the latent array through Transformer layers. This asymmetric attention makes computation independent of input size, enabling efficient processing of images, video, audio, or point clouds.",
                  "es": "Perceiver usa un pequeño arreglo latente de tamaño fijo que atiende cruzadamente a la entrada (potencialmente grande), luego procesa el arreglo latente a través de capas Transformer. Esta atención asimétrica hace que el cálculo sea independiente del tamaño de entrada, permitiendo procesamiento eficiente de imágenes, video, audio o nubes de puntos.",
                  "de": "Perceiver verwendet ein kleines latentes Array fester Größe das kreuzweise auf die (potenziell große) Eingabe achtet, dann das latente Array durch Transformer-Schichten verarbeitet. Diese asymmetrische Aufmerksamkeit macht Berechnung unabhängig von Eingabegröße und ermöglicht effiziente Verarbeitung von Bildern, Video, Audio oder Punktwolken.",
                  "nl": "Perceiver gebruikt een kleine latente array van vaste grootte die kruislings aandacht schenkt aan de (potentieel grote) invoer, verwerkt vervolgens de latente array door Transformer-lagen. Deze asymmetrische aandacht maakt berekening onafhankelijk van invoergrootte, wat efficiënte verwerking mogelijk maakt van beelden, video, audio of puntwolken."
        }
      },
      {
        question: {
                  "en": "What is sequence packing and why is it used in Transformer training?",
                  "es": "¿Qué es el empaquetado de secuencias y por qué se usa en entrenamiento de Transformers?",
                  "de": "Was ist Sequence Packing und warum wird es im Transformer-Training verwendet?",
                  "nl": "Wat is sequence packing en waarom wordt het gebruikt in Transformer-training?"
        },
        options: [
        {
                  "en": "Concatenate multiple short sequences into one batch sequence to maximize GPU utilization",
                  "es": "Concatenar múltiples secuencias cortas en una secuencia de lote para maximizar utilización de GPU",
                  "de": "Mehrere kurze Sequenzen zu einer Batch-Sequenz verketten um GPU-Auslastung zu maximieren",
                  "nl": "Meerdere korte sequenties samenvoegen tot één batch-sequentie om GPU-gebruik te maximaliseren"
        },
        {
                  "en": "Compress sequences using packing algorithms before training",
                  "es": "Comprimir secuencias usando algoritmos de empaquetado antes de entrenar",
                  "de": "Sequenzen vor dem Training mit Packing-Algorithmen komprimieren",
                  "nl": "Sequenties comprimeren met packing-algoritmen voor training"
        },
        {
                  "en": "Store trained sequence representations for future use",
                  "es": "Almacenar representaciones de secuencias entrenadas para uso futuro",
                  "de": "Trainierte Sequenzrepräsentationen für zukünftige Verwendung speichern",
                  "nl": "Getrainde sequentierepresentaties opslaan voor toekomstig gebruik"
        },
        {
                  "en": "Package related sequences together for better learning",
                  "es": "Empaquetar secuencias relacionadas juntas para mejor aprendizaje",
                  "de": "Verwandte Sequenzen für besseres Lernen zusammenpacken",
                  "nl": "Gerelateerde sequenties samen verpakken voor beter leren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sequence packing concatenates multiple shorter sequences into single examples up to the maximum length, separated by special tokens. This eliminates wasted computation on padding tokens, significantly improving training efficiency especially when dealing with variable-length sequences.",
                  "es": "El empaquetado de secuencias concatena múltiples secuencias más cortas en ejemplos únicos hasta la longitud máxima, separadas por tokens especiales. Esto elimina cálculo desperdiciado en tokens de relleno, mejorando significativamente eficiencia de entrenamiento especialmente cuando se manejan secuencias de longitud variable.",
                  "de": "Sequence Packing verkettet mehrere kürzere Sequenzen zu einzelnen Beispielen bis zur maximalen Länge, getrennt durch spezielle Token. Dies eliminiert verschwendete Berechnung auf Padding-Token und verbessert Trainingseffizienz erheblich besonders beim Umgang mit Sequenzen variabler Länge.",
                  "nl": "Sequence packing voegt meerdere kortere sequenties samen tot enkele voorbeelden tot de maximale lengte, gescheiden door speciale tokens. Dit elimineert verspilde berekening op padding-tokens, wat trainingsefficiëntie aanzienlijk verbetert vooral bij variabele-lengte sequenties."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  }
})();