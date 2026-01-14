// Natural Language Processing Quiz - Level 3: Text Representation and Vector Models
(function() {
  const level3 = {
    name: {
      en: "Text Representation",
      es: "Representación de Texto",
      de: "Textrepräsentation",
      nl: "Tekstrepresentatie"
    },
    questions: [
      {
        question: {
          en: "What is TF-IDF (Term Frequency-Inverse Document Frequency)?",
          es: "¿Qué es TF-IDF (Frecuencia de Término-Frecuencia Inversa de Documento)?",
          de: "Was ist TF-IDF (Term Frequency-Inverse Document Frequency)?",
          nl: "Wat is TF-IDF (Term Frequency-Inverse Document Frequency)?"
        },
        options: [
          { en: "A weighting scheme that reflects how important a word is to a document in a collection", es: "Un esquema de ponderación que refleja qué tan importante es una palabra para un documento en una colección", de: "Ein Gewichtungsschema das widerspiegelt wie wichtig ein Wort für ein Dokument in einer Sammlung ist", nl: "Een wegingsschema dat weergeeft hoe belangrijk een woord is voor een document in een verzameling" },
          { en: "A method for translating documents", es: "Un método para traducir documentos", de: "Eine Methode zum Übersetzen von Dokumenten", nl: "Een methode voor het vertalen van documenten" },
          { en: "A technique for document formatting", es: "Una técnica para formateo de documentos", de: "Eine Technik für Dokumentformatierung", nl: "Een techniek voor documentopmaak" },
          { en: "A database indexing method", es: "Un método de indexación de base de datos", de: "Eine Datenbankindexierungsmethode", nl: "Een database indexeringsmethode" }
        ],
        correct: 0,
        explanation: {
          en: "TF-IDF measures word importance by considering both how frequently it appears in a document (TF) and how rare it is across the entire corpus (IDF).",
          es: "TF-IDF mide la importancia de palabras considerando tanto qué tan frecuentemente aparece en un documento (TF) como qué tan rara es en todo el corpus (IDF).",
          de: "TF-IDF misst Wortbedeutung durch Berücksichtigung sowohl wie häufig es in einem Dokument erscheint (TF) als auch wie selten es im gesamten Korpus ist (IDF).",
          nl: "TF-IDF meet woordbelang door zowel te kijken hoe vaak het in een document voorkomt (TF) als hoe zeldzaam het is in het hele corpus (IDF)."
        }
      },
      {
        question: {
          en: "What are word embeddings?",
          es: "¿Qué son las incrustaciones de palabras?",
          de: "Was sind Worteinbettungen?",
          nl: "Wat zijn woordinbeddingen?"
        },
        options: [
          { en: "Dense vector representations of words that capture semantic meaning", es: "Representaciones vectoriales densas de palabras que capturan significado semántico", de: "Dichte Vektordarstellungen von Wörtern die semantische Bedeutung erfassen", nl: "Dichte vectorrepresentaties van woorden die semantische betekenis vastleggen" },
          { en: "Words embedded in documents", es: "Palabras incrustadas en documentos", de: "In Dokumente eingebettete Wörter", nl: "Woorden ingebed in documenten" },
          { en: "A method for word pronunciation", es: "Un método para pronunciación de palabras", de: "Eine Methode für Wortaussprache", nl: "Een methode voor woorduitspraak" },
          { en: "Words written in bold format", es: "Palabras escritas en formato negrita", de: "Wörter in fettem Format geschrieben", nl: "Woorden geschreven in vetgedrukt formaat" }
        ],
        correct: 0,
        explanation: {
          en: "Word embeddings map words to dense vectors where semantically similar words have similar vector representations, enabling mathematical operations on word meanings.",
          es: "Las incrustaciones de palabras mapean palabras a vectores densos donde palabras semánticamente similares tienen representaciones vectoriales similares, permitiendo operaciones matemáticas en significados de palabras.",
          de: "Worteinbettungen bilden Wörter auf dichte Vektoren ab wo semantisch ähnliche Wörter ähnliche Vektordarstellungen haben, ermöglichen mathematische Operationen auf Wortbedeutungen.",
          nl: "Woordinbeddingen mappen woorden naar dichte vectoren waarbij semantisch vergelijkbare woorden vergelijkbare vectorrepresentaties hebben, maken wiskundige bewerkingen op woordbetekenissen mogelijk."
        }
      },
      {
        question: {
          en: "What is Word2Vec?",
          es: "¿Qué es Word2Vec?",
          de: "Was ist Word2Vec?",
          nl: "Wat is Word2Vec?"
        },
        options: [
          { en: "A neural network model that learns word embeddings from large text corpora", es: "Un modelo de red neuronal que aprende incrustaciones de palabras de grandes corpora de texto", de: "Ein neuronales Netzwerkmodell das Worteinbettungen aus großen Textkorpora lernt", nl: "Een neuraal netwerkmodel dat woordinbeddingen leert uit grote tekstcorpora" },
          { en: "A word counting algorithm", es: "Un algoritmo de conteo de palabras", de: "Ein Wortzählalgorithmus", nl: "Een woordtelalgoritme" },
          { en: "A vector graphics program", es: "Un programa de gráficos vectoriales", de: "Ein Vektorgrafikprogramm", nl: "Een vectorgrafiekprogramma" },
          { en: "A text formatting tool", es: "Una herramienta de formateo de texto", de: "Ein Textformatierungstool", nl: "Een tekstopmaaktool" }
        ],
        correct: 0,
        explanation: {
          en: "Word2Vec uses neural networks to learn vector representations of words based on their context, using either CBOW or Skip-gram architectures.",
          es: "Word2Vec usa redes neuronales para aprender representaciones vectoriales de palabras basándose en su contexto, usando arquitecturas CBOW o Skip-gram.",
          de: "Word2Vec verwendet neuronale Netzwerke um Vektordarstellungen von Wörtern basierend auf ihrem Kontext zu lernen, mit CBOW oder Skip-gram Architekturen.",
          nl: "Word2Vec gebruikt neurale netwerken om vectorrepresentaties van woorden te leren gebaseerd op hun context, met CBOW of Skip-gram architecturen."
        }
      },
      {
        question: {
          en: "What is cosine similarity in NLP?",
          es: "¿Qué es la similitud de coseno en PLN?",
          de: "Was ist Kosinusähnlichkeit in NLP?",
          nl: "Wat is cosinus gelijkenis in NLP?"
        },
        options: [
          { en: "A measure of similarity between two vectors based on the angle between them", es: "Una medida de similitud entre dos vectores basada en el ángulo entre ellos", de: "Ein Maß für Ähnlichkeit zwischen zwei Vektoren basierend auf dem Winkel zwischen ihnen", nl: "Een maat voor gelijkenis tussen twee vectoren gebaseerd op de hoek ertussen" },
          { en: "A mathematical cosine function", es: "Una función coseno matemática", de: "Eine mathematische Kosinusfunktion", nl: "Een wiskundige cosinusfunctie" },
          { en: "A similarity between triangles", es: "Una similitud entre triángulos", de: "Eine Ähnlichkeit zwischen Dreiecken", nl: "Een gelijkenis tussen driehoeken" },
          { en: "A geometric shape comparison", es: "Una comparación de formas geométricas", de: "Ein geometrischer Formvergleich", nl: "Een geometrische vormvergelijking" }
        ],
        correct: 0,
        explanation: {
          en: "Cosine similarity measures the cosine of the angle between two vectors, commonly used to compare document similarity or word vector similarity in NLP.",
          es: "La similitud de coseno mide el coseno del ángulo entre dos vectores, comúnmente usado para comparar similitud de documentos o similitud de vectores de palabras en PLN.",
          de: "Kosinusähnlichkeit misst den Kosinus des Winkels zwischen zwei Vektoren, häufig verwendet um Dokumentähnlichkeit oder Wortvektorähnlichkeit in NLP zu vergleichen.",
          nl: "Cosinus gelijkenis meet de cosinus van de hoek tussen twee vectoren, vaak gebruikt om documentsimilariteit of woordvector gelijkenis in NLP te vergelijken."
        }
      },
      {
        question: {
          en: "What is n-gram analysis?",
          es: "¿Qué es el análisis de n-gramas?",
          de: "Was ist n-Gramm-Analyse?",
          nl: "Wat is n-gram analyse?"
        },
        options: [
          { en: "Analyzing sequences of n consecutive words or characters in text", es: "Analizar secuencias de n palabras o caracteres consecutivos en texto", de: "Analysieren von Sequenzen von n aufeinanderfolgenden Wörtern oder Zeichen in Text", nl: "Het analyseren van sequenties van n opeenvolgende woorden of karakters in tekst" },
          { en: "Counting the total number of words", es: "Contar el número total de palabras", de: "Die Gesamtzahl der Wörter zählen", nl: "Het totale aantal woorden tellen" },
          { en: "Analyzing grammar rules", es: "Analizar reglas gramaticales", de: "Grammatikregeln analysieren", nl: "Grammaticaregels analyseren" },
          { en: "Measuring text length", es: "Medir longitud del texto", de: "Textlänge messen", nl: "Tekstlengte meten" }
        ],
        correct: 0,
        explanation: {
          en: "N-grams capture local word patterns and context, where unigrams are single words, bigrams are pairs, trigrams are triplets, etc.",
          es: "Los n-gramas capturan patrones de palabras locales y contexto, donde unigramas son palabras solas, bigramas son pares, trigramas son triples, etc.",
          de: "N-Gramme erfassen lokale Wortmuster und Kontext, wobei Unigramme einzelne Wörter sind, Bigramme Paare, Trigramme Tripel, etc.",
          nl: "N-grammen leggen lokale woordpatronen en context vast, waarbij unigrammen enkele woorden zijn, bigrammen paren, trigrammen drietal, etc."
        }
      },
      {
        question: {
          en: "What is the main advantage of dense vector representations over sparse representations?",
          es: "¿Cuál es la principal ventaja de las representaciones vectoriales densas sobre las representaciones dispersas?",
          de: "Was ist der Hauptvorteil dichter Vektordarstellungen gegenüber spärlichen Darstellungen?",
          nl: "Wat is het hoofdvoordeel van dichte vectorrepresentaties ten opzichte van schaarse representaties?"
        },
        options: [
          { en: "Better capture of semantic relationships and reduced dimensionality", es: "Mejor captura de relaciones semánticas y dimensionalidad reducida", de: "Bessere Erfassung semantischer Beziehungen und reduzierte Dimensionalität", nl: "Betere vastlegging van semantische relaties en verminderde dimensionaliteit" },
          { en: "Faster computation speed", es: "Velocidad de cálculo más rápida", de: "Schnellere Berechnungsgeschwindigkeit", nl: "Snellere rekensnelheid" },
          { en: "Less memory usage", es: "Menor uso de memoria", de: "Geringerer Speicherverbrauch", nl: "Minder geheugengebruik" },
          { en: "Easier to interpret", es: "Más fácil de interpretar", de: "Einfacher zu interpretieren", nl: "Makkelijker te interpreteren" }
        ],
        correct: 0,
        explanation: {
          en: "Dense vectors can capture semantic relationships between words and concepts more effectively, while also reducing the dimensionality compared to sparse representations like one-hot encoding.",
          es: "Los vectores densos pueden capturar relaciones semánticas entre palabras y conceptos más efectivamente, mientras también reducen la dimensionalidad comparado con representaciones dispersas como codificación one-hot.",
          de: "Dichte Vektoren können semantische Beziehungen zwischen Wörtern und Konzepten effektiver erfassen, während sie auch die Dimensionalität im Vergleich zu spärlichen Darstellungen wie One-Hot-Kodierung reduzieren.",
          nl: "Dichte vectoren kunnen semantische relaties tussen woorden en concepten effectiever vastleggen, terwijl ze ook de dimensionaliteit verminderen vergeleken met schaarse representaties zoals one-hot encoding."
        }
      },
      {
        question: {
          en: "What is the difference between CBOW and Skip-gram in Word2Vec?",
          es: "¿Cuál es la diferencia entre CBOW y Skip-gram en Word2Vec?",
          de: "Was ist der Unterschied zwischen CBOW und Skip-gram in Word2Vec?",
          nl: "Wat is het verschil tussen CBOW en Skip-gram in Word2Vec?"
        },
        options: [
          { en: "CBOW predicts target word from context, Skip-gram predicts context from target word", es: "CBOW predice la palabra objetivo del contexto, Skip-gram predice el contexto de la palabra objetivo", de: "CBOW sagt Zielwort aus Kontext vorher, Skip-gram sagt Kontext aus Zielwort vorher", nl: "CBOW voorspelt het doelwoord uit de context, Skip-gram voorspelt de context uit het doelwoord" },
          { en: "CBOW is faster, Skip-gram is more accurate", es: "CBOW es más rápido, Skip-gram es más preciso", de: "CBOW ist schneller, Skip-gram ist genauer", nl: "CBOW is sneller, Skip-gram is nauwkeuriger" },
          { en: "CBOW uses larger vocabularies", es: "CBOW usa vocabularios más grandes", de: "CBOW verwendet größere Vokabulare", nl: "CBOW gebruikt grotere vocabulaires" },
          { en: "Skip-gram requires more training data", es: "Skip-gram requiere más datos de entrenamiento", de: "Skip-gram benötigt mehr Trainingsdaten", nl: "Skip-gram vereist meer trainingsgegevens" }
        ],
        correct: 0,
        explanation: {
          en: "CBOW (Continuous Bag of Words) uses surrounding context words to predict the target word, while Skip-gram does the opposite - uses the target word to predict surrounding context words.",
          es: "CBOW (Continuous Bag of Words) usa palabras de contexto circundantes para predecir la palabra objetivo, mientras Skip-gram hace lo contrario - usa la palabra objetivo para predecir palabras de contexto circundantes.",
          de: "CBOW (Continuous Bag of Words) verwendet umgebende Kontextwörter um das Zielwort vorherzusagen, während Skip-gram das Gegenteil macht - verwendet das Zielwort um umgebende Kontextwörter vorherzusagen.",
          nl: "CBOW (Continuous Bag of Words) gebruikt omringende contextwoorden om het doelwoord te voorspellen, terwijl Skip-gram het tegenovergestelde doet - gebruikt het doelwoord om omringende contextwoorden te voorspellen."
        }
      },
      {
        question: {
          en: "What is GloVe (Global Vectors for Word Representation)?",
          es: "¿Qué es GloVe (Vectores Globales para Representación de Palabras)?",
          de: "Was ist GloVe (Global Vectors for Word Representation)?",
          nl: "Wat is GloVe (Global Vectors for Word Representation)?"
        },
        options: [
          { en: "A word embedding method that combines global matrix factorization with local context windows", es: "Un método de incrustación de palabras que combina factorización de matriz global con ventanas de contexto local", de: "Eine Worteinbettungsmethode die globale Matrixfaktorisierung mit lokalen Kontextfenstern kombiniert", nl: "Een woordinbeddingsmethode die globale matrixfactorisatie combineert met lokale contextvensters" },
          { en: "A text preprocessing tool", es: "Una herramienta de preprocesamiento de texto", de: "Ein Textvorverarbeitungstool", nl: "Een tekstvoorverwerkingstool" },
          { en: "A neural network architecture", es: "Una arquitectura de red neuronal", de: "Eine neuronale Netzwerkarchitektur", nl: "Een neurale netwerkarchitectuur" },
          { en: "A language translation method", es: "Un método de traducción de idiomas", de: "Eine Sprachübersetzungsmethode", nl: "Een taaltranslatiemethode" }
        ],
        correct: 0,
        explanation: {
          en: "GloVe combines the advantages of global matrix factorization methods (like LSA) with local context window methods (like Word2Vec) by training on global word co-occurrence statistics.",
          es: "GloVe combina las ventajas de métodos de factorización de matriz global (como LSA) con métodos de ventana de contexto local (como Word2Vec) entrenando en estadísticas globales de co-ocurrencia de palabras.",
          de: "GloVe kombiniert die Vorteile globaler Matrixfaktorisierungsmethoden (wie LSA) mit lokalen Kontextfenstermethoden (wie Word2Vec) durch Training auf globalen Wort-Kooccurrence-Statistiken.",
          nl: "GloVe combineert de voordelen van globale matrixfactorisatiemethoden (zoals LSA) met lokale contextventermethoden (zoals Word2Vec) door te trainen op globale woord-coöccurrentiestatistieken."
        }
      },
      {
        question: {
          en: "What is the purpose of subword tokenization in NLP?",
          es: "¿Cuál es el propósito de la tokenización de subpalabras en PLN?",
          de: "Was ist der Zweck der Subwort-Tokenisierung in NLP?",
          nl: "Wat is het doel van subwoord tokenisatie in NLP?"
        },
        options: [
          { en: "To handle out-of-vocabulary words and improve representation of rare words", es: "Manejar palabras fuera del vocabulario y mejorar la representación de palabras raras", de: "Um Out-of-Vocabulary-Wörter zu handhaben und die Darstellung seltener Wörter zu verbessern", nl: "Om out-of-vocabulary woorden te behandelen en representatie van zeldzame woorden te verbeteren" },
          { en: "To reduce computational complexity", es: "Reducir la complejidad computacional", de: "Um die rechnerische Komplexität zu reduzieren", nl: "Om computationele complexiteit te verminderen" },
          { en: "To improve spelling correction", es: "Mejorar la corrección ortográfica", de: "Um die Rechtschreibkorrektur zu verbessern", nl: "Om spellingscorrectie te verbeteren" },
          { en: "To create shorter sentences", es: "Crear oraciones más cortas", de: "Um kürzere Sätze zu erstellen", nl: "Om kortere zinnen te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Subword tokenization (like BPE, WordPiece) breaks words into smaller meaningful units, helping models handle unknown words and better represent morphologically rich languages.",
          es: "La tokenización de subpalabras (como BPE, WordPiece) divide palabras en unidades más pequeñas significativas, ayudando a los modelos a manejar palabras desconocidas y representar mejor lenguajes morfológicamente ricos.",
          de: "Subwort-Tokenisierung (wie BPE, WordPiece) teilt Wörter in kleinere bedeutungsvolle Einheiten auf, hilft Modellen unbekannte Wörter zu handhaben und morphologisch reiche Sprachen besser darzustellen.",
          nl: "Subwoord tokenisatie (zoals BPE, WordPiece) verdeelt woorden in kleinere betekenisvolle eenheden, helpt modellen onbekende woorden te behandelen en morfologisch rijke talen beter te representeren."
        }
      },
      {
        question: {
          en: "What is document similarity and how is it typically measured?",
          es: "¿Qué es la similitud de documentos y cómo se mide típicamente?",
          de: "Was ist Dokumentähnlichkeit und wie wird sie typischerweise gemessen?",
          nl: "Wat is documentsimilariteit en hoe wordt het doorgaans gemeten?"
        },
        options: [
          { en: "Measuring how similar two documents are using vector representations and similarity metrics like cosine similarity", es: "Medir qué tan similares son dos documentos usando representaciones vectoriales y métricas de similitud como similitud de coseno", de: "Messen wie ähnlich zwei Dokumente sind mit Vektordarstellungen und Ähnlichkeitsmetriken wie Kosinusähnlichkeit", nl: "Meten hoe vergelijkbaar twee documenten zijn met behulp van vectorrepresentaties en gelijkenismetriek zoals cosinus gelijkenis" },
          { en: "Counting the number of shared words", es: "Contar el número de palabras compartidas", de: "Die Anzahl gemeinsamer Wörter zählen", nl: "Het aantal gedeelde woorden tellen" },
          { en: "Comparing document length", es: "Comparar la longitud del documento", de: "Dokumentlänge vergleichen", nl: "Documentlengte vergelijken" },
          { en: "Analyzing document format", es: "Analizar el formato del documento", de: "Dokumentformat analysieren", nl: "Documentformaat analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "Document similarity compares how semantically similar two documents are, typically by converting documents to vector representations and using metrics like cosine similarity, Jaccard similarity, or Euclidean distance.",
          es: "La similitud de documentos compara qué tan semánticamente similares son dos documentos, típicamente convirtiendo documentos a representaciones vectoriales y usando métricas como similitud de coseno, similitud de Jaccard, o distancia euclidiana.",
          de: "Dokumentähnlichkeit vergleicht wie semantisch ähnlich zwei Dokumente sind, typischerweise durch Konvertierung von Dokumenten zu Vektordarstellungen und Verwendung von Metriken wie Kosinusähnlichkeit, Jaccard-Ähnlichkeit oder euklidische Distanz.",
          nl: "Documentsimilariteit vergelijkt hoe semantisch vergelijkbaar twee documenten zijn, doorgaans door documenten om te zetten naar vectorrepresentaties en metriek te gebruiken zoals cosinus gelijkenis, Jaccard gelijkenis, of Euclidische afstand."
        }
      },
      {
        question: {
          en: "What is latent semantic analysis (LSA)?",
          es: "¿Qué es el análisis semántico latente (LSA)?",
          de: "Was ist latente semantische Analyse (LSA)?",
          nl: "Wat is latente semantische analyse (LSA)?"
        },
        options: [
          { en: "A technique using SVD to reduce dimensionality and discover hidden semantic relationships in text", es: "Una técnica que usa SVD para reducir dimensionalidad y descubrir relaciones semánticas ocultas en texto", de: "Eine Technik die SVD verwendet um Dimensionalität zu reduzieren und versteckte semantische Beziehungen in Text zu entdecken", nl: "Een techniek die SVD gebruikt om dimensionaliteit te verminderen en verborgen semantische relaties in tekst te ontdekken" },
          { en: "A method for language translation", es: "Un método para traducción de idiomas", de: "Eine Methode für Sprachübersetzung", nl: "Een methode voor taaltranslatie" },
          { en: "A text summarization algorithm", es: "Un algoritmo de resumen de texto", de: "Ein Textzusammenfassungsalgorithmus", nl: "Een tekstsamenvattingsalgoritme" },
          { en: "A speech recognition technique", es: "Una técnica de reconocimiento de voz", de: "Eine Spracherkennungstechnik", nl: "Een spraakherkenningtechniek" }
        ],
        correct: 0,
        explanation: {
          en: "LSA uses singular value decomposition (SVD) on term-document matrices to identify latent semantic structures and reduce noise, capturing implicit relationships between terms and documents.",
          es: "LSA usa descomposición de valores singulares (SVD) en matrices término-documento para identificar estructuras semánticas latentes y reducir ruido, capturando relaciones implícitas entre términos y documentos.",
          de: "LSA verwendet Singularwertzerlegung (SVD) auf Term-Dokument-Matrizen um latente semantische Strukturen zu identifizieren und Rauschen zu reduzieren, erfasst implizite Beziehungen zwischen Begriffen und Dokumenten.",
          nl: "LSA gebruikt singular value decomposition (SVD) op term-document matrices om latente semantische structuren te identificeren en ruis te verminderen, legt impliciete relaties tussen termen en documenten vast."
        }
      },
      {
        question: {
          en: "What is the bag-of-words model and what are its limitations?",
          es: "¿Qué es el modelo de bolsa de palabras y cuáles son sus limitaciones?",
          de: "Was ist das Bag-of-Words-Modell und was sind seine Einschränkungen?",
          nl: "Wat is het bag-of-words model en wat zijn de beperkingen?"
        },
        options: [
          { en: "A text representation that treats documents as unordered collections of words, losing word order and context", es: "Una representación de texto que trata documentos como colecciones desordenadas de palabras, perdiendo orden de palabras y contexto", de: "Eine Textdarstellung die Dokumente als ungeordnete Sammlungen von Wörtern behandelt, verliert Wortreihenfolge und Kontext", nl: "Een tekstrepresentatie die documenten behandelt als ongeordende verzamelingen woorden, verliest woordvolgorde en context" },
          { en: "A model that only works with single words", es: "Un modelo que solo funciona con palabras individuales", de: "Ein Modell das nur mit einzelnen Wörtern funktioniert", nl: "Een model dat alleen werkt met enkele woorden" },
          { en: "A technique for organizing documents", es: "Una técnica para organizar documentos", de: "Eine Technik zur Organisation von Dokumenten", nl: "Een techniek voor het organiseren van documenten" },
          { en: "A method for word translation", es: "Un método para traducción de palabras", de: "Eine Methode für Wortübersetzung", nl: "Een methode voor woordvertaling" }
        ],
        correct: 0,
        explanation: {
          en: "The bag-of-words model represents text as word frequency counts, ignoring grammar, word order, and context. While simple and effective for some tasks, it loses important semantic information.",
          es: "El modelo de bolsa de palabras representa texto como conteos de frecuencia de palabras, ignorando gramática, orden de palabras y contexto. Aunque simple y efectivo para algunas tareas, pierde información semántica importante.",
          de: "Das Bag-of-Words-Modell repräsentiert Text als Worthäufigkeitszählungen, ignoriert Grammatik, Wortreihenfolge und Kontext. Obwohl einfach und effektiv für einige Aufgaben, verliert es wichtige semantische Informationen.",
          nl: "Het bag-of-words model representeert tekst als woordfrequentietellingen, negeert grammatica, woordvolgorde en context. Hoewel eenvoudig en effectief voor sommige taken, verliest het belangrijke semantische informatie."
        }
      },
      {
        question: {
          en: "What is the difference between stemming and lemmatization?",
          es: "¿Cuál es la diferencia entre stemming y lematización?",
          de: "Was ist der Unterschied zwischen Stemming und Lemmatisierung?",
          nl: "Wat is het verschil tussen stemming en lemmatisatie?"
        },
        options: [
          { en: "Stemming removes suffixes crudely, lemmatization finds the actual dictionary form using linguistic knowledge", es: "Stemming remueve sufijos crudamente, lematización encuentra la forma de diccionario actual usando conocimiento lingüístico", de: "Stemming entfernt Suffixe grob, Lemmatisierung findet die tatsächliche Wörterbuchform mit linguistischem Wissen", nl: "Stemming verwijdert achtervoegsels ruw, lemmatisatie vindt de werkelijke woordenboekvorm met linguïstische kennis" },
          { en: "Stemming is faster than lemmatization", es: "Stemming es más rápido que lematización", de: "Stemming ist schneller als Lemmatisierung", nl: "Stemming is sneller dan lemmatisatie" },
          { en: "Lemmatization only works with verbs", es: "Lematización solo funciona con verbos", de: "Lemmatisierung funktioniert nur mit Verben", nl: "Lemmatisatie werkt alleen met werkwoorden" },
          { en: "Stemming requires more computational resources", es: "Stemming requiere más recursos computacionales", de: "Stemming benötigt mehr Rechenressourcen", nl: "Stemming vereist meer computationele bronnen" }
        ],
        correct: 0,
        explanation: {
          en: "Stemming uses simple rules to chop off word endings (e.g., 'running' → 'run'), while lemmatization uses vocabulary and morphological analysis to return the actual root form (e.g., 'better' → 'good').",
          es: "Stemming usa reglas simples para cortar terminaciones de palabras (ej., 'corriendo' → 'corr'), mientras lematización usa vocabulario y análisis morfológico para devolver la forma raíz actual (ej., 'mejor' → 'bueno').",
          de: "Stemming verwendet einfache Regeln um Wortendungen abzuschneiden (z.B. 'laufend' → 'lauf'), während Lemmatisierung Vokabular und morphologische Analyse verwendet um die tatsächliche Grundform zurückzugeben (z.B. 'besser' → 'gut').",
          nl: "Stemming gebruikt eenvoudige regels om woordeinden af te kappen (bijv. 'lopend' → 'loop'), terwijl lemmatisatie vocabulaire en morfologische analyse gebruikt om de werkelijke grondvorm terug te geven (bijv. 'beter' → 'goed')."
        }
      },
      {
        question: {
          en: "What is term frequency (TF) in information retrieval?",
          es: "¿Qué es la frecuencia de término (TF) en recuperación de información?",
          de: "Was ist Termfrequenz (TF) im Information Retrieval?",
          nl: "Wat is termfrequentie (TF) in informatie retrieval?"
        },
        options: [
          { en: "The number of times a term appears in a document, often normalized by document length", es: "El número de veces que un término aparece en un documento, a menudo normalizado por la longitud del documento", de: "Die Anzahl wie oft ein Begriff in einem Dokument erscheint, oft normalisiert durch Dokumentlänge", nl: "Het aantal keren dat een term voorkomt in een document, vaak genormaliseerd door documentlengte" },
          { en: "The frequency of terms across all documents", es: "La frecuencia de términos en todos los documentos", de: "Die Häufigkeit von Begriffen über alle Dokumente", nl: "De frequentie van termen over alle documenten" },
          { en: "The frequency of grammatical terms", es: "La frecuencia de términos gramaticales", de: "Die Häufigkeit grammatischer Begriffe", nl: "De frequentie van grammaticale termen" },
          { en: "The time frequency of document updates", es: "La frecuencia temporal de actualizaciones de documentos", de: "Die Zeitfrequenz von Dokumentaktualisierungen", nl: "De tijdfrequentie van documentupdates" }
        ],
        correct: 0,
        explanation: {
          en: "Term frequency measures how often a specific term appears in a document. It's often normalized (e.g., by document length) to account for documents of different sizes.",
          es: "La frecuencia de término mide qué tan a menudo aparece un término específico en un documento. A menudo se normaliza (ej., por longitud del documento) para considerar documentos de diferentes tamaños.",
          de: "Termfrequenz misst wie oft ein spezifischer Begriff in einem Dokument erscheint. Sie wird oft normalisiert (z.B. durch Dokumentlänge) um Dokumente verschiedener Größen zu berücksichtigen.",
          nl: "Termfrequentie meet hoe vaak een specifieke term voorkomt in een document. Het wordt vaak genormaliseerd (bijv. door documentlengte) om rekening te houden met documenten van verschillende groottes."
        }
      },
      {
        question: {
          en: "What is document frequency (DF) and inverse document frequency (IDF)?",
          es: "¿Qué es la frecuencia de documento (DF) y la frecuencia inversa de documento (IDF)?",
          de: "Was ist Dokumentfrequenz (DF) und inverse Dokumentfrequenz (IDF)?",
          nl: "Wat is documentfrequentie (DF) en inverse documentfrequentie (IDF)?"
        },
        options: [
          { en: "DF is how many documents contain a term; IDF is log(total docs / DF) to emphasize rare terms", es: "DF es cuántos documentos contienen un término; IDF es log(docs totales / DF) para enfatizar términos raros", de: "DF ist wie viele Dokumente einen Begriff enthalten; IDF ist log(Gesamtdokumente / DF) um seltene Begriffe zu betonen", nl: "DF is hoeveel documenten een term bevatten; IDF is log(totale docs / DF) om zeldzame termen te benadrukken" },
          { en: "DF measures document quality, IDF measures information density", es: "DF mide calidad del documento, IDF mide densidad de información", de: "DF misst Dokumentqualität, IDF misst Informationsdichte", nl: "DF meet documentkwaliteit, IDF meet informatiedichtheid" },
          { en: "DF is document frequency in time, IDF is inverse time frequency", es: "DF es frecuencia de documento en tiempo, IDF es frecuencia de tiempo inversa", de: "DF ist Dokumentfrequenz in der Zeit, IDF ist inverse Zeitfrequenz", nl: "DF is documentfrequentie in tijd, IDF is inverse tijdfrequentie" },
          { en: "Both measure the same concept differently", es: "Ambos miden el mismo concepto de manera diferente", de: "Beide messen dasselbe Konzept unterschiedlich", nl: "Beide meten hetzelfde concept anders" }
        ],
        correct: 0,
        explanation: {
          en: "Document Frequency counts how many documents in a corpus contain a specific term. Inverse Document Frequency (log(N/DF)) gives higher weight to rare terms that appear in fewer documents.",
          es: "La Frecuencia de Documento cuenta cuántos documentos en un corpus contienen un término específico. La Frecuencia Inversa de Documento (log(N/DF)) da mayor peso a términos raros que aparecen en menos documentos.",
          de: "Dokumentfrequenz zählt wie viele Dokumente in einem Korpus einen spezifischen Begriff enthalten. Inverse Dokumentfrequenz (log(N/DF)) gibt seltenen Begriffen die in weniger Dokumenten erscheinen höheres Gewicht.",
          nl: "Documentfrequentie telt hoeveel documenten in een corpus een specifieke term bevatten. Inverse Documentfrequentie (log(N/DF)) geeft meer gewicht aan zeldzame termen die in minder documenten voorkomen."
        }
      },
      {
        question: {
          en: "What is the curse of dimensionality in text representation?",
          es: "¿Qué es la maldición de la dimensionalidad en representación de texto?",
          de: "Was ist der Fluch der Dimensionalität in Textrepräsentation?",
          nl: "Wat is de vloek van dimensionaliteit in tekstrepresentatie?"
        },
        options: [
          { en: "High-dimensional sparse vectors become inefficient and lose meaningful distance relationships", es: "Vectores dispersos de alta dimensión se vuelven ineficientes y pierden relaciones de distancia significativas", de: "Hochdimensionale spärliche Vektoren werden ineffizient und verlieren bedeutungsvolle Distanzbeziehungen", nl: "Hoogdimensionale schaarse vectoren worden inefficiënt en verliezen betekenisvolle afstandsrelaties" },
          { en: "Text becomes too long to process", es: "El texto se vuelve demasiado largo para procesar", de: "Text wird zu lang zum Verarbeiten", nl: "Tekst wordt te lang om te verwerken" },
          { en: "Vocabulary becomes too small", es: "El vocabulario se vuelve demasiado pequeño", de: "Vokabular wird zu klein", nl: "Vocabulaire wordt te klein" },
          { en: "Computers run out of memory", es: "Las computadoras se quedan sin memoria", de: "Computer gehen die Speicher aus", nl: "Computers raken geheugen kwijt" }
        ],
        correct: 0,
        explanation: {
          en: "In high-dimensional spaces (like large vocabularies), data points become sparsely distributed, making similarity measures less meaningful and requiring exponentially more data to maintain density.",
          es: "En espacios de alta dimensión (como vocabularios grandes), los puntos de datos se distribuyen dispersamente, haciendo medidas de similitud menos significativas y requiriendo exponencialmente más datos para mantener densidad.",
          de: "In hochdimensionalen Räumen (wie große Vokabulare) werden Datenpunkte spärlich verteilt, machen Ähnlichkeitsmaße weniger bedeutungsvoll und erfordern exponentiell mehr Daten um Dichte zu erhalten.",
          nl: "In hoogdimensionale ruimtes (zoals grote vocabulaires) raken gegevenspunten schaars verdeeld, maken gelijkenismaatregelen minder betekenisvol en vereisen exponentieel meer gegevens om dichtheid te behouden."
        }
      },
      {
        question: {
          en: "What is FastText and how does it differ from Word2Vec?",
          es: "¿Qué es FastText y cómo difiere de Word2Vec?",
          de: "Was ist FastText und wie unterscheidet es sich von Word2Vec?",
          nl: "Wat is FastText en hoe verschilt het van Word2Vec?"
        },
        options: [
          { en: "FastText considers subword information (character n-grams) while Word2Vec treats words as atomic units", es: "FastText considera información de subpalabras (n-gramas de caracteres) mientras Word2Vec trata palabras como unidades atómicas", de: "FastText berücksichtigt Subwort-Informationen (Zeichen-N-Gramme) während Word2Vec Wörter als atomare Einheiten behandelt", nl: "FastText houdt rekening met subwoordinformatie (karakter n-grammen) terwijl Word2Vec woorden als atomaire eenheden behandelt" },
          { en: "FastText is faster than Word2Vec", es: "FastText es más rápido que Word2Vec", de: "FastText ist schneller als Word2Vec", nl: "FastText is sneller dan Word2Vec" },
          { en: "FastText only works with English", es: "FastText solo funciona con inglés", de: "FastText funktioniert nur mit Englisch", nl: "FastText werkt alleen met Engels" },
          { en: "FastText requires more memory", es: "FastText requiere más memoria", de: "FastText benötigt mehr Speicher", nl: "FastText vereist meer geheugen" }
        ],
        correct: 0,
        explanation: {
          en: "FastText extends Word2Vec by representing words as bags of character n-grams, allowing it to generate embeddings for out-of-vocabulary words and better handle morphologically rich languages.",
          es: "FastText extiende Word2Vec representando palabras como bolsas de n-gramas de caracteres, permitiéndole generar incrustaciones para palabras fuera del vocabulario y manejar mejor lenguajes morfológicamente ricos.",
          de: "FastText erweitert Word2Vec durch Darstellung von Wörtern als Bags von Zeichen-N-Grammen, ermöglicht es Einbettungen für Out-of-Vocabulary-Wörter zu generieren und morphologisch reiche Sprachen besser zu handhaben.",
          nl: "FastText breidt Word2Vec uit door woorden voor te stellen als zakken van karakter n-grammen, waardoor het embeddings kan genereren voor out-of-vocabulary woorden en morfologisch rijke talen beter kan behandelen."
        }
      },
      {
        question: {
          en: "What is the difference between one-hot encoding and distributed representations?",
          es: "¿Cuál es la diferencia entre codificación one-hot y representaciones distribuidas?",
          de: "Was ist der Unterschied zwischen One-Hot-Kodierung und verteilten Darstellungen?",
          nl: "Wat is het verschil tussen one-hot encoding en gedistribueerde representaties?"
        },
        options: [
          { en: "One-hot uses sparse binary vectors, distributed uses dense real-valued vectors that capture semantic relationships", es: "One-hot usa vectores binarios dispersos, distribuidas usan vectores densos de valores reales que capturan relaciones semánticas", de: "One-Hot verwendet spärliche binäre Vektoren, verteilt verwendet dichte realwertige Vektoren die semantische Beziehungen erfassen", nl: "One-hot gebruikt schaarse binaire vectoren, gedistribueerd gebruikt dichte reëelwaardige vectoren die semantische relaties vastleggen" },
          { en: "One-hot is more accurate", es: "One-hot es más preciso", de: "One-Hot ist genauer", nl: "One-hot is nauwkeuriger" },
          { en: "Distributed representations use more memory", es: "Las representaciones distribuidas usan más memoria", de: "Verteilte Darstellungen verwenden mehr Speicher", nl: "Gedistribueerde representaties gebruiken meer geheugen" },
          { en: "One-hot works better with neural networks", es: "One-hot funciona mejor con redes neuronales", de: "One-Hot funktioniert besser mit neuronalen Netzwerken", nl: "One-hot werkt beter met neurale netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "One-hot encoding creates sparse vectors with a single 1 and rest 0s, treating words as discrete symbols. Distributed representations use dense vectors where each dimension captures semantic features, enabling similarity comparisons.",
          es: "La codificación one-hot crea vectores dispersos con un solo 1 y el resto 0s, tratando palabras como símbolos discretos. Las representaciones distribuidas usan vectores densos donde cada dimensión captura características semánticas, permitiendo comparaciones de similitud.",
          de: "One-Hot-Kodierung erstellt spärliche Vektoren mit einer einzigen 1 und Rest 0en, behandelt Wörter als diskrete Symbole. Verteilte Darstellungen verwenden dichte Vektoren wo jede Dimension semantische Merkmale erfasst, ermöglichen Ähnlichkeitsvergleiche.",
          nl: "One-hot encoding creëert schaarse vectoren met een enkele 1 en de rest 0en, behandelt woorden als discrete symbolen. Gedistribueerde representaties gebruiken dichte vectoren waarbij elke dimensie semantische kenmerken vastlegt, maakt gelijkeniscomparaties mogelijk."
        }
      },
      {
        question: {
          en: "What is the role of context windows in word embedding training?",
          es: "¿Cuál es el papel de las ventanas de contexto en el entrenamiento de incrustaciones de palabras?",
          de: "Was ist die Rolle von Kontextfenstern im Training von Worteinbettungen?",
          nl: "Wat is de rol van contextvensters in woordinbedding training?"
        },
        options: [
          { en: "They define the local neighborhood of words used to learn semantic relationships and co-occurrence patterns", es: "Definen la vecindad local de palabras usada para aprender relaciones semánticas y patrones de co-ocurrencia", de: "Sie definieren die lokale Nachbarschaft von Wörtern verwendet um semantische Beziehungen und Kooccurrence-Muster zu lernen", nl: "Ze definiëren de lokale buurt van woorden gebruikt om semantische relaties en co-occurrence patronen te leren" },
          { en: "They determine the size of the vocabulary", es: "Determinan el tamaño del vocabulario", de: "Sie bestimmen die Größe des Vokabulars", nl: "Ze bepalen de grootte van het vocabulaire" },
          { en: "They control the training speed", es: "Controlan la velocidad de entrenamiento", de: "Sie kontrollieren die Trainingsgeschwindigkeit", nl: "Ze controleren de trainingssnelheid" },
          { en: "They define the output vector size", es: "Definen el tamaño del vector de salida", de: "Sie definieren die Ausgabevektorgröße", nl: "Ze definiëren de uitvoer vectorgrootte" }
        ],
        correct: 0,
        explanation: {
          en: "Context windows determine which surrounding words are considered when training word embeddings. Larger windows capture broader semantic relationships, while smaller windows focus on syntactic relationships.",
          es: "Las ventanas de contexto determinan qué palabras circundantes se consideran al entrenar incrustaciones de palabras. Ventanas más grandes capturan relaciones semánticas más amplias, mientras ventanas más pequeñas se enfocan en relaciones sintácticas.",
          de: "Kontextfenster bestimmen welche umgebenden Wörter beim Training von Worteinbettungen berücksichtigt werden. Größere Fenster erfassen breitere semantische Beziehungen, während kleinere Fenster sich auf syntaktische Beziehungen konzentrieren.",
          nl: "Contextvensters bepalen welke omringende woorden worden beschouwd bij het trainen van woordinbeddingen. Grotere vensters leggen bredere semantische relaties vast, terwijl kleinere vensters zich richten op syntactische relaties."
        }
      },
      {
        question: {
          en: "What is syntactic parsing and how does it differ from semantic analysis?",
          es: "¿Qué es el análisis sintáctico y cómo difiere del análisis semántico?",
          de: "Was ist syntaktisches Parsing und wie unterscheidet es sich von semantischer Analyse?",
          nl: "Wat is syntactisch parsing en hoe verschilt het van semantische analyse?"
        },
        options: [
          { en: "Syntactic parsing analyzes grammatical structure and word relationships, while semantic analysis focuses on meaning and interpretation", es: "El análisis sintáctico analiza estructura gramatical y relaciones entre palabras, mientras el análisis semántico se enfoca en significado e interpretación", de: "Syntaktisches Parsing analysiert grammatische Struktur und Wortbeziehungen, während semantische Analyse sich auf Bedeutung und Interpretation konzentriert", nl: "Syntactisch parsing analyseert grammaticale structuur en woordrelaties, terwijl semantische analyse zich richt op betekenis en interpretatie" },
          { en: "Syntactic parsing is faster than semantic analysis", es: "El análisis sintáctico es más rápido que el análisis semántico", de: "Syntaktisches Parsing ist schneller als semantische Analyse", nl: "Syntactisch parsing is sneller dan semantische analyse" },
          { en: "Semantic analysis only works with single words", es: "El análisis semántico solo funciona con palabras individuales", de: "Semantische Analyse funktioniert nur mit einzelnen Wörtern", nl: "Semantische analyse werkt alleen met enkele woorden" },
          { en: "Syntactic parsing requires larger vocabularies", es: "El análisis sintáctico requiere vocabularios más grandes", de: "Syntaktisches Parsing benötigt größere Vokabulare", nl: "Syntactisch parsing vereist grotere vocabulaires" }
        ],
        correct: 0,
        explanation: {
          en: "Syntactic parsing builds hierarchical tree structures showing how words combine grammatically (subjects, objects, phrases), while semantic analysis interprets the actual meaning and conceptual relationships expressed by those structures.",
          es: "El análisis sintáctico construye estructuras de árbol jerárquicas mostrando cómo las palabras se combinan gramaticalmente (sujetos, objetos, frases), mientras el análisis semántico interpreta el significado real y relaciones conceptuales expresadas por esas estructuras.",
          de: "Syntaktisches Parsing baut hierarchische Baumstrukturen auf die zeigen wie Wörter sich grammatisch kombinieren (Subjekte, Objekte, Phrasen), während semantische Analyse die tatsächliche Bedeutung und konzeptuelle Beziehungen interpretiert die von diesen Strukturen ausgedrückt werden.",
          nl: "Syntactisch parsing bouwt hiërarchische boomstructuren die tonen hoe woorden zich grammaticaal combineren (onderwerpen, objecten, zinsdelen), terwijl semantische analyse de werkelijke betekenis en conceptuele relaties interpreteert die door die structuren worden uitgedrukt."
        }
      },
      {
        question: {
          en: "What is a document-term matrix?",
          es: "¿Qué es una matriz documento-término?",
          de: "Was ist eine Dokument-Term-Matrix?",
          nl: "Wat is een document-term matrix?"
        },
        options: [
          { en: "A matrix where rows represent documents, columns represent terms, and cells contain term frequencies or weights", es: "Una matriz donde filas representan documentos, columnas representan términos, y celdas contienen frecuencias o pesos de términos", de: "Eine Matrix wo Zeilen Dokumente darstellen, Spalten Begriffe darstellen, und Zellen Termfrequenzen oder Gewichte enthalten", nl: "Een matrix waarbij rijen documenten voorstellen, kolommen termen voorstellen, en cellen termfrequenties of gewichten bevatten" },
          { en: "A matrix for storing document metadata", es: "Una matriz para almacenar metadatos de documentos", de: "Eine Matrix zum Speichern von Dokumentmetadaten", nl: "Een matrix voor het opslaan van documentmetadata" },
          { en: "A mathematical formula for documents", es: "Una fórmula matemática para documentos", de: "Eine mathematische Formel für Dokumente", nl: "Een wiskundige formule voor documenten" },
          { en: "A table of contents for documents", es: "Una tabla de contenidos para documentos", de: "Ein Inhaltsverzeichnis für Dokumente", nl: "Een inhoudsopgave voor documenten" }
        ],
        correct: 0,
        explanation: {
          en: "A document-term matrix is a fundamental representation in NLP where each row corresponds to a document, each column to a term in the vocabulary, and values indicate term importance (often TF-IDF weights).",
          es: "Una matriz documento-término es una representación fundamental en PLN donde cada fila corresponde a un documento, cada columna a un término en el vocabulario, y valores indican importancia del término (a menudo pesos TF-IDF).",
          de: "Eine Dokument-Term-Matrix ist eine fundamentale Darstellung in NLP wo jede Zeile einem Dokument entspricht, jede Spalte einem Begriff im Vokabular, und Werte die Begriffsw wichtigkeit anzeigen (oft TF-IDF-Gewichte).",
          nl: "Een document-term matrix is een fundamentele representatie in NLP waarbij elke rij overeenkomt met een document, elke kolom met een term in het vocabulaire, en waarden termbelang aangeven (vaak TF-IDF gewichten)."
        }
      },
      {
        question: {
          en: "What is embedding dimension and how is it chosen?",
          es: "¿Qué es la dimensión de incrustación y cómo se elige?",
          de: "Was ist Einbettungsdimension und wie wird sie gewählt?",
          nl: "Wat is embedding dimensie en hoe wordt het gekozen?"
        },
        options: [
          { en: "The size of the vector representing each word, typically 50-300, balanced between expressiveness and efficiency", es: "El tamaño del vector que representa cada palabra, típicamente 50-300, equilibrado entre expresividad y eficiencia", de: "Die Größe des Vektors der jedes Wort darstellt, typischerweise 50-300, ausbalanciert zwischen Ausdruckskraft und Effizienz", nl: "De grootte van de vector die elk woord voorstelt, doorgaans 50-300, gebalanceerd tussen expressiviteit en efficiëntie" },
          { en: "The number of words in the vocabulary", es: "El número de palabras en el vocabulario", de: "Die Anzahl der Wörter im Vokabular", nl: "Het aantal woorden in het vocabulaire" },
          { en: "The depth of the neural network", es: "La profundidad de la red neuronal", de: "Die Tiefe des neuronalen Netzwerks", nl: "De diepte van het neurale netwerk" },
          { en: "The size of the training corpus", es: "El tamaño del corpus de entrenamiento", de: "Die Größe des Trainingskorpus", nl: "De grootte van het trainingscorpus" }
        ],
        correct: 0,
        explanation: {
          en: "Embedding dimension is the length of the dense vector representing each word. Higher dimensions can capture more nuanced relationships but require more data and computation. Common sizes are 100, 200, or 300 dimensions.",
          es: "La dimensión de incrustación es la longitud del vector denso que representa cada palabra. Dimensiones más altas pueden capturar relaciones más matizadas pero requieren más datos y computación. Tamaños comunes son 100, 200 o 300 dimensiones.",
          de: "Einbettungsdimension ist die Länge des dichten Vektors der jedes Wort darstellt. Höhere Dimensionen können nuanciertere Beziehungen erfassen erfordern aber mehr Daten und Berechnung. Übliche Größen sind 100, 200 oder 300 Dimensionen.",
          nl: "Embedding dimensie is de lengte van de dichte vector die elk woord voorstelt. Hogere dimensies kunnen genuanceerdere relaties vastleggen maar vereisen meer gegevens en berekening. Gebruikelijke groottes zijn 100, 200 of 300 dimensies."
        }
      },
      {
        question: {
          en: "What is the distributional hypothesis in NLP?",
          es: "¿Qué es la hipótesis distribucional en PLN?",
          de: "Was ist die distributionelle Hypothese in NLP?",
          nl: "Wat is de distributionele hypothese in NLP?"
        },
        options: [
          { en: "Words that occur in similar contexts tend to have similar meanings", es: "Las palabras que ocurren en contextos similares tienden a tener significados similares", de: "Wörter die in ähnlichen Kontexten vorkommen tendieren dazu ähnliche Bedeutungen zu haben", nl: "Woorden die in vergelijkbare contexten voorkomen hebben doorgaans vergelijkbare betekenissen" },
          { en: "Words are distributed randomly in text", es: "Las palabras se distribuyen aleatoriamente en el texto", de: "Wörter sind zufällig im Text verteilt", nl: "Woorden zijn willekeurig verdeeld in tekst" },
          { en: "Word frequencies follow a normal distribution", es: "Las frecuencias de palabras siguen una distribución normal", de: "Worthäufigkeiten folgen einer Normalverteilung", nl: "Woordfrequenties volgen een normale verdeling" },
          { en: "Meaning is distributed across multiple words", es: "El significado se distribuye a través de múltiples palabras", de: "Bedeutung ist über mehrere Wörter verteilt", nl: "Betekenis is verdeeld over meerdere woorden" }
        ],
        correct: 0,
        explanation: {
          en: "The distributional hypothesis, often summarized as 'you shall know a word by the company it keeps', is the foundation for word embeddings - words appearing in similar contexts have similar meanings.",
          es: "La hipótesis distribucional, a menudo resumida como 'conocerás una palabra por la compañía que tiene', es la base para incrustaciones de palabras - palabras que aparecen en contextos similares tienen significados similares.",
          de: "Die distributionelle Hypothese, oft zusammengefasst als 'du wirst ein Wort an seiner Begleitung erkennen', ist die Grundlage für Worteinbettungen - Wörter die in ähnlichen Kontexten erscheinen haben ähnliche Bedeutungen.",
          nl: "De distributionele hypothese, vaak samengevat als 'je zult een woord kennen aan het gezelschap dat het houdt', is de basis voor woordinbeddingen - woorden die in vergelijkbare contexten verschijnen hebben vergelijkbare betekenissen."
        }
      },
      {
        question: {
          en: "What is negative sampling in Word2Vec?",
          es: "¿Qué es el muestreo negativo en Word2Vec?",
          de: "Was ist Negative Sampling in Word2Vec?",
          nl: "Wat is negative sampling in Word2Vec?"
        },
        options: [
          { en: "A training technique that randomly samples negative examples to make training more efficient", es: "Una técnica de entrenamiento que muestrea aleatoriamente ejemplos negativos para hacer el entrenamiento más eficiente", de: "Eine Trainingstechnik die zufällig negative Beispiele sampelt um Training effizienter zu machen", nl: "Een trainingstechniek die willekeurig negatieve voorbeelden sampelt om training efficiënter te maken" },
          { en: "Removing negative sentiment words", es: "Eliminar palabras de sentimiento negativo", de: "Negative Sentimentwörter entfernen", nl: "Negatieve sentimentwoorden verwijderen" },
          { en: "Sampling from negative documents only", es: "Muestrear solo de documentos negativos", de: "Nur aus negativen Dokumenten sampeln", nl: "Alleen uit negatieve documenten samplen" },
          { en: "A method for handling negative numbers", es: "Un método para manejar números negativos", de: "Eine Methode zum Umgang mit negativen Zahlen", nl: "Een methode voor het omgaan met negatieve getallen" }
        ],
        correct: 0,
        explanation: {
          en: "Negative sampling is an optimization technique in Word2Vec that samples a small number of 'negative' word pairs (words that don't appear together) instead of updating weights for the entire vocabulary, making training much faster.",
          es: "El muestreo negativo es una técnica de optimización en Word2Vec que muestrea un pequeño número de pares de palabras 'negativos' (palabras que no aparecen juntas) en lugar de actualizar pesos para todo el vocabulario, haciendo el entrenamiento mucho más rápido.",
          de: "Negative Sampling ist eine Optimierungstechnik in Word2Vec die eine kleine Anzahl 'negativer' Wortpaare (Wörter die nicht zusammen erscheinen) sampelt anstatt Gewichte für das gesamte Vokabular zu aktualisieren, macht Training viel schneller.",
          nl: "Negative sampling is een optimalisatietechniek in Word2Vec die een klein aantal 'negatieve' woordparen (woorden die niet samen voorkomen) samplet in plaats van gewichten voor het hele vocabulaire bij te werken, maakt training veel sneller."
        }
      },
      {
        question: {
          en: "What is Euclidean distance in vector space?",
          es: "¿Qué es la distancia euclidiana en espacio vectorial?",
          de: "Was ist euklidische Distanz im Vektorraum?",
          nl: "Wat is Euclidische afstand in vectorruimte?"
        },
        options: [
          { en: "The straight-line distance between two vectors calculated using the Pythagorean theorem", es: "La distancia en línea recta entre dos vectores calculada usando el teorema de Pitágoras", de: "Die geradlinige Distanz zwischen zwei Vektoren berechnet mit dem Satz des Pythagoras", nl: "De rechte-lijn afstand tussen twee vectoren berekend met de stelling van Pythagoras" },
          { en: "The angular distance between vectors", es: "La distancia angular entre vectores", de: "Die Winkeldistanz zwischen Vektoren", nl: "De hoekafstand tussen vectoren" },
          { en: "The number of dimensions in the vector", es: "El número de dimensiones en el vector", de: "Die Anzahl der Dimensionen im Vektor", nl: "Het aantal dimensies in de vector" },
          { en: "The Manhattan distance between points", es: "La distancia Manhattan entre puntos", de: "Die Manhattan-Distanz zwischen Punkten", nl: "De Manhattan afstand tussen punten" }
        ],
        correct: 0,
        explanation: {
          en: "Euclidean distance measures the straight-line distance between two points in vector space, calculated as the square root of the sum of squared differences. While intuitive, cosine similarity is often preferred for text due to its insensitivity to vector magnitude.",
          es: "La distancia euclidiana mide la distancia en línea recta entre dos puntos en espacio vectorial, calculada como la raíz cuadrada de la suma de diferencias al cuadrado. Aunque intuitiva, la similitud de coseno a menudo se prefiere para texto debido a su insensibilidad a la magnitud del vector.",
          de: "Euklidische Distanz misst die geradlinige Distanz zwischen zwei Punkten im Vektorraum, berechnet als Quadratwurzel der Summe quadrierter Differenzen. Obwohl intuitiv wird für Text oft Kosinusähnlichkeit bevorzugt aufgrund ihrer Unempfindlichkeit gegenüber Vektormagnitude.",
          nl: "Euclidische afstand meet de rechte-lijn afstand tussen twee punten in vectorruimte, berekend als de vierkantswortel van de som van gekwadrateerde verschillen. Hoewel intuïtief wordt voor tekst vaak cosinus gelijkenis verkozen vanwege de ongevoeligheid voor vectorgrootte."
        }
      },
      {
        question: {
          en: "What is contextualized word embedding?",
          es: "¿Qué es la incrustación de palabras contextualizada?",
          de: "Was ist kontextualisierte Worteinbettung?",
          nl: "Wat is gecontextualiseerde woordinbedding?"
        },
        options: [
          { en: "Embeddings that change based on the surrounding context, like those from BERT or ELMo", es: "Incrustaciones que cambian según el contexto circundante, como las de BERT o ELMo", de: "Einbettungen die sich basierend auf dem umgebenden Kontext ändern, wie die von BERT oder ELMo", nl: "Embeddings die veranderen op basis van de omringende context, zoals die van BERT of ELMo" },
          { en: "Embeddings that only work in specific contexts", es: "Incrustaciones que solo funcionan en contextos específicos", de: "Einbettungen die nur in spezifischen Kontexten funktionieren", nl: "Embeddings die alleen in specifieke contexten werken" },
          { en: "Static embeddings with context information added", es: "Incrustaciones estáticas con información de contexto agregada", de: "Statische Einbettungen mit hinzugefügter Kontextinformation", nl: "Statische embeddings met toegevoegde contextinformatie" },
          { en: "Embeddings trained on contextual data only", es: "Incrustaciones entrenadas solo en datos contextuales", de: "Einbettungen nur auf kontextuellen Daten trainiert", nl: "Embeddings alleen getraind op contextuele data" }
        ],
        correct: 0,
        explanation: {
          en: "Contextualized embeddings generate different vector representations for the same word based on its context, solving the polysemy problem. For example, 'bank' in 'river bank' vs 'savings bank' gets different embeddings.",
          es: "Las incrustaciones contextualizadas generan diferentes representaciones vectoriales para la misma palabra basándose en su contexto, resolviendo el problema de polisemia. Por ejemplo, 'banco' en 'banco de río' vs 'banco de ahorros' obtiene diferentes incrustaciones.",
          de: "Kontextualisierte Einbettungen generieren verschiedene Vektordarstellungen für dasselbe Wort basierend auf seinem Kontext, lösen das Polysemieproblem. Zum Beispiel bekommt 'Bank' in 'Flussufer' vs 'Sparkasse' verschiedene Einbettungen.",
          nl: "Gecontextualiseerde embeddings genereren verschillende vectorrepresentaties voor hetzelfde woord op basis van zijn context, lossen het polysemieprobleem op. Bijvoorbeeld, 'bank' in 'rivieroever' vs 'spaarbank' krijgt verschillende embeddings."
        }
      },
      {
        question: {
          en: "What is the vocabulary size problem in NLP?",
          es: "¿Qué es el problema del tamaño del vocabulario en PLN?",
          de: "Was ist das Vokabulargrößenproblem in NLP?",
          nl: "Wat is het vocabulairegrootte probleem in NLP?"
        },
        options: [
          { en: "Large vocabularies create high-dimensional sparse representations and out-of-vocabulary issues", es: "Vocabularios grandes crean representaciones dispersas de alta dimensión y problemas fuera del vocabulario", de: "Große Vokabulare erstellen hochdimensionale spärliche Darstellungen und Out-of-Vocabulary-Probleme", nl: "Grote vocabulaires creëren hoogdimensionale schaarse representaties en out-of-vocabulary problemen" },
          { en: "Vocabulary becomes too small to represent all concepts", es: "El vocabulario se vuelve demasiado pequeño para representar todos los conceptos", de: "Vokabular wird zu klein um alle Konzepte darzustellen", nl: "Vocabulaire wordt te klein om alle concepten voor te stellen" },
          { en: "Determining the optimal vocabulary size", es: "Determinar el tamaño óptimo del vocabulario", de: "Die optimale Vokabulargröße bestimmen", nl: "De optimale vocabulairegrootte bepalen" },
          { en: "Memory limitations for storing vocabularies", es: "Limitaciones de memoria para almacenar vocabularios", de: "Speicherbeschränkungen für Speicherung von Vokabularen", nl: "Geheugenbeperkingen voor het opslaan van vocabulaires" }
        ],
        correct: 0,
        explanation: {
          en: "Large vocabularies lead to very high-dimensional sparse vectors and the challenge of handling words not seen during training (OOV). Solutions include subword tokenization, character-level models, and vocabulary pruning.",
          es: "Vocabularios grandes llevan a vectores dispersos de muy alta dimensión y el desafío de manejar palabras no vistas durante el entrenamiento (OOV). Las soluciones incluyen tokenización de subpalabras, modelos a nivel de caracteres y poda de vocabulario.",
          de: "Große Vokabulare führen zu sehr hochdimensionalen spärlichen Vektoren und der Herausforderung Wörter zu handhaben die während des Trainings nicht gesehen wurden (OOV). Lösungen umfassen Subwort-Tokenisierung, Modelle auf Zeichenebene und Vokabularbeschneidung.",
          nl: "Grote vocabulaires leiden tot zeer hoogdimensionale schaarse vectoren en de uitdaging van het behandelen van woorden die niet gezien zijn tijdens training (OOV). Oplossingen omvatten subwoord tokenisatie, karakter-niveau modellen en vocabulaire pruning."
        }
      },
      {
        question: {
          en: "What is semantic vector space?",
          es: "¿Qué es el espacio vectorial semántico?",
          de: "Was ist semantischer Vektorraum?",
          nl: "Wat is semantische vectorruimte?"
        },
        options: [
          { en: "A multi-dimensional space where words with similar meanings are positioned close together", es: "Un espacio multidimensional donde palabras con significados similares se posicionan cerca unas de otras", de: "Ein mehrdimensionaler Raum wo Wörter mit ähnlichen Bedeutungen nahe beieinander positioniert sind", nl: "Een multidimensionale ruimte waarin woorden met vergelijkbare betekenissen dicht bij elkaar gepositioneerd zijn" },
          { en: "A database for storing word meanings", es: "Una base de datos para almacenar significados de palabras", de: "Eine Datenbank zum Speichern von Wortbedeutungen", nl: "Een database voor het opslaan van woordbetekenissen" },
          { en: "A visualization tool for text", es: "Una herramienta de visualización para texto", de: "Ein Visualisierungswerkzeug für Text", nl: "Een visualisatietool voor tekst" },
          { en: "A grammar checking system", es: "Un sistema de revisión gramatical", de: "Ein Grammatikprüfungssystem", nl: "Een grammatica-controlesysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Semantic vector space represents words as points in a high-dimensional space where geometric relationships (distance, direction) correspond to semantic relationships (similarity, analogy). This enables operations like 'king - man + woman ≈ queen'.",
          es: "El espacio vectorial semántico representa palabras como puntos en un espacio de alta dimensión donde relaciones geométricas (distancia, dirección) corresponden a relaciones semánticas (similitud, analogía). Esto permite operaciones como 'rey - hombre + mujer ≈ reina'.",
          de: "Semantischer Vektorraum repräsentiert Wörter als Punkte in einem hochdimensionalen Raum wo geometrische Beziehungen (Distanz, Richtung) semantischen Beziehungen (Ähnlichkeit, Analogie) entsprechen. Dies ermöglicht Operationen wie 'König - Mann + Frau ≈ Königin'.",
          nl: "Semantische vectorruimte representeert woorden als punten in een hoogdimensionale ruimte waarbij geometrische relaties (afstand, richting) overeenkomen met semantische relaties (gelijkenis, analogie). Dit maakt operaties mogelijk zoals 'koning - man + vrouw ≈ koningin'."
        }
      },
      {
        question: {
          en: "What is BPE (Byte Pair Encoding) tokenization?",
          es: "¿Qué es la tokenización BPE (Codificación de Pares de Bytes)?",
          de: "Was ist BPE (Byte Pair Encoding) Tokenisierung?",
          nl: "Wat is BPE (Byte Pair Encoding) tokenisatie?"
        },
        options: [
          { en: "An iterative algorithm that merges the most frequent character pairs to create subword units", es: "Un algoritmo iterativo que fusiona los pares de caracteres más frecuentes para crear unidades de subpalabras", de: "Ein iterativer Algorithmus der die häufigsten Zeichenpaare zusammenführt um Subwort-Einheiten zu erstellen", nl: "Een iteratief algoritme dat de meest frequente karakterparen samenvoegt om subwoord-eenheden te creëren" },
          { en: "A method for encoding binary data", es: "Un método para codificar datos binarios", de: "Eine Methode zur Kodierung binärer Daten", nl: "Een methode voor het coderen van binaire data" },
          { en: "A compression algorithm for text files", es: "Un algoritmo de compresión para archivos de texto", de: "Ein Kompressionsalgorithmus für Textdateien", nl: "Een compressie-algoritme voor tekstbestanden" },
          { en: "A tokenizer that splits on byte boundaries", es: "Un tokenizador que divide en límites de bytes", de: "Ein Tokenisierer der an Bytegrenzen trennt", nl: "Een tokenizer die splitst op bytegrenzen" }
        ],
        correct: 0,
        explanation: {
          en: "BPE starts with characters and iteratively merges the most frequent pairs to build a vocabulary of subword units. This balances vocabulary size with the ability to represent rare words and handles OOV gracefully.",
          es: "BPE comienza con caracteres e iterativamente fusiona los pares más frecuentes para construir un vocabulario de unidades de subpalabras. Esto equilibra el tamaño del vocabulario con la capacidad de representar palabras raras y maneja OOV elegantemente.",
          de: "BPE beginnt mit Zeichen und führt iterativ die häufigsten Paare zusammen um ein Vokabular von Subwort-Einheiten aufzubauen. Dies balanciert Vokabulargröße mit der Fähigkeit seltene Wörter darzustellen und behandelt OOV elegant.",
          nl: "BPE begint met karakters en voegt iteratief de meest frequente paren samen om een vocabulaire van subwoord-eenheden op te bouwen. Dit balanceert vocabulairegrootte met het vermogen om zeldzame woorden voor te stellen en behandelt OOV elegant."
        }
      },
      {
        question: {
          en: "What is the vector analogy task in word embeddings?",
          es: "¿Qué es la tarea de analogía vectorial en incrustaciones de palabras?",
          de: "Was ist die Vektoranalogie-Aufgabe in Worteinbettungen?",
          nl: "Wat is de vectoranalogie-taak in woordinbeddingen?"
        },
        options: [
          { en: "Finding semantic relationships through vector arithmetic like 'king - man + woman = queen'", es: "Encontrar relaciones semánticas a través de aritmética vectorial como 'rey - hombre + mujer = reina'", de: "Semantische Beziehungen durch Vektorarithmetik finden wie 'König - Mann + Frau = Königin'", nl: "Semantische relaties vinden door vectorrekenkunde zoals 'koning - man + vrouw = koningin'" },
          { en: "Comparing word vectors for similarity", es: "Comparar vectores de palabras por similitud", de: "Wortvektoren auf Ähnlichkeit vergleichen", nl: "Woordvectoren vergelijken op gelijkenis" },
          { en: "Finding analogies in text documents", es: "Encontrar analogías en documentos de texto", de: "Analogien in Textdokumenten finden", nl: "Analogieën vinden in tekstdocumenten" },
          { en: "Creating vector representations for analogies", es: "Crear representaciones vectoriales para analogías", de: "Vektordarstellungen für Analogien erstellen", nl: "Vectorrepresentaties maken voor analogieën" }
        ],
        correct: 0,
        explanation: {
          en: "Vector analogy tasks test whether embeddings capture semantic relationships by performing vector arithmetic. Classic examples include 'Paris - France + Italy ≈ Rome' and 'swimming - swim + run ≈ running'.",
          es: "Las tareas de analogía vectorial prueban si las incrustaciones capturan relaciones semánticas realizando aritmética vectorial. Ejemplos clásicos incluyen 'París - Francia + Italia ≈ Roma' y 'nadando - nadar + correr ≈ corriendo'.",
          de: "Vektoranalogie-Aufgaben testen ob Einbettungen semantische Beziehungen erfassen durch Durchführung von Vektorarithmetik. Klassische Beispiele umfassen 'Paris - Frankreich + Italien ≈ Rom' und 'schwimmend - schwimmen + laufen ≈ laufend'.",
          nl: "Vectoranalogie-taken testen of embeddings semantische relaties vastleggen door vectorrekenkunde uit te voeren. Klassieke voorbeelden zijn 'Parijs - Frankrijk + Italië ≈ Rome' en 'zwemmend - zwemmen + rennen ≈ rennend'."
        }
      },
      {
        question: {
          en: "What is WordPiece tokenization?",
          es: "¿Qué es la tokenización WordPiece?",
          de: "Was ist WordPiece-Tokenisierung?",
          nl: "Wat is WordPiece-tokenisatie?"
        },
        options: [
          { en: "A subword tokenization method that splits words into frequently occurring subword pieces", es: "Un método de tokenización de subpalabras que divide palabras en piezas de subpalabras que ocurren frecuentemente", de: "Eine Subwort-Tokenisierungsmethode die Wörter in häufig vorkommende Subwort-Stücke aufteilt", nl: "Een subwoord-tokenisatiemethode die woorden splitst in frequent voorkomende subwoord-stukken" },
          { en: "Breaking words into equal-sized pieces", es: "Dividir palabras en piezas de tamaño igual", de: "Wörter in gleichgroße Stücke aufteilen", nl: "Woorden opdelen in gelijk grote stukken" },
          { en: "Tokenizing only the beginning of words", es: "Tokenizar solo el comienzo de las palabras", de: "Nur den Anfang von Wörtern tokenisieren", nl: "Alleen het begin van woorden tokeniseren" },
          { en: "A word counting algorithm", es: "Un algoritmo de conteo de palabras", de: "Ein Wortzählalgorithmus", nl: "Een woordtelalgoritme" }
        ],
        correct: 0,
        explanation: {
          en: "WordPiece is used by BERT and similar models. It builds subword vocabulary by choosing pieces that maximize likelihood of training data, using ## prefix for non-initial subwords (e.g., 'playing' → 'play' + '##ing').",
          es: "WordPiece es usado por BERT y modelos similares. Construye vocabulario de subpalabras eligiendo piezas que maximizan la probabilidad de datos de entrenamiento, usando prefijo ## para subpalabras no iniciales (ej., 'playing' → 'play' + '##ing').",
          de: "WordPiece wird von BERT und ähnlichen Modellen verwendet. Es baut Subwort-Vokabular durch Auswahl von Stücken die Wahrscheinlichkeit von Trainingsdaten maximieren, verwendet ## Präfix für nicht-initiale Subwörter (z.B. 'playing' → 'play' + '##ing').",
          nl: "WordPiece wordt gebruikt door BERT en vergelijkbare modellen. Het bouwt subwoord-vocabulaire door stukken te kiezen die waarschijnlijkheid van trainingsdata maximaliseren, gebruikt ## prefix voor niet-initiële subwoorden (bijv. 'playing' → 'play' + '##ing')."
        }
      },
      {
        question: {
          en: "What is SentencePiece?",
          es: "¿Qué es SentencePiece?",
          de: "Was ist SentencePiece?",
          nl: "Wat is SentencePiece?"
        },
        options: [
          { en: "A language-independent tokenizer that treats text as raw character sequences", es: "Un tokenizador independiente del idioma que trata el texto como secuencias de caracteres sin procesar", de: "Ein sprachunabhängiger Tokenisierer der Text als rohe Zeichensequenzen behandelt", nl: "Een taalonafhankelijke tokenizer die tekst behandelt als ruwe karakterreeksen" },
          { en: "A sentence splitter for multiple languages", es: "Un divisor de oraciones para múltiples idiomas", de: "Ein Satztrenner für mehrere Sprachen", nl: "Een zinssplitser voor meerdere talen" },
          { en: "A tool for extracting sentence fragments", es: "Una herramienta para extraer fragmentos de oraciones", de: "Ein Werkzeug zum Extrahieren von Satzfragmenten", nl: "Een tool voor het extraheren van zinfragmenten" },
          { en: "A sentence completion algorithm", es: "Un algoritmo de completación de oraciones", de: "Ein Satzvervollständigungsalgorithmus", nl: "Een zinsvoltooiingsalgoritme" }
        ],
        correct: 0,
        explanation: {
          en: "SentencePiece treats input as raw character streams without pre-tokenization, making it fully language-agnostic. It's used in models like T5 and supports both BPE and unigram tokenization algorithms.",
          es: "SentencePiece trata la entrada como flujos de caracteres sin procesar sin pre-tokenización, haciéndolo completamente independiente del idioma. Se usa en modelos como T5 y soporta algoritmos de tokenización tanto BPE como unigrama.",
          de: "SentencePiece behandelt Eingabe als rohe Zeichenströme ohne Vor-Tokenisierung, macht es vollständig sprachagnostisch. Es wird in Modellen wie T5 verwendet und unterstützt sowohl BPE- als auch Unigramm-Tokenisierungsalgorithmen.",
          nl: "SentencePiece behandelt input als ruwe karakterstromen zonder pre-tokenisatie, waardoor het volledig taalonafhankelijk is. Het wordt gebruikt in modellen zoals T5 en ondersteunt zowel BPE- als unigram-tokenisatiealgoritmes."
        }
      },
      {
        question: {
          en: "What is dependency parsing?",
          es: "¿Qué es el análisis de dependencias?",
          de: "Was ist Dependenzparsing?",
          nl: "Wat is dependency parsing?"
        },
        options: [
          { en: "Analyzing grammatical relationships between words to form a dependency tree", es: "Analizar relaciones gramaticales entre palabras para formar un árbol de dependencias", de: "Grammatische Beziehungen zwischen Wörtern analysieren um einen Dependenzbaum zu bilden", nl: "Grammaticale relaties tussen woorden analyseren om een dependentieboom te vormen" },
          { en: "Finding which libraries a program depends on", es: "Encontrar de qué bibliotecas depende un programa", de: "Herausfinden von welchen Bibliotheken ein Programm abhängt", nl: "Vinden van welke bibliotheken een programma afhankelijk is" },
          { en: "Parsing only dependent clauses", es: "Analizar solo cláusulas dependientes", de: "Nur abhängige Sätze parsen", nl: "Alleen afhankelijke bijzinnen parsen" },
          { en: "Checking text dependencies in documents", es: "Verificar dependencias de texto en documentos", de: "Textabhängigkeiten in Dokumenten prüfen", nl: "Tekstafhankelijkheden in documenten controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Dependency parsing creates a tree structure showing how words depend on each other grammatically. For example, in 'The cat chased the mouse', 'chased' is the root, 'cat' depends on 'chased' as subject, and 'mouse' depends as object.",
          es: "El análisis de dependencias crea una estructura de árbol mostrando cómo las palabras dependen gramaticalmente unas de otras. Por ejemplo, en 'El gato persiguió el ratón', 'persiguió' es la raíz, 'gato' depende de 'persiguió' como sujeto, y 'ratón' depende como objeto.",
          de: "Dependenzparsing erstellt eine Baumstruktur die zeigt wie Wörter grammatisch voneinander abhängen. Zum Beispiel in 'Die Katze jagte die Maus' ist 'jagte' die Wurzel, 'Katze' hängt von 'jagte' als Subjekt ab, und 'Maus' hängt als Objekt ab.",
          nl: "Dependency parsing creëert een boomstructuur die laat zien hoe woorden grammaticaal van elkaar afhangen. Bijvoorbeeld in 'De kat achtervolgde de muis' is 'achtervolgde' de wortel, 'kat' hangt af van 'achtervolgde' als onderwerp, en 'muis' hangt af als voorwerp."
        }
      },
      {
        question: {
          en: "What is constituency parsing?",
          es: "¿Qué es el análisis de constituyentes?",
          de: "Was ist Konstituentenparsing?",
          nl: "Wat is constituency parsing?"
        },
        options: [
          { en: "Breaking sentences into nested phrase structures like noun phrases and verb phrases", es: "Dividir oraciones en estructuras de frases anidadas como frases nominales y frases verbales", de: "Sätze in verschachtelte Phrasenstrukturen wie Nominalphrasen und Verbalphrasen aufteilen", nl: "Zinnen opdelen in geneste zinsdeel-structuren zoals zelfstandig naamwoord groepen en werkwoordgroepen" },
          { en: "Parsing text from political constituencies", es: "Analizar texto de circunscripciones políticas", de: "Text aus politischen Wahlkreisen parsen", nl: "Tekst uit politieke kiesdistricten parsen" },
          { en: "Identifying sentence constituents only", es: "Identificar solo constituyentes de oraciones", de: "Nur Satzkonstituenten identifizieren", nl: "Alleen zinsconstituenten identificeren" },
          { en: "Parsing based on word frequency", es: "Analizar basado en frecuencia de palabras", de: "Parsen basierend auf Worthäufigkeit", nl: "Parsen gebaseerd op woordfrequentie" }
        ],
        correct: 0,
        explanation: {
          en: "Constituency parsing creates a hierarchical tree showing phrase structures. For example, 'The quick fox' forms a noun phrase (NP), with 'The' and 'quick' as constituents modifying 'fox'.",
          es: "El análisis de constituyentes crea un árbol jerárquico mostrando estructuras de frases. Por ejemplo, 'El zorro rápido' forma una frase nominal (FN), con 'El' y 'rápido' como constituyentes modificando 'zorro'.",
          de: "Konstituentenparsing erstellt einen hierarchischen Baum der Phrasenstrukturen zeigt. Zum Beispiel bildet 'Der schnelle Fuchs' eine Nominalphrase (NP), mit 'Der' und 'schnelle' als Konstituenten die 'Fuchs' modifizieren.",
          nl: "Constituency parsing creëert een hiërarchische boom die zinsdeel-structuren toont. Bijvoorbeeld 'De snelle vos' vormt een zelfstandig naamwoordgroep (NP), met 'De' en 'snelle' als constituenten die 'vos' modificeren."
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
          { en: "Identifying which words or phrases refer to the same entity in text", es: "Identificar qué palabras o frases se refieren a la misma entidad en el texto", de: "Identifizieren welche Wörter oder Phrasen sich auf dieselbe Entität im Text beziehen", nl: "Identificeren welke woorden of zinsdelen verwijzen naar dezelfde entiteit in tekst" },
          { en: "Resolving conflicts between references", es: "Resolver conflictos entre referencias", de: "Konflikte zwischen Referenzen lösen", nl: "Conflicten tussen referenties oplossen" },
          { en: "Finding core references in documents", es: "Encontrar referencias centrales en documentos", de: "Kernreferenzen in Dokumenten finden", nl: "Kernreferenties in documenten vinden" },
          { en: "Checking reference consistency", es: "Verificar consistencia de referencias", de: "Referenzkonsistenz prüfen", nl: "Referentieconsistentie controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Coreference resolution links pronouns and noun phrases to their antecedents. For example, in 'Mary went to the store. She bought milk.', the system identifies that 'She' refers to 'Mary'.",
          es: "La resolución de correferencia vincula pronombres y frases nominales a sus antecedentes. Por ejemplo, en 'María fue a la tienda. Ella compró leche.', el sistema identifica que 'Ella' se refiere a 'María'.",
          de: "Koreferenzauflösung verknüpft Pronomen und Nominalphrasen mit ihren Antezedenten. Zum Beispiel in 'Maria ging zum Laden. Sie kaufte Milch.', identifiziert das System dass 'Sie' sich auf 'Maria' bezieht.",
          nl: "Coreferentieresolutie koppelt voornaamwoorden en zelfstandig naamwoordgroepen aan hun antecedenten. Bijvoorbeeld in 'Maria ging naar de winkel. Zij kocht melk.', identificeert het systeem dat 'Zij' verwijst naar 'Maria'."
        }
      },
      {
        question: {
          en: "What is anaphora resolution?",
          es: "¿Qué es la resolución de anáfora?",
          de: "Was ist Anapherauflösung?",
          nl: "Wat is anafora-resolutie?"
        },
        options: [
          { en: "Identifying what a pronoun or referring expression points back to in text", es: "Identificar a qué señala un pronombre o expresión referencial en el texto", de: "Identifizieren worauf ein Pronomen oder verweisender Ausdruck im Text zurückverweist", nl: "Identificeren waarnaar een voornaamwoord of verwijzende uitdrukking terug wijst in tekst" },
          { en: "Resolving metaphors in text", es: "Resolver metáforas en texto", de: "Metaphern in Text auflösen", nl: "Metaforen in tekst oplossen" },
          { en: "Finding repeated phrases", es: "Encontrar frases repetidas", de: "Wiederholte Phrasen finden", nl: "Herhaalde zinsdelen vinden" },
          { en: "Analyzing sentence beginnings", es: "Analizar comienzos de oraciones", de: "Satzanfänge analysieren", nl: "Zinsbeginngen analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "Anaphora resolution is a specific type of coreference resolution focusing on backward-looking references. For example, in 'John loves his dog', 'his' is an anaphor referring back to 'John'.",
          es: "La resolución de anáfora es un tipo específico de resolución de correferencia enfocándose en referencias hacia atrás. Por ejemplo, en 'Juan ama a su perro', 'su' es una anáfora refiriéndose a 'Juan'.",
          de: "Anapherauflösung ist eine spezifische Art der Koreferenzauflösung die sich auf rückwärtsgerichtete Referenzen konzentriert. Zum Beispiel in 'Johannes liebt seinen Hund' ist 'seinen' eine Anapher die sich auf 'Johannes' bezieht.",
          nl: "Anafora-resolutie is een specifiek type coreferentieresolutie dat zich richt op achterwaarts verwijzende referenties. Bijvoorbeeld in 'Jan houdt van zijn hond' is 'zijn' een anafoor die terugverwijst naar 'Jan'."
        }
      },
      {
        question: {
          en: "What is semantic role labeling (SRL)?",
          es: "¿Qué es el etiquetado de roles semánticos (SRL)?",
          de: "Was ist semantisches Rollenlabeling (SRL)?",
          nl: "Wat is semantische rol-labeling (SRL)?"
        },
        options: [
          { en: "Identifying who did what to whom, when, where, and why in sentences", es: "Identificar quién hizo qué a quién, cuándo, dónde y por qué en oraciones", de: "Identifizieren wer was wem wann wo und warum in Sätzen getan hat", nl: "Identificeren wie wat met wie deed, wanneer, waar en waarom in zinnen" },
          { en: "Labeling words by semantic category only", es: "Etiquetar palabras solo por categoría semántica", de: "Wörter nur nach semantischer Kategorie beschriften", nl: "Woorden alleen labelen per semantische categorie" },
          { en: "Assigning roles to database tables", es: "Asignar roles a tablas de base de datos", de: "Datenbanktabellen Rollen zuweisen", nl: "Rollen toewijzen aan databasetabellen" },
          { en: "Creating semantic networks", es: "Crear redes semánticas", de: "Semantische Netzwerke erstellen", nl: "Semantische netwerken creëren" }
        ],
        correct: 0,
        explanation: {
          en: "SRL identifies semantic roles like Agent (who), Patient (what/whom), Location (where), Time (when). For example, in 'John ate pizza yesterday', John=Agent, pizza=Patient, yesterday=Time.",
          es: "SRL identifica roles semánticos como Agente (quién), Paciente (qué/quién), Ubicación (dónde), Tiempo (cuándo). Por ejemplo, en 'Juan comió pizza ayer', Juan=Agente, pizza=Paciente, ayer=Tiempo.",
          de: "SRL identifiziert semantische Rollen wie Agens (wer), Patiens (was/wen), Ort (wo), Zeit (wann). Zum Beispiel in 'Johannes aß Pizza gestern', Johannes=Agens, Pizza=Patiens, gestern=Zeit.",
          nl: "SRL identificeert semantische rollen zoals Agens (wie), Patiens (wat/wie), Locatie (waar), Tijd (wanneer). Bijvoorbeeld in 'Jan at pizza gisteren', Jan=Agens, pizza=Patiens, gisteren=Tijd."
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
          { en: "Automatically extracting structured information from unstructured text", es: "Extraer automáticamente información estructurada de texto no estructurado", de: "Automatisch strukturierte Informationen aus unstrukturiertem Text extrahieren", nl: "Automatisch gestructureerde informatie extraheren uit ongestructureerde tekst" },
          { en: "Extracting files from archives", es: "Extraer archivos de archivos comprimidos", de: "Dateien aus Archiven extrahieren", nl: "Bestanden uit archieven extraheren" },
          { en: "Getting information from databases", es: "Obtener información de bases de datos", de: "Informationen aus Datenbanken abrufen", nl: "Informatie ophalen uit databases" },
          { en: "Removing information from text", es: "Eliminar información del texto", de: "Informationen aus Text entfernen", nl: "Informatie uit tekst verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Information extraction identifies and extracts specific pieces of information like entities, relationships, and events from unstructured text to populate structured databases or knowledge bases.",
          es: "La extracción de información identifica y extrae piezas específicas de información como entidades, relaciones y eventos de texto no estructurado para poblar bases de datos estructuradas o bases de conocimiento.",
          de: "Informationsextraktion identifiziert und extrahiert spezifische Informationsteile wie Entitäten, Beziehungen und Ereignisse aus unstrukturiertem Text um strukturierte Datenbanken oder Wissensbasen zu befüllen.",
          nl: "Informatie-extractie identificeert en extraheert specifieke stukjes informatie zoals entiteiten, relaties en gebeurtenissen uit ongestructureerde tekst om gestructureerde databases of kennisbanken te vullen."
        }
      },
      {
        question: {
          en: "What is relation extraction?",
          es: "¿Qué es la extracción de relaciones?",
          de: "Was ist Relationsextraktion?",
          nl: "Wat is relatie-extractie?"
        },
        options: [
          { en: "Identifying and classifying semantic relationships between entities in text", es: "Identificar y clasificar relaciones semánticas entre entidades en texto", de: "Semantische Beziehungen zwischen Entitäten im Text identifizieren und klassifizieren", nl: "Semantische relaties tussen entiteiten in tekst identificeren en classificeren" },
          { en: "Extracting mathematical relations from formulas", es: "Extraer relaciones matemáticas de fórmulas", de: "Mathematische Beziehungen aus Formeln extrahieren", nl: "Wiskundige relaties uit formules extraheren" },
          { en: "Finding family relationships in genealogy", es: "Encontrar relaciones familiares en genealogía", de: "Familienbeziehungen in Genealogie finden", nl: "Familierelaties vinden in genealogie" },
          { en: "Removing relationships from databases", es: "Eliminar relaciones de bases de datos", de: "Beziehungen aus Datenbanken entfernen", nl: "Relaties uit databases verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Relation extraction identifies relationships between entities, such as 'Apple acquired Siri in 2010' extracting the relationship (acquired, Apple, Siri, 2010). This builds knowledge graphs and fact databases.",
          es: "La extracción de relaciones identifica relaciones entre entidades, como 'Apple adquirió Siri en 2010' extrayendo la relación (adquirió, Apple, Siri, 2010). Esto construye grafos de conocimiento y bases de datos de hechos.",
          de: "Relationsextraktion identifiziert Beziehungen zwischen Entitäten, wie 'Apple kaufte Siri 2010' extrahiert die Beziehung (kaufte, Apple, Siri, 2010). Dies baut Wissensgraphen und Faktendatenbanken auf.",
          nl: "Relatie-extractie identificeert relaties tussen entiteiten, zoals 'Apple verwierf Siri in 2010' extraheert de relatie (verwierf, Apple, Siri, 2010). Dit bouwt kennisgrafen en feitendatabases op."
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
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
