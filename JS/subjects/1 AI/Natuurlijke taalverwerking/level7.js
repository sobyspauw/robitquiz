// Natural Language Processing Quiz - Level 7: Deep NLP
(function() {
  const level7 = {
    name: {
      en: "Advanced NLP Applications & Attention Mechanisms",
      es: "Aplicaciones Avanzadas de PLN y Mecanismos de Atención",
      de: "Erweiterte NLP-Anwendungen & Aufmerksamkeitsmechanismen",
      nl: "Geavanceerde NLP-toepassingen & Aandachtmechanismen"
    },
    questions: [
      {
        question: {
          en: "What is the key innovation of the Transformer architecture that replaced RNNs in many NLP tasks?",
          es: "¿Cuál es la innovación clave de la arquitectura Transformer que reemplazó a las RNN en muchas tareas de PLN?",
          de: "Was ist die Schlüsselinnovation der Transformer-Architektur die RNNs in vielen NLP-Aufgaben ersetzte?",
          nl: "Wat is de sleutelinnovatie van de Transformer-architectuur die RNN's verving in veel NLP-taken?"
        },
        options: [
          { en: "Self-attention mechanism that processes all tokens in parallel rather than sequentially", es: "Mecanismo de auto-atención que procesa todos los tokens en paralelo en lugar de secuencialmente", de: "Selbstaufmerksamkeitsmechanismus der alle Tokens parallel statt sequenziell verarbeitet", nl: "Zelf-aandachtsmechanisme dat alle tokens parallel verwerkt in plaats van sequentieel" },
          { en: "Faster training speed compared to feedforward networks", es: "Velocidad de entrenamiento más rápida comparada con redes feedforward", de: "Schnellere Trainingsgeschwindigkeit im Vergleich zu Feedforward-Netzwerken", nl: "Snellere trainingssnelheid vergeleken met feedforward-netwerken" },
          { en: "Ability to work only with fixed-length sequences", es: "Capacidad de trabajar solo con secuencias de longitud fija", de: "Fähigkeit nur mit Sequenzen fester Länge zu arbeiten", nl: "Mogelijkheid om alleen met sequenties van vaste lengte te werken" },
          { en: "Reduced memory requirements during training", es: "Menores requisitos de memoria durante el entrenamiento", de: "Reduzierte Speicheranforderungen während des Trainings", nl: "Verminderde geheugenvereisten tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "The Transformer's self-attention mechanism allows it to process all positions in a sequence simultaneously, unlike RNNs which process sequentially. This parallelization leads to faster training and better capture of long-range dependencies. Self-attention computes relationships between all pairs of positions, allowing each token to attend to any other token in the sequence.",
          es: "El mecanismo de auto-atención del Transformer le permite procesar todas las posiciones en una secuencia simultáneamente, a diferencia de las RNN que procesan secuencialmente. Esta paralelización lleva a un entrenamiento más rápido y mejor captura de dependencias de largo alcance. La auto-atención calcula relaciones entre todos los pares de posiciones, permitiendo que cada token atienda a cualquier otro token en la secuencia.",
          de: "Der Selbstaufmerksamkeitsmechanismus des Transformers ermöglicht es ihm alle Positionen in einer Sequenz gleichzeitig zu verarbeiten, anders als RNNs die sequenziell verarbeiten. Diese Parallelisierung führt zu schnellerem Training und besserer Erfassung langreichweitiger Abhängigkeiten. Selbstaufmerksamkeit berechnet Beziehungen zwischen allen Positionspaaren und ermöglicht jedem Token auf jeden anderen Token in der Sequenz zu achten.",
          nl: "Het zelf-aandachtsmechanisme van de Transformer stelt het in staat om alle posities in een sequentie tegelijkertijd te verwerken, in tegenstelling tot RNN's die sequentieel verwerken. Deze parallellisatie leidt tot snellere training en betere vastlegging van langetermijnafhankelijkheden. Zelf-aandacht berekent relaties tussen alle paren van posities, waardoor elk token kan letten op elk ander token in de sequentie."
        }
      },
      {
        question: {
          en: "What is BERT (Bidirectional Encoder Representations from Transformers) and how does it differ from traditional language models?",
          es: "¿Qué es BERT (Representaciones de Codificador Bidireccional de Transformadores) y cómo difiere de los modelos de lenguaje tradicionales?",
          de: "Was ist BERT (Bidirectional Encoder Representations from Transformers) und wie unterscheidet es sich von traditionellen Sprachmodellen?",
          nl: "Wat is BERT (Bidirectional Encoder Representations from Transformers) en hoe verschilt het van traditionele taalmodellen?"
        },
        options: [
          { en: "BERT is trained bidirectionally using masked language modeling, allowing it to use context from both directions", es: "BERT se entrena bidireccionalmente usando modelado de lenguaje enmascarado, permitiéndole usar contexto de ambas direcciones", de: "BERT wird bidirektional mit maskierter Sprachmodellierung trainiert, was es ihm ermöglicht Kontext aus beiden Richtungen zu nutzen", nl: "BERT wordt bidirectioneel getraind met gemaskeerde taalmodellering, waardoor het context uit beide richtingen kan gebruiken" },
          { en: "BERT only processes text from left to right", es: "BERT solo procesa texto de izquierda a derecha", de: "BERT verarbeitet Text nur von links nach rechts", nl: "BERT verwerkt alleen tekst van links naar rechts" },
          { en: "BERT is designed specifically for machine translation", es: "BERT está diseñado específicamente para traducción automática", de: "BERT ist speziell für maschinelle Übersetzung entwickelt", nl: "BERT is specifiek ontworpen voor machinevertaling" },
          { en: "BERT cannot be fine-tuned for downstream tasks", es: "BERT no puede ser ajustado para tareas posteriores", de: "BERT kann nicht für nachgelagerte Aufgaben feinabgestimmt werden", nl: "BERT kan niet worden aangepast voor downstream-taken" }
        ],
        correct: 0,
        explanation: {
          en: "BERT revolutionized NLP by training bidirectionally through masked language modeling, where random tokens are masked and the model learns to predict them using context from both left and right. This differs from traditional autoregressive models that only use left-to-right context. BERT's bidirectional training creates rich contextualized representations that can be fine-tuned for various downstream tasks.",
          es: "BERT revolucionó el PLN al entrenar bidireccionalmente a través del modelado de lenguaje enmascarado, donde tokens aleatorios se enmascaran y el modelo aprende a predecirlos usando contexto tanto de izquierda como de derecha. Esto difiere de los modelos autoregresivos tradicionales que solo usan contexto de izquierda a derecha. El entrenamiento bidireccional de BERT crea representaciones contextualizadas ricas que pueden ajustarse para varias tareas posteriores.",
          de: "BERT revolutionierte NLP durch bidirektionales Training mit maskierter Sprachmodellierung, wo zufällige Tokens maskiert werden und das Modell lernt sie mit Kontext von links und rechts vorherzusagen. Dies unterscheidet sich von traditionellen autoregressiven Modellen die nur Links-nach-rechts-Kontext verwenden. BERTs bidirektionales Training erstellt reiche kontextualisierte Repräsentationen die für verschiedene nachgelagerte Aufgaben feinabgestimmt werden können.",
          nl: "BERT revolutioneerde NLP door bidirectioneel te trainen via gemaskeerde taalmodellering, waarbij willekeurige tokens worden gemaskeerd en het model leert ze te voorspellen met context van zowel links als rechts. Dit verschilt van traditionele autoregressieve modellen die alleen links-naar-rechts context gebruiken. BERT's bidirectionele training creëert rijke gecontextualiseerde representaties die kunnen worden aangepast voor verschillende downstream-taken."
        }
      },
      {
        question: {
          en: "What is the purpose of positional encoding in Transformer models?",
          es: "¿Cuál es el propósito de la codificación posicional en los modelos Transformer?",
          de: "Was ist der Zweck der Positionskodierung in Transformer-Modellen?",
          nl: "Wat is het doel van positionele encoding in Transformer-modellen?"
        },
        options: [
          { en: "To provide the model with information about token positions since Transformers don't inherently understand sequence order", es: "Proporcionar al modelo información sobre las posiciones de tokens ya que los Transformers no entienden inherentemente el orden de secuencia", de: "Dem Modell Informationen über Token-Positionen zu geben da Transformer von Natur aus keine Sequenzreihenfolge verstehen", nl: "Om het model informatie te geven over tokenposities omdat Transformers van nature geen sequentievolgorde begrijpen" },
          { en: "To reduce the computational complexity of attention", es: "Reducir la complejidad computacional de la atención", de: "Die rechnerische Komplexität der Aufmerksamkeit zu reduzieren", nl: "Om de computationele complexiteit van aandacht te verminderen" },
          { en: "To make the model work faster", es: "Hacer que el modelo funcione más rápido", de: "Das Modell schneller arbeiten zu lassen", nl: "Om het model sneller te laten werken" },
          { en: "To prevent overfitting during training", es: "Prevenir el sobreajuste durante el entrenamiento", de: "Überanpassung während des Trainings zu verhindern", nl: "Om overfitting tijdens training te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Unlike RNNs which process sequences sequentially and inherently know token positions, Transformers process all tokens in parallel. Positional encoding adds position information to input embeddings using sine and cosine functions of different frequencies. This allows the model to distinguish between tokens at different positions and understand sequence order, which is crucial for language understanding.",
          es: "A diferencia de las RNN que procesan secuencias secuencialmente y conocen inherentemente las posiciones de los tokens, los Transformers procesan todos los tokens en paralelo. La codificación posicional añade información de posición a las incrustaciones de entrada usando funciones seno y coseno de diferentes frecuencias. Esto permite al modelo distinguir entre tokens en diferentes posiciones y entender el orden de secuencia, lo cual es crucial para la comprensión del lenguaje.",
          de: "Anders als RNNs die Sequenzen sequenziell verarbeiten und von Natur aus Token-Positionen kennen, verarbeiten Transformer alle Tokens parallel. Positionskodierung fügt Positionsinformationen zu Eingabe-Embeddings hinzu mit Sinus- und Kosinusfunktionen verschiedener Frequenzen. Dies ermöglicht dem Modell zwischen Tokens an verschiedenen Positionen zu unterscheiden und Sequenzreihenfolge zu verstehen, was für Sprachverständnis entscheidend ist.",
          nl: "In tegenstelling tot RNN's die sequenties sequentieel verwerken en van nature tokenposities kennen, verwerken Transformers alle tokens parallel. Positionele encoding voegt positie-informatie toe aan invoer-embeddings met behulp van sinus- en cosinusfuncties van verschillende frequenties. Dit stelt het model in staat om onderscheid te maken tussen tokens op verschillende posities en sequentievolgorde te begrijpen, wat cruciaal is voor taalbegrip."
        }
      },
      {
        question: {
          en: "What is transfer learning in the context of BERT and similar models?",
          es: "¿Qué es el aprendizaje por transferencia en el contexto de BERT y modelos similares?",
          de: "Was ist Transfer Learning im Kontext von BERT und ähnlichen Modellen?",
          nl: "Wat is transfer learning in de context van BERT en vergelijkbare modellen?"
        },
        options: [
          { en: "Pre-training on large general corpora then fine-tuning on specific downstream tasks", es: "Pre-entrenamiento en grandes corpus generales luego ajuste fino en tareas específicas posteriores", de: "Vortraining auf großen allgemeinen Korpora dann Feinabstimmung auf spezifische nachgelagerte Aufgaben", nl: "Pre-training op grote algemene corpora gevolgd door fine-tuning op specifieke downstream-taken" },
          { en: "Moving models between different programming languages", es: "Mover modelos entre diferentes lenguajes de programación", de: "Modelle zwischen verschiedenen Programmiersprachen verschieben", nl: "Het verplaatsen van modellen tussen verschillende programmeertalen" },
          { en: "Training multiple models simultaneously", es: "Entrenar múltiples modelos simultáneamente", de: "Mehrere Modelle gleichzeitig trainieren", nl: "Het gelijktijdig trainen van meerdere modellen" },
          { en: "Converting text to numerical representations", es: "Convertir texto a representaciones numéricas", de: "Text in numerische Repräsentationen umwandeln", nl: "Het omzetten van tekst naar numerieke representaties" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning with BERT involves two phases: pre-training on massive unlabeled text corpora using self-supervised tasks (masked language modeling and next sentence prediction), followed by fine-tuning on specific labeled datasets for downstream tasks. This approach leverages the general language understanding gained during pre-training for specialized tasks like sentiment analysis, question answering, or named entity recognition.",
          es: "El aprendizaje por transferencia con BERT involucra dos fases: pre-entrenamiento en corpus de texto masivos sin etiquetar usando tareas auto-supervisadas (modelado de lenguaje enmascarado y predicción de siguiente oración), seguido de ajuste fino en conjuntos de datos etiquetados específicos para tareas posteriores. Este enfoque aprovecha la comprensión general del lenguaje obtenida durante el pre-entrenamiento para tareas especializadas como análisis de sentimientos, respuesta a preguntas o reconocimiento de entidades nombradas.",
          de: "Transfer Learning mit BERT umfasst zwei Phasen: Vortraining auf massiven unbeschrifteten Textkorpora mit selbstüberwachten Aufgaben (maskierte Sprachmodellierung und Vorhersage des nächsten Satzes), gefolgt von Feinabstimmung auf spezifischen beschrifteten Datensätzen für nachgelagerte Aufgaben. Dieser Ansatz nutzt das allgemeine Sprachverständnis das während des Vortrainings gewonnen wurde für spezialisierte Aufgaben wie Sentimentanalyse, Fragebeantwortung oder Erkennung benannter Entitäten.",
          nl: "Transfer learning met BERT omvat twee fasen: pre-training op massale ongelabelde tekstcorpora met behulp van zelf-supervisietaken (gemaskeerde taalmodellering en voorspelling van volgende zin), gevolgd door fine-tuning op specifieke gelabelde datasets voor downstream-taken. Deze aanpak maakt gebruik van het algemene taalbegrip verkregen tijdens pre-training voor gespecialiseerde taken zoals sentimentanalyse, vraagbeantwoording of herkenning van genoemde entiteiten."
        }
      },
      {
        question: {
          en: "What are the main components of a Transformer encoder block?",
          es: "¿Cuáles son los componentes principales de un bloque codificador Transformer?",
          de: "Was sind die Hauptkomponenten eines Transformer-Encoder-Blocks?",
          nl: "Wat zijn de hoofdcomponenten van een Transformer encoder-blok?"
        },
        options: [
          { en: "Multi-head self-attention mechanism and position-wise feedforward network, both with residual connections and layer normalization", es: "Mecanismo de auto-atención multi-cabeza y red feedforward posicional, ambas con conexiones residuales y normalización de capa", de: "Multi-Head-Selbstaufmerksamkeitsmechanismus und positionsweise Feedforward-Netzwerk, beide mit Residualverbindungen und Schichtnormalisierung", nl: "Multi-head zelf-aandachtsmechanisme en positioneel feedforward-netwerk, beide met residuele verbindingen en laagnormalisatie" },
          { en: "Only a recurrent neural network layer", es: "Solo una capa de red neuronal recurrente", de: "Nur eine rekurrente neuronale Netzwerkschicht", nl: "Alleen een recurrente neurale netwerklaag" },
          { en: "A convolutional layer followed by pooling", es: "Una capa convolucional seguida de pooling", de: "Eine Faltungsschicht gefolgt von Pooling", nl: "Een convolutielaag gevolgd door pooling" },
          { en: "Simple linear transformations without attention", es: "Transformaciones lineales simples sin atención", de: "Einfache lineare Transformationen ohne Aufmerksamkeit", nl: "Eenvoudige lineaire transformaties zonder aandacht" }
        ],
        correct: 0,
        explanation: {
          en: "Each Transformer encoder block contains two main sub-layers: a multi-head self-attention mechanism that allows tokens to attend to all other tokens in the sequence, and a position-wise feedforward network that processes each position independently. Both sub-layers are wrapped with residual connections and followed by layer normalization, which helps with training stability and gradient flow in deep networks.",
          es: "Cada bloque codificador Transformer contiene dos sub-capas principales: un mecanismo de auto-atención multi-cabeza que permite a los tokens atender a todos los otros tokens en la secuencia, y una red feedforward posicional que procesa cada posición independientemente. Ambas sub-capas están envueltas con conexiones residuales y seguidas por normalización de capa, lo que ayuda con la estabilidad del entrenamiento y el flujo de gradientes en redes profundas.",
          de: "Jeder Transformer-Encoder-Block enthält zwei Hauptunter-schichten: einen Multi-Head-Selbstaufmerksamkeitsmechanismus der Tokens erlaubt auf alle anderen Tokens in der Sequenz zu achten, und ein positionsweises Feedforward-Netzwerk das jede Position unabhängig verarbeitet. Beide Unter-schichten sind mit Residualverbindungen umhüllt und von Schichtnormalisierung gefolgt, was bei Trainingsstabilität und Gradientenfluss in tiefen Netzwerken hilft.",
          nl: "Elk Transformer encoder-blok bevat twee hoofdsublagen: een multi-head zelf-aandachtsmechanisme dat tokens in staat stelt om te letten op alle andere tokens in de sequentie, en een positioneel feedforward-netwerk dat elke positie onafhankelijk verwerkt. Beide sublagen zijn omwikkeld met residuele verbindingen en gevolgd door laagnormalisatie, wat helpt bij trainingsstabiliteit en gradiëntflow in diepe netwerken."
        }
      },
      {
        question: {
          en: "What is multi-head attention in Transformers?",
          es: "¿Qué es la atención multi-cabeza en Transformadores?",
          de: "Was ist Multi-Head-Aufmerksamkeit in Transformern?",
          nl: "Wat is multi-head aandacht in Transformers?"
        },
        options: [
          { en: "Running multiple attention mechanisms in parallel with different learned projections to capture different types of relationships", es: "Ejecutar múltiples mecanismos de atención en paralelo con diferentes proyecciones aprendidas para capturar diferentes tipos de relaciones", de: "Mehrere Aufmerksamkeitsmechanismen parallel mit verschiedenen gelernten Projektionen laufen lassen um verschiedene Arten von Beziehungen zu erfassen", nl: "Meerdere aandachtmechanismen parallel uitvoeren met verschillende geleerde projecties om verschillende soorten relaties vast te leggen" },
          { en: "Using multiple Transformer models simultaneously", es: "Usar múltiples modelos Transformer simultáneamente", de: "Mehrere Transformer-Modelle gleichzeitig verwenden", nl: "Meerdere Transformer-modellen tegelijkertijd gebruiken" },
          { en: "Training the model with multiple datasets", es: "Entrenar el modelo con múltiples conjuntos de datos", de: "Das Modell mit mehreren Datensätzen trainieren", nl: "Het model trainen met meerdere datasets" },
          { en: "Having multiple output heads for different tasks", es: "Tener múltiples cabezas de salida para diferentes tareas", de: "Mehrere Ausgabeheads für verschiedene Aufgaben haben", nl: "Meerdere uitvoerheads hebben voor verschillende taken" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-head attention runs several attention mechanisms in parallel, each with different learned projection matrices for queries, keys, and values. This allows the model to attend to information from different representation subspaces simultaneously, capturing various types of relationships and dependencies.",
          es: "La atención multi-cabeza ejecuta varios mecanismos de atención en paralelo, cada uno con diferentes matrices de proyección aprendidas para consultas, claves y valores. Esto permite al modelo atender información de diferentes subespacios de representación simultáneamente, capturando varios tipos de relaciones y dependencias.",
          de: "Multi-Head-Aufmerksamkeit lässt mehrere Aufmerksamkeitsmechanismen parallel laufen, jeder mit verschiedenen gelernten Projektionsmatrizen für Queries, Keys und Values. Dies ermöglicht dem Modell gleichzeitig auf Informationen aus verschiedenen Repräsentations-Subräumen zu achten, verschiedene Arten von Beziehungen und Abhängigkeiten zu erfassen.",
          nl: "Multi-head aandacht laat verschillende aandachtmechanismen parallel lopen, elk met verschillende geleerde projectiematrices voor queries, keys en values. Dit stelt het model in staat om tegelijkertijd te letten op informatie uit verschillende representatie-subruimtes, verschillende soorten relaties en afhankelijkheden vast te leggen."
        }
      },
      {
        question: {
          en: "What is fine-tuning in the context of pre-trained language models?",
          es: "¿Qué es el ajuste fino en el contexto de modelos de lenguaje pre-entrenados?",
          de: "Was ist Fine-Tuning im Kontext vortrainierter Sprachmodelle?",
          nl: "Wat is fine-tuning in de context van voorgetrainde taalmodellen?"
        },
        options: [
          { en: "Adapting a pre-trained model to a specific task by continuing training on task-specific data with a lower learning rate", es: "Adaptar un modelo pre-entrenado a una tarea específica continuando el entrenamiento en datos específicos de la tarea con una tasa de aprendizaje menor", de: "Ein vortrainiertes Modell an eine spezifische Aufgabe anpassen durch Fortsetzung des Trainings auf aufgabenspezifischen Daten mit niedrigerer Lernrate", nl: "Een voorgetraind model aanpassen aan een specifieke taak door training voort te zetten op taakspecifieke gegevens met een lagere leersnelheid" },
          { en: "Making small adjustments to hyperparameters", es: "Hacer pequeños ajustes a hiperparámetros", de: "Kleine Anpassungen an Hyperparametern machen", nl: "Kleine aanpassingen maken aan hyperparameters" },
          { en: "Training the model from scratch on new data", es: "Entrenar el modelo desde cero en nuevos datos", de: "Das Modell von Grund auf mit neuen Daten trainieren", nl: "Het model vanaf nul trainen op nieuwe gegevens" },
          { en: "Optimizing the model's inference speed", es: "Optimizar la velocidad de inferencia del modelo", de: "Die Inferenzgeschwindigkeit des Modells optimieren", nl: "De inferentiesnelheid van het model optimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Fine-tuning leverages the general language representations learned during pre-training and adapts them to specific downstream tasks. The pre-trained weights serve as initialization, and training continues on labeled task-specific data, typically with a lower learning rate to preserve the valuable pre-trained features.",
          es: "El ajuste fino aprovecha las representaciones generales de lenguaje aprendidas durante el pre-entrenamiento y las adapta a tareas específicas posteriores. Los pesos pre-entrenados sirven como inicialización, y el entrenamiento continúa en datos etiquetados específicos de la tarea, típicamente con una tasa de aprendizaje menor para preservar las características valiosas pre-entrenadas.",
          de: "Fine-Tuning nutzt die allgemeinen Sprachrepräsentationen die während des Vortrainings gelernt wurden und passt sie an spezifische nachgelagerte Aufgaben an. Die vortrainierten Gewichte dienen als Initialisierung und Training wird auf beschrifteten aufgabenspezifischen Daten fortgesetzt, typischerweise mit niedrigerer Lernrate um wertvolle vortrainierte Features zu bewahren.",
          nl: "Fine-tuning benut de algemene taalrepresentaties geleerd tijdens pre-training en past ze aan voor specifieke downstream-taken. De voorgetrainde gewichten dienen als initialisatie, en training wordt voortgezet op gelabelde taakspecifieke gegevens, typisch met een lagere leersnelheid om waardevolle voorgetrainde features te behouden."
        }
      },
      {
        question: {
          en: "What is question answering (QA) in NLP?",
          es: "¿Qué es la respuesta a preguntas (QA) en PLN?",
          de: "Was ist Fragebeantwortung (QA) in NLP?",
          nl: "Wat is vraagbeantwoording (QA) in NLP?"
        },
        options: [
          { en: "Automatically generating answers to questions based on given text passages or knowledge bases", es: "Generar automáticamente respuestas a preguntas basadas en pasajes de texto dados o bases de conocimiento", de: "Automatisches Generieren von Antworten auf Fragen basierend auf gegebenen Textpassagen oder Wissensbasen", nl: "Automatisch antwoorden genereren op vragen gebaseerd op gegeven tekstpassages of kennisbases" },
          { en: "Creating multiple choice questions from text", es: "Crear preguntas de opción múltiple a partir de texto", de: "Multiple-Choice-Fragen aus Text erstellen", nl: "Meerkeuzevragen maken uit tekst" },
          { en: "Analyzing the quality of questions", es: "Analizar la calidad de las preguntas", de: "Die Qualität von Fragen analysieren", nl: "De kwaliteit van vragen analyseren" },
          { en: "Converting questions to statements", es: "Convertir preguntas a declaraciones", de: "Fragen in Aussagen umwandeln", nl: "Vragen omzetten naar uitspraken" }
        ],
        correct: 0,
        explanation: {
          en: "Question answering systems automatically provide answers to questions posed in natural language. They can be extractive (finding answer spans in given text) or generative (creating new answer text), and may work with structured knowledge bases or unstructured text.",
          es: "Los sistemas de respuesta a preguntas proporcionan automáticamente respuestas a preguntas planteadas en lenguaje natural. Pueden ser extractivos (encontrar segmentos de respuesta en texto dado) o generativos (crear nuevo texto de respuesta), y pueden trabajar con bases de conocimiento estructuradas o texto no estructurado.",
          de: "Fragebeantwortungssysteme liefern automatisch Antworten auf in natürlicher Sprache gestellte Fragen. Sie können extraktiv sein (Antwortspannen in gegebenem Text finden) oder generativ (neuen Antworttext erstellen), und können mit strukturierten Wissensbasen oder unstrukturiertem Text arbeiten.",
          nl: "Vraagbeantwoordingssystemen bieden automatisch antwoorden op vragen gesteld in natuurlijke taal. Ze kunnen extractief zijn (antwoordspannes vinden in gegeven tekst) of generatief (nieuwe antwoordtekst creëren), en kunnen werken met gestructureerde kennisbases of ongestructureerde tekst."
        }
      },
      {
        question: {
          en: "What is text summarization?",
          es: "¿Qué es la resumización de texto?",
          de: "Was ist Textzusammenfassung?",
          nl: "Wat is tekstsamenvatting?"
        },
        options: [
          { en: "Automatically creating shorter versions of text that preserve the most important information", es: "Crear automáticamente versiones más cortas de texto que preservan la información más importante", de: "Automatisches Erstellen kürzerer Textversionen die die wichtigsten Informationen bewahren", nl: "Automatisch kortere versies van tekst maken die de belangrijkste informatie behouden" },
          { en: "Counting the main topics in a document", es: "Contar los temas principales en un documento", de: "Die Hauptthemen in einem Dokument zählen", nl: "De hoofdonderwerpen in een document tellen" },
          { en: "Translating text to a simpler language", es: "Traducir texto a un lenguaje más simple", de: "Text in eine einfachere Sprache übersetzen", nl: "Tekst vertalen naar een eenvoudigere taal" },
          { en: "Organizing text into categories", es: "Organizar texto en categorías", de: "Text in Kategorien organisieren", nl: "Tekst organiseren in categorieën" }
        ],
        correct: 0,
        explanation: {
          en: "Text summarization condenses longer documents into shorter versions while retaining key information. It can be extractive (selecting important sentences from the original) or abstractive (generating new text that captures the main ideas).",
          es: "La resumización de texto condensa documentos más largos en versiones más cortas mientras retiene información clave. Puede ser extractiva (seleccionando oraciones importantes del original) o abstractiva (generando nuevo texto que captura las ideas principales).",
          de: "Textzusammenfassung kondensiert längere Dokumente in kürzere Versionen während Schlüsselinformationen beibehalten werden. Sie kann extraktiv sein (wichtige Sätze aus dem Original auswählen) oder abstraktiv (neuen Text generieren der die Hauptideen erfasst).",
          nl: "Tekstsamenvatting verdicht langere documenten tot kortere versies terwijl belangrijke informatie wordt behouden. Het kan extractief zijn (belangrijke zinnen selecteren uit het origineel) of abstractief (nieuwe tekst genereren die de hoofdideeën vastlegt)."
        }
      },
      {
        question: {
          en: "What is dialogue systems (chatbots) in NLP?",
          es: "¿Qué son los sistemas de diálogo (chatbots) en PLN?",
          de: "Was sind Dialogsysteme (Chatbots) in NLP?",
          nl: "Wat zijn dialoogsystemen (chatbots) in NLP?"
        },
        options: [
          { en: "Systems that engage in natural language conversations with humans, understanding context and generating appropriate responses", es: "Sistemas que participan en conversaciones en lenguaje natural con humanos, entendiendo contexto y generando respuestas apropiadas", de: "Systeme die natürlichsprachliche Gespräche mit Menschen führen, Kontext verstehen und angemessene Antworten generieren", nl: "Systemen die natuurlijke taalconversaties aangaan met mensen, context begrijpen en passende reacties genereren" },
          { en: "Programs that only respond to specific keywords", es: "Programas que solo responden a palabras clave específicas", de: "Programme die nur auf spezifische Schlüsselwörter reagieren", nl: "Programma's die alleen reageren op specifieke trefwoorden" },
          { en: "Systems for voice recognition only", es: "Sistemas solo para reconocimiento de voz", de: "Systeme nur für Spracherkennung", nl: "Systemen alleen voor spraakherkenning" },
          { en: "Automated email response systems", es: "Sistemas automatizados de respuesta de correo", de: "Automatisierte E-Mail-Antwortsysteme", nl: "Geautomatiseerde emailresponssystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Dialogue systems maintain conversational context, track dialogue state, and generate contextually appropriate responses. They combine various NLP techniques including intent recognition, entity extraction, dialogue management, and natural language generation.",
          es: "Los sistemas de diálogo mantienen contexto conversacional, rastrean estado del diálogo, y generan respuestas contextualmente apropiadas. Combinan varias técnicas de PLN incluyendo reconocimiento de intención, extracción de entidades, gestión de diálogo, y generación de lenguaje natural.",
          de: "Dialogsysteme erhalten Gesprächskontext, verfolgen Dialogzustand und generieren kontextuell angemessene Antworten. Sie kombinieren verschiedene NLP-Techniken einschließlich Absichtserkennung, Entitätsextraktion, Dialogmanagement und natürliche Sprachgenerierung.",
          nl: "Dialoogsystemen behouden gesprekscontext, volgen dialoogstatus en genereren contextueel passende reacties. Ze combineren verschillende NLP-technieken waaronder intentieherkenning, entiteitsextractie, dialoogbeheer en natuurlijke taalgeneratie."
        }
      },
      {
        question: {
          en: "What is natural language generation (NLG)?",
          es: "¿Qué es la generación de lenguaje natural (NLG)?",
          de: "Was ist natürliche Sprachgenerierung (NLG)?",
          nl: "Wat is natuurlijke taalgeneratie (NLG)?"
        },
        options: [
          { en: "Automatically producing human-readable text from structured data or internal representations", es: "Producir automáticamente texto legible por humanos a partir de datos estructurados o representaciones internas", de: "Automatisches Produzieren menschenlesbarer Text aus strukturierten Daten oder internen Repräsentationen", nl: "Automatisch voor mensen leesbare tekst produceren uit gestructureerde gegevens of interne representaties" },
          { en: "Converting speech to text", es: "Convertir voz a texto", de: "Sprache in Text umwandeln", nl: "Spraak omzetten naar tekst" },
          { en: "Analyzing the grammar of sentences", es: "Analizar la gramática de oraciones", de: "Die Grammatik von Sätzen analysieren", nl: "De grammatica van zinnen analyseren" },
          { en: "Creating programming code from text", es: "Crear código de programación a partir de texto", de: "Programmiercode aus Text erstellen", nl: "Programmeercode maken uit tekst" }
        ],
        correct: 0,
        explanation: {
          en: "NLG systems convert structured data, semantic representations, or abstract concepts into fluent natural language text. Applications include report generation, data-to-text systems, creative writing assistance, and personalized content creation.",
          es: "Los sistemas NLG convierten datos estructurados, representaciones semánticas, o conceptos abstractos en texto fluido de lenguaje natural. Las aplicaciones incluyen generación de reportes, sistemas de datos-a-texto, asistencia de escritura creativa, y creación de contenido personalizado.",
          de: "NLG-Systeme konvertieren strukturierte Daten, semantische Repräsentationen oder abstrakte Konzepte in fließenden natürlichsprachlichen Text. Anwendungen umfassen Berichterstellung, Daten-zu-Text-Systeme, kreative Schreibhilfe und personalisierte Inhaltserstellung.",
          nl: "NLG-systemen converteren gestructureerde gegevens, semantische representaties of abstracte concepten naar vloeiende natuurlijke taaltekst. Toepassingen omvatten rapportgeneratie, data-naar-tekst systemen, creatieve schrijfhulp en gepersonaliseerde contentcreatie."
        }
      },
      {
        question: {
          en: "What is cross-attention in sequence-to-sequence models?",
          es: "¿Qué es la atención cruzada en modelos secuencia-a-secuencia?",
          de: "Was ist Cross-Attention in Sequenz-zu-Sequenz-Modellen?",
          nl: "Wat is cross-attention in sequentie-naar-sequentie modellen?"
        },
        options: [
          { en: "Attention mechanism where decoder attends to encoder hidden states, enabling focus on relevant input parts when generating output", es: "Mecanismo de atención donde el decodificador atiende a estados ocultos del codificador, permitiendo enfoque en partes relevantes de entrada al generar salida", de: "Aufmerksamkeitsmechanismus wo Decoder auf Encoder-versteckte Zustände achtet, ermöglicht Fokus auf relevante Eingabeteile bei Ausgabegenerierung", nl: "Aandachtmechanisme waarbij decoder let op encoder verborgen toestanden, maakt focus mogelijk op relevante invoerdelen bij het genereren van uitvoer" },
          { en: "Attention between different language pairs", es: "Atención entre diferentes pares de idiomas", de: "Aufmerksamkeit zwischen verschiedenen Sprachpaaren", nl: "Aandacht tussen verschillende taalparen" },
          { en: "Attention across multiple datasets", es: "Atención a través de múltiples conjuntos de datos", de: "Aufmerksamkeit über mehrere Datensätze", nl: "Aandacht over meerdere datasets" },
          { en: "Attention between different model architectures", es: "Atención entre diferentes arquitecturas de modelo", de: "Aufmerksamkeit zwischen verschiedenen Modellarchitekturen", nl: "Aandacht tussen verschillende modelarchitecturen" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-attention allows the decoder to access information from the encoder's representations of the input sequence. Unlike self-attention which operates within a single sequence, cross-attention creates connections between the source and target sequences, crucial for tasks like machine translation.",
          es: "La atención cruzada permite al decodificador acceder a información de las representaciones del codificador de la secuencia de entrada. A diferencia de la auto-atención que opera dentro de una sola secuencia, la atención cruzada crea conexiones entre las secuencias fuente y objetivo, crucial para tareas como traducción automática.",
          de: "Cross-Attention ermöglicht dem Decoder Zugang zu Informationen aus den Repräsentationen des Encoders der Eingabesequenz. Anders als Selbstaufmerksamkeit die innerhalb einer einzigen Sequenz operiert, erstellt Cross-Attention Verbindungen zwischen Quell- und Zielsequenzen, entscheidend für Aufgaben wie maschinelle Übersetzung.",
          nl: "Cross-attention stelt de decoder in staat om toegang te krijgen tot informatie uit de representaties van de encoder van de invoersequentie. Anders dan zelf-aandacht die werkt binnen een enkele sequentie, creëert cross-attention verbindingen tussen bron- en doelsequenties, cruciaal voor taken zoals machinevertaling."
        }
      },
      {
        question: {
          en: "What is beam search in text generation?",
          es: "¿Qué es la búsqueda en haz en generación de texto?",
          de: "Was ist Beam Search in der Textgenerierung?",
          nl: "Wat is beam search in tekstgeneratie?"
        },
        options: [
          { en: "A search algorithm that maintains multiple candidate sequences and selects the most probable final output", es: "Un algoritmo de búsqueda que mantiene múltiples secuencias candidatas y selecciona la salida final más probable", de: "Ein Suchalgorithmus der mehrere Kandidatensequenzen beibehält und die wahrscheinlichste finale Ausgabe auswählt", nl: "Een zoekalgoritme dat meerdere kandidaatsequenties behoudt en de meest waarschijnlijke finale uitvoer selecteert" },
          { en: "A method for generating random text", es: "Un método para generar texto aleatorio", de: "Eine Methode zur Generierung zufälligen Textes", nl: "Een methode voor het genereren van willekeurige tekst" },
          { en: "A technique for parallel processing", es: "Una técnica para procesamiento paralelo", de: "Eine Technik für Parallelverarbeitung", nl: "Een techniek voor parallelle verwerking" },
          { en: "A way to visualize attention patterns", es: "Una forma de visualizar patrones de atención", de: "Eine Methode Aufmerksamkeitsmuster zu visualisieren", nl: "Een manier om aandachtpatronen te visualiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Beam search explores multiple sequence hypotheses simultaneously, keeping the top-k most probable sequences at each step. This helps find better quality outputs than greedy decoding while being more efficient than exhaustive search.",
          es: "La búsqueda en haz explora múltiples hipótesis de secuencia simultáneamente, manteniendo las k secuencias más probables en cada paso. Esto ayuda a encontrar salidas de mejor calidad que decodificación codiciosa mientras es más eficiente que búsqueda exhaustiva.",
          de: "Beam Search erkundet mehrere Sequenzhypothesen gleichzeitig, behält die top-k wahrscheinlichsten Sequenzen bei jedem Schritt bei. Dies hilft bessere Qualitätsausgaben zu finden als gieriges Dekodieren während es effizienter als exhaustive Suche ist.",
          nl: "Beam search verkent meerdere sequentiehypotheses tegelijkertijd, behoudt de top-k meest waarschijnlijke sequenties bij elke stap. Dit helpt betere kwaliteitsuitvoer te vinden dan greedy decoding terwijl het efficiënter is dan exhaustieve zoekopdracht."
        }
      },
      {
        question: {
          en: "What is domain adaptation in NLP?",
          es: "¿Qué es la adaptación de dominio en PLN?",
          de: "Was ist Domänenanpassung in NLP?",
          nl: "Wat is domeinaanpassing in NLP?"
        },
        options: [
          { en: "Adapting models trained on one domain to perform well on a different but related domain with limited target domain data", es: "Adaptar modelos entrenados en un dominio para funcionar bien en un dominio diferente pero relacionado con datos limitados del dominio objetivo", de: "Modelle die auf einer Domäne trainiert wurden anpassen um gut auf einer anderen aber verwandten Domäne mit begrenzten Zieldomänendaten zu funktionieren", nl: "Modellen getraind op één domein aanpassen om goed te presteren op een ander maar gerelateerd domein met beperkte doeldomeingegevens" },
          { en: "Converting models to work on different computer systems", es: "Convertir modelos para trabajar en diferentes sistemas informáticos", de: "Modelle konvertieren um auf verschiedenen Computersystemen zu arbeiten", nl: "Modellen converteren om te werken op verschillende computersystemen" },
          { en: "Training models to understand multiple languages", es: "Entrenar modelos para entender múltiples idiomas", de: "Modelle trainieren um mehrere Sprachen zu verstehen", nl: "Modellen trainen om meerdere talen te begrijpen" },
          { en: "Optimizing models for specific hardware", es: "Optimizar modelos para hardware específico", de: "Modelle für spezifische Hardware optimieren", nl: "Modellen optimaliseren voor specifieke hardware" }
        ],
        correct: 0,
        explanation: {
          en: "Domain adaptation addresses the mismatch between training and target domains (e.g., news vs. medical text). Techniques include fine-tuning, domain adversarial training, and transfer learning to leverage source domain knowledge for target domain performance.",
          es: "La adaptación de dominio aborda la discrepancia entre dominios de entrenamiento y objetivo (ej., noticias vs. texto médico). Las técnicas incluyen ajuste fino, entrenamiento adversarial de dominio, y aprendizaje por transferencia para aprovechar conocimiento del dominio fuente para rendimiento del dominio objetivo.",
          de: "Domänenanpassung adressiert die Diskrepanz zwischen Trainings- und Zieldomänen (z.B. Nachrichten vs. medizinischer Text). Techniken umfassen Fine-Tuning, domänenadversariales Training und Transfer Learning um Quelldomänenwissen für Zieldomänenleistung zu nutzen.",
          nl: "Domeinaanpassing pakt de mismatch aan tussen trainings- en doeldomeinen (bijv. nieuws vs. medische tekst). Technieken omvatten fine-tuning, domain adversarial training, en transfer learning om brondomeinkennis te benutten voor doeldomeinprestaties."
        }
      },
      {
        question: {
          en: "What is few-shot learning in NLP?",
          es: "¿Qué es el aprendizaje de pocos ejemplos en PLN?",
          de: "Was ist Few-Shot Learning in NLP?",
          nl: "Wat is few-shot learning in NLP?"
        },
        options: [
          { en: "Learning to perform tasks with only a few training examples, often using pre-trained models and in-context learning", es: "Aprender a realizar tareas con solo unos pocos ejemplos de entrenamiento, a menudo usando modelos pre-entrenados y aprendizaje en contexto", de: "Lernen Aufgaben mit nur wenigen Trainingsbeispielen auszuführen, oft mit vortrainierten Modellen und kontextuellem Lernen", nl: "Leren om taken uit te voeren met slechts enkele trainingsvoorbeelden, vaak met behulp van voorgetrainde modellen en in-context leren" },
          { en: "Training models very quickly", es: "Entrenar modelos muy rápidamente", de: "Modelle sehr schnell trainieren", nl: "Modellen zeer snel trainen" },
          { en: "Using small model architectures", es: "Usar arquitecturas de modelo pequeñas", de: "Kleine Modellarchitekturen verwenden", nl: "Kleine modelarchitecturen gebruiken" },
          { en: "Learning with limited computational resources", es: "Aprender con recursos computacionales limitados", de: "Lernen mit begrenzten Rechenressourcen", nl: "Leren met beperkte computationele bronnen" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning enables models to adapt to new tasks with minimal examples. Large language models demonstrate this through in-context learning, where task examples are provided in the prompt without parameter updates.",
          es: "El aprendizaje de pocos ejemplos permite a los modelos adaptarse a nuevas tareas con ejemplos mínimos. Los modelos de lenguaje grandes demuestran esto a través del aprendizaje en contexto, donde ejemplos de tareas se proporcionan en el prompt sin actualizaciones de parámetros.",
          de: "Few-Shot Learning ermöglicht Modellen sich an neue Aufgaben mit minimalen Beispielen anzupassen. Große Sprachmodelle demonstrieren dies durch kontextuelles Lernen, wo Aufgabenbeispiele im Prompt bereitgestellt werden ohne Parameterupdates.",
          nl: "Few-shot learning stelt modellen in staat om zich aan te passen aan nieuwe taken met minimale voorbeelden. Grote taalmodellen demonstreren dit door in-context leren, waarbij taakvoorbeelden worden gegeven in de prompt zonder parameterupdates."
        }
      },
      {
        question: {
          en: "What is neural machine translation (NMT)?",
          es: "¿Qué es la traducción automática neuronal (NMT)?",
          de: "Was ist neuronale maschinelle Übersetzung (NMT)?",
          nl: "Wat is neurale machinevertaling (NMT)?"
        },
        options: [
          { en: "End-to-end neural networks that directly translate between languages using encoder-decoder architectures with attention", es: "Redes neuronales de extremo a extremo que traducen directamente entre idiomas usando arquitecturas codificador-decodificador con atención", de: "End-to-End neuronale Netzwerke die direkt zwischen Sprachen übersetzen mit Encoder-Decoder-Architekturen mit Aufmerksamkeit", nl: "End-to-end neurale netwerken die direct tussen talen vertalen met encoder-decoder architecturen met aandacht" },
          { en: "Rule-based translation systems", es: "Sistemas de traducción basados en reglas", de: "Regelbasierte Übersetzungssysteme", nl: "Regelgebaseerde vertaalsystemen" },
          { en: "Statistical phrase-based translation", es: "Traducción estadística basada en frases", de: "Statistische phrasenbasierte Übersetzung", nl: "Statistische op zinsdelen gebaseerde vertaling" },
          { en: "Dictionary-based word substitution", es: "Sustitución de palabras basada en diccionario", de: "Wörterbuchbasierte Wortsubstitution", nl: "Op woordenboek gebaseerde woordvervanging" }
        ],
        correct: 0,
        explanation: {
          en: "NMT uses neural networks to learn translation mappings directly from parallel corpora, without explicit linguistic rules. Modern NMT systems use Transformer architectures with attention mechanisms for state-of-the-art translation quality.",
          es: "NMT usa redes neuronales para aprender mapeos de traducción directamente de corpus paralelos, sin reglas lingüísticas explícitas. Los sistemas NMT modernos usan arquitecturas Transformer con mecanismos de atención para calidad de traducción de vanguardia.",
          de: "NMT verwendet neuronale Netzwerke um Übersetzungszuordnungen direkt aus parallelen Korpora zu lernen, ohne explizite linguistische Regeln. Moderne NMT-Systeme verwenden Transformer-Architekturen mit Aufmerksamkeitsmechanismen für modernste Übersetzungsqualität.",
          nl: "NMT gebruikt neurale netwerken om vertaalmappings direct te leren uit parallelle corpora, zonder expliciete linguïstische regels. Moderne NMT-systemen gebruiken Transformer-architecturen met aandachtmechanismen voor state-of-the-art vertaalkwaliteit."
        }
      },
      {
        question: {
          en: "What is multilingual NLP?",
          es: "¿Qué es el PLN multilingüe?",
          de: "Was ist mehrsprachiges NLP?",
          nl: "Wat is meertalige NLP?"
        },
        options: [
          { en: "Developing NLP systems that can process and understand multiple languages, often using shared representations", es: "Desarrollar sistemas de PLN que puedan procesar y entender múltiples idiomas, a menudo usando representaciones compartidas", de: "NLP-Systeme entwickeln die mehrere Sprachen verarbeiten und verstehen können, oft mit geteilten Repräsentationen", nl: "NLP-systemen ontwikkelen die meerdere talen kunnen verwerken en begrijpen, vaak met gedeelde representaties" },
          { en: "Translating between any two languages", es: "Traducir entre cualesquiera dos idiomas", de: "Zwischen beliebigen zwei Sprachen übersetzen", nl: "Vertalen tussen twee willekeurige talen" },
          { en: "Creating separate models for each language", es: "Crear modelos separados para cada idioma", de: "Separate Modelle für jede Sprache erstellen", nl: "Afzonderlijke modellen maken voor elke taal" },
          { en: "Learning only high-resource languages", es: "Aprender solo idiomas de muchos recursos", de: "Nur ressourcenreiche Sprachen lernen", nl: "Alleen hulpbronrijke talen leren" }
        ],
        correct: 0,
        explanation: {
          en: "Multilingual NLP creates models that work across languages, often leveraging cross-lingual transfer learning. This enables better performance on low-resource languages and unified architectures for global applications.",
          es: "El PLN multilingüe crea modelos que funcionan a través de idiomas, a menudo aprovechando aprendizaje por transferencia entre idiomas. Esto permite mejor rendimiento en idiomas de pocos recursos y arquitecturas unificadas para aplicaciones globales.",
          de: "Mehrsprachiges NLP erstellt Modelle die sprachenbergreifend funktionieren, oft nutzen sprachenbergreifendes Transfer Learning. Dies ermöglicht bessere Leistung bei ressourcenarmen Sprachen und einheitliche Architekturen für globale Anwendungen.",
          nl: "Meertalige NLP creëert modellen die werken over talen heen, vaak gebruikmakend van cross-linguaal transfer learning. Dit maakt betere prestaties mogelijk voor hulpbronarme talen en uniforme architecturen voor globale toepassingen."
        }
      },
      {
        question: {
          en: "What is adversarial training in NLP?",
          es: "¿Qué es el entrenamiento adversarial en PLN?",
          de: "Was ist Adversarial Training in NLP?",
          nl: "Wat is adversarial training in NLP?"
        },
        options: [
          { en: "Training models to be robust against adversarial examples or using adversarial objectives to improve learning", es: "Entrenar modelos para ser robustos contra ejemplos adversariales o usar objetivos adversariales para mejorar el aprendizaje", de: "Modelle trainieren um robust gegen adversarielle Beispiele zu sein oder adversarielle Ziele verwenden um Lernen zu verbessern", nl: "Modellen trainen om robuust te zijn tegen adversariale voorbeelden of adversariale doelstellingen gebruiken om leren te verbeteren" },
          { en: "Training models to compete against each other", es: "Entrenar modelos para competir entre sí", de: "Modelle trainieren um gegeneinander zu konkurrieren", nl: "Modellen trainen om tegen elkaar te concurreren" },
          { en: "Training with hostile data", es: "Entrenar con datos hostiles", de: "Mit feindlichen Daten trainieren", nl: "Trainen met vijandige gegevens" },
          { en: "Using negative examples only", es: "Usar solo ejemplos negativos", de: "Nur negative Beispiele verwenden", nl: "Alleen negatieve voorbeelden gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial training can make models more robust by exposing them to adversarial examples during training, or use adversarial objectives like GANs for better representation learning and domain adaptation.",
          es: "El entrenamiento adversarial puede hacer modelos más robustos exponiéndolos a ejemplos adversariales durante entrenamiento, o usar objetivos adversariales como GANs para mejor aprendizaje de representación y adaptación de dominio.",
          de: "Adversarial Training kann Modelle robuster machen durch Exposition gegenüber adversariellen Beispielen während des Trainings, oder adversarielle Ziele wie GANs für besseres Repräsentationslernen und Domänenanpassung verwenden.",
          nl: "Adversarial training kan modellen robuuster maken door ze bloot te stellen aan adversariale voorbeelden tijdens training, of adversariale doelstellingen zoals GANs gebruiken voor beter representatieleren en domeinaanpassing."
        }
      },
      {
        question: {
          en: "What is zero-shot learning in NLP?",
          es: "¿Qué es el aprendizaje de cero ejemplos en PLN?",
          de: "Was ist Zero-Shot Learning in NLP?",
          nl: "Wat is zero-shot learning in NLP?"
        },
        options: [
          { en: "Performing tasks without any task-specific training examples, relying on pre-trained knowledge and task descriptions", es: "Realizar tareas sin ejemplos de entrenamiento específicos de la tarea, confiando en conocimiento pre-entrenado y descripciones de tareas", de: "Aufgaben ohne aufgabenspezifische Trainingsbeispiele ausführen, verlassen auf vortrainiertes Wissen und Aufgabenbeschreibungen", nl: "Taken uitvoeren zonder taakspecifieke trainingsvoorbeelden, vertrouwend op voorgetrainde kennis en taakbeschrijvingen" },
          { en: "Training without any data", es: "Entrenar sin ningún dato", de: "Ohne jegliche Daten trainieren", nl: "Trainen zonder enige gegevens" },
          { en: "Learning very quickly", es: "Aprender muy rápidamente", de: "Sehr schnell lernen", nl: "Heel snel leren" },
          { en: "Using only unlabeled data", es: "Usar solo datos sin etiquetar", de: "Nur unbeschriftete Daten verwenden", nl: "Alleen ongelabelde gegevens gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Zero-shot learning leverages pre-trained models' general knowledge to perform new tasks without fine-tuning. Large language models excel at this through instruction following and in-context learning with task descriptions.",
          es: "El aprendizaje de cero ejemplos aprovecha el conocimiento general de modelos pre-entrenados para realizar nuevas tareas sin ajuste fino. Los modelos de lenguaje grandes sobresalen en esto a través de seguimiento de instrucciones y aprendizaje en contexto con descripciones de tareas.",
          de: "Zero-Shot Learning nutzt das allgemeine Wissen vortrainierter Modelle um neue Aufgaben ohne Fine-Tuning auszuführen. Große Sprachmodelle zeichnen sich darin aus durch Instruktionsbefolgung und kontextuelles Lernen mit Aufgabenbeschreibungen.",
          nl: "Zero-shot learning benut de algemene kennis van voorgetrainde modellen om nieuwe taken uit te voeren zonder fine-tuning. Grote taalmodellen blinken hierin uit door instructieopvolging en in-context leren met taakbeschrijvingen."
        }
      },
      {
        question: {
          en: "What is explainable AI (XAI) in NLP?",
          es: "¿Qué es la IA explicable (XAI) en PLN?",
          de: "Was ist erklärbare KI (XAI) in NLP?",
          nl: "Wat is verklaarbare AI (XAI) in NLP?"
        },
        options: [
          { en: "Methods to understand and interpret how NLP models make decisions, including attention visualization and feature attribution", es: "Métodos para entender e interpretar cómo los modelos de PLN toman decisiones, incluyendo visualización de atención y atribución de características", de: "Methoden um zu verstehen und zu interpretieren wie NLP-Modelle Entscheidungen treffen, einschließlich Aufmerksamkeitsvisualisierung und Feature-Attribution", nl: "Methoden om te begrijpen en interpreteren hoe NLP-modellen beslissingen nemen, inclusief aandachtvisualisatie en feature-attributie" },
          { en: "Making AI systems explain their algorithms in natural language", es: "Hacer que los sistemas de IA expliquen sus algoritmos en lenguaje natural", de: "KI-Systeme dazu bringen ihre Algorithmen in natürlicher Sprache zu erklären", nl: "AI-systemen hun algoritmen laten uitleggen in natuurlijke taal" },
          { en: "Creating simple rule-based systems", es: "Crear sistemas simples basados en reglas", de: "Einfache regelbasierte Systeme erstellen", nl: "Eenvoudige regelgebaseerde systemen maken" },
          { en: "Reducing model complexity", es: "Reducir complejidad del modelo", de: "Modellkomplexität reduzieren", nl: "Modelcomplexiteit verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "XAI in NLP aims to make black-box models interpretable through techniques like attention maps, gradient-based attribution, probing tasks, and counterfactual analysis to understand model reasoning and build trust.",
          es: "XAI en PLN busca hacer modelos de caja negra interpretables a través de técnicas como mapas de atención, atribución basada en gradientes, tareas de sondeo, y análisis contrafactual para entender razonamiento del modelo y construir confianza.",
          de: "XAI in NLP zielt darauf ab Black-Box-Modelle interpretierbar zu machen durch Techniken wie Aufmerksamkeitskarten, gradientenbasierte Attribution, Probing-Aufgaben und kontrafaktische Analyse um Modellraisonnement zu verstehen und Vertrauen aufzubauen.",
          nl: "XAI in NLP streeft ernaar black-box modellen interpreteerbaar te maken door technieken zoals aandachtkaarten, gradiënt-gebaseerde attributie, probing-taken en contrafeitelijke analyse om modelredenering te begrijpen en vertrouwen op te bouwen."
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
