// Natuurlijke taalverwerking Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Text Preprocessing",
          "es": "Preprocesamiento de Texto",
          "de": "Textvorverarbeitung",
          "nl": "Tekstvoorverwerking"
    },
    questions: [
      {
        question: {
                  "en": "What is the purpose of removing stop words in text preprocessing?",
                  "es": "¿Cuál es el propósito de eliminar palabras vacías en preprocesamiento de texto?",
                  "de": "Was ist der Zweck des Entfernens von Stoppwörtern in der Textvorverarbeitung?",
                  "nl": "Wat is het doel van het verwijderen van stopwoorden in tekstvoorverwerking?"
        },
        options: [
        {
                  "en": "To remove common words that don't carry much meaning",
                  "es": "Para eliminar palabras comunes que no llevan mucho significado",
                  "de": "Um häufige Wörter zu entfernen die nicht viel Bedeutung tragen",
                  "nl": "Om veelvoorkomende woorden te verwijderen die niet veel betekenis dragen"
        },
        {
                  "en": "To stop the text processing pipeline",
                  "es": "Para detener el pipeline de procesamiento de texto",
                  "de": "Um die Textverarbeitungspipeline zu stoppen",
                  "nl": "Om de tekstverwerkingspijplijn te stoppen"
        },
        {
                  "en": "To count the total number of words",
                  "es": "Para contar el número total de palabras",
                  "de": "Um die Gesamtzahl der Wörter zu zählen",
                  "nl": "Om het totale aantal woorden te tellen"
        },
        {
                  "en": "To identify the end of sentences",
                  "es": "Para identificar el final de las oraciones",
                  "de": "Um das Ende von Sätzen zu identifizieren",
                  "nl": "Om het einde van zinnen te identificeren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Stop words like 'the', 'and', 'is' are frequently used but carry little semantic meaning, so removing them helps focus on more meaningful words and reduces noise.",
                  "es": "Las palabras vacías como 'el', 'y', 'es' se usan frecuentemente pero llevan poco significado semántico, así que eliminarlas ayuda a enfocarse en palabras más significativas y reduce el ruido.",
                  "de": "Stoppwörter wie 'der', 'und', 'ist' werden häufig verwendet aber tragen wenig semantische Bedeutung, daher hilft das Entfernen dabei sich auf bedeutungsvollere Wörter zu konzentrieren und Rauschen zu reduzieren.",
                  "nl": "Stopwoorden zoals 'de', 'en', 'is' worden vaak gebruikt maar dragen weinig semantische betekenis, dus het verwijderen ervan helpt om te focussen op meer betekenisvolle woorden en vermindert ruis."
        }
      },
      {
        question: {
                  "en": "What is the difference between stemming and lemmatization?",
                  "es": "¿Cuál es la diferencia entre stemming y lemmatización?",
                  "de": "Was ist der Unterschied zwischen Stemming und Lemmatisierung?",
                  "nl": "Wat is het verschil tussen stemming en lemmatisatie?"
        },
        options: [
        {
                  "en": "Stemming cuts word endings, lemmatization finds the actual root word using dictionary",
                  "es": "Stemming corta terminaciones de palabras, lemmatización encuentra la palabra raíz actual usando diccionario",
                  "de": "Stemming schneidet Wortendungen ab, Lemmatisierung findet das tatsächliche Grundwort mit Wörterbuch",
                  "nl": "Stemming knipt woordeinden af, lemmatisatie vindt het werkelijke grondwoord met woordenboek"
        },
        {
                  "en": "They are the same process",
                  "es": "Son el mismo proceso",
                  "de": "Sie sind derselbe Prozess",
                  "nl": "Ze zijn hetzelfde proces"
        },
        {
                  "en": "Lemmatization only works with verbs",
                  "es": "Lemmatización solo funciona con verbos",
                  "de": "Lemmatisierung funktioniert nur mit Verben",
                  "nl": "Lemmatisatie werkt alleen met werkwoorden"
        },
        {
                  "en": "Stemming is faster than lemmatization",
                  "es": "Stemming es más rápido que lemmatización",
                  "de": "Stemming ist schneller als Lemmatisierung",
                  "nl": "Stemming is sneller dan lemmatisatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Stemming simply removes suffixes using rules, while lemmatization uses vocabulary and morphological analysis to return the base form (lemma) of a word.",
                  "es": "Stemming simplemente elimina sufijos usando reglas, mientras lemmatización usa vocabulario y análisis morfológico para retornar la forma base (lema) de una palabra.",
                  "de": "Stemming entfernt einfach Suffixe mit Regeln, während Lemmatisierung Vokabular und morphologische Analyse verwendet um die Grundform (Lemma) eines Wortes zurückzugeben.",
                  "nl": "Stemming verwijdert eenvoudig achtervoegsels met regels, terwijl lemmatisatie vocabulaire en morfologische analyse gebruikt om de basisvorm (lemma) van een woord terug te geven."
        }
      },
      {
        question: {
                  "en": "What is Part-of-Speech (POS) tagging?",
                  "es": "¿Qué es el etiquetado de partes del discurso (POS)?",
                  "de": "Was ist Part-of-Speech (POS) Tagging?",
                  "nl": "Wat is Part-of-Speech (POS) tagging?"
        },
        options: [
        {
                  "en": "Tagging positive and negative sentiment",
                  "es": "Etiquetar sentimiento positivo y negativo",
                  "de": "Positive und negative Stimmung markieren",
                  "nl": "Positief en negatief sentiment taggen"
        },
        {
                  "en": "Marking the beginning and end of speeches",
                  "es": "Marcar el principio y final de discursos",
                  "de": "Den Anfang und das Ende von Reden markieren",
                  "nl": "Het begin en einde van speeches markeren"
        },
        {
                  "en": "Finding the position of words in a sentence",
                  "es": "Encontrar la posición de las palabras en una oración",
                  "de": "Die Position von Wörtern in einem Satz finden",
                  "nl": "De positie van woorden in een zin vinden"
        },
        {
                  "en": "Assigning grammatical categories (noun, verb, adjective) to each word",
                  "es": "Asignar categorías gramaticales (sustantivo, verbo, adjetivo) a cada palabra",
                  "de": "Grammatische Kategorien (Substantiv, Verb, Adjektiv) jedem Wort zuweisen",
                  "nl": "Grammaticale categorieën (zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord) toewijzen aan elk woord"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "POS tagging assigns grammatical labels to words based on their role in the sentence, helping understand sentence structure and meaning.",
                  "es": "El etiquetado POS asigna etiquetas gramaticales a palabras basándose en su rol en la oración, ayudando a entender estructura y significado de la oración.",
                  "de": "POS-Tagging weist Wörtern grammatische Labels basierend auf ihrer Rolle im Satz zu, hilft beim Verstehen von Satzstruktur und Bedeutung.",
                  "nl": "POS tagging wijst grammaticale labels toe aan woorden gebaseerd op hun rol in de zin, helpt bij het begrijpen van zinsstructuur en betekenis."
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
                  "en": "Recognizing the names of authors",
                  "es": "Reconocer los nombres de autores",
                  "de": "Die Namen von Autoren erkennen",
                  "nl": "De namen van auteurs herkennen"
        },
        {
                  "en": "Identifying and classifying named entities like people, places, organizations in text",
                  "es": "Identificar y clasificar entidades nombradas como personas, lugares, organizaciones en texto",
                  "de": "Identifizierung und Klassifizierung benannter Entitäten wie Personen, Orte, Organisationen in Text",
                  "nl": "Het identificeren en classificeren van genoemde entiteiten zoals personen, plaatsen, organisaties in tekst"
        },
        {
                  "en": "Creating new entity names",
                  "es": "Crear nuevos nombres de entidades",
                  "de": "Neue Entitätsnamen erstellen",
                  "nl": "Nieuwe entiteitsnamen maken"
        },
        {
                  "en": "Finding entities in a database",
                  "es": "Encontrar entidades en una base de datos",
                  "de": "Entitäten in einer Datenbank finden",
                  "nl": "Entiteiten vinden in een database"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "NER identifies and extracts entities such as person names, locations, organizations, dates, and other predefined categories from unstructured text.",
                  "es": "NER identifica y extrae entidades como nombres de personas, ubicaciones, organizaciones, fechas y otras categorías predefinidas de texto no estructurado.",
                  "de": "NER identifiziert und extrahiert Entitäten wie Personennamen, Standorte, Organisationen, Daten und andere vordefinierte Kategorien aus unstrukturiertem Text.",
                  "nl": "NER identificeert en extraheert entiteiten zoals persoonsnamen, locaties, organisaties, datums en andere voorgedefinieerde categorieën uit ongestructureerde tekst."
        }
      },
      {
        question: {
                  "en": "What is the Bag of Words (BoW) model?",
                  "es": "¿Qué es el modelo Bolsa de Palabras (BoW)?",
                  "de": "Was ist das Bag of Words (BoW) Modell?",
                  "nl": "Wat is het Bag of Words (BoW) model?"
        },
        options: [
        {
                  "en": "A method for organizing vocabulary",
                  "es": "Un método para organizar vocabulario",
                  "de": "Eine Methode zur Organisation des Vokabulars",
                  "nl": "Een methode voor het organiseren van vocabulaire"
        },
        {
                  "en": "A technique for word translation",
                  "es": "Una técnica para traducción de palabras",
                  "de": "Eine Technik für Wortübersetzung",
                  "nl": "Een techniek voor woordvertaling"
        },
        {
                  "en": "A text representation that counts word frequencies while ignoring grammar and word order",
                  "es": "Una representación de texto que cuenta frecuencias de palabras ignorando gramática y orden de palabras",
                  "de": "Eine Textrepräsentation die Worthäufigkeiten zählt während Grammatik und Wortreihenfolge ignoriert werden",
                  "nl": "Een tekstrepresentatie die woordfrequenties telt terwijl grammatica en woordvolgorde worden genegeerd"
        },
        {
                  "en": "A model for storing words in bags",
                  "es": "Un modelo para almacenar palabras en bolsas",
                  "de": "Ein Modell zum Speichern von Wörtern in Taschen",
                  "nl": "Een model voor het opslaan van woorden in zakken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "BoW creates a vector representation of text where each dimension represents a word and the value represents the frequency of that word in the document.",
                  "es": "BoW crea una representación vectorial de texto donde cada dimensión representa una palabra y el valor representa la frecuencia de esa palabra en el documento.",
                  "de": "BoW erstellt eine Vektorrepräsentation von Text wo jede Dimension ein Wort repräsentiert und der Wert die Häufigkeit dieses Wortes im Dokument repräsentiert.",
                  "nl": "BoW creëert een vectorrepresentatie van tekst waarbij elke dimensie een woord vertegenwoordigt en de waarde de frequentie van dat woord in het document vertegenwoordigt."
        }
      },
      {
        question: {
                  "nl": "Wat is de edit distance tussen twee strings?",
                  "en": "What is the edit distance between two strings?",
                  "es": "¿Qué es la distancia de edición entre dos cadenas?",
                  "de": "Was ist die Edit-Distanz zwischen zwei Strings?"
        },
        options: [
        {
                  "nl": "Het minimum aantal bewerkingen nodig om de ene string in de andere te veranderen",
                  "en": "The minimum number of operations needed to transform one string into another",
                  "es": "El número mínimo de operaciones necesarias para transformar una cadena en otra",
                  "de": "Die minimale Anzahl von Operationen die benötigt werden um einen String in einen anderen zu transformieren"
        },
        {
                  "nl": "Het aantal verschillende karakters",
                  "en": "The number of different characters",
                  "es": "El número de caracteres diferentes",
                  "de": "Die Anzahl verschiedener Zeichen"
        },
        {
                  "nl": "De totale lengte van beide strings",
                  "en": "The total length of both strings",
                  "es": "La longitud total de ambas cadenas",
                  "de": "Die Gesamtlänge beider Strings"
        },
        {
                  "nl": "De lengte van de langste string",
                  "en": "The length of the longest string",
                  "es": "La longitud de la cadena más larga",
                  "de": "Die Länge des längsten Strings"
        }
        ],
        correct: 0,
        explanation: {
                  "nl": "Edit distance (ook wel Levenshtein distance genoemd) meet het minimum aantal single-character bewerkingen (invoegingen, verwijderingen of vervangingen) om de ene string in de andere te veranderen.",
                  "en": "Edit distance (also called Levenshtein distance) measures the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into another.",
                  "es": "La distancia de edición (también llamada distancia de Levenshtein) mide el número mínimo de ediciones de un solo carácter (inserciones, eliminaciones o sustituciones) requeridas para cambiar una cadena en otra.",
                  "de": "Edit-Distanz (auch Levenshtein-Distanz genannt) misst die minimale Anzahl von Einzelzeichen-Bearbeitungen (Einfügungen, Löschungen oder Ersetzungen) die erforderlich sind um einen String in einen anderen zu ändern."
        }
      },
      {
        question: {
                  "nl": "Wat is de Jaccard similarity voor tekstanalyse?",
                  "en": "What is Jaccard similarity for text analysis?",
                  "es": "¿Qué es la similitud de Jaccard para análisis de texto?",
                  "de": "Was ist Jaccard-Ähnlichkeit für Textanalyse?"
        },
        options: [
        {
                  "nl": "De gemiddelde lengte van twee teksten",
                  "en": "The average length of two texts",
                  "es": "La longitud promedio de dos textos",
                  "de": "Die durchschnittliche Länge zweier Texte"
        },
        {
                  "nl": "De tijdsduur om beide teksten te lezen",
                  "en": "The time duration to read both texts",
                  "es": "La duración de tiempo para leer ambos textos",
                  "de": "Die Zeitdauer um beide Texte zu lesen"
        },
        {
                  "nl": "Het aantal zinnen in beide teksten",
                  "en": "The number of sentences in both texts",
                  "es": "El número de oraciones en ambos textos",
                  "de": "Die Anzahl der Sätze in beiden Texten"
        },
        {
                  "nl": "De verhouding van gemeenschappelijke woorden tot de totale unieke woorden in twee teksten",
                  "en": "The ratio of common words to the total unique words in two texts",
                  "es": "La proporción de palabras comunes al total de palabras únicas en dos textos",
                  "de": "Das Verhältnis gemeinsamer Wörter zu den gesamten einzigartigen Wörtern in zwei Texten"
        }
        ],
        correct: 3,
        explanation: {
                  "nl": "Jaccard similarity berekent de overlap tussen twee sets door het aantal gemeenschappelijke elementen te delen door het aantal unieke elementen in beide sets gecombineerd. Voor tekst wordt dit toegepast op woordsets.",
                  "en": "Jaccard similarity calculates the overlap between two sets by dividing the number of common elements by the number of unique elements in both sets combined. For text, this is applied to word sets.",
                  "es": "La similitud de Jaccard calcula la superposición entre dos conjuntos dividiendo el número de elementos comunes por el número de elementos únicos en ambos conjuntos combinados. Para texto, esto se aplica a conjuntos de palabras.",
                  "de": "Jaccard-Ähnlichkeit berechnet die Überlappung zwischen zwei Mengen indem sie die Anzahl gemeinsamer Elemente durch die Anzahl einzigartiger Elemente in beiden kombinierten Mengen teilt. Für Text wird dies auf Wortmengen angewendet."
        }
      },
      {
        question: {
                  "nl": "Wat is case folding in tekstvoorverwerking?",
                  "en": "What is case folding in text preprocessing?",
                  "es": "¿Qué es el case folding en preprocesamiento de texto?",
                  "de": "Was ist Case Folding in der Textvorverarbeitung?"
        },
        options: [
        {
                  "nl": "Het organiseren van tekst per categorie",
                  "en": "Organizing text by category",
                  "es": "Organizar texto por categoría",
                  "de": "Text nach Kategorie organisieren"
        },
        {
                  "nl": "Het verbergen van bepaalde tekstdelen",
                  "en": "Hiding certain text parts",
                  "es": "Ocultar ciertas partes del texto",
                  "de": "Bestimmte Textteile verstecken"
        },
        {
                  "nl": "Het converteren van alle karakters naar kleine letters voor consistentie",
                  "en": "Converting all characters to lowercase for consistency",
                  "es": "Convertir todos los caracteres a minúsculas para consistencia",
                  "de": "Alle Zeichen zur Konsistenz in Kleinbuchstaben umwandeln"
        },
        {
                  "nl": "Het opvouwen van tekst in mappen",
                  "en": "Folding text into folders",
                  "es": "Doblar texto en carpetas",
                  "de": "Text in Ordner falten"
        }
        ],
        correct: 2,
        explanation: {
                  "nl": "Case folding is een vorm van tekstnormalisatie waarbij alle karakters worden omgezet naar een consistente case (meestal kleine letters) zodat 'Apple' en 'apple' als hetzelfde woord worden behandeld.",
                  "en": "Case folding is a form of text normalization where all characters are converted to a consistent case (usually lowercase) so that 'Apple' and 'apple' are treated as the same word.",
                  "es": "El case folding es una forma de normalización de texto donde todos los caracteres se convierten a una case consistente (usualmente minúsculas) para que 'Apple' y 'apple' se traten como la misma palabra.",
                  "de": "Case Folding ist eine Form der Textnormalisierung bei der alle Zeichen in eine konsistente Schreibweise (normalerweise Kleinbuchstaben) konvertiert werden damit 'Apple' und 'apple' als dasselbe Wort behandelt werden."
        }
      },
      {
        question: {
                  "nl": "Wat zijn collocations in NLP?",
                  "en": "What are collocations in NLP?",
                  "es": "¿Qué son las colocaciones en PLN?",
                  "de": "Was sind Kollokationen in NLP?"
        },
        options: [
        {
                  "nl": "Woorden op dezelfde locatie in verschillende teksten",
                  "en": "Words at the same location in different texts",
                  "es": "Palabras en la misma ubicación en diferentes textos",
                  "de": "Wörter an derselben Stelle in verschiedenen Texten"
        },
        {
                  "nl": "Woorden met dezelfde lengte",
                  "en": "Words with the same length",
                  "es": "Palabras con la misma longitud",
                  "de": "Wörter mit derselben Länge"
        },
        {
                  "nl": "Synonieme woorden",
                  "en": "Synonymous words",
                  "es": "Palabras sinónimas",
                  "de": "Synonyme Wörter"
        },
        {
                  "nl": "Woorden die vaak samen voorkomen en een specifieke betekenis hebben",
                  "en": "Words that frequently occur together and have a specific meaning",
                  "es": "Palabras que ocurren frecuentemente juntas y tienen un significado específico",
                  "de": "Wörter die häufig zusammen auftreten und eine spezifische Bedeutung haben"
        }
        ],
        correct: 3,
        explanation: {
                  "nl": "Collocations zijn woordcombinaties die samen een specifieke betekenis hebben die niet altijd afleidbaar is uit de individuele woorden, zoals 'koffie zetten' of 'sterke koffie'.",
                  "en": "Collocations are word combinations that together have a specific meaning that isn't always derivable from the individual words, like 'strong coffee' or 'make coffee'.",
                  "es": "Las colocaciones son combinaciones de palabras que juntas tienen un significado específico que no siempre se puede derivar de las palabras individuales, como 'café fuerte' o 'hacer café'.",
                  "de": "Kollokationen sind Wortkombinationen die zusammen eine spezifische Bedeutung haben die nicht immer aus den einzelnen Wörtern ableitbar ist, wie 'starker Kaffee' oder 'Kaffee machen'."
        }
      },
      {
        question: {
                  "nl": "Wat is text chunking?",
                  "en": "What is text chunking?",
                  "es": "¿Qué es el text chunking?",
                  "de": "Was ist Text Chunking?"
        },
        options: [
        {
                  "nl": "Het groeperen van woorden in betekenisvolle syntactische eenheden",
                  "en": "Grouping words into meaningful syntactic units",
                  "es": "Agrupar palabras en unidades sintácticas significativas",
                  "de": "Wörter in bedeutungsvolle syntaktische Einheiten gruppieren"
        },
        {
                  "nl": "Het converteren van tekst naar chunks van data",
                  "en": "Converting text to chunks of data",
                  "es": "Convertir texto a trozos de datos",
                  "de": "Text in Datenchunks konvertieren"
        },
        {
                  "nl": "Het comprimeren van tekstbestanden",
                  "en": "Compressing text files",
                  "es": "Comprimir archivos de texto",
                  "de": "Textdateien komprimieren"
        },
        {
                  "nl": "Het opdelen van tekst in gelijke stukken",
                  "en": "Dividing text into equal pieces",
                  "es": "Dividir texto en piezas iguales",
                  "de": "Text in gleiche Stücke teilen"
        }
        ],
        correct: 0,
        explanation: {
                  "nl": "Text chunking identificeert niet-overlappende woordgroepen die samen een grammaticale eenheid vormen, zoals noun phrases (zelfstandige naamwoordgroepen) of verb phrases (werkwoordgroepen).",
                  "en": "Text chunking identifies non-overlapping groups of words that form grammatical units together, such as noun phrases or verb phrases.",
                  "es": "El text chunking identifica grupos no superpuestos de palabras que forman unidades gramaticales juntas, como frases nominales o frases verbales.",
                  "de": "Text Chunking identifiziert nicht-überlappende Wortgruppen die zusammen grammatische Einheiten bilden wie Nominalphrasen oder Verbalphrasen."
        }
      },
      {
        question: {
                  "nl": "Wat is een sliding window in NLP?",
                  "en": "What is a sliding window in NLP?",
                  "es": "¿Qué es una ventana deslizante en PLN?",
                  "de": "Was ist ein Sliding Window in NLP?"
        },
        options: [
        {
                  "nl": "Een algoritme voor venstergrotte optimalisatie",
                  "en": "An algorithm for window size optimization",
                  "es": "Un algoritmo para optimización de tamaño de ventana",
                  "de": "Ein Algorithmus für Fenstergrößenoptimierung"
        },
        {
                  "nl": "Een techniek om een vaste grootte venster over tekst te bewegen voor contextanalyse",
                  "en": "A technique to move a fixed-size window over text for context analysis",
                  "es": "Una técnica para mover una ventana de tamaño fijo sobre texto para análisis de contexto",
                  "de": "Eine Technik um ein Fenster fester Größe über Text zu bewegen für Kontextanalyse"
        },
        {
                  "nl": "Een methode om vensters te openen en sluiten",
                  "en": "A method to open and close windows",
                  "es": "Un método para abrir y cerrar ventanas",
                  "de": "Eine Methode um Fenster zu öffnen und zu schließen"
        },
        {
                  "nl": "Een grafische interface voor tekstbewerking",
                  "en": "A graphical interface for text editing",
                  "es": "Una interfaz gráfica para edición de texto",
                  "de": "Eine grafische Benutzeroberfläche für Textbearbeitung"
        }
        ],
        correct: 1,
        explanation: {
                  "nl": "Een sliding window beweegt een venster van vaste grootte (bijvoorbeeld 3 woorden) stap voor stap over de tekst om lokale context en woordpatronen te analyseren. Dit wordt gebruikt in word embeddings en taalmodellen.",
                  "en": "A sliding window moves a fixed-size window (e.g., 3 words) step by step over text to analyze local context and word patterns. This is used in word embeddings and language models.",
                  "es": "Una ventana deslizante mueve una ventana de tamaño fijo (ej., 3 palabras) paso a paso sobre el texto para analizar contexto local y patrones de palabras. Esto se usa en word embeddings y modelos de lenguaje.",
                  "de": "Ein Sliding Window bewegt ein Fenster fester Größe (z.B. 3 Wörter) schrittweise über Text um lokalen Kontext und Wortmuster zu analysieren. Dies wird in Word Embeddings und Sprachmodellen verwendet."
        }
      },
      {
        question: {
                  "nl": "Wat is text segmentation?",
                  "en": "What is text segmentation?",
                  "es": "¿Qué es la segmentación de texto?",
                  "de": "Was ist Textsegmentierung?"
        },
        options: [
        {
                  "nl": "Het organiseren van tekst in segmenten van de markt",
                  "en": "Organizing text into market segments",
                  "es": "Organizar texto en segmentos de mercado",
                  "de": "Text in Marktsegmente organisieren"
        },
        {
                  "nl": "Het groeperen van tekst op basis van kleur",
                  "en": "Grouping text based on color",
                  "es": "Agrupar texto basado en color",
                  "de": "Text basierend auf Farbe gruppieren"
        },
        {
                  "nl": "Het delen van tekst tussen meerdere gebruikers",
                  "en": "Sharing text between multiple users",
                  "es": "Compartir texto entre múltiples usuarios",
                  "de": "Text zwischen mehreren Benutzern teilen"
        },
        {
                  "nl": "Het opdelen van tekst in logische eenheden zoals zinnen, woorden of paragrafen",
                  "en": "Dividing text into logical units like sentences, words, or paragraphs",
                  "es": "Dividir texto en unidades lógicas como oraciones, palabras o párrafos",
                  "de": "Text in logische Einheiten wie Sätze, Wörter oder Absätze unterteilen"
        }
        ],
        correct: 3,
        explanation: {
                  "nl": "Text segmentation is het proces van het identificeren van grenzen tussen teksteneenheden. Dit kan woorden scheiden (vooral in talen zonder spaties zoals Chinees), zinnen identificeren, of paragrafen afbakenen.",
                  "en": "Text segmentation is the process of identifying boundaries between text units. This can involve separating words (especially in languages without spaces like Chinese), identifying sentences, or delimiting paragraphs.",
                  "es": "La segmentación de texto es el proceso de identificar límites entre unidades de texto. Esto puede involucrar separar palabras (especialmente en idiomas sin espacios como el chino), identificar oraciones, o delimitar párrafos.",
                  "de": "Textsegmentierung ist der Prozess der Identifizierung von Grenzen zwischen Texteinheiten. Dies kann das Trennen von Wörtern (besonders in Sprachen ohne Leerzeichen wie Chinesisch), das Identifizieren von Sätzen oder das Abgrenzen von Absätzen beinhalten."
        }
      },
      {
        question: {
                  "nl": "Wat is frequency analysis in tekstmining?",
                  "en": "What is frequency analysis in text mining?",
                  "es": "¿Qué es el análisis de frecuencia en minería de texto?",
                  "de": "Was ist Häufigkeitsanalyse in Text Mining?"
        },
        options: [
        {
                  "nl": "Het meten van hoe vaak tekst wordt gelezen",
                  "en": "Measuring how often text is read",
                  "es": "Medir cuán a menudo se lee el texto",
                  "de": "Messen wie oft Text gelesen wird"
        },
        {
                  "nl": "Het bepalen van de beste tijd om tekst te publiceren",
                  "en": "Determining the best time to publish text",
                  "es": "Determinar el mejor momento para publicar texto",
                  "de": "Die beste Zeit zum Veröffentlichen von Text bestimmen"
        },
        {
                  "nl": "Het tellen hoe vaak woorden of termen voorkomen in een tekst of corpus",
                  "en": "Counting how often words or terms appear in a text or corpus",
                  "es": "Contar cuán a menudo aparecen palabras o términos en un texto o corpus",
                  "de": "Zählen wie oft Wörter oder Begriffe in einem Text oder Korpus erscheinen"
        },
        {
                  "nl": "Het analyseren van radiofrequenties",
                  "en": "Analyzing radio frequencies",
                  "es": "Analizar frecuencias de radio",
                  "de": "Radiofrequenzen analysieren"
        }
        ],
        correct: 2,
        explanation: {
                  "nl": "Frequency analysis telt hoe vaak specifieke woorden, termen of n-grams voorkomen in een tekst. Dit helpt bij het identificeren van belangrijke termen, thema's en patronen in tekstdata.",
                  "en": "Frequency analysis counts how often specific words, terms, or n-grams occur in text. This helps identify important terms, themes, and patterns in textual data.",
                  "es": "El análisis de frecuencia cuenta cuán a menudo ocurren palabras específicas, términos o n-gramas en texto. Esto ayuda a identificar términos importantes, temas y patrones en datos textuales.",
                  "de": "Häufigkeitsanalyse zählt wie oft spezifische Wörter, Begriffe oder n-Gramme in Text auftreten. Dies hilft wichtige Begriffe, Themen und Muster in Textdaten zu identifizieren."
        }
      },
      {
        question: {
                  "nl": "Wat is text normalization?",
                  "en": "What is text normalization?",
                  "es": "¿Qué es la normalización de texto?",
                  "de": "Was ist Textnormalisierung?"
        },
        options: [
        {
                  "nl": "Het maken van tekst normaal leesbaar",
                  "en": "Making text normally readable",
                  "es": "Hacer texto normalmente legible",
                  "de": "Text normal lesbar machen"
        },
        {
                  "nl": "Het aanpassen van tekst aan normale statistieken",
                  "en": "Adjusting text to normal statistics",
                  "es": "Ajustar texto a estadísticas normales",
                  "de": "Text an normale Statistiken anpassen"
        },
        {
                  "nl": "Het controleren of tekst normaal is",
                  "en": "Checking if text is normal",
                  "es": "Verificar si el texto es normal",
                  "de": "Überprüfen ob Text normal ist"
        },
        {
                  "nl": "Het converteren van tekst naar een standaard, consistente vorm",
                  "en": "Converting text to a standard, consistent form",
                  "es": "Convertir texto a una forma estándar y consistente",
                  "de": "Text in eine standardisierte, konsistente Form konvertieren"
        }
        ],
        correct: 3,
        explanation: {
                  "nl": "Text normalization omvat verschillende technieken zoals case folding, het verwijderen van leestekens, het standardiseren van afkortingen, en het omzetten van getallen naar woorden om tekst consistent te maken voor analyse.",
                  "en": "Text normalization includes various techniques like case folding, removing punctuation, standardizing abbreviations, and converting numbers to words to make text consistent for analysis.",
                  "es": "La normalización de texto incluye varias técnicas como case folding, eliminar puntuación, estandarizar abreviaciones, y convertir números a palabras para hacer texto consistente para análisis.",
                  "de": "Textnormalisierung umfasst verschiedene Techniken wie Case Folding, das Entfernen von Interpunktion, das Standardisieren von Abkürzungen und das Konvertieren von Zahlen in Wörter um Text für die Analyse konsistent zu machen."
        }
      },
      {
        question: {
                  "nl": "Wat is noise removal in tekstvoorverwerking?",
                  "en": "What is noise removal in text preprocessing?",
                  "es": "¿Qué es la eliminación de ruido en preprocesamiento de texto?",
                  "de": "Was ist Rauschentfernung in der Textvorverarbeitung?"
        },
        options: [
        {
                  "nl": "Het verwijderen van irrelevante of storende elementen uit tekst",
                  "en": "Removing irrelevant or disruptive elements from text",
                  "es": "Eliminar elementos irrelevantes o disruptivos del texto",
                  "de": "Irrelevante oder störende Elemente aus Text entfernen"
        },
        {
                  "nl": "Het verminderen van geluidsoverlast tijdens het typen",
                  "en": "Reducing noise pollution while typing",
                  "es": "Reducir la contaminación acústica mientras se escribe",
                  "de": "Lärmbelästigung beim Tippen reduzieren"
        },
        {
                  "nl": "Het verbeteren van de geluidskwaliteit van tekst-naar-spraak",
                  "en": "Improving sound quality of text-to-speech",
                  "es": "Mejorar la calidad de sonido de texto a voz",
                  "de": "Klangqualität von Text-zu-Sprache verbessern"
        },
        {
                  "nl": "Het filteren van audio uit tekstbestanden",
                  "en": "Filtering audio from text files",
                  "es": "Filtrar audio de archivos de texto",
                  "de": "Audio aus Textdateien filtern"
        }
        ],
        correct: 0,
        explanation: {
                  "nl": "Noise removal verwijdert elementen die geen bijdrage leveren aan de analyse zoals HTML tags, speciale karakters, extra spaties, of URLs. Dit helpt om de focus te leggen op de werkelijke tekstinhoud.",
                  "en": "Noise removal eliminates elements that don't contribute to analysis such as HTML tags, special characters, extra spaces, or URLs. This helps focus on the actual text content.",
                  "es": "La eliminación de ruido elimina elementos que no contribuyen al análisis como etiquetas HTML, caracteres especiales, espacios extra, o URLs. Esto ayuda a enfocarse en el contenido textual real.",
                  "de": "Rauschentfernung eliminiert Elemente die nicht zur Analyse beitragen wie HTML-Tags, Sonderzeichen, zusätzliche Leerzeichen oder URLs. Dies hilft sich auf den tatsächlichen Textinhalt zu konzentrieren."
        }
      },
      {
        question: {
                  "nl": "Wat is feature extraction in NLP?",
                  "en": "What is feature extraction in NLP?",
                  "es": "¿Qué es la extracción de características en PLN?",
                  "de": "Was ist Merkmalsextraktion in NLP?"
        },
        options: [
        {
                  "nl": "Het halen van functies uit software",
                  "en": "Extracting functions from software",
                  "es": "Extraer funciones del software",
                  "de": "Funktionen aus Software extrahieren"
        },
        {
                  "nl": "Het identificeren en extraheren van relevante eigenschappen uit tekst voor machine learning",
                  "en": "Identifying and extracting relevant properties from text for machine learning",
                  "es": "Identificar y extraer propiedades relevantes del texto para aprendizaje automático",
                  "de": "Relevante Eigenschaften aus Text für maschinelles Lernen identifizieren und extrahieren"
        },
        {
                  "nl": "Het vinden van kenmerken in databases",
                  "en": "Finding characteristics in databases",
                  "es": "Encontrar características en bases de datos",
                  "de": "Merkmale in Datenbanken finden"
        },
        {
                  "nl": "Het extraheren van metadata uit bestanden",
                  "en": "Extracting metadata from files",
                  "es": "Extraer metadatos de archivos",
                  "de": "Metadaten aus Dateien extrahieren"
        }
        ],
        correct: 1,
        explanation: {
                  "nl": "Feature extraction transformeert ruwe tekstdata naar numerieke features die machine learning algoritmes kunnen gebruiken. Dit omvat technieken zoals bag-of-words, TF-IDF, en word embeddings.",
                  "en": "Feature extraction transforms raw text data into numerical features that machine learning algorithms can use. This includes techniques like bag-of-words, TF-IDF, and word embeddings.",
                  "es": "La extracción de características transforma datos de texto sin procesar en características numéricas que los algoritmos de aprendizaje automático pueden usar. Esto incluye técnicas como bolsa de palabras, TF-IDF, y word embeddings.",
                  "de": "Merkmalsextraktion transformiert rohe Textdaten in numerische Merkmale die maschinelle Lernalgorithmen verwenden können. Dies umfasst Techniken wie Bag-of-Words, TF-IDF und Word Embeddings."
        }
      },
      {
        question: {
                  "nl": "Wat is het doel van lowercasing in tekstvoorverwerking?",
                  "en": "What is the purpose of lowercasing in text preprocessing?",
                  "es": "¿Cuál es el propósito de convertir a minúsculas en preprocesamiento de texto?",
                  "de": "Was ist der Zweck der Kleinschreibung in der Textvorverarbeitung?"
        },
        options: [
        {
                  "nl": "Om tekst stiller te maken",
                  "en": "To make text quieter",
                  "es": "Para hacer el texto más silencioso",
                  "de": "Um Text leiser zu machen"
        },
        {
                  "nl": "Om de bestandsgrootte te verkleinen",
                  "en": "To reduce file size",
                  "es": "Para reducir el tamaño del archivo",
                  "de": "Um die Dateigröße zu reduzieren"
        },
        {
                  "nl": "Om woordconsistentie te waarborgen zodat 'Apple' en 'apple' als hetzelfde worden behandeld",
                  "en": "To ensure word consistency so 'Apple' and 'apple' are treated as the same",
                  "es": "Para asegurar consistencia de palabras para que 'Apple' y 'apple' se traten como lo mismo",
                  "de": "Um Wortkonsistenz sicherzustellen damit 'Apple' und 'apple' gleich behandelt werden"
        },
        {
                  "nl": "Om tekst sneller te laten laden",
                  "en": "To make text load faster",
                  "es": "Para hacer que el texto cargue más rápido",
                  "de": "Um Text schneller laden zu lassen"
        }
        ],
        correct: 2,
        explanation: {
                  "nl": "Lowercasing converteert alle tekst naar kleine letters om te voorkomen dat hetzelfde woord in verschillende cases als verschillende woorden wordt behandeld. Dit verbetert de consistentie en effectiviteit van tekstanalyse.",
                  "en": "Lowercasing converts all text to lowercase to prevent the same word in different cases from being treated as different words. This improves consistency and effectiveness of text analysis.",
                  "es": "Convertir a minúsculas convierte todo el texto a minúsculas para prevenir que la misma palabra en diferentes casos se trate como palabras diferentes. Esto mejora la consistencia y efectividad del análisis de texto.",
                  "de": "Kleinschreibung konvertiert den gesamten Text in Kleinbuchstaben um zu verhindern dass dasselbe Wort in verschiedenen Schreibweisen als verschiedene Wörter behandelt wird. Dies verbessert Konsistenz und Effektivität der Textanalyse."
        }
      },
      {
        question: {
                  "nl": "Wat zijn punctuation marks in de context van tekstvoorverwerking?",
                  "en": "What are punctuation marks in the context of text preprocessing?",
                  "es": "¿Qué son las marcas de puntuación en el contexto del preprocesamiento de texto?",
                  "de": "Was sind Interpunktionszeichen im Kontext der Textvorverarbeitung?"
        },
        options: [
        {
                  "nl": "Tijdstempels in tekstdocumenten",
                  "en": "Timestamps in text documents",
                  "es": "Marcas de tiempo en documentos de texto",
                  "de": "Zeitstempel in Textdokumenten"
        },
        {
                  "nl": "Markeringen die aangeven waar tekst eindigt",
                  "en": "Markers that indicate where text ends",
                  "es": "Marcadores que indican dónde termina el texto",
                  "de": "Markierungen die anzeigen wo Text endet"
        },
        {
                  "nl": "Symbolen zoals punten, komma's en vraagtekens die vaak worden verwijderd tijdens preprocessing",
                  "en": "Symbols like periods, commas, and question marks that are often removed during preprocessing",
                  "es": "Símbolos como puntos, comas y signos de interrogación que a menudo se eliminan durante el preprocesamiento",
                  "de": "Symbole wie Punkte, Kommas und Fragezeichen die oft während der Vorverarbeitung entfernt werden"
        },
        {
                  "nl": "Speciale markeringen voor belangrijke punten in tekst",
                  "en": "Special markings for important points in text",
                  "es": "Marcas especiales para puntos importantes en texto",
                  "de": "Spezielle Markierungen für wichtige Punkte im Text"
        }
        ],
        correct: 2,
        explanation: {
                  "nl": "Punctuation marks zijn leestekens die grammaticale structuur en betekenis aangeven. In tekstvoorverwerking worden deze vaak verwijderd omdat ze soms niet bijdragen aan de kernbetekenis van woorden voor bepaalde analyses.",
                  "en": "Punctuation marks are symbols that indicate grammatical structure and meaning. In text preprocessing, these are often removed because they sometimes don't contribute to the core meaning of words for certain analyses.",
                  "es": "Las marcas de puntuación son símbolos que indican estructura gramatical y significado. En el preprocesamiento de texto, estas a menudo se eliminan porque a veces no contribuyen al significado central de las palabras para ciertos análisis.",
                  "de": "Interpunktionszeichen sind Symbole die grammatische Struktur und Bedeutung anzeigen. In der Textvorverarbeitung werden diese oft entfernt weil sie manchmal nicht zur Kernbedeutung von Wörtern für bestimmte Analysen beitragen."
        }
      },
      {
        question: {
                  "nl": "Wat is white space normalization?",
                  "en": "What is white space normalization?",
                  "es": "¿Qué es la normalización de espacios en blanco?",
                  "de": "Was ist Leerzeichennormalisierung?"
        },
        options: [
        {
                  "nl": "Het kleuren van witte achtergronden",
                  "en": "Coloring white backgrounds",
                  "es": "Colorear fondos blancos",
                  "de": "Weiße Hintergründe färben"
        },
        {
                  "nl": "Het standaardiseren van spaties, tabs en nieuwe regels in tekst",
                  "en": "Standardizing spaces, tabs, and newlines in text",
                  "es": "Estandarizar espacios, tabs y nuevas líneas en texto",
                  "de": "Leerzeichen, Tabs und Zeilenumbrüche in Text standardisieren"
        },
        {
                  "nl": "Het normaliseren van witte kleuren",
                  "en": "Normalizing white colors",
                  "es": "Normalizar colores blancos",
                  "de": "Weiße Farben normalisieren"
        },
        {
                  "nl": "Het aanpassen van witbalans in afbeeldingen",
                  "en": "Adjusting white balance in images",
                  "es": "Ajustar el balance de blancos en imágenes",
                  "de": "Weißabgleich in Bildern anpassen"
        }
        ],
        correct: 1,
        explanation: {
                  "nl": "White space normalization standaardiseert verschillende soorten witruimte (spaties, tabs, nieuwe regels) tot een consistente vorm, zoals het vervangen van meerdere spaties door één spatie of het verwijderen van leading/trailing whitespace.",
                  "en": "White space normalization standardizes different types of whitespace (spaces, tabs, newlines) to a consistent form, such as replacing multiple spaces with single spaces or removing leading/trailing whitespace.",
                  "es": "La normalización de espacios en blanco estandariza diferentes tipos de espacios en blanco (espacios, tabs, nuevas líneas) a una forma consistente, como reemplazar múltiples espacios con espacios únicos o eliminar espacios al inicio/final.",
                  "de": "Leerzeichennormalisierung standardisiert verschiedene Arten von Leerräumen (Leerzeichen, Tabs, Zeilenumbrüche) zu einer konsistenten Form, wie das Ersetzen mehrerer Leerzeichen durch einzelne Leerzeichen oder das Entfernen von führenden/nachfolgenden Leerräumen."
        }
      },
      {
        question: {
                  "nl": "Wat is een regular expression (regex) pattern in tekstverwerking?",
                  "en": "What is a regular expression (regex) pattern in text processing?",
                  "es": "¿Qué es un patrón de expresión regular (regex) en procesamiento de texto?",
                  "de": "Was ist ein regulärer Ausdruck (Regex) Muster in der Textverarbeitung?"
        },
        options: [
        {
                  "nl": "Een standaard uitdrukking voor tekstformattering",
                  "en": "A standard expression for text formatting",
                  "es": "Una expresión estándar para formateo de texto",
                  "de": "Ein Standardausdruck für Textformatierung"
        },
        {
                  "nl": "Een normale expressie zonder speciale karakters",
                  "en": "A normal expression without special characters",
                  "es": "Una expresión normal sin caracteres especiales",
                  "de": "Ein normaler Ausdruck ohne Sonderzeichen"
        },
        {
                  "nl": "Een formule die tekstpatronen beschrijft voor zoeken en vervangen",
                  "en": "A formula that describes text patterns for searching and replacing",
                  "es": "Una fórmula que describe patrones de texto para buscar y reemplazar",
                  "de": "Eine Formel die Textmuster für Suchen und Ersetzen beschreibt"
        },
        {
                  "nl": "Een regelmatig herhalend patroon in tekst",
                  "en": "A regularly repeating pattern in text",
                  "es": "Un patrón que se repite regularmente en texto",
                  "de": "Ein regelmäßig wiederkehrendes Muster in Text"
        }
        ],
        correct: 2,
        explanation: {
                  "nl": "Regular expressions zijn krachtige patronen die specifieke tekststructuren kunnen matchen, zoals email adressen, telefoonnummers, of complexe woordpatronen. Ze worden gebruikt voor validatie, extractie en transformatie van tekst.",
                  "en": "Regular expressions are powerful patterns that can match specific text structures like email addresses, phone numbers, or complex word patterns. They're used for validation, extraction, and transformation of text.",
                  "es": "Las expresiones regulares son patrones poderosos que pueden coincidir con estructuras de texto específicas como direcciones de correo, números de teléfono, o patrones de palabras complejos. Se usan para validación, extracción y transformación de texto.",
                  "de": "Reguläre Ausdrücke sind mächtige Muster die spezifische Textstrukturen wie E-Mail-Adressen, Telefonnummern oder komplexe Wortmuster matchen können. Sie werden für Validierung, Extraktion und Transformation von Text verwendet."
        }
      },
      {
        question: {
                  "en": "What is Unicode normalization?",
                  "es": "¿Qué es la normalización Unicode?",
                  "de": "Was ist Unicode-Normalisierung?",
                  "nl": "Wat is Unicode-normalisatie?"
        },
        options: [
        {
                  "en": "Converting Unicode to ASCII only",
                  "es": "Convertir Unicode solo a ASCII",
                  "de": "Unicode nur in ASCII konvertieren",
                  "nl": "Unicode alleen naar ASCII converteren"
        },
        {
                  "en": "Converting text to a standard Unicode representation to handle accented characters consistently",
                  "es": "Convertir texto a una representación Unicode estándar para manejar caracteres acentuados consistentemente",
                  "de": "Text in eine Standard-Unicode-Darstellung konvertieren um akzentuierte Zeichen konsistent zu behandeln",
                  "nl": "Tekst omzetten naar een standaard Unicode-representatie om geaccentueerde karakters consistent te behandelen"
        },
        {
                  "en": "Making all Unicode characters the same size",
                  "es": "Hacer que todos los caracteres Unicode tengan el mismo tamaño",
                  "de": "Alle Unicode-Zeichen gleich groß machen",
                  "nl": "Alle Unicode-karakters dezelfde grootte maken"
        },
        {
                  "en": "Removing all Unicode characters from text",
                  "es": "Eliminar todos los caracteres Unicode del texto",
                  "de": "Alle Unicode-Zeichen aus Text entfernen",
                  "nl": "Alle Unicode-karakters uit tekst verwijderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Unicode normalization standardizes different ways of representing the same character (like é which can be one character or e + accent). This ensures text comparison and processing works correctly.",
                  "es": "La normalización Unicode estandariza diferentes formas de representar el mismo carácter (como é que puede ser un carácter o e + acento). Esto asegura que la comparación y procesamiento de texto funcione correctamente.",
                  "de": "Unicode-Normalisierung standardisiert verschiedene Darstellungsweisen desselben Zeichens (wie é das ein Zeichen oder e + Akzent sein kann). Dies stellt sicher dass Textvergleich und -verarbeitung korrekt funktionieren.",
                  "nl": "Unicode-normalisatie standaardiseert verschillende manieren om hetzelfde karakter weer te geven (zoals é dat één karakter kan zijn of e + accent). Dit zorgt ervoor dat tekstvergelijking en -verwerking correct werken."
        }
      },
      {
        question: {
                  "en": "What is sentence boundary detection?",
                  "es": "¿Qué es la detección de límites de oración?",
                  "de": "Was ist Satzgrenzerkennung?",
                  "nl": "Wat is zinsgrensdetectie?"
        },
        options: [
        {
                  "en": "Measuring sentence complexity",
                  "es": "Medir la complejidad de las oraciones",
                  "de": "Satzkomplexität messen",
                  "nl": "Zinscomplexiteit meten"
        },
        {
                  "en": "Identifying where sentences begin and end in text",
                  "es": "Identificar dónde comienzan y terminan las oraciones en texto",
                  "de": "Identifizieren wo Sätze in Text beginnen und enden",
                  "nl": "Identificeren waar zinnen beginnen en eindigen in tekst"
        },
        {
                  "en": "Detecting the maximum length of sentences",
                  "es": "Detectar la longitud máxima de oraciones",
                  "de": "Die maximale Länge von Sätzen erkennen",
                  "nl": "De maximale lengte van zinnen detecteren"
        },
        {
                  "en": "Finding sentences at document boundaries",
                  "es": "Encontrar oraciones en límites de documentos",
                  "de": "Sätze an Dokumentgrenzen finden",
                  "nl": "Zinnen vinden bij documentgrenzen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Sentence boundary detection (sentence segmentation) identifies punctuation and context clues to split text into individual sentences, which is crucial for many NLP tasks.",
                  "es": "La detección de límites de oración (segmentación de oraciones) identifica puntuación y pistas contextuales para dividir texto en oraciones individuales, lo cual es crucial para muchas tareas de PLN.",
                  "de": "Satzgrenzerkennung (Satzsegmentierung) identifiziert Interpunktion und Kontexthinweise um Text in einzelne Sätze aufzuteilen, was für viele NLP-Aufgaben entscheidend ist.",
                  "nl": "Zinsgrensdetectie (zinssegmentatie) identificeert interpunctie en contextuele aanwijzingen om tekst op te delen in individuele zinnen, wat cruciaal is voor veel NLP-taken."
        }
      },
      {
        question: {
                  "en": "What is the Porter Stemmer algorithm?",
                  "es": "¿Qué es el algoritmo Porter Stemmer?",
                  "de": "Was ist der Porter Stemmer Algorithmus?",
                  "nl": "Wat is het Porter Stemmer algoritme?"
        },
        options: [
        {
                  "en": "A lemmatization algorithm for multiple languages",
                  "es": "Un algoritmo de lematización para múltiples idiomas",
                  "de": "Ein Lemmatisierungsalgorithmus für mehrere Sprachen",
                  "nl": "Een lemmatisatie-algoritme voor meerdere talen"
        },
        {
                  "en": "A POS tagging system",
                  "es": "Un sistema de etiquetado POS",
                  "de": "Ein POS-Tagging-System",
                  "nl": "Een POS-tagging systeem"
        },
        {
                  "en": "A widely-used rule-based stemming algorithm for English",
                  "es": "Un algoritmo de stemming basado en reglas ampliamente usado para inglés",
                  "de": "Ein weit verbreiteter regelbasierter Stemming-Algorithmus für Englisch",
                  "nl": "Een veelgebruikt regel-gebaseerd stemming-algoritme voor Engels"
        },
        {
                  "en": "A machine learning tokenizer",
                  "es": "Un tokenizador de aprendizaje automático",
                  "de": "Ein maschinelles Lern-Tokenisierer",
                  "nl": "Een machine learning tokenizer"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Porter Stemmer is one of the most common stemming algorithms, using a series of rules to remove common English suffixes. It's fast but may produce non-dictionary stems.",
                  "es": "El Porter Stemmer es uno de los algoritmos de stemming más comunes, usando una serie de reglas para eliminar sufijos comunes en inglés. Es rápido pero puede producir raíces que no están en el diccionario.",
                  "de": "Der Porter Stemmer ist einer der gebräuchlichsten Stemming-Algorithmen, verwendet eine Reihe von Regeln um häufige englische Suffixe zu entfernen. Er ist schnell kann aber Wortstämme produzieren die nicht im Wörterbuch stehen.",
                  "nl": "De Porter Stemmer is een van de meest gebruikelijke stemming-algoritmes, gebruikt een reeks regels om veelvoorkomende Engelse achtervoegsels te verwijderen. Het is snel maar kan woordstammen produceren die niet in het woordenboek staan."
        }
      },
      {
        question: {
                  "en": "What is spell checking in text preprocessing?",
                  "es": "¿Qué es la corrección ortográfica en preprocesamiento de texto?",
                  "de": "Was ist Rechtschreibprüfung in der Textvorverarbeitung?",
                  "nl": "Wat is spellingcontrole in tekstvoorverwerking?"
        },
        options: [
        {
                  "en": "Removing all spelling variations",
                  "es": "Eliminar todas las variaciones ortográficas",
                  "de": "Alle Rechtschreibvarianten entfernen",
                  "nl": "Alle spellingvariaties verwijderen"
        },
        {
                  "en": "Detecting and optionally correcting misspelled words in text",
                  "es": "Detectar y opcionalmente corregir palabras mal escritas en texto",
                  "de": "Rechtschreibfehler in Text erkennen und optional korrigieren",
                  "nl": "Het detecteren en optioneel corrigeren van verkeerd gespelde woorden in tekst"
        },
        {
                  "en": "Checking if text follows spelling rules only",
                  "es": "Verificar si el texto sigue solo reglas ortográficas",
                  "de": "Prüfen ob Text nur Rechtschreibregeln folgt",
                  "nl": "Controleren of tekst alleen spellingregels volgt"
        },
        {
                  "en": "Converting British to American spelling",
                  "es": "Convertir ortografía británica a americana",
                  "de": "Britische in amerikanische Schreibweise konvertieren",
                  "nl": "Britse naar Amerikaanse spelling converteren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Spell checking identifies words that don't match dictionary entries and may suggest corrections. This preprocessing step helps improve text quality before analysis.",
                  "es": "La corrección ortográfica identifica palabras que no coinciden con entradas del diccionario y puede sugerir correcciones. Este paso de preprocesamiento ayuda a mejorar la calidad del texto antes del análisis.",
                  "de": "Rechtschreibprüfung identifiziert Wörter die nicht mit Wörterbucheinträgen übereinstimmen und kann Korrekturen vorschlagen. Dieser Vorverarbeitungsschritt hilft die Textqualität vor der Analyse zu verbessern.",
                  "nl": "Spellingcontrole identificeert woorden die niet overeenkomen met woordenboekinvoer en kan correcties voorstellen. Deze voorverwerkingsstap helpt de tekstkwaliteit te verbeteren voor analyse."
        }
      },
      {
        question: {
                  "en": "What is contraction expansion in text preprocessing?",
                  "es": "¿Qué es la expansión de contracciones en preprocesamiento de texto?",
                  "de": "Was ist Kontraktionserweiterung in der Textvorverarbeitung?",
                  "nl": "Wat is contractie-expansie in tekstvoorverwerking?"
        },
        options: [
        {
                  "en": "Converting short words to longer synonyms",
                  "es": "Convertir palabras cortas a sinónimos más largos",
                  "de": "Kurze Wörter in längere Synonyme konvertieren",
                  "nl": "Korte woorden converteren naar langere synoniemen"
        },
        {
                  "en": "Making text longer for better readability",
                  "es": "Hacer el texto más largo para mejor legibilidad",
                  "de": "Text für bessere Lesbarkeit länger machen",
                  "nl": "Tekst langer maken voor betere leesbaarheid"
        },
        {
                  "en": "Expanding abbreviations only",
                  "es": "Expandir solo abreviaciones",
                  "de": "Nur Abkürzungen erweitern",
                  "nl": "Alleen afkortingen uitbreiden"
        },
        {
                  "en": "Converting shortened forms like \"don't\" to full forms like \"do not\"",
                  "es": "Convertir formas acortadas como \"don't\" a formas completas como \"do not\"",
                  "de": "Verkürzte Formen wie \"don't\" in vollständige Formen wie \"do not\" konvertieren",
                  "nl": "Verkorte vormen zoals \"don't\" converteren naar volledige vormen zoals \"do not\""
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Contraction expansion converts shortened word forms (contractions) to their full forms, which can help with consistency in text analysis and improve tokenization accuracy.",
                  "es": "La expansión de contracciones convierte formas abreviadas de palabras (contracciones) a sus formas completas, lo que puede ayudar con la consistencia en análisis de texto y mejorar la precisión de tokenización.",
                  "de": "Kontraktionserweiterung konvertiert verkürzte Wortformen (Kontraktionen) in ihre vollständigen Formen, was bei der Konsistenz in der Textanalyse helfen und die Tokenisierungsgenauigkeit verbessern kann.",
                  "nl": "Contractie-expansie converteert verkorte woordvormen (contracties) naar hun volledige vormen, wat kan helpen bij consistentie in tekstanalyse en tokenisatie-nauwkeurigheid kan verbeteren."
        }
      },
      {
        question: {
                  "en": "What is accent removal (diacritics removal)?",
                  "es": "¿Qué es la eliminación de acentos (eliminación de diacríticos)?",
                  "de": "Was ist Akzententfernung (Diakritika-Entfernung)?",
                  "nl": "Wat is accentverwijdering (diakritische tekens verwijderen)?"
        },
        options: [
        {
                  "en": "Removing emphasis from text",
                  "es": "Eliminar énfasis del texto",
                  "de": "Betonung aus Text entfernen",
                  "nl": "Nadruk uit tekst verwijderen"
        },
        {
                  "en": "Deleting highlighted text",
                  "es": "Eliminar texto resaltado",
                  "de": "Hervorgehobenen Text löschen",
                  "nl": "Gemarkeerde tekst verwijderen"
        },
        {
                  "en": "Removing speech accents from audio",
                  "es": "Eliminar acentos del habla del audio",
                  "de": "Sprachakzente aus Audio entfernen",
                  "nl": "Spraakaccenten uit audio verwijderen"
        },
        {
                  "en": "Converting accented characters to their base form (café → cafe)",
                  "es": "Convertir caracteres acentuados a su forma base (café → cafe)",
                  "de": "Akzentuierte Zeichen in ihre Grundform konvertieren (café → cafe)",
                  "nl": "Geaccentueerde karakters converteren naar hun basisvorm (café → cafe)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Accent removal strips diacritical marks from characters, converting letters like é, ñ, ü to e, n, u. This can help with text matching but may lose important meaning in some languages.",
                  "es": "La eliminación de acentos quita marcas diacríticas de caracteres, convirtiendo letras como é, ñ, ü a e, n, u. Esto puede ayudar con la coincidencia de texto pero puede perder significado importante en algunos idiomas.",
                  "de": "Akzententfernung entfernt diakritische Zeichen von Buchstaben, konvertiert Zeichen wie é, ñ, ü zu e, n, u. Dies kann bei Textabgleich helfen kann aber wichtige Bedeutung in einigen Sprachen verlieren.",
                  "nl": "Accentverwijdering verwijdert diakritische tekens van karakters, converteert letters zoals é, ñ, ü naar e, n, u. Dit kan helpen bij tekstmatching maar kan belangrijke betekenis in sommige talen verliezen."
        }
      },
      {
        question: {
                  "en": "What is HTML/XML tag stripping?",
                  "es": "¿Qué es la eliminación de etiquetas HTML/XML?",
                  "de": "Was ist HTML/XML-Tag-Entfernung?",
                  "nl": "Wat is HTML/XML-tag verwijdering?"
        },
        options: [
        {
                  "en": "Converting HTML to XML format",
                  "es": "Convertir HTML a formato XML",
                  "de": "HTML in XML-Format konvertieren",
                  "nl": "HTML naar XML-formaat converteren"
        },
        {
                  "en": "Removing markup tags to extract plain text content",
                  "es": "Eliminar etiquetas de marcado para extraer contenido de texto plano",
                  "de": "Markup-Tags entfernen um reinen Textinhalt zu extrahieren",
                  "nl": "Markup-tags verwijderen om platte tekstinhoud te extraheren"
        },
        {
                  "en": "Removing images and videos from web pages",
                  "es": "Eliminar imágenes y videos de páginas web",
                  "de": "Bilder und Videos von Webseiten entfernen",
                  "nl": "Afbeeldingen en video's van webpagina's verwijderen"
        },
        {
                  "en": "Deleting metadata from documents",
                  "es": "Eliminar metadatos de documentos",
                  "de": "Metadaten aus Dokumenten löschen",
                  "nl": "Metadata uit documenten verwijderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "HTML/XML tag stripping removes markup elements like <p>, <div>, <strong> to extract just the text content, which is essential when processing web-scraped data.",
                  "es": "La eliminación de etiquetas HTML/XML elimina elementos de marcado como <p>, <div>, <strong> para extraer solo el contenido de texto, lo cual es esencial al procesar datos extraídos de la web.",
                  "de": "HTML/XML-Tag-Entfernung entfernt Markup-Elemente wie <p>, <div>, <strong> um nur den Textinhalt zu extrahieren, was beim Verarbeiten von web-gescrapten Daten wesentlich ist.",
                  "nl": "HTML/XML-tag verwijdering verwijdert markup-elementen zoals <p>, <div>, <strong> om alleen de tekstinhoud te extraheren, wat essentieel is bij het verwerken van van het web geschraapte data."
        }
      },
      {
        question: {
                  "en": "What is number normalization in text preprocessing?",
                  "es": "¿Qué es la normalización de números en preprocesamiento de texto?",
                  "de": "Was ist Zahlennormalisierung in der Textvorverarbeitung?",
                  "nl": "Wat is getal-normalisatie in tekstvoorverwerking?"
        },
        options: [
        {
                  "en": "Standardizing number formats only",
                  "es": "Solo estandarizar formatos de números",
                  "de": "Nur Zahlenformate standardisieren",
                  "nl": "Alleen getalformaten standaardiseren"
        },
        {
                  "en": "Converting all numbers to the same value",
                  "es": "Convertir todos los números al mismo valor",
                  "de": "Alle Zahlen in denselben Wert konvertieren",
                  "nl": "Alle getallen naar dezelfde waarde converteren"
        },
        {
                  "en": "Replacing numeric values with tokens or converting them to words",
                  "es": "Reemplazar valores numéricos con tokens o convertirlos a palabras",
                  "de": "Numerische Werte durch Tokens ersetzen oder in Wörter konvertieren",
                  "nl": "Numerieke waarden vervangen door tokens of converteren naar woorden"
        },
        {
                  "en": "Removing all numbers from text",
                  "es": "Eliminar todos los números del texto",
                  "de": "Alle Zahlen aus Text entfernen",
                  "nl": "Alle getallen uit tekst verwijderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Number normalization can involve replacing numbers with placeholder tokens (like <NUM>), converting digits to words (2 → two), or standardizing formats. The approach depends on whether numbers are important for the analysis.",
                  "es": "La normalización de números puede involucrar reemplazar números con tokens de marcador de posición (como <NUM>), convertir dígitos a palabras (2 → dos), o estandarizar formatos. El enfoque depende de si los números son importantes para el análisis.",
                  "de": "Zahlennormalisierung kann das Ersetzen von Zahlen durch Platzhalter-Tokens (wie <NUM>), das Konvertieren von Ziffern in Wörter (2 → zwei) oder das Standardisieren von Formaten beinhalten. Der Ansatz hängt davon ab ob Zahlen für die Analyse wichtig sind.",
                  "nl": "Getal-normalisatie kan het vervangen van getallen door placeholder tokens (zoals <NUM>), het converteren van cijfers naar woorden (2 → twee), of het standaardiseren van formaten omvatten. De aanpak hangt ervan af of getallen belangrijk zijn voor de analyse."
        }
      },
      {
        question: {
                  "en": "What is URL removal in text preprocessing?",
                  "es": "¿Qué es la eliminación de URL en preprocesamiento de texto?",
                  "de": "Was ist URL-Entfernung in der Textvorverarbeitung?",
                  "nl": "Wat is URL-verwijdering in tekstvoorverwerking?"
        },
        options: [
        {
                  "en": "Validating URL formats",
                  "es": "Validar formatos de URL",
                  "de": "URL-Formate validieren",
                  "nl": "URL-formaten valideren"
        },
        {
                  "en": "Detecting and removing web addresses from text",
                  "es": "Detectar y eliminar direcciones web del texto",
                  "de": "Webadressen in Text erkennen und entfernen",
                  "nl": "Webadressen in tekst detecteren en verwijderen"
        },
        {
                  "en": "Converting URLs to clickable links",
                  "es": "Convertir URLs a enlaces clicables",
                  "de": "URLs in klickbare Links konvertieren",
                  "nl": "URLs converteren naar klikbare links"
        },
        {
                  "en": "Shortening long URLs only",
                  "es": "Solo acortar URLs largas",
                  "de": "Nur lange URLs verkürzen",
                  "nl": "Alleen lange URLs verkorten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "URL removal identifies patterns like http://, https://, www. and removes web addresses from text, as they typically don't contribute to semantic analysis and add noise.",
                  "es": "La eliminación de URL identifica patrones como http://, https://, www. y elimina direcciones web del texto, ya que típicamente no contribuyen al análisis semántico y agregan ruido.",
                  "de": "URL-Entfernung identifiziert Muster wie http://, https://, www. und entfernt Webadressen aus Text, da sie typischerweise nicht zur semantischen Analyse beitragen und Rauschen hinzufügen.",
                  "nl": "URL-verwijdering identificeert patronen zoals http://, https://, www. en verwijdert webadressen uit tekst, omdat ze meestal niet bijdragen aan semantische analyse en ruis toevoegen."
        }
      },
      {
        question: {
                  "en": "What is email address removal in text preprocessing?",
                  "es": "¿Qué es la eliminación de direcciones de correo en preprocesamiento de texto?",
                  "de": "Was ist E-Mail-Adressen-Entfernung in der Textvorverarbeitung?",
                  "nl": "Wat is e-mailadres verwijdering in tekstvoorverwerking?"
        },
        options: [
        {
                  "en": "Encrypting email addresses",
                  "es": "Encriptar direcciones de correo",
                  "de": "E-Mail-Adressen verschlüsseln",
                  "nl": "E-mailadressen versleutelen"
        },
        {
                  "en": "Validating email format only",
                  "es": "Solo validar formato de correo",
                  "de": "Nur E-Mail-Format validieren",
                  "nl": "Alleen e-mailformaat valideren"
        },
        {
                  "en": "Converting emails to usernames",
                  "es": "Convertir correos a nombres de usuario",
                  "de": "E-Mails in Benutzernamen konvertieren",
                  "nl": "E-mails converteren naar gebruikersnamen"
        },
        {
                  "en": "Identifying and removing email addresses from text using patterns",
                  "es": "Identificar y eliminar direcciones de correo del texto usando patrones",
                  "de": "E-Mail-Adressen in Text mit Mustern identifizieren und entfernen",
                  "nl": "E-mailadressen in tekst identificeren en verwijderen met patronen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Email address removal detects patterns matching email formats (like user@domain.com) and removes them from text, often for privacy or because they don't add semantic value to analysis.",
                  "es": "La eliminación de direcciones de correo detecta patrones que coinciden con formatos de correo (como user@domain.com) y los elimina del texto, a menudo por privacidad o porque no agregan valor semántico al análisis.",
                  "de": "E-Mail-Adressen-Entfernung erkennt Muster die E-Mail-Formaten entsprechen (wie user@domain.com) und entfernt sie aus Text, oft aus Datenschutzgründen oder weil sie keinen semantischen Wert zur Analyse hinzufügen.",
                  "nl": "E-mailadres verwijdering detecteert patronen die overeenkomen met e-mailformaten (zoals user@domain.com) en verwijdert ze uit tekst, vaak voor privacy of omdat ze geen semantische waarde toevoegen aan analyse."
        }
      },
      {
        question: {
                  "en": "What is emoticon/emoji handling in text preprocessing?",
                  "es": "¿Qué es el manejo de emoticones/emojis en preprocesamiento de texto?",
                  "de": "Was ist Emoticon/Emoji-Behandlung in der Textvorverarbeitung?",
                  "nl": "Wat is emoticon/emoji-behandeling in tekstvoorverwerking?"
        },
        options: [
        {
                  "en": "Converting or removing emotional symbols like :) or 😊 from text",
                  "es": "Convertir o eliminar símbolos emocionales como :) o 😊 del texto",
                  "de": "Emotionale Symbole wie :) oder 😊 aus Text konvertieren oder entfernen",
                  "nl": "Emotionele symbolen zoals :) of 😊 uit tekst converteren of verwijderen"
        },
        {
                  "en": "Counting emoji frequency only",
                  "es": "Solo contar frecuencia de emojis",
                  "de": "Nur Emoji-Häufigkeit zählen",
                  "nl": "Alleen emoji-frequentie tellen"
        },
        {
                  "en": "Translating emojis between languages",
                  "es": "Traducir emojis entre idiomas",
                  "de": "Emojis zwischen Sprachen übersetzen",
                  "nl": "Emoji's tussen talen vertalen"
        },
        {
                  "en": "Adding emojis to make text more expressive",
                  "es": "Agregar emojis para hacer el texto más expresivo",
                  "de": "Emojis hinzufügen um Text ausdrucksvoller zu machen",
                  "nl": "Emoji's toevoegen om tekst expressiever te maken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Emoticon/emoji handling can involve removing them, converting them to text descriptions (😊 → happy), or preserving them as sentiment indicators, depending on the analysis goals.",
                  "es": "El manejo de emoticones/emojis puede involucrar eliminarlos, convertirlos a descripciones de texto (😊 → feliz), o preservarlos como indicadores de sentimiento, dependiendo de los objetivos del análisis.",
                  "de": "Emoticon/Emoji-Behandlung kann das Entfernen, Konvertieren in Textbeschreibungen (😊 → glücklich) oder Beibehalten als Sentiment-Indikatoren umfassen, abhängig von den Analysezielen.",
                  "nl": "Emoticon/emoji-behandeling kan het verwijderen, converteren naar tekstbeschrijvingen (😊 → blij), of behouden als sentimentindicatoren omvatten, afhankelijk van de analysedoelen."
        }
      },
      {
        question: {
                  "en": "What is mention/hashtag extraction in text preprocessing?",
                  "es": "¿Qué es la extracción de menciones/hashtags en preprocesamiento de texto?",
                  "de": "Was ist Erwähnungs-/Hashtag-Extraktion in der Textvorverarbeitung?",
                  "nl": "Wat is mention/hashtag-extractie in tekstvoorverwerking?"
        },
        options: [
        {
                  "en": "Tagging users automatically",
                  "es": "Etiquetar usuarios automáticamente",
                  "de": "Benutzer automatisch taggen",
                  "nl": "Gebruikers automatisch taggen"
        },
        {
                  "en": "Counting characters in posts",
                  "es": "Contar caracteres en publicaciones",
                  "de": "Zeichen in Posts zählen",
                  "nl": "Karakters tellen in posts"
        },
        {
                  "en": "Identifying and extracting @mentions and #hashtags from social media text",
                  "es": "Identificar y extraer @menciones y #hashtags de texto de redes sociales",
                  "de": "@Erwähnungen und #Hashtags aus Social-Media-Text identifizieren und extrahieren",
                  "nl": "@mentions en #hashtags uit sociale media tekst identificeren en extraheren"
        },
        {
                  "en": "Creating new hashtags for content",
                  "es": "Crear nuevos hashtags para contenido",
                  "de": "Neue Hashtags für Inhalte erstellen",
                  "nl": "Nieuwe hashtags voor content maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "In social media text processing, mentions (@username) and hashtags (#topic) are often extracted as they contain valuable information about references and topics being discussed.",
                  "es": "En el procesamiento de texto de redes sociales, las menciones (@usuario) y hashtags (#tema) a menudo se extraen ya que contienen información valiosa sobre referencias y temas discutidos.",
                  "de": "Bei der Verarbeitung von Social-Media-Text werden Erwähnungen (@benutzername) und Hashtags (#thema) oft extrahiert da sie wertvolle Informationen über Referenzen und diskutierte Themen enthalten.",
                  "nl": "Bij sociale media tekstverwerking worden mentions (@gebruikersnaam) en hashtags (#onderwerp) vaak geëxtraheerd omdat ze waardevolle informatie bevatten over referenties en besproken onderwerpen."
        }
      },
      {
        question: {
                  "en": "What is text deduplication?",
                  "es": "¿Qué es la deduplicación de texto?",
                  "de": "Was ist Textdeduplikation?",
                  "nl": "Wat is tekstdeduplicatie?"
        },
        options: [
        {
                  "en": "Validating text uniqueness only",
                  "es": "Solo validar la unicidad del texto",
                  "de": "Nur Texteinzigartigkeit validieren",
                  "nl": "Alleen tekstuniekheid valideren"
        },
        {
                  "en": "Identifying and removing duplicate or near-duplicate content",
                  "es": "Identificar y eliminar contenido duplicado o casi duplicado",
                  "de": "Doppelten oder fast doppelten Inhalt identifizieren und entfernen",
                  "nl": "Dubbele of bijna-dubbele content identificeren en verwijderen"
        },
        {
                  "en": "Making two copies of text",
                  "es": "Hacer dos copias del texto",
                  "de": "Zwei Kopien von Text machen",
                  "nl": "Twee kopieën van tekst maken"
        },
        {
                  "en": "Splitting text into duplicates",
                  "es": "Dividir texto en duplicados",
                  "de": "Text in Duplikate aufteilen",
                  "nl": "Tekst opdelen in duplicaten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Text deduplication removes exact or near-duplicate documents/sentences from datasets, which improves model training quality and reduces computational costs.",
                  "es": "La deduplicación de texto elimina documentos/oraciones exactas o casi duplicadas de conjuntos de datos, lo que mejora la calidad del entrenamiento del modelo y reduce costos computacionales.",
                  "de": "Textdeduplikation entfernt exakte oder fast doppelte Dokumente/Sätze aus Datensätzen, was die Qualität des Modelltrainings verbessert und Rechenkosten reduziert.",
                  "nl": "Tekstdeduplicatie verwijdert exacte of bijna-dubbele documenten/zinnen uit datasets, wat de kwaliteit van modeltraining verbetert en rekenkosten vermindert."
        }
      },
      {
        question: {
                  "en": "What is language-specific preprocessing?",
                  "es": "¿Qué es el preprocesamiento específico del idioma?",
                  "de": "Was ist sprachspezifische Vorverarbeitung?",
                  "nl": "Wat is taalspecifieke voorverwerking?"
        },
        options: [
        {
                  "en": "Detecting the language only",
                  "es": "Solo detectar el idioma",
                  "de": "Nur die Sprache erkennen",
                  "nl": "Alleen de taal detecteren"
        },
        {
                  "en": "Applying preprocessing techniques tailored to specific language characteristics",
                  "es": "Aplicar técnicas de preprocesamiento adaptadas a características específicas del idioma",
                  "de": "Vorverarbeitungstechniken anwenden die auf spezifische Sprachmerkmale zugeschnitten sind",
                  "nl": "Voorverwerkingstechnieken toepassen die zijn afgestemd op specifieke taalkenmerken"
        },
        {
                  "en": "Translating text to one language",
                  "es": "Traducir texto a un idioma",
                  "de": "Text in eine Sprache übersetzen",
                  "nl": "Tekst naar één taal vertalen"
        },
        {
                  "en": "Processing only English text",
                  "es": "Procesar solo texto en inglés",
                  "de": "Nur englischen Text verarbeiten",
                  "nl": "Alleen Engelse tekst verwerken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Different languages require different preprocessing approaches. For example, Chinese needs word segmentation, German needs compound splitting, and Arabic needs special character normalization.",
                  "es": "Diferentes idiomas requieren diferentes enfoques de preprocesamiento. Por ejemplo, el chino necesita segmentación de palabras, el alemán necesita división de compuestos, y el árabe necesita normalización especial de caracteres.",
                  "de": "Verschiedene Sprachen erfordern unterschiedliche Vorverarbeitungsansätze. Zum Beispiel benötigt Chinesisch Wortsegmentierung, Deutsch benötigt Komposita-Splitting und Arabisch benötigt spezielle Zeichennormalisierung.",
                  "nl": "Verschillende talen vereisen verschillende voorverwerkingsbenaderingen. Bijvoorbeeld, Chinees heeft woordsegmentatie nodig, Duits heeft samenstellingssplitsing nodig, en Arabisch heeft speciale karakternormalisatie nodig."
        }
      },
      {
        question: {
                  "en": "What is text augmentation?",
                  "es": "¿Qué es la aumentación de texto?",
                  "de": "Was ist Textaugmentierung?",
                  "nl": "Wat is tekstaugmentatie?"
        },
        options: [
        {
                  "en": "Increasing text quality only",
                  "es": "Solo aumentar la calidad del texto",
                  "de": "Nur Textqualität erhöhen",
                  "nl": "Alleen tekstkwaliteit verhogen"
        },
        {
                  "en": "Making text larger in font size",
                  "es": "Hacer el texto más grande en tamaño de fuente",
                  "de": "Text in Schriftgröße größer machen",
                  "nl": "Tekst groter maken in lettergrootte"
        },
        {
                  "en": "Creating variations of text data to increase training dataset size",
                  "es": "Crear variaciones de datos de texto para aumentar el tamaño del conjunto de entrenamiento",
                  "de": "Variationen von Textdaten erstellen um Trainingsdatensatzgröße zu erhöhen",
                  "nl": "Variaties van tekstdata maken om de grootte van trainingsdataset te vergroten"
        },
        {
                  "en": "Adding more words to text",
                  "es": "Agregar más palabras al texto",
                  "de": "Mehr Wörter zu Text hinzufügen",
                  "nl": "Meer woorden aan tekst toevoegen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Text augmentation techniques like synonym replacement, back-translation, or paraphrasing create new training examples from existing text to improve model robustness.",
                  "es": "Las técnicas de aumentación de texto como reemplazo de sinónimos, retro-traducción, o parafraseo crean nuevos ejemplos de entrenamiento de texto existente para mejorar la robustez del modelo.",
                  "de": "Textaugmentierungstechniken wie Synonymersetzung, Rückübersetzung oder Paraphrasierung erstellen neue Trainingsbeispiele aus bestehendem Text um Modellrobustheit zu verbessern.",
                  "nl": "Tekstaugmentatietechnieken zoals synoniemvervanging, terug-vertaling, of parafraseren maken nieuwe trainingsvoorbeelden van bestaande tekst om modelrobuustheid te verbeteren."
        }
      },
      {
        question: {
                  "en": "What is the Snowball Stemmer?",
                  "es": "¿Qué es el Snowball Stemmer?",
                  "de": "Was ist der Snowball Stemmer?",
                  "nl": "Wat is de Snowball Stemmer?"
        },
        options: [
        {
                  "en": "A winter-specific text processor",
                  "es": "Un procesador de texto específico de invierno",
                  "de": "Ein winterspezifischer Textprozessor",
                  "nl": "Een winterspecifieke tekstprocessor"
        },
        {
                  "en": "A lemmatization system for English only",
                  "es": "Un sistema de lematización solo para inglés",
                  "de": "Ein Lemmatisierungssystem nur für Englisch",
                  "nl": "Een lemmatisatiesysteem alleen voor Engels"
        },
        {
                  "en": "A tool for removing winter-related words",
                  "es": "Una herramienta para eliminar palabras relacionadas con el invierno",
                  "de": "Ein Werkzeug zum Entfernen winterbezogener Wörter",
                  "nl": "Een tool voor het verwijderen van wintergerelateerde woorden"
        },
        {
                  "en": "An improved stemming algorithm that supports multiple languages",
                  "es": "Un algoritmo de stemming mejorado que soporta múltiples idiomas",
                  "de": "Ein verbesserter Stemming-Algorithmus der mehrere Sprachen unterstützt",
                  "nl": "Een verbeterd stemming-algoritme dat meerdere talen ondersteunt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Snowball (also called Porter2) is an improved version of the Porter Stemmer with support for many languages including English, French, German, Spanish, and more.",
                  "es": "Snowball (también llamado Porter2) es una versión mejorada del Porter Stemmer con soporte para muchos idiomas incluyendo inglés, francés, alemán, español, y más.",
                  "de": "Snowball (auch Porter2 genannt) ist eine verbesserte Version des Porter Stemmers mit Unterstützung für viele Sprachen einschließlich Englisch, Französisch, Deutsch, Spanisch und mehr.",
                  "nl": "Snowball (ook wel Porter2 genoemd) is een verbeterde versie van de Porter Stemmer met ondersteuning voor veel talen waaronder Engels, Frans, Duits, Spaans, en meer."
        }
      },
      {
        question: {
                  "en": "What is minimum edit distance (Levenshtein distance)?",
                  "es": "¿Qué es la distancia de edición mínima (distancia de Levenshtein)?",
                  "de": "Was ist minimale Edit-Distanz (Levenshtein-Distanz)?",
                  "nl": "Wat is minimale edit distance (Levenshtein afstand)?"
        },
        options: [
        {
                  "en": "The minimum time to edit text",
                  "es": "El tiempo mínimo para editar texto",
                  "de": "Die minimale Zeit zum Bearbeiten von Text",
                  "nl": "De minimale tijd om tekst te bewerken"
        },
        {
                  "en": "The smallest difference in text length",
                  "es": "La diferencia más pequeña en longitud de texto",
                  "de": "Der kleinste Unterschied in Textlänge",
                  "nl": "Het kleinste verschil in tekstlengte"
        },
        {
                  "en": "The shortest text version possible",
                  "es": "La versión de texto más corta posible",
                  "de": "Die kürzest mögliche Textversion",
                  "nl": "De kortst mogelijke tekstversie"
        },
        {
                  "en": "The minimum number of insertions, deletions, and substitutions to transform one string into another",
                  "es": "El número mínimo de inserciones, eliminaciones y sustituciones para transformar una cadena en otra",
                  "de": "Die minimale Anzahl von Einfügungen, Löschungen und Ersetzungen um einen String in einen anderen zu transformieren",
                  "nl": "Het minimale aantal invoegingen, verwijderingen en vervangingen om de ene string in de andere te transformeren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Levenshtein distance calculates string similarity by counting the minimum operations needed. It's used for spell checking, fuzzy string matching, and detecting text variations.",
                  "es": "La distancia de Levenshtein calcula similitud de cadenas contando las operaciones mínimas necesarias. Se usa para corrección ortográfica, coincidencia difusa de cadenas, y detección de variaciones de texto.",
                  "de": "Levenshtein-Distanz berechnet String-Ähnlichkeit durch Zählen der minimalen benötigten Operationen. Sie wird für Rechtschreibprüfung, unscharfes String-Matching und Erkennung von Textvariationen verwendet.",
                  "nl": "Levenshtein afstand berekent string-gelijkenis door het minimale aantal benodigde operaties te tellen. Het wordt gebruikt voor spellingcontrole, fuzzy string matching, en het detecteren van tekstvariaties."
        }
      },
      {
        question: {
                  "en": "What is vocabulary pruning?",
                  "es": "¿Qué es la poda de vocabulario?",
                  "de": "Was ist Vokabular-Pruning?",
                  "nl": "Wat is vocabulaire-pruning?"
        },
        options: [
        {
                  "en": "Organizing words alphabetically",
                  "es": "Organizar palabras alfabéticamente",
                  "de": "Wörter alphabetisch organisieren",
                  "nl": "Woorden alfabetisch organiseren"
        },
        {
                  "en": "Cutting vocabulary lists to specific sizes",
                  "es": "Cortar listas de vocabulario a tamaños específicos",
                  "de": "Vokabularlisten auf bestimmte Größen schneiden",
                  "nl": "Vocabulairelijsten knippen tot specifieke groottes"
        },
        {
                  "en": "Removing only stop words",
                  "es": "Eliminar solo palabras vacías",
                  "de": "Nur Stoppwörter entfernen",
                  "nl": "Alleen stopwoorden verwijderen"
        },
        {
                  "en": "Removing rare or infrequent words from the vocabulary to reduce dimensionality",
                  "es": "Eliminar palabras raras o poco frecuentes del vocabulario para reducir dimensionalidad",
                  "de": "Seltene oder seltene Wörter aus dem Vokabular entfernen um Dimensionalität zu reduzieren",
                  "nl": "Zeldzame of weinig voorkomende woorden uit het vocabulaire verwijderen om dimensionaliteit te verminderen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Vocabulary pruning reduces the vocabulary size by removing words that appear very rarely in the corpus, which helps reduce memory usage and computational cost while often maintaining performance.",
                  "es": "La poda de vocabulario reduce el tamaño del vocabulario eliminando palabras que aparecen muy raramente en el corpus, lo que ayuda a reducir el uso de memoria y costo computacional mientras a menudo mantiene el rendimiento.",
                  "de": "Vokabular-Pruning reduziert die Vokabulargröße durch Entfernen von Wörtern die sehr selten im Korpus erscheinen, was hilft Speichernutzung und Rechenkosten zu reduzieren während oft die Leistung erhalten bleibt.",
                  "nl": "Vocabulaire-pruning vermindert de vocabulairegrootte door woorden te verwijderen die zeer zelden in het corpus voorkomen, wat helpt geheugengebruik en rekenkosten te verminderen terwijl vaak de prestaties behouden blijven."
        }
      },
      {
        question: {
                  "en": "What is text vectorization?",
                  "es": "¿Qué es la vectorización de texto?",
                  "de": "Was ist Textvektorisierung?",
                  "nl": "Wat is tekstvectorisatie?"
        },
        options: [
        {
                  "en": "Converting text into numerical vector representations for machine learning",
                  "es": "Convertir texto en representaciones vectoriales numéricas para aprendizaje automático",
                  "de": "Text in numerische Vektordarstellungen für maschinelles Lernen konvertieren",
                  "nl": "Tekst converteren naar numerieke vectorrepresentaties voor machine learning"
        },
        {
                  "en": "Organizing text in vectors",
                  "es": "Organizar texto en vectores",
                  "de": "Text in Vektoren organisieren",
                  "nl": "Tekst organiseren in vectoren"
        },
        {
                  "en": "Drawing text as vector graphics",
                  "es": "Dibujar texto como gráficos vectoriales",
                  "de": "Text als Vektorgrafiken zeichnen",
                  "nl": "Tekst tekenen als vectorafbeeldingen"
        },
        {
                  "en": "Converting images to text",
                  "es": "Convertir imágenes a texto",
                  "de": "Bilder in Text konvertieren",
                  "nl": "Afbeeldingen naar tekst converteren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Text vectorization transforms text data into numerical vectors that algorithms can process. Common methods include bag-of-words, TF-IDF, and word embeddings.",
                  "es": "La vectorización de texto transforma datos de texto en vectores numéricos que los algoritmos pueden procesar. Los métodos comunes incluyen bolsa de palabras, TF-IDF, y word embeddings.",
                  "de": "Textvektorisierung transformiert Textdaten in numerische Vektoren die Algorithmen verarbeiten können. Gängige Methoden umfassen Bag-of-Words, TF-IDF und Word Embeddings.",
                  "nl": "Tekstvectorisatie transformeert tekstdata naar numerieke vectoren die algoritmes kunnen verwerken. Veelvoorkomende methoden zijn bag-of-words, TF-IDF, en word embeddings."
        }
      },
      {
        question: {
                  "en": "What is character n-gram tokenization?",
                  "es": "¿Qué es la tokenización de n-gramas de caracteres?",
                  "de": "Was ist Zeichen-n-Gramm-Tokenisierung?",
                  "nl": "Wat is karakter n-gram tokenisatie?"
        },
        options: [
        {
                  "en": "Tokenizing only n words at a time",
                  "es": "Tokenizar solo n palabras a la vez",
                  "de": "Nur n Wörter gleichzeitig tokenisieren",
                  "nl": "Slechts n woorden tegelijk tokeniseren"
        },
        {
                  "en": "Extracting n-letter words only",
                  "es": "Extraer solo palabras de n letras",
                  "de": "Nur n-Buchstaben-Wörter extrahieren",
                  "nl": "Alleen n-letter woorden extraheren"
        },
        {
                  "en": "Breaking text into sequences of n consecutive characters instead of words",
                  "es": "Dividir texto en secuencias de n caracteres consecutivos en lugar de palabras",
                  "de": "Text in Sequenzen von n aufeinanderfolgenden Zeichen statt Wörtern aufteilen",
                  "nl": "Tekst opdelen in reeksen van n opeenvolgende karakters in plaats van woorden"
        },
        {
                  "en": "Converting characters to numbers",
                  "es": "Convertir caracteres a números",
                  "de": "Zeichen in Zahlen konvertieren",
                  "nl": "Karakters naar getallen converteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Character n-grams split text into overlapping sequences of characters (e.g., 'hello' → 'hel', 'ell', 'llo' for 3-grams). This helps with handling misspellings and unknown words.",
                  "es": "Los n-gramas de caracteres dividen texto en secuencias superpuestas de caracteres (ej., 'hello' → 'hel', 'ell', 'llo' para 3-gramas). Esto ayuda a manejar errores ortográficos y palabras desconocidas.",
                  "de": "Zeichen-n-Gramme teilen Text in überlappende Zeichensequenzen (z.B. 'hello' → 'hel', 'ell', 'llo' für 3-Gramme). Dies hilft beim Umgang mit Rechtschreibfehlern und unbekannten Wörtern.",
                  "nl": "Karakter n-grams splitsen tekst in overlappende karakterreeksen (bijv. 'hello' → 'hel', 'ell', 'llo' voor 3-grams). Dit helpt bij het omgaan met spelfouten en onbekende woorden."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();