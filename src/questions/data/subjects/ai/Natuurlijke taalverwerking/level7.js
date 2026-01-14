// Natuurlijke taalverwerking Quiz - Level 7
(function() {
  const level7 = {
    name: {
          "en": "Advanced NLP Applications & Attention Mechanisms",
          "es": "Aplicaciones Avanzadas de PLN y Mecanismos de Atención",
          "de": "Erweiterte NLP-Anwendungen & Aufmerksamkeitsmechanismen",
          "nl": "Geavanceerde NLP-toepassingen & Aandachtmechanismen"
    },
    questions: [
      {
        question: {
                  "en": "What is the key innovation of the Transformer architecture that replaced RNNs in many NLP tasks?",
                  "es": "¿Cuál es la innovación clave de la arquitectura Transformer que reemplazó a las RNN en muchas tareas de PLN?",
                  "de": "Was ist die Schlüsselinnovation der Transformer-Architektur die RNNs in vielen NLP-Aufgaben ersetzte?",
                  "nl": "Wat is de sleutelinnovatie van de Transformer-architectuur die RNN's verving in veel NLP-taken?"
        },
        options: [
        {
                  "en": "Ability to work only with fixed-length sequences",
                  "es": "Capacidad de trabajar solo con secuencias de longitud fija",
                  "de": "Fähigkeit nur mit Sequenzen fester Länge zu arbeiten",
                  "nl": "Mogelijkheid om alleen met sequenties van vaste lengte te werken"
        },
        {
                  "en": "Reduced memory requirements during training",
                  "es": "Menores requisitos de memoria durante el entrenamiento",
                  "de": "Reduzierte Speicheranforderungen während des Trainings",
                  "nl": "Verminderde geheugenvereisten tijdens training"
        },
        {
                  "en": "Self-attention mechanism that processes all tokens in parallel rather than sequentially",
                  "es": "Mecanismo de auto-atención que procesa todos los tokens en paralelo en lugar de secuencialmente",
                  "de": "Selbstaufmerksamkeitsmechanismus der alle Tokens parallel statt sequenziell verarbeitet",
                  "nl": "Zelf-aandachtsmechanisme dat alle tokens parallel verwerkt in plaats van sequentieel"
        },
        {
                  "en": "Faster training speed compared to feedforward networks",
                  "es": "Velocidad de entrenamiento más rápida comparada con redes feedforward",
                  "de": "Schnellere Trainingsgeschwindigkeit im Vergleich zu Feedforward-Netzwerken",
                  "nl": "Snellere trainingssnelheid vergeleken met feedforward-netwerken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Transformer's self-attention mechanism allows it to process all positions in a sequence simultaneously, unlike RNNs which process sequentially. This parallelization leads to faster training and better capture of long-range dependencies. Self-attention computes relationships between all pairs of positions, allowing each token to attend to any other token in the sequence.",
                  "es": "El mecanismo de auto-atención del Transformer le permite procesar todas las posiciones en una secuencia simultáneamente, a diferencia de las RNN que procesan secuencialmente. Esta paralelización lleva a un entrenamiento más rápido y mejor captura de dependencias de largo alcance. La auto-atención calcula relaciones entre todos los pares de posiciones, permitiendo que cada token atienda a cualquier otro token en la secuencia.",
                  "de": "Der Selbstaufmerksamkeitsmechanismus des Transformers ermöglicht es ihm alle Positionen in einer Sequenz gleichzeitig zu verarbeiten, anders als RNNs die sequenziell verarbeiten. Diese Parallelisierung führt zu schnellerem Training und besserer Erfassung langreichweitiger Abhängigkeiten. Selbstaufmerksamkeit berechnet Beziehungen zwischen allen Positionspaaren und ermöglicht jedem Token auf jeden anderen Token in der Sequenz zu achten.",
                  "nl": "Het zelf-aandachtsmechanisme van de Transformer stelt het in staat om alle posities in een sequentie tegelijkertijd te verwerken, in tegenstelling tot RNN's die sequentieel verwerken. Deze parallellisatie leidt tot snellere training en betere vastlegging van langetermijnafhankelijkheden. Zelf-aandacht berekent relaties tussen alle paren van posities, waardoor elk token kan letten op elk ander token in de sequentie."
        }
      },
      {
        question: {
                  "en": "What is BERT (Bidirectional Encoder Representations from Transformers) and how does it differ from traditional language models?",
                  "es": "¿Qué es BERT (Representaciones de Codificador Bidireccional de Transformadores) y cómo difiere de los modelos de lenguaje tradicionales?",
                  "de": "Was ist BERT (Bidirectional Encoder Representations from Transformers) und wie unterscheidet es sich von traditionellen Sprachmodellen?",
                  "nl": "Wat is BERT (Bidirectional Encoder Representations from Transformers) en hoe verschilt het van traditionele taalmodellen?"
        },
        options: [
        {
                  "en": "BERT is designed specifically for machine translation",
                  "es": "BERT está diseñado específicamente para traducción automática",
                  "de": "BERT ist speziell für maschinelle Übersetzung entwickelt",
                  "nl": "BERT is specifiek ontworpen voor machinevertaling"
        },
        {
                  "en": "BERT cannot be fine-tuned for downstream tasks",
                  "es": "BERT no puede ser ajustado para tareas posteriores",
                  "de": "BERT kann nicht für nachgelagerte Aufgaben feinabgestimmt werden",
                  "nl": "BERT kan niet worden aangepast voor downstream-taken"
        },
        {
                  "en": "BERT is trained bidirectionally using masked language modeling, allowing it to use context from both directions",
                  "es": "BERT se entrena bidireccionalmente usando modelado de lenguaje enmascarado, permitiéndole usar contexto de ambas direcciones",
                  "de": "BERT wird bidirektional mit maskierter Sprachmodellierung trainiert, was es ihm ermöglicht Kontext aus beiden Richtungen zu nutzen",
                  "nl": "BERT wordt bidirectioneel getraind met gemaskeerde taalmodellering, waardoor het context uit beide richtingen kan gebruiken"
        },
        {
                  "en": "BERT only processes text from left to right",
                  "es": "BERT solo procesa texto de izquierda a derecha",
                  "de": "BERT verarbeitet Text nur von links nach rechts",
                  "nl": "BERT verwerkt alleen tekst van links naar rechts"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "BERT revolutionized NLP by training bidirectionally through masked language modeling, where random tokens are masked and the model learns to predict them using context from both left and right. This differs from traditional autoregressive models that only use left-to-right context. BERT's bidirectional training creates rich contextualized representations that can be fine-tuned for various downstream tasks.",
                  "es": "BERT revolucionó el PLN al entrenar bidireccionalmente a través del modelado de lenguaje enmascarado, donde tokens aleatorios se enmascaran y el modelo aprende a predecirlos usando contexto tanto de izquierda como de derecha. Esto difiere de los modelos autoregresivos tradicionales que solo usan contexto de izquierda a derecha. El entrenamiento bidireccional de BERT crea representaciones contextualizadas ricas que pueden ajustarse para varias tareas posteriores.",
                  "de": "BERT revolutionierte NLP durch bidirektionales Training mit maskierter Sprachmodellierung, wo zufällige Tokens maskiert werden und das Modell lernt sie mit Kontext von links und rechts vorherzusagen. Dies unterscheidet sich von traditionellen autoregressiven Modellen die nur Links-nach-rechts-Kontext verwenden. BERTs bidirektionales Training erstellt reiche kontextualisierte Repräsentationen die für verschiedene nachgelagerte Aufgaben feinabgestimmt werden können.",
                  "nl": "BERT revolutioneerde NLP door bidirectioneel te trainen via gemaskeerde taalmodellering, waarbij willekeurige tokens worden gemaskeerd en het model leert ze te voorspellen met context van zowel links als rechts. Dit verschilt van traditionele autoregressieve modellen die alleen links-naar-rechts context gebruiken. BERT's bidirectionele training creëert rijke gecontextualiseerde representaties die kunnen worden aangepast voor verschillende downstream-taken."
        }
      },
      {
        question: {
                  "en": "What is the purpose of positional encoding in Transformer models?",
                  "es": "¿Cuál es el propósito de la codificación posicional en los modelos Transformer?",
                  "de": "Was ist der Zweck der Positionskodierung in Transformer-Modellen?",
                  "nl": "Wat is het doel van positionele encoding in Transformer-modellen?"
        },
        options: [
        {
                  "en": "To provide the model with information about token positions since Transformers don't inherently understand sequence order",
                  "es": "Proporcionar al modelo información sobre las posiciones de tokens ya que los Transformers no entienden inherentemente el orden de secuencia",
                  "de": "Dem Modell Informationen über Token-Positionen zu geben da Transformer von Natur aus keine Sequenzreihenfolge verstehen",
                  "nl": "Om het model informatie te geven over tokenposities omdat Transformers van nature geen sequentievolgorde begrijpen"
        },
        {
                  "en": "To prevent overfitting during training",
                  "es": "Prevenir el sobreajuste durante el entrenamiento",
                  "de": "Überanpassung während des Trainings zu verhindern",
                  "nl": "Om overfitting tijdens training te voorkomen"
        },
        {
                  "en": "To make the model work faster",
                  "es": "Hacer que el modelo funcione más rápido",
                  "de": "Das Modell schneller arbeiten zu lassen",
                  "nl": "Om het model sneller te laten werken"
        },
        {
                  "en": "To reduce the computational complexity of attention",
                  "es": "Reducir la complejidad computacional de la atención",
                  "de": "Die rechnerische Komplexität der Aufmerksamkeit zu reduzieren",
                  "nl": "Om de computationele complexiteit van aandacht te verminderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Unlike RNNs which process sequences sequentially and inherently know token positions, Transformers process all tokens in parallel. Positional encoding adds position information to input embeddings using sine and cosine functions of different frequencies. This allows the model to distinguish between tokens at different positions and understand sequence order, which is crucial for language understanding.",
                  "es": "A diferencia de las RNN que procesan secuencias secuencialmente y conocen inherentemente las posiciones de los tokens, los Transformers procesan todos los tokens en paralelo. La codificación posicional añade información de posición a las incrustaciones de entrada usando funciones seno y coseno de diferentes frecuencias. Esto permite al modelo distinguir entre tokens en diferentes posiciones y entender el orden de secuencia, lo cual es crucial para la comprensión del lenguaje.",
                  "de": "Anders als RNNs die Sequenzen sequenziell verarbeiten und von Natur aus Token-Positionen kennen, verarbeiten Transformer alle Tokens parallel. Positionskodierung fügt Positionsinformationen zu Eingabe-Embeddings hinzu mit Sinus- und Kosinusfunktionen verschiedener Frequenzen. Dies ermöglicht dem Modell zwischen Tokens an verschiedenen Positionen zu unterscheiden und Sequenzreihenfolge zu verstehen, was für Sprachverständnis entscheidend ist.",
                  "nl": "In tegenstelling tot RNN's die sequenties sequentieel verwerken en van nature tokenposities kennen, verwerken Transformers alle tokens parallel. Positionele encoding voegt positie-informatie toe aan invoer-embeddings met behulp van sinus- en cosinusfuncties van verschillende frequenties. Dit stelt het model in staat om onderscheid te maken tussen tokens op verschillende posities en sequentievolgorde te begrijpen, wat cruciaal is voor taalbegrip."
        }
      },
      {
        question: {
                  "en": "What is transfer learning in the context of BERT and similar models?",
                  "es": "¿Qué es el aprendizaje por transferencia en el contexto de BERT y modelos similares?",
                  "de": "Was ist Transfer Learning im Kontext von BERT und ähnlichen Modellen?",
                  "nl": "Wat is transfer learning in de context van BERT en vergelijkbare modellen?"
        },
        options: [
        {
                  "en": "Training multiple models simultaneously",
                  "es": "Entrenar múltiples modelos simultáneamente",
                  "de": "Mehrere Modelle gleichzeitig trainieren",
                  "nl": "Het gelijktijdig trainen van meerdere modellen"
        },
        {
                  "en": "Moving models between different programming languages",
                  "es": "Mover modelos entre diferentes lenguajes de programación",
                  "de": "Modelle zwischen verschiedenen Programmiersprachen verschieben",
                  "nl": "Het verplaatsen van modellen tussen verschillende programmeertalen"
        },
        {
                  "en": "Converting text to numerical representations",
                  "es": "Convertir texto a representaciones numéricas",
                  "de": "Text in numerische Repräsentationen umwandeln",
                  "nl": "Het omzetten van tekst naar numerieke representaties"
        },
        {
                  "en": "Pre-training on large general corpora then fine-tuning on specific downstream tasks",
                  "es": "Pre-entrenamiento en grandes corpus generales luego ajuste fino en tareas específicas posteriores",
                  "de": "Vortraining auf großen allgemeinen Korpora dann Feinabstimmung auf spezifische nachgelagerte Aufgaben",
                  "nl": "Pre-training op grote algemene corpora gevolgd door fine-tuning op specifieke downstream-taken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Transfer learning with BERT involves two phases: pre-training on massive unlabeled text corpora using self-supervised tasks (masked language modeling and next sentence prediction), followed by fine-tuning on specific labeled datasets for downstream tasks. This approach leverages the general language understanding gained during pre-training for specialized tasks like sentiment analysis, question answering, or named entity recognition.",
                  "es": "El aprendizaje por transferencia con BERT involucra dos fases: pre-entrenamiento en corpus de texto masivos sin etiquetar usando tareas auto-supervisadas (modelado de lenguaje enmascarado y predicción de siguiente oración), seguido de ajuste fino en conjuntos de datos etiquetados específicos para tareas posteriores. Este enfoque aprovecha la comprensión general del lenguaje obtenida durante el pre-entrenamiento para tareas especializadas como análisis de sentimientos, respuesta a preguntas o reconocimiento de entidades nombradas.",
                  "de": "Transfer Learning mit BERT umfasst zwei Phasen: Vortraining auf massiven unbeschrifteten Textkorpora mit selbstüberwachten Aufgaben (maskierte Sprachmodellierung und Vorhersage des nächsten Satzes), gefolgt von Feinabstimmung auf spezifischen beschrifteten Datensätzen für nachgelagerte Aufgaben. Dieser Ansatz nutzt das allgemeine Sprachverständnis das während des Vortrainings gewonnen wurde für spezialisierte Aufgaben wie Sentimentanalyse, Fragebeantwortung oder Erkennung benannter Entitäten.",
                  "nl": "Transfer learning met BERT omvat twee fasen: pre-training op massale ongelabelde tekstcorpora met behulp van zelf-supervisietaken (gemaskeerde taalmodellering en voorspelling van volgende zin), gevolgd door fine-tuning op specifieke gelabelde datasets voor downstream-taken. Deze aanpak maakt gebruik van het algemene taalbegrip verkregen tijdens pre-training voor gespecialiseerde taken zoals sentimentanalyse, vraagbeantwoording of herkenning van genoemde entiteiten."
        }
      },
      {
        question: {
                  "en": "What are the main components of a Transformer encoder block?",
                  "es": "¿Cuáles son los componentes principales de un bloque codificador Transformer?",
                  "de": "Was sind die Hauptkomponenten eines Transformer-Encoder-Blocks?",
                  "nl": "Wat zijn de hoofdcomponenten van een Transformer encoder-blok?"
        },
        options: [
        {
                  "en": "Only a recurrent neural network layer",
                  "es": "Solo una capa de red neuronal recurrente",
                  "de": "Nur eine rekurrente neuronale Netzwerkschicht",
                  "nl": "Alleen een recurrente neurale netwerklaag"
        },
        {
                  "en": "Multi-head self-attention mechanism and position-wise feedforward network, both with residual connections and layer normalization",
                  "es": "Mecanismo de auto-atención multi-cabeza y red feedforward posicional, ambas con conexiones residuales y normalización de capa",
                  "de": "Multi-Head-Selbstaufmerksamkeitsmechanismus und positionsweise Feedforward-Netzwerk, beide mit Residualverbindungen und Schichtnormalisierung",
                  "nl": "Multi-head zelf-aandachtsmechanisme en positioneel feedforward-netwerk, beide met residuele verbindingen en laagnormalisatie"
        },
        {
                  "en": "Simple linear transformations without attention",
                  "es": "Transformaciones lineales simples sin atención",
                  "de": "Einfache lineare Transformationen ohne Aufmerksamkeit",
                  "nl": "Eenvoudige lineaire transformaties zonder aandacht"
        },
        {
                  "en": "A convolutional layer followed by pooling",
                  "es": "Una capa convolucional seguida de pooling",
                  "de": "Eine Faltungsschicht gefolgt von Pooling",
                  "nl": "Een convolutielaag gevolgd door pooling"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Each Transformer encoder block contains two main sub-layers: a multi-head self-attention mechanism that allows tokens to attend to all other tokens in the sequence, and a position-wise feedforward network that processes each position independently. Both sub-layers are wrapped with residual connections and followed by layer normalization, which helps with training stability and gradient flow in deep networks.",
                  "es": "Cada bloque codificador Transformer contiene dos sub-capas principales: un mecanismo de auto-atención multi-cabeza que permite a los tokens atender a todos los otros tokens en la secuencia, y una red feedforward posicional que procesa cada posición independientemente. Ambas sub-capas están envueltas con conexiones residuales y seguidas por normalización de capa, lo que ayuda con la estabilidad del entrenamiento y el flujo de gradientes en redes profundas.",
                  "de": "Jeder Transformer-Encoder-Block enthält zwei Hauptunter-schichten: einen Multi-Head-Selbstaufmerksamkeitsmechanismus der Tokens erlaubt auf alle anderen Tokens in der Sequenz zu achten, und ein positionsweises Feedforward-Netzwerk das jede Position unabhängig verarbeitet. Beide Unter-schichten sind mit Residualverbindungen umhüllt und von Schichtnormalisierung gefolgt, was bei Trainingsstabilität und Gradientenfluss in tiefen Netzwerken hilft.",
                  "nl": "Elk Transformer encoder-blok bevat twee hoofdsublagen: een multi-head zelf-aandachtsmechanisme dat tokens in staat stelt om te letten op alle andere tokens in de sequentie, en een positioneel feedforward-netwerk dat elke positie onafhankelijk verwerkt. Beide sublagen zijn omwikkeld met residuele verbindingen en gevolgd door laagnormalisatie, wat helpt bij trainingsstabiliteit en gradiëntflow in diepe netwerken."
        }
      },
      {
        question: {
                  "en": "What is multi-head attention in Transformers?",
                  "es": "¿Qué es la atención multi-cabeza en Transformadores?",
                  "de": "Was ist Multi-Head-Aufmerksamkeit in Transformern?",
                  "nl": "Wat is multi-head aandacht in Transformers?"
        },
        options: [
        {
                  "en": "Training the model with multiple datasets",
                  "es": "Entrenar el modelo con múltiples conjuntos de datos",
                  "de": "Das Modell mit mehreren Datensätzen trainieren",
                  "nl": "Het model trainen met meerdere datasets"
        },
        {
                  "en": "Running multiple attention mechanisms in parallel with different learned projections to capture different types of relationships",
                  "es": "Ejecutar múltiples mecanismos de atención en paralelo con diferentes proyecciones aprendidas para capturar diferentes tipos de relaciones",
                  "de": "Mehrere Aufmerksamkeitsmechanismen parallel mit verschiedenen gelernten Projektionen laufen lassen um verschiedene Arten von Beziehungen zu erfassen",
                  "nl": "Meerdere aandachtmechanismen parallel uitvoeren met verschillende geleerde projecties om verschillende soorten relaties vast te leggen"
        },
        {
                  "en": "Using multiple Transformer models simultaneously",
                  "es": "Usar múltiples modelos Transformer simultáneamente",
                  "de": "Mehrere Transformer-Modelle gleichzeitig verwenden",
                  "nl": "Meerdere Transformer-modellen tegelijkertijd gebruiken"
        },
        {
                  "en": "Having multiple output heads for different tasks",
                  "es": "Tener múltiples cabezas de salida para diferentes tareas",
                  "de": "Mehrere Ausgabeheads für verschiedene Aufgaben haben",
                  "nl": "Meerdere uitvoerheads hebben voor verschillende taken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Multi-head attention runs several attention mechanisms in parallel, each with different learned projection matrices for queries, keys, and values. This allows the model to attend to information from different representation subspaces simultaneously, capturing various types of relationships and dependencies.",
                  "es": "La atención multi-cabeza ejecuta varios mecanismos de atención en paralelo, cada uno con diferentes matrices de proyección aprendidas para consultas, claves y valores. Esto permite al modelo atender información de diferentes subespacios de representación simultáneamente, capturando varios tipos de relaciones y dependencias.",
                  "de": "Multi-Head-Aufmerksamkeit lässt mehrere Aufmerksamkeitsmechanismen parallel laufen, jeder mit verschiedenen gelernten Projektionsmatrizen für Queries, Keys und Values. Dies ermöglicht dem Modell gleichzeitig auf Informationen aus verschiedenen Repräsentations-Subräumen zu achten, verschiedene Arten von Beziehungen und Abhängigkeiten zu erfassen.",
                  "nl": "Multi-head aandacht laat verschillende aandachtmechanismen parallel lopen, elk met verschillende geleerde projectiematrices voor queries, keys en values. Dit stelt het model in staat om tegelijkertijd te letten op informatie uit verschillende representatie-subruimtes, verschillende soorten relaties en afhankelijkheden vast te leggen."
        }
      },
      {
        question: {
                  "en": "What is fine-tuning in the context of pre-trained language models?",
                  "es": "¿Qué es el ajuste fino en el contexto de modelos de lenguaje pre-entrenados?",
                  "de": "Was ist Fine-Tuning im Kontext vortrainierter Sprachmodelle?",
                  "nl": "Wat is fine-tuning in de context van voorgetrainde taalmodellen?"
        },
        options: [
        {
                  "en": "Adapting a pre-trained model to a specific task by continuing training on task-specific data with a lower learning rate",
                  "es": "Adaptar un modelo pre-entrenado a una tarea específica continuando el entrenamiento en datos específicos de la tarea con una tasa de aprendizaje menor",
                  "de": "Ein vortrainiertes Modell an eine spezifische Aufgabe anpassen durch Fortsetzung des Trainings auf aufgabenspezifischen Daten mit niedrigerer Lernrate",
                  "nl": "Een voorgetraind model aanpassen aan een specifieke taak door training voort te zetten op taakspecifieke gegevens met een lagere leersnelheid"
        },
        {
                  "en": "Training the model from scratch on new data",
                  "es": "Entrenar el modelo desde cero en nuevos datos",
                  "de": "Das Modell von Grund auf mit neuen Daten trainieren",
                  "nl": "Het model vanaf nul trainen op nieuwe gegevens"
        },
        {
                  "en": "Optimizing the model's inference speed",
                  "es": "Optimizar la velocidad de inferencia del modelo",
                  "de": "Die Inferenzgeschwindigkeit des Modells optimieren",
                  "nl": "De inferentiesnelheid van het model optimaliseren"
        },
        {
                  "en": "Making small adjustments to hyperparameters",
                  "es": "Hacer pequeños ajustes a hiperparámetros",
                  "de": "Kleine Anpassungen an Hyperparametern machen",
                  "nl": "Kleine aanpassingen maken aan hyperparameters"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fine-tuning leverages the general language representations learned during pre-training and adapts them to specific downstream tasks. The pre-trained weights serve as initialization, and training continues on labeled task-specific data, typically with a lower learning rate to preserve the valuable pre-trained features.",
                  "es": "El ajuste fino aprovecha las representaciones generales de lenguaje aprendidas durante el pre-entrenamiento y las adapta a tareas específicas posteriores. Los pesos pre-entrenados sirven como inicialización, y el entrenamiento continúa en datos etiquetados específicos de la tarea, típicamente con una tasa de aprendizaje menor para preservar las características valiosas pre-entrenadas.",
                  "de": "Fine-Tuning nutzt die allgemeinen Sprachrepräsentationen die während des Vortrainings gelernt wurden und passt sie an spezifische nachgelagerte Aufgaben an. Die vortrainierten Gewichte dienen als Initialisierung und Training wird auf beschrifteten aufgabenspezifischen Daten fortgesetzt, typischerweise mit niedrigerer Lernrate um wertvolle vortrainierte Features zu bewahren.",
                  "nl": "Fine-tuning benut de algemene taalrepresentaties geleerd tijdens pre-training en past ze aan voor specifieke downstream-taken. De voorgetrainde gewichten dienen als initialisatie, en training wordt voortgezet op gelabelde taakspecifieke gegevens, typisch met een lagere leersnelheid om waardevolle voorgetrainde features te behouden."
        }
      },
      {
        question: {
                  "en": "What is question answering (QA) in NLP?",
                  "es": "¿Qué es la respuesta a preguntas (QA) en PLN?",
                  "de": "Was ist Fragebeantwortung (QA) in NLP?",
                  "nl": "Wat is vraagbeantwoording (QA) in NLP?"
        },
        options: [
        {
                  "en": "Automatically generating answers to questions based on given text passages or knowledge bases",
                  "es": "Generar automáticamente respuestas a preguntas basadas en pasajes de texto dados o bases de conocimiento",
                  "de": "Automatisches Generieren von Antworten auf Fragen basierend auf gegebenen Textpassagen oder Wissensbasen",
                  "nl": "Automatisch antwoorden genereren op vragen gebaseerd op gegeven tekstpassages of kennisbases"
        },
        {
                  "en": "Creating multiple choice questions from text",
                  "es": "Crear preguntas de opción múltiple a partir de texto",
                  "de": "Multiple-Choice-Fragen aus Text erstellen",
                  "nl": "Meerkeuzevragen maken uit tekst"
        },
        {
                  "en": "Converting questions to statements",
                  "es": "Convertir preguntas a declaraciones",
                  "de": "Fragen in Aussagen umwandeln",
                  "nl": "Vragen omzetten naar uitspraken"
        },
        {
                  "en": "Analyzing the quality of questions",
                  "es": "Analizar la calidad de las preguntas",
                  "de": "Die Qualität von Fragen analysieren",
                  "nl": "De kwaliteit van vragen analyseren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Question answering systems automatically provide answers to questions posed in natural language. They can be extractive (finding answer spans in given text) or generative (creating new answer text), and may work with structured knowledge bases or unstructured text.",
                  "es": "Los sistemas de respuesta a preguntas proporcionan automáticamente respuestas a preguntas planteadas en lenguaje natural. Pueden ser extractivos (encontrar segmentos de respuesta en texto dado) o generativos (crear nuevo texto de respuesta), y pueden trabajar con bases de conocimiento estructuradas o texto no estructurado.",
                  "de": "Fragebeantwortungssysteme liefern automatisch Antworten auf in natürlicher Sprache gestellte Fragen. Sie können extraktiv sein (Antwortspannen in gegebenem Text finden) oder generativ (neuen Antworttext erstellen), und können mit strukturierten Wissensbasen oder unstrukturiertem Text arbeiten.",
                  "nl": "Vraagbeantwoordingssystemen bieden automatisch antwoorden op vragen gesteld in natuurlijke taal. Ze kunnen extractief zijn (antwoordspannes vinden in gegeven tekst) of generatief (nieuwe antwoordtekst creëren), en kunnen werken met gestructureerde kennisbases of ongestructureerde tekst."
        }
      },
      {
        question: {
                  "en": "What is text summarization?",
                  "es": "¿Qué es la resumización de texto?",
                  "de": "Was ist Textzusammenfassung?",
                  "nl": "Wat is tekstsamenvatting?"
        },
        options: [
        {
                  "en": "Translating text to a simpler language",
                  "es": "Traducir texto a un lenguaje más simple",
                  "de": "Text in eine einfachere Sprache übersetzen",
                  "nl": "Tekst vertalen naar een eenvoudigere taal"
        },
        {
                  "en": "Organizing text into categories",
                  "es": "Organizar texto en categorías",
                  "de": "Text in Kategorien organisieren",
                  "nl": "Tekst organiseren in categorieën"
        },
        {
                  "en": "Automatically creating shorter versions of text that preserve the most important information",
                  "es": "Crear automáticamente versiones más cortas de texto que preservan la información más importante",
                  "de": "Automatisches Erstellen kürzerer Textversionen die die wichtigsten Informationen bewahren",
                  "nl": "Automatisch kortere versies van tekst maken die de belangrijkste informatie behouden"
        },
        {
                  "en": "Counting the main topics in a document",
                  "es": "Contar los temas principales en un documento",
                  "de": "Die Hauptthemen in einem Dokument zählen",
                  "nl": "De hoofdonderwerpen in een document tellen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Text summarization condenses longer documents into shorter versions while retaining key information. It can be extractive (selecting important sentences from the original) or abstractive (generating new text that captures the main ideas).",
                  "es": "La resumización de texto condensa documentos más largos en versiones más cortas mientras retiene información clave. Puede ser extractiva (seleccionando oraciones importantes del original) o abstractiva (generando nuevo texto que captura las ideas principales).",
                  "de": "Textzusammenfassung kondensiert längere Dokumente in kürzere Versionen während Schlüsselinformationen beibehalten werden. Sie kann extraktiv sein (wichtige Sätze aus dem Original auswählen) oder abstraktiv (neuen Text generieren der die Hauptideen erfasst).",
                  "nl": "Tekstsamenvatting verdicht langere documenten tot kortere versies terwijl belangrijke informatie wordt behouden. Het kan extractief zijn (belangrijke zinnen selecteren uit het origineel) of abstractief (nieuwe tekst genereren die de hoofdideeën vastlegt)."
        }
      },
      {
        question: {
                  "en": "What is dialogue systems (chatbots) in NLP?",
                  "es": "¿Qué son los sistemas de diálogo (chatbots) en PLN?",
                  "de": "Was sind Dialogsysteme (Chatbots) in NLP?",
                  "nl": "Wat zijn dialoogsystemen (chatbots) in NLP?"
        },
        options: [
        {
                  "en": "Programs that only respond to specific keywords",
                  "es": "Programas que solo responden a palabras clave específicas",
                  "de": "Programme die nur auf spezifische Schlüsselwörter reagieren",
                  "nl": "Programma's die alleen reageren op specifieke trefwoorden"
        },
        {
                  "en": "Automated email response systems",
                  "es": "Sistemas automatizados de respuesta de correo",
                  "de": "Automatisierte E-Mail-Antwortsysteme",
                  "nl": "Geautomatiseerde emailresponssystemen"
        },
        {
                  "en": "Systems for voice recognition only",
                  "es": "Sistemas solo para reconocimiento de voz",
                  "de": "Systeme nur für Spracherkennung",
                  "nl": "Systemen alleen voor spraakherkenning"
        },
        {
                  "en": "Systems that engage in natural language conversations with humans, understanding context and generating appropriate responses",
                  "es": "Sistemas que participan en conversaciones en lenguaje natural con humanos, entendiendo contexto y generando respuestas apropiadas",
                  "de": "Systeme die natürlichsprachliche Gespräche mit Menschen führen, Kontext verstehen und angemessene Antworten generieren",
                  "nl": "Systemen die natuurlijke taalconversaties aangaan met mensen, context begrijpen en passende reacties genereren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dialogue systems maintain conversational context, track dialogue state, and generate contextually appropriate responses. They combine various NLP techniques including intent recognition, entity extraction, dialogue management, and natural language generation.",
                  "es": "Los sistemas de diálogo mantienen contexto conversacional, rastrean estado del diálogo, y generan respuestas contextualmente apropiadas. Combinan varias técnicas de PLN incluyendo reconocimiento de intención, extracción de entidades, gestión de diálogo, y generación de lenguaje natural.",
                  "de": "Dialogsysteme erhalten Gesprächskontext, verfolgen Dialogzustand und generieren kontextuell angemessene Antworten. Sie kombinieren verschiedene NLP-Techniken einschließlich Absichtserkennung, Entitätsextraktion, Dialogmanagement und natürliche Sprachgenerierung.",
                  "nl": "Dialoogsystemen behouden gesprekscontext, volgen dialoogstatus en genereren contextueel passende reacties. Ze combineren verschillende NLP-technieken waaronder intentieherkenning, entiteitsextractie, dialoogbeheer en natuurlijke taalgeneratie."
        }
      },
      {
        question: {
                  "en": "What is natural language generation (NLG)?",
                  "es": "¿Qué es la generación de lenguaje natural (NLG)?",
                  "de": "Was ist natürliche Sprachgenerierung (NLG)?",
                  "nl": "Wat is natuurlijke taalgeneratie (NLG)?"
        },
        options: [
        {
                  "en": "Analyzing the grammar of sentences",
                  "es": "Analizar la gramática de oraciones",
                  "de": "Die Grammatik von Sätzen analysieren",
                  "nl": "De grammatica van zinnen analyseren"
        },
        {
                  "en": "Automatically producing human-readable text from structured data or internal representations",
                  "es": "Producir automáticamente texto legible por humanos a partir de datos estructurados o representaciones internas",
                  "de": "Automatisches Produzieren menschenlesbarer Text aus strukturierten Daten oder internen Repräsentationen",
                  "nl": "Automatisch voor mensen leesbare tekst produceren uit gestructureerde gegevens of interne representaties"
        },
        {
                  "en": "Converting speech to text",
                  "es": "Convertir voz a texto",
                  "de": "Sprache in Text umwandeln",
                  "nl": "Spraak omzetten naar tekst"
        },
        {
                  "en": "Creating programming code from text",
                  "es": "Crear código de programación a partir de texto",
                  "de": "Programmiercode aus Text erstellen",
                  "nl": "Programmeercode maken uit tekst"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "NLG systems convert structured data, semantic representations, or abstract concepts into fluent natural language text. Applications include report generation, data-to-text systems, creative writing assistance, and personalized content creation.",
                  "es": "Los sistemas NLG convierten datos estructurados, representaciones semánticas, o conceptos abstractos en texto fluido de lenguaje natural. Las aplicaciones incluyen generación de reportes, sistemas de datos-a-texto, asistencia de escritura creativa, y creación de contenido personalizado.",
                  "de": "NLG-Systeme konvertieren strukturierte Daten, semantische Repräsentationen oder abstrakte Konzepte in fließenden natürlichsprachlichen Text. Anwendungen umfassen Berichterstellung, Daten-zu-Text-Systeme, kreative Schreibhilfe und personalisierte Inhaltserstellung.",
                  "nl": "NLG-systemen converteren gestructureerde gegevens, semantische representaties of abstracte concepten naar vloeiende natuurlijke taaltekst. Toepassingen omvatten rapportgeneratie, data-naar-tekst systemen, creatieve schrijfhulp en gepersonaliseerde contentcreatie."
        }
      },
      {
        question: {
                  "en": "What is cross-attention in sequence-to-sequence models?",
                  "es": "¿Qué es la atención cruzada en modelos secuencia-a-secuencia?",
                  "de": "Was ist Cross-Attention in Sequenz-zu-Sequenz-Modellen?",
                  "nl": "Wat is cross-attention in sequentie-naar-sequentie modellen?"
        },
        options: [
        {
                  "en": "Attention between different language pairs",
                  "es": "Atención entre diferentes pares de idiomas",
                  "de": "Aufmerksamkeit zwischen verschiedenen Sprachpaaren",
                  "nl": "Aandacht tussen verschillende taalparen"
        },
        {
                  "en": "Attention between different model architectures",
                  "es": "Atención entre diferentes arquitecturas de modelo",
                  "de": "Aufmerksamkeit zwischen verschiedenen Modellarchitekturen",
                  "nl": "Aandacht tussen verschillende modelarchitecturen"
        },
        {
                  "en": "Attention across multiple datasets",
                  "es": "Atención a través de múltiples conjuntos de datos",
                  "de": "Aufmerksamkeit über mehrere Datensätze",
                  "nl": "Aandacht over meerdere datasets"
        },
        {
                  "en": "Attention mechanism where decoder attends to encoder hidden states, enabling focus on relevant input parts when generating output",
                  "es": "Mecanismo de atención donde el decodificador atiende a estados ocultos del codificador, permitiendo enfoque en partes relevantes de entrada al generar salida",
                  "de": "Aufmerksamkeitsmechanismus wo Decoder auf Encoder-versteckte Zustände achtet, ermöglicht Fokus auf relevante Eingabeteile bei Ausgabegenerierung",
                  "nl": "Aandachtmechanisme waarbij decoder let op encoder verborgen toestanden, maakt focus mogelijk op relevante invoerdelen bij het genereren van uitvoer"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Cross-attention allows the decoder to access information from the encoder's representations of the input sequence. Unlike self-attention which operates within a single sequence, cross-attention creates connections between the source and target sequences, crucial for tasks like machine translation.",
                  "es": "La atención cruzada permite al decodificador acceder a información de las representaciones del codificador de la secuencia de entrada. A diferencia de la auto-atención que opera dentro de una sola secuencia, la atención cruzada crea conexiones entre las secuencias fuente y objetivo, crucial para tareas como traducción automática.",
                  "de": "Cross-Attention ermöglicht dem Decoder Zugang zu Informationen aus den Repräsentationen des Encoders der Eingabesequenz. Anders als Selbstaufmerksamkeit die innerhalb einer einzigen Sequenz operiert, erstellt Cross-Attention Verbindungen zwischen Quell- und Zielsequenzen, entscheidend für Aufgaben wie maschinelle Übersetzung.",
                  "nl": "Cross-attention stelt de decoder in staat om toegang te krijgen tot informatie uit de representaties van de encoder van de invoersequentie. Anders dan zelf-aandacht die werkt binnen een enkele sequentie, creëert cross-attention verbindingen tussen bron- en doelsequenties, cruciaal voor taken zoals machinevertaling."
        }
      },
      {
        question: {
                  "en": "What is beam search in text generation?",
                  "es": "¿Qué es la búsqueda en haz en generación de texto?",
                  "de": "Was ist Beam Search in der Textgenerierung?",
                  "nl": "Wat is beam search in tekstgeneratie?"
        },
        options: [
        {
                  "en": "A search algorithm that maintains multiple candidate sequences and selects the most probable final output",
                  "es": "Un algoritmo de búsqueda que mantiene múltiples secuencias candidatas y selecciona la salida final más probable",
                  "de": "Ein Suchalgorithmus der mehrere Kandidatensequenzen beibehält und die wahrscheinlichste finale Ausgabe auswählt",
                  "nl": "Een zoekalgoritme dat meerdere kandidaatsequenties behoudt en de meest waarschijnlijke finale uitvoer selecteert"
        },
        {
                  "en": "A method for generating random text",
                  "es": "Un método para generar texto aleatorio",
                  "de": "Eine Methode zur Generierung zufälligen Textes",
                  "nl": "Een methode voor het genereren van willekeurige tekst"
        },
        {
                  "en": "A technique for parallel processing",
                  "es": "Una técnica para procesamiento paralelo",
                  "de": "Eine Technik für Parallelverarbeitung",
                  "nl": "Een techniek voor parallelle verwerking"
        },
        {
                  "en": "A way to visualize attention patterns",
                  "es": "Una forma de visualizar patrones de atención",
                  "de": "Eine Methode Aufmerksamkeitsmuster zu visualisieren",
                  "nl": "Een manier om aandachtpatronen te visualiseren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Beam search explores multiple sequence hypotheses simultaneously, keeping the top-k most probable sequences at each step. This helps find better quality outputs than greedy decoding while being more efficient than exhaustive search.",
                  "es": "La búsqueda en haz explora múltiples hipótesis de secuencia simultáneamente, manteniendo las k secuencias más probables en cada paso. Esto ayuda a encontrar salidas de mejor calidad que decodificación codiciosa mientras es más eficiente que búsqueda exhaustiva.",
                  "de": "Beam Search erkundet mehrere Sequenzhypothesen gleichzeitig, behält die top-k wahrscheinlichsten Sequenzen bei jedem Schritt bei. Dies hilft bessere Qualitätsausgaben zu finden als gieriges Dekodieren während es effizienter als exhaustive Suche ist.",
                  "nl": "Beam search verkent meerdere sequentiehypotheses tegelijkertijd, behoudt de top-k meest waarschijnlijke sequenties bij elke stap. Dit helpt betere kwaliteitsuitvoer te vinden dan greedy decoding terwijl het efficiënter is dan exhaustieve zoekopdracht."
        }
      },
      {
        question: {
                  "en": "What is domain adaptation in NLP?",
                  "es": "¿Qué es la adaptación de dominio en PLN?",
                  "de": "Was ist Domänenanpassung in NLP?",
                  "nl": "Wat is domeinaanpassing in NLP?"
        },
        options: [
        {
                  "en": "Converting models to work on different computer systems",
                  "es": "Convertir modelos para trabajar en diferentes sistemas informáticos",
                  "de": "Modelle konvertieren um auf verschiedenen Computersystemen zu arbeiten",
                  "nl": "Modellen converteren om te werken op verschillende computersystemen"
        },
        {
                  "en": "Optimizing models for specific hardware",
                  "es": "Optimizar modelos para hardware específico",
                  "de": "Modelle für spezifische Hardware optimieren",
                  "nl": "Modellen optimaliseren voor specifieke hardware"
        },
        {
                  "en": "Adapting models trained on one domain to perform well on a different but related domain with limited target domain data",
                  "es": "Adaptar modelos entrenados en un dominio para funcionar bien en un dominio diferente pero relacionado con datos limitados del dominio objetivo",
                  "de": "Modelle die auf einer Domäne trainiert wurden anpassen um gut auf einer anderen aber verwandten Domäne mit begrenzten Zieldomänendaten zu funktionieren",
                  "nl": "Modellen getraind op één domein aanpassen om goed te presteren op een ander maar gerelateerd domein met beperkte doeldomeingegevens"
        },
        {
                  "en": "Training models to understand multiple languages",
                  "es": "Entrenar modelos para entender múltiples idiomas",
                  "de": "Modelle trainieren um mehrere Sprachen zu verstehen",
                  "nl": "Modellen trainen om meerdere talen te begrijpen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Domain adaptation addresses the mismatch between training and target domains (e.g., news vs. medical text). Techniques include fine-tuning, domain adversarial training, and transfer learning to leverage source domain knowledge for target domain performance.",
                  "es": "La adaptación de dominio aborda la discrepancia entre dominios de entrenamiento y objetivo (ej., noticias vs. texto médico). Las técnicas incluyen ajuste fino, entrenamiento adversarial de dominio, y aprendizaje por transferencia para aprovechar conocimiento del dominio fuente para rendimiento del dominio objetivo.",
                  "de": "Domänenanpassung adressiert die Diskrepanz zwischen Trainings- und Zieldomänen (z.B. Nachrichten vs. medizinischer Text). Techniken umfassen Fine-Tuning, domänenadversariales Training und Transfer Learning um Quelldomänenwissen für Zieldomänenleistung zu nutzen.",
                  "nl": "Domeinaanpassing pakt de mismatch aan tussen trainings- en doeldomeinen (bijv. nieuws vs. medische tekst). Technieken omvatten fine-tuning, domain adversarial training, en transfer learning om brondomeinkennis te benutten voor doeldomeinprestaties."
        }
      },
      {
        question: {
                  "en": "What is few-shot learning in NLP?",
                  "es": "¿Qué es el aprendizaje de pocos ejemplos en PLN?",
                  "de": "Was ist Few-Shot Learning in NLP?",
                  "nl": "Wat is few-shot learning in NLP?"
        },
        options: [
        {
                  "en": "Learning with limited computational resources",
                  "es": "Aprender con recursos computacionales limitados",
                  "de": "Lernen mit begrenzten Rechenressourcen",
                  "nl": "Leren met beperkte computationele bronnen"
        },
        {
                  "en": "Training models very quickly",
                  "es": "Entrenar modelos muy rápidamente",
                  "de": "Modelle sehr schnell trainieren",
                  "nl": "Modellen zeer snel trainen"
        },
        {
                  "en": "Using small model architectures",
                  "es": "Usar arquitecturas de modelo pequeñas",
                  "de": "Kleine Modellarchitekturen verwenden",
                  "nl": "Kleine modelarchitecturen gebruiken"
        },
        {
                  "en": "Learning to perform tasks with only a few training examples, often using pre-trained models and in-context learning",
                  "es": "Aprender a realizar tareas con solo unos pocos ejemplos de entrenamiento, a menudo usando modelos pre-entrenados y aprendizaje en contexto",
                  "de": "Lernen Aufgaben mit nur wenigen Trainingsbeispielen auszuführen, oft mit vortrainierten Modellen und kontextuellem Lernen",
                  "nl": "Leren om taken uit te voeren met slechts enkele trainingsvoorbeelden, vaak met behulp van voorgetrainde modellen en in-context leren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Few-shot learning enables models to adapt to new tasks with minimal examples. Large language models demonstrate this through in-context learning, where task examples are provided in the prompt without parameter updates.",
                  "es": "El aprendizaje de pocos ejemplos permite a los modelos adaptarse a nuevas tareas con ejemplos mínimos. Los modelos de lenguaje grandes demuestran esto a través del aprendizaje en contexto, donde ejemplos de tareas se proporcionan en el prompt sin actualizaciones de parámetros.",
                  "de": "Few-Shot Learning ermöglicht Modellen sich an neue Aufgaben mit minimalen Beispielen anzupassen. Große Sprachmodelle demonstrieren dies durch kontextuelles Lernen, wo Aufgabenbeispiele im Prompt bereitgestellt werden ohne Parameterupdates.",
                  "nl": "Few-shot learning stelt modellen in staat om zich aan te passen aan nieuwe taken met minimale voorbeelden. Grote taalmodellen demonstreren dit door in-context leren, waarbij taakvoorbeelden worden gegeven in de prompt zonder parameterupdates."
        }
      },
      {
        question: {
                  "en": "What is neural machine translation (NMT)?",
                  "es": "¿Qué es la traducción automática neuronal (NMT)?",
                  "de": "Was ist neuronale maschinelle Übersetzung (NMT)?",
                  "nl": "Wat is neurale machinevertaling (NMT)?"
        },
        options: [
        {
                  "en": "Dictionary-based word substitution",
                  "es": "Sustitución de palabras basada en diccionario",
                  "de": "Wörterbuchbasierte Wortsubstitution",
                  "nl": "Op woordenboek gebaseerde woordvervanging"
        },
        {
                  "en": "Rule-based translation systems",
                  "es": "Sistemas de traducción basados en reglas",
                  "de": "Regelbasierte Übersetzungssysteme",
                  "nl": "Regelgebaseerde vertaalsystemen"
        },
        {
                  "en": "Statistical phrase-based translation",
                  "es": "Traducción estadística basada en frases",
                  "de": "Statistische phrasenbasierte Übersetzung",
                  "nl": "Statistische op zinsdelen gebaseerde vertaling"
        },
        {
                  "en": "End-to-end neural networks that directly translate between languages using encoder-decoder architectures with attention",
                  "es": "Redes neuronales de extremo a extremo que traducen directamente entre idiomas usando arquitecturas codificador-decodificador con atención",
                  "de": "End-to-End neuronale Netzwerke die direkt zwischen Sprachen übersetzen mit Encoder-Decoder-Architekturen mit Aufmerksamkeit",
                  "nl": "End-to-end neurale netwerken die direct tussen talen vertalen met encoder-decoder architecturen met aandacht"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "NMT uses neural networks to learn translation mappings directly from parallel corpora, without explicit linguistic rules. Modern NMT systems use Transformer architectures with attention mechanisms for state-of-the-art translation quality.",
                  "es": "NMT usa redes neuronales para aprender mapeos de traducción directamente de corpus paralelos, sin reglas lingüísticas explícitas. Los sistemas NMT modernos usan arquitecturas Transformer con mecanismos de atención para calidad de traducción de vanguardia.",
                  "de": "NMT verwendet neuronale Netzwerke um Übersetzungszuordnungen direkt aus parallelen Korpora zu lernen, ohne explizite linguistische Regeln. Moderne NMT-Systeme verwenden Transformer-Architekturen mit Aufmerksamkeitsmechanismen für modernste Übersetzungsqualität.",
                  "nl": "NMT gebruikt neurale netwerken om vertaalmappings direct te leren uit parallelle corpora, zonder expliciete linguïstische regels. Moderne NMT-systemen gebruiken Transformer-architecturen met aandachtmechanismen voor state-of-the-art vertaalkwaliteit."
        }
      },
      {
        question: {
                  "en": "What is multilingual NLP?",
                  "es": "¿Qué es el PLN multilingüe?",
                  "de": "Was ist mehrsprachiges NLP?",
                  "nl": "Wat is meertalige NLP?"
        },
        options: [
        {
                  "en": "Translating between any two languages",
                  "es": "Traducir entre cualesquiera dos idiomas",
                  "de": "Zwischen beliebigen zwei Sprachen übersetzen",
                  "nl": "Vertalen tussen twee willekeurige talen"
        },
        {
                  "en": "Creating separate models for each language",
                  "es": "Crear modelos separados para cada idioma",
                  "de": "Separate Modelle für jede Sprache erstellen",
                  "nl": "Afzonderlijke modellen maken voor elke taal"
        },
        {
                  "en": "Learning only high-resource languages",
                  "es": "Aprender solo idiomas de muchos recursos",
                  "de": "Nur ressourcenreiche Sprachen lernen",
                  "nl": "Alleen hulpbronrijke talen leren"
        },
        {
                  "en": "Developing NLP systems that can process and understand multiple languages, often using shared representations",
                  "es": "Desarrollar sistemas de PLN que puedan procesar y entender múltiples idiomas, a menudo usando representaciones compartidas",
                  "de": "NLP-Systeme entwickeln die mehrere Sprachen verarbeiten und verstehen können, oft mit geteilten Repräsentationen",
                  "nl": "NLP-systemen ontwikkelen die meerdere talen kunnen verwerken en begrijpen, vaak met gedeelde representaties"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Multilingual NLP creates models that work across languages, often leveraging cross-lingual transfer learning. This enables better performance on low-resource languages and unified architectures for global applications.",
                  "es": "El PLN multilingüe crea modelos que funcionan a través de idiomas, a menudo aprovechando aprendizaje por transferencia entre idiomas. Esto permite mejor rendimiento en idiomas de pocos recursos y arquitecturas unificadas para aplicaciones globales.",
                  "de": "Mehrsprachiges NLP erstellt Modelle die sprachenbergreifend funktionieren, oft nutzen sprachenbergreifendes Transfer Learning. Dies ermöglicht bessere Leistung bei ressourcenarmen Sprachen und einheitliche Architekturen für globale Anwendungen.",
                  "nl": "Meertalige NLP creëert modellen die werken over talen heen, vaak gebruikmakend van cross-linguaal transfer learning. Dit maakt betere prestaties mogelijk voor hulpbronarme talen en uniforme architecturen voor globale toepassingen."
        }
      },
      {
        question: {
                  "en": "What is adversarial training in NLP?",
                  "es": "¿Qué es el entrenamiento adversarial en PLN?",
                  "de": "Was ist Adversarial Training in NLP?",
                  "nl": "Wat is adversarial training in NLP?"
        },
        options: [
        {
                  "en": "Training models to compete against each other",
                  "es": "Entrenar modelos para competir entre sí",
                  "de": "Modelle trainieren um gegeneinander zu konkurrieren",
                  "nl": "Modellen trainen om tegen elkaar te concurreren"
        },
        {
                  "en": "Using negative examples only",
                  "es": "Usar solo ejemplos negativos",
                  "de": "Nur negative Beispiele verwenden",
                  "nl": "Alleen negatieve voorbeelden gebruiken"
        },
        {
                  "en": "Training models to be robust against adversarial examples or using adversarial objectives to improve learning",
                  "es": "Entrenar modelos para ser robustos contra ejemplos adversariales o usar objetivos adversariales para mejorar el aprendizaje",
                  "de": "Modelle trainieren um robust gegen adversarielle Beispiele zu sein oder adversarielle Ziele verwenden um Lernen zu verbessern",
                  "nl": "Modellen trainen om robuust te zijn tegen adversariale voorbeelden of adversariale doelstellingen gebruiken om leren te verbeteren"
        },
        {
                  "en": "Training with hostile data",
                  "es": "Entrenar con datos hostiles",
                  "de": "Mit feindlichen Daten trainieren",
                  "nl": "Trainen met vijandige gegevens"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adversarial training can make models more robust by exposing them to adversarial examples during training, or use adversarial objectives like GANs for better representation learning and domain adaptation.",
                  "es": "El entrenamiento adversarial puede hacer modelos más robustos exponiéndolos a ejemplos adversariales durante entrenamiento, o usar objetivos adversariales como GANs para mejor aprendizaje de representación y adaptación de dominio.",
                  "de": "Adversarial Training kann Modelle robuster machen durch Exposition gegenüber adversariellen Beispielen während des Trainings, oder adversarielle Ziele wie GANs für besseres Repräsentationslernen und Domänenanpassung verwenden.",
                  "nl": "Adversarial training kan modellen robuuster maken door ze bloot te stellen aan adversariale voorbeelden tijdens training, of adversariale doelstellingen zoals GANs gebruiken voor beter representatieleren en domeinaanpassing."
        }
      },
      {
        question: {
                  "en": "What is zero-shot learning in NLP?",
                  "es": "¿Qué es el aprendizaje de cero ejemplos en PLN?",
                  "de": "Was ist Zero-Shot Learning in NLP?",
                  "nl": "Wat is zero-shot learning in NLP?"
        },
        options: [
        {
                  "en": "Performing tasks without any task-specific training examples, relying on pre-trained knowledge and task descriptions",
                  "es": "Realizar tareas sin ejemplos de entrenamiento específicos de la tarea, confiando en conocimiento pre-entrenado y descripciones de tareas",
                  "de": "Aufgaben ohne aufgabenspezifische Trainingsbeispiele ausführen, verlassen auf vortrainiertes Wissen und Aufgabenbeschreibungen",
                  "nl": "Taken uitvoeren zonder taakspecifieke trainingsvoorbeelden, vertrouwend op voorgetrainde kennis en taakbeschrijvingen"
        },
        {
                  "en": "Training without any data",
                  "es": "Entrenar sin ningún dato",
                  "de": "Ohne jegliche Daten trainieren",
                  "nl": "Trainen zonder enige gegevens"
        },
        {
                  "en": "Learning very quickly",
                  "es": "Aprender muy rápidamente",
                  "de": "Sehr schnell lernen",
                  "nl": "Heel snel leren"
        },
        {
                  "en": "Using only unlabeled data",
                  "es": "Usar solo datos sin etiquetar",
                  "de": "Nur unbeschriftete Daten verwenden",
                  "nl": "Alleen ongelabelde gegevens gebruiken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Zero-shot learning leverages pre-trained models' general knowledge to perform new tasks without fine-tuning. Large language models excel at this through instruction following and in-context learning with task descriptions.",
                  "es": "El aprendizaje de cero ejemplos aprovecha el conocimiento general de modelos pre-entrenados para realizar nuevas tareas sin ajuste fino. Los modelos de lenguaje grandes sobresalen en esto a través de seguimiento de instrucciones y aprendizaje en contexto con descripciones de tareas.",
                  "de": "Zero-Shot Learning nutzt das allgemeine Wissen vortrainierter Modelle um neue Aufgaben ohne Fine-Tuning auszuführen. Große Sprachmodelle zeichnen sich darin aus durch Instruktionsbefolgung und kontextuelles Lernen mit Aufgabenbeschreibungen.",
                  "nl": "Zero-shot learning benut de algemene kennis van voorgetrainde modellen om nieuwe taken uit te voeren zonder fine-tuning. Grote taalmodellen blinken hierin uit door instructieopvolging en in-context leren met taakbeschrijvingen."
        }
      },
      {
        question: {
                  "en": "What is explainable AI (XAI) in NLP?",
                  "es": "¿Qué es la IA explicable (XAI) en PLN?",
                  "de": "Was ist erklärbare KI (XAI) in NLP?",
                  "nl": "Wat is verklaarbare AI (XAI) in NLP?"
        },
        options: [
        {
                  "en": "Making AI systems explain their algorithms in natural language",
                  "es": "Hacer que los sistemas de IA expliquen sus algoritmos en lenguaje natural",
                  "de": "KI-Systeme dazu bringen ihre Algorithmen in natürlicher Sprache zu erklären",
                  "nl": "AI-systemen hun algoritmen laten uitleggen in natuurlijke taal"
        },
        {
                  "en": "Creating simple rule-based systems",
                  "es": "Crear sistemas simples basados en reglas",
                  "de": "Einfache regelbasierte Systeme erstellen",
                  "nl": "Eenvoudige regelgebaseerde systemen maken"
        },
        {
                  "en": "Methods to understand and interpret how NLP models make decisions, including attention visualization and feature attribution",
                  "es": "Métodos para entender e interpretar cómo los modelos de PLN toman decisiones, incluyendo visualización de atención y atribución de características",
                  "de": "Methoden um zu verstehen und zu interpretieren wie NLP-Modelle Entscheidungen treffen, einschließlich Aufmerksamkeitsvisualisierung und Feature-Attribution",
                  "nl": "Methoden om te begrijpen en interpreteren hoe NLP-modellen beslissingen nemen, inclusief aandachtvisualisatie en feature-attributie"
        },
        {
                  "en": "Reducing model complexity",
                  "es": "Reducir complejidad del modelo",
                  "de": "Modellkomplexität reduzieren",
                  "nl": "Modelcomplexiteit verminderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "XAI in NLP aims to make black-box models interpretable through techniques like attention maps, gradient-based attribution, probing tasks, and counterfactual analysis to understand model reasoning and build trust.",
                  "es": "XAI en PLN busca hacer modelos de caja negra interpretables a través de técnicas como mapas de atención, atribución basada en gradientes, tareas de sondeo, y análisis contrafactual para entender razonamiento del modelo y construir confianza.",
                  "de": "XAI in NLP zielt darauf ab Black-Box-Modelle interpretierbar zu machen durch Techniken wie Aufmerksamkeitskarten, gradientenbasierte Attribution, Probing-Aufgaben und kontrafaktische Analyse um Modellraisonnement zu verstehen und Vertrauen aufzubauen.",
                  "nl": "XAI in NLP streeft ernaar black-box modellen interpreteerbaar te maken door technieken zoals aandachtkaarten, gradiënt-gebaseerde attributie, probing-taken en contrafeitelijke analyse om modelredenering te begrijpen en vertrouwen op te bouwen."
        }
      },
      {
        question: {
                  "en": "What is GPT (Generative Pre-trained Transformer)?",
                  "es": "¿Qué es GPT (Transformador Pre-entrenado Generativo)?",
                  "de": "Was ist GPT (Generative Pre-trained Transformer)?",
                  "nl": "Wat is GPT (Generative Pre-trained Transformer)?"
        },
        options: [
        {
                  "en": "A bidirectional model like BERT",
                  "es": "Un modelo bidireccional como BERT",
                  "de": "Ein bidirektionales Modell wie BERT",
                  "nl": "Een bidirectioneel model zoals BERT"
        },
        {
                  "en": "An autoregressive language model trained to predict the next token, using left-to-right context only",
                  "es": "Un modelo de lenguaje autoregresivo entrenado para predecir el siguiente token, usando solo contexto de izquierda a derecha",
                  "de": "Ein autoregressives Sprachmodell trainiert um das nächste Token vorherzusagen, verwendet nur Links-nach-rechts-Kontext",
                  "nl": "Een autoregressief taalmodel getraind om het volgende token te voorspellen, gebruikt alleen links-naar-rechts context"
        },
        {
                  "en": "A translation-specific model",
                  "es": "Un modelo específico para traducción",
                  "de": "Ein übersetzungsspezifisches Modell",
                  "nl": "Een vertaling-specifiek model"
        },
        {
                  "en": "A supervised classification model",
                  "es": "Un modelo de clasificación supervisado",
                  "de": "Ein überwachtes Klassifikationsmodell",
                  "nl": "Een gesuperviseerd classificatiemodel"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "GPT models are trained autoregressively to predict the next token given previous tokens, using only left-to-right context. This makes them excellent for text generation tasks and enables few-shot learning through prompting.",
                  "es": "Los modelos GPT se entrenan autoregresivamente para predecir el siguiente token dados tokens anteriores, usando solo contexto de izquierda a derecha. Esto los hace excelentes para tareas de generación de texto y permite aprendizaje de pocos ejemplos a través de prompting.",
                  "de": "GPT-Modelle werden autoregressiv trainiert um das nächste Token bei gegebenen vorherigen Tokens vorherzusagen, verwenden nur Links-nach-rechts-Kontext. Dies macht sie ausgezeichnet für Textgenerierungsaufgaben und ermöglicht Few-Shot Learning durch Prompting.",
                  "nl": "GPT-modellen worden autoregressief getraind om het volgende token te voorspellen gegeven eerdere tokens, gebruikt alleen links-naar-rechts context. Dit maakt ze uitstekend voor tekstgeneratietaken en maakt few-shot learning mogelijk via prompting."
        }
      },
      {
        question: {
                  "en": "What is prompt engineering?",
                  "es": "¿Qué es la ingeniería de prompts?",
                  "de": "Was ist Prompt Engineering?",
                  "nl": "Wat is prompt engineering?"
        },
        options: [
        {
                  "en": "Optimizing model architecture",
                  "es": "Optimizar arquitectura del modelo",
                  "de": "Modellarchitektur optimieren",
                  "nl": "Modelarchitectuur optimaliseren"
        },
        {
                  "en": "Crafting input prompts to elicit desired outputs from language models without changing model parameters",
                  "es": "Crear prompts de entrada para obtener salidas deseadas de modelos de lenguaje sin cambiar parámetros del modelo",
                  "de": "Eingabeprompts erstellen um gewünschte Ausgaben von Sprachmodellen zu erhalten ohne Modellparameter zu ändern",
                  "nl": "Invoerprompts maken om gewenste outputs te verkrijgen van taalmodellen zonder modelparameters te wijzigen"
        },
        {
                  "en": "Building user interfaces for AI systems",
                  "es": "Construir interfaces de usuario para sistemas de IA",
                  "de": "Benutzeroberflächen für KI-Systeme bauen",
                  "nl": "Gebruikersinterfaces bouwen voor AI-systemen"
        },
        {
                  "en": "Training models with prompts",
                  "es": "Entrenar modelos con prompts",
                  "de": "Modelle mit Prompts trainieren",
                  "nl": "Modellen trainen met prompts"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Prompt engineering designs effective instructions and context to guide language models toward desired behaviors, enabling in-context learning and task adaptation without fine-tuning.",
                  "es": "La ingeniería de prompts diseña instrucciones y contexto efectivos para guiar modelos de lenguaje hacia comportamientos deseados, permitiendo aprendizaje en contexto y adaptación de tareas sin ajuste fino.",
                  "de": "Prompt Engineering entwirft effektive Anweisungen und Kontext um Sprachmodelle zu gewünschten Verhaltensweisen zu führen, ermöglicht kontextuelles Lernen und Aufgabenanpassung ohne Fine-Tuning.",
                  "nl": "Prompt engineering ontwerpt effectieve instructies en context om taalmodellen naar gewenst gedrag te leiden, maakt in-context leren en taakaanpassing mogelijk zonder fine-tuning."
        }
      },
      {
        question: {
                  "en": "What is the scaled dot-product attention mechanism?",
                  "es": "¿Qué es el mecanismo de atención de producto punto escalado?",
                  "de": "Was ist der skalierte Skalarprodukt-Aufmerksamkeitsmechanismus?",
                  "nl": "Wat is het geschaalde punt-product aandachtsmechanisme?"
        },
        options: [
        {
                  "en": "Scaling input embeddings before attention",
                  "es": "Escalar embeddings de entrada antes de atención",
                  "de": "Eingabe-Embeddings vor Aufmerksamkeit skalieren",
                  "nl": "Invoer-embeddings schalen vóór aandacht"
        },
        {
                  "en": "Computing attention scores as dot products between queries and keys, scaled by sqrt(dimension), then applying softmax",
                  "es": "Calcular puntuaciones de atención como productos punto entre consultas y claves, escalado por sqrt(dimensión), luego aplicar softmax",
                  "de": "Aufmerksamkeitsscores als Skalarprodukte zwischen Queries und Keys berechnen, skaliert mit sqrt(Dimension), dann Softmax anwenden",
                  "nl": "Aandachtscores berekenen als puntproducten tussen queries en keys, geschaald met sqrt(dimensie), dan softmax toepassen"
        },
        {
                  "en": "Using dot products without normalization",
                  "es": "Usar productos punto sin normalización",
                  "de": "Skalarprodukte ohne Normalisierung verwenden",
                  "nl": "Puntproducten gebruiken zonder normalisatie"
        },
        {
                  "en": "Multiplying attention weights by a scaling factor",
                  "es": "Multiplicar pesos de atención por un factor de escala",
                  "de": "Aufmerksamkeitsgewichte mit einem Skalierungsfaktor multiplizieren",
                  "nl": "Aandachtsgewichten vermenigvuldigen met een schaalfactor"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The scaled dot-product attention computes similarity between queries and keys via dot products, divides by sqrt(d_k) to prevent gradient vanishing, and applies softmax to get attention weights that are used to weight the values.",
                  "es": "La atención de producto punto escalado calcula similitud entre consultas y claves vía productos punto, divide por sqrt(d_k) para prevenir desvanecimiento de gradiente, y aplica softmax para obtener pesos de atención usados para ponderar valores.",
                  "de": "Die skalierte Skalarprodukt-Aufmerksamkeit berechnet Ähnlichkeit zwischen Queries und Keys via Skalarprodukte, teilt durch sqrt(d_k) um Gradienten-Verschwinden zu verhindern, und wendet Softmax an um Aufmerksamkeitsgewichte zu erhalten die zum Gewichten der Values verwendet werden.",
                  "nl": "De geschaalde punt-product aandacht berekent gelijkenis tussen queries en keys via puntproducten, deelt door sqrt(d_k) om gradiënt-verdwijning te voorkomen, en past softmax toe om aandachtsgewichten te krijgen die gebruikt worden om de values te wegen."
        }
      },
      {
        question: {
                  "en": "What is layer normalization in Transformers?",
                  "es": "¿Qué es la normalización de capa en Transformadores?",
                  "de": "Was ist Layer Normalization in Transformern?",
                  "nl": "Wat is laagnormalisatie in Transformers?"
        },
        options: [
        {
                  "en": "Scaling layer outputs to unit variance",
                  "es": "Escalar salidas de capa a varianza unitaria",
                  "de": "Schichtausgaben auf Einheitsvarianz skalieren",
                  "nl": "Laaguitvoer schalen naar eenheidvariantie"
        },
        {
                  "en": "Removing layers during training",
                  "es": "Eliminar capas durante entrenamiento",
                  "de": "Schichten während des Trainings entfernen",
                  "nl": "Lagen verwijderen tijdens training"
        },
        {
                  "en": "Normalizing weights between layers",
                  "es": "Normalizar pesos entre capas",
                  "de": "Gewichte zwischen Schichten normalisieren",
                  "nl": "Gewichten normaliseren tussen lagen"
        },
        {
                  "en": "Normalizing activations across features for each example independently to stabilize training",
                  "es": "Normalizar activaciones a través de características para cada ejemplo independientemente para estabilizar entrenamiento",
                  "de": "Aktivierungen über Features für jedes Beispiel unabhängig normalisieren um Training zu stabilisieren",
                  "nl": "Activaties normaliseren over features voor elk voorbeeld onafhankelijk om training te stabiliseren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Layer normalization normalizes activations across the feature dimension for each training example, computing mean and variance per example. This stabilizes training in deep networks and is more suitable for sequential data than batch normalization.",
                  "es": "La normalización de capa normaliza activaciones a través de la dimensión de características para cada ejemplo de entrenamiento, calculando media y varianza por ejemplo. Esto estabiliza entrenamiento en redes profundas y es más adecuado para datos secuenciales que normalización por lote.",
                  "de": "Layer Normalization normalisiert Aktivierungen über die Feature-Dimension für jedes Trainingsbeispiel, berechnet Mittelwert und Varianz pro Beispiel. Dies stabilisiert Training in tiefen Netzwerken und ist geeigneter für sequentielle Daten als Batch Normalization.",
                  "nl": "Laagnormalisatie normaliseert activaties over de feature-dimensie voor elk trainingsvoorbeeld, berekent gemiddelde en variantie per voorbeeld. Dit stabiliseert training in diepe netwerken en is geschikter voor sequentiële data dan batch normalisatie."
        }
      },
      {
        question: {
                  "en": "What are residual connections (skip connections) in Transformers?",
                  "es": "¿Qué son las conexiones residuales (conexiones de salto) en Transformadores?",
                  "de": "Was sind Residualverbindungen (Skip Connections) in Transformern?",
                  "nl": "Wat zijn residuele verbindingen (skip connections) in Transformers?"
        },
        options: [
        {
                  "en": "Direct connections that add the input of a layer to its output, enabling gradient flow in deep networks",
                  "es": "Conexiones directas que añaden la entrada de una capa a su salida, permitiendo flujo de gradiente en redes profundas",
                  "de": "Direkte Verbindungen die die Eingabe einer Schicht zu ihrer Ausgabe addieren, ermöglichen Gradientenfluss in tiefen Netzwerken",
                  "nl": "Directe verbindingen die de invoer van een laag optellen bij de uitvoer, maken gradiëntflow mogelijk in diepe netwerken"
        },
        {
                  "en": "Connections between different models",
                  "es": "Conexiones entre diferentes modelos",
                  "de": "Verbindungen zwischen verschiedenen Modellen",
                  "nl": "Verbindingen tussen verschillende modellen"
        },
        {
                  "en": "Backup connections for redundancy",
                  "es": "Conexiones de respaldo para redundancia",
                  "de": "Backup-Verbindungen für Redundanz",
                  "nl": "Back-upverbindingen voor redundantie"
        },
        {
                  "en": "Connections that skip training iterations",
                  "es": "Conexiones que saltan iteraciones de entrenamiento",
                  "de": "Verbindungen die Trainingsiterationen überspringen",
                  "nl": "Verbindingen die trainingsiteraties overslaan"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Residual connections add the input directly to the output of a sublayer (e.g., attention or feedforward), creating the pattern output = sublayer(input) + input. This helps gradients flow through deep networks and makes training more stable.",
                  "es": "Las conexiones residuales añaden la entrada directamente a la salida de una subcapa (ej., atención o feedforward), creando el patrón salida = subcapa(entrada) + entrada. Esto ayuda a gradientes fluir a través de redes profundas y hace el entrenamiento más estable.",
                  "de": "Residualverbindungen addieren die Eingabe direkt zur Ausgabe einer Unterschicht (z.B. Aufmerksamkeit oder Feedforward), erstellen das Muster Ausgabe = Unterschicht(Eingabe) + Eingabe. Dies hilft Gradienten durch tiefe Netzwerke fließen und macht Training stabiler.",
                  "nl": "Residuele verbindingen voegen de invoer direct toe aan de uitvoer van een sublaag (bijv. aandacht of feedforward), creëren het patroon uitvoer = sublaag(invoer) + invoer. Dit helpt gradiënten door diepe netwerken te stromen en maakt training stabieler."
        }
      },
      {
        question: {
                  "en": "What is the difference between encoder-only, decoder-only, and encoder-decoder Transformers?",
                  "es": "¿Cuál es la diferencia entre Transformadores solo-codificador, solo-decodificador y codificador-decodificador?",
                  "de": "Was ist der Unterschied zwischen Encoder-only, Decoder-only und Encoder-Decoder Transformern?",
                  "nl": "Wat is het verschil tussen encoder-only, decoder-only en encoder-decoder Transformers?"
        },
        options: [
        {
                  "en": "Encoder-only (BERT) for understanding, decoder-only (GPT) for generation, encoder-decoder (T5) for seq2seq tasks",
                  "es": "Solo-codificador (BERT) para comprensión, solo-decodificador (GPT) para generación, codificador-decodificador (T5) para tareas seq2seq",
                  "de": "Encoder-only (BERT) für Verstehen, Decoder-only (GPT) für Generierung, Encoder-Decoder (T5) für seq2seq-Aufgaben",
                  "nl": "Encoder-only (BERT) voor begrip, decoder-only (GPT) voor generatie, encoder-decoder (T5) voor seq2seq taken"
        },
        {
                  "en": "Decoder-only models cannot generate text",
                  "es": "Modelos solo-decodificador no pueden generar texto",
                  "de": "Decoder-only Modelle können keinen Text generieren",
                  "nl": "Decoder-only modellen kunnen geen tekst genereren"
        },
        {
                  "en": "Only encoder-decoder can handle text",
                  "es": "Solo codificador-decodificador puede manejar texto",
                  "de": "Nur Encoder-Decoder kann Text handhaben",
                  "nl": "Alleen encoder-decoder kan tekst behandelen"
        },
        {
                  "en": "All three architectures are identical in function",
                  "es": "Las tres arquitecturas son idénticas en función",
                  "de": "Alle drei Architekturen sind identisch in der Funktion",
                  "nl": "Alle drie architecturen zijn identiek in functie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Encoder-only models (BERT) use bidirectional attention for understanding tasks. Decoder-only models (GPT) use causal (left-to-right) attention for generation. Encoder-decoder models (T5, BART) combine both for sequence-to-sequence tasks like translation.",
                  "es": "Modelos solo-codificador (BERT) usan atención bidireccional para tareas de comprensión. Modelos solo-decodificador (GPT) usan atención causal (izquierda-a-derecha) para generación. Modelos codificador-decodificador (T5, BART) combinan ambos para tareas secuencia-a-secuencia como traducción.",
                  "de": "Encoder-only Modelle (BERT) verwenden bidirektionale Aufmerksamkeit für Verstehensaufgaben. Decoder-only Modelle (GPT) verwenden kausale (Links-nach-rechts) Aufmerksamkeit für Generierung. Encoder-Decoder Modelle (T5, BART) kombinieren beide für Sequenz-zu-Sequenz-Aufgaben wie Übersetzung.",
                  "nl": "Encoder-only modellen (BERT) gebruiken bidirectionele aandacht voor begripstaken. Decoder-only modellen (GPT) gebruiken causale (links-naar-rechts) aandacht voor generatie. Encoder-decoder modellen (T5, BART) combineren beide voor sequentie-naar-sequentie taken zoals vertaling."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the [CLS] token in BERT?",
                  "es": "¿Cuál es el propósito del token [CLS] en BERT?",
                  "de": "Was ist der Zweck des [CLS]-Tokens in BERT?",
                  "nl": "Wat is het doel van het [CLS]-token in BERT?"
        },
        options: [
        {
                  "en": "A token used only during training",
                  "es": "Un token usado solo durante entrenamiento",
                  "de": "Ein Token das nur während des Trainings verwendet wird",
                  "nl": "Een token dat alleen tijdens training wordt gebruikt"
        },
        {
                  "en": "A delimiter between sentences",
                  "es": "Un delimitador entre oraciones",
                  "de": "Ein Trennzeichen zwischen Sätzen",
                  "nl": "Een scheidingsteken tussen zinnen"
        },
        {
                  "en": "A token that clears the model's memory",
                  "es": "Un token que borra la memoria del modelo",
                  "de": "Ein Token das den Speicher des Modells löscht",
                  "nl": "Een token dat het geheugen van het model wist"
        },
        {
                  "en": "A special token whose final hidden state represents the entire sequence for classification tasks",
                  "es": "Un token especial cuyo estado oculto final representa la secuencia entera para tareas de clasificación",
                  "de": "Ein spezielles Token dessen finaler versteckter Zustand die gesamte Sequenz für Klassifikationsaufgaben repräsentiert",
                  "nl": "Een speciaal token waarvan de finale verborgen toestand de hele sequentie vertegenwoordigt voor classificatietaken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "[CLS] (classification) is prepended to every input sequence in BERT. Its final hidden state aggregates information from the entire sequence through self-attention and is used as the sequence representation for classification tasks.",
                  "es": "[CLS] (clasificación) se antepone a cada secuencia de entrada en BERT. Su estado oculto final agrega información de toda la secuencia a través de auto-atención y se usa como representación de secuencia para tareas de clasificación.",
                  "de": "[CLS] (Klassifikation) wird jeder Eingabesequenz in BERT vorangestellt. Sein finaler versteckter Zustand aggregiert Informationen aus der gesamten Sequenz durch Selbstaufmerksamkeit und wird als Sequenzrepräsentation für Klassifikationsaufgaben verwendet.",
                  "nl": "[CLS] (classificatie) wordt voorafgegaan aan elke invoersequentie in BERT. De finale verborgen toestand aggregeert informatie uit de hele sequentie via zelf-aandacht en wordt gebruikt als sequentierepresentatie voor classificatietaken."
        }
      },
      {
        question: {
                  "en": "What is the [SEP] token in BERT?",
                  "es": "¿Qué es el token [SEP] en BERT?",
                  "de": "Was ist das [SEP]-Token in BERT?",
                  "nl": "Wat is het [SEP]-token in BERT?"
        },
        options: [
        {
                  "en": "A separator token that marks boundaries between different segments in multi-sentence inputs",
                  "es": "Un token separador que marca límites entre diferentes segmentos en entradas de múltiples oraciones",
                  "de": "Ein Trennzeichen-Token das Grenzen zwischen verschiedenen Segmenten in Mehrsatz-Eingaben markiert",
                  "nl": "Een scheidingstoken dat grenzen markeert tussen verschillende segmenten in multi-zin invoer"
        },
        {
                  "en": "A token that ends all sequences",
                  "es": "Un token que termina todas las secuencias",
                  "de": "Ein Token das alle Sequenzen beendet",
                  "nl": "Een token dat alle sequenties beëindigt"
        },
        {
                  "en": "A special punctuation marker",
                  "es": "Un marcador de puntuación especial",
                  "de": "Ein spezieller Interpunktionsmarker",
                  "nl": "Een speciale interpunctiemarker"
        },
        {
                  "en": "A token for sentence embedding",
                  "es": "Un token para embedding de oraciones",
                  "de": "Ein Token für Satz-Embedding",
                  "nl": "Een token voor zin-embedding"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "[SEP] separates different text segments, like question-answer pairs or premise-hypothesis pairs. Combined with segment embeddings, it helps BERT distinguish between multiple sentences in tasks like question answering and natural language inference.",
                  "es": "[SEP] separa diferentes segmentos de texto, como pares pregunta-respuesta o pares premisa-hipótesis. Combinado con embeddings de segmento, ayuda a BERT distinguir entre múltiples oraciones en tareas como respuesta a preguntas e inferencia de lenguaje natural.",
                  "de": "[SEP] trennt verschiedene Textsegmente, wie Frage-Antwort-Paare oder Prämisse-Hypothese-Paare. Kombiniert mit Segment-Embeddings hilft es BERT zwischen mehreren Sätzen in Aufgaben wie Fragebeantwortung und natürlicher Sprachinferenz zu unterscheiden.",
                  "nl": "[SEP] scheidt verschillende tekstsegmenten, zoals vraag-antwoord paren of premise-hypothese paren. Gecombineerd met segment-embeddings helpt het BERT onderscheid te maken tussen meerdere zinnen in taken zoals vraagbeantwoording en natuurlijke taal inferentie."
        }
      },
      {
        question: {
                  "en": "What is next sentence prediction (NSP) in BERT pre-training?",
                  "es": "¿Qué es la predicción de siguiente oración (NSP) en pre-entrenamiento de BERT?",
                  "de": "Was ist Next Sentence Prediction (NSP) im BERT-Vortraining?",
                  "nl": "Wat is next sentence prediction (NSP) in BERT pre-training?"
        },
        options: [
        {
                  "en": "Generating the next sentence automatically",
                  "es": "Generar la siguiente oración automáticamente",
                  "de": "Den nächsten Satz automatisch generieren",
                  "nl": "De volgende zin automatisch genereren"
        },
        {
                  "en": "Predicting the next word in a sentence",
                  "es": "Predecir la siguiente palabra en una oración",
                  "de": "Das nächste Wort in einem Satz vorhersagen",
                  "nl": "Het volgende woord in een zin voorspellen"
        },
        {
                  "en": "A pre-training task where the model predicts if two sentences are consecutive in the original text",
                  "es": "Una tarea de pre-entrenamiento donde el modelo predice si dos oraciones son consecutivas en el texto original",
                  "de": "Eine Vortrainingsaufgabe wo das Modell vorhersagt ob zwei Sätze im Originaltext aufeinanderfolgen",
                  "nl": "Een pre-trainingstaak waarbij het model voorspelt of twee zinnen opeenvolgend zijn in de originele tekst"
        },
        {
                  "en": "Ranking sentences by importance",
                  "es": "Clasificar oraciones por importancia",
                  "de": "Sätze nach Wichtigkeit ordnen",
                  "nl": "Zinnen rangschikken op belangrijkheid"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "NSP is a binary classification task where BERT learns to determine if sentence B follows sentence A in the original document. This helps BERT understand sentence relationships, useful for tasks like question answering and natural language inference.",
                  "es": "NSP es una tarea de clasificación binaria donde BERT aprende a determinar si la oración B sigue a la oración A en el documento original. Esto ayuda a BERT entender relaciones entre oraciones, útil para tareas como respuesta a preguntas e inferencia de lenguaje natural.",
                  "de": "NSP ist eine binäre Klassifikationsaufgabe wo BERT lernt zu bestimmen ob Satz B auf Satz A im Originaldokument folgt. Dies hilft BERT Satzbeziehungen zu verstehen, nützlich für Aufgaben wie Fragebeantwortung und natürliche Sprachinferenz.",
                  "nl": "NSP is een binaire classificatietaak waarbij BERT leert te bepalen of zin B volgt op zin A in het originele document. Dit helpt BERT zinrelaties te begrijpen, nuttig voor taken zoals vraagbeantwoording en natuurlijke taal inferentie."
        }
      },
      {
        question: {
                  "en": "What is masked language modeling (MLM)?",
                  "es": "¿Qué es el modelado de lenguaje enmascarado (MLM)?",
                  "de": "Was ist Masked Language Modeling (MLM)?",
                  "nl": "Wat is masked language modeling (MLM)?"
        },
        options: [
        {
                  "en": "Removing rare words from training",
                  "es": "Eliminar palabras raras del entrenamiento",
                  "de": "Seltene Wörter aus dem Training entfernen",
                  "nl": "Zeldzame woorden verwijderen uit training"
        },
        {
                  "en": "Predicting only the last token",
                  "es": "Predecir solo el último token",
                  "de": "Nur das letzte Token vorhersagen",
                  "nl": "Alleen het laatste token voorspellen"
        },
        {
                  "en": "Hiding model parameters during training",
                  "es": "Ocultar parámetros del modelo durante entrenamiento",
                  "de": "Modellparameter während des Trainings verbergen",
                  "nl": "Modelparameters verbergen tijdens training"
        },
        {
                  "en": "Randomly masking tokens in input and training the model to predict the masked tokens using bidirectional context",
                  "es": "Enmascarar aleatoriamente tokens en entrada y entrenar el modelo para predecir tokens enmascarados usando contexto bidireccional",
                  "de": "Zufällig Tokens in Eingabe maskieren und das Modell trainieren um maskierte Tokens mit bidirektionalem Kontext vorherzusagen",
                  "nl": "Willekeurig tokens in invoer maskeren en het model trainen om de gemaskeerde tokens te voorspellen met bidirectionele context"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "MLM is BERT's core pre-training objective: randomly mask 15% of tokens and train the model to predict them using context from both directions. This enables learning rich bidirectional representations of language.",
                  "es": "MLM es el objetivo central de pre-entrenamiento de BERT: enmascarar aleatoriamente 15% de tokens y entrenar el modelo para predecirlos usando contexto de ambas direcciones. Esto permite aprender representaciones bidireccionales ricas del lenguaje.",
                  "de": "MLM ist BERTs Kern-Vortrainingsziel: 15% der Tokens zufällig maskieren und das Modell trainieren sie mit Kontext aus beiden Richtungen vorherzusagen. Dies ermöglicht das Lernen reichhaltiger bidirektionaler Sprachrepräsentationen.",
                  "nl": "MLM is BERT's kern pre-training doelstelling: willekeurig 15% van tokens maskeren en het model trainen om ze te voorspellen met context uit beide richtingen. Dit maakt het leren van rijke bidirectionele taalrepresentaties mogelijk."
        }
      },
      {
        question: {
                  "en": "What is causal language modeling?",
                  "es": "¿Qué es el modelado de lenguaje causal?",
                  "de": "Was ist kausale Sprachmodellierung?",
                  "nl": "Wat is causale taalmodellering?"
        },
        options: [
        {
                  "en": "Training models to predict the next token given only previous tokens (left-to-right), used in GPT",
                  "es": "Entrenar modelos para predecir el siguiente token dados solo tokens anteriores (izquierda-a-derecha), usado en GPT",
                  "de": "Modelle trainieren um das nächste Token bei nur vorherigen Tokens (Links-nach-rechts) vorherzusagen, verwendet in GPT",
                  "nl": "Modellen trainen om het volgende token te voorspellen gegeven alleen eerdere tokens (links-naar-rechts), gebruikt in GPT"
        },
        {
                  "en": "Training with causal inference methods",
                  "es": "Entrenar con métodos de inferencia causal",
                  "de": "Mit kausalen Inferenzmethoden trainieren",
                  "nl": "Trainen met causale inferentiemethoden"
        },
        {
                  "en": "Predicting tokens bidirectionally",
                  "es": "Predecir tokens bidireccionalmente",
                  "de": "Tokens bidirektional vorhersagen",
                  "nl": "Tokens bidirectioneel voorspellen"
        },
        {
                  "en": "Modeling cause-effect relationships in text",
                  "es": "Modelar relaciones causa-efecto en texto",
                  "de": "Ursache-Wirkungs-Beziehungen in Text modellieren",
                  "nl": "Oorzaak-gevolg relaties in tekst modelleren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Causal (autoregressive) language modeling predicts each token based only on preceding context, using masked self-attention to prevent looking ahead. This is ideal for text generation as it naturally produces sequences left-to-right.",
                  "es": "El modelado de lenguaje causal (autoregresivo) predice cada token basado solo en contexto precedente, usando auto-atención enmascarada para prevenir mirar adelante. Esto es ideal para generación de texto ya que produce secuencias naturalmente de izquierda-a-derecha.",
                  "de": "Kausale (autoregressive) Sprachmodellierung sagt jedes Token nur basierend auf vorausgehendem Kontext vorher, verwendet maskierte Selbstaufmerksamkeit um Vorausschauen zu verhindern. Dies ist ideal für Textgenerierung da es natürlich Sequenzen Links-nach-rechts produziert.",
                  "nl": "Causale (autoregressieve) taalmodellering voorspelt elk token alleen gebaseerd op voorafgaande context, gebruikt gemaskeerde zelf-aandacht om vooruitkijken te voorkomen. Dit is ideaal voor tekstgeneratie omdat het natuurlijk sequenties links-naar-rechts produceert."
        }
      },
      {
        question: {
                  "en": "What is tokenization in modern Transformer models?",
                  "es": "¿Qué es la tokenización en modelos Transformer modernos?",
                  "de": "Was ist Tokenisierung in modernen Transformer-Modellen?",
                  "nl": "Wat is tokenisatie in moderne Transformer-modellen?"
        },
        options: [
        {
                  "en": "Converting text to numbers",
                  "es": "Convertir texto a números",
                  "de": "Text in Zahlen umwandeln",
                  "nl": "Tekst omzetten naar getallen"
        },
        {
                  "en": "Creating tokens for each character",
                  "es": "Crear tokens para cada carácter",
                  "de": "Tokens für jedes Zeichen erstellen",
                  "nl": "Tokens maken voor elk karakter"
        },
        {
                  "en": "Splitting text only at whitespace",
                  "es": "Dividir texto solo en espacios en blanco",
                  "de": "Text nur bei Leerzeichen aufteilen",
                  "nl": "Tekst alleen bij witruimte splitsen"
        },
        {
                  "en": "Breaking text into subword units using algorithms like BPE, WordPiece, or SentencePiece",
                  "es": "Dividir texto en unidades de subpalabras usando algoritmos como BPE, WordPiece, o SentencePiece",
                  "de": "Text in Subwort-Einheiten aufteilen mit Algorithmen wie BPE, WordPiece oder SentencePiece",
                  "nl": "Tekst opsplitsen in subwoord-eenheden met algoritmen zoals BPE, WordPiece, of SentencePiece"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Modern tokenization uses subword algorithms that balance vocabulary size with representation quality. This handles rare words, morphological variations, and out-of-vocabulary terms better than word-level or character-level tokenization.",
                  "es": "La tokenización moderna usa algoritmos de subpalabras que balancean tamaño de vocabulario con calidad de representación. Esto maneja mejor palabras raras, variaciones morfológicas, y términos fuera de vocabulario que tokenización a nivel de palabra o carácter.",
                  "de": "Moderne Tokenisierung verwendet Subwort-Algorithmen die Vokabulargröße mit Repräsentationsqualität ausbalancieren. Dies handhabt seltene Wörter, morphologische Variationen und Out-of-Vocabulary-Terme besser als Wort-Level oder Zeichen-Level Tokenisierung.",
                  "nl": "Moderne tokenisatie gebruikt subwoord-algoritmen die vocabulairegrootte balanceren met representatiekwaliteit. Dit behandelt zeldzame woorden, morfologische variaties en out-of-vocabulary termen beter dan woord-niveau of karakter-niveau tokenisatie."
        }
      },
      {
        question: {
                  "en": "What is the purpose of segment embeddings in BERT?",
                  "es": "¿Cuál es el propósito de los embeddings de segmento en BERT?",
                  "de": "Was ist der Zweck von Segment-Embeddings in BERT?",
                  "nl": "Wat is het doel van segment-embeddings in BERT?"
        },
        options: [
        {
                  "en": "To distinguish between different sentences or text segments in multi-segment inputs",
                  "es": "Distinguir entre diferentes oraciones o segmentos de texto en entradas de múltiples segmentos",
                  "de": "Um zwischen verschiedenen Sätzen oder Textsegmenten in Mehrsegment-Eingaben zu unterscheiden",
                  "nl": "Om onderscheid te maken tussen verschillende zinnen of tekstsegmenten in multi-segment invoer"
        },
        {
                  "en": "To compress embeddings",
                  "es": "Comprimir embeddings",
                  "de": "Embeddings komprimieren",
                  "nl": "Embeddings comprimeren"
        },
        {
                  "en": "To segment long texts into chunks",
                  "es": "Segmentar textos largos en fragmentos",
                  "de": "Lange Texte in Chunks segmentieren",
                  "nl": "Lange teksten segmenteren in chunks"
        },
        {
                  "en": "To create hierarchical representations",
                  "es": "Crear representaciones jerárquicas",
                  "de": "Hierarchische Repräsentationen erstellen",
                  "nl": "Hiërarchische representaties maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Segment embeddings are learned vectors added to token embeddings to indicate which segment/sentence a token belongs to (segment A or B). This helps BERT handle sentence pairs in tasks like question answering and NLI.",
                  "es": "Los embeddings de segmento son vectores aprendidos añadidos a embeddings de tokens para indicar a qué segmento/oración pertenece un token (segmento A o B). Esto ayuda a BERT manejar pares de oraciones en tareas como respuesta a preguntas y NLI.",
                  "de": "Segment-Embeddings sind gelernte Vektoren die zu Token-Embeddings hinzugefügt werden um anzuzeigen zu welchem Segment/Satz ein Token gehört (Segment A oder B). Dies hilft BERT Satzpaare in Aufgaben wie Fragebeantwortung und NLI zu handhaben.",
                  "nl": "Segment-embeddings zijn geleerde vectoren toegevoegd aan token-embeddings om aan te geven tot welk segment/zin een token behoort (segment A of B). Dit helpt BERT zinsparen te behandelen in taken zoals vraagbeantwoording en NLI."
        }
      },
      {
        question: {
                  "en": "What is the difference between extractive and abstractive summarization?",
                  "es": "¿Cuál es la diferencia entre resumización extractiva y abstractiva?",
                  "de": "Was ist der Unterschied zwischen extraktiver und abstraktiver Zusammenfassung?",
                  "nl": "Wat is het verschil tussen extractieve en abstractieve samenvatting?"
        },
        options: [
        {
                  "en": "Extractive selects sentences from the original text, abstractive generates new text that captures the meaning",
                  "es": "Extractiva selecciona oraciones del texto original, abstractiva genera nuevo texto que captura el significado",
                  "de": "Extraktiv wählt Sätze aus dem Originaltext aus, abstraktiv generiert neuen Text der die Bedeutung erfasst",
                  "nl": "Extractief selecteert zinnen uit de originele tekst, abstractief genereert nieuwe tekst die de betekenis vastlegt"
        },
        {
                  "en": "Extractive requires more computational resources",
                  "es": "Extractiva requiere más recursos computacionales",
                  "de": "Extraktiv benötigt mehr Rechenressourcen",
                  "nl": "Extractief vereist meer computationele bronnen"
        },
        {
                  "en": "Extractive is always shorter than abstractive",
                  "es": "Extractiva es siempre más corta que abstractiva",
                  "de": "Extraktiv ist immer kürzer als abstraktiv",
                  "nl": "Extractief is altijd korter dan abstractief"
        },
        {
                  "en": "Abstractive only works with numerical data",
                  "es": "Abstractiva solo funciona con datos numéricos",
                  "de": "Abstraktiv funktioniert nur mit numerischen Daten",
                  "nl": "Abstractief werkt alleen met numerieke gegevens"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Extractive summarization identifies and extracts important sentences/phrases from the source. Abstractive summarization understands the content and generates new text, potentially using words not in the original, like human-written summaries.",
                  "es": "La resumización extractiva identifica y extrae oraciones/frases importantes de la fuente. La resumización abstractiva entiende el contenido y genera nuevo texto, potencialmente usando palabras no en el original, como resúmenes escritos por humanos.",
                  "de": "Extraktive Zusammenfassung identifiziert und extrahiert wichtige Sätze/Phrasen aus der Quelle. Abstraktive Zusammenfassung versteht den Inhalt und generiert neuen Text, potenziell mit Wörtern nicht im Original, wie von Menschen geschriebene Zusammenfassungen.",
                  "nl": "Extractieve samenvatting identificeert en extraheert belangrijke zinnen/zinsdelen uit de bron. Abstractieve samenvatting begrijpt de inhoud en genereert nieuwe tekst, mogelijk met woorden niet in het origineel, zoals door mensen geschreven samenvattingen."
        }
      },
      {
        question: {
                  "en": "What is the vanishing gradient problem and how do Transformers address it?",
                  "es": "¿Qué es el problema del gradiente que desaparece y cómo lo abordan los Transformadores?",
                  "de": "Was ist das Problem verschwindender Gradienten und wie adressieren Transformer es?",
                  "nl": "Wat is het probleem van verdwijnende gradiënten en hoe pakken Transformers dit aan?"
        },
        options: [
        {
                  "en": "Gradients become very small in deep networks; Transformers use residual connections and layer normalization to maintain gradient flow",
                  "es": "Los gradientes se vuelven muy pequeños en redes profundas; Transformadores usan conexiones residuales y normalización de capa para mantener flujo de gradiente",
                  "de": "Gradienten werden sehr klein in tiefen Netzwerken; Transformer verwenden Residualverbindungen und Layer Normalization um Gradientenfluss zu erhalten",
                  "nl": "Gradiënten worden zeer klein in diepe netwerken; Transformers gebruiken residuele verbindingen en laagnormalisatie om gradiëntflow te behouden"
        },
        {
                  "en": "Only RNNs have this problem",
                  "es": "Solo las RNN tienen este problema",
                  "de": "Nur RNNs haben dieses Problem",
                  "nl": "Alleen RNN's hebben dit probleem"
        },
        {
                  "en": "Gradients disappear completely; Transformers solve this with more data",
                  "es": "Los gradientes desaparecen completamente; Transformadores lo resuelven con más datos",
                  "de": "Gradienten verschwinden vollständig; Transformer lösen dies mit mehr Daten",
                  "nl": "Gradiënten verdwijnen volledig; Transformers lossen dit op met meer data"
        },
        {
                  "en": "Transformers are immune to gradient problems",
                  "es": "Transformadores son inmunes a problemas de gradiente",
                  "de": "Transformer sind immun gegen Gradientenprobleme",
                  "nl": "Transformers zijn immuun voor gradiëntproblemen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "In deep networks, gradients can become exponentially small during backpropagation, making training difficult. Transformers mitigate this with residual connections (providing direct gradient paths) and layer normalization (stabilizing activations).",
                  "es": "En redes profundas, los gradientes pueden volverse exponencialmente pequeños durante retropropagación, dificultando entrenamiento. Transformadores mitigan esto con conexiones residuales (proporcionando rutas de gradiente directas) y normalización de capa (estabilizando activaciones).",
                  "de": "In tiefen Netzwerken können Gradienten während Backpropagation exponentiell klein werden, was Training erschwert. Transformer mildern dies mit Residualverbindungen (direkte Gradientenpfade bereitstellend) und Layer Normalization (Aktivierungen stabilisierend).",
                  "nl": "In diepe netwerken kunnen gradiënten exponentieel klein worden tijdens backpropagation, wat training moeilijk maakt. Transformers verzachten dit met residuele verbindingen (directe gradiëntpaden biedend) en laagnormalisatie (activaties stabiliserend)."
        }
      },
      {
        question: {
                  "en": "What is temperature in language model sampling?",
                  "es": "¿Qué es la temperatura en muestreo de modelos de lenguaje?",
                  "de": "Was ist Temperatur beim Sampling von Sprachmodellen?",
                  "nl": "Wat is temperatuur in taalmodel sampling?"
        },
        options: [
        {
                  "en": "Model size optimization",
                  "es": "Optimización de tamaño del modelo",
                  "de": "Modellgrößenoptimierung",
                  "nl": "Modelgrootte-optimalisatie"
        },
        {
                  "en": "Training speed adjustment",
                  "es": "Ajuste de velocidad de entrenamiento",
                  "de": "Trainingsgeschwindigkeitsanpassung",
                  "nl": "Trainingssnelheidsaanpassing"
        },
        {
                  "en": "A parameter that controls randomness in generation by scaling logits before softmax",
                  "es": "Un parámetro que controla aleatoriedad en generación escalando logits antes de softmax",
                  "de": "Ein Parameter der Zufälligkeit in Generierung steuert durch Skalierung von Logits vor Softmax",
                  "nl": "Een parameter die willekeur in generatie regelt door logits te schalen vóór softmax"
        },
        {
                  "en": "The computational heat generated during inference",
                  "es": "El calor computacional generado durante inferencia",
                  "de": "Die rechnerische Wärme die während Inferenz erzeugt wird",
                  "nl": "De computationele warmte gegenereerd tijdens inferentie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Temperature (T) divides logits before softmax: higher T (>1) makes output more random/creative, lower T (<1) makes it more deterministic/focused. T=1 is neutral, T→0 approaches greedy sampling.",
                  "es": "La temperatura (T) divide logits antes de softmax: T más alta (>1) hace salida más aleatoria/creativa, T más baja (<1) la hace más determinista/enfocada. T=1 es neutral, T→0 se aproxima a muestreo codicioso.",
                  "de": "Temperatur (T) teilt Logits vor Softmax: höhere T (>1) macht Ausgabe zufälliger/kreativer, niedrigere T (<1) macht sie deterministischer/fokussierter. T=1 ist neutral, T→0 nähert sich gierigem Sampling.",
                  "nl": "Temperatuur (T) deelt logits vóór softmax: hogere T (>1) maakt uitvoer willekeuriger/creatiever, lagere T (<1) maakt het deterministischer/gefocuster. T=1 is neutraal, T→0 benadert greedy sampling."
        }
      },
      {
        question: {
                  "en": "What is top-k sampling in text generation?",
                  "es": "¿Qué es el muestreo top-k en generación de texto?",
                  "de": "Was ist Top-k Sampling in Textgenerierung?",
                  "nl": "Wat is top-k sampling in tekstgeneratie?"
        },
        options: [
        {
                  "en": "Using k different models",
                  "es": "Usar k modelos diferentes",
                  "de": "K verschiedene Modelle verwenden",
                  "nl": "K verschillende modellen gebruiken"
        },
        {
                  "en": "Sampling from only the k most probable next tokens at each step",
                  "es": "Muestrear solo de los k tokens siguientes más probables en cada paso",
                  "de": "Nur aus den k wahrscheinlichsten nächsten Tokens bei jedem Schritt samplen",
                  "nl": "Alleen samplen uit de k meest waarschijnlijke volgende tokens bij elke stap"
        },
        {
                  "en": "Selecting the top k tokens deterministically",
                  "es": "Seleccionar los top k tokens determinísticamente",
                  "de": "Die Top-k Tokens deterministisch auswählen",
                  "nl": "De top k tokens deterministisch selecteren"
        },
        {
                  "en": "Generating k alternative outputs",
                  "es": "Generar k salidas alternativas",
                  "de": "K alternative Ausgaben generieren",
                  "nl": "K alternatieve outputs genereren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Top-k sampling restricts sampling to the k highest probability tokens, filtering out unlikely options. This balances diversity and quality, preventing the model from selecting very improbable tokens while maintaining variability.",
                  "es": "El muestreo top-k restringe muestreo a los k tokens de mayor probabilidad, filtrando opciones improbables. Esto balancea diversidad y calidad, previniendo que el modelo seleccione tokens muy improbables mientras mantiene variabilidad.",
                  "de": "Top-k Sampling beschränkt Sampling auf die k höchstwahrscheinlichen Tokens, filtert unwahrscheinliche Optionen aus. Dies balanciert Diversität und Qualität, verhindert dass das Modell sehr unwahrscheinliche Tokens auswählt während Variabilität erhalten bleibt.",
                  "nl": "Top-k sampling beperkt sampling tot de k hoogst waarschijnlijke tokens, filtert onwaarschijnlijke opties uit. Dit balanceert diversiteit en kwaliteit, voorkomt dat het model zeer onwaarschijnlijke tokens selecteert terwijl variabiliteit behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is nucleus (top-p) sampling?",
                  "es": "¿Qué es el muestreo de núcleo (top-p)?",
                  "de": "Was ist Nucleus (Top-p) Sampling?",
                  "nl": "Wat is nucleus (top-p) sampling?"
        },
        options: [
        {
                  "en": "Selecting tokens from the center of the distribution",
                  "es": "Seleccionar tokens del centro de la distribución",
                  "de": "Tokens aus der Mitte der Verteilung auswählen",
                  "nl": "Tokens selecteren uit het midden van de verdeling"
        },
        {
                  "en": "Using only p% of the vocabulary",
                  "es": "Usar solo p% del vocabulario",
                  "de": "Nur p% des Vokabulars verwenden",
                  "nl": "Alleen p% van de vocabulaire gebruiken"
        },
        {
                  "en": "Sampling with p probability",
                  "es": "Muestrear con probabilidad p",
                  "de": "Mit Wahrscheinlichkeit p samplen",
                  "nl": "Samplen met waarschijnlijkheid p"
        },
        {
                  "en": "Sampling from the smallest set of tokens whose cumulative probability exceeds threshold p",
                  "es": "Muestrear del conjunto más pequeño de tokens cuya probabilidad acumulativa excede umbral p",
                  "de": "Aus der kleinsten Menge von Tokens samplen deren kumulative Wahrscheinlichkeit Schwellenwert p überschreitet",
                  "nl": "Samplen uit de kleinste set tokens waarvan de cumulatieve waarschijnlijkheid drempel p overschrijdt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Nucleus sampling dynamically adjusts the candidate set size based on probability distribution. It selects the smallest set of top tokens whose cumulative probability ≥ p (e.g., 0.9), adapting to distribution sharpness better than fixed top-k.",
                  "es": "El muestreo de núcleo ajusta dinámicamente el tamaño del conjunto candidato basado en distribución de probabilidad. Selecciona el conjunto más pequeño de tokens top cuya probabilidad acumulativa ≥ p (ej., 0.9), adaptándose a nitidez de distribución mejor que top-k fijo.",
                  "de": "Nucleus Sampling passt die Kandidatenmengengröße dynamisch basierend auf Wahrscheinlichkeitsverteilung an. Es wählt die kleinste Menge von Top-Tokens deren kumulative Wahrscheinlichkeit ≥ p (z.B. 0.9), passt sich an Verteilungsschärfe besser an als festes Top-k.",
                  "nl": "Nucleus sampling past de kandidatensetgrootte dynamisch aan op basis van waarschijnlijkheidsverdeling. Het selecteert de kleinste set van top tokens waarvan de cumulatieve waarschijnlijkheid ≥ p (bijv. 0.9), past zich aan aan verdeling scherpte beter dan vast top-k."
        }
      },
      {
        question: {
                  "en": "What is instruction tuning (instruction fine-tuning)?",
                  "es": "¿Qué es el ajuste de instrucciones (ajuste fino de instrucciones)?",
                  "de": "Was ist Instruction Tuning (Instruktions-Fine-Tuning)?",
                  "nl": "Wat is instruction tuning (instructie fine-tuning)?"
        },
        options: [
        {
                  "en": "Teaching models to follow programming instructions",
                  "es": "Enseñar a modelos a seguir instrucciones de programación",
                  "de": "Modelle lehren Programmierbefehlen zu folgen",
                  "nl": "Modellen leren programmeerinstructies te volgen"
        },
        {
                  "en": "Creating user manuals for models",
                  "es": "Crear manuales de usuario para modelos",
                  "de": "Benutzerhandbücher für Modelle erstellen",
                  "nl": "Gebruikershandleidingen maken voor modellen"
        },
        {
                  "en": "Fine-tuning language models on diverse tasks formatted as natural language instructions to improve zero-shot generalization",
                  "es": "Ajustar fino modelos de lenguaje en tareas diversas formateadas como instrucciones de lenguaje natural para mejorar generalización de cero ejemplos",
                  "de": "Sprachmodelle auf vielfältigen Aufgaben formatiert als natürlichsprachliche Instruktionen feinabstimmen um Zero-Shot-Generalisierung zu verbessern",
                  "nl": "Taalmodellen fine-tunen op diverse taken geformatteerd als natuurlijke taalinstructies om zero-shot generalisatie te verbeteren"
        },
        {
                  "en": "Optimizing instruction sets for CPUs",
                  "es": "Optimizar conjuntos de instrucciones para CPUs",
                  "de": "Instruktionssätze für CPUs optimieren",
                  "nl": "Instructiesets optimaliseren voor CPU's"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Instruction tuning trains models on many tasks phrased as instructions (e.g., 'Translate to French:', 'Summarize:'). This teaches models to follow instructions generally, enabling better zero-shot performance on new tasks.",
                  "es": "El ajuste de instrucciones entrena modelos en muchas tareas formuladas como instrucciones (ej., 'Traducir al francés:', 'Resumir:'). Esto enseña a modelos a seguir instrucciones generalmente, permitiendo mejor rendimiento de cero ejemplos en nuevas tareas.",
                  "de": "Instruction Tuning trainiert Modelle auf vielen Aufgaben formuliert als Instruktionen (z.B. 'Ins Französische übersetzen:', 'Zusammenfassen:'). Dies lehrt Modelle Instruktionen allgemein zu folgen, ermöglicht bessere Zero-Shot-Leistung bei neuen Aufgaben.",
                  "nl": "Instruction tuning traint modellen op veel taken geformuleerd als instructies (bijv. 'Vertaal naar Frans:', 'Vat samen:'). Dit leert modellen instructies algemeen te volgen, maakt betere zero-shot prestaties mogelijk bij nieuwe taken."
        }
      },
      {
        question: {
                  "en": "What is strategy in games?",
                  "es": "What is strategy in games?",
                  "de": "What is strategy in games?",
                  "nl": "What is strategy in games?"
        },
        options: [
        {
                  "en": "Random moves",
                  "es": "Random moves",
                  "de": "Random moves",
                  "nl": "Random moves"
        },
        {
                  "en": "Planning to achieve objectives",
                  "es": "Planning to achieve objectives",
                  "de": "Planning to achieve objectives",
                  "nl": "Planning to achieve objectives"
        },
        {
                  "en": "No planning",
                  "es": "No planning",
                  "de": "No planning",
                  "nl": "No planning"
        },
        {
                  "en": "Luck only",
                  "es": "Luck only",
                  "de": "Luck only",
                  "nl": "Luck only"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Strategy involves planning and decision-making to achieve game objectives.",
                  "es": "Strategy involves planning and decision-making to achieve game objectives.",
                  "de": "Strategy involves planning and decision-making to achieve game objectives.",
                  "nl": "Strategy involves planning and decision-making to achieve game objectives."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  }
})();