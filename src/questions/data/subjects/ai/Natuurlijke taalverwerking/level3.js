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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
