// Natural Language Processing Quiz - Level 5: Intermediate NLP
(function() {
  const level5 = {
    name: {
      en: "Machine Translation & Sentiment Analysis",
      es: "Traducción Automática y Análisis de Sentimientos",
      de: "Maschinelle Übersetzung & Sentiment-Analyse",
      nl: "Machinevertaling & Sentimentanalyse"
    },
    questions: [
      {
        question: {
          en: "What is the primary purpose of syntactic parsing in NLP?",
          es: "¿Cuál es el propósito principal del análisis sintáctico en PLN?",
          de: "Was ist der Hauptzweck des syntaktischen Parsings in NLP?",
          nl: "Wat is het primaire doel van syntactische parsing in NLP?"
        },
        options: [
          { en: "To analyze the grammatical structure and relationships between words in a sentence", es: "Analizar la estructura gramatical y las relaciones entre palabras en una oración", de: "Die grammatische Struktur und Beziehungen zwischen Wörtern in einem Satz zu analysieren", nl: "De grammaticale structuur en relaties tussen woorden in een zin analyseren" },
          { en: "To identify the emotional sentiment of text", es: "Identificar el sentimiento emocional del texto", de: "Die emotionale Stimmung des Textes zu identifizieren", nl: "Het emotionele sentiment van tekst identificeren" },
          { en: "To translate text from one language to another", es: "Traducir texto de un idioma a otro", de: "Text von einer Sprache in eine andere zu übersetzen", nl: "Tekst van de ene taal naar de andere vertalen" },
          { en: "To count word frequencies in documents", es: "Contar frecuencias de palabras en documentos", de: "Worthäufigkeiten in Dokumenten zu zählen", nl: "Woordfrequenties in documenten tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Syntactic parsing analyzes the grammatical structure of sentences, identifying how words relate to each other according to grammar rules. It builds parse trees that show the hierarchical structure of sentences, which is crucial for understanding meaning and enabling more advanced NLP tasks.",
          es: "El análisis sintáctico analiza la estructura gramatical de las oraciones, identificando cómo las palabras se relacionan entre sí según las reglas gramaticales. Construye árboles de análisis que muestran la estructura jerárquica de las oraciones, lo cual es crucial para entender el significado y permitir tareas más avanzadas de PLN.",
          de: "Syntaktisches Parsing analysiert die grammatische Struktur von Sätzen und identifiziert wie Wörter sich zueinander nach Grammatikregeln verhalten. Es erstellt Parse-Bäume die die hierarchische Struktur von Sätzen zeigen, was entscheidend für das Verstehen der Bedeutung und für erweiterte NLP-Aufgaben ist.",
          nl: "Syntactische parsing analyseert de grammaticale structuur van zinnen, waarbij wordt geïdentificeerd hoe woorden zich tot elkaar verhouden volgens grammaticaregels. Het bouwt parse-bomen die de hiërarchische structuur van zinnen tonen, wat cruciaal is voor het begrijpen van betekenis en het mogelijk maken van meer geavanceerde NLP-taken."
        }
      },
      {
        question: {
          en: "In dependency parsing, what does a 'head' represent?",
          es: "En el análisis de dependencias, ¿qué representa una 'cabeza'?",
          de: "Was repräsentiert ein 'Kopf' beim Dependency Parsing?",
          nl: "Wat stelt een 'hoofd' voor in dependency parsing?"
        },
        options: [
          { en: "The word that other words depend on grammatically", es: "La palabra de la que otras palabras dependen gramaticalmente", de: "Das Wort von dem andere Wörter grammatisch abhängen", nl: "Het woord waarvan andere woorden grammaticaal afhankelijk zijn" },
          { en: "The first word in a sentence", es: "La primera palabra en una oración", de: "Das erste Wort in einem Satz", nl: "Het eerste woord in een zin" },
          { en: "The most frequent word in the text", es: "La palabra más frecuente en el texto", de: "Das häufigste Wort im Text", nl: "Het meest voorkomende woord in de tekst" },
          { en: "The longest word in the sentence", es: "La palabra más larga en la oración", de: "Das längste Wort im Satz", nl: "Het langste woord in de zin" }
        ],
        correct: 0,
        explanation: {
          en: "In dependency parsing, a 'head' is the word that governs other words in the sentence. Each dependent word has a grammatical relationship with its head. For example, in 'The cat sleeps', 'sleeps' is the head that 'cat' depends on as its subject, creating a dependency relation.",
          es: "En el análisis de dependencias, una 'cabeza' es la palabra que gobierna otras palabras en la oración. Cada palabra dependiente tiene una relación gramatical con su cabeza. Por ejemplo, en 'El gato duerme', 'duerme' es la cabeza de la que 'gato' depende como su sujeto, creando una relación de dependencia.",
          de: "Beim Dependency Parsing ist ein 'Kopf' das Wort das andere Wörter im Satz regiert. Jedes abhängige Wort hat eine grammatische Beziehung zu seinem Kopf. Zum Beispiel in 'Die Katze schläft' ist 'schläft' der Kopf von dem 'Katze' als Subjekt abhängt, wodurch eine Abhängigkeitsrelation entsteht.",
          nl: "In dependency parsing is een 'hoofd' het woord dat andere woorden in de zin beheerst. Elk afhankelijk woord heeft een grammaticale relatie met zijn hoofd. Bijvoorbeeld, in 'De kat slaapt' is 'slaapt' het hoofd waarvan 'kat' afhankelijk is als onderwerp, wat een afhankelijkheidsrelatie creëert."
        }
      },
      {
        question: {
          en: "What is the difference between constituency parsing and dependency parsing?",
          es: "¿Cuál es la diferencia entre el análisis de constituyentes y el análisis de dependencias?",
          de: "Was ist der Unterschied zwischen Constituency Parsing und Dependency Parsing?",
          nl: "Wat is het verschil tussen constituency parsing en dependency parsing?"
        },
        options: [
          { en: "Constituency parsing creates hierarchical phrase structures, while dependency parsing shows direct word-to-word relationships", es: "El análisis de constituyentes crea estructuras jerárquicas de frases, mientras que el análisis de dependencias muestra relaciones directas palabra-palabra", de: "Constituency Parsing erstellt hierarchische Phrasenstrukturen, während Dependency Parsing direkte Wort-zu-Wort-Beziehungen zeigt", nl: "Constituency parsing creëert hiërarchische frasestructuren, terwijl dependency parsing directe woord-tot-woord relaties toont" },
          { en: "Constituency parsing is faster than dependency parsing", es: "El análisis de constituyentes es más rápido que el análisis de dependencias", de: "Constituency Parsing ist schneller als Dependency Parsing", nl: "Constituency parsing is sneller dan dependency parsing" },
          { en: "Constituency parsing only works with English, dependency parsing works with all languages", es: "El análisis de constituyentes solo funciona con inglés, el análisis de dependencias funciona con todos los idiomas", de: "Constituency Parsing funktioniert nur mit Englisch, Dependency Parsing funktioniert mit allen Sprachen", nl: "Constituency parsing werkt alleen met Engels, dependency parsing werkt met alle talen" },
          { en: "There is no difference, they are the same technique", es: "No hay diferencia, son la misma técnica", de: "Es gibt keinen Unterschied, sie sind dieselbe Technik", nl: "Er is geen verschil, het zijn dezelfde technieken" }
        ],
        correct: 0,
        explanation: {
          en: "Constituency parsing breaks sentences into nested phrases (noun phrases, verb phrases, etc.) creating a tree structure with internal nodes representing phrases. Dependency parsing creates a more direct representation showing which words depend on which other words, with labeled arcs representing grammatical relationships like subject, object, or modifier.",
          es: "El análisis de constituyentes divide las oraciones en frases anidadas (frases nominales, frases verbales, etc.) creando una estructura de árbol con nodos internos que representan frases. El análisis de dependencias crea una representación más directa mostrando qué palabras dependen de qué otras palabras, con arcos etiquetados que representan relaciones gramaticales como sujeto, objeto o modificador.",
          de: "Constituency Parsing teilt Sätze in verschachtelte Phrasen (Nominalphrasen, Verbalphrasen, etc.) auf und erstellt eine Baumstruktur mit internen Knoten die Phrasen repräsentieren. Dependency Parsing erstellt eine direktere Darstellung die zeigt welche Wörter von welchen anderen Wörtern abhängen, mit beschrifteten Bögen die grammatische Beziehungen wie Subjekt, Objekt oder Modifikator repräsentieren.",
          nl: "Constituency parsing breekt zinnen op in geneste zinsdelen (naamwoordgroepen, werkwoordgroepen, etc.) en creëert een boomstructuur met interne knooppunten die zinsdelen vertegenwoordigen. Dependency parsing creëert een meer directe representatie die toont welke woorden afhankelijk zijn van welke andere woorden, met gelabelde bogen die grammaticale relaties zoals onderwerp, lijdend voorwerp of bepaling vertegenwoordigen."
        }
      },
      {
        question: {
          en: "What is Part-of-Speech (POS) tagging and why is it important for parsing?",
          es: "¿Qué es el etiquetado de partes del discurso (POS) y por qué es importante para el análisis?",
          de: "Was ist Part-of-Speech (POS) Tagging und warum ist es wichtig für das Parsing?",
          nl: "Wat is Part-of-Speech (POS) tagging en waarom is het belangrijk voor parsing?"
        },
        options: [
          { en: "Assigning grammatical categories to words, which provides essential information for understanding sentence structure", es: "Asignar categorías gramaticales a las palabras, lo que proporciona información esencial para entender la estructura de la oración", de: "Grammatische Kategorien zu Wörtern zuweisen, was wesentliche Informationen zum Verstehen der Satzstruktur liefert", nl: "Grammaticale categorieën toewijzen aan woorden, wat essentiële informatie verschaft voor het begrijpen van zinsstructuur" },
          { en: "Identifying the emotional tone of each word", es: "Identificar el tono emocional de cada palabra", de: "Den emotionalen Ton jedes Wortes identifizieren", nl: "De emotionele toon van elk woord identificeren" },
          { en: "Counting how many times each word appears", es: "Contar cuántas veces aparece cada palabra", de: "Zählen wie oft jedes Wort vorkommt", nl: "Tellen hoe vaak elk woord voorkomt" },
          { en: "Translating words to their base forms", es: "Traducir palabras a sus formas base", de: "Wörter in ihre Grundformen übersetzen", nl: "Woorden vertalen naar hun basisvormen" }
        ],
        correct: 0,
        explanation: {
          en: "POS tagging assigns grammatical labels (noun, verb, adjective, etc.) to each word in a sentence. This information is crucial for parsing because it helps disambiguate word roles and guides the parser in building correct syntactic structures. For example, knowing that 'run' is a verb vs. a noun changes how it relates to other words in the sentence.",
          es: "El etiquetado POS asigna etiquetas gramaticales (sustantivo, verbo, adjetivo, etc.) a cada palabra en una oración. Esta información es crucial para el análisis porque ayuda a desambiguar los roles de las palabras y guía al analizador en la construcción de estructuras sintácticas correctas. Por ejemplo, saber que 'correr' es un verbo vs. un sustantivo cambia cómo se relaciona con otras palabras en la oración.",
          de: "POS-Tagging weist grammatische Labels (Substantiv, Verb, Adjektiv, etc.) jedem Wort in einem Satz zu. Diese Information ist entscheidend für das Parsing weil sie hilft Wortrollen zu disambiguieren und den Parser beim Aufbau korrekter syntaktischer Strukturen leitet. Zum Beispiel zu wissen dass 'laufen' ein Verb vs. ein Substantiv ist ändert wie es sich zu anderen Wörtern im Satz verhält.",
          nl: "POS-tagging wijst grammaticale labels (zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord, etc.) toe aan elk woord in een zin. Deze informatie is cruciaal voor parsing omdat het helpt bij het disambigueren van woordrollen en de parser begeleidt bij het bouwen van correcte syntactische structuren. Bijvoorbeeld, weten dat 'loop' een werkwoord vs. een zelfstandig naamwoord is verandert hoe het zich verhoudt tot andere woorden in de zin."
        }
      },
      {
        question: {
          en: "What is syntactic ambiguity and how do parsers handle it?",
          es: "¿Qué es la ambigüedad sintáctica y cómo la manejan los analizadores?",
          de: "Was ist syntaktische Ambiguität und wie gehen Parser damit um?",
          nl: "Wat is syntactische ambiguïteit en hoe gaan parsers ermee om?"
        },
        options: [
          { en: "When a sentence has multiple valid grammatical interpretations; parsers use probability and context to choose the most likely parse", es: "Cuando una oración tiene múltiples interpretaciones gramaticales válidas; los analizadores usan probabilidad y contexto para elegir el análisis más probable", de: "Wenn ein Satz mehrere gültige grammatische Interpretationen hat; Parser verwenden Wahrscheinlichkeit und Kontext um das wahrscheinlichste Parse zu wählen", nl: "Wanneer een zin meerdere geldige grammaticale interpretaties heeft; parsers gebruiken waarschijnlijkheid en context om de meest waarschijnlijke parse te kiezen" },
          { en: "When words in a sentence are misspelled", es: "Cuando las palabras en una oración están mal escritas", de: "Wenn Wörter in einem Satz falsch geschrieben sind", nl: "Wanneer woorden in een zin verkeerd gespeld zijn" },
          { en: "When a sentence is too long to process", es: "Cuando una oración es demasiado larga para procesar", de: "Wenn ein Satz zu lang zum Verarbeiten ist", nl: "Wanneer een zin te lang is om te verwerken" },
          { en: "When a sentence contains foreign words", es: "Cuando una oración contiene palabras extranjeras", de: "Wenn ein Satz ausländische Wörter enthält", nl: "Wanneer een zin buitenlandse woorden bevat" }
        ],
        correct: 0,
        explanation: {
          en: "Syntactic ambiguity occurs when a sentence can be parsed in multiple grammatically correct ways, like 'I saw the man with the telescope' (who has the telescope?). Modern parsers use statistical models trained on large corpora to assign probabilities to different parse trees and select the most likely interpretation based on contextual patterns they've learned.",
          es: "La ambigüedad sintáctica ocurre cuando una oración puede ser analizada de múltiples maneras gramaticalmente correctas, como 'Vi al hombre con el telescopio' (¿quién tiene el telescopio?). Los analizadores modernos usan modelos estadísticos entrenados en grandes corpus para asignar probabilidades a diferentes árboles de análisis y seleccionar la interpretación más probable basada en patrones contextuales que han aprendido.",
          de: "Syntaktische Ambiguität tritt auf wenn ein Satz auf mehrere grammatisch korrekte Arten geparst werden kann, wie 'Ich sah den Mann mit dem Teleskop' (wer hat das Teleskop?). Moderne Parser verwenden statistische Modelle die auf großen Korpora trainiert wurden um verschiedenen Parse-Bäumen Wahrscheinlichkeiten zuzuweisen und die wahrscheinlichste Interpretation basierend auf kontextuellen Mustern die sie gelernt haben auszuwählen.",
          nl: "Syntactische ambiguïteit treedt op wanneer een zin op meerdere grammaticaal correcte manieren kan worden geparsed, zoals 'Ik zag de man met de telescoop' (wie heeft de telescoop?). Moderne parsers gebruiken statistische modellen getraind op grote corpora om waarschijnlijkheden toe te wijzen aan verschillende parse-bomen en de meest waarschijnlijke interpretatie te selecteren gebaseerd op contextuele patronen die ze hebben geleerd."
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
          { en: "Automatically translating text from one language to another using computational methods", es: "Traducir automáticamente texto de un idioma a otro usando métodos computacionales", de: "Automatisches Übersetzen von Text von einer Sprache in eine andere mit rechnerischen Methoden", nl: "Automatisch tekst vertalen van de ene taal naar de andere met behulp van computationele methoden" },
          { en: "Manual translation by human translators", es: "Traducción manual por traductores humanos", de: "Manuelle Übersetzung durch menschliche Übersetzer", nl: "Handmatige vertaling door menselijke vertalers" },
          { en: "Converting speech to text", es: "Convertir voz a texto", de: "Sprache in Text umwandeln", nl: "Spraak omzetten naar tekst" },
          { en: "Translating programming languages", es: "Traducir lenguajes de programación", de: "Programmiersprachen übersetzen", nl: "Programmeertalen vertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Machine translation is the computational process of automatically translating text or speech from one natural language to another, using techniques ranging from rule-based systems to neural networks.",
          es: "La traducción automática es el proceso computacional de traducir automáticamente texto o voz de un idioma natural a otro, usando técnicas que van desde sistemas basados en reglas hasta redes neuronales.",
          de: "Maschinelle Übersetzung ist der rechnerische Prozess der automatischen Übersetzung von Text oder Sprache von einer natürlichen Sprache in eine andere, mit Techniken von regelbasierten Systemen bis zu neuronalen Netzwerken.",
          nl: "Machinevertaling is het computationele proces van het automatisch vertalen van tekst of spraak van de ene natuurlijke taal naar de andere, met technieken variërend van regelgebaseerde systemen tot neurale netwerken."
        }
      },
      {
        question: {
          en: "What is sentiment analysis?",
          es: "¿Qué es el análisis de sentimientos?",
          de: "Was ist Sentiment-Analyse?",
          nl: "Wat is sentimentanalyse?"
        },
        options: [
          { en: "Determining the emotional tone or opinion expressed in text (positive, negative, neutral)", es: "Determinar el tono emocional u opinión expresada en texto (positivo, negativo, neutral)", de: "Bestimmen des emotionalen Tons oder der Meinung die in Text ausgedrückt wird (positiv, negativ, neutral)", nl: "Het bepalen van de emotionele toon of mening uitgedrukt in tekst (positief, negatief, neutraal)" },
          { en: "Analyzing the length of sentences", es: "Analizar la longitud de las oraciones", de: "Die Länge von Sätzen analysieren", nl: "De lengte van zinnen analyseren" },
          { en: "Counting word frequencies", es: "Contar frecuencias de palabras", de: "Worthäufigkeiten zählen", nl: "Woordfrequenties tellen" },
          { en: "Identifying grammatical errors", es: "Identificar errores gramaticales", de: "Grammatische Fehler identifizieren", nl: "Grammaticale fouten identificeren" }
        ],
        correct: 0,
        explanation: {
          en: "Sentiment analysis extracts subjective information from text, classifying the emotional polarity and intensity of opinions, feelings, and attitudes expressed by the author.",
          es: "El análisis de sentimientos extrae información subjetiva del texto, clasificando la polaridad emocional e intensidad de opiniones, sentimientos y actitudes expresadas por el autor.",
          de: "Sentiment-Analyse extrahiert subjektive Informationen aus Text, klassifiziert die emotionale Polarität und Intensität von Meinungen, Gefühlen und Einstellungen die vom Autor ausgedrückt werden.",
          nl: "Sentimentanalyse extraheert subjectieve informatie uit tekst, classificeert de emotionele polariteit en intensiteit van meningen, gevoelens en attitudes uitgedrukt door de auteur."
        }
      },
      {
        question: {
          en: "What is the difference between rule-based and statistical machine translation?",
          es: "¿Cuál es la diferencia entre traducción automática basada en reglas y estadística?",
          de: "Was ist der Unterschied zwischen regelbasierter und statistischer maschineller Übersetzung?",
          nl: "Wat is het verschil tussen regelgebaseerde en statistische machinevertaling?"
        },
        options: [
          { en: "Rule-based uses linguistic rules and dictionaries, statistical learns from parallel corpora", es: "Basada en reglas usa reglas lingüísticas y diccionarios, estadística aprende de corpus paralelos", de: "Regelbasiert verwendet linguistische Regeln und Wörterbücher, statistisch lernt aus parallelen Korpora", nl: "Regelgebaseerd gebruikt linguïstische regels en woordenboeken, statistisch leert van parallelle corpora" },
          { en: "Rule-based is faster than statistical", es: "Basada en reglas es más rápida que estadística", de: "Regelbasiert ist schneller als statistisch", nl: "Regelgebaseerd is sneller dan statistisch" },
          { en: "Statistical only works with European languages", es: "Estadística solo funciona con idiomas europeos", de: "Statistisch funktioniert nur mit europäischen Sprachen", nl: "Statistisch werkt alleen met Europese talen" },
          { en: "Rule-based requires more computational power", es: "Basada en reglas requiere más poder computacional", de: "Regelbasiert benötigt mehr Rechenleistung", nl: "Regelgebaseerd vereist meer rekenkracht" }
        ],
        correct: 0,
        explanation: {
          en: "Rule-based MT relies on manually crafted linguistic rules, grammars, and bilingual dictionaries. Statistical MT learns translation patterns automatically from large parallel corpora, using probabilistic models to find the most likely translation.",
          es: "La TA basada en reglas depende de reglas lingüísticas creadas manualmente, gramáticas y diccionarios bilingües. La TA estadística aprende patrones de traducción automáticamente de grandes corpus paralelos, usando modelos probabilísticos para encontrar la traducción más probable.",
          de: "Regelbasierte MÜ verlässt sich auf manuell erstellte linguistische Regeln, Grammatiken und zweisprachige Wörterbücher. Statistische MÜ lernt Übersetzungsmuster automatisch aus großen parallelen Korpora, verwendet probabilistische Modelle um die wahrscheinlichste Übersetzung zu finden.",
          nl: "Regelgebaseerde MV vertrouwt op handmatig vervaardigde linguïstische regels, grammatica's en tweetalige woordenboeken. Statistische MV leert vertaalpatronen automatisch uit grote parallelle corpora, gebruikt probabilistische modellen om de meest waarschijnlijke vertaling te vinden."
        }
      },
      {
        question: {
          en: "What are n-gram models used for in machine translation?",
          es: "¿Para qué se usan los modelos de n-gramas en traducción automática?",
          de: "Wofür werden N-Gramm-Modelle in der maschinellen Übersetzung verwendet?",
          nl: "Waarvoor worden n-gram modellen gebruikt in machinevertaling?"
        },
        options: [
          { en: "Language modeling to ensure fluent and grammatical target language output", es: "Modelado de lenguaje para asegurar salida fluida y gramatical en el idioma objetivo", de: "Sprachmodellierung um flüssige und grammatische Ausgabe in der Zielsprache sicherzustellen", nl: "Taalmodellering om vloeiende en grammaticale output in de doeltaal te verzekeren" },
          { en: "Counting words in the source text", es: "Contar palabras en el texto fuente", de: "Wörter im Quelltext zählen", nl: "Woorden tellen in de brontekst" },
          { en: "Identifying the source language", es: "Identificar el idioma fuente", de: "Die Quellsprache identifizieren", nl: "De brontaal identificeren" },
          { en: "Compressing the translation data", es: "Comprimir los datos de traducción", de: "Die Übersetzungsdaten komprimieren", nl: "De vertaalgegevens comprimeren" }
        ],
        correct: 0,
        explanation: {
          en: "N-gram language models in machine translation help evaluate the fluency of candidate translations by assigning probabilities to word sequences, ensuring that the output sounds natural in the target language.",
          es: "Los modelos de lenguaje de n-gramas en traducción automática ayudan a evaluar la fluidez de traducciones candidatas asignando probabilidades a secuencias de palabras, asegurando que la salida suene natural en el idioma objetivo.",
          de: "N-Gramm-Sprachmodelle in der maschinellen Übersetzung helfen die Flüssigkeit von Kandidatenübersetzungen zu bewerten durch Zuweisen von Wahrscheinlichkeiten zu Wortsequenzen, stellen sicher dass die Ausgabe in der Zielsprache natürlich klingt.",
          nl: "N-gram taalmodellen in machinevertaling helpen de vloeiendheid van kandidaatvertalingen te evalueren door waarschijnlijkheden toe te wijzen aan woordsequenties, zorgen ervoor dat de output natuurlijk klinkt in de doeltaal."
        }
      },
      {
        question: {
          en: "What is the BLEU score in machine translation evaluation?",
          es: "¿Qué es la puntuación BLEU en evaluación de traducción automática?",
          de: "Was ist der BLEU-Score in der Bewertung maschineller Übersetzung?",
          nl: "Wat is de BLEU score in machinevertaling evaluatie?"
        },
        options: [
          { en: "A metric measuring n-gram overlap between machine translations and human reference translations", es: "Una métrica que mide la superposición de n-gramas entre traducciones automáticas y traducciones de referencia humanas", de: "Eine Metrik die N-Gramm-Überlappung zwischen maschinellen Übersetzungen und menschlichen Referenzübersetzungen misst", nl: "Een metriek die n-gram overlap meet tussen machinevertaling en menselijke referentievertalingen" },
          { en: "A measure of translation speed", es: "Una medida de velocidad de traducción", de: "Ein Maß für Übersetzungsgeschwindigkeit", nl: "Een maat voor vertaalsnelheid" },
          { en: "The number of languages supported", es: "El número de idiomas soportados", de: "Die Anzahl unterstützter Sprachen", nl: "Het aantal ondersteunde talen" },
          { en: "A rating of translator expertise", es: "Una calificación de experiencia del traductor", de: "Eine Bewertung der Übersetzerexpertise", nl: "Een beoordeling van vertaalexpertise" }
        ],
        correct: 0,
        explanation: {
          en: "BLEU (Bilingual Evaluation Understudy) measures translation quality by comparing n-gram precision between machine output and reference translations, with higher scores indicating better quality.",
          es: "BLEU (Bilingual Evaluation Understudy) mide la calidad de traducción comparando precisión de n-gramas entre salida automática y traducciones de referencia, con puntuaciones más altas indicando mejor calidad.",
          de: "BLEU (Bilingual Evaluation Understudy) misst Übersetzungsqualität durch Vergleich der N-Gramm-Präzision zwischen maschineller Ausgabe und Referenzübersetzungen, mit höheren Scores die bessere Qualität anzeigen.",
          nl: "BLEU (Bilingual Evaluation Understudy) meet vertaalkwaliteit door n-gram precisie te vergelijken tussen machine-output en referentievertalingen, met hogere scores die betere kwaliteit aangeven."
        }
      },
      {
        question: {
          en: "What is aspect-based sentiment analysis?",
          es: "¿Qué es el análisis de sentimientos basado en aspectos?",
          de: "Was ist aspektbasierte Sentiment-Analyse?",
          nl: "Wat is aspect-gebaseerde sentimentanalyse?"
        },
        options: [
          { en: "Analyzing sentiment towards specific features or aspects of an entity rather than overall sentiment", es: "Analizar sentimiento hacia características o aspectos específicos de una entidad en lugar del sentimiento general", de: "Sentiment gegenüber spezifischen Eigenschaften oder Aspekten einer Entität analysieren anstatt Gesamtsentiment", nl: "Sentiment analyseren naar specifieke kenmerken of aspecten van een entiteit in plaats van algemeen sentiment" },
          { en: "Analyzing sentiment in different time periods", es: "Analizar sentimiento en diferentes períodos de tiempo", de: "Sentiment in verschiedenen Zeitperioden analysieren", nl: "Sentiment analyseren in verschillende tijdsperioden" },
          { en: "Analyzing sentiment across multiple languages", es: "Analizar sentimiento en múltiples idiomas", de: "Sentiment über mehrere Sprachen analysieren", nl: "Sentiment analyseren over meerdere talen" },
          { en: "Analyzing sentiment of different user groups", es: "Analizar sentimiento de diferentes grupos de usuarios", de: "Sentiment verschiedener Benutzergruppen analysieren", nl: "Sentiment van verschillende gebruikersgroepen analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "Aspect-based sentiment analysis identifies specific features mentioned in text and determines sentiment towards each aspect separately, providing more granular insights than document-level sentiment.",
          es: "El análisis de sentimientos basado en aspectos identifica características específicas mencionadas en texto y determina sentimiento hacia cada aspecto por separado, proporcionando insights más granulares que sentimiento a nivel de documento.",
          de: "Aspektbasierte Sentiment-Analyse identifiziert spezifische Eigenschaften die in Text erwähnt werden und bestimmt Sentiment gegenüber jedem Aspekt separat, bietet granularere Einblicke als Sentiment auf Dokumentebene.",
          nl: "Aspect-gebaseerde sentimentanalyse identificeert specifieke kenmerken genoemd in tekst en bepaalt sentiment naar elk aspect afzonderlijk, biedt meer gedetailleerde inzichten dan sentiment op documentniveau."
        }
      },
      {
        question: {
          en: "What is lexicon-based sentiment analysis?",
          es: "¿Qué es el análisis de sentimientos basado en léxico?",
          de: "Was ist lexikon-basierte Sentiment-Analyse?",
          nl: "Wat is lexicon-gebaseerde sentimentanalyse?"
        },
        options: [
          { en: "Using predefined dictionaries of words with sentiment scores to calculate overall text sentiment", es: "Usar diccionarios predefinidos de palabras con puntuaciones de sentimiento para calcular sentimiento general del texto", de: "Verwendung vordefinierter Wörterbücher von Wörtern mit Sentiment-Scores um Gesamtsentiment des Textes zu berechnen", nl: "Het gebruik van voorgedefinieerde woordenboeken van woorden met sentimentscores om het algemene tekstsentiment te berekenen" },
          { en: "Building vocabularies from training data", es: "Construir vocabularios de datos de entrenamiento", de: "Vokabulare aus Trainingsdaten aufbauen", nl: "Vocabulaires bouwen uit trainingsgegevens" },
          { en: "Using only verbs to determine sentiment", es: "Usar solo verbos para determinar sentimiento", de: "Nur Verben verwenden um Sentiment zu bestimmen", nl: "Alleen werkwoorden gebruiken om sentiment te bepalen" },
          { en: "Analyzing sentence structure for sentiment", es: "Analizar estructura de oraciones para sentimiento", de: "Satzstruktur für Sentiment analysieren", nl: "Zinsstructuur analyseren voor sentiment" }
        ],
        correct: 0,
        explanation: {
          en: "Lexicon-based approaches use sentiment dictionaries (like SentiWordNet, VADER) where words are pre-assigned sentiment scores, then aggregate these scores to determine overall text polarity.",
          es: "Los enfoques basados en léxico usan diccionarios de sentimientos (como SentiWordNet, VADER) donde las palabras tienen puntuaciones de sentimiento preasignadas, luego agregan estas puntuaciones para determinar polaridad general del texto.",
          de: "Lexikon-basierte Ansätze verwenden Sentiment-Wörterbücher (wie SentiWordNet, VADER) wo Wörter vorab zugewiesene Sentiment-Scores haben, dann aggregieren diese Scores um Gesamtpolarität des Textes zu bestimmen.",
          nl: "Lexicon-gebaseerde benaderingen gebruiken sentimentwoordenboeken (zoals SentiWordNet, VADER) waarbij woorden vooraf toegewezen sentimentscores hebben, vervolgens aggregeren deze scores om de algemene tekstpolariteit te bepalen."
        }
      },
      {
        question: {
          en: "What is the attention mechanism in neural machine translation?",
          es: "¿Qué es el mecanismo de atención en traducción automática neuronal?",
          de: "Was ist der Aufmerksamkeitsmechanismus in neuronaler maschineller Übersetzung?",
          nl: "Wat is het aandachtmechanisme in neurale machinevertaling?"
        },
        options: [
          { en: "A mechanism allowing the decoder to focus on relevant parts of the source sequence when generating each target word", es: "Un mecanismo que permite al decodificador enfocarse en partes relevantes de la secuencia fuente al generar cada palabra objetivo", de: "Ein Mechanismus der dem Decoder ermöglicht sich auf relevante Teile der Quellsequenz zu konzentrieren beim Generieren jedes Zielworts", nl: "Een mechanisme dat de decoder toestaat zich te richten op relevante delen van de bronsequentie bij het genereren van elk doelwoord" },
          { en: "A method for faster training of neural networks", es: "Un método para entrenamiento más rápido de redes neuronales", de: "Eine Methode für schnelleres Training neuronaler Netzwerke", nl: "Een methode voor snellere training van neurale netwerken" },
          { en: "A technique for reducing model size", es: "Una técnica para reducir el tamaño del modelo", de: "Eine Technik zur Reduzierung der Modellgröße", nl: "Een techniek voor het verkleinen van modelgrootte" },
          { en: "A way to prevent overfitting", es: "Una forma de prevenir sobreajuste", de: "Ein Weg Overfitting zu verhindern", nl: "Een manier om overfitting te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms solve the bottleneck problem in sequence-to-sequence models by allowing the decoder to access all encoder hidden states, not just the final one, focusing on relevant source positions for each target word.",
          es: "Los mecanismos de atención resuelven el problema de cuello de botella en modelos secuencia-a-secuencia permitiendo al decodificador acceder a todos los estados ocultos del codificador, no solo el final, enfocándose en posiciones fuente relevantes para cada palabra objetivo.",
          de: "Aufmerksamkeitsmechanismen lösen das Flaschenhals-Problem in Sequenz-zu-Sequenz-Modellen durch Ermöglichen des Decoders auf alle Encoder-versteckten Zustände zuzugreifen, nicht nur den letzten, konzentrieren sich auf relevante Quellpositionen für jedes Zielwort.",
          nl: "Aandachtmechanismen lossen het knelpuntprobleem in sequentie-naar-sequentie modellen op door de decoder toegang te geven tot alle encoder verborgen toestanden, niet alleen de laatste, richtend op relevante bronposities voor elk doelwoord."
        }
      },
      {
        question: {
          en: "What is emotion detection and how does it differ from sentiment analysis?",
          es: "¿Qué es la detección de emociones y cómo difiere del análisis de sentimientos?",
          de: "Was ist Emotionserkennung und wie unterscheidet sie sich von Sentiment-Analyse?",
          nl: "Wat is emotiedetectie en hoe verschilt het van sentimentanalyse?"
        },
        options: [
          { en: "Emotion detection identifies specific emotions like joy, anger, fear; sentiment analysis determines positive/negative polarity", es: "La detección de emociones identifica emociones específicas como alegría, ira, miedo; el análisis de sentimientos determina polaridad positiva/negativa", de: "Emotionserkennung identifiziert spezifische Emotionen wie Freude, Wut, Angst; Sentiment-Analyse bestimmt positive/negative Polarität", nl: "Emotiedetectie identificeert specifieke emoties zoals vreugde, woede, angst; sentimentanalyse bepaalt positieve/negatieve polariteit" },
          { en: "Emotion detection is faster than sentiment analysis", es: "La detección de emociones es más rápida que el análisis de sentimientos", de: "Emotionserkennung ist schneller als Sentiment-Analyse", nl: "Emotiedetectie is sneller dan sentimentanalyse" },
          { en: "Emotion detection only works with spoken language", es: "La detección de emociones solo funciona con lenguaje hablado", de: "Emotionserkennung funktioniert nur mit gesprochener Sprache", nl: "Emotiedetectie werkt alleen met gesproken taal" },
          { en: "They are the same thing with different names", es: "Son la misma cosa con nombres diferentes", de: "Sie sind dasselbe mit verschiedenen Namen", nl: "Het zijn hetzelfde met verschillende namen" }
        ],
        correct: 0,
        explanation: {
          en: "Emotion detection identifies specific emotional states (happiness, sadness, anger, fear, etc.) using more granular categories, while sentiment analysis typically focuses on broader polarity (positive, negative, neutral).",
          es: "La detección de emociones identifica estados emocionales específicos (felicidad, tristeza, ira, miedo, etc.) usando categorías más granulares, mientras el análisis de sentimientos típicamente se enfoca en polaridad más amplia (positivo, negativo, neutral).",
          de: "Emotionserkennung identifiziert spezifische emotionale Zustände (Glück, Traurigkeit, Wut, Angst, etc.) mit granulareren Kategorien, während Sentiment-Analyse sich typischerweise auf breitere Polarität konzentriert (positiv, negativ, neutral).",
          nl: "Emotiedetectie identificeert specifieke emotionele toestanden (geluk, verdriet, woede, angst, enz.) met meer gedetailleerde categorieën, terwijl sentimentanalyse zich typisch richt op bredere polariteit (positief, negatief, neutraal)."
        }
      },
      {
        question: {
          en: "What is domain adaptation in NLP?",
          es: "¿Qué es la adaptación de dominio en PLN?",
          de: "Was ist Domänenanpassung in NLP?",
          nl: "Wat is domeinaanpassing in NLP?"
        },
        options: [
          { en: "Adapting models trained on one domain to perform well on a different but related domain", es: "Adaptar modelos entrenados en un dominio para funcionar bien en un dominio diferente pero relacionado", de: "Modelle die auf einer Domäne trainiert wurden anpassen um gut auf einer anderen aber verwandten Domäne zu funktionieren", nl: "Modellen aangepast die getraind zijn op één domein om goed te presteren op een ander maar gerelateerd domein" },
          { en: "Converting models to work on different computer architectures", es: "Convertir modelos para trabajar en diferentes arquitecturas de computadora", de: "Modelle konvertieren um auf verschiedenen Computerarchitekturen zu funktionieren", nl: "Modellen converteren om te werken op verschillende computerarchitecturen" },
          { en: "Translating model names to different languages", es: "Traducir nombres de modelos a diferentes idiomas", de: "Modellnamen in verschiedene Sprachen übersetzen", nl: "Modelnamen vertalen naar verschillende talen" },
          { en: "Adapting models to run faster", es: "Adaptar modelos para funcionar más rápido", de: "Modelle anpassen um schneller zu laufen", nl: "Modellen aanpassen om sneller te draaien" }
        ],
        correct: 0,
        explanation: {
          en: "Domain adaptation addresses the challenge when models trained on one domain (e.g., news text) need to work on another domain (e.g., medical text) where vocabulary and language patterns differ.",
          es: "La adaptación de dominio aborda el desafío cuando modelos entrenados en un dominio (ej., texto de noticias) necesitan funcionar en otro dominio (ej., texto médico) donde vocabulario y patrones de lenguaje difieren.",
          de: "Domänenanpassung adressiert die Herausforderung wenn Modelle die auf einer Domäne trainiert wurden (z.B. Nachrichtentext) auf einer anderen Domäne funktionieren müssen (z.B. medizinischer Text) wo Vokabular und Sprachmuster sich unterscheiden.",
          nl: "Domeinaanpassing pakt de uitdaging aan wanneer modellen getraind op één domein (bijv. nieuwstekst) moeten werken op een ander domein (bijv. medische tekst) waar vocabulaire en taalpatronen verschillen."
        }
      },
      {
        question: {
          en: "What is cross-lingual sentiment analysis?",
          es: "¿Qué es el análisis de sentimientos entre idiomas?",
          de: "Was ist mehrsprachige Sentiment-Analyse?",
          nl: "Wat is meertalige sentimentanalyse?"
        },
        options: [
          { en: "Analyzing sentiment in one language using models trained on a different language", es: "Analizar sentimiento en un idioma usando modelos entrenados en un idioma diferente", de: "Sentiment in einer Sprache analysieren mit Modellen die auf einer anderen Sprache trainiert wurden", nl: "Sentiment analyseren in één taal met modellen getraind op een andere taal" },
          { en: "Comparing sentiment across different time periods", es: "Comparar sentimiento en diferentes períodos de tiempo", de: "Sentiment über verschiedene Zeitperioden vergleichen", nl: "Sentiment vergelijken over verschillende tijdsperioden" },
          { en: "Analyzing sentiment in multiple documents simultaneously", es: "Analizar sentimiento en múltiples documentos simultáneamente", de: "Sentiment in mehreren Dokumenten gleichzeitig analysieren", nl: "Sentiment in meerdere documenten tegelijkertijd analyseren" },
          { en: "Translating sentiment labels between languages", es: "Traducir etiquetas de sentimiento entre idiomas", de: "Sentiment-Labels zwischen Sprachen übersetzen", nl: "Sentimentlabels tussen talen vertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-lingual sentiment analysis leverages sentiment models trained on resource-rich languages (like English) to analyze sentiment in resource-poor languages where training data is limited.",
          es: "El análisis de sentimientos entre idiomas aprovecha modelos de sentimiento entrenados en idiomas con muchos recursos (como inglés) para analizar sentimiento en idiomas con pocos recursos donde los datos de entrenamiento son limitados.",
          de: "Mehrsprachige Sentiment-Analyse nutzt Sentiment-Modelle die auf ressourcenreichen Sprachen trainiert wurden (wie Englisch) um Sentiment in ressourcenarmen Sprachen zu analysieren wo Trainingsdaten begrenzt sind.",
          nl: "Meertalige sentimentanalyse benut sentimentmodellen getraind op hulpbronrijke talen (zoals Engels) om sentiment te analyseren in hulpbronarme talen waar trainingsgegevens beperkt zijn."
        }
      },
      {
        question: {
          en: "What is transfer learning in NLP?",
          es: "¿Qué es el aprendizaje por transferencia en PLN?",
          de: "Was ist Transfer Learning in NLP?",
          nl: "Wat is transfer learning in NLP?"
        },
        options: [
          { en: "Using knowledge from pre-trained models on large datasets to improve performance on specific tasks with limited data", es: "Usar conocimiento de modelos pre-entrenados en grandes conjuntos de datos para mejorar rendimiento en tareas específicas con datos limitados", de: "Wissen aus vortrainierten Modellen auf großen Datensätzen verwenden um Leistung bei spezifischen Aufgaben mit begrenzten Daten zu verbessern", nl: "Kennis van voorgetrainde modellen op grote datasets gebruiken om prestaties te verbeteren op specifieke taken met beperkte gegevens" },
          { en: "Moving models from one computer to another", es: "Mover modelos de una computadora a otra", de: "Modelle von einem Computer zu einem anderen bewegen", nl: "Modellen verplaatsen van de ene computer naar de andere" },
          { en: "Learning multiple languages simultaneously", es: "Aprender múltiples idiomas simultáneamente", de: "Mehrere Sprachen gleichzeitig lernen", nl: "Meerdere talen tegelijkertijd leren" },
          { en: "Transferring data between different file formats", es: "Transferir datos entre diferentes formatos de archivo", de: "Daten zwischen verschiedenen Dateiformaten übertragen", nl: "Gegevens overdragen tussen verschillende bestandsformaten" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning leverages representations learned from large-scale pretraining (like language modeling) and fine-tunes them for specific downstream tasks, achieving better performance with less task-specific data.",
          es: "El aprendizaje por transferencia aprovecha representaciones aprendidas de pre-entrenamiento a gran escala (como modelado de lenguaje) y las ajusta finamente para tareas específicas posteriores, logrando mejor rendimiento con menos datos específicos de la tarea.",
          de: "Transfer Learning nutzt Darstellungen die aus großskaligem Vortraining gelernt wurden (wie Sprachmodellierung) und feinabstimmt sie für spezifische nachgelagerte Aufgaben, erreicht bessere Leistung mit weniger aufgabenspezifischen Daten.",
          nl: "Transfer learning benut representaties geleerd van grootschalige pretraining (zoals taalmodellering) en fijnafstemming voor specifieke downstream taken, behaalt betere prestaties met minder taakspecifieke gegevens."
        }
      },
      {
        question: {
          en: "What is the challenge of data sparsity in NLP?",
          es: "¿Cuál es el desafío de la escasez de datos en PLN?",
          de: "Was ist die Herausforderung der Datenspärlichkeit in NLP?",
          nl: "Wat is de uitdaging van gegevensspaarheid in NLP?"
        },
        options: [
          { en: "Many possible word combinations never appear in training data, causing zero probability problems", es: "Muchas combinaciones posibles de palabras nunca aparecen en datos de entrenamiento, causando problemas de probabilidad cero", de: "Viele mögliche Wortkombinationen erscheinen nie in Trainingsdaten, verursachen Null-Wahrscheinlichkeitsprobleme", nl: "Veel mogelijke woordcombinaties komen nooit voor in trainingsgegevens, veroorzaken nul waarschijnlijkheidsproblemen" },
          { en: "Training data takes up too much storage space", es: "Los datos de entrenamiento ocupan demasiado espacio de almacenamiento", de: "Trainingsdaten belegen zu viel Speicherplatz", nl: "Trainingsgegevens nemen te veel opslagruimte in beslag" },
          { en: "Data processing is too slow", es: "El procesamiento de datos es demasiado lento", de: "Datenverarbeitung ist zu langsam", nl: "Gegevensverwerking is te langzaam" },
          { en: "There are too many features to process", es: "Hay demasiadas características para procesar", de: "Es gibt zu viele Features zum Verarbeiten", nl: "Er zijn te veel kenmerken om te verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Data sparsity occurs because natural language has enormous vocabulary and infinite possible combinations, making it impossible to observe all valid n-grams in any finite training corpus, requiring smoothing techniques.",
          es: "La escasez de datos ocurre porque el lenguaje natural tiene vocabulario enorme y combinaciones posibles infinitas, haciendo imposible observar todos los n-gramas válidos en cualquier corpus de entrenamiento finito, requiriendo técnicas de suavizado.",
          de: "Datenspärlichkeit tritt auf weil natürliche Sprache enormes Vokabular und unendliche mögliche Kombinationen hat, macht es unmöglich alle gültigen N-Gramme in jedem endlichen Trainingskorpus zu beobachten, erfordert Glättungstechniken.",
          nl: "Gegevensspaarheid treedt op omdat natuurlijke taal een enorm vocabulaire heeft en oneindige mogelijke combinaties, waardoor het onmogelijk is om alle geldige n-grammen te observeren in elk eindig trainingscorpus, vereist smoothing technieken."
        }
      },
      {
        question: {
          en: "What is word sense disambiguation (WSD)?",
          es: "¿Qué es la desambiguación de sentido de palabras (WSD)?",
          de: "Was ist Wortsinndisambiguierung (WSD)?",
          nl: "Wat is woordbetekenis disambiguatie (WSD)?"
        },
        options: [
          { en: "Determining which meaning of a polysemous word is intended in a given context", es: "Determinar qué significado de una palabra polisémica se pretende en un contexto dado", de: "Bestimmen welche Bedeutung eines polysemen Wortes in einem gegebenen Kontext beabsichtigt ist", nl: "Bepalen welke betekenis van een polyseem woord bedoeld is in een gegeven context" },
          { en: "Finding misspelled words in text", es: "Encontrar palabras mal escritas en texto", de: "Falsch geschriebene Wörter in Text finden", nl: "Verkeerd gespelde woorden vinden in tekst" },
          { en: "Translating words between languages", es: "Traducir palabras entre idiomas", de: "Wörter zwischen Sprachen übersetzen", nl: "Woorden vertalen tussen talen" },
          { en: "Identifying the grammatical category of words", es: "Identificar la categoría gramatical de palabras", de: "Die grammatische Kategorie von Wörtern identifizieren", nl: "De grammaticale categorie van woorden identificeren" }
        ],
        correct: 0,
        explanation: {
          en: "WSD resolves lexical ambiguity by identifying the correct sense of words that have multiple meanings, like 'bank' (financial institution vs. river bank) based on contextual clues.",
          es: "WSD resuelve ambigüedad léxica identificando el sentido correcto de palabras que tienen múltiples significados, como 'banco' (institución financiera vs. orilla del río) basándose en pistas contextuales.",
          de: "WSD löst lexikalische Ambiguität durch Identifizierung des korrekten Sinns von Wörtern die mehrere Bedeutungen haben, wie 'Bank' (Finanzinstitut vs. Flussufer) basierend auf kontextuellen Hinweisen.",
          nl: "WSD lost lexicale ambiguïteit op door de juiste betekenis te identificeren van woorden die meerdere betekenissen hebben, zoals 'bank' (financiële instelling vs. rivieroever) gebaseerd op contextuele aanwijzingen."
        }
      },
      {
        question: {
          en: "What is neural machine translation (NMT) and how does it differ from statistical machine translation?",
          es: "¿Qué es la traducción automática neuronal (NMT) y cómo difiere de la traducción automática estadística?",
          de: "Was ist neuronale maschinelle Übersetzung (NMT) und wie unterscheidet sie sich von statistischer maschineller Übersetzung?",
          nl: "Wat is neurale machinevertaling (NMT) en hoe verschilt het van statistische machinevertaling?"
        },
        options: [
          { en: "NMT uses end-to-end neural networks to learn translation directly, while SMT uses separate models for alignment, translation, and language modeling", es: "NMT usa redes neuronales de extremo a extremo para aprender traducción directamente, mientras SMT usa modelos separados para alineación, traducción y modelado de lenguaje", de: "NMT verwendet End-to-End neuronale Netzwerke um Übersetzung direkt zu lernen, während SMT separate Modelle für Ausrichtung, Übersetzung und Sprachmodellierung verwendet", nl: "NMT gebruikt end-to-end neurale netwerken om vertaling direct te leren, terwijl SMT afzonderlijke modellen gebruikt voor uitlijning, vertaling en taalmodellering" },
          { en: "NMT is faster than SMT in training", es: "NMT es más rápido que SMT en entrenamiento", de: "NMT ist schneller als SMT im Training", nl: "NMT is sneller dan SMT in training" },
          { en: "SMT produces more accurate translations", es: "SMT produce traducciones más precisas", de: "SMT produziert genauere Übersetzungen", nl: "SMT produceert nauwkeurigere vertalingen" },
          { en: "NMT only works with related languages", es: "NMT solo funciona con idiomas relacionados", de: "NMT funktioniert nur mit verwandten Sprachen", nl: "NMT werkt alleen met verwante talen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural machine translation uses deep learning to learn translation patterns end-to-end, typically achieving better fluency and handling long-range dependencies better than phrase-based statistical approaches.",
          es: "La traducción automática neuronal usa aprendizaje profundo para aprender patrones de traducción de extremo a extremo, típicamente logrando mejor fluidez y manejando dependencias de largo alcance mejor que enfoques estadísticos basados en frases.",
          de: "Neuronale maschinelle Übersetzung verwendet Deep Learning um Übersetzungsmuster End-to-End zu lernen, erreicht typischerweise bessere Flüssigkeit und handhabt weitreichende Abhängigkeiten besser als phrasenbasierte statistische Ansätze.",
          nl: "Neurale machinevertaling gebruikt deep learning om vertaalpatronen end-to-end te leren, behaalt typisch betere vloeiendheid en behandelt lange-afstand afhankelijkheden beter dan frase-gebaseerde statistische benaderingen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
