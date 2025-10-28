// Natural Language Processing Quiz - Level 4: Language Models and Classification
(function() {
  const level4 = {
    name: {
      en: "Language Models",
      es: "Modelos de Lenguaje",
      de: "Sprachmodelle",
      nl: "Taalmodellen"
    },
    questions: [
      {
        question: {
          en: "What is a language model in NLP?",
          es: "¿Qué es un modelo de lenguaje en PLN?",
          de: "Was ist ein Sprachmodell in NLP?",
          nl: "Wat is een taalmodel in NLP?"
        },
        options: [
          { en: "A statistical model that predicts the probability of word sequences", es: "Un modelo estadístico que predice la probabilidad de secuencias de palabras", de: "Ein statistisches Modell das die Wahrscheinlichkeit von Wortsequenzen vorhersagt", nl: "Een statistisch model dat de waarschijnlijkheid van woordsequenties voorspelt" },
          { en: "A model for translating languages", es: "Un modelo para traducir idiomas", de: "Ein Modell zum Übersetzen von Sprachen", nl: "Een model voor het vertalen van talen" },
          { en: "A grammar checking tool", es: "Una herramienta de verificación gramatical", de: "Ein Grammatikprüfungstool", nl: "Een grammaticacontroletool" },
          { en: "A speech recognition system", es: "Un sistema de reconocimiento de voz", de: "Ein Spracherkennungssystem", nl: "Een spraakherkenningssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "Language models learn the statistical properties of language to predict the likelihood of word sequences, forming the basis for many NLP applications.",
          es: "Los modelos de lenguaje aprenden las propiedades estadísticas del lenguaje para predecir la probabilidad de secuencias de palabras, formando la base para muchas aplicaciones de PLN.",
          de: "Sprachmodelle lernen die statistischen Eigenschaften der Sprache um die Wahrscheinlichkeit von Wortsequenzen vorherzusagen, bilden die Grundlage für viele NLP-Anwendungen.",
          nl: "Taalmodellen leren de statistische eigenschappen van taal om de waarschijnlijkheid van woordsequenties te voorspellen, vormen de basis voor veel NLP-toepassingen."
        }
      },
      {
        question: {
          en: "What is text classification?",
          es: "¿Qué es la clasificación de texto?",
          de: "Was ist Textklassifikation?",
          nl: "Wat is tekstclassificatie?"
        },
        options: [
          { en: "Automatically categorizing text documents into predefined classes", es: "Categorizar automáticamente documentos de texto en clases predefinidas", de: "Automatisches Kategorisieren von Textdokumenten in vordefinierte Klassen", nl: "Automatisch categoriseren van tekstdocumenten in voorgedefinieerde klassen" },
          { en: "Organizing texts alphabetically", es: "Organizar textos alfabéticamente", de: "Texte alphabetisch ordnen", nl: "Teksten alfabetisch ordenen" },
          { en: "Grading text quality", es: "Calificar calidad del texto", de: "Textqualität bewerten", nl: "Tekstkwaliteit beoordelen" },
          { en: "Counting text characters", es: "Contar caracteres del texto", de: "Textzeichen zählen", nl: "Tekstkarakters tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Text classification assigns documents to categories like spam/ham, positive/negative sentiment, or topic categories using machine learning algorithms.",
          es: "La clasificación de texto asigna documentos a categorías como spam/ham, sentimiento positivo/negativo, o categorías temáticas usando algoritmos de aprendizaje automático.",
          de: "Textklassifikation weist Dokumente Kategorien wie Spam/Ham, positive/negative Stimmung oder Themenkategorien mit maschinellen Lernalgorithmen zu.",
          nl: "Tekstclassificatie wijst documenten toe aan categorieën zoals spam/ham, positief/negatief sentiment, of onderwerpcategorieën met behulp van machine learning algoritmes."
        }
      },
      {
        question: {
          en: "What is the difference between supervised and unsupervised learning in NLP?",
          es: "¿Cuál es la diferencia entre aprendizaje supervisado y no supervisado en PLN?",
          de: "Was ist der Unterschied zwischen überwachtem und unüberwachtem Lernen in NLP?",
          nl: "Wat is het verschil tussen gesuperviseerd en ongesuperviseerd leren in NLP?"
        },
        options: [
          { en: "Supervised uses labeled data, unsupervised finds patterns in unlabeled data", es: "Supervisado usa datos etiquetados, no supervisado encuentra patrones en datos no etiquetados", de: "Überwacht verwendet beschriftete Daten, unüberwacht findet Muster in unbeschrifteten Daten", nl: "Gesuperviseerd gebruikt gelabelde data, ongesuperviseerd vindt patronen in ongelabelde data" },
          { en: "Supervised is faster than unsupervised", es: "Supervisado es más rápido que no supervisado", de: "Überwacht ist schneller als unüberwacht", nl: "Gesuperviseerd is sneller dan ongesuperviseerd" },
          { en: "Unsupervised requires more computational power", es: "No supervisado requiere más poder computacional", de: "Unüberwacht benötigt mehr Rechenleistung", nl: "Ongesuperviseerd vereist meer rekenkracht" },
          { en: "Supervised only works with numbers", es: "Supervisado solo funciona con números", de: "Überwacht funktioniert nur mit Zahlen", nl: "Gesuperviseerd werkt alleen met getallen" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised learning trains on labeled examples to predict outcomes, while unsupervised learning discovers hidden patterns and structures in data without labels.",
          es: "El aprendizaje supervisado entrena en ejemplos etiquetados para predecir resultados, mientras el aprendizaje no supervisado descubre patrones y estructuras ocultas en datos sin etiquetas.",
          de: "Überwachtes Lernen trainiert auf beschrifteten Beispielen um Ergebnisse vorherzusagen, während unüberwachtes Lernen versteckte Muster und Strukturen in Daten ohne Beschriftungen entdeckt.",
          nl: "Gesuperviseerd leren traint op gelabelde voorbeelden om uitkomsten te voorspellen, terwijl ongesuperviseerd leren verborgen patronen en structuren in data zonder labels ontdekt."
        }
      },
      {
        question: {
          en: "What is topic modeling?",
          es: "¿Qué es el modelado de temas?",
          de: "Was ist Themenmodellierung?",
          nl: "Wat is onderwerp modellering?"
        },
        options: [
          { en: "An unsupervised technique to discover hidden topics in text collections", es: "Una técnica no supervisada para descubrir temas ocultos en colecciones de texto", de: "Eine unüberwachte Technik um versteckte Themen in Textsammlungen zu entdecken", nl: "Een ongesuperviseerde techniek om verborgen onderwerpen in tekstcollecties te ontdekken" },
          { en: "Creating models of fashion topics", es: "Crear modelos de temas de moda", de: "Modelle von Modethemen erstellen", nl: "Modellen van modeonderwerpen maken" },
          { en: "Modeling the structure of topics", es: "Modelar la estructura de temas", de: "Die Struktur von Themen modellieren", nl: "De structuur van onderwerpen modelleren" },
          { en: "Predicting trending topics", es: "Predecir temas de tendencia", de: "Trendthemen vorhersagen", nl: "Trending onderwerpen voorspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Topic modeling algorithms like LDA (Latent Dirichlet Allocation) automatically identify abstract topics within document collections based on word co-occurrence patterns.",
          es: "Los algoritmos de modelado de temas como LDA (Latent Dirichlet Allocation) identifican automáticamente temas abstractos dentro de colecciones de documentos basándose en patrones de co-ocurrencia de palabras.",
          de: "Themenmodellierungsalgorithmen wie LDA (Latent Dirichlet Allocation) identifizieren automatisch abstrakte Themen in Dokumentsammlungen basierend auf Wort-Kovorkommensmustern.",
          nl: "Onderwerp modelleringsalgoritmes zoals LDA (Latent Dirichlet Allocation) identificeren automatisch abstracte onderwerpen in documentverzamelingen gebaseerd op woord co-voorkomenspatronen."
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
          { en: "Extracting files from compressed archives", es: "Extraer archivos de archivos comprimidos", de: "Dateien aus komprimierten Archiven extrahieren", nl: "Bestanden extraheren uit gecomprimeerde archieven" },
          { en: "Getting information from databases", es: "Obtener información de bases de datos", de: "Informationen aus Datenbanken abrufen", nl: "Informatie ophalen uit databases" },
          { en: "Removing unwanted information", es: "Eliminar información no deseada", de: "Unerwünschte Informationen entfernen", nl: "Ongewenste informatie verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Information extraction converts unstructured text into structured data by identifying entities, relationships, and events, enabling automated processing and analysis.",
          es: "La extracción de información convierte texto no estructurado en datos estructurados identificando entidades, relaciones y eventos, permitiendo procesamiento y análisis automatizado.",
          de: "Informationsextraktion wandelt unstrukturierten Text in strukturierte Daten um durch Identifizierung von Entitäten, Beziehungen und Ereignissen, ermöglicht automatisierte Verarbeitung und Analyse.",
          nl: "Informatie-extractie converteert ongestructureerde tekst naar gestructureerde data door entiteiten, relaties en gebeurtenissen te identificeren, maakt geautomatiseerde verwerking en analyse mogelijk."
        }
      },
      {
        question: {
          en: "What is Part-of-Speech (POS) tagging?",
          es: "¿Qué es el etiquetado de Parte del Discurso (POS)?",
          de: "Was ist Part-of-Speech (POS) Tagging?",
          nl: "Wat is Part-of-Speech (POS) tagging?"
        },
        options: [
          { en: "Assigning grammatical categories like noun, verb, adjective to each word in a sentence", es: "Asignar categorías gramaticales como sustantivo, verbo, adjetivo a cada palabra en una oración", de: "Zuweisen grammatischer Kategorien wie Substantiv, Verb, Adjektiv zu jedem Wort in einem Satz", nl: "Grammaticale categorieën zoals zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord toewijzen aan elk woord in een zin" },
          { en: "Tagging sentences with positive or negative sentiment", es: "Etiquetar oraciones con sentimiento positivo o negativo", de: "Sätze mit positiver oder negativer Stimmung markieren", nl: "Zinnen taggen met positief of negatief sentiment" },
          { en: "Marking important words in a text", es: "Marcar palabras importantes en un texto", de: "Wichtige Wörter in einem Text markieren", nl: "Belangrijke woorden in een tekst markeren" },
          { en: "Adding metadata to documents", es: "Agregar metadatos a documentos", de: "Metadaten zu Dokumenten hinzufügen", nl: "Metadata toevoegen aan documenten" }
        ],
        correct: 0,
        explanation: {
          en: "POS tagging identifies the grammatical role of each word in context, which is essential for parsing, understanding sentence structure, and many downstream NLP tasks.",
          es: "El etiquetado POS identifica el rol gramatical de cada palabra en contexto, lo cual es esencial para análisis sintáctico, entender estructura de oraciones y muchas tareas posteriores de PLN.",
          de: "POS-Tagging identifiziert die grammatische Rolle jedes Wortes im Kontext, was für das Parsing, Verstehen der Satzstruktur und viele nachgelagerte NLP-Aufgaben wesentlich ist.",
          nl: "POS tagging identificeert de grammaticale rol van elk woord in context, wat essentieel is voor parsing, begrijpen van zinsstructuur en veel downstream NLP-taken."
        }
      },
      {
        question: {
          en: "What is syntactic parsing?",
          es: "¿Qué es el análisis sintáctico?",
          de: "Was ist syntaktisches Parsing?",
          nl: "Wat is syntactisch parsing?"
        },
        options: [
          { en: "Analyzing the grammatical structure of sentences to build parse trees showing relationships between words", es: "Analizar la estructura gramatical de oraciones para construir árboles de análisis mostrando relaciones entre palabras", de: "Analysieren der grammatischen Struktur von Sätzen um Parse-Bäume zu erstellen die Beziehungen zwischen Wörtern zeigen", nl: "Analyseren van de grammaticale structuur van zinnen om parsebomen te bouwen die relaties tussen woorden tonen" },
          { en: "Breaking text into individual words", es: "Dividir texto en palabras individuales", de: "Text in einzelne Wörter aufteilen", nl: "Tekst opsplitsen in individuele woorden" },
          { en: "Converting speech to text", es: "Convertir voz a texto", de: "Sprache in Text umwandeln", nl: "Spraak omzetten naar tekst" },
          { en: "Checking spelling and grammar", es: "Verificar ortografía y gramática", de: "Rechtschreibung und Grammatik prüfen", nl: "Spelling en grammatica controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Syntactic parsing creates hierarchical structures (parse trees) that represent how words combine according to grammar rules, revealing syntactic relationships and sentence meaning.",
          es: "El análisis sintáctico crea estructuras jerárquicas (árboles de análisis) que representan cómo las palabras se combinan según reglas gramaticales, revelando relaciones sintácticas y significado de oraciones.",
          de: "Syntaktisches Parsing erstellt hierarchische Strukturen (Parse-Bäume) die darstellen wie Wörter sich nach Grammatikregeln kombinieren, enthüllt syntaktische Beziehungen und Satzbedeutung.",
          nl: "Syntactisch parsing creëert hiërarchische structuren (parsebomen) die weergeven hoe woorden combineren volgens grammaticaregels, onthult syntactische relaties en zinsbetekenis."
        }
      },
      {
        question: {
          en: "What is the difference between constituency parsing and dependency parsing?",
          es: "¿Cuál es la diferencia entre análisis de constituyentes y análisis de dependencias?",
          de: "Was ist der Unterschied zwischen Constituency-Parsing und Dependency-Parsing?",
          nl: "Wat is het verschil tussen constituency parsing en dependency parsing?"
        },
        options: [
          { en: "Constituency groups words into phrases, dependency shows direct relationships between individual words", es: "Constituyentes agrupa palabras en frases, dependencias muestra relaciones directas entre palabras individuales", de: "Constituency gruppiert Wörter in Phrasen, Dependency zeigt direkte Beziehungen zwischen einzelnen Wörtern", nl: "Constituency groepeert woorden in zinsdelen, dependency toont directe relaties tussen individuele woorden" },
          { en: "Constituency is faster than dependency parsing", es: "Constituyentes es más rápido que análisis de dependencias", de: "Constituency ist schneller als Dependency-Parsing", nl: "Constituency is sneller dan dependency parsing" },
          { en: "Dependency parsing only works with English", es: "Análisis de dependencias solo funciona con inglés", de: "Dependency-Parsing funktioniert nur mit Englisch", nl: "Dependency parsing werkt alleen met Engels" },
          { en: "Constituency parsing requires more memory", es: "Análisis de constituyentes requiere más memoria", de: "Constituency-Parsing benötigt mehr Speicher", nl: "Constituency parsing vereist meer geheugen" }
        ],
        correct: 0,
        explanation: {
          en: "Constituency parsing creates tree structures with nested phrases (noun phrases, verb phrases), while dependency parsing creates directed graphs showing which words depend on others as head-modifier relationships.",
          es: "El análisis de constituyentes crea estructuras de árbol con frases anidadas (frases nominales, frases verbales), mientras el análisis de dependencias crea grafos dirigidos mostrando qué palabras dependen de otras como relaciones núcleo-modificador.",
          de: "Constituency-Parsing erstellt Baumstrukturen mit verschachtelten Phrasen (Nominalphrasen, Verbalphrasen), während Dependency-Parsing gerichtete Graphen erstellt die zeigen welche Wörter von anderen als Kopf-Modifikator-Beziehungen abhängen.",
          nl: "Constituency parsing creëert boomstructuren met geneste zinsdelen (naamwoordgroepen, werkwoordgroepen), terwijl dependency parsing gerichte grafen creëert die tonen welke woorden afhankelijk zijn van anderen als hoofd-modifier relaties."
        }
      },
      {
        question: {
          en: "What is a bigram language model?",
          es: "¿Qué es un modelo de lenguaje de bigramas?",
          de: "Was ist ein Bigramm-Sprachmodell?",
          nl: "Wat is een bigramtaalmodel?"
        },
        options: [
          { en: "A model that predicts the next word based only on the previous word using P(wi|wi-1)", es: "Un modelo que predice la siguiente palabra basándose solo en la palabra anterior usando P(wi|wi-1)", de: "Ein Modell das das nächste Wort nur basierend auf dem vorherigen Wort vorhersagt mit P(wi|wi-1)", nl: "Een model dat het volgende woord voorspelt gebaseerd op alleen het vorige woord met P(wi|wi-1)" },
          { en: "A model that uses two neural networks", es: "Un modelo que usa dos redes neuronales", de: "Ein Modell das zwei neuronale Netzwerke verwendet", nl: "Een model dat twee neurale netwerken gebruikt" },
          { en: "A model trained on two languages", es: "Un modelo entrenado en dos idiomas", de: "Ein Modell das auf zwei Sprachen trainiert ist", nl: "Een model getraind op twee talen" },
          { en: "A model that processes two words at once", es: "Un modelo que procesa dos palabras a la vez", de: "Ein Modell das zwei Wörter auf einmal verarbeitet", nl: "Een model dat twee woorden tegelijkertijd verwerkt" }
        ],
        correct: 0,
        explanation: {
          en: "Bigram models use the Markov assumption that the probability of a word depends only on the immediately preceding word, making them simple but effective for basic language modeling.",
          es: "Los modelos de bigramas usan la suposición de Markov que la probabilidad de una palabra depende solo de la palabra inmediatamente anterior, haciéndolos simples pero efectivos para modelado básico de lenguaje.",
          de: "Bigramm-Modelle verwenden die Markov-Annahme dass die Wahrscheinlichkeit eines Wortes nur vom unmittelbar vorhergehenden Wort abhängt, macht sie einfach aber effektiv für grundlegende Sprachmodellierung.",
          nl: "Bigram modellen gebruiken de Markov aanname dat de waarschijnlijkheid van een woord alleen afhangt van het direct voorafgaande woord, maakt ze eenvoudig maar effectief voor basis taalmodellering."
        }
      },
      {
        question: {
          en: "What is smoothing in language models?",
          es: "¿Qué es el suavizado en modelos de lenguaje?",
          de: "Was ist Glättung in Sprachmodellen?",
          nl: "Wat is smoothing in taalmodellen?"
        },
        options: [
          { en: "Techniques to handle zero probabilities for unseen n-grams by redistributing probability mass", es: "Técnicas para manejar probabilidades cero para n-gramas no vistos redistribuyendo masa de probabilidad", de: "Techniken um Null-Wahrscheinlichkeiten für ungesehene N-Gramme zu handhaben durch Umverteilung der Wahrscheinlichkeitsmasse", nl: "Technieken om nul waarschijnlijkheden voor ongeziene n-grammen te behandelen door waarschijnlijkheidsmassa te herverdelen" },
          { en: "Making language models run faster", es: "Hacer que los modelos de lenguaje funcionen más rápido", de: "Sprachmodelle schneller laufen lassen", nl: "Taalmodellen sneller laten draaien" },
          { en: "Removing noise from text data", es: "Eliminar ruido de datos de texto", de: "Rauschen aus Textdaten entfernen", nl: "Ruis verwijderen uit tekstgegevens" },
          { en: "Simplifying complex sentences", es: "Simplificar oraciones complejas", de: "Komplexe Sätze vereinfachen", nl: "Complexe zinnen vereenvoudigen" }
        ],
        correct: 0,
        explanation: {
          en: "Smoothing techniques like Laplace smoothing, Good-Turing, and Kneser-Ney prevent zero probabilities that would break language models when encountering unseen word sequences during testing.",
          es: "Las técnicas de suavizado como suavizado de Laplace, Good-Turing, y Kneser-Ney previenen probabilidades cero que romperían modelos de lenguaje al encontrar secuencias de palabras no vistas durante pruebas.",
          de: "Glättungstechniken wie Laplace-Glättung, Good-Turing und Kneser-Ney verhindern Null-Wahrscheinlichkeiten die Sprachmodelle brechen würden beim Antreffen ungesehener Wortsequenzen während des Testens.",
          nl: "Smoothing technieken zoals Laplace smoothing, Good-Turing, en Kneser-Ney voorkomen nul waarschijnlijkheden die taalmodellen zouden breken bij het tegenkomen van ongeziene woordsequenties tijdens het testen."
        }
      },
      {
        question: {
          en: "What is context-free grammar (CFG)?",
          es: "¿Qué es la gramática libre de contexto (CFG)?",
          de: "Was ist kontextfreie Grammatik (CFG)?",
          nl: "Wat is contextvrije grammatica (CFG)?"
        },
        options: [
          { en: "A formal grammar where production rules can be applied regardless of context, used for syntactic parsing", es: "Una gramática formal donde las reglas de producción pueden aplicarse independientemente del contexto, usada para análisis sintáctico", de: "Eine formale Grammatik wo Produktionsregeln unabhängig vom Kontext angewendet werden können, verwendet für syntaktisches Parsing", nl: "Een formele grammatica waarbij productieregels kunnen worden toegepast ongeacht de context, gebruikt voor syntactisch parsing" },
          { en: "Grammar rules that don't require any context", es: "Reglas gramaticales que no requieren ningún contexto", de: "Grammatikregeln die keinen Kontext benötigen", nl: "Grammaticaregels die geen context vereisen" },
          { en: "A grammar for informal text", es: "Una gramática para texto informal", de: "Eine Grammatik für informellen Text", nl: "Een grammatica voor informele tekst" },
          { en: "Grammar without punctuation rules", es: "Gramática sin reglas de puntuación", de: "Grammatik ohne Interpunktionsregeln", nl: "Grammatica zonder interpunctieregels" }
        ],
        correct: 0,
        explanation: {
          en: "CFG defines syntax rules where the left side of each rule contains only a single non-terminal, allowing recursive structures and forming the basis for many parsing algorithms.",
          es: "CFG define reglas sintácticas donde el lado izquierdo de cada regla contiene solo un no terminal, permitiendo estructuras recursivas y formando la base para muchos algoritmos de análisis.",
          de: "CFG definiert Syntaxregeln wo die linke Seite jeder Regel nur ein einzelnes Nicht-Terminal enthält, erlaubt rekursive Strukturen und bildet die Basis für viele Parsing-Algorithmen.",
          nl: "CFG definieert syntaxregels waarbij de linkerkant van elke regel slechts een enkele niet-terminal bevat, staat recursieve structuren toe en vormt de basis voor veel parsing algoritmen."
        }
      },
      {
        question: {
          en: "What is the CYK (Cocke-Younger-Kasami) algorithm?",
          es: "¿Qué es el algoritmo CYK (Cocke-Younger-Kasami)?",
          de: "Was ist der CYK (Cocke-Younger-Kasami) Algorithmus?",
          nl: "Wat is het CYK (Cocke-Younger-Kasami) algoritme?"
        },
        options: [
          { en: "A dynamic programming algorithm for parsing sentences with context-free grammars in Chomsky Normal Form", es: "Un algoritmo de programación dinámica para analizar oraciones con gramáticas libres de contexto en Forma Normal de Chomsky", de: "Ein dynamischer Programmierungsalgorithmus zum Parsen von Sätzen mit kontextfreien Grammatiken in Chomsky-Normalform", nl: "Een dynamisch programmeeralgoritme voor het parsen van zinnen met contextvrije grammatica's in Chomsky Normale Vorm" },
          { en: "An algorithm for word segmentation", es: "Un algoritmo para segmentación de palabras", de: "Ein Algorithmus für Wortsegmentierung", nl: "Een algoritme voor woordsegmentatie" },
          { en: "A method for language detection", es: "Un método para detección de idioma", de: "Eine Methode zur Spracherkennung", nl: "Een methode voor taaldetectie" },
          { en: "A technique for spell checking", es: "Una técnica para corrección ortográfica", de: "Eine Technik für Rechtschreibprüfung", nl: "Een techniek voor spellingcontrole" }
        ],
        correct: 0,
        explanation: {
          en: "CYK is a bottom-up parsing algorithm that fills a triangular table to determine if a sentence can be generated by a given CFG, with O(n³) time complexity.",
          es: "CYK es un algoritmo de análisis de abajo hacia arriba que llena una tabla triangular para determinar si una oración puede ser generada por una CFG dada, con complejidad temporal O(n³).",
          de: "CYK ist ein Bottom-up-Parsing-Algorithmus der eine dreieckige Tabelle füllt um zu bestimmen ob ein Satz von einer gegebenen CFG generiert werden kann, mit O(n³) Zeitkomplexität.",
          nl: "CYK is een bottom-up parsing algoritme dat een driehoekige tabel vult om te bepalen of een zin kan worden gegenereerd door een gegeven CFG, met O(n³) tijdcomplexiteit."
        }
      },
      {
        question: {
          en: "What is chunking in NLP?",
          es: "¿Qué es el chunking en PLN?",
          de: "Was ist Chunking in NLP?",
          nl: "Wat is chunking in NLP?"
        },
        options: [
          { en: "Identifying and grouping consecutive words that form meaningful phrases like noun phrases or verb phrases", es: "Identificar y agrupar palabras consecutivas que forman frases significativas como frases nominales o frases verbales", de: "Identifizieren und Gruppieren aufeinanderfolgender Wörter die bedeutungsvolle Phrasen wie Nominalphrasen oder Verbalphrasen bilden", nl: "Identificeren en groeperen van opeenvolgende woorden die betekenisvolle zinsdelen vormen zoals naamwoordgroepen of werkwoordgroepen" },
          { en: "Dividing text into equal-sized pieces", es: "Dividir texto en piezas de igual tamaño", de: "Text in gleich große Stücke teilen", nl: "Tekst verdelen in gelijkmatige stukken" },
          { en: "Removing unnecessary words", es: "Eliminar palabras innecesarias", de: "Unnötige Wörter entfernen", nl: "Onnodige woorden verwijderen" },
          { en: "Breaking long sentences into shorter ones", es: "Dividir oraciones largas en más cortas", de: "Lange Sätze in kürzere aufteilen", nl: "Lange zinnen opsplitsen in kortere" }
        ],
        correct: 0,
        explanation: {
          en: "Chunking (shallow parsing) identifies syntactic units without building full parse trees, focusing on extracting meaningful phrases that can be used for further analysis.",
          es: "El chunking (análisis superficial) identifica unidades sintácticas sin construir árboles de análisis completos, enfocándose en extraer frases significativas que pueden usarse para análisis posterior.",
          de: "Chunking (oberflächliches Parsing) identifiziert syntaktische Einheiten ohne vollständige Parse-Bäume zu erstellen, konzentriert sich auf das Extrahieren bedeutungsvoller Phrasen die für weitere Analyse verwendet werden können.",
          nl: "Chunking (oppervlakkig parsing) identificeert syntactische eenheden zonder volledige parsebomen te bouwen, richt zich op het extraheren van betekenisvolle zinsdelen die kunnen worden gebruikt voor verdere analyse."
        }
      },
      {
        question: {
          en: "What is perplexity in language models?",
          es: "¿Qué es la perplejidad en modelos de lenguaje?",
          de: "Was ist Perplexität in Sprachmodellen?",
          nl: "Wat is perplexiteit in taalmodellen?"
        },
        options: [
          { en: "A measure of how well a language model predicts text, with lower perplexity indicating better performance", es: "Una medida de qué tan bien un modelo de lenguaje predice texto, con menor perplejidad indicando mejor rendimiento", de: "Ein Maß dafür wie gut ein Sprachmodell Text vorhersagt, mit niedrigerer Perplexität die bessere Leistung anzeigt", nl: "Een maat voor hoe goed een taalmodel tekst voorspelt, met lagere perplexiteit die betere prestaties aangeeft" },
          { en: "The complexity of the training data", es: "La complejidad de los datos de entrenamiento", de: "Die Komplexität der Trainingsdaten", nl: "De complexiteit van de trainingsgegevens" },
          { en: "The confusion in the model's output", es: "La confusión en la salida del modelo", de: "Die Verwirrung in der Modellausgabe", nl: "De verwarring in de modeluitvoer" },
          { en: "The number of parameters in the model", es: "El número de parámetros en el modelo", de: "Die Anzahl der Parameter im Modell", nl: "Het aantal parameters in het model" }
        ],
        correct: 0,
        explanation: {
          en: "Perplexity measures how surprised a language model is by new text. It's calculated as the exponential of cross-entropy, with values closer to 1 indicating perfect prediction.",
          es: "La perplejidad mide qué tan sorprendido está un modelo de lenguaje por texto nuevo. Se calcula como el exponencial de entropía cruzada, con valores más cercanos a 1 indicando predicción perfecta.",
          de: "Perplexität misst wie überrascht ein Sprachmodell von neuem Text ist. Sie wird als Exponential der Kreuzentropie berechnet, mit Werten näher zu 1 die perfekte Vorhersage anzeigen.",
          nl: "Perplexiteit meet hoe verrast een taalmodel is door nieuwe tekst. Het wordt berekend als de exponentiële van kruisentropie, met waarden dichter bij 1 die perfecte voorspelling aangeven."
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
          { en: "Identifying and classifying named entities like persons, organizations, locations in text", es: "Identificar y clasificar entidades nombradas como personas, organizaciones, ubicaciones en texto", de: "Identifizieren und Klassifizieren benannter Entitäten wie Personen, Organisationen, Orte in Text", nl: "Identificeren en classificeren van genoemde entiteiten zoals personen, organisaties, locaties in tekst" },
          { en: "Recognizing the author of a text", es: "Reconocer el autor de un texto", de: "Den Autor eines Textes erkennen", nl: "De auteur van een tekst herkennen" },
          { en: "Finding proper names in databases", es: "Encontrar nombres propios en bases de datos", de: "Eigennamen in Datenbanken finden", nl: "Eigennamen vinden in databases" },
          { en: "Identifying fictional characters", es: "Identificar personajes ficticios", de: "Fiktive Charaktere identifizieren", nl: "Fictieve personages identificeren" }
        ],
        correct: 0,
        explanation: {
          en: "NER is a subtask of information extraction that locates and classifies named entities into predefined categories such as PERSON, ORGANIZATION, LOCATION, DATE, etc.",
          es: "NER es una subtarea de extracción de información que localiza y clasifica entidades nombradas en categorías predefinidas como PERSONA, ORGANIZACIÓN, UBICACIÓN, FECHA, etc.",
          de: "NER ist eine Teilaufgabe der Informationsextraktion die benannte Entitäten lokalisiert und in vordefinierte Kategorien wie PERSON, ORGANISATION, ORT, DATUM, etc. klassifiziert.",
          nl: "NER is een subtaak van informatie-extractie die genoemde entiteiten lokaliseert en classificeert in voorgedefinieerde categorieën zoals PERSOON, ORGANISATIE, LOCATIE, DATUM, enz."
        }
      },
      {
        question: {
          en: "What is the difference between rule-based and statistical approaches in NLP?",
          es: "¿Cuál es la diferencia entre enfoques basados en reglas y estadísticos en PLN?",
          de: "Was ist der Unterschied zwischen regelbasierten und statistischen Ansätzen in NLP?",
          nl: "Wat is het verschil tussen regelgebaseerde en statistische benaderingen in NLP?"
        },
        options: [
          { en: "Rule-based uses hand-crafted patterns and grammar rules, statistical learns patterns from data automatically", es: "Basado en reglas usa patrones hechos a mano y reglas gramaticales, estadístico aprende patrones de datos automáticamente", de: "Regelbasiert verwendet handgefertigte Muster und Grammatikregeln, statistisch lernt Muster automatisch aus Daten", nl: "Regelgebaseerd gebruikt handgemaakte patronen en grammaticaregels, statistisch leert patronen automatisch uit gegevens" },
          { en: "Rule-based is more accurate than statistical", es: "Basado en reglas es más preciso que estadístico", de: "Regelbasiert ist genauer als statistisch", nl: "Regelgebaseerd is nauwkeuriger dan statistisch" },
          { en: "Statistical approaches require less computational power", es: "Los enfoques estadísticos requieren menos poder computacional", de: "Statistische Ansätze benötigen weniger Rechenleistung", nl: "Statistische benaderingen vereisen minder rekenkracht" },
          { en: "Rule-based works only with structured data", es: "Basado en reglas funciona solo con datos estructurados", de: "Regelbasiert funktioniert nur mit strukturierten Daten", nl: "Regelgebaseerd werkt alleen met gestructureerde gegevens" }
        ],
        correct: 0,
        explanation: {
          en: "Rule-based systems rely on expert knowledge encoded as explicit rules, while statistical/machine learning approaches automatically discover patterns from training data, offering better generalization but requiring large datasets.",
          es: "Los sistemas basados en reglas dependen del conocimiento experto codificado como reglas explícitas, mientras los enfoques estadísticos/aprendizaje automático descubren automáticamente patrones de datos de entrenamiento, ofreciendo mejor generalización pero requiriendo grandes conjuntos de datos.",
          de: "Regelbasierte Systeme verlassen sich auf Expertenwissen kodiert als explizite Regeln, während statistische/maschinelle Lernansätze automatisch Muster aus Trainingsdaten entdecken, bieten bessere Generalisierung aber benötigen große Datensätze.",
          nl: "Regelgebaseerde systemen vertrouwen op experkennis gecodeerd als expliciete regels, terwijl statistische/machine learning benaderingen automatisch patronen ontdekken uit trainingsgegevens, bieden betere generalisatie maar vereisen grote datasets."
        }
      },
      {
        question: {
          en: "What is feature engineering in NLP?",
          es: "¿Qué es la ingeniería de características en PLN?",
          de: "Was ist Feature Engineering in NLP?",
          nl: "Wat is feature engineering in NLP?"
        },
        options: [
          { en: "The process of selecting, transforming, and creating relevant features from text data for machine learning models", es: "El proceso de seleccionar, transformar y crear características relevantes de datos de texto para modelos de aprendizaje automático", de: "Der Prozess der Auswahl, Transformation und Erstellung relevanter Features aus Textdaten für maschinelle Lernmodelle", nl: "Het proces van selecteren, transformeren en creëren van relevante features uit tekstgegevens voor machine learning modellen" },
          { en: "Building the technical infrastructure for NLP systems", es: "Construir la infraestructura técnica para sistemas de PLN", de: "Aufbau der technischen Infrastruktur für NLP-Systeme", nl: "Het bouwen van technische infrastructuur voor NLP-systemen" },
          { en: "Optimizing the performance of NLP algorithms", es: "Optimizar el rendimiento de algoritmos de PLN", de: "Optimierung der Leistung von NLP-Algorithmen", nl: "Optimaliseren van de prestaties van NLP-algoritmen" },
          { en: "Designing user interfaces for NLP applications", es: "Diseñar interfaces de usuario para aplicaciones de PLN", de: "Gestaltung von Benutzeroberflächen für NLP-Anwendungen", nl: "Ontwerpen van gebruikersinterfaces voor NLP-applicaties" }
        ],
        correct: 0,
        explanation: {
          en: "Feature engineering transforms raw text into numerical representations that machine learning algorithms can process, including techniques like TF-IDF, n-grams, POS tags, and word embeddings.",
          es: "La ingeniería de características transforma texto crudo en representaciones numéricas que los algoritmos de aprendizaje automático pueden procesar, incluyendo técnicas como TF-IDF, n-gramas, etiquetas POS, e incrustaciones de palabras.",
          de: "Feature Engineering transformiert rohen Text in numerische Darstellungen die maschinelle Lernalgorithmen verarbeiten können, einschließlich Techniken wie TF-IDF, N-Gramme, POS-Tags und Worteinbettungen.",
          nl: "Feature engineering transformeert ruwe tekst naar numerieke representaties die machine learning algoritmen kunnen verwerken, inclusief technieken zoals TF-IDF, n-grammen, POS tags, en woordinbeddingen."
        }
      },
      {
        question: {
          en: "What is maximum entropy modeling in NLP?",
          es: "¿Qué es el modelado de máxima entropía en PLN?",
          de: "Was ist Maximum-Entropie-Modellierung in NLP?",
          nl: "Wat is maximum entropie modellering in NLP?"
        },
        options: [
          { en: "A probabilistic modeling approach that maximizes entropy subject to constraints from training data", es: "Un enfoque de modelado probabilístico que maximiza la entropía sujeta a restricciones de datos de entrenamiento", de: "Ein probabilistischer Modellierungsansatz der Entropie unter Berücksichtigung von Einschränkungen aus Trainingsdaten maximiert", nl: "Een probabilistische modelleringsbenadering die entropie maximaliseert onderhevig aan beperkingen van trainingsgegevens" },
          { en: "A method that requires maximum computational resources", es: "Un método que requiere recursos computacionales máximos", de: "Eine Methode die maximale Rechenressourcen benötigt", nl: "Een methode die maximale computationele bronnen vereist" },
          { en: "A technique for maximizing information content in text", es: "Una técnica para maximizar el contenido de información en texto", de: "Eine Technik zur Maximierung des Informationsgehalts in Text", nl: "Een techniek voor het maximaliseren van informatieinhoud in tekst" },
          { en: "An approach that uses the largest possible vocabulary", es: "Un enfoque que usa el vocabulario más grande posible", de: "Ein Ansatz der das größtmögliche Vokabular verwendet", nl: "Een benadering die het grootst mogelijke vocabulaire gebruikt" }
        ],
        correct: 0,
        explanation: {
          en: "Maximum entropy models choose the most uniform probability distribution that is consistent with the observed evidence, commonly used for classification tasks like POS tagging and NER.",
          es: "Los modelos de máxima entropía eligen la distribución de probabilidad más uniforme que es consistente con la evidencia observada, comúnmente usados para tareas de clasificación como etiquetado POS y NER.",
          de: "Maximum-Entropie-Modelle wählen die gleichmäßigste Wahrscheinlichkeitsverteilung die mit der beobachteten Evidenz konsistent ist, häufig verwendet für Klassifikationsaufgaben wie POS-Tagging und NER.",
          nl: "Maximum entropie modellen kiezen de meest uniforme waarschijnlijkheidsverdeling die consistent is met het waargenomen bewijs, vaak gebruikt voor classificatietaken zoals POS tagging en NER."
        }
      },
      {
        question: {
          en: "What is coreference resolution?",
          es: "¿Qué es la resolución de correferencia?",
          de: "Was ist Koreferenzauflösung?",
          nl: "Wat is coreferentie resolutie?"
        },
        options: [
          { en: "Determining which words or phrases refer to the same entity in a text (like pronouns to their antecedents)", es: "Determinar qué palabras o frases se refieren a la misma entidad en un texto (como pronombres a sus antecedentes)", de: "Bestimmen welche Wörter oder Phrasen sich auf dieselbe Entität in einem Text beziehen (wie Pronomen zu ihren Vorgängern)", nl: "Bepalen welke woorden of zinsdelen verwijzen naar dezelfde entiteit in een tekst (zoals voornaamwoorden naar hun antecedenten)" },
          { en: "Resolving conflicts between different text sources", es: "Resolver conflictos entre diferentes fuentes de texto", de: "Konflikte zwischen verschiedenen Textquellen lösen", nl: "Conflicten tussen verschillende tekstbronnen oplossen" },
          { en: "Finding the main topic of a document", es: "Encontrar el tema principal de un documento", de: "Das Hauptthema eines Dokuments finden", nl: "Het hoofdonderwerp van een document vinden" },
          { en: "Matching words with their definitions", es: "Emparejar palabras con sus definiciones", de: "Wörter mit ihren Definitionen abgleichen", nl: "Woorden matchen met hun definities" }
        ],
        correct: 0,
        explanation: {
          en: "Coreference resolution links mentions of the same entity throughout a text, such as connecting 'he', 'the president', and 'Barack Obama' when they all refer to the same person.",
          es: "La resolución de correferencia vincula menciones de la misma entidad a lo largo de un texto, como conectar 'él', 'el presidente', y 'Barack Obama' cuando todos se refieren a la misma persona.",
          de: "Koreferenzauflösung verknüpft Erwähnungen derselben Entität in einem Text, wie das Verbinden von 'er', 'der Präsident' und 'Barack Obama' wenn sie sich alle auf dieselbe Person beziehen.",
          nl: "Coreferentie resolutie verbindt vermeldingen van dezelfde entiteit door een tekst heen, zoals het verbinden van 'hij', 'de president', en 'Barack Obama' wanneer ze allemaal naar dezelfde persoon verwijzen."
        }
      },
      {
        question: {
          en: "What is semantic role labeling (SRL)?",
          es: "¿Qué es el etiquetado de roles semánticos (SRL)?",
          de: "Was ist semantische Rollenlabeling (SRL)?",
          nl: "Wat is semantische rol labeling (SRL)?"
        },
        options: [
          { en: "Identifying who did what to whom, when, and where by assigning semantic roles to sentence constituents", es: "Identificar quién hizo qué a quién, cuándo y dónde asignando roles semánticos a constituyentes de oraciones", de: "Identifizieren wer was mit wem wann und wo gemacht hat durch Zuweisen semantischer Rollen zu Satzkonstituenten", nl: "Identificeren wie wat deed aan wie, wanneer en waar door semantische rollen toe te wijzen aan zinsconstituenten" },
          { en: "Labeling words by their grammatical categories", es: "Etiquetar palabras por sus categorías gramaticales", de: "Wörter nach ihren grammatischen Kategorien beschriften", nl: "Woorden labelen naar hun grammaticale categorieën" },
          { en: "Assigning importance scores to words", es: "Asignar puntuaciones de importancia a palabras", de: "Wichtigkeitswerte zu Wörtern zuweisen", nl: "Belangrijkheidsscores toewijzen aan woorden" },
          { en: "Categorizing texts by topic", es: "Categorizar textos por tema", de: "Texte nach Thema kategorisieren", nl: "Teksten categoriseren naar onderwerp" }
        ],
        correct: 0,
        explanation: {
          en: "SRL identifies predicate-argument structures, assigning roles like Agent (who), Patient (what), Location (where), and Time (when) to provide deeper semantic understanding than syntactic parsing alone.",
          es: "SRL identifica estructuras predicado-argumento, asignando roles como Agente (quién), Paciente (qué), Ubicación (dónde), y Tiempo (cuándo) para proporcionar comprensión semántica más profunda que solo análisis sintáctico.",
          de: "SRL identifiziert Prädikat-Argument-Strukturen, weist Rollen wie Agent (wer), Patient (was), Ort (wo) und Zeit (wann) zu um tiefere semantische Verständnis als nur syntaktisches Parsing zu bieten.",
          nl: "SRL identificeert predikaat-argument structuren, wijst rollen toe zoals Agent (wie), Patient (wat), Locatie (waar), en Tijd (wanneer) om dieper semantisch begrip te bieden dan alleen syntactisch parsing."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
