// Natuurlijke taalverwerking Quiz - Level 4
(function() {
  const level4 = {
    name: {
          "en": "Language Models",
          "es": "Modelos de Lenguaje",
          "de": "Sprachmodelle",
          "nl": "Taalmodellen"
    },
    questions: [
      {
        question: {
                  "en": "What is a language model in NLP?",
                  "es": "¿Qué es un modelo de lenguaje en PLN?",
                  "de": "Was ist ein Sprachmodell in NLP?",
                  "nl": "Wat is een taalmodel in NLP?"
        },
        options: [
        {
                  "en": "A statistical model that predicts the probability of word sequences",
                  "es": "Un modelo estadístico que predice la probabilidad de secuencias de palabras",
                  "de": "Ein statistisches Modell das die Wahrscheinlichkeit von Wortsequenzen vorhersagt",
                  "nl": "Een statistisch model dat de waarschijnlijkheid van woordsequenties voorspelt"
        },
        {
                  "en": "A grammar checking tool",
                  "es": "Una herramienta de verificación gramatical",
                  "de": "Ein Grammatikprüfungstool",
                  "nl": "Een grammaticacontroletool"
        },
        {
                  "en": "A speech recognition system",
                  "es": "Un sistema de reconocimiento de voz",
                  "de": "Ein Spracherkennungssystem",
                  "nl": "Een spraakherkenningssysteem"
        },
        {
                  "en": "A model for translating languages",
                  "es": "Un modelo para traducir idiomas",
                  "de": "Ein Modell zum Übersetzen von Sprachen",
                  "nl": "Een model voor het vertalen van talen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Language models learn the statistical properties of language to predict the likelihood of word sequences, forming the basis for many NLP applications.",
                  "es": "Los modelos de lenguaje aprenden las propiedades estadísticas del lenguaje para predecir la probabilidad de secuencias de palabras, formando la base para muchas aplicaciones de PLN.",
                  "de": "Sprachmodelle lernen die statistischen Eigenschaften der Sprache um die Wahrscheinlichkeit von Wortsequenzen vorherzusagen, bilden die Grundlage für viele NLP-Anwendungen.",
                  "nl": "Taalmodellen leren de statistische eigenschappen van taal om de waarschijnlijkheid van woordsequenties te voorspellen, vormen de basis voor veel NLP-toepassingen."
        }
      },
      {
        question: {
                  "en": "What is text classification?",
                  "es": "¿Qué es la clasificación de texto?",
                  "de": "Was ist Textklassifikation?",
                  "nl": "Wat is tekstclassificatie?"
        },
        options: [
        {
                  "en": "Grading text quality",
                  "es": "Calificar calidad del texto",
                  "de": "Textqualität bewerten",
                  "nl": "Tekstkwaliteit beoordelen"
        },
        {
                  "en": "Counting text characters",
                  "es": "Contar caracteres del texto",
                  "de": "Textzeichen zählen",
                  "nl": "Tekstkarakters tellen"
        },
        {
                  "en": "Automatically categorizing text documents into predefined classes",
                  "es": "Categorizar automáticamente documentos de texto en clases predefinidas",
                  "de": "Automatisches Kategorisieren von Textdokumenten in vordefinierte Klassen",
                  "nl": "Automatisch categoriseren van tekstdocumenten in voorgedefinieerde klassen"
        },
        {
                  "en": "Organizing texts alphabetically",
                  "es": "Organizar textos alfabéticamente",
                  "de": "Texte alphabetisch ordnen",
                  "nl": "Teksten alfabetisch ordenen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Text classification assigns documents to categories like spam/ham, positive/negative sentiment, or topic categories using machine learning algorithms.",
                  "es": "La clasificación de texto asigna documentos a categorías como spam/ham, sentimiento positivo/negativo, o categorías temáticas usando algoritmos de aprendizaje automático.",
                  "de": "Textklassifikation weist Dokumente Kategorien wie Spam/Ham, positive/negative Stimmung oder Themenkategorien mit maschinellen Lernalgorithmen zu.",
                  "nl": "Tekstclassificatie wijst documenten toe aan categorieën zoals spam/ham, positief/negatief sentiment, of onderwerpcategorieën met behulp van machine learning algoritmes."
        }
      },
      {
        question: {
                  "en": "What is the difference between supervised and unsupervised learning in NLP?",
                  "es": "¿Cuál es la diferencia entre aprendizaje supervisado y no supervisado en PLN?",
                  "de": "Was ist der Unterschied zwischen überwachtem und unüberwachtem Lernen in NLP?",
                  "nl": "Wat is het verschil tussen gesuperviseerd en ongesuperviseerd leren in NLP?"
        },
        options: [
        {
                  "en": "Unsupervised requires more computational power",
                  "es": "No supervisado requiere más poder computacional",
                  "de": "Unüberwacht benötigt mehr Rechenleistung",
                  "nl": "Ongesuperviseerd vereist meer rekenkracht"
        },
        {
                  "en": "Supervised only works with numbers",
                  "es": "Supervisado solo funciona con números",
                  "de": "Überwacht funktioniert nur mit Zahlen",
                  "nl": "Gesuperviseerd werkt alleen met getallen"
        },
        {
                  "en": "Supervised is faster than unsupervised",
                  "es": "Supervisado es más rápido que no supervisado",
                  "de": "Überwacht ist schneller als unüberwacht",
                  "nl": "Gesuperviseerd is sneller dan ongesuperviseerd"
        },
        {
                  "en": "Supervised uses labeled data, unsupervised finds patterns in unlabeled data",
                  "es": "Supervisado usa datos etiquetados, no supervisado encuentra patrones en datos no etiquetados",
                  "de": "Überwacht verwendet beschriftete Daten, unüberwacht findet Muster in unbeschrifteten Daten",
                  "nl": "Gesuperviseerd gebruikt gelabelde data, ongesuperviseerd vindt patronen in ongelabelde data"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Supervised learning trains on labeled examples to predict outcomes, while unsupervised learning discovers hidden patterns and structures in data without labels.",
                  "es": "El aprendizaje supervisado entrena en ejemplos etiquetados para predecir resultados, mientras el aprendizaje no supervisado descubre patrones y estructuras ocultas en datos sin etiquetas.",
                  "de": "Überwachtes Lernen trainiert auf beschrifteten Beispielen um Ergebnisse vorherzusagen, während unüberwachtes Lernen versteckte Muster und Strukturen in Daten ohne Beschriftungen entdeckt.",
                  "nl": "Gesuperviseerd leren traint op gelabelde voorbeelden om uitkomsten te voorspellen, terwijl ongesuperviseerd leren verborgen patronen en structuren in data zonder labels ontdekt."
        }
      },
      {
        question: {
                  "en": "What is topic modeling?",
                  "es": "¿Qué es el modelado de temas?",
                  "de": "Was ist Themenmodellierung?",
                  "nl": "Wat is onderwerp modellering?"
        },
        options: [
        {
                  "en": "Creating models of fashion topics",
                  "es": "Crear modelos de temas de moda",
                  "de": "Modelle von Modethemen erstellen",
                  "nl": "Modellen van modeonderwerpen maken"
        },
        {
                  "en": "An unsupervised technique to discover hidden topics in text collections",
                  "es": "Una técnica no supervisada para descubrir temas ocultos en colecciones de texto",
                  "de": "Eine unüberwachte Technik um versteckte Themen in Textsammlungen zu entdecken",
                  "nl": "Een ongesuperviseerde techniek om verborgen onderwerpen in tekstcollecties te ontdekken"
        },
        {
                  "en": "Modeling the structure of topics",
                  "es": "Modelar la estructura de temas",
                  "de": "Die Struktur von Themen modellieren",
                  "nl": "De structuur van onderwerpen modelleren"
        },
        {
                  "en": "Predicting trending topics",
                  "es": "Predecir temas de tendencia",
                  "de": "Trendthemen vorhersagen",
                  "nl": "Trending onderwerpen voorspellen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Topic modeling algorithms like LDA (Latent Dirichlet Allocation) automatically identify abstract topics within document collections based on word co-occurrence patterns.",
                  "es": "Los algoritmos de modelado de temas como LDA (Latent Dirichlet Allocation) identifican automáticamente temas abstractos dentro de colecciones de documentos basándose en patrones de co-ocurrencia de palabras.",
                  "de": "Themenmodellierungsalgorithmen wie LDA (Latent Dirichlet Allocation) identifizieren automatisch abstrakte Themen in Dokumentsammlungen basierend auf Wort-Kovorkommensmustern.",
                  "nl": "Onderwerp modelleringsalgoritmes zoals LDA (Latent Dirichlet Allocation) identificeren automatisch abstracte onderwerpen in documentverzamelingen gebaseerd op woord co-voorkomenspatronen."
        }
      },
      {
        question: {
                  "en": "What is information extraction in NLP?",
                  "es": "¿Qué es la extracción de información en PLN?",
                  "de": "Was ist Informationsextraktion in NLP?",
                  "nl": "Wat is informatie-extractie in NLP?"
        },
        options: [
        {
                  "en": "Removing unwanted information",
                  "es": "Eliminar información no deseada",
                  "de": "Unerwünschte Informationen entfernen",
                  "nl": "Ongewenste informatie verwijderen"
        },
        {
                  "en": "Automatically extracting structured information from unstructured text",
                  "es": "Extraer automáticamente información estructurada de texto no estructurado",
                  "de": "Automatisches Extrahieren strukturierter Informationen aus unstrukturiertem Text",
                  "nl": "Automatisch gestructureerde informatie extraheren uit ongestructureerde tekst"
        },
        {
                  "en": "Extracting files from compressed archives",
                  "es": "Extraer archivos de archivos comprimidos",
                  "de": "Dateien aus komprimierten Archiven extrahieren",
                  "nl": "Bestanden extraheren uit gecomprimeerde archieven"
        },
        {
                  "en": "Getting information from databases",
                  "es": "Obtener información de bases de datos",
                  "de": "Informationen aus Datenbanken abrufen",
                  "nl": "Informatie ophalen uit databases"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Information extraction converts unstructured text into structured data by identifying entities, relationships, and events, enabling automated processing and analysis.",
                  "es": "La extracción de información convierte texto no estructurado en datos estructurados identificando entidades, relaciones y eventos, permitiendo procesamiento y análisis automatizado.",
                  "de": "Informationsextraktion wandelt unstrukturierten Text in strukturierte Daten um durch Identifizierung von Entitäten, Beziehungen und Ereignissen, ermöglicht automatisierte Verarbeitung und Analyse.",
                  "nl": "Informatie-extractie converteert ongestructureerde tekst naar gestructureerde data door entiteiten, relaties en gebeurtenissen te identificeren, maakt geautomatiseerde verwerking en analyse mogelijk."
        }
      },
      {
        question: {
                  "en": "What is Part-of-Speech (POS) tagging?",
                  "es": "¿Qué es el etiquetado de Parte del Discurso (POS)?",
                  "de": "Was ist Part-of-Speech (POS) Tagging?",
                  "nl": "Wat is Part-of-Speech (POS) tagging?"
        },
        options: [
        {
                  "en": "Adding metadata to documents",
                  "es": "Agregar metadatos a documentos",
                  "de": "Metadaten zu Dokumenten hinzufügen",
                  "nl": "Metadata toevoegen aan documenten"
        },
        {
                  "en": "Assigning grammatical categories like noun, verb, adjective to each word in a sentence",
                  "es": "Asignar categorías gramaticales como sustantivo, verbo, adjetivo a cada palabra en una oración",
                  "de": "Zuweisen grammatischer Kategorien wie Substantiv, Verb, Adjektiv zu jedem Wort in einem Satz",
                  "nl": "Grammaticale categorieën zoals zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord toewijzen aan elk woord in een zin"
        },
        {
                  "en": "Tagging sentences with positive or negative sentiment",
                  "es": "Etiquetar oraciones con sentimiento positivo o negativo",
                  "de": "Sätze mit positiver oder negativer Stimmung markieren",
                  "nl": "Zinnen taggen met positief of negatief sentiment"
        },
        {
                  "en": "Marking important words in a text",
                  "es": "Marcar palabras importantes en un texto",
                  "de": "Wichtige Wörter in einem Text markieren",
                  "nl": "Belangrijke woorden in een tekst markeren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "POS tagging identifies the grammatical role of each word in context, which is essential for parsing, understanding sentence structure, and many downstream NLP tasks.",
                  "es": "El etiquetado POS identifica el rol gramatical de cada palabra en contexto, lo cual es esencial para análisis sintáctico, entender estructura de oraciones y muchas tareas posteriores de PLN.",
                  "de": "POS-Tagging identifiziert die grammatische Rolle jedes Wortes im Kontext, was für das Parsing, Verstehen der Satzstruktur und viele nachgelagerte NLP-Aufgaben wesentlich ist.",
                  "nl": "POS tagging identificeert de grammaticale rol van elk woord in context, wat essentieel is voor parsing, begrijpen van zinsstructuur en veel downstream NLP-taken."
        }
      },
      {
        question: {
                  "en": "What is syntactic parsing?",
                  "es": "¿Qué es el análisis sintáctico?",
                  "de": "Was ist syntaktisches Parsing?",
                  "nl": "Wat is syntactisch parsing?"
        },
        options: [
        {
                  "en": "Checking spelling and grammar",
                  "es": "Verificar ortografía y gramática",
                  "de": "Rechtschreibung und Grammatik prüfen",
                  "nl": "Spelling en grammatica controleren"
        },
        {
                  "en": "Converting speech to text",
                  "es": "Convertir voz a texto",
                  "de": "Sprache in Text umwandeln",
                  "nl": "Spraak omzetten naar tekst"
        },
        {
                  "en": "Breaking text into individual words",
                  "es": "Dividir texto en palabras individuales",
                  "de": "Text in einzelne Wörter aufteilen",
                  "nl": "Tekst opsplitsen in individuele woorden"
        },
        {
                  "en": "Analyzing the grammatical structure of sentences to build parse trees showing relationships between words",
                  "es": "Analizar la estructura gramatical de oraciones para construir árboles de análisis mostrando relaciones entre palabras",
                  "de": "Analysieren der grammatischen Struktur von Sätzen um Parse-Bäume zu erstellen die Beziehungen zwischen Wörtern zeigen",
                  "nl": "Analyseren van de grammaticale structuur van zinnen om parsebomen te bouwen die relaties tussen woorden tonen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Syntactic parsing creates hierarchical structures (parse trees) that represent how words combine according to grammar rules, revealing syntactic relationships and sentence meaning.",
                  "es": "El análisis sintáctico crea estructuras jerárquicas (árboles de análisis) que representan cómo las palabras se combinan según reglas gramaticales, revelando relaciones sintácticas y significado de oraciones.",
                  "de": "Syntaktisches Parsing erstellt hierarchische Strukturen (Parse-Bäume) die darstellen wie Wörter sich nach Grammatikregeln kombinieren, enthüllt syntaktische Beziehungen und Satzbedeutung.",
                  "nl": "Syntactisch parsing creëert hiërarchische structuren (parsebomen) die weergeven hoe woorden combineren volgens grammaticaregels, onthult syntactische relaties en zinsbetekenis."
        }
      },
      {
        question: {
                  "en": "What is the difference between constituency parsing and dependency parsing?",
                  "es": "¿Cuál es la diferencia entre análisis de constituyentes y análisis de dependencias?",
                  "de": "Was ist der Unterschied zwischen Constituency-Parsing und Dependency-Parsing?",
                  "nl": "Wat is het verschil tussen constituency parsing en dependency parsing?"
        },
        options: [
        {
                  "en": "Constituency is faster than dependency parsing",
                  "es": "Constituyentes es más rápido que análisis de dependencias",
                  "de": "Constituency ist schneller als Dependency-Parsing",
                  "nl": "Constituency is sneller dan dependency parsing"
        },
        {
                  "en": "Constituency parsing requires more memory",
                  "es": "Análisis de constituyentes requiere más memoria",
                  "de": "Constituency-Parsing benötigt mehr Speicher",
                  "nl": "Constituency parsing vereist meer geheugen"
        },
        {
                  "en": "Dependency parsing only works with English",
                  "es": "Análisis de dependencias solo funciona con inglés",
                  "de": "Dependency-Parsing funktioniert nur mit Englisch",
                  "nl": "Dependency parsing werkt alleen met Engels"
        },
        {
                  "en": "Constituency groups words into phrases, dependency shows direct relationships between individual words",
                  "es": "Constituyentes agrupa palabras en frases, dependencias muestra relaciones directas entre palabras individuales",
                  "de": "Constituency gruppiert Wörter in Phrasen, Dependency zeigt direkte Beziehungen zwischen einzelnen Wörtern",
                  "nl": "Constituency groepeert woorden in zinsdelen, dependency toont directe relaties tussen individuele woorden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Constituency parsing creates tree structures with nested phrases (noun phrases, verb phrases), while dependency parsing creates directed graphs showing which words depend on others as head-modifier relationships.",
                  "es": "El análisis de constituyentes crea estructuras de árbol con frases anidadas (frases nominales, frases verbales), mientras el análisis de dependencias crea grafos dirigidos mostrando qué palabras dependen de otras como relaciones núcleo-modificador.",
                  "de": "Constituency-Parsing erstellt Baumstrukturen mit verschachtelten Phrasen (Nominalphrasen, Verbalphrasen), während Dependency-Parsing gerichtete Graphen erstellt die zeigen welche Wörter von anderen als Kopf-Modifikator-Beziehungen abhängen.",
                  "nl": "Constituency parsing creëert boomstructuren met geneste zinsdelen (naamwoordgroepen, werkwoordgroepen), terwijl dependency parsing gerichte grafen creëert die tonen welke woorden afhankelijk zijn van anderen als hoofd-modifier relaties."
        }
      },
      {
        question: {
                  "en": "What is a bigram language model?",
                  "es": "¿Qué es un modelo de lenguaje de bigramas?",
                  "de": "Was ist ein Bigramm-Sprachmodell?",
                  "nl": "Wat is een bigramtaalmodel?"
        },
        options: [
        {
                  "en": "A model that processes two words at once",
                  "es": "Un modelo que procesa dos palabras a la vez",
                  "de": "Ein Modell das zwei Wörter auf einmal verarbeitet",
                  "nl": "Een model dat twee woorden tegelijkertijd verwerkt"
        },
        {
                  "en": "A model that uses two neural networks",
                  "es": "Un modelo que usa dos redes neuronales",
                  "de": "Ein Modell das zwei neuronale Netzwerke verwendet",
                  "nl": "Een model dat twee neurale netwerken gebruikt"
        },
        {
                  "en": "A model that predicts the next word based only on the previous word using P(wi|wi-1)",
                  "es": "Un modelo que predice la siguiente palabra basándose solo en la palabra anterior usando P(wi|wi-1)",
                  "de": "Ein Modell das das nächste Wort nur basierend auf dem vorherigen Wort vorhersagt mit P(wi|wi-1)",
                  "nl": "Een model dat het volgende woord voorspelt gebaseerd op alleen het vorige woord met P(wi|wi-1)"
        },
        {
                  "en": "A model trained on two languages",
                  "es": "Un modelo entrenado en dos idiomas",
                  "de": "Ein Modell das auf zwei Sprachen trainiert ist",
                  "nl": "Een model getraind op twee talen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Bigram models use the Markov assumption that the probability of a word depends only on the immediately preceding word, making them simple but effective for basic language modeling.",
                  "es": "Los modelos de bigramas usan la suposición de Markov que la probabilidad de una palabra depende solo de la palabra inmediatamente anterior, haciéndolos simples pero efectivos para modelado básico de lenguaje.",
                  "de": "Bigramm-Modelle verwenden die Markov-Annahme dass die Wahrscheinlichkeit eines Wortes nur vom unmittelbar vorhergehenden Wort abhängt, macht sie einfach aber effektiv für grundlegende Sprachmodellierung.",
                  "nl": "Bigram modellen gebruiken de Markov aanname dat de waarschijnlijkheid van een woord alleen afhangt van het direct voorafgaande woord, maakt ze eenvoudig maar effectief voor basis taalmodellering."
        }
      },
      {
        question: {
                  "en": "What is smoothing in language models?",
                  "es": "¿Qué es el suavizado en modelos de lenguaje?",
                  "de": "Was ist Glättung in Sprachmodellen?",
                  "nl": "Wat is smoothing in taalmodellen?"
        },
        options: [
        {
                  "en": "Techniques to handle zero probabilities for unseen n-grams by redistributing probability mass",
                  "es": "Técnicas para manejar probabilidades cero para n-gramas no vistos redistribuyendo masa de probabilidad",
                  "de": "Techniken um Null-Wahrscheinlichkeiten für ungesehene N-Gramme zu handhaben durch Umverteilung der Wahrscheinlichkeitsmasse",
                  "nl": "Technieken om nul waarschijnlijkheden voor ongeziene n-grammen te behandelen door waarschijnlijkheidsmassa te herverdelen"
        },
        {
                  "en": "Making language models run faster",
                  "es": "Hacer que los modelos de lenguaje funcionen más rápido",
                  "de": "Sprachmodelle schneller laufen lassen",
                  "nl": "Taalmodellen sneller laten draaien"
        },
        {
                  "en": "Simplifying complex sentences",
                  "es": "Simplificar oraciones complejas",
                  "de": "Komplexe Sätze vereinfachen",
                  "nl": "Complexe zinnen vereenvoudigen"
        },
        {
                  "en": "Removing noise from text data",
                  "es": "Eliminar ruido de datos de texto",
                  "de": "Rauschen aus Textdaten entfernen",
                  "nl": "Ruis verwijderen uit tekstgegevens"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Smoothing techniques like Laplace smoothing, Good-Turing, and Kneser-Ney prevent zero probabilities that would break language models when encountering unseen word sequences during testing.",
                  "es": "Las técnicas de suavizado como suavizado de Laplace, Good-Turing, y Kneser-Ney previenen probabilidades cero que romperían modelos de lenguaje al encontrar secuencias de palabras no vistas durante pruebas.",
                  "de": "Glättungstechniken wie Laplace-Glättung, Good-Turing und Kneser-Ney verhindern Null-Wahrscheinlichkeiten die Sprachmodelle brechen würden beim Antreffen ungesehener Wortsequenzen während des Testens.",
                  "nl": "Smoothing technieken zoals Laplace smoothing, Good-Turing, en Kneser-Ney voorkomen nul waarschijnlijkheden die taalmodellen zouden breken bij het tegenkomen van ongeziene woordsequenties tijdens het testen."
        }
      },
      {
        question: {
                  "en": "What is context-free grammar (CFG)?",
                  "es": "¿Qué es la gramática libre de contexto (CFG)?",
                  "de": "Was ist kontextfreie Grammatik (CFG)?",
                  "nl": "Wat is contextvrije grammatica (CFG)?"
        },
        options: [
        {
                  "en": "A grammar for informal text",
                  "es": "Una gramática para texto informal",
                  "de": "Eine Grammatik für informellen Text",
                  "nl": "Een grammatica voor informele tekst"
        },
        {
                  "en": "A formal grammar where production rules can be applied regardless of context, used for syntactic parsing",
                  "es": "Una gramática formal donde las reglas de producción pueden aplicarse independientemente del contexto, usada para análisis sintáctico",
                  "de": "Eine formale Grammatik wo Produktionsregeln unabhängig vom Kontext angewendet werden können, verwendet für syntaktisches Parsing",
                  "nl": "Een formele grammatica waarbij productieregels kunnen worden toegepast ongeacht de context, gebruikt voor syntactisch parsing"
        },
        {
                  "en": "Grammar rules that don't require any context",
                  "es": "Reglas gramaticales que no requieren ningún contexto",
                  "de": "Grammatikregeln die keinen Kontext benötigen",
                  "nl": "Grammaticaregels die geen context vereisen"
        },
        {
                  "en": "Grammar without punctuation rules",
                  "es": "Gramática sin reglas de puntuación",
                  "de": "Grammatik ohne Interpunktionsregeln",
                  "nl": "Grammatica zonder interpunctieregels"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "CFG defines syntax rules where the left side of each rule contains only a single non-terminal, allowing recursive structures and forming the basis for many parsing algorithms.",
                  "es": "CFG define reglas sintácticas donde el lado izquierdo de cada regla contiene solo un no terminal, permitiendo estructuras recursivas y formando la base para muchos algoritmos de análisis.",
                  "de": "CFG definiert Syntaxregeln wo die linke Seite jeder Regel nur ein einzelnes Nicht-Terminal enthält, erlaubt rekursive Strukturen und bildet die Basis für viele Parsing-Algorithmen.",
                  "nl": "CFG definieert syntaxregels waarbij de linkerkant van elke regel slechts een enkele niet-terminal bevat, staat recursieve structuren toe en vormt de basis voor veel parsing algoritmen."
        }
      },
      {
        question: {
                  "en": "What is the CYK (Cocke-Younger-Kasami) algorithm?",
                  "es": "¿Qué es el algoritmo CYK (Cocke-Younger-Kasami)?",
                  "de": "Was ist der CYK (Cocke-Younger-Kasami) Algorithmus?",
                  "nl": "Wat is het CYK (Cocke-Younger-Kasami) algoritme?"
        },
        options: [
        {
                  "en": "A technique for spell checking",
                  "es": "Una técnica para corrección ortográfica",
                  "de": "Eine Technik für Rechtschreibprüfung",
                  "nl": "Een techniek voor spellingcontrole"
        },
        {
                  "en": "A method for language detection",
                  "es": "Un método para detección de idioma",
                  "de": "Eine Methode zur Spracherkennung",
                  "nl": "Een methode voor taaldetectie"
        },
        {
                  "en": "An algorithm for word segmentation",
                  "es": "Un algoritmo para segmentación de palabras",
                  "de": "Ein Algorithmus für Wortsegmentierung",
                  "nl": "Een algoritme voor woordsegmentatie"
        },
        {
                  "en": "A dynamic programming algorithm for parsing sentences with context-free grammars in Chomsky Normal Form",
                  "es": "Un algoritmo de programación dinámica para analizar oraciones con gramáticas libres de contexto en Forma Normal de Chomsky",
                  "de": "Ein dynamischer Programmierungsalgorithmus zum Parsen von Sätzen mit kontextfreien Grammatiken in Chomsky-Normalform",
                  "nl": "Een dynamisch programmeeralgoritme voor het parsen van zinnen met contextvrije grammatica's in Chomsky Normale Vorm"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "CYK is a bottom-up parsing algorithm that fills a triangular table to determine if a sentence can be generated by a given CFG, with O(n³) time complexity.",
                  "es": "CYK es un algoritmo de análisis de abajo hacia arriba que llena una tabla triangular para determinar si una oración puede ser generada por una CFG dada, con complejidad temporal O(n³).",
                  "de": "CYK ist ein Bottom-up-Parsing-Algorithmus der eine dreieckige Tabelle füllt um zu bestimmen ob ein Satz von einer gegebenen CFG generiert werden kann, mit O(n³) Zeitkomplexität.",
                  "nl": "CYK is een bottom-up parsing algoritme dat een driehoekige tabel vult om te bepalen of een zin kan worden gegenereerd door een gegeven CFG, met O(n³) tijdcomplexiteit."
        }
      },
      {
        question: {
                  "en": "What is chunking in NLP?",
                  "es": "¿Qué es el chunking en PLN?",
                  "de": "Was ist Chunking in NLP?",
                  "nl": "Wat is chunking in NLP?"
        },
        options: [
        {
                  "en": "Breaking long sentences into shorter ones",
                  "es": "Dividir oraciones largas en más cortas",
                  "de": "Lange Sätze in kürzere aufteilen",
                  "nl": "Lange zinnen opsplitsen in kortere"
        },
        {
                  "en": "Identifying and grouping consecutive words that form meaningful phrases like noun phrases or verb phrases",
                  "es": "Identificar y agrupar palabras consecutivas que forman frases significativas como frases nominales o frases verbales",
                  "de": "Identifizieren und Gruppieren aufeinanderfolgender Wörter die bedeutungsvolle Phrasen wie Nominalphrasen oder Verbalphrasen bilden",
                  "nl": "Identificeren en groeperen van opeenvolgende woorden die betekenisvolle zinsdelen vormen zoals naamwoordgroepen of werkwoordgroepen"
        },
        {
                  "en": "Removing unnecessary words",
                  "es": "Eliminar palabras innecesarias",
                  "de": "Unnötige Wörter entfernen",
                  "nl": "Onnodige woorden verwijderen"
        },
        {
                  "en": "Dividing text into equal-sized pieces",
                  "es": "Dividir texto en piezas de igual tamaño",
                  "de": "Text in gleich große Stücke teilen",
                  "nl": "Tekst verdelen in gelijkmatige stukken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Chunking (shallow parsing) identifies syntactic units without building full parse trees, focusing on extracting meaningful phrases that can be used for further analysis.",
                  "es": "El chunking (análisis superficial) identifica unidades sintácticas sin construir árboles de análisis completos, enfocándose en extraer frases significativas que pueden usarse para análisis posterior.",
                  "de": "Chunking (oberflächliches Parsing) identifiziert syntaktische Einheiten ohne vollständige Parse-Bäume zu erstellen, konzentriert sich auf das Extrahieren bedeutungsvoller Phrasen die für weitere Analyse verwendet werden können.",
                  "nl": "Chunking (oppervlakkig parsing) identificeert syntactische eenheden zonder volledige parsebomen te bouwen, richt zich op het extraheren van betekenisvolle zinsdelen die kunnen worden gebruikt voor verdere analyse."
        }
      },
      {
        question: {
                  "en": "What is perplexity in language models?",
                  "es": "¿Qué es la perplejidad en modelos de lenguaje?",
                  "de": "Was ist Perplexität in Sprachmodellen?",
                  "nl": "Wat is perplexiteit in taalmodellen?"
        },
        options: [
        {
                  "en": "The complexity of the training data",
                  "es": "La complejidad de los datos de entrenamiento",
                  "de": "Die Komplexität der Trainingsdaten",
                  "nl": "De complexiteit van de trainingsgegevens"
        },
        {
                  "en": "A measure of how well a language model predicts text, with lower perplexity indicating better performance",
                  "es": "Una medida de qué tan bien un modelo de lenguaje predice texto, con menor perplejidad indicando mejor rendimiento",
                  "de": "Ein Maß dafür wie gut ein Sprachmodell Text vorhersagt, mit niedrigerer Perplexität die bessere Leistung anzeigt",
                  "nl": "Een maat voor hoe goed een taalmodel tekst voorspelt, met lagere perplexiteit die betere prestaties aangeeft"
        },
        {
                  "en": "The confusion in the model's output",
                  "es": "La confusión en la salida del modelo",
                  "de": "Die Verwirrung in der Modellausgabe",
                  "nl": "De verwarring in de modeluitvoer"
        },
        {
                  "en": "The number of parameters in the model",
                  "es": "El número de parámetros en el modelo",
                  "de": "Die Anzahl der Parameter im Modell",
                  "nl": "Het aantal parameters in het model"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Perplexity measures how surprised a language model is by new text. It's calculated as the exponential of cross-entropy, with values closer to 1 indicating perfect prediction.",
                  "es": "La perplejidad mide qué tan sorprendido está un modelo de lenguaje por texto nuevo. Se calcula como el exponencial de entropía cruzada, con valores más cercanos a 1 indicando predicción perfecta.",
                  "de": "Perplexität misst wie überrascht ein Sprachmodell von neuem Text ist. Sie wird als Exponential der Kreuzentropie berechnet, mit Werten näher zu 1 die perfekte Vorhersage anzeigen.",
                  "nl": "Perplexiteit meet hoe verrast een taalmodel is door nieuwe tekst. Het wordt berekend als de exponentiële van kruisentropie, met waarden dichter bij 1 die perfecte voorspelling aangeven."
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
                  "en": "Recognizing the author of a text",
                  "es": "Reconocer el autor de un texto",
                  "de": "Den Autor eines Textes erkennen",
                  "nl": "De auteur van een tekst herkennen"
        },
        {
                  "en": "Finding proper names in databases",
                  "es": "Encontrar nombres propios en bases de datos",
                  "de": "Eigennamen in Datenbanken finden",
                  "nl": "Eigennamen vinden in databases"
        },
        {
                  "en": "Identifying and classifying named entities like persons, organizations, locations in text",
                  "es": "Identificar y clasificar entidades nombradas como personas, organizaciones, ubicaciones en texto",
                  "de": "Identifizieren und Klassifizieren benannter Entitäten wie Personen, Organisationen, Orte in Text",
                  "nl": "Identificeren en classificeren van genoemde entiteiten zoals personen, organisaties, locaties in tekst"
        },
        {
                  "en": "Identifying fictional characters",
                  "es": "Identificar personajes ficticios",
                  "de": "Fiktive Charaktere identifizieren",
                  "nl": "Fictieve personages identificeren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "NER is a subtask of information extraction that locates and classifies named entities into predefined categories such as PERSON, ORGANIZATION, LOCATION, DATE, etc.",
                  "es": "NER es una subtarea de extracción de información que localiza y clasifica entidades nombradas en categorías predefinidas como PERSONA, ORGANIZACIÓN, UBICACIÓN, FECHA, etc.",
                  "de": "NER ist eine Teilaufgabe der Informationsextraktion die benannte Entitäten lokalisiert und in vordefinierte Kategorien wie PERSON, ORGANISATION, ORT, DATUM, etc. klassifiziert.",
                  "nl": "NER is een subtaak van informatie-extractie die genoemde entiteiten lokaliseert en classificeert in voorgedefinieerde categorieën zoals PERSOON, ORGANISATIE, LOCATIE, DATUM, enz."
        }
      },
      {
        question: {
                  "en": "What is the difference between rule-based and statistical approaches in NLP?",
                  "es": "¿Cuál es la diferencia entre enfoques basados en reglas y estadísticos en PLN?",
                  "de": "Was ist der Unterschied zwischen regelbasierten und statistischen Ansätzen in NLP?",
                  "nl": "Wat is het verschil tussen regelgebaseerde en statistische benaderingen in NLP?"
        },
        options: [
        {
                  "en": "Statistical approaches require less computational power",
                  "es": "Los enfoques estadísticos requieren menos poder computacional",
                  "de": "Statistische Ansätze benötigen weniger Rechenleistung",
                  "nl": "Statistische benaderingen vereisen minder rekenkracht"
        },
        {
                  "en": "Rule-based uses hand-crafted patterns and grammar rules, statistical learns patterns from data automatically",
                  "es": "Basado en reglas usa patrones hechos a mano y reglas gramaticales, estadístico aprende patrones de datos automáticamente",
                  "de": "Regelbasiert verwendet handgefertigte Muster und Grammatikregeln, statistisch lernt Muster automatisch aus Daten",
                  "nl": "Regelgebaseerd gebruikt handgemaakte patronen en grammaticaregels, statistisch leert patronen automatisch uit gegevens"
        },
        {
                  "en": "Rule-based is more accurate than statistical",
                  "es": "Basado en reglas es más preciso que estadístico",
                  "de": "Regelbasiert ist genauer als statistisch",
                  "nl": "Regelgebaseerd is nauwkeuriger dan statistisch"
        },
        {
                  "en": "Rule-based works only with structured data",
                  "es": "Basado en reglas funciona solo con datos estructurados",
                  "de": "Regelbasiert funktioniert nur mit strukturierten Daten",
                  "nl": "Regelgebaseerd werkt alleen met gestructureerde gegevens"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Rule-based systems rely on expert knowledge encoded as explicit rules, while statistical/machine learning approaches automatically discover patterns from training data, offering better generalization but requiring large datasets.",
                  "es": "Los sistemas basados en reglas dependen del conocimiento experto codificado como reglas explícitas, mientras los enfoques estadísticos/aprendizaje automático descubren automáticamente patrones de datos de entrenamiento, ofreciendo mejor generalización pero requiriendo grandes conjuntos de datos.",
                  "de": "Regelbasierte Systeme verlassen sich auf Expertenwissen kodiert als explizite Regeln, während statistische/maschinelle Lernansätze automatisch Muster aus Trainingsdaten entdecken, bieten bessere Generalisierung aber benötigen große Datensätze.",
                  "nl": "Regelgebaseerde systemen vertrouwen op experkennis gecodeerd als expliciete regels, terwijl statistische/machine learning benaderingen automatisch patronen ontdekken uit trainingsgegevens, bieden betere generalisatie maar vereisen grote datasets."
        }
      },
      {
        question: {
                  "en": "What is feature engineering in NLP?",
                  "es": "¿Qué es la ingeniería de características en PLN?",
                  "de": "Was ist Feature Engineering in NLP?",
                  "nl": "Wat is feature engineering in NLP?"
        },
        options: [
        {
                  "en": "The process of selecting, transforming, and creating relevant features from text data for machine learning models",
                  "es": "El proceso de seleccionar, transformar y crear características relevantes de datos de texto para modelos de aprendizaje automático",
                  "de": "Der Prozess der Auswahl, Transformation und Erstellung relevanter Features aus Textdaten für maschinelle Lernmodelle",
                  "nl": "Het proces van selecteren, transformeren en creëren van relevante features uit tekstgegevens voor machine learning modellen"
        },
        {
                  "en": "Optimizing the performance of NLP algorithms",
                  "es": "Optimizar el rendimiento de algoritmos de PLN",
                  "de": "Optimierung der Leistung von NLP-Algorithmen",
                  "nl": "Optimaliseren van de prestaties van NLP-algoritmen"
        },
        {
                  "en": "Building the technical infrastructure for NLP systems",
                  "es": "Construir la infraestructura técnica para sistemas de PLN",
                  "de": "Aufbau der technischen Infrastruktur für NLP-Systeme",
                  "nl": "Het bouwen van technische infrastructuur voor NLP-systemen"
        },
        {
                  "en": "Designing user interfaces for NLP applications",
                  "es": "Diseñar interfaces de usuario para aplicaciones de PLN",
                  "de": "Gestaltung von Benutzeroberflächen für NLP-Anwendungen",
                  "nl": "Ontwerpen van gebruikersinterfaces voor NLP-applicaties"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Feature engineering transforms raw text into numerical representations that machine learning algorithms can process, including techniques like TF-IDF, n-grams, POS tags, and word embeddings.",
                  "es": "La ingeniería de características transforma texto crudo en representaciones numéricas que los algoritmos de aprendizaje automático pueden procesar, incluyendo técnicas como TF-IDF, n-gramas, etiquetas POS, e incrustaciones de palabras.",
                  "de": "Feature Engineering transformiert rohen Text in numerische Darstellungen die maschinelle Lernalgorithmen verarbeiten können, einschließlich Techniken wie TF-IDF, N-Gramme, POS-Tags und Worteinbettungen.",
                  "nl": "Feature engineering transformeert ruwe tekst naar numerieke representaties die machine learning algoritmen kunnen verwerken, inclusief technieken zoals TF-IDF, n-grammen, POS tags, en woordinbeddingen."
        }
      },
      {
        question: {
                  "en": "What is maximum entropy modeling in NLP?",
                  "es": "¿Qué es el modelado de máxima entropía en PLN?",
                  "de": "Was ist Maximum-Entropie-Modellierung in NLP?",
                  "nl": "Wat is maximum entropie modellering in NLP?"
        },
        options: [
        {
                  "en": "A probabilistic modeling approach that maximizes entropy subject to constraints from training data",
                  "es": "Un enfoque de modelado probabilístico que maximiza la entropía sujeta a restricciones de datos de entrenamiento",
                  "de": "Ein probabilistischer Modellierungsansatz der Entropie unter Berücksichtigung von Einschränkungen aus Trainingsdaten maximiert",
                  "nl": "Een probabilistische modelleringsbenadering die entropie maximaliseert onderhevig aan beperkingen van trainingsgegevens"
        },
        {
                  "en": "A technique for maximizing information content in text",
                  "es": "Una técnica para maximizar el contenido de información en texto",
                  "de": "Eine Technik zur Maximierung des Informationsgehalts in Text",
                  "nl": "Een techniek voor het maximaliseren van informatieinhoud in tekst"
        },
        {
                  "en": "An approach that uses the largest possible vocabulary",
                  "es": "Un enfoque que usa el vocabulario más grande posible",
                  "de": "Ein Ansatz der das größtmögliche Vokabular verwendet",
                  "nl": "Een benadering die het grootst mogelijke vocabulaire gebruikt"
        },
        {
                  "en": "A method that requires maximum computational resources",
                  "es": "Un método que requiere recursos computacionales máximos",
                  "de": "Eine Methode die maximale Rechenressourcen benötigt",
                  "nl": "Een methode die maximale computationele bronnen vereist"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Maximum entropy models choose the most uniform probability distribution that is consistent with the observed evidence, commonly used for classification tasks like POS tagging and NER.",
                  "es": "Los modelos de máxima entropía eligen la distribución de probabilidad más uniforme que es consistente con la evidencia observada, comúnmente usados para tareas de clasificación como etiquetado POS y NER.",
                  "de": "Maximum-Entropie-Modelle wählen die gleichmäßigste Wahrscheinlichkeitsverteilung die mit der beobachteten Evidenz konsistent ist, häufig verwendet für Klassifikationsaufgaben wie POS-Tagging und NER.",
                  "nl": "Maximum entropie modellen kiezen de meest uniforme waarschijnlijkheidsverdeling die consistent is met het waargenomen bewijs, vaak gebruikt voor classificatietaken zoals POS tagging en NER."
        }
      },
      {
        question: {
                  "en": "What is coreference resolution?",
                  "es": "¿Qué es la resolución de correferencia?",
                  "de": "Was ist Koreferenzauflösung?",
                  "nl": "Wat is coreferentie resolutie?"
        },
        options: [
        {
                  "en": "Determining which words or phrases refer to the same entity in a text (like pronouns to their antecedents)",
                  "es": "Determinar qué palabras o frases se refieren a la misma entidad en un texto (como pronombres a sus antecedentes)",
                  "de": "Bestimmen welche Wörter oder Phrasen sich auf dieselbe Entität in einem Text beziehen (wie Pronomen zu ihren Vorgängern)",
                  "nl": "Bepalen welke woorden of zinsdelen verwijzen naar dezelfde entiteit in een tekst (zoals voornaamwoorden naar hun antecedenten)"
        },
        {
                  "en": "Resolving conflicts between different text sources",
                  "es": "Resolver conflictos entre diferentes fuentes de texto",
                  "de": "Konflikte zwischen verschiedenen Textquellen lösen",
                  "nl": "Conflicten tussen verschillende tekstbronnen oplossen"
        },
        {
                  "en": "Matching words with their definitions",
                  "es": "Emparejar palabras con sus definiciones",
                  "de": "Wörter mit ihren Definitionen abgleichen",
                  "nl": "Woorden matchen met hun definities"
        },
        {
                  "en": "Finding the main topic of a document",
                  "es": "Encontrar el tema principal de un documento",
                  "de": "Das Hauptthema eines Dokuments finden",
                  "nl": "Het hoofdonderwerp van een document vinden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coreference resolution links mentions of the same entity throughout a text, such as connecting 'he', 'the president', and 'Barack Obama' when they all refer to the same person.",
                  "es": "La resolución de correferencia vincula menciones de la misma entidad a lo largo de un texto, como conectar 'él', 'el presidente', y 'Barack Obama' cuando todos se refieren a la misma persona.",
                  "de": "Koreferenzauflösung verknüpft Erwähnungen derselben Entität in einem Text, wie das Verbinden von 'er', 'der Präsident' und 'Barack Obama' wenn sie sich alle auf dieselbe Person beziehen.",
                  "nl": "Coreferentie resolutie verbindt vermeldingen van dezelfde entiteit door een tekst heen, zoals het verbinden van 'hij', 'de president', en 'Barack Obama' wanneer ze allemaal naar dezelfde persoon verwijzen."
        }
      },
      {
        question: {
                  "en": "What is semantic role labeling (SRL)?",
                  "es": "¿Qué es el etiquetado de roles semánticos (SRL)?",
                  "de": "Was ist semantische Rollenlabeling (SRL)?",
                  "nl": "Wat is semantische rol labeling (SRL)?"
        },
        options: [
        {
                  "en": "Labeling words by their grammatical categories",
                  "es": "Etiquetar palabras por sus categorías gramaticales",
                  "de": "Wörter nach ihren grammatischen Kategorien beschriften",
                  "nl": "Woorden labelen naar hun grammaticale categorieën"
        },
        {
                  "en": "Assigning importance scores to words",
                  "es": "Asignar puntuaciones de importancia a palabras",
                  "de": "Wichtigkeitswerte zu Wörtern zuweisen",
                  "nl": "Belangrijkheidsscores toewijzen aan woorden"
        },
        {
                  "en": "Categorizing texts by topic",
                  "es": "Categorizar textos por tema",
                  "de": "Texte nach Thema kategorisieren",
                  "nl": "Teksten categoriseren naar onderwerp"
        },
        {
                  "en": "Identifying who did what to whom, when, and where by assigning semantic roles to sentence constituents",
                  "es": "Identificar quién hizo qué a quién, cuándo y dónde asignando roles semánticos a constituyentes de oraciones",
                  "de": "Identifizieren wer was mit wem wann und wo gemacht hat durch Zuweisen semantischer Rollen zu Satzkonstituenten",
                  "nl": "Identificeren wie wat deed aan wie, wanneer en waar door semantische rollen toe te wijzen aan zinsconstituenten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "SRL identifies predicate-argument structures, assigning roles like Agent (who), Patient (what), Location (where), and Time (when) to provide deeper semantic understanding than syntactic parsing alone.",
                  "es": "SRL identifica estructuras predicado-argumento, asignando roles como Agente (quién), Paciente (qué), Ubicación (dónde), y Tiempo (cuándo) para proporcionar comprensión semántica más profunda que solo análisis sintáctico.",
                  "de": "SRL identifiziert Prädikat-Argument-Strukturen, weist Rollen wie Agent (wer), Patient (was), Ort (wo) und Zeit (wann) zu um tiefere semantische Verständnis als nur syntaktisches Parsing zu bieten.",
                  "nl": "SRL identificeert predikaat-argument structuren, wijst rollen toe zoals Agent (wie), Patient (wat), Locatie (waar), en Tijd (wanneer) om dieper semantisch begrip te bieden dan alleen syntactisch parsing."
        }
      },
      {
        question: {
                  "en": "What is a trigram language model?",
                  "es": "¿Qué es un modelo de lenguaje de trigramas?",
                  "de": "Was ist ein Trigramm-Sprachmodell?",
                  "nl": "Wat is een trigramtaalmodel?"
        },
        options: [
        {
                  "en": "A model that predicts the next word based on the previous two words using P(wi|wi-2,wi-1)",
                  "es": "Un modelo que predice la siguiente palabra basándose en las dos palabras anteriores usando P(wi|wi-2,wi-1)",
                  "de": "Ein Modell das das nächste Wort basierend auf den vorherigen zwei Wörtern vorhersagt mit P(wi|wi-2,wi-1)",
                  "nl": "Een model dat het volgende woord voorspelt gebaseerd op de vorige twee woorden met P(wi|wi-2,wi-1)"
        },
        {
                  "en": "A model that uses three neural networks",
                  "es": "Un modelo que usa tres redes neuronales",
                  "de": "Ein Modell das drei neuronale Netzwerke verwendet",
                  "nl": "Een model dat drie neurale netwerken gebruikt"
        },
        {
                  "en": "A model trained on three languages",
                  "es": "Un modelo entrenado en tres idiomas",
                  "de": "Ein Modell das auf drei Sprachen trainiert ist",
                  "nl": "Een model getraind op drie talen"
        },
        {
                  "en": "A model that processes three words at once",
                  "es": "Un modelo que procesa tres palabras a la vez",
                  "de": "Ein Modell das drei Wörter auf einmal verarbeitet",
                  "nl": "Een model dat drie woorden tegelijkertijd verwerkt"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Trigram models extend bigrams by considering the previous two words, capturing more context than bigrams while still remaining computationally tractable compared to larger n-grams.",
                  "es": "Los modelos de trigramas extienden los bigramas considerando las dos palabras anteriores, capturando más contexto que los bigramas mientras permanecen computacionalmente manejables comparados con n-gramas más grandes.",
                  "de": "Trigramm-Modelle erweitern Bigramme durch Berücksichtigung der vorherigen zwei Wörter, erfassen mehr Kontext als Bigramme während sie noch rechnerisch handhabbar bleiben im Vergleich zu größeren N-Grammen.",
                  "nl": "Trigram modellen breiden bigrammen uit door de vorige twee woorden te beschouwen, vangen meer context dan bigrammen terwijl ze nog steeds computationeel haalbaar blijven vergeleken met grotere n-grammen."
        }
      },
      {
        question: {
                  "en": "What is back-off in n-gram language models?",
                  "es": "¿Qué es el back-off en modelos de lenguaje de n-gramas?",
                  "de": "Was ist Back-off in N-Gramm-Sprachmodellen?",
                  "nl": "Wat is back-off in n-gram taalmodellen?"
        },
        options: [
        {
                  "en": "Reverting to an earlier version of the model",
                  "es": "Volver a una versión anterior del modelo",
                  "de": "Zu einer früheren Version des Modells zurückkehren",
                  "nl": "Terugkeren naar een eerdere versie van het model"
        },
        {
                  "en": "Using lower-order n-grams when higher-order n-grams are not available in the training data",
                  "es": "Usar n-gramas de orden inferior cuando n-gramas de orden superior no están disponibles en los datos de entrenamiento",
                  "de": "Verwenden von N-Grammen niedrigerer Ordnung wenn N-Gramme höherer Ordnung in den Trainingsdaten nicht verfügbar sind",
                  "nl": "Gebruiken van lagere-orde n-grammen wanneer hogere-orde n-grammen niet beschikbaar zijn in de trainingsgegevens"
        },
        {
                  "en": "Reducing the size of the language model",
                  "es": "Reducir el tamaño del modelo de lenguaje",
                  "de": "Die Größe des Sprachmodells reduzieren",
                  "nl": "De grootte van het taalmodel verkleinen"
        },
        {
                  "en": "Removing rare words from the vocabulary",
                  "es": "Eliminar palabras raras del vocabulario",
                  "de": "Seltene Wörter aus dem Vokabular entfernen",
                  "nl": "Zeldzame woorden uit het vocabulaire verwijderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Back-off is a smoothing technique that falls back to lower-order n-grams (e.g., from trigram to bigram to unigram) when the higher-order n-gram has zero count in the training corpus.",
                  "es": "El back-off es una técnica de suavizado que retrocede a n-gramas de orden inferior (ej., de trigrama a bigrama a unigrama) cuando el n-grama de orden superior tiene conteo cero en el corpus de entrenamiento.",
                  "de": "Back-off ist eine Glättungstechnik die auf N-Gramme niedrigerer Ordnung zurückfällt (z.B. von Trigramm zu Bigramm zu Unigramm) wenn das N-Gramm höherer Ordnung null Anzahl im Trainingskorpus hat.",
                  "nl": "Back-off is een smoothing techniek die terugvalt op lagere-orde n-grammen (bijv., van trigram naar bigram naar unigram) wanneer het hogere-orde n-gram nul tellingen heeft in het trainingscorpus."
        }
      },
      {
        question: {
                  "en": "What is interpolation in language modeling?",
                  "es": "¿Qué es la interpolación en modelado de lenguaje?",
                  "de": "Was ist Interpolation in der Sprachmodellierung?",
                  "nl": "Wat is interpolatie in taalmodellering?"
        },
        options: [
        {
                  "en": "Creating new words between existing ones",
                  "es": "Crear nuevas palabras entre las existentes",
                  "de": "Neue Wörter zwischen bestehenden erstellen",
                  "nl": "Nieuwe woorden creëren tussen bestaande"
        },
        {
                  "en": "Filling in missing words in a sentence",
                  "es": "Rellenar palabras faltantes en una oración",
                  "de": "Fehlende Wörter in einem Satz ausfüllen",
                  "nl": "Ontbrekende woorden in een zin invullen"
        },
        {
                  "en": "Estimating parameters for unseen data",
                  "es": "Estimar parámetros para datos no vistos",
                  "de": "Parameter für ungesehene Daten schätzen",
                  "nl": "Parameters schatten voor ongeziene gegevens"
        },
        {
                  "en": "Combining probabilities from different n-gram orders using weighted averages",
                  "es": "Combinar probabilidades de diferentes órdenes de n-gramas usando promedios ponderados",
                  "de": "Kombinieren von Wahrscheinlichkeiten aus verschiedenen N-Gramm-Ordnungen mit gewichteten Durchschnitten",
                  "nl": "Combineren van waarschijnlijkheden uit verschillende n-gram ordes met gewogen gemiddeldes"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Interpolation smoothing combines estimates from multiple n-gram models (unigram, bigram, trigram) using weighted linear combinations, with weights typically learned from held-out data.",
                  "es": "El suavizado por interpolación combina estimaciones de múltiples modelos de n-gramas (unigrama, bigrama, trigrama) usando combinaciones lineales ponderadas, con pesos típicamente aprendidos de datos retenidos.",
                  "de": "Interpolations-Glättung kombiniert Schätzungen aus mehreren N-Gramm-Modellen (Unigramm, Bigramm, Trigramm) mit gewichteten linearen Kombinationen, wobei Gewichte typischerweise aus zurückgehaltenen Daten gelernt werden.",
                  "nl": "Interpolatie smoothing combineert schattingen uit meerdere n-gram modellen (unigram, bigram, trigram) met gewogen lineaire combinaties, waarbij gewichten typisch worden geleerd uit achtergehouden gegevens."
        }
      },
      {
        question: {
                  "en": "What is the Viterbi algorithm used for in NLP?",
                  "es": "¿Para qué se usa el algoritmo de Viterbi en PLN?",
                  "de": "Wofür wird der Viterbi-Algorithmus in NLP verwendet?",
                  "nl": "Waarvoor wordt het Viterbi algoritme gebruikt in NLP?"
        },
        options: [
        {
                  "en": "Generating random text sequences",
                  "es": "Generar secuencias de texto aleatorias",
                  "de": "Zufällige Textsequenzen generieren",
                  "nl": "Willekeurige tekstsequenties genereren"
        },
        {
                  "en": "Translating between languages",
                  "es": "Traducir entre idiomas",
                  "de": "Zwischen Sprachen übersetzen",
                  "nl": "Vertalen tussen talen"
        },
        {
                  "en": "Finding the most likely sequence of hidden states in Hidden Markov Models for tasks like POS tagging",
                  "es": "Encontrar la secuencia más probable de estados ocultos en Modelos Ocultos de Markov para tareas como etiquetado POS",
                  "de": "Finden der wahrscheinlichsten Sequenz versteckter Zustände in Hidden Markov Models für Aufgaben wie POS-Tagging",
                  "nl": "Vinden van de meest waarschijnlijke sequentie van verborgen toestanden in Hidden Markov Models voor taken zoals POS tagging"
        },
        {
                  "en": "Clustering similar documents",
                  "es": "Agrupar documentos similares",
                  "de": "Ähnliche Dokumente clustern",
                  "nl": "Vergelijkbare documenten clusteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Viterbi algorithm is a dynamic programming algorithm that efficiently finds the most probable sequence of hidden states given observed data, commonly used for POS tagging and speech recognition.",
                  "es": "El algoritmo de Viterbi es un algoritmo de programación dinámica que encuentra eficientemente la secuencia más probable de estados ocultos dados datos observados, comúnmente usado para etiquetado POS y reconocimiento de voz.",
                  "de": "Der Viterbi-Algorithmus ist ein dynamischer Programmierungsalgorithmus der effizient die wahrscheinlichste Sequenz versteckter Zustände bei gegebenen beobachteten Daten findet, häufig verwendet für POS-Tagging und Spracherkennung.",
                  "nl": "Het Viterbi algoritme is een dynamisch programmeeralgoritme dat efficiënt de meest waarschijnlijke sequentie van verborgen toestanden vindt gegeven waargenomen gegevens, vaak gebruikt voor POS tagging en spraakherkenning."
        }
      },
      {
        question: {
                  "en": "What is Laplace smoothing (add-one smoothing)?",
                  "es": "¿Qué es el suavizado de Laplace (suavizado de agregar uno)?",
                  "de": "Was ist Laplace-Glättung (Add-One-Glättung)?",
                  "nl": "Wat is Laplace smoothing (add-one smoothing)?"
        },
        options: [
        {
                  "en": "Normalizing probability distributions",
                  "es": "Normalizar distribuciones de probabilidad",
                  "de": "Wahrscheinlichkeitsverteilungen normalisieren",
                  "nl": "Waarschijnlijkheidsverdelingen normaliseren"
        },
        {
                  "en": "Averaging probabilities across all n-grams",
                  "es": "Promediar probabilidades a través de todos los n-gramas",
                  "de": "Wahrscheinlichkeiten über alle N-Gramme mitteln",
                  "nl": "Gemiddelde waarschijnlijkheden over alle n-grammen"
        },
        {
                  "en": "Adding 1 to all n-gram counts to avoid zero probabilities",
                  "es": "Agregar 1 a todos los conteos de n-gramas para evitar probabilidades cero",
                  "de": "Hinzufügen von 1 zu allen N-Gramm-Zählungen um Null-Wahrscheinlichkeiten zu vermeiden",
                  "nl": "Toevoegen van 1 aan alle n-gram tellingen om nul waarschijnlijkheden te vermijden"
        },
        {
                  "en": "Removing noise from text data",
                  "es": "Eliminar ruido de datos de texto",
                  "de": "Rauschen aus Textdaten entfernen",
                  "nl": "Ruis verwijderen uit tekstgegevens"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Laplace smoothing adds 1 to each n-gram count and adjusts the denominator accordingly, ensuring no zero probabilities. However, it often over-allocates probability mass to unseen events, making it less practical for large vocabularies.",
                  "es": "El suavizado de Laplace agrega 1 a cada conteo de n-grama y ajusta el denominador en consecuencia, asegurando que no haya probabilidades cero. Sin embargo, a menudo sobre-asigna masa de probabilidad a eventos no vistos, haciéndolo menos práctico para vocabularios grandes.",
                  "de": "Laplace-Glättung fügt 1 zu jeder N-Gramm-Zählung hinzu und passt den Nenner entsprechend an, stellt sicher dass keine Null-Wahrscheinlichkeiten vorliegen. Jedoch weist es oft zu viel Wahrscheinlichkeitsmasse ungesehenen Ereignissen zu, macht es weniger praktisch für große Vokabulare.",
                  "nl": "Laplace smoothing voegt 1 toe aan elke n-gram telling en past de noemer dienovereenkomstig aan, garandeert geen nul waarschijnlijkheden. Echter, het wijst vaak te veel waarschijnlijkheidsmassa toe aan ongeziene gebeurtenissen, maakt het minder praktisch voor grote vocabulaires."
        }
      },
      {
        question: {
                  "en": "What is the Forward-Backward algorithm?",
                  "es": "¿Qué es el algoritmo Forward-Backward?",
                  "de": "Was ist der Forward-Backward-Algorithmus?",
                  "nl": "Wat is het Forward-Backward algoritme?"
        },
        options: [
        {
                  "en": "An algorithm for computing the probability of being in each hidden state at each time step in an HMM",
                  "es": "Un algoritmo para calcular la probabilidad de estar en cada estado oculto en cada paso de tiempo en un HMM",
                  "de": "Ein Algorithmus zur Berechnung der Wahrscheinlichkeit in jedem versteckten Zustand zu jedem Zeitschritt in einem HMM zu sein",
                  "nl": "Een algoritme voor het berekenen van de waarschijnlijkheid van zijn in elke verborgen toestand op elk tijdstip in een HMM"
        },
        {
                  "en": "A method for reversing text sequences",
                  "es": "Un método para invertir secuencias de texto",
                  "de": "Eine Methode zum Umkehren von Textsequenzen",
                  "nl": "Een methode voor het omkeren van tekstsequenties"
        },
        {
                  "en": "An algorithm for forward and backward translation",
                  "es": "Un algoritmo para traducción hacia adelante y hacia atrás",
                  "de": "Ein Algorithmus für Vorwärts- und Rückwärtsübersetzung",
                  "nl": "Een algoritme voor voorwaartse en achterwaartse vertaling"
        },
        {
                  "en": "A bidirectional text processing technique",
                  "es": "Una técnica de procesamiento de texto bidireccional",
                  "de": "Eine bidirektionale Textverarbeitungstechnik",
                  "nl": "Een bidirectionele tekstverwerkingstechniek"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Forward-Backward algorithm computes the posterior probability of each hidden state at each time step given the entire observation sequence. It's used in training HMMs with the Baum-Welch algorithm.",
                  "es": "El algoritmo Forward-Backward calcula la probabilidad posterior de cada estado oculto en cada paso de tiempo dada la secuencia completa de observación. Se usa en entrenar HMMs con el algoritmo Baum-Welch.",
                  "de": "Der Forward-Backward-Algorithmus berechnet die Posterior-Wahrscheinlichkeit jedes versteckten Zustands zu jedem Zeitschritt bei gegebener vollständiger Beobachtungssequenz. Er wird beim Trainieren von HMMs mit dem Baum-Welch-Algorithmus verwendet.",
                  "nl": "Het Forward-Backward algoritme berekent de posterior waarschijnlijkheid van elke verborgen toestand op elk tijdstip gegeven de volledige observatiesequentie. Het wordt gebruikt bij het trainen van HMMs met het Baum-Welch algoritme."
        }
      },
      {
        question: {
                  "en": "What is the Naive Bayes classifier commonly used for in NLP?",
                  "es": "¿Para qué se usa comúnmente el clasificador Naive Bayes en PLN?",
                  "de": "Waarvoor wordt de Naive Bayes classificeerder vaak gebruikt in NLP?"
        },
        options: [
        {
                  "en": "Machine translation between languages",
                  "es": "Traducción automática entre idiomas",
                  "de": "Maschinelle Übersetzung zwischen Sprachen",
                  "nl": "Machinevertaling tussen talen"
        },
        {
                  "en": "Generating new text sequences",
                  "es": "Generar nuevas secuencias de texto",
                  "de": "Neue Textsequenzen generieren",
                  "nl": "Nieuwe tekstsequenties genereren"
        },
        {
                  "en": "Text classification tasks like spam detection and sentiment analysis by assuming feature independence",
                  "es": "Tareas de clasificación de texto como detección de spam y análisis de sentimiento asumiendo independencia de características",
                  "de": "Textklassifikationsaufgaben wie Spam-Erkennung und Sentimentanalyse durch Annahme von Merkmals-Unabhängigkeit",
                  "nl": "Tekstclassificatietaken zoals spamdetectie en sentimentanalyse door feature onafhankelijkheid aan te nemen"
        },
        {
                  "en": "Parsing sentence structures",
                  "es": "Analizar estructuras de oraciones",
                  "de": "Satzstrukturen parsen",
                  "nl": "Zinsstructuren parsen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Naive Bayes classifiers apply Bayes' theorem with the naive assumption that features are conditionally independent. Despite this unrealistic assumption, they work surprisingly well for text classification and are fast to train.",
                  "es": "Los clasificadores Naive Bayes aplican el teorema de Bayes con la suposición ingenua que las características son condicionalmente independientes. A pesar de esta suposición poco realista, funcionan sorprendentemente bien para clasificación de texto y son rápidos de entrenar.",
                  "de": "Naive Bayes Klassifikatoren wenden das Bayes-Theorem mit der naiven Annahme an dass Merkmale bedingt unabhängig sind. Trotz dieser unrealistischen Annahme funktionieren sie überraschend gut für Textklassifikation und sind schnell zu trainieren.",
                  "nl": "Naive Bayes classificeerders passen de stelling van Bayes toe met de naïeve aanname dat features conditioneel onafhankelijk zijn. Ondanks deze onrealistische aanname werken ze verrassend goed voor tekstclassificatie en zijn ze snel te trainen."
        }
      },
      {
        question: {
                  "en": "What is the confusion matrix in text classification evaluation?",
                  "es": "¿Qué es la matriz de confusión en evaluación de clasificación de texto?",
                  "de": "Was ist die Konfusionsmatrix in der Textklassifikationsevaluierung?",
                  "nl": "Wat is de verwarringsmatrix in tekstclassificatie evaluatie?"
        },
        options: [
        {
                  "en": "A visualization of classification errors only",
                  "es": "Una visualización solo de errores de clasificación",
                  "de": "Eine Visualisierung nur von Klassifikationsfehlern",
                  "nl": "Een visualisatie van alleen classificatiefouten"
        },
        {
                  "en": "A matrix of conflicting predictions",
                  "es": "Una matriz de predicciones conflictivas",
                  "de": "Eine Matrix widersprüchlicher Vorhersagen",
                  "nl": "Een matrix van conflicterende voorspellingen"
        },
        {
                  "en": "A table showing true positives, true negatives, false positives, and false negatives for each class",
                  "es": "Una tabla mostrando verdaderos positivos, verdaderos negativos, falsos positivos, y falsos negativos para cada clase",
                  "de": "Eine Tabelle die wahre Positive, wahre Negative, falsche Positive und falsche Negative für jede Klasse zeigt",
                  "nl": "Een tabel die ware positieven, ware negatieven, valse positieven, en valse negatieven toont voor elke klasse"
        },
        {
                  "en": "A measure of how confused the classifier is",
                  "es": "Una medida de qué tan confundido está el clasificador",
                  "de": "Ein Maß dafür wie verwirrt der Klassifikator ist",
                  "nl": "Een maat voor hoe verward de classificeerder is"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A confusion matrix displays the performance of a classification model by showing actual vs predicted classes. From it, we can calculate metrics like precision, recall, F1-score, and accuracy.",
                  "es": "Una matriz de confusión muestra el rendimiento de un modelo de clasificación mostrando clases reales vs predichas. De ella, podemos calcular métricas como precisión, recall, F1-score, y exactitud.",
                  "de": "Eine Konfusionsmatrix zeigt die Leistung eines Klassifikationsmodells durch Anzeige tatsächlicher vs vorhergesagter Klassen. Daraus können wir Metriken wie Präzision, Recall, F1-Score und Genauigkeit berechnen.",
                  "nl": "Een verwarringsmatrix toont de prestaties van een classificatiemodel door werkelijke vs voorspelde klassen te tonen. Hieruit kunnen we metrieken berekenen zoals precisie, recall, F1-score, en nauwkeurigheid."
        }
      },
      {
        question: {
                  "en": "What is macro-averaging in multi-class classification?",
                  "es": "¿Qué es el promedio macro en clasificación multiclase?",
                  "de": "Was ist Makro-Mittelung in Mehrklassen-Klassifikation?",
                  "nl": "Wat is macro-gemiddelde in multiclasseclassificatie?"
        },
        options: [
        {
                  "en": "Computing metrics for each class independently then averaging them equally",
                  "es": "Calcular métricas para cada clase independientemente luego promediarlas igualmente",
                  "de": "Metriken für jede Klasse unabhängig berechnen dann gleich mitteln",
                  "nl": "Metrieken voor elke klasse onafhankelijk berekenen en dan gelijk middelen"
        },
        {
                  "en": "Only averaging the largest classes",
                  "es": "Solo promediar las clases más grandes",
                  "de": "Nur die größten Klassen mitteln",
                  "nl": "Alleen de grootste klassen middelen"
        },
        {
                  "en": "Computing overall accuracy only",
                  "es": "Calcular solo exactitud general",
                  "de": "Nur Gesamtgenauigkeit berechnen",
                  "nl": "Alleen algemene nauwkeurigheid berekenen"
        },
        {
                  "en": "Weighting metrics by class frequency",
                  "es": "Ponderar métricas por frecuencia de clase",
                  "de": "Metriken nach Klassenhäufigkeit gewichten",
                  "nl": "Metrieken wegen op klassefrequentie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Macro-averaging treats all classes equally regardless of their size, computing metrics for each class separately and then taking their unweighted average. This is useful when all classes are equally important.",
                  "es": "El promedio macro trata todas las clases igualmente independientemente de su tamaño, calculando métricas para cada clase por separado y luego tomando su promedio no ponderado. Esto es útil cuando todas las clases son igualmente importantes.",
                  "de": "Makro-Mittelung behandelt alle Klassen gleich unabhängig von ihrer Größe, berechnet Metriken für jede Klasse separat und nimmt dann ihr ungewichtetes Mittel. Dies ist nützlich wenn alle Klassen gleich wichtig sind.",
                  "nl": "Macro-gemiddelde behandelt alle klassen gelijk ongeacht hun grootte, berekent metrieken voor elke klasse afzonderlijk en neemt dan hun ongewogen gemiddelde. Dit is nuttig wanneer alle klassen even belangrijk zijn."
        }
      },
      {
        question: {
                  "en": "What is micro-averaging in multi-class classification?",
                  "es": "¿Qué es el promedio micro en clasificación multiclase?",
                  "de": "Was ist Mikro-Mittelung in Mehrklassen-Klassifikation?",
                  "nl": "Wat is micro-gemiddelde in multiclasseclassificatie?"
        },
        options: [
        {
                  "en": "Averaging over a small sample",
                  "es": "Promediar sobre una muestra pequeña",
                  "de": "Über eine kleine Stichprobe mitteln",
                  "nl": "Middelen over een kleine steekproef"
        },
        {
                  "en": "Aggregating all predictions across classes to compute one overall metric",
                  "es": "Agregar todas las predicciones entre clases para calcular una métrica general",
                  "de": "Alle Vorhersagen über Klassen aggregieren um eine Gesamtmetrik zu berechnen",
                  "nl": "Alle voorspellingen over klassen aggregeren om één algemene metriek te berekenen"
        },
        {
                  "en": "Using microscopic analysis of text",
                  "es": "Usar análisis microscópico de texto",
                  "de": "Mikroskopische Analyse von Text verwenden",
                  "nl": "Microscopische analyse van tekst gebruiken"
        },
        {
                  "en": "Computing metrics for small classes only",
                  "es": "Calcular métricas solo para clases pequeñas",
                  "de": "Metriken nur für kleine Klassen berechnen",
                  "nl": "Metrieken alleen voor kleine klassen berekenen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Micro-averaging pools all predictions and gold labels together, computing TP, FP, FN globally before calculating metrics. This gives more weight to larger classes and equals accuracy in multi-class settings.",
                  "es": "El promedio micro agrupa todas las predicciones y etiquetas doradas juntas, calculando TP, FP, FN globalmente antes de calcular métricas. Esto da más peso a clases más grandes e iguala exactitud en configuraciones multiclase.",
                  "de": "Mikro-Mittelung fasst alle Vorhersagen und Gold-Labels zusammen, berechnet TP, FP, FN global vor Berechnung von Metriken. Dies gibt größeren Klassen mehr Gewicht und entspricht Genauigkeit in Mehrklassen-Einstellungen.",
                  "nl": "Micro-gemiddelde bundelt alle voorspellingen en gouden labels samen, berekent TP, FP, FN globaal voor het berekenen van metrieken. Dit geeft meer gewicht aan grotere klassen en is gelijk aan nauwkeurigheid in multiclasse-instellingen."
        }
      },
      {
        question: {
                  "en": "What is cross-validation in NLP model evaluation?",
                  "es": "¿Qué es la validación cruzada en evaluación de modelos de PLN?",
                  "de": "Was ist Kreuzvalidierung in NLP-Modellevaluierung?",
                  "nl": "Wat is kruisvalidatie in NLP-modelevaluatie?"
        },
        options: [
        {
                  "en": "Validating across multiple languages",
                  "es": "Validar a través de múltiples idiomas",
                  "de": "Über mehrere Sprachen validieren",
                  "nl": "Valideren over meerdere talen"
        },
        {
                  "en": "Splitting data into k folds and training k models, each tested on a different fold",
                  "es": "Dividir datos en k pliegues y entrenar k modelos, cada uno probado en un pliegue diferente",
                  "de": "Daten in k Falten aufteilen und k Modelle trainieren, jedes auf einer anderen Falte getestet",
                  "nl": "Data opsplitsen in k vouwen en k modellen trainen, elk getest op een andere vouw"
        },
        {
                  "en": "Comparing models across datasets",
                  "es": "Comparar modelos a través de conjuntos de datos",
                  "de": "Modelle über Datensätze vergleichen",
                  "nl": "Modellen vergelijken over datasets"
        },
        {
                  "en": "Checking for crossed wires in networks",
                  "es": "Verificar cables cruzados en redes",
                  "de": "Gekreuzte Leitungen in Netzwerken prüfen",
                  "nl": "Controleren op gekruiste verbindingen in netwerken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cross-validation (typically k-fold) divides data into k subsets, trains on k-1 folds and tests on the remaining fold, repeating k times. This provides more reliable performance estimates and reduces overfitting to a single test set.",
                  "es": "La validación cruzada (típicamente k-fold) divide datos en k subconjuntos, entrena en k-1 pliegues y prueba en el pliegue restante, repitiendo k veces. Esto proporciona estimaciones de rendimiento más confiables y reduce sobreajuste a un solo conjunto de prueba.",
                  "de": "Kreuzvalidierung (typisch k-fold) teilt Daten in k Teilmengen, trainiert auf k-1 Falten und testet auf der verbleibenden Falte, wiederholt k mal. Dies liefert zuverlässigere Leistungsschätzungen und reduziert Überanpassung an ein einzelnes Testset.",
                  "nl": "Kruisvalidatie (typisch k-fold) verdeelt data in k subsets, traint op k-1 vouwen en test op de resterende vouw, herhaalt k keer. Dit biedt betrouwbaardere prestatieschattingen en vermindert overfitting op een enkele testset."
        }
      },
      {
        question: {
                  "en": "What is bootstrapping in NLP?",
                  "es": "¿Qué es el bootstrapping en PLN?",
                  "de": "Was ist Bootstrapping in NLP?",
                  "nl": "Wat is bootstrapping in NLP?"
        },
        options: [
        {
                  "en": "Iteratively expanding training data by learning from a small seed set",
                  "es": "Expandir iterativamente datos de entrenamiento aprendiendo de un conjunto semilla pequeño",
                  "de": "Iterativ Trainingsdaten erweitern durch Lernen aus einem kleinen Seed-Set",
                  "nl": "Iteratief trainingsdata uitbreiden door te leren van een kleine zaadset"
        },
        {
                  "en": "Starting a computer or program",
                  "es": "Iniciar una computadora o programa",
                  "de": "Einen Computer oder ein Programm starten",
                  "nl": "Een computer of programma opstarten"
        },
        {
                  "en": "Using bootstrap CSS for styling",
                  "es": "Usar bootstrap CSS para estilo",
                  "de": "Bootstrap CSS für Styling verwenden",
                  "nl": "Bootstrap CSS gebruiken voor styling"
        },
        {
                  "en": "Loading initial parameters only",
                  "es": "Cargar solo parámetros iniciales",
                  "de": "Nur anfängliche Parameter laden",
                  "nl": "Alleen initiële parameters laden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Bootstrapping in NLP starts with a small labeled seed set, trains an initial model, uses it to label more data, adds high-confidence predictions to training data, and repeats. This semi-supervised technique reduces annotation costs.",
                  "es": "El bootstrapping en PLN comienza con un pequeño conjunto semilla etiquetado, entrena un modelo inicial, lo usa para etiquetar más datos, agrega predicciones de alta confianza a datos de entrenamiento, y repite. Esta técnica semi-supervisada reduce costos de anotación.",
                  "de": "Bootstrapping in NLP beginnt mit einem kleinen gelabelten Seed-Set, trainiert ein Anfangsmodell, verwendet es um mehr Daten zu labeln, fügt hochkonfidente Vorhersagen zu Trainingsdaten hinzu, und wiederholt. Diese halbüberwachte Technik reduziert Annotationskosten.",
                  "nl": "Bootstrapping in NLP begint met een kleine gelabelde zaadset, traint een initieel model, gebruikt het om meer data te labelen, voegt hoogbetrouwbare voorspellingen toe aan trainingsdata, en herhaalt. Deze semi-gesuperviseerde techniek vermindert annotatiekosten."
        }
      },
      {
        question: {
                  "en": "What is active learning in NLP?",
                  "es": "¿Qué es el aprendizaje activo en PLN?",
                  "de": "Was ist aktives Lernen in NLP?",
                  "nl": "Wat is actief leren in NLP?"
        },
        options: [
        {
                  "en": "Training models during active hours only",
                  "es": "Entrenar modelos solo durante horas activas",
                  "de": "Modelle nur während aktiver Stunden trainieren",
                  "nl": "Modellen alleen tijdens actieve uren trainen"
        },
        {
                  "en": "Learning that requires active participation from users",
                  "es": "Aprendizaje que requiere participación activa de usuarios",
                  "de": "Lernen das aktive Teilnahme von Nutzern erfordert",
                  "nl": "Leren dat actieve deelname van gebruikers vereist"
        },
        {
                  "en": "Strategically selecting which examples to label next to maximize model improvement",
                  "es": "Seleccionar estratégicamente qué ejemplos etiquetar a continuación para maximizar mejora del modelo",
                  "de": "Strategisch auswählen welche Beispiele als nächstes zu labeln um Modellverbesserung zu maximieren",
                  "nl": "Strategisch selecteren welke voorbeelden als volgende te labelen om modelverbetering te maximaliseren"
        },
        {
                  "en": "Using activation functions in neural networks",
                  "es": "Usar funciones de activación en redes neuronales",
                  "de": "Aktivierungsfunktionen in neuronalen Netzen verwenden",
                  "nl": "Activatiefuncties in neurale netwerken gebruiken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Active learning queries the most informative unlabeled examples (e.g., those with highest uncertainty) for human annotation. This reduces labeling costs by focusing annotation effort on examples that most improve the model.",
                  "es": "El aprendizaje activo consulta los ejemplos no etiquetados más informativos (ej., aquellos con mayor incertidumbre) para anotación humana. Esto reduce costos de etiquetado enfocando esfuerzo de anotación en ejemplos que más mejoran el modelo.",
                  "de": "Aktives Lernen fragt die informativsten ungelabelten Beispiele (z.B. die mit höchster Unsicherheit) für menschliche Annotation ab. Dies reduziert Labelkosten durch Fokussierung des Annotationsaufwands auf Beispiele die das Modell am meisten verbessern.",
                  "nl": "Actief leren bevraagt de meest informatieve ongelabelde voorbeelden (bijv. die met hoogste onzekerheid) voor menselijke annotatie. Dit vermindert labelkosten door annotatie-inspanning te focussen op voorbeelden die het model het meest verbeteren."
        }
      },
      {
        question: {
                  "en": "What is transfer learning in NLP?",
                  "es": "¿Qué es el aprendizaje por transferencia en PLN?",
                  "de": "Was ist Transfer Learning in NLP?",
                  "nl": "Wat is transfer learning in NLP?"
        },
        options: [
        {
                  "en": "Transferring models between computers",
                  "es": "Transferir modelos entre computadoras",
                  "de": "Modelle zwischen Computern übertragen",
                  "nl": "Modellen tussen computers overdragen"
        },
        {
                  "en": "Moving training data to different servers",
                  "es": "Mover datos de entrenamiento a diferentes servidores",
                  "de": "Trainingsdaten auf verschiedene Server verschieben",
                  "nl": "Trainingsdata naar verschillende servers verplaatsen"
        },
        {
                  "en": "Using knowledge from a pre-trained model on one task to improve performance on another task",
                  "es": "Usar conocimiento de un modelo pre-entrenado en una tarea para mejorar rendimiento en otra tarea",
                  "de": "Wissen aus einem vortrainierten Modell für eine Aufgabe verwenden um Leistung bei einer anderen Aufgabe zu verbessern",
                  "nl": "Kennis gebruiken van een voorgetraind model op één taak om prestaties op een andere taak te verbeteren"
        },
        {
                  "en": "Converting models between formats",
                  "es": "Convertir modelos entre formatos",
                  "de": "Modelle zwischen Formaten konvertieren",
                  "nl": "Modellen tussen formaten converteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Transfer learning leverages pre-trained models (like BERT trained on massive corpora) as starting points for specific tasks. Fine-tuning these models on task-specific data achieves better performance with less training data than training from scratch.",
                  "es": "El aprendizaje por transferencia aprovecha modelos pre-entrenados (como BERT entrenado en corpus masivos) como puntos de partida para tareas específicas. Ajustar estos modelos en datos específicos de tarea logra mejor rendimiento con menos datos de entrenamiento que entrenar desde cero.",
                  "de": "Transfer Learning nutzt vortrainierte Modelle (wie BERT trainiert auf massiven Korpora) als Ausgangspunkte für spezifische Aufgaben. Feinabstimmung dieser Modelle auf aufgabenspezifischen Daten erreicht bessere Leistung mit weniger Trainingsdaten als Training von Grund auf.",
                  "nl": "Transfer learning maakt gebruik van voorgetrainde modellen (zoals BERT getraind op massale corpora) als startpunten voor specifieke taken. Het fine-tunen van deze modellen op taakspecifieke data bereikt betere prestaties met minder trainingsdata dan trainen vanaf nul."
        }
      },
      {
        question: {
                  "en": "What is domain adaptation in NLP?",
                  "es": "¿Qué es la adaptación de dominio en PLN?",
                  "de": "Was ist Domänenanpassung in NLP?",
                  "nl": "Wat is domein-adaptatie in NLP?"
        },
        options: [
        {
                  "en": "Adapting a model trained on one domain to work well on a different domain",
                  "es": "Adaptar un modelo entrenado en un dominio para funcionar bien en un dominio diferente",
                  "de": "Ein auf einer Domäne trainiertes Modell anpassen um gut auf einer anderen Domäne zu funktionieren",
                  "nl": "Een model getraind op één domein aanpassen om goed te werken op een ander domein"
        },
        {
                  "en": "Training separate models per domain",
                  "es": "Entrenar modelos separados por dominio",
                  "de": "Separate Modelle pro Domäne trainieren",
                  "nl": "Aparte modellen per domein trainen"
        },
        {
                  "en": "Adapting to different domain names",
                  "es": "Adaptarse a diferentes nombres de dominio",
                  "de": "Sich an verschiedene Domänennamen anpassen",
                  "nl": "Aanpassen aan verschillende domeinnamen"
        },
        {
                  "en": "Changing model architecture for domains",
                  "es": "Cambiar arquitectura del modelo para dominios",
                  "de": "Modellarchitektur für Domänen ändern",
                  "nl": "Modelarchitectuur wijzigen voor domeinen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Domain adaptation addresses the problem when training (source) and test (target) data come from different domains. Techniques include fine-tuning, domain-adversarial training, and using domain-invariant features to improve target domain performance.",
                  "es": "La adaptación de dominio aborda el problema cuando datos de entrenamiento (fuente) y prueba (objetivo) vienen de diferentes dominios. Las técnicas incluyen ajuste fino, entrenamiento adversarial de dominio, y usar características invariantes de dominio para mejorar rendimiento del dominio objetivo.",
                  "de": "Domänenanpassung behandelt das Problem wenn Trainings- (Quell-) und Test- (Ziel-) Daten aus verschiedenen Domänen kommen. Techniken umfassen Feinabstimmung, domänenadversariales Training und Verwendung domäneninvarianter Merkmale um Zieldomänenleistung zu verbessern.",
                  "nl": "Domein-adaptatie pakt het probleem aan wanneer trainings- (bron-) en test- (doel-) data van verschillende domeinen komen. Technieken omvatten fine-tuning, domein-adversariële training, en gebruik van domein-invariante features om doeldomeinprestaties te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is zero-shot learning in NLP?",
                  "es": "¿Qué es el aprendizaje de cero disparos en PLN?",
                  "de": "Was ist Zero-Shot Learning in NLP?",
                  "nl": "Wat is zero-shot leren in NLP?"
        },
        options: [
        {
                  "en": "Using models with zero parameters",
                  "es": "Usar modelos con cero parámetros",
                  "de": "Modelle mit null Parametern verwenden",
                  "nl": "Modellen met nul parameters gebruiken"
        },
        {
                  "en": "Performing a task without any training examples for that specific task",
                  "es": "Realizar una tarea sin ningún ejemplo de entrenamiento para esa tarea específica",
                  "de": "Eine Aufgabe ohne Trainingsbeispiele für diese spezifische Aufgabe durchführen",
                  "nl": "Een taak uitvoeren zonder trainingsvoorbeelden voor die specifieke taak"
        },
        {
                  "en": "Learning without shooting any examples",
                  "es": "Aprender sin disparar ningún ejemplo",
                  "de": "Lernen ohne Beispiele zu schießen",
                  "nl": "Leren zonder voorbeelden te schieten"
        },
        {
                  "en": "Training with zero data points",
                  "es": "Entrenar con cero puntos de datos",
                  "de": "Mit null Datenpunkten trainieren",
                  "nl": "Trainen met nul datapunten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Zero-shot learning enables models to handle tasks they weren't explicitly trained on, using auxiliary information like class descriptions. Large language models like GPT-3 can perform many NLP tasks zero-shot through carefully crafted prompts.",
                  "es": "El aprendizaje de cero disparos permite a modelos manejar tareas en las que no fueron explícitamente entrenados, usando información auxiliar como descripciones de clase. Modelos de lenguaje grandes como GPT-3 pueden realizar muchas tareas de PLN sin ejemplos a través de prompts cuidadosamente elaborados.",
                  "de": "Zero-Shot Learning ermöglicht Modellen Aufgaben zu bewältigen für die sie nicht explizit trainiert wurden, unter Verwendung von Hilfsinformationen wie Klassenbeschreibungen. Große Sprachmodelle wie GPT-3 können viele NLP-Aufgaben zero-shot durch sorgfältig gestaltete Prompts durchführen.",
                  "nl": "Zero-shot leren stelt modellen in staat taken te behandelen waarvoor ze niet expliciet getraind waren, met gebruik van hulpinformatie zoals klassebeschrijvingen. Grote taalmodellen zoals GPT-3 kunnen veel NLP-taken zero-shot uitvoeren via zorgvuldig opgestelde prompts."
        }
      },
      {
        question: {
                  "en": "What is few-shot learning in NLP?",
                  "es": "¿Qué es el aprendizaje de pocos disparos en PLN?",
                  "de": "Was ist Few-Shot Learning in NLP?",
                  "nl": "Wat is few-shot leren in NLP?"
        },
        options: [
        {
                  "en": "Learning to perform a task with only a small number of training examples",
                  "es": "Aprender a realizar una tarea con solo un pequeño número de ejemplos de entrenamiento",
                  "de": "Lernen eine Aufgabe mit nur einer kleinen Anzahl von Trainingsbeispielen durchzuführen",
                  "nl": "Leren om een taak uit te voeren met slechts een klein aantal trainingsvoorbeelden"
        },
        {
                  "en": "Training with exactly three examples",
                  "es": "Entrenar con exactamente tres ejemplos",
                  "de": "Mit genau drei Beispielen trainieren",
                  "nl": "Trainen met precies drie voorbeelden"
        },
        {
                  "en": "Using minimal computational resources",
                  "es": "Usar recursos computacionales mínimos",
                  "de": "Minimale Rechenressourcen verwenden",
                  "nl": "Minimale rekenkracht gebruiken"
        },
        {
                  "en": "Shooting a few examples for training",
                  "es": "Disparar algunos ejemplos para entrenamiento",
                  "de": "Ein paar Beispiele für Training schießen",
                  "nl": "Een paar voorbeelden schieten voor training"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Few-shot learning trains models to generalize from very limited examples (typically 1-10 per class). Modern LLMs can learn new tasks from just a few examples provided in the prompt (in-context learning) without updating model parameters.",
                  "es": "El aprendizaje de pocos disparos entrena modelos para generalizar desde ejemplos muy limitados (típicamente 1-10 por clase). LLMs modernos pueden aprender nuevas tareas desde solo algunos ejemplos proporcionados en el prompt (aprendizaje en contexto) sin actualizar parámetros del modelo.",
                  "de": "Few-Shot Learning trainiert Modelle um aus sehr begrenzten Beispielen zu generalisieren (typisch 1-10 pro Klasse). Moderne LLMs können neue Aufgaben aus nur wenigen im Prompt bereitgestellten Beispielen lernen (In-Kontext-Lernen) ohne Modellparameter zu aktualisieren.",
                  "nl": "Few-shot leren traint modellen om te generaliseren vanuit zeer beperkte voorbeelden (typisch 1-10 per klasse). Moderne LLMs kunnen nieuwe taken leren van slechts een paar voorbeelden in de prompt (in-context leren) zonder modelparameters bij te werken."
        }
      },
      {
        question: {
                  "en": "What is prompt engineering?",
                  "es": "¿Qué es la ingeniería de prompts?",
                  "de": "Was ist Prompt Engineering?",
                  "nl": "Wat is prompt engineering?"
        },
        options: [
        {
                  "en": "Designing input prompts to elicit desired behaviors from language models",
                  "es": "Diseñar prompts de entrada para provocar comportamientos deseados de modelos de lenguaje",
                  "de": "Eingabe-Prompts entwerfen um gewünschte Verhaltensweisen von Sprachmodellen hervorzurufen",
                  "nl": "Input prompts ontwerpen om gewenst gedrag van taalmodellen te verkrijgen"
        },
        {
                  "en": "Building prompt systems for users",
                  "es": "Construir sistemas de prompts para usuarios",
                  "de": "Prompt-Systeme für Benutzer bauen",
                  "nl": "Promptsystemen bouwen voor gebruikers"
        },
        {
                  "en": "Debugging model prompts only",
                  "es": "Depurar solo prompts del modelo",
                  "de": "Nur Modell-Prompts debuggen",
                  "nl": "Alleen model prompts debuggen"
        },
        {
                  "en": "Engineering faster response times",
                  "es": "Ingeniar tiempos de respuesta más rápidos",
                  "de": "Schnellere Antwortzeiten entwickeln",
                  "nl": "Snellere responstijden ontwikkelen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Prompt engineering crafts input text to guide LLMs to produce desired outputs. Techniques include few-shot examples, instruction-following formats, chain-of-thought prompting, and role-playing. Effective prompts significantly impact model performance.",
                  "es": "La ingeniería de prompts elabora texto de entrada para guiar LLMs a producir salidas deseadas. Las técnicas incluyen ejemplos de pocos disparos, formatos de seguimiento de instrucciones, prompting de cadena de pensamiento, y juego de roles. Prompts efectivos impactan significativamente el rendimiento del modelo.",
                  "de": "Prompt Engineering gestaltet Eingabetext um LLMs zu gewünschten Ausgaben zu führen. Techniken umfassen Few-Shot-Beispiele, instruktionsfolgenden Formate, Chain-of-Thought-Prompting und Rollenspiel. Effektive Prompts beeinflussen Modellleistung signifikant.",
                  "nl": "Prompt engineering creëert invoertekst om LLMs te leiden naar gewenste outputs. Technieken omvatten few-shot voorbeelden, instructie-volgende formaten, chain-of-thought prompting, en rollenspel. Effectieve prompts beïnvloeden modelprestaties aanzienlijk."
        }
      },
      {
        question: {
                  "en": "What is the BLEU metric used for?",
                  "es": "¿Para qué se usa la métrica BLEU?",
                  "de": "Wofür wird die BLEU-Metrik verwendet?",
                  "nl": "Waarvoor wordt de BLEU-metriek gebruikt?"
        },
        options: [
        {
                  "en": "Measuring text color accuracy",
                  "es": "Medir precisión de color de texto",
                  "de": "Textfarbgenauigkeit messen",
                  "nl": "Tekstkleurnauwkeurigheid meten"
        },
        {
                  "en": "Evaluating blue-themed content only",
                  "es": "Evaluar solo contenido con tema azul",
                  "de": "Nur blau-thematischen Inhalt evaluieren",
                  "nl": "Alleen blauw-thematische content evalueren"
        },
        {
                  "en": "Evaluating machine translation quality by comparing n-gram overlap with reference translations",
                  "es": "Evaluar calidad de traducción automática comparando superposición de n-gramas con traducciones de referencia",
                  "de": "Maschinelle Übersetzungsqualität evaluieren durch Vergleich von N-Gramm-Überlappung mit Referenzübersetzungen",
                  "nl": "Machinevertaalkwaliteit evalueren door n-gram overlap te vergelijken met referentievertalingen"
        },
        {
                  "en": "Scoring sentiment as positive or negative",
                  "es": "Puntuar sentimiento como positivo o negativo",
                  "de": "Sentiment als positiv oder negativ bewerten",
                  "nl": "Sentiment scoren als positief of negatief"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "BLEU (Bilingual Evaluation Understudy) measures precision of n-grams in machine-generated translations compared to human references, with a brevity penalty. Despite limitations, it's widely used for automatic MT evaluation.",
                  "es": "BLEU (Bilingual Evaluation Understudy) mide precisión de n-gramas en traducciones generadas por máquina comparadas con referencias humanas, con penalización por brevedad. A pesar de limitaciones, es ampliamente usado para evaluación automática de MT.",
                  "de": "BLEU (Bilingual Evaluation Understudy) misst Präzision von N-Grammen in maschinell generierten Übersetzungen verglichen mit menschlichen Referenzen, mit Kürze-Strafe. Trotz Einschränkungen wird es weithin für automatische MT-Evaluierung verwendet.",
                  "nl": "BLEU (Bilingual Evaluation Understudy) meet precisie van n-grams in machine-gegenereerde vertalingen vergeleken met menselijke referenties, met een bondigheidspenalty. Ondanks beperkingen wordt het veelvuldig gebruikt voor automatische MT-evaluatie."
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
                  "en": "Random moves",
                  "es": "Random moves",
                  "de": "Random moves",
                  "nl": "Random moves"
        },
        {
                  "en": "No planning",
                  "es": "No planning",
                  "de": "No planning",
                  "nl": "No planning"
        },
        {
                  "en": "Planning to achieve objectives",
                  "es": "Planning to achieve objectives",
                  "de": "Planning to achieve objectives",
                  "nl": "Planning to achieve objectives"
        },
        {
                  "en": "Luck only",
                  "es": "Luck only",
                  "de": "Luck only",
                  "nl": "Luck only"
        }
        ],
        correct: 2,
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
    module.exports = level4;
  }
})();