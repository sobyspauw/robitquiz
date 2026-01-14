// Natuurlijke taalverwerking Quiz - Level 6
(function() {
  const level6 = {
    name: {
          "en": "Named Entity Recognition & Information Extraction",
          "es": "Reconocimiento de Entidades Nombradas y Extracción de Información",
          "de": "Named Entity Recognition & Informationsextraktion",
          "nl": "Named Entity Recognition & Informatie-extractie"
    },
    questions: [
      {
        question: {
                  "en": "What is the main advantage of using Recurrent Neural Networks (RNNs) for NLP tasks?",
                  "es": "¿Cuál es la principal ventaja de usar Redes Neuronales Recurrentes (RNN) para tareas de PLN?",
                  "de": "Was ist der Hauptvorteil von Recurrent Neural Networks (RNNs) für NLP-Aufgaben?",
                  "nl": "Wat is het hoofdvoordeel van het gebruik van Recurrent Neural Networks (RNNs) voor NLP-taken?"
        },
        options: [
        {
                  "en": "They only work with fixed-length inputs",
                  "es": "Solo funcionan con entradas de longitud fija",
                  "de": "Sie funktionieren nur mit Eingaben fester Länge",
                  "nl": "Ze werken alleen met invoer van vaste lengte"
        },
        {
                  "en": "They are faster than traditional feedforward networks",
                  "es": "Son más rápidas que las redes feedforward tradicionales",
                  "de": "Sie sind schneller als traditionelle Feedforward-Netzwerke",
                  "nl": "Ze zijn sneller dan traditionele feedforward-netwerken"
        },
        {
                  "en": "They require less training data",
                  "es": "Requieren menos datos de entrenamiento",
                  "de": "Sie benötigen weniger Trainingsdaten",
                  "nl": "Ze hebben minder trainingsdata nodig"
        },
        {
                  "en": "They can process sequences of variable length and maintain memory of previous inputs",
                  "es": "Pueden procesar secuencias de longitud variable y mantener memoria de entradas previas",
                  "de": "Sie können Sequenzen variabler Länge verarbeiten und Erinnerung an vorherige Eingaben behalten",
                  "nl": "Ze kunnen sequenties van variabele lengte verwerken en geheugen van eerdere invoer behouden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "RNNs excel at processing sequential data because they maintain hidden states that carry information from previous time steps. This allows them to handle variable-length sequences and capture temporal dependencies in text, making them ideal for tasks like language modeling, machine translation, and sequence-to-sequence learning.",
                  "es": "Las RNN destacan en el procesamiento de datos secuenciales porque mantienen estados ocultos que llevan información de pasos de tiempo previos. Esto les permite manejar secuencias de longitud variable y capturar dependencias temporales en texto, haciéndolas ideales para tareas como modelado de lenguaje, traducción automática y aprendizaje secuencia-a-secuencia.",
                  "de": "RNNs zeichnen sich bei der Verarbeitung sequenzieller Daten aus weil sie versteckte Zustände beibehalten die Informationen aus vorherigen Zeitschritten tragen. Dies ermöglicht ihnen Sequenzen variabler Länge zu handhaben und zeitliche Abhängigkeiten in Text zu erfassen, was sie ideal für Aufgaben wie Sprachmodellierung, maschinelle Übersetzung und Sequenz-zu-Sequenz-Lernen macht.",
                  "nl": "RNN's blinken uit in het verwerken van sequentiële data omdat ze verborgen toestanden behouden die informatie van vorige tijdstappen dragen. Dit stelt hen in staat om sequenties van variabele lengte te hanteren en temporele afhankelijkheden in tekst vast te leggen, wat ze ideaal maakt voor taken zoals taalmodellering, machinevertaling en sequentie-naar-sequentie leren."
        }
      },
      {
        question: {
                  "en": "What problem do LSTM and GRU networks solve that traditional RNNs struggle with?",
                  "es": "¿Qué problema resuelven las redes LSTM y GRU con el que las RNN tradicionales tienen dificultades?",
                  "de": "Welches Problem lösen LSTM- und GRU-Netzwerke das traditionelle RNNs schwer haben?",
                  "nl": "Welk probleem lossen LSTM- en GRU-netwerken op waar traditionele RNN's moeite mee hebben?"
        },
        options: [
        {
                  "en": "The vanishing gradient problem, allowing better learning of long-term dependencies",
                  "es": "El problema del gradiente que desaparece, permitiendo mejor aprendizaje de dependencias a largo plazo",
                  "de": "Das Problem verschwindender Gradienten, was besseres Lernen langfristiger Abhängigkeiten ermöglicht",
                  "nl": "Het probleem van verdwijnende gradiënten, waardoor beter leren van langetermijnafhankelijkheden mogelijk is"
        },
        {
                  "en": "They can only process shorter sequences",
                  "es": "Solo pueden procesar secuencias más cortas",
                  "de": "Sie können nur kürzere Sequenzen verarbeiten",
                  "nl": "Ze kunnen alleen kortere sequenties verwerken"
        },
        {
                  "en": "They require less memory to train",
                  "es": "Requieren menos memoria para entrenar",
                  "de": "Sie benötigen weniger Speicher zum Trainieren",
                  "nl": "Ze hebben minder geheugen nodig om te trainen"
        },
        {
                  "en": "They process text faster than regular RNNs",
                  "es": "Procesan texto más rápido que las RNN regulares",
                  "de": "Sie verarbeiten Text schneller als reguläre RNNs",
                  "nl": "Ze verwerken tekst sneller dan gewone RNN's"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "LSTM (Long Short-Term Memory) and GRU (Gated Recurrent Unit) networks address the vanishing gradient problem that affects traditional RNNs. Through gating mechanisms, they can selectively remember or forget information, allowing them to maintain relevant information over much longer sequences and learn long-term dependencies effectively.",
                  "es": "Las redes LSTM (Memoria a Largo y Corto Plazo) y GRU (Unidad Recurrente con Compuertas) abordan el problema del gradiente que desaparece que afecta a las RNN tradicionales. A través de mecanismos de compuertas, pueden recordar u olvidar información selectivamente, permitiéndoles mantener información relevante durante secuencias mucho más largas y aprender dependencias a largo plazo efectivamente.",
                  "de": "LSTM (Long Short-Term Memory) und GRU (Gated Recurrent Unit) Netzwerke adressieren das Problem verschwindender Gradienten das traditionelle RNNs betrifft. Durch Gating-Mechanismen können sie selektiv Informationen erinnern oder vergessen, was ihnen erlaubt relevante Informationen über viel längere Sequenzen zu behalten und langfristige Abhängigkeiten effektiv zu lernen.",
                  "nl": "LSTM (Long Short-Term Memory) en GRU (Gated Recurrent Unit) netwerken pakken het probleem van verdwijnende gradiënten aan dat traditionele RNN's beïnvloedt. Door gate-mechanismen kunnen ze selectief informatie onthouden of vergeten, waardoor ze relevante informatie over veel langere sequenties kunnen behouden en langetermijnafhankelijkheden effectief kunnen leren."
        }
      },
      {
        question: {
                  "en": "What is the attention mechanism in neural NLP models?",
                  "es": "¿Qué es el mecanismo de atención en modelos neurales de PLN?",
                  "de": "Was ist der Aufmerksamkeitsmechanismus in neuralen NLP-Modellen?",
                  "nl": "Wat is het aandachtsmechanisme in neurale NLP-modellen?"
        },
        options: [
        {
                  "en": "A technique for data preprocessing",
                  "es": "Una técnica para preprocesamiento de datos",
                  "de": "Eine Technik für Datenvorverarbeitung",
                  "nl": "Een techniek voor datavoorverwerking"
        },
        {
                  "en": "A mechanism that allows models to focus on relevant parts of the input sequence when generating outputs",
                  "es": "Un mecanismo que permite a los modelos enfocarse en partes relevantes de la secuencia de entrada al generar salidas",
                  "de": "Ein Mechanismus der Modellen erlaubt sich auf relevante Teile der Eingabesequenz zu konzentrieren bei der Ausgabegenerierung",
                  "nl": "Een mechanisme dat modellen in staat stelt zich te richten op relevante delen van de invoersequentie bij het genereren van uitvoer"
        },
        {
                  "en": "A way to make models train faster",
                  "es": "Una forma de hacer que los modelos entrenen más rápido",
                  "de": "Eine Möglichkeit Modelle schneller zu trainieren",
                  "nl": "Een manier om modellen sneller te laten trainen"
        },
        {
                  "en": "A method to reduce model size",
                  "es": "Un método para reducir el tamaño del modelo",
                  "de": "Eine Methode zur Reduzierung der Modellgröße",
                  "nl": "Een methode om de modelgrootte te verkleinen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The attention mechanism allows neural networks to dynamically focus on different parts of the input sequence when producing each part of the output. Instead of relying solely on a fixed-size context vector, attention computes weighted combinations of all input representations, giving the model access to the entire input sequence at each generation step.",
                  "es": "El mecanismo de atención permite a las redes neuronales enfocarse dinámicamente en diferentes partes de la secuencia de entrada al producir cada parte de la salida. En lugar de depender únicamente de un vector de contexto de tamaño fijo, la atención calcula combinaciones ponderadas de todas las representaciones de entrada, dando al modelo acceso a toda la secuencia de entrada en cada paso de generación.",
                  "de": "Der Aufmerksamkeitsmechanismus erlaubt neuronalen Netzwerken sich dynamisch auf verschiedene Teile der Eingabesequenz zu konzentrieren bei der Produktion jedes Teils der Ausgabe. Anstatt sich nur auf einen kontextvektor fester Größe zu verlassen, berechnet Aufmerksamkeit gewichtete Kombinationen aller Eingaberepräsentationen und gibt dem Modell Zugang zur gesamten Eingabesequenz bei jedem Generierungsschritt.",
                  "nl": "Het aandachtsmechanisme stelt neurale netwerken in staat om zich dynamisch te richten op verschillende delen van de invoersequentie bij het produceren van elk deel van de uitvoer. In plaats van alleen te vertrouwen op een contextvector van vaste grootte, berekent aandacht gewogen combinaties van alle invoerrepresentaties, wat het model toegang geeft tot de hele invoersequentie bij elke generatiestap."
        }
      },
      {
        question: {
                  "en": "What is the main innovation of the sequence-to-sequence (seq2seq) architecture?",
                  "es": "¿Cuál es la principal innovación de la arquitectura secuencia-a-secuencia (seq2seq)?",
                  "de": "Was ist die Hauptinnovation der Sequenz-zu-Sequenz (seq2seq) Architektur?",
                  "nl": "Wat is de hoofdinnovatie van de sequentie-naar-sequentie (seq2seq) architectuur?"
        },
        options: [
        {
                  "en": "It only works with sequences of the same length",
                  "es": "Solo funciona con secuencias de la misma longitud",
                  "de": "Es funktioniert nur mit Sequenzen gleicher Länge",
                  "nl": "Het werkt alleen met sequenties van dezelfde lengte"
        },
        {
                  "en": "It eliminates the need for training data",
                  "es": "Elimina la necesidad de datos de entrenamiento",
                  "de": "Es eliminiert die Notwendigkeit für Trainingsdaten",
                  "nl": "Het elimineert de behoefte aan trainingsdata"
        },
        {
                  "en": "It processes all words simultaneously",
                  "es": "Procesa todas las palabras simultáneamente",
                  "de": "Es verarbeitet alle Wörter gleichzeitig",
                  "nl": "Het verwerkt alle woorden tegelijkertijd"
        },
        {
                  "en": "It uses separate encoder and decoder networks to handle input and output sequences of different lengths",
                  "es": "Usa redes codificadoras y decodificadoras separadas para manejar secuencias de entrada y salida de diferentes longitudes",
                  "de": "Es verwendet separate Encoder- und Decoder-Netzwerke um Eingabe- und Ausgabesequenzen verschiedener Längen zu handhaben",
                  "nl": "Het gebruikt afzonderlijke encoder- en decoder-netwerken om invoer- en uitvoersequenties van verschillende lengtes te hanteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The seq2seq architecture revolutionized NLP by using an encoder-decoder framework where the encoder processes the input sequence into a fixed-size representation, and the decoder generates the output sequence from this representation. This allows handling input and output sequences of different lengths, making it ideal for tasks like machine translation, summarization, and chatbots.",
                  "es": "La arquitectura seq2seq revolucionó el PLN al usar un marco codificador-decodificador donde el codificador procesa la secuencia de entrada en una representación de tamaño fijo, y el decodificador genera la secuencia de salida desde esta representación. Esto permite manejar secuencias de entrada y salida de diferentes longitudes, haciéndola ideal para tareas como traducción automática, resumen y chatbots.",
                  "de": "Die seq2seq-Architektur revolutionierte NLP durch die Verwendung eines Encoder-Decoder-Frameworks wo der Encoder die Eingabesequenz in eine Repräsentation fester Größe verarbeitet und der Decoder die Ausgabesequenz aus dieser Repräsentation generiert. Dies ermöglicht das Handhaben von Eingabe- und Ausgabesequenzen verschiedener Längen, was es ideal für Aufgaben wie maschinelle Übersetzung, Zusammenfassung und Chatbots macht.",
                  "nl": "De seq2seq-architectuur revolutioneerde NLP door het gebruik van een encoder-decoder framework waarbij de encoder de invoersequentie verwerkt tot een representatie van vaste grootte, en de decoder de uitvoersequentie genereert uit deze representatie. Dit maakt het mogelijk om invoer- en uitvoersequenties van verschillende lengtes te hanteren, wat het ideaal maakt voor taken zoals machinevertaling, samenvatting en chatbots."
        }
      },
      {
        question: {
                  "en": "What are word embeddings and why are they important for neural NLP?",
                  "es": "¿Qué son las incrustaciones de palabras y por qué son importantes para el PLN neuronal?",
                  "de": "Was sind Wort-Embeddings und warum sind sie wichtig für neuronales NLP?",
                  "nl": "Wat zijn woord-embeddings en waarom zijn ze belangrijk voor neuraal NLP?"
        },
        options: [
        {
                  "en": "A method for spell checking",
                  "es": "Un método para corrección ortográfica",
                  "de": "Eine Methode für Rechtschreibprüfung",
                  "nl": "Een methode voor spellingcontrole"
        },
        {
                  "en": "A way to count word frequencies in documents",
                  "es": "Una forma de contar frecuencias de palabras en documentos",
                  "de": "Eine Möglichkeit Worthäufigkeiten in Dokumenten zu zählen",
                  "nl": "Een manier om woordfrequenties in documenten te tellen"
        },
        {
                  "en": "Binary representations of words",
                  "es": "Representaciones binarias de palabras",
                  "de": "Binäre Repräsentationen von Wörtern",
                  "nl": "Binaire representaties van woorden"
        },
        {
                  "en": "Dense vector representations of words that capture semantic relationships and can be learned from data",
                  "es": "Representaciones vectoriales densas de palabras que capturan relaciones semánticas y pueden aprenderse de los datos",
                  "de": "Dichte Vektorrepräsentationen von Wörtern die semantische Beziehungen erfassen und aus Daten gelernt werden können",
                  "nl": "Dichte vectorrepresentaties van woorden die semantische relaties vastleggen en uit data kunnen worden geleerd"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Word embeddings are dense, low-dimensional vector representations where words with similar meanings are positioned close together in the vector space. Unlike one-hot encodings, embeddings capture semantic relationships and can be learned through models like Word2Vec or GloVe. They provide neural networks with rich, continuous representations that enable better understanding of word relationships and context.",
                  "es": "Las incrustaciones de palabras son representaciones vectoriales densas y de baja dimensión donde palabras con significados similares se posicionan cerca en el espacio vectorial. A diferencia de las codificaciones one-hot, las incrustaciones capturan relaciones semánticas y pueden aprenderse a través de modelos como Word2Vec o GloVe. Proporcionan a las redes neuronales representaciones ricas y continuas que permiten mejor comprensión de relaciones entre palabras y contexto.",
                  "de": "Wort-Embeddings sind dichte, niedrigdimensionale Vektorrepräsentationen wo Wörter mit ähnlichen Bedeutungen nahe beieinander im Vektorraum positioniert sind. Anders als One-Hot-Kodierungen erfassen Embeddings semantische Beziehungen und können durch Modelle wie Word2Vec oder GloVe gelernt werden. Sie bieten neuronalen Netzwerken reiche, kontinuierliche Repräsentationen die besseres Verstehen von Wortbeziehungen und Kontext ermöglichen.",
                  "nl": "Woord-embeddings zijn dichte, laagdimensionale vectorrepresentaties waarbij woorden met vergelijkbare betekenissen dicht bij elkaar in de vectorruimte worden gepositioneerd. Anders dan one-hot encodings leggen embeddings semantische relaties vast en kunnen worden geleerd door modellen zoals Word2Vec of GloVe. Ze bieden neurale netwerken rijke, continue representaties die beter begrip van woordrelaties en context mogelijk maken."
        }
      },
      {
        question: {
                  "en": "What is Named Entity Recognition (NER)?",
                  "es": "¿Qué es el Reconocimiento de Entidades Nombradas (NER)?",
                  "de": "Was ist Named Entity Recognition (NER)?",
                  "nl": "Wat is Named Entity Recognition (NER)?"
        },
        options: [
        {
                  "en": "Generating new entity names",
                  "es": "Generar nuevos nombres de entidades",
                  "de": "Neue Entitätsnamen generieren",
                  "nl": "Nieuwe entiteitsnamen genereren"
        },
        {
                  "en": "Recognizing the author of a text document",
                  "es": "Reconocer el autor de un documento de texto",
                  "de": "Den Autor eines Textdokuments erkennen",
                  "nl": "De auteur van een tekstdocument herkennen"
        },
        {
                  "en": "Finding spelling errors in names",
                  "es": "Encontrar errores de ortografía en nombres",
                  "de": "Rechtschreibfehler in Namen finden",
                  "nl": "Spelfouten in namen vinden"
        },
        {
                  "en": "Identifying and classifying named entities like persons, organizations, locations, and dates in text",
                  "es": "Identificar y clasificar entidades nombradas como personas, organizaciones, ubicaciones y fechas en texto",
                  "de": "Identifizieren und Klassifizieren benannter Entitäten wie Personen, Organisationen, Orte und Daten in Text",
                  "nl": "Identificeren en classificeren van genoemde entiteiten zoals personen, organisaties, locaties en datums in tekst"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "NER is a key information extraction task that identifies and categorizes mentions of real-world entities in unstructured text into predefined categories such as PERSON, ORGANIZATION, LOCATION, DATE, MONEY, etc.",
                  "es": "NER es una tarea clave de extracción de información que identifica y categoriza menciones de entidades del mundo real en texto no estructurado en categorías predefinidas como PERSONA, ORGANIZACIÓN, UBICACIÓN, FECHA, DINERO, etc.",
                  "de": "NER ist eine Schlüssel-Informationsextraktionsaufgabe die Erwähnungen realer Entitäten in unstrukturiertem Text identifiziert und in vordefinierte Kategorien wie PERSON, ORGANISATION, ORT, DATUM, GELD, etc. kategorisiert.",
                  "nl": "NER is een belangrijke informatie-extractietaak die vermeldingen van entiteiten uit de echte wereld in ongestructureerde tekst identificeert en categoriseert in voorgedefinieerde categorieën zoals PERSOON, ORGANISATIE, LOCATIE, DATUM, GELD, enz."
        }
      },
      {
        question: {
                  "en": "What is the BIO tagging scheme in NER?",
                  "es": "¿Qué es el esquema de etiquetado BIO en NER?",
                  "de": "Was ist das BIO-Tagging-Schema in NER?",
                  "nl": "Wat is het BIO-labelschema in NER?"
        },
        options: [
        {
                  "en": "Binary Input/Output for neural networks",
                  "es": "Entrada/Salida Binaria para redes neuronales",
                  "de": "Binäre Eingabe/Ausgabe für neuronale Netzwerke",
                  "nl": "Binaire Input/Output voor neurale netwerken"
        },
        {
                  "en": "A biological classification system for entities",
                  "es": "Un sistema de clasificación biológica para entidades",
                  "de": "Ein biologisches Klassifikationssystem für Entitäten",
                  "nl": "Een biologisch classificatiesysteem voor entiteiten"
        },
        {
                  "en": "Big Input Output processing method",
                  "es": "Método de procesamiento de Entrada Salida Grande",
                  "de": "Große Eingabe-Ausgabe-Verarbeitungsmethode",
                  "nl": "Grote Input Output verwerkingsmethode"
        },
        {
                  "en": "B=Beginning of entity, I=Inside entity, O=Outside entity - a token-level labeling system",
                  "es": "B=Inicio de entidad, I=Dentro de entidad, O=Fuera de entidad - un sistema de etiquetado a nivel de token",
                  "de": "B=Beginn der Entität, I=Innerhalb der Entität, O=Außerhalb der Entität - ein Token-Level-Beschriftungssystem",
                  "nl": "B=Begin van entiteit, I=Binnen entiteit, O=Buiten entiteit - een labelingsysteem op tokenniveau"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "BIO tagging assigns each token one of three labels: B- for the beginning of an entity, I- for tokens inside an entity (continuation), and O for tokens outside any entity. This allows proper handling of multi-word entities.",
                  "es": "El etiquetado BIO asigna a cada token una de tres etiquetas: B- para el inicio de una entidad, I- para tokens dentro de una entidad (continuación), y O para tokens fuera de cualquier entidad. Esto permite el manejo adecuado de entidades de múltiples palabras.",
                  "de": "BIO-Tagging weist jedem Token eines von drei Labels zu: B- für den Beginn einer Entität, I- für Token innerhalb einer Entität (Fortsetzung), und O für Token außerhalb jeder Entität. Dies ermöglicht ordnungsgemäße Behandlung mehrteiliger Entitäten.",
                  "nl": "BIO-labeling wijst elk token één van drie labels toe: B- voor het begin van een entiteit, I- voor tokens binnen een entiteit (voortzetting), en O voor tokens buiten elke entiteit. Dit maakt juiste behandeling van meerwoordige entiteiten mogelijk."
        }
      },
      {
        question: {
                  "en": "What is information extraction (IE)?",
                  "es": "¿Qué es la extracción de información (IE)?",
                  "de": "Was ist Informationsextraktion (IE)?",
                  "nl": "Wat is informatie-extractie (IE)?"
        },
        options: [
        {
                  "en": "Converting unstructured text into structured data by identifying entities, relationships, and events",
                  "es": "Convertir texto no estructurado en datos estructurados identificando entidades, relaciones y eventos",
                  "de": "Unstrukturierten Text in strukturierte Daten umwandeln durch Identifizierung von Entitäten, Beziehungen und Ereignissen",
                  "nl": "Ongestructureerde tekst omzetten naar gestructureerde gegevens door entiteiten, relaties en gebeurtenissen te identificeren"
        },
        {
                  "en": "Extracting keywords for search indexing",
                  "es": "Extraer palabras clave para indexación de búsqueda",
                  "de": "Schlüsselwörter für Suchindexierung extrahieren",
                  "nl": "Trefwoorden extraheren voor zoekindexering"
        },
        {
                  "en": "Removing irrelevant information from text",
                  "es": "Eliminar información irrelevante del texto",
                  "de": "Irrelevante Informationen aus Text entfernen",
                  "nl": "Irrelevante informatie uit tekst verwijderen"
        },
        {
                  "en": "Extracting files from compressed archives",
                  "es": "Extraer archivos de archivos comprimidos",
                  "de": "Dateien aus komprimierten Archiven extrahieren",
                  "nl": "Bestanden uit gecomprimeerde archieven extraheren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Information extraction transforms free text into structured representations by automatically identifying and extracting specific types of information like entities, their relationships, and events described in the text.",
                  "es": "La extracción de información transforma texto libre en representaciones estructuradas identificando y extrayendo automáticamente tipos específicos de información como entidades, sus relaciones y eventos descritos en el texto.",
                  "de": "Informationsextraktion transformiert freien Text in strukturierte Repräsentationen durch automatische Identifizierung und Extraktion spezifischer Informationstypen wie Entitäten, ihre Beziehungen und im Text beschriebene Ereignisse.",
                  "nl": "Informatie-extractie transformeert vrije tekst naar gestructureerde representaties door automatisch specifieke informatietypen te identificeren en extraheren zoals entiteiten, hun relaties en gebeurtenissen beschreven in de tekst."
        }
      },
      {
        question: {
                  "en": "What is relation extraction in NLP?",
                  "es": "¿Qué es la extracción de relaciones en PLN?",
                  "de": "Was ist Beziehungsextraktion in NLP?",
                  "nl": "Wat is relatieextractie in NLP?"
        },
        options: [
        {
                  "en": "Identifying and classifying semantic relationships between entities in text",
                  "es": "Identificar y clasificar relaciones semánticas entre entidades en texto",
                  "de": "Identifizieren und Klassifizieren semantischer Beziehungen zwischen Entitäten in Text",
                  "nl": "Identificeren en classificeren van semantische relaties tussen entiteiten in tekst"
        },
        {
                  "en": "Finding grammatical dependencies between words",
                  "es": "Encontrar dependencias gramaticales entre palabras",
                  "de": "Grammatische Abhängigkeiten zwischen Wörtern finden",
                  "nl": "Grammaticale afhankelijkheden tussen woorden vinden"
        },
        {
                  "en": "Extracting citations and references",
                  "es": "Extraer citas y referencias",
                  "de": "Zitate und Referenzen extrahieren",
                  "nl": "Citaten en referenties extraheren"
        },
        {
                  "en": "Building family tree relationships",
                  "es": "Construir relaciones de árbol genealógico",
                  "de": "Stammbaum-Beziehungen aufbauen",
                  "nl": "Stamboomrelaties opbouwen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Relation extraction identifies semantic relationships between entities, such as 'works_for', 'located_in', 'married_to', etc. It builds knowledge graphs and structured databases from unstructured text.",
                  "es": "La extracción de relaciones identifica relaciones semánticas entre entidades, como 'trabaja_para', 'ubicado_en', 'casado_con', etc. Construye grafos de conocimiento y bases de datos estructuradas desde texto no estructurado.",
                  "de": "Beziehungsextraktion identifiziert semantische Beziehungen zwischen Entitäten, wie 'arbeitet_für', 'befindet_sich_in', 'verheiratet_mit', etc. Sie baut Wissensgraphen und strukturierte Datenbanken aus unstrukturiertem Text auf.",
                  "nl": "Relatieextractie identificeert semantische relaties tussen entiteiten, zoals 'werkt_voor', 'gelegen_in', 'getrouwd_met', enz. Het bouwt kennisgrafieken en gestructureerde databases uit ongestructureerde tekst."
        }
      },
      {
        question: {
                  "en": "What is event extraction?",
                  "es": "¿Qué es la extracción de eventos?",
                  "de": "Was ist Ereignisextraktion?",
                  "nl": "Wat is gebeurtenisextractie?"
        },
        options: [
        {
                  "en": "Analyzing social media events",
                  "es": "Analizar eventos de redes sociales",
                  "de": "Social Media Ereignisse analysieren",
                  "nl": "Social media gebeurtenissen analyseren"
        },
        {
                  "en": "Extracting calendar events from documents",
                  "es": "Extraer eventos de calendario de documentos",
                  "de": "Kalenderereignisse aus Dokumenten extrahieren",
                  "nl": "Kalendergebeurtenissen uit documenten extraheren"
        },
        {
                  "en": "Identifying mentions of events and their participants, locations, and temporal information in text",
                  "es": "Identificar menciones de eventos y sus participantes, ubicaciones e información temporal en texto",
                  "de": "Identifizieren von Ereigniserwähnungen und ihren Teilnehmern, Orten und zeitlichen Informationen in Text",
                  "nl": "Identificeren van vermeldingen van gebeurtenissen en hun deelnemers, locaties en temporele informatie in tekst"
        },
        {
                  "en": "Finding important historical dates",
                  "es": "Encontrar fechas históricas importantes",
                  "de": "Wichtige historische Daten finden",
                  "nl": "Belangrijke historische data vinden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Event extraction identifies structured representations of events mentioned in text, including the event type, participants (who), location (where), time (when), and trigger words that indicate the event.",
                  "es": "La extracción de eventos identifica representaciones estructuradas de eventos mencionados en texto, incluyendo el tipo de evento, participantes (quién), ubicación (dónde), tiempo (cuándo), y palabras gatillo que indican el evento.",
                  "de": "Ereignisextraktion identifiziert strukturierte Repräsentationen von im Text erwähnten Ereignissen, einschließlich Ereignistyp, Teilnehmer (wer), Ort (wo), Zeit (wann) und Auslösewörter die das Ereignis anzeigen.",
                  "nl": "Gebeurtenisextractie identificeert gestructureerde representaties van gebeurtenissen genoemd in tekst, inclusief het gebeurtenistype, deelnemers (wie), locatie (waar), tijd (wanneer), en triggerwoorden die de gebeurtenis aangeven."
        }
      },
      {
        question: {
                  "en": "What is coreference resolution?",
                  "es": "¿Qué es la resolución de correferencia?",
                  "de": "Was ist Koreferenzauflösung?",
                  "nl": "Wat is coreferentieresolutie?"
        },
        options: [
        {
                  "en": "Finding the main topic of a document",
                  "es": "Encontrar el tema principal de un documento",
                  "de": "Das Hauptthema eines Dokuments finden",
                  "nl": "Het hoofdonderwerp van een document vinden"
        },
        {
                  "en": "Resolving conflicts between different information sources",
                  "es": "Resolver conflictos entre diferentes fuentes de información",
                  "de": "Konflikte zwischen verschiedenen Informationsquellen lösen",
                  "nl": "Conflicten tussen verschillende informatiebronnen oplossen"
        },
        {
                  "en": "Matching references to citations",
                  "es": "Emparejar referencias con citas",
                  "de": "Referenzen mit Zitaten abgleichen",
                  "nl": "Referenties koppelen aan citaten"
        },
        {
                  "en": "Determining which expressions in text refer to the same real-world entity",
                  "es": "Determinar qué expresiones en texto se refieren a la misma entidad del mundo real",
                  "de": "Bestimmen welche Ausdrücke in Text sich auf dieselbe reale Entität beziehen",
                  "nl": "Bepalen welke uitdrukkingen in tekst verwijzen naar dezelfde entiteit uit de echte wereld"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Coreference resolution links different mentions of the same entity throughout a text, such as connecting pronouns to their antecedents or linking different ways of referring to the same person, organization, or concept.",
                  "es": "La resolución de correferencia vincula diferentes menciones de la misma entidad a lo largo de un texto, como conectar pronombres a sus antecedentes o vincular diferentes formas de referirse a la misma persona, organización o concepto.",
                  "de": "Koreferenzauflösung verbindet verschiedene Erwähnungen derselben Entität durch einen Text hindurch, wie das Verbinden von Pronomen mit ihren Antezedenzen oder das Verknüpfen verschiedener Arten sich auf dieselbe Person, Organisation oder Konzept zu beziehen.",
                  "nl": "Coreferentieresolutie verbindt verschillende vermeldingen van dezelfde entiteit door een tekst heen, zoals het verbinden van voornaamwoorden met hun antecedenten of het koppelen van verschillende manieren om naar dezelfde persoon, organisatie of concept te verwijzen."
        }
      },
      {
        question: {
                  "en": "What is entity linking (entity disambiguation)?",
                  "es": "¿Qué es la vinculación de entidades (desambiguación de entidades)?",
                  "de": "Was ist Entity Linking (Entitäts-Disambiguierung)?",
                  "nl": "Wat is entiteitskoppeling (entiteitsdisambiguatie)?"
        },
        options: [
        {
                  "en": "Connecting database tables",
                  "es": "Conectar tablas de base de datos",
                  "de": "Datenbanktabellen verbinden",
                  "nl": "Databasetabellen verbinden"
        },
        {
                  "en": "Creating hyperlinks between web pages",
                  "es": "Crear hipervínculos entre páginas web",
                  "de": "Hyperlinks zwischen Webseiten erstellen",
                  "nl": "Hyperlinks tussen webpagina's maken"
        },
        {
                  "en": "Connecting entity mentions in text to specific entries in a knowledge base or database",
                  "es": "Conectar menciones de entidades en texto con entradas específicas en una base de conocimiento o base de datos",
                  "de": "Entitätserwähnungen in Text mit spezifischen Einträgen in einer Wissensbasis oder Datenbank verbinden",
                  "nl": "Entiteitsvermeldingen in tekst verbinden met specifieke items in een kennisbasis of database"
        },
        {
                  "en": "Linking similar documents together",
                  "es": "Vincular documentos similares",
                  "de": "Ähnliche Dokumente miteinander verbinden",
                  "nl": "Vergelijkbare documenten aan elkaar koppelen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Entity linking maps entity mentions found in text to unique identifiers in knowledge bases like Wikipedia, Wikidata, or domain-specific databases, resolving ambiguity when the same name refers to different entities.",
                  "es": "La vinculación de entidades mapea menciones de entidades encontradas en texto a identificadores únicos en bases de conocimiento como Wikipedia, Wikidata, o bases de datos específicas de dominio, resolviendo ambigüedad cuando el mismo nombre se refiere a diferentes entidades.",
                  "de": "Entity Linking bildet Entitätserwähnungen die in Text gefunden werden auf eindeutige Identifikatoren in Wissensbasen wie Wikipedia, Wikidata oder domänenspezifischen Datenbanken ab, löst Ambiguität wenn derselbe Name sich auf verschiedene Entitäten bezieht.",
                  "nl": "Entiteitskoppeling brengt entiteitsvermeldingen gevonden in tekst in kaart naar unieke identificatoren in kennisbases zoals Wikipedia, Wikidata, of domeinspecifieke databases, lost ambiguïteit op wanneer dezelfde naam verwijst naar verschillende entiteiten."
        }
      },
      {
        question: {
                  "en": "What is the difference between rule-based and machine learning approaches to NER?",
                  "es": "¿Cuál es la diferencia entre enfoques basados en reglas y de aprendizaje automático para NER?",
                  "de": "Was ist der Unterschied zwischen regelbasierten und maschinellen Lernansätzen für NER?",
                  "nl": "Wat is het verschil tussen regelgebaseerde en machine learning benaderingen voor NER?"
        },
        options: [
        {
                  "en": "Rule-based is more accurate than machine learning",
                  "es": "Basado en reglas es más preciso que aprendizaje automático",
                  "de": "Regelbasiert ist genauer als maschinelles Lernen",
                  "nl": "Regelgebaseerd is nauwkeuriger dan machine learning"
        },
        {
                  "en": "Rule-based uses hand-crafted patterns and dictionaries, ML learns from annotated training data",
                  "es": "Basado en reglas usa patrones hechos a mano y diccionarios, ML aprende de datos de entrenamiento anotados",
                  "de": "Regelbasiert verwendet handgefertigte Muster und Wörterbücher, ML lernt aus annotierten Trainingsdaten",
                  "nl": "Regelgebaseerd gebruikt handgemaakte patronen en woordenboeken, ML leert van geannoteerde trainingsgegevens"
        },
        {
                  "en": "Rule-based approaches work only with English text",
                  "es": "Los enfoques basados en reglas funcionan solo con texto en inglés",
                  "de": "Regelbasierte Ansätze funktionieren nur mit englischem Text",
                  "nl": "Regelgebaseerde benaderingen werken alleen met Engelse tekst"
        },
        {
                  "en": "Machine learning requires less computational resources",
                  "es": "Aprendizaje automático requiere menos recursos computacionales",
                  "de": "Maschinelles Lernen benötigt weniger Rechenressourcen",
                  "nl": "Machine learning vereist minder computationele bronnen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Rule-based NER relies on manually created patterns, regular expressions, and gazetteers (entity lists). Machine learning approaches use statistical models trained on labeled data to automatically learn entity recognition patterns, offering better generalization but requiring annotated training data.",
                  "es": "NER basado en reglas depende de patrones creados manualmente, expresiones regulares y diccionarios geográficos (listas de entidades). Los enfoques de aprendizaje automático usan modelos estadísticos entrenados en datos etiquetados para aprender automáticamente patrones de reconocimiento de entidades, ofreciendo mejor generalización pero requiriendo datos de entrenamiento anotados.",
                  "de": "Regelbasierte NER beruht auf manuell erstellten Mustern, regulären Ausdrücken und Gazetteern (Entitätslisten). Maschinelle Lernansätze verwenden statistische Modelle die auf beschrifteten Daten trainiert wurden um automatisch Entitätserkennungsmuster zu lernen, bieten bessere Generalisierung aber benötigen annotierte Trainingsdaten.",
                  "nl": "Regelgebaseerde NER vertrouwt op handmatig gemaakte patronen, reguliere expressies en gazetteerlijsten (entiteitslijsten). Machine learning benaderingen gebruiken statistische modellen getraind op gelabelde gegevens om automatisch entiteitsherkenningspatronen te leren, bieden betere generalisatie maar vereisen geannoteerde trainingsgegevens."
        }
      },
      {
        question: {
                  "en": "What is the IOB2 tagging scheme and how does it differ from BIO?",
                  "es": "¿Qué es el esquema de etiquetado IOB2 y cómo difiere de BIO?",
                  "de": "Was ist das IOB2-Tagging-Schema und wie unterscheidet es sich von BIO?",
                  "nl": "Wat is het IOB2-labelschema en hoe verschilt het van BIO?"
        },
        options: [
        {
                  "en": "IOB2 uses numbers instead of letters",
                  "es": "IOB2 usa números en lugar de letras",
                  "de": "IOB2 verwendet Zahlen anstelle von Buchstaben",
                  "nl": "IOB2 gebruikt getallen in plaats van letters"
        },
        {
                  "en": "IOB2 can only handle two entity types",
                  "es": "IOB2 solo puede manejar dos tipos de entidades",
                  "de": "IOB2 kann nur zwei Entitätstypen handhaben",
                  "nl": "IOB2 kan alleen twee entiteitstypen behandelen"
        },
        {
                  "en": "IOB2 is essentially the same as BIO but ensures consistent B- tags at the start of entities",
                  "es": "IOB2 es esencialmente lo mismo que BIO pero asegura etiquetas B- consistentes al inicio de entidades",
                  "de": "IOB2 ist im Wesentlichen dasselbe wie BIO aber stellt konsistente B-Tags am Beginn von Entitäten sicher",
                  "nl": "IOB2 is in wezen hetzelfde als BIO maar zorgt voor consistente B-tags aan het begin van entiteiten"
        },
        {
                  "en": "IOB2 is used only for biological entities",
                  "es": "IOB2 se usa solo para entidades biológicas",
                  "de": "IOB2 wird nur für biologische Entitäten verwendet",
                  "nl": "IOB2 wordt alleen gebruikt voor biologische entiteiten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "IOB2 (Inside-Outside-Begin) is functionally equivalent to BIO tagging. Both use B- for entity beginnings, I- for continuations, and O- for outside entities. The term IOB2 emphasizes the requirement that entities must begin with B- tags.",
                  "es": "IOB2 (Inside-Outside-Begin) es funcionalmente equivalente al etiquetado BIO. Ambos usan B- para inicios de entidades, I- para continuaciones, y O- para fuera de entidades. El término IOB2 enfatiza el requisito de que las entidades deben comenzar con etiquetas B-.",
                  "de": "IOB2 (Inside-Outside-Begin) ist funktional äquivalent zu BIO-Tagging. Beide verwenden B- für Entitätsanfänge, I- für Fortsetzungen und O- für außerhalb von Entitäten. Der Begriff IOB2 betont die Anforderung dass Entitäten mit B-Tags beginnen müssen.",
                  "nl": "IOB2 (Inside-Outside-Begin) is functioneel equivalent aan BIO-labeling. Beide gebruiken B- voor entiteitsbeginnen, I- voor voortzettingen, en O- voor buiten entiteiten. De term IOB2 benadrukt de eis dat entiteiten moeten beginnen met B-tags."
        }
      },
      {
        question: {
                  "en": "What is distant supervision in information extraction?",
                  "es": "¿Qué es la supervisión distante en extracción de información?",
                  "de": "Was ist Distant Supervision in der Informationsextraktion?",
                  "nl": "Wat is distant supervision in informatie-extractie?"
        },
        options: [
        {
                  "en": "Using less accurate supervision signals",
                  "es": "Usar señales de supervisión menos precisas",
                  "de": "Weniger genaue Überwachungssignale verwenden",
                  "nl": "Minder nauwkeurige supervisiesignalen gebruiken"
        },
        {
                  "en": "Supervising machine learning models remotely",
                  "es": "Supervisar modelos de aprendizaje automático remotamente",
                  "de": "Maschinelle Lernmodelle ferngesteuert überwachen",
                  "nl": "Machine learning modellen op afstand superviseren"
        },
        {
                  "en": "Training models without any supervision",
                  "es": "Entrenar modelos sin ninguna supervisión",
                  "de": "Modelle ohne jede Überwachung trainieren",
                  "nl": "Modellen trainen zonder enige supervisie"
        },
        {
                  "en": "Automatically generating training data by aligning knowledge bases with text, reducing manual annotation",
                  "es": "Generar automáticamente datos de entrenamiento alineando bases de conocimiento con texto, reduciendo anotación manual",
                  "de": "Automatisches Generieren von Trainingsdaten durch Ausrichtung von Wissensbasen mit Text, reduziert manuelle Annotation",
                  "nl": "Automatisch trainingsgegevens genereren door kennisbases af te stemmen op tekst, vermindert handmatige annotatie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Distant supervision leverages existing knowledge bases to automatically create training data by assuming that if two entities have a known relationship in the KB, then sentences containing both entities express that relationship.",
                  "es": "La supervisión distante aprovecha bases de conocimiento existentes para crear automáticamente datos de entrenamiento asumiendo que si dos entidades tienen una relación conocida en la BC, entonces oraciones que contienen ambas entidades expresan esa relación.",
                  "de": "Distant Supervision nutzt existierende Wissensbasen um automatisch Trainingsdaten zu erstellen durch die Annahme dass wenn zwei Entitäten eine bekannte Beziehung in der WB haben, dann Sätze die beide Entitäten enthalten diese Beziehung ausdrücken.",
                  "nl": "Distant supervision benut bestaande kennisbases om automatisch trainingsgegevens te creëren door aan te nemen dat als twee entiteiten een bekende relatie hebben in de KB, zinnen die beide entiteiten bevatten die relatie uitdrukken."
        }
      },
      {
        question: {
                  "en": "What is open information extraction (Open IE)?",
                  "es": "¿Qué es la extracción de información abierta (Open IE)?",
                  "de": "Was ist offene Informationsextraktion (Open IE)?",
                  "nl": "Wat is open informatie-extractie (Open IE)?"
        },
        options: [
        {
                  "en": "Extracting information from publicly available sources only",
                  "es": "Extraer información solo de fuentes públicamente disponibles",
                  "de": "Informationen nur aus öffentlich verfügbaren Quellen extrahieren",
                  "nl": "Informatie alleen extraheren uit publiek beschikbare bronnen"
        },
        {
                  "en": "Using open-source tools for information extraction",
                  "es": "Usar herramientas de código abierto para extracción de información",
                  "de": "Open-Source-Tools für Informationsextraktion verwenden",
                  "nl": "Open-source tools gebruiken voor informatie-extractie"
        },
        {
                  "en": "Extracting relations without predefined schemas, discovering arbitrary relation types from text",
                  "es": "Extraer relaciones sin esquemas predefinidos, descubriendo tipos de relaciones arbitrarias del texto",
                  "de": "Beziehungen ohne vordefinierte Schemas extrahieren, beliebige Beziehungstypen aus Text entdecken",
                  "nl": "Relaties extraheren zonder voorgedefinieerde schema's, willekeurige relatietypen uit tekst ontdekken"
        },
        {
                  "en": "Making extraction results freely available",
                  "es": "Hacer que los resultados de extracción estén libremente disponibles",
                  "de": "Extraktionsergebnisse frei verfügbar machen",
                  "nl": "Extractieresultaten vrijelijk beschikbaar maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Open IE extracts relations in an unsupervised manner without requiring predefined relation types or schemas, typically producing (subject, predicate, object) tuples from natural language sentences.",
                  "es": "Open IE extrae relaciones de manera no supervisada sin requerir tipos de relaciones o esquemas predefinidos, típicamente produciendo tuplas (sujeto, predicado, objeto) de oraciones en lenguaje natural.",
                  "de": "Open IE extrahiert Beziehungen auf unbeaufsichtigte Weise ohne vordefinierte Beziehungstypen oder Schemas zu benötigen, produziert typischerweise (Subjekt, Prädikat, Objekt) Tupel aus natürlichsprachlichen Sätzen.",
                  "nl": "Open IE extraheert relaties op een onbewaakte manier zonder voorgedefinieerde relatietypen of schema's te vereisen, produceert typisch (onderwerp, predikaat, object) tupels uit natuurlijke taalzinnen."
        }
      },
      {
        question: {
                  "en": "What is knowledge graph construction from text?",
                  "es": "¿Qué es la construcción de grafos de conocimiento a partir de texto?",
                  "de": "Was ist Wissensgraph-Konstruktion aus Text?",
                  "nl": "Wat is kennisgraafconstructie uit tekst?"
        },
        options: [
        {
                  "en": "Drawing visual diagrams of textual content",
                  "es": "Dibujar diagramas visuales del contenido textual",
                  "de": "Visuelle Diagramme des Textinhalts zeichnen",
                  "nl": "Visuele diagrammen van tekstuele inhoud tekenen"
        },
        {
                  "en": "Building syntax trees from sentences",
                  "es": "Construir árboles sintácticos de oraciones",
                  "de": "Syntaxbäume aus Sätzen aufbauen",
                  "nl": "Syntaxbomen bouwen uit zinnen"
        },
        {
                  "en": "Creating network graphs of document citations",
                  "es": "Crear grafos de red de citas de documentos",
                  "de": "Netzwerkgraphen von Dokumentzitaten erstellen",
                  "nl": "Netwerkgrafieken van documentcitaten maken"
        },
        {
                  "en": "Building structured knowledge representations by extracting entities and their relationships from unstructured text",
                  "es": "Construir representaciones de conocimiento estructuradas extrayendo entidades y sus relaciones de texto no estructurado",
                  "de": "Strukturierte Wissensrepräsentationen aufbauen durch Extraktion von Entitäten und ihren Beziehungen aus unstrukturiertem Text",
                  "nl": "Gestructureerde kennisrepresentaties bouwen door entiteiten en hun relaties te extraheren uit ongestructureerde tekst"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Knowledge graph construction involves extracting entities, relations, and attributes from text to build graph-structured knowledge bases where nodes represent entities and edges represent relationships between them.",
                  "es": "La construcción de grafos de conocimiento implica extraer entidades, relaciones y atributos del texto para construir bases de conocimiento estructuradas como grafos donde los nodos representan entidades y las aristas representan relaciones entre ellas.",
                  "de": "Wissensgraph-Konstruktion beinhaltet das Extrahieren von Entitäten, Beziehungen und Attributen aus Text um graphstrukturierte Wissensbasen aufzubauen wo Knoten Entitäten repräsentieren und Kanten Beziehungen zwischen ihnen repräsentieren.",
                  "nl": "Kennisgraafconstructie houdt in het extraheren van entiteiten, relaties en attributen uit tekst om graafgestructureerde kennisbases te bouwen waarbij knooppunten entiteiten vertegenwoordigen en randen relaties tussen hen vertegenwoordigen."
        }
      },
      {
        question: {
                  "en": "What is temporal information extraction?",
                  "es": "¿Qué es la extracción de información temporal?",
                  "de": "Was ist temporale Informationsextraktion?",
                  "nl": "Wat is temporele informatie-extractie?"
        },
        options: [
        {
                  "en": "Finding timestamps in documents",
                  "es": "Encontrar marcas de tiempo en documentos",
                  "de": "Zeitstempel in Dokumenten finden",
                  "nl": "Tijdstempels in documenten vinden"
        },
        {
                  "en": "Extracting information in real-time",
                  "es": "Extraer información en tiempo real",
                  "de": "Informationen in Echtzeit extrahieren",
                  "nl": "Informatie in real-time extraheren"
        },
        {
                  "en": "Analyzing changes in information over time",
                  "es": "Analizar cambios en información a lo largo del tiempo",
                  "de": "Änderungen in Informationen über die Zeit analysieren",
                  "nl": "Veranderingen in informatie over tijd analyseren"
        },
        {
                  "en": "Identifying and normalizing time expressions, events, and temporal relationships in text",
                  "es": "Identificar y normalizar expresiones de tiempo, eventos y relaciones temporales en texto",
                  "de": "Zeitausdrücke, Ereignisse und zeitliche Beziehungen in Text identifizieren und normalisieren",
                  "nl": "Tijdsuitdrukkingen, gebeurtenissen en temporele relaties in tekst identificeren en normaliseren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Temporal information extraction identifies time expressions (like 'yesterday', 'June 2023'), events, and temporal relations between them, often normalizing relative time expressions to absolute timestamps.",
                  "es": "La extracción de información temporal identifica expresiones de tiempo (como 'ayer', 'junio 2023'), eventos y relaciones temporales entre ellos, a menudo normalizando expresiones de tiempo relativas a marcas de tiempo absolutas.",
                  "de": "Temporale Informationsextraktion identifiziert Zeitausdrücke (wie 'gestern', 'Juni 2023'), Ereignisse und zeitliche Beziehungen zwischen ihnen, normalisiert oft relative Zeitausdrücke zu absoluten Zeitstempeln.",
                  "nl": "Temporele informatie-extractie identificeert tijdsuitdrukkingen (zoals 'gisteren', 'juni 2023'), gebeurtenissen en temporele relaties tussen hen, normaliseert vaak relatieve tijdsuitdrukkingen naar absolute tijdstempels."
        }
      },
      {
        question: {
                  "en": "What is entity resolution (record linkage)?",
                  "es": "¿Qué es la resolución de entidades (vinculación de registros)?",
                  "de": "Was ist Entity Resolution (Record Linkage)?",
                  "nl": "Wat is entiteitsresolutie (record koppeling)?"
        },
        options: [
        {
                  "en": "Solving mathematical equations for entities",
                  "es": "Resolver ecuaciones matemáticas para entidades",
                  "de": "Mathematische Gleichungen für Entitäten lösen",
                  "nl": "Wiskundige vergelijkingen voor entiteiten oplossen"
        },
        {
                  "en": "Converting entity names to standard formats",
                  "es": "Convertir nombres de entidades a formatos estándar",
                  "de": "Entitätsnamen in Standardformate konvertieren",
                  "nl": "Entiteitsnamen converteren naar standaardformaten"
        },
        {
                  "en": "Resolving conflicts between entity definitions",
                  "es": "Resolver conflictos entre definiciones de entidades",
                  "de": "Konflikte zwischen Entitätsdefinitionen lösen",
                  "nl": "Conflicten tussen entiteitsdefinities oplossen"
        },
        {
                  "en": "Determining when different mentions or records refer to the same real-world entity across data sources",
                  "es": "Determinar cuándo diferentes menciones o registros se refieren a la misma entidad del mundo real a través de fuentes de datos",
                  "de": "Bestimmen wann verschiedene Erwähnungen oder Datensätze sich auf dieselbe reale Entität über Datenquellen hinweg beziehen",
                  "nl": "Bepalen wanneer verschillende vermeldingen of records verwijzen naar dezelfde entiteit uit de echte wereld over gegevensbronnen heen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Entity resolution identifies when different data records or text mentions refer to the same real-world entity, dealing with variations in names, spellings, abbreviations, and data quality issues across sources.",
                  "es": "La resolución de entidades identifica cuándo diferentes registros de datos o menciones de texto se refieren a la misma entidad del mundo real, manejando variaciones en nombres, ortografía, abreviaciones y problemas de calidad de datos entre fuentes.",
                  "de": "Entity Resolution identifiziert wann verschiedene Datensätze oder Texterwähnungen sich auf dieselbe reale Entität beziehen, behandelt Variationen in Namen, Rechtschreibung, Abkürzungen und Datenqualitätsproblemen zwischen Quellen.",
                  "nl": "Entiteitsresolutie identificeert wanneer verschillende gegevensrecords of tekstvermeldingen verwijzen naar dezelfde entiteit uit de echte wereld, behandelt variaties in namen, spellingen, afkortingen en gegevenskwaliteitsproblemen tussen bronnen."
        }
      },
      {
        question: {
                  "en": "What is slot filling in information extraction?",
                  "es": "¿Qué es el llenado de ranuras en extracción de información?",
                  "de": "Was ist Slot Filling in der Informationsextraktion?",
                  "nl": "Wat is slot filling in informatie-extractie?"
        },
        options: [
        {
                  "en": "Filling database tables with extracted data",
                  "es": "Llenar tablas de base de datos con datos extraídos",
                  "de": "Datenbanktabellen mit extrahierten Daten füllen",
                  "nl": "Databasetabellen vullen met geëxtraheerde gegevens"
        },
        {
                  "en": "Filling predefined template slots with specific entity values extracted from text",
                  "es": "Llenar ranuras de plantilla predefinidas con valores de entidad específicos extraídos del texto",
                  "de": "Vordefinierte Template-Slots mit spezifischen Entitätswerten füllen die aus Text extrahiert wurden",
                  "nl": "Voorgedefinieerde sjabloonslots vullen met specifieke entiteitswaarden geëxtraheerd uit tekst"
        },
        {
                  "en": "Scheduling time slots for information extraction",
                  "es": "Programar franjas horarias para extracción de información",
                  "de": "Zeitslöts für Informationsextraktion planen",
                  "nl": "Tijdslots plannen voor informatie-extractie"
        },
        {
                  "en": "Finding empty spaces in text documents",
                  "es": "Encontrar espacios vacíos en documentos de texto",
                  "de": "Leere Räume in Textdokumenten finden",
                  "nl": "Lege ruimtes in tekstdocumenten vinden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Slot filling involves extracting specific types of information to fill predefined slots in structured templates, such as extracting person names, dates, and locations from news articles to populate event templates.",
                  "es": "El llenado de ranuras implica extraer tipos específicos de información para llenar ranuras predefinidas en plantillas estructuradas, como extraer nombres de personas, fechas y ubicaciones de artículos de noticias para poblar plantillas de eventos.",
                  "de": "Slot Filling beinhaltet das Extrahieren spezifischer Informationstypen um vordefinierte Slots in strukturierten Templates zu füllen, wie das Extrahieren von Personennamen, Daten und Orten aus Nachrichtenartikeln um Event-Templates zu befüllen.",
                  "nl": "Slot filling houdt in het extraheren van specifieke informatietypen om voorgedefinieerde slots in gestructureerde sjablonen te vullen, zoals het extraheren van persoonsnamen, datums en locaties uit nieuwsartikelen om gebeurtenissjablonen te vullen."
        }
      },
      {
        question: {
                  "en": "What is Conditional Random Field (CRF) in sequence labeling?",
                  "es": "¿Qué es el Campo Aleatorio Condicional (CRF) en etiquetado de secuencias?",
                  "de": "Was ist ein Conditional Random Field (CRF) im Sequenz-Labeling?",
                  "nl": "Wat is een Conditional Random Field (CRF) in sequentie-labeling?"
        },
        options: [
        {
                  "en": "A probabilistic model for structured prediction that considers dependencies between sequential labels",
                  "es": "Un modelo probabilístico para predicción estructurada que considera dependencias entre etiquetas secuenciales",
                  "de": "Ein probabilistisches Modell für strukturierte Vorhersage das Abhängigkeiten zwischen sequentiellen Labels berücksichtigt",
                  "nl": "Een probabilistisch model voor gestructureerde voorspelling dat afhankelijkheden tussen sequentiële labels beschouwt"
        },
        {
                  "en": "A method for generating random sequences",
                  "es": "Un método para generar secuencias aleatorias",
                  "de": "Eine Methode zum Generieren zufälliger Sequenzen",
                  "nl": "Een methode voor het genereren van willekeurige sequenties"
        },
        {
                  "en": "A clustering algorithm for text",
                  "es": "Un algoritmo de agrupamiento para texto",
                  "de": "Ein Clustering-Algorithmus für Text",
                  "nl": "Een clusteralgoritme voor tekst"
        },
        {
                  "en": "A type of random forest classifier",
                  "es": "Un tipo de clasificador de bosque aleatorio",
                  "de": "Eine Art Random Forest Klassifikator",
                  "nl": "Een type random forest classificeerder"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "CRFs are discriminative models that excel at sequence labeling tasks like NER and POS tagging by modeling the conditional probability of label sequences given input sequences, considering label dependencies.",
                  "es": "Los CRF son modelos discriminativos que destacan en tareas de etiquetado de secuencias como NER y etiquetado POS modelando la probabilidad condicional de secuencias de etiquetas dadas secuencias de entrada, considerando dependencias de etiquetas.",
                  "de": "CRFs sind diskriminative Modelle die bei Sequenz-Labeling-Aufgaben wie NER und POS-Tagging brillieren durch Modellierung der bedingten Wahrscheinlichkeit von Label-Sequenzen bei gegebenen Eingabesequenzen, berücksichtigt Label-Abhängigkeiten.",
                  "nl": "CRFs zijn discriminatieve modellen die uitblinken in sequentie-labelingtaken zoals NER en POS-tagging door de conditionele waarschijnlijkheid van labelsequenties gegeven invoersequenties te modelleren, beschouwt labelafhankelijkheden."
        }
      },
      {
        question: {
                  "en": "What is BiLSTM-CRF architecture?",
                  "es": "¿Qué es la arquitectura BiLSTM-CRF?",
                  "de": "Was ist die BiLSTM-CRF Architektur?",
                  "nl": "Wat is de BiLSTM-CRF architectuur?"
        },
        options: [
        {
                  "en": "A neural architecture combining bidirectional LSTM for context encoding with CRF for structured prediction",
                  "es": "Una arquitectura neuronal que combina LSTM bidireccional para codificación de contexto con CRF para predicción estructurada",
                  "de": "Eine neuronale Architektur die bidirektionales LSTM für Kontextkodierung mit CRF für strukturierte Vorhersage kombiniert",
                  "nl": "Een neurale architectuur die bidirectionele LSTM voor contextcodering combineert met CRF voor gestructureerde voorspelling"
        },
        {
                  "en": "A two-layer LSTM network",
                  "es": "Una red LSTM de dos capas",
                  "de": "Ein zweischichtiges LSTM-Netzwerk",
                  "nl": "Een tweelaags LSTM-netwerk"
        },
        {
                  "en": "A compressed version of standard LSTM",
                  "es": "Una versión comprimida de LSTM estándar",
                  "de": "Eine komprimierte Version von Standard-LSTM",
                  "nl": "Een gecomprimeerde versie van standaard LSTM"
        },
        {
                  "en": "A biological sequence classifier",
                  "es": "Un clasificador de secuencias biológicas",
                  "de": "Ein biologischer Sequenz-Klassifikator",
                  "nl": "Een biologische sequentieclassificeerder"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "BiLSTM-CRF combines the strengths of bidirectional LSTMs (capturing context from both directions) with CRFs (modeling label dependencies), achieving state-of-the-art results in sequence labeling tasks like NER.",
                  "es": "BiLSTM-CRF combina las fortalezas de LSTMs bidireccionales (capturando contexto desde ambas direcciones) con CRFs (modelando dependencias de etiquetas), logrando resultados de vanguardia en tareas de etiquetado de secuencias como NER.",
                  "de": "BiLSTM-CRF kombiniert die Stärken von bidirektionalen LSTMs (Erfassen von Kontext aus beiden Richtungen) mit CRFs (Modellierung von Label-Abhängigkeiten), erreicht State-of-the-Art Ergebnisse bei Sequenz-Labeling-Aufgaben wie NER.",
                  "nl": "BiLSTM-CRF combineert de sterke punten van bidirectionele LSTMs (context vastleggen vanuit beide richtingen) met CRFs (labelafhankelijkheden modelleren), behaalt state-of-the-art resultaten in sequentie-labelingtaken zoals NER."
        }
      },
      {
        question: {
                  "en": "What are gazetteers in NER?",
                  "es": "¿Qué son los diccionarios geográficos en NER?",
                  "de": "Was sind Gazetteer in NER?",
                  "nl": "Wat zijn gazetteers in NER?"
        },
        options: [
        {
                  "en": "Lists of known entities (places, people, organizations) used as features or lookup resources",
                  "es": "Listas de entidades conocidas (lugares, personas, organizaciones) usadas como características o recursos de búsqueda",
                  "de": "Listen bekannter Entitäten (Orte, Personen, Organisationen) verwendet als Features oder Nachschlageressourcen",
                  "nl": "Lijsten van bekende entiteiten (plaatsen, mensen, organisaties) gebruikt als features of opzoekbronnen"
        },
        {
                  "en": "Geographical databases only",
                  "es": "Solo bases de datos geográficas",
                  "de": "Nur geographische Datenbanken",
                  "nl": "Alleen geografische databases"
        },
        {
                  "en": "Geographic coordinate systems",
                  "es": "Sistemas de coordenadas geográficas",
                  "de": "Geographische Koordinatensysteme",
                  "nl": "Geografische coördinatensystemen"
        },
        {
                  "en": "Newspaper archives",
                  "es": "Archivos de periódicos",
                  "de": "Zeitungsarchive",
                  "nl": "Krantenarchieven"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Gazetteers are curated lists of named entities used to improve NER performance by providing external knowledge about known entities, helping recognize and classify entity mentions in text.",
                  "es": "Los diccionarios geográficos son listas curadas de entidades nombradas usadas para mejorar el rendimiento de NER proporcionando conocimiento externo sobre entidades conocidas, ayudando a reconocer y clasificar menciones de entidades en texto.",
                  "de": "Gazetteer sind kuratierte Listen benannter Entitäten verwendet um NER-Leistung zu verbessern durch Bereitstellung externen Wissens über bekannte Entitäten, hilft Entitätserwähnungen in Text zu erkennen und zu klassifizieren.",
                  "nl": "Gazetteers zijn samengestelde lijsten van genoemde entiteiten gebruikt om NER-prestaties te verbeteren door externe kennis over bekende entiteiten te verstrekken, helpt entiteitsvermeldingen in tekst te herkennen en classificeren."
        }
      },
      {
        question: {
                  "en": "What is joint entity and relation extraction?",
                  "es": "¿Qué es la extracción conjunta de entidades y relaciones?",
                  "de": "Was ist gemeinsame Entitäts- und Beziehungsextraktion?",
                  "nl": "Wat is gezamenlijke entiteits- en relatieextractie?"
        },
        options: [
        {
                  "en": "Merging entity and relation databases",
                  "es": "Fusionar bases de datos de entidades y relaciones",
                  "de": "Entitäts- und Beziehungsdatenbanken zusammenführen",
                  "nl": "Entiteits- en relatiedatabases samenvoegen"
        },
        {
                  "en": "Simultaneously identifying entities and their relationships in a single model rather than pipeline approach",
                  "es": "Identificar simultáneamente entidades y sus relaciones en un solo modelo en lugar de enfoque de tubería",
                  "de": "Gleichzeitiges Identifizieren von Entitäten und ihren Beziehungen in einem einzelnen Modell statt Pipeline-Ansatz",
                  "nl": "Gelijktijdig entiteiten en hun relaties identificeren in een enkel model in plaats van pijplijnbenadering"
        },
        {
                  "en": "Extracting both structured and unstructured data",
                  "es": "Extraer datos estructurados y no estructurados",
                  "de": "Strukturierte und unstrukturierte Daten extrahieren",
                  "nl": "Zowel gestructureerde als ongestructureerde gegevens extraheren"
        },
        {
                  "en": "Running entity and relation extraction in parallel",
                  "es": "Ejecutar extracción de entidades y relaciones en paralelo",
                  "de": "Entitäts- und Beziehungsextraktion parallel ausführen",
                  "nl": "Entiteits- en relatieextractie parallel uitvoeren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Joint extraction models recognize that entity identification and relation extraction are interdependent tasks, performing both simultaneously to leverage mutual information and avoid error propagation from pipeline approaches.",
                  "es": "Los modelos de extracción conjunta reconocen que la identificación de entidades y extracción de relaciones son tareas interdependientes, realizando ambas simultáneamente para aprovechar información mutua y evitar propagación de errores de enfoques de tubería.",
                  "de": "Gemeinsame Extraktionsmodelle erkennen dass Entitätsidentifikation und Beziehungsextraktion voneinander abhängige Aufgaben sind, führen beide gleichzeitig aus um gegenseitige Informationen zu nutzen und Fehlerpropagation von Pipeline-Ansätzen zu vermeiden.",
                  "nl": "Gezamenlijke extractiemodellen erkennen dat entiteitsidentificatie en relatieextractie onderling afhankelijke taken zijn, voeren beide gelijktijdig uit om wederzijdse informatie te benutten en foutpropagatie van pijplijnbenaderingen te vermijden."
        }
      },
      {
        question: {
                  "en": "What is mention detection in coreference resolution?",
                  "es": "¿Qué es la detección de menciones en resolución de correferencia?",
                  "de": "Was ist Erwähnungserkennung in der Koreferenzauflösung?",
                  "nl": "Wat is vermeldingsdetectie in coreferentieresolutie?"
        },
        options: [
        {
                  "en": "Counting how many times entities are mentioned",
                  "es": "Contar cuántas veces se mencionan entidades",
                  "de": "Zählen wie oft Entitäten erwähnt werden",
                  "nl": "Tellen hoe vaak entiteiten worden genoemd"
        },
        {
                  "en": "Finding explicit entity names only",
                  "es": "Encontrar solo nombres de entidades explícitos",
                  "de": "Nur explizite Entitätsnamen finden",
                  "nl": "Alleen expliciete entiteitsnamen vinden"
        },
        {
                  "en": "Detecting when entities are mentioned for the first time",
                  "es": "Detectar cuándo se mencionan entidades por primera vez",
                  "de": "Erkennen wann Entitäten zum ersten Mal erwähnt werden",
                  "nl": "Detecteren wanneer entiteiten voor het eerst worden genoemd"
        },
        {
                  "en": "Identifying all noun phrases and pronouns that could potentially refer to entities",
                  "es": "Identificar todas las frases nominales y pronombres que potencialmente podrían referirse a entidades",
                  "de": "Identifizieren aller Nominalphrasen und Pronomen die potenziell auf Entitäten verweisen könnten",
                  "nl": "Identificeren van alle naamwoordgroepen en voornaamwoorden die mogelijk naar entiteiten kunnen verwijzen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Mention detection is the first step in coreference resolution, identifying all text spans (noun phrases, pronouns, proper names) that could potentially refer to entities before determining which mentions refer to the same entity.",
                  "es": "La detección de menciones es el primer paso en resolución de correferencia, identificando todos los tramos de texto (frases nominales, pronombres, nombres propios) que potencialmente podrían referirse a entidades antes de determinar qué menciones se refieren a la misma entidad.",
                  "de": "Erwähnungserkennung ist der erste Schritt in der Koreferenzauflösung, identifiziert alle Textspannen (Nominalphrasen, Pronomen, Eigennamen) die potenziell auf Entitäten verweisen könnten bevor bestimmt wird welche Erwähnungen sich auf dieselbe Entität beziehen.",
                  "nl": "Vermeldingsdetectie is de eerste stap in coreferentieresolutie, identificeert alle tekstsegmenten (naamwoordgroepen, voornaamwoorden, eigennamen) die mogelijk naar entiteiten kunnen verwijzen voordat wordt bepaald welke vermeldingen naar dezelfde entiteit verwijzen."
        }
      },
      {
        question: {
                  "en": "What is cross-document coreference resolution?",
                  "es": "¿Qué es la resolución de correferencia entre documentos?",
                  "de": "Was ist dokumentenübergreifende Koreferenzauflösung?",
                  "nl": "Wat is cross-document coreferentieresolutie?"
        },
        options: [
        {
                  "en": "Resolving conflicts between document versions",
                  "es": "Resolver conflictos entre versiones de documentos",
                  "de": "Konflikte zwischen Dokumentversionen lösen",
                  "nl": "Conflicten tussen documentversies oplossen"
        },
        {
                  "en": "Cross-referencing citations between papers",
                  "es": "Hacer referencias cruzadas de citas entre artículos",
                  "de": "Querverweise von Zitaten zwischen Papieren",
                  "nl": "Kruisverwijzingen maken van citaten tussen papers"
        },
        {
                  "en": "Linking mentions of the same entity across multiple documents",
                  "es": "Vincular menciones de la misma entidad a través de múltiples documentos",
                  "de": "Erwähnungen derselben Entität über mehrere Dokumente hinweg verknüpfen",
                  "nl": "Vermeldingen van dezelfde entiteit over meerdere documenten heen koppelen"
        },
        {
                  "en": "Comparing documents for similarities",
                  "es": "Comparar documentos por similitudes",
                  "de": "Dokumente auf Ähnlichkeiten vergleichen",
                  "nl": "Documenten vergelijken op overeenkomsten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cross-document coreference extends within-document coreference to identify when the same real-world entity is mentioned in different documents, enabling knowledge aggregation across text collections.",
                  "es": "La correferencia entre documentos extiende la correferencia dentro de documentos para identificar cuándo la misma entidad del mundo real se menciona en diferentes documentos, permitiendo agregación de conocimiento a través de colecciones de texto.",
                  "de": "Dokumentenübergreifende Koreferenz erweitert innerdokumentare Koreferenz um zu identifizieren wann dieselbe reale Entität in verschiedenen Dokumenten erwähnt wird, ermöglicht Wissensaggregation über Textsammlungen.",
                  "nl": "Cross-document coreferentie breidt binnen-document coreferentie uit om te identificeren wanneer dezelfde entiteit uit de echte wereld wordt genoemd in verschillende documenten, maakt kennisaggregatie mogelijk over tekstcollecties."
        }
      },
      {
        question: {
                  "en": "What is named entity disambiguation (NED)?",
                  "es": "¿Qué es la desambiguación de entidades nombradas (NED)?",
                  "de": "Was ist Named Entity Disambiguation (NED)?",
                  "nl": "Wat is named entity disambiguatie (NED)?"
        },
        options: [
        {
                  "en": "Linking entity mentions to specific entities in a knowledge base",
                  "es": "Vincular menciones de entidades a entidades específicas en una base de conocimiento",
                  "de": "Entitätserwähnungen mit spezifischen Entitäten in einer Wissensbasis verknüpfen",
                  "nl": "Entiteitsvermeldingen koppelen aan specifieke entiteiten in een kennisbank"
        },
        {
                  "en": "Finding all entity names",
                  "es": "Encontrar todos los nombres de entidades",
                  "de": "Alle Entitätsnamen finden",
                  "nl": "Alle entiteitsnamen vinden"
        },
        {
                  "en": "Naming entities clearly",
                  "es": "Nombrar entidades claramente",
                  "de": "Entitäten klar benennen",
                  "nl": "Entiteiten duidelijk benoemen"
        },
        {
                  "en": "Removing ambiguous entities from text",
                  "es": "Eliminar entidades ambiguas del texto",
                  "de": "Mehrdeutige Entitäten aus Text entfernen",
                  "nl": "Dubbelzinnige entiteiten uit tekst verwijderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "NED (also called entity linking) resolves which real-world entity a mention refers to. For example, 'Washington' could be George Washington, Washington State, or Washington DC. NED links it to the correct knowledge base entry.",
                  "es": "NED (también llamado entity linking) resuelve a qué entidad del mundo real se refiere una mención. Por ejemplo, 'Washington' podría ser George Washington, el estado de Washington, o Washington DC. NED lo vincula a la entrada correcta de la base de conocimiento.",
                  "de": "NED (auch Entity Linking genannt) löst auf welche reale Entität eine Erwähnung sich bezieht. Zum Beispiel könnte 'Washington' George Washington, der Bundesstaat Washington oder Washington DC sein. NED verknüpft es mit dem korrekten Wissensbasis-Eintrag.",
                  "nl": "NED (ook wel entity linking genoemd) lost op naar welke entiteit uit de echte wereld een vermelding verwijst. Bijvoorbeeld 'Washington' kan George Washington, Washington State, of Washington DC zijn. NED koppelt het aan de juiste kennisbank-invoer."
        }
      },
      {
        question: {
                  "en": "What is knowledge graph construction from text?",
                  "es": "¿Qué es la construcción de grafos de conocimiento desde texto?",
                  "de": "Was ist Wissensgraph-Konstruktion aus Text?",
                  "nl": "Wat is kennisgraaf constructie uit tekst?"
        },
        options: [
        {
                  "en": "Building text databases",
                  "es": "Construir bases de datos de texto",
                  "de": "Textdatenbanken bauen",
                  "nl": "Tekstdatabases bouwen"
        },
        {
                  "en": "Creating graph visualizations",
                  "es": "Crear visualizaciones de grafos",
                  "de": "Graphvisualisierungen erstellen",
                  "nl": "Graafvisualisaties maken"
        },
        {
                  "en": "Extracting entities and relationships from text to build structured knowledge graphs",
                  "es": "Extraer entidades y relaciones de texto para construir grafos de conocimiento estructurados",
                  "de": "Entitäten und Beziehungen aus Text extrahieren um strukturierte Wissensgraphen zu bauen",
                  "nl": "Entiteiten en relaties uit tekst extraheren om gestructureerde kennisgrafen te bouwen"
        },
        {
                  "en": "Drawing knowledge diagrams",
                  "es": "Dibujar diagramas de conocimiento",
                  "de": "Wissensdiagramme zeichnen",
                  "nl": "Kennisdiagrammen tekenen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Knowledge graph construction uses NER, relation extraction, and entity linking to populate structured knowledge bases with facts extracted from unstructured text. This enables semantic search and reasoning.",
                  "es": "La construcción de grafos de conocimiento usa NER, extracción de relaciones y entity linking para poblar bases de conocimiento estructuradas con hechos extraídos de texto no estructurado. Esto permite búsqueda semántica y razonamiento.",
                  "de": "Wissensgraph-Konstruktion verwendet NER, Relationsextraktion und Entity Linking um strukturierte Wissensbasen mit aus unstrukturiertem Text extrahierten Fakten zu befüllen. Dies ermöglicht semantische Suche und Reasoning.",
                  "nl": "Kennisgraaf constructie gebruikt NER, relatie-extractie en entity linking om gestructureerde kennisbanken te vullen met feiten geëxtraheerd uit ongestructureerde tekst. Dit maakt semantisch zoeken en redeneren mogelijk."
        }
      },
      {
        question: {
                  "en": "What is textual entailment?",
                  "es": "¿Qué es la implicación textual?",
                  "de": "Was ist textuelle Implikation?",
                  "nl": "Wat is tekstuele implicatie?"
        },
        options: [
        {
                  "en": "Finding text titles",
                  "es": "Encontrar títulos de texto",
                  "de": "Texttitel finden",
                  "nl": "Teksttitels vinden"
        },
        {
                  "en": "Checking if text is entitled to something",
                  "es": "Verificar si el texto tiene derecho a algo",
                  "de": "Prüfen ob Text zu etwas berechtigt ist",
                  "nl": "Controleren of tekst ergens recht op heeft"
        },
        {
                  "en": "Ensuring text completeness",
                  "es": "Asegurar completitud del texto",
                  "de": "Textvollständigkeit sicherstellen",
                  "nl": "Tekstcompleteness waarborgen"
        },
        {
                  "en": "Determining if one text logically follows from or is implied by another text",
                  "es": "Determinar si un texto sigue lógicamente de o está implicado por otro texto",
                  "de": "Bestimmen ob ein Text logisch aus einem anderen Text folgt oder impliziert wird",
                  "nl": "Bepalen of één tekst logisch volgt uit of geïmpliceerd wordt door een andere tekst"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Textual entailment (or natural language inference) determines if a hypothesis can be inferred from a premise. For example, 'John bought a car' entails 'John owns a vehicle', useful for question answering and information retrieval.",
                  "es": "La implicación textual (o inferencia de lenguaje natural) determina si una hipótesis puede inferirse de una premisa. Por ejemplo, 'Juan compró un carro' implica 'Juan posee un vehículo', útil para respuesta a preguntas y recuperación de información.",
                  "de": "Textuelle Implikation (oder natürliche Sprachinferenz) bestimmt ob eine Hypothese aus einer Prämisse abgeleitet werden kann. Zum Beispiel impliziert 'Johannes kaufte ein Auto' 'Johannes besitzt ein Fahrzeug', nützlich für Frage-Antwort und Informationsabruf.",
                  "nl": "Tekstuele implicatie (of natuurlijke taal inferentie) bepaalt of een hypothese kan worden afgeleid uit een premise. Bijvoorbeeld 'Jan kocht een auto' impliceert 'Jan bezit een voertuig', nuttig voor vraagbeantwoording en informatie-opvraging."
        }
      },
      {
        question: {
                  "en": "What is semantic similarity?",
                  "es": "¿Qué es la similitud semántica?",
                  "de": "Was ist semantische Ähnlichkeit?",
                  "nl": "Wat is semantische gelijkenis?"
        },
        options: [
        {
                  "en": "Measuring text length similarity",
                  "es": "Medir similitud de longitud de texto",
                  "de": "Textlängenähnlichkeit messen",
                  "nl": "Tekstlengte gelijkenis meten"
        },
        {
                  "en": "Measuring how similar the meanings of two text pieces are",
                  "es": "Medir cuán similares son los significados de dos piezas de texto",
                  "de": "Messen wie ähnlich die Bedeutungen zweier Textstücke sind",
                  "nl": "Meten hoe vergelijkbaar de betekenissen van twee tekststukken zijn"
        },
        {
                  "en": "Finding similar-looking text",
                  "es": "Encontrar texto de apariencia similar",
                  "de": "Ähnlich aussehenden Text finden",
                  "nl": "Vergelijkbaar uitziende tekst vinden"
        },
        {
                  "en": "Comparing semantic versions",
                  "es": "Comparar versiones semánticas",
                  "de": "Semantische Versionen vergleichen",
                  "nl": "Semantische versies vergelijken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Semantic similarity quantifies meaning overlap between texts, going beyond surface-level word matching. Modern approaches use embeddings to compute similarity scores, useful for paraphrase detection, duplicate detection, and search.",
                  "es": "La similitud semántica cuantifica superposición de significado entre textos, yendo más allá de coincidencia de palabras a nivel superficial. Los enfoques modernos usan embeddings para calcular puntajes de similitud, útil para detección de paráfrasis, detección de duplicados y búsqueda.",
                  "de": "Semantische Ähnlichkeit quantifiziert Bedeutungsüberlappung zwischen Texten, geht über oberflächliches Wort-Matching hinaus. Moderne Ansätze verwenden Embeddings um Ähnlichkeitsscores zu berechnen, nützlich für Paraphrasenerkennung, Duplikaterkennung und Suche.",
                  "nl": "Semantische gelijkenis kwantificeert betekenisoverlap tussen teksten, gaat verder dan oppervlakkige woordmatching. Moderne benaderingen gebruiken embeddings om gelijkenis scores te berekenen, nuttig voor parafrase detectie, duplicaat detectie en zoeken."
        }
      },
      {
        question: {
                  "en": "What is semantic textual similarity (STS)?",
                  "es": "¿Qué es la similitud textual semántica (STS)?",
                  "de": "Was ist semantische textuelle Ähnlichkeit (STS)?",
                  "nl": "Wat is semantische tekstuele gelijkenis (STS)?"
        },
        options: [
        {
                  "en": "String similarity metrics",
                  "es": "Métricas de similitud de cadenas",
                  "de": "String-Ähnlichkeitsmetriken",
                  "nl": "String gelijkenismetrieken"
        },
        {
                  "en": "Statistical text similarity only",
                  "es": "Solo similitud de texto estadística",
                  "de": "Nur statistische Textähnlichkeit",
                  "nl": "Alleen statistische tekstgelijkenis"
        },
        {
                  "en": "Syntax tree similarity",
                  "es": "Similitud de árbol sintáctico",
                  "de": "Syntaxbaum-Ähnlichkeit",
                  "nl": "Syntaxboom gelijkenis"
        },
        {
                  "en": "A specific task measuring meaning similarity on a graded scale from 0 to 5",
                  "es": "Una tarea específica midiendo similitud de significado en una escala graduada de 0 a 5",
                  "de": "Eine spezifische Aufgabe die Bedeutungsähnlichkeit auf einer graduierten Skala von 0 bis 5 misst",
                  "nl": "Een specifieke taak die betekenis gelijkenis meet op een gegradeerde schaal van 0 tot 5"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "STS is a standard benchmark task where systems rate sentence pair similarity from 0 (completely different) to 5 (completely equivalent). It evaluates how well models capture semantic meaning beyond surface forms.",
                  "es": "STS es una tarea de referencia estándar donde sistemas califican similitud de pares de oraciones de 0 (completamente diferente) a 5 (completamente equivalente). Evalúa qué tan bien los modelos capturan significado semántico más allá de formas superficiales.",
                  "de": "STS ist eine Standard-Benchmark-Aufgabe wo Systeme Satzpaar-Ähnlichkeit von 0 (völlig verschieden) bis 5 (völlig äquivalent) bewerten. Es evaluiert wie gut Modelle semantische Bedeutung jenseits von Oberflächenformen erfassen.",
                  "nl": "STS is een standaard benchmark taak waarbij systemen zinspaar gelijkenis beoordelen van 0 (volledig verschillend) tot 5 (volledig equivalent). Het evalueert hoe goed modellen semantische betekenis vastleggen voorbij oppervlaktevormen."
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
                  "en": "Supporting multiple UI languages",
                  "es": "Soportar múltiples idiomas de interfaz",
                  "de": "Mehrere UI-Sprachen unterstützen",
                  "nl": "Meerdere UI-talen ondersteunen"
        },
        {
                  "en": "Learning multiple programming languages",
                  "es": "Aprender múltiples lenguajes de programación",
                  "de": "Mehrere Programmiersprachen lernen",
                  "nl": "Meerdere programmeertalen leren"
        },
        {
                  "en": "Processing and understanding text in multiple languages with shared models or techniques",
                  "es": "Procesar y entender texto en múltiples idiomas con modelos o técnicas compartidas",
                  "de": "Text in mehreren Sprachen mit gemeinsamen Modellen oder Techniken verarbeiten und verstehen",
                  "nl": "Tekst in meerdere talen verwerken en begrijpen met gedeelde modellen of technieken"
        },
        {
                  "en": "Translating between languages only",
                  "es": "Solo traducir entre idiomas",
                  "de": "Nur zwischen Sprachen übersetzen",
                  "nl": "Alleen tussen talen vertalen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Multilingual NLP develops models that work across languages, often using cross-lingual embeddings or multilingual transformers like mBERT and XLM-R. This enables knowledge transfer between high and low-resource languages.",
                  "es": "El PLN multilingüe desarrolla modelos que funcionan a través de idiomas, a menudo usando embeddings cross-lingüales o transformers multilingües como mBERT y XLM-R. Esto permite transferencia de conocimiento entre idiomas de altos y bajos recursos.",
                  "de": "Mehrsprachiges NLP entwickelt Modelle die über Sprachen hinweg funktionieren, oft mit cross-lingualen Embeddings oder mehrsprachigen Transformern wie mBERT und XLM-R. Dies ermöglicht Wissenstransfer zwischen ressourcenreichen und ressourcenarmen Sprachen.",
                  "nl": "Meertalige NLP ontwikkelt modellen die werken over talen heen, vaak met cross-linguale embeddings of meertalige transformers zoals mBERT en XLM-R. Dit maakt kennisoverdracht mogelijk tussen high en low-resource talen."
        }
      },
      {
        question: {
                  "en": "What is low-resource NLP?",
                  "es": "¿Qué es el PLN de bajos recursos?",
                  "de": "Was ist Low-Resource NLP?",
                  "nl": "Wat is low-resource NLP?"
        },
        options: [
        {
                  "en": "Using older NLP methods",
                  "es": "Usar métodos de PLN más antiguos",
                  "de": "Ältere NLP-Methoden verwenden",
                  "nl": "Oudere NLP-methoden gebruiken"
        },
        {
                  "en": "Running NLP with minimal computing resources",
                  "es": "Ejecutar PLN con recursos computacionales mínimos",
                  "de": "NLP mit minimalen Rechenressourcen ausführen",
                  "nl": "NLP draaien met minimale rekenbronnen"
        },
        {
                  "en": "Developing NLP systems for languages with limited training data and linguistic resources",
                  "es": "Desarrollar sistemas de PLN para idiomas con datos de entrenamiento y recursos lingüísticos limitados",
                  "de": "NLP-Systeme für Sprachen mit begrenzten Trainingsdaten und linguistischen Ressourcen entwickeln",
                  "nl": "NLP-systemen ontwikkelen voor talen met beperkte trainingsdata en linguïstische bronnen"
        },
        {
                  "en": "Processing short texts only",
                  "es": "Procesar solo textos cortos",
                  "de": "Nur kurze Texte verarbeiten",
                  "nl": "Alleen korte teksten verwerken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Low-resource NLP tackles languages lacking large corpora, annotated data, or linguistic tools. Techniques include transfer learning, cross-lingual methods, data augmentation, and leveraging multilingual models.",
                  "es": "El PLN de bajos recursos aborda idiomas que carecen de grandes corpus, datos anotados o herramientas lingüísticas. Las técnicas incluyen aprendizaje por transferencia, métodos cross-lingüales, aumentación de datos y aprovechamiento de modelos multilingües.",
                  "de": "Low-Resource NLP befasst sich mit Sprachen denen große Korpora, annotierte Daten oder linguistische Werkzeuge fehlen. Techniken umfassen Transfer Learning, cross-linguale Methoden, Datenaugmentierung und Nutzung mehrsprachiger Modelle.",
                  "nl": "Low-resource NLP pakt talen aan die grote corpora, geannoteerde data of linguïstische tools missen. Technieken omvatten transfer learning, cross-linguale methoden, data augmentatie en gebruik van meertalige modellen."
        }
      },
      {
        question: {
                  "en": "What is zero-shot entity recognition?",
                  "es": "¿Qué es el reconocimiento de entidades de cero disparos?",
                  "de": "Was ist Zero-Shot Entity Recognition?",
                  "nl": "Wat is zero-shot entiteitsherkenning?"
        },
        options: [
        {
                  "en": "Fast entity recognition without preprocessing",
                  "es": "Reconocimiento de entidades rápido sin preprocesamiento",
                  "de": "Schnelle Entitätserkennung ohne Vorverarbeitung",
                  "nl": "Snelle entiteitsherkenning zonder voorbewerking"
        },
        {
                  "en": "Entity recognition that always fails",
                  "es": "Reconocimiento de entidades que siempre falla",
                  "de": "Entitätserkennung die immer fehlschlägt",
                  "nl": "Entiteitsherkenning die altijd faalt"
        },
        {
                  "en": "Single-attempt entity extraction",
                  "es": "Extracción de entidades en un solo intento",
                  "de": "Einmaliger Entitätsextraktionsversuch",
                  "nl": "Eenmalige entiteitsextractie"
        },
        {
                  "en": "Recognizing entity types without training examples for those specific types",
                  "es": "Reconocer tipos de entidades sin ejemplos de entrenamiento para esos tipos específicos",
                  "de": "Entitätstypen ohne Trainingsbeispiele für diese spezifischen Typen erkennen",
                  "nl": "Entiteitstypen herkennen zonder trainingsvoorbeelden voor die specifieke typen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Zero-shot entity recognition allows models to identify entity types they weren't explicitly trained on, using semantic understanding and descriptions of new entity types. This is particularly valuable for rapidly adapting to new domains.",
                  "es": "El reconocimiento de entidades de cero disparos permite a los modelos identificar tipos de entidades en los que no fueron entrenados explícitamente, usando comprensión semántica y descripciones de nuevos tipos de entidades. Esto es particularmente valioso para adaptarse rápidamente a nuevos dominios.",
                  "de": "Zero-Shot Entity Recognition ermöglicht Modellen Entitätstypen zu identifizieren auf die sie nicht explizit trainiert wurden, unter Verwendung semantischen Verständnisses und Beschreibungen neuer Entitätstypen. Dies ist besonders wertvoll für schnelle Anpassung an neue Domänen.",
                  "nl": "Zero-shot entiteitsherkenning stelt modellen in staat om entiteitstypen te identificeren waar ze niet expliciet op getraind waren, door semantisch begrip en beschrijvingen van nieuwe entiteitstypen te gebruiken. Dit is bijzonder waardevol voor snelle aanpassing aan nieuwe domeinen."
        }
      },
      {
        question: {
                  "en": "What are entity features in machine learning-based NER?",
                  "es": "¿Qué son las características de entidades en NER basado en aprendizaje automático?",
                  "de": "Was sind Entitätsmerkmale in maschinellem lernenbasiertem NER?",
                  "nl": "Wat zijn entiteitskenmerken in machine learning-gebaseerde NER?"
        },
        options: [
        {
                  "en": "Attributes used to help identify entities like capitalization, position, POS tags, and word shape",
                  "es": "Atributos usados para ayudar a identificar entidades como capitalización, posición, etiquetas POS y forma de palabra",
                  "de": "Attribute zur Identifizierung von Entitäten wie Großschreibung, Position, POS-Tags und Wortform",
                  "nl": "Attributen gebruikt om entiteiten te identificeren zoals hoofdlettergebruik, positie, POS-tags en woordvorm"
        },
        {
                  "en": "Optional entity properties",
                  "es": "Propiedades opcionales de entidades",
                  "de": "Optionale Entitätseigenschaften",
                  "nl": "Optionele entiteitseigenschappen"
        },
        {
                  "en": "Physical characteristics of entities",
                  "es": "Características físicas de entidades",
                  "de": "Physische Merkmale von Entitäten",
                  "nl": "Fysieke kenmerken van entiteiten"
        },
        {
                  "en": "Database fields for entities",
                  "es": "Campos de base de datos para entidades",
                  "de": "Datenbankfelder für Entitäten",
                  "nl": "Databasevelden voor entiteiten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Entity features are handcrafted or automatically extracted attributes that help ML models recognize entities. These include orthographic features (capitalization, punctuation), contextual features (surrounding words, POS tags), and lexical features (word shape, prefixes, suffixes).",
                  "es": "Las características de entidades son atributos elaborados manualmente o extraídos automáticamente que ayudan a modelos de ML a reconocer entidades. Incluyen características ortográficas (capitalización, puntuación), características contextuales (palabras circundantes, etiquetas POS) y características léxicas (forma de palabra, prefijos, sufijos).",
                  "de": "Entitätsmerkmale sind handgefertigte oder automatisch extrahierte Attribute die ML-Modellen helfen Entitäten zu erkennen. Diese umfassen orthographische Merkmale (Großschreibung, Interpunktion), kontextuelle Merkmale (umgebende Wörter, POS-Tags) und lexikalische Merkmale (Wortform, Präfixe, Suffixe).",
                  "nl": "Entiteitskenmerken zijn handgemaakte of automatisch geëxtraheerde attributen die ML-modellen helpen entiteiten te herkennen. Deze omvatten orthografische kenmerken (hoofdlettergebruik, interpunctie), contextuele kenmerken (omliggende woorden, POS-tags) en lexicale kenmerken (woordvorm, voorvoegsels, achtervoegsels)."
        }
      },
      {
        question: {
                  "en": "What is nested entity recognition?",
                  "es": "¿Qué es el reconocimiento de entidades anidadas?",
                  "de": "Was ist verschachtelte Entitätserkennung?",
                  "nl": "Wat is geneste entiteitsherkenning?"
        },
        options: [
        {
                  "en": "Deep learning for entity recognition",
                  "es": "Aprendizaje profundo para reconocimiento de entidades",
                  "de": "Deep Learning für Entitätserkennung",
                  "nl": "Deep learning voor entiteitsherkenning"
        },
        {
                  "en": "Organizing entities in hierarchical structures",
                  "es": "Organizar entidades en estructuras jerárquicas",
                  "de": "Entitäten in hierarchischen Strukturen organisieren",
                  "nl": "Entiteiten organiseren in hiërarchische structuren"
        },
        {
                  "en": "Entities stored in nested data structures",
                  "es": "Entidades almacenadas en estructuras de datos anidadas",
                  "de": "Entitäten in verschachtelten Datenstrukturen gespeichert",
                  "nl": "Entiteiten opgeslagen in geneste datastructuren"
        },
        {
                  "en": "Identifying entities that are contained within other entities",
                  "es": "Identificar entidades que están contenidas dentro de otras entidades",
                  "de": "Entitäten identifizieren die in anderen Entitäten enthalten sind",
                  "nl": "Entiteiten identificeren die binnen andere entiteiten zijn opgenomen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Nested entity recognition handles cases where one entity contains another, like 'Bank of America' (ORG) containing 'America' (LOC). Traditional BIO tagging can't handle overlapping entities, requiring specialized approaches.",
                  "es": "El reconocimiento de entidades anidadas maneja casos donde una entidad contiene otra, como 'Bank of America' (ORG) que contiene 'America' (LOC). El etiquetado BIO tradicional no puede manejar entidades superpuestas, requiriendo enfoques especializados.",
                  "de": "Verschachtelte Entitätserkennung behandelt Fälle wo eine Entität eine andere enthält, wie 'Bank of America' (ORG) das 'America' (LOC) enthält. Traditionelles BIO-Tagging kann überlappende Entitäten nicht handhaben, erfordert spezielle Ansätze.",
                  "nl": "Geneste entiteitsherkenning behandelt gevallen waarbij één entiteit een andere bevat, zoals 'Bank of America' (ORG) dat 'America' (LOC) bevat. Traditionele BIO-labeling kan overlappende entiteiten niet hanteren, vereist gespecialiseerde benaderingen."
        }
      },
      {
        question: {
                  "en": "What is entity salience detection?",
                  "es": "¿Qué es la detección de saliencia de entidades?",
                  "de": "Was ist Entitäts-Salienz-Erkennung?",
                  "nl": "Wat is entiteitsopvallendheidsdetectie?"
        },
        options: [
        {
                  "en": "Identifying entities that stand out visually",
                  "es": "Identificar entidades que destacan visualmente",
                  "de": "Entitäten identifizieren die visuell auffallen",
                  "nl": "Entiteiten identificeren die visueel opvallen"
        },
        {
                  "en": "Detecting spelling errors in entity names",
                  "es": "Detectar errores ortográficos en nombres de entidades",
                  "de": "Rechtschreibfehler in Entitätsnamen erkennen",
                  "nl": "Spelfouten in entiteitsnamen detecteren"
        },
        {
                  "en": "Finding highlighted entities in text",
                  "es": "Encontrar entidades resaltadas en texto",
                  "de": "Hervorgehobene Entitäten in Text finden",
                  "nl": "Gemarkeerde entiteiten in tekst vinden"
        },
        {
                  "en": "Determining which entities are most important or central to a document",
                  "es": "Determinar qué entidades son más importantes o centrales para un documento",
                  "de": "Bestimmen welche Entitäten am wichtigsten oder zentral für ein Dokument sind",
                  "nl": "Bepalen welke entiteiten het belangrijkst of centraal zijn voor een document"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Entity salience ranks entities by their importance to a document's main topics. Salient entities are mentioned frequently, appear early, and are central to the document's theme, useful for summarization and understanding document focus.",
                  "es": "La saliencia de entidades clasifica entidades por su importancia para los temas principales de un documento. Las entidades salientes se mencionan frecuentemente, aparecen temprano y son centrales al tema del documento, útil para resumir y entender el enfoque del documento.",
                  "de": "Entitäts-Salienz ordnet Entitäten nach ihrer Wichtigkeit für die Hauptthemen eines Dokuments. Saliente Entitäten werden häufig erwähnt, erscheinen früh und sind zentral für das Dokumentthema, nützlich für Zusammenfassung und Verständnis des Dokumentfokus.",
                  "nl": "Entiteitsopvallenheid rangschikt entiteiten naar hun belang voor de hoofdonderwerpen van een document. Opvallende entiteiten worden vaak genoemd, verschijnen vroeg en zijn centraal voor het documentthema, nuttig voor samenvatting en begrip van documentfocus."
        }
      },
      {
        question: {
                  "en": "What is distant reading in digital humanities NLP?",
                  "es": "¿Qué es la lectura distante en PLN de humanidades digitales?",
                  "de": "Was ist Distant Reading in Digital Humanities NLP?",
                  "nl": "Wat is distant reading in digital humanities NLP?"
        },
        options: [
        {
                  "en": "Historical document analysis",
                  "es": "Análisis de documentos históricos",
                  "de": "Historische Dokumentenanalyse",
                  "nl": "Historische documentanalyse"
        },
        {
                  "en": "Reading text from a distance for vision testing",
                  "es": "Leer texto desde lejos para pruebas de visión",
                  "de": "Text aus der Ferne für Sehtests lesen",
                  "nl": "Tekst van veraf lezen voor visustesten"
        },
        {
                  "en": "Analyzing large collections of texts computationally to identify patterns and trends",
                  "es": "Analizar grandes colecciones de textos computacionalmente para identificar patrones y tendencias",
                  "de": "Große Textsammlungen computergestützt analysieren um Muster und Trends zu identifizieren",
                  "nl": "Grote tekstcollecties computationeel analyseren om patronen en trends te identificeren"
        },
        {
                  "en": "Remote document scanning",
                  "es": "Escaneo remoto de documentos",
                  "de": "Remote-Dokumentenscanning",
                  "nl": "Op afstand documenten scannen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Distant reading uses computational methods to analyze large text corpora, revealing macro-level patterns invisible through traditional close reading. NLP techniques like topic modeling, sentiment analysis, and entity extraction enable scholars to study trends across thousands of documents.",
                  "es": "La lectura distante usa métodos computacionales para analizar grandes corpus de texto, revelando patrones a nivel macro invisibles mediante lectura cercana tradicional. Técnicas de PLN como modelado de tópicos, análisis de sentimientos y extracción de entidades permiten a académicos estudiar tendencias a través de miles de documentos.",
                  "de": "Distant Reading verwendet computergestützte Methoden um große Textkorpora zu analysieren, enthüllt Makro-Level-Muster die durch traditionelles Close Reading unsichtbar sind. NLP-Techniken wie Topic Modeling, Sentimentanalyse und Entitätsextraktion ermöglichen Wissenschaftlern Trends über Tausende von Dokumenten zu studieren.",
                  "nl": "Distant reading gebruikt computationele methoden om grote tekstcorpora te analyseren, onthult macro-niveau patronen die onzichtbaar zijn door traditionele close reading. NLP-technieken zoals topic modeling, sentimentanalyse en entiteitsextractie stellen wetenschappers in staat trends te bestuderen over duizenden documenten."
        }
      },
      {
        question: {
                  "en": "What is entity typing in information extraction?",
                  "es": "¿Qué es la tipificación de entidades en extracción de información?",
                  "de": "Was ist Entity Typing in der Informationsextraktion?",
                  "nl": "Wat is entiteitstyping in informatie-extractie?"
        },
        options: [
        {
                  "en": "Defining data types for entities",
                  "es": "Definir tipos de datos para entidades",
                  "de": "Datentypen für Entitäten definieren",
                  "nl": "Datatypen voor entiteiten definiëren"
        },
        {
                  "en": "Assigning fine-grained semantic types to entities beyond basic NER categories",
                  "es": "Asignar tipos semánticos finos a entidades más allá de categorías básicas de NER",
                  "de": "Feinkörnige semantische Typen Entitäten zuweisen jenseits grundlegender NER-Kategorien",
                  "nl": "Fijnmazige semantische typen toewijzen aan entiteiten buiten basis NER-categorieën"
        },
        {
                  "en": "Categorizing text types",
                  "es": "Categorizar tipos de texto",
                  "de": "Texttypen kategorisieren",
                  "nl": "Teksttypen categoriseren"
        },
        {
                  "en": "Typing entity names into databases",
                  "es": "Escribir nombres de entidades en bases de datos",
                  "de": "Entitätsnamen in Datenbanken eingeben",
                  "nl": "Entiteitsnamen in databases typen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Entity typing goes beyond coarse NER labels (PERSON, ORG, LOC) to assign fine-grained types like 'scientist', 'politician', 'software company', or 'city'. This richer classification supports more sophisticated information extraction and knowledge base population.",
                  "es": "La tipificación de entidades va más allá de etiquetas NER gruesas (PERSONA, ORG, LOC) para asignar tipos finos como 'científico', 'político', 'compañía de software', o 'ciudad'. Esta clasificación más rica soporta extracción de información más sofisticada y población de bases de conocimiento.",
                  "de": "Entity Typing geht über grobe NER-Labels (PERSON, ORG, LOC) hinaus um feinkörnige Typen wie 'Wissenschaftler', 'Politiker', 'Softwareunternehmen' oder 'Stadt' zuzuweisen. Diese reichere Klassifikation unterstützt ausgeklügeltere Informationsextraktion und Wissensbasis-Befüllung.",
                  "nl": "Entiteitstyping gaat verder dan grove NER-labels (PERSOON, ORG, LOC) om fijnmazige typen toe te wijzen zoals 'wetenschapper', 'politicus', 'softwarebedrijf' of 'stad'. Deze rijkere classificatie ondersteunt meer geavanceerde informatie-extractie en kennisbank populatie."
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
        },
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
        }
        ],
        correct: 3,
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
    module.exports = level6;
  }
})();