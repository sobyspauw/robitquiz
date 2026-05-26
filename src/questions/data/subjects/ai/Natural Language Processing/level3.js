// Natural Language Processing - level3
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What is a language model in NLP?",
                "es": "¿Qué es un modelo de lenguaje en PLN?",
                "de": "Was ist ein Sprachmodell im NLP?",
                "nl": "Wat is een taalmodel in NLP?"
            },
            "options": [
                {
                    "en": "A model predicting next words",
                    "es": "Un modelo que predice palabras",
                    "de": "Ein Modell das Wörter vorhersagt",
                    "nl": "Een model dat woorden voorspelt"
                },
                {
                    "en": "A grammar textbook",
                    "es": "Un libro de gramática",
                    "de": "Ein Grammatikbuch",
                    "nl": "Een grammaticaboek"
                },
                {
                    "en": "A translation dictionary",
                    "es": "Un diccionario de traducción",
                    "de": "Ein Übersetzungswörterbuch",
                    "nl": "Een vertaalwoordenboek"
                },
                {
                    "en": "A speech recorder",
                    "es": "Un grabador de voz",
                    "de": "Ein Sprachrekorder",
                    "nl": "Een spraakrecorder"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A language model predicts the probability of word sequences in text.",
                "es": "Un modelo de lenguaje predice la probabilidad de secuencias de palabras.",
                "de": "Ein Sprachmodell sagt die Wahrscheinlichkeit von Wortfolgen voraus.",
                "nl": "Een taalmodel voorspelt de waarschijnlijkheid van woordreeksen."
            }
        },
        {
            "question": {
                "en": "What is tokenization used for?",
                "es": "¿Para qué se usa la tokenización?",
                "de": "Wofür wird Tokenisierung verwendet?",
                "nl": "Waarvoor wordt tokenisatie gebruikt?"
            },
            "options": [
                {
                    "en": "Splitting text into tokens",
                    "es": "Dividir texto en tokens",
                    "de": "Text in Tokens aufteilen",
                    "nl": "Tekst splitsen in tokens"
                },
                {
                    "en": "Encrypting passwords",
                    "es": "Cifrar contraseñas",
                    "de": "Passwörter verschlüsseln",
                    "nl": "Wachtwoorden versleutelen"
                },
                {
                    "en": "Counting pages",
                    "es": "Contar páginas",
                    "de": "Seiten zählen",
                    "nl": "Pagina's tellen"
                },
                {
                    "en": "Formatting text",
                    "es": "Formatear texto",
                    "de": "Text formatieren",
                    "nl": "Tekst opmaken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tokenization splits text into individual units like words or subwords for processing.",
                "es": "La tokenización divide texto en unidades individuales para procesamiento.",
                "de": "Tokenisierung teilt Text in einzelne Einheiten wie Wörter für die Verarbeitung.",
                "nl": "Tokenisatie splitst tekst in individuele eenheden voor verwerking."
            }
        },
        {
            "question": {
                "en": "What is stemming in NLP?",
                "es": "¿Qué es el stemming en PLN?",
                "de": "Was ist Stemming im NLP?",
                "nl": "Wat is stemming in NLP?"
            },
            "options": [
                {
                    "en": "Reducing words to their root form",
                    "es": "Reducir palabras a su raíz",
                    "de": "Wörter auf ihre Wurzelform reduzieren",
                    "nl": "Woorden terugbrengen tot hun stam"
                },
                {
                    "en": "Adding prefixes to words",
                    "es": "Agregar prefijos",
                    "de": "Präfixe hinzufügen",
                    "nl": "Voorvoegsels toevoegen"
                },
                {
                    "en": "Translating words",
                    "es": "Traducir palabras",
                    "de": "Wörter übersetzen",
                    "nl": "Woorden vertalen"
                },
                {
                    "en": "Capitalizing words",
                    "es": "Poner en mayúsculas",
                    "de": "Wörter großschreiben",
                    "nl": "Woorden met hoofdletters"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Stemming removes word endings to find the root, e.g., 'running' becomes 'run'.",
                "es": "El stemming elimina terminaciones para encontrar la raíz, ej. 'corriendo' a 'corr'.",
                "de": "Stemming entfernt Endungen um die Wurzel zu finden, z.B. 'laufend' zu 'lauf'.",
                "nl": "Stemming verwijdert uitgangen om de stam te vinden, bijv. 'lopend' wordt 'loop'."
            }
        },
        {
            "question": {
                "en": "What is lemmatization?",
                "es": "¿Qué es la lematización?",
                "de": "Was ist Lemmatisierung?",
                "nl": "Wat is lemmatisering?"
            },
            "options": [
                {
                    "en": "Reducing words to dictionary form",
                    "es": "Reducir palabras a forma de diccionario",
                    "de": "Wörter auf Wörterbuchform reduzieren",
                    "nl": "Woorden terugbrengen tot woordenboekvorm"
                },
                {
                    "en": "Adding word endings",
                    "es": "Agregar terminaciones",
                    "de": "Endungen hinzufügen",
                    "nl": "Uitgangen toevoegen"
                },
                {
                    "en": "Counting letters",
                    "es": "Contar letras",
                    "de": "Buchstaben zählen",
                    "nl": "Letters tellen"
                },
                {
                    "en": "Removing spaces",
                    "es": "Eliminar espacios",
                    "de": "Leerzeichen entfernen",
                    "nl": "Spaties verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Lemmatization returns proper dictionary forms, e.g., 'better' becomes 'good'.",
                "es": "La lematización devuelve formas de diccionario, ej. 'mejor' a 'bueno'.",
                "de": "Lemmatisierung gibt Wörterbuchformen zurück, z.B. 'besser' zu 'gut'.",
                "nl": "Lemmatisering geeft woordenboekvormen, bijv. 'beter' wordt 'goed'."
            }
        },
        {
            "question": {
                "en": "How does stemming differ from lemmatization?",
                "es": "¿En qué difiere el stemming de la lematización?",
                "de": "Wie unterscheidet sich Stemming von Lemmatisierung?",
                "nl": "Hoe verschilt stemming van lemmatisering?"
            },
            "options": [
                {
                    "en": "Stemming chops endings, lemmatization uses dictionary",
                    "es": "Stemming corta terminaciones, lematización usa diccionario",
                    "de": "Stemming schneidet Endungen, Lemmatisierung nutzt Wörterbuch",
                    "nl": "Stemming kapt uitgangen, lemmatisering gebruikt woordenboek"
                },
                {
                    "en": "They are identical",
                    "es": "Son idénticos",
                    "de": "Sie sind identisch",
                    "nl": "Ze zijn identiek"
                },
                {
                    "en": "Stemming is slower",
                    "es": "Stemming es más lento",
                    "de": "Stemming ist langsamer",
                    "nl": "Stemming is langzamer"
                },
                {
                    "en": "Lemmatization only works in English",
                    "es": "Lematización solo funciona en inglés",
                    "de": "Lemmatisierung funktioniert nur auf Englisch",
                    "nl": "Lemmatisering werkt alleen in het Engels"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Stemming simply removes endings while lemmatization finds the true dictionary form.",
                "es": "El stemming corta terminaciones mientras la lematización busca la forma de diccionario.",
                "de": "Stemming schneidet Endungen ab, Lemmatisierung findet die Wörterbuchform.",
                "nl": "Stemming kapt uitgangen af terwijl lemmatisering de woordenboekvorm zoekt."
            }
        },
        {
            "question": {
                "en": "What is a stop word in NLP?",
                "es": "¿Qué es una palabra vacía en PLN?",
                "de": "Was ist ein Stoppwort im NLP?",
                "nl": "Wat is een stopwoord in NLP?"
            },
            "options": [
                {
                    "en": "A common word with little meaning",
                    "es": "Una palabra común con poco significado",
                    "de": "Ein häufiges Wort mit wenig Bedeutung",
                    "nl": "Een veelvoorkomend woord met weinig betekenis"
                },
                {
                    "en": "A forbidden word",
                    "es": "Una palabra prohibida",
                    "de": "Ein verbotenes Wort",
                    "nl": "Een verboden woord"
                },
                {
                    "en": "A very long word",
                    "es": "Una palabra muy larga",
                    "de": "Ein sehr langes Wort",
                    "nl": "Een heel lang woord"
                },
                {
                    "en": "A new word",
                    "es": "Una palabra nueva",
                    "de": "Ein neues Wort",
                    "nl": "Een nieuw woord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Stop words are common words like 'the', 'is', 'at' that are often removed in NLP.",
                "es": "Las palabras vacías son comunes como 'el', 'es' que se eliminan en PLN.",
                "de": "Stoppwörter sind häufige Wörter wie 'der', 'ist' die oft im NLP entfernt werden.",
                "nl": "Stopwoorden zijn veelvoorkomende woorden zoals 'de', 'is' die vaak verwijderd worden."
            }
        },
        {
            "question": {
                "en": "What is TF-IDF used to measure?",
                "es": "¿Qué mide TF-IDF?",
                "de": "Was misst TF-IDF?",
                "nl": "Wat meet TF-IDF?"
            },
            "options": [
                {
                    "en": "Word importance in a document",
                    "es": "Importancia de una palabra en un documento",
                    "de": "Wortwichtigkeit in einem Dokument",
                    "nl": "Woordbelangrijkheid in een document"
                },
                {
                    "en": "Text length",
                    "es": "Longitud del texto",
                    "de": "Textlänge",
                    "nl": "Tekstlengte"
                },
                {
                    "en": "Reading speed",
                    "es": "Velocidad de lectura",
                    "de": "Lesegeschwindigkeit",
                    "nl": "Leessnelheid"
                },
                {
                    "en": "Font size",
                    "es": "Tamaño de fuente",
                    "de": "Schriftgröße",
                    "nl": "Lettergrootte"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "TF-IDF measures how important a word is to a document relative to a collection.",
                "es": "TF-IDF mide la importancia de una palabra en relación a una colección.",
                "de": "TF-IDF misst die Wichtigkeit eines Wortes relativ zu einer Sammlung.",
                "nl": "TF-IDF meet het belang van een woord ten opzichte van een verzameling."
            }
        },
        {
            "question": {
                "en": "What does IDF stand for in TF-IDF?",
                "es": "¿Qué significa IDF en TF-IDF?",
                "de": "Wofür steht IDF in TF-IDF?",
                "nl": "Waar staat IDF voor in TF-IDF?"
            },
            "options": [
                {
                    "en": "Inverse Document Frequency",
                    "es": "Frecuencia Inversa de Documento",
                    "de": "Inverse Dokumenthäufigkeit",
                    "nl": "Inverse Documentfrequentie"
                },
                {
                    "en": "Internal Data Format",
                    "es": "Formato Interno de Datos",
                    "de": "Internes Datenformat",
                    "nl": "Intern Dataformaat"
                },
                {
                    "en": "Indexed Data File",
                    "es": "Archivo de Datos Indexados",
                    "de": "Indexierte Datendatei",
                    "nl": "Geïndexeerd Databestand"
                },
                {
                    "en": "Input Data Filter",
                    "es": "Filtro de Datos de Entrada",
                    "de": "Eingabedatenfilter",
                    "nl": "Invoergegevensfilter"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "IDF stands for Inverse Document Frequency, penalizing common words across documents.",
                "es": "IDF significa Frecuencia Inversa de Documento, penalizando palabras comunes.",
                "de": "IDF steht für Inverse Dokumenthäufigkeit, häufige Wörter werden bestraft.",
                "nl": "IDF staat voor Inverse Documentfrequentie, veelvoorkomende woorden worden bestraft."
            }
        },
        {
            "question": {
                "en": "What is a corpus in NLP?",
                "es": "¿Qué es un corpus en PLN?",
                "de": "Was ist ein Korpus im NLP?",
                "nl": "Wat is een corpus in NLP?"
            },
            "options": [
                {
                    "en": "A large collection of text",
                    "es": "Una gran colección de texto",
                    "de": "Eine große Textsammlung",
                    "nl": "Een grote tekstverzameling"
                },
                {
                    "en": "A single word",
                    "es": "Una sola palabra",
                    "de": "Ein einzelnes Wort",
                    "nl": "Een enkel woord"
                },
                {
                    "en": "A computer program",
                    "es": "Un programa de computadora",
                    "de": "Ein Computerprogramm",
                    "nl": "Een computerprogramma"
                },
                {
                    "en": "A grammar book",
                    "es": "Un libro de gramática",
                    "de": "Ein Grammatikbuch",
                    "nl": "Een grammaticaboek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A corpus is a large, structured collection of text used for NLP research and training.",
                "es": "Un corpus es una colección grande y estructurada de texto para investigación.",
                "de": "Ein Korpus ist eine große, strukturierte Textsammlung für NLP-Forschung.",
                "nl": "Een corpus is een grote, gestructureerde tekstverzameling voor NLP-onderzoek."
            }
        },
        {
            "question": {
                "en": "What is POS tagging?",
                "es": "¿Qué es el etiquetado POS?",
                "de": "Was ist POS-Tagging?",
                "nl": "Wat is POS-tagging?"
            },
            "options": [
                {
                    "en": "Labeling words with grammar roles",
                    "es": "Etiquetar palabras con roles gramaticales",
                    "de": "Wörter mit Grammatikrollen kennzeichnen",
                    "nl": "Woorden labelen met grammaticale rollen"
                },
                {
                    "en": "Sorting by position",
                    "es": "Clasificar por posición",
                    "de": "Nach Position sortieren",
                    "nl": "Sorteren op positie"
                },
                {
                    "en": "Counting words",
                    "es": "Contar palabras",
                    "de": "Wörter zählen",
                    "nl": "Woorden tellen"
                },
                {
                    "en": "Translating text",
                    "es": "Traducir texto",
                    "de": "Text übersetzen",
                    "nl": "Tekst vertalen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "POS tagging labels each word with its grammatical role like noun, verb, or adjective.",
                "es": "El etiquetado POS marca cada palabra con su rol gramatical.",
                "de": "POS-Tagging kennzeichnet jedes Wort mit seiner grammatischen Rolle.",
                "nl": "POS-tagging labelt elk woord met zijn grammaticale rol."
            }
        },
        {
            "question": {
                "en": "What is named entity recognition?",
                "es": "¿Qué es el reconocimiento de entidades?",
                "de": "Was ist Eigennamenerkennung?",
                "nl": "Wat is named entity recognition?"
            },
            "options": [
                {
                    "en": "Finding names, places, dates in text",
                    "es": "Encontrar nombres, lugares, fechas en texto",
                    "de": "Namen, Orte, Daten im Text finden",
                    "nl": "Namen, plaatsen, datums in tekst vinden"
                },
                {
                    "en": "Counting entities",
                    "es": "Contar entidades",
                    "de": "Entitäten zählen",
                    "nl": "Entiteiten tellen"
                },
                {
                    "en": "Creating names",
                    "es": "Crear nombres",
                    "de": "Namen erstellen",
                    "nl": "Namen maken"
                },
                {
                    "en": "Deleting entities",
                    "es": "Eliminar entidades",
                    "de": "Entitäten löschen",
                    "nl": "Entiteiten verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "NER identifies and classifies named entities like people, organizations, and locations.",
                "es": "NER identifica y clasifica entidades como personas, organizaciones y lugares.",
                "de": "NER identifiziert und klassifiziert Entitäten wie Personen, Organisationen und Orte.",
                "nl": "NER identificeert en classificeert entiteiten zoals personen, organisaties en locaties."
            }
        },
        {
            "question": {
                "en": "What is sentiment analysis?",
                "es": "¿Qué es el análisis de sentimiento?",
                "de": "Was ist Sentimentanalyse?",
                "nl": "Wat is sentimentanalyse?"
            },
            "options": [
                {
                    "en": "Detecting emotions in text",
                    "es": "Detectar emociones en texto",
                    "de": "Emotionen in Text erkennen",
                    "nl": "Emoties in tekst detecteren"
                },
                {
                    "en": "Counting sentences",
                    "es": "Contar oraciones",
                    "de": "Sätze zählen",
                    "nl": "Zinnen tellen"
                },
                {
                    "en": "Fixing grammar",
                    "es": "Corregir gramática",
                    "de": "Grammatik korrigieren",
                    "nl": "Grammatica corrigeren"
                },
                {
                    "en": "Translating text",
                    "es": "Traducir texto",
                    "de": "Text übersetzen",
                    "nl": "Tekst vertalen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sentiment analysis determines whether text expresses positive, negative, or neutral feelings.",
                "es": "El análisis de sentimiento determina si el texto expresa sentimientos positivos o negativos.",
                "de": "Sentimentanalyse bestimmt, ob Text positive, negative oder neutrale Gefühle ausdrückt.",
                "nl": "Sentimentanalyse bepaalt of tekst positieve, negatieve of neutrale gevoelens uitdrukt."
            }
        },
        {
            "question": {
                "en": "What are word embeddings?",
                "es": "¿Qué son los embeddings de palabras?",
                "de": "Was sind Worteinbettungen?",
                "nl": "Wat zijn woordembeddings?"
            },
            "options": [
                {
                    "en": "Numerical representations of words",
                    "es": "Representaciones numéricas de palabras",
                    "de": "Numerische Darstellungen von Wörtern",
                    "nl": "Numerieke representaties van woorden"
                },
                {
                    "en": "Word definitions",
                    "es": "Definiciones de palabras",
                    "de": "Wortdefinitionen",
                    "nl": "Woorddefinities"
                },
                {
                    "en": "Spelling rules",
                    "es": "Reglas de ortografía",
                    "de": "Rechtschreibregeln",
                    "nl": "Spellingregels"
                },
                {
                    "en": "Grammar patterns",
                    "es": "Patrones gramaticales",
                    "de": "Grammatikmuster",
                    "nl": "Grammaticapatronen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Word embeddings represent words as dense numerical vectors capturing semantic meaning.",
                "es": "Los embeddings representan palabras como vectores numéricos que capturan significado.",
                "de": "Worteinbettungen stellen Wörter als dichte numerische Vektoren dar.",
                "nl": "Woordembeddings representeren woorden als dichte numerieke vectoren."
            }
        },
        {
            "question": {
                "en": "What is Word2Vec?",
                "es": "¿Qué es Word2Vec?",
                "de": "Was ist Word2Vec?",
                "nl": "Wat is Word2Vec?"
            },
            "options": [
                {
                    "en": "A word embedding method",
                    "es": "Un método de embeddings de palabras",
                    "de": "Eine Worteinbettungsmethode",
                    "nl": "Een woordembedding-methode"
                },
                {
                    "en": "A word counter",
                    "es": "Un contador de palabras",
                    "de": "Ein Wortzähler",
                    "nl": "Een woordenteller"
                },
                {
                    "en": "A translation tool",
                    "es": "Una herramienta de traducción",
                    "de": "Ein Übersetzungstool",
                    "nl": "Een vertaaltool"
                },
                {
                    "en": "A grammar checker",
                    "es": "Un corrector gramatical",
                    "de": "Ein Grammatikprüfer",
                    "nl": "Een grammaticacontrole"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Word2Vec learns word embeddings by predicting surrounding words in context.",
                "es": "Word2Vec aprende embeddings prediciendo palabras del contexto.",
                "de": "Word2Vec lernt Worteinbettungen durch Vorhersage umgebender Wörter.",
                "nl": "Word2Vec leert woordembeddings door omliggende woorden te voorspellen."
            }
        },
        {
            "question": {
                "en": "What is text preprocessing?",
                "es": "¿Qué es el preprocesamiento de texto?",
                "de": "Was ist Textvorverarbeitung?",
                "nl": "Wat is tekstvoorverwerking?"
            },
            "options": [
                {
                    "en": "Cleaning text before analysis",
                    "es": "Limpiar texto antes del análisis",
                    "de": "Text vor der Analyse bereinigen",
                    "nl": "Tekst opschonen voor analyse"
                },
                {
                    "en": "Writing new text",
                    "es": "Escribir texto nuevo",
                    "de": "Neuen Text schreiben",
                    "nl": "Nieuwe tekst schrijven"
                },
                {
                    "en": "Printing text",
                    "es": "Imprimir texto",
                    "de": "Text drucken",
                    "nl": "Tekst afdrukken"
                },
                {
                    "en": "Deleting all text",
                    "es": "Eliminar todo el texto",
                    "de": "Allen Text löschen",
                    "nl": "Alle tekst verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Text preprocessing cleans and standardizes raw text before NLP analysis.",
                "es": "El preprocesamiento limpia y estandariza texto antes del análisis.",
                "de": "Textvorverarbeitung bereinigt und standardisiert Text vor der Analyse.",
                "nl": "Tekstvoorverwerking schoont tekst op en standaardiseert voor analyse."
            }
        },
        {
            "question": {
                "en": "What is lowercasing in NLP?",
                "es": "¿Qué es la conversión a minúsculas en PLN?",
                "de": "Was ist Kleinschreibung im NLP?",
                "nl": "Wat is lowercase-conversie in NLP?"
            },
            "options": [
                {
                    "en": "Converting all text to lowercase",
                    "es": "Convertir todo a minúsculas",
                    "de": "Allen Text kleinschreiben",
                    "nl": "Alle tekst naar kleine letters"
                },
                {
                    "en": "Making text bigger",
                    "es": "Hacer texto más grande",
                    "de": "Text vergrößern",
                    "nl": "Tekst groter maken"
                },
                {
                    "en": "Adding capital letters",
                    "es": "Agregar mayúsculas",
                    "de": "Großbuchstaben hinzufügen",
                    "nl": "Hoofdletters toevoegen"
                },
                {
                    "en": "Removing vowels",
                    "es": "Eliminar vocales",
                    "de": "Vokale entfernen",
                    "nl": "Klinkers verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Lowercasing converts all characters to lowercase so that 'The' and 'the' are treated equally.",
                "es": "Convertir a minúsculas trata 'El' y 'el' de igual manera.",
                "de": "Kleinschreibung behandelt 'Der' und 'der' gleich.",
                "nl": "Lowercase-conversie behandelt 'De' en 'de' gelijk."
            }
        },
        {
            "question": {
                "en": "What is a bag of words?",
                "es": "¿Qué es una bolsa de palabras?",
                "de": "Was ist ein Bag of Words?",
                "nl": "Wat is een bag of words?"
            },
            "options": [
                {
                    "en": "A text representation ignoring order",
                    "es": "Representación de texto sin orden",
                    "de": "Textdarstellung ohne Reihenfolge",
                    "nl": "Tekstrepresentatie zonder volgorde"
                },
                {
                    "en": "A shopping bag with labels",
                    "es": "Una bolsa con etiquetas",
                    "de": "Eine Tasche mit Labels",
                    "nl": "Een tas met labels"
                },
                {
                    "en": "A list of grammar rules",
                    "es": "Una lista de reglas",
                    "de": "Eine Liste von Regeln",
                    "nl": "Een lijst van regels"
                },
                {
                    "en": "A translation method",
                    "es": "Un método de traducción",
                    "de": "Eine Übersetzungsmethode",
                    "nl": "Een vertaalmethode"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Bag of words represents text as word counts, ignoring grammar and word order.",
                "es": "Bolsa de palabras representa texto como conteo de palabras sin orden.",
                "de": "Bag of Words stellt Text als Worthäufigkeiten dar, ohne Reihenfolge.",
                "nl": "Bag of words representeert tekst als woordtellingen, zonder volgorde."
            }
        },
        {
            "question": {
                "en": "What is text classification?",
                "es": "¿Qué es la clasificación de texto?",
                "de": "Was ist Textklassifikation?",
                "nl": "Wat is tekstclassificatie?"
            },
            "options": [
                {
                    "en": "Assigning categories to text",
                    "es": "Asignar categorías al texto",
                    "de": "Text Kategorien zuordnen",
                    "nl": "Categorieën toewijzen aan tekst"
                },
                {
                    "en": "Sorting alphabetically",
                    "es": "Clasificar alfabéticamente",
                    "de": "Alphabetisch sortieren",
                    "nl": "Alfabetisch sorteren"
                },
                {
                    "en": "Deleting text",
                    "es": "Eliminar texto",
                    "de": "Text löschen",
                    "nl": "Tekst verwijderen"
                },
                {
                    "en": "Formatting paragraphs",
                    "es": "Formatear párrafos",
                    "de": "Absätze formatieren",
                    "nl": "Alinea's opmaken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Text classification assigns predefined categories to text documents automatically.",
                "es": "La clasificación asigna categorías predefinidas a documentos automáticamente.",
                "de": "Textklassifikation ordnet Dokumenten automatisch vordefinierte Kategorien zu.",
                "nl": "Tekstclassificatie wijst automatisch categorieën toe aan documenten."
            }
        },
        {
            "question": {
                "en": "What is spam filtering?",
                "es": "¿Qué es el filtrado de spam?",
                "de": "Was ist Spamfilterung?",
                "nl": "Wat is spamfiltering?"
            },
            "options": [
                {
                    "en": "Detecting unwanted emails using NLP",
                    "es": "Detectar correos no deseados con PLN",
                    "de": "Unerwünschte E-Mails erkennen",
                    "nl": "Ongewenste e-mails detecteren met NLP"
                },
                {
                    "en": "Sending more emails",
                    "es": "Enviar más correos",
                    "de": "Mehr E-Mails senden",
                    "nl": "Meer e-mails verzenden"
                },
                {
                    "en": "Formatting emails",
                    "es": "Formatear correos",
                    "de": "E-Mails formatieren",
                    "nl": "E-mails opmaken"
                },
                {
                    "en": "Printing emails",
                    "es": "Imprimir correos",
                    "de": "E-Mails drucken",
                    "nl": "E-mails afdrukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Spam filtering uses NLP to classify emails as spam or legitimate messages.",
                "es": "El filtrado de spam usa PLN para clasificar correos como spam o legítimos.",
                "de": "Spamfilterung nutzt NLP um E-Mails als Spam oder legitim einzuordnen.",
                "nl": "Spamfiltering gebruikt NLP om e-mails als spam of legitiem te classificeren."
            }
        },
        {
            "question": {
                "en": "What is machine translation?",
                "es": "¿Qué es la traducción automática?",
                "de": "Was ist maschinelle Übersetzung?",
                "nl": "Wat is automatische vertaling?"
            },
            "options": [
                {
                    "en": "Automatically translating between languages",
                    "es": "Traducir automáticamente entre idiomas",
                    "de": "Automatisch zwischen Sprachen übersetzen",
                    "nl": "Automatisch vertalen tussen talen"
                },
                {
                    "en": "Manual translation",
                    "es": "Traducción manual",
                    "de": "Manuelle Übersetzung",
                    "nl": "Handmatige vertaling"
                },
                {
                    "en": "Learning grammar",
                    "es": "Aprender gramática",
                    "de": "Grammatik lernen",
                    "nl": "Grammatica leren"
                },
                {
                    "en": "Writing bilingual books",
                    "es": "Escribir libros bilingües",
                    "de": "Zweisprachige Bücher schreiben",
                    "nl": "Tweetalige boeken schrijven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Machine translation automatically converts text from one language to another.",
                "es": "La traducción automática convierte texto de un idioma a otro.",
                "de": "Maschinelle Übersetzung konvertiert Text automatisch zwischen Sprachen.",
                "nl": "Automatische vertaling zet tekst automatisch om tussen talen."
            }
        },
        {
            "question": {
                "en": "What is Google Translate an example of?",
                "es": "¿De qué es ejemplo Google Translate?",
                "de": "Wofür ist Google Translate ein Beispiel?",
                "nl": "Waarvan is Google Translate een voorbeeld?"
            },
            "options": [
                {
                    "en": "Machine translation",
                    "es": "Traducción automática",
                    "de": "Maschinelle Übersetzung",
                    "nl": "Automatische vertaling"
                },
                {
                    "en": "Spell checking",
                    "es": "Corrección ortográfica",
                    "de": "Rechtschreibprüfung",
                    "nl": "Spellingcontrole"
                },
                {
                    "en": "Text formatting",
                    "es": "Formateo de texto",
                    "de": "Textformatierung",
                    "nl": "Tekstopmaak"
                },
                {
                    "en": "Voice recording",
                    "es": "Grabación de voz",
                    "de": "Sprachaufnahme",
                    "nl": "Stemopname"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Google Translate is a widely used machine translation system powered by NLP.",
                "es": "Google Translate es un sistema de traducción automática impulsado por PLN.",
                "de": "Google Translate ist ein maschinelles Übersetzungssystem basierend auf NLP.",
                "nl": "Google Translate is een automatisch vertaalsysteem aangedreven door NLP."
            }
        },
        {
            "question": {
                "en": "What is a chatbot?",
                "es": "¿Qué es un chatbot?",
                "de": "Was ist ein Chatbot?",
                "nl": "Wat is een chatbot?"
            },
            "options": [
                {
                    "en": "A program that converses with humans",
                    "es": "Un programa que conversa con humanos",
                    "de": "Ein Programm das mit Menschen spricht",
                    "nl": "Een programma dat met mensen praat"
                },
                {
                    "en": "A robot that builds things",
                    "es": "Un robot que construye",
                    "de": "Ein Roboter der baut",
                    "nl": "Een robot die bouwt"
                },
                {
                    "en": "A search engine",
                    "es": "Un motor de búsqueda",
                    "de": "Eine Suchmaschine",
                    "nl": "Een zoekmachine"
                },
                {
                    "en": "A video game",
                    "es": "Un videojuego",
                    "de": "Ein Videospiel",
                    "nl": "Een videospel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A chatbot uses NLP to simulate conversation with users in natural language.",
                "es": "Un chatbot usa PLN para simular conversación con usuarios.",
                "de": "Ein Chatbot nutzt NLP um Gespräche mit Benutzern zu simulieren.",
                "nl": "Een chatbot gebruikt NLP om gesprekken met gebruikers te simuleren."
            }
        },
        {
            "question": {
                "en": "What is text mining?",
                "es": "¿Qué es la minería de texto?",
                "de": "Was ist Text Mining?",
                "nl": "Wat is text mining?"
            },
            "options": [
                {
                    "en": "Extracting useful information from text",
                    "es": "Extraer información útil del texto",
                    "de": "Nützliche Informationen aus Text extrahieren",
                    "nl": "Nuttige informatie uit tekst halen"
                },
                {
                    "en": "Mining for minerals",
                    "es": "Minería de minerales",
                    "de": "Bergbau",
                    "nl": "Mijnbouw"
                },
                {
                    "en": "Printing documents",
                    "es": "Imprimir documentos",
                    "de": "Dokumente drucken",
                    "nl": "Documenten afdrukken"
                },
                {
                    "en": "Writing reports",
                    "es": "Escribir informes",
                    "de": "Berichte schreiben",
                    "nl": "Rapporten schrijven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Text mining discovers patterns and useful information from large text collections.",
                "es": "La minería de texto descubre patrones e información de grandes colecciones.",
                "de": "Text Mining entdeckt Muster und nützliche Informationen aus Textsammlungen.",
                "nl": "Text mining ontdekt patronen en nuttige informatie uit grote tekstverzamelingen."
            }
        },
        {
            "question": {
                "en": "What is information retrieval?",
                "es": "¿Qué es la recuperación de información?",
                "de": "Was ist Informationsabruf?",
                "nl": "Wat is informatie ophalen?"
            },
            "options": [
                {
                    "en": "Finding relevant documents from a collection",
                    "es": "Encontrar documentos relevantes",
                    "de": "Relevante Dokumente finden",
                    "nl": "Relevante documenten vinden"
                },
                {
                    "en": "Deleting information",
                    "es": "Eliminar información",
                    "de": "Informationen löschen",
                    "nl": "Informatie verwijderen"
                },
                {
                    "en": "Creating databases",
                    "es": "Crear bases de datos",
                    "de": "Datenbanken erstellen",
                    "nl": "Databases maken"
                },
                {
                    "en": "Writing reports",
                    "es": "Escribir informes",
                    "de": "Berichte schreiben",
                    "nl": "Rapporten schrijven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Information retrieval finds relevant documents matching a user's query from a collection.",
                "es": "La recuperación encuentra documentos relevantes que coinciden con una consulta.",
                "de": "Informationsabruf findet relevante Dokumente passend zur Benutzeranfrage.",
                "nl": "Informatie ophalen vindt relevante documenten die overeenkomen met een zoekvraag."
            }
        },
        {
            "question": {
                "en": "What is a search engine an example of?",
                "es": "¿De qué es ejemplo un motor de búsqueda?",
                "de": "Wofür ist eine Suchmaschine ein Beispiel?",
                "nl": "Waarvan is een zoekmachine een voorbeeld?"
            },
            "options": [
                {
                    "en": "Information retrieval",
                    "es": "Recuperación de información",
                    "de": "Informationsabruf",
                    "nl": "Informatie ophalen"
                },
                {
                    "en": "Text editing",
                    "es": "Edición de texto",
                    "de": "Textbearbeitung",
                    "nl": "Tekstbewerking"
                },
                {
                    "en": "Voice recognition",
                    "es": "Reconocimiento de voz",
                    "de": "Spracherkennung",
                    "nl": "Spraakherkenning"
                },
                {
                    "en": "Image processing",
                    "es": "Procesamiento de imágenes",
                    "de": "Bildverarbeitung",
                    "nl": "Beeldverwerking"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Search engines like Google use information retrieval to find relevant web pages.",
                "es": "Los motores de búsqueda usan recuperación de información.",
                "de": "Suchmaschinen nutzen Informationsabruf um relevante Seiten zu finden.",
                "nl": "Zoekmachines gebruiken informatie ophalen om relevante pagina's te vinden."
            }
        },
        {
            "question": {
                "en": "What is topic modeling?",
                "es": "¿Qué es el modelado de temas?",
                "de": "Was ist Topic Modeling?",
                "nl": "Wat is topic modeling?"
            },
            "options": [
                {
                    "en": "Discovering topics in a document collection",
                    "es": "Descubrir temas en una colección",
                    "de": "Themen in einer Sammlung entdecken",
                    "nl": "Onderwerpen ontdekken in een verzameling"
                },
                {
                    "en": "Writing about topics",
                    "es": "Escribir sobre temas",
                    "de": "Über Themen schreiben",
                    "nl": "Schrijven over onderwerpen"
                },
                {
                    "en": "Counting topics",
                    "es": "Contar temas",
                    "de": "Themen zählen",
                    "nl": "Onderwerpen tellen"
                },
                {
                    "en": "Deleting topics",
                    "es": "Eliminar temas",
                    "de": "Themen löschen",
                    "nl": "Onderwerpen verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Topic modeling automatically discovers abstract topics across a collection of documents.",
                "es": "El modelado de temas descubre temas abstractos en documentos.",
                "de": "Topic Modeling entdeckt automatisch abstrakte Themen in Dokumenten.",
                "nl": "Topic modeling ontdekt automatisch abstracte onderwerpen in documenten."
            }
        },
        {
            "question": {
                "en": "What is speech recognition?",
                "es": "¿Qué es el reconocimiento de voz?",
                "de": "Was ist Spracherkennung?",
                "nl": "Wat is spraakherkenning?"
            },
            "options": [
                {
                    "en": "Converting spoken words to text",
                    "es": "Convertir voz a texto",
                    "de": "Gesprochenes in Text umwandeln",
                    "nl": "Spraak omzetten naar tekst"
                },
                {
                    "en": "Recording music",
                    "es": "Grabar música",
                    "de": "Musik aufnehmen",
                    "nl": "Muziek opnemen"
                },
                {
                    "en": "Playing audio files",
                    "es": "Reproducir archivos de audio",
                    "de": "Audiodateien abspielen",
                    "nl": "Audiobestanden afspelen"
                },
                {
                    "en": "Editing videos",
                    "es": "Editar videos",
                    "de": "Videos bearbeiten",
                    "nl": "Video's bewerken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Speech recognition converts spoken language into written text using NLP techniques.",
                "es": "El reconocimiento de voz convierte lenguaje hablado en texto escrito.",
                "de": "Spracherkennung wandelt gesprochene Sprache in geschriebenen Text um.",
                "nl": "Spraakherkenning zet gesproken taal om in geschreven tekst."
            }
        },
        {
            "question": {
                "en": "What is Siri an example of?",
                "es": "¿De qué es ejemplo Siri?",
                "de": "Wofür ist Siri ein Beispiel?",
                "nl": "Waarvan is Siri een voorbeeld?"
            },
            "options": [
                {
                    "en": "A virtual assistant using NLP",
                    "es": "Un asistente virtual con PLN",
                    "de": "Ein virtueller Assistent mit NLP",
                    "nl": "Een virtuele assistent met NLP"
                },
                {
                    "en": "A text editor",
                    "es": "Un editor de texto",
                    "de": "Ein Texteditor",
                    "nl": "Een teksteditor"
                },
                {
                    "en": "A web browser",
                    "es": "Un navegador web",
                    "de": "Ein Webbrowser",
                    "nl": "Een webbrowser"
                },
                {
                    "en": "A calculator",
                    "es": "Una calculadora",
                    "de": "Ein Taschenrechner",
                    "nl": "Een rekenmachine"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Siri is a virtual assistant that uses speech recognition and NLP to understand commands.",
                "es": "Siri es un asistente virtual que usa reconocimiento de voz y PLN.",
                "de": "Siri ist ein virtueller Assistent der Spracherkennung und NLP nutzt.",
                "nl": "Siri is een virtuele assistent die spraakherkenning en NLP gebruikt."
            }
        },
        {
            "question": {
                "en": "What is text-to-speech?",
                "es": "¿Qué es texto a voz?",
                "de": "Was ist Text-to-Speech?",
                "nl": "Wat is tekst-naar-spraak?"
            },
            "options": [
                {
                    "en": "Converting written text to audio",
                    "es": "Convertir texto escrito a audio",
                    "de": "Geschriebenen Text in Audio umwandeln",
                    "nl": "Geschreven tekst omzetten naar audio"
                },
                {
                    "en": "Reading books aloud manually",
                    "es": "Leer libros en voz alta",
                    "de": "Bücher vorlesen",
                    "nl": "Boeken voorlezen"
                },
                {
                    "en": "Recording conversations",
                    "es": "Grabar conversaciones",
                    "de": "Gespräche aufnehmen",
                    "nl": "Gesprekken opnemen"
                },
                {
                    "en": "Writing subtitles",
                    "es": "Escribir subtítulos",
                    "de": "Untertitel schreiben",
                    "nl": "Ondertiteling schrijven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Text-to-speech synthesis converts written text into natural-sounding spoken audio.",
                "es": "Texto a voz convierte texto escrito en audio hablado natural.",
                "de": "Text-to-Speech wandelt geschriebenen Text in natürliche Sprache um.",
                "nl": "Tekst-naar-spraak zet geschreven tekst om in natuurlijk klinkend geluid."
            }
        },
        {
            "question": {
                "en": "What is a vocabulary in NLP?",
                "es": "¿Qué es un vocabulario en PLN?",
                "de": "Was ist ein Vokabular im NLP?",
                "nl": "Wat is een vocabulaire in NLP?"
            },
            "options": [
                {
                    "en": "The set of unique words in a text",
                    "es": "El conjunto de palabras únicas",
                    "de": "Die Menge einzigartiger Wörter",
                    "nl": "De verzameling unieke woorden"
                },
                {
                    "en": "A dictionary app",
                    "es": "Una aplicación de diccionario",
                    "de": "Eine Wörterbuch-App",
                    "nl": "Een woordenboek-app"
                },
                {
                    "en": "A grammar book",
                    "es": "Un libro de gramática",
                    "de": "Ein Grammatikbuch",
                    "nl": "Een grammaticaboek"
                },
                {
                    "en": "A translation guide",
                    "es": "Una guía de traducción",
                    "de": "Ein Übersetzungsleitfaden",
                    "nl": "Een vertaalgids"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Vocabulary is the complete set of unique words or tokens in a text or corpus.",
                "es": "Vocabulario es el conjunto de palabras únicas en un texto o corpus.",
                "de": "Vokabular ist die Menge aller einzigartigen Wörter in einem Text.",
                "nl": "Vocabulaire is de verzameling unieke woorden in een tekst of corpus."
            }
        },
        {
            "question": {
                "en": "What is a document in NLP?",
                "es": "¿Qué es un documento en PLN?",
                "de": "Was ist ein Dokument im NLP?",
                "nl": "Wat is een document in NLP?"
            },
            "options": [
                {
                    "en": "Any piece of text being analyzed",
                    "es": "Cualquier texto analizado",
                    "de": "Jeder analysierte Text",
                    "nl": "Elke tekst die geanalyseerd wordt"
                },
                {
                    "en": "Only a PDF file",
                    "es": "Solo un archivo PDF",
                    "de": "Nur eine PDF-Datei",
                    "nl": "Alleen een PDF-bestand"
                },
                {
                    "en": "A printed paper only",
                    "es": "Solo un papel impreso",
                    "de": "Nur ein gedrucktes Papier",
                    "nl": "Alleen een gedrukt papier"
                },
                {
                    "en": "A book only",
                    "es": "Solo un libro",
                    "de": "Nur ein Buch",
                    "nl": "Alleen een boek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In NLP, a document can be any unit of text, from a tweet to an entire book.",
                "es": "En PLN, un documento es cualquier unidad de texto, desde un tweet hasta un libro.",
                "de": "Im NLP kann ein Dokument jede Texteinheit sein, von einem Tweet bis zu einem Buch.",
                "nl": "In NLP kan een document elke teksteenheid zijn, van een tweet tot een boek."
            }
        },
        {
            "question": {
                "en": "What is text normalization?",
                "es": "¿Qué es la normalización de texto?",
                "de": "Was ist Textnormalisierung?",
                "nl": "Wat is tekstnormalisatie?"
            },
            "options": [
                {
                    "en": "Converting text to a standard form",
                    "es": "Convertir texto a forma estándar",
                    "de": "Text in Standardform umwandeln",
                    "nl": "Tekst omzetten naar standaardvorm"
                },
                {
                    "en": "Making text longer",
                    "es": "Hacer texto más largo",
                    "de": "Text verlängern",
                    "nl": "Tekst verlengen"
                },
                {
                    "en": "Encrypting text",
                    "es": "Cifrar texto",
                    "de": "Text verschlüsseln",
                    "nl": "Tekst versleutelen"
                },
                {
                    "en": "Deleting text",
                    "es": "Eliminar texto",
                    "de": "Text löschen",
                    "nl": "Tekst verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Text normalization standardizes text by lowercasing, expanding abbreviations, and removing noise.",
                "es": "La normalización estandariza texto con minúsculas, expansión y eliminación de ruido.",
                "de": "Textnormalisierung standardisiert durch Kleinschreibung und Rauschentfernung.",
                "nl": "Tekstnormalisatie standaardiseert door lowercase, afkortingen en ruis verwijderen."
            }
        },
        {
            "question": {
                "en": "What is noise removal in text processing?",
                "es": "¿Qué es la eliminación de ruido?",
                "de": "Was ist Rauschentfernung?",
                "nl": "Wat is ruisverwijdering?"
            },
            "options": [
                {
                    "en": "Removing irrelevant characters and markup",
                    "es": "Eliminar caracteres irrelevantes",
                    "de": "Irrelevante Zeichen entfernen",
                    "nl": "Irrelevante tekens verwijderen"
                },
                {
                    "en": "Adding background music",
                    "es": "Agregar música de fondo",
                    "de": "Hintergrundmusik hinzufügen",
                    "nl": "Achtergrondmuziek toevoegen"
                },
                {
                    "en": "Making text louder",
                    "es": "Hacer texto más fuerte",
                    "de": "Text lauter machen",
                    "nl": "Tekst luider maken"
                },
                {
                    "en": "Recording silence",
                    "es": "Grabar silencio",
                    "de": "Stille aufnehmen",
                    "nl": "Stilte opnemen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Noise removal cleans text by removing HTML tags, special characters, and other irrelevant content.",
                "es": "La eliminación de ruido limpia texto quitando etiquetas HTML y caracteres especiales.",
                "de": "Rauschentfernung bereinigt Text durch Entfernen von HTML-Tags und Sonderzeichen.",
                "nl": "Ruisverwijdering schoont tekst op door HTML-tags en speciale tekens te verwijderen."
            }
        },
        {
            "question": {
                "en": "What is a regular expression?",
                "es": "¿Qué es una expresión regular?",
                "de": "Was ist ein regulärer Ausdruck?",
                "nl": "Wat is een reguliere expressie?"
            },
            "options": [
                {
                    "en": "A pattern for searching text",
                    "es": "Un patrón para buscar texto",
                    "de": "Ein Muster zum Textsuchen",
                    "nl": "Een patroon voor het zoeken in tekst"
                },
                {
                    "en": "A math formula",
                    "es": "Una fórmula matemática",
                    "de": "Eine mathematische Formel",
                    "nl": "Een wiskundige formule"
                },
                {
                    "en": "A grammar rule",
                    "es": "Una regla de gramática",
                    "de": "Eine Grammatikregel",
                    "nl": "Een grammaticaregel"
                },
                {
                    "en": "A file format",
                    "es": "Un formato de archivo",
                    "de": "Ein Dateiformat",
                    "nl": "Een bestandsformaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Regular expressions define patterns to search, match, and manipulate text efficiently.",
                "es": "Las expresiones regulares definen patrones para buscar y manipular texto.",
                "de": "Reguläre Ausdrücke definieren Muster zum effizienten Suchen und Manipulieren von Text.",
                "nl": "Reguliere expressies definiëren patronen om tekst efficiënt te zoeken en manipuleren."
            }
        },
        {
            "question": {
                "en": "What is word frequency analysis?",
                "es": "¿Qué es el análisis de frecuencia?",
                "de": "Was ist Worthäufigkeitsanalyse?",
                "nl": "Wat is woordfrequentie-analyse?"
            },
            "options": [
                {
                    "en": "Counting how often words appear",
                    "es": "Contar con qué frecuencia aparecen",
                    "de": "Zählen wie oft Wörter vorkommen",
                    "nl": "Tellen hoe vaak woorden voorkomen"
                },
                {
                    "en": "Measuring word size",
                    "es": "Medir tamaño de palabras",
                    "de": "Wortgröße messen",
                    "nl": "Woordgrootte meten"
                },
                {
                    "en": "Testing word pronunciation",
                    "es": "Probar pronunciación",
                    "de": "Aussprache testen",
                    "nl": "Uitspraak testen"
                },
                {
                    "en": "Sorting words by color",
                    "es": "Clasificar por color",
                    "de": "Nach Farbe sortieren",
                    "nl": "Sorteren op kleur"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Word frequency analysis counts word occurrences to identify important or common terms.",
                "es": "El análisis de frecuencia cuenta ocurrencias para identificar términos importantes.",
                "de": "Worthäufigkeitsanalyse zählt Vorkommen um wichtige Begriffe zu identifizieren.",
                "nl": "Woordfrequentie-analyse telt voorkomens om belangrijke termen te identificeren."
            }
        },
        {
            "question": {
                "en": "What is Zipf's law in NLP?",
                "es": "¿Qué es la ley de Zipf en PLN?",
                "de": "Was ist Zipfs Gesetz im NLP?",
                "nl": "Wat is de wet van Zipf in NLP?"
            },
            "options": [
                {
                    "en": "Few words are very frequent, most are rare",
                    "es": "Pocas palabras son frecuentes, la mayoría raras",
                    "de": "Wenige Wörter sind häufig, die meisten selten",
                    "nl": "Weinig woorden zijn frequent, de meeste zeldzaam"
                },
                {
                    "en": "All words appear equally often",
                    "es": "Todas aparecen igual",
                    "de": "Alle Wörter kommen gleich oft vor",
                    "nl": "Alle woorden komen even vaak voor"
                },
                {
                    "en": "Long words are more common",
                    "es": "Palabras largas son más comunes",
                    "de": "Lange Wörter sind häufiger",
                    "nl": "Lange woorden komen vaker voor"
                },
                {
                    "en": "Short words are always rare",
                    "es": "Palabras cortas son raras",
                    "de": "Kurze Wörter sind selten",
                    "nl": "Korte woorden zijn zeldzaam"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Zipf's law states that word frequency is inversely proportional to its rank.",
                "es": "La ley de Zipf dice que la frecuencia es inversamente proporcional al rango.",
                "de": "Zipfs Gesetz besagt, dass Worthäufigkeit umgekehrt proportional zum Rang ist.",
                "nl": "De wet van Zipf stelt dat woordfrequentie omgekeerd evenredig is aan de rang."
            }
        },
        {
            "question": {
                "en": "What is sentence segmentation?",
                "es": "¿Qué es la segmentación de oraciones?",
                "de": "Was ist Satzsegmentierung?",
                "nl": "Wat is zinssegmentatie?"
            },
            "options": [
                {
                    "en": "Splitting text into sentences",
                    "es": "Dividir texto en oraciones",
                    "de": "Text in Sätze aufteilen",
                    "nl": "Tekst splitsen in zinnen"
                },
                {
                    "en": "Combining sentences",
                    "es": "Combinar oraciones",
                    "de": "Sätze verbinden",
                    "nl": "Zinnen combineren"
                },
                {
                    "en": "Translating sentences",
                    "es": "Traducir oraciones",
                    "de": "Sätze übersetzen",
                    "nl": "Zinnen vertalen"
                },
                {
                    "en": "Deleting sentences",
                    "es": "Eliminar oraciones",
                    "de": "Sätze löschen",
                    "nl": "Zinnen verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sentence segmentation identifies boundaries where sentences begin and end in text.",
                "es": "La segmentación identifica dónde comienzan y terminan las oraciones.",
                "de": "Satzsegmentierung erkennt Grenzen wo Sätze beginnen und enden.",
                "nl": "Zinssegmentatie identificeert grenzen waar zinnen beginnen en eindigen."
            }
        },
        {
            "question": {
                "en": "What is a word cloud used for?",
                "es": "¿Para qué se usa una nube de palabras?",
                "de": "Wofür wird eine Wortwolke verwendet?",
                "nl": "Waarvoor wordt een woordwolk gebruikt?"
            },
            "options": [
                {
                    "en": "Visualizing word frequencies",
                    "es": "Visualizar frecuencias de palabras",
                    "de": "Worthäufigkeiten visualisieren",
                    "nl": "Woordfrequenties visualiseren"
                },
                {
                    "en": "Storing data in the cloud",
                    "es": "Almacenar datos en la nube",
                    "de": "Daten in der Cloud speichern",
                    "nl": "Data in de cloud opslaan"
                },
                {
                    "en": "Weather forecasting",
                    "es": "Pronóstico del tiempo",
                    "de": "Wettervorhersage",
                    "nl": "Weersvoorspelling"
                },
                {
                    "en": "Drawing pictures",
                    "es": "Dibujar imágenes",
                    "de": "Bilder zeichnen",
                    "nl": "Plaatjes tekenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A word cloud visually displays word frequencies where larger words appear more often.",
                "es": "Una nube de palabras muestra frecuencias donde palabras grandes aparecen más.",
                "de": "Eine Wortwolke zeigt Häufigkeiten, größere Wörter kommen öfter vor.",
                "nl": "Een woordwolk toont frequenties waarbij grotere woorden vaker voorkomen."
            }
        },
        {
            "question": {
                "en": "What is text summarization?",
                "es": "¿Qué es el resumen de texto?",
                "de": "Was ist Textzusammenfassung?",
                "nl": "Wat is tekstsamenvatting?"
            },
            "options": [
                {
                    "en": "Creating shorter versions of text",
                    "es": "Crear versiones más cortas",
                    "de": "Kürzere Versionen erstellen",
                    "nl": "Kortere versies maken"
                },
                {
                    "en": "Making text longer",
                    "es": "Hacer texto más largo",
                    "de": "Text verlängern",
                    "nl": "Tekst verlengen"
                },
                {
                    "en": "Translating text",
                    "es": "Traducir texto",
                    "de": "Text übersetzen",
                    "nl": "Tekst vertalen"
                },
                {
                    "en": "Formatting text",
                    "es": "Formatear texto",
                    "de": "Text formatieren",
                    "nl": "Tekst opmaken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Text summarization condenses long text into a shorter version preserving key information.",
                "es": "El resumen condensa texto largo en versiones cortas preservando información clave.",
                "de": "Textzusammenfassung verdichtet langen Text zu kürzeren Versionen.",
                "nl": "Tekstsamenvatting condenseeert lange tekst tot kortere versies met kerninfo."
            }
        },
        {
            "question": {
                "en": "What is extractive summarization?",
                "es": "¿Qué es el resumen extractivo?",
                "de": "Was ist extraktive Zusammenfassung?",
                "nl": "Wat is extractieve samenvatting?"
            },
            "options": [
                {
                    "en": "Selecting key sentences from text",
                    "es": "Seleccionar oraciones clave del texto",
                    "de": "Schlüsselsätze aus Text auswählen",
                    "nl": "Kernzinnen selecteren uit tekst"
                },
                {
                    "en": "Writing entirely new content",
                    "es": "Escribir contenido nuevo",
                    "de": "Neuen Inhalt schreiben",
                    "nl": "Nieuwe inhoud schrijven"
                },
                {
                    "en": "Translating summaries",
                    "es": "Traducir resúmenes",
                    "de": "Zusammenfassungen übersetzen",
                    "nl": "Samenvattingen vertalen"
                },
                {
                    "en": "Deleting paragraphs",
                    "es": "Eliminar párrafos",
                    "de": "Absätze löschen",
                    "nl": "Alinea's verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Extractive summarization selects the most important sentences from the original text.",
                "es": "El resumen extractivo selecciona las oraciones más importantes del original.",
                "de": "Extraktive Zusammenfassung wählt die wichtigsten Sätze aus dem Original.",
                "nl": "Extractieve samenvatting selecteert de belangrijkste zinnen uit het origineel."
            }
        },
        {
            "question": {
                "en": "What is abstractive summarization?",
                "es": "¿Qué es el resumen abstractivo?",
                "de": "Was ist abstrakte Zusammenfassung?",
                "nl": "Wat is abstractieve samenvatting?"
            },
            "options": [
                {
                    "en": "Generating new sentences for the summary",
                    "es": "Generar nuevas oraciones para el resumen",
                    "de": "Neue Sätze für die Zusammenfassung erstellen",
                    "nl": "Nieuwe zinnen genereren voor de samenvatting"
                },
                {
                    "en": "Copying exact sentences",
                    "es": "Copiar oraciones exactas",
                    "de": "Exakte Sätze kopieren",
                    "nl": "Exacte zinnen kopiëren"
                },
                {
                    "en": "Deleting random text",
                    "es": "Eliminar texto al azar",
                    "de": "Zufälligen Text löschen",
                    "nl": "Willekeurige tekst verwijderen"
                },
                {
                    "en": "Translating the original",
                    "es": "Traducir el original",
                    "de": "Das Original übersetzen",
                    "nl": "Het origineel vertalen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Abstractive summarization generates new sentences that capture the key ideas of the text.",
                "es": "El resumen abstractivo genera nuevas oraciones que capturan ideas clave.",
                "de": "Abstrakte Zusammenfassung generiert neue Sätze die Kernideen erfassen.",
                "nl": "Abstractieve samenvatting genereert nieuwe zinnen die kernideeën vastleggen."
            }
        },
        {
            "question": {
                "en": "What is question answering in NLP?",
                "es": "¿Qué es respuesta a preguntas en PLN?",
                "de": "Was ist Fragebeantwortung im NLP?",
                "nl": "Wat is vraagbeantwoording in NLP?"
            },
            "options": [
                {
                    "en": "Finding answers to questions from text",
                    "es": "Encontrar respuestas en texto",
                    "de": "Antworten aus Text finden",
                    "nl": "Antwoorden vinden in tekst"
                },
                {
                    "en": "Creating quizzes",
                    "es": "Crear cuestionarios",
                    "de": "Quizze erstellen",
                    "nl": "Quizzen maken"
                },
                {
                    "en": "Formatting questions",
                    "es": "Formatear preguntas",
                    "de": "Fragen formatieren",
                    "nl": "Vragen opmaken"
                },
                {
                    "en": "Deleting questions",
                    "es": "Eliminar preguntas",
                    "de": "Fragen löschen",
                    "nl": "Vragen verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Question answering systems find precise answers to questions from text or knowledge bases.",
                "es": "Los sistemas QA encuentran respuestas precisas a preguntas en texto.",
                "de": "Fragebeantwortungssysteme finden präzise Antworten aus Text.",
                "nl": "Vraagbeantwoordingssystemen vinden precieze antwoorden uit tekst."
            }
        },
        {
            "question": {
                "en": "What is coreference resolution?",
                "es": "¿Qué es la resolución de correferencia?",
                "de": "Was ist Koreferenzauflösung?",
                "nl": "Wat is coreferentieresolutie?"
            },
            "options": [
                {
                    "en": "Finding words that refer to the same entity",
                    "es": "Encontrar palabras que refieren a lo mismo",
                    "de": "Wörter finden die sich auf dasselbe beziehen",
                    "nl": "Woorden vinden die naar hetzelfde verwijzen"
                },
                {
                    "en": "Fixing spelling errors",
                    "es": "Corregir errores",
                    "de": "Fehler korrigieren",
                    "nl": "Fouten corrigeren"
                },
                {
                    "en": "Translating text",
                    "es": "Traducir texto",
                    "de": "Text übersetzen",
                    "nl": "Tekst vertalen"
                },
                {
                    "en": "Counting references",
                    "es": "Contar referencias",
                    "de": "Referenzen zählen",
                    "nl": "Referenties tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Coreference resolution identifies when different words refer to the same entity.",
                "es": "La resolución de correferencia identifica cuándo palabras refieren a la misma entidad.",
                "de": "Koreferenzauflösung erkennt, wenn verschiedene Wörter sich auf dasselbe beziehen.",
                "nl": "Coreferentieresolutie herkent wanneer woorden naar dezelfde entiteit verwijzen."
            }
        },
        {
            "question": {
                "en": "What is dependency parsing?",
                "es": "¿Qué es el análisis de dependencias?",
                "de": "Was ist Dependenzparsing?",
                "nl": "Wat is afhankelijkheidsparsing?"
            },
            "options": [
                {
                    "en": "Analyzing grammatical word relationships",
                    "es": "Analizar relaciones gramaticales",
                    "de": "Grammatische Wortbeziehungen analysieren",
                    "nl": "Grammaticale woordrelaties analyseren"
                },
                {
                    "en": "Counting dependencies",
                    "es": "Contar dependencias",
                    "de": "Abhängigkeiten zählen",
                    "nl": "Afhankelijkheden tellen"
                },
                {
                    "en": "Installing software",
                    "es": "Instalar software",
                    "de": "Software installieren",
                    "nl": "Software installeren"
                },
                {
                    "en": "Deleting old files",
                    "es": "Eliminar archivos viejos",
                    "de": "Alte Dateien löschen",
                    "nl": "Oude bestanden verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Dependency parsing analyzes how words in a sentence grammatically relate to each other.",
                "es": "El análisis de dependencias analiza relaciones gramaticales entre palabras.",
                "de": "Dependenzparsing analysiert grammatische Beziehungen zwischen Wörtern.",
                "nl": "Afhankelijkheidsparsing analyseert grammaticale relaties tussen woorden."
            }
        },
        {
            "question": {
                "en": "What is constituency parsing?",
                "es": "¿Qué es el análisis de constituyentes?",
                "de": "Was ist Konstituentenparsing?",
                "nl": "Wat is constituentieparsing?"
            },
            "options": [
                {
                    "en": "Breaking sentences into nested phrases",
                    "es": "Dividir oraciones en frases anidadas",
                    "de": "Sätze in verschachtelte Phrasen zerlegen",
                    "nl": "Zinnen opdelen in geneste zinsdelen"
                },
                {
                    "en": "Counting words",
                    "es": "Contar palabras",
                    "de": "Wörter zählen",
                    "nl": "Woorden tellen"
                },
                {
                    "en": "Translating text",
                    "es": "Traducir texto",
                    "de": "Text übersetzen",
                    "nl": "Tekst vertalen"
                },
                {
                    "en": "Formatting paragraphs",
                    "es": "Formatear párrafos",
                    "de": "Absätze formatieren",
                    "nl": "Alinea's opmaken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Constituency parsing breaks sentences into nested sub-phrases like noun and verb phrases.",
                "es": "El análisis de constituyentes divide oraciones en sub-frases como frases nominales.",
                "de": "Konstituentenparsing zerlegt Sätze in Sub-Phrasen wie Nominal- und Verbalphrasen.",
                "nl": "Constituentieparsing breekt zinnen op in sub-zinsdelen zoals naamwoord- en werkwoordgroepen."
            }
        },
        {
            "question": {
                "en": "What is a parse tree?",
                "es": "¿Qué es un árbol de análisis?",
                "de": "Was ist ein Parsebaum?",
                "nl": "Wat is een ontleedboom?"
            },
            "options": [
                {
                    "en": "A diagram showing sentence structure",
                    "es": "Un diagrama de estructura de oración",
                    "de": "Ein Diagramm der Satzstruktur",
                    "nl": "Een diagram van de zinsstructuur"
                },
                {
                    "en": "A type of tree species",
                    "es": "Una especie de árbol",
                    "de": "Eine Baumart",
                    "nl": "Een boomsoort"
                },
                {
                    "en": "A data storage method",
                    "es": "Un método de almacenamiento",
                    "de": "Eine Speichermethode",
                    "nl": "Een opslagmethode"
                },
                {
                    "en": "A programming language",
                    "es": "Un lenguaje de programación",
                    "de": "Eine Programmiersprache",
                    "nl": "Een programmeertaal"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A parse tree visually represents the syntactic structure of a sentence.",
                "es": "Un árbol de análisis representa la estructura sintáctica de una oración.",
                "de": "Ein Parsebaum stellt die syntaktische Satzstruktur visuell dar.",
                "nl": "Een ontleedboom toont visueel de syntactische structuur van een zin."
            }
        },
        {
            "question": {
                "en": "What is chunking in NLP?",
                "es": "¿Qué es el chunking en PLN?",
                "de": "Was ist Chunking im NLP?",
                "nl": "Wat is chunking in NLP?"
            },
            "options": [
                {
                    "en": "Grouping words into phrases",
                    "es": "Agrupar palabras en frases",
                    "de": "Wörter in Phrasen gruppieren",
                    "nl": "Woorden groeperen in zinsdelen"
                },
                {
                    "en": "Deleting text blocks",
                    "es": "Eliminar bloques de texto",
                    "de": "Textblöcke löschen",
                    "nl": "Tekstblokken verwijderen"
                },
                {
                    "en": "Translating chunks",
                    "es": "Traducir fragmentos",
                    "de": "Abschnitte übersetzen",
                    "nl": "Stukken vertalen"
                },
                {
                    "en": "Counting paragraphs",
                    "es": "Contar párrafos",
                    "de": "Absätze zählen",
                    "nl": "Alinea's tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Chunking groups adjacent words into meaningful phrases like noun or verb phrases.",
                "es": "El chunking agrupa palabras adyacentes en frases significativas.",
                "de": "Chunking gruppiert benachbarte Wörter in bedeutungsvolle Phrasen.",
                "nl": "Chunking groepeert naast elkaar staande woorden in betekenisvolle zinsdelen."
            }
        },
        {
            "question": {
                "en": "What is word sense disambiguation?",
                "es": "¿Qué es la desambiguación de sentido?",
                "de": "Was ist Wortbedeutungsdisambiguierung?",
                "nl": "Wat is woordbetekenis-disambiguatie?"
            },
            "options": [
                {
                    "en": "Determining the correct meaning of a word",
                    "es": "Determinar el significado correcto",
                    "de": "Die korrekte Bedeutung bestimmen",
                    "nl": "De juiste betekenis bepalen"
                },
                {
                    "en": "Making words longer",
                    "es": "Alargar palabras",
                    "de": "Wörter verlängern",
                    "nl": "Woorden verlengen"
                },
                {
                    "en": "Counting word meanings",
                    "es": "Contar significados",
                    "de": "Bedeutungen zählen",
                    "nl": "Betekenissen tellen"
                },
                {
                    "en": "Creating new words",
                    "es": "Crear palabras nuevas",
                    "de": "Neue Wörter erstellen",
                    "nl": "Nieuwe woorden maken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Word sense disambiguation picks the correct meaning of a word based on its context.",
                "es": "La desambiguación elige el significado correcto según el contexto.",
                "de": "Wortbedeutungsdisambiguierung wählt die richtige Bedeutung basierend auf Kontext.",
                "nl": "Disambiguatie kiest de juiste betekenis op basis van de context."
            }
        },
        {
            "question": {
                "en": "What is a polysemous word?",
                "es": "¿Qué es una palabra polisémica?",
                "de": "Was ist ein polysemes Wort?",
                "nl": "Wat is een polyseem woord?"
            },
            "options": [
                {
                    "en": "A word with multiple meanings",
                    "es": "Una palabra con múltiples significados",
                    "de": "Ein Wort mit mehreren Bedeutungen",
                    "nl": "Een woord met meerdere betekenissen"
                },
                {
                    "en": "A very long word",
                    "es": "Una palabra muy larga",
                    "de": "Ein sehr langes Wort",
                    "nl": "Een heel lang woord"
                },
                {
                    "en": "A foreign word",
                    "es": "Una palabra extranjera",
                    "de": "Ein Fremdwort",
                    "nl": "Een buitenlands woord"
                },
                {
                    "en": "A short word",
                    "es": "Una palabra corta",
                    "de": "Ein kurzes Wort",
                    "nl": "Een kort woord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A polysemous word has multiple related meanings, like 'bank' meaning riverside or financial institution.",
                "es": "Una palabra polisémica tiene múltiples significados, como 'banco'.",
                "de": "Ein polysemes Wort hat mehrere Bedeutungen, wie 'Bank'.",
                "nl": "Een polyseem woord heeft meerdere betekenissen, zoals 'bank'."
            }
        },
        {
            "question": {
                "en": "What is a collocation?",
                "es": "¿Qué es una colocación?",
                "de": "Was ist eine Kollokation?",
                "nl": "Wat is een collocatie?"
            },
            "options": [
                {
                    "en": "Words that frequently appear together",
                    "es": "Palabras que aparecen juntas frecuentemente",
                    "de": "Wörter die häufig zusammen auftreten",
                    "nl": "Woorden die vaak samen voorkomen"
                },
                {
                    "en": "Words that never co-occur",
                    "es": "Palabras que nunca co-ocurren",
                    "de": "Wörter die nie zusammen auftreten",
                    "nl": "Woorden die nooit samen voorkomen"
                },
                {
                    "en": "Misspelled words",
                    "es": "Palabras mal escritas",
                    "de": "Falsch geschriebene Wörter",
                    "nl": "Fout gespelde woorden"
                },
                {
                    "en": "Single rare words",
                    "es": "Palabras raras individuales",
                    "de": "Einzelne seltene Wörter",
                    "nl": "Enkele zeldzame woorden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Collocations are word combinations that occur together more often than by chance, like 'strong coffee'.",
                "es": "Las colocaciones son combinaciones que ocurren juntas más que por azar.",
                "de": "Kollokationen sind Wörter die häufiger zusammen auftreten als zufällig.",
                "nl": "Collocaties zijn woordcombinaties die vaker samen voorkomen dan toevallig."
            }
        },
        {
            "question": {
                "en": "What is text annotation?",
                "es": "¿Qué es la anotación de texto?",
                "de": "Was ist Textannotation?",
                "nl": "Wat is tekstannotatie?"
            },
            "options": [
                {
                    "en": "Adding labels and tags to text",
                    "es": "Agregar etiquetas al texto",
                    "de": "Labels und Tags zu Text hinzufügen",
                    "nl": "Labels en tags toevoegen aan tekst"
                },
                {
                    "en": "Deleting annotations",
                    "es": "Eliminar anotaciones",
                    "de": "Annotationen löschen",
                    "nl": "Annotaties verwijderen"
                },
                {
                    "en": "Printing notes",
                    "es": "Imprimir notas",
                    "de": "Notizen drucken",
                    "nl": "Notities afdrukken"
                },
                {
                    "en": "Recording audio notes",
                    "es": "Grabar notas de audio",
                    "de": "Audionotizen aufnehmen",
                    "nl": "Audionotities opnemen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Text annotation adds labels, tags, and metadata to text for NLP model training.",
                "es": "La anotación agrega etiquetas y metadatos al texto para entrenamiento.",
                "de": "Textannotation fügt Labels und Metadaten für das Modelltraining hinzu.",
                "nl": "Tekstannotatie voegt labels en metadata toe voor modeltraining."
            }
        },
        {
            "question": {
                "en": "What is feature extraction in NLP?",
                "es": "¿Qué es la extracción de características?",
                "de": "Was ist Merkmalsextraktion im NLP?",
                "nl": "Wat is kenmerkextractie in NLP?"
            },
            "options": [
                {
                    "en": "Converting text to numerical features",
                    "es": "Convertir texto a características numéricas",
                    "de": "Text in numerische Merkmale umwandeln",
                    "nl": "Tekst omzetten naar numerieke kenmerken"
                },
                {
                    "en": "Removing text features",
                    "es": "Eliminar características",
                    "de": "Merkmale entfernen",
                    "nl": "Kenmerken verwijderen"
                },
                {
                    "en": "Adding decorations",
                    "es": "Agregar decoraciones",
                    "de": "Dekorationen hinzufügen",
                    "nl": "Decoraties toevoegen"
                },
                {
                    "en": "Changing font styles",
                    "es": "Cambiar estilos de fuente",
                    "de": "Schriftarten ändern",
                    "nl": "Lettertypen wijzigen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Feature extraction converts text into numerical representations that ML models can process.",
                "es": "La extracción convierte texto en representaciones numéricas para modelos ML.",
                "de": "Merkmalsextraktion wandelt Text in numerische Darstellungen für ML-Modelle um.",
                "nl": "Kenmerkextractie zet tekst om in numerieke representaties voor ML-modellen."
            }
        },
        {
            "question": {
                "en": "What is Naive Bayes used for in NLP?",
                "es": "¿Para qué se usa Naive Bayes en PLN?",
                "de": "Wofür wird Naive Bayes im NLP verwendet?",
                "nl": "Waarvoor wordt Naive Bayes in NLP gebruikt?"
            },
            "options": [
                {
                    "en": "Text classification tasks",
                    "es": "Tareas de clasificación de texto",
                    "de": "Textklassifikationsaufgaben",
                    "nl": "Tekstclassificatietaken"
                },
                {
                    "en": "Image editing",
                    "es": "Edición de imágenes",
                    "de": "Bildbearbeitung",
                    "nl": "Beeldbewerking"
                },
                {
                    "en": "Video processing",
                    "es": "Procesamiento de video",
                    "de": "Videoverarbeitung",
                    "nl": "Videoverwerking"
                },
                {
                    "en": "Audio mixing",
                    "es": "Mezcla de audio",
                    "de": "Audio-Mixing",
                    "nl": "Audiomixen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Naive Bayes is a simple probabilistic classifier often used for spam detection and text classification.",
                "es": "Naive Bayes es un clasificador probabilístico para detección de spam.",
                "de": "Naive Bayes ist ein einfacher Klassifikator für Spam-Erkennung und Textklassifikation.",
                "nl": "Naive Bayes is een eenvoudige classificator voor spamdetectie en tekstclassificatie."
            }
        },
        {
            "question": {
                "en": "What is a word vector?",
                "es": "¿Qué es un vector de palabras?",
                "de": "Was ist ein Wortvektor?",
                "nl": "Wat is een woordvector?"
            },
            "options": [
                {
                    "en": "A numerical representation of a word",
                    "es": "Representación numérica de una palabra",
                    "de": "Numerische Darstellung eines Wortes",
                    "nl": "Numerieke representatie van een woord"
                },
                {
                    "en": "A word pointing in a direction",
                    "es": "Una palabra con dirección",
                    "de": "Ein Wort mit Richtung",
                    "nl": "Een woord met richting"
                },
                {
                    "en": "A list of synonyms",
                    "es": "Una lista de sinónimos",
                    "de": "Eine Synonymliste",
                    "nl": "Een lijst synoniemen"
                },
                {
                    "en": "A grammar rule",
                    "es": "Una regla de gramática",
                    "de": "Eine Grammatikregel",
                    "nl": "Een grammaticaregel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A word vector is a list of numbers representing a word's meaning in a multi-dimensional space.",
                "es": "Un vector de palabras es una lista de números que representa el significado.",
                "de": "Ein Wortvektor ist eine Zahlenliste die die Bedeutung eines Wortes darstellt.",
                "nl": "Een woordvector is een lijst getallen die de betekenis representeert."
            }
        },
        {
            "question": {
                "en": "What is a morpheme in NLP?",
                "es": "¿Qué es un morfema en PLN?",
                "de": "Was ist ein Morphem im NLP?",
                "nl": "Wat is een morfeem in NLP?"
            },
            "options": [
                {
                    "en": "The smallest unit of meaning in a word",
                    "es": "La unidad más pequeña de significado",
                    "de": "Die kleinste Bedeutungseinheit",
                    "nl": "De kleinste betekeniseenheid"
                },
                {
                    "en": "A complete paragraph",
                    "es": "Un párrafo completo",
                    "de": "Ein vollständiger Absatz",
                    "nl": "Een volledige alinea"
                },
                {
                    "en": "A type of sentence",
                    "es": "Un tipo de oración",
                    "de": "Eine Art von Satz",
                    "nl": "Een type zin"
                },
                {
                    "en": "A text file format",
                    "es": "Un formato de archivo",
                    "de": "Ein Textdateiformat",
                    "nl": "Een tekstformaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A morpheme is the smallest meaningful unit, like 'un-' and 'happy' in 'unhappy'.",
                "es": "Un morfema es la unidad significativa más pequeña, como 'in-' en 'infeliz'.",
                "de": "Ein Morphem ist die kleinste Bedeutungseinheit, wie 'un-' in 'unglücklich'.",
                "nl": "Een morfeem is de kleinste betekeniseenheid, zoals 'on-' in 'ongelukkig'."
            }
        },
        {
            "question": {
                "en": "What is language identification?",
                "es": "¿Qué es la identificación de idioma?",
                "de": "Was ist Sprachidentifikation?",
                "nl": "Wat is taalidentificatie?"
            },
            "options": [
                {
                    "en": "Detecting what language text is written in",
                    "es": "Detectar en qué idioma está escrito",
                    "de": "Erkennen in welcher Sprache geschrieben ist",
                    "nl": "Detecteren in welke taal tekst geschreven is"
                },
                {
                    "en": "Creating new languages",
                    "es": "Crear nuevos idiomas",
                    "de": "Neue Sprachen erstellen",
                    "nl": "Nieuwe talen creëren"
                },
                {
                    "en": "Teaching languages",
                    "es": "Enseñar idiomas",
                    "de": "Sprachen unterrichten",
                    "nl": "Talen onderwijzen"
                },
                {
                    "en": "Counting languages",
                    "es": "Contar idiomas",
                    "de": "Sprachen zählen",
                    "nl": "Talen tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Language identification automatically detects which language a given text is written in.",
                "es": "La identificación de idioma detecta automáticamente el idioma de un texto.",
                "de": "Sprachidentifikation erkennt automatisch die Sprache eines Textes.",
                "nl": "Taalidentificatie detecteert automatisch in welke taal een tekst geschreven is."
            }
        },
        {
            "question": {
                "en": "What is a gazetteer in NER?",
                "es": "¿Qué es un gacetero en NER?",
                "de": "Was ist ein Gazetteer in NER?",
                "nl": "Wat is een gazetteer in NER?"
            },
            "options": [
                {
                    "en": "A list of known entity names",
                    "es": "Una lista de nombres de entidades conocidas",
                    "de": "Eine Liste bekannter Entitätsnamen",
                    "nl": "Een lijst bekende entiteitsnamen"
                },
                {
                    "en": "A type of newspaper",
                    "es": "Un tipo de periódico",
                    "de": "Eine Art Zeitung",
                    "nl": "Een type krant"
                },
                {
                    "en": "A grammar rule set",
                    "es": "Un conjunto de reglas",
                    "de": "Ein Regelwerk",
                    "nl": "Een set regels"
                },
                {
                    "en": "A translation tool",
                    "es": "Una herramienta de traducción",
                    "de": "Ein Übersetzungstool",
                    "nl": "Een vertaaltool"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A gazetteer is a predefined list of entity names that helps NER systems recognize entities.",
                "es": "Un gacetero es una lista predefinida de nombres que ayuda a NER.",
                "de": "Ein Gazetteer ist eine Liste bekannter Namen die NER-Systemen hilft.",
                "nl": "Een gazetteer is een lijst namen die NER-systemen helpt entiteiten te herkennen."
            }
        },
        {
            "question": {
                "en": "What does ASCII stand for?",
                "es": "¿Qué significa ASCII?",
                "de": "Wofür steht ASCII?",
                "nl": "Waar staat ASCII voor?"
            },
            "options": [
                {
                    "en": "American Standard Code for Information Interchange",
                    "es": "Código Estándar Americano para Intercambio de Información",
                    "de": "American Standard Code for Information Interchange",
                    "nl": "American Standard Code for Information Interchange"
                },
                {
                    "en": "Advanced System for Computer Input",
                    "es": "Sistema Avanzado de Entrada",
                    "de": "Fortgeschrittenes System für Eingabe",
                    "nl": "Geavanceerd Systeem voor Invoer"
                },
                {
                    "en": "Automated String Coding Interface",
                    "es": "Interfaz de Codificación Automática",
                    "de": "Automatisierte Zeichenkodierung",
                    "nl": "Geautomatiseerde Tekencodering"
                },
                {
                    "en": "Application Specific Character Index",
                    "es": "Índice de Caracteres Específicos",
                    "de": "Anwendungsspezifischer Zeichenindex",
                    "nl": "Applicatiespecifieke Tekenindex"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "ASCII is a character encoding standard that assigns numbers to 128 characters.",
                "es": "ASCII es un estándar de codificación que asigna números a 128 caracteres.",
                "de": "ASCII ist ein Zeichenkodierungsstandard der 128 Zeichen Nummern zuweist.",
                "nl": "ASCII is een tekencoderingsstandaard die nummers toewijst aan 128 tekens."
            }
        },
        {
            "question": {
                "en": "What is UTF-8?",
                "es": "¿Qué es UTF-8?",
                "de": "Was ist UTF-8?",
                "nl": "Wat is UTF-8?"
            },
            "options": [
                {
                    "en": "A text encoding supporting many languages",
                    "es": "Codificación que soporta muchos idiomas",
                    "de": "Textkodierung die viele Sprachen unterstützt",
                    "nl": "Tekstcodering die veel talen ondersteunt"
                },
                {
                    "en": "A video format",
                    "es": "Un formato de video",
                    "de": "Ein Videoformat",
                    "nl": "Een videoformaat"
                },
                {
                    "en": "A programming language",
                    "es": "Un lenguaje de programación",
                    "de": "Eine Programmiersprache",
                    "nl": "Een programmeertaal"
                },
                {
                    "en": "A web browser",
                    "es": "Un navegador web",
                    "de": "Ein Webbrowser",
                    "nl": "Een webbrowser"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "UTF-8 is a character encoding that can represent characters from virtually all languages.",
                "es": "UTF-8 puede representar caracteres de prácticamente todos los idiomas.",
                "de": "UTF-8 kann Zeichen aus praktisch allen Sprachen darstellen.",
                "nl": "UTF-8 kan tekens uit vrijwel alle talen representeren."
            }
        },
        {
            "question": {
                "en": "What is a Penn Treebank?",
                "es": "¿Qué es el Penn Treebank?",
                "de": "Was ist die Penn Treebank?",
                "nl": "Wat is de Penn Treebank?"
            },
            "options": [
                {
                    "en": "A large annotated text corpus",
                    "es": "Un gran corpus anotado de texto",
                    "de": "Ein großer annotierter Textkorpus",
                    "nl": "Een groot geannoteerd tekstcorpus"
                },
                {
                    "en": "A tree planting project",
                    "es": "Un proyecto de plantación",
                    "de": "Ein Baumpflanzprojekt",
                    "nl": "Een boomplantproject"
                },
                {
                    "en": "A banking system",
                    "es": "Un sistema bancario",
                    "de": "Ein Banksystem",
                    "nl": "Een banksysteem"
                },
                {
                    "en": "A forest reserve",
                    "es": "Una reserva forestal",
                    "de": "Ein Waldreservat",
                    "nl": "Een bosreservaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Penn Treebank is a large annotated corpus widely used for NLP research and benchmarks.",
                "es": "El Penn Treebank es un gran corpus anotado usado en investigación NLP.",
                "de": "Die Penn Treebank ist ein großer annotierter Korpus für NLP-Forschung.",
                "nl": "De Penn Treebank is een groot geannoteerd corpus voor NLP-onderzoek."
            }
        },
        {
            "question": {
                "en": "What is OCR used for?",
                "es": "¿Para qué se usa OCR?",
                "de": "Wofür wird OCR verwendet?",
                "nl": "Waarvoor wordt OCR gebruikt?"
            },
            "options": [
                {
                    "en": "Converting image text to digital text",
                    "es": "Convertir imagen de texto a texto digital",
                    "de": "Bildtext in digitalen Text umwandeln",
                    "nl": "Beeldtekst omzetten naar digitale tekst"
                },
                {
                    "en": "Taking photographs",
                    "es": "Tomar fotografías",
                    "de": "Fotografieren",
                    "nl": "Fotograferen"
                },
                {
                    "en": "Playing music",
                    "es": "Reproducir música",
                    "de": "Musik abspielen",
                    "nl": "Muziek afspelen"
                },
                {
                    "en": "Editing videos",
                    "es": "Editar videos",
                    "de": "Videos bearbeiten",
                    "nl": "Video's bewerken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "OCR converts printed or handwritten text in images into machine-readable digital text.",
                "es": "OCR convierte texto impreso o manuscrito en imágenes a texto digital.",
                "de": "OCR wandelt gedruckten oder handgeschriebenen Text in Bildern in digitalen Text um.",
                "nl": "OCR zet gedrukte of handgeschreven tekst in afbeeldingen om naar digitale tekst."
            }
        },
        {
            "question": {
                "en": "What is a concordance?",
                "es": "¿Qué es una concordancia?",
                "de": "Was ist eine Konkordanz?",
                "nl": "Wat is een concordantie?"
            },
            "options": [
                {
                    "en": "A list showing word context in a corpus",
                    "es": "Lista mostrando contexto de palabras",
                    "de": "Liste die Wortkontexte zeigt",
                    "nl": "Lijst die woordcontext toont"
                },
                {
                    "en": "A type of agreement",
                    "es": "Un tipo de acuerdo",
                    "de": "Eine Art Vereinbarung",
                    "nl": "Een type overeenkomst"
                },
                {
                    "en": "A musical instrument",
                    "es": "Un instrumento musical",
                    "de": "Ein Musikinstrument",
                    "nl": "Een muziekinstrument"
                },
                {
                    "en": "A file format",
                    "es": "Un formato de archivo",
                    "de": "Ein Dateiformat",
                    "nl": "Een bestandsformaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A concordance shows every occurrence of a word with its surrounding context in a corpus.",
                "es": "Una concordancia muestra cada ocurrencia de una palabra con su contexto.",
                "de": "Eine Konkordanz zeigt jedes Vorkommen eines Wortes mit seinem Kontext.",
                "nl": "Een concordantie toont elk voorkomen van een woord met zijn omringende context."
            }
        },
        {
            "question": {
                "en": "What is language generation?",
                "es": "¿Qué es la generación de lenguaje?",
                "de": "Was ist Sprachgenerierung?",
                "nl": "Wat is taalgeneratie?"
            },
            "options": [
                {
                    "en": "Producing human-readable text automatically",
                    "es": "Producir texto legible automáticamente",
                    "de": "Lesbaren Text automatisch erzeugen",
                    "nl": "Automatisch leesbare tekst produceren"
                },
                {
                    "en": "Learning a language",
                    "es": "Aprender un idioma",
                    "de": "Eine Sprache lernen",
                    "nl": "Een taal leren"
                },
                {
                    "en": "Recording audio",
                    "es": "Grabar audio",
                    "de": "Audio aufnehmen",
                    "nl": "Audio opnemen"
                },
                {
                    "en": "Editing grammar",
                    "es": "Editar gramática",
                    "de": "Grammatik bearbeiten",
                    "nl": "Grammatica bewerken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Language generation automatically produces human-readable text from data or instructions.",
                "es": "La generación de lenguaje produce texto legible automáticamente.",
                "de": "Sprachgenerierung erzeugt automatisch menschenlesbaren Text.",
                "nl": "Taalgeneratie produceert automatisch door mensen leesbare tekst."
            }
        },
        {
            "question": {
                "en": "What is paraphrasing in NLP?",
                "es": "¿Qué es la paráfrasis en PLN?",
                "de": "Was ist Paraphrasierung im NLP?",
                "nl": "Wat is parafrasering in NLP?"
            },
            "options": [
                {
                    "en": "Saying the same thing differently",
                    "es": "Decir lo mismo de forma diferente",
                    "de": "Dasselbe anders sagen",
                    "nl": "Hetzelfde anders zeggen"
                },
                {
                    "en": "Copying text exactly",
                    "es": "Copiar texto exactamente",
                    "de": "Text exakt kopieren",
                    "nl": "Tekst exact kopiëren"
                },
                {
                    "en": "Deleting sentences",
                    "es": "Eliminar oraciones",
                    "de": "Sätze löschen",
                    "nl": "Zinnen verwijderen"
                },
                {
                    "en": "Adding more words",
                    "es": "Agregar más palabras",
                    "de": "Mehr Wörter hinzufügen",
                    "nl": "Meer woorden toevoegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Paraphrasing expresses the same meaning using different words or sentence structures.",
                "es": "La paráfrasis expresa el mismo significado con diferentes palabras.",
                "de": "Paraphrasierung drückt die gleiche Bedeutung mit anderen Worten aus.",
                "nl": "Parafrasering drukt dezelfde betekenis uit met andere woorden."
            }
        },
        {
            "question": {
                "en": "What is a discourse in NLP?",
                "es": "¿Qué es un discurso en PLN?",
                "de": "Was ist ein Diskurs im NLP?",
                "nl": "Wat is een discours in NLP?"
            },
            "options": [
                {
                    "en": "Connected text beyond single sentences",
                    "es": "Texto conectado más allá de oraciones",
                    "de": "Zusammenhängender Text über einzelne Sätze hinaus",
                    "nl": "Verbonden tekst voorbij enkele zinnen"
                },
                {
                    "en": "A speech at a conference",
                    "es": "Un discurso en conferencia",
                    "de": "Eine Rede auf einer Konferenz",
                    "nl": "Een toespraak op een conferentie"
                },
                {
                    "en": "A single word",
                    "es": "Una sola palabra",
                    "de": "Ein einzelnes Wort",
                    "nl": "Een enkel woord"
                },
                {
                    "en": "A grammar rule",
                    "es": "Una regla gramatical",
                    "de": "Eine Grammatikregel",
                    "nl": "Een grammaticaregel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Discourse refers to connected text that spans multiple sentences conveying coherent meaning.",
                "es": "El discurso se refiere a texto conectado que abarca múltiples oraciones.",
                "de": "Diskurs bezieht sich auf zusammenhängenden Text über mehrere Sätze.",
                "nl": "Discours verwijst naar verbonden tekst die meerdere zinnen omspant."
            }
        },
        {
            "question": {
                "en": "What is an ontology in NLP?",
                "es": "¿Qué es una ontología en PLN?",
                "de": "Was ist eine Ontologie im NLP?",
                "nl": "Wat is een ontologie in NLP?"
            },
            "options": [
                {
                    "en": "A structured knowledge representation",
                    "es": "Una representación estructurada de conocimiento",
                    "de": "Eine strukturierte Wissensdarstellung",
                    "nl": "Een gestructureerde kennisrepresentatie"
                },
                {
                    "en": "A type of word",
                    "es": "Un tipo de palabra",
                    "de": "Eine Art Wort",
                    "nl": "Een type woord"
                },
                {
                    "en": "A grammar book",
                    "es": "Un libro de gramática",
                    "de": "Ein Grammatikbuch",
                    "nl": "Een grammaticaboek"
                },
                {
                    "en": "A file format",
                    "es": "Un formato de archivo",
                    "de": "Ein Dateiformat",
                    "nl": "Een bestandsformaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An ontology defines entities, their types, properties, and relationships in a structured format.",
                "es": "Una ontología define entidades, tipos, propiedades y relaciones.",
                "de": "Eine Ontologie definiert Entitäten, Typen, Eigenschaften und Beziehungen.",
                "nl": "Een ontologie definieert entiteiten, typen, eigenschappen en relaties."
            }
        },
        {
            "question": {
                "en": "What is precision in NLP evaluation?",
                "es": "¿Qué es la precisión en evaluación NLP?",
                "de": "Was ist Precision in der NLP-Evaluation?",
                "nl": "Wat is precisie in NLP-evaluatie?"
            },
            "options": [
                {
                    "en": "Ratio of correct positive predictions",
                    "es": "Proporción de predicciones positivas correctas",
                    "de": "Anteil korrekter positiver Vorhersagen",
                    "nl": "Verhouding correcte positieve voorspellingen"
                },
                {
                    "en": "Total number of words",
                    "es": "Número total de palabras",
                    "de": "Gesamtzahl der Wörter",
                    "nl": "Totaal aantal woorden"
                },
                {
                    "en": "Processing speed",
                    "es": "Velocidad de procesamiento",
                    "de": "Verarbeitungsgeschwindigkeit",
                    "nl": "Verwerkingssnelheid"
                },
                {
                    "en": "File size",
                    "es": "Tamaño de archivo",
                    "de": "Dateigröße",
                    "nl": "Bestandsgrootte"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Precision measures the fraction of predicted positives that are actually correct.",
                "es": "La precisión mide la fracción de positivos predichos que son correctos.",
                "de": "Precision misst den Anteil der vorhergesagten Positiven, die korrekt sind.",
                "nl": "Precisie meet het aandeel voorspelde positieven dat daadwerkelijk correct is."
            }
        },
        {
            "question": {
                "en": "What is recall in NLP evaluation?",
                "es": "¿Qué es el recall en evaluación NLP?",
                "de": "Was ist Recall in der NLP-Evaluation?",
                "nl": "Wat is recall in NLP-evaluatie?"
            },
            "options": [
                {
                    "en": "Ratio of found positives to total positives",
                    "es": "Proporción de positivos encontrados del total",
                    "de": "Anteil gefundener Positiver am Gesamten",
                    "nl": "Verhouding gevonden positieven tot totaal"
                },
                {
                    "en": "Memory usage",
                    "es": "Uso de memoria",
                    "de": "Speicherverbrauch",
                    "nl": "Geheugengebruik"
                },
                {
                    "en": "Download speed",
                    "es": "Velocidad de descarga",
                    "de": "Download-Geschwindigkeit",
                    "nl": "Downloadsnelheid"
                },
                {
                    "en": "File count",
                    "es": "Conteo de archivos",
                    "de": "Dateianzahl",
                    "nl": "Aantal bestanden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Recall measures the fraction of actual positives that were correctly identified.",
                "es": "El recall mide la fracción de positivos reales correctamente identificados.",
                "de": "Recall misst den Anteil der tatsächlichen Positiven, die korrekt erkannt wurden.",
                "nl": "Recall meet het aandeel werkelijke positieven dat correct geïdentificeerd werd."
            }
        },
        {
            "question": {
                "en": "What is the F1 score?",
                "es": "¿Qué es el puntaje F1?",
                "de": "Was ist der F1-Score?",
                "nl": "Wat is de F1-score?"
            },
            "options": [
                {
                    "en": "The harmonic mean of precision and recall",
                    "es": "La media armónica de precisión y recall",
                    "de": "Das harmonische Mittel von Precision und Recall",
                    "nl": "Het harmonisch gemiddelde van precisie en recall"
                },
                {
                    "en": "A music note",
                    "es": "Una nota musical",
                    "de": "Eine Musiknote",
                    "nl": "Een muzieknoot"
                },
                {
                    "en": "A race car name",
                    "es": "Un nombre de auto de carreras",
                    "de": "Ein Rennwagenname",
                    "nl": "Een raceautonaam"
                },
                {
                    "en": "A file version",
                    "es": "Una versión de archivo",
                    "de": "Eine Dateiversion",
                    "nl": "Een bestandsversie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "F1 score balances precision and recall into a single metric using harmonic mean.",
                "es": "El F1 equilibra precisión y recall en una sola métrica con media armónica.",
                "de": "F1-Score balanciert Precision und Recall mit dem harmonischen Mittel.",
                "nl": "De F1-score balanceert precisie en recall met het harmonisch gemiddelde."
            }
        },
        {
            "question": {
                "en": "What is a confusion matrix?",
                "es": "¿Qué es una matriz de confusión?",
                "de": "Was ist eine Konfusionsmatrix?",
                "nl": "Wat is een verwarringsmatrix?"
            },
            "options": [
                {
                    "en": "A table showing prediction results",
                    "es": "Una tabla de resultados de predicción",
                    "de": "Eine Tabelle mit Vorhersageergebnissen",
                    "nl": "Een tabel met voorspellingsresultaten"
                },
                {
                    "en": "A confusing text document",
                    "es": "Un documento confuso",
                    "de": "Ein verwirrendes Dokument",
                    "nl": "Een verwarrend document"
                },
                {
                    "en": "A math puzzle",
                    "es": "Un rompecabezas matemático",
                    "de": "Ein Mathe-Rätsel",
                    "nl": "Een wiskundige puzzel"
                },
                {
                    "en": "A programming error",
                    "es": "Un error de programación",
                    "de": "Ein Programmierfehler",
                    "nl": "Een programmeerfout"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A confusion matrix shows true/false positives and negatives of a classifier's predictions.",
                "es": "Una matriz de confusión muestra verdaderos y falsos positivos y negativos.",
                "de": "Eine Konfusionsmatrix zeigt wahre und falsche Positive und Negative.",
                "nl": "Een verwarringsmatrix toont waar/onwaar positieven en negatieven."
            }
        },
        {
            "question": {
                "en": "What is a corpus annotation?",
                "es": "¿Qué es la anotación de corpus?",
                "de": "Was ist Korpusannotation?",
                "nl": "Wat is corpusannotatie?"
            },
            "options": [
                {
                    "en": "Adding linguistic labels to corpus text",
                    "es": "Agregar etiquetas lingüísticas al corpus",
                    "de": "Linguistische Labels zum Korpus hinzufügen",
                    "nl": "Taalkundige labels toevoegen aan corpus"
                },
                {
                    "en": "Deleting corpus data",
                    "es": "Eliminar datos del corpus",
                    "de": "Korpusdaten löschen",
                    "nl": "Corpusdata verwijderen"
                },
                {
                    "en": "Printing corpus text",
                    "es": "Imprimir texto del corpus",
                    "de": "Korpustext drucken",
                    "nl": "Corpustekst afdrukken"
                },
                {
                    "en": "Recording corpus audio",
                    "es": "Grabar audio del corpus",
                    "de": "Korpus-Audio aufnehmen",
                    "nl": "Corpus-audio opnemen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Corpus annotation adds linguistic labels like POS tags and entity types to text.",
                "es": "La anotación de corpus agrega etiquetas lingüísticas como POS al texto.",
                "de": "Korpusannotation fügt linguistische Labels wie POS-Tags zum Text hinzu.",
                "nl": "Corpusannotatie voegt taalkundige labels zoals POS-tags toe aan tekst."
            }
        },
        {
            "question": {
                "en": "What is a lexicon in NLP?",
                "es": "¿Qué es un léxico en PLN?",
                "de": "Was ist ein Lexikon im NLP?",
                "nl": "Wat is een lexicon in NLP?"
            },
            "options": [
                {
                    "en": "A collection of words and their properties",
                    "es": "Colección de palabras y propiedades",
                    "de": "Sammlung von Wörtern und Eigenschaften",
                    "nl": "Verzameling woorden en eigenschappen"
                },
                {
                    "en": "A type of book",
                    "es": "Un tipo de libro",
                    "de": "Ein Buchtyp",
                    "nl": "Een type boek"
                },
                {
                    "en": "A translation device",
                    "es": "Un dispositivo de traducción",
                    "de": "Ein Übersetzungsgerät",
                    "nl": "Een vertaalapparaat"
                },
                {
                    "en": "A grammar test",
                    "es": "Una prueba de gramática",
                    "de": "Ein Grammatiktest",
                    "nl": "Een grammaticatest"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A lexicon is a collection of words with information about their meanings and properties.",
                "es": "Un léxico es una colección de palabras con información sobre significados.",
                "de": "Ein Lexikon ist eine Sammlung von Wörtern mit Bedeutungsinformationen.",
                "nl": "Een lexicon is een verzameling woorden met informatie over betekenissen."
            }
        },
        {
            "question": {
                "en": "What is WordNet?",
                "es": "¿Qué es WordNet?",
                "de": "Was ist WordNet?",
                "nl": "Wat is WordNet?"
            },
            "options": [
                {
                    "en": "A lexical database of English words",
                    "es": "Una base de datos léxica del inglés",
                    "de": "Eine lexikalische Datenbank englischer Wörter",
                    "nl": "Een lexicale database van Engelse woorden"
                },
                {
                    "en": "A social network",
                    "es": "Una red social",
                    "de": "Ein soziales Netzwerk",
                    "nl": "Een sociaal netwerk"
                },
                {
                    "en": "A word game",
                    "es": "Un juego de palabras",
                    "de": "Ein Wortspiel",
                    "nl": "Een woordspel"
                },
                {
                    "en": "A search engine",
                    "es": "Un motor de búsqueda",
                    "de": "Eine Suchmaschine",
                    "nl": "Een zoekmachine"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "WordNet is a large lexical database organizing English words into synonym sets with relationships.",
                "es": "WordNet es una base de datos que organiza palabras en conjuntos de sinónimos.",
                "de": "WordNet ist eine lexikalische Datenbank die Wörter in Synonymmengen organisiert.",
                "nl": "WordNet is een lexicale database die woorden organiseert in synoniemgroepen."
            }
        },
        {
            "question": {
                "en": "What is text encoding?",
                "es": "¿Qué es la codificación de texto?",
                "de": "Was ist Textkodierung?",
                "nl": "Wat is tekstcodering?"
            },
            "options": [
                {
                    "en": "Converting characters to numbers",
                    "es": "Convertir caracteres a números",
                    "de": "Zeichen in Zahlen umwandeln",
                    "nl": "Tekens omzetten naar getallen"
                },
                {
                    "en": "Writing in secret code",
                    "es": "Escribir en código secreto",
                    "de": "In Geheimschrift schreiben",
                    "nl": "In geheimschrift schrijven"
                },
                {
                    "en": "Compressing files",
                    "es": "Comprimir archivos",
                    "de": "Dateien komprimieren",
                    "nl": "Bestanden comprimeren"
                },
                {
                    "en": "Formatting fonts",
                    "es": "Formatear fuentes",
                    "de": "Schriftarten formatieren",
                    "nl": "Lettertypen opmaken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Text encoding converts text characters into numerical codes that computers can process.",
                "es": "La codificación convierte caracteres en códigos numéricos procesables.",
                "de": "Textkodierung wandelt Zeichen in numerische Codes um die Computer verarbeiten.",
                "nl": "Tekstcodering zet tekens om in numerieke codes die computers kunnen verwerken."
            }
        },
        {
            "question": {
                "en": "What is subword tokenization?",
                "es": "¿Qué es tokenización de subpalabras?",
                "de": "Was ist Subwort-Tokenisierung?",
                "nl": "Wat is subwoordtokenisatie?"
            },
            "options": [
                {
                    "en": "Breaking words into smaller meaningful parts",
                    "es": "Dividir palabras en partes significativas",
                    "de": "Wörter in kleinere Teile aufteilen",
                    "nl": "Woorden opsplitsen in kleinere delen"
                },
                {
                    "en": "Combining words together",
                    "es": "Combinar palabras",
                    "de": "Wörter zusammenfügen",
                    "nl": "Woorden samenvoegen"
                },
                {
                    "en": "Removing short words",
                    "es": "Eliminar palabras cortas",
                    "de": "Kurze Wörter entfernen",
                    "nl": "Korte woorden verwijderen"
                },
                {
                    "en": "Adding spaces between letters",
                    "es": "Agregar espacios entre letras",
                    "de": "Leerzeichen zwischen Buchstaben",
                    "nl": "Spaties tussen letters"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Subword tokenization splits words into smaller parts to handle rare and unknown words.",
                "es": "La tokenización de subpalabras divide palabras para manejar palabras raras.",
                "de": "Subwort-Tokenisierung zerlegt Wörter um seltene und unbekannte Wörter zu behandeln.",
                "nl": "Subwoordtokenisatie splitst woorden op om zeldzame en onbekende woorden aan te kunnen."
            }
        },
        {
            "question": {
                "en": "What is a text corpus used for training?",
                "es": "¿Para qué se usa un corpus de entrenamiento?",
                "de": "Wofür wird ein Trainingskorpus verwendet?",
                "nl": "Waarvoor wordt een trainingscorpus gebruikt?"
            },
            "options": [
                {
                    "en": "Teaching NLP models patterns",
                    "es": "Enseñar patrones a modelos",
                    "de": "Modellen Muster beibringen",
                    "nl": "Modellen patronen leren"
                },
                {
                    "en": "Printing books",
                    "es": "Imprimir libros",
                    "de": "Bücher drucken",
                    "nl": "Boeken afdrukken"
                },
                {
                    "en": "Drawing illustrations",
                    "es": "Dibujar ilustraciones",
                    "de": "Illustrationen zeichnen",
                    "nl": "Illustraties tekenen"
                },
                {
                    "en": "Playing games",
                    "es": "Jugar juegos",
                    "de": "Spiele spielen",
                    "nl": "Spelletjes spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A training corpus provides example text data for NLP models to learn language patterns.",
                "es": "Un corpus de entrenamiento proporciona datos de ejemplo para aprender patrones.",
                "de": "Ein Trainingskorpus liefert Beispieltext damit Modelle Sprachmuster lernen.",
                "nl": "Een trainingscorpus biedt voorbeeldtekst zodat modellen taalpatronen leren."
            }
        },
        {
            "question": {
                "en": "What is tokenization ambiguity?",
                "es": "¿Qué es la ambigüedad en tokenización?",
                "de": "Was ist Tokenisierungsambiguität?",
                "nl": "Wat is tokenisatie-ambiguïteit?"
            },
            "options": [
                {
                    "en": "Uncertainty in how to split text",
                    "es": "Incertidumbre en cómo dividir texto",
                    "de": "Unsicherheit beim Textaufteilen",
                    "nl": "Onzekerheid bij het splitsen van tekst"
                },
                {
                    "en": "Clear and obvious splitting",
                    "es": "División clara y obvia",
                    "de": "Klare Aufteilung",
                    "nl": "Duidelijke splitsing"
                },
                {
                    "en": "No splitting needed",
                    "es": "No se necesita dividir",
                    "de": "Keine Aufteilung nötig",
                    "nl": "Geen splitsing nodig"
                },
                {
                    "en": "Always splitting at spaces",
                    "es": "Siempre dividir en espacios",
                    "de": "Immer bei Leerzeichen teilen",
                    "nl": "Altijd splitsen bij spaties"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tokenization ambiguity occurs when it's unclear how to split text, like in 'New York'.",
                "es": "La ambigüedad ocurre cuando no es claro cómo dividir, como en 'Nueva York'.",
                "de": "Tokenisierungsambiguität tritt auf wenn unklar ist, wie z.B. 'New York'.",
                "nl": "Tokenisatie-ambiguïteit treedt op als het onduidelijk is, zoals bij 'New York'."
            }
        },
        {
            "question": {
                "en": "What is a stop word example in English?",
                "es": "¿Cuál es un ejemplo de palabra vacía en inglés?",
                "de": "Was ist ein Beispiel für ein Stoppwort?",
                "nl": "Wat is een voorbeeld van een stopwoord?"
            },
            "options": [
                {
                    "en": "'the'",
                    "es": "'the'",
                    "de": "'the'",
                    "nl": "'the'"
                },
                {
                    "en": "'algorithm'",
                    "es": "'algorithm'",
                    "de": "'algorithm'",
                    "nl": "'algorithm'"
                },
                {
                    "en": "'neural'",
                    "es": "'neural'",
                    "de": "'neural'",
                    "nl": "'neural'"
                },
                {
                    "en": "'computer'",
                    "es": "'computer'",
                    "de": "'computer'",
                    "nl": "'computer'"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "'The' is one of the most common stop words, appearing very frequently but adding little meaning.",
                "es": "'The' es una de las palabras vacías más comunes con poco significado.",
                "de": "'The' ist eines der häufigsten Stoppwörter mit wenig Bedeutung.",
                "nl": "'The' is een van de meest voorkomende stopwoorden met weinig betekenis."
            }
        },
        {
            "question": {
                "en": "What is cosine similarity used for?",
                "es": "¿Para qué se usa la similitud coseno?",
                "de": "Wofür wird Kosinusähnlichkeit verwendet?",
                "nl": "Waarvoor wordt cosinus-similariteit gebruikt?"
            },
            "options": [
                {
                    "en": "Measuring text similarity",
                    "es": "Medir similitud de textos",
                    "de": "Textähnlichkeit messen",
                    "nl": "Tekstgelijkenis meten"
                },
                {
                    "en": "Calculating angles",
                    "es": "Calcular ángulos",
                    "de": "Winkel berechnen",
                    "nl": "Hoeken berekenen"
                },
                {
                    "en": "Drawing circles",
                    "es": "Dibujar círculos",
                    "de": "Kreise zeichnen",
                    "nl": "Cirkels tekenen"
                },
                {
                    "en": "Measuring distance",
                    "es": "Medir distancia",
                    "de": "Entfernung messen",
                    "nl": "Afstand meten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cosine similarity measures how similar two text documents are by comparing their vector representations.",
                "es": "La similitud coseno mide cuán similares son dos documentos comparando vectores.",
                "de": "Kosinusähnlichkeit misst wie ähnlich zwei Dokumente durch Vektorvergleich sind.",
                "nl": "Cosinus-similariteit meet hoe gelijk twee documenten zijn door vectoren te vergelijken."
            }
        },
        {
            "question": {
                "en": "What is Jaccard similarity?",
                "es": "¿Qué es la similitud de Jaccard?",
                "de": "Was ist Jaccard-Ähnlichkeit?",
                "nl": "Wat is Jaccard-similariteit?"
            },
            "options": [
                {
                    "en": "Overlap of word sets between texts",
                    "es": "Superposición de conjuntos de palabras",
                    "de": "Überlappung von Wortmengen",
                    "nl": "Overlap van woordverzamelingen"
                },
                {
                    "en": "A type of distance measure",
                    "es": "Un tipo de medida de distancia",
                    "de": "Ein Entfernungsmaß",
                    "nl": "Een afstandsmaat"
                },
                {
                    "en": "A color comparison",
                    "es": "Una comparación de colores",
                    "de": "Ein Farbvergleich",
                    "nl": "Een kleurvergelijking"
                },
                {
                    "en": "A speed test",
                    "es": "Una prueba de velocidad",
                    "de": "Ein Geschwindigkeitstest",
                    "nl": "Een snelheidstest"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Jaccard similarity measures the overlap between two sets of words divided by their union.",
                "es": "La similitud de Jaccard mide la superposición entre conjuntos dividida por su unión.",
                "de": "Jaccard-Ähnlichkeit misst die Überlappung zweier Wortmengen geteilt durch ihre Vereinigung.",
                "nl": "Jaccard-similariteit meet de overlap van twee woordverzamelingen gedeeld door hun unie."
            }
        },
        {
            "question": {
                "en": "What is edit distance?",
                "es": "¿Qué es la distancia de edición?",
                "de": "Was ist die Editierdistanz?",
                "nl": "Wat is bewerkingsafstand?"
            },
            "options": [
                {
                    "en": "Minimum changes to transform one string to another",
                    "es": "Cambios mínimos para transformar una cadena",
                    "de": "Minimale Änderungen um eine Zeichenkette umzuwandeln",
                    "nl": "Minimale wijzigingen om een string om te zetten"
                },
                {
                    "en": "The length of a word",
                    "es": "La longitud de una palabra",
                    "de": "Die Länge eines Wortes",
                    "nl": "De lengte van een woord"
                },
                {
                    "en": "Number of sentences",
                    "es": "Número de oraciones",
                    "de": "Anzahl der Sätze",
                    "nl": "Aantal zinnen"
                },
                {
                    "en": "File size difference",
                    "es": "Diferencia de tamaño",
                    "de": "Größenunterschied",
                    "nl": "Verschil in grootte"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Edit distance counts the minimum operations needed to transform one string into another.",
                "es": "La distancia de edición cuenta operaciones mínimas para transformar cadenas.",
                "de": "Die Editierdistanz zählt die minimalen Operationen um Zeichenketten umzuwandeln.",
                "nl": "Bewerkingsafstand telt de minimale bewerkingen om strings om te zetten."
            }
        },
        {
            "question": {
                "en": "What is a synonym in NLP?",
                "es": "¿Qué es un sinónimo en PLN?",
                "de": "Was ist ein Synonym im NLP?",
                "nl": "Wat is een synoniem in NLP?"
            },
            "options": [
                {
                    "en": "A word with the same meaning",
                    "es": "Una palabra con el mismo significado",
                    "de": "Ein Wort mit gleicher Bedeutung",
                    "nl": "Een woord met dezelfde betekenis"
                },
                {
                    "en": "A word with opposite meaning",
                    "es": "Una palabra con significado opuesto",
                    "de": "Ein Wort mit Gegenbedeutung",
                    "nl": "Een woord met tegenovergestelde betekenis"
                },
                {
                    "en": "A very long word",
                    "es": "Una palabra muy larga",
                    "de": "Ein sehr langes Wort",
                    "nl": "Een heel lang woord"
                },
                {
                    "en": "A foreign word",
                    "es": "Una palabra extranjera",
                    "de": "Ein Fremdwort",
                    "nl": "Een buitenlands woord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A synonym is a word with the same or very similar meaning as another word.",
                "es": "Un sinónimo es una palabra con significado igual o similar a otra.",
                "de": "Ein Synonym ist ein Wort mit gleicher oder ähnlicher Bedeutung.",
                "nl": "Een synoniem is een woord met dezelfde of vergelijkbare betekenis."
            }
        },
        {
            "question": {
                "en": "What is an antonym?",
                "es": "¿Qué es un antónimo?",
                "de": "Was ist ein Antonym?",
                "nl": "Wat is een antoniem?"
            },
            "options": [
                {
                    "en": "A word with opposite meaning",
                    "es": "Una palabra con significado opuesto",
                    "de": "Ein Wort mit Gegenbedeutung",
                    "nl": "Een woord met tegenovergestelde betekenis"
                },
                {
                    "en": "A word with same meaning",
                    "es": "Una palabra con mismo significado",
                    "de": "Ein Wort mit gleicher Bedeutung",
                    "nl": "Een woord met dezelfde betekenis"
                },
                {
                    "en": "A short word",
                    "es": "Una palabra corta",
                    "de": "Ein kurzes Wort",
                    "nl": "Een kort woord"
                },
                {
                    "en": "A new word",
                    "es": "Una palabra nueva",
                    "de": "Ein neues Wort",
                    "nl": "Een nieuw woord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An antonym is a word with the opposite meaning, like 'hot' and 'cold'.",
                "es": "Un antónimo es una palabra con significado opuesto, como 'caliente' y 'frío'.",
                "de": "Ein Antonym ist ein Wort mit Gegenbedeutung, wie 'heiß' und 'kalt'.",
                "nl": "Een antoniem is een woord met tegenovergestelde betekenis, zoals 'warm' en 'koud'."
            }
        },
        {
            "question": {
                "en": "What is a hypernym?",
                "es": "¿Qué es un hiperónimo?",
                "de": "Was ist ein Hyperonym?",
                "nl": "Wat is een hyperoniem?"
            },
            "options": [
                {
                    "en": "A more general category word",
                    "es": "Una palabra de categoría más general",
                    "de": "Ein allgemeineres Kategorienwort",
                    "nl": "Een algemener categoriewoord"
                },
                {
                    "en": "A very specific word",
                    "es": "Una palabra muy específica",
                    "de": "Ein sehr spezifisches Wort",
                    "nl": "Een heel specifiek woord"
                },
                {
                    "en": "A brand name",
                    "es": "Un nombre de marca",
                    "de": "Ein Markenname",
                    "nl": "Een merknaam"
                },
                {
                    "en": "A scientific term",
                    "es": "Un término científico",
                    "de": "Ein wissenschaftlicher Begriff",
                    "nl": "Een wetenschappelijke term"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A hypernym is a more general word, like 'animal' is a hypernym of 'dog'.",
                "es": "Un hiperónimo es una palabra más general, como 'animal' para 'perro'.",
                "de": "Ein Hyperonym ist ein allgemeineres Wort, wie 'Tier' für 'Hund'.",
                "nl": "Een hyperoniem is een algemener woord, zoals 'dier' voor 'hond'."
            }
        },
        {
            "question": {
                "en": "What is a hyponym?",
                "es": "¿Qué es un hipónimo?",
                "de": "Was ist ein Hyponym?",
                "nl": "Wat is een hyponiem?"
            },
            "options": [
                {
                    "en": "A more specific word within a category",
                    "es": "Una palabra más específica en una categoría",
                    "de": "Ein spezifischeres Wort innerhalb einer Kategorie",
                    "nl": "Een specifieker woord binnen een categorie"
                },
                {
                    "en": "A general word",
                    "es": "Una palabra general",
                    "de": "Ein allgemeines Wort",
                    "nl": "Een algemeen woord"
                },
                {
                    "en": "A synonym",
                    "es": "Un sinónimo",
                    "de": "Ein Synonym",
                    "nl": "Een synoniem"
                },
                {
                    "en": "An abbreviation",
                    "es": "Una abreviatura",
                    "de": "Eine Abkürzung",
                    "nl": "Een afkorting"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A hyponym is a more specific word, like 'dog' is a hyponym of 'animal'.",
                "es": "Un hipónimo es una palabra más específica, como 'perro' de 'animal'.",
                "de": "Ein Hyponym ist ein spezifischeres Wort, wie 'Hund' von 'Tier'.",
                "nl": "Een hyponiem is een specifieker woord, zoals 'hond' van 'dier'."
            }
        },
        {
            "question": {
                "en": "What is an ambiguous sentence?",
                "es": "¿Qué es una oración ambigua?",
                "de": "Was ist ein mehrdeutiger Satz?",
                "nl": "Wat is een ambigue zin?"
            },
            "options": [
                {
                    "en": "A sentence with multiple interpretations",
                    "es": "Una oración con múltiples interpretaciones",
                    "de": "Ein Satz mit mehreren Interpretationen",
                    "nl": "Een zin met meerdere interpretaties"
                },
                {
                    "en": "A very long sentence",
                    "es": "Una oración muy larga",
                    "de": "Ein sehr langer Satz",
                    "nl": "Een heel lange zin"
                },
                {
                    "en": "A sentence with errors",
                    "es": "Una oración con errores",
                    "de": "Ein Satz mit Fehlern",
                    "nl": "Een zin met fouten"
                },
                {
                    "en": "A translated sentence",
                    "es": "Una oración traducida",
                    "de": "Ein übersetzter Satz",
                    "nl": "Een vertaalde zin"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An ambiguous sentence can be understood in more than one way, creating interpretation challenges.",
                "es": "Una oración ambigua puede entenderse de varias maneras.",
                "de": "Ein mehrdeutiger Satz kann auf mehrere Arten verstanden werden.",
                "nl": "Een ambigue zin kan op meerdere manieren begrepen worden."
            }
        },
        {
            "question": {
                "en": "What is a knowledge graph?",
                "es": "¿Qué es un grafo de conocimiento?",
                "de": "Was ist ein Wissensgraph?",
                "nl": "Wat is een kennisgraaf?"
            },
            "options": [
                {
                    "en": "A network of entities and relationships",
                    "es": "Una red de entidades y relaciones",
                    "de": "Ein Netzwerk von Entitäten und Beziehungen",
                    "nl": "Een netwerk van entiteiten en relaties"
                },
                {
                    "en": "A bar chart",
                    "es": "Un gráfico de barras",
                    "de": "Ein Balkendiagramm",
                    "nl": "Een staafdiagram"
                },
                {
                    "en": "A word list",
                    "es": "Una lista de palabras",
                    "de": "Eine Wortliste",
                    "nl": "Een woordenlijst"
                },
                {
                    "en": "A timeline",
                    "es": "Una línea de tiempo",
                    "de": "Ein Zeitstrahl",
                    "nl": "Een tijdlijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A knowledge graph represents entities and their relationships as a structured network.",
                "es": "Un grafo de conocimiento representa entidades y relaciones como red.",
                "de": "Ein Wissensgraph stellt Entitäten und Beziehungen als strukturiertes Netzwerk dar.",
                "nl": "Een kennisgraaf representeert entiteiten en relaties als gestructureerd netwerk."
            }
        },
        {
            "question": {
                "en": "What is tokenization in Chinese text?",
                "es": "¿Qué es la tokenización en texto chino?",
                "de": "Was ist Tokenisierung bei chinesischem Text?",
                "nl": "Wat is tokenisatie in Chinese tekst?"
            },
            "options": [
                {
                    "en": "Harder because there are no spaces",
                    "es": "Más difícil porque no hay espacios",
                    "de": "Schwieriger weil es keine Leerzeichen gibt",
                    "nl": "Moeilijker omdat er geen spaties zijn"
                },
                {
                    "en": "Easier than English",
                    "es": "Más fácil que inglés",
                    "de": "Einfacher als Englisch",
                    "nl": "Makkelijker dan Engels"
                },
                {
                    "en": "Identical to English",
                    "es": "Idéntica al inglés",
                    "de": "Identisch mit Englisch",
                    "nl": "Identiek aan Engels"
                },
                {
                    "en": "Not possible",
                    "es": "No es posible",
                    "de": "Nicht möglich",
                    "nl": "Niet mogelijk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Chinese tokenization is harder because Chinese text has no spaces between words.",
                "es": "La tokenización china es más difícil porque no tiene espacios entre palabras.",
                "de": "Chinesische Tokenisierung ist schwieriger weil es keine Leerzeichen gibt.",
                "nl": "Chinese tokenisatie is moeilijker omdat er geen spaties tussen woorden staan."
            }
        },
        {
            "question": {
                "en": "What is a sentiment score?",
                "es": "¿Qué es un puntaje de sentimiento?",
                "de": "Was ist ein Sentiment-Score?",
                "nl": "Wat is een sentimentscore?"
            },
            "options": [
                {
                    "en": "A number indicating text emotion",
                    "es": "Un número que indica emoción del texto",
                    "de": "Eine Zahl die Textemotion anzeigt",
                    "nl": "Een getal dat tekstemotie aangeeft"
                },
                {
                    "en": "A grammar grade",
                    "es": "Una calificación de gramática",
                    "de": "Eine Grammatiknote",
                    "nl": "Een grammaticacijfer"
                },
                {
                    "en": "A word count",
                    "es": "Un conteo de palabras",
                    "de": "Eine Wortanzahl",
                    "nl": "Een woordtelling"
                },
                {
                    "en": "A file size",
                    "es": "Un tamaño de archivo",
                    "de": "Eine Dateigröße",
                    "nl": "Een bestandsgrootte"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A sentiment score is a numerical value indicating how positive or negative text content is.",
                "es": "Un puntaje de sentimiento indica cuán positivo o negativo es el texto.",
                "de": "Ein Sentiment-Score zeigt an wie positiv oder negativ ein Text ist.",
                "nl": "Een sentimentscore geeft aan hoe positief of negatief een tekst is."
            }
        },
        {
            "question": {
                "en": "What is a language resource?",
                "es": "¿Qué es un recurso lingüístico?",
                "de": "Was ist eine Sprachressource?",
                "nl": "Wat is een taalbron?"
            },
            "options": [
                {
                    "en": "Data or tools used for NLP tasks",
                    "es": "Datos o herramientas para tareas de PLN",
                    "de": "Daten oder Werkzeuge für NLP-Aufgaben",
                    "nl": "Data of tools voor NLP-taken"
                },
                {
                    "en": "A language school",
                    "es": "Una escuela de idiomas",
                    "de": "Eine Sprachschule",
                    "nl": "Een taalschool"
                },
                {
                    "en": "A translation agency",
                    "es": "Una agencia de traducción",
                    "de": "Ein Übersetzungsbüro",
                    "nl": "Een vertaalbureau"
                },
                {
                    "en": "A library building",
                    "es": "Un edificio de biblioteca",
                    "de": "Ein Bibliotheksgebäude",
                    "nl": "Een bibliotheekgebouw"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Language resources include corpora, lexicons, and tools used for NLP research and development.",
                "es": "Los recursos lingüísticos incluyen corpora, léxicos y herramientas para PLN.",
                "de": "Sprachressourcen umfassen Korpora, Lexika und Werkzeuge für NLP.",
                "nl": "Taalbronnen omvatten corpora, lexicons en tools voor NLP-onderzoek."
            }
        },
        {
            "question": {
                "en": "What is natural language understanding?",
                "es": "¿Qué es la comprensión del lenguaje natural?",
                "de": "Was ist natürliches Sprachverstehen?",
                "nl": "Wat is natuurlijk taalbegrip?"
            },
            "options": [
                {
                    "en": "Machines understanding human language meaning",
                    "es": "Máquinas entendiendo significado del lenguaje",
                    "de": "Maschinen verstehen menschliche Sprache",
                    "nl": "Machines begrijpen menselijke taalbetekenis"
                },
                {
                    "en": "Humans learning to code",
                    "es": "Humanos aprendiendo a programar",
                    "de": "Menschen lernen zu programmieren",
                    "nl": "Mensen leren programmeren"
                },
                {
                    "en": "Animals communicating",
                    "es": "Animales comunicándose",
                    "de": "Tiere kommunizieren",
                    "nl": "Dieren communiceren"
                },
                {
                    "en": "Writing poetry",
                    "es": "Escribir poesía",
                    "de": "Gedichte schreiben",
                    "nl": "Poëzie schrijven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Natural language understanding enables machines to comprehend human language meaning and intent.",
                "es": "La comprensión del lenguaje natural permite a máquinas comprender significado e intención.",
                "de": "Natürliches Sprachverstehen ermöglicht Maschinen menschliche Sprache zu verstehen.",
                "nl": "Natuurlijk taalbegrip stelt machines in staat menselijke taal te begrijpen."
            }
        },
        {
            "question": {
                "en": "What is natural language generation?",
                "es": "¿Qué es la generación de lenguaje natural?",
                "de": "Was ist natürliche Sprachgenerierung?",
                "nl": "Wat is natuurlijke taalgeneratie?"
            },
            "options": [
                {
                    "en": "Machines producing human-like text",
                    "es": "Máquinas produciendo texto similar al humano",
                    "de": "Maschinen erzeugen menschenähnlichen Text",
                    "nl": "Machines produceren mensachtige tekst"
                },
                {
                    "en": "Humans writing code",
                    "es": "Humanos escribiendo código",
                    "de": "Menschen schreiben Code",
                    "nl": "Mensen schrijven code"
                },
                {
                    "en": "Animals producing sounds",
                    "es": "Animales produciendo sonidos",
                    "de": "Tiere erzeugen Laute",
                    "nl": "Dieren produceren geluiden"
                },
                {
                    "en": "Printing documents",
                    "es": "Imprimir documentos",
                    "de": "Dokumente drucken",
                    "nl": "Documenten afdrukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Natural language generation enables machines to produce readable human-like text.",
                "es": "La generación de lenguaje natural permite a máquinas producir texto legible.",
                "de": "Natürliche Sprachgenerierung ermöglicht Maschinen lesbaren Text zu erzeugen.",
                "nl": "Natuurlijke taalgeneratie stelt machines in staat leesbare tekst te produceren."
            }
        },
        {
            "question": {
                "en": "What is a token frequency?",
                "es": "¿Qué es la frecuencia de un token?",
                "de": "Was ist Token-Häufigkeit?",
                "nl": "Wat is tokenfrequentie?"
            },
            "options": [
                {
                    "en": "How often a token appears in text",
                    "es": "Con qué frecuencia aparece un token",
                    "de": "Wie oft ein Token im Text vorkommt",
                    "nl": "Hoe vaak een token in tekst voorkomt"
                },
                {
                    "en": "The size of a token",
                    "es": "El tamaño de un token",
                    "de": "Die Größe eines Tokens",
                    "nl": "De grootte van een token"
                },
                {
                    "en": "The color of a token",
                    "es": "El color de un token",
                    "de": "Die Farbe eines Tokens",
                    "nl": "De kleur van een token"
                },
                {
                    "en": "The age of a token",
                    "es": "La edad de un token",
                    "de": "Das Alter eines Tokens",
                    "nl": "De leeftijd van een token"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Token frequency is the count of how many times a specific token appears in text.",
                "es": "La frecuencia de token es cuántas veces aparece un token específico.",
                "de": "Token-Häufigkeit ist die Anzahl wie oft ein Token im Text vorkommt.",
                "nl": "Tokenfrequentie is hoe vaak een specifiek token in tekst voorkomt."
            }
        },
        {
            "question": {
                "en": "What is a training set in NLP?",
                "es": "¿Qué es un conjunto de entrenamiento?",
                "de": "Was ist ein Trainingsset im NLP?",
                "nl": "Wat is een trainingsset in NLP?"
            },
            "options": [
                {
                    "en": "Data used to teach a model",
                    "es": "Datos usados para enseñar un modelo",
                    "de": "Daten zum Trainieren eines Modells",
                    "nl": "Data gebruikt om een model te trainen"
                },
                {
                    "en": "A set of exercises",
                    "es": "Un conjunto de ejercicios",
                    "de": "Eine Übungssammlung",
                    "nl": "Een set oefeningen"
                },
                {
                    "en": "A gym membership",
                    "es": "Una membresía de gimnasio",
                    "de": "Eine Fitnessmitgliedschaft",
                    "nl": "Een sportschoollidmaatschap"
                },
                {
                    "en": "A test exam",
                    "es": "Un examen de prueba",
                    "de": "Eine Prüfung",
                    "nl": "Een toets"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A training set is labeled data used to teach an NLP model to recognize patterns.",
                "es": "Un conjunto de entrenamiento son datos etiquetados para enseñar modelos.",
                "de": "Ein Trainingsset sind markierte Daten zum Trainieren eines NLP-Modells.",
                "nl": "Een trainingsset is gelabelde data om een NLP-model patronen te leren."
            }
        },
        {
            "question": {
                "en": "What is a test set in NLP?",
                "es": "¿Qué es un conjunto de prueba?",
                "de": "Was ist ein Testset im NLP?",
                "nl": "Wat is een testset in NLP?"
            },
            "options": [
                {
                    "en": "Data used to evaluate model performance",
                    "es": "Datos para evaluar el rendimiento",
                    "de": "Daten zur Bewertung der Modellleistung",
                    "nl": "Data om modelprestaties te evalueren"
                },
                {
                    "en": "A practice exam",
                    "es": "Un examen de práctica",
                    "de": "Eine Übungsprüfung",
                    "nl": "Een oefentoets"
                },
                {
                    "en": "A training manual",
                    "es": "Un manual de entrenamiento",
                    "de": "Ein Trainingshandbuch",
                    "nl": "Een trainingshandleiding"
                },
                {
                    "en": "A debugging tool",
                    "es": "Una herramienta de depuración",
                    "de": "Ein Debugging-Tool",
                    "nl": "Een debuggingtool"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A test set is separate data used to evaluate how well a trained NLP model performs.",
                "es": "Un conjunto de prueba evalúa el rendimiento de un modelo entrenado.",
                "de": "Ein Testset bewertet wie gut ein trainiertes NLP-Modell funktioniert.",
                "nl": "Een testset evalueert hoe goed een getraind NLP-model presteert."
            }
        },
        {
            "question": {
                "en": "What is data augmentation in NLP?",
                "es": "¿Qué es la aumentación de datos en PLN?",
                "de": "Was ist Datenerweiterung im NLP?",
                "nl": "Wat is data-augmentatie in NLP?"
            },
            "options": [
                {
                    "en": "Creating more training data from existing data",
                    "es": "Crear más datos de entrenamiento",
                    "de": "Mehr Trainingsdaten aus bestehenden erstellen",
                    "nl": "Meer trainingsdata maken uit bestaande data"
                },
                {
                    "en": "Deleting data",
                    "es": "Eliminar datos",
                    "de": "Daten löschen",
                    "nl": "Data verwijderen"
                },
                {
                    "en": "Compressing data",
                    "es": "Comprimir datos",
                    "de": "Daten komprimieren",
                    "nl": "Data comprimeren"
                },
                {
                    "en": "Printing data",
                    "es": "Imprimir datos",
                    "de": "Daten drucken",
                    "nl": "Data afdrukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Data augmentation creates additional training examples by modifying existing data.",
                "es": "La aumentación crea ejemplos adicionales modificando datos existentes.",
                "de": "Datenerweiterung erstellt zusätzliche Trainingsbeispiele durch Modifikation.",
                "nl": "Data-augmentatie maakt extra trainingsvoorbeelden door bestaande data aan te passen."
            }
        },
        {
            "question": {
                "en": "What is a pipeline in NLP?",
                "es": "¿Qué es un pipeline en PLN?",
                "de": "Was ist eine Pipeline im NLP?",
                "nl": "Wat is een pipeline in NLP?"
            },
            "options": [
                {
                    "en": "A sequence of processing steps",
                    "es": "Una secuencia de pasos de procesamiento",
                    "de": "Eine Folge von Verarbeitungsschritten",
                    "nl": "Een reeks verwerkingsstappen"
                },
                {
                    "en": "A water pipe",
                    "es": "Una tubería de agua",
                    "de": "Ein Wasserrohr",
                    "nl": "Een waterpijp"
                },
                {
                    "en": "A single algorithm",
                    "es": "Un solo algoritmo",
                    "de": "Ein einzelner Algorithmus",
                    "nl": "Een enkel algoritme"
                },
                {
                    "en": "A database table",
                    "es": "Una tabla de base de datos",
                    "de": "Eine Datenbanktabelle",
                    "nl": "Een databasetabel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An NLP pipeline chains together processing steps like tokenization, POS tagging, and NER.",
                "es": "Un pipeline encadena pasos como tokenización, POS y NER.",
                "de": "Eine NLP-Pipeline verkettet Schritte wie Tokenisierung, POS-Tagging und NER.",
                "nl": "Een NLP-pipeline koppelt verwerkingsstappen zoals tokenisatie, POS-tagging en NER."
            }
        },
        {
            "question": {
                "en": "What is a sentiment lexicon?",
                "es": "¿Qué es un léxico de sentimiento?",
                "de": "Was ist ein Sentiment-Lexikon?",
                "nl": "Wat is een sentimentlexicon?"
            },
            "options": [
                {
                    "en": "A word list with emotion scores",
                    "es": "Una lista de palabras con puntajes de emoción",
                    "de": "Eine Wortliste mit Emotionswerten",
                    "nl": "Een woordenlijst met emotiewaarden"
                },
                {
                    "en": "A grammar dictionary",
                    "es": "Un diccionario de gramática",
                    "de": "Ein Grammatikwörterbuch",
                    "nl": "Een grammaticawoordenboek"
                },
                {
                    "en": "A translation guide",
                    "es": "Una guía de traducción",
                    "de": "Ein Übersetzungsleitfaden",
                    "nl": "Een vertaalgids"
                },
                {
                    "en": "A font catalog",
                    "es": "Un catálogo de fuentes",
                    "de": "Ein Schriftkatalog",
                    "nl": "Een lettertypecatalogus"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A sentiment lexicon contains words labeled with their emotional polarity like positive or negative.",
                "es": "Un léxico de sentimiento contiene palabras con su polaridad emocional.",
                "de": "Ein Sentiment-Lexikon enthält Wörter mit ihrer emotionalen Polarität.",
                "nl": "Een sentimentlexicon bevat woorden gelabeld met emotionele polariteit."
            }
        },
        {
            "question": {
                "en": "What is Levenshtein distance?",
                "es": "¿Qué es la distancia de Levenshtein?",
                "de": "Was ist die Levenshtein-Distanz?",
                "nl": "Wat is de Levenshtein-afstand?"
            },
            "options": [
                {
                    "en": "Minimum edits to change one word to another",
                    "es": "Ediciones mínimas para cambiar una palabra",
                    "de": "Minimale Bearbeitungen um ein Wort zu ändern",
                    "nl": "Minimale bewerkingen om een woord te veranderen"
                },
                {
                    "en": "Physical distance between words",
                    "es": "Distancia física entre palabras",
                    "de": "Physischer Abstand zwischen Wörtern",
                    "nl": "Fysieke afstand tussen woorden"
                },
                {
                    "en": "Time to type a word",
                    "es": "Tiempo para escribir una palabra",
                    "de": "Zeit ein Wort zu tippen",
                    "nl": "Tijd om een woord te typen"
                },
                {
                    "en": "Word frequency difference",
                    "es": "Diferencia de frecuencia",
                    "de": "Häufigkeitsunterschied",
                    "nl": "Frequentieverschil"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Levenshtein distance counts minimum insertions, deletions, and substitutions between two strings.",
                "es": "La distancia de Levenshtein cuenta inserciones, eliminaciones y sustituciones mínimas.",
                "de": "Die Levenshtein-Distanz zählt minimale Einfügungen, Löschungen und Ersetzungen.",
                "nl": "De Levenshtein-afstand telt minimale invoegingen, verwijderingen en vervangingen."
            }
        },
        {
            "question": {
                "en": "What is a language corpus example?",
                "es": "¿Cuál es un ejemplo de corpus?",
                "de": "Was ist ein Korpus-Beispiel?",
                "nl": "Wat is een voorbeeld van een corpus?"
            },
            "options": [
                {
                    "en": "Wikipedia text collection",
                    "es": "Colección de texto de Wikipedia",
                    "de": "Wikipedia-Textsammlung",
                    "nl": "Wikipedia-tekstverzameling"
                },
                {
                    "en": "A single tweet",
                    "es": "Un solo tweet",
                    "de": "Ein einzelner Tweet",
                    "nl": "Een enkele tweet"
                },
                {
                    "en": "One email",
                    "es": "Un correo",
                    "de": "Eine E-Mail",
                    "nl": "Eén e-mail"
                },
                {
                    "en": "A phone number",
                    "es": "Un número de teléfono",
                    "de": "Eine Telefonnummer",
                    "nl": "Een telefoonnummer"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Wikipedia is commonly used as a large text corpus for NLP research and model training.",
                "es": "Wikipedia se usa comúnmente como corpus grande para investigación NLP.",
                "de": "Wikipedia wird häufig als großer Textkorpus für NLP-Forschung verwendet.",
                "nl": "Wikipedia wordt veel gebruikt als groot tekstcorpus voor NLP-onderzoek."
            }
        }
    ]
};
