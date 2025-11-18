// Natural Language Processing Quiz - Level 6: Advanced NLP
(function() {
  const level6 = {
    name: {
      en: "Named Entity Recognition & Information Extraction",
      es: "Reconocimiento de Entidades Nombradas y Extracción de Información",
      de: "Named Entity Recognition & Informationsextraktion",
      nl: "Named Entity Recognition & Informatie-extractie"
    },
    questions: [
      {
        question: {
          en: "What is the main advantage of using Recurrent Neural Networks (RNNs) for NLP tasks?",
          es: "¿Cuál es la principal ventaja de usar Redes Neuronales Recurrentes (RNN) para tareas de PLN?",
          de: "Was ist der Hauptvorteil von Recurrent Neural Networks (RNNs) für NLP-Aufgaben?",
          nl: "Wat is het hoofdvoordeel van het gebruik van Recurrent Neural Networks (RNNs) voor NLP-taken?"
        },
        options: [
          { en: "They can process sequences of variable length and maintain memory of previous inputs", es: "Pueden procesar secuencias de longitud variable y mantener memoria de entradas previas", de: "Sie können Sequenzen variabler Länge verarbeiten und Erinnerung an vorherige Eingaben behalten", nl: "Ze kunnen sequenties van variabele lengte verwerken en geheugen van eerdere invoer behouden" },
          { en: "They are faster than traditional feedforward networks", es: "Son más rápidas que las redes feedforward tradicionales", de: "Sie sind schneller als traditionelle Feedforward-Netzwerke", nl: "Ze zijn sneller dan traditionele feedforward-netwerken" },
          { en: "They require less training data", es: "Requieren menos datos de entrenamiento", de: "Sie benötigen weniger Trainingsdaten", nl: "Ze hebben minder trainingsdata nodig" },
          { en: "They only work with fixed-length inputs", es: "Solo funcionan con entradas de longitud fija", de: "Sie funktionieren nur mit Eingaben fester Länge", nl: "Ze werken alleen met invoer van vaste lengte" }
        ],
        correct: 0,
        explanation: {
          en: "RNNs excel at processing sequential data because they maintain hidden states that carry information from previous time steps. This allows them to handle variable-length sequences and capture temporal dependencies in text, making them ideal for tasks like language modeling, machine translation, and sequence-to-sequence learning.",
          es: "Las RNN destacan en el procesamiento de datos secuenciales porque mantienen estados ocultos que llevan información de pasos de tiempo previos. Esto les permite manejar secuencias de longitud variable y capturar dependencias temporales en texto, haciéndolas ideales para tareas como modelado de lenguaje, traducción automática y aprendizaje secuencia-a-secuencia.",
          de: "RNNs zeichnen sich bei der Verarbeitung sequenzieller Daten aus weil sie versteckte Zustände beibehalten die Informationen aus vorherigen Zeitschritten tragen. Dies ermöglicht ihnen Sequenzen variabler Länge zu handhaben und zeitliche Abhängigkeiten in Text zu erfassen, was sie ideal für Aufgaben wie Sprachmodellierung, maschinelle Übersetzung und Sequenz-zu-Sequenz-Lernen macht.",
          nl: "RNN's blinken uit in het verwerken van sequentiële data omdat ze verborgen toestanden behouden die informatie van vorige tijdstappen dragen. Dit stelt hen in staat om sequenties van variabele lengte te hanteren en temporele afhankelijkheden in tekst vast te leggen, wat ze ideaal maakt voor taken zoals taalmodellering, machinevertaling en sequentie-naar-sequentie leren."
        }
      },
      {
        question: {
          en: "What problem do LSTM and GRU networks solve that traditional RNNs struggle with?",
          es: "¿Qué problema resuelven las redes LSTM y GRU con el que las RNN tradicionales tienen dificultades?",
          de: "Welches Problem lösen LSTM- und GRU-Netzwerke das traditionelle RNNs schwer haben?",
          nl: "Welk probleem lossen LSTM- en GRU-netwerken op waar traditionele RNN's moeite mee hebben?"
        },
        options: [
          { en: "The vanishing gradient problem, allowing better learning of long-term dependencies", es: "El problema del gradiente que desaparece, permitiendo mejor aprendizaje de dependencias a largo plazo", de: "Das Problem verschwindender Gradienten, was besseres Lernen langfristiger Abhängigkeiten ermöglicht", nl: "Het probleem van verdwijnende gradiënten, waardoor beter leren van langetermijnafhankelijkheden mogelijk is" },
          { en: "They process text faster than regular RNNs", es: "Procesan texto más rápido que las RNN regulares", de: "Sie verarbeiten Text schneller als reguläre RNNs", nl: "Ze verwerken tekst sneller dan gewone RNN's" },
          { en: "They require less memory to train", es: "Requieren menos memoria para entrenar", de: "Sie benötigen weniger Speicher zum Trainieren", nl: "Ze hebben minder geheugen nodig om te trainen" },
          { en: "They can only process shorter sequences", es: "Solo pueden procesar secuencias más cortas", de: "Sie können nur kürzere Sequenzen verarbeiten", nl: "Ze kunnen alleen kortere sequenties verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "LSTM (Long Short-Term Memory) and GRU (Gated Recurrent Unit) networks address the vanishing gradient problem that affects traditional RNNs. Through gating mechanisms, they can selectively remember or forget information, allowing them to maintain relevant information over much longer sequences and learn long-term dependencies effectively.",
          es: "Las redes LSTM (Memoria a Largo y Corto Plazo) y GRU (Unidad Recurrente con Compuertas) abordan el problema del gradiente que desaparece que afecta a las RNN tradicionales. A través de mecanismos de compuertas, pueden recordar u olvidar información selectivamente, permitiéndoles mantener información relevante durante secuencias mucho más largas y aprender dependencias a largo plazo efectivamente.",
          de: "LSTM (Long Short-Term Memory) und GRU (Gated Recurrent Unit) Netzwerke adressieren das Problem verschwindender Gradienten das traditionelle RNNs betrifft. Durch Gating-Mechanismen können sie selektiv Informationen erinnern oder vergessen, was ihnen erlaubt relevante Informationen über viel längere Sequenzen zu behalten und langfristige Abhängigkeiten effektiv zu lernen.",
          nl: "LSTM (Long Short-Term Memory) en GRU (Gated Recurrent Unit) netwerken pakken het probleem van verdwijnende gradiënten aan dat traditionele RNN's beïnvloedt. Door gate-mechanismen kunnen ze selectief informatie onthouden of vergeten, waardoor ze relevante informatie over veel langere sequenties kunnen behouden en langetermijnafhankelijkheden effectief kunnen leren."
        }
      },
      {
        question: {
          en: "What is the attention mechanism in neural NLP models?",
          es: "¿Qué es el mecanismo de atención en modelos neurales de PLN?",
          de: "Was ist der Aufmerksamkeitsmechanismus in neuralen NLP-Modellen?",
          nl: "Wat is het aandachtsmechanisme in neurale NLP-modellen?"
        },
        options: [
          { en: "A mechanism that allows models to focus on relevant parts of the input sequence when generating outputs", es: "Un mecanismo que permite a los modelos enfocarse en partes relevantes de la secuencia de entrada al generar salidas", de: "Ein Mechanismus der Modellen erlaubt sich auf relevante Teile der Eingabesequenz zu konzentrieren bei der Ausgabegenerierung", nl: "Een mechanisme dat modellen in staat stelt zich te richten op relevante delen van de invoersequentie bij het genereren van uitvoer" },
          { en: "A way to make models train faster", es: "Una forma de hacer que los modelos entrenen más rápido", de: "Eine Möglichkeit Modelle schneller zu trainieren", nl: "Een manier om modellen sneller te laten trainen" },
          { en: "A method to reduce model size", es: "Un método para reducir el tamaño del modelo", de: "Eine Methode zur Reduzierung der Modellgröße", nl: "Een methode om de modelgrootte te verkleinen" },
          { en: "A technique for data preprocessing", es: "Una técnica para preprocesamiento de datos", de: "Eine Technik für Datenvorverarbeitung", nl: "Een techniek voor datavoorverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "The attention mechanism allows neural networks to dynamically focus on different parts of the input sequence when producing each part of the output. Instead of relying solely on a fixed-size context vector, attention computes weighted combinations of all input representations, giving the model access to the entire input sequence at each generation step.",
          es: "El mecanismo de atención permite a las redes neuronales enfocarse dinámicamente en diferentes partes de la secuencia de entrada al producir cada parte de la salida. En lugar de depender únicamente de un vector de contexto de tamaño fijo, la atención calcula combinaciones ponderadas de todas las representaciones de entrada, dando al modelo acceso a toda la secuencia de entrada en cada paso de generación.",
          de: "Der Aufmerksamkeitsmechanismus erlaubt neuronalen Netzwerken sich dynamisch auf verschiedene Teile der Eingabesequenz zu konzentrieren bei der Produktion jedes Teils der Ausgabe. Anstatt sich nur auf einen kontextvektor fester Größe zu verlassen, berechnet Aufmerksamkeit gewichtete Kombinationen aller Eingaberepräsentationen und gibt dem Modell Zugang zur gesamten Eingabesequenz bei jedem Generierungsschritt.",
          nl: "Het aandachtsmechanisme stelt neurale netwerken in staat om zich dynamisch te richten op verschillende delen van de invoersequentie bij het produceren van elk deel van de uitvoer. In plaats van alleen te vertrouwen op een contextvector van vaste grootte, berekent aandacht gewogen combinaties van alle invoerrepresentaties, wat het model toegang geeft tot de hele invoersequentie bij elke generatiestap."
        }
      },
      {
        question: {
          en: "What is the main innovation of the sequence-to-sequence (seq2seq) architecture?",
          es: "¿Cuál es la principal innovación de la arquitectura secuencia-a-secuencia (seq2seq)?",
          de: "Was ist die Hauptinnovation der Sequenz-zu-Sequenz (seq2seq) Architektur?",
          nl: "Wat is de hoofdinnovatie van de sequentie-naar-sequentie (seq2seq) architectuur?"
        },
        options: [
          { en: "It uses separate encoder and decoder networks to handle input and output sequences of different lengths", es: "Usa redes codificadoras y decodificadoras separadas para manejar secuencias de entrada y salida de diferentes longitudes", de: "Es verwendet separate Encoder- und Decoder-Netzwerke um Eingabe- und Ausgabesequenzen verschiedener Längen zu handhaben", nl: "Het gebruikt afzonderlijke encoder- en decoder-netwerken om invoer- en uitvoersequenties van verschillende lengtes te hanteren" },
          { en: "It only works with sequences of the same length", es: "Solo funciona con secuencias de la misma longitud", de: "Es funktioniert nur mit Sequenzen gleicher Länge", nl: "Het werkt alleen met sequenties van dezelfde lengte" },
          { en: "It processes all words simultaneously", es: "Procesa todas las palabras simultáneamente", de: "Es verarbeitet alle Wörter gleichzeitig", nl: "Het verwerkt alle woorden tegelijkertijd" },
          { en: "It eliminates the need for training data", es: "Elimina la necesidad de datos de entrenamiento", de: "Es eliminiert die Notwendigkeit für Trainingsdaten", nl: "Het elimineert de behoefte aan trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "The seq2seq architecture revolutionized NLP by using an encoder-decoder framework where the encoder processes the input sequence into a fixed-size representation, and the decoder generates the output sequence from this representation. This allows handling input and output sequences of different lengths, making it ideal for tasks like machine translation, summarization, and chatbots.",
          es: "La arquitectura seq2seq revolucionó el PLN al usar un marco codificador-decodificador donde el codificador procesa la secuencia de entrada en una representación de tamaño fijo, y el decodificador genera la secuencia de salida desde esta representación. Esto permite manejar secuencias de entrada y salida de diferentes longitudes, haciéndola ideal para tareas como traducción automática, resumen y chatbots.",
          de: "Die seq2seq-Architektur revolutionierte NLP durch die Verwendung eines Encoder-Decoder-Frameworks wo der Encoder die Eingabesequenz in eine Repräsentation fester Größe verarbeitet und der Decoder die Ausgabesequenz aus dieser Repräsentation generiert. Dies ermöglicht das Handhaben von Eingabe- und Ausgabesequenzen verschiedener Längen, was es ideal für Aufgaben wie maschinelle Übersetzung, Zusammenfassung und Chatbots macht.",
          nl: "De seq2seq-architectuur revolutioneerde NLP door het gebruik van een encoder-decoder framework waarbij de encoder de invoersequentie verwerkt tot een representatie van vaste grootte, en de decoder de uitvoersequentie genereert uit deze representatie. Dit maakt het mogelijk om invoer- en uitvoersequenties van verschillende lengtes te hanteren, wat het ideaal maakt voor taken zoals machinevertaling, samenvatting en chatbots."
        }
      },
      {
        question: {
          en: "What are word embeddings and why are they important for neural NLP?",
          es: "¿Qué son las incrustaciones de palabras y por qué son importantes para el PLN neuronal?",
          de: "Was sind Wort-Embeddings und warum sind sie wichtig für neuronales NLP?",
          nl: "Wat zijn woord-embeddings en waarom zijn ze belangrijk voor neuraal NLP?"
        },
        options: [
          { en: "Dense vector representations of words that capture semantic relationships and can be learned from data", es: "Representaciones vectoriales densas de palabras que capturan relaciones semánticas y pueden aprenderse de los datos", de: "Dichte Vektorrepräsentationen von Wörtern die semantische Beziehungen erfassen und aus Daten gelernt werden können", nl: "Dichte vectorrepresentaties van woorden die semantische relaties vastleggen en uit data kunnen worden geleerd" },
          { en: "A way to count word frequencies in documents", es: "Una forma de contar frecuencias de palabras en documentos", de: "Eine Möglichkeit Worthäufigkeiten in Dokumenten zu zählen", nl: "Een manier om woordfrequenties in documenten te tellen" },
          { en: "Binary representations of words", es: "Representaciones binarias de palabras", de: "Binäre Repräsentationen von Wörtern", nl: "Binaire representaties van woorden" },
          { en: "A method for spell checking", es: "Un método para corrección ortográfica", de: "Eine Methode für Rechtschreibprüfung", nl: "Een methode voor spellingcontrole" }
        ],
        correct: 0,
        explanation: {
          en: "Word embeddings are dense, low-dimensional vector representations where words with similar meanings are positioned close together in the vector space. Unlike one-hot encodings, embeddings capture semantic relationships and can be learned through models like Word2Vec or GloVe. They provide neural networks with rich, continuous representations that enable better understanding of word relationships and context.",
          es: "Las incrustaciones de palabras son representaciones vectoriales densas y de baja dimensión donde palabras con significados similares se posicionan cerca en el espacio vectorial. A diferencia de las codificaciones one-hot, las incrustaciones capturan relaciones semánticas y pueden aprenderse a través de modelos como Word2Vec o GloVe. Proporcionan a las redes neuronales representaciones ricas y continuas que permiten mejor comprensión de relaciones entre palabras y contexto.",
          de: "Wort-Embeddings sind dichte, niedrigdimensionale Vektorrepräsentationen wo Wörter mit ähnlichen Bedeutungen nahe beieinander im Vektorraum positioniert sind. Anders als One-Hot-Kodierungen erfassen Embeddings semantische Beziehungen und können durch Modelle wie Word2Vec oder GloVe gelernt werden. Sie bieten neuronalen Netzwerken reiche, kontinuierliche Repräsentationen die besseres Verstehen von Wortbeziehungen und Kontext ermöglichen.",
          nl: "Woord-embeddings zijn dichte, laagdimensionale vectorrepresentaties waarbij woorden met vergelijkbare betekenissen dicht bij elkaar in de vectorruimte worden gepositioneerd. Anders dan one-hot encodings leggen embeddings semantische relaties vast en kunnen worden geleerd door modellen zoals Word2Vec of GloVe. Ze bieden neurale netwerken rijke, continue representaties die beter begrip van woordrelaties en context mogelijk maken."
        }
      },
      {
        question: {
          en: "What is Named Entity Recognition (NER)?",
          es: "¿Qué es el Reconocimiento de Entidades Nombradas (NER)?",
          de: "Was ist Named Entity Recognition (NER)?",
          nl: "Wat is Named Entity Recognition (NER)?"
        },
        options: [
          { en: "Identifying and classifying named entities like persons, organizations, locations, and dates in text", es: "Identificar y clasificar entidades nombradas como personas, organizaciones, ubicaciones y fechas en texto", de: "Identifizieren und Klassifizieren benannter Entitäten wie Personen, Organisationen, Orte und Daten in Text", nl: "Identificeren en classificeren van genoemde entiteiten zoals personen, organisaties, locaties en datums in tekst" },
          { en: "Recognizing the author of a text document", es: "Reconocer el autor de un documento de texto", de: "Den Autor eines Textdokuments erkennen", nl: "De auteur van een tekstdocument herkennen" },
          { en: "Finding spelling errors in names", es: "Encontrar errores de ortografía en nombres", de: "Rechtschreibfehler in Namen finden", nl: "Spelfouten in namen vinden" },
          { en: "Generating new entity names", es: "Generar nuevos nombres de entidades", de: "Neue Entitätsnamen generieren", nl: "Nieuwe entiteitsnamen genereren" }
        ],
        correct: 0,
        explanation: {
          en: "NER is a key information extraction task that identifies and categorizes mentions of real-world entities in unstructured text into predefined categories such as PERSON, ORGANIZATION, LOCATION, DATE, MONEY, etc.",
          es: "NER es una tarea clave de extracción de información que identifica y categoriza menciones de entidades del mundo real en texto no estructurado en categorías predefinidas como PERSONA, ORGANIZACIÓN, UBICACIÓN, FECHA, DINERO, etc.",
          de: "NER ist eine Schlüssel-Informationsextraktionsaufgabe die Erwähnungen realer Entitäten in unstrukturiertem Text identifiziert und in vordefinierte Kategorien wie PERSON, ORGANISATION, ORT, DATUM, GELD, etc. kategorisiert.",
          nl: "NER is een belangrijke informatie-extractietaak die vermeldingen van entiteiten uit de echte wereld in ongestructureerde tekst identificeert en categoriseert in voorgedefinieerde categorieën zoals PERSOON, ORGANISATIE, LOCATIE, DATUM, GELD, enz."
        }
      },
      {
        question: {
          en: "What is the BIO tagging scheme in NER?",
          es: "¿Qué es el esquema de etiquetado BIO en NER?",
          de: "Was ist das BIO-Tagging-Schema in NER?",
          nl: "Wat is het BIO-labelschema in NER?"
        },
        options: [
          { en: "B=Beginning of entity, I=Inside entity, O=Outside entity - a token-level labeling system", es: "B=Inicio de entidad, I=Dentro de entidad, O=Fuera de entidad - un sistema de etiquetado a nivel de token", de: "B=Beginn der Entität, I=Innerhalb der Entität, O=Außerhalb der Entität - ein Token-Level-Beschriftungssystem", nl: "B=Begin van entiteit, I=Binnen entiteit, O=Buiten entiteit - een labelingsysteem op tokenniveau" },
          { en: "A biological classification system for entities", es: "Un sistema de clasificación biológica para entidades", de: "Ein biologisches Klassifikationssystem für Entitäten", nl: "Een biologisch classificatiesysteem voor entiteiten" },
          { en: "Binary Input/Output for neural networks", es: "Entrada/Salida Binaria para redes neuronales", de: "Binäre Eingabe/Ausgabe für neuronale Netzwerke", nl: "Binaire Input/Output voor neurale netwerken" },
          { en: "Big Input Output processing method", es: "Método de procesamiento de Entrada Salida Grande", de: "Große Eingabe-Ausgabe-Verarbeitungsmethode", nl: "Grote Input Output verwerkingsmethode" }
        ],
        correct: 0,
        explanation: {
          en: "BIO tagging assigns each token one of three labels: B- for the beginning of an entity, I- for tokens inside an entity (continuation), and O for tokens outside any entity. This allows proper handling of multi-word entities.",
          es: "El etiquetado BIO asigna a cada token una de tres etiquetas: B- para el inicio de una entidad, I- para tokens dentro de una entidad (continuación), y O para tokens fuera de cualquier entidad. Esto permite el manejo adecuado de entidades de múltiples palabras.",
          de: "BIO-Tagging weist jedem Token eines von drei Labels zu: B- für den Beginn einer Entität, I- für Token innerhalb einer Entität (Fortsetzung), und O für Token außerhalb jeder Entität. Dies ermöglicht ordnungsgemäße Behandlung mehrteiliger Entitäten.",
          nl: "BIO-labeling wijst elk token één van drie labels toe: B- voor het begin van een entiteit, I- voor tokens binnen een entiteit (voortzetting), en O voor tokens buiten elke entiteit. Dit maakt juiste behandeling van meerwoordige entiteiten mogelijk."
        }
      },
      {
        question: {
          en: "What is information extraction (IE)?",
          es: "¿Qué es la extracción de información (IE)?",
          de: "Was ist Informationsextraktion (IE)?",
          nl: "Wat is informatie-extractie (IE)?"
        },
        options: [
          { en: "Converting unstructured text into structured data by identifying entities, relationships, and events", es: "Convertir texto no estructurado en datos estructurados identificando entidades, relaciones y eventos", de: "Unstrukturierten Text in strukturierte Daten umwandeln durch Identifizierung von Entitäten, Beziehungen und Ereignissen", nl: "Ongestructureerde tekst omzetten naar gestructureerde gegevens door entiteiten, relaties en gebeurtenissen te identificeren" },
          { en: "Extracting files from compressed archives", es: "Extraer archivos de archivos comprimidos", de: "Dateien aus komprimierten Archiven extrahieren", nl: "Bestanden uit gecomprimeerde archieven extraheren" },
          { en: "Removing irrelevant information from text", es: "Eliminar información irrelevante del texto", de: "Irrelevante Informationen aus Text entfernen", nl: "Irrelevante informatie uit tekst verwijderen" },
          { en: "Extracting keywords for search indexing", es: "Extraer palabras clave para indexación de búsqueda", de: "Schlüsselwörter für Suchindexierung extrahieren", nl: "Trefwoorden extraheren voor zoekindexering" }
        ],
        correct: 0,
        explanation: {
          en: "Information extraction transforms free text into structured representations by automatically identifying and extracting specific types of information like entities, their relationships, and events described in the text.",
          es: "La extracción de información transforma texto libre en representaciones estructuradas identificando y extrayendo automáticamente tipos específicos de información como entidades, sus relaciones y eventos descritos en el texto.",
          de: "Informationsextraktion transformiert freien Text in strukturierte Repräsentationen durch automatische Identifizierung und Extraktion spezifischer Informationstypen wie Entitäten, ihre Beziehungen und im Text beschriebene Ereignisse.",
          nl: "Informatie-extractie transformeert vrije tekst naar gestructureerde representaties door automatisch specifieke informatietypen te identificeren en extraheren zoals entiteiten, hun relaties en gebeurtenissen beschreven in de tekst."
        }
      },
      {
        question: {
          en: "What is relation extraction in NLP?",
          es: "¿Qué es la extracción de relaciones en PLN?",
          de: "Was ist Beziehungsextraktion in NLP?",
          nl: "Wat is relatieextractie in NLP?"
        },
        options: [
          { en: "Identifying and classifying semantic relationships between entities in text", es: "Identificar y clasificar relaciones semánticas entre entidades en texto", de: "Identifizieren und Klassifizieren semantischer Beziehungen zwischen Entitäten in Text", nl: "Identificeren en classificeren van semantische relaties tussen entiteiten in tekst" },
          { en: "Finding grammatical dependencies between words", es: "Encontrar dependencias gramaticales entre palabras", de: "Grammatische Abhängigkeiten zwischen Wörtern finden", nl: "Grammaticale afhankelijkheden tussen woorden vinden" },
          { en: "Extracting citations and references", es: "Extraer citas y referencias", de: "Zitate und Referenzen extrahieren", nl: "Citaten en referenties extraheren" },
          { en: "Building family tree relationships", es: "Construir relaciones de árbol genealógico", de: "Stammbaum-Beziehungen aufbauen", nl: "Stamboomrelaties opbouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Relation extraction identifies semantic relationships between entities, such as 'works_for', 'located_in', 'married_to', etc. It builds knowledge graphs and structured databases from unstructured text.",
          es: "La extracción de relaciones identifica relaciones semánticas entre entidades, como 'trabaja_para', 'ubicado_en', 'casado_con', etc. Construye grafos de conocimiento y bases de datos estructuradas desde texto no estructurado.",
          de: "Beziehungsextraktion identifiziert semantische Beziehungen zwischen Entitäten, wie 'arbeitet_für', 'befindet_sich_in', 'verheiratet_mit', etc. Sie baut Wissensgraphen und strukturierte Datenbanken aus unstrukturiertem Text auf.",
          nl: "Relatieextractie identificeert semantische relaties tussen entiteiten, zoals 'werkt_voor', 'gelegen_in', 'getrouwd_met', enz. Het bouwt kennisgrafieken en gestructureerde databases uit ongestructureerde tekst."
        }
      },
      {
        question: {
          en: "What is event extraction?",
          es: "¿Qué es la extracción de eventos?",
          de: "Was ist Ereignisextraktion?",
          nl: "Wat is gebeurtenisextractie?"
        },
        options: [
          { en: "Identifying mentions of events and their participants, locations, and temporal information in text", es: "Identificar menciones de eventos y sus participantes, ubicaciones e información temporal en texto", de: "Identifizieren von Ereigniserwähnungen und ihren Teilnehmern, Orten und zeitlichen Informationen in Text", nl: "Identificeren van vermeldingen van gebeurtenissen en hun deelnemers, locaties en temporele informatie in tekst" },
          { en: "Extracting calendar events from documents", es: "Extraer eventos de calendario de documentos", de: "Kalenderereignisse aus Dokumenten extrahieren", nl: "Kalendergebeurtenissen uit documenten extraheren" },
          { en: "Finding important historical dates", es: "Encontrar fechas históricas importantes", de: "Wichtige historische Daten finden", nl: "Belangrijke historische data vinden" },
          { en: "Analyzing social media events", es: "Analizar eventos de redes sociales", de: "Social Media Ereignisse analysieren", nl: "Social media gebeurtenissen analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "Event extraction identifies structured representations of events mentioned in text, including the event type, participants (who), location (where), time (when), and trigger words that indicate the event.",
          es: "La extracción de eventos identifica representaciones estructuradas de eventos mencionados en texto, incluyendo el tipo de evento, participantes (quién), ubicación (dónde), tiempo (cuándo), y palabras gatillo que indican el evento.",
          de: "Ereignisextraktion identifiziert strukturierte Repräsentationen von im Text erwähnten Ereignissen, einschließlich Ereignistyp, Teilnehmer (wer), Ort (wo), Zeit (wann) und Auslösewörter die das Ereignis anzeigen.",
          nl: "Gebeurtenisextractie identificeert gestructureerde representaties van gebeurtenissen genoemd in tekst, inclusief het gebeurtenistype, deelnemers (wie), locatie (waar), tijd (wanneer), en triggerwoorden die de gebeurtenis aangeven."
        }
      },
      {
        question: {
          en: "What is coreference resolution?",
          es: "¿Qué es la resolución de correferencia?",
          de: "Was ist Koreferenzauflösung?",
          nl: "Wat is coreferentieresolutie?"
        },
        options: [
          { en: "Determining which expressions in text refer to the same real-world entity", es: "Determinar qué expresiones en texto se refieren a la misma entidad del mundo real", de: "Bestimmen welche Ausdrücke in Text sich auf dieselbe reale Entität beziehen", nl: "Bepalen welke uitdrukkingen in tekst verwijzen naar dezelfde entiteit uit de echte wereld" },
          { en: "Resolving conflicts between different information sources", es: "Resolver conflictos entre diferentes fuentes de información", de: "Konflikte zwischen verschiedenen Informationsquellen lösen", nl: "Conflicten tussen verschillende informatiebronnen oplossen" },
          { en: "Finding the main topic of a document", es: "Encontrar el tema principal de un documento", de: "Das Hauptthema eines Dokuments finden", nl: "Het hoofdonderwerp van een document vinden" },
          { en: "Matching references to citations", es: "Emparejar referencias con citas", de: "Referenzen mit Zitaten abgleichen", nl: "Referenties koppelen aan citaten" }
        ],
        correct: 0,
        explanation: {
          en: "Coreference resolution links different mentions of the same entity throughout a text, such as connecting pronouns to their antecedents or linking different ways of referring to the same person, organization, or concept.",
          es: "La resolución de correferencia vincula diferentes menciones de la misma entidad a lo largo de un texto, como conectar pronombres a sus antecedentes o vincular diferentes formas de referirse a la misma persona, organización o concepto.",
          de: "Koreferenzauflösung verbindet verschiedene Erwähnungen derselben Entität durch einen Text hindurch, wie das Verbinden von Pronomen mit ihren Antezedenzen oder das Verknüpfen verschiedener Arten sich auf dieselbe Person, Organisation oder Konzept zu beziehen.",
          nl: "Coreferentieresolutie verbindt verschillende vermeldingen van dezelfde entiteit door een tekst heen, zoals het verbinden van voornaamwoorden met hun antecedenten of het koppelen van verschillende manieren om naar dezelfde persoon, organisatie of concept te verwijzen."
        }
      },
      {
        question: {
          en: "What is entity linking (entity disambiguation)?",
          es: "¿Qué es la vinculación de entidades (desambiguación de entidades)?",
          de: "Was ist Entity Linking (Entitäts-Disambiguierung)?",
          nl: "Wat is entiteitskoppeling (entiteitsdisambiguatie)?"
        },
        options: [
          { en: "Connecting entity mentions in text to specific entries in a knowledge base or database", es: "Conectar menciones de entidades en texto con entradas específicas en una base de conocimiento o base de datos", de: "Entitätserwähnungen in Text mit spezifischen Einträgen in einer Wissensbasis oder Datenbank verbinden", nl: "Entiteitsvermeldingen in tekst verbinden met specifieke items in een kennisbasis of database" },
          { en: "Creating hyperlinks between web pages", es: "Crear hipervínculos entre páginas web", de: "Hyperlinks zwischen Webseiten erstellen", nl: "Hyperlinks tussen webpagina's maken" },
          { en: "Linking similar documents together", es: "Vincular documentos similares", de: "Ähnliche Dokumente miteinander verbinden", nl: "Vergelijkbare documenten aan elkaar koppelen" },
          { en: "Connecting database tables", es: "Conectar tablas de base de datos", de: "Datenbanktabellen verbinden", nl: "Databasetabellen verbinden" }
        ],
        correct: 0,
        explanation: {
          en: "Entity linking maps entity mentions found in text to unique identifiers in knowledge bases like Wikipedia, Wikidata, or domain-specific databases, resolving ambiguity when the same name refers to different entities.",
          es: "La vinculación de entidades mapea menciones de entidades encontradas en texto a identificadores únicos en bases de conocimiento como Wikipedia, Wikidata, o bases de datos específicas de dominio, resolviendo ambigüedad cuando el mismo nombre se refiere a diferentes entidades.",
          de: "Entity Linking bildet Entitätserwähnungen die in Text gefunden werden auf eindeutige Identifikatoren in Wissensbasen wie Wikipedia, Wikidata oder domänenspezifischen Datenbanken ab, löst Ambiguität wenn derselbe Name sich auf verschiedene Entitäten bezieht.",
          nl: "Entiteitskoppeling brengt entiteitsvermeldingen gevonden in tekst in kaart naar unieke identificatoren in kennisbases zoals Wikipedia, Wikidata, of domeinspecifieke databases, lost ambiguïteit op wanneer dezelfde naam verwijst naar verschillende entiteiten."
        }
      },
      {
        question: {
          en: "What is the difference between rule-based and machine learning approaches to NER?",
          es: "¿Cuál es la diferencia entre enfoques basados en reglas y de aprendizaje automático para NER?",
          de: "Was ist der Unterschied zwischen regelbasierten und maschinellen Lernansätzen für NER?",
          nl: "Wat is het verschil tussen regelgebaseerde en machine learning benaderingen voor NER?"
        },
        options: [
          { en: "Rule-based uses hand-crafted patterns and dictionaries, ML learns from annotated training data", es: "Basado en reglas usa patrones hechos a mano y diccionarios, ML aprende de datos de entrenamiento anotados", de: "Regelbasiert verwendet handgefertigte Muster und Wörterbücher, ML lernt aus annotierten Trainingsdaten", nl: "Regelgebaseerd gebruikt handgemaakte patronen en woordenboeken, ML leert van geannoteerde trainingsgegevens" },
          { en: "Rule-based is more accurate than machine learning", es: "Basado en reglas es más preciso que aprendizaje automático", de: "Regelbasiert ist genauer als maschinelles Lernen", nl: "Regelgebaseerd is nauwkeuriger dan machine learning" },
          { en: "Machine learning requires less computational resources", es: "Aprendizaje automático requiere menos recursos computacionales", de: "Maschinelles Lernen benötigt weniger Rechenressourcen", nl: "Machine learning vereist minder computationele bronnen" },
          { en: "Rule-based approaches work only with English text", es: "Los enfoques basados en reglas funcionan solo con texto en inglés", de: "Regelbasierte Ansätze funktionieren nur mit englischem Text", nl: "Regelgebaseerde benaderingen werken alleen met Engelse tekst" }
        ],
        correct: 0,
        explanation: {
          en: "Rule-based NER relies on manually created patterns, regular expressions, and gazetteers (entity lists). Machine learning approaches use statistical models trained on labeled data to automatically learn entity recognition patterns, offering better generalization but requiring annotated training data.",
          es: "NER basado en reglas depende de patrones creados manualmente, expresiones regulares y diccionarios geográficos (listas de entidades). Los enfoques de aprendizaje automático usan modelos estadísticos entrenados en datos etiquetados para aprender automáticamente patrones de reconocimiento de entidades, ofreciendo mejor generalización pero requiriendo datos de entrenamiento anotados.",
          de: "Regelbasierte NER beruht auf manuell erstellten Mustern, regulären Ausdrücken und Gazetteern (Entitätslisten). Maschinelle Lernansätze verwenden statistische Modelle die auf beschrifteten Daten trainiert wurden um automatisch Entitätserkennungsmuster zu lernen, bieten bessere Generalisierung aber benötigen annotierte Trainingsdaten.",
          nl: "Regelgebaseerde NER vertrouwt op handmatig gemaakte patronen, reguliere expressies en gazetteerlijsten (entiteitslijsten). Machine learning benaderingen gebruiken statistische modellen getraind op gelabelde gegevens om automatisch entiteitsherkenningspatronen te leren, bieden betere generalisatie maar vereisen geannoteerde trainingsgegevens."
        }
      },
      {
        question: {
          en: "What is the IOB2 tagging scheme and how does it differ from BIO?",
          es: "¿Qué es el esquema de etiquetado IOB2 y cómo difiere de BIO?",
          de: "Was ist das IOB2-Tagging-Schema und wie unterscheidet es sich von BIO?",
          nl: "Wat is het IOB2-labelschema en hoe verschilt het van BIO?"
        },
        options: [
          { en: "IOB2 is essentially the same as BIO but ensures consistent B- tags at the start of entities", es: "IOB2 es esencialmente lo mismo que BIO pero asegura etiquetas B- consistentes al inicio de entidades", de: "IOB2 ist im Wesentlichen dasselbe wie BIO aber stellt konsistente B-Tags am Beginn von Entitäten sicher", nl: "IOB2 is in wezen hetzelfde als BIO maar zorgt voor consistente B-tags aan het begin van entiteiten" },
          { en: "IOB2 uses numbers instead of letters", es: "IOB2 usa números en lugar de letras", de: "IOB2 verwendet Zahlen anstelle von Buchstaben", nl: "IOB2 gebruikt getallen in plaats van letters" },
          { en: "IOB2 can only handle two entity types", es: "IOB2 solo puede manejar dos tipos de entidades", de: "IOB2 kann nur zwei Entitätstypen handhaben", nl: "IOB2 kan alleen twee entiteitstypen behandelen" },
          { en: "IOB2 is used only for biological entities", es: "IOB2 se usa solo para entidades biológicas", de: "IOB2 wird nur für biologische Entitäten verwendet", nl: "IOB2 wordt alleen gebruikt voor biologische entiteiten" }
        ],
        correct: 0,
        explanation: {
          en: "IOB2 (Inside-Outside-Begin) is functionally equivalent to BIO tagging. Both use B- for entity beginnings, I- for continuations, and O- for outside entities. The term IOB2 emphasizes the requirement that entities must begin with B- tags.",
          es: "IOB2 (Inside-Outside-Begin) es funcionalmente equivalente al etiquetado BIO. Ambos usan B- para inicios de entidades, I- para continuaciones, y O- para fuera de entidades. El término IOB2 enfatiza el requisito de que las entidades deben comenzar con etiquetas B-.",
          de: "IOB2 (Inside-Outside-Begin) ist funktional äquivalent zu BIO-Tagging. Beide verwenden B- für Entitätsanfänge, I- für Fortsetzungen und O- für außerhalb von Entitäten. Der Begriff IOB2 betont die Anforderung dass Entitäten mit B-Tags beginnen müssen.",
          nl: "IOB2 (Inside-Outside-Begin) is functioneel equivalent aan BIO-labeling. Beide gebruiken B- voor entiteitsbeginnen, I- voor voortzettingen, en O- voor buiten entiteiten. De term IOB2 benadrukt de eis dat entiteiten moeten beginnen met B-tags."
        }
      },
      {
        question: {
          en: "What is distant supervision in information extraction?",
          es: "¿Qué es la supervisión distante en extracción de información?",
          de: "Was ist Distant Supervision in der Informationsextraktion?",
          nl: "Wat is distant supervision in informatie-extractie?"
        },
        options: [
          { en: "Automatically generating training data by aligning knowledge bases with text, reducing manual annotation", es: "Generar automáticamente datos de entrenamiento alineando bases de conocimiento con texto, reduciendo anotación manual", de: "Automatisches Generieren von Trainingsdaten durch Ausrichtung von Wissensbasen mit Text, reduziert manuelle Annotation", nl: "Automatisch trainingsgegevens genereren door kennisbases af te stemmen op tekst, vermindert handmatige annotatie" },
          { en: "Supervising machine learning models remotely", es: "Supervisar modelos de aprendizaje automático remotamente", de: "Maschinelle Lernmodelle ferngesteuert überwachen", nl: "Machine learning modellen op afstand superviseren" },
          { en: "Using less accurate supervision signals", es: "Usar señales de supervisión menos precisas", de: "Weniger genaue Überwachungssignale verwenden", nl: "Minder nauwkeurige supervisiesignalen gebruiken" },
          { en: "Training models without any supervision", es: "Entrenar modelos sin ninguna supervisión", de: "Modelle ohne jede Überwachung trainieren", nl: "Modellen trainen zonder enige supervisie" }
        ],
        correct: 0,
        explanation: {
          en: "Distant supervision leverages existing knowledge bases to automatically create training data by assuming that if two entities have a known relationship in the KB, then sentences containing both entities express that relationship.",
          es: "La supervisión distante aprovecha bases de conocimiento existentes para crear automáticamente datos de entrenamiento asumiendo que si dos entidades tienen una relación conocida en la BC, entonces oraciones que contienen ambas entidades expresan esa relación.",
          de: "Distant Supervision nutzt existierende Wissensbasen um automatisch Trainingsdaten zu erstellen durch die Annahme dass wenn zwei Entitäten eine bekannte Beziehung in der WB haben, dann Sätze die beide Entitäten enthalten diese Beziehung ausdrücken.",
          nl: "Distant supervision benut bestaande kennisbases om automatisch trainingsgegevens te creëren door aan te nemen dat als twee entiteiten een bekende relatie hebben in de KB, zinnen die beide entiteiten bevatten die relatie uitdrukken."
        }
      },
      {
        question: {
          en: "What is open information extraction (Open IE)?",
          es: "¿Qué es la extracción de información abierta (Open IE)?",
          de: "Was ist offene Informationsextraktion (Open IE)?",
          nl: "Wat is open informatie-extractie (Open IE)?"
        },
        options: [
          { en: "Extracting relations without predefined schemas, discovering arbitrary relation types from text", es: "Extraer relaciones sin esquemas predefinidos, descubriendo tipos de relaciones arbitrarias del texto", de: "Beziehungen ohne vordefinierte Schemas extrahieren, beliebige Beziehungstypen aus Text entdecken", nl: "Relaties extraheren zonder voorgedefinieerde schema's, willekeurige relatietypen uit tekst ontdekken" },
          { en: "Extracting information from publicly available sources only", es: "Extraer información solo de fuentes públicamente disponibles", de: "Informationen nur aus öffentlich verfügbaren Quellen extrahieren", nl: "Informatie alleen extraheren uit publiek beschikbare bronnen" },
          { en: "Making extraction results freely available", es: "Hacer que los resultados de extracción estén libremente disponibles", de: "Extraktionsergebnisse frei verfügbar machen", nl: "Extractieresultaten vrijelijk beschikbaar maken" },
          { en: "Using open-source tools for information extraction", es: "Usar herramientas de código abierto para extracción de información", de: "Open-Source-Tools für Informationsextraktion verwenden", nl: "Open-source tools gebruiken voor informatie-extractie" }
        ],
        correct: 0,
        explanation: {
          en: "Open IE extracts relations in an unsupervised manner without requiring predefined relation types or schemas, typically producing (subject, predicate, object) tuples from natural language sentences.",
          es: "Open IE extrae relaciones de manera no supervisada sin requerir tipos de relaciones o esquemas predefinidos, típicamente produciendo tuplas (sujeto, predicado, objeto) de oraciones en lenguaje natural.",
          de: "Open IE extrahiert Beziehungen auf unbeaufsichtigte Weise ohne vordefinierte Beziehungstypen oder Schemas zu benötigen, produziert typischerweise (Subjekt, Prädikat, Objekt) Tupel aus natürlichsprachlichen Sätzen.",
          nl: "Open IE extraheert relaties op een onbewaakte manier zonder voorgedefinieerde relatietypen of schema's te vereisen, produceert typisch (onderwerp, predikaat, object) tupels uit natuurlijke taalzinnen."
        }
      },
      {
        question: {
          en: "What is knowledge graph construction from text?",
          es: "¿Qué es la construcción de grafos de conocimiento a partir de texto?",
          de: "Was ist Wissensgraph-Konstruktion aus Text?",
          nl: "Wat is kennisgraafconstructie uit tekst?"
        },
        options: [
          { en: "Building structured knowledge representations by extracting entities and their relationships from unstructured text", es: "Construir representaciones de conocimiento estructuradas extrayendo entidades y sus relaciones de texto no estructurado", de: "Strukturierte Wissensrepräsentationen aufbauen durch Extraktion von Entitäten und ihren Beziehungen aus unstrukturiertem Text", nl: "Gestructureerde kennisrepresentaties bouwen door entiteiten en hun relaties te extraheren uit ongestructureerde tekst" },
          { en: "Drawing visual diagrams of textual content", es: "Dibujar diagramas visuales del contenido textual", de: "Visuelle Diagramme des Textinhalts zeichnen", nl: "Visuele diagrammen van tekstuele inhoud tekenen" },
          { en: "Creating network graphs of document citations", es: "Crear grafos de red de citas de documentos", de: "Netzwerkgraphen von Dokumentzitaten erstellen", nl: "Netwerkgrafieken van documentcitaten maken" },
          { en: "Building syntax trees from sentences", es: "Construir árboles sintácticos de oraciones", de: "Syntaxbäume aus Sätzen aufbauen", nl: "Syntaxbomen bouwen uit zinnen" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge graph construction involves extracting entities, relations, and attributes from text to build graph-structured knowledge bases where nodes represent entities and edges represent relationships between them.",
          es: "La construcción de grafos de conocimiento implica extraer entidades, relaciones y atributos del texto para construir bases de conocimiento estructuradas como grafos donde los nodos representan entidades y las aristas representan relaciones entre ellas.",
          de: "Wissensgraph-Konstruktion beinhaltet das Extrahieren von Entitäten, Beziehungen und Attributen aus Text um graphstrukturierte Wissensbasen aufzubauen wo Knoten Entitäten repräsentieren und Kanten Beziehungen zwischen ihnen repräsentieren.",
          nl: "Kennisgraafconstructie houdt in het extraheren van entiteiten, relaties en attributen uit tekst om graafgestructureerde kennisbases te bouwen waarbij knooppunten entiteiten vertegenwoordigen en randen relaties tussen hen vertegenwoordigen."
        }
      },
      {
        question: {
          en: "What is temporal information extraction?",
          es: "¿Qué es la extracción de información temporal?",
          de: "Was ist temporale Informationsextraktion?",
          nl: "Wat is temporele informatie-extractie?"
        },
        options: [
          { en: "Identifying and normalizing time expressions, events, and temporal relationships in text", es: "Identificar y normalizar expresiones de tiempo, eventos y relaciones temporales en texto", de: "Zeitausdrücke, Ereignisse und zeitliche Beziehungen in Text identifizieren und normalisieren", nl: "Tijdsuitdrukkingen, gebeurtenissen en temporele relaties in tekst identificeren en normaliseren" },
          { en: "Extracting information in real-time", es: "Extraer información en tiempo real", de: "Informationen in Echtzeit extrahieren", nl: "Informatie in real-time extraheren" },
          { en: "Finding timestamps in documents", es: "Encontrar marcas de tiempo en documentos", de: "Zeitstempel in Dokumenten finden", nl: "Tijdstempels in documenten vinden" },
          { en: "Analyzing changes in information over time", es: "Analizar cambios en información a lo largo del tiempo", de: "Änderungen in Informationen über die Zeit analysieren", nl: "Veranderingen in informatie over tijd analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "Temporal information extraction identifies time expressions (like 'yesterday', 'June 2023'), events, and temporal relations between them, often normalizing relative time expressions to absolute timestamps.",
          es: "La extracción de información temporal identifica expresiones de tiempo (como 'ayer', 'junio 2023'), eventos y relaciones temporales entre ellos, a menudo normalizando expresiones de tiempo relativas a marcas de tiempo absolutas.",
          de: "Temporale Informationsextraktion identifiziert Zeitausdrücke (wie 'gestern', 'Juni 2023'), Ereignisse und zeitliche Beziehungen zwischen ihnen, normalisiert oft relative Zeitausdrücke zu absoluten Zeitstempeln.",
          nl: "Temporele informatie-extractie identificeert tijdsuitdrukkingen (zoals 'gisteren', 'juni 2023'), gebeurtenissen en temporele relaties tussen hen, normaliseert vaak relatieve tijdsuitdrukkingen naar absolute tijdstempels."
        }
      },
      {
        question: {
          en: "What is entity resolution (record linkage)?",
          es: "¿Qué es la resolución de entidades (vinculación de registros)?",
          de: "Was ist Entity Resolution (Record Linkage)?",
          nl: "Wat is entiteitsresolutie (record koppeling)?"
        },
        options: [
          { en: "Determining when different mentions or records refer to the same real-world entity across data sources", es: "Determinar cuándo diferentes menciones o registros se refieren a la misma entidad del mundo real a través de fuentes de datos", de: "Bestimmen wann verschiedene Erwähnungen oder Datensätze sich auf dieselbe reale Entität über Datenquellen hinweg beziehen", nl: "Bepalen wanneer verschillende vermeldingen of records verwijzen naar dezelfde entiteit uit de echte wereld over gegevensbronnen heen" },
          { en: "Solving mathematical equations for entities", es: "Resolver ecuaciones matemáticas para entidades", de: "Mathematische Gleichungen für Entitäten lösen", nl: "Wiskundige vergelijkingen voor entiteiten oplossen" },
          { en: "Converting entity names to standard formats", es: "Convertir nombres de entidades a formatos estándar", de: "Entitätsnamen in Standardformate konvertieren", nl: "Entiteitsnamen converteren naar standaardformaten" },
          { en: "Resolving conflicts between entity definitions", es: "Resolver conflictos entre definiciones de entidades", de: "Konflikte zwischen Entitätsdefinitionen lösen", nl: "Conflicten tussen entiteitsdefinities oplossen" }
        ],
        correct: 0,
        explanation: {
          en: "Entity resolution identifies when different data records or text mentions refer to the same real-world entity, dealing with variations in names, spellings, abbreviations, and data quality issues across sources.",
          es: "La resolución de entidades identifica cuándo diferentes registros de datos o menciones de texto se refieren a la misma entidad del mundo real, manejando variaciones en nombres, ortografía, abreviaciones y problemas de calidad de datos entre fuentes.",
          de: "Entity Resolution identifiziert wann verschiedene Datensätze oder Texterwähnungen sich auf dieselbe reale Entität beziehen, behandelt Variationen in Namen, Rechtschreibung, Abkürzungen und Datenqualitätsproblemen zwischen Quellen.",
          nl: "Entiteitsresolutie identificeert wanneer verschillende gegevensrecords of tekstvermeldingen verwijzen naar dezelfde entiteit uit de echte wereld, behandelt variaties in namen, spellingen, afkortingen en gegevenskwaliteitsproblemen tussen bronnen."
        }
      },
      {
        question: {
          en: "What is slot filling in information extraction?",
          es: "¿Qué es el llenado de ranuras en extracción de información?",
          de: "Was ist Slot Filling in der Informationsextraktion?",
          nl: "Wat is slot filling in informatie-extractie?"
        },
        options: [
          { en: "Filling predefined template slots with specific entity values extracted from text", es: "Llenar ranuras de plantilla predefinidas con valores de entidad específicos extraídos del texto", de: "Vordefinierte Template-Slots mit spezifischen Entitätswerten füllen die aus Text extrahiert wurden", nl: "Voorgedefinieerde sjabloonslots vullen met specifieke entiteitswaarden geëxtraheerd uit tekst" },
          { en: "Finding empty spaces in text documents", es: "Encontrar espacios vacíos en documentos de texto", de: "Leere Räume in Textdokumenten finden", nl: "Lege ruimtes in tekstdocumenten vinden" },
          { en: "Scheduling time slots for information extraction", es: "Programar franjas horarias para extracción de información", de: "Zeitslöts für Informationsextraktion planen", nl: "Tijdslots plannen voor informatie-extractie" },
          { en: "Filling database tables with extracted data", es: "Llenar tablas de base de datos con datos extraídos", de: "Datenbanktabellen mit extrahierten Daten füllen", nl: "Databasetabellen vullen met geëxtraheerde gegevens" }
        ],
        correct: 0,
        explanation: {
          en: "Slot filling involves extracting specific types of information to fill predefined slots in structured templates, such as extracting person names, dates, and locations from news articles to populate event templates.",
          es: "El llenado de ranuras implica extraer tipos específicos de información para llenar ranuras predefinidas en plantillas estructuradas, como extraer nombres de personas, fechas y ubicaciones de artículos de noticias para poblar plantillas de eventos.",
          de: "Slot Filling beinhaltet das Extrahieren spezifischer Informationstypen um vordefinierte Slots in strukturierten Templates zu füllen, wie das Extrahieren von Personennamen, Daten und Orten aus Nachrichtenartikeln um Event-Templates zu befüllen.",
          nl: "Slot filling houdt in het extraheren van specifieke informatietypen om voorgedefinieerde slots in gestructureerde sjablonen te vullen, zoals het extraheren van persoonsnamen, datums en locaties uit nieuwsartikelen om gebeurtenissjablonen te vullen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
