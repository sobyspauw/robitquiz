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
      },
      {
        question: {
          en: "What is case folding in text processing?",
          es: "¿Qué es el case folding en procesamiento de texto?",
          de: "Was ist Case Folding in der Textverarbeitung?",
          nl: "Wat is case folding in tekstverwerking?"
        },
        options: [
          { en: "Converting all text to the same case (usually lowercase)", es: "Convertir todo el texto al mismo caso (usualmente minúsculas)", de: "Allen Text in denselben Fall umwandeln (normalerweise Kleinbuchstaben)", nl: "Alle tekst omzetten naar dezelfde case (meestal kleine letters)" },
          { en: "Folding text into multiple lines", es: "Plegar texto en múltiples líneas", de: "Text in mehrere Zeilen falten", nl: "Tekst vouwen in meerdere regels" },
          { en: "Creating legal case documents", es: "Crear documentos de casos legales", de: "Rechtsdokumente erstellen", nl: "Juridische casedocumenten maken" },
          { en: "Organizing text by folders", es: "Organizar texto por carpetas", de: "Text nach Ordnern organisieren", nl: "Tekst organiseren in mappen" }
        ],
        correct: 0,
        explanation: {
          en: "Case folding is the process of converting all characters in text to lowercase (or sometimes uppercase) to ensure consistent processing and prevent treating 'Word' and 'word' as different tokens.",
          es: "El case folding es el proceso de convertir todos los caracteres en texto a minúsculas (o a veces mayúsculas) para asegurar procesamiento consistente y prevenir tratar 'Palabra' y 'palabra' como tokens diferentes.",
          de: "Case Folding ist der Prozess alle Zeichen in Text in Kleinbuchstaben (oder manchmal Großbuchstaben) umzuwandeln um konsistente Verarbeitung sicherzustellen und zu verhindern dass 'Wort' und 'wort' als verschiedene Tokens behandelt werden.",
          nl: "Case folding is het proces van het omzetten van alle karakters in tekst naar kleine letters (of soms hoofdletters) om consistente verwerking te garanderen en te voorkomen dat 'Woord' en 'woord' als verschillende tokens worden behandeld."
        }
      },
      {
        question: {
          en: "What is text classification?",
          es: "¿Qué es la clasificación de texto?",
          de: "Was ist Textklassifizierung?",
          nl: "Wat is tekstclassificatie?"
        },
        options: [
          { en: "Assigning predefined categories to text documents", es: "Asignar categorías predefinidas a documentos de texto", de: "Vordefinierte Kategorien zu Textdokumenten zuweisen", nl: "Vooraf gedefinieerde categorieën toewijzen aan tekstdocumenten" },
          { en: "Sorting text alphabetically", es: "Ordenar texto alfabéticamente", de: "Text alphabetisch sortieren", nl: "Tekst alfabetisch sorteren" },
          { en: "Encrypting text messages", es: "Encriptar mensajes de texto", de: "Textnachrichten verschlüsseln", nl: "Tekstberichten versleutelen" },
          { en: "Converting text to audio", es: "Convertir texto a audio", de: "Text in Audio umwandeln", nl: "Tekst omzetten naar audio" }
        ],
        correct: 0,
        explanation: {
          en: "Text classification is an NLP task that involves categorizing text into organized groups, such as spam detection, topic categorization, or sentiment classification.",
          es: "La clasificación de texto es una tarea de PLN que involucra categorizar texto en grupos organizados, como detección de spam, categorización de temas o clasificación de sentimientos.",
          de: "Textklassifizierung ist eine NLP-Aufgabe die das Kategorisieren von Text in organisierte Gruppen umfasst wie Spam-Erkennung, Themenkategorisierung oder Sentimentklassifizierung.",
          nl: "Tekstclassificatie is een NLP-taak die het categoriseren van tekst in georganiseerde groepen omvat, zoals spamdetectie, onderwerpscategorisatie of sentimentclassificatie."
        }
      },
      {
        question: {
          en: "What is information extraction in NLP?",
          es: "¿Qué es la extracción de información en PLN?",
          de: "Was ist Informationsextraktion in NLP?",
          nl: "Wat is informatie-extractie in NLP?"
        },
        options: [
          { en: "Automatically extracting structured information from unstructured text", es: "Extraer automáticamente información estructurada de texto no estructurado", de: "Automatisches Extrahieren strukturierter Informationen aus unstrukturiertem Text", nl: "Automatisch gestructureerde informatie extraheren uit ongestructureerde tekst" },
          { en: "Copying text from documents", es: "Copiar texto de documentos", de: "Text aus Dokumenten kopieren", nl: "Tekst uit documenten kopiëren" },
          { en: "Compressing text files", es: "Comprimir archivos de texto", de: "Textdateien komprimieren", nl: "Tekstbestanden comprimeren" },
          { en: "Deleting unnecessary information", es: "Eliminar información innecesaria", de: "Unnötige Informationen löschen", nl: "Onnodige informatie verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Information extraction is the task of automatically extracting structured information such as entities, relationships, and events from unstructured text sources.",
          es: "La extracción de información es la tarea de extraer automáticamente información estructurada como entidades, relaciones y eventos de fuentes de texto no estructurado.",
          de: "Informationsextraktion ist die Aufgabe strukturierte Informationen wie Entitäten, Beziehungen und Ereignisse automatisch aus unstrukturierten Textquellen zu extrahieren.",
          nl: "Informatie-extractie is de taak om automatisch gestructureerde informatie zoals entiteiten, relaties en gebeurtenissen te extraheren uit ongestructureerde tekstbronnen."
        }
      },
      {
        question: {
          en: "What is word segmentation?",
          es: "¿Qué es la segmentación de palabras?",
          de: "Was ist Wortsegmentierung?",
          nl: "Wat is woordsegmentatie?"
        },
        options: [
          { en: "Dividing text into individual words, especially important for languages without spaces", es: "Dividir texto en palabras individuales, especialmente importante para idiomas sin espacios", de: "Text in einzelne Wörter aufteilen, besonders wichtig für Sprachen ohne Leerzeichen", nl: "Tekst opdelen in individuele woorden, vooral belangrijk voor talen zonder spaties" },
          { en: "Counting the syllables in words", es: "Contar las sílabas en palabras", de: "Silben in Wörtern zählen", nl: "Lettergrepen in woorden tellen" },
          { en: "Breaking words into letters", es: "Romper palabras en letras", de: "Wörter in Buchstaben aufteilen", nl: "Woorden opdelen in letters" },
          { en: "Translating words into segments", es: "Traducir palabras en segmentos", de: "Wörter in Segmente übersetzen", nl: "Woorden vertalen in segmenten" }
        ],
        correct: 0,
        explanation: {
          en: "Word segmentation is the process of dividing text into individual words, which is particularly challenging for languages like Chinese, Japanese, and Thai that don't use spaces between words.",
          es: "La segmentación de palabras es el proceso de dividir texto en palabras individuales, lo cual es particularmente desafiante para idiomas como chino, japonés y tailandés que no usan espacios entre palabras.",
          de: "Wortsegmentierung ist der Prozess Text in einzelne Wörter aufzuteilen, was besonders herausfordernd ist für Sprachen wie Chinesisch, Japanisch und Thailändisch die keine Leerzeichen zwischen Wörtern verwenden.",
          nl: "Woordsegmentatie is het proces van het opdelen van tekst in individuele woorden, wat bijzonder uitdagend is voor talen zoals Chinees, Japans en Thais die geen spaties tussen woorden gebruiken."
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
          { en: "Identifying when different words refer to the same entity", es: "Identificar cuando diferentes palabras se refieren a la misma entidad", de: "Identifizieren wann verschiedene Wörter sich auf dieselbe Entität beziehen", nl: "Identificeren wanneer verschillende woorden naar dezelfde entiteit verwijzen" },
          { en: "Resolving conflicts in code", es: "Resolver conflictos en código", de: "Konflikte im Code auflösen", nl: "Conflicten in code oplossen" },
          { en: "Finding the main topic of text", es: "Encontrar el tema principal del texto", de: "Das Hauptthema von Text finden", nl: "Het hoofdonderwerp van tekst vinden" },
          { en: "Detecting duplicate documents", es: "Detectar documentos duplicados", de: "Doppelte Dokumente erkennen", nl: "Dubbele documenten detecteren" }
        ],
        correct: 0,
        explanation: {
          en: "Coreference resolution is the task of finding all expressions that refer to the same entity in a text. For example, identifying that 'John', 'he', and 'the professor' all refer to the same person.",
          es: "La resolución de correferencia es la tarea de encontrar todas las expresiones que se refieren a la misma entidad en un texto. Por ejemplo, identificar que 'Juan', 'él' y 'el profesor' se refieren a la misma persona.",
          de: "Koreferenzauflösung ist die Aufgabe alle Ausdrücke zu finden die sich auf dieselbe Entität in einem Text beziehen. Zum Beispiel zu identifizieren dass 'John', 'er' und 'der Professor' sich alle auf dieselbe Person beziehen.",
          nl: "Coreferentieresolutie is de taak om alle uitdrukkingen te vinden die naar dezelfde entiteit in een tekst verwijzen. Bijvoorbeeld identificeren dat 'Jan', 'hij' en 'de professor' allemaal naar dezelfde persoon verwijzen."
        }
      },
      {
        question: {
          en: "What is a parse tree?",
          es: "¿Qué es un árbol de análisis sintáctico?",
          de: "Was ist ein Parsebaum?",
          nl: "Wat is een parseboom?"
        },
        options: [
          { en: "A tree structure representing the syntactic structure of a sentence", es: "Una estructura de árbol que representa la estructura sintáctica de una oración", de: "Eine Baumstruktur die die syntaktische Struktur eines Satzes darstellt", nl: "Een boomstructuur die de syntactische structuur van een zin voorstelt" },
          { en: "A decision tree for classification", es: "Un árbol de decisión para clasificación", de: "Ein Entscheidungsbaum für Klassifizierung", nl: "Een beslisboom voor classificatie" },
          { en: "A family tree of words", es: "Un árbol genealógico de palabras", de: "Ein Stammbaum von Wörtern", nl: "Een stamboom van woorden" },
          { en: "A tree diagram of topics", es: "Un diagrama de árbol de temas", de: "Ein Baumdiagramm von Themen", nl: "Een boomdiagram van onderwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "A parse tree is a hierarchical tree structure that represents the grammatical structure of a sentence according to some formal grammar, showing how the sentence can be derived from the grammar rules.",
          es: "Un árbol de análisis sintáctico es una estructura de árbol jerárquica que representa la estructura gramatical de una oración según alguna gramática formal, mostrando cómo la oración puede derivarse de las reglas gramaticales.",
          de: "Ein Parsebaum ist eine hierarchische Baumstruktur die die grammatische Struktur eines Satzes gemäß einer formalen Grammatik darstellt und zeigt wie der Satz aus den Grammatikregeln abgeleitet werden kann.",
          nl: "Een parseboom is een hiërarchische boomstructuur die de grammaticale structuur van een zin voorstelt volgens een formele grammatica, waarbij wordt getoond hoe de zin kan worden afgeleid van de grammaticaregels."
        }
      },
      {
        question: {
          en: "What is text summarization?",
          es: "¿Qué es la resumición de texto?",
          de: "Was ist Textzusammenfassung?",
          nl: "Wat is tekstsamenvatting?"
        },
        options: [
          { en: "Creating a shorter version of text while preserving key information", es: "Crear una versión más corta del texto preservando información clave", de: "Eine kürzere Version von Text erstellen während wichtige Informationen erhalten bleiben", nl: "Een kortere versie van tekst maken terwijl belangrijke informatie behouden blijft" },
          { en: "Counting the total words in text", es: "Contar el total de palabras en texto", de: "Gesamtanzahl der Wörter im Text zählen", nl: "Het totaal aantal woorden in tekst tellen" },
          { en: "Translating text to another language", es: "Traducir texto a otro idioma", de: "Text in eine andere Sprache übersetzen", nl: "Tekst naar een andere taal vertalen" },
          { en: "Making text longer with details", es: "Hacer el texto más largo con detalles", de: "Text mit Details länger machen", nl: "Tekst langer maken met details" }
        ],
        correct: 0,
        explanation: {
          en: "Text summarization is the task of automatically creating a concise and coherent summary of a longer text while retaining the most important information and overall meaning.",
          es: "La resumición de texto es la tarea de crear automáticamente un resumen conciso y coherente de un texto más largo mientras retiene la información más importante y el significado general.",
          de: "Textzusammenfassung ist die Aufgabe automatisch eine prägnante und kohärente Zusammenfassung eines längeren Textes zu erstellen während die wichtigsten Informationen und die Gesamtbedeutung erhalten bleiben.",
          nl: "Tekstsamenvatting is de taak om automatisch een beknopte en samenhangende samenvatting van een langere tekst te maken terwijl de belangrijkste informatie en algemene betekenis behouden blijven."
        }
      },
      {
        question: {
          en: "What is machine translation?",
          es: "¿Qué es la traducción automática?",
          de: "Was ist maschinelle Übersetzung?",
          nl: "Wat is machinevertaling?"
        },
        options: [
          { en: "Automatically translating text from one language to another using computers", es: "Traducir automáticamente texto de un idioma a otro usando computadoras", de: "Automatisches Übersetzen von Text von einer Sprache in eine andere mit Computern", nl: "Automatisch tekst vertalen van de ene taal naar de andere met computers" },
          { en: "Translating machine manuals", es: "Traducir manuales de máquinas", de: "Maschinenhandbücher übersetzen", nl: "Machinehandleidingen vertalen" },
          { en: "Teaching machines to speak", es: "Enseñar a las máquinas a hablar", de: "Maschinen das Sprechen beibringen", nl: "Machines leren spreken" },
          { en: "Converting text to machine code", es: "Convertir texto a código máquina", de: "Text in Maschinencode umwandeln", nl: "Tekst omzetten naar machinecode" }
        ],
        correct: 0,
        explanation: {
          en: "Machine translation is the use of software to automatically translate text or speech from one natural language to another, such as Google Translate or DeepL.",
          es: "La traducción automática es el uso de software para traducir automáticamente texto o habla de un idioma natural a otro, como Google Translate o DeepL.",
          de: "Maschinelle Übersetzung ist die Verwendung von Software um Text oder Sprache automatisch von einer natürlichen Sprache in eine andere zu übersetzen wie Google Translate oder DeepL.",
          nl: "Machinevertaling is het gebruik van software om automatisch tekst of spraak van de ene natuurlijke taal naar de andere te vertalen, zoals Google Translate of DeepL."
        }
      },
      {
        question: {
          en: "What is a lexicon in NLP?",
          es: "¿Qué es un léxico en PLN?",
          de: "Was ist ein Lexikon in NLP?",
          nl: "Wat is een lexicon in NLP?"
        },
        options: [
          { en: "A vocabulary of words and their linguistic information", es: "Un vocabulario de palabras y su información lingüística", de: "Ein Vokabular von Wörtern und ihren linguistischen Informationen", nl: "Een vocabulaire van woorden en hun linguïstische informatie" },
          { en: "A type of neural network", es: "Un tipo de red neuronal", de: "Eine Art neuronales Netzwerk", nl: "Een type neuraal netwerk" },
          { en: "A grammar checking tool", es: "Una herramienta de revisión gramatical", de: "Ein Grammatikprüfungswerkzeug", nl: "Een grammatica-controletool" },
          { en: "A text editor application", es: "Una aplicación de editor de texto", de: "Eine Texteditor-Anwendung", nl: "Een teksteditorapplicatie" }
        ],
        correct: 0,
        explanation: {
          en: "A lexicon is a comprehensive inventory of words in a language along with information about their meanings, pronunciations, part of speech, and other linguistic properties.",
          es: "Un léxico es un inventario completo de palabras en un idioma junto con información sobre sus significados, pronunciaciones, parte del discurso y otras propiedades lingüísticas.",
          de: "Ein Lexikon ist ein umfassendes Verzeichnis von Wörtern in einer Sprache zusammen mit Informationen über ihre Bedeutungen, Aussprachen, Wortarten und andere linguistische Eigenschaften.",
          nl: "Een lexicon is een uitgebreide inventaris van woorden in een taal samen met informatie over hun betekenissen, uitspraken, woordsoort en andere linguïstische eigenschappen."
        }
      },
      {
        question: {
          en: "What is speech recognition?",
          es: "¿Qué es el reconocimiento de voz?",
          de: "Was ist Spracherkennung?",
          nl: "Wat is spraakherkenning?"
        },
        options: [
          { en: "Converting spoken language into written text", es: "Convertir lenguaje hablado en texto escrito", de: "Gesprochene Sprache in geschriebenen Text umwandeln", nl: "Gesproken taal omzetten naar geschreven tekst" },
          { en: "Identifying different speakers", es: "Identificar diferentes hablantes", de: "Verschiedene Sprecher identifizieren", nl: "Verschillende sprekers identificeren" },
          { en: "Teaching computers to speak", es: "Enseñar a las computadoras a hablar", de: "Computern das Sprechen beibringen", nl: "Computers leren spreken" },
          { en: "Recognizing patterns in music", es: "Reconocer patrones en música", de: "Muster in Musik erkennen", nl: "Patronen in muziek herkennen" }
        ],
        correct: 0,
        explanation: {
          en: "Speech recognition, also known as automatic speech recognition (ASR), is the process of converting spoken words into text, used in applications like voice assistants and dictation software.",
          es: "El reconocimiento de voz, también conocido como reconocimiento automático de voz (ASR), es el proceso de convertir palabras habladas en texto, usado en aplicaciones como asistentes de voz y software de dictado.",
          de: "Spracherkennung, auch als automatische Spracherkennung (ASR) bekannt, ist der Prozess gesprochene Wörter in Text umzuwandeln, verwendet in Anwendungen wie Sprachassistenten und Diktiersoftware.",
          nl: "Spraakherkenning, ook bekend als automatische spraakherkenning (ASR), is het proces van het omzetten van gesproken woorden in tekst, gebruikt in applicaties zoals spraakassistenten en dicteersoftware."
        }
      },
      {
        question: {
          en: "What is question answering in NLP?",
          es: "¿Qué es la respuesta a preguntas en PLN?",
          de: "Was ist Fragebeantwortung in NLP?",
          nl: "Wat is vraagbeantwoording in NLP?"
        },
        options: [
          { en: "A system that automatically answers questions posed in natural language", es: "Un sistema que automáticamente responde preguntas formuladas en lenguaje natural", de: "Ein System das automatisch Fragen beantwortet die in natürlicher Sprache gestellt werden", nl: "Een systeem dat automatisch vragen beantwoordt die in natuurlijke taal gesteld worden" },
          { en: "Creating question banks for exams", es: "Crear bancos de preguntas para exámenes", de: "Fragenbänke für Prüfungen erstellen", nl: "Vragenbanken maken voor examens" },
          { en: "Asking questions to users", es: "Hacer preguntas a los usuarios", de: "Benutzern Fragen stellen", nl: "Vragen stellen aan gebruikers" },
          { en: "Analyzing survey responses", es: "Analizar respuestas de encuestas", de: "Umfrageantworten analysieren", nl: "Enquêteantwoorden analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "Question answering (QA) is an NLP task where systems automatically provide answers to questions posed by humans in natural language, often by searching and extracting information from documents or knowledge bases.",
          es: "La respuesta a preguntas (QA) es una tarea de PLN donde sistemas automáticamente proporcionan respuestas a preguntas formuladas por humanos en lenguaje natural, a menudo buscando y extrayendo información de documentos o bases de conocimiento.",
          de: "Fragebeantwortung (QA) ist eine NLP-Aufgabe bei der Systeme automatisch Antworten auf von Menschen in natürlicher Sprache gestellte Fragen liefern, oft durch Suchen und Extrahieren von Informationen aus Dokumenten oder Wissensbasen.",
          nl: "Vraagbeantwoording (QA) is een NLP-taak waarbij systemen automatisch antwoorden geven op vragen die door mensen in natuurlijke taal gesteld worden, vaak door informatie uit documenten of kennisbanken te zoeken en te extraheren."
        }
      },
      {
        question: {
          en: "What is semantic similarity?",
          es: "¿Qué es la similitud semántica?",
          de: "Was ist semantische Ähnlichkeit?",
          nl: "Wat is semantische gelijkenis?"
        },
        options: [
          { en: "Measuring how similar two pieces of text are in meaning", es: "Medir qué tan similares son dos piezas de texto en significado", de: "Messen wie ähnlich zwei Textstücke in der Bedeutung sind", nl: "Meten hoe vergelijkbaar twee stukken tekst zijn in betekenis" },
          { en: "Checking if text looks visually similar", es: "Verificar si el texto se ve visualmente similar", de: "Prüfen ob Text visuell ähnlich aussieht", nl: "Controleren of tekst er visueel vergelijkbaar uitziet" },
          { en: "Finding words with same number of letters", es: "Encontrar palabras con el mismo número de letras", de: "Wörter mit gleicher Buchstabenanzahl finden", nl: "Woorden vinden met hetzelfde aantal letters" },
          { en: "Comparing file sizes", es: "Comparar tamaños de archivos", de: "Dateigrößen vergleichen", nl: "Bestandsgroottes vergelijken" }
        ],
        correct: 0,
        explanation: {
          en: "Semantic similarity measures how close two pieces of text are in meaning, even if they use different words. For example, 'car' and 'automobile' have high semantic similarity.",
          es: "La similitud semántica mide qué tan cercanas están dos piezas de texto en significado, incluso si usan palabras diferentes. Por ejemplo, 'coche' y 'automóvil' tienen alta similitud semántica.",
          de: "Semantische Ähnlichkeit misst wie nah sich zwei Textstücke in der Bedeutung sind, auch wenn sie verschiedene Wörter verwenden. Zum Beispiel haben 'Auto' und 'Kraftfahrzeug' hohe semantische Ähnlichkeit.",
          nl: "Semantische gelijkenis meet hoe dicht twee stukken tekst bij elkaar liggen in betekenis, zelfs als ze verschillende woorden gebruiken. Bijvoorbeeld, 'auto' en 'wagen' hebben hoge semantische gelijkenis."
        }
      },
      {
        question: {
          en: "What is text generation?",
          es: "¿Qué es la generación de texto?",
          de: "Was ist Textgenerierung?",
          nl: "Wat is tekstgeneratie?"
        },
        options: [
          { en: "Automatically creating new text using AI models", es: "Crear automáticamente texto nuevo usando modelos de IA", de: "Automatisch neuen Text mit KI-Modellen erstellen", nl: "Automatisch nieuwe tekst maken met AI-modellen" },
          { en: "Typing text manually", es: "Escribir texto manualmente", de: "Text manuell tippen", nl: "Tekst handmatig typen" },
          { en: "Copying existing text", es: "Copiar texto existente", de: "Bestehenden Text kopieren", nl: "Bestaande tekst kopiëren" },
          { en: "Printing text on paper", es: "Imprimir texto en papel", de: "Text auf Papier drucken", nl: "Tekst op papier afdrukken" }
        ],
        correct: 0,
        explanation: {
          en: "Text generation is the task of automatically producing new, coherent text using NLP models, used in applications like chatbots, story writing, and content creation.",
          es: "La generación de texto es la tarea de producir automáticamente texto nuevo y coherente usando modelos de PLN, usado en aplicaciones como chatbots, escritura de historias y creación de contenido.",
          de: "Textgenerierung ist die Aufgabe automatisch neuen, kohärenten Text mit NLP-Modellen zu produzieren, verwendet in Anwendungen wie Chatbots, Geschichtenschreiben und Content-Erstellung.",
          nl: "Tekstgeneratie is de taak om automatisch nieuwe, samenhangende tekst te produceren met NLP-modellen, gebruikt in applicaties zoals chatbots, verhalenschrijven en contentcreatie."
        }
      },
      {
        question: {
          en: "What is a context window in NLP?",
          es: "¿Qué es una ventana de contexto en PLN?",
          de: "Was ist ein Kontextfenster in NLP?",
          nl: "Wat is een contextvenster in NLP?"
        },
        options: [
          { en: "The surrounding words considered when processing a specific word", es: "Las palabras circundantes consideradas al procesar una palabra específica", de: "Die umgebenden Wörter die beim Verarbeiten eines bestimmten Wortes berücksichtigt werden", nl: "De omringende woorden die worden overwogen bij het verwerken van een specifiek woord" },
          { en: "A computer window showing text", es: "Una ventana de computadora mostrando texto", de: "Ein Computerfenster das Text zeigt", nl: "Een computervenster dat tekst toont" },
          { en: "The time frame for processing", es: "El marco de tiempo para procesamiento", de: "Der Zeitrahmen für die Verarbeitung", nl: "Het tijdsbestek voor verwerking" },
          { en: "A browser window for reading", es: "Una ventana de navegador para leer", de: "Ein Browserfenster zum Lesen", nl: "Een browservenster voor lezen" }
        ],
        correct: 0,
        explanation: {
          en: "A context window refers to the number of words or tokens around a target word that are considered when analyzing or processing that word, helping to understand its meaning based on surrounding context.",
          es: "Una ventana de contexto se refiere al número de palabras o tokens alrededor de una palabra objetivo que se consideran al analizar o procesar esa palabra, ayudando a entender su significado basado en el contexto circundante.",
          de: "Ein Kontextfenster bezieht sich auf die Anzahl der Wörter oder Tokens um ein Zielwort die beim Analysieren oder Verarbeiten dieses Wortes berücksichtigt werden, was hilft seine Bedeutung basierend auf dem umgebenden Kontext zu verstehen.",
          nl: "Een contextvenster verwijst naar het aantal woorden of tokens rondom een doelwoord die worden overwogen bij het analyseren of verwerken van dat woord, wat helpt de betekenis te begrijpen op basis van de omringende context."
        }
      },
      {
        question: {
          en: "What is OCR (Optical Character Recognition)?",
          es: "¿Qué es OCR (Reconocimiento Óptico de Caracteres)?",
          de: "Was ist OCR (Optische Zeichenerkennung)?",
          nl: "Wat is OCR (Optische Tekenherkenning)?"
        },
        options: [
          { en: "Converting images of text into machine-readable text", es: "Convertir imágenes de texto en texto legible por máquina", de: "Bilder von Text in maschinenlesbaren Text umwandeln", nl: "Afbeeldingen van tekst omzetten naar machineleesbare tekst" },
          { en: "Recognizing faces in images", es: "Reconocer rostros en imágenes", de: "Gesichter in Bildern erkennen", nl: "Gezichten herkennen in afbeeldingen" },
          { en: "Creating optical illusions", es: "Crear ilusiones ópticas", de: "Optische Täuschungen erstellen", nl: "Optische illusies maken" },
          { en: "Scanning documents for viruses", es: "Escanear documentos en busca de virus", de: "Dokumente nach Viren scannen", nl: "Documenten scannen op virussen" }
        ],
        correct: 0,
        explanation: {
          en: "OCR is technology that converts images of typed, handwritten, or printed text into machine-readable text data, enabling computers to process text from scanned documents or photos.",
          es: "OCR es tecnología que convierte imágenes de texto mecanografiado, manuscrito o impreso en datos de texto legibles por máquina, permitiendo a las computadoras procesar texto de documentos escaneados o fotos.",
          de: "OCR ist eine Technologie die Bilder von getipptem, handgeschriebenem oder gedrucktem Text in maschinenlesbare Textdaten umwandelt, ermöglicht Computern Text aus gescannten Dokumenten oder Fotos zu verarbeiten.",
          nl: "OCR is technologie die afbeeldingen van getypte, handgeschreven of gedrukte tekst omzet in machineleesbare tekstgegevens, waardoor computers tekst uit gescande documenten of foto's kunnen verwerken."
        }
      },
      {
        question: {
          en: "What is intent recognition?",
          es: "¿Qué es el reconocimiento de intención?",
          de: "Was ist Absichtserkennung?",
          nl: "Wat is intentieherkenning?"
        },
        options: [
          { en: "Identifying the goal or purpose behind a user's input", es: "Identificar el objetivo o propósito detrás de la entrada de un usuario", de: "Das Ziel oder den Zweck hinter der Eingabe eines Benutzers identifizieren", nl: "Het doel of de bedoeling achter de invoer van een gebruiker identificeren" },
          { en: "Detecting malicious intentions in code", es: "Detectar intenciones maliciosas en código", de: "Böswillige Absichten im Code erkennen", nl: "Kwaadaardige intenties in code detecteren" },
          { en: "Reading people's minds", es: "Leer las mentes de las personas", de: "Gedanken von Menschen lesen", nl: "Gedachten van mensen lezen" },
          { en: "Identifying user locations", es: "Identificar ubicaciones de usuarios", de: "Benutzerstandorte identifizieren", nl: "Gebruikerslocaties identificeren" }
        ],
        correct: 0,
        explanation: {
          en: "Intent recognition is the process of determining what a user wants to accomplish from their input, commonly used in chatbots and virtual assistants to understand user requests and provide appropriate responses.",
          es: "El reconocimiento de intención es el proceso de determinar qué quiere lograr un usuario desde su entrada, comúnmente usado en chatbots y asistentes virtuales para entender solicitudes de usuarios y proporcionar respuestas apropiadas.",
          de: "Absichtserkennung ist der Prozess zu bestimmen was ein Benutzer mit seiner Eingabe erreichen möchte, häufig verwendet in Chatbots und virtuellen Assistenten um Benutzeranfragen zu verstehen und angemessene Antworten zu liefern.",
          nl: "Intentieherkenning is het proces van het bepalen wat een gebruiker wil bereiken met zijn invoer, vaak gebruikt in chatbots en virtuele assistenten om gebruikersverzoeken te begrijpen en passende antwoorden te geven."
        }
      },
      {
        question: {
          en: "What is document clustering?",
          es: "¿Qué es el agrupamiento de documentos?",
          de: "Was ist Dokumenten-Clustering?",
          nl: "Wat is documentclustering?"
        },
        options: [
          { en: "Grouping similar documents together based on their content", es: "Agrupar documentos similares según su contenido", de: "Ähnliche Dokumente basierend auf ihrem Inhalt gruppieren", nl: "Vergelijkbare documenten groeperen op basis van hun inhoud" },
          { en: "Organizing files in folders", es: "Organizar archivos en carpetas", de: "Dateien in Ordnern organisieren", nl: "Bestanden organiseren in mappen" },
          { en: "Compressing multiple documents", es: "Comprimir múltiples documentos", de: "Mehrere Dokumente komprimieren", nl: "Meerdere documenten comprimeren" },
          { en: "Printing documents together", es: "Imprimir documentos juntos", de: "Dokumente zusammen drucken", nl: "Documenten samen afdrukken" }
        ],
        correct: 0,
        explanation: {
          en: "Document clustering is an unsupervised learning task that automatically groups similar documents together based on their content, useful for organizing large document collections and discovering topics.",
          es: "El agrupamiento de documentos es una tarea de aprendizaje no supervisado que automáticamente agrupa documentos similares según su contenido, útil para organizar grandes colecciones de documentos y descubrir temas.",
          de: "Dokumenten-Clustering ist eine unüberwachte Lernaufgabe die automatisch ähnliche Dokumente basierend auf ihrem Inhalt gruppiert, nützlich für die Organisation großer Dokumentensammlungen und das Entdecken von Themen.",
          nl: "Documentclustering is een unsupervised learning-taak die automatisch vergelijkbare documenten groepeert op basis van hun inhoud, nuttig voor het organiseren van grote documentcollecties en het ontdekken van onderwerpen."
        }
      },
      {
        question: {
          en: "What is text-to-speech (TTS)?",
          es: "¿Qué es texto a voz (TTS)?",
          de: "Was ist Text-zu-Sprache (TTS)?",
          nl: "Wat is tekst-naar-spraak (TTS)?"
        },
        options: [
          { en: "Converting written text into spoken audio", es: "Convertir texto escrito en audio hablado", de: "Geschriebenen Text in gesprochenes Audio umwandeln", nl: "Geschreven tekst omzetten naar gesproken audio" },
          { en: "Typing what someone says", es: "Escribir lo que alguien dice", de: "Tippen was jemand sagt", nl: "Typen wat iemand zegt" },
          { en: "Teaching people to speak", es: "Enseñar a las personas a hablar", de: "Menschen das Sprechen beibringen", nl: "Mensen leren spreken" },
          { en: "Recording conversations", es: "Grabar conversaciones", de: "Gespräche aufzeichnen", nl: "Gesprekken opnemen" }
        ],
        correct: 0,
        explanation: {
          en: "Text-to-speech (TTS) is technology that converts written text into spoken words, used in applications like screen readers, navigation systems, and virtual assistants.",
          es: "Texto a voz (TTS) es tecnología que convierte texto escrito en palabras habladas, usado en aplicaciones como lectores de pantalla, sistemas de navegación y asistentes virtuales.",
          de: "Text-zu-Sprache (TTS) ist Technologie die geschriebenen Text in gesprochene Worte umwandelt, verwendet in Anwendungen wie Bildschirmlesern, Navigationssystemen und virtuellen Assistenten.",
          nl: "Tekst-naar-spraak (TTS) is technologie die geschreven tekst omzet in gesproken woorden, gebruikt in applicaties zoals schermleesprogramma's, navigatiesystemen en virtuele assistenten."
        }
      },
      {
        question: {
          en: "What is word sense disambiguation?",
          es: "¿Qué es la desambiguación de sentido de palabra?",
          de: "Was ist Wortsinndisambiguierung?",
          nl: "Wat is woordbetekenis-disambiguering?"
        },
        options: [
          { en: "Determining which meaning of a word is used in a specific context", es: "Determinar qué significado de una palabra se usa en un contexto específico", de: "Bestimmen welche Bedeutung eines Wortes in einem bestimmten Kontext verwendet wird", nl: "Bepalen welke betekenis van een woord wordt gebruikt in een specifieke context" },
          { en: "Finding spelling errors in words", es: "Encontrar errores de ortografía en palabras", de: "Rechtschreibfehler in Wörtern finden", nl: "Spelfouten in woorden vinden" },
          { en: "Counting different words in text", es: "Contar diferentes palabras en texto", de: "Verschiedene Wörter im Text zählen", nl: "Verschillende woorden in tekst tellen" },
          { en: "Translating ambiguous words", es: "Traducir palabras ambiguas", de: "Mehrdeutige Wörter übersetzen", nl: "Dubbelzinnige woorden vertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Word sense disambiguation is the task of determining which meaning of a polysemous word (a word with multiple meanings) is being used in a particular context. For example, determining if 'bank' means a financial institution or a river bank.",
          es: "La desambiguación de sentido de palabra es la tarea de determinar qué significado de una palabra polisémica (una palabra con múltiples significados) se está usando en un contexto particular. Por ejemplo, determinar si 'banco' significa institución financiera o orilla de río.",
          de: "Wortsinndisambiguierung ist die Aufgabe zu bestimmen welche Bedeutung eines polysemen Wortes (ein Wort mit mehreren Bedeutungen) in einem bestimmten Kontext verwendet wird. Zum Beispiel zu bestimmen ob 'Bank' eine Finanzinstitution oder ein Flussufer bedeutet.",
          nl: "Woordbetekenis-disambiguering is de taak om te bepalen welke betekenis van een polyseem woord (een woord met meerdere betekenissen) wordt gebruikt in een bepaalde context. Bijvoorbeeld bepalen of 'bank' een financiële instelling of rivieroever betekent."
        }
      },
      {
        question: {
          en: "What is language identification?",
          es: "¿Qué es la identificación de idioma?",
          de: "Was ist Sprachidentifikation?",
          nl: "Wat is taalidentificatie?"
        },
        options: [
          { en: "Automatically detecting which language a text is written in", es: "Detectar automáticamente en qué idioma está escrito un texto", de: "Automatisch erkennen in welcher Sprache ein Text geschrieben ist", nl: "Automatisch detecteren in welke taal een tekst geschreven is" },
          { en: "Creating new programming languages", es: "Crear nuevos lenguajes de programación", de: "Neue Programmiersprachen erstellen", nl: "Nieuwe programmeertalen maken" },
          { en: "Identifying grammatical errors", es: "Identificar errores gramaticales", de: "Grammatikalische Fehler identifizieren", nl: "Grammaticale fouten identificeren" },
          { en: "Teaching people new languages", es: "Enseñar a las personas nuevos idiomas", de: "Menschen neue Sprachen beibringen", nl: "Mensen nieuwe talen leren" }
        ],
        correct: 0,
        explanation: {
          en: "Language identification is the process of automatically determining which natural language a piece of text is written in, essential for multilingual NLP applications and machine translation systems.",
          es: "La identificación de idioma es el proceso de determinar automáticamente en qué idioma natural está escrito un texto, esencial para aplicaciones de PLN multilingüe y sistemas de traducción automática.",
          de: "Sprachidentifikation ist der Prozess automatisch zu bestimmen in welcher natürlichen Sprache ein Text geschrieben ist, wesentlich für mehrsprachige NLP-Anwendungen und maschinelle Übersetzungssysteme.",
          nl: "Taalidentificatie is het proces van het automatisch bepalen in welke natuurlijke taal een stuk tekst geschreven is, essentieel voor meertalige NLP-applicaties en machinevertaalsystemen."
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
