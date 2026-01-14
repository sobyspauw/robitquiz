// Natuurlijke taalverwerking Quiz - Level 5
(function() {
  const level5 = {
    name: {
          "en": "Machine Translation & Sentiment Analysis",
          "es": "Traducción Automática y Análisis de Sentimientos",
          "de": "Maschinelle Übersetzung & Sentiment-Analyse",
          "nl": "Machinevertaling & Sentimentanalyse"
    },
    questions: [
      {
        question: {
                  "en": "What is the primary purpose of syntactic parsing in NLP?",
                  "es": "¿Cuál es el propósito principal del análisis sintáctico en PLN?",
                  "de": "Was ist der Hauptzweck des syntaktischen Parsings in NLP?",
                  "nl": "Wat is het primaire doel van syntactische parsing in NLP?"
        },
        options: [
        {
                  "en": "To translate text from one language to another",
                  "es": "Traducir texto de un idioma a otro",
                  "de": "Text von einer Sprache in eine andere zu übersetzen",
                  "nl": "Tekst van de ene taal naar de andere vertalen"
        },
        {
                  "en": "To analyze the grammatical structure and relationships between words in a sentence",
                  "es": "Analizar la estructura gramatical y las relaciones entre palabras en una oración",
                  "de": "Die grammatische Struktur und Beziehungen zwischen Wörtern in einem Satz zu analysieren",
                  "nl": "De grammaticale structuur en relaties tussen woorden in een zin analyseren"
        },
        {
                  "en": "To count word frequencies in documents",
                  "es": "Contar frecuencias de palabras en documentos",
                  "de": "Worthäufigkeiten in Dokumenten zu zählen",
                  "nl": "Woordfrequenties in documenten tellen"
        },
        {
                  "en": "To identify the emotional sentiment of text",
                  "es": "Identificar el sentimiento emocional del texto",
                  "de": "Die emotionale Stimmung des Textes zu identifizieren",
                  "nl": "Het emotionele sentiment van tekst identificeren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Syntactic parsing analyzes the grammatical structure of sentences, identifying how words relate to each other according to grammar rules. It builds parse trees that show the hierarchical structure of sentences, which is crucial for understanding meaning and enabling more advanced NLP tasks.",
                  "es": "El análisis sintáctico analiza la estructura gramatical de las oraciones, identificando cómo las palabras se relacionan entre sí según las reglas gramaticales. Construye árboles de análisis que muestran la estructura jerárquica de las oraciones, lo cual es crucial para entender el significado y permitir tareas más avanzadas de PLN.",
                  "de": "Syntaktisches Parsing analysiert die grammatische Struktur von Sätzen und identifiziert wie Wörter sich zueinander nach Grammatikregeln verhalten. Es erstellt Parse-Bäume die die hierarchische Struktur von Sätzen zeigen, was entscheidend für das Verstehen der Bedeutung und für erweiterte NLP-Aufgaben ist.",
                  "nl": "Syntactische parsing analyseert de grammaticale structuur van zinnen, waarbij wordt geïdentificeerd hoe woorden zich tot elkaar verhouden volgens grammaticaregels. Het bouwt parse-bomen die de hiërarchische structuur van zinnen tonen, wat cruciaal is voor het begrijpen van betekenis en het mogelijk maken van meer geavanceerde NLP-taken."
        }
      },
      {
        question: {
                  "en": "In dependency parsing, what does a 'head' represent?",
                  "es": "En el análisis de dependencias, ¿qué representa una 'cabeza'?",
                  "de": "Was repräsentiert ein 'Kopf' beim Dependency Parsing?",
                  "nl": "Wat stelt een 'hoofd' voor in dependency parsing?"
        },
        options: [
        {
                  "en": "The first word in a sentence",
                  "es": "La primera palabra en una oración",
                  "de": "Das erste Wort in einem Satz",
                  "nl": "Het eerste woord in een zin"
        },
        {
                  "en": "The most frequent word in the text",
                  "es": "La palabra más frecuente en el texto",
                  "de": "Das häufigste Wort im Text",
                  "nl": "Het meest voorkomende woord in de tekst"
        },
        {
                  "en": "The word that other words depend on grammatically",
                  "es": "La palabra de la que otras palabras dependen gramaticalmente",
                  "de": "Das Wort von dem andere Wörter grammatisch abhängen",
                  "nl": "Het woord waarvan andere woorden grammaticaal afhankelijk zijn"
        },
        {
                  "en": "The longest word in the sentence",
                  "es": "La palabra más larga en la oración",
                  "de": "Das längste Wort im Satz",
                  "nl": "Het langste woord in de zin"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "In dependency parsing, a 'head' is the word that governs other words in the sentence. Each dependent word has a grammatical relationship with its head. For example, in 'The cat sleeps', 'sleeps' is the head that 'cat' depends on as its subject, creating a dependency relation.",
                  "es": "En el análisis de dependencias, una 'cabeza' es la palabra que gobierna otras palabras en la oración. Cada palabra dependiente tiene una relación gramatical con su cabeza. Por ejemplo, en 'El gato duerme', 'duerme' es la cabeza de la que 'gato' depende como su sujeto, creando una relación de dependencia.",
                  "de": "Beim Dependency Parsing ist ein 'Kopf' das Wort das andere Wörter im Satz regiert. Jedes abhängige Wort hat eine grammatische Beziehung zu seinem Kopf. Zum Beispiel in 'Die Katze schläft' ist 'schläft' der Kopf von dem 'Katze' als Subjekt abhängt, wodurch eine Abhängigkeitsrelation entsteht.",
                  "nl": "In dependency parsing is een 'hoofd' het woord dat andere woorden in de zin beheerst. Elk afhankelijk woord heeft een grammaticale relatie met zijn hoofd. Bijvoorbeeld, in 'De kat slaapt' is 'slaapt' het hoofd waarvan 'kat' afhankelijk is als onderwerp, wat een afhankelijkheidsrelatie creëert."
        }
      },
      {
        question: {
                  "en": "What is the difference between constituency parsing and dependency parsing?",
                  "es": "¿Cuál es la diferencia entre el análisis de constituyentes y el análisis de dependencias?",
                  "de": "Was ist der Unterschied zwischen Constituency Parsing und Dependency Parsing?",
                  "nl": "Wat is het verschil tussen constituency parsing en dependency parsing?"
        },
        options: [
        {
                  "en": "Constituency parsing is faster than dependency parsing",
                  "es": "El análisis de constituyentes es más rápido que el análisis de dependencias",
                  "de": "Constituency Parsing ist schneller als Dependency Parsing",
                  "nl": "Constituency parsing is sneller dan dependency parsing"
        },
        {
                  "en": "There is no difference, they are the same technique",
                  "es": "No hay diferencia, son la misma técnica",
                  "de": "Es gibt keinen Unterschied, sie sind dieselbe Technik",
                  "nl": "Er is geen verschil, het zijn dezelfde technieken"
        },
        {
                  "en": "Constituency parsing only works with English, dependency parsing works with all languages",
                  "es": "El análisis de constituyentes solo funciona con inglés, el análisis de dependencias funciona con todos los idiomas",
                  "de": "Constituency Parsing funktioniert nur mit Englisch, Dependency Parsing funktioniert mit allen Sprachen",
                  "nl": "Constituency parsing werkt alleen met Engels, dependency parsing werkt met alle talen"
        },
        {
                  "en": "Constituency parsing creates hierarchical phrase structures, while dependency parsing shows direct word-to-word relationships",
                  "es": "El análisis de constituyentes crea estructuras jerárquicas de frases, mientras que el análisis de dependencias muestra relaciones directas palabra-palabra",
                  "de": "Constituency Parsing erstellt hierarchische Phrasenstrukturen, während Dependency Parsing direkte Wort-zu-Wort-Beziehungen zeigt",
                  "nl": "Constituency parsing creëert hiërarchische frasestructuren, terwijl dependency parsing directe woord-tot-woord relaties toont"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Constituency parsing breaks sentences into nested phrases (noun phrases, verb phrases, etc.) creating a tree structure with internal nodes representing phrases. Dependency parsing creates a more direct representation showing which words depend on which other words, with labeled arcs representing grammatical relationships like subject, object, or modifier.",
                  "es": "El análisis de constituyentes divide las oraciones en frases anidadas (frases nominales, frases verbales, etc.) creando una estructura de árbol con nodos internos que representan frases. El análisis de dependencias crea una representación más directa mostrando qué palabras dependen de qué otras palabras, con arcos etiquetados que representan relaciones gramaticales como sujeto, objeto o modificador.",
                  "de": "Constituency Parsing teilt Sätze in verschachtelte Phrasen (Nominalphrasen, Verbalphrasen, etc.) auf und erstellt eine Baumstruktur mit internen Knoten die Phrasen repräsentieren. Dependency Parsing erstellt eine direktere Darstellung die zeigt welche Wörter von welchen anderen Wörtern abhängen, mit beschrifteten Bögen die grammatische Beziehungen wie Subjekt, Objekt oder Modifikator repräsentieren.",
                  "nl": "Constituency parsing breekt zinnen op in geneste zinsdelen (naamwoordgroepen, werkwoordgroepen, etc.) en creëert een boomstructuur met interne knooppunten die zinsdelen vertegenwoordigen. Dependency parsing creëert een meer directe representatie die toont welke woorden afhankelijk zijn van welke andere woorden, met gelabelde bogen die grammaticale relaties zoals onderwerp, lijdend voorwerp of bepaling vertegenwoordigen."
        }
      },
      {
        question: {
                  "en": "What is Part-of-Speech (POS) tagging and why is it important for parsing?",
                  "es": "¿Qué es el etiquetado de partes del discurso (POS) y por qué es importante para el análisis?",
                  "de": "Was ist Part-of-Speech (POS) Tagging und warum ist es wichtig für das Parsing?",
                  "nl": "Wat is Part-of-Speech (POS) tagging en waarom is het belangrijk voor parsing?"
        },
        options: [
        {
                  "en": "Identifying the emotional tone of each word",
                  "es": "Identificar el tono emocional de cada palabra",
                  "de": "Den emotionalen Ton jedes Wortes identifizieren",
                  "nl": "De emotionele toon van elk woord identificeren"
        },
        {
                  "en": "Translating words to their base forms",
                  "es": "Traducir palabras a sus formas base",
                  "de": "Wörter in ihre Grundformen übersetzen",
                  "nl": "Woorden vertalen naar hun basisvormen"
        },
        {
                  "en": "Assigning grammatical categories to words, which provides essential information for understanding sentence structure",
                  "es": "Asignar categorías gramaticales a las palabras, lo que proporciona información esencial para entender la estructura de la oración",
                  "de": "Grammatische Kategorien zu Wörtern zuweisen, was wesentliche Informationen zum Verstehen der Satzstruktur liefert",
                  "nl": "Grammaticale categorieën toewijzen aan woorden, wat essentiële informatie verschaft voor het begrijpen van zinsstructuur"
        },
        {
                  "en": "Counting how many times each word appears",
                  "es": "Contar cuántas veces aparece cada palabra",
                  "de": "Zählen wie oft jedes Wort vorkommt",
                  "nl": "Tellen hoe vaak elk woord voorkomt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "POS tagging assigns grammatical labels (noun, verb, adjective, etc.) to each word in a sentence. This information is crucial for parsing because it helps disambiguate word roles and guides the parser in building correct syntactic structures. For example, knowing that 'run' is a verb vs. a noun changes how it relates to other words in the sentence.",
                  "es": "El etiquetado POS asigna etiquetas gramaticales (sustantivo, verbo, adjetivo, etc.) a cada palabra en una oración. Esta información es crucial para el análisis porque ayuda a desambiguar los roles de las palabras y guía al analizador en la construcción de estructuras sintácticas correctas. Por ejemplo, saber que 'correr' es un verbo vs. un sustantivo cambia cómo se relaciona con otras palabras en la oración.",
                  "de": "POS-Tagging weist grammatische Labels (Substantiv, Verb, Adjektiv, etc.) jedem Wort in einem Satz zu. Diese Information ist entscheidend für das Parsing weil sie hilft Wortrollen zu disambiguieren und den Parser beim Aufbau korrekter syntaktischer Strukturen leitet. Zum Beispiel zu wissen dass 'laufen' ein Verb vs. ein Substantiv ist ändert wie es sich zu anderen Wörtern im Satz verhält.",
                  "nl": "POS-tagging wijst grammaticale labels (zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord, etc.) toe aan elk woord in een zin. Deze informatie is cruciaal voor parsing omdat het helpt bij het disambigueren van woordrollen en de parser begeleidt bij het bouwen van correcte syntactische structuren. Bijvoorbeeld, weten dat 'loop' een werkwoord vs. een zelfstandig naamwoord is verandert hoe het zich verhoudt tot andere woorden in de zin."
        }
      },
      {
        question: {
                  "en": "What is syntactic ambiguity and how do parsers handle it?",
                  "es": "¿Qué es la ambigüedad sintáctica y cómo la manejan los analizadores?",
                  "de": "Was ist syntaktische Ambiguität und wie gehen Parser damit um?",
                  "nl": "Wat is syntactische ambiguïteit en hoe gaan parsers ermee om?"
        },
        options: [
        {
                  "en": "When a sentence is too long to process",
                  "es": "Cuando una oración es demasiado larga para procesar",
                  "de": "Wenn ein Satz zu lang zum Verarbeiten ist",
                  "nl": "Wanneer een zin te lang is om te verwerken"
        },
        {
                  "en": "When a sentence contains foreign words",
                  "es": "Cuando una oración contiene palabras extranjeras",
                  "de": "Wenn ein Satz ausländische Wörter enthält",
                  "nl": "Wanneer een zin buitenlandse woorden bevat"
        },
        {
                  "en": "When a sentence has multiple valid grammatical interpretations; parsers use probability and context to choose the most likely parse",
                  "es": "Cuando una oración tiene múltiples interpretaciones gramaticales válidas; los analizadores usan probabilidad y contexto para elegir el análisis más probable",
                  "de": "Wenn ein Satz mehrere gültige grammatische Interpretationen hat; Parser verwenden Wahrscheinlichkeit und Kontext um das wahrscheinlichste Parse zu wählen",
                  "nl": "Wanneer een zin meerdere geldige grammaticale interpretaties heeft; parsers gebruiken waarschijnlijkheid en context om de meest waarschijnlijke parse te kiezen"
        },
        {
                  "en": "When words in a sentence are misspelled",
                  "es": "Cuando las palabras en una oración están mal escritas",
                  "de": "Wenn Wörter in einem Satz falsch geschrieben sind",
                  "nl": "Wanneer woorden in een zin verkeerd gespeld zijn"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Syntactic ambiguity occurs when a sentence can be parsed in multiple grammatically correct ways, like 'I saw the man with the telescope' (who has the telescope?). Modern parsers use statistical models trained on large corpora to assign probabilities to different parse trees and select the most likely interpretation based on contextual patterns they've learned.",
                  "es": "La ambigüedad sintáctica ocurre cuando una oración puede ser analizada de múltiples maneras gramaticalmente correctas, como 'Vi al hombre con el telescopio' (¿quién tiene el telescopio?). Los analizadores modernos usan modelos estadísticos entrenados en grandes corpus para asignar probabilidades a diferentes árboles de análisis y seleccionar la interpretación más probable basada en patrones contextuales que han aprendido.",
                  "de": "Syntaktische Ambiguität tritt auf wenn ein Satz auf mehrere grammatisch korrekte Arten geparst werden kann, wie 'Ich sah den Mann mit dem Teleskop' (wer hat das Teleskop?). Moderne Parser verwenden statistische Modelle die auf großen Korpora trainiert wurden um verschiedenen Parse-Bäumen Wahrscheinlichkeiten zuzuweisen und die wahrscheinlichste Interpretation basierend auf kontextuellen Mustern die sie gelernt haben auszuwählen.",
                  "nl": "Syntactische ambiguïteit treedt op wanneer een zin op meerdere grammaticaal correcte manieren kan worden geparsed, zoals 'Ik zag de man met de telescoop' (wie heeft de telescoop?). Moderne parsers gebruiken statistische modellen getraind op grote corpora om waarschijnlijkheden toe te wijzen aan verschillende parse-bomen en de meest waarschijnlijke interpretatie te selecteren gebaseerd op contextuele patronen die ze hebben geleerd."
        }
      },
      {
        question: {
                  "en": "What is machine translation?",
                  "es": "¿Qué es la traducción automática?",
                  "de": "Was ist maschinelle Übersetzung?",
                  "nl": "Wat is machinevertaling?"
        },
        options: [
        {
                  "en": "Translating programming languages",
                  "es": "Traducir lenguajes de programación",
                  "de": "Programmiersprachen übersetzen",
                  "nl": "Programmeertalen vertalen"
        },
        {
                  "en": "Converting speech to text",
                  "es": "Convertir voz a texto",
                  "de": "Sprache in Text umwandeln",
                  "nl": "Spraak omzetten naar tekst"
        },
        {
                  "en": "Automatically translating text from one language to another using computational methods",
                  "es": "Traducir automáticamente texto de un idioma a otro usando métodos computacionales",
                  "de": "Automatisches Übersetzen von Text von einer Sprache in eine andere mit rechnerischen Methoden",
                  "nl": "Automatisch tekst vertalen van de ene taal naar de andere met behulp van computationele methoden"
        },
        {
                  "en": "Manual translation by human translators",
                  "es": "Traducción manual por traductores humanos",
                  "de": "Manuelle Übersetzung durch menschliche Übersetzer",
                  "nl": "Handmatige vertaling door menselijke vertalers"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Machine translation is the computational process of automatically translating text or speech from one natural language to another, using techniques ranging from rule-based systems to neural networks.",
                  "es": "La traducción automática es el proceso computacional de traducir automáticamente texto o voz de un idioma natural a otro, usando técnicas que van desde sistemas basados en reglas hasta redes neuronales.",
                  "de": "Maschinelle Übersetzung ist der rechnerische Prozess der automatischen Übersetzung von Text oder Sprache von einer natürlichen Sprache in eine andere, mit Techniken von regelbasierten Systemen bis zu neuronalen Netzwerken.",
                  "nl": "Machinevertaling is het computationele proces van het automatisch vertalen van tekst of spraak van de ene natuurlijke taal naar de andere, met technieken variërend van regelgebaseerde systemen tot neurale netwerken."
        }
      },
      {
        question: {
                  "en": "What is sentiment analysis?",
                  "es": "¿Qué es el análisis de sentimientos?",
                  "de": "Was ist Sentiment-Analyse?",
                  "nl": "Wat is sentimentanalyse?"
        },
        options: [
        {
                  "en": "Analyzing the length of sentences",
                  "es": "Analizar la longitud de las oraciones",
                  "de": "Die Länge von Sätzen analysieren",
                  "nl": "De lengte van zinnen analyseren"
        },
        {
                  "en": "Identifying grammatical errors",
                  "es": "Identificar errores gramaticales",
                  "de": "Grammatische Fehler identifizieren",
                  "nl": "Grammaticale fouten identificeren"
        },
        {
                  "en": "Determining the emotional tone or opinion expressed in text (positive, negative, neutral)",
                  "es": "Determinar el tono emocional u opinión expresada en texto (positivo, negativo, neutral)",
                  "de": "Bestimmen des emotionalen Tons oder der Meinung die in Text ausgedrückt wird (positiv, negativ, neutral)",
                  "nl": "Het bepalen van de emotionele toon of mening uitgedrukt in tekst (positief, negatief, neutraal)"
        },
        {
                  "en": "Counting word frequencies",
                  "es": "Contar frecuencias de palabras",
                  "de": "Worthäufigkeiten zählen",
                  "nl": "Woordfrequenties tellen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Sentiment analysis extracts subjective information from text, classifying the emotional polarity and intensity of opinions, feelings, and attitudes expressed by the author.",
                  "es": "El análisis de sentimientos extrae información subjetiva del texto, clasificando la polaridad emocional e intensidad de opiniones, sentimientos y actitudes expresadas por el autor.",
                  "de": "Sentiment-Analyse extrahiert subjektive Informationen aus Text, klassifiziert die emotionale Polarität und Intensität von Meinungen, Gefühlen und Einstellungen die vom Autor ausgedrückt werden.",
                  "nl": "Sentimentanalyse extraheert subjectieve informatie uit tekst, classificeert de emotionele polariteit en intensiteit van meningen, gevoelens en attitudes uitgedrukt door de auteur."
        }
      },
      {
        question: {
                  "en": "What is the difference between rule-based and statistical machine translation?",
                  "es": "¿Cuál es la diferencia entre traducción automática basada en reglas y estadística?",
                  "de": "Was ist der Unterschied zwischen regelbasierter und statistischer maschineller Übersetzung?",
                  "nl": "Wat is het verschil tussen regelgebaseerde en statistische machinevertaling?"
        },
        options: [
        {
                  "en": "Rule-based requires more computational power",
                  "es": "Basada en reglas requiere más poder computacional",
                  "de": "Regelbasiert benötigt mehr Rechenleistung",
                  "nl": "Regelgebaseerd vereist meer rekenkracht"
        },
        {
                  "en": "Rule-based is faster than statistical",
                  "es": "Basada en reglas es más rápida que estadística",
                  "de": "Regelbasiert ist schneller als statistisch",
                  "nl": "Regelgebaseerd is sneller dan statistisch"
        },
        {
                  "en": "Statistical only works with European languages",
                  "es": "Estadística solo funciona con idiomas europeos",
                  "de": "Statistisch funktioniert nur mit europäischen Sprachen",
                  "nl": "Statistisch werkt alleen met Europese talen"
        },
        {
                  "en": "Rule-based uses linguistic rules and dictionaries, statistical learns from parallel corpora",
                  "es": "Basada en reglas usa reglas lingüísticas y diccionarios, estadística aprende de corpus paralelos",
                  "de": "Regelbasiert verwendet linguistische Regeln und Wörterbücher, statistisch lernt aus parallelen Korpora",
                  "nl": "Regelgebaseerd gebruikt linguïstische regels en woordenboeken, statistisch leert van parallelle corpora"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Rule-based MT relies on manually crafted linguistic rules, grammars, and bilingual dictionaries. Statistical MT learns translation patterns automatically from large parallel corpora, using probabilistic models to find the most likely translation.",
                  "es": "La TA basada en reglas depende de reglas lingüísticas creadas manualmente, gramáticas y diccionarios bilingües. La TA estadística aprende patrones de traducción automáticamente de grandes corpus paralelos, usando modelos probabilísticos para encontrar la traducción más probable.",
                  "de": "Regelbasierte MÜ verlässt sich auf manuell erstellte linguistische Regeln, Grammatiken und zweisprachige Wörterbücher. Statistische MÜ lernt Übersetzungsmuster automatisch aus großen parallelen Korpora, verwendet probabilistische Modelle um die wahrscheinlichste Übersetzung zu finden.",
                  "nl": "Regelgebaseerde MV vertrouwt op handmatig vervaardigde linguïstische regels, grammatica's en tweetalige woordenboeken. Statistische MV leert vertaalpatronen automatisch uit grote parallelle corpora, gebruikt probabilistische modellen om de meest waarschijnlijke vertaling te vinden."
        }
      },
      {
        question: {
                  "en": "What are n-gram models used for in machine translation?",
                  "es": "¿Para qué se usan los modelos de n-gramas en traducción automática?",
                  "de": "Wofür werden N-Gramm-Modelle in der maschinellen Übersetzung verwendet?",
                  "nl": "Waarvoor worden n-gram modellen gebruikt in machinevertaling?"
        },
        options: [
        {
                  "en": "Language modeling to ensure fluent and grammatical target language output",
                  "es": "Modelado de lenguaje para asegurar salida fluida y gramatical en el idioma objetivo",
                  "de": "Sprachmodellierung um flüssige und grammatische Ausgabe in der Zielsprache sicherzustellen",
                  "nl": "Taalmodellering om vloeiende en grammaticale output in de doeltaal te verzekeren"
        },
        {
                  "en": "Compressing the translation data",
                  "es": "Comprimir los datos de traducción",
                  "de": "Die Übersetzungsdaten komprimieren",
                  "nl": "De vertaalgegevens comprimeren"
        },
        {
                  "en": "Identifying the source language",
                  "es": "Identificar el idioma fuente",
                  "de": "Die Quellsprache identifizieren",
                  "nl": "De brontaal identificeren"
        },
        {
                  "en": "Counting words in the source text",
                  "es": "Contar palabras en el texto fuente",
                  "de": "Wörter im Quelltext zählen",
                  "nl": "Woorden tellen in de brontekst"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "N-gram language models in machine translation help evaluate the fluency of candidate translations by assigning probabilities to word sequences, ensuring that the output sounds natural in the target language.",
                  "es": "Los modelos de lenguaje de n-gramas en traducción automática ayudan a evaluar la fluidez de traducciones candidatas asignando probabilidades a secuencias de palabras, asegurando que la salida suene natural en el idioma objetivo.",
                  "de": "N-Gramm-Sprachmodelle in der maschinellen Übersetzung helfen die Flüssigkeit von Kandidatenübersetzungen zu bewerten durch Zuweisen von Wahrscheinlichkeiten zu Wortsequenzen, stellen sicher dass die Ausgabe in der Zielsprache natürlich klingt.",
                  "nl": "N-gram taalmodellen in machinevertaling helpen de vloeiendheid van kandidaatvertalingen te evalueren door waarschijnlijkheden toe te wijzen aan woordsequenties, zorgen ervoor dat de output natuurlijk klinkt in de doeltaal."
        }
      },
      {
        question: {
                  "en": "What is the BLEU score in machine translation evaluation?",
                  "es": "¿Qué es la puntuación BLEU en evaluación de traducción automática?",
                  "de": "Was ist der BLEU-Score in der Bewertung maschineller Übersetzung?",
                  "nl": "Wat is de BLEU score in machinevertaling evaluatie?"
        },
        options: [
        {
                  "en": "The number of languages supported",
                  "es": "El número de idiomas soportados",
                  "de": "Die Anzahl unterstützter Sprachen",
                  "nl": "Het aantal ondersteunde talen"
        },
        {
                  "en": "A rating of translator expertise",
                  "es": "Una calificación de experiencia del traductor",
                  "de": "Eine Bewertung der Übersetzerexpertise",
                  "nl": "Een beoordeling van vertaalexpertise"
        },
        {
                  "en": "A measure of translation speed",
                  "es": "Una medida de velocidad de traducción",
                  "de": "Ein Maß für Übersetzungsgeschwindigkeit",
                  "nl": "Een maat voor vertaalsnelheid"
        },
        {
                  "en": "A metric measuring n-gram overlap between machine translations and human reference translations",
                  "es": "Una métrica que mide la superposición de n-gramas entre traducciones automáticas y traducciones de referencia humanas",
                  "de": "Eine Metrik die N-Gramm-Überlappung zwischen maschinellen Übersetzungen und menschlichen Referenzübersetzungen misst",
                  "nl": "Een metriek die n-gram overlap meet tussen machinevertaling en menselijke referentievertalingen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "BLEU (Bilingual Evaluation Understudy) measures translation quality by comparing n-gram precision between machine output and reference translations, with higher scores indicating better quality.",
                  "es": "BLEU (Bilingual Evaluation Understudy) mide la calidad de traducción comparando precisión de n-gramas entre salida automática y traducciones de referencia, con puntuaciones más altas indicando mejor calidad.",
                  "de": "BLEU (Bilingual Evaluation Understudy) misst Übersetzungsqualität durch Vergleich der N-Gramm-Präzision zwischen maschineller Ausgabe und Referenzübersetzungen, mit höheren Scores die bessere Qualität anzeigen.",
                  "nl": "BLEU (Bilingual Evaluation Understudy) meet vertaalkwaliteit door n-gram precisie te vergelijken tussen machine-output en referentievertalingen, met hogere scores die betere kwaliteit aangeven."
        }
      },
      {
        question: {
                  "en": "What is aspect-based sentiment analysis?",
                  "es": "¿Qué es el análisis de sentimientos basado en aspectos?",
                  "de": "Was ist aspektbasierte Sentiment-Analyse?",
                  "nl": "Wat is aspect-gebaseerde sentimentanalyse?"
        },
        options: [
        {
                  "en": "Analyzing sentiment across multiple languages",
                  "es": "Analizar sentimiento en múltiples idiomas",
                  "de": "Sentiment über mehrere Sprachen analysieren",
                  "nl": "Sentiment analyseren over meerdere talen"
        },
        {
                  "en": "Analyzing sentiment in different time periods",
                  "es": "Analizar sentimiento en diferentes períodos de tiempo",
                  "de": "Sentiment in verschiedenen Zeitperioden analysieren",
                  "nl": "Sentiment analyseren in verschillende tijdsperioden"
        },
        {
                  "en": "Analyzing sentiment towards specific features or aspects of an entity rather than overall sentiment",
                  "es": "Analizar sentimiento hacia características o aspectos específicos de una entidad en lugar del sentimiento general",
                  "de": "Sentiment gegenüber spezifischen Eigenschaften oder Aspekten einer Entität analysieren anstatt Gesamtsentiment",
                  "nl": "Sentiment analyseren naar specifieke kenmerken of aspecten van een entiteit in plaats van algemeen sentiment"
        },
        {
                  "en": "Analyzing sentiment of different user groups",
                  "es": "Analizar sentimiento de diferentes grupos de usuarios",
                  "de": "Sentiment verschiedener Benutzergruppen analysieren",
                  "nl": "Sentiment van verschillende gebruikersgroepen analyseren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Aspect-based sentiment analysis identifies specific features mentioned in text and determines sentiment towards each aspect separately, providing more granular insights than document-level sentiment.",
                  "es": "El análisis de sentimientos basado en aspectos identifica características específicas mencionadas en texto y determina sentimiento hacia cada aspecto por separado, proporcionando insights más granulares que sentimiento a nivel de documento.",
                  "de": "Aspektbasierte Sentiment-Analyse identifiziert spezifische Eigenschaften die in Text erwähnt werden und bestimmt Sentiment gegenüber jedem Aspekt separat, bietet granularere Einblicke als Sentiment auf Dokumentebene.",
                  "nl": "Aspect-gebaseerde sentimentanalyse identificeert specifieke kenmerken genoemd in tekst en bepaalt sentiment naar elk aspect afzonderlijk, biedt meer gedetailleerde inzichten dan sentiment op documentniveau."
        }
      },
      {
        question: {
                  "en": "What is lexicon-based sentiment analysis?",
                  "es": "¿Qué es el análisis de sentimientos basado en léxico?",
                  "de": "Was ist lexikon-basierte Sentiment-Analyse?",
                  "nl": "Wat is lexicon-gebaseerde sentimentanalyse?"
        },
        options: [
        {
                  "en": "Analyzing sentence structure for sentiment",
                  "es": "Analizar estructura de oraciones para sentimiento",
                  "de": "Satzstruktur für Sentiment analysieren",
                  "nl": "Zinsstructuur analyseren voor sentiment"
        },
        {
                  "en": "Using predefined dictionaries of words with sentiment scores to calculate overall text sentiment",
                  "es": "Usar diccionarios predefinidos de palabras con puntuaciones de sentimiento para calcular sentimiento general del texto",
                  "de": "Verwendung vordefinierter Wörterbücher von Wörtern mit Sentiment-Scores um Gesamtsentiment des Textes zu berechnen",
                  "nl": "Het gebruik van voorgedefinieerde woordenboeken van woorden met sentimentscores om het algemene tekstsentiment te berekenen"
        },
        {
                  "en": "Building vocabularies from training data",
                  "es": "Construir vocabularios de datos de entrenamiento",
                  "de": "Vokabulare aus Trainingsdaten aufbauen",
                  "nl": "Vocabulaires bouwen uit trainingsgegevens"
        },
        {
                  "en": "Using only verbs to determine sentiment",
                  "es": "Usar solo verbos para determinar sentimiento",
                  "de": "Nur Verben verwenden um Sentiment zu bestimmen",
                  "nl": "Alleen werkwoorden gebruiken om sentiment te bepalen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Lexicon-based approaches use sentiment dictionaries (like SentiWordNet, VADER) where words are pre-assigned sentiment scores, then aggregate these scores to determine overall text polarity.",
                  "es": "Los enfoques basados en léxico usan diccionarios de sentimientos (como SentiWordNet, VADER) donde las palabras tienen puntuaciones de sentimiento preasignadas, luego agregan estas puntuaciones para determinar polaridad general del texto.",
                  "de": "Lexikon-basierte Ansätze verwenden Sentiment-Wörterbücher (wie SentiWordNet, VADER) wo Wörter vorab zugewiesene Sentiment-Scores haben, dann aggregieren diese Scores um Gesamtpolarität des Textes zu bestimmen.",
                  "nl": "Lexicon-gebaseerde benaderingen gebruiken sentimentwoordenboeken (zoals SentiWordNet, VADER) waarbij woorden vooraf toegewezen sentimentscores hebben, vervolgens aggregeren deze scores om de algemene tekstpolariteit te bepalen."
        }
      },
      {
        question: {
                  "en": "What is the attention mechanism in neural machine translation?",
                  "es": "¿Qué es el mecanismo de atención en traducción automática neuronal?",
                  "de": "Was ist der Aufmerksamkeitsmechanismus in neuronaler maschineller Übersetzung?",
                  "nl": "Wat is het aandachtmechanisme in neurale machinevertaling?"
        },
        options: [
        {
                  "en": "A mechanism allowing the decoder to focus on relevant parts of the source sequence when generating each target word",
                  "es": "Un mecanismo que permite al decodificador enfocarse en partes relevantes de la secuencia fuente al generar cada palabra objetivo",
                  "de": "Ein Mechanismus der dem Decoder ermöglicht sich auf relevante Teile der Quellsequenz zu konzentrieren beim Generieren jedes Zielworts",
                  "nl": "Een mechanisme dat de decoder toestaat zich te richten op relevante delen van de bronsequentie bij het genereren van elk doelwoord"
        },
        {
                  "en": "A technique for reducing model size",
                  "es": "Una técnica para reducir el tamaño del modelo",
                  "de": "Eine Technik zur Reduzierung der Modellgröße",
                  "nl": "Een techniek voor het verkleinen van modelgrootte"
        },
        {
                  "en": "A method for faster training of neural networks",
                  "es": "Un método para entrenamiento más rápido de redes neuronales",
                  "de": "Eine Methode für schnelleres Training neuronaler Netzwerke",
                  "nl": "Een methode voor snellere training van neurale netwerken"
        },
        {
                  "en": "A way to prevent overfitting",
                  "es": "Una forma de prevenir sobreajuste",
                  "de": "Ein Weg Overfitting zu verhindern",
                  "nl": "Een manier om overfitting te voorkomen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Attention mechanisms solve the bottleneck problem in sequence-to-sequence models by allowing the decoder to access all encoder hidden states, not just the final one, focusing on relevant source positions for each target word.",
                  "es": "Los mecanismos de atención resuelven el problema de cuello de botella en modelos secuencia-a-secuencia permitiendo al decodificador acceder a todos los estados ocultos del codificador, no solo el final, enfocándose en posiciones fuente relevantes para cada palabra objetivo.",
                  "de": "Aufmerksamkeitsmechanismen lösen das Flaschenhals-Problem in Sequenz-zu-Sequenz-Modellen durch Ermöglichen des Decoders auf alle Encoder-versteckten Zustände zuzugreifen, nicht nur den letzten, konzentrieren sich auf relevante Quellpositionen für jedes Zielwort.",
                  "nl": "Aandachtmechanismen lossen het knelpuntprobleem in sequentie-naar-sequentie modellen op door de decoder toegang te geven tot alle encoder verborgen toestanden, niet alleen de laatste, richtend op relevante bronposities voor elk doelwoord."
        }
      },
      {
        question: {
                  "en": "What is emotion detection and how does it differ from sentiment analysis?",
                  "es": "¿Qué es la detección de emociones y cómo difiere del análisis de sentimientos?",
                  "de": "Was ist Emotionserkennung und wie unterscheidet sie sich von Sentiment-Analyse?",
                  "nl": "Wat is emotiedetectie en hoe verschilt het van sentimentanalyse?"
        },
        options: [
        {
                  "en": "Emotion detection is faster than sentiment analysis",
                  "es": "La detección de emociones es más rápida que el análisis de sentimientos",
                  "de": "Emotionserkennung ist schneller als Sentiment-Analyse",
                  "nl": "Emotiedetectie is sneller dan sentimentanalyse"
        },
        {
                  "en": "Emotion detection only works with spoken language",
                  "es": "La detección de emociones solo funciona con lenguaje hablado",
                  "de": "Emotionserkennung funktioniert nur mit gesprochener Sprache",
                  "nl": "Emotiedetectie werkt alleen met gesproken taal"
        },
        {
                  "en": "They are the same thing with different names",
                  "es": "Son la misma cosa con nombres diferentes",
                  "de": "Sie sind dasselbe mit verschiedenen Namen",
                  "nl": "Het zijn hetzelfde met verschillende namen"
        },
        {
                  "en": "Emotion detection identifies specific emotions like joy, anger, fear; sentiment analysis determines positive/negative polarity",
                  "es": "La detección de emociones identifica emociones específicas como alegría, ira, miedo; el análisis de sentimientos determina polaridad positiva/negativa",
                  "de": "Emotionserkennung identifiziert spezifische Emotionen wie Freude, Wut, Angst; Sentiment-Analyse bestimmt positive/negative Polarität",
                  "nl": "Emotiedetectie identificeert specifieke emoties zoals vreugde, woede, angst; sentimentanalyse bepaalt positieve/negatieve polariteit"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Emotion detection identifies specific emotional states (happiness, sadness, anger, fear, etc.) using more granular categories, while sentiment analysis typically focuses on broader polarity (positive, negative, neutral).",
                  "es": "La detección de emociones identifica estados emocionales específicos (felicidad, tristeza, ira, miedo, etc.) usando categorías más granulares, mientras el análisis de sentimientos típicamente se enfoca en polaridad más amplia (positivo, negativo, neutral).",
                  "de": "Emotionserkennung identifiziert spezifische emotionale Zustände (Glück, Traurigkeit, Wut, Angst, etc.) mit granulareren Kategorien, während Sentiment-Analyse sich typischerweise auf breitere Polarität konzentriert (positiv, negativ, neutral).",
                  "nl": "Emotiedetectie identificeert specifieke emotionele toestanden (geluk, verdriet, woede, angst, enz.) met meer gedetailleerde categorieën, terwijl sentimentanalyse zich typisch richt op bredere polariteit (positief, negatief, neutraal)."
        }
      },
      {
        question: {
                  "en": "What is domain adaptation in NLP?",
                  "es": "¿Qué es la adaptación de dominio en PLN?",
                  "de": "Was ist Domänenanpassung in NLP?",
                  "nl": "Wat is domeinaanpassing in NLP?"
        },
        options: [
        {
                  "en": "Translating model names to different languages",
                  "es": "Traducir nombres de modelos a diferentes idiomas",
                  "de": "Modellnamen in verschiedene Sprachen übersetzen",
                  "nl": "Modelnamen vertalen naar verschillende talen"
        },
        {
                  "en": "Adapting models trained on one domain to perform well on a different but related domain",
                  "es": "Adaptar modelos entrenados en un dominio para funcionar bien en un dominio diferente pero relacionado",
                  "de": "Modelle die auf einer Domäne trainiert wurden anpassen um gut auf einer anderen aber verwandten Domäne zu funktionieren",
                  "nl": "Modellen aangepast die getraind zijn op één domein om goed te presteren op een ander maar gerelateerd domein"
        },
        {
                  "en": "Adapting models to run faster",
                  "es": "Adaptar modelos para funcionar más rápido",
                  "de": "Modelle anpassen um schneller zu laufen",
                  "nl": "Modellen aanpassen om sneller te draaien"
        },
        {
                  "en": "Converting models to work on different computer architectures",
                  "es": "Convertir modelos para trabajar en diferentes arquitecturas de computadora",
                  "de": "Modelle konvertieren um auf verschiedenen Computerarchitekturen zu funktionieren",
                  "nl": "Modellen converteren om te werken op verschillende computerarchitecturen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Domain adaptation addresses the challenge when models trained on one domain (e.g., news text) need to work on another domain (e.g., medical text) where vocabulary and language patterns differ.",
                  "es": "La adaptación de dominio aborda el desafío cuando modelos entrenados en un dominio (ej., texto de noticias) necesitan funcionar en otro dominio (ej., texto médico) donde vocabulario y patrones de lenguaje difieren.",
                  "de": "Domänenanpassung adressiert die Herausforderung wenn Modelle die auf einer Domäne trainiert wurden (z.B. Nachrichtentext) auf einer anderen Domäne funktionieren müssen (z.B. medizinischer Text) wo Vokabular und Sprachmuster sich unterscheiden.",
                  "nl": "Domeinaanpassing pakt de uitdaging aan wanneer modellen getraind op één domein (bijv. nieuwstekst) moeten werken op een ander domein (bijv. medische tekst) waar vocabulaire en taalpatronen verschillen."
        }
      },
      {
        question: {
                  "en": "What is cross-lingual sentiment analysis?",
                  "es": "¿Qué es el análisis de sentimientos entre idiomas?",
                  "de": "Was ist mehrsprachige Sentiment-Analyse?",
                  "nl": "Wat is meertalige sentimentanalyse?"
        },
        options: [
        {
                  "en": "Comparing sentiment across different time periods",
                  "es": "Comparar sentimiento en diferentes períodos de tiempo",
                  "de": "Sentiment über verschiedene Zeitperioden vergleichen",
                  "nl": "Sentiment vergelijken over verschillende tijdsperioden"
        },
        {
                  "en": "Analyzing sentiment in multiple documents simultaneously",
                  "es": "Analizar sentimiento en múltiples documentos simultáneamente",
                  "de": "Sentiment in mehreren Dokumenten gleichzeitig analysieren",
                  "nl": "Sentiment in meerdere documenten tegelijkertijd analyseren"
        },
        {
                  "en": "Analyzing sentiment in one language using models trained on a different language",
                  "es": "Analizar sentimiento en un idioma usando modelos entrenados en un idioma diferente",
                  "de": "Sentiment in einer Sprache analysieren mit Modellen die auf einer anderen Sprache trainiert wurden",
                  "nl": "Sentiment analyseren in één taal met modellen getraind op een andere taal"
        },
        {
                  "en": "Translating sentiment labels between languages",
                  "es": "Traducir etiquetas de sentimiento entre idiomas",
                  "de": "Sentiment-Labels zwischen Sprachen übersetzen",
                  "nl": "Sentimentlabels tussen talen vertalen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cross-lingual sentiment analysis leverages sentiment models trained on resource-rich languages (like English) to analyze sentiment in resource-poor languages where training data is limited.",
                  "es": "El análisis de sentimientos entre idiomas aprovecha modelos de sentimiento entrenados en idiomas con muchos recursos (como inglés) para analizar sentimiento en idiomas con pocos recursos donde los datos de entrenamiento son limitados.",
                  "de": "Mehrsprachige Sentiment-Analyse nutzt Sentiment-Modelle die auf ressourcenreichen Sprachen trainiert wurden (wie Englisch) um Sentiment in ressourcenarmen Sprachen zu analysieren wo Trainingsdaten begrenzt sind.",
                  "nl": "Meertalige sentimentanalyse benut sentimentmodellen getraind op hulpbronrijke talen (zoals Engels) om sentiment te analyseren in hulpbronarme talen waar trainingsgegevens beperkt zijn."
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
                  "en": "Using knowledge from pre-trained models on large datasets to improve performance on specific tasks with limited data",
                  "es": "Usar conocimiento de modelos pre-entrenados en grandes conjuntos de datos para mejorar rendimiento en tareas específicas con datos limitados",
                  "de": "Wissen aus vortrainierten Modellen auf großen Datensätzen verwenden um Leistung bei spezifischen Aufgaben mit begrenzten Daten zu verbessern",
                  "nl": "Kennis van voorgetrainde modellen op grote datasets gebruiken om prestaties te verbeteren op specifieke taken met beperkte gegevens"
        },
        {
                  "en": "Transferring data between different file formats",
                  "es": "Transferir datos entre diferentes formatos de archivo",
                  "de": "Daten zwischen verschiedenen Dateiformaten übertragen",
                  "nl": "Gegevens overdragen tussen verschillende bestandsformaten"
        },
        {
                  "en": "Learning multiple languages simultaneously",
                  "es": "Aprender múltiples idiomas simultáneamente",
                  "de": "Mehrere Sprachen gleichzeitig lernen",
                  "nl": "Meerdere talen tegelijkertijd leren"
        },
        {
                  "en": "Moving models from one computer to another",
                  "es": "Mover modelos de una computadora a otra",
                  "de": "Modelle von einem Computer zu einem anderen bewegen",
                  "nl": "Modellen verplaatsen van de ene computer naar de andere"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Transfer learning leverages representations learned from large-scale pretraining (like language modeling) and fine-tunes them for specific downstream tasks, achieving better performance with less task-specific data.",
                  "es": "El aprendizaje por transferencia aprovecha representaciones aprendidas de pre-entrenamiento a gran escala (como modelado de lenguaje) y las ajusta finamente para tareas específicas posteriores, logrando mejor rendimiento con menos datos específicos de la tarea.",
                  "de": "Transfer Learning nutzt Darstellungen die aus großskaligem Vortraining gelernt wurden (wie Sprachmodellierung) und feinabstimmt sie für spezifische nachgelagerte Aufgaben, erreicht bessere Leistung mit weniger aufgabenspezifischen Daten.",
                  "nl": "Transfer learning benut representaties geleerd van grootschalige pretraining (zoals taalmodellering) en fijnafstemming voor specifieke downstream taken, behaalt betere prestaties met minder taakspecifieke gegevens."
        }
      },
      {
        question: {
                  "en": "What is the challenge of data sparsity in NLP?",
                  "es": "¿Cuál es el desafío de la escasez de datos en PLN?",
                  "de": "Was ist die Herausforderung der Datenspärlichkeit in NLP?",
                  "nl": "Wat is de uitdaging van gegevensspaarheid in NLP?"
        },
        options: [
        {
                  "en": "Data processing is too slow",
                  "es": "El procesamiento de datos es demasiado lento",
                  "de": "Datenverarbeitung ist zu langsam",
                  "nl": "Gegevensverwerking is te langzaam"
        },
        {
                  "en": "Training data takes up too much storage space",
                  "es": "Los datos de entrenamiento ocupan demasiado espacio de almacenamiento",
                  "de": "Trainingsdaten belegen zu viel Speicherplatz",
                  "nl": "Trainingsgegevens nemen te veel opslagruimte in beslag"
        },
        {
                  "en": "There are too many features to process",
                  "es": "Hay demasiadas características para procesar",
                  "de": "Es gibt zu viele Features zum Verarbeiten",
                  "nl": "Er zijn te veel kenmerken om te verwerken"
        },
        {
                  "en": "Many possible word combinations never appear in training data, causing zero probability problems",
                  "es": "Muchas combinaciones posibles de palabras nunca aparecen en datos de entrenamiento, causando problemas de probabilidad cero",
                  "de": "Viele mögliche Wortkombinationen erscheinen nie in Trainingsdaten, verursachen Null-Wahrscheinlichkeitsprobleme",
                  "nl": "Veel mogelijke woordcombinaties komen nooit voor in trainingsgegevens, veroorzaken nul waarschijnlijkheidsproblemen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Data sparsity occurs because natural language has enormous vocabulary and infinite possible combinations, making it impossible to observe all valid n-grams in any finite training corpus, requiring smoothing techniques.",
                  "es": "La escasez de datos ocurre porque el lenguaje natural tiene vocabulario enorme y combinaciones posibles infinitas, haciendo imposible observar todos los n-gramas válidos en cualquier corpus de entrenamiento finito, requiriendo técnicas de suavizado.",
                  "de": "Datenspärlichkeit tritt auf weil natürliche Sprache enormes Vokabular und unendliche mögliche Kombinationen hat, macht es unmöglich alle gültigen N-Gramme in jedem endlichen Trainingskorpus zu beobachten, erfordert Glättungstechniken.",
                  "nl": "Gegevensspaarheid treedt op omdat natuurlijke taal een enorm vocabulaire heeft en oneindige mogelijke combinaties, waardoor het onmogelijk is om alle geldige n-grammen te observeren in elk eindig trainingscorpus, vereist smoothing technieken."
        }
      },
      {
        question: {
                  "en": "What is word sense disambiguation (WSD)?",
                  "es": "¿Qué es la desambiguación de sentido de palabras (WSD)?",
                  "de": "Was ist Wortsinndisambiguierung (WSD)?",
                  "nl": "Wat is woordbetekenis disambiguatie (WSD)?"
        },
        options: [
        {
                  "en": "Identifying the grammatical category of words",
                  "es": "Identificar la categoría gramatical de palabras",
                  "de": "Die grammatische Kategorie von Wörtern identifizieren",
                  "nl": "De grammaticale categorie van woorden identificeren"
        },
        {
                  "en": "Finding misspelled words in text",
                  "es": "Encontrar palabras mal escritas en texto",
                  "de": "Falsch geschriebene Wörter in Text finden",
                  "nl": "Verkeerd gespelde woorden vinden in tekst"
        },
        {
                  "en": "Determining which meaning of a polysemous word is intended in a given context",
                  "es": "Determinar qué significado de una palabra polisémica se pretende en un contexto dado",
                  "de": "Bestimmen welche Bedeutung eines polysemen Wortes in einem gegebenen Kontext beabsichtigt ist",
                  "nl": "Bepalen welke betekenis van een polyseem woord bedoeld is in een gegeven context"
        },
        {
                  "en": "Translating words between languages",
                  "es": "Traducir palabras entre idiomas",
                  "de": "Wörter zwischen Sprachen übersetzen",
                  "nl": "Woorden vertalen tussen talen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "WSD resolves lexical ambiguity by identifying the correct sense of words that have multiple meanings, like 'bank' (financial institution vs. river bank) based on contextual clues.",
                  "es": "WSD resuelve ambigüedad léxica identificando el sentido correcto de palabras que tienen múltiples significados, como 'banco' (institución financiera vs. orilla del río) basándose en pistas contextuales.",
                  "de": "WSD löst lexikalische Ambiguität durch Identifizierung des korrekten Sinns von Wörtern die mehrere Bedeutungen haben, wie 'Bank' (Finanzinstitut vs. Flussufer) basierend auf kontextuellen Hinweisen.",
                  "nl": "WSD lost lexicale ambiguïteit op door de juiste betekenis te identificeren van woorden die meerdere betekenissen hebben, zoals 'bank' (financiële instelling vs. rivieroever) gebaseerd op contextuele aanwijzingen."
        }
      },
      {
        question: {
                  "en": "What is neural machine translation (NMT) and how does it differ from statistical machine translation?",
                  "es": "¿Qué es la traducción automática neuronal (NMT) y cómo difiere de la traducción automática estadística?",
                  "de": "Was ist neuronale maschinelle Übersetzung (NMT) und wie unterscheidet sie sich von statistischer maschineller Übersetzung?",
                  "nl": "Wat is neurale machinevertaling (NMT) en hoe verschilt het van statistische machinevertaling?"
        },
        options: [
        {
                  "en": "NMT is faster than SMT in training",
                  "es": "NMT es más rápido que SMT en entrenamiento",
                  "de": "NMT ist schneller als SMT im Training",
                  "nl": "NMT is sneller dan SMT in training"
        },
        {
                  "en": "NMT uses end-to-end neural networks to learn translation directly, while SMT uses separate models for alignment, translation, and language modeling",
                  "es": "NMT usa redes neuronales de extremo a extremo para aprender traducción directamente, mientras SMT usa modelos separados para alineación, traducción y modelado de lenguaje",
                  "de": "NMT verwendet End-to-End neuronale Netzwerke um Übersetzung direkt zu lernen, während SMT separate Modelle für Ausrichtung, Übersetzung und Sprachmodellierung verwendet",
                  "nl": "NMT gebruikt end-to-end neurale netwerken om vertaling direct te leren, terwijl SMT afzonderlijke modellen gebruikt voor uitlijning, vertaling en taalmodellering"
        },
        {
                  "en": "SMT produces more accurate translations",
                  "es": "SMT produce traducciones más precisas",
                  "de": "SMT produziert genauere Übersetzungen",
                  "nl": "SMT produceert nauwkeurigere vertalingen"
        },
        {
                  "en": "NMT only works with related languages",
                  "es": "NMT solo funciona con idiomas relacionados",
                  "de": "NMT funktioniert nur mit verwandten Sprachen",
                  "nl": "NMT werkt alleen met verwante talen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Neural machine translation uses deep learning to learn translation patterns end-to-end, typically achieving better fluency and handling long-range dependencies better than phrase-based statistical approaches.",
                  "es": "La traducción automática neuronal usa aprendizaje profundo para aprender patrones de traducción de extremo a extremo, típicamente logrando mejor fluidez y manejando dependencias de largo alcance mejor que enfoques estadísticos basados en frases.",
                  "de": "Neuronale maschinelle Übersetzung verwendet Deep Learning um Übersetzungsmuster End-to-End zu lernen, erreicht typischerweise bessere Flüssigkeit und handhabt weitreichende Abhängigkeiten besser als phrasenbasierte statistische Ansätze.",
                  "nl": "Neurale machinevertaling gebruikt deep learning om vertaalpatronen end-to-end te leren, behaalt typisch betere vloeiendheid en behandelt lange-afstand afhankelijkheden beter dan frase-gebaseerde statistische benaderingen."
        }
      },
      {
        question: {
                  "en": "What is sequence-to-sequence (seq2seq) modeling?",
                  "es": "¿Qué es el modelado secuencia-a-secuencia (seq2seq)?",
                  "de": "Was ist Sequenz-zu-Sequenz (seq2seq) Modellierung?",
                  "nl": "Wat is sequentie-naar-sequentie (seq2seq) modellering?"
        },
        options: [
        {
                  "en": "A technique for compressing sequential data",
                  "es": "Una técnica para comprimir datos secuenciales",
                  "de": "Eine Technik zum Komprimieren sequentieller Daten",
                  "nl": "Een techniek voor het comprimeren van sequentiële gegevens"
        },
        {
                  "en": "A neural architecture that maps input sequences to output sequences of potentially different lengths using encoder-decoder structure",
                  "es": "Una arquitectura neuronal que mapea secuencias de entrada a secuencias de salida de longitudes potencialmente diferentes usando estructura codificador-decodificador",
                  "de": "Eine neuronale Architektur die Eingabesequenzen auf Ausgabesequenzen potenziell unterschiedlicher Längen mit Encoder-Decoder-Struktur abbildet",
                  "nl": "Een neurale architectuur die invoersequenties afbeeldt op uitvoersequenties van potentieel verschillende lengtes met encoder-decoder structuur"
        },
        {
                  "en": "A model that only processes fixed-length sequences",
                  "es": "Un modelo que solo procesa secuencias de longitud fija",
                  "de": "Ein Modell das nur Sequenzen fester Länge verarbeitet",
                  "nl": "Een model dat alleen sequenties van vaste lengte verwerkt"
        },
        {
                  "en": "A method for sorting sequences alphabetically",
                  "es": "Un método para ordenar secuencias alfabéticamente",
                  "de": "Eine Methode zum alphabetischen Sortieren von Sequenzen",
                  "nl": "Een methode voor het alfabetisch sorteren van sequenties"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Seq2seq models use an encoder to process the input sequence into a fixed representation and a decoder to generate the output sequence from this representation, commonly used for translation, summarization, and dialogue.",
                  "es": "Los modelos seq2seq usan un codificador para procesar la secuencia de entrada en una representación fija y un decodificador para generar la secuencia de salida de esta representación, comúnmente usado para traducción, resumen y diálogo.",
                  "de": "Seq2seq-Modelle verwenden einen Encoder um die Eingabesequenz in eine feste Darstellung zu verarbeiten und einen Decoder um die Ausgabesequenz aus dieser Darstellung zu generieren, häufig verwendet für Übersetzung, Zusammenfassung und Dialog.",
                  "nl": "Seq2seq modellen gebruiken een encoder om de invoersequentie te verwerken in een vaste representatie en een decoder om de uitvoersequentie uit deze representatie te genereren, vaak gebruikt voor vertaling, samenvatting en dialoog."
        }
      },
      {
        question: {
                  "en": "What is beam search in sequence generation?",
                  "es": "¿Qué es la búsqueda en haz en generación de secuencias?",
                  "de": "Was ist Beam Search in der Sequenzgenerierung?",
                  "nl": "Wat is beam search in sequentiegeneratie?"
        },
        options: [
        {
                  "en": "An algorithm that always finds the optimal sequence",
                  "es": "Un algoritmo que siempre encuentra la secuencia óptima",
                  "de": "Ein Algorithmus der immer die optimale Sequenz findet",
                  "nl": "Een algoritme dat altijd de optimale sequentie vindt"
        },
        {
                  "en": "A technique for parallel processing of sequences",
                  "es": "Una técnica para procesamiento paralelo de secuencias",
                  "de": "Eine Technik für parallele Verarbeitung von Sequenzen",
                  "nl": "Een techniek voor parallelle verwerking van sequenties"
        },
        {
                  "en": "A decoding algorithm that keeps track of the top k most likely partial sequences at each step",
                  "es": "Un algoritmo de decodificación que mantiene registro de las k secuencias parciales más probables en cada paso",
                  "de": "Ein Dekodierungsalgorithmus der die k wahrscheinlichsten Teilsequenzen bei jedem Schritt verfolgt",
                  "nl": "Een decoderingsalgoritme dat de top k meest waarschijnlijke gedeeltelijke sequenties bijhoudt bij elke stap"
        },
        {
                  "en": "A method for searching through beams of light",
                  "es": "Un método para buscar a través de haces de luz",
                  "de": "Eine Methode zum Durchsuchen von Lichtstrahlen",
                  "nl": "Een methode voor het zoeken door lichtbundels"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Beam search maintains k candidate sequences (beam width) at each decoding step, expanding the most promising ones, balancing between greedy decoding and exhaustive search for better quality outputs in translation and text generation.",
                  "es": "La búsqueda en haz mantiene k secuencias candidatas (ancho de haz) en cada paso de decodificación, expandiendo las más prometedoras, equilibrando entre decodificación codiciosa y búsqueda exhaustiva para salidas de mejor calidad en traducción y generación de texto.",
                  "de": "Beam Search behält k Kandidatensequenzen (Strahlbreite) bei jedem Dekodierungsschritt bei, erweitert die vielversprechendsten, balanciert zwischen gierigem Dekodieren und erschöpfender Suche für bessere Qualitätsausgaben bei Übersetzung und Textgenerierung.",
                  "nl": "Beam search onderhoudt k kandidaatsequenties (beam breedte) bij elke decoderingsstap, breidt de meest veelbelovende uit, balanceert tussen greedy decodering en exhaustieve zoektocht voor betere kwaliteitsoutputs in vertaling en tekstgeneratie."
        }
      },
      {
        question: {
                  "en": "What is sarcasm detection in NLP?",
                  "es": "¿Qué es la detección de sarcasmo en PLN?",
                  "de": "Was ist Sarkasmuserkennung in NLP?",
                  "nl": "Wat is sarcasmedetectie in NLP?"
        },
        options: [
        {
                  "en": "Identifying when the literal meaning of text contradicts the intended meaning, often involving irony or mockery",
                  "es": "Identificar cuándo el significado literal del texto contradice el significado pretendido, a menudo involucrando ironía o burla",
                  "de": "Identifizieren wenn die wörtliche Bedeutung von Text der beabsichtigten Bedeutung widerspricht, oft mit Ironie oder Spott",
                  "nl": "Identificeren wanneer de letterlijke betekenis van tekst de bedoelde betekenis tegenspreekt, vaak met ironie of spot"
        },
        {
                  "en": "Finding contradictions between different documents",
                  "es": "Encontrar contradicciones entre diferentes documentos",
                  "de": "Widersprüche zwischen verschiedenen Dokumenten finden",
                  "nl": "Tegenstrijdigheden vinden tussen verschillende documenten"
        },
        {
                  "en": "Identifying the author's writing style",
                  "es": "Identificar el estilo de escritura del autor",
                  "de": "Den Schreibstil des Autors identifizieren",
                  "nl": "De schrijfstijl van de auteur identificeren"
        },
        {
                  "en": "Detecting spelling errors in text",
                  "es": "Detectar errores ortográficos en texto",
                  "de": "Rechtschreibfehler in Text erkennen",
                  "nl": "Spelfouten in tekst detecteren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Sarcasm detection is a challenging NLP task because it requires understanding context, incongruity between words and sentiment, and often relies on cues like exaggeration, hashtags, or emoticons.",
                  "es": "La detección de sarcasmo es una tarea desafiante de PLN porque requiere entender contexto, incongruencia entre palabras y sentimiento, y a menudo depende de señales como exageración, hashtags o emoticones.",
                  "de": "Sarkasmuserkennung ist eine herausfordernde NLP-Aufgabe weil sie Kontextverständnis erfordert, Inkongruenz zwischen Wörtern und Sentiment, und oft auf Hinweise wie Übertreibung, Hashtags oder Emoticons angewiesen ist.",
                  "nl": "Sarcasmedetectie is een uitdagende NLP-taak omdat het contextueel begrip vereist, incongruentie tussen woorden en sentiment, en vaak vertrouwt op aanwijzingen zoals overdrijving, hashtags of emoticons."
        }
      },
      {
        question: {
                  "en": "What is zero-shot learning in NLP?",
                  "es": "¿Qué es el aprendizaje de cero disparos en PLN?",
                  "de": "Was ist Zero-Shot Learning in NLP?",
                  "nl": "Wat is zero-shot learning in NLP?"
        },
        options: [
        {
                  "en": "Removing all examples from the training set",
                  "es": "Eliminar todos los ejemplos del conjunto de entrenamiento",
                  "de": "Alle Beispiele aus dem Trainingsset entfernen",
                  "nl": "Alle voorbeelden uit de trainingsset verwijderen"
        },
        {
                  "en": "Training models without any data",
                  "es": "Entrenar modelos sin ningún dato",
                  "de": "Modelle ohne Daten trainieren",
                  "nl": "Modellen trainen zonder enige gegevens"
        },
        {
                  "en": "Using only one training example",
                  "es": "Usar solo un ejemplo de entrenamiento",
                  "de": "Nur ein Trainingsbeispiel verwenden",
                  "nl": "Slechts één trainingsvoorbeeld gebruiken"
        },
        {
                  "en": "Training models to perform tasks they weren't explicitly trained on by leveraging knowledge from related tasks",
                  "es": "Entrenar modelos para realizar tareas en las que no fueron explícitamente entrenados aprovechando conocimiento de tareas relacionadas",
                  "de": "Modelle trainieren um Aufgaben auszuführen für die sie nicht explizit trainiert wurden durch Nutzung von Wissen aus verwandten Aufgaben",
                  "nl": "Modellen trainen om taken uit te voeren waarvoor ze niet expliciet getraind zijn door kennis van gerelateerde taken te benutten"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Zero-shot learning enables models to generalize to new tasks or classes without seeing any examples during training, often using semantic representations or task descriptions to bridge the gap.",
                  "es": "El aprendizaje de cero disparos permite a los modelos generalizar a nuevas tareas o clases sin ver ejemplos durante el entrenamiento, a menudo usando representaciones semánticas o descripciones de tareas para cerrar la brecha.",
                  "de": "Zero-Shot Learning ermöglicht Modellen auf neue Aufgaben oder Klassen zu generalisieren ohne Beispiele während des Trainings zu sehen, oft mit semantischen Darstellungen oder Aufgabenbeschreibungen um die Lücke zu überbrücken.",
                  "nl": "Zero-shot learning stelt modellen in staat om te generaliseren naar nieuwe taken of klassen zonder voorbeelden te zien tijdens training, vaak met semantische representaties of taakbeschrijvingen om de kloof te overbruggen."
        }
      },
      {
        question: {
                  "en": "What is the encoder-decoder bottleneck problem in NMT?",
                  "es": "¿Qué es el problema de cuello de botella codificador-decodificador en NMT?",
                  "de": "Was ist das Encoder-Decoder-Flaschenhals-Problem in NMT?",
                  "nl": "Wat is het encoder-decoder knelpuntprobleem in NMT?"
        },
        options: [
        {
                  "en": "The fixed-size context vector must compress all source information, limiting translation quality for long sentences",
                  "es": "El vector de contexto de tamaño fijo debe comprimir toda la información fuente, limitando la calidad de traducción para oraciones largas",
                  "de": "Der Kontextvektor fester Größe muss alle Quellinformationen komprimieren, begrenzt Übersetzungsqualität für lange Sätze",
                  "nl": "De contextvector van vaste grootte moet alle broninformatie comprimeren, beperkt vertaalkwaliteit voor lange zinnen"
        },
        {
                  "en": "The encoder and decoder use incompatible architectures",
                  "es": "El codificador y decodificador usan arquitecturas incompatibles",
                  "de": "Encoder und Decoder verwenden inkompatible Architekturen",
                  "nl": "Encoder en decoder gebruiken incompatibele architecturen"
        },
        {
                  "en": "The model requires too much memory",
                  "es": "El modelo requiere demasiada memoria",
                  "de": "Das Modell benötigt zu viel Speicher",
                  "nl": "Het model vereist te veel geheugen"
        },
        {
                  "en": "The decoder runs slower than the encoder",
                  "es": "El decodificador funciona más lento que el codificador",
                  "de": "Der Decoder läuft langsamer als der Encoder",
                  "nl": "De decoder loopt langzamer dan de encoder"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The bottleneck occurs because the encoder must compress the entire source sentence into a single fixed-length vector, losing information especially for long sentences. Attention mechanisms were introduced to address this limitation.",
                  "es": "El cuello de botella ocurre porque el codificador debe comprimir toda la oración fuente en un solo vector de longitud fija, perdiendo información especialmente para oraciones largas. Los mecanismos de atención se introdujeron para abordar esta limitación.",
                  "de": "Der Flaschenhals tritt auf weil der Encoder den gesamten Quellsatz in einen einzelnen Vektor fester Länge komprimieren muss, verliert Information besonders für lange Sätze. Aufmerksamkeitsmechanismen wurden eingeführt um diese Einschränkung anzugehen.",
                  "nl": "Het knelpunt treedt op omdat de encoder de hele bronzin moet comprimeren in een enkele vector van vaste lengte, verliest informatie vooral voor lange zinnen. Aandachtmechanismen werden geïntroduceerd om deze beperking aan te pakken."
        }
      },
      {
        question: {
                  "en": "What is opinion mining?",
                  "es": "¿Qué es la minería de opiniones?",
                  "de": "Was ist Opinion Mining?",
                  "nl": "Wat is opinion mining?"
        },
        options: [
        {
                  "en": "Collecting reviews from websites",
                  "es": "Recopilar reseñas de sitios web",
                  "de": "Bewertungen von Websites sammeln",
                  "nl": "Reviews verzamelen van websites"
        },
        {
                  "en": "Extracting and analyzing subjective information, opinions, and attitudes from text sources",
                  "es": "Extraer y analizar información subjetiva, opiniones y actitudes de fuentes de texto",
                  "de": "Subjektive Informationen, Meinungen und Einstellungen aus Textquellen extrahieren und analysieren",
                  "nl": "Subjectieve informatie, meningen en attitudes uit tekstbronnen extraheren en analyseren"
        },
        {
                  "en": "Finding factual information in texts",
                  "es": "Encontrar información factual en textos",
                  "de": "Faktische Informationen in Texten finden",
                  "nl": "Feitelijke informatie in teksten vinden"
        },
        {
                  "en": "Mining data from opinion polls",
                  "es": "Extraer datos de encuestas de opinión",
                  "de": "Daten aus Meinungsumfragen extrahieren",
                  "nl": "Gegevens extraheren uit opiniepeilingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Opinion mining (closely related to sentiment analysis) goes beyond polarity detection to extract detailed opinions about specific features, identify opinion holders, and determine the strength and subjectivity of expressed views.",
                  "es": "La minería de opiniones (estrechamente relacionada con el análisis de sentimientos) va más allá de la detección de polaridad para extraer opiniones detalladas sobre características específicas, identificar titulares de opiniones y determinar la fuerza y subjetividad de las vistas expresadas.",
                  "de": "Opinion Mining (eng verwandt mit Sentiment-Analyse) geht über Polaritätserkennung hinaus um detaillierte Meinungen über spezifische Eigenschaften zu extrahieren, Meinungsinhaber zu identifizieren und Stärke und Subjektivität ausgedrückter Ansichten zu bestimmen.",
                  "nl": "Opinion mining (nauw verwant aan sentimentanalyse) gaat verder dan polariteitsdetectie om gedetailleerde meningen over specifieke kenmerken te extraheren, opiniehouders te identificeren en de sterkte en subjectiviteit van geuite meningen te bepalen."
        }
      },
      {
        question: {
                  "en": "What is discourse analysis in NLP?",
                  "es": "¿Qué es el análisis del discurso en PLN?",
                  "de": "Was ist Diskursanalyse in NLP?",
                  "nl": "Wat is discours-analyse in NLP?"
        },
        options: [
        {
                  "en": "Converting discourse to text",
                  "es": "Convertir discurso a texto",
                  "de": "Diskurs in Text konvertieren",
                  "nl": "Discours naar tekst converteren"
        },
        {
                  "en": "Studying language debates",
                  "es": "Estudiar debates de idioma",
                  "de": "Sprachdebatten studieren",
                  "nl": "Taaldebatten bestuderen"
        },
        {
                  "en": "Analyzing text structure beyond sentence level to understand relationships between sentences and paragraphs",
                  "es": "Analizar estructura de texto más allá del nivel de oración para entender relaciones entre oraciones y párrafos",
                  "de": "Textstruktur über Satzebene hinaus analysieren um Beziehungen zwischen Sätzen und Absätzen zu verstehen",
                  "nl": "Tekststructuur analyseren voorbij zinsniveau om relaties tussen zinnen en paragrafen te begrijpen"
        },
        {
                  "en": "Analyzing political speeches only",
                  "es": "Analizar solo discursos políticos",
                  "de": "Nur politische Reden analysieren",
                  "nl": "Alleen politieke speeches analyseren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Discourse analysis examines how sentences connect to form coherent texts, including coreference, discourse relations (cause, contrast, etc.), topic progression, and rhetorical structure.",
                  "es": "El análisis del discurso examina cómo las oraciones se conectan para formar textos coherentes, incluyendo correferencia, relaciones de discurso (causa, contraste, etc.), progresión de temas y estructura retórica.",
                  "de": "Diskursanalyse untersucht wie Sätze sich verbinden um kohärente Texte zu bilden, einschließlich Koreferenz, Diskursrelationen (Ursache, Kontrast, etc.), Themenprogression und rhetorische Struktur.",
                  "nl": "Discours-analyse onderzoekt hoe zinnen verbinden om coherente teksten te vormen, inclusief coreferentie, discoursrelaties (oorzaak, contrast, etc.), themaprogr essie en retorische structuur."
        }
      },
      {
        question: {
                  "en": "What is text coherence?",
                  "es": "¿Qué es la coherencia del texto?",
                  "de": "Was ist Textkohärenz?",
                  "nl": "Wat is tekstcoherentie?"
        },
        options: [
        {
                  "en": "Text written in one style",
                  "es": "Texto escrito en un estilo",
                  "de": "In einem Stil geschriebener Text",
                  "nl": "Tekst geschreven in één stijl"
        },
        {
                  "en": "Grammatically correct sentences",
                  "es": "Oraciones gramaticalmente correctas",
                  "de": "Grammatisch korrekte Sätze",
                  "nl": "Grammaticaal correcte zinnen"
        },
        {
                  "en": "The semantic unity and logical flow that makes text meaningful and connected",
                  "es": "La unidad semántica y flujo lógico que hace el texto significativo y conectado",
                  "de": "Die semantische Einheit und logischer Fluss die Text bedeutungsvoll und verbunden macht",
                  "nl": "De semantische eenheid en logische stroom die tekst betekenisvol en verbonden maakt"
        },
        {
                  "en": "Text that is easy to read",
                  "es": "Texto que es fácil de leer",
                  "de": "Text der leicht zu lesen ist",
                  "nl": "Tekst die gemakkelijk te lezen is"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Coherence refers to the underlying semantic relationships that make a text meaningful as a whole, involving topic continuity, logical connections, and shared knowledge. It differs from cohesion which uses explicit linguistic markers.",
                  "es": "La coherencia se refiere a las relaciones semánticas subyacentes que hacen un texto significativo como un todo, involucrando continuidad de temas, conexiones lógicas y conocimiento compartido. Difiere de la cohesión que usa marcadores lingüísticos explícitos.",
                  "de": "Kohärenz bezieht sich auf die zugrundeliegenden semantischen Beziehungen die einen Text als Ganzes bedeutungsvoll machen, umfasst Themenkontinuität, logische Verbindungen und geteiltes Wissen. Sie unterscheidet sich von Kohäsion die explizite linguistische Marker verwendet.",
                  "nl": "Coherentie verwijst naar de onderliggende semantische relaties die een tekst betekenisvol maken als geheel, omvat themacontinuïteit, logische verbindingen en gedeelde kennis. Het verschilt van cohesie die expliciete linguïstische markers gebruikt."
        }
      },
      {
        question: {
                  "en": "What is text cohesion?",
                  "es": "¿Qué es la cohesión del texto?",
                  "de": "Was ist Textkohäsion?",
                  "nl": "Wat is tekstcohesie?"
        },
        options: [
        {
                  "en": "Sticking text together physically",
                  "es": "Pegar texto juntos físicamente",
                  "de": "Text physisch zusammenkleben",
                  "nl": "Tekst fysiek aan elkaar plakken"
        },
        {
                  "en": "Text density and compactness",
                  "es": "Densidad y compacidad del texto",
                  "de": "Textdichte und Kompaktheit",
                  "nl": "Tekstdichtheid en compactheid"
        },
        {
                  "en": "The use of explicit linguistic devices like pronouns and conjunctions to link sentences",
                  "es": "El uso de dispositivos lingüísticos explícitos como pronombres y conjunciones para enlazar oraciones",
                  "de": "Die Verwendung expliziter linguistischer Mittel wie Pronomen und Konjunktionen um Sätze zu verknüpfen",
                  "nl": "Het gebruik van expliciete linguïstische middelen zoals voornaamwoorden en voegwoorden om zinnen te verbinden"
        },
        {
                  "en": "Related topics in text",
                  "es": "Temas relacionados en texto",
                  "de": "Verwandte Themen in Text",
                  "nl": "Gerelateerde onderwerpen in tekst"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cohesion uses surface-level linguistic markers (pronouns, conjunctions, lexical repetition, ellipsis) to explicitly connect text elements. For example, 'John arrived. He was tired.' uses the pronoun 'He' for cohesion.",
                  "es": "La cohesión usa marcadores lingüísticos de nivel superficial (pronombres, conjunciones, repetición léxica, elipsis) para conectar explícitamente elementos de texto. Por ejemplo, 'Juan llegó. Él estaba cansado.' usa el pronombre 'Él' para cohesión.",
                  "de": "Kohäsion verwendet linguistische Oberflächenmarker (Pronomen, Konjunktionen, lexikalische Wiederholung, Ellipse) um Textelemente explizit zu verbinden. Zum Beispiel 'Johannes kam an. Er war müde.' verwendet das Pronomen 'Er' für Kohäsion.",
                  "nl": "Cohesie gebruikt oppervlakte-niveau linguïstische markers (voornaamwoorden, voegwoorden, lexicale herhaling, ellips) om tekstelementen expliciet te verbinden. Bijvoorbeeld 'Jan arriveerde. Hij was moe.' gebruikt het voornaamwoord 'Hij' voor cohesie."
        }
      },
      {
        question: {
                  "en": "What is automatic text summarization?",
                  "es": "¿Qué es la resumición automática de texto?",
                  "de": "Was ist automatische Textzusammenfassung?",
                  "nl": "Wat is automatische tekst samenvatting?"
        },
        options: [
        {
                  "en": "Generating concise versions of text that retain key information",
                  "es": "Generar versiones concisas de texto que retienen información clave",
                  "de": "Prägnante Versionen von Text generieren die Schlüsselinformationen behalten",
                  "nl": "Beknopte versies van tekst genereren die belangrijke informatie behouden"
        },
        {
                  "en": "Organizing text by topic",
                  "es": "Organizar texto por tema",
                  "de": "Text nach Thema organisieren",
                  "nl": "Tekst organiseren per onderwerp"
        },
        {
                  "en": "Converting long text to bullet points",
                  "es": "Convertir texto largo a viñetas",
                  "de": "Langen Text in Aufzählungspunkte konvertieren",
                  "nl": "Lange tekst naar bullets converteren"
        },
        {
                  "en": "Counting words in documents",
                  "es": "Contar palabras en documentos",
                  "de": "Wörter in Dokumenten zählen",
                  "nl": "Woorden tellen in documenten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Text summarization can be extractive (selecting important sentences from the original) or abstractive (generating new sentences that capture the meaning). It's used for news digests, document overviews, and search results.",
                  "es": "La resumición de texto puede ser extractiva (seleccionar oraciones importantes del original) o abstractiva (generar nuevas oraciones que capturan el significado). Se usa para resúmenes de noticias, vistas generales de documentos y resultados de búsqueda.",
                  "de": "Textzusammenfassung kann extraktiv sein (wichtige Sätze aus dem Original auswählen) oder abstraktiv (neue Sätze generieren die die Bedeutung erfassen). Sie wird für Nachrichtendigests, Dokumentübersichten und Suchergebnisse verwendet.",
                  "nl": "Tekst samenvatting kan extractief zijn (belangrijke zinnen selecteren uit het origineel) of abstractief (nieuwe zinnen genereren die de betekenis vastleggen). Het wordt gebruikt voor nieuwssamenvattingen, documentoverzichten en zoekresultaten."
        }
      },
      {
        question: {
                  "en": "What is extractive summarization?",
                  "es": "¿Qué es la resumición extractiva?",
                  "de": "Was ist extraktive Zusammenfassung?",
                  "nl": "Wat is extractieve samenvatting?"
        },
        options: [
        {
                  "en": "Selecting and combining existing sentences from the source text to create a summary",
                  "es": "Seleccionar y combinar oraciones existentes del texto fuente para crear un resumen",
                  "de": "Vorhandene Sätze aus dem Quelltext auswählen und kombinieren um eine Zusammenfassung zu erstellen",
                  "nl": "Bestaande zinnen uit de brontekst selecteren en combineren om een samenvatting te maken"
        },
        {
                  "en": "Extracting keywords only",
                  "es": "Extraer solo palabras clave",
                  "de": "Nur Schlüsselwörter extrahieren",
                  "nl": "Alleen sleutelwoorden extraheren"
        },
        {
                  "en": "Removing unimportant text",
                  "es": "Eliminar texto no importante",
                  "de": "Unwichtigen Text entfernen",
                  "nl": "Onbelangrijke tekst verwijderen"
        },
        {
                  "en": "Extracting metadata from documents",
                  "es": "Extraer metadatos de documentos",
                  "de": "Metadaten aus Dokumenten extrahieren",
                  "nl": "Metadata uit documenten extraheren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Extractive summarization ranks sentences by importance (using features like position, word frequency, cue phrases) and selects the top-ranking ones. It's simpler and more fluent but limited to existing content.",
                  "es": "La resumición extractiva clasifica oraciones por importancia (usando características como posición, frecuencia de palabras, frases clave) y selecciona las de mayor clasificación. Es más simple y fluida pero limitada a contenido existente.",
                  "de": "Extraktive Zusammenfassung rankt Sätze nach Wichtigkeit (mit Merkmalen wie Position, Worthäufigkeit, Signalphrasen) und wählt die höchstrangigen aus. Sie ist einfacher und flüssiger aber auf vorhandenen Inhalt beschränkt.",
                  "nl": "Extractieve samenvatting rankt zinnen op belangrijkheid (met kenmerken zoals positie, woordfrequentie, signaalzinnen) en selecteert de hoogst gerankte. Het is eenvoudiger en vloeiender maar beperkt tot bestaande content."
        }
      },
      {
        question: {
                  "en": "What is abstractive summarization?",
                  "es": "¿Qué es la resumición abstractiva?",
                  "de": "Was ist abstraktive Zusammenfassung?",
                  "nl": "Wat is abstractieve samenvatting?"
        },
        options: [
        {
                  "en": "Generating new sentences that paraphrase and synthesize information from the source",
                  "es": "Generar nuevas oraciones que parafrasean y sintetizan información de la fuente",
                  "de": "Neue Sätze generieren die Informationen aus der Quelle paraphrasieren und synthetisieren",
                  "nl": "Nieuwe zinnen genereren die informatie uit de bron parafraseren en synthetiseren"
        },
        {
                  "en": "Abstracting away details",
                  "es": "Abstraer detalles",
                  "de": "Details abstrahieren",
                  "nl": "Details abstraheren"
        },
        {
                  "en": "Creating abstract concepts from text",
                  "es": "Crear conceptos abstractos del texto",
                  "de": "Abstrakte Konzepte aus Text erstellen",
                  "nl": "Abstracte concepten uit tekst maken"
        },
        {
                  "en": "Writing theoretical summaries",
                  "es": "Escribir resúmenes teóricos",
                  "de": "Theoretische Zusammenfassungen schreiben",
                  "nl": "Theoretische samenvattingen schrijven"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Abstractive summarization uses natural language generation to create summaries with novel sentences not in the original text. It's more flexible and human-like but harder to implement and may introduce errors.",
                  "es": "La resumición abstractiva usa generación de lenguaje natural para crear resúmenes con oraciones novedosas no en el texto original. Es más flexible y similar a humana pero más difícil de implementar y puede introducir errores.",
                  "de": "Abstraktive Zusammenfassung verwendet natürliche Sprachgenerierung um Zusammenfassungen mit neuartigen Sätzen zu erstellen die nicht im Originaltext sind. Sie ist flexibler und menschenähnlicher aber schwerer zu implementieren und kann Fehler einführen.",
                  "nl": "Abstractieve samenvatting gebruikt natuurlijke taalgeneratie om samenvattingen te maken met nieuwe zinnen die niet in de originele tekst staan. Het is flexibeler en menselijker maar moeilijker te implementeren en kan fouten introduceren."
        }
      },
      {
        question: {
                  "en": "What is question answering (QA) in NLP?",
                  "es": "¿Qué es respuesta a preguntas (QA) en PLN?",
                  "de": "Was ist Frage-Antwort (QA) in NLP?",
                  "nl": "Wat is vraagbeantwoording (QA) in NLP?"
        },
        options: [
        {
                  "en": "Automatically finding answers to questions posed in natural language",
                  "es": "Encontrar automáticamente respuestas a preguntas planteadas en lenguaje natural",
                  "de": "Automatisch Antworten auf in natürlicher Sprache gestellte Fragen finden",
                  "nl": "Automatisch antwoorden vinden op vragen gesteld in natuurlijke taal"
        },
        {
                  "en": "Quality assurance for text",
                  "es": "Aseguramiento de calidad para texto",
                  "de": "Qualitätssicherung für Text",
                  "nl": "Kwaliteitsborging voor tekst"
        },
        {
                  "en": "Creating question databases",
                  "es": "Crear bases de datos de preguntas",
                  "de": "Fragendatenbanken erstellen",
                  "nl": "Vragendatabases maken"
        },
        {
                  "en": "Questioning AI systems",
                  "es": "Cuestionar sistemas de IA",
                  "de": "KI-Systeme hinterfragen",
                  "nl": "AI-systemen bevragen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "QA systems retrieve or generate answers from text corpora or knowledge bases. They range from simple extractive QA (finding answer spans in documents) to complex reasoning systems. Examples include IBM Watson and modern reading comprehension models.",
                  "es": "Los sistemas QA recuperan o generan respuestas de corpus de texto o bases de conocimiento. Van desde QA extractivo simple (encontrar fragmentos de respuesta en documentos) hasta sistemas de razonamiento complejos. Ejemplos incluyen IBM Watson y modelos modernos de comprensión lectora.",
                  "de": "QA-Systeme rufen Antworten aus Textkorpora oder Wissensbasen ab oder generieren sie. Sie reichen von einfachem extraktivem QA (Antwortspannen in Dokumenten finden) bis zu komplexen Reasoning-Systemen. Beispiele sind IBM Watson und moderne Leseverständnismodelle.",
                  "nl": "QA-systemen halen antwoorden op uit tekstcorpora of kennisbanken of genereren ze. Ze variëren van eenvoudige extractieve QA (antwoordspannes in documenten vinden) tot complexe reasoning-systemen. Voorbeelden zijn IBM Watson en moderne leesbegripmodellen."
        }
      },
      {
        question: {
                  "en": "What is reading comprehension in NLP?",
                  "es": "¿Qué es la comprensión lectora en PLN?",
                  "de": "Was ist Leseverständnis in NLP?",
                  "nl": "Wat is leesbegrip in NLP?"
        },
        options: [
        {
                  "en": "Reading speed measurement",
                  "es": "Medición de velocidad de lectura",
                  "de": "Lesegeschwindigkeitsmessung",
                  "nl": "Leessnelheidsmeting"
        },
        {
                  "en": "Comprehending reading lists",
                  "es": "Comprender listas de lectura",
                  "de": "Leselisten verstehen",
                  "nl": "Leeslijsten begrijpen"
        },
        {
                  "en": "Understanding text difficulty",
                  "es": "Entender dificultad del texto",
                  "de": "Textschwierigkeit verstehen",
                  "nl": "Tekstmoeilijkheid begrijpen"
        },
        {
                  "en": "Understanding text passages and answering questions about them",
                  "es": "Entender pasajes de texto y responder preguntas sobre ellos",
                  "de": "Textpassagen verstehen und Fragen dazu beantworten",
                  "nl": "Tekstpassages begrijpen en vragen erover beantwoorden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Reading comprehension tasks test whether models can understand text by answering questions requiring different skills: factual retrieval, inference, reasoning, and synthesis. Datasets like SQuAD evaluate this capability.",
                  "es": "Las tareas de comprensión lectora prueban si los modelos pueden entender texto respondiendo preguntas que requieren diferentes habilidades: recuperación factual, inferencia, razonamiento y síntesis. Conjuntos de datos como SQuAD evalúan esta capacidad.",
                  "de": "Leseverständnisaufgaben testen ob Modelle Text verstehen können indem sie Fragen beantworten die verschiedene Fähigkeiten erfordern: faktische Abfrage, Inferenz, Reasoning und Synthese. Datensätze wie SQuAD bewerten diese Fähigkeit.",
                  "nl": "Leesbegriptaken testen of modellen tekst kunnen begrijpen door vragen te beantwoorden die verschillende vaardigheden vereisen: feitelijke opvraging, inferentie, redenering en synthese. Datasets zoals SQuAD evalueren dit vermogen."
        }
      },
      {
        question: {
                  "en": "What is natural language generation (NLG)?",
                  "es": "¿Qué es la generación de lenguaje natural (NLG)?",
                  "de": "Was ist natürliche Sprachgenerierung (NLG)?",
                  "nl": "Wat is natuurlijke taalgeneratie (NLG)?"
        },
        options: [
        {
                  "en": "Generating random text",
                  "es": "Generar texto aleatorio",
                  "de": "Zufälligen Text generieren",
                  "nl": "Willekeurige tekst genereren"
        },
        {
                  "en": "Generating natural sounding voices",
                  "es": "Generar voces de sonido natural",
                  "de": "Natürlich klingende Stimmen generieren",
                  "nl": "Natuurlijk klinkende stemmen genereren"
        },
        {
                  "en": "Automatically producing human-readable text from structured data or semantic representations",
                  "es": "Producir automáticamente texto legible por humanos desde datos estructurados o representaciones semánticas",
                  "de": "Automatisch menschenlesbaren Text aus strukturierten Daten oder semantischen Darstellungen produzieren",
                  "nl": "Automatisch menselijk leesbare tekst produceren uit gestructureerde data of semantische representaties"
        },
        {
                  "en": "Creating new languages",
                  "es": "Crear nuevos idiomas",
                  "de": "Neue Sprachen erstellen",
                  "nl": "Nieuwe talen maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "NLG transforms data or knowledge into natural language text. Applications include report generation, chatbot responses, data-to-text systems, and creative writing. Modern LLMs have dramatically advanced NLG capabilities.",
                  "es": "NLG transforma datos o conocimiento en texto de lenguaje natural. Las aplicaciones incluyen generación de informes, respuestas de chatbot, sistemas de datos a texto, y escritura creativa. Los LLMs modernos han avanzado dramáticamente las capacidades de NLG.",
                  "de": "NLG transformiert Daten oder Wissen in natürlichsprachlichen Text. Anwendungen umfassen Berichtsgenerierung, Chatbot-Antworten, Daten-zu-Text-Systeme und kreatives Schreiben. Moderne LLMs haben NLG-Fähigkeiten dramatisch vorangebracht.",
                  "nl": "NLG transformeert data of kennis naar natuurlijke taaltekst. Toepassingen omvatten rapportgeneratie, chatbot-reacties, data-naar-tekst systemen, en creatief schrijven. Moderne LLMs hebben NLG-capaciteiten dramatisch verbeterd."
        }
      },
      {
        question: {
                  "en": "What is neural machine translation (NMT)?",
                  "es": "¿Qué es la traducción automática neuronal (NMT)?",
                  "de": "Was ist neuronale maschinelle Übersetzung (NMT)?",
                  "nl": "Wat is neurale machinevertaling (NMT)?"
        },
        options: [
        {
                  "en": "Using neural networks, especially sequence-to-sequence models, to translate between languages",
                  "es": "Usar redes neuronales, especialmente modelos de secuencia a secuencia, para traducir entre idiomas",
                  "de": "Neuronale Netze, besonders Sequenz-zu-Sequenz-Modelle verwenden um zwischen Sprachen zu übersetzen",
                  "nl": "Neurale netwerken gebruiken, vooral sequentie-naar-sequentie modellen, om tussen talen te vertalen"
        },
        {
                  "en": "Machine translation using neurons",
                  "es": "Traducción automática usando neuronas",
                  "de": "Maschinelle Übersetzung mit Neuronen",
                  "nl": "Machinevertaling met neuronen"
        },
        {
                  "en": "Translating neural network architectures",
                  "es": "Traducir arquitecturas de redes neuronales",
                  "de": "Architekturen neuronaler Netze übersetzen",
                  "nl": "Neurale netwerkarchitecturen vertalen"
        },
        {
                  "en": "Neural processing for translation",
                  "es": "Procesamiento neuronal para traducción",
                  "de": "Neuronale Verarbeitung für Übersetzung",
                  "nl": "Neurale verwerking voor vertaling"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "NMT replaced traditional phrase-based statistical MT with end-to-end neural models. Modern NMT uses Transformer architectures with attention mechanisms, achieving human-level quality on many language pairs.",
                  "es": "NMT reemplazó la MT estadística tradicional basada en frases con modelos neuronales de extremo a extremo. NMT moderna usa arquitecturas Transformer con mecanismos de atención, logrando calidad a nivel humano en muchos pares de idiomas.",
                  "de": "NMT ersetzte traditionelle phrasenbasierte statistische MT durch End-to-End-Neuronale Modelle. Moderne NMT verwendet Transformer-Architekturen mit Aufmerksamkeitsmechanismen, erreicht menschliche Qualität bei vielen Sprachpaaren.",
                  "nl": "NMT verving traditionele phrase-based statistische MT met end-to-end neurale modellen. Moderne NMT gebruikt Transformer-architecturen met aandachtmechanismen, bereikt menselijke kwaliteit bij veel talenparen."
        }
      },
      {
        question: {
                  "en": "What is paraphrasing in NLP?",
                  "es": "¿Qué es la paráfrasis en PLN?",
                  "de": "Was ist Paraphrasierung in NLP?",
                  "nl": "Wat is parafraseren in NLP?"
        },
        options: [
        {
                  "en": "Translating between languages",
                  "es": "Traducir entre idiomas",
                  "de": "Zwischen Sprachen übersetzen",
                  "nl": "Tussen talen vertalen"
        },
        {
                  "en": "Expressing the same meaning using different words and sentence structures",
                  "es": "Expresar el mismo significado usando diferentes palabras y estructuras de oraciones",
                  "de": "Dieselbe Bedeutung mit verschiedenen Wörtern und Satzstrukturen ausdrücken",
                  "nl": "Dezelfde betekenis uitdrukken met verschillende woorden en zinsstructuren"
        },
        {
                  "en": "Summarizing paragraphs",
                  "es": "Resumir párrafos",
                  "de": "Absätze zusammenfassen",
                  "nl": "Paragrafen samenvatten"
        },
        {
                  "en": "Formatting paragraphs differently",
                  "es": "Formatear párrafos diferentemente",
                  "de": "Absätze anders formatieren",
                  "nl": "Paragrafen anders formatteren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Paraphrase generation rewrites text while preserving meaning, useful for data augmentation, avoiding plagiarism, simplifying text, and improving writing. It requires understanding semantics and generating fluent alternatives.",
                  "es": "La generación de paráfrasis reescribe texto mientras preserva significado, útil para aumentación de datos, evitar plagio, simplificar texto y mejorar escritura. Requiere entender semántica y generar alternativas fluidas.",
                  "de": "Paraphrasengenerierung schreibt Text um während Bedeutung bewahrt wird, nützlich für Datenaugmentierung, Plagiatsvermeidung, Textvereinfachung und Schreibverbesserung. Es erfordert Semantikverständnis und Generierung flüssiger Alternativen.",
                  "nl": "Parafraseert generatie herschrijft tekst terwijl betekenis behouden blijft, nuttig voor data-augmentatie, plagiaat vermijden, tekst vereenvoudigen en schrijven verbeteren. Het vereist semantiek begrijpen en vloeiende alternatieven genereren."
        }
      },
      {
        question: {
                  "en": "What is dialogue management?",
                  "es": "¿Qué es la gestión de diálogo?",
                  "de": "Was ist Dialogmanagement?",
                  "nl": "Wat is dialoogbeheer?"
        },
        options: [
        {
                  "en": "Managing dialogue files",
                  "es": "Gestionar archivos de diálogo",
                  "de": "Dialogdateien verwalten",
                  "nl": "Dialoogbestanden beheren"
        },
        {
                  "en": "Controlling the flow and state of multi-turn conversations in dialogue systems",
                  "es": "Controlar el flujo y estado de conversaciones de múltiples turnos en sistemas de diálogo",
                  "de": "Fluss und Zustand von Mehrrunden-Gesprächen in Dialogsystemen steuern",
                  "nl": "De stroom en staat van meervoudige beurten gesprekken in dialoogsystemen controleren"
        },
        {
                  "en": "Writing dialogue scripts",
                  "es": "Escribir guiones de diálogo",
                  "de": "Dialogskripte schreiben",
                  "nl": "Dialoogscripts schrijven"
        },
        {
                  "en": "Recording conversations",
                  "es": "Grabar conversaciones",
                  "de": "Gespräche aufzeichnen",
                  "nl": "Gesprekken opnemen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dialogue management tracks conversation history, maintains dialogue state, decides next actions, and handles context across turns. It's crucial for task-oriented chatbots, virtual assistants, and conversational AI.",
                  "es": "La gestión de diálogo rastrea historial de conversación, mantiene estado de diálogo, decide próximas acciones, y maneja contexto a través de turnos. Es crucial para chatbots orientados a tareas, asistentes virtuales e IA conversacional.",
                  "de": "Dialogmanagement verfolgt Gesprächsverlauf, hält Dialogzustand aufrecht, entscheidet über nächste Aktionen und behandelt Kontext über Runden hinweg. Es ist entscheidend für aufgabenorientierte Chatbots, virtuelle Assistenten und konversationelle KI.",
                  "nl": "Dialoogbeheer volgt gespreksgeschiedenis, onderhoudt dialoogstaat, beslist volgende acties, en behandelt context over beurten. Het is cruciaal voor taakgerichte chatbots, virtuele assistenten en conversationele AI."
        }
      },
      {
        question: {
                  "en": "What is intent recognition in dialogue systems?",
                  "es": "¿Qué es el reconocimiento de intención en sistemas de diálogo?",
                  "de": "Was ist Intentionserkennung in Dialogsystemen?",
                  "nl": "Wat is intentieherkenning in dialoogsystemen?"
        },
        options: [
        {
                  "en": "Identifying the user's goal or purpose from their utterance",
                  "es": "Identificar el objetivo o propósito del usuario desde su enunciado",
                  "de": "Das Ziel oder den Zweck des Benutzers aus ihrer Äußerung identifizieren",
                  "nl": "Het doel of de bedoeling van de gebruiker identificeren uit hun uiting"
        },
        {
                  "en": "Recognizing user intentions in code",
                  "es": "Reconocer intenciones de usuario en código",
                  "de": "Benutzerabsichten in Code erkennen",
                  "nl": "Gebruikersintenties in code herkennen"
        },
        {
                  "en": "Understanding design intent",
                  "es": "Entender intención de diseño",
                  "de": "Designabsicht verstehen",
                  "nl": "Ontwerpintentie begrijpen"
        },
        {
                  "en": "Detecting malicious intent",
                  "es": "Detectar intención maliciosa",
                  "de": "Böswillige Absicht erkennen",
                  "nl": "Kwaadaardige intentie detecteren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Intent recognition classifies user utterances into predefined categories representing goals (e.g., book_flight, check_weather, cancel_order). This is typically the first step in task-oriented dialogue systems.",
                  "es": "El reconocimiento de intención clasifica enunciados de usuario en categorías predefinidas representando objetivos (ej., reservar_vuelo, verificar_clima, cancelar_pedido). Este es típicamente el primer paso en sistemas de diálogo orientados a tareas.",
                  "de": "Intentionserkennung klassifiziert Benutzeräußerungen in vordefinierte Kategorien die Ziele repräsentieren (z.B. flug_buchen, wetter_prüfen, bestellung_stornieren). Dies ist typischerweise der erste Schritt in aufgabenorientierten Dialogsystemen.",
                  "nl": "Intentieherkenning classificeert gebruikersuitingen in voorgedefinieerde categorieën die doelen vertegenwoordigen (bijv. vlucht_boeken, weer_checken, bestelling_annuleren). Dit is typisch de eerste stap in taakgerichte dialoogsystemen."
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
                  "en": "No planning",
                  "es": "No planning",
                  "de": "No planning",
                  "nl": "No planning"
        },
        {
                  "en": "Random moves",
                  "es": "Random moves",
                  "de": "Random moves",
                  "nl": "Random moves"
        },
        {
                  "en": "Luck only",
                  "es": "Luck only",
                  "de": "Luck only",
                  "nl": "Luck only"
        },
        {
                  "en": "Planning to achieve objectives",
                  "es": "Planning to achieve objectives",
                  "de": "Planning to achieve objectives",
                  "nl": "Planning to achieve objectives"
        }
        ],
        correct: 3,
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
    module.exports = level5;
  }
})();