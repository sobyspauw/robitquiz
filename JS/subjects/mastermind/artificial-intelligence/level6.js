// Artificial Intelligence - Level 6: Natural Language Processing
(function() {
  const level6 = {
    name: {
      en: "Natural Language Processing",
      es: "Procesamiento de Lenguaje Natural",
      de: "Natürliche Sprachverarbeitung",
      nl: "Natuurlijke Taalverwerking"
    },
    questions: [
      {
        question: {
          en: "What is the fundamental challenge that word embeddings like Word2Vec address?",
          es: "¿Cuál es el desafío fundamental que abordan las incrustaciones de palabras como Word2Vec?",
          de: "Was ist die grundlegende Herausforderung, die Worteinbettungen wie Word2Vec angehen?",
          nl: "Wat is de fundamentele uitdaging die woordembeddings zoals Word2Vec aanpakken?"
        },
        options: [
          { en: "Convert discrete words into continuous vector representations", es: "Convertir palabras discretas en representaciones vectoriales continuas", de: "Diskrete Wörter in kontinuierliche Vektordarstellungen umwandeln", nl: "Discrete woorden omzetten naar continue vectorrepresentaties" },
          { en: "Reduce computational complexity of text processing", es: "Reducir la complejidad computacional del procesamiento de texto", de: "Rechenkomplexität der Textverarbeitung reduzieren", nl: "Computationele complexiteit van tekstverwerking verminderen" },
          { en: "Eliminate grammatical errors in text", es: "Eliminar errores gramaticales en el texto", de: "Grammatikfehler im Text eliminieren", nl: "Grammaticale fouten in tekst elimineren" },
          { en: "Compress text files efficiently", es: "Comprimir archivos de texto eficientemente", de: "Textdateien effizient komprimieren", nl: "Tekstbestanden efficiënt comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "Word embeddings solve the sparse representation problem by mapping discrete words to dense, continuous vector spaces where semantically similar words are positioned closer together, enabling better semantic understanding in NLP models.",
          es: "Las incrustaciones de palabras resuelven el problema de representación dispersa mapeando palabras discretas a espacios vectoriales densos y continuos donde las palabras semánticamente similares se posicionan más cerca, permitiendo mejor comprensión semántica en modelos NLP.",
          de: "Worteinbettungen lösen das Problem der spärlichen Darstellung, indem sie diskrete Wörter auf dichte, kontinuierliche Vektorräume abbilden, wo semantisch ähnliche Wörter näher beieinander positioniert sind, was besseres semantisches Verständnis in NLP-Modellen ermöglicht.",
          nl: "Woordembeddings lossen het sparse representatieprobleem op door discrete woorden te mappen naar dichte, continue vectorruimtes waar semantisch vergelijkbare woorden dichter bij elkaar gepositioneerd zijn, waardoor beter semantisch begrip in NLP-modellen mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the key innovation of BERT (Bidirectional Encoder Representations from Transformers)?",
          es: "¿Cuál es la innovación clave de BERT (Representaciones de Codificador Bidireccional de Transformers)?",
          de: "Was ist die Schlüsselinnovation von BERT (Bidirectional Encoder Representations from Transformers)?",
          nl: "Wat is de belangrijkste innovatie van BERT (Bidirectional Encoder Representations from Transformers)?"
        },
        options: [
          { en: "Bidirectional context understanding through masked language modeling", es: "Comprensión de contexto bidireccional a través de modelado de lenguaje enmascarado", de: "Bidirektionales Kontextverständnis durch maskiertes Sprachmodellierung", nl: "Bidirectioneel contextbegrip door gemaskeerde taalmodellering" },
          { en: "Faster training than previous models", es: "Entrenamiento más rápido que modelos anteriores", de: "Schnelleres Training als vorherige Modelle", nl: "Snellere training dan vorige modellen" },
          { en: "Reduced memory requirements", es: "Requisitos de memoria reducidos", de: "Reduzierte Speicheranforderungen", nl: "Gereduceerde geheugenvereisten" },
          { en: "Works only with English text", es: "Funciona solo con texto en inglés", de: "Funktioniert nur mit englischem Text", nl: "Werkt alleen met Engelse tekst" }
        ],
        correct: 0,
        explanation: {
          en: "BERT's key innovation is its bidirectional training approach using masked language modeling, allowing the model to understand context from both left and right directions simultaneously, unlike previous unidirectional models like GPT.",
          es: "La innovación clave de BERT es su enfoque de entrenamiento bidireccional usando modelado de lenguaje enmascarado, permitiendo al modelo entender contexto desde ambas direcciones izquierda y derecha simultáneamente, a diferencia de modelos unidireccionales anteriores como GPT.",
          de: "BERTs Schlüsselinnovation ist sein bidirektionaler Trainingsansatz mit maskierter Sprachmodellierung, der es dem Modell ermöglicht, Kontext aus beiden Richtungen gleichzeitig zu verstehen, im Gegensatz zu vorherigen unidirektionalen Modellen wie GPT.",
          nl: "BERT's belangrijkste innovatie is zijn bidirectionele trainingsaanpak met gemaskeerde taalmodellering, waardoor het model context van zowel links als rechts tegelijkertijd kan begrijpen, in tegenstelling tot eerdere unidirectionele modellen zoals GPT."
        }
      },
      {
        question: {
          en: "What is the primary purpose of named entity recognition (NER) in NLP?",
          es: "¿Cuál es el propósito principal del reconocimiento de entidades nombradas (NER) en NLP?",
          de: "Was ist der Hauptzweck der Named Entity Recognition (NER) in NLP?",
          nl: "Wat is het primaire doel van named entity recognition (NER) in NLP?"
        },
        options: [
          { en: "Identify and classify specific entities like names, locations, and organizations", es: "Identificar y clasificar entidades específicas como nombres, ubicaciones y organizaciones", de: "Spezifische Entitäten wie Namen, Orte und Organisationen identifizieren und klassifizieren", nl: "Specifieke entiteiten zoals namen, locaties en organisaties identificeren en classificeren" },
          { en: "Correct spelling errors in text", es: "Corregir errores ortográficos en el texto", de: "Rechtschreibfehler im Text korrigieren", nl: "Spelfouten in tekst corrigeren" },
          { en: "Generate new text content", es: "Generar nuevo contenido de texto", de: "Neuen Textinhalt generieren", nl: "Nieuwe tekstinhoud genereren" },
          { en: "Translate text between languages", es: "Traducir texto entre idiomas", de: "Text zwischen Sprachen übersetzen", nl: "Tekst tussen talen vertalen" }
        ],
        correct: 0,
        explanation: {
          en: "NER is a subtask of information extraction that identifies and classifies named entities in text into predefined categories such as person names, organizations, locations, dates, and other specific entities relevant to the domain.",
          es: "NER es una subtarea de extracción de información que identifica y clasifica entidades nombradas en texto en categorías predefinidas como nombres de personas, organizaciones, ubicaciones, fechas y otras entidades específicas relevantes al dominio.",
          de: "NER ist eine Teilaufgabe der Informationsextraktion, die benannte Entitäten in Text identifiziert und in vordefinierte Kategorien wie Personennamen, Organisationen, Orte, Daten und andere domänenrelevante spezifische Entitäten klassifiziert.",
          nl: "NER is een subtaak van informatieextractie die benoemde entiteiten in tekst identificeert en classificeert in voorgedefinieerde categorieën zoals persoonsnamen, organisaties, locaties, datums en andere domeinspecifieke entiteiten."
        }
      },
      {
        question: {
          en: "What is the main advantage of using attention mechanisms in neural machine translation?",
          es: "¿Cuál es la principal ventaja de usar mecanismos de atención en traducción automática neuronal?",
          de: "Was ist der Hauptvorteil der Verwendung von Aufmerksamkeitsmechanismen in der neuronalen maschinellen Übersetzung?",
          nl: "Wat is het belangrijkste voordeel van het gebruik van attention mechanismen in neurale machinevertaling?"
        },
        options: [
          { en: "Allow models to focus on relevant source words when generating each target word", es: "Permiten a los modelos enfocarse en palabras fuente relevantes al generar cada palabra objetivo", de: "Ermöglichen es Modellen, sich auf relevante Quellwörter zu konzentrieren, wenn jedes Zielwort generiert wird", nl: "Stellen modellen in staat om te focussen op relevante bronwoorden bij het genereren van elk doelwoord" },
          { en: "Reduce training time significantly", es: "Reducir significativamente el tiempo de entrenamiento", de: "Trainingszeit erheblich reduzieren", nl: "Trainingstijd aanzienlijk verminderen" },
          { en: "Eliminate the need for parallel corpora", es: "Eliminar la necesidad de corpus paralelos", de: "Die Notwendigkeit paralleler Korpora eliminieren", nl: "De behoefte aan parallelle corpora elimineren" },
          { en: "Work only with closely related languages", es: "Funcionar solo con idiomas estrechamente relacionados", de: "Nur mit eng verwandten Sprachen arbeiten", nl: "Werken alleen met nauw verwante talen" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms allow translation models to dynamically focus on different parts of the source sentence when generating each word in the target language, addressing the bottleneck problem of fixed-size context vectors and improving translation quality, especially for long sentences.",
          es: "Los mecanismos de atención permiten a los modelos de traducción enfocarse dinámicamente en diferentes partes de la oración fuente al generar cada palabra en el idioma objetivo, abordando el problema de cuello de botella de los vectores de contexto de tamaño fijo y mejorando la calidad de traducción, especialmente para oraciones largas.",
          de: "Aufmerksamkeitsmechanismen ermöglichen es Übersetzungsmodellen, sich beim Generieren jedes Wortes in der Zielsprache dynamisch auf verschiedene Teile des Quellsatzes zu konzentrieren, wodurch das Engpass-Problem fester Kontextvektoren angegangen und die Übersetzungsqualität verbessert wird, besonders bei langen Sätzen.",
          nl: "Attention mechanismen stellen vertalingsmodellen in staat om dynamisch te focussen op verschillende delen van de bronzin bij het genereren van elk woord in de doeltaal, waardoor het knelpuntprobleem van contextvectoren van vaste grootte wordt aangepakt en de vertaalkwaliteit wordt verbeterd, vooral voor lange zinnen."
        }
      },
      {
        question: {
          en: "What is the purpose of tokenization in NLP preprocessing?",
          es: "¿Cuál es el propósito de la tokenización en el preprocesamiento de NLP?",
          de: "Was ist der Zweck der Tokenisierung in der NLP-Vorverarbeitung?",
          nl: "Wat is het doel van tokenisatie in NLP-voorverwerking?"
        },
        options: [
          { en: "Break text into individual units (tokens) for processing", es: "Dividir texto en unidades individuales (tokens) para procesamiento", de: "Text in individuelle Einheiten (Tokens) für die Verarbeitung aufteilen", nl: "Tekst opdelen in individuele eenheden (tokens) voor verwerking" },
          { en: "Encrypt sensitive information in text", es: "Encriptar información sensible en el texto", de: "Sensible Informationen im Text verschlüsseln", nl: "Gevoelige informatie in tekst versleutelen" },
          { en: "Compress text to save storage space", es: "Comprimir texto para ahorrar espacio de almacenamiento", de: "Text komprimieren um Speicherplatz zu sparen", nl: "Tekst comprimeren om opslagruimte te besparen" },
          { en: "Translate text to a standard language", es: "Traducir texto a un idioma estándar", de: "Text in eine Standardsprache übersetzen", nl: "Tekst vertalen naar een standaardtaal" }
        ],
        correct: 0,
        explanation: {
          en: "Tokenization is the process of breaking down text into smaller, meaningful units called tokens (words, subwords, or characters) that can be processed by NLP algorithms. It's a fundamental preprocessing step that converts raw text into structured input for models.",
          es: "La tokenización es el proceso de dividir texto en unidades más pequeñas y significativas llamadas tokens (palabras, sub-palabras o caracteres) que pueden ser procesadas por algoritmos NLP. Es un paso de preprocesamiento fundamental que convierte texto crudo en entrada estructurada para modelos.",
          de: "Tokenisierung ist der Prozess, Text in kleinere, bedeutungsvolle Einheiten namens Tokens (Wörter, Subwörter oder Zeichen) zu unterteilen, die von NLP-Algorithmen verarbeitet werden können. Es ist ein grundlegender Vorverarbeitungsschritt, der Rohtext in strukturierte Eingabe für Modelle umwandelt.",
          nl: "Tokenisatie is het proces van het opdelen van tekst in kleinere, betekenisvolle eenheden genaamd tokens (woorden, subwoorden of karakters) die door NLP-algoritmen kunnen worden verwerkt. Het is een fundamentele voorverwerkingsstap die ruwe tekst omzet in gestructureerde invoer voor modellen."
        }
      },
      {
        question: {
          en: "What is the main challenge that the transformer architecture addresses in sequence modeling?",
          es: "¿Cuál es el principal desafío que aborda la arquitectura transformer en el modelado de secuencias?",
          de: "Was ist die Hauptherausforderung, die die Transformer-Architektur in der Sequenzmodellierung angeht?",
          nl: "Wat is de belangrijkste uitdaging die de transformer architectuur aanpakt in sequentiemodellering?"
        },
        options: [
          { en: "Enable parallel processing by eliminating sequential dependencies", es: "Habilitar procesamiento paralelo eliminando dependencias secuenciales", de: "Parallele Verarbeitung durch Eliminierung sequenzieller Abhängigkeiten ermöglichen", nl: "Parallelle verwerking mogelijk maken door sequentiële afhankelijkheden te elimineren" },
          { en: "Reduce the number of parameters in the model", es: "Reducir el número de parámetros en el modelo", de: "Anzahl der Parameter im Modell reduzieren", nl: "Het aantal parameters in het model verminderen" },
          { en: "Increase training speed for small datasets", es: "Aumentar la velocidad de entrenamiento para conjuntos de datos pequeños", de: "Trainingsgeschwindigkeit für kleine Datensätze erhöhen", nl: "Trainingssnelheid voor kleine datasets verhogen" },
          { en: "Work only with fixed-length sequences", es: "Funcionar solo con secuencias de longitud fija", de: "Nur mit Sequenzen fester Länge arbeiten", nl: "Werken alleen met sequenties van vaste lengte" }
        ],
        correct: 0,
        explanation: {
          en: "The transformer architecture addresses the sequential processing bottleneck of RNNs by using self-attention mechanisms that allow all positions in a sequence to be processed simultaneously, enabling parallel computation and better modeling of long-range dependencies.",
          es: "La arquitectura transformer aborda el cuello de botella de procesamiento secuencial de las RNN usando mecanismos de auto-atención que permiten que todas las posiciones en una secuencia se procesen simultáneamente, habilitando computación paralela y mejor modelado de dependencias a largo alcance.",
          de: "Die Transformer-Architektur geht den sequenziellen Verarbeitungsengpass von RNNs an, indem sie Selbstaufmerksamkeitsmechanismen verwendet, die es ermöglichen, alle Positionen in einer Sequenz gleichzeitig zu verarbeiten, wodurch parallele Berechnung und bessere Modellierung weitreichender Abhängigkeiten ermöglicht wird.",
          nl: "De transformer architectuur pakt het sequentiële verwerkingsknelpunt van RNNs aan door zelf-aandacht mechanismen te gebruiken die alle posities in een sequentie tegelijkertijd laten verwerken, waardoor parallelle berekening en betere modellering van lange-afstand afhankelijkheden mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is sentiment analysis primarily used for in NLP applications?",
          es: "¿Para qué se usa principalmente el análisis de sentimientos en aplicaciones NLP?",
          de: "Wofür wird Sentimentanalyse hauptsächlich in NLP-Anwendungen verwendet?",
          nl: "Waarvoor wordt sentimentanalyse hoofdzakelijk gebruikt in NLP-applicaties?"
        },
        options: [
          { en: "Determine emotional tone and opinions expressed in text", es: "Determinar el tono emocional y las opiniones expresadas en el texto", de: "Emotionalen Ton und in Text ausgedrückte Meinungen bestimmen", nl: "Emotionele toon en meningen uitgedrukt in tekst bepalen" },
          { en: "Correct grammatical errors automatically", es: "Corregir errores gramaticales automáticamente", de: "Grammatikfehler automatisch korrigieren", nl: "Grammaticale fouten automatisch corrigeren" },
          { en: "Generate summaries of long documents", es: "Generar resúmenes de documentos largos", de: "Zusammenfassungen langer Dokumente generieren", nl: "Samenvattingen van lange documenten genereren" },
          { en: "Translate between different languages", es: "Traducir entre diferentes idiomas", de: "Zwischen verschiedenen Sprachen übersetzen", nl: "Vertalen tussen verschillende talen" }
        ],
        correct: 0,
        explanation: {
          en: "Sentiment analysis is the computational task of identifying and extracting subjective information, emotions, and opinions from text data, commonly used in social media monitoring, product reviews analysis, and customer feedback assessment.",
          es: "El análisis de sentimientos es la tarea computacional de identificar y extraer información subjetiva, emociones y opiniones de datos de texto, comúnmente usado en monitoreo de redes sociales, análisis de reseñas de productos y evaluación de retroalimentación de clientes.",
          de: "Sentimentanalyse ist die rechnerische Aufgabe, subjektive Informationen, Emotionen und Meinungen aus Textdaten zu identifizieren und zu extrahieren, die häufig in Social Media Monitoring, Produktbewertungsanalyse und Kundenfeedback-Bewertung verwendet wird.",
          nl: "Sentimentanalyse is de computationele taak van het identificeren en extraheren van subjectieve informatie, emoties en meningen uit tekstdata, veel gebruikt in social media monitoring, productreview-analyse en klantfeedback-beoordeling."
        }
      },
      {
        question: {
          en: "What is the key concept behind transfer learning in NLP with pre-trained models?",
          es: "¿Cuál es el concepto clave detrás del aprendizaje por transferencia en NLP con modelos preentrenados?",
          de: "Was ist das Schlüsselkonzept hinter Transfer Learning in NLP mit vortrainierten Modellen?",
          nl: "Wat is het belangrijkste concept achter transfer learning in NLP met vooraf getrainde modellen?"
        },
        options: [
          { en: "Leverage language understanding learned from large corpora for specific tasks", es: "Aprovechar la comprensión del lenguaje aprendida de grandes corpus para tareas específicas", de: "Sprachverständnis aus großen Korpora für spezifische Aufgaben nutzen", nl: "Taalbegrip geleerd van grote corpora benutten voor specifieke taken" },
          { en: "Train models faster by reducing dataset size", es: "Entrenar modelos más rápido reduciendo el tamaño del conjunto de datos", de: "Modelle schneller trainieren durch Reduzierung der Datensatzgröße", nl: "Modellen sneller trainen door datasetgrootte te verminderen" },
          { en: "Eliminate the need for labeled training data", es: "Eliminar la necesidad de datos de entrenamiento etiquetados", de: "Die Notwendigkeit beschrifteter Trainingsdaten eliminieren", nl: "De behoefte aan gelabelde trainingsdata elimineren" },
          { en: "Use only domain-specific vocabulary", es: "Usar solo vocabulario específico del dominio", de: "Nur domänenspezifisches Vokabular verwenden", nl: "Alleen domeinspecifieke woordenschat gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning in NLP involves taking models pre-trained on large-scale language modeling tasks and fine-tuning them for specific downstream tasks, leveraging the general language understanding acquired during pre-training to improve performance with limited task-specific data.",
          es: "El aprendizaje por transferencia en NLP involucra tomar modelos preentrenados en tareas de modelado de lenguaje a gran escala y ajustarlos finamente para tareas específicas posteriores, aprovechando la comprensión general del lenguaje adquirida durante el preentrenamiento para mejorar el rendimiento con datos específicos de tarea limitados.",
          de: "Transfer Learning in NLP beinhaltet die Übernahme von Modellen, die auf großangelegten Sprachmodellierungsaufgaben vortrainiert wurden, und deren Feintuning für spezifische nachgelagerte Aufgaben, wobei das während des Vortrainings erworbene allgemeine Sprachverständnis genutzt wird, um die Leistung mit begrenzten aufgabenspezifischen Daten zu verbessern.",
          nl: "Transfer learning in NLP houdt in dat modellen die vooraf zijn getraind op grootschalige taalmodelleringstaken worden genomen en fijn afgesteld voor specifieke downstream taken, waarbij het algemene taalbegrip verworven tijdens voortraining wordt benut om prestaties te verbeteren met beperkte taakspecifieke data."
        }
      },
      {
        question: {
          en: "What is the primary goal of text summarization in NLP?",
          es: "¿Cuál es el objetivo principal de la sumarización de texto en NLP?",
          de: "Was ist das primäre Ziel der Textzusammenfassung in NLP?",
          nl: "Wat is het primaire doel van tekstsamenvatting in NLP?"
        },
        options: [
          { en: "Create concise versions of longer texts while preserving key information", es: "Crear versiones concisas de textos más largos mientras se preserva información clave", de: "Prägnante Versionen längerer Texte erstellen unter Beibehaltung wichtiger Informationen", nl: "Beknopte versies van langere teksten creëren terwijl belangrijke informatie behouden blijft" },
          { en: "Correct spelling and grammar mistakes", es: "Corregir errores ortográficos y gramaticales", de: "Rechtschreib- und Grammatikfehler korrigieren", nl: "Spelling- en grammaticafouten corrigeren" },
          { en: "Translate text into multiple languages", es: "Traducir texto a múltiples idiomas", de: "Text in mehrere Sprachen übersetzen", nl: "Tekst naar meerdere talen vertalen" },
          { en: "Generate completely new content", es: "Generar contenido completamente nuevo", de: "Völlig neuen Inhalt generieren", nl: "Volledig nieuwe inhoud genereren" }
        ],
        correct: 0,
        explanation: {
          en: "Text summarization aims to automatically generate shorter versions of source documents that retain the most important information, helping users quickly understand the main points without reading the entire text. It can be extractive (selecting key sentences) or abstractive (generating new summary text).",
          es: "La sumarización de texto busca generar automáticamente versiones más cortas de documentos fuente que retengan la información más importante, ayudando a los usuarios a entender rápidamente los puntos principales sin leer todo el texto. Puede ser extractiva (seleccionando oraciones clave) o abstractiva (generando nuevo texto de resumen).",
          de: "Textzusammenfassung zielt darauf ab, automatisch kürzere Versionen von Quelldokumenten zu generieren, die die wichtigsten Informationen beibehalten, wodurch Benutzer die Hauptpunkte schnell verstehen können, ohne den gesamten Text zu lesen. Sie kann extraktiv (Auswahl wichtiger Sätze) oder abstraktiv (Generierung neuen Zusammenfassungstextes) sein.",
          nl: "Tekstsamenvatting heeft tot doel automatisch kortere versies van brondocumenten te genereren die de belangrijkste informatie behouden, waardoor gebruikers snel de hoofdpunten kunnen begrijpen zonder de hele tekst te lezen. Het kan extractief zijn (selecteren van belangrijke zinnen) of abstractief (genereren van nieuwe samenvattingstekst)."
        }
      },
      {
        question: {
          en: "What is the main innovation of GPT (Generative Pre-trained Transformer) models?",
          es: "¿Cuál es la principal innovación de los modelos GPT (Transformer Generativo Preentrenado)?",
          de: "Was ist die Hauptinnovation der GPT (Generative Pre-trained Transformer) Modelle?",
          nl: "Wat is de belangrijkste innovatie van GPT (Generative Pre-trained Transformer) modellen?"
        },
        options: [
          { en: "Autoregressive text generation using transformer architecture with causal masking", es: "Generación de texto autoregresiva usando arquitectura transformer con enmascarado causal", de: "Autoregressive Textgenerierung mit Transformer-Architektur und kausaler Maskierung", nl: "Autoregressieve tekstgeneratie met transformer architectuur en causale maskering" },
          { en: "Bidirectional context understanding", es: "Comprensión de contexto bidireccional", de: "Bidirektionales Kontextverständnis", nl: "Bidirectioneel contextbegrip" },
          { en: "Reduced computational requirements", es: "Requisitos computacionales reducidos", de: "Reduzierte Rechenaufwand", nl: "Gereduceerde computationele vereisten" },
          { en: "Perfect grammar correction", es: "Corrección gramatical perfecta", de: "Perfekte Grammatikkorrektur", nl: "Perfecte grammaticacorrectie" }
        ],
        correct: 0,
        explanation: {
          en: "GPT models use autoregressive language modeling with transformer architecture, where the model learns to predict the next token in a sequence using only preceding context (causal masking), enabling high-quality text generation and few-shot learning capabilities.",
          es: "Los modelos GPT usan modelado de lenguaje autoregresivo con arquitectura transformer, donde el modelo aprende a predecir el siguiente token en una secuencia usando solo el contexto precedente (enmascarado causal), habilitando generación de texto de alta calidad y capacidades de aprendizaje con pocos ejemplos.",
          de: "GPT-Modelle verwenden autoregressive Sprachmodellierung mit Transformer-Architektur, wobei das Modell lernt, das nächste Token in einer Sequenz unter Verwendung nur des vorangehenden Kontexts (kausale Maskierung) vorherzusagen, was hochwertige Textgenerierung und Few-Shot-Lernfähigkeiten ermöglicht.",
          nl: "GPT modellen gebruiken autoregressieve taalmodellering met transformer architectuur, waarbij het model leert het volgende token in een sequentie te voorspellen met alleen voorafgaande context (causale maskering), waardoor hoogwaardige tekstgeneratie en few-shot leermogelijkheden mogelijk worden."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/artificial-intelligence', level6);
  }
})();
