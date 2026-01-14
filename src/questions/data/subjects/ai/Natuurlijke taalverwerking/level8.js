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
          { en: "Autoregressive models are larger than autoencoding models", es: "Los modelos autoregresivos son más grandes que los modelos autocodificadores", de: "Autoregressive Modelle sind größer als autoenkodierende Modelle", nl: "Autoregressieve modellen zijn groter dan autocoderende modellen" },
          { en: "Autoregressive models work only with numbers", es: "Los modelos autoregresivos funcionan solo con números", de: "Autoregressive Modelle funktionieren nur mit Zahlen", nl: "Autoregressieve modellen werken alleen met getallen" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellos", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Autoregressive models like GPT generate text left-to-right, predicting each token based on previous tokens only. Autoencoding models like BERT use bidirectional context to reconstruct corrupted inputs, making them excellent for understanding tasks.",
          es: "Los modelos autoregresivos como GPT generan texto de izquierda a derecha, prediciendo cada token basado solo en tokens previos. Los modelos autocodificadores como BERT usan contexto bidireccional para reconstruir entradas corruptas, haciéndolos excelentes para tareas de comprensión.",
          de: "Autoregressive Modelle wie GPT generieren Text links-nach-rechts und sagen jeden Token nur basierend auf vorherigen Tokens vorher. Autoenkodierende Modelle wie BERT verwenden bidirektionalen Kontext um korrumpierte Eingaben zu rekonstruieren, macht sie exzellent für Verständnisaufgaben.",
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
      },
      {
        question: {
          en: "What is causal masking in decoder Transformers?",
          es: "¿Qué es el enmascaramiento causal en Transformadores decodificadores?",
          de: "Was ist kausales Maskieren in Decoder-Transformern?",
          nl: "Wat is causale maskering in decoder Transformers?"
        },
        options: [
          { en: "Preventing attention to future tokens to maintain autoregressive property and ensure each token can only attend to previous positions", es: "Prevenir atención a tokens futuros para mantener propiedad autoregresiva y asegurar que cada token solo pueda atender posiciones previas", de: "Aufmerksamkeit auf zukünftige Tokens verhindern um autoregressive Eigenschaft zu erhalten und sicherzustellen dass jeder Token nur auf vorherige Positionen achten kann", nl: "Voorkomen van aandacht voor toekomstige tokens om autoregressieve eigenschap te behouden en ervoor te zorgen dat elk token alleen naar vorige posities kan kijken" },
          { en: "Masking random tokens during training", es: "Enmascarar tokens aleatorios durante entrenamiento", de: "Zufällige Tokens während des Trainings maskieren", nl: "Willekeurige tokens maskeren tijdens training" },
          { en: "Hiding certain layers from backpropagation", es: "Ocultar ciertas capas de retropropagación", de: "Bestimmte Schichten vor Backpropagation verbergen", nl: "Bepaalde lagen verbergen voor backpropagation" },
          { en: "Applying dropout to specific attention heads", es: "Aplicar dropout a cabezas de atención específicas", de: "Dropout auf spezifische Aufmerksamkeitsköpfe anwenden", nl: "Dropout toepassen op specifieke aandachtkoppen" }
        ],
        correct: 0,
        explanation: {
          en: "Causal masking ensures that during autoregressive generation, each position can only attend to earlier positions, not future ones. This is implemented by setting attention scores for future positions to negative infinity before softmax, maintaining the left-to-right generation property essential for language modeling.",
          es: "El enmascaramiento causal asegura que durante generación autoregresiva, cada posición solo pueda atender posiciones anteriores, no futuras. Esto se implementa estableciendo puntuaciones de atención para posiciones futuras a infinito negativo antes de softmax, manteniendo la propiedad de generación izquierda-a-derecha esencial para modelado de lenguaje.",
          de: "Kausales Maskieren stellt sicher dass während autoregressiver Generierung jede Position nur auf frühere Positionen achten kann, nicht auf zukünftige. Dies wird implementiert indem Aufmerksamkeits-Scores für zukünftige Positionen auf negativ unendlich vor Softmax gesetzt werden, erhält die Links-nach-rechts-Generierungseigenschaft die für Sprachmodellierung wesentlich ist.",
          nl: "Causale maskering zorgt ervoor dat tijdens autoregressieve generatie, elke positie alleen naar eerdere posities kan kijken, niet naar toekomstige. Dit wordt geïmplementeerd door aandachtscores voor toekomstige posities op negatief oneindig te zetten voor softmax, behoudt de links-naar-rechts generatie-eigenschap essentieel voor taalmodellering."
        }
      },
      {
        question: {
          en: "What is knowledge distillation in the context of Transformer models?",
          es: "¿Qué es la destilación de conocimiento en el contexto de modelos Transformer?",
          de: "Was ist Wissensdestillation im Kontext von Transformer-Modellen?",
          nl: "Wat is kennisdistillatie in de context van Transformer-modellen?"
        },
        options: [
          { en: "Training a smaller student model to mimic a larger teacher model's behavior, creating compact models with similar performance", es: "Entrenar un modelo estudiante más pequeño para imitar el comportamiento de un modelo profesor más grande, creando modelos compactos con rendimiento similar", de: "Ein kleineres Student-Modell trainieren um das Verhalten eines größeren Teacher-Modells nachzuahmen, erstellt kompakte Modelle mit ähnlicher Leistung", nl: "Een kleiner studentmodel trainen om het gedrag van een groter leraarmodel na te bootsen, creëert compacte modellen met vergelijkbare prestaties" },
          { en: "Extracting key facts from training data", es: "Extraer hechos clave de datos de entrenamiento", de: "Schlüsselfakten aus Trainingsdaten extrahieren", nl: "Sleutelfakten extraheren uit trainingsgegevens" },
          { en: "Removing redundant parameters from the model", es: "Eliminar parámetros redundantes del modelo", de: "Redundante Parameter aus dem Modell entfernen", nl: "Redundante parameters uit het model verwijderen" },
          { en: "Compressing the vocabulary size", es: "Comprimir el tamaño del vocabulario", de: "Die Vokabulargröße komprimieren", nl: "De vocabulairegrootte comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation transfers knowledge from a large teacher model to a smaller student model by training the student to match the teacher's output distributions (soft targets) rather than just hard labels. This creates efficient models like DistilBERT (40% smaller, 60% faster, retaining 97% of BERT's performance).",
          es: "La destilación de conocimiento transfiere conocimiento de un modelo profesor grande a un modelo estudiante más pequeño entrenando al estudiante para igualar las distribuciones de salida del profesor (objetivos suaves) en lugar de solo etiquetas duras. Esto crea modelos eficientes como DistilBERT (40% más pequeño, 60% más rápido, reteniendo 97% del rendimiento de BERT).",
          de: "Wissensdestillation überträgt Wissen von einem großen Teacher-Modell zu einem kleineren Student-Modell indem der Student trainiert wird die Ausgabeverteilungen des Teachers (weiche Ziele) zu matchen statt nur harte Labels. Dies erstellt effiziente Modelle wie DistilBERT (40% kleiner, 60% schneller, behält 97% von BERTs Leistung).",
          nl: "Kennisdistillatie draagt kennis over van een groot leraarmodel naar een kleiner studentmodel door de student te trainen om de uitvoerdistributies van de leraar (zachte doelen) te matchen in plaats van alleen harde labels. Dit creëert efficiënte modellen zoals DistilBERT (40% kleiner, 60% sneller, behoudt 97% van BERT's prestaties)."
        }
      },
      {
        question: {
          en: "What is the purpose of segment embeddings in BERT?",
          es: "¿Cuál es el propósito de las incrustaciones de segmento en BERT?",
          de: "Was ist der Zweck von Segmentembeddings in BERT?",
          nl: "Wat is het doel van segment-embeddings in BERT?"
        },
        options: [
          { en: "Distinguishing between different sentences or text segments in the input, enabling the model to process sentence pairs", es: "Distinguir entre diferentes oraciones o segmentos de texto en la entrada, permitiendo al modelo procesar pares de oraciones", de: "Zwischen verschiedenen Sätzen oder Textsegmenten in der Eingabe unterscheiden, ermöglicht dem Modell Satzpaare zu verarbeiten", nl: "Onderscheid maken tussen verschillende zinnen of tekstsegmenten in de invoer, stelt het model in staat zinsparen te verwerken" },
          { en: "Compressing long documents into smaller representations", es: "Comprimir documentos largos en representaciones más pequeñas", de: "Lange Dokumente in kleinere Repräsentationen komprimieren", nl: "Lange documenten comprimeren in kleinere representaties" },
          { en: "Identifying the sentiment of each segment", es: "Identificar el sentimiento de cada segmento", de: "Das Sentiment jedes Segments identifizieren", nl: "Het sentiment van elk segment identificeren" },
          { en: "Storing the original word order", es: "Almacenar el orden original de palabras", de: "Die ursprüngliche Wortreihenfolge speichern", nl: "De oorspronkelijke woordvolgorde opslaan" }
        ],
        correct: 0,
        explanation: {
          en: "Segment embeddings (also called token type embeddings) help BERT distinguish between sentence A and sentence B in tasks requiring sentence pair inputs (like natural language inference). Each token gets an embedding indicating which segment it belongs to, added to its token and positional embeddings.",
          es: "Las incrustaciones de segmento (también llamadas incrustaciones de tipo de token) ayudan a BERT a distinguir entre oración A y oración B en tareas que requieren entradas de pares de oraciones (como inferencia de lenguaje natural). Cada token obtiene una incrustación indicando a qué segmento pertenece, añadida a sus incrustaciones de token y posicionales.",
          de: "Segmentembeddings (auch Token-Typ-Embeddings genannt) helfen BERT zwischen Satz A und Satz B in Aufgaben zu unterscheiden die Satzpaar-Eingaben erfordern (wie natürliche Sprachinferenz). Jeder Token erhält ein Embedding das anzeigt zu welchem Segment er gehört, hinzugefügt zu seinen Token- und Positionsembeddings.",
          nl: "Segment-embeddings (ook wel token type embeddings genoemd) helpen BERT onderscheid te maken tussen zin A en zin B in taken die zinspaarinvoer vereisen (zoals natuurlijke taalinferentie). Elk token krijgt een embedding die aangeeft tot welk segment het behoort, toegevoegd aan zijn token- en positie-embeddings."
        }
      },
      {
        question: {
          en: "What is the difference between GPT-2 and GPT-3 besides model size?",
          es: "¿Cuál es la diferencia entre GPT-2 y GPT-3 además del tamaño del modelo?",
          de: "Was ist der Unterschied zwischen GPT-2 und GPT-3 außer der Modellgröße?",
          de: "Wat is het verschil tussen GPT-2 en GPT-3 naast modelgrootte?"
        },
        options: [
          { en: "GPT-3 demonstrates strong few-shot and zero-shot learning capabilities that emerge from scale, while GPT-2 requires fine-tuning for most tasks", es: "GPT-3 demuestra fuertes capacidades de aprendizaje de pocos ejemplos y cero ejemplos que emergen de la escala, mientras GPT-2 requiere ajuste fino para la mayoría de tareas", de: "GPT-3 zeigt starke Few-Shot- und Zero-Shot-Lernfähigkeiten die aus Skalierung entstehen, während GPT-2 Feinabstimmung für die meisten Aufgaben benötigt", nl: "GPT-3 toont sterke few-shot en zero-shot leercapaciteiten die voortkomen uit schaal, terwijl GPT-2 fine-tuning vereist voor de meeste taken" },
          { en: "GPT-3 uses a completely different architecture", es: "GPT-3 usa una arquitectura completamente diferente", de: "GPT-3 verwendet eine völlig andere Architektur", nl: "GPT-3 gebruikt een compleet andere architectuur" },
          { en: "GPT-3 can only process images", es: "GPT-3 solo puede procesar imágenes", de: "GPT-3 kann nur Bilder verarbeiten", nl: "GPT-3 kan alleen afbeeldingen verwerken" },
          { en: "GPT-2 is faster for all tasks", es: "GPT-2 es más rápido para todas las tareas", de: "GPT-2 ist schneller für alle Aufgaben", nl: "GPT-2 is sneller voor alle taken" }
        ],
        correct: 0,
        explanation: {
          en: "While GPT-3 (175B parameters) is much larger than GPT-2 (1.5B parameters), the key difference is GPT-3's emergent in-context learning abilities. GPT-3 can perform many tasks through few-shot prompting without fine-tuning, a capability that emerges at scale. GPT-2 typically requires task-specific fine-tuning to achieve good performance.",
          es: "Aunque GPT-3 (175B parámetros) es mucho más grande que GPT-2 (1.5B parámetros), la diferencia clave son las habilidades de aprendizaje en contexto emergentes de GPT-3. GPT-3 puede realizar muchas tareas a través de prompts de pocos ejemplos sin ajuste fino, una capacidad que emerge con la escala. GPT-2 típicamente requiere ajuste fino específico de tarea para lograr buen rendimiento.",
          de: "Während GPT-3 (175B Parameter) viel größer ist als GPT-2 (1.5B Parameter), ist der Hauptunterschied GPT-3s emergente kontextuelle Lernfähigkeiten. GPT-3 kann viele Aufgaben durch Few-Shot-Prompting ohne Feinabstimmung ausführen, eine Fähigkeit die mit Skalierung entsteht. GPT-2 benötigt typischerweise aufgabenspezifische Feinabstimmung um gute Leistung zu erzielen.",
          nl: "Hoewel GPT-3 (175B parameters) veel groter is dan GPT-2 (1.5B parameters), is het belangrijkste verschil GPT-3's emergente in-context leermogelijkheden. GPT-3 kan veel taken uitvoeren via few-shot prompting zonder fine-tuning, een vermogen dat ontstaat bij schaal. GPT-2 vereist doorgaans taakspecifieke fine-tuning om goede prestaties te behalen."
        }
      },
      {
        question: {
          en: "What is the feed-forward network's role in each Transformer layer?",
          es: "¿Cuál es el papel de la red feed-forward en cada capa Transformer?",
          de: "Was ist die Rolle des Feedforward-Netzwerks in jeder Transformer-Schicht?",
          nl: "Wat is de rol van het feedforward netwerk in elke Transformer-laag?"
        },
        options: [
          { en: "Processing each position independently with two linear transformations and a nonlinearity, adding representational capacity beyond attention", es: "Procesar cada posición independientemente con dos transformaciones lineales y una no linealidad, añadiendo capacidad representacional más allá de la atención", de: "Jede Position unabhängig mit zwei linearen Transformationen und einer Nichtlinearität verarbeiten, fügt Repräsentationskapazität jenseits von Aufmerksamkeit hinzu", nl: "Elke positie onafhankelijk verwerken met twee lineaire transformaties en een non-lineariteit, voegt representatiecapaciteit toe naast aandacht" },
          { en: "Connecting the encoder and decoder", es: "Conectar el codificador y decodificador", de: "Encoder und Decoder verbinden", nl: "Encoder en decoder verbinden" },
          { en: "Generating the final output predictions", es: "Generar las predicciones de salida finales", de: "Die finalen Ausgabevorhersagen generieren", nl: "De finale uitvoervoorspellingen genereren" },
          { en: "Computing attention weights", es: "Computar pesos de atención", de: "Aufmerksamkeitsgewichte berechnen", nl: "Aandachtgewichten berekenen" }
        ],
        correct: 0,
        explanation: {
          en: "The position-wise feed-forward network (FFN) in each Transformer layer applies two linear transformations with a ReLU or GELU activation between them, independently to each position. This adds non-linear transformations and increases model capacity. The FFN typically has a hidden dimension 4x larger than the model dimension (e.g., 3072 for a 768-dimensional model).",
          es: "La red feed-forward posicional (FFN) en cada capa Transformer aplica dos transformaciones lineales con una activación ReLU o GELU entre ellas, independientemente a cada posición. Esto añade transformaciones no lineales y aumenta capacidad del modelo. La FFN típicamente tiene una dimensión oculta 4x más grande que la dimensión del modelo (ej., 3072 para un modelo de 768 dimensiones).",
          de: "Das positionsweise Feedforward-Netzwerk (FFN) in jeder Transformer-Schicht wendet zwei lineare Transformationen mit einer ReLU- oder GELU-Aktivierung dazwischen an, unabhängig auf jede Position. Dies fügt nichtlineare Transformationen hinzu und erhöht Modellkapazität. Die FFN hat typischerweise eine versteckte Dimension 4x größer als die Modelldimension (z.B. 3072 für ein 768-dimensionales Modell).",
          nl: "Het positionele feedforward netwerk (FFN) in elke Transformer-laag past twee lineaire transformaties toe met een ReLU of GELU activatie ertussen, onafhankelijk op elke positie. Dit voegt niet-lineaire transformaties toe en vergroot modelcapaciteit. De FFN heeft doorgaans een verborgen dimensie 4x groter dan de modeldimensie (bijv. 3072 voor een 768-dimensionaal model)."
        }
      },
      {
        question: {
          en: "What is the context window and why is it important in language models?",
          es: "¿Qué es la ventana de contexto y por qué es importante en modelos de lenguaje?",
          de: "Was ist das Kontextfenster und warum ist es wichtig in Sprachmodellen?",
          nl: "Wat is het contextvenster en waarom is het belangrijk in taalmodellen?"
        },
        options: [
          { en: "The maximum sequence length the model can process at once, determining how much context it can consider when generating or understanding text", es: "La longitud máxima de secuencia que el modelo puede procesar a la vez, determinando cuánto contexto puede considerar al generar o entender texto", de: "Die maximale Sequenzlänge die das Modell auf einmal verarbeiten kann, bestimmt wie viel Kontext es beim Generieren oder Verstehen von Text berücksichtigen kann", nl: "De maximale sequentielengte die het model tegelijk kan verwerken, bepaalt hoeveel context het kan overwegen bij het genereren of begrijpen van tekst" },
          { en: "The size of the training dataset", es: "El tamaño del conjunto de datos de entrenamiento", de: "Die Größe des Trainingsdatensatzes", nl: "De grootte van de trainingsdataset" },
          { en: "The number of attention heads", es: "El número de cabezas de atención", de: "Die Anzahl der Aufmerksamkeitsköpfe", nl: "Het aantal aandachtkoppen" },
          { en: "The vocabulary size of the model", es: "El tamaño del vocabulario del modelo", de: "Die Vokabulargröße des Modells", nl: "De vocabulairegrootte van het model" }
        ],
        correct: 0,
        explanation: {
          en: "The context window (or maximum sequence length) limits how much text a model can process simultaneously. GPT-3 has a 2048-token context, GPT-4 extended this to 8K/32K tokens, and newer models reach 100K+ tokens. Longer contexts enable better understanding of documents, maintaining conversation history, and complex reasoning tasks, but increase computational costs quadratically with standard attention.",
          es: "La ventana de contexto (o longitud máxima de secuencia) limita cuánto texto un modelo puede procesar simultáneamente. GPT-3 tiene un contexto de 2048 tokens, GPT-4 extendió esto a 8K/32K tokens, y modelos más nuevos alcanzan 100K+ tokens. Contextos más largos permiten mejor comprensión de documentos, mantener historial de conversación, y tareas de razonamiento complejas, pero aumentan costos computacionales cuadráticamente con atención estándar.",
          de: "Das Kontextfenster (oder maximale Sequenzlänge) begrenzt wie viel Text ein Modell gleichzeitig verarbeiten kann. GPT-3 hat einen 2048-Token-Kontext, GPT-4 erweiterte dies auf 8K/32K Token, und neuere Modelle erreichen 100K+ Token. Längere Kontexte ermöglichen besseres Verständnis von Dokumenten, Gesprächshistorie beibehalten, und komplexe Denkaufgaben, erhöhen aber Rechenkosten quadratisch mit Standard-Aufmerksamkeit.",
          nl: "Het contextvenster (of maximale sequentielengte) beperkt hoeveel tekst een model tegelijk kan verwerken. GPT-3 heeft een 2048-token context, GPT-4 breidde dit uit naar 8K/32K tokens, en nieuwere modellen bereiken 100K+ tokens. Langere contexten maken beter begrip van documenten mogelijk, conversatiegeschiedenis behouden, en complexe redeneertaken, maar verhogen rekenkosten kwadratisch met standaard aandacht."
        }
      },
      {
        question: {
          en: "What is perplexity and how is it used to evaluate language models?",
          es: "¿Qué es la perplejidad y cómo se usa para evaluar modelos de lenguaje?",
          de: "Was ist Perplexität und wie wird sie zur Bewertung von Sprachmodellen verwendet?",
          nl: "Wat is perplexiteit en hoe wordt het gebruikt om taalmodellen te evalueren?"
        },
        options: [
          { en: "A measure of how well a model predicts a sample, with lower perplexity indicating better prediction and understanding of language patterns", es: "Una medida de qué tan bien un modelo predice una muestra, con perplejidad más baja indicando mejor predicción y comprensión de patrones de lenguaje", de: "Ein Maß dafür wie gut ein Modell eine Probe vorhersagt, wobei niedrigere Perplexität bessere Vorhersage und Verständnis von Sprachmustern anzeigt", nl: "Een maat voor hoe goed een model een sample voorspelt, waarbij lagere perplexiteit betere voorspelling en begrip van taalpatronen aangeeft" },
          { en: "The complexity of the model architecture", es: "La complejidad de la arquitectura del modelo", de: "Die Komplexität der Modellarchitektur", nl: "De complexiteit van de modelarchitectuur" },
          { en: "The number of parameters in the model", es: "El número de parámetros en el modelo", de: "Die Anzahl der Parameter im Modell", nl: "Het aantal parameters in het model" },
          { en: "The training time required", es: "El tiempo de entrenamiento requerido", de: "Die erforderliche Trainingszeit", nl: "De benodigde trainingstijd" }
        ],
        correct: 0,
        explanation: {
          en: "Perplexity is the exponentiated average negative log-likelihood of a sequence. It measures how 'surprised' a model is by test data - lower perplexity means the model assigns higher probability to the actual text, indicating better language understanding. A perplexity of 10 means the model is as confused as if it had to choose uniformly among 10 possibilities at each step.",
          es: "La perplejidad es el promedio exponencial de log-verosimilitud negativa de una secuencia. Mide qué tan 'sorprendido' está un modelo por datos de prueba - perplejidad más baja significa que el modelo asigna mayor probabilidad al texto real, indicando mejor comprensión del lenguaje. Una perplejidad de 10 significa que el modelo está tan confundido como si tuviera que elegir uniformemente entre 10 posibilidades en cada paso.",
          de: "Perplexität ist die exponentielle durchschnittliche negative Log-Likelihood einer Sequenz. Sie misst wie 'überrascht' ein Modell von Testdaten ist - niedrigere Perplexität bedeutet dass das Modell höhere Wahrscheinlichkeit dem tatsächlichen Text zuweist, zeigt besseres Sprachverständnis an. Eine Perplexität von 10 bedeutet dass das Modell so verwirrt ist als müsste es bei jedem Schritt gleichmäßig unter 10 Möglichkeiten wählen.",
          nl: "Perplexiteit is de geëxponentieerde gemiddelde negatieve log-likelihood van een sequentie. Het meet hoe 'verrast' een model is door testgegevens - lagere perplexiteit betekent dat het model hogere waarschijnlijkheid toewijst aan de werkelijke tekst, wat beter taalbegrip aangeeft. Een perplexiteit van 10 betekent dat het model even verward is alsof het uniform moest kiezen tussen 10 mogelijkheden bij elke stap."
        }
      },
      {
        question: {
          en: "What is chain-of-thought prompting?",
          es: "¿Qué es el prompting de cadena de pensamiento?",
          de: "Was ist Chain-of-Thought Prompting?",
          nl: "Wat is chain-of-thought prompting?"
        },
        options: [
          { en: "Including step-by-step reasoning in prompts to improve model performance on complex reasoning tasks", es: "Incluir razonamiento paso a paso en prompts para mejorar rendimiento del modelo en tareas de razonamiento complejas", de: "Schritt-für-Schritt-Reasoning in Prompts einbeziehen um Modellleistung bei komplexen Denkaufgaben zu verbessern", nl: "Stap-voor-stap redenering opnemen in prompts om modelprestaties bij complexe redeneertaken te verbeteren" },
          { en: "Linking multiple prompts together", es: "Vincular múltiples prompts juntos", de: "Mehrere Prompts miteinander verknüpfen", nl: "Meerdere prompts aan elkaar koppelen" },
          { en: "Creating prompt templates", es: "Crear plantillas de prompt", de: "Prompt-Vorlagen erstellen", nl: "Prompt-sjablonen maken" },
          { en: "Training models to follow chains of commands", es: "Entrenar modelos para seguir cadenas de comandos", de: "Modelle trainieren um Befehlsketten zu folgen", nl: "Modellen trainen om commandoketens te volgen" }
        ],
        correct: 0,
        explanation: {
          en: "Chain-of-thought prompting elicits reasoning by including intermediate steps in examples, showing the model how to break down complex problems. For math problems, instead of just 'Q: 15+27=? A: 42', it shows 'Q: 15+27=? A: Let's think step by step. 15+20=35, then 35+7=42.' This dramatically improves performance on multi-step reasoning.",
          es: "El prompting de cadena de pensamiento suscita razonamiento incluyendo pasos intermedios en ejemplos, mostrando al modelo cómo descomponer problemas complejos. Para problemas de matemáticas, en lugar de solo 'P: 15+27=? R: 42', muestra 'P: 15+27=? R: Pensemos paso a paso. 15+20=35, luego 35+7=42.' Esto mejora dramáticamente el rendimiento en razonamiento de múltiples pasos.",
          de: "Chain-of-Thought Prompting ruft Reasoning hervor durch Einbeziehen von Zwischenschritten in Beispielen, zeigt dem Modell wie komplexe Probleme zerlegt werden. Für Matheprobleme, statt nur 'F: 15+27=? A: 42', zeigt es 'F: 15+27=? A: Denken wir Schritt für Schritt. 15+20=35, dann 35+7=42.' Dies verbessert die Leistung bei mehrstufigem Reasoning dramatisch.",
          nl: "Chain-of-thought prompting ontlokt redenering door tussenliggende stappen op te nemen in voorbeelden, toont het model hoe complexe problemen op te breken. Voor wiskundeproblemen, in plaats van alleen 'V: 15+27=? A: 42', toont het 'V: 15+27=? A: Laten we stap voor stap denken. 15+20=35, dan 35+7=42.' Dit verbetert de prestaties bij meerstaps redeneren dramatisch."
        }
      },
      {
        question: {
          en: "What is model quantization?",
          es: "¿Qué es la cuantización de modelos?",
          de: "Was ist Modellquantisierung?",
          nl: "Wat is modelkwantisatie?"
        },
        options: [
          { en: "Reducing precision of model weights from 32-bit to 8-bit or lower to decrease memory and improve inference speed", es: "Reducir precisión de pesos del modelo de 32 bits a 8 bits o menos para disminuir memoria y mejorar velocidad de inferencia", de: "Präzision von Modellgewichten von 32-Bit auf 8-Bit oder niedriger reduzieren um Speicher zu verringern und Inferenzgeschwindigkeit zu verbessern", nl: "Precisie van modelgewichten verlagen van 32-bit naar 8-bit of lager om geheugen te verminderen en inferentiesnelheid te verbeteren" },
          { en: "Measuring model quality", es: "Medir calidad del modelo", de: "Modellqualität messen", nl: "Modelkwaliteit meten" },
          { en: "Breaking models into smaller parts", es: "Dividir modelos en partes más pequeñas", de: "Modelle in kleinere Teile zerlegen", nl: "Modellen opdelen in kleinere delen" },
          { en: "Converting models to quantum computers", es: "Convertir modelos a computadoras cuánticas", de: "Modelle für Quantencomputer umwandeln", nl: "Modellen converteren voor quantumcomputers" }
        ],
        correct: 0,
        explanation: {
          en: "Quantization reduces model size and speeds up inference by representing weights with lower precision (e.g., 8-bit integers instead of 32-bit floats). This can reduce model size by 4x with minimal accuracy loss. Techniques include post-training quantization and quantization-aware training.",
          es: "La cuantización reduce el tamaño del modelo y acelera la inferencia representando pesos con menor precisión (ej., enteros de 8 bits en lugar de flotantes de 32 bits). Esto puede reducir el tamaño del modelo en 4x con pérdida mínima de precisión. Las técnicas incluyen cuantización post-entrenamiento y entrenamiento consciente de cuantización.",
          de: "Quantisierung reduziert Modellgröße und beschleunigt Inferenz durch Darstellung von Gewichten mit niedrigerer Präzision (z.B. 8-Bit-Ganzzahlen statt 32-Bit-Gleitkommazahlen). Dies kann Modellgröße um 4x reduzieren mit minimaler Genauigkeitseinbuße. Techniken umfassen Post-Training-Quantisierung und quantisierungsbewusstes Training.",
          nl: "Kwantisatie vermindert modelgrootte en versnelt inferentie door gewichten met lagere precisie weer te geven (bijv. 8-bit integers in plaats van 32-bit floats). Dit kan modelgrootte met 4x verminderen met minimaal nauwkeurigheidsverlies. Technieken omvatten post-training kwantisatie en kwantisatie-bewuste training."
        }
      },
      {
        question: {
          en: "What is retrieval-augmented generation (RAG)?",
          es: "¿Qué es la generación aumentada por recuperación (RAG)?",
          de: "Was ist Retrieval-Augmented Generation (RAG)?",
          nl: "Wat is retrieval-augmented generation (RAG)?"
        },
        options: [
          { en: "Combining language models with external knowledge retrieval to ground responses in factual information", es: "Combinar modelos de lenguaje con recuperación de conocimiento externo para fundamentar respuestas en información factual", de: "Sprachmodelle mit externem Wissensabruf kombinieren um Antworten in faktischen Informationen zu verankern", nl: "Taalmodellen combineren met externe kennisopvraging om reacties te verankeren in feitelijke informatie" },
          { en: "Generating random augmented data", es: "Generar datos aumentados aleatorios", de: "Zufällige augmentierte Daten generieren", nl: "Willekeurige versterkte gegevens genereren" },
          { en: "Retrieving pre-written responses", es: "Recuperar respuestas pre-escritas", de: "Vorgeschriebene Antworten abrufen", nl: "Voorgeschreven reacties ophalen" },
          { en: "Augmenting training data with retrieval", es: "Aumentar datos de entrenamiento con recuperación", de: "Trainingsdaten mit Abruf augmentieren", nl: "Trainingsgegevens versterken met opvraging" }
        ],
        correct: 0,
        explanation: {
          en: "RAG enhances language models by retrieving relevant documents from a knowledge base before generation. The model uses retrieved context to generate more accurate, up-to-date responses grounded in specific information, reducing hallucinations and enabling access to knowledge beyond the training data.",
          es: "RAG mejora modelos de lenguaje recuperando documentos relevantes de una base de conocimiento antes de generación. El modelo usa contexto recuperado para generar respuestas más precisas y actualizadas fundamentadas en información específica, reduciendo alucinaciones y permitiendo acceso a conocimiento más allá de los datos de entrenamiento.",
          de: "RAG verbessert Sprachmodelle durch Abruf relevanter Dokumente aus einer Wissensbasis vor Generierung. Das Modell verwendet abgerufenen Kontext um genauere, aktuellere Antworten zu generieren die in spezifischen Informationen verankert sind, reduziert Halluzinationen und ermöglicht Zugriff auf Wissen jenseits der Trainingsdaten.",
          nl: "RAG verbetert taalmodellen door relevante documenten op te halen uit een kennisbasis vóór generatie. Het model gebruikt opgehaalde context om nauwkeuriger, actueler reacties te genereren verankerd in specifieke informatie, vermindert hallucinaties en maakt toegang mogelijk tot kennis buiten de trainingsgegevens."
        }
      },
      {
        question: {
          en: "What are sparse attention mechanisms?",
          es: "¿Qué son los mecanismos de atención dispersa?",
          de: "Was sind Sparse Attention Mechanismen?",
          nl: "Wat zijn sparse aandachtsmechanismen?"
        },
        options: [
          { en: "Attention patterns that compute relationships only between selected token pairs, reducing O(n²) complexity for long sequences", es: "Patrones de atención que calculan relaciones solo entre pares de tokens seleccionados, reduciendo complejidad O(n²) para secuencias largas", de: "Aufmerksamkeitsmuster die Beziehungen nur zwischen ausgewählten Token-Paaren berechnen, reduziert O(n²) Komplexität für lange Sequenzen", nl: "Aandachtpatronen die relaties alleen berekenen tussen geselecteerde tokenparen, vermindert O(n²) complexiteit voor lange sequenties" },
          { en: "Attention with very few parameters", es: "Atención con muy pocos parámetros", de: "Aufmerksamkeit mit sehr wenigen Parametern", nl: "Aandacht met zeer weinig parameters" },
          { en: "Attention that rarely fires", es: "Atención que raramente se activa", de: "Aufmerksamkeit die selten feuert", nl: "Aandacht die zelden activeert" },
          { en: "Removing attention layers", es: "Eliminar capas de atención", de: "Aufmerksamkeitsschichten entfernen", nl: "Aandachtlagen verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Sparse attention reduces computational cost by having tokens attend to only a subset of other tokens (e.g., local windows, strided patterns, global tokens). This enables processing longer sequences efficiently. Examples include Longformer's sliding window attention and BigBird's random+window+global attention pattern.",
          es: "La atención dispersa reduce costo computacional haciendo que tokens atiendan solo a un subconjunto de otros tokens (ej., ventanas locales, patrones con zancadas, tokens globales). Esto permite procesar secuencias más largas eficientemente. Los ejemplos incluyen atención de ventana deslizante de Longformer y patrón de atención aleatorio+ventana+global de BigBird.",
          de: "Sparse Attention reduziert Rechenkosten indem Tokens nur auf eine Teilmenge anderer Tokens achten (z.B. lokale Fenster, Stride-Muster, globale Tokens). Dies ermöglicht effiziente Verarbeitung längerer Sequenzen. Beispiele sind Longformers Sliding-Window-Attention und BigBirds Random+Window+Global Attention Muster.",
          nl: "Sparse aandacht vermindert rekenkosten door tokens alleen te laten letten op een subset van andere tokens (bijv. lokale vensters, gestrikte patronen, globale tokens). Dit maakt efficiënte verwerking van langere sequenties mogelijk. Voorbeelden zijn Longformer's sliding window aandacht en BigBird's random+window+global aandachtpatroon."
        }
      },
      {
        question: {
          en: "What is constitutional AI?",
          es: "¿Qué es la IA constitucional?",
          de: "Was ist Constitutional AI?",
          nl: "Wat is constitutional AI?"
        },
        options: [
          { en: "Training AI systems to follow a set of principles through self-critique and revision using constitutional guidelines", es: "Entrenar sistemas de IA para seguir un conjunto de principios a través de autocrítica y revisión usando pautas constitucionales", de: "KI-Systeme trainieren um einem Satz von Prinzipien zu folgen durch Selbstkritik und Revision mit konstitutionellen Richtlinien", nl: "AI-systemen trainen om een set principes te volgen via zelfkritiek en revisie met behulp van constitutionele richtlijnen" },
          { en: "AI for government and legal systems", es: "IA para sistemas gubernamentales y legales", de: "KI für Regierungs- und Rechtssysteme", nl: "AI voor overheids- en rechtssystemen" },
          { en: "Building AI based on constitutional laws", es: "Construir IA basada en leyes constitucionales", de: "KI basierend auf Verfassungsgesetzen bauen", nl: "AI bouwen gebaseerd op constitutionele wetten" },
          { en: "AI with fixed unchangeable rules", es: "IA con reglas fijas inmutables", de: "KI mit festen unveränderlichen Regeln", nl: "AI met vaste onveranderlijke regels" }
        ],
        correct: 0,
        explanation: {
          en: "Constitutional AI (developed by Anthropic) trains models to be helpful, harmless, and honest by having them critique and revise their own outputs against a constitution of principles, without relying on human feedback for every iteration. This enables more scalable alignment.",
          es: "La IA constitucional (desarrollada por Anthropic) entrena modelos para ser útiles, inofensivos y honestos haciendo que critiquen y revisen sus propias salidas contra una constitución de principios, sin depender de retroalimentación humana para cada iteración. Esto permite alineación más escalable.",
          de: "Constitutional AI (entwickelt von Anthropic) trainiert Modelle hilfreich, harmlos und ehrlich zu sein indem sie ihre eigenen Ausgaben gegen eine Verfassung von Prinzipien kritisieren und revidieren, ohne auf menschliches Feedback für jede Iteration angewiesen zu sein. Dies ermöglicht skalierbarere Ausrichtung.",
          nl: "Constitutional AI (ontwikkeld door Anthropic) traint modellen om behulpzaam, onschadelijk en eerlijk te zijn door ze hun eigen outputs te laten bekritiseren en herzien tegen een constitutie van principes, zonder te vertrouwen op menselijke feedback voor elke iteratie. Dit maakt meer schaalbare alignment mogelijk."
        }
      },
      {
        question: {
          en: "What is RLHF (Reinforcement Learning from Human Feedback)?",
          es: "¿Qué es RLHF (Aprendizaje por Refuerzo desde Retroalimentación Humana)?",
          de: "Was ist RLHF (Reinforcement Learning from Human Feedback)?",
          nl: "Wat is RLHF (Reinforcement Learning from Human Feedback)?"
        },
        options: [
          { en: "Training language models using human preferences to align outputs with human values and expectations", es: "Entrenar modelos de lenguaje usando preferencias humanas para alinear salidas con valores y expectativas humanas", de: "Sprachmodelle trainieren unter Verwendung menschlicher Präferenzen um Ausgaben mit menschlichen Werten und Erwartungen auszurichten", nl: "Taalmodellen trainen met behulp van menselijke voorkeuren om outputs af te stemmen op menselijke waarden en verwachtingen" },
          { en: "Reinforcing model weights with human annotations", es: "Reforzar pesos del modelo con anotaciones humanas", de: "Modellgewichte mit menschlichen Annotationen verstärken", nl: "Modelgewichten versterken met menselijke annotaties" },
          { en: "Learning from human feedback during deployment", es: "Aprender de retroalimentación humana durante despliegue", de: "Aus menschlichem Feedback während Bereitstellung lernen", nl: "Leren van menselijke feedback tijdens inzet" },
          { en: "Having humans reinforce correct responses", es: "Hacer que humanos refuercen respuestas correctas", de: "Menschen korrekte Antworten verstärken lassen", nl: "Mensen correcte reacties laten versterken" }
        ],
        correct: 0,
        explanation: {
          en: "RLHF fine-tunes language models using reinforcement learning guided by human feedback. First, a reward model is trained on human preference comparisons. Then, the language model is optimized using this reward model via PPO or similar algorithms. This process makes models more helpful, harmless, and aligned with human intentions, as used in ChatGPT and Claude.",
          es: "RLHF ajusta fino modelos de lenguaje usando aprendizaje por refuerzo guiado por retroalimentación humana. Primero, un modelo de recompensa se entrena en comparaciones de preferencias humanas. Luego, el modelo de lenguaje se optimiza usando este modelo de recompensa vía PPO o algoritmos similares. Este proceso hace modelos más útiles, inofensivos y alineados con intenciones humanas, como se usa en ChatGPT y Claude.",
          de: "RLHF feinabstimmt Sprachmodelle mit Reinforcement Learning geleitet durch menschliches Feedback. Zuerst wird ein Belohnungsmodell auf menschlichen Präferenzvergleichen trainiert. Dann wird das Sprachmodell mit diesem Belohnungsmodell via PPO oder ähnlichen Algorithmen optimiert. Dieser Prozess macht Modelle hilfreicher, harmloser und mit menschlichen Absichten ausgerichtet, wie in ChatGPT und Claude verwendet.",
          nl: "RLHF fine-tuned taalmodellen met behulp van reinforcement learning geleid door menselijke feedback. Eerst wordt een beloningsmodel getraind op menselijke voorkeursvergelijkingen. Vervolgens wordt het taalmodel geoptimaliseerd met dit beloningsmodel via PPO of vergelijkbare algoritmen. Dit proces maakt modellen nuttiger, onschadelijker en afgestemd op menselijke intenties, zoals gebruikt in ChatGPT en Claude."
        }
      },
      {
        question: {
          en: "What is the difference between encoder and decoder in Transformer architecture?",
          es: "¿Cuál es la diferencia entre codificador y decodificador en arquitectura Transformer?",
          de: "Was ist der Unterschied zwischen Encoder und Decoder in Transformer-Architektur?",
          nl: "Wat is het verschil tussen encoder en decoder in Transformer-architectuur?"
        },
        options: [
          { en: "Encoder uses bidirectional self-attention for understanding, decoder uses causal self-attention plus cross-attention for generation", es: "Codificador usa auto-atención bidireccional para comprensión, decodificador usa auto-atención causal más atención cruzada para generación", de: "Encoder verwendet bidirektionale Selbstaufmerksamkeit für Verstehen, Decoder verwendet kausale Selbstaufmerksamkeit plus Cross-Attention für Generierung", nl: "Encoder gebruikt bidirectionele zelf-aandacht voor begrip, decoder gebruikt causale zelf-aandacht plus cross-attention voor generatie" },
          { en: "Encoder is for training, decoder is for inference", es: "Codificador es para entrenamiento, decodificador es para inferencia", de: "Encoder ist für Training, Decoder ist für Inferenz", nl: "Encoder is voor training, decoder is voor inferentie" },
          { en: "Encoder is smaller than decoder", es: "Codificador es más pequeño que decodificador", de: "Encoder ist kleiner als Decoder", nl: "Encoder is kleiner dan decoder" },
          { en: "They have identical architectures", es: "Tienen arquitecturas idénticas", de: "Sie haben identische Architekturen", nl: "Ze hebben identieke architecturen" }
        ],
        correct: 0,
        explanation: {
          en: "In the original Transformer: the encoder processes input with bidirectional self-attention (can attend to all positions). The decoder generates output autoregressively with masked self-attention (causal, can't see future) and cross-attention to encoder outputs. Modern models may use encoder-only (BERT), decoder-only (GPT), or both (T5).",
          es: "En el Transformer original: el codificador procesa entrada con auto-atención bidireccional (puede atender todas las posiciones). El decodificador genera salida autoregresivamente con auto-atención enmascarada (causal, no puede ver futuro) y atención cruzada a salidas del codificador. Modelos modernos pueden usar solo-codificador (BERT), solo-decodificador (GPT), o ambos (T5).",
          de: "Im ursprünglichen Transformer: der Encoder verarbeitet Eingabe mit bidirektionaler Selbstaufmerksamkeit (kann auf alle Positionen achten). Der Decoder generiert Ausgabe autoregressiv mit maskierter Selbstaufmerksamkeit (kausal, kann Zukunft nicht sehen) und Cross-Attention zu Encoder-Ausgaben. Moderne Modelle können Encoder-only (BERT), Decoder-only (GPT) oder beides (T5) verwenden.",
          nl: "In de originele Transformer: de encoder verwerkt invoer met bidirectionele zelf-aandacht (kan naar alle posities kijken). De decoder genereert uitvoer autoregressief met gemaskeerde zelf-aandacht (causaal, kan toekomst niet zien) en cross-attention naar encoder outputs. Moderne modellen kunnen encoder-only (BERT), decoder-only (GPT), of beide (T5) gebruiken."
        }
      },
      {
        question: {
          en: "What is parameter-efficient fine-tuning (PEFT)?",
          es: "¿Qué es el ajuste fino eficiente en parámetros (PEFT)?",
          de: "Was ist Parameter-Efficient Fine-Tuning (PEFT)?",
          nl: "Wat is parameter-efficient fine-tuning (PEFT)?"
        },
        options: [
          { en: "Fine-tuning methods that update only a small subset of parameters, reducing memory and computation requirements", es: "Métodos de ajuste fino que actualizan solo un pequeño subconjunto de parámetros, reduciendo requisitos de memoria y computación", de: "Fine-Tuning-Methoden die nur eine kleine Teilmenge von Parametern aktualisieren, reduziert Speicher- und Rechenanforderungen", nl: "Fine-tuning methoden die alleen een kleine subset van parameters bijwerken, vermindert geheugen- en rekenvereisten" },
          { en: "Fine-tuning with fewer training examples", es: "Ajuste fino con menos ejemplos de entrenamiento", de: "Fine-Tuning mit weniger Trainingsbeispielen", nl: "Fine-tuning met minder trainingsvoorbeelden" },
          { en: "Fine-tuning faster than normal", es: "Ajuste fino más rápido que normal", de: "Schnelleres Fine-Tuning als normal", nl: "Fine-tuning sneller dan normaal" },
          { en: "Reducing the number of model layers", es: "Reducir el número de capas del modelo", de: "Anzahl der Modellschichten reduzieren", nl: "Het aantal modellagen verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "PEFT techniques like LoRA, adapters, and prefix tuning update only a small fraction of parameters while keeping most frozen. This enables fine-tuning large models with much less memory and compute, making it feasible to adapt billion-parameter models on consumer hardware.",
          es: "Técnicas PEFT como LoRA, adaptadores y ajuste de prefijo actualizan solo una pequeña fracción de parámetros mientras mantienen la mayoría congelados. Esto permite ajustar fino modelos grandes con mucha menos memoria y computación, haciendo factible adaptar modelos de miles de millones de parámetros en hardware de consumidor.",
          de: "PEFT-Techniken wie LoRA, Adapter und Prefix Tuning aktualisieren nur einen kleinen Bruchteil von Parametern während die meisten eingefroren bleiben. Dies ermöglicht Fine-Tuning großer Modelle mit viel weniger Speicher und Rechnen, macht es machbar Milliarden-Parameter-Modelle auf Consumer-Hardware anzupassen.",
          nl: "PEFT-technieken zoals LoRA, adapters en prefix tuning werken alleen een kleine fractie van parameters bij terwijl de meeste bevroren blijven. Dit maakt fine-tuning van grote modellen mogelijk met veel minder geheugen en rekenkracht, maakt het haalbaar om miljarden-parameter modellen aan te passen op consumerhardware."
        }
      },
      {
        question: {
          en: "What is LoRA (Low-Rank Adaptation)?",
          es: "¿Qué es LoRA (Adaptación de Rango Bajo)?",
          de: "Was ist LoRA (Low-Rank Adaptation)?",
          nl: "Wat is LoRA (Low-Rank Adaptation)?"
        },
        options: [
          { en: "A PEFT method that adds trainable low-rank matrices to model layers, updating far fewer parameters than full fine-tuning", es: "Un método PEFT que añade matrices de rango bajo entrenables a capas del modelo, actualizando muchos menos parámetros que ajuste fino completo", de: "Eine PEFT-Methode die trainierbare Low-Rank-Matrizen zu Modellschichten hinzufügt, aktualisiert weit weniger Parameter als volles Fine-Tuning", nl: "Een PEFT-methode die trainbare low-rank matrices toevoegt aan modellagen, werkt veel minder parameters bij dan volledige fine-tuning" },
          { en: "A long-range attention mechanism", es: "Un mecanismo de atención de largo alcance", de: "Ein Langstrecken-Aufmerksamkeitsmechanismus", nl: "Een langeafstands aandachtsmechanisme" },
          { en: "A model compression technique", es: "Una técnica de compresión de modelos", de: "Eine Modellkomprimierungstechnik", nl: "Een modelcompressietechniek" },
          { en: "A new optimizer algorithm", es: "Un nuevo algoritmo optimizador", de: "Ein neuer Optimierer-Algorithmus", nl: "Een nieuw optimalisatie-algoritme" }
        ],
        correct: 0,
        explanation: {
          en: "LoRA freezes pre-trained weights and injects trainable rank decomposition matrices into each layer. For a weight matrix W, instead of updating W directly, LoRA trains low-rank matrices A and B where ΔW = AB. This reduces trainable parameters by 10,000x or more while maintaining performance, enabling efficient adaptation of large models.",
          es: "LoRA congela pesos pre-entrenados e inyecta matrices de descomposición de rango entrenables en cada capa. Para una matriz de pesos W, en lugar de actualizar W directamente, LoRA entrena matrices de rango bajo A y B donde ΔW = AB. Esto reduce parámetros entrenables en 10,000x o más mientras mantiene rendimiento, permitiendo adaptación eficiente de modelos grandes.",
          de: "LoRA friert vortrainierte Gewichte ein und fügt trainierbare Rang-Zerlegungsmatrizen in jede Schicht ein. Für eine Gewichtsmatrix W, statt W direkt zu aktualisieren, trainiert LoRA Low-Rank-Matrizen A und B wo ΔW = AB. Dies reduziert trainierbare Parameter um 10,000x oder mehr während Leistung beibehalten wird, ermöglicht effiziente Anpassung großer Modelle.",
          nl: "LoRA bevriest voorgetrainde gewichten en injecteert trainbare rank decompositiematrices in elke laag. Voor een gewichtsmatrix W, in plaats van W direct bij te werken, traint LoRA low-rank matrices A en B waarbij ΔW = AB. Dit vermindert trainbare parameters met 10,000x of meer terwijl prestaties behouden blijven, maakt efficiënte aanpassing van grote modellen mogelijk."
        }
      },
      {
        question: {
          en: "What is the purpose of [MASK] token in BERT pre-training?",
          es: "¿Cuál es el propósito del token [MASK] en pre-entrenamiento de BERT?",
          de: "Was ist der Zweck des [MASK]-Tokens im BERT-Vortraining?",
          nl: "Wat is het doel van het [MASK]-token in BERT pre-training?"
        },
        options: [
          { en: "Replacing tokens to be predicted during masked language modeling, forcing the model to learn bidirectional context", es: "Reemplazar tokens a predecir durante modelado de lenguaje enmascarado, forzando al modelo a aprender contexto bidireccional", de: "Tokens ersetzen die während maskierter Sprachmodellierung vorhergesagt werden sollen, zwingt das Modell bidirektionalen Kontext zu lernen", nl: "Tokens vervangen die voorspeld moeten worden tijdens gemaskeerde taalmodellering, dwingt het model bidirectionele context te leren" },
          { en: "Hiding sensitive information in text", es: "Ocultar información sensible en texto", de: "Sensible Informationen in Text verbergen", nl: "Gevoelige informatie in tekst verbergen" },
          { en: "Indicating sentence boundaries", es: "Indicar límites de oraciones", de: "Satzgrenzen anzeigen", nl: "Zingrenzen aangeven" },
          { en: "Preventing overfitting", es: "Prevenir sobreajuste", de: "Überanpassung verhindern", nl: "Overfitting voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "During BERT pre-training, 15% of tokens are selected for masking. Of these, 80% are replaced with [MASK], 10% with random tokens, and 10% unchanged. The model must predict the original tokens using bidirectional context, learning rich language representations without the limitation of unidirectional models.",
          es: "Durante pre-entrenamiento de BERT, 15% de tokens se seleccionan para enmascarar. De estos, 80% se reemplazan con [MASK], 10% con tokens aleatorios, y 10% sin cambios. El modelo debe predecir los tokens originales usando contexto bidireccional, aprendiendo representaciones ricas de lenguaje sin la limitación de modelos unidireccionales.",
          de: "Während BERT-Vortraining werden 15% der Tokens zum Maskieren ausgewählt. Von diesen werden 80% mit [MASK] ersetzt, 10% mit zufälligen Tokens und 10% unverändert. Das Modell muss die ursprünglichen Tokens mit bidirektionalem Kontext vorhersagen, lernt reiche Sprachrepräsentationen ohne Einschränkung unidirektionaler Modelle.",
          nl: "Tijdens BERT pre-training worden 15% van tokens geselecteerd voor maskering. Hiervan worden 80% vervangen door [MASK], 10% door willekeurige tokens, en 10% onveranderd. Het model moet de originele tokens voorspellen met bidirectionele context, leert rijke taalrepresentaties zonder de beperking van unidirectionele modellen."
        }
      },
      {
        question: {
          en: "What is model hallucination in language models?",
          es: "¿Qué es la alucinación de modelos en modelos de lenguaje?",
          de: "Was ist Modellhalluzination in Sprachmodellen?",
          nl: "Wat is modelhallucinatie in taalmodellen?"
        },
        options: [
          { en: "Generating plausible-sounding but factually incorrect or nonsensical information", es: "Generar información que suena plausible pero factualmente incorrecta o sin sentido", de: "Plausibel klingende aber faktisch falsche oder unsinnige Informationen generieren", nl: "Plausibel klinkende maar feitelijk onjuiste of zinloze informatie genereren" },
          { en: "Visualizing model internals", es: "Visualizar internos del modelo", de: "Modell-Interna visualisieren", nl: "Model-interna visualiseren" },
          { en: "Model dreaming during training", es: "Modelo soñando durante entrenamiento", de: "Modell träumt während Training", nl: "Model droomt tijdens training" },
          { en: "Generating creative fictional content", es: "Generar contenido ficticio creativo", de: "Kreative fiktionale Inhalte generieren", nl: "Creatieve fictieve inhoud genereren" }
        ],
        correct: 0,
        explanation: {
          en: "Hallucination occurs when language models confidently generate false information that sounds plausible. This happens because models are trained to produce fluent text, not to verify facts. Mitigation strategies include RAG, citation mechanisms, RLHF for honesty, and explicit uncertainty modeling.",
          es: "La alucinación ocurre cuando modelos de lenguaje generan confiadamente información falsa que suena plausible. Esto sucede porque los modelos se entrenan para producir texto fluido, no para verificar hechos. Las estrategias de mitigación incluyen RAG, mecanismos de citación, RLHF para honestidad y modelado explícito de incertidumbre.",
          de: "Halluzination tritt auf wenn Sprachmodelle selbstsicher falsche Informationen generieren die plausibel klingen. Dies geschieht weil Modelle trainiert werden fließenden Text zu produzieren, nicht Fakten zu verifizieren. Mitigationsstrategien umfassen RAG, Zitationsmechanismen, RLHF für Ehrlichkeit und explizites Unsicherheitsmodellieren.",
          nl: "Hallucinatie treedt op wanneer taalmodellen zelfverzekerd valse informatie genereren die plausibel klinkt. Dit gebeurt omdat modellen getraind worden om vloeiende tekst te produceren, niet om feiten te verifiëren. Mitigatiestrategieën omvatten RAG, citatiemechanismen, RLHF voor eerlijkheid en expliciete onzekerheidsmodellering."
        }
      },
      {
        question: {
          en: "What is the role of the Adam optimizer in Transformer training?",
          es: "¿Cuál es el papel del optimizador Adam en entrenamiento de Transformer?",
          de: "Was ist die Rolle des Adam-Optimizers im Transformer-Training?",
          nl: "Wat is de rol van de Adam-optimizer in Transformer-training?"
        },
        options: [
          { en: "Adapting learning rates for each parameter using momentum and second-moment estimates for efficient optimization", es: "Adaptar tasas de aprendizaje para cada parámetro usando estimaciones de momento y segundo momento para optimización eficiente", de: "Lernraten für jeden Parameter anpassen unter Verwendung von Momentum und Zweitmoment-Schätzungen für effiziente Optimierung", nl: "Leersnelheden aanpassen voor elke parameter met behulp van momentum en tweede-moment schattingen voor efficiënte optimalisatie" },
          { en: "Adding dropout during training", es: "Añadir dropout durante entrenamiento", de: "Dropout während Training hinzufügen", nl: "Dropout toevoegen tijdens training" },
          { en: "Initializing model weights", es: "Inicializar pesos del modelo", de: "Modellgewichte initialisieren", nl: "Modelgewichten initialiseren" },
          { en: "Preventing gradient explosion", es: "Prevenir explosión de gradientes", de: "Gradientenexplosion verhindern", nl: "Gradiëntexplosie voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Adam (Adaptive Moment Estimation) is the standard optimizer for training Transformers. It computes adaptive learning rates for each parameter using running averages of gradients (first moment) and squared gradients (second moment). This provides stable, efficient training for deep networks with millions/billions of parameters.",
          es: "Adam (Estimación de Momento Adaptativo) es el optimizador estándar para entrenar Transformadores. Calcula tasas de aprendizaje adaptativas para cada parámetro usando promedios corrientes de gradientes (primer momento) y gradientes al cuadrado (segundo momento). Esto proporciona entrenamiento estable y eficiente para redes profundas con millones/miles de millones de parámetros.",
          de: "Adam (Adaptive Moment Estimation) ist der Standard-Optimizer für Training von Transformern. Es berechnet adaptive Lernraten für jeden Parameter unter Verwendung laufender Durchschnitte von Gradienten (erstes Moment) und quadrierten Gradienten (zweites Moment). Dies bietet stabiles, effizientes Training für tiefe Netzwerke mit Millionen/Milliarden von Parametern.",
          nl: "Adam (Adaptive Moment Estimation) is de standaard optimizer voor het trainen van Transformers. Het berekent adaptieve leersnelheden voor elke parameter met behulp van lopende gemiddelden van gradiënten (eerste moment) en gekwadrateerde gradiënten (tweede moment). Dit biedt stabiele, efficiënte training voor diepe netwerken met miljoenen/miljarden parameters."
        }    },
    {
      question: {en: "What is strategy in games?", es: "What is strategy in games?", de: "What is strategy in games?", nl: "What is strategy in games?"},
      options: [
        {en: "Planning to achieve objectives", es: "Planning to achieve objectives", de: "Planning to achieve objectives", nl: "Planning to achieve objectives"},
        {en: "Random moves", es: "Random moves", de: "Random moves", nl: "Random moves"},
        {en: "Luck only", es: "Luck only", de: "Luck only", nl: "Luck only"},
        {en: "No planning", es: "No planning", de: "No planning", nl: "No planning"}
      ],
      correct: 0,
      explanation: {en: "Strategy involves planning and decision-making to achieve game objectives.", es: "Strategy involves planning and decision-making to achieve game objectives.", de: "Strategy involves planning and decision-making to achieve game objectives.", nl: "Strategy involves planning and decision-making to achieve game objectives."}

      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
