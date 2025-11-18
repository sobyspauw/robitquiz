// Natural Language Processing Quiz - Level 8: Modern NLP
(function() {
  const level8 = {
    name: {
      en: "Transformers, BERT & GPT Basics",
      es: "Transformadores, Conceptos Básicos de BERT y GPT",
      de: "Transformer, BERT & GPT Grundlagen",
      nl: "Transformers, BERT & GPT Basis"
    },
    questions: [
      {
        question: {
          en: "What distinguishes GPT (Generative Pre-trained Transformer) from BERT in terms of architecture and training?",
          es: "¿Qué distingue a GPT (Transformador Generativo Pre-entrenado) de BERT en términos de arquitectura y entrenamiento?",
          de: "Was unterscheidet GPT (Generative Pre-trained Transformer) von BERT in Bezug auf Architektur und Training?",
          nl: "Wat onderscheidt GPT (Generative Pre-trained Transformer) van BERT in termen van architectuur en training?"
        },
        options: [
          { en: "GPT uses a decoder-only architecture with autoregressive generation, while BERT uses an encoder with bidirectional context", es: "GPT usa una arquitectura solo-decodificador con generación autoregresiva, mientras BERT usa un codificador con contexto bidireccional", de: "GPT verwendet eine reine Decoder-Architektur mit autoregressiver Generierung, während BERT einen Encoder mit bidirektionalem Kontext verwendet", nl: "GPT gebruikt een decoder-only architectuur met autoregressieve generatie, terwijl BERT een encoder gebruikt met bidirectionele context" },
          { en: "GPT is smaller than BERT in parameter count", es: "GPT es más pequeño que BERT en número de parámetros", de: "GPT ist kleiner als BERT in der Parameteranzahl", nl: "GPT is kleiner dan BERT in aantal parameters" },
          { en: "GPT only works with English text", es: "GPT solo funciona con texto en inglés", de: "GPT funktioniert nur mit englischem Text", nl: "GPT werkt alleen met Engelse tekst" },
          { en: "GPT cannot be fine-tuned for specific tasks", es: "GPT no puede ser ajustado para tareas específicas", de: "GPT kann nicht für spezifische Aufgaben feinabgestimmt werden", nl: "GPT kan niet worden aangepast voor specifieke taken" }
        ],
        correct: 0,
        explanation: {
          en: "GPT uses a decoder-only Transformer architecture that generates text autoregressively (left-to-right), predicting the next token based on previous tokens. This makes it excellent for text generation tasks. BERT uses an encoder-only architecture with bidirectional attention for understanding tasks. GPT's autoregressive nature allows it to generate coherent, contextually appropriate text, making it ideal for creative writing, dialogue, and completion tasks.",
          es: "GPT usa una arquitectura Transformer solo-decodificador que genera texto autoregresivamente (izquierda-a-derecha), prediciendo el siguiente token basado en tokens previos. Esto lo hace excelente para tareas de generación de texto. BERT usa una arquitectura solo-codificador con atención bidireccional para tareas de comprensión. La naturaleza autoregresiva de GPT le permite generar texto coherente y contextualmente apropiado, haciéndolo ideal para escritura creativa, diálogo y tareas de completado.",
          de: "GPT verwendet eine reine Decoder-Transformer-Architektur die Text autoregressiv (links-nach-rechts) generiert und das nächste Token basierend auf vorherigen Tokens vorhersagt. Dies macht es hervorragend für Textgenerierungsaufgaben. BERT verwendet eine reine Encoder-Architektur mit bidirektionaler Aufmerksamkeit für Verständnisaufgaben. GPTs autoregressive Natur ermöglicht es kohärenten, kontextuell angemessenen Text zu generieren, was es ideal für kreatives Schreiben, Dialog und Vervollständigungsaufgaben macht.",
          nl: "GPT gebruikt een decoder-only Transformer-architectuur die tekst autoregressief (links-naar-rechts) genereert, waarbij het volgende token wordt voorspeld op basis van vorige tokens. Dit maakt het uitstekend geschikt voor tekstgeneratietaken. BERT gebruikt een encoder-only architectuur met bidirectionele aandacht voor begripsaken. GPT's autoregressieve aard stelt het in staat om coherente, contextueel gepaste tekst te genereren, wat het ideaal maakt voor creatief schrijven, dialoog en aanvullingstaken."
        }
      },
      {
        question: {
          en: "What is the key innovation of T5 (Text-to-Text Transfer Transformer) compared to previous models?",
          es: "¿Cuál es la innovación clave de T5 (Transformador de Transferencia Texto-a-Texto) comparado con modelos previos?",
          de: "Was ist die Schlüsselinnovation von T5 (Text-to-Text Transfer Transformer) im Vergleich zu vorherigen Modellen?",
          nl: "Wat is de sleutelinnovatie van T5 (Text-to-Text Transfer Transformer) vergeleken met eerdere modellen?"
        },
        options: [
          { en: "T5 frames all NLP tasks as text-to-text problems, using a unified input-output format", es: "T5 enmarca todas las tareas de PLN como problemas texto-a-texto, usando un formato unificado de entrada-salida", de: "T5 rahmt alle NLP-Aufgaben als Text-zu-Text-Probleme ein und verwendet ein einheitliches Eingabe-Ausgabe-Format", nl: "T5 formuleert alle NLP-taken als tekst-naar-tekst problemen, met een uniform invoer-uitvoerformaat" },
          { en: "T5 uses only convolutional layers", es: "T5 usa solo capas convolucionales", de: "T5 verwendet nur Faltungsschichten", nl: "T5 gebruikt alleen convolutielagen" },
          { en: "T5 cannot handle multiple languages", es: "T5 no puede manejar múltiples idiomas", de: "T5 kann nicht mit mehreren Sprachen umgehen", nl: "T5 kan niet omgaan met meerdere talen" },
          { en: "T5 is trained only on code data", es: "T5 se entrena solo con datos de código", de: "T5 wird nur auf Code-Daten trainiert", nl: "T5 wordt alleen getraind op codedata" }
        ],
        correct: 0,
        explanation: {
          en: "T5's revolutionary approach treats every NLP task as a text-to-text problem. Whether it's translation, summarization, question answering, or classification, T5 converts inputs to text and generates text outputs. For example, sentiment analysis becomes 'sentiment: [input text]' → 'positive/negative'. This unified framework allows a single model to handle diverse tasks and enables better transfer learning across different NLP applications.",
          es: "El enfoque revolucionario de T5 trata cada tarea de PLN como un problema texto-a-texto. Ya sea traducción, resumen, respuesta a preguntas o clasificación, T5 convierte entradas a texto y genera salidas de texto. Por ejemplo, análisis de sentimientos se convierte en 'sentiment: [texto de entrada]' → 'positive/negative'. Este marco unificado permite que un solo modelo maneje tareas diversas y permite mejor aprendizaje de transferencia entre diferentes aplicaciones de PLN.",
          de: "T5s revolutionärer Ansatz behandelt jede NLP-Aufgabe als Text-zu-Text-Problem. Ob Übersetzung, Zusammenfassung, Fragebeantwortung oder Klassifikation, T5 konvertiert Eingaben zu Text und generiert Textausgaben. Zum Beispiel wird Sentimentanalyse zu 'sentiment: [Eingabetext]' → 'positive/negative'. Dieses einheitliche Framework ermöglicht einem einzelnen Modell diverse Aufgaben zu handhaben und ermöglicht besseres Transfer Learning zwischen verschiedenen NLP-Anwendungen.",
          nl: "T5's revolutionaire benadering behandelt elke NLP-taak als een tekst-naar-tekst probleem. Of het nu gaat om vertaling, samenvatting, vraagbeantwoording of classificatie, T5 converteert invoer naar tekst en genereert tekstuitvoer. Bijvoorbeeld, sentimentanalyse wordt 'sentiment: [invoertekst]' → 'positive/negative'. Dit uniforme framework stelt een enkel model in staat om diverse taken aan te pakken en maakt beter transfer learning mogelijk tussen verschillende NLP-toepassingen."
        }
      },
      {
        question: {
          en: "What is few-shot learning in the context of large language models like GPT-3/GPT-4?",
          es: "¿Qué es el aprendizaje de pocos ejemplos en el contexto de grandes modelos de lenguaje como GPT-3/GPT-4?",
          de: "Was ist Few-Shot Learning im Kontext großer Sprachmodelle wie GPT-3/GPT-4?",
          nl: "Wat is few-shot learning in de context van grote taalmodellen zoals GPT-3/GPT-4?"
        },
        options: [
          { en: "The ability to perform new tasks by providing just a few examples in the input prompt, without additional training", es: "La capacidad de realizar nuevas tareas proporcionando solo unos pocos ejemplos en el prompt de entrada, sin entrenamiento adicional", de: "Die Fähigkeit neue Aufgaben zu erfüllen indem nur wenige Beispiele im Eingabeprompt bereitgestellt werden, ohne zusätzliches Training", nl: "Het vermogen om nieuwe taken uit te voeren door slechts enkele voorbeelden in de invoerprompt te geven, zonder aanvullende training" },
          { en: "Training the model for only a few epochs", es: "Entrenar el modelo por solo unas pocas épocas", de: "Das Modell nur für wenige Epochen zu trainieren", nl: "Het model slechts voor enkele epochs trainen" },
          { en: "Using very small datasets for training", es: "Usar conjuntos de datos muy pequeños para entrenamiento", de: "Sehr kleine Datensätze für das Training verwenden", nl: "Zeer kleine datasets gebruiken voor training" },
          { en: "Learning to forget previous knowledge", es: "Aprender a olvidar conocimiento previo", de: "Lernen vorheriges Wissen zu vergessen", nl: "Leren om eerdere kennis te vergeten" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning in large language models refers to their emergent ability to understand and perform new tasks by seeing just a few examples in the context window, without any parameter updates or fine-tuning. For instance, showing GPT-4 three examples of translating English to French, then asking it to translate a new sentence. This capability emerges from the model's extensive pre-training and demonstrates remarkable generalization abilities.",
          es: "El aprendizaje de pocos ejemplos en grandes modelos de lenguaje se refiere a su capacidad emergente de entender y realizar nuevas tareas viendo solo unos pocos ejemplos en la ventana de contexto, sin actualizaciones de parámetros o ajuste fino. Por ejemplo, mostrar a GPT-4 tres ejemplos de traducir inglés a francés, luego pedirle que traduzca una nueva oración. Esta capacidad emerge del extenso pre-entrenamiento del modelo y demuestra habilidades de generalización notables.",
          de: "Few-Shot Learning in großen Sprachmodellen bezieht sich auf ihre emergente Fähigkeit neue Aufgaben zu verstehen und auszuführen indem sie nur wenige Beispiele im Kontextfenster sehen, ohne Parameterupdates oder Feinabstimmung. Zum Beispiel GPT-4 drei Beispiele für die Übersetzung von Englisch ins Französische zu zeigen, dann zu bitten einen neuen Satz zu übersetzen. Diese Fähigkeit entsteht aus dem umfangreichen Vortraining des Modells und zeigt bemerkenswerte Generalisierungsfähigkeiten.",
          nl: "Few-shot learning in grote taalmodellen verwijst naar hun emergente vermogen om nieuwe taken te begrijpen en uit te voeren door slechts enkele voorbeelden in het contextvenster te zien, zonder parameterupdates of fine-tuning. Bijvoorbeeld, GPT-4 drie voorbeelden van Engels naar Frans vertalen laten zien, en dan vragen om een nieuwe zin te vertalen. Dit vermogen ontstaat uit de uitgebreide pre-training van het model en toont opmerkelijke generalisatievaardigheden."
        }
      },
      {
        question: {
          en: "What is BLEU score and why is it important for evaluating NLP models?",
          es: "¿Qué es el puntaje BLEU y por qué es importante para evaluar modelos de PLN?",
          de: "Was ist der BLEU-Score und warum ist er wichtig für die Bewertung von NLP-Modellen?",
          nl: "Wat is BLEU-score en waarom is het belangrijk voor het evalueren van NLP-modellen?"
        },
        options: [
          { en: "A metric that measures the quality of machine-generated text by comparing n-gram overlap with reference texts", es: "Una métrica que mide la calidad del texto generado por máquina comparando la superposición de n-gramas con textos de referencia", de: "Eine Metrik die die Qualität maschinengenerierter Texte misst indem sie N-Gramm-Überlappung mit Referenztexten vergleicht", nl: "Een metriek die de kwaliteit van machine-gegenereerde tekst meet door n-gram overlap te vergelijken met referentieteksten" },
          { en: "A measure of how fast a model can process text", es: "Una medida de qué tan rápido un modelo puede procesar texto", de: "Ein Maß dafür wie schnell ein Modell Text verarbeiten kann", nl: "Een maat voor hoe snel een model tekst kan verwerken" },
          { en: "A count of unique words in the vocabulary", es: "Un conteo de palabras únicas en el vocabulario", de: "Eine Zählung einzigartiger Wörter im Vokabular", nl: "Een telling van unieke woorden in de woordenschat" },
          { en: "A metric for measuring model size", es: "Una métrica para medir el tamaño del modelo", de: "Eine Metrik zur Messung der Modellgröße", nl: "Een metriek voor het meten van modelgrootte" }
        ],
        correct: 0,
        explanation: {
          en: "BLEU (Bilingual Evaluation Understudy) measures translation quality by calculating the overlap of n-grams (1-4 word sequences) between machine-generated text and human reference translations. It provides scores from 0-100, where higher scores indicate better quality. While originally designed for machine translation, BLEU is now used for various text generation tasks. However, it has limitations as it doesn't capture semantic meaning or fluency completely.",
          es: "BLEU (Sustituto de Evaluación Bilingüe) mide la calidad de traducción calculando la superposición de n-gramas (secuencias de 1-4 palabras) entre texto generado por máquina y traducciones de referencia humanas. Proporciona puntuaciones de 0-100, donde puntuaciones más altas indican mejor calidad. Aunque originalmente diseñado para traducción automática, BLEU ahora se usa para varias tareas de generación de texto. Sin embargo, tiene limitaciones ya que no captura completamente el significado semántico o la fluidez.",
          de: "BLEU (Bilingual Evaluation Understudy) misst Übersetzungsqualität durch Berechnung der Überlappung von N-Grammen (1-4 Wortsequenzen) zwischen maschinengeneriertem Text und menschlichen Referenzübersetzungen. Es bietet Scores von 0-100, wo höhere Scores bessere Qualität anzeigen. Obwohl ursprünglich für maschinelle Übersetzung entwickelt, wird BLEU jetzt für verschiedene Textgenerierungsaufgaben verwendet. Es hat jedoch Einschränkungen da es semantische Bedeutung oder Flüssigkeit nicht vollständig erfasst.",
          nl: "BLEU (Bilingual Evaluation Understudy) meet vertalingskwaliteit door de overlap van n-grammen (1-4 woordsequenties) tussen machine-gegenereerde tekst en menselijke referentievertalingen te berekenen. Het geeft scores van 0-100, waarbij hogere scores betere kwaliteit aangeven. Hoewel oorspronkelijk ontworpen voor machinevertaling, wordt BLEU nu gebruikt voor verschillende tekstgeneratietaken. Het heeft echter beperkingen omdat het semantische betekenis of vloeiendheid niet volledig vastlegt."
        }
      },
      {
        question: {
          en: "What is the significance of scaling laws in modern large language models?",
          es: "¿Cuál es la significancia de las leyes de escalamiento en los modelos de lenguaje grandes modernos?",
          de: "Was ist die Bedeutung von Skalierungsgesetzen in modernen großen Sprachmodellen?",
          nl: "Wat is de betekenis van schalingswetten in moderne grote taalmodellen?"
        },
        options: [
          { en: "They describe the predictable relationship between model size, training data, and compute, showing that performance improves with scale", es: "Describen la relación predecible entre tamaño del modelo, datos de entrenamiento y cómputo, mostrando que el rendimiento mejora con la escala", de: "Sie beschreiben die vorhersagbare Beziehung zwischen Modellgröße, Trainingsdaten und Berechnung und zeigen dass Leistung mit Skalierung verbessert", nl: "Ze beschrijven de voorspelbare relatie tussen modelgrootte, trainingsdata en rekenkracht, waarbij wordt aangetoond dat prestaties verbeteren met schaal" },
          { en: "They determine the optimal learning rate for training", es: "Determinan la tasa de aprendizaje óptima para entrenamiento", de: "Sie bestimmen die optimale Lernrate für das Training", nl: "Ze bepalen de optimale leersnelheid voor training" },
          { en: "They measure how fast models can process text", es: "Miden qué tan rápido los modelos pueden procesar texto", de: "Sie messen wie schnell Modelle Text verarbeiten können", nl: "Ze meten hoe snel modellen tekst kunnen verwerken" },
          { en: "They show that smaller models are always better", es: "Muestran que los modelos más pequeños siempre son mejores", de: "Sie zeigen dass kleinere Modelle immer besser sind", nl: "Ze tonen aan dat kleinere modellen altijd beter zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Scaling laws in language models reveal predictable relationships between model parameters, training data size, compute budget, and performance. Research shows that model capabilities improve predictably with scale, following power-law relationships. This has driven the trend toward larger models like GPT-4, Claude, and others. The laws suggest that with sufficient compute and data, even larger models will continue to improve, though recent work explores more efficient scaling approaches.",
          es: "Las leyes de escalamiento en modelos de lenguaje revelan relaciones predecibles entre parámetros del modelo, tamaño de datos de entrenamiento, presupuesto de cómputo y rendimiento. La investigación muestra que las capacidades del modelo mejoran predeciblemente con la escala, siguiendo relaciones de ley de potencia. Esto ha impulsado la tendencia hacia modelos más grandes como GPT-4, Claude y otros. Las leyes sugieren que con suficiente cómputo y datos, modelos aún más grandes continuarán mejorando, aunque trabajo reciente explora enfoques de escalamiento más eficientes.",
          de: "Skalierungsgesetze in Sprachmodellen enthüllen vorhersagbare Beziehungen zwischen Modellparametern, Trainingsdatengröße, Rechenbudget und Leistung. Forschung zeigt dass Modellfähigkeiten vorhersagbar mit Skalierung verbessern und Potenzgesetz-Beziehungen folgen. Dies hat den Trend zu größeren Modellen wie GPT-4, Claude und anderen angetrieben. Die Gesetze legen nahe dass mit ausreichender Berechnung und Daten noch größere Modelle sich weiter verbessern werden, obwohl neuere Arbeit effizientere Skalierungsansätze erforscht.",
          nl: "Schalingswetten in taalmodellen onthullen voorspelbare relaties tussen modelparameters, trainingsdata-omvang, rekenbudget en prestaties. Onderzoek toont aan dat modelcapaciteiten voorspelbaar verbeteren met schaal, volgens machtwet-relaties. Dit heeft de trend naar grotere modellen zoals GPT-4, Claude en anderen aangedreven. De wetten suggereren dat met voldoende rekenkracht en data, nog grotere modellen zullen blijven verbeteren, hoewel recent werk efficiëntere schalingsbenaderingen verkent."
        }
      },
      {
        question: {
          en: "What is masked language modeling (MLM) in BERT?",
          es: "¿Qué es el modelado de lenguaje enmascarado (MLM) en BERT?",
          de: "Was ist maskiertes Sprachmodellierung (MLM) in BERT?",
          nl: "Wat is gemaskeerde taalmodellering (MLM) in BERT?"
        },
        options: [
          { en: "Randomly masking tokens in input text and training the model to predict the original tokens using bidirectional context", es: "Enmascarar aleatoriamente tokens en texto de entrada y entrenar el modelo para predecir los tokens originales usando contexto bidireccional", de: "Zufällig Tokens im Eingabetext maskieren und das Modell trainieren die ursprünglichen Tokens mit bidirektionalem Kontext vorherzusagen", nl: "Willekeurig tokens maskeren in invoertekst en het model trainen om de oorspronkelijke tokens te voorspellen met bidirectionele context" },
          { en: "Using special masks to hide parts of the neural network", es: "Usar máscaras especiales para ocultar partes de la red neuronal", de: "Spezielle Masken verwenden um Teile des neuronalen Netzwerks zu verbergen", nl: "Speciale maskers gebruiken om delen van het neurale netwerk te verbergen" },
          { en: "Applying filters to remove noise from training data", es: "Aplicar filtros para eliminar ruido de datos de entrenamiento", de: "Filter anwenden um Rauschen aus Trainingsdaten zu entfernen", nl: "Filters toepassen om ruis uit trainingsgegevens te verwijderen" },
          { en: "Masking attention weights during inference", es: "Enmascarar pesos de atención durante inferencia", de: "Aufmerksamkeitsgewichte während der Inferenz maskieren", nl: "Aandachtgewichten maskeren tijdens inferentie" }
        ],
        correct: 0,
        explanation: {
          en: "MLM is BERT's core training objective where ~15% of input tokens are randomly masked, and the model learns to predict them using surrounding context from both directions. This enables bidirectional learning unlike traditional left-to-right language models.",
          es: "MLM es el objetivo central de entrenamiento de BERT donde ~15% de tokens de entrada se enmascaran aleatoriamente, y el modelo aprende a predecirlos usando contexto circundante de ambas direcciones. Esto permite aprendizaje bidireccional a diferencia de modelos de lenguaje tradicionales de izquierda a derecha.",
          de: "MLM ist BERTs zentrales Trainingsziel wo ~15% der Eingabetokens zufällig maskiert werden, und das Modell lernt sie mit umgebendem Kontext aus beiden Richtungen vorherzusagen. Dies ermöglicht bidirektionales Lernen anders als traditionelle Links-nach-rechts-Sprachmodelle.",
          nl: "MLM is BERT's kerntrainingsplicht waarbij ~15% van invoertokens willekeurig worden gemaskeerd, en het model leert ze te voorspellen met omringende context uit beide richtingen. Dit maakt bidirectioneel leren mogelijk in tegenstelling tot traditionele links-naar-rechts taalmodellen."
        }
      },
      {
        question: {
          en: "What is next sentence prediction (NSP) in BERT's training?",
          es: "¿Qué es la predicción de siguiente oración (NSP) en el entrenamiento de BERT?",
          de: "Was ist Next Sentence Prediction (NSP) in BERTs Training?",
          nl: "Wat is next sentence prediction (NSP) in BERT's training?"
        },
        options: [
          { en: "A binary classification task where BERT learns to predict if two sentences are consecutive in the original document", es: "Una tarea de clasificación binaria donde BERT aprende a predecir si dos oraciones son consecutivas en el documento original", de: "Eine binäre Klassifikationsaufgabe wo BERT lernt vorherzusagen ob zwei Sätze im ursprünglichen Dokument aufeinanderfolgend sind", nl: "Een binaire classificatietaak waarbij BERT leert te voorspellen of twee zinnen opeenvolgend zijn in het oorspronkelijke document" },
          { en: "Generating the next sentence given a prompt", es: "Generar la siguiente oración dado un prompt", de: "Den nächsten Satz bei gegebenem Prompt generieren", nl: "De volgende zin genereren gegeven een prompt" },
          { en: "Predicting the sentiment of the next sentence", es: "Predecir el sentimiento de la siguiente oración", de: "Das Sentiment des nächsten Satzes vorhersagen", nl: "Het sentiment van de volgende zin voorspellen" },
          { en: "Counting how many sentences follow", es: "Contar cuántas oraciones siguen", de: "Zählen wie viele Sätze folgen", nl: "Tellen hoeveel zinnen volgen" }
        ],
        correct: 0,
        explanation: {
          en: "NSP helps BERT understand relationships between sentences by learning to distinguish actual sentence pairs from random pairs. Though later research questioned its necessity, NSP was part of BERT's original pre-training to capture inter-sentence relationships.",
          es: "NSP ayuda a BERT a entender relaciones entre oraciones aprendiendo a distinguir pares de oraciones reales de pares aleatorios. Aunque investigación posterior cuestionó su necesidad, NSP fue parte del pre-entrenamiento original de BERT para capturar relaciones entre oraciones.",
          de: "NSP hilft BERT Beziehungen zwischen Sätzen zu verstehen durch Lernen echte Satzpaare von zufälligen Paaren zu unterscheiden. Obwohl spätere Forschung seine Notwendigkeit hinterfragte, war NSP Teil von BERTs ursprünglichem Vortraining um Zwischensatz-Beziehungen zu erfassen.",
          nl: "NSP helpt BERT relaties tussen zinnen te begrijpen door te leren werkelijke zinsparen te onderscheiden van willekeurige paren. Hoewel later onderzoek de noodzaak ervan in twijfel trok, was NSP deel van BERT's oorspronkelijke pre-training om intersententieële relaties vast te leggen."
        }
      },
      {
        question: {
          en: "What is the difference between encoder and decoder Transformers?",
          es: "¿Cuál es la diferencia entre Transformadores codificador y decodificador?",
          de: "Was ist der Unterschied zwischen Encoder- und Decoder-Transformern?",
          nl: "Wat is het verschil tussen encoder en decoder Transformers?"
        },
        options: [
          { en: "Encoders use bidirectional self-attention to understand input, decoders use masked self-attention for sequential generation", es: "Los codificadores usan auto-atención bidireccional para entender entrada, los decodificadores usan auto-atención enmascarada para generación secuencial", de: "Encoder verwenden bidirektionale Selbstaufmerksamkeit zum Verstehen der Eingabe, Decoder verwenden maskierte Selbstaufmerksamkeit für sequenzielle Generierung", nl: "Encoders gebruiken bidirectionele zelf-aandacht om invoer te begrijpen, decoders gebruiken gemaskeerde zelf-aandacht voor sequentiële generatie" },
          { en: "Encoders are faster than decoders", es: "Los codificadores son más rápidos que los decodificadores", de: "Encoder sind schneller als Decoder", nl: "Encoders zijn sneller dan decoders" },
          { en: "Encoders work with text, decoders work with images", es: "Los codificadores funcionan con texto, los decodificadores con imágenes", de: "Encoder arbeiten mit Text, Decoder arbeiten mit Bildern", nl: "Encoders werken met tekst, decoders werken met afbeeldingen" },
          { en: "Encoders compress data, decoders expand it", es: "Los codificadores comprimen datos, los decodificadores los expanden", de: "Encoder komprimieren Daten, Decoder erweitern sie", nl: "Encoders comprimeren data, decoders breiden het uit" }
        ],
        correct: 0,
        explanation: {
          en: "Encoder Transformers (like BERT) use bidirectional self-attention to build rich representations of input sequences. Decoder Transformers (like GPT) use masked self-attention that prevents looking at future tokens, enabling autoregressive generation.",
          es: "Los Transformadores codificadores (como BERT) usan auto-atención bidireccional para construir representaciones ricas de secuencias de entrada. Los Transformadores decodificadores (como GPT) usan auto-atención enmascarada que previene mirar tokens futuros, permitiendo generación autoregresiva.",
          de: "Encoder-Transformer (wie BERT) verwenden bidirektionale Selbstaufmerksamkeit um reiche Repräsentationen von Eingabesequenzen zu erstellen. Decoder-Transformer (wie GPT) verwenden maskierte Selbstaufmerksamkeit die das Betrachten zukünftiger Tokens verhindert, ermöglicht autoregressive Generierung.",
          nl: "Encoder Transformers (zoals BERT) gebruiken bidirectionele zelf-aandacht om rijke representaties van invoersequenties te bouwen. Decoder Transformers (zoals GPT) gebruiken gemaskeerde zelf-aandacht die voorkomt dat naar toekomstige tokens wordt gekeken, maakt autoregressieve generatie mogelijk."
        }
      },
      {
        question: {
          en: "What is the purpose of special tokens like [CLS] and [SEP] in BERT?",
          es: "¿Cuál es el propósito de tokens especiales como [CLS] y [SEP] en BERT?",
          de: "Was ist der Zweck spezieller Tokens wie [CLS] und [SEP] in BERT?",
          nl: "Wat is het doel van speciale tokens zoals [CLS] en [SEP] in BERT?"
        },
        options: [
          { en: "[CLS] provides a sequence-level representation for classification, [SEP] separates different segments or sentences", es: "[CLS] proporciona una representación a nivel de secuencia para clasificación, [SEP] separa diferentes segmentos u oraciones", de: "[CLS] bietet eine Repräsentation auf Sequenzebene für Klassifikation, [SEP] trennt verschiedene Segmente oder Sätze", nl: "[CLS] biedt een representatie op sequentieniveau voor classificatie, [SEP] scheidt verschillende segmenten of zinnen" },
          { en: "They mark the beginning and end of every word", es: "Marcan el inicio y fin de cada palabra", de: "Sie markieren Anfang und Ende jedes Wortes", nl: "Ze markeren het begin en einde van elk woord" },
          { en: "They indicate punctuation in the text", es: "Indican puntuación en el texto", de: "Sie zeigen Interpunktion im Text an", nl: "Ze geven interpunctie in de tekst aan" },
          { en: "They represent unknown vocabulary items", es: "Representan elementos de vocabulario desconocidos", de: "Sie repräsentieren unbekannte Vokabularelemente", nl: "Ze vertegenwoordigen onbekende vocabulaire-items" }
        ],
        correct: 0,
        explanation: {
          en: "[CLS] is added at the beginning of every input sequence and its final hidden state is used for sequence-level classification tasks. [SEP] separates different text segments, helping BERT understand sentence boundaries and relationships.",
          es: "[CLS] se añade al inicio de cada secuencia de entrada y su estado oculto final se usa para tareas de clasificación a nivel de secuencia. [SEP] separa diferentes segmentos de texto, ayudando a BERT a entender límites y relaciones de oraciones.",
          de: "[CLS] wird am Anfang jeder Eingabesequenz hinzugefügt und sein finaler versteckter Zustand wird für Klassifikationsaufgaben auf Sequenzebene verwendet. [SEP] trennt verschiedene Textsegmente und hilft BERT Satzgrenzen und Beziehungen zu verstehen.",
          nl: "[CLS] wordt toegevoegd aan het begin van elke invoersequentie en zijn finale verborgen toestand wordt gebruikt voor classificatietaken op sequentieniveau. [SEP] scheidt verschillende tekstsegmenten, helpt BERT zinsgrenzen en relaties te begrijpen."
        }
      },
      {
        question: {
          en: "What is the key difference between autoregressive and autoencoding language models?",
          es: "¿Cuál es la diferencia clave entre modelos de lenguaje autoregresivos y autocodificadores?",
          de: "Was ist der Hauptunterschied zwischen autoregressiven und autoenkodierenden Sprachmodellen?",
          nl: "Wat is het belangrijkste verschil tussen autoregressieve en autocoderende taalmodellen?"
        },
        options: [
          { en: "Autoregressive models predict next tokens sequentially (GPT), autoencoding models reconstruct masked tokens bidirectionally (BERT)", es: "Los modelos autoregresivos predicen tokens siguientes secuencialmente (GPT), los modelos autocodificadores reconstruyen tokens enmascarados bidireccionalmente (BERT)", de: "Autoregressive Modelle sagen nächste Tokens sequenziell vorher (GPT), autoenkodiergende Modelle rekonstruieren maskierte Tokens bidirektional (BERT)", nl: "Autoregressieve modellen voorspellen volgende tokens sequentieel (GPT), autocoderende modellen reconstrueren gemaskeerde tokens bidirectioneel (BERT)" },
          { en: "Autoregressive models are larger than autoencoding models", es: "Los modelos autoregresivos son más grandes que los modelos autocodificadores", de: "Autoregressive Modelle sind größer als autoenkodiergende Modelle", nl: "Autoregressieve modellen zijn groter dan autocoderende modellen" },
          { en: "Autoregressive models work only with numbers", es: "Los modelos autoregresivos funcionan solo con números", de: "Autoregressive Modelle funktionieren nur mit Zahlen", nl: "Autoregressieve modellen werken alleen met getallen" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellos", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Autoregressive models like GPT generate text left-to-right, predicting each token based on previous tokens only. Autoencoding models like BERT use bidirectional context to reconstruct corrupted inputs, making them excellent for understanding tasks.",
          es: "Los modelos autoregresivos como GPT generan texto de izquierda a derecha, prediciendo cada token basado solo en tokens previos. Los modelos autocodificadores como BERT usan contexto bidireccional para reconstruir entradas corruptas, haciéndolos excelentes para tareas de comprensión.",
          de: "Autoregressive Modelle wie GPT generieren Text links-nach-rechts und sagen jeden Token nur basierend auf vorherigen Tokens vorher. Autoenkodiergende Modelle wie BERT verwenden bidirektionalen Kontext um korrumpierte Eingaben zu rekonstruieren, macht sie exzellent für Verständnisaufgaben.",
          nl: "Autoregressieve modellen zoals GPT genereren tekst van links naar rechts, voorspellen elk token gebaseerd op alleen vorige tokens. Autocoderende modellen zoals BERT gebruiken bidirectionele context om gecorrumpeerde invoer te reconstrueren, maakt ze uitstekend voor begripsaken."
        }
      },
      {
        question: {
          en: "What are the main components of the original Transformer architecture?",
          es: "¿Cuáles son los componentes principales de la arquitectura Transformer original?",
          de: "Was sind die Hauptkomponenten der ursprünglichen Transformer-Architektur?",
          nl: "Wat zijn de hoofdcomponenten van de oorspronkelijke Transformer-architectuur?"
        },
        options: [
          { en: "Encoder stack, decoder stack, multi-head attention, position-wise feedforward networks, and positional encoding", es: "Pila de codificadores, pila de decodificadores, atención multi-cabeza, redes feedforward posicionales, y codificación posicional", de: "Encoder-Stapel, Decoder-Stapel, Multi-Head-Attention, positionsweise Feedforward-Netzwerke und Positionskodierung", nl: "Encoder stack, decoder stack, multi-head attention, positionele feedforward netwerken, en positionele encoding" },
          { en: "Only recurrent neural networks", es: "Solo redes neuronales recurrentes", de: "Nur rekurrente neuronale Netzwerke", nl: "Alleen recurrente neurale netwerken" },
          { en: "Convolutional layers and pooling operations", es: "Capas convolucionales y operaciones de pooling", de: "Faltungsschichten und Pooling-Operationen", nl: "Convolutielagen en pooling-operaties" },
          { en: "Simple feedforward networks only", es: "Solo redes feedforward simples", de: "Nur einfache Feedforward-Netzwerke", nl: "Alleen eenvoudige feedforward netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "The original Transformer has an encoder-decoder architecture with 6 layers each. Key components include multi-head self-attention, cross-attention, position-wise feedforward networks, residual connections, layer normalization, and positional encoding to handle sequence order.",
          es: "El Transformer original tiene una arquitectura codificador-decodificador con 6 capas cada uno. Los componentes clave incluyen auto-atención multi-cabeza, atención cruzada, redes feedforward posicionales, conexiones residuales, normalización de capa, y codificación posicional para manejar orden de secuencia.",
          de: "Der ursprüngliche Transformer hat eine Encoder-Decoder-Architektur mit je 6 Schichten. Schlüsselkomponenten umfassen Multi-Head-Selbstaufmerksamkeit, Cross-Attention, positionsweise Feedforward-Netzwerke, Residualverbindungen, Schichtnormalisierung und Positionskodierung um Sequenzreihenfolge zu handhaben.",
          nl: "De oorspronkelijke Transformer heeft een encoder-decoder architectuur met elk 6 lagen. Belangrijke componenten omvatten multi-head zelf-aandacht, cross-attention, positionele feedforward netwerken, residuele verbindingen, laagnormalisatie, en positionele encoding om sequentievolgorde te behandelen."
        }
      },
      {
        question: {
          en: "What is the purpose of layer normalization in Transformers?",
          es: "¿Cuál es el propósito de la normalización de capa en Transformadores?",
          de: "Was ist der Zweck der Schichtnormalisierung in Transformern?",
          nl: "Wat is het doel van laagnormalisatie in Transformers?"
        },
        options: [
          { en: "Stabilizing training by normalizing activations across features, reducing internal covariate shift and enabling deeper networks", es: "Estabilizar entrenamiento normalizando activaciones a través de características, reduciendo cambio de covariable interno y permitiendo redes más profundas", de: "Training stabilisieren durch Normalisierung von Aktivierungen über Features, reduziert interne Kovariatenv erschiebung und ermöglicht tiefere Netzwerke", nl: "Training stabiliseren door activaties te normaliseren over features, vermindert interne covariate shift en maakt diepere netwerken mogelijk" },
          { en: "Reducing the number of parameters in the model", es: "Reducir el número de parámetros en el modelo", de: "Die Anzahl der Parameter im Modell reduzieren", nl: "Het aantal parameters in het model verminderen" },
          { en: "Speeding up inference time", es: "Acelerar tiempo de inferencia", de: "Inferenzzeit beschleunigen", nl: "Inferentietijd versnellen" },
          { en: "Converting text to numerical values", es: "Convertir texto a valores numéricos", de: "Text in numerische Werte umwandeln", nl: "Tekst omzetten naar numerieke waarden" }
        ],
        correct: 0,
        explanation: {
          en: "Layer normalization normalizes inputs across the feature dimension for each training example, stabilizing training dynamics and allowing effective training of very deep Transformer networks. It's applied before or after sub-layers along with residual connections.",
          es: "La normalización de capa normaliza entradas a través de la dimensión de características para cada ejemplo de entrenamiento, estabilizando dinámicas de entrenamiento y permitiendo entrenamiento efectivo de redes Transformer muy profundas. Se aplica antes o después de sub-capas junto con conexiones residuales.",
          de: "Schichtnormalisierung normalisiert Eingaben über die Feature-Dimension für jedes Trainingsbeispiel, stabilisiert Trainingsdynamiken und ermöglicht effektives Training sehr tiefer Transformer-Netzwerke. Sie wird vor oder nach Unterschichten zusammen mit Residualverbindungen angewendet.",
          nl: "Laagnormalisatie normaliseert invoer over de feature-dimensie voor elk trainingsvoorbeeld, stabiliseert trainingsdynamiek en maakt effectieve training van zeer diepe Transformer-netwerken mogelijk. Het wordt toegepast voor of na sublagen samen met residuele verbindingen."
        }
      },
      {
        question: {
          en: "What is the role of residual connections in Transformers?",
          es: "¿Cuál es el papel de las conexiones residuales en Transformadores?",
          de: "Was ist die Rolle von Residualverbindungen in Transformern?",
          nl: "Wat is de rol van residuele verbindingen in Transformers?"
        },
        options: [
          { en: "Allowing gradients to flow directly through the network, preventing vanishing gradients and enabling training of deep models", es: "Permitir que gradientes fluyan directamente a través de la red, previniendo gradientes que desaparecen y permitiendo entrenamiento de modelos profundos", de: "Gradienten ermöglichen direkt durch das Netzwerk zu fließen, verhindert verschwindende Gradienten und ermöglicht Training tiefer Modelle", nl: "Gradiënten toestaan direct door het netwerk te stromen, voorkomt verdwijnende gradiënten en maakt training van diepe modellen mogelijk" },
          { en: "Reducing computational complexity", es: "Reducir complejidad computacional", de: "Rechnerische Komplexität reduzieren", nl: "Computationele complexiteit verminderen" },
          { en: "Adding more parameters to the model", es: "Añadir más parámetros al modelo", de: "Mehr Parameter zum Modell hinzufügen", nl: "Meer parameters aan het model toevoegen" },
          { en: "Converting between different data types", es: "Convertir entre diferentes tipos de datos", de: "Zwischen verschiedenen Datentypen konvertieren", nl: "Converteren tussen verschillende gegevenstypen" }
        ],
        correct: 0,
        explanation: {
          en: "Residual connections (skip connections) add the input of a sub-layer to its output, creating shortcuts that help gradients flow through deep networks. This addresses the vanishing gradient problem and enables training of much deeper Transformer models.",
          es: "Las conexiones residuales (conexiones de salto) añaden la entrada de una sub-capa a su salida, creando atajos que ayudan a los gradientes a fluir a través de redes profundas. Esto aborda el problema del gradiente que desaparece y permite entrenamiento de modelos Transformer mucho más profundos.",
          de: "Residualverbindungen (Skip-Verbindungen) addieren die Eingabe einer Unterschicht zu ihrer Ausgabe, erstellen Abkürzungen die Gradienten helfen durch tiefe Netzwerke zu fließen. Dies adressiert das Problem verschwindender Gradienten und ermöglicht Training viel tieferer Transformer-Modelle.",
          nl: "Residuele verbindingen (skip-verbindingen) voegen de invoer van een sublaag toe aan zijn uitvoer, creëren snelkoppelingen die gradiënten helpen door diepe netwerken te stromen. Dit pakt het probleem van verdwijnende gradiënten aan en maakt training van veel diepere Transformer-modellen mogelijk."
        }
      },
      {
        question: {
          en: "What is the difference between absolute and relative positional encoding?",
          es: "¿Cuál es la diferencia entre codificación posicional absoluta y relativa?",
          de: "Was ist der Unterschied zwischen absoluter und relativer Positionskodierung?",
          nl: "Wat is het verschil tussen absolute en relatieve positionele encoding?"
        },
        options: [
          { en: "Absolute encoding assigns fixed position embeddings, relative encoding represents relationships between token positions", es: "La codificación absoluta asigna incrustaciones de posición fijas, la codificación relativa representa relaciones entre posiciones de tokens", de: "Absolute Kodierung weist feste Positionsembeddings zu, relative Kodierung repräsentiert Beziehungen zwischen Token-Positionen", nl: "Absolute encoding wijst vaste positie-embeddings toe, relatieve encoding vertegenwoordigt relaties tussen tokenposities" },
          { en: "Absolute encoding is more accurate than relative", es: "La codificación absoluta es más precisa que la relativa", de: "Absolute Kodierung ist genauer als relative", nl: "Absolute encoding is nauwkeuriger dan relatieve" },
          { en: "Relative encoding uses more computational resources", es: "La codificación relativa usa más recursos computacionales", de: "Relative Kodierung verwendet mehr Rechenressourcen", nl: "Relatieve encoding gebruikt meer computationele bronnen" },
          { en: "They are exactly the same method", es: "Son exactamente el mismo método", de: "Sie sind genau dieselbe Methode", nl: "Het zijn precies dezelfde methode" }
        ],
        correct: 0,
        explanation: {
          en: "Absolute positional encoding (like in the original Transformer) adds fixed position-specific embeddings to token embeddings. Relative positional encoding focuses on the relationships between positions, which can generalize better to longer sequences than seen during training.",
          es: "La codificación posicional absoluta (como en el Transformer original) añade incrustaciones específicas de posición fijas a incrustaciones de tokens. La codificación posicional relativa se enfoca en las relaciones entre posiciones, lo que puede generalizar mejor a secuencias más largas que las vistas durante entrenamiento.",
          de: "Absolute Positionskodierung (wie im ursprünglichen Transformer) fügt feste positionsspezifische Embeddings zu Token-Embeddings hinzu. Relative Positionskodierung konzentriert sich auf Beziehungen zwischen Positionen, was besser zu längeren Sequenzen generalisieren kann als während des Trainings gesehen.",
          nl: "Absolute positionele encoding (zoals in de oorspronkelijke Transformer) voegt vaste positiespecifieke embeddings toe aan token-embeddings. Relatieve positionele encoding richt zich op de relaties tussen posities, wat beter kan generaliseren naar langere sequenties dan gezien tijdens training."
        }
      },
      {
        question: {
          en: "What is the purpose of warmup in Transformer training?",
          es: "¿Cuál es el propósito del calentamiento en entrenamiento de Transformadores?",
          de: "Was ist der Zweck von Warmup im Transformer-Training?",
          nl: "Wat is het doel van warmup in Transformer-training?"
        },
        options: [
          { en: "Gradually increasing the learning rate from zero to avoid unstable training in the early stages", es: "Aumentar gradualmente la tasa de aprendizaje desde cero para evitar entrenamiento inestable en las etapas tempranas", de: "Die Lernrate schrittweise von null erhöhen um instabiles Training in frühen Phasen zu vermeiden", nl: "Geleidelijk de leersnelheid verhogen vanaf nul om onstabiele training in de vroege stadia te vermijden" },
          { en: "Heating up the GPU for better performance", es: "Calentar la GPU para mejor rendimiento", de: "Die GPU aufheizen für bessere Leistung", nl: "De GPU opwarmen voor betere prestaties" },
          { en: "Loading the model parameters before training", es: "Cargar los parámetros del modelo antes del entrenamiento", de: "Die Modellparameter vor dem Training laden", nl: "De modelparameters laden voor training" },
          { en: "Testing the model on validation data first", es: "Probar el modelo en datos de validación primero", de: "Das Modell zuerst auf Validierungsdaten testen", nl: "Het model eerst testen op validatiegegevens" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate warmup starts with a very small learning rate and gradually increases it over the first few thousand steps. This prevents the large gradients that can occur early in training from destabilizing the optimization process in deep Transformer models.",
          es: "El calentamiento de tasa de aprendizaje comienza con una tasa de aprendizaje muy pequeña y la aumenta gradualmente durante los primeros miles de pasos. Esto previene que los gradientes grandes que pueden ocurrir temprano en el entrenamiento desestabilicen el proceso de optimización en modelos Transformer profundos.",
          de: "Lernraten-Warmup beginnt mit einer sehr kleinen Lernrate und erhöht sie schrittweise über die ersten tausend Schritte. Dies verhindert dass große Gradienten die früh im Training auftreten können den Optimierungsprozess in tiefen Transformer-Modellen destabilisieren.",
          nl: "Leersnelheid warmup begint met een zeer kleine leersnelheid en verhoogt deze geleidelijk gedurende de eerste duizenden stappen. Dit voorkomt dat grote gradiënten die vroeg in de training kunnen optreden het optimalisatieproces in diepe Transformer-modellen destabiliseren."
        }
      },
      {
        question: {
          en: "What is teacher forcing in sequence-to-sequence models?",
          es: "¿Qué es el forzado de profesor en modelos secuencia-a-secuencia?",
          de: "Was ist Teacher Forcing in Sequenz-zu-Sequenz-Modellen?",
          nl: "Wat is teacher forcing in sequentie-naar-sequentie modellen?"
        },
        options: [
          { en: "Using ground truth tokens as inputs during training instead of the model's own predictions to speed up training", es: "Usar tokens de verdad fundamental como entradas durante entrenamiento en lugar de las predicciones del propio modelo para acelerar entrenamiento", de: "Ground-Truth-Tokens als Eingaben während des Trainings verwenden anstelle der eigenen Vorhersagen des Modells um Training zu beschleunigen", nl: "Ground truth tokens gebruiken als invoer tijdens training in plaats van de eigen voorspellingen van het model om training te versnellen" },
          { en: "Having a human teacher supervise the training process", es: "Tener un maestro humano supervisar el proceso de entrenamiento", de: "Einen menschlichen Lehrer den Trainingsprozess überwachen lassen", nl: "Een menselijke leraar het trainingsproces laten superviseren" },
          { en: "Forcing the model to learn faster", es: "Forzar al modelo a aprender más rápido", de: "Das Modell zwingen schneller zu lernen", nl: "Het model dwingen sneller te leren" },
          { en: "Using only the best training examples", es: "Usar solo los mejores ejemplos de entrenamiento", de: "Nur die besten Trainingsbeispiele verwenden", nl: "Alleen de beste trainingsvoorbeelden gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Teacher forcing feeds the correct target tokens as input to the decoder during training, rather than using the decoder's own predictions. This makes training faster and more stable, but can create a mismatch between training and inference (exposure bias).",
          es: "El forzado de profesor alimenta los tokens objetivo correctos como entrada al decodificador durante entrenamiento, en lugar de usar las predicciones propias del decodificador. Esto hace el entrenamiento más rápido y estable, pero puede crear una discrepancia entre entrenamiento e inferencia (sesgo de exposición).",
          de: "Teacher Forcing füttert die korrekten Ziel-Tokens als Eingabe an den Decoder während des Trainings, anstatt die eigenen Vorhersagen des Decoders zu verwenden. Dies macht Training schneller und stabiler, kann aber eine Diskrepanz zwischen Training und Inferenz schaffen (Exposure Bias).",
          nl: "Teacher forcing voedt de juiste doeltokens als invoer naar de decoder tijdens training, in plaats van de eigen voorspellingen van de decoder te gebruiken. Dit maakt training sneller en stabieler, maar kan een mismatch creëren tussen training en inferentie (exposure bias)."
        }
      },
      {
        question: {
          en: "What is the attention mechanism's computational complexity?",
          es: "¿Cuál es la complejidad computacional del mecanismo de atención?",
          de: "Was ist die rechnerische Komplexität des Aufmerksamkeitsmechanismus?",
          nl: "Wat is de computationele complexiteit van het aandachtmechanisme?"
        },
        options: [
          { en: "O(n²) where n is the sequence length, due to computing attention between all pairs of positions", es: "O(n²) donde n es la longitud de secuencia, debido a computar atención entre todos los pares de posiciones", de: "O(n²) wo n die Sequenzlänge ist, aufgrund der Berechnung von Aufmerksamkeit zwischen allen Positionspaaren", nl: "O(n²) waarbij n de sequentielengte is, vanwege het berekenen van aandacht tussen alle paren van posities" },
          { en: "O(n) linear complexity", es: "Complejidad lineal O(n)", de: "Lineare Komplexität O(n)", nl: "Lineaire complexiteit O(n)" },
          { en: "O(log n) logarithmic complexity", es: "Complejidad logarítmica O(log n)", de: "Logarithmische Komplexität O(log n)", nl: "Logaritmische complexiteit O(log n)" },
          { en: "O(1) constant complexity", es: "Complejidad constante O(1)", de: "Konstante Komplexität O(1)", nl: "Constante complexiteit O(1)" }
        ],
        correct: 0,
        explanation: {
          en: "Standard self-attention has quadratic complexity O(n²) because it computes attention weights between every pair of positions in the sequence. This becomes a bottleneck for very long sequences, leading to research on efficient attention variants.",
          es: "La auto-atención estándar tiene complejidad cuadrática O(n²) porque computa pesos de atención entre cada par de posiciones en la secuencia. Esto se convierte en un cuello de botella para secuencias muy largas, llevando a investigación en variantes de atención eficientes.",
          de: "Standard-Selbstaufmerksamkeit hat quadratische Komplexität O(n²) weil sie Aufmerksamkeitsgewichte zwischen jedem Positionspaar in der Sequenz berechnet. Dies wird ein Flaschenhals für sehr lange Sequenzen, führt zu Forschung über effiziente Aufmerksamkeitsvarianten.",
          nl: "Standaard zelf-aandacht heeft kwadratische complexiteit O(n²) omdat het aandachtgewichten berekent tussen elk paar posities in de sequentie. Dit wordt een knelpunt voor zeer lange sequenties, leidt tot onderzoek naar efficiënte aandachtvarianten."
        }
      },
      {
        question: {
          en: "What is the difference between sparse and dense attention patterns?",
          es: "¿Cuál es la diferencia entre patrones de atención dispersos y densos?",
          de: "Was ist der Unterschied zwischen spärlichen und dichten Aufmerksamkeitsmustern?",
          nl: "Wat is het verschil tussen schaarse en dichte aandachtpatronen?"
        },
        options: [
          { en: "Dense attention connects all positions, sparse attention only connects selected positions to reduce computational cost", es: "La atención densa conecta todas las posiciones, la atención dispersa solo conecta posiciones seleccionadas para reducir costo computacional", de: "Dichte Aufmerksamkeit verbindet alle Positionen, spärliche Aufmerksamkeit verbindet nur ausgewählte Positionen um Rechenkosten zu reduzieren", nl: "Dichte aandacht verbindt alle posities, schaarse aandacht verbindt alleen geselecteerde posities om rekenkosten te verminderen" },
          { en: "Dense attention is faster than sparse attention", es: "La atención densa es más rápida que la atención dispersa", de: "Dichte Aufmerksamkeit ist schneller als spärliche Aufmerksamkeit", nl: "Dichte aandacht is sneller dan schaarse aandacht" },
          { en: "Sparse attention produces better results", es: "La atención dispersa produce mejores resultados", de: "Spärliche Aufmerksamkeit produziert bessere Ergebnisse", nl: "Schaarse aandacht produceert betere resultaten" },
          { en: "They refer to different model sizes", es: "Se refieren a diferentes tamaños de modelo", de: "Sie beziehen sich auf verschiedene Modellgrößen", nl: "Ze verwijzen naar verschillende modelgroottes" }
        ],
        correct: 0,
        explanation: {
          en: "Dense attention (standard Transformer) computes attention between all position pairs, leading to O(n²) complexity. Sparse attention patterns like local windows, strided patterns, or learned sparsity reduce this to enable processing of longer sequences efficiently.",
          es: "La atención densa (Transformer estándar) computa atención entre todos los pares de posiciones, llevando a complejidad O(n²). Los patrones de atención dispersa como ventanas locales, patrones escalonados, o dispersión aprendida reducen esto para permitir procesamiento eficiente de secuencias más largas.",
          de: "Dichte Aufmerksamkeit (Standard-Transformer) berechnet Aufmerksamkeit zwischen allen Positionspaaren, führt zu O(n²) Komplexität. Spärliche Aufmerksamkeitsmuster wie lokale Fenster, gestaffelte Muster oder gelernte Spärlichkeit reduzieren dies um effiziente Verarbeitung längerer Sequenzen zu ermöglichen.",
          nl: "Dichte aandacht (standaard Transformer) berekent aandacht tussen alle positieparen, leidt tot O(n²) complexiteit. Schaarse aandachtpatronen zoals lokale vensters, gelaagde patronen, of geleerde schaarste verminderen dit om efficiënte verwerking van langere sequenties mogelijk te maken."
        }
      },
      {
        question: {
          en: "What is gradient accumulation in Transformer training?",
          es: "¿Qué es la acumulación de gradientes en entrenamiento de Transformadores?",
          de: "Was ist Gradientenakkumulation im Transformer-Training?",
          nl: "Wat is gradiëntaccumulatie in Transformer-training?"
        },
        options: [
          { en: "Computing gradients over multiple mini-batches before updating parameters, simulating larger batch sizes with limited memory", es: "Computar gradientes sobre múltiples mini-lotes antes de actualizar parámetros, simulando tamaños de lote más grandes con memoria limitada", de: "Gradienten über mehrere Mini-Batches berechnen vor Parameterupdates, simuliert größere Batch-Größen mit begrenztem Speicher", nl: "Gradiënten berekenen over meerdere mini-batches voordat parameters worden bijgewerkt, simuleert grotere batch-groottes met beperkt geheugen" },
          { en: "Saving gradients for later analysis", es: "Guardar gradientes para análisis posterior", de: "Gradienten für spätere Analyse speichern", nl: "Gradiënten opslaan voor latere analyse" },
          { en: "Adding noise to gradients", es: "Añadir ruido a gradientes", de: "Rauschen zu Gradienten hinzufügen", nl: "Ruis toevoegen aan gradiënten" },
          { en: "Clipping gradients to prevent explosion", es: "Recortar gradientes para prevenir explosión", de: "Gradienten beschneiden um Explosion zu verhindern", nl: "Gradiënten afkappen om explosie te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient accumulation allows training with effectively larger batch sizes by accumulating gradients over several forward passes before performing a parameter update. This is crucial when GPU memory limits prevent using large batches directly.",
          es: "La acumulación de gradientes permite entrenar con tamaños de lote efectivamente más grandes acumulando gradientes sobre varios pases hacia adelante antes de realizar una actualización de parámetros. Esto es crucial cuando los límites de memoria GPU previenen usar lotes grandes directamente.",
          de: "Gradientenakkumulation ermöglicht Training mit effektiv größeren Batch-Größen durch Akkumulierung von Gradienten über mehrere Vorwärtsdurchläufe vor einem Parameterupdate. Dies ist entscheidend wenn GPU-Speicherlimits die direkte Verwendung großer Batches verhindern.",
          nl: "Gradiëntaccumulatie maakt training mogelijk met effectief grotere batch-groottes door gradiënten te accumuleren over verschillende voorwaartse doorlopen voordat een parameterupdate wordt uitgevoerd. Dit is cruciaal wanneer GPU-geheugenlimieten het direct gebruik van grote batches verhinderen."
        }
      },
      {
        question: {
          en: "What is the purpose of dropout in Transformer models?",
          es: "¿Cuál es el propósito del dropout en modelos Transformer?",
          de: "Was ist der Zweck von Dropout in Transformer-Modellen?",
          nl: "Wat is het doel van dropout in Transformer-modellen?"
        },
        options: [
          { en: "Randomly setting some neurons to zero during training to prevent overfitting and improve generalization", es: "Establecer aleatoriamente algunas neuronas a cero durante entrenamiento para prevenir sobreajuste y mejorar generalización", de: "Zufällig einige Neuronen auf null setzen während des Trainings um Überanpassung zu verhindern und Generalisierung zu verbessern", nl: "Willekeurig enkele neuronen op nul zetten tijdens training om overfitting te voorkomen en generalisatie te verbeteren" },
          { en: "Removing entire layers from the model", es: "Eliminar capas enteras del modelo", de: "Ganze Schichten aus dem Modell entfernen", nl: "Hele lagen uit het model verwijderen" },
          { en: "Reducing the learning rate gradually", es: "Reducir la tasa de aprendizaje gradualmente", de: "Die Lernrate schrittweise reduzieren", nl: "De leersnelheid geleidelijk verminderen" },
          { en: "Stopping training early", es: "Detener entrenamiento temprano", de: "Training früh stoppen", nl: "Training vroeg stoppen" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout randomly zeroes out a fraction of neurons during training, forcing the model to rely on different pathways and preventing overfitting. In Transformers, dropout is typically applied to attention weights and feedforward layers.",
          es: "El dropout pone aleatoriamente a cero una fracción de neuronas durante entrenamiento, forzando al modelo a depender de diferentes rutas y previniendo sobreajuste. En Transformadores, el dropout típicamente se aplica a pesos de atención y capas feedforward.",
          de: "Dropout setzt zufällig einen Bruchteil von Neuronen auf null während des Trainings, zwingt das Modell verschiedene Pfade zu nutzen und verhindert Überanpassung. In Transformern wird Dropout typischerweise auf Aufmerksamkeitsgewichte und Feedforward-Schichten angewendet.",
          nl: "Dropout zet willekeurig een fractie van neuronen op nul tijdens training, dwingt het model om verschillende paden te gebruiken en voorkomt overfitting. In Transformers wordt dropout typisch toegepast op aandachtgewichten en feedforward lagen."
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
