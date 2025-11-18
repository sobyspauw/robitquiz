// Natural Language Processing Quiz - Level 1: Introduction to NLP
(function() {
  const level1 = {
    name: {
      en: "Introduction to NLP",
      es: "Introducción al PLN",
      de: "Einführung in NLP",
      nl: "Inleiding tot NLP"
    },
    questions: [
      {
        question: {
          en: "What is Natural Language Processing (NLP)?",
          es: "¿Qué es el Procesamiento de Lenguaje Natural (PLN)?",
          de: "Was ist Natural Language Processing (NLP)?",
          nl: "Wat is Natural Language Processing (NLP)?"
        },
        options: [
          { en: "A field of AI that helps computers understand and work with human language", es: "Un campo de IA que ayuda a las computadoras a entender y trabajar con el lenguaje humano", de: "Ein Bereich der KI der Computern hilft menschliche Sprache zu verstehen und damit zu arbeiten", nl: "Een gebied van AI dat computers helpt menselijke taal te begrijpen en ermee te werken" },
          { en: "A programming language for natural sciences", es: "Un lenguaje de programación para ciencias naturales", de: "Eine Programmiersprache für Naturwissenschaften", nl: "Een programmeertaal voor natuurwetenschappen" },
          { en: "A method for processing numerical data", es: "Un método para procesar datos numéricos", de: "Eine Methode zur Verarbeitung numerischer Daten", nl: "Een methode voor het verwerken van numerieke data" },
          { en: "A system for translating between computer languages", es: "Un sistema para traducir entre lenguajes de computadora", de: "Ein System zum Übersetzen zwischen Computersprachen", nl: "Een systeem voor het vertalen tussen computertalen" }
        ],
        correct: 0,
        explanation: {
          en: "NLP is a branch of artificial intelligence that focuses on the interaction between computers and human language, enabling machines to read, understand, and derive meaning from human language.",
          es: "PLN es una rama de la inteligencia artificial que se enfoca en la interacción entre computadoras y el lenguaje humano, permitiendo a las máquinas leer, entender y derivar significado del lenguaje humano.",
          de: "NLP ist ein Zweig der künstlichen Intelligenz der sich auf die Interaktion zwischen Computern und menschlicher Sprache konzentriert, ermöglicht Maschinen menschliche Sprache zu lesen, verstehen und Bedeutung daraus abzuleiten.",
          nl: "NLP is een tak van kunstmatige intelligentie die zich richt op de interactie tussen computers en menselijke taal, waardoor machines menselijke taal kunnen lezen, begrijpen en er betekenis uit kunnen afleiden."
        }
      },
      {
        question: {
          en: "What is tokenization in NLP?",
          es: "¿Qué es la tokenización en PLN?",
          de: "Was ist Tokenisierung in NLP?",
          nl: "Wat is tokenisatie in NLP?"
        },
        options: [
          { en: "Breaking text into smaller units like words or sentences", es: "Dividir texto en unidades más pequeñas como palabras u oraciones", de: "Text in kleinere Einheiten wie Wörter oder Sätze aufteilen", nl: "Tekst opdelen in kleinere eenheden zoals woorden of zinnen" },
          { en: "Converting text to uppercase", es: "Convertir texto a mayúsculas", de: "Text in Großbuchstaben umwandeln", nl: "Tekst naar hoofdletters omzetten" },
          { en: "Removing punctuation from text", es: "Eliminar puntuación del texto", de: "Interpunktion aus Text entfernen", nl: "Leestekens uit tekst verwijderen" },
          { en: "Counting the number of words", es: "Contar el número de palabras", de: "Anzahl der Wörter zählen", nl: "Het aantal woorden tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Tokenization is the process of breaking down text into individual tokens (words, phrases, or other meaningful elements) that can be processed by NLP algorithms.",
          es: "La tokenización es el proceso de dividir texto en tokens individuales (palabras, frases u otros elementos significativos) que pueden ser procesados por algoritmos de PLN.",
          de: "Tokenisierung ist der Prozess Text in einzelne Tokens (Wörter, Phrasen oder andere bedeutungsvolle Elemente) aufzuteilen die von NLP-Algorithmen verarbeitet werden können.",
          nl: "Tokenisatie is het proces van het opdelen van tekst in individuele tokens (woorden, zinsdelen of andere betekenisvolle elementen) die door NLP-algoritmes kunnen worden verwerkt."
        }
      },
      {
        question: {
          en: "What does 'stemming' mean in text processing?",
          es: "¿Qué significa 'stemming' en procesamiento de texto?",
          de: "Was bedeutet 'Stemming' in der Textverarbeitung?",
          nl: "Wat betekent 'stemming' in tekstverwerking?"
        },
        options: [
          { en: "Reducing words to their root form", es: "Reducir palabras a su forma raíz", de: "Wörter auf ihre Grundform reduzieren", nl: "Woorden terugbrengen tot hun grondvorm" },
          { en: "Finding the emotional tone of text", es: "Encontrar el tono emocional del texto", de: "Den emotionalen Ton des Textes finden", nl: "De emotionele toon van tekst vinden" },
          { en: "Organizing text by themes", es: "Organizar texto por temas", de: "Text nach Themen organisieren", nl: "Tekst organiseren op thema's" },
          { en: "Translating text to another language", es: "Traducir texto a otro idioma", de: "Text in eine andere Sprache übersetzen", nl: "Tekst naar een andere taal vertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Stemming is the process of reducing words to their word stem or root form, for example 'running', 'ran', and 'runs' all stem to 'run'.",
          es: "Stemming es el proceso de reducir palabras a su raíz o forma base, por ejemplo 'corriendo', 'corrió' y 'corre' se reducen a 'corr'.",
          de: "Stemming ist der Prozess Wörter auf ihren Wortstamm oder Grundform zu reduzieren, zum Beispiel werden 'laufen', 'lief' und 'läuft' alle zu 'lauf'.",
          nl: "Stemming is het proces van het terugbrengen van woorden tot hun woordstam of grondvorm, bijvoorbeeld 'lopend', 'liep' en 'loopt' worden allemaal teruggebracht tot 'loop'."
        }
      },
      {
        question: {
          en: "What is sentiment analysis?",
          es: "¿Qué es el análisis de sentimientos?",
          de: "Was ist Sentimentanalyse?",
          nl: "Wat is sentimentanalyse?"
        },
        options: [
          { en: "Determining the emotional tone or opinion expressed in text", es: "Determinar el tono emocional u opinión expresada en texto", de: "Den emotionalen Ton oder die Meinung im Text bestimmen", nl: "Het bepalen van de emotionele toon of mening uitgedrukt in tekst" },
          { en: "Analyzing the grammar of sentences", es: "Analizar la gramática de las oraciones", de: "Die Grammatik von Sätzen analysieren", nl: "De grammatica van zinnen analyseren" },
          { en: "Finding similar words in text", es: "Encontrar palabras similares en texto", de: "Ähnliche Wörter im Text finden", nl: "Vergelijkbare woorden in tekst vinden" },
          { en: "Counting word frequencies", es: "Contar frecuencias de palabras", de: "Worthäufigkeiten zählen", nl: "Woordfrequenties tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Sentiment analysis is the computational study of opinions, sentiments, and emotions expressed in text, typically classifying text as positive, negative, or neutral.",
          es: "El análisis de sentimientos es el estudio computacional de opiniones, sentimientos y emociones expresadas en texto, típicamente clasificando texto como positivo, negativo o neutral.",
          de: "Sentimentanalyse ist die computergestützte Untersuchung von Meinungen, Gefühlen und Emotionen die in Text ausgedrückt werden, typischerweise wird Text als positiv, negativ oder neutral klassifiziert.",
          nl: "Sentimentanalyse is de computationele studie van meningen, gevoelens en emoties uitgedrukt in tekst, meestal classificeert het tekst als positief, negatief of neutraal."
        }
      },
      {
        question: {
          en: "What is a corpus in NLP?",
          es: "¿Qué es un corpus en PLN?",
          de: "Was ist ein Korpus in NLP?",
          nl: "Wat is een corpus in NLP?"
        },
        options: [
          { en: "A large collection of texts used for training and testing NLP models", es: "Una gran colección de textos usada para entrenar y probar modelos de PLN", de: "Eine große Sammlung von Texten die für Training und Testen von NLP-Modellen verwendet wird", nl: "Een grote verzameling teksten gebruikt voor het trainen en testen van NLP-modellen" },
          { en: "A single document or article", es: "Un solo documento o artículo", de: "Ein einzelnes Dokument oder Artikel", nl: "Een enkel document of artikel" },
          { en: "A type of neural network", es: "Un tipo de red neuronal", de: "Eine Art neuronales Netzwerk", nl: "Een type neuraal netwerk" },
          { en: "A grammar rule set", es: "Un conjunto de reglas gramaticales", de: "Ein Grammatikregelsatz", nl: "Een set grammaticaregels" }
        ],
        correct: 0,
        explanation: {
          en: "A corpus is a large, structured collection of texts that serves as the foundation for training NLP models and studying language patterns and usage.",
          es: "Un corpus es una gran colección estructurada de textos que sirve como base para entrenar modelos de PLN y estudiar patrones y uso del lenguaje.",
          de: "Ein Korpus ist eine große, strukturierte Sammlung von Texten die als Grundlage für das Training von NLP-Modellen und das Studium von Sprachmustern und -gebrauch dient.",
          nl: "Een corpus is een grote, gestructureerde verzameling teksten die dient als basis voor het trainen van NLP-modellen en het bestuderen van taalpatronen en -gebruik."
        }
      },
      {
        question: {
          nl: "Wat is lemmatisering in NLP?",
          en: "What is lemmatization in NLP?",
          es: "¿Qué es la lematización en PLN?",
          de: "Was ist Lemmatisierung in NLP?"
        },
        options: [
          { nl: "Het terugbrengen van woorden tot hun basisvorm met grammaticale context", en: "Reducing words to their base form with grammatical context", es: "Reducir palabras a su forma base con contexto gramatical", de: "Wörter auf ihre Grundform mit grammatischem Kontext reduzieren" },
          { nl: "Het tellen van woordfrequenties", en: "Counting word frequencies", es: "Contar frecuencias de palabras", de: "Worthäufigkeiten zählen" },
          { nl: "Het verwijderen van stopwoorden", en: "Removing stop words", es: "Eliminar palabras vacías", de: "Stoppwörter entfernen" },
          { nl: "Het identificeren van eigennamen", en: "Identifying proper nouns", es: "Identificar nombres propios", de: "Eigennamen identifizieren" }
        ],
        correct: 0,
        explanation: {
          nl: "Lemmatisering is het proces van het terugbrengen van woorden tot hun lemma (basisvorm) waarbij de grammaticale context wordt meegenomen, in tegenstelling tot stemming dat puur algoritmisch werkt.",
          en: "Lemmatization is the process of reducing words to their lemma (base form) while considering grammatical context, unlike stemming which works purely algorithmically.",
          es: "La lematización es el proceso de reducir palabras a su lema (forma base) considerando el contexto gramatical, a diferencia del stemming que funciona puramente algorítmico.",
          de: "Lemmatisierung ist der Prozess Wörter auf ihr Lemma (Grundform) zu reduzieren unter Berücksichtigung des grammatischen Kontexts, im Gegensatz zu Stemming das rein algorithmisch funktioniert."
        }
      },
      {
        question: {
          nl: "Wat zijn stopwoorden?",
          en: "What are stop words?",
          es: "¿Qué son las palabras vacías?",
          de: "Was sind Stoppwörter?"
        },
        options: [
          { nl: "Veelvoorkomende woorden die meestal gefilterd worden uit tekstanalyse", en: "Common words that are usually filtered out from text analysis", es: "Palabras comunes que usualmente se filtran del análisis de texto", de: "Häufige Wörter die normalerweise aus der Textanalyse herausgefiltert werden" },
          { nl: "Woorden die een tekst stoppen", en: "Words that stop a text", es: "Palabras que detienen un texto", de: "Wörter die einen Text stoppen" },
          { nl: "Belangrijke kernwoorden in een tekst", en: "Important keywords in a text", es: "Palabras clave importantes en un texto", de: "Wichtige Schlüsselwörter in einem Text" },
          { nl: "Woorden met meer dan 10 letters", en: "Words with more than 10 letters", es: "Palabras con más de 10 letras", de: "Wörter mit mehr als 10 Buchstaben" }
        ],
        correct: 0,
        explanation: {
          nl: "Stopwoorden zijn veelvoorkomende woorden zoals 'de', 'het', 'en', 'is' die meestal weinig betekenis toevoegen aan tekstanalyse en daarom vaak worden weggelaten.",
          en: "Stop words are common words like 'the', 'and', 'is', 'in' that usually add little meaning to text analysis and are therefore often removed.",
          es: "Las palabras vacías son palabras comunes como 'el', 'y', 'es', 'en' que usualmente agregan poco significado al análisis de texto y por lo tanto se eliminan frecuentemente.",
          de: "Stoppwörter sind häufige Wörter wie 'der', 'und', 'ist', 'in' die normalerweise wenig Bedeutung zur Textanalyse hinzufügen und daher oft entfernt werden."
        }
      },
      {
        question: {
          nl: "Wat is Part-of-Speech (POS) tagging?",
          en: "What is Part-of-Speech (POS) tagging?",
          es: "¿Qué es el etiquetado de partes del discurso (POS)?",
          de: "Was ist Part-of-Speech (POS) Tagging?"
        },
        options: [
          { nl: "Het toekennen van grammaticale categorieën aan woorden", en: "Assigning grammatical categories to words", es: "Asignar categorías gramaticales a las palabras", de: "Grammatische Kategorien zu Wörtern zuweisen" },
          { nl: "Het markeren van positieve en negatieve woorden", en: "Marking positive and negative words", es: "Marcar palabras positivas y negativas", de: "Positive und negative Wörter markieren" },
          { nl: "Het nummeren van woorden in een tekst", en: "Numbering words in a text", es: "Numerar palabras en un texto", de: "Wörter in einem Text nummerieren" },
          { nl: "Het groeperen van gelijkaardige zinnen", en: "Grouping similar sentences", es: "Agrupar oraciones similares", de: "Ähnliche Sätze gruppieren" }
        ],
        correct: 0,
        explanation: {
          nl: "POS tagging is het proces waarbij elk woord in een tekst wordt gelabeld met zijn grammaticale categorie zoals zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord, etc.",
          en: "POS tagging is the process of labeling each word in a text with its grammatical category such as noun, verb, adjective, etc.",
          es: "El etiquetado POS es el proceso de etiquetar cada palabra en un texto con su categoría gramatical como sustantivo, verbo, adjetivo, etc.",
          de: "POS-Tagging ist der Prozess jedes Wort in einem Text mit seiner grammatischen Kategorie wie Substantiv, Verb, Adjektiv usw. zu beschriften."
        }
      },
      {
        question: {
          nl: "Wat is een n-gram in NLP?",
          en: "What is an n-gram in NLP?",
          es: "¿Qué es un n-grama en PLN?",
          de: "Was ist ein n-Gramm in NLP?"
        },
        options: [
          { nl: "Een reeks van n opeenvolgende woorden uit een tekst", en: "A sequence of n consecutive words from text", es: "Una secuencia de n palabras consecutivas de un texto", de: "Eine Folge von n aufeinanderfolgenden Wörtern aus einem Text" },
          { nl: "Een grammaticaregel met n onderdelen", en: "A grammar rule with n parts", es: "Una regla gramatical con n partes", de: "Eine Grammatikregel mit n Teilen" },
          { nl: "Een netwerk met n knopen", en: "A network with n nodes", es: "Una red con n nodos", de: "Ein Netzwerk mit n Knoten" },
          { nl: "Een algoritme dat n stappen uitvoert", en: "An algorithm that performs n steps", es: "Un algoritmo que realiza n pasos", de: "Ein Algorithmus der n Schritte ausführt" }
        ],
        correct: 0,
        explanation: {
          nl: "Een n-gram is een opeenvolgende reeks van n items uit een tekst. Een unigram (1-gram) is één woord, een bigram (2-gram) zijn twee opeenvolgende woorden, een trigram (3-gram) zijn drie opeenvolgende woorden, enzovoort.",
          en: "An n-gram is a contiguous sequence of n items from text. A unigram (1-gram) is one word, a bigram (2-gram) is two consecutive words, a trigram (3-gram) is three consecutive words, and so on.",
          es: "Un n-grama es una secuencia contigua de n elementos de un texto. Un unigrama (1-grama) es una palabra, un bigrama (2-grama) son dos palabras consecutivas, un trigrama (3-grama) son tres palabras consecutivas, y así sucesivamente.",
          de: "Ein n-Gramm ist eine zusammenhängende Folge von n Elementen aus einem Text. Ein Unigramm (1-Gramm) ist ein Wort, ein Bigramm (2-Gramm) sind zwei aufeinanderfolgende Wörter, ein Trigramm (3-Gramm) sind drei aufeinanderfolgende Wörter, und so weiter."
        }
      },
      {
        question: {
          nl: "Wat is named entity recognition (NER)?",
          en: "What is named entity recognition (NER)?",
          es: "¿Qué es el reconocimiento de entidades nombradas (NER)?",
          de: "Was ist Named Entity Recognition (NER)?"
        },
        options: [
          { nl: "Het identificeren en classificeren van eigennamen in tekst", en: "Identifying and classifying proper names in text", es: "Identificar y clasificar nombres propios en texto", de: "Eigennamen in Text identifizieren und klassifizieren" },
          { nl: "Het herkennen van stemmen in audio", en: "Recognizing voices in audio", es: "Reconocer voces en audio", de: "Stimmen in Audio erkennen" },
          { nl: "Het benoemen van variabelen in code", en: "Naming variables in code", es: "Nombrar variables en código", de: "Variablen in Code benennen" },
          { nl: "Het creëren van nieuwe woorden", en: "Creating new words", es: "Crear nuevas palabras", de: "Neue Wörter erschaffen" }
        ],
        correct: 0,
        explanation: {
          nl: "Named Entity Recognition (NER) is een NLP-taak die gericht is op het lokaliseren en classificeren van benoemde entiteiten in tekst zoals persoonsnamen, organisaties, locaties, tijdaanduidingen, etc.",
          en: "Named Entity Recognition (NER) is an NLP task that seeks to locate and classify named entities in text such as person names, organizations, locations, time expressions, etc.",
          es: "El Reconocimiento de Entidades Nombradas (NER) es una tarea de PLN que busca localizar y clasificar entidades nombradas en texto como nombres de personas, organizaciones, ubicaciones, expresiones de tiempo, etc.",
          de: "Named Entity Recognition (NER) ist eine NLP-Aufgabe die darauf abzielt benannte Entitäten in Text zu lokalisieren und zu klassifizieren wie Personennamen, Organisationen, Orte, Zeitausdrücke usw."
        }
      },
      {
        question: {
          nl: "Wat is tekstnormalisatie?",
          en: "What is text normalization?",
          es: "¿Qué es la normalización de texto?",
          de: "Was ist Textnormalisierung?"
        },
        options: [
          { nl: "Het converteren van tekst naar een standaardformaat", en: "Converting text to a standard format", es: "Convertir texto a un formato estándar", de: "Text in ein Standardformat konvertieren" },
          { nl: "Het maken van tekst langer", en: "Making text longer", es: "Hacer el texto más largo", de: "Text länger machen" },
          { nl: "Het vertalen van tekst", en: "Translating text", es: "Traducir texto", de: "Text übersetzen" },
          { nl: "Het samenvatten van tekst", en: "Summarizing text", es: "Resumir texto", de: "Text zusammenfassen" }
        ],
        correct: 0,
        explanation: {
          nl: "Tekstnormalisatie is het proces van het transformeren van tekst naar een meer uniforme vorm, bijvoorbeeld het omzetten naar kleine letters, het verwijderen van leestekens, of het standaardiseren van afkortingen.",
          en: "Text normalization is the process of transforming text into a more uniform form, such as converting to lowercase, removing punctuation, or standardizing abbreviations.",
          es: "La normalización de texto es el proceso de transformar texto en una forma más uniforme, como convertir a minúsculas, eliminar puntuación, o estandarizar abreviaciones.",
          de: "Textnormalisierung ist der Prozess Text in eine einheitlichere Form zu transformieren, wie die Umwandlung in Kleinbuchstaben, das Entfernen von Interpunktion oder die Standardisierung von Abkürzungen."
        }
      },
      {
        question: {
          nl: "Wat is een bag-of-words model?",
          en: "What is a bag-of-words model?",
          es: "¿Qué es un modelo de bolsa de palabras?",
          de: "Was ist ein Bag-of-Words-Modell?"
        },
        options: [
          { nl: "Een tekstrepresentatie die alleen woordfrequenties bijhoudt, zonder volgorde", en: "A text representation that only tracks word frequencies, ignoring order", es: "Una representación de texto que solo rastrea frecuencias de palabras, ignorando el orden", de: "Eine Textrepräsentation die nur Worthäufigkeiten verfolgt und die Reihenfolge ignoriert" },
          { nl: "Een fysieke zak met woorden", en: "A physical bag containing words", es: "Una bolsa física que contiene palabras", de: "Ein physischer Beutel mit Wörtern" },
          { nl: "Een model dat woorden sorteert", en: "A model that sorts words", es: "Un modelo que ordena palabras", de: "Ein Modell das Wörter sortiert" },
          { nl: "Een woordenboek met definities", en: "A dictionary with definitions", es: "Un diccionario con definiciones", de: "Ein Wörterbuch mit Definitionen" }
        ],
        correct: 0,
        explanation: {
          nl: "Een bag-of-words model is een vereenvoudigde representatie van tekst waarbij een document wordt voorgesteld als een verzameling woorden, waarbij de volgorde en grammatica worden genegeerd maar de frequentie behouden blijft.",
          en: "A bag-of-words model is a simplified representation of text where a document is represented as a collection of words, disregarding order and grammar but maintaining frequency.",
          es: "Un modelo de bolsa de palabras es una representación simplificada de texto donde un documento se representa como una colección de palabras, ignorando el orden y la gramática pero manteniendo la frecuencia.",
          de: "Ein Bag-of-Words-Modell ist eine vereinfachte Darstellung von Text bei der ein Dokument als Sammlung von Wörtern dargestellt wird wobei Reihenfolge und Grammatik ignoriert aber die Häufigkeit beibehalten wird."
        }
      },
      {
        question: {
          nl: "Wat is TF-IDF?",
          en: "What is TF-IDF?",
          es: "¿Qué es TF-IDF?",
          de: "Was ist TF-IDF?"
        },
        options: [
          { nl: "Term Frequency-Inverse Document Frequency, een manier om de belangrijkheid van woorden te meten", en: "Term Frequency-Inverse Document Frequency, a way to measure word importance", es: "Frecuencia de Término-Frecuencia Inversa de Documento, una forma de medir la importancia de las palabras", de: "Term Frequency-Inverse Document Frequency, eine Methode um Wortbedeutung zu messen" },
          { nl: "True False-Internet Data Format", en: "True False-Internet Data Format", es: "Formato de Datos de Internet Verdadero Falso", de: "True False-Internet Data Format" },
          { nl: "Text Filtering-Information Display Format", en: "Text Filtering-Information Display Format", es: "Formato de Visualización de Información de Filtrado de Texto", de: "Text Filtering-Information Display Format" },
          { nl: "Technical Framework-Integrated Development Format", en: "Technical Framework-Integrated Development Format", es: "Marco Técnico-Formato de Desarrollo Integrado", de: "Technical Framework-Integrated Development Format" }
        ],
        correct: 0,
        explanation: {
          nl: "TF-IDF (Term Frequency-Inverse Document Frequency) is een numerieke statistiek die weergeeft hoe belangrijk een woord is voor een document in een verzameling documenten. Het verhoogt evenredig met het aantal keren dat een woord in het document voorkomt, maar wordt gecompenseerd door de frequentie van het woord in de corpus.",
          en: "TF-IDF (Term Frequency-Inverse Document Frequency) is a numerical statistic that reflects how important a word is to a document in a collection of documents. It increases proportionally to the number of times a word appears in the document but is offset by the frequency of the word in the corpus.",
          es: "TF-IDF (Frecuencia de Término-Frecuencia Inversa de Documento) es una estadística numérica que refleja qué tan importante es una palabra para un documento en una colección de documentos. Aumenta proporcionalmente al número de veces que una palabra aparece en el documento pero se compensa por la frecuencia de la palabra en el corpus.",
          de: "TF-IDF (Term Frequency-Inverse Document Frequency) ist eine numerische Statistik die widerspiegelt wie wichtig ein Wort für ein Dokument in einer Dokumentensammlung ist. Sie steigt proportional zur Anzahl der Male die ein Wort im Dokument erscheint wird aber durch die Häufigkeit des Wortes im Korpus ausgeglichen."
        }
      },
      {
        question: {
          nl: "Wat is een regex (reguliere expressie)?",
          en: "What is a regex (regular expression)?",
          es: "¿Qué es una regex (expresión regular)?",
          de: "Was ist ein Regex (regulärer Ausdruck)?"
        },
        options: [
          { nl: "Een patroon dat gebruikt wordt om tekst te zoeken en manipuleren", en: "A pattern used to search and manipulate text", es: "Un patrón usado para buscar y manipular texto", de: "Ein Muster das verwendet wird um Text zu suchen und zu manipulieren" },
          { nl: "Een type database", en: "A type of database", es: "Un tipo de base de datos", de: "Eine Art Datenbank" },
          { nl: "Een programmeertalsleuteling", en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache" },
          { nl: "Een soort neuraal netwerk", en: "A type of neural network", es: "Un tipo de red neuronal", de: "Eine Art neuronales Netzwerk" }
        ],
        correct: 0,
        explanation: {
          nl: "Een reguliere expressie (regex) is een reeks tekens die een zoekpatroon vormt. Het wordt gebruikt voor patroonherkenning in strings, tekst zoeken en vervangen, en input validatie in NLP-toepassingen.",
          en: "A regular expression (regex) is a sequence of characters that forms a search pattern. It's used for pattern matching in strings, text search and replace, and input validation in NLP applications.",
          es: "Una expresión regular (regex) es una secuencia de caracteres que forma un patrón de búsqueda. Se usa para coincidencia de patrones en cadenas, búsqueda y reemplazo de texto, y validación de entrada en aplicaciones de PLN.",
          de: "Ein regulärer Ausdruck (Regex) ist eine Zeichenfolge die ein Suchmuster bildet. Er wird für Mustervergleiche in Strings, Textsuche und -ersetzung und Eingabevalidierung in NLP-Anwendungen verwendet."
        }
      },
      {
        question: {
          nl: "Wat is word embeddings?",
          en: "What are word embeddings?",
          es: "¿Qué son los word embeddings?",
          de: "Was sind Word Embeddings?"
        },
        options: [
          { nl: "Numerieke vectorrepresentaties van woorden die semantische betekenis vastleggen", en: "Numerical vector representations of words that capture semantic meaning", es: "Representaciones vectoriales numéricas de palabras que capturan significado semántico", de: "Numerische Vektordarstellungen von Wörtern die semantische Bedeutung erfassen" },
          { nl: "Het insluiten van woorden in documenten", en: "Embedding words into documents", es: "Incrustar palabras en documentos", de: "Wörter in Dokumente einbetten" },
          { nl: "Het verbergen van woorden in tekst", en: "Hiding words in text", es: "Ocultar palabras en texto", de: "Wörter in Text verstecken" },
          { nl: "Het combineren van twee woorden", en: "Combining two words", es: "Combinar dos palabras", de: "Zwei Wörter kombinieren" }
        ],
        correct: 0,
        explanation: {
          nl: "Word embeddings zijn dichte vectorrepresentaties van woorden waarbij woorden met vergelijkbare betekenissen dichtbij elkaar in de vectorruimte staan. Ze leggen semantische relaties tussen woorden vast in numerieke vorm.",
          en: "Word embeddings are dense vector representations of words where words with similar meanings are close to each other in the vector space. They capture semantic relationships between words in numerical form.",
          es: "Los word embeddings son representaciones vectoriales densas de palabras donde palabras con significados similares están cerca unas de otras en el espacio vectorial. Capturan relaciones semánticas entre palabras en forma numérica.",
          de: "Word Embeddings sind dichte Vektordarstellungen von Wörtern bei denen Wörter mit ähnlichen Bedeutungen nahe beieinander im Vektorraum stehen. Sie erfassen semantische Beziehungen zwischen Wörtern in numerischer Form."
        }
      },
      {
        question: {
          nl: "Wat is de cosine similarity?",
          en: "What is cosine similarity?",
          es: "¿Qué es la similitud coseno?",
          de: "Was ist Kosinus-Ähnlichkeit?"
        },
        options: [
          { nl: "Een meting van gelijkenis tussen twee vectoren gebaseerd op de cosinus van de hoek tussen hen", en: "A measure of similarity between two vectors based on the cosine of the angle between them", es: "Una medida de similitud entre dos vectores basada en el coseno del ángulo entre ellos", de: "Ein Maß für Ähnlichkeit zwischen zwei Vektoren basierend auf dem Kosinus des Winkels zwischen ihnen" },
          { nl: "Een trigonometrische functie", en: "A trigonometric function", es: "Una función trigonométrica", de: "Eine trigonometrische Funktion" },
          { nl: "Een type machine learning algoritme", en: "A type of machine learning algorithm", es: "Un tipo de algoritmo de aprendizaje automático", de: "Eine Art Machine Learning Algorithmus" },
          { nl: "Een database vergelijkingsmethode", en: "A database comparison method", es: "Un método de comparación de base de datos", de: "Eine Datenbankvergleichsmethode" }
        ],
        correct: 0,
        explanation: {
          nl: "Cosine similarity meet de gelijkenis tussen twee vectoren door de cosinus van de hoek tussen hen te berekenen. Het wordt veel gebruikt in NLP om de semantische gelijkenis tussen woorden of documenten te bepalen.",
          en: "Cosine similarity measures the similarity between two vectors by calculating the cosine of the angle between them. It's widely used in NLP to determine semantic similarity between words or documents.",
          es: "La similitud coseno mide la similitud entre dos vectores calculando el coseno del ángulo entre ellos. Se usa ampliamente en PLN para determinar la similitud semántica entre palabras o documentos.",
          de: "Kosinus-Ähnlichkeit misst die Ähnlichkeit zwischen zwei Vektoren durch Berechnung des Kosinus des Winkels zwischen ihnen. Sie wird in NLP weit verbreitet verwendet um semantische Ähnlichkeit zwischen Wörtern oder Dokumenten zu bestimmen."
        }
      },
      {
        question: {
          nl: "Wat is een language model?",
          en: "What is a language model?",
          es: "¿Qué es un modelo de lenguaje?",
          de: "Was ist ein Sprachmodell?"
        },
        options: [
          { nl: "Een statistisch model dat de waarschijnlijkheid van woordreeksen berekent", en: "A statistical model that computes the probability of word sequences", es: "Un modelo estadístico que calcula la probabilidad de secuencias de palabras", de: "Ein statistisches Modell das die Wahrscheinlichkeit von Wortfolgen berechnet" },
          { nl: "Een vertaalwoordenboek", en: "A translation dictionary", es: "Un diccionario de traducción", de: "Ein Übersetzungswörterbuch" },
          { nl: "Een grammaticaboek", en: "A grammar book", es: "Un libro de gramática", de: "Ein Grammatikbuch" },
          { nl: "Een spraakherkenningssysteem", en: "A speech recognition system", es: "Un sistema de reconocimiento de voz", de: "Ein Spracherkennungssystem" }
        ],
        correct: 0,
        explanation: {
          nl: "Een language model is een probabilistisch model dat de waarschijnlijkheid van woordreeksen voorspelt. Het wordt gebruikt voor taken zoals tekst generatie, machine vertaling en spraakherkenning.",
          en: "A language model is a probabilistic model that predicts the likelihood of word sequences. It's used for tasks like text generation, machine translation, and speech recognition.",
          es: "Un modelo de lenguaje es un modelo probabilístico que predice la probabilidad de secuencias de palabras. Se usa para tareas como generación de texto, traducción automática y reconocimiento de voz.",
          de: "Ein Sprachmodell ist ein probabilistisches Modell das die Wahrscheinlichkeit von Wortfolgen vorhersagt. Es wird für Aufgaben wie Textgenerierung, maschinelle Übersetzung und Spracherkennung verwendet."
        }
      },
      {
        question: {
          nl: "Wat is dependency parsing?",
          en: "What is dependency parsing?",
          es: "¿Qué es el análisis de dependencias?",
          de: "Was ist Dependency Parsing?"
        },
        options: [
          { nl: "Het analyseren van grammaticale relaties tussen woorden in een zin", en: "Analyzing grammatical relationships between words in a sentence", es: "Analizar las relaciones gramaticales entre palabras en una oración", de: "Grammatische Beziehungen zwischen Wörtern in einem Satz analysieren" },
          { nl: "Het controleren van software dependencies", en: "Checking software dependencies", es: "Verificar dependencias de software", de: "Software-Abhängigkeiten prüfen" },
          { nl: "Het parseren van database afhankelijkheden", en: "Parsing database dependencies", es: "Analizar dependencias de base de datos", de: "Datenbankabhängigkeiten parsen" },
          { nl: "Het identificeren van bestandsafhankelijkheden", en: "Identifying file dependencies", es: "Identificar dependencias de archivos", de: "Dateiabhängigkeiten identifizieren" }
        ],
        correct: 0,
        explanation: {
          nl: "Dependency parsing is een NLP-techniek die de grammaticale structuur van zinnen analyseert door de syntactische relaties tussen woorden te identificeren, zoals welk woord het onderwerp is van welk werkwoord.",
          en: "Dependency parsing is an NLP technique that analyzes the grammatical structure of sentences by identifying syntactic relationships between words, such as which word is the subject of which verb.",
          es: "El análisis de dependencias es una técnica de PLN que analiza la estructura gramatical de las oraciones identificando relaciones sintácticas entre palabras, como qué palabra es el sujeto de qué verbo.",
          de: "Dependency Parsing ist eine NLP-Technik die die grammatische Struktur von Sätzen analysiert indem sie syntaktische Beziehungen zwischen Wörtern identifiziert wie welches Wort das Subjekt welches Verbs ist."
        }
      },
      {
        question: {
          nl: "Wat is een chatbot?",
          en: "What is a chatbot?",
          es: "¿Qué es un chatbot?",
          de: "Was ist ein Chatbot?"
        },
        options: [
          { nl: "Een computerprogramma dat gesprekken met mensen kan voeren", en: "A computer program that can conduct conversations with humans", es: "Un programa de computadora que puede mantener conversaciones con humanos", de: "Ein Computerprogramm das Gespräche mit Menschen führen kann" },
          { nl: "Een robot die kan lopen", en: "A robot that can walk", es: "Un robot que puede caminar", de: "Ein Roboter der laufen kann" },
          { nl: "Een chat applicatie", en: "A chat application", es: "Una aplicación de chat", de: "Eine Chat-Anwendung" },
          { nl: "Een persoon die veel chat", en: "A person who chats a lot", es: "Una persona que conversa mucho", de: "Eine Person die viel chattet" }
        ],
        correct: 0,
        explanation: {
          nl: "Een chatbot is een AI-programma dat ontworpen is om menselijke conversatie te simuleren via tekst of spraak. Chatbots gebruiken NLP-technieken om gebruikersinput te begrijpen en passende antwoorden te genereren.",
          en: "A chatbot is an AI program designed to simulate human conversation through text or speech. Chatbots use NLP techniques to understand user input and generate appropriate responses.",
          es: "Un chatbot es un programa de IA diseñado para simular conversación humana a través de texto o voz. Los chatbots usan técnicas de PLN para entender la entrada del usuario y generar respuestas apropiadas.",
          de: "Ein Chatbot ist ein KI-Programm das entwickelt wurde um menschliche Unterhaltung durch Text oder Sprache zu simulieren. Chatbots verwenden NLP-Techniken um Benutzereingaben zu verstehen und angemessene Antworten zu generieren."
        }
      },
      {
        question: {
          nl: "Wat is het voordeel van preprocessing in NLP?",
          en: "What is the advantage of preprocessing in NLP?",
          es: "¿Cuál es la ventaja del preprocesamiento en PLN?",
          de: "Was ist der Vorteil der Vorverarbeitung in NLP?"
        },
        options: [
          { nl: "Het verbetert de kwaliteit van tekstanalyse", en: "It improves the quality of text analysis", es: "Mejora la calidad del análisis de texto", de: "Es verbessert die Qualität der Textanalyse" },
          { nl: "Het maakt tekst langer", en: "It makes text longer", es: "Hace el texto más largo", de: "Es macht Text länger" },
          { nl: "Het vertraagt het proces", en: "It slows down the process", es: "Ralentiza el proceso", de: "Es verlangsamt den Prozess" },
          { nl: "Het kost meer geld", en: "It costs more money", es: "Cuesta más dinero", de: "Es kostet mehr Geld" }
        ],
        correct: 0,
        explanation: {
          nl: "Preprocessing bereidt ruwe tekst voor op analyse door ruis te verwijderen, tekst te normaliseren en data om te zetten in een formaat dat geschikt is voor machine learning algoritmes.",
          en: "Preprocessing prepares raw text for analysis by removing noise, normalizing text, and converting data into a format suitable for machine learning algorithms.",
          es: "El preprocesamiento prepara texto sin procesar para análisis eliminando ruido, normalizando texto y convirtiendo datos en un formato adecuado para algoritmos de aprendizaje automático.",
          de: "Vorverarbeitung bereitet Rohtext für die Analyse vor, indem Rauschen entfernt, Text normalisiert und Daten in ein für Machine Learning-Algorithmen geeignetes Format umgewandelt werden."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
