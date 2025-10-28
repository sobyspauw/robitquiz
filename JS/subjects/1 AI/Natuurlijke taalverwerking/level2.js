// Natural Language Processing Quiz - Level 2: Text Preprocessing and Basic Techniques
(function() {
  const level2 = {
    name: {
      en: "Text Preprocessing",
      es: "Preprocesamiento de Texto",
      de: "Textvorverarbeitung",
      nl: "Tekstvoorverwerking"
    },
    questions: [
      {
        question: {
          en: "What is the purpose of removing stop words in text preprocessing?",
          es: "¿Cuál es el propósito de eliminar palabras vacías en preprocesamiento de texto?",
          de: "Was ist der Zweck des Entfernens von Stoppwörtern in der Textvorverarbeitung?",
          nl: "Wat is het doel van het verwijderen van stopwoorden in tekstvoorverwerking?"
        },
        options: [
          { en: "To remove common words that don't carry much meaning", es: "Para eliminar palabras comunes que no llevan mucho significado", de: "Um häufige Wörter zu entfernen die nicht viel Bedeutung tragen", nl: "Om veelvoorkomende woorden te verwijderen die niet veel betekenis dragen" },
          { en: "To stop the text processing pipeline", es: "Para detener el pipeline de procesamiento de texto", de: "Um die Textverarbeitungspipeline zu stoppen", nl: "Om de tekstverwerkingspijplijn te stoppen" },
          { en: "To identify the end of sentences", es: "Para identificar el final de las oraciones", de: "Um das Ende von Sätzen zu identifizieren", nl: "Om het einde van zinnen te identificeren" },
          { en: "To count the total number of words", es: "Para contar el número total de palabras", de: "Um die Gesamtzahl der Wörter zu zählen", nl: "Om het totale aantal woorden te tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Stop words like 'the', 'and', 'is' are frequently used but carry little semantic meaning, so removing them helps focus on more meaningful words and reduces noise.",
          es: "Las palabras vacías como 'el', 'y', 'es' se usan frecuentemente pero llevan poco significado semántico, así que eliminarlas ayuda a enfocarse en palabras más significativas y reduce el ruido.",
          de: "Stoppwörter wie 'der', 'und', 'ist' werden häufig verwendet aber tragen wenig semantische Bedeutung, daher hilft das Entfernen dabei sich auf bedeutungsvollere Wörter zu konzentrieren und Rauschen zu reduzieren.",
          nl: "Stopwoorden zoals 'de', 'en', 'is' worden vaak gebruikt maar dragen weinig semantische betekenis, dus het verwijderen ervan helpt om te focussen op meer betekenisvolle woorden en vermindert ruis."
        }
      },
      {
        question: {
          en: "What is the difference between stemming and lemmatization?",
          es: "¿Cuál es la diferencia entre stemming y lemmatización?",
          de: "Was ist der Unterschied zwischen Stemming und Lemmatisierung?",
          nl: "Wat is het verschil tussen stemming en lemmatisatie?"
        },
        options: [
          { en: "Stemming cuts word endings, lemmatization finds the actual root word using dictionary", es: "Stemming corta terminaciones de palabras, lemmatización encuentra la palabra raíz actual usando diccionario", de: "Stemming schneidet Wortendungen ab, Lemmatisierung findet das tatsächliche Grundwort mit Wörterbuch", nl: "Stemming knipt woordeinden af, lemmatisatie vindt het werkelijke grondwoord met woordenboek" },
          { en: "Stemming is faster than lemmatization", es: "Stemming es más rápido que lemmatización", de: "Stemming ist schneller als Lemmatisierung", nl: "Stemming is sneller dan lemmatisatie" },
          { en: "Lemmatization only works with verbs", es: "Lemmatización solo funciona con verbos", de: "Lemmatisierung funktioniert nur mit Verben", nl: "Lemmatisatie werkt alleen met werkwoorden" },
          { en: "They are the same process", es: "Son el mismo proceso", de: "Sie sind derselbe Prozess", nl: "Ze zijn hetzelfde proces" }
        ],
        correct: 0,
        explanation: {
          en: "Stemming simply removes suffixes using rules, while lemmatization uses vocabulary and morphological analysis to return the base form (lemma) of a word.",
          es: "Stemming simplemente elimina sufijos usando reglas, mientras lemmatización usa vocabulario y análisis morfológico para retornar la forma base (lema) de una palabra.",
          de: "Stemming entfernt einfach Suffixe mit Regeln, während Lemmatisierung Vokabular und morphologische Analyse verwendet um die Grundform (Lemma) eines Wortes zurückzugeben.",
          nl: "Stemming verwijdert eenvoudig achtervoegsels met regels, terwijl lemmatisatie vocabulaire en morfologische analyse gebruikt om de basisvorm (lemma) van een woord terug te geven."
        }
      },
      {
        question: {
          en: "What is Part-of-Speech (POS) tagging?",
          es: "¿Qué es el etiquetado de partes del discurso (POS)?",
          de: "Was ist Part-of-Speech (POS) Tagging?",
          nl: "Wat is Part-of-Speech (POS) tagging?"
        },
        options: [
          { en: "Assigning grammatical categories (noun, verb, adjective) to each word", es: "Asignar categorías gramaticales (sustantivo, verbo, adjetivo) a cada palabra", de: "Grammatische Kategorien (Substantiv, Verb, Adjektiv) jedem Wort zuweisen", nl: "Grammaticale categorieën (zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord) toewijzen aan elk woord" },
          { en: "Finding the position of words in a sentence", es: "Encontrar la posición de las palabras en una oración", de: "Die Position von Wörtern in einem Satz finden", nl: "De positie van woorden in een zin vinden" },
          { en: "Tagging positive and negative sentiment", es: "Etiquetar sentimiento positivo y negativo", de: "Positive und negative Stimmung markieren", nl: "Positief en negatief sentiment taggen" },
          { en: "Marking the beginning and end of speeches", es: "Marcar el principio y final de discursos", de: "Den Anfang und das Ende von Reden markieren", nl: "Het begin en einde van speeches markeren" }
        ],
        correct: 0,
        explanation: {
          en: "POS tagging assigns grammatical labels to words based on their role in the sentence, helping understand sentence structure and meaning.",
          es: "El etiquetado POS asigna etiquetas gramaticales a palabras basándose en su rol en la oración, ayudando a entender estructura y significado de la oración.",
          de: "POS-Tagging weist Wörtern grammatische Labels basierend auf ihrer Rolle im Satz zu, hilft beim Verstehen von Satzstruktur und Bedeutung.",
          nl: "POS tagging wijst grammaticale labels toe aan woorden gebaseerd op hun rol in de zin, helpt bij het begrijpen van zinsstructuur en betekenis."
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
          { en: "Identifying and classifying named entities like people, places, organizations in text", es: "Identificar y clasificar entidades nombradas como personas, lugares, organizaciones en texto", de: "Identifizierung und Klassifizierung benannter Entitäten wie Personen, Orte, Organisationen in Text", nl: "Het identificeren en classificeren van genoemde entiteiten zoals personen, plaatsen, organisaties in tekst" },
          { en: "Recognizing the names of authors", es: "Reconocer los nombres de autores", de: "Die Namen von Autoren erkennen", nl: "De namen van auteurs herkennen" },
          { en: "Finding entities in a database", es: "Encontrar entidades en una base de datos", de: "Entitäten in einer Datenbank finden", nl: "Entiteiten vinden in een database" },
          { en: "Creating new entity names", es: "Crear nuevos nombres de entidades", de: "Neue Entitätsnamen erstellen", nl: "Nieuwe entiteitsnamen maken" }
        ],
        correct: 0,
        explanation: {
          en: "NER identifies and extracts entities such as person names, locations, organizations, dates, and other predefined categories from unstructured text.",
          es: "NER identifica y extrae entidades como nombres de personas, ubicaciones, organizaciones, fechas y otras categorías predefinidas de texto no estructurado.",
          de: "NER identifiziert und extrahiert Entitäten wie Personennamen, Standorte, Organisationen, Daten und andere vordefinierte Kategorien aus unstrukturiertem Text.",
          nl: "NER identificeert en extraheert entiteiten zoals persoonsnamen, locaties, organisaties, datums en andere voorgedefinieerde categorieën uit ongestructureerde tekst."
        }
      },
      {
        question: {
          en: "What is the Bag of Words (BoW) model?",
          es: "¿Qué es el modelo Bolsa de Palabras (BoW)?",
          de: "Was ist das Bag of Words (BoW) Modell?",
          nl: "Wat is het Bag of Words (BoW) model?"
        },
        options: [
          { en: "A text representation that counts word frequencies while ignoring grammar and word order", es: "Una representación de texto que cuenta frecuencias de palabras ignorando gramática y orden de palabras", de: "Eine Textrepräsentation die Worthäufigkeiten zählt während Grammatik und Wortreihenfolge ignoriert werden", nl: "Een tekstrepresentatie die woordfrequenties telt terwijl grammatica en woordvolgorde worden genegeerd" },
          { en: "A model for storing words in bags", es: "Un modelo para almacenar palabras en bolsas", de: "Ein Modell zum Speichern von Wörtern in Taschen", nl: "Een model voor het opslaan van woorden in zakken" },
          { en: "A method for organizing vocabulary", es: "Un método para organizar vocabulario", de: "Eine Methode zur Organisation des Vokabulars", nl: "Een methode voor het organiseren van vocabulaire" },
          { en: "A technique for word translation", es: "Una técnica para traducción de palabras", de: "Eine Technik für Wortübersetzung", nl: "Een techniek voor woordvertaling" }
        ],
        correct: 0,
        explanation: {
          en: "BoW creates a vector representation of text where each dimension represents a word and the value represents the frequency of that word in the document.",
          es: "BoW crea una representación vectorial de texto donde cada dimensión representa una palabra y el valor representa la frecuencia de esa palabra en el documento.",
          de: "BoW erstellt eine Vektorrepräsentation von Text wo jede Dimension ein Wort repräsentiert und der Wert die Häufigkeit dieses Wortes im Dokument repräsentiert.",
          nl: "BoW creëert een vectorrepresentatie van tekst waarbij elke dimensie een woord vertegenwoordigt en de waarde de frequentie van dat woord in het document vertegenwoordigt."
        }
      },
      {
        question: {
          nl: "Wat is de edit distance tussen twee strings?",
          en: "What is the edit distance between two strings?",
          es: "¿Qué es la distancia de edición entre dos cadenas?",
          de: "Was ist die Edit-Distanz zwischen zwei Strings?"
        },
        options: [
          { nl: "Het minimum aantal bewerkingen nodig om de ene string in de andere te veranderen", en: "The minimum number of operations needed to transform one string into another", es: "El número mínimo de operaciones necesarias para transformar una cadena en otra", de: "Die minimale Anzahl von Operationen die benötigt werden um einen String in einen anderen zu transformieren" },
          { nl: "De lengte van de langste string", en: "The length of the longest string", es: "La longitud de la cadena más larga", de: "Die Länge des längsten Strings" },
          { nl: "Het aantal verschillende karakters", en: "The number of different characters", es: "El número de caracteres diferentes", de: "Die Anzahl verschiedener Zeichen" },
          { nl: "De totale lengte van beide strings", en: "The total length of both strings", es: "La longitud total de ambas cadenas", de: "Die Gesamtlänge beider Strings" }
        ],
        correct: 0,
        explanation: {
          nl: "Edit distance (ook wel Levenshtein distance genoemd) meet het minimum aantal single-character bewerkingen (invoegingen, verwijderingen of vervangingen) om de ene string in de andere te veranderen.",
          en: "Edit distance (also called Levenshtein distance) measures the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into another.",
          es: "La distancia de edición (también llamada distancia de Levenshtein) mide el número mínimo de ediciones de un solo carácter (inserciones, eliminaciones o sustituciones) requeridas para cambiar una cadena en otra.",
          de: "Edit-Distanz (auch Levenshtein-Distanz genannt) misst die minimale Anzahl von Einzelzeichen-Bearbeitungen (Einfügungen, Löschungen oder Ersetzungen) die erforderlich sind um einen String in einen anderen zu ändern."
        }
      },
      {
        question: {
          nl: "Wat is de Jaccard similarity voor tekstanalyse?",
          en: "What is Jaccard similarity for text analysis?",
          es: "¿Qué es la similitud de Jaccard para análisis de texto?",
          de: "Was ist Jaccard-Ähnlichkeit für Textanalyse?"
        },
        options: [
          { nl: "De verhouding van gemeenschappelijke woorden tot de totale unieke woorden in twee teksten", en: "The ratio of common words to the total unique words in two texts", es: "La proporción de palabras comunes al total de palabras únicas en dos textos", de: "Das Verhältnis gemeinsamer Wörter zu den gesamten einzigartigen Wörtern in zwei Texten" },
          { nl: "De gemiddelde lengte van twee teksten", en: "The average length of two texts", es: "La longitud promedio de dos textos", de: "Die durchschnittliche Länge zweier Texte" },
          { nl: "Het aantal zinnen in beide teksten", en: "The number of sentences in both texts", es: "El número de oraciones en ambos textos", de: "Die Anzahl der Sätze in beiden Texten" },
          { nl: "De tijdsduur om beide teksten te lezen", en: "The time duration to read both texts", es: "La duración de tiempo para leer ambos textos", de: "Die Zeitdauer um beide Texte zu lesen" }
        ],
        correct: 0,
        explanation: {
          nl: "Jaccard similarity berekent de overlap tussen twee sets door het aantal gemeenschappelijke elementen te delen door het aantal unieke elementen in beide sets gecombineerd. Voor tekst wordt dit toegepast op woordsets.",
          en: "Jaccard similarity calculates the overlap between two sets by dividing the number of common elements by the number of unique elements in both sets combined. For text, this is applied to word sets.",
          es: "La similitud de Jaccard calcula la superposición entre dos conjuntos dividiendo el número de elementos comunes por el número de elementos únicos en ambos conjuntos combinados. Para texto, esto se aplica a conjuntos de palabras.",
          de: "Jaccard-Ähnlichkeit berechnet die Überlappung zwischen zwei Mengen indem sie die Anzahl gemeinsamer Elemente durch die Anzahl einzigartiger Elemente in beiden kombinierten Mengen teilt. Für Text wird dies auf Wortmengen angewendet."
        }
      },
      {
        question: {
          nl: "Wat is case folding in tekstvoorverwerking?",
          en: "What is case folding in text preprocessing?",
          es: "¿Qué es el case folding en preprocesamiento de texto?",
          de: "Was ist Case Folding in der Textvorverarbeitung?"
        },
        options: [
          { nl: "Het converteren van alle karakters naar kleine letters voor consistentie", en: "Converting all characters to lowercase for consistency", es: "Convertir todos los caracteres a minúsculas para consistencia", de: "Alle Zeichen zur Konsistenz in Kleinbuchstaben umwandeln" },
          { nl: "Het opvouwen van tekst in mappen", en: "Folding text into folders", es: "Doblar texto en carpetas", de: "Text in Ordner falten" },
          { nl: "Het verbergen van bepaalde tekstdelen", en: "Hiding certain text parts", es: "Ocultar ciertas partes del texto", de: "Bestimmte Textteile verstecken" },
          { nl: "Het organiseren van tekst per categorie", en: "Organizing text by category", es: "Organizar texto por categoría", de: "Text nach Kategorie organisieren" }
        ],
        correct: 0,
        explanation: {
          nl: "Case folding is een vorm van tekstnormalisatie waarbij alle karakters worden omgezet naar een consistente case (meestal kleine letters) zodat 'Apple' en 'apple' als hetzelfde woord worden behandeld.",
          en: "Case folding is a form of text normalization where all characters are converted to a consistent case (usually lowercase) so that 'Apple' and 'apple' are treated as the same word.",
          es: "El case folding es una forma de normalización de texto donde todos los caracteres se convierten a una case consistente (usualmente minúsculas) para que 'Apple' y 'apple' se traten como la misma palabra.",
          de: "Case Folding ist eine Form der Textnormalisierung bei der alle Zeichen in eine konsistente Schreibweise (normalerweise Kleinbuchstaben) konvertiert werden damit 'Apple' und 'apple' als dasselbe Wort behandelt werden."
        }
      },
      {
        question: {
          nl: "Wat zijn collocations in NLP?",
          en: "What are collocations in NLP?",
          es: "¿Qué son las colocaciones en PLN?",
          de: "Was sind Kollokationen in NLP?"
        },
        options: [
          { nl: "Woorden die vaak samen voorkomen en een specifieke betekenis hebben", en: "Words that frequently occur together and have a specific meaning", es: "Palabras que ocurren frecuentemente juntas y tienen un significado específico", de: "Wörter die häufig zusammen auftreten und eine spezifische Bedeutung haben" },
          { nl: "Woorden op dezelfde locatie in verschillende teksten", en: "Words at the same location in different texts", es: "Palabras en la misma ubicación en diferentes textos", de: "Wörter an derselben Stelle in verschiedenen Texten" },
          { nl: "Synonieme woorden", en: "Synonymous words", es: "Palabras sinónimas", de: "Synonyme Wörter" },
          { nl: "Woorden met dezelfde lengte", en: "Words with the same length", es: "Palabras con la misma longitud", de: "Wörter mit derselben Länge" }
        ],
        correct: 0,
        explanation: {
          nl: "Collocations zijn woordcombinaties die samen een specifieke betekenis hebben die niet altijd afleidbaar is uit de individuele woorden, zoals 'koffie zetten' of 'sterke koffie'.",
          en: "Collocations are word combinations that together have a specific meaning that isn't always derivable from the individual words, like 'strong coffee' or 'make coffee'.",
          es: "Las colocaciones son combinaciones de palabras que juntas tienen un significado específico que no siempre se puede derivar de las palabras individuales, como 'café fuerte' o 'hacer café'.",
          de: "Kollokationen sind Wortkombinationen die zusammen eine spezifische Bedeutung haben die nicht immer aus den einzelnen Wörtern ableitbar ist, wie 'starker Kaffee' oder 'Kaffee machen'."
        }
      },
      {
        question: {
          nl: "Wat is text chunking?",
          en: "What is text chunking?",
          es: "¿Qué es el text chunking?",
          de: "Was ist Text Chunking?"
        },
        options: [
          { nl: "Het groeperen van woorden in betekenisvolle syntactische eenheden", en: "Grouping words into meaningful syntactic units", es: "Agrupar palabras en unidades sintácticas significativas", de: "Wörter in bedeutungsvolle syntaktische Einheiten gruppieren" },
          { nl: "Het opdelen van tekst in gelijke stukken", en: "Dividing text into equal pieces", es: "Dividir texto en piezas iguales", de: "Text in gleiche Stücke teilen" },
          { nl: "Het comprimeren van tekstbestanden", en: "Compressing text files", es: "Comprimir archivos de texto", de: "Textdateien komprimieren" },
          { nl: "Het converteren van tekst naar chunks van data", en: "Converting text to chunks of data", es: "Convertir texto a trozos de datos", de: "Text in Datenchunks konvertieren" }
        ],
        correct: 0,
        explanation: {
          nl: "Text chunking identificeert niet-overlappende woordgroepen die samen een grammaticale eenheid vormen, zoals noun phrases (zelfstandige naamwoordgroepen) of verb phrases (werkwoordgroepen).",
          en: "Text chunking identifies non-overlapping groups of words that form grammatical units together, such as noun phrases or verb phrases.",
          es: "El text chunking identifica grupos no superpuestos de palabras que forman unidades gramaticales juntas, como frases nominales o frases verbales.",
          de: "Text Chunking identifiziert nicht-überlappende Wortgruppen die zusammen grammatische Einheiten bilden wie Nominalphrasen oder Verbalphrasen."
        }
      },
      {
        question: {
          nl: "Wat is een sliding window in NLP?",
          en: "What is a sliding window in NLP?",
          es: "¿Qué es una ventana deslizante en PLN?",
          de: "Was ist ein Sliding Window in NLP?"
        },
        options: [
          { nl: "Een techniek om een vaste grootte venster over tekst te bewegen voor contextanalyse", en: "A technique to move a fixed-size window over text for context analysis", es: "Una técnica para mover una ventana de tamaño fijo sobre texto para análisis de contexto", de: "Eine Technik um ein Fenster fester Größe über Text zu bewegen für Kontextanalyse" },
          { nl: "Een grafische interface voor tekstbewerking", en: "A graphical interface for text editing", es: "Una interfaz gráfica para edición de texto", de: "Eine grafische Benutzeroberfläche für Textbearbeitung" },
          { nl: "Een methode om vensters te openen en sluiten", en: "A method to open and close windows", es: "Un método para abrir y cerrar ventanas", de: "Eine Methode um Fenster zu öffnen und zu schließen" },
          { nl: "Een algoritme voor venstergrotte optimalisatie", en: "An algorithm for window size optimization", es: "Un algoritmo para optimización de tamaño de ventana", de: "Ein Algorithmus für Fenstergrößenoptimierung" }
        ],
        correct: 0,
        explanation: {
          nl: "Een sliding window beweegt een venster van vaste grootte (bijvoorbeeld 3 woorden) stap voor stap over de tekst om lokale context en woordpatronen te analyseren. Dit wordt gebruikt in word embeddings en taalmodellen.",
          en: "A sliding window moves a fixed-size window (e.g., 3 words) step by step over text to analyze local context and word patterns. This is used in word embeddings and language models.",
          es: "Una ventana deslizante mueve una ventana de tamaño fijo (ej., 3 palabras) paso a paso sobre el texto para analizar contexto local y patrones de palabras. Esto se usa en word embeddings y modelos de lenguaje.",
          de: "Ein Sliding Window bewegt ein Fenster fester Größe (z.B. 3 Wörter) schrittweise über Text um lokalen Kontext und Wortmuster zu analysieren. Dies wird in Word Embeddings und Sprachmodellen verwendet."
        }
      },
      {
        question: {
          nl: "Wat is text segmentation?",
          en: "What is text segmentation?",
          es: "¿Qué es la segmentación de texto?",
          de: "Was ist Textsegmentierung?"
        },
        options: [
          { nl: "Het opdelen van tekst in logische eenheden zoals zinnen, woorden of paragrafen", en: "Dividing text into logical units like sentences, words, or paragraphs", es: "Dividir texto en unidades lógicas como oraciones, palabras o párrafos", de: "Text in logische Einheiten wie Sätze, Wörter oder Absätze unterteilen" },
          { nl: "Het delen van tekst tussen meerdere gebruikers", en: "Sharing text between multiple users", es: "Compartir texto entre múltiples usuarios", de: "Text zwischen mehreren Benutzern teilen" },
          { nl: "Het organiseren van tekst in segmenten van de markt", en: "Organizing text into market segments", es: "Organizar texto en segmentos de mercado", de: "Text in Marktsegmente organisieren" },
          { nl: "Het groeperen van tekst op basis van kleur", en: "Grouping text based on color", es: "Agrupar texto basado en color", de: "Text basierend auf Farbe gruppieren" }
        ],
        correct: 0,
        explanation: {
          nl: "Text segmentation is het proces van het identificeren van grenzen tussen teksteneenheden. Dit kan woorden scheiden (vooral in talen zonder spaties zoals Chinees), zinnen identificeren, of paragrafen afbakenen.",
          en: "Text segmentation is the process of identifying boundaries between text units. This can involve separating words (especially in languages without spaces like Chinese), identifying sentences, or delimiting paragraphs.",
          es: "La segmentación de texto es el proceso de identificar límites entre unidades de texto. Esto puede involucrar separar palabras (especialmente en idiomas sin espacios como el chino), identificar oraciones, o delimitar párrafos.",
          de: "Textsegmentierung ist der Prozess der Identifizierung von Grenzen zwischen Texteinheiten. Dies kann das Trennen von Wörtern (besonders in Sprachen ohne Leerzeichen wie Chinesisch), das Identifizieren von Sätzen oder das Abgrenzen von Absätzen beinhalten."
        }
      },
      {
        question: {
          nl: "Wat is frequency analysis in tekstmining?",
          en: "What is frequency analysis in text mining?",
          es: "¿Qué es el análisis de frecuencia en minería de texto?",
          de: "Was ist Häufigkeitsanalyse in Text Mining?"
        },
        options: [
          { nl: "Het tellen hoe vaak woorden of termen voorkomen in een tekst of corpus", en: "Counting how often words or terms appear in a text or corpus", es: "Contar cuán a menudo aparecen palabras o términos en un texto o corpus", de: "Zählen wie oft Wörter oder Begriffe in einem Text oder Korpus erscheinen" },
          { nl: "Het analyseren van radiofrequenties", en: "Analyzing radio frequencies", es: "Analizar frecuencias de radio", de: "Radiofrequenzen analysieren" },
          { nl: "Het meten van hoe vaak tekst wordt gelezen", en: "Measuring how often text is read", es: "Medir cuán a menudo se lee el texto", de: "Messen wie oft Text gelesen wird" },
          { nl: "Het bepalen van de beste tijd om tekst te publiceren", en: "Determining the best time to publish text", es: "Determinar el mejor momento para publicar texto", de: "Die beste Zeit zum Veröffentlichen von Text bestimmen" }
        ],
        correct: 0,
        explanation: {
          nl: "Frequency analysis telt hoe vaak specifieke woorden, termen of n-grams voorkomen in een tekst. Dit helpt bij het identificeren van belangrijke termen, thema's en patronen in tekstdata.",
          en: "Frequency analysis counts how often specific words, terms, or n-grams occur in text. This helps identify important terms, themes, and patterns in textual data.",
          es: "El análisis de frecuencia cuenta cuán a menudo ocurren palabras específicas, términos o n-gramas en texto. Esto ayuda a identificar términos importantes, temas y patrones en datos textuales.",
          de: "Häufigkeitsanalyse zählt wie oft spezifische Wörter, Begriffe oder n-Gramme in Text auftreten. Dies hilft wichtige Begriffe, Themen und Muster in Textdaten zu identifizieren."
        }
      },
      {
        question: {
          nl: "Wat is text normalization?",
          en: "What is text normalization?",
          es: "¿Qué es la normalización de texto?",
          de: "Was ist Textnormalisierung?"
        },
        options: [
          { nl: "Het converteren van tekst naar een standaard, consistente vorm", en: "Converting text to a standard, consistent form", es: "Convertir texto a una forma estándar y consistente", de: "Text in eine standardisierte, konsistente Form konvertieren" },
          { nl: "Het maken van tekst normaal leesbaar", en: "Making text normally readable", es: "Hacer texto normalmente legible", de: "Text normal lesbar machen" },
          { nl: "Het aanpassen van tekst aan normale statistieken", en: "Adjusting text to normal statistics", es: "Ajustar texto a estadísticas normales", de: "Text an normale Statistiken anpassen" },
          { nl: "Het controleren of tekst normaal is", en: "Checking if text is normal", es: "Verificar si el texto es normal", de: "Überprüfen ob Text normal ist" }
        ],
        correct: 0,
        explanation: {
          nl: "Text normalization omvat verschillende technieken zoals case folding, het verwijderen van leestekens, het standardiseren van afkortingen, en het omzetten van getallen naar woorden om tekst consistent te maken voor analyse.",
          en: "Text normalization includes various techniques like case folding, removing punctuation, standardizing abbreviations, and converting numbers to words to make text consistent for analysis.",
          es: "La normalización de texto incluye varias técnicas como case folding, eliminar puntuación, estandarizar abreviaciones, y convertir números a palabras para hacer texto consistente para análisis.",
          de: "Textnormalisierung umfasst verschiedene Techniken wie Case Folding, das Entfernen von Interpunktion, das Standardisieren von Abkürzungen und das Konvertieren von Zahlen in Wörter um Text für die Analyse konsistent zu machen."
        }
      },
      {
        question: {
          nl: "Wat is noise removal in tekstvoorverwerking?",
          en: "What is noise removal in text preprocessing?",
          es: "¿Qué es la eliminación de ruido en preprocesamiento de texto?",
          de: "Was ist Rauschentfernung in der Textvorverarbeitung?"
        },
        options: [
          { nl: "Het verwijderen van irrelevante of storende elementen uit tekst", en: "Removing irrelevant or disruptive elements from text", es: "Eliminar elementos irrelevantes o disruptivos del texto", de: "Irrelevante oder störende Elemente aus Text entfernen" },
          { nl: "Het verminderen van geluidsoverlast tijdens het typen", en: "Reducing noise pollution while typing", es: "Reducir la contaminación acústica mientras se escribe", de: "Lärmbelästigung beim Tippen reduzieren" },
          { nl: "Het filteren van audio uit tekstbestanden", en: "Filtering audio from text files", es: "Filtrar audio de archivos de texto", de: "Audio aus Textdateien filtern" },
          { nl: "Het verbeteren van de geluidskwaliteit van tekst-naar-spraak", en: "Improving sound quality of text-to-speech", es: "Mejorar la calidad de sonido de texto a voz", de: "Klangqualität von Text-zu-Sprache verbessern" }
        ],
        correct: 0,
        explanation: {
          nl: "Noise removal verwijdert elementen die geen bijdrage leveren aan de analyse zoals HTML tags, speciale karakters, extra spaties, of URLs. Dit helpt om de focus te leggen op de werkelijke tekstinhoud.",
          en: "Noise removal eliminates elements that don't contribute to analysis such as HTML tags, special characters, extra spaces, or URLs. This helps focus on the actual text content.",
          es: "La eliminación de ruido elimina elementos que no contribuyen al análisis como etiquetas HTML, caracteres especiales, espacios extra, o URLs. Esto ayuda a enfocarse en el contenido textual real.",
          de: "Rauschentfernung eliminiert Elemente die nicht zur Analyse beitragen wie HTML-Tags, Sonderzeichen, zusätzliche Leerzeichen oder URLs. Dies hilft sich auf den tatsächlichen Textinhalt zu konzentrieren."
        }
      },
      {
        question: {
          nl: "Wat is feature extraction in NLP?",
          en: "What is feature extraction in NLP?",
          es: "¿Qué es la extracción de características en PLN?",
          de: "Was ist Merkmalsextraktion in NLP?"
        },
        options: [
          { nl: "Het identificeren en extraheren van relevante eigenschappen uit tekst voor machine learning", en: "Identifying and extracting relevant properties from text for machine learning", es: "Identificar y extraer propiedades relevantes del texto para aprendizaje automático", de: "Relevante Eigenschaften aus Text für maschinelles Lernen identifizieren und extrahieren" },
          { nl: "Het halen van functies uit software", en: "Extracting functions from software", es: "Extraer funciones del software", de: "Funktionen aus Software extrahieren" },
          { nl: "Het vinden van kenmerken in databases", en: "Finding characteristics in databases", es: "Encontrar características en bases de datos", de: "Merkmale in Datenbanken finden" },
          { nl: "Het extraheren van metadata uit bestanden", en: "Extracting metadata from files", es: "Extraer metadatos de archivos", de: "Metadaten aus Dateien extrahieren" }
        ],
        correct: 0,
        explanation: {
          nl: "Feature extraction transformeert ruwe tekstdata naar numerieke features die machine learning algoritmes kunnen gebruiken. Dit omvat technieken zoals bag-of-words, TF-IDF, en word embeddings.",
          en: "Feature extraction transforms raw text data into numerical features that machine learning algorithms can use. This includes techniques like bag-of-words, TF-IDF, and word embeddings.",
          es: "La extracción de características transforma datos de texto sin procesar en características numéricas que los algoritmos de aprendizaje automático pueden usar. Esto incluye técnicas como bolsa de palabras, TF-IDF, y word embeddings.",
          de: "Merkmalsextraktion transformiert rohe Textdaten in numerische Merkmale die maschinelle Lernalgorithmen verwenden können. Dies umfasst Techniken wie Bag-of-Words, TF-IDF und Word Embeddings."
        }
      },
      {
        question: {
          nl: "Wat is het doel van lowercasing in tekstvoorverwerking?",
          en: "What is the purpose of lowercasing in text preprocessing?",
          es: "¿Cuál es el propósito de convertir a minúsculas en preprocesamiento de texto?",
          de: "Was ist der Zweck der Kleinschreibung in der Textvorverarbeitung?"
        },
        options: [
          { nl: "Om woordconsistentie te waarborgen zodat 'Apple' en 'apple' als hetzelfde worden behandeld", en: "To ensure word consistency so 'Apple' and 'apple' are treated as the same", es: "Para asegurar consistencia de palabras para que 'Apple' y 'apple' se traten como lo mismo", de: "Um Wortkonsistenz sicherzustellen damit 'Apple' und 'apple' gleich behandelt werden" },
          { nl: "Om tekst stiller te maken", en: "To make text quieter", es: "Para hacer el texto más silencioso", de: "Um Text leiser zu machen" },
          { nl: "Om de bestandsgrootte te verkleinen", en: "To reduce file size", es: "Para reducir el tamaño del archivo", de: "Um die Dateigröße zu reduzieren" },
          { nl: "Om tekst sneller te laten laden", en: "To make text load faster", es: "Para hacer que el texto cargue más rápido", de: "Um Text schneller laden zu lassen" }
        ],
        correct: 0,
        explanation: {
          nl: "Lowercasing converteert alle tekst naar kleine letters om te voorkomen dat hetzelfde woord in verschillende cases als verschillende woorden wordt behandeld. Dit verbetert de consistentie en effectiviteit van tekstanalyse.",
          en: "Lowercasing converts all text to lowercase to prevent the same word in different cases from being treated as different words. This improves consistency and effectiveness of text analysis.",
          es: "Convertir a minúsculas convierte todo el texto a minúsculas para prevenir que la misma palabra en diferentes casos se trate como palabras diferentes. Esto mejora la consistencia y efectividad del análisis de texto.",
          de: "Kleinschreibung konvertiert den gesamten Text in Kleinbuchstaben um zu verhindern dass dasselbe Wort in verschiedenen Schreibweisen als verschiedene Wörter behandelt wird. Dies verbessert Konsistenz und Effektivität der Textanalyse."
        }
      },
      {
        question: {
          nl: "Wat zijn punctuation marks in de context van tekstvoorverwerking?",
          en: "What are punctuation marks in the context of text preprocessing?",
          es: "¿Qué son las marcas de puntuación en el contexto del preprocesamiento de texto?",
          de: "Was sind Interpunktionszeichen im Kontext der Textvorverarbeitung?"
        },
        options: [
          { nl: "Symbolen zoals punten, komma's en vraagtekens die vaak worden verwijderd tijdens preprocessing", en: "Symbols like periods, commas, and question marks that are often removed during preprocessing", es: "Símbolos como puntos, comas y signos de interrogación que a menudo se eliminan durante el preprocesamiento", de: "Symbole wie Punkte, Kommas und Fragezeichen die oft während der Vorverarbeitung entfernt werden" },
          { nl: "Speciale markeringen voor belangrijke punten in tekst", en: "Special markings for important points in text", es: "Marcas especiales para puntos importantes en texto", de: "Spezielle Markierungen für wichtige Punkte im Text" },
          { nl: "Tijdstempels in tekstdocumenten", en: "Timestamps in text documents", es: "Marcas de tiempo en documentos de texto", de: "Zeitstempel in Textdokumenten" },
          { nl: "Markeringen die aangeven waar tekst eindigt", en: "Markers that indicate where text ends", es: "Marcadores que indican dónde termina el texto", de: "Markierungen die anzeigen wo Text endet" }
        ],
        correct: 0,
        explanation: {
          nl: "Punctuation marks zijn leestekens die grammaticale structuur en betekenis aangeven. In tekstvoorverwerking worden deze vaak verwijderd omdat ze soms niet bijdragen aan de kernbetekenis van woorden voor bepaalde analyses.",
          en: "Punctuation marks are symbols that indicate grammatical structure and meaning. In text preprocessing, these are often removed because they sometimes don't contribute to the core meaning of words for certain analyses.",
          es: "Las marcas de puntuación son símbolos que indican estructura gramatical y significado. En el preprocesamiento de texto, estas a menudo se eliminan porque a veces no contribuyen al significado central de las palabras para ciertos análisis.",
          de: "Interpunktionszeichen sind Symbole die grammatische Struktur und Bedeutung anzeigen. In der Textvorverarbeitung werden diese oft entfernt weil sie manchmal nicht zur Kernbedeutung von Wörtern für bestimmte Analysen beitragen."
        }
      },
      {
        question: {
          nl: "Wat is white space normalization?",
          en: "What is white space normalization?",
          es: "¿Qué es la normalización de espacios en blanco?",
          de: "Was ist Leerzeichennormalisierung?"
        },
        options: [
          { nl: "Het standaardiseren van spaties, tabs en nieuwe regels in tekst", en: "Standardizing spaces, tabs, and newlines in text", es: "Estandarizar espacios, tabs y nuevas líneas en texto", de: "Leerzeichen, Tabs und Zeilenumbrüche in Text standardisieren" },
          { nl: "Het kleuren van witte achtergronden", en: "Coloring white backgrounds", es: "Colorear fondos blancos", de: "Weiße Hintergründe färben" },
          { nl: "Het aanpassen van witbalans in afbeeldingen", en: "Adjusting white balance in images", es: "Ajustar el balance de blancos en imágenes", de: "Weißabgleich in Bildern anpassen" },
          { nl: "Het normaliseren van witte kleuren", en: "Normalizing white colors", es: "Normalizar colores blancos", de: "Weiße Farben normalisieren" }
        ],
        correct: 0,
        explanation: {
          nl: "White space normalization standaardiseert verschillende soorten witruimte (spaties, tabs, nieuwe regels) tot een consistente vorm, zoals het vervangen van meerdere spaties door één spatie of het verwijderen van leading/trailing whitespace.",
          en: "White space normalization standardizes different types of whitespace (spaces, tabs, newlines) to a consistent form, such as replacing multiple spaces with single spaces or removing leading/trailing whitespace.",
          es: "La normalización de espacios en blanco estandariza diferentes tipos de espacios en blanco (espacios, tabs, nuevas líneas) a una forma consistente, como reemplazar múltiples espacios con espacios únicos o eliminar espacios al inicio/final.",
          de: "Leerzeichennormalisierung standardisiert verschiedene Arten von Leerräumen (Leerzeichen, Tabs, Zeilenumbrüche) zu einer konsistenten Form, wie das Ersetzen mehrerer Leerzeichen durch einzelne Leerzeichen oder das Entfernen von führenden/nachfolgenden Leerräumen."
        }
      },
      {
        question: {
          nl: "Wat is een regular expression (regex) pattern in tekstverwerking?",
          en: "What is a regular expression (regex) pattern in text processing?",
          es: "¿Qué es un patrón de expresión regular (regex) en procesamiento de texto?",
          de: "Was ist ein regulärer Ausdruck (Regex) Muster in der Textverarbeitung?"
        },
        options: [
          { nl: "Een formule die tekstpatronen beschrijft voor zoeken en vervangen", en: "A formula that describes text patterns for searching and replacing", es: "Una fórmula que describe patrones de texto para buscar y reemplazar", de: "Eine Formel die Textmuster für Suchen und Ersetzen beschreibt" },
          { nl: "Een regelmatig herhalend patroon in tekst", en: "A regularly repeating pattern in text", es: "Un patrón que se repite regularmente en texto", de: "Ein regelmäßig wiederkehrendes Muster in Text" },
          { nl: "Een standaard uitdrukking voor tekstformattering", en: "A standard expression for text formatting", es: "Una expresión estándar para formateo de texto", de: "Ein Standardausdruck für Textformatierung" },
          { nl: "Een normale expressie zonder speciale karakters", en: "A normal expression without special characters", es: "Una expresión normal sin caracteres especiales", de: "Ein normaler Ausdruck ohne Sonderzeichen" }
        ],
        correct: 0,
        explanation: {
          nl: "Regular expressions zijn krachtige patronen die specifieke tekststructuren kunnen matchen, zoals email adressen, telefoonnummers, of complexe woordpatronen. Ze worden gebruikt voor validatie, extractie en transformatie van tekst.",
          en: "Regular expressions are powerful patterns that can match specific text structures like email addresses, phone numbers, or complex word patterns. They're used for validation, extraction, and transformation of text.",
          es: "Las expresiones regulares son patrones poderosos que pueden coincidir con estructuras de texto específicas como direcciones de correo, números de teléfono, o patrones de palabras complejos. Se usan para validación, extracción y transformación de texto.",
          de: "Reguläre Ausdrücke sind mächtige Muster die spezifische Textstrukturen wie E-Mail-Adressen, Telefonnummern oder komplexe Wortmuster matchen können. Sie werden für Validierung, Extraktion und Transformation von Text verwendet."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
